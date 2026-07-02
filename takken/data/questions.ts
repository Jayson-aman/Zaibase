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
import { horeiQuestions2 } from './questions_horei_2';
import { horeiQuestions3 } from './questions_horei_3';
import { horeiQuestions4 } from './questions_horei_4';
import { zeiQuestions } from './questions_zei';
import { zeiQuestions2 } from './questions_zei_2';
import { zeiQuestions3 } from './questions_zei_3';
import { zeiQuestions4 } from './questions_zei_4';
import { zeiQuestions5 } from './questions_zei_5';
import { kenriQuestions } from './questions_kenri';
import { kenriQuestions2 } from './questions_kenri_2';
import { kenriQuestions3 } from './questions_kenri_3';
import { kenriQuestions4 } from './questions_kenri_4';
import { kenriQuestions5 } from './questions_kenri_5';
import { kenriQuestions6 } from './questions_kenri_6';
import { takkenhoQuestions } from './questions_takkenho';
import { takkenhoQuestions2 } from './questions_takkenho_2';
import { takkenhoQuestions2b } from './questions_takkenho_2b';
import { takkenhoQuestions3 } from './questions_takkenho_3';
import { takkenhoQuestions3b } from './questions_takkenho_3b';
import { takkenhoQuestions4 } from './questions_takkenho_4';
import { takkenhoQuestions6 } from './questions_takkenho_6';
import { takkenhoQuestions7 } from './questions_takkenho_7';
import { takkenhoQuestions8 } from './questions_takkenho_8';
import { takkenhoQuestionsPast1 } from './questions_takkenho_past1';
import { takkenhoQuestionsPast3 } from './questions_takkenho_past3';
import { horeiQuestionsPast } from './questions_horei_past';

export const QUESTIONS: TakkenQuestion[] = [
  ...horeiQuestions,
  ...horeiQuestions2,
  ...horeiQuestions3,
  ...horeiQuestions4,
  ...horeiQuestionsPast,
  ...zeiQuestions,
  ...zeiQuestions2,
  ...zeiQuestions3,
  ...zeiQuestions4,
  ...zeiQuestions5,
  ...kenriQuestions,
  ...kenriQuestions2,
  ...kenriQuestions3,
  ...kenriQuestions4,
  ...kenriQuestions5,
  ...kenriQuestions6,
  ...takkenhoQuestions,
  ...takkenhoQuestions2,
  ...takkenhoQuestions2b,
  ...takkenhoQuestions3,
  ...takkenhoQuestions3b,
  ...takkenhoQuestions4,
  ...takkenhoQuestions6,
  ...takkenhoQuestions7,
  ...takkenhoQuestions8,
  ...takkenhoQuestionsPast1,
  ...takkenhoQuestionsPast3,
];
