// 高校受験 理科（formulas-koko-rika-tsuika.ts）の21番目〜30番目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、根っこまでたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

const BY = 152; // 下の帯の開始位置
type E = DiagramElement;
/** 下の帯に、式やひとことを1つ出す。 */
const say = (text: string, color: string = C.blue, fill: string = FILL.blue, size = 13, y = 166, h = 40): E[] =>
  band(BY, bx(16, y, 288, h, text, color, fill, size));

// ══ 無セキツイ動物のなかまわけ ══
const insect = (x: number, y: number): E[] => [
  ci(x, y, 9, undefined, C.main, FILL.warm), ci(x + 22, y, 12, undefined, C.main, FILL.warm), ci(x + 50, y, 14, undefined, C.main, FILL.warm),
  ...[-9, 0, 9].flatMap((d) => [ln(x + 22 + d, y - 11, x + 22 + d * 1.6, y - 30, C.gray), ln(x + 22 + d, y + 11, x + 22 + d * 1.6, y + 30, C.gray)]),
];
const spider = (x: number, y: number): E[] => [
  ci(x, y, 14, undefined, C.purple, FILL.purple), ci(x + 34, y, 18, undefined, C.purple, FILL.purple),
  ...[-12, -4, 4, 12].flatMap((d) => [ln(x + d, y - 12, x + d * 1.8, y - 32, C.gray), ln(x + d, y + 12, x + d * 1.8, y + 32, C.gray)]),
];
const setsu: DiagramFigure = show([
  {
    note: '動物は、まず「背骨（せぼね）があるか」で大きく分けます。❓では、背骨のない動物はどうやって分けるのでしょう。今日はその中の2つのなかま、節足動物と軟体動物を見ていきます。',
    add: [bx(110, 10, 100, 30, '動物', C.ink, FILL.gray, 14), ar(140, 41, 90, 68, C.gray), ar(180, 41, 230, 68, C.gray), bx(20, 70, 140, 34, '背骨あり\n（セキツイ動物）', C.gray, FILL.gray, 12), bx(180, 70, 130, 34, '背骨なし\n（無セキツイ動物）', C.blue, FILL.blue, 12), ...say('背骨のない動物は、さらにどう分ける？', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ分けるのでしょう。体のつくりが似ている動物どうしは、なかまだと考えられるからです。つくりの目印を見つければ、見たことのない動物でも、どのなかまか当てられます。',
    add: fresh(bx(20, 20, 120, 34, 'つくりが似ている', C.green, FILL.green, 13), ar(142, 37, 178, 37, C.green), bx(180, 20, 120, 34, 'なかま', C.green, FILL.green, 13), bx(20, 80, 120, 34, '目印のつくり', C.blue, FILL.blue, 13), ar(142, 97, 178, 97, C.blue), bx(180, 80, 120, 34, '見分けられる', C.blue, FILL.blue, 13), ...say('目印を覚えると、はじめての動物も分けられる', C.ink, FILL.yellow)),
  },
  {
    note: '背骨のない動物のうち、体をかたい殻でおおい、体とあしに節（ふし）があるものを節足動物といいます。やわらかい体を外とう膜が包み、節がないものを軟体動物といいます。',
    add: fresh(bx(90, 8, 140, 30, '無セキツイ動物', C.blue, FILL.blue, 14), ar(130, 39, 80, 68, C.gray), ar(190, 39, 240, 68, C.gray), bx(10, 70, 140, 40, '節足動物\n外骨格・節あり', C.main, FILL.warm, 13), bx(170, 70, 140, 40, '軟体動物\n外とう膜・節なし', C.green, FILL.green, 13), ...say('目印は「節があるか・外とう膜があるか」', C.ink, FILL.yellow)),
  },
  {
    note: '節足動物は、体の外側にかたい殻（外骨格）があり、体とあしが節に分かれています。❓なぜ外骨格があるのでしょう。骨が体の外にあって、体を守り、支えているからです。',
    add: fresh(...[0, 1, 2, 3].map((i) => bx(70 + i * 44, 40, 40, 34, undefined, C.main, FILL.warm)), ...[0, 1, 2, 3].map((i) => ln(90 + i * 44, 75, 90 + i * 44 + (i % 2 ? 8 : -8), 118, C.gray)), lb(160, 22, '体もあしも節（ふし）に分かれる', 12, C.ink, 'middle', true), ln(66, 34, 250, 34, C.red, true), lb(160, 136, '外側のかたい殻＝外骨格', 12, C.red, 'middle', true), ...say('外骨格は、体を守り、支える「外の骨」', C.main, FILL.warm)),
  },
  {
    note: '❓では、外骨格をもつと、どうやって大きくなるのでしょう。かたい殻は広がらないので、脱皮（だっぴ）して古い殻をぬぎ、新しい大きな殻に着がえながら成長します。',
    add: fresh(bx(30, 40, 70, 50, '小さい殻', C.gray, FILL.gray, 12), ar(104, 65, 136, 65, C.blue), lb(120, 54, '脱皮', 12, C.blue, 'middle', true), bx(140, 30, 90, 70, '大きい殻', C.main, FILL.warm, 13), ...say('脱皮をくり返して大きくなる（節足動物）', C.main, FILL.warm)),
  },
  {
    note: '節足動物は、さらに3つのなかまに分かれます。昆虫類、甲殻類（エビ・カニ・ダンゴムシ）、クモ類です。❓どこで見分けるのでしょう。あしの数と体の部分の数が目印です。',
    add: fresh(bx(90, 8, 140, 28, '節足動物', C.main, FILL.warm, 14), ar(130, 37, 60, 66, C.gray), ar(160, 37, 160, 66, C.gray), ar(190, 37, 260, 66, C.gray), bx(10, 68, 100, 34, '昆虫類', C.main, FILL.warm, 13), bx(110, 68, 100, 34, '甲殻類', C.blue, FILL.blue, 13), bx(210, 68, 100, 34, 'クモ類', C.purple, FILL.purple, 13), lb(60, 118, 'バッタ\nチョウ', 10, C.gray, 'middle'), lb(160, 118, 'エビ・カニ\nダンゴムシ', 10, C.gray, 'middle'), lb(260, 118, 'クモ\nダニ', 10, C.gray, 'middle'), ...say('見分ける目印は、あしの数と体の部分の数', C.ink, FILL.yellow)),
  },
  {
    note: '昆虫類は、体が頭・胸・腹の3つの部分に分かれ、あしは6本で、すべて胸についています。❓なぜ胸なのでしょう。胸には、あしやはねを動かす筋肉が集まっているからです。',
    add: fresh(...insect(90, 78), lb(90, 122, '頭', 11, C.ink), lb(112, 122, '胸', 11, C.red, 'middle', true), lb(140, 122, '腹', 11, C.ink), ...say('昆虫類 ＝ 頭・胸・腹の3つ、あし6本は胸から', C.main, FILL.warm)),
  },
  {
    note: 'クモは、あしが8本で、体は頭胸部（とうきょうぶ）と腹部の2つの部分です。❓では、クモは昆虫でしょうか。あしが6本でも、体が3つでもないので、昆虫ではありません。クモ類という別のなかまです。',
    add: fresh(...spider(100, 78), lb(100, 122, '頭胸部', 11, C.red, 'middle', true), lb(134, 122, '腹部', 11, C.ink), ...say('クモ類 ＝ 体2つ・あし8本 → 昆虫ではない', C.purple, FILL.purple)),
  },
  {
    note: '甲殻類には、エビ・カニ・ダンゴムシなどがいます。あしの数は種類によってちがいますが、体とあしに節があって、外骨格をもつので節足動物です。❓ダンゴムシは陸にすむのに、なぜ昆虫ではないのでしょう。あしが6本ではなく、甲殻類のなかまだからです。',
    add: fresh(bx(20, 30, 84, 44, 'エビ', C.blue, FILL.blue, 14), bx(118, 30, 84, 44, 'カニ', C.blue, FILL.blue, 14), bx(216, 30, 84, 44, 'ダンゴムシ', C.blue, FILL.blue, 13), lb(160, 100, 'すみかではなく、体のつくりで分ける', 12, C.ink, 'middle', true), ...say('陸にすんでも、ダンゴムシは甲殻類', C.blue, FILL.blue)),
  },
  {
    note: '軟体動物は、体に節がなく、内臓を外とう膜という膜が包んでいます。貝・イカ・タコがなかまです。❓貝のからは何でしょう。外とう膜が出す石灰質でできた殻で、節足動物の外骨格とは別のものです。',
    add: fresh(bx(20, 24, 84, 40, '貝', C.green, FILL.green, 14), bx(118, 24, 84, 40, 'イカ', C.green, FILL.green, 14), bx(216, 24, 84, 40, 'タコ', C.green, FILL.green, 14), bx(60, 84, 200, 40, '内臓を外とう膜が包む・節なし', C.green, FILL.green, 12), ar(160, 66, 160, 82, C.green), ...say('軟体動物 ＝ 外とう膜あり・体に節なし', C.green, FILL.green)),
  },
  {
    note: 'まとめて、見分ける順番にします。背骨がなければ無セキツイ動物。体とあしに節があれば節足動物で、あしが6本・体が3部分なら昆虫類です。節がなく外とう膜があれば軟体動物です。',
    add: fresh(bx(10, 10, 92, 34, '背骨なし？', C.blue, FILL.blue, 12), ar(104, 27, 118, 27, C.blue), bx(120, 10, 92, 34, '体とあしに節？', C.main, FILL.warm, 12), ar(214, 27, 228, 27, C.main), bx(230, 10, 82, 34, 'あし6本？', C.red, FILL.red, 12), lb(160, 66, '節あり → 節足動物', 12, C.main, 'middle', true), lb(160, 84, '6本・3部分 → 昆虫類', 12, C.red, 'middle', true), lb(160, 102, '節なし・外とう膜 → 軟体動物', 12, C.green, 'middle', true), ...say('順番に考えると、まちがえない', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。バッタは体が3部分・あし6本の昆虫類、ダンゴムシは甲殻類なので、この2つは節足動物。イカは節がなく外とう膜をもつ軟体動物です。',
    add: fresh(bx(20, 20, 130, 40, '節足動物', C.main, FILL.warm, 14), bx(170, 20, 130, 40, '軟体動物', C.green, FILL.green, 14), bx(20, 76, 130, 26, 'バッタ（昆虫類）', C.main, FILL.warm, 12), bx(20, 108, 130, 26, 'ダンゴムシ（甲殻類）', C.main, FILL.warm, 12), bx(170, 76, 130, 26, 'イカ', C.green, FILL.green, 12), ...say('バッタ・ダンゴムシ ＝ 節足　イカ ＝ 軟体', C.ink, FILL.yellow)),
  },
]);

// ══ 遺伝の割合 ══
/** パネットスクエア（2×2）。 */
const punnett = (x: number, y: number, cell: number, top: [string, string], left: [string, string], cells: string[], fills?: string[]): E[] => {
  const out: E[] = [];
  top.forEach((t, i) => out.push(bx(x + cell * (i + 1), y, cell, 24, t, C.blue, FILL.blue, 13)));
  left.forEach((t, j) => out.push(bx(x, y + 24 + cell * 0.6 * j, cell, cell * 0.6, t, C.red, FILL.red, 13)));
  cells.forEach((t, k) => out.push(bx(x + cell * (1 + (k % 2)), y + 24 + cell * 0.6 * Math.floor(k / 2), cell, cell * 0.6, t, C.gray, fills?.[k] ?? FILL.warm, 14)));
  return out;
};
const iden: DiagramFigure = show([
  {
    note: '丸い種子をつくる遺伝子をA、しわの種子をつくる遺伝子をaとします。Aaという親は、A・aの2つの遺伝子を1つずつもっています。❓この親から、どんな子ができるでしょう。',
    add: [bx(100, 12, 120, 40, '親　Aa', C.main, FILL.warm, 16), lb(160, 82, 'A ＝ 丸　　a ＝ しわ', 14, C.ink, 'middle', true), lb(160, 108, 'Aa の種子は、丸になる', 12, C.gray), ...say('Aa × Aa の子は、どんな組み合わせ？', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ記号で書くのでしょう。記号にすると、生殖細胞ができるときの組み合わせが、もれなく数えられるからです。まず、Aaの親がつくる生殖細胞を考えます。',
    add: fresh(bx(110, 10, 100, 34, 'Aa', C.main, FILL.warm, 16), ar(140, 46, 100, 78, C.gray), ar(180, 46, 220, 78, C.gray), ci(90, 96, 18, 'A', C.blue, FILL.blue, 16), ci(230, 96, 18, 'a', C.red, FILL.red, 16), lb(90, 128, '生殖細胞', 11, C.gray), lb(230, 128, '生殖細胞', 11, C.gray), ...say('Aaの親は、Aの細胞とaの細胞を半分ずつつくる', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜAとaが半分ずつなのでしょう。対になっている2つの遺伝子は、生殖細胞ができるとき、別々の細胞に分かれて入るからです。どちらが入るかは、同じ確率です。',
    add: fresh(bx(20, 24, 120, 40, '対の遺伝子\nAとa', C.main, FILL.warm, 13), ar(142, 44, 178, 44, C.gray), bx(180, 14, 120, 26, 'A だけ', C.blue, FILL.blue, 13), bx(180, 50, 120, 26, 'a だけ', C.red, FILL.red, 13), lb(160, 110, '分かれて入る（確率は同じ）', 13, C.ink, 'middle', true), ...say('Aのもの ： aのもの ＝ 1 ： 1', C.blue, FILL.blue)),
  },
  {
    note: '子の遺伝子は、両親の生殖細胞の組み合わせです。表に書き出します。Aどうし、Aとa、aとA、aどうしの4通りです。',
    add: fresh(lb(160, 14, '親Aaの生殖細胞（上）× 親Aaの生殖細胞（左）', 11, C.gray), ...punnett(70, 26, 70, ['A', 'a'], ['A', 'a'], ['AA', 'Aa', 'Aa', 'aa']), ...say('組み合わせは 4通り', C.ink, FILL.yellow)),
  },
  {
    note: '❓なぜ表で数えるのでしょう。4つの組み合わせは、どれも同じ確率で起こるからです。だから数えた個数が、そのまま割合になります。AAが1、Aaが2、aaが1で、AA：Aa：aa＝1：2：1です。',
    add: fresh(...punnett(70, 20, 70, ['A', 'a'], ['A', 'a'], ['AA', 'Aa', 'Aa', 'aa'], [FILL.blue, FILL.green, FILL.green, FILL.red]), ...say('AA ： Aa ： aa ＝ 1 ： 2 ： 1', C.green, FILL.green, 15)),
  },
  {
    note: '見た目で数えなおします。❓Aaも丸になるのは、なぜでしょう。AがあればAの性質が現れるからです（Aを顕性〈けんせい〉の遺伝子といいます）。だから丸はAAとAaで3、しわはaaで1。丸：しわ＝3：1です。',
    add: fresh(...punnett(70, 20, 70, ['A', 'a'], ['A', 'a'], ['AA', 'Aa', 'Aa', 'aa'], [FILL.warm, FILL.warm, FILL.warm, FILL.gray]), lb(160, 140, '丸 3 ： しわ 1', 13, C.main, 'middle', true), ...say('Aがあれば丸。aaのときだけしわ', C.main, FILL.warm)),
  },
  {
    note: '例題です。Aaどうしをかけ合わせて2000個の種子ができました。1：2：1の合計は4なので、1あたり2000÷4＝500個。AAは500個、Aaは500×2＝1000個、aaは500個です。',
    add: fresh(bx(20, 20, 84, 44, 'AA\n500個', C.blue, FILL.blue, 13), bx(118, 20, 84, 44, 'Aa\n1000個', C.green, FILL.green, 13), bx(216, 20, 84, 44, 'aa\n500個', C.red, FILL.red, 13), lb(160, 90, '1 ： 2 ： 1 の合計は 4', 13, C.ink, 'middle', true), lb(160, 116, '2000 ÷ 4 ＝ 500（1あたり）', 13, C.ink), ...say('500 ： 1000 ： 500（合計2000個）', C.green, FILL.green)),
  },
  {
    note: '丸の種子は、AAとAaの合計なので、500＋1000＝1500個です。検算すると、しわが500個なので、丸：しわ＝1500：500＝3：1になっていて、合っています。',
    add: fresh(bx(20, 24, 200, 36, '丸　500 ＋ 1000 ＝ 1500個', C.main, FILL.warm, 14), bx(20, 74, 100, 36, 'しわ　500個', C.gray, FILL.gray, 14), lb(160, 130, '1500 ： 500 ＝ 3 ： 1', 14, C.green, 'middle', true), ...say('検算：丸としわが 3 ： 1 になっている', C.green, FILL.green)),
  },
  {
    note: '❓丸の種子のうち、Aaはどれだけでしょう。丸はAAとAaで 1：2 なので、丸3のうちAaは2、つまり3分の2です。丸だからといって、全部が純系（AA）ではありません。',
    add: fresh(bx(40, 26, 60, 40, 'AA\n1', C.blue, FILL.blue, 13), bx(100, 26, 120, 40, 'Aa\n2', C.green, FILL.green, 13), ln(40, 76, 220, 76, C.main, false, 3), lb(130, 96, '丸 3', 13, C.main, 'middle', true), ...say('丸のうち Aa ＝ 3分の2', C.green, FILL.green)),
  },
  {
    note: '別のかけ合わせも見ます。Aa×aaです。aaの親はaの生殖細胞しかつくれません。表に書くと、Aa、Aa、aa、aaの4つで、Aa：aa＝1：1、つまり丸：しわ＝1：1です。',
    add: fresh(...punnett(70, 20, 70, ['a', 'a'], ['A', 'a'], ['Aa', 'Aa', 'aa', 'aa'], [FILL.green, FILL.green, FILL.red, FILL.red]), ...say('Aa × aa → 丸 ： しわ ＝ 1 ： 1', C.blue, FILL.blue)),
  },
  {
    note: '❓丸い種子がAAかAaかは、見た目では分かりません。どう調べるのでしょう。しわ（aa）とかけ合わせます。全部丸ならAA、丸としわが半分ずつならAaだと分かります。',
    add: fresh(bx(10, 14, 140, 34, '丸 × しわ（aa）', C.main, FILL.warm, 13), bx(10, 62, 140, 30, '全部丸 → AA', C.blue, FILL.blue, 13), bx(10, 100, 140, 30, '丸：しわ＝1：1 → Aa', C.green, FILL.green, 12), lb(235, 60, 'AA × aa\nAa だけ', 12, C.blue, 'middle', true), lb(235, 112, 'Aa × aa\nAaとaa', 12, C.green, 'middle', true), ...say('aaとかけ合わせて、正体を見分ける', C.ink, FILL.yellow)),
  },
  {
    note: '練習です。Aaどうしで丸の種子が600個。丸が3にあたるので、1あたり600÷3＝200個。しわは1にあたる200個です。まとめ：組み合わせを表で数え、同じ確率だから割合になる、です。',
    add: fresh(bx(20, 24, 180, 38, '丸 600個 ＝ 3', C.main, FILL.warm, 14), bx(20, 74, 60, 38, 'しわ 1', C.gray, FILL.gray, 13), lb(200, 92, '600 ÷ 3 ＝ 200個', 14, C.green, 'middle', true), ...say('表で数える → 割合 → 個数', C.ink, FILL.yellow)),
  },
]);

// ══ 根の細胞分裂の観察 ══
const rootPic = (): E[] => [pg([[142, 14], [178, 14], [160, 116]], C.main, FILL.warm), bx(136, 88, 48, 30, undefined, C.red, undefined), lb(210, 100, '成長点', 12, C.red, 'start', true)];
const stg = (i: number, label: string): E[] => {
  const x = 32 + 64 * i;
  return [ci(x, 60, 24, undefined, C.main, FILL.warm), lb(x, 108, label, 10, C.ink, 'middle')];
};
const cells: DiagramFigure = show([
  {
    note: '細胞分裂を観察するには、タマネギなどの根を使います。❓根のどの部分を使えばよいのでしょう。実は、先端の近くだけを使います。',
    add: [...rootPic(), ...say('根の先端近くを切って、顕微鏡で観察する', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ先端近くなのでしょう。そこに成長点があり、細胞がさかんに分裂してふえているからです。分裂している細胞が多いので、観察のチャンスがふえます。',
    add: fresh(bx(20, 14, 120, 44, '先端近く\n小さい細胞がぎっしり', C.red, FILL.red, 12), bx(180, 14, 120, 44, '根もと近く\n細胞が細長く大きい', C.gray, FILL.gray, 12), ...[0, 1, 2, 3, 4, 5].flatMap((i) => [ci(40 + (i % 3) * 30, 84 + Math.floor(i / 3) * 24, 9, undefined, C.red, FILL.red)]), bx(190, 74, 26, 60, undefined, C.gray, FILL.gray), bx(226, 74, 26, 60, undefined, C.gray, FILL.gray), bx(262, 74, 26, 60, undefined, C.gray, FILL.gray), ...say('分裂がさかんなのは、先端の成長点', C.red, FILL.red)),
  },
  {
    note: '観察の手順です。根の先端を切る → うすい塩酸であたためる → 水で洗って染色液で染める → 押しつぶして顕微鏡で見る、の順に行います。それぞれの操作には理由があります。',
    add: fresh(bx(8, 20, 68, 44, '先端を\n切る', C.main, FILL.warm, 11), ar(77, 42, 87, 42, C.gray), bx(88, 20, 68, 44, 'うすい塩酸\nで温める', C.blue, FILL.blue, 11), ar(157, 42, 167, 42, C.gray), bx(168, 20, 68, 44, '染色液で\n染める', C.red, FILL.red, 11), ar(237, 42, 247, 42, C.gray), bx(248, 20, 64, 44, '押しつぶす', C.green, FILL.green, 11), ...say('理由をセットで覚える', C.ink, FILL.yellow)),
  },
  {
    note: '❓なぜうすい塩酸であたためるのでしょう。細胞どうしをくっつけているものがゆるんで、細胞がはなれやすくなるからです。そのままだと、細胞がくっついて重なり、観察できません。',
    add: fresh(...[0, 1, 2, 3].map((i) => bx(20 + i * 30, 30, 28, 28, undefined, C.gray, FILL.gray)), lb(80, 74, 'くっついている', 11, C.gray), ar(150, 44, 176, 44, C.blue), lb(163, 32, '塩酸', 11, C.blue, 'middle', true), ...[0, 1, 2, 3].map((i) => bx(184 + i * 32, 30, 26, 26, undefined, C.blue, FILL.blue)), lb(240, 74, 'はなれやすい', 11, C.blue), ...say('塩酸でゆるめると、細胞がはなれやすくなる', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ押しつぶすのでしょう。細胞が何層にも重なっていると、光が通らず、どれがどれか分かりません。上から押して1層に広げると、1つ1つの細胞がはっきり見えます。',
    add: fresh(...[0, 1, 2].map((i) => bx(40, 20 + i * 14, 60, 22, undefined, C.gray, FILL.gray)), lb(70, 100, '重なっている', 11, C.gray), ar(120, 50, 160, 50, C.green), lb(140, 40, '押す', 11, C.green, 'middle', true), ...[0, 1, 2, 3].map((i) => ci(190 + (i % 2) * 34, 38 + Math.floor(i / 2) * 30, 12, undefined, C.green, FILL.green)), lb(224, 100, '1層に広がる', 11, C.green), ...say('押しつぶす ＝ 細胞を1層に広げる', C.green, FILL.green)),
  },
  {
    note: '❓なぜ染色液で染めるのでしょう。核や染色体は、そのままでは透明に近くて見えません。酢酸オルセインなどの染色液で赤く染めると、染色体がはっきり見えて、分裂の段階を見分けられます。',
    add: fresh(ci(80, 70, 34, undefined, C.gray, FILL.gray), ci(80, 70, 12, undefined, C.gray, FILL.gray), lb(80, 118, '染める前：見えにくい', 11, C.gray), ar(130, 70, 190, 70, C.red), lb(160, 58, '染色液', 11, C.red, 'middle', true), ci(240, 70, 34, undefined, C.red, FILL.gray), ci(240, 70, 12, undefined, C.red, FILL.red), lb(240, 118, '染めた後：核が赤い', 11, C.red), ...say('染色液で、核や染色体がはっきり見える', C.red, FILL.red)),
  },
  {
    note: '分裂の順番です。①核の形が消えて染色体が現れる、②染色体が中央にならぶ、③染色体が両極へ分かれる、④2つの細胞になる。分裂前の核は、はっきり丸く見えます。',
    add: fresh(...stg(0, '分裂前'), ci(32, 60, 8, undefined, C.red, FILL.red), ...stg(1, '染色体\nが現れる'), ...[0, 1, 2, 3].map((i) => ln(84 + i * 6, 52 + (i % 2) * 8, 88 + i * 6, 70 - (i % 2) * 4, C.red, false, 3)), ...stg(2, '中央に\nならぶ'), ...[0, 1, 2, 3].map((i) => ln(140, 44 + i * 7, 152, 44 + i * 7, C.red, false, 3)), ...stg(3, '両極へ'), ...[0, 1, 2].flatMap((i) => [ln(206 + i * 6, 40, 206 + i * 6, 48, C.red, false, 3), ln(206 + i * 6, 72, 206 + i * 6, 80, C.red, false, 3)]), ...stg(4, '2つの\n細胞'), ci(288, 48, 12, undefined, C.red, FILL.red), ci(288, 72, 12, undefined, C.red, FILL.red), ...say('①現れる → ②中央 → ③両極 → ④2つに', C.ink, FILL.yellow)),
  },
  {
    note: '❓分裂の前後で、染色体の数はどうなるのでしょう。分裂の前に染色体がコピーされて2倍になり、それが2つの細胞に半分ずつ分かれるので、できた細胞の数はもとと同じです。',
    add: fresh(bx(10, 30, 76, 44, '染色体\n4本', C.main, FILL.warm, 13), ar(88, 52, 112, 52, C.gray), lb(101, 88, 'コピー', 11, C.blue, 'middle', true), bx(114, 30, 76, 44, '8本', C.blue, FILL.blue, 14), ar(192, 52, 216, 52, C.gray), lb(204, 88, '半分ずつ', 11, C.green, 'middle', true), bx(218, 14, 90, 30, '細胞A　4本', C.green, FILL.green, 11), bx(218, 60, 90, 30, '細胞B　4本', C.green, FILL.green, 11), ...say('4本 → 8本 → 4本と4本', C.green, FILL.green)),
  },
  {
    note: '❓なぜ数が同じでないといけないのでしょう。体のどの細胞も、同じ設計図（遺伝子）をもつ必要があるからです。数が変わると、設計図が足りなかったり、余ったりしてしまいます。',
    add: fresh(bx(40, 24, 100, 40, '同じ設計図', C.green, FILL.green, 14), bx(180, 24, 100, 40, '同じ数の染色体', C.green, FILL.green, 12), ar(142, 44, 178, 44, C.green), lb(160, 100, '数が変わる → 設計図がくるう', 13, C.red, 'middle', true), ...say('どの体細胞も、染色体の数は同じ', C.green, FILL.green)),
  },
  {
    note: 'まとめです。根の先端近く（成長点）で分裂がさかん。塩酸は細胞をはなれやすくし、染色液は染色体を見やすくし、押しつぶしで1層に広げます。染色体の数は、分裂の前後で変わりません。',
    add: fresh(bx(30, 12, 260, 28, '成長点（先端近く）で分裂がさかん', C.red, FILL.red, 12), bx(30, 46, 260, 28, '塩酸 ＝ はなれやすく', C.blue, FILL.blue, 12), bx(30, 80, 260, 28, '染色液 ＝ 見やすく　押す ＝ 1層に', C.main, FILL.warm, 12), bx(30, 114, 260, 28, '染色体の数は前後で同じ', C.green, FILL.green, 12), ...say('理由といっしょに覚える', C.ink, FILL.yellow, 13, 174, 34)),
  },
]);

// ══ 地震の速さと発生時刻 ══
const tbl = (rows: string[][], y: number): E[] => rows.flatMap((r, i) => r.map((t, j) => bx(10 + j * 100, y + i * 26, 100, 26, t, C.gray, i === 0 ? FILL.blue : FILL.warm, 12)));
const jishin: DiagramFigure = show([
  {
    note: '観測表です。震源から60kmの地点にP波が9時30分10秒、120kmの地点に9時30分20秒に届きました。❓この表から、P波の速さと、地震が起きた時刻が分かるでしょうか。',
    add: [...tbl([['地点', '震源から', 'P波の到着'], ['A', '60km', '9時30分10秒'], ['B', '120km', '9時30分20秒']], 20), ...say('P波の速さ と 発生時刻 は？', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ地点が2つ必要なのでしょう。地震が起きた時刻が分からないので、1つの地点だけでは「何秒かかって届いたか」が決まらず、速さが出せないからです。',
    add: fresh(bx(20, 24, 130, 40, '1地点だけ', C.red, FILL.red, 14), lb(85, 84, '出発時刻が不明\n→ かかった時間が不明', 11, C.red), bx(170, 24, 130, 40, '2地点', C.green, FILL.green, 14), lb(235, 84, '到着のちがいなら\n出発時刻に関係ない', 11, C.green), ...say('2地点の「差」を使えば、出発時刻はいらない', C.green, FILL.green)),
  },
  {
    note: '距離の差と時刻の差を出します。距離の差は120−60＝60km、時刻の差は20−10＝10秒です。',
    add: fresh(ln(30, 60, 290, 60, C.gray, false, 3), ci(70, 60, 8, 'A', C.blue, FILL.blue, 9), ci(250, 60, 8, 'B', C.blue, FILL.blue, 9), lb(70, 84, '60km\n10秒', 11, C.ink), lb(250, 84, '120km\n20秒', 11, C.ink), ar(78, 40, 242, 40, C.red), lb(160, 28, '距離の差 60km　時刻の差 10秒', 12, C.red, 'middle', true), ...say('差：60km ・ 10秒', C.red, FILL.red)),
  },
  {
    note: '❓なぜ差で速さが出るのでしょう。AからBまでの60kmを、P波が10秒かけて進んだからです。同じ波が進んだ「余分な距離」と「余分な時間」なので、速さ＝60÷10＝6km/sになります。',
    add: fresh(ln(30, 60, 290, 60, C.gray, false, 3), ci(70, 60, 8, 'A', C.blue, FILL.blue, 9), ci(250, 60, 8, 'B', C.blue, FILL.blue, 9), ar(78, 60, 242, 60, C.green), lb(160, 46, 'この間を波が進んだ', 12, C.green, 'middle', true), ...say('速さ ＝ 60 ÷ 10 ＝ 6km/s', C.green, FILL.green, 15)),
  },
  {
    note: '❓では、発生時刻は。Aまで60kmを6km/sで進むのに、60÷6＝10秒かかっています。Aに届いたのは9時30分10秒なので、10秒さかのぼった9時30分00秒に地震が起きました。',
    add: fresh(ln(20, 70, 300, 70, C.gray, false, 3), ci(50, 70, 7, undefined, C.red, FILL.red), ci(180, 70, 7, undefined, C.blue, FILL.blue), lb(50, 50, '9:30:00\n発生', 11, C.red, 'middle', true), lb(180, 50, '9:30:10\nAに到着', 11, C.blue, 'middle', true), ar(180, 92, 54, 92, C.red), lb(116, 108, '60 ÷ 6 ＝ 10秒さかのぼる', 12, C.red, 'middle', true), ...say('発生時刻 ＝ 9時30分10秒 − 10秒 ＝ 9時30分00秒', C.red, FILL.red, 12)),
  },
  {
    note: '検算します。Bまでは120kmなので、120÷6＝20秒かかります。9時30分00秒の20秒後は9時30分20秒で、表のBの時刻と一致しました。',
    add: fresh(...tbl([['地点', '震源から', '計算した到着'], ['A', '60km', '00秒＋10秒＝10秒'], ['B', '120km', '00秒＋20秒＝20秒']], 20), lb(160, 122, '表と一致 → 正しい', 14, C.green, 'middle', true), ...say('120 ÷ 6 ＝ 20秒　→ 9時30分20秒', C.green, FILL.green)),
  },
  {
    note: 'S波でも同じです。60kmに9時30分20秒、120kmに9時30分40秒。距離の差60km、時刻の差20秒なので、速さは60÷20＝3km/sです。P波（6km/s）の半分の速さです。',
    add: fresh(...tbl([['地点', '震源から', 'S波の到着'], ['A', '60km', '9時30分20秒'], ['B', '120km', '9時30分40秒']], 14), lb(160, 104, '60km ÷ 20秒 ＝ 3km/s', 15, C.purple, 'middle', true), lb(160, 128, 'S波はP波の半分の速さ', 12, C.gray), ...say('S波の速さ ＝ 3km/s', C.purple, FILL.purple)),
  },
  {
    note: '❓初期微動継続時間とは。P波が届いてからS波が届くまでの時間です。P波は6km/s、S波は3km/sなので、遠くなるほど、S波がおくれる時間が長くなります。',
    add: fresh(ln(30, 116, 290, 116, C.gray), ln(30, 116, 30, 14, C.gray), lb(160, 132, '震源からの距離', 10, C.gray), lb(30, 8, '時間', 10, C.gray, 'start'), ln(30, 116, 250, 56, C.blue, false, 2), ln(30, 116, 250, 16, C.red, false, 2), lb(268, 56, 'P波', 12, C.blue, 'start', true), lb(268, 20, 'S波', 12, C.red, 'start', true), ln(150, 83, 150, 56, C.green, true, 2), lb(160, 72, '差', 11, C.green, 'start', true), ...say('距離が大きいほど、P波とS波の差は広がる', C.ink, FILL.yellow)),
  },
  {
    note: '❓なぜ初期微動継続時間は震源距離に比例するのでしょう。震源距離を□kmとすると、差は □÷3 − □÷6 ＝ □÷6 秒。□が2倍なら差も2倍になるからです。',
    add: fresh(bx(20, 14, 130, 30, 'S波　□ ÷ 3 秒', C.red, FILL.red, 13), bx(170, 14, 130, 30, 'P波　□ ÷ 6 秒', C.blue, FILL.blue, 13), lb(160, 66, '□÷3 − □÷6 ＝ □÷6', 15, C.ink, 'middle', true), lb(160, 92, '□が2倍 → 差も2倍', 13, C.green, 'middle', true), ...say('初期微動継続時間 ＝ 距離 ÷ 6', C.green, FILL.green)),
  },
  {
    note: '練習です。P波6km/s、S波3km/sで、初期微動継続時間が12秒のとき、□÷6＝12なので、□＝12×6＝72km。検算：S波は72÷3＝24秒、P波は72÷6＝12秒で、差は12秒です。',
    add: fresh(bx(20, 20, 130, 34, 'S波　72÷3 ＝ 24秒', C.red, FILL.red, 12), bx(170, 20, 130, 34, 'P波　72÷6 ＝ 12秒', C.blue, FILL.blue, 12), lb(160, 82, '24 − 12 ＝ 12秒（合っている）', 13, C.green, 'middle', true), lb(160, 108, '12 × 6 ＝ 72km', 15, C.ink, 'middle', true), ...say('震源距離 ＝ 72km', C.green, FILL.green)),
  },
  {
    note: 'もう1つ。S波が3km/sで、震源から90kmの地点にS波が届くのは、地震発生の何秒後か。時間＝距離÷速さなので、90÷3＝30秒後です。P波なら90÷6＝15秒後で、S波のほうが遅く届きます。',
    add: fresh(ln(20, 66, 300, 66, C.gray, false, 3), ci(40, 66, 7, undefined, C.red, FILL.red), ci(150, 66, 7, undefined, C.blue, FILL.blue), ci(260, 66, 7, undefined, C.purple, FILL.purple), lb(40, 44, '発生', 11, C.red, 'middle', true), lb(150, 44, 'P波 15秒後', 11, C.blue, 'middle', true), lb(260, 44, 'S波 30秒後', 11, C.purple, 'middle', true), ...say('90 ÷ 3 ＝ 30秒後', C.purple, FILL.purple)),
  },
  {
    note: 'まとめです。速さ＝距離の差÷到着時刻の差。発生時刻は、到着時刻から所要時間をさかのぼります。初期微動継続時間は震源距離に比例します。',
    add: fresh(bx(20, 14, 280, 32, '速さ ＝ 距離の差 ÷ 時刻の差', C.blue, FILL.blue, 13), bx(20, 54, 280, 32, '発生時刻 ＝ 到着 − 距離÷速さ', C.red, FILL.red, 13), bx(20, 94, 280, 32, '初期微動継続時間は距離に比例', C.green, FILL.green, 13), ...say('差を使う・さかのぼる・比例', C.ink, FILL.yellow)),
  },
]);

// ══ 3地点のボーリング ══
const colm = (x: number, ground: number, depth: number, bottom: number, label: string, h = 100): E[] => [
  bx(x, ground, 46, bottom - ground, undefined, C.gray, FILL.gray),
  bx(x, ground + depth, 46, 8, undefined, C.red, FILL.red),
  lb(x + 23, bottom + 12, label, 12, C.ink, 'middle', true),
];
const boring: DiagramFigure = show([
  {
    note: '3つの地点A・B・Cでボーリング調査をしました。かぎ層（目印になる地層）が、どの深さにあるかを柱状図で調べます。❓この深さから、地層がどちらへ傾いているか分かるでしょうか。',
    add: [...colm(40, 30, 20, 120, 'A'), ...colm(137, 30, 40, 120, 'B'), ...colm(234, 30, 20, 120, 'C'), lb(160, 14, '赤い帯：かぎ層', 11, C.red, 'middle', true), ...say('深さから、傾きは分かる？', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ深さだけで比べてはいけないのでしょう。深さは、その地点の地表から測った長さだからです。地表の高さが地点ごとにちがうと、同じ深さでも、実際の高さがちがいます。',
    add: fresh(...colm(50, 24, 40, 130, 'A'), ...colm(200, 44, 40, 130, 'B'), ln(30, 24, 100, 24, C.blue, true), ln(180, 44, 250, 44, C.blue, true), lb(104, 24, 'A地表', 10, C.blue, 'start'), lb(254, 44, 'B地表', 10, C.blue, 'start'), lb(160, 10, '深さは同じ40m。でも地表の高さがちがう', 11, C.red, 'middle', true), ...say('深さが同じでも、かぎ層の高さは同じではない', C.red, FILL.red, 12)),
  },
  {
    note: '❓では、どうすればよいのでしょう。かぎ層の標高を出します。かぎ層の標高＝地表の標高−かぎ層の深さです。標高にそろえれば、どの地点も同じものさしで比べられます。',
    add: fresh(bx(20, 24, 280, 40, 'かぎ層の標高 ＝ 地表の標高 − 深さ', C.green, FILL.green, 15), lb(160, 96, '標高 ＝ 海面からの高さ（共通のものさし）', 13, C.ink, 'middle', true), ...say('必ず標高に直してから、くらべる', C.green, FILL.green)),
  },
  {
    note: '練習です。Aは標高120mで深さ20m、Bは標高110mで深さ20m。Aは120−20＝100m、Bは110−20＝90mなので、かぎ層はAのほうが10m高い位置にあります。',
    add: fresh(bx(20, 20, 130, 50, 'A　120−20\n＝ 100m', C.blue, FILL.blue, 14), bx(170, 20, 130, 50, 'B　110−20\n＝ 90m', C.main, FILL.warm, 14), lb(160, 100, '深さは同じ20mでも、Aが10m高い', 13, C.red, 'middle', true), ...say('かぎ層が高いのは A', C.blue, FILL.blue)),
  },
  {
    note: '例題です。地点Aは標高100m、BはAの東100mで標高100m、CはAの北100mで標高100m。かぎ層の深さは、Aが10m、Bが20m、Cが10mです。まず位置を地図にします。',
    add: fresh(ci(110, 96, 14, 'A', C.blue, FILL.blue, 13), ci(230, 96, 14, 'B', C.main, FILL.warm, 13), ci(110, 30, 14, 'C', C.green, FILL.green, 13), lb(110, 122, '深さ10m', 11, C.ink), lb(230, 122, '深さ20m', 11, C.ink), lb(176, 30, '深さ10m', 11, C.ink, 'start'), lb(300, 22, '北', 12, C.gray, 'end', true), ar(288, 46, 288, 24, C.gray), lb(170, 84, '東へ100m', 10, C.gray, 'middle'), ...say('3地点とも地表の標高は100m', C.ink, FILL.yellow)),
  },
  {
    note: 'かぎ層の標高を出します。Aは100−10＝90m、Bは100−20＝80m、Cは100−10＝90mです。',
    add: fresh(ci(110, 96, 14, 'A', C.blue, FILL.blue, 13), ci(230, 96, 14, 'B', C.main, FILL.warm, 13), ci(110, 30, 14, 'C', C.green, FILL.green, 13), lb(110, 122, '90m', 13, C.blue, 'middle', true), lb(230, 122, '80m', 13, C.main, 'middle', true), lb(140, 30, '90m', 13, C.green, 'start', true), ...say('A 90m　B 80m　C 90m', C.green, FILL.green)),
  },
  {
    note: '❓なぜ東へ下がっているのでしょう。AからBへ東へ進むと、かぎ層が90mから80mへ10m低くなるからです。断面で見ると、かぎ層は東へ向かって下がっています。',
    add: fresh(ln(30, 40, 290, 40, C.gray, true), lb(30, 30, '地表 100m', 10, C.gray, 'start'), ln(60, 70, 260, 96, C.red, false, 3), ci(60, 70, 6, 'A', C.blue, FILL.blue, 8), ci(260, 96, 6, 'B', C.main, FILL.warm, 8), lb(60, 88, '90m', 11, C.blue), lb(260, 114, '80m', 11, C.main), lb(30, 130, '西', 12, C.gray, 'start'), lb(290, 130, '東', 12, C.gray, 'end'), ...say('東へ進むと10m低い → 東へ下がる', C.red, FILL.red)),
  },
  {
    note: '❓では南北はどうでしょう。AとCは、かぎ層の標高がどちらも90mで同じです。同じ標高の2地点を結ぶ線が、傾きに垂直な方向（走向）で、ここでは南北の線です。',
    add: fresh(ci(110, 100, 14, 'A', C.blue, FILL.blue, 13), ci(110, 34, 14, 'C', C.green, FILL.green, 13), ln(110, 20, 110, 130, C.purple, true, 2), lb(126, 68, 'ともに90m\n→ 同じ高さの線', 11, C.purple, 'start', true), ...say('高さが同じ2点を結ぶ線 ＝ 傾きに垂直（走向）', C.purple, FILL.purple, 12)),
  },
  {
    note: '傾きの方向は、その線に垂直な向きで、低いほうです。南北の線に垂直なのは東西、低いのは東側（Bが80m）。だから地層は東へ下がっています。',
    add: fresh(ci(110, 100, 14, 'A', C.blue, FILL.blue, 13), ci(110, 34, 14, 'C', C.green, FILL.green, 13), ci(230, 100, 14, 'B', C.main, FILL.warm, 13), ln(110, 20, 110, 130, C.purple, true, 2), ar(130, 66, 220, 66, C.red), lb(176, 54, '東へ下がる', 13, C.red, 'middle', true), ...say('地層は東へ下がっている', C.red, FILL.red)),
  },
  {
    note: '❓なぜ2地点ではなく3地点が必要なのでしょう。2地点だけだと、その2つを結ぶ向きの上り下りしか分からず、本当の傾きの向きが決められないからです。3点あれば向きが決まります。',
    add: fresh(ci(80, 70, 12, 'A', C.blue, FILL.blue, 12), ci(200, 70, 12, 'B', C.main, FILL.warm, 12), ln(94, 70, 186, 70, C.gray), lb(140, 50, '東西の差しか分からない', 11, C.red, 'middle', true), ...say('3点あれば、東西・南北の両方が分かる', C.ink, FILL.yellow)),
  },
  {
    note: '❓そもそも、なぜ地層は傾くのでしょう。地層はたい積したときは、ほぼ水平に重なります。できたあとに、大地に力がはたらいて持ち上げられたり曲げられたりして、傾きます。',
    add: fresh(...[0, 1, 2].map((i) => bx(30, 20 + i * 14, 100, 14, undefined, C.gray, i === 1 ? FILL.red : FILL.gray)), lb(80, 74, 'たい積直後：水平', 11, C.gray), ar(140, 44, 170, 44, C.blue), lb(155, 32, '力', 12, C.blue, 'middle', true), pg([[180, 60], [300, 20], [300, 34], [180, 74]], C.gray, FILL.gray), pg([[180, 74], [300, 34], [300, 48], [180, 88]], C.red, FILL.red), lb(240, 104, '大地が変形して傾く', 11, C.gray), ...say('傾いている ＝ 大地の変動があった証拠', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめです。深さは地表から測るので、標高に直します。かぎ層の標高＝地表の標高−深さ。標高が低いほうへ地層は下がり、同じ高さの2地点を結ぶ線に垂直な向きが傾きです。',
    add: fresh(bx(20, 14, 280, 30, 'かぎ層の標高 ＝ 地表の標高 − 深さ', C.green, FILL.green, 13), bx(20, 52, 280, 30, '低いほうへ、地層は下がる', C.red, FILL.red, 13), bx(20, 90, 280, 30, '同じ高さの2点を結ぶ線に垂直', C.purple, FILL.purple, 13), ...say('標高に直す → 低いほうへ', C.ink, FILL.yellow)),
  },
]);

// ══ 気温と湿度 ══
/** 空気1m³を入れ物にたとえる。cap＝飽和水蒸気量、amt＝今ある水蒸気量。 */
const cup = (x: number, y: number, w: number, cap: number, amt: number, label: string, scale = 4): E[] => {
  const h = cap * scale;
  const fh = Math.min(amt, cap) * scale;
  return [
    bx(x, y, w, h, undefined, C.blue, undefined),
    bx(x, y + h - fh, w, fh, undefined, C.blue, FILL.blue),
    lb(x + w / 2, y + h + 12, label, 11, C.ink, 'middle', true),
    lb(x + w / 2, y + h - fh / 2, `${amt}g`, 11, C.ink, 'middle', true),
  ];
};
const shitsudo: DiagramFigure = show([
  {
    note: '湿度は、空気がふくめる水蒸気の上限のうち、今どれだけふくんでいるかの割合です。式は 湿度＝水蒸気量÷飽和水蒸気量×100。入れ物にたとえると、容量の何%まで水が入っているかです。',
    add: [...cup(40, 20, 60, 12.8, 6.4, '15℃ 飽和12.8g'), lb(190, 50, '水蒸気量 6.4g\n÷ 飽和 12.8g\n× 100 ＝ 50%', 13, C.ink, 'middle', true), ...say('湿度 ＝ 今ある量 ÷ 入る上限 × 100', C.blue, FILL.blue)],
  },
  {
    note: '❓なぜ飽和水蒸気量という「上限」があるのでしょう。空気は、ふくめる水蒸気の量に限りがあり、それをこえると水滴になるからです。そして、その上限は気温で変わります。',
    add: fresh(...[['10℃', 9.4], ['15℃', 12.8], ['20℃', 17.3], ['25℃', 23.1]].flatMap((r, i) => [bx(30 + i * 68, 110 - (r[1] as number) * 3.6, 40, (r[1] as number) * 3.6, undefined, C.blue, FILL.blue), lb(50 + i * 68, 120, r[0] as string, 11), lb(50 + i * 68, 106 - (r[1] as number) * 3.6, `${r[1]}g`, 11, C.ink, 'middle', true)]), ...say('気温が高いほど、飽和水蒸気量は大きい（g/m³）', C.blue, FILL.blue, 12)),
  },
  {
    note: '例題です。15℃で湿度50%の部屋。飽和水蒸気量は12.8g/m³なので、今ある水蒸気は12.8×0.5＝6.4g/m³です。これを25℃まで温めたときの湿度を考えます。',
    add: fresh(...cup(40, 14, 60, 12.8, 6.4, '15℃・湿度50%'), lb(190, 40, '12.8 × 0.5\n＝ 6.4g/m³', 14, C.ink, 'middle', true), ...say('最初の水蒸気量は 6.4g/m³', C.blue, FILL.blue)),
  },
  {
    note: '❓温めると、水蒸気量は変わるのでしょうか。変わりません。部屋の水は出入りしていないからです。変わるのは「入れ物の大きさ（飽和水蒸気量）」のほうです。',
    add: fresh(...cup(30, 40, 50, 12.8, 6.4, '15℃', 4), ar(96, 66, 126, 66, C.red), lb(111, 54, '温める', 11, C.red, 'middle', true), ...cup(140, 8, 50, 23.1, 6.4, '25℃', 4), lb(250, 60, '水蒸気は\n同じ6.4g', 12, C.green, 'middle', true), ...say('入れ物だけが大きくなる', C.red, FILL.red)),
  },
  {
    note: '25℃の飽和水蒸気量は23.1g/m³です。湿度＝6.4÷23.1×100＝約27.7、つまり約28%。温めると、湿度は50%から28%に下がりました。',
    add: fresh(...cup(40, 8, 60, 23.1, 6.4, '25℃・飽和23.1g'), lb(200, 44, '6.4 ÷ 23.1 × 100\n≒ 28%', 14, C.ink, 'middle', true), ...say('温めると、湿度は下がる（50% → 約28%）', C.blue, FILL.blue)),
  },
  {
    note: '冷やす場合です。20℃で湿度50%、飽和は17.3g/m³なので、水蒸気量は17.3×0.5＝8.65g/m³。10℃まで冷やすと飽和は9.4g/m³なので、8.65÷9.4×100＝約92%です。',
    add: fresh(...cup(30, 8, 50, 17.3, 8.65, '20℃・50%', 4), ar(96, 50, 126, 50, C.blue), lb(111, 38, '冷やす', 11, C.blue, 'middle', true), ...cup(140, 30, 50, 9.4, 8.65, '10℃・約92%', 4), lb(250, 50, '8.65÷9.4\n×100\n≒ 92%', 12, C.ink, 'middle', true), ...say('冷やすと、湿度は上がる（50% → 約92%）', C.blue, FILL.blue)),
  },
  {
    note: '❓さらに冷やし続けるとどうなるのでしょう。湿度が100%になり、それ以上は水蒸気が入りきれず、水滴になります。湿度がちょうど100%になる温度を露点（ろてん）といいます。',
    add: fresh(...[0, 1, 2, 3].map((i) => bx(20 + i * 70, 24, 60, 30, ['50%', '80%', '100%', '水滴'][i], i === 3 ? C.blue : C.gray, i > 1 ? FILL.blue : FILL.gray, 13)), ...[0, 1, 2].map((i) => ar(82 + i * 70, 39, 90 + i * 70, 39, C.blue)), lb(160, 82, '冷やしていく →', 12, C.ink), lb(160, 104, '100%になる温度 ＝ 露点', 13, C.red, 'middle', true), ...say('露点をこえると、水滴（露・雲）ができる', C.blue, FILL.blue)),
  },
  {
    note: '練習です。15℃で湿度100%の空気を10℃まで冷やします。水蒸気は12.8g/m³ですが、10℃では9.4g/m³しか入りません。12.8−9.4＝3.4gが入りきれず、水滴になります。',
    add: fresh(...cup(30, 8, 50, 12.8, 12.8, '15℃・100%', 4), ar(96, 40, 126, 40, C.blue), lb(111, 28, '冷やす', 11, C.blue, 'middle', true), ...cup(140, 8, 50, 9.4, 9.4, '10℃', 4), lb(250, 50, '12.8 − 9.4\n＝ 3.4g\nが水滴', 13, C.red, 'middle', true), ...say('入りきれない 3.4g が水滴になる', C.red, FILL.red)),
  },
  {
    note: '❓冬に暖房をつけると乾燥するのは、なぜでしょう。暖房で気温が上がっても、部屋の水蒸気量はほとんど変わりません。ところが飽和水蒸気量が大きくなるので、湿度が下がるからです。',
    add: fresh(bx(20, 20, 130, 40, '気温 上がる', C.red, FILL.red, 13), bx(170, 20, 130, 40, '飽和水蒸気量 大', C.red, FILL.red, 12), ar(152, 40, 168, 40, C.red), bx(20, 84, 130, 40, '水蒸気量 同じ', C.green, FILL.green, 13), bx(170, 84, 130, 40, '湿度 下がる', C.blue, FILL.blue, 13), ar(152, 104, 168, 104, C.blue), ...say('暖房の部屋が乾燥するのは、湿度が下がるから', C.blue, FILL.blue)),
  },
  {
    note: 'まとめです。気温が変わっても水蒸気量は同じで、変わるのは飽和水蒸気量。温めると湿度は下がり、冷やすと上がります。飽和水蒸気量をこえた分は水滴になります。',
    add: fresh(bx(20, 14, 280, 30, '水蒸気量は同じ（出入りしない）', C.green, FILL.green, 13), bx(20, 52, 280, 30, '温める → 湿度↓　冷やす → 湿度↑', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, 'こえた分は水滴になる', C.red, FILL.red, 13), ...say('水蒸気量 ÷ 新しい飽和水蒸気量 × 100', C.ink, FILL.yellow)),
  },
]);

// ══ 海溝型地震と内陸型地震 ══
const sea = (): E[] => [pg([[0, 40], [320, 40], [320, 46], [0, 46]], C.blue, FILL.blue)];
const platesA = (): E[] => [
  ...sea(),
  pg([[0, 60], [130, 60], [230, 110], [230, 130], [130, 80], [0, 80]], C.blue, FILL.blue),
  pg([[320, 46], [150, 46], [150, 64], [200, 78], [250, 100], [320, 100]], C.main, FILL.warm),
  lb(50, 70, '海洋プレート', 11, C.blue, 'middle', true), lb(222, 60, '大陸プレート', 11, C.main, 'middle', true),
];
const kaikou: DiagramFigure = show([
  {
    note: '日本列島は、北アメリカ・ユーラシア・太平洋・フィリピン海の4つのプレートが出会う場所にあります。❓なぜ日本は地震が多いのでしょう。',
    add: [bx(20, 20, 130, 36, '北アメリカ\nプレート', C.main, FILL.warm, 12), bx(170, 20, 130, 36, 'ユーラシア\nプレート', C.main, FILL.warm, 12), bx(20, 84, 130, 36, '太平洋\nプレート', C.blue, FILL.blue, 12), bx(170, 84, 130, 36, 'フィリピン海\nプレート', C.blue, FILL.blue, 12), ...say('4つのプレートが集まる場所に日本がある', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ境目に地震が多いのでしょう。プレートどうしが押し合ったりすれちがったりして、力がかかり続けるからです。その力が、地震の元になります。',
    add: fresh(bx(20, 40, 120, 40, 'プレートA', C.blue, FILL.blue, 13), bx(180, 40, 120, 40, 'プレートB', C.main, FILL.warm, 13), ar(100, 24, 140, 24, C.red), ar(220, 24, 180, 24, C.red), lb(160, 104, '境目に、力がかかり続ける', 13, C.red, 'middle', true), ...say('プレートの境目は、力がたまりやすい', C.red, FILL.red)),
  },
  {
    note: '海溝型地震のしくみです。日本の東や南では、重い海洋プレートが、大陸プレートの下へ、少しずつ沈みこんでいます。',
    add: fresh(...platesA(), ar(90, 100, 150, 122, C.blue), ...say('海洋プレートが、大陸プレートの下へ沈みこむ', C.blue, FILL.blue)),
  },
  {
    note: '❓沈みこむとき、大陸プレートはどうなるのでしょう。境目でくっついているので、海洋プレートに引きずりこまれて、ゆっくり下向きに曲げられていきます。',
    add: fresh(...sea(), pg([[0, 60], [130, 60], [230, 110], [230, 130], [130, 80], [0, 80]], C.blue, FILL.blue), pg([[320, 46], [160, 56], [170, 76], [210, 90], [250, 106], [320, 106]], C.main, FILL.warm), ar(250, 30, 250, 62, C.red, true), lb(246, 28, '引きずられる', 10, C.red, 'start'), ...say('大陸プレートが、引きずりこまれる', C.main, FILL.warm)),
  },
  {
    note: '❓なぜ「ひずみ」がたまるのでしょう。岩石は、曲げられてもすぐには折れず、ゆがみ（ひずみ）としてエネルギーをためこむからです。プレートの動きは1年に数cmなので、何十年、何百年とたまり続けます。',
    add: fresh(...sea(), pg([[0, 60], [130, 60], [230, 110], [230, 130], [130, 80], [0, 80]], C.blue, FILL.blue), pg([[320, 46], [160, 60], [170, 82], [210, 94], [250, 110], [320, 110]], C.main, FILL.warm), lb(230, 70, 'ひずみ', 14, C.red, 'middle', true), ...say('ひずみが、何十年もかけてたまっていく', C.red, FILL.red)),
  },
  {
    note: '限界をこえると、引きずりこまれていた大陸プレートが、一気にはね上がります。これが海溝型地震で、規模が大きくなりやすいのが特徴です。',
    add: fresh(...platesA(), ar(290, 96, 290, 56, C.red), lb(270, 118, 'はね上がる', 13, C.red, 'middle', true), ...say('限界 → 一気にはね上がる ＝ 海溝型地震', C.red, FILL.red)),
  },
  {
    note: '❓なぜ津波が起こるのでしょう。海底が大きく動くと、その上の海水全体が持ち上げられます。持ち上がった海水が、波となって四方に広がるのが津波です。',
    add: fresh(...sea(), ...platesA().slice(1), pg([[0, 40], [150, 40], [190, 26], [230, 40], [320, 40], [320, 46], [0, 46]], C.blue, FILL.blue), ar(210, 38, 210, 12, C.blue), ar(240, 30, 300, 30, C.blue), ...say('海底が動く → 海水が持ち上がる → 津波', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ津波は、ゆれのあとに来るのでしょう。津波は海の上を波として進むので、震源から岸まで届くのに時間がかかります。強いゆれのあとは、すぐ高台へにげます。',
    add: fresh(...sea(), ln(30, 92, 290, 92, C.gray), ci(50, 92, 8, undefined, C.red, FILL.red), ci(270, 92, 8, undefined, C.green, FILL.green), lb(50, 76, '震源', 11, C.red, 'middle', true), lb(270, 76, '海岸', 11, C.green, 'middle', true), ar(60, 116, 260, 116, C.blue), lb(160, 130, '津波が進むぶん、おくれて届く', 12, C.blue, 'middle', true), ...say('強いゆれのあとは、すぐ高台へ', C.red, FILL.red)),
  },
  {
    note: '内陸型地震です。大陸プレートの内部には、地層が割れてずれた「断層」があり、その中でも最近も動いた跡があり今後も動く可能性があるものを、活断層といいます。',
    add: fresh(pg([[0, 30], [320, 30], [320, 130], [0, 130]], C.main, FILL.warm), ln(150, 30, 190, 130, C.red, false, 3), ar(120, 60, 120, 96, C.blue), ar(220, 96, 220, 60, C.blue), lb(60, 80, '大陸プレートの内部', 12, C.main, 'middle', true), lb(250, 100, '活断層', 13, C.red, 'start', true), ...say('大陸プレート内の活断層がずれる ＝ 内陸型地震', C.red, FILL.red, 12)),
  },
  {
    note: '❓内陸型はなぜ、地表のゆれが大きいのでしょう。震源が浅く、ゆれ源が街のすぐ真下にあるからです。1995年の兵庫県南部地震が、この例です。',
    add: fresh(bx(20, 10, 130, 36, '海溝型\n震源は沖・深め', C.blue, FILL.blue, 12), bx(170, 10, 130, 36, '内陸型\n震源が浅い・真下', C.red, FILL.red, 12), ln(20, 74, 150, 74, C.ink, false, 2), ln(170, 74, 300, 74, C.ink, false, 2), lb(85, 64, '街', 12, C.ink, 'middle', true), lb(235, 64, '街', 12, C.ink, 'middle', true), ci(85, 130, 7, undefined, C.blue, FILL.blue), ar(85, 120, 85, 84, C.blue, true), ci(235, 92, 7, undefined, C.red, FILL.red), ar(235, 86, 235, 80, C.red), lb(112, 130, '深い', 11, C.blue, 'start'), lb(262, 96, '浅い', 11, C.red, 'start'), ...say('浅くて近い → 地表のゆれが大きい', C.red, FILL.red)),
  },
  {
    note: 'まとめて比べます。海溝型は、沈みこむプレートに引きずられた大陸プレートがはね上がり、津波を起こしやすい。内陸型は、活断層がずれ、震源が浅くて直下型になりやすい。',
    add: fresh(bx(10, 14, 148, 30, '海溝型', C.blue, FILL.blue, 13), bx(162, 14, 148, 30, '内陸型', C.red, FILL.red, 13), bx(10, 50, 148, 34, 'プレートの境目\nはね上がる', C.blue, FILL.blue, 11), bx(162, 50, 148, 34, '活断層が\nずれる', C.red, FILL.red, 11), bx(10, 90, 148, 34, '津波が\n起こりやすい', C.blue, FILL.blue, 11), bx(162, 90, 148, 34, '震源が浅い\n直下型', C.red, FILL.red, 11), ...say('日本は4つのプレートの境目にある', C.ink, FILL.yellow)),
  },
]);

// ══ 透明半球 ══
const dome = (): E[] => [sc(160, 118, 96, 0, 180, C.gray, FILL.gray), ln(56, 118, 264, 118, C.ink, false, 2), ci(160, 118, 4, undefined, C.red, FILL.red), lb(160, 132, 'O（観察者の目）', 10, C.red, 'middle', true)];
const pt = (deg: number, r = 90): [number, number] => [160 - r * Math.cos((deg * Math.PI) / 180), 118 - r * Math.sin((deg * Math.PI) / 180)];
const marks = (degs: number[]): E[] => degs.map((d) => ci(pt(d)[0], pt(d)[1], 4, undefined, C.blue, FILL.blue));
const hankyu: DiagramFigure = show([
  {
    note: '透明半球を紙の上に置くと、半球のふちの円が地平線、中心の点Oが観察者の位置を表します。この半球に、太陽の動きを記録します。❓どうやって記録するのでしょう。',
    add: [...dome(), ...say('半球の表面に、太陽の位置を印で残す', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜペン先の影を点Oに合わせるのでしょう。ペン先・点O・太陽が一直線に並ぶとき、ペン先の位置が、点Oから見た太陽の方向になるからです。',
    add: fresh(...dome(), ci(200, 34, 12, undefined, C.main, FILL.yellow), ln(200, 34, 160, 118, C.blue, true), ci(pt(45)[0] + 0, pt(45)[1], 4, undefined, C.blue, FILL.blue), lb(240, 34, '太陽', 12, C.main, 'start', true), ...say('ペン先・O・太陽が一直線 → その位置に印', C.blue, FILL.blue)),
  },
  {
    note: '1時間ごとに、同じ方法で印をつけていきます。印は、東から西へ、少しずつ動いていきます。',
    add: fresh(...dome(), ...marks([10, 35, 60, 85, 110, 135, 160]), lb(36, 112, '東', 13, C.gray, 'middle', true), lb(284, 112, '西', 13, C.gray, 'middle', true), ...say('1時間ごとに印をつける', C.blue, FILL.blue)),
  },
  {
    note: '印をなめらかな曲線で結び、半球のふちまでのばします。ふちと交わる点が日の出と日の入りの位置で、曲線がいちばん高い点が南中です。',
    add: fresh(...dome(), ...marks([10, 35, 60, 85, 110, 135, 160]), ...[10, 35, 60, 85, 110, 135, 160].slice(0, -1).map((d, i) => ln(pt(d)[0], pt(d)[1], pt([35, 60, 85, 110, 135, 160][i])[0], pt([35, 60, 85, 110, 135, 160][i])[1], C.blue, false, 2)), lb(58, 108, '日の出', 10, C.red, 'end', true), lb(262, 108, '日の入り', 10, C.red, 'start', true), lb(160, 14, '南中', 11, C.red, 'middle', true), ...say('曲線のいちばん高い点が南中', C.red, FILL.red)),
  },
  {
    note: '❓なぜ1時間ごとの印の間隔が等しいのでしょう。地球は一定の速さで自転していて、太陽は1時間に約15°ずつ動いて見えるからです。だから曲線の長さが、時間に比例します。',
    add: fresh(...dome(), ...marks([10, 35, 60, 85, 110, 135, 160]), ...[0, 1, 2].map((i) => ar(pt(10 + i * 25)[0] + 6, pt(10 + i * 25)[1] - 4, pt(35 + i * 25)[0] - 6, pt(35 + i * 25)[1] + 2, C.green)), ...say('同じ時間 ＝ 同じ長さ（1時間で約15°）', C.green, FILL.green)),
  },
  {
    note: 'この間隔を、紙テープで測ります。曲線に紙テープをあてて、印の位置を写しとると、1時間ごとの間隔が分かります。例題では、間隔は2.4cmです。',
    add: fresh(bx(20, 30, 280, 16, undefined, C.main, FILL.warm), ...[0, 1, 2, 3, 4].map((i) => ln(30 + i * 60, 30, 30 + i * 60, 46, C.red, false, 2)), ...[0, 1, 2, 3].map((i) => lb(60 + i * 60, 66, '2.4cm', 12, C.blue, 'middle', true)), lb(160, 100, '印と印の間隔 ＝ 1時間', 13, C.ink, 'middle', true), ...say('紙テープに、印の位置を写しとる', C.main, FILL.warm)),
  },
  {
    note: '日の出から南中まで、曲線にそった長さが14.4cm。1時間で2.4cmなので、14.4÷2.4＝6時間です。検算：2.4×6＝14.4cmで合っています。',
    add: fresh(bx(20, 24, 280, 34, '14.4cm ÷ 2.4cm ＝ 6時間', C.green, FILL.green, 16), ...[0, 1, 2, 3, 4, 5].map((i) => bx(20 + i * 46, 80, 44, 22, '1時間', C.blue, FILL.blue, 10)), lb(160, 122, '日の出から南中まで', 11, C.gray), ...say('検算：2.4 × 6 ＝ 14.4cm', C.green, FILL.green)),
  },
  {
    note: '別の問題です。1時間の間隔が2.0cmで、日の出から日の入りまでの曲線が24.0cm。24.0÷2.0＝12時間が昼の長さです。日の出から南中までは、その半分の6時間になります。',
    add: fresh(bx(20, 24, 280, 34, '24.0 ÷ 2.0 ＝ 12時間', C.green, FILL.green, 16), lb(160, 88, '昼の長さ ＝ 12時間', 14, C.ink, 'middle', true), lb(160, 114, '南中は、ちょうど真ん中', 12, C.gray), ...say('曲線の全体の長さ ÷ 間隔 ＝ 昼の時間', C.green, FILL.green)),
  },
  {
    note: '❓なぜ太陽は東から西へ動いて見えるのでしょう。実際は太陽が動くのではなく、地球が西から東へ自転しているからです。だから見かけの動きは、1日で1周します。',
    add: fresh(ci(110, 70, 46, undefined, C.blue, FILL.blue), lb(110, 70, '地球', 13, C.blue, 'middle', true), ar(70, 14, 150, 14, C.red), lb(110, 130, '自転：西から東', 12, C.red, 'middle', true), ci(270, 70, 20, '太陽', C.main, FILL.yellow, 11), lb(270, 106, '東から西へ\n動いて見える', 11, C.gray, 'middle'), ...say('見かけの動きの原因は、地球の自転', C.blue, FILL.blue)),
  },
  {
    note: 'まとめです。ペン先の影を点Oに合わせて印をつけ、印を曲線で結びます。1時間ごとの間隔が等しいので、間隔から時間が求められます。太陽の動きは、地球の自転による見かけの動きです。',
    add: fresh(bx(20, 12, 280, 30, '影を点Oに合わせて印をつける', C.blue, FILL.blue, 13), bx(20, 50, 280, 30, '1時間ごとの間隔は等しい', C.green, FILL.green, 13), bx(20, 88, 280, 30, '長さ ÷ 間隔 ＝ 時間', C.main, FILL.warm, 13), ...say('太陽の動き ＝ 地球の自転による見かけの動き', C.ink, FILL.yellow, 12)),
  },
]);

// ══ 北極星の高度と緯度 ══
/** 地球と観測者を横から見た図。緯度 phi（度）の位置に観測者を置く。 */
const earthAt = (phi: number, showAngle = true): E[] => {
  const cx = 110, cy = 96, r = 40;
  const a = (phi * Math.PI) / 180;
  const px = cx + r * Math.cos(a), py = cy - r * Math.sin(a);
  const tx = -Math.sin(a), ty = -Math.cos(a); // 地平線（北向き）
  const out: E[] = [
    ci(cx, cy, r, undefined, C.blue, FILL.blue), ln(cx, 22, cx, 170, C.gray, true), lb(cx - 24, 22, '地軸', 10, C.gray, 'middle', true),
    ln(cx - r - 10, cy, cx + r + 10, cy, C.gray, true),
    ln(px - tx * 60, py - ty * 60, px + tx * 60, py + ty * 60, C.ink, false, 2),
    ci(px, py, 4, undefined, C.red, FILL.red),
    ln(px, py, px, 10, C.purple, true, 1.6),
    ci(px, 12, 8, undefined, C.purple, FILL.yellow),
    lb(px + 12, 12, '北極星', 11, C.purple, 'start', true),
  ];
  if (showAngle && phi > 0 && phi < 90) out.push(sc(px, py, 26, 90, 90 + phi, C.red, FILL.red));
  return out;
};
const hokkyoku: DiagramFigure = show([
  {
    note: '北極星の高度（地平線からの角度）を測ると、その場所の緯度が分かります。❓なぜ高度が緯度と等しくなるのでしょう。順番に確かめていきます。',
    add: [...earthAt(35), lb(230, 70, '北極星の高度\n＝ 緯度？', 14, C.ink, 'middle', true), ...say('北極星の高度と緯度の関係を調べる', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ北極星は動かないのでしょう。地球は地軸を中心に自転していて、北極星は、その地軸をのばした先のほぼ真上にあるからです。回る軸の延長線上にある星は、位置が変わりません。',
    add: fresh(ci(110, 96, 40, undefined, C.blue, FILL.blue), ln(110, 20, 110, 170, C.gray, true), ci(110, 14, 8, undefined, C.purple, FILL.yellow), lb(126, 14, '北極星', 11, C.purple, 'start', true), ar(60, 146, 160, 146, C.red), lb(170, 146, '自転', 11, C.red, 'start', true), lb(240, 90, '地球が回っても\n軸の先は同じ位置', 12, C.ink, 'middle', true), ...say('北極星は地軸の延長線上にあるので動かない', C.purple, FILL.purple)),
  },
  {
    note: '❓北極星は地球のどこから見ても、同じ向きに見えるのでしょうか。星はとても遠いので、地球のどこから見ても、地軸と平行な向きにあると考えてよいからです。',
    add: fresh(ci(110, 96, 40, undefined, C.blue, FILL.blue), ...[[-38, 96], [0, 56], [38, 96], [26, 124]].map(([dx, y]) => ln(110 + dx, y, 110 + dx, 12, C.purple, true)), ci(110, 96, 3, undefined, C.blue, FILL.blue), lb(240, 70, '遠いので\n平行に見える', 13, C.ink, 'middle', true), ...say('どこから見ても、北極星は同じ向き（平行）', C.purple, FILL.purple)),
  },
  {
    note: '北極（緯度90°）で見ると、地面が水平で、北極星はまうえにあります。高度は90°で、緯度と同じです。',
    add: fresh(...earthAt(90, false), lb(230, 70, '緯度 90°\n高度 90°', 15, C.red, 'middle', true), ...say('北極 ： 高度90° ＝ 緯度90°', C.red, FILL.red)),
  },
  {
    note: '赤道（緯度0°）で見ると、地面が地軸と平行になり、北極星は地平線上にあります。高度は0°で、これも緯度と同じです。',
    add: fresh(...earthAt(0, false), lb(230, 70, '緯度 0°\n高度 0°', 15, C.red, 'middle', true), ...say('赤道 ： 高度0° ＝ 緯度0°', C.red, FILL.red)),
  },
  {
    note: '❓では、その間の北緯35°ではどうでしょう。赤道から北へ35°進むと、地面の向きが35°かたむきます。北極星の向きは変わらないので、地平線との角度が35°になります。',
    add: fresh(...earthAt(35), lb(240, 80, '35°', 20, C.red, 'middle', true), lb(240, 110, '北緯35°\n高度35°', 12, C.ink, 'middle', true), ...say('北へ35°進む ＝ 地面が35°かたむく ＝ 高度35°', C.red, FILL.red, 12)),
  },
  {
    note: '❓なぜ「地面がかたむいた分」が高度になるのでしょう。北極星の向きは、地軸と平行で動きません。地面のほうがかたむくので、その角度だけ、北極星が地平線から持ち上がって見えるからです。',
    add: fresh(...earthAt(60), lb(240, 80, '60°', 20, C.red, 'middle', true), lb(240, 110, '緯度が大きい\n＝ 高く見える', 12, C.ink, 'middle', true), ...say('北へ行くほど、北極星は高く見える', C.purple, FILL.purple)),
  },
  {
    note: '例題です。北緯26°の地点では、北極星の高度は約26°。北緯35°の地点では約35°。高度を測るだけで、緯度が分かります。',
    add: fresh(bx(20, 24, 130, 44, '北緯26°\n→ 高度26°', C.blue, FILL.blue, 14), bx(170, 24, 130, 44, '北緯35°\n→ 高度35°', C.green, FILL.green, 14), lb(160, 100, '高度 ＝ 緯度', 18, C.red, 'middle', true), ...say('高度と緯度は同じ数', C.ink, FILL.yellow)),
  },
  {
    note: '逆も言えます。北極星の高度を測って42°だったなら、そこは北緯42°の地点です。船で位置を知る、昔ながらの方法でした。',
    add: fresh(bx(20, 24, 130, 44, '高度 42°', C.purple, FILL.purple, 15), ar(152, 46, 168, 46, C.gray), bx(170, 24, 130, 44, '北緯 42°', C.green, FILL.green, 15), ...say('高度を測れば、緯度が分かる', C.green, FILL.green)),
  },
  {
    note: '北の空の星は、北極星を中心に反時計回りに動きます。❓1時間に何度動くのでしょう。地球は24時間で360°自転するので、360÷24＝15°です。',
    add: fresh(ci(160, 74, 4, undefined, C.purple, FILL.yellow), ci(160, 74, 54, undefined, C.gray, undefined), sc(160, 74, 54, 90, 105, C.red, FILL.red), ci(160, 20, 4, undefined, C.blue, FILL.blue), ci(160 - 54 * Math.sin(Math.PI / 12), 74 - 54 * Math.cos(Math.PI / 12), 4, undefined, C.blue, FILL.blue), lb(268, 60, '1時間に15°\n反時計回り', 13, C.red, 'middle', true), lb(160, 138, '北極星', 10, C.purple), ...say('360° ÷ 24時間 ＝ 15°／時間', C.red, FILL.red)),
  },
  {
    note: 'まとめです。北極星は地軸の延長線上にあって動かず、高度＝緯度になります。北の空の星は、北極星を中心に、反時計回りに1時間15°動きます。',
    add: fresh(bx(20, 12, 280, 30, '北極星は地軸の延長線上 → 動かない', C.purple, FILL.purple, 12), bx(20, 50, 280, 30, '高度 ＝ 緯度', C.red, FILL.red, 14), bx(20, 88, 280, 30, '星は反時計回りに1時間15°', C.blue, FILL.blue, 13), ...say('地球は24時間で360°自転する', C.ink, FILL.yellow)),
  },
]);

// ══ 南中時刻と経度 ══
/** 北極上空から見た地球。太陽は右。西の点(−30°)・基準の点(0°)・東の点(＋30°)。 */
const topEarth = (): E[] => {
  const cx = 100, cy = 76, r = 50;
  const at = (deg: number): [number, number] => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
  return [
    ci(cx, cy, r, undefined, C.blue, FILL.blue), lb(cx, cy, '北極', 11, C.gray, 'middle', true),
    ci(275, cy, 20, '太陽', C.main, FILL.yellow, 11), ...[-30, 0, 30].map((y) => ar(250, cy + y, 198 + (Math.abs(y) > 0 ? 6 : 0), cy + y, C.main)),
    ci(at(30)[0], at(30)[1], 5, undefined, C.green, FILL.green), ci(at(0)[0], at(0)[1], 5, undefined, C.red, FILL.red), ci(at(-30)[0], at(-30)[1], 5, undefined, C.purple, FILL.purple),
  ];
};
const keido: DiagramFigure = show([
  {
    note: '太陽が真南に来る時刻を南中時刻といいます。日本標準時は東経135°を基準にしていて、東経135°の地点では12時に南中します。❓では、東経140°や130°の地点ではどうなるでしょう。',
    add: [...topEarth(), ...say('基準：東経135° で 12時に南中', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ場所によって南中の時刻がちがうのでしょう。地球が自転していて、太陽に向く場所が時間とともに動いていくからです。西から東へ回るので、場所によって太陽に向くタイミングが変わります。',
    add: fresh(...topEarth(), ar(60, 134, 140, 134, C.red), lb(100, 146, '自転（西から東）', 11, C.red, 'middle', true), ...say('地球が回るから、南中の時刻が場所でずれる', C.red, FILL.red)),
  },
  {
    note: '❓どれくらいずれるのでしょう。地球は24時間で360°回ります。360÷24＝15°なので、経度が15°ちがうと1時間のずれです。',
    add: fresh(bx(20, 24, 130, 40, '24時間で\n360°回る', C.blue, FILL.blue, 13), ar(152, 44, 178, 44, C.gray), bx(180, 24, 120, 40, '1時間で\n15°', C.green, FILL.green, 13), lb(160, 100, '360 ÷ 24 ＝ 15', 16, C.ink, 'middle', true), ...say('経度15° ＝ 時刻のずれ1時間', C.green, FILL.green)),
  },
  {
    note: '❓では、経度1°では何分でしょう。1時間＝60分が15°にあたるので、1°あたり60÷15＝4分です。別の考え方でも、24時間＝1440分÷360°＝4分で同じです。',
    add: fresh(bx(20, 24, 130, 40, '15° ＝ 60分', C.blue, FILL.blue, 14), ar(152, 44, 178, 44, C.gray), bx(180, 24, 120, 40, '1° ＝ 4分', C.green, FILL.green, 14), lb(160, 100, '60 ÷ 15 ＝ 4', 15, C.ink, 'middle', true), lb(160, 122, '1440 ÷ 360 ＝ 4', 13, C.gray), ...say('経度1° ＝ 4分', C.green, FILL.green)),
  },
  {
    note: '❓東と西では、どちらが早いのでしょう。地球は西から東へ自転するので、東にある地点のほうが先に太陽のほうへ向き、南中が早くなります。西の地点は、あとから太陽に向くので遅くなります。',
    add: fresh(...topEarth(), lb(160, 30, '東(＋30°)', 10, C.green, 'middle', true), lb(150, 130, '西(−30°)', 10, C.purple, 'middle', true), ...say('東ほど南中が早く、西ほど遅い', C.green, FILL.green)),
  },
  {
    note: '例題です。東経135°で12時に南中。東経140°は、経度差が140−135＝5°、5×4＝20分のずれです。東にあるので、南中は20分早く、11時40分です。',
    add: fresh(bx(20, 20, 280, 34, '経度差 5° → 5 × 4 ＝ 20分', C.blue, FILL.blue, 15), bx(20, 66, 280, 34, '東なので早い → 12時 − 20分 ＝ 11時40分', C.green, FILL.green, 13), ...say('東経140° の南中は 11時40分', C.green, FILL.green)),
  },
  {
    note: '3つの地点を、時刻の線で並べます。東経130°は12時20分、東経135°は12時、東経140°は11時40分。東へ行くほど、時刻が早くなっています。',
    add: fresh(ln(30, 70, 290, 70, C.gray, false, 3), ...[[50, '130°', '12:20', C.purple], [160, '135°', '12:00', C.red], [270, '140°', '11:40', C.green]].flatMap((r) => [ci(r[0] as number, 70, 8, undefined, r[3] as string, FILL.warm), lb(r[0] as number, 48, `東経${r[1]}`, 12, r[3] as string, 'middle', true), lb(r[0] as number, 96, r[2] as string, 14, r[3] as string, 'middle', true)]), lb(160, 122, '西 ←　→ 東', 12, C.gray), ...say('東ほど早い（11:40 ＜ 12:00 ＜ 12:20）', C.ink, FILL.yellow)),
  },
  {
    note: '練習です。東経130°の南中時刻は。経度差は135−130＝5°、5×4＝20分。東経130°は基準より西にあるので遅くなり、12時＋20分＝12時20分です。',
    add: fresh(bx(20, 20, 280, 34, '経度差 5° → 5 × 4 ＝ 20分', C.blue, FILL.blue, 15), bx(20, 66, 280, 34, '西なので遅い → 12時 ＋ 20分 ＝ 12時20分', C.purple, FILL.purple, 13), ...say('東経130° の南中は 12時20分', C.purple, FILL.purple)),
  },
  {
    note: '解き方の手順をまとめます。①基準の東経135°との差を求める、②差×4分でずれを出す、③東なら引く、西なら足す。この順に行えば、まちがえません。',
    add: fresh(bx(20, 12, 280, 30, '① 東経135°との差を出す', C.blue, FILL.blue, 13), bx(20, 48, 280, 30, '② 差 × 4分 ＝ ずれ', C.green, FILL.green, 13), bx(20, 84, 280, 30, '③ 東は引く・西は足す', C.red, FILL.red, 13), ...say('12時を出発点にして計算する', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめです。経度15°で1時間、経度1°で4分のずれ。東ほど南中が早く、西ほど遅い。日本標準時の基準は東経135°です。',
    add: fresh(bx(20, 14, 280, 30, '経度15° ＝ 1時間　経度1° ＝ 4分', C.green, FILL.green, 13), bx(20, 52, 280, 30, '東ほど早く、西ほど遅い', C.red, FILL.red, 13), bx(20, 90, 280, 30, '日本標準時 ＝ 東経135°が基準', C.blue, FILL.blue, 13), ...say('地球は24時間で360°自転する', C.ink, FILL.yellow)),
  },
]);

export const DIAGRAMS_KOKO_RIKA_C: Record<string, DiagramFigure> = {
  '無セキツイ動物のなかまわけ（節足動物・軟体動物）': setsu,
  '遺伝の割合から個体数を求める問題（AA・Aa・aa）': iden,
  '根の細胞分裂の観察のしかた（染色と順番）': cells,
  '観測地点の表から地震の速さと発生時刻を求める': jishin,
  '3地点のボーリングから地層の傾きを求める': boring,
  '気温が変わると湿度はどう変わるか（水蒸気量は同じ）': shitsudo,
  '海溝型地震と内陸型地震・津波': kaikou,
  '透明半球に太陽の動きを記録する': hankyu,
  '北極星の高度と緯度の関係': hokkyoku,
  '南中時刻のずれと経度': keido,
};
