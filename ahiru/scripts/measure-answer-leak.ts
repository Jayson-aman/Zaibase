// 問題側に出る図（解く前の画面）に、答えが書かれていないかを全数で測る。
//   npx esbuild scripts/measure-answer-leak.ts --bundle --platform=node --format=cjs --loader:.png=empty --outfile=/tmp/mal.cjs && node /tmp/mal.cjs
import { questions } from '../data/questions';
import { figures } from '../data/figures';

const norm = (s: string) => s.normalize('NFKC').replace(/[\s,、。．.]/g, '').replace(/[＝=]/g, '=').toLowerCase();
const SKIP = new Set(['steps', 'caption', 'description', 'id', 'kind', 'color', 'fill', 'buildSteps', 'note', 'notes']);
function texts(o: unknown, out: string[]) {
  if (o == null) return;
  if (typeof o === 'string') { out.push(o); return; }
  if (Array.isArray(o)) { o.forEach((x) => texts(x, out)); return; }
  if (typeof o === 'object') for (const [k, v] of Object.entries(o as object)) { if (!SKIP.has(k)) texts(v, out); }
}
let withFig = 0, withSteps = 0, withCaption = 0; const leaks: string[] = [];
const byFig = new Map<string, string>();
for (const q of questions as any[]) {
  const f = (figures as any)[q.id]; if (!f) continue; withFig++;
  if (f.steps?.length) withSteps++; if (f.caption) withCaption++;
  const ans = norm(String(q.answer ?? '')); if (ans.length < 2) continue;
  const t: string[] = []; texts(f, t);
  const hit = t.find((x) => { const n = norm(x); return n.includes(ans) || (ans.includes('=') && n.includes(ans.split('=').pop()!) && ans.split('=').pop()!.length >= 3); });
  if (hit) leaks.push(`${q.id}｜答え「${q.answer}」｜図の文字「${hit.replace(/\n/g, '／').slice(0, 30)}」`);
}
console.log(`図つき問題 ${withFig}、手順あり ${withSteps}、説明文あり ${withCaption}、図の文字に答えが入っている ${leaks.length}`);
leaks.slice(0, 400).forEach((x) => console.log(x));

if (process.argv[2] === 'dump') {
  for (const q of questions as any[]) {
    const f = (figures as any)[q.id]; if (!f) continue;
    if (!leaks.some((l) => l.startsWith(q.id + '｜'))) continue;
    const t: string[] = []; texts(f, t);
    console.log('■ ' + q.id + '｜' + String(q.question).replace(/\n/g, ' ').slice(0, 110) + '｜答え:' + q.answer + '\n   図:' + t.join(' ¦ ').slice(0, 260));
  }
}

// マスク後も残る漏れ
import { maskFigureForProblem } from '../utils/figure-mask';
{
  const left: string[] = [];
  for (const q of questions as any[]) {
    const f0 = (figures as any)[q.id]; if (!f0) continue;
    const f = maskFigureForProblem(f0, q);
    const ans = norm(String(q.answer ?? '')); if (ans.length < 2) continue;
    const t: string[] = []; texts(f, t);
    const hit = t.find((x) => norm(x).includes(ans));
    if (hit) left.push(`${q.id}｜答え「${q.answer}」｜図の文字「${hit.slice(0, 24)}」`);
  }
  console.log(`マスク後も答えが残る: ${left.length}`); left.forEach((x) => console.log(x));
}
