import type { SubjectKey } from './questions';

export type LessonSection = {
  heading?: string;
  body: string;
  maxOnly?: boolean;
  level?: 'kiso' | 'oyo' | 'moshi' | 'nyushi';
  /** 動く図解のID（data/lesson-figures.ts に登録）。セクション本文の下に描画される */
  figureId?: string;
};

export type StudyPeriod =
  | '小4'
  | '小5前半'
  | '小5後半'
  | '小6前半'
  | '小6後半・直前'
  | '中1'
  | '中2'
  | '中3前半'
  | '中3夏'
  | '中3秋〜直前';

/** ⚠️ ひっかけ問題の例題（この単元で受験生がよく間違えるパターン） */
export type TrapExample = {
  /** 出題文 */
  question: string;
  /** ひっかかった場合に出しがちな誤答 */
  wrongAnswer: string;
  /** なぜその誤答に引っかかるのか（誤答の理由） */
  trapExplanation: string;
  /** 正しい答え */
  correctAnswer: string;
  /** 正しい解き方の説明 */
  correctExplanation: string;
};

export type Lesson = {
  id: string;
  subject: SubjectKey;
  title: string;
  description: string;
  /**
   * 🌱 導入（本題に入る前のつかみ）。
   * いきなり用語や公式から始めず、身近な場面や問いかけで「なぜこれを学ぶのか」を
   * つかませるための短い文章（2〜4文・100〜180字程度）。
   * 授業でいう「導入 → 展開 → まとめ」の導入にあたる。
   */
  intro?: string;
  sections: LessonSection[];
  order: number;
  examType?: 'chugaku' | 'koko';
  targetLevel?: 'kiso' | 'oyo' | 'moshi' | 'nyushi';
  studyPeriod?: StudyPeriod;
  /** 📌 覚える要点（この単元で必ず暗記すべきことの箇条書き） */
  keyPoints?: string[];
  /** ⚠️ ひっかけ問題の例題（1〜2問） */
  trapExamples?: TrapExample[];
};
