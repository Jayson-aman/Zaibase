# セキュリティ強化メモ（AI悪用・自動攻撃対策）

「Kimi K3 等のAIを使った自動攻撃者（ボット）」が現実に狙うのは、**公開されたエンドポイントを大量に叩いて従量課金を発生させるコスト濫用**と、**巨大入力によるトークン濫用**、そして**認可の抜け穴**です。今回の対策はこの3点に絞っています。

## 現状の防御（監査で確認済み・良好）
- **App Check 強制**：ahiru のAI関数（aiCoach / aiConversation / aiTutor / tts）と kensetsu の全 onCall（29ファイル・79箇所）で `enforceAppCheck: true`。正規アプリ以外（スクリプト/ボット）からの呼び出しを遮断。
- **認証必須＋レート制限**：ahiru の各AI関数は `req.auth.uid` 必須。英会話は1日20回、AI個別指導は月次上限＋無料体験1回。
- **Firestore ルールはロック済み**：`aiCoachUsage` / `aiTutorUsage` / `aiConversationUsage` 等の利用回数カウンタは `allow read, write: if false`（クライアントから改ざん不可、Cloud Functions のみ更新）。未定義パスはデフォルト拒否。利用者が自分の上限をリセットしたりPROを自己付与することはできない。
- **秘密鍵はサーバ側のみ**：ANTHROPIC / OpenAI / Stripe の各キーは `defineSecret` でCloud Functions内に。クライアントに露出なし。
  - 補足：クライアントに埋め込まれている Firebase Web API キーや RevenueCat 公開SDKキー（`EXPO_PUBLIC_*`）は**仕様上公開されるもので秘密ではない**。防御は上記の App Check + Firestore ルール + サーバ側シークレットで担保。
- **Stripe Webhook は署名検証**：`stripe.webhooks.constructEvent(rawBody, sig, secret)` で正規のStripeからのみ受理。

## 今回の追加対策（このコミット）
1. **AIコスト爆撃（トークン濫用）への最終防衛線** — `ahiru/functions/_sanitize.js` を新設し、認証・App Check を通過した後でも巨大入力を弾く：
   - `sanitizeHistory()`：会話履歴の**件数・各要素の文字数**を制限、`role` を `user`/`assistant` のみに限定、巨大画像ブロックを除外。
   - `assertImageSize()`：画像base64を約5MBで上限。
   - aiConversation・aiTutor に適用（従来 message は1000字上限だったが、**history と画像は未制限**だった穴を塞いだ）。aiTutor は `questionText` 2000字・`sessionId` 128字上限も追加。
2. **開いていた翻訳エンドポイントを封鎖** — kensetsu `translateText`（Vertex AI/Gemini 従量課金）が **App Check 無し**の onCall だった。`enforceAppCheck: true` を付与し、`text` 5000字・`target` 20字の上限も追加。

## 反映に必要な作業（要デプロイ）
コードを変更しただけでは有効になりません。以下をユーザー側で実行してください。

```bash
# ahiru の関数（AI入力サニタイズ）を反映
cd ahiru && firebase deploy --only functions

# kensetsu の translateText（App Check強制）を反映
cd kensetsu && firebase deploy --only functions:translateText
```

- デプロイ後、`translateText` が App Check 必須になるため、**kensetsu フロントで App Check が初期化・登録済みであること**を確認（他の29関数が動作しているので通常は問題なし）。
- Firebase コンソール → App Check で各アプリの登録状況と「Enforce」状態を確認。まだ「未実施」の関数があれば Enforce に切り替える。

## 継続監視のおすすめ
- Firebase の予算アラート（Billing → Budgets & alerts）を設定し、AI/翻訳の従量課金が急増したら通知。
- 異常な `resource-exhausted` / `unauthenticated` の多発は攻撃の兆候。Cloud Logging でモニタ。
