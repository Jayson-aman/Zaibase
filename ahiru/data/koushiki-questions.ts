// ───────────────────────────────────────────────────────────────
// 公式集（koushiki）の「公式 → その公式の例題・応用問題」逆引き
// ───────────────────────────────────────────────────────────────
// koushiki-access.ts の getKoushikiFormulaIdForQuestion は
// 「問題id → 公式のfigureId」の一方向だった。公式集のページ側で
// 「この公式の一問一答」をその場に出すには逆向きの対応が要るので、
// ここで figureId → Question[] のMapを作る。
//
// questions.ts（全教科15,000問超のアグリゲーター）ではなく、公式集の
// 例題ファイルだけを直接importしている。公式ページを開くたびに全問題の
// バンドルを引き込まないようにするため。

import type { Question } from './questions-meta';
import { getKoushikiFormulaIdForQuestion } from './koushiki-access';
import { gradeKoushikiOyoC1MensekiQuestions } from './grade_koushiki_oyo_c1menseki';
import { gradeKoushikiOyoC2EnQuestions } from './grade_koushiki_oyo_c2en';
import { gradeKoushikiOyoC3Tairyoku1Questions } from './grade_koushiki_oyo_c3tairyoku1';
import { gradeKoushikiOyoC4Tairyoku2Questions } from './grade_koushiki_oyo_c4tairyoku2';
import { gradeKoushikiOyoC5KakudoQuestions } from './grade_koushiki_oyo_c5kakudo';
import { gradeKoushikiOyoC6SojiQuestions } from './grade_koushiki_oyo_c6soji';
import { gradeKoushikiOyoK1GodoQuestions } from './grade_koushiki_oyo_k1godo';
import { gradeKoushikiOyoK2HeikouQuestions } from './grade_koushiki_oyo_k2heikou';
import { gradeKoushikiOyoK3SoujiQuestions } from './grade_koushiki_oyo_k3souji';
import { gradeKoushikiOyoK4En1Questions } from './grade_koushiki_oyo_k4en1';
import { gradeKoushikiOyoK5En2Questions } from './grade_koushiki_oyo_k5en2';
import { gradeKoushikiOyoK6SanpeiQuestions } from './grade_koushiki_oyo_k6sanpei';

const ALL_KOUSHIKI_QUESTIONS: Question[] = [
  ...gradeKoushikiOyoC1MensekiQuestions,
  ...gradeKoushikiOyoC2EnQuestions,
  ...gradeKoushikiOyoC3Tairyoku1Questions,
  ...gradeKoushikiOyoC4Tairyoku2Questions,
  ...gradeKoushikiOyoC5KakudoQuestions,
  ...gradeKoushikiOyoC6SojiQuestions,
  ...gradeKoushikiOyoK1GodoQuestions,
  ...gradeKoushikiOyoK2HeikouQuestions,
  ...gradeKoushikiOyoK3SoujiQuestions,
  ...gradeKoushikiOyoK4En1Questions,
  ...gradeKoushikiOyoK5En2Questions,
  ...gradeKoushikiOyoK6SanpeiQuestions,
];

/** id末尾の ex1 → ex2 → oyo1 → … の順（やさしい例題から応用へ）に並べるための重み。 */
function suffixOrder(questionId: string): number {
  const m = questionId.match(/_(ex|oyo)(\d+)$/);
  if (m == null) return 99;
  return (m[1] === 'ex' ? 0 : 10) + Number(m[2]);
}

function buildIndex(): Map<string, Question[]> {
  const map = new Map<string, Question[]>();
  for (const q of ALL_KOUSHIKI_QUESTIONS) {
    const figureId = getKoushikiFormulaIdForQuestion(q.id);
    if (figureId == null) continue;
    const list = map.get(figureId);
    if (list == null) map.set(figureId, [q]);
    else list.push(q);
  }
  for (const list of map.values()) {
    list.sort((a, b) => suffixOrder(a.id) - suffixOrder(b.id));
  }
  return map;
}

const QUESTIONS_BY_FIGURE_ID = buildIndex();

/** その公式（LessonSectionのfigureId）にひもづく例題・応用問題を、やさしい順に返す。 */
export function getKoushikiQuestionsForFigure(figureId: string): Question[] {
  return QUESTIONS_BY_FIGURE_ID.get(figureId) ?? [];
}
