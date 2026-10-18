// 公式集の本体（約15MB）を、公式集の画面を開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type FormulasModule = typeof import('./formulas');
export const formulasModule = createLazyModule<FormulasModule>(() => import('./formulas'));
