# Zaibase Group — 開発ガイド

## Zaibase Group 全プロダクト一覧

| プロダクト | リポジトリ | URL | 担当ツール |
|---|---|---|---|
| Zaibase建設 | jayson-aman/zaibase (kensetsu/) | https://zaisai-share.web.app/app | Claude Code |
| Zaibase法律相談（Firebase版） | jayson-aman/zaibase (horitsu/) | https://zaibase-horitsu.web.app | Claude Code |
| Zaibase法律相談（Cloud Run版・本番） | 別リポジトリ（~/Documents/GitHub/Zaibase法律相談） | https://3vfa-an.a.run.app | Cursor |
| 中学受験対策 ahiru | jayson-aman/ahiru | https://exam.zaibase.group | Cursor |
| Zaibase Group 会社サイト | jayson-aman/zaibase.group | https://www.zaibase.group | Cursor |

## プロジェクト構成（このリポジトリ）

```
Zaibase/
├── kensetsu/          # Zaibase建設（Firebase: zaisai-share）
│   ├── frontend/Zaibase.html   # メインSPA（2万行超・単一ファイル）
│   ├── functions/              # Cloud Functions v2（27ファイル）
│   ├── firestore.rules
│   └── firebase.json
├── horitsu/           # Zaibase法律相談（Firebase: zaibase-horitsu）
│   ├── frontend/index.html     # 法律相談SPA
│   ├── functions/              # subscription.js / consult.js / revenue.js / invite.js
│   ├── firestore.rules
│   └── firebase.json
└── docs/
    ├── group/         # Zaibase Group 戦略・収益予測
    ├── kensetsu/      # 建設仕様書・設計画面
    └── horitsu/       # 法律相談仕様書
```

## 絶対に混ぜない

- **kensetsu（建設）** と **horitsu（法律相談）** は別プロダクト・別Firebase
- 法律関連コンテンツ → kensetsu に入れる（法律相談SPAではない）
- 決済・Auth・Firestore は各プロジェクト独立

## ツール別担当まとめ

| 作業内容 | 使うツール |
|---|---|
| Zaibase建設・法律相談（Firebase）の機能追加 | **Claude Code（ここ）** |
| ahiru（受験）の機能追加 | **Cursor** |
| Cloud Run版法律相談の機能追加 | **Cursor** |
| 会社サイト（zaibase.group）の更新 | **Cursor** |
| デプロイ・GitHub管理 | **Claude Code（ここ）** |

## メール・クレーム対応

- `info@zaibase.group` → Cloudflare Email Routing → `masaya.happylife@gmail.com` に転送（2026/6/15設定）
- Claude APIを使った自動返信：**場所不明（Cursorが実装した可能性あり）** → Cursorで確認
- クレーム対応は現在1人運営のため、コンテンツモデレーションを自動化済み

## 弁護士招待コード

- コード：`ZB-LEGAL-BF97-0773-FFB1`
- 用途：法律相談（Firebase版）の管理者パネルへのアクセス
- 共有方法：`info@zaibase.group` から弁護士へメール送付

## デザイン（青空色パレット）

```
Primary:  #0EA5E9
Dark:     #0369A1
Mid:      #0284C7
Light:    #E0F2FE
Pale:     #F0F9FF
Muted:    #64748B
```

- PC背景：東京スカイラインSVG（base64埋め込み）
- モバイル最大幅：480px、border-radius: 14px
- フォント：-apple-system, BlinkMacSystemFont, 'Hiragino Sans'

## Cloud Functions ルール

- すべて v2（`firebase-functions/v2/https`）
- すべての onCall に `enforceAppCheck: true`
- region: `"asia-northeast1"`
- Secrets は `defineSecret()` で定義

## 事業者情報

- 運営：南條 雅哉 / Zaibase Group
- 住所：〒543-0071 大阪府大阪市天王寺区筆ヶ崎町6-12-1701
- メール：support@zaibase.jp
- 電話：請求があった場合に遅滞なく開示（特定商取引法対応）

## Firebase プロジェクト

| プロダクト | Firebase プロジェクト | URL |
|---|---|---|
| Zaibase建設 | zaisai-share | https://zaisai-share.web.app/app |
| Zaibase法律相談 | zaibase-horitsu | https://zaibase-horitsu.web.app |

## Stripe

- アカウント名：Zaibase Group（MIYABI WOR / acct_1TEhbMJtbSkZ2zlG）
- 建設プラン：starter ¥1,980 / pro ¥5,480 / team ¥14,800（月額）
- 法律相談：standard ¥2,980 / pro ¥7,800（月額）
- Zaibase建設プロプラン会員割引：法律相談が¥1,000引き

## 現在の開発ブランチ

`claude/water-soil-pollution-compliance-bekue1`

## よく使うコマンド

```bash
# 建設デプロイ
cd kensetsu && firebase deploy --only hosting

# 法律相談デプロイ
cd horitsu && firebase deploy

# Stripe Secret設定
firebase functions:secrets:set STRIPE_SECRET_KEY
firebase functions:secrets:set HORITSU_STRIPE_SECRET_KEY
```
