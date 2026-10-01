// 教科書単元（理科・中学受験）に動く図解スライドを1つずつ足すためのデータ。
// キーは 'xf_<単元id>'。XF_RA_SECTIONS が「単元id#節の番号」→図解id を結ぶ。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, flow, band, fresh } from './diagram-kit';

/** 下の帯にひとこと（改行可）。 */
const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 192, t, size, color, 'middle', true));
const SUN = '#CA8A04';
const ell = (cx: number, cy: number, rx: number, ry: number, color?: string, fill?: string): DiagramElement => {
  const pts: [number, number][] = [];
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    pts.push([Math.round((cx + rx * Math.cos(a)) * 10) / 10, Math.round((cy + ry * Math.sin(a)) * 10) / 10]);
  }
  return pg(pts, color, fill);
};
const sunP = (cx: number, cy: number): DiagramElement => ci(cx, cy, 16, '光', SUN, FILL.yellow, 11);
/** 茎の輪切り：維管束が輪になって並ぶ。 */
const secRing = (cx: number, cy: number, r: number): DiagramElement[] => {
  const out: DiagramElement[] = [ci(cx, cy, r, undefined, C.green, FILL.green)];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    out.push(ci(Math.round(cx + r * 0.62 * Math.cos(a)), Math.round(cy + r * 0.62 * Math.sin(a)), 4, undefined, C.purple, FILL.purple));
  }
  return out;
};
/** 茎の輪切り：維管束が散らばる。 */
const secScatter = (cx: number, cy: number, r: number): DiagramElement[] => {
  const offs: [number, number][] = [[-0.45, -0.25], [0.05, -0.55], [0.5, -0.15], [-0.1, -0.05], [0.3, 0.25], [-0.5, 0.2], [-0.05, 0.5], [0.35, 0.55]];
  return [ci(cx, cy, r, undefined, C.green, FILL.green), ...offs.map(([dx, dy]) => ci(Math.round(cx + dx * r), Math.round(cy + dy * r), 4, undefined, C.purple, FILL.purple))];
};
/** 平行脈の葉。 */
const leafPar = (cx: number, cy: number): DiagramElement[] => [
  ell(cx, cy, 30, 17, C.green, FILL.green),
  ln(cx - 24, cy - 7, cx + 24, cy - 7, C.green), ln(cx - 26, cy, cx + 26, cy, C.green), ln(cx - 24, cy + 7, cx + 24, cy + 7, C.green),
];
/** 網状脈の葉。 */
const leafNet = (cx: number, cy: number): DiagramElement[] => [
  ell(cx, cy, 30, 17, C.green, FILL.green),
  ln(cx - 26, cy, cx + 26, cy, C.green),
  ln(cx - 12, cy, cx - 2, cy - 11, C.green), ln(cx - 12, cy, cx - 2, cy + 11, C.green),
  ln(cx + 6, cy, cx + 16, cy - 10, C.green), ln(cx + 6, cy, cx + 16, cy + 10, C.green),
];
/** ひげ根。 */
const rootFib = (cx: number, y0: number): DiagramElement[] => [
  ln(cx, y0 - 12, cx, y0, C.green, false, 3),
  ln(cx, y0, cx - 24, y0 + 36, C.main), ln(cx, y0, cx - 12, y0 + 40, C.main), ln(cx, y0, cx, y0 + 42, C.main), ln(cx, y0, cx + 12, y0 + 40, C.main), ln(cx, y0, cx + 24, y0 + 36, C.main),
];
/** 主根と側根。 */
const rootTap = (cx: number, y0: number): DiagramElement[] => [
  ln(cx, y0 - 12, cx, y0, C.green, false, 3),
  ln(cx, y0, cx, y0 + 44, C.main, false, 3),
  ln(cx, y0 + 12, cx - 20, y0 + 24, C.main), ln(cx, y0 + 12, cx + 20, y0 + 24, C.main),
  ln(cx, y0 + 26, cx - 16, y0 + 38, C.main), ln(cx, y0 + 26, cx + 16, y0 + 38, C.main),
];
/** 花（花びら5枚）。 */
const flowerP = (cx: number, cy: number, fill: string, color: string): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    out.push(ci(Math.round(cx + 15 * Math.cos(a)), Math.round(cy + 15 * Math.sin(a)), 10, undefined, color, fill));
  }
  out.push(ci(cx, cy, 7, undefined, SUN, FILL.yellow));
  return out;
};

// ═══════════════ rika_s001 けんび鏡で見る植物のからだ（節1：なぜ緑色の粒がないのか） ═══════════════
const cells = (x0: number, y0: number, nx: number, ny: number, w: number, h: number, green: boolean): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const x = x0 + i * w, y = y0 + j * h;
    out.push(bx(x, y, w, h, undefined, C.main, FILL.warm));
    if (green) { out.push(ci(x + w * 0.3, y + h * 0.35, 4, undefined, C.green, '#86EFAC'), ci(x + w * 0.68, y + h * 0.7, 4, undefined, C.green, '#86EFAC')); }
  }
  return out;
};
const s001: DiagramFigure = show([
  {
    note: '❓タマネギの皮の部屋には、なぜ緑色の粒がないのでしょう。まず、けんび鏡で見たものを思い出します。タマネギの皮には、四角い小さな部屋（細胞（さいぼう））がすき間なく並んでいます。オオカナダモの葉には、部屋の中に緑色の粒（葉緑体（ようりょくたい））があります。',
    add: [bx(14, 12, 136, 100, undefined, C.gray, '#FFFFFF'), ...cells(20, 18, 5, 4, 24, 22, false), bx(170, 12, 136, 100, undefined, C.gray, '#FFFFFF'), ...cells(176, 18, 3, 3, 40, 29, true), lb(82, 126, 'タマネギの皮', 12, C.main, 'middle', true), lb(238, 126, 'オオカナダモの葉', 12, C.green, 'middle', true), ...cap('タマネギ：緑の粒なし\nオオカナダモ：緑の粒あり')],
  },
  {
    note: '❓緑色の粒（葉緑体）は、何をするのでしょう。→ 光を受けて、水と二酸化炭素から養分（ようぶん）のデンプンをつくります。このはたらきを光合成（こうごうせい）といいます。葉緑体は「養分をつくる工場」です。',
    add: fresh(ci(160, 62, 34, '葉緑体', C.green, FILL.green, 11), lb(40, 24, '光', 12, SUN, 'middle', true), ar(58, 30, 128, 52, SUN), lb(40, 62, '水', 12, C.blue, 'middle', true), ar(58, 62, 124, 62, C.blue), lb(48, 100, '二酸化炭素', 12, C.gray, 'middle', true), ar(92, 94, 132, 80, C.gray), lb(280, 40, 'デンプン', 12, C.main, 'middle', true), ar(196, 54, 240, 42, C.main), lb(284, 92, '酸素', 12, C.blue, 'middle', true), ar(194, 74, 252, 88, C.blue), ...cap('光＋水＋二酸化炭素 → デンプン＋酸素\n（光合成）', C.green, 12)),
  },
  {
    note: '❓では、葉緑体は光が当たる所にあると、どうなるのでしょう。→ 光があるので、養分をつくることができます。光が当たる緑の葉には、葉緑体がたくさんあります。',
    add: fresh(sunP(40, 30), ar(58, 38, 112, 52, SUN), ell(170, 56, 58, 28, C.green, FILL.green), lb(170, 56, '緑の葉\n粒がある', 12, C.green, 'middle', true), bx(0, 100, 320, 50, undefined, C.main, '#E7D3BC'), lb(40, 138, '土の中', 11, C.main, 'middle'), ...cap('光が当たる所では、粒が養分をつくる', C.green)),
  },
  {
    note: '❓では、光が当たらない土の中は、どうでしょう。→ 光がなければ養分をつくれないので、葉緑体があっても役に立ちません。だから、土の中で育つタマネギの白い部分（りん片）や根には、葉緑体がありません。',
    add: [ci(150, 118, 18, undefined, C.gray, '#FFFFFF'), ln(150, 136, 140, 148, C.main), ln(150, 136, 152, 148, C.main), ln(150, 136, 162, 148, C.main), lb(250, 116, '白い・光なし\n→ 粒なし', 12, C.red, 'middle', true), ...cap('光が当たらない所には、葉緑体はない\n（白いりん片・根）', C.red, 12)],
  },
  {
    note: '❓緑色に見えれば、葉緑体があると言えるのでしょうか。→ はい。緑色に見えるのは、葉緑体の色だからです。緑色の茎、青いトマトの皮、緑の葉には、どれも葉緑体があります。',
    add: fresh(lb(160, 14, '緑色に見える部分は…', 12, C.ink, 'middle', true), bx(10, 30, 92, 60, '緑の茎', C.green, FILL.green, 12), bx(114, 30, 92, 60, '青い\nトマトの皮', C.green, FILL.green, 12), bx(218, 30, 92, 60, '緑の葉', C.green, FILL.green, 12), lb(160, 112, 'どれも葉緑体がある', 13, C.green, 'middle', true), ...cap('緑色 ＝ 葉緑体がある印', C.green)),
  },
  {
    note: '❓では、暗い所で育てたモヤシが白いのは、なぜでしょう。→ 光が当たらないと葉緑体ができないからです。光に当てると、緑色になっていきます。土から顔を出して光に当たったジャガイモのいもが緑色になるのも、同じ理由です。',
    add: fresh(bx(10, 12, 130, 70, '暗い所で育てた\nモヤシ\n（白いまま）', C.gray, FILL.gray, 12), lb(160, 36, '光', 11, SUN, 'middle', true), ar(146, 50, 174, 50, SUN), bx(180, 12, 130, 70, '緑色に\nなっていく', C.green, FILL.green, 12), bx(10, 98, 130, 40, '土から出た\nジャガイモのいも', C.gray, FILL.gray, 11), ar(146, 118, 174, 118, SUN), bx(180, 98, 130, 40, '緑色になる', C.green, FILL.green, 12), ...cap('光が当たると、葉緑体ができる', SUN)),
  },
  {
    note: '❓ところで、植物には骨がないのに、細胞がすき間なく並んで形がくずれないのは、なぜでしょう。→ 一つひとつの細胞が水を吸ってパンパンにふくらみ、たがいに押し合っているからです。水が足りなくなると、細胞がしぼんで葉がしおれます。水をやるともどるのは、細胞がまた水を吸ってふくらむからです。',
    add: fresh(lb(66, 14, '水があるとき', 12, C.blue, 'middle', true), ...[40, 66, 92].flatMap((x) => [44, 70].map((y) => ci(x, y, 13, undefined, C.blue, FILL.blue))), lb(66, 104, 'パンパンにふくらむ', 11, C.blue, 'middle'), lb(244, 14, '水が足りないとき', 12, C.red, 'middle', true), ...[212, 244, 276].flatMap((x) => [46, 72].map((y) => ci(x, y, 8, undefined, C.red, FILL.red))), lb(244, 104, 'しぼんで しおれる', 11, C.red, 'middle'), ar(124, 58, 188, 58, C.gray), ...cap('水でふくらんで押し合う → ピンと立つ', C.blue)),
  },
  {
    note: 'まとめです。葉緑体は、光が当たる緑色の部分にだけあります。タマネギの皮・根・モヤシのように光が当たらない所にはありません。そして、細胞は水でふくらんで押し合い、からだを支えています。',
    add: fresh(bx(10, 10, 300, 36, '葉緑体は、光が当たる緑の部分にだけある', C.green, FILL.green, 12), bx(10, 54, 300, 36, 'タマネギの皮・根・モヤシにはない（光なし）', C.gray, FILL.gray, 12), bx(10, 98, 300, 36, '細胞は水でふくらみ、水が足りないとしおれる', C.blue, FILL.blue, 12), ...cap('緑色 → 葉緑体 → 光合成', C.green)),
  },
], '葉緑体は光が当たる緑の部分にだけある');

// ═══════════════ rika_s003 植物と動物のからだのちがい（節1：なぜ食べなくても生きられるのか） ═══════════════
const s003: DiagramFigure = show([
  {
    note: '❓植物は、なぜ食べなくても生きられるのでしょう。動物は、ほかの生き物を食べて養分（ようぶん）を手に入れます。では植物は、どうやって養分を手に入れているのでしょうか。',
    add: [bx(14, 20, 130, 50, '動物', C.red, FILL.red, 14), lb(79, 92, 'ほかの生物を食べる', 12, C.red, 'middle', true), bx(176, 20, 130, 50, '植物', C.green, FILL.green, 14), lb(241, 92, '食べ物は？', 12, C.green, 'middle', true), ...cap('植物は何も食べないのに、大きくなる')],
  },
  {
    note: '→ 植物の葉には葉緑体（ようりょくたい）があり、光を受けて、水と二酸化炭素からデンプンをつくります（光合成（こうごうせい））。養分を自分でつくる工場があるので、食べ物をさがして動く必要がありません。',
    add: fresh(ci(160, 62, 34, '葉緑体', C.green, FILL.green, 11), lb(40, 24, '光', 12, SUN, 'middle', true), ar(58, 30, 128, 52, SUN), lb(40, 62, '水', 12, C.blue, 'middle', true), ar(58, 62, 124, 62, C.blue), lb(48, 100, '二酸化炭素', 12, C.gray, 'middle', true), ar(92, 94, 132, 80, C.gray), lb(280, 40, 'デンプン', 12, C.main, 'middle', true), ar(196, 54, 240, 42, C.main), lb(284, 92, '酸素', 12, C.blue, 'middle', true), ar(194, 74, 252, 88, C.blue), ...cap('葉緑体が「養分工場」\n光＋水＋二酸化炭素 → デンプン＋酸素', C.green, 12)),
  },
  {
    note: '❓では、養分をつくるだけで生きられるのでしょうか。→ つくっただけでは、からだは動きません。養分を使って、からだを動かす力を取り出す必要があります。この、養分を使うはたらきが呼吸（こきゅう）です。酸素を取り入れて、二酸化炭素を出します。',
    add: fresh(...flow(['養分をつくる\n（光合成）', '養分', '力を取り出す\n（呼吸）'], 40, { h: 60, size: 12, color: C.green, fill: FILL.green }).flat(), lb(160, 126, '呼吸：酸素を取り入れ、二酸化炭素を出す', 11, C.blue, 'middle', true), ...cap('つくるだけでは生きられない\n使って、力を取り出す', C.green)),
  },
  {
    note: '❓それなら、植物は昼も夜も呼吸しているのでしょうか。→ はい、一日中しています。昼は光合成の量のほうが呼吸より多いので、酸素を出して二酸化炭素を吸っているように見えるだけです。夜は光合成をしないので、呼吸だけになり、酸素を吸って二酸化炭素を出します。',
    add: fresh(bx(10, 12, 145, 104, '昼\n光合成と呼吸の両方\n光合成のほうが多い\n→ 酸素を出すように見える', SUN, FILL.yellow, 11), bx(165, 12, 145, 104, '夜\n呼吸だけ\n酸素を吸い\n二酸化炭素を出す', C.purple, FILL.purple, 11), ...cap('呼吸は一日中。夜は呼吸だけ', C.purple)),
  },
  {
    note: '❓では、動物のからだに葉緑体はあるのでしょうか。→ ありません。だから動物は養分をつくれず、食べるしかありません。ウサギは草を食べ、キツネはウサギを食べます。もとをたどれば、どちらの養分も、草が葉緑体でつくったデンプンです。',
    add: fresh(...flow(['草', 'ウサギ', 'キツネ'], 34, { h: 50, size: 14 }).flat(), lb(160, 104, '食べられる → 食べる', 12, C.gray, 'middle'), lb(160, 126, '養分のもとは、草がつくったデンプン', 12, C.green, 'middle', true), ...cap('植物＝養分をつくる側\n動物＝食べて手に入れる側', C.ink)),
  },
  {
    note: '❓植物には骨がないのに、なぜピンと立っていられるのでしょう。→ 細胞（さいぼう）が水を吸ってふくらみ、たがいに押し合ってからだを支えているからです。水が足りないと細胞がしぼんで、しおれます。しおれたホウレンソウを水につけるとシャキッともどるのは、細胞が水を吸ってまたふくらむからです。',
    add: fresh(lb(66, 14, '水があるとき', 12, C.blue, 'middle', true), ...[40, 66, 92].flatMap((x) => [44, 70].map((y) => ci(x, y, 13, undefined, C.blue, FILL.blue))), lb(66, 104, 'ピンと立つ', 11, C.blue, 'middle'), lb(244, 14, '水が足りないとき', 12, C.red, 'middle', true), ...[212, 244, 276].flatMap((x) => [46, 72].map((y) => ci(x, y, 8, undefined, C.red, FILL.red))), lb(244, 104, 'しおれる', 11, C.red, 'middle'), ar(124, 58, 188, 58, C.gray), ...cap('骨のかわりに、水でからだを支える', C.blue)),
  },
  {
    note: '❓植物が「つくる」ことも「使う」こともしているか、どう確かめるのでしょう。光合成は、日光に当てた葉をヨウ素液（ようそえき）につけると、デンプンができていて青むらさき色になります。呼吸は、暗い箱に植物を一晩入れ、中の空気を石灰水（せっかいすい）に通すと白くにごります。二酸化炭素が出ている証拠です。',
    add: fresh(bx(8, 14, 148, 40, '光合成の実験', C.green, FILL.green, 12), bx(8, 62, 148, 50, '日光に当てた葉を\nヨウ素液に入れる\n→ 青むらさき色', C.purple, FILL.purple, 11), bx(164, 14, 148, 40, '呼吸の実験', C.blue, FILL.blue, 12), bx(164, 62, 148, 50, '暗い箱に一晩\n空気を石灰水に通す\n→ 白くにごる', C.blue, FILL.blue, 11), ...cap('植物は、つくりもするし、使いもする', C.ink)),
  },
  {
    note: 'まとめです。植物が食べなくてよいのは、葉緑体で養分をつくれるからです。呼吸は「つくった養分を使う」はたらきなので、植物も一日中しています。夜は呼吸だけです。そして、植物のからだは、細胞がふくらんで支えています。',
    add: fresh(bx(10, 10, 300, 34, '葉緑体で養分をつくれる → 食べなくてよい', C.green, FILL.green, 12), bx(10, 52, 300, 34, '呼吸は、つくった養分を使うはたらき（一日中）', C.blue, FILL.blue, 12), bx(10, 94, 300, 34, '夜は光合成なし。呼吸だけ', C.purple, FILL.purple, 12), ...cap('動物は食べて養分を得る', C.ink)),
  },
], '植物は葉緑体で養分をつくるから、食べなくても生きられる');
