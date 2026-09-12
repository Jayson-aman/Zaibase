// ───────────────────────────────────────────────────────────────
// 公式・まとめ（formulas）アグリゲーター
// ───────────────────────────────────────────────────────────────
// 各教科のデータは data/formulas-*.ts に分割。ここで一つにまとめる。
import type { FormulaSection } from './formulas-types';
import { sansuFormulas } from './formulas-sansu';
import { rikaFormulas } from './formulas-rika';
import { rikaButsuriKagakuFormulas } from './formulas-rika-butsuri-kagaku';
import { shakaiFormulas } from './formulas-shakai';

export type Subject = '算数' | '理科' | '社会';

export const SUBJECTS: { key: Subject; emoji: string; color: string }[] = [
  { key: '算数', emoji: '📐', color: '#4A90D9' },
  { key: '理科', emoji: '🔬', color: '#27AE60' },
  { key: '社会', emoji: '🌍', color: '#F39C12' },
];

export const FORMULAS: Record<Subject, FormulaSection[]> = {
  算数: sansuFormulas,
  // 既存の無料項目（rikaFormulas）はそのまま。あとから足した物理・化学は
  // 買い切り（locked: true）の別ファイルとして後ろに連結する。
  理科: [...rikaFormulas, ...rikaButsuriKagakuFormulas],
  社会: shakaiFormulas,
};

export type { FormulaSection, FormulaItem, FormulaExample, FormulaQuizItem } from './formulas-types';
