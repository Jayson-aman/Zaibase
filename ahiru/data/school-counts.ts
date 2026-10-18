// 学校別コースの問題数（カードに「全◯問」と出すため）。
// 課金して買った人が「思ったより少ない」と感じないよう、数を最初に見せる。
import { questions } from './questions';

let cache: Map<string, { total: number; subjects: number }> | null = null;

function build() {
  const m = new Map<string, { total: number; subjects: number }>();
  const seen = new Map<string, Set<string>>();
  for (const q of questions) {
    const c = q.course;
    if (!c || c === 'general') continue;
    const cur = m.get(c) ?? { total: 0, subjects: 0 };
    cur.total += 1;
    const set = seen.get(c) ?? new Set<string>();
    set.add(q.subject);
    seen.set(c, set);
    cur.subjects = set.size;
    m.set(c, cur);
  }
  return m;
}

/** その学校の専用問題の数と、問題がある教科の数。無ければ 0。 */
export function schoolQuestionStats(courseKey: string): { total: number; subjects: number } {
  cache ??= build();
  return cache.get(courseKey) ?? { total: 0, subjects: 0 };
}
