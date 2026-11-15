import { callFirebaseFunction } from './firebaseClient';
import { getDeviceId } from '../utils/deviceId';

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
  /** 同じ端末で無料体験を何度も使われないようにするための端末ID（サーバーが数える） */
  deviceId?: string;
}

interface AskTutorResponse {
  ok: true;
  answer: string;
  turnCount: number;
  model: string;
}

export async function askTutor(params: AskTutorRequest): Promise<AskTutorResponse> {
  const deviceId = await getDeviceId();
  return callFirebaseFunction<AskTutorRequest, AskTutorResponse>('askTutor', { ...params, deviceId });
}

interface AddCreditsResponse { ok: true; creditsToAdd: number }

export async function addTutorCredits(creditsToAdd = 5): Promise<void> {
  await callFirebaseFunction<{ creditsToAdd: number }, AddCreditsResponse>(
    'addTutorCredits',
    { creditsToAdd }
  );
}
