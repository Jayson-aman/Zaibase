import AsyncStorage from '@react-native-async-storage/async-storage';

const TRIAL_QUESTIONS_KEY = 'trial_questions_answered';
// 無料で解ける問題数は、1教科あたり10問まで（2026/10/17に、全体60問から変更）。
export const TRIAL_QUESTION_LIMIT = 10;
const subjectKeyOf = (subject: string) => `${TRIAL_QUESTIONS_KEY}_${subject}`;

export async function getTrialQuestionsAnswered(): Promise<number> {
  try {
    const val = await AsyncStorage.getItem(TRIAL_QUESTIONS_KEY);
    if (!val) return 0;
    const n = parseInt(val, 10);
    // 壊れた値が入っていると NaN になり、NaN >= 上限 が常に false になって
    // 無料体験の上限が事実上無効化されてしまうため、0 に戻す。
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

async function readCount(key: string): Promise<number> {
  try {
    const val = await AsyncStorage.getItem(key);
    if (!val) return 0;
    const n = parseInt(val, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

export async function getTrialQuestionsAnsweredFor(subject: string): Promise<number> {
  return readCount(subjectKeyOf(subject));
}

// 教科ごとの回数と、全体の回数（連続日数・初回判定が使う）の両方を増やす。
export async function incrementTrialQuestions(subject: string): Promise<number> {
  const total = await getTrialQuestionsAnswered();
  const bySubject = await getTrialQuestionsAnsweredFor(subject);
  try {
    await AsyncStorage.setItem(TRIAL_QUESTIONS_KEY, String(total + 1));
    await AsyncStorage.setItem(subjectKeyOf(subject), String(bySubject + 1));
  } catch {
    // 保存に失敗しても回数だけは返す
  }
  return bySubject + 1;
}

export async function isTrialExpired(subject: string): Promise<boolean> {
  const count = await getTrialQuestionsAnsweredFor(subject);
  return count >= TRIAL_QUESTION_LIMIT;
}
