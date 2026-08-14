import { useState, useEffect, useRef } from 'react';
import type { Question, SubjectKey } from '../data/questions-meta';

type QuestionsModule = {
  questions: Question[];
  questionsBySubject: Record<SubjectKey, Question[]>;
};

let cache: QuestionsModule | null = null;
const listeners: Array<(mod: QuestionsModule) => void> = [];

let inFlight: Promise<QuestionsModule> | null = null;

function loadQuestionsModule(): Promise<QuestionsModule> {
  if (cache) return Promise.resolve(cache);
  // 読み込みに失敗したら再試行できるようにする（失敗を握ったままだと
  // 問題が0件のまま二度と復帰しない）。
  if (inFlight) return inFlight;
  inFlight = import('../data/questions')
    .then((mod) => {
      cache = { questions: mod.questions, questionsBySubject: mod.questionsBySubject };
      listeners.forEach((fn) => fn(cache!));
      listeners.length = 0;
      inFlight = null;
      return cache;
    })
    .catch((err) => {
      inFlight = null;
      throw err;
    });
  return inFlight;
}

export function useSubjectQuestions(subject: SubjectKey) {
  const [questions, setQuestions] = useState<Question[]>(
    cache ? cache.questionsBySubject[subject] : [],
  );
  const [loading, setLoading] = useState(!cache);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (cache) {
      setQuestions(cache.questionsBySubject[subject]);
      setLoading(false);
      return;
    }
    loadQuestionsModule().then((mod) => {
      if (!mounted.current) return;
      setQuestions(mod.questionsBySubject[subject]);
      setLoading(false);
    });
    return () => { mounted.current = false; };
  }, [subject]);

  return { questions, loading };
}

export function useAllQuestions() {
  const [questions, setQuestions] = useState<Question[]>(cache?.questions ?? []);
  const [loading, setLoading] = useState(!cache);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (cache) {
      setQuestions(cache.questions);
      setLoading(false);
      return;
    }
    loadQuestionsModule().then((mod) => {
      if (!mounted.current) return;
      setQuestions(mod.questions);
      setLoading(false);
    });
    return () => { mounted.current = false; };
  }, []);

  return { questions, loading };
}

export function useQuestionsBySubjectMap() {
  const [bySubject, setBySubject] = useState<Record<SubjectKey, Question[]> | null>(
    cache?.questionsBySubject ?? null,
  );
  const [loading, setLoading] = useState(!cache);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (cache) {
      setBySubject(cache.questionsBySubject);
      setLoading(false);
      return;
    }
    loadQuestionsModule().then((mod) => {
      if (!mounted.current) return;
      setBySubject(mod.questionsBySubject);
      setLoading(false);
    });
    return () => { mounted.current = false; };
  }, []);

  return { bySubject, loading };
}
