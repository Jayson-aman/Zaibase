export type TakkenQuestion = {
  id: string;
  subject: '権利関係' | '法令上の制限' | '宅建業法' | '税・その他';
  chapterId: string;
  question: string;
  choices: string[];           // EXACTLY 4 items
  correctAnswer: number;       // 0–3
  correctExplanation: string;
  choiceExplanations: string[]; // EXACTLY 4 items, each starts with 【正解】or【誤り】
  difficulty: 'basic' | 'standard' | 'advanced';
  examYear?: number;
  isRecentChange?: boolean;
  keyPoint?: string;
};

import { horeiQuestions } from './questions_horei';
import { zeiQuestions } from './questions_zei';

export const QUESTIONS: TakkenQuestion[] = [
  ...horeiQuestions,
  ...zeiQuestions,
];
