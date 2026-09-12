// ───────────────────────────────────────────────────────────────
// 公式・まとめ（formulas）アグリゲーター
// ───────────────────────────────────────────────────────────────
// 各教科のデータは data/formulas-*.ts に分割。ここで一つにまとめる。
import type { FormulaSection } from './formulas-types';
import { sansuFormulas } from './formulas-sansu';
import { rikaFormulas } from './formulas-rika';
import { rikaButsuriKagakuFormulas } from './formulas-rika-butsuri-kagaku';
import { shakaiFormulas } from './formulas-shakai';
import { shakaiTsuikaFormulas } from './formulas-shakai-tsuika';
import { kokugoFormulas } from './formulas-kokugo';
import { eigoFormulas } from './formulas-eigo';

export type Subject = '算数' | '国語' | '理科' | '社会' | '英語';

export const SUBJECTS: { key: Subject; emoji: string; color: string }[] = [
  { key: '算数', emoji: '📐', color: '#4A90D9' },
  { key: '国語', emoji: '📖', color: '#E74C3C' },
  { key: '理科', emoji: '🔬', color: '#27AE60' },
  { key: '社会', emoji: '🌍', color: '#F39C12' },
  { key: '英語', emoji: '🔤', color: '#9B59B6' },
];

// 既存の無料項目（rikaFormulas・shakaiFormulas）はそのまま。あとから足した分は
// 買い切り（locked: true）の別ファイルにして後ろに連結する。既存ファイルを
// 編集しないので、無料だった項目が誤って有料になることがない。
export const FORMULAS: Record<Subject, FormulaSection[]> = {
  算数: sansuFormulas,
  国語: kokugoFormulas,
  理科: [...rikaFormulas, ...rikaButsuriKagakuFormulas],
  社会: [...shakaiFormulas, ...shakaiTsuikaFormulas],
  英語: eigoFormulas,
};

export type { FormulaSection, FormulaItem, FormulaExample, FormulaQuizItem } from './formulas-types';
