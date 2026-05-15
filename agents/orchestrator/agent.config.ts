export const orchestratorConfig = {
  name: 'InboxOS Orchestrator',
  description: 'Coordinates email processing, search, and user intent routing.',
  version: '1.0.0',
  agents: [
    {
      id: 'email-processor',
      role: 'Ingestion and classification of new emails',
      maxTokens: 1000
    },
    {
      id: 'search-agent',
      role: 'Semantic and metadata-based search resolution',
      maxTokens: 2000
    }
  ]
};
