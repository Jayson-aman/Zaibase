# Zaibase Group — 開発ガイド

## Zaibase Group 全プロダクト一覧

| プロダクト | リポジトリ | URL | 担当ツール |
|---|---|---|---|
| Zaibase建設 | jayson-aman/zaibase (kensetsu/) | https://zaisai-share.web.app/app | Claude Code |
| Zaibase法律相談（Firebase版） | jayson-aman/zaibase (horitsu/) | https://zaibase-horitsu.web.app | Claude Code |
| Zaibase法律相談（Cloud Run版・本番） | 別リポジトリ（~/Documents/GitHub/Zaibase法律相談） | https://3vfa-an.a.run.app | Cursor |
| 中学受験対策 ahiru | jayson-aman/ahiru →（統合中・移行先: jayson-aman/zaibase の `ahiru/`） | https://exam.zaibase.group | Claude Code（移行中、下記「ahiru統合」参照） |
| Zaibase Group 会社サイト | jayson-aman/zaibase.group | https://www.zaibase.group | Cursor |
| Zaibase証券（仮） | 未定（Cursorで構築中・枠のみ） | 未定 | Cursor |
| Zaibase物販（仮） | 未定（Cursorで構築中・枠のみ） | 未定 | Cursor |

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
├── ahiru/             # 中学受験対策 ahiru（統合作業中、未着手）
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
| ahiru（受験）の機能追加 | **Claude Code**（移行中。統合完了まではCursor作業分が残る場合あり） |
| Cloud Run版法律相談の機能追加 | **Cursor** |
| 会社サイト（zaibase.group）の更新 | **Cursor** |
| 証券・物販（構築中）の機能追加 | **Cursor**（リポジトリ確定後にここへ追記） |
| デプロイ・GitHub管理 | **Claude Code（ここ）** |

## ahiru統合（進行中・次のセッションでの作業）

- 方針：ahiru（jayson-aman/ahiru）を本リポジトリ内の新規フォルダ `ahiru/` として統合し、kensetsu・horitsuと同様にClaude Codeが一元管理する。Git履歴は引き継がない（新規コミットとして取り込む。jayson-aman/ahiru側の既存履歴はそのまま残してよい）。
- 担当：統合後はahiruの開発もCursorからClaude Codeへ完全移行（Cursorは使わない）
- 制約：このセッションは jayson-aman/zaibase にしかアクセスできず、jayson-aman/ahiru の内容を直接取得する手段がない（リポジトリ追加用ツールがこの環境では利用不可）。統合作業は **jayson-aman/zaibase と jayson-aman/ahiru の両方にアクセスできる新しいClaude Code on the web環境**を作成した上で行う
- 未着手の作業（新環境で実施）：
  1. ahiruのコードを `ahiru/` 配下にコピー
  2. Stripe課金設定（ahiruは現時点で未設定）
  3. ログイン方式の検討（プロダクトごとに異なる方式も検討中）
  4. 既存の建設・法律相談と同様の監視・自動化フローに組み込む

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
```
