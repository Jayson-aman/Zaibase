// 入試傾向問題（中学受験・算数・理科）の「動く図解スライド」第09批。
// 「❓なぜ？→答え→❓では、なぜ？」の連鎖で、根っこまでたどる。座標は 320×240、図は上半分、式やひとことは下の帯。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, flow, cover } from './diagram-kit';

type E = DiagramElement;
type P = [number, number];

// ── 共通の小道具 ──
const W = (...pts: P[]): E[] => pts.slice(1).map((p, i) => ln(pts[i][0], pts[i][1], p[0], p[1], C.gray, false, 2));
const bulb = (x: number, y: number, t: string, fill: string = FILL.yellow, color: string = C.main): E => ci(x, y, 11, t, color, fill, 10);
const batt = (x: number, y: number): E => bx(x - 18, y - 14, 36, 28, '電池', C.blue, FILL.blue, 11);
const node = (x: number, y: number): E => ci(x, y, 2.5, undefined, C.gray, C.gray);
const relabel = (x: number, y: number, w: number, text: string, color: string = C.ink, size = 11): E[] => [cover(x - w / 2, y - 8, w, 16), lb(x, y, text, size, color, 'middle', true)];

type Mode = 'single' | 'series' | 'parallel';
/** 電池1個の回路。ox,oy は左上のずらし。fills は豆電球の色。 */
const ckt = (mode: Mode, ox: number, oy = 0, texts: string[] = ['ア', 'イ'], fills: string[] = [FILL.yellow, FILL.yellow]): E[] => {
  const p = (x: number, y: number): P => [ox + x, oy + y];
  if (mode === 'single') {
    return [
      ...W(p(0, 56), p(0, 30), p(59, 30)), ...W(p(81, 30), p(120, 30), p(120, 112), p(0, 112), p(0, 84)),
      batt(ox, oy + 70), bulb(ox + 70, oy + 30, texts[0], fills[0]),
    ];
  }
  if (mode === 'series') {
    return [
      ...W(p(0, 56), p(0, 30), p(27, 30)), ...W(p(49, 30), p(71, 30)), ...W(p(93, 30), p(120, 30), p(120, 112), p(0, 112), p(0, 84)),
      batt(ox, oy + 70), bulb(ox + 38, oy + 30, texts[0], fills[0]), bulb(ox + 82, oy + 30, texts[1], fills[1]),
    ];
  }
  return [
    ...W(p(0, 56), p(0, 30), p(64, 30)), ...W(p(86, 30), p(120, 30), p(120, 112), p(0, 112), p(0, 84)),
    ...W(p(45, 30), p(45, 71), p(64, 71)), ...W(p(86, 71), p(120, 71)),
    node(ox + 45, oy + 30), node(ox + 120, oy + 71),
    batt(ox, oy + 70), bulb(ox + 75, oy + 30, texts[0], fills[0]), bulb(ox + 75, oy + 71, texts[1], fills[1]),
  ];
};
const DIM = '#E5E1DA';

// ── 月の形（小さな丸） ──
type Phase = 'new' | 'right' | 'full' | 'left';
const moonShape = (x: number, y: number, r: number, k: Phase): E[] => {
  if (k === 'full') return [ci(x, y, r, undefined, C.main, FILL.yellow)];
  const base = ci(x, y, r, undefined, C.gray, '#8A8178');
  if (k === 'new') return [base];
  return k === 'right' ? [base, sc(x, y, r, 270, 90, C.main, FILL.yellow)] : [base, sc(x, y, r, 90, 270, C.main, FILL.yellow)];
};

// ── 直列と並列のくらべ（電池の数は同じ） ──
function seriesVsParallel(opening: string, askedNote: string): ReturnType<typeof show> {
  return show([
    {
      note: opening,
      add: [...ckt('series', 28, 6), ...ckt('parallel', 178, 6), lb(88, 10, '直列', 12, C.blue, 'middle', true), lb(238, 10, '並列', 12, C.blue, 'middle', true),
        ...band(150, lb(160, 175, '電池の数は同じ。どちらの豆電球が明るい？', 12, C.ink, 'middle', true))],
    },
    {
      note: '❓まず、電池1個に豆電球1個だけのとき、電流はどれくらい？→この大きさを「1」と決めておきます。❓豆電球は電流にとって何？→流れを通りにくくする「抵抗（ていこう）」のはたらきをします。豆電球が道の中にふえるほど、通りにくくなります。',
      add: fresh(...ckt('single', 100, 6), lb(170, 14, '電流 1', 13, C.green, 'middle', true), ...band(150, lb(160, 175, '電池1個＋豆電球1個のときの電流を「1」とする', 12, C.ink, 'middle', true))),
    },
    {
      note: '❓直列（ちょくれつ）につなぐと？→電流の通り道が1本で、2個の豆電球を順に通りぬけなければなりません。通りにくさが2個ぶんになるので、電流は半分の「1/2」になります。❓直列の電流はどこも同じ？→道が1本なので、どちらの豆電球にも同じ1/2が流れます。',
      add: fresh(...ckt('series', 100, 6), lb(138, 58, '1/2', 12, C.red, 'middle', true), lb(182, 58, '1/2', 12, C.red, 'middle', true), ...band(150, lb(160, 175, '直列：通り道は1本 → 電流は 1/2', 13, C.red, 'middle', true), lb(160, 205, '（2個ぶん通りにくい）', 11, C.gray))),
    },
    {
      note: '❓並列（へいれつ）につなぐと？→道が2本に分かれ、どちらの豆電球も電池と直接つながっています。それぞれ、豆電球1個だけのときと同じ条件なので、どちらにも「1」ずつ流れます。電池からは 1＋1＝2 の電流が出ていきます。',
      add: fresh(...ckt('parallel', 100, 6), lb(175, 58, '1', 13, C.green, 'middle', true), lb(175, 98, '1', 13, C.green, 'middle', true), ...band(150, lb(160, 175, '並列：それぞれに 1 ずつ流れる', 13, C.green, 'middle', true), lb(160, 205, '電池から出る電流は 1＋1＝2', 11, C.gray))),
    },
    {
      note: '❓明るさは何で決まる？→豆電球を流れる電流が大きいほど、明るく光ります。それぞれの豆電球の電流を、棒の長さでくらべてみましょう。',
      add: fresh(bx(40, 30, 60, 26, '直列 1/2', C.red, FILL.red, 12), bx(40, 70, 120, 26, '並列 1', C.green, FILL.green, 12), lb(200, 43, '← 短い（暗い）', 11, C.red, 'start'), lb(200, 83, '← 長い（明るい）', 11, C.green, 'start'),
        ...band(150, lb(160, 175, '棒が長いほど、電流が大きい', 12, C.ink, 'middle', true))),
    },
    {
      note: '❓だから答えは？→1個の豆電球を流れる電流は、直列が1/2、並列が1。並列のほうが電流が大きいので、豆電球は並列のほうが明るく光ります。',
      add: fresh(...ckt('series', 28, 6, ['ア', 'イ'], [FILL.warm, FILL.warm]), ...ckt('parallel', 178, 6, ['ア', 'イ'], [FILL.yellow, FILL.yellow]), lb(88, 10, '直列（暗い）', 11, C.red, 'middle', true), lb(238, 10, '並列（明るい）', 11, C.green, 'middle', true),
        ...band(150, bx(40, 162, 240, 34, askedNote, C.green, FILL.green, 13))),
    },
    {
      note: '❓では、並列のほうがいつも得？→並列のときは電池から出る電流が2、直列は1/2です。電池は電流がたくさん流れるほど早く使い切るので、並列のほうが明るい代わりに、電池は早くなくなります。',
      add: band(150, bx(20, 160, 130, 34, '直列：電池から 1/2', C.red, FILL.red, 12), bx(170, 160, 130, 34, '並列：電池から 2', C.green, FILL.green, 12), lb(160, 216, '明るい並列は、電池の持ちが短い', 11, C.gray)),
    },
  ], '電池1個の直列つなぎと並列つなぎ：電流の大きさでくらべる');
}

// ── 豆電球をもう1個、並列に足す ──
function addParallel(opening: string, who: string): ReturnType<typeof show> {
  return show([
    {
      note: opening,
      add: [...ckt('single', 100, 6), ...band(150, lb(160, 170, `${who}の豆電球の明るさは？`, 12, C.ink, 'middle', true), lb(160, 196, '（電池1個・豆電球1個 → 同じ豆電球を並列に1個ふやす）', 10, C.gray))],
    },
    {
      note: '❓はじめに、電池1個＋豆電球1個のとき、電流はどれくらい？→この大きさを「1」と決めます。明るさは、豆電球を流れる電流の大きさで決まります。',
      add: [lb(170, 14, '電流 1', 13, C.green, 'middle', true), ...band(150, lb(160, 175, 'はじめの電流を「1」とする', 12, C.ink, 'middle', true))],
    },
    {
      note: '❓同じ豆電球を並列につなぐと、道はどうなる？→下に分かれ道が1本ふえて、新しい豆電球ウも電池とつながります。❓では、はじめの豆電球アのつながり方は変わった？→いいえ。アは前と同じように、電池と直接つながったままです。',
      add: fresh(...ckt('parallel', 100, 6, ['ア', 'ウ']), ...band(150, lb(160, 170, 'アは電池と直接つながったまま', 12, C.blue, 'middle', true), lb(160, 196, '新しい道（ウ）がふえただけ', 11, C.gray))),
    },
    {
      note: '❓だから、アを流れる電流は？→アの条件（電池1個・豆電球1個だけの道）は、前と何も変わっていません。だから、アを流れる電流は前と同じ「1」のままです。',
      add: [lb(175, 58, '1', 13, C.green, 'middle', true), ...band(150, lb(160, 175, 'アの電流は 1 のまま', 13, C.green, 'middle', true))],
    },
    {
      note: '❓新しいウには？→ウも同じ条件なので「1」流れます。電池からは 1＋1＝2 の電流が出ていきます。ふえたのは、電池が出す電流の合計だけです。',
      add: [lb(175, 98, '1', 13, C.green, 'middle', true), ...band(150, lb(160, 170, 'ウの電流も 1', 12, C.green, 'middle', true), lb(160, 196, '電池から出る電流 ＝ 1＋1 ＝ 2', 12, C.gray))],
    },
    {
      note: '❓明るさは？→アの電流は1のままで変わらないので、アの明るさは変わりません。答えは「変わらない」です。',
      add: band(150, bx(50, 162, 220, 34, 'アの電流 1 → 1（変わらない）', C.green, FILL.green, 14), lb(160, 216, '→ 明るさは変わらない', 12, C.green, 'middle', true)),
    },
    {
      note: '❓もし、豆電球をもう1個「直列」につないだら？→電流の通り道が1本のまま、通りにくさが2個ぶんになるので、電流は1/2に減って暗くなります。「暗くなる」になるのは直列のときです。',
      add: fresh(...ckt('series', 100, 6), lb(138, 58, '1/2', 12, C.red, 'middle', true), lb(182, 58, '1/2', 12, C.red, 'middle', true), ...band(150, lb(160, 175, '直列にふやす → 電流 1/2 → 暗くなる', 12, C.red, 'middle', true), lb(160, 205, '並列にふやす → 電流 1 のまま', 12, C.green, 'middle', true))),
    },
  ], '豆電球を並列にふやしても、はじめの豆電球の電流は変わらない');
}

// ── 長方形の対角線で分けた三角形 ──
function rectDiag(h: number, w: number): ReturnType<typeof show> {
  const cell = 144 / w;
  const x0 = 88, y0 = 22, x1 = 232, y1 = 118;
  const grid: E[] = [];
  for (let i = 1; i < w; i++) grid.push(ln(x0 + i * cell, y0, x0 + i * cell, y1, DIM, false, 1));
  for (let j = 1; j < h; j++) grid.push(ln(x0, y0 + j * cell, x1, y0 + j * cell, DIM, false, 1));
  const rect = pg([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], C.main, FILL.warm);
  const dims = [lb(160, 134, `横 ${w}cm`, 11, C.ink, 'middle', true), lb(80, 70, `縦 ${h}cm`, 11, C.ink, 'end', true)];
  const area = w * h;
  return show([
    {
      note: `縦${h}cm、横${w}cmの長方形に、対角線（たいかくせん）を1本引きます。❓できた三角形1つの面積は何cm²でしょう。`,
      add: [rect, ln(x0, y0, x1, y1, C.red, true, 2), ...dims, ...band(150, lb(160, 178, '三角形1つの面積 ＝ ？cm²', 13, C.ink, 'middle', true))],
    },
    {
      note: `❓まず、長方形の面積は？→1cm²の正方形が、横に${w}個ずつ、縦に${h}列ならびます。だから ${w}×${h}＝${area}cm²です。❓なぜかけ算？→同じ数ずつのまとまりが${h}列ぶんあるので、かけ算でまとめて数えられるからです。`,
      add: [...grid, ...band(150, lb(160, 178, `${w} × ${h} ＝ ${area}cm²（長方形）`, 14, C.main, 'middle', true))],
    },
    {
      note: '❓対角線で分けた2つの三角形は、同じ大きさ？→同じです。1つの三角形を、長方形の真ん中を中心に半回転（180度回す）させると、もう1つの三角形にぴったり重なります。だから形も大きさもまったく同じです。',
      add: [pg([[x0, y0], [x0, y1], [x1, y1]], C.blue, 'rgba(2,132,199,0.25)'), pg([[x0, y0], [x1, y0], [x1, y1]], C.red, 'rgba(225,29,72,0.22)'), ci(160, 70, 3, undefined, C.ink, C.ink),
        ...band(150, lb(160, 175, '2つは半回転でぴったり重なる', 13, C.ink, 'middle', true), lb(160, 205, '（同じ形・同じ大きさ）', 11, C.gray))],
    },
    {
      note: '❓では、三角形1つは長方形のどれだけ？→長方形を、同じ大きさの2つに分けたうちの1つです。だから長方形の半分（÷2）にあたります。',
      add: band(150, bx(40, 162, 240, 34, '三角形1つ ＝ 長方形 ÷ 2', C.purple, FILL.purple, 15)),
    },
    {
      note: `❓計算は？→長方形の面積${area}cm²を2つに分けるので ${area}÷2＝${area / 2}cm²です。`,
      add: band(150, bx(50, 162, 220, 34, `${area} ÷ 2 ＝ ${area / 2}cm²`, C.green, FILL.green, 16)),
    },
    {
      note: `❓別の方法でもたしかめよう→三角形の面積は「底辺×高さ÷2」です。底辺は${w}cm、高さは縦の辺の${h}cmなので ${w}×${h}÷2＝${area / 2}cm²。同じ答えになりました。❓なぜ÷2？→いま見たとおり、三角形は「底辺×高さ」の長方形の半分だからです。`,
      add: band(150, lb(160, 170, `底辺 ${w}cm × 高さ ${h}cm ÷ 2`, 13, C.blue, 'middle', true), lb(160, 198, `＝ ${area / 2}cm²（同じ答え）`, 14, C.green, 'middle', true)),
    },
    {
      note: `❓まちがいやすい点は？→${area}cm²（長方形の面積）をそのまま答えたり、三角形を2つぶん足したりしないこと。聞かれているのは三角形「1つ」です。答えは${area / 2}cm²（${area / 2}平方cm）。`,
      add: band(150, bx(20, 162, 130, 34, `×${area}cm²（長方形）`, C.red, FILL.red, 12), bx(170, 162, 130, 34, `○${area / 2}cm²`, C.green, FILL.green, 15)),
    },
  ], `長方形の対角線：三角形は長方形の半分（${w}×${h}÷2＝${area / 2}cm²）`);
}

// ── 三角形の角の和 ──
function tri180(a: number, b: number): ReturnType<typeof show> {
  const Bp: P = [90, 136], Cp: P = [226, 136];
  const cot = (d: number) => 1 / Math.tan((d * Math.PI) / 180);
  const h = (Cp[0] - Bp[0]) / (cot(a) + cot(b));
  const Ap: P = [Bp[0] + h * cot(a), Bp[1] - h];
  const r = 26;
  const third = 180 - a - b;
  const tri = (): E[] => [
    pg([Ap, Bp, Cp], C.main, FILL.warm),
    sc(Bp[0], Bp[1], r, 0, a, C.red, FILL.red), sc(Cp[0], Cp[1], r, 180 - b, 180, C.blue, FILL.blue), sc(Ap[0], Ap[1], r, 180 + a, 360 - b, C.green, FILL.green),
    lb(Bp[0] + 38, Bp[1] - 9, `${a}°`, 11, C.red, 'middle', true), lb(Cp[0] - 38, Cp[1] - 9, `${b}°`, 11, C.blue, 'middle', true),
  ];
  const P0: P = [160, 104];
  return show([
    {
      note: `三角形の2つの角が${a}度と${b}度です。❓残りの1つの角は何度でしょう。`,
      add: [...tri(), lb(Ap[0], Ap[1] + 44, '？°', 12, C.green, 'middle', true), ...band(150, lb(160, 178, '残りの角 ＝ ？度', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓三角形の3つの角を足すと何度？→180度です。たしかめ方：3つの角を切りとり、頂点（かど）をそろえて並べると、ぴったり一直線になります。',
      add: fresh(ln(30, P0[1], 290, P0[1], C.ink, false, 2), sc(P0[0], P0[1], 56, 0, a, C.red, FILL.red), sc(P0[0], P0[1], 56, a, a + b, C.blue, FILL.blue), sc(P0[0], P0[1], 56, a + b, 180, C.green, FILL.green),
        lb(P0[0] + 38 * Math.cos((a / 2) * Math.PI / 180), P0[1] - 38 * Math.sin((a / 2) * Math.PI / 180), `${a}°`, 11, C.red, 'middle', true),
        lb(P0[0] + 38 * Math.cos((a + b / 2) * Math.PI / 180), P0[1] - 38 * Math.sin((a + b / 2) * Math.PI / 180), `${b}°`, 11, C.blue, 'middle', true),
        lb(P0[0] + 38 * Math.cos(((a + b + 180) / 2) * Math.PI / 180), P0[1] - 38 * Math.sin(((a + b + 180) / 2) * Math.PI / 180), '？°', 11, C.green, 'middle', true),
        ...band(150, lb(160, 178, '3つの角を並べると、一直線になる', 13, C.ink, 'middle', true))),
    },
    {
      note: '❓なぜ、一直線は180度なの？→ぐるっと1回転すると360度です。一直線は、その半分の半回転だから、360÷2＝180度です。',
      add: [sc(P0[0], P0[1], 56, 180, 360, C.gray, FILL.gray), lb(160, 128, '下の半分も同じ', 10, C.gray), ...band(150, lb(160, 170, '1回転 360° の半分 ＝ 一直線', 13, C.ink, 'middle', true), lb(160, 198, '360 ÷ 2 ＝ 180°', 14, C.main, 'middle', true))],
    },
    {
      note: `❓では、わかっている2つの角を合わせると？→${a}度と${b}度を足して ${a}＋${b}＝${a + b}度です。`,
      add: [...fresh(...tri()), lb(Ap[0], Ap[1] + 44, '？°', 12, C.green, 'middle', true), ...band(150, lb(160, 178, `${a} ＋ ${b} ＝ ${a + b}°`, 15, C.ink, 'middle', true))],
    },
    {
      note: `❓残りの角は？→3つの角の合計が180度なので、残りは 180−${a + b}＝${third}度です。`,
      add: [...relabel(Ap[0], Ap[1] + 44, 34, `${third}°`, C.green, 13), ...band(150, bx(50, 162, 220, 34, `180 − ${a + b} ＝ ${third}°`, C.green, FILL.green, 16))],
    },
    {
      note: `❓確かめ→3つの角を足してみると ${a}＋${b}＋${third}＝180度。ちょうど180度になるので、合っています。`,
      add: band(150, lb(160, 170, `${a} ＋ ${b} ＋ ${third} ＝ 180°`, 16, C.green, 'middle', true), lb(160, 200, '3つの合計が180度 ✓', 12, C.gray)),
    },
    {
      note: `❓まちがいやすい点は？→${a + b}度（2つの角の合計）を答えにしてしまうことです。聞かれているのは「残りの1つの角」です。答えは${third}度。`,
      add: band(150, bx(20, 162, 130, 34, `×${a + b}°（2つの合計）`, C.red, FILL.red, 12), bx(170, 162, 130, 34, `○${third}°`, C.green, FILL.green, 16)),
    },
  ], `三角形の角の和は180度：180−(${a}+${b})＝${third}度`);
}

// ── つるかめ算（ぜんぶ安いほうと考える） ──
function tsuru(o: { n: number; cheap: string; dear: string; pc: number; pd: number; total: number; unit: string; askCheap: boolean; intro: string }): ReturnType<typeof show> {
  const { n, cheap, dear, pc, pd, total, unit, askCheap } = o;
  const assumed = n * pc;
  const diff = total - assumed;
  const per = pd - pc;
  const swapped = diff / per;
  const cheapCount = n - swapped;
  const gap = Math.floor(290 / (n - 1));
  const rr = Math.round(gap * 0.4);
  const x0 = (320 - gap * (n - 1)) / 2;
  const row = (nDear: number, unknown = false): E[] => Array.from({ length: n }, (_, i) => {
    const isDear = i < nDear;
    if (unknown) return ci(x0 + i * gap, 62, rr, undefined, C.gray, FILL.gray);
    return ci(x0 + i * gap, 62, rr, undefined, isDear ? C.red : C.blue, isDear ? FILL.red : FILL.blue);
  });
  return show([
    {
      note: o.intro,
      add: [...row(0, true), lb(160, 98, `どちらが何${unit}か、まだわからない（全部で${n}${unit}）`, 10, C.gray), ...band(150, lb(160, 172, `${cheap}：1${unit}${pc}円　${dear}：1${unit}${pd}円`, 12, C.ink, 'middle', true), lb(160, 200, `代金の合計 ${total}円`, 13, C.ink, 'middle', true))],
    },
    {
      note: `❓まず、もし${n}${unit}ぜんぶ${cheap}だったら？→${pc}×${n}＝${assumed}円です。❓なぜ、安いほうにそろえるの？→「ぜんぶ同じ」と仮に決めると、実際の代金との差だけが、${dear}が混ざったぶんだとわかるからです。`,
      add: [...row(0), ...band(150, lb(160, 178, `ぜんぶ${cheap}なら ${pc}×${n} ＝ ${assumed}円`, 13, C.blue, 'middle', true))],
    },
    {
      note: `❓実際の代金との差は？→実際は${total}円なので、${total}−${assumed}＝${diff}円、足りません。この${diff}円が、${dear}が混ざっているぶんです。`,
      add: band(150, bx(20, 160, 130, 34, `実際 ${total}円`, C.main, FILL.warm, 13), bx(170, 160, 130, 34, `仮 ${assumed}円`, C.blue, FILL.blue, 13), lb(160, 216, `差 ${total} − ${assumed} ＝ ${diff}円`, 13, C.red, 'middle', true)),
    },
    {
      note: `❓${cheap}を1${unit}、${dear}にとりかえると代金はどう変わる？→${pd}−${pc}＝${per}円ふえます。❓なぜ？→とりかえるたびに、ねだんの差の${per}円ぶんだけ合計が上がるからです。`,
      add: [ci(x0, 62, rr, undefined, C.red, FILL.red), ar(x0, 34, x0, 52, C.red), lb(x0 + 12, 36, '1つだけ とりかえる', 10, C.red, 'start', true), ...band(150, lb(160, 172, `1${unit}とりかえる ＝ ${pd} − ${pc} ＝ ${per}円アップ`, 13, C.red, 'middle', true), lb(160, 200, `（${cheap}→${dear}）`, 11, C.gray))],
    },
    {
      note: `❓差の${diff}円をうめるには、何${unit}とりかえればいい？→1${unit}で${per}円ふえるので、${diff}÷${per}＝${swapped}${unit}です。つまり、${dear}は${swapped}${unit}です。`,
      add: [...fresh(...row(swapped)), ...band(150, lb(160, 172, `${diff} ÷ ${per} ＝ ${swapped}${unit}が${dear}`, 14, C.red, 'middle', true), lb(160, 200, `（赤 ${swapped}${unit}・青 ${cheapCount}${unit}）`, 11, C.gray))],
    },
    {
      note: askCheap
        ? `❓聞かれているのは${cheap}です。全部で${n}${unit}、${dear}が${swapped}${unit}なので、${cheap}は ${n}−${swapped}＝${cheapCount}${unit}です。`
        : `❓聞かれているのは${dear}です。とりかえた${swapped}${unit}が、そのまま${dear}の数です。答えは${swapped}${unit}。`,
      add: band(150, bx(40, 162, 240, 34, askCheap ? `${cheap}：${n} − ${swapped} ＝ ${cheapCount}${unit}` : `${dear}：${swapped}${unit}`, C.green, FILL.green, 15), lb(160, 216, askCheap ? `（${dear}は${swapped}${unit}）` : `（${cheap}は${cheapCount}${unit}）`, 11, C.gray)),
    },
    {
      note: `❓確かめ→${cheap}${cheapCount}${unit}で ${pc}×${cheapCount}＝${pc * cheapCount}円、${dear}${swapped}${unit}で ${pd}×${swapped}＝${pd * swapped}円。合わせて ${pc * cheapCount}＋${pd * swapped}＝${total}円で、問題と合います。`,
      add: band(150, lb(160, 168, `${pc}×${cheapCount} ＝ ${pc * cheapCount}円`, 13, C.blue, 'middle', true), lb(160, 192, `${pd}×${swapped} ＝ ${pd * swapped}円`, 13, C.red, 'middle', true), lb(160, 218, `${pc * cheapCount} ＋ ${pd * swapped} ＝ ${total}円 ✓`, 13, C.green, 'middle', true)),
    },
  ], `つるかめ算：ぜんぶ${cheap}と考えて、差を${per}円で割る`);
}

// ── 10こに分けた棒（割引の説明用） ──
const bar10 = (y: number, redFrom: number, text?: string): E[] =>
  Array.from({ length: 10 }, (_, i) => bx(40 + i * 24, y, 24, 24, text, i >= redFrom ? C.red : C.blue, i >= redFrom ? FILL.red : FILL.blue, 9));

const figures: Record<string, Figure> = {};

// ════════════════ 理科：電気 ════════════════
figures['kankan_top_rika_081'] = (() => {
  const top = 34, mid = 77, bot = 124;
  const circuit = (): E[] => [
    ...W([40, 72], [40, top], [77, top]), ...W([103, top], [170, top]), ...W([170, top], [203, top]), ...W([229, top], [262, top]),
    ...W([170, top], [170, mid], [203, mid]), ...W([229, mid], [262, mid]), ...W([262, top], [262, bot], [40, bot], [40, 100]),
    node(170, top), node(262, mid),
    batt(40, 86), bulb(90, top, 'A', FILL.yellow), bulb(216, top, 'B', FILL.yellow), bulb(216, mid, 'C', FILL.yellow),
  ];
  return show([
    {
      note: '豆電球Aを流れる電流は0.6Aです。Aの先は2本に分かれて、同じ豆電球B・Cを並列（へいれつ）につないでいます。❓B・Cにそれぞれ何A流れるでしょう。',
      add: [...circuit(), lb(90, 13, '0.6A', 11, C.red, 'middle', true), lb(216, 13, '？A', 11, C.blue, 'middle', true), lb(216, 100, '？A', 11, C.blue, 'middle', true), ...band(150, lb(160, 178, 'B と C は同じ豆電球（抵抗が等しい）', 12, C.ink, 'middle', true))],
    },
    {
      note: '❓電流は、分かれ道で増えたり減ったりするの？→しません。水路が2本に分かれても、流れる水の量の合計は変わらないのと同じで、電流も「分かれたあとの合計」は「分かれる前」と同じです。',
      add: [ci(170, top, 7, undefined, C.red, 'none'), ar(120, top - 12, 150, top - 12, C.red), ...band(150, lb(160, 170, '分かれる前の電流 ＝ 分かれたあとの合計', 12, C.red, 'middle', true), lb(160, 198, '（電流は途中で消えない）', 11, C.gray))],
    },
    {
      note: '❓つまりB・Cの電流を足すと？→Aを流れる電流と同じ0.6Aです。B＋C＝0.6A。ただし、これだけでは「BとCにどう分けるか」はまだ決まりません。',
      add: band(150, bx(30, 162, 70, 30, 'B', C.blue, FILL.blue, 14), lb(112, 179, '＋', 16), bx(125, 162, 70, 30, 'C', C.blue, FILL.blue, 14), lb(207, 179, '＝', 16), bx(220, 162, 70, 30, '0.6A', C.red, FILL.red, 14), lb(160, 216, '分け方は、次の❓で決まる', 11, C.gray)),
    },
    {
      note: '❓なぜBとCは同じ量に分かれる？→B・Cは同じ抵抗（電流の通りにくさ）の豆電球で、同じ分かれ道から同じ合流点までをつないでいます。電池が押す力も、通りにくさも、まったく同じ条件なので、電流も同じになります。',
      add: [bulb(216, top, 'B', FILL.red, C.red), bulb(216, mid, 'C', FILL.red, C.red), ...band(150, lb(160, 170, 'B・Cは、条件がまったく同じ', 13, C.red, 'middle', true), lb(160, 198, '→ 流れる電流も同じ', 12, C.gray))],
    },
    {
      note: '❓では、いくらずつ？→0.6Aを同じ量に2等分するので、0.6÷2＝0.3Aです。B・Cにそれぞれ0.3Aずつ流れます。',
      add: [...relabel(216, 13, 40, '0.3A', C.green, 12), ...relabel(216, 100, 40, '0.3A', C.green, 12), ...band(150, bx(50, 162, 220, 34, '0.6 ÷ 2 ＝ 0.3A', C.green, FILL.green, 16))],
    },
    {
      note: '❓本当に合っている？（確かめ）→B＋C＝0.3＋0.3＝0.6Aになり、Aを流れた電流0.6Aと同じです。分かれる前と分かれたあとの合計が一致しました。',
      add: band(150, lb(160, 172, '0.3 ＋ 0.3 ＝ 0.6A', 16, C.green, 'middle', true), lb(160, 202, 'Aの電流と同じ ✓', 12, C.gray)),
    },
    {
      note: '❓よくあるまちがいは？→B・CにもAと同じ0.6Aが流れると考えること。すると合計が0.6＋0.6＝1.2Aとなり、もとの0.6Aより増えてしまい、おかしいですね。答えは0.3Aです。',
      add: band(150, bx(20, 162, 130, 34, '×0.6A ずつ（合計1.2A）', C.red, FILL.red, 11), bx(170, 162, 130, 34, '○0.3A ずつ', C.green, FILL.green, 14)),
    },
  ], '並列に分かれた電流：同じ豆電球なら半分ずつ（0.6÷2＝0.3A）');
})();

figures['kankan_top_rika_085'] = (() => {
  const both = (fx: string, fy: string): E[] => [...ckt('single', 30, 6, ['X'], [fx]), ...ckt('single', 180, 6, ['Y'], [fy])];
  return show([
    {
      note: '同じかん電池1個ずつにつないだ豆電球XとY。Xのほうが、抵抗（ていこう）が小さいです。❓電流が大きく、明るく光るのはどちらでしょう。',
      add: [...both(FILL.yellow, FILL.yellow), lb(90, 140, '抵抗：小', 11, C.green, 'middle', true), lb(240, 140, '抵抗：大', 11, C.red, 'middle', true), ...band(150, lb(160, 178, '電流が大きく、明るいのは？', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓抵抗って何？→電流の「通りにくさ」のことです。道にたとえると、抵抗が小さいのは広くて通りやすい道、抵抗が大きいのは細くて通りにくい道です。',
      add: fresh(bx(20, 36, 130, 64, undefined, C.green, FILL.green), ar(30, 52, 140, 52, C.green), ar(30, 68, 140, 68, C.green), ar(30, 84, 140, 84, C.green),
        bx(170, 58, 130, 20, undefined, C.red, FILL.red), ar(180, 68, 290, 68, C.red), lb(85, 114, '広い道（X）：抵抗が小さい', 10, C.green, 'middle', true), lb(235, 96, '細い道（Y）：抵抗が大きい', 10, C.red, 'middle', true),
        ...band(150, lb(160, 178, '通りやすい道ほど、たくさん流れる', 13, C.ink, 'middle', true))),
    },
    {
      note: '❓XもYも同じかん電池1個。電池が電流を押し出す力は同じ？→同じです。同じ力で押すのに、通りやすいXにはたくさん、通りにくいYには少ししか流れません。',
      add: fresh(...both(FILL.yellow, FILL.yellow), lb(100, 60, '電流 大', 11, C.green, 'middle', true), lb(250, 60, '電流 小', 11, C.red, 'middle', true), ...band(150, lb(160, 176, '同じ電池 → 同じ力で押している', 12, C.ink, 'middle', true), lb(160, 204, '通りやすさのちがいだけで差がつく', 11, C.gray))),
    },
    {
      note: '❓数でたしかめよう→たとえばXの抵抗を1、Yの抵抗を2とします。電池1個のときの電流は「電池の数÷抵抗」なので、Xは1÷1＝1、Yは1÷2＝1/2。Xのほうが2倍流れます。（数は、考え方をつかむための例です）',
      add: [...relabel(100, 60, 70, '電流 1', C.green, 11), ...relabel(250, 60, 70, '電流 1/2', C.red, 11), ...band(150, lb(160, 172, 'X：1 ÷ 1 ＝ 1', 14, C.green, 'middle', true), lb(160, 200, 'Y：1 ÷ 2 ＝ 1/2', 14, C.red, 'middle', true))],
    },
    {
      note: '❓明るさは何で決まる？→豆電球を流れる電流が大きいほど、明るく光ります。Xのほうが電流が大きいので、Xのほうが明るく光ります。',
      add: fresh(...both(FILL.yellow, FILL.warm), lb(90, 10, '明るい', 11, C.green, 'middle', true), lb(240, 10, 'それより暗い', 11, C.red, 'middle', true), ...band(150, bx(30, 162, 260, 34, '明るいのは 抵抗の小さい豆電球X', C.green, FILL.green, 14))),
    },
    {
      note: '❓よくあるまちがいは？→「抵抗が大きいほうが強く光る」と思いこむことです。抵抗は電流をじゃまするものなので、大きいほど電流は減り、暗くなります。',
      add: band(150, bx(20, 162, 130, 34, '×抵抗が大きいY', C.red, FILL.red, 13), bx(170, 162, 130, 34, '○抵抗が小さいX', C.green, FILL.green, 13), lb(160, 216, '抵抗 ＝ じゃまするもの', 11, C.gray)),
    },
    {
      note: '❓「どちらも同じ」や「電流は流れない」ではないの？→回路は電池から出て電池にもどる輪になっているので、電流は流れます。そして抵抗がちがうので、電流の大きさもちがいます。答えは、抵抗の小さい豆電球Xです。',
      add: band(150, lb(160, 170, '輪になっている → 電流は流れる', 12, C.ink, 'middle', true), lb(160, 196, '抵抗がちがう → 電流の大きさもちがう', 12, C.ink, 'middle', true), lb(160, 222, '答え：抵抗の小さい豆電球X', 13, C.green, 'middle', true)),
    },
  ], '抵抗が小さいほど電流が大きく、明るい');
})();

figures['tokyo_meidai_rika_006'] = addParallel('かん電池1個と豆電球1個の回路に、同じ豆電球をもう1個並列（へいれつ）につなぎます。❓最初の豆電球の明るさはどうなるでしょう。', '最初');
figures['tokyo_chuo_rika_006'] = addParallel('かん電池1個と豆電球1個の回路に、同じ豆電球をもう1個並列（へいれつ）につなぎます。❓それぞれの豆電球の明るさはどうなるでしょう。', 'それぞれ');
figures['tokyo_aoyama_rika_007'] = seriesVsParallel('豆電球2個を並列（へいれつ）につないだ回路と、直列（ちょくれつ）につないだ回路があります。電池の数は同じです。❓どちらの豆電球が明るいでしょう。', '明るいのは 並列つなぎ');
figures['tokyo_hosei_rika_004'] = seriesVsParallel('豆電球2個を直列（ちょくれつ）につないだ回路と、並列（へいれつ）につないだ回路に、それぞれ同じ電池1個をつなぎます。❓豆電球の明るさについて正しいものはどれでしょう。', '明るいのは 並列つなぎ');

figures['tokyo_chuo_rika_002'] = show([
  {
    note: '豆電球2個を直列（ちょくれつ）つなぎにした回路と、並列（へいれつ）つなぎにした回路。同じ電池を使うとき、❓電池が早く消耗（しょうもう）するのはどちらでしょう。',
    add: [...ckt('series', 28, 6), ...ckt('parallel', 178, 6), lb(88, 10, '直列', 12, C.blue, 'middle', true), lb(238, 10, '並列', 12, C.blue, 'middle', true), ...band(150, lb(160, 175, '電池が早くなくなるのは？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓電池が「なくなる」とは、どういうこと？→電池は電流を流すたびに、中にたくわえた力を使っています。だから、電池から出ていく電流が大きいほど、早く使い切ります。くらべるのは、電池から出る電流の大きさです。',
    add: fresh(batt(160, 50), ar(160, 70, 160, 110, C.red), lb(160, 126, '出ていく電流が大きい', 12, C.red, 'middle', true), ...band(150, lb(160, 175, '電流が大きい ＝ 電池が早くへる', 13, C.ink, 'middle', true))),
  },
  {
    note: '❓まず、電池1個に豆電球1個のとき、電流はどれくらい？→この大きさを「1」と決めます。❓直列（ちょくれつ）の場合は？→道が1本で豆電球2個を通るので、通りにくさが2個ぶん。電池から出る電流は、半分の「1/2」です。',
    add: fresh(...ckt('series', 100, 6), lb(160, 14, '電池から出る電流 1/2', 12, C.red, 'middle', true), ...band(150, lb(160, 175, '直列：1/2（通りにくいので、少ししか流れない）', 12, C.red, 'middle', true))),
  },
  {
    note: '❓並列（へいれつ）の場合は？→豆電球がそれぞれ電池と直接つながっていて、どちらにも「1」ずつ流れます。電池からは 1＋1＝2 の電流が出ていきます。',
    add: fresh(...ckt('parallel', 100, 6), lb(175, 58, '1', 13, C.green, 'middle', true), lb(175, 98, '1', 13, C.green, 'middle', true), lb(160, 14, '電池から出る電流 1＋1＝2', 12, C.green, 'middle', true), ...band(150, lb(160, 175, '並列：2（道が2本で、たくさん流れる）', 12, C.green, 'middle', true))),
  },
  {
    note: '❓くらべてみよう→電池から出る電流は、直列が1/2、並列が2。棒の長さでくらべると、並列のほうがずっと長く、電池の力をどんどん使います。',
    add: fresh(lb(64, 43, '直列', 11, C.red, 'end', true), lb(64, 83, '並列', 11, C.green, 'end', true), bx(70, 30, 30, 26, '1/2', C.red, FILL.red, 11), bx(70, 70, 120, 26, '2', C.green, FILL.green, 12), lb(200, 43, '← 少しずつへる', 11, C.red, 'start'), lb(200, 83, '← どんどんへる', 11, C.green, 'start'), ...band(150, lb(160, 175, '棒が長いほど、電池が早くなくなる', 12, C.ink, 'middle', true))),
  },
  {
    note: '❓だから答えは？→電池から出る電流が大きい並列つなぎのほうが、電池が早く消耗（しょうもう）します。',
    add: band(150, bx(40, 162, 240, 34, '早く消耗するのは 並列つなぎ', C.green, FILL.green, 15)),
  },
  {
    note: '❓直列のほうが明るいと思った人は？→並列のほうが、豆電球は明るく光ります（電流が1で大きいため）。でも、その分、電池は早く使い切ります。直列は暗いけれど、電池は長持ちします。明るさと電池の持ちはセットで考えましょう。',
    add: band(150, bx(20, 160, 130, 34, '並列：明るい・電池は短い', C.green, FILL.green, 10), bx(170, 160, 130, 34, '直列：暗い・電池は長持ち', C.red, FILL.red, 10), lb(160, 216, '明るさと電池の持ちは、反対になる', 11, C.gray)),
  },
], '電池が早くへるのは、電池から出る電流が大きい並列つなぎ');

// ════════════════ 理科：浮力 ════════════════
const tank = (x: number, y: number, w: number, h: number): E => bx(x, y, w, h, undefined, C.blue, FILL.blue);

figures['kankan_top_rika_082'] = show([
  {
    note: '一辺10cmの立方体（りっぽうたい）の物体（重さ600g）を水に浮かべます。❓水中に沈んでいる部分の体積（たいせき）は何cm³でしょう。',
    add: [tank(60, 70, 200, 70), bx(130, 46, 60, 24, undefined, C.main, FILL.warm), bx(130, 70, 60, 36, undefined, C.main, FILL.yellow), lb(160, 30, '一辺10cm・重さ600g', 11, C.ink, 'middle', true), ...band(150, lb(160, 178, '沈んでいる部分の体積 ＝ ？cm³', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓浮いて、じっと止まっているのはなぜ？→下向きの重さ600gと、水が上に押し上げる力（浮力（ふりょく））が、つり合っているからです。つり合っていなければ、沈むか浮き上がるかして動いてしまいます。',
    add: [ar(118, 50, 118, 118, C.red), ar(202, 128, 202, 82, C.blue), lb(112, 130, '重さ 600g', 10, C.red, 'end', true), ...band(150, lb(160, 170, '下向きの重さ ＝ 上向きの浮力', 13, C.ink, 'middle', true), lb(160, 198, '浮力は 何g？', 12, C.blue, 'middle', true))],
  },
  {
    note: '❓つり合うなら、浮力は何g？→重さと同じ600gです。',
    add: [lb(208, 124, '浮力 600g', 10, C.blue, 'start', true), ...band(150, bx(40, 162, 240, 34, '浮力 ＝ 重さ ＝ 600g', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓では、この浮力600gは何の力？→物体が水に入ると、沈んだ体積と同じ体積の水をおしのけます。浮力は、そのおしのけた水の重さと同じ大きさになります。',
    add: [bx(130, 70, 60, 36, undefined, C.red, 'none'), ...band(150, lb(160, 170, '浮力 ＝ おしのけた水の重さ', 14, C.red, 'middle', true), lb(160, 198, '（赤い点線の部分の水）', 11, C.gray))],
  },
  {
    note: '❓600gの水は何cm³？→水1cm³の重さは1gなので、600gの水は600cm³です。おしのけた水が600cm³だから、沈んでいる部分の体積も600cm³です。',
    add: [lb(160, 92, '600cm³', 11, C.red, 'middle', true), ...band(150, lb(160, 170, '水1cm³ ＝ 1g', 13, C.ink, 'middle', true), lb(160, 198, '600g ＝ 600cm³', 15, C.green, 'middle', true))],
  },
  {
    note: '❓確かめ→底面は10×10＝100cm²。沈んでいる体積が600cm³なら、沈んでいる深さは600÷100＝6cm。全体の高さ10cmのうち、水面の上に4cm出ているはずです。図の高さとぴったり合います。',
    add: [ln(146, 46, 146, 70, C.blue, false, 2), ln(146, 70, 146, 106, C.red, false, 2), lb(140, 58, '4cm', 10, C.blue, 'end', true), lb(140, 88, '6cm', 10, C.red, 'end', true), ...band(150, lb(160, 170, '600 ÷ 100 ＝ 6cm（沈む深さ）', 13, C.ink, 'middle', true), lb(160, 198, '6 ＋ 4 ＝ 10cm（立方体の高さ）✓', 12, C.green, 'middle', true))],
  },
  {
    note: '答えは600cm³。❓1000cm³ではないの？→1000cm³は物体全体の体積です。全部沈むと浮力は1000gになり、重さ600gより大きくなって、浮き上がってしまいます。沈むのは、重さと同じ600gぶんの水をおしのける、600cm³だけです。',
    add: band(150, bx(20, 162, 130, 34, '×1000cm³（全体）', C.red, FILL.red, 12), bx(170, 162, 130, 34, '○600cm³', C.green, FILL.green, 15)),
  },
], '浮いている物体：浮力＝重さ＝おしのけた水の重さ（水1cm³＝1g）');

figures['kankan_top_rika_083'] = (() => {
  const base = (): E[] => [
    ln(100, 10, 220, 10, C.ink, false, 4), ln(130, 10, 130, 80, C.gray, false, 2), ln(190, 80, 190, 34, C.gray, false, 2),
    ln(160, 110, 160, 122, C.gray, false, 2), ci(160, 80, 30, undefined, C.gray, FILL.gray), ci(160, 80, 3, undefined, C.ink, C.ink),
    bx(135, 122, 50, 24, '300g', C.main, FILL.warm, 11), lb(108, 62, '動滑車', 10, C.gray, 'end'),
  ];
  return show([
    {
      note: '動滑車（どうかっしゃ）を1個使って、重さ300gのおもりをゆっくり真上に持ち上げます。滑車の重さや摩擦（まさつ）は考えません。❓ひもを引く力は何g必要でしょう。',
      add: [...base(), ar(190, 34, 190, 18, C.red), lb(200, 24, '引く力 ？g', 10, C.red, 'start', true), ...band(150, lb(160, 178, 'ひもを引く力 ＝ ？g', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓このおもりは、ひもの何本で支えられている？→動滑車には、天井につながる左のひもと、手で引く右のひもの2本がつながっています。おもりの重さは、この2本で分けて支えます。',
      add: [ln(130, 10, 130, 80, C.red, false, 3.5), ln(190, 80, 190, 34, C.red, false, 3.5), lb(118, 40, '1本め', 10, C.red, 'end', true), lb(202, 56, '2本め', 10, C.red, 'start', true), ...band(150, lb(160, 178, '動滑車を支えるひもは 2本', 13, C.red, 'middle', true))],
    },
    {
      note: '❓なぜ1本ぶんの力は半分になる？→1本のひもは、どこでも同じ力でぴんと張っています。2本が同じ力で支えるので「ひも1本ぶんの力＋ひも1本ぶんの力＝300g」。だから1本が支える力は、300gの半分です。',
      add: band(150, bx(30, 160, 80, 30, 'ひも1本ぶん', C.red, FILL.red, 11), lb(122, 177, '＋', 16), bx(134, 160, 80, 30, 'ひも1本ぶん', C.red, FILL.red, 11), lb(226, 177, '＝', 16), bx(238, 160, 60, 30, '300g', C.main, FILL.warm, 13), lb(160, 216, '同じ力が2本 → 2つ分で300g', 11, C.gray)),
    },
    {
      note: '❓計算は？→2本ぶんで300gなので、1本ぶん（＝ひもを引く力）は 300÷2＝150g です。',
      add: [...relabel(238, 24, 76, '引く力 150g', C.red, 10), ...band(150, bx(50, 162, 220, 34, '300 ÷ 2 ＝ 150g', C.green, FILL.green, 16))],
    },
    {
      note: '❓では、手はひもを何cm引くことになる？→おもりを30cm持ち上げるには、左のひもも右のひもも30cmずつ短くならなければいけません。右のひもを手で引くので、手は 30＋30＝60cm 引きます。（図の矢印は長さ1cmを1めもりで表しています）',
      add: [ar(250, 100, 250, 40, C.red), lb(258, 70, '60cm', 10, C.red, 'start', true), ar(210, 146, 210, 116, C.blue), lb(218, 131, '30cm', 10, C.blue, 'start', true), ...band(150, lb(160, 178, '手で引く長さ ＝ 30 × 2 ＝ 60cm', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓力が半分ですんだなら、得をしている？→力は半分の150gでも、引く長さは2倍の60cmです。「力×動かす長さ」は、直接持ち上げても動滑車を使っても同じ9000になります。これを仕事の原理といいます。',
      add: band(150, bx(30, 158, 260, 28, '直接持ち上げる：300g × 30cm ＝ 9000', C.gray, FILL.gray, 12), bx(30, 192, 260, 28, '動滑車で引く：150g × 60cm ＝ 9000', C.green, FILL.green, 12)),
    },
    {
      note: '答えは150g。❓確かめ→ひも1本ぶんの力150g×2本＝300gで、おもりの重さとつり合っています。まちがい注意：300gと答えるのは、滑車を使わずに直接持ち上げるときの力です。',
      add: band(150, bx(20, 162, 130, 34, '×300g（滑車なし）', C.red, FILL.red, 12), bx(170, 162, 130, 34, '○150g', C.green, FILL.green, 16), lb(160, 216, '150 × 2 ＝ 300 ✓', 11, C.gray)),
    },
  ], '動滑車：2本のひもで分けて支えるので、力は半分（300÷2＝150g）');
})();

figures['kankan_top_rika_086'] = (() => {
  const airObj = (): E[] => [bx(50, 8, 60, 24, '50g', C.blue, FILL.blue, 12), ln(80, 32, 80, 50, C.gray, false, 2), bx(56, 50, 48, 40, '40cm³', C.main, FILL.warm, 11), lb(80, 108, '空気中', 11, C.ink, 'middle', true)];
  const waterObj = (): E[] => [tank(185, 60, 110, 74), bx(210, 8, 60, 24, '10g', C.blue, FILL.blue, 12), ln(240, 32, 240, 78, C.gray, false, 2), bx(216, 78, 48, 40, '40cm³', C.main, FILL.warm, 11), lb(240, 144, '水中', 11, C.ink, 'middle', true)];
  return show([
    {
      note: '体積40cm³の物体を、ばねばかりにつるします。空気中では50g、水中に完全に沈めると10gでした。❓この物体の密度（みつど）は何g/cm³でしょう。',
      add: [...airObj(), ...waterObj(), ...band(150, lb(160, 178, '密度 ＝ ？g/cm³', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓水の中でばねばかりの値が小さくなったのは、なぜ？→水が物体を上向きに押し上げる力（浮力（ふりょく））がはたらき、ばねを引っぱる力が軽くなったからです。',
      add: [ar(274, 120, 274, 84, C.blue), ...band(150, lb(160, 178, '水が上に押す（浮力）→ ばねが軽く感じる', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓浮力は何g？→空気中で50g、水中で10gなので、軽くなった分が浮力です。50−10＝40g。',
      add: [lb(274, 50, '浮力 40g', 10, C.blue, 'middle', true), ...band(150, bx(40, 162, 240, 34, '浮力 ＝ 50 − 10 ＝ 40g', C.blue, FILL.blue, 15))],
    },
    {
      note: '❓この浮力40gは、何の重さ？→物体がおしのけた水の重さです。物体は完全に沈んでいるので、おしのけた水の体積は、物体の体積40cm³と同じになります。',
      add: [bx(216, 78, 48, 40, undefined, C.red, 'none'), ...band(150, lb(160, 170, '浮力 ＝ おしのけた水の重さ', 13, C.red, 'middle', true), lb(160, 198, 'おしのけた水 ＝ 40cm³', 14, C.red, 'middle', true))],
    },
    {
      note: '❓確かめ→水1cm³は1gなので、40cm³の水は40gです。さきほど求めた浮力40gとぴったり合います。',
      add: band(150, lb(160, 170, '水40cm³ ＝ 40g', 14, C.ink, 'middle', true), lb(160, 198, '＝ 浮力40g ✓', 14, C.green, 'middle', true)),
    },
    {
      note: '❓そもそも密度（みつど）とは？→物質1cm³あたりの重さのことです。だから「重さ÷体積」で求めます。',
      add: fresh(bx(30, 36, 110, 60, '重さ 50g\n体積 40cm³', C.main, FILL.warm, 13), ar(148, 66, 182, 66, C.blue), bx(190, 46, 100, 40, '1cm³あたり\n何g？', C.blue, FILL.blue, 12), ...band(150, lb(160, 178, '密度 ＝ 重さ ÷ 体積', 14, C.ink, 'middle', true))),
    },
    {
      note: '❓どの重さを使う？→物体そのものの重さ、つまり空気中の50gです。水中の10gは、浮力で軽く見えているだけなので使いません。だから 50÷40＝1.25g/cm³ です。',
      add: band(150, bx(40, 158, 240, 30, '50 ÷ 40 ＝ 1.25g/cm³', C.green, FILL.green, 15), lb(160, 210, '水中の10gは使わない（浮力で軽く見えている）', 11, C.red)),
    },
    {
      note: '❓最後の確かめ→水の密度は1g/cm³。この物体は1.25で水より大きいので、水に沈みます。水中でばねばかりが10gを示していることとも合います。まちがい注意：10÷40＝0.25や、浮力の40÷40＝1としないこと。',
      add: band(150, lb(160, 168, '1.25 ＞ 水の 1 → 沈む ✓', 13, C.green, 'middle', true), lb(160, 196, '×10÷40＝0.25（水中の重さ）', 11, C.red), lb(160, 218, '×40÷40＝1（浮力）', 11, C.red)),
    },
  ], '密度＝空気中の重さ÷体積：浮力は重さのちがいから求める');
})();

figures['tokyo_chuo_rika_005'] = show([
  {
    note: '重さ100gのおもりを、ばねばかりにつるして水中に沈めたところ、ばねばかりの示す値が80gになりました。❓おもりが受けた浮力（ふりょく）は何gでしょう。',
    add: [bx(50, 8, 60, 24, '100g', C.blue, FILL.blue, 12), ln(80, 32, 80, 50, C.gray, false, 2), bx(56, 50, 48, 40, 'おもり', C.main, FILL.warm, 11), lb(80, 108, '空気中', 11, C.ink, 'middle', true),
      tank(185, 60, 110, 74), bx(210, 8, 60, 24, '80g', C.blue, FILL.blue, 12), ln(240, 32, 240, 78, C.gray, false, 2), bx(216, 78, 48, 40, 'おもり', C.main, FILL.warm, 11), lb(240, 144, '水中', 11, C.ink, 'middle', true),
      ...band(150, lb(160, 178, '浮力 ＝ ？g', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓水の中で、ばねばかりの値が100gから80gに小さくなったのは、なぜ？→水が、おもりを上向きに押し上げる力（浮力）がはたらくからです。その分だけ、ばねが引っぱる力が軽くなります。',
    add: [ar(274, 120, 274, 84, C.blue), ...band(150, lb(160, 178, '水が上に押す（浮力）→ ばねが軽くなった', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓では、浮力は何g？→軽くなった分が、そのまま浮力です。100−80＝20g。',
    add: [lb(274, 50, '浮力 20g', 10, C.blue, 'middle', true), ...band(150, bx(40, 162, 240, 34, '浮力 ＝ 100 − 80 ＝ 20g', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓本当に力はつり合っている？→おもりは静止しています。上向きの力は、ばねの80gと浮力の20gで合計100g。下向きの重さ100gとぴったりつり合っています。（棒の長さは1gを1.5めもりで表しています）',
    add: fresh(bx(40, 30, 120, 26, 'ばねの力 80g', C.blue, FILL.blue, 12), bx(160, 30, 30, 26, '20g', C.green, FILL.green, 10), lb(175, 22, '浮力', 10, C.green, 'middle', true), lb(200, 43, '← 上向き 合計100g', 11, C.blue, 'start', true), bx(40, 76, 150, 26, '下向き：重さ 100g', C.red, FILL.red, 12), ...band(150, lb(160, 178, '上向き 80＋20 ＝ 下向き 100 ✓', 13, C.green, 'middle', true))),
  },
  {
    note: '❓この浮力20gは何の重さ？→おもりがおしのけた水の重さです。水1cm³は1gなので、20gの水は20cm³。つまりこのおもりの体積は20cm³だとわかります。',
    add: band(150, lb(160, 170, '浮力20g ＝ おしのけた水20g', 13, C.ink, 'middle', true), lb(160, 198, '＝ 水20cm³ ＝ おもりの体積', 13, C.blue, 'middle', true)),
  },
  {
    note: '❓よくあるまちがいは？→80g（ばねばかりの値）や100g（空気中の重さ）をそのまま答えたり、100＋80＝180gと足したりしないこと。浮力は「軽くなった分」＝ひき算で求めます。',
    add: band(150, lb(160, 168, '×80g（ばねの値）　×100g（重さ）', 12, C.red, 'middle', true), lb(160, 192, '×180g（足し算）', 12, C.red, 'middle', true), lb(160, 218, '○ 100 − 80 ＝ 20g（ひき算）', 13, C.green, 'middle', true)),
  },
  {
    note: '答えは20g。❓確かめ→80gと浮力20gを足すと、空気中の重さ100gにもどります。ひき算の答えに足し算をして、もとにもどれば合っています。',
    add: band(150, bx(50, 162, 220, 34, '80 ＋ 20 ＝ 100 ✓', C.green, FILL.green, 16), lb(160, 216, '浮力は 20g', 13, C.green, 'middle', true)),
  },
], '浮力＝空気中の重さ−水中で測った値（100−80＝20g）');

// ════════════════ 理科：地震・月 ════════════════
figures['tokyo_meidai_rika_005'] = (() => {
  const bars = (scale: number, rows: { y: number; p: number; s: number; label?: string }[]): E[] =>
    rows.flatMap((r) => [bx(70, r.y, r.p * scale, 24, `P波 ${r.p}秒`, C.blue, FILL.blue, 11), bx(70, r.y + 30, r.s * scale, 24, `S波 ${r.s}秒`, C.red, FILL.red, 11),
      ln(70 + r.p * scale, r.y + 12, 70 + r.s * scale, r.y + 12, C.gray, true), lb(70 + r.s * scale + 8, r.y + 12, `差 ${r.s - r.p}秒`, 11, C.red, 'start', true),
      lb(62, r.y + 27, `${r.s * 4}km`, 10, C.gray, 'end', true)]);
  return show([
    {
      note: 'ある地点で、P波（初期微動）が届いてから8秒後にS波（主要動）が届きました。P波は秒速6km、S波は秒速4kmです。❓震源からこの地点までは何kmでしょう。',
      add: [ci(40, 80, 14, '震源', C.red, FILL.red, 9), bx(240, 64, 60, 32, 'ある地点', C.blue, FILL.blue, 11), ln(54, 80, 240, 80, C.gray, true), ar(60, 62, 236, 62, C.blue), lb(148, 50, 'P波（はやい）秒速6km', 11, C.blue, 'middle', true), ar(60, 100, 236, 100, C.red), lb(148, 116, 'S波（おそい）秒速4km', 11, C.red, 'middle', true),
        ...band(150, lb(160, 176, 'S波はP波より8秒おくれて届く', 13, C.ink, 'middle', true), lb(160, 204, '震源からのきょり ＝ ？km', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓なぜ、届く時間にずれができる？→P波とS波は同じ震源から同時に出発しますが、P波は速く、S波はおそいので、S波があとから届きます。この「あとから届くまでの時間の差」が8秒です。',
      add: band(150, lb(160, 170, '同時に出発 → P波が先、S波があと', 12, C.ink, 'middle', true), lb(160, 198, '時間の差 ＝ S波の時間 − P波の時間 ＝ 8秒', 12, C.red, 'middle', true)),
    },
    {
      note: '❓まず、12km進むとき、時間の差はどうなる？→P波は12÷6＝2秒、S波は12÷4＝3秒。差は 3−2＝1秒です。（12は6でも4でもわりきれる数なので、考えやすい数です）',
      add: fresh(...bars(30, [{ y: 30, p: 2, s: 3 }]), ...band(150, lb(160, 175, '12kmのとき：P波2秒・S波3秒 → 差1秒', 12, C.ink, 'middle', true))),
    },
    {
      note: '❓24kmだと？→P波は24÷6＝4秒、S波は24÷4＝6秒で、差は2秒。距離が2倍になると、差も2倍になります。❓なぜ？→長く進むほど、速さのちがいが積み重なって、時間の差が開いていくからです。',
      add: fresh(...bars(30, [{ y: 14, p: 2, s: 3 }, { y: 84, p: 4, s: 6 }]), ...band(150, lb(160, 178, '距離が2倍 → 時間の差も2倍', 13, C.ink, 'middle', true))),
    },
    {
      note: '❓差が8秒のときのきょりは？→差が1秒ふえるごとに、きょりが12kmふえます。だから8秒の差なら 12×8＝96km。',
      add: fresh(...Array.from({ length: 8 }, (_, i) => bx(20 + i * 37, 50, 34, 34, '12km', C.main, FILL.warm, 9)), lb(160, 30, '差が1秒ふえるごとに 12km', 12, C.ink, 'middle', true), lb(160, 106, '8つ分', 11, C.gray), ...band(150, bx(50, 162, 220, 34, '12 × 8 ＝ 96km', C.green, FILL.green, 16))),
    },
    {
      note: '❓確かめ→96kmを、P波は 96÷6＝16秒、S波は 96÷4＝24秒で届きます。差は 24−16＝8秒で、問題と合います。（棒は1秒を8めもりで表しています）',
      add: fresh(bx(20, 30, 16 * 8, 24, 'P波 16秒', C.blue, FILL.blue, 12), bx(20, 66, 24 * 8, 24, 'S波 24秒', C.red, FILL.red, 12), ln(148, 42, 212, 42, C.gray, true), lb(220, 42, '差 8秒', 12, C.red, 'start', true), ...band(150, lb(160, 172, '96÷6＝16秒　96÷4＝24秒', 13, C.ink, 'middle', true), lb(160, 200, '24 − 16 ＝ 8秒 ✓', 14, C.green, 'middle', true))),
    },
    {
      note: '答えは96km。❓まちがいやすい点は？→8秒に秒速6kmをかけて48kmとするのは誤りです。それは8秒のあいだにP波が進む距離にすぎません。大切なのは、時間の「差」が、きょりによって決まるという考え方です。',
      add: band(150, bx(20, 162, 130, 34, '×8×6 ＝ 48km', C.red, FILL.red, 13), bx(170, 162, 130, 34, '○96km', C.green, FILL.green, 16)),
    },
  ], 'P波とS波：12kmごとに1秒の差（8秒の差 → 12×8＝96km）');
})();

figures['tokyo_meidai_rika_004'] = (() => {
  const orbit = (): E[] => [ci(160, 75, 52, undefined, C.gray, 'none'), ci(160, 75, 14, '地球', C.blue, FILL.blue, 8)];
  const light = (): E[] => [ar(312, 40, 240, 40, C.main), ar(312, 75, 240, 75, C.main), ar(312, 110, 240, 110, C.main), lb(284, 26, '太陽の光', 10, C.main, 'middle', true)];
  const shapeRow = (arrows = false): E[] => {
    const xs = [40, 100, 160, 220, 280];
    const ks: Phase[] = ['new', 'right', 'full', 'left', 'new'];
    const names = ['新月', '上弦', '満月', '下弦', '新月'];
    return [...xs.flatMap((x, i) => [...moonShape(x, 182, 16, ks[i]), lb(x, 216, names[i], 10, C.ink, 'middle', true)]), ...(arrows ? xs.slice(0, 4).map((x) => ar(x + 19, 182, x + 41, 182, C.gray)) : [])];
  };
  return show([
    {
      note: '新月から次の新月までの間に、月の形はどの順に変わるでしょう。上から見た図で考えます。地球のまわりを月が回り、太陽の光は右から来ます。❓まず、月はどうして形が変わって見えるのでしょう。',
      add: [...orbit(), ...light(), ...moonShape(212, 75, 9, 'right'), lb(212, 96, '新月の位置', 9, C.ink, 'middle', true), ...band(150, lb(160, 178, '月の形の変わり方 ＝ ？', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓なぜ形が変わる？→月は自分では光らず、太陽の光が当たっている半分だけが明るくなります。明るい面は、いつも太陽のほうを向いています。月が地球のまわりを回ると、地球から明るい面が見える量が変わるのです。',
      add: band(150, lb(160, 172, '月の明るい半分 ＝ 太陽のほうを向いた面', 12, C.ink, 'middle', true), lb(160, 200, '地球から見える量が、月の位置で変わる', 12, C.gray)),
    },
    {
      note: '❓新月のとき、地球から見ると？→月は太陽と地球の間にいて、明るい面は太陽のほう（地球の反対側）を向いています。地球から見えるのは暗い面だけなので、月はほとんど見えません。',
      add: band(150, ...moonShape(160, 182, 16, 'new'), lb(160, 216, '新月：暗い面が見える', 11, C.ink, 'middle', true)),
    },
    {
      note: '❓そのあと、月はどちらへ進む？→図で反時計まわり（上の向き）に進み、約7日で真上の位置に来ます。❓このとき地球から見ると？→月の明るい面の半分が見えるので、半月です。右半分が光る「上弦の月」です。',
      add: [ar(210, 62, 182, 30, C.blue), ...moonShape(160, 23, 9, 'right'), lb(186, 16, '上弦の位置', 9, C.ink, 'start', true), ...band(150, ...moonShape(160, 182, 16, 'right'), lb(160, 216, '上弦の月：右半分が光る', 11, C.ink, 'middle', true))],
    },
    {
      note: '❓さらに進むと？→地球をはさんで、太陽の反対側に来ます。月の明るい面が、そのまま地球のほうを向くので、まるい「満月」に見えます。新月から約15日後です。',
      add: [ar(138, 28, 112, 54, C.blue), ...moonShape(108, 75, 9, 'right'), lb(108, 96, '満月の位置', 9, C.ink, 'middle', true), ...band(150, ...moonShape(160, 182, 16, 'full'), lb(160, 216, '満月：まるく見える', 11, C.ink, 'middle', true))],
    },
    {
      note: '❓そのあとは？→月は下の位置に来て、今度は左半分が光る半月になります。これが「下弦の月」です。さらに進むと、太陽と地球の間にもどって、また新月になります。',
      add: [ar(112, 98, 138, 122, C.blue), ...moonShape(160, 127, 9, 'right'), lb(186, 130, '下弦の位置', 9, C.ink, 'start', true), ...band(150, ...shapeRow())],
    },
    {
      note: '答えは「新月→上弦の月→満月→下弦の月→新月」。❓なぜこの順？→明るい部分は、はじめ右側からふえていって満月になり、そのあとは右側からへっていくからです。上弦と下弦は、満月をはさんで左右対称に並びます。',
      add: band(150, ...shapeRow(true)),
    },
  ], '月の満ち欠け：新月→上弦→満月→下弦→新月');
})();

figures['tokyo_aoyama_rika_005'] = (() => {
  const sun = (): E[] => [ci(36, 75, 24, '太陽', C.main, FILL.yellow, 10)];
  const earth = (x = 160): E => ci(x, 75, 14, '地球', C.blue, FILL.blue, 8);
  const moonDark = (x: number): E => ci(x, 75, 10, undefined, C.gray, '#8A8178');
  return show([
    {
      note: '地球から見て、太陽・地球・月がこの順に一直線に並んでいます。❓このとき、月はどんな形に見えるでしょう。',
      add: [...sun(), earth(), moonDark(270), lb(270, 100, '月', 11, C.ink, 'middle', true), ...band(150, lb(160, 178, '月の形は？', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓月は自分で光っている？→いいえ。太陽の光が当たったところが明るく見えています。光が当たっているのは、太陽のほうを向いた半分です。',
      add: [sc(270, 75, 10, 90, 270, C.main, FILL.yellow), ar(64, 52, 250, 52, C.main), ar(64, 98, 250, 98, C.main), ...band(150, lb(160, 178, '明るい面 ＝ 太陽のほうを向いた半分', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓その明るい面は、こちらから見てどちら向き？→太陽のほう（図の左）です。この並びでは地球が太陽と月の間にあるので、月の明るい面は、地球のほうを向いています。',
      add: [ar(256, 75, 180, 75, C.blue), lb(222, 63, '明るい面は地球向き', 8, C.blue, 'middle', true), ...band(150, lb(160, 178, '明るい面が、地球のほうを向く', 13, C.blue, 'middle', true))],
    },
    {
      note: '❓地球から見ると？→月の明るい面がまるごと見えます。だから、まんまるの「満月」です。',
      add: band(150, ...moonShape(160, 182, 16, 'full'), lb(160, 216, '満月', 12, C.green, 'middle', true)),
    },
    {
      note: '❓もし月が、太陽と地球の間に来たら？→月の明るい面は太陽のほう（地球の反対側）を向き、地球からは暗い面しか見えません。これは「新月」です。満月とは反対の並びです。',
      add: [...fresh(...sun(), earth(), ci(100, 75, 10, undefined, C.gray, '#8A8178'), sc(100, 75, 10, 270, 90, C.main, FILL.yellow), ar(64, 44, 240, 44, C.main), ar(64, 112, 240, 112, C.main), lb(100, 95, '月', 11, C.ink, 'middle', true)), ...band(150, ...moonShape(160, 182, 16, 'new'), lb(160, 216, '新月：暗い面が見える', 12, C.ink, 'middle', true))],
    },
    {
      note: '❓満月はいつ見える？→太陽と月が、地球をはさんで反対側にあるので、太陽がしずむころに月が東からのぼります。真夜中に南の空で高くなり、明け方に西へしずみます。',
      add: band(150, ...flow(['夕方\n東からのぼる', '真夜中\n南の空で高い', '明け方\n西にしずむ'], 160, { h: 44, size: 11 }).flat()),
    },
    {
      note: '答えは満月。❓確かめ→太陽・月・地球の順（新月）と反対の、太陽・地球・月の順なので、満月と分かります。（ぴったり一直線になると、月が地球のかげに入る月食になります）',
      add: band(150, bx(40, 160, 240, 34, '太陽→地球→月 ＝ 満月', C.green, FILL.green, 15), lb(160, 216, '太陽→月→地球 ＝ 新月', 11, C.gray)),
    },
  ], '太陽・地球・月の順に並ぶと満月');
})();

figures['tokyo_chuo_rika_004'] = (() => {
  const S: P = [28, 85];
  const E1: P = [120, 55], E2: P = [123.6, 100.1];
  const d1: P = [0.9503, -0.3103], d2: P = [0.9877, 0.1564];
  const M1: P = [E1[0] + 38 * d1[0], E1[1] + 38 * d1[1]];
  const M2: P = [E2[0] + 38 * d1[0], E2[1] + 38 * d1[1]];
  const M3: P = [E2[0] + 38 * d2[0], E2[1] + 38 * d2[1]];
  const sun = ci(S[0], S[1], 16, '太陽', C.main, FILL.yellow, 9);
  const earth = (p: P): E => ci(p[0], p[1], 9, undefined, C.blue, FILL.blue);
  const moon = (p: P, fill: string = FILL.yellow): E => ci(p[0], p[1], 6, undefined, C.main, fill);
  const arc: E[] = [];
  for (let a = -30; a < 24; a += 4) {
    const r = 96.8, t1 = (a * Math.PI) / 180, t2 = ((a + 4.3) * Math.PI) / 180;
    arc.push(ln(S[0] + r * Math.cos(t1), S[1] + r * Math.sin(t1), S[0] + r * Math.cos(t2), S[1] + r * Math.sin(t2), C.gray, false, 1.2));
  }
  return show([
    {
      note: '満月から次の満月までの日数は、約何日でしょう。❓月が地球のまわりを1周する日数と、同じでしょうか。（図は、太陽・地球・月が一直線にならんだ満月のとき。太陽の大きさや月までの遠さは、わかりやすくかいてあります）',
      add: [sun, ln(S[0] + 16, S[1], 200, 34 + 0, C.gray, true), earth(E1), moon(M1), lb(M1[0] + 8, M1[1] - 8, '満月', 10, C.ink, 'start', true), lb(E1[0] - 4, E1[1] + 20, '地球', 10, C.blue, 'end', true), ...band(150, lb(160, 178, '満月 → 次の満月 ＝ 何日？', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓月が地球を1周するのは何日？→約27.3日です。これは、月が星ぞらの中で同じ位置にもどるまでの日数（公転（こうてん）周期）です。',
      add: [ci(E1[0], E1[1], 38, undefined, C.gray, 'none'), ...band(150, lb(160, 172, '月が地球を1周 ＝ 約27.3日', 14, C.blue, 'middle', true), lb(160, 200, '（星ぞらの中で同じ位置にもどる）', 11, C.gray))],
    },
    {
      note: '❓でも、その27.3日のあいだに、地球は止まっている？→動いています。地球も太陽のまわりを回っていて、27.3日で約27度（1日に約1度）進みます。図のように地球が下へ動くと、太陽の見える方向も変わります。',
      add: [...arc, ar(E1[0] + 2, E1[1] + 10, E2[0] + 2, E2[1] - 10, C.red), earth(E2), ln(S[0] + 16, S[1], E2[0] - 9, E2[1] - 1, C.gray, true), ...band(150, lb(160, 172, '地球も約27度すすむ', 14, C.red, 'middle', true), lb(160, 200, '（1日に約1度）', 11, C.gray))],
    },
    {
      note: '❓27.3日後、月はまた満月の位置にいる？→月は星ぞらの中では元の向き（図で同じ向き）にもどっています。でも、太陽・地球・月の並びは約27度ずれてしまい、まだ満月ではありません。',
      add: [ci(E2[0], E2[1], 38, undefined, C.gray, 'none'), ln(E2[0], E2[1], E2[0] + 62 * d1[0], E2[1] + 62 * d1[1], C.gray, true), moon(M2, FILL.warm), ln(E2[0], E2[1], E2[0] + 62 * d2[0], E2[1] + 62 * d2[1], C.red, true), lb(E2[0] + 70, E2[1] + 16, '満月の位置', 9, C.red, 'start', true), ...band(150, lb(160, 172, 'まだ満月ではない（約27度ずれ）', 13, C.red, 'middle', true))],
    },
    {
      note: '❓満月にもどるには？→月がさらに約27度進んで、太陽・地球・月が一直線になる必要があります。月は太陽に対して1日に約12度ずつ進むので、27÷12＝約2.2日（2日ちょっと）よけいにかかります。',
      add: [ar(M2[0] + 4, M2[1] + 3, M3[0] + 2, M3[1] - 7, C.red), moon(M3), ...band(150, lb(160, 172, '27度 ÷ 12度/日 ＝ 約2.2日', 14, C.red, 'middle', true), lb(160, 200, '（月が太陽に対して進む速さ）', 11, C.gray))],
    },
    {
      note: '❓合計は？→27.3日＋2.2日＝29.5日。これが満月から次の満月までの日数（朔望月（さくぼうげつ））です。',
      add: band(150, bx(20, 160, 80, 34, '27.3日', C.blue, FILL.blue, 13), lb(112, 177, '＋', 16), bx(124, 160, 80, 34, '2.2日', C.red, FILL.red, 13), lb(216, 177, '＝', 16), bx(228, 160, 72, 34, '29.5日', C.green, FILL.green, 13), lb(160, 216, '約29.5日', 12, C.green, 'middle', true)),
    },
    {
      note: '❓ほかの選択肢は、何の長さ？→約24時間は地球の自転（1日）、約7日は満ち欠けの4分の1（新月から上弦など）、約365日は地球の公転（1年）です。満月から満月までは約29.5日です。',
      add: fresh(bx(30, 12, 260, 28, '約24時間 ＝ 地球の自転（1日）', C.gray, FILL.gray, 12), bx(30, 46, 260, 28, '約7日 ＝ 満ち欠けの4分の1', C.gray, FILL.gray, 12), bx(30, 80, 260, 28, '約29.5日 ＝ 満月から次の満月 ○', C.green, FILL.green, 12), bx(30, 114, 260, 28, '約365日 ＝ 地球の公転（1年）', C.gray, FILL.gray, 12), ...band(150, lb(160, 178, '答え：約29.5日', 14, C.green, 'middle', true))),
    },
  ], '満月から満月まで：27.3日＋2.2日＝29.5日');
})();

figures['tokyo_chuo_rika_009'] = (() => {
  const sky = (): E[] => [ln(20, 128, 300, 128, C.ink, false, 2), lb(50, 142, '東', 12, C.ink, 'middle', true), lb(160, 142, '南', 12, C.ink, 'middle', true), lb(270, 142, '西', 12, C.ink, 'middle', true)];
  const m = (x: number, t: string): E => ci(x, 70, 12, t, C.main, FILL.yellow, 8);
  return show([
    {
      note: 'ある日の夕方18時ごろ、南の空に上弦（じょうげん）の月が見えました。❓3日後の同じ時刻に、月はどの方角に見えるでしょう。（図は南の空を向いて見上げたところで、左が東、右が西です）',
      add: [...sky(), ...moonShape(160, 70, 14, 'right'), lb(160, 98, '今日（上弦）', 10, C.ink, 'middle', true), ...band(150, lb(160, 178, '3日後の同じ時刻、月はどこ？', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓月は1日の中で、空をどう動いて見える？→太陽と同じく、東から出て南を通り西へ動いて見えます。これは地球が1日に1回自転しているからです。',
      add: [ar(110, 40, 220, 40, C.gray, true), lb(160, 26, '1日の動き：東 → 南 → 西', 10, C.gray, 'middle', true), ...band(150, lb(160, 178, '1日の動き ＝ 東 → 南 → 西（自転）', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓でも、月は毎日同じ場所にいる？→いいえ。月は地球のまわりを、西から東へ、約27日で1周しています。1日では 360÷27＝約13度、東へ進みます。',
      add: [ar(146, 108, 100, 108, C.blue), lb(122, 120, '月の公転：1日に約13度', 9, C.blue, 'middle', true), ...band(150, lb(160, 178, '月は 西 → 東 へ、1日に約13度', 13, C.blue, 'middle', true))],
    },
    {
      note: '❓そうすると、次の日の同じ時刻には？→月は13度ぶん東へ進んだ場所にいます。つまり、昨日より東寄り（図では左）に見えます。',
      add: [m(141, '1'), ...band(150, lb(160, 172, '1日後：約13度 東寄り', 13, C.blue, 'middle', true), lb(160, 200, '（丸の数字 ＝ 何日後か）', 11, C.gray))],
    },
    {
      note: '❓3日後は？→13度×3＝約39度、東寄りにずれます。図では、1日ごとに左へ少しずつ動いていきます。',
      add: [m(122, '2'), m(103, '3'), ...band(150, lb(160, 172, '13度 × 3日 ＝ 約39度 東寄り', 14, C.blue, 'middle', true), lb(160, 200, '（南より東寄りに見える）', 11, C.gray))],
    },
    {
      note: '❓本当にそうなる？（確かめ）→7日たつと 13度×7＝約90度、つまり真東です。上弦の7日後は満月で、満月が夕方に東の空からのぼってくることと、ぴったり合います。',
      add: [ci(34, 116, 11, '7', C.main, FILL.yellow, 8), lb(34, 100, '満月', 9, C.ink, 'middle', true), ...band(150, lb(160, 172, '13度 × 7日 ＝ 約90度 ＝ 真東', 13, C.blue, 'middle', true), lb(160, 200, '満月は夕方、東からのぼる ✓', 12, C.green, 'middle', true))],
    },
    {
      note: '答えは「南の空より東寄り（東の空に近い方向）」。❓まちがいやすい点は？→西寄りではありません。月は毎日、同じ時刻には東へずれていきます。そのため、月の出は毎日約50分ずつおそくなります。',
      add: band(150, bx(20, 162, 130, 34, '×西寄り', C.red, FILL.red, 13), bx(170, 162, 130, 34, '○東寄り', C.green, FILL.green, 14), lb(160, 216, '月の出は毎日約50分おそくなる', 11, C.gray)),
    },
  ], '月は1日に約13度、東へ進む：同じ時刻には東寄りに見える');
})();

// ════════════════ 算数 ════════════════
figures['tokyo_meidai_sansu_003'] = tri180(55, 65);
figures['tokyo_aoyama_sansu_003'] = tri180(55, 65);
figures['tokyo_meidai_sansu_008'] = rectDiag(8, 12);
figures['tokyo_hosei_sansu_007'] = rectDiag(8, 12);
figures['tokyo_aoyama_sansu_006'] = rectDiag(6, 9);

figures['tokyo_meidai_sansu_005'] = tsuru({ n: 20, cheap: 'みかん', dear: 'りんご', pc: 50, pd: 80, total: 1360, unit: '個', askCheap: false, intro: '1個80円のりんごと1個50円のみかんを、合わせて20個買いました。代金の合計は1360円です。❓りんごは何個買ったでしょう。' });
figures['tokyo_chuo_sansu_010'] = tsuru({ n: 15, cheap: '80円のペン', dear: '120円のペン', pc: 80, pd: 120, total: 1440, unit: '本', askCheap: true, intro: '1本80円のペンと1本120円のペンを、合わせて15本買いました。代金の合計は1440円です。❓80円のペンは何本買ったでしょう。' });

figures['tokyo_meidai_sansu_006'] = show([
  {
    note: '定価2400円の品物を2割引きで売り、さらにその値段から1割引きにします。❓最終的な販売価格はいくらでしょう。',
    add: [...flow(['定価\n2400円', '2割引き後\n？円', 'さらに1割引き\n？円'], 40, { h: 48, size: 12 }).flat(), ...band(150, lb(160, 178, '最後のねだんは？', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓「2割引き」とは？→全体を10として、そのうち2をひくことです（1割は10分の1）。残りは 10−2＝8 で、もとのねだんの8割になります。',
    add: [...fresh(lb(160, 28, '2400円 ＝ 10こ分', 12, C.ink, 'middle', true), ...bar10(40, 8)), lb(232, 78, '2こ引く', 10, C.red, 'middle', true), lb(112, 78, '8こ残る', 10, C.blue, 'middle', true), ...band(150, lb(160, 178, '2割引き → 残りは8割', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓8割は何円？→1割は 2400÷10＝240円。8割は 240×8＝1920円です。',
    add: [...fresh(lb(160, 28, '2400円 ＝ 10こ分（1こ＝240円）', 12, C.ink, 'middle', true), ...bar10(40, 8, '240')), ...band(150, bx(40, 162, 240, 34, '240 × 8 ＝ 1920円', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓さらに1割引きは、何円の1割？→ここが大切です。2400円の1割ではなく、いまのねだん1920円の1割を引きます。割合は、そのときのねだんをもとにして考えるからです。',
    add: [...fresh(lb(160, 28, '1920円 ＝ 10こ分（1こ＝192円）', 12, C.ink, 'middle', true), ...bar10(40, 9, '192')), ...band(150, lb(160, 172, '1割 ＝ 1920 ÷ 10 ＝ 192円', 14, C.red, 'middle', true), lb(160, 200, '（2400円の1割ではない）', 11, C.gray))],
  },
  {
    note: '❓では、いくらになる？→1920−192＝1728円。または、残り9割なので 1920×0.9＝1728円でも同じです。',
    add: band(150, bx(30, 160, 260, 34, '1920 − 192 ＝ 1728円', C.green, FILL.green, 15), lb(160, 216, '1920 × 0.9 ＝ 1728円', 12, C.gray)),
  },
  {
    note: '❓「3割引き（2400×0.7＝1680円）」にならないのはなぜ？→2回目の1割は192円で、2400円の1割の240円より小さいからです。2割引きのあとに1割引きしても、合わせた値引きは3割にはなりません。',
    add: fresh(bx(30, 26, 260, 30, '×3割引き：2400×0.7＝1680円（引きすぎ）', C.red, FILL.red, 12), bx(30, 70, 260, 30, '2回目の1割は 240円ではなく 192円', C.gray, FILL.gray, 12), bx(30, 114, 260, 30, '引いた合計：480＋192＝672円（3割は720円）', C.blue, FILL.blue, 11), ...band(150, lb(160, 178, '1回目の引き：2400×0.2＝480円', 12, C.ink, 'middle', true))),
  },
  {
    note: '答えは1728円。❓確かめ→2400×0.8×0.9＝2400×0.72＝1728円。合わせて28％の値引きで、2400×0.28＝672円、2400−672＝1728円と一致します。',
    add: band(150, lb(160, 170, '2400 × 0.8 × 0.9 ＝ 2400 × 0.72', 13, C.ink, 'middle', true), lb(160, 198, '＝ 1728円 ✓', 15, C.green, 'middle', true)),
  },
], '2割引きのあと1割引き：そのときのねだんをもとにする（1920→1728円）');

figures['tokyo_aoyama_sansu_001'] = show([
  {
    note: 'ある品物の定価は1200円です。この品物を2割引きで売ります。❓売り値はいくらでしょう。',
    add: [...flow(['定価\n1200円', '2割引きで売る', '売り値\n？円'], 40, { h: 48, size: 12 }).flat(), ...band(150, lb(160, 178, '売り値 ＝ ？円', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓「1割」とは？→全体を10に分けたときの1つぶん、つまり10分の1のことです。「2割」は10分の2。定価1200円を10こに分けて考えます。',
    add: [...fresh(lb(160, 28, '1200円 ＝ 10こ分', 12, C.ink, 'middle', true), ...bar10(40, 10)), ...band(150, lb(160, 178, '1割 ＝ 10分の1', 14, C.ink, 'middle', true))],
  },
  {
    note: '❓1割は何円？→1200÷10＝120円です。1こぶんが120円になります。',
    add: [...fresh(lb(160, 28, '1200円 ＝ 10こ分（1こ＝120円）', 12, C.ink, 'middle', true), ...bar10(40, 10, '120')), ...band(150, bx(40, 162, 240, 34, '1200 ÷ 10 ＝ 120円', C.blue, FILL.blue, 15))],
  },
  {
    note: '❓2割引きで引くのは？→2こぶん。120×2＝240円を引きます。',
    add: [...fresh(lb(160, 28, '2こぶんを引く', 12, C.red, 'middle', true), ...bar10(40, 8, '120')), ...band(150, bx(40, 162, 240, 34, '120 × 2 ＝ 240円 引く', C.red, FILL.red, 15))],
  },
  {
    note: '❓売り値は？→1200−240＝960円です。',
    add: band(150, bx(40, 162, 240, 34, '1200 − 240 ＝ 960円', C.green, FILL.green, 16)),
  },
  {
    note: '❓別の方法でも出せる？→2割を引くと、残りは 10−2＝8こぶん（8割）です。1こ120円が8こで 120×8＝960円。同じ答えになりました。',
    add: [...fresh(lb(160, 28, '残り8こぶん（8割）', 12, C.blue, 'middle', true), ...bar10(40, 8, '120')), ...band(150, lb(160, 172, '120 × 8 ＝ 960円', 15, C.green, 'middle', true), lb(160, 200, '（1200 × 0.8 ＝ 960円）', 11, C.gray))],
  },
  {
    note: '答えは960円。❓まちがいやすい点は？→1440円は「2割増し」の値段です。また、1200−120＝1080円（1割だけ引く）や、240円（引いた額）を答えにしないこと。聞かれているのは売り値です。確かめは 960＋240＝1200円。',
    add: band(150, bx(20, 162, 130, 34, '×1440円（2割増し）', C.red, FILL.red, 12), bx(170, 162, 130, 34, '○960円', C.green, FILL.green, 16), lb(160, 216, '960 ＋ 240 ＝ 1200 ✓', 11, C.gray)),
  },
], '2割引き：1200円の8割＝120×8＝960円');

figures['tokyo_hosei_sansu_001'] = (() => {
  const q = (nRed: number, text?: string, label = true): E[] =>
    Array.from({ length: 4 }, (_, i) => bx(40 + i * 60, 40, 60, 40, label ? text : undefined, i < 4 - nRed ? C.blue : C.red, i < 4 - nRed ? FILL.blue : FILL.red, 12));
  return show([
    {
      note: 'ある品物の定価は2400円です。この品物を定価の25％引きで売ります。❓売り値はいくらでしょう。',
      add: [...flow(['定価\n2400円', '25％引きで売る', '売り値\n？円'], 40, { h: 48, size: 12 }).flat(), ...band(150, lb(160, 178, '売り値 ＝ ？円', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓「25％」とは？→全体を100としたときの25のことで、25÷100＝4分の1です。❓なぜ4分の1？→100の中に25がちょうど4つ入る（25×4＝100）からです。だから全体を4つに分ければ、1つぶんが25％です。',
      add: [...fresh(lb(160, 26, '全体 ＝ 100％ ＝ 25％が4つ', 12, C.ink, 'middle', true), ...q(1, '25％')), ...band(150, lb(160, 178, '25％ ＝ 4分の1', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓2400円を4つに分けると？→1つぶんは 2400÷4＝600円です。',
      add: [...fresh(lb(160, 26, '2400円 ＝ 4つ分（1つ＝600円）', 12, C.ink, 'middle', true), ...q(1, '600')), ...band(150, bx(40, 162, 240, 34, '2400 ÷ 4 ＝ 600円', C.blue, FILL.blue, 15))],
    },
    {
      note: '❓25％引きでは、どれを引く？→4つのうち1つぶん（25％）を引くので、600円を引きます。',
      add: [...fresh(lb(160, 26, '赤い1つぶんを引く', 12, C.red, 'middle', true), ...q(1, '600')), ...band(150, bx(40, 162, 240, 34, '600円 引く', C.red, FILL.red, 15))],
    },
    {
      note: '❓売り値は？→2400−600＝1800円です。',
      add: band(150, bx(40, 162, 240, 34, '2400 − 600 ＝ 1800円', C.green, FILL.green, 16)),
    },
    {
      note: '❓別の方法でも出せる？→25％を引くと、残りは75％、つまり4つのうち3つぶんです。600×3＝1800円。同じ答えになりました。',
      add: [...fresh(lb(160, 26, '残り3つぶん（75％）', 12, C.blue, 'middle', true), ...q(1, '600')), ...band(150, lb(160, 172, '600 × 3 ＝ 1800円', 15, C.green, 'middle', true), lb(160, 200, '（2400 × 0.75 ＝ 1800円）', 11, C.gray))],
    },
    {
      note: '答えは1800円。❓まちがいやすい点は？→25は「25円」ではなく「25％」です。2400−25＝2375円としないこと。確かめは 1800＋600＝2400円。',
      add: band(150, bx(20, 162, 130, 34, '×2400−25＝2375円', C.red, FILL.red, 11), bx(170, 162, 130, 34, '○1800円', C.green, FILL.green, 16), lb(160, 216, '1800 ＋ 600 ＝ 2400 ✓', 11, C.gray)),
    },
  ], '25％引き：4つに分けて1つ引く（2400−600＝1800円）');
})();

figures['tokyo_chuo_sansu_001'] = (() => {
  const bars = (n: number): E[] => {
    const all: E[] = [bx(40, 26, 100, 24, '原価 1', C.blue, FILL.blue, 12), bx(40, 58, 130, 24, '定価 1＋0.3＝1.3', C.main, FILL.warm, 11), bx(40, 90, 104, 24, '売値 1.04', C.green, FILL.green, 11)];
    return all.slice(0, n);
  };
  return show([
    {
      note: 'ある品物に、原価（仕入れのねだん）の3割増しの定価をつけ、その定価から2割引きで売ったところ、利益は240円でした。❓原価はいくらでしょう。',
      add: [...flow(['原価\n？円', '3割増しで\n定価', '2割引きで\n売る'], 30, { h: 48, size: 12 }).flat(), ...band(150, lb(160, 178, '売ったときの利益 ＝ 240円', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓割合の問題で、何が大切？→「何をもとにするか」です。「3割増し」は原価をもとに、「2割引き」は定価をもとにします。もとが、ちがっていますね。',
      add: fresh(bx(20, 40, 130, 44, '3割増し\nもと ＝ 原価', C.blue, FILL.blue, 12), bx(170, 40, 130, 44, '2割引き\nもと ＝ 定価', C.red, FILL.red, 12), ...band(150, lb(160, 178, 'もとが、ちがう！', 14, C.red, 'middle', true))),
    },
    {
      note: '❓原価を「1」とすると、定価は？→3割増しは、原価1に3割（0.3）を足すことなので、1＋0.3＝1.3です。（棒の長さは、1を100めもりで表しています）',
      add: fresh(...bars(2), ...band(150, lb(160, 178, '定価 ＝ 原価 1 ＋ 0.3 ＝ 1.3', 14, C.main, 'middle', true))),
    },
    {
      note: '❓売値は？→2割引きは、定価1.3の8割です。1.3×0.8＝1.04。❓なぜ0.8？→定価1.3を10こに分けて、2こ引くと8こ残るからです。',
      add: [...fresh(...bars(3)), ...band(150, lb(160, 172, '売値 ＝ 1.3 × 0.8 ＝ 1.04', 14, C.green, 'middle', true), lb(160, 200, '（定価を10こに分けて、8こ残す）', 11, C.gray))],
    },
    {
      note: '❓利益は？→利益＝売値−原価なので、1.04−1＝0.04です。この0.04が240円にあたります。（棒では、原価より少しだけ長い部分です）',
      add: [ar(146, 126, 142, 116, C.red), lb(150, 138, '0.04 ＝ 240円', 11, C.red, 'start', true), ...band(150, lb(160, 178, '利益 ＝ 1.04 − 1 ＝ 0.04', 14, C.red, 'middle', true))],
    },
    {
      note: '❓0.04が240円なら、「1」は何円？→0.01は 240÷4＝60円。1は0.01の100こ分なので、60×100＝6000円です。（または 240÷0.04＝6000円）',
      add: band(150, lb(160, 168, '0.01 ＝ 240 ÷ 4 ＝ 60円', 13, C.ink, 'middle', true), lb(160, 196, '1 ＝ 60 × 100 ＝ 6000円', 15, C.green, 'middle', true), lb(160, 222, '（割合が小さいほど、1の値は大きい）', 10, C.gray)),
    },
    {
      note: '答えは原価6000円。❓確かめ→6000×1.3＝7800円（定価）、7800×0.8＝6240円（売値）、6240−6000＝240円（利益）。問題の利益と合います。',
      add: band(150, lb(160, 166, '6000 × 1.3 ＝ 7800円（定価）', 12, C.main, 'middle', true), lb(160, 190, '7800 × 0.8 ＝ 6240円（売値）', 12, C.green, 'middle', true), lb(160, 214, '6240 − 6000 ＝ 240円 ✓', 13, C.red, 'middle', true)),
    },
  ], '3割増し・2割引き：原価を1とすると利益は0.04（240÷0.04＝6000円）');
})();

figures['tokyo_chuo_sansu_004'] = (() => {
  return show([
    {
      note: '定価1500円の品物を2割引きで売ったところ、それでも原価に対して2割の利益がありました。❓原価はいくらでしょう。',
      add: [...flow(['定価\n1500円', '2割引きで\n売る', '原価の2割\nの利益'], 30, { h: 48, size: 12 }).flat(), ...band(150, lb(160, 178, '原価 ＝ ？円', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓まず、売値は？→2割引きは、定価1500円の8割です。1割は 1500÷10＝150円なので、売値は 150×8＝1200円です。',
      add: fresh(lb(160, 28, '定価1500円 ＝ 10こ分（1こ＝150円）', 12, C.ink, 'middle', true), ...bar10(40, 8, '150'), ...band(150, bx(40, 162, 240, 34, '150 × 8 ＝ 1200円（売値）', C.blue, FILL.blue, 14))),
    },
    {
      note: '❓「原価に対して2割の利益」は、何をもとにする？→原価をもとにします。原価を「1」とすると、利益は0.2。だから売値は 1＋0.2＝1.2 にあたります。（棒の長さは、1を100めもりで表しています）',
      add: fresh(bx(40, 30, 100, 26, '原価 1', C.blue, FILL.blue, 12), bx(40, 66, 120, 26, '売値 1＋0.2＝1.2', C.green, FILL.green, 11), lb(170, 43, '← もと', 11, C.blue, 'start'), ...band(150, lb(160, 178, '売値 ＝ 原価の 1.2倍', 14, C.green, 'middle', true))),
    },
    {
      note: '❓売値1200円は、どの割合にあたる？→売値は 1.2 にあたります。つまり、原価の1.2倍が1200円です。',
      add: [lb(180, 79, '＝ 1200円', 12, C.red, 'start', true), ...band(150, lb(160, 178, '1.2 ＝ 1200円', 15, C.red, 'middle', true))],
    },
    {
      note: '❓では、原価（1）は？→1200÷1.2＝1000円です。❓なぜわり算？→1.2こぶんが1200円なら、1こぶんは1200を1.2でわって求められるからです。（12000÷12＝1000と考えると簡単です）',
      add: band(150, bx(40, 158, 240, 32, '1200 ÷ 1.2 ＝ 1000円', C.green, FILL.green, 15), lb(160, 214, '（求めたいのは「もとにする量」→ わり算）', 11, C.gray)),
    },
    {
      note: '❓確かめ→原価1000円の2割は200円。1000＋200＝1200円で、売値1200円と合います。定価1500円の2割引きも 1500×0.8＝1200円で一致します。',
      add: band(150, lb(160, 168, '1000 ＋ 200 ＝ 1200円（売値）', 13, C.ink, 'middle', true), lb(160, 196, '1500 × 0.8 ＝ 1200円 ✓', 13, C.green, 'middle', true)),
    },
    {
      note: '答えは1000円。❓まちがいやすい点は？→1200円は売値であって、原価ではありません。また、売値1200円から2割をひいて960円とするのは、もとにする量をまちがえています。利益の2割は「原価」をもとにします。',
      add: band(150, bx(20, 162, 130, 34, '×1200円（売値）', C.red, FILL.red, 12), bx(170, 162, 130, 34, '○1000円', C.green, FILL.green, 16), lb(160, 216, '利益の2割は、原価がもと', 11, C.gray)),
    },
  ], '原価を1とする：売値1.2が1200円（1200÷1.2＝1000円）');
})();

figures['tokyo_chuo_sansu_002'] = (() => {
  const s = 12, x0 = 50, yb = 128;
  const D: P = [x0, yb], Cc: P = [x0 + 10 * s, yb], B: P = [x0 + 8 * s, yb - 8 * s], A: P = [x0 + 2 * s, yb - 8 * s];
  const Mx = (B[0] + Cc[0]) / 2, My = (B[1] + Cc[1]) / 2;
  const fl = (p: P): P => [2 * Mx - p[0], 2 * My - p[1]];
  const trap = pg([A, B, Cc, D], C.blue, 'rgba(2,132,199,0.22)');
  const flipped = pg([fl(A), fl(B), fl(Cc), fl(D)], C.red, 'rgba(225,29,72,0.2)');
  const dims: E[] = [lb(A[0] + 3 * s, A[1] - 8, '上底 6cm', 10, C.ink, 'middle', true), lb(D[0] + 5 * s, yb + 13, '下底 10cm', 10, C.ink, 'middle', true), ln(A[0], A[1], A[0], yb, C.gray, true), lb(A[0] + 4, (A[1] + yb) / 2, '高さ 8cm', 10, C.ink, 'start', true)];
  return show([
    {
      note: '上底6cm、下底10cm、高さ8cmの台形の面積を求めます。❓どうやって求めればよいでしょう。',
      add: [trap, ...dims, ...band(150, lb(160, 180, '台形の面積 ＝ ？cm²', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓台形は、どう考えればわかりやすい？→同じ台形をもう1つ用意して、逆さにして横にくっつけます。すると、斜めの辺がぴったり合って、平行四辺形になります。',
      add: [flipped, ...band(150, lb(160, 172, '同じ台形を逆さにして、くっつける', 13, C.red, 'middle', true), lb(160, 200, '→ 平行四辺形ができる', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓できた平行四辺形の底辺は？→台形の下底10cmと、逆さにした台形の上底6cmが一直線に並ぶので、10＋6＝16cm。高さは台形と同じ8cmです。❓なぜ一直線になる？→台形の上底と下底は平行で、ぎゃくさに置くと、ちょうど向きがそろうからです。',
      add: band(150, lb(160, 170, '底辺 ＝ 下底10 ＋ 上底6 ＝ 16cm', 13, C.ink, 'middle', true), lb(160, 198, '高さ ＝ 8cm（台形と同じ）', 13, C.ink, 'middle', true)),
    },
    {
      note: '❓平行四辺形の面積は？→底辺×高さです。16×8＝128cm²。❓なぜ底辺×高さ？→平行四辺形の片はしの三角形を反対側に移すと、底辺×高さの長方形になるからです。',
      add: band(150, bx(40, 162, 240, 34, '16 × 8 ＝ 128cm²（平行四辺形）', C.purple, FILL.purple, 14)),
    },
    {
      note: '❓台形の面積は？→平行四辺形は、同じ台形2つ分です。だから台形1つの面積は、128÷2＝64cm²です。',
      add: band(150, bx(40, 162, 240, 34, '128 ÷ 2 ＝ 64cm²', C.green, FILL.green, 16)),
    },
    {
      note: '❓式にまとめると？→（上底＋下底）×高さ÷2。（6＋10）×8÷2＝16×8÷2＝64cm²。「足して、かけて、2でわる」は、いま見た「2つ並べて半分」そのものです。',
      add: band(150, lb(160, 170, '（上底 ＋ 下底）× 高さ ÷ 2', 13, C.ink, 'middle', true), lb(160, 198, '（6 ＋ 10）× 8 ÷ 2 ＝ 64cm²', 14, C.green, 'middle', true)),
    },
    {
      note: '答えは64cm²。❓別の方法で確かめよう→台形を対角線で2つの三角形に分けます。底辺10cm・高さ8cmの三角形は10×8÷2＝40cm²、底辺6cm・高さ8cmの三角形は6×8÷2＝24cm²。40＋24＝64cm²で同じ答えになります。',
      add: [...fresh(trap, ln(A[0], A[1], Cc[0], Cc[1], C.red, true, 2), lb(D[0] + 4 * s, yb - 18, '40cm²', 11, C.blue, 'middle', true), lb(A[0] + 5 * s, A[1] + 26, '24cm²', 11, C.red, 'middle', true)), ...band(150, lb(160, 178, '40 ＋ 24 ＝ 64cm² ✓', 15, C.green, 'middle', true))],
    },
  ], '台形の面積：（上底＋下底）×高さ÷2＝64cm²');
})();

figures['tokyo_chuo_sansu_005'] = (() => {
  const A: P = [160, 18], B: P = [50, 138], Cc: P = [270, 138];
  const at = (p: P, q: P, t: number): P => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
  const Dp = at(A, B, 0.4), Ep = at(A, Cc, 0.4);
  const grid: E[] = [];
  for (let k = 1; k <= 4; k++) {
    const t = k / 5;
    grid.push(ln(...at(A, B, t), ...at(A, Cc, t), C.gray, false, 1));
    grid.push(ln(...at(A, B, t), ...at(B, Cc, 1 - t), C.gray, false, 1));
    grid.push(ln(...at(A, Cc, t), ...at(B, Cc, t), C.gray, false, 1));
  }
  const tri: E[] = [pg([A, B, Cc], C.blue, FILL.blue), pg([A, Dp, Ep], C.red, FILL.red)];
  const names: E[] = [lb(A[0], A[1] - 6, 'A', 11, C.ink, 'middle', true), lb(Dp[0] - 10, Dp[1], 'D', 11, C.ink, 'end', true), lb(Ep[0] + 10, Ep[1], 'E', 11, C.ink, 'start', true), lb(B[0] - 6, B[1] + 4, 'B', 11, C.ink, 'end', true), lb(Cc[0] + 6, Cc[1] + 4, 'C', 11, C.ink, 'start', true)];
  return show([
    {
      note: '三角形ABCの辺AB上に点D、辺AC上に点Eをとり、DEはBCに平行です。AD：DB＝2：3のとき、❓三角形ADE（赤）と台形DBCE（青）の面積の比を求めます。',
      add: [...tri, ...names, ...band(150, lb(160, 178, '三角形ADE ： 台形DBCE ＝ ？', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓三角形ADEと三角形ABCは、どんな関係？→DEとBCが平行なので、同じ形（相似）です。❓ADとABの比は？→AD：DB＝2：3なので、AB全体は 2＋3＝5。AD：AB＝2：5です。',
      add: band(150, lb(160, 168, 'AD ： AB ＝ 2 ： （2＋3）＝ 2 ： 5', 13, C.ink, 'middle', true), lb(160, 196, '三角形ADE と 三角形ABC は同じ形', 12, C.red, 'middle', true)),
    },
    {
      note: '❓長さの比が2：5のとき、面積の比は？→辺を5等分して、辺に平行な線を引くと、三角形ABCが同じ大きさの小さな三角形に分かれます。上から1こ、3こ、5こ、7こ、9こと、ならびます。',
      add: [...grid, ...band(150, lb(160, 170, '1 ＋ 3 ＋ 5 ＋ 7 ＋ 9 ＝ 25こ', 14, C.ink, 'middle', true), lb(160, 198, '（5×5＝25。長さが5なら面積は5×5）', 11, C.gray))],
    },
    {
      note: '❓三角形ADEは、小さな三角形何こぶん？→上の2段（2等分ぶん）で、1＋3＝4こ。これは 2×2＝4です。長さの比が2なら、面積は「2×2」こぶんになります。',
      add: band(150, lb(160, 170, '三角形ADE ＝ 1 ＋ 3 ＝ 4こ（2×2）', 14, C.red, 'middle', true), lb(160, 198, '三角形ABC ＝ 25こ（5×5）', 13, C.blue, 'middle', true)),
    },
    {
      note: '❓台形DBCEは？→三角形ABC全体の25こから、三角形ADEの4こをひいて、25−4＝21こぶんです。（下の3段 5＋7＋9＝21こでもたしかめられます）',
      add: band(150, bx(40, 162, 240, 34, '台形DBCE ＝ 25 − 4 ＝ 21こ', C.blue, FILL.blue, 15)),
    },
    {
      note: '❓面積の比は？→三角形ADE：台形DBCE＝4：21です。',
      add: band(150, bx(40, 162, 240, 34, '4 ： 21', C.green, FILL.green, 18)),
    },
    {
      note: '答えは4：21。❓まちがいやすい点は？→長さの比2：3や2：5のまま答えないこと。面積の比は「長さの比を2回かけた比」です。また4：25は台形ではなく三角形ABC全体との比なので注意。確かめ：下の3段 5＋7＋9＝21。',
      add: band(150, bx(10, 162, 100, 34, '×2：3（長さの比）', C.red, FILL.red, 10), bx(118, 162, 92, 34, '×4：25（全体）', C.red, FILL.red, 10), bx(218, 162, 92, 34, '○4：21', C.green, FILL.green, 15)),
    },
  ], '相似な三角形の面積比：長さの比2：5 → 面積比4：25 → 4：21');
})();

figures['tokyo_chuo_sansu_009'] = (() => {
  const Pp: P = [160, 32], Q: P = [160, 110], R: P = [264, 110], R2: P = [56, 110];
  const ell = pg(Array.from({ length: 40 }, (_, i) => [160 + 104 * Math.cos((i / 40) * Math.PI * 2), 110 + 22 * Math.sin((i / 40) * Math.PI * 2)] as P), C.blue, 'rgba(2,132,199,0.12)');
  return show([
    {
      note: '直角をはさむ2辺が3cmと4cmの直角三角形を、3cmの辺を軸（じく）にして1回転させます。❓できる立体の体積を、πを使って求めます。',
      add: [ln(160, 22, 160, 140, C.gray, true), pg([Pp, Q, R], C.main, FILL.warm), lb(150, 72, '3cm', 11, C.ink, 'end', true), lb(212, 102, '4cm', 11, C.ink, 'middle', true), lb(160, 14, '回転の軸', 10, C.gray, 'middle', true), ...band(150, lb(160, 178, '体積 ＝ ？cm³', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓回転させるとどんな立体？→直角の角から横に出ている4cmの辺がくるっと回って円をえがき、三角形は円すいになります。図は、三角形を回してできた円すいを表しています。',
      add: [pg([Pp, Q, R2], C.main, FILL.warm), ell, ...band(150, lb(160, 178, '円すいができる', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓底面の半径と高さは、どちらが3cm？→軸からはなれていく4cmの辺が、底面の円の半径です。軸にそった3cmの辺が高さです。（軸と同じ向きの辺＝高さ、軸に直角な辺＝半径）',
      add: [ar(160, 110, 264, 110, C.red), ar(146, 108, 146, 34, C.blue), lb(212, 144, '半径 4cm', 10, C.red, 'middle', true), lb(140, 70, '高さ 3cm', 10, C.blue, 'end', true), ...band(150, lb(160, 178, '半径 4cm・高さ 3cm', 14, C.ink, 'middle', true))],
    },
    {
      note: '❓底面積は？→円の面積は「半径×半径×π」です。4×4×π＝16π（cm²）。❓なぜ半径×半径×π？→円は、半径を1辺とする正方形の約3.14こぶん（π倍）の広さだからです。',
      add: band(150, bx(40, 162, 240, 34, '底面積 ＝ 4 × 4 × π ＝ 16π cm²', C.blue, FILL.blue, 14)),
    },
    {
      note: '❓円すいの体積は？→まず、同じ底面・同じ高さの円柱の体積は、16π×3＝48π（cm³）です。❓円すいは？→円柱のちょうど3分の1の体積になります。同じ入れ物に水を入れると、円すい3はいで円柱がいっぱいになります。',
      add: fresh(bx(40, 26, 100, 84, '円柱\n16π × 3\n＝ 48π', C.blue, FILL.blue, 12), bx(180, 26, 100, 84, '円すい\n円柱の\n3分の1', C.red, FILL.red, 12), lb(160, 70, '→', 18, C.ink, 'middle', true), ...band(150, lb(160, 178, '円すい ＝ 円柱 ÷ 3', 14, C.ink, 'middle', true))),
    },
    {
      note: '❓計算は？→底面積×高さ÷3＝16π×3÷3＝16π（cm³）。3をかけてから3でわるので、16πのまま残ります。',
      add: band(150, lb(160, 170, '16π × 3 ÷ 3', 14, C.ink, 'middle', true), lb(160, 198, '＝ 16π cm³', 16, C.green, 'middle', true)),
    },
    {
      note: '答えは16πcm³。❓まちがいやすい点は？→半径と高さを逆にして 3×3×π×4÷3＝12π としないこと（12πは3cmを半径と考えた場合）。÷3を忘れると48πになります。',
      add: band(150, bx(10, 162, 94, 34, '×12π（逆）', C.red, FILL.red, 12), bx(112, 162, 94, 34, '×48π（÷3忘れ）', C.red, FILL.red, 10), bx(214, 162, 96, 34, '○16π', C.green, FILL.green, 15)),
    },
  ], '円すいの体積：半径4cm・高さ3cm → 16π×3÷3＝16πcm³');
})();

figures['tokyo_aoyama_sansu_007'] = (() => {
  const top = (gridOn: boolean): E[] => {
    const g: E[] = [];
    if (gridOn) for (let i = 1; i < 6; i++) g.push(ln(40 + i * 20, 20, 40 + i * 20, 140, DIM, false, 1), ln(40, 20 + i * 20, 160, 20 + i * 20, DIM, false, 1));
    return [bx(40, 20, 120, 120, undefined, C.main, FILL.warm), ...g, bx(80, 60, 40, 40, undefined, C.red, FILL.red)];
  };
  const side = (hole = false): E[] => [bx(190, 20, 120, 120, undefined, C.main, FILL.warm), hole ? bx(230, 20, 40, 120, undefined, C.red, FILL.red) : ln(230, 20, 230, 140, C.red, true), ...(hole ? [] : [ln(270, 20, 270, 140, C.red, true)])];
  return show([
    {
      note: '1辺6cmの立方体から、底面が1辺2cmの正方形で高さ6cmの直方体（ちょくほうたい）を、まっすぐくりぬきます。❓残った立体の体積を求めます。',
      add: [...top(false), ...side(false), ...band(150, lb(100, 164, '上から見た図', 11, C.ink, 'middle', true), lb(250, 164, '横から見た図', 11, C.ink, 'middle', true), lb(160, 196, '残った立体の体積 ＝ ？cm³', 13, C.ink, 'middle', true))],
    },
    {
      note: '❓まず、立方体の体積は？→底面積は 6×6＝36cm²、高さ6cmなので 36×6＝216cm³です。❓なぜ底面積×高さ？→1cm²の底面に、1cm³のつみ木が6こ積めて、それが36列ぶんあるからです。',
      add: [...top(true), ...band(150, lb(160, 175, '立方体：6 × 6 × 6 ＝ 216cm³', 14, C.main, 'middle', true))],
    },
    {
      note: '❓くりぬかれた部分は、どんな形？→穴の高さ6cmは立方体の高さと同じなので、穴は上から下までつきぬけています。底面が2cm×2cm、高さ6cmの直方体です。',
      add: [...side(true), ...band(150, lb(160, 170, '穴 ＝ 底面 2cm×2cm、高さ 6cm', 13, C.red, 'middle', true), lb(160, 198, '（上から下までつきぬけ）', 12, C.gray))],
    },
    {
      note: '❓穴の体積は？→底面積は 2×2＝4cm²、高さは6cmなので 4×6＝24cm³です。',
      add: band(150, bx(40, 162, 240, 34, '穴：2 × 2 × 6 ＝ 24cm³', C.red, FILL.red, 15)),
    },
    {
      note: '❓残った立体の体積は？→もとの立方体から穴の部分を取りのぞいたので、216−24＝192cm³です。',
      add: band(150, bx(40, 162, 240, 34, '216 − 24 ＝ 192cm³', C.green, FILL.green, 16)),
    },
    {
      note: '❓別の方法でたしかめよう→上から見た形（正方形から穴をひいた形）の面積は 6×6−2×2＝36−4＝32cm²。この形が上から下まで同じ形で6cmつながっているので、32×6＝192cm³。同じ答えになりました。',
      add: [...fresh(bx(40, 20, 120, 120, undefined, C.blue, FILL.blue), bx(80, 60, 40, 40, '穴', C.red, '#FFFFFF', 12), lb(250, 60, '上から見た形', 11, C.ink, 'middle', true), lb(250, 76, '36 − 4 ＝ 32cm²', 12, C.blue, 'middle', true), lb(250, 102, '高さ 6cm', 11, C.ink, 'middle', true)), ...band(150, lb(160, 178, '32 × 6 ＝ 192cm³ ✓', 15, C.green, 'middle', true))],
    },
    {
      note: '答えは192cm³。❓まちがいやすい点は？→穴の高さを忘れて 216−2×2＝212 のように、体積から面積をひいてしまうことです。体積どうし（216cm³−24cm³）でひくのが大切です。',
      add: band(150, bx(20, 162, 130, 34, '×216−4＝212', C.red, FILL.red, 13), bx(170, 162, 130, 34, '○216−24＝192', C.green, FILL.green, 13), lb(160, 216, '体積から引くのは体積', 11, C.gray)),
    },
  ], 'くりぬいた立体：216−2×2×6＝192cm³');
})();

export const figuresSchoolChugaku09: Record<string, Figure> = figures;
