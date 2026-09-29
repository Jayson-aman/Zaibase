// ───────────────────────────────────────────────────────────────
// 公式・まとめ（formulas）アグリゲーター
// ───────────────────────────────────────────────────────────────
// 各教科のデータは data/formulas-*.ts に分割。ここで一つにまとめる。
import type { FormulaSection } from './formulas-types';
import { FORMULA_DIAGRAMS } from './formulas-diagrams';
import { sansuFormulas } from './formulas-sansu';
import { sansuTsuikaFormulas } from './formulas-sansu-tsuika';
import { sansuTsuika2Formulas } from './formulas-sansu-tsuika2';
import { sansuTsuika3Formulas } from './formulas-sansu-tsuika3';
import { sansuTsuika4Formulas } from './formulas-sansu-tsuika4';
import { sansuTsuika5Formulas } from './formulas-sansu-tsuika5';
import { sansuTsuika6Formulas } from './formulas-sansu-tsuika6';
import { kokoSugakuFormulas } from './formulas-koko-sugaku';
import { rikaFormulas } from './formulas-rika';
import { rikaButsuriKagakuFormulas } from './formulas-rika-butsuri-kagaku';
import { rikaTsuika2Formulas } from './formulas-rika-tsuika2';
import { rikaTsuika3Formulas } from './formulas-rika-tsuika3';
import { rikaTsuika4Formulas } from './formulas-rika-tsuika4';
import { rikaTsuika5Formulas } from './formulas-rika-tsuika5';
import { rikaTsuika6Formulas } from './formulas-rika-tsuika6';
import { rikaTsuika7Formulas } from './formulas-rika-tsuika7';
import { kokoRikaFormulas } from './formulas-koko-rika';
import { shakaiFormulas } from './formulas-shakai';
import { shakaiTsuikaFormulas } from './formulas-shakai-tsuika';
import { shakaiTsuika2Formulas } from './formulas-shakai-tsuika2';
import { shakaiTsuika3Formulas } from './formulas-shakai-tsuika3';
import { shakaiTsuika4Formulas } from './formulas-shakai-tsuika4';
import { shakaiTsuika5Formulas } from './formulas-shakai-tsuika5';
import { shakaiTsuika6Formulas } from './formulas-shakai-tsuika6';
import { shakaiTsuika7Formulas } from './formulas-shakai-tsuika7';
import { shakaiTsuika8Formulas } from './formulas-shakai-tsuika8';
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
const FORMULAS_RAW: Record<Subject, FormulaSection[]> = {
  算数: [...sansuFormulas, ...sansuTsuikaFormulas, ...sansuTsuika2Formulas, ...sansuTsuika3Formulas, ...sansuTsuika4Formulas, ...sansuTsuika5Formulas, ...sansuTsuika6Formulas, ...kokoSugakuFormulas],
  国語: [...kokugoFormulas, ...kokoKokugoFormulas],
  理科: [...rikaFormulas, ...rikaButsuriKagakuFormulas, ...rikaTsuika2Formulas, ...rikaTsuika3Formulas, ...rikaTsuika4Formulas, ...rikaTsuika5Formulas, ...rikaTsuika6Formulas, ...rikaTsuika7Formulas, ...kokoRikaFormulas],
  社会: [...shakaiFormulas, ...shakaiTsuikaFormulas, ...shakaiTsuika2Formulas, ...shakaiTsuika3Formulas, ...shakaiTsuika4Formulas, ...shakaiTsuika5Formulas, ...shakaiTsuika6Formulas, ...shakaiTsuika7Formulas, ...shakaiTsuika8Formulas, ...kokoShakaiFormulas],
  英語: [...eigoFormulas, ...eigoKokoFormulas],
};

// 動く図解スライドを、label が一致する項目に取りつける（項目に figure が無いときだけ）。
function withDiagrams(sections: FormulaSection[]): FormulaSection[] {
  return sections.map((sec) => ({
    ...sec,
    items: sec.items.map((it) => (it.figure || !FORMULA_DIAGRAMS[it.label] ? it : { ...it, figure: FORMULA_DIAGRAMS[it.label] })),
  }));
}

export const FORMULAS: Record<Subject, FormulaSection[]> = {
  算数: withDiagrams(FORMULAS_RAW.算数),
  国語: withDiagrams(FORMULAS_RAW.国語),
  理科: withDiagrams(FORMULAS_RAW.理科),
  社会: withDiagrams(FORMULAS_RAW.社会),
  英語: withDiagrams(FORMULAS_RAW.英語),
};

/** まとめ買いのID（受験種別×教科）。formulaUnlocks の unlocked に、公式のlabelと並べて入る。 */
export function formulaBundleId(examType: 'chugaku' | 'koko', subject: Subject): string {
  return `bundle:${examType}:${subject}`;
}

/** その受験種別×教科で、ロックされている項目の数（まとめ買いで読めるようになる数）。 */
export function countLockedFormulas(examType: 'chugaku' | 'koko', subject: Subject): number {
  let n = 0;
  for (const sec of FORMULAS[subject]) {
    if (sec.examType != null && sec.examType !== examType) continue;
    for (const it of sec.items) if (it.locked) n++;
  }
  return n;
}

export type { FormulaSection, FormulaItem, FormulaExample, FormulaQuizItem } from './formulas-types';
