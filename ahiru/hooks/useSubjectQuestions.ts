import { useState, useEffect, useRef } from 'react';
import type { Question, SubjectKey } from '../data/questions-meta';
import { createLazyModule } from '../utils/lazyModule';

// 問題集は教科ごとのファイル（data/questions-gen/*.ts。scripts/gen-questions.ts が書き出す）に分けてあり、
// 使う教科だけを読みこむ。全教科が要るのは、他の教科の問題をまたいで探す画面（学校別・進捗・コーチ）だけ。
//
// `import()` の引数は文字列リテラルで書くこと（変数だと Metro がファイルを分けられない）。
const subjectModules: Record<SubjectKey, ReturnType<typeof createLazyModule<Question[]>>> = {
  sansu: createLazyModule(() => import('../data/questions-gen/sansu').then((m) => m.questions)),
  kokugo: createLazyModule(() => import('../data/questions-gen/kokugo').then((m) => m.questions)),
  rika: createLazyModule(() => import('../data/questions-gen/rika').then((m) => m.questions)),
  shakai: createLazyModule(() => import('../data/questions-gen/shakai').then((m) => m.questions)),
  eigo: createLazyModule(() => import('../data/questions-gen/eigo').then((m) => m.questions)),
};
const SUBJECT_KEYS = Object.keys(subjectModules) as SubjectKey[];

const EMPTY: Question[] = [];

/** 1教科の問題。enabled=false のあいだは読みこまない（まだ教科が決まっていない画面用）。 */
export function useSubjectQuestions(subject: SubjectKey, enabled = true) {
  const lazy = subjectModules[subject];
  const [questions, setQuestions] = useState<Question[]>(() => lazy.peek() ?? EMPTY);
  const [loading, setLoading] = useState(() => enabled && lazy.peek() == null);

  useEffect(() => {
    const cached = lazy.peek();
    if (cached) {
      setQuestions(cached);
      setLoading(false);
      return;
    }
    if (!enabled) {
      setQuestions(EMPTY);
      setLoading(false);
      return;
    }
    let alive = true;
    setLoading(true);
    lazy.load().then((qs) => {
      if (!alive) return;
      setQuestions(qs);
      setLoading(false);
    }).catch(() => {
      // 失敗したら、次に開いたとき再試行する（loading のままにして、0件の画面を出さない）
    });
    return () => { alive = false; };
  }, [lazy, enabled]);

  return { questions, loading };
}

type BySubject = Record<SubjectKey, Question[]>;

let allCache: { bySubject: BySubject; all: Question[] } | null = null;
let allInFlight: Promise<{ bySubject: BySubject; all: Question[] }> | null = null;

function loadAll() {
  if (allCache) return Promise.resolve(allCache);
  if (allInFlight) return allInFlight;
  allInFlight = Promise.all(SUBJECT_KEYS.map((k) => subjectModules[k].load()))
    .then((lists) => {
      const bySubject = {} as BySubject;
      SUBJECT_KEYS.forEach((k, i) => { bySubject[k] = lists[i]; });
      allCache = { bySubject, all: lists.flat() };
      allInFlight = null;
      return allCache;
    })
    .catch((e) => { allInFlight = null; throw e; });
  return allInFlight;
}

function useAll() {
  const [data, setData] = useState(allCache);
  const mounted = useRef(true);
  useEffect(() => {
    mounted.current = true;
    if (allCache) { setData(allCache); return; }
    loadAll().then((d) => { if (mounted.current) setData(d); }).catch(() => {});
    return () => { mounted.current = false; };
  }, []);
  return data;
}

/** 全教科の問題（学校別コースなど、教科をまたいで探す画面だけが使う） */
export function useAllQuestions() {
  const d = useAll();
  return { questions: d?.all ?? EMPTY, loading: d == null };
}

/** 教科ごとの問題（進捗・コーチの「まちがえた問題を探す」用） */
export function useQuestionsBySubjectMap() {
  const d = useAll();
  return { bySubject: d?.bySubject ?? null, loading: d == null };
}
