# Story S-001 Implementation Plan

## 概要
- Story S-001: `Define Monorepo Structure and Tooling` を対象に、リポジトリの基本構造と共通ツールチェーンを整備する。
- フロントエンド、バックエンド、AIエンジン、インフラの4レイヤーを横断できる足場を用意し、後続ストーリーの実装を容易にする。

## 成果物
- `frontend/`, `backend/`, `ai-engine/`, `infrastructure/` のディレクトリと、各レイヤーの責務を説明したプレースホルダー `README.md`。
- ルート共通ツール: `.editorconfig`, `.gitignore`, `package.json`（ワークスペース構成とlint/testスクリプト雛形）、`eslint.config.js`, `.prettierrc.json`。
- 初期オンボーディングを支援する `CONTRIBUTING.md` と、既存 `README.md` の更新（新ディレクトリ構造の反映）。

## タスク詳細
1. **リポジトリ構造整備**
   - サービスごとにディレクトリを作成し、各 README で目的・今後のスケルトン拡張方針・主要ツール予定を記述する。
   - `infrastructure/` には将来の Terraform / Kubernetes 管理方針を明示し、TODOとして詳細設計を残す。

2. **ルートツールチェーン導入**
   - `.editorconfig` で基本フォーマット（UTF-8, LF, スペース2/4など）を定める。
   - `.gitignore` に Node/Python/IDE 系のキャッシュ除外を追加する。
   - `package.json` を npm workspace として設定し、`frontend`, `backend`, `ai-engine` をモノレポ管理下に置く。lint/testのプレースホルダースクリプトを定義し、後続のストーリーで具体化する旨をコメントする。
   - `eslint.config.js` と `.prettierrc.json` に汎用ルールセットを記述し、将来のサービス固有設定で拡張できるようコメントを残す。

3. **ドキュメント整備**
   - `CONTRIBUTING.md` を新規作成し、ローカル環境準備（Node 18+, Python 3.9.6, PostgreSQL 14 など）、ワークスペースのセットアップ手順、Lint/Test 実行方法（プレースホルダー付き）を記載する。
   - ルート `README.md` に新しいディレクトリ構造図と S-001 で導入するツール一覧を追記する。
   - `.ai/prd.md` の S-001 セクションに、実装完了時に更新するチェックポイント（例: ステータス `Completed` へ変更）をメモする。

4. **検証とフォローアップ**
   - 受入基準チェックリスト: ディレクトリ存在、README 内容、ルートツールの lint/test スクリプト存在、ドキュメント更新を手動確認。
   - 後続ストーリー向け TODO: 各サービスの実コードスキャフォールド、CI ワークフロー／Dockerfile 連携、S-002 以降で扱う詳細設定を `CONTRIBUTING.md` にリンクする。

## リスク・未決事項
- npm workspace におけるパッケージ管理方式（pnpm/yarn 切替）は将来のチーム決定待ち。暫定で npm を採用。
- ESLint/Prettier のルール詳細は S-002/S-003 実装時に見直しが必要。
- インフラ層の IaC ツール（Terraform, Pulumi 等）は未定であり、placeholder コメントで意思決定待ちであることを明記する。
