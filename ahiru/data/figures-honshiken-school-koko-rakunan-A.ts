// 本試験対策（学校別）追加分A：洛南高校（高校受験・数学 ID _13〜_40）の動く図解。数学の追加28問のうち12問に付ける。
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

const poly = (cx: number, cy: number, r: number, n: number, rot = -90): [number, number][] =>
  Array.from({ length: n }, (_, k) => { const a = ((rot + (360 / n) * k) * Math.PI) / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number]; });
const circ = (cx: number, cy: number, r: number, color: string = C.ink, fill?: string): E => pg(poly(cx, cy, r, 48), color, fill);
const arcLines = (cx: number, cy: number, r: number, a0: number, a1: number, color: string = C.ink, width = 2.5): E[] => {
  const out: E[] = []; const n = 14;
  for (let i = 0; i < n; i++) {
    const t0 = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180, t1 = ((a0 + ((a1 - a0) * (i + 1)) / n) * Math.PI) / 180;
    out.push(ln(cx + r * Math.cos(t0), cy - r * Math.sin(t0), cx + r * Math.cos(t1), cy - r * Math.sin(t1), color, false, width));
  }
  return out;
};


const ell = (cx: number, cy: number, rx: number, ry: number, color: string = C.ink, fill?: string): E =>
  pg(Array.from({ length: 48 }, (_, k) => { const a = (k / 48) * 2 * Math.PI; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)] as [number, number]; }), color, fill);
const P2 = (pts: [number, number][], color: string = C.ink, fill?: string): E => pg(pts, color, fill);
const at = (cx: number, cy: number, r: number, deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];


const pl = (pts: [number, number][], color: string = C.ink, w = 2): E[] => pts.slice(1).map((p, i) => ln(pts[i][0], pts[i][1], p[0], p[1], color, false, w));
const dot = (x: number, y: number, color: string = C.red, r = 3): E => ci(x, y, r, undefined, color, color);

// ───────── 算数（追加分・高校受験） ─────────

// 17 放物線と直線
const g17 = { ox: 100, oy: 128, sx: 22, sy: 12 };
const X17 = (x: number) => g17.ox + g17.sx * x;
const Y17 = (y: number) => g17.oy - g17.sy * y;
const base17 = (): E[] => [
  ln(X17(-3.4), Y17(0), X17(5), Y17(0), C.gray), ln(X17(0), Y17(0), X17(0), Y17(9.3), C.gray),
  ...pl(Array.from({ length: 25 }, (_, i) => { const x = -3 + i * 0.3; return [X17(x), Y17(0.5 * x * x)] as [number, number]; }), C.gray, 2.5),
  tx(92, 138, 'O', 11, C.gray),
];
const ptsAB17 = (): E[] => [dot(X17(-2), Y17(2)), dot(X17(4), Y17(8)), tx(50, 108, 'A(−2, 2)', 11, C.red, true, 'end'), tx(214, 30, 'B(4, 8)', 11, C.red)];
const lineAB17 = (): E[] => [ln(X17(-2), Y17(2), X17(4), Y17(8), C.blue, false, 2.5), dot(X17(0), Y17(4), C.green), tx(86, 72, 'C(0, 4)', 11, C.green, true, 'end')];
const s_s17: Figure = show([
  SF('放物線 y＝(1/2)x² の上に、x座標が−2の点Aと、x座標が4の点Bがあります。', ['A、Bの座標を求める'], [...base17(), ...ptsAB17()]),
  P('A、Bの座標は、x座標を y＝(1/2)x² に代入して求めます。', ['x＝−2 → y＝2　A(−2, 2)', 'x＝4 → y＝8　B(4, 8)'], ['直線ABの傾きは (8−2)÷(4−(−2))＝1']),
  SF('傾き1で、Aを通る直線は y＝x＋4。y軸との交点をCとすると C(0, 4) です。', ['直線AB　y＝x＋4', 'C(0, 4)'], [...base17(), ...ptsAB17(), ...lineAB17()]),
  S('理由。△OABを、y軸上の線分OC（長さ4）で、左の△OACと右の△OBCに分けます。OCを底辺にすると、高さはAとBのx座標の絶対値です。', ['左　4×2÷2＝4', '右　4×4÷2＝8'], [ln(X17(0), Y17(0), X17(-2), Y17(2), C.red, false, 2), ln(X17(0), Y17(0), X17(4), Y17(8), C.red, false, 2)]),
  P('△OAB＝4＋8＝12 です。', ['△OAB＝4＋8＝12', '(1) y＝x＋4　面積12'], ['=(1)の答え　y＝x＋4、面積12']),
  SF('(2) 底辺をABに決めると、面積は「PからABまでの距離」で決まります。ABと平行な直線を下へずらすと、放物線に最後にふれる点が最も遠い点です。', ['ABに平行な直線 y＝x＋k を考える'], [...base17(), ...ptsAB17(), ...lineAB17(), ln(X17(0), Y17(-0.5), X17(3), Y17(2.5), C.purple, true, 2), tx(204, 102, 'y＝x＋k', 11, C.purple)]),
  P('放物線と y＝x＋k を連立すると、(1/2)x²＝x＋k より x²−2x−2k＝0。平方完成して (x−1)²＝2k＋1。', ['(x−1)²＝2k＋1', 'ふれる＝重解　2k＋1＝0'], ['k＝−1/2、x＝1']),
  S('x＝1 のとき y＝(1/2)×1＝1/2。Pは(1, 1/2)です。', ['P(1, 1/2)'], [dot(X17(1), Y17(0.5), C.purple, 4), tx(150, 126, 'P(1, 1/2)', 11, C.purple, true, 'start')]),
  ANS('(1) y＝x＋4、面積12　(2) P(1, 1/2)'),
  P('確かめ。x＝1 の直線AB上の点は(1, 5)で、Pとのたてのずれは5−1/2＝9/2。△PAB＝(1/2)×(9/2)×6＝27/2。P(0, 0) なら 12 で、27/2のほうが大きい。', ['△PAB＝27/2＞12'], ['=Pが最大 ✓']),
], '(1) y＝x＋4、面積12　(2) P(1, 1/2)');

// 19 さいころの目の積が4の倍数
const g19 = { x0: 104, y0: 24, c: 19 };
const cell19 = (a: number, b: number, mode: number): E => {
  const x = g19.x0 + (b - 1) * g19.c, y = g19.y0 + (a - 1) * g19.c;
  const m4 = (a * b) % 4 === 0;
  const has4 = a === 4 || b === 4;
  const two6 = (a === 2 || a === 6) && (b === 2 || b === 6);
  let color: string = C.gray, fill: string = '#FFFFFF';
  if (mode >= 1 && has4) { color = C.blue; fill = FILL.blue; }
  if (mode >= 2 && two6) { color = C.purple; fill = FILL.purple; }
  if (mode >= 3 && !m4) { color = C.gray; fill = FILL.gray; }
  return bx(x, y, g19.c, g19.c, String(a * b), color, fill, 9);
};
const grid19 = (mode: number): E[] => {
  const out: E[] = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) out.push(cell19(a, b, mode));
  for (let k = 1; k <= 6; k++) { out.push(lb(g19.x0 + (k - 1) * g19.c + g19.c / 2, 18, String(k), 10, C.red, 'middle', true)); out.push(lb(g19.x0 - 8, g19.y0 + (k - 1) * g19.c + 13, String(k), 10, C.blue, 'middle', true)); }
  out.push(lb(g19.x0 - 8, 18, '大＼小', 8, C.gray, 'end', true));
  return out;
};
const s_s19: Figure = show([
  SF('大小2つのさいころを投げて、目の積が4の倍数になる確率を求めます。まず36通りの積を表にします。', ['縦が大、横が小。マスの数は積'], grid19(0)),
  P('4の倍数は、素因数2が2個以上ふくまれる数です。目ごとに、2が何個ふくまれるか数えます。', ['1・3・5　2は0個', '2・6　2は1個', '4　2は2個（4＝2×2）'], ['積に2が2個以上あればよい']),
  SF('いちばん多いのは、どちらかの目が4のとき。4をふくむ行と列は、積がかならず4の倍数です。', ['大が4か、小が4'], grid19(1)),
  P('どちらかが4の場合は、6＋6−1＝11通り（両方4の1通りを2回数えているので1回ひく）。', ['6＋6−1＝11通り'], ['4をふくむのは11通り']),
  SF('4がなくても、2か6どうしなら、2が1個ずつで合わせて2個。(2,2)(2,6)(6,2)(6,6)の4通りです。', ['大も小も2か6'], grid19(2)),
  P('合計は 11＋4＝15通り。全体は6×6＝36通りです。', ['15÷36＝5/12'], ['確率は15/36＝5/12']),
  ANS('5/12'),
  P('確かめ。ならない場合を数える。両方が奇数 3×3＝9通り、一方が2か6で他方が奇数 2×3×2＝12通り。9＋12＝21通りで、36−21＝15通り。', ['36−21＝15通り'], ['=反対から数えても15 ✓']),
], '4の倍数＝素因数2が2個以上。15/36＝5/12。');

// 24 円の外の点から引いた2本の直線
const circum = (a: [number, number], b: [number, number], c: [number, number]) => {
  const d = 2 * (a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]));
  const ux = ((a[0] ** 2 + a[1] ** 2) * (b[1] - c[1]) + (b[0] ** 2 + b[1] ** 2) * (c[1] - a[1]) + (c[0] ** 2 + c[1] ** 2) * (a[1] - b[1])) / d;
  const uy = ((a[0] ** 2 + a[1] ** 2) * (c[0] - b[0]) + (b[0] ** 2 + b[1] ** 2) * (a[0] - c[0]) + (c[0] ** 2 + c[1] ** 2) * (b[0] - a[0])) / d;
  return { cx: ux, cy: uy, r: Math.hypot(a[0] - ux, a[1] - uy) };
};
const P24: [number, number] = [24, 66];
const d1 = (t: number): [number, number] => [P24[0] + t * Math.cos((-28 * Math.PI) / 180), P24[1] + t * Math.sin((-28 * Math.PI) / 180)];
const d2 = (t: number): [number, number] => [P24[0] + t * Math.cos((28 * Math.PI) / 180), P24[1] + t * Math.sin((28 * Math.PI) / 180)];
const u24 = 11;
const A24 = d1(4 * u24), B24 = d1(9 * u24), C24 = d2(3 * u24), D24 = d2(12 * u24);
const cc24 = circum(A24, B24, C24);
const draw24 = (): E[] => [
  pg(Array.from({ length: 60 }, (_, k) => { const a = (k / 60) * 2 * Math.PI; return [cc24.cx + cc24.r * Math.cos(a), cc24.cy + cc24.r * Math.sin(a)] as [number, number]; }), C.gray),
  ln(P24[0], P24[1], B24[0], B24[1], C.ink, false, 2), ln(P24[0], P24[1], D24[0], D24[1], C.ink, false, 2),
  dot(P24[0], P24[1], C.ink), dot(A24[0], A24[1], C.blue), dot(B24[0], B24[1], C.blue), dot(C24[0], C24[1], C.red), dot(D24[0], D24[1], C.red),
  tx(d1(2 * u24)[0] - 6, d1(2 * u24)[1] - 6, '4', 12, C.gray), tx(d1(6.5 * u24)[0] - 2, d1(6.5 * u24)[1] - 8, '5', 12, C.gray), tx(d2(1.5 * u24)[0] - 8, d2(1.5 * u24)[1] + 4, '3', 12, C.gray),
  tx(P24[0] - 4, P24[1] + 16, 'P', 13), tx(A24[0] - 2, A24[1] - 9, 'A', 13, C.blue), tx(B24[0] + 4, B24[1] - 8, 'B', 13, C.blue), tx(C24[0] - 6, C24[1] + 17, 'C', 13, C.red), tx(D24[0] + 8, D24[1] + 14, 'D', 13, C.red),
];
const s_s24: Figure = show([
  SF('円の外の点Pから2本の直線を引きます。P→A→B、P→C→D の順に円と交わります。PA＝4、AB＝5、PC＝3。', ['CDを求める'], draw24()),
  S('AとC、BとDを結んで、2つの三角形△PACと△PDBを作ります。', ['△PACと△PDBに注目'], [ln(A24[0], A24[1], C24[0], C24[1], C.green, false, 2.5), ln(B24[0], B24[1], D24[0], D24[1], C.purple, false, 2.5)]),
  P('理由。円に内接する四角形ABDCでは、頂点Aの外角∠PACは、向かいの内角∠CDBに等しくなります。∠CDBは∠PDBと同じ角です。', ['∠PAC＝∠PDB', '∠Pは共通'], ['2つの角が等しい → 相似']),
  P('△PAC∽△PDB。対応は P↔P、A↔D、C↔B です。', ['PA：PD＝PC：PB', '4：PD＝3：9'], ['PB＝4＋5＝9']),
  P('PD＝4×9÷3＝12。CD＝PD−PC＝12−3＝9。', ['PD＝12', 'CD＝12−3＝9'], ['(1) CD＝9cm']),
  P('(2) 相似比は PA：PD＝4：12＝1：3。面積比は、相似比の2乗で 1：9 です。', ['面積比　1：9', '△PAC＝10 → △PDB＝90'], ['四角形ABDC＝△PDB−△PAC']),
  ANS('(1) 9cm　(2) 80cm²'),
  P('確かめ。90−10＝80。また PA×PB＝4×9＝36、PC×PD＝3×12＝36 で、2つの積が等しくなり、内接四角形の性質と合う。', ['4×9＝36　3×12＝36'], ['=積が等しい ✓']),
], 'CD＝9cm。面積は90−10＝80cm²。');

// 25 円すいの側面を1周する最短のひも
const cone25 = (): E[] => [
  pg([[110, 18], [64, 112], [156, 112]], C.blue, FILL.blue), ell(110, 112, 46, 11, C.blue, FILL.blue),
  tx(60, 60, '母線12', 12, C.red, true, 'end'), ln(110, 112, 156, 112, C.green, false, 2), tx(133, 130, '半径3', 12, C.green),
  tx(124, 22, 'O', 12),
];
const sec25 = (): E[] => {
  const o: [number, number] = [160, 14];
  const arc: [number, number][] = Array.from({ length: 21 }, (_, i) => at(o[0], o[1], 112, -135 + (i * 90) / 20));
  return [pg([o, ...arc], C.blue, FILL.blue), tx(174, 16, 'O', 12)];
};
const s_s25: Figure = show([
  SF('母線12cm、底面の半径3cmの円すい。側面を広げた形と、側面を1周する最短のひもを考えます。', ['(1) 中心角　(2) 最短のひも'], cone25()),
  SF('側面を広げると、半径12cmのおうぎ形になります。おうぎ形の弧の長さは、底面の円周と同じです。', ['弧の長さ＝底面の円周＝2π×3＝6π'], [...sec25(), tx(160, 124, '弧　6π', 13, C.green)]),
  P('半径12の円の円周は 2π×12＝24π。弧の6πは、その 6π÷24π＝1/4 にあたります。', ['6π÷24π＝1/4', '360°×1/4＝90°'], ['(1) 中心角は90度']),
  SF('広げたおうぎ形で、弧の両端のPを P₁、P₂ とします。1周してもどるひもは、広げた図では P₁ から P₂ へのひもです。', ['P₁とP₂は同じ点P'], [...sec25(), tx(76, 112, 'P₁', 13, C.red), tx(244, 112, 'P₂', 13, C.red), dot(82, 96), dot(238, 96)]),
  S('曲面の上で最短の道は、広げた図の上で直線になります。P₁とP₂を直線で結びます。', ['最短＝線分P₁P₂'], [ln(82, 96, 238, 96, C.red, false, 3)]),
  P('理由。△OP₁P₂ は、OP₁＝OP₂＝12 で頂角が90°の直角二等辺三角形です。斜辺は直角をはさむ辺の√2倍です。', ['P₁P₂＝12×√2', '＝12√2'], ['(2) 12√2cm']),
  ANS('(1) 90度　(2) 12√2cm'),
  P('確かめ。12√2＝16.97… cm で、弧の長さ6π＝18.84… cm より短い。直線のほうが弧より短いのは当然で、90°は180°より小さいので線分はおうぎ形の中を通る。', ['12√2≒16.97＜6π≒18.84'], ['=直線のほうが短い ✓']),
], '中心角90°。最短は12√2cm。');

// 28 台形と相似
const T28 = { A: [110, 30] as [number, number], D: [182, 30] as [number, number], B: [80, 124] as [number, number], C: [200, 124] as [number, number] };
const O28: [number, number] = [T28.A[0] + (3 / 8) * (T28.C[0] - T28.A[0]), T28.A[1] + (3 / 8) * (T28.C[1] - T28.A[1])];
const E28: [number, number] = [T28.A[0] + (T28.B[0] - T28.A[0]) * 0.375, O28[1]];
const F28: [number, number] = [T28.D[0] + (T28.C[0] - T28.D[0]) * 0.375, O28[1]];
const trap28 = (): E[] => [
  pg([T28.A, T28.D, T28.C, T28.B], C.ink), tx(T28.A[0] - 8, T28.A[1] - 4, 'A', 13), tx(T28.D[0] + 8, T28.D[1] - 4, 'D', 13), tx(T28.B[0] - 8, T28.B[1] + 12, 'B', 13), tx(T28.C[0] + 8, T28.C[1] + 12, 'C', 13),
  tx(146, 22, '6', 12, C.green), tx(140, 138, '10', 12, C.green),
];
const diag28 = (): E[] => [ln(T28.A[0], T28.A[1], T28.C[0], T28.C[1], C.red, false, 2), ln(T28.B[0], T28.B[1], T28.D[0], T28.D[1], C.red, false, 2), dot(O28[0], O28[1], C.red), tx(O28[0] + 12, O28[1] + 4, 'O', 12, C.red)];
const tri28 = (): E[] => [
  pg([T28.A, T28.D, O28], C.blue, FILL.blue), pg([T28.B, T28.C, O28], C.red, FILL.red),
];
const s_s28: Figure = show([
  SF('AD//BC の台形ABCD。AD＝6cm、BC＝10cm。対角線の交点をOとします。', ['(1) EF　(2) 台形の面積'], trap28()),
  S('対角線ACとBDを引いて、交点をOとします。', ['交点O'], diag28()),
  SF('AD//BC なので、錯角が等しく、△AODと△COBは相似です。相似比は AD：CB＝6：10＝3：5。', ['AO：OC＝3：5'], [...trap28(), ...tri28(), ...diag28()]),
  S('Oを通ってBCに平行な直線を引き、AB、CDとの交点をE、Fとします。△AEO∽△ABC です。', ['EO：BC＝AO：AC＝3：8'], [ln(E28[0], E28[1], F28[0], F28[1], C.purple, false, 2.5), tx(E28[0] - 8, E28[1] + 4, 'E', 13, C.purple), tx(F28[0] + 8, F28[1] + 4, 'F', 13, C.purple)]),
  P('EO＝10×3/8＝15/4。同じようにOF＝15/4。EF＝15/4＋15/4＝15/2。', ['EO＝OF＝15/4', 'EF＝15/2'], ['(1) EF＝15/2cm']),
  SF('(2) △AOD∽△COB で相似比3：5。面積比は 9：25。△AOD＝9 なら △COB＝25。', ['面積比　9：25'], [...trap28(), ...tri28(), ...diag28(), tx(O28[0], 54, '9', 14, C.blue), tx(O28[0], 106, '25', 14, C.red)]),
  P('△AOBと△COBは、頂点Bが共通で、底辺AO、OCは同じ直線上。面積比は AO：OC＝3：5 です。', ['△AOB＝25×3/5＝15', '△COD＝15'], ['同じ理由で△COD＝15']),
  ANS('(1) 15/2cm　(2) 64cm²'),
  P('確かめ。台形の面積の公式で (6＋10)×高さ÷2＝8×高さ＝64 なら高さは8。△AODの高さは 8×3/8＝3、面積 6×3÷2＝9 で一致する。', ['9＋15＋15＋25＝64'], ['=公式でも一致 ✓']),
], 'EF＝15/2cm。台形＝9＋15＋15＋25＝64cm²。');

// 29 池のまわりの出会いと追いつき
const lake29 = (): E[] => [circ(160, 72, 50, C.ink), tx(160, 134, '1周 1200m', 13, C.gray), dot(160, 22, C.green, 4), tx(160, 15, 'スタート', 11, C.green)];
const s_s29: Figure = show([
  SF('1周1200mの池のまわりを、AとBが同じ地点から同時に出発します。反対向きなら8分後に初めて出会い、同じ向きならAが24分後にBに追いつきます。', ['A、Bの分速は？'], lake29()),
  SF('反対向きに進むと、2人は向かいあって近づきます。出会うまでに、2人あわせてちょうど1周ぶん進みます。', ['2人の道のりの和＝1200m'], [...lake29(), ar(160, 22, 118, 28, C.blue), ar(160, 22, 202, 28, C.red), tx(96, 40, 'A', 13, C.blue), tx(224, 40, 'B', 13, C.red)]),
  P('分速の和×8分＝1200m なので、分速の和は 1200÷8＝150m です。', ['和　1200÷8＝150'], ['A＋B＝150']),
  SF('同じ向きに進むと、速いAが、遅いBに追いつきます。追いついたとき、AはBより、ちょうど1周ぶん多く進んでいます。', ['道のりの差＝1200m'], [...lake29(), ar(160, 22, 202, 28, C.blue), ar(165, 14, 207, 20, C.red), tx(236, 36, 'A が速い', 12, C.blue)]),
  P('分速の差×24分＝1200m なので、分速の差は 1200÷24＝50m です。', ['差　1200÷24＝50'], ['A−B＝50']),
  P('和が150、差が50。大きいほうA＝(150＋50)÷2＝100、小さいほうB＝(150−50)÷2＝50。', ['A＝(150＋50)÷2＝100', 'B＝(150−50)÷2＝50'], ['和差算で求める']),
  ANS('Aは分速100m、Bは分速50m'),
  P('確かめ。反対向き (100＋50)×8＝1200m、同じ向き (100−50)×24＝1200m。どちらも1周ぶんで条件に合う。', ['(100＋50)×8＝1200', '(100−50)×24＝1200'], ['=2つの条件を満たす ✓']),
], '和150、差50。A＝100、B＝50。');


// 30 食塩水の交換
const tankA = (a = '8％\n300g', b = '14％\n200g'): E[] => [bf(14, 34, 116, 56, 'A　' + a, C.blue, FILL.blue, 15), bf(190, 34, 116, 56, 'B　' + b, C.red, FILL.red, 15)];
const s_s30: Figure = show([
  SF('容器Aは8％の食塩水300g、容器Bは14％の食塩水200g。同じ量ずつ取り出して、交換します。', ['交換後、AとBの濃度が等しくなる'], tankA()),
  S('AからxgをBへ、BからxgをAへ、同時に入れかえます。', ['取り出す量を x g とする'], [ar(132, 52, 188, 52, C.blue), ar(188, 76, 132, 76, C.red), tx(160, 46, 'x g', 12, C.blue), tx(160, 98, 'x g', 12, C.red)]),
  P('交換しても、食塩の総量も、食塩水の総量も変わりません。2つの濃度が等しいなら、その濃度は、全部を混ぜたときと同じです。', ['最終の濃度＝全体の濃度'], ['食塩の総量÷食塩水の総量で先に決まる']),
  P('食塩は 300×0.08＝24g と 200×0.14＝28g で、合計52g。食塩水の合計は500gです。', ['52÷500＝0.104', '濃度　10.4％'], ['最終の濃度は10.4％']),
  P('Aの食塩は、もとの24gから、取り出した 0.08x g が出て、Bから 0.14x g が入ります。', ['24−0.08x＋0.14x', '＝24＋0.06x'], ['Aは全体300gのまま']),
  P('Aの濃度が0.104なので、(24＋0.06x)÷300＝0.104。', ['24＋0.06x＝31.2', '0.06x＝7.2　x＝120'], ['x＝120']),
  ANS('120g'),
  P('確かめ。Aの食塩は 24＋0.06×120＝31.2g で 31.2÷300＝0.104。Bの食塩は 52−31.2＝20.8g で 20.8÷200＝0.104。', ['A　31.2÷300＝10.4％', 'B　20.8÷200＝10.4％'], ['=2つとも10.4％ ✓']),
], '全体の濃度10.4％。24＋0.06x＝31.2、x＝120g。');

// 32 道の幅
const R32 = { x: 70, y: 14, w: 180, h: 120 };
const land32 = (): E[] => [bx(R32.x, R32.y, R32.w, R32.h, undefined, C.ink, FILL.green), tx(160, 143, 'よこ30m', 11, C.gray), tx(66, 78, 'たて20m', 11, C.gray, true, 'end')];
const s_s32: Figure = show([
  SF('たて20m、よこ30mの土地に、たてとよこに1本ずつ、同じ幅の道を、はしからはしまでつくります。', ['道をのぞいた面積が504m²のとき、幅は？'], [...land32(), bx(130, 14, 12, 120, undefined, C.gray, FILL.gray), bx(70, 60, 180, 12, undefined, C.gray, FILL.gray), tx(136, 13, '道', 10, C.gray)]),
  SF('道は、どこを通っていても、のこりの面積は同じです。たての道を左はしへ、よこの道を上はしへ、寄せます。', ['道の幅を x m とする'], [bx(R32.x, R32.y, R32.w, R32.h, undefined, C.ink, '#FFFFFF'), bx(70, 14, 12, 120, undefined, C.gray, FILL.gray), bx(70, 14, 180, 12, undefined, C.gray, FILL.gray), bx(82, 26, 168, 108, 'のこり', C.green, FILL.green, 14)]),
  P('のこりは1つの長方形になります。たては 20−x、よこは 30−x です。', ['たて　20−x', 'よこ　30−x'], ['面積　(30−x)(20−x)＝504']),
  P('式を展開して整理します。', ['(30−x)(20−x)＝504', '600−50x＋x²＝504', 'x²−50x＋96＝0'], ['左辺を因数分解する']),
  P('因数分解すると (x−2)(x−48)＝0。x＝2 または x＝48 です。', ['(x−2)(x−48)＝0', 'x＝2、48'], ['土地のたては20m']),
  P('x＝48 は、土地のたて20mより大きいので、道にできません。x＝2 だけが答えです。', ['~x＝48 は不適', '=x＝2'], ['幅は2m']),
  ANS('2m'),
  SF('確かめ。幅2mのとき、のこりは 28×18＝504m²。', ['(30−2)×(20−2)＝28×18＝504'], [bx(70, 14, 12, 120, undefined, C.gray, FILL.gray), bx(70, 14, 180, 12, undefined, C.gray, FILL.gray), bx(82, 26, 168, 108, '28×18＝504', C.green, FILL.green, 15)]),
], '(30−x)(20−x)＝504、x＝2m。');

// 34 原点を通る直線で面積を1：2に分ける
const g34 = { ox: 50, oy: 128, sx: 12, sy: 18 };
const X34 = (x: number) => g34.ox + g34.sx * x;
const Y34 = (y: number) => g34.oy - g34.sy * y;
const tri34 = (fill = true): E[] => [
  ln(X34(-1), Y34(0), X34(13.5), Y34(0), C.gray), ln(X34(0), Y34(0), X34(0), Y34(6.7), C.gray),
  pg([[X34(0), Y34(0)], [X34(12), Y34(0)], [X34(0), Y34(6)]], C.blue, fill ? FILL.blue : undefined),
  tx(42, 140, 'O', 11, C.gray), tx(X34(12) + 6, Y34(0) - 6, 'A(12, 0)', 11, C.blue, true, 'start'), tx(X34(0) + 8, Y34(6) + 2, 'B(0, 6)', 11, C.blue, true, 'start'),
];
const s_s34: Figure = show([
  SF('直線 y＝−(1/2)x＋6 が、x軸と点A、y軸と点Bで交わります。原点Oを通って△OABの面積を1：2に分ける直線を求めます。', ['傾きが正の直線を、すべて'], tri34()),
  P('A(12, 0)、B(0, 6)。△OAB＝12×6÷2＝36 です。1：2に分けると、面積は12と24になります。', ['△OAB＝36', '分けた面積は12と24'], ['小さいほうがどちらかで2通り']),
  P('Oと辺AB上の点Pを結ぶと、△OAPと△OBPに分かれます。△OAPの底辺はOA＝12で、高さはPのy座標です。', ['△OAP＝12×(Pのy)÷2', '＝6×(Pのy)'], ['△OAP＝12か24']),
  SF('△OAP＝12 のとき、Pのy座標は2。y＝2 を y＝−(1/2)x＋6 に代入して x＝8。P(8, 2) を通る直線は y＝(1/4)x。', ['P(8, 2)　y＝(1/4)x'], [...tri34(false), pg([[X34(0), Y34(0)], [X34(12), Y34(0)], [X34(8), Y34(2)]], C.red, FILL.red), ln(X34(0), Y34(0), X34(8), Y34(2), C.red, false, 2.5), dot(X34(8), Y34(2), C.red), tx(X34(8) + 6, Y34(2) - 8, 'P(8, 2)', 11, C.red, true, 'start'), tx(X34(8), Y34(0) - 22, '12', 13, C.red)]),
  SF('△OAP＝24 のとき、Pのy座標は4。y＝4 から x＝4。P(4, 4) を通る直線は y＝x。', ['P(4, 4)　y＝x'], [...tri34(false), pg([[X34(0), Y34(0)], [X34(12), Y34(0)], [X34(4), Y34(4)]], C.purple, FILL.purple), ln(X34(0), Y34(0), X34(4), Y34(4), C.purple, false, 2.5), dot(X34(4), Y34(4), C.purple), tx(X34(4) + 6, Y34(4) - 8, 'P(4, 4)', 11, C.purple, true, 'start'), tx(X34(5), Y34(0) - 14, '24', 13, C.purple)]),
  SF('2本とも、傾きが正で、△OABの面積を1：2に分けます。', ['y＝(1/4)x　y＝x'], [...tri34(false), ln(X34(0), Y34(0), X34(8), Y34(2), C.red, false, 2.5), ln(X34(0), Y34(0), X34(4), Y34(4), C.purple, false, 2.5), dot(X34(8), Y34(2), C.red), dot(X34(4), Y34(4), C.purple)]),
  ANS('y＝(1/4)x、y＝x'),
  P('確かめ。P(8, 2) のとき △OBP＝6×8÷2＝24 で 12：24。P(4, 4) のとき △OBP＝6×4÷2＝12 で 24：12。どちらも1：2。', ['12：24＝1：2', '24：12＝2：1'], ['=2本とも1：2 ✓']),
], '△OAP＝12か24。y＝(1/4)x と y＝x。');

// 36 円すいを高さで3等分
const cone36 = (fill: boolean): E[] => {
  const ap: [number, number] = [160, 14];
  const y1 = 14 + 106 / 3, y2 = 14 + 212 / 3;
  const out: E[] = [];
  if (fill) {
    out.push(pg([ap, [140, y1], [180, y1]], C.purple, FILL.purple), pg([[140, y1], [180, y1], [200, y2], [120, y2]], C.blue, FILL.blue), pg([[120, y2], [200, y2], [220, 120], [100, 120]], C.green, FILL.green));
    out.push(ell(160, y1, 20, 4.7, C.gray), ell(160, y2, 40, 9.3, C.gray));
  }
  out.push(ln(ap[0], ap[1], 100, 120, C.ink, false, 2), ln(ap[0], ap[1], 220, 120, C.ink, false, 2), ell(160, 120, 60, 14, C.ink));
  return out;
};
const s_s36: Figure = show([
  SF('円すいを、高さを3等分する、底面に平行な2つの平面で切って、3つの立体に分けます。', ['上・中・下の体積の比は？'], cone36(false)),
  SF('上から、小さい円すい、まんなかの立体、下の立体の3つに分かれます。', ['3つの立体'], cone36(true)),
  P('理由。底面に平行に切ってできる、上の円すいは、もとの円すいと相似です。相似比 a：b のとき、体積比は a³：b³ になります。', ['長さ a：b', '体積 a³：b³'], ['長さを3回かけるから3乗']),
  P('上から、高さ1の円すい、高さ2の円すい、高さ3のもとの円すいを考えます。相似比は 1：2：3 です。', ['相似比　1：2：3', '体積比　1：8：27'], ['1³＝1、2³＝8、3³＝27']),
  P('高さ1の円すいの体積を1とすると、まんなかの立体は 8−1＝7、下の立体は 27−8＝19 です。', ['上　　1', '中　　8−1＝7', '下　　27−8＝19'], ['立体は引き算で出す']),
  SF('3つの立体の体積の比は 1：7：19 です。', ['1：7：19'], [...cone36(true), tx(160, 36, '1', 14, C.purple), tx(160, 70, '7', 14, C.blue), tx(160, 108, '19', 14, C.green)]),
  ANS('1：7：19'),
  P('確かめ。1＋7＋19＝27 で、もとの円すい全体の体積の比27と一致する。', ['1＋7＋19＝27'], ['=全体の27と一致 ✓']),
], '1³：2³：3³＝1：8：27。引いて 1：7：19。');

// 38 三角形に並ぶ碁石
const rows38 = (n: number, tri: boolean): E[] => {
  const out: E[] = [];
  for (let r = 1; r <= n + 1; r++) for (let i = 0; i < r; i++) out.push(ci(160 + (i - (r - 1) / 2) * 20, 22 + (r - 1) * 20, 7, undefined, C.blue, FILL.blue));
  if (tri) for (let r = 1; r <= n + 1; r++) out.push(tx(236, 27 + (r - 1) * 20, r + '個', 12, C.gray));
  return out;
};
const rect38 = (): E[] => {
  const out: E[] = [];
  for (let r = 1; r <= 4; r++) for (let c = 0; c < 5; c++) out.push(c < r ? ci(100 + c * 20, 22 + (r - 1) * 20, 7, undefined, C.blue, FILL.blue) : ci(100 + c * 20, 22 + (r - 1) * 20, 7, undefined, C.red, FILL.red));
  out.push(tx(236, 52, '4列', 12, C.gray), tx(160, 112, '5個', 12, C.gray));
  return out;
};
const s_s38: Figure = show([
  SF('碁石を正三角形の形に並べます。3番目は1辺に4個で、全部で10個です。', ['上から 1、2、3、4個'], rows38(3, true)),
  SF('同じ三角形を、さかさまにして（赤）となりに組み合わせると、長方形になります。', ['たて4列、よこ5個の長方形'], rect38()),
  P('理由。1つの三角形は、長方形のちょうど半分です。n番目なら、たて(n＋1)列、よこ(n＋2)個の長方形になります。', ['個数＝(n＋1)(n＋2)÷2'], ['(1) (n＋1)(n＋2)÷2']),
  P('確かめ。1番目は2×3÷2＝3、2番目は3×4÷2＝6、3番目は4×5÷2＝10。はじめの3つと合います。', ['3、6、10'], ['=問題の数と一致 ✓']),
  P('(2) 100個をこえる番号を探します。12番目は 13×14÷2＝91個、13番目は 14×15÷2＝105個。', ['12番目　91個', '13番目　105個'], ['91＜100＜105']),
  ANS('(1) (n＋1)(n＋2)÷2　(2) 13番目'),
  P('確かめ。個数は 3、6、10、15、…と、増える数が3、4、5、…と1ずつ増える。12番目の91に、14個増えて13番目は105個。', ['91＋14＝105'], ['=105で100をこえる ✓']),
], '(n＋1)(n＋2)÷2。13番目で105個。');

// 40 仕切りのある水そう
const k40 = 3.4;
const tank40 = (): E[] => [
  ln(58, 26, 58, 128, C.ink, false, 3), ln(58, 128, 262, 128, C.ink, false, 3), ln(262, 128, 262, 26, C.ink, false, 3), ln(126, 77, 126, 128, C.gray, false, 4),
  tx(92, 140, '左 20cm', 11, C.gray), tx(194, 140, '右 40cm', 11, C.gray),
];
const water40 = (hl: number, hr: number): E[] => {
  const out: E[] = [];
  if (hl > 0) out.push(bx(60, 128 - hl * k40, 64, hl * k40 - 1, undefined, C.blue, FILL.blue));
  if (hr > 0) out.push(bx(128, 128 - hr * k40, 132, hr * k40 - 1, undefined, C.blue, FILL.blue));
  return out;
};
const s_s40: Figure = show([
  SF('幅60cm、奥行き20cm、高さ30cmの水そう。高さ15cmの仕切り板で、左20cm、右40cmに分かれています。左にだけ、毎分600cm³で水を入れます。', ['(1) 全体の水面が20cm　(2) 右の水面が7.5cm'], [...tank40(), ar(92, 8, 92, 40, C.blue), tx(150, 22, '毎分600cm³', 11, C.blue), tx(160, 50, '仕切り板 高さ15cm', 11, C.gray)]),
  SF('段階1。左の水面が仕切り板の高さ15cmに着くまで、水はすべて左にたまります。20×20×15＝6000cm³、6000÷600＝10分。', ['10分後に左が15cm'], [...tank40(), ...water40(15, 0), tx(160, 50, '10分後　左15cm', 12, C.blue)]),
  SF('段階2。そのあとは、水が仕切り板をこえて右へ流れます。左は15cmのまま。右の底面積は 40×20＝800cm²。7.5cmなら 800×7.5＝6000cm³、6000÷600＝10分。', ['10分後から10分で右が7.5cm　→　20分後'], [...tank40(), ...water40(15, 7.5), tx(160, 50, '20分後　右7.5cm', 12, C.blue)]),
  SF('右の水面も15cmに着くまで。800×15＝12000cm³、12000÷600＝20分。10分から30分までです。', ['30分後に両方15cm'], [...tank40(), ...water40(15, 15), tx(160, 50, '30分後　どちらも15cm', 12, C.blue)]),
  SF('段階3。仕切り板より上は、全体が一緒に上がります。底面積は 60×20＝1200cm²。15cmから20cmまで、1200×5＝6000cm³、6000÷600＝10分。', ['30分後から10分で20cm　→　40分後'], [...tank40(), ...water40(20, 20), tx(160, 46, '40分後　全体20cm', 12, C.blue)]),
  ANS('(1) 40分後　(2) 20分後'),
  P('確かめ。40分で入れた水は 600×40＝24000cm³。水そうの中は、左 20×20×20＝8000、右 40×20×20＝16000、合計24000cm³で一致する。', ['8000＋16000＝24000'], ['=入れた水と一致 ✓']),
], '左が満ちる→右が満ちる→全体が上がる。');

export const figuresHonshikenSchool_koko_rakunan_A: Record<string, Figure> = {
  honshiken_school_koko_rakunan_sansu_17: s_s17,
  honshiken_school_koko_rakunan_sansu_19: s_s19,
  honshiken_school_koko_rakunan_sansu_24: s_s24,
  honshiken_school_koko_rakunan_sansu_25: s_s25,
  honshiken_school_koko_rakunan_sansu_28: s_s28,
  honshiken_school_koko_rakunan_sansu_29: s_s29,
  honshiken_school_koko_rakunan_sansu_30: s_s30,
  honshiken_school_koko_rakunan_sansu_32: s_s32,
  honshiken_school_koko_rakunan_sansu_34: s_s34,
  honshiken_school_koko_rakunan_sansu_36: s_s36,
  honshiken_school_koko_rakunan_sansu_38: s_s38,
  honshiken_school_koko_rakunan_sansu_40: s_s40,
};
