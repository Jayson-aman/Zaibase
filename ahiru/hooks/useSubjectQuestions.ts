import { useState, useEffect, useRef } from 'react';
import type { Question, SubjectKey } from '../data/questions-meta';

type QuestionsModule = {
  questions: Question[];
  questionsBySubject: Record<SubjectKey, Question[]>;
};

let cache: QuestionsModule | null = null;
const listeners: Array<(mod: QuestionsModule) => void> = [];

function loadQuestionsModule(): Promise<QuestionsModule> {
  if (cache) return Promise.resolve(cache);
  return import('../data/questions').then((mod) => {
    cache = { questions: mod.questions, questionsBySubject: mod.questionsBySubject };
    listeners.forEach((fn) => fn(cache!));
    listeners.length = 0;
    return cache;
  });
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
