// 前提の計算（約分・通分・公約数・公倍数）を使う単元のうち、本文に出し方が無いものを数える。
// 使い方: npx esbuild scripts/measure-prereq.ts --bundle --platform=node --outfile=/tmp/measure-prereq.cjs --loader:.png=dataurl --loader:.jpg=dataurl --loader:.mp3=dataurl --loader:.ttf=dataurl && node /tmp/measure-prereq.cjs
// 差しこみ後（data/lesson-extra-sections.ts）の allLessons を読むので、「なし」は本文＋差しこみ節の両方に出し方が無い単元の数。
import { allLessons } from '../data/lessons';
const terms: Record<string, RegExp> = {
  公約数: /公約数/, 公倍数: /公倍数/, 約分: /約分/, 通分: /通分/, すだれ: /すだれ算/, 素因数分解: /素因数分解/,
};
const howto = /(おさらい：(最小公倍数|最大公約数|約分|通分)の|割り切れる数(で)?(順に)?わ|すだれ算|素因数分解|共通な約数を|大きい方から|両方を割り切れる)/;
const rows: Record<string, {use:number, explainsHere:number, ids:string[]}> = {};
for (const l of allLessons as any[]) {
  const text = [l.title, l.description, l.intro, ...(l.sections??[]).map((s:any)=>s.heading+'\n'+s.body)].join('\n');
  for (const [k, re] of Object.entries(terms)) {
    if (re.test(text)) {
      const o = (rows[k] ??= {use:0, explainsHere:0, ids:[]});
      o.use++;
      if (howto.test(text)) o.explainsHere++; else if (o.ids.length < 400) o.ids.push(`${l.id}|${l.examType??''}|${l.subject}|${l.title}`);
    }
  }
}
for (const [k,o] of Object.entries(rows)) console.log(k,'使う単元',o.use,'手順の説明あり',o.explainsHere,'なし',o.use-o.explainsHere);
require('fs').writeFileSync('/tmp/prereq_ids.txt', Object.entries(rows).map(([k,o])=>`## ${k}\n`+o.ids.join('\n')).join('\n'));
