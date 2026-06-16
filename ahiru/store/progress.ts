import AsyncStorage from '@react-native-async-storage/async-storage';

export type SubjectProgress = {
  correct: number;
  total: number;
  lastStudied?: string;
};

export type ProgressData = Record<string, SubjectProgress>;

const STORAGE_KEY = '@entrance_exam_progress';

export async function loadProgress(): Promise<ProgressData> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json == null) return {};
    return JSON.parse(json) as ProgressData;
  } catch {
    return {};
  }
}

export async function saveProgress(
  subject: string,
  correct: number,
  total: number
): Promise<void> {
  try {
    const existing = await loadProgress();
    const prev = existing[subject];
    existing[subject] = {
      correct: (prev?.correct ?? 0) + correct,
      total: (prev?.total ?? 0) + total,
      lastStudied: new Date().toISOString(),
    };
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // silently fail
  }
}

export async function resetProgress(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch {
    // silently fail
  }
}
