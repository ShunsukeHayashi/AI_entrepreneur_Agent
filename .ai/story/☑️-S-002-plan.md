# Story S-002 Implementation Plan

## 概要
- Story S-002: `Scaffold Backend API Service` を対象に、Express ベースの Node.js サービスの土台を構築する。
- Health Check エンドポイントとテストハーネスを整備し、環境変数管理とスクリプト整備を通じて後続機能開発を容易にする。

## 成果物
- `backend/` 配下に `src/` `tests/` `jest.config.ts` 等の初期構成を作成し、TypeScript で Express サーバーを起動できる状態にする。
- `backend/package.json` に `start` `dev` `test` `lint` スクリプトを追加し、ルート `package.json` から呼び出せるよう npm workspace を活用する。
- `.env.example` と `README.md` 更新で必要な環境変数と起動手順を明記する。
- Jest + Supertest によるヘルスチェックのサンプルテストを追加し、CI 連携の土台を準備する。

## タスク詳細
1. **バックエンド構造の初期化**
   - `src/app.ts` `src/server.ts` `src/routes/health.ts` を作成し、`/health` GET エンドポイントで稼働状況を返す。
   - `tsconfig.json` と `tsconfig.build.json` を用意し、ビルド用と開発用の設定を分離する。
   - ESLint/Prettier の共通設定をベースにバックエンド用設定ファイルを準備する（必要に応じて延伸）。

2. **環境設定とスクリプト整備**
   - `dotenv` を利用した環境変数ロード仕組みを実装し、`PORT` 等の必須項目を `.env.example` に記載する。
   - `package.json` に nodemon を活用した `dev` スクリプト、ts-node/tsc を用いた `start` スクリプトを定義し、ルートからも実行できるようにする。

3. **テストハーネス構築**
   - `jest` `ts-jest` `supertest` を導入し、`jest.config.ts` を TypeScript ベースで設定する。
   - `/health` を対象に 200 応答を検証する統合テストを `tests/health.spec.ts` に追加する。
   - `npm test` がパスすることを確認し、将来的な CI ワークフローで利用できるよう README に手順を追記する。

4. **ドキュメント更新**
   - `backend/README.md` にセットアップ手順・利用スクリプト・テスト実行方法を追記する。
   - `.ai/prd.md` の受入基準に沿って進行状況を適宜反映し、完了時にステータス更新できるようチェックリストを整理する。

## リスク・未決事項
- ORM や DB 接続の導入は後続ストーリーに委ねられており、本ストーリーではモック状態で動作する。
- ログ出力とエラーハンドリングの詳細設計は将来の observability ストーリーで深掘り予定。
- CI との接続は S-005 以降で実施予定のため、本ストーリーではローカル確認に留める。
