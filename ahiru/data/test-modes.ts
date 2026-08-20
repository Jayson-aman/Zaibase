// テストの種類ごとの問題配分。
//
// 「入試対策」だけでなく、学校の定期テストや自治体の学力調査にも
// 使えるように、目的に応じて出題の難易度配分と問題の型を変える。
//
// 難易度は Question.difficulty（basic / standard / advanced）を使い、
// 活用型（記述式・複数小問）は isWritten / subQuestions の有無で判定する。

import type { Question } from './questions-meta';
import type { ExamType } from '../store/examType';

export type TestModeKey = 'term' | 'achievement' | 'level' | 'nyushi' | 'moshi';

export type LevelKey = 'basic' | 'standard' | 'advanced';

export const levelLabel: Record<LevelKey, string> = {
  basic: '基礎',
  standard: '標準',
  advanced: '応用',
};

export type TestMode = {
  key: TestModeKey;
  title: string;
  /** 一覧に出す短い説明 */
  summary: string;
  /** 何のためのモードかの補足（詳細画面用） */
  detail: string;
  emoji: string;
  color: string;
  /** 出題数の目安 */
  count: number;
  /** basic / standard / advanced の配分（合計が1になるようにする） */
  mix: Record<LevelKey, number>;
  /**
   * 記述式・複数小問（活用型）をどれくらい混ぜるか（0〜1）。
   * 全国学力・学習状況調査や自治体の学力調査は、知識だけでなく
   * 資料の読み取りや説明を求める問題の比率が高い。
   */
  writtenRatio: number;
  /** 定期テスト対策の問題（term1_2026_ で始まるID）だけに絞るか */
  termOnly?: boolean;
  /** 月例模試の問題（moshi_YYYY_MM_ で始まるID、当月分）だけに絞るか */
  moshiOnly?: boolean;
};

export const TEST_MODES: TestMode[] = [
  {
    key: 'term',
    title: '学期末テスト対策',
    summary: '学校の定期テストの範囲に合わせた出題',
    detail:
      '学校で習った範囲の確認用です。教科書の単元順にそって、基礎から応用まで満遍なく出します。' +
      'テスト前の総復習に向いています。',
    emoji: '📝',
    color: '#0EA5E9',
    count: 30,
    mix: { basic: 0.2, standard: 0.4, advanced: 0.4 },
    writtenRatio: 0.1,
    termOnly: true,
  },
  {
    key: 'achievement',
    title: '学力調査・到達度テスト対策',
    summary: '資料の読み取りと説明を求める「活用型」中心',
    detail:
      '全国学力・学習状況調査や、市町村・都道府県で行われる到達度テストの形式に合わせています。' +
      'これらのテストは知識をそのまま問うより、資料を読み取って考えたり、理由を説明したりする問題の' +
      '割合が高いのが特徴です。記述式・複数の小問がある問題を多めに出します。',
    emoji: '🧭',
    color: '#8B5CF6',
    count: 20,
    mix: { basic: 0.15, standard: 0.5, advanced: 0.35 },
    writtenRatio: 0.5,
  },
  {
    key: 'level',
    title: 'レベル別ドリル',
    summary: '基礎・標準・応用から自分で選ぶ',
    detail:
      '今の自分に合った難易度だけを集中的に解きます。' +
      '苦手な単元は基礎から、得意な単元は応用から、と使い分けてください。',
    emoji: '🎚️',
    color: '#10B981',
    count: 20,
    mix: { basic: 1, standard: 0, advanced: 0 }, // レベル選択で上書きする
    writtenRatio: 0,
  },
  {
    key: 'nyushi',
    title: '入試対策',
    summary: '実際の入試の難易度に寄せた出題',
    detail:
      '応用問題を中心に、入試本番の難易度で出します。' +
      '学校別コースがある場合は、そちらもあわせて使ってください。',
    emoji: '🎯',
    color: '#F59E0B',
    count: 25,
    mix: { basic: 0.05, standard: 0.35, advanced: 0.6 },
    writtenRatio: 0.2,
  },
  {
    key: 'moshi',
    title: '月例実力テスト',
    summary: '毎月更新、本番形式の総合模試',
    detail:
      '毎月更新される、本番に近い形式の実力テストです。学年が上がり学習が進むにつれて、' +
      '出題範囲も少しずつ広がっていきます。今の自分の実力を定期的にチェックするのに使ってください。',
    emoji: '📅',
    color: '#DC2626',
    count: 15,
    mix: { basic: 0.2, standard: 0.4, advanced: 0.4 },
    writtenRatio: 0.15,
    moshiOnly: true,
  },
];

export function getTestMode(key: TestModeKey): TestMode {
  return TEST_MODES.find((m) => m.key === key) ?? TEST_MODES[0];
}

/** 活用型（記述式・複数小問）かどうか */
export function isApplied(q: Question): boolean {
  return q.isWritten === true || (q.subQuestions != null && q.subQuestions.length > 0);
}

/** 定期テスト対策として作られた問題かどうか */
export function isTermQuestion(q: Question): boolean {
  return q.id.startsWith('term1_2026_');
}

/** 月例模試として作られた問題かどうか（moshi_2026_09_ のようなID） */
export function isMoshiQuestion(q: Question): boolean {
  return q.id.startsWith('moshi_');
}

function moshiPrefixOf(id: string): string | null {
  const m = id.match(/^moshi_(\d{4})_(\d{2})_/);
  return m ? `moshi_${m[1]}_${m[2]}_` : null;
}

/** 当月の月例模試IDプレフィックス（例: moshi_2026_09_） */
export function currentMoshiPrefix(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  return `moshi_${y}_${m}_`;
}

/**
 * 月例模試の出題プールから、当月号（無ければ配信済みで最新の号）を選ぶ。
 * こうしておくと、新しい月号のデータを追加するだけで自動的に切り替わり、
 * まだ当月分を配信できていない期間も「何も出ない」状態にならない。
 */
function pickMoshiPool(pool: Question[]): Question[] {
  const moshiQs = pool.filter(isMoshiQuestion);
  if (moshiQs.length === 0) return [];
  const current = currentMoshiPrefix();
  const exact = moshiQs.filter((q) => q.id.startsWith(current));
  if (exact.length > 0) return exact;
  const prefixes = Array.from(
    new Set(moshiQs.map((q) => moshiPrefixOf(q.id)).filter((p): p is string => p != null)),
  ).sort();
  const latest = prefixes[prefixes.length - 1];
  return latest ? moshiQs.filter((q) => q.id.startsWith(latest)) : [];
}

function shuffle<T>(arr: T[], seed: number): T[] {
  // 同じ日に同じ組み合わせが出ないよう、呼び出し側から seed を渡す
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) % 2147483648;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * テストの種類に応じて出題を組み立てる。
 *
 * @param pool       対象教科・受験種別で絞りこんだ問題
 * @param mode       テストの種類
 * @param seed       並びを変えるための種（Date.now() など）
 * @param fixedLevel 'level' モードで選んだ難易度
 */
export function buildTestSet(
  pool: Question[],
  mode: TestMode,
  seed: number,
  fixedLevel?: LevelKey,
): Question[] {
  let src = pool;
  if (mode.termOnly) {
    const termOnes = src.filter(isTermQuestion);
    // 定期テスト用の問題が足りない教科もあるので、無い場合は全体から出す
    if (termOnes.length >= Math.min(10, mode.count)) src = termOnes;
  }
  if (mode.moshiOnly) {
    const moshiOnes = pickMoshiPool(src);
    // 月例模試がまだ配信されていない教科は、通常の入試対策相当から出す
    if (moshiOnes.length >= Math.min(10, mode.count)) src = moshiOnes;
  }

  const mix: Record<LevelKey, number> =
    mode.key === 'level' && fixedLevel
      ? ({ basic: 0, standard: 0, advanced: 0, [fixedLevel]: 1 } as Record<LevelKey, number>)
      : mode.mix;

  const applied = shuffle(src.filter(isApplied), seed);
  const plain = shuffle(src.filter((q) => !isApplied(q)), seed + 7);

  const out: Question[] = [];
  const used = new Set<string>();

  // 活用型を先に必要数だけ確保する（数が少ないので取り合いになりやすい）
  const wantApplied = Math.round(mode.count * mode.writtenRatio);
  for (const q of applied) {
    if (out.length >= wantApplied) break;
    out.push(q);
    used.add(q.id);
  }

  // 残りを難易度の配分どおりに詰める
  const rest = mode.count - out.length;
  for (const lv of ['basic', 'standard', 'advanced'] as LevelKey[]) {
    const want = Math.round(rest * (mix[lv] ?? 0));
    let n = 0;
    for (const q of plain) {
      if (n >= want) break;
      if (used.has(q.id) || q.difficulty !== lv) continue;
      out.push(q);
      used.add(q.id);
      n++;
    }
  }

  // 端数や在庫不足で足りない分は、難易度を問わず補う
  for (const q of plain) {
    if (out.length >= mode.count) break;
    if (used.has(q.id)) continue;
    out.push(q);
    used.add(q.id);
  }

  return shuffle(out, seed + 13);
}
