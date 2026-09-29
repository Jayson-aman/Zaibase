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
  ...DIAGRAMS_SHAKAI_6,
};
