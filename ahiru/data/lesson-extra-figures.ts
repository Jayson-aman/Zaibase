// 教科書単元に「あとから」動く図解を足すための入口。単元ファイルを書きかえずに図解だけ足せる。
// 各バッチのファイル（lesson-xf-*.ts）は、次の2つを export する：
//   XF_..._FIGURES  : Record<figureId, DiagramFigure>
//   XF_..._SECTIONS : Record<'単元id#節の番号(0始まり)', figureId>
// ここで束ねて、lesson-figures.ts（図解の本体）と lessons.ts（節への取りつけ）が読む。
// 節に元から figureId がある場合は、元のものを優先する（lessons.ts 側で判定）。
import type { Figure } from './figures';

export const EXTRA_LESSON_FIGURES: Record<string, Figure> = {};

export const EXTRA_SECTION_FIGURES: Record<string, string> = {};
