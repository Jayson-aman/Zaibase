// 単元の本文に付く重い部品（動く図解・マンガ・公式集の例題）を、単元ページを開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type LessonMediaModule = {
  getLessonFigure: typeof import('./lesson-figures').getLessonFigure;
  getMangaScript: typeof import('./manga-scripts').getMangaScript;
  getKoushikiQuestionsForFigure: typeof import('./koushiki-questions').getKoushikiQuestionsForFigure;
};

export const lessonMediaModule = createLazyModule<LessonMediaModule>(async () => {
  const [figs, manga, kq] = await Promise.all([
    import('./lesson-figures'),
    import('./manga-scripts'),
    import('./koushiki-questions'),
  ]);
  return {
    getLessonFigure: figs.getLessonFigure,
    getMangaScript: manga.getMangaScript,
    getKoushikiQuestionsForFigure: kq.getKoushikiQuestionsForFigure,
  };
});
