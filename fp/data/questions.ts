import type { FPQuestion } from './questions-meta';
import { fpLifeQuestions, fpRiskQuestions, fpInvQuestions } from './fp_questions_1';
import { fpTaxQuestions, fpRealEstateQuestions, fpEstateQuestions } from './fp_questions_2';

export const QUESTIONS: FPQuestion[] = [
  ...fpLifeQuestions,
  ...fpRiskQuestions,
  ...fpInvQuestions,
  ...fpTaxQuestions,
  ...fpRealEstateQuestions,
  ...fpEstateQuestions,
];
