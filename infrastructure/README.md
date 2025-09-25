# Infrastructure

## Responsibilities
- Define infrastructure-as-code assets for container orchestration, networking, and data services across environments.
- Provide reproducible deployment pipelines targeting AWS (EC2, RDS, S3) with Kubernetes as the primary runtime.

## Planned Scaffolding
- Future infrastructure epics will introduce Terraform modules, Kubernetes manifests, and GitHub Actions workflows.
- Story S-005 will connect CI jobs and container images as scaffolding for subsequent deployment automation.

## Tooling Roadmap
- Terraform (version TBD) for cloud provisioning with Terragrunt or native modules under evaluation.
- Helm charts and Kustomize overlays anticipated for per-environment Kubernetes configuration.
- Container image publication via GitHub Actions and AWS ECR (details pending).

## Docker Utilities

### GitHub MCP Server helper image
- Dockerfile: `infrastructure/docker/github-mcp-server/Dockerfile` installs `github-mcp-server` globally and executes it with `--stdio` for MCP integrations.
- Build locally: `docker build -t github-mcp-server:latest infrastructure/docker/github-mcp-server` (requires network access during the build step).
- Run manually: `docker run --rm -i -e GITHUB_TOKEN -e GITHUB_OWNER=BloopAI -e GITHUB_REPO=vibe-kanban github-mcp-server:latest` to forward STDIN/STDOUT to Codex while inheriting the exported `GITHUB_TOKEN` from the host shell.
- When using Codex manifests, point the `vibe_kanban` MCP server entry to `docker run --rm -i -e GITHUB_TOKEN -e GITHUB_OWNER=BloopAI -e GITHUB_REPO=vibe-kanban github-mcp-server:latest` so the CLI attaches via STDIO.

## Next Steps
- Outline Terraform module layout and environment promotion strategy in upcoming stories.
- Document secrets management and observability stacks as architecture decisions land.

## Open Questions
- Secrets management approach (AWS Secrets Manager vs. HashiCorp Vault) and multi-region rollout strategy require cross-team decisions.
