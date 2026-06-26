import type { FPQuestion } from './questions-meta';
import { fpLifeQuestions } from './fp_life_questions';
import { fpRiskQuestions } from './fp_risk_questions';
import { fpInvQuestions } from './fp_inv_questions';
import { fpTaxQuestions } from './fp_questions_2';
import { fpRealEstateQuestions } from './fp_real_estate_questions';
import { fpEstateQuestions } from './fp_estate_questions';

export const QUESTIONS: FPQuestion[] = [
  ...fpLifeQuestions,
  ...fpRiskQuestions,
  ...fpInvQuestions,
  ...fpTaxQuestions,
  ...fpRealEstateQuestions,
  ...fpEstateQuestions,
];
