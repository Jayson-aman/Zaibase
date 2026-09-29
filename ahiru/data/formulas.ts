// ───────────────────────────────────────────────────────────────
// 公式・まとめ（formulas）アグリゲーター
// ───────────────────────────────────────────────────────────────
// 各教科のデータは data/formulas-*.ts に分割。ここで一つにまとめる。
import type { FormulaSection } from './formulas-types';
import { sansuFormulas } from './formulas-sansu';
import { sansuTsuikaFormulas } from './formulas-sansu-tsuika';
import { kokoSugakuFormulas } from './formulas-koko-sugaku';
import { rikaFormulas } from './formulas-rika';
import { rikaButsuriKagakuFormulas } from './formulas-rika-butsuri-kagaku';
import { kokoRikaFormulas } from './formulas-koko-rika';
import { shakaiFormulas } from './formulas-shakai';
import { shakaiTsuikaFormulas } from './formulas-shakai-tsuika';
import { kokoShakaiFormulas } from './formulas-koko-shakai';
import { kokugoFormulas } from './formulas-kokugo';
import { kokoKokugoFormulas } from './formulas-koko-kokugo';
import { eigoFormulas } from './formulas-eigo';
import { eigoKokoFormulas } from './formulas-eigo-koko';

export type Subject = '算数' | '国語' | '理科' | '社会' | '英語';

export const SUBJECTS: { key: Subject; emoji: string; color: string }[] = [
  { key: '算数', emoji: '📐', color: '#4A90D9' },
  { key: '国語', emoji: '📖', color: '#E74C3C' },
  { key: '理科', emoji: '🔬', color: '#27AE60' },
  { key: '社会', emoji: '🌍', color: '#F39C12' },
  { key: '英語', emoji: '🔤', color: '#9B59B6' },
];

// 2026/9/29 方針変更：全教科・両受験種別とも「ファイル先頭の3項目だけ無料、
// 残りは¥50買い切り（locked: true）」に統一した。それまでは算数・理科・社会の
// 元からある項目（95・62・86件）が無料のままだった。
// Pro/Max購読者はロックに関係なく全項目を読める（formulas.tsx の bypassLock）。
// ⚠️ iOS/Androidの¥50商品（com.zaibase.exam.formulaunlock）がストアに未登録の
// あいだは、非購読者には「準備中です」ボタンが出るだけで購入できない。
export const FORMULAS: Record<Subject, FormulaSection[]> = {
  算数: [...sansuFormulas, ...sansuTsuikaFormulas, ...kokoSugakuFormulas],
  国語: [...kokugoFormulas, ...kokoKokugoFormulas],
  理科: [...rikaFormulas, ...rikaButsuriKagakuFormulas, ...kokoRikaFormulas],
  社会: [...shakaiFormulas, ...shakaiTsuikaFormulas, ...kokoShakaiFormulas],
  英語: [...eigoFormulas, ...eigoKokoFormulas],
};

export type { FormulaSection, FormulaItem, FormulaExample, FormulaQuizItem } from './formulas-types';
