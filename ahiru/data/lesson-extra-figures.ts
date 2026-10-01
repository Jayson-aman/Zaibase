// 教科書単元に「あとから」動く図解を足すための入口。単元ファイルを書きかえずに図解だけ足せる。
// 各バッチのファイル（lesson-xf-*.ts）は、次の2つを export する：
//   XF_..._FIGURES  : Record<figureId, DiagramFigure>
//   XF_..._SECTIONS : Record<'単元id#節の番号(0始まり)', figureId>
// ここで束ねて、lesson-figures.ts（図解の本体）と lessons.ts（節への取りつけ）が読む。
// 節に元から figureId がある場合は、元のものを優先する（lessons.ts 側で判定）。
import type { Figure } from './figures';
import { XF_SA_FIGURES, XF_SA_SECTIONS } from './lesson-xf-sa';
import { XF_SB_FIGURES, XF_SB_SECTIONS } from './lesson-xf-sb';
import { XF_SC_FIGURES, XF_SC_SECTIONS } from './lesson-xf-sc';
import { XF_RA_FIGURES, XF_RA_SECTIONS } from './lesson-xf-ra';
import { XF_RB_FIGURES, XF_RB_SECTIONS } from './lesson-xf-rb';
import { XF_HA_FIGURES, XF_HA_SECTIONS } from './lesson-xf-ha';
import { XF_HB_FIGURES, XF_HB_SECTIONS } from './lesson-xf-hb';

export const EXTRA_LESSON_FIGURES: Record<string, Figure> = {
  ...XF_SA_FIGURES,
  ...XF_SB_FIGURES,
  ...XF_SC_FIGURES,
  ...XF_RA_FIGURES,
  ...XF_RB_FIGURES,
  ...XF_HA_FIGURES,
  ...XF_HB_FIGURES,
};

export const EXTRA_SECTION_FIGURES: Record<string, string> = {
  ...XF_SA_SECTIONS,
  ...XF_SB_SECTIONS,
  ...XF_SC_SECTIONS,
  ...XF_RA_SECTIONS,
  ...XF_RB_SECTIONS,
  ...XF_HA_SECTIONS,
  ...XF_HB_SECTIONS,
};
