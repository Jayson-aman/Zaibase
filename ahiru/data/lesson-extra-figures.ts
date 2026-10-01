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
import { XF_RC_FIGURES, XF_RC_SECTIONS } from './lesson-xf-rc';
import { XF_RD_FIGURES, XF_RD_SECTIONS } from './lesson-xf-rd';
import { XF_RE_FIGURES, XF_RE_SECTIONS } from './lesson-xf-re';
import { XF_RF_FIGURES, XF_RF_SECTIONS } from './lesson-xf-rf';
import { XF_RG_FIGURES, XF_RG_SECTIONS } from './lesson-xf-rg';
import { XF_RH_FIGURES, XF_RH_SECTIONS } from './lesson-xf-rh';
import { XF_RI_FIGURES, XF_RI_SECTIONS } from './lesson-xf-ri';
import { XF_HA_FIGURES, XF_HA_SECTIONS } from './lesson-xf-ha';
import { XF_HB_FIGURES, XF_HB_SECTIONS } from './lesson-xf-hb';
import { XF_HC_FIGURES, XF_HC_SECTIONS } from './lesson-xf-hc';
import { XF_HD_FIGURES, XF_HD_SECTIONS } from './lesson-xf-hd';
import { XF_HE_FIGURES, XF_HE_SECTIONS } from './lesson-xf-he';
import { XF_HF_FIGURES, XF_HF_SECTIONS } from './lesson-xf-hf';
import { XF_HG_FIGURES, XF_HG_SECTIONS } from './lesson-xf-hg';
import { XF_HH_FIGURES, XF_HH_SECTIONS } from './lesson-xf-hh';
import { XF_HI_FIGURES, XF_HI_SECTIONS } from './lesson-xf-hi';
import { XF_HJ_FIGURES, XF_HJ_SECTIONS } from './lesson-xf-hj';
import { XF_KSB_FIGURES, XF_KSB_SECTIONS } from './lesson-xf-ksb';
import { XF_KSI_FIGURES, XF_KSI_SECTIONS } from './lesson-xf-ksi';
import { XF_KRD_FIGURES, XF_KRD_SECTIONS } from './lesson-xf-krd';

export const EXTRA_LESSON_FIGURES: Record<string, Figure> = {
  ...XF_SA_FIGURES,
  ...XF_SB_FIGURES,
  ...XF_SC_FIGURES,
  ...XF_RA_FIGURES,
  ...XF_RB_FIGURES,
  ...XF_RC_FIGURES,
  ...XF_RD_FIGURES,
  ...XF_RE_FIGURES,
  ...XF_RF_FIGURES,
  ...XF_RG_FIGURES,
  ...XF_RH_FIGURES,
  ...XF_RI_FIGURES,
  ...XF_HA_FIGURES,
  ...XF_HB_FIGURES,
  ...XF_HC_FIGURES,
  ...XF_HD_FIGURES,
  ...XF_HE_FIGURES,
  ...XF_HF_FIGURES,
  ...XF_HG_FIGURES,
  ...XF_HH_FIGURES,
  ...XF_HI_FIGURES,
  ...XF_HJ_FIGURES,
  ...XF_KSB_FIGURES,
  ...XF_KSI_FIGURES,
  ...XF_KRD_FIGURES,
};

export const EXTRA_SECTION_FIGURES: Record<string, string> = {
  ...XF_SA_SECTIONS,
  ...XF_SB_SECTIONS,
  ...XF_SC_SECTIONS,
  ...XF_RA_SECTIONS,
  ...XF_RB_SECTIONS,
  ...XF_RC_SECTIONS,
  ...XF_RD_SECTIONS,
  ...XF_RE_SECTIONS,
  ...XF_RF_SECTIONS,
  ...XF_RG_SECTIONS,
  ...XF_RH_SECTIONS,
  ...XF_RI_SECTIONS,
  ...XF_HA_SECTIONS,
  ...XF_HB_SECTIONS,
  ...XF_HC_SECTIONS,
  ...XF_HD_SECTIONS,
  ...XF_HE_SECTIONS,
  ...XF_HF_SECTIONS,
  ...XF_HG_SECTIONS,
  ...XF_HH_SECTIONS,
  ...XF_HI_SECTIONS,
  ...XF_HJ_SECTIONS,
  ...XF_KSB_SECTIONS,
  ...XF_KSI_SECTIONS,
  ...XF_KRD_SECTIONS,
};
