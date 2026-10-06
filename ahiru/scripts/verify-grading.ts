// 採点（utils/grading.ts）を全問で確かめる。直したあと、必ずこれを流す。
//   npx esbuild scripts/verify-grading.ts --bundle --platform=node --format=cjs --loader:.png=empty --outfile=/tmp/vg.cjs && node /tmp/vg.cjs
// ① 模範解答をそのまま入れたら、必ず正解になるか
// ② 書き方のちがい（全角・空白・単位の前の空白・桁区切り・読点とコンマ・末尾の記号）でも正解になるか
// ③ まちがい（数を1ずらす・帯分数のけたをつなげる・となりの問題の答え）が、正解にならないか
import { questions } from '../data/questions';
import { judge, answerMode } from '../utils/grading';

const qs = (questions as any[]).filter((q) => answerMode(q) === 'input');
let bad1: string[] = [], bad2: string[] = [], bad3: string[] = [];
const toFull = (s: string) => s.replace(/[0-9]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0xfee0));
const withThousands = (s: string) => s.replace(/(?<![0-9.,])([0-9]{4,})(?![0-9])/g, (m) => m.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
for (const q of qs) {
  const a = String(q.answer);
  if (judge(a, a) !== 'correct') bad1.push(q.id + '「' + a.slice(0, 20) + '」');
  const variants: [string, string][] = [
    ['全角の数字', toFull(a)],
    ['末尾に句点', a + '。'],
    ['数と単位の間に空白', /^[0-9.,]+(?:円|個|人|cm|m|kg|g|分|秒|時間|度|%|通り|本|枚|回)$/.test(a) ? a.replace(/([0-9])([^0-9.,])/, '$1 $2') : a],
    ['桁区切り', withThousands(a)],
    ['読点→コンマ', a.replace(/、/g, ',')],
    ['読点→空白', a.replace(/、/g, ' ')],
  ];
  for (const [name, v] of variants) { if (v !== a && judge(v, a) !== 'correct') bad2.push(`${name}: ${q.id}「${a.slice(0, 16)}」←「${v.slice(0, 16)}」`); }
}
// ③ まちがい：数だけの答えを +1 / ×10 にしたもの、帯分数のけたつなぎ、となりの問題の答え
for (let i = 0; i < qs.length; i++) {
  const a = String(qs[i].answer).normalize('NFKC').trim();
  const m = a.match(/^(-?[0-9]+)(\.[0-9]+)?$/);
  if (m) { const v = Number(a); for (const w of [v + 1, v * 10]) { if (String(w) !== a && judge(String(w), a) === 'correct') bad3.push(`数ずらし: ${qs[i].id} ${a}→${w}`); } }
  const mix = a.match(/^([0-9]+)と([0-9]+)\/([0-9]+)$/);
  if (mix) { const wrong = mix[1] + mix[2] + '/' + mix[3]; if (judge(wrong, a) === 'correct') bad3.push(`帯分数のけたつなぎ: ${qs[i].id} ${a}←${wrong}`); }
  const nb = String(qs[(i + 1) % qs.length].answer);
  if (nb !== String(qs[i].answer) && judge(nb, String(qs[i].answer)) === 'correct' && nb.length < 30) bad3.push(`となりの答え: ${qs[i].id}「${String(qs[i].answer).slice(0, 14)}」←「${nb.slice(0, 14)}」`);
}
// 手で作った重要ケース
const cases: [string, string, string][] = [
  ['1と7/12', '19/12', 'correct'], ['1 7/12', '19/12', 'correct'], ['19/12', '1と7/12', 'correct'], ['17/12', '1と7/12', 'wrong'],
  ['23/4', '2と3/4', 'wrong'], ['2と3/4', '11/4', 'correct'], ['1 3/4', '7/4', 'correct'], ['1と1/2', '1.5', 'correct'],
  ['20％', '20%', 'correct'], ['20%', '20％', 'correct'], ['1,2,3', '1、2、3', 'correct'], ['1 2 3', '1、2、3', 'correct'], ['123', '1,2,3', 'wrong'], ['12,3', '1,2,3', 'wrong'],
  ['1,000円', '1000円', 'correct'], ['1000', '1,000円', 'correct'], ['個', '6（個）', 'wrong'], ['cm', '10（cm）', 'wrong'], ['6', '6（個）', 'correct'], ['6個', '6（個）', 'correct'],
  ['50°', '50cm²', 'wrong'], ['50', '50cm²', 'correct'], ['50cm2', '50cm²', 'correct'],
];
const badC = cases.filter(([i, a, w]) => judge(i, a) !== w).map(([i, a, w]) => `「${i}」を「${a}」に→${judge(i, a)}（期待 ${w}）`);
console.log(`入力式の問題 ${qs.length} 問`);
console.log(`① 模範解答そのまま ×: ${bad1.length}`, bad1.slice(0, 8));
console.log(`② 書き方のちがい ×: ${bad2.length}`, bad2.slice(0, 12));
console.log(`③ まちがいが○: ${bad3.length}`, bad3.slice(0, 12));
console.log(`手作りケース: ${badC.length}`, badC);

// 合否：①②は0件、③は「数ずらし」「帯分数のけたつなぎ」が0件、手作りケースも0件
const hard = bad3.filter((x) => x.startsWith('数ずらし') || x.startsWith('帯分数'));
if (bad1.length || bad2.length || hard.length || badC.length) {
  console.log('⚠ 採点の検査に失敗');
  process.exit(1);
}
console.log('✓ 採点の検査（全問）を通過');
