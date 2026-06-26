import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'takken_progress_v1';

export type QuestionRecord = {
  wrongCount: number;
  correctCount: number;
  lastAnswered: string; // ISO date
};

export type ProgressData = Record<string, QuestionRecord>;

export async function loadProgress(): Promise<ProgressData> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ProgressData) : {};
  } catch {
    return {};
  }
}

export async function recordAnswer(questionId: string, isCorrect: boolean): Promise<void> {
  try {
    const data = await loadProgress();
    const prev = data[questionId] ?? { wrongCount: 0, correctCount: 0, lastAnswered: '' };
    data[questionId] = {
      wrongCount: isCorrect ? prev.wrongCount : prev.wrongCount + 1,
      correctCount: isCorrect ? prev.correctCount + 1 : prev.correctCount,
      lastAnswered: new Date().toISOString(),
    };
    await AsyncStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
}

export async function resetProgress(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}

/** 苦手問題ID一覧（wrongCount >= threshold）を返す */
export async function getWeakQuestionIds(threshold = 1): Promise<string[]> {
  const data = await loadProgress();
  return Object.entries(data)
    .filter(([, r]) => r.wrongCount >= threshold)
    .sort((a, b) => b[1].wrongCount - a[1].wrongCount)
    .map(([id]) => id);
}

/** 科目別の正解率を返す */
export async function getSubjectStats(
  questionsBySubject: Record<string, { id: string }[]>,
): Promise<Record<string, { correct: number; total: number; weakCount: number }>> {
  const data = await loadProgress();
  const result: Record<string, { correct: number; total: number; weakCount: number }> = {};
  for (const [subject, qs] of Object.entries(questionsBySubject)) {
    let correct = 0;
    let total = 0;
    let weakCount = 0;
    for (const q of qs) {
      const r = data[q.id];
      if (!r) continue;
      total += r.wrongCount + r.correctCount;
      correct += r.correctCount;
      if (r.wrongCount > 0) weakCount++;
    }
    result[subject] = { correct, total, weakCount };
  }
  return result;
}
