# 📬 InboxOS

**AI-First Universal Email Client** — A production-grade, mobile-first PWA that unifies Gmail, Office 365, and IMAP behind a single intelligent interface.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### Core Email
- 📥 **Unified Inbox** — All accounts in a single, merged view
- 🔄 **Multi-Account** — Gmail, Office 365, IMAP with seamless switching
- 🏷️ **Labels & Folders** — Unified label system across providers
- 📦 **Archive & Delete** — Batch operations with undo support
- 🔍 **Universal Search** — Full-text search across all accounts

### AI-Powered
- 🧠 **Smart Summaries** — AI-generated thread summaries with key points and action items
- 📊 **Priority Scoring** — Intelligent email prioritization (Critical → Low)
- ✍️ **Reply Drafts** — AI-generated reply suggestions matching your tone
- 🏷️ **Auto-Classification** — Automatic categorization of incoming email

### Architecture
- 📱 **Mobile-First PWA** — Installable, offline-capable, push notifications
- 🔌 **Plugin System** — Extend functionality via sandboxed plugins
- 🪝 **Lifecycle Hooks** — Event-driven extensibility for all email operations
- 🤖 **Multi-Agent Orchestration** — Specialized AI agents for different tasks

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────┐
│                    apps/web (Next.js 15)                  │
│  ┌─────────┐  ┌──────────┐  ┌─────────┐  ┌───────────┐  │
│  │  Inbox   │  │  Thread  │  │ Compose │  │  Search   │  │
│  └────┬─────┘  └────┬─────┘  └────┬────┘  └─────┬─────┘  │
│       └──────────────┴─────────────┴─────────────┘        │
├──────────────────────────────────────────────────────────┤
│                   packages/core                           │
│  ┌──────────┐  ┌────────────┐  ┌────────┐  ┌──────────┐  │
│  │ Adapters │  │ AI Pipeline│  │  Sync  │  │  Search  │  │
│  │ Gmail    │  │ Summarizer │  │ Engine │  │  Engine  │  │
│  │ O365     │  │ Prioritizer│  │ Delta  │  │  Indexer │  │
│  │ IMAP     │  │ Drafter    │  │ Tracker│  │  Parser  │  │
│  └──────────┘  └────────────┘  └────────┘  └──────────┘  │
├──────────────────────────────────────────────────────────┤
│         hooks/          │         plugins/                 │
│  on-receive, on-send    │   calendar, contacts, analytics  │
│  on-classify, on-sync   │   + Plugin SDK                   │
└──────────────────────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm 9+
- Gmail / Microsoft OAuth credentials (for email integration)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-org/inbox-os.git
cd inbox-os

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run database migrations
pnpm db:migrate

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

| Directory | Purpose |
|-----------|---------|
| `apps/web/` | Next.js 15 PWA — all UI, routes, and API handlers |
| `packages/core/` | Business logic — adapters, AI pipeline, sync, search, auth |
| `packages/ui/` | Shared UI components (shadcn/ui) |
| `packages/database/` | Drizzle ORM schema, migrations, database client |
| `packages/config/` | Shared TypeScript, ESLint, Tailwind configurations |
| `agents/` | Multi-agent orchestration system |
| `hooks/` | Lifecycle hook system for extensibility |
| `plugins/` | Plugin SDK and built-in plugins |
| `tests/` | Unit, integration, E2E, and AI evaluation tests |
| `docs/` | Architecture documentation, API docs, ADRs |

---

## 🧪 Testing

```bash
pnpm test           # Unit + integration tests (Vitest)
pnpm test:e2e       # End-to-end tests (Playwright)
pnpm test:ai        # AI output quality evaluation
pnpm lint           # Linting
pnpm typecheck      # Type checking
```

---

## 🚢 Deployment

InboxOS is optimized for **Vercel** deployment:

```bash
# Production build
pnpm build

# Deploy to Vercel
vercel --prod
```

See [docs/deployment/](docs/deployment/) for detailed deployment guides.

---

## 📄 License

MIT © InboxOS Contributors
