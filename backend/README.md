# Backend

## Responsibilities
- Expose RESTful endpoints that orchestrate venture workflows, persist data, and proxy AI engine calls.
- Manage venture data persistence, authentication, and access control policies.
- Coordinate long-running workflows and stream progress updates to the frontend.
- Integrate with the AI engine and external data providers.

## Planned Scaffolding
- Story S-002 will initialize an Express server with health check endpoints and Jest-based tests.
- Subsequent stories will add PostgreSQL integration, background workers, and message queue adapters.

## Tooling Roadmap
- Node.js 18+ with Express and TypeScript support, leveraging shared ESLint/Prettier settings from the workspace root.
- PostgreSQL via an ORM (Prisma or TypeORM under evaluation) for relational data access.
- Testing stack anchored by Jest with Supertest for HTTP verification.

## Setup
- Install workspace dependencies from the repository root: `npm install`。
- `.env.example` を複製して `backend/.env` を作成し、必要に応じて `PORT` を調整します。

## Available Scripts
- `npm run backend:dev` — `nodemon` + `ts-node` でホットリロード開発サーバーを起動します。
- `npm run backend:build` — TypeScript ソースを `dist/` にトランスパイルします。
- `npm run backend:start` — ビルド済みアーティファクトからサーバーを起動します。
- `npm run backend:test` — Jest + Supertest による統合テストを実行します。
- `npm run backend:lint` — ESLint で `src/` と `tests/` を検証します。

## Testing
- ヘルスチェックの統合テストは `tests/health.spec.ts` に配置されており、`npm run backend:test` で確認できます。
- 今後のストーリーでエンドポイント追加時は、同ディレクトリにテストを拡張してください。

## Next Steps
- Scaffold the Express server, health check endpoint, and test harness in Story S-002.
- Define configuration management via environment variables and `.env` templates.
- Document API versioning and authentication strategies as part of upcoming stories.

## Open Questions
- Detailed authentication strategy (JWT vs. session) and multi-tenant data modeling are deferred to future architecture reviews.
