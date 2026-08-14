import AsyncStorage from '@react-native-async-storage/async-storage';

const TRIAL_QUESTIONS_KEY = 'trial_questions_answered';
export const TRIAL_QUESTION_LIMIT = 30;

export async function getTrialQuestionsAnswered(): Promise<number> {
  try {
    const val = await AsyncStorage.getItem(TRIAL_QUESTIONS_KEY);
    if (!val) return 0;
    const n = parseInt(val, 10);
    // 壊れた値が入っていると NaN になり、NaN >= 30 が常に false になって
    // 無料体験の上限が事実上無効化されてしまうため、0 に戻す。
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

export async function incrementTrialQuestions(): Promise<number> {
  const count = await getTrialQuestionsAnswered();
  const next = count + 1;
  try {
    await AsyncStorage.setItem(TRIAL_QUESTIONS_KEY, String(next));
  } catch {
    // 保存に失敗しても回数だけは返す
  }
  return next;
}

export async function isTrialExpired(): Promise<boolean> {
  const count = await getTrialQuestionsAnswered();
  return count >= TRIAL_QUESTION_LIMIT;
}
