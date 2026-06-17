/** 無料プランで使える機能 */
export const FREE_GEO_LAYERS = ['terrain', 'agriculture'] as const;

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
  '🏛 歴史イラスト・甲冑・合戦シーン',
  '🎨 キャラクターマスコットのフル体験',
] as const;

/** Max が追加で使える機能（Proの全機能に上乗せ） */
export const MAX_FEATURES = [
  '🤖 AI弱点コーチ（間違えた問題からAIが復習アドバイス）',
] as const;

