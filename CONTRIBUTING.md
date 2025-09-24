# Contributing Guide

Thank you for investing in the AI Entrepreneur Agent project! This guide documents how to prepare your development environment and contribute effectively while the monorepo scaffolding evolves.

## Overview
This repository follows the Cursorアジャイルワークフロー and Log-Driven Development (LDD). Every contribution must align with the approved PRD and architecture documents stored in the `.ai/` directory. Use this guide to onboard your local environment and collaborate smoothly across service layers.

## Prerequisites
- Node.js 18.x and npm (ships with Node) for workspace tooling.
- Python 3.9.6 with `venv` or `pyenv` for the AI engine service.
- PostgreSQL 14 for local database testing.
- Docker Desktop (or compatible container runtime) when validating container workflows.
- Git with access to the project repository and ability to create feature branches.

## Repository Structure
```
frontend/       React SPA source (Story S-003 will bootstrap the implementation)
backend/        Express API service (Story S-002 will introduce runtime code)
ai-engine/      Python ML pipelines (Story S-004 will define the package layout)
infrastructure/ Infrastructure-as-code assets (future epics will populate Terraform/Kubernetes files)
```

Each directory currently contains documentation placeholders that outline upcoming responsibilities and tooling decisions.

## Getting Started
1. Clone the repository and create a feature branch using the `devin/{timestamp}-{feature-name}` convention.
2. Install shared tooling dependencies:
   ```bash
   npm install
   ```
   The root `package.json` defines npm workspaces for `frontend`, `backend`, and `ai-engine`. Service-level packages currently expose placeholder scripts that will be replaced as scaffolds land in later stories.
3. Configure the Python environment for the AI engine when Story S-004 lands. For now, create a virtual environment so it is ready for dependency installation:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```
4. Provision PostgreSQL 14 locally and ensure credentials are available; `.env.example` files will be provided alongside service scaffolds.
5. Keep documentation synchronized with your changes, especially when altering developer tooling or workflows.

## Development Workflow
- Consult `.ai/prd.md` and `.ai/story/` files before beginning work to confirm the active story and acceptance criteria.
- Maintain LDD logs as described in `docs/ldd/workflow.md` (intent → plan → implementation → verification → handoff) and store artifacts under the `logs/` directory.
- Keep a single epic and story in-progress; report any violations in `.ai/story/` metadata.

## Tooling Commands
- `npm run lint`: placeholder that will delegate to service-level linters once scaffolding is complete.
- `npm run test`: placeholder that will orchestrate service-level test suites.
- `npm run format`: runs Prettier across the repository. Use this before committing formatting changes.

Service directories will expose analogous placeholder commands; replace them with real scripts as your story introduces executable code.

## Code Style and Reviews
- Follow the shared `.editorconfig`, `.prettierrc.json`, and `eslint.config.js` conventions.
- Prefer small, focused commits using Conventional Commit messages (e.g., `feat(backend): add health endpoint`).
- Ensure all relevant tests and linters pass locally before opening a pull request.
- Document notable architectural decisions or TODOs within the appropriate README files or `/docs` references.

## Roadmap Alignment
- Story S-001 covers repository scaffolding, so refrain from adding production code until later stories (S-002+).
- Track unresolved decisions (package managers, IaC tooling, etc.) within the affected READMEs for visibility.
- Coordinate with reviewers to keep the `.ai/` planning artifacts in sync with implementation progress.

## Future TODOs
- Integrate lint/test tooling for each service as Stories S-002 through S-004 progress.
- Add GitHub Actions workflows and Dockerfiles in Story S-005.
- Document environment variable templates and secrets management approach during upcoming architecture decisions.

We appreciate your collaboration—please open an issue if you have questions about setup or roadmap scope.
