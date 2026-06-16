# Zaibase Group — 開発ガイド

## Zaibase Group 全プロダクト一覧

| プロダクト | リポジトリ | URL | 担当ツール |
|---|---|---|---|
| Zaibase建設 | jayson-aman/zaibase (kensetsu/) | https://zaisai-share.web.app/app | Claude Code |
| Zaibase法律相談（Firebase版） | jayson-aman/zaibase (horitsu/) | https://zaibase-horitsu.web.app | Claude Code |
| Zaibase法律相談（Cloud Run版・本番） | 別リポジトリ（~/Documents/GitHub/Zaibase法律相談） | https://3vfa-an.a.run.app | Cursor |
| 中学受験対策 ahiru | jayson-aman/zaibase (ahiru/)（旧 jayson-aman/ahiru は統合元として残存） | https://exam.zaibase.group | Claude Code |
| Zaibase Group 会社サイト | jayson-aman/zaibase.group | https://www.zaibase.group | Cursor |
| Zaibase証券（仮） | jayson-aman/miyabi-securities-app（公開・このリポジトリ未統合。旧 miyabi-securities はアーカイブ済み。Streamlit製AI金融分析ダッシュボード：ニュース・要人発言・軍事動向のAI分析でFX・先物・株式・暗号資産・新興テーマ株の値動きを予測。Python100%、Yahoo Finance/Google Newsがデータ元、教育目的・投資助言ではないと明記） | 未定 | Cursor |
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
- **Vercel連携：完了（2026/6/16）**：VercelプロジェクトのGitHub App権限を許可 → Connected Git Repositoryをこのリポジトリ（Jayson-aman/Zaibase）に変更 → Root Directoryを `ahiru` に設定 → `main` への統合コミット反映後、Production環境へのデプロイ成功を確認済み。
- **要確認**：Claude Code on the web に jayson-aman/ahiru 単体の別セッション（「受験」、Vercelデプロイ待ち状態）が残っている場合、この統合後は重複作業になるため終了・整理する。
- **現在の最優先タスク（2026/6/16時点・収益化優先）**：受験アプリのRevenueCat課金を有効化する。必要な3つのアカウント（RevenueCat／Apple Developer Program／Google Play Console）はいずれも未作成のため、Claude Codeがステップバイステップで作成・設定を案内中。コードは`services/subscription.ts`・`constants/proAccess.ts`に実装済みでプレースホルダーキーの差し替えのみで動く想定。
- 残タスク：ログイン方式の検討、既存の建設・法律相談と同様の監視・自動化フローへの組み込み。

## 司令塔AI（複数プロダクト横断監督）— 保留中

- 構想：建設・法律相談・受験（・将来の証券・物販）を横断的にチェックするAI（Claude Agent SDK / Managed Agentsの`multiagent`構成を想定）。
- コスト：固定費ではなくAnthropic APIの従量課金。1日1回程度の軽いチェックなら月数千円規模、頻度や読ませる情報量が増えると数万円規模になり得る。
- **2026/6/16判断**：収益化（受験アプリのRevenueCat課金）が先に必要なため、司令塔AIの構築は保留。受験アプリの課金が稼働してから着手する。

## 収益化アイデア（バックログ・未着手）

ahiruのRevenueCat課金が最優先のため、以下は着手前のアイデア段階。優先順位は決めていない。

- FX口座開設アフィリエイト：ASP（A8.net／afb／バリューコマース／アクセストレード）経由でGMOクリック証券等と提携。成果報酬は口座開設1件あたり1万円程度（クリック課金ではなく成果報酬型）。金融商品取引法上、利益を保証する表現は不可。
  - **`miyabi-securities-app`（Zaibase証券・AI金融分析ダッシュボード）との組み合わせが本命**：AI予測を見たユーザーがそのままFX口座開設に流れる導線を作れる。ただし「このAIが勝つと言っている／だから今すぐ口座開設」のような誘導は、教育目的の免責と矛盾し、投資助言業の規制（金融商品取引法）に抵触するリスクがあるため、予測コンテンツとアフィリエイト導線は明確に分離して表現する必要がある。
- ahiru：参考書・問題集のAmazonアソシエイトリンク設置
- kensetsu：保険・リフォーム業者の紹介料
- horitsu：弁護士紹介料（既存ルールの通り、弁護士法72条の確認が取れるまで保留）

## メール・クレーム対応

- `info@zaibase.group` → Cloudflare Email Routing経由の転送設定は**実際には無効（2026/6/16確認：Status Disabled、DNS records Not configured）**。前回記載の「2026/6/15設定・完了」は誤り。`info@zaibase.group` は転送ではなく独立したGoogleアカウント（自分自身の受信トレイ）として運用されている。
- Claude APIを使った自動返信：`info@zaibase.group` 宛の受信メール全てに「内容を確認のうえ3営業日以内に返信」とAI自動返信する仕組みが存在（場所はこのリポジトリ内ではなく外部・場所不明。クレーム/問い合わせ対応のため意図的に設置されたもので、停止しない）。2026/6/16、この自動返信がRevenueCatのチケットシステムと反応し合い、Ticket #79123〜#79133まで増殖するメールループが発生（実害なし、自然に停止）。**既知の課題**：no-reply/サポートチケット系の自動送信メール（RevenueCat等）にも無差別に自動返信してしまう。再発防止のため、`info@zaibase.group`のGmailフィルタで自動送信元（revenuecat.com等）を受信トレイスキップにする対策が未着手。
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
