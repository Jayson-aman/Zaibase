# Zaibase（ザイベース）

建設業界の資材・工具シェアリング ＋ 職人マッチングプラットフォーム。
「Connect. Build. Share.」

## このリポジトリの構成

```
Zaibase/
├── frontend/          # アプリ本体（画面）
│   ├── Zaibase.html      # 日本語版（最新・正本）
│   └── Zaibase_EN.html   # 英語版
├── backend/           # サーバー側（Firebase Cloud Functions 予定）
├── docs/
│   └── SPEC.md           # ★設計図（全仕様）。まずここを読む
└── README.md
```

## いま動くもの

`frontend/Zaibase.html` を `localhost` で開くと動きます（`file://` ではログイン不可）。

```bash
cd frontend
python3 -m http.server 8080
# ブラウザで http://localhost:8080/Zaibase.html
```

- ログイン: Google / Yahoo! JAPAN / メール
- 出品 / 一覧 / カテゴリ検索 / 地図表示

## 基盤

- Firebase（プロジェクト: `zaisai-share` / Blazeプラン）
- 予定: Vertex AI（翻訳・AIアシスタント）、Google Maps API、Stripe決済

## 開発の進め方

詳細・全機能・コンプライアンス・ロードマップは **[`docs/SPEC.md`](docs/SPEC.md)** を参照。
