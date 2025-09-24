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

## Next Steps
- Outline Terraform module layout and environment promotion strategy in upcoming stories.
- Document secrets management and observability stacks as architecture decisions land.

## Open Questions
- Secrets management approach (AWS Secrets Manager vs. HashiCorp Vault) and multi-region rollout strategy require cross-team decisions.
