import type { FPQuestion } from './questions-meta';
import { fpLifeQuestions } from './fp_life_questions';
import { fpRiskQuestions } from './fp_risk_questions';
import { fpInvQuestions } from './fp_inv_questions';
import { fpTaxQuestions } from './fp_questions_2';

export const QUESTIONS: FPQuestion[] = [
  ...fpLifeQuestions,
  ...fpRiskQuestions,
  ...fpInvQuestions,
  ...fpTaxQuestions,
];
