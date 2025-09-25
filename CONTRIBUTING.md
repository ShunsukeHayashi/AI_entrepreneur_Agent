# Contributing Guide

Thank you for investing in the AI Entrepreneur Agent project! This guide documents how to prepare your development environment and contribute effectively while the monorepo scaffolding evolves.

## Prerequisites
- **Node.js**: Version 18 or later, including npm. Workspaces leverage npm for dependency management.
- **Python**: Version 3.9.6 aligned with AI engine requirements.
- **PostgreSQL**: Version 14 for local development and integration tests.
- **Docker**: Optional but recommended for containerized workflows and future Kubernetes deployments.

## Repository Setup
1. Fork or clone the repository and create a feature branch following `devin/{timestamp}-{feature-name}`.
2. Install dependencies once each workspace is scaffolded:
   - `npm install` at the repository root will install shared tooling and workspace packages.
   - Individual services (frontend, backend, ai-engine) may expose additional setup scripts as they are implemented.
3. Copy environment variable templates (to be introduced with service scaffolds) into `.env` files per workspace.
4. Keep documentation synchronized with your changes, especially when altering developer tooling or workflows.

## Tooling Commands
- `npm run lint`: Placeholder command at the root. Each workspace will layer in concrete lint targets (ESLint, mypy, etc.).
- `npm run test`: Placeholder command at the root. Service-specific suites (Jest, pytest, component tests) will be wired as their scaffolds are added.
- Future commands (e.g., `npm run format`, `npm run typecheck`) should reuse the shared configuration in `eslint.config.js` and `.prettierrc.json`.

## Code Style and Reviews
- Follow the shared `.editorconfig`, `.prettierrc.json`, and `eslint.config.js` conventions.
- Prefer small, focused commits using Conventional Commit messages (e.g., `feat(repo): scaffold monorepo structure`).
- Ensure all relevant tests and linters pass locally before opening a pull request.
- Document notable architectural decisions or TODOs within the appropriate README files or `/docs` references.

## Roadmap Alignment
- Story S-001 covers repository scaffolding, so refrain from adding production code until later stories (S-002+).
- Track unresolved decisions (package managers, IaC tooling, etc.) within the affected READMEs for visibility.
- Coordinate with reviewers to keep the `.ai/` planning artifacts in sync with implementation progress.

We appreciate your collaboration—please open an issue if you have questions about setup or roadmap scope.
