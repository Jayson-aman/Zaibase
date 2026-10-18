// 高校受験 理科（formulas-koko-rika.ts）で図解を持たない項目の 66番目〜78番目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、根っこまでたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';

const BY = 152; // 下の帯の開始位置
type E = DiagramElement;
/** 下の帯に、式やひとことを1つ出す。 */
const say = (text: string, color: string = C.blue, fill: string = FILL.blue, size = 13, y = 166, h = 40): E[] =>
  band(BY, bx(16, y, 288, h, text, color, fill, size));

// ══ メンデルの法則と分離の法則 ══
const punnett = (x: number, y: number, cell: number, top: [string, string], left: [string, string], cells: string[], fills?: string[]): E[] => {
  const out: E[] = [];
  top.forEach((t, i) => out.push(bx(x + cell * (i + 1), y, cell, 24, t, C.blue, FILL.blue, 13)));
  left.forEach((t, j) => out.push(bx(x, y + 24 + cell * 0.6 * j, cell, cell * 0.6, t, C.red, FILL.red, 13)));
  cells.forEach((t, k) => out.push(bx(x + cell * (1 + (k % 2)), y + 24 + cell * 0.6 * Math.floor(k / 2), cell, cell * 0.6, t, C.gray, fills?.[k] ?? FILL.warm, 14)));
  return out;
};
const mendel: DiagramFigure = show([
  {
    note: '生き物の形質（丸い・しわ、など）は、遺伝子が決めています。遺伝子は2つが対（つい）になっていて、丸い種子をつくる遺伝子をA、しわをつくる遺伝子をaと書きます。❓では、親のAaからどんな子ができるのでしょう。',
    add: [bx(100, 12, 120, 40, '親　Aa', C.main, FILL.warm, 16), lb(160, 84, 'A ＝ 丸　　a ＝ しわ', 14, C.ink, 'middle', true), lb(160, 110, '対の遺伝子は、2つで1組', 12, C.gray), ...say('子の遺伝子は、どんな組み合わせになる？', C.ink, FILL.yellow)],
  },
  {
    note: '❓子に伝わるとき、Aaの両方が入るのでしょうか。いいえ。対の遺伝子は、生殖細胞ができるときに分かれて、別々の細胞に1つずつ入ります。これが分離の法則です。',
    add: fresh(bx(110, 10, 100, 34, 'Aa', C.main, FILL.warm, 16), ar(140, 46, 100, 78, C.gray), ar(180, 46, 220, 78, C.gray), ci(90, 96, 18, 'A', C.blue, FILL.blue, 16), ci(230, 96, 18, 'a', C.red, FILL.red, 16), lb(90, 128, '生殖細胞', 11, C.gray), lb(230, 128, '生殖細胞', 11, C.gray), ...say('Aaの親は、Aの細胞とaの細胞ができる', C.blue, FILL.blue)),
  },
  {
    note: 'AAの親からは、Aの生殖細胞しかできません。aaの親からは、aの生殖細胞しかできません。❓では、この2つをかけ合わせると、子はどうなるでしょう。',
    add: fresh(bx(20, 14, 100, 34, 'AA', C.blue, FILL.blue, 16), bx(200, 14, 100, 34, 'aa', C.red, FILL.red, 16), ar(70, 50, 70, 84, C.gray), ar(250, 50, 250, 84, C.gray), ci(70, 100, 18, 'A', C.blue, FILL.blue, 16), ci(250, 100, 18, 'a', C.red, FILL.red, 16), lb(160, 60, 'かけ合わせる', 12, C.ink, 'middle', true), ...say('AAからはAだけ、aaからはaだけ', C.ink, FILL.yellow)),
  },
  {
    note: '表に書くと、4つのマスがすべてAaになります。❓子が全部Aaなのはなぜでしょう。親の一方がAしか出さず、もう一方がaしか出さないので、組み合わせは必ずAとaの1通りだからです。',
    add: fresh(lb(160, 12, 'AAの生殖細胞（上）× aaの生殖細胞（左）', 11, C.gray), ...punnett(70, 24, 70, ['A', 'A'], ['a', 'a'], ['Aa', 'Aa', 'Aa', 'Aa'], [FILL.green, FILL.green, FILL.green, FILL.green]), ...say('AA × aa → 子はすべて Aa', C.green, FILL.green)),
  },
  {
    note: '❓Aaの子は、Aとaのどちらのすがたになるでしょう。Aがあれば丸い種子になります。Aのように、あればそちらの形質が現れる遺伝子を顕性（けんせい・優性）、aのように現れない遺伝子を潜性（せんせい・劣性）といいます。',
    add: fresh(bx(30, 20, 110, 44, 'Aa', C.green, FILL.green, 18), ar(142, 42, 178, 42, C.gray), bx(180, 20, 110, 44, '丸になる', C.main, FILL.warm, 15), lb(160, 96, 'Aがあれば、Aの形質が現れる', 13, C.ink, 'middle', true), lb(160, 120, 'A ＝ 顕性　　a ＝ 潜性', 13, C.blue, 'middle', true), ...say('顕性の遺伝子が1つでもあれば、顕性の形質', C.main, FILL.warm)),
  },
  {
    note: '次に、Aa×Aa。どちらの親からも、Aとaが半分ずつの生殖細胞ができます。表に書き出すと、AA・Aa・Aa・aaの4通りです。',
    add: fresh(lb(160, 12, 'Aaの生殖細胞（上）× Aaの生殖細胞（左）', 11, C.gray), ...punnett(70, 24, 70, ['A', 'a'], ['A', 'a'], ['AA', 'Aa', 'Aa', 'aa']), ...say('組み合わせは 4通り', C.ink, FILL.yellow)),
  },
  {
    note: '❓なぜ表で数えれば割合になるのでしょう。4つの組み合わせは、どれも同じ確率で起こるからです。個数がそのまま割合になり、AA：Aa：aa＝1：2：1です。',
    add: fresh(...punnett(70, 20, 70, ['A', 'a'], ['A', 'a'], ['AA', 'Aa', 'Aa', 'aa'], [FILL.blue, FILL.green, FILL.green, FILL.red]), ...say('AA ： Aa ： aa ＝ 1 ： 2 ： 1', C.green, FILL.green, 15)),
  },
  {
    note: '❓では、見た目（形質）の比はどうでしょう。AAもAaも丸で3、aaだけがしわで1。顕性：潜性＝3：1です。遺伝子の比（1：2：1）と、見た目の比（3：1）を取りちがえないようにしましょう。',
    add: fresh(...punnett(70, 20, 70, ['A', 'a'], ['A', 'a'], ['AA', 'Aa', 'Aa', 'aa'], [FILL.warm, FILL.warm, FILL.warm, FILL.gray]), lb(160, 140, '丸 3 ： しわ 1', 13, C.main, 'middle', true), ...say('遺伝子は 1：2：1、見た目は 3：1', C.main, FILL.warm)),
  },
  {
    note: 'Aa×aaも考えます。aaの親はaの生殖細胞しかつくれません。表に書くと、Aa・Aa・aa・aaで、Aa：aa＝1：1。Aを1つでももつと顕性が現れるので、顕性：潜性＝1：1です。',
    add: fresh(lb(160, 12, 'Aaの生殖細胞（上）× aaの生殖細胞（左）', 11, C.gray), ...punnett(70, 24, 70, ['A', 'a'], ['a', 'a'], ['Aa', 'aa', 'Aa', 'aa'], [FILL.green, FILL.red, FILL.green, FILL.red]), ...say('Aa × aa → Aa ： aa ＝ 1 ： 1', C.blue, FILL.blue)),
  },
  {
    note: '❓潜性の形質が現れるのは、どんなときでしょう。Aが1つでもあれば顕性が表に出るので、潜性が現れるのはaaのときだけです。逆に、潜性の形質が見えている個体は、必ずaaだと分かります。',
    add: fresh(bx(20, 24, 84, 40, 'AA', C.blue, FILL.blue, 15), bx(118, 24, 84, 40, 'Aa', C.blue, FILL.blue, 15), bx(216, 24, 84, 40, 'aa', C.red, FILL.red, 15), lb(61, 84, '顕性', 13, C.blue, 'middle', true), lb(160, 84, '顕性', 13, C.blue, 'middle', true), lb(258, 84, '潜性', 13, C.red, 'middle', true), ...say('潜性が見える ＝ 必ず aa', C.red, FILL.red)),
  },
  {
    note: 'まとめて、解き方の手順です。①親の遺伝子を書く ②生殖細胞に分ける ③表に書いて数える ④見た目は、Aがあれば顕性。比は暗記せず、いつも表を書いて数えれば、まちがえません。',
    add: fresh(bx(20, 10, 280, 24, '① 親の遺伝子を書く', C.main, FILL.warm, 12), bx(20, 40, 280, 24, '② 生殖細胞に分ける（Aaなら A と a）', C.blue, FILL.blue, 12), bx(20, 70, 280, 24, '③ 表に書いて、組み合わせを数える', C.green, FILL.green, 12), bx(20, 100, 280, 24, '④ Aがあれば顕性（見た目）', C.red, FILL.red, 12), ...say('表を書いて数える。暗記しない', C.ink, FILL.yellow)),
  },
]);

// ══ 遺伝子とDNA ══
const dna = (x: number, y: number, h: number): E[] => {
  const out: E[] = [];
  const n = 6;
  for (let i = 0; i < n; i++) {
    const yy = y + (i * h) / n;
    out.push(ln(x - 16, yy, x + 16, yy + h / n / 2, C.blue), ln(x + 16, yy, x - 16, yy + h / n / 2, C.red));
  }
  return out;
};
const idenshi: DiagramFigure = show([
  {
    note: '子は親に似ます。❓なぜ似るのでしょう。親から、形質を決める「情報」を受けつぐからです。この情報のことを遺伝子といいます。では、遺伝子はいったい細胞のどこにあるのでしょう。',
    add: [bx(20, 30, 120, 40, '親', C.main, FILL.warm, 15), ar(142, 50, 178, 50, C.gray), bx(180, 30, 120, 40, '子', C.main, FILL.warm, 15), lb(160, 104, '情報が受けつがれる → 似る', 13, C.ink, 'middle', true), ...say('その情報が「遺伝子」。どこにある？', C.ink, FILL.yellow)],
  },
  {
    note: '細胞の中には、核（かく）があります。❓なぜ核に注目するのでしょう。細胞の中で、遺伝子をしまってある場所が核だからです。核は、細胞の設計図をしまう部屋のようなものです。',
    add: fresh(ci(160, 74, 66, undefined, C.green, FILL.green), ci(160, 74, 30, '核', C.blue, FILL.blue, 15), lb(160, 20, '細胞', 12, C.green, 'middle', true), ...say('遺伝子は、細胞の核の中にある', C.blue, FILL.blue)),
  },
  {
    note: '核の中には、染色体（せんしょくたい）というひも状のものがあります。❓なぜ染色体というのでしょう。酢酸カーミンなどの染色液で、よく染まる（色がつく）からです。',
    add: fresh(ci(160, 62, 54, undefined, C.blue, FILL.blue), lb(160, 16, '核', 12, C.blue, 'middle', true), bx(120, 34, 22, 56, undefined, C.red, FILL.red), bx(150, 34, 22, 56, undefined, C.red, FILL.red), bx(180, 34, 22, 56, undefined, C.red, FILL.red), lb(160, 134, '染色体（染まるからこの名前）', 12, C.red, 'middle', true), ...say('核の中に、染色体がある', C.red, FILL.red)),
  },
  {
    note: '染色体をさらに拡大すると、DNA（デオキシリボ核酸）という物質が、長い糸のようにたたまれて入っています。❓では、遺伝子とDNAはどうちがうのでしょう。',
    add: fresh(bx(16, 28, 56, 90, '染色体', C.red, FILL.red, 12), ar(74, 72, 108, 72, C.gray), ...dna(160, 20, 110), lb(160, 138, 'DNA（二重らせんの糸）', 12, C.blue, 'middle', true), ...say('染色体の中に、DNAが入っている', C.blue, FILL.blue)),
  },
  {
    note: 'DNAは、とても長い物質です。その長いDNAの中で、形質を決める情報が書かれている部分が、遺伝子です。❓DNAのどこでも遺伝子でしょうか。いいえ、情報が書かれた部分だけが遺伝子です。',
    add: fresh(bx(20, 40, 280, 30, undefined, C.blue, FILL.blue), bx(60, 40, 40, 30, '遺伝子', C.red, FILL.red, 11), bx(150, 40, 50, 30, '遺伝子', C.red, FILL.red, 11), bx(240, 40, 40, 30, '遺伝子', C.red, FILL.red, 11), lb(160, 92, 'DNA（長いひも）', 13, C.blue, 'middle', true), lb(160, 118, '赤い部分＝形質を決める情報', 12, C.red, 'middle'), ...say('DNAの一部分が、遺伝子', C.red, FILL.red)),
  },
  {
    note: 'ここまでを大きいほうから並べると、核 ＞ 染色体 ＞ DNA ＞ 遺伝子 の入れ子になっています。この順を覚えておけば、ことばを取りちがえません。',
    add: fresh(bx(10, 8, 300, 130, '核', C.blue, FILL.blue, 12), bx(40, 30, 240, 100, '染色体', C.red, FILL.red, 12), bx(70, 52, 180, 70, 'DNA', C.green, FILL.green, 12), bx(110, 78, 100, 30, '遺伝子', C.purple, FILL.purple, 12), ...say('核 ＞ 染色体 ＞ DNA ＞ 遺伝子', C.ink, FILL.yellow)),
  },
  {
    note: '❓遺伝子と、DNAは同じものでしょうか。ちがいます。遺伝子は「情報」、DNAは「その情報が書いてある物質」です。文章（情報）と、それが書かれた紙（物質）の関係と同じです。',
    add: fresh(bx(20, 24, 130, 60, '遺伝子\n＝情報\n（文章）', C.purple, FILL.purple, 13), bx(170, 24, 130, 60, 'DNA\n＝物質\n（紙とインク）', C.blue, FILL.blue, 13), lb(160, 110, '「遺伝子の本体はDNA」', 13, C.ink, 'middle', true), ...say('遺伝子は情報、DNAは物質', C.ink, FILL.yellow)),
  },
  {
    note: '❓では、なぜ親の情報が子に伝わるのでしょう。生殖細胞ができるとき、DNAが（染色体ごと）子に受けつがれるからです。DNAがそっくり伝わるので、形質も似ます。',
    add: fresh(bx(10, 30, 90, 50, '親の\n生殖細胞', C.main, FILL.warm, 12), ar(102, 55, 128, 55, C.gray), bx(130, 30, 60, 50, '受精', C.green, FILL.green, 13), ar(192, 55, 218, 55, C.gray), bx(220, 30, 90, 50, '子の細胞\n（DNAを受けつぐ）', C.blue, FILL.blue, 11), lb(160, 108, 'DNAが親から子へ', 13, C.ink, 'middle', true), ...say('DNAの受けつぎが、遺伝', C.green, FILL.green)),
  },
  {
    note: 'DNAの研究から、新しい技術が生まれました。1つめはクローン技術です。❓クローンとは何でしょう。親と、まったく同じ遺伝子をもつ個体をつくる技術です。DNAがそっくり同じなので、性質も同じになります。',
    add: fresh(bx(20, 30, 100, 40, '親の体細胞', C.main, FILL.warm, 12), ar(122, 50, 158, 50, C.gray), bx(160, 30, 140, 40, '同じ遺伝子の個体', C.main, FILL.warm, 12), lb(160, 104, '遺伝子は、親と同じ', 13, C.ink, 'middle', true), ...say('クローン：同じ遺伝子をもつ個体をつくる', C.main, FILL.warm)),
  },
  {
    note: '2つめは遺伝子組換え技術です。❓何をするのでしょう。別の生物の遺伝子を取り出して、ほかの生物のDNAに組みこみ、新しい性質をもたせます。「ほかから持ってくる」のがクローンとのちがいです。',
    add: fresh(bx(20, 30, 100, 40, 'A の遺伝子', C.blue, FILL.blue, 12), ar(122, 50, 158, 50, C.blue), bx(160, 30, 140, 40, 'B のDNAに組みこむ', C.green, FILL.green, 12), lb(160, 104, 'B に新しい性質がつく', 13, C.ink, 'middle', true), ...say('遺伝子組換え：別の生物の遺伝子を組みこむ', C.green, FILL.green)),
  },
  {
    note: 'まとめて比べます。クローンは「同じものをつくる」、遺伝子組換えは「ほかから持ってくる」。どちらも生き物の性質を人が決めることになるので、安全性や倫理（りんり・正しいあり方）も考えます。',
    add: fresh(bx(20, 20, 130, 40, 'クローン', C.main, FILL.warm, 14), bx(170, 20, 130, 40, '遺伝子組換え', C.green, FILL.green, 14), bx(20, 72, 130, 50, '同じ遺伝子の\n個体をつくる', C.main, FILL.warm, 12), bx(170, 72, 130, 50, '別の生物の遺伝子\nを組みこむ', C.green, FILL.green, 12), ...say('同じものをつくる／ほかから持ってくる', C.ink, FILL.yellow)),
  },
]);

// ══ 食物連鎖と生物の数のつり合い ══
const chain: DiagramFigure = show([
  {
    note: '生き物は、食べる・食べられるでつながっています。この関係を食物連鎖といいます。役わりで分けると、生産者・消費者・分解者の3つです。',
    add: [bx(10, 20, 92, 44, '生産者', C.green, FILL.green, 14), bx(114, 20, 92, 44, '消費者', C.main, FILL.warm, 14), bx(218, 20, 92, 44, '分解者', C.purple, FILL.purple, 14), lb(160, 100, '植物　　　動物　　　菌類・細菌類', 11, C.gray, 'middle'), ...say('生産者 → 消費者 → 分解者', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ植物が「生産者」なのでしょう。植物は、光合成で二酸化炭素と水から自分で有機物（養分）をつくれるからです。動物にはこれができないので、ほかの生物を食べます。',
    add: fresh(bx(20, 28, 110, 44, '植物', C.green, FILL.green, 15), ar(132, 50, 168, 50, C.green), bx(170, 28, 130, 44, '有機物を自分でつくる', C.green, FILL.green, 12), lb(160, 104, '動物は、つくれないので食べる', 13, C.main, 'middle', true), ...say('光合成で有機物をつくるから、生産者', C.green, FILL.green)),
  },
  {
    note: '食べる関係を、矢印でつなぎます。植物を草食動物が食べ、草食動物を肉食動物が食べます。矢印は「食べられるほう → 食べるほう」の向きに書きます。',
    add: fresh(bx(10, 40, 84, 40, '植物', C.green, FILL.green, 14), ar(96, 60, 114, 60, C.gray), bx(116, 40, 88, 40, '草食動物', C.main, FILL.warm, 13), ar(206, 60, 224, 60, C.gray), bx(226, 40, 84, 40, '肉食動物', C.red, FILL.red, 13), lb(160, 108, '矢印は、食べられる → 食べる', 12, C.ink, 'middle', true), ...say('草食動物は消費者。肉食動物も消費者', C.main, FILL.warm)),
  },
  {
    note: '❓では、生き物が死んだら、ふんや死がいはどうなるのでしょう。菌類（カビ・キノコ）や細菌類が、有機物を二酸化炭素や水などの無機物に分解します。この生き物が分解者です。',
    add: fresh(bx(10, 20, 100, 40, '死がい・ふん', C.gray, FILL.gray, 12), ar(112, 40, 138, 40, C.gray), bx(140, 20, 80, 40, '分解者', C.purple, FILL.purple, 13), ar(222, 40, 246, 40, C.gray), bx(248, 20, 62, 40, '無機物', C.blue, FILL.blue, 12), lb(160, 92, '菌類（カビ・キノコ）・細菌類', 13, C.purple, 'middle', true), ...say('分解者：有機物を無機物に分解する', C.purple, FILL.purple)),
  },
  {
    note: '❓なぜ分解者が必要なのでしょう。分解者がいないと、死がいがたまるだけで養分がもどりません。分解でできた無機物を、植物がまた使えるので、物質がぐるぐる回ります。',
    add: fresh(bx(20, 20, 100, 36, '植物', C.green, FILL.green, 14), bx(200, 20, 100, 36, '動物', C.main, FILL.warm, 14), bx(110, 100, 100, 36, '分解者', C.purple, FILL.purple, 14), ar(120, 38, 198, 38, C.gray), ar(250, 58, 212, 100, C.gray), ar(110, 118, 60, 60, C.purple), ...say('分解者のおかげで、物質が循環する', C.purple, FILL.purple)),
  },
  {
    note: '生き物の数（量）は、下の段ほど多いピラミッド形です。❓なぜ下が多いのでしょう。食べられるものが少ないと、食べる側は増えられません。上の段ほど食べ物にできる量が少ないので、数も少なくなります。',
    add: fresh(bx(20, 90, 280, 36, '生産者（植物）　いちばん多い', C.green, FILL.green, 12), bx(70, 52, 180, 36, '草食動物', C.main, FILL.warm, 12), bx(115, 14, 90, 36, '肉食動物', C.red, FILL.red, 12), lb(160, 142, '下ほど多い', 12, C.ink, 'middle', true), ...say('ピラミッドは、下が多く上が少ない', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。草食動物が急に増えたら、何が起こるでしょう。❓植物は、草食動物に食べられる量がふえるので減ります。肉食動物は、えさの草食動物がふえるので、ふえます。',
    add: fresh(bx(10, 30, 84, 40, '植物\n減る', C.green, FILL.green, 13), bx(116, 30, 88, 40, '草食動物\n急に増える', C.main, FILL.warm, 12), bx(226, 30, 84, 40, '肉食動物\n増える', C.red, FILL.red, 12), ar(116, 50, 96, 50, C.green), ar(206, 50, 224, 50, C.red), lb(160, 100, '食べられる量↑ → 植物は減る', 12, C.green, 'middle'), lb(160, 122, 'えさ↑ → 肉食動物は増える', 12, C.red, 'middle'), ...say('草食↑ → 植物は減り、肉食は増える', C.main, FILL.warm)),
  },
  {
    note: '❓そのあと、どうなるでしょう。肉食動物がふえると、草食動物が食べられて減り始めます。すると植物は食べられる量が減って、また増え始めます。',
    add: fresh(bx(20, 24, 130, 30, '肉食動物 ふえた', C.red, FILL.red, 12), ar(85, 56, 85, 80, C.gray), bx(20, 82, 130, 30, '草食動物 減り始める', C.main, FILL.warm, 12), ar(150, 97, 176, 97, C.gray), bx(178, 82, 130, 30, '植物 増え始める', C.green, FILL.green, 12), ...say('つぎつぎと、ほかの段階にひびく', C.ink, FILL.yellow)),
  },
  {
    note: '❓最終的には、どうなるのでしょう。増えたものは減り、減ったものは増える力がはたらくので、やがてもとのつり合いにもどります。ただし、増減が大きすぎると、もどらないこともあります。',
    add: fresh(ln(20, 90, 300, 90, C.gray, true), ln(20, 90, 60, 90, C.ink, false, 3), ln(60, 90, 110, 40, C.ink, false, 3), ln(110, 40, 170, 110, C.ink, false, 3), ln(170, 110, 220, 80, C.ink, false, 3), ln(220, 80, 260, 90, C.ink, false, 3), ln(260, 90, 300, 90, C.ink, false, 3), lb(110, 30, '一時的に増える', 11, C.red, 'middle'), lb(260, 124, 'もとにもどる', 12, C.green, 'middle', true), ...say('くずれても、やがて元のつり合いに戻る', C.green, FILL.green)),
  },
  {
    note: '別の例です。肉食動物が急に減ったら、どうなるでしょう。❓草食動物を食べる数が減るので、草食動物は増えます。すると植物は食べられて減ります。順に追えば、答えが出ます。',
    add: fresh(bx(10, 30, 84, 40, '肉食動物\n急に減る', C.red, FILL.red, 12), bx(116, 30, 88, 40, '草食動物\n増える', C.main, FILL.warm, 13), bx(226, 30, 84, 40, '植物\n減る', C.green, FILL.green, 13), ar(96, 50, 114, 50, C.gray), ar(206, 50, 224, 50, C.gray), ...say('肉食↓ → 草食↑ → 植物↓（順に追う）', C.main, FILL.warm)),
  },
  {
    note: 'まとめます。生産者は植物、消費者は動物、分解者は菌類・細菌類。数は生産者が最多のピラミッドで、一時的にくずれても、やがてもどります。増減は、1段ずつ順に追います。',
    add: fresh(bx(20, 14, 280, 26, '生産者＝植物（光合成）', C.green, FILL.green, 12), bx(20, 46, 280, 26, '消費者＝動物（食べる）', C.main, FILL.warm, 12), bx(20, 78, 280, 26, '分解者＝菌類・細菌類', C.purple, FILL.purple, 12), bx(20, 110, 280, 26, '数は下ほど多い。くずれてももどる', C.blue, FILL.blue, 12), ...say('1段ずつ順に追えば、まちがえない', C.ink, FILL.yellow)),
  },
]);

// ══ 炭素と酸素の循環 ══
const carbon: DiagramFigure = show([
  {
    note: '炭素は、生き物のからだ（有機物）の材料です。空気中では二酸化炭素としてあります。❓この炭素は、どのように生き物と空気を行き来するのでしょう。',
    add: [bx(100, 14, 120, 40, '大気の二酸化炭素', C.gray, FILL.gray, 12), bx(20, 90, 100, 40, '植物', C.green, FILL.green, 14), bx(200, 90, 100, 40, '動物', C.main, FILL.warm, 14), ...say('炭素は、どう行き来する？', C.ink, FILL.yellow)],
  },
  {
    note: '❓大気の炭素を、有機物に取りこむのは何でしょう。植物の光合成です。光のエネルギーを使って、二酸化炭素と水から、有機物とともに酸素をつくります。',
    add: fresh(bx(100, 10, 120, 36, '大気の二酸化炭素', C.gray, FILL.gray, 12), bx(20, 100, 110, 40, '植物の有機物', C.green, FILL.green, 13), ar(130, 48, 90, 98, C.green), lb(150, 74, '光合成', 13, C.green, 'start', true), ...say('光合成：大気の二酸化炭素を有機物に', C.green, FILL.green)),
  },
  {
    note: '光合成では、二酸化炭素を取りこむだけでなく、酸素も出します。❓なぜ酸素が出るのでしょう。光合成は、二酸化炭素と水から有機物を作る反応で、その材料の一部が酸素として外へ出るからです。',
    add: fresh(bx(20, 24, 100, 34, '二酸化炭素', C.gray, FILL.gray, 12), bx(20, 68, 100, 34, '水', C.blue, FILL.blue, 13), ar(122, 60, 158, 60, C.green), bx(160, 44, 70, 34, '光合成', C.green, FILL.green, 13), ar(232, 50, 262, 34, C.green), ar(232, 72, 262, 88, C.green), bx(264, 20, 50, 30, '有機物', C.green, FILL.green, 10), bx(264, 76, 50, 30, '酸素', C.blue, FILL.blue, 12), ...say('材料：二酸化炭素＋水　→　有機物＋酸素', C.green, FILL.green, 12)),
  },
  {
    note: '植物の有機物は、食べられて、動物のからだに移ります。❓なぜ炭素が動物に移るのでしょう。有機物の中に炭素がふくまれていて、食物連鎖で炭素ごと運ばれるからです。',
    add: fresh(bx(20, 30, 110, 44, '植物の有機物', C.green, FILL.green, 13), ar(132, 52, 178, 52, C.main), lb(155, 40, '食べる', 12, C.main, 'middle', true), bx(180, 30, 120, 44, '動物のからだ', C.main, FILL.warm, 13), ...say('食べられて、炭素は動物に移る', C.main, FILL.warm)),
  },
  {
    note: '❓では、炭素が大気にもどるのは、どんなときでしょう。生き物は、植物も動物も呼吸をして、有機物を分解してエネルギーを取り出し、二酸化炭素を出します。',
    add: fresh(bx(100, 10, 120, 36, '大気の二酸化炭素', C.gray, FILL.gray, 12), bx(20, 100, 100, 40, '植物', C.green, FILL.green, 14), bx(200, 100, 100, 40, '動物', C.main, FILL.warm, 14), ar(70, 98, 118, 48, C.red), ar(250, 98, 202, 48, C.red), lb(52, 66, '呼吸', 12, C.red, 'middle', true), lb(268, 66, '呼吸', 12, C.red, 'middle', true), ...say('呼吸で、二酸化炭素が大気にもどる', C.red, FILL.red)),
  },
  {
    note: '植物も、光合成だけでなく呼吸もしています。❓それなのに、なぜ植物は二酸化炭素を減らす側なのでしょう。日中は、光合成で取りこむ量のほうが、呼吸で出す量より多いからです。',
    add: fresh(bx(20, 24, 130, 40, '光合成\nCO2を取りこむ（多い）', C.green, FILL.green, 11), bx(170, 24, 130, 40, '呼吸\nCO2を出す（少ない）', C.red, FILL.red, 11), lb(160, 100, '日中は、取りこむ量のほうが多い', 13, C.ink, 'middle', true), ...say('植物も呼吸する。でも日中は光合成が上まわる', C.green, FILL.green, 12)),
  },
  {
    note: '死がいやふんは、分解者（菌類・細菌類）に分解されます。❓分解者は、二酸化炭素を出すのでしょうか。出します。分解者も呼吸をして、有機物を分解しているからです。',
    add: fresh(bx(100, 10, 120, 36, '大気の二酸化炭素', C.gray, FILL.gray, 12), bx(20, 100, 110, 36, '死がい・ふん', C.gray, FILL.gray, 12), ar(132, 118, 178, 118, C.purple), bx(180, 100, 120, 36, '分解者', C.purple, FILL.purple, 14), ar(240, 98, 210, 48, C.red), lb(266, 68, '呼吸', 12, C.red, 'start', true), ...say('分解者も呼吸をして、二酸化炭素を出す', C.purple, FILL.purple)),
  },
  {
    note: '全体を1つの図にします。二酸化炭素は光合成で植物に、食べられて動物に、呼吸と分解で大気にもどります。炭素はこうしてぐるぐる回っています。',
    add: fresh(bx(100, 8, 120, 30, '大気の二酸化炭素', C.gray, FILL.gray, 11), bx(10, 62, 80, 32, '植物', C.green, FILL.green, 13), bx(230, 62, 80, 32, '動物', C.main, FILL.warm, 13), bx(110, 112, 100, 32, '分解者', C.purple, FILL.purple, 13), ar(100, 40, 60, 60, C.green), ar(60, 96, 112, 30, C.red, true), ar(92, 78, 228, 78, C.main), ar(260, 60, 212, 30, C.red, true), ar(230, 96, 212, 116, C.gray), ar(92, 96, 110, 118, C.gray), ...say('光合成・食べる・呼吸・分解で循環', C.ink, FILL.yellow)),
  },
  {
    note: '❓大気から炭素を取りこむのは、どの矢印だけでしょう。光合成の矢印だけです。呼吸や分解は、すべて大気に出す側です。この向きの区別が、問題でよく問われます。',
    add: fresh(bx(20, 24, 130, 40, '取りこむ側\n光合成だけ', C.green, FILL.green, 13), bx(170, 24, 130, 40, '出す側\n呼吸・分解・燃焼', C.red, FILL.red, 12), lb(160, 100, '大気の二酸化炭素から見た向き', 12, C.gray, 'middle'), ...say('光合成だけが、大気から取りこむ側', C.green, FILL.green)),
  },
  {
    note: '酸素の向きは、二酸化炭素と反対です。光合成で酸素が出て、呼吸で酸素を使います。❓動物が生きていけるのは、なぜでしょう。植物の光合成が酸素をつくり続けているからです。',
    add: fresh(bx(20, 24, 130, 40, '光合成\n酸素を出す', C.green, FILL.green, 13), bx(170, 24, 130, 40, '呼吸\n酸素を使う', C.red, FILL.red, 13), lb(160, 100, '二酸化炭素と、向きが反対', 13, C.ink, 'middle', true), ...say('酸素は光合成でふえ、呼吸で使われる', C.blue, FILL.blue)),
  },
  {
    note: '例題です。「分解者は二酸化炭素を出しますか」。分解者も呼吸をするので、出します。「二酸化炭素を有機物に変えるはたらきは」光合成です。「炭素が大気にもどる道すじ」は、呼吸と分解（燃焼も）。',
    add: fresh(bx(20, 12, 280, 30, '分解者は二酸化炭素を出す？ → 出す（呼吸）', C.purple, FILL.purple, 11), bx(20, 50, 280, 30, 'CO2を有機物に変える？ → 光合成', C.green, FILL.green, 11), bx(20, 88, 280, 30, '大気にもどる道すじ → 呼吸・分解（燃焼も）', C.red, FILL.red, 11), ...say('分解者も呼吸する。光合成だけが取りこむ側', C.ink, FILL.yellow)),
  },
]);

// ══ 自然環境と人間のかかわり ══
const kankyo: DiagramFigure = show([
  {
    note: '自然環境と人間のかかわりでは、大きく3つの話題が出ます。地球温暖化（温室効果ガス）、外来生物、水や空気の汚れを調べる指標生物です。順に「なぜ？」をたどりましょう。',
    add: [bx(10, 30, 96, 60, '温室効果\nガス', C.red, FILL.red, 13), bx(112, 30, 96, 60, '外来生物', C.green, FILL.green, 13), bx(214, 30, 96, 60, '指標生物', C.blue, FILL.blue, 13), ...say('3つの話題を、順に見ていく', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ二酸化炭素などがふえると、気温が上がるのでしょう。地表は、太陽の光であたたまり、熱を宇宙へ逃がします。二酸化炭素などは、その熱の一部を吸収して地表にもどすので、地表があたたかくなります。',
    add: fresh(bx(0, 100, 320, 40, '地表', C.green, FILL.green, 12), ar(60, 98, 60, 60, C.red), ar(240, 98, 240, 14, C.red), bx(20, 46, 260, 14, undefined, C.gray, FILL.gray), lb(160, 34, '温室効果ガスの層', 11, C.gray, 'middle', true), ar(110, 58, 110, 96, C.red), lb(160, 80, '熱の一部をもどす', 11, C.red, 'middle', true), ...say('熱がにげにくくなり、気温が上がる', C.red, FILL.red)),
  },
  {
    note: '温室効果をもつ気体を、温室効果ガスといいます。二酸化炭素やメタンなどです。❓なぜ二酸化炭素がふえたのでしょう。石油や石炭などの燃料を燃やす量が、人間の活動でふえたからと考えられています。',
    add: fresh(bx(20, 20, 130, 40, '二酸化炭素', C.red, FILL.red, 14), bx(170, 20, 130, 40, 'メタン', C.red, FILL.red, 14), lb(160, 90, '燃料を燃やすと、二酸化炭素が出る', 13, C.ink, 'middle', true), ar(160, 100, 160, 124, C.red), lb(160, 138, '大気中でふえる', 12, C.red, 'middle'), ...say('温室効果ガス：二酸化炭素・メタンなど', C.red, FILL.red)),
  },
  {
    note: '外来生物は、もともとその地域にいなかった生物で、人間の活動で持ちこまれたものです。❓なぜ問題なのでしょう。もともとすんでいた在来種を食べたり、すみかをうばったりして、数を減らすからです。',
    add: fresh(bx(20, 20, 120, 40, '外来生物', C.red, FILL.red, 14), bx(180, 20, 120, 40, '在来種', C.green, FILL.green, 14), ar(142, 40, 178, 40, C.red), lb(160, 78, '食べる・すみかをうばう', 12, C.red, 'middle'), lb(240, 110, '数が減る', 13, C.green, 'middle', true), ...say('外来生物は、在来種をおびやかす', C.red, FILL.red)),
  },
  {
    note: '❓なぜ外来生物は、ふえやすいのでしょう。持ちこまれた土地に、その生物を食べる天敵が少ないからです。食べられにくいので、どんどん数がふえます。',
    add: fresh(bx(20, 30, 120, 40, '天敵が少ない', C.gray, FILL.gray, 14), ar(142, 50, 178, 50, C.gray), bx(180, 30, 120, 40, '数が増えやすい', C.red, FILL.red, 14), lb(160, 104, '食べられにくいので、ふえる', 13, C.ink, 'middle', true), ...say('天敵が少なく、増えやすい', C.red, FILL.red)),
  },
  {
    note: '指標生物は、そこにすんでいることで、環境の状態が分かる生物です。❓なぜ分かるのでしょう。その生物が、きれいな水など、限られた環境にしかすめないからです。',
    add: fresh(bx(20, 24, 120, 40, 'きれいな水にしか\nすめない生物', C.blue, FILL.blue, 12), ar(142, 44, 178, 44, C.blue), bx(180, 24, 120, 40, 'いる → きれいな水', C.blue, FILL.blue, 12), lb(160, 100, 'その生物が いる = その環境', 13, C.ink, 'middle', true), ...say('限られた環境にすむ生物が、目印になる', C.blue, FILL.blue)),
  },
  {
    note: '水質の指標生物です。きれいな水なら、サワガニやカワゲラ。きたない水なら、アメリカザリガニやサカマキガイです。いる生物を調べれば、水のよごれ具合が分かります。',
    add: fresh(bx(10, 20, 145, 34, 'きれいな水', C.blue, FILL.blue, 13), bx(165, 20, 145, 34, 'きたない水', C.gray, FILL.gray, 13), bx(10, 62, 145, 30, 'サワガニ', C.blue, FILL.blue, 13), bx(10, 98, 145, 30, 'カワゲラ', C.blue, FILL.blue, 13), bx(165, 62, 145, 30, 'アメリカザリガニ', C.gray, FILL.gray, 12), bx(165, 98, 145, 30, 'サカマキガイ', C.gray, FILL.gray, 12), ...say('サワガニ・カワゲラ ＝ きれいな水', C.blue, FILL.blue)),
  },
  {
    note: '大気の汚れにも指標があります。マツの葉の気孔が汚れていたら、空気がよごれています。地衣類（ちいるい）がいれば、空気がきれいです。地衣類は、空気のよごれに弱い生物だからです。',
    add: fresh(bx(20, 24, 130, 44, 'マツの葉の\n気孔が汚れる', C.gray, FILL.gray, 12), ar(152, 46, 174, 46, C.gray), bx(176, 24, 130, 44, '空気がよごれている', C.gray, FILL.gray, 12), bx(20, 84, 130, 44, '地衣類が\nいる', C.green, FILL.green, 12), ar(152, 106, 174, 106, C.green), bx(176, 84, 130, 44, '空気がきれい', C.green, FILL.green, 12), ...say('気孔の汚れ・地衣類の有無で、大気を調べる', C.ink, FILL.yellow, 12)),
  },
  {
    note: '例題です。「川にサワガニやカワゲラが多くいる」→ きれいな水。「外来生物が問題なのは」→ 在来種を食べたり、すみかをうばったりして減らすから。「温室効果ガスを1つ」→ 二酸化炭素（メタンも可）。',
    add: fresh(bx(20, 12, 280, 30, 'サワガニ・カワゲラが多い → きれいな水', C.blue, FILL.blue, 11), bx(20, 50, 280, 30, '外来生物 → 在来種を減らす', C.red, FILL.red, 12), bx(20, 88, 280, 30, '温室効果ガス → 二酸化炭素・メタン', C.green, FILL.green, 12), ...say('何がいるか、天敵がいるかを考える', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめます。温室効果ガスは、熱を地表にもどして気温を上げます。外来生物は、天敵が少なく増えやすいので、在来種を減らします。指標生物は、限られた環境にすむので、環境の目印になります。',
    add: fresh(bx(10, 12, 300, 34, '温室効果ガス ＝ 熱をもどす → 気温が上がる', C.red, FILL.red, 12), bx(10, 52, 300, 34, '外来生物 ＝ 天敵が少ない → 在来種が減る', C.green, FILL.green, 12), bx(10, 92, 300, 34, '指標生物 ＝ 限られた環境にしかすめない', C.blue, FILL.blue, 12), ...say('理由まで言えるようにしておく', C.ink, FILL.yellow)),
  },
]);

// ══ マグマのねばりけと火山の形 ══
const dome = (x: number, y: number, fill: string): E => pg([[x, y], [x + 10, y - 30], [x + 30, y - 50], [x + 60, y - 50], [x + 80, y - 30], [x + 90, y]], C.gray, fill);
const cone = (x: number, y: number, fill: string): E => pg([[x, y], [x + 43, y - 58], [x + 57, y - 58], [x + 100, y]], C.gray, fill);
const shield = (x: number, y: number, fill: string): E => pg([[x, y], [x + 42, y - 36], [x + 48, y - 36], [x + 90, y]], C.gray, fill);
const magma: DiagramFigure = show([
  {
    note: '火山の形・噴火のしかた・溶岩の色は、ばらばらに覚えるとたいへんです。❓実は、ぜんぶ同じ原因で決まります。それはマグマのねばりけです。',
    add: [bx(100, 12, 120, 36, 'マグマのねばりけ', C.red, FILL.red, 14), ar(120, 50, 60, 82, C.gray), ar(160, 50, 160, 82, C.gray), ar(200, 50, 260, 82, C.gray), bx(10, 84, 96, 34, '火山の形', C.main, FILL.warm, 13), bx(112, 84, 96, 34, '噴火のしかた', C.main, FILL.warm, 13), bx(214, 84, 96, 34, '溶岩の色', C.main, FILL.warm, 13), ...say('ねばりけが分かれば、全部が分かる', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜねばりけがちがうのでしょう。マグマにふくまれる二酸化ケイ素（SiO2）の量がちがうからです。二酸化ケイ素が多いほど、ねばりけが強くなります。',
    add: fresh(bx(20, 24, 130, 44, '二酸化ケイ素\nが多い', C.gray, FILL.gray, 13), ar(152, 46, 176, 46, C.red), bx(178, 24, 130, 44, 'ねばりけ\nが強い', C.red, FILL.red, 13), bx(20, 84, 130, 44, '二酸化ケイ素\nが少ない', C.gray, FILL.gray, 13), ar(152, 106, 176, 106, C.blue), bx(178, 84, 130, 44, 'ねばりけ\nが弱い', C.blue, FILL.blue, 13), ...say('二酸化ケイ素が多い ＝ ねばりけが強い', C.ink, FILL.yellow)),
  },
  {
    note: '❓なぜ二酸化ケイ素が多いと白っぽいのでしょう。二酸化ケイ素をふくむ鉱物は、石英・長石のような白っぽい（無色）鉱物だからです。だから、ねばりけが強いマグマは白っぽくなります。',
    add: fresh(bx(20, 30, 130, 44, '二酸化ケイ素\n多い', C.gray, FILL.gray, 13), ar(152, 52, 176, 52, C.gray), bx(178, 30, 130, 44, '白っぽい鉱物\nが多い', C.gray, FILL.gray, 13), lb(160, 104, 'ねばりけ強い ＝ 白っぽい', 14, C.ink, 'middle', true), ...say('ねばりけ強 → 白っぽい ／ 弱 → 黒っぽい', C.ink, FILL.yellow)),
  },
  {
    note: 'ねばりけが強いマグマから見ていきます。❓なぜ盛り上がった形になるのでしょう。ねばりけが強いと、溶岩が流れにくく、火口の近くで盛り上がるからです。ドーム状の昭和新山がその例です。',
    add: fresh(dome(115, 118, FILL.red), ln(0, 118, 320, 118, C.gray), lb(160, 136, 'ドーム状（昭和新山）', 12, C.red, 'middle', true), ar(130, 30, 130, 60, C.red), lb(200, 44, '流れにくい', 12, C.red, 'start'), ...say('強いねばりけ → 盛り上がった形', C.red, FILL.red)),
  },
  {
    note: '❓なぜ激しく噴火するのでしょう。ねばりけが強いと、マグマの中のガスが抜けにくく、たまった末に一気に噴き出すからです。炭酸のふたを急に開けたときの勢いに似ています。',
    add: fresh(dome(115, 118, FILL.red), ln(0, 118, 320, 118, C.gray), ar(160, 70, 130, 24, C.red), ar(160, 70, 160, 20, C.red), ar(160, 70, 190, 24, C.red), lb(160, 134, 'ガスがたまり、一気に噴き出す', 12, C.red, 'middle', true), ...say('ガスが抜けにくい → 激しい噴火', C.red, FILL.red)),
  },
  {
    note: 'ねばりけが弱いマグマはどうでしょう。❓なぜ傾斜がゆるやかなのでしょう。溶岩がさらさらと遠くまで流れて広がり、平たくなるからです。ハワイのマウナロアがその例です。',
    add: fresh(shield(115, 118, FILL.blue), ln(0, 118, 320, 118, C.gray), ar(140, 82, 84, 106, C.blue), ar(180, 82, 236, 106, C.blue), lb(160, 134, '傾斜がゆるやか（マウナロア）', 12, C.blue, 'middle', true), ...say('弱いねばりけ → 流れて広がる → 平たい形', C.blue, FILL.blue)),
  },
  {
    note: '❓では、弱いと噴火はどうなるでしょう。ガスがかんたんに抜けるので、爆発せず、溶岩がしずかに流れ出ます。おだやかな噴火になります。',
    add: fresh(shield(115, 118, FILL.blue), ln(0, 118, 320, 118, C.gray), ar(160, 84, 160, 62, C.blue), lb(160, 52, 'ガスがぬける', 12, C.blue, 'middle', true), lb(160, 134, '溶岩がしずかに流れ出る', 12, C.blue, 'middle', true), ...say('ガスがぬけやすい → おだやかな噴火', C.blue, FILL.blue)),
  },
  {
    note: '中くらいのねばりけの火山は、円すい形になります。桜島がその例です。ねばりけが中くらいなので、形も噴火も、強い場合と弱い場合の中間です。',
    add: fresh(cone(110, 118, FILL.warm), ln(0, 118, 320, 118, C.gray), lb(160, 134, '円すい形（桜島）', 12, C.main, 'middle', true), ...say('中くらいのねばりけ → 円すい形', C.main, FILL.warm)),
  },
  {
    note: '3つを並べて比べます。左から、ねばりけが強い順です。形は、ドーム状・円すい形・ゆるやか。色は、白っぽい〜黒っぽい。噴火は、激しい〜おだやか。全部が連動しています。',
    add: fresh(dome(8, 90, FILL.red), cone(112, 90, FILL.warm), shield(224, 90, FILL.blue), ln(0, 90, 320, 90, C.gray), lb(53, 120, '強い\n白っぽい\n激しい', 11, C.red, 'middle', true), lb(162, 120, '中くらい', 11, C.main, 'middle', true), lb(269, 120, '弱い\n黒っぽい\nおだやか', 11, C.blue, 'middle', true), ...say('ねばりけ：強 ← → 弱（全部が連動）', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。傾斜がゆるやかで、黒っぽい溶岩の火山です。ゆるやか → 溶岩が流れやすい → ねばりけが弱い。黒っぽいのも同じ。だから、噴火はおだやかです。',
    add: fresh(bx(20, 20, 130, 34, 'ゆるやか・黒っぽい', C.gray, FILL.gray, 12), ar(152, 37, 176, 37, C.gray), bx(178, 20, 130, 34, 'ねばりけ 弱い', C.blue, FILL.blue, 13), ar(243, 56, 243, 80, C.gray), bx(178, 82, 130, 34, 'おだやかな噴火', C.blue, FILL.blue, 13), ...say('1つ分かれば、残りは全部分かる', C.blue, FILL.blue)),
  },
  {
    note: '逆から考えても同じです。激しい噴火なら、ガスが抜けにくい → ねばりけが強い → ドーム状で白っぽい。手がかりが1つあれば、ねばりけを通して、ほかの特徴が決まります。',
    add: fresh(bx(10, 40, 90, 40, '激しい噴火', C.red, FILL.red, 12), ar(102, 60, 118, 60, C.gray), bx(120, 40, 80, 40, 'ねばりけ強', C.red, FILL.red, 12), ar(202, 60, 218, 60, C.gray), bx(220, 40, 90, 40, 'ドーム状\n白っぽい', C.red, FILL.red, 12), ...say('手がかり → ねばりけ → ほかの特徴', C.ink, FILL.yellow)),
  },
]);

// ══ 火成岩のつくりと鉱物 ══
const crystals = (x: number, y: number, w: number, h: number, big: boolean): E[] => {
  const out: E[] = [];
  if (big) {
    const cw = w / 4, ch = h / 3;
    for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) out.push(bx(x + i * cw, y + j * ch, cw, ch, undefined, C.gray, (i + j) % 2 ? FILL.warm : FILL.gray));
  } else {
    out.push(bx(x, y, w, h, undefined, C.gray, FILL.gray));
    out.push(bx(x + 10, y + 10, 30, 20, undefined, C.main, FILL.warm), bx(x + w - 45, y + h - 32, 34, 22, undefined, C.main, FILL.warm));
    for (let i = 0; i < 8; i++) for (let j = 0; j < 4; j++) if ((i + j) % 2 === 0 && x + 12 + i * 15 > x + 45 || j > 1) out.push(ci(x + 8 + i * 15, y + 8 + j * 15, 2, undefined, C.gray, C.gray));
  }
  return out;
};
const kasei: DiagramFigure = show([
  {
    note: 'マグマが冷えて固まった岩石を、火成岩といいます。火成岩は、どこで冷えたかで2つに分けられます。❓では、冷えた場所のちがいは、岩石のどこにあらわれるのでしょう。',
    add: [bx(100, 12, 120, 34, 'マグマ', C.red, FILL.red, 14), ar(130, 48, 70, 76, C.gray), ar(190, 48, 250, 76, C.gray), bx(10, 78, 140, 36, '火山岩（地表近く）', C.main, FILL.warm, 12), bx(170, 78, 140, 36, '深成岩（地下深く）', C.blue, FILL.blue, 12), ...say('冷えた場所で、火山岩と深成岩に分ける', C.ink, FILL.yellow)],
  },
  {
    note: '地表や地表近くでは、マグマは急に冷えます。❓すると、どうなるでしょう。結晶が大きく育つ時間がなく、細かい粒のままで固まります。',
    add: fresh(lb(160, 14, '地表近く：急に冷える', 13, C.red, 'middle', true), ...crystals(80, 34, 160, 90, false), lb(160, 138, '大きな結晶（斑晶）＋ 細かい粒（石基）', 11, C.ink, 'middle'), ...say('急に冷える → 結晶が育つ時間がない', C.red, FILL.red)),
  },
  {
    note: '❓では、なぜ大きな結晶（斑晶）が混じっているのでしょう。斑晶は、地下にいるあいだに、ゆっくり育った部分だからです。噴火で急に冷やされた部分が、細かい石基になります。',
    add: fresh(bx(20, 24, 130, 44, '地下で\nゆっくり冷える', C.blue, FILL.blue, 12), ar(152, 46, 176, 46, C.gray), bx(178, 24, 130, 44, '斑晶\n（大きい結晶）', C.main, FILL.warm, 12), bx(20, 84, 130, 44, '地表で\n急に冷える', C.red, FILL.red, 12), ar(152, 106, 176, 106, C.gray), bx(178, 84, 130, 44, '石基\n（細かい粒）', C.gray, FILL.gray, 12), ...say('斑状組織：斑晶が、石基にちらばる', C.main, FILL.warm)),
  },
  {
    note: '地下深くでは、マグマはゆっくり冷えます。❓すると、どうなるでしょう。結晶が十分な時間をかけて育つので、大きな結晶が、同じくらいの大きさでぎっしり並びます。これが等粒状組織です。',
    add: fresh(lb(160, 14, '地下深く：ゆっくり冷える', 13, C.blue, 'middle', true), ...crystals(80, 34, 160, 90, true), lb(160, 138, '同じくらいの大きな結晶が、びっしり', 11, C.ink, 'middle'), ...say('ゆっくり冷える → 結晶が大きく育つ', C.blue, FILL.blue)),
  },
  {
    note: 'ここまでを表にまとめます。火山岩は斑状組織、深成岩は等粒状組織。組織を見れば、どこで冷えたかが分かります。「急冷＝斑状」「ゆっくり＝等粒状」と覚えれば、まちがえません。',
    add: fresh(bx(10, 14, 145, 30, '火山岩', C.red, FILL.red, 14), bx(165, 14, 145, 30, '深成岩', C.blue, FILL.blue, 14), bx(10, 52, 145, 28, '急に冷えた', C.red, FILL.red, 12), bx(165, 52, 145, 28, 'ゆっくり冷えた', C.blue, FILL.blue, 12), bx(10, 88, 145, 28, '斑状組織', C.red, FILL.red, 13), bx(165, 88, 145, 28, '等粒状組織', C.blue, FILL.blue, 13), ...say('急冷＝斑状（火山岩）／ゆっくり＝等粒状（深成岩）', C.ink, FILL.yellow, 12)),
  },
  {
    note: '火成岩には名前があります。火山岩は、流紋岩・安山岩・玄武岩。深成岩は、花こう岩・閃緑岩（せんりょくがん）・斑れい岩（はんれいがん）です。左から右へ、白っぽい順です。',
    add: fresh(bx(10, 10, 300, 22, '白っぽい ←――――→ 黒っぽい', C.gray, FILL.gray, 11), bx(10, 44, 96, 28, '流紋岩', C.red, FILL.red, 13), bx(112, 44, 96, 28, '安山岩', C.red, FILL.red, 13), bx(214, 44, 96, 28, '玄武岩', C.red, FILL.red, 13), bx(10, 84, 96, 28, '花こう岩', C.blue, FILL.blue, 13), bx(112, 84, 96, 28, '閃緑岩', C.blue, FILL.blue, 13), bx(214, 84, 96, 28, '斑れい岩', C.blue, FILL.blue, 13), lb(160, 130, '上：火山岩　下：深成岩（同じ列は色が同じ）', 11, C.gray, 'middle'), ...say('流紋岩＝花こう岩、玄武岩＝斑れい岩の色', C.ink, FILL.yellow)),
  },
  {
    note: '❓なぜ色がちがうのでしょう。ふくまれる鉱物の割合がちがうからです。無色鉱物（石英・長石）が多いと白っぽく、有色鉱物（黒雲母・角閃石・輝石・カンラン石）が多いと黒っぽくなります。',
    add: fresh(bx(10, 18, 145, 34, '無色鉱物', C.gray, FILL.gray, 13), bx(165, 18, 145, 34, '有色鉱物', C.ink, FILL.gray, 13), bx(10, 60, 145, 48, '石英\n長石', C.gray, FILL.gray, 13), bx(165, 60, 145, 48, '黒雲母・角閃石\n輝石・カンラン石', C.ink, FILL.gray, 11), ...say('無色鉱物が多い → 白っぽい', C.ink, FILL.yellow)),
  },
  {
    note: '色は、二酸化ケイ素の量とも結びつきます。二酸化ケイ素が多いほど、白っぽく、ねばりけが強いマグマです。白っぽい岩石ほど、二酸化ケイ素が多いマグマからできたといえます。',
    add: fresh(bx(20, 24, 130, 44, '二酸化ケイ素\n多い', C.gray, FILL.gray, 13), ar(152, 46, 176, 46, C.gray), bx(178, 24, 130, 44, '白っぽい岩石\n（流紋岩・花こう岩）', C.gray, FILL.gray, 11), bx(20, 84, 130, 44, '二酸化ケイ素\n少ない', C.gray, FILL.gray, 13), ar(152, 106, 176, 106, C.gray), bx(178, 84, 130, 44, '黒っぽい岩石\n（玄武岩・斑れい岩）', C.ink, FILL.gray, 11), ...say('色は、二酸化ケイ素の量で決まる', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。花こう岩はどうでしょう。「花こう岩は深成岩」→ 地下でゆっくり冷えた → 等粒状組織。名前が分かれば、組織も冷え方も分かります。',
    add: fresh(bx(10, 40, 92, 40, '花こう岩', C.blue, FILL.blue, 13), ar(104, 60, 118, 60, C.gray), bx(120, 40, 92, 40, '深成岩', C.blue, FILL.blue, 13), ar(214, 60, 226, 60, C.gray), bx(228, 40, 82, 40, '等粒状', C.blue, FILL.blue, 13), lb(160, 104, '地下でゆっくり冷えた', 13, C.ink, 'middle', true), ...say('花こう岩：深成岩・等粒状・白っぽい', C.blue, FILL.blue)),
  },
  {
    note: '逆の問題です。等粒状組織の岩石は、どこでどう冷えたのでしょう。答えは、地下深くでゆっくり冷えてできた。「斑状組織」なら、地表や地表近くで急に冷えました。',
    add: fresh(bx(20, 24, 130, 40, '等粒状組織', C.blue, FILL.blue, 13), ar(152, 44, 176, 44, C.gray), bx(178, 24, 130, 40, '地下・ゆっくり', C.blue, FILL.blue, 13), bx(20, 84, 130, 40, '斑状組織', C.red, FILL.red, 13), ar(152, 104, 176, 104, C.gray), bx(178, 84, 130, 40, '地表近く・急に', C.red, FILL.red, 13), ...say('組織から、冷え方が分かる', C.ink, FILL.yellow)),
  },
  {
    note: '見分け方の流れです。①つぶの大きさ（組織）を見る → 火山岩か深成岩か。②色を見る → 流紋岩か安山岩か玄武岩か（花こう岩か閃緑岩か斑れい岩か）。組織で2つに分け、色で名前を決めます。',
    add: fresh(bx(10, 30, 92, 44, '①組織を見る', C.blue, FILL.blue, 12), ar(104, 52, 118, 52, C.gray), bx(120, 30, 92, 44, '火山岩か深成岩か', C.main, FILL.warm, 12), ar(214, 52, 226, 52, C.gray), bx(228, 30, 82, 44, '②色を見る', C.red, FILL.red, 12), lb(160, 104, '名前が決まる', 13, C.ink, 'middle', true), ...say('組織で2つに分け、色で名前を決める', C.ink, FILL.yellow)),
  },
]);

// ══ 地震の伝わり方とP波・S波 ══
const zig = (x0: number, y: number, amp: number, n: number, dx: number, color: string = C.ink): E[] => {
  const out: E[] = [];
  let px = x0, py = y;
  for (let i = 1; i <= n; i++) {
    const nx = x0 + i * dx, ny = y + (i % 2 ? -amp : amp);
    out.push(ln(px, py, nx, ny, color, false, 2));
    px = nx; py = ny;
  }
  out.push(ln(px, py, px + dx / 2, y, color, false, 2));
  return out;
};
const jishin: DiagramFigure = show([
  {
    note: '地震が起こると、震源（しんげん）から2つの波が出ます。速い波をP波、遅い波をS波といいます。❓なぜ2つの波を区別するのでしょう。この速さのちがいから、震源までの距離が分かるからです。',
    add: [ci(30, 70, 12, '震', C.red, FILL.red, 11), ln(44, 70, 300, 70, C.gray), ar(56, 50, 200, 50, C.blue), lb(210, 50, 'P波（速い）', 12, C.blue, 'start', true), ar(56, 92, 120, 92, C.red), lb(130, 92, 'S波（遅い）', 12, C.red, 'start', true), ...say('P波は速い、S波は遅い', C.ink, FILL.yellow)],
  },
  {
    note: '速さは、P波がおよそ毎秒6〜8km、S波がおよそ毎秒3〜4kmです。❓なぜP波が先に着くのでしょう。同じ道のりを、P波のほうが速く進むからです。かけっこで速い人が先にゴールするのと同じです。',
    add: fresh(ci(30, 70, 12, '震', C.red, FILL.red, 11), ln(44, 70, 300, 70, C.gray), ci(230, 50, 9, 'P', C.blue, FILL.blue, 10), ci(140, 90, 9, 'S', C.red, FILL.red, 10), lb(160, 122, 'P波が先に、S波があとから着く', 13, C.ink, 'middle', true), ...say('P：毎秒6〜8km ／ S：毎秒3〜4km', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。P波が毎秒8km、S波が毎秒4kmで、震源距離が80kmの地点を考えます。まず、P波が着くまでの時間は、80 ÷ 8 ＝ 10秒です。',
    add: fresh(ci(30, 70, 12, '震', C.red, FILL.red, 11), ln(44, 70, 290, 70, C.gray), lb(290, 88, '80km', 12, C.ink, 'middle', true), ar(44, 50, 288, 50, C.blue), lb(160, 36, 'P波：毎秒8km', 12, C.blue, 'middle', true), ...say('P波：80 ÷ 8 ＝ 10秒', C.blue, FILL.blue, 15)),
  },
  {
    note: '次に、S波が着くまでの時間は、80 ÷ 4 ＝ 20秒です。❓P波と比べて、どうなっているでしょう。同じ距離でも、S波は10秒あとに着きます。',
    add: fresh(ci(30, 70, 12, '震', C.red, FILL.red, 11), ln(44, 70, 290, 70, C.gray), lb(290, 88, '80km', 12, C.ink, 'middle', true), ar(44, 50, 288, 50, C.blue, true), ar(44, 100, 288, 100, C.red), lb(160, 118, 'S波：毎秒4km', 12, C.red, 'middle', true), ...say('S波：80 ÷ 4 ＝ 20秒', C.red, FILL.red, 15)),
  },
  {
    note: 'P波が着いてから、S波が着くまでの時間を、初期微動継続時間といいます。この例では、20 − 10 ＝ 10秒です。P波が来た瞬間から、S波が来るまでの「待ち時間」のことです。',
    add: fresh(ln(20, 90, 300, 90, C.gray), ln(60, 84, 60, 96, C.blue, false, 3), lb(60, 110, '0秒', 11, C.gray, 'middle'), ln(150, 84, 150, 96, C.blue, false, 3), lb(150, 110, 'P波 10秒', 11, C.blue, 'middle', true), ln(270, 84, 270, 96, C.red, false, 3), lb(270, 110, 'S波 20秒', 11, C.red, 'middle', true), ar(150, 60, 268, 60, C.ink), lb(210, 46, '初期微動継続時間 10秒', 12, C.ink, 'middle', true), ...say('20 − 10 ＝ 10秒（S波の時刻 − P波の時刻）', C.ink, FILL.yellow, 12)),
  },
  {
    note: '❓なぜこの時間は、震源から遠いほど長くなるのでしょう。遠いほど、P波とS波の走る時間が長くなり、速さのちがいの分だけ差が広がるからです。かけっこの距離が長いほど、差が開くのと同じです。',
    add: fresh(bx(20, 12, 90, 26, '距離 40km', C.gray, FILL.gray, 12), bx(120, 12, 90, 26, 'P 5秒', C.blue, FILL.blue, 12), bx(220, 12, 90, 26, 'S 10秒', C.red, FILL.red, 12), bx(20, 48, 90, 26, '距離 80km', C.gray, FILL.gray, 12), bx(120, 48, 90, 26, 'P 10秒', C.blue, FILL.blue, 12), bx(220, 48, 90, 26, 'S 20秒', C.red, FILL.red, 12), lb(160, 100, '差は 5秒 → 10秒（距離が2倍で、差も2倍）', 12, C.ink, 'middle', true), ...say('初期微動継続時間は、震源距離に比例', C.ink, FILL.yellow)),
  },
  {
    note: '❓この関係が分かると、何ができるのでしょう。逆算して、震源までの距離が求められます。この例では、差が1秒ふえるごとに距離が8kmふえるので、差が10秒なら、8 × 10 ＝ 80kmです。',
    add: fresh(bx(20, 24, 130, 40, '差 10秒', C.ink, FILL.gray, 14), ar(152, 44, 176, 44, C.gray), bx(178, 24, 130, 40, '距離 80km', C.green, FILL.green, 14), lb(160, 100, '差1秒あたり8km（P波8・S波4のとき）', 12, C.ink, 'middle'), lb(160, 122, '8 × 10 ＝ 80km', 14, C.green, 'middle', true), ...say('待ち時間が分かれば、距離が分かる', C.green, FILL.green)),
  },
  {
    note: 'ゆれ方も、2つの波でちがいます。P波が起こす、最初の小さなゆれが初期微動。S波が起こす、あとから来る大きなゆれが主要動です。❓なぜ小さなゆれが先なのでしょう。P波のほうが先に届くからです。',
    add: fresh(...zig(20, 70, 6, 12, 10, C.blue), ...zig(140, 70, 30, 8, 14, C.red), lb(75, 118, '初期微動（小）', 11, C.blue, 'middle', true), lb(220, 118, '主要動（大）', 11, C.red, 'middle', true), lb(60, 30, 'P波', 12, C.blue, 'middle', true), lb(200, 30, 'S波', 12, C.red, 'middle', true), ...say('最初に小さく、あとから大きくゆれる', C.ink, FILL.yellow)),
  },
  {
    note: '大きさを表す言葉も区別します。マグニチュードは地震そのものの規模（大きさ）で、1つの地震に1つだけ。震度は、その場所でのゆれの大きさで、場所ごとにちがいます。',
    add: fresh(bx(10, 20, 145, 36, 'マグニチュード', C.red, FILL.red, 13), bx(165, 20, 145, 36, '震度', C.blue, FILL.blue, 13), bx(10, 64, 145, 50, '地震の規模\n1つの地震に1つ', C.red, FILL.red, 12), bx(165, 64, 145, 50, 'その場所のゆれ\n場所ごとにちがう', C.blue, FILL.blue, 12), ...say('マグニチュードは1つ、震度は場所ごと', C.ink, FILL.yellow)),
  },
  {
    note: '❓緊急地震速報は、どんなしくみでしょう。P波がS波より速いことを利用しています。先に届くP波をとらえて、大きなゆれ（S波）が来る前に知らせます。',
    add: fresh(ci(30, 60, 12, '震', C.red, FILL.red, 11), ln(44, 60, 300, 60, C.gray), ci(190, 60, 9, 'P', C.blue, FILL.blue, 10), ci(100, 60, 9, 'S', C.red, FILL.red, 10), bx(210, 82, 100, 30, '観測して速報', C.green, FILL.green, 12), ar(190, 72, 230, 82, C.green), ...say('P波を先にとらえ、S波の前に知らせる', C.green, FILL.green)),
  },
  {
    note: 'まとめます。P波は速く小さなゆれ（初期微動）、S波は遅く大きなゆれ（主要動）。その待ち時間（初期微動継続時間）は、震源距離に比例します。マグニチュードは1つ、震度は場所ごと。',
    add: fresh(bx(10, 12, 300, 30, 'P波：速い・初期微動　S波：遅い・主要動', C.ink, FILL.gray, 11), bx(10, 48, 300, 30, '待ち時間（初期微動継続時間）＝ 震源距離に比例', C.ink, FILL.gray, 11), bx(10, 84, 300, 30, 'マグニチュードは1つ、震度は場所ごと', C.ink, FILL.gray, 11), ...say('速さのちがい → 待ち時間 → 距離', C.ink, FILL.yellow)),
  },
]);

// ══ プレートと大地の動き ══
const slab = (): E[] => [
  pg([[6, 72], [140, 72], [232, 138], [222, 146], [128, 92], [6, 92]], C.blue, FILL.blue),
  pg([[140, 72], [314, 72], [314, 140], [232, 138]], C.main, FILL.warm),
  lb(60, 84, '海洋プレート', 10, C.blue, 'middle', true), lb(262, 100, '大陸プレート', 11, C.main, 'middle', true),
];
const plate: DiagramFigure = show([
  {
    note: '日本列島は、4つのプレート（北アメリカ・ユーラシア・太平洋・フィリピン海）が接する場所にあります。❓なぜそれが、地震や火山が多い理由になるのでしょう。プレートどうしが押し合う境界だからです。',
    add: [bx(8, 20, 144, 40, '北アメリカ', C.main, FILL.warm, 12), bx(168, 20, 144, 40, 'ユーラシア', C.main, FILL.warm, 12), bx(8, 68, 144, 40, '太平洋', C.blue, FILL.blue, 12), bx(168, 68, 144, 40, 'フィリピン海', C.blue, FILL.blue, 12), ci(160, 64, 14, '日本', C.red, FILL.red, 9), ...say('4つのプレートが集まる場所に、日本はある', C.ink, FILL.yellow)],
  },
  {
    note: '断面図で見ます。海底の海洋プレートは、1年に数cmの速さで動いています。❓なぜ動くのでしょう。地球の内部で、プレートを押す動きが続いているからです。',
    add: fresh(...slab(), ar(20, 60, 100, 60, C.blue), lb(60, 48, '動きつづける', 11, C.blue, 'middle', true), ...say('海洋プレートは、ゆっくり動きつづける', C.blue, FILL.blue)),
  },
  {
    note: '❓動いた海洋プレートは、どうなるのでしょう。大陸プレートにぶつかり、その下にしずみこみます。海洋プレートのほうが重いので、大陸プレートの下にもぐるのです。しずみこむ場所が、海溝（かいこう）です。',
    add: fresh(...slab(), ar(170, 60, 210, 96, C.blue), lb(140, 58, '海溝', 12, C.red, 'middle', true), lb(210, 122, 'しずみこみ', 11, C.blue, 'start', true), ...say('海洋プレートが、大陸プレートの下にしずみこむ', C.blue, FILL.blue)),
  },
  {
    note: '❓しずみこむとき、大陸プレートには何が起こるのでしょう。海洋プレートに引きずりこまれて、大陸プレートの端がゆがみ、ひずみがたまっていきます。',
    add: fresh(...slab(), ar(232, 90, 194, 110, C.red), lb(232, 62, 'ひずみがたまる', 11, C.red, 'middle', true), ...say('引きずりこまれて、ひずみがたまる', C.red, FILL.red)),
  },
  {
    note: '❓ひずみは、どうなるのでしょう。限界をこえると、大陸プレートがいっきに跳ね返ります。これが海溝型地震です。プレートの境界で起こるので、規模が大きくなります。',
    add: fresh(...slab(), ar(200, 86, 250, 62, C.red), lb(250, 50, '跳ね返る', 12, C.red, 'middle', true), ...say('限界で跳ね返る → 海溝型地震（規模が大きい）', C.red, FILL.red, 12)),
  },
  {
    note: '海溝型地震は、海底の大きな範囲がずれ動くので、海水がもち上げられて津波（つなみ）を起こすことがあります。だから海溝型地震では、津波への注意が大切です。',
    add: fresh(...slab(), pg([[6, 62], [50, 46], [100, 62]], C.blue, FILL.blue), ar(100, 54, 150, 54, C.blue), lb(60, 34, '津波', 12, C.blue, 'middle', true), ...say('海溝型：規模が大きく、津波が起こることも', C.blue, FILL.blue)),
  },
  {
    note: '別の地震もあります。プレートの内側（陸地の地下）にできた、活断層のずれで起こる内陸型地震です。❓なぜ被害が大きいのでしょう。震源が浅く、真上の地表が強くゆれるからです。',
    add: fresh(pg([[10, 60], [310, 60], [310, 140], [10, 140]], C.main, FILL.warm), ln(160, 60, 200, 130, C.red, false, 3), ci(190, 112, 6, undefined, C.red, FILL.red), ar(190, 104, 190, 66, C.red), lb(160, 44, '真上が強くゆれる', 12, C.red, 'middle', true), lb(250, 92, '活断層', 12, C.red, 'start', true), ...say('内陸型：震源が浅く、局地的に大きな被害', C.red, FILL.red)),
  },
  {
    note: '❓活断層とは何でしょう。過去にくり返しずれ、今後も動く可能性がある断層です。過去に動いた証拠が残っているので、これからも動くかもしれないと考えるのです。',
    add: fresh(bx(20, 30, 130, 40, '過去にくり返し\nずれた断層', C.gray, FILL.gray, 12), ar(152, 50, 176, 50, C.gray), bx(178, 30, 130, 40, '今後も動く\n可能性がある', C.red, FILL.red, 12), lb(160, 104, '＝ 活断層', 15, C.red, 'middle', true), ...say('活断層：今後も動く可能性のある断層', C.red, FILL.red)),
  },
  {
    note: '❓しずみこみは、地震のほかに何を生むのでしょう。しずみこんだプレートが地下の深いところで熱せられ、マグマができます。そのマグマが上がって、火山ができます。',
    add: fresh(...slab(), ci(200, 100, 7, undefined, C.red, FILL.red), ar(200, 92, 200, 76, C.red), pg([[188, 72], [200, 46], [212, 72]], C.red, FILL.red), lb(200, 36, '火山', 12, C.red, 'middle', true), lb(190, 104, 'マグマ', 11, C.red, 'end', true), ...say('しずみこみ → マグマ → 火山', C.red, FILL.red)),
  },
  {
    note: '2つの地震を比べます。海溝型は、プレートの境界で起こり、規模が大きく、津波がある。内陸型は、活断層のずれで起こり、震源が浅く、局地的に大きな被害が出ます。',
    add: fresh(bx(10, 14, 145, 30, '海溝型', C.blue, FILL.blue, 14), bx(165, 14, 145, 30, '内陸型', C.main, FILL.warm, 14), bx(10, 52, 145, 26, '境界で起こる', C.blue, FILL.blue, 12), bx(165, 52, 145, 26, '活断層のずれ', C.main, FILL.warm, 12), bx(10, 84, 145, 26, '規模が大きい・津波', C.blue, FILL.blue, 11), bx(165, 84, 145, 26, '震源が浅い', C.main, FILL.warm, 12), ...say('海溝型＝規模大・津波、内陸型＝震源浅い', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。「日本に地震や火山が多いのはなぜ？」→ 複数のプレートが接する境界にあり、しずみこみが起こっているからです。しずみこみが、地震もマグマ（火山）も生みます。',
    add: fresh(bx(10, 40, 92, 40, '複数のプレートが接する', C.gray, FILL.gray, 10), ar(104, 60, 118, 60, C.gray), bx(120, 40, 92, 40, 'しずみこみ', C.blue, FILL.blue, 13), ar(214, 60, 226, 60, C.gray), bx(228, 40, 82, 40, '地震・火山', C.red, FILL.red, 12), ...say('しずみこみが、地震も火山も生む', C.ink, FILL.yellow)),
  },
]);

// ══ 堆積岩の種類と見分け方 ══
const grains = (x: number, y: number, r: number, n: number, gap: number, color: string, fill: string): E[] => Array.from({ length: n }, (_, i) => ci(x + i * gap, y, r, undefined, color, fill));
const taiseki: DiagramFigure = show([
  {
    note: '堆積岩（たいせきがん）は、れき・砂・泥や、生物の死がい、火山灰などが積もって固まった岩石です。❓ふつうの岩石とのちがいは、どこで見分けられるのでしょう。まず、粒の形に注目します。',
    add: [bx(10, 20, 96, 40, 'れき・砂・泥', C.main, FILL.warm, 12), bx(112, 20, 96, 40, '生物の死がい', C.green, FILL.green, 12), bx(214, 20, 96, 40, '火山灰', C.red, FILL.red, 12), ar(160, 64, 160, 88, C.gray), lb(172, 76, '積もって固まる', 11, C.gray, 'start'), bx(90, 92, 140, 30, '堆積岩', C.ink, FILL.gray, 14), ...say('積もって固まったものが、堆積岩', C.ink, FILL.yellow)],
  },
  {
    note: '堆積岩の粒は、丸みを帯びています。❓なぜ丸いのでしょう。川の流れで運ばれるあいだに、ほかの粒とぶつかり合って、角が削られるからです。',
    add: fresh(pg([[30, 60], [50, 34], [76, 60], [56, 82]], C.gray, FILL.gray), ar(84, 60, 130, 60, C.blue), lb(108, 46, '流水', 11, C.blue, 'middle', true), ci(180, 60, 22, undefined, C.gray, FILL.gray), ci(250, 60, 22, undefined, C.gray, FILL.gray), lb(215, 100, '運ばれて、角が取れる', 12, C.ink, 'middle', true), ...say('流水で運ばれた粒は、丸くなる', C.blue, FILL.blue)),
  },
  {
    note: '粒の大きさで、3つに分けます。2mm以上がれき岩、2mm〜1/16mmが砂岩、それより細かいのが泥岩です。❓どうして粒の大きさで分けるのでしょう。次の絵で、その理由を見ます。',
    add: fresh(bx(10, 14, 96, 26, 'れき岩', C.main, FILL.warm, 13), bx(112, 14, 96, 26, '砂岩', C.main, FILL.warm, 13), bx(214, 14, 96, 26, '泥岩', C.main, FILL.warm, 13), ...grains(40, 74, 16, 2, 44, C.gray, FILL.gray), ...grains(140, 74, 7, 4, 22, C.gray, FILL.gray), ...grains(232, 74, 2, 8, 9, C.gray, FILL.gray), lb(58, 108, '2mm以上', 12, C.ink, 'middle'), lb(160, 108, '2〜1/16mm', 12, C.ink, 'middle'), lb(260, 108, 'もっと細かい', 12, C.ink, 'middle'), ...say('れき岩 ＞ 砂岩 ＞ 泥岩（粒の大きさ）', C.main, FILL.warm)),
  },
  {
    note: '川が海に注ぐと、流れがゆるくなります。❓すると、粒はどうなるでしょう。大きい粒は重いので、河口の近くですぐしずみます。細かい粒は軽いので、遠くまで運ばれてから、しずみます。',
    add: fresh(ln(10, 50, 310, 50, C.blue), pg([[10, 50], [310, 50], [310, 130], [90, 130], [10, 90]], C.gray, FILL.blue), lb(40, 40, '河口', 11, C.gray, 'middle', true), ci(50, 80, 9, undefined, C.main, FILL.warm), ci(140, 100, 5, undefined, C.main, FILL.warm), ci(250, 118, 2, undefined, C.main, FILL.warm), lb(50, 100, 'れき', 11, C.ink, 'middle'), lb(140, 118, '砂', 11, C.ink, 'middle'), lb(250, 134, '泥', 11, C.ink, 'middle'), ...say('大きい粒ほど、河口の近くにしずむ', C.blue, FILL.blue)),
  },
  {
    note: 'つまり、河口から遠い深い海の底には、いちばん細かい泥がたまります。だから、泥岩は河口から遠く、深いところでできた岩石です。「粒の大きさ ＝ 河口からの距離」と考えます。',
    add: fresh(bx(10, 30, 92, 34, 'れき岩', C.main, FILL.warm, 13), bx(114, 30, 92, 34, '砂岩', C.main, FILL.warm, 13), bx(218, 30, 92, 34, '泥岩', C.main, FILL.warm, 13), ar(56, 90, 264, 90, C.blue), lb(56, 108, '河口に近い', 12, C.ink, 'middle', true), lb(264, 108, '遠い・深い', 12, C.ink, 'middle', true), ...say('河口から遠い深い海には、泥岩', C.blue, FILL.blue)),
  },
  {
    note: '生物の死がいからできる堆積岩もあります。石灰岩とチャートです。❓どちらも見た目が似ているのに、どう見分けるのでしょう。うすい塩酸をかけて、反応を見ます。',
    add: fresh(bx(20, 24, 130, 40, '石灰岩', C.green, FILL.green, 14), bx(170, 24, 130, 40, 'チャート', C.green, FILL.green, 14), lb(160, 92, 'どちらも生物の死がいからできる', 12, C.ink, 'middle', true), lb(160, 116, 'うすい塩酸をかけて見分ける', 12, C.blue, 'middle', true), ...say('石灰岩とチャートは、塩酸で見分ける', C.blue, FILL.blue)),
  },
  {
    note: '石灰岩は、塩酸をかけると二酸化炭素の泡が出ます。❓なぜ泡が出るのでしょう。石灰岩は、サンゴなどの殻の成分（炭酸カルシウム）でできていて、塩酸と反応して二酸化炭素を出すからです。',
    add: fresh(bx(40, 76, 100, 40, '石灰岩', C.green, FILL.green, 14), ci(70, 60, 5, undefined, C.blue), ci(90, 50, 4, undefined, C.blue), ci(108, 62, 5, undefined, C.blue), lb(90, 30, '泡（二酸化炭素）', 12, C.blue, 'middle', true), bx(190, 76, 100, 40, 'チャート', C.green, FILL.green, 14), lb(240, 60, '反応しない', 12, C.gray, 'middle', true), ...say('泡が出れば石灰岩、出なければチャート', C.blue, FILL.blue)),
  },
  {
    note: 'かたさもちがいます。チャートは非常にかたく、石灰岩はやわらかいです。❓なぜチャートはかたいのでしょう。ケイ素をふくむ、とてもかたい殻（放散虫など）が積もったものだからです。',
    add: fresh(bx(20, 30, 130, 44, 'チャート', C.green, FILL.green, 14), bx(170, 30, 130, 44, '石灰岩', C.green, FILL.green, 14), lb(85, 100, '非常にかたい', 13, C.red, 'middle', true), lb(235, 100, 'やわらかい', 13, C.blue, 'middle', true), ...say('チャート＝かたい、石灰岩＝やわらかい', C.ink, FILL.yellow)),
  },
  {
    note: '火山灰が固まった岩石は、凝灰岩（ぎょうかいがん）です。❓凝灰岩の粒はなぜ角ばっているのでしょう。流水で運ばれず、火山灰が空から降り積もっただけなので、角が取れていないからです。',
    add: fresh(bx(20, 24, 130, 34, '火山灰が降り積もる', C.red, FILL.red, 12), ar(152, 41, 176, 41, C.gray), bx(178, 24, 130, 34, '凝灰岩', C.red, FILL.red, 14), pg([[60, 100], [80, 76], [104, 100], [84, 120]], C.gray, FILL.gray), pg([[130, 104], [148, 80], [172, 96], [160, 120]], C.gray, FILL.gray), lb(250, 100, '角ばった粒', 13, C.red, 'middle', true), ...say('凝灰岩：角ばった粒（流水を受けていない）', C.red, FILL.red)),
  },
  {
    note: '見分け方の流れです。①粒が丸い・大きさがある → れき・砂・泥のどれか。②塩酸で泡 → 石灰岩。③反応なくてかたい → チャート。④角ばった粒 → 凝灰岩。順に考えれば見分けられます。',
    add: fresh(bx(20, 10, 280, 24, '① 粒が丸い → れき岩・砂岩・泥岩（粒の大きさで）', C.main, FILL.warm, 10), bx(20, 40, 280, 24, '② 塩酸で泡が出る → 石灰岩', C.green, FILL.green, 11), bx(20, 70, 280, 24, '③ 反応しない・かたい → チャート', C.green, FILL.green, 11), bx(20, 100, 280, 24, '④ 粒が角ばっている → 凝灰岩', C.red, FILL.red, 11), ...say('順に見分ける', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。「塩酸をかけて泡が出た」→ 石灰岩。「河口から遠い深い海」→ 泥岩。「角ばった粒がある」→ 凝灰岩で、これは近くで噴火があったことの証拠です。',
    add: fresh(bx(20, 14, 280, 30, '塩酸で泡が出た → 石灰岩', C.green, FILL.green, 12), bx(20, 52, 280, 30, '河口から遠い深い海 → 泥岩', C.main, FILL.warm, 12), bx(20, 90, 280, 30, '角ばった粒 → 凝灰岩（噴火の証拠）', C.red, FILL.red, 12), ...say('特徴から、岩石の名前を答える', C.ink, FILL.yellow)),
  },
]);

// ══ 地層の読み取りと柱状図 ══
const layers = (x: number, y: number, w: number, hs: number[], fills: string[], names?: string[]): E[] => {
  let yy = y;
  const out: E[] = [];
  hs.forEach((h, i) => {
    out.push(bx(x, yy, w, h, names?.[i], C.gray, fills[i], 11));
    yy += h;
  });
  return out;
};
const chisou: DiagramFigure = show([
  {
    note: '地層（ちそう）は、川や海の底に、粒が積もってできます。❓積もる順番は、どうなるでしょう。先に積もったものの上に、あとから積もるので、下の層ほど古く、上の層ほど新しくなります。',
    add: [...layers(90, 20, 140, [30, 30, 30], [FILL.warm, FILL.yellow, FILL.gray], ['新しい（上）', '', '古い（下）']), ar(250, 22, 250, 100, C.red), lb(258, 60, '時間', 11, C.red, 'start', true), ...say('下の層ほど古く、上ほど新しい', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ下が古いと言い切れるのでしょう。下の層がなければ、上の層は積もれないからです。積み木を下から順に積むのと同じで、あとから積むものは必ず上にのります。',
    add: fresh(bx(100, 96, 120, 26, '①先に積もる', C.gray, FILL.gray, 12), bx(100, 66, 120, 26, '②その上に積もる', C.gray, FILL.warm, 12), bx(100, 36, 120, 26, '③さらにその上', C.gray, FILL.yellow, 12), ...say('あとから積もるものは、必ず上にのる', C.ink, FILL.yellow)),
  },
  {
    note: 'ただし例外があります。大きな力で地層が曲がったり、ひっくり返ったりすると、上下が逆になります（地層の逆転）。ふつうは「下ほど古い」で考えますが、逆転がないことが前提です。',
    add: fresh(...layers(90, 22, 140, [30, 30, 30], [FILL.warm, FILL.yellow, FILL.gray]), lb(160, 128, 'ふつうは 下ほど古い', 12, C.ink, 'middle', true), ...say('下ほど古い（逆転がなければ）', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。下から順に、れき岩・砂岩・泥岩と重なっていました。粒は、下から上へ、だんだん細かくなっています。❓これは、何を表しているのでしょう。海の深さの変化です。',
    add: fresh(...layers(70, 20, 140, [30, 30, 30], [FILL.gray, FILL.yellow, FILL.warm], ['泥岩（上）', '砂岩', 'れき岩（下）']), ar(250, 106, 250, 26, C.red), lb(258, 66, '時間', 11, C.red, 'start', true), ...say('下から：れき岩 → 砂岩 → 泥岩', C.ink, FILL.yellow)),
  },
  {
    note: '❓粒が細かくなると、なぜ深くなったといえるのでしょう。細かい粒ほど、河口から遠い深い海に積もるからです。だから上に向かって細かくなるなら、海はだんだん深くなっています。',
    add: fresh(bx(10, 14, 92, 30, 'れき（河口近く）', C.main, FILL.warm, 10), bx(114, 14, 92, 30, '砂', C.main, FILL.warm, 12), bx(218, 14, 92, 30, '泥（遠く・深い）', C.main, FILL.warm, 10), ar(56, 64, 264, 64, C.blue), lb(160, 82, '時間がたつと、深いほうへ', 12, C.blue, 'middle', true), ...say('上へ細かくなる ＝ だんだん深くなった', C.blue, FILL.blue)),
  },
  {
    note: '逆に、粒が上に向かって粗く（あらく）なっていたら、海はだんだん浅くなっています。河口に近づくと、大きな粒が積もるからです。「細かい＝深い」「粗い＝浅い」と覚えます。',
    add: fresh(...layers(70, 20, 140, [30, 30, 30], [FILL.warm, FILL.yellow, FILL.gray], ['れき岩（上）', '砂岩', '泥岩（下）']), ar(250, 106, 250, 26, C.red), lb(258, 66, '時間', 11, C.red, 'start', true), ...say('上へ粗くなる ＝ だんだん浅くなった', C.red, FILL.red)),
  },
  {
    note: '別の場所の地層と、同じ時期を比べたいときがあります。❓何を目印にすればよいでしょう。同じ時期にできたと分かる、特徴のある層です。その層を、かぎ層といいます。',
    add: fresh(...layers(20, 30, 100, [30, 26, 30], [FILL.warm, FILL.red, FILL.gray]), ...layers(200, 30, 100, [30, 26, 30], [FILL.warm, FILL.red, FILL.gray]), ln(120, 56, 200, 56, C.red, true, 2), lb(160, 20, 'かぎ層', 13, C.red, 'middle', true), ...say('かぎ層：離れた地点を対比する目印', C.red, FILL.red)),
  },
  {
    note: '❓なぜ凝灰岩がかぎ層に向いているのでしょう。火山灰は、噴火のときに広い範囲へ、ほぼ同時に降り積もるからです。離れた場所でも、同じ凝灰岩の層は、同じ時期にできたといえます。',
    add: fresh(pg([[130, 10], [160, 44], [190, 10]], C.red, FILL.red), ar(150, 40, 60, 70, C.red), ar(160, 44, 160, 70, C.red), ar(170, 40, 260, 70, C.red), bx(20, 76, 280, 40, '広い範囲に、ほぼ同時に降り積もる', C.red, FILL.red, 12), ...say('火山灰は同時に広がる → かぎ層に最適', C.red, FILL.red)),
  },
  {
    note: '柱状図（ちゅうじょうず）は、地層の重なりを1本の柱で表した図です。2つの柱状図を比べるときは、まず標高をそろえます。❓なぜでしょう。地表の高さがちがうと、同じ深さでも同じ時期とは限らないからです。',
    add: fresh(...layers(50, 30, 70, [30, 24, 40], [FILL.warm, FILL.red, FILL.gray]), ...layers(200, 46, 70, [20, 24, 40], [FILL.warm, FILL.red, FILL.gray]), ln(20, 30, 300, 30, C.gray, true), lb(30, 24, '標高', 10, C.gray, 'start'), lb(85, 140, 'A地点', 12, C.ink, 'middle', true), lb(235, 142, 'B地点', 12, C.ink, 'middle', true), ...say('柱状図は、標高をそろえてから比べる', C.ink, FILL.yellow)),
  },
  {
    note: '標高をそろえたら、かぎ層（赤い層）を目印に結びます。かぎ層より下の層は、どちらの地点でも古く、上の層は新しいと分かります。かぎ層の上下の重なりを見れば、地層のようすが比べられます。',
    add: fresh(...layers(50, 30, 70, [30, 24, 40], [FILL.warm, FILL.red, FILL.gray]), ...layers(200, 46, 70, [14, 24, 40], [FILL.warm, FILL.red, FILL.gray]), ln(120, 42, 200, 58, C.red, false, 2), lb(160, 16, 'かぎ層で結ぶ', 12, C.red, 'middle', true), ...say('かぎ層で結んで、同じ時期をそろえる', C.red, FILL.red)),
  },
  {
    note: 'まとめます。下ほど古い。上へ細かくなれば深くなり、粗くなれば浅くなる。凝灰岩はかぎ層。柱状図は標高をそろえてから比べる。この4点を、理由といっしょに答えられれば十分です。',
    add: fresh(bx(10, 12, 300, 26, '下ほど古い（逆転がなければ）', C.ink, FILL.gray, 11), bx(10, 42, 300, 26, '細かくなる＝深くなる／粗くなる＝浅くなる', C.ink, FILL.gray, 11), bx(10, 72, 300, 26, '凝灰岩＝かぎ層（火山灰は同時に広がる）', C.ink, FILL.gray, 11), bx(10, 102, 300, 26, '柱状図は標高をそろえて比べる', C.ink, FILL.gray, 11), ...say('理由といっしょに、4点を覚える', C.ink, FILL.yellow)),
  },
]);

// ══ 化石からわかること ══
const kaseki: DiagramFigure = show([
  {
    note: '化石には、2種類あります。示相化石と示準化石です。名前が似ているので、取りちがえやすいところです。❓何がちがうのでしょう。1つずつ、「何が分かるか」で区別します。',
    add: [bx(10, 20, 145, 40, '示相化石', C.blue, FILL.blue, 15), bx(165, 20, 145, 40, '示準化石', C.red, FILL.red, 15), lb(82, 84, '当時の環境が分かる', 12, C.blue, 'middle', true), lb(238, 84, '当時の時代が分かる', 12, C.red, 'middle', true), ...say('示相＝環境、示準＝時代', C.ink, FILL.yellow)],
  },
  {
    note: '示相化石は、限られた環境にしかすめない生物の化石です。❓なぜ、そんな生物の化石だと環境が分かるのでしょう。その生物がいた場所は、その環境だったと言えるからです。',
    add: fresh(bx(20, 24, 130, 40, '限られた環境にしか\nすめない生物', C.blue, FILL.blue, 12), ar(152, 44, 176, 44, C.gray), bx(178, 24, 130, 40, '化石が出た\n＝ その環境だった', C.blue, FILL.blue, 12), lb(160, 104, 'すめる場所が決まっているから', 13, C.ink, 'middle', true), ...say('限られた環境の生物 → 環境が分かる', C.blue, FILL.blue)),
  },
  {
    note: '代表例です。サンゴなら、あたたかく浅い海。シジミなら、河口や湖（塩分のうすい水）。ホタテなら、冷たい海です。生物の好む環境が、そのまま当時の環境の手がかりです。',
    add: fresh(bx(10, 20, 96, 34, 'サンゴ', C.blue, FILL.blue, 13), bx(112, 20, 96, 34, 'シジミ', C.blue, FILL.blue, 13), bx(214, 20, 96, 34, 'ホタテ', C.blue, FILL.blue, 13), bx(10, 66, 96, 50, 'あたたかく\n浅い海', C.blue, FILL.blue, 12), bx(112, 66, 96, 50, '河口や湖', C.blue, FILL.blue, 12), bx(214, 66, 96, 50, '冷たい海', C.blue, FILL.blue, 12), ...say('サンゴ：あたたかく浅い海', C.blue, FILL.blue)),
  },
  {
    note: '❓では、山の中の地層からサンゴの化石が出たら、何が分かるでしょう。その場所は、大昔にはあたたかく浅い海だったと分かります。あとで大地が動いて、山になったのです。',
    add: fresh(pg([[20, 116], [70, 40], [130, 116]], C.main, FILL.warm), lb(70, 104, 'サンゴの化石', 11, C.blue, 'middle', true), ar(150, 80, 190, 80, C.gray), bx(196, 50, 110, 60, '大昔は\nあたたかく\n浅い海', C.blue, FILL.blue, 12), ...say('化石から、大昔の環境を読みとる', C.blue, FILL.blue)),
  },
  {
    note: '示準化石は、当時の時代（年代）が分かる化石です。❓どんな生物が示準化石になれるのでしょう。広い範囲にすんでいて、短い期間だけ栄えた（さかえた）生物です。',
    add: fresh(bx(20, 24, 130, 40, '広い範囲に\nすんでいた', C.red, FILL.red, 12), bx(170, 24, 130, 40, '短い期間だけ\n栄えた', C.red, FILL.red, 12), ar(85, 66, 140, 96, C.red), ar(235, 66, 180, 96, C.red), bx(100, 98, 120, 30, '示準化石になる', C.red, FILL.red, 13), ...say('広く分布 ＋ 短期間 → 示準化石', C.red, FILL.red)),
  },
  {
    note: '❓なぜ「広い範囲」が必要なのでしょう。広くすんでいれば、遠く離れた場所の地層でも、同じ化石を見つけて、同じ時代だと比べられるからです。',
    add: fresh(...layers(20, 40, 100, [30, 30, 30], [FILL.warm, FILL.red, FILL.gray]), ...layers(200, 40, 100, [30, 30, 30], [FILL.warm, FILL.red, FILL.gray]), ln(120, 85, 200, 85, C.red, true, 2), lb(160, 30, '同じ化石が見つかる', 12, C.red, 'middle', true), ...say('広い範囲 → 離れた地層も同じ時代と分かる', C.red, FILL.red)),
  },
  {
    note: '❓なぜ「短い期間」が必要なのでしょう。何億年も続いた生物の化石だと、「その間のいつか」としか分かりません。短い期間だけなら、時代をせまく決められるからです。',
    add: fresh(ln(20, 60, 300, 60, C.gray), bx(20, 40, 260, 14, undefined, C.gray, FILL.gray), lb(150, 30, '長く栄えた生物：いつか分からない', 11, C.gray, 'middle'), bx(120, 80, 30, 14, undefined, C.red, FILL.red), lb(135, 112, '短い期間だけ：時代がせまく決まる', 12, C.red, 'middle', true), ...say('短い期間だけ栄えた生物が、時代の目印', C.red, FILL.red)),
  },
  {
    note: '主な示準化石です。古生代は、サンヨウチュウとフズリナ。中生代は、アンモナイトと恐竜。新生代は、ビカリアとナウマンゾウ。時代の順は、古生代 → 中生代 → 新生代です。',
    add: fresh(bx(10, 14, 96, 30, '古生代', C.gray, FILL.gray, 14), bx(112, 14, 96, 30, '中生代', C.main, FILL.warm, 14), bx(214, 14, 96, 30, '新生代', C.blue, FILL.blue, 14), bx(10, 52, 96, 56, 'サンヨウチュウ\nフズリナ', C.gray, FILL.gray, 11), bx(112, 52, 96, 56, 'アンモナイト\n恐竜', C.main, FILL.warm, 11), bx(214, 52, 96, 56, 'ビカリア\nナウマンゾウ', C.blue, FILL.blue, 11), ar(58, 120, 264, 120, C.ink), ...say('古い ← 古生代・中生代・新生代 → 新しい', C.ink, FILL.yellow, 12)),
  },
  {
    note: '例題です。アンモナイトの化石が出た地層は、いつの時代でしょう。アンモナイトは、中生代の示準化石です。だから、その地層は中生代にできたと分かります。',
    add: fresh(bx(10, 40, 96, 40, 'アンモナイト', C.main, FILL.warm, 12), ar(108, 60, 122, 60, C.gray), bx(124, 40, 92, 40, '中生代の\n示準化石', C.main, FILL.warm, 12), ar(218, 60, 232, 60, C.gray), bx(234, 40, 76, 40, '中生代', C.main, FILL.warm, 14), ...say('アンモナイト → 中生代', C.main, FILL.warm)),
  },
  {
    note: '2つの化石の条件は、ちょうど逆です。示相化石は「せまい環境にしかすめない」、示準化石は「広い範囲にすむ」。この逆の関係を頭に入れておけば、取りちがえません。',
    add: fresh(bx(10, 14, 145, 30, '示相化石', C.blue, FILL.blue, 14), bx(165, 14, 145, 30, '示準化石', C.red, FILL.red, 14), bx(10, 52, 145, 28, '狭い環境にしかすめない', C.blue, FILL.blue, 11), bx(165, 52, 145, 28, '広い範囲にすむ', C.red, FILL.red, 12), bx(10, 88, 145, 28, '環境が分かる', C.blue, FILL.blue, 12), bx(165, 88, 145, 28, '時代が分かる', C.red, FILL.red, 12), ...say('条件が逆：狭い環境 と 広い分布', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめます。サンゴの化石は、あたたかく浅い海（示相化石）。サンヨウチュウの化石は、古生代（示準化石）。「環境ならサンゴ、時代ならアンモナイト」のように、代表例をセットで覚えます。',
    add: fresh(bx(20, 14, 280, 30, 'サンゴ・シジミ・ホタテ → 環境（示相）', C.blue, FILL.blue, 11), bx(20, 52, 280, 30, 'サンヨウチュウ・アンモナイト・ビカリア → 時代（示準）', C.red, FILL.red, 10), bx(20, 90, 280, 30, '条件：狭い環境／広い範囲・短期間', C.ink, FILL.gray, 11), ...say('環境か、時代か、を先に考える', C.ink, FILL.yellow)),
  },
]);

// ══ 湿度の計算（中学） ══
const cup = (x: number, y: number, w: number, h: number, fillRatio: number, label?: string): E[] => [
  bx(x, y, w, h, undefined, C.blue, FILL.warm),
  bx(x, y + h * (1 - fillRatio), w, h * fillRatio, undefined, C.blue, FILL.blue),
  ...(label ? [lb(x + w / 2, y + h + 14, label, 11, C.ink, 'middle', true)] : []),
];
const shitsudo: DiagramFigure = show([
  {
    note: '空気には、水蒸気（すいじょうき）がふくまれています。ただし、ふくめる量には限りがあります。その限度いっぱいの量に対して、実際にどれだけふくんでいるかの割合が湿度です。',
    add: [...cup(120, 20, 80, 100, 0.6), lb(160, 138, 'コップ ＝ 空気がふくめる限度', 11, C.ink, 'middle'), lb(226, 84, '水 ＝ 水蒸気', 11, C.blue, 'start', true), ...say('湿度 ＝ 水の量 ÷ コップの大きさ', C.ink, FILL.yellow)],
  },
  {
    note: 'これを式にします。湿度(%) ＝ 空気1m3中の水蒸気量 ÷ その気温での飽和水蒸気量 × 100。❓なぜ「飽和水蒸気量」で割るのでしょう。空気がふくめる最大の量で、割合を出すからです。',
    add: fresh(bx(10, 20, 300, 44, '湿度(%) ＝ 水蒸気量 ÷ 飽和水蒸気量 × 100', C.blue, FILL.blue, 13), bx(10, 76, 145, 44, '分子＝今ふくむ量', C.green, FILL.green, 12), bx(165, 76, 145, 44, '分母＝ふくめる最大の量', C.red, FILL.red, 12), ...say('割合 ＝ 今の量 ÷ 最大の量', C.ink, FILL.yellow)),
  },
  {
    note: '❓飽和水蒸気量とは何でしょう。空気1m3がふくむことのできる、水蒸気の最大の量です。これをこえると水蒸気が水滴に変わります。これが分母になります。',
    add: fresh(...cup(120, 20, 80, 100, 1, '飽和（いっぱい）'), lb(160, 70, '最大の量', 12, C.blue, 'middle', true), ar(230, 30, 204, 30, C.red), lb(232, 30, 'これ以上は水滴', 11, C.red, 'start', true), ...say('飽和水蒸気量 ＝ ふくめる最大の量', C.blue, FILL.blue)),
  },
  {
    note: '❓では、飽和水蒸気量は、いつも同じ値でしょうか。いいえ、気温で決まります。表にすると、10℃で9.4g、15℃で12.8g、20℃で17.3g、25℃で23.1g、30℃で30.4g（1m3あたり）です。',
    add: fresh(...[['10℃', 9.4], ['15℃', 12.8], ['20℃', 17.3], ['25℃', 23.1], ['30℃', 30.4]].flatMap(([t, v], i) => [bx(30 + i * 54, 110 - (v as number) * 3, 40, (v as number) * 3, undefined, C.blue, FILL.blue), lb(50 + i * 54, 124, t as string, 10, C.ink, 'middle'), lb(50 + i * 54, 104 - (v as number) * 3, String(v), 10, C.blue, 'middle', true)]), ...say('気温が高いほど、飽和水蒸気量は大きい', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ気温が高いと、大きくなるのでしょう。あたたかい空気は、水蒸気をたくさんふくめるからです。あたたかい空気は「大きなコップ」、冷たい空気は「小さなコップ」だと考えます。',
    add: fresh(...cup(50, 40, 60, 80, 0.5, '30℃（大きい）'), ...cup(190, 70, 40, 50, 0.5, '10℃（小さい）'), ...say('あたたかい空気ほど、大きなコップ', C.main, FILL.warm)),
  },
  {
    note: '例題です。気温20℃（飽和水蒸気量17.3g/m3）で、水蒸気が10.4g/m3ふくまれているときの湿度を求めます。分母は、20℃の飽和水蒸気量の17.3。分子は、実際の水蒸気量の10.4です。',
    add: fresh(...cup(120, 16, 80, 100, 10.4 / 17.3, '20℃'), lb(160, 30, '17.3', 13, C.red, 'middle', true), lb(160, 96, '10.4', 13, C.blue, 'middle', true), ...say('分母17.3（最大）／分子10.4（今の量）', C.ink, FILL.yellow)),
  },
  {
    note: '計算します。10.4 ÷ 17.3 × 100 ＝ 60.1…なので、約60%です。検算すると、17.3の6割は17.3×0.6＝10.38で、10.4にほぼ等しく、合っています。',
    add: fresh(bx(20, 20, 280, 34, '10.4 ÷ 17.3 ＝ 0.601…', C.blue, FILL.blue, 14), bx(20, 62, 280, 34, '0.601 × 100 ＝ 約60%', C.green, FILL.green, 14), lb(160, 122, '検算：17.3 × 0.6 ＝ 10.38 ≒ 10.4', 12, C.ink, 'middle', true), ...say('湿度は、約60%', C.green, FILL.green, 15)),
  },
  {
    note: '湿度100%とは、水蒸気の量が飽和水蒸気量と同じ、いっぱいの状態です。たとえば10℃で9.4g/m3ふくむ空気は、10℃の飽和水蒸気量も9.4gなので、湿度は9.4÷9.4×100＝100%です。',
    add: fresh(...cup(120, 20, 80, 100, 1, '10℃で9.4g'), lb(160, 70, '100%', 16, C.blue, 'middle', true), ...say('湿度100% ＝ 水蒸気が飽和している', C.blue, FILL.blue)),
  },
  {
    note: '❓水蒸気の量を変えずに、気温を上げると、湿度はどうなるでしょう。20℃で10.4gの空気を30℃にすると、分母が30.4gに大きくなり、10.4÷30.4×100＝約34%。湿度は下がります。',
    add: fresh(...cup(30, 30, 70, 90, 10.4 / 17.3, '20℃ 約60%'), ar(112, 76, 178, 76, C.red), lb(146, 64, '温める', 12, C.red, 'middle', true), ...cup(190, 20, 90, 100, 10.4 / 30.4, '30℃ 約34%'), ...say('水蒸気が同じでも、気温が上がると湿度は下がる', C.red, FILL.red, 12)),
  },
  {
    note: '❓冬に暖房をつけると、なぜ部屋がかわくのでしょう。空気の水蒸気の量はほぼ変わらないのに、気温が上がって飽和水蒸気量が大きくなるからです。分母が大きくなり、湿度が下がります。',
    add: fresh(bx(20, 20, 130, 40, '気温 ↑', C.red, FILL.red, 15), ar(152, 40, 176, 40, C.gray), bx(178, 20, 130, 40, '飽和水蒸気量 ↑\n（分母が大きい）', C.red, FILL.red, 11), ar(243, 62, 243, 86, C.gray), bx(178, 88, 130, 34, '湿度 ↓', C.red, FILL.red, 15), ...say('暖房 → 分母が大きくなる → 湿度が下がる', C.red, FILL.red)),
  },
  {
    note: '反対に、10.4gの空気を10℃まで冷やします。10℃の飽和水蒸気量は9.4g。ふくめるのは9.4gまでなので、10.4 − 9.4 ＝ 1.0gが水滴になり、湿度は100%です。',
    add: fresh(...cup(120, 16, 80, 100, 1, '10℃ 湿度100%'), lb(160, 66, '9.4g', 13, C.blue, 'middle', true), ar(160, 14, 160, 4, C.red), lb(262, 60, '1.0gは\n水滴になる', 12, C.red, 'middle', true), ...say('冷やすと、ふくめない分は水滴になる', C.blue, FILL.blue)),
  },
  {
    note: 'まとめます。分母は、その気温の飽和水蒸気量。分子は、実際にふくむ水蒸気量。湿度＝分子÷分母×100。気温が上がると分母が大きくなり、湿度は下がる。この流れをまちがえなければ大丈夫です。',
    add: fresh(bx(10, 12, 300, 30, '分母 ＝ 気温で決まる飽和水蒸気量', C.red, FILL.red, 12), bx(10, 48, 300, 30, '分子 ＝ 実際の水蒸気量', C.green, FILL.green, 12), bx(10, 84, 300, 30, '気温 ↑ → 分母 ↑ → 湿度 ↓', C.blue, FILL.blue, 13), ...say('分母は気温で決まる', C.ink, FILL.yellow)),
  },
]);

export const DIAGRAMS_KOKO_RIKA_OLD_F: Record<string, DiagramFigure> = {
  'メンデルの法則と分離の法則': mendel,
  '遺伝子とDNA': idenshi,
  '食物連鎖と生物の数のつり合い': chain,
  '炭素と酸素の循環': carbon,
  '自然環境と人間のかかわり': kankyo,
  'マグマのねばりけと火山の形': magma,
  '火成岩のつくりと鉱物': kasei,
  '地震の伝わり方とP波・S波': jishin,
  'プレートと大地の動き': plate,
  '堆積岩の種類と見分け方': taiseki,
  '地層の読み取りと柱状図': chisou,
  '化石からわかること': kaseki,
  '湿度の計算（中学）': shitsudo,
};
