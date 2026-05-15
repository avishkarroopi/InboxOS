# InboxOS Engineering Handbook

Welcome to the internal engineering handbook for AI-assisted development of InboxOS. This document defines our coding standards, architectural invariants, and workflow disciplines.

## 1. Architectural Invariants
- **Strict Unified Adapter Pattern**: The UI and core business logic MUST NEVER interact directly with a provider API (e.g., `googleapis` or `microsoft-graph`). All communication must go through an implementation of `IEmailAdapter`.
- **Event-Driven Extensibility**: All major operations (receiving, sending, classifying) must emit a hook via `hooks/registry.ts`.
- **Decoupled AI Pipeline**: The AI logic is not a single prompt in a UI component. It is a strict multi-agent pipeline (`packages/core/src/ai/`).
- **Monorepo Rules**: `apps/*` can import from `packages/*`. `packages/*` CANNOT import from `apps/*`. Packages should not depend on each other cyclically.

## 2. Coding Standards & Component Structure
- **TypeScript Strictness**: `strict: true` is non-negotiable. Avoid `any`; use `unknown` with type guards.
- **Component Conventions**:
  - One component per file.
  - Client components must start with `"use client";`.
  - Use functional components with `const` and explicit `React.FC` or return types.
- **Naming Standards**:
  - Components: `PascalCase.tsx`
  - Hooks: `use-kebab-case.ts`
  - Utilities/Adapters: `kebab-case.adapter.ts`
  - Types/Interfaces: `kebab-case.ts`

## 3. UI Consistency Standards
- **Aesthetic**: Premium, whitespace-heavy, minimal SaaS design (inspired by Linear/Superhuman).
- **Tailwind**: Use `clsx` and `tailwind-merge` for dynamic classes. Stick to `zinc` for grays, `blue/indigo` for primary accents.
- **Interactions**: All hover states, dialogs, and route changes must have subtle `transition-colors` or motion.
- **Keyboard-First**: Implement global hotkeys (`Cmd+K`, `E` for archive, `#` for delete) whenever building action components.

## 4. AI Workflow Discipline
- **Cost Routing**: Default to fast/cheap models (GPT-4o-mini) for deterministic tasks (classification). Use reasoning models (Opus/Sonnet/GPT-4o) ONLY for generative tasks (drafting).
- **Graceful Degradation**: If an AI request times out or fails, the core email functionality must remain fully operational.

## 5. Testing Rules
- **Vitest**: For core business logic (`packages/core/*`).
- **Playwright**: For critical user flows in `apps/web`.
- **Mocking**: Always use the provided fixtures (e.g., `tests/fixtures/emails.json`) for UI dev. Never rely on live API keys in test suites.

## 6. Anti-Patterns to Avoid
- ❌ **Leaking Provider Logic**: Writing `if (email.isGmail) { ... }` in a React component.
- ❌ **God Components**: Putting data fetching, state management, and complex rendering all in `page.tsx`.
- ❌ **Direct Database Access from UI**: Always use Server Actions or API routes.
- ❌ **Blocking the Main Thread**: AI summaries should be fetched asynchronously without blocking the UI rendering.
