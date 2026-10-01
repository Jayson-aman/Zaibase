// 高校受験 数学（中2〜中3）30 単元の「動く図解スライド」（図のなかった単元に 1 つずつ）。
// 「なぜ？」の連鎖で、7枚以上。上に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, flow, stack } from './diagram-kit';

type Pt = [number, number];
type El = DiagramElement;

// ───────── 作図の小道具 ─────────
const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const at = (a: Pt, b: Pt, t: number): Pt => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const seg = (a: Pt, b: Pt, col: string = C.ink, dashed = false, w = 1.6): El => ln(a[0], a[1], b[0], b[1], col, dashed, w);
const shape = (pts: Pt[], col: string = C.ink, fill: string = FILL.warm): El => pg(pts, col, fill);
const hi = (pts: Pt[], col: string, a = 0.22): El => pg(pts, col, rgba(col, a));
function rgba(hex: string, a: number): string {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
}
const nm = (s: string, p: Pt, dx: number, dy: number, col: string = C.ink, size = 11): El => lb(p[0] + dx, p[1] + dy, s, size, col, 'middle', true);
const dot = (p: Pt, col: string = C.ink): El => ci(p[0], p[1], 2.6, undefined, col, col);
const unit = (a: Pt, b: Pt): Pt => {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  return [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
};
/** 等しい長さの印（短い横線を n 本） */
const tick = (a: Pt, b: Pt, n = 1, col: string = C.red): El[] => {
  const m = mid(a, b);
  const u = unit(a, b);
  const nv: Pt = [-u[1], u[0]];
  const out: El[] = [];
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 4;
    const cx = m[0] + u[0] * o;
    const cy = m[1] + u[1] * o;
    out.push(ln(cx - nv[0] * 5, cy - nv[1] * 5, cx + nv[0] * 5, cy + nv[1] * 5, col, false, 2));
  }
  return out;
};
/** 平行の印（山かっこ） */
const par = (a: Pt, b: Pt, n = 1, col: string = C.blue): El[] => {
  const m = mid(a, b);
  const u = unit(a, b);
  const nv: Pt = [-u[1], u[0]];
  const out: El[] = [];
  for (let i = 0; i < n; i++) {
    const o = (i - (n - 1) / 2) * 6;
    const c: Pt = [m[0] + u[0] * o, m[1] + u[1] * o];
    const tip: Pt = [c[0] + u[0] * 3, c[1] + u[1] * 3];
    out.push(ln(c[0] - u[0] * 3 + nv[0] * 4, c[1] - u[1] * 3 + nv[1] * 4, tip[0], tip[1], col, false, 2));
    out.push(ln(c[0] - u[0] * 3 - nv[0] * 4, c[1] - u[1] * 3 - nv[1] * 4, tip[0], tip[1], col, false, 2));
  }
  return out;
};
const dirDeg = (v: Pt, p: Pt) => (Math.atan2(-(p[1] - v[1]), p[0] - v[0]) * 180) / Math.PI;
/** 角の印（頂点 v、辺の方向 a と b のあいだの小さい方の角）。n=2 で二重の弧 */
const arc = (v: Pt, a: Pt, b: Pt, r = 14, col: string = C.red, n = 1): El[] => {
  let f = dirDeg(v, a);
  let t = dirDeg(v, b);
  let d = (((t - f) % 360) + 360) % 360;
  if (d > 180) {
    f = t;
    d = 360 - d;
  }
  const out: El[] = [sc(v[0], v[1], r, f, f + d, col, rgba(col, 0.2))];
  if (n >= 2) out.push(sc(v[0], v[1], r + 4, f, f + d, col, 'rgba(0,0,0,0)'));
  return out;
};
/** 直角の印 */
const rt = (v: Pt, a: Pt, b: Pt, s = 8, col: string = C.red): El[] => {
  const ua = unit(v, a);
  const ub = unit(v, b);
  const p1: Pt = [v[0] + ua[0] * s, v[1] + ua[1] * s];
  const p2: Pt = [p1[0] + ub[0] * s, p1[1] + ub[1] * s];
  const p3: Pt = [v[0] + ub[0] * s, v[1] + ub[1] * s];
  return [ln(p1[0], p1[1], p2[0], p2[1], col, false, 1.8), ln(p2[0], p2[1], p3[0], p3[1], col, false, 1.8)];
};
/** 点列（頂点ラベル）。offs は [dx,dy] を点ごとに */
const names = (pts: Record<string, Pt>, offs: Record<string, [number, number]>, col: string = C.ink): El[] =>
  Object.keys(pts).map((k) => nm(k, pts[k], offs[k]?.[0] ?? 0, offs[k]?.[1] ?? 0, col));
/** 辺の上のことば（長さの数値など） */
const tag = (s: string, a: Pt, b: Pt, off: number, col: string = C.ink, size = 11): El => {
  const m = mid(a, b);
  const u = unit(a, b);
  return lb(m[0] - u[1] * off, m[1] + u[0] * off, s, size, col, 'middle', true);
};

// 下の帯（y=150 から）に、そのスライドのひとこと
const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 190, t, size, color, 'middle', true));
const cap2 = (t1: string, t2: string, color: string, fill: string, size = 13) =>
  band(150, lb(160, 164, t1, 11, C.gray, 'middle'), bx(16, 174, 288, 52, t2, color, fill, size));
/** 式を 2 行以内で見せる帯 */
const eqn = (t: string, color: string = C.main, fill: string = FILL.warm, size = 13) => band(150, bx(16, 164, 288, 60, t, color, fill, size));

const fillOf = (col: string): string =>
  ({ [C.blue]: FILL.blue, [C.green]: FILL.green, [C.red]: FILL.red, [C.purple]: FILL.purple, [C.main]: FILL.warm, [C.gray]: FILL.gray } as Record<string, string>)[col] ?? FILL.warm;
/** 上から順に並べた箱（まとめ用）。1行の高さ h、すき間 gap */
const rows = (texts: string[], opts?: { y0?: number; h?: number; gap?: number; cols?: string[]; size?: number }): El[] => {
  const y0 = opts?.y0 ?? 6;
  const h = opts?.h ?? 30;
  const gap = opts?.gap ?? 4;
  const cols = opts?.cols ?? [C.blue, C.green, C.purple, C.red, C.main];
  return texts.map((t, i) => bx(8, y0 + i * (h + gap), 304, h, t, cols[i % cols.length], fillOf(cols[i % cols.length]), opts?.size ?? 12));
};
/** 縦にならんだ水平のものさし（長さの比の棒）。parts は [ラベル, 長さ(px), 色] */
const bar = (x0: number, y: number, parts: [string, number, string][], h = 22, size = 11): El[] => {
  let x = x0;
  const out: El[] = [];
  for (const [t, w, col] of parts) {
    out.push(bx(x, y, w, h, t, col, fillOf(col), size));
    x += w;
  }
  return out;
};

/** 2直線（p1-p2 と p3-p4）の交点 */
const isect = (p1: Pt, p2: Pt, p3: Pt, p4: Pt): Pt => {
  const d1: Pt = [p2[0] - p1[0], p2[1] - p1[1]];
  const d2: Pt = [p4[0] - p3[0], p4[1] - p3[1]];
  const den = d1[0] * d2[1] - d1[1] * d2[0];
  const t = ((p3[0] - p1[0]) * d2[1] - (p3[1] - p1[1]) * d2[0]) / den;
  return [p1[0] + d1[0] * t, p1[1] + d1[1] * t];
};
/** 円周上の点（中心 o、半径 r、角度 deg は数学の向き） */
const onC = (o: Pt, r: number, deg: number): Pt => [o[0] + r * Math.cos((deg * Math.PI) / 180), o[1] - r * Math.sin((deg * Math.PI) / 180)];


// ───────── s222 平行四辺形の証明①：対角線上に点をとる型 ─────────
const f_koko_math_s222: DiagramFigure = (() => {
  const p = { A: [100, 36] as Pt, B: [40, 116] as Pt, C: [220, 116] as Pt, D: [280, 36] as Pt };
  const E = at(p.B, p.D, 0.3);
  const F = at(p.B, p.D, 0.7);
  const base: El[] = [shape([p.A, p.B, p.C, p.D]), seg(p.B, p.D), dot(E), dot(F), ...names({ ...p, E, F }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9], E: [9, 11], F: [10, -8] })];
  return show(
    [
      {
        note: '問題です。平行四辺形ABCDの対角線BD上に、BE＝DF となる点E、Fをとります。AE＝CF であることを証明します。まず、証明で何をするのか、全体の見通しを立てましょう。',
        add: [...base, seg(p.A, E, C.red, true), seg(p.C, F, C.red, true), ...cap('BE＝DF のとき AE＝CF を示す', C.red)],
      },
      {
        note: '❓どの三角形を比べればよいでしょう。→ 示したい AE と CF を辺にもつ三角形です。△ABE と △CDF を比べて合同を言えば、対応する辺として AE＝CF が出てきます。',
        add: [hi([p.A, p.B, E], C.blue), hi([p.C, p.D, F], C.green), ...cap('AE と CF を辺にもつ △ABE と △CDF', C.blue)],
      },
      {
        note: '❓1つ目の「等しい」は何でしょう。→ 平行四辺形の対辺は等しいので AB＝DC です。「問題に書いてあるから」ではなく、平行四辺形の性質として使います。',
        add: [seg(p.A, p.B, C.red, false, 2.6), seg(p.D, p.C, C.red, false, 2.6), ...tick(p.A, p.B, 1), ...tick(p.D, p.C, 1), ...cap('① AB＝CD（平行四辺形の対辺）', C.red)],
      },
      {
        note: '❓では、等しい角は何でしょう。→ AB∥DC で、直線BDが2本の平行線を横切っています。だから ∠ABE と ∠CDF は錯角で等しくなります。対角の性質は使えません。∠ABE は ∠ABC の一部であって、角全体ではないからです。',
        add: [...arc(p.B, p.A, p.D, 18, C.green), ...arc(p.D, p.C, p.B, 18, C.green), ...par(p.A, p.B, 1), ...par(p.D, p.C, 1), ...cap('② AB∥DC の錯角 ∠ABE＝∠CDF', C.green)],
      },
      {
        note: '❓3つ目は何でしょう。→ 問題文で与えられた BE＝DF です。これは平行四辺形の性質ではなく仮定（もともとの条件）なので、「仮定より」と書きます。',
        add: [seg(p.B, E, C.purple, false, 2.6), seg(F, p.D, C.purple, false, 2.6), ...tick(p.B, E, 2, C.purple), ...tick(F, p.D, 2, C.purple), ...cap('③ BE＝DF（仮定より）', C.purple)],
      },
      {
        note: '❓この3つがそろうと、なぜ合同と言えるのでしょう。→ 等しい辺が2組、その間の角が1組です。「2組の辺とその間の角がそれぞれ等しい」という合同条件にぴったり当てはまるので、△ABE≡△CDF となります。',
        add: [lb(160, 72, '≡', 26, C.main, 'middle', true), ...cap2('2組の辺とその間の角がそれぞれ等しい', '△ABE ≡ △CDF', C.main, FILL.warm)],
      },
      {
        note: '❓合同だと、何が言えるのでしょう。→ 合同な図形では、対応する辺の長さが等しくなります。△ABE の AE は △CDF の CF に対応するので、AE＝CF が示せました。',
        add: [seg(p.A, E, C.red, false, 2.8), seg(p.C, F, C.red, false, 2.8), ...tick(p.A, E, 3), ...tick(p.C, F, 3), ...cap('合同な図形の対応する辺 → AE＝CF', C.red)],
      },
      {
        note: 'まとめです。根拠は3つ。①平行四辺形の対辺 ②AB∥DC の錯角 ③仮定 BE＝DF。これで合同になり、AE＝CF が言えます。注意点は ∠ABE＝∠CDF の根拠を「対角」と書かないことです。',
        add: fresh(...rows(['① AB＝CD　← 平行四辺形の対辺は等しい', '② ∠ABE＝∠CDF　← AB∥DC の錯角（対角ではない）', '③ BE＝DF　← 仮定', '2辺とその間の角 → △ABE≡△CDF → AE＝CF'], { y0: 8, h: 30, cols: [C.red, C.green, C.purple, C.main] }), ...cap('根拠の書き分けが、減点されないコツ', C.ink)),
      },
    ],
    '対角線上に点をとる型の証明',
  );
})();

// ───────── s223 平行四辺形の証明②：対角線の交点を通る直線 ─────────
const f_koko_math_s223: DiagramFigure = (() => {
  const p = { A: [100, 36] as Pt, B: [40, 116] as Pt, C: [220, 116] as Pt, D: [280, 36] as Pt };
  const O = mid(p.A, p.C);
  const P = at(p.A, p.B, 0.35);
  const Q: Pt = [2 * O[0] - P[0], 2 * O[1] - P[1]];
  const base: El[] = [shape([p.A, p.B, p.C, p.D]), seg(p.A, p.C), seg(p.B, p.D), seg(P, Q, C.red, false, 2), dot(O), dot(P), dot(Q), ...names({ ...p, O, P, Q }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9], O: [4, -9], P: [-9, 0], Q: [10, 2] })];
  return show(
    [
      {
        note: '問題です。平行四辺形ABCDの対角線の交点をOとします。Oを通る直線が辺ABと点P、辺DCと点Qで交わるとき、OP＝OQ であることを証明します。',
        add: [...base, ...cap('OP＝OQ を証明する', C.red)],
      },
      {
        note: '❓どの三角形を比べればよいでしょう。→ OP と OQ を辺にもつ三角形で、位置が向かい合っている △OAP と △OCQ です。この2つが合同なら OP＝OQ が出ます。',
        add: [hi([O, p.A, P], C.blue), hi([O, p.C, Q], C.green), ...cap('向かい合う △OAP と △OCQ を比べる', C.blue)],
      },
      {
        note: '❓1つ目の「等しい」の根拠は何でしょう。→ 平行四辺形の対角線は、それぞれの中点で交わります。Oは対角線ACの中点なので OA＝OC です。「対角線の長さが等しい」ではありません。それは長方形の性質で、平行四辺形では成り立たないからです。',
        add: [...tick(p.A, O, 1), ...tick(O, p.C, 1), ...cap('① OA＝OC（対角線は中点で交わる）', C.red)],
      },
      {
        note: '❓2つ目は何でしょう。→ 2本の直線が交わってできる、向かい合った角です。対頂角は等しいので ∠AOP＝∠COQ です。',
        add: [...arc(O, p.A, P, 16, C.purple), ...arc(O, p.C, Q, 16, C.purple), ...cap('② 対頂角 ∠AOP＝∠COQ', C.purple)],
      },
      {
        note: '❓3つ目は何でしょう。→ AB∥DC で、直線ACが2本の平行線を横切っています。だから ∠OAP と ∠OCQ は錯角で等しくなります。',
        add: [...arc(p.A, O, P, 16, C.green), ...arc(p.C, O, Q, 16, C.green), ...par(p.A, p.B, 1), ...par(p.D, p.C, 1), ...cap('③ AB∥DC の錯角 ∠OAP＝∠OCQ', C.green)],
      },
      {
        note: '❓この3つで、なぜ合同になるのでしょう。→ 1組の辺 OA＝OC と、その両端の角が等しいからです。「1組の辺とその両端の角がそれぞれ等しい」という合同条件に当てはまり、△OAP≡△OCQ です。',
        add: [lb(160, 108, '≡', 24, C.main, 'middle', true), ...cap2('1組の辺とその両端の角がそれぞれ等しい', '△OAP ≡ △OCQ', C.main, FILL.warm)],
      },
      {
        note: '❓合同だと何が言えるでしょう。→ 対応する辺が等しいので OP＝OQ です。さらに AP＝CQ も言えます。',
        add: [...tick(O, P, 2), ...tick(O, Q, 2), ...tick(p.A, P, 3, C.purple), ...tick(p.C, Q, 3, C.purple), ...cap('対応する辺 → OP＝OQ（AP＝CQ も）', C.red)],
      },
      {
        note: 'まとめです。Oを通る直線は、四角形APQDと四角形PBCQを、Oを中心に180°回すとぴったり重なる形に分けます。だから面積は必ず2等分されます。対角線の交点Oは、平行四辺形の「中心」です。',
        add: fresh(hi([p.A, P, Q, p.D], C.blue), hi([P, p.B, p.C, Q], C.green), shape([p.A, p.B, p.C, p.D], C.ink, 'rgba(0,0,0,0)'), seg(P, Q, C.red, false, 2), dot(O), nm('O', O, 4, -9), ...cap('Oを通る直線は 面積を2等分する', C.red)),
      },
    ],
    '対角線の交点を通る直線',
  );
})();

// ───────── s224 平行四辺形の角と長さの計算 ─────────
const f_koko_math_s224: DiagramFigure = (() => {
  const p = { A: [110, 40] as Pt, B: [50, 120] as Pt, C: [210, 120] as Pt, D: [270, 40] as Pt };
  const E: Pt = [150, 120];
  const para: El[] = [shape([p.A, p.B, p.C, p.D]), ...names({ ...p, E }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9], E: [0, 12] })];
  return show(
    [
      {
        note: '問題です。AB＝5cm、BC＝8cm の平行四辺形ABCDで、∠Aの二等分線が辺BCと交わる点をEとします。ECの長さを求めます。',
        add: [...para, seg(p.A, E, C.red, false, 2), dot(E), tag('5', p.A, p.B, 10, C.ink), tag('8', p.B, p.C, 10, C.ink), ...cap('EC の長さは？', C.red)],
      },
      {
        note: '❓二等分線から、何が言えるでしょう。→ ∠A を半分に分けるので、∠BAE と ∠DAE は等しくなります。',
        add: [...arc(p.A, p.B, E, 16, C.red), ...arc(p.A, E, p.D, 16, C.red), ...cap('二等分線 → ∠BAE＝∠DAE', C.red)],
      },
      {
        note: '❓平行四辺形からは、何が言えるでしょう。→ AD∥BC で、直線AEが2本の平行線を横切っています。だから ∠DAE と ∠AEB は錯角で等しくなります。これで3つの角がすべて等しくなりました。',
        add: [...arc(E, p.A, p.B, 16, C.red), ...par(p.A, p.D, 1), ...par(p.B, p.C, 1), ...cap('錯角 ∠DAE＝∠AEB', C.red)],
      },
      {
        note: '❓∠BAE＝∠AEB だと、△ABE はどんな三角形でしょう。→ 2つの角が等しい三角形は二等辺三角形です。等しい角にはさまれていない2辺が等しくなるので、BE＝BA です。',
        add: [hi([p.A, p.B, E], C.blue), ...tick(p.B, p.A, 1, C.blue), ...tick(p.B, E, 1, C.blue), ...cap('2つの角が等しい → BE＝BA', C.blue)],
      },
      {
        note: '❓BE の長さは？ → BE＝BA＝5cm です。すると EC は、BC の8cm から BE の5cm を引いて 8−5＝3cm です。',
        add: [...cap2('BE＝AB＝5、BC＝8 だから', 'EC＝8−5＝3 cm', C.green, FILL.green)],
      },
      {
        note: '❓「二等分線だから BC も半分で 4cm」ではだめなのでしょうか。→ だめです。二等分されるのは角で、辺ではありません。棒で表すと、BE は5、EC は3で、半分の4ずつにはなりません。',
        add: fresh(lb(160, 18, '辺BC（8cm）の分かれ方', 12, C.ink, 'middle', true), ...bar(20, 34, [['BE 5', 100, C.blue], ['EC 3', 60, C.green]], 26, 12), lb(160, 82, '二等分線による分け方（正しい）', 11, C.gray, 'middle'), ...bar(20, 98, [['4', 80, C.gray], ['4', 80, C.gray]], 26, 12), lb(160, 144, '半分ずつ（これはまちがい）', 11, C.red, 'middle', true), ...cap('二等分されるのは角。辺ではない', C.red)),
      },
      {
        note: '❓周の長さを使う問題ではどうするのでしょう。たとえば周が28cm、AB＝6cm のとき。→ 周は (AB＋BC)×2 なので、まず28÷2＝14 で、となり合う2辺の和を出します。BC＝14−6＝8cm です。28−6×2＝16 としないように注意します。',
        add: fresh(lb(160, 14, '周28cm ＝ AB＋BC＋CD＋DA', 12, C.ink, 'middle', true), ...bar(20, 30, [['AB 6', 60, C.blue], ['BC ?', 80, C.green], ['CD 6', 60, C.blue], ['DA ?', 80, C.green]], 28, 12), lb(160, 82, '半分にすると…', 11, C.gray, 'middle'), ...bar(20, 94, [['AB＋BC＝14', 140, C.main]], 28, 12), ...cap('28÷2＝14　BC＝14−6＝8cm', C.green)),
      },
      {
        note: 'まとめです。平行四辺形に角の二等分線があったら、①錯角で等しい角が3つできる、②二等辺三角形が現れて BE＝BA、③長さは「全体−BE」で出す。周は必ず÷2してから使います。',
        add: fresh(...rows(['平行四辺形＋角の二等分線　→　二等辺三角形', 'BE＝BA（等しい角の向かい側の辺）', 'EC＝BC−BE＝8−5＝3 cm', '周は÷2して、となり合う2辺の和にする'], { y0: 6, h: 30 }), ...cap('図に等しい印を書きこんでから計算する', C.ink)),
      },
    ],
    '角の二等分線が作る二等辺三角形',
  );
})();

// ───────── s226 平行四辺形になることの証明 ─────────
const f_koko_math_s226: DiagramFigure = (() => {
  const p = { A: [100, 36] as Pt, B: [40, 116] as Pt, C: [220, 116] as Pt, D: [280, 36] as Pt };
  const O = mid(p.A, p.C);
  const E = at(p.A, p.C, 0.25);
  const F = at(p.A, p.C, 0.75);
  const base: El[] = [shape([p.A, p.B, p.C, p.D], C.ink, 'rgba(0,0,0,0)'), seg(p.A, p.C), seg(p.B, p.D), dot(O), dot(E), dot(F), ...names({ ...p, O, E, F }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9], O: [10, 8], E: [-8, -8], F: [10, 8] })];
  return show(
    [
      {
        note: '問題です。平行四辺形ABCDの対角線の交点をOとします。対角線AC上に AE＝CF となる点E、Fをとるとき、四角形EBFDが平行四辺形になることを証明します。',
        add: [...base, seg(E, p.B, C.red, true), seg(p.B, F, C.red, true), seg(F, p.D, C.red, true), seg(p.D, E, C.red, true), ...cap('四角形 EBFD は平行四辺形？', C.red)],
      },
      {
        note: '❓平行四辺形になる条件は5つあります。どれを使えば短く書けるでしょう。→ 図を見ると、対角線BDとEFが同じ点Oで交わっています。「対角線がそれぞれの中点で交わる」という条件を使うのが近道です。',
        add: [hi([E, p.B, F, p.D], C.blue, 0.15), ...cap2('使う条件', '対角線がそれぞれの中点で交わる', C.blue, FILL.blue)],
      },
      {
        note: '❓まず、BDの真ん中はどこでしょう。→ もとの平行四辺形ABCDの対角線は、それぞれの中点で交わります。だから O は BD の中点で、BO＝DO です。',
        add: [...tick(p.B, O, 1, C.red), ...tick(O, p.D, 1, C.red), ...cap('① BO＝DO（ABCDの対角線は中点で交わる）', C.red)],
      },
      {
        note: '❓次に、EFの真ん中がOだと言うには？ → ACでも同じで、O は AC の中点なので AO＝CO です。',
        add: [...tick(p.A, O, 2, C.green), ...tick(O, p.C, 2, C.green), ...cap('② AO＝CO（同じく対角線は中点で交わる）', C.green)],
      },
      {
        note: '❓もう1つの手がかりは？ → 問題文の AE＝CF です。これは仮定なので「仮定より」と書きます。',
        add: [seg(p.A, E, C.purple, false, 2.8), seg(F, p.C, C.purple, false, 2.8), ...tick(p.A, E, 3, C.purple), ...tick(F, p.C, 3, C.purple), ...cap('③ AE＝CF（仮定より）', C.purple)],
      },
      {
        note: '❓OE と OF は等しいと言えるでしょうか。→ OE は AO から AE を引いた長さ、OF は CO から CF を引いた長さです。AO＝CO、AE＝CF なので同じ長さを引いており、OE＝OF です。たとえば AO＝CO＝5、AE＝CF＝2 なら、どちらも3になります。',
        add: fresh(lb(160, 14, '対角線AC（AE＝CF＝2、AO＝CO＝5 の例）', 11, C.ink, 'middle', true), ...bar(10, 30, [['AE 2', 60, C.purple], ['EO 3', 90, C.blue], ['OF 3', 90, C.blue], ['FC 2', 60, C.purple]], 28, 11), lb(160, 82, 'AO ＝ 5　　　　　　　CO ＝ 5', 11, C.gray, 'middle'), lb(160, 110, 'OE＝AO−AE＝5−2＝3', 12, C.blue, 'middle', true), lb(160, 130, 'OF＝CO−CF＝5−2＝3', 12, C.blue, 'middle', true), ...cap('同じ長さを引くから OE＝OF', C.blue)),
      },
      {
        note: '❓これで条件がそろいましたか。→ そろいました。対角線BDは点Oで BO＝DO、対角線EFも点Oで OE＝OF。2本の対角線が、どちらもOでそれぞれの中点になっています。だから四角形EBFDは平行四辺形です。',
        add: fresh(...base, hi([E, p.B, F, p.D], C.blue), ...tick(p.B, O, 1, C.red), ...tick(O, p.D, 1, C.red), ...tick(E, O, 2, C.green), ...tick(O, F, 2, C.green), ...cap2('2本の対角線が、それぞれの中点で交わる', '四角形EBFDは平行四辺形', C.blue, FILL.blue)),
      },
      {
        note: '❓BO＝DO だけではだめなのでしょうか。→ だめです。条件は「対角線がそれぞれの中点で交わる」で、2本とも必要です。片方だけ中点だと、たこ形のように平行四辺形でない形ができます。両方を示してから結論を書きます。',
        add: fresh(hi([[160, 18], [40, 76], [160, 100], [280, 76]], C.gray, 0.2), seg([40, 76], [280, 76]), seg([160, 18], [160, 100]), ...tick([40, 76], [160, 76], 1, C.red), ...tick([160, 76], [280, 76], 1, C.red), dot([160, 76]), nm('O', [160, 76], 9, 11), nm('B', [40, 76], -9, 4), nm('D', [280, 76], 9, 4), nm('E', [160, 18], 0, -8), nm('F', [160, 100], 0, 12), lb(160, 130, 'OE と OF は等しくない', 11, C.red, 'middle', true), ...cap('片方だけ中点では 平行四辺形ではない', C.red)),
      },
    ],
    '典型問題：中点を使う',
  );
})();

// ───────── s228 特別な平行四辺形になるための条件 ─────────
const f_koko_math_s228: DiagramFigure = (() => {
  const outer: El[] = [bx(6, 4, 308, 142, undefined, C.gray, FILL.gray), lb(14, 13, '四角形', 11, C.gray, 'start', true)];
  const trap: El[] = [bx(16, 22, 288, 118, undefined, C.blue, FILL.blue), lb(24, 31, '台形（1組の対辺が平行）', 11, C.blue, 'start', true)];
  const pgm: El[] = [bx(26, 42, 268, 94, undefined, C.green, FILL.green), lb(34, 51, '平行四辺形（2組の対辺が平行）', 11, C.green, 'start', true)];
  const rect: El[] = [bx(36, 62, 160, 68, undefined, C.red, 'rgba(225,29,72,0.10)'), lb(78, 112, '長方形', 12, C.red, 'middle', true)];
  const rhom: El[] = [bx(124, 62, 160, 68, undefined, C.purple, 'rgba(147,51,234,0.10)'), lb(242, 112, 'ひし形', 12, C.purple, 'middle', true)];
  const sqr: El[] = [bx(124, 62, 72, 68, '正方形', C.main, FILL.yellow, 12)];
  const R = (x: number, y: number, w: number, h: number): Pt[] => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
  const A: Pt = [90, 24], B: Pt = [90, 112], Cc: Pt = [230, 112], D: Pt = [230, 24];
  void R;
  return show(
    [
      {
        note: '四角形には種類があります。1組の対辺が平行なものが台形、2組の対辺が平行なものが平行四辺形です。外側から内側へ、条件が増えるほど特別な図形になります。',
        add: [...outer, ...trap, ...pgm, ...cap('条件が増えるほど 特別な形になる', C.ink)],
      },
      {
        note: '❓平行四辺形にどんな条件を足すと長方形になるでしょう。→ 「1つの角が90°」です。または「対角線の長さが等しい」でもかまいません。',
        add: [...rect, ...cap2('平行四辺形＋「1つの角が90°」', '＝ 長方形', C.red, FILL.red)],
      },
      {
        note: '❓ひし形になる条件は？ → 「となり合う2辺が等しい」です。または「対角線が垂直に交わる」でもかまいません。',
        add: [...rhom, ...cap2('平行四辺形＋「となり合う2辺が等しい」', '＝ ひし形', C.purple, FILL.purple)],
      },
      {
        note: '❓両方の条件を満たすとどうなるでしょう。→ 長方形でもあり、ひし形でもある図形、つまり正方形です。正方形は長方形の仲間でもあり、ひし形の仲間でもあります。',
        add: [...sqr, ...cap2('長方形でもありひし形でもある', '＝ 正方形', C.main, FILL.yellow)],
      },
      {
        note: '❓なぜ「1つの角が90°」だけで、4つの角すべてが直角になるのでしょう。→ 平行四辺形では、となり合う角の和が180°、対角は等しいからです。∠A＝90° なら ∠B＝180°−90°＝90°、∠C＝∠A＝90°、∠D＝∠B＝90° と順に決まります。',
        add: fresh(shape([A, B, Cc, D], C.red, FILL.red), ...rt(A, D, B), ...rt(B, A, Cc), ...rt(Cc, B, D), ...rt(D, Cc, A), ...names({ A, B, C: Cc, D }, { A: [-9, -8], B: [-9, 10], C: [9, 10], D: [9, -8] }), lb(160, 70, '4つとも 90°', 14, C.red, 'middle', true), ...cap('∠A＝90° → ∠B＝90° → ∠C＝∠D＝90°', C.red)),
      },
      {
        note: '❓同じように、「となり合う2辺が等しい」だけで4辺すべてが等しくなるのはなぜでしょう。→ 平行四辺形では対辺が等しいからです。AB＝BC なら、AB＝DC、BC＝AD も同じ長さになり、4辺がそろいます。',
        add: fresh(shape([[100, 24], [40, 112], [180, 112], [240, 24]], C.purple, FILL.purple), ...tick([100, 24], [40, 112], 1, C.purple), ...tick([40, 112], [180, 112], 1, C.purple), ...tick([180, 112], [240, 24], 1, C.purple), ...tick([240, 24], [100, 24], 1, C.purple), ...names({ A: [100, 24], B: [40, 112], C: [180, 112], D: [240, 24] }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9] }), lb(160, 70, '4辺とも 等しい', 13, C.purple, 'middle', true), ...cap('AB＝BC → 対辺も等しく 4辺がそろう', C.purple)),
      },
      {
        note: '❓「平行四辺形である」という前提を忘れると、どうなるでしょう。→ 対角線の長さが等しい四角形でも、等脚台形は長方形ではありません。前提がなければ、長さが等しいだけでは長方形とは言えないのです。条件はいつも前提とセットで覚えます。',
        add: fresh(shape([[110, 28], [50, 112], [270, 112], [210, 28]], C.gray, FILL.gray), seg([110, 28], [270, 112], C.red, true, 2), seg([50, 112], [210, 28], C.red, true, 2), ...tick([110, 28], [270, 112], 1, C.red), ...tick([50, 112], [210, 28], 1, C.red), lb(160, 130, '対角線は等しいが、長方形ではない（等脚台形）', 11, C.red, 'middle', true), ...cap('「平行四辺形である」が前提', C.red)),
      },
      {
        note: 'まとめです。対角線に注目すると整理できます。平行四辺形はそれぞれの中点で交わる。長方形はさらに長さが等しい。ひし形はさらに垂直に交わる。正方形は両方を満たします。',
        add: fresh(...rows(['平行四辺形：それぞれの中点で交わる', '長方形：＋ 対角線の長さが等しい', 'ひし形：＋ 対角線が垂直に交わる', '正方形：＋ 長さが等しく、垂直に交わる'], { y0: 8, h: 30, cols: [C.green, C.red, C.purple, C.main] }), ...cap('対角線の性質で 四角形の種類が決まる', C.ink)),
      },
    ],
    '関係図で整理する',
  );
})();

// ───────── s230 等積変形の応用 ─────────
const f_koko_math_s230: DiagramFigure = (() => {
  const A: Pt = [70, 30], B: Pt = [30, 118], Cc: Pt = [150, 118], D: Pt = [210, 60];
  const E: Pt = [D[0] + ((118 - D[1]) * (Cc[0] - A[0])) / (Cc[1] - A[1]), 118];
  const quad: El[] = [shape([A, B, Cc, D]), ...names({ A, B, C: Cc, D }, { A: [-2, -9], B: [-9, 10], C: [4, 12], D: [10, -8] })];
  // 土地の境界問題
  const P: Pt = [100, 16], Q: Pt = [160, 72], R: Pt = [100, 128], S: Pt = [160, 128];
  const land: El[] = [shape([[40, 16], [280, 16], [280, 128], [40, 128]], C.ink, 'rgba(0,0,0,0)'), ...names({ P, Q, R, S }, { P: [0, -8], Q: [10, -2], R: [-9, 10], S: [9, 10] })];
  return show(
    [
      {
        note: '問題です。四角形ABCDと面積が等しい三角形を作りたい。面積を変えずに形だけを変える「等積変形」を使います。この手筋は、曲がった境界線をまっすぐに引き直す土地の問題でも使います。',
        add: [...quad, ...cap('四角形ABCD と面積の等しい三角形を作る', C.ink)],
      },
      {
        note: '❓まず何をするでしょう。→ 四角形を2つの三角形に分ける対角線ACを引きます。四角形ABCD＝△ABC＋△ACD です。この△ACDの頂点Dを動かして、△ABCにつなげる作戦です。',
        add: [seg(A, Cc, C.red, false, 2), hi([A, Cc, D], C.blue, 0.2), ...cap('① 対角線 AC を引く（△ABC と △ACD）', C.red)],
      },
      {
        note: '❓Dはどこへ動かせばよいでしょう。→ 底辺ACを変えずに頂点だけを動かすと、高さが同じなら面積は変わりません。高さが同じになるのは、ACに平行な直線の上を動かすときです。だから、Dを通ってACに平行な直線を引きます。',
        add: [seg([D[0] - 60, D[1] - 66], [D[0] + 70, D[1] + 77], C.blue, true, 1.8), ...par(A, Cc, 1), ...par([D[0] - 30, D[1] - 33], [D[0] + 30, D[1] + 33], 1), ...cap('② Dを通り AC に平行な直線を引く', C.blue)],
      },
      {
        note: '❓どこまで動かすのでしょう。→ 辺BCをCの側へ延長した線と、平行線が交わる点をEとします。BCの延長線上にEをとるので、B、Cc、Eが一直線に並び、△ABEという大きな三角形ができます。',
        add: [seg(Cc, E, C.ink, true, 1.8), dot(E), nm('E', E, 8, 12), ...cap('③ BC の延長と平行線の交点を E とする', C.blue)],
      },
      {
        note: '❓なぜ △ACD と △ACE の面積は等しいのでしょう。→ 底辺がどちらもACで共通、AC∥DE なので、D、Eから底辺ACまでの高さも等しいからです。形はちがっても面積は同じです。',
        add: fresh(shape([A, B, Cc, D], C.ink, 'rgba(0,0,0,0)'), seg(A, Cc), seg(Cc, E, C.ink, true), seg(D, E, C.blue, true, 1.8), hi([A, Cc, D], C.blue, 0.25), hi([A, Cc, E], C.green, 0.25), ...names({ A, B, C: Cc, D, E }, { A: [-2, -9], B: [-9, 10], C: [4, 12], D: [10, -8], E: [8, 12] }), ...cap2('底辺ACが共通・高さも等しい', '△ACD ＝ △ACE', C.blue, FILL.blue)),
      },
      {
        note: '❓では、もとの四角形とはどう関係するのでしょう。→ 四角形ABCD＝△ABC＋△ACD。そして △ACD を △ACE に置きかえると △ABC＋△ACE＝△ABE です。四角形ABCDと△ABEは面積が等しい。たとえば四角形が24cm²なら、△ABEも24cm²です。',
        add: fresh(hi([A, B, E], C.red, 0.15), shape([A, B, Cc, D], C.ink, 'rgba(0,0,0,0)'), seg(A, Cc), seg(D, E, C.blue, true, 1.8), ...names({ A, B, C: Cc, D, E }, { A: [-2, -9], B: [-9, 10], C: [4, 12], D: [10, -8], E: [8, 12] }), ...eqn('四角形ABCD＝△ABC＋△ACD\n＝△ABC＋△ACE＝△ABE', C.red, FILL.red, 13)),
      },
      {
        note: '❓平行にするのは、どの線でしょう。→ 動かす頂点Dと結んだ「対角線AC」に平行です。辺BCに平行な線を引くと、△ACDの底辺ACは変わらないのに高さが変わってしまい、面積が保たれません。',
        add: fresh(shape([A, B, Cc, D]), seg(A, Cc), seg([60, D[1]], [300, D[1]], C.red, true, 1.8), ...par(B, Cc, 1), ...names({ A, B, C: Cc, D }, { A: [-2, -9], B: [-9, 10], C: [4, 12], D: [10, -8] }), lb(268, D[1] - 12, '辺BCに平行（×）', 11, C.red, 'middle', true), ...cap('平行にするのは 対角線 AC', C.red)),
      },
      {
        note: '❓この手筋は、土地の境界問題でどう使うのでしょう。境界が折れ線P—Q—Rのとき、Qを通ってPRに平行な直線を引き、下の辺と交わる点をSとします。△PQRと△PSRは底辺PRが共通で高さが等しいので面積が等しい。境界をP—Sのまっすぐな線にしても、両側の面積は変わりません。',
        add: fresh(...land, seg(P, Q, C.red, false, 2.2), seg(Q, R, C.red, false, 2.2), seg(Q, S, C.blue, true, 1.8), seg(P, R, C.gray, true), hi([P, Q, R], C.red, 0.2), hi([P, S, R], C.blue, 0.2), seg(P, S, C.green, false, 2.4), dot(Q), dot(S), ...cap('折れ線の境界 → 直線 PS に引き直す', C.green)),
      },
    ],
    '四角形を等積な三角形に変える',
  );
})();

// ───────── s232 対応の順序 ─────────
const f_koko_math_s232: DiagramFigure = (() => {
  const s = (x0: number, k: number) => {
    const B: Pt = [x0, 125], Cc: Pt = [x0 + 90 * k, 125], A: Pt = [x0 + 18 * k, 125 - 55 * k];
    return { A, B, C: Cc };
  };
  const t1 = s(15, 1);
  const t2 = s(150, 1.5);
  const p2 = { D: t2.A, E: t2.B, F: t2.C };
  const tri1: El[] = [shape([t1.A, t1.B, t1.C], C.blue, FILL.blue), ...names(t1, { A: [-2, -9], B: [-9, 10], C: [9, 10] })];
  const tri2: El[] = [shape([p2.D, p2.E, p2.F], C.green, FILL.green), ...names(p2, { D: [-2, -9], E: [-9, 10], F: [9, 10] })];
  // 砂時計型
  const a: Pt = [90, 25], d: Pt = [180, 25], b: Pt = [40, 120], c: Pt = [190, 120];
  const pp = at(a, c, 3 / 8);
  return show(
    [
      {
        note: '問題です。△ABC∽△DEF で、AB＝4、BC＝6、DE＝6 のとき EF を求めます。相似を書くときは、頂点を「対応する順」に並べるのが約束です。この順番が、あとの計算をまちがえない道具になります。',
        add: [...tri1, ...tri2, tag('4', t1.A, t1.B, 10), tag('6', t1.B, t1.C, 10), tag('6', p2.D, p2.E, 10), lb(t2.B[0] + 67, 140, '?', 12, C.red, 'middle', true), ...cap('△ABC ∽ △DEF　EF は？', C.ink)],
      },
      {
        note: '❓∽の記号のまわりで、どの頂点が対応するのでしょう。→ 書いた順に A↔D、B↔E、C↔F です。同じ色の点が対応する頂点です。',
        add: [ci(t1.A[0], t1.A[1], 5, undefined, C.red, C.red), ci(p2.D[0], p2.D[1], 5, undefined, C.red, C.red), ci(t1.B[0], t1.B[1], 5, undefined, C.blue, C.blue), ci(p2.E[0], p2.E[1], 5, undefined, C.blue, C.blue), ci(t1.C[0], t1.C[1], 5, undefined, C.green, C.green), ci(p2.F[0], p2.F[1], 5, undefined, C.green, C.green), ...cap('A↔D、B↔E、C↔F（書いた順）', C.ink)],
      },
      {
        note: '❓対応する頂点では、角はどうなるでしょう。→ 相似な図形では対応する角が等しくなります。∠A＝∠D、∠B＝∠E、∠C＝∠F です。',
        add: [...arc(t1.A, t1.B, t1.C, 14, C.red), ...arc(p2.D, p2.E, p2.F, 14, C.red), ...arc(t1.B, t1.A, t1.C, 14, C.blue), ...arc(p2.E, p2.D, p2.F, 14, C.blue, 2), ...arc(t1.C, t1.A, t1.B, 14, C.green, 2), ...arc(p2.F, p2.D, p2.E, 14, C.green, 2), ...cap('対応する角が等しい', C.ink)],
      },
      {
        note: '❓辺は、どれとどれが対応するでしょう。→ 対応する頂点どうしを結んだ辺です。AB↔DE、BC↔EF、CA↔FD。同じ数の印をつけた辺が、対応する辺です。',
        add: [...tick(t1.A, t1.B, 1), ...tick(p2.D, p2.E, 1), ...tick(t1.B, t1.C, 2, C.purple), ...tick(p2.E, p2.F, 2, C.purple), ...tick(t1.C, t1.A, 3, C.main), ...tick(p2.F, p2.D, 3, C.main), ...cap('AB↔DE、BC↔EF、CA↔FD', C.ink)],
      },
      {
        note: '❓相似比はいくつでしょう。→ 対応する辺 AB と DE の比です。AB：DE＝4：6＝2：3。相似な図形では、対応する辺の比がすべてこの2：3になります。',
        add: [...cap2('対応する辺の比はすべて同じ', 'AB：DE ＝ 4：6 ＝ 2：3', C.main, FILL.warm)],
      },
      {
        note: '❓EFは、どの辺と比べればよいのでしょう。→ EFに対応するのはBCです。BC：EF＝2：3 に BC＝6 を入れて 6：EF＝2：3。外項の積と内項の積を使うと 2×EF＝18、EF＝9 です。',
        add: [lb(t2.B[0] + 67, 140, '9', 12, C.green, 'middle', true), ...cap2('BC：EF ＝ 2：3 → 6：EF ＝ 2：3', '2×EF ＝ 18　EF ＝ 9', C.green, FILL.green)],
      },
      {
        note: '❓対応の順番をまちがえると、どうなるでしょう。→ たとえば △ABC∽△EDF と書くと、A↔E、B↔D となってしまいます。すると AB：ED という、本当は対応していない辺の比を作ることになり、答えが変わります。',
        add: fresh(lb(80, 14, '正しい　△ABC∽△DEF', 12, C.green, 'middle', true), lb(240, 14, 'まちがい　△ABC∽△EDF', 12, C.red, 'middle', true), ...['A', 'B', 'C'].map((k, i) => ci(40, 44 + i * 30, 10, k, C.blue, FILL.blue)), ...['D', 'E', 'F'].map((k, i) => ci(120, 44 + i * 30, 10, k, C.green, FILL.green)), ...[0, 1, 2].map((i) => ar(52, 44 + i * 30, 108, 44 + i * 30, C.green)), ...['A', 'B', 'C'].map((k, i) => ci(200, 44 + i * 30, 10, k, C.blue, FILL.blue)), ...['E', 'D', 'F'].map((k, i) => ci(280, 44 + i * 30, 10, k, C.green, FILL.green)), ar(212, 44, 268, 74, C.red), ar(212, 74, 268, 44, C.red), ar(212, 104, 268, 104, C.red), ...cap('頂点の順番が1つずれると、全部がくずれる', C.red)),
      },
      {
        note: '❓重なった図や、裏返した図ではどう対応させるのでしょう。たとえばAD∥BCの台形で、対角線の交点をPとします。AD∥BCの錯角から ∠PAD＝∠PCB なので、Aの相手はCです。△PAD∽△PCB と書きます。△PBC ではありません。等しい角の頂点どうしで対応を決めます。',
        add: fresh(shape([a, b, c, d], C.ink, 'rgba(0,0,0,0)'), seg(a, c), seg(b, d), hi([pp, a, d], C.blue, 0.25), hi([pp, c, b], C.green, 0.25), ci(a[0], a[1], 4, undefined, C.red, C.red), ci(c[0], c[1], 4, undefined, C.red, C.red), ci(d[0], d[1], 4, undefined, C.purple, C.purple), ci(b[0], b[1], 4, undefined, C.purple, C.purple), ...names({ A: a, B: b, C: c, D: d, P: pp }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9], P: [10, 2] }), ...cap('△PAD ∽ △PCB（A↔C、D↔B）', C.main)),
      },
    ],
    '対応の順序が命',
  );
})();

// ───────── s233 三角形の相似条件（3つ） ─────────
const f_koko_math_s233: DiagramFigure = (() => {
  return show(
    [
      {
        note: '相似条件を、合同条件と並べて見てみましょう。合同は「等しい」でしたが、相似では辺は「比が等しい」に変わります。そして、合同では使えなかった「角だけ2組」が仲間に加わります。',
        add: fresh(lb(80, 12, '合同条件', 12, C.gray, 'middle', true), lb(240, 12, '相似条件', 12, C.main, 'middle', true), bx(6, 24, 130, 30, '3組の辺が等しい', C.blue, FILL.blue, 11), ar(138, 39, 172, 39, C.main), bx(176, 24, 138, 30, '3組の辺の比が等しい', C.blue, FILL.blue, 11), bx(6, 62, 130, 30, '2組の辺と間の角', C.green, FILL.green, 11), ar(138, 77, 172, 77, C.main), bx(176, 62, 138, 30, '2組の辺の比と間の角', C.green, FILL.green, 11), bx(6, 100, 130, 30, '1組の辺と両端の角', C.purple, FILL.purple, 11), ar(138, 115, 172, 115, C.main), bx(176, 100, 138, 30, '2組の角が等しい', C.purple, FILL.purple, 11), ...cap('辺は「比」に変わり、角だけで決まる条件が加わる', C.ink, 11)),
      },
      {
        note: '①3組の辺の比がすべて等しい。たとえば3cm・4cm・5cmの三角形と6cm・8cm・10cmの三角形。3：6、4：8、5：10 はどれも1：2なので相似です。',
        add: fresh(shape([[15, 135], [75, 135], [15, 90]], C.blue, FILL.blue), shape([[120, 135], [240, 135], [120, 45]], C.green, FILL.green), tag('4', [15, 135], [75, 135], 10), tag('3', [15, 135], [15, 90], -10), tag('5', [75, 135], [15, 90], 10), tag('8', [120, 135], [240, 135], 10), tag('6', [120, 135], [120, 45], -10), tag('10', [240, 135], [120, 45], 12), ...cap2('3組の辺の比がすべて等しい', '3：6 ＝ 4：8 ＝ 5：10 ＝ 1：2', C.blue, FILL.blue)),
      },
      {
        note: '②2組の辺の比とその間の角がそれぞれ等しい。AB＝4、AC＝6、∠A＝60° の三角形と、DE＝6、DF＝9、∠D＝60° の三角形。4：6＝6：9＝2：3 で、はさむ角がどちらも60°なので相似です。',
        add: fresh(shape([[20, 130], [110, 130], [50, 78]], C.blue, FILL.blue), shape([[150, 130], [285, 130], [195, 52]], C.green, FILL.green), ...names({ A: [20, 130], C: [110, 130], B: [50, 78], D: [150, 130], F: [285, 130], E: [195, 52] }, { A: [-9, 10], C: [9, 10], B: [-9, -4], D: [-9, 10], F: [9, 10], E: [-9, -4] }), ...arc([20, 130], [110, 130], [50, 78], 14, C.red), ...arc([150, 130], [285, 130], [195, 52], 14, C.red), lb(38, 118, '60°', 9, C.red, 'middle', true), lb(168, 118, '60°', 9, C.red, 'middle', true), ...cap2('2組の辺の比と、その間の角が等しい', '4：6 ＝ 6：9 ＝ 2：3、∠A＝∠D', C.green, FILL.green, 12)),
      },
      {
        note: '③2組の角がそれぞれ等しい。∠A＝50°、∠B＝60° の三角形と、∠D＝50°、∠E＝60° の三角形は、大きさがちがっても相似です。辺の長さは1つも要りません。',
        add: fresh(shape([[15, 130], [115, 130], [74, 59]], C.blue, FILL.blue), shape([[150, 130], [290, 130], [233, 31]], C.green, FILL.green), ...names({ A: [15, 130], B: [115, 130], C: [74, 59], D: [150, 130], E: [290, 130], F: [233, 31] }, { A: [-9, 10], B: [9, 10], C: [0, -8], D: [-9, 10], E: [9, 10], F: [0, -8] }), ...arc([15, 130], [115, 130], [74, 59], 16, C.red), ...arc([150, 130], [290, 130], [233, 31], 16, C.red), ...arc([115, 130], [15, 130], [74, 59], 14, C.blue, 2), ...arc([290, 130], [150, 130], [233, 31], 14, C.blue, 2), lb(44, 120, '50°', 9, C.red, 'middle', true), lb(96, 120, '60°', 9, C.blue, 'middle', true), ...cap('2組の角がそれぞれ等しい', C.ink)),
      },
      {
        note: '❓なぜ角は2組だけでよいのでしょう。→ 三角形の内角の和は180°だからです。2つの角が決まれば、残りの角は 180°−50°−60°＝70° と自動的に決まり、もう1つの三角形でも同じ70°になります。3組そろっているので、形は同じです。',
        add: [...arc([74, 59], [15, 130], [115, 130], 14, C.green), ...arc([233, 31], [150, 130], [290, 130], 14, C.green), lb(74, 78, '70°', 9, C.green, 'middle', true), lb(233, 52, '70°', 9, C.green, 'middle', true), ...cap2('内角の和は180°だから', '残りは 180−50−60＝70° で自動的に等しい', C.green, FILL.green, 12)],
      },
      {
        note: '❓②の「間の角」でないとだめなのはなぜでしょう。→ 比をとった2辺にはさまれた角でないと、三角形の形が1つに決まらないからです。左は間の角（○）、右は間でない角（×）。合同条件で「2辺と間の角」を外してはいけないのと同じ理由です。',
        add: fresh(shape([[20, 125], [140, 125], [60, 60]], C.green, FILL.green), ...arc([20, 125], [140, 125], [60, 60], 16, C.red), lb(80, 20, '○ 間の角', 12, C.green, 'middle', true), lb(30, 88, 'a', 11, C.ink), lb(80, 134, 'b', 11, C.ink), shape([[190, 125], [300, 125], [225, 60]], C.red, FILL.red), ...arc([300, 125], [190, 125], [225, 60], 16, C.red), lb(250, 20, '× 間でない角', 12, C.red, 'middle', true), lb(198, 88, 'a', 11, C.ink), lb(246, 134, 'b', 11, C.ink), ...cap('比をとった2辺（a と b）にはさまれた角だけ', C.red)),
      },
      {
        note: '❓二等辺三角形どうしは、必ず相似でしょうか。→ いいえ。頂角が約20°の細長い二等辺三角形と、頂角が約120°の平たい二等辺三角形は形がちがいます。二等辺三角形が相似になるのは頂角（または底角）が等しいときです。必ず相似なのは、正三角形どうし、円どうしなどです。',
        add: fresh(shape([[40, 130], [80, 130], [60, 20]], C.blue, FILL.blue), lb(60, 142, '頂角 約20°', 10, C.blue, 'middle', true), shape([[140, 130], [300, 130], [220, 85]], C.red, FILL.red), lb(220, 142, '頂角 約120°', 10, C.red, 'middle', true), ...cap('どちらも二等辺三角形だが 相似ではない', C.red)),
      },
      {
        note: 'まとめです。使い分けの目安は、図に角の情報（平行線・共通角・対頂角・直角・円周角）が多いなら③、長さの数値が多くて角が1つなら②、3辺の長さがすべてわかっていれば①。入試の証明で使うのは、9割が③です。',
        add: fresh(...rows(['角の情報が多い（平行・共通角・対頂角）→ ③ 2組の角', '長さの数値が多く、角が1つ → ② 2辺の比と間の角', '3辺の長さがすべてわかっている → ① 3辺の比', '入試の証明の9割は ③'], { size: 12 }), ...cap('図を見て、使う条件を決める', C.ink)),
      },
    ],
    '3つの相似条件',
  );
})();

// ───────── s235 相似の証明①：答案の型と書く順序 ─────────
const f_koko_math_s235: DiagramFigure = (() => {
  const A: Pt = [160, 12], B: Pt = [60, 130], Cc: Pt = [270, 130];
  const E = at(A, B, 0.5);
  const D = at(A, Cc, 0.5);
  const fig: El[] = [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), seg(E, D), dot(E), dot(D), ...names({ A, B, C: Cc, D, E }, { A: [0, -2], B: [-9, 10], C: [9, 10], D: [10, 0], E: [-10, 0] })];
  return show(
    [
      {
        note: '問題です。△ABCの辺AB上に点E、辺AC上に点Dがあり、∠ABC＝∠AED です。△ABC∽△AED を証明します。相似の証明は書く順番が決まっていて、型どおり書けば、思いつきがなくても点になります。',
        add: [...fig, ...arc(B, A, Cc, 16, C.red), ...arc(E, A, D, 16, C.red), ...cap('∠ABC＝∠AED（仮定）　△ABC∽△AED を示す', C.red, 11)],
      },
      {
        note: '❓1行目には何を書くのでしょう。→ どの2つの三角形を比べるかの宣言です。「△ABCと△AEDにおいて」。ここで頂点の対応順（A↔A、B↔E、C↔D）も決めます。',
        add: [hi([A, B, Cc], C.blue, 0.15), hi([A, E, D], C.green, 0.3), ...cap2('1行目：比べる三角形の宣言', '△ABCと△AEDにおいて', C.blue, FILL.blue)],
      },
      {
        note: '❓最初の「等しい角」の根拠は何でしょう。→ 問題文に書かれている条件、つまり仮定です。「仮定より ∠ABC＝∠AED …①」と書きます。',
        add: [...cap2('2行目：等しい角と、その根拠', '仮定より ∠ABC＝∠AED …①', C.red, FILL.red)],
      },
      {
        note: '❓2つ目の角は何でしょう。→ 2つの三角形がどちらも頂点Aをもっています。∠BAC と ∠EAD は同じ角（共通な角）です。「共通な角だから ∠BAC＝∠EAD …②」と書きます。',
        add: [...arc(A, B, Cc, 24, C.purple), ...cap2('3行目：もう1組の等しい角', '共通な角だから ∠BAC＝∠EAD …②', C.purple, FILL.purple, 12)],
      },
      {
        note: '❓根拠にはどんな言葉が使えるのでしょう。→ 仮定より／共通な角だから／対頂角は等しいから／平行線の錯角・同位角は等しいから／円周角は等しいから、など。「図を見れば明らかだから」は根拠になりません。',
        add: fresh(...rows(['仮定より（問題文の条件）', '共通な角だから／共通な辺だから', '対頂角は等しいから', '平行線の錯角・同位角は等しいから', '弧に対する円周角は等しいから'], { h: 24, gap: 4, size: 12 }), ...cap('使える根拠は決まっている（図から明らか、は不可）', C.red, 11)),
      },
      {
        note: '❓2つの角がそろったら、次は何を書くのでしょう。→ 使った相似条件の名前を、省略せずに書きます。「①、②より、2組の角がそれぞれ等しいので」。そのあとで結論です。',
        add: fresh(...fig, hi([A, B, Cc], C.blue, 0.15), hi([A, E, D], C.green, 0.3), ...cap2('①、②より、2組の角がそれぞれ等しいので', '△ABC∽△AED', C.main, FILL.warm)),
      },
      {
        note: '❓結論の書き方で気をつけることは？ → 書き出しの1行目と、文字の並びを完全に一致させることです。1行目が「△ABCと△AED」なら、結論も△ABC∽△AED。△ABC∽△ADE と書くと、DとEが入れかわって対応がずれ、減点されます。',
        add: fresh(bx(10, 14, 300, 34, '1行目　△ABC と △AED において', C.blue, FILL.blue, 13), bx(10, 62, 300, 34, '結論　△ABC ∽ △AED　（文字の並びが一致）', C.green, FILL.green, 13), ar(160, 48, 160, 62, C.green), bx(10, 108, 300, 34, '× △ABC ∽ △ADE　（DとEが逆）', C.red, FILL.red, 13), ...cap('等しい角の頂点どうしが対応する', C.red)),
      },
      {
        note: 'まとめです。答案は①三角形の宣言 ②根拠つきで等しい角を2つ ③相似条件の名前 ④結論、の順。見つけ方は、結論から逆算し、共通角・対頂角を探し、平行線・直角・円をチェックします。',
        add: fresh(...rows(['① △ABCと△AEDにおいて', '② 根拠＋等しい角（①、②と番号をつける）', '③ ①、②より、2組の角がそれぞれ等しいので', '④ △ABC∽△AED（宣言と同じ並びで結ぶ）'], { size: 12 }), ...cap('型どおりに書けば、点になる', C.ink)),
      },
    ],
    '相似の証明の型',
  );
})();

// ───────── s236 相似の証明②：平行線を利用する ─────────
const f_koko_math_s236: DiagramFigure = (() => {
  const A: Pt = [160, 12], B: Pt = [40, 130], Cc: Pt = [280, 130];
  const D = at(A, B, 0.4);
  const E = at(A, Cc, 0.4);
  const pyr: El[] = [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), seg(D, E, C.blue, false, 2), dot(D), dot(E), ...names({ A, B, C: Cc, D, E }, { A: [0, -2], B: [-9, 10], C: [9, 10], D: [-10, 0], E: [10, 0] })];
  const a: Pt = [70, 28], d: Pt = [160, 28], b: Pt = [40, 125], c: Pt = [190, 125];
  const pp = at(a, c, 3 / 8);
  const hg: El[] = [shape([a, b, c, d], C.ink, 'rgba(0,0,0,0)'), seg(a, c), seg(b, d), dot(pp), ...names({ A: a, B: b, C: c, D: d, P: pp }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9], P: [10, 2] })];
  return show(
    [
      {
        note: '図の中に平行の記号を見つけたら、それは角が2組そろう合図です。平行線の錯角・同位角が使えるからです。平行線がからむ相似には、はっきりした2つの型があります。まずピラミッド型です。△ABCのDE∥BC。',
        add: [...pyr, ...par(D, E, 1), ...par(B, Cc, 1), ...cap('ピラミッド型：DE∥BC', C.blue)],
      },
      {
        note: '❓等しい角は何でしょう。→ 小さい三角形ADEが大きい三角形ABCの中にすっぽり入っていて、頂点Aを共有しています。だから ∠A は共通です。',
        add: [...arc(A, B, Cc, 22, C.purple), ...cap('① ∠A は共通', C.purple)],
      },
      {
        note: '❓もう1組はどこから出てくるのでしょう。→ DE∥BC なので、直線ABが2本の平行線を横切ってできる同位角が等しくなります。∠ADE＝∠ABC です。',
        add: [...arc(D, A, E, 14, C.green), ...arc(B, A, Cc, 14, C.green), ...cap('② DE∥BC の同位角 ∠ADE＝∠ABC', C.green)],
      },
      {
        note: '❓2組の角がそろうと、何が言えるのでしょう。→ 2組の角がそれぞれ等しいので △ADE∽△ABC です。小さい三角形は、大きい三角形をそのまま縮めた形になります。',
        add: [hi([A, D, E], C.blue, 0.3), ...cap2('2組の角がそれぞれ等しい', '△ADE ∽ △ABC', C.main, FILL.warm)],
      },
      {
        note: '次は砂時計型です。AD∥BCの台形ABCDで、対角線ACとBDの交点をPとします。2つの三角形が点Pで向かい合い、ちょうネクタイ（砂時計）の形になります。',
        add: fresh(...hg, hi([pp, a, d], C.blue, 0.3), hi([pp, c, b], C.green, 0.3), ...par(a, d, 1), ...par(b, c, 1), ...cap('砂時計型：AD∥BC', C.blue)),
      },
      {
        note: '❓この型で、最初に見つかる等しい角は何でしょう。→ 2本の対角線が交わってできる向かい合った角、つまり対頂角です。∠APD＝∠CPB です。',
        add: [...arc(pp, a, d, 14, C.purple), ...arc(pp, c, b, 14, C.purple), ...cap('① 対頂角 ∠APD＝∠CPB', C.purple)],
      },
      {
        note: '❓もう1組はどこから出てくるのでしょう。→ AD∥BC で、直線ACが平行線を横切っているので、錯角が等しくなります。∠PAD＝∠PCB です。∠PBC ではありません。Aの相手はCです。',
        add: [...arc(a, d, pp, 16, C.green), ...arc(c, b, pp, 16, C.green), ...cap('② AD∥BC の錯角 ∠PAD＝∠PCB', C.green)],
      },
      {
        note: '❓相似がわかると何がわかるのでしょう。→ △PAD∽△PCB で相似比は AD：CB＝6：10＝3：5。だから PA：PC も3：5。AC＝16cm なら PA＝16×3/8＝6cm、PC＝10cm です。対角線の交点は中点ではなく、上底：下底の比に分けます。',
        add: fresh(lb(160, 14, 'AD＝6cm、BC＝10cm、AC＝16cm のとき', 12, C.ink, 'middle', true), ...bar(26, 36, [['PA 6', 108, C.blue], ['PC 10', 180, C.green]], 28, 12), lb(160, 86, '相似比　AD：CB ＝ 6：10 ＝ 3：5', 12, C.main, 'middle', true), lb(160, 110, 'PA：PC ＝ 3：5', 12, C.main, 'middle', true), ...cap('PA＝16×3/8＝6 cm、PC＝10 cm', C.green)),
      },
    ],
    'ピラミッド型と砂時計型',
  );
})();

// ───────── s237 相似の証明③：共通角型 ─────────
const f_koko_math_s237: DiagramFigure = (() => {
  const A: Pt = [120, 128], B: Pt = [224, 128], Cc: Pt = [194.6, 21.5], D: Pt = [185, 128], E: Pt = [149.8, 85.4];
  const fig: El[] = [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), seg(D, E), dot(D), dot(E), ...names({ A, B, C: Cc, D, E }, { A: [-9, 8], B: [9, 8], C: [0, -8], D: [0, 12], E: [-10, 0] })];
  return show(
    [
      {
        note: '問題です。△ABCの辺AB上に点D、辺AC上に点Eがあり、AB＝8cm、AC＝10cm、AD＝5cm、AE＝4cm です。△ADE∽△ACB を証明します。ここでは、等しい角が1つしか見つかりません。',
        add: [...fig, ...cap2('AB＝8　AC＝10　AD＝5　AE＝4', '△ADE ∽ △ACB を示す', C.red, FILL.red)],
      },
      {
        note: '❓等しい角はどこにあるでしょう。→ ∠A は△ADEにも△ACBにも入っている共通の角です。でも、わかっている角はこれ1つだけ。角だけで相似にするには2組いるので、足りません。そこで、辺の比を2組そろえる作戦に切りかえます。',
        add: [...arc(A, B, Cc, 22, C.purple), ...cap('角は共通角 ∠A の1つだけ → 辺の比を2組そろえる', C.purple, 11)],
      },
      {
        note: '❓比を作るとき、まず頂点の位置どおりに AD：AB と AE：AC を比べるとどうなるでしょう。→ AD：AB＝5：8、AE：AC＝4：10＝2：5。5/8 と 2/5 は等しくありません。この組み合わせは正しい対応ではありません。',
        add: [hi([A, D, E], C.blue, 0.25), ...cap2('AD：AB ＝ 5：8　AE：AC ＝ 2：5', '等しくない → この組み合わせはちがう', C.red, FILL.red, 12)],
      },
      {
        note: '❓では、組み合わせをどう変えるのでしょう。→ AD：AC と AE：AB を比べます。AD：AC＝5：10＝1：2、AE：AB＝4：8＝1：2。等しくなりました。これが「たすきがけ」の形です。',
        add: [hi([A, Cc, B], C.green, 0.12), ...cap2('AD：AC ＝ 5：10 ＝ 1：2　AE：AB ＝ 4：8 ＝ 1：2', '等しい！（たすきがけ）', C.green, FILL.green, 12)],
      },
      {
        note: '❓なぜ、たすきがけになるのでしょう。→ △ADEでは、AD（5）のほうが長い辺で AE（4）が短い辺。△ACBでは、AC（10）が長い辺で AB（8）が短い辺です。長い辺どうし、短い辺どうしが対応するので、ADの相手はACで、AEの相手はABになります。',
        add: fresh(lb(80, 14, '△ADE', 12, C.blue, 'middle', true), lb(240, 14, '△ACB', 12, C.green, 'middle', true), lb(14, 42, 'AD', 11, C.ink, 'start', true), ...bar(40, 30, [['5', 50, C.blue]], 22), lb(14, 74, 'AE', 11, C.ink, 'start', true), ...bar(40, 62, [['4', 40, C.blue]], 22), lb(174, 42, 'AC', 11, C.ink, 'start', true), ...bar(200, 30, [['10', 100, C.green]], 22), lb(174, 74, 'AB', 11, C.ink, 'start', true), ...bar(200, 62, [['8', 80, C.green]], 22), ar(98, 41, 168, 41, C.main), ar(98, 73, 168, 73, C.main), lb(160, 112, '長い辺は長い辺と、短い辺は短い辺と対応', 11, C.ink, 'middle', true), ...cap('AD↔AC、AE↔AB（どちらも 1：2）', C.main)),
      },
      {
        note: '❓これで相似と言えるのでしょうか。→ 言えます。2組の辺の比（1：2と1：2）が等しく、その間の角 ∠A も共通で等しい。「2組の辺の比とその間の角がそれぞれ等しい」ので △ADE∽△ACB です。D↔C、E↔B なので、△ACB と書きます。',
        add: fresh(...fig, hi([A, D, E], C.blue, 0.3), hi([A, Cc, B], C.green, 0.15), ...arc(A, B, Cc, 22, C.purple), ...cap2('2組の辺の比と、その間の角がそれぞれ等しい', '△ADE ∽ △ACB', C.main, FILL.warm)),
      },
      {
        note: '❓この相似から、積の形の等式も出せるのでしょうか。→ 出せます。AD：AC＝AE：AB に、外項の積＝内項の積を使うと AD×AB＝AC×AE。数値で確かめると 5×8＝40、10×4＝40 で成り立っています。',
        add: fresh(bx(20, 14, 280, 30, 'AD：AC ＝ AE：AB', C.blue, FILL.blue, 14), ar(160, 46, 160, 62, C.main), bx(20, 64, 280, 30, 'AD × AB ＝ AC × AE', C.green, FILL.green, 14), bx(20, 104, 280, 34, '5 × 8 ＝ 40　10 × 4 ＝ 40　(OK)', C.main, FILL.warm, 14), ...cap('比例式 ⇄ 積の形（内項の積＝外項の積）', C.ink)),
      },
      {
        note: 'まとめです。角が共通角だけのときは、辺の比を2組そろえます。比は長い辺どうし・短い辺どうしで作ると「たすきがけ」になります。結論が積の形の式なら、比例式に直してから相似を探します。',
        add: fresh(...rows(['共通角1つ → 辺の比を2組そろえる', 'AD：AC ＝ AE：AB（たすきがけ）', '比を実際に計算して、等しいことを示す', '積の形の等式 → まず比例式に直す'], { size: 12 }), ...cap('積の形は、比例式に戻して相似を探す', C.ink)),
      },
    ],
    '共通角＋2辺の比の型',
  );
})();

// ───────── s239 相似の証明⑤：円周角を利用する ─────────
const f_koko_math_s239: DiagramFigure = (() => {
  const O: Pt = [160, 76];
  const r = 62;
  const A = onC(O, r, 150), B = onC(O, r, 15), Cc = onC(O, r, 105), D = onC(O, r, 300);
  const P = isect(A, B, Cc, D);
  const circ: El[] = [ci(O[0], O[1], r, undefined, C.ink, 'rgba(0,0,0,0)')];
  const fig: El[] = [...circ, seg(A, B), seg(Cc, D), dot(P), ...names({ A, B, C: Cc, D, P }, { A: [-9, -2], B: [10, -2], C: [-3, -8], D: [3, 12], P: [9, 9] })];
  // 直径と円周角
  const O2: Pt = [160, 70];
  const r2 = 58;
  const A2: Pt = [102, 70], B2: Pt = [218, 70];
  const C2 = onC(O2, r2, 70);
  return show(
    [
      {
        note: '円の中に三角形が2つあるのに、等しい角が見つからない。そんなときの最大の武器は「同じ弧に対する円周角は等しい」です。円周上に4点A、B、C、Dがあり、弦ABと弦CDが円の内側の点Pで交わっています。',
        add: [...fig, ...cap('弦ABと弦CDが 円の内側の点Pで交わる', C.ink)],
      },
      {
        note: '❓どの三角形を比べればよいのでしょう。→ 交点Pを頂点にもつ、向かい合った △PAC と △PDB です。この2つが相似なら、PA、PB、PC、PD の関係が出せます。',
        add: [hi([P, A, Cc], C.blue, 0.3), hi([P, D, B], C.green, 0.3), ...cap('向かい合う △PAC と △PDB を比べる', C.blue)],
      },
      {
        note: '❓1組目の等しい角は何でしょう。→ ∠PAC（＝∠BAC）と ∠PDB（＝∠CDB）は、どちらも弧BCの上に立つ円周角です。同じ弧に対する円周角は等しいので ∠PAC＝∠PDB です。「円周角の定理より」だけでなく、どの弧かまで書きます。',
        add: [...arc(A, B, Cc, 16, C.green), ...arc(D, Cc, B, 16, C.green), seg(B, Cc, C.green, true, 1.8), ...cap('① 弧BCに対する円周角 ∠PAC＝∠PDB', C.green)],
      },
      {
        note: '❓2組目の等しい角は何でしょう。→ 2本の弦が交わってできる、向かい合った角です。対頂角は等しいので ∠APC＝∠DPB です。',
        add: [...arc(P, A, Cc, 14, C.purple), ...arc(P, D, B, 14, C.purple), ...cap('② 対頂角 ∠APC＝∠DPB', C.purple)],
      },
      {
        note: '❓2組の角がそろうと、何が言えるでしょう。→ 2組の角がそれぞれ等しいので △PAC∽△PDB です。対応は P↔P、A↔D、C↔B です。',
        add: [lb(160, 50, '∽', 22, C.main, 'middle', true), ...cap2('2組の角がそれぞれ等しい', '△PAC ∽ △PDB', C.main, FILL.warm)],
      },
      {
        note: '❓相似から、辺の関係はどう出るのでしょう。→ 対応する辺の比が等しいので PA：PD＝PC：PB。外項の積＝内項の積で PA×PB＝PC×PD。弦の長さを「それぞれの交点からの2つの長さの積」で結ぶ、有名な関係です。',
        add: [seg(A, P, C.red, false, 2.6), seg(P, B, C.red, false, 2.6), seg(Cc, P, C.blue, false, 2.6), seg(P, D, C.blue, false, 2.6), ...cap2('PA：PD ＝ PC：PB より', 'PA × PB ＝ PC × PD', C.red, FILL.red)],
      },
      {
        note: '❓この式を使うとどうなるでしょう。たとえば PA＝6cm、PB＝4cm、PC＝8cm のとき、6×4＝8×PD、24＝8×PD で PD＝3cm。縦と横の長さが 6×4 の長方形と 8×3 の長方形は、面積がどちらも24で同じ、というイメージです。',
        add: fresh(bx(30, 20, 60, 40, '6×4', C.red, FILL.red, 14), lb(60, 76, '面積 24', 11, C.red, 'middle', true), lb(150, 44, '＝', 22, C.main, 'middle', true), bx(190, 25, 80, 30, '8×3', C.blue, FILL.blue, 14), lb(230, 76, '面積 24', 11, C.blue, 'middle', true), ...cap2('6×4 ＝ 8×PD　24 ＝ 8×PD', 'PD ＝ 3 cm', C.green, FILL.green)),
      },
      {
        note: 'もうひとつの武器です。直径が見えたら、直角を疑います。ABが直径なら、円周上の点Cについて ∠ACB＝90°（半円の弧に対する円周角）。∠BAC＝35° なら ∠ABC＝180°−90°−35°＝55° です。△ABCは二等辺三角形ではありません。',
        add: fresh(ci(O2[0], O2[1], r2, undefined, C.ink, 'rgba(0,0,0,0)'), shape([A2, B2, C2], C.blue, 'rgba(2,132,199,0.12)'), dot(O2), ...rt(C2, A2, B2, 8), ...arc(A2, B2, C2, 16, C.red), ...names({ A: A2, B: B2, C: C2, O: O2 }, { A: [-9, 4], B: [9, 4], C: [0, -8], O: [0, 11] }), lb(132, 66, '35°', 9, C.red, 'middle', true), ...cap2('直径ABなら ∠ACB＝90°', '∠ABC ＝ 180−90−35 ＝ 55°', C.green, FILL.green)),
      },
    ],
    '交わる2弦と相似',
  );
})();

// ───────── s241 平行線と線分の比②：比から平行を判定する ─────────
const f_koko_math_s241: DiagramFigure = (() => {
  const A: Pt = [160, 12], B: Pt = [50, 130], Cc: Pt = [280, 130];
  const D = at(A, B, 0.6);
  const E = at(A, Cc, 0.6);
  const mk = (e: Pt): El[] => [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), seg(D, e, C.blue, false, 2), dot(D), dot(e), ...names({ A, B, C: Cc, D, E: e }, { A: [0, -2], B: [-9, 10], C: [9, 10], D: [-10, 0], E: [10, 0] })];
  const E2 = at(A, Cc, 8 / 14);
  return show(
    [
      {
        note: '前の単元では「平行だから比が等しい」を学びました。今度はその逆、「比が等しいから平行」です。たとえば AD＝6cm、DB＝4cm、AE＝9cm、EC＝6cm のとき、DEとBCは平行でしょうか。',
        add: [...mk(E), tag('6', A, D, 10), tag('4', D, B, 10), tag('9', A, E, -10), tag('6', E, Cc, -10), ...cap('AD＝6、DB＝4、AE＝9、EC＝6 のとき DE∥BC？', C.ink, 11)],
      },
      {
        note: '❓比はどうくらべるのでしょう。→ 約分してからくらべます。AD：DB＝6：4＝3：2、AE：EC＝9：6＝3：2。見た目の数字はちがっても、約分すればどちらも3：2で等しいです。',
        add: [...cap2('AD：DB ＝ 6：4 ＝ 3：2　AE：EC ＝ 9：6 ＝ 3：2', '約分すると等しい', C.green, FILL.green, 12)],
      },
      {
        note: '❓なぜ、それで平行と言えるのでしょう。→ AD：DB＝3：2 は、AD：AB＝3：5 ということです（AB＝3＋2＝5）。同じようにAE：AC＝3：5。つまり AD：AB＝AE：AC です。',
        add: [hi([A, D, E], C.blue, 0.25), ...cap2('AD：DB＝3：2 → AD：AB ＝ 3：5', 'AE：EC＝3：2 → AE：AC ＝ 3：5', C.blue, FILL.blue, 12)],
      },
      {
        note: '❓AD：AB＝AE：AC から、何が言えるでしょう。→ ∠A が共通なので、2組の辺の比とその間の角がそれぞれ等しくなり、△ADE∽△ABC です。',
        add: [...arc(A, B, Cc, 22, C.purple), hi([A, B, Cc], C.green, 0.1), ...cap2('2組の辺の比とその間の角が等しい', '△ADE ∽ △ABC', C.main, FILL.warm)],
      },
      {
        note: '❓相似から平行まで、どうつなぐのでしょう。→ 相似な三角形の対応する角は等しいので ∠ADE＝∠ABC。同位角が等しければ、2直線は平行です。だから DE∥BC です。',
        add: [...arc(D, A, E, 14, C.green), ...arc(B, A, Cc, 14, C.green), ...par(D, E, 1), ...par(B, Cc, 1), ...cap('同位角 ∠ADE＝∠ABC が等しい → DE∥BC', C.green)],
      },
      {
        note: '❓比が等しくなかったらどうなるでしょう。AD＝6、DB＝4、AE＝8、EC＝6 の場合。→ AD：DB＝3：2 ですが、AE：EC＝8：6＝4：3 で等しくありません。このとき DE は BC と平行にならず、傾いた線になります。',
        add: fresh(...mk(E2), seg(D, [D[0] + 130, D[1]], C.gray, true), lb(160, 144, '平行にならず、DE は傾く', 11, C.red, 'middle', true), ...cap2('AD：DB ＝ 3：2　AE：EC ＝ 8：6 ＝ 4：3', '等しくない → DE∥BC とはいえない', C.red, FILL.red, 12)),
      },
      {
        note: '❓「どちらも2：3だから平行」と言ってよいでしょうか。たとえば AD：DB＝2：3 と AE：AC＝2：3。→ いけません。左は「部分：部分」、右は「部分：全体」で、くらべているものがちがいます。AE：AC＝2：3 は AE：EC＝2：1 です。',
        add: fresh(lb(160, 14, 'AD：DB ＝ 2：3（部分：部分）', 12, C.blue, 'middle', true), ...bar(40, 24, [['AD 2', 60, C.blue], ['DB 3', 90, C.blue]], 24), lb(160, 70, 'AE：AC ＝ 2：3（部分：全体）なら…', 12, C.red, 'middle', true), ...bar(40, 80, [['AE 2', 60, C.red], ['EC 1', 30, C.red]], 24), lb(160, 126, 'AD：DB は 2：3、AE：EC は 2：1 でちがう', 11, C.ink, 'middle', true), ...cap('「部分：部分」と「部分：全体」を混ぜない', C.red)),
      },
      {
        note: 'まとめです。平行を示すには、AD：AB＝AE：AC か AD：DB＝AE：EC のどちらか、そろった形で比が等しいことを示します。比は約分してから比べ、答案には比の計算を必ず書きます。',
        add: fresh(...rows(['AD：AB ＝ AE：AC ならば DE∥BC', 'AD：DB ＝ AE：EC ならば DE∥BC', '約分してから比べる（6：4 ＝ 9：6 ＝ 3：2）', '答案：相似 → 同位角が等しい → 平行'], { size: 12 }), ...cap('そろった形で比べる／比の計算を書く', C.ink)),
      },
    ],
    '平行になるための条件',
  );
})();

// ───────── s243 平行線と比の応用：台形の対角線と交点 ─────────
const f_koko_math_s243: DiagramFigure = (() => {
  const a: Pt = [70, 28], d: Pt = [160, 28], b: Pt = [40, 125], c: Pt = [190, 125];
  const pp = at(a, c, 3 / 8);
  const E = isect([0, pp[1]], [320, pp[1]], a, b);
  const F = isect([0, pp[1]], [320, pp[1]], d, c);
  const trap = (extra: El[] = []): El[] => [shape([a, b, c, d], C.ink, 'rgba(0,0,0,0)'), seg(a, c), seg(b, d), dot(pp), ...names({ A: a, B: b, C: c, D: d, P: pp }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -9], P: [10, 2] }), ...extra];
  const M = mid(a, b), N = mid(d, c);
  return show(
    [
      {
        note: '台形ABCD（AD∥BC）で、AD＝6cm、BC＝10cm、対角線ACとBDの交点をPとします。台形は比の宝庫です。上底と下底の比さえわかれば、対角線の分かれ方も、4つの三角形の面積比も、一気に決まります。',
        add: [...trap(), tag('6', a, d, -10), tag('10', b, c, 12), ...cap('AD∥BC　AD＝6cm、BC＝10cm', C.ink)],
      },
      {
        note: '❓まず、どの三角形が相似になるでしょう。→ 対頂角と、AD∥BC の錯角から、△PAD∽△PCB です。相似比は AD：CB＝6：10＝3：5。',
        add: [hi([pp, a, d], C.blue, 0.3), hi([pp, c, b], C.green, 0.3), ...cap2('△PAD ∽ △PCB', '相似比 AD：CB ＝ 6：10 ＝ 3：5', C.main, FILL.warm)],
      },
      {
        note: '❓相似だと、対角線はどう分けられるでしょう。→ 対応する辺の比はすべて3：5なので AP：PC＝DP：PB＝3：5。AC＝16cm なら AP＝6cm、PC＝10cm。中点（8cmずつ）ではありません。',
        add: fresh(lb(160, 14, '対角線 AC（16cm）', 12, C.ink, 'middle', true), ...bar(26, 26, [['AP 6', 108, C.blue], ['PC 10', 180, C.green]], 28, 12), lb(160, 76, 'AP：PC ＝ 3：5（DP：PB も 3：5）', 12, C.main, 'middle', true), lb(160, 104, '台形の対角線は 上底：下底 に分かれる', 11, C.ink, 'middle', true), ...cap('中点ではなく 3：5 に分ける', C.main)),
      },
      {
        note: '❓4つの三角形の面積はどうなるでしょう。まず △PAD と △PAB。→ 頂点Aが共通で、底辺DPとPBが同じ直線BD上にあるので高さが共通です。高さが同じ三角形の面積比は底辺の比に等しく、△PAD：△PAB＝DP：PB＝3：5 です。',
        add: fresh(...trap(), hi([pp, a, d], C.blue, 0.3), hi([pp, a, b], C.red, 0.25), ...cap2('高さ共通 → 面積比 ＝ 底辺の比', '△PAD：△PAB ＝ DP：PB ＝ 3：5', C.main, FILL.warm, 12)),
      },
      {
        note: '❓4つ全部の比は？ → 同じ考え方で △PAD：△PAB：△PCD：△PCB＝36：60：60：100（a²：ab：ab：b²）。台形の面積が64cm²なら、合計256を64に合わせて÷4して、9、15、15、25cm² です。',
        add: fresh(shape([a, b, c, d], C.ink, 'rgba(0,0,0,0)'), seg(a, c), seg(b, d), lb(115, 40, '9', 14, C.blue, 'middle', true), lb(80, 78, '15', 14, C.red, 'middle', true), lb(150, 78, '15', 14, C.red, 'middle', true), lb(115, 108, '25', 14, C.green, 'middle', true), lb(250, 50, '36：60：60：100', 12, C.ink, 'middle', true), lb(250, 72, '＝ 9：15：15：25', 12, C.main, 'middle', true), lb(250, 94, '（面積64cm²のとき）', 10, C.gray, 'middle'), ...cap('9 ＋ 15 ＋ 15 ＋ 25 ＝ 64 cm²', C.green)),
      },
      {
        note: '❓左右の2つの三角形 △PAB と △PCD は、なぜ同じ面積なのでしょう。→ AD∥BC なので、△ABC と △DBC は底辺BCが共通で高さも等しく、面積が同じです。両方から共通部分の △PBC を引くと、△PAB＝△PCD が残ります。',
        add: fresh(...trap(), hi([pp, a, b], C.red, 0.3), hi([pp, c, d], C.red, 0.3), lb(115, 100, '＝', 20, C.main, 'middle', true), ...cap2('△ABC＝△DBC から 共通の △PBC を引く', '△PAB ＝ △PCD', C.red, FILL.red, 12)),
      },
      {
        note: '❓対角線の交点Pを通ってBCに平行な線EFの長さは？ → △ABCで EP：BC＝AP：AC＝3：8 なので EP＝10×3/8＝3.75cm。PFも同じ3.75cm。EF＝7.5cm です。公式では 2ab/(a＋b)＝2×6×10/16＝7.5 です。',
        add: fresh(...trap(), seg(E, F, C.red, false, 2.4), dot(E), dot(F), nm('E', E, -9, 0), nm('F', F, 9, 0), ...par(b, c, 1), ...par(E, pp, 1), ...cap2('EP：BC ＝ AP：AC ＝ 3：8', 'EP ＝ 10×3/8 ＝ 3.75　EF ＝ 7.5 cm', C.red, FILL.red, 12)),
      },
      {
        note: '❓辺ABとDCの中点を結ぶ線分MNとは、どうちがうでしょう。→ MNは (6＋10)÷2＝8cm。対角線の交点を通る線EFは7.5cm。EFのほうが少し短くなります。「対角線の交点を通る」のか「両脚の中点を通る」のか、問題文でたしかめましょう。',
        add: fresh(...trap(), seg(E, F, C.red, false, 2.2), seg(M, N, C.green, true, 2.2), lb(256, 44, 'EF ＝ 7.5 cm', 12, C.red, 'middle', true), lb(256, 62, '（対角線の交点を通る）', 10, C.red, 'middle'), lb(256, 88, 'MN ＝ 8 cm', 12, C.green, 'middle', true), lb(256, 106, '（両脚の中点を通る）', 10, C.green, 'middle'), ...cap('EF（7.5）は MN（8）より少し短い', C.ink)),
      },
    ],
    '対角線の交点で分けられる比',
  );
})();

// ───────── s245 中点連結定理②：中点四角形 ─────────
const f_koko_math_s245: DiagramFigure = (() => {
  const A: Pt = [50, 40], B: Pt = [30, 125], Cc: Pt = [200, 115], D: Pt = [250, 35];
  const P = mid(A, B), Q = mid(B, Cc), R = mid(Cc, D), S = mid(D, A);
  const quad: El[] = [shape([A, B, Cc, D], C.ink, 'rgba(0,0,0,0)'), ...names({ A, B, C: Cc, D }, { A: [-2, -9], B: [-9, 10], C: [9, 10], D: [9, -8] })];
  const mids: El[] = [dot(P), dot(Q), dot(R), dot(S), ...names({ P, Q, R, S }, { P: [-10, 0], Q: [2, 12], R: [11, 3], S: [0, -10] })];
  return show(
    [
      {
        note: 'どんなにいびつな四角形でも、4つの辺の中点を順に結ぶと、必ず平行四辺形ができます。信じられないかもしれませんが、対角線を1本引いて中点連結定理を2回使えば説明できます。',
        add: [...quad, ...mids, seg(P, Q, C.red, false, 2), seg(Q, R, C.red, false, 2), seg(R, S, C.red, false, 2), seg(S, P, C.red, false, 2), ...cap('四角形ABCDの4辺の中点 P、Q、R、S を結ぶ', C.red)],
      },
      {
        note: '❓まず何を引くのでしょう。→ 対角線ACを引きます。ACは、PQとSRのどちらにとっても「仲間の辺」になる線です。これで四角形が2つの三角形に分かれます。',
        add: [seg(A, Cc, C.blue, false, 2), ...cap('対角線 AC を引く', C.blue)],
      },
      {
        note: '❓△ABCの中で、PQはどんな線でしょう。→ P、QはそれぞれAB、BCの中点です。2辺の中点を結んだ線分なので、中点連結定理より PQ∥AC、PQ＝AC÷2 です。',
        add: [hi([P, B, Q], C.green, 0.25), ...par(P, Q, 1), ...par(A, Cc, 1), ...tick(P, Q, 1, C.green), ...cap2('△ABC で中点連結定理', 'PQ∥AC　PQ ＝ AC/2', C.green, FILL.green)],
      },
      {
        note: '❓△ACDの中では、SRはどんな線でしょう。→ S、RはそれぞれDA、CDの中点なので、同じく SR∥AC、SR＝AC÷2 です。',
        add: [hi([S, D, R], C.purple, 0.25), ...par(S, R, 1), ...tick(S, R, 1, C.purple), ...cap2('△ACD で中点連結定理', 'SR∥AC　SR ＝ AC/2', C.purple, FILL.purple)],
      },
      {
        note: '❓この2つをあわせると、何が言えるでしょう。→ PQ∥AC、SR∥AC なので PQ∥SR。そして PQ＝SR＝AC÷2。1組の対辺が平行でその長さが等しいので、四角形PQRSは平行四辺形です。',
        add: fresh(...quad, ...mids, hi([P, Q, R, S], C.red, 0.25), seg(A, Cc, C.gray, true), ...par(P, Q, 1), ...par(S, R, 1), ...tick(P, Q, 1), ...tick(S, R, 1), ...cap2('PQ∥SR かつ PQ＝SR', '四角形 PQRS は平行四辺形', C.red, FILL.red)),
      },
      {
        note: '❓もう一方の対角線BDも使うと、どうなるでしょう。→ 同じように QR∥BD、PS∥BD で、QR＝PS＝BD÷2。つまり、中点四角形の辺は、もとの四角形の対角線に平行で、長さはその半分です。',
        add: [seg(B, D, C.blue, true, 1.8), ...par(Q, R, 2, C.blue), ...par(P, S, 2, C.blue), ...tick(Q, R, 2, C.blue), ...tick(P, S, 2, C.blue), ...cap('QR∥PS∥BD　QR＝PS＝BD/2', C.blue)],
      },
      {
        note: '❓周の長さはいくつでしょう。AC＝10cm、BD＝8cm のとき。→ 4辺は 5cm、4cm、5cm、4cm で、周は 5＋4＋5＋4＝18cm。つまり周は対角線の和 AC＋BD に等しくなります。(10＋8)÷2＝9cmとしてはいけません。',
        add: fresh(lb(160, 14, 'AC＝10cm、BD＝8cm のとき', 12, C.ink, 'middle', true), ...bar(20, 30, [['PQ 5', 75, C.red], ['QR 4', 60, C.blue], ['RS 5', 75, C.red], ['SP 4', 60, C.blue]], 28, 12), lb(160, 82, '周 ＝ 5＋4＋5＋4 ＝ 18 cm', 13, C.main, 'middle', true), lb(160, 108, '＝ AC ＋ BD', 13, C.main, 'middle', true), ...cap('周の長さ ＝ 対角線の長さの和', C.green)),
      },
      {
        note: 'まとめです。中点四角形の形は、もとの図形の名前ではなく、対角線の性質で決まります。対角線が垂直なら長方形、長さが等しければひし形になります。長方形の中点四角形は長方形ではなく、ひし形です。',
        add: fresh(...rows(['平行四辺形 → 平行四辺形', '長方形 → ひし形（対角線の長さが等しいから）', 'ひし形 → 長方形（対角線が垂直だから）', '正方形 → 正方形', '等脚台形 → ひし形'], { h: 24, gap: 4, size: 12 }), ...cap('もとの図形の「対角線の性質」で決まる', C.red)),
      },
    ],
    '中点四角形が平行四辺形になる理由',
  );
})();

// ───────── s248 角の二等分線の応用：面積比 ─────────
const f_koko_math_s248: DiagramFigure = (() => {
  const A: Pt = [194, 37], B: Pt = [40, 130], Cc: Pt = [270, 130];
  const D = at(B, Cc, 0.6);
  const H: Pt = [194, 130];
  const base: El[] = [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), seg(A, D, C.red, false, 2), dot(D), ...names({ A, B, C: Cc, D }, { A: [0, -9], B: [-9, 10], C: [9, 10], D: [-4, 12] })];
  return show(
    [
      {
        note: '問題です。△ABCで、∠Aの二等分線と辺BCの交点をDとします。AB＝6cm、AC＝4cm、△ABCの面積は20cm²。△ABDの面積を求めます。「二等分線だから半分の10cm²」ではありません。なぜでしょう。',
        add: [...base, ...arc(A, B, D, 20, C.red), ...arc(A, D, Cc, 20, C.red), tag('6', B, A, -12), tag('4', A, Cc, -12), ...cap('AB＝6　AC＝4　△ABC＝20cm²　△ABD は？', C.ink, 11)],
      },
      {
        note: '❓まず、BDとDCの比はどうなるでしょう。→ 角の二等分線は、辺BCをAB：ACの比に分けます。BD：DC＝AB：AC＝6：4＝3：2。二等分されるのは角で、辺BCは半分ずつではありません。',
        add: fresh(lb(160, 14, '辺BC を BD：DC に分ける', 12, C.ink, 'middle', true), ...bar(40, 26, [['BD 3', 138, C.blue], ['DC 2', 92, C.green]], 28, 13), lb(160, 80, 'BD：DC ＝ AB：AC ＝ 6：4 ＝ 3：2', 12, C.main, 'middle', true), lb(160, 104, '（角の二等分線の性質）', 11, C.gray, 'middle'), ...cap('辺BCは 3：2 に分かれる（半分ではない）', C.main)),
      },
      {
        note: '❓△ABD と △ADC を比べるには、何を見ればよいでしょう。→ どちらも頂点Aから辺BCにおろした高さ AH が共通です。底辺BD、DCはどちらも辺BC上にあります。',
        add: fresh(...base, hi([A, B, D], C.blue, 0.25), hi([A, D, Cc], C.green, 0.25), seg(A, H, C.gray, true, 1.6), ...rt(H, A, Cc, 7, C.gray), nm('H', H, 0, 12), ...cap('高さ AH が共通', C.gray)),
      },
      {
        note: '❓高さが共通だと、面積の比はどうなるでしょう。→ 面積＝底辺×高さ÷2 で、高さが同じなら、面積の比は底辺の比と同じです。△ABD：△ADC＝BD：DC＝3：2。',
        add: [...cap2('高さが共通 → 面積比 ＝ 底辺の比', '△ABD：△ADC ＝ BD：DC ＝ 3：2', C.main, FILL.warm)],
      },
      {
        note: '❓では、面積はいくつになるでしょう。→ 全体の20cm²を3：2に分けます。△ABD＝20×3/5＝12cm²、△ADC＝20×2/5＝8cm²。たし算すると12＋8＝20で、もとの面積にもどります。10cm²ずつの半分ではありません。',
        add: fresh(...base, hi([A, B, D], C.blue, 0.25), hi([A, D, Cc], C.green, 0.25), lb(120, 105, '12cm²', 13, C.blue, 'middle', true), lb(212, 112, '8cm²', 13, C.green, 'middle', true), ...cap2('20×3/5 ＝ 12　20×2/5 ＝ 8', '検算：12 ＋ 8 ＝ 20', C.green, FILL.green)),
      },
      {
        note: '❓面積比をつないでいく問題では、どう考えるのでしょう。たとえば AB＝6、AC＝3 で BD：DC＝2：1、さらに AD上に AE：ED＝3：1 となる点Eをとって △ABE を求めるとき。→ 全体を1として順に比をかけます。△ABD＝1×2/3、△ABE＝△ABD×3/4＝1/2。',
        add: fresh(lb(160, 12, '△ABC を 1 として、順にかける', 12, C.ink, 'middle', true), lb(24, 40, '△ABC', 11, C.ink, 'start', true), ...bar(70, 28, [['1', 240, C.main]], 24), lb(24, 76, '△ABD', 11, C.ink, 'start', true), ...bar(70, 64, [['2/3（BD：DC＝2：1）', 160, C.blue]], 24), lb(24, 112, '△ABE', 11, C.ink, 'start', true), ...bar(70, 100, [['×3/4 ＝ 1/2', 120, C.green]], 24), ...cap('2/3 × 3/4 ＝ 1/2（半分）', C.green)),
      },
      {
        note: '❓「面積比は辺の比の2乗」とは、どうちがうのでしょう。→ 2乗するのは、相似な図形どうしのときだけです。△ABDと△ADCは相似ではなく、高さが共通なだけ。この場合は、2乗せずに底辺の比のままです。',
        add: fresh(bx(10, 10, 300, 56, '高さが共通な三角形\n面積比 ＝ 底辺の比（例：3：2 → 3：2）', C.blue, FILL.blue, 13), bx(10, 76, 300, 56, '相似な図形どうし\n面積比 ＝ 相似比の2乗（例：3：2 → 9：4）', C.red, FILL.red, 13), ...cap('どちらの場合かを 先に見分ける', C.ink)),
      },
      {
        note: 'まとめです。角の二等分線ADがあると、①BD：DC＝AB：AC ②高さが共通なので面積比も同じ比 ③全体に比をかけて面積を出す。最後に、分けた面積をたして全体になるか確かめます。',
        add: fresh(...rows(['BD：DC ＝ AB：AC（角の二等分線）', '高さ共通 → △ABD：△ADC ＝ BD：DC', '全体 × 比 で面積を出す（20×3/5＝12）', '分けた面積の和が全体になるか検算'], { size: 12 }), ...cap('二等分されるのは角。面積ではない', C.red)),
      },
    ],
    '角の二等分線と面積比',
  );
})();

// ───────── s249 相似の利用①：縮図と縮尺 ─────────
const f_koko_math_s249: DiagramFigure = (() => {
  return show(
    [
      {
        note: '地図の縮尺 1/25000 は、実際の長さを25000分の1に縮めたという意味です。たとえば地図の上で4cmの道のりは、実際にはどれだけでしょう。図上の長さに25000をかけます。',
        add: [bx(14, 24, 80, 34, '地図 4cm', C.blue, FILL.blue, 13), ar(96, 41, 136, 41, C.main), lb(116, 30, '×25000', 11, C.main, 'middle', true), bx(138, 24, 170, 34, '実際 100000cm', C.green, FILL.green, 13), ...cap('図上の長さ × 縮尺の分母 ＝ 実際の長さ', C.ink, 11)],
      },
      {
        note: '❓100000cmはどれくらいの長さでしょう。→ 1m＝100cm、1km＝1000m＝100000cm なので、100000cm＝1000m＝1km です。計算はcmのまま進めて、最後に問われた単位に直すと安全です。',
        add: fresh(bx(10, 14, 90, 36, '100000 cm', C.blue, FILL.blue, 13), ar(102, 32, 130, 32, C.main), lb(116, 22, '÷100', 10, C.main, 'middle', true), bx(132, 14, 80, 36, '1000 m', C.green, FILL.green, 13), ar(214, 32, 240, 32, C.main), lb(227, 22, '÷1000', 10, C.main, 'middle', true), bx(242, 14, 66, 36, '1 km', C.purple, FILL.purple, 13), bx(40, 74, 240, 40, '1km ＝ 1000m ＝ 100000cm', C.main, FILL.warm, 14), ...cap('cmで計算 → 最後にm・kmへ直す', C.main)),
      },
      {
        note: '❓逆に、実際の距離から地図上の長さを出すには？ 実際の3kmを、1/50000の地図で表します。3km＝300000cm。これを50000でわって 300000÷50000＝6cm です。かけるのか、わるのかは、「地図は小さくなる」と考えて決めます。',
        add: fresh(bx(14, 24, 120, 34, '実際 3km＝300000cm', C.green, FILL.green, 11), ar(136, 41, 170, 41, C.main), lb(153, 30, '÷50000', 10, C.main, 'middle', true), bx(172, 24, 136, 34, '地図 6cm', C.blue, FILL.blue, 13), ...cap('地図は小さくなる → 縮尺の分母でわる', C.main)),
      },
      {
        note: '❓縮尺の分母が大きいと、どうなるでしょう。→ 同じ4cmでも、1/25000なら1km、1/50000なら2kmを表します。分母が大きい地図ほど広い範囲がのりますが、そのぶん細かさは落ちます。',
        add: fresh(lb(160, 14, '同じ図上の長さ 4cm でも…', 12, C.ink, 'middle', true), ...bar(30, 28, [['1/25000 → 1 km', 100, C.blue]], 26, 12), ...bar(30, 66, [['1/50000 → 2 km', 200, C.green]], 26, 12), lb(160, 118, '分母が大きい → 広い範囲 / 細かさは落ちる', 11, C.gray, 'middle', true), ...cap('4×25000＝1km　4×50000＝2km', C.main)),
      },
      {
        note: '❓面積はなぜ「2乗」なのでしょう。→ 面積は縦×横だからです。縦も横も25000倍になるので、面積は 25000×25000 倍。やさしい例で、縦も横も2倍にすると、面積は2×2＝4倍になります。',
        add: fresh(bx(30, 30, 24, 24, '1', C.blue, FILL.blue, 12), ar(60, 42, 90, 42, C.main), lb(75, 32, '×2', 11, C.main, 'middle', true), ...[0, 1, 2, 3].map((i) => bx(100 + (i % 2) * 24, 18 + Math.floor(i / 2) * 24, 24, 24, String(1), C.green, FILL.green, 12)), lb(220, 30, '縦も横も 2倍', 11, C.ink, 'start', true), lb(220, 52, '面積は 2×2 ＝ 4倍', 12, C.red, 'start', true), lb(160, 100, '25000倍なら 面積は 25000×25000＝625000000倍', 11, C.main, 'middle', true), ...cap('長さは 1乗、面積は 2乗', C.red)),
      },
      {
        note: '❓では、地図上で8cm²の土地は、実際には何km²でしょう。→ 8×625000000＝5000000000cm²。1m²＝10000cm² なので 500000m²。1km²＝1000000m² なので 0.5km² です。8×25000＝200000cm と考えて 2km² にしてはいけません。',
        add: fresh(...stack(['8cm² × 625000000 ＝ 5000000000cm²', '÷10000 → 500000 m²', '÷1000000 → 0.5 km²'], 20, 280, 14, { h: 30, gap: 12, size: 12, color: C.green, fill: FILL.green }).flat(), ...cap('縮尺の2乗をかけ、単位をていねいに直す', C.green)),
      },
      {
        note: '❓縮図を使って、測れない高さを求めることもできます。木から20m離れた地点で、木の先を見上げた角が30°、目の高さが1.5m。縮尺1/500の縮図をかくと、20m＝2000cm→図上4cm。30°の直角三角形の高さを測ると約2.3cm。2.3×500＝1150cm＝11.5m、目の高さをたして約13.0mです。',
        add: fresh(shape([[40, 118], [160, 118], [160, 49]], C.blue, FILL.blue), ...rt([160, 118], [40, 118], [160, 49], 9), ...arc([40, 118], [160, 118], [160, 49], 24, C.red), lb(74, 112, '30°', 10, C.red, 'middle', true), lb(100, 132, '図上 4cm（実際は20m）', 11, C.ink, 'middle', true), lb(176, 84, '約2.3cm', 11, C.ink, 'start', true), lb(220, 40, '2.3×500＝1150cm', 11, C.main, 'start', true), lb(220, 58, '＝ 11.5m', 11, C.main, 'start', true), lb(220, 76, '＋目の高さ1.5m', 11, C.red, 'start', true), lb(220, 94, '＝ 約13.0m', 12, C.green, 'start', true), ...cap('角度は縮図でも同じ。目の高さを足す', C.ink)),
      },
      {
        note: 'まとめです。長さは縮尺の分母をかけて戻す、面積は縮尺の2乗をかけて戻す。計算はcmでして、最後に単位を直す。縮図で測った値は誤差があるので、答えには「約」をつけます。',
        add: fresh(...rows(['実際の長さ ＝ 図上の長さ × 縮尺の分母', '実際の面積 ＝ 図上の面積 × （縮尺の分母）²', '1km ＝ 1000m ＝ 100000cm　1km² ＝ 1000000m²', '縮図で測った答えは「約」をつける'], { size: 12 }), ...cap('単位を最後にそろえる', C.red)),
      },
    ],
    '縮尺の意味と長さの計算',
  );
})();

// ───────── s250 相似の利用②：影の長さから高さを求める ─────────
const f_koko_math_s250: DiagramFigure = (() => {
  const G = 125;
  const stick: El[] = [seg([20, G], [20, 107], C.blue, false, 3), seg([20, G], [44, G], C.gray, false, 3)];
  const tree: El[] = [seg([100, G], [100, 17], C.green, false, 4), seg([100, G], [244, G], C.gray, false, 3)];
  const ground: El[] = [seg([0, G], [320, G], C.ink, false, 1.2)];
  const rays: El[] = [ar(10, 10, 58, 46, C.main, true), ar(10, 56, 58, 92, C.main, true), seg([20, 107], [44, G], C.main, true, 1.4), seg([100, 17], [244, G], C.main, true, 1.4)];
  // 鏡
  const eye: Pt = [20, 106], M: Pt = [44, G], top: Pt = [164, 29];
  // 街灯
  const lamp: Pt = [30, 45];
  return show(
    [
      {
        note: '問題です。高さ1.5mの棒を立てると影が2mになりました。同じ時刻に、木の影は12mでした。木の高さを求めます。登らなくても、影の長さだけで高さがわかります。',
        add: [...ground, ...stick, ...tree, ...rays, lb(150, 14, '太陽の光は平行', 11, C.main, 'start', true), lb(32, 98, '1.5m', 10, C.blue, 'start', true), lb(32, 142, '影 2m', 10, C.gray, 'middle', true), lb(110, 70, '木 h', 11, C.green, 'start', true), lb(172, 142, '影 12m', 10, C.gray, 'middle', true), ...cap('木の高さ h は？', C.red)],
      },
      {
        note: '❓なぜ、棒と木の三角形が相似になるのでしょう。→ どちらも地面に垂直で、角が90°。さらに、同じ時刻の太陽の光は平行なので、光と地面がつくる角も同じです。2組の角が等しいから相似です。',
        add: [...rt([20, G], [44, G], [20, 107], 6), ...rt([100, G], [244, G], [100, 17], 8), ...arc([44, G], [20, G], [20, 107], 12, C.red), ...arc([244, G], [100, G], [100, 17], 22, C.red), ...cap('90°と、光が地面となす角が等しい', C.red)],
      },
      {
        note: '❓相似だと、何が一定になるのでしょう。→ 対応する辺の比です。（物体の高さ）：（影の長さ）は、棒でも木でも同じ比になります。棒は 1.5：2、木は h：12 です。',
        add: fresh(...stick, ...tree, ...ground, ...rays, ...cap2('高さ：影 は どの物体でも同じ', '棒　1.5：2　＝　木　h：12', C.main, FILL.warm)),
      },
      {
        note: '❓比を解きましょう。→ h：12＝1.5：2。外項の積＝内項の積で 2×h＝12×1.5＝18。h＝9。木の高さは9mです。',
        add: [lb(110, 70, '木 9m', 11, C.green, 'start', true), ...cap2('h：12 ＝ 1.5：2', '2h ＝ 18　h ＝ 9 m', C.green, FILL.green)],
      },
      {
        note: '❓答えが正しいか、確かめるには？ → 棒は高さが影の 1.5÷2＝0.75倍。木も影12mの0.75倍のはずで、12×0.75＝9m と一致します。高さが影より長くなる答え（たとえば16m）は、比を逆にしたまちがいです。',
        add: fresh(lb(160, 14, '棒：高さは影の 0.75倍（1.5÷2）', 12, C.blue, 'middle', true), lb(160, 36, '木：影12m × 0.75 ＝ 9m', 12, C.green, 'middle', true), ...bar(40, 54, [['影 12m', 200, C.gray]], 26, 12), ...bar(40, 90, [['高さ 9m', 150, C.green]], 26, 12), ...cap('高さは影より短い（比を逆にしていない）', C.green)),
      },
      {
        note: '鏡を使う方法もあります。地面に鏡を置き、木の先が映る位置に立ちます。反射では入射角と反射角が等しいので、目・鏡・木のあいだに相似な直角三角形ができます。目の高さ1.6m、鏡まで2m、鏡から木まで10m なら、1.6：2＝h：10 で h＝8m です。',
        add: fresh(...ground, seg([20, G], [20, 106], C.blue, false, 3), seg([164, G], [164, 29], C.green, false, 4), seg([38, G], [50, G], C.purple, false, 4), seg(eye, M, C.main, false, 1.8), seg(M, top, C.main, false, 1.8), ...arc(M, [20, G], eye, 14, C.red), ...arc(M, [164, G], top, 14, C.red), lb(4, 96, '1.6m', 10, C.blue, 'start', true), lb(32, 142, '2m', 10, C.ink, 'middle', true), lb(104, 142, '10m', 10, C.ink, 'middle', true), lb(176, 80, 'h', 12, C.green, 'start', true), ...cap2('1.6：2 ＝ h：10', '2h ＝ 16　h ＝ 8 m', C.green, FILL.green)),
      },
      {
        note: '❓街灯の光でも、同じ式で解けるのでしょうか。→ 解けません。街灯は点の光源で、光は広がります。平行ではないので、別の相似を使います。高さ4mの街灯から6mはなれた身長1.6mの人の影xは、街灯を頂点とする三角形の相似から 1.6：4＝x：(6＋x)、これを解くと x＝4m です。',
        add: fresh(...ground, seg(lamp, [30, G], C.ink, false, 3), ci(lamp[0], lamp[1], 6, undefined, C.main, FILL.yellow), seg([150, G], [150, 93], C.blue, false, 3), seg([150, G], [230, G], C.gray, false, 4), seg(lamp, [230, G], C.main, true, 1.5), lb(40, 85, '4m', 11, C.ink, 'start', true), lb(158, 108, '1.6m', 10, C.blue, 'start', true), lb(90, 142, '6m', 10, C.ink, 'middle', true), lb(190, 142, 'x', 11, C.gray, 'middle', true), ...cap2('1.6：4 ＝ x：(6＋x)', '1.6(6＋x)＝4x　x ＝ 4 m', C.main, FILL.warm)),
      },
      {
        note: 'まとめです。太陽（同じ時刻）なら光は平行なので、高さ：影＝一定。街灯・電球は点の光源なので、光源を頂点とする相似を使います。比は「高さ：影」の順にそろえ、答えが影より長くなっていないか確かめます。',
        add: fresh(...rows(['太陽・同じ時刻 → 光は平行 → 高さ：影 ＝ 一定', '高さ：影 の順にそろえて比を立てる', '街灯・電球 → 光が広がる → 光源を頂点とする相似', '時刻がちがう影や、斜面の影は混ぜない'], { size: 12 }), ...cap('どの光か、問題文で必ず確かめる', C.red)),
      },
    ],
    '影がつくる相似な三角形',
  );
})();

// ───────── s251 相似の利用③：測量 ─────────
const f_koko_math_s251: DiagramFigure = (() => {
  const A: Pt = [60, 100], B: Pt = [260, 100], Cc: Pt = [160, 16];
  const M = mid(Cc, A), N = mid(Cc, B);
  const D = at(Cc, A, 2 / 3), E = at(Cc, B, 2 / 3);
  const pond: El[] = [ci(160, 100, 32, '池', C.blue, FILL.blue, 13)];
  const ab: El[] = [dot(A), dot(B), ...names({ A, B }, { A: [-10, 4], B: [10, 4] })];
  return show(
    [
      {
        note: '池をはさんだ2地点A、Bの距離を知りたい。でも、間に池があって、メジャーを直接当てられません。測れる長さだけを使って、測れない長さを出す方法を考えます。',
        add: [...pond, seg(A, B, C.red, true, 1.8), ...ab, lb(160, 84, 'AB ＝ ?', 12, C.red, 'middle', true), ...cap('池をはさんだ A、B の距離は？', C.red)],
      },
      {
        note: '❓どこから手をつけるのでしょう。→ 陸の上に、A、Bの両方が見える点Cをとります。CAとCBは陸地を通るので、メジャーで測れます。これで△ABCができました。',
        add: [seg(Cc, A, C.ink, false, 1.8), seg(Cc, B, C.ink, false, 1.8), dot(Cc), nm('C', Cc, 0, -9)],
      },
      {
        note: '❓次に何をするのでしょう。→ CAの中点M、CBの中点Nをとります。メジャーで半分の長さを測って印をつけるだけなので、陸の上でできます。',
        add: [dot(M, C.red), dot(N, C.red), ...names({ M, N }, { M: [-10, 0], N: [10, 0] }, C.red), ...tick(Cc, M, 1, C.blue), ...tick(M, A, 1, C.blue), ...tick(Cc, N, 2, C.blue), ...tick(N, B, 2, C.blue), ...cap('M、N は CA、CB の中点', C.blue)],
      },
      {
        note: '❓MNは測れるでしょうか。→ 測れます。MとNは池の上ではなく陸の上にあるので、直接メジャーを当てられます。たとえばMN＝18mと測れたとします。',
        add: [seg(M, N, C.red, false, 2.4), lb(160, 46, 'MN ＝ 18m', 12, C.red, 'middle', true), ...cap('MN は陸の上 → メジャーで測れる', C.red)],
      },
      {
        note: '❓MNとABの関係は？ → △CABで、M、Nは2辺の中点です。中点連結定理より MN∥AB、MN＝AB÷2。ABの長さの半分がMNです。',
        add: [...par(M, N, 1), ...par(A, B, 1), ...cap2('中点連結定理', 'MN ∥ AB　MN ＝ AB/2', C.main, FILL.warm)],
      },
      {
        note: '❓だから、ABは？ → AB＝MN×2＝18×2＝36m です。半分になるのは、中点どうしを結んだ短いMNのほうです。「18÷2＝9m」としてはいけません。',
        add: [bx(112, 76, 96, 16, undefined, '#FFFFFF', '#FFFFFF'), lb(160, 84, 'AB ＝ 36m', 12, C.green, 'middle', true), ...cap2('AB ＝ MN × 2', '18 × 2 ＝ 36 m', C.green, FILL.green)],
      },
      {
        note: '別の方法です。平行線と線分の比を使います。CA上に点D、CB上に点Eを DE∥AB となるようにとり、CD、CA、DEを測ります。CD＝10m、DA＝5m（CA＝15m）、DE＝12m のとき、CD：CA＝DE：AB なので AB＝12×15/10＝18m です。',
        add: fresh(...pond, seg(Cc, A, C.ink, false, 1.8), seg(Cc, B, C.ink, false, 1.8), seg(A, B, C.red, true, 1.8), seg(D, E, C.blue, false, 2.2), dot(D), dot(E), dot(Cc), dot(A), dot(B), ...names({ A, B, C: Cc, D, E }, { A: [-10, 4], B: [10, 4], C: [0, -9], D: [-10, 0], E: [10, 0] }), ...par(D, E, 1), ...par(A, B, 1), ...cap2('CD：CA ＝ DE：AB（10：15 ＝ 12：AB）', 'AB ＝ 12×15/10 ＝ 18 m', C.blue, FILL.blue, 12)),
      },
      {
        note: 'まとめです。どの方法も「測れる長さだけで、測れない長さを出す」ことが目的です。①中点連結定理 ②平行線と線分の比 ③縮図（角度を測って縮尺で戻す）。現地で測る前に、何を測るかを先に決めます。縮図の答えは「約」をつけて書きます。',
        add: fresh(...rows(['① 中点をとって MN を測る → AB ＝ 2×MN', '② DE∥AB となる点をとる → AB ＝ DE×CA/CD', '③ 縮図をかく → 縮尺で実際の長さに戻す（約○m）', '何を測るかを先に決めてから現地へ'], { size: 12 }), ...cap('測れる長さ → 比 → 測れない長さ', C.main)),
      },
    ],
    '中点連結定理を使う測量',
  );
})();

// ───────── s253 面積比の応用：相似でない三角形の面積比 ─────────
const f_koko_math_s253: DiagramFigure = (() => {
  const A: Pt = [80, 14], B: Pt = [30, 130], Cc: Pt = [290, 130];
  const D = at(A, B, 2 / 3);
  const E = at(A, Cc, 3 / 4);
  const base: El[] = [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), seg(D, E, C.blue, false, 2), dot(D), dot(E), ...names({ A, B, C: Cc, D, E }, { A: [0, -2], B: [-9, 10], C: [9, 10], D: [-10, 0], E: [11, 0] })];
  return show(
    [
      {
        note: '問題です。△ABCの辺AB上に点D、辺AC上に点Eがあり、AD：AB＝2：3、AE：AC＝3：4 です。△ADEの面積は△ABCの何倍でしょう。',
        add: [...base, ...cap2('AD：AB ＝ 2：3　AE：AC ＝ 3：4', '△ADE は △ABC の何倍？', C.red, FILL.red)],
      },
      {
        note: '❓「2：3だから面積比は4：9」としてよいでしょうか。→ いけません。2乗が使えるのは相似なときだけです。DE∥BCなら AD：AB＝AE：AC のはずですが、2：3と3：4は等しくないので、DEはBCと平行でなく、相似ではありません。',
        add: [seg(D, [D[0] + 240, D[1]], C.gray, true, 1.4), lb(250, D[1] - 8, 'BCと平行ではない', 10, C.red, 'middle', true), ...cap('2：3 ≠ 3：4 → 相似ではない（2乗は使えない）', C.red, 11)],
      },
      {
        note: '❓では、どうやって比べるのでしょう。→ 補助線 DC を引いて、途中の三角形 △ADC を経由します。まず △ADE と △ADC。頂点Dが共通で、底辺AE、ACが同じ直線AC上にあるので、高さが共通です。',
        add: [seg(D, Cc, C.purple, true, 1.8), hi([A, D, E], C.blue, 0.3), hi([D, E, Cc], C.green, 0.15), ...cap2('高さ共通（頂点D）', '△ADE：△ADC ＝ AE：AC ＝ 3：4', C.blue, FILL.blue)],
      },
      {
        note: '❓次に △ADC と △ABC は？ → 頂点Cが共通で、底辺AD、ABが同じ直線AB上にあり、高さが共通です。△ADC：△ABC＝AD：AB＝2：3 です。',
        add: fresh(...base, seg(D, Cc, C.purple, true, 1.8), hi([A, D, Cc], C.green, 0.3), ...cap2('高さ共通（頂点C）', '△ADC：△ABC ＝ AD：AB ＝ 2：3', C.green, FILL.green)),
      },
      {
        note: '❓2つの比をつなぐと？ → △ADE は △ADC の 3/4、△ADC は △ABC の 2/3。だから △ADE は △ABC の (3/4)×(2/3)＝1/2 倍です。式にすると (AE/AC)×(AD/AB) で、「はさむ2辺の比の積」になっています。',
        add: fresh(lb(160, 12, '△ABC を 1 とする', 12, C.ink, 'middle', true), ...bar(40, 24, [['△ABC ＝ 1', 240, C.gray]], 24), ...bar(40, 58, [['△ADC ＝ 2/3', 160, C.green]], 24), ...bar(40, 92, [['△ADE ＝ 2/3×3/4＝1/2', 120, C.blue]], 24), ...cap('△ADE：△ABC ＝ (AD×AE)：(AB×AC)', C.main)),
      },
      {
        note: '❓数値で確かめましょう。△ABC＝48cm²なら、△ADE＝48×1/2＝24cm²。公式の「辺の積の比」でも (2×3)：(3×4)＝6：12＝1：2 で同じです。',
        add: fresh(...base, hi([A, D, E], C.blue, 0.35), lb(100, 80, '24cm²', 13, C.blue, 'middle', true), lb(190, 118, '△ABC ＝ 48cm²', 12, C.ink, 'middle', true), ...cap2('(2×3)：(3×4) ＝ 6：12 ＝ 1：2', '48 × 1/2 ＝ 24 cm²', C.green, FILL.green)),
      },
      {
        note: '❓DE∥BC のときはどうなるのでしょう。→ このときは AD：AB＝AE：AC なので、積の公式は (AD/AB)² になり、相似比の2乗と同じ答えになります。つまり相似比の2乗は、この公式の特別な場合です。',
        add: fresh(bx(10, 14, 300, 50, 'DE∥BC のとき　AD：AB ＝ AE：AC\n(AD/AB)×(AE/AC) ＝ (AD/AB)²', C.blue, FILL.blue, 13), bx(10, 76, 300, 50, '相似比の2乗と同じ答えになる', C.green, FILL.green, 14), ...cap('2乗は「積の公式」の特別な場合', C.ink)),
      },
      {
        note: 'まとめです。相似でない三角形の面積比は、高さ共通なら底辺の比、共通角をはさむなら2辺の比の積、どちらでもなければ全体を1として比をつなぐか等積変形。相似なときだけ2乗です。',
        add: fresh(...rows(['高さが共通 → 底辺の比', '共通角をもつ → (AD×AE)：(AB×AC)', '相似な三角形 → 相似比の2乗', 'どれも使えない → 全体を1として比をつなぐ'], { size: 12 }), ...cap('2乗するのは 相似のときだけ', C.red)),
      },
    ],
    '共通な角をもつ三角形の面積比',
  );
})();

// ───────── s255 相似な立体の応用：容器・水の深さ・円錐台 ─────────
const f_koko_math_s255: DiagramFigure = (() => {
  const cupAt = (w: number): El[] => [shape([[100, 22], [220, 22], [160, 132]], C.ink, 'rgba(0,0,0,0)'), hi([[160 - 60 * w, 132 - 110 * w], [160 + 60 * w, 132 - 110 * w], [160, 132]], C.blue, 0.35)];
  const tp: Pt = [160, 14], bl: Pt = [90, 130], br: Pt = [230, 130], ml: Pt = [125, 72], mr: Pt = [195, 72];
  const cone: El[] = [shape([tp, bl, br], C.ink, 'rgba(0,0,0,0)'), seg(ml, mr, C.ink, true, 1.8)];
  return show(
    [
      {
        note: '円錐の形をした容器（頂点が下）に、高さの半分の深さまで水を入れました。水は容器いっぱいの半分でしょうか。直感はこたえを「半分」と言いますが、実はちがいます。比で確かめましょう。',
        add: [...cupAt(0.5), lb(160, 12, '高さ12cmの円錐形の容器（頂点が下）', 11, C.ink, 'middle', true), lb(254, 104, '深さ 6cm', 11, C.blue, 'middle', true), ...cap('深さが半分なら、水も半分？', C.red)],
      },
      {
        note: '❓水の部分は、どんな形でしょう。→ 容器と同じ円錐の形をした、小さい円錐です。つまり容器と相似。相似比は高さの比で、水の深さ6cm：容器の高さ12cm＝1：2 です。',
        add: [lb(60, 60, '相似', 12, C.main, 'middle', true), ...cap2('水の部分は 容器と相似な円錐', '相似比 ＝ 高さの比 ＝ 6：12 ＝ 1：2', C.main, FILL.warm)],
      },
      {
        note: '❓相似比1：2のとき、体積比はいくつでしょう。→ 体積は縦・横・高さの3方向が広がるので、相似比の3乗です。1³：2³＝1：8。水は容器の 1/8 しか入っていません。',
        add: fresh(...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => bx(40 + (i % 4) * 60, 14 + Math.floor(i / 4) * 44, 58, 42, i === 0 ? '水 1' : '', i === 0 ? C.blue : C.gray, i === 0 ? FILL.blue : FILL.gray, 13)), lb(160, 112, '容器いっぱいは 8（水は 1）', 12, C.ink, 'middle', true), ...cap2('体積比 ＝ 1³：2³', '＝ 1：8（水は 1/8）', C.blue, FILL.blue)),
      },
      {
        note: '❓数字ではどうなるでしょう。容器の容積が800cm³なら、水は 800×1/8＝100cm³。「深さが半分だから400cm³」ではありません。',
        add: fresh(...cupAt(0.5), lb(254, 104, '100cm³', 12, C.blue, 'middle', true), lb(254, 40, '容積 800cm³', 11, C.ink, 'middle', true), ...cap2('水の体積 ＝ 800 × 1/8', '＝ 100 cm³（400ではない）', C.green, FILL.green)),
      },
      {
        note: '❓深さが違うと、どうなるでしょう。深さが容器の 2/3 のとき、相似比は2：3なので、体積比は 2³：3³＝8：27。水の量は 8/27 で、半分にも届きません。深さと体積は比例しません。深さを2倍にすると、体積は8倍です。',
        add: fresh(...cupAt(2 / 3), lb(254, 90, '深さ 2/3', 11, C.blue, 'middle', true), ...cap2('相似比 2：3 → 体積比 2³：3³', '＝ 8：27（水は 8/27）', C.blue, FILL.blue)),
      },
      {
        note: '次は円錐台です。円錐を底面に平行に切って、上の小さい円錐を取りのぞいた残りが円錐台。底面の半径6cm、高さ8cmの円錐を、高さの中点で切ってみます。もとの円錐は (1/3)×π×6²×8＝96πcm³。',
        add: fresh(...cone, hi([ml, mr, br, bl], C.blue, 0.3), hi([tp, mr, ml], C.green, 0.3), lb(160, 52, '小円錐 1', 11, C.green, 'middle', true), lb(160, 104, '円錐台 7', 12, C.blue, 'middle', true), lb(268, 60, '全体 8', 11, C.ink, 'middle', true), ...cap2('小円錐は相似比 1：2 → 体積は 1/8 ＝ 12π', '円錐台 ＝ 96π − 12π ＝ 84π cm³', C.blue, FILL.blue, 12)),
      },
      {
        note: '❓頂点を上にして置いた容器に水を入れると、どうなるでしょう。水面から頂点までが6cm（容器の高さは12cm）なら、水が入っていない上の部分が小さい円錐になります。相似比は6：12＝1：2、体積比は 1：8。だから水の部分は 8−1＝7 で、容器の 7/8 です。「1/8」と答えるのは、空気の部分を答えたまちがいです。',
        add: fresh(...cone, hi([ml, mr, br, bl], C.blue, 0.35), hi([tp, mr, ml], C.gray, 0.25), lb(160, 52, '空気 1', 11, C.gray, 'middle', true), lb(160, 104, '水 7', 12, C.blue, 'middle', true), ar(262, 16, 262, 70, C.red), ar(262, 70, 262, 16, C.red), lb(284, 44, '6cm', 11, C.red, 'middle', true), ...cap2('空気の部分が小円錐 → 1/8', '水 ＝ 1 − 1/8 ＝ 7/8', C.blue, FILL.blue)),
      },
      {
        note: 'まとめです。円錐を底面に平行に切ると、上の小円錐はもとと相似。相似比が a：b なら体積比は a³：b³。深さ2倍で体積8倍。頂点が下か上かで、水が小円錐になるのか、空気が小円錐になるのかが変わるので、図をかいて確かめます。',
        add: fresh(...rows(['水の部分 ＝ 容器と相似な円錐（頂点が下のとき）', '体積比 ＝ 相似比の3乗（1：2 → 1：8）', '円錐台 ＝ もとの円錐 − 小円錐', '頂点が上のときは 空気が小円錐（水 ＝ 1 − 1/8）'], { size: 12 }), ...cap('深さと体積は比例しない', C.red)),
      },
    ],
    '円錐形の容器と水の量',
  );
})();

// ───────── s256 面積比・体積比の総合演習 ─────────
const f_koko_math_s256: DiagramFigure = (() => {
  const A: Pt = [160, 12], B: Pt = [40, 130], Cc: Pt = [280, 130];
  const D = at(A, B, 0.4);
  const E = at(A, Cc, 0.4);
  const pyr: El[] = [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), seg(D, E, C.blue, false, 2), dot(D), dot(E), ...names({ A, B, C: Cc, D, E }, { A: [0, -2], B: [-9, 10], C: [9, 10], D: [-10, 0], E: [10, 0] })];
  // 円錐
  const ap: Pt = [130, 10];
  const lvl = (h: number): [Pt, Pt] => [[130 - (70 * h) / 9, 10 + (120 * h) / 9], [130 + (70 * h) / 9, 10 + (120 * h) / 9]];
  const [l3, r3] = lvl(3), [l6, r6] = lvl(6), [l9, r9] = lvl(9);
  const cone: El[] = [shape([ap, l9, r9], C.ink, 'rgba(0,0,0,0)'), seg(l3, r3, C.ink, true, 1.6), seg(l6, r6, C.ink, true, 1.6), lb(l3[0] - 6, l3[1], '3cm', 10, C.gray, 'end', true), lb(l6[0] - 6, l6[1], '6cm', 10, C.gray, 'end', true), lb(l9[0] - 6, l9[1] - 6, '9cm', 10, C.gray, 'end', true)];
  return show(
    [
      {
        note: '例題です。△ABCで DE∥BC、AD：DB＝2：3。△ADEの面積が8cm²のとき、台形DBCEの面積を求めます。まず、与えられた比が何の比かをはっきりさせます。',
        add: [...pyr, ...par(D, E, 1), ...par(B, Cc, 1), lb(160, 66, '8cm²', 12, C.blue, 'middle', true), ...cap('AD：DB ＝ 2：3　△ADE ＝ 8cm²　台形 DBCE は？', C.ink, 11)],
      },
      {
        note: '❓相似比はいくつでしょう。→ 相似な△ADEと△ABCでは、AD：AB。AB＝AD＋DB＝2＋3＝5 なので、AD：AB＝2：5 です。「2：3」をそのまま相似比にしてはいけません。',
        add: fresh(lb(160, 14, '辺AB を AD：DB に分ける', 12, C.ink, 'middle', true), ...bar(40, 26, [['AD 2', 80, C.blue], ['DB 3', 120, C.gray]], 28, 13), lb(160, 76, 'AB ＝ 2＋3 ＝ 5', 12, C.main, 'middle', true), lb(160, 100, '相似比 AD：AB ＝ 2：5', 13, C.blue, 'middle', true), ...cap('2：3 ではなく、全体の AB（5）と比べる', C.red)),
      },
      {
        note: '❓面積比はいくつでしょう。→ 面積は縦×横なので、相似比の2乗。2²：5²＝4：25。1辺2の正方形の面積は4、1辺5の正方形の面積は25、というイメージです。',
        add: fresh(bx(40, 30, 48, 48, '4', C.blue, FILL.blue, 15), bx(140, 18, 120, 120, '25', C.gray, FILL.gray, 18), lb(64, 92, '辺 2', 11, C.blue, 'middle', true), lb(272, 78, '辺 5', 11, C.gray, 'start', true), ...cap2('面積比 ＝ 相似比の2乗', '△ADE：△ABC ＝ 4：25', C.main, FILL.warm)),
      },
      {
        note: '❓台形の面積はどうやって出すのでしょう。→ 台形＝△ABC−△ADE です。比では 25−4＝21。つまり △ADE：台形DBCE＝4：21。△ADEが8cm²なら、1あたり2cm²。台形は 21×2＝42cm²、△ABCは 25×2＝50cm² です。',
        add: fresh(lb(160, 12, '△ABC ＝ 25 のうち', 12, C.ink, 'middle', true), ...bar(30, 24, [['△ADE 4', 32, C.blue], ['台形 21', 168, C.green]], 30, 13), lb(160, 76, '4 ↔ 8cm²　なので 1 ↔ 2cm²', 12, C.main, 'middle', true), lb(160, 100, '台形 ＝ 21 × 2 ＝ 42 cm²', 13, C.green, 'middle', true), lb(160, 124, '検算：8 ＋ 42 ＝ 50 ＝ △ABC ✓', 11, C.gray, 'middle', true), ...cap('台形 ＝ 50 − 8 ＝ 42 cm²', C.green)),
      },
      {
        note: '次は例題です。高さ9cmの円錐を、頂点から3cmと6cmのところで底面に平行に切って、3つの部分に分けます。上・中・下の体積比を求めます。頂点から測った高さの比は 3：6：9＝1：2：3 です。',
        add: fresh(...cone, lb(250, 40, '頂点から測った高さ', 11, C.ink, 'middle', true), lb(250, 62, '3 ： 6 ： 9', 13, C.main, 'middle', true), lb(250, 84, '＝ 1 ： 2 ： 3', 13, C.main, 'middle', true), ...cap('上・中・下の体積比は？', C.red)),
      },
      {
        note: '❓頂点から測った円錐の体積比は？ → 相似比が1：2：3 なので、体積比は1³：2³：3³＝1：8：27 です。ただし、これは「頂点から測った3つの円錐」の体積で、切り分けた3つの部分ではありません。',
        add: [bx(198, 22, 122, 90, undefined, '#FFFFFF', '#FFFFFF'), hi([ap, l3, r3], C.green, 0.3), hi([ap, l6, r6], C.blue, 0.15), lb(250, 36, '頂点からの円錐', 11, C.ink, 'middle', true), lb(250, 58, '3cmまで → 1', 12, C.green, 'middle', true), lb(250, 78, '6cmまで → 8', 12, C.blue, 'middle', true), lb(250, 98, '9cmまで → 27', 12, C.ink, 'middle', true), ...cap('累積の体積比 ＝ 1³：2³：3³ ＝ 1：8：27', C.main)],
      },
      {
        note: '❓では、切り分けた各部分は？ → 差をとります。上は1、中は 8−1＝7、下は 27−8＝19。比は1：7：19。1＋7＋19＝27 で全体と一致します。「1：8：27」と答えるのは、累積と各層を混ぜたまちがいです。',
        add: fresh(...cone, hi([ap, l3, r3], C.green, 0.35), hi([l3, r3, r6, l6], C.blue, 0.3), hi([l6, r6, r9, l9], C.red, 0.25), lb(130, 40, '1', 12, C.green, 'middle', true), lb(130, 72, '7', 12, C.blue, 'middle', true), lb(130, 112, '19', 12, C.red, 'middle', true), lb(250, 50, '27−8 ＝ 19', 12, C.red, 'middle', true), lb(250, 72, '8−1 ＝ 7', 12, C.blue, 'middle', true), lb(250, 94, '1 ＝ 1', 12, C.green, 'middle', true), ...cap2('上：中：下', '＝ 1：7：19（和は 27）', C.main, FILL.warm)),
      },
      {
        note: 'まとめです。どの問題も「まず相似比に戻す」が定石です。余白に「相似比 a：b／面積比 a²：b²／体積比 a³：b³」を書いてから解きます。面積比から相似比に戻すときは平方根、体積比から戻すときは3乗根。累積の比は、差をとってから各部分を答えます。',
        add: fresh(...rows(['相似比 a：b　面積比 a²：b²　体積比 a³：b³', '面積比 → 相似比は「平方根」、体積比 → 相似比は「3乗根」', '2：3 などの部分の比は、全体（5）に直して相似比にする', '累積の比は 差をとってから各部分を答える'], { size: 12 }), ...cap('まず相似比に戻す', C.red)),
      },
    ],
    '複合問題の解き方',
  );
})();

// ───────── s258 三平方の基本計算と根号の処理 ─────────
const f_koko_math_s258: DiagramFigure = (() => {
  const rtri = (x: number, y: number, w: number, h: number, col: string = C.blue, fill: string = FILL.blue): El[] => [shape([[x, y], [x + w, y], [x, y - h]], col, fill), ...rt([x, y], [x + w, y], [x, y - h], 7)];
  return show(
    [
      {
        note: '三平方の定理は a²＋b²＝c²（cが斜辺）。まず斜辺を求めるパターンです。直角をはさむ2辺が5cmと7cmのとき、斜辺cは？ 斜辺を求めるときは足し算です。',
        add: [...rtri(60, 120, 168, 120), lb(144, 136, '7', 12, C.ink, 'middle', true), lb(48, 60, '5', 12, C.ink, 'end', true), lb(160, 56, 'c ＝ ?', 12, C.red, 'middle', true), ...cap2('c² ＝ 5² ＋ 7² ＝ 25 ＋ 49 ＝ 74', 'c ＝ √74 cm（これ以上簡単にならない）', C.blue, FILL.blue, 12)],
      },
      {
        note: '次は斜辺がわかっていて、他の辺を求めるパターンです。斜辺13cm、一辺5cmなら、もう一辺 b は？ 斜辺は一番長い辺なので、2乗の関係は 5²＋b²＝13²。ここは引き算になります。b²＝169−25＝144、b＝12cm。',
        add: fresh(...rtri(60, 120, 192, 80), lb(156, 136, 'b ＝ ?', 12, C.red, 'middle', true), lb(48, 80, '5', 12, C.ink, 'end', true), lb(170, 68, '13', 12, C.ink, 'middle', true), ...cap2('b² ＝ 13² − 5² ＝ 169 − 25 ＝ 144', 'b ＝ 12 cm', C.green, FILL.green)),
      },
      {
        note: '3つ目は、答えに根号が残るパターンです。直角をはさむ2辺が2cmと4cm。c²＝2²＋4²＝4＋16＝20 なので c＝√20。でも、このままでは減点されることがあります。',
        add: fresh(...rtri(70, 120, 160, 80), lb(150, 136, '4', 12, C.ink, 'middle', true), lb(58, 80, '2', 12, C.ink, 'end', true), lb(170, 70, 'c', 12, C.red, 'middle', true), ...cap2('c² ＝ 2² ＋ 4² ＝ 4 ＋ 16 ＝ 20', 'c ＝ √20 cm → このままでは減点', C.red, FILL.red, 12)),
      },
      {
        note: '❓なぜ √20 を 2√5 に直すのでしょう。→ √の中に「2乗になっている数」があれば、外に出せるからです。20＝4×5 で、4＝2²。√(4×5)＝√4×√5＝2√5。根号の中を最小の整数にするのが約束です。',
        add: fresh(...flow(['√20', '√(4×5)', '√4×√5', '2√5'], 20, { h: 36, size: 12 }).flat(), bx(20, 78, 280, 40, '20 ＝ 4 × 5（4 ＝ 2²）だから外に出せる', C.main, FILL.warm, 13), ...cap2('検算：(2√5)² ＝ 4 × 5 ＝ 20', 'もとの c² と一致する', C.green, FILL.green)),
      },
      {
        note: '❓よく出る根号は、そのまま覚えると速くなります。√8＝2√2、√12＝2√3、√18＝3√2、√50＝5√2、√75＝5√3。どれも「2乗の数×もうひとつの数」の形（8＝4×2、12＝4×3、18＝9×2、50＝25×2、75＝25×3）です。',
        add: fresh(...rows(['√8 ＝ √(4×2) ＝ 2√2', '√12 ＝ √(4×3) ＝ 2√3', '√18 ＝ √(9×2) ＝ 3√2', '√50 ＝ √(25×2) ＝ 5√2', '√75 ＝ √(25×3) ＝ 5√3'], { h: 24, gap: 4, size: 12 }), ...cap('2乗の数（4、9、25）を外に出す', C.main)),
      },
      {
        note: '❓(2√5)² の計算でまちがえやすいのは？ → 係数の2も2乗します。(2√5)²＝2²×(√5)²＝4×5＝20。「2×5＝10」としてしまうミスが多いので注意。2乗すると、根号は外れて整数にもどります。',
        add: fresh(bx(20, 14, 280, 34, '(2√5)² ＝ 2² × (√5)² ＝ 4 × 5 ＝ 20', C.green, FILL.green, 14), bx(20, 66, 280, 34, '× 2 × 5 ＝ 10（係数を2乗し忘れ）', C.red, FILL.red, 14), ...cap('係数も2乗する', C.red)),
      },
      {
        note: '❓計算を速くする工夫は？ ①辺を共通の数でわって、3：4：5 などの比にする。6cmと8cmなら3：4：5の2倍で斜辺は10cm。②引き算は因数分解 c²−a²＝(c＋a)(c−a)。斜辺25cm、辺24cmなら (25＋24)(25−24)＝49×1＝49 で、b＝7cm と暗算できます。',
        add: fresh(...rows(['6, 8 → 3, 4 の2倍 → 斜辺 5×2 ＝ 10', '9, 12 → 3, 4 の3倍 → 斜辺 5×3 ＝ 15', '25² − 24² ＝ (25＋24)(25−24) ＝ 49 → b ＝ 7', '1.5, 2 → 3, 4 の半分 → 斜辺 5÷2 ＝ 2.5'], { size: 12 }), ...cap('大きな2乗を書き出さずに すませる', C.main)),
      },
      {
        note: 'まとめです。斜辺を求めるなら足し算、他の辺を求めるなら引き算。根号は2乗の数を外に出して最小の整数に。係数も2乗する。長さは正の数なので、負の平方根は答えにしません。',
        add: fresh(...rows(['斜辺を求める → 足し算　他の辺 → 引き算', '答えの根号は簡単にする（√20 ＝ 2√5）', '(2√5)² ＝ 4×5 ＝ 20（係数も2乗）', '検算：求めた3辺で a²＋b²＝c² を確かめる'], { size: 12 }), ...cap('長さは正の数だけを答える', C.ink)),
      },
    ],
    '基本の計算パターン',
  );
})();

// ───────── s259 三平方の定理の逆：直角三角形の判定 ─────────
const f_koko_math_s259: DiagramFigure = (() => {
  const sqOn = (p: Pt, q: Pt, r: Pt): Pt[] => {
    const v: Pt = [q[0] - p[0], q[1] - p[1]];
    let n: Pt = [-v[1], v[0]];
    if (n[0] * (r[0] - p[0]) + n[1] * (r[1] - p[1]) > 0) n = [-n[0], -n[1]];
    return [p, q, [q[0] + n[0], q[1] + n[1]], [p[0] + n[0], p[1] + n[1]]];
  };
  const B: Pt = [160, 90], Cc: Pt = [200, 90], A: Pt = [160, 60];
  const tri: El[] = [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), ...rt(B, A, Cc, 6), ...names({ A, B, C: Cc }, { A: [-8, -4], B: [-8, 10], C: [9, 4] })];
  const sqBC = sqOn(B, Cc, A), sqAB = sqOn(A, B, Cc), sqAC = sqOn(A, Cc, B);
  const cmp = (a2b2: number, c2: number, la: string, lc: string): El[] => [lb(160, 14, la, 12, C.blue, 'middle', true), ...bar(30, 24, [[String(a2b2), a2b2 * 4, C.blue]], 26, 13), lb(160, 66, lc, 12, C.red, 'middle', true), ...bar(30, 76, [[String(c2), c2 * 4, C.red]], 26, 13)];
  return show(
    [
      {
        note: '三平方の定理は「直角三角形ならば a²＋b²＝c²」。その逆「a²＋b²＝c² ならば直角三角形」も正しいです。3辺が3cm、4cm、5cmの三角形は、直角三角形でしょうか。定規で角を測らなくても、2乗の関係で判定できます。',
        add: [...tri, lb(130, 76, '3', 11, C.ink, 'middle', true), lb(180, 102, '4', 11, C.ink, 'middle', true), lb(188, 68, '5', 11, C.ink, 'middle', true), ...cap('3cm、4cm、5cm の三角形は直角三角形？', C.ink)],
      },
      {
        note: '❓2乗とは何を表すのでしょう。→ その辺を1辺とする正方形の面積です。直角をはさむ2辺の上に正方形をかくと、面積は 3²＝9 と 4²＝16。足すと 9＋16＝25 です。',
        add: fresh(hi(sqBC, C.green, 0.3), hi(sqAB, C.blue, 0.3), ...tri, lb(180, 112, '4² ＝ 16', 12, C.green, 'middle', true), lb(144, 76, '9', 12, C.blue, 'end', true), ...cap('短い2辺の正方形の面積の和 ＝ 9 ＋ 16 ＝ 25', C.ink, 11)),
      },
      {
        note: '❓いちばん長い辺（5cm）の上の正方形の面積は？ → 5²＝25。ちょうど、短い2辺の正方形の面積の和と等しくなりました。この関係が成り立つとき、その三角形は直角三角形で、直角は最も長い辺の向かい側です。',
        add: [hi(sqAC, C.red, 0.3), lb(196, 40, '5² ＝ 25', 12, C.red, 'middle', true), ...cap2('9 ＋ 16 ＝ 25 ＝ 5²', '→ 直角三角形（直角は ∠B）', C.red, FILL.red)],
      },
      {
        note: '❓判定の手順は？ ①3辺の中でいちばん長い辺を見つけて c とする ②残りの2辺 a、b について a²＋b² を計算 ③c² と比べる。等しければ直角三角形です。a、b、c と文字が与えられていても、最長の辺を c として計算し直します。',
        add: fresh(...rows(['① いちばん長い辺を c とする', '② 残りの2辺で a² ＋ b² を計算する', '③ c² と比べる（等しければ直角三角形）'], { y0: 10, h: 34, gap: 8, size: 13 }), ...cap('最長の辺が c（文字の順番にだまされない）', C.red, 11)),
      },
      {
        note: '❓3辺が4cm、5cm、6cmのときは？ → 最長は6cm。a²＋b²＝4²＋5²＝16＋25＝41。c²＝6²＝36。41と36は等しくないので、直角三角形ではありません。c² が小さいときは、すべての角が90°より小さい鋭角三角形です。',
        add: fresh(...cmp(41, 36, 'a² ＋ b² ＝ 4² ＋ 5² ＝ 41', 'c² ＝ 6² ＝ 36'), ...cap2('41 ≠ 36（c² の方が小さい）', '直角ではない → 鋭角三角形', C.red, FILL.red)),
      },
      {
        note: '❓3辺が5cm、6cm、8cmのときは？ → 最長は8cm。5²＋6²＝25＋36＝61。8²＝64。64のほうが大きいので、直角三角形ではなく、8cmの辺の向かい側の角が90°より大きい鈍角三角形です。5、12、13 に似た数でも、印象で決めつけずに2乗して比べます。',
        add: fresh(...cmp(61, 64, 'a² ＋ b² ＝ 5² ＋ 6² ＝ 61', 'c² ＝ 8² ＝ 64'), ...cap2('61 ＜ 64（c² の方が大きい）', '直角ではない → 鈍角三角形', C.red, FILL.red)),
      },
      {
        note: '❓直角はどの角でしょう。→ いちばん長い辺の向かい側の角です。△ABCで AB＝3、BC＝4、CA＝5 なら、最長辺CAの向かい側の角 ∠B が90°。「AB²＋BC²＝CA² だから ∠B＝90°」と答えます。',
        add: fresh(shape([[100, 120], [100, 56], [190, 120]], C.ink, 'rgba(0,0,0,0)'), ...rt([100, 120], [100, 56], [190, 120], 8), seg([100, 56], [190, 120], C.red, false, 3), ar(215, 70, 150, 95, C.red), lb(255, 70, '最長の辺 CA', 11, C.red, 'middle', true), ...names({ A: [100, 56], B: [100, 120], C: [190, 120] }, { A: [-9, -2], B: [-9, 10], C: [9, 10] }), lb(120, 108, '∠B ＝ 90°', 11, C.red, 'start', true), ...cap('直角は、最長辺の向かい側の角', C.red)),
      },
      {
        note: 'まとめです。根号つきの辺では、2乗した数で比べます。AB＝√5、BC＝√12、CA＝√17 なら、5＋12＝17 で直角三角形（∠B＝90°）。また、そもそも三角形になる条件（最長の辺＜他の2辺の和）も確かめます。2cm、3cm、6cm は 6＞2＋3 なので三角形になりません。',
        add: fresh(...rows(['√5, √12, √17 → 2乗して 5 ＋ 12 ＝ 17 → 直角（∠B＝90°）', '2, 3, 6 → 6 ＞ 2＋3 なので 三角形にならない', 'c² ＝ a²＋b² 直角　c² ＞ a²＋b² 鈍角　c² ＜ a²＋b² 鋭角', '直角三角形かどうかは、必ず2乗して比べる'], { size: 11 }), ...cap('2乗した数で比べる／三角形の成立も確かめる', C.ink, 11)),
      },
    ],
    '逆の使い方と手順',
  );
})();

// ───────── s260 整数比になる直角三角形（ピタゴラス数） ─────────
const f_koko_math_s260: DiagramFigure = (() => {
  const rtri = (x: number, y: number, w: number, h: number, col: string = C.blue, fill: string = FILL.blue): El[] => [shape([[x, y], [x + w, y], [x, y - h]], col, fill), ...rt([x, y], [x + w, y], [x, y - h], 7)];
  return show(
    [
      {
        note: '3：4：5 の三角形を見て、一瞬で直角三角形だとわかる人と、毎回2乗して確かめる人では、試験でかかる時間がちがいます。3辺がすべて整数になる直角三角形の組を、ピタゴラス数といいます。',
        add: [...rtri(30, 120, 96, 72), ...rtri(170, 120, 80, 100, C.green, FILL.green), lb(78, 134, '4', 11, C.ink, 'middle', true), lb(22, 84, '3', 11, C.ink, 'end', true), lb(86, 76, '5', 11, C.ink, 'middle', true), lb(210, 134, '12', 11, C.ink, 'middle', true), lb(162, 70, '5', 11, C.ink, 'end', true), lb(222, 68, '13', 11, C.ink, 'middle', true), ...cap('3：4：5 と 5：12：13 は 絶対に覚える', C.red)],
      },
      {
        note: '❓入試によく出る組は？ 3、4、5（9＋16＝25）、5、12、13（25＋144＝169）、8、15、17（64＋225＝289）、7、24、25（49＋576＝625）、20、21、29（400＋441＝841）、9、40、41（81＋1600＝1681）。どれも a²＋b²＝c² が成り立っています。',
        add: fresh(...rows(['3, 4, 5　（9＋16＝25）', '5, 12, 13　（25＋144＝169）', '8, 15, 17　（64＋225＝289）', '7, 24, 25　（49＋576＝625）', '20, 21, 29　（400＋441＝841）', '9, 40, 41　（81＋1600＝1681）'], { h: 20, gap: 3, size: 11 }), ...cap('特に 3·4·5 と 5·12·13 が最重要', C.main)),
      },
      {
        note: '❓整数倍しても直角三角形のままでしょうか。→ そのままです。3辺を同じ数倍すると相似な三角形になるので、直角も変わりません。3：4：5 の2倍は 6：8：10、3倍は 9：12：15、5倍は 15：20：25。5：12：13 の2倍は 10：24：26 です。',
        add: fresh(...flow(['3 : 4 : 5', '6 : 8 : 10', '9 : 12 : 15', '15 : 20 : 25'], 20, { h: 36, size: 12 }).flat(), lb(75, 80, '×2', 12, C.main, 'middle', true), lb(160, 80, '×3', 12, C.main, 'middle', true), lb(245, 80, '×5', 12, C.main, 'middle', true), ...cap('相似な三角形なので 直角のまま', C.main)),
      },
      {
        note: '❓使うときは、どうするのでしょう。直角をはさむ2辺が20cmと15cmのとき。→ まず共通の数5でわって、4と3。3：4：5 の三角形です。だから斜辺は 5×5＝25cm。2乗する計算をしなくてすみます。',
        add: fresh(...rtri(60, 120, 160, 120), lb(140, 136, '20', 12, C.ink, 'middle', true), lb(48, 60, '15', 12, C.ink, 'end', true), lb(150, 56, '25', 12, C.red, 'middle', true), ...cap2('20、15 を 5 でわる → 4、3 → 3：4：5', '斜辺 ＝ 5 × 5 ＝ 25 cm', C.green, FILL.green)),
      },
      {
        note: '❓斜辺がわかっているときは？ 斜辺26cm、他の1辺10cmの直角三角形。→ 2でわると斜辺13、辺5。5：12：13 だから、もう1辺は 12×2＝24cm です。',
        add: fresh(...rtri(50, 120, 224, 60), lb(162, 136, '?', 13, C.red, 'middle', true), lb(38, 90, '10', 12, C.ink, 'end', true), lb(180, 62, '26', 12, C.ink, 'middle', true), ...cap2('÷2 → 斜辺13、辺5 → 5：12：13', '残りの辺 ＝ 12 × 2 ＝ 24 cm', C.green, FILL.green)),
      },
      {
        note: '❓面積はどう求めるのでしょう。→ 直角三角形の面積は「直角をはさむ2辺の積÷2」。5、12、13なら (1/2)×5×12＝30cm²。斜辺13cmを底辺にして (1/2)×13×5 としてはいけません。斜辺を底辺にするなら、高さは 60/13cm です。',
        add: fresh(shape([[60, 120], [220, 120], [60, 70]], C.blue, 'rgba(2,132,199,0.25)'), ...rt([60, 120], [220, 120], [60, 70], 7), lb(140, 136, '12', 12, C.ink, 'middle', true), lb(48, 96, '5', 12, C.ink, 'end', true), lb(150, 86, '13', 12, C.ink, 'start', true), lb(110, 108, '30cm²', 12, C.blue, 'middle', true), ...cap2('面積 ＝ 直角をはさむ2辺の積 ÷ 2', '(1/2) × 5 × 12 ＝ 30 cm²', C.blue, FILL.blue)),
      },
      {
        note: '❓整数比にならない直角三角形もあるのでしょうか。→ むしろ多いです。2cmと3cmなら斜辺は √13cm（整数にならない）。1：1：√2 や 1：2：√3 のように根号が出るものが普通です。整数比にならないときは、素直に2乗して計算します。',
        add: fresh(...rows(['2, 3 → 斜辺 √(4＋9)＝√13（整数でない）', '1 : 1 : √2（直角二等辺三角形）', '1 : 2 : √3（30°・60°・90°）', '基本の組にならないときは 2乗して計算'], { size: 12 }), ...cap('組にあてはまらなければ 素直に計算', C.ink)),
      },
      {
        note: 'ひっかけです。直角三角形の2辺が5cmと13cmのとき、もう1辺は？ 13cmが斜辺なら、169−25＝144 で 12cm。でも、5cmと13cmが直角をはさむ2辺なら、斜辺は √(25＋169)＝√194cm。問題文に「斜辺が13cm」と書いてあるかを必ず確かめます。',
        add: fresh(...rtri(20, 104, 96, 40, C.green, FILL.green), lb(68, 118, '12', 11, C.ink, 'middle', true), lb(12, 84, '5', 11, C.ink, 'end', true), lb(80, 68, '13（斜辺）', 10, C.ink, 'middle', true), ...rtri(180, 104, 96, 40, C.red, FILL.red), lb(228, 118, '13', 11, C.ink, 'middle', true), lb(172, 84, '5', 11, C.ink, 'end', true), lb(232, 62, '√194', 10, C.red, 'middle', true), lb(70, 134, '13が斜辺 → 12cm', 10, C.green, 'middle', true), lb(228, 134, '5と13がはさむ → √194', 10, C.red, 'middle', true), ...cap('「斜辺が13」と書いてあるか確かめる', C.red)),
      },
    ],
    '覚えておくべき整数の組',
  );
})();

// ───────── s263 特別な直角三角形の使い分けと補助線 ─────────
const f_koko_math_s263: DiagramFigure = (() => {
  const A: Pt = [160, 50], B: Pt = [56, 110], Cc: Pt = [264, 110], H: Pt = [160, 110];
  const fig = (): El[] => [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), ...names({ A, B, C: Cc }, { A: [0, -9], B: [-9, 8], C: [9, 8] })];
  // 150° の図
  const A2: Pt = [110, 112], C2: Pt = [260, 112], B2: Pt = [26.9, 64], H2: Pt = [26.9, 112];
  return show(
    [
      {
        note: '問題です。∠A＝120°、AB＝AC＝6cm の二等辺三角形ABCの面積を求めます。直角がない三角形なので、そのままでは三平方の定理も辺の比も使えません。',
        add: [...fig(), ...arc(A, B, Cc, 20, C.red), lb(160, 76, '120°', 10, C.red, 'middle', true), tag('6', B, A, -10), tag('6', A, Cc, -10), ...cap('∠A＝120°、AB＝AC＝6cm の面積は？', C.ink)],
      },
      {
        note: '❓「(1/2)×6×6＝18cm²」としてよいでしょうか。→ いけません。(1/2)×2辺の積 が使えるのは、2辺がつくる角が90°のときだけです。ここは120°のはさむ角で、直角ではありません。',
        add: [lb(160, 100, '× 18cm²', 14, C.red, 'middle', true), ...cap2('はさむ角が 90° ではない', '「2辺の積÷2」は使えない', C.red, FILL.red)],
      },
      {
        note: '❓どうやって直角を作るのでしょう。→ 頂点Aから底辺BCに垂線AHを引きます。二等辺三角形では、この垂線が頂角を二等分し、底辺も二等分します。だから ∠BAH＝∠CAH＝120°÷2＝60° です。',
        add: [bx(100, 88, 120, 22, undefined, '#FFFFFF', '#FFFFFF'), seg(A, H, C.blue, true, 2), ...rt(H, A, Cc, 8), dot(H), nm('H', H, 0, 12), ...arc(A, B, H, 24, C.green), ...arc(A, H, Cc, 24, C.green), ...cap('垂線 AH で 直角を作る（∠BAH＝∠CAH＝60°）', C.blue, 11)],
      },
      {
        note: '❓△ABHはどんな三角形でしょう。→ 角は 90°、60°、そして残りは 180°−90°−60°＝30°。30°・60°・90° の直角三角形です。辺の比は、30°の向かい側：60°の向かい側：斜辺＝1：√3：2 です。',
        add: fresh(...fig(), seg(A, H, C.blue, true, 2), ...rt(H, A, Cc, 8), hi([A, B, H], C.blue, 0.2), ...arc(B, A, H, 22, C.red), lb(98, 104, '30°', 9, C.red, 'start', true), lb(176, 80, '1', 12, C.blue, 'start', true), lb(108, 126, '√3', 12, C.blue, 'middle', true), lb(98, 70, '2', 12, C.blue, 'end', true), ...cap2('30°・60°・90° の直角三角形', 'AH：BH：AB ＝ 1：√3：2', C.blue, FILL.blue)),
      },
      {
        note: '❓長さを出しましょう。斜辺 AB＝6 は、比の「2」にあたります。1あたり3cm。だから AH＝1×3＝3cm、BH＝√3×3＝3√3cm です。',
        add: fresh(...fig(), seg(A, H, C.blue, true, 2), ...rt(H, A, Cc, 8), hi([A, B, H], C.blue, 0.2), lb(168, 84, '3', 12, C.blue, 'start', true), lb(108, 126, 'BH ＝ 3√3', 12, C.blue, 'middle', true), lb(98, 70, '6', 12, C.ink, 'end', true), ...cap2('AB＝6 が比の 2 → 1 は 3cm', 'AH ＝ 3、BH ＝ 3√3', C.green, FILL.green)),
      },
      {
        note: '❓面積は？ → 二等辺三角形なので BC＝BH×2＝2×3√3＝6√3cm。底辺BC、高さAHを使って (1/2)×6√3×3＝9√3cm²（約15.6cm²）。18cm²とはちがう、とわかります。',
        add: fresh(...fig(), hi([A, B, Cc], C.green, 0.15), seg(A, H, C.blue, true, 2), ...rt(H, A, Cc, 8), lb(112, 126, '3√3', 11, C.ink, 'middle', true), lb(210, 126, '3√3', 11, C.ink, 'middle', true), lb(176, 84, '3', 12, C.blue, 'start', true), ...cap2('BC ＝ 6√3、高さ AH ＝ 3', '面積 ＝ (1/2)×6√3×3 ＝ 9√3 cm²', C.green, FILL.green)),
      },
      {
        note: '❓150°が出てきたらどうするのでしょう。∠A＝150°、AB＝8cm のとき。→ 頂点Bから、辺ACを延ばした直線に垂線BHを引きます。外側の角 ∠BAH＝180°−150°＝30° で、30°・60°・90°の直角三角形ができます。BH＝8×1/2＝4cm、AH＝4√3cm。垂線の足Hは、辺ACの外側に落ちます。',
        add: fresh(seg(A2, C2), seg(A2, B2), seg(B2, C2), seg([16, 112], A2, C.gray, true, 1.6), seg(B2, H2, C.blue, true, 2), ...rt(H2, B2, A2, 7), ...arc(A2, B2, C2, 26, C.red), ...arc(A2, B2, H2, 16, C.green), lb(108, 92, '150°', 9, C.red, 'middle', true), lb(70, 106, '30°', 9, C.green, 'middle', true), ...names({ A: A2, B: B2, C: C2, H: H2 }, { A: [4, 12], B: [0, -9], C: [9, 4], H: [0, 12] }), lb(14, 90, '4', 11, C.blue, 'middle', true), lb(66, 124, '4√3', 11, C.blue, 'middle', true), ...cap('垂線の足は 辺の外側（延長上）にくる', C.blue)),
      },
      {
        note: 'まとめです。角度に45°があれば 1：1：√2、30°・60°があれば 1：√3：2。120°や150°は、補角（60°・30°）をつくる垂線を引いて分解します。直角がない三角形では、自分で垂線を引いて直角を作ります。',
        add: fresh(...rows(['45° → 1：1：√2（直角二等辺三角形）', '30°・60° → 1：√3：2', '120°・150° → 垂線を引いて 60°・30° に分解', '垂線の足が辺の外側にくる場合は 図を正しくかく'], { size: 12 }), ...cap('角度を見て、使う比を決める', C.ink)),
      },
    ],
    '鈍角の分解と、外側に落ちる垂線',
  );
})();

// ───────── s265 四角形の対角線と三平方の定理（台形） ─────────
const f_koko_math_s265: DiagramFigure = (() => {
  const B: Pt = [50, 120], Cc: Pt = [260, 120], A: Pt = [110, 75], D: Pt = [200, 75], H: Pt = [110, 120], I: Pt = [200, 120];
  const trap = (): El[] => [shape([A, B, Cc, D]), ...names({ A, B, C: Cc, D }, { A: [-4, -9], B: [-9, 8], C: [9, 8], D: [4, -9] })];
  // 長方形と対角線
  const R: Pt[] = [[88, 40], [232, 40], [232, 100], [88, 100]];
  return show(
    [
      {
        note: '問題です。AD∥BC の台形ABCDで、AD＝6cm、BC＝14cm、AB＝DC＝5cm（脚の長さが等しい等脚台形）。面積を求めます。台形の面積は (上底＋下底)×高さ÷2 なので、高さを出すのが目標です。',
        add: [...trap(), tag('6', A, D, -10), tag('14', B, Cc, 22), tag('5', B, A, 10), tag('5', Cc, D, -10), ...cap('AD＝6　BC＝14　AB＝DC＝5　面積は？', C.ink)],
      },
      {
        note: '❓脚の5cmを高さとして (1/2)×(6＋14)×5＝50cm² としてよいでしょうか。→ いけません。ABは斜めの辺で、高さ（上底と下底のあいだの垂直な距離）ではないからです。高さより長い辺になっています。',
        add: [seg(A, B, C.red, false, 3), seg(D, Cc, C.red, false, 3), lb(160, 100, '× 50cm²', 14, C.red, 'middle', true), ...cap('斜めの辺 5 は 高さではない', C.red)],
      },
      {
        note: '❓高さはどうやって作るのでしょう。→ AとDから、下底BCに垂線AH、DIを引きます。すると四角形AHIDは長方形になり、HI＝AD＝6cm になります。',
        add: fresh(...trap(), seg(A, H, C.blue, true, 2), seg(D, I, C.blue, true, 2), ...rt(H, A, Cc, 7), ...rt(I, D, B, 7), dot(H), dot(I), nm('H', H, 0, 11), nm('I', I, 0, 11), hi([A, H, I, D], C.blue, 0.2), tag('6', H, I, 22), ...cap('長方形 AHID ができる（HI＝AD＝6）', C.blue)),
      },
      {
        note: '❓残りの BH と IC はいくつでしょう。→ 下底14cmから、長方形の部分6cmを引くと、残りは 14−6＝8cm。等脚台形は左右対称なので、これが左右に4cmずつ分かれます。BH＝IC＝4cm です。',
        add: [tag('4', B, H, 22, C.red), tag('4', I, Cc, 22, C.red), ...cap2('14 − 6 ＝ 8　左右対称なので', 'BH ＝ IC ＝ 4 cm', C.red, FILL.red)],
      },
      {
        note: '❓高さAHはいくつでしょう。→ △ABHは直角三角形で、斜辺AB＝5、BH＝4。AH²＝5²−4²＝25−16＝9、AH＝3cm。3：4：5の直角三角形だと気づけば、すぐに3とわかります。',
        add: fresh(...trap(), seg(A, H, C.blue, true, 2), ...rt(H, A, Cc, 7), hi([A, B, H], C.green, 0.3), lb(116, 100, '3', 12, C.green, 'start', true), lb(80, 134, '4', 12, C.green, 'middle', true), lb(70, 90, '5', 12, C.ink, 'end', true), ...cap2('AH² ＝ 5² − 4² ＝ 25 − 16 ＝ 9', '高さ AH ＝ 3 cm', C.green, FILL.green)),
      },
      {
        note: '❓面積は？ → (1/2)×(6＋14)×3＝30cm²。長方形と2つの三角形に分けて確かめることもできます。長方形 6×3＝18、三角形は (1/2)×4×3＝6 が2つ。18＋6＋6＝30 で一致します。',
        add: fresh(...trap(), hi([A, H, I, D], C.blue, 0.3), hi([A, B, H], C.green, 0.3), hi([D, I, Cc], C.green, 0.3), lb(155, 100, '18', 13, C.blue, 'middle', true), lb(95, 104, '6', 12, C.green, 'middle', true), lb(215, 104, '6', 12, C.green, 'middle', true), ...cap2('(1/2)×(6＋14)×3 ＝ 30 cm²', '検算：18 ＋ 6 ＋ 6 ＝ 30', C.green, FILL.green)),
      },
      {
        note: '❓対角線から辺を求める問題はどうするのでしょう。たとえば対角線が13cm、一辺が5cmの長方形。→ 対角線は直角三角形の斜辺です。もう1辺は √(13²−5²)＝√144＝12cm。縦5、横12、対角線13は覚えておきたい組です。',
        add: fresh(shape(R, C.blue, FILL.blue), seg(R[0], R[2], C.red, false, 2.2), ...rt(R[3], R[0], R[2], 7), lb(160, 116, '12', 12, C.ink, 'middle', true), lb(78, 70, '5', 12, C.ink, 'end', true), lb(180, 62, '13', 12, C.red, 'middle', true), ...cap2('対角線13は 直角三角形の斜辺', 'もう1辺 ＝ √(13²−5²) ＝ 12 cm', C.red, FILL.red)),
      },
      {
        note: 'まとめです。台形は、上の頂点から下底に垂線を下ろして直角三角形を作り、高さを出します。等脚台形なら、下底の余りが左右に等分されます。斜めの辺は高さではありません。長方形の対角線は、縦と横を直角をはさむ2辺とする斜辺です。',
        add: fresh(...rows(['台形 → 垂線を下ろして 直角三角形を作る', '等脚台形 → 下底の余りは 左右に等分', '斜めの辺は 高さに使わない（高さは三平方で出す）', '長方形の対角線 ＝ √(縦²＋横²)'], { size: 12 }), ...cap('直角を作り出せば 三平方が使える', C.ink)),
      },
    ],
    '台形と、対角線が与えられた問題',
  );
})();

// ───────── s267 円の接線の長さと2つの円 ─────────
const f_koko_math_s267: DiagramFigure = (() => {
  const O: Pt = [90, 76], P: Pt = [190, 76], T: Pt = [126, 28], T2: Pt = [126, 124];
  const disc = (c: Pt, r: number, col: string = C.ink, fill: string = 'rgba(0,0,0,0)'): El => ci(c[0], c[1], r, undefined, col, fill);
  const fig = (): El[] => [disc(O, 60), seg(O, P, C.gray, true, 1.4), seg(P, T, C.ink, false, 2), seg(P, T2, C.ink, false, 2), seg(O, T, C.ink, false, 1.6), seg(O, T2, C.ink, false, 1.6), dot(O), dot(T), dot(T2), dot(P), ...names({ O, P, T, "T'": T2 }, { O: [-8, 4], P: [10, 0], T: [0, -9], "T'": [0, 12] })];
  // 内接円
  const A: Pt = [120, 27], B: Pt = [100, 125], Cc: Pt = [220, 125], I: Pt = [140, 92.33];
  const Dd: Pt = [140, 125];
  const Ee = at(A, Cc, 60 / 140), Ff = at(A, B, 60 / 100);
  const inc = (): El[] => [shape([A, B, Cc], C.ink, 'rgba(0,0,0,0)'), disc(I, 32.66, C.blue), dot(Dd), dot(Ee), dot(Ff), ...names({ A, B, C: Cc, D: Dd, E: Ee, F: Ff }, { A: [0, -9], B: [-9, 8], C: [9, 8], D: [0, 11], E: [10, -2], F: [-10, -2] })];
  // 2円
  const o1: Pt = [90, 86], o2: Pt = [160, 86];
  const T1: Pt = [111.4, 40.8], T22: Pt = [168.6, 67.9], Q: Pt = [102.8, 58.9];
  return show(
    [
      {
        note: '円の外の点Pからひもを張ると、ぴんと張った位置が接線です。半径3cm、中心OからPまで5cmのとき、接線の長さPT（Tは接点）を求めます。',
        add: [...fig(), lb(100, 112, '3', 11, C.ink, 'middle', true), lb(150, 88, '5', 11, C.gray, 'middle', true), lb(165, 46, '?', 12, C.red, 'middle', true), ...cap('半径3、OP＝5 のとき 接線 PT は？', C.ink)],
      },
      {
        note: '❓接点Tで、半径と接線はどう交わっているでしょう。→ 円の接線は、接点を通る半径に垂直です。だから ∠OTP＝90° で、△OTPは直角三角形になります。',
        add: [...rt(T, O, P, 8), hi([O, T, P], C.blue, 0.25), ...cap('∠OTP ＝ 90°（接線 ⟂ 半径）', C.red)],
      },
      {
        note: '❓どの辺が斜辺でしょう。→ 直角のT の向かい側のOPです。OP＝5が斜辺、OT＝3が1辺。だから PT²＝5²−3²＝25−9＝16、PT＝4cm。5²＋3² としてしまう（斜辺をまちがえる）のが典型のミスです。',
        add: [lb(100, 112, '3', 11, C.ink, 'middle', true), ...cap2('斜辺は OP（直角の向かい側）', 'PT ＝ √(5²−3²) ＝ √16 ＝ 4 cm', C.green, FILL.green)],
      },
      {
        note: '❓Pから引ける接線は何本あって、長さはどうなるでしょう。→ 2本あり、長さは等しくなります。△OTPと△OT\'Pは、斜辺OPが共通、OT＝OT\'（半径）で、直角三角形の合同条件を満たすからです。PT＝PT\'＝4cm。',
        add: fresh(...fig(), hi([O, T, P], C.blue, 0.2), hi([O, T2, P], C.green, 0.2), ...tick(P, T, 2), ...tick(P, T2, 2), ...tick(O, T, 1, C.blue), ...tick(O, T2, 1, C.blue), ...cap2('△OTP ≡ △OT\'P（斜辺と他の1辺が等しい）', 'PT ＝ PT\' ＝ 4 cm', C.red, FILL.red, 12)),
      },
      {
        note: '次は三角形の内接円です。△ABCの内接円が辺BC、CA、ABと点D、E、Fで接しているとき、頂点から接点までの2本の接線の長さは等しくなります。AE＝AF、BF＝BD、CD＝CE。AB＝5、BC＝6、CA＝7 とします。',
        add: fresh(...inc(), ...tick(A, Ff, 1, C.red), ...tick(A, Ee, 1, C.red), ...tick(B, Ff, 2, C.green), ...tick(B, Dd, 2, C.green), ...tick(Cc, Dd, 3, C.purple), ...tick(Cc, Ee, 3, C.purple), lb(60, 76, 'AB＝5', 11, C.ink, 'middle', true), lb(260, 76, 'CA＝7', 11, C.ink, 'middle', true), lb(160, 144, 'BC＝6', 11, C.ink, 'middle', true), ...cap('AE＝AF　BF＝BD　CD＝CE', C.main)),
      },
      {
        note: '❓長さを出すには？ AE＝AF＝x、BF＝BD＝y、CD＝CE＝z とおくと、x＋y＝5、y＋z＝6、z＋x＝7。3つを全部足すと 2(x＋y＋z)＝18、x＋y＋z＝9。だから z＝9−5＝4、x＝9−6＝3、y＝9−7＝2。検算：3＋2＝5、2＋4＝6、4＋3＝7 ✓',
        add: fresh(...rows(['x＋y＝5　y＋z＝6　z＋x＝7', '全部を足す：2(x＋y＋z)＝18　x＋y＋z＝9', 'z＝9−5＝4　x＝9−6＝3　y＝9−7＝2', '検算：3＋2＝5　2＋4＝6　4＋3＝7'], { size: 12 }), ...cap('AE＝AF＝3、BF＝BD＝2、CD＝CE＝4', C.green)),
      },
      {
        note: '2つの円の位置関係です。半径5cmと2cmの円が外側で接する（外接）とき、中心間の距離は半径の和 5＋2＝7cm。小さい円が大きい円の内側で接する（内接）ときは、半径の差 5−2＝3cm です。接点と2つの中心は、一直線に並びます。',
        add: fresh(disc([70, 76], 40, C.blue, 'rgba(2,132,199,0.1)'), disc([126, 76], 16, C.green, 'rgba(22,163,74,0.15)'), seg([70, 76], [126, 76], C.red, false, 2), dot([70, 76]), dot([126, 76]), lb(98, 22, '外接', 12, C.ink, 'middle', true), lb(70, 128, 'd ＝ 5＋2 ＝ 7', 11, C.red, 'middle', true), disc([240, 76], 40, C.blue, 'rgba(2,132,199,0.1)'), disc([264, 76], 16, C.green, 'rgba(22,163,74,0.15)'), seg([240, 76], [264, 76], C.red, false, 2), dot([240, 76]), dot([264, 76]), lb(240, 22, '内接', 12, C.ink, 'middle', true), lb(250, 128, 'd ＝ 5−2 ＝ 3', 11, C.red, 'middle', true), ...cap('外接は和、内接は差', C.red)),
      },
      {
        note: '❓共通外接線（2つの円の外側に接する線）の長さは？ 外接する半径5と2の円では、中心間 d＝7。小さい円の中心から大きい円の半径に垂線を下ろすと、直角三角形ができます。1辺は半径の差 5−2＝3、斜辺は d＝7、もう1辺が求める接線の長さ。√(7²−3²)＝√40＝2√10cm（約6.32cm）です。',
        add: fresh(disc(o1, 50, C.blue, 'rgba(2,132,199,0.1)'), disc(o2, 20, C.green, 'rgba(22,163,74,0.15)'), seg(T1, T22, C.red, false, 2.6), seg(o1, T1, C.ink, false, 1.5), seg(o2, T22, C.ink, false, 1.5), seg(o1, o2, C.gray, true, 1.5), seg(o2, Q, C.blue, true, 1.8), dot(o1), dot(o2), dot(Q), ...rt(Q, o1, o2, 6), lb(96, 58, '3', 11, C.blue, 'end', true), lb(136, 78, 'd＝7', 10, C.gray, 'middle', true), lb(250, 44, '接線の長さ ?', 11, C.red, 'middle', true), ...cap2('接線の長さ ＝ √(d²−(r₁−r₂)²)', '＝ √(49−9) ＝ √40 ＝ 2√10 cm', C.red, FILL.red, 12)),
      },
    ],
    '接線の長さ',
  );
})();

// ───────── s270 折り返し問題と三平方の定理 ─────────
const f_koko_math_s270: DiagramFigure = (() => {
  const A: Pt = [60, 20], B: Pt = [60, 128], Cc: Pt = [204, 128], D: Pt = [204, 20];
  const E: Pt = [91.5, 128], F: Pt = [172.5, 20];
  const M = mid(A, Cc);
  const rectF = (): El[] => [shape([A, B, Cc, D], C.ink, 'rgba(0,0,0,0)'), ...names({ A, B, C: Cc, D }, { A: [-8, -4], B: [-8, 8], C: [9, 8], D: [9, -4] })];
  return show(
    [
      {
        note: '紙を折ると、折る前と後で重なる部分は形も大きさも変わりません。長方形ABCDで AB＝6cm、BC＝8cm。頂点Aが頂点Cに重なるように折り、折り目が辺BCと交わる点をEとします。BEの長さを求めます。',
        add: [...rectF(), seg(E, F, C.red, true, 2), dot(E), dot(F), nm('E', E, 0, 11, C.red), nm('F', F, 0, -9, C.red), tag('6', B, A, 10), tag('8', B, Cc, 14), ...cap('A が C に重なるように折る　BE は？', C.red)],
      },
      {
        note: '❓折り返すと、どの長さが等しくなるのでしょう。→ 折り返しは合同な移動なので、Aが移ったCに対して、折り目上の点Eからの距離が等しくなります。AE＝CE。この「等しい」を使って方程式を作ります。',
        add: [seg(A, E, C.blue, false, 2.4), seg(E, Cc, C.blue, false, 2.4), seg(A, Cc, C.gray, true, 1.4), ...tick(A, E, 2, C.blue), ...tick(E, Cc, 2, C.blue), ...cap('折り返し → AE ＝ EC', C.blue)],
      },
      {
        note: '❓わからない長さは、どうおけばよいでしょう。→ 求めたい BE を x とおきます。BC＝8なので EC＝8−x。AE＝EC なので AE も 8−x です。',
        add: [lb(76, 140, 'x', 13, C.red, 'middle', true), lb(150, 140, '8 − x', 13, C.blue, 'middle', true), ...cap2('BE ＝ x とおく', 'EC ＝ 8 − x', C.main, FILL.warm)],
      },
      {
        note: '❓xを含む式をどうやって作るのでしょう。→ △ABEは、Bが直角の直角三角形です。AB＝6、BE＝x、斜辺AE。三平方の定理で AE²＝AB²＋BE²＝6²＋x²＝36＋x²。',
        add: fresh(...rectF(), hi([A, B, E], C.green, 0.3), ...rt(B, A, Cc, 8), seg(A, E, C.blue, false, 2.4), dot(E), nm('E', E, 0, 11, C.red), lb(70, 74, '6', 12, C.ink, 'end', true), lb(76, 140, 'x', 13, C.red, 'middle', true), ...cap2('△ABE は B が直角', 'AE² ＝ 6² ＋ x² ＝ 36 ＋ x²', C.green, FILL.green)),
      },
      {
        note: '❓2つの式をどうつなぐのでしょう。→ AE＝EC なので、AE²＝EC²。36＋x²＝(8−x)²。右辺を展開すると 64−16x＋x²。両辺のx²が消えて、1次式になります。',
        add: fresh(...rows(['AE ＝ EC　だから　AE² ＝ EC²', '36 ＋ x² ＝ (8 − x)²', '36 ＋ x² ＝ 64 − 16x ＋ x²', '両辺の x² が消える　36 ＝ 64 − 16x'], { size: 13 }), ...cap('x² が消えるので 1次式になる', C.main)),
      },
      {
        note: '❓解きましょう。→ 36＝64−16x。16x＝64−36＝28。x＝28÷16＝7/4＝1.75。BE＝1.75cm、EC＝8−1.75＝6.25cm。検算：AE²＝36＋1.75²＝36＋3.0625＝39.0625、EC²＝6.25²＝39.0625 で一致します。',
        add: fresh(...rectF(), seg(A, E, C.blue, false, 2.4), seg(E, Cc, C.blue, false, 2.4), seg(E, F, C.red, true, 1.6), dot(E), nm('E', E, 0, 11, C.red), lb(76, 140, '1.75', 11, C.red, 'middle', true), lb(150, 140, '6.25', 11, C.blue, 'middle', true), lb(120, 66, '6.25', 11, C.blue, 'end', true), ...cap2('16x ＝ 28　x ＝ 7/4 ＝ 1.75', 'BE ＝ 1.75 cm　EC ＝ 6.25 cm', C.green, FILL.green)),
      },
      {
        note: '❓「AがCに重なるのだから、折り目はBCの真ん中を通る」と考えて BE＝4cm としてよいでしょうか。→ いけません。折り目は、重なる2点AとCを結ぶ線分の垂直二等分線で、通るのはACの中点です。BCの中点ではありません。',
        add: fresh(...rectF(), seg(A, Cc, C.gray, true, 1.6), seg(E, F, C.red, false, 2), dot(M, C.red), nm('M', M, 8, -8, C.red), ...tick(A, M, 1, C.blue), ...tick(M, Cc, 1, C.blue), ...rt(M, Cc, F, 7), ci(132, 128, 3.5, undefined, C.gray, C.gray), lb(132, 142, 'BCの中点（通らない）', 9, C.gray, 'middle', true), ...cap('折り目は AC の垂直二等分線', C.red)),
      },
      {
        note: '❓折り目の長さEFはどう出すのでしょう。→ AF＝EC＝6.25（対称）なので、Fは頂点Dから見て 8−6.25＝1.75cm のところ。EとFの横のずれは 6.25−1.75＝4.5cm、縦は6cm。直角三角形で EF＝√(4.5²＋6²)＝√56.25＝7.5cm です（3：4：5の1.5倍）。',
        add: fresh(...rectF(), seg(E, F, C.red, false, 2.6), seg(E, [172.5, 128], C.gray, true, 1.8), seg([172.5, 128], F, C.gray, true, 1.8), ...rt([172.5, 128], E, F, 7), dot(E), dot(F), nm('E', E, 0, 11, C.red), nm('F', F, 0, -9, C.red), lb(132, 120, '4.5', 11, C.ink, 'middle', true), lb(182, 74, '6', 12, C.ink, 'start', true), lb(120, 58, '7.5', 12, C.red, 'end', true), ...cap2('EF ＝ √(4.5² ＋ 6²) ＝ √56.25', '＝ 7.5 cm', C.red, FILL.red)),
      },
    ],
    '折り返しの基本と方程式の立て方',
  );
})();

// ───────── s277 弦の性質：中心からの垂線は弦を二等分する ─────────
const f_koko_math_s277: DiagramFigure = (() => {
  const O: Pt = [160, 70];
  const Aa: Pt = [112, 106], Bb: Pt = [208, 106], M: Pt = [160, 106];
  const circle = (): El[] => [ci(O[0], O[1], 60, undefined, C.ink, 'rgba(0,0,0,0)'), dot(O), nm('O', O, 0, -9)];
  const chord = (): El[] => [seg(Aa, Bb, C.ink, false, 2), dot(Aa), dot(Bb), nm('A', Aa, -9, 6), nm('B', Bb, 9, 6)];
  // 長さのちがう弦
  const P1: Pt = [104.6, 93], Q1: Pt = [215.4, 93], R1: Pt = [137, 15], S1: Pt = [183, 15];
  // 3点を通る円
  const O3: Pt = [160, 70];
  const a3 = onC(O3, 55, 200), b3 = onC(O3, 55, 320), c3 = onC(O3, 55, 80);
  const m1 = mid(a3, b3), m2 = mid(b3, c3);
  return show(
    [
      {
        note: '問題です。半径10cmの円Oで、弦ABの長さは16cmです。中心Oから弦ABまでの距離を求めます。距離とは、中心から弦におろした垂線の長さのことです。',
        add: [...circle(), ...chord(), seg(O, M, C.red, true, 2), dot(M), nm('M', M, 0, 11), lb(160, 144, 'AB＝16、半径10', 11, C.ink, 'middle', true), ...cap('中心Oから弦ABまでの距離 OM は？', C.red)],
      },
      {
        note: '❓まず、OAとOBについて何が言えるでしょう。→ どちらも円の半径なので OA＝OB＝10cm。△OABは二等辺三角形です。',
        add: [seg(O, Aa, C.blue, false, 2), seg(O, Bb, C.blue, false, 2), ...tick(O, Aa, 1, C.blue), ...tick(O, Bb, 1, C.blue), hi([O, Aa, Bb], C.blue, 0.1), ...cap('OA ＝ OB（半径）→ 二等辺三角形', C.blue)],
      },
      {
        note: '❓垂線の足Mは、なぜ弦ABの真ん中になるのでしょう。→ △OAMと△OBMを比べます。斜辺OA＝OB（半径）、OMは共通、∠OMA＝∠OMB＝90°。直角三角形の斜辺と他の1辺が等しいので合同で、AM＝BM。MはABの中点です。',
        add: fresh(...circle(), ...chord(), seg(O, M, C.red, false, 2), seg(O, Aa, C.blue, false, 2), seg(O, Bb, C.blue, false, 2), hi([O, Aa, M], C.blue, 0.25), hi([O, Bb, M], C.green, 0.25), ...rt(M, O, Bb, 7), ...rt(M, O, Aa, 7), ...tick(O, Aa, 1, C.blue), ...tick(O, Bb, 1, C.blue), ...tick(Aa, M, 2), ...tick(M, Bb, 2), ...cap2('△OAM ≡ △OBM（斜辺と他の1辺）', 'AM ＝ BM（M は弦の中点）', C.main, FILL.warm)),
      },
      {
        note: '❓この事実で、何ができるのでしょう。→ 弦を半分にして直角三角形がつくれます。AM＝16÷2＝8cm。三平方の定理で使うのは、弦の全体ではなく「半分」です。',
        add: [lb(136, 118, '8', 12, C.red, 'middle', true), lb(184, 118, '8', 12, C.red, 'middle', true), lb(134, 82, '10', 12, C.blue, 'end', true), ...cap2('使うのは 弦の半分', 'AM ＝ 16 ÷ 2 ＝ 8 cm', C.red, FILL.red)],
      },
      {
        note: '❓OMを求めましょう。→ 直角三角形OMAで、斜辺OA＝10、AM＝8。OM²＝10²−8²＝100−64＝36。OM＝6cm。3：4：5の2倍（6：8：10）になっています。',
        add: [lb(166, 90, '6', 12, C.green, 'start', true), ...cap2('OM² ＝ 10² − 8² ＝ 100 − 64 ＝ 36', 'OM ＝ 6 cm', C.green, FILL.green)],
      },
      {
        note: '❓弦の全体16を、そのまま三平方に入れるとどうなるでしょう。→ √(10²−16²)＝√(100−256)＝√(−156)。根号の中が負になって、答えが出ません。これは「半分にする一手間」を忘れたサインです。図に8と書きこんでから計算します。',
        add: fresh(bx(10, 14, 300, 44, '× OM ＝ √(10² − 16²) ＝ √(−156)　答えが出ない', C.red, FILL.red, 13), bx(10, 70, 300, 44, '○ OM ＝ √(10² − 8²) ＝ √36 ＝ 6', C.green, FILL.green, 14), ...cap('弦は「半分」にしてから使う', C.red)),
      },
      {
        note: '❓弦の長さと、中心からの距離には、どんな関係があるのでしょう。半径13cmの円で、弦PQ＝24cm、弦RS＝10cm。中心からの距離は √(169−144)＝5cm と √(169−25)＝12cm。長い弦のほうが中心に近い。半径は同じなので、長い弦をとるには中心の近くを通るしかありません。',
        add: fresh(ci(O[0], O[1], 60, undefined, C.ink, 'rgba(0,0,0,0)'), dot(O), nm('O', O, 0, 11), seg(P1, Q1, C.blue, false, 2.4), seg(R1, S1, C.red, false, 2.4), seg(O, [160, 93], C.blue, true, 1.5), seg(O, [160, 15], C.red, true, 1.5), lb(236, 94, 'PQ＝24（距離5）', 10, C.blue, 'start', true), lb(196, 15, 'RS＝10（距離12）', 10, C.red, 'start', true), ...cap('長い弦ほど 中心に近い', C.main)),
      },
      {
        note: 'もうひとつ。弦の垂直二等分線は、必ず中心を通ります。だから、円周上の3点A、B、Cが与えられたら、弦ABの垂直二等分線と弦BCの垂直二等分線の交点が、その円の中心です。弧の一部だけから中心を求める作図問題は、この考え方を使います。',
        add: fresh(ci(O3[0], O3[1], 55, undefined, C.gray, 'rgba(0,0,0,0)'), seg(a3, b3), seg(b3, c3), seg(m1, [2 * O3[0] - m1[0], 2 * O3[1] - m1[1]], C.red, true, 1.6), seg(m2, [2 * O3[0] - m2[0], 2 * O3[1] - m2[1]], C.blue, true, 1.6), ...rt(m1, O3, a3, 6), ...rt(m2, O3, b3, 6), dot(a3), dot(b3), dot(c3), dot(O3, C.red), ...names({ A: a3, B: b3, C: c3 }, { A: [-9, 4], B: [9, 8], C: [0, -9] }), nm('O', O3, 8, -8, C.red), ...cap('2本の垂直二等分線の交点 ＝ 円の中心', C.main)),
      },
    ],
    'なぜ垂線の足が中点になるのか',
  );
})();

export const XF_KSE_FIGURES: Record<string, DiagramFigure> = {
  'xf_koko_math_s222': f_koko_math_s222,
  'xf_koko_math_s223': f_koko_math_s223,
  'xf_koko_math_s224': f_koko_math_s224,
  'xf_koko_math_s226': f_koko_math_s226,
  'xf_koko_math_s228': f_koko_math_s228,
  'xf_koko_math_s230': f_koko_math_s230,
  'xf_koko_math_s232': f_koko_math_s232,
  'xf_koko_math_s233': f_koko_math_s233,
  'xf_koko_math_s235': f_koko_math_s235,
  'xf_koko_math_s236': f_koko_math_s236,
  'xf_koko_math_s237': f_koko_math_s237,
  'xf_koko_math_s239': f_koko_math_s239,
  'xf_koko_math_s241': f_koko_math_s241,
  'xf_koko_math_s243': f_koko_math_s243,
  'xf_koko_math_s245': f_koko_math_s245,
  'xf_koko_math_s248': f_koko_math_s248,
  'xf_koko_math_s249': f_koko_math_s249,
  'xf_koko_math_s250': f_koko_math_s250,
  'xf_koko_math_s251': f_koko_math_s251,
  'xf_koko_math_s253': f_koko_math_s253,
  'xf_koko_math_s255': f_koko_math_s255,
  'xf_koko_math_s256': f_koko_math_s256,
  'xf_koko_math_s258': f_koko_math_s258,
  'xf_koko_math_s259': f_koko_math_s259,
  'xf_koko_math_s260': f_koko_math_s260,
  'xf_koko_math_s263': f_koko_math_s263,
  'xf_koko_math_s265': f_koko_math_s265,
  'xf_koko_math_s267': f_koko_math_s267,
  'xf_koko_math_s270': f_koko_math_s270,
  'xf_koko_math_s277': f_koko_math_s277,
};

export const XF_KSE_SECTIONS: Record<string, string> = {
  'koko_math_s222#0': 'xf_koko_math_s222',
  'koko_math_s223#0': 'xf_koko_math_s223',
  'koko_math_s224#0': 'xf_koko_math_s224',
  'koko_math_s226#0': 'xf_koko_math_s226',
  'koko_math_s228#1': 'xf_koko_math_s228',
  'koko_math_s230#0': 'xf_koko_math_s230',
  'koko_math_s232#0': 'xf_koko_math_s232',
  'koko_math_s233#0': 'xf_koko_math_s233',
  'koko_math_s235#0': 'xf_koko_math_s235',
  'koko_math_s236#0': 'xf_koko_math_s236',
  'koko_math_s237#0': 'xf_koko_math_s237',
  'koko_math_s239#0': 'xf_koko_math_s239',
  'koko_math_s241#0': 'xf_koko_math_s241',
  'koko_math_s243#0': 'xf_koko_math_s243',
  'koko_math_s245#0': 'xf_koko_math_s245',
  'koko_math_s248#0': 'xf_koko_math_s248',
  'koko_math_s249#0': 'xf_koko_math_s249',
  'koko_math_s250#0': 'xf_koko_math_s250',
  'koko_math_s251#0': 'xf_koko_math_s251',
  'koko_math_s253#0': 'xf_koko_math_s253',
  'koko_math_s255#0': 'xf_koko_math_s255',
  'koko_math_s256#1': 'xf_koko_math_s256',
  'koko_math_s258#0': 'xf_koko_math_s258',
  'koko_math_s259#0': 'xf_koko_math_s259',
  'koko_math_s260#0': 'xf_koko_math_s260',
  'koko_math_s263#1': 'xf_koko_math_s263',
  'koko_math_s265#1': 'xf_koko_math_s265',
  'koko_math_s267#0': 'xf_koko_math_s267',
  'koko_math_s270#0': 'xf_koko_math_s270',
  'koko_math_s277#0': 'xf_koko_math_s277',
};
