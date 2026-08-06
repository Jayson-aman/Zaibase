// 教科書（レッスン）用の動く図解レジストリ。
// LessonSection.figureId → Figure を解決する。図形データ型・描画は
// クイズの図解（data/figures.ts / components/FigureView.tsx）と共通で、
// 教科書内でも同じ「動く解説」アニメーションが再生される。

import type { Figure } from './figures';
import { lessonFigsSansu } from './lesson-figs-sansu';
import { lessonFigsRika } from './lesson-figs-rika';
import { lessonFigsKokoMath } from './lesson-figs-koko-math';
import { lessonFigsKokoRika } from './lesson-figs-koko-rika';
import { lessonFigsSansuExt01 } from './lesson-figs-sansu-ext01';
import { lessonFigsSansuExt02 } from './lesson-figs-sansu-ext02';
import { lessonFigsSansuExt03 } from './lesson-figs-sansu-ext03';
import { lessonFigsSansuExt04 } from './lesson-figs-sansu-ext04';
import { lessonFigsSansuExt05 } from './lesson-figs-sansu-ext05';
import { lessonFigsSansuExt06 } from './lesson-figs-sansu-ext06';
import { lessonFigsSansuExt07 } from './lesson-figs-sansu-ext07';
import { lessonFigsSansuExt08 } from './lesson-figs-sansu-ext08';
import { lessonFigsSansuExt09 } from './lesson-figs-sansu-ext09';
import { lessonFigsSansuExt10 } from './lesson-figs-sansu-ext10';
import { lessonFigsSansuExt11 } from './lesson-figs-sansu-ext11';
import { lessonFigsSansuExt12 } from './lesson-figs-sansu-ext12';

export const lessonFigures: Record<string, Figure> = {
  ...lessonFigsSansu,
  ...lessonFigsRika,
  ...lessonFigsKokoMath,
  ...lessonFigsKokoRika,
  ...lessonFigsSansuExt01,
  ...lessonFigsSansuExt02,
  ...lessonFigsSansuExt03,
  ...lessonFigsSansuExt04,
  ...lessonFigsSansuExt05,
  ...lessonFigsSansuExt06,
  ...lessonFigsSansuExt07,
  ...lessonFigsSansuExt08,
  ...lessonFigsSansuExt09,
  ...lessonFigsSansuExt10,
  ...lessonFigsSansuExt11,
  ...lessonFigsSansuExt12,
};

export function getLessonFigure(figureId: string): Figure | null {
  return lessonFigures[figureId] ?? null;
}
