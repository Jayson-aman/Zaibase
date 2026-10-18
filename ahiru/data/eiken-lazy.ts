// 英検の問題（約5MB）を、英検の画面を開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type EikenModule = typeof import('./eiken_questions');
export const eikenModule = createLazyModule<EikenModule>(() => import('./eiken_questions'));
