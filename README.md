# EnablerStay

EnablerStayは、OpenDevinを利用して自律的に開発されるプロジェクトであり、次世代の宿泊体験を提供することを目指しています。AI技術を活用して、ホストとゲストの体験を大幅に向上させることを目指しています。

## 始めに

まず、プロジェクトをGitHubからクローンし、frontendフォルダに移動して開発サーバーを起動してください。

```bash
# プロジェクトのクローン
git clone https://github.com/yukihamada/EnablerStay.git

# frontendフォルダに移動
cd EnablerStay/frontend

# 開発サーバーを起動
npm install
npm run dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開き、結果を確認してください。

`app/page.tsx`を修正することで、ページの編集を開始できます。ファイルを編集すると、ページが自動的に更新されます。

このプロジェクトでは、[`next/font`](https://nextjs.org/docs/basic-features/font-optimization)を使用して、GoogleフォントのInterを自動的に最適化およびロードしています。

## OpenDevinを使った開発方法

以下のプロンプトをOpenDevin上で実行してください：

```bash
$PROJECT=EnablerStay
$USER=yukihamada

あなたは天才エンジニアです。このプロジェクトの全体像とコードを理解し、エキスパートの視点で最高のコードを書いてください。非対話モードで作業を進め、Next.jsを使用し、SSR（サーバーサイドレンダリング）で実装してください。

まず、/{$PROJECT}/README.md から読み始め、README.md を常に誰にでもわかりやすく、このサービスが分かりやすく、使いやすく、貢献しやすいものに改善してください。もしワークスペースにプロジェクトのフォルダがなければ、GitHubからクローンしてください。

仮想環境は不要です。VercelやWrangler、JavaScriptのインストールや `npx create-next-app@latest`、`next dev`の実行はこちらで行います。Mac上での実行スクリプトについて指示してください。

あなたのワークスペースは /{$PROJECT} で、私のワークスペースは `/Users/yuki/workspace/{$PROJECT}` です。プロジェクトのフォルダ以外にはこちらからの指定がない限り、保存や変更は行わないでください。

NEXT.jsはすでに http://localhost:3001/ で立ち上がっていますので、適宜確認をしてください。

https://github.com/{$USER}/{$PROJECT}
GitHubキー：[************************]

```

## OpenDevinのセットアップ方法

OpenDevinのセットアップは以下のリンクから詳細なガイドを確認できます：

- [OpenDevinセットアップガイド](https://opendevin.ai/setup) 🌐

簡単な手順としては、以下の通りです：

1. OpenDevinの公式サイトにアクセスします。
2. 指示に従ってアカウントを作成します。
3. プロジェクトをインポートし、ワークスペースを設定します。
4. 上記のプロンプトを実行して開発を開始します。

## 詳細情報

Next.jsについて詳しく知るには、以下のリソースをご覧ください：

- [Next.jsドキュメント](https://nextjs.org/docs) - Next.jsの機能やAPIについて学ぶ。
- [Learn Next.js](https://nextjs.org/learn) - インタラクティブなNext.jsのチュートリアル。

Next.jsのGitHubリポジトリもチェックしてみてください - フィードバックや貢献をお待ちしています！

## Vercelでデプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsのクリエーターが提供する[Vercelプラットフォーム](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を利用することです。

詳細については、[Next.jsのデプロイメントドキュメント](https://nextjs.org/docs/deployment)をチェックしてください。

---

深呼吸して、世の中を変える可能性を信じて、EnablerStayを構築していきましょう。🚀✨