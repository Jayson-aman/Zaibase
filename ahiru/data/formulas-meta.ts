// 公式集の「軽い」部分。教科の一覧・無料枠・まとめ買いIDだけをここに置く。
// 本体（約15MBの公式データと図解）は formulas.ts にあり、公式集の画面を開いたときにだけ読みこむ
// （data/formulas-lazy.ts）。
export type Subject = '算数' | '国語' | '理科' | '社会' | '英語';

export const SUBJECTS: { key: Subject; emoji: string; color: string }[] = [
  { key: '算数', emoji: '📐', color: '#4A90D9' },
  { key: '国語', emoji: '📖', color: '#E74C3C' },
  { key: '理科', emoji: '🔬', color: '#27AE60' },
  { key: '社会', emoji: '🌍', color: '#F39C12' },
  { key: '英語', emoji: '🔤', color: '#9B59B6' },
];

// 2026/9/29 3→8。3項目だけでは「公式集がどういうものか」を判断できず、「少ない」と受け取られたため。
export const FREE_FORMULAS_PER_CELL = 8;

/** まとめ買いのID（受験種別×教科）。formulaUnlocks の unlocked に、公式のlabelと並べて入る。 */
export function formulaBundleId(examType: 'chugaku' | 'koko', subject: Subject): string {
  return `bundle:${examType}:${subject}`;
}
