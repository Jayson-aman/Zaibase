import type { Question, SubjectKey } from '../data/questions-meta';
import type { CourseKey, ExamType } from '../data/courses';

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

// Days since Unix epoch (UTC) — used for stable 5-day cycle
function daysSinceEpoch(): number {
  return Math.floor(Date.now() / 86400000);
}

// 5-day rotation index (0–4). Resets each week based on ISO week number.
export function getDailyIndex(): number {
  return daysSinceEpoch() % 5;
}

// Weekly seed offset so question order shifts each week
function weeklyOffset(): number {
  return Math.floor(daysSinceEpoch() / 7);
}

// Returns today's set of MAX daily questions for the given subject.
// Pool: advanced-difficulty questions filtered by course and examType.
// A 5-day cycle (index 0–4) determines the shuffle seed.
export function getDailyQuestions(
  allQuestions: Question[],
  subject: SubjectKey,
  count = 30,
  course: CourseKey = 'general',
  examType: ExamType = 'chugaku',
): Question[] {
  let pool = allQuestions.filter((q) => q.subject === subject && q.difficulty === 'advanced');

  // Filter by examType
  pool = pool.filter((q) => (q.examType ?? 'chugaku') === examType);

  // Filter by course
  if (course === 'general') {
    pool = pool.filter((q) => !q.course || q.course === 'general');
  } else {
    const coursePool = pool.filter((q) => q.course === course);
    if (coursePool.length > 0) pool = coursePool;
  }

  const dayIndex = getDailyIndex(); // 0–4
  const subjectSeed = subject.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const courseSeed = course.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  // Weekly offset ensures different question order each week
  const seed = dayIndex * 1000 + subjectSeed + courseSeed + weeklyOffset() * 97;
  const shuffled = seededShuffle(pool, seed);
  return shuffled.slice(0, count);
}

// Day label for 5-day cycle
const CYCLE_LABELS = ['1日目', '2日目', '3日目', '4日目', '5日目'];
export function getTodayDayLabel(): string {
  return CYCLE_LABELS[getDailyIndex()];
}

// Full label including week number
export function getTodayLabel(): string {
  const week = Math.floor(daysSinceEpoch() / 7);
  return `第${week % 52 + 1}週 ${getTodayDayLabel()}`;
}
