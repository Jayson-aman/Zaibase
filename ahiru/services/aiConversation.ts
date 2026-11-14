import { callFirebaseFunction } from './firebaseClient';
import { getDeviceId } from '../utils/deviceId';
import type { VocabLevel } from '../data/vocab-meta';

export type ConversationRole = 'user' | 'assistant';
export interface ConversationMessage {
  role: ConversationRole;
  content: string;
}

interface ChatConversationRequest {
  message: string;
  history: ConversationMessage[];
  level: VocabLevel;
  scenario?: string;
  /** 同じ端末で無料枠を何度も使われないようにするための端末ID（サーバーが数える） */
  deviceId?: string;
  // 有料判定はサーバーが RevenueCat に直接問い合わせて行う（クライアントは送らない）。
}

interface ChatConversationResponse {
  ok: true;
  reply: string;
}

export async function chatEnglishConversation(
  params: ChatConversationRequest
): Promise<ChatConversationResponse> {
  const deviceId = await getDeviceId();
  return callFirebaseFunction<ChatConversationRequest, ChatConversationResponse>(
    'chatEnglishConversation',
    { ...params, deviceId }
  );
}
