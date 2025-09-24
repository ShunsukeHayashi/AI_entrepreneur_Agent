# LDD Logging Overview

This directory stores Log-Driven Development (LDD) artifacts shared across the agent toolchain.

## Structure
- `codex_prompt_chain.md`: Records intent → plan → implementation → verification threads per story.
- `tool_invocations.md`: Chronological ledger of shell commands executed during the story.
- `handoff_summary.md`: Running summary of progress, blockers, and next recommended actions.

## Usage Guidelines
1. Append a new section for each story using the identifier from `.ai/prd.md`.
2. Update the prompt chain as work progresses through intent, plan, implementation, verification, and handoff stages.
3. Log every shell command with working directory, arguments, and exit status.
4. Summaries should remain concise so downstream tools (Cursor, Roo) can quickly reconstruct context.
5. When a story completes, mark the section as finalized and link any follow-up tasks needed for subsequent stories.
