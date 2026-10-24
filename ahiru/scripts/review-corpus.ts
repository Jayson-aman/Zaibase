// 「おさらい」の当てはまり具合を軽く測るための、問題・単元の文章の書き出し（重い処理は、これだけ）。
// 使い方：npx esbuild scripts/review-corpus.ts --bundle --platform=node --format=cjs --loader:.png=empty --loader:.jpg=empty --outfile=/tmp/rc.cjs --log-level=error && node /tmp/rc.cjs
// 出力：/tmp/review-corpus.json（問題と単元の、科目・受験種別・本文）。measure-review.ts がこれを読む。
import { writeFileSync } from 'fs';
import { questions } from '../data/questions';
import { allLessons } from '../data/lessons';

const exam = (x: any) => (x.examType === 'koko' ? 'koko' : 'chugaku');
const out = {
  questions: (questions as any[]).map((x) => ({ s: x.subject, e: exam(x), question: x.question, answer: x.answer, explanation: x.explanation, hint: x.hint })),
  lessons: (allLessons as any[]).map((x) => ({
    s: x.subject, e: exam(x), title: x.title,
    text: [x.description, x.intro, ...(x.keyPoints ?? []), ...x.sections.map((s: any) => s.body)].filter(Boolean).join('\n'),
  })),
};
writeFileSync('/tmp/review-corpus.json', JSON.stringify(out));
console.log('✓ /tmp/review-corpus.json', out.questions.length, '問', out.lessons.length, '単元');
