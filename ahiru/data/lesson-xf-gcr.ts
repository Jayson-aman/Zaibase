// 理科（中学受験）の追加単元 gap_gcr_01〜14 の「動く図解スライド」。
// 「なぜ？」の連鎖で、1つの図を7〜8枚で説明する。単元の最初の節（#0）にひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 下の帯（y=164 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(10, 164, 300, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い → 答え
const Q = (note: string, q: string, a: string, capText: string, c: Col = BLUE, aSize = 13) =>
  S(note, [
    bx(10, 8, 300, 34, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
    ar(160, 44, 160, 56, PURPLE[0]),
    bx(10, 58, 300, 92, a, c[0], c[1], aSize),
  ], capText, c);

const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44, gap = 14): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap }).flat();

// 矢印なしの横一列
const cells = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 30, gap = 6, x0 = 10, total = 300): DiagramElement[] => {
  const n = labels.length;
  const w = (total - gap * (n - 1)) / n;
  return labels.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, c[0], c[1], size));
};

// 表（先頭行は見出し）
const tab = (rows: string[][], y0: number, colW: number[], h = 26, size = 12, x0?: number, hl: [number, number][] = []): DiagramElement[] => {
  const tw = colW.reduce((a, b) => a + b, 0);
  const sx = x0 ?? (320 - tw) / 2;
  const out: DiagramElement[] = [];
  rows.forEach((r, i) => {
    let x = sx;
    r.forEach((t, j) => {
      const on = hl.some(([a, b]) => a === i && b === j);
      const c = i === 0 ? BLUE : on ? RED : MAIN;
      out.push(bx(x, y0 + i * h, colW[j], h, t, c[0], on ? FILL.red : i === 0 ? FILL.blue : FILL.warm, size));
      x += colW[j];
    });
  });
  return out;
};

// 決まった並びのつぶ（小さな丸）。seed で位置をずらす。
const tiny = (x0: number, y0: number, w: number, h: number, n: number, seed: number, c: Col, r = 3.5): DiagramElement[] => {
  const out: DiagramElement[] = [];
  let s = seed;
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  for (let i = 0; i < n; i++) out.push(ci(x0 + r + rnd() * (w - 2 * r), y0 + r + rnd() * (h - 2 * r), r, undefined, c[0], c[1]));
  return out;
};
// 格子に並んだつぶ
const grid = (x0: number, y0: number, nx: number, ny: number, gap: number, c: Col, r = 3.5): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) out.push(ci(x0 + i * gap, y0 + j * gap, r, undefined, c[0], c[1]));
  return out;
};

// ── 01 水の三つのすがた ──
const f01 = show([
  S('水は、温度によって三つの姿に変わります。氷（固体）、水（液体）、水蒸気（すいじょうき・気体）です。まず、この三つが何で、どんな順につながっているかを見てみましょう。',
    [bx(10, 20, 84, 56, '氷\n（固体）', C.blue, FILL.blue, 15), bx(118, 20, 84, 56, '水\n（液体）', C.main, FILL.warm, 15), bx(226, 20, 84, 56, '水蒸気\n（気体）', C.red, FILL.red, 15),
      ar(96, 40, 116, 40, C.gray), ar(116, 58, 96, 58, C.gray), ar(204, 40, 224, 40, C.gray), ar(224, 58, 204, 58, C.gray),
      lb(106, 100, '0℃', 13, C.blue, 'middle', true), lb(214, 100, '100℃', 13, C.red, 'middle', true), lb(160, 130, '温度が変わると、姿が変わる', 13, C.ink, 'middle', true)],
    '❓ 水は、どんな姿に変わる？', PURPLE),
  S('姿が変わるときには、それぞれ名前があります。氷が水になるのは「とける」、水が氷になるのは「こおる」、水が水蒸気になるのは「蒸発（じょうはつ）」です。水蒸気が冷えて水にもどることも、見ておきましょう。',
    tab([['もとの姿', 'あとの姿', 'よび名'], ['氷', '水', 'とける'], ['水', '氷', 'こおる'], ['水', '水蒸気', '蒸発（じょうはつ）'], ['水蒸気', '水', '冷えて水にもどる']], 12, [86, 86, 128], 28, 13, undefined, [[3, 2]]),
    '姿が変わるときの名前', MAIN),
  Q('では、なぜ温度が変わると、姿まで変わるのでしょう。水は、目に見えない小さな「つぶ」が集まってできています。熱を加えると、つぶの動きが激しくなって、並びがくずれていくからです。',
    '温度で姿が変わるのは？', '水は小さな「つぶ」の集まり\n熱を加える → つぶの動きが激しくなる\n動きが激しいと、きちんと並んでいられない\n氷 → 水 → 水蒸気と姿が変わる', 'つぶの動きが、姿を決める', GREEN, 13),
  S('つぶのようすを絵にしてみましょう。氷では、つぶがきちんと並んで、その場でふるえています。水では、並びがくずれて、すべるように動きます。水蒸気では、つぶがばらばらになって、空中を飛び回ります。',
    [bx(8, 10, 98, 24, '氷', C.blue, FILL.blue, 13), bx(111, 10, 98, 24, '水', C.main, FILL.warm, 13), bx(214, 10, 98, 24, '水蒸気', C.red, FILL.red, 13),
      bx(8, 38, 98, 112, undefined, C.blue, '#FFFFFF'), bx(111, 38, 98, 112, undefined, C.main, '#FFFFFF'), bx(214, 38, 98, 112, undefined, C.red, '#FFFFFF'),
      ...grid(26, 56, 5, 5, 16, [C.blue, FILL.blue]), ...tiny(115, 70, 90, 74, 18, 7, [C.main, FILL.warm]), ...tiny(218, 42, 90, 104, 6, 3, [C.red, FILL.red])],
    '並んでいる → くずれる → ばらばら', BLUE),
  Q('では、なぜ水が水蒸気になると、体積がこんなに大きくなるのでしょう。つぶの数は変わりませんが、つぶとつぶのあいだのすき間が、とても大きくなるからです。',
    '体積が変わるのは？', '氷になると、並びにすき間ができて約1.1倍\n水蒸気になると、つぶが散らばって約1700倍\nつぶの数は同じ。すき間の大きさだけが変わる', 'つぶの数は同じ、すき間が変わる', PURPLE, 13),
  S('次に、体積をくらべてみましょう。水1cm³が氷になると約1.1cm³に、水蒸気になると約1700cm³になります。ただし、重さはどれも1gのままです。つぶの数が変わらないからです。',
    tab([['', '水', '氷', '水蒸気'], ['体積', '1cm³', '約1.1cm³', '約1700cm³'], ['重さ', '1g', '1g', '1g']], 20, [66, 70, 82, 82], 32, 13, undefined, [[2, 1], [2, 2], [2, 3]]),
    '体積は変わる。重さは変わらない', GREEN),
  S('ここで、やかんの湯気（ゆげ）を見てみましょう。やかんの口のすぐ先には、何も見えないすき間があります。そこが水蒸気です。少しはなれると、水蒸気が冷えて水のつぶになり、白く見えます。これが湯気です。',
    [bx(12, 78, 64, 56, 'やかん', C.gray, FILL.gray, 13), ln(76, 92, 106, 80, C.gray, false, 3), bx(108, 62, 82, 40, '水蒸気\n（見えない）', C.red, FILL.red, 12), ar(192, 82, 214, 82, C.gray),
      bx(216, 52, 94, 56, '湯気\n水のつぶ\n（見える）', C.blue, FILL.blue, 12), lb(160, 138, '口のすぐ先は何も見えない', 12, C.ink, 'middle', true)],
    '湯気は水蒸気ではなく、水のつぶ', RED),
  S('まとめです。水はつぶの動きで姿を変え、体積は変わっても重さは変わりません。水500cm³がこおると、500×1.1＝550cm³になりますが、重さは500gのままです。',
    [...row(['水 500cm³\n500g', '×1.1', '氷 550cm³\n500g'], 14, MAIN, 13, 56), lb(160, 98, '氷 → 水 のときは ÷1.1', 14, C.blue, 'middle', true), lb(160, 126, '重さはどちらも同じ', 14, C.green, 'middle', true)],
    'まとめ：体積は×1.1、重さは同じ', MAIN),
], '氷・水・水蒸気');

// ── 02 水を熱し続けたときの温度 ──
const g2X = (t: number) => 40 + t * 10.4;
const g2Y = (T: number) => 140 - 1.2 * T;
const g2Base = (): DiagramElement[] => [
  ln(40, 140, 300, 140, C.gray, false, 1.6), ln(40, 16, 40, 140, C.gray, false, 1.6),
  lb(44, 11, '温度', 11, C.ink, 'start', true), lb(300, 152, '時間', 11, C.ink, 'end', true),
  lb(32, g2Y(0) + 3, '0℃', 10, C.ink, 'end'), lb(32, g2Y(100) + 3, '100℃', 10, C.ink, 'end'),
  ln(40, g2Y(100), 296, g2Y(100), C.gray, true, 1),
];
const f02 = show([
  S('氷100gを0℃から、一定の火力で熱し続けると、温度はどう変わるでしょう。熱しているのだから、ずっと上がり続けそうです。横に時間、たてに温度をとったグラフで、その変わり方を追ってみます。',
    [...g2Base(), bx(70, 40, 190, 54, '氷100g（0℃）を\n一定の火力で熱し続ける', C.main, FILL.warm, 13), lb(170, 118, 'グラフはどんな形になる？', 13, C.ink, 'middle', true)],
    '❓ 温度は、ずっと上がり続ける？', PURPLE),
  S('はじめの8分間は、氷がとけていきます。この間、温度計は0℃のまま動きません。氷と水がまざっている間は、ずっと0℃です。グラフは、横にまっすぐになります。',
    [...g2Base(), ln(g2X(0), g2Y(0), g2X(8), g2Y(0), C.blue, false, 3.5), lb(g2X(4), g2Y(0) - 22, 'とけている間 0℃', 12, C.blue, 'middle', true), lb(g2X(8), 152, '8分', 11, C.ink, 'middle', true)],
    '氷がとけている間は、0℃のまま', BLUE),
  Q('では、なぜ熱しているのに、温度が上がらないのでしょう。熱には、「温度を上げる」ことと「姿を変える」ことの二つの使い道があります。氷がとけている間は、もらった熱を全部、氷を水に変えることに使っているからです。',
    '温度が止まるのは？', '熱の使い道は二つ\n① 温度を上げる　② 姿を変える\n氷がとけている間は、熱を ② に全部使う\nだから温度計の数字は動かない', '熱が「姿を変える」ことに使われる', GREEN, 13),
  S('全部とけて水になると、熱は温度を上げることに使われます。水の温度は、1分あたり10℃ずつ上がっていきます。8分から、グラフが右上がりになります。',
    [...g2Base(), ln(g2X(0), g2Y(0), g2X(8), g2Y(0), C.blue, false, 3.5), ln(g2X(8), g2Y(0), g2X(18), g2Y(100), C.main, false, 3.5), lb(g2X(8), 152, '8分', 11, C.ink, 'middle', true), lb(g2X(18), 152, '18分', 11, C.ink, 'middle', true), lb(g2X(13) + 40, g2Y(50) + 4, '1分で10℃', 12, C.main, 'middle', true)],
    '水になると、1分で10℃ずつ上がる', MAIN),
  S('18分で、水は100℃になり、ふっとうし始めます。ふっとうしている間は、もらった熱を全部、水を水蒸気に変えることに使うので、温度は100℃のまま。グラフがまた横にまっすぐになります。',
    [...g2Base(), ln(g2X(0), g2Y(0), g2X(8), g2Y(0), C.blue, false, 3.5), ln(g2X(8), g2Y(0), g2X(18), g2Y(100), C.main, false, 3.5), ln(g2X(18), g2Y(100), g2X(24), g2Y(100), C.red, false, 3.5), lb(g2X(8), 152, '8分', 11, C.ink, 'middle', true), lb(g2X(18), 152, '18分', 11, C.ink, 'middle', true), lb(g2X(21), g2Y(100) + 16, 'ふっとう中', 12, C.red, 'middle', true)],
    'ふっとう中は、100℃のまま', RED),
  S('蒸発とふっとうは、どちらも水が水蒸気になることですが、起こり方がちがいます。蒸発は、水の表面から、100℃にならなくても起こります。ふっとうは、水の中からもあわが出て、100℃で起こります。',
    tab([['', '蒸発', 'ふっとう'], ['どこから', '表面から', '中からも'], ['温度', 'いつでも', '100℃'], ['あわ', '出ない', '出る（水蒸気）']], 18, [80, 110, 110], 30, 13, undefined, [[3, 2]]),
    '蒸発とふっとうのちがい', MAIN),
  S('グラフから答えを読みとりましょう。15分後は、8分から7分間上がるので、10×7＝70℃です。20分後は、18分で100℃になっているので、ふっとう中で100℃のままです。120℃にはなりません。',
    [...g2Base(), ln(g2X(0), g2Y(0), g2X(8), g2Y(0), C.blue, false, 3), ln(g2X(8), g2Y(0), g2X(18), g2Y(100), C.main, false, 3), ln(g2X(18), g2Y(100), g2X(24), g2Y(100), C.red, false, 3),
      ln(g2X(15), g2Y(0), g2X(15), g2Y(70), C.purple, true, 1.4), ci(g2X(15), g2Y(70), 4, undefined, C.purple, C.purple), lb(g2X(15) + 6, g2Y(70) + 18, '15分 70℃', 11, C.purple, 'start', true),
      ci(g2X(20), g2Y(100), 4, undefined, C.red, C.red), lb(g2X(20), g2Y(100) + 16, '20分 100℃', 11, C.red, 'middle', true)],
    '15分後 70℃、20分後 100℃（120℃にならない）', PURPLE),
  S('まとめです。氷の重さが2倍の200gなら、とかすにもあたためるにも熱が2倍いるので、時間も全部2倍になります。0℃で止まるのは16分間、100℃になるのは36分後です。',
    tab([['', '氷100g', '氷200g'], ['全部とける', '8分', '16分'], ['100℃になる', '18分後', '36分後']], 22, [110, 95, 95], 34, 14, undefined, [[2, 2]]),
    'まとめ：重さが2倍なら、時間も2倍', MAIN),
], '水を熱し続けたときの温度');


export const XF_GCR_FIGURES: Record<string, DiagramFigure> = {
  'xf_gap_gcr_01': f01,
  'xf_gap_gcr_02': f02,
};

export const XF_GCR_SECTIONS: Record<string, string> = {
  'gap_gcr_01#0': 'xf_gap_gcr_01',
  'gap_gcr_02#0': 'xf_gap_gcr_02',
};
