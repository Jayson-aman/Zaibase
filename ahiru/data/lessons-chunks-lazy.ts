// 教科書の単元を、「教科×受験種別」のファイル（data/lessons-gen/*.ts。scripts/gen-lessons.ts が書き出す）ごとに読みこむ。
// 一覧は選んだ教科×受験種別の1つ、単元ページはその単元が入っている1つだけを読む。
//
// `import()` の引数は文字列リテラルで書くこと（変数だと Metro がファイルを分けられない）。
import type { Lesson } from './lesson-types';
import { createLazyModule, type LazyModule } from '../utils/lazyModule';

const mk = (f: () => Promise<{ lessons: Lesson[] }>): LazyModule<Lesson[]> => createLazyModule(() => f().then((m) => m.lessons));

export const lessonChunks: Record<string, LazyModule<Lesson[]>> = {
  'sansu-chugaku': mk(() => import('./lessons-gen/sansu-chugaku')),
  'sansu-koko': mk(() => import('./lessons-gen/sansu-koko')),
  'kokugo-chugaku': mk(() => import('./lessons-gen/kokugo-chugaku')),
  'kokugo-koko': mk(() => import('./lessons-gen/kokugo-koko')),
  'rika-chugaku': mk(() => import('./lessons-gen/rika-chugaku')),
  'rika-koko': mk(() => import('./lessons-gen/rika-koko')),
  'shakai-chugaku': mk(() => import('./lessons-gen/shakai-chugaku')),
  'shakai-koko': mk(() => import('./lessons-gen/shakai-koko')),
  'eigo-chugaku': mk(() => import('./lessons-gen/eigo-chugaku')),
  'eigo-koko': mk(() => import('./lessons-gen/eigo-koko')),
};
