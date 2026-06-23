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
import { zeiQuestions2 } from './questions_zei_2';
import { kenriQuestions } from './questions_kenri';
import { kenriQuestions2 } from './questions_kenri_2';
import { takkenhoQuestions } from './questions_takkenho';
import { takkenhoQuestions3 } from './questions_takkenho_3';
import { takkenhoQuestions4 } from './questions_takkenho_4';

export const QUESTIONS: TakkenQuestion[] = [
  ...horeiQuestions,
  ...zeiQuestions,
  ...zeiQuestions2,
  ...kenriQuestions,
  ...kenriQuestions2,
  ...takkenhoQuestions,
  ...takkenhoQuestions3,
  ...takkenhoQuestions4,
];
