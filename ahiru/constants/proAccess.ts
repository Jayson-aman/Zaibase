/** 無料プランで使える機能 */
export const FREE_GEO_LAYERS = ['terrain', 'mountains', 'agriculture'] as const;

/** Pro が必要な地理レイヤー */
export const PRO_GEO_LAYERS = ['fishery', 'forestry', 'factory', 'commerce'] as const;

export type GeoLayerId =
  | (typeof FREE_GEO_LAYERS)[number]
  | (typeof PRO_GEO_LAYERS)[number];

export function isProGeoLayer(layer: string): layer is (typeof PRO_GEO_LAYERS)[number] {
  return (PRO_GEO_LAYERS as readonly string[]).includes(layer);
}

export const PRO_FEATURES = [
  '🎧 聞き流しモード（算数・国語・理科・社会・英語）',
  '🗾 地理マップ全レイヤー（漁業・林業・工業・商業）',
  '🌾 全地域の漁業・林業・工業・商業詳細',
] as const;

/** Max が追加で使える機能（Pro＋英単語Proの全機能に上乗せの「全部入り」） */
export const MAX_FEATURES = [
  '🤖 AI弱点コーチ（間違えた問題からAIが復習アドバイス）',
  '🔤 英単語Proを丸ごと同梱（英単語4,800+・熟語4,000+・英会話）',
  '🇬🇧 英検対策 2・3・4級 5,160問（リスニング音声つき）',
] as const;

// ─── 英単語 Paywall（別課金） ───────────────────────────────
/** 英単語アドオン entitlement ID（RevenueCat） */
export const ENTITLEMENT_VOCAB = 'vocab';

/** 英単語アドオンで使える機能 */
export const VOCAB_FEATURES = [
  '🔊 ネイティブ発音（OpenAI TTS）',
  '📖 英単語4,800+・英熟語4,000+・日常英会話200',
  '🇬🇧 英検対策 2・3・4級 5,160問（リスニング音声つき）',
  '🗣️ AIと英会話練習',
  '📊 まちがえた問題の記録・復習',
] as const;

