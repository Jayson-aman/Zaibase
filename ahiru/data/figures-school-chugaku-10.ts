// 中学受験の入試傾向問題（算数・理科）に付ける「動く図解スライド」。キーは問題 id。
// 画面の上半分に図、下の帯（band）にそのスライドの式やひとこと、という配置にそろえてある。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, flow } from './diagram-kit';

const tx = (y: number, s: string, size = 12, color: string = C.ink, bold = false) => lb(160, y, s, size, color, 'middle', bold);
const bb = (y: number, text: string, color: string, fill: string, size = 14, x = 30, w = 260, h = 30) => bx(x, y, w, h, text, color, fill, size);

// ─────────── 月の満ち欠け（地球を中心にした、軌道の上から見た図） ───────────
const OC = { x: 160, y: 76, R: 50 };
const opos = (deg: number) => ({ x: OC.x + OC.R * Math.cos((deg * Math.PI) / 180), y: OC.y - OC.R * Math.sin((deg * Math.PI) / 180) });
// 新月=180度（太陽がわ）、上弦=270度、満月=0度、下弦=90度
const moonDot = (deg: number, r = 8): DiagramElement[] => {
  const p = opos(deg);
  return [ci(p.x, p.y, r, undefined, C.gray, '#FFFFFF'), sc(p.x, p.y, r, 90, 270, C.gray, '#FDE68A')];
};
const sunEarth = (): DiagramElement[] => [
  ci(OC.x, OC.y, OC.R, undefined, C.gray, '#FFFFFF'),
  ci(OC.x, OC.y, 14, '地球', C.blue, FILL.blue, 8),
  ci(22, OC.y, 15, '太陽', C.red, FILL.red, 9),
  ar(44, OC.y - 24, 88, OC.y - 24, C.main),
  ar(44, OC.y, 88, OC.y, C.main),
  ar(44, OC.y + 24, 88, OC.y + 24, C.main),
  lb(66, OC.y - 31, '太陽の光', 8, C.main),
];
const phLab = (deg: number, t: string, color: string = C.ink): DiagramElement => {
  const p = opos(deg);
  const off = deg === 180 ? [21, 0] : deg === 0 ? [-21, 0] : deg === 90 ? [0, 21] : [0, -20];
  return lb(p.x + off[0], p.y + off[1] + 4, t, 9, color, 'middle', true);
};
const arcArrow = (cx: number, cy: number, R: number, from: number, to: number, color: string): DiagramElement[] => {
  const out: DiagramElement[] = [];
  const pt = (d: number) => [cx + R * Math.cos((d * Math.PI) / 180), cy - R * Math.sin((d * Math.PI) / 180)];
  const step = 15;
  for (let a = from; a < to; a += step) {
    const n = Math.min(a + step, to);
    const p = pt(a), q = pt(n);
    out.push(n === to ? ar(p[0], p[1], q[0], q[1], color) : ln(p[0], p[1], q[0], q[1], color, false, 2));
  }
  return out;
};
const moonShape = (x: number, y: number, r: number, label: string): DiagramElement[] => [
  ci(x, y, r, undefined, C.gray, '#FFFFFF'), sc(x, y, r, 90, 270, C.gray, '#FDE68A'), lb(x, y + r + 14, label, 10, C.ink, 'middle', true),
];

// ─────────── 三角形の内角の和 ───────────
const cot = (d: number) => 1 / Math.tan((d * Math.PI) / 180);
function angleFig(b: number, c: number, nm: [string, string, string] | null, cap: string) {
  const t = 180 - b - c;
  const s = b + c;
  const h = 100, yb = 135;
  const L = h * (cot(b) + cot(c));
  const Bp = { x: 160 - L / 2, y: yb };
  const Cp = { x: 160 + L / 2, y: yb };
  const A = { x: Bp.x + h * cot(b), y: yb - h };
  const tri = pg([[A.x, A.y], [Bp.x, Bp.y], [Cp.x, Cp.y]], C.main, FILL.warm);
  const midX = A.x + (28 * (cot(c) - cot(b))) / 2;
  const base: DiagramElement[] = [
    tri,
    lb(Bp.x + 24, Bp.y - 7, `${b}°`, 10, C.blue, 'middle', true),
    lb(Cp.x - 24, Cp.y - 7, `${c}°`, 10, C.green, 'middle', true),
    lb(midX, A.y + 28, '？', 12, C.red, 'middle', true),
    ...(nm ? [lb(Bp.x - 10, Bp.y + 4, nm[0], 11, C.ink, 'middle', true), lb(Cp.x + 10, Cp.y + 4, nm[1], 11, C.ink, 'middle', true), lb(A.x, A.y - 8, nm[2], 11, C.ink, 'middle', true)] : []),
  ];
  const x0 = 30, W = 260;
  const wb = (W * b) / 180, wc = (W * c) / 180, wt = (W * t) / 180;
  const bar = (third: string): DiagramElement[] => [
    lb(160, 34, '三角形の3つの角の和', 12, C.ink, 'middle', true),
    bx(x0, 52, wb, 34, `${b}°`, C.blue, FILL.blue, 12),
    bx(x0 + wb, 52, wc, 34, `${c}°`, C.green, FILL.green, 12),
    bx(x0 + wb + wc, 52, wt, 34, third, C.red, FILL.red, 12),
    ln(x0, 98, x0 + W, 98, C.ink, false, 2),
    lb(160, 118, '＝ 180度', 14, C.ink, 'middle', true),
  ];
  const who = nm ? `三角形ABCで、角Aが${b}度、角Bが${c}度です。角Cは何度でしょう。` : `三角形の2つの角が${b}度と${c}度です。残りの角（？）は何度でしょう。`;
  return show([
    {
      note: `${who}❓まず、三角形の3つの角をたすと、いつもいくつになるのでしょう。`,
      add: [...base, ...band(150, tx(180, '残りの角 ＝ ？度', 14, C.red, true))],
    },
    {
      note: `❓なぜ和はいつも決まっているの？→頂点（ちょうてん）を通って底辺に平行な線を引きます。❓左右の角は？→平行線にはさまれた「錯角（さっかく）」は等しいので、左は${b}度、右は${c}度と同じです。`,
      add: [ln(A.x - 75, A.y, A.x + 75, A.y, C.ink, true, 1.5), lb(A.x - 24, A.y + 11, `${b}°`, 10, C.blue, 'middle', true), lb(A.x + 24, A.y + 11, `${c}°`, 10, C.green, 'middle', true), ...band(150, tx(176, '平行線の錯角は等しい', 13, C.purple, true), tx(202, '左の角 ＝ 左下の角、右の角 ＝ 右下の角', 11, C.gray))],
    },
    {
      note: `❓この3つの角をあわせると？→頂点に集まった3つの角は、ぴったり一直線になります。一直線は180度です。つまり三角形の3つの角の和は180度です。`,
      add: [ln(A.x - 75, A.y, A.x + 75, A.y, C.red, false, 2.5), ...band(150, tx(180, '3つの角をあわせて 一直線 ＝ 180度', 13, C.red, true))],
    },
    {
      note: `❓今の三角形だけの話？→どんな三角形でも同じように平行線が引けるので、和はいつも180度です。❓では、残りの角は？→180度の全体から、${b}度と${c}度をとった残りです。`,
      add: fresh(...bar('？')),
    },
    {
      note: `❓なぜひき算を使うの？→180度全体のうち、わかっている2つの角をとれば、残りが出るからです。まず2つの角をたします。${b}＋${c}＝${s}度。`,
      add: band(150, bb(166, `${b} ＋ ${c} ＝ ${s}度（わかっている2つ）`, C.blue, FILL.blue, 13)),
    },
    {
      note: `180度から${s}度をひきます。180−${s}＝${t}度。`,
      add: [bx(x0 + wb + wc, 52, wt, 34, `${t}°`, C.green, FILL.green, 12), ...band(150, bb(166, `180 − ${s} ＝ ${t}度`, C.green, FILL.green, 15))],
    },
    {
      note: `答えは${t}度。❓検算は？→3つの角をたすと ${b}＋${c}＋${t}＝180度で、内角の和と同じです。❓よくあるまちがいは？→四角形の360度からひいてしまうこと。三角形は180度です。`,
      add: band(150, tx(172, `${b} ＋ ${c} ＋ ${t} ＝ 180度 ✓`, 14, C.green, true), tx(200, '三角形は180度（360度は四角形）', 12, C.red)),
    },
  ], cap);
}

// ─────────── 回路（豆電球・電池） ───────────
const wire = (x1: number, y1: number, x2: number, y2: number, col: string = C.ink) => ln(x1, y1, x2, y2, col, false, 2);
const bulbC = (x: number, y: number, t?: string, col: string = C.main, fill: string = FILL.yellow) => ci(x, y, 11, t, col, fill, 10);
const battC = (x: number, y: number) => bx(x - 15, y - 10, 30, 20, '電池', C.blue, FILL.blue, 9);
const circH = (n: number) => (n - 1) * 38 + 34;
/** 直列：1本道。上の線に豆電球、下の線に電池。open は外した豆電球の番号。 */
const serC = (x0: number, y0: number, w: number, n: number, labels: string[] = [], col: string = C.ink, h = circH(n), open = -1): DiagramElement[] => {
  const x1 = x0 + w, y1 = y0 + h;
  const out: DiagramElement[] = [wire(x0, y0, x1, y0, col), wire(x1, y0, x1, y1, col), wire(x1, y1, x0, y1, col), wire(x0, y1, x0, y0, col)];
  for (let i = 0; i < n; i++) {
    const cx = x0 + (w * (i + 1)) / (n + 1);
    if (i === open) out.push(cover11(cx, y0));
    else out.push(bulbC(cx, y0, labels[i]));
  }
  out.push(battC(x0 + w / 2, y1));
  return out;
};
const cover11 = (x: number, y: number) => bx(x - 13, y - 4, 26, 8, undefined, '#FFFFFF', '#FFFFFF');
/** 並列：道がn本に分かれる。上から順に豆電球、いちばん下の線に電池。 */
const parC = (x0: number, y0: number, w: number, n: number, labels: string[] = [], col: string = C.ink, open = -1): DiagramElement[] => {
  const x1 = x0 + w;
  const yb = y0 + (n - 1) * 38 + 34;
  const out: DiagramElement[] = [wire(x0, y0, x0, yb, col), wire(x1, y0, x1, yb, col), wire(x0, yb, x1, yb, col)];
  for (let i = 0; i < n; i++) {
    const y = y0 + i * 38;
    out.push(wire(x0, y, x1, y, col));
    if (i === open) out.push(cover11(x0 + w / 2, y));
    else out.push(bulbC(x0 + w / 2, y, labels[i]));
  }
  out.push(battC(x0 + w / 2, yb));
  return out;
};
const SX = 14, PX = 176, CW = 130;

// ─────────── てこ ───────────
function leverFig(p: { lw: number; ld: number; rd: number; ans: number; px: number; sc: number; barL: number; barR: number; extra: string }, cap: string) {
  const { lw, ld, rd, ans, px } = p;
  const power = lw * ld;
  const xl = px - ld * p.sc, xr = px + rd * p.sc;
  const frame = (right: string, rightColor: string, rightFill: string): DiagramElement[] => [
    bx(p.barL, 92, p.barR - p.barL, 8, undefined, C.ink, FILL.gray),
    pg([[px, 100], [px - 12, 124], [px + 12, 124]], C.gray, FILL.gray),
    ln(xl, 100, xl, 112, C.gray, false, 1.5), bx(xl - 20, 112, 40, 28, `${lw}g`, C.main, FILL.warm, 12),
    ln(xr, 100, xr, 112, C.gray, false, 1.5), bx(xr - 20, 112, 40, 28, right, rightColor, rightFill, 12),
    ar(px, 82, xl + 2, 82, C.blue), ar(px, 82, xr - 2, 82, C.green),
    lb((px + xl) / 2, 72, `${ld}cm`, 11, C.blue, 'middle', true), lb((px + xr) / 2, 72, `${rd}cm`, 11, C.green, 'middle', true),
    lb(px, 138, '支点', 9, C.gray, 'middle', true),
  ];
  return show([
    {
      note: `てこの支点（してん）から左に${ld}cmの所に${lw}gのおもり、右に${rd}cmの所に□gのおもりをつるします。つり合うのは□が何gのときでしょう。❓まず、「つり合う」とはどういうことでしょう。`,
      add: [...frame('□g', C.red, FILL.red), ...band(150, tx(180, '□ ＝ ？g', 14, C.red, true))],
    },
    {
      note: '❓つり合うとは？→棒を左に回そうとする力と、右に回そうとする力が同じ大きさ、ということです。どちらかが大きいと、大きい方にかたむきます。',
      add: band(150, tx(172, '左に回す力 ＝ 右に回す力', 14, C.red, true), tx(200, '（シーソーのつり合いと同じ）', 11, C.gray)),
    },
    {
      note: '❓回す力は、重さだけで決まるの？→ちがいます。同じ重さでも、支点から遠いほど強く回します（シーソーで、はしに座るほうが強いのと同じ）。❓では何で決まる？→「重さ×支点からの距離」です。',
      add: band(150, bb(160, '回す力 ＝ 重さ × 支点からの距離', C.purple, FILL.purple, 13), tx(212, '遠いほど、重いほど、強く回す', 11, C.gray)),
    },
    {
      note: '❓なぜかけ算？→重さが2倍になっても、距離が2倍になっても、回す力はどちらも2倍になるからです。10g×30cm＝300を1つぶんとすると、20g×30cmも10g×60cmも2つぶんの600です。',
      add: band(150, bx(14, 158, 90, 36, '10g×30cm\n＝300', C.gray, FILL.gray, 11), bx(115, 158, 90, 36, '20g×30cm\n＝600', C.main, FILL.warm, 11), bx(216, 158, 90, 36, '10g×60cm\n＝600', C.main, FILL.warm, 11), tx(216, '重さ2倍でも距離2倍でも、回す力は2倍', 11, C.gray)),
    },
    {
      note: `❓左に回す力は？→${lw}g×${ld}cm＝${power}です。これが左の回す力の大きさです。`,
      add: band(150, bb(166, `左の回す力 ＝ ${lw} × ${ld} ＝ ${power}`, C.blue, FILL.blue, 14)),
    },
    {
      note: `❓右は？→□g×${rd}cmが${power}と同じになればよいので、□×${rd}＝${power}です。❓なぜわり算？→${rd}をかけて${power}になる数をさがすので、${power}を${rd}でわります。${power}÷${rd}＝${ans}g。`,
      add: [bx(xr - 20, 112, 40, 28, `${ans}g`, C.green, FILL.green, 12), ...band(150, bb(156, `□ × ${rd} ＝ ${power}`, C.red, FILL.red, 14), bb(194, `${power} ÷ ${rd} ＝ ${ans}g`, C.green, FILL.green, 15))],
    },
    {
      note: `答えは${ans}g。❓検算は？→右の回す力は ${ans}×${rd}＝${power}で、左の${power}と同じです。❓まちがえやすい点は？→距離を無視して重さだけをそろえること（${lw}gにしてしまう）。`,
      add: band(150, tx(170, `右 ${ans}×${rd} ＝ ${power} ＝ 左 ${lw}×${ld} ✓`, 13, C.green, true), tx(196, p.extra, 11, C.gray), tx(220, '重さだけをそろえるのは×', 11, C.red)),
    },
  ], cap);
}

// ─────────── 浮力 ───────────
const tank = (): DiagramElement[] => [
  bx(50, 70, 180, 75, undefined, FILL.blue, FILL.blue),
  ln(50, 40, 50, 145, C.ink, false, 2), ln(50, 145, 230, 145, C.ink, false, 2), ln(230, 40, 230, 145, C.ink, false, 2),
  lb(214, 64, '水面', 9, C.blue, 'end'),
];
const objBox = (x: number, y: number, t = '物体'): DiagramElement => bx(x, y, 60, 44, t, C.main, FILL.warm, 12);

// ─────────── つるかめ算（個数） ───────────
const dotRow = (n: number, kinds: ('a' | 'b' | 'c')[], y = 52): DiagramElement[] =>
  Array.from({ length: n }, (_, i) => {
    const k = kinds[i];
    const col = k === 'a' ? C.main : k === 'b' ? C.blue : C.gray;
    const fill = k === 'a' ? FILL.warm : k === 'b' ? FILL.blue : FILL.gray;
    return ci(20 + i * 19.6, y, 8, undefined, col, fill);
  });

export const figuresSchoolChugaku10: Record<string, Figure> = {
  // ═════════ 法政第二 理科⑤ 満月の1週間後 ═════════
  tokyo_hosei_rika_005: show([
    {
      note: 'ある日の午後6時、東の空に満月（まんげつ）が見えました。1週間後の月はどう見えるでしょう。❓まず、満月のとき、太陽・地球・月はどんな並びなのでしょう。',
      add: [...sunEarth(), ...moonDot(0), phLab(0, '満月'), ...band(150, tx(176, '午後6時に東の空に満月', 13), tx(204, '1週間後の月は？', 14, C.red, true))],
    },
    {
      note: '❓満月はどんな並び？→太陽・地球・月がほぼ一直線で、地球が真ん中です。❓なぜ丸く見える？→月は太陽がわの半分が光っていて、その光る面が、ちょうど地球を向くからです。',
      add: [ln(37, OC.y, 146, OC.y, C.red, true, 1.5), ln(174, OC.y, 202, OC.y, C.red, true, 1.5), ...band(150, tx(176, '太陽 － 地球 － 月 がほぼ一直線', 13, C.red, true), tx(204, '光る面が地球を向く → 丸く見える', 12))],
    },
    {
      note: '❓なぜ満月は午後6時ごろ、東からのぼるの？→満月は太陽の反対がわにあるので、太陽が西にしずむころ、反対の東からのぼってきます。',
      add: band(150, bx(14, 160, 128, 36, '太陽：西にしずむ', C.red, FILL.red, 12), ar(146, 178, 174, 178, C.gray), bx(178, 160, 128, 36, '満月：東からのぼる', C.main, FILL.yellow, 12), tx(218, '反対がわだから、入れちがいになる', 11, C.gray)),
    },
    {
      note: '❓では1週間後、月はどこにいる？→月は約29.5日で地球を1回まわります。1週間（約7日）は、その4分の1くらいなので、月は軌道（きどう）を4分の1進みます。',
      add: [ar(206, 60, 174, 30, C.blue), ...moonDot(90), phLab(90, '下弦'), ...band(150, tx(176, '29.5日 ÷ 4 ≒ 約7日（1週間）', 13, C.blue, true), tx(204, '月は軌道の4分の1進んで、図の上へ', 12))],
    },
    {
      note: '❓その位置の月は、どんな形に見える？→地球から見て、左がわが光る半月です。これを下弦（かげん）の月といいます。',
      add: [...moonShape(268, 66, 24, '下弦の月'), ...band(150, tx(180, '下弦の月 ＝ 左がわが光る半月', 13, C.ink, true))],
    },
    {
      note: '❓月ののぼる時刻は？→月は毎日およそ50分ずつ、のぼる時刻がおそくなります。❓なぜ？→月も地球のまわりを同じ向きに動くので、同じ位置にもどるのに少し余分に時間がかかるからです。7日で 50×7＝350分、約6時間おくれます。',
      add: band(150, bx(10, 158, 92, 38, '満月\n午後6時', C.main, FILL.warm, 12), ar(104, 177, 116, 177, C.gray), bx(118, 158, 84, 38, '7日で\n約6時間おくれ', C.red, FILL.red, 11), ar(204, 177, 216, 177, C.gray), bx(218, 158, 92, 38, '下弦\n真夜中ごろ', C.blue, FILL.blue, 12), tx(220, '50分 × 7日 ＝ 350分 ≒ 約6時間', 11, C.gray)),
    },
    {
      note: '❓朝はどこに見える？→月は、のぼってから南の空にくるまで約6時間かかります。真夜中にのぼった下弦の月は、朝の6時ごろ南の空にきて、昼ごろしずみます。',
      add: fresh(bx(10, 40, 92, 52, '午前0時\n東からのぼる', C.main, FILL.warm, 11), ar(104, 66, 116, 66, C.gray), bx(118, 40, 84, 52, '午前6時\n南の空', C.blue, FILL.blue, 11), ar(204, 66, 216, 66, C.gray), bx(218, 40, 92, 52, '昼ごろ\n西にしずむ', C.gray, FILL.gray, 11), tx(130, '下弦の月：夜中〜朝にかけて見える', 13, C.ink, true), tx(176, '真夜中にのぼる → 朝に南 → 昼ごろしずむ', 12)),
    },
    {
      note: '答え：真夜中ごろに東の空からのぼり、朝には南の空に見える（下弦の月）。❓ほかの選択肢はなぜちがう？→月は毎日おそくなるので「午後6時のまま」はまちがいで、下弦の月は夜中から見えるので「見えなくなる」もまちがいです。',
      add: fresh(bx(20, 14, 280, 32, '満月 →（約1週間）→ 下弦の月 ✓', C.green, FILL.green, 13), bx(20, 58, 280, 28, '× 午後6時のまま（毎日約50分おそくなる）', C.red, FILL.red, 11), bx(20, 94, 280, 28, '× 次の日に見えなくなる（つづけて見える）', C.red, FILL.red, 11), bx(20, 130, 280, 28, '× 昼間しか見えない（夜中から見える）', C.red, FILL.red, 11), tx(190, '新月→上弦→満月→下弦 は約7日ずつ', 12, C.gray)),
    },
  ], '満月の1週間後は下弦の月'),

  // ═════════ 法政第二 理科⑤ 浮力 ═════════
  tokyo_hosei_rika_010: show([
    {
      note: '体積100cm³、重さ80gの物体を、水に完全に沈めて静止させています。水1cm³の重さは1gです。❓まず、浮力（ふりょく）とは何でしょう。',
      add: [...tank(), ln(130, 40, 130, 84, C.gray, false, 1.5), objBox(100, 84), lb(272, 60, '体積 100cm³', 11, C.ink, 'middle', true), lb(272, 82, '重さ 80g', 11, C.ink, 'middle', true), lb(272, 104, '水1cm³＝1g', 10, C.gray), ...band(150, tx(180, '水に完全に沈めている', 13), tx(206, '浮力は何gか？', 14, C.red, true))],
    },
    {
      note: '浮力とは、水が物体を上向きに押す力のことです。❓その大きさは何で決まるのでしょう。',
      add: [ar(110, 84, 110, 58, C.red), lb(88, 56, '浮力', 10, C.red, 'middle', true), ar(150, 128, 150, 143, C.blue), ...band(150, tx(180, '浮力 ＝ 水が物体を上に押す力', 14, C.red, true))],
    },
    {
      note: '❓浮力の大きさは何で決まる？→物体が「おしのけた水の重さ」で決まります（アルキメデスの原理）。物体が水に入ると、その場所にあった水が、場所をゆずってどけられます。',
      add: [ln(96, 80, 164, 80, C.purple, true, 1.5), ln(164, 80, 164, 132, C.purple, true, 1.5), ln(164, 132, 96, 132, C.purple, true, 1.5), ln(96, 132, 96, 80, C.purple, true, 1.5), lb(196, 108, 'おしのけた水', 9, C.purple, 'middle', true), ...band(150, tx(180, '浮力 ＝ おしのけた水の重さ', 14, C.purple, true))],
    },
    {
      note: '❓なぜ「おしのけた水の重さ」？→もしその場所が水のままなら、その水は浮きも沈みもしません。まわりの水が、その重さをちょうど支えているからです。物体に入れかわっても、まわりの水が押す力は同じなので、物体もその重さぶん上に押されます。',
      add: [ar(108, 146, 108, 134, C.red), ar(130, 146, 130, 134, C.red), ar(152, 146, 152, 134, C.red), ...band(150, tx(176, '水だったら止まっている', 12), tx(198, '＝ まわりの水が重さを支えている', 12), tx(222, '入れかわっても、支える力は同じ → 浮力', 11, C.red, true))],
    },
    {
      note: '❓おしのけた水の体積は？→物体は完全に沈んでいるので、物体の体積ぶんの水をおしのけています。だから100cm³です。',
      add: band(150, bb(170, 'おしのけた水の体積 ＝ 物体の体積 ＝ 100cm³', C.blue, FILL.blue, 12)),
    },
    {
      note: '❓その水の重さは？→水1cm³は1gなので、100cm³なら 100×1＝100g。これが浮力の大きさです。',
      add: band(150, bb(156, '100cm³ × 1g ＝ 100g', C.blue, FILL.blue, 14), bb(194, '浮力 ＝ 100g', C.green, FILL.green, 16)),
    },
    {
      note: '答え：100g。❓物体の重さ80gは関係ある？→浮力の大きさには関係しません。上向き100gと下向き80gをくらべると、上向きが20g大きいので、手をはなすと浮かび上がります。❓よくあるまちがいは？→浮力を80gにしてしまうことです。',
      add: band(150, bx(20, 160, 130, 34, '上向き 浮力100g', C.red, FILL.red, 12), bx(170, 160, 130, 34, '下向き 重さ80g', C.blue, FILL.blue, 12), tx(214, '100g ＞ 80g → 浮き上がる（浮力は100gのまま）', 11, C.gray)),
    },
  ], '浮力＝おしのけた水の重さ'),

  // ═════════ 学習院 算数③ 三角形の角 ═════════
  tokyo_gakushuin_sansu_003: angleFig(55, 65, null, '三角形の内角の和は180度'),

  // ═════════ 学習院 算数⑦ おうぎ形から三角形を引く ═════════
  tokyo_gakushuin_sansu_007: show([
    {
      note: '半径10cmで中心角90度のおうぎ形から、直角をはさむ2辺が10cmの直角二等辺三角形を切り取ります。残りの部分の面積は？❓まず、この残りの形は面積の公式があるでしょうか。',
      add: [sc(90, 135, 100, 0, 90, C.main, FILL.warm), lb(140, 144, '10cm', 10, C.ink, 'middle', true), lb(78, 88, '10cm', 10, C.ink, 'end', true), ...band(150, tx(180, '半径10cm、中心角90度', 13), tx(206, '（円周率は3.14）', 11, C.gray))],
    },
    {
      note: '❓残りの形（弓形）の面積は直接求められる？→まるい線と直線にかこまれた形で、公式がありません。❓では、どうする？→「おうぎ形」から「三角形」をひけば、残りの部分が出ます。',
      add: [pg([[90, 135], [190, 135], [90, 35]], C.red, FILL.red), ...band(150, tx(176, '残り ＝ おうぎ形 − 三角形', 14, C.red, true), tx(204, '公式のある形どうしの引き算にする', 12, C.gray))],
    },
    {
      note: '❓おうぎ形の面積は？→中心角90度は、円1周360度の 90÷360＝4分の1です。円全体は 10×10×3.14＝314cm²なので、おうぎ形はその4分の1です。',
      add: [sc(270, 70, 30, 0, 90, C.main, FILL.warm), sc(270, 70, 30, 90, 180, C.gray, FILL.gray), sc(270, 70, 30, 180, 270, C.gray, FILL.gray), sc(270, 70, 30, 270, 360, C.gray, FILL.gray), ...band(150, tx(172, '円全体 10×10×3.14 ＝ 314cm²', 12), tx(198, '90 ÷ 360 ＝ 4分の1', 12, C.blue, true))],
    },
    {
      note: '314cm²の4分の1で、おうぎ形は 314÷4＝78.5cm²です。',
      add: band(150, bb(166, 'おうぎ形 ＝ 314 ÷ 4 ＝ 78.5cm²', C.main, FILL.warm, 14)),
    },
    {
      note: '❓三角形の面積は？→直角をはさむ2辺が10cmずつなので 10×10÷2＝50cm²です。❓なぜ÷2？→10×10の正方形を、対角線で半分にした形だからです。',
      add: [ln(90, 35, 190, 35, C.gray, true, 1.5), ln(190, 35, 190, 135, C.gray, true, 1.5), ...band(150, tx(172, '正方形 10×10 ＝ 100cm² の半分', 12), bb(186, '三角形 ＝ 10×10÷2 ＝ 50cm²', C.red, FILL.red, 13))],
    },
    {
      note: '❓残りの面積は？→おうぎ形の78.5cm²から、三角形の50cm²をひきます。78.5−50＝28.5cm²です。',
      add: band(150, bb(166, '78.5 − 50 ＝ 28.5cm²', C.green, FILL.green, 16)),
    },
    {
      note: '答え：28.5cm²。❓別の方法で検算できる？→半径10cmの円から、対角線20cmの正方形（20×20÷2＝200cm²）をひくと 314−200＝114cm²で、弓形4つぶんです。114÷4＝28.5cm²で一致します。',
      add: fresh(ci(90, 75, 50, undefined, C.main, FILL.warm), pg([[90, 25], [140, 75], [90, 125], [40, 75]], C.gray, FILL.gray), lb(235, 50, '円 314', 12, C.main, 'middle', true), lb(235, 74, '正方形 200', 12, C.gray, 'middle', true), lb(235, 98, '弓形4つ 114', 12, C.red, 'middle', true), ...band(150, tx(176, '114 ÷ 4 ＝ 28.5cm² ✓', 14, C.green, true), tx(204, 'まちがい：円全体314を使う（中心角90度は4分の1）', 11, C.red))),
    },
  ], 'おうぎ形 − 三角形 ＝ 弓形'),

  // ═════════ 学習院 算数⑩ 直方体の体積 ═════════
  tokyo_gakushuin_sansu_010: (() => {
    const u = 16;
    const fx = 40, fy = 36; // 前の面の左上
    const W = 5 * u, H = 6 * u, dx = 32, dy = -24;
    const box: DiagramElement[] = [
      pg([[fx, fy], [fx + W, fy], [fx + W, fy + H], [fx, fy + H]], C.main, FILL.warm),
      pg([[fx, fy], [fx + dx, fy + dy], [fx + W + dx, fy + dy], [fx + W, fy]], C.main, FILL.yellow),
      pg([[fx + W, fy], [fx + W + dx, fy + dy], [fx + W + dx, fy + H + dy], [fx + W, fy + H]], C.main, FILL.warm),
    ];
    const layer = (x0: number, y0: number, col: string, fill: string): DiagramElement[] => {
      const out: DiagramElement[] = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) out.push(bx(x0 + c * 14, y0 + r * 14, 14, 14, undefined, col, fill));
      return out;
    };
    return show([
      {
        note: '縦4cm、横5cm、高さ6cmの直方体（ちょくほうたい）の体積（たいせき）は何cm³でしょう。❓まず、体積とは何をはかっているのでしょう。',
        add: [...box, lb(fx + W / 2, fy + H + 12, '横 5cm', 10, C.blue, 'middle', true), lb(fx - 8, fy + H / 2, '高さ\n6cm', 10, C.green, 'end', true), lb(fx + W + dx + 6, fy + H / 2 + dy, '縦 4cm', 10, C.red, 'start', true), ...band(150, tx(186, '体積 ＝ ？cm³', 14, C.red, true))],
      },
      {
        note: '❓体積とは？→1辺1cmの立方体（1cm³）が、何個ぶん入るかを表した数です。いちばん下の1段には、横に5個、縦に4列ならびます。',
        add: [...layer(200, 40, C.blue, FILL.blue), lb(235, 112, '1段のようす（上から）', 10, C.blue, 'middle', true), ...band(150, tx(180, '体積 ＝ 1cm³の立方体が何個ぶんか', 13, C.ink, true))],
      },
      {
        note: '❓1段は何個？→横5個の列が、縦に4列あります。同じ数5が4つなので、かけ算で 5×4＝20個です。❓なぜかけ算？→同じ数のくり返しを一度に数えるのがかけ算だからです。',
        add: band(150, bb(166, '1段 ＝ 5 × 4 ＝ 20個', C.blue, FILL.blue, 15), tx(214, '（横5個の列が4列）', 11, C.gray)),
      },
      {
        note: '❓高さ6cmは？→1段の高さが1cmなので、20個の段が6段かさなります。同じ20個が6つぶんなので、20×6です。',
        add: fresh(...[0, 1, 2, 3, 4, 5].map((i) => bx(40, 14 + i * 22, 120, 20, '20個', C.blue, FILL.blue, 11)), lb(225, 76, '6段', 16, C.green, 'middle', true), lb(225, 100, '高さ6cm', 11, C.green), ...band(150, bb(166, '20個 × 6段 ＝ 120個', C.green, FILL.green, 15))),
      },
      {
        note: '式にまとめると、体積＝縦×横×高さです。4×5＝20、20×6＝120。立方体が120個ぶんなので120cm³です。',
        add: band(150, tx(172, '体積 ＝ 縦 × 横 × 高さ', 13, C.purple, true), bb(186, '4 × 5 × 6 ＝ 20 × 6 ＝ 120cm³', C.green, FILL.green, 14)),
      },
      {
        note: '❓かける順番を変えてもいい？→いいです。立方体の総数は、どこから数えても変わらないからです。横5と高さ6の面が30個、それが縦に4つで 6×5×4＝30×4＝120cm³です。',
        add: fresh(...[0, 1, 2, 3].map((i) => bx(40 + i * 28, 30, 26, 60, '30', C.blue, FILL.blue, 11)), lb(230, 60, '縦4列', 14, C.red, 'middle', true), ...band(150, tx(176, '6 × 5 ＝ 30（横と高さの面）', 12), tx(202, '30 × 4 ＝ 120cm³（同じ答え）', 13, C.green, true))),
      },
      {
        note: '答え：120cm³。❓よくあるまちがいは？→4＋5＋6＝15のようにたしてしまうこと。たし算は辺の長さの合計で、体積ではありません。かけ算で求めます。',
        add: fresh(...[0, 1, 2, 3, 4, 5].map((i) => bx(40, 14 + i * 16, 120, 14, undefined, C.blue, FILL.blue)), lb(225, 56, '体積 ＝ 立方体120個ぶん', 12, C.green, 'middle', true), ...band(150, bb(160, '答え 120cm³', C.green, FILL.green, 16), tx(208, '×：4＋5＋6＝15（辺の長さの合計になってしまう）', 11, C.red))),
      },
    ], '体積＝縦×横×高さ');
  })(),

  // ═════════ 学習院 理科④ 新月から満月まで ═════════
  tokyo_gakushuin_rika_004: show([
    {
      note: '月が新月（しんげつ）から満月（まんげつ）になるまでにかかる日数は、約何日でしょう。❓まず、月の満ち欠けは、なぜ起こるのでしょう。',
      add: [...sunEarth(), ...moonDot(180), phLab(180, '新月'), ...band(150, tx(180, '新月から満月まで、何日かかる？', 13, C.red, true))],
    },
    {
      note: '❓満ち欠けはなぜ起こる？→月は太陽の光を受けて、いつも太陽がわの半分が光っています。月が地球のまわりを回ると、地球から見える光の部分が変わります。新月は光る面が地球の反対、満月は光る面が地球を向きます。',
      add: [...moonDot(270), phLab(270, '上弦'), ...moonDot(0), phLab(0, '満月'), ...moonDot(90), phLab(90, '下弦'), ...band(150, tx(180, '新月：光る面が地球と反対', 12), tx(206, '満月：光る面が地球を向く', 12))],
    },
    {
      note: '❓満ち欠けは、どれくらいで1周する？→新月から次の新月までが満ち欠けの1周で、約29.5日です。月が軌道を1周するあいだに、形が一通り変わります。',
      add: band(150, tx(172, '新月 → 上弦 → 満月 → 下弦 → 新月', 12), tx(200, 'ここまでで 約29.5日（1周）', 14, C.red, true)),
    },
    {
      note: '❓新月から満月までは、1周のどれだけ？→新月は太陽がわ、満月はその反対がわです。ちょうど軌道の半周になります。',
      add: [...arcArrow(OC.x, OC.y, OC.R + 9, 180, 345, C.blue), ...band(150, tx(180, '新月 → 満月 ＝ 軌道の半周', 14, C.blue, true))],
    },
    {
      note: '❓半周は何日？→1周が約29.5日なので、その半分です。29.5÷2＝14.75で、約15日です。❓なぜわり算？→1周ぶんを同じ大きさの2つに分けた、1つぶんを知りたいからです。',
      add: band(150, bb(160, '29.5 ÷ 2 ＝ 14.75 ≒ 約15日', C.green, FILL.green, 14), tx(212, '1周を2つに分けた、その1つぶん', 11, C.gray)),
    },
    {
      note: '❓途中の形も同じように考えられる？→上弦は4分の1周で約7日、満月は半周で約15日、下弦は4分の3周で約22日、もとの新月にもどるのが約29.5日です。',
      add: fresh(...flow(['新月\n0日', '上弦\n約7日', '満月\n約15日', '下弦\n約22日', '新月\n約29.5日'], 30, { h: 52, size: 10, gap: 10 }).flat(), tx(130, '1周 ÷ 4 ≒ 約7日ずつ', 13, C.blue, true), tx(176, '29.5÷4 ≒ 7、÷2 ≒ 15、×3÷4 ≒ 22', 11, C.gray)),
    },
    {
      note: '答え：約15日。❓検算は？→新月から満月までを2回ぶんで 15×2＝30日。1周の約29.5日とほぼ合います。❓よくあるまちがいは？→29日を選ぶこと。29日は「次の新月まで」の1周の日数です。',
      add: fresh(bx(70, 20, 180, 44, '約15日', C.green, FILL.green, 20), tx(100, '15 × 2 ＝ 30 ≒ 29.5（1周）✓', 13, C.green, true), tx(140, '×：29日は新月から新月までの1周', 12, C.red), tx(176, '新月 → 満月 ＝ 半周', 12, C.gray)),
    },
  ], '新月から満月は約15日'),

  // ═════════ 学習院 理科③ 直列と並列 ═════════
  tokyo_gakushuin_rika_008: show([
    {
      note: '電池1個に豆電球1個をつないだときの電流（電気の流れ）の大きさを、①とします。明るさは、豆電球に流れる電流が大きいほど明るくなります。❓では、豆電球を2個つなぐと、どうなるでしょう。',
      add: [...serC(90, 26, 140, 1, ['①'], C.ink, 72), lb(160, 122, '豆電球1個：電流①', 12, C.ink, 'middle', true), ...band(150, tx(180, '電流が大きいほど明るい', 13, C.red, true), tx(208, '1個のときの明るさを基準にする', 11, C.gray))],
    },
    {
      note: '❓直列（ちょくれつ）とは？→電気の通り道が1本で、豆電球を2個、つづけて通るつなぎ方です。❓そうすると？→電気の通りにくさが、1＋1＝2になります。',
      add: fresh(...serC(90, 26, 140, 2, [], C.red), lb(160, 122, '直列：通り道は1本', 12, C.red, 'middle', true), ...band(150, bb(166, '通りにくさ ＝ 1 ＋ 1 ＝ 2', C.red, FILL.red, 14), tx(214, '（豆電球1個ぶんの通りにくさを1とする）', 11, C.gray))),
    },
    {
      note: '❓通りにくさ2だと、電流は？→電池1個の押す力は変わらないので、電流は①÷2で、①の半分になります。電流が半分なので、豆電球は1個のときより暗くなります。',
      add: fresh(...serC(90, 26, 140, 2, ['½', '½']), lb(160, 122, '直列：どちらも電流は①の半分', 12, C.red, 'middle', true), ...band(150, bb(166, '電流 ＝ ① ÷ 2 ＝ ½ → 暗い', C.red, FILL.red, 14))),
    },
    {
      note: '❓並列（へいれつ）は？→電気の通り道が2本に分かれ、それぞれの豆電球が電池と直接つながります。❓それぞれの通りにくさは？→どちらの道も豆電球1個ぶんの1なので、電流はそれぞれ①で、1個のときと同じです。',
      add: fresh(...parC(90, 26, 140, 2, ['①', '①']), lb(160, 122, '並列：どちらも電流は①', 12, C.green, 'middle', true), ...band(150, bb(166, '電流 ＝ ① ÷ 1 ＝ ① → 1個と同じ', C.green, FILL.green, 13))),
    },
    {
      note: '❓電流が2本に分かれるのに、なぜ暗くならない？→電池からは、2つの道ぶんの電流が出ていくからです。電池は並列のほうが、多くの電流を出す（そのぶん、早く弱る）だけで、豆電球は暗くなりません。',
      add: band(150, bx(14, 160, 130, 40, '並列：電池から ②\n各道 ①ずつ', C.green, FILL.green, 11), bx(176, 160, 130, 40, '直列：電池から ½\nどこも ½', C.red, FILL.red, 11), tx(222, '電池は並列のほうが、早く弱る', 11, C.gray)),
    },
    {
      note: '❓豆電球の数をふやすと？→直列は3個で通りにくさ3、電流は⅓と、ふやすほど暗くなります。並列は3個でも各道の電流は①のままで、明るさは変わりません。',
      add: fresh(bx(20, 20, 130, 30, '直列', C.red, FILL.red, 13), bx(170, 20, 130, 30, '並列', C.green, FILL.green, 13), bx(20, 60, 130, 30, '1個 ①', C.gray, FILL.gray, 12), bx(170, 60, 130, 30, '1個 ①', C.gray, FILL.gray, 12), bx(20, 96, 130, 30, '2個 ½', C.red, FILL.red, 12), bx(170, 96, 130, 30, '2個 ①', C.green, FILL.green, 12), bx(20, 132, 130, 30, '3個 ⅓', C.red, FILL.red, 12), bx(170, 132, 130, 30, '3個 ①', C.green, FILL.green, 12), tx(190, 'ふやすほど暗くなる／変わらない', 12, C.ink, true)),
    },
    {
      note: '答え：直列は暗く、並列は明るい。❓よくあるまちがいは？→直列のほうが電流が強く、明るいと思うこと。直列は電流がどこでも同じ大きさですが、その大きさが①の半分に小さくなっています。',
      add: fresh(bx(20, 24, 280, 38, '直列は暗く、並列は明るい ✓', C.green, FILL.green, 15), tx(96, '並列：各豆電球 ①（1個と同じ明るさ）', 13, C.green, true), tx(124, '直列：各豆電球 ½（暗い）', 13, C.red, true), tx(176, '×：直列のほうが電流が強い', 12, C.red)),
    },
  ], '直列は暗く、並列は明るい'),

  // ═════════ 学習院 理科⑤ 上弦の月の南中 ═════════
  tokyo_gakushuin_rika_010: show([
    {
      note: '右がわが光る半月（上弦〈じょうげん〉の月）が、真南の空にくるのは何時ごろでしょう。❓まず、上弦の月は、太陽から見てどこにあるのでしょう。',
      add: [...sunEarth(), ...moonDot(270), phLab(270, '上弦'), ...band(150, tx(180, '上弦の月が真南にくる時刻は？', 13, C.red, true))],
    },
    {
      note: '❓上弦の月はどこ？→地球から見て、太陽の方向と月の方向が90度になる位置です。つまり、月は太陽より90度だけ東がわにあります。',
      add: [ln(146, OC.y, 40, OC.y, C.red, false, 2), ln(OC.x, OC.y + 14, OC.x, OC.y + 26, C.blue, false, 2), lb(150, OC.y + 38, '90°', 11, C.purple, 'end', true), ...band(150, tx(176, '太陽の向きと月の向きが90度', 13, C.purple, true), tx(204, '→ 月は太陽より90度ぶん東', 12))],
    },
    {
      note: '❓太陽が真南にくるのは？→正午です。❓時間がたつと、見える向きはなぜ変わる？→地球が24時間で360度回る（自転）ので、1時間に360÷24＝15度ずつ向きが変わるからです。',
      add: fresh(ci(110, 75, 30, '地球', C.blue, FILL.blue, 11), ...arcArrow(110, 75, 40, 100, 240, C.main), ln(80, 75, 20, 75, C.red, false, 2), lb(30, 64, '太陽', 10, C.red, 'middle', true), ln(110, 105, 110, 140, C.blue, false, 2), lb(150, 138, '月（上弦）', 10, C.blue, 'start', true), lb(240, 50, '1日で360度', 12, C.ink, 'middle', true), lb(240, 76, '360÷24＝15度', 13, C.red, 'middle', true), lb(240, 100, '1時間で15度', 12, C.ink, 'middle', true), ...band(150, tx(180, '地球は1時間に15度まわる', 13, C.red, true))),
    },
    {
      note: '❓90度は何時間ぶん？→90÷15＝6時間です。❓なぜ「太陽のあと」になる？→月は太陽より東にあり、空は東から西へ動いて見えるので、東にあるものは、あとから南にきます。',
      add: band(150, bb(160, '90 ÷ 15 ＝ 6時間', C.purple, FILL.purple, 15), tx(212, '月は太陽より6時間あとに南にくる', 12, C.gray)),
    },
    {
      note: '太陽が真南にくる正午から6時間たつと午後6時です。上弦の月は、夕方6時ごろに真南にきます。',
      add: band(150, bx(10, 160, 94, 38, '正午\n太陽が南中', C.red, FILL.red, 11), ar(106, 179, 122, 179, C.gray), bx(124, 160, 70, 38, '＋6時間', C.purple, FILL.purple, 12), ar(196, 179, 212, 179, C.gray), bx(214, 160, 96, 38, '午後6時\n月が南中', C.green, FILL.green, 11)),
    },
    {
      note: '❓ほかの月も同じ？→新月は太陽と同じ方向なので正午、上弦は午後6時、満月は反対がわなので午前0時、下弦は午前6時ごろに南中します。6時間ずつずれます。',
      add: fresh(...flow(['新月\n正午ごろ', '上弦\n午後6時', '満月\n午前0時', '下弦\n午前6時'], 34, { h: 60, size: 11 }).flat(), tx(126, '6時間ずつずれていく', 13, C.blue, true), tx(176, '90度ずつ ＝ 6時間ずつ', 12, C.gray)),
    },
    {
      note: '答え：夕方6時ごろ。❓検算は？→新月（正午）→上弦（午後6時）→満月（午前0時）と、6時間ずつおくれる規則に合っています。❓まちがえやすい点は？→満月の南中（午前0時ごろ）と混ぜないこと。',
      add: fresh(bx(70, 20, 180, 44, '夕方6時ごろ', C.green, FILL.green, 20), tx(100, '正午 ＋ 6時間 ＝ 午後6時 ✓', 13, C.green, true), tx(140, '×：満月は午前0時ごろに南中', 12, C.red)),
    },
  ], '上弦の月は午後6時ごろ南中'),

  // ═════════ 南山中 算数① 20%引き ═════════
  nagoya_nanzan_sansu_001: (() => {
    const seg20 = (fill: string, color: string) => bx(30, 50, 52, 40, '20%', color, fill, 12);
    return show([
      {
        note: '定価3000円の品物を、20%引きで売りました。売り値はいくらでしょう。❓まず、「20%引き」とは、何を引くことでしょう。',
        add: [lb(160, 34, '定価 3000円（100%）', 12, C.ink, 'middle', true), bx(30, 50, 260, 40, '3000円', C.gray, FILL.gray, 14), ...band(150, tx(180, '売り値 ＝ ？円', 14, C.red, true))],
      },
      {
        note: '❓20%引きとは？→定価の20%ぶんを安くすることです。図の赤い部分が、引かれる部分です。',
        add: fresh(lb(160, 34, '定価 3000円（100%）', 12, C.ink, 'middle', true), seg20(FILL.red, C.red), bx(82, 50, 208, 40, 'のこり 80%', C.blue, FILL.blue, 13), lb(56, 108, '引く', 10, C.red, 'middle', true), ...band(150, tx(180, '赤い20%を安くする', 13, C.red, true))),
      },
      {
        note: '❓引く金額は？→100%は「1」、1%は0.01なので、20%は0.2です。3000×0.2＝600円が値引き額です。',
        add: band(150, bb(160, '3000 × 0.2 ＝ 600円（値引き額）', C.red, FILL.red, 14), tx(212, '20% ＝ 0.2', 12, C.gray)),
      },
      {
        note: '❓売り値は？→定価から値引き額をひきます。3000−600＝2400円です。',
        add: band(150, bb(166, '3000 − 600 ＝ 2400円', C.green, FILL.green, 16)),
      },
      {
        note: '❓もっと速い方法は？→売り値は、のこりの80%の部分です。100−20＝80%＝0.8なので、定価に0.8をかけるだけで出ます。❓なぜそれでいい？→「定価−値引き」を、割合（わりあい）のまま先に計算しているからです。',
        add: fresh(lb(160, 34, '定価 3000円（100%）', 12, C.ink, 'middle', true), seg20(FILL.gray, C.gray), bx(82, 50, 208, 40, '80% ＝ 売り値', C.green, FILL.green, 13), ...band(150, bb(156, '100% − 20% ＝ 80% ＝ 0.8', C.blue, FILL.blue, 14), tx(206, '売り値 ＝ 定価 × 0.8', 13, C.green, true))),
      },
      {
        note: '3000×0.8＝2400円。3000÷10＝300の8つぶんと考えても、300×8＝2400円で同じです。',
        add: band(150, bb(160, '3000 × 0.8 ＝ 2400円', C.green, FILL.green, 16), tx(212, '3000÷10 ＝ 300、300 × 8 ＝ 2400', 11, C.gray)),
      },
      {
        note: '答え：2400円。❓検算は？→値引き額600円と売り値2400円をたすと 600＋2400＝3000円で、定価にもどります。❓よくあるまちがいは？→600円を売り値にすること。600円は「値引き額」です。',
        add: fresh(bx(20, 30, 80, 40, '値引き\n600円', C.red, FILL.red, 12), lb(112, 54, '＋', 16), bx(124, 30, 90, 40, '売り値\n2400円', C.green, FILL.green, 12), lb(226, 54, '＝', 16), bx(238, 30, 62, 40, '定価\n3000円', C.gray, FILL.gray, 11), tx(110, '600 ＋ 2400 ＝ 3000 ✓', 14, C.green, true), tx(150, '×：600円は売り値ではなく値引き額', 12, C.red)),
      },
    ], '20%引き ＝ 定価の80%');
  })(),

  // ═════════ 南山中 算数③ 台形の面積 ═════════
  nagoya_nanzan_sansu_003: (() => {
    const trap = pg([[84, 39], [156, 39], [180, 135], [60, 135]], C.main, FILL.warm);
    const copy = pg([[252, 135], [180, 135], [156, 39], [276, 39]], C.blue, FILL.blue);
    return show([
      {
        note: '上底6cm、下底10cm、高さ8cmの台形（だいけい）の面積は？❓まず、台形には、長方形や三角形のような単純な公式があるでしょうか。',
        add: [trap, lb(120, 31, '上底 6cm', 10, C.ink, 'middle', true), lb(120, 145, '下底 10cm', 10, C.ink, 'middle', true), ln(156, 39, 156, 135, C.red, true, 1.5), lb(152, 92, '高さ8cm', 10, C.red, 'end', true), ...band(150, tx(186, '台形の面積 ＝ ？cm²', 14, C.red, true))],
      },
      {
        note: '❓台形の面積はどうやって求める？→同じ台形をもう1つ用意して、上下を逆さにして、となりにくっつけます。形を、求めやすい形に変えるためです。',
        add: [copy, ...band(150, tx(176, '同じ台形を逆さにしてくっつける', 13, C.blue, true), tx(204, '→ 形を変えて、面積を求めやすくする', 12, C.gray))],
      },
      {
        note: '❓何の形になった？→平行四辺形（へいこうしへんけい）です。❓なぜ？→逆さにすると、上底と下底が一直線に並び、上の辺も下の辺も 6＋10＝16cmの同じ長さになるからです。',
        add: [lb(216, 145, '10＋6＝16cm', 10, C.purple, 'middle', true), lb(216, 31, '6＋10＝16cm', 10, C.purple, 'middle', true), ...band(150, tx(176, '平行四辺形になった', 13, C.purple, true), tx(204, '底辺 ＝ 10 ＋ 6 ＝ 16cm、高さ ＝ 8cm', 12))],
      },
      {
        note: '❓平行四辺形の面積は、なぜ底辺×高さ？→はしの三角形を切って反対のはしに動かすと、長方形に変わるからです。長方形の面積は「横×縦」なので、底辺×高さになります。',
        add: [ln(84, 39, 84, 135, C.red, true, 1.5), pg([[252, 135], [276, 135], [276, 39]], C.red, FILL.red), ...band(150, tx(176, '赤い三角形を動かすと長方形', 13, C.red, true), tx(204, '長方形 ＝ 横16cm × たて8cm', 12))],
      },
      {
        note: '平行四辺形の面積は 16×8＝128cm²です。これは台形2つぶんの面積です。',
        add: band(150, bb(160, '16 × 8 ＝ 128cm²（台形2つぶん）', C.blue, FILL.blue, 14), tx(212, '（上底＋下底）× 高さ ＝ 2つぶん', 12, C.gray)),
      },
      {
        note: '❓台形1つぶんは？→台形2つで128cm²なので、半分の 128÷2＝64cm²です。❓なぜ÷2？→同じ台形を2つ使って大きな形をつくったからです。',
        add: band(150, bb(166, '128 ÷ 2 ＝ 64cm²', C.green, FILL.green, 16), tx(214, '公式：（上底＋下底）× 高さ ÷ 2', 12, C.purple, true)),
      },
      {
        note: '答え：64cm²。❓別の方法で検算は？→上底と下底の平均は (6＋10)÷2＝8cmで、高さ8cmの長方形に直せます。8×8＝64cm²で一致します。❓まちがいは？→÷2を忘れて128cm²にすること。',
        add: fresh(bx(70, 30, 96, 96, '8cm', C.green, FILL.green, 14), lb(118, 140, '平均の幅 8cm', 11, C.green, 'middle', true), lb(200, 78, '高さ\n8cm', 11, C.green, 'start', true), ...band(150, tx(176, '(6＋10)÷2 ＝ 8、8 × 8 ＝ 64cm² ✓', 13, C.green, true), tx(204, '×：÷2を忘れて128cm²', 12, C.red))),
      },
    ], '台形 ＝（上底＋下底）×高さ÷2');
  })(),

  // ═════════ 南山中 算数⑤ 比と合計 ═════════
  nagoya_nanzan_sansu_005: (() => {
    const sq = (i: number, t: string | undefined, col: string, fill: string) => bx(20 + i * 35, 60, 35, 40, t, col, fill, t && t.length > 2 ? 10 : 12);
    const sqs = (t?: string): DiagramElement[] => Array.from({ length: 8 }, (_, i) => (i < 3 ? sq(i, t, C.blue, FILL.blue) : sq(i, t, C.main, FILL.warm)));
    return show([
      {
        note: 'AさんとBさんの所持金の比は3:5で、2人の合計は5600円です。Aさんはいくらでしょう。❓まず、比の3:5は、図にするとどうなるでしょう。',
        add: [...sqs(), lb(72, 50, 'Aさん', 11, C.blue, 'middle', true), lb(212, 50, 'Bさん', 11, C.main, 'middle', true), ln(20, 118, 300, 118, C.ink, false, 2), lb(160, 136, '合計 5600円', 13, C.ink, 'middle', true), ...band(150, tx(186, 'Aさん ＝ ？円', 14, C.red, true))],
      },
      {
        note: '❓3:5とは？→同じ大きさのマスで、Aさんが3マス、Bさんが5マスぶん、ということです。1マスはどれも同じ金額です。',
        add: [...sqs('1'), ...band(150, tx(180, 'A：3マス　B：5マス', 14, C.ink, true), tx(206, '1マスはどれも同じ金額', 12, C.gray))],
      },
      {
        note: '❓全部で何マス？→3＋5＝8マスです。❓その8マスが表すのは？→2人の合計の5600円です。',
        add: band(150, bb(166, '3 ＋ 5 ＝ 8マス ＝ 5600円', C.purple, FILL.purple, 14)),
      },
      {
        note: '❓1マスはいくら？→8マスで5600円なので、同じ大きさの8つに分けて 5600÷8＝700円です。',
        add: [...sqs('700'), ...band(150, bb(166, '5600 ÷ 8 ＝ 700円（1マス）', C.green, FILL.green, 14))],
      },
      {
        note: 'Aさんは3マスぶんなので、700×3＝2100円です。',
        add: [...Array.from({ length: 3 }, (_, i) => sq(i, '700', C.red, FILL.red)), ...band(150, bb(166, 'Aさん ＝ 700 × 3 ＝ 2100円', C.red, FILL.red, 15))],
      },
      {
        note: '❓検算は？→Bさんは5マスで 700×5＝3500円。2100＋3500＝5600円で合計と同じです。さらに 2100:3500を700でわると 3:5で、比も合っています。',
        add: band(150, tx(170, 'B ＝ 700 × 5 ＝ 3500円', 13), tx(194, '2100 ＋ 3500 ＝ 5600円 ✓', 13, C.green, true), tx(218, '2100 : 3500 ＝ 3 : 5 ✓', 12, C.gray)),
      },
      {
        note: '答え：2100円。❓よくあるまちがいは？→5600÷2＝2800円と、半分にすること。AさんとBさんは同じではなく、3:5の大きさだからです。',
        add: band(150, bb(160, '答え 2100円', C.green, FILL.green, 16), tx(208, '×：5600÷2（AとBは同じ大きさではない）', 12, C.red)),
      },
    ], '比の合計÷比の合計＝1マス');
  })(),

  // ═════════ 南山中 算数⑦ 三角形の角 ═════════
  nagoya_nanzan_sansu_007: angleFig(70, 50, null, '三角形の内角の和は180度'),

  // ═════════ 南山中 算数⑩ 水そうにおもり ═════════
  nagoya_nanzan_sansu_010: (() => {
    const water = (): DiagramElement[] => [
      bx(50, 96, 72, 44, undefined, FILL.blue, FILL.blue),
      ln(50, 30, 50, 140, C.ink, false, 2), ln(50, 140, 122, 140, C.ink, false, 2), ln(122, 30, 122, 140, C.ink, false, 2),
      lb(86, 22, '6cm', 10, C.ink, 'middle', true), lb(40, 86, '10cm', 10, C.ink, 'end', true), lb(134, 122, '水 4cm', 10, C.blue, 'start', true),
    ];
    return show([
      {
        note: '底面が1辺6cmの正方形で高さ10cmの水そうに、水を4cmの高さまで入れました。この中に1辺3cmの立方体のおもりを完全に沈めると、水面は何cm上がるでしょう。❓まず、なぜ水面は上がるのでしょう。',
        add: [...water(), bx(180, 107, 33, 33, 'おもり', C.main, FILL.warm, 9), lb(196, 100, '1辺3cm', 10, C.main, 'middle', true), ...band(150, tx(180, 'おもりを沈めると、水面は何cm上がる？', 12, C.red, true))],
      },
      {
        note: '❓なぜ水面が上がるの？→おもりが沈むと、そこにあった水が場所をゆずってどけられ、行き場がなくて上にもり上がるからです。水の量は変わらず、おもりの体積ぶん、かさがふえます。',
        add: [bx(166, 88, 60, 54, undefined, '#FFFFFF', '#FFFFFF'), bx(51, 88, 70, 8, undefined, FILL.blue, FILL.blue), bx(58, 107, 33, 33, 'おもり', C.main, FILL.warm, 9), ln(50, 88, 122, 88, C.red, true, 1.5), lb(134, 86, '上がる高さ ？', 10, C.red, 'start', true), ...band(150, tx(176, '沈めたおもりの体積ぶん、水のかさがふえる', 12), tx(204, 'ふえた分が、水面を持ち上げる', 12, C.gray))],
      },
      {
        note: '❓おしのけられた水の体積は？→おもりの体積と同じです。おもりは1辺3cmの立方体なので 3×3×3＝27cm³。❓なぜかけ算？→底の面が3×3＝9個、それが3段かさなるからです。',
        add: band(150, bb(160, '3 × 3 × 3 ＝ 27cm³（おもりの体積）', C.main, FILL.warm, 13), tx(212, '水が27cm³ぶんふえる', 12, C.gray)),
      },
      {
        note: '❓その27cm³は、どこに広がる？→水そうの底いっぱいに広がって、うすい水の層になります。この層の厚さが、水面の上がる高さです。底面積は 6×6＝36cm²です。',
        add: [bx(200, 40, 70, 60, '底面積\n6×6\n＝36cm²', C.blue, FILL.blue, 11), lb(235, 116, '上から見た底', 10, C.gray, 'middle'), ...band(150, tx(176, '27cm³の水が、底面積36cm²に広がる', 12), tx(204, '厚さ ＝ 上がる高さ', 13, C.red, true))],
      },
      {
        note: '❓高さはどう求める？→「体積＝底面積×高さ」なので、高さ＝体積÷底面積です。27÷36＝0.75cm。❓なぜわり算？→底面積36をかけて27になる数（厚さ）をさがすからです。',
        add: band(150, bb(166, '27 ÷ 36 ＝ 0.75cm', C.green, FILL.green, 16)),
      },
      {
        note: '❓検算は？→水面が0.75cm上がると、ふえた水の体積は 36×0.75＝27cm³で、おもりの体積と同じです。',
        add: band(150, bb(160, '36 × 0.75 ＝ 27cm³ ✓', C.green, FILL.green, 15), tx(212, 'おもりの体積27cm³と同じ', 12, C.gray)),
      },
      {
        note: '答え：0.75cm。❓ほかに確かめることは？→おもりの高さ3cmは水の深さ4cmより低いので、完全に沈みます。水面は4.75cmで、水そうの高さ10cmを超えません。',
        add: band(150, bb(156, '答え 0.75cm', C.green, FILL.green, 16), tx(204, 'おもり3cm ＜ 水4cm → 完全に沈む', 12), tx(226, '水面 4.75cm ＜ 10cm → あふれない', 12)),
      },
    ], '沈めた体積 ÷ 底面積 ＝ 上がる高さ');
  })(),

  // ═════════ 南山中 理科② てこ ═════════
  nagoya_nanzan_rika_002: leverFig({ lw: 60, ld: 30, rd: 20, ans: 90, px: 150, sc: 4, barL: 10, barR: 250, extra: '支点に近い（20cm）ので、重いおもり（90g）が必要です。' }, 'てこ：重さ×距離が左右で同じ'),

  // ═════════ 南山中 理科⑤ 月の満ち欠け ═════════
  nagoya_nanzan_rika_005: show([
    {
      note: '月が満ち欠けして見える理由は何でしょう。❓まず、月はなぜ光って見えるのでしょう。',
      add: [...sunEarth(), ...moonDot(270), ...band(150, tx(180, '月の満ち欠けの理由は？', 14, C.red, true))],
    },
    {
      note: '❓月はなぜ光って見える？→月は自分では光らず、太陽の光が当たって反射（はんしゃ）しているからです。太陽がわの半分だけが、いつも光っています。',
      add: [...moonDot(0), ...moonDot(90), ...moonDot(180), ...band(150, tx(176, '月は太陽の光を反射して光る', 13, C.main, true), tx(204, 'いつも太陽がわの半分が光っている', 12))],
    },
    {
      note: '❓いつも半分が光っているなら、形が変わるのはなぜ？→月が地球のまわりを回ると、地球から見える「光っている面」の向きが変わるからです。',
      add: [...arcArrow(OC.x, OC.y, OC.R + 9, 180, 345, C.blue), ...band(150, tx(176, '月が地球のまわりを回る（公転〈こうてん〉）', 12, C.blue, true), tx(204, '約29.5日で1周', 12, C.gray))],
    },
    {
      note: '❓新月と満月では？→新月は、月が太陽と地球のあいだにあり、光る面が地球の反対を向くので見えません。満月は、月が太陽の反対がわにあり、光る面が地球を向くので、丸く見えます。',
      add: [phLab(180, '新月'), phLab(0, '満月'), ...band(150, tx(176, '新月：光る面が地球と反対 → 見えない', 12), tx(204, '満月：光る面が地球を向く → 丸い', 12))],
    },
    {
      note: '❓つまり、満ち欠けの理由は？→月と太陽の位置関係が変わるため、光っている面の見える部分が変わるからです。',
      add: band(150, bb(166, '月と太陽の位置関係が変わる', C.green, FILL.green, 15), tx(214, '→ 光る面の見える部分が変わる', 12, C.gray)),
    },
    {
      note: '❓月食（げっしょく）とはちがう？→月食は、太陽・地球・月が一直線に並び、地球のかげが月に入る現象です。満ち欠けは毎月くり返しますが、月食はまれにしか起こりません。',
      add: fresh(ci(30, 75, 18, '太陽', C.red, FILL.red, 10), ci(150, 75, 14, '地球', C.blue, FILL.blue, 9), ci(240, 75, 11, '月', C.gray, FILL.gray, 11), ln(166, 66, 290, 60, C.gray, true, 1.5), ln(166, 84, 290, 90, C.gray, true, 1.5), lb(270, 50, '地球のかげ', 10, C.gray, 'middle', true), ...band(150, tx(176, '月食：地球のかげが月に入る', 13, C.gray, true), tx(204, '満ち欠け：位置関係で見え方が変わる', 12))),
    },
    {
      note: '答え：月と太陽の位置関係が変わるため。❓ほかの選択肢は？→月の色は変化しません。月は自分で光りません。地球の影がかかるのは月食で、満ち欠けとは別の現象です。',
      add: fresh(bx(20, 16, 280, 34, '月と太陽の位置関係が変わるため ✓', C.green, FILL.green, 14), bx(20, 62, 280, 26, '× 月の色が変化するため', C.red, FILL.red, 11), bx(20, 96, 280, 26, '× 地球のかげがかかるため（月食）', C.red, FILL.red, 11), bx(20, 130, 280, 26, '× 月が自転しないため', C.red, FILL.red, 11), tx(190, '満ち欠けの周期は約29.5日', 12, C.gray)),
    },
  ], '満ち欠けは位置関係の変化'),

  // ═════════ 南山中 理科② 並列と直列 ═════════
  nagoya_nanzan_rika_007: show([
    {
      note: '同じ豆電球2個と電池1個で、豆電球を直列（ちょくれつ）につないだ回路と、並列（へいれつ）につないだ回路をつくります。豆電球の明るさをくらべましょう。',
      add: [...serC(SX, 26, CW, 2), ...parC(PX, 26, CW, 2), lb(SX + CW / 2, 122, '直列', 13, C.red, 'middle', true), lb(PX + CW / 2, 122, '並列', 13, C.green, 'middle', true), ...band(150, tx(180, 'どちらの豆電球が明るい？', 14, C.red, true))],
    },
    {
      note: '❓明るさは何で決まる？→豆電球に流れる電流（電気の流れ）の大きさです。電流が大きいほど明るくなります。電池1個に豆電球1個のときの電流を①とします。',
      add: band(150, tx(176, '明るさ ＝ 豆電球を流れる電流の大きさ', 13, C.ink, true), tx(204, '電池1個＋豆電球1個 → 電流①', 12, C.gray)),
    },
    {
      note: '❓直列は、電気の通り道がどうなっている？→道は1本で、豆電球を2個つづけて通ります。❓そうすると？→通りにくさが、豆電球1個ぶんを1として、1＋1＝2になります。',
      add: [...serC(SX, 26, CW, 2, [], C.red), ...band(150, bb(160, '直列：通りにくさ ＝ 1 ＋ 1 ＝ 2', C.red, FILL.red, 13), tx(212, '道は1本で、2個つづけて通る', 11, C.gray))],
    },
    {
      note: '❓通りにくさ2だと、電流は？→電池1個の押す力は同じなので、電流は①÷2＝①の半分です。電流が半分だから、豆電球は暗くなります。',
      add: [...serC(SX, 26, CW, 2, ['½', '½']), ...band(150, bb(160, '直列：電流 ＝ ① ÷ 2 ＝ ½', C.red, FILL.red, 14), tx(212, 'どちらの豆電球も、1個のときより暗い', 11, C.gray))],
    },
    {
      note: '❓並列は？→道が2本に分かれ、どちらの豆電球も電池と直接つながります。❓それぞれの通りにくさは？→どちらの道も豆電球1個ぶんの1なので、電流はそれぞれ①で、1個のときと同じです。',
      add: [...parC(PX, 26, CW, 2, ['①', '①'], C.green), ...band(150, bb(160, '並列：各道 ① ÷ 1 ＝ ①', C.green, FILL.green, 14), tx(212, '1個だけのときと同じ明るさ', 11, C.gray))],
    },
    {
      note: '❓くらべると？→直列の豆電球は電流½、並列の豆電球は電流①です。電流が大きいほど明るいので、並列のほうが、それぞれの豆電球は明るく光ります。',
      add: fresh(bx(20, 24, 130, 36, '直列 ½', C.red, FILL.red, 16), bx(170, 24, 130, 36, '並列 ①', C.green, FILL.green, 16), tx(96, '電流 ½ ＜ ①', 15, C.ink, true), tx(130, '電流が大きいほうが明るい', 13), ...band(150, bb(166, '並列のほうが明るい', C.green, FILL.green, 16))),
    },
    {
      note: '答え：並列つなぎのほうが、それぞれの豆電球は明るく光る。❓ほかの選択肢は？→並列は道が別々なので、片方をはずしても、もう一方は電池につながったままで光ります。直列は道が1本なので、片方をはずすと全部消えます。',
      add: fresh(...parC(PX, 26, CW, 2, ['①', ''], C.green, 1), ...serC(SX, 26, CW, 2, [], C.red, 72, 0), lb(SX + CW / 2, 122, '直列：はずすと全部消える', 10, C.red, 'middle', true), lb(PX + CW / 2, 122, '並列：もう一方は光る', 10, C.green, 'middle', true), ...band(150, tx(176, '「並列は片方をはずすと消える」は×', 12, C.red, true), tx(204, '並列のほうが、それぞれ明るい ✓', 13, C.green, true))),
    },
  ], '並列のほうが明るい'),

  // ═════════ 南山中 理科④ 地層 ═════════
  nagoya_nanzan_rika_009: show([
    {
      note: 'がけの地層を見ると、下から順に、れき岩・砂岩・泥岩（でいがん）の層が重なっていました。この地層ができたころの様子は、どう変わったでしょう。❓まず、地層はどのようにできるのでしょう。',
      add: [bx(60, 100, 200, 34, 'れき岩（粒が大きい）', C.main, FILL.warm, 12), bx(60, 66, 200, 34, '砂岩', C.main, FILL.yellow, 12), bx(60, 32, 200, 34, '泥岩（粒が小さい）', C.main, FILL.gray, 12), ...band(150, tx(180, '下から れき岩 → 砂岩 → 泥岩', 13), tx(206, 'できた当時の海はどうだった？', 13, C.red, true))],
    },
    {
      note: '❓地層はどうできる？→川が運んだ土や砂が海の底にたまり、下から順に積み重なっていきます。❓だから？→下にある層ほど先にできた、古い層です。',
      add: [ar(280, 130, 280, 36, C.blue), lb(290, 82, '新しい', 10, C.blue, 'start', true), lb(290, 128, '古い', 10, C.gray, 'start', true), ...band(150, tx(180, '下の層ほど古く、上の層ほど新しい', 13, C.blue, true))],
    },
    {
      note: '❓れき・砂・泥のちがいは何を表している？→粒の大きさです。大きくて重いれきは岸の近くにしずみ、小さくて軽い泥は、沖の深い所まで運ばれてからしずみます。',
      add: fresh(ln(20, 40, 20, 120, C.gray, false, 2), lb(20, 30, '岸', 11, C.gray, 'middle', true), pg([[20, 120], [300, 120], [300, 135], [20, 135]], C.gray, FILL.yellow), bx(24, 98, 60, 22, 'れき', C.main, FILL.warm, 11), bx(110, 104, 70, 16, '砂', C.main, FILL.yellow, 11), bx(206, 110, 88, 10, '泥', C.main, FILL.gray, 10), lb(60, 80, '岸の近く・浅い', 10, C.blue, 'middle', true), lb(250, 80, '沖・深い', 10, C.blue, 'middle', true), ...band(150, tx(176, '粒が大きい → 岸の近くにたまる', 12), tx(204, '粒が小さい → 沖の深い所にたまる', 12))),
    },
    {
      note: '❓下から上へ読むと？→れき、砂、泥と、粒がだんだん小さくなっています。つまり、同じ場所にたまる粒が、大きいものから小さいものへ変わったということです。',
      add: band(150, bx(14, 160, 88, 34, '古い\nれき', C.main, FILL.warm, 12), ar(104, 177, 116, 177, C.gray), bx(118, 160, 84, 34, '砂', C.main, FILL.yellow, 12), ar(204, 177, 216, 177, C.gray), bx(218, 160, 88, 34, '新しい\n泥', C.main, FILL.gray, 12), tx(218, '粒が小さくなっていく', 11, C.gray)),
    },
    {
      note: '❓そのとき、場所はどう変わった？→その場所にたまる粒が、れきから泥に変わったので、その場所が、岸に近い浅い所から、しだいに沖合の深い所に変わったといえます。',
      add: fresh(bx(20, 30, 130, 44, '最初\n岸に近い浅い場所', C.main, FILL.warm, 11), ar(152, 52, 168, 52, C.red), bx(170, 30, 130, 44, 'のち\n沖合の深い場所', C.blue, FILL.blue, 11), tx(110, '浅い → 深い に変わった', 14, C.red, true), ...band(150, tx(180, 'れき → 砂 → 泥 ＝ 浅い → 深い', 13))),
    },
    {
      note: '❓逆だったら？→もし深い所から浅い所へ変わったなら、下から泥、砂、れきの順になるはずです。また、火山の噴火で一度にできたものは、粒がそろった1枚の層になります。',
      add: fresh(bx(20, 16, 280, 32, '下から れき→砂→泥 ：浅い→深い ✓', C.green, FILL.green, 12), bx(20, 58, 280, 28, '× 深い→浅い（下から泥→砂→れきになる）', C.red, FILL.red, 11), bx(20, 94, 280, 28, '× 変化なし（粒の大きさが同じになる）', C.red, FILL.red, 11), bx(20, 130, 280, 28, '× 火山が一度に（1枚の層になる）', C.red, FILL.red, 11), tx(190, '地層は、下ほど古い', 12, C.gray)),
    },
    {
      note: '答え：海岸に近い浅い場所から、しだいに沖合の深い場所に変わっていった。❓よくあるまちがいは？→地層の上下と、新旧を逆に考えること。下から上へ読むと、古い時代から新しい時代への変化になります。',
      add: fresh(bx(30, 20, 260, 34, '泥岩（新しい・深い）', C.main, FILL.gray, 12), bx(30, 54, 260, 34, '砂岩', C.main, FILL.yellow, 12), bx(30, 88, 260, 34, 'れき岩（古い・浅い）', C.main, FILL.warm, 12), ...band(150, bb(156, '下から上へ：浅い → 深い', C.green, FILL.green, 15), tx(204, '下 ＝ 古い、上 ＝ 新しい', 12, C.blue), tx(226, '×：上下と新旧を逆にしない', 11, C.red))),
    },
  ], 'れき→砂→泥は浅い→深い'),

  // ═════════ 南山中 理科⑤ ばねばかりと浮力 ═════════
  nagoya_nanzan_rika_010: show([
    {
      note: '重さ120g、体積100cm³の物体を、ばねばかりにつるします。空気中では120gを示します。水に完全に沈めると、ばねばかりは何gを示すでしょう。水1cm³は1gです。',
      add: [bx(110, 8, 70, 26, 'ばねばかり', C.gray, FILL.gray, 10), ln(145, 34, 145, 70, C.gray, false, 1.5), objBox(115, 70), bx(212, 12, 84, 28, '120g', C.ink, FILL.yellow, 14), lb(254, 52, '空気中の値', 10, C.gray), ...band(150, tx(180, '水中では？', 14, C.red, true))],
    },
    {
      note: '❓水に入れると、数字はふえる？へる？→へります。❓なぜへる？→水が物体を上に押し上げる力（浮力〈ふりょく〉）が、ばねが引かれるのを助けるからです。',
      add: fresh(bx(110, 8, 70, 26, 'ばねばかり', C.gray, FILL.gray, 10), bx(50, 70, 180, 75, undefined, FILL.blue, FILL.blue), ln(50, 40, 50, 145, C.ink, false, 2), ln(50, 145, 230, 145, C.ink, false, 2), ln(230, 40, 230, 145, C.ink, false, 2), ln(145, 34, 145, 92, C.gray, false, 1.5), objBox(115, 92), bx(238, 12, 72, 28, '？g', C.red, FILL.red, 14), ...band(150, tx(180, '水に入れると、数字はへる', 13), tx(206, '浮力が上に押し上げるから', 12, C.red, true))),
    },
    {
      note: '❓浮力は何g？→おしのけた水の重さです。完全に沈んでいるので、おしのけた水は物体と同じ100cm³。水1cm³は1gなので、100×1＝100gです。',
      add: band(150, bb(156, 'おしのけた水 ＝ 100cm³', C.blue, FILL.blue, 13), bb(194, '浮力 ＝ 100 × 1 ＝ 100g', C.red, FILL.red, 14)),
    },
    {
      note: '❓ばねは何を引かれている？→物体には、下向きに重さ120g、上向きに浮力100gがはたらきます。ばねが引かれるのは、その差の分だけです。',
      add: [ar(200, 100, 200, 136, C.blue), ar(96, 130, 96, 98, C.red), ...band(150, tx(176, '下向き：重さ120g（青）', 12, C.blue, true), tx(200, '上向き：浮力100g（赤）', 12, C.red, true), tx(224, '→ ばねが引かれるのは、その差', 11, C.gray))],
    },
    {
      note: '❓なぜひき算？→120gのうち100gは水が支えてくれているので、ばねが支えるのは残りだけです。120−100＝20gです。',
      add: [bx(238, 12, 72, 28, '20g', C.green, FILL.green, 14), ...band(150, bb(166, '120 − 100 ＝ 20g', C.green, FILL.green, 16))],
    },
    {
      note: '❓検算は？→ばねが支える20gと、水が支える100gをたすと 20＋100＝120gで、物体の重さにもどります。',
      add: band(150, bx(10, 160, 92, 34, 'ばね 20g', C.green, FILL.green, 12), lb(108, 180, '＋', 16), bx(120, 160, 92, 34, '水 100g', C.blue, FILL.blue, 12), lb(218, 180, '＝', 16), bx(228, 160, 82, 34, '重さ 120g', C.gray, FILL.gray, 11), tx(216, '支える力の合計が重さと同じ ✓', 11, C.gray)),
    },
    {
      note: '答え：20g。❓よくあるまちがいは？→浮力を物体の重さ（120g）から求めようとすること。浮力は「おしのけた水の重さ」の100gで決まり、物体の重さは関係ありません。',
      add: band(150, bb(156, '答え 20g', C.green, FILL.green, 16), tx(204, '浮力 ＝ おしのけた水の重さ（100g）', 12, C.blue, true), tx(226, '×：浮力を重さ120gから求める', 11, C.red)),
    },
  ], '水中の値 ＝ 重さ − 浮力'),

  // ═════════ 東海中 算数① 3割引き ═════════
  nagoya_tokai_sansu_001: (() => {
    const blocks = (n: number, from: number, t: string, col: string, fill: string): DiagramElement[] =>
      Array.from({ length: n }, (_, i) => bx(20 + (from + i) * 28, 56, 28, 40, t, col, fill, 9));
    const all = () => blocks(10, 0, '', C.gray, FILL.gray);
    return show([
      {
        note: '定価2400円の商品を3割引きで売りました。売った値段はいくらでしょう。❓まず、「割（わり）」は何を表しているのでしょう。',
        add: [lb(160, 36, '定価 2400円', 13, C.ink, 'middle', true), ...all(), ...band(150, tx(180, '売った値段 ＝ ？円', 14, C.red, true))],
      },
      {
        note: '❓1割とは？→全体を10に分けた1つぶん（10分の1、10%）のことです。❓だから？→2400円を10こに分けると、1こぶんは 2400÷10＝240円です。',
        add: [...blocks(10, 0, '240', C.gray, FILL.gray), ...band(150, bb(160, '2400 ÷ 10 ＝ 240円（1割）', C.blue, FILL.blue, 14), tx(212, '1割 ＝ 10分の1 ＝ 10%', 12, C.gray))],
      },
      {
        note: '❓3割が0.3なのはなぜ？→1割は10分の1で0.1です。3割は0.1が3つなので0.3になります。',
        add: band(150, tx(176, '1割 ＝ 0.1', 14, C.ink, true), tx(204, '3割 ＝ 0.1 × 3 ＝ 0.3', 14, C.purple, true)),
      },
      {
        note: '❓3割引きとは？→3こぶんを安くするので、赤い3こが値引きです。240×3＝720円が値引き額です。',
        add: [...blocks(3, 0, '240', C.red, FILL.red), ...band(150, bb(160, '240 × 3 ＝ 720円（値引き額）', C.red, FILL.red, 14))],
      },
      {
        note: '❓売った値段は？→のこりの7こぶんです。❓なぜ7こ？→10こから3こ引くので、10−3＝7こです。240×7＝1680円です。',
        add: [...blocks(7, 3, '240', C.green, FILL.green), ...band(150, bb(156, '10 − 3 ＝ 7こぶん', C.blue, FILL.blue, 14), bb(194, '240 × 7 ＝ 1680円', C.green, FILL.green, 15))],
      },
      {
        note: '❓式にまとめると？→のこり7こぶんは70%＝0.7です。(1−0.3)をかければ1回で出ます。2400×0.7＝1680円です。',
        add: band(150, bb(156, '2400 × (1 − 0.3) ＝ 2400 × 0.7', C.blue, FILL.blue, 13), bb(194, '＝ 1680円', C.green, FILL.green, 15)),
      },
      {
        note: '答え：1680円。❓検算は？→値引き額 2400×0.3＝720円を引くと 2400−720＝1680円で同じです。❓よくあるまちがいは？→720円を売った値段にしてしまうこと。720円は値引き額です。',
        add: band(150, tx(172, '2400 − 720 ＝ 1680円 ✓', 14, C.green, true), tx(200, '×：720円は値引き額であって売値ではない', 12, C.red)),
      },
    ], '3割引き ＝ 定価の7割');
  })(),

  // ═════════ 東海中 算数③ 三角形の角 ═════════
  nagoya_tokai_sansu_003: angleFig(54, 68, ['A', 'B', 'C'], '三角形の内角の和は180度'),

  // ═════════ 東海中 算数④ 円から内接する正方形を引く ═════════
  nagoya_tokai_sansu_004: (() => {
    const circ = ci(110, 80, 60, undefined, C.blue, FILL.blue);
    const sqr = pg([[110, 20], [170, 80], [110, 140], [50, 80]], C.main, FILL.yellow);
    return show([
      {
        note: '半径6cmの円に、正方形が内接（ないせつ）しています。正方形の対角線は円の直径12cmです。円の面積から正方形の面積をひいた面積は？円周率は3.14です。',
        add: [circ, sqr, lb(250, 70, '半径 6cm', 11, C.blue, 'middle', true), lb(250, 94, '対角線 12cm', 11, C.main, 'middle', true), ...band(150, tx(180, '円の面積 − 正方形の面積 ＝ ？', 13, C.red, true))],
      },
      {
        note: '❓円の面積は？→半径×半径×円周率で 6×6×3.14＝113.04cm²です。❓なぜこの式？→半径×半径の正方形（36cm²）の、ちょうど3.14倍が円の面積だからです。',
        add: [ln(110, 80, 170, 80, C.red, false, 2), lb(140, 72, '6', 11, C.red, 'middle', true), ...band(150, bb(160, '6 × 6 × 3.14 ＝ 113.04cm²', C.blue, FILL.blue, 14), tx(212, '半径×半径の正方形の3.14倍', 11, C.gray))],
      },
      {
        note: '❓正方形の面積は？→一辺の長さがわかりません。そこで、対角線（たいかくせん）を2本ひいて、4つの三角形に分けます。',
        add: [ln(110, 20, 110, 140, C.red, false, 2), ln(50, 80, 170, 80, C.red, false, 2), ...band(150, tx(180, '対角線で4つの三角形に分ける', 13, C.red, true))],
      },
      {
        note: '❓4つの三角形は？→どれも、直角をはさむ2辺が半径の6cmの直角二等辺三角形です。1つは 6×6÷2＝18cm²、4つで 18×4＝72cm²です。❓なぜ÷2？→6×6の正方形を、対角線で半分にした形だからです。',
        add: [pg([[110, 80], [110, 20], [170, 80]], C.green, FILL.green), ...band(150, bb(156, '1つ ＝ 6 × 6 ÷ 2 ＝ 18cm²', C.green, FILL.green, 13), bb(194, '4つ ＝ 18 × 4 ＝ 72cm²', C.red, FILL.red, 14))],
      },
      {
        note: '❓もっと速い方法は？→外側に、12cm×12cmの正方形（144cm²）をかくと、内側の正方形はそのちょうど半分です。だから対角線×対角線÷2で、12×12÷2＝72cm²です。',
        add: [ln(50, 20, 170, 20, C.gray, true, 1.5), ln(170, 20, 170, 140, C.gray, true, 1.5), ln(170, 140, 50, 140, C.gray, true, 1.5), ln(50, 140, 50, 20, C.gray, true, 1.5), ...band(150, tx(172, '外側の正方形 12×12 ＝ 144cm²', 12), bb(186, '内側 ＝ 12 × 12 ÷ 2 ＝ 72cm²', C.red, FILL.red, 13))],
      },
      {
        note: '❓あとは引き算。→円の面積から正方形の面積をひきます。113.04−72＝41.04cm²です。',
        add: band(150, bb(166, '113.04 − 72 ＝ 41.04cm²', C.green, FILL.green, 16)),
      },
      {
        note: '答え：41.04cm²。❓検算は？→内側の正方形72 ＜ 円113.04 ＜ 外側の正方形144と、大きさの順が正しいか確かめます。また、ひいた答えは円の面積より小さいので、筋が通っています。',
        add: band(150, tx(168, '72 ＜ 113.04 ＜ 144 ✓', 14, C.green, true), tx(196, '答え 41.04cm²', 15, C.green, true), tx(222, '×：一辺がわからないまま「一辺×一辺」とする', 11, C.red)),
      },
    ], '円 − 対角線の正方形');
  })(),

  // ═════════ 東海中 算数⑤ つるかめ算 ═════════
  nagoya_tokai_sansu_005: show([
    {
      note: '1個80円のみかんと、1個120円のりんごを、合わせて15個買うと、代金は1480円でした。りんごは何個でしょう。❓まず、全部みかんだったらいくらになるでしょう。',
      add: [...dotRow(15, Array(15).fill('c') as ('a' | 'b' | 'c')[]), lb(160, 30, '合わせて15個', 12, C.ink, 'middle', true), lb(80, 84, 'みかん 80円', 11, C.main, 'middle', true), lb(240, 84, 'りんご 120円', 11, C.blue, 'middle', true), ...band(150, tx(180, '代金の合計 1480円', 13), tx(206, 'りんご ＝ ？個', 14, C.red, true))],
    },
    {
      note: '❓まず、もし15個ぜんぶがみかんだったら？→80円が15個なので 80×15＝1200円です。❓なぜこう考える？→ひとつの種類にそろえると、計算が簡単になり、実際とのちがいが見えてくるからです。',
      add: [...dotRow(15, Array(15).fill('a') as ('a' | 'b' | 'c')[]), ...band(150, bb(166, '全部みかん：80 × 15 ＝ 1200円', C.main, FILL.warm, 14))],
    },
    {
      note: '❓実際とのちがいは？→実際の代金は1480円で、1200円より 1480−1200＝280円多いです。この280円は、りんごがまざっているぶんの差です。',
      add: band(150, bx(20, 158, 160, 26, '全部みかん 1200円', C.main, FILL.warm, 12), bx(20, 190, 280, 26, '実際 1480円', C.green, FILL.green, 12), bx(180, 158, 120, 26, '差 280円', C.red, FILL.red, 12), tx(232, '1480 − 1200 ＝ 280円', 11, C.gray)),
    },
    {
      note: '❓どうすれば280円ふやせる？→みかん1個をりんご1個にかえると、代金は 120−80＝40円ふえます。かえた個数が、りんごの個数です。',
      add: [ci(20, 52, 8, undefined, C.blue, FILL.blue), ar(30, 70, 30, 82, C.red), lb(36, 108, '1個かえると 120−80＝40円ふえる', 10, C.red, 'start', true), ...band(150, bb(166, 'かえる1個で ＋40円', C.red, FILL.red, 15))],
    },
    {
      note: '❓何個かえる？→40円ずつふえて、ちょうど280円になるまでです。280÷40＝7なので、7個かえます。❓なぜわり算？→280円の中に40円が何回入るかを知りたいからです。',
      add: band(150, bb(156, '280 ÷ 40 ＝ 7個', C.green, FILL.green, 16), tx(206, '40円が何回で280円になるか', 11, C.gray)),
    },
    {
      note: '7個がりんごなので、りんごは7個、みかんは15−7＝8個です。',
      add: [...dotRow(15, [...Array(8).fill('a'), ...Array(7).fill('b')] as ('a' | 'b' | 'c')[]), ...band(150, tx(176, 'みかん 15 − 7 ＝ 8個', 13, C.main, true), tx(204, 'りんご 7個', 14, C.blue, true))],
    },
    {
      note: '答え：7個。❓検算は？→りんご7個で 120×7＝840円、みかん8個で 80×8＝640円。840＋640＝1480円で合計と同じです。❓よくあるまちがいは？→280円を120円でわること。ふえるのは40円ずつです。',
      add: band(150, tx(170, '120×7 ＋ 80×8 ＝ 840 ＋ 640 ＝ 1480円 ✓', 12, C.green, true), tx(198, '答え りんご 7個', 15, C.green, true), tx(224, '×：280÷120（1個かえてふえるのは40円）', 11, C.red)),
    },
  ], 'つるかめ算：差÷1個あたりの差'),

  // ═════════ 東海中 算数⑦ 立方体の角を切り取る ═════════
  nagoya_tokai_sansu_007: (() => {
    const F = { bl: [64, 140], br: [160, 140], tl: [64, 44], tr: [160, 44] };
    const B = { tl: [104, 12], tr: [200, 12], br: [200, 108], bl: [104, 108] };
    const M1 = [112, 140], M2 = [64, 92], M3 = [84, 124];
    const cube: DiagramElement[] = [
      pg([F.tl, F.tr, F.br, F.bl] as [number, number][], C.gray, FILL.warm),
      pg([F.tl, B.tl, B.tr, F.tr] as [number, number][], C.gray, FILL.yellow),
      pg([F.tr, B.tr, B.br, F.br] as [number, number][], C.gray, FILL.warm),
      ln(B.tl[0], B.tl[1], B.bl[0], B.bl[1], C.gray, true, 1.2), ln(B.bl[0], B.bl[1], B.br[0], B.br[1], C.gray, true, 1.2), ln(B.bl[0], B.bl[1], F.bl[0], F.bl[1], C.gray, true, 1.2),
    ];
    return show([
      {
        note: '1辺6cmの立方体の1つの頂点（ちょうてん）を、その頂点に集まる3辺の中点を通る平面で切り取ります。切り取られる小さい立体の体積は？❓まず、どんな形の立体が切り取られるのでしょう。',
        add: [...cube, ci(F.bl[0], F.bl[1], 4, undefined, C.red, FILL.red), lb(F.bl[0] - 6, F.bl[1] + 4, '切る頂点', 9, C.red, 'end', true), lb(266, 30, '1辺 6cm', 12, C.ink, 'middle', true), ...band(150, tx(186, '切り取られる立体の体積 ＝ ？', 13, C.red, true))],
      },
      {
        note: '❓どんな立体？→頂点と、そこに集まる3辺の中点3つをむすんだ、三角すいです。3つの辺は、それぞれ半分の3cmです。',
        add: [pg([M1, M2, M3] as [number, number][], C.red, FILL.red), ln(F.bl[0], F.bl[1], M1[0], M1[1], C.red, false, 2.5), ln(F.bl[0], F.bl[1], M2[0], M2[1], C.red, false, 2.5), ln(F.bl[0], F.bl[1], M3[0], M3[1], C.red, true, 2), lb(262, 52, '3辺の中点を通る', 11, C.red, 'middle', true), ...band(150, tx(180, '三角すいが切り取られる', 14, C.red, true), tx(206, 'たがいに直角な3辺は、どれも3cm', 12, C.gray))],
      },
      {
        note: '❓三角すいの体積の求め方は？→底面積×高さ÷3です。❓なぜ÷3？→同じ底面と高さの三角柱は、3つの同じ体積の三角すいに分けられるので、すいは柱の3分の1だからです。',
        add: band(150, bb(160, '三角すい ＝ 底面積 × 高さ ÷ 3', C.purple, FILL.purple, 14), tx(212, 'すいは、柱の3分の1', 12, C.gray)),
      },
      {
        note: '❓底面は？→頂点をふくむ面のうち、前の面の三角形を底面にします。直角をはさむ2辺が3cmずつなので、面積は 3×3÷2＝4.5cm²です。',
        add: [pg([[246, 130], [300, 130], [246, 78]], C.blue, FILL.blue), lb(273, 143, '3cm', 10, C.blue, 'middle', true), lb(240, 104, '3cm', 10, C.blue, 'end', true), ...band(150, bb(166, '底面積 ＝ 3 × 3 ÷ 2 ＝ 4.5cm²', C.blue, FILL.blue, 14))],
      },
      {
        note: '❓高さは？→底面（前の面）に直角にのびる辺の長さです。奥へのびる辺の半分なので3cmです。',
        add: [ln(F.bl[0], F.bl[1], M3[0], M3[1], C.green, false, 3), lb(266, 66, '高さ 3cm', 12, C.green, 'middle', true), ...band(150, bb(166, '高さ ＝ 3cm', C.green, FILL.green, 15))],
      },
      {
        note: '体積は 4.5×3÷3＝4.5cm³です。3をかけて3でわるので、4.5のままになります。',
        add: band(150, bb(156, '4.5 × 3 ÷ 3 ＝ 4.5cm³', C.green, FILL.green, 16), tx(206, '3をかけて、3でわる', 12, C.gray)),
      },
      {
        note: '答え：4.5cm³。❓検算は？→1辺3cmの立方体（3×3×3＝27cm³）の角には、同じ三角すいが6つ入ります。27÷6＝4.5cm³で一致します。❓まちがいは？→÷3を忘れて13.5cm³にすること。すいは柱の3分の1です。',
        add: fresh(bx(40, 30, 100, 80, '27cm³', C.gray, FILL.gray, 14), lb(230, 54, '27 ÷ 6 ＝ 4.5', 14, C.green, 'middle', true), lb(230, 82, 'すいが6つ入る', 11, C.gray), ...band(150, tx(176, '答え 4.5cm³ ✓', 15, C.green, true), tx(204, '×：÷3を忘れると13.5cm³', 12, C.red))),
      },
    ], '三角すい＝底面積×高さ÷3');
  })(),

  // ═════════ 東海中 算数⑨ 相似と面積比 ═════════
  nagoya_tokai_sansu_009: (() => {
    const A = [160, 20], Bp = [60, 140], Cp = [260, 140];
    const P = (i: number, j: number) => [A[0] + i * -20 + j * 20, A[1] + i * 24 + j * 24] as [number, number];
    const D = P(2, 0), E = P(0, 2);
    const grid = (): DiagramElement[] => {
      const out: DiagramElement[] = [];
      for (let k = 1; k <= 4; k++) {
        out.push(ln(P(k, 0)[0], P(k, 0)[1], P(0, k)[0], P(0, k)[1], C.gray, false, 1));
        out.push(ln(P(0, k)[0], P(0, k)[1], P(5 - k, k)[0], P(5 - k, k)[1], C.gray, false, 1));
        out.push(ln(P(k, 0)[0], P(k, 0)[1], P(k, 5 - k)[0], P(k, 5 - k)[1], C.gray, false, 1));
      }
      return out;
    };
    const tri = pg([A, Bp, Cp] as [number, number][], C.main, FILL.warm);
    const de = ln(D[0], D[1], E[0], E[1], C.red, false, 2.5);
    const names = [lb(A[0], A[1] - 7, 'A', 11, C.ink, 'middle', true), lb(Bp[0] - 8, Bp[1] + 4, 'B', 11, C.ink, 'middle', true), lb(Cp[0] + 8, Cp[1] + 4, 'C', 11, C.ink, 'middle', true), lb(D[0] - 9, D[1] + 2, 'D', 11, C.ink, 'middle', true), lb(E[0] + 9, E[1] + 2, 'E', 11, C.ink, 'middle', true)];
    return show([
      {
        note: '三角形ABCの辺AB上に点D、辺AC上に点Eがあり、DEはBCと平行で、AD:DB＝2:3です。三角形ADEと三角形ABCの面積比は？❓まず、この2つの三角形は、どんな関係でしょう。',
        add: [tri, de, ...names, lb(84, 50, '2', 10, C.blue, 'middle', true), lb(66, 96, '3', 10, C.green, 'middle', true), ...band(150, tx(180, 'AD:DB ＝ 2:3、DE ∥ BC', 13), tx(206, '面積比 ADE : ABC ＝ ？', 14, C.red, true))],
      },
      {
        note: '❓2つの三角形は、相似（そうじ）？→DEとBCが平行なので、角ADEと角ABC、角AEDと角ACBがそれぞれ等しくなります（同位角〈どういかく〉）。角Aは共通です。3つの角が等しいので、形が同じ相似です。',
        add: [lb(D[0] + 18, D[1] + 14, '●', 11, C.blue, 'middle', true), lb(Bp[0] + 18, Bp[1] - 8, '●', 11, C.blue, 'middle', true), lb(E[0] - 18, E[1] + 14, '○', 11, C.green, 'middle', true), lb(Cp[0] - 18, Cp[1] - 8, '○', 11, C.green, 'middle', true), ...band(150, tx(176, '平行線の同位角が等しい', 13, C.purple, true), tx(204, '3つの角が等しい → 相似（形が同じ）', 12))],
      },
      {
        note: '❓相似比は？→AD:DBが2:3なので、ABは 2＋3＝5。AD:AB＝2:5が相似比です。❓注意することは？→DBの3は、小さい三角形の辺ではないので、2:3を相似比にしてはいけません。',
        add: band(150, bb(160, 'AD : AB ＝ 2 : (2＋3) ＝ 2 : 5', C.blue, FILL.blue, 14), tx(212, '×：2:3（DBは小さい三角形の辺ではない）', 11, C.red)),
      },
      {
        note: '❓長さが2:5なら、面積は？→ABを5等分し、各点から辺に平行な線を引くと、大きい三角形は、同じ大きさの小さな三角形25個に分かれます。',
        add: [...grid(), ...band(150, tx(176, '大きい三角形 ＝ 同じ小さな三角形 25個', 13, C.ink, true), tx(204, '（5×5 ＝ 25）', 12, C.gray))],
      },
      {
        note: '❓ADEは何個？→1辺が小さい三角形2個ぶんの三角形で、上の段に1個、2段目に3個の、合わせて 1＋3＝4個です。',
        add: [pg([A, D, E] as [number, number][], C.red, FILL.red), ...grid(), de, ...names, ...band(150, tx(176, 'ADE ＝ 1 ＋ 3 ＝ 4個', 14, C.red, true), tx(204, '（2×2 ＝ 4）', 12, C.gray))],
      },
      {
        note: '❓つまり面積比は？→ADE:ABC＝4個:25個＝4:25です。❓なぜ2乗？→長さは縦にも横にも2倍、5倍になるので、面積は2×2と5×5になるからです。',
        add: band(150, bb(156, '2×2 : 5×5 ＝ 4 : 25', C.green, FILL.green, 16), tx(206, '面積は、縦と横の両方にふえる → 2乗', 12, C.gray)),
      },
      {
        note: '答え：4:25。❓検算は？→ADEが4個、ABC全体が25個なので、残りの台形DBCEは 25−4＝21個で、ADE:DBCE＝4:21になります。❓まちがいは？→相似比をそのまま面積比の2:5にすること。',
        add: band(150, tx(170, 'ADE 4個、台形DBCE 21個、合わせて25個 ✓', 12, C.green, true), tx(198, '答え 4 : 25', 15, C.green, true), tx(224, '×：2:5（面積は2乗する）', 12, C.red)),
      },
    ], '相似な図形：面積比は相似比の2乗');
  })(),

  // ═════════ 東海中 理科② てこ ═════════
  nagoya_tokai_rika_002: leverFig({ lw: 30, ld: 40, rd: 60, ans: 20, px: 160, sc: 2.1, barL: 34, barR: 286, extra: '支点から遠い（60cm）ので、軽いおもり（20g）でつり合います。' }, 'てこ：重さ×距離が左右で同じ'),

  // ═════════ 東海中 理科④ 豆電球3個 ═════════
  nagoya_tokai_rika_004: show([
    {
      note: '同じ豆電球3個と電池1個で、豆電球をすべて直列（ちょくれつ）につないだ回路と、すべて並列（へいれつ）につないだ回路をつくります。豆電球1個あたりの明るさをくらべましょう。電池1個に豆電球1個のときの電流（電気の流れ）を①とします。',
      add: [...serC(SX, 12, CW, 3), ...parC(PX, 12, CW, 3), lb(SX + CW / 2, 143, '直列', 10, C.red, 'middle', true), lb(PX + CW / 2, 143, '並列', 10, C.green, 'middle', true), ...band(150, tx(186, '1個あたり、どちらが明るい？', 14, C.red, true))],
    },
    {
      note: '❓直列は、電気の通り道がどうなっている？→道は1本で、豆電球を3個つづけて通ります。通りにくさは、豆電球1個ぶんを1として、1＋1＋1＝3です。',
      add: fresh(...serC(SX, 12, CW, 3, [], C.red), ...parC(PX, 12, CW, 3), lb(SX + CW / 2, 143, '直列', 10, C.red, 'middle', true), lb(PX + CW / 2, 143, '並列', 10, C.green, 'middle', true), ...band(150, bb(160, '直列：通りにくさ ＝ 1＋1＋1 ＝ 3', C.red, FILL.red, 13), tx(212, '道は1本で、3個つづけて通る', 11, C.gray))),
    },
    {
      note: '❓通りにくさ3だと、電流は？→電池1個の押す力は同じなので、電流は①÷3＝①の3分の1です。豆電球は1個のときよりずっと暗くなります。',
      add: fresh(...serC(SX, 12, CW, 3, ['⅓', '⅓', '⅓']), ...parC(PX, 12, CW, 3), lb(SX + CW / 2, 143, '直列', 10, C.red, 'middle', true), lb(PX + CW / 2, 143, '並列', 10, C.green, 'middle', true), ...band(150, bb(160, '直列：電流 ＝ ① ÷ 3 ＝ ⅓', C.red, FILL.red, 14), tx(212, '3個とも、1個のときの3分の1', 11, C.gray))),
    },
    {
      note: '❓並列は？→道が3本に分かれ、どの豆電球も電池と直接つながります。❓それぞれの通りにくさは？→どの道も豆電球1個ぶんの1なので、電流はそれぞれ①で、1個のときと同じです。',
      add: fresh(...serC(SX, 12, CW, 3, ['⅓', '⅓', '⅓']), ...parC(PX, 12, CW, 3, ['①', '①', '①'], C.green), lb(SX + CW / 2, 143, '直列', 10, C.red, 'middle', true), lb(PX + CW / 2, 143, '並列', 10, C.green, 'middle', true), ...band(150, bb(160, '並列：各道 ① ÷ 1 ＝ ①', C.green, FILL.green, 14), tx(212, '1個のときと同じ電流', 11, C.gray))),
    },
    {
      note: '❓電流が3本に分かれるのに、なぜ暗くならない？→電池からは、3つの道ぶんの電流が出ていくからです。並列は電池から①×3＝③が流れ、そのぶん電池は早く弱ります。',
      add: band(150, bx(14, 160, 130, 40, '並列：電池から ③\n各道 ①', C.green, FILL.green, 11), bx(176, 160, 130, 40, '直列：電池から ⅓\nどこも ⅓', C.red, FILL.red, 11), tx(222, '電池は並列のほうが、早く弱る', 11, C.gray)),
    },
    {
      note: '❓1個あたりの明るさをくらべると？→並列は電流①、直列は電流⅓です。電流が大きいほど明るいので、並列のほうが1個あたり明るくなります。',
      add: fresh(bx(20, 24, 130, 36, '直列 ⅓', C.red, FILL.red, 16), bx(170, 24, 130, 36, '並列 ①', C.green, FILL.green, 16), tx(96, '電流 ⅓ ＜ ①', 15, C.ink, true), tx(130, '電流が大きいほうが明るい', 13), ...band(150, bb(166, '並列のほうが1個あたり明るい', C.green, FILL.green, 15))),
    },
    {
      note: '答え：並列つなぎの方が1個あたり明るい。❓ほかの選択肢は？→直列と並列で電流がちがうので「同じ明るさ」はまちがい。並列でも電池と直接つながるので、点灯しないこともありません。',
      add: fresh(bx(20, 16, 280, 34, '並列つなぎの方が1個あたり明るい ✓', C.green, FILL.green, 14), bx(20, 62, 280, 26, '× 直列のほうが明るい（電流が⅓で暗い）', C.red, FILL.red, 11), bx(20, 96, 280, 26, '× どちらも同じ明るさ（電流がちがう）', C.red, FILL.red, 11), bx(20, 130, 280, 26, '× 並列では点灯しない（各道に電流①）', C.red, FILL.red, 11), tx(190, '並列：各① ／ 直列：各⅓', 12, C.gray)),
    },
  ], '並列のほうが1個あたり明るい'),

  // ═════════ 東海中 理科⑤ 満ち欠けの周期 ═════════
  nagoya_tokai_rika_005: show([
    {
      note: '満月（まんげつ）から次の満月まで（月の満ち欠けの周期）は、約何日でしょう。❓まず、「満月から満月」とは、月がどうなることでしょう。',
      add: [...sunEarth(), ...moonDot(0), phLab(0, '満月'), ...band(150, tx(180, '満月 → 次の満月 ＝ 何日？', 14, C.red, true))],
    },
    {
      note: '❓満月から満月とは？→太陽・地球・月の位置関係が、もとにもどることです。月が、また太陽の反対がわにきたときに、次の満月になります。',
      add: [ln(37, OC.y, 146, OC.y, C.red, true, 1.5), ln(174, OC.y, 202, OC.y, C.red, true, 1.5), ...band(150, tx(176, '太陽と反対がわに、また月がくる', 13, C.red, true), tx(204, '＝ 位置関係がもとにもどる', 12, C.gray))],
    },
    {
      note: '❓月は地球を1周するのに何日かかる？→約27.3日です。星の位置を目じるしにすると、月は約27.3日でもとの向きにもどります。',
      add: [...arcArrow(OC.x, OC.y, OC.R + 9, 0, 345, C.blue), ...band(150, tx(176, '月が地球を1周 ＝ 約27.3日', 14, C.blue, true))],
    },
    {
      note: '❓でも、まだ満月にならないのはなぜ？→月が1周するあいだに、地球も太陽のまわりを進み、太陽の向きが変わるからです。月は、太陽との位置関係がもとにもどるまで、あと約2日だけ追いかけます。',
      add: fresh(bx(10, 30, 180, 44, '月が1周 約27.3日', C.blue, FILL.blue, 13), bx(190, 30, 120, 44, '追いかける\n約2.2日', C.red, FILL.red, 12), tx(104, '27.3 ＋ 2.2 ＝ 29.5日', 15, C.green, true), tx(130, '太陽の向きが動いたぶんを追う', 12, C.gray), ...band(150, tx(180, '地球も太陽のまわりを進むから', 13))),
    },
    {
      note: '❓つまり周期は？→満月から満月、新月から新月までの満ち欠けの周期は、約29.5日です。これが「ひと月」のもとになっています。',
      add: band(150, bb(160, '満ち欠けの周期 ＝ 約29.5日', C.green, FILL.green, 15), tx(212, '満月→満月、新月→新月 どちらも同じ', 12, C.gray)),
    },
    {
      note: '❓ほかの日数の意味は？→満月から、下弦・新月・上弦と、4分の1周ごとに約7日ずつ進みます。約7日は4分の1周、約15日は半周の日数で、どちらも次の満月までではありません。',
      add: fresh(...flow(['満月\n0日', '下弦\n約7日', '新月\n約15日', '上弦\n約22日', '満月\n約29.5日'], 30, { h: 52, size: 10, gap: 10 }).flat(), tx(130, '4分の1周 ≒ 7日、半周 ≒ 15日', 13, C.blue, true), tx(176, '1周 ＝ 約29.5日', 13, C.red, true)),
    },
    {
      note: '答え：約29.5日。❓よくあるまちがいは？→月が地球を1周する約27.3日と混ぜること。地球も動くので、満ち欠けの周期は少し長くなります。',
      add: fresh(bx(70, 20, 180, 44, '約29.5日', C.green, FILL.green, 20), tx(100, '27.3日は、月が地球を1周する日数', 12), tx(126, '満ち欠けは 約2日ぶん長い', 12), tx(166, '×：7日・15日・20日はどれもまちがい', 12, C.red)),
    },
  ], '満ち欠けの周期は約29.5日'),

  // ═════════ 東海中 理科② 電熱線の抵抗 ═════════
  nagoya_tokai_rika_007: show([
    {
      note: '電池3個を直列にして電熱線Aをつなぐと、①の電流（電気の流れ）が流れました。①は、電池1個・豆電球1個のときの電流です。電熱線Aの通りにくさ（抵抗〈ていこう〉）は、豆電球何個ぶんでしょう。',
      add: [wire(60, 30, 260, 30), wire(260, 30, 260, 120), wire(260, 120, 60, 120), wire(60, 120, 60, 30), bx(90, 106, 28, 28, '電池', C.blue, FILL.blue, 9), bx(124, 106, 28, 28, '電池', C.blue, FILL.blue, 9), bx(158, 106, 28, 28, '電池', C.blue, FILL.blue, 9), bx(110, 14, 100, 32, '電熱線A', C.red, FILL.red, 12), lb(160, 76, '電流 ①', 13, C.red, 'middle', true), ...band(150, tx(180, '電池3個・電流① → 電熱線A ＝ 豆電球何個ぶん？', 12, C.red, true))],
    },
    {
      note: '❓①とは？→電池1個に豆電球1個をつないだときの電流です。❓このとき、通りにくさは？→豆電球1個ぶんを「1」とします。電池1個が押す力を1とすると、電流は 1÷1＝①です。',
      add: fresh(wire(90, 40, 230, 40), wire(230, 40, 230, 110), wire(230, 110, 90, 110), wire(90, 110, 90, 40), bx(146, 96, 28, 28, '電池', C.blue, FILL.blue, 9), bulbC(160, 40), lb(160, 76, '電流 ①', 13, C.ink, 'middle', true), ...band(150, bb(160, '電池1個 ÷ 通りにくさ1 ＝ ①', C.ink, FILL.gray, 13), tx(212, '豆電球1個ぶんの通りにくさを「1」とする', 11, C.gray))),
    },
    {
      note: '❓電池が3個になると？→直列につなぐと、電気を押す力が電池の数に比例して大きくなり、電池3個では3倍です。もし通りにくさが1のままなら、電流は 3÷1＝③になります。',
      add: band(150, bb(156, '電池3個 ÷ 通りにくさ1 ＝ ③', C.blue, FILL.blue, 14), tx(208, '押す力が3倍 → 電流も3倍', 12, C.gray)),
    },
    {
      note: '❓通りにくさが大きいと、電流は？→通りにくいほど電流は小さくなります。通りにくさが2倍なら電流は半分、3倍なら3分の1です。そこで「電流＝電池の数÷通りにくさ」と表せます。',
      add: fresh(bb(30, '電流 ＝ 電池の数 ÷ 通りにくさ', C.purple, FILL.purple, 15), tx(90, '押す力が大きいほど、電流も大きい', 12), tx(114, '通りにくいほど、電流は小さい', 12), ...band(150, tx(182, '電池の数 ÷ 通りにくさ ＝ 電流', 12, C.gray))),
    },
    {
      note: '❓この回路は？→電池は3個、電流は①です。通りにくさを□とすると、3÷□＝1です。',
      add: fresh(bx(40, 30, 240, 34, '電池の数 ÷ 通りにくさ ＝ 電流', C.gray, FILL.gray, 13), bx(40, 80, 240, 34, '3 ÷ □ ＝ 1', C.red, FILL.red, 18), ...band(150, tx(180, '□ ＝ 電熱線Aの通りにくさ', 13, C.red, true))),
    },
    {
      note: '❓□はいくつ？→3÷□＝1なので、□＝3÷1＝3です。電熱線Aの通りにくさは3で、豆電球3個ぶんです。❓なぜわり算？→3を何でわると1になるかを、逆算しているからです。',
      add: band(150, bb(156, '□ ＝ 3 ÷ 1 ＝ 3', C.green, FILL.green, 16), tx(208, '3÷□＝1 の□をさがす（逆算）', 12, C.gray)),
    },
    {
      note: '答え：3個分。❓検算は？→豆電球3個を直列にすると通りにくさは1＋1＋1＝3で、電池3個なら電流は 3÷3＝①。問題と同じです。❓まちがいは？→電流÷電池の数と逆にわること。',
      add: fresh(wire(60, 40, 260, 40), wire(260, 40, 260, 110), wire(260, 110, 60, 110), wire(60, 110, 60, 40), bulbC(120, 40), bulbC(160, 40), bulbC(200, 40), bx(146, 96, 40, 28, '電池3個', C.blue, FILL.blue, 8), ...band(150, tx(176, '豆電球3個 ＝ 通りにくさ 3 ✓', 13, C.green, true), tx(204, '3 ÷ 3 ＝ ① ✓', 14, C.green, true), tx(228, '×：電流 ÷ 電池の数', 11, C.red))),
    },
  ], '電流＝電池の数÷通りにくさ'),

  // ═════════ 東海中 理科⑤ 浮力（手をはなした直後） ═════════
  nagoya_tokai_rika_010: show([
    {
      note: '体積100cm³、重さ80gの物体を水に沈めて、静かに手をはなしました。手をはなした直後の、まだ全部が水の中にあるときを考えます。水1cm³は1gです。❓まず、浮力（ふりょく）とは何でしょう。',
      add: [...tank(), objBox(100, 84), lb(272, 60, '体積 100cm³', 11, C.ink, 'middle', true), lb(272, 82, '重さ 80g', 11, C.ink, 'middle', true), lb(272, 104, '水1cm³＝1g', 10, C.gray), ...band(150, tx(180, '手をはなした直後（全部水の中）', 13), tx(206, '浮力は何gか？', 14, C.red, true))],
    },
    {
      note: '浮力とは、水が物体を上向きに押す力のことです。❓その大きさは何で決まるのでしょう。',
      add: [ar(110, 84, 110, 58, C.red), lb(88, 56, '浮力', 10, C.red, 'middle', true), ar(150, 128, 150, 143, C.blue), ...band(150, tx(180, '浮力 ＝ 水が物体を上に押す力', 14, C.red, true))],
    },
    {
      note: '❓浮力の大きさは何で決まる？→物体が「おしのけた水の重さ」で決まります（アルキメデスの原理）。物体が水に入ると、その場所にあった水が、場所をゆずってどけられます。',
      add: [ln(96, 80, 164, 80, C.purple, true, 1.5), ln(164, 80, 164, 132, C.purple, true, 1.5), ln(164, 132, 96, 132, C.purple, true, 1.5), ln(96, 132, 96, 80, C.purple, true, 1.5), lb(196, 108, 'おしのけた水', 9, C.purple, 'middle', true), ...band(150, tx(180, '浮力 ＝ おしのけた水の重さ', 14, C.purple, true))],
    },
    {
      note: '❓なぜ「おしのけた水の重さ」？→もしその場所が水のままなら、その水は浮きも沈みもしません。まわりの水が、その重さをちょうど支えているからです。物体に入れかわっても、まわりの水が押す力は同じなので、物体もその重さぶん上に押されます。',
      add: [ar(108, 146, 108, 134, C.red), ar(130, 146, 130, 134, C.red), ar(152, 146, 152, 134, C.red), ...band(150, tx(176, '水だったら止まっている', 12), tx(198, '＝ まわりの水が重さを支えている', 12), tx(222, '入れかわっても、支える力は同じ → 浮力', 11, C.red, true))],
    },
    {
      note: '❓おしのけた水の体積は？→物体は全部が水に入っているので、物体の体積ぶんの水をおしのけています。だから100cm³です。',
      add: band(150, bb(170, 'おしのけた水の体積 ＝ 物体の体積 ＝ 100cm³', C.blue, FILL.blue, 12)),
    },
    {
      note: '❓その水の重さは？→水1cm³は1gなので、100cm³なら 100×1＝100g。これが浮力の大きさです。',
      add: band(150, bb(156, '100cm³ × 1g ＝ 100g', C.blue, FILL.blue, 14), bb(194, '浮力 ＝ 100g', C.green, FILL.green, 16)),
    },
    {
      note: '答え：100g。❓物体の重さ80gは関係ある？→浮力の大きさには関係しません。上向き100gが下向き80gより大きいので、物体は浮き上がり、水面に出るとおしのけた水が減って、浮力は80gまで小さくなって止まります。',
      add: band(150, bx(20, 160, 130, 34, '上向き 浮力100g', C.red, FILL.red, 12), bx(170, 160, 130, 34, '下向き 重さ80g', C.blue, FILL.blue, 12), tx(214, '100g ＞ 80g → 浮き上がる', 12, C.gray), tx(232, '×：浮力を重さの80gにする', 11, C.red)),
    },
  ], '浮力＝おしのけた水の重さ'),

  // ═════════ 滝中 算数④ つるかめ算（ペン） ═════════
  nagoya_taki_sansu_004: show([
    {
      note: '1本80円のペンと1本120円のペンを、合わせて15本買ったら、代金は1560円でした。80円のペンは何本でしょう。❓まず、全部が高いほうのペンだったら、いくらになるでしょう。',
      add: [...dotRow(15, Array(15).fill('c') as ('a' | 'b' | 'c')[]), lb(160, 30, '合わせて15本', 12, C.ink, 'middle', true), lb(80, 84, '80円のペン', 11, C.main, 'middle', true), lb(240, 84, '120円のペン', 11, C.blue, 'middle', true), ...band(150, tx(180, '代金の合計 1560円', 13), tx(206, '80円のペン ＝ ？本', 14, C.red, true))],
    },
    {
      note: '❓もし15本ぜんぶが120円のペンだったら？→120円が15本なので 120×15＝1800円です。❓なぜこう考える？→一方にそろえると、実際とのちがいが見えてくるからです。',
      add: [...dotRow(15, Array(15).fill('b') as ('a' | 'b' | 'c')[]), ...band(150, bb(166, '全部120円：120 × 15 ＝ 1800円', C.blue, FILL.blue, 14))],
    },
    {
      note: '❓実際とのちがいは？→実際の代金は1560円で、1800円より 1800−1560＝240円少ないです。この240円は、安い80円のペンがまざっているぶんの差です。',
      add: band(150, bx(20, 158, 280, 26, '全部120円 1800円', C.blue, FILL.blue, 12), bx(20, 190, 220, 26, '実際 1560円', C.green, FILL.green, 12), bx(240, 190, 60, 26, '差 240円', C.red, FILL.red, 11), tx(234, '1800 − 1560 ＝ 240円', 11, C.gray)),
    },
    {
      note: '❓どうすれば240円へらせる？→120円のペン1本を80円のペン1本にかえると、代金は 120−80＝40円へります。かえた本数が、80円のペンの本数です。',
      add: [ci(20, 52, 8, undefined, C.main, FILL.warm), ar(30, 70, 30, 82, C.red), lb(36, 108, '1本かえると 120−80＝40円へる', 10, C.red, 'start', true), ...band(150, bb(166, 'かえる1本で −40円', C.red, FILL.red, 15))],
    },
    {
      note: '❓何本かえる？→40円ずつへって、ちょうど240円になるまでです。240÷40＝6なので、6本かえます。❓なぜわり算？→240円の中に40円が何回入るかを知りたいからです。',
      add: band(150, bb(156, '240 ÷ 40 ＝ 6本', C.green, FILL.green, 16), tx(206, '40円が何回で240円になるか', 11, C.gray)),
    },
    {
      note: '6本かえたので、80円のペンは6本、120円のペンは15−6＝9本です。',
      add: [...dotRow(15, [...Array(6).fill('a'), ...Array(9).fill('b')] as ('a' | 'b' | 'c')[]), ...band(150, tx(176, '80円のペン 6本', 14, C.main, true), tx(204, '120円のペン 15 − 6 ＝ 9本', 13, C.blue, true))],
    },
    {
      note: '答え：6本。❓検算は？→80円6本で480円、120円9本で1080円。480＋1080＝1560円で合計と同じです。別の方法として、全部80円と考えると 80×15＝1200円で差は360円、360÷40＝9本が120円のペン。15−9＝6本で一致します。',
      add: band(150, tx(168, '80×6 ＋ 120×9 ＝ 480 ＋ 1080 ＝ 1560円 ✓', 12, C.green, true), tx(194, '全部80円：(1560−1200)÷40 ＝ 9本 → 15−9 ＝ 6本 ✓', 11, C.gray), tx(222, '答え 80円のペン 6本', 14, C.green, true)),
    },
  ], 'つるかめ算：差÷1本あたりの差'),

  // ═════════ 滝中 算数⑥ 角の二等分線 ═════════
  nagoya_taki_sansu_006: (() => {
    // 角A=50°、角B=70°、角C=60° の三角形（正確な角度）
    const dA = 50, dB = 70, dC = 60;
    const h = 115, yb = 138;
    const a = h * (cot(dB) + cot(dC));
    const Bp: [number, number] = [90, yb];
    const Cp: [number, number] = [90 + a, yb];
    const Ap: [number, number] = [90 + h * cot(dB), yb - h];
    const len = (p: [number, number], q: [number, number]) => Math.hypot(p[0] - q[0], p[1] - q[1]);
    const la = len(Bp, Cp), lbb = len(Ap, Cp), lc = len(Ap, Bp);
    const I: [number, number] = [(la * Ap[0] + lbb * Bp[0] + lc * Cp[0]) / (la + lbb + lc), (la * Ap[1] + lbb * Bp[1] + lc * Cp[1]) / (la + lbb + lc)];
    void dA;
    const tri = pg([Ap, Bp, Cp], C.main, FILL.warm);
    const bis = [ln(Bp[0], Bp[1], I[0], I[1], C.blue, false, 2), ln(Cp[0], Cp[1], I[0], I[1], C.green, false, 2)];
    const names = [lb(Ap[0], Ap[1] - 8, 'A', 11, C.ink, 'middle', true), lb(Bp[0] - 9, Bp[1] + 4, 'B', 11, C.ink, 'middle', true), lb(Cp[0] + 9, Cp[1] + 4, 'C', 11, C.ink, 'middle', true), lb(I[0] + 1, I[1] - 8, 'P', 11, C.red, 'middle', true)];
    const marks = [lb(Bp[0] + 30, Bp[1] - 14, '●', 10, C.blue, 'middle', true), lb(Bp[0] + 20, Bp[1] - 4, '●', 10, C.blue, 'middle', true), lb(Cp[0] - 28, Cp[1] - 12, '○', 10, C.green, 'middle', true), lb(Cp[0] - 20, Cp[1] - 4, '○', 10, C.green, 'middle', true)];
    return show([
      {
        note: '三角形ABCで、角Aは50度です。角Bの二等分線と角Cの二等分線が交わる点をPとします。角BPCは何度でしょう。❓まず、二等分線とはどんな線でしょう。',
        add: [tri, ...names.slice(0, 3), lb(Ap[0] + 4, Ap[1] + 24, '50°', 10, C.ink, 'middle', true), lb(260, 70, '角A ＝ 50度', 12, C.ink, 'middle', true), ...band(150, tx(180, '角BPC ＝ ？度', 14, C.red, true))],
      },
      {
        note: '❓二等分線とは？→角を、同じ大きさの2つに分ける線です。Bの角を●2つ、Cの角を○2つに分け、2本が交わる点がPです。',
        add: [...bis, names[3], ...marks, ...band(150, tx(176, '●●＝角B、○○＝角C', 13, C.ink, true), tx(204, '●と●、○と○は、それぞれ同じ大きさ', 12, C.gray))],
      },
      {
        note: '❓角Bと角Cをたすといくつ？→三角形ABCの3つの角の和は180度なので、角B＋角C＝180−50＝130度です。❓なぜ180からひく？→3つの角の和が180度だからです。',
        add: band(150, bb(156, '角B ＋ 角C ＝ 180 − 50 ＝ 130度', C.purple, FILL.purple, 14), tx(208, '●●＋○○ ＝ 130度', 13, C.gray)),
      },
      {
        note: '❓半分にすると？→●●と○○で130度なので、●と○を1つずつたすと、その半分の 130÷2＝65度です。❓なぜ半分？→●も○も、もとの角を半分にしたものだからです。',
        add: band(150, bb(156, '● ＋ ○ ＝ 130 ÷ 2 ＝ 65度', C.blue, FILL.blue, 14), tx(208, '二等分線で半分になった角の和', 12, C.gray)),
      },
      {
        note: '❓BPCはどこで求める？→三角形PBCに注目します。この三角形の角は、●、○、そして求める角BPCの3つです。3つの角の和は180度です。',
        add: [pg([Bp, Cp, I], C.red, FILL.red), ...bis, ...names, ...marks, ...band(150, tx(176, '三角形PBC：● ＋ ○ ＋ 角BPC ＝ 180度', 12, C.red, true), tx(204, '（3つの角の和は180度）', 12, C.gray))],
      },
      {
        note: '●＋○は65度なので、角BPC＝180−65＝115度です。',
        add: band(150, bb(166, '角BPC ＝ 180 − 65 ＝ 115度', C.green, FILL.green, 16)),
      },
      {
        note: '答え：115度。❓検算は？→「角BPC＝90＋角Aの半分」でも出ます。90＋50÷2＝90＋25＝115度で一致します。❓まちがいは？→二等分線で角が半分になることを忘れて、130度のまま計算すること。',
        add: band(150, tx(170, '90 ＋ 50÷2 ＝ 90 ＋ 25 ＝ 115度 ✓', 13, C.green, true), tx(198, '答え 115度', 15, C.green, true), tx(224, '×：半分にせず130度で計算する', 12, C.red)),
      },
    ], '角BPC ＝ 180 −（180−A）÷2');
  })(),

  // ═════════ 滝中 算数⑨ 台形の対角線と面積比 ═════════
  nagoya_taki_sansu_009: (() => {
    const A: [number, number] = [84, 40], Dp: [number, number] = [156, 40], Bp: [number, number] = [60, 135], Cp: [number, number] = [180, 135];
    const k = 6 / 16;
    const P: [number, number] = [A[0] + k * (Cp[0] - A[0]), A[1] + k * (Cp[1] - A[1])];
    const trap = pg([A, Dp, Cp, Bp], C.gray, FILL.warm);
    const diag = [ln(A[0], A[1], Cp[0], Cp[1], C.ink, false, 2), ln(Bp[0], Bp[1], Dp[0], Dp[1], C.ink, false, 2)];
    const names = [lb(A[0] - 8, A[1] - 4, 'A', 11, C.ink, 'middle', true), lb(Dp[0] + 8, Dp[1] - 4, 'D', 11, C.ink, 'middle', true), lb(Bp[0] - 8, Bp[1] + 4, 'B', 11, C.ink, 'middle', true), lb(Cp[0] + 8, Cp[1] + 4, 'C', 11, C.ink, 'middle', true), lb(P[0] + 10, P[1] - 2, 'P', 11, C.red, 'middle', true)];
    const small = pg([A, Dp, P], C.blue, FILL.blue);
    const big = pg([Bp, Cp, P], C.green, FILL.green);
    const grid = (x: number, y: number, n: number, col: string, fill: string): DiagramElement[] => {
      const out: DiagramElement[] = [];
      for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) out.push(bx(x + c * 14, y + r * 14, 14, 14, undefined, col, fill));
      return out;
    };
    return show([
      {
        note: '台形ABCDで、ADとBCは平行、AD＝6cm、BC＝10cmです。対角線ACとBDが交わる点をPとします。三角形APDと三角形CPBの面積の比は？❓まず、この2つの三角形は、どんな関係でしょう。',
        add: [trap, ...diag, ...names, lb(120, 32, '6cm', 10, C.ink, 'middle', true), lb(120, 145, '10cm', 10, C.ink, 'middle', true), ...band(150, tx(180, 'AD ∥ BC、AD＝6cm、BC＝10cm', 12), tx(206, '面積比 APD : CPB ＝ ？', 14, C.red, true))],
      },
      {
        note: '❓2つの三角形は相似（そうじ）？→ADとBCが平行なので、角DAPと角BCP、角ADPと角CBPは、それぞれ等しくなります（錯角）。さらに、Pの対頂角（たいちょうかく）も等しいので、3つの角が等しい相似です。',
        add: [small, big, ...diag, ...names, lb(A[0] + 20, A[1] + 14, '●', 10, C.blue, 'middle', true), lb(Cp[0] - 20, Cp[1] - 10, '●', 10, C.blue, 'middle', true), lb(Dp[0] - 20, Dp[1] + 14, '○', 10, C.green, 'middle', true), lb(Bp[0] + 20, Bp[1] - 10, '○', 10, C.green, 'middle', true), ...band(150, tx(176, '平行線の錯角が等しい（●と●、○と○）', 12, C.purple, true), tx(204, '3つの角が等しい → 相似', 13))],
      },
      {
        note: '❓相似比は？→対応する辺は、平行な2辺のADとCBです。AD:CB＝6:10＝3:5が相似比です。❓なぜADとCB？→●と○の角にはさまれた辺どうしが、対応するからです。',
        add: band(150, bb(160, 'AD : CB ＝ 6 : 10 ＝ 3 : 5', C.blue, FILL.blue, 15), tx(212, '約分すると 3 : 5（相似比）', 12, C.gray)),
      },
      {
        note: '❓相似比3:5なら、面積は？→面積は縦にも横にも広がります。同じ小さい正方形のマスで考えると、一辺3マスの正方形は9マス、一辺5マスの正方形は25マスです。',
        add: fresh(...grid(40, 30, 3, C.blue, FILL.blue), ...grid(150, 20, 5, C.green, FILL.green), lb(61, 88, '3×3 ＝ 9', 12, C.blue, 'middle', true), lb(185, 98, '5×5 ＝ 25', 12, C.green, 'middle', true), ...band(150, tx(178, '長さの比 3:5 → 面積の比 9:25', 14, C.ink, true), tx(206, '面積は、縦と横の両方にふえる（2乗）', 12, C.gray))),
      },
      {
        note: '三角形APDと三角形CPBの面積の比は、相似比3:5を2乗して 3×3:5×5＝9:25です。',
        add: fresh(small, big, ...diag, ...names, ...band(150, bb(160, '3×3 : 5×5 ＝ 9 : 25', C.green, FILL.green, 16))),
      },
      {
        note: '❓検算は？→APDは短いADをふくむ小さいほうの三角形で、CPBは長いBCをふくむ大きいほうです。だから小さいAPDが先で、9:25（APDが小さい）となり、25:9ではありません。',
        add: fresh(small, big, ...diag, ...names, ...band(150, tx(170, 'APD（AD＝6）＜ CPB（BC＝10）', 13, C.ink, true), tx(198, '9 ＜ 25 で、小さいほうが先 ✓', 13, C.green, true))),
      },
      {
        note: '答え：9:25。❓よくあるまちがいは？→相似比の3:5や6:10をそのまま面積比にすること。面積比は、相似比を2乗します。',
        add: fresh(small, big, ...diag, ...names, ...band(150, bb(156, '答え 9 : 25', C.green, FILL.green, 16), tx(206, '×：3:5、6:10（相似比のまま）', 12, C.red), tx(228, '×：25:9（大小が逆）', 12, C.red))),
      },
    ], '面積比は相似比の2乗');
  })(),
};
