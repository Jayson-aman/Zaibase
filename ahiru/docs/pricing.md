# ahiru サブスク価格（全プラットフォーム統一）

**方針：iOS App Store・Google Play・Web（Stripe）の3プラットフォームすべてで、利用者に表示される金額を「同額（円）」にする。**

金額の唯一の定義はコードの `constants/pricing.ts`。アプリ内の価格表示はすべてこの定数を参照している（直書き禁止）。各ストアに登録する金額も必ず下表と一致させること。金額を変えるときは「①`constants/pricing.ts` を更新 → ②3ストアすべての登録額を更新」の両方を行う。

## 統一価格表（税込・円）

| プラン | 月額 | 年額 | エンタイトルメント |
|---|---|---|---|
| PRO | **¥1,480/月** | — | `pro` |
| MAX | **¥2,480/月** | — | `max` |
| 英単語Pro（vocab） | **¥980/月** | **¥7,800/年** | `vocab` |

- 無料プラン：¥0（ずっと無料）。
- 年額 ¥7,800 は月額 ¥980×12=¥11,760 に対して約 4か月分お得（約34%引き）。

## 商品ID（3プラットフォームで対応させる）

| プラン | App Store / Google Play の Product ID | RevenueCat Web の Package ID |
|---|---|---|
| PRO 月額 | `com.zaibase.exam.pro.monthly` | `pro_monthly` |
| MAX 月額 | `com.zaibase.exam.max.monthly` | `max_monthly` |
| 英単語 月額 | `com.zaibase.exam.vocab.monthly` | `vocab_monthly` |
| 英単語 年額 | `com.zaibase.exam.vocab.yearly` | `vocab_yearly` |

（定義元：`services/subscription.ts`）

## 各ストアでの登録手順（同額にする）

### iOS（App Store Connect）
- 自動更新サブスク4本を作成し、上表の Product ID を設定。
- 価格は「価格ポイント（Price Point）」から**日本円で ¥1,480 / ¥2,480 / ¥980 / ¥7,800 に一致するもの**を選ぶ。基準通貨を日本にし、他国は自動換算でよい（「同額」は各国通貨での厳密一致ではなく、日本の表示額を指す）。
- サブスクグループ：PRO と MAX は同一グループ（アップグレード/ダウングレード可能に）。英単語(vocab)は別グループ推奨。

### Android（Google Play Console）
- 定期購入（サブスクリプション）4本を作成し、同じ Product ID を設定。
- 基本プランの価格を**日本円で ¥1,480 / ¥2,480 / ¥980 / ¥7,800** に設定（Google Play は円を直接入力可）。
- 年額は英単語のみ（`vocab_yearly`）。

### Web（RevenueCat Web Billing + Stripe）
- Stripe の Product/Price を**円で ¥1,480 / ¥2,480 / ¥980 / ¥7,800** で作成。
- RevenueCat の Web Billing で Package ID（`pro_monthly` 等）に紐付け。
- 環境変数 `EXPO_PUBLIC_RC_API_KEY_WEB`（`rcb_...`）を設定。

### RevenueCat（共通）
- 各ストア商品を RevenueCat の Product として取り込み、Offering の Package（`pro_monthly` / `max_monthly` / `vocab_monthly` / `vocab_yearly`）に割り当てる。
- Entitlement を割り当て：PRO商品→`pro`、MAX商品→`max`、英単語商品→`vocab`。
- iOS 用キー `EXPO_PUBLIC_RC_API_KEY_IOS`（`appl_...`）、Android 用 `EXPO_PUBLIC_RC_API_KEY_ANDROID`（`goog_...`）を設定。

## 表示について
- アプリは各ストアが返す `priceString`（実際の登録額）を表示するため、上記のとおり同額で登録すれば全プラットフォームで同じ金額が表示される。
- ストア価格の取得前・未設定時は `constants/pricing.ts` のフォールバック表示（¥1,480/月 等）が出る。よってフォールバックと実登録額を一致させておくこと。

> この表を変更したら `constants/pricing.ts` と各ストア登録額を必ず同時に更新する。
