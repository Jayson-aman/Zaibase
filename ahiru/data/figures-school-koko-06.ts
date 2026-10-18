// 高校受験 入試傾向問題（06）の動く図解スライド。キーは問題 id。
// 「なぜそうなるの？」を根っこまでたどる連鎖で、10枚以上。上半分に図、下の帯に式やひとこと。
import type { Figure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';
import type { Slide } from './diagram-kit';

type E = DiagramElement;
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const RED_T = 'rgba(225,29,72,0.35)';
const BLUE_T = 'rgba(2,132,199,0.25)';
const NOFILL = 'rgba(255,255,255,0)';
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const fmt = (n: number): string => String(Math.round(n * 1000) / 1000);
const pol = (cx: number, cy: number, r: number, deg: number): [number, number] => [
  Math.round((cx + r * Math.cos((deg * Math.PI) / 180)) * 10) / 10,
  Math.round((cy + r * Math.sin((deg * Math.PI) / 180)) * 10) / 10,
];

// ═════════ 電気：並列回路 ═════════
const pcBase = (V: number, R1: number, R2: number): E[] => [
  ln(40, 22, 220, 22, C.gray, false, 2), ln(40, 108, 220, 108, C.gray, false, 2),
  ln(40, 22, 40, 52, C.gray, false, 2), ln(40, 78, 40, 108, C.gray, false, 2),
  ln(120, 22, 120, 48, C.gray, false, 2), ln(120, 74, 120, 108, C.gray, false, 2),
  ln(220, 22, 220, 48, C.gray, false, 2), ln(220, 74, 220, 108, C.gray, false, 2),
  bx(22, 52, 36, 26, `${V}V`, C.red, FILL.red, 12),
  bx(100, 48, 40, 26, `${R1}Ω`, C.ink, FILL.warm, 13),
  bx(200, 48, 40, 26, `${R2}Ω`, C.ink, FILL.warm, 13),
  lb(146, 65, 'R₁', 11, C.gray, 'start'), lb(246, 65, 'R₂', 11, C.gray, 'start'),
];

function parallel(V: number, R1: number, R2: number, ask: 'total' | 'r1' | 'r2' | 'both'): Figure {
  const I1 = V / R1, I2 = V / R2, It = I1 + I2, Rt = V / It;
  const g = gcd(I1, I2), rg = gcd(R1, R2);
  const q = ask === 'total' ? '回路全体を流れる電流は何A？' : ask === 'r1' ? 'R₁に流れる電流は何A？' : ask === 'r2' ? 'R₂に流れる電流は何A？' : 'R₁・R₂の電流はそれぞれ何A？';
  const ans = ask === 'total' ? `全体 ${It}A` : ask === 'r1' ? `R₁ ${I1}A` : ask === 'r2' ? `R₂ ${I2}A` : `R₁ ${I1}A ／ R₂ ${I2}A`;
  const c = pcBase(V, R1, R2);
  const hl1 = (): E => bx(100, 48, 40, 26, `${R1}Ω`, C.green, FILL.green, 13);
  const hl2 = (): E => bx(200, 48, 40, 26, `${R2}Ω`, C.blue, FILL.blue, 13);
  const w1 = (280 * I1) / It, w2 = (280 * I2) / It;
  const s: Slide[] = [
    { note: `電源 ${V}V に、${R1}Ω の抵抗 R₁ と ${R2}Ω の抵抗 R₂ を並列につないだ回路です。${q} 図に数値を書きこみました。`,
      add: F(c, [eb(152, `電源 ${V}V ／ R₁＝${R1}Ω ／ R₂＝${R2}Ω`, C.blue, FILL.blue, 13), tx(206, q, 12)]) },
    { note: `❓ なぜ、どちらの抵抗にも電源と同じ ${V}V がかかるの？ 並列では、R₁ も R₂ も、電池の両はし（上の線と下の線）に直接つながっています。同じ2本の線の間にはさまれているので、かかる電圧はどちらも ${V}V です。`,
      add: F([...c, ln(40, 22, 220, 22, C.red, false, 4), ln(40, 108, 220, 108, C.red, false, 4), lb(120, 14, `${V}V`, 11, C.red, 'middle', true), lb(220, 14, `${V}V`, 11, C.red, 'middle', true)],
        [eb(152, `どの枝にも ${V}V`, C.red, FILL.red, 16), tx(206, '電池の両はしに直接つながるから', 12)]) },
    { note: '❓ では、電流の大きさはどう決まるの？ 電圧は電流を押し出す力、抵抗は流れにくさです。押す力が2倍なら電流は2倍（比例）、流れにくさが2倍なら電流は半分になります。だから 電流 ＝ 電圧 ÷ 抵抗（オームの法則）です。',
      add: F([bx(10, 14, 145, 36, '電圧が2倍 → 電流2倍', C.blue, FILL.blue, 11), bx(165, 14, 145, 36, '抵抗が2倍 → 電流1/2', C.red, FILL.red, 11), bx(60, 66, 200, 40, '電流 ＝ 電圧 ÷ 抵抗', C.green, FILL.green, 16)],
        [tx(170, 'I ＝ V ÷ R（オームの法則）', 13, C.green, true)]) },
    { note: `R₁ について考えます。R₁ には ${V}V がかかり、抵抗は ${R1}Ω なので、電流は 電圧÷抵抗 ＝ ${V}÷${R1} ＝ ${I1}A です。`,
      add: F([...c, hl1(), lb(128, 40, `${I1}A`, 12, C.green, 'start', true)], [eb(152, `${V} ÷ ${R1} ＝ ${I1}A`, C.green, FILL.green, 17), tx(206, 'R₁ を流れる電流', 12)]) },
    { note: `R₂ も同じです。R₂ にも ${V}V がかかり、抵抗は ${R2}Ω なので、電流は ${V}÷${R2} ＝ ${I2}A です。`,
      add: F([...c, hl2(), lb(228, 40, `${I2}A`, 12, C.blue, 'start', true)], [eb(152, `${V} ÷ ${R2} ＝ ${I2}A`, C.blue, FILL.blue, 17), tx(206, 'R₂ を流れる電流', 12)]) },
    { note: `❓ なぜ、全体の電流は足し算なの？ 電池から出た電流は、枝分かれのところで2本に分かれ、あとでまた1本に合流します。分かれた電流の合計が、もとの電流です（水路が2本に分かれても、水の合計の量は同じ）。${I1}＋${I2}＝${It}A。`,
      add: F([...c, ar(50, 22, 92, 22, C.red), lb(46, 14, '全体', 10, C.red, 'start', true), ar(112, 28, 112, 44, C.green), ar(212, 28, 212, 44, C.blue), lb(128, 40, `${I1}A`, 11, C.green, 'start', true), lb(228, 40, `${I2}A`, 11, C.blue, 'start', true)],
        [eb(152, `${I1}A ＋ ${I2}A ＝ ${It}A`, C.purple, FILL.purple, 16), tx(206, '分かれた電流の合計が全体', 12)]) },
    { note: `❓ 全体の ${It}A を半分ずつ（${It / 2}A ずつ）に分けてはいけないの？ いけません。同じ電圧でも、流れにくさがちがうからです。抵抗が小さい道ほど電流が流れやすく、電流の比は抵抗の比の逆になります（${R1}Ω：${R2}Ω なら、電流は ${I1 / g}：${I2 / g}）。`,
      add: F([lb(160, 18, `全体 ${It}A の分かれ方`, 13, C.gray, 'middle', true), bx(20, 28, w1, 38, `R₁ ${I1}A`, C.green, FILL.green, 13), bx(20 + w1, 28, w2, 38, `R₂ ${I2}A`, C.blue, FILL.blue, 13),
        eb(84, `抵抗の比 ${R1 / rg}：${R2 / rg}`, C.gray, FILL.gray, 13, 28, 20, 135), eb(84, `電流の比 ${I1 / g}：${I2 / g}`, C.purple, FILL.purple, 13, 28, 165, 135)],
        [tx(176, '流れやすい道に、たくさん流れる', 13, C.green, true)]) },
    { note: `確かめ（検算）をします。全体が ${It}A、電圧が ${V}V なので、全体のはたらきは ${V}÷${It}＝${Rt}Ω の抵抗1つと同じです。${R1}Ω、${R2}Ω のどちらよりも小さくなりました。道が2本に増えるほど流れやすくなる、という考えと合っています。`,
      add: F([bx(15, 18, 80, 36, `R₁ ${R1}Ω`, C.green, FILL.green, 12), bx(105, 18, 80, 36, `R₂ ${R2}Ω`, C.blue, FILL.blue, 12), ar(190, 36, 215, 36, C.gray), bx(220, 18, 85, 36, `全体 ${Rt}Ω`, C.purple, FILL.purple, 13),
        eb(80, `${V}V ÷ ${It}A ＝ ${Rt}Ω`, C.purple, FILL.purple, 15, 32)],
        [tx(166, `${Rt}Ω ＜ ${Math.min(R1, R2)}Ω（どちらの抵抗より小さい）`, 12), tx(194, '道が2本になると流れやすくなる', 12)]) },
    { note: `よくあるまちがいです。全体の電流を等分して ${It / 2}A ずつとしたり、並列なのに電流が同じだと考えたりしがちです。並列で同じなのは「電圧」です。電流は、枝ごとに 電圧÷抵抗 で求めて、最後に足します。`,
      add: F([eb(8, `× ${It}A を ${It / 2}A ずつに等分する`, C.red, FILL.red, 14, 34), eb(50, '× 並列なのに電流が同じだと考える', C.red, FILL.red, 14, 34), eb(92, `○ 枝ごとに 電圧 ÷ 抵抗 を計算する`, C.green, FILL.green, 14, 34)],
        [tx(176, '並列で同じなのは電圧。電流は足し算', 13, C.green, true)]) },
    { note: `答えです。${ans}。R₁ は ${I1}A、R₂ は ${I2}A で、足すと全体の ${It}A になり、筋が通っています。`,
      add: F([...c, lb(128, 40, `${I1}A`, 12, C.green, 'start', true), lb(228, 40, `${I2}A`, 12, C.blue, 'start', true), lb(46, 14, `${It}A`, 11, C.red, 'start', true)],
        [eb(152, `答え　${ans}`, C.green, FILL.green, 16), tx(206, `${I1}A ＋ ${I2}A ＝ ${It}A`, 12)]) },
  ];
  return show(s, `並列回路：${V}V、${R1}Ω と ${R2}Ω`);
}

// ═════════ 電気：直列回路 ═════════
const scBase = (V: number, R1: number, R2: number): E[] => [
  ln(40, 30, 90, 30, C.gray, false, 2), ln(140, 30, 190, 30, C.gray, false, 2), ln(240, 30, 280, 30, C.gray, false, 2),
  ln(280, 30, 280, 110, C.gray, false, 2), ln(40, 110, 280, 110, C.gray, false, 2),
  ln(40, 30, 40, 57, C.gray, false, 2), ln(40, 83, 40, 110, C.gray, false, 2),
  bx(22, 57, 36, 26, `${V}V`, C.red, FILL.red, 12),
  bx(90, 17, 50, 26, `${R1}Ω`, C.ink, FILL.warm, 13), bx(190, 17, 50, 26, `${R2}Ω`, C.ink, FILL.warm, 13),
  lb(115, 58, 'R₁', 11, C.gray, 'middle'), lb(215, 58, 'R₂', 11, C.gray, 'middle'),
];
// 横向きの帯グラフ（合計を 280px にそろえる）
const hbar = (y: number, a: number, b: number, ta: string, tb: string, total: number, ca = C.green, fa: string = FILL.green, cb = C.blue, fb: string = FILL.blue): E[] => [
  bx(20, y, (280 * a) / total, 36, ta, ca, fa, 13), bx(20 + (280 * a) / total, y, (280 * b) / total, 36, tb, cb, fb, 13),
];
const powRect = (V: string, I: string, P: string): E[] => [
  lb(160, 16, `よこ：電圧 ${V}`, 12, C.blue, 'middle', true),
  bx(80, 24, 160, 86, undefined, C.green, FILL.green),
  lb(74, 62, 'たて：', 11, C.red, 'end'), lb(74, 78, `電流 ${I}`, 11, C.red, 'end', true),
  lb(160, 72, P ? `面積 ＝ 電力 ${P}` : '面積 ＝ 電力', 12, C.green, 'middle', true),
];

const series1: Figure = (() => {
  const c = scBase(20, 5, 15);
  const s: Slide[] = [
    { note: '抵抗 R₁＝5Ω と R₂＝15Ω を直列につなぎ、電圧 20V の電源をつなぎました。回路を流れる電流の大きさを求めます。',
      add: F(c, [eb(152, '電源 20V ／ R₁＝5Ω ／ R₂＝15Ω', C.blue, FILL.blue, 13), tx(206, '回路を流れる電流は何A？', 12)]) },
    { note: '❓ なぜ、直列だと抵抗は足し算なの？ 直列は通り道が1本なので、電流は R₁ も R₂ も順に通りぬけます。流れにくさの関門が2つ続くので、流れにくさは合計になります。5Ω と 15Ω を帯の長さで表すと、つなげて 20Ω です。',
      add: F([...hbar(30, 5, 15, '5Ω', '15Ω', 20), lb(160, 88, '合わせて 20Ω', 13, C.purple, 'middle', true), ln(20, 76, 300, 76, C.purple, false, 2)],
        [eb(152, '5 ＋ 15 ＝ 20Ω', C.purple, FILL.purple, 17), tx(206, '関門が2つ続くので、合計になる', 12)]) },
    { note: '❓ なぜ、電流はどこでも同じなの？ 直列は途中に分かれ道がありません。電流が途中で増えたり減ったりする場所がないので、R₁ を通る電流も R₂ を通る電流も、同じ大きさです（1本の水路を流れる水の量は同じ）。',
      add: F([...c, ar(56, 30, 80, 30, C.red), ar(146, 30, 180, 30, C.red), ar(250, 30, 274, 30, C.red), lb(68, 22, '同じ', 10, C.red), lb(163, 22, '同じ', 10, C.red), lb(262, 22, '同じ', 10, C.red)],
        [eb(152, '電流は どこでも同じ', C.red, FILL.red, 16), tx(206, '分かれ道がないから', 12)]) },
    { note: '❓ では、なぜ「電圧 ÷ 合計の抵抗」で電流が出るの？ 全体の抵抗が合計 20Ω なので、回路全体を 20Ω の抵抗1個とみなせます。そこにオームの法則（電流＝電圧÷抵抗）を使うと 20÷20＝1A です。',
      add: F([bx(22, 45, 36, 26, '20V', C.red, FILL.red, 12), bx(120, 40, 80, 36, '20Ω', C.purple, FILL.purple, 16), ln(58, 58, 120, 58, C.gray, false, 2), ln(200, 58, 262, 58, C.gray, false, 2), ln(262, 58, 262, 100, C.gray, false, 2), ln(40, 71, 40, 100, C.gray, false, 2), ln(40, 100, 262, 100, C.gray, false, 2)],
        [eb(152, '20 ÷ 20 ＝ 1A', C.green, FILL.green, 17), tx(206, '電流 ＝ 電圧 ÷ 合計の抵抗', 12)]) },
    { note: '電流は 1A で、R₁ にも R₂ にも同じ 1A が流れます。では、それぞれにかかる電圧はいくつでしょう。',
      add: F([...c, lb(115, 80, '1A', 13, C.green, 'middle', true), lb(215, 80, '1A', 13, C.green, 'middle', true)], [eb(152, 'どちらにも 1A', C.green, FILL.green, 16), tx(206, 'つぎは各抵抗の電圧を求める', 12)]) },
    { note: '❓ 各抵抗の電圧は、どう出すの？ オームの法則 電流＝電圧÷抵抗 を、電圧＝電流×抵抗 と書きかえます。R₁：1×5＝5V、R₂：1×15＝15V です。1Ωに1Aを流すには1V必要、という意味です。',
      add: F([...c, lb(115, 80, '1×5＝5V', 12, C.green, 'middle', true), lb(215, 80, '1×15＝15V', 12, C.blue, 'middle', true)], [eb(152, '電圧 ＝ 電流 × 抵抗', C.green, FILL.green, 16), tx(206, 'R₁：5V ／ R₂：15V', 13)]) },
    { note: '❓ なぜ 5V ＋ 15V ＝ 20V になるの？ 電池の電圧は、電流を押す力の「合計」です。その力を R₁ と R₂ が順に使っていくので、使った分の合計が電池の電圧 20V になります（坂を2段で下りるようなもの）。',
      add: F([lb(160, 18, '電池 20V', 13, C.red, 'middle', true), ln(20, 26, 300, 26, C.red, false, 2), ...hbar(34, 5, 15, 'R₁ 5V', 'R₂ 15V', 20)],
        [eb(152, '5V ＋ 15V ＝ 20V', C.purple, FILL.purple, 17), tx(206, '電池の電圧を2つで分け合う', 12)]) },
    { note: 'よくあるまちがいです。20÷5＝4A と、R₁ だけで計算してしまう。でも、電流は R₂ も通りぬけるので、15Ω の分の流れにくさも足さなければなりません。正しくは 合計 20Ω で割ります。',
      add: F([eb(14, '× 20 ÷ 5 ＝ 4A（R₁ だけで計算）', C.red, FILL.red, 14, 34), eb(60, '× R₂ の 15Ω を忘れている', C.red, FILL.red, 14, 34), eb(106, '○ 20 ÷（5＋15）＝ 1A', C.green, FILL.green, 14, 34)], [tx(180, '電流は両方の抵抗を通る', 13, C.green, true)]) },
    { note: '確かめ（検算）をします。電圧は抵抗に比例するので、電圧の比 5V：15V ＝ 1：3 は、抵抗の比 5Ω：15Ω ＝ 1：3 と一致するはずです。たしかに一致しています。',
      add: F([eb(14, '電圧の比 5V：15V ＝ 1：3', C.blue, FILL.blue, 15, 34), eb(60, '抵抗の比 5Ω：15Ω ＝ 1：3', C.green, FILL.green, 15, 34), eb(106, '同じ比 → 計算は合っている', C.purple, FILL.purple, 15, 34)], [tx(180, '電流が同じなら 電圧は抵抗に比例', 12, C.gray, true)]) },
    { note: '答えは 1A です。抵抗は 5＋15＝20Ω、電流は 20÷20＝1A。各抵抗の電圧 5V と 15V を足すと 20V になり、電池の電圧と一致しました。',
      add: F([...c, lb(115, 80, '1A', 13, C.green, 'middle', true), lb(215, 80, '1A', 13, C.green, 'middle', true)], [eb(152, '答え　1A', C.green, FILL.green, 18), tx(206, '20 ÷ 20 ＝ 1A', 13)]) },
  ];
  return show(s, '直列回路：5Ω と 15Ω、20V');
})();

const series2: Figure = (() => {
  const c = scBase(40, 15, 25);
  const s: Slide[] = [
    { note: '抵抗 R₁＝15Ω と R₂＝25Ω を直列につなぎ、電圧 40V の電源をつなぎました。R₂ が消費する電力を求めます。',
      add: F(c, [eb(152, '電源 40V ／ R₁＝15Ω ／ R₂＝25Ω', C.blue, FILL.blue, 13), tx(206, 'R₂ が消費する電力は何W？', 12)]) },
    { note: '❓ なぜ、直列だと抵抗は足し算なの？ 直列は通り道が1本なので、電流は R₁ も R₂ も順に通りぬけます。流れにくさの関門が2つ続くので、合計になります。15Ω と 25Ω をつなげると 40Ω です。',
      add: F([...hbar(30, 15, 25, '15Ω', '25Ω', 40), lb(160, 88, '合わせて 40Ω', 13, C.purple, 'middle', true), ln(20, 76, 300, 76, C.purple, false, 2)],
        [eb(152, '15 ＋ 25 ＝ 40Ω', C.purple, FILL.purple, 17), tx(206, '関門が2つ続くので、合計になる', 12)]) },
    { note: '❓ なぜ、電流は R₁ でも R₂ でも同じなの？ 直列は分かれ道がなく、1本の道です。電流が途中で増えたり減ったりしないので、どこでも同じ大きさです。',
      add: F([...c, ar(56, 30, 80, 30, C.red), ar(146, 30, 180, 30, C.red), ar(250, 30, 274, 30, C.red), lb(68, 22, '同じ', 10, C.red), lb(163, 22, '同じ', 10, C.red), lb(262, 22, '同じ', 10, C.red)],
        [eb(152, '電流は どこでも同じ', C.red, FILL.red, 16), tx(206, '分かれ道がないから', 12)]) },
    { note: '全体の電流を求めます。全体の抵抗は 40Ω、電圧は 40V なので、電流 ＝ 電圧÷抵抗 ＝ 40÷40 ＝ 1A です。この 1A が R₁ にも R₂ にも流れます。',
      add: F([...c, lb(115, 80, '1A', 13, C.green, 'middle', true), lb(215, 80, '1A', 13, C.green, 'middle', true)], [eb(152, '40 ÷ 40 ＝ 1A', C.green, FILL.green, 17), tx(206, '電流 ＝ 電圧 ÷ 合計の抵抗', 12)]) },
    { note: '❓ なぜ、R₂ にかかる電圧は 40V ではないの？ 40V は電池の電圧で、R₁ と R₂ の2つで分け合います。R₂ の電圧は 電流×抵抗 ＝ 1×25 ＝ 25V、R₁ は 1×15 ＝ 15V。足すと 15＋25＝40V で電池と一致します。',
      add: F([lb(160, 18, '電池 40V', 13, C.red, 'middle', true), ln(20, 26, 300, 26, C.red, false, 2), ...hbar(34, 15, 25, 'R₁ 15V', 'R₂ 25V', 40)], [eb(152, 'R₂ の電圧 ＝ 1 × 25 ＝ 25V', C.blue, FILL.blue, 15), tx(206, '電圧 ＝ 電流 × 抵抗', 12)]) },
    { note: '❓ なぜ、電力は 電圧 × 電流 で求めるの？ 電圧は電気が運ぶエネルギーの大きさ、電流は1秒間に流れる電気の量です。かけると「1秒間に使うエネルギー」になります。長方形の面積にたとえると、よこが電圧、たてが電流です。',
      add: F(powRect('25V', '1A', ''), [eb(152, '電力 ＝ 電圧 × 電流', C.green, FILL.green, 16), tx(206, '長方形の面積にたとえられる', 12)]) },
    { note: 'R₂ の電力は、R₂ の電圧 25V × 電流 1A ＝ 25W です。W（ワット）は「1秒あたりに使うエネルギー」の単位です。',
      add: F(powRect('25V', '1A', '25W'), [eb(152, '25 × 1 ＝ 25W', C.green, FILL.green, 17), tx(206, 'R₂ が消費する電力', 12)]) },
    { note: 'よくあるまちがいです。電池の電圧 40V と電流 1A をかけて 40W としてしまう。40W は「回路全体」の電力です。R₂ だけの電力は、R₂ にかかる電圧 25V を使います。R₁ は 15V×1A＝15W、15＋25＝40W です。',
      add: F([eb(14, '× 40V × 1A ＝ 40W（回路全体）', C.red, FILL.red, 14, 34), ...hbar(60, 15, 25, 'R₁ 15W', 'R₂ 25W', 40)], [eb(152, '15W ＋ 25W ＝ 40W（全体）', C.purple, FILL.purple, 15), tx(206, 'R₂ だけなら 25V × 1A', 12)]) },
    { note: '確かめ（検算）をします。電圧＝電流×抵抗 を電力の式に入れると、電力＝電流×抵抗×電流＝電流×電流×抵抗。R₂ なら 1×1×25＝25W。さきほどと同じ値になりました。',
      add: F([eb(14, '25V ＝ 1A × 25Ω', C.blue, FILL.blue, 15, 34), eb(60, '電力 ＝ 25V × 1A ＝ 1A × 25Ω × 1A', C.purple, FILL.purple, 13, 34), eb(106, '＝ 1 × 1 × 25 ＝ 25W ✓', C.green, FILL.green, 15, 34)], [tx(180, '電流×電流×抵抗 でも同じ', 13, C.gray, true)]) },
    { note: '答えは 25W です。全体の電流 1A を求め、R₂ にかかる電圧 25V を出して、25V×1A＝25W と計算しました。',
      add: F([...c, lb(115, 80, '15V', 12, C.green, 'middle', true), lb(215, 80, '25V・1A', 12, C.blue, 'middle', true)], [eb(152, '答え　25W', C.green, FILL.green, 18), tx(206, '25V × 1A ＝ 25W', 13)]) },
  ];
  return show(s, '直列回路：15Ω と 25Ω、R₂ の電力');
})();

// ═════════ 電気：電熱線の発熱 ═════════
const heater = (g0: string, g1: string): E[] => [
  ln(40, 64, 100, 64, C.gray, false, 2), ln(220, 64, 280, 64, C.gray, false, 2),
  bx(100, 44, 120, 40, '電熱線', C.red, FILL.red, 15),
  lb(160, 24, g0, 12, C.ink, 'middle', true), lb(160, 110, g1, 12, C.ink, 'middle', true),
];
const minBlocks = (n: number): E[] => {
  const out: E[] = [];
  for (let i = 0; i < n; i++) {
    out.push(bx(20 + i * 56, 22, 48, 30, '1分', C.blue, FILL.blue, 13));
    out.push(bx(20 + i * 56, 60, 48, 30, '60秒', C.green, FILL.green, 12));
  }
  out.push(lb(160, 112, `${n}分 ＝ ${n}×60 ＝ ${n * 60}秒`, 14, C.purple, 'middle', true));
  return out;
};
const mulRow = (P: string, n: number, withLabel = true): E[] => [
  bx(14, 30, 46, 30, `${P}J`, C.red, FILL.red, 12), bx(66, 30, 46, 30, `${P}J`, C.red, FILL.red, 12), bx(118, 30, 46, 30, `${P}J`, C.red, FILL.red, 12),
  bx(170, 30, 46, 30, `${P}J`, C.red, FILL.red, 12), lb(230, 50, '…', 16, C.gray, 'middle'), bx(244, 30, 60, 30, `${P}J`, C.red, FILL.red, 12),
  ln(14, 74, 304, 74, C.gray, false, 2), ...(withLabel ? [lb(160, 94, `1秒ごとに ${P}J が ${n}秒ぶん ＝ ${n}回`, 12, C.gray, 'middle', true)] : []),
];
const three = (a: string, op1: string, b: string, op2: string, c2: string, ca = C.green, fa: string = FILL.green): E[] => [
  bx(10, 40, 88, 44, a, C.blue, FILL.blue, 12), lb(106, 66, op1, 20, C.ink, 'middle', true), bx(116, 40, 88, 44, b, C.red, FILL.red, 12),
  lb(212, 66, op2, 20, C.ink, 'middle', true), bx(222, 40, 88, 44, c2, ca, fa, 13),
];

function heat(o: { how: 'VI' | 'IR' | 'VR'; V: number; I: number; R: number; min: number; wh?: boolean; ask: string; answer: string }): Figure {
  const { V, I, R, min } = o;
  const sec = min * 60;
  const P = V * I, Q = P * sec;
  const Ps = fmt(P), Qs = fmt(Q);
  const g0 = o.how === 'VI' ? `電圧 ${V}V　電流 ${I}A` : o.how === 'IR' ? `抵抗 ${R}Ω　電流 ${I}A` : `抵抗 ${R}Ω　電圧 ${V}V`;
  const g1 = `${min}分間 電流を流す`;
  const s: Slide[] = [];
  s.push({ note: `電熱線に ${g0.replace('　', '、')} の条件で、${min}分間 電流を流します。${o.ask}`, add: F(heater(g0, g1), [eb(152, o.ask, C.blue, FILL.blue, 13), tx(206, '電力 → 熱量 の順に求める', 12)]) });
  if (o.how === 'IR') {
    s.push({ note: '❓ 電圧はどうやって出すの？ オームの法則は「電流 ＝ 電圧 ÷ 抵抗」です。両辺に抵抗をかけると「電圧 ＝ 電流 × 抵抗」と書きかえられます。1Ωに1Aを流すには1V必要、という意味です。',
      add: F([bx(40, 14, 240, 36, '電流 ＝ 電圧 ÷ 抵抗', C.blue, FILL.blue, 15), ar(160, 52, 160, 72, C.gray), bx(40, 76, 240, 36, '電圧 ＝ 電流 × 抵抗', C.green, FILL.green, 15)], [tx(170, '両辺に抵抗をかけた', 13, C.gray, true)]) });
    s.push({ note: `電圧は ${I}A × ${R}Ω ＝ ${V}V です。`, add: F(three(`電流 ${I}A`, '×', `抵抗 ${R}Ω`, '＝', `電圧 ${V}V`), [eb(152, `${I} × ${R} ＝ ${V}V`, C.green, FILL.green, 17), tx(206, '電熱線にかかる電圧', 12)]) });
  } else if (o.how === 'VR') {
    s.push({ note: '❓ なぜ「電圧 ÷ 抵抗」で電流が出るの？ 電圧は電流を押し出す力、抵抗は流れにくさです。押す力が大きいほど、流れにくさが小さいほど電流は大きくなります。だから 電流 ＝ 電圧 ÷ 抵抗（オームの法則）です。',
      add: F([bx(10, 14, 145, 36, '電圧大 → 電流大', C.blue, FILL.blue, 10), bx(165, 14, 145, 36, '抵抗大 → 電流小', C.red, FILL.red, 10), bx(60, 66, 200, 40, '電流 ＝ 電圧 ÷ 抵抗', C.green, FILL.green, 16)], [tx(170, 'I ＝ V ÷ R（オームの法則）', 13, C.green, true)]) });
    s.push({ note: `電流は ${V}V ÷ ${R}Ω ＝ ${I}A です。`, add: F(three(`電圧 ${V}V`, '÷', `抵抗 ${R}Ω`, '＝', `電流 ${I}A`), [eb(152, `${V} ÷ ${R} ＝ ${I}A`, C.green, FILL.green, 17), tx(206, '電熱線を流れる電流', 12)]) });
  }
  s.push({ note: '❓ なぜ、電力は 電圧 × 電流 で求めるの？ 電圧は電気が運ぶエネルギーの大きさ、電流は1秒間に流れる電気の量です。かけると「1秒間に使うエネルギー」になります。長方形の面積にたとえると、よこが電圧、たてが電流です。',
    add: F(powRect(`${V}V`, `${I}A`, ''), [eb(152, '電力 ＝ 電圧 × 電流', C.green, FILL.green, 16), tx(206, '長方形の面積にたとえられる', 12)]) });
  s.push({ note: `電力 ＝ 電圧 × 電流 ＝ ${V} × ${I} ＝ ${Ps}W です。W（ワット）は「1秒あたりに使うエネルギー（J）」の単位で、${Ps}W は1秒ごとに ${Ps}J の熱が出ることを表します。`,
    add: F(powRect(`${V}V`, `${I}A`, `${Ps}W`), [eb(152, `${V} × ${I} ＝ ${Ps}W`, C.green, FILL.green, 17), tx(206, `1秒に ${Ps}J の熱が出る`, 12)]) });
  s.push({ note: `❓ なぜ、時間を「秒」に直すの？ 電力1Wは「1秒あたり1J」の熱の出方です。かけ算で J を出すには、時間も「秒」でそろえる必要があります。${min}分 ＝ ${min}×60 ＝ ${sec}秒です。`,
    add: F(minBlocks(min), [eb(152, `${min}分 ＝ ${sec}秒`, C.purple, FILL.purple, 17), tx(206, 'Wは「1秒あたり」だから秒で数える', 12)]) });
  s.push({ note: `❓ では、なぜ 電力 × 時間 で熱量が出るの？ 1秒ごとに ${Ps}J の熱が出るので、${sec}秒では ${Ps}J が ${sec}回ぶん集まります。同じ数を何回も足すのでかけ算です。`,
    add: F(mulRow(Ps, sec), [eb(152, `${Ps} × ${sec}`, C.red, FILL.red, 17), tx(206, '同じ熱を、秒の数だけ足す', 12)]) });
  s.push({ note: `熱量 ＝ 電力 × 時間（秒）＝ ${Ps} × ${sec} ＝ ${Qs}J です。`,
    add: F([...mulRow(Ps, sec, false), bx(60, 92, 200, 34, `熱量 ${Qs}J`, C.green, FILL.green, 16)], [eb(152, `${Ps} × ${sec} ＝ ${Qs}J`, C.green, FILL.green, 16), tx(206, '発生する熱量', 12)]) });
  if (o.wh) {
    const hr = Math.round((min / 60) * 1000000) / 1000000;
    const wh = fmt(P * (min / 60));
    const blocks: E[] = [];
    for (let i = 0; i < 12; i++) blocks.push(bx(16 + i * 24, 30, 22, 30, i === 0 ? '5' : undefined, i === 0 ? C.red : C.blue, i === 0 ? FILL.red : FILL.blue, 10));
    s.push({ note: `❓ 電力量（Wh）とは何？ 電力1Wを1時間使った量が1Whです。だから今度は、時間を「時間」の単位にそろえます。${min}分は60分の${min}なので、${min}÷60＝1/12時間（1時間を12こに分けた1こぶんが5分）です。`,
      add: F([...blocks, lb(160, 80, '1時間（60分）を12こに分けた1こぶんが5分', 12, C.gray, 'middle', true)], [eb(152, `${min}分 ＝ ${min}÷60 ＝ 1/12 時間`, C.purple, FILL.purple, 15), tx(206, 'Whは時間の単位で数える', 12)]) });
    s.push({ note: `電力量 ＝ 電力 × 時間 ＝ ${Ps} × 1/12 ＝ ${wh}Wh です。`,
      add: F(three(`電力 ${Ps}W`, '×', '1/12 時間', '＝', `${wh}Wh`), [eb(152, `${Ps} × 1/12 ＝ ${wh}Wh`, C.green, FILL.green, 16), tx(206, `熱量は秒、電力量は時間で数える`, 12)]) });
    void hr;
  }
  s.push({ note: `よくあるまちがいです。時間を分のまま「${Ps} × ${min} ＝ ${fmt(P * min)}J」と計算してしまう。これは「${min}秒ぶん」の熱量にしかなりません。正しくは秒に直して ${Ps} × ${sec} です。`,
    add: F([eb(14, `× ${Ps} × ${min} ＝ ${fmt(P * min)}J`, C.red, FILL.red, 15, 34), eb(60, `（これは ${min}秒ぶんの熱量）`, C.red, FILL.red, 13, 34), eb(106, `○ ${Ps} × ${sec} ＝ ${Qs}J`, C.green, FILL.green, 15, 34)], [tx(180, '分のままかけない。必ず秒に直す', 13, C.green, true)]) });
  const Rv = o.how === 'VI' ? fmt(V / I) : String(R);
  s.push({ note: `別の方法で確かめます。抵抗は ${o.how === 'VI' ? `${V}÷${I}＝${Rv}Ω` : `${Rv}Ω`}。電圧＝電流×抵抗 を電力の式に入れると、電力＝電流×電流×抵抗。${I}×${I}×${Rv}＝${fmt(I * I * Number(Rv))}W となり、さきほどの ${Ps}W と同じです。`,
    add: F([eb(14, `抵抗 ${Rv}Ω ／ 電流 ${I}A`, C.blue, FILL.blue, 15, 34), eb(60, `電流 × 電流 × 抵抗 ＝ ${I}×${I}×${Rv}`, C.purple, FILL.purple, 13, 34), eb(106, `＝ ${fmt(I * I * Number(Rv))}W ✓ 同じ`, C.green, FILL.green, 15, 34)], [tx(180, '電力を別の式でも出してみる', 13, C.gray, true)]) });
  s.push({ note: `さらに、熱量から電力にもどして確かめます。熱量 ${Qs}J を ${sec}秒で割ると ${Qs}÷${sec}＝${Ps}W。はじめの電力と一致しました。${o.wh ? `また 1Wh ＝ 1W×3600秒 ＝ 3600J なので、${Qs}÷3600 ＝ ${fmt(Q / 3600)}Wh で、電力量とも一致します。` : ''}`,
    add: F([eb(14, `${Qs}J ÷ ${sec}秒 ＝ ${Ps}W ✓`, C.green, FILL.green, 15, 34), ...(o.wh ? [eb(60, `${Qs}J ÷ 3600 ＝ ${fmt(Q / 3600)}Wh ✓`, C.green, FILL.green, 15, 34)] : [])], [tx(176, '逆にたどっても、もとにもどる', 13, C.gray, true)]) });
  s.push({ note: `答えです。${o.answer}。`, add: F(heater(g0, g1), [eb(152, `答え　${o.answer}`, C.green, FILL.green, 14), tx(206, `電力 ${Ps}W → 熱量 ${Qs}J`, 12)]) });
  return show(s, `電熱線の発熱：${g0.replace('　', '、')}、${min}分`);
}

// ═════════ 密度 ═════════
const dBars = (rows: [string, number][], scale: number, hl: number, x0 = 92): E[] => {
  const out: E[] = [];
  rows.forEach(([n, v], i) => {
    const y = 10 + i * 30, on = i === hl;
    out.push(lb(x0 - 6, y + 15, n, 11, C.ink, 'end', on));
    out.push(bx(x0, y, Math.max(6, v * scale), 22, undefined, on ? C.green : C.gray, on ? FILL.green : FILL.gray));
    out.push(lb(x0 + Math.max(6, v * scale) + 5, y + 15, `${v}`, 11, on ? C.green : C.gray, 'start', on));
  });
  return out;
};
const METALS: [string, number][] = [['アルミニウム', 2.7], ['鉄', 7.9], ['銅', 8.9], ['鉛', 11.3]];

function density(o: { V: number; m: number; mode: 'metal' | 'float' | 'sink'; ans: string; want: string }): Figure {
  const { V, m } = o;
  const d = fmt(m / V);
  const dn = m / V;
  const hlIdx = o.mode === 'metal' ? METALS.findIndex(([, v]) => Math.abs(v - dn) < 0.05) : -1;
  const name = hlIdx >= 0 ? METALS[hlIdx][0] : '';
  const other = METALS.find(([n]) => n === '鉄')!;
  const block: E[] = [bx(100, 18, 120, 70, undefined, C.main, FILL.warm), lb(160, 46, `体積 ${V}cm³`, 14, C.blue, 'middle', true), lb(160, 70, `質量 ${m}g`, 14, C.red, 'middle', true)];
  const wBars = (hl: number): E[] => (o.mode === 'float' ? dBars([['水', 1], ['物体', dn]], 150, hl) : dBars([['水', 1], ['物体', dn]], 20, hl));
  const s: Slide[] = [];
  s.push({ note: `体積 ${V}cm³、質量 ${m}g の物体があります。${o.want}まず、この物体の密度を求めます。`, add: F(block, [eb(152, '密度 ＝ ？ g/cm³', C.purple, FILL.purple, 16), tx(206, o.want, 12)]) });
  s.push({ note: '❓ そもそも「密度」って何？ 物質の「つまり具合」のことで、1cm³あたりの質量です。同じ大きさなら、鉄はアルミニウムより重い。この「1cm³あたりの重さ」は物質ごとに決まっています。',
    add: F([bx(30, 22, 90, 60, '鉄', C.gray, FILL.gray, 16), lb(75, 100, '1cm³で 7.9g', 12, C.ink, 'middle', true), bx(200, 22, 90, 60, 'アルミニウム', C.blue, FILL.blue, 12), lb(245, 100, '1cm³で 2.7g', 12, C.ink, 'middle', true), lb(160, 56, '同じ大きさ', 11, C.gray, 'middle')],
      [tx(176, '密度 ＝ 1cm³あたりの質量', 14, C.purple, true)]) });
  s.push({ note: `❓ なぜ「質量 ÷ 体積」で密度が出るの？ ${V}cm³のかたまりを、1cm³ずつ ${V}個に同じ重さで分けると考えます。全体が ${m}g なので、1個ぶんは ${m}÷${V} です。これが「1cm³あたりの質量」、つまり密度です。`,
    add: F([bx(20, 18, 280, 34, `${V}cm³ で ${m}g`, C.blue, FILL.blue, 14), ar(160, 54, 160, 72, C.gray),
      bx(20, 76, 44, 30, '1cm³', C.gray, FILL.gray, 11), bx(72, 76, 44, 30, '1cm³', C.gray, FILL.gray, 11), bx(124, 76, 44, 30, '1cm³', C.gray, FILL.gray, 11), bx(176, 76, 44, 30, '1cm³', C.gray, FILL.gray, 11), bx(228, 76, 44, 30, '1cm³', C.gray, FILL.gray, 11), lb(288, 96, '…', 16, C.gray, 'middle')],
      [tx(170, `${V}個に分けた、1個ぶん ＝ ${m}÷${V}`, 13, C.purple, true)]) });
  s.push({ note: `計算します。密度 ＝ 質量 ÷ 体積 ＝ ${m} ÷ ${V} ＝ ${d}g/cm³ です。`, add: F([eb(30, `${m} ÷ ${V} ＝ ${d}`, C.green, FILL.green, 20, 48), lb(160, 104, 'g/cm³（1cm³あたりの質量）', 12, C.gray, 'middle')], [eb(152, `密度 ${d}g/cm³`, C.green, FILL.green, 17), tx(206, '質量 ÷ 体積', 12)]) });
  if (o.mode === 'metal') {
    s.push({ note: '❓ なぜ、表と比べると物質がわかるの？ 密度は物質ごとに決まっていて、かたまりが大きくても小さくても変わりません。だから、求めた密度と同じ値の物質が、その物体の正体です。',
      add: F(dBars(METALS, 16, -1), [tx(166, '密度は物質ごとに決まった値', 13, C.purple, true), tx(194, '求めた値を、表にあてはめる', 12)]) });
    s.push({ note: `求めた密度 ${d}g/cm³ は、表の「${name}」の ${METALS[hlIdx][1]}g/cm³ と一致します。したがって、この物質は${name}です。`,
      add: F(dBars(METALS, 16, hlIdx), [eb(152, `${d}g/cm³ ＝ ${name}`, C.green, FILL.green, 17), tx(206, '表と同じ値の物質', 12)]) });
  } else {
    s.push({ note: `❓ なぜ水の密度（1g/cm³）と比べるの？ 水 1cm³ の質量は 1g です。同じ 1cm³ で比べて、物体のほうが軽ければ水に浮き、重ければ沈みます。この物体は ${d}g/cm³ です。`,
      add: F(wBars(-1), [tx(166, '水は 1cm³ で 1g', 13, C.purple, true), tx(194, '同じ大きさで重さをくらべる', 12)]) });
    s.push({ note: `${d} は 1.0 より${o.mode === 'float' ? '小さい' : '大きい'}ので、この物体は水より${o.mode === 'float' ? '軽く、水に浮きます' : '重く、水に沈みます'}。`,
      add: F(wBars(1), [eb(152, `${d} ${o.mode === 'float' ? '＜' : '＞'} 1.0 → ${o.mode === 'float' ? '浮く' : '沈む'}`, C.green, FILL.green, 17), tx(206, o.mode === 'float' ? '水より密度が小さいと浮く' : '水より密度が大きいと沈む', 12)]) });
  }
  s.push({ note: `よくあるまちがいです。体積 ÷ 質量 と逆に割ってしまう。${V}÷${m}＝${(V / m).toFixed(2)} となりますが、これは「1gあたりの体積」で、表の密度とは比べられません。密度は必ず 質量 ÷ 体積 です。`,
    add: F([eb(14, `× ${V} ÷ ${m} ＝ ${(V / m).toFixed(2)}`, C.red, FILL.red, 16, 34), eb(60, '（1gあたりの体積になってしまう）', C.red, FILL.red, 13, 34), eb(106, `○ ${m} ÷ ${V} ＝ ${d}`, C.green, FILL.green, 16, 34)], [tx(180, '割る順は「質量 ÷ 体積」', 13, C.green, true)]) });
  s.push({ note: `確かめ（検算）をします。密度 × 体積 ＝ 質量 になるはずです。${d} × ${V} ＝ ${fmt(dn * V)}g で、もとの質量 ${m}g にもどりました。`,
    add: F([eb(20, `${d} × ${V} ＝ ${fmt(dn * V)}g`, C.blue, FILL.blue, 17, 38), eb(72, `もとの質量 ${m}g と同じ ✓`, C.green, FILL.green, 16, 38)], [tx(170, '密度 × 体積 ＝ 質量（逆算）', 13, C.gray, true)]) });
  if (o.mode === 'metal') {
    s.push({ note: `ほかの物質でないことも確かめます。もし鉄（${other[1]}g/cm³）なら、${V}cm³の質量は ${V}×${other[1]}＝${fmt(V * other[1])}g になるはずです。実際の ${m}g とは合いません。`,
      add: F([eb(20, `鉄なら ${V} × ${other[1]} ＝ ${fmt(V * other[1])}g`, C.red, FILL.red, 15, 38), eb(72, `実際は ${m}g → 鉄ではない`, C.green, FILL.green, 15, 38)], [tx(170, 'ほかの候補は質量が合わない', 13, C.gray, true)]) });
  } else {
    s.push({ note: `もう一つの確かめです。同じ ${V}cm³ の水の質量は ${V}g。物体は ${m}g なので、物体のほうが${o.mode === 'float' ? '軽い' : '重い'}。${o.mode === 'float' ? '軽いので水に浮く' : '重いので水に沈む'}、という結論と合っています。`,
      add: F([bx(30, 30, 110, 60, `水 ${V}cm³`, C.blue, FILL.blue, 13), lb(85, 108, `${V}g`, 14, C.blue, 'middle', true), bx(180, 30, 110, 60, `物体 ${V}cm³`, C.main, FILL.warm, 13), lb(235, 108, `${m}g`, 14, C.red, 'middle', true), lb(160, 64, o.mode === 'float' ? '＜' : '＞', 20, C.ink, 'middle', true)], [tx(176, `物体のほうが${o.mode === 'float' ? '軽い → 浮く' : '重い → 沈む'}`, 14, C.green, true)]) });
  }
  s.push({ note: `答えは ${o.ans} です。`, add: F(block, [eb(152, `答え　${o.ans}`, C.green, FILL.green, 13), tx(206, `${m} ÷ ${V} ＝ ${d}g/cm³`, 12)]) });
  return show(s, `密度：${V}cm³ で ${m}g`);
}

// ═════════ 浮力 ═════════
const tankE = (): E[] => [bx(30, 62, 260, 70, undefined, C.blue, FILL.blue), ln(30, 62, 290, 62, C.blue, false, 2)];
const floatObj = (ratio: number, label?: string, x = 120, w = 80, H = 56): E[] => {
  const hs = Math.round(H * ratio * 10) / 10, ho = Math.round((H - hs) * 10) / 10;
  const out: E[] = [];
  if (ho > 0) out.push(bx(x, 62 - ho, w, ho, undefined, C.main, FILL.yellow));
  out.push(bx(x, 62, w, hs, label, C.main, '#FDE68A', 11));
  return out;
};
const forceArrows = (wl: number, bl: number, wt: string, bt: string, x = 120, w = 80): E[] => [
  ar(x - 14, 76, x - 14, 76 + wl, C.red), lb(x - 20, 74, wt, 11, C.red, 'end', true),
  ar(x + w + 14, 76 + bl, x + w + 14, 76, C.blue), lb(x + w + 20, 74, bt, 11, C.blue, 'start', true),
];
const sB = (ratio: number): Slide => ({
  note: '❓ なぜ、浮いて止まっているときは「重さ ＝ 浮力」なの？ 止まっているのは、上向きの力と下向きの力がつり合っているからです。下向きは物体の重さ、上向きは浮力。浮力のほうが大きければ浮き上がり、小さければ沈みます。ちょうど止まるのは、2つが等しいときです。',
  add: F([...tankE(), ...floatObj(ratio), ...forceArrows(36, 36, '重さ', '浮力')], [eb(152, '止まっている ＝ 上向きと下向きが同じ', C.purple, FILL.purple, 14), tx(206, '重さ ＝ 浮力', 14, C.gray, true)]),
});
const sA = (ratio: number): Slide => ({
  note: '❓ では、浮力の大きさは何で決まるの？ 物体が押しのけた水の重さです（アルキメデスの原理）。もし水中の部分が「水のかたまり」だったら、そこは浮いたまま止まっていたはずです。その水を、まわりの水が同じ力で支えています。物体に入れかえても、まわりの水が支える力は変わらないので、浮力 ＝ 押しのけた水の重さです。',
  add: F([...tankE(), ...floatObj(ratio), bx(120, 62, 80, Math.round(56 * ratio * 10) / 10, '押しのけた水', C.blue, BLUE_T, 10), ...forceArrows(36, 36, '重さ', '浮力')], [eb(152, '浮力 ＝ 押しのけた水の重さ', C.blue, FILL.blue, 15), tx(206, 'アルキメデスの原理', 12)]),
});
const sA2 = (): Slide => ({
  note: '❓ では、浮力の大きさは何で決まるの？ 物体が押しのけた水の重さです（アルキメデスの原理）。もし物体の場所が「水のかたまり」だったら、そこは浮いたまま止まっていたはずです。その水を、まわりの水が同じ力で支えています。物体に入れかえても、まわりの水が支える力は変わらないので、浮力 ＝ 押しのけた水の重さです。',
  add: F([...tankE(), ...floatObj(1), bx(120, 62, 80, 56, '押しのけた水', C.blue, BLUE_T, 10), ar(214, 112, 214, 76, C.blue), lb(220, 74, '浮力', 11, C.blue, 'start', true)], [eb(152, '浮力 ＝ 押しのけた水の重さ', C.blue, FILL.blue, 15), tx(206, 'アルキメデスの原理', 12)]),
});
const sW = (): Slide => ({
  note: '❓ 押しのけた水の重さは、どう求めるの？ 水の密度は 1g/cm³、つまり水 1cm³ は 1g です。押しのけた水が S cm³ なら、その重さは S g になります。体積の数字が、そのまま重さ（g）の数字になります。',
  add: F([bx(24, 22, 90, 38, '水 1cm³', C.blue, FILL.blue, 13), lb(134, 46, '＝', 20, C.ink, 'middle', true), bx(154, 22, 70, 38, '1g', C.blue, FILL.blue, 15),
    bx(24, 74, 90, 38, '水 S cm³', C.blue, FILL.blue, 13), lb(134, 98, '＝', 20, C.ink, 'middle', true), bx(154, 74, 70, 38, 'S g', C.blue, FILL.blue, 15), lb(268, 66, '×S', 13, C.red, 'middle', true)],
    [eb(152, '押しのけた水 S cm³ → S g', C.blue, FILL.blue, 15), tx(206, '体積の数字が、重さ(g)の数字', 12)]),
});
// 10こに分けた帯
const tenBlocks = (nSub: number, y = 30, subText?: string, outText?: string): E[] => {
  const out: E[] = [];
  for (let i = 0; i < 10; i++) out.push(bx(20 + i * 28, y, 26, 34, i < nSub ? subText : outText, i < nSub ? C.blue : C.main, i < nSub ? FILL.blue : FILL.yellow, 10));
  return out;
};
const balBoxes = (a: string, b: string, cc: string): E[] => [
  bx(10, 22, 120, 40, a, C.red, FILL.red, 13), lb(146, 48, '＝', 20, C.ink, 'middle', true), bx(162, 22, 148, 40, b, C.blue, FILL.blue, 13),
  ar(236, 64, 236, 84, C.gray), bx(150, 88, 160, 30, cc, C.green, FILL.green, 14),
];

// ── ohori_rika_12：質量540g・体積600cm³、水面から出る体積 ──
const fl_ohori12: Figure = show([
  { note: '質量 540g、体積 600cm³ の物体を水に浮かべました。水の密度は 1g/cm³ です。水面から出ている部分の体積を求めます。',
    add: F([...tankE(), ...floatObj(0.9, '水の中'), lb(212, 50, '水面上の部分は？', 11, C.red, 'start', true), lb(160, 16, '質量 540g ／ 体積 600cm³', 12, C.ink, 'middle', true)], [eb(152, '質量540g ／ 体積600cm³', C.blue, FILL.blue, 13), tx(206, '水面から出ている部分は何cm³？', 12)]) },
  sB(0.9), sA(0.9), sW(),
  { note: '浮いて止まっているので、重さ ＝ 浮力 です。物体の重さは 540g、浮力は押しのけた水の重さ S g なので、S ＝ 540。水の中にある部分の体積は 540cm³ です。',
    add: F(balBoxes('物体の重さ 540g', '押しのけた水 S g', 'S ＝ 540cm³'), [eb(152, '水の中の体積 ＝ 540cm³', C.green, FILL.green, 16), tx(206, '重さ ＝ 浮力 ＝ 押しのけた水の重さ', 12)]) },
  { note: '❓ なぜ、全体から引くの？ 物体は「水の中の部分」と「水面より上の部分」の2つに分かれます。全体が 600cm³ で、水の中が 540cm³ なので、のこりが水面の上に出ています。600 − 540 ＝ 60cm³。',
    add: F([lb(160, 20, '全体 600cm³', 13, C.gray, 'middle', true), bx(20, 28, 252, 40, '水の中 540cm³', C.blue, FILL.blue, 14), bx(272, 28, 28, 40, '？', C.red, FILL.yellow, 14), lb(286, 84, '出る', 10, C.red, 'middle', true), lb(146, 84, '水面の下', 11, C.blue, 'middle', true)], [eb(152, '600 − 540 ＝ 60cm³', C.green, FILL.green, 17), tx(206, '全体 − 水の中の部分', 12)]) },
  { note: '❓ なぜ、一部が水面から出るの？ もし全部を水に沈めると、押しのける水は 600cm³ ぶんで、浮力は 600g分です。重さ 540g分より大きいので、物体は上へ押し上げられます。上がって出るほど、押しのける水が減って浮力が小さくなり、540g分と等しくなったところで止まります。',
    add: F([...tankE(), ...floatObj(1), ...forceArrows(27, 30, '重さ540', '浮力600')], [eb(152, '浮力600 ＞ 重さ540 → 浮き上がる', C.red, FILL.red, 14), tx(206, '出るほど浮力が減り、540で止まる', 12)]) },
  { note: '別の見方で確かめます。密度は 540÷600＝0.9g/cm³。水の密度 1 の 0.9倍なので、体積の 0.9（90%）が沈みます。600×0.9＝540cm³ が水の中、のこり 10% の 60cm³ が水面の上。同じ結果です。',
    add: F([...tenBlocks(9, 24, '60', '60'), lb(160, 84, '600cm³ を10こに分けた（1こ＝60cm³）', 12, C.gray, 'middle', true), lb(146, 104, '水の中 9こ', 12, C.blue, 'middle', true), lb(286, 104, '出る1こ', 10, C.red, 'middle', true)], [tx(170, '出ているのは 1こぶん ＝ 60cm³', 14, C.green, true)]) },
  { note: 'よくあるまちがいです。水の中の体積 540cm³ を答えにしてしまう。聞かれているのは「水面から出ている部分」なので、全体から水の中の部分を引いた 60cm³ です。',
    add: F([eb(14, '× 540cm³（これは水の中の部分）', C.red, FILL.red, 15, 34), eb(60, '× 浮力や重さの値をそのまま答える', C.red, FILL.red, 14, 34), eb(106, '○ 600 − 540 ＝ 60cm³（水面の上）', C.green, FILL.green, 14, 34)], [tx(180, '何を聞かれているか、最後に確かめる', 13, C.green, true)]) },
  { note: '答えは 60cm³ です。重さ＝浮力から水の中の体積 540cm³ を出し、全体 600cm³ から引きました。',
    add: F([...tankE(), ...floatObj(0.9, '540cm³'), lb(212, 50, '出る 60cm³', 11, C.red, 'start', true)], [eb(152, '答え　60cm³', C.green, FILL.green, 18), tx(206, '600 − 540 ＝ 60cm³', 13)]) },
], '浮力：水面から出る部分の体積');

// ── kasei_rika_01：体積120cm³・質量84g、水に沈む部分 ──
const fl_kasei01: Figure = show([
  { note: '体積 120cm³、質量 84g の物体を水に浮かべたところ、一部が水中に沈んで静止しました。水の密度は 1g/cm³ です。水中に沈んでいる部分の体積を求めます。',
    add: F([...tankE(), ...floatObj(0.7, '沈む部分？'), lb(160, 16, '質量 84g ／ 体積 120cm³', 12, C.ink, 'middle', true)], [eb(152, '質量84g ／ 体積120cm³', C.blue, FILL.blue, 13), tx(206, '水中に沈む部分は何cm³？', 12)]) },
  sB(0.7), sA(0.7), sW(),
  { note: '浮いて止まっているので、重さ ＝ 浮力 です。物体の重さは 84g、浮力は押しのけた水の重さ S g なので、S ＝ 84。押しのけた水は 84cm³、つまり水に沈んでいる部分は 84cm³ です。',
    add: F(balBoxes('物体の重さ 84g', '押しのけた水 S g', 'S ＝ 84cm³'), [eb(152, '沈んでいる部分 ＝ 84cm³', C.green, FILL.green, 16), tx(206, '水1cm³は1g → 84g は 84cm³', 12)]) },
  { note: '❓ この答えは、ありえる大きさなの？ 沈んでいる部分は、物体の全体（120cm³）より大きくなれません。84cm³ は 120cm³ より小さいので、矛盾しません。もし 120cm³ より大きくなるなら、その物体は浮かず、全部沈みます。',
    add: F([lb(160, 20, '全体 120cm³', 13, C.gray, 'middle', true), bx(20, 28, 196, 40, '沈む 84cm³', C.blue, FILL.blue, 14), bx(216, 28, 84, 40, '出る', C.main, FILL.yellow, 14)], [eb(152, '84 ＜ 120 → 浮いてよい', C.green, FILL.green, 16), tx(206, '沈む体積は全体をこえない', 12)]) },
  { note: '別の見方で確かめます。密度は 84÷120＝0.7g/cm³。水の 0.7倍の重さなので、体積の 0.7（70%）が沈みます。120×0.7＝84cm³ で、さきほどと同じです。',
    add: F([...tenBlocks(7, 24, '12', '12'), lb(160, 84, '120cm³ を10こに分けた（1こ＝12cm³）', 12, C.gray, 'middle', true), lb(132, 104, '沈む 7こ', 12, C.blue, 'middle', true), lb(272, 104, '出る 3こ', 11, C.main, 'middle', true)], [tx(170, '12 × 7 ＝ 84cm³', 14, C.green, true)]) },
  { note: '水面から出ている部分も求めておきます。全体 120cm³ から 84cm³ を引くと 36cm³。沈む 84 と出る 36 を足して 120 にもどるので、計算は合っています。',
    add: F([...tankE(), ...floatObj(0.7, '84cm³'), lb(212, 50, '出る 36cm³', 11, C.main, 'start', true)], [eb(152, '84 ＋ 36 ＝ 120cm³ ✓', C.green, FILL.green, 16), tx(206, '合計が全体の体積にもどる', 12)]) },
  { note: 'よくあるまちがいです。物体の全体の体積 120cm³ や、水面から出る 36cm³ を答えにしてしまう。聞かれているのは「水中に沈んでいる部分」です。',
    add: F([eb(14, '× 120cm³（これは全体の体積）', C.red, FILL.red, 15, 34), eb(60, '× 36cm³（これは出ている部分）', C.red, FILL.red, 15, 34), eb(106, '○ 84cm³（水中の部分）', C.green, FILL.green, 15, 34)], [tx(180, '「どの部分か」を最後に確かめる', 13, C.green, true)]) },
  { note: '答えは 84cm³ です。重さ 84g ＝ 浮力 ＝ 押しのけた水 84g、水 1cm³ は 1g なので 84cm³ と求めました。',
    add: F([...tankE(), ...floatObj(0.7, '84cm³'), ...forceArrows(33, 33, '84g分', '84g分')], [eb(152, '答え　84cm³', C.green, FILL.green, 18), tx(206, '重さ84g ＝ 浮力84g分', 13)]) },
], '浮力：水に沈む部分の体積');

// ── 密度 0.8 の物体が水に沈む割合（todaiji_rika_05 / koyo_rika_11）──
const fl_dens80: Figure = show([
  { note: '密度 0.8g/cm³ の物体を、密度 1g/cm³ の水に静かに浮かべます。物体の体積のうち、水の中に沈む部分の割合（%）を求めます。',
    add: F([...tankE(), ...floatObj(0.8, '沈む割合？'), lb(160, 16, '物体の密度 0.8g/cm³ ／ 水 1g/cm³', 12, C.ink, 'middle', true)], [eb(152, '密度 0.8 の物体を水に浮かべる', C.blue, FILL.blue, 14), tx(206, '水の中に沈む割合は何％？', 12)]) },
  sB(0.8), sA(0.8), sW(),
  { note: '❓ 体積がわからないのに、求められるの？ 割合は、物体の大きさによって変わりません。そこで、物体の体積を 100cm³ と決めて考えます（200cm³ にしても答えは同じになります）。',
    add: F([bx(70, 22, 180, 56, '物体の体積を 100cm³ とする', C.main, FILL.warm, 13), lb(160, 100, '（200cm³ でも 50cm³ でも 割合は同じ）', 12, C.gray, 'middle', true)], [tx(170, '割合を知りたいだけなので 100 で考える', 13, C.purple, true)]) },
  { note: '物体の質量を求めます。密度 0.8g/cm³ は「1cm³ あたり 0.8g」という意味なので、100cm³ なら 0.8×100 ＝ 80g です。',
    add: F([bx(10, 30, 120, 44, '1cm³あたり 0.8g', C.blue, FILL.blue, 13), lb(148, 56, '×', 20, C.ink, 'middle', true), bx(166, 30, 144, 44, '物体 100cm³', C.main, FILL.warm, 13), ar(160, 78, 160, 100, C.gray), bx(100, 102, 120, 30, '質量 80g', C.green, FILL.green, 14)], [eb(152, '質量 ＝ 0.8 × 100 ＝ 80g', C.green, FILL.green, 16), tx(206, '密度 × 体積 ＝ 質量', 12)]) },
  { note: '浮いて止まっているので、重さ ＝ 浮力。重さは 80g、浮力は押しのけた水の重さ S g なので S ＝ 80。水 1cm³ は 1g だから、押しのけた水は 80cm³、つまり 80cm³ が水の中に沈みます。',
    add: F(balBoxes('物体の重さ 80g', '押しのけた水 S g', 'S ＝ 80cm³'), [eb(152, '水の中 ＝ 80cm³', C.green, FILL.green, 16), tx(206, '水1cm³は1g → 80g は 80cm³', 12)]) },
  { note: '割合は 80 ÷ 100 ＝ 0.8、つまり 80% です。物体 100cm³ のうち、80cm³ が水の中、のこり 20cm³ が水面の上です。',
    add: F([...tenBlocks(8, 24, '10', '10'), lb(160, 84, '100cm³ を10こに分けた（1こ＝10cm³）', 12, C.gray, 'middle', true), lb(132, 104, '沈む 8こ', 12, C.blue, 'middle', true), lb(272, 104, '出る 2こ', 11, C.main, 'middle', true)], [eb(152, '80 ÷ 100 ＝ 0.8 ＝ 80%', C.green, FILL.green, 17), tx(206, '全体のうち 8こぶん', 12)]) },
  { note: '❓ なぜ「密度の比」が、そのまま沈む割合になるの？ 体積を 200cm³ にしても、質量は 160g、押しのけた水は 160cm³ で、160÷200＝0.8 と同じになります。体積が何倍になっても、重さも押しのけた水も同じ倍になるので、割合は変わりません。',
    add: F([eb(14, '100cm³ → 80g → 水80cm³ → 80%', C.blue, FILL.blue, 14, 34), eb(60, '200cm³ → 160g → 水160cm³ → 80%', C.purple, FILL.purple, 14, 34), eb(106, '割合 ＝ 0.8 ÷ 1 ＝ 物体の密度 ÷ 水の密度', C.green, FILL.green, 12, 34)], [tx(180, '大きさを変えても 80% のまま', 13, C.green, true)]) },
  { note: '答えは 80% です。密度の比 0.8÷1＝0.8 が、そのまま「水に沈む体積の割合」になります。',
    add: F([...tankE(), ...floatObj(0.8, '80%')], [eb(152, '答え　80%', C.green, FILL.green, 18), tx(206, '沈む割合 ＝ 物体の密度 ÷ 水の密度', 12)]) },
], '浮力：密度0.8の物体が沈む割合');

// ── keio_rika_11：1辺10cmの立方体（密度0.8）の浮力 ──
const cubeFig = (): E[] => [bx(120, 14, 80, 50, undefined, C.main, FILL.warm), lb(160, 40, '1辺 10cm', 12, C.ink, 'middle', true)];
const fl_keio11: Figure = show([
  { note: '1辺 10cm の立方体（密度 0.8g/cm³）を水に静かに浮かべたところ、静止しました。水の密度は 1g/cm³、100g の物体にはたらく重力を 1N とします。この立方体にはたらく浮力の大きさを求めます。',
    add: F([...tankE(), ...floatObj(0.8, '立方体'), lb(160, 16, '1辺10cm ／ 密度0.8g/cm³', 12, C.ink, 'middle', true)], [eb(152, '1辺10cm ／ 密度0.8g/cm³', C.blue, FILL.blue, 13), tx(206, '浮力は何N？', 12)]) },
  sB(0.8), sA(0.8),
  { note: 'まず立方体の体積です。体積 ＝ たて × よこ × 高さ ＝ 10 × 10 × 10 ＝ 1000cm³。1cm³ の小さな立方体が 1000こ つまっている、という意味です。',
    add: F([...cubeFig(), lb(160, 96, '10 × 10 × 10 ＝ 1000cm³', 14, C.green, 'middle', true)], [eb(152, '体積 ＝ 1000cm³', C.green, FILL.green, 17), tx(206, 'たて × よこ × 高さ', 12)]) },
  { note: '❓ なぜ、質量は 0.8 × 1000 で出せるの？ 密度 0.8g/cm³ は「1cm³ あたり 0.8g」です。1cm³ が 1000こ あるので、0.8g を 1000こ 集めて 800g になります。',
    add: F([bx(20, 24, 120, 40, '1cm³ あたり 0.8g', C.blue, FILL.blue, 13), lb(158, 50, '× 1000こ', 13, C.red, 'middle', true), bx(186, 24, 114, 40, '質量 800g', C.green, FILL.green, 15)], [eb(152, '0.8 × 1000 ＝ 800g', C.green, FILL.green, 17), tx(206, '密度 × 体積 ＝ 質量', 12)]) },
  { note: '浮いて止まっているので、浮力 ＝ 物体の重さ です。物体の質量は 800g なので、浮力は「800g の物体にはたらく重力」と同じ大きさです。',
    add: F([...tankE(), ...floatObj(0.8, '800g'), ...forceArrows(36, 36, '重さ800g分', '浮力')], [eb(152, '浮力 ＝ 800g分の重さ', C.purple, FILL.purple, 16), tx(206, '浮いて止まっている → 重さ ＝ 浮力', 12)]) },
  { note: '❓ 800g分の力は何Nなの？ 問題で「100g の物体にはたらく重力が 1N」と決められています。800g は 100g が 8こ ぶんなので、800 ÷ 100 ＝ 8N です。',
    add: F([...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => bx(16 + i * 35, 34, 31, 34, '1N', C.red, FILL.red, 10)), lb(160, 90, '100g ごとに 1N ／ 800g は 8こぶん', 12, C.gray, 'middle', true)], [eb(152, '800 ÷ 100 ＝ 8N', C.green, FILL.green, 17), tx(206, '100gで1N', 12)]) },
  { note: '別の方法で確かめます。押しのけた水は 800g、つまり 800cm³。立方体の底面積は 10×10＝100cm² なので、沈んでいる深さは 800÷100＝8cm。立方体の高さ 10cm のうち 8cm が水中で、浮力は押しのけた水 800g 分 ＝ 8N。同じ結果です。',
    add: F([...tankE(), bx(120, 14, 80, 48, undefined, C.main, FILL.yellow), bx(120, 62, 80, 48, '水中 8cm', C.main, '#FDE68A', 11), lb(212, 40, '出る 2cm', 11, C.main, 'start', true)], [eb(152, '深さ 800 ÷ 100 ＝ 8cm', C.blue, FILL.blue, 15), tx(206, '水中 8cm → 押しのけた水 800g分 → 8N', 12)]) },
  { note: 'よくあるまちがいです。立方体の体積 1000cm³ を全部水に沈めたときの浮力 10N を答えにしてしまう。この立方体は浮いているので、沈むのは 8割だけで、浮力は重さと同じ 8N です。',
    add: F([eb(14, '× 1000cm³ → 10N（全部沈めた場合）', C.red, FILL.red, 14, 34), eb(60, '× 浮いているのに全部沈むと考える', C.red, FILL.red, 14, 34), eb(106, '○ 浮いている → 浮力 ＝ 重さ ＝ 8N', C.green, FILL.green, 14, 34)], [tx(180, '浮いているときは重さと等しい', 13, C.green, true)]) },
  { note: '答えは 8N です。体積 1000cm³、質量 800g を求め、浮力 ＝ 重さ から 800g分 ＝ 8N としました。',
    add: F([...tankE(), ...floatObj(0.8, '800g'), ...forceArrows(36, 36, '8N', '8N')], [eb(152, '答え　8N', C.green, FILL.green, 18), tx(206, '800 ÷ 100 ＝ 8N', 13)]) },
], '浮力：立方体（密度0.8）の浮力');

// ── kasei_rika_09：底面積20cm²・高さ15cm・密度0.8 の円柱、水面から出る高さ ──
const cylFig = (hs: number): E[] => [...tankE(), bx(120, 62 - (56 - hs), 80, 56 - hs, undefined, C.main, FILL.yellow), bx(120, 62, 80, hs, undefined, C.main, '#FDE68A')];
const fl_kasei09: Figure = show([
  { note: '底面積 20cm²、高さ 15cm、密度 0.8g/cm³ の円柱を水に浮かべました。水の密度は 1g/cm³ です。水面から出ている部分の高さを求めます。',
    add: F([...tankE(), ...floatObj(0.8, '高さ15cm'), lb(160, 16, '底面積20cm² ／ 高さ15cm ／ 密度0.8', 12, C.ink, 'middle', true), lb(212, 50, '出る高さは？', 11, C.red, 'start', true)], [eb(152, '底面積20cm² ／ 高さ15cm', C.blue, FILL.blue, 13), tx(206, '水面から出る高さは何cm？', 12)]) },
  sB(0.8), sA(0.8),
  { note: '物体の体積と質量を求めます。体積 ＝ 底面積 × 高さ ＝ 20 × 15 ＝ 300cm³。密度 0.8g/cm³ は「1cm³ あたり 0.8g」なので、質量は 0.8 × 300 ＝ 240g です。',
    add: F([bx(20, 24, 130, 44, '体積 20×15 ＝ 300cm³', C.blue, FILL.blue, 12), ar(155, 46, 175, 46, C.gray), bx(180, 24, 120, 44, '質量 0.8×300 ＝ 240g', C.green, FILL.green, 12)], [eb(152, '240g の物体', C.green, FILL.green, 17), tx(206, '体積 ＝ 底面積 × 高さ、質量 ＝ 密度 × 体積', 11)]) },
  { note: '浮いて止まっているので、重さ ＝ 浮力。重さは 240g なので、押しのけた水も 240g。水 1cm³ は 1g なので、押しのけた水の体積（水に沈んでいる部分の体積）は 240cm³ です。',
    add: F(balBoxes('物体の重さ 240g', '押しのけた水 S g', 'S ＝ 240cm³'), [eb(152, '水に沈む体積 ＝ 240cm³', C.green, FILL.green, 16), tx(206, '水1cm³は1g → 240g は 240cm³', 12)]) },
  { note: '❓ 体積から高さは、どう出すの？ 円柱の体積は 底面積 × 高さ です。だから 高さ ＝ 体積 ÷ 底面積。沈んでいる部分の高さは 240 ÷ 20 ＝ 12cm です。',
    add: F([...cylFig(48), lb(212, 94, '沈む高さ？', 11, C.blue, 'start', true), lb(160, 16, '沈む部分：底面積20cm²、体積240cm³', 12, C.ink, 'middle', true)], [eb(152, '240 ÷ 20 ＝ 12cm', C.blue, FILL.blue, 17), tx(206, '高さ ＝ 体積 ÷ 底面積', 12)]) },
  { note: '水面から出ている高さは、全体の高さ 15cm から、沈んでいる 12cm を引いて 15 − 12 ＝ 3cm です。',
    add: F([...cylFig(45), lb(212, 50, '出る 3cm', 11, C.main, 'start', true), lb(212, 92, '沈む 12cm', 11, C.blue, 'start', true)], [eb(152, '15 − 12 ＝ 3cm', C.green, FILL.green, 17), tx(206, '全体の高さ − 沈む高さ', 12)]) },
  { note: '別の方法で確かめます。柱の形なら、沈む割合は体積でも高さでも同じです。密度の比 0.8÷1＝0.8 なので、沈む高さは 15×0.8＝12cm。のこり 3cm が出ています。同じ結果です。',
    add: F([...tenBlocks(8, 24, '1.5', '1.5'), lb(160, 84, '高さ15cm を10こに分けた（1こ＝1.5cm）', 12, C.gray, 'middle', true), lb(132, 104, '沈む 8こ ＝ 12cm', 12, C.blue, 'middle', true), lb(272, 104, '出る 2こ', 11, C.main, 'middle', true)], [tx(170, '1.5 × 2 ＝ 3cm', 14, C.green, true)]) },
  { note: 'よくあるまちがいです。240cm³ という体積を、そのまま高さにしてしまう。体積と高さは別のもので、高さを出すには底面積 20cm² で割る必要があります。',
    add: F([eb(14, '× 240cm³ を高さとして答える', C.red, FILL.red, 15, 34), eb(60, '× 沈む高さ 12cm を答える', C.red, FILL.red, 15, 34), eb(106, '○ 15 − 12 ＝ 3cm（出る高さ）', C.green, FILL.green, 15, 34)], [tx(180, '体積 ÷ 底面積 ＝ 高さ、そして全体から引く', 12, C.green, true)]) },
  { note: '答えは 3cm です。質量 240g から、沈んでいる体積 240cm³ を出し、底面積で割って 12cm、全体 15cm から引きました。',
    add: F([...cylFig(45), lb(212, 50, '出る 3cm', 11, C.main, 'start', true)], [eb(152, '答え　3cm', C.green, FILL.green, 18), tx(206, '15 − 12 ＝ 3cm', 13)]) },
], '浮力：円柱が水面から出る高さ');

// ── nada_rika_12：1辺6cmの立方体が2cm出て浮く、物体の密度 ──
const fl_nada12: Figure = show([
  { note: '1辺 6cm の立方体が、水面から 2cm だけ出て（残り 4cm は水中）静止しています。水の密度は 1.0g/cm³ です。この物体の密度を求めます。',
    add: F([...tankE(), ...floatObj(0.667, '水中 4cm'), lb(212, 44, '出る 2cm', 11, C.main, 'start', true), lb(160, 16, '1辺 6cm の立方体', 12, C.ink, 'middle', true)], [eb(152, '1辺6cm ／ 水中4cm ／ 出る2cm', C.blue, FILL.blue, 13), tx(206, '物体の密度は？', 12)]) },
  sB(0.667), sA(0.667),
  { note: 'まず、水の中にある部分の体積です。底面は 6×6、沈んでいる深さは 4cm なので、6 × 6 × 4 ＝ 144cm³ です。これが押しのけた水の体積です。',
    add: F([...cylFig(37), lb(160, 16, '底面 6cm×6cm、沈む深さ 4cm', 12, C.ink, 'middle', true)], [eb(152, '6 × 6 × 4 ＝ 144cm³', C.blue, FILL.blue, 17), tx(206, '水中の体積 ＝ 押しのけた水の体積', 12)]) },
  { note: '水 1cm³ は 1g なので、押しのけた水 144cm³ の重さは 144g。浮力は 144g分の力です。',
    add: F(balBoxes('浮力 ？g分', '押しのけた水 144g', '浮力 ＝ 144g分'), [eb(152, '水 144cm³ ＝ 144g', C.blue, FILL.blue, 16), tx(206, '水1cm³は1g', 12)]) },
  { note: '浮いて止まっているので、重さ ＝ 浮力 です。浮力が 144g分なので、物体の質量は 144g とわかります。',
    add: F(balBoxes('物体の重さ 144g', '浮力 144g分', '質量 ＝ 144g'), [eb(152, '物体の質量 ＝ 144g', C.green, FILL.green, 16), tx(206, '重さ ＝ 浮力', 12)]) },
  { note: '物体全体の体積は 6 × 6 × 6 ＝ 216cm³ です。水の中の 144cm³ ではなく、水面から出ている部分もふくめた全体を使います。',
    add: F([bx(120, 14, 80, 54, undefined, C.main, FILL.warm), lb(160, 44, '6 × 6 × 6', 14, C.ink, 'middle', true), lb(160, 96, '216cm³（全体）', 14, C.green, 'middle', true)], [eb(152, '全体の体積 ＝ 216cm³', C.green, FILL.green, 16), tx(206, '出ている部分もふくめる', 12)]) },
  { note: '密度 ＝ 質量 ÷ 体積 ＝ 144 ÷ 216 ＝ 2/3 ≒ 0.67g/cm³ です。水より軽いので浮く、という結果とも合っています。',
    add: F([eb(24, '144 ÷ 216 ＝ 2/3', C.green, FILL.green, 20, 48), lb(160, 100, '≒ 0.67g/cm³（水の 1.0 より小さい → 浮く）', 12, C.gray, 'middle', true)], [eb(152, '密度 ≒ 0.67g/cm³', C.green, FILL.green, 17), tx(206, '質量 ÷ 全体の体積', 12)]) },
  { note: '別の見方で確かめます。高さ 6cm のうち 4cm が沈んでいるので、沈む割合は 4/6 ＝ 2/3。浮くとき「沈む割合 ＝ 物体の密度 ÷ 水の密度」なので、密度 ＝ 2/3 × 1.0 ＝ 2/3。同じ値です。',
    add: F([bx(20, 24, 187, 38, '水中 4cm', C.blue, FILL.blue, 13), bx(207, 24, 93, 38, '出る 2cm', C.main, FILL.yellow, 13), lb(160, 84, '沈む割合 4/6 ＝ 2/3', 13, C.gray, 'middle', true)], [eb(152, '2/3 × 1.0 ＝ 2/3 ✓', C.green, FILL.green, 16), tx(206, '密度の比 ＝ 沈む割合', 12)]) },
  { note: 'よくあるまちがいです。水の中の体積 144cm³ を物体全体の体積と思って 144÷144＝1 としてしまう。密度を求めるときの体積は、水面から出ている部分もふくめた全体（216cm³）です。',
    add: F([eb(14, '× 144 ÷ 144 ＝ 1（水中だけで計算）', C.red, FILL.red, 14, 34), eb(60, '× 4cm を高さとして 6×6×4 で割る', C.red, FILL.red, 14, 34), eb(106, '○ 質量 144g ÷ 全体 216cm³', C.green, FILL.green, 15, 34)], [tx(180, '体積は「全体」を使う', 13, C.green, true)]) },
  { note: '答えは 約 0.67g/cm³（2/3 g/cm³）です。押しのけた水から質量 144g を出し、全体の体積 216cm³ で割りました。',
    add: F([...tankE(), ...floatObj(0.667, '144g'), lb(212, 44, '出る 2cm', 11, C.main, 'start', true)], [eb(152, '答え　約0.67g/cm³', C.green, FILL.green, 17), tx(206, '144 ÷ 216 ＝ 2/3', 13)]) },
], '浮力：浮かんだ立方体の密度');

// ── meidai_rika_01：密度1.0の水、体積100cm³・質量80gの物体 ──
const fl_meidai01: Figure = show([
  { note: '水（密度 1.0g/cm³）に、体積 100cm³、質量 80g の物体を入れます。問1 浮くか沈むか、問2 完全に沈んだときの浮力、問3 浮いて止まったときに水中にある体積、の3つを考えます。',
    add: F([bx(60, 22, 90, 62, '物体', C.main, FILL.warm, 14), lb(105, 100, '100cm³ ／ 80g', 12, C.ink, 'middle', true), bx(180, 22, 90, 62, '水', C.blue, FILL.blue, 14), lb(225, 100, '密度 1.0g/cm³', 12, C.ink, 'middle', true)], [eb(152, '問1 浮く？　問2 浮力？　問3 水中の体積？', C.blue, FILL.blue, 12), tx(206, '3つの問いを順に考える', 12)]) },
  { note: '❓ なぜ、浮くか沈むかは重さの比べ方で決まるの？ 同じ体積 100cm³ で比べます。水 100cm³ は 100g、物体は 80g です。同じ大きさなら物体のほうが軽いので、水に浮きます。',
    add: F([bx(30, 24, 110, 56, '水 100cm³', C.blue, FILL.blue, 13), lb(85, 98, '100g', 14, C.blue, 'middle', true), bx(180, 24, 110, 56, '物体 100cm³', C.main, FILL.warm, 13), lb(235, 98, '80g', 14, C.red, 'middle', true), lb(160, 56, '＞', 22, C.ink, 'middle', true)], [eb(152, '80g ＜ 100g → 浮く', C.green, FILL.green, 17), tx(206, '同じ体積なら、軽いほうが浮く', 12)]) },
  { note: '別の言い方では、物体の密度は 80÷100＝0.8g/cm³ で、水の 1.0 より小さい。だから浮きます。問1の答えは「浮く。物体の密度（0.8）が水の密度（1.0）より小さいため」です。',
    add: F(dBars([['水', 1], ['物体', 0.8]], 150, 1), [eb(152, '0.8 ＜ 1.0 → 浮く', C.green, FILL.green, 17), tx(206, '問1：密度が水より小さいので浮く', 12)]) },
  sA2(),
  { note: '問2です。もし物体を完全に水に沈めたとすると、押しのける水の体積は物体全体の 100cm³ です。水 1cm³ は 1g なので、押しのけた水は 100g。浮力は 100g重（100g の水の重さ）です。',
    add: F([...tankE(), ...floatObj(1), ...forceArrows(40, 50, '重さ80', '浮力100')], [eb(152, '浮力 ＝ 100 × 1.0 ＝ 100g重', C.blue, FILL.blue, 15), tx(206, '完全に沈めたとき（問2）', 12)]) },
  { note: '❓ 浮力が重さより大きいと、どうなるの？ 浮力 100g重 が重さ 80g重 より大きいので、物体は上へ押し上げられます。上がって水面から出るほど、押しのける水が減り浮力も小さくなって、重さと等しくなったところで止まります。',
    add: F([bx(20, 14, 280, 28, '浮力 100 ＞ 重さ 80 → 上へ動く', C.red, FILL.red, 13), bx(20, 50, 280, 28, '水面から出るほど 浮力は小さくなる', C.purple, FILL.purple, 13), bx(20, 86, 280, 28, '浮力 ＝ 重さ になったところで止まる', C.green, FILL.green, 13)], [tx(176, '完全には沈んでいられない', 13, C.gray, true)]) },
  sB(0.8),
  { note: '問3です。浮いて止まっているとき、浮力 ＝ 重さ ＝ 80g重。浮力は押しのけた水の重さなので、押しのけた水は 80g。水 1cm³ は 1g なので、水中にある体積は 80cm³ です。',
    add: F(balBoxes('浮力 ＝ 重さ 80g重', '押しのけた水 V×1.0 g', 'V ＝ 80cm³'), [eb(152, '水中の体積 ＝ 80cm³', C.green, FILL.green, 16), tx(206, '問3：V×1.0 ＝ 80', 12)]) },
  { note: '確かめ（検算）をします。水中 80cm³ は全体 100cm³ より小さいので矛盾しません。水面の上は 100−80＝20cm³ です。密度 0.8 は「体積の 80% が沈む」という意味とも一致します。',
    add: F([...tankE(), ...floatObj(0.8, '80cm³'), lb(212, 50, '出る 20cm³', 11, C.main, 'start', true)], [eb(152, '80 ＜ 100 ✓　沈む割合 80%', C.green, FILL.green, 15), tx(206, '密度 0.8 ＝ 80% が沈む', 12)]) },
  { note: '答えです。問1：浮く（密度 0.8 ＜ 1.0）。問2：100g重。問3：80cm³。',
    add: F([eb(14, '問1　浮く（0.8 ＜ 1.0）', C.green, FILL.green, 15, 34), eb(60, '問2　100g重（完全に沈めたとき）', C.blue, FILL.blue, 15, 34), eb(106, '問3　80cm³（浮いて止まったとき）', C.purple, FILL.purple, 15, 34)], [tx(180, '浮いて止まる → 浮力 ＝ 重さ', 13, C.gray, true)]) },
], '浮力：3つの問いを順に考える');

// ═════════ 浮力（完全に沈める・ばねばかり） ═════════
const subPress = (): E[] => [
  bx(30, 30, 260, 102, undefined, C.blue, FILL.blue), ln(30, 30, 290, 30, C.blue, false, 2),
  bx(120, 58, 80, 32, '物体', C.main, '#FDE68A', 12),
  ar(145, 38, 145, 56, C.red), ar(175, 38, 175, 56, C.red), ar(145, 128, 145, 92, C.blue), ar(175, 128, 175, 92, C.blue),
  lb(196, 48, '上から押す力（小）', 10, C.red, 'start', true), lb(196, 114, '下から押す力（大）', 10, C.blue, 'start', true),
];
const sPress = (): Slide => ({
  note: '❓ そもそも、なぜ水の中で浮力がはたらくの？ 水は深いところほど、まわりから押す力（水圧）が大きくなります。だから物体の下の面を押し上げる力のほうが、上の面を押し下げる力より大きくなります。この差が、上向きの力＝浮力です。',
  add: F(subPress(), [eb(152, '深いほど水の押す力が大きい', C.blue, FILL.blue, 15), tx(206, '下から押す力 ＞ 上から押す力 → 浮力', 12)]),
});
const forceBars = (s: number, sl: string, b: number, bl: string, w: number, wl: string): E[] => [
  lb(20, 16, '上向きの力', 11, C.gray, 'start', true),
  bx(20, 26, (270 * s) / w, 32, sl, C.green, FILL.green, 12), bx(20 + (270 * s) / w, 26, (270 * b) / w, 32, bl, C.blue, FILL.blue, 12),
  lb(20, 76, '下向きの力', 11, C.gray, 'start', true),
  bx(20, 84, 270, 32, wl, C.red, FILL.red, 13),
];
const springFig = (reading: string, inWater: boolean, label: string, x = 160, drawWater = true, dy = 0): E[] => {
  const top = (inWater ? 74 : 56) + dy;
  const out: E[] = [];
  if (inWater && drawWater) out.push(bx(x - 100, 62, 200, 68, undefined, C.blue, FILL.blue), ln(x - 100, 62, x + 100, 62, C.blue, false, 2));
  out.push(ln(x, 30, x, top, C.gray, false, 2), bx(x - 22, 6, 44, 24, reading, C.ink, FILL.warm, 11), bx(x - 28, top, 56, 36, label, C.main, FILL.warm, 10));
  return out;
};
const fiveBlocks = (n: number, t: string, col: string, fill: string, y = 34): E[] =>
  Array.from({ length: n }, (_, i) => bx(16 + i * (288 / n), y, 288 / n - 4, 34, t, col, fill, 10));

// ── ohori_rika_06：体積300cm³を完全に沈めたときの浮力 ──
const sub_ohori06: Figure = show([
  { note: '体積 300cm³ の物体を、水中に完全に沈めました。水の密度は 1g/cm³、質量 100g の物体にはたらく重力の大きさを 1N とします。この物体が受ける浮力の大きさを求めます。',
    add: F([...tankE(), ...floatObj(1, '300cm³'), lb(160, 16, '体積 300cm³ を 完全に沈める', 12, C.ink, 'middle', true)], [eb(152, '体積 300cm³ を水中に完全に沈める', C.blue, FILL.blue, 13), tx(206, '浮力は何N？', 12)]) },
  sPress(), sA2(),
  { note: '完全に沈めると、物体が水の中の場所をぜんぶ占めます。だから押しのけた水の体積は、物体の体積とまったく同じ 300cm³ です。',
    add: F([bx(20, 30, 120, 50, '物体 300cm³', C.main, FILL.warm, 14), ar(146, 55, 174, 55, C.gray), bx(180, 30, 120, 50, '押しのけた水 300cm³', C.blue, FILL.blue, 12), lb(160, 104, '全部沈む → 同じ体積', 13, C.purple, 'middle', true)], [eb(152, '押しのけた水 ＝ 300cm³', C.blue, FILL.blue, 16), tx(206, '完全に沈むので、物体の体積と同じ', 12)]) },
  { note: '水は 1cm³ で 1g です。押しのけた水 300cm³ の重さは 300g。浮力は「300g の水の重さ」と同じ大きさです。',
    add: F([bx(20, 30, 130, 50, '水 300cm³', C.blue, FILL.blue, 14), lb(165, 60, '＝', 20, C.ink, 'middle', true), bx(180, 30, 120, 50, '300g', C.blue, FILL.blue, 16), lb(160, 104, '水1cm³ は 1g', 13, C.gray, 'middle', true)], [eb(152, '300 × 1 ＝ 300g分', C.blue, FILL.blue, 16), tx(206, '浮力 ＝ 300g の水の重さ', 12)]) },
  { note: '❓ 300g分の力は、何Nなの？ 問題で「100g の物体にはたらく重力が 1N」と決められています。300g は 100g の 3こぶんなので、300 ÷ 100 × 1 ＝ 3N です。',
    add: F([...fiveBlocks(3, '100g → 1N', C.red, FILL.red), lb(160, 92, '100g ごとに 1N ／ 300g は 3こぶん', 12, C.gray, 'middle', true)], [eb(152, '300 ÷ 100 × 1 ＝ 3N', C.green, FILL.green, 17), tx(206, '100gで1N', 12)]) },
  { note: '❓ 物体の質量は関係ないの？ 関係ありません。浮力は押しのけた水の重さで決まり、それは物体の体積だけで決まります。同じ 300cm³ なら、重い鉄でも軽い木でも、完全に沈めたときの浮力は同じ 3N です。',
    add: F([bx(30, 20, 100, 56, '鉄（重い）', C.gray, FILL.gray, 13), lb(80, 92, '300cm³', 11, C.ink, 'middle', true), ar(80, 124, 80, 100, C.blue), lb(96, 120, '3N', 12, C.blue, 'start', true),
      bx(190, 20, 100, 56, '木（軽い）', C.main, FILL.warm, 13), lb(240, 92, '300cm³', 11, C.ink, 'middle', true), ar(240, 124, 240, 100, C.blue), lb(256, 120, '3N', 12, C.blue, 'start', true)], [tx(176, '体積が同じなら 浮力も同じ', 13, C.green, true)]) },
  { note: '確かめ（検算）をします。浮力 3N は、100g で 1N の換算で 300g分。これは押しのけた水 300g（300cm³）の重さと一致します。単位を逆にたどっても、もとにもどりました。',
    add: F([eb(20, '3N × 100 ＝ 300g分', C.blue, FILL.blue, 17, 38), eb(72, '水 300g ＝ 300cm³ ＝ 物体の体積 ✓', C.green, FILL.green, 15, 38)], [tx(170, 'N → g → cm³ と逆にたどる', 13, C.gray, true)]) },
  { note: 'よくあるまちがいです。物体の質量から浮力を求めようとしてしまう。この問題では質量は与えられていませんし、浮力は質量ではなく「押しのけた水の重さ」で決まります。',
    add: F([eb(14, '× 物体の質量から浮力を出す', C.red, FILL.red, 15, 34), eb(60, '× 体積 300 をそのまま N にする', C.red, FILL.red, 15, 34), eb(106, '○ 300cm³ → 300g → 3N', C.green, FILL.green, 15, 34)], [tx(180, '浮力は 押しのけた水の重さ', 13, C.green, true)]) },
  { note: '答えは 3N です。完全に沈めたので押しのけた水は 300cm³、その重さ 300g を 100g で 1N として 3N と求めました。',
    add: F([...tankE(), ...floatObj(1, '300cm³'), ar(214, 112, 214, 76, C.blue), lb(220, 74, '浮力 3N', 11, C.blue, 'start', true)], [eb(152, '答え　3N', C.green, FILL.green, 18), tx(206, '300 ÷ 100 ＝ 3N', 13)]) },
], '浮力：完全に沈めたときの浮力');

// ── tokai_rika_03：500cm³・700gを沈めたときの浮力と浮き沈み ──
const sunkObj = (): E[] => [...tankE(), bx(120, 84, 80, 46, '500cm³ 700g', C.main, '#FDE68A', 11)];
const sub_tokai03: Figure = show([
  { note: '体積 500cm³、質量 700g の物体を水中に完全に沈めました。水の密度は 1.0g/cm³、100g の物体にはたらく重力は 1N とします。浮力の大きさを求め、浮くか沈むかを理由とともに答えます。',
    add: F([...sunkObj(), lb(160, 16, '体積 500cm³ ／ 質量 700g', 12, C.ink, 'middle', true)], [eb(152, '500cm³ ／ 700g を水中に沈める', C.blue, FILL.blue, 14), tx(206, '浮力は？ 浮く？ 沈む？', 12)]) },
  sPress(), sA2(),
  { note: '完全に沈めたので、押しのけた水の体積は物体と同じ 500cm³。水 1cm³ は 1g なので、押しのけた水は 500g。100g で 1N なので、浮力は 500 ÷ 100 ＝ 5N です。',
    add: F([bx(10, 30, 130, 50, '水 500cm³ ＝ 500g', C.blue, FILL.blue, 13), ar(146, 55, 174, 55, C.gray), bx(180, 30, 130, 50, '500÷100 ＝ 5N', C.green, FILL.green, 14), lb(160, 104, '押しのけた水の重さ ＝ 浮力', 13, C.purple, 'middle', true)], [eb(152, '浮力 ＝ 5N', C.green, FILL.green, 18), tx(206, '500 ÷ 100 × 1 ＝ 5N', 12)]) },
  { note: '次に、物体の重さです。質量 700g は 100g の 7こぶんなので、700 ÷ 100 × 1 ＝ 7N。これが下向きの力です。',
    add: F([...fiveBlocks(7, '1N', C.red, FILL.red), lb(160, 92, '700g ＝ 100g × 7こ', 12, C.gray, 'middle', true)], [eb(152, '重さ ＝ 7N', C.red, FILL.red, 18), tx(206, '700 ÷ 100 × 1 ＝ 7N', 12)]) },
  { note: '❓ なぜ、重さと浮力を比べると浮くか沈むかが決まるの？ 物体には、下向きに重さ、上向きに浮力がはたらきます。大きいほうの向きに動き出すからです。浮力が大きければ浮き上がり、重さが大きければ沈みます。',
    add: F([...sunkObj(), ar(106, 84, 106, 126, C.red), lb(100, 82, '重さ 7N', 11, C.red, 'end', true), ar(214, 126, 214, 96, C.blue), lb(220, 82, '浮力 5N', 11, C.blue, 'start', true)], [eb(152, '下向き 7N ＞ 上向き 5N', C.purple, FILL.purple, 16), tx(206, '大きいほうの向きに動く', 12)]) },
  { note: '重さ 7N が浮力 5N より大きいので、差の 2N が下向きにあまり、物体は沈みます。浮力 5.0N。重さ 7.0N が浮力 5.0N より大きいため、沈みます。',
    add: F([lb(20, 16, '上向きの力', 11, C.gray, 'start', true), bx(20, 26, (270 * 5) / 7, 32, '浮力 5N', C.blue, FILL.blue, 12), bx(20 + (270 * 5) / 7, 26, (270 * 2) / 7, 32, '不足', C.red, FILL.yellow, 10), lb(20, 76, '下向きの力', 11, C.gray, 'start', true), bx(20, 84, 270, 32, '重さ 7N', C.red, FILL.red, 13)], [eb(152, '7 − 5 ＝ 2N が下向きにあまる', C.red, FILL.red, 15), tx(206, '→ 沈む', 13, C.red, true)]) },
  { note: '別の見方で確かめます。密度は 700÷500＝1.4g/cm³ で、水の 1.0g/cm³ より大きい。水より重い物質は沈むので、同じ結論になります。',
    add: F(dBars([['水', 1], ['物体', 1.4]], 120, 1), [eb(152, '1.4 ＞ 1.0 → 沈む', C.green, FILL.green, 17), tx(206, '密度でも 重さと浮力でも 同じ結論', 12)]) },
  { note: 'よくあるまちがいです。浮力を、物体自身の質量 700g から求めて 7N としてしまう。浮力は物体の質量ではなく、押しのけた水 500g の重さで決まります。',
    add: F([eb(14, '× 700g から浮力 7N を出す', C.red, FILL.red, 15, 34), eb(60, '× 重さと浮力が同じなので止まる', C.red, FILL.red, 14, 34), eb(106, '○ 浮力は 押しのけた水 500g から 5N', C.green, FILL.green, 14, 34)], [tx(180, '浮力 ＝ 押しのけた水の重さ', 13, C.green, true)]) },
  { note: '答えです。浮力は 5.0N。物体の重さ 7.0N が浮力 5.0N より大きいため、沈みます。',
    add: F([...sunkObj(), ar(106, 84, 106, 126, C.red), lb(100, 82, '7N', 11, C.red, 'end', true), ar(214, 126, 214, 96, C.blue), lb(220, 82, '5N', 11, C.blue, 'start', true)], [eb(152, '浮力 5.0N ／ 重さ 7.0N → 沈む', C.green, FILL.green, 15), tx(206, '重さ ＞ 浮力 だから沈む', 12)]) },
], '浮力：浮くか沈むかの判定');

// ── shitennoji_koko_rika_08：水中でばね1.8N、浮力を求める ──
const sub_shi08: Figure = show([
  { note: '質量 300g の物体を水中に完全に沈めたところ、ばねはかりは 1.8N を示しました。100g の物体にはたらく重力を 1N として、物体にはたらく浮力の大きさを求めます。',
    add: F([...springFig('1.8N', true, '300g')], [eb(152, '水中でばねはかり 1.8N ／ 質量 300g', C.blue, FILL.blue, 13), tx(206, '浮力は何N？', 12)]) },
  { note: 'まず空気中では、浮力がはたらかないので、ばねばかりは物体の重さをそのまま示します。300g の物体にはたらく重力は、100g で 1N なので、300 ÷ 100 × 1 ＝ 3N です。',
    add: F(springFig('3N', false, '300g'), [eb(152, '300 ÷ 100 × 1 ＝ 3N', C.red, FILL.red, 17), tx(206, '空気中の重さ', 12)]) },
  { note: '❓ 水中に入れると、なぜばねばかりの値が小さくなるの？ 水が物体を上向きに押し上げる（浮力）ので、ばねが引かなくてよい分が出るからです。ばねは、重さ 3N のうち、浮力に助けてもらった分をのぞいた 1.8N だけ引かれます。',
    add: F(springFig('1.8N', true, '300g'), [eb(152, '3N → 1.8N に減った', C.blue, FILL.blue, 16), tx(206, '減った分を、浮力が持ち上げている', 12)]) },
  { note: '❓ 浮力は、どうやって出すの？ 物体は水中で止まっているので、上向きの力の合計と下向きの力がつり合っています。上向きは「ばねが引く力 1.8N」と「浮力」、下向きは「重さ 3N」。1.8 ＋ 浮力 ＝ 3 です。',
    add: F(forceBars(1.8, 'ばね 1.8N', 1.2, '浮力 ？', 3, '重さ 3N'), [eb(152, '1.8 ＋ 浮力 ＝ 3', C.purple, FILL.purple, 17), tx(206, '上向き合計 ＝ 下向き', 12)]) },
  { note: '浮力 ＝ 3 − 1.8 ＝ 1.2N です。空気中の重さから、水中でのばねばかりの値を引けば、浮力になります。',
    add: F(forceBars(1.8, 'ばね 1.8N', 1.2, '浮力 1.2N', 3, '重さ 3N'), [eb(152, '3 − 1.8 ＝ 1.2N', C.green, FILL.green, 17), tx(206, '浮力 ＝ 空気中の重さ − 水中の値', 12)]) },
  { note: '確かめ（検算）をします。浮力 1.2N は、100g で 1N の換算で 120g分。浮力は押しのけた水の重さなので、押しのけた水は 120g、体積は 120cm³。これが物体の体積です。密度は 300÷120＝2.5g/cm³ で、水より大きいので、ばねで支えないと沈む。状況と合っています。',
    add: F([eb(14, '1.2N ＝ 120g分の水', C.blue, FILL.blue, 15, 34), eb(60, '水120g ＝ 120cm³ ＝ 物体の体積', C.blue, FILL.blue, 14, 34), eb(106, '300 ÷ 120 ＝ 2.5g/cm³ ＞ 1 → 沈む物体', C.green, FILL.green, 13, 34)], [tx(180, '浮力から物体の体積までたどれる', 13, C.gray, true)]) },
  { note: '別の確かめです。つり合いの式にもどすと、ばね 1.8N ＋ 浮力 1.2N ＝ 3.0N で、重さ 3N とぴったり一致します。',
    add: F(forceBars(1.8, 'ばね 1.8N', 1.2, '浮力 1.2N', 3, '重さ 3N'), [eb(152, '1.8 ＋ 1.2 ＝ 3.0N ✓', C.green, FILL.green, 17), tx(206, '上向き合計 ＝ 下向き', 12)]) },
  { note: 'よくあるまちがいです。ばねばかりの値 1.8N をそのまま浮力にしてしまう。1.8N は「浮力で軽くなったあとの値」で、浮力は軽くなった分（3−1.8）です。',
    add: F([eb(14, '× 1.8N が浮力（ばねの値のまま）', C.red, FILL.red, 15, 34), eb(60, '× 3N が浮力（空気中の重さのまま）', C.red, FILL.red, 15, 34), eb(106, '○ 浮力 ＝ 3 − 1.8 ＝ 1.2N', C.green, FILL.green, 15, 34)], [tx(180, '軽くなった分が浮力', 13, C.green, true)]) },
  { note: '❓ 物体を水中でもっと深く入れたら、浮力は変わるの？ 完全に沈んでいれば、押しのける水の体積は同じなので、浮力もばねの値も変わりません。浮力を決めるのは深さではなく、押しのけた水の量です。',
    add: F([bx(10, 62, 300, 68, undefined, C.blue, FILL.blue), ln(10, 62, 310, 62, C.blue, false, 2), ...springFig('1.8N', true, '浅め', 100, false), ...springFig('1.8N', true, '深め', 220, false, 16)], [eb(152, '深く入れても 1.8N のまま', C.blue, FILL.blue, 15), tx(206, '完全に沈めば 浮力は同じ', 12)]) },
  { note: '答えは 1.2N です。空気中の重さ 3N から、水中でのばねばかりの値 1.8N を引いて求めました。',
    add: F(forceBars(1.8, 'ばね 1.8N', 1.2, '浮力 1.2N', 3, '重さ 3N'), [eb(152, '答え　1.2N', C.green, FILL.green, 18), tx(206, '3 − 1.8 ＝ 1.2N', 13)]) },
], '浮力：ばねばかりの値から浮力');

// ── todaiji_rika_06：200cm³・300gを水中に沈めたときのばねばかりの値 ──
const sub_todai06: Figure = show([
  { note: '体積 200cm³、質量 300g の物体を、ばねばかりにつるして完全に水中に沈めました。水の密度は 1g/cm³、100g の物体にはたらく重力の大きさを 1N とします。ばねばかりの示す値を求めます。',
    add: F(springFig('？N', true, '物体'), [eb(152, '200cm³ ／ 300g を水中でつるす', C.blue, FILL.blue, 14), tx(206, 'ばねばかりの値は何N？', 12)]) },
  { note: '❓ ばねばかりの値は、何で決まるの？ 物体は水中で止まっているので、上向きの力（ばねが引く力 ＋ 浮力）と、下向きの力（重さ）がつり合っています。だから ばねの値 ＝ 重さ − 浮力 です。',
    add: F(forceBars(1, 'ばね ？', 2, '浮力', 3, '重さ'), [eb(152, 'ばねの値 ＝ 重さ − 浮力', C.purple, FILL.purple, 16), tx(206, '上向き合計 ＝ 下向き', 12)]) },
  { note: 'まず物体の重さです。質量 300g は、100g の 3こぶんなので、300 ÷ 100 × 1 ＝ 3N です。',
    add: F([...fiveBlocks(3, '1N', C.red, FILL.red), lb(160, 92, '300g ＝ 100g × 3こ', 12, C.gray, 'middle', true)], [eb(152, '重さ ＝ 3N', C.red, FILL.red, 18), tx(206, '300 ÷ 100 × 1 ＝ 3N', 12)]) },
  sA2(),
  { note: '完全に沈んでいるので、押しのけた水の体積は物体と同じ 200cm³。水 1cm³ は 1g なので、押しのけた水は 200g。100g で 1N だから、浮力は 200 ÷ 100 ＝ 2N です。',
    add: F([bx(10, 30, 130, 50, '水 200cm³ ＝ 200g', C.blue, FILL.blue, 13), ar(146, 55, 174, 55, C.gray), bx(180, 30, 130, 50, '200÷100 ＝ 2N', C.blue, FILL.blue, 14), lb(160, 104, '押しのけた水の重さ ＝ 浮力', 13, C.purple, 'middle', true)], [eb(152, '浮力 ＝ 2N', C.blue, FILL.blue, 18), tx(206, '200 ÷ 100 × 1 ＝ 2N', 12)]) },
  { note: 'ばねばかりの値 ＝ 重さ − 浮力 ＝ 3 − 2 ＝ 1N です。重さ 3N のうち 2N を浮力が支えてくれるので、ばねが引くのは 1N だけです。',
    add: F(forceBars(1, 'ばね 1N', 2, '浮力 2N', 3, '重さ 3N'), [eb(152, '3 − 2 ＝ 1N', C.green, FILL.green, 18), tx(206, '浮力が2N支えてくれる', 12)]) },
  { note: '空気中と水中を並べて見ます。空気中では 3N、水中では浮力 2N の助けで 1N に減ります。物体は水より重い（密度 300÷200＝1.5g/cm³）ので、浮き上がらず、ばねで 1N ぶん支える必要があります。',
    add: F([...springFig('3N', false, '空気中', 80), bx(150, 62, 160, 68, undefined, C.blue, FILL.blue), ln(150, 62, 310, 62, C.blue, false, 2), ...springFig('1N', true, '水中', 230, false)], [eb(152, '空気中 3N → 水中 1N', C.blue, FILL.blue, 16), tx(206, '浮力 2N ぶん 軽くなる', 12)]) },
  { note: '確かめ（検算）をします。つり合いの式にもどすと、ばね 1N ＋ 浮力 2N ＝ 3N で、重さ 3N とぴったり一致します。',
    add: F(forceBars(1, 'ばね 1N', 2, '浮力 2N', 3, '重さ 3N'), [eb(152, '1 ＋ 2 ＝ 3N ✓', C.green, FILL.green, 17), tx(206, '上向き合計 ＝ 下向き', 12)]) },
  { note: 'よくあるまちがいです。物体の重さ 3N をそのまま答えにしてしまう。水中では浮力がはたらくので、ばねばかりの値はその分だけ小さくなります。',
    add: F([eb(14, '× 3N（空気中の重さのまま）', C.red, FILL.red, 15, 34), eb(60, '× 2N（これは浮力）', C.red, FILL.red, 15, 34), eb(106, '○ 3 − 2 ＝ 1N（ばねの値）', C.green, FILL.green, 15, 34)], [tx(180, '水中では 浮力の分だけ軽い', 13, C.green, true)]) },
  { note: '答えは 1N です。重さ 3N から浮力 2N を引いて、ばねばかりの示す値を求めました。',
    add: F(springFig('1N', true, '物体'), [eb(152, '答え　1N', C.green, FILL.green, 18), tx(206, '3 − 2 ＝ 1N', 13)]) },
], '浮力：ばねばかりの示す値');

// ═════════ 地震の波 ═════════
const qFig = (P: number, S: number): E[] => [
  ci(30, 70, 10, undefined, C.red, FILL.red), lb(30, 92, '震源', 10, C.red, 'middle', true),
  bx(266, 56, 46, 28, '観測点', C.ink, FILL.warm, 10),
  ar(46, 56, 260, 56, C.blue), lb(150, 48, `P波 ${P}km/s`, 11, C.blue, 'middle', true),
  ar(46, 84, 260, 84, C.red), lb(150, 100, `S波 ${S}km/s`, 11, C.red, 'middle', true),
];
function quake(o: { P: number; S: number; gap: number; L: number; meidai?: boolean }): Figure {
  const { P, S, gap, L } = o;
  const tP = L / P, tS = L / S, per = tS - tP, n = gap / per, dist = n * L, perSec = L / per;
  const s: Slide[] = [];
  s.push({ note: `ある地点で、P波（伝わる速さ ${P}km/s）とS波（${S}km/s）の到達時刻の差（初期微動継続時間）が ${gap}秒でした。この地点の震源からの距離を求めます。`,
    add: F(qFig(P, S), [eb(152, `P波 ${P}km/s ／ S波 ${S}km/s ／ 差 ${gap}秒`, C.blue, FILL.blue, 13), tx(206, '震源からの距離は何km？', 12)]) });
  s.push({ note: `❓ なぜ、P波のほうが先に届くの？ P波のほうが速いからです。同じ1秒で、P波は ${P}km、S波は ${S}km しか進みません。先に届く小さなゆれが初期微動（P波）、あとから来る大きなゆれが主要動（S波）です。`,
    add: F([lb(20, 18, '1秒間に進む道のり', 12, C.gray, 'start', true), bx(20, 30, P * 28, 26, `P波 ${P}km`, C.blue, FILL.blue, 12), bx(20, 64, S * 28, 26, `S波 ${S}km`, C.red, FILL.red, 12), lb(20, 108, '同じ1秒でも P波のほうが遠くまで進む', 12, C.ink, 'start', true)], [eb(152, 'P波が先、S波があと', C.purple, FILL.purple, 16), tx(206, '速さがちがうから、到達にずれが出る', 12)]) });
  s.push({ note: `❓ では、なぜ到達時刻に差ができるの？ 同じ道のりでも、速さがちがえばかかる時間がちがうからです。${L}km を進むのに、P波は ${L}÷${P}＝${tP}秒、S波は ${L}÷${S}＝${tS}秒かかります。`,
    add: F([eb(14, `P波：${L}km ÷ ${P}km/s ＝ ${tP}秒`, C.blue, FILL.blue, 14, 34), eb(60, `S波：${L}km ÷ ${S}km/s ＝ ${tS}秒`, C.red, FILL.red, 14, 34), eb(106, `おくれ ＝ ${tS} − ${tP} ＝ ${per}秒`, C.purple, FILL.purple, 14, 34)], [tx(180, `${L}km進むあいだに、S波は ${per}秒おくれる`, 13, C.gray, true)]) });
  s.push({ note: `つまり「${L}km 進むごとに、S波が ${per}秒ずつおくれる」とわかります。この「${L}km で ${per}秒」が、距離と到達時刻の差をつなぐ基準になります。`,
    add: F(qFig(P, S).concat([bx(82, 108, 156, 26, `${L}km で ${per}秒おくれ`, C.purple, FILL.purple, 11)]), [eb(152, `${L}km ごとに ${per}秒おくれる`, C.purple, FILL.purple, 16), tx(206, 'これが基準の1セット', 12)]) });
  s.push({ note: '❓ 距離が2倍、3倍になったら、おくれはどうなるの？ 距離が2倍なら、P波の時間もS波の時間も2倍になります。だから差も2倍。距離が3倍なら差も3倍。距離とおくれの時間は比例します。',
    add: F([1, 2, 3].map((k, i) => eb(10 + i * 40, `${k * L}km：P ${k * tP}秒、S ${k * tS}秒 → おくれ ${k * per}秒`, [C.blue, C.green, C.purple][i], [FILL.blue, FILL.green, FILL.purple][i], 11, 34)).flat(), [tx(156, '距離が2倍 → おくれも2倍', 13, C.green, true), tx(184, '距離が3倍 → おくれも3倍（比例）', 13, C.green, true)]) },
  (() => {
    const blocks: E[] = Array.from({ length: n }, (_, i) => bx(16 + i * (288 / n), 28, 288 / n - 3, 28, `${L}`, C.blue, FILL.blue, n > 10 ? 9 : 10));
    return { note: `初期微動継続時間 ${gap}秒 は、${per}秒のおくれが ${n}回ぶんです。おくれ ${per}秒ごとに距離が ${L}km ふえるので、${L}km が ${n}回。距離は ${L} × ${n} ＝ ${dist}km です。`,
      add: F([...blocks, lb(160, 76, `1こ ＝ おくれ ${per}秒 ＝ ${L}km`, 12, C.gray, 'middle', true), lb(160, 98, `${n}こ ＝ ${gap}秒 ＝ ${dist}km`, 14, C.green, 'middle', true)], [eb(152, `${L} × ${n} ＝ ${dist}km`, C.green, FILL.green, 17), tx(206, `${gap}秒 ÷ ${per}秒 ＝ ${n}こぶん`, 12)]) } as Slide;
  })());
  s.push({ note: `震源から観測地点までの距離は ${dist}km です。${gap}秒÷${per}秒＝${n} で、${n}セットぶん離れていて、1セットが ${L}km です。`,
    add: F([...qFig(P, S), bx(112, 108, 96, 26, `距離 ${dist}km`, C.green, FILL.green, 13)], [eb(152, `距離 ＝ ${dist}km`, C.green, FILL.green, 18), tx(206, `1秒のおくれが ${perSec}km ぶん`, 12)]) });
  if (o.meidai) {
    s.push({ note: `問2です。このように、初期微動継続時間は震源からの距離に比例します。この関係を大森公式といいます。ここでは、初期微動継続時間1秒あたり ${perSec}km なので、距離 ＝ ${perSec} × 初期微動継続時間 と表せます。`,
      add: F([bx(20, 24, 280, 38, '初期微動継続時間は 震源距離に比例する', C.purple, FILL.purple, 13), ar(160, 66, 160, 84, C.gray), bx(20, 88, 280, 38, `距離 ＝ ${perSec} × 初期微動継続時間`, C.green, FILL.green, 14)], [eb(152, '名前：大森公式', C.purple, FILL.purple, 17), tx(206, '問2の答え', 12)]) });
    s.push({ note: `問3です。別の地点で初期微動継続時間が 15秒のとき、比例の関係を使って、距離 ＝ ${perSec} × 15 ＝ ${perSec * 15}km と求められます。もとの ${gap}秒 → ${dist}km と比べると、時間が 1.5倍なので距離も 1.5倍、${dist}×1.5＝${dist * 1.5}km で一致します。`,
      add: F([eb(14, `${gap}秒 → ${dist}km`, C.blue, FILL.blue, 15, 34), eb(60, `15秒 → ${perSec} × 15 ＝ ${perSec * 15}km`, C.green, FILL.green, 15, 34), eb(106, `${dist} × 1.5 ＝ ${dist * 1.5}km ✓ 一致`, C.purple, FILL.purple, 15, 34)], [tx(180, '時間が1.5倍 → 距離も1.5倍', 13, C.gray, true)]) });
  }
  s.push({ note: `確かめ（検算）をします。距離 ${dist}km のとき、P波は ${dist}÷${P}＝${dist / P}秒、S波は ${dist}÷${S}＝${dist / S}秒で届きます。差は ${dist / S}−${dist / P}＝${gap}秒。問題の値と一致しました。`,
    add: F([eb(14, `P波：${dist} ÷ ${P} ＝ ${dist / P}秒`, C.blue, FILL.blue, 15, 34), eb(60, `S波：${dist} ÷ ${S} ＝ ${dist / S}秒`, C.red, FILL.red, 15, 34), eb(106, `差 ${dist / S} − ${dist / P} ＝ ${gap}秒 ✓`, C.green, FILL.green, 15, 34)], [tx(180, '距離から時間を出して、逆にたどる', 13, C.gray, true)]) });
  s.push({ note: `よくあるまちがいです。速さの差 ${P}−${S}＝${P - S}km/s に ${gap}秒 をかけて ${(P - S) * gap}km としてしまう。P波とS波は同じ道のりを「別々の時間」で進むので、速さの差におくれ時間をかけても距離は出ません。道のり ÷ 速さ で、それぞれの時間を出して比べます。`,
    add: F([eb(14, `× ${P}−${S}＝${P - S}、${P - S} × ${gap} ＝ ${(P - S) * gap}km`, C.red, FILL.red, 14, 34), eb(60, '× 速さの差に おくれ時間をかける', C.red, FILL.red, 14, 34), eb(106, `○ ${L}km で ${per}秒 の比を使う`, C.green, FILL.green, 15, 34)], [tx(180, '時間は「道のり ÷ 速さ」で出す', 13, C.green, true)]) });
  s.push({ note: `答えは ${o.meidai ? `問1 ${dist}km、問2 大森公式、問3 ${perSec * 15}km` : `${dist}km`} です。`,
    add: F([...qFig(P, S), bx(112, 108, 96, 26, `${dist}km`, C.green, FILL.green, 13)], [eb(152, o.meidai ? `問1 ${dist}km／問2 大森公式／問3 ${perSec * 15}km` : `答え　${dist}km`, C.green, FILL.green, o.meidai ? 12 : 18), tx(206, `${L}km で ${per}秒おくれ → ${gap}秒で ${dist}km`, 12)]) });
  return show(s, `地震の波：P波${P}km/s・S波${S}km/s`);
}

// kasei_rika_11：x＝kt（k＝6）と P波の到達時間
const quakeK: Figure = (() => {
  const P = 5;
  const s: Slide[] = [
    { note: `ある地点の初期微動継続時間が 15秒でした。震源からの距離を x km、初期微動継続時間を t 秒とすると、x ＝ k × t（k ＝ 6）が成り立ちます。この地点の震源からの距離と、P波（速さ ${P}km/s）が届くまでにかかった時間を求めます。`,
      add: F(qFig(P, 0).map((e) => e).slice(0, 3).concat([ar(46, 70, 260, 70, C.blue), lb(150, 62, `P波 ${P}km/s`, 11, C.blue, 'middle', true), lb(150, 96, '初期微動継続時間 15秒', 12, C.ink, 'middle', true)]), [eb(152, 'x ＝ 6 × t ／ t ＝ 15秒 ／ P波 5km/s', C.blue, FILL.blue, 12), tx(206, '距離 x と、P波の到達時間は？', 12)]) },
    { note: '❓ なぜ、初期微動継続時間から震源までの距離がわかるの？ P波とS波は速さがちがうので、遠くまで進むほど、S波のおくれが大きくなります。おくれの時間がわかれば、逆に、どれだけ遠くから来たかがわかります。',
      add: F([bx(20, 16, 110, 34, '近い：おくれ 小', C.green, FILL.green, 12), bx(20, 60, 200, 34, '遠い：おくれ 大', C.red, FILL.red, 12), lb(160, 112, '遠いほど、おくれが大きい', 13, C.ink, 'middle', true)], [eb(152, '遠い → おくれが大きい', C.purple, FILL.purple, 16), tx(206, 'おくれ時間から距離がわかる', 12)]) },
    { note: '❓ なぜ、x ＝ k × t（比例）なの？ 距離が2倍になれば、P波もS波も進む時間が2倍になります。だから、おくれも2倍。距離とおくれの時間は比例するので、x ＝ k × t と表せます。',
      add: F([eb(10, '距離 1セット → おくれ 1秒', C.blue, FILL.blue, 13, 34), eb(54, '距離 2セット → おくれ 2秒', C.green, FILL.green, 13, 34), eb(98, '距離 3セット → おくれ 3秒', C.purple, FILL.purple, 13, 34)], [tx(170, '距離 ÷ おくれ ＝ いつも同じ（これが k）', 13, C.green, true)]) },
    { note: 'k ＝ 6 の意味を考えます。x ＝ 6 × t は、「初期微動継続時間が 1秒ふえるごとに、震源からの距離が 6km ふえる」という意味です。k は、おくれ 1秒あたりの距離です。',
      add: F([bx(20, 30, 120, 44, 'おくれ 1秒', C.red, FILL.red, 14), lb(158, 56, '→', 20, C.ink, 'middle', true), bx(176, 30, 124, 44, '距離 6km', C.blue, FILL.blue, 14), lb(160, 104, 'k ＝ 6（1秒あたり 6km）', 13, C.purple, 'middle', true)], [eb(152, 'おくれ 1秒 ＝ 6km', C.purple, FILL.purple, 17), tx(206, 'k は 1秒あたりの距離', 12)]) },
    { note: '初期微動継続時間 15秒は、1秒のおくれが 15回ぶんです。1回につき 6km なので、6km が 15回。距離は 6 × 15 ＝ 90km です。',
      add: F([...Array.from({ length: 15 }, (_, i) => bx(14 + i * 19.3, 30, 17, 28, i === 0 ? '6' : undefined, C.blue, FILL.blue, 9)), lb(160, 78, '1こ ＝ おくれ 1秒 ＝ 6km', 12, C.gray, 'middle', true), lb(160, 100, '15こ ＝ 15秒 ＝ 90km', 14, C.green, 'middle', true)], [eb(152, 'x ＝ 6 × 15 ＝ 90km', C.green, FILL.green, 17), tx(206, '震源までの距離', 12)]) },
    { note: '❓ つぎに、P波が届くまでの時間は、なぜ「距離 ÷ 速さ」で出るの？ 速さ 5km/s は「1秒で 5km 進む」という意味です。90km を 5km ずつに区切ると 18こ になるので、18秒かかります。',
      add: F([...Array.from({ length: 18 }, (_, i) => bx(14 + i * 16.2, 30, 14, 28, undefined, C.blue, FILL.blue)), lb(160, 78, '1こ ＝ 5km（1秒で進む道のり）', 12, C.gray, 'middle', true), lb(160, 100, '90km ÷ 5km ＝ 18こ ＝ 18秒', 14, C.green, 'middle', true)], [eb(152, '時間 ＝ 距離 ÷ 速さ', C.purple, FILL.purple, 16), tx(206, '速さ ＝ 1秒あたりの道のり', 12)]) },
    { note: 'P波が届くまでの時間は、90 ÷ 5 ＝ 18秒 です。',
      add: F([...qFig(P, 0).slice(0, 3), ar(46, 70, 260, 70, C.blue), lb(150, 62, 'P波 5km/s', 11, C.blue, 'middle', true), lb(150, 96, '90km ÷ 5km/s ＝ 18秒', 13, C.green, 'middle', true)], [eb(152, '90 ÷ 5 ＝ 18秒', C.green, FILL.green, 17), tx(206, 'P波が届くまでの時間', 12)]) },
    { note: '確かめ（検算）をします。5km/s で 18秒 進むと 5 × 18 ＝ 90km で、はじめの距離と一致します。逆にもどしても、距離 90km ＝ 6 × 15 が成り立ちます。',
      add: F([eb(14, '5 × 18 ＝ 90km ✓', C.green, FILL.green, 16, 34), eb(60, '6 × 15 ＝ 90km ✓', C.green, FILL.green, 16, 34), eb(106, '2つの道すじで 同じ 90km', C.purple, FILL.purple, 15, 34)], [tx(180, '道のり ＝ 速さ × 時間', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。P波の速さ 5km/s を使って k を求めようとしてしまう。k ＝ 6 は問題で最初から与えられています。P波の速さは、距離が出たあとで、到達時間を求めるときに使います。',
      add: F([eb(14, '× P波の速さ 5 で k を求める', C.red, FILL.red, 15, 34), eb(60, '× 15 × 5 ＝ 75km', C.red, FILL.red, 15, 34), eb(106, '○ 距離は 6×15、時間は 90÷5', C.green, FILL.green, 15, 34)], [tx(180, '使う順番：k → 距離 → P波の時間', 13, C.green, true)]) },
    { note: '答えは、震源からの距離 90km、P波が届くまでの時間 18秒 です。',
      add: F([...qFig(P, 0).slice(0, 3), ar(46, 70, 260, 70, C.blue), lb(150, 62, 'P波 5km/s', 11, C.blue, 'middle', true), lb(150, 96, '距離 90km ／ 18秒', 13, C.green, 'middle', true)], [eb(152, '答え　90km ／ 18秒', C.green, FILL.green, 17), tx(206, '6 × 15 ＝ 90、90 ÷ 5 ＝ 18', 12)]) },
  ];
  return show(s, '地震：x＝kt と P波の到達時間');
})();

// ═════════ てこ・斜面 ═════════
const leverFig = (rw: string): E[] => [
  ln(30, 70, 222, 70, C.ink, false, 4), pg([[150, 70], [138, 94], [162, 94]], C.gray, FILL.gray), lb(150, 108, '支点', 10, C.gray, 'middle'),
  ln(30, 70, 30, 80, C.gray, false, 2), bx(12, 80, 36, 24, '30g', C.red, FILL.red, 12),
  ln(222, 70, 222, 80, C.gray, false, 2), bx(204, 80, 36, 24, rw, C.blue, FILL.blue, 12),
  lb(90, 58, '20cm', 11, C.ink, 'middle', true), lb(186, 58, '12cm', 11, C.ink, 'middle', true),
];
const lever: Figure = show([
  { note: '支点から 20cm の位置に 30g のおもりをつるしたてこを、つり合わせます。反対側の、支点から 12cm の位置に、何gのおもりをつるせばよいか求めます。',
    add: F(leverFig('？g'), [eb(152, '左：30g を 20cm ／ 右：？g を 12cm', C.blue, FILL.blue, 13), tx(206, 'つり合うのは何g？', 12)]) },
  { note: '❓ なぜ「重さ × 距離」が等しいとつり合うの？ てこを回そうとするはたらきは、おもりが重いほど、支点から遠いほど大きくなります。つまり「重さ × 距離」が回す力の大きさです。左向きに回す力と右向きに回す力が等しいとき、つり合って止まります。',
    add: F([bx(10, 20, 140, 48, '左に回す力 ＝ 重さ × 距離', C.red, FILL.red, 11), lb(160, 48, '＝', 20, C.ink, 'middle', true), bx(170, 20, 140, 48, '右に回す力 ＝ 重さ × 距離', C.blue, FILL.blue, 11), lb(160, 100, '重いほど・遠いほど、回す力が大きい', 12, C.gray, 'middle', true)], [eb(152, '回す力が等しいと つり合う', C.purple, FILL.purple, 16), tx(206, '重さ × 距離 が回す力の大きさ', 12)]) },
  { note: 'まず左側の回す力を計算します。重さ 30g、距離 20cm なので、30 × 20 ＝ 600 です。',
    add: F([...leverFig('？g'), lb(90, 122, '左：30 × 20 ＝ 600', 12, C.red, 'middle', true)], [eb(152, '左の回す力 ＝ 30 × 20 ＝ 600', C.red, FILL.red, 15), tx(206, '重さ × 距離', 12)]) },
  { note: '❓ 右側の回す力は、なぜ 600 になるの？ つり合って止まっているので、左に回す力と右に回す力が等しいはずです。左が 600 なら、右も 600 です。',
    add: F([bx(20, 24, 270, 32, '左の回す力 600', C.red, FILL.red, 14), bx(20, 70, 270, 32, '右の回す力 600（等しい）', C.blue, FILL.blue, 14)], [eb(152, '右の回す力 ＝ 600', C.blue, FILL.blue, 17), tx(206, 'つり合っている ＝ 等しい', 12)]) },
  { note: '右のおもりの重さを □g とすると、□ × 12 ＝ 600。かけ算の逆で、600 ÷ 12 ＝ 50。右には 50g のおもりをつるします。',
    add: F([...leverFig('50g'), lb(186, 122, '右：50 × 12 ＝ 600', 12, C.blue, 'middle', true)], [eb(152, '□ × 12 ＝ 600 → 600 ÷ 12 ＝ 50g', C.green, FILL.green, 14), tx(206, 'かけ算の逆はわり算', 12)]) },
  { note: '❓ なぜ、距離が短い側のほうが重くなるの？ 右の 12cm は左の 20cm の 3/5 の近さです。近いと回す力が弱くなるので、同じ回す力にするには、おもりを 5/3 倍 重くする必要があります。30 × 5/3 ＝ 50g。',
    add: F([bx(20, 18, 200, 28, '左 20cm', C.red, FILL.red, 12), bx(20, 52, 120, 28, '右 12cm（3/5 の近さ）', C.blue, FILL.blue, 11), bx(20, 90, 100, 26, '左 30g', C.red, FILL.red, 12), bx(130, 90, 170, 26, '右 50g（5/3 倍）', C.blue, FILL.blue, 12)], [eb(152, '近い → 重くする（逆の比）', C.purple, FILL.purple, 16), tx(206, '30 × 5/3 ＝ 50g', 12)]) },
  { note: '確かめ（検算）をします。左の回す力は 30 × 20 ＝ 600、右の回す力は 50 × 12 ＝ 600。等しいので、つり合っています。',
    add: F([...leverFig('50g'), lb(90, 122, '30×20＝600', 12, C.red, 'middle', true), lb(186, 122, '50×12＝600', 12, C.blue, 'middle', true)], [eb(152, '600 ＝ 600 ✓', C.green, FILL.green, 18), tx(206, '左右の回す力が等しい', 12)]) },
  { note: '別の見方もあります。距離の比は 20：12 ＝ 5：3、おもりの重さの比は 30：50 ＝ 3：5。距離の比と重さの比は、ちょうど逆になっています。てこがつり合うときは、いつもこうなります。',
    add: F([eb(14, '距離の比　20：12 ＝ 5：3', C.blue, FILL.blue, 15, 34), eb(60, '重さの比　30：50 ＝ 3：5', C.red, FILL.red, 15, 34), eb(106, '2つの比は 逆になる', C.purple, FILL.purple, 15, 34)], [tx(180, 'つり合うとき 距離の比 ⇄ 重さの比', 13, C.gray, true)]) },
  { note: 'よくあるまちがいです。距離が短いほうは回す力が弱いから、軽くてよいと考えて、30 × 12/20 ＝ 18g としてしまう。実際は逆で、距離が短いほうは、同じ回す力にするために重くしなければなりません。',
    add: F([eb(14, '× 30 × 12/20 ＝ 18g（軽くしてしまう）', C.red, FILL.red, 14, 34), eb(60, '× 距離の比をそのまま重さの比にする', C.red, FILL.red, 14, 34), eb(106, '○ 重さの比は距離の比の逆 → 50g', C.green, FILL.green, 14, 34)], [tx(180, '近いほうを重くして回す力をそろえる', 13, C.green, true)]) },
  { note: '答えは 50g です。左の回す力 30×20＝600 を、右で 50×12＝600 と等しくして、つり合わせました。',
    add: F([...leverFig('50g'), lb(150, 122, '600 ＝ 600', 13, C.green, 'middle', true)], [eb(152, '答え　50g', C.green, FILL.green, 18), tx(206, '600 ÷ 12 ＝ 50g', 13)]) },
], 'てこのつり合い：重さ×距離');

const slopeFig = (): E[] => [
  pg([[40, 124], [180, 124], [180, 19]], C.gray, FILL.gray), ci(89, 87, 11, '2kg', C.main, FILL.warm, 9),
  lb(188, 76, '高さ 3m', 12, C.green, 'start', true), lb(92, 52, '斜面の長さ 5m', 12, C.blue, 'end', true), lb(110, 138, '底辺 4m', 11, C.gray, 'middle', true),
];
const slope: Figure = show([
  { note: '質量 2kg の物体を、なめらかな斜面に沿って、高さ 3m まで一定の速さで引き上げます。100g の物体にはたらく重力は 1N です。①必要な仕事の量と、②斜面の長さが 5m のとき、物体を引き上げる力の大きさを求めます。',
    add: F(slopeFig(), [eb(152, '2kg ／ 高さ3m ／ 斜面の長さ5m', C.blue, FILL.blue, 14), tx(206, '①仕事は何J？ ②引く力は何N？', 12)]) },
  { note: '❓ まず、2kg の物体にはたらく重力は何N？ 重力の大きさは「100g で 1N」と決められています。2kg は 2000g で、100g の 20こぶんなので、2000 ÷ 100 × 1 ＝ 20N です。kg を g に直してから計算するのがコツです。',
    add: F([...Array.from({ length: 10 }, (_, i) => bx(16 + i * 29, 30, 26, 30, '1N', C.red, FILL.red, 9)), lb(160, 78, '2000g ＝ 100g × 20こ（図は10こぶん）', 12, C.gray, 'middle', true)], [eb(152, '2000 ÷ 100 × 1 ＝ 20N', C.red, FILL.red, 16), tx(206, '2kg ＝ 2000g にしてから', 12)]) },
  { note: '❓ 「仕事」とは何？ 物体に力を加えて、その向きに動かしたとき、力の大きさと動かした距離をかけたものを仕事といいます。仕事(J) ＝ 力(N) × 距離(m)。大きな力で長く動かすほど、たくさんの仕事をしたことになります。',
    add: F([bx(20, 30, 100, 44, '力 (N)', C.red, FILL.red, 14), lb(138, 56, '×', 20, C.ink, 'middle', true), bx(156, 30, 100, 44, '距離 (m)', C.blue, FILL.blue, 14), lb(160, 104, '＝ 仕事 (J)', 15, C.green, 'middle', true)], [eb(152, '仕事 ＝ 力 × 動かした距離', C.green, FILL.green, 16), tx(206, '単位は J（ジュール）', 12)]) },
  { note: '①まず、真上に 3m 持ち上げる場合です。必要な力は重力と同じ 20N、動かす距離は 3m なので、仕事は 20 × 3 ＝ 60J です。',
    add: F([bx(40, 70, 50, 40, '20N', C.red, FILL.red, 13), ar(65, 66, 65, 20, C.blue), lb(76, 44, '3m', 12, C.blue, 'start', true), lb(180, 60, '直接持ち上げる', 13, C.ink, 'start', true), lb(180, 84, '20N × 3m ＝ 60J', 14, C.green, 'start', true)], [eb(152, '① 仕事 ＝ 20 × 3 ＝ 60J', C.green, FILL.green, 16), tx(206, '答え①', 12)]) },
  { note: '❓ 斜面を使っても、なぜ仕事は 60J のままなの？ 「仕事の原理」といって、道具を使っても仕事の量は変わりません。斜面をなめらか（摩擦なし）にしておけば、損もしません。力は小さくなるかわりに、動かす距離が長くなります。',
    add: F([bx(14, 24, 140, 40, '直接：20N × 3m', C.blue, FILL.blue, 13), lb(160, 48, '＝', 18, C.ink, 'middle', true), bx(166, 24, 140, 40, '斜面：□N × 5m', C.green, FILL.green, 13), lb(160, 96, 'どちらも 仕事は 60J', 14, C.purple, 'middle', true)], [eb(152, '仕事の原理：仕事の量は変わらない', C.purple, FILL.purple, 14), tx(206, 'なめらかな斜面なら 損なし', 12)]) },
  { note: '②斜面を使う場合、仕事は同じ 60J で、動かす距離が 5m です。□ × 5 ＝ 60 なので、かけ算の逆で □ ＝ 60 ÷ 5 ＝ 12N。斜面に沿って引く力は 12N です。',
    add: F([...slopeFig(), ar(101, 80, 135, 55, C.red), lb(130, 104, '引く力 12N', 12, C.red, 'middle', true)], [eb(152, '② □ × 5 ＝ 60 → 60 ÷ 5 ＝ 12N', C.green, FILL.green, 15), tx(206, '答え②', 12)]) },
  { note: '❓ なぜ、斜面だと力が小さくなるの？ 高さ 3m を上がるのに、斜面では 5m も動かします。距離が 5/3 倍 になるぶん、力は 3/5 倍 で足ります。20 × 3/5 ＝ 12N。距離をのばして、力を小さくしているのです。',
    add: F([bx(20, 18, 100, 28, '距離 3m', C.blue, FILL.blue, 12), bx(20, 52, 166, 28, '距離 5m（5/3 倍）', C.blue, FILL.blue, 12), bx(20, 92, 240, 26, '力 20N → 12N（3/5 倍）', C.red, FILL.red, 13)], [eb(152, '20 × 3/5 ＝ 12N', C.purple, FILL.purple, 17), tx(206, '距離が 5/3 倍 → 力は 3/5 倍', 12)]) },
  { note: '確かめ（検算）をします。斜面で 12N の力を 5m 動かすと、12 × 5 ＝ 60J。真上に持ち上げたときの 60J と一致しました。',
    add: F([eb(14, '直接　20N × 3m ＝ 60J', C.blue, FILL.blue, 15, 34), eb(60, '斜面　12N × 5m ＝ 60J', C.green, FILL.green, 15, 34), eb(106, '同じ 60J ✓', C.purple, FILL.purple, 17, 34)], [tx(180, '仕事の原理どおり 仕事は同じ', 13, C.gray, true)]) },
  { note: 'よくあるまちがいです。斜面の長さ 5m を使わず、高さ 3m だけで 60 ÷ 3 ＝ 20N としてしまう。それでは、斜面を使う意味がありません。斜面で引くときは、引いて動かす距離（斜面の長さ）で割ります。',
    add: F([eb(14, '× 60 ÷ 3 ＝ 20N（高さで割る）', C.red, FILL.red, 15, 34), eb(60, '× これは真上に持ち上げる力', C.red, FILL.red, 15, 34), eb(106, '○ 60 ÷ 5 ＝ 12N（斜面の長さで割る）', C.green, FILL.green, 14, 34)], [tx(180, '引いて動かす距離で割る', 13, C.green, true)]) },
  { note: '答えは ① 60J、② 12N です。重力 20N から仕事 60J を求め、仕事の原理で、斜面の長さ 5m で割って 12N としました。',
    add: F([...slopeFig(), ar(101, 80, 135, 55, C.red), lb(130, 104, '引く力 12N', 12, C.red, 'middle', true)], [eb(152, '答え　① 60J　② 12N', C.green, FILL.green, 17), tx(206, '20×3 ＝ 60、60÷5 ＝ 12', 12)]) },
], '仕事の原理：斜面で引き上げる');

// ═════════ 月の満ち欠け・日食 ═════════
const moonBase = (): E[] => [
  ar(14, 40, 62, 40, C.main), ar(14, 70, 62, 70, C.main), ar(14, 100, 62, 100, C.main), lb(38, 28, '太陽の光', 10, C.main, 'middle', true),
  ci(160, 70, 56, undefined, C.gray, NOFILL), ci(160, 70, 12, undefined, C.blue, FILL.blue), lb(160, 74, '地球', 8, C.blue, 'middle', true),
];
const moonOn = (): E[] => [
  ci(104, 70, 8, undefined, C.ink, FILL.yellow), lb(104, 54, '新月', 10, C.ink, 'middle', true),
  ci(160, 126, 8, undefined, C.ink, FILL.yellow), lb(186, 130, '上弦', 10, C.ink, 'start', true),
  ci(216, 70, 8, undefined, C.ink, FILL.yellow), lb(216, 54, '満月', 10, C.ink, 'middle', true),
  ci(160, 14, 8, undefined, C.ink, FILL.yellow), lb(186, 18, '下弦', 10, C.ink, 'start', true),
];
const sky = (moonY: number, moonX = 46): E[] => [
  bx(0, 100, 320, 30, undefined, C.gray, FILL.gray), lb(30, 120, '東', 11, C.ink, 'middle', true), lb(160, 120, '南', 11, C.ink, 'middle', true), lb(290, 120, '西', 11, C.ink, 'middle', true),
  ci(274, 96, 14, '太陽', C.red, FILL.yellow, 8), ci(moonX, moonY, 11, '満月', C.ink, FILL.yellow, 8),
];
const moon: Figure = show([
  { note: 'ある日の夜に、南の空高くに半月（上弦の月）が見えました。この日からおよそ何日後に満月になるか、また、満月の日の日没直後に月が見える方角と高さを説明します。',
    add: F(moonBase(), [eb(152, '上弦の月 → 満月まで 何日？', C.blue, FILL.blue, 15), tx(206, '満月は日没直後にどこに見える？', 12)]) },
  { note: '❓ なぜ、月は満ち欠けするの？ 月は自分では光らず、太陽の光を反射して光って見えます。月は地球のまわりを回るので、太陽・地球・月の位置関係が変わり、地球から見える「光っている側」の見え方が変わります。それが満ち欠けです。',
    add: F([...moonBase(), ci(216, 70, 8, undefined, C.ink, FILL.yellow), lb(216, 54, '満月', 10, C.ink, 'middle', true)], [eb(152, '満ち欠け ＝ 位置関係の変化', C.purple, FILL.purple, 15), tx(206, '光っている側を見る角度が変わる', 12)]) },
  { note: '月が地球のまわりを回る道すじの上に、新月・上弦・満月・下弦の位置を置きます。太陽のほう（左）にあるのが新月、反対側（右）が満月、その間の上下が上弦と下弦です。',
    add: F([...moonBase(), ...moonOn()], [eb(152, '新月 → 上弦 → 満月 → 下弦', C.blue, FILL.blue, 15), tx(206, '太陽の反対側にあるのが満月', 12)]) },
  { note: '❓ 上弦から満月まで、なぜ周期（約29.5日）の 1/4 になるの？ 月はほぼ一定の速さで地球のまわりを回ります。新月→上弦→満月→下弦→新月は、1周を 4つに等分した位置なので、となりの位置まで進むのに周期の 1/4 の日数がかかります。',
    add: F([...moonBase(), ...moonOn(), ar(112, 82, 148, 118, C.red), ar(172, 118, 208, 82, C.red)], [eb(152, '1周を4つに分けた、1つぶん', C.purple, FILL.purple, 15), tx(206, '上弦 → 満月 ＝ 周期の 1/4', 12)]) },
  { note: '満ち欠けの周期は約 29.5日 なので、上弦から満月までは 29.5 ÷ 4 ＝ 約 7.4日。およそ 7日後に満月になります。',
    add: F([...Array.from({ length: 4 }, (_, i) => bx(20 + i * 70, 30, 66, 34, i === 1 ? '上弦→満月' : undefined, i === 1 ? C.red : C.blue, i === 1 ? FILL.red : FILL.blue, 10)), lb(160, 84, '29.5日 を 4つに分けた 1つぶん', 12, C.gray, 'middle', true), lb(160, 106, '≒ 7.4日 ＝ 約7日', 14, C.green, 'middle', true)], [eb(152, '29.5 ÷ 4 ≒ 7.4 → 約7日', C.green, FILL.green, 16), tx(206, '満月までは約7日後', 12)]) },
  { note: '❓ 満月は、なぜ日没直後に東の空に見えるの？ 満月は太陽の反対側にあります。太陽が西の地平線に沈むとき、ちょうど反対の東の地平線から満月がのぼってきます。',
    add: F(sky(92), [eb(152, '太陽が西に沈む ⇔ 満月が東からのぼる', C.purple, FILL.purple, 13), tx(206, '満月は太陽の反対側', 12)]) },
  { note: '❓ では、なぜ「低い」位置なの？ のぼってきたばかりの月は、まだ地平線のすぐ近くにあります。日没直後の満月は、東の空の低いところに見えます。時間がたつと高くなり、真夜中ごろに南の空でいちばん高くなります。',
    add: F([...sky(92), ar(46, 80, 46, 56, C.red), lb(60, 50, 'のぼる', 10, C.red, 'start', true)], [eb(152, '東の空の 低いところ', C.green, FILL.green, 16), tx(206, 'のぼりはじめだから低い', 12)]) },
  { note: '確かめ（検算）をします。上弦 → 満月 → 下弦 → 新月 と、4つの区間が同じ長さなら 7.4日 × 4 ＝ 29.6日 で、周期の約 29.5日 とほぼ一致します。',
    add: F([eb(14, '7.4 日 × 4 ＝ 29.6日', C.blue, FILL.blue, 16, 34), eb(60, '周期 約29.5日 とほぼ同じ ✓', C.green, FILL.green, 15, 34), eb(106, '上弦→満月は 約7日', C.purple, FILL.purple, 16, 34)], [tx(180, '4つに分けて足すと もとの周期', 13, C.gray, true)]) },
  { note: 'よくあるまちがいです。満月が日没直後に南の空に見えると考えてしまう。南の空にいちばん高く見えるのは、太陽が反対側にある真夜中ごろです。日没直後は、まだ東の空の低いところです。',
    add: F([eb(14, '× 日没直後に 南の空に見える', C.red, FILL.red, 15, 34), eb(60, '× 西の空に見える', C.red, FILL.red, 15, 34), eb(106, '○ 日没直後は 東の空の低いところ', C.green, FILL.green, 15, 34)], [tx(180, '満月が南に来るのは 真夜中ごろ', 13, C.green, true)]) },
  { note: '答えは、約7日後に満月になります。満月は太陽と反対の方向にあるため、日没直後には東の空低くに見えます。',
    add: F(sky(92), [eb(152, '答え　約7日後／東の空低く', C.green, FILL.green, 16), tx(206, '満月は太陽の反対側', 12)]) },
], '月の満ち欠け：上弦から満月まで');

const eclFig = (): E[] => [
  ci(40, 70, 26, '太陽', C.red, FILL.yellow, 10), ci(150, 70, 9, undefined, C.ink, FILL.gray), lb(150, 52, '月', 11, C.ink, 'middle', true),
  ci(262, 70, 16, '地球', C.blue, FILL.blue, 9),
];
const eclipse: Figure = show([
  { note: '太陽・月・地球がこの順に一直線に並んでいます。このときに起こる現象の名前と、そのときの月の見え方（満月か新月か）を答えます。',
    add: F(eclFig(), [eb(152, '太陽 － 月 － 地球 の順に一直線', C.blue, FILL.blue, 14), tx(206, '起こる現象は？ 月の見え方は？', 12)]) },
  { note: '❓ なぜ、太陽が隠れるの？ 太陽の光は、まっすぐ進みます。太陽と地球の間に月が入ると、月が光をさえぎって、月の後ろにかげができるからです。',
    add: F([...eclFig(), ar(68, 60, 138, 64, C.main), ar(68, 80, 138, 76, C.main), pg([[158, 64], [250, 67], [250, 73], [158, 76]], C.gray, 'rgba(43,36,32,0.35)'), lb(204, 92, '月のかげ', 11, C.ink, 'middle', true)], [eb(152, '月が 太陽の光をさえぎる', C.purple, FILL.purple, 16), tx(206, '光はまっすぐ進むから', 12)]) },
  { note: '月のかげが地球に落ちると、かげの中にいる人からは、太陽が月に隠されて欠けて見えます。この現象を日食といいます。',
    add: F([...eclFig(), pg([[158, 64], [250, 67], [250, 73], [158, 76]], C.gray, 'rgba(43,36,32,0.35)'), lb(248, 100, 'かげの中 → 太陽が欠ける', 10, C.red, 'middle', true)], [eb(152, 'この現象 ＝ 日食', C.green, FILL.green, 18), tx(206, '太陽が月に隠される', 12)]) },
  { note: '❓ では、そのときの月はどう見えるの？ 月の太陽側の半分は光に照らされて明るく、地球側の半分は暗いままです。地球から見えるのは暗い側だけなので、月はほとんど見えません。これを新月といいます。',
    add: F([bx(30, 20, 130, 80, '太陽側（明るい）', C.main, FILL.yellow, 12), bx(160, 20, 130, 80, '地球側（暗い）', C.ink, FILL.gray, 12), lb(160, 116, '地球から見えるのは暗い側だけ', 12, C.ink, 'middle', true)], [eb(152, '月は見えない ＝ 新月', C.green, FILL.green, 17), tx(206, '日食のときの月は 新月', 12)]) },
  { note: '❓ 満月のときは、どんな並び？ 満月は、太陽・地球・月の順に並び、地球が真ん中にきます。地球のかげが月にかかると月が欠けて見え、これは月食です。',
    add: F([ci(40, 70, 26, '太陽', C.red, FILL.yellow, 10), ci(150, 70, 16, '地球', C.blue, FILL.blue, 9), ci(262, 70, 9, undefined, C.ink, FILL.gray), lb(262, 52, '月', 11, C.ink, 'middle', true), pg([[166, 64], [254, 68], [254, 72], [166, 76]], C.gray, 'rgba(43,36,32,0.35)')], [eb(152, '太陽 － 地球 － 月 ＝ 月食（満月）', C.purple, FILL.purple, 14), tx(206, '地球のかげに月が入る', 12)]) },
  { note: '日食と月食を比べます。太陽・月・地球の順なら日食（月は新月）、太陽・地球・月の順なら月食（月は満月）です。',
    add: F([eb(14, '太陽 － 月 － 地球 → 日食（新月）', C.blue, FILL.blue, 15, 38), eb(66, '太陽 － 地球 － 月 → 月食（満月）', C.purple, FILL.purple, 15, 38)], [tx(150, '真ん中にくるものを見る', 14, C.green, true), tx(178, '月が真ん中なら日食、地球が真ん中なら月食', 12)]) },
  { note: '❓ 新月のたびに日食が起きないのはなぜ？ 月が地球を回る道すじは、地球が太陽を回る面に対して少しかたむいています。そのため、新月でも月のかげが地球の上や下をすりぬけて、日食にならないことが多いのです。',
    add: F([ln(20, 70, 300, 70, C.gray, true), ci(262, 70, 14, '地球', C.blue, FILL.blue, 9), ci(40, 70, 18, '太陽', C.red, FILL.yellow, 8), ln(80, 100, 240, 40, C.ink, false, 2), ci(150, 70, 8, undefined, C.ink, FILL.gray), lb(160, 130, '月の道すじは かたむいている', 10, C.ink, 'middle', true)], [eb(152, '道すじがかたむく → 毎月は起きない', C.purple, FILL.purple, 14), tx(206, '新月のたびには 日食にならない', 12)]) },
  { note: '覚え方です。真ん中にくるのが月なら日食（そのとき月は新月）、真ん中にくるのが地球なら月食（そのとき月は満月）。「月が間に入ったら日食」と覚えます。',
    add: F([eb(14, '真ん中が 月 → 日食 → 新月', C.blue, FILL.blue, 16, 38), eb(66, '真ん中が 地球 → 月食 → 満月', C.purple, FILL.purple, 16, 38)], [tx(160, '「間に入ったものの名前」で考える', 13, C.green, true)]) },
  { note: 'よくあるまちがいです。日食と月食の並び順を混同して、「日食は満月のとき」と考えてしまう。日食のとき月は太陽側を向けていて暗い側しか見えないので、新月です。満月は月食のときです。',
    add: F([eb(14, '× 日食は満月のときに起こる', C.red, FILL.red, 15, 34), eb(60, '× 月食は新月のときに起こる', C.red, FILL.red, 15, 34), eb(106, '○ 日食 ＝ 新月、月食 ＝ 満月', C.green, FILL.green, 15, 34)], [tx(180, '並び順から考える', 13, C.green, true)]) },
  { note: '答えは、日食。そのときの月は新月です。',
    add: F([...eclFig(), pg([[158, 64], [250, 67], [250, 73], [158, 76]], C.gray, 'rgba(43,36,32,0.35)')], [eb(152, '答え　日食／月は新月', C.green, FILL.green, 17), tx(206, '太陽 － 月 － 地球', 12)]) },
], '日食：太陽・月・地球の並び');

// ═════════ 数学（図形・式） ═════════
type Pt = [number, number];
const R1 = (n: number) => Math.round(n * 10) / 10;
const inter = (a: Pt, b: Pt, c: Pt, d: Pt): Pt => {
  const d1x = b[0] - a[0], d1y = b[1] - a[1], d2x = d[0] - c[0], d2y = d[1] - c[1];
  const t = ((c[0] - a[0]) * d2y - (c[1] - a[1]) * d2x) / (d1x * d2y - d1y * d2x);
  return [R1(a[0] + t * d1x), R1(a[1] + t * d1y)];
};
const dot = (p: Pt, col: string, r = 3.5): E => ci(p[0], p[1], r, undefined, col, col);
const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const toward = (from: Pt, a: Pt, b: Pt, dist: number): Pt => {
  const ux = a[0] - from[0], uy = a[1] - from[1], vx = b[0] - from[0], vy = b[1] - from[1];
  const la = Math.hypot(ux, uy), lb2 = Math.hypot(vx, vy);
  const sx = ux / la + vx / lb2, sy = uy / la + vy / lb2, ls = Math.hypot(sx, sy);
  return [R1(from[0] + (sx / ls) * dist), R1(from[1] + (sy / ls) * dist)];
};

// ── ohori_sansu_16：直角三角形ABCと外接円、AHと半径 ──
const fo = (() => {
  const O: Pt = [160, 70], B: Pt = [105, 70], Cc: Pt = [215, 70], A: Pt = [144.6, 17.2], H: Pt = [144.6, 70];
  const base = (): E[] => [ci(160, 70, 55, undefined, C.gray, NOFILL), pg([A, B, Cc], C.main, 'rgba(14,165,233,0.14)'),
    lb(140, 12, 'A', 12, C.ink, 'end', true), lb(97, 84, 'B', 12, C.ink, 'end', true), lb(223, 84, 'C', 12, C.ink, 'start', true), dot(O, C.ink, 2.5), lb(170, 84, 'O', 11, C.ink, 'start', true)];
  const alt = (): E[] => [ln(A[0], A[1], H[0], H[1], C.red, true, 2), lb(138, 84, 'H', 11, C.red, 'end', true), lb(150, 44, 'AH', 10, C.red, 'start', true)];
  const sides = (): E[] => [lb(116, 38, '6cm', 11, C.blue, 'end', true), lb(192, 38, '8cm', 11, C.green, 'start', true)];
  const s: Slide[] = [
    { note: '円 O に内接する△ABC で、∠BAC＝90°、AB＝6cm、AC＝8cm です。頂点 A から辺 BC に垂線 AH を下ろします。線分 AH の長さと、円 O の半径を求めます。',
      add: F([...base(), ...sides(), ...alt()], [eb(152, '∠A＝90° ／ AB＝6cm ／ AC＝8cm', C.blue, FILL.blue, 14), tx(206, 'AH の長さと 円 O の半径は？', 12)]) },
    { note: '❓ なぜ、∠BAC＝90° だと BC が円の直径になるの？ 円周角は、同じ弧に対する中心角の半分です。∠BAC＝90° なら、弧 BC に対する中心角は 2倍の 180° です。中心角が 180° ということは、B・O・C が一直線に並ぶので、BC は中心 O を通る直径です。',
      add: F([...base(), ln(B[0], B[1], O[0], O[1], C.red, false, 3), ln(O[0], O[1], Cc[0], Cc[1], C.red, false, 3), lb(160, 136, '中心角 ＝ 180°（一直線）', 11, C.red, 'middle', true), lb(150, 30, '90°', 10, C.green, 'end', true)], [eb(152, '円周角 90° → 中心角 180°', C.purple, FILL.purple, 16), tx(206, 'BC は中心を通る ＝ 直径', 12)]) },
    { note: '直角三角形なので、三平方の定理が使えます。BC² ＝ AB² ＋ AC² ＝ 6² ＋ 8² ＝ 36 ＋ 64 ＝ 100。2乗して 100 になる正の数は 10 なので、BC ＝ 10cm です。',
      add: F([...base(), ...sides(), lb(160, 136, 'BC ＝ 10cm', 12, C.red, 'middle', true)], [eb(152, '6² ＋ 8² ＝ 100 → BC ＝ 10cm', C.green, FILL.green, 15), tx(206, '直角をはさむ辺の2乗の和 ＝ 斜辺の2乗', 12)]) },
    { note: '円 O の半径は、直径 BC の半分です。10 ÷ 2 ＝ 5cm。半径は OB・OC・OA のどれも 5cm です。',
      add: F([...base(), ln(O[0], O[1], A[0], A[1], C.green, true, 2), lb(160, 136, '半径 ＝ 10 ÷ 2 ＝ 5cm', 12, C.green, 'middle', true)], [eb(152, '半径 ＝ 10 ÷ 2 ＝ 5cm', C.green, FILL.green, 17), tx(206, '直径の半分', 12)]) },
    { note: '❓ つぎに、AH はどうやって求めるの？ 同じ△ABC の面積を、2通りに表します。三角形の面積は、どの辺を底辺にしても同じです。底辺を AB・AC にしたときと、BC にしたときの2通りで面積を出せば、AH がわかります。',
      add: F([...base(), ...alt(), bx(10, 106, 140, 28, '底辺AC・高さAB でも', C.blue, FILL.blue, 11), bx(170, 106, 140, 28, '底辺BC・高さAH でも', C.red, FILL.red, 11)], [eb(152, '同じ三角形 → 面積は同じ', C.purple, FILL.purple, 16), tx(206, '2通りで表して 等しいとおく', 12)]) },
    { note: '1通り目。直角をはさむ2辺 AB・AC を、底辺と高さにします。面積 ＝ ½ × 6 × 8 ＝ 24cm² です。½ をかけるのは、6×8 の長方形を対角線で2つに分けた半分が三角形だからです。',
      add: F([bx(120, 14, 80, 60, undefined, C.gray, FILL.gray), pg([[120, 14], [120, 74], [200, 74]], C.main, FILL.blue), lb(110, 46, '6', 12, C.blue, 'end', true), lb(160, 88, '8', 12, C.green, 'middle', true), lb(160, 112, '長方形 6×8 ＝ 48 の半分 ＝ 24', 12, C.ink, 'middle', true)], [eb(152, '面積 ＝ ½ × 6 × 8 ＝ 24cm²', C.green, FILL.green, 15), tx(206, 'その1', 12)]) },
    { note: '2通り目。BC ＝ 10cm を底辺、AH を高さとすると、面積 ＝ ½ × 10 × AH です。これが 24 に等しいので ½ × 10 × AH ＝ 24。両辺を 2倍して 10 × AH ＝ 48、AH ＝ 48 ÷ 10 ＝ 4.8cm です。',
      add: F([...base(), ...alt(), lb(160, 136, '½ × 10 × AH ＝ 24', 12, C.red, 'middle', true)], [eb(152, 'AH ＝ 48 ÷ 10 ＝ 4.8cm', C.green, FILL.green, 16), tx(206, '10 × AH ＝ 48', 12)]) },
    { note: '確かめ（検算）をします。どちらの底辺で考えても面積は同じなので、AB × AC ＝ BC × AH のはずです。6 × 8 ＝ 48、10 × 4.8 ＝ 48。たしかに一致しました。',
      add: F([eb(14, 'AB × AC ＝ 6 × 8 ＝ 48', C.blue, FILL.blue, 15, 34), eb(60, 'BC × AH ＝ 10 × 4.8 ＝ 48', C.red, FILL.red, 15, 34), eb(106, '同じ 48 ✓', C.green, FILL.green, 16, 34)], [tx(180, '2通りの面積（の2倍）が一致', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。直径である BC の長さ 10cm を、そのまま半径として答えてしまう。半径は直径の半分なので 5cm です。また、AH を 6 や 8 と思いこまないように、垂線は BC に直角に下ろした長さです。',
      add: F([eb(14, '× 半径 ＝ 10cm（これは直径）', C.red, FILL.red, 15, 34), eb(60, '× AH ＝ 6 や 8（これは辺の長さ）', C.red, FILL.red, 15, 34), eb(106, '○ 半径 5cm、AH ＝ 4.8cm', C.green, FILL.green, 15, 34)], [tx(180, '直径と半径、辺と高さを区別する', 13, C.green, true)]) },
    { note: '答えは AH ＝ 4.8cm、円 O の半径は 5cm です。',
      add: F([...base(), ...alt(), lb(160, 136, 'AH ＝ 4.8cm ／ 半径 5cm', 12, C.green, 'middle', true)], [eb(152, '答え　AH＝4.8cm、半径 5cm', C.green, FILL.green, 15), tx(206, '面積24 ＝ ½×10×AH ／ 10÷2', 12)]) },
  ];
  return show(s, '円に内接する直角三角形');
})();

// ── tokai_sansu_03：円の中の相似の証明 ──
const tsa03 = (() => {
  const O: Pt = [160, 70];
  const A = pol(160, 70, 55, 200), B = pol(160, 70, 55, 280), Cc = pol(160, 70, 55, 350), D = pol(160, 70, 55, 100);
  const P = inter(A, Cc, B, D);
  const lab = (p: Pt, t: string, deg: number): E => { const q = pol(160, 70, 68, deg); return lb(q[0], q[1] + 4, t, 12, C.ink, 'middle', true); };
  const base = (): E[] => [ci(160, 70, 55, undefined, C.gray, NOFILL), ln(A[0], A[1], Cc[0], Cc[1], C.ink, false, 2), ln(B[0], B[1], D[0], D[1], C.ink, false, 2), lab(A, 'A', 200), lab(B, 'B', 280), lab(Cc, 'C', 350), lab(D, 'D', 100), lb(P[0] + 6, P[1] - 4, 'P', 11, C.ink, 'start', true)];
  const tri1 = (): E => pg([A, P, B], C.blue, 'rgba(2,132,199,0.25)');
  const tri2 = (): E => pg([D, P, Cc], C.red, 'rgba(225,29,72,0.25)');
  const apb = (): E => dot(toward(P, A, B, 14), C.blue, 4.5);
  const dpc = (): E => dot(toward(P, D, Cc, 14), C.blue, 4.5);
  const pab = (): E => dot(toward(A, P, B, 16), C.green, 4.5);
  const pdc = (): E => dot(toward(D, P, Cc, 16), C.green, 4.5);
  const s: Slide[] = [
    { note: '円 O の周上に4点 A、B、C、D があり、線分 AC と線分 BD が円の内部の点 P で交わっています。△APB ∽ △DPC であることを証明します。',
      add: F([...base(), tri1(), tri2()], [eb(152, '△APB ∽ △DPC を示す', C.blue, FILL.blue, 16), tx(206, '青い三角形と 赤い三角形', 12)]) },
    { note: '❓ どうすれば、相似だと示せるの？ 「2組の角がそれぞれ等しい」ことを示せばよいのです。三角形の内角の和は 180° なので、2組の角が等しければ、残りの1組も自動で等しくなり、3つの角がすべて等しい（＝形が同じ）からです。',
      add: F([bx(20, 18, 280, 34, '2組の角が等しい', C.blue, FILL.blue, 14), ar(160, 54, 160, 66, C.gray), bx(20, 68, 280, 34, '3つ目の角も等しい（内角の和は180°）', C.purple, FILL.purple, 13), ar(160, 104, 160, 116, C.gray), bx(20, 118, 280, 20, '形が同じ ＝ 相似', C.green, FILL.green, 12)], [tx(176, '角を2組そろえるのが目標', 14, C.green, true)]) },
    { note: '1組目の角です。∠APB と ∠DPC は、2直線 AC と BD が交わってできる向かい合った角（対頂角）なので、∠APB ＝ ∠DPC です。',
      add: F([...base(), tri1(), tri2(), apb(), dpc()], [eb(152, '∠APB ＝ ∠DPC（対頂角）', C.blue, FILL.blue, 16), tx(206, '向かい合った角', 12)]) },
    { note: '❓ なぜ、対頂角は等しいの？ ∠APB ＋ ∠BPC ＝ 180°（一直線）、∠DPC ＋ ∠BPC ＝ 180°（一直線）です。どちらも 180° から同じ ∠BPC を引いたものなので、∠APB ＝ ∠DPC になります。',
      add: F([...base(), apb(), dpc(), dot(toward(P, B, Cc, 14), C.red, 4.5)], [eb(152, '180° − ∠BPC が 両方に', C.purple, FILL.purple, 16), tx(206, '同じものを引くから等しい', 12)]) },
    { note: '2組目の角です。∠PAB は ∠CAB、∠PDC は ∠BDC と同じで、どちらも弦 BC に対する円周角（弧 BC の円周角）です。A と D は弦 BC の同じ側にあるので、∠PAB ＝ ∠PDC です。',
      add: F([...base(), ln(B[0], B[1], Cc[0], Cc[1], C.green, false, 3), dot(toward(A, P, B, 16), C.green, 4.5), dot(toward(D, P, Cc, 16), C.green, 4.5)], [eb(152, '∠PAB ＝ ∠PDC（弧BCの円周角）', C.green, FILL.green, 15), tx(206, '同じ弧 BC に対する円周角', 12)]) },
    { note: '❓ なぜ、同じ弧に対する円周角は等しいの？ 円周角は、同じ弧に対する中心角の半分です。同じ弧なら中心角は同じなので、その半分の円周角どうしも等しくなります。',
      add: F([ci(160, 70, 55, undefined, C.gray, NOFILL), ln(O[0], O[1], B[0], B[1], C.red, false, 2), ln(O[0], O[1], Cc[0], Cc[1], C.red, false, 2), ln(A[0], A[1], B[0], B[1], C.green, false, 2), ln(A[0], A[1], Cc[0], Cc[1], C.green, false, 2), sc(160, 70, 20, 10, 80, C.red, 'rgba(225,29,72,0.30)'), sc(A[0], A[1], 20, -5, 30, C.green, 'rgba(22,163,74,0.30)'), lb(200, 88, '中心角', 10, C.red, 'start', true), lb(92, 66, '円周角', 10, C.green, 'end', true), lb(160, 136, '中心角 ＝ 円周角の2倍', 11, C.red, 'middle', true)], [eb(152, '円周角 ＝ 中心角の半分', C.purple, FILL.purple, 16), tx(206, '同じ弧 → 中心角が同じ → 円周角も同じ', 12)]) },
    { note: '2組の角が、それぞれ等しいことが示せました。∠APB ＝ ∠DPC、∠PAB ＝ ∠PDC。よって、2組の角がそれぞれ等しいので、△APB ∽ △DPC です。',
      add: F([...base(), tri1(), tri2(), apb(), dpc(), pab(), pdc()], [eb(152, '2組の角が等しい → 相似', C.green, FILL.green, 16), tx(206, '青丸どうし・緑丸どうしが等しい', 12)]) },
    { note: '相似を書くときは、対応する頂点を同じ順に並べます。∠APB と ∠DPC から P と P、∠PAB と ∠PDC から A と D が対応し、残りは B と C。だから △APB ∽ △DPC と、A→D、P→P、B→C の順に書きます。',
      add: F([eb(14, 'A ↔ D（∠PAB ＝ ∠PDC）', C.green, FILL.green, 15, 34), eb(60, 'P ↔ P（∠APB ＝ ∠DPC）', C.blue, FILL.blue, 15, 34), eb(106, 'B ↔ C（のこり）→ △APB ∽ △DPC', C.purple, FILL.purple, 14, 34)], [tx(180, '対応する頂点を同じ順に書く', 13, C.gray, true)]) },
    { note: '確かめ（検算）をします。3つ目の角も等しいはずです。∠ABP は弧 AD に対する円周角、∠DCP も弧 AD に対する円周角なので、∠ABP ＝ ∠DCP。これで3つの角がすべてそろいました。',
      add: F([...base(), ln(A[0], A[1], D[0], D[1], C.purple, false, 3), dot(toward(B, A, P, 16), C.purple, 4.5), dot(toward(Cc, D, P, 16), C.purple, 4.5)], [eb(152, '∠ABP ＝ ∠DCP（弧ADの円周角）✓', C.purple, FILL.purple, 14), tx(206, '3つ目の角もそろった', 12)]) },
    { note: 'よくあるまちがいは、どの弧に対する円周角なのかを取りちがえることです。∠PAB と ∠PDC は弧 BC。∠PAB と ∠PCD を等しいとしたり、弧 AD の角と混ぜたりしないように、角の両はしの点を見て弧を決めます。',
      add: F([eb(14, '× ∠PAB ＝ ∠PCD とする', C.red, FILL.red, 15, 34), eb(60, '× どの弧か確かめずに等しいとする', C.red, FILL.red, 14, 34), eb(106, '○ 角の両はし B・C を見て 弧 BC', C.green, FILL.green, 14, 34)], [tx(180, '角のはしの2点が、弧を決める', 13, C.green, true)]) },
    { note: '証明のまとめです。△APB と △DPC において、①対頂角は等しいので ∠APB ＝ ∠DPC。②弧 BC に対する円周角は等しいので ∠PAB ＝ ∠PDC。③2組の角がそれぞれ等しいので △APB ∽ △DPC（証明終）。',
      add: F([eb(10, '① ∠APB ＝ ∠DPC（対頂角）', C.blue, FILL.blue, 14, 34), eb(54, '② ∠PAB ＝ ∠PDC（弧BCの円周角）', C.green, FILL.green, 14, 34), eb(98, '③ 2組の角が等しいので △APB ∽ △DPC', C.purple, FILL.purple, 13, 34)], [tx(176, '証明終', 14, C.green, true)]) },
  ];
  return show(s, '円と相似の証明');
})();

// ── tokai_sansu_05：接弦定理 ──
const tsa05 = (() => {
  const Cp: Pt = [160, 120], B = pol(160, 70, 50, 306), A = pol(160, 70, 50, 200), D: Pt = [160, 20];
  const base = (): E[] => [ci(160, 70, 50, undefined, C.gray, NOFILL), ln(50, 120, 270, 120, C.ink, false, 2), lb(268, 112, 'l', 12, C.ink, 'end', true),
    pg([A, B, Cp], C.main, 'rgba(14,165,233,0.14)'),
    lb(160, 134, 'C', 12, C.ink, 'middle', true), lb(B[0] + 8, B[1] - 2, 'B', 12, C.ink, 'start', true), lb(A[0] - 6, A[1] - 2, 'A', 12, C.ink, 'end', true)];
  const want = (): E => sc(160, 120, 24, 0, 72, C.red, 'rgba(225,29,72,0.30)');
  const s: Slide[] = [
    { note: '円 O に内接する△ABC で、頂点 C での接線を l とします。∠BAC ＝ 72° のとき、l と弦 CB のなす角のうち、点 A を含まない側の角（図の赤い部分）の大きさを、接弦定理を用いて求めます。',
      add: F([...base(), want(), lb(188, 106, '？', 12, C.red, 'start', true), lb(126, 66, '72°', 10, C.blue, 'start', true)], [eb(152, '∠BAC ＝ 72° ／ 赤い角は？', C.blue, FILL.blue, 15), tx(206, '接線 l と弦 CB のなす角', 12)]) },
    { note: '接弦定理とは、「接線と弦のなす角は、その角の内側にない側の弧に対する円周角に等しい」という定理です。ここでは、赤い角は、A がある側の弧に対する円周角 ∠BAC と等しくなります。でも、なぜそうなるのでしょう。理由をたどります。',
      add: F([...base(), want()], [eb(152, '赤い角 ＝ ∠BAC（円周角）', C.purple, FILL.purple, 16), tx(206, 'これが接弦定理。では なぜ？', 12)]) },
    { note: '❓ まず、どうやって示すの？ 接点 C から直径 CD を引きます。直径を引くと、「接線は半径に垂直」と「直径に対する円周角は 90°」という2つの性質が使えるようになります。',
      add: F([...base(), ln(Cp[0], Cp[1], D[0], D[1], C.green, false, 3), ln(D[0], D[1], B[0], B[1], C.green, true, 2), lb(160, 12, 'D', 12, C.ink, 'middle', true)], [eb(152, '直径 CD を引く', C.green, FILL.green, 17), tx(206, '接線 ⊥ 半径、直径の円周角は90°', 12)]) },
    { note: '❓ 接線 l と直径 CD は、なぜ垂直なの？ 接線は円と1点でしかふれません。半径と垂直でなければ、円の内側に入りこんで2点で交わってしまうからです。だから l ⊥ CD で、赤い角 ＋ ∠BCD ＝ 90°、つまり 赤い角 ＝ 90° − ∠BCD です。',
      add: F([...base(), want(), ln(Cp[0], Cp[1], D[0], D[1], C.green, false, 3), sc(160, 120, 34, 72, 90, C.green, 'rgba(22,163,74,0.30)'), lb(160, 12, 'D', 12, C.ink, 'middle', true), lb(176, 92, '∠BCD', 9, C.green, 'start', true)], [eb(152, '赤い角 ＝ 90° − ∠BCD', C.red, FILL.red, 16), tx(206, 'l ⊥ CD（90°）から ∠BCD を引く', 12)]) },
    { note: '❓ つぎに、△CBD を見ます。CD は直径なので、直径に対する円周角 ∠CBD は 90° です。三角形の内角の和は 180° なので、∠BDC ＝ 180° − 90° − ∠BCD ＝ 90° − ∠BCD となります。',
      add: F([...base(), ln(Cp[0], Cp[1], D[0], D[1], C.green, false, 3), ln(D[0], D[1], B[0], B[1], C.green, false, 2), dot([B[0] - 7, B[1] + 9], C.purple, 4), lb(160, 12, 'D', 12, C.ink, 'middle', true), sc(160, 20, 22, -90, -18, C.purple, 'rgba(147,51,234,0.30)')], [eb(152, '∠BDC ＝ 90° − ∠BCD', C.purple, FILL.purple, 16), tx(206, '∠CBD ＝ 90°（直径の円周角）', 12)]) },
    { note: '2つの式を見比べます。赤い角 ＝ 90° − ∠BCD、∠BDC ＝ 90° − ∠BCD。どちらも同じ「90° − ∠BCD」なので、赤い角 ＝ ∠BDC です。',
      add: F([eb(14, '赤い角 ＝ 90° − ∠BCD', C.red, FILL.red, 16, 34), eb(60, '∠BDC ＝ 90° − ∠BCD', C.purple, FILL.purple, 16, 34), eb(106, '同じ式 → 赤い角 ＝ ∠BDC', C.green, FILL.green, 16, 34)], [tx(180, '同じものを引いているから等しい', 13, C.gray, true)]) },
    { note: '❓ では、∠BDC と ∠BAC の関係は？ どちらも弦 BC（弧 BC）に対する円周角です。同じ弧に対する円周角は等しいので、∠BDC ＝ ∠BAC です。',
      add: F([...base(), ln(D[0], D[1], B[0], B[1], C.purple, false, 2), ln(D[0], D[1], Cp[0], Cp[1], C.purple, false, 2), lb(160, 12, 'D', 12, C.ink, 'middle', true), sc(160, 20, 22, -90, -18, C.purple, 'rgba(147,51,234,0.30)'), sc(A[0], A[1], 18, -55, 16.9, C.blue, 'rgba(2,132,199,0.30)')], [eb(152, '∠BDC ＝ ∠BAC（弧BCの円周角）', C.blue, FILL.blue, 15), tx(206, '同じ弧に対する円周角は等しい', 12)]) },
    { note: 'つなげます。赤い角 ＝ ∠BDC、∠BDC ＝ ∠BAC ＝ 72°。よって、赤い角（l と弦 CB のなす角のうち A を含まない側）は 72° です。',
      add: F([...base(), want(), lb(188, 106, '72°', 12, C.red, 'start', true)], [eb(152, '赤い角 ＝ ∠BDC ＝ ∠BAC ＝ 72°', C.green, FILL.green, 15), tx(206, '接弦定理の結論', 12)]) },
    { note: '確かめ（検算）をします。∠BAC ＝ 72° なら ∠BDC ＝ 72°、三角形 CBD の内角の和から ∠BCD ＝ 90° − 72° ＝ 18°、赤い角 ＝ 90° − 18° ＝ 72° でもとにもどります。また、A を含む側の角は 180° − 72° ＝ 108° で、2つの角の和は 180° です。',
      add: F([eb(14, '∠BDC ＝ 72° → ∠BCD ＝ 90°−72° ＝ 18°', C.purple, FILL.purple, 13, 34), eb(60, '赤い角 ＝ 90° − 18° ＝ 72° ✓', C.green, FILL.green, 15, 34), eb(106, '72° ＋ 108° ＝ 180°（l は直線）✓', C.blue, FILL.blue, 14, 34)], [tx(180, '別の道すじでも 72° にもどる', 13, C.gray, true)]) },
    { note: 'よくあるまちがいは、角と弧の側を取りちがえることです。接線と弦のなす角は、その角の内側にない側の弧の円周角と等しいので、A を含まない側の角には、A に立つ円周角 ∠BAC を対応させます。A を含む側の 108° を答えにしないようにします。',
      add: F([eb(14, '× 108°（A を含む側の角）', C.red, FILL.red, 15, 34), eb(60, '× 角の内側にある弧で考える', C.red, FILL.red, 15, 34), eb(106, '○ 内側にない側の弧の円周角 ＝ 72°', C.green, FILL.green, 14, 34)], [tx(180, '角のどちら側を聞かれているか確かめる', 13, C.green, true)]) },
    { note: '答えは 72° です。直径 CD を引き、接線 ⊥ 半径、直径の円周角 90°、同じ弧の円周角、の3つで 赤い角 ＝ ∠BAC ＝ 72° を示しました。',
      add: F([...base(), want(), lb(188, 106, '72°', 12, C.red, 'start', true)], [eb(152, '答え　72°', C.green, FILL.green, 18), tx(206, '接線と弦のなす角 ＝ 反対側の円周角', 12)]) },
  ];
  return show(s, '接弦定理');
})();

// ── tokai_sansu_08：正方形と直角の証明 ──
const tsa08 = (() => {
  const A: Pt = [110, 10], B: Pt = [110, 110], Cc: Pt = [210, 110], D: Pt = [210, 10], P: Pt = [150, 110], Q: Pt = [210, 70];
  const Rr = inter(A, P, B, Q);
  const base = (): E[] => [pg([A, B, Cc, D], C.ink, 'rgba(255,255,255,0)'), ln(A[0], A[1], P[0], P[1], C.ink, false, 2), ln(B[0], B[1], Q[0], Q[1], C.ink, false, 2),
    lb(102, 14, 'A', 12, C.ink, 'end', true), lb(102, 122, 'B', 12, C.ink, 'end', true), lb(218, 122, 'C', 12, C.ink, 'start', true), lb(218, 14, 'D', 12, C.ink, 'start', true),
    lb(150, 126, 'P', 12, C.ink, 'middle', true), lb(218, 74, 'Q', 12, C.ink, 'start', true), lb(Rr[0] + 6, Rr[1] - 4, 'R', 11, C.ink, 'start', true)];
  const t1 = (): E => pg([A, B, P], C.blue, 'rgba(2,132,199,0.25)');
  const t2 = (): E => pg([B, Cc, Q], C.red, 'rgba(225,29,72,0.25)');
  const bap = (): E => dot(toward(A, B, P, 20), C.green, 4.5);
  const cbq = (): E => dot(toward(B, Cc, Q, 22), C.green, 4.5);
  const s: Slide[] = [
    { note: '正方形 ABCD の辺 BC 上に点 P、辺 CD 上に点 Q を、BP ＝ CQ となるようにとります。線分 AP と線分 BQ の交点を R とするとき、∠ARB ＝ 90° であることを証明します。',
      add: F([...base(), dot(mid(B, P), C.red, 4), dot(mid(Cc, Q), C.red, 4)], [eb(152, 'BP ＝ CQ のとき ∠ARB ＝ 90°', C.blue, FILL.blue, 15), tx(206, '赤い ● の辺が 同じ長さ（BP ＝ CQ）', 12)]) },
    { note: '❓ 90° を、どうやって示すの？ 直接は示せません。そこで、合同な三角形を見つけて「等しい角」を手に入れ、それを使って △ABR の内角の和（180°）から ∠ARB を計算する、という道すじで進めます。',
      add: F([bx(20, 14, 280, 30, '① 合同な三角形を見つける', C.blue, FILL.blue, 14), ar(160, 46, 160, 58, C.gray), bx(20, 60, 280, 30, '② 等しい角を手に入れる', C.green, FILL.green, 14), ar(160, 92, 160, 104, C.gray), bx(20, 106, 280, 28, '③ △ABR の内角の和で ∠ARB を出す', C.purple, FILL.purple, 13)], [tx(176, '合同 → 等しい角 → 内角の和', 14, C.green, true)]) },
    { note: '❓ どの三角形が合同なの？ △ABP と △BCQ です。AB ＝ BC（正方形の辺）、∠ABP ＝ ∠BCQ ＝ 90°（正方形の角）、BP ＝ CQ（仮定）。2辺とその間の角がそれぞれ等しいので、△ABP ≡ △BCQ です。',
      add: F([...base(), t1(), t2()], [eb(152, 'AB＝BC、∠B＝∠C＝90°、BP＝CQ', C.purple, FILL.purple, 14), tx(206, '2辺とその間の角が等しい → 合同', 12)]) },
    { note: '❓ 合同だと、なぜ角が等しいの？ 合同な図形は、形も大きさもまったく同じで、ぴったり重なります。重なる頂点どうしの角は等しいので、△ABP の ∠BAP と △BCQ の ∠CBQ が等しくなります。',
      add: F([...base(), t1(), t2(), bap(), cbq()], [eb(152, '∠BAP ＝ ∠CBQ', C.green, FILL.green, 18), tx(206, '合同 → 対応する角は等しい', 12)]) },
    { note: 'つぎに、∠ABR を表します。R は線分 BQ の上にあるので ∠ABR ＝ ∠ABQ です。B の角は ∠ABC ＝ 90° で、それが ∠ABQ と ∠CBQ に分かれているので、∠ABQ ＝ 90° − ∠CBQ です。',
      add: F([...base(), dot(toward(B, A, Q, 18), C.purple, 4.5), cbq()], [eb(152, '∠ABR ＝ 90° − ∠CBQ', C.purple, FILL.purple, 16), tx(206, '直角 ＝ ∠ABR ＋ ∠CBQ', 12)]) },
    { note: '先ほどの合同から ∠CBQ ＝ ∠BAP でした。そこで ∠ABR ＝ 90° − ∠CBQ の ∠CBQ を ∠BAP に置きかえると、∠ABR ＝ 90° − ∠BAP となります。',
      add: F([eb(14, '∠ABR ＝ 90° − ∠CBQ', C.purple, FILL.purple, 16, 34), eb(60, '∠CBQ ＝ ∠BAP（合同）', C.green, FILL.green, 16, 34), eb(106, '∠ABR ＝ 90° − ∠BAP', C.blue, FILL.blue, 16, 34)], [tx(180, '等しい角に置きかえる', 13, C.gray, true)]) },
    { note: '△ABR の内角の和は 180° です。R は線分 AP 上にあるので ∠BAR ＝ ∠BAP。∠ARB ＝ 180° − ∠BAR − ∠ABR ＝ 180° − ∠BAP − (90° − ∠BAP) ＝ 90° です。',
      add: F([...base(), pg([A, B, Rr], C.blue, 'rgba(2,132,199,0.25)'), dot(toward(Rr, A, B, 14), C.red, 5)], [eb(152, '180° − ∠BAP − (90° − ∠BAP)', C.blue, FILL.blue, 14), tx(206, '＝ 90°', 16, C.red, true)]) },
    { note: '❓ なぜ、∠BAP が消えたの？ 「− ∠BAP」と「− (90° − ∠BAP)」の中の「＋ ∠BAP」が打ち消し合うからです。180° − ∠BAP − 90° ＋ ∠BAP ＝ 90°。P や Q がどこにあっても、BP ＝ CQ なら同じ角が現れて消えるので、いつも 90° になります。',
      add: F([eb(14, '180° − ∠BAP − 90° ＋ ∠BAP', C.blue, FILL.blue, 15, 34), eb(60, '∠BAP が 打ち消し合う', C.red, FILL.red, 16, 34), eb(106, '＝ 90°', C.green, FILL.green, 18, 34)], [tx(180, 'P の位置によらず 90°', 13, C.gray, true)]) },
    { note: '確かめ（検算）をします。いちばん極端な場合として P ＝ B、Q ＝ C のときを考えると、AP は AB、BQ は BC と重なり、交点 R は B になります。AB と BC は正方形の辺なので直角に交わり、やはり 90° です。',
      add: F([pg([A, B, Cc, D], C.ink, 'rgba(255,255,255,0)'), ln(A[0], A[1], B[0], B[1], C.red, false, 3), ln(B[0], B[1], Cc[0], Cc[1], C.blue, false, 3), lb(102, 14, 'A', 12, C.ink, 'end', true), lb(102, 122, 'B', 12, C.ink, 'end', true), lb(218, 122, 'C', 12, C.ink, 'start', true), lb(218, 14, 'D', 12, C.ink, 'start', true), bx(110, 94, 16, 16, undefined, C.green, 'rgba(255,255,255,0)')], [eb(152, 'P＝B、Q＝C のとき AB ⊥ BC', C.green, FILL.green, 15), tx(206, '極端な場合でも 90°', 12)]) },
    { note: '証明のまとめです。△ABP と △BCQ において、AB ＝ BC、∠ABP ＝ ∠BCQ ＝ 90°、BP ＝ CQ より △ABP ≡ △BCQ。よって ∠BAP ＝ ∠CBQ。△ABR で ∠ARB ＝ 180° − ∠BAP − (90° − ∠CBQ) ＝ 90°（証明終）。',
      add: F([eb(10, '① △ABP ≡ △BCQ（2辺とその間の角）', C.blue, FILL.blue, 13, 34), eb(54, '② ∠BAP ＝ ∠CBQ', C.green, FILL.green, 15, 34), eb(98, '③ △ABR の内角の和から ∠ARB ＝ 90°', C.purple, FILL.purple, 13, 34)], [tx(176, '証明終', 14, C.green, true)]) },
  ];
  return show(s, '正方形と直角の証明');
})();

// ── tokai_sansu_10：中点連結と面積比 ──
const tsa10 = (() => {
  const A: Pt = [160, 14], B: Pt = [70, 110], Cc: Pt = [250, 110], M: Pt = [115, 62], N: Pt = [205, 62], L: Pt = [160, 110];
  const base = (): E[] => [pg([A, B, Cc], C.ink, 'rgba(255,255,255,0)'), ln(M[0], M[1], N[0], N[1], C.red, false, 2),
    lb(160, 10, 'A', 12, C.ink, 'middle', true), lb(62, 122, 'B', 12, C.ink, 'end', true), lb(258, 122, 'C', 12, C.ink, 'start', true), lb(106, 62, 'M', 12, C.ink, 'end', true), lb(214, 62, 'N', 12, C.ink, 'start', true)];
  const four = (): E[] => [ln(M[0], M[1], L[0], L[1], C.green, false, 2), ln(N[0], N[1], L[0], L[1], C.green, false, 2), lb(160, 124, 'L', 12, C.ink, 'middle', true)];
  const s: Slide[] = [
    { note: '△ABC の辺 AB、AC の中点をそれぞれ M、N とします。△AMN と四角形 MBCN の面積比を求めます。',
      add: F([...base(), pg([A, M, N], C.blue, 'rgba(2,132,199,0.25)'), pg([M, B, Cc, N], C.main, 'rgba(255,248,236,0.9)')], [eb(152, '△AMN ： 四角形MBCN ＝ ？', C.blue, FILL.blue, 16), tx(206, 'M、N は AB、AC の中点', 12)]) },
    { note: '❓ まず、△AMN と △ABC の関係は？ AM：AB ＝ 1：2、AN：AC ＝ 1：2 で、∠A が共通なので、2組の辺の比とその間の角が等しく、△AMN ∽ △ABC（相似比 1：2）です。このとき MN ∥ BC、MN ＝ ½ BC です（中点連結定理）。',
      add: F([...base(), pg([A, M, N], C.blue, 'rgba(2,132,199,0.25)')], [eb(152, '△AMN ∽ △ABC（相似比 1：2）', C.purple, FILL.purple, 15), tx(206, 'AM：AB ＝ AN：AC ＝ 1：2、∠A 共通', 12)]) },
    { note: '相似比が 1：2 とわかりました。では、面積比は 1：2 でしょうか。三角形は「たて」も「よこ」も半分になっているので、そのまま 1：2 にはなりません。この先で、理由をたしかめます。',
      add: F([...base(), pg([A, M, N], C.blue, 'rgba(2,132,199,0.25)'), lb(160, 136, '長さは 1/2 だけど 面積は？', 11, C.red, 'middle', true)], [eb(152, '長さの比 1：2 ≠ 面積の比？', C.red, FILL.red, 16), tx(206, 'たて・よこの2方向が半分になる', 12)]) },
    { note: '❓ 面積比は、どう考えればわかるの？ BC の中点 L を取り、ML と NL を引いてみます。△ABC が、小さな4つの三角形に分かれます。',
      add: F([...base(), ...four()], [eb(152, 'BC の中点 L をとる', C.green, FILL.green, 17), tx(206, 'ML、NL を引くと 4つに分かれる', 12)]) },
    { note: '❓ この4つは、なぜ同じ大きさなの？ M、N、L はどれも中点なので、中点連結定理から、どの小さな三角形の3辺も、△ABC の対応する辺の半分です（MN＝½BC、ML＝½AC、NL＝½AB）。3辺がそれぞれ等しいので、4つは合同です。',
      add: F([...base(), ...four(), pg([A, M, N], C.blue, 'rgba(2,132,199,0.30)'), pg([M, B, L], C.blue, 'rgba(2,132,199,0.30)'), pg([N, L, Cc], C.blue, 'rgba(2,132,199,0.30)'), pg([M, L, N], C.blue, 'rgba(2,132,199,0.30)')], [eb(152, '3辺が等しい → 4つとも合同', C.blue, FILL.blue, 16), tx(206, '辺は どれも ½ABC の半分', 12)]) },
    { note: '4つの三角形は合同なので、面積も同じです。△ABC の面積を 4 とすると、小さな三角形1つは 1。△AMN は小さな三角形1つぶんなので、面積は 1 です。面積比は 1：4（＝相似比 1：2 の2乗）と一致します。',
      add: F([...base(), ...four(), pg([A, M, N], C.blue, 'rgba(2,132,199,0.40)'), lb(160, 44, '1', 12, C.blue, 'middle', true), lb(124, 92, '1', 12, C.ink, 'middle', true), lb(196, 92, '1', 12, C.ink, 'middle', true), lb(160, 92, '1', 12, C.ink, 'middle', true)], [eb(152, '△AMN ： △ABC ＝ 1 ： 4', C.green, FILL.green, 16), tx(206, '1：2 の2乗 ＝ 1：4', 12)]) },
    { note: '❓ 面積比が「2乗」になる理由も、ここからわかります。長さが 1/2 になると、たてもよこも 1/2 になるので、面積は 1/2 × 1/2 ＝ 1/4 になります。だから、相似比が 1：2 なら面積比は 1：4 です。',
      add: F([bx(20, 18, 130, 50, 'たて 1/2 × よこ 1/2', C.blue, FILL.blue, 12), lb(165, 46, '＝', 18, C.ink, 'middle', true), bx(180, 18, 120, 50, '面積 1/4', C.green, FILL.green, 14), lb(160, 98, '相似比 1：2 → 面積比 1：4', 13, C.purple, 'middle', true)], [tx(170, '長さは 2方向に はたらくので 2乗', 13, C.gray, true)]) },
    { note: '四角形 MBCN は、△ABC から △AMN をのぞいた部分です。△ABC ＝ 4 から △AMN ＝ 1 を引くと、四角形 MBCN ＝ 4 − 1 ＝ 3。小さな三角形3つぶんです。よって △AMN：四角形 MBCN ＝ 1：3。',
      add: F([...base(), ...four(), pg([A, M, N], C.blue, 'rgba(2,132,199,0.40)'), pg([M, B, Cc, N], C.red, 'rgba(225,29,72,0.25)')], [eb(152, '4 − 1 ＝ 3　→　1 ： 3', C.green, FILL.green, 17), tx(206, '青 1つぶん ： 赤 3つぶん', 12)]) },
    { note: '確かめ（検算）をします。△AMN の 1 と四角形 MBCN の 3 を合わせると 1 ＋ 3 ＝ 4 で、△ABC 全体（比 4）にもどります。',
      add: F([bx(20, 30, 70, 40, '△AMN 1', C.blue, FILL.blue, 12), bx(90, 30, 210, 40, '四角形MBCN 3', C.red, FILL.red, 13), lb(160, 22, '全体（△ABC）＝ 4', 12, C.gray, 'middle', true), lb(160, 100, '1 ＋ 3 ＝ 4 ✓', 15, C.green, 'middle', true)], [tx(170, '部分を足すと 全体にもどる', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。相似比 1：2 を、そのまま面積比として使ってしまう。1：2 とすると、四角形は「2 − 1 ＝ 1」となり、1：1 になってしまいます。面積比は相似比の2乗の 1：4 です。',
      add: F([eb(14, '× 面積比を 1：2 として 1：1 にする', C.red, FILL.red, 14, 34), eb(60, '× 相似比をそのまま使う', C.red, FILL.red, 15, 34), eb(106, '○ 面積比 ＝ 1：4、四角形は 4 − 1 ＝ 3', C.green, FILL.green, 13, 34)], [tx(180, '面積比は 相似比の2乗', 13, C.green, true)]) },
    { note: '答えは 1：3 です。相似比 1：2 から面積比 1：4 を出し、△ABC ＝ 4 から △AMN ＝ 1 を引いて四角形 ＝ 3 としました。',
      add: F([...base(), ...four(), pg([A, M, N], C.blue, 'rgba(2,132,199,0.40)'), pg([M, B, Cc, N], C.red, 'rgba(225,29,72,0.25)')], [eb(152, '答え　1 ： 3', C.green, FILL.green, 18), tx(206, '△AMN 1 ： 四角形 3', 12)]) },
  ];
  return show(s, '中点連結定理と面積比');
})();

// ── tokai_sansu_11：座標と直角三角形 ──
const tsa11 = (() => {
  const A: Pt = [130, 110], B: Pt = [210, 50], Cc: Pt = [70, 30];
  const base = (): E[] => [pg([A, B, Cc], C.main, 'rgba(14,165,233,0.14)'), dot(A, C.ink), dot(B, C.ink), dot(Cc, C.ink),
    lb(124, 124, 'A(1, 2)', 11, C.ink, 'end', true), lb(216, 48, 'B(5, 5)', 11, C.ink, 'start', true), lb(76, 22, 'C(−2, 6)', 11, C.ink, 'middle', true)];
  const s: Slide[] = [
    { note: '座標平面上に 3点 A(1, 2)、B(5, 5)、C(−2, 6) があります。△ABC が直角三角形であることを示し、直角となる頂点を答えます。',
      add: F(base(), [eb(152, 'A(1,2)　B(5,5)　C(−2,6)', C.blue, FILL.blue, 15), tx(206, '直角になる頂点はどれ？', 12)]) },
    { note: '❓ 直角三角形かどうかは、どうやって調べるの？ 三平方の定理の逆を使います。「3辺の長さ a、b、c について a² ＋ b² ＝ c² が成り立てば、c の向かい側の角が直角」です。なぜなら、a、b を直角にはさんだ三角形の斜辺は、三平方の定理から c になり、3辺が等しい三角形は合同だからです。',
      add: F([bx(20, 16, 280, 34, 'a² ＋ b² ＝ c² が成り立つなら', C.blue, FILL.blue, 14), ar(160, 52, 160, 64, C.gray), bx(20, 66, 280, 34, 'c の向かい側の角が 直角', C.green, FILL.green, 14), lb(160, 122, '3辺が決まれば 形も決まる（合同）', 12, C.gray, 'middle', true)], [tx(176, '三平方の定理の逆', 14, C.purple, true)]) },
    { note: '❓ 辺の長さは、座標からどう出すの？ 座標の差を2辺にした直角三角形をつくって、三平方の定理を使います。AB は A から右に 4、上に 3 なので、AB² ＝ 4² ＋ 3² ＝ 16 ＋ 9 ＝ 25 です（長さは 5）。',
      add: F([...base(), ln(130, 110, 210, 110, C.blue, true, 2), ln(210, 110, 210, 50, C.blue, true, 2), lb(170, 136, '右 4', 10, C.blue, 'middle', true), lb(222, 84, '上 3', 10, C.blue, 'start', true)], [eb(152, 'AB² ＝ 4² ＋ 3² ＝ 25', C.blue, FILL.blue, 16), tx(206, '座標の差 ＝ 直角三角形の2辺', 12)]) },
    { note: '同じようにして AC を求めます。A から C へは、左に 3、上に 4。AC² ＝ 3² ＋ 4² ＝ 9 ＋ 16 ＝ 25 です（長さは 5）。',
      add: F([...base(), ln(130, 110, 70, 110, C.green, true, 2), ln(70, 110, 70, 30, C.green, true, 2), lb(100, 136, '左 3', 10, C.green, 'middle', true), lb(62, 72, '上 4', 10, C.green, 'end', true)], [eb(152, 'AC² ＝ 3² ＋ 4² ＝ 25', C.green, FILL.green, 16), tx(206, '左3・上4', 12)]) },
    { note: '最後に BC。B から C へは、左に 7、上に 1。BC² ＝ 7² ＋ 1² ＝ 49 ＋ 1 ＝ 50 です。',
      add: F([...base(), ln(210, 50, 70, 50, C.red, true, 2), ln(70, 50, 70, 30, C.red, true, 2), lb(140, 64, '左 7', 10, C.red, 'middle', true), lb(62, 42, '上 1', 10, C.red, 'end', true)], [eb(152, 'BC² ＝ 7² ＋ 1² ＝ 50', C.red, FILL.red, 16), tx(206, '左7・上1', 12)]) },
    { note: '❓ どの辺が斜辺の候補なの？ 直角三角形の斜辺は、いちばん長い辺です。c² ＝ a² ＋ b² なので、c² は a² より b² より大きいからです。AB² ＝ 25、AC² ＝ 25、BC² ＝ 50 なので、いちばん長い BC が斜辺の候補です。',
      add: F([eb(14, 'AB² ＝ 25', C.blue, FILL.blue, 15, 30), eb(50, 'AC² ＝ 25', C.green, FILL.green, 15, 30), eb(86, 'BC² ＝ 50（いちばん大きい）', C.red, FILL.red, 15, 30)], [tx(150, 'いちばん長い辺が斜辺の候補', 14, C.purple, true), tx(178, '→ 斜辺が BC なら 直角は向かいの A', 12)]) },
    { note: '確かめます。AB² ＋ AC² ＝ 25 ＋ 25 ＝ 50 ＝ BC²。a² ＋ b² ＝ c² が成り立つので、三平方の定理の逆から、BC の向かい側の頂点 A が直角です。∠A ＝ 90°。',
      add: F([...base(), ci(130, 110, 7, undefined, C.red, NOFILL)], [eb(152, '25 ＋ 25 ＝ 50 → ∠A ＝ 90°', C.green, FILL.green, 16), tx(206, 'AB² ＋ AC² ＝ BC²', 12)]) },
    { note: '別の方法で確かめます。AB は「右 4・上 3」なので傾きは 3/4。AC は「左 3・上 4」なので傾きは 4/(−3)＝−4/3。2直線が垂直なら傾きの積は −1 で、3/4 × (−4/3) ＝ −1。やはり A で垂直です。',
      add: F([eb(14, 'ABの傾き 3/4', C.blue, FILL.blue, 15, 34), eb(60, 'ACの傾き −4/3', C.green, FILL.green, 15, 34), eb(106, '積 3/4 × (−4/3) ＝ −1 → 垂直 ✓', C.purple, FILL.purple, 14, 34)], [tx(180, '傾きの積が −1 なら 垂直', 13, C.gray, true)]) },
    { note: 'よくあるまちがいは、どの辺とどの辺を足すか決めずに計算することです。たとえば AB² ＋ BC² ＝ 25 ＋ 50 ＝ 75 を AC² ＝ 25 と比べて「直角ではない」と判断してしまう。足すのは短い2辺、比べるのは最も長い辺です。',
      add: F([eb(14, '× AB² ＋ BC² ＝ 75 と AC² を比べる', C.red, FILL.red, 14, 34), eb(60, '× 直角は B か C と決めつける', C.red, FILL.red, 14, 34), eb(106, '○ 短い2辺の和 ＝ いちばん長い辺', C.green, FILL.green, 14, 34)], [tx(180, '最も長い辺を先に見つける', 13, C.green, true)]) },
    { note: '答えは ∠A ＝ 90° です。3辺の2乗を座標から出し、AB² ＋ AC² ＝ BC² が成り立つので、A が直角の頂点です。',
      add: F([...base(), ci(130, 110, 7, undefined, C.red, NOFILL)], [eb(152, '答え　∠A ＝ 90°', C.green, FILL.green, 18), tx(206, 'AB² ＋ AC² ＝ BC² が成り立つ', 12)]) },
  ];
  return show(s, '座標と直角三角形');
})();

// ── shitennoji_koko_sansu_02：連立方程式（ノートと鉛筆） ──
const items = (nN: number, nP: number, y: number, tail: string, x0 = 12): E[] => {
  const out: E[] = [];
  let x = x0;
  for (let i = 0; i < nN; i++) { out.push(bx(x, y, 28, 30, 'ノ', C.blue, FILL.blue, 12)); x += 32; }
  if (nN > 0 && nP > 0) { out.push(lb(x + 2, y + 20, '＋', 14, C.ink, 'start', true)); x += 18; }
  for (let i = 0; i < nP; i++) { out.push(bx(x, y, 18, 30, '鉛', C.red, FILL.red, 10)); x += 21; }
  out.push(lb(x + 6, y + 20, tail, 13, C.ink, 'start', true));
  return out;
};
const shi02 = (() => {
  const s: Slide[] = [
    { note: 'ノート1冊と鉛筆3本の代金は 320円、ノート2冊と鉛筆1本の代金は 340円です。ノート1冊と鉛筆1本の値段をそれぞれ求めます。（ノ＝ノート、鉛＝鉛筆）',
      add: F([...items(1, 3, 22, '＝ 320円'), ...items(2, 1, 72, '＝ 340円')], [eb(152, 'ノート1冊の値段と 鉛筆1本の値段は？', C.blue, FILL.blue, 14), tx(206, '2つの買い物から求める', 12)]) },
    { note: '❓ なぜ、文字を使って式にするの？ ノート1冊の値段も鉛筆1本の値段もわからないので、ノートを x円、鉛筆を y円 とおきます。わからない値を文字でおくと、2つの買い物の関係を、そのまま式で書けるからです。x ＋ 3y ＝ 320、2x ＋ y ＝ 340。',
      add: F([bx(20, 18, 280, 36, 'ノート x円 ／ 鉛筆 y円 とおく', C.purple, FILL.purple, 14), bx(20, 66, 280, 30, 'x ＋ 3y ＝ 320 …①', C.blue, FILL.blue, 15), bx(20, 102, 280, 30, '2x ＋ y ＝ 340 …②', C.green, FILL.green, 15)], [tx(176, '買い物の関係を式で書く', 14, C.gray, true)]) },
    { note: '❓ なぜ、①を2倍するの？ ノートの数をそろえるためです。①を2倍すると「ノート2冊と鉛筆6本で 640円」。②は「ノート2冊と鉛筆1本で 340円」。ノートが2冊で同じになるので、引き算するとノートを消せます。',
      add: F([...items(2, 6, 22, '＝ 640円'), ...items(2, 1, 72, '＝ 340円'), lb(160, 122, '①を2倍（320円も2倍して640円）', 12, C.red, 'middle', true)], [eb(152, '2x ＋ 6y ＝ 640', C.red, FILL.red, 16), tx(206, 'ノートを2冊にそろえる', 12)]) },
    { note: '引き算します。（ノート2冊と鉛筆6本）− （ノート2冊と鉛筆1本）は、ノートが消えて鉛筆5本だけが残ります。代金も 640 − 340 ＝ 300円。つまり、鉛筆5本で 300円です。',
      add: F([...items(2, 6, 14, '＝ 640円'), ...items(2, 1, 54, '＝ 340円 を引く'), ...items(0, 5, 98, '＝ 300円')], [eb(152, '5y ＝ 640 − 340 ＝ 300', C.green, FILL.green, 16), tx(206, 'ノートが消えて 鉛筆5本が残る', 12)]) },
    { note: '❓ なぜ、300 ÷ 5 で鉛筆1本の値段が出るの？ 鉛筆5本で 300円、5本とも同じ値段なので、300円を5本に等しく分ければ1本ぶんです。300 ÷ 5 ＝ 60。鉛筆は 1本 60円。',
      add: F([...[0, 1, 2, 3, 4].map((i) => bx(20 + i * 58, 30, 52, 44, '60円', C.red, FILL.red, 13)), lb(160, 98, '300円を 5本に等しく分ける', 12, C.gray, 'middle', true)], [eb(152, '300 ÷ 5 ＝ 60（鉛筆 1本）', C.green, FILL.green, 16), tx(206, 'y ＝ 60', 13)]) },
    { note: '❓ ノートの値段は、どうやって出すの？ 鉛筆が 60円とわかったので、①の「ノート1冊と鉛筆3本で 320円」にもどします。鉛筆3本は 60 × 3 ＝ 180円。ノート1冊は 320 − 180 ＝ 140円です。',
      add: F([bx(12, 22, 28, 30, 'ノ', C.blue, FILL.blue, 12), ...[0, 1, 2].map((i) => bx(60 + i * 56, 22, 50, 30, '60円', C.red, FILL.red, 12)), lb(236, 42, '＝ 320円', 13, C.ink, 'start', true), lb(160, 82, '鉛筆3本 60×3 ＝ 180円', 12, C.red, 'middle', true), lb(160, 106, 'ノート ＝ 320 − 180 ＝ 140円', 13, C.blue, 'middle', true)], [eb(152, 'x ＝ 320 − 180 ＝ 140', C.green, FILL.green, 17), tx(206, '①にもどして 代入する', 12)]) },
    { note: '確かめ（検算）をします。②「ノート2冊と鉛筆1本」に当てはめると、140 × 2 ＋ 60 ＝ 280 ＋ 60 ＝ 340円。もとの代金とぴったり合います。①も 140 ＋ 60×3 ＝ 140 ＋ 180 ＝ 320円で合います。',
      add: F([eb(14, '② 2 × 140 ＋ 60 ＝ 340 ✓', C.green, FILL.green, 16, 34), eb(60, '① 140 ＋ 3 × 60 ＝ 320 ✓', C.green, FILL.green, 16, 34)], [tx(150, '2つの式にあてはめて確かめる', 13, C.gray, true), tx(176, 'どちらも合うので 正しい', 13, C.green, true)]) },
    { note: '別の方法でも確かめます。②を3倍して、鉛筆の数を3本にそろえます。②×3 は 6x ＋ 3y ＝ 1020。①は x ＋ 3y ＝ 320。引くと 5x ＝ 700、x ＝ 140。ノートは 140円で、さきほどと同じです。',
      add: F([eb(14, '②×3：6x ＋ 3y ＝ 1020', C.blue, FILL.blue, 15, 30), eb(50, '①　：  x ＋ 3y ＝  320', C.green, FILL.green, 15, 30), eb(86, '引く：5x ＝ 700 → x ＝ 140', C.purple, FILL.purple, 15, 30)], [tx(150, '鉛筆の数をそろえても 同じ答え', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。①を2倍するとき、x と y の係数だけ2倍して、右辺の 320 を2倍し忘れてしまう。すると 2x ＋ 6y ＝ 320 となり、②と引き算すると 5y ＝ −20 と、鉛筆の値段がマイナスになってしまいます。',
      add: F([eb(14, '× 2x ＋ 6y ＝ 320（右辺を2倍し忘れ）', C.red, FILL.red, 14, 34), eb(60, '× 引くと 5y ＝ −20（マイナスの値段）', C.red, FILL.red, 14, 34), eb(106, '○ 両辺とも2倍：2x ＋ 6y ＝ 640', C.green, FILL.green, 14, 34)], [tx(180, '2倍は 両辺とも', 13, C.green, true)]) },
    { note: '答えは、ノート 140円、鉛筆 60円 です。①を2倍して②を引き、鉛筆の値段 60円を出し、①にもどしてノートの値段 140円を出しました。',
      add: F([...items(1, 3, 22, '＝ 320円'), ...items(2, 1, 72, '＝ 340円')], [eb(152, '答え　ノート140円、鉛筆60円', C.green, FILL.green, 16), tx(206, '140 ＋ 180 ＝ 320、280 ＋ 60 ＝ 340', 12)]) },
  ];
  return show(s, '連立方程式：ノートと鉛筆');
})();

// ── shitennoji_koko_sansu_05：3平方の定理（斜辺） ──
const shi05 = (() => {
  const C0: Pt = [110, 100], A: Pt = [110, 64], B: Pt = [158, 100];
  const tri = (): E[] => [pg([[110, 41], [194, 104], [110, 104]], C.main, 'rgba(14,165,233,0.14)'), bx(110, 94, 10, 10, undefined, C.ink, NOFILL), lb(102, 74, '9', 12, C.green, 'end', true), lb(152, 120, '12', 12, C.blue, 'middle', true), lb(158, 66, '？', 12, C.red, 'start', true),
    lb(104, 38, 'A', 12, C.ink, 'end', true), lb(200, 108, 'B', 12, C.ink, 'start', true), lb(102, 112, 'C', 12, C.ink, 'end', true)];
  const s: Slide[] = [
    { note: '直角三角形 ABC で、∠C ＝ 90°、AC ＝ 9cm、BC ＝ 12cm です。斜辺 AB の長さを求めます。',
      add: F(tri(), [eb(152, '∠C＝90° ／ AC＝9cm ／ BC＝12cm', C.blue, FILL.blue, 14), tx(206, '斜辺 AB は何cm？', 12)]) },
    { note: '❓ 三平方の定理とは何？ 直角三角形の3辺の上に正方形をつくると、短い2辺の正方形の面積の和が、斜辺の正方形の面積と等しくなります。ここでは 9² ＝ 81 と 12² ＝ 144 を足して 225 です。',
      add: F([pg([A, B, C0], C.main, 'rgba(14,165,233,0.14)'), pg([[110, 64], [74, 64], [74, 100], [110, 100]], C.green, FILL.green), lb(92, 84, '81', 11, C.green, 'middle', true), pg([[110, 100], [158, 100], [158, 148], [110, 148]], C.blue, FILL.blue), lb(134, 128, '144', 11, C.blue, 'middle', true), pg([[110, 64], [158, 100], [194, 52], [146, 16]], C.red, FILL.red), lb(152, 58, '225', 11, C.red, 'middle', true)], [eb(152, '81 ＋ 144 ＝ 225', C.purple, FILL.purple, 17), tx(206, '小さい2つの正方形 ＝ 大きい正方形', 12)]) },
    { note: '❓ でも、なぜいつもそうなるの？ 1辺が 9＋12＝21 の大きな正方形を考えます。この中に、9・12・15 の直角三角形を4つ、ぐるりと並べると、まん中に斜辺 15 を1辺とする正方形ができます。',
      add: F([pg([[110, 10], [215, 10], [215, 115], [110, 115]], C.ink, NOFILL), pg([[155, 10], [215, 55], [170, 115], [110, 70]], C.red, FILL.red), lb(130, 24, '9', 11, C.green, 'middle', true), lb(198, 24, '12', 11, C.blue, 'middle', true), lb(160, 66, '斜辺の正方形', 10, C.red, 'middle', true)], [eb(152, '1辺 9＋12 ＝ 21 の大きな正方形', C.blue, FILL.blue, 14), tx(206, '4つの直角三角形 ＋ まん中の正方形', 12)]) },
    { note: '大きな正方形の面積は 21×21 ＝ 441。これは「まん中の正方形（斜辺×斜辺）」と「直角三角形4つ」の合計です。三角形1つは ½ × 9 × 12 ＝ 54 なので、4つで 216。だから、斜辺の正方形 ＝ 441 − 216 ＝ 225 です。',
      add: F([pg([[110, 10], [215, 10], [215, 115], [110, 115]], C.ink, NOFILL), pg([[155, 10], [215, 55], [170, 115], [110, 70]], C.red, FILL.red), lb(162, 66, '斜辺²', 11, C.red, 'middle', true)], [eb(152, '441 − 4×54 ＝ 441 − 216 ＝ 225', C.red, FILL.red, 14), tx(206, '斜辺の正方形の面積 ＝ 斜辺²', 12)]) },
    { note: 'つまり AB² ＝ 225 です。一方、短い2辺の正方形は 9² ＋ 12² ＝ 81 ＋ 144 ＝ 225。大きな正方形の計算と同じ値になりました。だから、いつでも 斜辺² ＝ 他の2辺の2乗の和 が成り立ちます。',
      add: F([eb(14, '斜辺²（図の計算）＝ 225', C.red, FILL.red, 15, 34), eb(60, '9² ＋ 12² ＝ 81 ＋ 144 ＝ 225', C.blue, FILL.blue, 15, 34), eb(106, '同じ値 → 斜辺² ＝ 9² ＋ 12²', C.green, FILL.green, 15, 34)], [tx(180, '三平方の定理のたしかめ', 13, C.gray, true)]) },
    { note: '❓ AB² ＝ 225 から、AB はどう出すの？ 2乗して 225 になる正の数を探します。15 × 15 ＝ 225 なので AB ＝ 15cm です。長さは正なので、負の数は考えません。',
      add: F([bx(110, 14, 100, 100, '225', C.red, FILL.red, 22), lb(100, 66, '15', 12, C.red, 'end', true), lb(160, 128, '15', 12, C.red, 'middle', true)], [eb(152, '15 × 15 ＝ 225 → AB ＝ 15cm', C.green, FILL.green, 16), tx(206, '面積 225 の正方形の 1辺', 12)]) },
    { note: '❓ 斜辺を求めるときは、足すの？ 引くの？ 斜辺は、いちばん長い辺なので、短い2辺の2乗を「足し」ます。逆に、短い辺を求めるときは、斜辺の2乗から「引き」ます。今回は斜辺を求めるので、足し算です。',
      add: F([eb(14, '斜辺を求める → 足す：9²＋12²', C.blue, FILL.blue, 15, 34), eb(60, '短い辺を求める → 引く：斜辺²−○²', C.green, FILL.green, 14, 34)], [tx(150, '今回は 斜辺を求めるので 足し算', 14, C.green, true), tx(178, 'いちばん長い辺は 足して大きくなる', 12)]) },
    { note: '確かめ（検算）をします。9：12：15 を 3 でわると 3：4：5。これは直角三角形の代表的な辺の比です。9、12 がその3倍なので、斜辺も 5×3 ＝ 15 で、計算と一致しました。',
      add: F([eb(14, '9 ： 12 ： 15', C.blue, FILL.blue, 17, 34), eb(60, '÷ 3 → 3 ： 4 ： 5', C.green, FILL.green, 17, 34), eb(106, '直角三角形の代表の比 ✓', C.purple, FILL.purple, 15, 34)], [tx(180, '3：4：5 を 3倍した形', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。2乗せずに 9 ＋ 12 ＝ 21 と足してしまう。三角形は、2辺の和が斜辺にならず、斜辺は 2辺の和より短いので 21 にはなりません。2乗して足して、最後に平方根をとります。',
      add: F([eb(14, '× 9 ＋ 12 ＝ 21', C.red, FILL.red, 16, 34), eb(60, '× 2乗して足したのを そのまま答える（225）', C.red, FILL.red, 14, 34), eb(106, '○ 2乗して足して 最後に平方根 → 15', C.green, FILL.green, 14, 34)], [tx(180, '2乗 → 足す → 平方根', 13, C.green, true)]) },
    { note: '答えは 15cm です。AB² ＝ 9² ＋ 12² ＝ 81 ＋ 144 ＝ 225、AB ＝ 15cm。',
      add: F([...tri().slice(0, 3), lb(158, 66, '15', 12, C.red, 'start', true), lb(104, 38, 'A', 12, C.ink, 'end', true), lb(200, 108, 'B', 12, C.ink, 'start', true), lb(102, 112, 'C', 12, C.ink, 'end', true)], [eb(152, '答え　15cm', C.green, FILL.green, 18), tx(206, '81 ＋ 144 ＝ 225 → 15', 13)]) },
  ];
  return show(s, '三平方の定理：斜辺を求める');
})();

// ── shitennoji_koko_sansu_09：縦が横より3cm短い長方形 ──
const rectFig = (w: string, h1: string, h2: string): E[] => [bx(70, 16, 180, 86, '面積 54cm²', C.main, FILL.warm, 14), lb(160, 114, w, 12, C.blue, 'middle', true), lb(64, 54, h1, 12, C.red, 'end', true), lb(64, 70, h2, 12, C.red, 'end', true)];
const shi09 = (() => {
  const s: Slide[] = [
    { note: '縦の長さが横の長さより 3cm 短い長方形があり、面積は 54cm² です。この長方形の縦と横の長さをそれぞれ求めます。',
      add: F(rectFig('横 ？cm', '縦は', '3cm短い'), [eb(152, '縦 ＝ 横 − 3 ／ 面積 54cm²', C.blue, FILL.blue, 15), tx(206, '縦と横は？', 12)]) },
    { note: '❓ なぜ、横を x とおくと縦が x − 3 になるの？ 「縦は横より 3cm 短い」は、縦 ＝ 横 − 3 ということです。横が x cm なら、縦は 3cm 引いた (x − 3) cm になります。',
      add: F(rectFig('横 x cm', '縦', '(x−3)cm'), [eb(152, '縦 ＝ 横 − 3 ＝ x − 3', C.purple, FILL.purple, 16), tx(206, '短い → 引く', 12)]) },
    { note: '❓ なぜ、x(x − 3) ＝ 54 という式になるの？ 長方形の面積は「縦 × 横」だからです。縦は (x − 3)、横は x、面積は 54 なので、x × (x − 3) ＝ 54 と書けます。',
      add: F(rectFig('横 x cm', '縦', '(x−3)cm'), [eb(152, 'x ( x − 3 ) ＝ 54', C.green, FILL.green, 18), tx(206, '面積 ＝ 縦 × 横', 12)]) },
    { note: '式を展開します。x(x − 3) ＝ x² − 3x なので、x² − 3x ＝ 54、移項して x² − 3x − 54 ＝ 0。図で見ると、1辺 x の正方形（面積 x²）から、はば 3・長さ x の細長い部分（面積 3x）をのぞいた形です。',
      add: F([bx(90, 14, 120, 100, 'x²', C.blue, FILL.blue, 18), bx(90, 84, 120, 30, '3x（のぞく）', C.red, FILL.red, 11), lb(160, 130, 'x² − 3x ＝ 54', 13, C.green, 'middle', true)], [eb(152, 'x² − 3x − 54 ＝ 0', C.green, FILL.green, 18), tx(206, '展開して 54 を移項', 12)]) },
    { note: '❓ なぜ、因数分解するの？ 「かけて 0 になる2つの数」の形にできれば、「どちらかが 0」と言えて、x の値がわかるからです。x² − 3x − 54 を (x ＋ p)(x ＋ q) の形にします。展開すると x² ＋ (p＋q)x ＋ pq なので、足して −3、かけて −54 になる p、q を探します。',
      add: F([bx(20, 14, 280, 30, '(x ＋ p)(x ＋ q) ＝ x² ＋ (p＋q)x ＋ pq', C.blue, FILL.blue, 12), bx(20, 54, 130, 30, 'p ＋ q ＝ −3', C.green, FILL.green, 14), bx(170, 54, 130, 30, 'p × q ＝ −54', C.red, FILL.red, 14), bx(20, 98, 280, 30, 'p ＝ −9、q ＝ 6（−9＋6＝−3、−9×6＝−54）', C.purple, FILL.purple, 12)], [tx(176, '足して −3、かけて −54', 14, C.gray, true)]) },
    { note: 'よって (x − 9)(x ＋ 6) ＝ 0 です。❓ なぜ、x ＝ 9 か x ＝ −6 になるの？ 2つの数をかけて 0 になるのは、どちらかが 0 のときだけだからです。x − 9 ＝ 0 なら x ＝ 9、x ＋ 6 ＝ 0 なら x ＝ −6。',
      add: F([bx(20, 18, 280, 34, '(x − 9)(x ＋ 6) ＝ 0', C.blue, FILL.blue, 18), bx(20, 66, 130, 34, 'x − 9 ＝ 0 → x ＝ 9', C.green, FILL.green, 12), bx(170, 66, 130, 34, 'x ＋ 6 ＝ 0 → x ＝ −6', C.red, FILL.red, 12)], [tx(176, 'かけて0 → どちらかが0', 14, C.gray, true)]) },
    { note: '❓ なぜ、x ＝ −6 は捨てるの？ x は横の長さです。長さはマイナスになれないので、x ＝ −6 は問題に合いません。残る x ＝ 9 が、横の長さです。',
      add: F([bx(20, 24, 130, 40, 'x ＝ 9 ○', C.green, FILL.green, 18), bx(170, 24, 130, 40, 'x ＝ −6 ×', C.red, FILL.red, 18), lb(160, 98, '長さは 正の数', 14, C.ink, 'middle', true)], [eb(152, '横 ＝ 9cm', C.green, FILL.green, 18), tx(206, '長さはマイナスにならない', 12)]) },
    { note: '縦は 横 − 3 ＝ 9 − 3 ＝ 6cm です。確かめ（検算）をします。縦 × 横 ＝ 6 × 9 ＝ 54cm²、横 − 縦 ＝ 9 − 6 ＝ 3cm。どちらも問題の条件とぴったり一致しました。',
      add: F(rectFig('横 9cm', '縦', '6cm'), [eb(152, '6 × 9 ＝ 54 ✓　9 − 6 ＝ 3 ✓', C.green, FILL.green, 16), tx(206, '2つの条件に合う', 12)]) },
    { note: 'よくあるまちがいです。x ＝ −6 も答えにしてしまう。方程式の解は2つ出ても、それが問題に合うとは限りません。必ず「長さは正」などの条件で、合うものだけを選びます。',
      add: F([eb(14, '× x ＝ 9 と x ＝ −6 の両方を答える', C.red, FILL.red, 14, 34), eb(60, '× 縦を 9、横を 6 としてしまう', C.red, FILL.red, 14, 34), eb(106, '○ 条件に合う 横 9cm・縦 6cm', C.green, FILL.green, 15, 34)], [tx(180, '解が問題の条件に合うか確かめる', 13, C.green, true)]) },
    { note: '答えは 縦 6cm、横 9cm です。',
      add: F(rectFig('横 9cm', '縦', '6cm'), [eb(152, '答え　縦 6cm、横 9cm', C.green, FILL.green, 17), tx(206, 'x(x−3) ＝ 54 を解いた', 12)]) },
  ];
  return show(s, '長方形と2次方程式');
})();

// ── shitennoji_koko_sansu_10：2直線の交点 ──
const lineFig = (): E[] => [
  ln(40, 120, 270, 120, C.gray, false, 1.6), ln(40, 120, 40, 18, C.gray, false, 1.6), lb(274, 124, 'x', 11, C.ink, 'start', true), lb(34, 16, 'y', 11, C.ink, 'end', true),
  ln(40, 110, 160, 30, C.blue, false, 2.5), ln(40, 50, 250, 120, C.red, false, 2.5),
  lb(164, 28, 'y＝2x＋1', 11, C.blue, 'start', true), lb(200, 92, 'y＝−x＋7', 11, C.red, 'start', true),
];
const shi10 = (() => {
  const Q: Pt = [100, 70];
  const s: Slide[] = [
    { note: '2直線 y ＝ 2x ＋ 1 と y ＝ −x ＋ 7 の交点の座標を求めます。',
      add: F(lineFig(), [eb(152, 'y ＝ 2x ＋ 1 と y ＝ −x ＋ 7', C.blue, FILL.blue, 15), tx(206, '交わる点の座標は？', 12)]) },
    { note: '❓ 「交点」とは、どんな点？ 2本の直線の両方の上にある点です。直線上の点は、その直線の式を満たします。だから交点は、2つの式をどちらも同時に満たす点 (x, y) です。',
      add: F([...lineFig(), ci(Q[0], Q[1], 5, undefined, C.green, C.green), lb(104, 102, '交点', 11, C.green, 'start', true), ar(112, 94, 103, 75, C.green)], [eb(152, '両方の式を同時に満たす点', C.green, FILL.green, 16), tx(206, '2つの直線の上にある', 12)]) },
    { note: '❓ なぜ、「y が等しい」とおけるの？ 交点は1つの点なので、x も y も1つの値です。その y を、1つ目の式では 2x ＋ 1、2つ目の式では −x ＋ 7 と表したのだから、この2つは同じ値になります。',
      add: F([bx(20, 14, 280, 32, 'y ＝ 2x ＋ 1', C.blue, FILL.blue, 15), bx(20, 54, 280, 32, 'y ＝ −x ＋ 7', C.red, FILL.red, 15), lb(160, 104, '交点では y が同じ値', 13, C.green, 'middle', true), lb(160, 126, '2x ＋ 1 ＝ −x ＋ 7', 14, C.purple, 'middle', true)], [tx(176, '同じ y を2通りで書いただけ', 13, C.gray, true)]) },
    { note: '2x ＋ 1 ＝ −x ＋ 7 という、x だけの方程式になりました。これを解いて、交点の x 座標を求めます。',
      add: F([eb(24, '2x ＋ 1 ＝ −x ＋ 7', C.purple, FILL.purple, 20, 44), lb(160, 100, 'x だけの方程式', 12, C.gray, 'middle', true)], [eb(152, 'これを 解いて x を求める', C.green, FILL.green, 16), tx(206, 'y が消えた', 12)]) },
    { note: '❓ 移項しても、なぜ等しいままなの？ 天びんと同じで、両辺に同じものを足したり引いたりしても、つり合いは変わらないからです。両辺に x を足して 3x ＋ 1 ＝ 7、両辺から 1 を引いて 3x ＝ 6、両辺を 3 でわって x ＝ 2。',
      add: F([eb(10, '2x ＋ 1 ＝ −x ＋ 7', C.gray, FILL.gray, 14, 28), eb(42, '両辺に x を足す：3x ＋ 1 ＝ 7', C.blue, FILL.blue, 14, 28), eb(74, '両辺から 1 を引く：3x ＝ 6', C.blue, FILL.blue, 14, 28), eb(106, '両辺を 3 でわる：x ＝ 2', C.green, FILL.green, 14, 28)], [tx(170, '両辺に同じことをすれば 等しいまま', 13, C.gray, true)]) },
    { note: 'x ＝ 2 がわかったので、どちらかの式に代入して y を求めます。y ＝ 2x ＋ 1 に x ＝ 2 を入れると、y ＝ 2 × 2 ＋ 1 ＝ 5。',
      add: F([...lineFig(), ci(Q[0], Q[1], 5, undefined, C.green, C.green), ln(100, 120, 100, 70, C.green, true, 1.6), lb(100, 132, 'x＝2', 10, C.green, 'middle', true), ln(40, 70, 100, 70, C.green, true, 1.6), lb(34, 74, '5', 10, C.green, 'end', true)], [eb(152, 'y ＝ 2 × 2 ＋ 1 ＝ 5', C.green, FILL.green, 17), tx(206, 'x ＝ 2 を代入する', 12)]) },
    { note: '❓ なぜ、y も求めるの？ 座標は (x の値, y の値) の2つで1つの点を表すからです。x だけでは、点がどこにあるか決まりません。',
      add: F([bx(40, 30, 100, 44, 'x ＝ 2', C.blue, FILL.blue, 18), lb(160, 58, '＋', 20, C.ink, 'middle', true), bx(180, 30, 100, 44, 'y ＝ 5', C.red, FILL.red, 18), lb(160, 104, '2つそろって 点 (2, 5)', 14, C.purple, 'middle', true)], [eb(152, '座標 ＝ (x, y) の2つ', C.purple, FILL.purple, 17), tx(206, 'x だけでは点が決まらない', 12)]) },
    { note: '確かめ（検算）をします。もう1本の式 y ＝ −x ＋ 7 に x ＝ 2 を入れると、y ＝ −2 ＋ 7 ＝ 5。同じ y ＝ 5 になったので、(2, 5) は2本の直線の両方の上にあります。',
      add: F([eb(14, 'y ＝ 2x ＋ 1 → 2×2＋1 ＝ 5 ✓', C.blue, FILL.blue, 15, 34), eb(60, 'y ＝ −x ＋ 7 → −2＋7 ＝ 5 ✓', C.red, FILL.red, 15, 34), eb(106, '同じ y ＝ 5 → 交点', C.green, FILL.green, 16, 34)], [tx(180, '両方の式に入れて確かめる', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。x ＝ 2 だけを答えにしてしまう。交点の座標は (x, y) の形で答えます。また、2つの式を足したり引いたりする前に、y をそろえる考え方を使うと、式が1本にまとまります。',
      add: F([eb(14, '× x ＝ 2 だけを答える', C.red, FILL.red, 16, 34), eb(60, '× (5, 2) と x、y を逆に書く', C.red, FILL.red, 16, 34), eb(106, '○ (2, 5)', C.green, FILL.green, 18, 34)], [tx(180, '座標は (x, y) の順で', 13, C.green, true)]) },
    { note: '答えは (2, 5) です。y が等しいとおいて x ＝ 2 を出し、代入して y ＝ 5 を出しました。',
      add: F([...lineFig(), ci(Q[0], Q[1], 6, undefined, C.green, C.green), lb(104, 102, '(2, 5)', 12, C.green, 'start', true), ar(112, 94, 103, 75, C.green)], [eb(152, '答え　(2, 5)', C.green, FILL.green, 18), tx(206, '2本の直線が交わる点', 12)]) },
  ];
  return show(s, '2直線の交点');
})();

// ── shitennoji_koko_sansu_11：平行四辺形と合同の証明 ──
const shi11 = (() => {
  const A: Pt = [100, 20], D: Pt = [250, 20], B: Pt = [60, 110], Cc: Pt = [210, 110];
  const base = (): E[] => [pg([A, B, Cc, D], C.ink, NOFILL), ln(B[0], B[1], D[0], D[1], C.ink, false, 2),
    lb(94, 16, 'A', 12, C.ink, 'end', true), lb(256, 16, 'D', 12, C.ink, 'start', true), lb(52, 122, 'B', 12, C.ink, 'end', true), lb(218, 122, 'C', 12, C.ink, 'start', true)];
  const t1 = (): E => pg([A, B, D], C.blue, 'rgba(2,132,199,0.22)');
  const t2 = (): E => pg([Cc, D, B], C.red, 'rgba(225,29,72,0.20)');
  const mAB = (): E[] => [dot(mid(A, B), C.red, 4), dot(mid(D, Cc), C.red, 4)];
  const mAD = (): E[] => [dot(mid(A, D), C.blue, 4), dot(mid(B, Cc), C.blue, 4)];
  const mBD = (): E => dot(mid(B, D), C.green, 4.5);
  const s: Slide[] = [
    { note: '平行四辺形 ABCD で、対角線 BD を引きます。△ABD と △CDB が合同であることを証明します。',
      add: F([...base(), t1(), t2()], [eb(152, '△ABD ≡ △CDB を示す', C.blue, FILL.blue, 16), tx(206, '青い三角形と 赤い三角形', 12)]) },
    { note: '❓ どの合同条件を使えばいいの？ 辺の長さがわかっているので、「3組の辺がそれぞれ等しい」（三辺相等）を目指します。三角形は、3辺の長さが決まれば形も大きさも決まるので、3辺が等しければぴったり重なる（合同）からです。',
      add: F([bx(20, 14, 280, 34, '3組の辺がそれぞれ等しい', C.blue, FILL.blue, 15), ar(160, 50, 160, 64, C.gray), bx(20, 66, 280, 34, '形も大きさも決まる', C.purple, FILL.purple, 15), ar(160, 102, 160, 114, C.gray), bx(20, 116, 280, 20, 'ぴったり重なる ＝ 合同', C.green, FILL.green, 12)], [tx(176, '3辺そろえるのが目標', 14, C.green, true)]) },
    { note: '1組目の辺です。平行四辺形の向かい合う辺（対辺）は等しい、という性質があります。AB と DC は対辺なので、AB ＝ CD です。図の赤い ● が同じ長さを表します。',
      add: F([...base(), ...mAB()], [eb(152, 'AB ＝ CD（平行四辺形の対辺）', C.red, FILL.red, 16), tx(206, '平行四辺形の性質', 12)]) },
    { note: '2組目の辺です。AD と CB もたがいに向かい合う辺（対辺）なので、AD ＝ CB です。図の青い ● が同じ長さを表します。',
      add: F([...base(), ...mAB(), ...mAD()], [eb(152, 'AD ＝ CB（平行四辺形の対辺）', C.blue, FILL.blue, 16), tx(206, 'こちらも 対辺', 12)]) },
    { note: '❓ 3組目の辺は、どこにあるの？ 引いた対角線 BD です。BD は △ABD の辺でもあり、△CDB の辺でもあります。同じ線分なので、当然、同じ長さです。BD ＝ DB（共通な辺）。',
      add: F([...base(), t1(), t2(), mBD()], [eb(152, 'BD ＝ DB（共通な辺）', C.green, FILL.green, 17), tx(206, '2つの三角形が 共有している辺', 12)]) },
    { note: '3組の辺がそろいました。AB ＝ CD、AD ＝ CB、BD ＝ DB。3組の辺がそれぞれ等しいので、△ABD ≡ △CDB（三辺相等、SSS）です。',
      add: F([...base(), t1(), t2(), ...mAB(), ...mAD(), mBD()], [eb(152, '3組の辺が等しい → 合同', C.green, FILL.green, 16), tx(206, '赤・青・緑の ● どうしが等しい', 12)]) },
    { note: '❓ 合同を書くとき、頂点の順番はどうするの？ 重なり合う頂点を、同じ順に書きます。A は C、B は D、D は B に重なります。だから △ABD ≡ △CDB と、A→C、B→D、D→B の順に書きます。順番をまちがえると、別の三角形になってしまいます。',
      add: F([eb(14, 'A ↔ C ／ B ↔ D ／ D ↔ B', C.purple, FILL.purple, 15, 34), eb(60, '△ A B D', C.blue, FILL.blue, 18, 34), eb(106, '△ C D B', C.red, FILL.red, 18, 34)], [tx(180, '重なる頂点を 同じ順に書く', 13, C.gray, true)]) },
    { note: '確かめ（検算）をします。合同なら、対応する角も等しいはずです。∠BAD と ∠DCB は平行四辺形の向かい合う角（対角）で、たしかに等しい。三角形の合同からも、同じ結論になり、食いちがいません。',
      add: F([...base(), t1(), t2(), dot(toward(A, B, D, 18), C.purple, 4.5), dot(toward(Cc, D, B, 18), C.purple, 4.5)], [eb(152, '∠BAD ＝ ∠DCB（対応する角）✓', C.purple, FILL.purple, 15), tx(206, '合同 → 対応する角も等しい', 12)]) },
    { note: 'よくあるまちがいです。共通な辺 BD を、証明の根拠として書かずに使ってしまう。「BD は共通」と必ず書きます。また AB ＝ CD などは、「平行四辺形の対辺は等しい」という理由を添えて書きます。',
      add: F([eb(14, '× 「BD は共通」を書き忘れる', C.red, FILL.red, 15, 34), eb(60, '× AB＝CD の理由を書かない', C.red, FILL.red, 15, 34), eb(106, '○ 理由を添えて 3組の辺をそろえる', C.green, FILL.green, 14, 34)], [tx(180, '等しい理由を 1つずつ書く', 13, C.green, true)]) },
    { note: '証明のまとめです。△ABD と △CDB において、平行四辺形の対辺は等しいので AB ＝ CD、AD ＝ CB。BD は共通の辺なので BD ＝ DB。3組の辺がそれぞれ等しいので △ABD ≡ △CDB（三辺相等、SSS）。',
      add: F([eb(10, '① AB ＝ CD、AD ＝ CB（対辺）', C.blue, FILL.blue, 14, 34), eb(54, '② BD ＝ DB（共通な辺）', C.green, FILL.green, 14, 34), eb(98, '③ 3組の辺が等しい → △ABD ≡ △CDB', C.purple, FILL.purple, 13, 34)], [tx(176, '証明終', 14, C.green, true)]) },
  ];
  return show(s, '平行四辺形と合同の証明');
})();

// ── shitennoji_koko_sansu_16：円の接線と四角形 ──
const shi16 = (() => {
  const O: Pt = [90, 75], A: Pt = [194, 75], B: Pt = [105.4, 38.1], Cc: Pt = [105.4, 111.9];
  const base = (): E[] => [ci(90, 75, 40, undefined, C.gray, NOFILL), ln(A[0], A[1], B[0], B[1], C.ink, false, 2), ln(A[0], A[1], Cc[0], Cc[1], C.ink, false, 2), ln(O[0], O[1], B[0], B[1], C.blue, false, 2), ln(O[0], O[1], Cc[0], Cc[1], C.blue, false, 2), ln(O[0], O[1], A[0], A[1], C.red, true, 2),
    dot(O, C.ink, 2.5), lb(80, 88, 'O', 12, C.ink, 'end', true), lb(201, 79, 'A', 12, C.ink, 'start', true), lb(108, 30, 'B', 12, C.ink, 'start', true), lb(108, 126, 'C', 12, C.ink, 'start', true)];
  const info = (): E[] => [lb(216, 34, 'OA＝13', 11, C.red, 'start', true), lb(216, 52, 'OB＝5', 11, C.blue, 'start', true), lb(216, 70, 'AB＝？', 11, C.ink, 'start', true)];
  const s: Slide[] = [
    { note: '円 O で、点 A から円に引いた2本の接線の接点を B、C とします。OA ＝ 13cm、円の半径 OB ＝ 5cm のとき、接線 AB の長さと、四角形 OBAC の面積を求めます。',
      add: F([...base(), ...info()], [eb(152, 'OA ＝ 13cm ／ 半径 OB ＝ 5cm', C.blue, FILL.blue, 15), tx(206, 'AB の長さと 四角形OBACの面積は？', 12)]) },
    { note: '❓ なぜ、接線と半径は垂直なの？ 接線は円とちょうど1点でふれる直線です。もし半径と垂直でなければ、接点のそばで円の内側へ入りこんで、円と2点で交わってしまいます。1点でふれるのは、垂直のときだけです。だから ∠OBA ＝ 90° です。',
      add: F([...base(), ci(105, 38, 6, undefined, C.green, NOFILL), lb(216, 34, '接線 ⊥ 半径', 11, C.green, 'start', true), lb(216, 52, '∠OBA ＝ 90°', 11, C.green, 'start', true)], [eb(152, '∠OBA ＝ 90°', C.green, FILL.green, 18), tx(206, '1点でふれる ＝ 垂直', 12)]) },
    { note: '△OBA は、∠OBA ＝ 90° の直角三角形です。斜辺は直角の向かいの辺なので OA（13cm）、短い辺は OB（5cm）と AB です。',
      add: F([...base(), pg([O, B, A], C.main, 'rgba(14,165,233,0.18)'), lb(216, 34, '斜辺 OA ＝ 13', 11, C.red, 'start', true), lb(216, 52, '直角の辺 OB ＝ 5', 11, C.blue, 'start', true), lb(216, 70, '直角の辺 AB ＝ ？', 11, C.ink, 'start', true)], [eb(152, '斜辺は OA（直角の向かい）', C.purple, FILL.purple, 16), tx(206, '直角三角形 OBA', 12)]) },
    { note: '❓ 三平方の定理は、どう使うの？ 斜辺² ＝ 他の2辺の2乗の和 なので、OA² ＝ OB² ＋ AB²。AB を求めたいので、AB² ＝ OA² − OB² と、斜辺の2乗から引きます。AB² ＝ 13² − 5² ＝ 169 − 25 ＝ 144。',
      add: F([...base(), pg([O, B, A], C.main, 'rgba(14,165,233,0.18)')], [eb(152, 'AB² ＝ 13² − 5² ＝ 144', C.green, FILL.green, 16), tx(206, '短い辺を求めるときは 斜辺²から引く', 12)]) },
    { note: '2乗して 144 になる正の数は 12 なので、AB ＝ 12cm です（12 × 12 ＝ 144）。長さなので、負の数は考えません。',
      add: F([bx(110, 14, 100, 100, '144', C.green, FILL.green, 22), lb(100, 66, '12', 12, C.green, 'end', true), lb(160, 128, '12', 12, C.green, 'middle', true)], [eb(152, '12 × 12 ＝ 144 → AB ＝ 12cm', C.green, FILL.green, 16), tx(206, '面積144の正方形の 1辺', 12)]) },
    { note: '❓ 四角形 OBAC は、どうすれば面積が出せるの？ 対角線 OA で2つの三角形 △OBA と △OCA に分けます。この2つが合同なら、片方の面積を2倍すれば、四角形の面積になります。',
      add: F([...base(), pg([O, B, A], C.blue, 'rgba(2,132,199,0.25)'), pg([O, Cc, A], C.red, 'rgba(225,29,72,0.20)')], [eb(152, '対角線 OA で 2つに分ける', C.purple, FILL.purple, 16), tx(206, '△OBA と △OCA', 12)]) },
    { note: '❓ 2つは、なぜ合同なの？ OB ＝ OC（どちらも半径）、AB ＝ AC（円の外の点から引いた2本の接線の長さは等しい）、OA は共通。3組の辺がそれぞれ等しいので、△OBA ≡ △OCA です。',
      add: F([...base(), pg([O, B, A], C.blue, 'rgba(2,132,199,0.25)'), pg([O, Cc, A], C.red, 'rgba(225,29,72,0.20)'), dot(mid(O, B), C.blue, 4), dot(mid(O, Cc), C.blue, 4), dot(mid(A, B), C.green, 4), dot(mid(A, Cc), C.green, 4)], [eb(152, 'OB＝OC、AB＝AC、OA 共通', C.green, FILL.green, 15), tx(206, '3組の辺が等しい → 合同', 12)]) },
    { note: '△OBA の面積は、直角をはさむ2辺 OB と AB を使って ½ × 5 × 12 ＝ 30cm² です。½ をかけるのは、5 × 12 の長方形を対角線で半分にした三角形だからです。合同な △OCA も 30cm²。',
      add: F([bx(120, 14, 90, 60, undefined, C.gray, FILL.gray), pg([[120, 14], [120, 74], [210, 74]], C.main, FILL.blue), lb(110, 46, '5', 12, C.blue, 'end', true), lb(165, 88, '12', 12, C.green, 'middle', true), lb(160, 110, '長方形 5×12 ＝ 60 の半分 ＝ 30', 12, C.ink, 'middle', true)], [eb(152, '△OBA ＝ ½ × 5 × 12 ＝ 30cm²', C.green, FILL.green, 15), tx(206, '合同な △OCA も 30cm²', 12)]) },
    { note: '四角形 OBAC ＝ △OBA ＋ △OCA ＝ 30 ＋ 30 ＝ 60cm²（2 × 30 ＝ 60）です。確かめ（検算）では、別の見方をします。四角形は対角線 OA と BC が垂直に交わる形で、BC ＝ 2 × (5 × 12 ÷ 13) ＝ 120/13。面積 ＝ ½ × OA × BC ＝ ½ × 13 × 120/13 ＝ 60cm² で一致します。',
      add: F([eb(14, '30 ＋ 30 ＝ 60cm²', C.green, FILL.green, 17, 34), eb(60, '別の見方：½ × OA × BC', C.blue, FILL.blue, 15, 34), eb(106, '½ × 13 × 120/13 ＝ 60 ✓', C.purple, FILL.purple, 15, 34)], [tx(180, '対角線×対角線÷2 でも 60', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。AB² を求めるとき、13² ＋ 5² ＝ 194 と足してしまう。13 は斜辺なので、足すのは短い2辺どうしです。斜辺から短い辺を求めるときは、斜辺² から引きます。',
      add: F([eb(14, '× 13² ＋ 5² ＝ 194（足している）', C.red, FILL.red, 15, 34), eb(60, '× 四角形の面積を 30 と答える', C.red, FILL.red, 15, 34), eb(106, '○ 13² − 5² ＝ 144、面積は 2 × 30', C.green, FILL.green, 14, 34)], [tx(180, '斜辺から引く／三角形は2つ分', 13, C.green, true)]) },
    { note: '答えは AB ＝ 12cm、四角形 OBAC の面積 ＝ 60cm² です。',
      add: F([...base(), pg([O, B, A], C.blue, 'rgba(2,132,199,0.25)'), pg([O, Cc, A], C.red, 'rgba(225,29,72,0.20)')], [eb(152, '答え　AB＝12cm、面積 60cm²', C.green, FILL.green, 16), tx(206, '13²−5²＝144 → 12、30×2＝60', 12)]) },
  ];
  return show(s, '円の接線と四角形の面積');
})();

// ── tokai_sansu_14：正三角形を並べた個数 ──
const triRows = (n: number, hl = 0): E[] => {
  const out: E[] = [];
  const h = 26, w = 34;
  for (let r = 1; r <= n; r++) {
    const yTop = 12 + (r - 1) * h, yBot = yTop + h;
    const x0 = 160 - (w / 2) * (r - 1);
    for (let k = 0; k < r; k++) {
      const ax = x0 + k * w;
      out.push(pg([[ax, yTop], [ax - w / 2, yBot], [ax + w / 2, yBot]], hl === r ? C.red : C.blue, hl === r ? 'rgba(225,29,72,0.25)' : FILL.blue));
    }
    for (let k = 0; k < r - 1; k++) {
      const ax = x0 + k * w + w / 2;
      out.push(pg([[ax - w / 2, yTop], [ax + w / 2, yTop], [ax, yBot]], hl === r ? C.red : C.main, hl === r ? 'rgba(225,29,72,0.25)' : FILL.yellow));
    }
    out.push(lb(242, yTop + 18, `${r}段目 ${2 * r - 1}個`, 10, hl === r ? C.red : C.gray, 'start', true));
  }
  return out;
};
const dotSq = (n: number, upto: number): E[] => {
  const cols = [C.red, C.blue, C.green, C.purple], fills = [FILL.red, FILL.blue, FILL.green, FILL.purple];
  const out: E[] = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const layer = Math.max(i, j);
    if (layer < upto) out.push(ci(124 + j * 24, 22 + i * 24, 8, undefined, cols[layer], fills[layer]));
  }
  return out;
};
const tsa14 = (() => {
  const s: Slide[] = [
    { note: '1辺 1cm の正三角形を、上向き・下向きの三角形を交互に組み合わせて大きな三角形に並べます。1段目は 1個、2段目は 3個、3段目は 5個…で、n段目には (2n − 1) 個あります。n段まで並べたときの総数を n の式で表し、10段まで並べたときの総数を求めます。',
      add: F(triRows(3), [eb(152, '1段目 1個、2段目 3個、3段目 5個…', C.blue, FILL.blue, 14), tx(206, 'n段までの総数は？ 10段では？', 12)]) },
    { note: '❓ なぜ、n段目は (2n − 1) 個なの？ n段目には、上向きの三角形が n個、その間にはさまる下向きの三角形が (n − 1) 個あります。合わせて n ＋ (n − 1) ＝ 2n − 1。たとえば 3段目は 上向き3個 ＋ 下向き2個 ＝ 5個です。',
      add: F(triRows(3, 3), [eb(152, 'n ＋ (n − 1) ＝ 2n − 1', C.red, FILL.red, 17), tx(206, '3段目：上向き 3 ＋ 下向き 2 ＝ 5', 12)]) },
    { note: '段ごとの合計を調べます。1段まで：1個。2段まで：1 ＋ 3 ＝ 4個。3段まで：1 ＋ 3 ＋ 5 ＝ 9個。4段まで：1 ＋ 3 ＋ 5 ＋ 7 ＝ 16個。',
      add: F([eb(14, '1段まで　1 ＝ 1', C.blue, FILL.blue, 15, 26), eb(46, '2段まで　1＋3 ＝ 4', C.blue, FILL.blue, 15, 26), eb(78, '3段まで　1＋3＋5 ＝ 9', C.blue, FILL.blue, 15, 26), eb(110, '4段まで　1＋3＋5＋7 ＝ 16', C.blue, FILL.blue, 15, 26)], [tx(170, '1、4、9、16 … どこかで見た数？', 13, C.purple, true)]) },
    { note: '❓ 1、4、9、16 は、なぜ平方数（1×1、2×2、3×3、4×4）になるの？ 点を正方形に並べて確かめます。1辺 4個の正方形は、L字形の層に分けられ、内側から 1個、3個、5個、7個と、奇数が順に並びます。',
      add: F([...dotSq(4, 4), lb(250, 30, '1個', 11, C.red, 'start', true), lb(250, 50, '＋3個', 11, C.blue, 'start', true), lb(250, 70, '＋5個', 11, C.green, 'start', true), lb(250, 90, '＋7個', 11, C.purple, 'start', true)], [eb(152, '4×4 ＝ 1 ＋ 3 ＋ 5 ＋ 7', C.purple, FILL.purple, 16), tx(206, '正方形を L字の層に分ける', 12)]) },
    { note: '❓ L字の層が奇数個になるのは、なぜ？ 新しい層は、たて n個 と よこ n個 のうち、角の1個が重なるので、n ＋ n − 1 ＝ 2n − 1 個になります。だから、層の数は 1、3、5、7… と、2つずつふえていきます。',
      add: F([...dotSq(4, 3), ...[0, 1, 2, 3].map((i) => ci(124 + 3 * 24, 22 + i * 24, 8, undefined, C.purple, FILL.purple)), ...[0, 1, 2].map((j) => ci(124 + j * 24, 22 + 3 * 24, 8, undefined, C.purple, FILL.purple))], [eb(152, '4 ＋ 4 − 1 ＝ 7', C.purple, FILL.purple, 17), tx(206, 'たて4 ＋ よこ4 − 角の重なり1', 12)]) },
    { note: 'どんな n でも同じです。1辺 n 個の正方形を、L字の層に分ければ、内側から 1、3、5、…、(2n − 1) 個。その合計は正方形の点の数 n × n ＝ n² です。だから 1 ＋ 3 ＋ 5 ＋ … ＋ (2n − 1) ＝ n²。',
      add: F([...dotSq(4, 4)], [eb(152, '1 ＋ 3 ＋ … ＋ (2n−1) ＝ n²', C.green, FILL.green, 16), tx(206, '1辺 n の正方形の点の数', 12)]) },
    { note: '別の見方でも確かめます。10段まで足すとき、はしどうしをペアにします。1 ＋ 19 ＝ 20、3 ＋ 17 ＝ 20、5 ＋ 15 ＝ 20、7 ＋ 13 ＝ 20、9 ＋ 11 ＝ 20。20 が5組あるので 20 × 5 ＝ 100。',
      add: F([eb(10, '1 ＋ 19 ＝ 20　　3 ＋ 17 ＝ 20', C.blue, FILL.blue, 13, 28), eb(42, '5 ＋ 15 ＝ 20　　7 ＋ 13 ＝ 20', C.blue, FILL.blue, 13, 28), eb(74, '9 ＋ 11 ＝ 20', C.blue, FILL.blue, 13, 28), eb(106, '20 が 5組 → 20 × 5 ＝ 100', C.green, FILL.green, 14, 28)], [tx(170, 'ペアにして足す工夫', 13, C.gray, true)]) },
    { note: 'n ＝ 10 のとき、総数は 10² ＝ 100個です。10段目には 2×10−1＝19個あり、1＋3＋…＋19 が 100 になります。',
      add: F([bx(100, 20, 120, 80, '10 × 10', C.green, FILL.green, 20), lb(160, 118, '＝ 100個', 14, C.green, 'middle', true)], [eb(152, 'n ＝ 10 → 10² ＝ 100個', C.green, FILL.green, 17), tx(206, '10段目は 19個', 12)]) },
    { note: '確かめ（検算）をします。n ＝ 1、2、3 のとき、総数は 1、4、9。公式 n² で 1² ＝ 1、2² ＝ 4、3² ＝ 9 と一致します。さらに、1＋3＋…＋19 の合計は「（はじめ＋おわり）× 個数 ÷ 2」で (1＋19) × 10 ÷ 2 ＝ 100 でも確かめられます。',
      add: F([eb(14, 'n＝1,2,3 → 1, 4, 9 ＝ 1², 2², 3² ✓', C.blue, FILL.blue, 14, 34), eb(60, '(1＋19) × 10 ÷ 2 ＝ 100 ✓', C.green, FILL.green, 15, 34)], [tx(150, '小さい n と 別の計算で確かめる', 13, C.gray, true), tx(176, 'どちらも 公式と一致', 13, C.green, true)]) },
    { note: 'よくあるまちがいです。「奇数の和は平方数になる」という関係を知らずに、1＋3＋5＋… と1つずつ足して、途中で計算まちがいをしてしまう。規則を見つけて、n² と一気に求めます。',
      add: F([eb(14, '× 1＋3＋5＋…＋19 を順に足す', C.red, FILL.red, 15, 34), eb(60, '× 最後の段 19個を答える', C.red, FILL.red, 15, 34), eb(106, '○ 規則 n² を使う → 100', C.green, FILL.green, 15, 34)], [tx(180, '規則を見つけて 一気に求める', 13, C.green, true)]) },
    { note: '答えは、総数 ＝ n² 個、10段のときは 100個 です。',
      add: F(triRows(3), [eb(152, '答え　n² 個、10段で 100個', C.green, FILL.green, 16), tx(206, '1＋3＋…＋(2n−1) ＝ n²', 12)]) },
  ];
  return show(s, '奇数の和と平方数');
})();

// ── ohori_rika_02：花火の光と音 ──
const sound: Figure = (() => {
  const base = (): E[] => [ci(36, 66, 14, '花火', C.red, FILL.yellow, 8), bx(262, 50, 50, 32, '見る人', C.ink, FILL.warm, 11), ln(54, 110, 258, 110, C.gray, false, 1.6), lb(156, 126, '1020m', 12, C.ink, 'middle', true)];
  const s: Slide[] = [
    { note: '音の速さを秒速 340m とします。1020m はなれた場所で打ち上げられた花火の光が見えてから、音が聞こえるまでの時間を求めます。',
      add: F(base(), [eb(152, '距離 1020m ／ 音の速さ 340m/秒', C.blue, FILL.blue, 15), tx(206, '光が見えてから音が聞こえるまで何秒？', 12)]) },
    { note: '❓ なぜ、光が見えた瞬間を「スタート」としてよいの？ 光の速さは 1秒に約 30万km もあり、1020m なら 1秒の 30万分の 1 ほどで届きます。音にくらべてあまりに速いので、光が見えた瞬間に花火が開いたとみなせます。',
      add: F([...base(), ar(56, 54, 256, 54, C.main), lb(156, 44, '光：ほとんど一瞬で届く', 11, C.main, 'middle', true), ar(56, 92, 150, 92, C.blue, true), lb(120, 84, '音：ずっと遅い', 11, C.blue, 'middle', true)], [eb(152, '光はほぼ一瞬 → 光が見えた時が 0秒', C.purple, FILL.purple, 14), tx(206, '光の時間は 無視できる', 12)]) },
    { note: 'つまり、光が見えてから音が聞こえるまでの時間は、音が 1020m を進むのにかかる時間そのものです。これを求めます。',
      add: F([...base(), ar(56, 92, 250, 92, C.blue), lb(156, 84, '音が 1020m 進む時間', 11, C.blue, 'middle', true)], [eb(152, '求める時間 ＝ 音が1020m進む時間', C.blue, FILL.blue, 15), tx(206, '光の分は 0 とする', 12)]) },
    { note: '❓ 「音の速さ 340m/秒」とは、どういう意味？ 1秒で 340m 進む、ということです。では 1020m は、340m の何こぶんでしょう。340m が 3つ分です。1つにつき 1秒かかるので、3秒です。',
      add: F([...[0, 1, 2].map((i) => bx(20 + i * 94, 28, 88, 44, '340m ＝ 1秒', C.blue, FILL.blue, 12)), lb(160, 96, '1020m ＝ 340m × 3こ', 13, C.purple, 'middle', true)], [eb(152, '3こ ＝ 3秒', C.green, FILL.green, 18), tx(206, '1こで1秒かかる', 12)]) },
    { note: '式にすると、1020 ÷ 340 ＝ 3 です。「全部の距離の中に、1秒ぶんの距離が何こ入っているか」を数える計算が、わり算です。',
      add: F([eb(24, '1020 ÷ 340 ＝ 3秒', C.green, FILL.green, 22, 48), lb(160, 100, '（距離）÷（1秒で進む距離）', 12, C.gray, 'middle')], [eb(152, '時間 ＝ 距離 ÷ 速さ', C.green, FILL.green, 17), tx(206, 'わり算で 何秒ぶんかを数える', 12)]) },
    { note: '❓ なぜ、「距離 ÷ 速さ」で時間が出るの？ 進んだ距離は「速さ × 時間」です。この式の時間を知りたいときは、両辺を速さで割ります。だから 時間 ＝ 距離 ÷ 速さ です。',
      add: F([bx(40, 16, 240, 34, '距離 ＝ 速さ × 時間', C.blue, FILL.blue, 16), ar(160, 52, 160, 68, C.gray), bx(40, 70, 240, 34, '時間 ＝ 距離 ÷ 速さ', C.green, FILL.green, 16)], [tx(150, '両辺を 速さ で割った', 13, C.gray, true), tx(176, '1020 ÷ 340 ＝ 3', 14, C.green, true)]) },
    { note: '確かめ（検算）をします。音が 3秒間に進む距離は、速さ × 時間 ＝ 340 × 3 ＝ 1020m で、もとの距離とぴったり一致します。',
      add: F([eb(14, '340 × 3 ＝ 1020m', C.blue, FILL.blue, 18, 38), eb(66, 'もとの距離 1020m と同じ ✓', C.green, FILL.green, 16, 38)], [tx(170, '速さ × 時間 ＝ 距離（逆算）', 13, C.gray, true)]) },
    { note: '❓ 距離が 2倍の 2040m なら、時間はどうなるの？ 340m が 6こ入るので 6秒、つまり 2倍です。音の速さが同じなら、距離と時間は比例します。花火が遠いほど、光と音のずれは大きくなります。',
      add: F([eb(14, '1020m → 3秒', C.blue, FILL.blue, 16, 34), eb(60, '2040m → 6秒（2倍）', C.green, FILL.green, 16, 34), eb(106, '距離が2倍 → 時間も2倍', C.purple, FILL.purple, 16, 34)], [tx(180, '遠いほど ずれが大きい', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。距離 × 速さ ＝ 1020 × 340 ＝ 346800 とかけ算してしまう。346800秒は4日ちかくになり、花火ではあり得ません。時間を出すときは、距離を速さで「割り」ます。',
      add: F([eb(14, '× 1020 × 340 ＝ 346800', C.red, FILL.red, 16, 34), eb(60, '× 346800秒は 約4日（あり得ない）', C.red, FILL.red, 14, 34), eb(106, '○ 1020 ÷ 340 ＝ 3秒', C.green, FILL.green, 16, 34)], [tx(180, '答えが現実的か、最後に考える', 13, C.green, true)]) },
    { note: '答えは 3秒 です。光はほぼ一瞬で届くので、音が 1020m を進む時間 1020 ÷ 340 ＝ 3秒 が、光が見えてから音が聞こえるまでの時間です。',
      add: F([...base(), ar(56, 92, 250, 92, C.blue), lb(156, 84, '3秒', 12, C.blue, 'middle', true)], [eb(152, '答え　3秒', C.green, FILL.green, 18), tx(206, '1020 ÷ 340 ＝ 3', 13)]) },
  ];
  return show(s, '音の速さと距離・時間');
})();

// ── hibiya_rika_16：中和の体積の比例 ──
const setBlocks = (n: number, y: number, t: string, col: string, fill: string): E[] => Array.from({ length: n }, (_, i) => bx(14 + i * (292 / n), y, 292 / n - 4, 30, t, col, fill, n > 3 ? 10 : 12));
const hibiya: Figure = (() => {
  const s: Slide[] = [
    { note: 'うすい塩酸 A とうすい水酸化ナトリウム水溶液 B があります。実験で、塩酸 A を 20mL ちょうど中和するのに、B が 10mL 必要でした。塩酸 A を 100mL 用意したとき、ちょうど中和するのに必要な B の体積を求めます。',
      add: F([bx(20, 30, 120, 44, '塩酸 A 20mL', C.red, FILL.red, 14), lb(160, 56, '⇔', 20, C.ink, 'middle', true), bx(180, 30, 120, 44, 'B 10mL', C.blue, FILL.blue, 14), lb(160, 100, 'ちょうど中和（実験）', 12, C.gray, 'middle', true)], [eb(152, 'A 100mL を中和する B は？', C.purple, FILL.purple, 16), tx(206, '20mL と 10mL の関係から考える', 12)]) },
    { note: '❓ なぜ、A の体積と B の体積は比例するの？ 酸性の液とアルカリ性の液は、決まった割合でちょうど打ち消し合います。濃さが変わらないなら、A が 2倍になれば、打ち消すのに必要な B も 2倍になります。A の量と B の量は、いつも同じ比です。',
      add: F([bx(14, 16, 130, 34, 'A が 2倍', C.red, FILL.red, 14), ar(148, 33, 170, 33, C.gray), bx(176, 16, 130, 34, 'B も 2倍', C.blue, FILL.blue, 14), bx(14, 66, 130, 34, 'A が 5倍', C.red, FILL.red, 14), ar(148, 83, 170, 83, C.gray), bx(176, 66, 130, 34, 'B も 5倍', C.blue, FILL.blue, 14)], [tx(150, '濃さが同じなら 必要な量の比は一定', 13, C.purple, true), tx(178, '→ 比例する', 13, C.gray, true)]) },
    { note: '実験の結果を「1セット」と考えます。1セットは、A 20mL と B 10mL の組み合わせで、ちょうど中和します。A と B の体積の比は 20：10 ＝ 2：1 です。',
      add: F([...setBlocks(1, 26, 'A 20mL', C.red, FILL.red), ...setBlocks(1, 66, 'B 10mL', C.blue, FILL.blue), lb(160, 116, '1セット ＝ A 20mL ＋ B 10mL', 12, C.green, 'middle', true)], [eb(152, 'A：B ＝ 20：10 ＝ 2：1', C.green, FILL.green, 17), tx(206, '1セットで ちょうど中和', 12)]) },
    { note: '❓ A が 40mL なら、B はなぜ 20mL なの？ 40mL は 20mL の 2セットぶんです。1セットごとに B が 10mL 必要なので、2セットで 10 × 2 ＝ 20mL。セットの数だけ、B もふえます。',
      add: F([...setBlocks(2, 22, 'A 20mL', C.red, FILL.red), ...setBlocks(2, 62, 'B 10mL', C.blue, FILL.blue), lb(160, 112, 'A 40mL → 2セット → B 20mL', 13, C.green, 'middle', true)], [eb(152, '10 × 2 ＝ 20mL', C.green, FILL.green, 17), tx(206, 'セットの数だけ B がふえる', 12)]) },
    { note: '今度は A が 100mL です。100mL の中に、1セットぶん（20mL）が何こ入るか数えます。100 ÷ 20 ＝ 5。つまり 5セットです。',
      add: F([...setBlocks(5, 28, 'A 20', C.red, FILL.red), lb(160, 82, '100mL ÷ 20mL ＝ 5セット', 13, C.purple, 'middle', true)], [eb(152, '100 ÷ 20 ＝ 5セット', C.purple, FILL.purple, 17), tx(206, '1セット20mL が5こ', 12)]) },
    { note: '1セットごとに B が 10mL 必要なので、5セットなら 10 × 5 ＝ 50mL です。必要な水酸化ナトリウム水溶液 B は 50mL です。',
      add: F([...setBlocks(5, 22, 'A 20', C.red, FILL.red), ...setBlocks(5, 62, 'B 10', C.blue, FILL.blue), lb(160, 112, 'B は 10mL が 5こ ＝ 50mL', 13, C.green, 'middle', true)], [eb(152, '10 × 5 ＝ 50mL', C.green, FILL.green, 18), tx(206, '5セットぶんの B', 12)]) },
    { note: '❓ 比例式で考えると？ 20mL：10mL ＝ 100mL：□ と書けます。比の値（A に対する B の割合）は、どちらも同じ 1/2。A の 100mL の 1/2 は 50mL なので、□ ＝ 100 × 10 ÷ 20 ＝ 50mL。さきほどと同じ答えです。',
      add: F([bx(20, 18, 280, 34, '20 ： 10 ＝ 100 ： □', C.blue, FILL.blue, 18), bx(20, 62, 280, 34, 'B は A の 1/2 → 100 × 1/2', C.purple, FILL.purple, 14)], [eb(152, '□ ＝ 100 × 10 ÷ 20 ＝ 50mL', C.green, FILL.green, 15), tx(206, '比の値はどちらも 1/2', 12)]) },
    { note: '確かめ（検算）をします。A が 20mL から 100mL へ 5倍になったので、B も 10mL から 50mL へ 5倍。また、B の 50mL と A の 100mL の比は 50：100 ＝ 1：2 で、はじめの 10：20 ＝ 1：2 と同じです。',
      add: F([eb(14, 'A：5倍（20 → 100）', C.red, FILL.red, 15, 30), eb(50, 'B：5倍（10 → 50）', C.blue, FILL.blue, 15, 30), eb(86, '50：100 ＝ 10：20 ＝ 1：2 ✓', C.green, FILL.green, 15, 30)], [tx(150, '同じ倍率、同じ比なら 正しい', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。比の順番を逆にして 100 × 20 ÷ 10 ＝ 200mL としてしまう。B は A の半分ですむはずなのに、A（100mL）より多くなるので、おかしいと気づけます。B が A より少ないか、答えの大きさを確かめます。',
      add: F([eb(14, '× 100 × 20 ÷ 10 ＝ 200mL', C.red, FILL.red, 16, 34), eb(60, '× B が A より多い（おかしい）', C.red, FILL.red, 15, 34), eb(106, '○ 100 × 10 ÷ 20 ＝ 50mL', C.green, FILL.green, 16, 34)], [tx(180, 'B は A の半分 → 50 が妥当', 13, C.green, true)]) },
    { note: '答えは 50mL です。A 100mL は 5セットぶんなので、1セット 10mL の 5倍で B は 50mL 必要です。',
      add: F([...setBlocks(5, 22, 'A 20', C.red, FILL.red), ...setBlocks(5, 62, 'B 10', C.blue, FILL.blue), lb(160, 112, 'B ＝ 50mL', 14, C.green, 'middle', true)], [eb(152, '答え　50mL', C.green, FILL.green, 18), tx(206, '10mL × 5セット', 12)]) },
  ];
  return show(s, '中和：体積の比例');
})();

// ── kasei_rika_07：石灰石と塩酸 ──
const axes = (): E[] => [ln(50, 110, 290, 110, C.gray, false, 1.6), ln(50, 110, 50, 16, C.gray, false, 1.6), lb(292, 114, '塩酸の体積', 10, C.ink, 'end', true), lb(54, 14, '発生する CO₂', 10, C.ink, 'start', true)];
const kasei07: Figure = (() => {
  const g1 = (): E[] => [...axes(), ln(50, 110, 130, 70, C.blue, false, 3), ln(130, 70, 200, 70, C.blue, false, 3), ln(130, 70, 130, 110, C.gray, true), lb(130, 122, '40', 11, C.blue, 'middle', true), lb(170, 62, '一定', 11, C.blue, 'middle', true)];
  const g2 = (): E[] => [ln(50, 110, 210, 30, C.red, false, 3), ln(210, 30, 282, 30, C.red, false, 3), ln(210, 30, 210, 110, C.gray, true), lb(210, 122, '80', 11, C.red, 'middle', true), lb(250, 22, '一定', 11, C.red, 'middle', true)];
  const s: Slide[] = [
    { note: '石灰石（炭酸カルシウム）に塩酸を加えると二酸化炭素が発生します。ある量の石灰石に、塩酸を 40cm³ まで増やすと CO₂ の質量は体積に比例して増え、40cm³ 以降は一定になりました。石灰石の質量を 2倍にしたとき、CO₂ の発生が一定になる塩酸の体積を求めます。',
      add: F(g1(), [eb(152, '石灰石を2倍 → 一定になる塩酸は？', C.blue, FILL.blue, 14), tx(206, 'もとは 40cm³ で一定になった', 12)]) },
    { note: '❓ なぜ、40cm³ まで増えて、それ以降は一定になるの？ 塩酸を加えるあいだは、石灰石と反応して CO₂ が出ます。でも 40cm³ で石灰石がすべて反応し終わると、塩酸をそれ以上加えても、反応する石灰石が残っていないので、CO₂ は増えません。',
      add: F([...g1(), lb(84, 60, '石灰石が 反応中', 10, C.green, 'middle', true), lb(206, 82, '石灰石が なくなった', 10, C.red, 'middle', true)], [eb(152, '40cm³ で石灰石が 全部反応', C.purple, FILL.purple, 16), tx(206, 'なくなったら 塩酸を足しても増えない', 12)]) },
    { note: '❓ なぜ、40cm³ までは「比例」なの？ 塩酸が2倍になれば、反応する石灰石も2倍になり、出る CO₂ も2倍になるからです。石灰石が残っているあいだは、塩酸の量に比例して CO₂ がふえます。',
      add: F([...g1(), ln(50, 110, 130, 70, C.green, false, 5)], [eb(152, '塩酸が2倍 → CO₂ も2倍', C.green, FILL.green, 17), tx(206, '石灰石があるあいだは 比例', 12)]) },
    { note: 'つまり「40cm³」は、いまの石灰石がちょうど全部反応するのに必要な塩酸の量です。これを「1セット」と考えます。石灰石 1セットと、塩酸 40cm³ が、ちょうど過不足なく反応します。',
      add: F([bx(20, 30, 120, 44, '石灰石 1セット', C.main, FILL.warm, 13), lb(160, 56, '⇔', 20, C.ink, 'middle', true), bx(180, 30, 120, 44, '塩酸 40cm³', C.blue, FILL.blue, 14), lb(160, 100, 'ちょうど過不足なく反応', 12, C.gray, 'middle', true)], [eb(152, '石灰石1セット ⇔ 塩酸40cm³', C.green, FILL.green, 15), tx(206, '40cm³ ＝ 1セットぶん', 12)]) },
    { note: '❓ 石灰石が2倍になると、必要な塩酸はどうなるの？ 石灰石が 2セットになります。1セットごとに塩酸が 40cm³ 必要なので、2セットなら 2倍の塩酸が必要です。',
      add: F([bx(14, 24, 140, 40, '石灰石 2セット', C.main, FILL.warm, 13), bx(166, 24, 140, 40, '塩酸 40 × 2', C.blue, FILL.blue, 14), bx(14, 76, 140, 30, '1セット ⇔ 40cm³', C.gray, FILL.gray, 12), bx(166, 76, 140, 30, '1セット ⇔ 40cm³', C.gray, FILL.gray, 12)], [eb(152, '2セット → 塩酸も 2セットぶん', C.green, FILL.green, 15), tx(206, '石灰石2倍 → 必要な塩酸も2倍', 12)]) },
    { note: '塩酸の体積は 40 × 2 ＝ 80cm³ です。グラフで見ると、石灰石が2倍なら、CO₂ の一定になる点が「塩酸 80cm³」のところに移ります。',
      add: F([...axes(), ...g2(), ln(50, 110, 130, 70, C.blue, true, 2)], [eb(152, '40 × 2 ＝ 80cm³', C.green, FILL.green, 18), tx(206, '赤い線：石灰石2倍（点線：もとの線）', 12)]) },
    { note: '発生する CO₂ の最大の量も、石灰石が2倍なので2倍になります（グラフの高さが2倍）。かたむきは、はじめは同じで、塩酸 1cm³ あたりの CO₂ の量は変わりません。',
      add: F([...axes(), ...g2(), ln(50, 110, 130, 70, C.blue, true, 2), ln(130, 70, 200, 70, C.blue, true, 2), ar(262, 70, 262, 34, C.red), lb(270, 54, '2倍', 11, C.red, 'start', true)], [eb(152, '最大の CO₂ も 2倍', C.purple, FILL.purple, 17), tx(206, '石灰石が2倍 → 出せる CO₂ も2倍', 12)]) },
    { note: '確かめ（検算）をします。塩酸 1cm³ あたり反応する石灰石の量は変わらないので、石灰石 1セットあたり塩酸は 40cm³ のまま。石灰石が 2セットで 80cm³。もとの 40cm³ から 2倍になっており、筋が通っています。',
      add: F([eb(14, '石灰石 1セット → 40cm³', C.blue, FILL.blue, 15, 34), eb(60, '石灰石 2セット → 80cm³', C.red, FILL.red, 15, 34), eb(106, '1セットあたり 40cm³ のまま ✓', C.green, FILL.green, 15, 34)], [tx(180, '割合が変わらないことを 確かめる', 13, C.gray, true)]) },
    { note: 'よくあるまちがいです。塩酸をふやせば、CO₂ がいつまでもふえ続けると考えてしまう。石灰石がなくなれば反応は止まり、CO₂ の量は一定になります。また、石灰石が2倍でも 40cm³ のままだと考えるのもまちがいです。',
      add: F([eb(14, '× 塩酸をふやせば いつまでもふえる', C.red, FILL.red, 15, 34), eb(60, '× 石灰石が2倍でも 40cm³ のまま', C.red, FILL.red, 15, 34), eb(106, '○ 石灰石がなくなれば止まる → 80cm³', C.green, FILL.green, 14, 34)], [tx(180, '反応は 足りなくなった方で止まる', 13, C.green, true)]) },
    { note: '答えは 80cm³ です。いまの石灰石が塩酸 40cm³ でちょうど反応し終わるので、石灰石が2倍なら 40 × 2 ＝ 80cm³ で一定になります。',
      add: F([...axes(), ...g2()], [eb(152, '答え　80cm³', C.green, FILL.green, 18), tx(206, '40 × 2 ＝ 80cm³', 13)]) },
  ];
  return show(s, '石灰石と塩酸：発生量が一定になる体積');
})();

// ═════════ 公開 ═════════
export const figuresSchoolKoko06: Record<string, Figure> = {
  ohori_sansu_16: fo,
  ohori_rika_02: sound,
  ohori_rika_03: density({ V: 50, m: 135, mode: 'metal', ans: '密度2.7g/cm³、アルミニウム', want: '密度の表と比べて、何の金属かを答えます。' }),
  ohori_rika_06: sub_ohori06,
  ohori_rika_12: fl_ohori12,
  ohori_rika_14: heat({ how: 'IR', V: 24, I: 4, R: 6, min: 5, wh: true, ask: '発生する熱量(J)と、消費した電力量(Wh)は？', answer: '熱量28800J、電力量8Wh' }),
  tokai_sansu_03: tsa03,
  tokai_sansu_05: tsa05,
  tokai_sansu_08: tsa08,
  tokai_sansu_10: tsa10,
  tokai_sansu_11: tsa11,
  tokai_sansu_14: tsa14,
  tokai_rika_03: sub_tokai03,
  shitennoji_koko_sansu_02: shi02,
  shitennoji_koko_sansu_05: shi05,
  shitennoji_koko_sansu_09: shi09,
  shitennoji_koko_sansu_10: shi10,
  shitennoji_koko_sansu_11: shi11,
  shitennoji_koko_sansu_16: shi16,
  shitennoji_koko_rika_08: sub_shi08,
  shitennoji_koko_rika_11: slope,
  shitennoji_koko_rika_16: heat({ how: 'VR', V: 6, I: 0.6, R: 10, min: 5, ask: '電流・電力・5分間の熱量は？', answer: '①0.6A ②3.6W ③1080J' }),
  hibiya_rika_16: hibiya,
  waseda_rika_16: parallel(12, 6, 3, 'total'),
  kasei_rika_01: fl_kasei01,
  kasei_rika_03: parallel(12, 6, 3, 'r1'),
  kasei_rika_07: kasei07,
  kasei_rika_09: fl_kasei09,
  kasei_rika_11: quakeK,
  todaiji_rika_01: series1,
  todaiji_rika_05: fl_dens80,
  todaiji_rika_06: sub_todai06,
  todaiji_rika_15: heat({ how: 'VI', V: 6, I: 2, R: 3, min: 5, ask: '発生する熱量は何J？', answer: '3600J' }),
  koyo_rika_01: density({ V: 30, m: 267, mode: 'metal', ans: '密度8.9g/cm³、銅', want: '密度の表と比べて、どの金属に近いかを答えます。' }),
  koyo_rika_04: series2,
  koyo_rika_08: quake({ P: 6, S: 3, gap: 12, L: 6 }),
  koyo_rika_10: eclipse,
  koyo_rika_11: fl_dens80,
  koyo_rika_13: heat({ how: 'IR', V: 200, I: 2, R: 100, min: 5, ask: '発生する熱量は何J？', answer: '120000J（120kJ）' }),
  keio_rika_01: density({ V: 40, m: 356, mode: 'metal', ans: '密度8.9g/cm³、銅', want: '密度の表と比べて、どの金属に近いかを答えます。' }),
  keio_rika_04: parallel(12, 6, 3, 'r2'),
  keio_rika_11: fl_keio11,
  nada_rika_01: density({ V: 250, m: 215, mode: 'float', ans: '（1）0.86g/cm³ （2）浮く', want: '（1）密度 （2）水に浮くか沈むかを答えます。' }),
  nada_rika_04: parallel(12, 6, 12, 'both'),
  nada_rika_12: fl_nada12,
  nada_rika_13: moon,
  nishiyamato_rika_01: density({ V: 40, m: 300, mode: 'sink', ans: '7.5g/cm³、沈む', want: '密度を求め、水に浮くか沈むかを答えます。' }),
  nishiyamato_rika_04: parallel(12, 6, 3, 'r1'),
  nishiyamato_rika_13: eclipse,
  nishiyamato_rika_16: lever,
  meidai_rika_01: fl_meidai01,
  meidai_rika_09: quake({ P: 6, S: 4, gap: 10, L: 12, meidai: true }),
};
