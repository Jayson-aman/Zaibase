// 定期テストの基本問題は、練習画面を開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type TeikiQuestionsModule = typeof import('./teiki-questions/index');
export const teikiQuestionsModule = createLazyModule<TeikiQuestionsModule>(() => import('./teiki-questions/index'));
