// 学校別コースの問題数（カードに「全◯問」と出すため）。
// 課金して買った人が「思ったより少ない」と感じないよう、数を最初に見せる。
//
// 全問題（約50MB）を読まずに出せるよう、数は scripts/gen-static-data.ts が
// data/school-counts.generated.ts に前もって書き出している（npm run gen:static）。
import { SCHOOL_COUNTS } from './school-counts.generated';

/** その学校の専用問題の数と、問題がある教科の数。無ければ 0。 */
export function schoolQuestionStats(courseKey: string): { total: number; subjects: number } {
  return SCHOOL_COUNTS[courseKey] ?? { total: 0, subjects: 0 };
}
