import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'fp_progress_v1';

export type AnswerRecord = {
  questionId: string;
  correct: boolean;
  answeredAt: number;
};

export type ProgressData = {
  answers: Record<string, AnswerRecord[]>;
};

export async function loadProgress(): Promise<ProgressData> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (!raw) return { answers: {} };
    return JSON.parse(raw) as ProgressData;
  } catch {
    return { answers: {} };
  }
}

export async function recordAnswer(questionId: string, correct: boolean): Promise<void> {
  const data = await loadProgress();
  if (!data.answers[questionId]) data.answers[questionId] = [];
  data.answers[questionId].push({ questionId, correct, answeredAt: Date.now() });
  // 各問題の回答履歴は最大10件
  if (data.answers[questionId].length > 10) {
    data.answers[questionId] = data.answers[questionId].slice(-10);
  }
  await AsyncStorage.setItem(KEY, JSON.stringify(data));
}

export async function getWeakQuestionIds(): Promise<string[]> {
  const data = await loadProgress();
  const weak: string[] = [];
  for (const [id, records] of Object.entries(data.answers)) {
    const recent = records.slice(-5);
    const wrongCount = recent.filter((r) => !r.correct).length;
    if (wrongCount >= 2) weak.push(id);
  }
  return weak;
}

export async function getCategoryStats(): Promise<Record<string, { correct: number; total: number }>> {
  return {};
}

export async function resetProgress(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}
