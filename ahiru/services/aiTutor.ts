import { callFirebaseFunction } from './firebaseClient';

export type TutorRole = 'user' | 'assistant';
export interface TutorMessage {
  role: TutorRole;
  content: string;
}

interface AskTutorRequest {
  imageBase64?: string;
  questionText?: string;
  history: TutorMessage[];
  sessionId: string;
  isNewSession: boolean;
}

interface AskTutorResponse {
  ok: true;
  answer: string;
  turnCount: number;
  model: string;
}

export async function askTutor(params: AskTutorRequest): Promise<AskTutorResponse> {
  return callFirebaseFunction<AskTutorRequest, AskTutorResponse>('askTutor', params);
}

interface AddCreditsResponse { ok: true; creditsToAdd: number }

export async function addTutorCredits(creditsToAdd = 5): Promise<void> {
  await callFirebaseFunction<{ creditsToAdd: number }, AddCreditsResponse>(
    'addTutorCredits',
    { creditsToAdd }
  );
}
