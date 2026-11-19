// 入試までの日数の計算。画面にも保存にも依存しない（node でそのままテストできる）。
// 日付はすべて日本時間（JST）で数える。

const JST_OFFSET_MS = 9 * 60 * 60 * 1000;
const DAY_MS = 86400000;

/** 日本時間の今日の日付（YYYY-MM-DD） */
export function jstToday(now = Date.now()): string {
  return new Date(now + JST_OFFSET_MS).toISOString().slice(0, 10);
}

function utcMidnight(key: string): number {
  return Date.parse(`${key}T00:00:00Z`);
}

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

/** その年にその月日があるか（2月30日・うるう年でない年の2月29日などを弾く） */
function validDate(y: number, m: number, d: number): boolean {
  const t = new Date(Date.UTC(y, m - 1, d));
  return t.getUTCFullYear() === y && t.getUTCMonth() === m - 1 && t.getUTCDate() === d;
}

/**
 * 月と日だけから、「今日以降でいちばん近い」日付を返す。入力が正しくなければ null。
 * 今日と同じ日なら今日を返す（入試当日）。
 */
export function nextOccurrence(month: number, day: number, now = Date.now()): string | null {
  if (!Number.isInteger(month) || !Number.isInteger(day)) return null;
  if (month < 1 || month > 12 || day < 1 || day > 31) return null;
  const today = jstToday(now);
  const y0 = Number(today.slice(0, 4));
  for (let y = y0; y <= y0 + 4; y++) {
    if (!validDate(y, month, day)) continue;
    const key = `${y}-${pad(month)}-${pad(day)}`;
    if (key >= today) return key;
  }
  return null;
}

/** 今日から date まで何日か。今日なら 0、過ぎていれば負の数。 */
export function daysUntil(dateKey: string, now = Date.now()): number {
  return Math.round((utcMidnight(dateKey) - utcMidnight(jstToday(now))) / DAY_MS);
}

/** 保存してある値が日付として正しいか */
export function isDateKey(v: unknown): v is string {
  if (typeof v !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
  return validDate(Number(v.slice(0, 4)), Number(v.slice(5, 7)), Number(v.slice(8, 10)));
}

/** 「2月1日」 */
export function monthDayLabel(dateKey: string): string {
  return `${Number(dateKey.slice(5, 7))}月${Number(dateKey.slice(8, 10))}日`;
}

export type CountdownView =
  | { kind: 'days'; days: number; weeks: number; rest: number }
  | { kind: 'today' }
  | { kind: 'past' };

export function countdownView(dateKey: string, now = Date.now()): CountdownView {
  const n = daysUntil(dateKey, now);
  if (n < 0) return { kind: 'past' };
  if (n === 0) return { kind: 'today' };
  return { kind: 'days', days: n, weeks: Math.floor(n / 7), rest: n % 7 };
}
