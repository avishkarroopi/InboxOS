# Architecture Decision Log

This document records the major architectural decisions made during the design and implementation of InboxOS. It serves as a historical record of context, tradeoffs, and rationale for future engineering teams.

## 1. Unified Email Adapter Pattern
**Status**: Adopted
**Context**: We need to support Gmail, Office365, and generic IMAP. Each provider has radically different data models (e.g., Gmail's thread-and-label model vs. Microsoft Graph's folder-and-item model).
**Decision**: Implement a strict `BaseEmailAdapter` that enforces a canonical `IEmailAdapter` interface. 
**Rationale**:
- **UI Decoupling**: The Next.js frontend should never know whether an email came from Gmail or Office365. It only speaks "InboxOS Canonical Types".
- **Maintainability**: New providers (e.g., Fastmail, Yahoo) can be added simply by writing a new adapter that maps to the canonical types, without touching any UI code.
**Tradeoffs**: We lose access to some highly specific, proprietary features of individual platforms. This is an acceptable tradeoff for a unified, fast, and consistent UX.

## 2. Event-Driven Hooks System
**Status**: Adopted
**Context**: InboxOS needs to support extensibility (plugins, analytics, CRM integrations) without creating a monolithic, tightly-coupled core engine.
**Decision**: Implement a synchronous/asynchronous hook registry (`hooks/registry.ts`).
**Rationale**:
- **Separation of Concerns**: When an email is sent, the core engine just emits `email:post-send`. An analytics plugin or an AI learning agent can subscribe to this event independently.
- **Plugin Sandbox**: It allows us to safely inject functionality via a Plugin SDK that interacts purely through these lifecycle hooks.
**Tradeoffs**: Hook execution order can sometimes become non-deterministic if not carefully managed. We mitigate this by enforcing pure async handlers and isolated failure domains (a failing hook does not crash the core pipeline).

## 3. Decoupled AI Pipeline
**Status**: Adopted
**Context**: AI models and providers (OpenAI, Anthropic, local LLMs) are evolving rapidly. We cannot hardcode our prompts or reasoning logic directly into UI components or email fetching logic.
**Decision**: Isolate the AI workflow into a strict `IAIPipeline` interface (`packages/core/src/ai/`).
**Rationale**:
- **Routing Flexibility**: We can route simple tasks (classification) to fast, cheap models (e.g., GPT-4o-mini or Haiku) and complex tasks (reply drafting) to high-reasoning models (GPT-4o or Opus).
- **Testability**: We can run headless evaluation tests on the AI pipeline without needing to spin up the UI or mock email APIs.
**Tradeoffs**: Adds a layer of indirection.

## 4. Turborepo Monorepo Architecture
**Status**: Adopted
**Context**: We have a Next.js web app, core business logic, database schemas, and shared UI components.
**Decision**: Use Turborepo with `pnpm` workspaces.
**Rationale**:
- **Strict Boundaries**: Enforces that `apps/web` cannot import directly from `packages/database` bypassing `packages/core`. Dependencies flow in one direction.
- **Build Performance**: Remote caching and parallel pipeline execution (`^build`) drastically reduce CI/CD times.
**Tradeoffs**: Slight initial setup complexity compared to a standard Next.js monolith.

## 5. Offline-First PWA (Next.js 15)
**Status**: Adopted
**Context**: Users expect email clients to load instantly and function gracefully on bad networks (e.g., subways, airplanes).
**Decision**: Implement a hybrid offline architecture using Service Workers for the App Shell and IndexedDB for state.
**Rationale**:
- **Speed**: Loading from IndexedDB is instantaneous compared to network fetches.
- **Resilience**: Actions (archive, send) are queued locally and synchronized in the background.
**Tradeoffs**: State synchronization complexity (conflict resolution, stale data) is significantly higher than a purely server-rendered app.

## 6. Client-Side State with Zustand
**Status**: Adopted
**Context**: We need to manage complex UI state (active thread, compose windows, sidebar state) alongside server state (email lists).
**Decision**: Use Zustand for UI state, and React Query for server state caching.
**Rationale**:
- Zustand is minimal, unopinionated, and fast. It avoids the boilerplate of Redux and the re-render issues of native React Context for complex state.
