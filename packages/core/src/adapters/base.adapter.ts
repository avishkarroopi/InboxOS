import { DraftMessage, EmailMessage, EmailThread, Label } from '../types/email';
import {
  AuthCredentials,
  HealthStatus,
  IEmailAdapter,
  ListQuery,
  PaginatedResult,
  SearchQuery,
  SendResult,
  SyncDelta,
  WebhookRegistration,
} from './types';

/**
 * Base adapter class that provides common utility functions and
 * enforces consistent error handling across all email providers.
 */
export abstract class BaseEmailAdapter implements IEmailAdapter {
  public abstract readonly providerId: 'gmail' | 'office365' | 'imap';
  
  protected credentials: AuthCredentials | null = null;

  public async connect(credentials: AuthCredentials): Promise<void> {
    this.credentials = credentials;
    await this.verifyConnection();
  }

  public async disconnect(): Promise<void> {
    this.credentials = null;
  }

  protected ensureAuthenticated(): void {
    if (!this.credentials) {
      throw new Error(`[${this.providerId}] Adapter not authenticated. Call connect() first.`);
    }
  }

  /**
   * Helper to handle provider-specific errors and map them to unified application errors
   */
  protected async handleProviderRequest<T>(request: () => Promise<T>): Promise<T> {
    this.ensureAuthenticated();
    try {
      return await request();
    } catch (error: any) {
      // Abstract error mapping (can be overridden by specific adapters)
      if (error.status === 401 || error.statusCode === 401) {
        throw new Error('Authentication failed: Token expired or invalid');
      }
      if (error.status === 429 || error.statusCode === 429) {
        throw new Error('Rate limit exceeded');
      }
      throw error;
    }
  }

  // Abstract methods that must be implemented by specific providers
  protected abstract verifyConnection(): Promise<void>;
  public abstract healthCheck(): Promise<HealthStatus>;
  public abstract listMessages(query: ListQuery): Promise<PaginatedResult<EmailMessage>>;
  public abstract getMessage(id: string): Promise<EmailMessage>;
  public abstract sendMessage(draft: DraftMessage): Promise<SendResult>;
  public abstract deleteMessage(id: string): Promise<void>;
  public abstract archiveMessage(id: string): Promise<void>;
  public abstract moveMessage(id: string, targetFolderId: string): Promise<void>;
  public abstract getThread(threadId: string): Promise<EmailThread>;
  public abstract listThreads(query: ListQuery): Promise<PaginatedResult<EmailThread>>;
  public abstract listLabels(): Promise<Label[]>;
  public abstract applyLabel(messageId: string, labelId: string): Promise<void>;
  public abstract removeLabel(messageId: string, labelId: string): Promise<void>;
  public abstract syncDelta(cursor: string | null): Promise<SyncDelta>;
  public abstract registerWebhook(url: string): Promise<WebhookRegistration>;
  public abstract search(query: SearchQuery): Promise<PaginatedResult<EmailMessage>>;
}
