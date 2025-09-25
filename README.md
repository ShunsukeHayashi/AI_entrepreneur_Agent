# AI Entrepreneur Agent

## Overview
The AI Entrepreneur Agent is an orchestration platform that automates core entrepreneurship workflows. It helps founders validate ideas, conduct market research, design go-to-market strategies, and manage ongoing venture operations through an integrated AI toolchain.

## Key Capabilities
- Automates venture hypothesis discovery with guided questionnaires and AI summarization.
- Executes market research pipelines and aggregates third-party intelligence into actionable reports.
- Generates business plans, financial projections, and pitch materials tailored to target segments.
- Orchestrates experimentation, tracks KPIs, and provides continuous improvement recommendations.
- Integrates with human operators and downstream tools (Cursor, Roo, CI) for collaborative delivery.

## Architecture Snapshot
- **Frontend**: React single-page application delivering dashboards and configuration flows.
- **Backend**: Node.js (Express) REST API that validates inputs, persists venture data, and streams progress updates.
- **AI Engine**: Python microservice layer leveraging TensorFlow, PyTorch, scikit-learn, and GPT APIs for inference workloads.
- **Data Layer**: PostgreSQL 14 for relational data and Amazon S3 for large artifacts (datasets, trained models).
- **Infrastructure**: Dockerized services orchestrated by Kubernetes and deployed to AWS (EC2, RDS, S3). Terraform modules will manage infrastructure as code in future iterations.

Refer to `docs/architecture.md` for a deeper discussion of service boundaries and data flow.

## Getting Started
### Prerequisites
- Node.js 18+ and npm (or Yarn) for frontend/backend work.
- Python 3.9.6 with virtual environment tooling for AI engine development.
- PostgreSQL 14 instance for local testing.
- Docker Desktop (or compatible runtime) if you plan to run services in containers.

### Setup Steps
1. Clone the repository and create a feature branch following the `devin/{timestamp}-{feature-name}` convention.
2. Run `npm install` at the repository root once service packages are introduced; additional workspace-specific steps will be documented in each service README.
3. Populate environment variables for local development (`.env` templates will be introduced alongside implementation work).
4. Review `CONTRIBUTING.md` for evolving workflows, then run unit and integration tests relevant to your changes before opening a pull request.

### Shared Tooling
- `.editorconfig` standardizes whitespace, encoding, and newline behaviors across editors.
- `.prettierrc.json` and `eslint.config.js` define baseline formatting and linting rules to be extended per workspace.
- `package.json` configures npm workspaces (`frontend`, `backend`, `ai-engine`) and exposes placeholder `lint`/`test` scripts until service scaffolds land.
- `.gitignore` excludes common Node.js, Python, build artifact, and IDE files from version control.

## Repository Layout
```
AI_entrepreneur_Agent/
├── .editorconfig          # Shared editor configuration
├── .gitignore             # Common ignore rules across toolchains
├── .prettierrc.json       # Shared Prettier formatting rules
├── AGENTS.md              # Operational playbook for Codex and companion agents
├── CONTRIBUTING.md        # Developer onboarding and workflow guidance
├── README.md              # Project overview (this file)
├── ai-engine/             # Python-based AI engine services (Story S-004)
├── backend/               # Node.js/Express API service (Story S-002)
├── docs/                  # Architecture, workflow, and integration references
│   ├── architecture.md
│   ├── codex/
│   │   └── integration_guide.md
│   ├── integration_mapping.md
│   └── ldd/
│       └── workflow.md
├── eslint.config.js       # Base ESLint flat config for the monorepo
├── frontend/              # React SPA codebase (Story S-003)
├── infrastructure/        # Infrastructure-as-code assets (Story S-005)
├── package.json           # npm workspace configuration and placeholder scripts
└── .ai/                   # Product and architecture approvals shared across the toolchain
    ├── README.md
    ├── arch.md
    └── prd.md
```

## Development Workflow
This project follows Log-Driven Development (LDD). Each change should capture:
- Intent, plan, implementation, verification, and handoff logs (see `docs/ldd/workflow.md`).
- Strict adherence to the response template and logging requirements defined in `AGENTS.md`.
- Synchronization with upstream plans in `.ai/` before editing implementation code.

## Roadmap Snapshot
- Finalize PRD and architecture approvals in `.ai/` to unlock feature development.
- Scaffold service repositories (frontend, backend, AI engine) with baseline tooling and CI.
- Define authentication strategy and data retention policies for generated assets.
- Establish Terraform modules and Kubernetes manifests for deployment environments.

## Reference Materials
- `AGENTS.md`: Agent operating manual and communication standards.
- `docs/architecture.md`: High-level system design.
- `docs/integration_mapping.md`: Toolchain roles and external services.
- `docs/codex/integration_guide.md`: Day-to-day guidance for Codex integration.
- `docs/codex/github_mcp_server.md`: Setup notes for wiring Codex to the GitHub MCP server tool.
- `docs/ldd/workflow.md`: Details on maintaining the LDD lifecycle.

## License
License information has not been finalized. Additions will be documented once available.
