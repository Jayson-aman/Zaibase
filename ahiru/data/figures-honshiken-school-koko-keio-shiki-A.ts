// 本試験対策（学校別）追加分A：慶應義塾志木高等学校（高校受験・数学 ID _13〜_40）の動く図解。数学の追加28問のうち13問に付ける。
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

// ───────── 数学（追加分） ─────────

// 18 折り返して最短（x軸上の点P）
const g18 = (x: number, y: number): [number, number] => [140 + 22 * x, 105 - 22 * y];
const axes18 = (): E[] => [ar(40, 105, 290, 105, C.gray), ar(140, 138, 140, 6, C.gray), tx(292, 120, 'x', 12, C.gray), tx(152, 16, 'y', 12, C.gray), tx(130, 118, 'O', 12, C.gray)];
const para18 = (): E[] => {
  const pts: [number, number][] = [];
  for (let k = 0; k <= 35; k++) { const x = -1.4 + k * 0.1; pts.push(g18(x, x * x)); }
  return polyLine(pts, C.gray, 2);
};
const a18 = g18(-1, 1), b18 = g18(2, 4), a2_18 = g18(-1, -1), p18 = g18(-0.4, 0), q18 = g18(1, 0);
const base18 = (): E[] => [...axes18(), ...para18(), dot(a18, 3.5, C.blue), dot(b18, 3.5, C.red), tx(112, 80, 'A(−1, 1)', 12, C.blue, true, 'end'), tx(194, 16, 'B(2, 4)', 12, C.red, true, 'start')];
const s_s18: Figure = show([
  SF('放物線 y＝x² の上に A(−1, 1)、B(2, 4) があります。x軸上に点Pをとって、AP＋PB が最も短くなるようにします。', ['A(−1, 1)　B(2, 4)　AP＋PB を最短にする P'], base18()),
  S('A も B も x軸の上側、同じ側にあります。P をどこにとっても、折れ線 A→P→B の短さは、このままでは見くらべにくい。', ['A と B は x軸の同じ側にある'], [seg(a18, q18, C.blue, true, 2), seg(q18, b18, C.red, true, 2)]),
  S('手がかり。A を x軸について反対側へ折り返した点 A′ をつくります。A′ は (−1, −1)。', ['Aを折り返した点　A′(−1, −1)'], [seg(a18, a2_18, C.purple, true, 1.5), dot(a2_18, 3.5, C.purple), tx(112, 132, 'A′(−1, −1)', 12, C.purple, true, 'end')]),
  S('理由。x軸は AA′ のまん中を通る垂直な線なので、x軸上のどの P でも AP＝A′P。だから AP＋PB は A′P＋PB に置きかえられます。', ['AP＝A′P　だから　AP＋PB＝A′P＋PB'], [seg(a2_18, q18, C.purple, true, 2)]),
  S('A′ と B を結ぶ最短の道は直線です。この直線が x軸と交わる点が、求める P。', ['直線A′B と x軸の交点が P（最短）'], [seg(a2_18, b18, C.red, false, 3), dot(p18, 4.5, C.green), tx(146, 122, 'P', 14, C.green)]),
  P('直線 A′B の式を求めます。傾きは (4＋1)÷(2＋1)＝5/3。B(2, 4) を通るので切片は 4−10/3＝2/3。', ['傾き　(4＋1)÷(2＋1)＝5/3', 'y＝(5/3)x＋2/3'], ['A′(−1, −1) と B(2, 4) を通る直線']),
  P('P は x軸上の点なので y＝0。(5/3)x＋2/3＝0 の両辺を3倍して 5x＋2＝0、x＝−2/5。', ['y＝0 とおく', 'x＝−2/5'], ['5x＋2＝0 より x＝−2/5']),
  ANS('(−2/5, 0)'),
  P('確かめ。A′B＝√(3²＋5²)＝√34≒5.83。P で測ると AP≒1.17、PB≒4.66。', ['A′B＝√34≒5.83', 'AP＋PB≒1.17＋4.66＝5.83'], ['=AP＋PB＝A′B で一致 ✓']),
], '折り返した A′ と B を直線で結ぶ。交点 P(−2/5, 0)。');

// 22 平行四辺形の中の三角形
const A22: [number, number] = [100, 35], B22: [number, number] = [40, 125], C22: [number, number] = [220, 125], D22: [number, number] = [280, 35], M22: [number, number] = [130, 125], P22: [number, number] = [180, 95];
const base22 = (): E[] => [P2([A22, B22, C22, D22], C.ink, FILL.warm), tx(92, 30, 'A', 14), tx(30, 138, 'B', 14), tx(230, 138, 'C', 14), tx(290, 30, 'D', 14), tx(130, 140, 'M', 14), dot(M22, 3)];
const s_s22: Figure = show([
  SF('平行四辺形ABCDの面積は60cm²。辺BCの中点をM、対角線ACと線分DMの交点をPとして、△PMCの面積を求めます。', ['面積60cm²　M は BC の中点　△PMC は？'], base22()),
  S('対角線 AC と線分 DM をひきます。2本が交わる点が P です。', ['AC と DM の交点が P'], [seg(A22, C22, C.blue, false, 2.5), seg(D22, M22, C.red, false, 2.5), dot(P22, 3.5, C.green), tx(190, 90, 'P', 14, C.green)]),
  S('手がかり。AD∥MC なので、△APD と △CPM は、角が等しい相似な三角形（錯角が等しい）。', ['△APD ∽ △CPM（AD∥MC）'], [P2([A22, P22, D22], C.purple, FILL.purple), P2([C22, P22, M22], C.green, FILL.green), seg(A22, C22, C.blue, false, 2.5), seg(D22, M22, C.red, false, 2.5), dot(P22, 3.5, C.green)]),
  S('理由。M は BC の中点で、AD＝BC なので、AD：MC＝2：1。相似比が 2：1 だから、AP：PC＝2：1、DP：PM＝2：1。', ['相似比　AD：MC＝2：1', 'AP：PC＝2：1　DP：PM＝2：1'], [tx(190, 26, 'AD', 12, C.purple), tx(175, 140, 'MC', 12, C.green)]),
  P('△ACD は平行四辺形の半分で 30cm²。PC は AC の1/3なので、高さが同じ △DPC は △ACD の1/3です。', ['△ACD＝60÷2＝30', '△DPC＝30×1/3＝10'], ['AP：PC＝2：1 なので PC は AC の1/3']),
  P('DP：PM＝2：1 なので PM は DP の半分。高さが同じ △PMC は、△DPC の半分です。', ['△PMC＝△DPC÷2', '＝10÷2＝5'], ['DP：PM＝2：1 なので PM は DP の半分']),
  ANS('5cm²'),
  P('確かめ。△DMC は、底辺 MC が BC の半分で、高さは同じ。60×1/2×1/2＝15。△DPC＋△PMC＝10＋5＝15 で一致。', ['△DMC＝60×1/2×1/2＝15', '△DPC＋△PMC＝10＋5＝15'], ['=15cm²で一致 ✓']),
], 'AP：PC＝2：1、DP：PM＝2：1。△ACD＝30、△DPC＝10、△PMC＝5。');

// 23 円周角
const O23 = { x: 160, y: 70, r: 58 };
const A23 = at(O23.x, O23.y, O23.r, 180), C23 = at(O23.x, O23.y, O23.r, 0), B23 = at(O23.x, O23.y, O23.r, 56), D23 = at(O23.x, O23.y, O23.r, 260);
const t23 = (O23.y - B23[1]) / (D23[1] - B23[1]);
const P23: [number, number] = [B23[0] + (D23[0] - B23[0]) * t23, O23.y];
const base23 = (): E[] => [pg(circPts(O23.x, O23.y, O23.r), C.ink), dot(A23), dot(B23), dot(C23), dot(D23), tx(A23[0] - 10, A23[1] + 4, 'A', 14), tx(C23[0] + 10, C23[1] + 4, 'C', 14), tx(B23[0] + 10, B23[1] - 2, 'B', 14), tx(D23[0] - 2, D23[1] + 14, 'D', 14)];
const s_s23: Figure = show([
  SF('円周上に4点A、B、C、D。AC は直径で、∠BAC＝28°、∠ACD＝40°。AC と BD の交点を P とします。', ['AC は直径　∠BAC＝28°　∠ACD＝40°'], base23()),
  S('対角線 AC（直径）と BD をひきます。交わる点が P です。', ['AC（直径）と BD の交点が P'], [seg(A23, C23, C.blue, false, 3), seg(B23, D23, C.gray, false, 2.5), dot(P23, 3.5, C.green), tx(P23[0] + 2, P23[1] - 8, 'P', 13, C.green)]),
  S('手がかり。直径に対する円周角は90°。だから ∠ABC＝90°。', ['直径ACに対する円周角　∠ABC＝90°'], [seg(A23, B23, C.red, false, 2.5), seg(B23, C23, C.red, false, 2.5)]),
  P('△ABC の内角の和から ∠ACB＝62°。∠BCD は、∠ACB と ∠ACD をあわせた角です。', ['∠ACB＝180°−90°−28°＝62°', '∠BCD＝62°＋40°＝102°'], ['(1) ∠BCD＝102°']),
  SF('(2) 理由。同じ弧に対する円周角は等しい。弧AD に対する円周角は ∠ABD と ∠ACD。', ['弧ADの円周角　∠ABD＝∠ACD＝40°'], [...base23(), seg(A23, B23, C.red, false, 2.5), seg(B23, D23, C.red, false, 2.5), seg(A23, C23, C.blue, false, 2.5), seg(C23, D23, C.purple, false, 2.5), seg(A23, D23, C.gray, true, 1.5)]),
  P('△ABP の内角の和から ∠APB＝112°。∠BPC は ∠APB と一直線をつくる角です。', ['∠APB＝180°−28°−40°＝112°', '∠BPC＝180°−112°＝68°'], ['(2) ∠BPC＝68°']),
  ANS('(1) 102°　(2) 68°'),
  P('確かめ。∠ADC＝90° なので ∠CAD＝50°、∠BAD＝28°＋50°＝78°。円に内接する四角形の向かい合う角の和は180°です。', ['∠BAD＝28°＋50°＝78°', '78°＋102°＝180°'], ['=向かい合う角の和が180°で一致 ✓']),
], '直径→90°。同じ弧→同じ角。∠BCD＝102°、∠BPC＝68°。');

// 24 円の接線と、斜辺への垂線
const O24: [number, number] = [80, 80], A24: [number, number] = [80, 40], P24: [number, number] = [176, 40];
const H24: [number, number] = (() => {
  const vx = P24[0] - O24[0], vy = P24[1] - O24[1];
  const t = ((A24[0] - O24[0]) * vx + (A24[1] - O24[1]) * vy) / (vx * vx + vy * vy);
  return [O24[0] + vx * t, O24[1] + vy * t];
})();
const base24 = (): E[] => [pg(circPts(80, 80, 40), C.ink), seg(A24, P24, C.blue, false, 3), dot(O24, 3), dot(A24, 3), dot(P24, 3), tx(66, 90, 'O', 14), tx(80, 33, 'A', 14), tx(186, 36, 'P', 14), tx(130, 30, '12', 13, C.blue)];
const s_s24: Figure = show([
  SF('中心O、半径5cmの円の外に点P。Pからひいた接線の接点をAとします。PA＝12cm。Aから線分OPにおろした垂線 AH の長さを求めます。', ['半径5cm　PA＝12cm　AH の長さは？'], base24()),
  S('手がかり。接線は、接点を通る半径に垂直です。OA と OP をひくと、∠OAP＝90° の直角三角形ができます。', ['接線PAと半径OAは垂直　∠OAP＝90°'], [seg(O24, A24, C.gray, false, 2.5), seg(O24, P24, C.gray, false, 2.5), P2([[80, 40], [88, 40], [88, 48], [80, 48]], C.gray), tx(70, 62, '5', 13, C.gray)]),
  S('理由。直角三角形では、三平方の定理が使えます。OP²＝5²＋12²＝25＋144＝169、OP＝13。', ['三平方の定理　OP²＝5²＋12²＝169　OP＝13'], [tx(138, 70, '13', 13, C.gray)]),
  S('Aから斜辺OPに垂線をひき、足を H とします。この AH が、斜辺を底辺にしたときの高さです。', ['A から OP への垂線 AH（斜辺への高さ）'], [seg(A24, H24, C.red, false, 3), dot(H24, 3, C.red), tx(H24[0] + 9, H24[1] + 12, 'H', 14, C.red)]),
  P('△OAP の面積を、2通りの底辺で表します。AP と OA を直角をはさむ辺とみると 5×12÷2＝30。OP を底辺とみると 13×AH÷2。', ['5×12÷2＝30', '13×AH÷2＝30'], ['底辺をAPにしても、OPにしても面積は同じ']),
  P('13×AH÷2＝30 の両辺を2倍して 13×AH＝60。AH＝60/13。', ['13×AH＝60', 'AH＝60/13'], ['AH＝60/13cm']),
  ANS('60/13 cm'),
  P('確かめ。AH≒4.62 で OA＝5 より短い。OH＝25/13（OA²÷OP）なので、OH²＋AH²＝(625＋3600)÷169＝25。', ['AH≒4.62（OA＝5より短い）', 'OH²＋AH²＝25＝OA²'], ['=直角三角形OAHで三平方が一致 ✓']),
], '接線⊥半径。面積30＝13×AH÷2。AH＝60/13。');

// 25 正四角錐
const pA: [number, number] = [70, 110], pB: [number, number] = [180, 110], pC: [number, number] = [230, 85], pD: [number, number] = [120, 85], pV: [number, number] = [150, 25], pO: [number, number] = [150, 97.5], pM: [number, number] = [125, 110];
const pyr = (): E[] => [
  seg(pA, pB, C.ink), seg(pB, pC, C.ink), seg(pV, pA, C.ink), seg(pV, pB, C.ink), seg(pV, pC, C.ink),
  seg(pA, pD, C.gray, true, 1.8), seg(pD, pC, C.gray, true, 1.8), seg(pV, pD, C.gray, true, 1.8),
  tx(150, 17, 'V', 14), tx(125, 128, '6cm', 12, C.gray),
];
const s_s25: Figure = show([
  SF('底面が1辺6cmの正方形で、高さが4cmの正四角錐です。体積と表面積を求めます。', ['底面は1辺6cmの正方形　高さ4cm'], pyr()),
  S('(1) 錐の体積は 底面積×高さ÷3。高さは、頂点Vから底面にまっすぐ下ろした長さ4cmです。', ['(1) 体積＝底面積×高さ÷3'], [seg(pV, pO, C.green, true, 2.5), dot(pO, 3, C.green), tx(142, 62, '4cm', 12, C.green, true, 'end')]),
  P('底面積は 6×6＝36cm²。体積は 36×4÷3＝48cm³。', ['底面積　6×6＝36cm²', '体積　36×4÷3＝48cm³'], ['(1) 体積は48cm³']),
  SF('(2) 側面は合同な二等辺三角形4つ。その「高さ」は、頂点Vから辺ABの中点Mまでの、ななめの長さです。', ['(2) 側面の高さは、頂点Vから辺の中点Mまで'], [...pyr(), seg(pV, pM, C.red, false, 3), seg(pO, pM, C.blue, false, 2.5), seg(pV, pO, C.green, true, 2), dot(pM, 3, C.red), tx(112, 104, 'M', 13, C.red)]),
  P('理由。V、O（底面の中心）、M は直角三角形VOMをつくります。OM は 辺の半分で 3cm、VO は 4cm。', ['O から M まで　6÷2＝3', 'VM＝√(3²＋4²)＝5cm'], ['3、4、5 の直角三角形 VOM']),
  P('側面の三角形は、底辺6cm、高さ5cm。面積は 6×5÷2＝15cm²。同じものが4つあります。', ['側面1つ　6×5÷2＝15cm²', '4つで　15×4＝60cm²'], ['側面は合同な三角形が4つ']),
  P('表面積は、底面と側面4つの合計です。', ['表面積＝底面＋側面', '＝36＋60＝96cm²'], ['(2) 表面積は96cm²']),
  ANS('(1) 48cm³　(2) 96cm²'),
  P('確かめ。側面の高さ5cmは、錐の高さ4cmより長い。ななめの辺だから、長くなるのが自然です。', ['側面の高さ 5cm ＞ 錐の高さ 4cm', '（ななめの長さだから）'], ['=側面の高さは錐の高さより長い ✓']),
], '体積 36×4÷3＝48。側面の高さ5。表面積 36＋15×4＝96。');

// 26 立方体の三角錐A−BDEと垂線
const cA: [number, number] = [105, 95], cB: [number, number] = [175, 95], cD: [number, number] = [70, 120], cE: [number, number] = [105, 25], cC: [number, number] = [140, 120], cF: [number, number] = [175, 25], cH: [number, number] = [70, 50], cG: [number, number] = [140, 50];
const cubeEdges = (): E[] => [
  seg(cD, cC), seg(cC, cG), seg(cG, cH), seg(cH, cD), seg(cC, cB), seg(cB, cF), seg(cF, cG), seg(cF, cE), seg(cE, cH),
  seg(cA, cB, C.gray, true, 1.8), seg(cA, cD, C.gray, true, 1.8), seg(cA, cE, C.gray, true, 1.8),
];
const cubeLabels = (): E[] => [tx(112, 90, 'A', 13, C.red), tx(186, 98, 'B', 13), tx(60, 128, 'D', 13), tx(104, 18, 'E', 13), tx(148, 134, 'C', 13), tx(186, 30, 'F', 13), tx(150, 46, 'G', 13), tx(60, 50, 'H', 13)];
const H26 = lerp(cA, cG, 1 / 3);
const s_s26: Figure = show([
  SF('1辺6cmの立方体ABCD−EFGH。頂点Aから出る3つの辺の先 B、D、E を結んだ△BDEにむけて、Aから垂線をひきます。その長さを求めます。', ['1辺6cm　A から △BDE にひく垂線の長さ'], [...cubeEdges(), ...cubeLabels()]),
  S('3点B、D、Eを通る面（△BDE）で立方体を切ると、頂点Aのまわりに三角錐 A−BDE ができます。', ['切り取られる三角錐　A−BDE'], [P2([cB, cD, cE], C.purple, FILL.purple), ...cubeEdges(), seg(cB, cD, C.purple, false, 2.5), seg(cD, cE, C.purple, false, 2.5), seg(cB, cE, C.purple, false, 2.5)]),
  P('手がかり。垂線は直接は出しにくいので、三角錐の体積を2通りで表します。まず △ABD を底面、AE を高さとみる（直角がそろって簡単）。', ['△ABD を底面、AE を高さとみる', '6×6÷2×6÷3＝36'], ['三角錐 A−BDE の体積は36cm³']),
  P('理由。BD、BE、DE はどれも正方形の対角線で 6√2cm。3辺が等しい正三角形です。高さは 6√2×√3÷2＝3√6。', ['1辺6√2の正三角形', '面積　6√2×3√6÷2＝18√3'], ['高さ＝6√2×√3÷2＝3√6']),
  SF('次に △BDE を底面とみます。このとき、A から △BDE への垂線 AH が高さです。AH は対角線 AG 上にあります。', ['AH は △BDE を底面にしたときの高さ'], [...cubeEdges(), ...cubeLabels(), P2([cB, cD, cE], C.purple, FILL.purple), ...cubeEdges(), seg(cA, cG, C.red, true, 2.5), dot(H26, 3.5, C.red), tx(H26[0] - 12, H26[1] + 14, 'H', 13, C.red)]),
  P('同じ体積36を、△BDE を底面として表します。', ['18√3×AH÷3＝36', 'AH＝36×3÷18√3＝2√3'], ['AH＝6/√3＝2√3cm']),
  ANS('2√3 cm'),
  P('確かめ。立方体の対角線 AG＝6√3。AG は △BDE に垂直で、AH はその3分の1にあたります。', ['AG＝6√3（立方体の対角線）', 'AH＝6√3÷3＝2√3'], ['=AG の1/3で一致 ✓']),
], '体積36＝18√3×AH÷3。AH＝2√3cm。');

// 27 箱の容積
const s_s27: Figure = show([
  SF('縦より横が3cm長い長方形の厚紙。四すみから1辺2cmの正方形を切り取って、ふたのない箱をつくると、容積が80cm³。もとの縦を求めます。', ['縦 x cm、横 (x＋3) cm　四すみを2cmずつ切る'], [
    bx(60, 24, 144, 108, undefined, C.ink, FILL.warm),
    bx(60, 24, 24, 24, undefined, C.red, FILL.red), bx(180, 24, 24, 24, undefined, C.red, FILL.red), bx(60, 108, 24, 24, undefined, C.red, FILL.red), bx(180, 108, 24, 24, undefined, C.red, FILL.red),
    tx(132, 17, '横　x＋3', 12), tx(38, 80, '縦 x', 12), tx(56, 40, '2', 11, C.red, true, 'end'), tx(250, 78, '切り取る', 12, C.red), tx(250, 94, '1辺2cm', 12, C.red),
  ]),
  S('切り取った四すみを残して折ると、箱の底になるのは、まん中の部分です。縦も横も、両はしの2cmずつ（合わせて4cm）が高さにまわります。', ['底面の縦 x−4、横 (x＋3)−4＝x−1、高さ2'], [
    bf(84, 48, 96, 60, '底面　縦 x−4\n横 x−1', C.green, FILL.green, 13),
  ]),
  P('容積は 底面積×高さ。2次方程式がつくれます。', ['2(x−4)(x−1)＝80', '(x−4)(x−1)＝40'], ['容積＝底面積×高さ＝80']),
  P('展開して整理し、因数分解します。', ['x²−5x＋4＝40', '(x−9)(x＋4)＝0'], ['x²−5x−36＝0　より　x＝9、−4']),
  P('理由。底面の縦 x−4 は長さなので正でなければなりません。x−4＞0、つまり x＞4。', ['x−4＞0 なので x＞4', 'x＝9（−4は長さにならない）'], ['条件に合う解だけを選ぶ']),
  ANS('9cm'),
  P('確かめ。縦9cm、横12cm。底面は 縦9−4＝5cm、横12−4＝8cm。', ['縦9　横12　底面　5×8', '5×8×2＝80cm³'], ['=容積80cm³で一致 ✓']),
], '2(x−4)(x−1)＝80。x＝9。');

// 31 レンズ形の面積
const sqA: [number, number] = [100, 22], sqB: [number, number] = [200, 22], sqC: [number, number] = [200, 122], sqD: [number, number] = [100, 122];
const arcA31 = arcPts(100, 22, 100, 0, -90);
const arcC31 = arcPts(200, 122, 100, 180, 90);
const lens31 = (): [number, number][] => [...arcA31, ...arcC31.slice(1, -1)];
const sqLabels = (): E[] => [tx(90, 20, 'A', 14), tx(210, 20, 'B', 14), tx(210, 134, 'C', 14), tx(90, 134, 'D', 14)];
const sqOutline = (): E => P2([sqA, sqB, sqC, sqD], C.ink);
const s_s31: Figure = show([
  SF('1辺6cmの正方形ABCD。Aを中心とする半径6cmの四分円と、Cを中心とする半径6cmの四分円が、正方形の中で重なります。', ['Aを中心、Cを中心とする半径6cmの四分円'], [sqOutline(), ...polyLine(arcA31, C.blue, 2.5), ...polyLine(arcC31, C.green, 2.5), ...sqLabels()]),
  S('重なった、B と D を結ぶレンズのような形の面積を求めます。', ['重なる部分（レンズ形）の面積は？'], [P2(lens31(), C.purple, FILL.purple), ...polyLine(arcA31, C.blue, 2.5), ...polyLine(arcC31, C.green, 2.5), sqOutline()]),
  SF('手がかり。レンズ形はまがった形なので、ふつうには出せません。足し算と引き算で考えます。まず四分円1つの面積です。', ['四分円1つ　π×6²×1/4＝9π cm²'], [P2([sqA, ...arcA31], C.blue, FILL.blue), sqOutline(), ...sqLabels()]),
  S('もう1つの四分円を重ねます。2つを合わせると、正方形ぜんたいがおおわれます（すき間がありません）。', ['2つ合わせると、正方形ぜんたいをおおう'], [P2([sqC, ...arcC31], C.green, FILL.green), ...polyLine(arcA31, C.blue, 2.5), sqOutline()]),
  S('ただし、重なったレンズ形は、2つの四分円で2回数えられています。', ['重なり（レンズ形）は2回数えられている'], [P2(lens31(), C.purple, FILL.purple), ...polyLine(arcA31, C.blue, 2.5), ...polyLine(arcC31, C.green, 2.5), sqOutline()]),
  P('理由。四分円2つの面積の和から正方形の面積を引くと、2回数えた重なりが、ちょうど1回分だけ残ります。', ['四分円2つ　9π×2＝18π', '正方形　6×6＝36'], ['18π−36 ＝ 重なりの1回ぶん']),
  P('レンズ形の面積は、四分円2つの面積の和−正方形の面積です。', ['レンズ形＝18π−36'], ['=(18π−36)cm²']),
  ANS('(18π−36)cm²'),
  P('確かめ。π≒3.14 とすると 18π−36≒20.5cm²。四分円1つ（約28.3cm²）より小さく、正方形（36cm²）の半分より少し大きい。', ['π≒3.14 のとき', '18π−36≒20.5cm²'], ['四分円1つ（約28.3）より小さい ✓']),
], '9π×2−36＝18π−36。');

// 32 格子点
const g32 = (x: number, y: number): [number, number] => [50 + 20 * x, 130 - 20 * y];
const inside32: [number, number][] = [];
for (let x = 1; x <= 8; x++) for (let y = 1; y <= 5; y++) if (y < 6 - (2 / 3) * x - 1e-9) inside32.push([x, y]);
const axes32 = (): E[] => [ar(30, 130, 262, 130, C.gray), ar(50, 138, 50, 4, C.gray), tx(272, 134, 'x', 12, C.gray), tx(62, 16, 'y', 12, C.gray), tx(40, 144, 'O', 11, C.gray), tx(38, 16, '6', 12, C.gray), tx(230, 122, '9', 12, C.gray), seg(g32(0, 6), g32(9, 0), C.red, false, 3)];
const col32 = (xs: number[], color: string): E[] => inside32.filter(([x]) => xs.includes(x)).map(([x, y]) => ci(g32(x, y)[0], g32(x, y)[1], 4.5, undefined, color, color));
const s_s32: Figure = show([
  SF('直線 y＝−(2/3)x＋6 と x軸、y軸で囲まれた三角形。その内部（周上をのぞく）にある、x座標も y座標も整数の点を数えます。', ['y＝−(2/3)x＋6 と軸でできる三角形'], axes32()),
  S('内部の点は x＞0、y＞0 で、直線より下にあります。線の上の点（3, 4）（6, 2）は周上なので数えません。', ['内部の格子点（周上は のぞく）を数える'], [...inside32.map(([x, y]) => ci(g32(x, y)[0], g32(x, y)[1], 2.5, undefined, C.gray, C.gray)), ci(g32(3, 4)[0], g32(3, 4)[1], 4.5, undefined, C.red), ci(g32(6, 2)[0], g32(6, 2)[1], 4.5, undefined, C.red)]),
  S('手がかり。x座標を1つ決めて、y がどこまで入るかを調べます。x＝1 のとき、直線の高さは 16/3≒5.3。y＝1〜5 の5個。', ['x＝1　y＝1〜5　5個'], col32([1], C.blue)),
  S('x＝2 は高さ 14/3≒4.7 で4個。x＝3 は高さがちょうど4（周上）なので、y＝1〜3 の3個。x＝4 は高さ 10/3≒3.3 で3個。', ['x＝2：4個　x＝3：3個　x＝4：3個'], col32([2, 3, 4], C.blue)),
  S('x＝5 は高さ 8/3≒2.7 で2個。x＝6 は高さがちょうど2（周上）なので1個。x＝7 は高さ 4/3≒1.3 で1個。', ['x＝5：2個　x＝6：1個　x＝7：1個'], col32([5, 6, 7], C.blue)),
  P('理由。x＝8 では高さが 2/3 で、y＝1 が入りません。0個です。あとは足し算。', ['5＋4＋3＋3＋2＋1＋1', '＝19'], ['x＝8 では入る点が0個']),
  ANS('19個'),
  P('確かめ。y座標で数えます。y＝1 は x＝1〜7 の7個、y＝2 は5個、y＝3 は4個、y＝4 は2個、y＝5 は1個。', ['y座標で数える', '7＋5＋4＋2＋1＝19'], ['=別の数え方でも19個 ✓']),
], '5＋4＋3＋3＋2＋1＋1＝19。');

// 36 直角三角形の内接円
const tC: [number, number] = [50, 125], tA: [number, number] = [182, 125], tB: [number, number] = [50, 26], tI: [number, number] = [83, 92];
const foot36: [number, number] = (() => {
  const vx = tA[0] - tB[0], vy = tA[1] - tB[1];
  const t = ((tI[0] - tB[0]) * vx + (tI[1] - tB[1]) * vy) / (vx * vx + vy * vy);
  return [tB[0] + vx * t, tB[1] + vy * t];
})();
const tri36 = (): E[] => [P2([tA, tB, tC], C.ink, FILL.warm), P2([[50, 117], [58, 117], [58, 125], [50, 125]], C.gray), tx(40, 136, 'C', 14), tx(190, 136, 'A', 14), tx(40, 24, 'B', 14), tx(116, 139, '12', 13, C.gray), tx(30, 78, '9', 13, C.gray)];
const s_s36: Figure = show([
  SF('∠C＝90° の直角三角形ABC。AC＝12cm、BC＝9cm。この三角形に内接する円の半径を求めます。', ['∠C＝90°　AC＝12　BC＝9　内接円の半径は？'], tri36()),
  S('まず斜辺 AB を求めます。三平方の定理で AB²＝12²＋9²＝144＋81＝225、AB＝15cm。', ['三平方　AB²＝12²＋9²＝225　AB＝15'], [tx(138, 62, '15', 13, C.gray)]),
  S('手がかり。内接円の中心 I と、3つの頂点を結ぶと、△ABC は3つの三角形に分かれます。', ['中心Iと3つの頂点を結ぶ → 3つの三角形'], [pg(circPts(83, 92, 33), C.blue), seg(tI, tA, C.gray, true, 1.8), seg(tI, tB, C.gray, true, 1.8), seg(tI, tC, C.gray, true, 1.8), dot(tI, 3, C.blue), tx(92, 86, 'I', 13, C.blue)]),
  S('理由。円は3つの辺に接しているので、I から各辺におろした垂線の長さは、どれも半径 r。3つの三角形の高さが、すべて r になります。', ['どの三角形も、高さは半径 r'], [seg(tI, [83, 125], C.red, false, 2.5), seg(tI, [50, 92], C.red, false, 2.5), seg(tI, foot36, C.red, false, 2.5), tx(95, 112, 'r', 13, C.red)]),
  P('△ABC の面積は、直角をはさむ辺からも、3つの三角形の和からも表せます。', ['△ABC＝12×9÷2＝54', '＝(15＋9＋12)×r÷2＝18r'], ['3つの三角形の面積の合計が△ABC']),
  P('54＝18r から r を求めます。', ['18r＝54', 'r＝3'], ['内接円の半径は3cm']),
  ANS('3cm'),
  P('確かめ。C から接点までは r＝3cm。A からは 12−3＝9cm、B からは 9−3＝6cm。', ['A から 12−3＝9　B から 9−3＝6', '9＋6＝15＝AB'], ['=接線の長さで AB＝15 が一致 ✓']),
], '面積54＝18r。r＝3cm。');

// 37 相似な三角形の面積比
const t37A: [number, number] = [160, 24], t37B: [number, number] = [50, 128], t37C: [number, number] = [280, 128];
const t37D = lerp(t37A, t37B, 0.4), t37E = lerp(t37A, t37C, 0.4);
const base37 = (): E[] => [P2([t37A, t37B, t37C], C.ink, FILL.warm), seg(t37D, t37E, C.blue, false, 2.5), tx(160, 16, 'A', 14), tx(40, 138, 'B', 14), tx(290, 138, 'C', 14), tx(t37D[0] - 12, t37D[1] + 4, 'D', 14), tx(t37E[0] + 12, t37E[1] + 4, 'E', 14), dot(t37D, 3), dot(t37E, 3)];
const s_s37: Figure = show([
  SF('△ABC の辺AB上に D、辺AC上に E。DE∥BC で、AD：DB＝2：3。△ADE の面積が12cm²のとき、四角形DBCE の面積を求めます。', ['DE∥BC　AD：DB＝2：3　△ADE＝12cm²'], base37()),
  S('手がかり。DE∥BC なので、△ADE と △ABC は相似です。', ['△ADE ∽ △ABC（DE∥BC）'], [P2([t37A, t37D, t37E], C.purple, FILL.purple), seg(t37D, t37E, C.blue, false, 2.5), tx(160, 56, '12cm²', 12, C.purple)]),
  P('理由。AB は 2＋3＝5 にあたるので、相似比 AD：AB＝2：5。相似な図形の面積比は、相似比を2回かけた比です。', ['相似比　AD：AB＝2：5', '面積比　2×2：5×5＝4：25'], ['面積比は、相似比を2回かけた比']),
  P('△ADE が「4」にあたり、12cm²。1にあたる面積を出します。', ['4 にあたるのが 12cm²', '1 にあたるのは 12÷4＝3cm²'], ['△ADE が 4、△ABC が 25']),
  P('△ABC は 25 にあたります。', ['△ABC＝3×25＝75cm²'], ['全体の三角形の面積は75cm²']),
  P('四角形DBCE は、△ABC から △ADE をひいた残りです。', ['四角形DBCE＝△ABC−△ADE', '＝75−12＝63cm²'], ['引き算で求める']),
  ANS('63cm²'),
  P('確かめ。四角形DBCE は、面積比で 25−4＝21 にあたります。', ['25−4＝21 にあたる', '3×21＝63cm²'], ['=ちがう求め方でも63cm² ✓']),
], '面積比4：25。△ABC＝75。75−12＝63。');

// 39 正六角形の中の△ACE
const hexO: [number, number] = [160, 78];
const hv = [150, 90, 30, -30, -90, -150].map((d) => at(160, 78, 52, d));
const [hA, hB, hC, hD, hE, hF] = hv;
const hex39 = (): E[] => [P2(hv, C.ink, FILL.warm), tx(hA[0] - 10, hA[1] + 2, 'A', 14), tx(160, 18, 'B', 14), tx(hC[0] + 10, hC[1] + 2, 'C', 14), tx(hD[0] + 10, hD[1] + 6, 'D', 14), tx(160, 143, 'E', 14), tx(hF[0] - 10, hF[1] + 6, 'F', 14)];
const s_s39: Figure = show([
  SF('面積が72cm²の正六角形ABCDEF。頂点A、C、E を結んでできる三角形 ACE の面積を求めます。', ['面積72cm²の正六角形　△ACE の面積は？'], hex39()),
  S('中心Oと6つの頂点を結びます。合同な正三角形が6つできます。', ['中心Oと頂点を結ぶ → 合同な正三角形が6つ'], [...hv.map((p) => seg(hexO, p, C.gray, false, 2)), dot(hexO, 3, C.blue), tx(166, 76, 'O', 12, C.blue, true, 'start')]),
  S('三角形 ACE を、1つおきの頂点を結んでかきます。中心Oは、この三角形の内側にあります。', ['△ACE は、中心Oをふくんでいる'], [seg(hA, hC, C.purple, false, 3), seg(hC, hE, C.purple, false, 3), seg(hE, hA, C.purple, false, 3)]),
  S('手がかり。四角形 OABC は、4辺が等しいひし形で、正三角形2つぶんです。対角線ACで、同じ大きさの2つの三角形に分かれます。', ['ひし形OABC は 正三角形2つぶん'], [P2([hexO, hA, hB, hC], C.green, FILL.green), seg(hA, hC, C.purple, false, 3), seg(hexO, hA, C.gray, false, 2), seg(hexO, hC, C.gray, false, 2)]),
  P('正三角形1つは 72÷6＝12cm²。ひし形 OABC は 12×2＝24cm²。その半分の △OAC は 12cm²。', ['正三角形1つ　72÷6＝12cm²', '△OAC＝24÷2＝12cm²'], ['ひし形を対角線で半分にする']),
  P('理由。△ACE は、O から3つの頂点に線をひくと、△OAC、△OCE、△OEA に分かれます。3つとも合同なので、どれも12cm²。', ['△ACE＝△OAC＋△OCE＋△OEA', '＝12×3＝36cm²'], ['3つの三角形は合同']),
  ANS('36cm²'),
  P('確かめ。まわりの3つの三角形 △ABC、△CDE、△EFA も、△OAC と同じ12cm²。72−12×3＝36cm²。', ['72−(12＋12＋12)', '＝36cm²'], ['=まわりを引いても36cm² ✓']),
], '12×3＝36。まわりを引いても72−36＝36。');

// 40 追いかけ算（グラフ）
const g40 = (m: number, d: number): [number, number] => [30 + 14 * m, 130 - 0.1 * d];
const axes40 = (): E[] => [ar(30, 130, 300, 130, C.gray), ar(30, 140, 30, 6, C.gray), tx(285, 122, '時間(分)', 11, C.gray), tx(62, 16, '道のり(m)', 11, C.gray), tx(198, 142, '12', 11, C.gray), tx(282, 142, '18', 11, C.gray), tx(26, 26, '1080', 11, C.gray, true, 'end')];
const s_s40: Figure = show([
  SF('弟が家を出発して分速60m。弟が出発して12分後に、兄が自転車で分速180mで追いかけます。いつ追いつくか。', ['弟：分速60m　兄：12分おくれて分速180m'], axes40()),
  S('弟の進んだ道のりのグラフです。1分ごとに60m ずつ、まっすぐ上がります。', ['弟の進んだ道のり（分速60m）'], [seg(g40(0, 0), g40(18, 1080), C.blue, false, 3), tx(120, 82, '弟', 13, C.blue)]),
  S('手がかり。兄が出発する12分後、弟はもう 60×12＝720m 先にいます。', ['兄が出発する12分後、弟は720m先'], [seg(g40(12, 0), g40(12, 720), C.gray, true, 1.5), seg(g40(0, 720), g40(12, 720), C.gray, true, 1.5), dot(g40(12, 720), 4, C.blue), tx(26, 62, '720', 11, C.blue, true, 'end')]),
  S('兄は12分後から進み始めます。兄の線が、弟の線に追いつく点が、答えです。', ['兄の線が弟の線に追いつく点'], [seg(g40(12, 0), g40(18, 1080), C.red, false, 3), dot(g40(18, 1080), 4.5, C.green), tx(250, 14, '追いつく', 12, C.green), tx(206, 100, '兄', 13, C.red)]),
  P('理由。兄は1分に180m、弟は1分に60m進む。1分ごとに、2人のあいだは 180−60＝120m ずつ縮まります。', ['1分で縮まる差　180−60＝120m', '720÷120＝6分'], ['兄が出発してから 6分後']),
  P('追いついた地点は、兄が6分で進んだ道のりです。', ['兄の進んだ道のり', '180×6＝1080m'], ['家から1080m']),
  ANS('6分後、家から1080m'),
  P('確かめ。弟は 12＋6＝18分歩いています。', ['弟は 12＋6＝18分歩いた', '60×18＝1080m'], ['=兄の1080mと一致 ✓']),
], '720÷(180−60)＝6分後。180×6＝1080m。');

export const figuresHonshikenSchool_koko_keio_shiki_A: Record<string, Figure> = {
  honshiken_school_koko_keio_shiki_sansu_18: s_s18,
  honshiken_school_koko_keio_shiki_sansu_22: s_s22,
  honshiken_school_koko_keio_shiki_sansu_23: s_s23,
  honshiken_school_koko_keio_shiki_sansu_24: s_s24,
  honshiken_school_koko_keio_shiki_sansu_25: s_s25,
  honshiken_school_koko_keio_shiki_sansu_26: s_s26,
  honshiken_school_koko_keio_shiki_sansu_27: s_s27,
  honshiken_school_koko_keio_shiki_sansu_31: s_s31,
  honshiken_school_koko_keio_shiki_sansu_32: s_s32,
  honshiken_school_koko_keio_shiki_sansu_36: s_s36,
  honshiken_school_koko_keio_shiki_sansu_37: s_s37,
  honshiken_school_koko_keio_shiki_sansu_39: s_s39,
  honshiken_school_koko_keio_shiki_sansu_40: s_s40,
};
