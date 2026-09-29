// 公式集の各項目（label をキーにする）に、動く図解スライドをあとから取りつける。
// 項目本体のファイルを書きかえずに図解だけ足せる。label は買い切りの識別キーと同じ。
import type { DiagramFigure } from './figures';
import { DIAGRAMS_SANSU_4 } from './formulas-diagrams-sansu-4';

export const FORMULA_DIAGRAMS: Record<string, DiagramFigure> = {
  ...DIAGRAMS_SANSU_4,
};
