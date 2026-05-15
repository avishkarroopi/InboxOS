# InboxOS Agent Orchestration

The AI layer in InboxOS is not a monolithic prompt. It is a multi-agent orchestration system designed for high reliability, cost-efficiency, and modularity. This document outlines the conceptual boundaries and responsibilities of each agent.

## Orchestration Philosophy

We follow a **Supervisor-Worker** pattern. The Orchestrator acts as the router, intercepting user intent and system events, and delegating work to specialized, context-constrained agents.

- **No God Agents**: Agents have strict, limited scopes. The Drafting Agent cannot delete emails; the Ingestion Agent cannot send emails.
- **Cost Routing**: The Orchestrator dynamically selects the LLM based on task complexity.

---

## Agent Roster

### 1. Email Ingestion Agent (The Classifier)
**Role**: Triage and metadata extraction.
**Trigger**: Hook `email:received`.
**Responsibilities**:
- Strips HTML and signatures from incoming emails to save tokens.
- Classifies the email intent (e.g., "newsletter", "urgent client request", "receipt").
- Assigns a priority score (0-100) based on historical user interactions and sender importance.
**Model Tier**: Fast/Cheap (e.g., GPT-4o-mini).

### 2. AI Summarizer Agent (The Reader)
**Role**: Cognitive load reduction.
**Trigger**: UI Request (Thread view opened) or batch background job.
**Responsibilities**:
- Condenses long, nested threads into a single headline.
- Extracts bulleted key points and explicit action items.
- Identifies the overall sentiment of the thread.
**Model Tier**: Medium Reasoning.

### 3. Drafting Agent (The Writer)
**Role**: Context-aware reply generation.
**Trigger**: UI Request (User clicks "Draft Reply").
**Responsibilities**:
- Analyzes the entire thread context.
- Generates a response matching the user's historical tone.
- Leaves placeholders (e.g., `[Insert Time]`) for facts it cannot verify.
**Model Tier**: High Reasoning (e.g., GPT-4o or Claude 3.5 Sonnet).

### 4. Search Agent (The Retriever)
**Role**: Natural language query resolution.
**Trigger**: User enters a complex query in the UI (e.g., "Find the Q3 report John sent me last month").
**Responsibilities**:
- Translates natural language into structured `SearchQuery` parameters (date ranges, sender emails).
- Performs semantic search if traditional keyword search yields low-confidence results.
**Model Tier**: Fast/Cheap.

### 5. UI Agent (The Assistant)
**Role**: Global intent execution.
**Trigger**: Command Palette (`Cmd+K`) or natural language input.
**Responsibilities**:
- Interprets user commands like "Snooze this until tomorrow" or "Unsubscribe from this newsletter".
- Translates these intents into deterministic API calls to the core InboxOS engine.
**Model Tier**: Medium Reasoning with strict Tool Use/Function Calling.

---

## Future Extensibility
The Orchestrator is designed so that new agents can be added via the Plugin SDK. For example, a "CRM Agent" could be registered to automatically extract lead information from incoming emails and sync it to Salesforce, listening exclusively on the `email:classified` hook.
