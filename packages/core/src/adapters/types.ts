import { DraftMessage, EmailMessage, EmailThread, Label } from '../types/email';

export interface AuthCredentials {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  scopes?: string[];
}

export interface HealthStatus {
  ok: boolean;
  error?: string;
  latencyMs?: number;
}

export interface ListQuery {
  folderId?: string;
  labelId?: string;
  pageToken?: string;
  maxResults?: number;
  query?: string; // Provider-specific search string
}

export interface PaginatedResult<T> {
  items: T[];
  nextPageToken?: string;
  totalResults?: number;
}

export interface SendResult {
  messageId: string;
  threadId?: string;
  sentAt: Date;
}

export interface SyncDelta {
  added: EmailMessage[];
  updated: EmailMessage[];
  deleted: string[]; // IDs of deleted messages
  nextCursor: string;
  hasMore: boolean;
}

export interface WebhookRegistration {
  id: string;
  url: string;
  expiresAt?: Date;
  providerData?: Record<string, unknown>;
}

export interface SearchQuery {
  term: string;
  from?: string;
  to?: string;
  hasAttachment?: boolean;
  dateRange?: {
    start: Date;
    end: Date;
  };
  pageToken?: string;
  maxResults?: number;
}

export interface IEmailAdapter {
  readonly providerId: 'gmail' | 'office365' | 'imap';

  // Connection lifecycle
  connect(credentials: AuthCredentials): Promise<void>;
  disconnect(): Promise<void>;
  healthCheck(): Promise<HealthStatus>;

  // Messages
  listMessages(query: ListQuery): Promise<PaginatedResult<EmailMessage>>;
  getMessage(id: string): Promise<EmailMessage>;
  sendMessage(draft: DraftMessage): Promise<SendResult>;
  deleteMessage(id: string): Promise<void>;
  archiveMessage(id: string): Promise<void>;
  moveMessage(id: string, targetFolderId: string): Promise<void>;

  // Threads
  getThread(threadId: string): Promise<EmailThread>;
  listThreads(query: ListQuery): Promise<PaginatedResult<EmailThread>>;

  // Labels / Folders
  listLabels(): Promise<Label[]>;
  applyLabel(messageId: string, labelId: string): Promise<void>;
  removeLabel(messageId: string, labelId: string): Promise<void>;

  // Sync
  syncDelta(cursor: string | null): Promise<SyncDelta>;
  registerWebhook(url: string): Promise<WebhookRegistration>;

  // Search
  search(query: SearchQuery): Promise<PaginatedResult<EmailMessage>>;
}
