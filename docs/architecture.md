# System Architecture Overview

This document captures the high-level architecture for the AI_entrepreneur_Agent project. It is intended to keep Codex and companion tools aligned on the target platform and boundaries.

## Platform Summary

- **Frontend**: React application served as a single-page app.
- **Backend**: Node.js (Express) REST API exposing business capabilities.
- **Database**: PostgreSQL 14 cluster managed via SQL migrations.
- **AI Engine**: Python service layer leveraging TensorFlow, PyTorch, scikit-learn, and GPT API integrations.
- **Infrastructure**: Containerized with Docker, orchestrated on Kubernetes, targeting AWS (EC2, RDS, S3).

## Service Boundaries

1. **Web Client**
   - Responsible for user interaction, dashboards, and workflow configuration.
   - Communicates with the backend through JSON REST endpoints.

2. **Application API**
   - Express server providing authentication, project configuration, and orchestration endpoints.
   - Delegates AI-heavy workloads to the AI Engine via gRPC.

3. **AI Engine**
   - Python microservice handling model execution, training routines, and inference pipelines.
   - Persists experiment metadata in PostgreSQL and object artifacts in S3.

4. **Data Layer**
   - PostgreSQL stores relational data (users, projects, tasks, logs).
   - S3 stores large binary artifacts (datasets, trained models, reports).

## Data Flow (Happy Path)

1. User configures a new venture hypothesis via the React frontend.
2. The frontend invokes `/api/projects` on the Express backend.
3. Express validates inputs, records project metadata in PostgreSQL, and dispatches a job to the AI Engine.
4. The AI Engine executes market research pipelines, stores results, and posts summaries back to the backend.
5. Backend updates project status and emits websocket notifications to the frontend.

## Deployment Considerations

- All services are packaged as Docker images with pinned versions.
- Kubernetes manifests live under `deploy/k8s` (to be created) and track environment-specific overrides.
- AWS resources are provisioned via Terraform modules (future work).

## Open Questions

- Define authentication provider (Cognito vs. custom) for the public SaaS offering.
- Establish data retention policies for generated reports and third-party market data.
- Confirm GPU availability requirements for training workloads on AWS.

