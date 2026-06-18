import type { SubjectKey } from './questions';

export type LessonSection = {
  heading?: string;
  body: string;
  maxOnly?: boolean;
};

export type Lesson = {
  id: string;
  subject: SubjectKey;
  title: string;
  description: string;
  sections: LessonSection[];
  order: number;
};
