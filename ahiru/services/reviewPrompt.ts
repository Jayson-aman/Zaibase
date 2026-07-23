import AsyncStorage from '@react-native-async-storage/async-storage';
import * as StoreReview from 'expo-store-review';

const GOOD_SCORE_RATIO = 0.8;
const MIN_QUESTIONS = 5;
const GOOD_SESSIONS_BEFORE_PROMPT = 3;
const MIN_DAYS_BETWEEN_PROMPTS = 90;

const STORAGE_KEY = '@entrance_exam_review_prompt';

type ReviewPromptState = {
  goodSessionCount: number;
  lastPromptedAt?: string;
};

async function loadState(): Promise<ReviewPromptState> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json == null) return { goodSessionCount: 0 };
    return JSON.parse(json) as ReviewPromptState;
  } catch {
    return { goodSessionCount: 0 };
  }
}

async function saveState(state: ReviewPromptState): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // silently fail
  }
}

/**
 * クイズ1回分の結果を渡すと、「良い結果が続いた」節目で
 * ネイティブのレビュー依頼ダイアログを表示する（多用しすぎないよう間隔を空ける）。
 */
export async function maybeRequestReview(score: number, total: number): Promise<void> {
  if (total < MIN_QUESTIONS) return;
  const isGoodScore = score / total >= GOOD_SCORE_RATIO;
  if (!isGoodScore) return;

  const state = await loadState();

  if (state.lastPromptedAt) {
    const daysSincePrompt =
      (Date.now() - new Date(state.lastPromptedAt).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSincePrompt < MIN_DAYS_BETWEEN_PROMPTS) {
      // 前回の依頼から日が浅い場合は、カウントだけ据え置いて何もしない
      return;
    }
  }

  const nextCount = state.goodSessionCount + 1;

  if (nextCount >= GOOD_SESSIONS_BEFORE_PROMPT) {
    await saveState({ goodSessionCount: 0, lastPromptedAt: new Date().toISOString() });
    try {
      const available = await StoreReview.isAvailableAsync();
      if (available) {
        await StoreReview.requestReview();
      }
    } catch {
      // レビュー依頼に失敗しても学習体験には影響させない
    }
  } else {
    await saveState({ ...state, goodSessionCount: nextCount });
  }
}
