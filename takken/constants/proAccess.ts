/** 無料プランで解ける問題数の上限 */
export const FREE_QUESTION_LIMIT = 50;

/** Pro プランの機能 */
export const PRO_FEATURES = [
  '📚 全790問アクセス（宅建業法・権利関係・法令制限・税その他）',
  '🎯 応用問題を含む全難易度',
  '🎧 音声聞き流しモード（Google TTS）',
  '📖 詳細解説・全4択の個別説明',
  '📊 分野別の出題数・正誤表示',
] as const;

/** Max プランが追加で使える機能（Proの全機能に上乗せ） */
export const MAX_FEATURES = [
  '📝 模試モード（本番形式 50問・2時間タイマー）',
  '🤖 AI弱点コーチ（間違いパターン分析・復習プラン自動生成）',
  '🏆 合格予測スコア',
] as const;

export const PLAN_PRICE_PRO = '¥1,000/月';
export const PLAN_PRICE_MAX = '¥2,000/月';
