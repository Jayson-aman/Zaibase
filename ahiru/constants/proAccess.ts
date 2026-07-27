// 地理マップは全レイヤー（地形・山地・農業・漁業・林業・工業・商業）を
// 全ユーザーに無料開放している。以前はProの宣伝文句に入っていたが、
// 実装が伴っておらず「有料と書いてあるのに無料で使える」状態だったため、
// 実態に合わせて記載を外した。再び有料化する場合は、宣伝文句を戻すのと
// 同時にGeographyExplorer側のゲートも必ず実装すること。
export const GEO_LAYERS = [
  'terrain', 'mountains', 'agriculture', 'fishery', 'forestry', 'factory', 'commerce',
] as const;

export type GeoLayerId = (typeof GEO_LAYERS)[number];

export const PRO_FEATURES = [
  '🎧 聞き流しモード（算数・国語・理科・社会・英語）',
  '📚 全問題13,000問＋難関校の発展問題',
  '📖 くわしい解説・覚え方・ひっかけ注意つき',
  '📕 全科目の教科書（動く図解つき）',
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

