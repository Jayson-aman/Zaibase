import { figuresHonshikenSchool_tokyo_komaba_toho_B as F } from '../data/figures-honshiken-school-tokyo-komaba-toho-B';
import { honshikenSchool_tokyo_komaba_toho_B as Q } from '../data/honshiken_school_tokyo-komaba-toho_B';
import { lintDiagram } from './figlint';
let bad = 0, n = 0;
for (const [id, fig] of Object.entries(F)) {
  n++;
  const r = lintDiagram(id, fig as any); bad += r.length; r.forEach((x) => console.log('✗ ' + x));
  const d: any = fig; if (d.steps.length < 7) console.log('✗ 枚数不足 ' + id + ' ' + d.steps.length);
  if (!Q.find((q) => q.id === id)) console.log('✗ 問題なし ' + id);
  const q = Q.find((q) => q.id === id)!;
  if (!q.explanation) console.log('no expl', id);
}
for (const s of ['rika', 'shakai']) console.log(s, Q.filter((q) => q.subject === s).length, '問 図', Object.keys(F).filter((k) => k.includes('_' + s + '_')).length);
console.log(`図 ${n} 枚、指摘 ${bad} 件`);
