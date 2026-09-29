// 高校受験・数学 以前からある項目（formulas-koko-sugaku.ts）のうち、図を持たない項目の49番目〜60番目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, fresh, band } from './diagram-kit';
import type { Slide } from './diagram-kit';

type P = [number, number];
type E = DiagramElement;
const RD = 'rgba(225,29,72,0.28)';
const BL = 'rgba(2,132,199,0.28)';
const GR = 'rgba(22,163,74,0.28)';
const PU = 'rgba(147,51,234,0.28)';
const GY = 'rgba(110,100,92,0.16)';
const YE = 'rgba(234,179,8,0.35)';

// ── 共通の小さな道具 ──
const S = (note: string, fig: E[], top: string, sub?: string, col: string = C.blue, fill: string = FILL.blue): Slide => ({
  note,
  add: fresh(...fig, ...band(150, bx(16, 158, 288, 34, top, col, fill, 15), ...(sub ? [lb(160, 212, sub, 12, C.gray, 'middle')] : []))),
});
const D2R = Math.PI / 180;
const pt = (cx: number, cy: number, r: number, deg: number): P => [cx + r * Math.cos(deg * D2R), cy - r * Math.sin(deg * D2R)];
const lerp = (p: P, q: P, t: number): P => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
const sh = (p: P, dx: number, dy = 0): P => [p[0] + dx, p[1] + dy];
const mid = (p: P, q: P): P => lerp(p, q, 0.5);
const cen = (a: P, b: P, c: P): P => [(a[0] + b[0] + c[0]) / 3, (a[1] + b[1] + c[1]) / 3];
const dist = (p: P, q: P) => Math.hypot(q[0] - p[0], q[1] - p[1]);
const inter = (p1: P, p2: P, p3: P, p4: P): P => {
  const d1x = p2[0] - p1[0], d1y = p2[1] - p1[1], d2x = p4[0] - p3[0], d2y = p4[1] - p3[1];
  const t = ((p3[0] - p1[0]) * d2y - (p3[1] - p1[1]) * d2x) / (d1x * d2y - d1y * d2x);
  return [p1[0] + d1x * t, p1[1] + d1y * t];
};
const dot = (p: P, color: string = C.ink): E => ci(p[0], p[1], 2.6, undefined, color, color);
const V = (name: string, p: P, dx: number, dy: number, color: string = C.ink): E => lb(p[0] + dx, p[1] + dy, name, 12, color, 'middle', true);
const seg = (p: P, q: P, color: string = C.gray, dashed = false, w = 1.8): E => ln(p[0], p[1], q[0], q[1], color, dashed, w);
const tri = (a: P, b: P, c: P, color: string = C.gray, fill: string = FILL.warm): E => pg([a, b, c], color, fill);
const hl = (pts: P[], fill: string, color: string = C.gray): E => pg(pts, color, fill);
const dirA = (p: P, q: P) => Math.atan2(-(q[1] - p[1]), q[0] - p[0]) / D2R;
const angParts = (v: P, p: P, q: P) => {
  let d1 = dirA(v, p), d2 = dirA(v, q);
  let df = (((d2 - d1) % 360) + 360) % 360;
  if (df > 180) { [d1, d2] = [d2, d1]; df = 360 - df; }
  return { d1, df };
};
const ang = (v: P, p: P, q: P, r = 16, color: string = C.red, fill: string = RD): E => {
  const { d1, df } = angParts(v, p, q);
  return sc(v[0], v[1], r, d1, d1 + df, color, fill);
};
const angL = (v: P, p: P, q: P, r: number, text: string, color: string = C.red, size = 11): E => {
  const { d1, df } = angParts(v, p, q);
  const m = pt(v[0], v[1], r, d1 + df / 2);
  return lb(m[0], m[1] + 3, text, size, color, 'middle', true);
};
const rt = (v: P, p: P, q: P, s = 8): E => {
  const a = dist(v, p), b = dist(v, q);
  const u: P = [(p[0] - v[0]) / a * s, (p[1] - v[1]) / a * s];
  const w: P = [(q[0] - v[0]) / b * s, (q[1] - v[1]) / b * s];
  return pg([v, [v[0] + u[0], v[1] + u[1]], [v[0] + u[0] + w[0], v[1] + u[1] + w[1]], [v[0] + w[0], v[1] + w[1]]], C.ink, 'rgba(255,255,255,0)');
};
// 辺のラベル（辺の中点から、向きを90度まわした方へ off だけはなす）
const sl = (p: P, q: P, text: string, off: number, color: string = C.ink, size = 12): E => {
  const m = mid(p, q); const L = dist(p, q);
  const n: P = [-(q[1] - p[1]) / L, (q[0] - p[0]) / L];
  return lb(m[0] + n[0] * off, m[1] + n[1] * off + 3, text, size, color, 'middle', true);
};
// 等しい辺の印（しるし）
const tick = (p: P, q: P, n = 1, color: string = C.red): E[] => {
  const m = mid(p, q); const L = dist(p, q);
  const u: P = [(q[0] - p[0]) / L, (q[1] - p[1]) / L];
  const v: P = [-u[1], u[0]];
  const out: E[] = [];
  for (let k = 0; k < n; k++) {
    const o = (k - (n - 1) / 2) * 5;
    const c: P = [m[0] + u[0] * o, m[1] + u[1] * o];
    out.push(ln(c[0] - v[0] * 5, c[1] - v[1] * 5, c[0] + v[0] * 5, c[1] + v[1] * 5, color, false, 2));
  }
  return out;
};
const v3 = (A: P, B: P, Cc: P, n: string[] = ['A', 'B', 'C']): E[] => [V(n[0], A, -10, 9), V(n[1], B, 10, 9), V(n[2], Cc, 0, -9)];
const circ = (o: P, r: number, fill: string = FILL.warm, color: string = C.gray): E => ci(o[0], o[1], r, undefined, color, fill);

// ══════════════════════════════════════════════
// 49 三角形の合同条件
// ══════════════════════════════════════════════
const gA: P = [30, 118], gB: P = [120, 118], gC: P = [90, 38];
const gTri = (d: number, color: string = C.gray, names: string[] = ['A', 'B', 'C']): E[] => [tri(sh(gA, d), sh(gB, d), sh(gC, d), color), ...v3(sh(gA, d), sh(gB, d), sh(gC, d), names)];

const goudou: DiagramFigure = show([
  S('「合同（ごうどう）」とは、形も大きさもまったく同じで、ぴったり重ね合わせられる図形のことです。三角形ABCと三角形DEFがぴったり重なるなら、この2つは合同です。',
    [...gTri(0), ...gTri(150, C.blue, ['D', 'E', 'F']), ar(126, 84, 174, 84, C.main, true)], '△ABC ≡ △DEF（ぴったり重なる）', '≡ は「合同」の記号', C.blue, FILL.blue),
  S('❓ 合同かどうかを調べるとき、辺3つと角3つ、あわせて6つ全部を比べないといけないの？ 実は全部は要りません。三角形は少ない情報で形が1つに決まるからです。',
    [tri(sh(gA, 90), sh(gB, 90), sh(gC, 90)), ...v3(sh(gA, 90), sh(gB, 90), sh(gC, 90)), sl(sh(gA, 90), sh(gB, 90), 'c', -12, C.green), sl(sh(gB, 90), sh(gC, 90), 'a', 12, C.green), sl(sh(gC, 90), sh(gA, 90), 'b', 12, C.green),
      angL(sh(gA, 90), sh(gB, 90), sh(gC, 90), 27, '∠A', C.red), angL(sh(gB, 90), sh(gC, 90), sh(gA, 90), 27, '∠B', C.red), angL(sh(gC, 90), sh(gA, 90), sh(gB, 90), 22, '∠C', C.red)],
    '辺3つ＋角3つ＝6つの部分', '全部そろえなくても、少しでOK', C.gray, FILL.gray),
  S('❓ なぜ少しで決まるの？ 3本の棒をつないで三角形をつくると、つなぎ目が動かず形は1つに決まります。ところが4本の棒でつくった四角形は、つなぎ目が動いて形が変わります。三角形は「固い形」だから、条件が少なくてすむのです。',
    [tri([30, 128], [130, 128], [80, 48]), lb(80, 142, '三角形：動かない', 11, C.green, 'middle', true), pg([[180, 128], [270, 128], [270, 60], [180, 60]], C.gray, FILL.warm), seg([180, 128], [270, 128], C.gray), pg([[180, 128], [270, 128], [292, 60], [202, 60]], C.red, 'rgba(0,0,0,0)'), lb(235, 142, '四角形：かたむく', 11, C.red, 'middle', true)],
    '三角形は形が1つに決まる', '（3本の棒は動かせない）', C.green, FILL.green),
  S('条件① 3組の辺がそれぞれ等しい。3本の辺の長さが決まれば、三角形は1つに決まるので、ぴったり重なります。しるし（｜、｜｜、｜｜｜）は「同じ長さ」を表します。',
    (() => { const a1 = gA, b1 = gB, c1 = gC, a2 = sh(gA, 150), b2 = sh(gB, 150), c2 = sh(gC, 150); return [tri(a1, b1, c1, C.blue), tri(a2, b2, c2, C.blue), ...tick(a1, b1, 1), ...tick(b1, c1, 2), ...tick(c1, a1, 3), ...tick(a2, b2, 1), ...tick(b2, c2, 2), ...tick(c2, a2, 3)]; })(),
    '3辺がそれぞれ等しい', '｜＝｜　｜｜＝｜｜　｜｜｜＝｜｜｜', C.blue, FILL.blue),
  S('❓ では2辺だけが等しいときは？ 2辺の長さを決めても、そのあいだの開き具合（角）が自由だと、開き方しだいで3つ目の辺がちがう三角形ができてしまいます。',
    (() => { const A: P = [80, 128], B: P = [180, 128]; const C1 = pt(80, 128, 65, 40), C2 = pt(80, 128, 65, 85); return [seg(A, B), seg(A, C1, C.blue), seg(B, C1, C.blue), seg(A, C2, C.red), seg(B, C2, C.red, true), ...v3(A, B, C1).slice(0, 2), lb(C1[0] + 10, C1[1] - 6, 'C', 12, C.blue, 'middle', true), lb(C2[0] - 8, C2[1] - 6, "C'", 12, C.red, 'middle', true), ...tick(A, C1, 2), ...tick(A, C2, 2)]; })(),
    '2辺が同じでも角しだいで別の形', 'BC と BC′ の長さがちがう', C.red, FILL.red),
  S('条件② 2組の辺とその間の角がそれぞれ等しい。❓ なぜ「間の角」なら1つに決まるの？ 2辺とその間の角の大きさが決まると、2辺の先どうしをむすぶ3つ目の辺の長さも1つに決まるからです。',
    (() => { const A: P = [70, 128], B: P = [190, 128]; const Cc = pt(70, 128, 75, 55); return [tri(A, B, Cc, C.blue), ...tick(A, B, 1), ...tick(A, Cc, 2), ang(A, B, Cc, 22), angL(A, B, Cc, 36, '間の角', C.red, 10), ...v3(A, B, Cc)]; })(),
    '2辺とその間の角', '3つ目の辺も自動で決まる', C.blue, FILL.blue),
  S('❓ 間ではない角が等しいだけだと、どうなるの？ たとえば角Aと、辺AB（110）、辺BC（70）を決めます。点Bを中心に半径70の円をかくと、角Aの辺と2か所で交わり、C1とC2の2通りの三角形ができてしまいます。だから「その間の角」でなければ合同とは言えません。',
    (() => { const A: P = [40, 128], B: P = [150, 128]; const dirp = pt(40, 128, 150, 35); const C1 = pt(40, 128, 60.4, 35), C2 = pt(40, 128, 120.4, 35); return [ci(B[0], B[1], 70, undefined, C.gray, 'rgba(0,0,0,0)'), seg(A, B), seg(A, dirp, C.gray, true), tri(A, B, C1, C.blue, 'rgba(2,132,199,0.15)'), tri(A, B, C2, C.red, 'rgba(225,29,72,0.10)'), dot(C1, C.blue), dot(C2, C.red), V('A', A, -8, 4), V('B', B, 8, 4), V('C1', C1, -12, -2, C.blue), V('C2', C2, 4, -8, C.red), ang(A, B, C2, 20, C.purple, PU)]; })(),
    '間ではない角 → 2通りできる', '角A（35°）は AB と BC の間にない', C.red, FILL.red),
  S('条件③ 1組の辺とその両端の角がそれぞれ等しい。❓ なぜ1つに決まるの？ 辺ABの両はしから、決まった角度で2本の線をのばすと、交わる点は1か所だけです。その点がCなので、三角形が1つに決まります。',
    (() => { const A: P = [60, 128], B: P = [210, 128]; const Cc: P = [148.8, 22]; return [seg(A, B), seg(A, Cc, C.blue, true), seg(B, Cc, C.blue, true), tri(A, B, Cc, C.blue, 'rgba(2,132,199,0.10)'), ang(A, B, Cc, 24), ang(B, Cc, A, 24), angL(A, B, Cc, 38, '50°', C.red), angL(B, Cc, A, 38, '60°', C.red), ...tick(A, B, 1), ...v3(A, B, Cc)]; })(),
    '1辺とその両端の角', '2本の線が交わるのは1点だけ', C.blue, FILL.blue),
  S('❓ 「両端」の角ではなく、1辺と、ほかの場所にある2つの角が等しいときは？ 三角形の内角の和は180°なので、2つの角が分かれば3つ目の角は「180°−2つの角」で決まります。だから両端の角に言いかえられて、条件③が使えます。',
    (() => { const A: P = [60, 128], B: P = [210, 128]; const Cc: P = [148.8, 22]; return [tri(A, B, Cc, C.blue), ang(A, B, Cc, 22), ang(B, Cc, A, 22), ang(Cc, A, B, 20, C.green, GR), angL(A, B, Cc, 36, '50°', C.red), angL(B, Cc, A, 36, '60°', C.red), angL(Cc, A, B, 34, '？', C.green), ...v3(A, B, Cc)]; })(),
    '180° − 50° − 60° ＝ 70°', '2角が決まれば3つ目も決まる', C.green, FILL.green),
  S('直角三角形には、専用の合同条件が2つあります。1つ目は「斜辺（しゃへん）と1つの鋭角（えいかく）が等しい」。❓ なぜ使えるの？ 直角の90°が最初から1つ分かっているので、斜辺の両端の角が2つとも決まり、条件③と同じ形になるからです。',
    (() => { const p1: P = [50, 125], p2: P = [130, 125], p3: P = [50, 45]; const q1: P = [190, 125], q2: P = [270, 125], q3: P = [190, 45]; return [tri(p1, p2, p3, C.blue), tri(q1, q2, q3, C.blue), rt(p1, p2, p3), rt(q1, q2, q3), ...tick(p2, p3, 1), ...tick(q2, q3, 1), ang(p2, p1, p3, 20), ang(q2, q1, q3, 20), lb(p1[0] + 12, p1[1] - 12, '90°', 10, C.ink, 'middle', true), lb(q1[0] + 12, q1[1] - 12, '90°', 10, C.ink, 'middle', true)]; })(),
    '斜辺と1つの鋭角', '直角＋鋭角 → 斜辺の両端の角がそろう', C.purple, FILL.purple),
  S('2つ目は「斜辺と他の1辺が等しい」。❓ なぜ使えるの？ 直角三角形は三平方の定理で、斜辺と1辺が分かれば残りの1辺も決まります。たとえば斜辺5、1辺3なら、もう1辺は 5²−3²＝16 より4。3辺がそろうので、条件①と同じです。',
    (() => { const a: P = [70, 125], b: P = [190, 125], c: P = [70, 35]; return [tri(a, b, c, C.blue), rt(a, b, c), sl(b, c, '5', 12, C.red, 14), sl(c, a, '3', -12, C.red, 14), sl(a, b, '？', -12, C.green, 14), ...v3(a, b, c, ['C', 'B', 'A'])]; })(),
    '5² − 3² ＝ 16 → 残りは4', '3辺がそろう → 条件①', C.purple, FILL.purple),
  S('合同を使う証明の流れを見てみましょう。四角形ABCDで AB＝CB、AD＝CD とします。対角線BDを引くと、△ABDと△CBDで、AB＝CB、AD＝CD、BDは共通。3組の辺がそれぞれ等しいので、△ABD≡△CBD です。',
    (() => { const B: P = [160, 14], Dd: P = [160, 136], A: P = [100, 84], Cc: P = [220, 84]; return [hl([A, B, Dd], BL), hl([Cc, B, Dd], GR), seg(B, Dd, C.ink), ...tick(A, B, 1), ...tick(Cc, B, 1), ...tick(A, Dd, 2), ...tick(Cc, Dd, 2), ...tick(B, Dd, 3), V('A', A, -10, 4), V('C', Cc, 10, 4), V('B', B, 12, 6), V('D', Dd, 12, 2)]; })(),
    'AB＝CB、AD＝CD、BD共通', '3辺がそれぞれ等しい → △ABD≡△CBD', C.blue, FILL.blue),
  S('❓ 合同が分かると何がうれしいの？ 合同な図形は、対応する辺や角がすべて等しくなります。ぴったり重なるので、重なる辺どうし・角どうしは同じ大きさだからです。だから ∠A＝∠C と言えます。証明はこの順番（条件を言う→合同→対応する角）で書きます。',
    (() => { const B: P = [160, 14], Dd: P = [160, 136], A: P = [100, 84], Cc: P = [220, 84]; return [hl([A, B, Dd], BL), hl([Cc, B, Dd], GR), seg(B, Dd, C.ink), ang(A, B, Dd, 18), ang(Cc, Dd, B, 18), V('A', A, -10, 4), V('C', Cc, 10, 4), V('B', B, 12, 6), V('D', Dd, 12, 2)]; })(),
    '合同 → 対応する角は等しい', '∠A ＝ ∠C', C.green, FILL.green),
  S('まとめです。一般の三角形の合同条件は3つ。①3辺 ②2辺とその間の角 ③1辺とその両端の角。直角三角形には、④斜辺と1つの鋭角 ⑤斜辺と他の1辺が加わります。どれも「三角形が1つに決まる」条件で、位置の指定（間・両端）が大切です。',
    [bx(20, 8, 280, 28, '① 3辺がそれぞれ等しい', C.blue, FILL.blue, 13), bx(20, 42, 280, 28, '② 2辺とその間の角', C.blue, FILL.blue, 13), bx(20, 76, 280, 28, '③ 1辺とその両端の角', C.blue, FILL.blue, 13), bx(20, 110, 135, 30, '④ 斜辺と鋭角', C.purple, FILL.purple, 12), bx(165, 110, 135, 30, '⑤ 斜辺と他の1辺', C.purple, FILL.purple, 12)],
    '証明では、使った条件名を書く', undefined, C.green, FILL.green),
], '三角形の合同条件');

// ══════════════════════════════════════════════
// 50 三角形の相似条件
// ══════════════════════════════════════════════
const sA: P = [30, 125], sB: P = [90, 125], sC: P = [30, 80]; // 3:4:5
const sA2: P = [140, 125], sB2: P = [260, 125], sC2: P = [140, 35];
const soujiA: P = [40, 130], soujiB: P = [180, 130];
const soujiC = pt(40, 130, 129, 50);
const soujiB2: P = [110, 130];
const soujiC2 = pt(40, 130, 64.5, 50);
const ADE_A: P = [150, 18], ADE_B: P = [60, 132], ADE_C: P = [250, 132];
const ADE_D = lerp(ADE_A, ADE_B, 0.5), ADE_E = lerp(ADE_A, ADE_C, 0.5);
const souji: DiagramFigure = show([
  S('「相似（そうじ）」とは、形が同じで大きさがちがう図形のことです。拡大や縮小でぴったり重なります。小さい三角形を2倍にのばすと大きい三角形になり、これが相似です。記号は ∽ を使います。',
    [tri(sA, sB, sC, C.blue), tri(sA2, sB2, sC2, C.blue), ar(96, 100, 134, 100, C.main, true), lb(200, 138, '2倍に拡大', 11, C.main, 'middle', true)],
    '△ABC ∽ △DEF', '形は同じ、大きさがちがう', C.blue, FILL.blue),
  S('❓ 形が同じって、何がそろっていること？ 3組の角がそれぞれ等しく、しかも3組の辺の比がすべて等しいことです。拡大してもコピーしても角度は変わらず、辺は同じ割合でのびるからです。',
    [tri(sA, sB, sC, C.blue), tri(sA2, sB2, sC2, C.blue), ang(sB, sA, sC, 14), ang(sB2, sA2, sC2, 14), ang(sC, sB, sA, 14, C.green, GR), ang(sC2, sB2, sA2, 14, C.green, GR), sl(sA, sB, '4', -10, C.main), sl(sC, sA, '3', -10, C.main), sl(sA2, sB2, '8', -10, C.main), sl(sC2, sA2, '6', -10, C.main), sl(sB, sC, '5', 10, C.main), sl(sB2, sC2, '10', 10, C.main)],
    '角がそろう ＋ 辺の比がそろう', undefined, C.blue, FILL.blue),
  S('❓ 合同のときと同じで、6つ全部を調べなくてもよいの？ はい。合同と同じく、三角形は少ない情報で形が決まるので、相似も3つの条件のどれか1つで言えます。',
    [tri(sA, sB, sC, C.gray), tri(sA2, sB2, sC2, C.gray), lb(160, 60, '？', 30, C.red, 'middle', true)],
    '相似条件は全部で3つ', '調べる数は少なくてOK', C.gray, FILL.gray),
  S('条件① 3組の辺の比がすべて等しい。3、4、5 の三角形と、6、8、10 の三角形は、どの辺も2倍になっているので相似です（3：6＝4：8＝5：10＝1：2）。',
    [tri(sA, sB, sC, C.blue), tri(sA2, sB2, sC2, C.blue), sl(sA, sB, '4', -10, C.red), sl(sC, sA, '3', -10, C.red), sl(sB, sC, '5', 10, C.red), sl(sA2, sB2, '8', -10, C.red), sl(sC2, sA2, '6', -10, C.red), sl(sB2, sC2, '10', 10, C.red)].map((e) => e),
    '3辺の比が等しい', '3：6 ＝ 4：8 ＝ 5：10 ＝ 1：2', C.blue, FILL.blue),
  S('条件② 2組の辺の比が等しく、その間の角が等しい。角Aが60°で、AB：DE＝AC：DF＝1：2 のとき、はさむ角も同じなので、残りの辺BCとEFの比も自然に1：2に決まります。',
    (() => { const a: P = [30, 125], b: P = [90, 125], c = pt(30, 125, 40, 60); const a2: P = [140, 125], b2: P = [260, 125], c2 = pt(140, 125, 80, 60); return [tri(a, b, c, C.blue), tri(a2, b2, c2, C.blue), ang(a, b, c, 14), ang(a2, b2, c2, 22), sl(a, b, '6', -10, C.red), sl(a, c, '4', 10, C.red), sl(a2, b2, '12', -10, C.red), sl(a2, c2, '8', 10, C.red)]; })(),
    '2辺の比とその間の角', '6：12 ＝ 4：8 ＝ 1：2、間の角60°', C.blue, FILL.blue),
  S('❓ なぜ「その間」の角でなければいけないの？ 間ではない角だと、合同のときと同じで三角形が2通りできてしまい、形が1つに決まらないからです。図のC1とC2は、辺と角は同じ条件でも形がちがいます。',
    (() => { const A: P = [40, 130], B: P = [150, 130]; const C1 = pt(40, 130, 60.4, 35), C2 = pt(40, 130, 120.4, 35); return [tri(A, B, C1, C.blue, 'rgba(2,132,199,0.15)'), tri(A, B, C2, C.red, 'rgba(225,29,72,0.10)'), dot(C1, C.blue), dot(C2, C.red), V('C1', C1, -12, -2, C.blue), V('C2', C2, 4, -8, C.red)]; })(),
    '間でない角では形が決まらない', undefined, C.red, FILL.red),
  S('条件③ 2組の角がそれぞれ等しい。❓ 辺の比を調べなくてよいのはなぜ？ 三角形の内角の和は180°なので、2つの角が決まれば3つ目の角も決まり、3つの角がそろうからです。角がそろえば形は同じ（相似）です。',
    (() => { const a: P = [30, 125], b: P = [100, 125], c: P = [46, 62]; const cc = pt(30, 125, 80, 60); const a2: P = [150, 125]; const b2: P = [270, 125]; const c3 = pt(150, 125, 100, 60); void c; void cc; void b; void a; void b2; return [tri([30, 125], [100, 125], pt(30, 125, 60, 60), C.blue), tri(a2, b2, c3, C.blue), ang([30, 125], [100, 125], pt(30, 125, 60, 60), 14), ang(a2, b2, c3, 14), ang([100, 125], pt(30, 125, 60, 60), [30, 125], 14, C.green, GR), ang(b2, c3, a2, 14, C.green, GR)]; })(),
    '2組の角が等しい → 相似', '3つ目の角も自動で等しい', C.blue, FILL.blue),
  S('❓ 角が等しいと、辺の比まで等しくなるのはなぜ？ 大きい三角形の中に、同じ角度の小さい三角形を重ねてみます。角が同じなら辺BCと辺B′C′は平行になり、小さい三角形は大きい三角形をそのまま縮めたものになるからです。',
    [tri(soujiA, soujiB, soujiC, C.blue), tri(soujiA, soujiB2, soujiC2, C.red, 'rgba(225,29,72,0.16)'), ang(soujiA, soujiB, soujiC, 18, C.purple, PU), V('A', soujiA, -10, 4), V('B', soujiB, 10, 6), V('C', soujiC, 8, -6), V("B'", soujiB2, 0, 14, C.red), V("C'", soujiC2, -12, 0, C.red)],
    '同じ角 → BC ∥ B′C′ → 縮小コピー', undefined, C.blue, FILL.blue),
  S('いちばんよく使うのは条件③です。三角形ABCで DE∥BC のとき、△ADEと△ABCは、角Aが共通です。',
    [tri(ADE_A, ADE_B, ADE_C, C.gray), seg(ADE_D, ADE_E, C.blue, false, 2.4), ang(ADE_A, ADE_D, ADE_E, 18, C.purple, PU), ...v3(ADE_A, ADE_B, ADE_C).map((e) => e), V('D', ADE_D, -10, 4), V('E', ADE_E, 10, 4)],
    '共通の角 ∠A', '① 1組目の角が等しい', C.purple, FILL.purple),
  S('❓ 2組目の角は？ 平行線の同位角は等しいので、∠ADE＝∠ABC です。❓ なぜ同位角が等しいの？ DEとBCが平行なので、直線ABが2本の平行線に同じ角度で交わるからです。これで2組の角が等しいので △ADE ∽ △ABC です。',
    [tri(ADE_A, ADE_B, ADE_C, C.gray), seg(ADE_D, ADE_E, C.blue, false, 2.4), ang(ADE_D, ADE_A, ADE_E, 15, C.red), ang(ADE_B, ADE_D, ADE_C, 15, C.red), ang(ADE_A, ADE_D, ADE_E, 18, C.purple, PU), ...v3(ADE_A, ADE_B, ADE_C), V('D', ADE_D, -10, 4), V('E', ADE_E, 10, 4)],
    '同位角 ∠ADE ＝ ∠ABC', '② 2組目の角が等しい', C.red, FILL.red),
  S('直角三角形の直角の頂点から斜辺に垂線をおろすと、3つの三角形ができます。△ABH と △CBA は、直角と共通の角Bで2角が等しく、相似です。同じく △CAH と △CBA も、直角と共通の角Cで相似。だから3つとも相似です。',
    (() => { const B: P = [50, 132], Cc: P = [270, 132], A: P = [110, 34], H: P = [110, 132]; return [tri(A, B, Cc, C.gray), hl([A, B, H], BL, C.blue), seg(A, H, C.ink, true), rt(A, B, Cc), rt(H, A, Cc), ang(B, A, H, 22, C.purple, PU), V('A', A, 0, -9), V('B', B, -10, 8), V('C', Cc, 10, 8), V('H', H, 0, 12)]; })(),
    '直角＋共通の角 → 2角が等しい', '△ABH ∽ △CBA ∽ △CAH', C.purple, FILL.purple),
  S('相似は「対応する頂点の順」に書く決まりです。△ABC ∽ △DEF なら、A↔D、B↔E、C↔F が対応します。❓ なぜ順番が大事？ 順番から、どの辺とどの辺が対応するか（AB：DE など）がすぐ読み取れるからです。',
    [tri(sA, sB, sC, C.blue), tri(sA2, sB2, sC2, C.blue), V('A', sA, -8, 10), V('B', sB, 8, 10), V('C', sC, -8, -4), V('D', sA2, -8, 10), V('E', sB2, 8, 10), V('F', sC2, -8, -4), lb(160, 14, 'A↔D　B↔E　C↔F', 11, C.green, 'middle', true)],
    '△ABC ∽ △DEF の順に書く', 'AB：DE ＝ BC：EF ＝ CA：FD', C.green, FILL.green),
  S('まとめです。相似条件は ①3辺の比が等しい ②2辺の比とその間の角が等しい ③2角が等しい（最頻出）。共通角・平行線の角・直角・円周角から2つの角を探すのが、入試での基本の使い方です。',
    [bx(20, 10, 280, 32, '① 3辺の比が等しい', C.blue, FILL.blue, 13), bx(20, 50, 280, 32, '② 2辺の比とその間の角', C.blue, FILL.blue, 13), bx(20, 90, 280, 34, '③ 2角が等しい（最頻出）', C.red, FILL.red, 14)],
    '相似は対応する頂点の順に書く', undefined, C.green, FILL.green),
], '三角形の相似条件');

// ══════════════════════════════════════════════
// 51 相似比と面積比・体積比
// ══════════════════════════════════════════════
const grid = (x: number, y: number, n: number, u: number, color: string = C.gray): E[] => {
  const out: E[] = [];
  for (let i = 1; i < n; i++) { out.push(ln(x + i * u, y, x + i * u, y + n * u, color, true, 1)); out.push(ln(x, y + i * u, x + n * u, y + i * u, color, true, 1)); }
  return out;
};
const cube = (x: number, y: number, s: number, color: string = C.blue, fill: string = FILL.blue): E[] => {
  const o = s * 0.35;
  return [pg([[x, y + s], [x + s, y + s], [x + s, y], [x, y]], color, fill), pg([[x, y], [x + o, y - o], [x + s + o, y - o], [x + s, y]], color, FILL.warm), pg([[x + s, y], [x + s + o, y - o], [x + s + o, y + s - o], [x + s, y + s]], color, 'rgba(2,132,199,0.30)')];
};
const sq2: E[] = [pg([[30, 60], [90, 60], [90, 120], [30, 120]], C.blue, FILL.blue), ...grid(30, 60, 2, 30, C.blue)];
const sq3: E[] = [pg([[150, 30], [240, 30], [240, 120], [150, 120]], C.blue, FILL.blue), ...grid(150, 30, 3, 30, C.blue)];
const conePts = { A: [160, 14] as P, B: [70, 132] as P, Cc: [250, 132] as P };
const menseki: DiagramFigure = show([
  S('相似な図形では、辺の長さの比を「相似比（そうじひ）」と言います。たとえば1辺が2の正方形と、1辺が3の正方形は、相似比が 2：3 です。',
    [...sq2, ...sq3, lb(60, 132, '1辺 2', 11, C.main, 'middle', true), lb(195, 132, '1辺 3', 11, C.main, 'middle', true)],
    '相似比 ＝ 長さの比 ＝ 2：3', undefined, C.blue, FILL.blue),
  S('❓ では面積の比は？ 1マスを面積1とすると、小さい正方形は 2×2＝4マス、大きい正方形は 3×3＝9マス。面積の比は 4：9 で、相似比 2：3 とはちがいます。',
    [...sq2, ...sq3, lb(60, 92, '4マス', 12, C.red, 'middle', true), lb(195, 78, '9マス', 12, C.red, 'middle', true)],
    '面積比 ＝ 4：9', '2×2 ＝ 4、3×3 ＝ 9', C.red, FILL.red),
  S('❓ なぜ2乗になるの？ 面積は「たて×よこ」です。相似比が m：n なら、たても m：n、よこも m：n。その両方がのびるので、面積は m×m と n×n の比、つまり m²：n² になります。',
    [pg([[40, 70], [100, 70], [100, 120], [40, 120]], C.blue, FILL.blue), ar(40, 62, 100, 62, C.red), lb(70, 54, 'よこ ×m', 10, C.red, 'middle', true), ar(32, 70, 32, 120, C.green), lb(18, 96, 'たて', 10, C.green, 'middle', true), lb(160, 96, '→', 22, C.ink, 'middle', true), lb(240, 90, 'よこ×たて\n＝ m × m ＝ m²', 14, C.red, 'middle', true)],
    '面積比 ＝ m² : n²', '（長さの比を2乗する）', C.red, FILL.red),
  S('三角形など、どんな図形でも同じです。三角形の面積は「底辺×高さ÷2」で、相似なら底辺も高さも同じ割合（2：3）になります。すると面積比は (2×2)：(3×3)＝4：9 です。',
    [tri([30, 120], [100, 120], [50, 70], C.blue), tri([150, 120], [255, 120], [180, 42], C.blue), lb(65, 132, '底辺2・高さ2', 10, C.main, 'middle', true), lb(200, 132, '底辺3・高さ3', 10, C.main, 'middle', true)],
    '(2×2) : (3×3) ＝ 4 : 9', '÷2 はどちらにもあるので比は変わらない', C.blue, FILL.blue),
  S('体積はどうでしょう。1辺2の立方体と1辺3の立方体で比べます。相似比は 2：3 です。',
    [...cube(40, 80, 50), ...cube(150, 55, 75), lb(65, 143, '1辺 2', 11, C.main, 'middle', true), lb(200, 143, '1辺 3', 11, C.main, 'middle', true)],
    '相似比 ＝ 2：3', undefined, C.blue, FILL.blue),
  S('❓ 体積の比は？ 小さい立方体は 2×2×2＝8個の1cm³、大きい立方体は 3×3×3＝27個です。体積比は 8：27。❓ なぜ3乗なの？ 体積は「たて×よこ×高さ」の3方向で、その3つとも m倍になるからです。',
    [...cube(40, 80, 50), ...cube(150, 55, 75), lb(65, 143, '2×2×2 ＝ 8', 11, C.red, 'middle', true), lb(200, 143, '3×3×3 ＝ 27', 11, C.red, 'middle', true)],
    '体積比 ＝ 8 : 27', 'たて・よこ・高さの3方向 → 3乗', C.red, FILL.red),
  S('まとめると、相似比が m：n のとき、長さの比は m：n、面積の比は m²：n²、体積の比は m³：n³です。「何の量を比べているか」を見分けることが大切です。表面積は面積なので2乗、容積や重さ（体積に比例）は3乗です。',
    [bx(20, 12, 280, 34, '長さ　　　m : n', C.blue, FILL.blue, 15), bx(20, 54, 280, 34, '面積　　　m² : n²', C.red, FILL.red, 15), bx(20, 96, 280, 34, '体積　　　m³ : n³', C.purple, FILL.purple, 15)],
    '表面積 → 2乗、体積・重さ → 3乗', undefined, C.green, FILL.green),
  S('逆向きの問題です。面積比が 9：16 のとき相似比は？ 2回かけて9になる数は3、2回かけて16になる数は4なので、相似比は 3：4 です（平方根をとる）。',
    [bx(20, 30, 120, 40, '面積比\n9 : 16', C.red, FILL.red, 14), ar(145, 50, 175, 50, C.ink), bx(180, 30, 120, 40, '相似比\n3 : 4', C.blue, FILL.blue, 14), lb(160, 100, '3×3＝9、4×4＝16 だから', 12, C.gray, 'middle', true)],
    '面積比 → 平方根 → 相似比', '9：16 → 3：4', C.red, FILL.red),
  S('体積比から相似比を出すときは、3回かけて元の数になる数をさがします。体積比が 8：27 なら、2×2×2＝8、3×3×3＝27 なので相似比は 2：3です。',
    [bx(20, 30, 120, 40, '体積比\n8 : 27', C.purple, FILL.purple, 14), ar(145, 50, 175, 50, C.ink), bx(180, 30, 120, 40, '相似比\n2 : 3', C.blue, FILL.blue, 14), lb(160, 100, '2×2×2＝8、3×3×3＝27 だから', 12, C.gray, 'middle', true)],
    '体積比 → 3乗根 → 相似比', '8：27 → 2：3', C.purple, FILL.purple),
  S('例題：相似比が 2：3 の立体で、小さいほうの体積が16cm³のとき、大きいほうは？ ❓ まず体積比は？ 2³：3³＝8：27。❓ 8が16にあたるなら、1あたりは 16÷8＝2。だから大きいほうは 2×27＝54cm³ です。',
    [bx(20, 20, 120, 36, '小 : 大 ＝ 8 : 27', C.purple, FILL.purple, 13), bx(20, 70, 120, 36, '16 : ？', C.red, FILL.red, 14), ar(80, 58, 80, 68, C.ink), lb(230, 55, '1あたり\n16 ÷ 8 ＝ 2', 13, C.blue, 'middle', true), lb(230, 100, '2 × 27 ＝ 54', 15, C.green, 'middle', true)],
    '大きいほう ＝ 54cm³', '検算：54÷16 ＝ 27÷8 ✓', C.green, FILL.green),
  S('円すいを、高さの半分のところで底面に平行に切ります。上にできる小さい円すいは、もとの円すいと相似で、相似比は 1：2です。',
    [tri(conePts.A, conePts.B, conePts.Cc, C.blue), hl([conePts.A, lerp(conePts.A, conePts.B, 0.5), lerp(conePts.A, conePts.Cc, 0.5)], 'rgba(225,29,72,0.28)', C.red), seg(lerp(conePts.A, conePts.B, 0.5), lerp(conePts.A, conePts.Cc, 0.5), C.red, false, 2.4), V('小', [160, 55], 0, 0, C.red)],
    '小さい円すい：もと ＝ 1：2', undefined, C.blue, FILL.blue),
  S('❓ 上の小さい円すいと、下の残りの立体（円すい台）の体積の比は？ 相似比 1：2 なので、体積比は 1³：2³＝1：8。もとの円すいを8として、小さい円すいが1なので、残りは 8−1＝7。だから小さい円すい：円すい台＝1：7です。',
    [tri(conePts.A, conePts.B, conePts.Cc, C.blue), hl([conePts.A, lerp(conePts.A, conePts.B, 0.5), lerp(conePts.A, conePts.Cc, 0.5)], 'rgba(225,29,72,0.28)', C.red), seg(lerp(conePts.A, conePts.B, 0.5), lerp(conePts.A, conePts.Cc, 0.5), C.red, false, 2.4), lb(160, 52, '1', 16, C.red, 'middle', true), lb(160, 108, '7', 18, C.blue, 'middle', true)],
    '1 : 8 → 上1、下7', '8 − 1 ＝ 7', C.red, FILL.red),
], '相似比と面積比・体積比');

// ══════════════════════════════════════════════
// 52 平行線と線分の比
// ══════════════════════════════════════════════
const hA: P = [150, 18], hB: P = [60, 132], hC: P = [250, 132];
const hD = lerp(hA, hB, 3 / 5), hE = lerp(hA, hC, 3 / 5);
const heikou: DiagramFigure = show([
  S('三角形ABCで、辺AB上に点D、辺AC上に点Eをとり、DE∥BC（DEとBCが平行）にします。AD＝3、DB＝2、BC＝10 のとき、DEの長さを求めてみましょう。',
    [tri(hA, hB, hC), seg(hD, hE, C.blue, false, 2.4), ...v3(hA, hB, hC), V('D', hD, -10, 2), V('E', hE, 10, 2), sl(hA, hD, '3', 10, C.red), sl(hD, hB, '2', 10, C.red), sl(hB, hC, '10', -11, C.red)],
    'DE // BC のとき DE ＝ ？', undefined, C.blue, FILL.blue),
  S('❓ 平行だと何が言えるの？ 小さい三角形ADEと大きい三角形ABCが「相似」になります。この相似を使うと、辺の比がぜんぶ分かります。',
    [tri(hA, hB, hC), hl([hA, hD, hE], BL, C.blue), seg(hD, hE, C.blue, false, 2.4), ...v3(hA, hB, hC), V('D', hD, -10, 2), V('E', hE, 10, 2)],
    '△ADE ∽ △ABC', undefined, C.blue, FILL.blue),
  S('❓ なぜ相似と言えるの？ 相似条件の「2角が等しい」で示せます。①角Aが共通。②DE∥BCなので同位角が等しく、∠ADE＝∠ABC。2組の角が等しいので相似です。',
    [tri(hA, hB, hC), hl([hA, hD, hE], BL, C.blue), ang(hA, hD, hE, 18, C.purple, PU), ang(hD, hA, hE, 14), ang(hB, hD, hC, 14), ...v3(hA, hB, hC), V('D', hD, -10, 2), V('E', hE, 10, 2)],
    '共通角 ＋ 同位角 → 相似', '2角が等しい', C.purple, FILL.purple),
  S('❓ 相似だと、何が使えるの？ 相似な図形は、対応する辺の比がすべて等しくなります。対応は A↔A、D↔B、E↔C なので、AD：AB ＝ AE：AC ＝ DE：BC が成り立ちます。',
    [tri(hA, hB, hC), hl([hA, hD, hE], BL, C.blue), seg(hD, hE, C.red, false, 2.4), seg(hB, hC, C.red, false, 2.4), sl(hA, hD, 'AD', 14, C.blue, 11), sl(hA, hB, 'AB', 14, C.green, 11)],
    'AD : AB ＝ AE : AC ＝ DE : BC', '対応する辺の比は等しい', C.blue, FILL.blue),
  S('❓ AD：AB の AB は、何の長さ？ 気をつけたいのは、大きい三角形の辺は AB＝AD＋DB＝3＋2＝5 だということです。だから AD：AB＝3：5 です（3：2 ではありません）。',
    [tri(hA, hB, hC), hl([hA, hD, hE], BL, C.blue), ln(hA[0] - 30, hA[1] + 5, hB[0] - 30, hB[1] + 5, C.green, false, 2.6), ln(hA[0] - 20, hA[1] + 5, hD[0] - 20, hD[1] + 5, C.blue, false, 2.6), lb(50, 58, 'AB＝5', 11, C.green, 'middle', true), lb(76, 30, 'AD＝3', 11, C.blue, 'middle', true)],
    'AB ＝ 3 ＋ 2 ＝ 5', 'AD : AB ＝ 3 : 5', C.green, FILL.green),
  S('❓ DEの長さは？ AD：AB＝DE：BC なので 3：5＝DE：10。内側の比が同じなら、外側どうしのかけ算も同じになるので、DE×5＝3×10。DE＝30÷5＝6。BCが10で、それを 3/5 にした長さです。',
    [tri(hA, hB, hC), hl([hA, hD, hE], BL, C.blue), seg(hD, hE, C.red, false, 3), sl(hD, hE, '6', 12, C.red, 14), sl(hB, hC, '10', -11, C.gray, 12)],
    '3 : 5 ＝ DE : 10 → DE ＝ 6', '10 × 3/5 ＝ 6', C.red, FILL.red),
  S('注意！ DE：BC と等しいのは AD：AB で、AD：DB ではありません。AD：DB＝3：2 は「上の部分と下の部分」の比、DE：BC＝3：5 は「小さい三角形と大きい三角形」の比です。AD：DB＝AE：EC は正しいですが、DE：BC とは別の比です。',
    [tri(hA, hB, hC), hl([hA, hD, hE], BL, C.blue), hl([hD, hB, hC, hE], 'rgba(234,179,8,0.25)', C.gray), lb(160, 60, '上 3', 12, C.blue, 'middle', true), lb(160, 112, '下 2', 12, C.gray, 'middle', true)],
    'DE:BC ＝ 3:5（上：下ではない）', 'AD:DB ＝ 3:2 は別の比', C.red, FILL.red),
  S('平行線が三角形の内側でなく、頂点をはさんで交わる形（砂時計の形）でも同じです。対頂角が等しく、DE∥BCで錯角も等しいので、△ADE∽△ABC。たとえば AD：AB＝2：3 なら DE：BC＝2：3 です。',
    (() => { const A: P = [160, 66], Dd: P = [110, 26], Ee: P = [210, 26]; const Bb: P = [235, 126], Cc: P = [85, 126]; return [hl([A, Dd, Ee], BL, C.blue), hl([A, Bb, Cc], 'rgba(234,179,8,0.25)', C.gray), seg(Dd, Bb, C.gray), seg(Ee, Cc, C.gray), V('A', A, 0, 12), V('D', Dd, -10, 0), V('E', Ee, 10, 0), V('B', Bb, 10, 4), V('C', Cc, -10, 4)]; })(),
    '砂時計の形でも DE // BC → 相似', 'AD:AB ＝ DE:BC ＝ 2:3', C.blue, FILL.blue),
  S('D、Eがそれぞれ辺の中点のとき、AD：AB＝1：2 なので DE：BC＝1：2。つまり DE∥BC で、DE＝BC÷2。これが中点連結定理（ちゅうてんれんけつていり）です。❓ 中点だと平行になるのはなぜ？ 次のスライドの逆で説明します。',
    [tri(hA, hB, hC), hl([hA, mid(hA, hB), mid(hA, hC)], BL, C.blue), seg(mid(hA, hB), mid(hA, hC), C.red, false, 2.6), lb(150, 100, '中点どうし', 11, C.red, 'middle', true)],
    '中点連結：DE // BC、DE ＝ BC/2', undefined, C.green, FILL.green),
  S('逆も成り立ちます。AD：AB＝AE：AC が分かれば DE∥BC と言えます。❓ なぜ？ 比が等しく角Aが共通なので、△ADE∽△ABC（2辺の比とその間の角）。相似だと同位角が等しくなり、同位角が等しければ2直線は平行だからです。',
    [tri(hA, hB, hC), hl([hA, hD, hE], BL, C.blue), ang(hD, hA, hE, 14), ang(hB, hD, hC, 14), seg(hD, hE, C.blue, false, 2.4)],
    '比が等しい → 相似 → 平行', '同位角が等しければ平行', C.purple, FILL.purple),
  S('まとめです。DE∥BCのとき、AD：AB＝AE：AC＝DE：BC。使うときは、①大きい三角形の辺（AB）を足し算で出す、②「小さい三角形：大きい三角形」の比で書く、が大事。検算は 3：5＝6：10 で比が同じか確かめます。',
    [bx(20, 14, 280, 34, 'AD : AB ＝ AE : AC ＝ DE : BC', C.blue, FILL.blue, 13), bx(20, 58, 280, 34, '3 : 5 ＝ 6 : 10 ✓（検算）', C.green, FILL.green, 14), lb(160, 118, 'AD:DB とごちゃまぜにしない', 12, C.red, 'middle', true)],
    '小さい三角形 : 大きい三角形', undefined, C.green, FILL.green),
], '平行線と線分の比');

// ══════════════════════════════════════════════
// 53 角の二等分線と線分の比
// ══════════════════════════════════════════════
const nB: P = [40, 132], nC: P = [190, 132];
const nA: P = [175, 132 - Math.sqrt(180 * 180 - 135 * 135)];
const nD: P = [130, 132];
const nP: P = (() => { const L = 180; const u: P = [(nB[0] - nA[0]) / L, (nB[1] - nA[1]) / L]; const pr = (nD[0] - nA[0]) * u[0] + (nD[1] - nA[1]) * u[1]; return [nA[0] + pr * u[0], nA[1] + pr * u[1]]; })();
const nQ: P = (() => { const L = dist(nA, nC); const u: P = [(nC[0] - nA[0]) / L, (nC[1] - nA[1]) / L]; const pr = (nD[0] - nA[0]) * u[0] + (nD[1] - nA[1]) * u[1]; return [nA[0] + pr * u[0], nA[1] + pr * u[1]]; })();
const nBase = (): E[] => [tri(nA, nB, nC), seg(nA, nD, C.red, true, 2), ...v3(nA, nB, nC).slice(1), V('A', nA, 0, -9), V('D', nD, 0, 13, C.red)];
const nibun: DiagramFigure = show([
  S('三角形ABCで、角Aの二等分線が辺BCと交わる点をDとします。AB＝6、AC＝4、BC＝5 のとき、BDの長さを求めます。',
    [...nBase(), ang(nA, nB, nD, 22, C.purple, PU), ang(nA, nD, nC, 26, C.purple, PU), sl(nA, nB, '6', 12, C.gray), sl(nC, nA, '4', 12, C.gray), sl(nB, nC, '5', -11, C.gray)],
    '角Aの二等分線 AD', 'BD ＝ ？', C.blue, FILL.blue),
  S('❓ どんな関係が成り立つの？ 角の二等分線は、対辺BCを、AB：AC の比に分けます。つまり BD：DC ＝ AB：AC です。',
    [...nBase(), hl([nA, nB, nD], BL, C.blue), hl([nA, nD, nC], GR, C.green)],
    'BD : DC ＝ AB : AC', '青と緑：辺の比が対応', C.blue, FILL.blue),
  S('❓ なぜそうなるの？ 面積で考えます。△ABD と △ACD を、BD と DC を底辺とみると、頂点Aから BC への高さ h は同じです。だから面積の比は底辺の比 BD：DC と同じになります。',
    [...nBase(), hl([nA, nB, nD], BL, C.blue), hl([nA, nD, nC], GR, C.green), seg(nA, [nA[0], 132], C.purple, true, 2), lb(nA[0] + 10, 70, 'h', 12, C.purple, 'middle', true)],
    '△ABD : △ACD ＝ BD : DC', '高さが同じ → 面積比＝底辺の比', C.purple, FILL.purple),
  S('❓ 別の見方もできます。今度は AB と AC を底辺とみます。Dから AB に下ろした垂線 DP、AC に下ろした垂線 DQ が、それぞれの高さです。すると面積の比は AB×DP：AC×DQ になります。',
    [...nBase(), hl([nA, nB, nD], BL, C.blue), hl([nA, nD, nC], GR, C.green), seg(nD, nP, C.purple, true, 2), seg(nD, nQ, C.purple, true, 2), rt(nP, nA, nD), rt(nQ, nA, nD), V('P', nP, -10, 0, C.purple), V('Q', nQ, 10, 0, C.purple)],
    '底辺 AB、AC → 高さ DP、DQ', undefined, C.purple, FILL.purple),
  S('❓ DPとDQは同じ長さなの？ はい。角の二等分線上の点は、角の2辺から等しい距離にあるからです。❓ なぜ？ △APD と △AQD を見ると、斜辺ADが共通で、∠PAD＝∠QAD（二等分）。直角三角形の「斜辺と1鋭角」が等しいので合同で、DP＝DQ です。',
    [tri(nA, nP, nD, C.blue, 'rgba(2,132,199,0.25)'), tri(nA, nQ, nD, C.green, 'rgba(22,163,74,0.25)'), seg(nA, nD, C.red, false, 2), rt(nP, nA, nD), rt(nQ, nA, nD), ...tick(nD, nP, 1), ...tick(nD, nQ, 1), V('P', nP, -10, 0), V('Q', nQ, 10, 0), V('A', nA, 0, -9), V('D', nD, 0, 13)],
    '△APD ≡ △AQD → DP ＝ DQ', '斜辺共通・∠PAD ＝ ∠QAD', C.green, FILL.green),
  S('高さDP＝DQ が分かったので、△ABD：△ACD ＝ AB×DP：AC×DQ ＝ AB：AC です。いっぽう底辺BD、DCで見ると △ABD：△ACD＝BD：DC でした。同じ面積の比なので、BD：DC ＝ AB：AC が成り立ちます。',
    [...nBase(), hl([nA, nB, nD], BL, C.blue), hl([nA, nD, nC], GR, C.green)],
    '面積比を2通りで表す → 等しい', 'BD:DC ＝ △ABD:△ACD ＝ AB:AC', C.purple, FILL.purple),
  S('❓ 数字を入れると？ BD：DC＝AB：AC＝6：4＝3：2。BC＝5を 3：2 に分けるので、BD＝5×3/5＝3、DC＝5×2/5＝2 です。',
    [...nBase(), sl(nB, nD, '3', -11, C.blue, 14), sl(nD, nC, '2', -11, C.green, 14)],
    'BD ＝ 5 × 3/5 ＝ 3', '検算：3 ＋ 2 ＝ 5 ✓　3：2 ＝ 6：4 ✓', C.red, FILL.red),
  S('注意：BDに対応するのは AB（同じ側にある辺）で、AC ではありません。B側どうし、C側どうしで比をとります。BD：DC＝AB：AC と、AB と AC の順番をそろえて書きましょう。',
    [...nBase(), seg(nB, nD, C.blue, false, 3.2), seg(nA, nB, C.blue, false, 3.2), seg(nD, nC, C.green, false, 3.2), seg(nA, nC, C.green, false, 3.2), lb(62, 62, 'BD ↔ AB', 11, C.blue, 'middle', true), lb(252, 100, 'DC ↔ AC', 11, C.green, 'middle', true)],
    'B側：BD と AB、C側：DC と AC', undefined, C.red, FILL.red),
  S('AB＝AC の二等辺三角形なら、BD：DC＝AB：AC＝1：1。つまり角Aの二等分線は底辺BCの中点を通ります。❓ なぜ？ 二等辺三角形は左右対称で、二等分線がちょうど対称の軸になるからです。',
    (() => { const A: P = [160, 22], B: P = [80, 132], Cc: P = [240, 132], Dd: P = [160, 132]; return [tri(A, B, Cc), seg(A, Dd, C.red, true, 2), ...tick(A, B, 2), ...tick(A, Cc, 2), ...tick(B, Dd, 1, C.blue), ...tick(Dd, Cc, 1, C.blue), V('A', A, 0, -8), V('B', B, -10, 8), V('C', Cc, 10, 8), V('D', Dd, 0, 13, C.red)]; })(),
    'AB ＝ AC のとき BD ＝ DC', '二等分線は中点を通る', C.green, FILL.green),
  S('別の例。AB＝8、AC＝6、BC＝7 のとき、BD：DC＝8：6＝4：3。BC＝7を 4：3 に分けるので、BD＝7×4/7＝4、DC＝3。分けた比の合計（4＋3＝7）が BC とちょうど同じになり、きれいに分けられます。',
    [bx(20, 20, 280, 34, 'BD : DC ＝ 8 : 6 ＝ 4 : 3', C.blue, FILL.blue, 14), bx(20, 66, 160, 30, 'BD ＝ 7 × 4/7 ＝ 4', C.blue, FILL.blue, 12), bx(190, 66, 110, 30, 'DC ＝ 3', C.green, FILL.green, 12), lb(160, 118, '4 ＋ 3 ＝ 7 ✓', 13, C.green, 'middle', true)],
    '比を使ってBCを分ける', undefined, C.red, FILL.red),
  S('まとめです。三角形の角Aの二等分線がBCと交わる点をDとすると BD：DC＝AB：AC。「面積を2通りに表す」ことと「二等分線上の点から2辺までの距離が等しい」ことが理由です。比を足した数で BC を割り振ると、長さが求められます。',
    [bx(20, 14, 280, 34, 'BD : DC ＝ AB : AC', C.blue, FILL.blue, 15), bx(20, 58, 280, 30, '理由：面積比 ＋ 二等分線上の点は2辺から等距離', C.purple, FILL.purple, 11), bx(20, 98, 280, 30, 'AB ＝ AC のとき、BD ＝ DC（中点）', C.green, FILL.green, 12)],
    '同じ側どうしで比をとる', undefined, C.green, FILL.green),
], '角の二等分線と線分の比');

// ══════════════════════════════════════════════
// 54 チェバの定理
// ══════════════════════════════════════════════
const cA: P = [150, 20], cB: P = [50, 135], cC: P = [270, 135];
const cP = lerp(cB, cC, 2 / 3), cQ = lerp(cC, cA, 3 / 5), cR = lerp(cA, cB, 1 / 4);
const cO = inter(cA, cP, cB, cQ);
const inArrow = (p: P, q: P, color: string): E => {
  const g = cen(cA, cB, cC); const L = dist(p, q); const m = mid(p, q);
  let n: P = [-(q[1] - p[1]) / L, (q[0] - p[0]) / L];
  if (n[0] * (g[0] - m[0]) + n[1] * (g[1] - m[1]) < 0) n = [-n[0], -n[1]];
  const a = lerp(p, q, 0.08), b = lerp(p, q, 0.92);
  return ar(a[0] + n[0] * 9, a[1] + n[1] * 9, b[0] + n[0] * 9, b[1] + n[1] * 9, color);
};
const cBase = (): E[] => [tri(cA, cB, cC), seg(cA, cP, C.gray), seg(cB, cQ, C.gray), seg(cC, cR, C.gray), dot(cO), V('A', cA, 0, -8), V('B', cB, -10, 8), V('C', cC, 10, 8), V('P', cP, 0, 10), V('Q', cQ, 12, 0), V('R', cR, -14, 0), V('O', cO, 12, 8)];
const ceva: DiagramFigure = show([
  S('三角形ABCの内側に点Oをとり、AO、BO、CO をのばして対辺と交わる点を P、Q、R とします。3本の直線が1点Oで交わっている図です。',
    cBase(), '3頂点から1点Oを通る3直線', 'P は BC 上、Q は CA 上、R は AB 上', C.blue, FILL.blue),
  S('❓ このとき何が成り立つの？ 3つの比 BP／PC、CQ／QA、AR／RB をかけ合わせると、いつも1になります。これがチェバの定理です。',
    cBase(), '(BP/PC)×(CQ/QA)×(AR/RB) ＝ 1', undefined, C.blue, FILL.blue),
  S('❓ なぜ1になるの？ 面積の比で考えます。まず BP：PC を見ます。△ABP と △APC は、頂点Aからの高さが同じなので、面積の比が底辺の比 BP：PC と同じです。',
    [...cBase(), hl([cA, cB, cP], BL, C.blue), hl([cA, cP, cC], GR, C.green)],
    '△ABP : △APC ＝ BP : PC', '高さ（Aから BC）が同じ', C.blue, FILL.blue),
  S('❓ ではOをふくめたら？ △OBP と △OPC も、Oからの高さが同じなので、面積の比が BP：PC と同じです。同じ比をもつ2組の面積から、大きい方からそれぞれ引けば、残りの比も同じになります。',
    [...cBase(), hl([cO, cB, cP], BL, C.blue), hl([cO, cP, cC], GR, C.green)],
    '△OBP : △OPC ＝ BP : PC', 'Oからの高さが同じ', C.blue, FILL.blue),
  S('△ABP：△APC＝BP：PC と △OBP：△OPC＝BP：PC の差をとると、残る△OAB：△OAC も BP：PC です。「同じ比の2組を引き算しても、比は変わらない」ことを使いました。',
    [...cBase(), hl([cO, cA, cB], RD, C.red), hl([cO, cA, cC], PU, C.purple)],
    '△OAB : △OAC ＝ BP : PC', '（ABP−OBP）：（APC−OPC）', C.red, FILL.red),
  S('同じように考えると、CQ：QA ＝ △OBC：△OBA、AR：RB ＝ △OCA：△OCB になります。3つの小さい三角形の面積を x（△OBC）、y（△OCA）、z（△OAB）とおくと、BP：PC＝z：y、CQ：QA＝x：z、AR：RB＝y：x です。',
    [...cBase(), hl([cO, cB, cC], BL, C.blue), hl([cO, cC, cA], GR, C.green), hl([cO, cA, cB], RD, C.red), lb(cen(cO, cB, cC)[0], cen(cO, cB, cC)[1] + 4, 'x', 14, C.blue, 'middle', true), lb(cen(cO, cC, cA)[0], cen(cO, cC, cA)[1] + 4, 'y', 14, C.green, 'middle', true), lb(cen(cO, cA, cB)[0], cen(cO, cA, cB)[1] + 4, 'z', 14, C.red, 'middle', true)],
    'x ＝ △OBC、y ＝ △OCA、z ＝ △OAB', 'BP:PC＝z:y　CQ:QA＝x:z　AR:RB＝y:x', C.purple, FILL.purple),
  S('3つをかけ合わせます。(z/y)×(x/z)×(y/x) の分母と分子がぜんぶ消えて、答えは1になります。これがチェバの定理の理由です。',
    [bx(20, 18, 280, 34, '(z/y) × (x/z) × (y/x)', C.purple, FILL.purple, 16), lb(160, 76, 'x、y、z がぜんぶ約分できる', 12, C.gray, 'middle', true), bx(80, 92, 160, 40, '＝ 1', C.green, FILL.green, 22)],
    'BP/PC × CQ/QA × AR/RB ＝ 1', undefined, C.green, FILL.green),
  S('例題：BP：PC＝2：1、CQ：QA＝3：2 のとき、AR：RB は？ (2/1)×(3/2)×(AR/RB)＝1。2/1×3/2＝3 なので 3×(AR/RB)＝1 より AR/RB＝1/3。つまり AR：RB＝1：3 です。',
    [...cBase(), lb(mid(cB, cP)[0], 127, '2', 13, C.blue, 'middle', true), lb(mid(cP, cC)[0], 127, '1', 13, C.blue, 'middle', true), lb(mid(cC, cQ)[0] + 10, mid(cC, cQ)[1], '3', 13, C.green, 'middle', true), lb(mid(cQ, cA)[0] + 10, mid(cQ, cA)[1], '2', 13, C.green, 'middle', true), lb(mid(cA, cR)[0] - 9, mid(cA, cR)[1], '1', 13, C.red, 'middle', true), lb(mid(cR, cB)[0] - 9, mid(cR, cB)[1], '3', 13, C.red, 'middle', true)],
    '3 × (AR/RB) ＝ 1 → AR : RB ＝ 1 : 3', '検算：(2/1)(3/2)(1/3) ＝ 1 ✓', C.red, FILL.red),
  S('❓ 比を書く向きは？ 三角形を一周する向きにそろえます。頂点→交点→次の頂点の順に、B→P→C、C→Q→A、A→R→B と、分子は「先に出会う頂点から交点まで」、分母は「交点から次の頂点まで」です。',
    [tri(cA, cB, cC), dot(cP), dot(cQ), dot(cR), inArrow(cB, cP, C.blue), inArrow(cP, cC, C.blue), inArrow(cC, cQ, C.green), inArrow(cQ, cA, C.green), inArrow(cA, cR, C.red), inArrow(cR, cB, C.red), V('A', cA, 0, -8), V('B', cB, -10, 8), V('C', cC, 10, 8), V('P', cP, 0, 10), V('Q', cQ, 12, 0), V('R', cR, -14, 0)],
    'B→P→C、C→Q→A、A→R→B', '一周する向きに', C.blue, FILL.blue),
  S('逆も成り立ちます。3つの比の積が1になっていれば、3本の直線は1点で交わります。❓ なぜ？ まず AP と BQ の交点をOとします。Oを通る3本目の直線が辺ABと交わる点を R′ とすると、定理より積は1。もとの積も1なので、R′ の比はRと同じ。つまり R′＝R です。',
    [...cBase(), seg(cC, cR, C.red, false, 2.4)],
    '積が1 → 3直線は1点で交わる', '（定理の逆）', C.purple, FILL.purple),
  S('中線（ちゅうせん：頂点と対辺の中点を結ぶ線）で確かめましょう。P、Q、R が中点なら、各比は 1：1 で、BP/PC×CQ/QA×AR/RB＝1×1×1＝1。だから3本の中線は1点（重心）で交わります。',
    (() => { const p = mid(cB, cC), q = mid(cC, cA), r = mid(cA, cB); const g = cen(cA, cB, cC); return [tri(cA, cB, cC), seg(cA, p, C.red, false, 2), seg(cB, q, C.red, false, 2), seg(cC, r, C.red, false, 2), dot(g, C.red), V('A', cA, 0, -8), V('B', cB, -10, 8), V('C', cC, 10, 8), V('P', p, 0, 13), V('Q', q, 12, 0), V('R', r, -12, 0)]; })(),
    '1 × 1 × 1 ＝ 1', '3本の中線は重心で交わる', C.green, FILL.green),
  S('まとめです。三角形ABCの内側の点Oについて、(BP/PC)×(CQ/QA)×(AR/RB)＝1。理由は「同じ高さの三角形の面積比＝底辺の比」で、x、y、z が約分されて消えるから。比は一周する向きに書き、逆も成り立ちます。',
    [bx(20, 14, 280, 34, 'BP/PC × CQ/QA × AR/RB ＝ 1', C.blue, FILL.blue, 14), bx(20, 58, 280, 30, '理由：面積比を使うと x・y・z が消える', C.purple, FILL.purple, 12), bx(20, 98, 280, 30, '逆：積が1 → 3直線は1点で交わる', C.green, FILL.green, 12)],
    '一周する向きにそろえる', undefined, C.green, FILL.green),
], 'チェバの定理');

// ══════════════════════════════════════════════
// 55 メネラウスの定理
// ══════════════════════════════════════════════
const mA: P = [120, 15], mB: P = [50, 125], mC: P = [190, 125];
const mR = lerp(mA, mB, 2 / 5), mQ = lerp(mA, mC, 2 / 3), mP: P = [260, 125];
const lineEnd1: P = [70, mR[1] + (70 - mR[0]) * ((mQ[1] - mR[1]) / (mQ[0] - mR[0]))];
const lineEnd2: P = [272, mR[1] + (272 - mR[0]) * ((mQ[1] - mR[1]) / (mQ[0] - mR[0]))];
const mS = inter(mC, [mC[0] + (mB[0] - mA[0]), mC[1] + (mB[1] - mA[1])], mR, mQ);
const mBase = (): E[] => [tri(mA, mB, mC), seg(mC, mP, C.gray), seg(lineEnd1, lineEnd2, C.red, false, 2.2), dot(mR), dot(mQ), dot(mP), V('A', mA, 0, -8), V('B', mB, -10, 8), V('C', mC, 6, 14), V('P', mP, 8, 12), V('Q', mQ, 12, -4), V('R', mR, -12, -2)];
const menelaus: DiagramFigure = show([
  S('三角形ABCを、1本の直線がななめに横切っています。直線は辺AB上のR、辺AC上のQを通り、辺BCの延長線とPで交わります。これがメネラウスの定理の図です。',
    mBase(), '三角形を1本の直線が横切る', 'P は辺BCの延長線上', C.blue, FILL.blue),
  S('❓ 何が成り立つの？ 頂点A→R→B→P→C→Q→A と、頂点と交点を交互にたどり、(AR/RB)×(BP/PC)×(CQ/QA)＝1 になります。',
    mBase(), '(AR/RB)×(BP/PC)×(CQ/QA) ＝ 1', undefined, C.blue, FILL.blue),
  S('❓ なぜ1になるの？ 比を1か所に集めるために、平行線を1本引きます。点Cを通り、ABに平行な直線を引いて、直線RQPとの交点をSとします。',
    [...mBase(), seg(mC, mS, C.purple, false, 2.4), dot(mS, C.purple), V('S', mS, 8, -8, C.purple)],
    'C を通り AB に平行な線 CS', undefined, C.purple, FILL.purple),
  S('まず △CQS と △AQR を見ます。CS∥AR で、対頂角も等しいので2角が等しく相似です。だから CQ：QA ＝ CS：AR。QAの比が CS と AR の比に置きかわりました。',
    [...mBase(), seg(mC, mS, C.purple, false, 2.4), hl([mC, mQ, mS], GR, C.green), hl([mA, mQ, mR], BL, C.blue), V('S', mS, 8, -8, C.purple)],
    'CQ : QA ＝ CS : AR', '△CQS ∽ △AQR', C.green, FILL.green),
  S('次に △PCS と △PBR を見ます。CS∥BR で、角Pが共通なので相似です。だから PC：PB ＝ CS：BR、つまり BP／PC ＝ BR／CS。BP と PC の比が、BR と CS の比に置きかわりました。',
    [...mBase(), seg(mC, mS, C.purple, false, 2.4), hl([mP, mC, mS], PU, C.purple), hl([mP, mB, mR], 'rgba(234,179,8,0.25)', C.gray), V('S', mS, 8, -8, C.purple)],
    'BP/PC ＝ BR/CS', '△PCS ∽ △PBR', C.purple, FILL.purple),
  S('3つをかけます。(AR/RB)×(BP/PC)×(CQ/QA) に、BP/PC＝BR/CS と CQ/QA＝CS/AR を入れると (AR/RB)×(RB/CS)×(CS/AR)。分母と分子がぜんぶ消えて、1になります。これがメネラウスの定理の理由です。',
    [bx(10, 20, 300, 34, '(AR/RB) × (RB/CS) × (CS/AR)', C.purple, FILL.purple, 15), lb(160, 76, 'RB、CS、AR がぜんぶ約分される', 12, C.gray, 'middle', true), bx(90, 94, 140, 38, '＝ 1', C.green, FILL.green, 22)],
    '平行線で比を置きかえる', undefined, C.green, FILL.green),
  S('例題：BP：PC＝3：1、CQ：QA＝1：2 のとき、AR：RB は？ (AR/RB)×(3/1)×(1/2)＝1。3×1/2＝3/2 なので AR/RB＝2/3。つまり AR：RB＝2：3 です。',
    [...mBase(), lb(mC[0] + 32, mC[1] - 8, '1', 12, C.blue, 'middle', true), lb(150, mC[1] + 14, '3', 12, C.blue, 'middle', true), lb(mid(mQ, mC)[0] + 10, mid(mQ, mC)[1] + 4, '1', 12, C.green, 'middle', true), lb(mid(mA, mQ)[0] + 10, mid(mA, mQ)[1] - 2, '2', 12, C.green, 'middle', true)],
    'AR/RB × 3 × 1/2 ＝ 1 → 2 : 3', '検算：(2/3)(3)(1/2) ＝ 1 ✓', C.red, FILL.red),
  S('❓ P は辺の延長線上にあるのに、同じ式でいいの？ 大丈夫です。P が BC の外にあっても、BP と PC は「BからPまで」「PからCまで」の長さで、同じ式のまま使えます。平行線の相似の考え方は、延長線上でも変わらないからです。',
    [...mBase(), ln(mB[0], mB[1], mC[0], mC[1], C.gray, false, 2.4), lb(120, mB[1] + 14, 'B から C', 10, C.gray, 'middle', true), lb(225, mC[1] + 14, 'C から P（外）', 10, C.red, 'middle', true)],
    'BP ＝ 5、PC ＝ 2 の形でもOK', '長さの比をそのまま使う', C.blue, FILL.blue),
  S('❓ チェバの定理とのちがいは？ チェバは、三角形の内側の1点を通る3直線の話。メネラウスは、三角形を横切る1本の直線の話です。どちらも「一周する向きに比をかけると1」ですが、使う図が別です。',
    [...mBase(), bx(150, 10, 160, 30, 'チェバ：内側の1点を通る3直線', C.blue, FILL.blue, 10), bx(150, 48, 160, 30, 'メネラウス：三角形を横切る1本の直線', C.red, FILL.red, 10)],
    '積はどちらも 1', '図の形で使い分ける', C.gray, FILL.gray),
  S('逆も成り立ちます。3つの比の積が1で、3点が辺または辺の延長上にあるなら、3点P、Q、Rは一直線上にあります。❓ なぜ？ 2点Q、Rを結んだ直線が辺BCの延長と交わる点をP′とすると、定理より積は1。もとの積も1なので、P′の比はPと同じになり、P′＝Pだからです。3点が一直線上にあることを示す問題で使います。',
    [...mBase()], '積が1 → 3点は一直線上', '（定理の逆）', C.purple, FILL.purple),
  S('まとめです。三角形を横切る直線があるとき (AR/RB)×(BP/PC)×(CQ/QA)＝1。理由は、平行線を1本引いて相似を2回使い、比をつなげたからです。向きは A→R→B→P→C→Q→A と一周させ、検算は3つを実際にかけて1になるか確かめます。',
    [bx(20, 14, 280, 34, 'AR/RB × BP/PC × CQ/QA ＝ 1', C.blue, FILL.blue, 14), bx(20, 58, 280, 30, '理由：平行線 ＋ 相似 ×2', C.purple, FILL.purple, 12), bx(20, 98, 280, 30, '向き：A→R→B→P→C→Q→A', C.green, FILL.green, 12)],
    '検算は3つをかけて1', undefined, C.green, FILL.green),
], 'メネラウスの定理');

// ══════════════════════════════════════════════
// 56 円周角の定理
// ══════════════════════════════════════════════
const O: P = [160, 78], R0 = 62;
const eA = pt(O[0], O[1], R0, 220), eB = pt(O[0], O[1], R0, 320);
const eP1 = pt(O[0], O[1], R0, 90), eP2 = pt(O[0], O[1], R0, 40), eP3 = pt(O[0], O[1], R0, 140);
const eD = pt(O[0], O[1], R0, 270);
const arcAB = (color: string, fill: string): E => sc(O[0], O[1], R0, 220, 320, color, fill);
const enshu: DiagramFigure = show([
  S('円周上の2点A、Bをとると、弧ABができます。この弧ABに対して、円周上の点Pから見た角∠APBを「円周角」、円の中心Oから見た角∠AOBを「中心角」と言います。',
    [circ(O, R0), arcAB(C.red, RD), seg(O, eA, C.gray), seg(O, eB, C.gray), seg(eP1, eA, C.blue), seg(eP1, eB, C.blue), dot(O), V('A', eA, -10, 8), V('B', eB, 10, 8), V('P', eP1, 0, -8), V('O', O, 0, -8)],
    '弧AB の円周角と中心角', '赤い扇形：中心角 ∠AOB', C.blue, FILL.blue),
  S('❓ 円周角と中心角には、どんな関係があるの？ 円周角は、同じ弧に対する中心角のちょうど半分です。中心角が100°なら、円周角は50°になります。',
    [circ(O, R0), arcAB(C.red, RD), seg(O, eA, C.gray), seg(O, eB, C.gray), seg(eP1, eA, C.blue), seg(eP1, eB, C.blue), ang(eP1, eA, eB, 16, C.blue, BL), angL(eP1, eA, eB, 30, '50°', C.blue), angL(O, eA, eB, 20, '100°', C.red, 10), V('A', eA, -10, 8), V('B', eB, 10, 8), V('P', eP1, 0, -8)],
    '円周角 ＝ 中心角 ÷ 2', '100° ÷ 2 ＝ 50°', C.blue, FILL.blue),
  S('❓ 点Pを動かしたら？ 同じ弧ABを見ている円周角なら、Pがどこにあっても大きさは同じ50°です。だから「同じ弧に対する円周角は等しい」と言えます。',
    [circ(O, R0), seg(eA, eB, C.gray, true), seg(eP1, eA, C.blue), seg(eP1, eB, C.blue), seg(eP2, eA, C.green), seg(eP2, eB, C.green), seg(eP3, eA, C.purple), seg(eP3, eB, C.purple), ang(eP1, eA, eB, 14, C.blue, BL), ang(eP2, eA, eB, 14, C.green, GR), ang(eP3, eA, eB, 14, C.purple, PU), V('P1', eP1, 0, -8), V('P2', eP2, 12, -4), V('P3', eP3, -12, -4), V('A', eA, -10, 8), V('B', eB, 10, 8)],
    '∠AP₁B ＝ ∠AP₂B ＝ ∠AP₃B ＝ 50°', undefined, C.green, FILL.green),
  S('❓ なぜ半分になるの？ まず特別な場合から。辺PBが直径（中心Oを通る）のときを考えます。OP＝OA（どちらも半径）なので△OPAは二等辺三角形で、底角の∠OPAと∠OAPは等しく、これを●とします。',
    [circ(O, R0), seg(eP3, eB, C.ink, false, 2.2), seg(eP3, eA, C.blue), seg(O, eA, C.gray), ang(eP3, eB, eA, 16, C.blue, BL), ang(eA, eP3, O, 14, C.blue, BL), ...tick(O, eP3, 1), ...tick(O, eA, 1), dot(O), V('A', eA, -10, 8), V('B', eB, 10, 8), V('P', eP3, -10, -6), V('O', O, 0, -9)],
    '△OPA は二等辺三角形（OP＝OA）', '底角は2つとも ●', C.blue, FILL.blue),
  S('❓ 中心角∠AOBは？ ∠AOB は △OPA の外角です。三角形の外角は、となり合わない2つの内角の和に等しいので、∠AOB＝●＋●＝2×●。つまり中心角は、円周角●の2倍です。',
    [circ(O, R0), seg(eP3, eB, C.ink, false, 2.2), seg(eP3, eA, C.blue), seg(O, eA, C.red, false, 2), ang(O, eA, eB, 18, C.red, RD), ang(eP3, eB, eA, 16, C.blue, BL), ang(eA, eP3, O, 14, C.blue, BL), angL(O, eA, eB, 30, '2●', C.red), dot(O), V('A', eA, -10, 8), V('B', eB, 10, 8), V('P', eP3, -10, -6), V('O', O, 0, -9)],
    '外角 ∠AOB ＝ ● ＋ ● ＝ 2●', '中心角 ＝ 円周角 × 2', C.red, FILL.red),
  S('中心Oが∠APBの内側にある場合は、Pから直径PDを引いて2つに分けます。∠APD は弧ADの円周角、∠DPB は弧DBの円周角。それぞれ「直径の場合」で半分になり、足すと ∠APB＝（∠AOD＋∠DOB）÷2＝∠AOB÷2 です。',
    [circ(O, R0), seg(eP1, eD, C.ink, false, 2.2), seg(eP1, eA, C.blue), seg(eP1, eB, C.blue), seg(O, eA, C.gray), seg(O, eB, C.gray), ang(eP1, eA, eD, 14, C.blue, BL), ang(eP1, eD, eB, 14, C.green, GR), dot(O), V('A', eA, -10, 8), V('B', eB, 10, 8), V('P', eP1, 0, -8), V('D', eD, 0, -8)],
    '直径PDで2つに分けて足す', '25° ＋ 25° ＝ 50°（中心角 50°＋50°）', C.purple, FILL.purple),
  S('直径ABに対する円周角はどうなるでしょう。直径ABに対する中心角は、一直線で180°です。円周角は半分なので 90°。つまり、半円の弧に対する円周角は直角です。',
    (() => { const a = pt(O[0], O[1], R0, 180), b = pt(O[0], O[1], R0, 0), p = pt(O[0], O[1], R0, 65); return [circ(O, R0), seg(a, b, C.ink, false, 2.2), seg(p, a, C.blue), seg(p, b, C.blue), rt(p, a, b, 9), dot(O), V('A', a, -10, 4), V('B', b, 10, 4), V('P', p, 0, -8), V('O', O, 0, 12)]; })(),
    '中心角180° → 円周角90°', '直径に対する円周角は直角', C.green, FILL.green),
  S('❓ 「同じ弧なら円周角は等しい」のはなぜ？ 同じ弧に対する中心角はただ1つ（100°）に決まっていて、円周角はその半分だからです。中心角が同じなら、Pがどこにあっても半分の値は同じになります。',
    [circ(O, R0), arcAB(C.red, RD), seg(O, eA, C.gray), seg(O, eB, C.gray), seg(eP2, eA, C.green), seg(eP2, eB, C.green), seg(eP3, eA, C.purple), seg(eP3, eB, C.purple), angL(O, eA, eB, 20, '100°', C.red, 10), angL(eP2, eA, eB, 28, '50°', C.green), angL(eP3, eA, eB, 28, '50°', C.purple), dot(O)],
    '中心角は1つ → 円周角も1つ', '100°の半分は、いつでも 50°', C.green, FILL.green),
  S('❓ 点Pが弧AB自身の上（下の弧の上）にあったら？ このとき∠APBは大きい角になります。Pは弧ABとは反対側の大きい弧（360°−100°＝260°）を見こむので、円周角は 260°÷2＝130° です。同じ弧を見るなら、同じ側の点で比べます。',
    (() => { const p = pt(O[0], O[1], R0, 270); return [circ(O, R0), seg(eA, eB, C.gray, true), seg(p, eA, C.blue), seg(p, eB, C.blue), ang(p, eA, eB, 16, C.red, RD), angL(p, eA, eB, 28, '130°', C.red), V('A', eA, -10, -2), V('B', eB, 10, -2), V('P', p, 0, -8)]; })(),
    '大きい弧 260° ÷ 2 ＝ 130°', '同じ弧を見るなら、同じ側の点で', C.red, FILL.red),
  S('弧の長さと円周角は比例します。中心角が2倍なら弧も2倍で、円周角も2倍。たとえば弧ABの中心角が60°、弧BCが120°なら、円周角は30°と60°で、弧の長さの比は 1：2、円周角の比も 1：2 です。',
    (() => { const a = pt(O[0], O[1], R0, 30), b = pt(O[0], O[1], R0, 90), c = pt(O[0], O[1], R0, 210), p = pt(O[0], O[1], R0, 270); return [circ(O, R0), sc(O[0], O[1], R0, 30, 90, C.blue, BL), sc(O[0], O[1], R0, 90, 210, C.green, GR), seg(p, a, C.gray), seg(p, b, C.gray), seg(p, c, C.gray), lb(O[0] + 18, O[1] - 30, '60°', 10, C.blue, 'middle', true), lb(O[0] - 28, O[1] - 18, '120°', 10, C.green, 'middle', true), V('A', a, 10, -2), V('B', b, 0, -8), V('C', c, -10, 0), V('P', p, 0, 12)]; })(),
    '弧 1 : 2 ＝ 円周角 30° : 60°', '弧の長さは円周角に比例', C.blue, FILL.blue),
  S('数を入れて練習します。①弧ABの中心角が100°なら円周角は 100÷2＝50°。②円周角が30°なら、中心角は 30×2＝60°。逆に求めるときは「かけて2倍」、円周角を求めるときは「割って半分」です。',
    [bx(20, 14, 130, 34, '中心角100°', C.red, FILL.red, 13), ar(155, 31, 175, 31, C.ink), bx(180, 14, 120, 34, '円周角 50°', C.blue, FILL.blue, 13), bx(20, 66, 130, 34, '円周角30°', C.blue, FILL.blue, 13), ar(155, 83, 175, 83, C.ink), bx(180, 66, 120, 34, '中心角 60°', C.red, FILL.red, 13), lb(160, 128, '検算：50×2＝100、60÷2＝30', 12, C.gray, 'middle', true)],
    '中心角 ⇄ 円周角 は ×2 と ÷2', undefined, C.green, FILL.green),
  S('まとめです。①同じ弧に対する円周角は等しい ②円周角は中心角の半分 ③直径に対する円周角は90°。理由は、二等辺三角形の外角が底角2つ分になることです。等しい円周角は「同じ円で、同じ長さの弧」を見ています。',
    [bx(20, 10, 280, 30, '同じ弧 → 円周角は等しい', C.blue, FILL.blue, 13), bx(20, 46, 280, 30, '円周角 ＝ 中心角 ÷ 2', C.red, FILL.red, 13), bx(20, 82, 280, 30, '直径に対する円周角 ＝ 90°', C.green, FILL.green, 13)],
    '理由：二等辺三角形の外角', undefined, C.green, FILL.green),
], '円周角の定理');

// ══════════════════════════════════════════════
// 57 円周角の定理の逆と四点共円
// ══════════════════════════════════════════════
const fCin = eP1; // 円周上の点C
const fDin: P = [160, 62]; // 円の内側
const fDout: P = [232, 46]; // 円の外側
const fDon = eP2; // 円周上
const gyaku: DiagramFigure = show([
  S('線分ABと同じ側に点C、Dがあり、∠ACB＝∠ADB＝50° だとします。このとき、A、B、C、D は同じ円の上にあると言えるでしょうか。',
    [seg(eA, eB, C.gray), seg(fCin, eA, C.blue), seg(fCin, eB, C.blue), seg(fDon, eA, C.green), seg(fDon, eB, C.green), ang(fCin, eA, eB, 14, C.blue, BL), ang(fDon, eA, eB, 14, C.green, GR), V('A', eA, -10, 8), V('B', eB, 10, 8), V('C', fCin, 0, -8), V('D', fDon, 12, -4)],
    '∠ACB ＝ ∠ADB ＝ 50°', 'C、D は AB の同じ側', C.blue, FILL.blue),
  S('❓ 結論は？ 同じ円周上にあります（四点共円：しいてんきょうえん）。これが「円周角の定理の逆」です。円周角の定理は「円周上なら角が等しい」、その逆は「角が等しいなら円周上」です。',
    [circ(O, R0), seg(eA, eB, C.gray, true), dot(fCin, C.blue), dot(fDon, C.green), dot(eA), dot(eB), V('A', eA, -10, 8), V('B', eB, 10, 8), V('C', fCin, 0, -8), V('D', fDon, 12, -4)],
    'A、B、C、D は同一円周上', '（四点共円）', C.blue, FILL.blue),
  S('❓ なぜそう言えるの？ 背理法（はいりほう）のような考えで確かめます。まず、A、B、C の3点を通る円が1つ決まります（3点を通る円はただ1つ）。あとは、Dがこの円の上にあることを示せばよいのです。',
    [circ(O, R0), dot(eA), dot(eB), dot(fCin, C.blue), seg(fCin, eA, C.blue), seg(fCin, eB, C.blue), ang(fCin, eA, eB, 14, C.blue, BL), V('A', eA, -10, 8), V('B', eB, 10, 8), V('C', fCin, 0, -8)],
    'A、B、C を通る円は1つ', undefined, C.purple, FILL.purple),
  S('もしDが円の内側にあったら？ 図のように∠ADBは、円周上のCから見た角（50°）より大きくなってしまいます（たとえば約81°）。内側の点ほど、ABを見こむ角が大きくなるからです。だから内側だと「50°」という条件に合いません。',
    [circ(O, R0), seg(fDin, eA, C.red), seg(fDin, eB, C.red), ang(fDin, eA, eB, 14, C.red, RD), angL(fDin, eA, eB, 26, '約81°', C.red, 10), dot(fDin, C.red), V('D', fDin, 0, -8, C.red), V('A', eA, -10, 8), V('B', eB, 10, 8)],
    'D が円の内側 → 角は50°より大きい', '約81° ≠ 50°', C.red, FILL.red),
  S('では、Dが円の外側にあったら？ ∠ADBは50°より小さくなります（たとえば約40°）。外側の点ほど、ABを見こむ角は小さくなるからです。これも条件に合いません。',
    [circ(O, R0), seg(fDout, eA, C.red), seg(fDout, eB, C.red), ang(fDout, eA, eB, 20, C.red, RD), angL(fDout, eA, eB, 40, '約40°', C.red, 10), dot(fDout, C.red), V('D', fDout, 10, -6, C.red), V('A', eA, -10, 8), V('B', eB, 10, 8)],
    'D が円の外側 → 角は50°より小さい', '約40° ≠ 50°', C.red, FILL.red),
  S('内側でも外側でもないなら、残るのは円周上だけです。だから ∠ADB がちょうど50°のとき、Dは円周上にあります。これが円周角の定理の逆が成り立つ理由です。',
    [circ(O, R0), seg(eA, eB, C.gray, true), seg(fDon, eA, C.green), seg(fDon, eB, C.green), ang(fDon, eA, eB, 14, C.green, GR), dot(fDon, C.green), V('D', fDon, 12, -4), V('A', eA, -10, 8), V('B', eB, 10, 8)],
    '内側でも外側でもない → 円周上', '消去法で決まる', C.green, FILL.green),
  S('❓ 四点共円が分かると何ができるの？ 円周角の定理が使えるようになります。たとえば C、D が同じ弧CDを見ているとき、∠CAD＝∠CBD と分かります。図形の中に円が隠れているかもしれないと考えると、等しい角がたくさん見つかります。',
    [circ(O, R0), seg(eA, eP3), seg(eB, eP3), seg(eA, eP2), seg(eB, eP2), seg(eP3, eP2, C.gray, true), seg(eA, eB, C.gray), ang(eA, eP3, eP2, 16, C.red, RD), ang(eB, eP3, eP2, 16, C.red, RD), V('A', eA, -10, 8), V('B', eB, 10, 8), V('C', eP3, -12, -4), V('D', eP2, 12, -4)],
    '∠CAD ＝ ∠CBD（同じ弧CD）', undefined, C.purple, FILL.purple),
  S('条件1：「C、Dが直線ABの同じ側にあること」が必要です。❓ なぜ？ 反対側にあると、同じ弧でなく反対側の弧を見ることになり、角が等しいとはかぎらないからです。同じ側にあるとき、はじめて「同じ弧を見ている」と言えます。',
    [circ(O, R0), seg(eA, eB, C.ink, false, 2.2), seg(eP1, eA, C.blue), seg(eP1, eB, C.blue), seg(eD, eA, C.red), seg(eD, eB, C.red), lb(O[0] + 85, O[1] - 25, '同じ側', 10, C.blue, 'middle', true), lb(O[0] + 85, O[1] + 50, '反対側', 10, C.red, 'middle', true), V('A', eA, -10, 4), V('B', eB, 10, 4), V('C', eP1, 0, -8), V('D', eD, 0, 12)],
    '2点は AB の同じ側', '反対側だと角がちがう（50°と130°）', C.red, FILL.red),
  S('もうひとつの使い方。四角形ABCDで、向かい合う角の和が180°（たとえば ∠A＝75°、∠C＝105°）なら、その四角形は円に内接します。180°になるのは、円周角の定理で、向かい合う角が反対側の弧の半分ずつになる場合だけだからです。',
    (() => { const A = pt(O[0], O[1], R0, 90), B = pt(O[0], O[1], R0, 195), Cc = pt(O[0], O[1], R0, 250), Dd = pt(O[0], O[1], R0, 345); return [circ(O, R0), pg([A, B, Cc, Dd], C.blue, 'rgba(2,132,199,0.10)'), ang(A, B, Dd, 14, C.red, RD), ang(Cc, B, Dd, 14, C.green, GR), V('A', A, 0, -8), V('B', B, -10, 2), V('C', Cc, -4, 13), V('D', Dd, 10, 2)]; })(),
    '75° ＋ 105° ＝ 180° → 円に内接', '向かい合う角の和が180°', C.blue, FILL.blue),
  S('直角を2つ見つけたときにも使えます。∠ACB＝∠ADB＝90° なら、C と D は、ABを直径とする円の上にあります。❓ なぜ？ 直径に対する円周角が90°なので、その逆で、90°を見こむ点はすべて、ABを直径とする円の上にあるからです。',
    (() => { const a = pt(O[0], O[1], R0, 180), b = pt(O[0], O[1], R0, 0), c = pt(O[0], O[1], R0, 65), d = pt(O[0], O[1], R0, 115); return [circ(O, R0), seg(a, b, C.ink, false, 2.2), seg(c, a, C.blue), seg(c, b, C.blue), seg(d, a, C.green), seg(d, b, C.green), rt(c, a, b, 8), rt(d, a, b, 8), V('A', a, -10, 4), V('B', b, 10, 4), V('C', c, 10, -6), V('D', d, -10, -6)]; })(),
    '90° を見こむ点 → ABが直径の円', '直角が2つ → 四点共円', C.green, FILL.green),
  S('まとめです。同じ側にある2点C、Dで ∠ACB＝∠ADB ならA、B、C、Dは同一円周上。理由は、Dが内側なら角は大きく、外側なら小さくなるので、ちょうど等しいのは円周上だけだからです。証明で使うときは「同じ側」「同じ線分」を必ず書きます。',
    [bx(20, 10, 280, 30, '∠ACB ＝ ∠ADB（同じ側）', C.blue, FILL.blue, 13), bx(20, 46, 280, 30, '→ A、B、C、D は同一円周上', C.green, FILL.green, 13), bx(20, 82, 280, 30, '使うと円周角の定理が使える', C.purple, FILL.purple, 13)],
    '条件：同じ線分を見て、同じ側', undefined, C.green, FILL.green),
], '円周角の定理の逆と四点共円');

// ══════════════════════════════════════════════
// 58 接線の性質
// ══════════════════════════════════════════════
const tO: P = [90, 80], tr = 48;
const tP: P = [170, 80];
const tT = pt(tO[0], tO[1], tr, 53.13), tT2 = pt(tO[0], tO[1], tr, -53.13);
const setsusen: DiagramFigure = show([
  S('円に1点だけでふれる直線を「接線（せっせん）」、ふれる点を「接点（せってん）」と言います。円の外の点Pから、接点TまでPTを結ぶと接線ができます。',
    [circ(tO, tr), seg(tP, tT, C.blue, false, 2.4), seg(tO, tT, C.gray), dot(tO), dot(tT, C.red), V('O', tO, 0, 13), V('T', tT, -4, -9, C.red), V('P', tP, 10, 4)],
    '接線 PT と接点 T', undefined, C.blue, FILL.blue),
  S('❓ 接線と、接点を通る半径のなす角は何度でしょう。答えは90°です。接線は接点で半径に垂直（すいちょく）です。',
    [circ(tO, tr), seg(tP, tT, C.blue, false, 2.4), seg(tO, tT, C.red, false, 2.2), rt(tT, tO, tP, 9), dot(tO), dot(tT, C.red), V('O', tO, 0, 13), V('T', tT, -4, -9, C.red), V('P', tP, 10, 4)],
    '接線 ⟂ 半径（90°）', undefined, C.blue, FILL.blue),
  S('❓ なぜ90°なの？ 接線上でT以外の点Qをとると、Qは円の外側にあるので、中心Oからの距離 OQ は半径 OT より長くなります。つまりTは、Oから接線までのいちばん近い点です。',
    (() => { const T: P = [tO[0], tO[1] - tr]; const Q: P = [tO[0] + 75, T[1]]; return [circ(tO, tr), seg([tO[0] - 60, T[1]], [tO[0] + 100, T[1]], C.blue, false, 2.4), seg(tO, T, C.red, false, 2.2), seg(tO, Q, C.gray, true), dot(tO), dot(T, C.red), dot(Q, C.gray), V('O', tO, -10, 6), V('T', T, -8, -8, C.red), V('Q', Q, 6, -8), lb(tO[0] + 45, tO[1] - 10, 'OQ ＞ OT', 10, C.gray, 'middle', true)]; })(),
    'OQ ＞ OT（Tがいちばん近い）', 'T以外の点は円の外', C.purple, FILL.purple),
  S('❓ いちばん近い点だと、なぜ垂直なの？ 点から直線までの最短の道は、いつも垂線（すいせん）だからです。斜めに引いた線は、垂線より長くなります。OTが最短なので、OTは接線に垂直です。',
    (() => { const T: P = [tO[0], tO[1] - tr]; const Q: P = [tO[0] + 75, T[1]]; return [circ(tO, tr), seg([tO[0] - 60, T[1]], [tO[0] + 100, T[1]], C.blue, false, 2.4), seg(tO, T, C.red, false, 2.2), seg(tO, Q, C.gray, true), rt(T, tO, Q, 9), dot(tO), V('O', tO, -10, 6), V('T', T, -8, -8, C.red), V('Q', Q, 6, -8)]; })(),
    '最短の線 ＝ 垂線', 'OT ⟂ 接線', C.green, FILL.green),
  S('円の外の点Pから、円に接線を2本引けます。接点をA、Bとすると、PA と PB の長さは等しくなります（PA＝PB）。',
    [circ(tO, tr), seg(tP, tT, C.blue, false, 2.4), seg(tP, tT2, C.blue, false, 2.4), seg(tO, tT, C.gray), seg(tO, tT2, C.gray), seg(tO, tP, C.gray, true), ...tick(tP, tT, 1), ...tick(tP, tT2, 1), dot(tO), V('O', tO, -8, 4), V('A', tT, -2, -9), V('B', tT2, -2, 13), V('P', tP, 10, 4)],
    'PA ＝ PB', '2本の接線の長さは等しい', C.blue, FILL.blue),
  S('❓ なぜ等しいの？ 中心Oと P を結びます。△OAP と △OBP を比べます。OA＝OB（どちらも半径）、OPは共通、∠OAP＝∠OBP＝90°（接線と半径は垂直）です。',
    [circ(tO, tr, 'rgba(0,0,0,0)'), hl([tO, tT, tP], BL, C.blue), hl([tO, tT2, tP], GR, C.green), ...tick(tO, tT, 1), ...tick(tO, tT2, 1), rt(tT, tO, tP, 8), rt(tT2, tO, tP, 8), V('O', tO, -8, 4), V('A', tT, -2, -9), V('B', tT2, -2, 13), V('P', tP, 10, 4)],
    'OA ＝ OB、OP共通、直角が1つずつ', undefined, C.purple, FILL.purple),
  S('直角三角形で「斜辺と他の1辺が等しい」ので、△OAP≡△OBP（合同）です。合同な図形は対応する辺が等しいので PA＝PB。また対応する角も等しく、∠APO＝∠BPO なので、直線OPは∠APBの二等分線になります。',
    [circ(tO, tr, 'rgba(0,0,0,0)'), hl([tO, tT, tP], BL, C.blue), hl([tO, tT2, tP], GR, C.green), ...tick(tP, tT, 1), ...tick(tP, tT2, 1), ang(tP, tT, tO, 16), ang(tP, tO, tT2, 20, C.green, GR), V('P', tP, 10, 4)],
    '△OAP ≡ △OBP → PA ＝ PB', '∠APO ＝ ∠BPO', C.green, FILL.green),
  S('計算に使ってみましょう。半径3cmの円の中心Oから5cm離れた点Pから接線を引きます。OT⊥PTなので、△OTPは直角三角形。三平方の定理で PT²＋3²＝5²、PT²＝25−9＝16、PT＝4cmです。',
    [circ(tO, tr), hl([tO, tT, tP], BL, C.blue), seg(tO, tT, C.gray), rt(tT, tO, tP, 9), sl(tO, tT, '3', -10, C.red, 13), sl(tT, tP, '4', -10, C.green, 14), sl(tO, tP, '5', 11, C.red, 13), V('T', tT, -4, -9), V('P', tP, 10, 4), V('O', tO, -8, 4)],
    '3² ＋ PT² ＝ 5² → PT ＝ 4', '検算：9 ＋ 16 ＝ 25 ✓（3・4・5の三角形）', C.red, FILL.red),
  S('2つの円が外側でふれ合う（外接）とき、接点は2つの中心を結ぶ直線の上にあります。❓ なぜ？ 接点で共通の接線を引くと、どちらの半径もその接線に垂直で、2本の半径が同じ直線上に並ぶからです。だから中心間の距離は半径の和になります。',
    (() => { const o1: P = [55, 76], o2: P = [140, 76]; return [ci(o1[0], o1[1], 24, undefined, C.blue, FILL.blue), ci(o2[0], o2[1], 60, undefined, C.green, FILL.green), seg(o1, o2, C.red, false, 2.2), seg([79, 20], [79, 132], C.gray, true), dot(o1), dot(o2), dot([79, 76], C.red), V('O₁', o1, 0, -32), V('O₂', o2, 0, -68), lb(67, 68, '2', 11, C.blue, 'middle', true), lb(109, 68, '5', 11, C.green, 'middle', true)]; })(),
    '中心間の距離 ＝ 2 ＋ 5 ＝ 7', '半径2と5の円が外接', C.green, FILL.green),
  S('接線の長さから図形の形が分かる例です。円外の点Pから引いた2本の接線がなす角∠APBが60°だとします。PA＝PB（二等辺三角形）で頂角が60°なら、底角も60°になり、△PABは正三角形です。',
    (() => { const P2: P = [186, 80]; const a = pt(90, 80, 48, 60), b = pt(90, 80, 48, -60); return [circ(tO, tr), hl([P2, a, b], BL, C.blue), seg(P2, a, C.blue, false, 2.4), seg(P2, b, C.blue, false, 2.4), seg(tO, a, C.gray), seg(tO, b, C.gray), ...tick(P2, a, 1), ...tick(P2, b, 1), ...tick(a, b, 1), V('A', a, -2, -9), V('B', b, -2, 13), V('P', P2, 10, 4), V('O', tO, -8, 4)]; })(),
    'PA ＝ PB、∠P ＝ 60° → 正三角形', undefined, C.purple, FILL.purple),
  S('さらに、四角形OAPBの4つの角の和は360°です。∠OAP＝∠OBP＝90°、∠P＝60°なので、中心角 ∠AOB＝360°−90°−90°−60°＝120°。接線の2本のなす角と中心角の和は、いつも180°になります。',
    (() => { const P2: P = [186, 80]; const a = pt(90, 80, 48, 60), b = pt(90, 80, 48, -60); return [circ(tO, tr, 'rgba(0,0,0,0)'), pg([tO, a, P2, b], C.blue, 'rgba(2,132,199,0.10)'), rt(a, tO, P2, 8), rt(b, tO, P2, 8), angL(tO, a, b, 18, '120°', C.red, 10), angL(P2, a, b, 26, '60°', C.blue, 10), V('A', a, -2, -9), V('B', b, -2, 13), V('P', P2, 10, 4), V('O', tO, -8, 4)]; })(),
    '90 ＋ 90 ＋ 60 ＋ 120 ＝ 360°', '四角形の内角の和', C.red, FILL.red),
  S('まとめです。①接線は接点を通る半径に垂直 ②円の外の1点から引いた2本の接線の長さは等しい。理由は「接点は円の中で中心にいちばん近い点」と「直角三角形の合同」です。計算では、半径・接線・中心を結ぶ直線で直角三角形を作ります。',
    [bx(20, 10, 280, 30, '接線 ⟂ 半径（90°）', C.blue, FILL.blue, 13), bx(20, 46, 280, 30, 'PA ＝ PB（接線の長さ）', C.green, FILL.green, 13), bx(20, 82, 280, 30, '直角三角形をつくって三平方', C.purple, FILL.purple, 13)],
    '理由：最短の距離と合同', undefined, C.green, FILL.green),
], '接線の性質');

// ══════════════════════════════════════════════
// 59 円に内接する四角形
// ══════════════════════════════════════════════
const iO: P = [160, 82], iR = 58;
const iA = pt(iO[0], iO[1], iR, 90), iB = pt(iO[0], iO[1], iR, 195), iC = pt(iO[0], iO[1], iR, 250), iD = pt(iO[0], iO[1], iR, 345);
const iQuad = (): E[] => [circ(iO, iR), pg([iA, iB, iC, iD], C.blue, 'rgba(2,132,199,0.10)'), V('A', iA, 0, -8), V('B', iB, -10, 2), V('C', iC, -12, 7), V('D', iD, 10, 2)];
const naisetsu: DiagramFigure = show([
  S('円周上に4点A、B、C、Dをとって結んでできる四角形を、円に内接（ないせつ）する四角形と言います。4つの頂点がすべて円の上にあります。',
    iQuad(), '円に内接する四角形 ABCD', '4つの頂点が円周上', C.blue, FILL.blue),
  S('❓ この四角形の角にはどんな関係があるの？ 向かい合う角の和が180°になります。∠A＋∠C＝180°、∠B＋∠D＝180° です。',
    [...iQuad(), ang(iA, iB, iD, 14, C.red, RD), ang(iC, iB, iD, 14, C.green, GR)],
    '∠A ＋ ∠C ＝ 180°', '∠B ＋ ∠D ＝ 180°', C.blue, FILL.blue),
  S('❓ なぜ180°になるの？ まず ∠A を見ます。∠A は、弧BCD（Aと反対側の弧）に対する円周角です。円周角は、その弧の中心角の半分でしたね。',
    [...iQuad(), sc(iO[0], iO[1], iR, 250 - 55, 345 + 0, C.red, RD), ang(iA, iB, iD, 14, C.red, RD)],
    '∠A は 弧BCD の円周角', '弧BCD が150°なら ∠A ＝ 75°', C.red, FILL.red),
  S('次に ∠C を見ます。∠C は、弧BAD（Cと反対側の弧）に対する円周角です。弧BADは、円の残りの部分なので 360°−150°＝210°。円周角はその半分で、∠C＝105°です。',
    [...iQuad(), ang(iC, iB, iD, 14, C.green, GR), lb(262, 40, '弧BAD＝210°', 10, C.green, 'middle', true)],
    '∠C は 弧BAD の円周角', '210° ÷ 2 ＝ 105°', C.green, FILL.green),
  S('❓ 足すとなぜ180°なの？ ∠A は弧BCDの半分、∠C は弧BADの半分です。弧BCD と 弧BAD を合わせるとちょうど円1周（360°）。だから ∠A＋∠C ＝ 360°÷2 ＝ 180° です。',
    [...iQuad(), ang(iA, iB, iD, 14, C.red, RD), ang(iC, iB, iD, 14, C.green, GR)],
    '（150° ＋ 210°）÷ 2 ＝ 180°', '弧を合わせると円1周＝360°', C.purple, FILL.purple),
  S('例題：円に内接する四角形ABCDで ∠A＝75° のとき、∠C は 180°−75°＝105° です。検算は 75°＋105°＝180° が成り立つかを見ればOK。もう一組も同じで、∠Bが100°なら∠Dは80°です。',
    [...iQuad(), angL(iA, iB, iD, 28, '75°', C.red, 10), angL(iC, iB, iD, 26, '105°', C.green, 10)],
    '∠C ＝ 180° − 75° ＝ 105°', '検算：75 ＋ 105 ＝ 180 ✓', C.red, FILL.red),
  S('もうひとつの性質。1つの外角は、それととなり合わない向かい合う内角に等しくなります。たとえば頂点Aで、辺DAをのばした先をEとします。∠BAE（∠Aの外角）＝ ∠C です。',
    (() => { const E0: P = [iA[0] - 6 * 3 * 0.7, iA[1] - 8]; const dir: P = [iA[0] - iD[0], iA[1] - iD[1]]; const L = Math.hypot(dir[0], dir[1]); const Ee: P = [iA[0] + dir[0] / L * 16, iA[1] + dir[1] / L * 16]; void E0; return [...iQuad(), seg(iA, Ee, C.red, false, 2.2), ang(iA, iB, Ee, 14, C.red, RD), V('E', Ee, -8, -2, C.red)]; })(),
    '外角 ∠BAE ＝ ∠C', '外角は向かい合う内角と等しい', C.red, FILL.red),
  S('❓ なぜ外角が向かい合う内角に等しいの？ 外角は 180°−∠A です（一直線が180°だから）。いっぽう ∠C も、先ほど見たように 180°−∠A でした。同じものと等しいので、外角＝∠Cです。',
    [...iQuad(), bx(30, 14, 100, 26, '外角＝180°−∠A', C.red, FILL.red, 10), bx(190, 14, 100, 26, '∠C＝180°−∠A', C.green, FILL.green, 10)],
    '外角 ＝ 180° − ∠A ＝ ∠C', undefined, C.purple, FILL.purple),
  S('数を入れます。円に内接する四角形ABCDで、∠Aの外角が110°のとき、∠C＝110° です。確かめると、∠A＝180°−110°＝70°、∠C＝180°−70°＝110° で、外角と同じです。',
    [...iQuad(), lb(70, 20, '外角110° ＝ ∠C', 11, C.red, 'middle', true)],
    '外角 110° → ∠C ＝ 110°', '検算：70 ＋ 110 ＝ 180 ✓', C.red, FILL.red),
  S('逆も成り立ちます。四角形の向かい合う角の和が180°なら、その四角形は円に内接します。❓ なぜ？ 円周角の定理の逆（四点共円）と同じ考えで、向かい合う角の和が180°になるのは、4点が同じ円周上にあるときだけだからです。証明でよく使います。',
    [...iQuad(), lb(66, 24, '∠A＋∠C＝180°', 11, C.purple, 'middle', true)],
    '和が180° → 円に内接する', '（四点共円の判定）', C.purple, FILL.purple),
  S('どんな四角形が円に入るか考えてみましょう。長方形は 90°＋90°＝180° なので入ります。正方形も同じ。等脚台形（とうきゃくだいけい）も入ります。平行四辺形は向かい合う角が等しいので、180°になるのは 90°ずつ（長方形）のときだけです。',
    (() => { const r = 55; const a = pt(iO[0], iO[1], r, 35), b = pt(iO[0], iO[1], r, 145), c = pt(iO[0], iO[1], r, 215), d = pt(iO[0], iO[1], r, 325); return [ci(iO[0], iO[1], r, undefined, C.gray, FILL.warm), pg([a, b, c, d], C.blue, 'rgba(2,132,199,0.15)'), rt(a, b, d, 8), rt(b, a, c, 8), rt(c, b, d, 8), rt(d, a, c, 8), V('長方形', iO, 0, 4, C.blue)]; })(),
    '長方形は 90°＋90°＝180°', '平行四辺形は長方形だけ入る', C.green, FILL.green),
  S('まとめです。円に内接する四角形では、①向かい合う角の和は180° ②外角は向かい合う内角に等しい。理由は、円周角が「反対側の弧の半分」で、2つの弧を合わせると円1周（360°）になるからです。逆も使えます。',
    [bx(20, 10, 280, 30, '向かい合う角の和 ＝ 180°', C.blue, FILL.blue, 13), bx(20, 46, 280, 30, '外角 ＝ 向かい合う内角', C.red, FILL.red, 13), bx(20, 82, 280, 30, '逆：和が180°なら円に内接', C.green, FILL.green, 13)],
    '理由：2つの弧で円1周', undefined, C.green, FILL.green),
], '円に内接する四角形');

// ══════════════════════════════════════════════
// 60 弧・弦と中心角の関係
// ══════════════════════════════════════════════
const kO: P = [160, 78], kR = 62;
const kP = (deg: number): P => pt(kO[0], kO[1], kR, deg);
const kk60: DiagramFigure = show([
  S('円の中心をOとします。円周上の2点A、Bを結ぶ線分ABを「弦（げん）」、AからBまでの円周の部分を「弧（こ）」、∠AOBを「中心角」と言います。この3つの関係を調べます。',
    [circ(kO, kR), sc(kO[0], kO[1], kR, 30, 90, C.red, RD), seg(kO, kP(30), C.gray), seg(kO, kP(90), C.gray), seg(kP(30), kP(90), C.blue, false, 2.4), dot(kO), V('A', kP(30), 12, -2), V('B', kP(90), 0, -8), V('O', kO, -6, 12)],
    '弧AB・弦AB・中心角∠AOB', '赤：弧と中心角、青：弦', C.blue, FILL.blue),
  S('❓ 中心角が等しいと、弧はどうなるの？ 中心角が等しい2つの扇形は、どちらも同じ大きさなので、弧の長さも等しくなります。図では中心角がともに60°の弧ABと弧CDが同じ長さです。',
    [circ(kO, kR), sc(kO[0], kO[1], kR, 30, 90, C.red, RD), sc(kO[0], kO[1], kR, 180, 240, C.red, RD), V('A', kP(30), 12, -2), V('B', kP(90), 0, -8), V('C', kP(180), -10, -2), V('D', kP(240), -6, 12), lb(kO[0] + 18, kO[1] - 22, '60°', 10, C.red, 'middle', true), lb(kO[0] - 26, kO[1] + 14, '60°', 10, C.red, 'middle', true)],
    '中心角が等しい → 弧が等しい', undefined, C.red, FILL.red),
  S('❓ なぜ弧が等しいの？ 円を、中心Oのまわりに回転させると、扇形AOBを扇形COD にぴったり重ねられます。重なる図形の弧どうしは同じ長さだからです。',
    [circ(kO, kR), sc(kO[0], kO[1], kR, 30, 90, C.red, RD), sc(kO[0], kO[1], kR, 180, 240, C.red, RD), ar(kP(100)[0] - 30, kP(100)[1] - 6, kP(150)[0] - 4, kP(150)[1] - 12, C.main, true), dot(kO)],
    '回転させると重なる', '重なる弧は同じ長さ', C.purple, FILL.purple),
  S('❓ 弦はどうなるの？ 中心角が等しいとき、弦の長さも等しくなります。△OABと△OCDを比べると、OA＝OC、OB＝OD（どれも半径）で、その間の角 ∠AOB＝∠COD。「2辺とその間の角」が等しいので合同です。',
    [circ(kO, kR, 'rgba(0,0,0,0)'), hl([kO, kP(30), kP(90)], BL, C.blue), hl([kO, kP(180), kP(240)], GR, C.green), ...tick(kO, kP(30), 1), ...tick(kO, kP(90), 2), ...tick(kO, kP(180), 1), ...tick(kO, kP(240), 2), V('A', kP(30), 12, -2), V('B', kP(90), 0, -8), V('C', kP(180), -10, -2), V('D', kP(240), -6, 12)],
    '△OAB ≡ △OCD → AB ＝ CD', '2辺とその間の角が等しい', C.blue, FILL.blue),
  S('まとめると、同じ円で、中心角が等しい ⇔ 弧が等しい ⇔ 弦が等しい、が成り立ちます（⇔ は「どちらからでも言える」の意味）。弧が等しいと分かれば弦も等しく、弦が等しいと分かれば中心角も等しいと言えます。',
    [bx(20, 14, 280, 32, '中心角が等しい', C.red, FILL.red, 14), bx(20, 58, 280, 32, '弧が等しい', C.green, FILL.green, 14), bx(20, 102, 280, 32, '弦が等しい', C.blue, FILL.blue, 14), lb(160, 52, '⇕', 14, C.gray, 'middle', true), lb(160, 96, '⇕', 14, C.gray, 'middle', true)],
    '3つのうち1つ言えれば、ほかも言える', undefined, C.green, FILL.green),
  S('❓ 中心角が2倍になると、弧の長さは？ 弧の長さは中心角に比例します。中心角60°の弧と120°の弧では、120°の弧のほうが2倍の長さです。',
    [circ(kO, kR), sc(kO[0], kO[1], kR, 30, 90, C.blue, BL), sc(kO[0], kO[1], kR, 90, 210, C.green, GR), lb(kO[0] + 20, kO[1] - 22, '60°', 10, C.blue, 'middle', true), lb(kO[0] - 20, kO[1] - 10, '120°', 10, C.green, 'middle', true), dot(kO)],
    '弧の長さは 1 : 2', '中心角 60° : 120° ＝ 1 : 2', C.blue, FILL.blue),
  S('❓ なぜ比例するの？ 円周は中心角360°分の長さです。中心角が□°の弧は、円周の □/360 にあたります。中心角が2倍になれば、円周に対する割合も2倍、弧の長さも2倍になるからです。',
    [bx(20, 18, 280, 34, '弧の長さ ＝ 円周 × 中心角/360', C.blue, FILL.blue, 14), bx(20, 66, 130, 34, '60° → 円周の 1/6', C.blue, FILL.blue, 11), bx(170, 66, 130, 34, '120° → 円周の 2/6', C.green, FILL.green, 11), lb(160, 122, '1/6 の 2倍が 2/6', 12, C.gray, 'middle', true)],
    '割合が2倍 → 弧も2倍', undefined, C.blue, FILL.blue),
  S('❓ では弦の長さも2倍になるの？ ならないのです。中心角60°の弦は、OA＝OB＝半径で頂角60°の正三角形ができるので、弦＝半径。半径を10とすると弦は10です。',
    (() => { const a = kP(30), b = kP(90); return [circ(kO, kR), hl([kO, a, b], BL, C.blue), ...tick(kO, a, 1), ...tick(kO, b, 1), ...tick(a, b, 1), lb(kO[0] + 12, kO[1] - 12, '60°', 9, C.blue, 'middle', true), V('A', a, 12, -2), V('B', b, 0, -8)]; })(),
    '60°の弦 ＝ 半径 ＝ 10', '正三角形（3辺が等しい）', C.blue, FILL.blue),
  S('中心角120°の弦は、△OACの頂角が120°の二等辺三角形。Oから弦に垂線を下ろすと、30°・60°・90°の直角三角形が2つでき、半分の長さは 10×(√3/2)。弦は 10√3≒17.3 です。2倍の20にはなりません。',
    (() => { const b = kP(210), c = kP(330); const m = mid(b, c); return [circ(kO, kR), hl([kO, b, c], GR, C.green), seg(kO, m, C.ink, true), rt(m, kO, b, 7), lb(kO[0], kO[1] - 12, '120°', 10, C.green, 'middle', true), V('A', b, -10, 4), V('C', c, 10, 4), V('M', m, 0, 12)]; })(),
    '120°の弦 ＝ 10√3 ≒ 17.3', '2倍の20ではない', C.green, FILL.green),
  S('❓ なぜ弦は2倍にならないの？ 弧が2つつながった形 ABC を考えます。弦ACは、ABとBCを2本つないだ折れ線より近道です。三角形では「2辺の和は残りの1辺より長い」ので、AC＜AB＋BC＝2AB。中心角が2倍でも弦は2倍以下です。',
    (() => { const a = kP(30), b = kP(90), c = kP(150); return [circ(kO, kR), seg(a, b, C.blue, false, 2.6), seg(b, c, C.blue, false, 2.6), seg(a, c, C.red, false, 2.6), V('A', a, 12, 0), V('B', b, 0, -8), V('C', c, -12, 0), lb(160, 110, 'AB ＋ BC ＞ AC', 12, C.gray, 'middle', true)];})(),
    'AC ＜ AB ＋ BC ＝ 2AB', '弦は近道 → 比例しない', C.red, FILL.red),
  S('中心Oから弦ABに垂線OMを下ろすと、Mは弦の中点になります。❓ なぜ？ △OAMと△OBMで、OA＝OB（半径）、OMは共通、∠OMA＝∠OMB＝90°。直角三角形の「斜辺と他の1辺」が等しいので合同で、AM＝BM です。',
    (() => { const a = kP(210), b = kP(330); const m = mid(a, b); return [circ(kO, kR, 'rgba(0,0,0,0)'), hl([kO, a, m], BL, C.blue), hl([kO, b, m], GR, C.green), seg(a, b, C.ink, false, 2.2), rt(m, kO, b, 7), ...tick(a, m, 1), ...tick(m, b, 1), V('A', a, -10, 4), V('B', b, 10, 4), V('M', m, 0, 13), V('O', kO, 0, -8)]; })(),
    '△OAM ≡ △OBM → AM ＝ BM', '垂線は弦を二等分する', C.blue, FILL.blue),
  S('この性質で計算ができます。半径10、弦の長さ16の円で、中心から弦までの距離を求めます。AM＝16÷2＝8。△OAMで三平方の定理を使い、OM²＝10²−8²＝36、OM＝6。検算は 6²＋8²＝100＝10² です。',
    (() => { const a = kP(216.87), b = kP(323.13); const m = mid(a, b); return [circ(kO, kR, 'rgba(0,0,0,0)'), hl([kO, a, m], BL, C.blue), seg(a, b, C.ink, false, 2.2), seg(kO, m, C.red, false, 2), rt(m, kO, b, 7), sl(a, m, '8', -9, C.blue, 12), sl(kO, a, '10', 10, C.gray, 12), sl(kO, m, '？', -9, C.red, 12), V('M', m, 0, 13), V('O', kO, 0, -8)]; })(),
    'OM ＝ √(10² − 8²) ＝ 6', '検算：6² ＋ 8² ＝ 100 ✓', C.red, FILL.red),
  S('まとめです。同じ円で、中心角が等しい ⇔ 弧が等しい ⇔ 弦が等しい。弧の長さは中心角に比例しますが、弦は比例しません。理由は、中心角が同じなら三角形が合同になることと、弦は折れ線より近道だからです。',
    [bx(20, 10, 280, 30, '中心角＝弧＝弦（等しいことは同じ）', C.blue, FILL.blue, 12), bx(20, 46, 280, 30, '弧は中心角に比例（弦は比例しない）', C.red, FILL.red, 12), bx(20, 82, 280, 30, '中心から弦へ垂線 → 弦を二等分', C.green, FILL.green, 12)],
    '弦は近道だから比例しない', undefined, C.green, FILL.green),
], '弧・弦と中心角の関係');

export const DIAGRAMS_KOKO_SUGAKU_OLD_E: Record<string, DiagramFigure> = {
  '三角形の合同条件': goudou,
  '三角形の相似条件': souji,
  '相似比と面積比・体積比': menseki,
  '平行線と線分の比': heikou,
  '角の二等分線と線分の比': nibun,
  'チェバの定理': ceva,
  'メネラウスの定理': menelaus,
  '円周角の定理': enshu,
  '円周角の定理の逆と四点共円': gyaku,
  '接線の性質': setsusen,
  '円に内接する四角形': naisetsu,
  '弧・弦と中心角の関係': kk60,
};
