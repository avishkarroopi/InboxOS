import { EmailMessage, EmailThread, PriorityResult, AISummary, DraftMessage } from '../types/email';

export interface Classification {
  category: 'newsletter' | 'transactional' | 'personal' | 'work' | 'spam' | 'other';
  intent: string | null;
  confidence: number; // 0-1
}

export interface IAIPipeline {
  summarize(thread: EmailThread): Promise<AISummary>;
  prioritize(messages: EmailMessage[]): Promise<PriorityResult[]>;
  draftReply(thread: EmailThread, intent?: string): Promise<DraftMessage>;
  classify(message: EmailMessage): Promise<Classification>;
}

export interface AIOptions {
  model?: string;
  temperature?: number;
  maxTokens?: number;
}
