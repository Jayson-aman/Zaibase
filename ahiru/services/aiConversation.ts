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
