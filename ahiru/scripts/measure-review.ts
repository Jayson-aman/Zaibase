// 「おさらい」が、どれだけの問題・単元に出ているかを数える（科目×受験種別）。
//   specific＝その問題・単元に合う個別のおさらいが出た／fallback＝合うものが無く「基礎の見直し」だけ出た／none＝何も出ない
// 使い方（先に review-corpus.ts で /tmp/review-corpus.json を作る）：
//   npx esbuild scripts/measure-review.ts --bundle --platform=node --format=cjs --loader:.png=empty --loader:.jpg=empty --outfile=/tmp/mr.cjs --log-level=error
//   node /tmp/mr.cjs                       … 全教科の表
//   SUBJECT=rika node /tmp/mr.cjs          … 1教科だけ
//   SUBJECT=rika SAMPLE=30 node /tmp/mr.cjs … 出たおさらいの例を30件ずつ（本当に関係があるかを目で確かめる）
import { readFileSync } from 'fs';
import { reviewBlocksFor } from '../data/review-blocks';

// 重い読みこみを避けるため、問題・単元の文章は /tmp/review-corpus.json から読む（無ければ scripts/review-corpus.ts で作る）
const corpus = JSON.parse(readFileSync('/tmp/review-corpus.json', 'utf8')) as { questions: any[]; lessons: any[] };
const questions = corpus.questions.map((x) => ({ subject: x.s, examType: x.e, question: x.question, answer: x.answer, explanation: x.explanation, hint: x.hint }));
const allLessons = corpus.lessons.map((x) => ({ subject: x.s, examType: x.e, title: x.title, text: x.text }));

const ONLY = process.env.SUBJECT; const SAMPLE = Number(process.env.SAMPLE ?? 0);
type Row = { n: number; specific: number; fallback: number; none: number };
const q: Record<string, Row> = {}; const l: Record<string, Row> = {};
const samples = { q: [] as string[], l: [] as string[] };
const bump = (m: Record<string, Row>, k: string, blocks: { fallback?: boolean }[]) => {
  const r = (m[k] ??= { n: 0, specific: 0, fallback: 0, none: 0 }); r.n++;
  if (blocks.length === 0) r.none++; else if (blocks.every((b) => b.fallback)) r.fallback++; else r.specific++;
};
let qi = 0, li = 0;
for (const x of questions as any[]) {
  if (ONLY && x.subject !== ONLY) continue;
  const b = reviewBlocksFor(x, 2); bump(q, `${x.subject}|${x.examType === 'koko' ? 'koko' : 'chugaku'}`, b);
  if (SAMPLE && qi++ % Math.max(1, Math.floor(1500 / SAMPLE)) === 0 && samples.q.length < SAMPLE) samples.q.push(`[${x.examType === 'koko' ? '高' : '中'}] ${String(x.question).replace(/\n/g, ' ').slice(0, 70)} → ${b.map((y) => y.label + (y.fallback ? '(基礎)' : '')).join(' / ') || '（なし）'}`);
}
for (const x of allLessons as any[]) {
  if (ONLY && x.subject !== ONLY) continue;
  const b = reviewBlocksFor({ subject: x.subject, examType: x.examType, question: x.title, explanation: x.text }, 2);
  bump(l, `${x.subject}|${x.examType === 'koko' ? 'koko' : 'chugaku'}`, b);
  if (SAMPLE && li++ % Math.max(1, Math.floor(1100 / SAMPLE)) === 0 && samples.l.length < SAMPLE) samples.l.push(`[${x.examType === 'koko' ? '高' : '中'}] ${x.title} → ${b.map((y) => y.label + (y.fallback ? '(基礎)' : '')).join(' / ') || '（なし）'}`);
}
const show = (name: string, m: Record<string, Row>) => {
  console.log(`\n■ ${name}`);
  const T: Row = { n: 0, specific: 0, fallback: 0, none: 0 };
  for (const k of Object.keys(m).sort()) { const r = m[k]; for (const f of ['n', 'specific', 'fallback', 'none'] as const) T[f] += r[f];
    console.log(`  ${k.padEnd(16)} 合う ${String(r.specific).padStart(5)} (${(100 * r.specific / r.n).toFixed(0).padStart(3)}%)  基礎のみ ${String(r.fallback).padStart(5)}  なし ${String(r.none).padStart(5)}  / ${r.n}`); }
  console.log(`  ${'合計'.padEnd(14)} 合う ${String(T.specific).padStart(5)} (${(100 * T.specific / T.n).toFixed(0).padStart(3)}%)  基礎のみ ${String(T.fallback).padStart(5)}  なし ${String(T.none).padStart(5)}  / ${T.n}`);
};
show('問題集', q); show('教科書', l);
if (SAMPLE) { console.log('\n── 問題の例 ──'); samples.q.forEach((s) => console.log(s)); console.log('\n── 単元の例 ──'); samples.l.forEach((s) => console.log(s)); }
