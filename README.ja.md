# AI Entrepreneur Agent

## 概要
AI Entrepreneur Agent は、起業に関わる主要ワークフローを自動化するオーケストレーションプラットフォームです。創業者がアイデアを検証し、市場調査を行い、ゴートゥーマーケット戦略を設計し、統合されたAIツールチェーンを通じて継続的な事業運営を管理できるよう支援します。

## 主な機能
- ガイド付きアンケートとAI要約により、ベンチャー仮説の発見を自動化します。
- 市場調査パイプラインを実行し、サードパーティインテリジェンスを統合して実行可能なレポートにまとめます。
- 対象セグメントに合わせた事業計画、財務予測、ピッチ資料を生成します。
- 実験をオーケストレーションし、KPI を追跡し、継続的な改善提案を提供します。
- 人間のオペレーターや下流ツール（Cursor、Roo、CI）と連携し、協調的なデリバリーを実現します。

## アーキテクチャ概要
- **フロントエンド**: ダッシュボードと設定フローを提供する React シングルページアプリケーション。
- **バックエンド**: 入力検証、ベンチャーデータの永続化、進捗更新のストリーミングを担う Node.js（Express）REST API。
- **AI エンジン**: TensorFlow、PyTorch、scikit-learn、GPT API を活用した推論ワークロード向け Python マイクロサービスレイヤー。
- **データレイヤー**: リレーショナルデータに PostgreSQL 14、大規模アセット（データセット、学習済みモデル）に Amazon S3 を採用。
- **インフラストラクチャ**: Docker 化されたサービスを Kubernetes でオーケストレーションし、AWS（EC2、RDS、S3）へデプロイ。将来的には Terraform モジュールでインフラをコードとして管理します。

サービス境界とデータフローの詳細は `docs/architecture.md` を参照してください。

## はじめに
### 前提条件
- フロントエンド／バックエンド開発向けの Node.js 18+ と npm（または Yarn）。
- AI エンジン開発向けの Python 3.9.6 と仮想環境ツール。
- ローカルテスト用の PostgreSQL 14 インスタンス。
- サービスをコンテナで実行する場合は Docker Desktop（または互換ランタイム）。

### セットアップ手順
1. リポジトリをクローンし、`devin/{timestamp}-{feature-name}` 規則に従ってフィーチャーブランチを作成します。
2. サービスパッケージが追加された後、リポジトリルートで `npm install` を実行します。各サービスの README に追加の手順が記載されます。
3. ローカル開発用の環境変数を設定します（実装と併せて `.env` テンプレートを提供予定）。
4. 変更内容に関連するユニットテスト・統合テストを実行し、プルリクエストを作成する前に `CONTRIBUTING.md` で最新ワークフローを確認します。

### 共通ツール
- `.editorconfig`: エディタ間で統一されたホワイトスペース、エンコーディング、改行を定義します。
- `.prettierrc.json` と `eslint.config.js`: 共有フォーマッティング／リンティングルールを定義し、各ワークスペースで拡張します。
- `package.json`: npm ワークスペース（`frontend`、`backend`、`ai-engine`）を構成し、サービスのスキャフォールドが整うまでプレースホルダーの `lint`／`test` スクリプトを提供します。
- `.gitignore`: Node.js、Python、ビルドアーティファクト、IDE 関連ファイルをバージョン管理から除外します。

## リポジトリ構成
```
AI_entrepreneur_Agent/
├── .editorconfig          # 共有エディタ設定
├── .gitignore             # ツールチェーン共通の除外ルール
├── .prettierrc.json       # 共有 Prettier フォーマット設定
├── AGENTS.md              # Codex および関連エージェント向け運用マニュアル
├── CONTRIBUTING.md        # 開発者オンボーディングとワークフローガイド
├── README.md              # プロジェクト概要（本ファイル）
├── ai-engine/             # Python 製 AI エンジンサービス（ストーリー S-004）
├── backend/               # Node.js/Express API サービス（ストーリー S-002）
├── docs/                  # アーキテクチャ、ワークフロー、インテグレーション資料
│   ├── architecture.md
│   ├── codex/
│   │   └── integration_guide.md
│   ├── integration_mapping.md
│   └── ldd/
│       └── workflow.md
├── eslint.config.js       # モノレポ向けベース ESLint フラット設定
├── frontend/              # React SPA コードベース（ストーリー S-003）
├── infrastructure/        # Infrastructure as Code アセット（ストーリー S-005）
├── package.json           # npm ワークスペース設定とプレースホルダースクリプト
└── .ai/                   # ツールチェーン全体で共有するプロダクト／アーキテクチャ承認
    ├── README.md
    ├── arch.md
    └── prd.md
```

## 開発ワークフロー
本プロジェクトは Log-Driven Development（LDD）を採用しています。各変更では以下を記録してください。
- 意図、計画、実装、検証、引き継ぎログ（`docs/ldd/workflow.md` を参照）。
- `AGENTS.md` で定義されたレスポンステンプレートとログ要件の厳格な遵守。
- 実装コードを編集する前に `.ai/` にある上流計画と同期すること。

## ロードマップ概要
- `.ai/` 内の PRD とアーキテクチャ承認を完了し、フィーチャー開発を開始可能にします。
- サービスリポジトリ（フロントエンド、バックエンド、AI エンジン）をスキャフォールドし、ベースツールと CI を整備します。
- 生成アセットの認証戦略とデータ保持ポリシーを定義します。
- デプロイメント環境向けに Terraform モジュールと Kubernetes マニフェストを整備します。

## 参考資料
- `AGENTS.md`: エージェント運用マニュアルとコミュニケーション標準。
- `docs/architecture.md`: システム設計の概要。
- `docs/integration_mapping.md`: ツールチェーンの役割と外部サービス。
- `docs/codex/integration_guide.md`: Codex 統合の実務ガイド。
- `docs/codex/github_mcp_server.md`: GitHub MCP サーバーツール連携のセットアップ手順。
- `docs/ldd/workflow.md`: LDD ライフサイクルの詳細。

## ライセンス
ライセンス情報は未確定です。決定し次第、ドキュメントに追記します。
