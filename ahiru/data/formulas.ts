// ───────────────────────────────────────────────────────────────
// 公式・まとめ（formulas）アグリゲーター
// ───────────────────────────────────────────────────────────────
// 各教科のデータは data/formulas-*.ts に分割。ここで一つにまとめる。
import type { FormulaSection } from './formulas-types';
import { sansuFormulas } from './formulas-sansu';
import { rikaFormulas } from './formulas-rika';
import { shakaiFormulas } from './formulas-shakai';

export type Subject = '算数' | '理科' | '社会';

export const SUBJECTS: { key: Subject; emoji: string; color: string }[] = [
  { key: '算数', emoji: '📐', color: '#4A90D9' },
  { key: '理科', emoji: '🔬', color: '#27AE60' },
  { key: '社会', emoji: '🌍', color: '#F39C12' },
];

export const FORMULAS: Record<Subject, FormulaSection[]> = {
  算数: sansuFormulas,
  理科: rikaFormulas,
  社会: shakaiFormulas,
};

export type { FormulaSection, FormulaItem, FormulaExample } from './formulas-types';
