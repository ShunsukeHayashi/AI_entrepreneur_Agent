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
2. Install shared tooling dependencies from the repo root.
   ```bash
   npm install
   ```
3. Populate environment variables for local development (`.env` templates will be introduced alongside implementation work).
4. Run unit and integration tests relevant to your changes before opening a pull request (placeholder scripts are provided until runtime code lands).
5. Review `logs/` entries (prompt chains, tool invocations, handoff summaries) to understand in-flight work before picking up a new story.
6. Consult `CONTRIBUTING.md` for evolving workflows and tooling guidelines.

## Repository Layout
```
AI_entrepreneur_Agent/
├── .ai/                   # Product and architecture approvals shared across the toolchain
│   ├── README.md
│   ├── arch.md
│   └── prd.md
├── .editorconfig          # Repository-wide formatting defaults
├── .gitignore             # Ignore rules for Node/Python/tooling artifacts
├── .prettierrc.json       # Prettier formatting preferences
├── AGENTS.md              # Operational playbook for Codex and companion agents
├── CONTRIBUTING.md        # Onboarding and workflow guide for collaborators
├── README.md              # Project overview (this file)
├── ai-engine/             # Python AI service (Story S-004 will populate sources/tests)
├── backend/               # Node.js API service (Story S-002 will bootstrap Express runtime)
├── docs/                  # Architecture, workflow, and integration references
│   ├── architecture.md
│   ├── codex/
│   │   └── integration_guide.md
│   ├── integration_mapping.md
│   └── ldd/
│       └── workflow.md
├── frontend/              # React application (Story S-003 will scaffold SPA entry point)
├── infrastructure/        # Infrastructure-as-code assets (future epics add Terraform/Kubernetes)
├── logs/                  # LDD prompt chain, tool invocation, and handoff artifacts
├── eslint.config.js       # Shared ESLint flat config (extend inside service packages)
└── package.json           # npm workspace definition and shared scripts
```

## Workspace Tooling
- `.editorconfig` standardizes indentation, line endings, and trailing whitespace across languages.
- `.gitignore` omits Node, Python, and IDE artifacts while allowing `logs/` to be tracked.
- `package.json` configures npm workspaces for `frontend`, `backend`, and `ai-engine`, and exposes placeholder `lint`, `test`, and `format` scripts until runtime scaffolds are delivered.
- `eslint.config.js` and `.prettierrc.json` define baseline linting/formatting defaults that service-level packages will extend in subsequent stories.

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
