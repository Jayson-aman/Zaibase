import type { Lesson } from './lesson-types';
import { sansuLessons } from './lessons-sansu';
import { kokugoLessons } from './lessons-kokugo';
import { rikaLessons } from './lessons-rika';
import { shakaiLessons } from './lessons-shakai';
import { eigoLessons } from './lessons-eigo';

export type { Lesson };

export const allLessons: Lesson[] = [
  ...sansuLessons,
  ...kokugoLessons,
  ...rikaLessons,
  ...shakaiLessons,
  ...eigoLessons,
];

export function getLessonsBySubject(subject: string): Lesson[] {
  return allLessons.filter((l) => l.subject === subject).sort((a, b) => a.order - b.order);
}

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}
