import AsyncStorage from '@react-native-async-storage/async-storage';
import type { FeedbackPayload } from '../services/feedback';

export type StoredFeedback = FeedbackPayload & { sentAt: string };

const STORAGE_KEY = '@ahiru_feedback_log';
const MAX_ENTRIES = 30;

// サーバーへ届いたかに関わらず、送信した内容を端末側にも控えとして残す。
// 回線が無い時にサーバーへの送信が失敗しても、生徒が「送ったのに消えた」と
// 感じないようにするための記録（一覧画面は今のところ無い）。
export async function saveFeedbackLocally(payload: FeedbackPayload): Promise<void> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    const existing: StoredFeedback[] = json != null ? JSON.parse(json) : [];
    const entry: StoredFeedback = { ...payload, sentAt: new Date().toISOString() };
    const updated = [...existing, entry].slice(-MAX_ENTRIES);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // silently fail
  }
}

export async function loadFeedbackLog(): Promise<StoredFeedback[]> {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    if (json == null) return [];
    return JSON.parse(json) as StoredFeedback[];
  } catch {
    return [];
  }
}
