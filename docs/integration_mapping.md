# Integration Mapping

This document aligns project components with external integrations and automation hooks.

## Toolchain Roles

| Component | Role | Notes |
| --- | --- | --- |
| Devin | Upstream planner | Supplies approved story/task definitions in `.ai/`.
| Codex | Coding agent | Implements stories, maintains logs, prepares handoffs.
| Cursor | IDE reviewer | Validates code, suggests refactors, runs manual tests.
| Roo | Lint/Rule checker | Ensures compliance with repo-specific conventions.
| GitHub Actions | CI pipeline | Executes automated tests and linting on PRs. |

## Service Integrations

- **OpenAI / GPT API**: Provides language-model capabilities for AI Engine modules.
- **AWS (EC2, RDS, S3)**: Hosts workloads and persists artifacts.
- **Stripe (planned)**: Monetization of SaaS tier.
- **Slack Webhooks (planned)**: Team notifications for pipeline events.

## Repository Signals

- `.ai/` directory captures PRD-approved state and must remain the source of truth for in-progress items.
- `logs/` directory stores LDD transcripts for cross-agent visibility.
- `docs/` folder centralizes architectural references for onboarding new agents.

