// 問題に付く図形の登録簿（約8MB）を、図を出す画面を開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type FiguresModule = typeof import('./figures');
export const figuresModule = createLazyModule<FiguresModule>(() => import('./figures'));
