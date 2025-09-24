# Log-Driven Development (LDD) Workflow

This workflow defines how Codex should capture intent, actions, and validation while collaborating with other agents.

## Prompt Chain Lifecycle

1. **Intent**
   - Summarize the problem statement and success criteria.
2. **Plan**
   - Break down sub-tasks, identify tools, and highlight risks.
3. **Implementation**
   - Execute the plan, recording all file edits and command invocations.
4. **Verification**
   - Run tests or describe ideal validation when automation is not available.
5. **Handoff**
   - Provide a concise summary, outstanding issues, and recommended next actions.

## Logging Requirements

- Store structured logs under `logs/` (naming TBD) so downstream tools can reconstruct the workflow.
- Every shell command must be recorded with working directory, arguments, and exit status.
- Summaries of applied patches must include affected files and rationale.

## Collaboration Notes

- When Devin supplies a plan, echo the mapping to the prompt chain before editing code.
- Cursor reviews depend on concise change descriptions; ensure `handoff_summary` references file paths and line numbers.
- Roo lint findings should be captured in `@memory-bank.mdc` with TODO tags until resolved.

## Escalation Triggers

- Sandbox denial impacting critical tasks.
- Missing dependencies that block tests.
- Conflicts between PRD instructions and repository state.

