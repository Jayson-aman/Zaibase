import { Platform } from 'react-native';

// ───────────────────────────────────────────────────────────────
// ahiru サブスク価格の唯一の定義（Single Source of Truth）
// ───────────────────────────────────────────────────────────────
// iOS App Store / Google Play / Web=Stripe で「同一の金額」に統一する
// ……のが原則だが、2026/9/25にユーザーの指示でPro・MaxのみWeb版を
// 値上げすることにした（下のWEB_PRICES参照）。それ以外（英単語Pro・
// 公式集・単元買い切り）は引き続き全プラットフォーム同額。
// 実際に表示される金額は各ストアが返す priceString だが、それらの
// ストア登録額も必ずこの表と一致させること。
// ストア設定の手順・対応表は docs/pricing.md を参照。
//
// ストアの priceString がまだ取得できない場合（未設定・読込前など）は、
// 下の *_LABEL をフォールバック表示として使う。表示のブレを防ぐため、
// アプリ内の価格表示は必ずこの定数を参照する（各所に直書きしない）。

const isWeb = Platform.OS === 'web';

/** 税込の月額・年額（円）。iOS App Store・Google Play・（Pro/Max以外は）Webで共通 */
export const PRICES = {
  // Pro：受験5科目（聞き流し・全16,000問・くわしい解説・教科書）。
  proMonthly: 1980,
  // Max：受験Pro＋英単語Pro（英検含む）＋AI弱点コーチの全部入り。
  // 単品合計（Pro¥1,980＋英単語Pro¥1,680＝¥3,660）より割安に設定。
  // ¥2,850はApple価格ポイントに無いため、最も近い¥2,890を採用。
  maxMonthly: 2890,
  // 英単語Pro：英単語3,200+・熟語3,200+・英会話・英検5,160問・ネイティブ発音・AI英会話。
  vocabMonthly: 1680,
  vocabYearly: 13800,
  // 公式集：先頭3項目を超えた分を1個ずつ買い切りで解放する消費型課金（2026/9/29に¥50→¥200）。
  formulaUnlock: 200,
  // 公式集のまとめ買い：受験種別×教科（例：中学受験の算数）の公式集を、ロックぶん全部解放する。
  // 1項目ずつ買うと（¥200×約100項目＝約2万円）高くなるので、上限として設定している。
  formulaBundle: 2980,
  // 新規追加した学年×科目ごとの単元（20個/学年科目）：無料5個を超えた分を
  // 1個ずつ買い切りで解放する消費型課金。
  unitUnlock: 150,
} as const;

// Web版のみのPro・Max価格（2026/9/25、ユーザー指示による値上げ）。
// RevenueCat Web BillingのPackage（pro_monthly/max_monthly）の価格も
// 必ずこの金額に設定すること（ここを変えるだけではストア側の実際の
// 課金額は変わらない。ここはあくまで表示用フォールバックの単一情報源）。
export const WEB_PRICES = {
  proMonthly: 2980,
  maxMonthly: 3980,
  // 年額（2026/9/30決定。Web版のみ。iOS/Androidは既存購読者への影響を避けるため追加しない）。
  // 月額×12に対する割引率は yearlyDiscountPercent() で計算して表示する（数字を直書きしない）。
  proYearly: 19800,
  maxYearly: 28900,
} as const;

/** 3桁区切りの円表記（Hermes でも安全なように手動フォーマット） */
export function formatYen(n: number): string {
  return '¥' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/** 年額の月あたり換算（円）と、月額×12に対する割引率（％）。Paywallの表示用 */
export function yearlyPerMonth(yearly: number): number {
  return Math.round(yearly / 12);
}
export function yearlyDiscountPercent(monthly: number, yearly: number): number {
  return Math.round((1 - yearly / (monthly * 12)) * 100);
}

export const PRO_YEARLY_PRICE_LABEL = `${formatYen(WEB_PRICES.proYearly)}/年`;
export const MAX_YEARLY_PRICE_LABEL = `${formatYen(WEB_PRICES.maxYearly)}/年`;

export const PRO_PRICE_LABEL = `${formatYen(isWeb ? WEB_PRICES.proMonthly : PRICES.proMonthly)}/月`;
export const MAX_PRICE_LABEL = `${formatYen(isWeb ? WEB_PRICES.maxMonthly : PRICES.maxMonthly)}/月`;
export const VOCAB_MONTHLY_LABEL = `${formatYen(PRICES.vocabMonthly)}/月`;
export const VOCAB_YEARLY_LABEL = `${formatYen(PRICES.vocabYearly)}/年`;
/** 買い切り（1回のみ）なので期間表記を付けない */
export const FORMULA_UNLOCK_PRICE_LABEL = formatYen(PRICES.formulaUnlock);
export const FORMULA_BUNDLE_PRICE_LABEL = formatYen(PRICES.formulaBundle);
/**
 * 1項目ずつ買っても、ここまで買えば（＝まとめ買いの金額に届けば）その教科は全部解放する。
 * 「買うほど得」ではなく「上限がある」ことを見せて、最初の1つを買いやすくする。
 */
export const FORMULA_BUNDLE_ITEM_CAP = Math.ceil(PRICES.formulaBundle / PRICES.formulaUnlock);
export const UNIT_UNLOCK_PRICE_LABEL = formatYen(PRICES.unitUnlock);
