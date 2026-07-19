// 教科書（レッスン）用の動く図解レジストリ。
// LessonSection.figureId → Figure を解決する。図形データ型・描画は
// クイズの図解（data/figures.ts / components/FigureView.tsx）と共通で、
// 教科書内でも同じ「動く解説」アニメーションが再生される。

import type { Figure } from './figures';
import { lessonFigsSansu } from './lesson-figs-sansu';
import { lessonFigsRika } from './lesson-figs-rika';
import { lessonFigsKokoMath } from './lesson-figs-koko-math';
import { lessonFigsKokoRika } from './lesson-figs-koko-rika';

export const lessonFigures: Record<string, Figure> = {
  ...lessonFigsSansu,
  ...lessonFigsRika,
  ...lessonFigsKokoMath,
  ...lessonFigsKokoRika,
};

export function getLessonFigure(figureId: string): Figure | null {
  return lessonFigures[figureId] ?? null;
}
