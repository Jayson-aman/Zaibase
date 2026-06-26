import AsyncStorage from '@react-native-async-storage/async-storage';

const TRIAL_QUESTIONS_KEY = 'trial_questions_answered';
export const TRIAL_QUESTION_LIMIT = 30;

export async function getTrialQuestionsAnswered(): Promise<number> {
  const val = await AsyncStorage.getItem(TRIAL_QUESTIONS_KEY);
  return val ? parseInt(val, 10) : 0;
}

export async function incrementTrialQuestions(): Promise<number> {
  const count = await getTrialQuestionsAnswered();
  const next = count + 1;
  await AsyncStorage.setItem(TRIAL_QUESTIONS_KEY, String(next));
  return next;
}

export async function isTrialExpired(): Promise<boolean> {
  const count = await getTrialQuestionsAnswered();
  return count >= TRIAL_QUESTION_LIMIT;
}
