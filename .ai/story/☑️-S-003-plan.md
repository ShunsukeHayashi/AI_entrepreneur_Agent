# Story S-003 Implementation Plan

## 概要
- Story S-003: `Scaffold Frontend React Application` を対象に、TypeScript 対応の React SPA 足場を構築する。
- Vite + React + Testing Library を利用した軽量セットアップを採用し、バックエンドのヘルスチェックと連携可能な土台を提供する。

## 成果物
- `frontend/` に Vite ベースの React TypeScript プロジェクト構造を生成し、`src/` `public/` 等の基本ディレクトリを整備する。
- `frontend/package.json` の scripts を `dev` `build` `preview` `test` `lint` 等に更新し、ルート workspace から呼び出せるようにする。
- バックエンド `/health` エンドポイントをフェッチするサンプル Dashboard コンポーネントと、テスト (`vitest` + `@testing-library/react`) を追加する。
- `.env.example` を用意し、API ベース URL 等の設定方法を README に記載する。

## タスク詳細
1. **Vite プロジェクト初期化**
   - Vite (`create-vite@latest`) を TypeScript + SWC テンプレートで導入し、依存関係を `frontend/package.json` に定義する。
   - ESLint/Prettier 設定を既存ルート構成と整合するよう調整し、`vite.config.ts` や `tsconfig.*` を整理する。

2. **アプリケーション雛形の実装**
   - `src/App.tsx` に簡易ダッシュボード UI を実装し、バックエンドヘルスチェック結果を取得して表示するロジックを組み込む（`fetch` + エラーハンドリング）。
   - ベースとなるレイアウト/スタイル (`src/App.css` 等) を最小限整備し、読みやすい UI を提供する。

3. **テストとユーティリティ整備**
   - `src/__tests__/App.test.tsx` に Testing Library を用いたレンダリングテストとモック fetch の例を追加する。
   - `vitest.config.ts` を設定し、`npm run test` で Vitest が走るよう調整する。

4. **ドキュメントと環境設定**
   - `frontend/.env.example` を作成し、`VITE_API_BASE_URL` 等の環境変数を明記する。
   - `frontend/README.md` にセットアップ手順、利用スクリプト、バックエンド連携方法、テスト実行方法を追記する。
   - `.ai/prd.md` の進捗を適宜更新し、完了時に `Completed` へ変更する準備をする。

## リスク・未決事項
- UI フレームワーク（Chakra UI / MUI 等）の採用は今後のストーリーで決定予定のため、本ストーリーでは素の CSS に留める。
- 本番 API URL はインフラ整備後に決定するため、`.env` でベース URL を可変とする。
- E2E テスト戦略は未定であり、Story S-003 ではユニット/コンポーネントテストに限定する。

## 実施結果
- Vite + React + TypeScript プロジェクトを `frontend/` に生成し、開発・ビルド・プレビュー・テスト各スクリプトを整備した。
- `App.tsx` にバックエンド `/health` 呼び出しを実装し、UI/スタイルおよび API ヘルパーを追加した。
- Vitest + Testing Library のサンプルテストを追加し、`npm run frontend:lint`・`npm run frontend:test` が成功することを確認した。
