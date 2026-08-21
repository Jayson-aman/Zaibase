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

export type { Lesson };

export const allLessons: Lesson[] = [
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

export function getLessonsBySubject(subject: string): Lesson[] {
  return allLessons.filter((l) => l.subject === subject).sort((a, b) => a.order - b.order);
}

export function getLessonsByExamType(examType: 'chugaku' | 'koko'): Lesson[] {
  return allLessons.filter((l) => l.examType === examType);
}

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

/** 教科書機能の無料お試し数。各科目・各受験種別ごとに最初のN単元まで無料。 */
export const FREE_LESSON_LIMIT = 5;

/** その単元が、無料お試し範囲（同じ科目・同じ受験種別の中で最初のN単元）に入っているか */
export function isLessonFree(lesson: Lesson): boolean {
  const siblings = getLessonsBySubject(lesson.subject).filter(
    (l) => (l.examType ?? 'chugaku') === (lesson.examType ?? 'chugaku'),
  );
  const idx = siblings.findIndex((l) => l.id === lesson.id);
  return idx >= 0 && idx < FREE_LESSON_LIMIT;
}
