// ───────────────────────────────────────────────────────────────
// ahiru サブスク価格の唯一の定義（Single Source of Truth）
// ───────────────────────────────────────────────────────────────
// 全プラットフォーム（iOS App Store / Google Play / Web=Stripe）で
// 「同一の金額」に統一する。実際に表示される金額は各ストアが返す
// priceString だが、それらのストア登録額も必ずこの表と一致させること。
// ストア設定の手順・対応表は docs/pricing.md を参照。
//
// ストアの priceString がまだ取得できない場合（未設定・読込前など）は、
// 下の *_LABEL をフォールバック表示として使う。表示のブレを防ぐため、
// アプリ内の価格表示は必ずこの定数を参照する（各所に直書きしない）。

/** 税込の月額・年額（円） */
export const PRICES = {
  // Pro：受験5科目（聞き流し・地理マップ全レイヤー・図解・全問題）。
  proMonthly: 1980,
  // Max：受験Pro＋英単語Pro（英検含む）＋AI弱点コーチの全部入り。
  // 単品合計（Pro¥1,980＋英単語Pro¥1,680＝¥3,660）より割安に設定。
  // ¥2,850はApple価格ポイントに無いため、最も近い¥2,890を採用。
  maxMonthly: 2890,
  // 英単語Pro：英単語5,000+・熟語4,000+・英会話・英検5,160問・ネイティブ発音・AI英会話。
  vocabMonthly: 1680,
  vocabYearly: 13800,
} as const;

/** 3桁区切りの円表記（Hermes でも安全なように手動フォーマット） */
export function formatYen(n: number): string {
  return '¥' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const PRO_PRICE_LABEL = `${formatYen(PRICES.proMonthly)}/月`;
export const MAX_PRICE_LABEL = `${formatYen(PRICES.maxMonthly)}/月`;
export const VOCAB_MONTHLY_LABEL = `${formatYen(PRICES.vocabMonthly)}/月`;
export const VOCAB_YEARLY_LABEL = `${formatYen(PRICES.vocabYearly)}/年`;
