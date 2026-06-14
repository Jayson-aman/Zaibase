# Zaibase Group — 開発ガイド

## プロジェクト構成

```
Zaibase/
├── kensetsu/          # Zaibase建設（Firebase: zaisai-share）
│   ├── frontend/Zaibase.html   # メインSPA（2万行超・単一ファイル）
│   ├── functions/              # Cloud Functions v2（25ファイル）
│   ├── firestore.rules
│   └── firebase.json
├── horitsu/           # Zaibase法律相談（Firebase: zaibase-horitsu）
│   ├── frontend/index.html     # 法律相談SPA
│   ├── functions/              # subscription.js / consult.js / revenue.js
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
