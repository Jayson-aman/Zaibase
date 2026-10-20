# 解約された方への「再開のお知らせ」メール — 開始の手順（2026/10/20）

2.2.9 の審査が通ったので、Functions のデプロイに進めます（審査中はデプロイしない、と決めていたため止めていました）。
コードは `functions/winback.js`。**WINBACK_ENABLED=1 にするまでは、送らずに「送る予定」をログに出すだけ（ドライラン）**です。

## 手順（Mac で。キーはチャットに貼らない）
1. **Resend** のアカウントを作り、API キー（`re_...`）を発行する。
2. Resend で送信元ドメイン **zaibase.group** を追加し、表示される DNS レコード（SPF・DKIM）を Cloudflare に登録して、Verified にする。
   （`info@zaibase.group` の受信は、Cloudflare のメール転送ではなく独立した Google アカウントなので、受信設定はそのまま。送信用の DNS だけ追加する）
3. シークレットを設定する：
   ```
   cd ~/zaibase-repo/ahiru
   firebase functions:secrets:set RESEND_API_KEY
   firebase functions:secrets:set WINBACK_SIGNING_KEY   # 配信停止リンクの署名用。長いランダム文字列
   ```
   （`REVENUECAT_SECRET_KEY` は既存の revenuecat.js と共通）
4. デプロイ：`cd ~/zaibase-repo/ahiru && firebase deploy --only functions`（絶対パスで。`~/ahiru` は QualiZ）
5. **ドライランで人数を確かめる**：毎月1日 10:00（日本時間）に起動する。待たずに試すなら、Firebase コンソール（zaibase-exam）の Cloud Scheduler から `winbackMonthly` を手動実行し、ログに「送る予定の人数」が出ることを見る。
6. 人数・宛先が妥当なら、`functions/.env` に `WINBACK_ENABLED=1` を書いて再デプロイ。

## 送る相手（コードの決まり）
- 解約した人（過去に有料の購読があり、いまは無い）：自動で対象。
- まだ契約していない人：登録時に「お知らせメールを受け取る」にチェックした人だけ。
- 配信を停止した人には二度と送らない。前回から28日以内の人には送らない。

## 先に決めておくこと
- **送信者の住所**：特定電子メール法で、表示が求められる。決まるまでは「ご請求があり次第、遅滞なく開示します」と表示される。バーチャルオフィス等で公開してよい住所が決まったら、`functions/.env` の `WINBACK_ADDRESS` に書く。このままで法的に足りるかは、弁護士確認の対象。
- 文面（2026/10/20 更新）：中学生向けの「定期テストの教科書」と、やさしい問題から始められる基本問題の追加を、箇条書きに1行足した。
