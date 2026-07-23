import { callFirebaseFunction } from './firebaseClient';
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
  /** 有料（英単語Pro等）かどうかのヒント。1日の回数上限に使う（無料3/有料15） */
  isPaid?: boolean;
}

interface ChatConversationResponse {
  ok: true;
  reply: string;
}

export async function chatEnglishConversation(
  params: ChatConversationRequest
): Promise<ChatConversationResponse> {
  return callFirebaseFunction<ChatConversationRequest, ChatConversationResponse>(
    'chatEnglishConversation',
    params
  );
}
