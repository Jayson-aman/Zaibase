// 英単語帳（約3MB）を、英単語の画面を開いたときにだけ読みこむ。
import { createLazyModule } from '../utils/lazyModule';

export type VocabModule = {
  vocabWords: typeof import('./vocab_words').vocabWords;
  vocabUsageNotes: typeof import('./vocab-usage-notes').vocabUsageNotes;
};

export const vocabModule = createLazyModule<VocabModule>(async () => {
  const [w, n] = await Promise.all([import('./vocab_words'), import('./vocab-usage-notes')]);
  return { vocabWords: w.vocabWords, vocabUsageNotes: n.vocabUsageNotes };
});
