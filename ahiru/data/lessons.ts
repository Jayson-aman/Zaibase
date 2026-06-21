import type { Lesson } from './lesson-types';
import { sansuLessons } from './lessons-sansu';
import { kokugoLessons } from './lessons-kokugo';
import { rikaLessons } from './lessons-rika';
import { shakaiLessons } from './lessons-shakai';
import { eigoLessons } from './lessons-eigo';
// 高校受験専用テキスト
import { kokoMathLessons } from './lessons-koko-math';
import { kokoKokugoLessons } from './lessons-koko-kokugo';
import { kokoEigoLessons } from './lessons-koko-eigo';

export type { Lesson };

export const allLessons: Lesson[] = [
  ...sansuLessons,
  ...kokugoLessons,
  ...rikaLessons,
  ...shakaiLessons,
  ...eigoLessons,
  // 高校受験（koko）
  ...kokoMathLessons,
  ...kokoKokugoLessons,
  ...kokoEigoLessons,
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
