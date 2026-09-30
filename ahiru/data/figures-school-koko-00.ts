// 高校受験 入試傾向問題（算数・数学・理科）の動く図解スライド（koko-00）。
// キーは問題 id。「❓なぜ？→答え」の連鎖で根っこまでたどる。画面の上半分に図、下の帯に式やひとこと。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';

type E = DiagramElement;
type Pt = [number, number];
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
// 下の帯（式・ひとこと）
const B = (m: string, s?: string, color: string = C.blue, fill: string = FILL.blue, size = 14): E[] => [eb(150, m, color, fill, size), ...(s ? [tx(204, s, 12)] : [])];
// 上に図（前のスライドの図は残す）、下の帯を書きかえる
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(140, ...bottom)];
// まっさらにして、上に図、下の帯
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const lerp = (a: Pt, b: Pt, t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const SOFT_RED = 'rgba(225,29,72,0.25)';
const SOFT_BLUE = 'rgba(2,132,199,0.22)';

// ── 三角形の相似（kk_sansu_09 / koko_kankan_sansu_08 で共通） ──
const SA: Pt = [66, 54], SB: Pt = [24, 120], SC: Pt = [108, 120];
const LA: Pt = [226, 10], LB: Pt = [156, 120], LC: Pt = [296, 120];
const triGrid = (a: Pt, b: Pt, c: Pt, n: number): E[] => {
  const out: E[] = [];
  for (let k = 1; k < n; k++) {
    const t = k / n;
    const p = lerp(a, b, t), q = lerp(a, c, t), r = lerp(b, c, t), r2 = lerp(b, c, 1 - t);
    out.push(ln(p[0], p[1], q[0], q[1], C.blue, false, 1));
    out.push(ln(p[0], p[1], r2[0], r2[1], C.blue, false, 1));
    out.push(ln(q[0], q[1], r[0], r[1], C.blue, false, 1));
  }
  return out;
};
const sqGrid = (x0: number, y0: number, n: number, u: number, color: string): E[] => {
  const out: E[] = [bx(x0, y0, n * u, n * u, undefined, color, '#FFFFFF')];
  for (let k = 1; k < n; k++) {
    out.push(ln(x0 + k * u, y0, x0 + k * u, y0 + n * u, color, false, 1));
    out.push(ln(x0, y0 + k * u, x0 + n * u, y0 + k * u, color, false, 1));
  }
  return out;
};
const rowLabels = (): E[] => {
  const out: E[] = [];
  for (let r = 1; r <= 3; r++) out.push(lb(66 - 42 * ((r - 0.5) / 3) - 5, 54 + 22 * (r - 0.5) + 4, String(2 * r - 1), 11, C.red, 'end', true));
  for (let r = 1; r <= 5; r++) out.push(lb(226 - 70 * ((r - 0.5) / 5) - 5, 10 + 22 * (r - 0.5) + 4, String(2 * r - 1), 11, C.red, 'end', true));
  return out;
};
const apexTri = (a: Pt, b: Pt, c: Pt, n: number): E => pg([a, lerp(a, b, 1 / n), lerp(a, c, 1 / n)], C.red, FILL.red);

const simArea: Figure = show([
  { note: '相似比が 3：5 の2つの三角形があります。小さいほうの面積は 27cm²。面積の比と、大きいほうの面積を求めます。',
    add: T([pg([SA, SB, SC], C.blue, FILL.blue), pg([LA, LB, LC], C.blue, FILL.blue), lb(66, 134, '3', 13, C.blue, 'middle', true), lb(226, 134, '5', 13, C.blue, 'middle', true), lb(250, 100, '？', 16, C.red, 'middle', true)], B('相似比 3：5　小さい方 27cm²', '面積の比と、大きい方の面積は？')) },
  { note: '❓ 相似比は何の比？ 対応する辺の長さの比です。底辺の長さの比も、高さの比も、どちらも 3：5 になっています。',
    add: T([ln(SB[0], SB[1], SC[0], SC[1], C.red, false, 3), ln(LB[0], LB[1], LC[0], LC[1], C.red, false, 3), ln(66, 54, 66, 120, C.red, true, 2), ln(226, 10, 226, 120, C.red, true, 2), lb(72, 92, '3', 11, C.red, 'start', true), lb(232, 70, '5', 11, C.red, 'start', true)], B('底辺も高さも 3：5', '長さの比が相似比')) },
  { note: '❓ では面積も 3：5 になるの？ 三角形の面積は「底辺×高さ÷2」で、長さを2か所で使っています。底辺も高さも 5/3 倍になるので、面積は 5/3 を2回かけた分になりそうです。',
    add: T([], B('面積＝底辺×高さ÷2', '長さが2か所で 5/3倍 → 面積は？', C.purple, FILL.purple)) },
  { note: '❓ 面積を目で確かめよう。左の三角形の3つの辺を3等分して、辺に平行な線を引くと、同じ大きさの小さい三角形が 9個できます。',
    add: F([pg([SA, SB, SC], C.blue, FILL.blue), pg([LA, LB, LC], C.blue, FILL.blue), lb(66, 134, '3', 13, C.blue, 'middle', true), lb(226, 134, '5', 13, C.blue, 'middle', true), ...triGrid(SA, SB, SC, 3)], B('1辺を3等分 → 小三角形 9個', '1個の大きさは、みんな同じ')) },
  { note: '大きい三角形は辺を5等分します。小さい三角形の1辺は左と同じ長さなので、同じ大きさです。数えると 25個になります。',
    add: T(triGrid(LA, LB, LC, 5), B('1辺を5等分 → 小三角形 25個', '1個の大きさは、左と同じ')) },
  { note: '❓ なぜ 9個と25個になるの？ 上から段ごとに数えると、上向きの三角形と下向きの三角形が交互にならぶので 1個、3個、5個、7個、9個と奇数ずつ増えます。5段なら 1＋3＋5＋7＋9＝25。',
    add: T(rowLabels(), B('1＋3＋5＋7＋9＝25＝5×5', '3段なら 1＋3＋5＝9＝3×3', C.red, FILL.red)) },
  { note: '❓ では面積の比は？ 小さい三角形はどれも同じ大きさなので、面積は個数に比例します。面積比は 9：25。これは 3×3 と 5×5、つまり相似比を2回かけた比です。',
    add: T([], B('面積比 ＝ 9：25 ＝ 3²：5²', '相似比を2回かけた比', C.green, FILL.green)) },
  { note: '❓ 27cm² は小さい三角形いくつぶんの面積？ 小さいほうは 9個で 27cm² なので、1個ぶんは 27÷9＝3cm² です。',
    add: T([apexTri(SA, SB, SC, 3), apexTri(LA, LB, LC, 5)], B('27÷9＝3cm²（1個ぶん）', '赤い三角形1個が 3cm²', C.red, FILL.red)) },
  { note: '大きいほうは同じ小さい三角形が 25個。1個が 3cm² だから、3×25＝75cm² になります。',
    add: T([bx(186, 68, 80, 22, '75cm²', C.red, FILL.red, 13)], B('3×25＝75cm²', '小三角形 25個ぶん', C.red, FILL.red)) },
  { note: '答え。面積比は 9：25、大きいほうの面積は 75cm² です。',
    add: T([], B('面積比 9：25　大きい方 75cm²', '単位 cm² を忘れずに', C.green, FILL.green)) },
  { note: '確かめ。75÷27＝25/9＝(5/3)² です。相似比 3：5 から出した辺の倍率 5/3 を2回かけた値になっているので、正しいです。',
    add: T([], B('75÷27＝25/9＝(5/3)²', '辺の倍率 5/3 の2乗になっている', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。面積も 3：5 のままだと考えて 27×5/3＝45cm² とする間違いです。45cm² は 3cm² の小三角形 15個ぶんにしかならず、25個にはなりません。',
    add: T([], B('45cm² → 15個ぶん（25個でない）', '面積は相似比の「2乗」', C.red, FILL.red, 13)) },
], '相似な図形の面積比は相似比の2乗');

const simPerim: Figure = show([
  { note: '△ABC と △DEF は相似で、相似比は 3：5 です。(1) 周が 36cm のとき △DEF の周、(2) 面積が 27cm² のとき △DEF の面積を求めます。',
    add: T([pg([SA, SB, SC], C.blue, FILL.blue), pg([LA, LB, LC], C.green, FILL.green), lb(66, 134, '△ABC', 12, C.blue, 'middle', true), lb(226, 134, '△DEF', 12, C.green, 'middle', true), lb(250, 100, '？', 16, C.red, 'middle', true)], B('相似比 3：5', '(1)周 36cm → ？　(2)面積 27cm² → ？')) },
  { note: '❓ 相似比は何の比？ 対応する辺の長さの比です。3つの辺のどれをとっても、長さの比は 3：5 になっています。',
    add: T([ln(SA[0], SA[1], SB[0], SB[1], C.red, false, 3), ln(SA[0], SA[1], SC[0], SC[1], C.purple, false, 3), ln(SB[0], SB[1], SC[0], SC[1], C.main, false, 3), ln(LA[0], LA[1], LB[0], LB[1], C.red, false, 3), ln(LA[0], LA[1], LC[0], LC[1], C.purple, false, 3), ln(LB[0], LB[1], LC[0], LC[1], C.main, false, 3)], B('3つの辺とも 3：5', '同じ色の辺どうしが対応')) },
  { note: '❓ では3辺をたした「周」の比は？ 3つの辺がそれぞれ 5/3 倍になっています。5/3 倍したものをたしても、たしてから 5/3 倍しても同じなので、周も 5/3 倍、つまり 3：5 です。',
    add: T([], B('周の比も 3：5', '36cm は 3 にあたる', C.green, FILL.green)) },
  { note: '❓ 周 36cm は、相似比の 3 にあたります。では 1 にあたる長さは？ 36cm を3つに分けて 36÷3＝12cm。これが相似比の 1 にあたる長さです。',
    add: F([lb(20, 20, '△ABCの周', 10, C.gray, 'start', true), ...[0, 1, 2].map((i) => bx(20 + i * 52, 24, 52, 34, '12', C.blue, FILL.blue, 14)), lb(184, 46, '＝36cm', 13, C.blue, 'start', true)], B('36÷3＝12cm（1あたり）', '36cm は 12cm が 3こぶん')) },
  { note: '大きい △DEF の周は相似比の 5 にあたるので、12cm が5つぶん。12×5＝60cm です。',
    add: T([lb(20, 80, '△DEFの周', 10, C.gray, 'start', true), ...[0, 1, 2, 3, 4].map((i) => bx(20 + i * 52, 84, 52, 34, '12', C.green, FILL.green, 14))], B('12×5＝60cm', '12cm が 5こぶん', C.green, FILL.green)) },
  { note: '(1) の答えは 60cm。確かめると 60÷36＝5/3 で、相似比 3：5 の倍率と同じです。',
    add: T([], B('(1) 60cm', '60÷36＝5/3 ← 相似比と同じ倍率', C.green, FILL.green)) },
  { note: '❓ (2) 面積も 5/3 倍かな？ 面積は「底辺×高さ」が元です。ここでは底辺×高さを、ますの数で考えます。底辺3×高さ3 なら 9ます、底辺5×高さ5 なら 25ます です。',
    add: F([...sqGrid(40, 54, 3, 22, C.blue), ...sqGrid(150, 10, 5, 22, C.green), lb(73, 134, '3×3＝9ます', 11, C.blue, 'middle', true), lb(205, 134, '5×5＝25ます', 11, C.green, 'middle', true)], B('9ます：25ます ＝ 9：25', '長さが2か所 → 2乗の比', C.purple, FILL.purple)) },
  { note: '❓ 三角形の面積は、なぜこの半分？ 同じ三角形を2つ合わせると四角形ができるからです。どちらも半分にするだけなので、比は 9：25 のまま変わりません。',
    add: T([pg([[40, 54], [40, 120], [106, 120]], C.blue, SOFT_BLUE), pg([[150, 10], [150, 120], [260, 120]], C.green, 'rgba(22,163,74,0.22)')], B('どちらも半分 → 9：25', '面積の比は相似比の2乗', C.purple, FILL.purple)) },
  { note: '面積の比は 9：25。27cm² は 9 にあたるので、1 にあたる面積は 27÷9＝3cm²。25 にあたる面積は 3×25＝75cm² です。',
    add: T([], B('27÷9×25＝75cm²', '9 が 27cm² → 25 は？', C.red, FILL.red)) },
  { note: '(2) の答えは 75cm²。確かめると 75÷27＝25/9＝(5/3)² で、辺の倍率 5/3 の2乗になっています。',
    add: T([], B('(2) 75cm²', '75÷27＝25/9＝(5/3)²', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。面積も周と同じ倍率 5/3 をかけて 27×5/3＝45cm² とする間違いです。面積は長さを2回使うので、倍率を2回かけます。',
    add: T([], B('45cm² は × ／ 75cm² が ○', '周は 5/3倍、面積は 25/9倍', C.red, FILL.red)) },
], '相似な図形：周は相似比、面積は相似比の2乗');

// ── 電気回路の部品 ──
const batt = (v: string, x = 20): E => bx(x, 55, 40, 40, v, C.red, FILL.red, 13);
const sCirc = (a: string, b: string, v = '12V'): E[] => [
  ln(40, 55, 40, 40), ln(40, 40, 100, 40), ln(160, 40, 200, 40), ln(260, 40, 300, 40), ln(300, 40, 300, 110), ln(300, 110, 40, 110), ln(40, 110, 40, 95),
  batt(v), bx(100, 25, 60, 30, a, C.blue, FILL.blue, 14), bx(200, 25, 60, 30, b, C.blue, FILL.blue, 14),
];
const sCirc1 = (a: string, v = '12V'): E[] => [
  ln(40, 55, 40, 40), ln(40, 40, 140, 40), ln(200, 40, 300, 40), ln(300, 40, 300, 110), ln(300, 110, 40, 110), ln(40, 110, 40, 95),
  batt(v), bx(140, 25, 60, 30, a, C.blue, FILL.blue, 14),
];
// 直列 + 並列
const pCirc = (rs: string, p1: string, p2: string, v: string): E[] => [
  ln(38, 50, 38, 40), ln(38, 40, 62, 40), ln(110, 40, 180, 40), ln(140, 40, 140, 90), ln(230, 40, 280, 40), ln(280, 40, 280, 115),
  ln(140, 90, 180, 90), ln(230, 90, 280, 90), ln(280, 115, 38, 115), ln(38, 115, 38, 94),
  bx(18, 50, 40, 44, v, C.red, FILL.red, 13), bx(62, 25, 48, 30, rs, C.blue, FILL.blue, 13), bx(180, 28, 50, 24, p1, C.green, FILL.green, 13), bx(180, 78, 50, 24, p2, C.green, FILL.green, 13),
];
// 並列だけ
const ppCirc = (p1: string, p2: string, v: string): E[] => [
  ln(38, 50, 38, 40), ln(38, 40, 170, 40), ln(120, 40, 120, 90), ln(220, 40, 270, 40), ln(270, 40, 270, 115),
  ln(120, 90, 170, 90), ln(220, 90, 270, 90), ln(270, 115, 38, 115), ln(38, 115, 38, 94),
  bx(18, 50, 40, 44, v, C.red, FILL.red, 13), bx(170, 28, 50, 24, p1, C.green, FILL.green, 13), bx(170, 78, 50, 24, p2, C.green, FILL.green, 13),
];
const dashedRect = (x1: number, y1: number, x2: number, y2: number, color: string): E[] => [
  ln(x1, y1, x2, y1, color, true, 2), ln(x2, y1, x2, y2, color, true, 2), ln(x2, y2, x1, y2, color, true, 2), ln(x1, y2, x1, y1, color, true, 2),
];
const small = (x: number, y: number, t: string, color: string = C.red): E => lb(x, y, t, 11, color, 'middle', true);

const seriesCircuit: Figure = show([
  { note: '10Ωと15Ωの抵抗を直列につなぎ、12Vの電源をつなぎました。回路全体の電流と、各抵抗にかかる電圧を求めます。',
    add: T(sCirc('10Ω', '15Ω'), B('直列　電源 12V', '電流と、各抵抗の電圧は？')) },
  { note: '❓ 直列つなぎとは？ 電流の通り道が1本だけのつなぎ方です。❓ ではなぜ電流はどこでも同じ大きさ？ 途中で枝分かれしないので、流れ込んだ電流がそのまま次へ流れていくからです。',
    add: T([ar(62, 40, 94, 40, C.green), ar(166, 40, 194, 40, C.green), ar(266, 40, 294, 40, C.green), ar(240, 110, 110, 110, C.green), small(78, 34, 'I', C.green), small(180, 34, 'I', C.green), small(280, 34, 'I', C.green), small(175, 104, 'I', C.green)], B('電流 I は どこも同じ', '通り道が1本だから', C.green, FILL.green)) },
  { note: '❓ 合成抵抗は？ 電流は10Ωと15Ωを順に通りぬけるので、流れにくさが積み重なります。だから直列の抵抗はたし算で、10＋15＝25Ω です。',
    add: T([...dashedRect(94, 18, 266, 62, C.red), lb(180, 84, '10＋15＝25Ω', 13, C.red, 'middle', true)], B('10＋15＝25Ω', '直列の抵抗はたし算', C.red, FILL.red)) },
  { note: '❓ 10Ωと15Ωを25Ωの抵抗1つにまとめていいの？ 電源から見ると、2つを通りぬける流れにくさは25Ωの抵抗1つと同じだからです。',
    add: F(sCirc1('25Ω'), B('25Ωの抵抗1つと同じ', '電源から見た流れにくさ')) },
  { note: '❓ 電流はどう求める？ 抵抗は「1Aを流すのに必要な電圧」を表します。25Ωなら1Aに25V必要です。今は12Vしかないので、25Vの 12/25 倍。12÷25＝0.48A です。',
    add: F([bx(20, 22, 280, 34, '25V で 1A', C.blue, FILL.blue, 13), bx(20, 74, 134, 34, '12V で 0.48A', C.green, FILL.green, 12)], B('I＝12÷25＝0.48A', '電圧÷抵抗＝電流', C.green, FILL.green)) },
  { note: '❓ 各抵抗の電圧は？ どちらにも同じ 0.48A が流れます。電圧＝電流×抵抗 なので、10Ωは 0.48×10＝4.8V、15Ωは 0.48×15＝7.2V。抵抗が大きいほど、たくさんの電圧が必要です。',
    add: F([...sCirc('10Ω', '15Ω'), small(180, 20, '0.48A', C.green), small(130, 76, '4.8V'), small(230, 76, '7.2V')], B('10Ω：0.48×10＝4.8V', '15Ω：0.48×15＝7.2V', C.red, FILL.red)) },
  { note: '❓ 12Vはなぜ 4.8V と 7.2V に分かれる？ 直列では電源の電圧を、抵抗が大きいほどたくさん分け合うからです。分かれ方は抵抗の比 10：15＝2：3 と同じです。',
    add: F([lb(76, 24, '10Ω', 12, C.blue, 'middle', true), lb(216, 24, '15Ω', 12, C.blue, 'middle', true), bx(20, 30, 112, 36, '4.8V', C.blue, FILL.blue, 14), bx(132, 30, 168, 36, '7.2V', C.green, FILL.green, 14), lb(160, 88, '合わせて 12V', 13, C.red, 'middle', true)], B('4.8：7.2 ＝ 2：3 ＝ 10：15', '電圧は抵抗の比に分かれる', C.purple, FILL.purple)) },
  { note: '確かめ。4.8＋7.2＝12V で、電源の電圧とぴったり同じです。',
    add: T([], B('4.8＋7.2＝12V', '電源の電圧と同じ', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。各抵抗に12Vずつかかると思うことです。それなら 12V＋12V＝24V になり、12Vの電源より大きくなってつじつまが合いません。直列は電圧を分け合います。',
    add: T([], B('12V＋12V＝24V ？ → ×', '直列は電圧を分け合う', C.red, FILL.red)) },
  { note: '答え。全体の電流は 0.48A、10Ωの電圧は 4.8V、15Ωの電圧は 7.2V です。',
    add: T([], B('0.48A　4.8V　7.2V', '電流・10Ωの電圧・15Ωの電圧', C.green, FILL.green)) },
], '直列回路：電流は同じ、電圧は分け合う');

type PS = { v: number; rs: number; p1: number; p2: number; rt: number; i: number; vs: number; vp: number; i1: string; i2: string; ask: string; ans: string; ansSub: string };
const parSer = (c: PS, cap: string): Figure => {
  const V = `${c.v}V`;
  return show([
    { note: `${c.rs}Ωの抵抗に、${c.p1}Ωと${c.p2}Ωの並列部分を直列につなぎ、電源は ${c.v}V です。${c.ask}`,
      add: T(pCirc(`${c.rs}Ω`, `${c.p1}Ω`, `${c.p2}Ω`, V), B(`電源 ${c.v}V`, `${c.rs}Ω ＋（${c.p1}Ωと${c.p2}Ωの並列）`)) },
    { note: '❓ どこから考える？ 並列の部分を先に1つの抵抗にまとめると、あとは直列だけの回路になって考えやすくなります。',
      add: T(dashedRect(134, 18, 288, 106, C.red), B('並列部分を先にまとめる', '緑の2つを1つの抵抗に', C.red, FILL.red)) },
    { note: '❓ なぜ並列の2本の枝には同じ電圧がかかるの？ 2本の枝は、どちらも同じ2つの点（左のかどと右のかど）のあいだにつながっているからです。2点のあいだの電圧は、どの道を通っても同じです。',
      add: T([ci(140, 40, 5, undefined, C.red, C.red), ci(280, 40, 5, undefined, C.red, C.red), small(205, 70, '同じ電圧')], B('枝の電圧は どちらも同じ', '同じ2点のあいだだから', C.purple, FILL.purple)) },
    { note: '❓ 並列の合成抵抗はなぜ小さくなるの？ 通り道が2本になって、電流が流れやすくなるからです。たとえば 6V をかけると、6Ωには1A、3Ωには2A流れ、合わせて3A。6Vで3A流れる1つの抵抗は 6÷3＝2Ω です。',
      add: F([bx(20, 18, 280, 30, '6Ω に 6V → 1A', C.green, FILL.green, 13), bx(20, 56, 280, 30, '3Ω に 6V → 2A', C.green, FILL.green, 13), bx(20, 94, 280, 30, '合わせて 3A → 6÷3＝2Ω', C.red, FILL.red, 13)], B('並列の合成 ＝ 2Ω', '6Ωや3Ωより小さい', C.red, FILL.red)) },
    { note: `並列部分は 2Ω の抵抗1つにおきかえられます。これで ${c.rs}Ω と 2Ω の直列回路になりました。`,
      add: F(sCirc(`${c.rs}Ω`, '2Ω', V), B(`${c.rs}Ω と 2Ω の直列`, '直列は、ふつうにたし算')) },
    { note: `❓ 全体の抵抗は？ 直列はたし算なので ${c.rs}＋2＝${c.rt}Ω。❓ 電流は？ 電流＝電圧÷抵抗 なので ${c.v}÷${c.rt}＝${c.i}A。直列なので、この電流が ${c.rs}Ω にも並列部分にもそのまま流れます。`,
      add: T([small(160, 18, `I＝${c.i}A`, C.green)], B(`${c.rs}＋2＝${c.rt}Ω　${c.v}÷${c.rt}＝${c.i}A`, '全体の抵抗と電流', C.green, FILL.green)) },
    { note: `❓ 電圧は？ ${c.rs}Ω の電圧は ${c.i}A×${c.rs}Ω＝${c.vs}V、並列部分は ${c.i}A×2Ω＝${c.vp}V です。電源の ${c.v}V が ${c.vs}V と ${c.vp}V に分かれました。`,
      add: F([...pCirc(`${c.rs}Ω`, `${c.p1}Ω`, `${c.p2}Ω`, V), small(86, 70, `${c.vs}V`), small(205, 68, `${c.vp}V`)], B(`${c.rs}Ω：${c.i}×${c.rs}＝${c.vs}V`, `並列部分：${c.i}×2＝${c.vp}V`, C.red, FILL.red)) },
    { note: `❓ 並列の枝ごとの電流は？ どちらにも同じ ${c.vp}V がかかります。${c.p1}Ω には ${c.vp}÷${c.p1}＝${c.i1}、${c.p2}Ω には ${c.vp}÷${c.p2}＝${c.i2} 流れます。`,
      add: T([small(255, 34, c.i1, C.green), small(255, 84, c.i2, C.green)], B(`${c.vp}÷${c.p1}＝${c.i1}　${c.vp}÷${c.p2}＝${c.i2}`, '枝ごとの電流', C.green, FILL.green, 13)) },
    { note: `確かめ。枝の電流をたすと ${c.i1}＋${c.i2}＝${c.i}A で、枝分かれ前の電流とぴったり合います。${c.vs}V＋${c.vp}V＝${c.v}V で、電源の電圧とも合います。`,
      add: T([], B(`${c.i1}＋${c.i2}＝${c.i}A　${c.vs}＋${c.vp}＝${c.v}V`, '電流も電圧も つじつまが合う', C.green, FILL.green, 13)) },
    { note: '❓ まちがえやすい点。並列の合成抵抗を 6＋3＝9Ω とたし算することです。並列は通り道が増えるので、合成抵抗は元のどの抵抗より小さくなります。',
      add: T([], B('6＋3＝9Ω ？ → ×', '並列は小さくなる（2Ω）', C.red, FILL.red)) },
    { note: `答え。${c.ans}`,
      add: T([], B(c.ans, c.ansSub, C.green, FILL.green, 13)) },
  ], cap);
};

const parallelOnly: Figure = show([
  { note: '4Ωと6Ωの抵抗を並列につなぎ、12Vの電源をつなぎました。各抵抗の電流、全体の電流、合成抵抗を求めます。',
    add: T(ppCirc('4Ω', '6Ω', '12V'), B('並列　電源 12V', '電流と合成抵抗は？')) },
  { note: '❓ 各抵抗にかかる電圧は？ 2本の枝はどちらも電源の両端に直接つながっているので、どちらにも電源と同じ 12V がかかります。',
    add: T([small(245, 34, '12V'), small(245, 84, '12V')], B('どちらにも 12V', '電源の両端に直接つながる', C.purple, FILL.purple)) },
  { note: '❓ 4Ωに流れる電流は？ 抵抗は「1Aを流すのに必要な電圧」を表します。12Vかかっているので、電流＝電圧÷抵抗＝12÷4＝3A です。',
    add: T([small(145, 34, '3A', C.green)], B('12÷4＝3A', '電圧÷抵抗＝電流', C.green, FILL.green)) },
  { note: '6Ωにも同じ12Vがかかるので、電流は 12÷6＝2A です。抵抗が大きいぶん流れにくく、4Ωより電流が小さくなります。',
    add: T([small(145, 84, '2A', C.green)], B('12÷6＝2A', '4Ωより流れにくい', C.green, FILL.green)) },
  { note: '❓ 全体の電流は？ 電源から出た電流は、枝分かれのところで2本の枝に分かれます。だから枝の電流をたし算すると全体の電流になり、3＋2＝5A です。',
    add: T([small(79, 34, '5A', C.red)], B('3＋2＝5A', '全体＝枝の電流の合計', C.red, FILL.red)) },
  { note: '❓ 合成抵抗は？ 回路全体を1つの抵抗と見ます。12V で 5A 流れているので、抵抗＝電圧÷電流＝12÷5＝2.4Ω です。',
    add: T([], B('12÷5＝2.4Ω', '全体を1つの抵抗と見る', C.red, FILL.red)) },
  { note: '❓ なぜ合成抵抗は4Ωや6Ωより小さいの？ 4Ωだけなら3Aですが、並列にすると通り道が増えて5A流れます。たくさん流れる＝流れやすい＝抵抗が小さい、ということです。',
    add: F([bx(20, 24, 120, 34, '4Ωだけ：3A', C.blue, FILL.blue, 13), bx(20, 70, 200, 34, '並列：5A', C.green, FILL.green, 13)], B('3A → 5A ＝ 流れやすい', '合成抵抗は 2.4Ω と小さい', C.purple, FILL.purple)) },
  { note: '確かめ。1/R＝1/4＋1/6＝3/12＋2/12＝5/12 からも合成抵抗が出せます。R＝12/5＝2.4Ω で、さっきの答えと同じです。',
    add: T([], B('1/R＝1/4＋1/6＝5/12', 'R＝12/5＝2.4Ω', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。4＋6＝10Ω とたし算することです。10Ωなら電流は 12÷10＝1.2A しか流れず、本当の 5A よりずっと小さくなってしまいます。',
    add: T([], B('4＋6＝10Ω ？ → ×', '並列はたし算ではない', C.red, FILL.red)) },
  { note: '答え。①I₁＝3A、I₂＝2A　②全体の電流 5A、合成抵抗 2.4Ω です。',
    add: T([], B('3A　2A　5A　2.4Ω', '電流2つ・全体の電流・合成抵抗', C.green, FILL.green)) },
], '並列回路：電圧は同じ、電流は合計');

// ── 圧力 ──
const pressure: Figure = show([
  { note: '面積 0.5m² の板に 200N の力がかかっています。圧力は何Paか。また、面積を 0.1m² に変えたとき、同じ力での圧力は何Paでしょう。',
    add: T([bx(30, 70, 100, 22, '0.5m²', C.blue, FILL.blue, 13), ar(80, 22, 80, 68, C.red), lb(80, 16, '200N', 12, C.red, 'middle', true), bx(200, 70, 20, 22, undefined, C.green, FILL.green), ar(210, 22, 210, 68, C.red), lb(210, 16, '200N', 12, C.red, 'middle', true), lb(210, 108, '0.1m²', 12, C.green, 'middle', true), ln(20, 92, 300, 92, C.gray, false, 2)], B('同じ 200N', '0.5m² と 0.1m² で、圧力は？')) },
  { note: '❓ 圧力とは？ 1m² あたりにかかる力のことです。単位 Pa は「1m² あたり何N」という意味です。❓ なぜ 1m² にそろえるの？ 面積がちがうままでは、どちらが強く押すのか比べられないからです。',
    add: F([bx(40, 22, 110, 110, undefined, C.gray, FILL.gray), lb(160, 70, '1m²', 14, C.ink, 'start', true), lb(160, 92, 'あたりの力', 12, C.gray, 'start')], B('圧力 ＝ 1m² あたりの力', '単位 Pa ＝ N ÷ m²')) },
  { note: '0.5m² は 1m² のちょうど半分の面積です。この左半分に 200N の力がかかっています。',
    add: T([bx(40, 22, 55, 110, '200N', C.red, FILL.red, 14), lb(67, 16, '0.5m²', 11, C.red, 'middle', true)], B('0.5m² ＝ 1m² の半分', '半分に 200N')) },
  { note: '❓ 1m² ぶんでは何N？ 残りの半分にも同じように 200N がかかっているとすると、1m² 全体では 200＋200＝400N。つまり 400Pa です。',
    add: T([bx(95, 22, 55, 110, '200N', C.purple, FILL.purple, 14)], B('200N＋200N＝400N', '1m² あたり 400Pa', C.purple, FILL.purple)) },
  { note: '❓ わり算で求めてもいいの？ 1m² は 0.5m² の 1÷0.5＝2こぶんです。だから 200N×2＝400N。これは 200÷0.5 と同じ計算です。',
    add: T([], B('200÷0.5＝400Pa', '1m² は 0.5m² の 2こぶん', C.green, FILL.green)) },
  { note: '次は 0.1m²。1m² を10等分した1こぶんの面積です。この細い1本の帯に 200N がかかっています。',
    add: F([bx(40, 22, 110, 110, undefined, C.gray, '#FFFFFF'), ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => ln(40, 22 + 11 * k, 150, 22 + 11 * k, C.gray, false, 1)), bx(40, 22, 110, 11, undefined, C.red, FILL.red), lb(160, 30, '← 0.1m² に 200N', 11, C.red, 'start', true), lb(160, 76, '1m² ＝ 10こぶん', 12, C.gray, 'start')], B('0.1m² ＝ 1m² の 1/10', '10等分の1こぶん')) },
  { note: '❓ 1m² ぶんでは何N？ 同じ帯が10本あって、どれにも 200N がかかっているなら 200×10＝2000N。つまり 2000Pa です。これは 200÷0.1 と同じ計算です。',
    add: T([...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((k) => bx(40, 22 + 11 * k, 110, 11, undefined, C.red, FILL.red))], B('200÷0.1＝2000Pa', '1m² は 0.1m² の 10こぶん', C.red, FILL.red)) },
  { note: '❓ なぜ面積が小さいと圧力は大きくなるの？ 同じ 200N を、せまい場所に集めて押すからです。面積が 0.5→0.1 と 1/5 になると、圧力は 400→2000 と 5倍になります。',
    add: F([bx(20, 24, 56, 34, '400Pa', C.blue, FILL.blue, 11), lb(84, 46, '面積 0.5m² のとき', 12, C.blue, 'start', true), bx(20, 70, 280, 34, '2000Pa（面積 0.1m²）', C.red, FILL.red, 13)], B('面積 1/5 → 圧力 5倍', '力が同じなら 面積に反比例', C.purple, FILL.purple)) },
  { note: '確かめ。圧力×面積＝力 にもどすと、400×0.5＝200N、2000×0.1＝200N。どちらも元の力 200N と合います。',
    add: T([], B('400×0.5＝200　2000×0.1＝200', '元の力 200N にもどる', C.green, FILL.green, 13)) },
  { note: '❓ まちがえやすい点。面積を cm² のまま計算することです。Pa は「1m² あたり」なので、面積は m² で計算します。',
    add: T([], B('面積は m² で計算', 'cm² のまま使わない', C.red, FILL.red)) },
  { note: '答え。0.5m² のとき 400Pa、0.1m² のとき 2000Pa です。',
    add: T([], B('400Pa　2000Pa', '0.5m² と 0.1m² のとき', C.green, FILL.green)) },
], '圧力＝力÷面積（1m²あたりの力）');

// ── 三平方の定理 6・8・10 ──
const tA: Pt = [40, 120], tB: Pt = [40, 60], tC: Pt = [120, 120];
const rightMark = (): E => pg([[40, 120], [40, 110], [50, 110], [50, 120]], C.gray, 'rgba(0,0,0,0)');
const tri6810 = (): E[] => [pg([tA, tB, tC], C.blue, FILL.blue), rightMark(), lb(34, 94, '6cm', 12, C.ink, 'end', true), lb(80, 134, '8cm', 12, C.ink, 'middle', true), lb(30, 130, 'A', 12, C.gray, 'end', true), lb(40, 54, 'B', 12, C.gray, 'middle', true), lb(126, 132, 'C', 12, C.gray, 'start', true)];
const P1: Pt = [152, 14], P2: Pt = [216, 62], P3: Pt = [168, 126], P4: Pt = [104, 78];
const pythagoras: Figure = show([
  { note: 'AB＝6cm、AC＝8cm、∠A＝90° の直角三角形 ABC です。BC の長さと、三角形の面積を求めます。',
    add: T([...tri6810(), lb(132, 82, 'BC＝？', 12, C.red, 'start', true)], B('AB＝6　AC＝8　∠A＝90°', 'BC と 面積は？')) },
  { note: '❓ 斜辺（しゃへん）はどれ？ 直角の向かい側の辺が斜辺です。∠A＝90° なので、向かい側の BC が斜辺で、三角形の中でいちばん長い辺になります。',
    add: T([ln(tB[0], tB[1], tC[0], tC[1], C.red, false, 3), lb(92, 70, '斜辺', 12, C.red, 'end', true)], B('斜辺 ＝ 直角の向かい側', 'BC が斜辺', C.red, FILL.red)) },
  { note: '❓ なぜ BC を求める式（三平方の定理）が成り立つの？ 直角をはさむ辺 6 と 8 をならべて、1辺が 6＋8＝14 の大きな正方形をつくります。その四すみに、同じ直角三角形を4つおきます。',
    add: F([bx(104, 14, 112, 112, undefined, C.gray, '#FFFFFF'), pg([P1, [216, 14], P2], C.blue, FILL.blue), pg([P2, [216, 126], P3], C.blue, FILL.blue), pg([P3, [104, 126], P4], C.blue, FILL.blue), pg([P4, [104, 14], P1], C.blue, FILL.blue), lb(128, 10, '6', 11, C.ink, 'middle', true), lb(184, 10, '8', 11, C.ink, 'middle', true), lb(222, 42, '6', 11, C.ink, 'start', true), lb(222, 98, '8', 11, C.ink, 'start', true), lb(98, 70, '1辺 14', 12, C.ink, 'end', true)], B('1辺 14 の大きな正方形', 'まんなかにも正方形ができる', C.purple, FILL.purple)) },
  { note: '❓ まんなかの正方形の1辺は？ 4つの三角形の斜辺（しゃへん）が集まってできているので、1辺は BC と同じ長さです。この正方形の面積が BC×BC です。',
    add: T([pg([P1, P2, P3, P4], C.red, SOFT_RED), lb(160, 74, 'BC×BC', 13, C.red, 'middle', true)], B('まんなか ＝ BC×BC', '1辺が斜辺の正方形', C.red, FILL.red)) },
  { note: '❓ その面積はいくつ？ 大きな正方形は 14×14＝196。そこから、三角形1つが 6×8÷2＝24 で、4つぶんの 96 をひきます。196−96＝100。まんなかの面積 BC×BC は 100 です。',
    add: T([], B('196 − 24×4 ＝ 100', 'BC×BC ＝ 100', C.red, FILL.red)) },
  { note: '❓ BC はいくつ？ 2回かけて 100 になる数は 10 なので、BC＝10cm です。これは 6×6＋8×8＝36＋64＝100 とも一致します。「直角をはさむ2辺を2回かけたものの和が、斜辺を2回かけたもの」という三平方の定理が成り立っています。',
    add: T([], B('36＋64＝100　BC＝10cm', '2回かけて100になる数は10', C.green, FILL.green)) },
  { note: '❓ 面積はなぜ 6×8÷2？ 同じ三角形をもう1つ合わせると、6×8 の長方形になります。三角形はその半分です。直角をはさむ2辺が、そのまま底辺と高さになります。',
    add: F([...tri6810(), ln(tB[0], tB[1], 120, 60, C.gray, true, 1.5), ln(120, 60, tC[0], tC[1], C.gray, true, 1.5), pg([tB, [120, 60], tC], C.gray, 'rgba(110,100,92,0.12)')], B('6×8＝48（長方形）', '三角形は その半分')) },
  { note: '6×8＝48 の半分なので、面積は 24cm² です。',
    add: T([lb(66, 108, '24cm²', 11, C.red, 'middle', true)], B('6×8÷2＝24cm²', '48 の半分', C.green, FILL.green)) },
  { note: '確かめ。6：8：10 は、3：4：5 を2倍した形です。3：4：5 はよく出てくる直角三角形の比なので、BC＝10cm で正しいと分かります。',
    add: T([], B('6：8：10 ＝ 3：4：5 の2倍', '有名な直角三角形の比', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。面積を求めるときに、斜めの辺 BC＝10 を高さにして 6×10÷2＝30 とすることです。高さは底辺に垂直な長さで、BC は斜めなので高さではありません。',
    add: T([ln(tB[0], tB[1], tC[0], tC[1], C.red, true, 3), lb(132, 82, 'BC は斜め', 12, C.red, 'start', true), lb(132, 100, '（高さではない）', 11, C.red, 'start', true)], B('6×10÷2＝30 は ×', '高さは底辺に垂直な長さ', C.red, FILL.red)) },
  { note: '答え。BC＝10cm、面積＝24cm² です。',
    add: T([], B('BC＝10cm　面積＝24cm²', '単位も わすれずに', C.green, FILL.green)) },
], '三平方の定理と直角三角形の面積');

// ── 直角三角形と内接円 ──
const iA: Pt = [40, 120], iB: Pt = [40, 30], iC: Pt = [160, 120];
const incTri = (): E[] => [pg([iA, iB, iC], C.blue, FILL.blue), pg([[40, 120], [40, 110], [50, 110], [50, 120]], C.gray, 'rgba(0,0,0,0)'), lb(34, 78, '3', 13, C.ink, 'end', true), lb(100, 134, '4', 13, C.ink, 'middle', true), lb(112, 70, '5', 13, C.ink, 'start', true)];
const incircle: Figure = show([
  { note: '3辺が 3、4、5 の直角三角形です。面積と、内接円の半径 r を求めます。そのあと、直角をはさむ2辺が 5 と 12 の直角三角形の斜辺も求めます。',
    add: T(incTri(), B('3・4・5 の直角三角形', '面積は？ 内接円の半径 r は？')) },
  { note: '❓ 面積は？ 直角をはさむ2辺の 3 と 4 が、そのまま底辺と高さになります。三角形は長方形（3×4＝12）の半分なので、3×4÷2＝6 です。',
    add: T([ln(40, 30, 160, 30, C.gray, true, 1.5), ln(160, 30, 160, 120, C.gray, true, 1.5), pg([iB, [160, 30], iC], C.gray, 'rgba(110,100,92,0.12)')], B('3×4÷2＝6', '長方形 12 の半分', C.green, FILL.green)) },
  { note: '❓ 斜めの辺 5 を高さにしてもいい？ だめです。高さは底辺に垂直な長さで、斜めの辺は高さではありません。3×5÷2＝7.5 は誤りです。',
    add: T([ln(iB[0], iB[1], iC[0], iC[1], C.red, false, 3), lb(130, 64, '斜め', 12, C.red, 'start', true)], B('3×5÷2＝7.5 は ×', '高さは垂直な長さ', C.red, FILL.red)) },
  { note: '❓ 内接円とは？ 三角形の3つの辺すべてに、内側からちょうど接する円です。この円の半径を r とします。',
    add: T([ci(70, 90, 30, undefined, C.green, 'rgba(22,163,74,0.12)')], B('3辺に接する円', '半径を r とする', C.green, FILL.green)) },
  { note: '❓ 半径と三角形はどうつながるの？ 円の中心から接点へ引いた半径は、辺に垂直です。だから半径 r が、その辺を底辺としたときの高さになります。',
    add: T([ln(70, 90, 40, 90, C.red, false, 2), ln(70, 90, 70, 120, C.red, false, 2), ln(70, 90, 88, 66, C.red, false, 2), lb(55, 85, 'r', 12, C.red, 'middle', true), lb(77, 108, 'r', 12, C.red, 'middle', true), lb(83, 88, 'r', 12, C.red, 'middle', true)], B('半径 r ＝ 高さ', '辺に垂直だから', C.red, FILL.red)) },
  { note: '❓ 面積とどう結びつける？ 円の中心と3つの頂点を結ぶと、三角形が3つに分かれます。どの小さい三角形も高さは r で、底辺は 3、4、5 です。',
    add: T([ln(70, 90, 40, 120, C.purple, true, 1.5), ln(70, 90, 40, 30, C.purple, true, 1.5), ln(70, 90, 160, 120, C.purple, true, 1.5)], B('3つの小さい三角形', '底辺 3、4、5　高さ r', C.purple, FILL.purple)) },
  { note: '3つの小さい三角形の面積をたすと、3×r÷2＋4×r÷2＋5×r÷2＝(3＋4＋5)×r÷2＝6×r です。これが元の三角形の面積 6 と等しいので、6×r＝6 になります。',
    add: T([], B('(3＋4＋5)×r÷2 ＝ 6×r', 'これが全体の面積 6', C.purple, FILL.purple)) },
  { note: '❓ 「面積÷半周長」の意味は？ 上の式の (3＋4＋5)÷2 は、まわりの長さの半分（半周長）です。面積＝半周長×r と分かるので、r＝面積÷半周長＝6÷6＝1。公式はこの考え方をまとめたものです。',
    add: T([], B('r ＝ 6÷6 ＝ 1cm', '面積 ＝ 半周長 × r', C.red, FILL.red)) },
  { note: '確かめ。半周長×r＝6×1＝6 となり、元の面積 6 とぴったり合っています。',
    add: T([], B('6×1＝6 ＝ 面積', 'r＝1cm で合っている', C.green, FILL.green)) },
  { note: '問3。直角をはさむ2辺が 5 と 12 の直角三角形です。❓ 斜辺はどれ？ 直角の向かい側の辺なので、BC が斜辺です。',
    add: F([pg([[40, 120], [40, 70], [160, 120]], C.blue, FILL.blue), pg([[40, 120], [40, 110], [50, 110], [50, 120]], C.gray, 'rgba(0,0,0,0)'), ln(40, 70, 160, 120, C.red, false, 3), lb(34, 98, '5', 13, C.ink, 'end', true), lb(100, 134, '12', 13, C.ink, 'middle', true), lb(112, 88, 'BC＝？（斜辺）', 12, C.red, 'start', true)], B('斜辺は直角の向かい側', 'BC ＝ ？')) },
  { note: '❓ 斜辺の長さは？ 三平方の定理は「斜辺の2乗＝ほかの2辺の2乗の和」。BC×BC＝5×5＋12×12＝25＋144＝169。2回かけて 169 になる数は 13 なので、BC＝13cm です。',
    add: T([], B('25＋144＝169　BC＝13cm', '2回かけて169になる数は13', C.red, FILL.red)) },
  { note: '確かめ。5、12、13 は整数でそろう有名な直角三角形の比です。13×13＝169＝25＋144 と、逆に計算しても合っています。',
    add: T([], B('13×13＝169＝25＋144', '5・12・13 の直角三角形', C.green, FILL.green)) },
  { note: '答え。問1 面積は 6cm²、問2 内接円の半径は 1cm、問3 斜辺は 13cm です。',
    add: T([], B('6cm²　r＝1cm　13cm', '問1・問2・問3', C.green, FILL.green)) },
], '直角三角形の面積・内接円・三平方の定理');

// ── 一次関数と面積 ──
const gx = (x: number): number => 60 + 22 * x;
const gy = (y: number): number => 125 - 11 * y;
const axes = (): E[] => [ln(30, 125, 306, 125, C.gray, false, 1.5), ln(60, 125, 60, 12, C.gray, false, 1.5), lb(308, 120, 'x', 12, C.gray, 'start', true), lb(66, 14, 'y', 12, C.gray, 'start', true), lb(58, 137, 'O', 11, C.gray, 'end', true)];
const lines2 = (): E[] => [ln(gx(-1.5), gy(0), gx(3), gy(9), C.blue, false, 2), ln(gx(0), gy(9), gx(9), gy(0), C.green, false, 2), lb(134, 34, 'y＝2x＋3', 11, C.blue, 'start', true), lb(196, 76, 'y＝−x＋9', 11, C.green, 'start', true)];
const dotAt = (x: number, y: number): E => ci(gx(x), gy(y), 4, undefined, C.red, C.red);
const linfunc: Figure = show([
  { note: '2直線 y＝2x＋3 と y＝−x＋9 があります。2直線の交点、2直線とx軸で囲まれる三角形の頂点、その面積を求めます。',
    add: T([...axes(), ...lines2()], B('y＝2x＋3 と y＝−x＋9', '交点・頂点・面積は？')) },
  { note: '❓ 交点はどうやって求める？ 交点は2本の直線の両方の上にある点なので、x も y も、どちらの式にもあてはまります。つまり y が等しいので、2x＋3＝−x＋9 という式が立ちます。',
    add: T([dotAt(2, 7), lb(112, 44, '交点', 11, C.red, 'start', true)], B('2x＋3 ＝ −x＋9', '交点では y が等しい', C.purple, FILL.purple)) },
  { note: '❓ この式はどう解く？ x の項を左、数を右に集めます。2x＋x＝9−3 から 3x＝6、だから x＝2 です。',
    add: T([ln(gx(2), gy(7), gx(2), gy(0), C.red, true, 1.5), lb(gx(2), 137, '2', 11, C.red, 'middle', true)], B('3x＝6　x＝2', '交点の x座標', C.red, FILL.red)) },
  { note: '❓ y はいくつ？ x＝2 を式に入れます。y＝2×2＋3＝7。もう一方の式でも −2＋9＝7 となり、同じ値です。交点は (2, 7) です。',
    add: T([ln(gx(2), gy(7), gx(0), gy(7), C.red, true, 1.5), lb(52, 52, '7', 11, C.red, 'end', true), lb(112, 62, '(2, 7)', 12, C.red, 'start', true)], B('y＝2×2＋3＝7', '交点は (2, 7)', C.red, FILL.red)) },
  { note: '❓ x軸との交点は？ x軸の上ではどの点も y＝0 です。だから y＝0 を入れます。2x＋3＝0 より x＝−3/2、−x＋9＝0 より x＝9 です。',
    add: T([dotAt(-1.5, 0), dotAt(9, 0), lb(gx(-1.5), 137, '−3/2', 11, C.red, 'middle', true), lb(gx(9), 137, '9', 11, C.red, 'middle', true)], B('y＝0 → x＝−3/2 と x＝9', 'x軸上の2点', C.purple, FILL.purple)) },
  { note: '2直線と x軸で囲まれた三角形の頂点は、(2, 7)、(−3/2, 0)、(9, 0) の3つです。',
    add: T([pg([[gx(2), gy(7)], [gx(-1.5), gy(0)], [gx(9), gy(0)]], C.red, 'rgba(225,29,72,0.12)')], B('(2,7)　(−3/2,0)　(9,0)', '三角形の3つの頂点', C.red, FILL.red, 13)) },
  { note: '❓ 面積を出すには？ x軸の上にある辺を底辺にします。底辺の長さは、右の 9 から左の −3/2 までで、9−(−3/2)＝9＋3/2＝21/2 です。',
    add: T([ln(gx(-1.5), gy(0), gx(9), gy(0), C.red, false, 4), lb(150, 116, '底辺 21/2', 12, C.red, 'middle', true)], B('9−(−3/2) ＝ 21/2', '底辺の長さ', C.red, FILL.red)) },
  { note: '❓ 高さはなぜ 7？ 高さは底辺に垂直な長さです。頂点 (2, 7) から x軸へまっすぐ下ろした線の長さは、その点の y座標そのもので 7 です。',
    add: T([ln(gx(2), gy(7), gx(2), gy(0), C.green, false, 3), pg([[gx(2), 125], [gx(2), 117], [gx(2) + 8, 117], [gx(2) + 8, 125]], C.gray, 'rgba(0,0,0,0)'), lb(gx(2) + 6, 92, '高さ 7', 12, C.green, 'start', true)], B('高さ ＝ y座標 ＝ 7', 'x軸に垂直に下ろした長さ', C.green, FILL.green)) },
  { note: '面積＝底辺×高さ÷2＝21/2×7÷2＝147/2÷2＝147/4 です。小数にすると 36.75 になります。',
    add: T([], B('21/2×7÷2 ＝ 147/4', '＝ 36.75', C.red, FILL.red)) },
  { note: '❓ まちがえやすい点。底辺を 9 とすることです。左の頂点は原点ではなく −3/2 にあるので、原点から −3/2 までの 3/2 ぶんも底辺に入れないと、三角形の左の部分が足りなくなります。',
    add: T([ln(gx(-1.5), 120, gx(0), 120, C.purple, false, 4)], B('底辺は 9 ではなく 21/2', '−3/2 から 9 まで', C.purple, FILL.purple)) },
  { note: '確かめ。交点 (2, 7) は、y＝2x＋3 に 2×2＋3＝7、y＝−x＋9 に −2＋9＝7 で、どちらの式にも合っています。',
    add: T([], B('4＋3＝7　−2＋9＝7', '(2, 7) は どちらの式にも合う', C.green, FILL.green)) },
  { note: '答え。問1 (2, 7)、問2 (2, 7)・(−3/2, 0)・(9, 0)、問3 147/4 です。',
    add: T([], B('(2, 7)　147/4', '頂点 (2,7)(−3/2,0)(9,0)', C.green, FILL.green)) },
], '交点・三角形の頂点・面積');

// ── 斜面上の力 ──
const U: Pt = [0.866, -0.5];
const N: Pt = [-0.5, -0.866];
const mv = (p: Pt, v: Pt, k: number): Pt => [p[0] + v[0] * k, p[1] + v[1] * k];
const Pc: Pt = [117.94, 75];
const G0 = mv(Pc, N, 18);
const Gt: Pt = [G0[0], G0[1] + 50];
const Sd = mv(G0, U, -25);
const Nd = mv(G0, N, -43.3);
const Fu = mv(G0, U, 25);
const slopeBase = (): E[] => [
  pg([[40, 120], [220, 120], [220, 16]], C.gray, FILL.gray),
  pg([mv(Pc, U, -20), mv(Pc, U, 20), mv(mv(Pc, U, 20), N, 36), mv(mv(Pc, U, -20), N, 36)], C.main, FILL.yellow),
  lb(78, 44, '2kg', 12, C.ink, 'end', true), lb(72, 115, '30°', 12, C.blue, 'start', true),
];
const arr = (a: Pt, b: Pt, color: string): E => ar(a[0], a[1], b[0], b[1], color);
const components = (): E[] => [
  arr(G0, Sd, C.purple), arr(G0, Nd, C.green),
  ln(Sd[0], Sd[1], Gt[0], Gt[1], C.gray, true, 1.2), ln(Nd[0], Nd[1], Gt[0], Gt[1], C.gray, true, 1.2),
];
const slope: Figure = show([
  { note: '質量 2kg の物体が、水平面と 30° の角をなす斜面の上で静止しています。斜面にそって下向きにはたらく重力の分力の大きさと、静止摩擦力の大きさを求めます。',
    add: T(slopeBase(), B('30°の斜面　2kg の物体', '止まっている。分力と摩擦力は？')) },
  { note: '❓ まず重力は何N？ 100g の物体にはたらく重力が 1N です。2kg＝2000g は 100g の 20こぶんなので、重力は 20N。重力は斜面に関係なく、いつも真下を向きます。',
    add: T([arr(G0, Gt, C.red), lb(116, 108, '20N', 12, C.red, 'start', true)], B('2000÷100＝20N', '100g で 1N → 2kg は 20N', C.red, FILL.red)) },
  { note: '❓ なぜ重力を2つに分けるの？ 物体は斜面の上にあるので、真下にはすべり落ちられません。物体を動かそうとするのは、重力のうち「斜面にそった向き」の力だけです。そこで重力を、斜面にそった向きと、斜面に垂直な向きの2つ（分力）に分けます。',
    add: T([...components(), lb(84, 76, '斜面方向', 10, C.purple, 'end', true), lb(136, 100, '垂直方向', 10, C.green, 'start', true)], B('重力 ＝ 2つの分力', '斜面方向 ＋ 斜面に垂直な方向', C.purple, FILL.purple)) },
  { note: '❓ 斜面にそった分力は何N？ 重力の矢印 20N を斜辺にして、直角三角形をつくります。この三角形の角は、斜面の角と同じ 30° です（辺どうしが垂直な角は等しいから）。残りの角は 60° です。',
    add: F([pg([[70, 115], [156.6, 115], [70, 65]], C.blue, FILL.blue), pg([[70, 115], [70, 105], [80, 105], [80, 115]], C.gray, 'rgba(0,0,0,0)'), lb(122, 84, '20N（重力）', 12, C.red, 'start', true), lb(64, 92, '分力', 12, C.purple, 'end', true), lb(142, 110, '30°', 12, C.ink, 'end', true), lb(76, 82, '60°', 11, C.ink, 'start', true)], B('30°・60°・90° の直角三角形', '分力は 30°の向かい側の辺')) },
  { note: '❓ なぜ 30° の向かい側の辺が、斜辺の半分になるの？ 1辺が 20 の正三角形を、まんなかで半分に切ると、この三角形ができます。切ったので底辺は 20÷2＝10。この 10 が 30° の向かい側の辺です。',
    add: F([pg([[110, 118], [210, 118], [160, 31.4]], C.blue, FILL.blue), ln(160, 31.4, 160, 118, C.red, true, 2), lb(127, 72, '20', 12, C.ink, 'end', true), lb(135, 133, '10', 12, C.red, 'middle', true), lb(185, 133, '10', 12, C.red, 'middle', true), lb(166, 54, '30°', 11, C.red, 'start', true), lb(120, 112, '60°', 10, C.ink, 'start', true)], B('底辺 20÷2 ＝ 10', '正三角形を半分に切った形', C.purple, FILL.purple)) },
  { note: '斜面の図にもどります。重力 20N を斜辺とする三角形で、30° の向かい側にあたる斜面にそった分力は、20÷2＝10N です。',
    add: F([...slopeBase(), arr(G0, Gt, C.red), ...components(), lb(84, 76, '10N', 12, C.purple, 'end', true)], B('20÷2 ＝ 10N', '斜面にそった分力', C.purple, FILL.purple)) },
  { note: '❓ 静止摩擦力は何N？ 物体は止まっているので、斜面にそった向きの力はつり合っています。下向きに 10N で引かれているので、それを打ち消すように、斜面にそって上向きに同じ 10N の摩擦力がはたらいています。',
    add: F([...slopeBase(), arr(G0, Sd, C.purple), arr(G0, Fu, C.red), lb(84, 76, '分力 10N', 11, C.purple, 'end', true), lb(136, 46, '摩擦力 10N', 11, C.red, 'start', true)], B('つり合い → 摩擦力 ＝ 10N', '分力と同じ大きさで逆向き', C.red, FILL.red)) },
  { note: '確かめ。斜面の角度を 0°（水平）にすると分力は 0N、90°（真下）にすると分力は重力そのものの 20N になります。30° はそのあいだで、ちょうど半分の 10N。つじつまが合っています。',
    add: F([bx(20, 24, 4, 30, undefined, C.gray, FILL.gray), lb(30, 44, '0°：0N', 12, C.gray, 'start', true), bx(20, 62, 140, 30, '30°：10N', C.purple, FILL.purple, 13), bx(20, 100, 280, 30, '90°：20N', C.red, FILL.red, 13)], B('0N → 10N → 20N', '30°は ちょうどまんなか', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。斜面に垂直な分力（垂直抗力とつり合う力）と取りちがえることです。そちらは 60° の向かい側の辺にあたり、約 17.3N で 10N より大きくなります。ほしいのは斜面にそった 10N です。',
    add: F([...slopeBase(), arr(G0, Gt, C.red), ...components(), lb(84, 76, '10N（これ）', 10, C.purple, 'end', true), lb(136, 100, '約17.3N（ちがう）', 10, C.green, 'start', true)], B('ほしいのは 斜面にそった 10N', '垂直な分力は 10N ではない', C.red, FILL.red)) },
  { note: '答え。重力の斜面方向の分力は 10N、静止摩擦力も 10N です。',
    add: T([], B('分力 10N　静止摩擦力 10N', 'つり合っている', C.green, FILL.green)) },
], '斜面の分力は重力の半分（30°のとき）');

// ── ばね ──
const gxs = (f: number): number => 40 + 8 * f;
const gys = (e: number): number => 120 - 8 * e;
const gAxes = (): E[] => [ln(40, 120, 300, 120, C.gray, false, 1.5), ln(40, 120, 40, 14, C.gray, false, 1.5), lb(46, 12, 'のび(cm)', 11, C.gray, 'start', true), lb(300, 134, '力(N)', 11, C.gray, 'end', true), lb(34, 132, 'O', 11, C.gray, 'end', true)];
const zig = (x: number, y0: number, y1: number): E[] => {
  const out: E[] = [];
  const n = 8;
  let px = x, py = y0;
  for (let i = 1; i <= n; i++) {
    const nx = i === n ? x : x + (i % 2 === 1 ? 9 : -9);
    const ny = y0 + ((y1 - y0) * i) / n;
    out.push(ln(px, py, nx, ny, C.gray, false, 1.6));
    px = nx; py = ny;
  }
  return out;
};
const dotG = (f: number, e: number): E => ci(gxs(f), gys(e), 4, undefined, C.red, C.red);
const spring: Figure = show([
  { note: '10N の力を加えると、ばねは自然長から 4cm のびます。このばねを 1cm のばすのに必要な力と、25N の力を加えたときののびを求めます。',
    add: T([ln(40, 10, 100, 10, C.gray, false, 3), ...zig(70, 10, 62), lb(70, 80, '自然長', 12, C.gray, 'middle', true), ln(180, 10, 240, 10, C.gray, false, 3), ...zig(210, 10, 78), bx(190, 78, 40, 24, '10N', C.red, FILL.red, 13), ln(200, 62, 262, 62, C.gray, true, 1.2), lb(236, 76, '4cm のびた', 11, C.red, 'start', true)], B('10N → 4cm のびる', '1cm のばす力は？ 25N では？')) },
  { note: '❓ のびは力にどう関係する？ ばねののびは、加えた力に比例します。力が2倍、3倍になれば、のびも2倍、3倍になります。10N で 4cm なら、20N で 8cm、30N で 12cm。グラフは原点を通る直線になります。',
    add: F([...gAxes(), ln(40, 120, gxs(30), gys(12), C.blue, false, 2), dotG(10, 4), dotG(20, 8), dotG(30, 12), lb(126, 98, '(10N, 4cm)', 10, C.ink, 'start', true), lb(206, 66, '(20N, 8cm)', 10, C.ink, 'start', true), lb(272, 40, '(30N, 12cm)', 10, C.ink, 'end', true)], B('力2倍 → のびも2倍', '原点を通る直線', C.purple, FILL.purple)) },
  { note: '❓ 1cm のばす力は？ 4cm のばすのに 10N かかるので、1cm ぶんは 10÷4＝2.5N です。グラフでは、のびが 1cm のところが 2.5N にあたります。',
    add: T([dotG(2.5, 1), lb(90, 114, '(2.5N, 1cm)', 10, C.red, 'start', true)], B('10÷4 ＝ 2.5N', '1cm のばす力', C.red, FILL.red)) },
  { note: '❓ なぜわり算で 1cm ぶんが出るの？ のびは力に比例するので、4cm は 1cm ぶんが4つ分です。10N は、同じ大きさの力が4つ集まったもの。10N を4つに等分すると、1つは 10÷4＝2.5N です。',
    add: F([...[0, 1, 2, 3].map((i) => bx(20 + i * 70, 30, 70, 40, '2.5N', C.red, FILL.red, 14)), ...[0, 1, 2, 3].map((i) => lb(55 + i * 70, 84, '1cm', 11, C.gray, 'middle', true)), lb(160, 104, '合わせて 10N ＝ 4cm', 13, C.ink, 'middle', true)], B('2.5N × 4 ＝ 10N', '1cm ぶん × 4 ＝ 4cm', C.red, FILL.red)) },
  { note: '❓ 25N ならのびは？ 25N は 2.5N の何こぶんか、25÷2.5＝10こぶんです。1こぶんで 1cm のびるので、のびは 10cm になります。',
    add: F([lb(150, 32, '2.5N が 10こ ＝ 25N', 12, C.red, 'middle', true), ...Array.from({ length: 10 }, (_, i) => bx(20 + i * 26, 42, 26, 30, '2.5', C.red, FILL.red, 10)), lb(150, 96, '1cm が 10こ ＝ 10cm', 12, C.green, 'middle', true)], B('25÷2.5 ＝ 10こぶん', '10cm のびる', C.red, FILL.red)) },
  { note: 'グラフでも確かめます。25N のところを見ると、のびは 10cm になっています。',
    add: F([...gAxes(), ln(40, 120, gxs(30), gys(12), C.blue, false, 2), dotG(25, 10), ln(gxs(25), gys(10), gxs(25), 120, C.red, true, 1.2), ln(gxs(25), gys(10), 40, gys(10), C.red, true, 1.2), lb(gxs(25), 134, '25N', 11, C.red, 'middle', true), lb(34, gys(10) + 4, '10cm', 11, C.red, 'end', true)], B('25N → 10cm', 'グラフでも 10cm', C.green, FILL.green)) },
  { note: '別の考え方。25N は 10N の 25÷10＝2.5倍です。のびも 2.5倍になるので、4×2.5＝10cm です。',
    add: T([], B('4×2.5 ＝ 10cm', '力が 2.5倍 → のびも 2.5倍')) },
  { note: '確かめ。10N：4cm と 25N：10cm は、どちらも 2.5倍の関係です。また 10cm のびるのに 2.5N ずつ 10こぶんで 25N、25÷2.5＝10 と逆に計算しても合います。',
    add: T([], B('10N：4cm ＝ 25N：10cm', 'どちらも 2.5倍', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。のびを 4＋15＝19cm のようにたすことです。力が 15N 増えたのなら、15÷2.5＝6cm のびが増えるので、4＋6＝10cm です。力の 15 を、そのまま cm にたしてはいけません。',
    add: T([], B('4＋15＝19cm は ×', '15N増 → 6cm増 → 4＋6＝10cm', C.red, FILL.red)) },
  { note: '答え。1cm のばす力は 2.5N、25N を加えると 10cm のびます。',
    add: T([], B('2.5N　10cm', '1cm のばす力・25N でののび', C.green, FILL.green)) },
], 'ばねののびは力に比例する');

// ── てこ ──
const leverScene = (right: string): E[] => [
  ln(20, 80, 290, 80, C.ink, false, 4), pg([[130, 80], [115, 108], [145, 108]], C.gray, FILL.gray),
  ln(30, 80, 30, 92, C.ink, false, 1.5), bx(14, 92, 32, 26, '3kg', C.blue, FILL.blue, 13),
  ln(280, 80, 280, 92, C.ink, false, 1.5), bx(264, 92, 32, 26, right, C.red, FILL.red, 12),
  ar(128, 64, 32, 64, C.gray), ar(132, 64, 278, 64, C.gray), lb(80, 58, '20cm', 11, C.gray, 'middle', true), lb(205, 58, '30cm', 11, C.gray, 'middle', true),
];
const lever: Figure = show([
  { note: '支点から左 20cm のところに 3kg のおもりをつるしました。支点から右 30cm のところに何kgのおもりをつるせば、てこはつり合うでしょう。',
    add: T(leverScene('？kg'), B('左 20cm に 3kg', '右 30cm に ？kg でつり合う')) },
  { note: '❓ つり合うとは、どういうこと？ てこを回そうとするはたらきが、左まわりと右まわりで同じ大きさ、ということです。❓ 回すはたらきは何で決まる？ おもりが重いほど、また支点から遠いほど、てこを強く回します。',
    add: T([lb(40, 134, '左まわり', 11, C.blue, 'middle', true), lb(280, 134, '右まわり', 11, C.red, 'middle', true)], B('回すはたらき ＝ 重さ×距離', '重いほど・遠いほど強い', C.purple, FILL.purple)) },
  { note: '左まわりのはたらきは、3kg×20cm＝60 です。',
    add: T([lb(80, 44, '3×20＝60', 12, C.blue, 'middle', true)], B('3×20 ＝ 60', '左まわりのはたらき')) },
  { note: '❓ 右は？ つり合うためには、右まわりのはたらきも 60 でなければなりません。おもりを □kg とすると、□×30＝60 という式になります。',
    add: T([lb(205, 44, '□×30＝60', 12, C.red, 'middle', true)], B('□ × 30 ＝ 60', '右も 60 になればつり合う', C.red, FILL.red)) },
  { note: '❓ □はいくつ？ □×30＝60 は、かけ算の逆のわり算で □＝60÷30＝2。右のおもりは 2kg です。',
    add: T([bx(264, 92, 32, 26, '2kg', C.red, FILL.red, 13)], B('60 ÷ 30 ＝ 2kg', '右のおもり', C.red, FILL.red)) },
  { note: '❓ 遠いほうは軽くていいのはなぜ？ 右の 30cm は、左の 20cm の 30÷20＝1.5倍の距離です。距離が 1.5倍なら、同じ回すはたらきを出すのに重さは 1/1.5 でよいので、3÷1.5＝2kg。距離と重さは逆の比になります。',
    add: F([bx(20, 30, 100, 34, '20cm', C.blue, FILL.blue, 13), bx(124, 30, 150, 34, '30cm', C.red, FILL.red, 13), lb(284, 52, '距離', 11, C.gray, 'start', true), bx(20, 76, 150, 34, '3kg', C.blue, FILL.blue, 13), bx(174, 76, 100, 34, '2kg', C.red, FILL.red, 13), lb(284, 98, '重さ', 11, C.gray, 'start', true)], B('距離 2：3 ↔ 重さ 3：2', '逆の比になる', C.purple, FILL.purple)) },
  { note: '❓ もし右にも 3kg をつるしたらどうなる？ 右まわりは 3×30＝90 になり、左まわりの 60 より大きくなるので、右に傾きます。重さだけでなく、距離も大事だと分かります。',
    add: F([bx(20, 30, 120, 36, '左まわり 60', C.blue, FILL.blue, 13), bx(20, 78, 180, 36, '右まわり 90', C.red, FILL.red, 13)], B('60 ＜ 90 → 右に傾く', 'つり合わない', C.red, FILL.red)) },
  { note: '確かめ。左は 3×20＝60、右は 2×30＝60 で、左右が同じ 60 になり、つり合います。',
    add: F([...leverScene('2kg'), lb(80, 44, '3×20＝60', 12, C.blue, 'middle', true), lb(205, 44, '2×30＝60', 12, C.red, 'middle', true)], B('60 ＝ 60', '左右のはたらきが同じ', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。かけ算ではなく足し算で考えることです。3＋20 と □＋30 をくらべても、回すはたらきはくらべられません。重さ×距離のかけ算でくらべます。',
    add: T([], B('足し算ではなく かけ算', '重さ×距離 でくらべる', C.red, FILL.red)) },
  { note: '答え。右につるすおもりは 2kg です。',
    add: T([], B('2kg', '3×20 ＝ 2×30', C.green, FILL.green)) },
], 'てこのつり合い：重さ×支点からの距離');

// ── 動滑車と仕事の原理 ──
const leftLift = (): E[] => [bx(40, 80, 50, 30, '40kg', C.blue, FILL.blue, 13), ar(65, 78, 65, 28, C.red), lb(65, 22, '400N', 12, C.red, 'middle', true), lb(65, 132, 'そのまま', 11, C.gray, 'middle', true)];
const rightPulley = (): E[] => [ln(190, 10, 300, 10, C.gray, false, 4), ln(227, 10, 227, 70, C.ink, false, 1.5), ln(263, 70, 263, 22, C.ink, false, 1.5), ci(245, 70, 18, undefined, C.gray, FILL.gray), ln(245, 88, 245, 100, C.ink, false, 1.5), bx(225, 100, 40, 24, '40kg', C.blue, FILL.blue, 12), lb(222, 74, '動滑車', 10, C.gray, 'end', true)];
const pulley: Figure = show([
  { note: '質量 40kg の荷物を持ち上げます。そのまま持ち上げる場合と、動滑車（うごかっしゃ）を1個使う場合とで、手がする仕事はどうちがうでしょう。たとえば荷物を 1m 持ち上げるとして比べます。',
    add: T([...leftLift(), ...rightPulley()], B('40kg の荷物を 1m 上げる', '手がする仕事は 同じ？ ちがう？')) },
  { note: '❓ そのまま持ち上げるときの力は？ 100g の物体にはたらく重力が 1N なので、40kg＝40000g は 400N です。ささえる力も 400N。仕事＝力×動かした距離 なので、400N×1m＝400J です。',
    add: T([ar(110, 105, 110, 60, C.green), lb(118, 86, '1m上げる', 11, C.green, 'start', true)], B('400N × 1m ＝ 400J', '仕事 ＝ 力 × 動かした距離')) },
  { note: '❓ 動滑車だと、なぜ力が半分になるの？ 荷物と動滑車は、2本のひも（左のひもと右のひも）でささえられています。400N の重さを2本で分けてささえるので、1本あたり 400÷2＝200N。手で引く力も 200N です。',
    add: T([ln(227, 10, 227, 70, C.red, false, 3), ln(263, 70, 263, 22, C.red, false, 3), ar(275, 50, 275, 22, C.red), lb(282, 40, '200N', 11, C.red, 'start', true)], B('400N ÷ 2本 ＝ 200N', '1本のひもが ささえる力', C.red, FILL.red)) },
  { note: '❓ ひもを引く距離は、なぜ2倍になるの？ 荷物を 1m 上げるには、動滑車の両側の2本のひもが、それぞれ 1m ずつ短くなる必要があります。その 1m＋1m の分のひもを手で引くので、引く距離は 2m です。',
    add: T([ln(314, 22, 314, 70, C.green, false, 2), lb(292, 98, '手は2m', 11, C.green, 'middle', true)], B('荷物 1m → 手は 2m', '左右のひも 1m ＋ 1m', C.green, FILL.green)) },
  { note: '手がする仕事は、力×動かした距離＝200N×2m＝400J です。',
    add: T([], B('200N × 2m ＝ 400J', '手がする仕事', C.red, FILL.red)) },
  { note: '❓ 2つをくらべると？ そのまま持ち上げたときの仕事は 400J、動滑車を使ったときも 400J。同じ大きさです。',
    add: F([bx(20, 30, 260, 36, 'そのまま：400N×1m＝400J', C.blue, FILL.blue, 13), bx(20, 80, 260, 36, '動滑車：200N×2m＝400J', C.green, FILL.green, 13)], B('400J ＝ 400J', '仕事は同じ', C.green, FILL.green)) },
  { note: '❓ 力が半分になったのに、なぜ仕事は減らないの？ 力を半分にできた代わりに、ひもを引く距離が2倍になったからです。力で得した分を、距離で損している、と考えられます。これを仕事の原理といいます。',
    add: T([], B('力 1/2 × 距離 2倍 ＝ 同じ', '力で得して、距離で損する', C.purple, FILL.purple)) },
  { note: '確かめ。もし動滑車で引く距離が 2m ではなく 1m だったら、仕事は 200×1＝200J になり、そのまま持ち上げる 400J より少なくなって、道具で仕事を得することになってしまいます。そんなことは起きないので、距離が2倍でつじつまが合います。',
    add: T([], B('200×2 ＝ 400 ＝ 400×1', '距離2倍で つじつまが合う', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。「力が半分になったのだから、仕事も半分」と考えることです。仕事は力×距離で、距離が2倍になっているので、半分×2倍＝1倍。仕事は変わりません。',
    add: T([], B('1/2 × 2 ＝ 1（倍）', '仕事は変わらない', C.red, FILL.red)) },
  { note: '答え。仕事の大きさは変わらない（同じ）です。力は半分になりますが、引く距離が2倍になるため、仕事（力×距離）は等しくなります。',
    add: T([], B('仕事は 同じ', '力は半分・距離は2倍', C.green, FILL.green)) },
], '仕事の原理：道具を使っても仕事は変わらない');

// ── 浮力 ──
const tank = (): E[] => [bx(30, 60, 170, 76, undefined, C.blue, FILL.blue), bx(95, 44, 50, 80, '木材', C.main, FILL.warm, 13), lb(206, 66, '水面', 11, C.blue, 'start', true)];
const buoy: Figure = show([
  { note: '密度 0.8g/cm³、体積 250cm³ の木材を水に入れました。この木材にはたらく浮力と、水面から出ている部分の体積を求めます。水の密度は 1.0g/cm³、100g の物体にはたらく重力を 1N とします。',
    add: T([...tank(), lb(206, 90, '木材 250cm³', 11, C.ink, 'start', true)], B('木材 0.8g/cm³　250cm³', '浮力は？ 水面から出る体積は？')) },
  { note: '❓ 木材の重さは？ 密度は 1cm³ あたりの重さです。0.8g/cm³ のものが 250cm³ あるので、0.8×250＝200g。100g で 1N なので、重力は 2.0N です。',
    add: T([], B('0.8×250 ＝ 200g ＝ 2.0N', '100g で 1N')) },
  { note: '❓ 木は水に浮く？ 沈む？ 水の密度は 1.0g/cm³ で、木は 0.8g/cm³。同じ体積なら、木のほうが水より軽いので、浮きます。',
    add: T([], B('0.8 ＜ 1.0 → 浮く', '木は同じ体積の水より軽い', C.green, FILL.green)) },
  { note: '❓ 浮いて止まっているとき、浮力は何N？ 止まっているのは、上向きの力と下向きの力がつり合っているからです。下向きの重力が 2.0N なので、上向きの浮力も 2.0N です。',
    add: T([ar(108, 94, 108, 128, C.red), lb(90, 104, '重力 2.0N', 10, C.red, 'end', true), ar(132, 122, 132, 96, C.green), lb(150, 104, '浮力 2.0N', 10, C.green, 'start', true)], B('浮力 ＝ 重力 ＝ 2.0N', 'つり合っている', C.red, FILL.red)) },
  { note: '❓ 浮力とは何の力？ 木がおしのけた水の重さと同じ大きさの力です（アルキメデスの原理）。浮力が 2.0N なので、おしのけた水の重さも 2.0N、つまり 200g の水です。',
    add: T([bx(95, 60, 50, 64, undefined, C.blue, 'rgba(2,132,199,0.35)'), lb(206, 112, '水をおしのけた部分', 10, C.blue, 'start', true)], B('浮力 ＝ おしのけた水の重さ', '2.0N ＝ 200g の水', C.purple, FILL.purple)) },
  { note: '❓ おしのけた水は何cm³？ 水は 1cm³ で 1g です。200g の水は 200cm³。つまり木材は 200cm³ ぶんが水の中に沈んでいます。',
    add: T([lb(206, 130, '沈む：200cm³', 11, C.blue, 'start', true)], B('200g ÷ 1g/cm³ ＝ 200cm³', '沈んでいる体積', C.blue, FILL.blue)) },
  { note: '水面から出ている部分は、全体 250cm³ から沈んでいる 200cm³ をひいて、250−200＝50cm³ です。',
    add: T([bx(95, 44, 50, 16, undefined, C.red, FILL.red), lb(206, 50, '出る：50cm³', 11, C.red, 'start', true)], B('250 − 200 ＝ 50cm³', '水面から出ている部分', C.red, FILL.red)) },
  { note: '❓ 別の見かたでも確かめよう。密度の比は 0.8：1.0＝4：5。木の密度は水の 4/5 なので、体積の 4/5 が沈みます。250×4/5＝200cm³ で、さっきと同じです。',
    add: T([], B('250 × 4/5 ＝ 200cm³', '密度の比 4：5 ＝ 沈む割合', C.purple, FILL.purple)) },
  { note: '確かめ。出ている 50cm³ は全体の 1/5。おしのけた水 200g の重さ 2.0N が、木の重さ 2.0N とぴったり同じです。',
    add: T([], B('200g の水 ＝ 200g の木', '浮力 ＝ 重力 で合っている', C.green, FILL.green)) },
  { note: '❓ まちがえやすい点。木が全部沈んでいるとして計算することです。全部（250cm³）沈めたとすると浮力は 2.5N になり、重力 2.0N より大きいので、木は上に浮き上がります。だから途中で止まり、一部が水面から出ます。',
    add: F([bx(20, 30, 200, 34, '重力 2.0N', C.red, FILL.red, 13), bx(20, 78, 250, 34, '全部沈めたときの浮力 2.5N', C.green, FILL.green, 13)], B('2.5N ＞ 2.0N → 浮き上がる', '全部は沈まない', C.red, FILL.red)) },
  { note: '答え。浮力は 2.0N、水面から出ている部分は 50cm³ です。',
    add: T([], B('浮力 2.0N　出る部分 50cm³', '単位も わすれずに', C.green, FILL.green)) },
], '浮力＝おしのけた水の重さ');


export const figuresSchoolKoko00: Record<string, Figure> = {
  kk_sansu_09: simArea,
  koko_kankan_sansu_08: simPerim,
  kk_rika_01: seriesCircuit,
  kt_rika_01: parSer({ v: 12, rs: 4, p1: 6, p2: 3, rt: 6, i: 2, vs: 8, vp: 4, i1: '2/3A', i2: '4/3A', ask: '回路全体の電流と、並列部分にかかる電圧を求めます。', ans: '全体の電流 2A、並列部分の電圧 4V', ansSub: '並列の合成抵抗は 2Ω' }, '並列＋直列の回路：並列を先にまとめる'),
  koko_kankan_rika_c1_25: parSer({ v: 24, rs: 2, p1: 6, p2: 3, rt: 4, i: 6, vs: 12, vp: 12, i1: '2A', i2: '4A', ask: '回路全体の電流と、2Ωの抵抗にかかる電圧を求めます。', ans: '全体の電流 6A、2Ωの電圧 12V', ansSub: '並列の合成抵抗は 2Ω' }, '並列＋直列の回路：並列を先にまとめる'),
  koko_kankan_rika_07: parallelOnly,
  kk_rika_03: pressure,
  kt_sansu_08: pythagoras,
  koko_meidai_sansu_03: incircle,
  koko_hibiya_sansu_03: linfunc,
  koko_kankan_rika_c1_20: slope,
  koko_kankan_rika_c1_08: spring,
  koko_kankan_rika_c1_06: lever,
  koko_kankan_rika_c1_10: pulley,
  koko_kankan_rika_06: buoy,
};
