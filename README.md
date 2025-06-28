# Claude Code Test プロジェクト

このプロジェクトは、最新のReact v19とTypeScriptを使用したモダンなフロントエンド開発環境のテンプレートです。高速なビルドツールViteと、統合された開発ツールBiomeを採用しています。

## 技術スタック

- **React v19.1.0** - 最新のReactライブラリ
- **TypeScript v5.5.4** - 型安全な開発環境
- **Vite v5.4.2** - 高速なビルドツールとHMR（ホットモジュールリプレースメント）
- **Biome v1.8.3** - 統合されたリンター・フォーマッター（ESLint/Prettierの代替）
- **Vitest v2.1.1** - Viteネイティブのテストフレームワーク
- **Node.js v22** - JavaScriptランタイム（miseで管理）

## 前提条件

- **mise** - Node.jsのバージョン管理ツール
  - インストール方法: https://mise.jdx.dev/getting-started.html
- **Git** - バージョン管理システム

## セットアップ

1. リポジトリのクローン
```bash
git clone [repository-url]
cd claude-code-test
```

2. Node.js環境のセットアップ
```bash
mise install
```

3. 依存関係のインストール
```bash
npm install
```

## 開発

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは http://localhost:3000 で起動します。
ソースコードを変更すると、自動的にブラウザに反映されます（HMR）。

### ビルド

本番環境用のビルドを作成：

```bash
npm run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。

### コード品質チェック

Biomeを使用してコードの品質をチェック：

```bash
npm run check
```

このコマンドは以下を実行します：
- コードのリント（構文エラーや潜在的な問題の検出）
- コードフォーマット（一貫したコードスタイルの適用）
- 自動修正可能な問題の修正

### テスト

```bash
npm test
```

テストカバレッジレポート付きでテストを実行：

```bash
npm run test:coverage
```

## プロジェクト構造

```
claude-code-test/
├── src/                    # ソースコード
│   ├── App.tsx            # メインReactコンポーネント
│   ├── App.css            # Appコンポーネントのスタイル
│   ├── main.tsx           # Reactアプリのエントリーポイント
│   ├── main.ts            # VanillaJSアプリのエントリーポイント
│   ├── index.ts           # ユーティリティ関数
│   ├── index.test.ts      # ユニットテスト
│   ├── index.css          # グローバルスタイル
│   └── style.css          # VanillaJS用スタイル
├── public/                # 静的ファイル
├── dist/                  # ビルド出力ディレクトリ
├── index.html             # HTMLテンプレート
├── package.json           # プロジェクト設定とスクリプト
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vite設定
├── vitest.config.ts       # Vitest設定
├── biome.json             # Biome設定
├── .mise.toml             # mise設定（Node.jsバージョン管理）
└── CLAUDE.md              # Claude用プロジェクト指示

```

## 開発ワークフロー

### 1. 機能開発

1. 新しいブランチを作成
```bash
git checkout -b feature/新機能名
```

2. コードを実装
3. テストを作成・実行
```bash
npm test
```

4. コード品質チェック
```bash
npm run check
```

5. コミット
```bash
git add .
git commit -m "feat: 新機能の説明"
```

### 2. コーディング規約

このプロジェクトではBiomeを使用して一貫したコードスタイルを維持しています：

- インデント: スペース2文字
- クォート: シングルクォート（JSX属性はダブルクォート）
- セミコロン: 必要な場合のみ
- 行幅: 100文字

### 3. コミットメッセージ規約

以下のプレフィックスを使用してください：
- `feat:` 新機能
- `fix:` バグ修正
- `docs:` ドキュメント変更
- `style:` コードスタイルの変更
- `refactor:` リファクタリング
- `test:` テストの追加・修正
- `chore:` ビルドプロセスや補助ツールの変更

## 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番用ビルドを作成 |
| `npm run preview` | ビルド結果をローカルでプレビュー |
| `npm test` | テストを実行 |
| `npm run test:ui` | UIでテストを実行 |
| `npm run test:coverage` | カバレッジ付きでテストを実行 |
| `npm run check` | Biomeでコード品質をチェック |
| `npm run lint` | Biomeでリントと自動修正 |
| `npm run format` | Biomeでコードフォーマット |

## React v19への移行について

このプロジェクトは最新のReact v19を使用しています（PR #9で移行済み）。React v19の新機能：
- 自動バッチング機能の改善
- Suspenseの改善
- 新しいフックとAPI
- パフォーマンスの向上

## トラブルシューティング

### 開発サーバーが起動しない
- Node.jsのバージョンを確認: `mise list`
- 依存関係を再インストール: `rm -rf node_modules && npm install`

### Biomeエラー
- `npm run check`でエラーの詳細を確認
- 自動修正可能な場合は`npm run lint`を実行

## ライセンス

[ライセンス情報をここに記載]