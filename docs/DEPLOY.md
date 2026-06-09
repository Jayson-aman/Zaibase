# Zaibase Cloud Functions デプロイ手順書

**対象プロジェクト**: `zaisai-share`（各ステップで必ず確認）

## 1. 前提条件

| ツール | 要件 |
|---|---|
| Node.js | v20以上（プロジェクトは v22 指定） |
| Firebase CLI | v13以上 |
| AWS CLI | v2以上（顔認証） |
| Stripe CLI | Webhook ローカルテスト用 |

```bash
firebase login
firebase projects:list
firebase use zaisai-share
cd functions && npm install
```

## 2. Secrets 登録

```bash
# Stripe（エスクロー）
firebase functions:secrets:set STRIPE_SECRET_KEY
firebase functions:secrets:set STRIPE_WEBHOOK_SECRET

# AWS Rekognition（顔認証）
firebase functions:secrets:set AWS_ACCESS_KEY_ID
firebase functions:secrets:set AWS_SECRET_ACCESS_KEY
firebase functions:secrets:set AWS_REGION          # ap-northeast-1
firebase functions:secrets:set REKOGNITION_COLLECTION_ID  # zaibase-workers

aws rekognition create-collection \
  --collection-id zaibase-workers \
  --region ap-northeast-1

# CCUS（建設業振興基金・審査2〜4週間）
firebase functions:secrets:set CCUS_API_KEY
```

## 3. Firestore

```bash
firebase deploy --only firestore:rules,firestore:indexes
```

本リポジトリの `firestore.rules` は `ordererId` / `contractorId` 命名（旧 `clientId` / `workerId` 非依存）。ダウンロード版ガイドの `users` 中心ルールとは異なります。

## 4. Cloud Scheduler（Functions デプロイ後に自動作成）

| Job | スケジュール | モジュール |
|---|---|---|
| `paymentAlertScheduler` | 毎朝 9:00 JST | `payment_alert.js` |
| `churnScheduler` | 毎朝 10:00 JST | `churn_prevention.js` |
| `ccusRetryScheduler` | 毎日 1:00 JST | `ccus.js` |

確認: [Cloud Scheduler（zaisai-share）](https://console.cloud.google.com/cloudscheduler?project=zaisai-share)

## 5. デプロイ

```bash
cd functions
npm install

# 全 Functions
firebase deploy --only functions

# 段階デプロイ例
firebase deploy --only functions:paymentAlertScheduler,functions:markWorkComplete,functions:confirmPayment
firebase deploy --only functions:getChurnStats,functions:churnScheduler,functions:cancelSubscription,functions:onPlanCancelled
firebase deploy --only functions:registerFace,functions:authenticateFace,functions:revokeFaceConsent
firebase deploy --only functions:onGpsLogCreated,functions:onFaceAuthCreated,functions:registerCcusWorkerId
```

## 6. Stripe Webhook

```
https://asia-northeast1-zaisai-share.cloudfunctions.net/stripeWebhook
```

イベント: `payment_intent.succeeded`, `payment_intent.payment_failed`

## 7. Trigger Email 拡張

```bash
firebase ext:install firebase/firestore-send-email --project=zaisai-share
```

`mail` コレクションへの書き込みでメール送信（churn / payment alert 等）。

## 8. デプロイ後チェックリスト

- [ ] Cloud Functions が ACTIVE
- [ ] Scheduler 3件が有効
- [ ] Rekognition コレクション `zaibase-workers` 存在
- [ ] Stripe Webhook テスト成功
- [ ] 顔登録 → 現場認証 → `faceAuthLogs` 作成
- [ ] CCUS API キー登録後、技能者ID検証

## 9. モジュール対応表

| ダウンロード版 | 本リポジトリ正本 |
|---|---|
| `modules/paymentAlert.js` | `functions/payment_alert.js` |
| `modules/escrow.js` | `functions/escrow.js` |
| `modules/churnPrevention.js` | `functions/churn_prevention.js` |
| `modules/ccus.js` | `functions/ccus.js` |
| `modules/faceAuth.js` | `functions/face_auth.js` |
| `functions/index.js` | `functions/index.js`（本ファイル統合済み） |

フロントエンド: `frontend/Zaibase.html`（顔登録・現場認証・CCUS・トーク連携は統合済み）

## 10. 次のステップ

1. `firebase deploy --only functions,firestore:rules,firestore:indexes`
2. Stripe Webhook 登録
3. CCUS API キー申請（[ccus.jp/api](https://www.ccus.jp/api/)）
4. 利用規約の弁護士レビュー
5. 有料職業紹介許可（神奈川労働局）
