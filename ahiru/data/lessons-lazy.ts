// 教科書の全単元（約40MB）を、教科書の一覧・単元ページを開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type LessonsModule = typeof import('./lessons');
export const lessonsModule = createLazyModule<LessonsModule>(() => import('./lessons'));
