import { callFirebaseFunction } from './firebaseClient';
import { saveFeedbackLocally } from '../store/feedback';
import type { SubjectKey } from '../data/questions-meta';

export type FeedbackCategory =
  | 'わかった！'
  | 'ちょっと難しい'
  | 'わからなかった'
  | 'もっと説明がほしい'
  | 'その他の意見・要望';

export const FEEDBACK_CATEGORIES: FeedbackCategory[] = [
  'わかった！',
  'ちょっと難しい',
  'わからなかった',
  'もっと説明がほしい',
  'その他の意見・要望',
];

export type FeedbackContext = {
  lessonId?: string;
  lessonTitle?: string;
  mangaId?: string;
};

export type FeedbackPayload = {
  category: FeedbackCategory;
  comment?: string;
  subject?: SubjectKey | 'all';
  examType?: 'chugaku' | 'koko';
  context?: FeedbackContext;
};

/**
 * 送信に失敗しても（回線が無い・上限に達したなど）例外は投げない。
 * 代わりに端末側へ保存し、呼び出し側は `sent` を見て文言を出し分ける。
 */
export async function sendFeedback(
  payload: FeedbackPayload
): Promise<{ sent: boolean }> {
  await saveFeedbackLocally(payload);
  try {
    await callFirebaseFunction<FeedbackPayload, { ok: boolean }>(
      'sendFeedback',
      payload
    );
    return { sent: true };
  } catch {
    return { sent: false };
  }
}
