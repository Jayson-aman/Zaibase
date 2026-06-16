# Zaibase Group — 開発ガイド

## Zaibase Group 全プロダクト一覧

| プロダクト | リポジトリ | URL | 担当ツール |
|---|---|---|---|
| Zaibase建設 | jayson-aman/zaibase (kensetsu/) | https://zaisai-share.web.app/app | Claude Code |
| Zaibase法律相談（Firebase版） | jayson-aman/zaibase (horitsu/) | https://zaibase-horitsu.web.app | Claude Code |
| Zaibase法律相談（Cloud Run版・本番） | 別リポジトリ（~/Documents/GitHub/Zaibase法律相談） | https://3vfa-an.a.run.app | Cursor |
| 中学受験対策 ahiru | jayson-aman/zaibase (ahiru/)（旧 jayson-aman/ahiru は統合元として残存） | https://exam.zaibase.group | Claude Code |
| Zaibase Group 会社サイト | jayson-aman/zaibase.group | https://www.zaibase.group | Cursor |
| Zaibase証券（仮） | jayson-aman/miyabi-securities-app（非公開・このリポジトリ未統合。旧 miyabi-securities はアーカイブ済み） | 未定 | Cursor |
| Zaibase物販（仮） | jayson-aman/eBay-export-profit-dashboard（公開・このリポジトリ未統合） | 未定（Streamlit Community Cloudでデプロイ） | Cursor |

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
├── ahiru/             # 中学受験対策 ahiru（Expo/React Native、iOS・Android・Web）
│   ├── app/                     # expo-router 画面（タブ・クイズ等）
│   ├── components/ services/ hooks/ store/ data/
│   ├── services/subscription.ts # RevenueCat連携（Stripeではない）
│   └── vercel.json              # Web版デプロイ設定（Root Directory要設定）
└── docs/
    ├── group/         # Zaibase Group 戦略・収益予測
    ├── kensetsu/      # 建設仕様書・設計画面
    └── horitsu/       # 法律相談仕様書
```

## 絶対に混ぜない

- **kensetsu（建設）** と **horitsu（法律相談）** は別プロダクト・別Firebase
- 法律関連コンテンツ → kensetsu に入れる（法律相談SPAではない）
- 決済・Auth・Firestore は各プロジェクト独立
- horitsu の `applyGroupDiscount`（建設プロプラン会員→法律相談¥1,000引き、`horitsu/functions/subscription.js`）は、弁護士法72条（周旋・紹介規制）の確認が取れるまで管理者承認（`groupDiscountGranted`）しない
- zaibase.group・法律相談（Cloud Run版）に「建設のトラブルはそのまま法律相談へ」等、建設と法律相談を商業的に誘導する文言を入れない
- 詳細は `docs/group/legal-compliance-addendum.md` 参照

## ツール別担当まとめ

| 作業内容 | 使うツール |
|---|---|
| Zaibase建設・法律相談（Firebase）の機能追加 | **Claude Code（ここ）** |
| ahiru（受験）の機能追加 | **Claude Code（ここ）** |
| Cloud Run版法律相談の機能追加 | **Cursor** |
| 会社サイト（zaibase.group）の更新 | **Cursor** |
| 証券・物販（構築中）の機能追加 | **Cursor**（リポジトリ確定後にここへ追記） |
| デプロイ・GitHub管理 | **Claude Code（ここ）** |

## ahiru統合（2026/6/16 完了）

- jayson-aman/ahiru（公開リポジトリ）から `git clone` でコード取得 → `ahiru/` 配下にGit履歴なしで統合済み。秘密情報（`.env`等）は元リポジトリに含まれておらず、持ち込みなし。
- 旧 jayson-aman/ahiru リポジトリはこのまま残存（履歴保持用）。今後の開発はこのリポジトリの `ahiru/` でのみ行う。
- **課金はStripeではなくRevenueCat**（`ahiru/services/subscription.ts`）：iOS/Androidのネイティブアプリ内課金（App Store/Google Play IAP）をRevenueCat経由で利用する構成。`.env.example` のRevenueCatキーはまだプレースホルダーのため、本番キー（`EXPO_PUBLIC_RC_API_KEY_IOS` / `_ANDROID`）とApp Store Connect/Google Play Console側の商品設定が未着手。
- **要対応（Vercel）**：Web版はVercelでデプロイ（`ahiru/vercel.json`）。元のVercelプロジェクトが旧 jayson-aman/ahiru リポジトリに連携されている場合、デプロイ元をこのリポジトリに変更し、Root Directoryを `ahiru` に設定する必要がある（未設定のままだと旧リポジトリへのpushがないため自動デプロイが止まる）。
- **要確認**：Claude Code on the web に jayson-aman/ahiru 単体の別セッション（「受験」、Vercelデプロイ待ち状態）が残っている場合、この統合後は重複作業になるため終了・整理する。
- 残タスク：ログイン方式の検討、既存の建設・法律相談と同様の監視・自動化フローへの組み込み。

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
- メール：info@zaibase.group（`zaibase.jp` は未取得のため使用不可）
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

# 受験(ahiru) ローカル起動・Web版ビルド
cd ahiru && npm install && npm run web
cd ahiru && npx expo export --platform web
```
