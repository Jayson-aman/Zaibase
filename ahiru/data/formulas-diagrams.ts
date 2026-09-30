// 公式集の各項目（label をキーにする）に、動く図解スライドをあとから取りつける。
// 項目本体のファイルを書きかえずに図解だけ足せる。label は買い切りの識別キーと同じ。
import type { DiagramFigure } from './figures';
import { DIAGRAMS_SANSU_4 } from './formulas-diagrams-sansu-4';
import { DIAGRAMS_RIKA_4 } from './formulas-diagrams-rika-4';
import { DIAGRAMS_RIKA_5 } from './formulas-diagrams-rika-5';
import { DIAGRAMS_SANSU_6 } from './formulas-diagrams-sansu-6';
import { DIAGRAMS_SHAKAI_5 } from './formulas-diagrams-shakai-5';
import { DIAGRAMS_RIKA_6 } from './formulas-diagrams-rika-6';
import { DIAGRAMS_SHAKAI_4 } from './formulas-diagrams-shakai-4';
import { DIAGRAMS_SANSU_5 } from './formulas-diagrams-sansu-5';
import { DIAGRAMS_KOKO_SHAKAI_A } from './formulas-diagrams-koko-shakai-a';
import { DIAGRAMS_KOKO_SHAKAI_C } from './formulas-diagrams-koko-shakai-c';
import { DIAGRAMS_KOKO_SUGAKU_A } from './formulas-diagrams-koko-sugaku-a';
import { DIAGRAMS_KOKO_SHAKAI_B } from './formulas-diagrams-koko-shakai-b';
import { DIAGRAMS_KOKO_RIKA_C } from './formulas-diagrams-koko-rika-c';
import { DIAGRAMS_KOKO_RIKA_A } from './formulas-diagrams-koko-rika-a';
import { DIAGRAMS_KOKO_SUGAKU_B } from './formulas-diagrams-koko-sugaku-b';
import { DIAGRAMS_KOKO_SUGAKU_C } from './formulas-diagrams-koko-sugaku-c';
import { DIAGRAMS_KOKO_RIKA_B } from './formulas-diagrams-koko-rika-b';
import { DIAGRAMS_EIGO_A } from './formulas-diagrams-eigo-a';
import { DIAGRAMS_KOKUGO_A } from './formulas-diagrams-kokugo-a';
import { DIAGRAMS_EIGO_KOKO_A } from './formulas-diagrams-eigo-koko-a';
import { DIAGRAMS_EIGO_B } from './formulas-diagrams-eigo-b';
import { DIAGRAMS_KOKO_KOKUGO_B } from './formulas-diagrams-koko-kokugo-b';
import { DIAGRAMS_EIGO_KOKO_B } from './formulas-diagrams-eigo-koko-b';
import { DIAGRAMS_KOKUGO_B } from './formulas-diagrams-kokugo-b';
import { DIAGRAMS_KOKO_KOKUGO_A } from './formulas-diagrams-koko-kokugo-a';
import { DIAGRAMS_KOKO_KOKUGO_OLD_C } from './formulas-diagrams-koko-kokugo-old-c';
import { DIAGRAMS_KOKO_KOKUGO_OLD_B } from './formulas-diagrams-koko-kokugo-old-b';
import { DIAGRAMS_KOKO_SUGAKU_OLD_B } from './formulas-diagrams-koko-sugaku-old-b';
import { DIAGRAMS_KOKO_SUGAKU_OLD_G } from './formulas-diagrams-koko-sugaku-old-g';
import { DIAGRAMS_KOKO_SUGAKU_OLD_A } from './formulas-diagrams-koko-sugaku-old-a';
import { DIAGRAMS_KOKO_KOKUGO_OLD_A } from './formulas-diagrams-koko-kokugo-old-a';
import { DIAGRAMS_KOKO_SUGAKU_OLD_C } from './formulas-diagrams-koko-sugaku-old-c';
import { DIAGRAMS_KOKO_SUGAKU_OLD_E } from './formulas-diagrams-koko-sugaku-old-e';
import { DIAGRAMS_KOKO_SUGAKU_OLD_F } from './formulas-diagrams-koko-sugaku-old-f';
import { DIAGRAMS_KOKO_SUGAKU_OLD_D } from './formulas-diagrams-koko-sugaku-old-d';
import { DIAGRAMS_KOKO_SHAKAI_OLD_F } from './formulas-diagrams-koko-shakai-old-f';
import { DIAGRAMS_KOKO_SHAKAI_OLD_E } from './formulas-diagrams-koko-shakai-old-e';
import { DIAGRAMS_KOKO_SHAKAI_OLD_B } from './formulas-diagrams-koko-shakai-old-b';
import { DIAGRAMS_KOKO_SHAKAI_OLD_C } from './formulas-diagrams-koko-shakai-old-c';
import { DIAGRAMS_KOKO_SHAKAI_OLD_D } from './formulas-diagrams-koko-shakai-old-d';
import { DIAGRAMS_KOKO_RIKA_OLD_F } from './formulas-diagrams-koko-rika-old-f';
import { DIAGRAMS_KOKO_RIKA_OLD_C } from './formulas-diagrams-koko-rika-old-c';
import { DIAGRAMS_KOKO_RIKA_OLD_D } from './formulas-diagrams-koko-rika-old-d';
import { DIAGRAMS_KOKO_RIKA_OLD_B } from './formulas-diagrams-koko-rika-old-b';
import { DIAGRAMS_KOKO_SHAKAI_OLD_A } from './formulas-diagrams-koko-shakai-old-a';
import { DIAGRAMS_KOKO_RIKA_OLD_A } from './formulas-diagrams-koko-rika-old-a';
import { DIAGRAMS_KOKO_RIKA_OLD_E } from './formulas-diagrams-koko-rika-old-e';
import { DIAGRAMS_KOKO_RIKA_OLD_G } from './formulas-diagrams-koko-rika-old-g';
import { DIAGRAMS_OLD_EIGOA } from './formulas-diagrams-old-eigoa';
import { DIAGRAMS_OLD_EIGOB } from './formulas-diagrams-old-eigob';
import { DIAGRAMS_OLD_EIGOD } from './formulas-diagrams-old-eigod';
import { DIAGRAMS_OLD_EIGOC } from './formulas-diagrams-old-eigoc';
import { DIAGRAMS_OLD_KOKUGOB } from './formulas-diagrams-old-kokugob';
import { DIAGRAMS_OLD_SANSUB } from './formulas-diagrams-old-sansub';
import { DIAGRAMS_OLD_SANSUF } from './formulas-diagrams-old-sansuf';
import { DIAGRAMS_OLD_SANSUE } from './formulas-diagrams-old-sansue';
import { DIAGRAMS_OLD_KOKUGOA } from './formulas-diagrams-old-kokugoa';
import { DIAGRAMS_OLD_SANSUA } from './formulas-diagrams-old-sansua';
import { DIAGRAMS_OLD_SANSUC } from './formulas-diagrams-old-sansuc';
import { DIAGRAMS_OLD_SANSUD } from './formulas-diagrams-old-sansud';
import { DIAGRAMS_OLD_SHAKAII } from './formulas-diagrams-old-shakaii';
import { DIAGRAMS_OLD_RIKAI } from './formulas-diagrams-old-rikai';
import { DIAGRAMS_OLD_SHAKAIB } from './formulas-diagrams-old-shakaib';
import { DIAGRAMS_OLD_SHAKAIC } from './formulas-diagrams-old-shakaic';
import { DIAGRAMS_OLD_RIKAA } from './formulas-diagrams-old-rikaa';
import { DIAGRAMS_OLD_SHAKAID } from './formulas-diagrams-old-shakaid';
import { DIAGRAMS_OLD_SHAKAIF } from './formulas-diagrams-old-shakaif';
import { DIAGRAMS_SHAKAI_6 } from './formulas-diagrams-shakai-6';

export const FORMULA_DIAGRAMS: Record<string, DiagramFigure> = {
  ...DIAGRAMS_SANSU_4,
  ...DIAGRAMS_RIKA_4,
  ...DIAGRAMS_RIKA_5,
  ...DIAGRAMS_SANSU_6,
  ...DIAGRAMS_SHAKAI_5,
  ...DIAGRAMS_RIKA_6,
  ...DIAGRAMS_SHAKAI_4,
  ...DIAGRAMS_SANSU_5,
  ...DIAGRAMS_KOKO_SHAKAI_A,
  ...DIAGRAMS_KOKO_SHAKAI_C,
  ...DIAGRAMS_KOKO_SUGAKU_A,
  ...DIAGRAMS_KOKO_SHAKAI_B,
  ...DIAGRAMS_KOKO_RIKA_C,
  ...DIAGRAMS_KOKO_RIKA_A,
  ...DIAGRAMS_KOKO_SUGAKU_B,
  ...DIAGRAMS_KOKO_SUGAKU_C,
  ...DIAGRAMS_KOKO_RIKA_B,
  ...DIAGRAMS_EIGO_A,
  ...DIAGRAMS_KOKUGO_A,
  ...DIAGRAMS_EIGO_KOKO_A,
  ...DIAGRAMS_EIGO_B,
  ...DIAGRAMS_KOKO_KOKUGO_B,
  ...DIAGRAMS_EIGO_KOKO_B,
  ...DIAGRAMS_KOKUGO_B,
  ...DIAGRAMS_KOKO_KOKUGO_A,
  ...DIAGRAMS_KOKO_KOKUGO_OLD_C,
  ...DIAGRAMS_KOKO_KOKUGO_OLD_B,
  ...DIAGRAMS_KOKO_SUGAKU_OLD_B,
  ...DIAGRAMS_KOKO_SUGAKU_OLD_G,
  ...DIAGRAMS_KOKO_SUGAKU_OLD_A,
  ...DIAGRAMS_KOKO_KOKUGO_OLD_A,
  ...DIAGRAMS_KOKO_SUGAKU_OLD_C,
  ...DIAGRAMS_KOKO_SUGAKU_OLD_E,
  ...DIAGRAMS_KOKO_SUGAKU_OLD_F,
  ...DIAGRAMS_KOKO_SUGAKU_OLD_D,
  ...DIAGRAMS_KOKO_SHAKAI_OLD_F,
  ...DIAGRAMS_KOKO_SHAKAI_OLD_E,
  ...DIAGRAMS_KOKO_SHAKAI_OLD_B,
  ...DIAGRAMS_KOKO_SHAKAI_OLD_C,
  ...DIAGRAMS_KOKO_SHAKAI_OLD_D,
  ...DIAGRAMS_KOKO_RIKA_OLD_F,
  ...DIAGRAMS_KOKO_RIKA_OLD_C,
  ...DIAGRAMS_KOKO_RIKA_OLD_D,
  ...DIAGRAMS_KOKO_RIKA_OLD_B,
  ...DIAGRAMS_KOKO_SHAKAI_OLD_A,
  ...DIAGRAMS_KOKO_RIKA_OLD_A,
  ...DIAGRAMS_KOKO_RIKA_OLD_E,
  ...DIAGRAMS_KOKO_RIKA_OLD_G,
  ...DIAGRAMS_OLD_EIGOA,
  ...DIAGRAMS_OLD_EIGOB,
  ...DIAGRAMS_OLD_EIGOD,
  ...DIAGRAMS_OLD_EIGOC,
  ...DIAGRAMS_OLD_KOKUGOB,
  ...DIAGRAMS_OLD_SANSUB,
  ...DIAGRAMS_OLD_SANSUF,
  ...DIAGRAMS_OLD_SANSUE,
  ...DIAGRAMS_OLD_KOKUGOA,
  ...DIAGRAMS_OLD_SANSUA,
  ...DIAGRAMS_OLD_SANSUC,
  ...DIAGRAMS_OLD_SANSUD,
  ...DIAGRAMS_OLD_SHAKAII,
  ...DIAGRAMS_OLD_RIKAI,
  ...DIAGRAMS_OLD_SHAKAIB,
  ...DIAGRAMS_OLD_SHAKAIC,
  ...DIAGRAMS_OLD_RIKAA,
  ...DIAGRAMS_OLD_SHAKAID,
  ...DIAGRAMS_OLD_SHAKAIF,
  ...DIAGRAMS_SHAKAI_6,
};
