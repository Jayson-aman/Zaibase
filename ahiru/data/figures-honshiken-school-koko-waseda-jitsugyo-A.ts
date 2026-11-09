// 本試験対策（学校別）追加分A：早稲田実業学校高等部（course: 'koko-waseda-jitsugyo'）高校受験・数学（ID _01〜_40）の動く図解。数学40問のうち18問に付ける。
// 各図は show() で7枚以上。座標は 320×240、下の帯（y 146〜）に説明の文字が出る。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';
import type { Slide } from './diagram-kit';

type E = DiagramElement;

// 文字の幅の見積もり（scripts/figlint.ts と同じ）。はみ出すときは文字サイズを自動で小さくする。
const charW = (c: string, s: number) => (/[\x20-\x7e]/.test(c) ? (c === ' ' ? 0.3 : /[0-9]/.test(c) ? 0.58 : /[A-Z]/.test(c) ? 0.66 : 0.52) * s : s);
const textW = (t: string, s: number) => Math.max(...t.split('\n').map((l) => [...l].reduce((a, c) => a + charW(c, s), 0)));
const fit = (t: string, w: number, s: number) => { let z = s; while (textW(t, z) > w && z > 8) z -= 0.5; return z; };

const tx = (x: number, y: number, t: string, size = 14, color: string = C.ink, bold = true, anchor: 'start' | 'middle' | 'end' = 'middle'): E => {
  const room = anchor === 'middle' ? 2 * Math.min(x, 320 - x) - 8 : anchor === 'start' ? 316 - x : x - 4;
  return lb(x, y, t, fit(t, room, size), color, anchor, bold);
};
// 箱の中の文字は、箱に収まる大きさに自動で小さくする
const bf = (x: number, y: number, w: number, h: number, t: string, color?: string, fill?: string, size = 12): E => {
  const nl = t.split('\n').length;
  let z = fit(t, w - 6, size);
  while (nl * z * 1.2 > h - 1 && z > 8) z -= 0.5;
  return bx(x, y, w, h, t, color, fill, z);
};

// 下の帯：lines の先頭文字で色が決まる（=緑 / ~赤 / *紫 / それ以外は青）
const tone = (s: string): [string, string, string] => {
  const c = s[0];
  if (c === '=') return [s.slice(1), C.green, FILL.green];
  if (c === '~') return [s.slice(1), C.red, FILL.red];
  if (c === '*') return [s.slice(1), C.purple, FILL.purple];
  return [s, C.blue, FILL.blue];
};
const B = (lines: string[]): E[] => {
  if (lines.length === 1) {
    const [t, col, fill] = tone(lines[0]);
    const big = t.startsWith('答え');
    return band(146, bf(20, big ? 158 : 166, 280, big ? 42 : 36, t, col, fill, big ? 18 : 15));
  }
  const h = lines.length === 2 ? 36 : 27;
  const gap = lines.length === 2 ? 40 : 30;
  const y0 = lines.length === 2 ? 154 : 150;
  return band(146, ...lines.map((s, i) => { const [t, col, fill] = tone(s); return bf(20, y0 + i * gap, 280, h, t, col, fill, lines.length === 2 ? 14 : 13); }));
};
const S = (note: string, lines: string[], add: E[] = []): Slide => ({ note, add: [...add, ...B(lines)] });
const SF = (note: string, lines: string[], draw: E[]): Slide => ({ note, add: [...fresh(...draw), ...B(lines)] });
// 上の欄に文字の行だけを並べる（色は行頭の記号：=緑 ~赤 *紫）
const textLines = (strs: string[]): E[] => {
  const n = strs.length;
  const size = n === 1 ? 24 : n === 2 ? 20 : n === 3 ? 18 : 16;
  const dy = n === 1 ? 0 : n <= 3 ? 34 : 28;
  return strs.map((s, i) => {
    const c = s[0];
    const [t, col] = c === '=' ? [s.slice(1), C.green] : c === '~' ? [s.slice(1), C.red] : c === '*' ? [s.slice(1), C.purple] : [s, C.ink];
    return lb(160, 70 + (i - (n - 1) / 2) * dy + size * 0.35, t, fit(t, 288, size), col, 'middle', true);
  });
};
const P = (note: string, strs: string[], bottom: string[], extra: E[] = []): Slide => SF(note, bottom, [...textLines(strs), ...extra]);
const ANS = (t: string, note?: string): Slide => S(note ?? `答えは${t}です。`, [`=答え　${t}`]);

const P2 = (pts: [number, number][], color: string = C.ink, fill?: string): E => pg(pts, color, fill);
const at = (cx: number, cy: number, r: number, deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
const seg = (a: [number, number], b: [number, number], color: string = C.ink, dashed = false, w = 2.5): E => ln(a[0], a[1], b[0], b[1], color, dashed, w);
const dot = (p: [number, number], r = 3, color: string = C.ink): E => ci(p[0], p[1], r, undefined, color, color);
const lerp = (a: [number, number], b: [number, number], t: number): [number, number] => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const circPts = (cx: number, cy: number, r: number, n = 60): [number, number][] =>
  Array.from({ length: n }, (_, k) => at(cx, cy, r, (360 * k) / n));
const arcPts = (cx: number, cy: number, r: number, a0: number, a1: number, n = 16): [number, number][] =>
  Array.from({ length: n + 1 }, (_, k) => at(cx, cy, r, a0 + ((a1 - a0) * k) / n));
const polyLine = (pts: [number, number][], color: string = C.ink, w = 2.5): E[] =>
  pts.slice(0, -1).map((p, i) => seg(p, pts[i + 1], color, false, w));


// ───────── 数学 ─────────

// 13 放物線と三角形OAB
const g13 = (x: number, y: number): [number, number] => [110 + 22 * x, 128 - 12 * y];
const par13 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 73; k++) { const x = -3 + k * 0.1; pts.push(g13(x, x * x / 2)); } return polyLine(pts, C.gray, 2); };
const ax13 = (): E[] => [ar(30, 128, 285, 128, C.gray), ar(110, 135, 110, 8, C.gray), tx(298, 132, 'x', 12, C.gray), tx(120, 14, 'y', 12, C.gray), tx(100, 140, 'O', 12, C.gray)];
const A13 = g13(-2, 2), B13 = g13(4, 8), C13 = g13(0, 4), O13 = g13(0, 0);
const base13 = (): E[] => [...ax13(), ...par13(), dot(A13, 3.5, C.blue), dot(B13, 3.5, C.red), tx(58, 100, 'A', 14, C.blue, true, 'end'), tx(206, 28, 'B', 14, C.red, true, 'start')];
const s13: Figure = show([
  SF('放物線 y＝(1/2)x² 上に、x座標が−2、4の2点A、Bがあります。原点をOとして、△OABの面積を求めます。', ['x座標が−2、4 の点 A、B　△OAB の面積は？'], base13()),
  S('A、Bの座標を求めます。y＝(1/2)x² に x＝−2、4 を入れると、y＝2、8。', ['A(−2, 2)　B(4, 8)'], [tx(30, 121, '(−2, 2)', 11, C.blue, true, 'start'), tx(214, 44, '(4, 8)', 11, C.red, true, 'start')]),
  S('直線ABの傾きは (8−2)÷(4−(−2))＝1。A(−2, 2) を通るので、式は y＝x＋4。', ['傾き (8−2)÷6＝1', 'y＝x＋4'], [seg(g13(-3, 1), g13(4.3, 8.3), C.purple, false, 2.5)]),
  S('直線ABと y軸との交点を C とします。x＝0 のとき y＝4 なので C(0, 4)。OC＝4 です。', ['y軸との交点 C(0, 4)　OC＝4'], [dot(C13, 4, C.green)]),
  S('Cで△OABを2つに分けます。OC を共通の底辺にすると、高さは A、B の x座標の大きさです。', ['底辺OC＝4　高さは 2 と 4'], [pg([O13, A13, C13], C.blue, FILL.blue), pg([O13, C13, B13], C.green, FILL.green), seg(O13, C13, C.ink, false, 2.5), seg(A13, B13, C.purple, false, 2.5), seg(g13(0, 4), g13(0, 0), C.ink, false, 2.5), seg(A13, [110, A13[1]], C.gray, true, 1.5), seg(B13, [110, B13[1]], C.gray, true, 1.5), tx(88, 99, '2', 11, C.gray), tx(154, 27, '4', 11, C.gray), dot(A13, 3.5, C.blue), dot(B13, 3.5, C.red), dot(C13, 4, C.green), tx(118, 98, 'C', 13, C.green, true, 'start')]),
  S('それぞれの面積を求めます。△OAC＝1/2×4×2＝4、△OBC＝1/2×4×4＝8。', ['△OAC＝1/2×4×2＝4', '△OBC＝1/2×4×4＝8']),
  ANS('12cm²', '△OAB＝△OAC＋△OBC＝4＋8＝12。答えは12cm²です。'),
  S('確かめ。A、B、O をふくむ長方形（横6、縦8、面積48）でかこみます。まわりの3つの直角三角形は 2、18、16。', ['まわりの三角形 2＋18＋16＝36', '=48−36＝12 で一致 ✓'], [seg(g13(-2, 0), g13(4, 0), C.gray, true, 1.5), seg(g13(4, 0), g13(4, 8), C.gray, true, 1.5), seg(g13(4, 8), g13(-2, 8), C.gray, true, 1.5), seg(g13(-2, 8), g13(-2, 0), C.gray, true, 1.5)]),
], '底辺OC＝4。高さ2と4。△OAC＝4、△OBC＝8。合わせて12。');

// 14 放物線と直線、△OABの面積を2等分
const g14 = (x: number, y: number): [number, number] => [150 + 26 * x, 130 - 12.5 * y];
const par14 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 58; k++) { const x = -2.7 + k * 0.1; pts.push(g14(x, x * x)); } return polyLine(pts, C.gray, 2); };
const A14 = g14(-2, 4), B14 = g14(3, 9), M14 = g14(0.5, 6.5), O14 = g14(0, 0);
const base14 = (): E[] => [ar(40, 130, 290, 130, C.gray), ar(150, 138, 150, 6, C.gray), tx(298, 134, 'x', 12, C.gray), tx(160, 18, 'y', 12, C.gray), tx(140, 142, 'O', 12, C.gray), ...par14(), seg(g14(-3, 3), g14(3.3, 9.3), C.blue, false, 2.5), dot(A14, 3.5, C.red), dot(B14, 3.5, C.red), tx(92, 76, 'A', 14, C.red, true, 'end'), tx(236, 22, 'B', 14, C.red, true, 'start')];
const s14: Figure = show([
  SF('放物線 y＝x² と直線 y＝x＋6 が、2点A、Bで交わっています。原点Oを通って、△OABの面積を2等分する直線の式を求めます。', ['y＝x² と y＝x＋6 の交点 A、B'], base14()),
  S('交点のx座標は、x²＝x＋6 を解いて求めます。x²−x−6＝0、(x−3)(x＋2)＝0 より x＝−2、3。', ['x＝−2、3　A(−2, 4)　B(3, 9)'], [tx(86, 110, '(−2, 4)', 11, C.red, true, 'end'), tx(232, 36, '(3, 9)', 11, C.red, true, 'start')]),
  S('△OAB をかきます。この三角形の面積を、頂点Oを通る直線で2等分します。', ['頂点Oを通る直線で、面積を半分に'], [pg([O14, A14, B14], C.purple, FILL.purple), seg(A14, B14, C.blue, false, 2.5), seg(O14, A14, C.purple, false, 2.5), seg(O14, B14, C.purple, false, 2.5), dot(A14, 3.5, C.red), dot(B14, 3.5, C.red)]),
  S('手がかり。頂点から向かいの辺の中点に引いた線（中線）は、三角形を同じ面積に分けます。ABの中点Mを求めます。', ['M ＝ ABの中点', 'M((−2＋3)÷2, (4＋9)÷2)＝(1/2, 13/2)'], [dot(M14, 4.5, C.green), tx(172, 52, 'M', 14, C.green, true, 'start')]),
  S('理由。△OAM と △OMB は、AM＝MB（底辺が等しい）で、Oから直線ABまでの高さも同じです。だから面積が等しくなります。', ['底辺 AM＝MB　高さが同じ　→　面積が等しい'], [pg([O14, A14, M14], C.blue, FILL.blue), pg([O14, M14, B14], C.green, FILL.green), seg(O14, A14, C.purple, false, 2.5), seg(O14, B14, C.purple, false, 2.5), seg(A14, B14, C.blue, false, 2.5), dot(A14, 3.5, C.red), dot(B14, 3.5, C.red), dot(M14, 4.5, C.green)]),
  S('直線OMの傾きは (13/2)÷(1/2)＝13。原点を通るので、式は y＝13x です。', ['傾き (13/2)÷(1/2)＝13', '原点を通るので y＝13x'], [seg(O14, g14(0.62, 8.06), C.red, false, 3)]),
  ANS('y＝13x'),
  S('確かめ。直線 y＝13x に x＝1/2 を入れると y＝13/2。ちょうど M を通っています。', ['x＝1/2 のとき y＝13/2（M を通る）', '=△OAM＝△OMB で面積が等しい ✓']),
], 'ABの中点Mを通る直線が面積を2等分する。M(1/2, 13/2) より y＝13x。');

// 16 共通の底辺ABと、x軸上の点P
const g16 = (x: number, y: number): [number, number] => [60 + 15 * x, 122 - 10 * y];
const par16 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 62; k++) { const x = -3.1 + k * 0.1; pts.push(g16(x, x * x)); } return polyLine(pts, C.gray, 2); };
const A16 = g16(2, 4), B16 = g16(-3, 9), D16 = g16(6, 0), P16 = g16(12, 0), O16 = g16(0, 0);
const base16 = (): E[] => [ar(20, 122, 300, 122, C.gray), ar(60, 130, 60, 8, C.gray), tx(308, 126, 'x', 12, C.gray), tx(70, 14, 'y', 12, C.gray), tx(50, 136, 'O', 12, C.gray), ...par16(), seg(g16(-3.2, 9.2), g16(7, -1), C.blue, false, 2.5), dot(A16, 3.5, C.red), dot(B16, 3.5, C.red)];
const s16: Figure = show([
  SF('放物線 y＝ax² と直線 y＝−x＋6 が、x座標が正の点Aで交わり、Aのx座標は2です。もう1つの交点をB、直線ABとx軸の交点をDとします。', ['x軸上の点P（O以外）で △PAB＝△OAB になるのは？'], base16()),
  S('Aのx座標は2。直線の式から y＝−2＋6＝4。A(2, 4)。放物線は 4＝a×2² から a＝1。', ['A(2, 4)　a＝1（y＝x²）'], [tx(98, 70, 'A(2, 4)', 12, C.red, true, 'start')]),
  S('もう1つの交点Bは x²＝−x＋6 を解いて、x²＋x−6＝0、(x−2)(x＋3)＝0 より x＝−3。B(−3, 9)。', ['B(−3, 9)'], [tx(8, 22, 'B(−3, 9)', 11, C.red, true, 'start')]),
  S('直線ABは y＝0 のとき x＝6。x軸との交点は D(6, 0) です。', ['x軸との交点 D(6, 0)'], [dot(D16, 4.5, C.green), tx(150, 106, 'D(6, 0)', 12, C.green)]),
  S('手がかり。△OABと△PABは辺ABを共通にもちます。面積が等しいなら、OとPから直線ABまでの高さが等しい、ということです。', ['辺ABが共通　→　高さが等しければ面積も等しい'], [pg([O16, A16, B16], C.blue, FILL.blue), seg(O16, A16, C.blue, false, 2), seg(O16, B16, C.blue, false, 2), seg(g16(-3.2, 9.2), g16(7, -1), C.blue, false, 2.5), dot(A16, 3.5, C.red), dot(B16, 3.5, C.red)]),
  S('理由。OもPもx軸上にあり、直線ABはx軸と D で交わります。ABまでの高さは、Dからの距離に比例します。だから DP＝DO なら高さが等しくなります。', ['DO＝6　→　DP＝6 となる点が P'], [seg(O16, D16, C.blue, false, 3.5), seg(D16, P16, C.red, false, 3.5), tx(105, 112, '6', 13, C.blue), tx(195, 112, '6', 13, C.red)]),
  S('Dの右側に6進んだ点が P。x座標は 6＋6＝12。P(12, 0) です。（原点Oもその条件に合いますが、O以外なので P(12, 0)。）', ['P(12, 0)'], [dot(P16, 4.5, C.red), tx(240, 138, 'P(12, 0)', 12, C.red)]),
  ANS('(12, 0)'),
  S('確かめ。△OAB＝△OBD−△OAD＝1/2×6×9−1/2×6×4＝27−12＝15。△PABも同じ形で 27−12＝15。', ['△OAB＝27−12＝15', '△PAB＝27−12＝15 ✓']),
], '共通の底辺AB。D(6, 0) から左右に6ずつ。O と P(12, 0)。');

// 17 ダイヤグラム（追いつく）
const g17 = (t: number, d: number): [number, number] => [44 + 11 * t, 128 - d * 0.07];
const ax17 = (): E[] => [ar(44, 128, 290, 128, C.gray), ar(44, 134, 44, 6, C.gray), tx(300, 132, '分', 12, C.gray), tx(52, 18, 'm', 12, C.gray, true, 'start'), tx(34, 132, '0', 11, C.gray, true, 'end')];
const X17 = g17(15, 1200);
const s17: Figure = show([
  SF('兄は午前9時に家を出て分速80m。弟は9時9分に出発して分速200mで追いかけます。弟が兄に追いつく地点を、グラフで考えます。', ['横軸：兄が出発してからの時間　縦軸：家からの道のり'], [...ax17(), tx(143, 142, '9', 11, C.gray), tx(209, 142, '15', 11, C.gray)]),
  S('兄のグラフ。出発して t 分後の道のりは 80×t m。原点から右上にのびる直線です。', ['兄　道のり＝80×t'], [seg(g17(0, 0), g17(18, 1440), C.blue, false, 3), tx(248, 36, '兄', 14, C.blue, true, 'start')]),
  S('弟のグラフ。弟は9分おくれて出発するので、t＝9 から始まります。走る時間は (t−9) 分で、道のりは 200×(t−9) m。', ['弟　道のり＝200×(t−9)'], [seg(g17(9, 0), g17(17, 1600), C.red, false, 3), tx(240, 18, '弟', 14, C.red, true, 'start')]),
  S('追いつくとは、2人が同じ地点にいること。2本の直線が交わる点が、追いつく点です。', ['2本の直線の交点　＝　追いつく点'], [dot(X17, 5, C.green), seg(X17, [X17[0], 128], C.green, true, 1.5), seg(X17, [44, X17[1]], C.green, true, 1.5), tx(40, 48, '1200', 11, C.green, true, 'end')]),
  S('交点では道のりが等しいので、80t＝200(t−9) という式ができます。', ['80t＝200(t−9)', '80t＝200t−1800　120t＝1800　t＝15']),
  S('追いつくのは兄が出発して15分後。そのときの道のりは、兄の式に t＝15 を入れて求めます。', ['80×15＝1200（m）']),
  ANS('1200m'),
  S('確かめ。弟は 15−9＝6分走ったので 200×6＝1200m。兄の道のりと同じです。', ['弟：200×(15−9)＝1200m', '=兄も弟も1200m ✓']),
], '80t＝200(t−9)。t＝15 分後、家から1200m。');

// 18 円周角と内接四角形
const O18: [number, number] = [160, 76];
const pA18 = at(160, 76, 60, 180), pB18 = at(160, 76, 60, 0), pC18 = at(160, 76, 60, 64), pD18 = at(160, 76, 60, 125);
const circ18 = (): E[] => [P2(circPts(160, 76, 60, 72), C.gray)];
const lab18 = (): E[] => [tx(92, 80, 'A', 14, C.ink, true, 'end'), tx(228, 80, 'B', 14, C.ink, true, 'start'), tx(192, 18, 'C', 14, C.ink, true, 'start'), tx(118, 24, 'D', 14, C.ink, true, 'end')];
const s18: Figure = show([
  SF('円の周上に4点A、B、C、Dがこの順にあります。ABは円の直径、∠CAB＝32°。∠ADCの大きさを求めます。', ['ABは直径　∠CAB＝32°　∠ADC＝？'], [...circ18(), seg(pA18, pB18, C.blue, false, 3), dot(pA18, 3.5), dot(pB18, 3.5), tx(92, 80, 'A', 14, C.ink, true, 'end'), tx(228, 80, 'B', 14, C.ink, true, 'start')]),
  S('点C、Dをとって、四角形ABCDをかきます。AからCを見る角が∠CAB＝32°です。', ['∠CAB＝32°'], [...lab18().slice(2), dot(pC18, 3.5), dot(pD18, 3.5), P2([pA18, pB18, pC18, pD18], C.ink), seg(pA18, pC18, C.red, false, 2.5), tx(132, 70, '32°', 12, C.red, true, 'start')]),
  S('手がかり。直径に対する円周角は 90°。だから ∠ACB＝90°です。', ['直径ABに対する円周角　∠ACB＝90°'], [seg(pB18, pC18, C.purple, false, 2.5), tx(180, 42, '90°', 12, C.purple)]),
  S('△ABCの内角の和は180°。∠ABC＝180°−90°−32°＝58°です。', ['∠ABC＝180°−90°−32°＝58°'], [tx(214, 66, '58°', 12, C.green, true, 'end')]),
  S('理由。円に内接する四角形では、向かいあう角の和が180°になります。∠ABCと∠ADCは向かいあう角です。', ['内接四角形：向かいあう角の和＝180°', '∠ABC＋∠ADC＝180°']),
  S('∠ADC＝180°−58°＝122°。', ['∠ADC＝180°−58°＝122°'], [tx(128, 40, '122°', 12, C.red, true, 'start')]),
  ANS('122°'),
  S('確かめ。弧BCに対する円周角が32°なので、弧BCの中心角は64°。弧ABC＝180°＋64°＝244°。その円周角は 244÷2＝122°。', ['弧ABCの中心角 180°＋64°＝244°', '=円周角 244÷2＝122° ✓']),
], '直径→90°。∠ABC＝58°。向かいあう角の和180°より ∠ADC＝122°。');

// 19 台形と平行線
const A19: [number, number] = [118, 35], D19: [number, number] = [202, 35], B19: [number, number] = [55, 125], C19: [number, number] = [265, 125];
const E19: [number, number] = [160, 60.7], P19: [number, number] = [100, 60.7], Q19: [number, number] = [220, 60.7];
const trap19 = (): E[] => [P2([A19, D19, C19, B19], C.ink, FILL.warm), tx(110, 30, 'A', 14, C.ink, true, 'end'), tx(210, 30, 'D', 14, C.ink, true, 'start'), tx(46, 130, 'B', 14, C.ink, true, 'end'), tx(274, 130, 'C', 14, C.ink, true, 'start'), tx(160, 28, '6', 13, C.red), tx(160, 142, '15', 13, C.red)];
const s19: Figure = show([
  SF('AD∥BC の台形ABCDで、AD＝6cm、BC＝15cm。対角線の交点Eを通って BC に平行な線をひき、AB、CDとの交点をP、Qとします。PQの長さを求めます。', ['AD＝6　BC＝15　PQ＝？'], trap19()),
  S('対角線ACとBDをひいて、交点をEとします。', ['対角線の交点 E'], [seg(A19, C19, C.blue, false, 2.5), seg(B19, D19, C.blue, false, 2.5), dot(E19, 3.5, C.green)]),
  S('AD∥BC なので、錯角が等しく、△AED∽△CEB です。相似比は AD:CB＝6:15＝2:5。', ['△AED ∽ △CEB（相似比 2:5）'], [P2([A19, E19, D19], C.blue, FILL.blue), P2([C19, E19, B19], C.red, FILL.red), seg(A19, C19, C.blue, false, 2.5), seg(B19, D19, C.blue, false, 2.5), tx(168, 54, 'E', 13, C.green, true, 'start')]),
  S('相似比から AE:EC＝2:5。だから AE:AC＝2:7 です。', ['AE:EC＝2:5　→　AE:AC＝2:7'], [seg(A19, E19, C.green, false, 4)]),
  S('EをとおるPQをひきます。△ABC で PE∥BC なので、PE:BC＝AE:AC＝2:7。PE＝15×2/7＝30/7。', ['△ABC で PE:BC＝2:7', 'PE＝15×2/7＝30/7'], [seg(P19, Q19, C.purple, false, 3), seg(P19, E19, C.green, false, 4), tx(92, 64, 'P', 13, C.purple, true, 'end'), tx(228, 64, 'Q', 13, C.purple, true, 'start')]),
  S('△BCD で EQ∥BC。DE:DB＝AE:AC＝2:7（DE:EB＝2:5 より）なので、EQ＝15×2/7＝30/7。', ['△BCD で EQ:BC＝DE:DB＝2:7', 'EQ＝15×2/7＝30/7'], [seg(E19, Q19, C.red, false, 4)]),
  S('PQ＝PE＋EQ＝30/7＋30/7＝60/7。', ['PQ＝30/7＋30/7＝60/7']),
  ANS('60/7cm'),
  S('確かめ。上底と下底を使った式 2×6×15÷(6＋15)＝180÷21＝60/7。同じ値です（約8.57cm、6と15の間）。', ['2×6×15÷(6＋15)＝180÷21＝60/7', '=60/7 で一致 ✓']),
], '△AED∽△CEB（2:5）。PE＝EQ＝15×2/7。PQ＝60/7cm。');

// 20 正四角すい
const pA20: [number, number] = [90, 118], pB20: [number, number] = [200, 118], pC20: [number, number] = [240, 92], pD20: [number, number] = [130, 92];
const pH20: [number, number] = [165, 105], pO20: [number, number] = [165, 24];
const pyr20 = (): E[] => [P2([pA20, pB20, pC20, pD20], C.ink, FILL.warm), seg(pO20, pA20, C.ink), seg(pO20, pB20, C.ink), seg(pO20, pC20, C.ink), seg(pO20, pD20, C.gray, true, 1.5), tx(172, 22, 'O', 14, C.ink, true, 'start'), tx(84, 124, 'A', 14, C.ink, true, 'end'), tx(206, 126, 'B', 14, C.ink, true, 'start'), tx(246, 94, 'C', 14, C.ink, true, 'start'), tx(138, 90, 'D', 14, C.ink, true, 'start'), tx(145, 136, '8', 13, C.red), tx(112, 66, '9', 13, C.red, true, 'end')];
const s20: Figure = show([
  SF('底面が1辺8cmの正方形で、側面の辺がすべて9cmの正四角すいです。体積は 1/3×底面積×高さ。高さがまだわかりません。', ['底面 8×8　辺 9cm　高さは？'], pyr20()),
  S('頂点Oから底面にまっすぐおろした垂線をOHとします。Hは正方形の中心（対角線の交点）です。', ['垂線OH ＝ 高さ（Hは底面の中心）'], [seg(pO20, pH20, C.green, true, 2.5), dot(pH20, 3.5, C.green), tx(172, 108, 'H', 13, C.green, true, 'start')]),
  S('対角線ACは、1辺8cmの正方形の対角線なので 8√2cm。中心Hまでは半分で AH＝4√2cm です。', ['AC＝8√2　AH＝4√2'], [seg(pA20, pC20, C.blue, true, 2)]),
  S('直角三角形OHAに三平方の定理を使います。OH²＋AH²＝OA² です。', ['OH²＝9²−(4√2)²', '＝81−32'], [seg(pO20, pH20, C.green, false, 3), seg(pO20, pA20, C.purple, false, 3), seg(pA20, pH20, C.blue, false, 3)]),
  S('OH²＝49 なので、高さ OH＝7cm。', ['OH²＝49　OH＝7cm']),
  S('底面積は 8×8＝64cm²。体積は 1/3×底面積×高さ です。', ['体積＝1/3×64×7']),
  ANS('448/3cm³'),
  S('確かめ。同じ底面で高さ7の角柱の体積は 64×7＝448。角すいはその1/3なので 448/3。', ['角柱 64×7＝448 の 1/3', '=448/3（約149.3cm³）✓']),
], '高さは三平方で OH²＝81−32＝49。体積＝1/3×64×7＝448/3cm³。');

// 21 円の接線
const O21: [number, number] = [80, 75], P21: [number, number] = [216, 75], A21: [number, number] = [110.1, 18.5], B21: [number, number] = [110.1, 131.5];
const circ21 = (): E[] => [P2(circPts(80, 75, 64, 72), C.gray), tx(70, 86, 'O', 14, C.ink, true, 'end'), tx(224, 79, 'P', 14, C.ink, true, 'start'), tx(104, 20, 'A', 14, C.ink, true, 'end'), tx(104, 140, 'B', 14, C.ink, true, 'end')];
const s21: Figure = show([
  SF('円Oの外側の点Pから、円に2本の接線PA、PBをひきました。PO＝17cm、PA＝15cm。四角形PAOBの面積を求めます。', ['PO＝17　PA＝15　四角形PAOB の面積は？'], [...circ21(), seg(P21, A21, C.blue, false, 2.5), seg(P21, B21, C.blue, false, 2.5), dot(A21, 3.5), dot(B21, 3.5), dot(O21, 3, C.gray)]),
  S('半径OA、OBと、OPをひきます。', ['半径 OA、OB と OP'], [seg(O21, A21, C.red, false, 2.5), seg(O21, B21, C.red, false, 2.5), seg(O21, P21, C.gray, true, 1.5)]),
  S('手がかり。円の接線は、接点を通る半径に垂直です。だから ∠OAP＝90°で、△OAP は直角三角形。', ['接線 ⊥ 半径　△OAP は直角三角形'], [P2([O21, A21, P21], C.purple, FILL.purple), seg(O21, A21, C.red, false, 2.5), seg(P21, A21, C.blue, false, 2.5), seg(O21, P21, C.gray, true, 1.5), tx(114, 44, '90°', 11, C.purple, true, 'start'), P2(circPts(80, 75, 64, 72), C.gray)]),
  S('三平方の定理。斜辺OP＝17、PA＝15 なので、OA²＝17²−15²＝289−225＝64。', ['OA²＝17²−15²＝64']),
  S('OA＝8。これが円の半径です。', ['OA＝8cm（半径）']),
  S('△OAP の面積は 1/2×15×8＝60cm²。', ['△OAP＝1/2×15×8＝60'], [P2([O21, A21, P21], C.purple, FILL.purple), P2(circPts(80, 75, 64, 72), C.gray), seg(O21, A21, C.red, false, 2.5), seg(P21, A21, C.blue, false, 2.5)]),
  S('理由。四角形PAOBは、直線OPについて左右対称です。△OBP は △OAP と合同なので、面積も60。四角形は、その2つ分です。', ['四角形PAOB＝△OAP＋△OBP＝60×2'], [P2([O21, B21, P21], C.green, FILL.green), P2(circPts(80, 75, 64, 72), C.gray), seg(O21, B21, C.red, false, 2.5), seg(P21, B21, C.blue, false, 2.5)]),
  ANS('120cm²'),
  S('確かめ。四角形の対角線は OP＝17 と AB。AB＝2×(15×8÷17)＝240/17。面積＝1/2×17×240/17＝120。', ['1/2×OP×AB＝1/2×17×240/17', '=120 で一致 ✓']),
], '接線⊥半径。OA＝8。△OAP＝60 の2つ分で120cm²。');

// 22 面積比
const A22: [number, number] = [160, 20], B22: [number, number] = [60, 125], C22: [number, number] = [270, 125];
const D22: [number, number] = [126.7, 55], E22: [number, number] = [242.5, 98.75];
const tri22 = (): E[] => [P2([A22, B22, C22], C.ink, FILL.warm), seg(D22, E22, C.red, false, 2.5), dot(D22, 3.5, C.red), dot(E22, 3.5, C.red), tx(160, 16, 'A', 14), tx(52, 130, 'B', 14, C.ink, true, 'end'), tx(278, 130, 'C', 14, C.ink, true, 'start'), tx(118, 56, 'D', 14, C.ink, true, 'end'), tx(250, 98, 'E', 14, C.ink, true, 'start')];
const s22: Figure = show([
  SF('△ABCの辺AB上に点D、辺AC上に点Eがあり、AD:DB＝1:2、AE:EC＝3:1。△ABC＝48cm²のとき、四角形DBCEの面積を求めます。', ['AD:DB＝1:2　AE:EC＝3:1　△ABC＝48'], tri22()),
  S('四角形DBCEは、△ABC から △ADE を引いた部分です。まず△ADEの面積を求めます。', ['四角形DBCE＝△ABC−△ADE'], [P2([A22, D22, E22], C.purple, FILL.purple), seg(D22, E22, C.red, false, 2.5), seg(A22, D22, C.ink), seg(A22, E22, C.ink)]),
  S('手がかり。BとEを結びます。△ABE をつくると、△ADE と △ABC の両方につながります。', ['BとEを結ぶ　△ABE'], [seg(B22, E22, C.blue, true, 2.5)]),
  S('理由。△ABEと△ABCは、頂点Bから直線ACまでの高さが同じ。面積比は底辺の比で AE:AC＝3:4。', ['△ABE:△ABC＝AE:AC＝3:4', '△ABE＝48×3/4＝36'], [P2([A22, B22, E22], C.blue, FILL.blue), seg(A22, B22, C.ink), seg(B22, E22, C.blue, false, 2.5), seg(A22, E22, C.ink)]),
  S('次に、△ADEと△ABEは、頂点Eから直線ABまでの高さが同じ。面積比は AD:AB＝1:3。', ['△ADE:△ABE＝AD:AB＝1:3', '△ADE＝36×1/3＝12'], [P2([A22, D22, E22], C.purple, FILL.purple), seg(A22, D22, C.ink), seg(D22, E22, C.red, false, 2.5), seg(A22, E22, C.ink)]),
  S('四角形DBCE＝△ABC−△ADE＝48−12＝36。', ['四角形DBCE＝48−12＝36'], [P2([D22, B22, C22, E22], C.green, FILL.green), seg(B22, C22, C.ink), seg(D22, B22, C.ink), seg(E22, C22, C.ink), seg(D22, E22, C.red, false, 2.5)]),
  ANS('36cm²'),
  S('確かめ。2辺の比の積で一度に求めると、△ADE＝48×1/3×3/4＝12。48−12＝36。', ['△ADE＝48×(1/3)×(3/4)＝12', '=48−12＝36 で一致 ✓']),
], '△ABE＝48×3/4＝36、△ADE＝36×1/3＝12。四角形DBCE＝36cm²。');

// 23 斜辺を軸に回転
const P23: [number, number] = [95, 76], Q23: [number, number] = [225, 76], H23: [number, number] = [141.8, 76], R23: [number, number] = [141.8, 13.6], R2_23: [number, number] = [141.8, 138.4];
const s23: Figure = show([
  SF('直角をはさむ辺が6cm、8cm、斜辺が10cmの直角三角形を、斜辺を軸に1回転させます。できる立体の体積を求めます。', ['辺6・8・10の直角三角形を、斜辺を軸に回転'], [P2([P23, Q23, R23], C.ink, FILL.warm), tx(88, 80, 'P', 14, C.ink, true, 'end'), tx(232, 80, 'Q', 14, C.ink, true, 'start'), tx(148, 20, 'R', 14, C.ink, true, 'start'), tx(106, 40, '6', 13, C.red, true, 'end'), tx(190, 40, '8', 13, C.red, true, 'start'), tx(196, 94, '10', 13, C.red)]),
  S('手がかり。Rから斜辺PQに垂線RHをおろします。回転させると、RHが底面の円の半径になります。', ['RH ＝ 底面の円の半径'], [seg(R23, H23, C.green, true, 2.5), dot(H23, 3, C.green), tx(146, 90, 'H', 13, C.green, true, 'start')]),
  S('RHの長さは、三角形の面積を2通りに表して求めます。面積は 1/2×6×8＝24。また 1/2×10×RH＝24。', ['1/2×10×RH＝24', 'RH＝4.8cm'], [tx(150, 52, '4.8', 12, C.green, true, 'start')]),
  S('斜辺を軸に回転させると、三角形の下側にも同じ形ができて、円すいが2つ底面でくっついた立体になります。', ['円すいが2つ　底面の半径は4.8cm'], [P2([P23, R2_23, Q23], C.gray, FILL.gray), seg(P23, R2_23, C.gray, true, 1.5), seg(R2_23, Q23, C.gray, true, 1.5), seg(R23, R2_23, C.green, true, 2)]),
  S('底面積は π×4.8²＝23.04π cm²。', ['底面積　π×4.8²＝23.04π']),
  S('理由。2つの円すいは底面が同じで、高さは PH と HQ。足すと斜辺と同じ10cm。だから体積は 1/3×底面積×(PH＋HQ)＝1/3×底面積×10 とまとめられます。', ['体積＝1/3×23.04π×10']),
  ANS('76.8πcm³'),
  S('確かめ。4.8＝24/5 なので、1/3×π×(24/5)²×10＝1/3×π×576/25×10＝1920π/25＝76.8π。', ['1/3×π×576/25×10＝1920π/25', '=76.8π で一致 ✓']),
], '半径＝RH＝4.8。高さの合計＝10。体積＝1/3×23.04π×10＝76.8π。');

// 25 正五角形の対角線
const pent = (cx: number, cy: number, r: number): [number, number][] => [90, 162, 234, 306, 18].map((d) => at(cx, cy, r, d));
const V25 = pent(160, 80, 58);
const [pA25, pB25, pC25, pD25, pE25] = V25;
const cross = (a: [number, number], b: [number, number], c: [number, number], d: [number, number]): [number, number] => {
  const x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], x3 = c[0], y3 = c[1], x4 = d[0], y4 = d[1];
  const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
  return [x1 + t * (x2 - x1), y1 + t * (y2 - y1)];
};
const pP25 = cross(pA25, pC25, pB25, pD25);
const base25 = (): E[] => [P2(V25, C.ink, FILL.warm), tx(160, 16, 'A', 14), tx(92, 60, 'B', 14, C.ink, true, 'end'), tx(116, 138, 'C', 14, C.ink, true, 'end'), tx(204, 138, 'D', 14, C.ink, true, 'start'), tx(228, 60, 'E', 14, C.ink, true, 'start')];
const s25: Figure = show([
  SF('正五角形ABCDEの対角線ACとBDの交点をPとします。∠APBの大きさを求めます。', ['正五角形　対角線ACとBDの交点P　∠APB＝？'], base25()),
  S('正五角形の内角の和は 180°×(5−2)＝540°。だから1つの内角は 540°÷5＝108°です。', ['1つの内角＝540°÷5＝108°'], []),
  S('対角線ACをひきます。AB＝BC なので △ABC は二等辺三角形で、底角は (180°−108°)÷2＝36°。', ['△ABC は二等辺三角形', '∠BAC＝(180°−108°)÷2＝36°'], [seg(pA25, pC25, C.blue, false, 2.5), tx(146, 50, '36°', 11, C.blue, true, 'end')]),
  S('対角線BDをひきます。同じ理由で △BCD も二等辺三角形なので、∠CBD＝36°。', ['△BCD も二等辺三角形　∠CBD＝36°'], [seg(pB25, pD25, C.red, false, 2.5), tx(126, 100, '36°', 11, C.red, true, 'start')]),
  S('理由。∠ABC＝108° のうち、∠CBD が 36° なので、残りの ∠ABD＝108°−36°＝72°。', ['∠ABD＝108°−36°＝72°'], [tx(122, 64, '72°', 11, C.purple, true, 'start')]),
  S('△ABP の内角の和は180°。∠PAB＝36°、∠PBA＝72° なので、∠APB＝180°−36°−72°＝72°。', ['∠APB＝180°−36°−72°'], [P2([pA25, pB25, pP25], C.purple, FILL.purple), seg(pA25, pC25, C.blue, false, 2.5), seg(pB25, pD25, C.red, false, 2.5), seg(pA25, pB25, C.ink)]),
  ANS('72°'),
  S('確かめ。円周角で確かめます。弧BC＝72° なので ∠BAC＝36°。弧AED＝144° なので ∠ABD＝72°。', ['∠BAC＝72°÷2＝36°　∠ABD＝144°÷2＝72°', '=△ABPの角 36°・72°・72° で一致 ✓']),
], '内角108°。∠BAC＝∠CBD＝36°、∠ABD＝72°。∠APB＝72°。');

// 26 折り返し
const A26: [number, number] = [65, 130], B26: [number, number] = [248, 130], C26: [number, number] = [248, 20], D26: [number, number] = [65, 20], E26: [number, number] = [211.7, 130], F26: [number, number] = [248, 81.1];
const rect26 = (): E[] => [P2([A26, B26, C26, D26], C.ink, FILL.warm), tx(60, 138, 'A', 14, C.ink, true, 'end'), tx(256, 138, 'B', 14, C.ink, true, 'start'), tx(256, 16, 'C', 14, C.ink, true, 'start'), tx(58, 16, 'D', 14, C.ink, true, 'end'), tx(130, 143, '10', 13, C.red), tx(56, 80, '6', 13, C.red, true, 'end')];
const s26: Figure = show([
  SF('AB＝10cm、BC＝6cmの長方形ABCDがあります。頂点Cが辺AB上の点Eに重なるように、Dを通る折り目DFで折ります。CFの長さを求めます。', ['AB＝10　BC＝6　CF＝？'], rect26()),
  S('Cが辺AB上のEに重なるように折ります。折り目はDFです。', ['C が E に重なるように、DF で折る'], [seg(D26, F26, C.red, true, 2.5), dot(E26, 3.5, C.green), dot(F26, 3.5, C.red), tx(212, 141, 'E', 14, C.green), tx(256, 90, 'F', 14, C.red, true, 'start'), seg(D26, E26, C.green, false, 2.5), seg(F26, E26, C.green, false, 2.5)]),
  S('手がかり。折り返すと、重なる図形は合同です。だから DE＝DC＝10、FE＝FC です。', ['折り返し → DE＝DC＝10　FE＝FC'], [seg(D26, C26, C.green, true, 3)]),
  S('△ADEは∠A＝90°の直角三角形。AD＝6、DE＝10 なので、AE²＝10²−6²＝64、AE＝8。', ['AE²＝10²−6²＝64　AE＝8'], [P2([A26, E26, D26], C.purple, FILL.purple), seg(A26, E26, C.purple, false, 2.5), seg(D26, E26, C.green, false, 2.5), seg(A26, D26, C.ink)]),
  S('EB＝AB−AE＝10−8＝2。', ['EB＝10−8＝2'], [seg(E26, B26, C.blue, false, 4)]),
  S('CF＝x とおくと、FE＝x、BF＝6−x。直角三角形EBFで三平方の定理を使います。', ['CF＝FE＝x　BF＝6−x', 'EB²＋BF²＝FE²'], [P2([E26, B26, F26], C.blue, FILL.blue), seg(E26, B26, C.blue, false, 2.5), seg(B26, F26, C.ink), seg(F26, E26, C.green, false, 2.5)]),
  S('2²＋(6−x)²＝x²。4＋36−12x＋x²＝x² より 40−12x＝0、x＝40/12＝10/3。', ['2²＋(6−x)²＝x²', 'x＝10/3']),
  ANS('10/3cm'),
  S('確かめ。BF＝6−10/3＝8/3。EB²＋BF²＝4＋64/9＝100/9。FE²＝(10/3)²＝100/9。', ['4＋64/9＝100/9　(10/3)²＝100/9', '=一致 ✓']),
], '折り返し→DE＝10。AE＝8、EB＝2。CF＝x で 4＋(6−x)²＝x²。x＝10/3。');

// 29 食塩水（てんびん）
const x29 = (c: number): number => 40 + (c - 6) * (240 / 9);
const nl29 = (): E[] => [ln(30, 70, 292, 70, C.gray, false, 2), ln(x29(6), 63, x29(6), 77, C.ink, false, 2), ln(x29(10), 63, x29(10), 77, C.ink, false, 2), ln(x29(15), 63, x29(15), 77, C.ink, false, 2), tx(x29(6), 56, '6%', 14, C.blue), tx(x29(10), 56, '10%', 14, C.purple), tx(x29(15), 56, '15%', 14, C.red)];
const s29: Figure = show([
  SF('6%の食塩水と15%の食塩水を混ぜて、10%の食塩水を450gつくります。15%の食塩水は何g必要でしょうか。', ['6%と15%を混ぜて10%にする　15%は何g？'], nl29()),
  S('10%と、それぞれの濃さとの差を調べます。6%とは4、15%とは5ちがいます。', ['10−6＝4　15−10＝5'], [ar(x29(10), 90, x29(6) + 2, 90, C.blue), ar(x29(10), 90, x29(15) - 2, 90, C.red), tx(93, 108, '差 4', 13, C.blue), tx(213, 108, '差 5', 13, C.red)]),
  S('てんびんの形で考えます。10%が支点。6%の食塩水（x g）が左、15%の食塩水（y g）が右にのっています。', ['支点が10%　左に x g　右に y g'], [pg([[x29(10) - 9, 128], [x29(10) + 9, 128], [x29(10), 114]], C.ink, FILL.gray), bx(14, 8, 70, 26, '6% x g', C.blue, FILL.blue, 12), bx(236, 8, 70, 26, '15% y g', C.red, FILL.red, 12)]),
  S('理由。てんびんは、支点からの距離が長いほうが軽く、短いほうが重くてつりあいます。だから重さの比は、距離の比の逆。x:y＝5:4（距離は 4:5）。', ['重さの比は、差の逆比　x:y＝5:4']),
  S('15%の食塩水は、全体450gの 4/9 です。450×4/9＝200。', ['450×4/9＝200（g）']),
  ANS('200g'),
  S('確かめ。6%は450−200＝250g。食塩は 250×0.06＋200×0.15＝15＋30＝45g。450gの10%は45gで、一致します。', ['250×0.06＋200×0.15＝15＋30＝45', '=450×0.1＝45 で一致 ✓']),
], '差4と5の逆比で 5:4。15%は 450×4/9＝200g。');

// 30 割合：原価・定価・売り値
const s30: Figure = show([
  SF('原価の2割5分の利益を見込んで定価をつけ、定価から150円引きで売ったら、利益は原価の1割でした。原価を求めます。', ['原価の2割5分増しが定価　150円引きで利益1割'], [bx(40, 18, 160, 26, '原価 ＝ 100', C.blue, FILL.blue, 13), tx(160, 62, '原価を 100 とおく', 13, C.gray)]),
  S('定価は原価の2割5分増しなので、100×1.25＝125。', ['定価 100×1.25＝125'], [bx(40, 70, 200, 26, '定価 ＝ 125', C.purple, FILL.purple, 13)]),
  S('売り値は、利益が原価の1割なので 100×1.1＝110。', ['売り値 100×1.1＝110'], [bx(40, 104, 176, 26, '売り値 ＝ 110', C.green, FILL.green, 13)]),
  S('定価と売り値の差は 125−110＝15。これが、定価から引いた150円です。', ['差 125−110＝15 が 150円'], [bx(216, 104, 24, 26, '', C.red, FILL.red), tx(250, 122, '差 15', 12, C.red, true, 'start')]),
  S('理由。「100」は原価を表す比べやすい数で、実際の金額はまだわかりません。15 が150円にあたるので、1あたりは 150÷15＝10円。', ['15 ＝ 150円　→　1 ＝ 10円']),
  S('原価は 100 にあたるので、10×100＝1000円。', ['原価＝10円×100＝1000円']),
  ANS('1000円'),
  S('確かめ。原価1000円なら、定価1250円、売り値は1250−150＝1100円。利益は100円で、原価の1割です。', ['定価1250　売り値1100　利益100', '=100÷1000＝1割 ✓']),
], '原価を100とすると定価125、売り値110。差15＝150円。原価1000円。');

// 34 放物線上の点と直線上の点（PQ＝6）
const g34 = (x: number, y: number): [number, number] => [130 + 16 * x, 130 - 8 * y];
const par34 = (): E[] => { const pts: [number, number][] = []; for (let k = 0; k <= 94; k++) { const x = -3.3 + k * 0.1; pts.push(g34(x, x * x / 3)); } return polyLine(pts, C.gray, 2); };
const A34 = g34(-3, 3), B34 = g34(6, 12), O34 = g34(0, 0), P34 = g34(3, 3), Q34 = g34(3, 9), Q34b = g34(0, 6);
const base34 = (): E[] => [ar(40, 130, 290, 130, C.gray), ar(130, 138, 130, 8, C.gray), tx(298, 134, 'x', 12, C.gray), tx(140, 14, 'y', 12, C.gray), tx(120, 142, 'O', 12, C.gray, true, 'end'), ...par34(), seg(g34(-3.5, 2.5), g34(6.3, 12.3), C.blue, false, 2.5), dot(A34, 3.5, C.red), dot(B34, 3.5, C.red), tx(76, 100, 'A(−3, 3)', 12, C.red, true, 'end'), tx(232, 30, 'B(6, 12)', 12, C.red, true, 'start')];
const s34: Figure = show([
  SF('放物線 y＝(1/3)x² 上に A(−3, 3)、B(6, 12)。直線ABは y＝x＋6。放物線上の点Pの x座標を p とし、Pを通る y軸に平行な線と直線ABの交点をQとします。PQ＝6 になる p を求めます。', ['y＝(1/3)x²　直線AB：y＝x＋6'], base34()),
  S('x座標が p の点Pは P(p, p²/3)。同じ x座標の直線上の点Qは Q(p, p＋6)。', ['P(p, p²/3)　Q(p, p＋6)'], [dot(P34, 4, C.green), dot(Q34, 4, C.purple), seg(P34, Q34, C.green, false, 3.5), tx(186, 112, 'P', 14, C.green, true, 'start'), tx(186, 56, 'Q', 14, C.purple, true, 'start')]),
  S('PQは y軸に平行なので、長さは y座標の差。直線は放物線の上にあるので、PQ＝(p＋6)−p²/3。', ['PQ＝(p＋6)−p²/3']),
  S('PQ＝6 とおくと、p＋6−p²/3＝6。6が消えて p−p²/3＝0 になります。', ['p＋6−p²/3＝6', 'p−p²/3＝0']),
  S('両辺を3倍して 3p−p²＝0。p でくくると p(3−p)＝0。', ['3p−p²＝0', 'p(3−p)＝0']),
  S('p＝0 または p＝3。どちらも −3＜p＜6 に入ります。p＝0 のときはPが原点、Qは(0, 6)です。', ['p＝0 または p＝3'], [dot(O34, 4, C.green), dot(Q34b, 4, C.purple), seg(O34, Q34b, C.green, false, 3.5), tx(122, 122, 'P', 12, C.green, true, 'end'), tx(138, 82, 'Q', 12, C.purple, true, 'start')]),
  ANS('p＝0、3'),
  S('確かめ。p＝3：P(3, 3)、Q(3, 9)、9−3＝6。p＝0：P(0, 0)、Q(0, 6)、6−0＝6。', ['p＝3：9−3＝6　p＝0：6−0＝6', '=どちらもPQ＝6 ✓']),
], 'PQ＝(p＋6)−p²/3＝6 より p(3−p)＝0。p＝0、3。');

// 35 動点と面積
const A35: [number, number] = [70, 118], B35: [number, number] = [230, 118], C35: [number, number] = [230, 22], D35: [number, number] = [70, 22];
const g35 = (t: number, s: number): [number, number] => [40 + 18 * t, 128 - 3.4 * s];
const ax35 = (): E[] => [ar(40, 128, 285, 128, C.gray), ar(40, 134, 40, 8, C.gray), tx(300, 124, '秒', 12, C.gray), tx(48, 14, 'cm²', 11, C.gray, true, 'start'), tx(130, 141, '5', 11, C.gray), tx(184, 141, '8', 11, C.gray), tx(274, 141, '13', 11, C.gray), tx(34, 30, '30', 11, C.gray, true, 'end')];
const s35: Figure = show([
  SF('AB＝10cm、AD＝6cm の長方形ABCD。点PはAを出発して、毎秒2cmで A→B→C→D と進みます。△APDの面積が21cm²になるのは何秒後でしょうか。', ['Pは毎秒2cmで A→B→C→D　△APD＝21cm²'], [P2([A35, B35, C35, D35], C.ink, FILL.warm), seg(A35, B35, C.blue, false, 4), seg(B35, C35, C.green, false, 4), seg(C35, D35, C.purple, false, 4), tx(62, 122, 'A', 14, C.ink, true, 'end'), tx(238, 122, 'B', 14, C.ink, true, 'start'), tx(238, 18, 'C', 14, C.ink, true, 'start'), tx(62, 18, 'D', 14, C.ink, true, 'end'), tx(150, 136, '10', 12, C.red), tx(60, 74, '6', 12, C.red, true, 'end')]),
  SF('時間を横、△APDの面積を縦にしたグラフで考えます。Pがどの辺の上にいるかで式が変わるので、3つに分けます。', ['Pがいる辺ごとに分けて、面積を x（秒）の式に'], ax35()),
  S('AB上（0〜5秒）。AP＝2x、底辺AD＝6、高さAP。面積＝1/2×6×2x＝6x。右上がりの直線です。', ['AB上：6x　（x＝5 のとき30）'], [seg(g35(0, 0), g35(5, 30), C.blue, false, 3)]),
  S('BC上（5〜8秒）。底辺AD＝6、高さABは10のまま。面積は 1/2×6×10＝30 でずっと一定です。', ['BC上：30（一定）'], [seg(g35(5, 30), g35(8, 30), C.green, false, 3)]),
  S('CD上（8〜13秒）。DP＝10−2(x−8)＝26−2x。面積＝1/2×6×(26−2x)＝78−6x。右下がりの直線です。', ['CD上：78−6x　（x＝13 のとき0）'], [seg(g35(8, 30), g35(13, 0), C.purple, false, 3)]),
  S('面積が21の高さに線をひきます。グラフと交わる点が2つ、できます。', ['面積21の線とグラフの交点は2つ'], [seg(g35(0, 21), g35(14, 21), C.red, true, 1.5), dot(g35(3.5, 21), 4.5, C.red), dot(g35(9.5, 21), 4.5, C.red), tx(103, 48, '3.5', 12, C.red), tx(211, 48, '9.5', 12, C.red)]),
  S('AB上：6x＝21 より x＝3.5。CD上：78−6x＝21 より x＝9.5。どちらもその辺の時間の範囲に入っています。', ['6x＝21　x＝3.5', '78−6x＝21　x＝9.5']),
  ANS('3.5秒後と9.5秒後'),
  S('確かめ。x＝3.5：AP＝7、1/2×6×7＝21。x＝9.5：DP＝26−19＝7、1/2×6×7＝21。', ['3.5秒後：AP＝7cm　9.5秒後：DP＝7cm', '=どちらも1/2×6×7＝21 ✓']),
], 'AB上は6x、BC上は30、CD上は78−6x。21になるのは3.5秒後と9.5秒後。');

// 36 2つの四分円の重なり
const A36: [number, number] = [100, 128], B36: [number, number] = [204, 128], C36: [number, number] = [204, 24], D36: [number, number] = [100, 24];
const arcA36 = arcPts(100, 128, 104, 0, 90, 24), arcC36 = arcPts(204, 24, 104, 180, 270, 24);
const sq36 = (): E[] => [P2([A36, B36, C36, D36], C.ink), tx(92, 134, 'A', 14, C.ink, true, 'end'), tx(212, 134, 'B', 14, C.ink, true, 'start'), tx(212, 20, 'C', 14, C.ink, true, 'start'), tx(92, 20, 'D', 14, C.ink, true, 'end'), tx(152, 142, '8cm', 12, C.red)];
const s36: Figure = show([
  SF('1辺8cmの正方形ABCD。Aを中心とする半径8cmの四分円（弧BD）と、Cを中心とする半径8cmの四分円（弧BD）をかきます。2つが重なる部分の面積を求めます。', ['2つの四分円が重なる部分の面積は？'], sq36()),
  S('Aを中心とする四分円です。面積は 1/4×π×8²＝16π。', ['四分円A　1/4×π×8²＝16π'], [P2([A36, ...arcA36], C.blue, FILL.blue), ...polyLine(arcA36, C.blue, 3), seg(A36, B36, C.ink), seg(A36, D36, C.ink)]),
  S('Cを中心とする四分円です。面積は同じく16π。', ['四分円C　1/4×π×8²＝16π'], [P2([C36, ...arcC36], C.red, FILL.red), ...polyLine(arcC36, C.red, 3), seg(C36, B36, C.ink), seg(C36, D36, C.ink)]),
  S('2つの四分円が重なる部分（レンズの形）に色をつけます。ここは両方の四分円に入っています。', ['重なる部分＝求めたい面積'], [P2([...arcA36, ...arcC36], C.purple, FILL.purple), ...polyLine(arcA36, C.blue, 3), ...polyLine(arcC36, C.red, 3)]),
  S('手がかり。2つの四分円を合わせると、正方形の中が全部おおわれます。ただし重なる部分だけは2回数えられています。', ['四分円2つ ＝ 正方形 ＋ 重なる部分'], [P2([...arcA36, ...arcC36], C.purple, FILL.purple)]),
  S('理由。重なる部分は2回数えられているので、四分円2つの合計から正方形を1回分引くと、重なる部分だけが残ります。', ['重なる部分＝32π−64'], [P2([...arcA36, ...arcC36], C.purple, FILL.purple)]),
  S('四分円2つの合計は 16π×2＝32π。正方形の面積は 8×8＝64。', ['32π−64'], [P2([...arcA36, ...arcC36], C.purple, FILL.purple)]),
  ANS('(32π−64)cm²'),
  S('確かめ。π＝3.14とすると 32×3.14−64＝100.48−64＝36.48cm²。正方形（64cm²）の半分より少し大きいくらいで、見た目の大きさと合います。', ['32×3.14−64＝36.48', '=約36.5cm² ✓']),
], '四分円2つ（32π）−正方形（64）＝重なる部分。(32π−64)cm²。');

// 37 内角の二等分線と外角の二等分線
const rad = (d: number) => (d * Math.PI) / 180;
const B37: [number, number] = [40, 125], C37: [number, number] = [150, 125];
const ray = (p: [number, number], deg: number, len: number): [number, number] => [p[0] + len * Math.cos(rad(deg)), p[1] - len * Math.sin(rad(deg))];
const A37 = cross(B37, ray(B37, 70, 200), C37, ray(C37, 134, 200));
const D37 = cross(B37, ray(B37, 35, 300), C37, ray(C37, 67, 300));
const E37: [number, number] = [210, 125];
const base37 = (): E[] => [P2([A37, B37, C37], C.ink, FILL.warm), seg(C37, E37, C.ink, false, 2.5), tx(A37[0] - 6, A37[1] - 2, 'A', 14, C.ink, true, 'end'), tx(32, 130, 'B', 14, C.ink, true, 'end'), tx(150, 140, 'C', 14), tx(216, 130, 'E', 14, C.ink, true, 'start')];
const s37: Figure = show([
  SF('△ABCで∠A＝64°。∠Bの二等分線と、∠Cの外角の二等分線の交点をDとします。∠BDCの大きさを求めます。', ['∠A＝64°　∠BDC＝？'], base37()),
  S('∠Bの二等分線をひきます。∠DBC＝1/2∠B です。', ['∠DBC＝1/2∠B'], [seg(B37, D37, C.blue, false, 2.5)]),
  S('辺BCをEのほうへのばし、Cの外角∠ACEの二等分線をひきます。Dはその交点です。', ['外角∠ACEの二等分線との交点D'], [seg(C37, D37, C.red, false, 2.5), dot(D37, 4, C.green), tx(D37[0] + 8, D37[1] + 4, 'D', 14, C.green, true, 'start')]),
  S('△ABCで、外角∠ACEは、となりあわない2つの内角の和。∠ACE＝∠A＋∠B。', ['∠ACE＝∠A＋∠B', '∠DCE＝1/2(∠A＋∠B)…①']),
  S('△DBCで、∠DCEは外角。∠DCE＝∠D＋∠DBC＝∠D＋1/2∠B…②。', ['∠DCE＝∠D＋1/2∠B…②'], [P2([B37, C37, D37], C.purple, FILL.purple), seg(B37, D37, C.blue, false, 2.5), seg(C37, D37, C.red, false, 2.5), seg(B37, C37, C.ink)]),
  S('理由。①と②はどちらも ∠DCE を表すので等しい。1/2(∠A＋∠B)＝∠D＋1/2∠B から、1/2∠B が両側で消えて ∠D＝1/2∠A。', ['∠D＝1/2∠A　（∠Bに関係しない）']),
  S('∠D＝1/2×64°＝32°。', ['∠D＝1/2×64°＝32°']),
  ANS('32°'),
  S('確かめ。∠B＝70°、∠C＝46°（∠A＝64°）とすると、∠DBC＝35°、∠ACE＝134°、∠DCE＝67°。△DBCで ∠D＝67°−35°＝32°。', ['∠D＝∠DCE−∠DBC＝67°−35°', '=32° で一致 ✓']),
], '外角の性質を2つの三角形に使うと ∠D＝1/2∠A。64°の半分で32°。');

export const figuresHonshikenSchool_koko_waseda_jitsugyo_A: Record<string, Figure> = {
  honshiken_school_koko_waseda_jitsugyo_sansu_13: s13,
  honshiken_school_koko_waseda_jitsugyo_sansu_14: s14,
  honshiken_school_koko_waseda_jitsugyo_sansu_16: s16,
  honshiken_school_koko_waseda_jitsugyo_sansu_17: s17,
  honshiken_school_koko_waseda_jitsugyo_sansu_18: s18,
  honshiken_school_koko_waseda_jitsugyo_sansu_19: s19,
  honshiken_school_koko_waseda_jitsugyo_sansu_20: s20,
  honshiken_school_koko_waseda_jitsugyo_sansu_21: s21,
  honshiken_school_koko_waseda_jitsugyo_sansu_22: s22,
  honshiken_school_koko_waseda_jitsugyo_sansu_23: s23,
  honshiken_school_koko_waseda_jitsugyo_sansu_25: s25,
  honshiken_school_koko_waseda_jitsugyo_sansu_26: s26,
  honshiken_school_koko_waseda_jitsugyo_sansu_29: s29,
  honshiken_school_koko_waseda_jitsugyo_sansu_30: s30,
  honshiken_school_koko_waseda_jitsugyo_sansu_34: s34,
  honshiken_school_koko_waseda_jitsugyo_sansu_35: s35,
  honshiken_school_koko_waseda_jitsugyo_sansu_36: s36,
  honshiken_school_koko_waseda_jitsugyo_sansu_37: s37,
};
