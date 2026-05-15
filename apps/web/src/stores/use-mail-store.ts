import { create } from 'zustand';
import type { EmailMessage } from '@inbox-os/core';
import mockEmails from '../../../../tests/fixtures/emails.json';

interface MailState {
  emails: EmailMessage[];
  selectedEmailId: string | null;
  searchQuery: string;
  filter: 'inbox' | 'starred' | 'sent' | 'drafts' | 'trash';
  
  // Actions
  selectEmail: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setFilter: (filter: MailState['filter']) => void;
  toggleReadStatus: (id: string) => void;
  archiveEmail: (id: string) => void;
  deleteEmail: (id: string) => void;
}

// Convert JSON strings to Dates for the mock data
const parsedMockEmails = (mockEmails as unknown as any[]).map(email => ({
  ...email,
  receivedAt: new Date(email.receivedAt),
  priority: email.priority ? {
    ...email.priority,
    calculatedAt: new Date(email.priority.calculatedAt)
  } : null
})) as EmailMessage[];

export const useMailStore = create<MailState>((set) => ({
  emails: parsedMockEmails,
  selectedEmailId: null,
  searchQuery: '',
  filter: 'inbox',

  selectEmail: (id) => set({ selectedEmailId: id }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilter: (filter) => set({ filter, selectedEmailId: null }),

  toggleReadStatus: (id) => set((state) => ({
    emails: state.emails.map(email => 
      email.id === id ? { ...email, isRead: !email.isRead } : email
    )
  })),

  archiveEmail: (id) => set((state) => ({
    emails: state.emails.filter(email => email.id !== id),
    selectedEmailId: state.selectedEmailId === id ? null : state.selectedEmailId
  })),

  deleteEmail: (id) => set((state) => ({
    emails: state.emails.filter(email => email.id !== id),
    selectedEmailId: state.selectedEmailId === id ? null : state.selectedEmailId
  }))
}));
