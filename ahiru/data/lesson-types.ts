import type { SubjectKey } from './questions';

export type LessonSection = {
  heading?: string;
  body: string;
  maxOnly?: boolean;
  level?: 'kiso' | 'oyo' | 'moshi' | 'nyushi';
};

export type Lesson = {
  id: string;
  subject: SubjectKey;
  title: string;
  description: string;
  sections: LessonSection[];
  order: number;
  examType?: 'chugaku' | 'koko';
  targetLevel?: 'kiso' | 'oyo' | 'moshi' | 'nyushi';
};
