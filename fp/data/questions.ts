import type { FPQuestion } from './questions-meta';
import { fpLifeQuestions, fpInvQuestions } from './fp_questions_1';
import { fpRiskQuestions } from './fp_risk_questions';
import { fpTaxQuestions } from './fp_questions_2';

export const QUESTIONS: FPQuestion[] = [
  ...fpLifeQuestions,
  ...fpRiskQuestions,
  ...fpInvQuestions,
  ...fpTaxQuestions,
];
