import type { Lesson } from './lesson-types';
import { sansuLessons } from './lessons-sansu';
import { kokugoLessons } from './lessons-kokugo';
import { rikaLessons } from './lessons-rika';
import { shakaiLessons } from './lessons-shakai';
import { eigoLessons } from './lessons-eigo';
// 高校受験専用テキスト
import { kokoMathLessons } from './lessons-koko-math';
import { kokoRikaLessons } from './lessons-koko-rika';
import { kokoKokugoLessons } from './lessons-koko-kokugo';
import { kokoEigoLessons } from './lessons-koko-eigo';
import { kokoShakaiLessons } from './lessons-koko-shakai';

import { EXTRA_SECTION_FIGURES } from './lesson-extra-figures';

export type { Lesson };

const baseLessons: Lesson[] = [
  ...sansuLessons,
  ...kokugoLessons,
  ...rikaLessons,
  ...shakaiLessons,
  ...eigoLessons,
  // 高校受験（koko）
  ...kokoMathLessons,
  ...kokoRikaLessons,
  ...kokoKokugoLessons,
  ...kokoEigoLessons,
  ...kokoShakaiLessons,
];

// あとから足した動く図解（data/lesson-extra-figures.ts）を、図解のない節に取りつける。
// 元から figureId がある節は変えない。
export const allLessons: Lesson[] = baseLessons.map((l) => {
  let changed = false;
  const sections = l.sections.map((sec, i) => {
    const fid = EXTRA_SECTION_FIGURES[`${l.id}#${i}`];
    if (!fid || sec.figureId) return sec;
    changed = true;
    return { ...sec, figureId: fid };
  });
  return changed ? { ...l, sections } : l;
});

export function getLessonsBySubject(subject: string): Lesson[] {
  return allLessons.filter((l) => l.subject === subject).sort((a, b) => a.order - b.order);
}

export function getLessonsByExamType(examType: 'chugaku' | 'koko'): Lesson[] {
  // examTypeを持たない初期の基幹単元は中学受験あつかいにする。
  // textbook.tsx・isLessonFree と既定値をそろえないと、同じ単元が
  // 画面には出るのにこの関数では拾えない、という食いちがいが起きる。
  return allLessons.filter((l) => (l.examType ?? 'chugaku') === examType);
}

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

/** 教科書機能の無料お試し数。各科目・各受験種別ごとに最初のN単元まで無料。 */
// 2026/9/29 5→15。「もう少し見たいところで課金表示」「教科書が少ない」という指摘を受けて広げた。
// 1教科・1受験種別あたり約550単元あるうち、最初の15単元は無料で通しで読める。
export const FREE_LESSON_LIMIT = 15;

/** その単元が、無料お試し範囲（同じ科目・同じ受験種別の中で最初のN単元）に入っているか */
export function isLessonFree(lesson: Lesson): boolean {
  const siblings = getLessonsBySubject(lesson.subject).filter(
    (l) => (l.examType ?? 'chugaku') === (lesson.examType ?? 'chugaku'),
  );
  const idx = siblings.findIndex((l) => l.id === lesson.id);
  return idx >= 0 && idx < FREE_LESSON_LIMIT;
}
