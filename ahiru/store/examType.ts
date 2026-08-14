// 受験種別（中学受験／高校受験）の保存。
//
// アプリを開いた最初に一度だけ選ばせ、以降はこの値で
// 問題・教科書・テスト対策の出し分けを行う。
// 選び直しはホームからいつでもできる。

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

export type ExamType = 'chugaku' | 'koko';

const KEY = '@ahiru/exam_type_v1';

export const examTypeLabel: Record<ExamType, string> = {
  chugaku: '中学受験',
  koko: '高校受験',
};

/** 中学受験は「算数」、高校受験は「数学」。同じ subject キーを共有しているため表示名だけ差しかえる。 */
export function subjectDisplayName(subjectName: string, examType: ExamType): string {
  if (examType === 'koko' && subjectName === '算数') return '数学';
  return subjectName;
}

export async function loadExamType(): Promise<ExamType | null> {
  try {
    const v = await AsyncStorage.getItem(KEY);
    return v === 'chugaku' || v === 'koko' ? v : null;
  } catch {
    return null;
  }
}

export async function saveExamType(v: ExamType): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY, v);
  } catch {
    // 保存に失敗しても選択自体は画面内で有効なので、致命的ではない
  }
}

/**
 * 受験種別を読み書きするフック。
 * `examType` が null のあいだは「まだ選んでいない」状態（入口で選ばせる）。
 */
export function useExamType() {
  const [examType, setExamTypeState] = useState<ExamType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    loadExamType().then((v) => {
      if (!alive) return;
      setExamTypeState(v);
      setLoading(false);
    });
    return () => {
      alive = false;
    };
  }, []);

  const setExamType = useCallback(async (v: ExamType) => {
    setExamTypeState(v);
    await saveExamType(v);
  }, []);

  return { examType, setExamType, loading };
}
