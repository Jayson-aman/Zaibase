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
import { lessonFigsKokugoExt01 } from './lesson-figs-kokugo-ext01';
import { lessonFigsKokugoExt02 } from './lesson-figs-kokugo-ext02';
import { lessonFigsKokugoExt03 } from './lesson-figs-kokugo-ext03';
import { lessonFigsKokugoExt04 } from './lesson-figs-kokugo-ext04';
import { lessonFigsKokugoExt05 } from './lesson-figs-kokugo-ext05';
import { lessonFigsKokugoExt06 } from './lesson-figs-kokugo-ext06';
import { lessonFigsKokugoExt07 } from './lesson-figs-kokugo-ext07';
import { lessonFigsKokugoExt08 } from './lesson-figs-kokugo-ext08';
import { lessonFigsKokugoExt09 } from './lesson-figs-kokugo-ext09';
import { lessonFigsKokugoExt10 } from './lesson-figs-kokugo-ext10';
import { lessonFigsKokugoExt11 } from './lesson-figs-kokugo-ext11';
import { lessonFigsKokugoExt12 } from './lesson-figs-kokugo-ext12';
import { lessonFigsEigoExt01 } from './lesson-figs-eigo-ext01';
import { lessonFigsEigoExt02 } from './lesson-figs-eigo-ext02';
import { lessonFigsEigoExt03 } from './lesson-figs-eigo-ext03';
import { lessonFigsEigoExt04 } from './lesson-figs-eigo-ext04';
import { lessonFigsEigoExt05 } from './lesson-figs-eigo-ext05';
import { lessonFigsEigoExt06 } from './lesson-figs-eigo-ext06';
import { lessonFigsEigoExt07 } from './lesson-figs-eigo-ext07';
import { lessonFigsEigoExt08 } from './lesson-figs-eigo-ext08';
import { lessonFigsEigoExt09 } from './lesson-figs-eigo-ext09';
import { lessonFigsEigoExt10 } from './lesson-figs-eigo-ext10';
import { lessonFigsEigoExt11 } from './lesson-figs-eigo-ext11';
import { lessonFigsEigoExt12 } from './lesson-figs-eigo-ext12';
import { lessonFigsKokoRikaExt01 } from './lesson-figs-koko-rika-ext01';
import { lessonFigsKokoRikaExt02 } from './lesson-figs-koko-rika-ext02';
import { lessonFigsKokoRikaExt03 } from './lesson-figs-koko-rika-ext03';
import { lessonFigsKokoRikaExt04 } from './lesson-figs-koko-rika-ext04';
import { lessonFigsKokoRikaExt05 } from './lesson-figs-koko-rika-ext05';
import { lessonFigsKokoRikaExt06 } from './lesson-figs-koko-rika-ext06';
import { lessonFigsKokoRikaExt07 } from './lesson-figs-koko-rika-ext07';
import { lessonFigsKokoRikaExt08 } from './lesson-figs-koko-rika-ext08';
import { lessonFigsKokoRikaExt09 } from './lesson-figs-koko-rika-ext09';
import { lessonFigsKokoRikaExt10 } from './lesson-figs-koko-rika-ext10';
import { lessonFigsKokoRikaExt11 } from './lesson-figs-koko-rika-ext11';
import { lessonFigsKokoRikaExt12 } from './lesson-figs-koko-rika-ext12';
import { lessonFigsKokoMathExt01 } from './lesson-figs-koko-math-ext01';
import { lessonFigsKokoMathExt02 } from './lesson-figs-koko-math-ext02';
import { lessonFigsKokoMathExt03 } from './lesson-figs-koko-math-ext03';
import { lessonFigsKokoMathExt04 } from './lesson-figs-koko-math-ext04';
import { lessonFigsKokoMathExt05 } from './lesson-figs-koko-math-ext05';
import { lessonFigsKokoMathExt06 } from './lesson-figs-koko-math-ext06';
import { lessonFigsKokoMathExt07 } from './lesson-figs-koko-math-ext07';
import { lessonFigsKokoMathExt08 } from './lesson-figs-koko-math-ext08';
import { lessonFigsKokoMathExt09 } from './lesson-figs-koko-math-ext09';
import { lessonFigsKokoMathExt10 } from './lesson-figs-koko-math-ext10';
import { lessonFigsKokoMathExt11 } from './lesson-figs-koko-math-ext11';
import { lessonFigsKokoMathExt12 } from './lesson-figs-koko-math-ext12';
import { lessonFigsKokoKokugoExt01 } from './lesson-figs-koko-kokugo-ext01';
import { lessonFigsKokoKokugoExt02 } from './lesson-figs-koko-kokugo-ext02';
import { lessonFigsKokoKokugoExt03 } from './lesson-figs-koko-kokugo-ext03';
import { lessonFigsKokoKokugoExt04 } from './lesson-figs-koko-kokugo-ext04';
import { lessonFigsKokoKokugoExt05 } from './lesson-figs-koko-kokugo-ext05';
import { lessonFigsKokoKokugoExt06 } from './lesson-figs-koko-kokugo-ext06';
import { lessonFigsKokoKokugoExt07 } from './lesson-figs-koko-kokugo-ext07';
import { lessonFigsKokoKokugoExt08 } from './lesson-figs-koko-kokugo-ext08';
import { lessonFigsKokoKokugoExt09 } from './lesson-figs-koko-kokugo-ext09';
import { lessonFigsKokoKokugoExt10 } from './lesson-figs-koko-kokugo-ext10';
import { lessonFigsKokoKokugoExt11 } from './lesson-figs-koko-kokugo-ext11';
import { lessonFigsKokoKokugoExt12 } from './lesson-figs-koko-kokugo-ext12';

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
  ...lessonFigsKokugoExt01,
  ...lessonFigsKokugoExt02,
  ...lessonFigsKokugoExt03,
  ...lessonFigsKokugoExt04,
  ...lessonFigsKokugoExt05,
  ...lessonFigsKokugoExt06,
  ...lessonFigsKokugoExt07,
  ...lessonFigsKokugoExt08,
  ...lessonFigsKokugoExt09,
  ...lessonFigsKokugoExt10,
  ...lessonFigsKokugoExt11,
  ...lessonFigsKokugoExt12,
  ...lessonFigsEigoExt01,
  ...lessonFigsEigoExt02,
  ...lessonFigsEigoExt03,
  ...lessonFigsEigoExt04,
  ...lessonFigsEigoExt05,
  ...lessonFigsEigoExt06,
  ...lessonFigsEigoExt07,
  ...lessonFigsEigoExt08,
  ...lessonFigsEigoExt09,
  ...lessonFigsEigoExt10,
  ...lessonFigsEigoExt11,
  ...lessonFigsEigoExt12,
  ...lessonFigsKokoMathExt01,
  ...lessonFigsKokoMathExt02,
  ...lessonFigsKokoMathExt03,
  ...lessonFigsKokoMathExt04,
  ...lessonFigsKokoMathExt05,
  ...lessonFigsKokoMathExt06,
  ...lessonFigsKokoMathExt07,
  ...lessonFigsKokoMathExt08,
  ...lessonFigsKokoMathExt09,
  ...lessonFigsKokoMathExt10,
  ...lessonFigsKokoMathExt11,
  ...lessonFigsKokoMathExt12,
  ...lessonFigsKokoKokugoExt01,
  ...lessonFigsKokoKokugoExt02,
  ...lessonFigsKokoKokugoExt03,
  ...lessonFigsKokoKokugoExt04,
  ...lessonFigsKokoKokugoExt05,
  ...lessonFigsKokoKokugoExt06,
  ...lessonFigsKokoKokugoExt07,
  ...lessonFigsKokoKokugoExt08,
  ...lessonFigsKokoKokugoExt09,
  ...lessonFigsKokoKokugoExt10,
  ...lessonFigsKokoKokugoExt11,
  ...lessonFigsKokoKokugoExt12,
  ...lessonFigsKokoRikaExt01,
  ...lessonFigsKokoRikaExt02,
  ...lessonFigsKokoRikaExt03,
  ...lessonFigsKokoRikaExt04,
  ...lessonFigsKokoRikaExt05,
  ...lessonFigsKokoRikaExt06,
  ...lessonFigsKokoRikaExt07,
  ...lessonFigsKokoRikaExt08,
  ...lessonFigsKokoRikaExt09,
  ...lessonFigsKokoRikaExt10,
  ...lessonFigsKokoRikaExt11,
  ...lessonFigsKokoRikaExt12,
};

export function getLessonFigure(figureId: string): Figure | null {
  return lessonFigures[figureId] ?? null;
}
