// 高校受験・数学（formulas-koko-sugaku.ts）の確率・データ分野（figure を持たない項目の 73〜82番目）の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
// 画面の上半分に図、下の帯（band）に、そのスライドの式やひとこと、という配置にそろえてある。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, band, fresh } from './diagram-kit';

type El = DiagramElement;

// ── 共通の小さな部品 ──
/** さいころの目 1〜6 を横に並べる（hi の目だけ色をつける）。 */
const dieRow = (hi: number[], color: string, fill: string, y = 50): El[] =>
  [1, 2, 3, 4, 5, 6].map((i) =>
    bx(30 + (i - 1) * 44, y, 40, 44, String(i), hi.includes(i) ? color : C.gray, hi.includes(i) ? fill : FILL.gray, 16),
  );

/** 2分木（コイン3枚の樹形図など）。leaves 個の葉を縦に並べ、各節に labels[段][位置] を書く。 */
function binTree(levels: number, x0: number, dx: number, yTop: number, yBot: number, labels: string[][]): El[] {
  const leaves = 2 ** levels;
  const out: El[] = [];
  const yOf = (lvl: number, idx: number): number => {
    if (lvl === levels) return yTop + ((yBot - yTop) * idx) / (leaves - 1);
    return (yOf(lvl + 1, idx * 2) + yOf(lvl + 1, idx * 2 + 1)) / 2;
  };
  for (let lvl = 0; lvl < levels; lvl++) {
    for (let idx = 0; idx < 2 ** lvl; idx++) {
      const px = x0 + lvl * dx;
      const py = yOf(lvl, idx);
      for (let k = 0; k < 2; k++) {
        const cx = x0 + (lvl + 1) * dx;
        const cy = yOf(lvl + 1, idx * 2 + k);
        out.push(ln(px + 6, py, cx - 6, cy, C.gray));
      }
    }
  }
  out.push(ci(x0, yOf(0, 0), 5, undefined, C.gray, FILL.gray));
  for (let lvl = 1; lvl <= levels; lvl++) {
    for (let idx = 0; idx < 2 ** lvl; idx++) {
      out.push(ci(x0 + lvl * dx, yOf(lvl, idx), 6.5, labels[lvl - 1][idx % 2], C.blue, FILL.blue, 8));
    }
  }
  return out;
}

// ═════════════════════════════════════════════
// 確率の意味と求め方
// ═════════════════════════════════════════════
const kakuritsuImi: DiagramFigure = show([
  {
    note: '確率は「あることがらの起こりやすさ」を、0から1までの数で表したものです。まず1個のさいころで考えます。出る目は1から6までの6通りです。',
    add: [lb(160, 28, 'さいころ1個の目', 12, C.gray), ...dieRow([], C.gray, FILL.gray), ...band(110, lb(160, 150, '目は 1〜6 の6通り', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ 「偶数の目が出る確率」は、どう表すの？ 全部の場合の数を分母、当てはまる場合の数を分子にします。偶数は2、4、6の3通りなので、3÷6＝1/2 です。',
    add: [...dieRow([2, 4, 6], C.blue, FILL.blue), ...band(110, bx(20, 124, 135, 30, '全部 6通り（分母）', C.gray, FILL.gray, 12), bx(165, 124, 135, 30, '偶数 3通り（分子）', C.blue, FILL.blue, 12), bx(60, 168, 200, 34, '3 ÷ 6 ＝ 1/2', C.green, FILL.green, 16))],
  },
  {
    note: '❓ なぜ「どの目も同じくらい出やすい」という前提がいるの？ もし1の面だけがとても出やすいさいころなら、6通りのうちの1通りでも、実際にはもっとよく出ます。数えた割合が、本当の出やすさとずれるからです。',
    add: fresh(bx(10, 40, 110, 44, '1', C.red, FILL.red, 18), ...[0, 1, 2, 3, 4].map((i) => bx(126 + i * 38, 40, 34, 44, String(i + 2), C.gray, FILL.gray, 14)), lb(65, 100, '出やすい面', 11, C.red, 'middle', true), ...band(116, lb(160, 140, '面の重さがちがえば、6通りは対等でない', 13, C.red, 'middle', true), lb(160, 172, '同じくらい出やすいから「数の割り算」が使える', 12, C.blue, 'middle', true))),
  },
  {
    note: '3の倍数の目は、3と6の2通りです。だから 2/6 です。❓ なぜ約分して 1/3 にするの？ 6個のうち2個は、3個のうち1個と同じ割合だからです。大きさは変わらず、すっきり書けます。',
    add: fresh(...dieRow([3, 6], C.blue, FILL.blue), ...band(110, bx(20, 124, 135, 30, '3の倍数は 3 と 6', C.blue, FILL.blue, 12), bx(165, 124, 135, 30, '2/6 ＝ 1/3', C.green, FILL.green, 15), lb(160, 180, '6個中2個 ＝ 3個中1個', 12, C.gray))),
  },
  {
    note: '❓ なぜ確率は0以上1以下なの？ 確率は「全部のうちの何割か」を表します。何も当てはまらなければ0、全部当てはまれば1です。全部より多く当てはまることはないので、1を超えません。',
    add: fresh(ln(30, 70, 290, 70, C.ink, false, 2.5), ...[0, 0.5, 1].map((v) => ln(30 + v * 260, 62, 30 + v * 260, 78, C.ink, false, 2.5)), lb(30, 88, '0', 14, C.ink, 'middle', true), lb(160, 88, '1/2', 14, C.ink, 'middle', true), lb(290, 88, '1', 14, C.ink, 'middle', true), lb(45, 44, 'ぜったい\n起きない', 11, C.red, 'middle', true), lb(160, 44, '半々', 11, C.gray, 'middle', true), lb(275, 44, '必ず\n起きる', 11, C.blue, 'middle', true), ...band(116, bx(40, 130, 240, 34, '0 ≦ 確率 ≦ 1', C.green, FILL.green, 16), lb(160, 190, '起こりやすいほど、右の1に近い', 12, C.gray))),
  },
  {
    note: '❓ 答えが 7/5 になったら、なにがおかしいの？ 分母の5は全部の場合、分子の7は当てはまる場合です。当てはまる場合が全部より多いことはありえません。同じ場合を2回数えたか、分母の数え落としを疑います。',
    add: fresh(...[0, 1, 2, 3, 4].map((i) => bx(30 + i * 40, 50, 40, 40, undefined, C.blue, FILL.blue)), bx(230, 50, 40, 40, undefined, C.red, FILL.red), bx(270, 50, 40, 40, undefined, C.red, FILL.red), lb(130, 106, '全部 5', 12, C.blue, 'middle', true), lb(270, 106, 'はみ出す 2', 12, C.red, 'middle', true), ...band(126, bx(30, 140, 260, 34, '分子が分母をこえた → 数えまちがい', C.red, FILL.red, 14), lb(160, 200, '最後に「0から1の間か」を確かめる', 12, C.gray))),
  },
  {
    note: '❓ すべての確率を足すと、なぜ1になるの？ 全部の場合を、もれなく重ならないように2組に分ければ、2組を合わせて全体になるからです。偶数 3/6 と奇数 3/6 を足すと 6/6＝1 です。',
    add: fresh(...[0, 1, 2, 3, 4, 5].map((i) => bx(28 + i * 44, 50, 44, 44, String(i + 1), i % 2 === 1 ? C.blue : C.red, i % 2 === 1 ? FILL.blue : FILL.red, 15)), lb(94, 112, '奇数 3/6', 12, C.red, 'middle', true), lb(226, 112, '偶数 3/6', 12, C.blue, 'middle', true), ...band(130, bx(40, 146, 240, 34, '3/6 ＋ 3/6 ＝ 6/6 ＝ 1', C.green, FILL.green, 16), lb(160, 202, '全体をもれなく分ければ、合計は1', 12, C.gray))),
  },
  {
    note: '❓ では、負ける確率はどう出すの？ ある試合に勝つ確率が 2/5 だとします。勝つか負けるかしかないので、足して1です。だから負ける確率は 1−2/5＝3/5 です。',
    add: fresh(...[0, 1, 2, 3, 4].map((i) => bx(30 + i * 52, 50, 52, 44, i < 2 ? '勝' : '負', i < 2 ? C.blue : C.red, i < 2 ? FILL.blue : FILL.red, 15)), lb(82, 112, '勝つ 2/5', 12, C.blue, 'middle', true), lb(212, 112, '負ける 3/5', 12, C.red, 'middle', true), ...band(130, bx(30, 146, 260, 34, '負ける ＝ 1 − 2/5 ＝ 3/5', C.green, FILL.green, 16), lb(160, 202, '起こらない確率 ＝ 1 − 起こる確率', 12, C.gray))),
  },
  {
    note: '❓ 「少なくとも1枚は表」は、なぜ「1から引く」と速いの？ コイン2枚で、表が出る場合を全部数えるのは大変です。でも「1枚も表が出ない」のは、裏裏の1通りだけです。4通り中1通りなので 1/4、1−1/4＝3/4 です。',
    add: fresh(...['表表', '表裏', '裏表', '裏裏'].map((t, i) => bx(20 + i * 72, 44, 64, 44, t, i === 3 ? C.red : C.blue, i === 3 ? FILL.red : FILL.blue, 15)), lb(52, 104, '3通りは表あり', 11, C.blue, 'middle', true), lb(268, 104, '1枚も表なし', 11, C.red, 'middle', true), ...band(124, bx(20, 138, 280, 34, '少なくとも1枚表 ＝ 1 − 1/4 ＝ 3/4', C.green, FILL.green, 14), lb(160, 198, '「そうでない場合」が少ないときに便利', 12, C.gray))),
  },
  {
    note: 'まとめです。分母は全部の場合、分子は当てはまる場合です。どの場合も同じくらい出やすいときに使えます。答えは0から1の間にあるか、最後に確かめます。',
    add: fresh(...[['全部の\n場合の数', C.gray, FILL.gray], ['当てはまる\n場合の数', C.blue, FILL.blue], ['約分', C.purple, FILL.purple], ['0〜1の間か\n確かめる', C.green, FILL.green]].flatMap(([t, c, f], i) => {
      const els: El[] = [];
      if (i > 0) els.push(ar(20 + i * 74 - 8, 76, 20 + i * 74 - 1, 76, C.gray));
      els.push(bx(10 + i * 74, 50, 66, 52, t, c, f, 12));
      return els;
    }), ...band(126, bx(30, 142, 260, 34, '確率 ＝ 当てはまる ÷ 全部', C.green, FILL.green, 16), lb(160, 200, '「少なくとも」は 1 − そうでない確率', 12, C.gray))),
  },
]);

// ═════════════════════════════════════════════
// 樹形図と表の使い分け
// ═════════════════════════════════════════════
const GR = { x: 104, y: 28, s: 17 };
const gridCell = (i: number, j: number, color: string, fill: string, text?: string): El =>
  bx(GR.x + (j - 1) * GR.s, GR.y + (i - 1) * GR.s, GR.s, GR.s, text, color, fill, 8);
const gridBase = (): El[] => {
  const out: El[] = [];
  for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) out.push(gridCell(i, j, C.gray, '#FFFFFF'));
  for (let k = 1; k <= 6; k++) {
    out.push(lb(GR.x + (k - 1) * GR.s + GR.s / 2, 20, String(k), 10, C.blue, 'middle', true));
    out.push(lb(GR.x - 8, GR.y + (k - 1) * GR.s + GR.s / 2, String(k), 10, C.red, 'end', true));
  }
  out.push(lb(GR.x + 51, 8, '2個目', 10, C.blue, 'middle', true), lb(GR.x - 26, 12, '1個目', 10, C.red, 'end', true));
  return out;
};
const sumBars = (): El[] => {
  const cnt = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];
  const out: El[] = [];
  cnt.forEach((n, k) => {
    const x = 26 + k * 24;
    const h = n * 14;
    out.push(bx(x, 124 - h, 22, h, undefined, k === 5 ? C.red : C.blue, k === 5 ? FILL.red : FILL.blue));
    out.push(lb(x + 11, 132, String(k + 2), 9, C.ink, 'middle', true));
    out.push(lb(x + 11, 118 - h, String(n), 9, C.gray, 'middle', true));
  });
  return out;
};
const jukeizu: DiagramFigure = show([
  {
    note: '2個のさいころを投げるとき、場合の数を「表」と「樹形図（じゅけいず）」のどちらで数えるかを考えます。目の和が7になる確率を例にします。',
    add: [bx(20, 30, 130, 50, '表\n2つのものを組み合わせる', C.blue, FILL.blue, 12), bx(170, 30, 130, 50, '樹形図\n3つ以上・順に選ぶ', C.purple, FILL.purple, 12), ...band(110, lb(160, 150, 'もれなく・重複なく数えるための道具', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ 全部の場合の数は、なぜ 6×6＝36通りなの？ 1個目の目が6通りあって、そのどれに対しても2個目が6通りあるからです。6通りが6組ならんで、合わせて36通りです。',
    add: fresh(bx(20, 30, 70, 34, '1個目', C.red, FILL.red, 13), ...[1, 2, 3, 4, 5, 6].map((k) => bx(100 + (k - 1) * 34, 30, 30, 34, String(k), C.red, FILL.red, 13)), lb(20, 92, 'それぞれの目に\n2個目が6通り', 11, C.blue, 'start', true), ...[1, 2, 3, 4, 5, 6].map((k) => ar(115 + (k - 1) * 34, 66, 115 + (k - 1) * 34, 84, C.blue)), ...[1, 2, 3, 4, 5, 6].map((k) => bx(100 + (k - 1) * 34, 88, 30, 24, '×6', C.blue, FILL.blue, 11)), ...band(126, bx(50, 142, 220, 34, '6 × 6 ＝ 36通り', C.green, FILL.green, 16))),
  },
  {
    note: '表にすると、たてが1個目、横が2個目で、36個のマスがそのまま36通りに対応します。ここに目の和を書きこんでいきます。',
    add: fresh(...gridBase(), ...[1, 2, 3, 4, 5, 6].flatMap((i) => [1, 2, 3, 4, 5, 6].map((j) => lb(GR.x + (j - 1) * GR.s + GR.s / 2, GR.y + (i - 1) * GR.s + GR.s / 2, String(i + j), 8, C.gray))), ...band(136, lb(160, 170, 'マス1つ ＝ 出方1通り　全部で36マス', 13, C.blue, 'middle', true))),
  },
  {
    note: '❓ なぜ (1,2) と (2,1) を別に数えるの？ 1個目が1で2個目が2の出方と、1個目が2で2個目が1の出方は、別のマスだからです。2個を区別して数えると、36マスがどれも同じくらい起こりやすくなります。',
    add: [gridCell(1, 2, C.red, FILL.red, '3'), gridCell(2, 1, C.red, FILL.red, '3'), ...band(136, bx(20, 148, 135, 30, '(1,2) のマス', C.red, FILL.red, 12), bx(165, 148, 135, 30, '(2,1) のマス', C.red, FILL.red, 12), lb(160, 200, '別のマス ＝ 別の出方（どちらも和は3）', 12, C.gray))],
  },
  {
    note: '目の和が7になるマスに色をつけます。1個目と2個目を足して7になる組は、ななめに1本ならびます。数えると6マスです。',
    add: fresh(...gridBase(), ...[1, 2, 3, 4, 5, 6].flatMap((i) => [1, 2, 3, 4, 5, 6].map((j) => (i + j === 7 ? gridCell(i, j, C.red, FILL.red, '7') : gridCell(i, j, C.gray, '#FFFFFF')))), ...band(136, lb(160, 158, '(1,6)(2,5)(3,4)(4,3)(5,2)(6,1)', 13, C.red, 'middle', true), lb(160, 192, 'ななめに6マス', 12, C.gray))),
  },
  {
    note: '❓ では確率は？ 当てはまるのが6マス、全部が36マスなので 6/36 です。約分すると 1/6。「当てはまる場合の数 ÷ 全部の場合の数」の形になっています。',
    add: band(136, bx(20, 148, 135, 30, '当てはまる 6', C.red, FILL.red, 13), bx(165, 148, 135, 30, '全部 36', C.gray, FILL.gray, 13), bx(60, 188, 200, 34, '6/36 ＝ 1/6', C.green, FILL.green, 16)),
  },
  {
    note: '❓ 和が2になる確率は、なぜ和が7よりずっと小さいの？ 和が2になるのは (1,1) の1マスだけです。和が7は6マスあります。和によって、当てはまるマスの数がちがうからです。',
    add: fresh(...gridBase(), ...[1, 2, 3, 4, 5, 6].flatMap((i) => [1, 2, 3, 4, 5, 6].map((j) => (i + j === 2 ? gridCell(i, j, C.blue, FILL.blue, '2') : i + j === 7 ? gridCell(i, j, C.red, FILL.red, '7') : gridCell(i, j, C.gray, '#FFFFFF')))), ...band(136, bx(20, 148, 135, 30, '和2 ： 1マス', C.blue, FILL.blue, 13), bx(165, 148, 135, 30, '和7 ： 6マス', C.red, FILL.red, 13), lb(160, 200, '1/36 と 6/36', 13, C.gray, 'middle', true))),
  },
  {
    note: '和ごとにマスの数をグラフにすると、真ん中の7がいちばん高い山になります。和は2から12まで11種類ありますが、同じ確率ではありません。はしにいくほど少なくなります。',
    add: fresh(...sumBars(), lb(160, 12, '和ごとのマスの数（全部で36）', 11, C.gray, 'middle', true), ...band(142, lb(160, 170, '7がいちばん多く、2と12がいちばん少ない', 13, C.red, 'middle', true), lb(160, 200, '1+2+3+4+5+6+5+4+3+2+1 ＝ 36', 12, C.gray))),
  },
  {
    note: '❓ では、樹形図はいつ使うの？ 表は「たて」と「横」の2方向しかとれません。コイン3枚のように3つ目が入ると、表に書けなくなります。順に枝分かれさせていく樹形図なら、何個でも続けられます。',
    add: fresh(...binTree(3, 24, 66, 28, 126, [['表', '裏'], ['表', '裏'], ['表', '裏']]), lb(90, 10, '1枚目', 10, C.gray), lb(156, 10, '2枚目', 10, C.gray), lb(222, 10, '3枚目', 10, C.gray), lb(280, 70, '2×2×2\n＝8通り', 13, C.green, 'middle', true), ...band(140, lb(160, 175, '左から順に枝分かれ ＝ もれなく数えられる', 13, C.purple, 'middle', true))),
  },
  {
    note: 'まとめです。2つのものを組み合わせるなら表、3つ以上や順に選ぶなら樹形図です。さいころ2個は必ず36通り。どちらも、もれなく・重複なく数えるための道具です。',
    add: fresh(bx(20, 34, 130, 60, '表\nさいころ2個\n6×6＝36通り', C.blue, FILL.blue, 13), bx(170, 34, 130, 60, '樹形図\n3つ以上・順に選ぶ\n枝分かれで数える', C.purple, FILL.purple, 12), ...band(120, bx(30, 138, 260, 34, '同じものも区別して数える', C.green, FILL.green, 14), lb(160, 200, '数えもれ・二重数えを防ぐ', 12, C.gray))),
  },
]);

// ═════════════════════════════════════════════
// くじ引き・玉の取り出し
// ═════════════════════════════════════════════
const balls3 = (labels: string[], x0: number, y: number): El[] =>
  labels.map((t, i) => ci(x0 + i * 46, y, 19, t, t.startsWith('赤') ? C.red : C.gray, t.startsWith('赤') ? FILL.red : '#FFFFFF', 12));
/** 赤1・赤2・白から続けて2個（戻さない）の樹形図。hi のとき、2個とも赤の枝を強調する。 */
const ballTree = (hi: boolean): El[] => {
  const out: El[] = [];
  const firsts = ['赤1', '赤2', '白'];
  const seconds = [['赤2', '白'], ['赤1', '白'], ['赤1', '赤2']];
  const ly = (k: number) => 24 + k * 21;
  const fy = (f: number) => (ly(f * 2) + ly(f * 2 + 1)) / 2;
  const rootY = fy(1);
  firsts.forEach((f, fi) => {
    out.push(ln(38, rootY, 92, fy(fi), C.gray));
    seconds[fi].forEach((s, si) => {
      const both = hi && f.startsWith('赤') && s.startsWith('赤');
      out.push(ln(108, fy(fi), 188, ly(fi * 2 + si), both ? C.red : C.gray, false, both ? 2.5 : 1.6));
      out.push(ci(198, ly(fi * 2 + si), 9, s, both ? C.red : C.gray, both ? FILL.red : '#FFFFFF', 9));
      out.push(lb(214, ly(fi * 2 + si), `（${f}，${s}）`, 9, both ? C.red : C.gray, 'start', both));
    });
  });
  firsts.forEach((f, fi) => out.push(ci(100, fy(fi), 9, f, f.startsWith('赤') ? C.red : C.gray, f.startsWith('赤') ? FILL.red : '#FFFFFF', 9)));
  out.push(ci(30, rootY, 6, undefined, C.gray, FILL.gray));
  out.push(lb(100, 8, '1個目', 10, C.gray, 'middle', true), lb(198, 8, '2個目', 10, C.gray, 'middle', true));
  return out;
};
const kujiTama: DiagramFigure = show([
  {
    note: '赤玉2個と白玉1個が入った袋から、続けて2個取り出します（取り出した玉は戻しません）。2個とも赤である確率を求めます。',
    add: [...balls3(['赤', '赤', '白'], 90, 56), lb(160, 20, '袋の中', 12, C.gray, 'middle', true), ...band(100, lb(160, 140, '続けて2個・戻さない　2個とも赤は？', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ なぜ同じ赤玉を「赤1・赤2」と区別するの？ 区別しないと、赤を取る起こり方は1通りに見えて、白を取る起こり方と同じ数になってしまいます。実際には赤のほうが2倍取りやすいので、番号をつけて数えます。',
    add: fresh(...balls3(['赤1', '赤2', '白'], 90, 56), ...band(100, bx(20, 116, 135, 34, '区別しない\n赤1通り・白1通り', C.red, FILL.red, 11), bx(165, 116, 135, 34, '区別する\n赤2通り・白1通り', C.blue, FILL.blue, 11), lb(160, 180, 'どの玉も同じくらい取りやすくなる', 12, C.gray))),
  },
  {
    note: '❓ 全部で何通りあるの？ 1個目は、3個の玉のどれでもよいので3通りです。それぞれの枝から、2個目に取れる玉を書いていきます。',
    add: fresh(ln(38, 76, 92, 32, C.gray), ln(38, 76, 92, 76, C.gray), ln(38, 76, 92, 120, C.gray), ci(30, 76, 6, undefined, C.gray, FILL.gray), ci(100, 32, 9, '赤1', C.red, FILL.red, 9), ci(100, 76, 9, '赤2', C.red, FILL.red, 9), ci(100, 120, 9, '白', C.gray, '#FFFFFF', 9), lb(100, 8, '1個目', 10, C.gray, 'middle', true), ...band(140, lb(160, 170, '1個目は 3通り', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ 2個目は何通り？ 取り出した玉は戻さないので、袋には玉が2個しか残っていません。だから2個目は、どの枝からも2通りです。',
    add: fresh(...ballTree(false), ...band(140, lb(160, 170, '戻さない → 残りは2個 → 2個目は 2通り', 13, C.blue, 'middle', true))),
  },
  {
    note: '枝を数えると6本です。1個目が3通りで、それぞれに2個目が2通りあるので、3×2＝6通りです。これが分母になります。',
    add: band(140, bx(30, 152, 260, 34, '全部の場合 ＝ 3 × 2 ＝ 6通り', C.green, FILL.green, 15), lb(160, 208, '6本の枝 ＝ 6通り', 12, C.gray)),
  },
  {
    note: '2個とも赤になる枝は、（赤1，赤2）と（赤2，赤1）の2本です。この2本に色をつけました。',
    add: fresh(...ballTree(true), ...band(140, bx(30, 152, 260, 34, '2個とも赤 ＝ 2通り', C.red, FILL.red, 15), lb(160, 208, '色のついた枝を数える', 12, C.gray))),
  },
  {
    note: '❓ なぜ（赤1，赤2）と（赤2，赤1）は別に数えるの？ 1個目に取った玉がちがうので、別の枝だからです。6本の枝はどれも同じくらい起こりやすいので、1本ずつ数えます。だから確率は 2/6＝1/3 です。',
    add: band(140, bx(20, 152, 135, 34, '当てはまる 2', C.red, FILL.red, 13), bx(165, 152, 135, 34, '全部 6', C.gray, FILL.gray, 13), bx(80, 196, 160, 34, '2/6 ＝ 1/3', C.green, FILL.green, 16)),
  },
  {
    note: '❓ もし取り出した玉を戻すなら、どうなるの？ 戻すと袋の中は毎回3個にもどります。2個目も3通りなので、全部で 3×3＝9通り。戻すか戻さないかで、2個目の分母が変わります。',
    add: fresh(bx(20, 24, 135, 30, '戻さない', C.blue, FILL.blue, 13), bx(165, 24, 135, 30, '戻す', C.purple, FILL.purple, 13), ...balls3(['赤1', '赤2', '白'], 46, 90).slice(0, 2), ci(46 + 92, 90, 19, '取出\n済', C.gray, '#FFFFFF', 9), ...balls3(['赤1', '赤2', '白'], 190, 90), lb(80, 128, '2個目は 2通り', 12, C.blue, 'middle', true), lb(238, 128, '2個目は 3通り', 12, C.purple, 'middle', true), ...band(146, bx(20, 158, 135, 30, '3 × 2 ＝ 6', C.blue, FILL.blue, 15), bx(165, 158, 135, 30, '3 × 3 ＝ 9', C.purple, FILL.purple, 15), lb(160, 210, '問題文の「戻す・戻さない」を必ず確かめる', 11, C.gray))),
  },
  {
    note: 'くじでも同じです。5本のくじのうち当たりが2本あります。1本引いて戻さずにもう1本引くとき、2本目を引く時点では、くじは1本へって4本です。だから2本目の分母は4です。',
    add: fresh(...[0, 1, 2, 3, 4].map((i) => bx(30 + i * 52, 40, 46, 40, i < 2 ? '当' : '外', i === 0 ? C.gray : i < 2 ? C.red : C.blue, i === 0 ? '#FFFFFF' : i < 2 ? FILL.red : FILL.blue, 14)), lb(53, 96, '引いた', 11, C.gray, 'middle', true), ...band(116, bx(30, 130, 260, 34, '戻さない → 分母は 5 → 4', C.green, FILL.green, 15), lb(160, 196, '戻す場合は 5のまま', 12, C.gray))),
  },
  {
    note: '❓ 先に引くほうが当たりやすいの？ 当たり1本・はずれ1本を2人が順に引く場合を見ます。1人目が当たる確率は1/2。2人目が当たるのは、1人目がはずれ（1/2）のあとの1通りだけで、これも 1/2 です。何番目でも確率は同じです。',
    add: fresh(lb(60, 10, '1人目', 10, C.gray, 'middle', true), lb(210, 10, '2人目', 10, C.gray, 'middle', true), ci(20, 76, 6, undefined, C.gray, FILL.gray), ln(26, 76, 52, 40, C.gray), ln(26, 76, 52, 112, C.gray), ci(60, 40, 12, '当', C.red, FILL.red, 11), ci(60, 112, 12, '外', C.blue, FILL.blue, 11), ln(72, 40, 190, 40, C.gray), ln(72, 112, 190, 112, C.gray), ci(200, 40, 12, '外', C.blue, FILL.blue, 11), ci(200, 112, 12, '当', C.red, FILL.red, 11), lb(222, 40, '1人目が当たり', 10, C.red, 'start', true), lb(222, 112, '2人目が当たり', 10, C.red, 'start', true), lb(22, 50, '1/2', 10, C.gray), lb(22, 104, '1/2', 10, C.gray), ...band(140, lb(160, 166, '1人目 1/2　2人目 1/2 × 1 ＝ 1/2', 13, C.green, 'middle', true), lb(160, 200, '引く順番で有利・不利はない', 13, C.gray, 'middle', true))),
  },
  {
    note: 'まとめです。同じ色の玉も番号をつけて区別します。戻すなら2個目も同じ分母、戻さないなら分母が1へります。樹形図でていねいに数えれば、まちがいません。',
    add: fresh(bx(20, 30, 280, 30, '同じ色でも1個ずつ区別する', C.red, FILL.red, 14), bx(20, 72, 130, 30, '戻す → 分母そのまま', C.purple, FILL.purple, 12), bx(170, 72, 130, 30, '戻さない → 分母が1へる', C.blue, FILL.blue, 12), bx(20, 114, 280, 30, '樹形図でていねいに数える', C.green, FILL.green, 14), ...band(160, lb(160, 190, '2個とも赤 ＝ 2/6 ＝ 1/3', 14, C.gray, 'middle', true))),
  },
]);

// ═════════════════════════════════════════════
// 場合の数（順列と組み合わせ）
// ═════════════════════════════════════════════
const people = (n: number, x0: number, y: number, gap: number, gray: number[] = [], hi: number[] = []): El[] =>
  Array.from({ length: n }, (_, i) =>
    ci(x0 + i * gap, y, 15, 'ABCDE'[i], gray.includes(i) ? C.gray : hi.includes(i) ? C.red : C.blue, gray.includes(i) ? '#FFFFFF' : hi.includes(i) ? FILL.red : FILL.blue, 13),
  );
const PM = { x: 110, y: 26, s: 20 };
const pairMatrix = (showHalf: boolean): El[] => {
  const out: El[] = [];
  for (let i = 0; i < 5; i++) {
    out.push(lb(PM.x + i * PM.s + PM.s / 2, 18, 'ABCDE'[i], 10, C.blue, 'middle', true));
    out.push(lb(PM.x - 8, PM.y + i * PM.s + PM.s / 2, 'ABCDE'[i], 10, C.red, 'end', true));
    for (let j = 0; j < 5; j++) {
      const diag = i === j;
      const upper = j > i;
      out.push(bx(PM.x + j * PM.s, PM.y + i * PM.s, PM.s, PM.s, diag ? '－' : undefined, diag ? C.gray : showHalf && !upper ? C.gray : C.blue, diag ? FILL.gray : showHalf && !upper ? '#FFFFFF' : FILL.blue, 9));
    }
  }
  out.push(lb(PM.x + 50, 6, '副委員長', 9, C.blue, 'middle', true), lb(PM.x - 30, 10, '委員長', 9, C.red, 'end', true));
  return out;
};
const perm3 = ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA'];
const junretsuKumi: DiagramFigure = show([
  {
    note: '場合の数には「順番が関係する」ものと「関係しない」ものがあります。委員長と副委員長を選ぶのは順番が関係する場合、委員を2人選ぶのは関係しない場合です。',
    add: [bx(20, 30, 130, 56, '委員長と副委員長\n（役がちがう）', C.red, FILL.red, 12), bx(170, 30, 130, 56, '委員を2人\n（役はない）', C.blue, FILL.blue, 12), ...band(110, lb(160, 150, '5人から選ぶ場合を、順に考えます', 13, C.gray, 'middle', true))],
  },
  {
    note: '5人（A〜E）から、委員長と副委員長を選びます。まず委員長です。5人のだれでもなれるので、委員長は5通りです。',
    add: fresh(...people(5, 60, 60, 50), lb(160, 22, '委員長になれるのは', 12, C.gray, 'middle', true), ...band(100, bx(60, 120, 200, 34, '委員長 ＝ 5通り', C.red, FILL.red, 15), lb(160, 186, '5人のだれでもよい', 12, C.gray))),
  },
  {
    note: '❓ 副委員長は何通り？ 委員長になった人は、副委員長を兼ねられません。委員長がAなら、副委員長はB、C、D、Eの4通りです。どの人が委員長でも、副委員長は4通りです。',
    add: fresh(ci(50, 44, 15, 'A', C.red, FILL.red, 13), lb(50, 20, '委員長A', 11, C.red, 'middle', true), ...[1, 2, 3, 4].map((i) => ci(90 + i * 46, 100, 15, 'ABCDE'[i], C.blue, FILL.blue, 13)), ...[1, 2, 3, 4].map((i) => ar(58, 58, 84 + i * 46, 86, C.red)), lb(220, 62, '副委員長は 4人から', 11, C.blue, 'middle', true), ...band(122, bx(30, 134, 260, 34, '5 × 4 ＝ 20通り', C.green, FILL.green, 16), lb(160, 198, '委員長5通り × 副委員長4通り', 12, C.gray))),
  },
  {
    note: '❓ では「委員を2人選ぶ」ときは、20通りでよいの？ 20通りには、（A，B）と（B，A）のように、同じ2人を順番だけ入れかえたものが入っています。委員に役はないので、この2つは同じ顔ぶれです。',
    add: fresh(...people(2, 90, 50, 44), lb(190, 50, '委員長A・副委員長B', 11, C.gray, 'start'), ci(90, 100, 15, 'B', C.blue, FILL.blue, 13), ci(134, 100, 15, 'A', C.blue, FILL.blue, 13), lb(160, 20, '20通りの中には…', 12, C.gray, 'middle', true), lb(190, 100, '委員長B・副委員長A', 11, C.gray, 'start'), ...band(126, bx(30, 140, 260, 34, '同じ顔ぶれが 2回ずつ数えられている', C.red, FILL.red, 13), lb(160, 200, '役がなければ、AとBの2人組は1つ', 12, C.gray))),
  },
  {
    note: '5×5 の表で20通りを見ます（同じ人どうしは組めないので－）。表の右上と左下は、順番だけ入れかえたペアです。だから20通りは、ちょうど2つずつ重なっています。',
    add: fresh(...pairMatrix(false), ...band(136, lb(160, 166, '20マス ＝ 同じ顔ぶれが2マスずつ', 13, C.blue, 'middle', true))),
  },
  {
    note: '❓ だからどうするの？ 2回ずつ数えたぶん、2でわります。右上の青いマスだけを数えれば、重なりがなくなります。20÷2＝10通りです。',
    add: fresh(...pairMatrix(true), ...band(136, bx(30, 148, 260, 34, '5 × 4 ÷ 2 ＝ 10通り', C.green, FILL.green, 16), lb(160, 200, '重なった分を、わって消す', 12, C.gray))),
  },
  {
    note: '❓ 3人選ぶときは、なぜ6でわるの？ A、B、Cの3人を並べる並べ方は 3×2×1＝6通りあります。この6通りが、すべて同じ顔ぶれです。だから6回ずつ重なっているので、6でわります。',
    add: fresh(lb(160, 12, 'A・B・Cを並べる並べ方', 12, C.gray, 'middle', true), ...perm3.map((t, i) => bx(30 + (i % 3) * 90, 28 + Math.floor(i / 3) * 44, 80, 36, t, C.blue, FILL.blue, 15)), lb(160, 124, '6通りとも、顔ぶれは A・B・C', 12, C.blue, 'middle', true), ...band(140, bx(30, 152, 260, 34, '3 × 2 × 1 ＝ 6（重なる回数）', C.purple, FILL.purple, 14), lb(160, 208, '3人選ぶなら、6でわる', 12, C.gray))),
  },
  {
    note: '4人から3人を選ぶ選び方を出します。まず順番をつけて選ぶと 4×3×2＝24通り。3人ずつの重なりが6回あるので、6でわって 24÷6＝4通りです。',
    add: fresh(...people(4, 70, 50, 60).map((e) => e), lb(160, 20, '4人（A〜D）から3人', 12, C.gray, 'middle', true), ...band(96, bx(20, 108, 135, 30, '順番あり 4×3×2 ＝24', C.red, FILL.red, 12), bx(165, 108, 135, 30, '重なり 3×2×1 ＝6', C.purple, FILL.purple, 12), bx(60, 152, 200, 34, '24 ÷ 6 ＝ 4通り', C.green, FILL.green, 16))),
  },
  {
    note: '❓ 4通りになるのは、たしかめられるの？ 3人を選ぶことは、選ばない1人を決めることと同じです。4人のうち選ばない人が4通りあるので、答えは4通りです。同じ答えになりました。',
    add: fresh(...[0, 1, 2, 3].flatMap((k) => Array.from({ length: 4 }, (_, i) => ci(52 + i * 20, 32 + k * 28, 8, 'ABCD'[i], i === k ? C.gray : C.blue, i === k ? '#FFFFFF' : FILL.blue, 9))), ...[0, 1, 2, 3].map((k) => lb(150, 32 + k * 28, `${'ABCD'[k]} を選ばない`, 11, C.gray, 'start', true)), ...band(140, bx(30, 152, 260, 34, '選ばない1人を決める ＝ 4通り', C.green, FILL.green, 14), lb(160, 208, '24÷6 ＝ 4 と同じ', 12, C.gray))),
  },
  {
    note: 'まとめです。「並べる・役をつける」は順列、「選ぶ・組を作る」は組み合わせです。迷ったら、2人を入れかえて別ものになるか試します。組み合わせは、順列を並べ方の数（2人なら2、3人なら6）でわります。',
    add: fresh(bx(20, 30, 130, 50, '順列\n入れかえると別もの', C.red, FILL.red, 12), bx(170, 30, 130, 50, '組み合わせ\n入れかえても同じ', C.blue, FILL.blue, 12), ...band(100, bx(20, 116, 130, 30, '5×4 ＝ 20', C.red, FILL.red, 15), bx(170, 116, 130, 30, '5×4÷2 ＝ 10', C.blue, FILL.blue, 15), lb(160, 180, '2個選ぶなら2で、3個選ぶなら6でわる', 12, C.gray, 'middle', true))),
  },
]);

// ═════════════════════════════════════════════
// カード・数字を作る問題
// ═════════════════════════════════════════════
const slots = (texts: string[], y: number, hi: number[] = [], fills?: string[]): El[] => {
  const names = ['百の位', '十の位', '一の位'];
  const out: El[] = [];
  texts.forEach((t, i) => {
    out.push(bx(50 + i * 80, y, 70, 40, t, hi.includes(i) ? C.red : C.blue, hi.includes(i) ? FILL.red : (fills?.[i] ?? FILL.blue), 16));
    out.push(lb(85 + i * 80, y - 10, names[i], 10, C.gray, 'middle', true));
  });
  return out;
};
const cardNumber: DiagramFigure = show([
  {
    note: '1、2、3のカードを1枚ずつ使って、3けたの整数を作ります。偶数は何個できるでしょうか。',
    add: [...[1, 2, 3].map((k) => bx(80 + (k - 1) * 60, 30, 50, 60, String(k), C.blue, FILL.blue, 24)), ...band(110, lb(160, 150, '3けたの偶数は何個？', 15, C.blue, 'middle', true))],
  },
  {
    note: '❓ なぜ一の位から決めるの？ ある数が偶数かどうかは、一の位だけで決まるからです。条件がついている位を先に決めると、あとは自由に並べるだけになります。',
    add: fresh(...slots(['', '', ''], 50, [2]), lb(160, 120, '偶数かどうかは 一の位 だけで決まる', 13, C.red, 'middle', true), ...band(136, lb(160, 170, '条件のきつい位から先に決める', 14, C.blue, 'middle', true))),
  },
  {
    note: '1、2、3の中の偶数は2だけなので、一の位は2に決まります。残りは1と3の2枚で、これを百の位と十の位に並べます。',
    add: fresh(...slots(['', '', '2'], 50, [2]), ...[1, 3].map((k, i) => bx(100 + i * 70, 116, 50, 34, String(k), C.blue, FILL.blue, 18)), lb(160, 104, '残りのカード', 11, C.gray, 'middle', true), ...band(160, lb(160, 190, '一の位は 2 に決まる', 13, C.red, 'middle', true))),
  },
  {
    note: '残り2枚の並べ方は、百の位が1なら十の位が3、百の位が3なら十の位が1の2通りです。できる偶数は 132 と 312 の2個です。',
    add: fresh(...slots(['1', '3', '2'], 30, [2]), ...slots(['3', '1', '2'], 100, [2]), ...band(160, bx(60, 172, 200, 34, '偶数は 2個（132，312）', C.green, FILL.green, 14))),
  },
  {
    note: '❓ もし百の位から決めたらどうなるの？ 百の位が2のときは、偶数のカードが残らず0通りです。百の位が1か3のときは、一の位に2が使えて1通りずつです。場合によって数がちがい、数え分けが必要になります。',
    add: fresh(...[['百の位 1', '一の位に2 → 1通り', C.blue, FILL.blue], ['百の位 2', '偶数が残らない → 0通り', C.red, FILL.red], ['百の位 3', '一の位に2 → 1通り', C.blue, FILL.blue]].map(([a, b, c, f], i) => [bx(20, 24 + i * 40, 90, 32, a, c, f, 12), ar(112, 40 + i * 40, 140, 40 + i * 40, C.gray), bx(144, 24 + i * 40, 160, 32, b, c, f, 12)]).flat(), ...band(150, lb(160, 175, '数え分けが必要 → 面倒で、まちがえやすい', 13, C.red, 'middle', true), lb(160, 205, '先に条件のある位を決めれば分けなくてよい', 12, C.gray))),
  },
  {
    note: '0をふくむ場合を見ます。0、1、2のカードで3けたの整数を作ります。3枚を並べる並べ方は全部で6通りです。',
    add: fresh(...['012', '021', '102', '120', '201', '210'].map((t, i) => bx(30 + (i % 3) * 90, 28 + Math.floor(i / 3) * 44, 80, 36, t, C.blue, FILL.blue, 15)), ...band(130, lb(160, 160, '3枚の並べ方は 3×2×1 ＝ 6通り', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ なぜ012や021は数えないの？ 012は「12」という2けたの数で、3けたの整数ではないからです。0は最高位に置けません。百の位が0の2通りを除くと、6−2＝4個です。',
    add: fresh(...['012', '021', '102', '120', '201', '210'].map((t, i) => bx(30 + (i % 3) * 90, 28 + Math.floor(i / 3) * 44, 80, 36, t, i < 2 ? C.red : C.blue, i < 2 ? FILL.red : FILL.blue, 15)), ...band(130, lb(160, 152, '012 ＝ 12（2けた）　021 ＝ 21（2けた）', 12, C.red, 'middle', true), bx(60, 168, 200, 34, '6 − 2 ＝ 4個', C.green, FILL.green, 16))),
  },
  {
    note: '別の数え方もあります。最高位が0でない位から決めます。百の位は1か2の2通り。十の位は残り2枚のどれでもよいので2通り。一の位は最後の1枚で1通り。2×2×1＝4個で、同じ答えになります。',
    add: fresh(...slots(['', '', ''], 50), lb(85, 110, '2通り', 13, C.red, 'middle', true), lb(165, 110, '2通り', 13, C.blue, 'middle', true), lb(245, 110, '1通り', 13, C.green, 'middle', true), lb(85, 126, '（0以外）', 10, C.gray), ...band(140, bx(40, 152, 240, 34, '2 × 2 × 1 ＝ 4個', C.green, FILL.green, 16), lb(160, 208, '0は最高位に置けないので、百の位は0以外', 11, C.gray))),
  },
  {
    note: '❓ 「3の倍数」は、なぜ各位の数の和で決まるの？ 10や100は、3でわると1あまります。だから百の位の数、十の位の数の分だけ、あまりが1ずつ残ります。たとえば 123＝99＋18＋(1＋2＋3)。99と18は3の倍数なので、残りの 1＋2＋3＝6 が3の倍数かどうかで決まります。',
    add: fresh(bx(20, 24, 280, 30, '123 ＝ 100 ＋ 20 ＋ 3', C.gray, FILL.gray, 15), bx(20, 66, 280, 30, '＝ (99 ＋ 1) ＋ (18 ＋ 2) ＋ 3', C.blue, FILL.blue, 14), bx(20, 108, 280, 30, '＝ 99 ＋ 18 ＋ (1 ＋ 2 ＋ 3)', C.purple, FILL.purple, 14), ...band(146, lb(160, 166, '99 と 18 は3の倍数 → 残りの和で決まる', 12, C.blue, 'middle', true), bx(40, 182, 240, 34, '1 ＋ 2 ＋ 3 ＝ 6（3の倍数）', C.green, FILL.green, 15))),
  },
  {
    note: 'まとめです。条件のきつい位から先に決めます。偶数なら一の位、3の倍数なら各位の和を使います。0をふくむときは、最高位に0が来る場合を必ず引きます。',
    add: fresh(bx(20, 24, 280, 30, '条件のきつい位から先に決める', C.blue, FILL.blue, 14), bx(20, 62, 130, 30, '偶数 → 一の位', C.red, FILL.red, 13), bx(170, 62, 130, 30, '3の倍数 → 各位の和', C.purple, FILL.purple, 12), bx(20, 100, 280, 30, '0は最高位に置けない → その分を引く', C.green, FILL.green, 13), ...band(148, lb(160, 180, '残りの位は順に埋めるだけ', 13, C.gray, 'middle', true))),
  },
]);

// ═════════════════════════════════════════════
// 度数分布表とヒストグラム
// ═════════════════════════════════════════════
const FREQ = [5, 8, 12, 10, 5];
const HG = { x: 40, w: 48, base: 118, k: 7 };
const histo = (hi: number[] = [], color: string = C.blue, fill: string = FILL.blue): El[] => {
  const out: El[] = [];
  FREQ.forEach((n, i) => {
    const on = hi.includes(i);
    out.push(bx(HG.x + i * HG.w, HG.base - n * HG.k, HG.w, n * HG.k, String(n), on ? color : C.blue, on ? fill : FILL.blue, 12));
  });
  for (let i = 0; i <= 5; i++) out.push(lb(HG.x + i * HG.w, HG.base + 9, String(i * 10), 10, C.gray, 'middle', true));
  out.push(lb(HG.x + 120, 8, 'テストの点数（40人）', 10, C.gray, 'middle', true));
  return out;
};
const dosuu: DiagramFigure = show([
  {
    note: '40人のテストの点数を、10点ごとの「階級」に分けて人数（度数）を数え、棒グラフにしたものがヒストグラムです。度数は 5、8、12、10、5 人です。',
    add: [...histo(), ...band(136, lb(160, 170, '階級 ＝ 10点ごとの区切り　度数 ＝ 人数', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓ 「20以上30未満」とは、どんな区切りなの？ 20点は入り、30点は入りません。30点は次の階級に入ります。こうすると、どの点数も必ず1つの階級だけに入り、重なりも抜けもありません。',
    add: [...histo([2], C.red, FILL.red), ...band(136, bx(30, 148, 260, 30, '20点 ○入る　30点 ×入らない（次の階級へ）', C.red, FILL.red, 12), lb(160, 202, 'どの点数もちょうど1つの階級に入る', 12, C.gray))],
  },
  {
    note: '❓ 階級値とは何？ 階級の中の人の点数は、まとめてしまうと1人ずつ分かりません。そこで、階級を代表する値として、階級のまん中の値を使います。20以上30未満なら (20＋30)÷2＝25 です。',
    add: fresh(...histo([2], C.red, FILL.red), ci(HG.x + 2.5 * HG.w, HG.base - 12 * HG.k - 12, 5, undefined, C.red, C.red), ...band(136, bx(30, 148, 260, 34, '階級値 ＝ (20 ＋ 30) ÷ 2 ＝ 25', C.red, FILL.red, 15), lb(160, 204, '階級のまん中の値', 12, C.gray))),
  },
  {
    note: '❓ 相対度数とは何？ 度数（人数）が全体の何割かを表す割合です。30以上40未満の階級は10人で、全体は40人なので、10÷40＝0.25。全体の4分の1です。',
    add: fresh(...histo([3], C.purple, FILL.purple), ...band(136, bx(20, 148, 135, 30, '度数 10人', C.purple, FILL.purple, 13), bx(165, 148, 135, 30, '全体 40人', C.gray, FILL.gray, 13), bx(60, 188, 200, 34, '10 ÷ 40 ＝ 0.25', C.green, FILL.green, 16))),
  },
  {
    note: '5つの階級それぞれの相対度数を出すと、5÷40＝0.125、8÷40＝0.2、12÷40＝0.3、10÷40＝0.25、5÷40＝0.125 です。',
    add: fresh(...histo(), ...['0.125', '0.2', '0.3', '0.25', '0.125'].map((t, i) => bx(HG.x + i * HG.w, 136, HG.w, 26, t, C.purple, FILL.purple, 11)), lb(20, 149, '相対', 9, C.purple, 'middle', true), ...band(172, lb(160, 200, '度数を 全体の40人 でわった割合', 13, C.purple, 'middle', true))),
  },
  {
    note: '❓ なぜ相対度数を全部足すと1になるの？ 全体の40人を、もれなく5つの階級に分けているからです。全体を1として、それを5つに分けた割合なので、合計は 0.125＋0.2＋0.3＋0.25＋0.125＝1 です。',
    add: fresh(...[0.125, 0.2, 0.3, 0.25, 0.125].reduce<{ x: number; els: El[] }>((acc, v, i) => {
      const w = v * 280;
      acc.els.push(bx(20 + acc.x, 50, w, 40, String(v), C.purple, i % 2 ? FILL.purple : FILL.blue, 11));
      acc.x += w;
      return acc;
    }, { x: 0, els: [] }).els, lb(160, 30, '全体 ＝ 1', 12, C.gray, 'middle', true), ...band(110, bx(30, 126, 260, 34, '合計 ＝ 1（ならなければ計算ミス）', C.green, FILL.green, 14), lb(160, 200, '確かめ算に使える', 12, C.gray))),
  },
  {
    note: '❓ 人数がちがう集団を比べるとき、なぜ相対度数を使うの？ 10人中5人と、40人中10人を比べます。人数では後者が多いですが、割合にすると 0.5 と 0.25 で、前者のほうが高い集団です。人数のちがいを消して比べるために、相対度数を使います。',
    add: fresh(bx(20, 30, 130, 34, '10人中 5人', C.blue, FILL.blue, 13), bx(170, 30, 130, 34, '40人中 10人', C.red, FILL.red, 13), lb(85, 82, '人数では 5', 12, C.blue, 'middle', true), lb(235, 82, '人数では 10', 12, C.red, 'middle', true), ...band(100, bx(20, 116, 130, 34, '5÷10 ＝ 0.5', C.blue, FILL.blue, 15), bx(170, 116, 130, 34, '10÷40 ＝ 0.25', C.red, FILL.red, 15), lb(160, 180, '割合で比べると、左のほうが高い', 13, C.green, 'middle', true))),
  },
  {
    note: '累積度数は、その階級までの度数を足していったものです。5、5＋8＝13、13＋12＝25、25＋10＝35、35＋5＝40 です。',
    add: fresh(...histo(), ...[5, 13, 25, 35, 40].map((t, i) => bx(HG.x + i * HG.w, 136, HG.w, 26, String(t), C.green, FILL.green, 12)), lb(20, 149, '累積', 9, C.green, 'middle', true), ...band(172, lb(160, 200, 'その階級までの人数の合計', 13, C.green, 'middle', true))),
  },
  {
    note: '❓ なぜ最後の累積度数は全体の40になるの？ 最後の階級までには、すべての階級の人数が足されているからです。40にならなければ、足しまちがいか数えまちがいです。',
    add: fresh(...histo(), ...[5, 13, 25, 35, 40].map((t, i) => bx(HG.x + i * HG.w, 136, HG.w, 26, String(t), i === 4 ? C.red : C.green, i === 4 ? FILL.red : FILL.green, 12)), ...band(172, lb(160, 200, '最後 ＝ 全員 ＝ 40人', 14, C.red, 'middle', true))),
  },
  {
    note: 'まとめです。階級値は階級のまん中の値、相対度数は 度数÷全体。相対度数の合計は1です。人数のちがう集団は相対度数で比べます。',
    add: fresh(bx(20, 24, 280, 30, '階級値 ＝ (下の値 ＋ 上の値) ÷ 2', C.red, FILL.red, 14), bx(20, 62, 280, 30, '相対度数 ＝ 度数 ÷ 全体（合計は1）', C.purple, FILL.purple, 13), bx(20, 100, 280, 30, '累積度数 ＝ その階級までの合計', C.green, FILL.green, 13), ...band(148, lb(160, 180, '人数がちがう集団は相対度数で比べる', 13, C.gray, 'middle', true))),
  },
]);

// ═════════════════════════════════════════════
// 代表値（平均値・中央値・最頻値）
// ═════════════════════════════════════════════
const NL = (v: number) => 20 + v * 2.8;
const dataRow = (vals: number[], y: number, hiIdx: number[] = [], color = C.red, fill = FILL.red): El[] =>
  vals.map((v, i) => bx(20 + i * 60, y, 52, 36, String(v), hiIdx.includes(i) ? color : C.blue, hiIdx.includes(i) ? fill : FILL.blue, 15));
const daihyochi: DiagramFigure = show([
  {
    note: '5人の点数 3、5、5、8、100 をもとに、3つの代表値を調べます。代表値とは、データ全体を1つの数で言い表したものです。',
    add: [...dataRow([3, 5, 5, 8, 100], 40), ...band(100, bx(20, 116, 90, 34, '平均値', C.blue, FILL.blue, 13), bx(115, 116, 90, 34, '中央値', C.purple, FILL.purple, 13), bx(210, 116, 90, 34, '最頻値', C.green, FILL.green, 13), lb(160, 180, '同じデータでも、3つの言い表し方がある', 12, C.gray, 'middle', true))],
  },
  {
    note: '❓ 平均値は、なぜ「合計÷個数」なの？ 全員の点数をいったん集めて、5人に同じ数ずつ配りなおしたときの1人分だからです。合計は 3＋5＋5＋8＋100＝121、5人なので 121÷5＝24.2 です。',
    add: fresh(...dataRow([3, 5, 5, 8, 100], 30), ...band(84, bx(20, 96, 130, 30, '合計 ＝ 121', C.gray, FILL.gray, 13), bx(170, 96, 130, 30, '5人で等分', C.gray, FILL.gray, 13), bx(50, 146, 220, 36, '121 ÷ 5 ＝ 24.2', C.green, FILL.green, 16), lb(160, 208, '1人分に配りなおした点数', 12, C.gray))),
  },
  {
    note: 'データを数直線にのせて、平均値24.2をしるしました。5人のうち4人が8点以下なのに、平均値はそれよりずっと右にあります。',
    add: fresh(ln(20, 90, 300, 90, C.ink, false, 2), ...[0, 20, 40, 60, 80, 100].flatMap((v) => [ln(NL(v), 86, NL(v), 94, C.ink), lb(NL(v), 104, String(v), 9, C.gray, 'middle', true)]), ...[3, 5, 5, 8, 100].map((v, i) => ci(NL(v), 76 - (v === 5 && i === 2 ? 14 : 0), 5, undefined, C.blue, FILL.blue)), lb(NL(24.2), 44, '平均 24.2', 11, C.red, 'middle', true), ar(NL(24.2), 52, NL(24.2), 84, C.red), ...band(124, lb(160, 160, '4人が8点以下なのに、平均は 24.2', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜ平均値は、100に引っぱられるの？ 平均値は、数直線の上でデータがつり合う点（シーソーの支点）だからです。遠くにある100が、平均値を右へ大きく引っぱっています。',
    add: fresh(ln(20, 80, 300, 80, C.ink, false, 2), ...[3, 5, 5, 8, 100].map((v, i) => ci(NL(v), 66 - (v === 5 && i === 2 ? 14 : 0), 5, undefined, C.blue, FILL.blue)), pgTri(NL(24.2), 80), lb(NL(24.2), 110, '支点 ＝ 平均 24.2', 11, C.red, 'middle', true), ...band(124, lb(160, 152, '遠くのデータほど、平均を引っぱる', 14, C.red, 'middle', true), lb(160, 186, '平均 ＝ つり合う点', 12, C.gray))),
  },
  {
    note: '中央値は、データを小さい順に並べたときのまん中の値です。3、5、5、8、100 は5個なので、3番目の5が中央値です。',
    add: fresh(...dataRow([3, 5, 5, 8, 100], 40, [2]), lb(46, 88, '小', 11, C.gray), lb(274, 88, '大', 11, C.gray), ar(40, 100, 130, 100, C.gray), ...band(116, bx(60, 130, 200, 34, '中央値 ＝ 5', C.red, FILL.red, 16), lb(160, 196, '2個・[5]・2個のまん中', 12, C.gray))),
  },
  {
    note: '❓ なぜ中央値は、極端な値の影響を受けにくいの？ 中央値は「順番」だけで決まり、値の大きさは使わないからです。100が1000になっても、並び順は変わらないので、中央値は5のままです。',
    add: fresh(...dataRow([3, 5, 5, 8, 1000], 40, [2]).map((e) => e), ...band(90, bx(20, 104, 130, 34, '中央値 ＝ 5（変わらず）', C.red, FILL.red, 12), bx(170, 104, 130, 34, '平均 ＝ 204.2', C.blue, FILL.blue, 13), lb(160, 166, '1021 ÷ 5 ＝ 204.2', 12, C.gray), lb(160, 198, '平均は大きく動き、中央値は動かない', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ データの個数が偶数のときは、どうするの？ 2、4、6、10 の4個には、まん中がありません。まん中は4と6の間です。そこで、まん中の2つの平均を中央値にします。(4＋6)÷2＝5 です。',
    add: fresh(...[2, 4, 6, 10].map((v, i) => bx(50 + i * 60, 40, 52, 36, String(v), i === 1 || i === 2 ? C.red : C.blue, i === 1 || i === 2 ? FILL.red : FILL.blue, 15)), lb(160, 96, '▲ まん中は 4 と 6 の間', 12, C.red, 'middle', true), ...band(114, bx(40, 128, 240, 34, '中央値 ＝ (4 ＋ 6) ÷ 2 ＝ 5', C.green, FILL.green, 15), lb(160, 196, 'まん中が2つなら、その平均', 12, C.gray))),
  },
  {
    note: '最頻値は、いちばん多く出てくる値です。3、5、5、8、100 では、5が2回で最も多いので、最頻値は5です。',
    add: fresh(...dataRow([3, 5, 5, 8, 100], 40, [1, 2]), ...band(100, bx(60, 116, 200, 34, '最頻値 ＝ 5（2回）', C.red, FILL.red, 16), lb(160, 184, '出てくる回数がいちばん多い値', 12, C.gray))),
  },
  {
    note: '❓ 度数分布表では、最頻値をどう答えるの？ 階級にまとめられていて、もとの1つ1つの値は分かりません。そこで、度数がいちばん大きい階級の階級値を答えます。「20以上25未満」なら (20＋25)÷2＝22.5 です。',
    add: fresh(bx(20, 30, 90, 34, '20以上25未満', C.red, FILL.red, 11), bx(20, 70, 90, 34, '25以上30未満', C.gray, FILL.gray, 11), lb(190, 47, '度数 最大', 12, C.red, 'middle', true), ar(112, 47, 150, 47, C.red), ...band(112, bx(30, 126, 260, 34, '最頻値 ＝ 階級値 ＝ 22.5', C.green, FILL.green, 15), lb(160, 196, '階級の範囲ではなく、まん中の値を答える', 12, C.gray))),
  },
  {
    note: 'まとめです。極端に大きい値があるときは、平均値はそれに引っぱられて実感からはなれます。そのときは中央値のほうが、ふつうの値を表します。偶数個の中央値はまん中2つの平均です。',
    add: fresh(bx(20, 24, 280, 30, '平均値 ＝ 合計 ÷ 個数（極端な値に引っぱられる）', C.blue, FILL.blue, 12), bx(20, 62, 280, 30, '中央値 ＝ 順番のまん中（極端な値に強い）', C.purple, FILL.purple, 12), bx(20, 100, 280, 30, '最頻値 ＝ いちばん多い値', C.green, FILL.green, 13), ...band(148, lb(160, 180, '例：3，5，5，8，100 → 中央値5・平均24.2', 12, C.gray, 'middle', true))),
  },
]);
function pgTri(x: number, y: number): El {
  return { t: 'poly', pts: [[x, y + 2], [x - 8, y + 16], [x + 8, y + 16]], color: C.red, fill: FILL.red };
}

// ═════════════════════════════════════════════
// 四分位数と箱ひげ図
// ═════════════════════════════════════════════
const QD = [6, 10, 14, 18, 22, 26, 30, 38];
const qBox = (i: number, color: string, fill: string, y = 40): El => bx(14 + i * 37.5, y, 34, 36, String(QD[i]), color, fill, 14);
const qRow = (hi: Record<number, [string, string]> = {}, y = 40): El[] => QD.map((_, i) => qBox(i, hi[i]?.[0] ?? C.blue, hi[i]?.[1] ?? FILL.blue, y));
const BX = (v: number) => 20 + v * 7.2;
const boxplot = (y: number, q1: number, med: number, q3: number, mn: number, mx: number, color: string, fill: string): El[] => [
  ln(BX(mn), y, BX(mx), y, color, false, 2),
  ln(BX(mn), y - 8, BX(mn), y + 8, color, false, 2),
  ln(BX(mx), y - 8, BX(mx), y + 8, color, false, 2),
  bx(BX(q1), y - 18, BX(q3) - BX(q1), 36, undefined, color, fill),
  ln(BX(med), y - 18, BX(med), y + 18, color, false, 3),
];
const shihun: DiagramFigure = show([
  {
    note: '8人のデータを小さい順に並べました。6、10、14、18、22、26、30、38 です。これを4つに分ける3つの値が、四分位数です。',
    add: [...qRow(), ...band(100, lb(160, 140, '小さい順に並べる ・ 全部で8個', 14, C.blue, 'middle', true))],
  },
  {
    note: '❓ まず、第2四分位数はどう決めるの？ データを前半4個と後半4個に2等分する境目の値です。18と22の間なので、平均をとって 20。これは中央値と同じです。',
    add: [ln(162, 34, 162, 84, C.red, true, 2), ...band(100, bx(30, 116, 260, 34, '第2四分位数 ＝ (18＋22)÷2 ＝ 20 ＝ 中央値', C.red, FILL.red, 13), lb(160, 182, '前半4個 | 後半4個 の境目', 12, C.gray))],
  },
  {
    note: '❓ 第1四分位数は？ 前半の4個（6、10、14、18）だけを見て、そのまん中を求めます。10と14の間なので (10＋14)÷2＝12。前半をさらに半分にする値です。',
    add: fresh(...qRow({ 0: [C.green, FILL.green], 1: [C.green, FILL.green], 2: [C.green, FILL.green], 3: [C.green, FILL.green] }), ln(162, 34, 162, 84, C.gray, true, 1.5), ln(87, 34, 87, 84, C.green, true, 2), ...band(100, bx(30, 116, 260, 34, '第1四分位数 ＝ (10＋14)÷2 ＝ 12', C.green, FILL.green, 14), lb(160, 182, '前半のまん中', 12, C.gray))),
  },
  {
    note: '第3四分位数は、後半の4個（22、26、30、38）のまん中です。26と30の間なので (26＋30)÷2＝28 です。',
    add: fresh(...qRow({ 4: [C.purple, FILL.purple], 5: [C.purple, FILL.purple], 6: [C.purple, FILL.purple], 7: [C.purple, FILL.purple] }), ln(238, 34, 238, 84, C.purple, true, 2), ...band(100, bx(30, 116, 260, 34, '第3四分位数 ＝ (26＋30)÷2 ＝ 28', C.purple, FILL.purple, 14), lb(160, 182, '後半のまん中', 12, C.gray))),
  },
  {
    note: '四分位範囲は、第3四分位数から第1四分位数をひいた値です。28−12＝16 です。データの真ん中あたりの広がりを表します。',
    add: fresh(...qRow(), ln(87, 34, 87, 84, C.green, true, 2), ln(238, 34, 238, 84, C.purple, true, 2), ar(90, 96, 235, 96, C.red), lb(160, 110, '四分位範囲', 12, C.red, 'middle', true), ...band(124, bx(40, 138, 240, 34, '28 − 12 ＝ 16', C.green, FILL.green, 16), lb(160, 198, '第3四分位数 − 第1四分位数', 12, C.gray))),
  },
  {
    note: '❓ なぜ、第1と第3の間に「全体の約半分」が入るの？ 四分位数はデータを4等分する値なので、4つの区間のうち真ん中の2つ分が、第1から第3の間です。4個（14、18、22、26）で、全体8個の半分です。',
    add: fresh(...[0, 1, 2, 3].map((i) => bx(20 + i * 70, 40, 70, 40, `${i + 1}つ目`, i === 1 || i === 2 ? C.red : C.gray, i === 1 || i === 2 ? FILL.red : FILL.gray, 13)), lb(20, 96, '最小', 10, C.gray, 'middle'), lb(90, 96, '第1', 10, C.green, 'middle', true), lb(160, 96, '第2', 10, C.gray, 'middle', true), lb(230, 96, '第3', 10, C.purple, 'middle', true), lb(300, 96, '最大', 10, C.gray, 'middle'), ...band(110, lb(160, 140, '4等分した区間のうち、真ん中の2つ分 ＝ 箱', 13, C.red, 'middle', true), lb(160, 176, '全体の 2/4 ＝ 約半分', 13, C.gray, 'middle', true))),
  },
  {
    note: 'これを図にしたのが箱ひげ図です。第1四分位数（12）から第3四分位数（28）までを箱にして、中に中央値（20）の線を引きます。箱から最小値（6）と最大値（38）まで、線（ひげ）をのばします。',
    add: fresh(...boxplot(64, 12, 20, 28, 6, 38, C.blue, FILL.blue), ...[0, 10, 20, 30, 40].flatMap((v) => [ln(BX(v), 96, BX(v), 102, C.ink), lb(BX(v), 110, String(v), 9, C.gray, 'middle', true)]), ln(BX(0), 96, BX(40), 96, C.ink), ...band(124, lb(160, 150, '箱 ＝ 第1〜第3　線 ＝ 中央値　ひげ ＝ 最小・最大', 12, C.blue, 'middle', true))),
  },
  {
    note: '❓ なぜ「5つの数」で表すの？ 最小値、第1四分位数、中央値、第3四分位数、最大値の5つを知れば、データの位置と広がりのだいたいが分かるからです。6、12、20、28、38 の5つです。',
    add: fresh(...boxplot(50, 12, 20, 28, 6, 38, C.blue, FILL.blue), ...[[6, '最小\n6'], [12, '第1\n12'], [20, '中央値\n20'], [28, '第3\n28'], [38, '最大\n38']].map(([v, t]) => lb(BX(v as number), 90, t as string, 10, C.red, 'middle', true)), ...band(116, lb(160, 148, '5つの数で、位置と広がりが分かる', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ 箱が短いと、どんなデータなの？ 箱の長さは四分位範囲です。短いということは、真ん中の約半分のデータがせまい範囲に集まっているということです。上の箱はまとまり、下の箱はばらついています。',
    add: fresh(...boxplot(36, 16, 20, 24, 8, 32, C.green, FILL.green), ...boxplot(96, 8, 20, 32, 2, 38, C.red, FILL.red), lb(160, 66, '箱が短い ： 集まっている', 11, C.green, 'middle', true), lb(160, 126, '箱が長い ： ばらついている', 11, C.red, 'middle', true), ...band(142, lb(160, 175, '箱の長さ ＝ ばらつきの目安', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ なぜ、範囲（最大−最小）ではなく四分位範囲を使うの？ 範囲は両はしの2つの値だけで決まるので、極端な値に弱いのです。38が100に変わると、範囲は32から94になりますが、四分位範囲は16のままです。',
    add: fresh(bx(20, 24, 135, 34, '範囲 38−6 ＝ 32', C.gray, FILL.gray, 12), bx(165, 24, 135, 34, '範囲 100−6 ＝ 94', C.red, FILL.red, 12), bx(20, 70, 135, 34, '四分位範囲 16', C.blue, FILL.blue, 12), bx(165, 70, 135, 34, '四分位範囲 16', C.blue, FILL.blue, 12), lb(88, 122, '最大 38 のとき', 11, C.gray), lb(232, 122, '最大が 100 のとき', 11, C.red, 'middle', true), ...band(136, lb(160, 170, '四分位範囲は極端な値に強い', 14, C.blue, 'middle', true), lb(160, 202, '第3が28のまま（後半は22，26，30，100）', 11, C.gray))),
  },
  {
    note: 'まとめです。第2四分位数は中央値、四分位範囲は第3−第1。箱の中には全体の約半分が入り、箱が短いほどまん中に集まったデータです。',
    add: fresh(bx(20, 24, 280, 30, '第2四分位数 ＝ 中央値', C.red, FILL.red, 14), bx(20, 62, 280, 30, '四分位範囲 ＝ 第3 − 第1（例：28 − 12 ＝ 16）', C.green, FILL.green, 12), bx(20, 100, 280, 30, '箱の中に約半分・箱が短い ＝ 集まっている', C.blue, FILL.blue, 12), ...band(148, lb(160, 180, '箱ひげ図 ＝ 最小・第1・中央・第3・最大', 12, C.gray, 'middle', true))),
  },
]);

// ═════════════════════════════════════════════
// 標本調査
// ═════════════════════════════════════════════
const bulbs = (): El[] => [0, 1, 2, 3, 4].map((i) => ci(50 + i * 55, 60, 16, '電球', C.blue, FILL.yellow, 9));
const hyouhon: DiagramFigure = show([
  {
    note: '調べ方には2つあります。全部を調べる「全数調査」と、一部だけを調べて全体を推定する「標本調査」です。',
    add: [bx(20, 30, 130, 56, '全数調査\nすべて調べる', C.blue, FILL.blue, 13), bx(170, 30, 130, 56, '標本調査\n一部を調べて推定', C.purple, FILL.purple, 13), ...band(110, lb(160, 150, 'どちらを使うかは、調べる目的で決まる', 13, C.gray, 'middle', true))],
  },
  {
    note: '❓ なぜ、全部を調べないことがあるの？ たとえば電球の寿命は、切れるまで点灯させて調べます。全部を調べたら、売る電球が1つも残りません。',
    add: fresh(...bulbs(), ...[0, 1, 2, 3, 4].map((i) => ln(38 + i * 55, 44, 62 + i * 55, 76, C.red, false, 2.5)), lb(160, 20, '切れるまで点灯させる', 12, C.red, 'middle', true), ...band(100, lb(160, 130, '全部調べる → 全部使えなくなる', 14, C.red, 'middle', true), lb(160, 166, '調べると壊れるものは 標本調査', 13, C.blue, 'middle', true))),
  },
  {
    note: '全数調査と標本調査の例です。国勢調査や学校の健康診断は全数調査。視聴率、世論調査、製品の抜き取り検査は標本調査です。標本調査を使うのは、調べると壊れる、費用や時間がかかりすぎる、というときです。',
    add: fresh(bx(20, 24, 130, 30, '全数調査', C.blue, FILL.blue, 14), bx(170, 24, 130, 30, '標本調査', C.purple, FILL.purple, 14), lb(85, 80, '国勢調査\n学校の健康診断', 12, C.blue, 'middle', true), lb(235, 80, '視聴率\n世論調査\n製品の抜き取り検査', 12, C.purple, 'middle', true), ...band(136, lb(160, 166, '壊れる・お金と時間がかかりすぎる → 標本調査', 12, C.gray, 'middle', true))),
  },
  {
    note: '調べたい全体を「母集団」、実際に調べる一部を「標本」といいます。標本を調べて、母集団の性質を推定します。',
    add: fresh(ci(120, 72, 62, undefined, C.gray, FILL.gray), lb(120, 30, '母集団', 12, C.gray, 'middle', true), ci(105, 80, 24, '標本', C.purple, FILL.purple, 12), ar(160, 130, 200, 100, C.purple), lb(250, 84, '一部を調べて\n全体を推定', 12, C.purple, 'middle', true), ...band(146, lb(160, 175, '母集団 ＝ 全体　標本 ＝ 調べた一部', 13, C.blue, 'middle', true))),
  },
  {
    note: '❓ なぜ標本は「無作為に」選ぶの？ 選び方がかたよると、全体とちがう結論が出るからです。昼間の公園だけで聞き取ると、働いている人の意見が入りません。右のように、全体からまんべんなく選べば、母集団の縮図になります。',
    add: fresh(ci(80, 78, 52, undefined, C.gray, FILL.gray), ci(240, 78, 52, undefined, C.gray, FILL.gray), ...[[60, 56], [70, 68], [58, 78], [72, 84], [66, 96]].map(([x, y]) => ci(x, y, 5, undefined, C.red, C.red)), ...[[212, 50], [258, 60], [230, 82], [262, 90], [222, 104], [246, 40]].map(([x, y]) => ci(x, y, 5, undefined, C.green, C.green)), lb(80, 8, 'かたよる', 11, C.red, 'middle', true), lb(240, 8, '無作為', 11, C.green, 'middle', true), ...band(140, lb(160, 166, '人の考えが入らない方法で選ぶ（くじ・さいころ）', 12, C.green, 'middle', true), lb(160, 198, 'かたよりを消し、全体を正しく推定できる', 12, C.gray, 'middle', true))),
  },
  {
    note: '袋の中の白玉の数を推定します。袋には玉が500個入っています。かき混ぜてから50個を取り出すと、白が15個、白でない玉が35個でした。',
    add: fresh(bx(20, 24, 100, 56, '袋全体\n500個\n白は何個？', C.gray, FILL.gray, 12), ar(124, 52, 168, 52, C.purple), bx(172, 24, 130, 30, '標本 50個', C.purple, FILL.purple, 13), bx(172, 62, 60, 40, '白\n15個', C.blue, FILL.blue, 12), bx(238, 62, 64, 40, '白でない\n35個', C.gray, FILL.gray, 11), ...band(120, lb(160, 160, '50個のうち白は 15個', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ なぜ、標本の割合を、そのまま全体の割合と考えてよいの？ 無作為に取り出した標本は、母集団をよく混ぜた縮図だからです。標本の白の割合 15/50＝0.3 を、全体の割合と考えます。',
    add: fresh(...[['標本', 50, 15, 30], ['母集団', 500, 150, 30]].map(([t, n, w, y], i) => [lb(40, 50 + i * 60, String(t), 12, C.gray, 'middle', true), bx(70, 34 + i * 60, 220, 32, undefined, C.gray, FILL.gray), bx(70, 34 + i * 60, 220 * 0.3, 32, `白 ${w}`, C.blue, FILL.blue, 12), lb(200, 50 + i * 60, `白でない ${(n as number) - (w as number)}`, 11, C.gray)]).flat(), ...band(150, bx(40, 160, 240, 34, '割合が同じ（どちらも 0.3）と考える', C.green, FILL.green, 13))),
  },
  {
    note: '母集団500個のうち、白は 500×0.3＝150個と推定できます。ここで出した答えは「およそ150個」で、ちょうど150個とは限りません。',
    add: fresh(bx(20, 30, 280, 32, '標本の割合 ＝ 15 ÷ 50 ＝ 0.3', C.purple, FILL.purple, 14), bx(20, 74, 280, 32, '母集団の白 ＝ 500 × 0.3 ＝ 150', C.blue, FILL.blue, 14), ...band(120, bx(50, 132, 220, 34, '白玉は およそ150個', C.green, FILL.green, 16), lb(160, 196, '推定なので「およそ」をつける', 12, C.gray))),
  },
  {
    note: '池の魚の数も、標本調査で推定できます。まず池の魚を100匹つかまえて、印をつけて池にもどします。印のついた魚は、池の魚全体にまざります。',
    add: fresh(bx(30, 30, 260, 90, undefined, C.blue, FILL.blue), ...[[70, 60], [110, 84], [150, 56], [190, 90], [230, 66], [250, 96], [90, 100]].map(([x, y]) => bx(x - 10, y - 5, 22, 10, undefined, C.gray, '#FFFFFF')), ...[[130, 100], [210, 46], [170, 76]].map(([x, y]) => bx(x - 10, y - 5, 22, 10, '印', C.red, FILL.red, 8)), lb(160, 20, '池', 11, C.blue, 'middle', true), ...band(130, lb(160, 158, '100匹に印をつけて、池にもどす', 14, C.red, 'middle', true), lb(160, 196, 'よく混ざるまで待つ', 12, C.gray))),
  },
  {
    note: '❓ そのあと、どうするの？ 後日、池から50匹をつかまえたところ、印のついた魚が5匹でした。標本の中の印つきの割合は 5/50＝1/10 です。',
    add: fresh(bx(20, 24, 280, 34, '2回目：50匹をつかまえた', C.purple, FILL.purple, 14), ...Array.from({ length: 10 }, (_, i) => bx(20 + i * 28, 72, 26, 24, i < 1 ? '印' : undefined, i < 1 ? C.red : C.gray, i < 1 ? FILL.red : '#FFFFFF', 9)), lb(160, 110, '（10匹ぶんを図にしたもの　5匹は 50匹の 1/10）', 10, C.gray, 'middle'), ...band(122, bx(40, 136, 240, 34, '印つきの割合 ＝ 5 ÷ 50 ＝ 1/10', C.green, FILL.green, 14), lb(160, 198, '標本の割合が、池全体の割合と等しいと考える', 12, C.gray))),
  },
  {
    note: '❓ 池全体の数は、どう出すの？ 印をつけた魚100匹が、池全体の 1/10 にあたると考えます。池全体を□匹とすると、□の1/10が100なので、□＝100÷(1/10)＝1000匹です。比で書くと 5：50＝100：□ で、同じ1000匹になります。',
    add: fresh(bx(20, 30, 280, 34, '池全体の 1/10 ＝ 印つき 100匹', C.purple, FILL.purple, 14), bx(20, 76, 280, 34, '池全体 ＝ 100 ÷ 1/10 ＝ 1000', C.blue, FILL.blue, 14), ...band(122, bx(50, 136, 220, 34, 'およそ 1000匹', C.green, FILL.green, 16), lb(160, 196, '確かめ：1000 × 1/10 ＝ 100 ✓', 12, C.gray))),
  },
  {
    note: 'まとめです。調べると壊れるものは標本調査。標本は無作為に選び、かたよらせません。標本の割合を全体の割合と考えて、およその数を推定します。',
    add: fresh(bx(20, 24, 280, 30, '調べると壊れる・手間がかかる → 標本調査', C.purple, FILL.purple, 12), bx(20, 62, 280, 30, '標本は無作為に。かたよらせない', C.green, FILL.green, 13), bx(20, 100, 280, 30, '標本の割合 ≒ 母集団の割合', C.blue, FILL.blue, 13), ...band(148, lb(160, 180, '玉の例：500 × 15/50 ＝ 150', 13, C.gray, 'middle', true))),
  },
]);
// ═════════════════════════════════════════════
// データの読み取りと誤った主張の見分け
// ═════════════════════════════════════════════
const twoBars = (v1: number, v2: number, k: number, base: number, labelsY = 132): El[] => [
  bx(80, base - v1 * k, 60, v1 * k, String(v1 + (k > 10 ? 48 : 0)), C.blue, FILL.blue, 14),
  bx(180, base - v2 * k, 60, v2 * k, String(v2 + (k > 10 ? 48 : 0)), C.red, FILL.red, 14),
  lb(110, labelsY, 'A店', 11, C.blue, 'middle', true),
  lb(210, labelsY, 'B店', 11, C.red, 'middle', true),
  ln(50, base, 280, base, C.ink, false, 2),
];
const dotPlot = (vals: number[], y: number, color: string, fill: string): El[] => {
  const cnt: Record<number, number> = {};
  const out: El[] = [ln(20, y, 300, y, C.ink, false, 1.5)];
  vals.forEach((v) => {
    cnt[v] = (cnt[v] ?? 0) + 1;
    out.push(ci(NL(v), y - 6 - (cnt[v] - 1) * 11, 4.5, undefined, color, fill));
  });
  return out;
};
const yomitori: DiagramFigure = show([
  {
    note: 'グラフやデータを見て「この主張は正しいか」を判断する問題が増えています。確かめることは3つです。目盛りの起点、比べる基準、平均だけで見ていないか、です。',
    add: [bx(20, 30, 280, 30, '① グラフの目盛りは0から始まっているか', C.blue, FILL.blue, 13), bx(20, 70, 280, 30, '② 人数がちがうものを、割合で比べているか', C.purple, FILL.purple, 13), bx(20, 110, 280, 30, '③ 平均だけで判断していないか', C.green, FILL.green, 13), ...band(150, lb(160, 185, 'ひとつずつ、なぜかを考えていきます', 13, C.gray, 'middle', true))],
  },
  {
    note: 'まず棒グラフです。A店の売り上げが50、B店が52です。目盛りを0から始めると、2つの棒はほとんど同じ長さで、差はごくわずかです。',
    add: fresh(...twoBars(50, 52, 2, 122), lb(14, 12, '目盛り 0 から', 11, C.gray, 'start', true), ...band(142, lb(160, 175, '50 と 52 → ほぼ同じ', 14, C.blue, 'middle', true))),
  },
  {
    note: '同じデータで、目盛りを48から始めると、B店の棒がA店の約2倍の長さに見えます。差は同じ2なのに、まるで大差がついたように見えてしまいます。',
    add: fresh(...twoBars(2, 4, 24, 122), lb(14, 12, '目盛り 48 から（下の部分をけずっている）', 11, C.red, 'start', true), ...band(142, lb(160, 175, '同じ 50 と 52 なのに、2倍に見える！', 14, C.red, 'middle', true))),
  },
  {
    note: '❓ なぜ目盛りが0から始まっていると、正しく読めるの？ 棒グラフは、棒の長さで量を比べるものだからです。途中から始めると、棒の長さが実際の量の比を表さなくなります。50：52 は約 1：1.04 です。',
    add: fresh(bx(20, 30, 135, 40, '0から\n棒の長さの比 ＝ 量の比', C.blue, FILL.blue, 11), bx(165, 30, 135, 40, '途中から\n棒の長さの比 ≠ 量の比', C.red, FILL.red, 11), ...band(90, bx(30, 106, 260, 34, '50 : 52 ＝ 約 1 : 1.04', C.green, FILL.green, 15), lb(160, 172, 'グラフを見たら、まず目盛りの起点と間かくを確かめる', 12, C.gray, 'middle', true))),
  },
  {
    note: '次は人数のちがいです。A組は30人で部活動に入っているのが18人、B組は40人で20人です。人数だけ見ると、B組のほうが2人多いです。',
    add: fresh(bx(20, 30, 135, 40, 'A組（30人）\n部活 18人', C.blue, FILL.blue, 12), bx(165, 30, 135, 40, 'B組（40人）\n部活 20人', C.red, FILL.red, 12), ...band(90, lb(160, 120, '人数では B組が多い（20 ＞ 18）', 14, C.red, 'middle', true), lb(160, 160, '「B組のほうが部活に入る子が多い」と言える？', 12, C.gray, 'middle', true))),
  },
  {
    note: '❓ なぜ人数ではなく割合で比べるの？ クラス全体の人数がちがうので、人数だけでは公平な比較になりません。割合にそろえると、A組は 18÷30＝0.6、B組は 20÷40＝0.5 で、A組のほうが高くなります。',
    add: fresh(bx(20, 30, 135, 40, 'A組\n18 ÷ 30 ＝ 0.6', C.blue, FILL.blue, 13), bx(165, 30, 135, 40, 'B組\n20 ÷ 40 ＝ 0.5', C.red, FILL.red, 13), ...band(90, bx(30, 104, 260, 34, '割合では A組が高い（0.6 ＞ 0.5）', C.green, FILL.green, 14), lb(160, 172, '人数がちがうときは、割合にそろえて比べる', 12, C.gray, 'middle', true))),
  },
  {
    note: '3つめは平均です。A組5人は 30、30、30、30、100点、B組5人は全員 40点です。「A組の平均が高いので、A組には点の高い人が多い」は正しいでしょうか。',
    add: fresh(lb(14, 34, 'A組', 12, C.blue, 'start', true), ...dotPlot([30, 30, 30, 30, 100], 62, C.blue, FILL.blue), lb(14, 100, 'B組', 12, C.red, 'start', true), ...dotPlot([40, 40, 40, 40, 40], 128, C.red, FILL.red), ...[0, 50, 100].map((v) => lb(NL(v), 144, String(v), 9, C.gray, 'middle', true)), ...band(152, lb(160, 190, 'A組の平均 44点 ＞ B組の平均 40点', 14, C.blue, 'middle', true))),
  },
  {
    note: '❓ 平均が高いのに、なぜ点の高い人が多いとは限らないの？ A組の平均44は、100点の1人が引き上げたものです（30×4＋100＝220、220÷5＝44）。40点以上の人は、A組は1人だけ、B組は5人全員です。',
    add: fresh(...dotPlot([30, 30, 30, 30, 100], 62, C.blue, FILL.blue), ...dotPlot([40, 40, 40, 40, 40], 128, C.red, FILL.red), ln(NL(40), 20, NL(40), 138, C.gray, true), lb(NL(40), 12, '40点', 10, C.gray, 'middle', true), lb(300, 34, 'A組 40点以上は 1人', 11, C.blue, 'end', true), lb(300, 100, 'B組 40点以上は 5人', 11, C.red, 'end', true), ...band(152, lb(160, 186, '平均だけでは、人数の多い少ないは決まらない', 13, C.red, 'middle', true))),
  },
  {
    note: '❓ 平均だけで判断すると、何を見落とすの？ 散らばりです。平均は全体をならした1つの数なので、集まっているのか、極端な値があるのかが消えます。中央値は A組30点、B組40点で、B組のほうが高いと分かります。',
    add: fresh(bx(20, 30, 135, 40, 'A組\n平均44・中央値30', C.blue, FILL.blue, 12), bx(165, 30, 135, 40, 'B組\n平均40・中央値40', C.red, FILL.red, 12), ...band(90, lb(160, 118, '平均の順と中央値の順が、逆になっている', 13, C.red, 'middle', true), lb(160, 152, '平均と一緒に、散らばりや中央値も見る', 13, C.gray, 'middle', true), lb(160, 184, '（範囲・四分位範囲・箱ひげ図）', 12, C.gray))),
  },
  {
    note: '調べた対象のかたよりにも注意します。たとえば「学校の生徒に人気の給食」を運動部の生徒だけに聞くと、全体の意見とはずれるかもしれません。標本調査の「無作為に選ぶ」と同じ考え方です。',
    add: fresh(ci(80, 78, 52, undefined, C.gray, FILL.gray), lb(80, 10, '全校生徒', 11, C.gray, 'middle', true), ...[[62, 60], [74, 72], [60, 84], [76, 90]].map(([x, y]) => ci(x, y, 5, undefined, C.red, C.red)), lb(80, 140, '運動部だけに\n聞いた', 11, C.red, 'middle', true), ar(150, 72, 190, 72, C.gray), bx(196, 50, 110, 44, '全体の意見と\nちがうかも', C.red, FILL.red, 12), ...band(160, lb(160, 190, '対象にかたよりがないかを確かめる', 13, C.gray, 'middle', true))),
  },
  {
    note: 'まとめです。目盛りは0から始まっているか。人数がちがえば割合で比べる。平均だけでなく散らばりも見る。調べた対象にかたよりがないか。この4つを確かめれば、誤った主張を見分けられます。',
    add: fresh(bx(20, 20, 280, 30, '目盛りの起点は0か', C.blue, FILL.blue, 13), bx(20, 56, 280, 30, '人数がちがえば、割合で比べる', C.purple, FILL.purple, 13), bx(20, 92, 280, 30, '平均だけでなく、散らばり・中央値も見る', C.green, FILL.green, 12), bx(20, 128, 280, 30, '調べた対象にかたよりはないか', C.red, FILL.red, 13), ...band(168, lb(160, 200, '「何と何を比べているか」を確かめる習慣', 13, C.gray, 'middle', true))),
  },
]);

export const DIAGRAMS_KOKO_SUGAKU_OLD_G: Record<string, DiagramFigure> = {
  '確率の意味と求め方': kakuritsuImi,
  '樹形図と表の使い分け': jukeizu,
  'くじ引き・玉の取り出し': kujiTama,
  '場合の数（順列と組み合わせ）': junretsuKumi,
  'カード・数字を作る問題': cardNumber,
  '度数分布表とヒストグラム': dosuu,
  '代表値（平均値・中央値・最頻値）': daihyochi,
  '四分位数と箱ひげ図': shihun,
  '標本調査': hyouhon,
  'データの読み取りと誤った主張の見分け': yomitori,
};
