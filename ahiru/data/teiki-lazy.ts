// 定期テスト向けの単元（図解を含むので大きい）は、その画面を開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type TeikiModule = typeof import('./teiki/index');
export const teikiModule = createLazyModule<TeikiModule>(() => import('./teiki/index'));
