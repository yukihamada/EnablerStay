


EnablerStayは、VercelとCloudflareを利用して高速に動作する物件予約および掲載サービスです。このサービスは、物件のフルサポート付きで簡単に予約および掲載が可能です。

## プロジェクト構成

- \`frontend/\`: クライアントサイドのコード

## 環境変数

- \`CF_API_KEY\`: Cloudflare APIキー
- \`CF_ACCOUNT_ID\`: CloudflareアカウントID
- \`CF_NAMESPACE_ID\`: Cloudflare Namespace ID
- \`CF_WORKER_ENV\`: Cloudflare Worker環境
- \`JWT_SECRET\`: JWTシークレットキー
- \`CF_D1_DB_URL\`: Cloudflare D1データベースURL

## セットアップ

1. リポジトリをクローンします。
   \`\`\`bash
   git clone https://github.com/yukihamada/EnablerStay.git
   cd EnablerStay/frontend
   \`\`\`

2. 必要な依存関係をインストールします。
   \`\`\`bash
   npm install
   \`\`\`

3. 開発サーバーを起動します。
   \`\`\`bash
   npm run dev
   \`\`\`

## 使用方法

1. サーバーを起動します。
2. フロントエンドをビルドしてデプロイします。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

