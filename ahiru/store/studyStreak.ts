// 連続日数と、1日の目標。
//
// 「今日はやった」が目に見えると、あすも開く理由になる。日付は日本時間（JST）で数え、
// その日に答えた問題数だけを持つ（問題の中身は持たない）。
// この端末の記録として持ち、ログイン／ログアウトで人ごとに分ける（services/auth.ts の USER_DATA_KEYS）。

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { getTrialQuestionsAnswered } from './trial';

export const STUDY_DAYS_KEY = '@ahiru_study_days';
/** 1日の目標（答える問題数）。多すぎると「今日はもういいや」になるので、気軽にできる数にする。 */
export const DAILY_GOAL = 5;
// 連続日数の上限になるので、長く続けた人が頭打ちにならない日数を残す
const KEEP_DAYS = 400;
const JST_OFFSET_MS = 9 * 60 * 60 * 1000;

export type StudyDays = Record<string, number>;

/** 日本時間の日付（YYYY-MM-DD）。offsetDays で前後の日を返す。 */
export function jstDateKey(offsetDays = 0, now = Date.now()): string {
  return new Date(now + JST_OFFSET_MS + offsetDays * 86400000).toISOString().slice(0, 10);
}

export async function loadStudyDays(): Promise<StudyDays> {
  try {
    const json = await AsyncStorage.getItem(STUDY_DAYS_KEY);
    if (json == null) return {};
    const v = JSON.parse(json);
    return v && typeof v === 'object' ? (v as StudyDays) : {};
  } catch {
    return {};
  }
}

/** 問題に答えるたびに呼ぶ（正解・不正解・記述の見くらべのどれでも1問と数える）。 */
export async function recordStudy(count = 1): Promise<void> {
  try {
    const days = await loadStudyDays();
    const today = jstDateKey();
    days[today] = (days[today] ?? 0) + count;
    const keys = Object.keys(days).sort();
    for (const k of keys.slice(0, Math.max(0, keys.length - KEEP_DAYS))) delete days[k];
    await AsyncStorage.setItem(STUDY_DAYS_KEY, JSON.stringify(days));
  } catch {
    // 記録できなくても学習は続けられる
  }
}

export type StudyStats = {
  /** 連続日数。今日まだなら、きのうまでの連続を数える（きのう続けていれば、今日やるまで途切れない） */
  streak: number;
  todayCount: number;
  goalReached: boolean;
  /** これまでに1問でも答えたか（初回の案内を出すかの判定） */
  everStudied: boolean;
  /** 直近7日のうち、目標に届いた日（古い順。いちばん右が今日） */
  week: { key: string; count: number; done: boolean }[];
};

export function computeStats(days: StudyDays, now = Date.now(), legacyStudied = false): StudyStats {
  const todayCount = days[jstDateKey(0, now)] ?? 0;
  let streak = 0;
  // 今日やっていれば今日から、まだなら昨日から数える
  let offset = todayCount > 0 ? 0 : -1;
  while ((days[jstDateKey(offset, now)] ?? 0) > 0) {
    streak += 1;
    offset -= 1;
  }
  const week = [] as StudyStats['week'];
  for (let i = -6; i <= 0; i++) {
    const key = jstDateKey(i, now);
    const count = days[key] ?? 0;
    week.push({ key, count, done: count >= DAILY_GOAL });
  }
  return {
    streak,
    todayCount,
    goalReached: todayCount >= DAILY_GOAL,
    everStudied: legacyStudied || Object.values(days).some((n) => n > 0),
    week,
  };
}

/** 画面が表に出るたびに読み直す。loaded が false のあいだは何も出さない（一瞬ちらつくため）。 */
export function useStudyStats(): { stats: StudyStats; loaded: boolean; reload: () => Promise<void> } {
  const [stats, setStats] = useState<StudyStats>(() => computeStats({}));
  const [loaded, setLoaded] = useState(false);
  const reload = useCallback(async () => {
    const d = await loadStudyDays();
    // この機能より前に使っていた人は、連続日数の記録が空でも「はじめて」ではない。
    // これまでに答えた問題数（お試し回数）か学習記録が残っていれば、初回の案内は出さない。
    let legacy = false;
    if (Object.keys(d).length === 0) {
      try {
        const [answered, progress] = await Promise.all([
          getTrialQuestionsAnswered(),
          AsyncStorage.getItem('@entrance_exam_progress'),
        ]);
        legacy = answered > 0 || (progress != null && progress !== '{}');
      } catch {
        legacy = false;
      }
    }
    setStats(computeStats(d, Date.now(), legacy));
    setLoaded(true);
  }, []);
  useFocusEffect(
    useCallback(() => {
      reload();
    }, [reload]),
  );
  return { stats, loaded, reload };
}
