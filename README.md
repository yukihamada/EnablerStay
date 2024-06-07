# EnablerStay

EnablerStayは、VercelとCloudflareを利用して高速に動作する物件予約および掲載サービスです。このサービスは、物件のフルサポート付きで簡単に予約および掲載が可能です。

## プロジェクト構成

- \`frontend/\`: クライアントサイドのコード。Next.jsを使用しており、SSR（サーバーサイドレンダリング）をサポートしています。
- \`enablerstay-api/\`: サーバーサイドのコード。Cloudflare Workersを使用しており、高速でスケーラブルなAPIを提供します。

## 環境変数

以下の環境変数を設定する必要があります：

- \`CF_API_KEY\`: Cloudflare APIキー
- \`CF_ACCOUNT_ID\`: CloudflareアカウントID
- \`CF_NAMESPACE_ID\`: Cloudflare Namespace ID
- \`CF_WORKER_ENV\`: Cloudflare Worker環境
- \`JWT_SECRET\`: JWTシークレットキー
- \`CF_D1_DB_URL\`: Cloudflare D1データベースURL

環境変数は、\`.env\` ファイルに設定することをお勧めします。例：

\`\`\`
CF_API_KEY=your_cloudflare_api_key
CF_ACCOUNT_ID=your_cloudflare_account_id
CF_NAMESPACE_ID=your_cloudflare_namespace_id
CF_WORKER_ENV=your_cloudflare_worker_env
JWT_SECRET=your_jwt_secret
CF_D1_DB_URL=your_cloudflare_d1_db_url
\`\`\`

## セットアップ

### フロントエンド

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

### バックエンド

1. \`enablerstay-api\`ディレクトリに移動します。
   \`\`\`bash
   cd ../enablerstay-api
   \`\`\`

2. 必要な依存関係をインストールします。
   \`\`\`bash
   npm install
   \`\`\`

3. Cloudflare Workersをデプロイします。
   \`\`\`bash
   wrangler publish
   \`\`\`

## 貢献方法

1. このリポジトリをフォークします。
2. 新しいブランチを作成します。
   \`\`\`bash
   git checkout -b feature/your-feature-name
   \`\`\`
3. 変更をコミットします。
   \`\`\`bash
   git commit -m 'Add some feature'
   \`\`\`
4. ブランチにプッシュします。
   \`\`\`bash
   git push origin feature/your-feature-name
   \`\`\`
5. プルリクエストを作成します。

## ライセンス

このプロジェクトはMITライセンスの下でライセンスされています。詳細については、LICENSEファイルを参照してください。

