# ahiru サブスク価格

**方針：英単語Pro・公式集・単元買い切りは、iOS App Store・Google Play・Web（Stripe）の3プラットフォームすべてで「同額（円）」にする。**
**ただしPro・Maxのみ、2026/9/25にユーザーの指示でWeb版を値上げした（Web版だけiOS/Androidより高い）。** これは「同額」の原則からの意図的な例外であり、Web版のPro/Max課金がまだ一度も開始していなかった（既存Web課金者がいない）タイミングでの初期価格設定として行った。

金額の唯一の定義はコードの `constants/pricing.ts`（Pro/MaxのWeb価格は同ファイルの `WEB_PRICES`）。アプリ内の価格表示はすべてこの定数を参照している（直書き禁止）。各ストアに登録する金額も必ず下表と一致させること。金額を変えるときは「①`constants/pricing.ts` を更新 → ②該当ストアの登録額を更新」の両方を行う。

## 価格表（税込・円）

| プラン | iOS / Android | Web | エンタイトルメント |
|---|---|---|---|
| PRO | **¥1,980/月** | **¥2,980/月** | `pro` |
| MAX | **¥2,890/月** | **¥3,980/月** | `max` |
| 英単語Pro（vocab） | **¥1,680/月・¥13,800/年** | **¥1,680/月・¥13,800/年**（同額） | `vocab` |

- 無料プラン：¥0（ずっと無料）。
- 価格・Product IDは `constants/pricing.ts` と `services/subscription.ts` が唯一の情報源。本ドキュメントは必ずコードと同期させること（過去に本ドキュメントの記載が古いまま放置され、実際のコード・ストア設定と食い違っていたことがある）。
- 公式集は2026/9/29に **¥50→¥200（1項目）** に値上げし、**まとめ買い ¥2,980（受験種別×教科・ロック中の項目を全部解放）** を追加した。1項目ずつ買っても、その教科で15項目（＝まとめ買いの金額に届く数）を買えば、のこりは自動で全部解放される（上限つき）。単元は2026/9/30に ¥100→¥150 に値上げ。3プラットフォーム完全同額。

## 商品ID（3プラットフォームで対応させる）

| プラン | App Store / Google Play の Product ID | RevenueCat Web の Package ID |
|---|---|---|
| PRO 月額 | `com.zaibase.exam.promonthly` | `pro_monthly` |
| MAX 月額 | `com.zaibase.exam.maxmonthly` | `max_monthly` |
| 英単語 月額 | `com.zaibase.exam.vocabmonthly` | `vocab_monthly` |
| 英単語 年額 | `com.zaibase.exam.vocabyearly` | `vocab_yearly` |
| 公式集 1項目（消費型・¥200） | `com.zaibase.exam.formulaunlock` | （Webは Stripe 直接決済） |
| 公式集 まとめ買い（消費型・¥2,980） | `com.zaibase.exam.formulabundle` | （Webは Stripe 直接決済） |
| 単元 1件（消費型・¥150） | `com.zaibase.exam.unitunlock` | （Webは Stripe 直接決済） |

（定義元：`services/subscription.ts`。**ドットなし**の形式。Apple側のID再利用制限により、旧ドット付きID `com.zaibase.exam.pro.monthly` 等から変更された経緯があるため、新規に商品を作成する際は必ずこの表のドットなしIDを使うこと）

Package IDはiOS/Android/Webで**同じ文字列**（`pro_monthly`/`max_monthly`）を使うが、Web版だけ中身の価格が異なる点に注意（RevenueCatのOffering内で、Web Billing appのPackageにだけ高い価格のPriceを紐付ける）。

## 各ストアでの登録手順

### iOS（App Store Connect）
- 自動更新サブスク4本を作成し、上表の Product ID を設定。
- 価格は「価格ポイント（Price Point）」から**日本円で ¥1,980 / ¥2,890 / ¥1,680 / ¥13,800 に一致するもの**を選ぶ。基準通貨を日本にし、他国は自動換算でよい。
- サブスクグループ：PRO と MAX は同一グループ（アップグレード/ダウングレード可能に）。英単語(vocab)は別グループ推奨。

### Android（Google Play Console）
- 定期購入（サブスクリプション）4本を作成し、同じ Product ID を設定。
- 基本プランの価格を**日本円で ¥1,980 / ¥2,890 / ¥1,680 / ¥13,800** に設定（Google Play は円を直接入力可）。
- 年額は英単語のみ（`vocab_yearly`）。

### Web（RevenueCat Web Billing + Stripe）
- Stripe の Product/Price を**円で ¥2,980（PRO）/ ¥3,980（MAX）/ ¥1,680 / ¥13,800** で作成（**PRO・MAXはiOS/Androidと異なる金額**であることに注意）。
- ahiru専用のStripeアカウント（`acct_1UJQzIBiyS3mhFgQ`、kensetsu/horitsuの「Zaibase Group」アカウントとは別）に接続すること。
- RevenueCat の Web Billing で Package ID（`pro_monthly` 等）に紐付け。
- 環境変数 `EXPO_PUBLIC_RC_API_KEY_WEB`（`rcb_...`）を設定。

### RevenueCat（共通）
- 各ストア商品を RevenueCat の Product として取り込み、Offering の Package（`pro_monthly` / `max_monthly` / `vocab_monthly` / `vocab_yearly`）に割り当てる。
- Entitlement を割り当て：PRO商品→`pro`、MAX商品→`max`、英単語商品→`vocab`（iOS/Android/Webで同じentitlementを共有するので、コード側の変更は不要）。
- iOS 用キー `EXPO_PUBLIC_RC_API_KEY_IOS`（`appl_...`）、Android 用 `EXPO_PUBLIC_RC_API_KEY_ANDROID`（`goog_...`）を設定。

## 表示について
- アプリは各ストアが返す `priceString`（実際の登録額）を表示するため、上記のとおり登録すればプラットフォームごとに正しい金額が表示される。
- ストア価格の取得前・未設定時、または一部の静的な価格表示箇所（`ConsentModal.tsx`・`data/legal.ts`の特定商取引法表記等）は `constants/pricing.ts` の `PRO_PRICE_LABEL`/`MAX_PRICE_LABEL` を使う。これらは実行時の `Platform.OS` を見て、Web版なら自動的に`WEB_PRICES`の金額を、iOS/Androidなら`PRICES`の金額を表示するようになっている。
- よってフォールバックと実際のストア登録額を、プラットフォームごとに必ず一致させておくこと。

> この表を変更したら `constants/pricing.ts` と各ストア登録額を必ず同時に更新する。Pro/MaxのWeb価格だけを変える場合は `WEB_PRICES` とRevenueCat Web BillingのPackage価格のみでよい（iOS/Androidの`PRICES`・ストア登録額は変更不要）。


## 公式集の買い切り（2026/9/29）

- **1項目 ¥200**：`com.zaibase.exam.formulaunlock`（消費型）。購入するたびに1項目が解放される。
- **まとめ買い ¥2,980**：`com.zaibase.exam.formulabundle`（消費型・**新規登録が必要**）。受験種別×教科（例：中学受験の算数）のロック中の項目を全部解放する。**上限の考え方**：1項目ずつ買った数が `FORMULA_BUNDLE_ITEM_CAP`（＝2980÷200の切り上げ＝15項目）に届くと、その教科ののこりは自動で全部ひらく（`constants/pricing.ts`・`app/(tabs)/formulas.tsx`）。解放記録は `formulaUnlocks/{uid}.unlocked` に `bundle:chugaku:算数` の形で入る。
- サーバーは商品ごとに別勘定で購入回数を照合する（`functions/contentUnlock.js`）。Web（Stripe）で買った分は `stripeUnlocked` に別記録し、ネイティブの購入回数と混ざらない。
- 金額を変えるときは `constants/pricing.ts` と `functions/stripeUnlock.js` の金額（Cloud Functions側は複製）と、各ストアの登録額を、すべて同じにする。
- 既存のストア商品 `formulaunlock` は、ストア側の価格を ¥50 → ¥200 に変更する（新しい商品IDは不要）。
