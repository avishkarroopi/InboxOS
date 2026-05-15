import { BaseEmailAdapter } from './base.adapter';
import {
  AuthCredentials,
  HealthStatus,
  ListQuery,
  PaginatedResult,
  SearchQuery,
  SendResult,
  SyncDelta,
  WebhookRegistration,
} from './types';
import { DraftMessage, EmailMessage, EmailThread, Label } from '../types/email';
import { google, gmail_v1 } from 'googleapis';

export class GmailAdapter extends BaseEmailAdapter {
  public readonly providerId = 'gmail';
  private gmail: gmail_v1.Gmail;

  constructor(credentials: AuthCredentials) {
    super();
    const auth = new google.auth.OAuth2();
    auth.setCredentials({ access_token: credentials.accessToken });
    this.gmail = google.gmail({ version: 'v1', auth });
  }

  protected async verifyConnection(): Promise<void> {
    if (!this.credentials?.accessToken) {
      throw new Error('Invalid Gmail credentials');
    }
  }

  public async healthCheck(): Promise<HealthStatus> {
    try {
      const start = Date.now();
      await this.gmail.users.getProfile({ userId: 'me' });
      return { ok: true, latencyMs: Date.now() - start };
    } catch (error: any) {
      return { ok: false, error: error.message };
    }
  }

  private parseHeaders(headers: any[] | undefined): Record<string, string> {
    const parsed: Record<string, string> = {};
    if (!headers) return parsed;
    for (const h of headers) {
      parsed[h.name.toLowerCase()] = h.value;
    }
    return parsed;
  }

  private parseContact(headerValue: string | undefined) {
    if (!headerValue) return { name: 'Unknown', email: 'unknown@example.com' };
    const match = headerValue.match(/(.*)<(.*)>/);
    if (match) {
      return { name: match[1].trim().replace(/"/g, ''), email: match[2].trim() };
    }
    return { name: headerValue, email: headerValue };
  }

  public async listMessages(query?: ListQuery): Promise<PaginatedResult<EmailMessage>> {
    return this.handleProviderRequest(async () => {
      const q = query?.query || 'in:inbox';
      
      const res = await this.gmail.users.messages.list({
        userId: 'me',
        maxResults: query?.maxResults || 20,
        q,
        pageToken: query?.pageToken,
      });

      const messagesIds = res.data.messages || [];
      
      const items = await Promise.all(
        messagesIds.map(async (msg) => {
          const detail = await this.gmail.users.messages.get({
            userId: 'me',
            id: msg.id!,
            format: 'full',
          });
          
          const payload = detail.data.payload;
          const headers = this.parseHeaders(payload?.headers);
          
          const from = this.parseContact(headers['from']);
          const to = headers['to'] ? headers['to'].split(',').map(t => this.parseContact(t)) : [];
          
          let bodyHtml = detail.data.snippet || '';
          
          // Try to extract real HTML body if available
          if (payload?.parts) {
            const htmlPart = payload.parts.find(p => p.mimeType === 'text/html');
            if (htmlPart?.body?.data) {
              bodyHtml = Buffer.from(htmlPart.body.data, 'base64').toString('utf8');
            }
          } else if (payload?.body?.data) {
            bodyHtml = Buffer.from(payload.body.data, 'base64').toString('utf8');
          }

          const isUnread = detail.data.labelIds?.includes('UNREAD') ?? false;
          const isStarred = detail.data.labelIds?.includes('STARRED') ?? false;

          const email = {
            id: detail.data.id!,
            threadId: detail.data.threadId!,
            subject: headers['subject'] || 'No Subject',
            from,
            to,
            cc: [],
            bcc: [],
            receivedAt: new Date(parseInt(detail.data.internalDate!)),
            snippet: detail.data.snippet || '',
            body: {
              text: detail.data.snippet || '',
              html: bodyHtml,
            },
            attachments: [],
            isRead: !isUnread,
            isStarred,
            labels: (detail.data.labelIds || []).map((id: string) => ({ id, name: id, type: 'system' as const })),
          } as unknown as EmailMessage;
          
          return email;
        })
      );

      return {
        items,
        nextPageToken: res.data.nextPageToken || undefined,
        totalResults: res.data.resultSizeEstimate ?? undefined,
      };
    });
  }

  public async getMessage(_id: string): Promise<EmailMessage> {
    throw new Error('Not implemented');
  }

  public async sendMessage(_draft: DraftMessage): Promise<SendResult> {
    throw new Error('Not implemented');
  }

  public async deleteMessage(id: string): Promise<void> {
    return this.handleProviderRequest(async () => {
      await this.gmail.users.messages.trash({ userId: 'me', id });
    });
  }

  public async archiveMessage(id: string): Promise<void> {
    return this.handleProviderRequest(async () => {
      await this.gmail.users.messages.modify({
        userId: 'me',
        id,
        requestBody: { removeLabelIds: ['INBOX'] },
      });
    });
  }

  public async moveMessage(_id: string, _targetFolderId: string): Promise<void> {
    throw new Error('Not implemented');
  }

  public async getThread(_threadId: string): Promise<EmailThread> {
    throw new Error('Not implemented');
  }

  public async listThreads(_query: ListQuery): Promise<PaginatedResult<EmailThread>> {
    throw new Error('Not implemented');
  }

  public async listLabels(): Promise<Label[]> {
    throw new Error('Not implemented');
  }

  public async applyLabel(messageId: string, labelId: string): Promise<void> {
    return this.handleProviderRequest(async () => {
      await this.gmail.users.messages.modify({
        userId: 'me',
        id: messageId,
        requestBody: { addLabelIds: [labelId] },
      });
    });
  }

  public async removeLabel(messageId: string, labelId: string): Promise<void> {
    return this.handleProviderRequest(async () => {
      await this.gmail.users.messages.modify({
        userId: 'me',
        id: messageId,
        requestBody: { removeLabelIds: [labelId] },
      });
    });
  }

  public async syncDelta(_cursor: string | null): Promise<SyncDelta> {
    throw new Error('Not implemented');
  }

  public async registerWebhook(url: string): Promise<WebhookRegistration> {
    return this.handleProviderRequest(async () => {
      return { id: 'mock-watch-id', url };
    });
  }

  public async search(_query: SearchQuery): Promise<PaginatedResult<EmailMessage>> {
    return { items: [] };
  }
}
