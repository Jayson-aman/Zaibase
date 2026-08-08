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
import { lessonFigsRikaExt01 } from './lesson-figs-rika-ext01';
import { lessonFigsRikaExt02 } from './lesson-figs-rika-ext02';
import { lessonFigsRikaExt03 } from './lesson-figs-rika-ext03';
import { lessonFigsRikaExt04 } from './lesson-figs-rika-ext04';
import { lessonFigsRikaExt05 } from './lesson-figs-rika-ext05';
import { lessonFigsRikaExt06 } from './lesson-figs-rika-ext06';
import { lessonFigsRikaExt07 } from './lesson-figs-rika-ext07';
import { lessonFigsRikaExt08 } from './lesson-figs-rika-ext08';
import { lessonFigsRikaExt09 } from './lesson-figs-rika-ext09';
import { lessonFigsRikaExt10 } from './lesson-figs-rika-ext10';
import { lessonFigsRikaExt11 } from './lesson-figs-rika-ext11';
import { lessonFigsRikaExt12 } from './lesson-figs-rika-ext12';
import { lessonFigsShakaiExt01 } from './lesson-figs-shakai-ext01';
import { lessonFigsShakaiExt02 } from './lesson-figs-shakai-ext02';
import { lessonFigsShakaiExt03 } from './lesson-figs-shakai-ext03';
import { lessonFigsShakaiExt04 } from './lesson-figs-shakai-ext04';
import { lessonFigsShakaiExt05 } from './lesson-figs-shakai-ext05';
import { lessonFigsShakaiExt06 } from './lesson-figs-shakai-ext06';
import { lessonFigsShakaiExt07 } from './lesson-figs-shakai-ext07';
import { lessonFigsShakaiExt08 } from './lesson-figs-shakai-ext08';
import { lessonFigsShakaiExt09 } from './lesson-figs-shakai-ext09';
import { lessonFigsShakaiExt10 } from './lesson-figs-shakai-ext10';
import { lessonFigsShakaiExt11 } from './lesson-figs-shakai-ext11';
import { lessonFigsShakaiExt12 } from './lesson-figs-shakai-ext12';

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
  ...lessonFigsRikaExt01,
  ...lessonFigsRikaExt02,
  ...lessonFigsRikaExt03,
  ...lessonFigsRikaExt04,
  ...lessonFigsRikaExt05,
  ...lessonFigsRikaExt06,
  ...lessonFigsRikaExt07,
  ...lessonFigsRikaExt08,
  ...lessonFigsRikaExt09,
  ...lessonFigsRikaExt10,
  ...lessonFigsRikaExt11,
  ...lessonFigsRikaExt12,
  ...lessonFigsShakaiExt01,
  ...lessonFigsShakaiExt02,
  ...lessonFigsShakaiExt03,
  ...lessonFigsShakaiExt04,
  ...lessonFigsShakaiExt05,
  ...lessonFigsShakaiExt06,
  ...lessonFigsShakaiExt07,
  ...lessonFigsShakaiExt08,
  ...lessonFigsShakaiExt09,
  ...lessonFigsShakaiExt10,
  ...lessonFigsShakaiExt11,
  ...lessonFigsShakaiExt12,
};

export function getLessonFigure(figureId: string): Figure | null {
  return lessonFigures[figureId] ?? null;
}
