import { questions, Question, SubjectKey } from '../data/questions';

// Mulberry32 — deterministic PRNG seeded with a 32-bit integer
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const result = [...arr];
  const rand = mulberry32(seed);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Returns today's set of MAX daily questions for the given subject.
// The pool is all advanced-difficulty questions (30 per subject).
// Day-of-week (0–6) determines the shuffle seed, giving 7 distinct orderings.
export function getDailyQuestions(subject: SubjectKey, count = 30): Question[] {
  const pool = questions.filter(
    (q) => q.subject === subject && q.difficulty === 'advanced',
  );
  const dayOfWeek = new Date().getDay(); // 0 (Sun) – 6 (Sat)
  // Incorporate subject into seed so each subject gets a different order
  const subjectSeed = subject.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const seed = dayOfWeek * 1000 + subjectSeed;
  const shuffled = seededShuffle(pool, seed);
  return shuffled.slice(0, count);
}

// Label for display (曜日)
const DAY_LABELS = ['日', '月', '火', '水', '木', '金', '土'];
export function getTodayDayLabel(): string {
  return DAY_LABELS[new Date().getDay()];
}
