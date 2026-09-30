// 解説の差しかえ表。id → 新しい解説。
// 生成元: 英語の入試傾向問題の書き直し（scripts の生成手順で out_*.json から作る）。
import { EIGO_SCHOOL_EXPLANATIONS } from './explanations-eigo-school';

export const EXPLANATION_OVERRIDES: Record<string, string> = {
  ...EIGO_SCHOOL_EXPLANATIONS,
};
