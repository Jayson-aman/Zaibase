// 入試の日。受験種別ごとに、この端末に1つだけ持つ（志望校の日程は人によってちがうので、自分で決める）。
// 中身は日付だけ（個人情報は持たない）。ログイン／ログアウトで人ごとに分ける（services/auth.ts の USER_DATA_KEYS）。

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { isDateKey } from '../utils/examCountdown';
import type { ExamType } from './examType';

export const EXAM_DATE_KEYS: Record<ExamType, string> = {
  chugaku: '@ahiru_exam_date_chugaku',
  koko: '@ahiru_exam_date_koko',
};

export async function loadExamDate(examType: ExamType): Promise<string | null> {
  try {
    const v = await AsyncStorage.getItem(EXAM_DATE_KEYS[examType]);
    return isDateKey(v) ? v : null;
  } catch {
    return null;
  }
}

export async function saveExamDate(examType: ExamType, dateKey: string | null): Promise<void> {
  try {
    if (dateKey == null) await AsyncStorage.removeItem(EXAM_DATE_KEYS[examType]);
    else await AsyncStorage.setItem(EXAM_DATE_KEYS[examType], dateKey);
  } catch {
    // 保存できなくても、学習は続けられる
  }
}

/** 画面が表に出るたびに読み直す。loaded が false のあいだは何も出さない（一瞬ちらつくため）。 */
export function useExamDate(examType: ExamType): {
  date: string | null;
  loaded: boolean;
  set: (dateKey: string | null) => Promise<void>;
} {
  const [date, setDate] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  useFocusEffect(
    useCallback(() => {
      let alive = true;
      setLoaded(false);
      loadExamDate(examType).then((d) => {
        if (!alive) return;
        setDate(d);
        setLoaded(true);
      });
      return () => {
        alive = false;
      };
    }, [examType]),
  );
  const set = useCallback(
    async (dateKey: string | null) => {
      setDate(dateKey);
      await saveExamDate(examType, dateKey);
    },
    [examType],
  );
  return { date, loaded, set };
}
