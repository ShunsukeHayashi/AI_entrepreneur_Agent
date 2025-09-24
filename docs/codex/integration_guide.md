# Codex Integration Guide

This guide explains how Codex should plug into the AI_entrepreneur_Agent workflow.

## Prerequisites

- Access to the repository with workspace write permissions.
- Ability to request sandbox escalation when needed (approval policy: on-request).
- Familiarity with the LDD workflow outlined in `docs/ldd/workflow.md`.

## Daily Flow

1. Sync the latest `.ai/` stories and confirm only one epic/story is marked `in-progress`.
2. Review `@memory-bank.mdc` for outstanding context and TODOs.
3. Formulate the prompt chain, execute planned edits, and log every shell command.
4. Run relevant tests (or document gaps) before producing the final structured response.
5. Provide a handoff referencing file paths and suggesting next actions for downstream tools.

## Quality Gates

- Follow the mandatory response template described in `AGENTS.md`.
- Ensure newly created files include succinct comments when code is non-obvious.
- Maintain ASCII encoding unless the existing file already uses Unicode.

## Troubleshooting

- **Sandbox errors**: Log the failure, request escalation with justification, and retry.
- **Dependency gaps**: Propose installation commands referencing `requirements.txt`.
- **Merge conflicts**: Summarize conflicting sections and wait for user guidance before resolving.

