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

// ═══════════════ rika_s007 光合成の条件を調べる実験（節1：なぜこの手順で実験するのか） ═══════════════
/** ふ入りの葉を3つの部分に分けた絵（左からふ・緑で光あり・緑でアルミはく）。 */
const leaf3 = (y: number, h: number, texts: [string, string, string], fills?: [string, string, string], colors?: [string, string, string]): DiagramElement[] => [
  bx(20, y, 93, h, texts[0], colors?.[0] ?? C.gray, fills?.[0] ?? '#FFFFFF', 11),
  bx(113, y, 93, h, texts[1], colors?.[1] ?? C.green, fills?.[1] ?? FILL.green, 11),
  bx(206, y, 93, h, texts[2], colors?.[2] ?? C.gray, fills?.[2] ?? FILL.gray, 11),
];
const s007: DiagramFigure = show([
  {
    note: '❓この実験は、1枚のふ入りの葉で何をくらべるのでしょう。ふ入りの葉には、白い部分（ふ）と緑の部分があります。ふには葉緑体（ようりょくたい）がありません。さらに緑の部分の一部をアルミはくでおおうと、1枚の葉に3つの部分ができます。',
    add: [lb(160, 8, '1枚のふ入りの葉', 12, C.ink, 'middle', true), ...leaf3(24, 74, ['ふ\n（白い部分）', '緑の部分\n光を当てる', '緑の部分\nアルミはくで\nおおう']), lb(66, 118, '葉緑体なし', 11, C.gray, 'middle'), lb(160, 118, '葉緑体あり\n光が当たる', 11, C.green, 'middle'), lb(252, 118, '葉緑体あり\n光なし', 11, C.gray, 'middle'), ...cap('3つの部分をくらべる')],
  },
  {
    note: '❓なぜ、まず一晩、暗い所に置くのでしょう。→ 前の日に光合成（こうごうせい）でできたデンプンが葉に残っていると、光を当てなくてもヨウ素液（ようそえき）で青むらさきになってしまい、「光を当てたからデンプンができた」と言えなくなります。先に、葉のデンプンを空にしておくのです。',
    add: fresh(...flow(['前の日の\nデンプンが\n残っている', '一晩\n暗い所に\n置く', 'デンプンが\n空になる'], 30, { h: 70, size: 12, color: C.gray, fill: FILL.gray }).flat(), ...cap('先に空にしておかないと\n「光でできた」と言えない', C.ink)),
  },
  {
    note: '❓なぜ、別々の葉ではなく、同じ1枚の葉の部分どうしをくらべるのでしょう。→ 別々の葉だと、大きさや日当たりなど、くらべたいこと以外の条件もちがってしまいます。1枚の葉なら、ふと緑では葉緑体のあるなしだけがちがい、緑とアルミはくでは光の有無だけがちがいます。これが対照実験（たいしょうじっけん）の考え方です。',
    add: fresh(...leaf3(14, 70, ['ふ', '緑\n光あり', '緑\nアルミはく']), ln(66, 92, 66, 98, C.red), ln(66, 98, 160, 98, C.red), ln(160, 98, 160, 92, C.red), lb(113, 118, '葉緑体の\nあるなしだけ\nちがう', 11, C.red, 'middle', true), ln(170, 92, 170, 98, C.blue), ln(170, 98, 252, 98, C.blue), ln(252, 98, 252, 92, C.blue), lb(211, 118, '光の\nあるなしだけ\nちがう', 11, C.blue, 'middle', true), ...cap('ほかの条件は全部同じ', C.ink)),
  },
  {
    note: '❓なぜ、光を当てたあとに、あたためたエタノールに葉を入れるのでしょう。→ 葉が緑色のままだと、ヨウ素液の青むらさき色が見えにくいからです。エタノールは葉の緑色をぬいてくれます。ただし、エタノールは燃えやすいので、火で直接あたためず、お湯であたためる湯せん（ゆせん）にします。',
    add: fresh(bx(70, 12, 180, 106, undefined, C.blue, FILL.blue), lb(104, 104, 'お湯', 12, C.blue, 'middle', true), bx(110, 26, 100, 56, 'エタノール\n＋ 葉', C.green, FILL.green, 12), lb(284, 54, '緑色が\nぬける', 12, C.green, 'middle', true), ar(250, 54, 262, 54, C.green), lb(160, 134, '火で直接は、あたためない', 12, C.red, 'middle', true), ...cap('緑をぬいて、色を見やすくする', C.green)),
  },
  {
    note: '❓なぜ、脱色（だっしょく）したあとに水で洗うのでしょう。→ エタノールにつけた葉は、かたくてもろくなっています。水につけると、やわらかくもどって、ヨウ素液がしみこみやすくなります。',
    add: fresh(...flow(['エタノールに\nつけた葉\nかたくもろい', '水で洗う', 'やわらかくなる\nヨウ素液が\nしみこむ'], 30, { h: 70, size: 12, color: C.blue, fill: FILL.blue }).flat(), ...cap('ヨウ素液の前に、葉をやわらかくもどす', C.blue)),
  },
  {
    note: 'ヨウ素液に入れると、色が変わります。緑の部分で光が当たったところは、デンプンができているので青むらさき色になります。ふの部分は、葉緑体がないので変わりません。アルミはくでおおった部分も、光が当たらなかったので変わりません。',
    add: fresh(lb(160, 8, 'ヨウ素液に入れると…', 12, C.ink, 'middle', true), ...leaf3(18, 80, ['ふ\n変化なし', '青むらさき\nデンプンあり', 'アルミはくの下\n変化なし'], ['#FFFFFF', '#C4B5FD', FILL.gray], [C.gray, C.purple, C.gray]), lb(66, 118, '光合成\nしていない', 11, C.gray, 'middle'), lb(160, 118, '光合成\nした', 11, C.purple, 'middle', true), lb(252, 118, '光合成\nしていない', 11, C.gray, 'middle'), ...cap('青むらさきは、デンプンがある印', C.purple)),
  },
  {
    note: '❓この結果から、何が分かるのでしょう。→ ふと緑をくらべると、ちがうのは葉緑体だけ。緑でだけデンプンができたので、光合成には葉緑体が必要だと分かります。緑とアルミはくをくらべると、ちがうのは光だけ。光が当たった部分だけデンプンができたので、光合成には光が必要だと分かります。',
    add: fresh(...leaf3(12, 56, ['ふ\n変化なし', '青むらさき', 'アルミはくの下\n変化なし'], ['#FFFFFF', '#C4B5FD', FILL.gray], [C.gray, C.purple, C.gray]), ln(66, 76, 66, 82, C.red), ln(66, 82, 160, 82, C.red), ln(160, 82, 160, 76, C.red), lb(113, 112, 'ふと緑を\nくらべる\n→ 葉緑体が必要', 11, C.red, 'middle', true), ln(170, 76, 170, 82, C.blue), ln(170, 82, 252, 82, C.blue), ln(252, 82, 252, 76, C.blue), lb(211, 112, '緑とアルミを\nくらべる\n→ 光が必要', 11, C.blue, 'middle', true), ...cap('光合成には、葉緑体と光の両方が必要', C.ink)),
  },
  {
    note: 'まとめです。一晩暗い所に置くのは、デンプンを空にするため。同じ1枚の葉で比べるのは、ほかの条件をそろえるため。エタノールは緑をぬいて色を見やすくするため（湯せんで）。結果は、緑で光が当たった部分だけ青むらさきになります。',
    add: fresh(bx(10, 8, 300, 34, '一晩暗い所 ＝ デンプンを空にする', C.gray, FILL.gray, 12), bx(10, 48, 300, 34, '同じ葉で比べる ＝ ほかの条件をそろえる', C.green, FILL.green, 12), bx(10, 88, 300, 34, 'エタノール（湯せん）＝ 緑をぬいて色を見やすく', C.blue, FILL.blue, 12), ...cap('結果：緑で光が当たった部分だけ青むらさき', C.purple)),
  },
], 'ふ入りの葉の実験は、手順のひとつひとつに理由がある');

// ═══════════════ rika_s018 茎の維管束の並び方（節1：なぜ輪になるのか、なぜ散らばるのか） ═══════════════
const s018: DiagramFigure = show([
  {
    note: '❓ヒマワリの茎とトウモロコシの茎を輪切りにすると、断面のもようがちがいます。ヒマワリは点が輪の形に並び、トウモロコシは点がばらばらに散らばっています。この点の一つひとつが維管束（いかんそく）です。なぜ、並び方がちがうのでしょう。',
    add: [...secRing(80, 62, 50), ...secScatter(240, 62, 50), lb(80, 126, 'ヒマワリの茎\n（双子葉類）', 12, C.green, 'middle', true), lb(240, 126, 'トウモロコシの茎\n（単子葉類）', 12, C.green, 'middle', true), ...cap('点＝維管束\n輪に並ぶ／散らばる')],
  },
  {
    note: '❓そもそも、維管束とは何でしょう。→ 水の通り道の道管（どうかん）と、養分（ようぶん）の通り道の師管（しかん）が、束（たば）になったものです。双子葉類では、外側に師管、内側に道管があります。',
    add: fresh(bx(40, 18, 100, 36, '師管（外側）', C.main, FILL.warm, 12), bx(40, 54, 100, 36, '道管（内側）', C.blue, FILL.blue, 12), lb(230, 36, '師管：養分の通り道', 12, C.main, 'middle', true), ar(180, 36, 144, 36, C.main), lb(230, 72, '道管：水の通り道', 12, C.blue, 'middle', true), ar(180, 72, 144, 72, C.blue), ...cap('維管束 ＝ 道管と師管の束', C.ink)),
  },
  {
    note: '❓では、双子葉類の維管束は、なぜ輪になるのでしょう。→ 輪にそって、新しい管をつくり続ける部分があるからです。この部分が、内側に新しい道管、外側に新しい師管をつけ足していきます。新しい管が輪の形にそってつけ足されるので、維管束は輪に並びます。',
    add: fresh(ci(100, 66, 56, undefined, C.green, FILL.green), ci(100, 66, 44, undefined, C.red, FILL.red), ci(100, 66, 27, undefined, C.green, FILL.green), ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => ci(Math.round(100 + 35 * Math.cos((i / 8) * Math.PI * 2)), Math.round(66 + 35 * Math.sin((i / 8) * Math.PI * 2)), 4, undefined, C.purple, FILL.purple)), lb(240, 52, '新しい管を\nつくる部分', 12, C.red, 'middle', true), ar(190, 58, 142, 62, C.red), ...cap('輪にそって、新しい管がつけ足される', C.red)),
  },
  {
    note: '❓新しい管がつけ足されると、どうなるのでしょう。→ 茎（みき）が、年々太くなります。木の切り口に見える年輪（ねんりん）は、1年ごとにつくられた層が積み重なったものです。',
    add: fresh(...[56, 46, 36, 26, 16, 6].map((r, i) => ci(100, 66, r, undefined, C.main, i % 2 === 0 ? FILL.warm : '#E7D3BC')), lb(240, 52, '1年ごとの層\n＝年輪', 13, C.main, 'middle', true), ar(190, 58, 130, 60, C.main), ...cap('毎年つけ足されて、幹（みき）が太くなる', C.main)),
  },
  {
    note: '❓では、単子葉類はなぜ散らばるのでしょう。→ 単子葉類には、新しい管をつけ足す部分がありません。はじめにできた維管束が、そのまま散らばって残ります。だから、茎はあまり太くなりません。',
    add: fresh(...secScatter(100, 66, 56), lb(240, 40, '新しい管を\nつけ足す部分が\nない', 12, C.red, 'middle', true), lb(240, 96, 'はじめの維管束が\nそのまま散らばる', 12, C.purple, 'middle', true), ...cap('つけ足しがない → あまり太くならない', C.red)),
  },
  {
    note: '❓太くならないと、困らないのでしょうか。→ そのかわり、中身のつまった茎で、すばやくのびることができます。いっぽう、何十年もかけて太くなる太い幹の木は、ほとんどが双子葉類（または、マツやスギのなかま）で、単子葉類には、そのような木はほとんどありません。',
    add: fresh(bx(40, 30, 24, 90, undefined, C.green, FILL.green), ar(52, 28, 52, 8, C.green), lb(52, 134, '単子葉類\n（イネ・トウモロコシ）', 10, C.green, 'middle', true), lb(150, 70, '中身がつまり\nすばやくのびる', 11, C.green, 'middle', true), bx(235, 66, 26, 56, undefined, C.main, '#E7D3BC'), ci(248, 46, 34, undefined, C.green, FILL.green), lb(248, 134, '太い幹の木は\n双子葉類など', 10, C.main, 'middle', true), ...cap('太くならない代わりに、すばやくのびる', C.green)),
  },
  {
    note: '見分けの練習です。茎の断面で維管束が輪に並んでいたら、双子葉類で、根は主根（しゅこん）と側根（そっこん）です。散らばっていたら、単子葉類で、根はひげ根です。',
    add: fresh(...flow(['維管束が\n輪に並ぶ', '双子葉類', '根は主根と\n側根'], 16, { h: 50, size: 12, color: C.green, fill: FILL.green }).flat(), ...flow(['維管束が\n散らばる', '単子葉類', '根は\nひげ根'], 84, { h: 50, size: 12, color: C.purple, fill: FILL.purple }).flat(), ...cap('1つ分かれば、残りも分かる', C.ink)),
  },
  {
    note: 'まとめです。双子葉類は、新しい管を輪にそってつけ足す部分があるので、維管束が輪になり、茎が太くなります（年輪）。単子葉類はその部分がないので、維管束が散らばったままで、あまり太くなりません。',
    add: fresh(bx(10, 10, 300, 40, '双子葉類：新しい管を輪にそってつけ足す\n→ 輪になる・太くなる（年輪）', C.green, FILL.green, 12), bx(10, 60, 300, 40, '単子葉類：つけ足す部分がない\n→ 散らばったまま・あまり太くならない', C.purple, FILL.purple, 12), ...cap('並び方のちがいには、理由がある', C.ink)),
  },
], '維管束が輪になるのは、新しい管を輪にそってつけ足すから');

// ═══════════════ rika_s019 根のつくりと吸水（節1：なぜ根毛は先端にないのか） ═══════════════
const rootPic = (cx: number): DiagramElement[] => {
  const out: DiagramElement[] = [bx(cx - 14, 8, 28, 100, undefined, C.main, '#F5E6D3'), ell(cx, 110, 18, 14, C.main, '#D6B58C')];
  for (let y = 34; y <= 82; y += 8) out.push(ln(cx - 14, y, cx - 28, y - 3, C.gray), ln(cx + 14, y, cx + 28, y - 3, C.gray));
  return out;
};
const s019: DiagramFigure = show([
  {
    note: '❓根毛（こんもう）は、根のどこに生えているのでしょう。根の一番先には、根冠（こんかん）というかたい帽子のような部分があります。根毛は、その先ではなく、少し後ろに生えています。なぜ、先端にはないのでしょう。',
    add: [...rootPic(100), lb(240, 110, '根冠（こんかん）', 12, C.main, 'middle', true), ar(180, 110, 122, 110, C.main), lb(240, 56, '根毛（こんもう）', 12, C.gray, 'middle', true), ar(180, 56, 130, 56, C.gray), ...cap('根毛は、先端ではなく少し後ろ')],
  },
  {
    note: '❓なぜ、先端に根毛がないのでしょう。→ 根の先端は、土をおし分けて進む部分です。ここに細い毛が生えていると、土とこすれて、すぐにちぎれてしまいます。',
    add: fresh(bx(30, 6, 140, 142, undefined, C.main, '#E7D3BC'), ...rootPic(100), ln(118, 104, 138, 98, C.red), lb(146, 96, '×', 14, C.red, 'middle', true), lb(246, 56, '先端は土を\nおし分けて進む', 12, C.main, 'middle', true), lb(246, 110, '細い毛があると\nちぎれる', 12, C.red, 'middle', true), ...cap('先端に毛があると、土でちぎれる', C.red)),
  },
  {
    note: '❓では、先端はどうやって守られているのでしょう。→ 先端は根冠というかたい帽子でおおって、ふえてのびる部分（成長点（せいちょうてん））を守っています。根毛は、のびきって動かなくなった、少し後ろの部分に生やします。',
    add: fresh(...rootPic(100), lb(240, 60, 'のびきって\n動かない部分\n→ 根毛が生える', 11, C.green, 'middle', true), ar(180, 60, 130, 60, C.green), lb(240, 118, 'のびている先端\n→ 根冠で守る', 11, C.main, 'middle', true), ar(180, 118, 122, 118, C.main), ...cap('動かない部分に毛を生やす', C.green)),
  },
  {
    note: '❓根毛は、何のためにあるのでしょう。→ 水にふれる面積を、何十倍にも広げるためです。1本1本がとても細く、土の粒のすきまに入りこんで、水を吸います。',
    add: fresh(bx(70, 20, 20, 80, undefined, C.main, '#F5E6D3'), bx(230, 20, 20, 80, undefined, C.main, '#F5E6D3'), ...[30, 38, 46, 54, 62, 70, 78, 86].flatMap((y) => [ln(230, y, 202, y - 4, C.green), ln(250, y, 278, y - 4, C.green)]), lb(80, 118, '根毛なし\n水にふれる面積：小', 11, C.red, 'middle', true), lb(240, 118, '根毛あり\n水にふれる面積：大', 11, C.green, 'middle', true), ...cap('根毛は、水にふれる面積を広げる', C.green)),
  },
  {
    note: '❓では、根を輪切りにすると、道管（どうかん）が中心にあるのはなぜでしょう。→ 根は、風で地上の植物が引っぱられても、土の中で引きぬかれないようにこらえる部分だからです。引っぱる力にたえるには、ロープのように、中心にじょうぶな束があるほうが強いのです。',
    add: fresh(ci(90, 66, 50, undefined, C.main, FILL.warm), ...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => ci(Math.round(90 + 30 * Math.cos((i / 8) * Math.PI * 2)), Math.round(66 + 30 * Math.sin((i / 8) * Math.PI * 2)), 5, undefined, C.main, FILL.yellow)), ci(90, 66, 15, '道管', C.blue, FILL.blue, 11), lb(90, 126, 'まわりは師管', 10, C.main, 'middle'), lb(235, 30, '根は引っぱられても\n抜けないよう\nこらえる部分', 11, C.ink, 'middle', true), lb(235, 90, 'ロープのように\n中心に丈夫な束', 11, C.blue, 'middle', true), ...cap('根：丈夫な道管が中心', C.blue)),
  },
  {
    note: '❓では、茎はどうでしょう。→ 茎は風でゆらされて、曲げられる部分です。曲げる力には、丈夫な管が外側の輪に並んでいるほうが折れにくくなります。ストローの中が空いていても、折れにくいのと同じです。',
    add: fresh(...secRing(80, 56, 44), ci(240, 56, 44, undefined, C.main, FILL.warm), ci(240, 56, 14, undefined, C.blue, FILL.blue), lb(80, 118, '茎：曲げられる\n丈夫な管は外側の輪', 11, C.green, 'middle', true), lb(240, 118, '根：引っぱられる\n丈夫な管は中心', 11, C.blue, 'middle', true), ...cap('はたらく力のちがいで、並びがちがう', C.ink)),
  },
  {
    note: '❓植えかえのとき、根の細かい部分をこわさないようにするのはなぜでしょう。→ 根毛がとれると、水を吸う面積が急に減って、水を吸う力が落ちます。すると、植物がしおれてしまうからです。',
    add: fresh(...flow(['根毛が\nとれる', '水を吸う力が\n落ちる', 'しおれる'], 30, { h: 64, size: 12, color: C.red, fill: FILL.red }).flat(), ...cap('細かい根をこわさないように植えかえる', C.red)),
  },
  {
    note: 'まとめです。根毛は、先端ではなく少し後ろに生え、水にふれる面積を広げます。先端は根冠で守られて、土をおし進みます。根では丈夫な道管が中心にあって、引っぱられてもこらえます。茎では外側の輪にあって、曲げる力にたえます。',
    add: fresh(bx(10, 8, 300, 34, '根毛：少し後ろに生え、水にふれる面積を広げる', C.green, FILL.green, 12), bx(10, 48, 300, 34, '先端：根冠で守られて、土をおし進む', C.main, FILL.warm, 12), bx(10, 88, 300, 34, '道管：根は中心（引っぱり）／茎は外側（曲げ）', C.blue, FILL.blue, 12), ...cap('形には、はたらきに合った理由がある', C.ink)),
  },
], '根毛は、のびきった少し後ろ。先端は根冠が守る');
