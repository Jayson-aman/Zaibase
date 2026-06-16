import { callFirebaseFunction } from './firebaseClient';

export type CoachItem = { question: string; answer: string };

type CoachRequest = { subjectName: string; items: CoachItem[] };
type CoachResponse = { ok: true; advice: string };

export async function getWeakPointCoaching(
  subjectName: string,
  items: CoachItem[]
): Promise<string> {
  const res = await callFirebaseFunction<CoachRequest, CoachResponse>(
    'getWeakPointCoaching',
    { subjectName, items }
  );
  return res.advice;
}
