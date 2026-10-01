// 高校受験 数学（中2〜中3）30 単元の「動く図解スライド」（図のなかった単元に 1 つずつ）。
// 「なぜ？」の連鎖で、7枚以上。上に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

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
        add: fresh(lb(80, 14, '△ADE', 12, C.blue, 'middle', true), lb(240, 14, '△ACB', 12, C.green, 'middle', true), lb(14, 42, 'AD', 11, C.ink, 'start', true), ...bar(40, 30, [['5', 50, C.blue]], 22), lb(14, 74, 'AE', 11, C.ink, 'start', true), ...bar(40, 62, [['4', 40, C.blue]], 22), lb(174, 42, 'AC', 11, C.ink, 'start', true), ...bar(200, 30, [['10', 100, C.green]], 22), lb(174, 74, 'AB', 11, C.ink, 'start', true), ...bar(200, 62, [['8', 80, C.green]], 22), ar(98, 41, 196, 41, C.main), ar(98, 73, 196, 73, C.main), lb(160, 112, '長い辺は長い辺と、短い辺は短い辺と対応', 11, C.ink, 'middle', true), ...cap('AD↔AC、AE↔AB（どちらも 1：2）', C.main)),
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
        add: fresh(...trap(), hi([pp, a, d], C.blue, 0.3), hi([pp, a, b], C.red, 0.25), seg(a, [a[0] + 20, 125], C.gray, true), ...cap2('高さ共通 → 面積比 ＝ 底辺の比', '△PAD：△PAB ＝ DP：PB ＝ 3：5', C.main, FILL.warm, 12)),
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
};
