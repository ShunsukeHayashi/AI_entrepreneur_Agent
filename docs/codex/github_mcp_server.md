# GitHub MCP Server Integration

This guide explains how to connect Codex to the GitHub MCP server so the agent can query repositories, pull requests, and issues as MCP tools.

## Repository Reference
- Upstream project: https://github.com/github/github-mcp-server.git

## Prerequisites
- Node.js 18 or later with `npm` available in your shell.
- A GitHub personal access token (classic) with `repo`, `read:org`, and `workflow` scopes.
- Local clone of this project (`AI_entrepreneur_Agent`) with workspace write privileges.

## Installation
1. Clone the GitHub MCP server locally:
   ```bash
   git clone https://github.com/github/github-mcp-server.git ~/tools/github-mcp-server
   ```
2. Install dependencies and build the server (consult the upstream README if commands change):
   ```bash
   cd ~/tools/github-mcp-server
   npm install
   npm run build
   ```
3. Keep the clone up to date by pulling the latest changes regularly.

## Codex Configuration
Codex expects MCP servers to be declared in a JSON manifest. Copy the example configuration from this repository and replace the placeholder values with real paths and secrets.

```bash
cp docs/codex/github_mcp_config.example.json ~/.config/codex/mcp/github.json
```

Update the copied file as follows:
- Replace `/Users/you/tools/github-mcp-server` with the absolute path to your local clone.
- Set `GITHUB_TOKEN` to the personal access token created earlier (store it securely; consider using your shell keychain or a `.env` file loaded before Codex starts).

> The `github-mcp-server` package exposes a CLI that speaks MCP over stdio. If the upstream project changes the invocation (for example, using `pnpm`), adjust the `command` and `args` fields accordingly.

## Running the Server
Codex will launch the server automatically based on the manifest. You can also start it manually for troubleshooting:

```bash
cd ~/tools/github-mcp-server
GITHUB_TOKEN=ghp_example npm run start -- --stdio
```

Use `--stdio` so the process speaks MCP over standard input/output. The server shuts down when Codex closes the session.

## Verifying the Integration
1. Start Codex with MCP support enabled.
2. List available tools; you should see entries exposed by the GitHub MCP server (for example, `github.listRepositories`, `github.searchIssues`).
3. Invoke a safe command, such as listing open issues on a test repository, to confirm the connection works.

## Troubleshooting
- **Authentication errors**: Regenerate the token with the required scopes and ensure it is available in the environment.
- **Command not found**: Run `npm install -g github-mcp-server` or execute the server via `npx github-mcp-server --stdio`. Update the manifest if the binary name differs.
- **Permission denied**: Ensure your token has access to private repositories you intend to query.
- **Process exits immediately**: Run the server manually with `DEBUG=*` environment variable to inspect detailed logs.

Keep this document updated if the upstream project revises its installation or CLI interface.
