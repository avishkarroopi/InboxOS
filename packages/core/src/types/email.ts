export interface Contact {
  name: string | null;
  email: string;
}

export interface Attachment {
  id: string;
  filename: string;
  contentType: string;
  size: number;
  url?: string;
}

export interface Label {
  id: string;
  name: string;
  type: 'system' | 'user';
  color?: string;
}

export interface ActionItem {
  task: string;
  assignee?: string;
  dueDate?: string;
}

export interface Sentiment {
  score: number; // -1 to 1
  label: 'positive' | 'neutral' | 'negative';
}

export interface AISummary {
  headline: string;
  keyPoints: string[];
  actionItems: ActionItem[];
  sentiment: Sentiment;
  confidence: number;
  generatedAt: Date;
}

export interface PrioritySignal {
  type: 'sender_importance' | 'urgency_keyword' | 'direct_mention' | 'thread_activity' | 'custom_rule';
  weight: number;
  description: string;
}

export interface PriorityResult {
  score: number; // 0-100
  tier: 'critical' | 'important' | 'normal' | 'low';
  reason: string;
  signals: PrioritySignal[];
  calculatedAt: Date;
}

export interface EmailMessage {
  id: string;
  externalId: string;
  accountId: string;
  threadId: string;
  subject: string;
  from: Contact;
  to: Contact[];
  cc: Contact[];
  bcc: Contact[];
  body: {
    html: string;
    text: string;
  };
  snippet: string;
  labels: Label[];
  attachments: Attachment[];
  receivedAt: Date;
  isRead: boolean;
  isStarred: boolean;
  priority: PriorityResult | null;
  aiSummary: AISummary | null;
  syncStatus: 'synced' | 'pending' | 'conflict';
}

export interface EmailThread {
  id: string;
  externalId: string;
  accountId: string;
  subject: string;
  participants: Contact[];
  messages: EmailMessage[];
  messageCount: number;
  snippet: string;
  labels: Label[];
  lastMessageAt: Date;
  isRead: boolean;
  isStarred: boolean;
  priority: PriorityResult | null;
  aiSummary: AISummary | null;
}

export interface DraftMessage {
  id?: string;
  accountId: string;
  threadId?: string;
  subject: string;
  to: Contact[];
  cc?: Contact[];
  bcc?: Contact[];
  body: {
    html: string;
    text: string;
  };
  attachments?: File[] | Blob[];
}
