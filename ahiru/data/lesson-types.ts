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

export type Lesson = {
  id: string;
  subject: SubjectKey;
  title: string;
  description: string;
  sections: LessonSection[];
  order: number;
  examType?: 'chugaku' | 'koko';
  targetLevel?: 'kiso' | 'oyo' | 'moshi' | 'nyushi';
  studyPeriod?: StudyPeriod;
  /** 📌 覚える要点（この単元で必ず暗記すべきことの箇条書き） */
  keyPoints?: string[];
};
