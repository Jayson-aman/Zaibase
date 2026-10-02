// 理科（中学受験）の以前からある公式 第3群（data/formulas-rika.ts）の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」を根っこまでたどる連鎖で、7枚以上。
// 画面の上半分に図、下の帯（band）に、そのスライドの式やひとこと、という配置にそろえてある。
import type { DiagramFigure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, cover, dots } from './diagram-kit';

/** 下の帯にひとこと（1〜2行）を出す。 */
const cap = (a: string, b?: string, col: string = C.ink): DiagramElement[] =>
  band(150, lb(160, 172, a, 12, col, 'middle', true), ...(b ? [lb(160, 196, b, 11, C.gray)] : []));

// ── 空の動き（太陽・月・星）で使う共通の図 ──
const HZ = { cx: 160, cy: 118, rx: 130, ry: 84 };
const skyPt = (deg: number) => ({ x: HZ.cx + HZ.rx * Math.cos((deg * Math.PI) / 180), y: HZ.cy - HZ.ry * Math.sin((deg * Math.PI) / 180) });
const horizon = (): DiagramElement[] => [
  ln(10, 118, 310, 118, C.gray, false, 2),
  lb(30, 132, '東', 11, C.gray, 'middle', true),
  lb(160, 132, '南', 11, C.gray, 'middle', true),
  lb(290, 132, '西', 11, C.gray, 'middle', true),
];
const skyArc = (color: string = C.gray): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let d = 180; d > 0; d -= 15) {
    const a = skyPt(d);
    const b = skyPt(d - 15);
    out.push(ln(a.x, a.y, b.x, b.y, color, true));
  }
  return out;
};
const sunAt = (deg: number, r = 9, text?: string): DiagramElement => {
  const p = skyPt(deg);
  return ci(p.x, p.y, r, text, C.red, FILL.yellow, 9);
};

// ── ものが燃える3条件 ──
const tri = (hi: number[] = []): DiagramElement[] =>
  ['燃える物', '酸素', '発火点以上の\n温度'].map((t, i) => bx(10 + i * 105, 10, 95, 38, t, hi.includes(i) ? C.red : C.main, hi.includes(i) ? FILL.red : FILL.warm, 12));
const candle = (x: number, y: number, lit: boolean): DiagramElement[] => [
  bx(x, y + 8, 14, 32, undefined, C.gray, FILL.yellow),
  lit ? ci(x + 7, y, 6, undefined, C.red, '#FDBA74') : lb(x + 7, y, '×', 14, C.gray, 'middle', true),
];
const moeru: DiagramFigure = show([
  {
    note: 'ろうそくや木は、火がつくと燃（も）えつづけます。❓では、ものが燃えつづけるには何がいるのでしょう。答えは3つ。「燃える物」「酸素（さんそ）」「発火点（はっかてん）以上の温度（おんど）」で、3つそろってはじめて燃えつづけます。',
    add: [...tri(), ...cap('3つがそろうと、燃えつづける')],
  },
  {
    note: '❓なぜ「燃える物」がいるの？→木・紙・ろうのように、燃えるものがあってはじめて火が続くからです。砂（すな）や石は燃えないので、火をつけても続きません。燃える物が1つ目の条件です。',
    add: [...tri([0]), bx(30, 72, 120, 44, '木・紙・ろう\n→ 燃える', C.green, FILL.green, 12), bx(170, 72, 120, 44, '砂・石\n→ 燃えない', C.gray, FILL.gray, 12), ...cap('燃える物がなければ、火は続かない')],
  },
  {
    note: '❓では、なぜ「酸素」がいるの？→ものが燃えるとは、その物が酸素と結びつくことだからです。ろうそくのまわりには空気があり、空気にふくまれる酸素が、いつも火にとどいています。',
    add: [...tri([1]), cover(0, 56, 320, 92), ...candle(153, 92, true), ci(70, 84, 6, undefined, C.blue, FILL.blue), ci(90, 118, 6, undefined, C.blue, FILL.blue), ci(240, 84, 6, undefined, C.blue, FILL.blue), ci(228, 118, 6, undefined, C.blue, FILL.blue), ar(78, 90, 143, 106, C.blue), ar(232, 90, 172, 106, C.blue), lb(60, 66, '酸素', 10, C.blue), lb(250, 66, '酸素', 10, C.blue), ...cap('空気の中の酸素が、火にとどく')],
  },
  {
    note: '❓ろうそくにびんをかぶせると、なぜ消えるの？→びんの中の酸素は、燃えるのに使われてどんどん減（へ）ります。外から新しい酸素が入ってこないので、足りなくなったところで火が消えます。',
    add: [cover(0, 56, 320, 92), bx(105, 60, 110, 78, undefined, C.blue, FILL.blue), ...candle(153, 92, false), ci(125, 84, 6, undefined, C.blue, FILL.blue), lb(120, 70, '酸素が少ない', 9, C.blue), ...cap('びんの中の酸素が足りなくなる', '→ 火が消える', C.red)],
  },
  {
    note: '❓三つ目の「温度」とは？→ものには、火がなくても燃えはじめる温度があり、これを発火点といいます。❓なぜ、ろうそくの火を近づけると燃える？→火の熱で温度が上がり、発火点以上になるからです。',
    add: [...tri([2]), cover(0, 56, 320, 92), bx(40, 74, 240, 22, undefined, C.gray, FILL.gray), bx(40, 74, 160, 22, undefined, C.blue, FILL.blue), ln(200, 62, 200, 108, C.red, true, 2.5), lb(200, 56, '発火点', 11, C.red, 'middle', true), lb(120, 118, '発火点より低い → 燃えない', 10, C.blue), lb(255, 118, '以上 → 燃える', 10, C.red), ar(50, 132, 270, 132, C.main), lb(160, 142, 'あたためる', 9, C.main), ...cap('発火点以上になると燃えはじめる')],
  },
  {
    note: '❓火を消したいときは、どうすればいい？→3つのうち、どれか1つをなくせばよいのです。水をかければ温度が下がり、ふたをすれば酸素がとどかなくなり、ガスの元せんをしめれば燃える物がなくなります。',
    add: [cover(0, 0, 320, 150), bx(10, 14, 120, 32, '水をかける', C.main, FILL.warm, 12), ar(132, 30, 168, 30), bx(170, 14, 140, 32, '温度を下げる', C.red, FILL.red, 12), bx(10, 58, 120, 32, 'ふたをする', C.main, FILL.warm, 12), ar(132, 74, 168, 74), bx(170, 58, 140, 32, '酸素をたつ', C.red, FILL.red, 12), bx(10, 102, 120, 32, 'ガスの元せんを\nしめる', C.main, FILL.warm, 11), ar(132, 118, 168, 118), bx(170, 102, 140, 32, '燃える物をなくす', C.red, FILL.red, 12), ...cap('消火（しょうか）は3つのうち1つをなくす')],
  },
  {
    note: '❓なぜ1つでも欠（か）けると消えるの？→燃えつづけるには3つ全部が同時に必要だからです。たとえば酸素があっても、燃える物がなければ火は続きません。どれか1つが0になれば、そこで終わりです。',
    add: [cover(0, 0, 320, 150), ...tri(), lb(160, 68, '×', 26, C.red, 'middle', true), lb(160, 104, '1つでも欠ける', 14, C.red, 'middle', true), ...cap('3つのうち1つでもなくなれば、火は消える')],
  },
  {
    note: '❓びんが大きいと、消えるまでの時間はどうなる？→中の酸素が多いので、長く燃えます。❓では酸素は全部なくなってから消える？→いいえ。全部は使いきらず、酸素が少なくなった段階で火は消えます。',
    add: [cover(0, 0, 320, 150), bx(30, 60, 90, 66, '小さいびん\n酸素が少ない', C.blue, FILL.blue, 11), bx(150, 30, 150, 96, '大きいびん\n酸素が多い\n→ 長く燃える', C.blue, FILL.blue, 12), ...cap('酸素は全部なくなる前に、火が消える', '（びんの中の酸素が使いきられるわけではない）')],
  },
  {
    note: 'まとめです。燃える物・酸素・発火点以上の温度の3つがそろうと燃えつづけ、1つでも欠けると消えます。消火のしかたも、この3つで説明できます。',
    add: [cover(0, 0, 320, 150), ...tri(), bx(30, 70, 260, 34, '3つそろう → 燃えつづける', C.green, FILL.green, 13), bx(30, 112, 260, 30, '1つ欠ける → 消える', C.red, FILL.red, 13), ...cap('3つの条件で、消火も説明できる')],
  },
]);

// ── 酸性・中性・アルカリ性（リトマス紙） ──
const BLUEP = '#7DD3FC';
const REDP = '#FCA5A5';
const paper = (x: number, y: number, red: boolean, text?: string): DiagramElement => bx(x, y, 60, 22, text, red ? C.red : C.blue, red ? REDP : BLUEP, 10);
const beaker = (x: number, y: number, text: string, fill: string, color: string): DiagramElement => bx(x, y, 84, 62, text, color, fill, 12);
const litmus: DiagramFigure = show([
  {
    note: '水溶液（すいようえき）には、酸性・中性・アルカリ性の3種類があります。❓見た目が同じ透明（とうめい）な液を、どうやって見分けるのでしょう。使うのが、色が変わる紙「リトマス紙」です。',
    add: [bx(10, 20, 90, 50, '酸性', C.red, FILL.yellow, 13), bx(115, 20, 90, 50, '中性', C.green, FILL.green, 13), bx(220, 20, 90, 50, 'アルカリ性', C.blue, FILL.blue, 12), paper(80, 92, false, '青'), paper(180, 92, true, '赤'), ...cap('リトマス紙で、3種類を見分ける')],
  },
  {
    note: '❓酸性の液にひたすと？→青色のリトマス紙が、赤色に変わります。赤色の紙は変わりません。',
    add: [cover(0, 0, 320, 150), beaker(10, 40, '酸性の\n水溶液', FILL.yellow, C.red), lb(160, 26, '青リトマス紙', 10, C.blue), paper(115, 36, false), ar(180, 47, 222, 47), paper(230, 36, true), lb(255, 74, '赤に変わる', 10, C.red), ...cap('酸性：青 → 赤')],
  },
  {
    note: '❓アルカリ性の液にひたすと？→こんどは反対に、赤色のリトマス紙が青色に変わります。青色の紙は変わりません。',
    add: [cover(0, 0, 320, 150), beaker(10, 40, 'アルカリ性の\n水溶液', FILL.blue, C.blue), lb(160, 26, '赤リトマス紙', 10, C.red), paper(115, 36, true), ar(180, 47, 222, 47), paper(230, 36, false), lb(255, 74, '青に変わる', 10, C.blue), ...cap('アルカリ性：赤 → 青')],
  },
  {
    note: '❓では、中性の液にひたすと？→青い紙も赤い紙も、どちらも色が変わりません。酸性でもアルカリ性でもないので、どちらの紙も反応しないのです。',
    add: [cover(0, 0, 320, 150), beaker(10, 40, '中性の\n水溶液', FILL.green, C.green), paper(120, 20, false, '青'), ar(184, 31, 218, 31), paper(226, 20, false, '青のまま'), paper(120, 64, true, '赤'), ar(184, 75, 218, 75), paper(226, 64, true, '赤のまま'), ...cap('中性：どちらも変化なし')],
  },
  {
    note: '❓そもそも、なぜ紙の色が変わるの？→リトマス紙には色素（しきそ）がしみこませてあり、酸性のもとやアルカリ性のもとにふれると、その色素の色が変わるからです。',
    add: [cover(0, 0, 320, 150), bx(20, 30, 100, 46, 'リトマス紙の\n色素', C.main, FILL.warm, 12), lb(140, 53, '＋', 20, C.ink, 'middle', true), bx(160, 30, 140, 46, '酸性・アルカリ性\nのもと', C.purple, FILL.purple, 12), ar(160, 80, 160, 108), bx(90, 108, 140, 30, '色素の色が変わる', C.red, FILL.red, 12), ...cap('ふれた性質によって、色の変わり方がちがう')],
  },
  {
    note: '❓まちがえないコツは？→「変わる向き」をセットで覚えます。酸性は「青を赤に」、アルカリ性は「赤を青に」。どちらも変わらなければ中性です。',
    add: [cover(0, 0, 320, 150), bx(10, 14, 150, 30, '青が赤に変わる', C.blue, FILL.blue, 12), ar(162, 29, 198, 29), bx(200, 14, 110, 30, '酸性', C.red, FILL.red, 13), bx(10, 58, 150, 30, '赤が青に変わる', C.red, FILL.red, 12), ar(162, 73, 198, 73), bx(200, 58, 110, 30, 'アルカリ性', C.blue, FILL.blue, 12), bx(10, 102, 150, 30, 'どちらも変わらない', C.gray, FILL.gray, 12), ar(162, 117, 198, 117), bx(200, 102, 110, 30, '中性', C.green, FILL.green, 13), ...cap('「青→赤なら酸性」と覚える')],
  },
  {
    note: 'リトマス紙のほかに、BTB液（びーてぃーびーえき）でも見分けられます。❓何色になる？→酸性で黄色、中性で緑、アルカリ性で青。「黄・緑・青」の順で、左から酸性・中性・アルカリ性と覚えます。',
    add: [cover(0, 0, 320, 150), ci(60, 56, 28, '黄', C.gray, '#FDE047', 15), ci(160, 56, 28, '緑', C.gray, '#86EFAC', 15), ci(260, 56, 28, '青', C.gray, '#93C5FD', 15), lb(60, 100, '酸性', 12, C.red, 'middle', true), lb(160, 100, '中性', 12, C.green, 'middle', true), lb(260, 100, 'アルカリ性', 12, C.blue, 'middle', true), ...cap('BTB液：黄・緑・青 ＝ 酸性・中性・アルカリ性')],
  },
  {
    note: 'もう1つ、フェノールフタレイン液があります。❓これは何色になる？→アルカリ性のときだけ赤色になり、それ以外は無色（むしょく）のままです。',
    add: [cover(0, 0, 320, 150), bx(20, 24, 120, 42, 'アルカリ性', C.blue, FILL.blue, 13), ar(142, 45, 178, 45), ci(230, 45, 26, '赤', C.red, '#FCA5A5', 15), bx(20, 84, 120, 42, '酸性・中性', C.gray, FILL.gray, 13), ar(142, 105, 178, 105), ci(230, 105, 26, '無色', C.gray, '#FFFFFF', 12), ...cap('アルカリ性のときだけ赤くなる')],
  },
  {
    note: '❓フェノールフタレイン液を入れて無色だったとき、酸性と決められる？→決められません。酸性と中性のどちらも無色だからです。そのときはリトマス紙を使い、青が赤に変われば酸性、どちらも変わらなければ中性とわかります。',
    add: [cover(0, 0, 320, 150), bx(20, 14, 280, 30, '無色 → 酸性か中性（まだ決められない）', C.gray, FILL.gray, 12), ar(160, 46, 160, 70), bx(20, 72, 280, 30, 'さらにリトマス紙を使う', C.main, FILL.warm, 12), bx(20, 112, 130, 30, '青→赤：酸性', C.red, FILL.red, 12), bx(170, 112, 130, 30, '変化なし：中性', C.green, FILL.green, 12), ...cap('1つの液では決められないときは、別の方法もあわせる')],
  },
]);

// ── 中和 ──
const chuwa: DiagramFigure = show([
  {
    note: '酸性の塩酸（えんさん）と、アルカリ性の水酸化ナトリウム水溶液を混ぜます。❓混ぜると、どうなるのでしょう。',
    add: [bx(10, 30, 120, 50, '塩酸\n（酸性）', C.red, FILL.red, 13), lb(147, 55, '＋', 20, C.ink, 'middle', true), bx(165, 30, 145, 50, '水酸化ナトリウム\n水溶液（アルカリ性）', C.blue, FILL.blue, 11), lb(160, 110, '混ぜると…？', 14, C.purple, 'middle', true), ...cap('酸性 ＋ アルカリ性 ＝ ？')],
  },
  {
    note: '❓どうなる？→たがいの性質（せいしつ）を打ち消し合います。これを中和（ちゅうわ）といいます。酸性の力とアルカリ性の力がぶつかって、弱まるのです。',
    add: [cover(0, 0, 320, 150), bx(10, 40, 100, 44, '酸性の力', C.red, FILL.red, 13), bx(210, 40, 100, 44, 'アルカリ性の力', C.blue, FILL.blue, 12), ar(112, 62, 155, 62, C.red), ar(208, 62, 165, 62, C.blue), lb(160, 105, '打ち消し合う ＝ 中和', 14, C.purple, 'middle', true), ...cap('たがいの性質を打ち消し合うのが中和')],
  },
  {
    note: '❓なぜ打ち消し合うの？→酸性のもとと、アルカリ性のもとが結びついて、水になってしまうからです。もとがなくなるので、どちらの性質も消えていきます。',
    add: [cover(0, 0, 320, 150), lb(40, 16, '酸性のもと', 9, C.red), lb(100, 16, 'アルカリ性のもと', 9, C.blue), ...[42, 78, 114].flatMap((y) => [ci(40, y, 11, undefined, C.red, FILL.red), lb(70, y, '＋', 14, C.ink, 'middle', true), ci(100, y, 11, undefined, C.blue, FILL.blue), ar(126, y, 176, y, C.gray), bx(182, y - 12, 70, 24, '水', C.main, FILL.warm, 12)]), ...cap('酸性のもと ＋ アルカリ性のもと → 水')],
  },
  {
    note: '❓水のほかに何ができる？→「塩（えん）」という物ができます。塩酸と水酸化ナトリウム水溶液の場合は、その塩が食塩（塩化ナトリウム）です。',
    add: [cover(0, 0, 320, 150), bx(10, 30, 130, 56, '塩酸\n＋水酸化ナトリウム\n水溶液', C.main, FILL.warm, 11), ar(142, 58, 178, 58), bx(180, 30, 130, 56, '水\n＋ 食塩\n（塩化ナトリウム）', C.green, FILL.green, 11), lb(160, 112, '中和 → 水 と 塩（えん）ができる', 12, C.purple, 'middle', true), ...cap('食塩は、塩の仲間のひとつ')],
  },
  {
    note: '❓中和が進むと、液の性質はどう変わる？→BTB液を入れて見ます。はじめは酸性で黄色、アルカリ性を少しずつ加えて、ちょうど中和すると緑（中性）、加えすぎると青（アルカリ性）になります。',
    add: [cover(0, 0, 320, 150), bx(8, 34, 88, 64, '加える前\n酸性\n黄色', C.gray, '#FEF08A', 12), ar(98, 66, 116, 66), bx(118, 34, 84, 64, 'ちょうど\n中性\n緑色', C.gray, '#BBF7D0', 12), ar(204, 66, 222, 66), bx(224, 34, 88, 64, '入れすぎ\nアルカリ性\n青色', C.gray, '#BFDBFE', 12), ...cap('ちょうど中和したとき、中性になる')],
  },
  {
    note: '❓なぜ入れすぎるとアルカリ性になるの？→酸性のもと（赤）がぜんぶ水になって消えたあとも、アルカリ性のもと（青）が余るからです。余った分が、液をアルカリ性にします。',
    add: [cover(0, 0, 320, 150), lb(24, 34, '酸', 11, C.red, 'middle', true), lb(24, 74, 'ア', 11, C.blue, 'middle', true), ...[60, 100, 140, 180].flatMap((x) => [ci(x, 34, 11, undefined, C.red, FILL.red), ci(x, 74, 11, undefined, C.blue, FILL.blue), ln(x, 46, x, 62, C.gray, true)]), ci(220, 74, 11, undefined, C.purple, FILL.purple), ci(260, 74, 11, undefined, C.purple, FILL.purple), lb(240, 100, '余り → アルカリ性', 10, C.purple, 'middle', true), lb(120, 100, '結びついて水になる', 10, C.gray, 'middle'), ...cap('酸のもとが先になくなり、アルカリのもとが余る')],
  },
  {
    note: '❓ちょうど中和した液をじっくり熱（あつ）すると？→水は水蒸気（すいじょうき）になって空気中に出ていき、あとに白い食塩の粒（つぶ）が残ります。',
    add: [cover(0, 0, 320, 150), pg([[90, 100], [230, 100], [210, 128], [110, 128]], C.gray, FILL.gray), ...[122, 140, 158, 176, 194].map((x) => bx(x, 92, 8, 8, undefined, C.gray, '#FFFFFF')), ar(130, 84, 130, 40, C.blue, true), ar(160, 84, 160, 30, C.blue, true), ar(190, 84, 190, 40, C.blue, true), lb(160, 20, '水は蒸発（じょうはつ）', 10, C.blue, 'middle', true), lb(270, 100, '食塩が残る', 10, C.green, 'middle', true), ...cap('蒸発させると、食塩が残る')],
  },
  {
    note: '❓なぜ食塩は残るの？→水は熱すると水蒸気になって出ていくのに、食塩は固体（こたい）のままで、この程度の熱では蒸発しないからです。だから蒸発皿（さら）に白い粒が残ります。',
    add: [cover(0, 0, 320, 150), bx(10, 26, 130, 44, '水（液体）', C.blue, FILL.blue, 13), ar(142, 48, 178, 48), bx(180, 26, 130, 44, '水蒸気になって\n出ていく', C.blue, FILL.blue, 11), bx(10, 86, 130, 44, '食塩（固体）', C.green, FILL.green, 13), ar(142, 108, 178, 108), bx(180, 86, 130, 44, 'そのまま\n残る', C.green, FILL.green, 12), ...cap('固体の塩は、蒸発しないで残る')],
  },
  {
    note: 'まとめです。酸性とアルカリ性を混ぜるとたがいの性質を打ち消し合い（中和）、水と塩ができます。ちょうど中和すると中性、アルカリを入れすぎると今度はアルカリ性になります。',
    add: [cover(0, 0, 320, 150), bx(20, 14, 280, 30, '酸性 ＋ アルカリ性 → 水 ＋ 塩', C.purple, FILL.purple, 13), bx(20, 56, 280, 30, 'ちょうど中和 → 中性（BTB液は緑）', C.green, FILL.green, 12), bx(20, 98, 280, 30, 'アルカリを入れすぎ → アルカリ性（青）', C.blue, FILL.blue, 12), ...cap('蒸発させると、塩（食塩など）が残る')],
  },
]);

// ── 太陽の1日の動き（日周運動） ──
const nisshu: DiagramFigure = show([
  {
    note: '太陽は、朝は東の空からのぼり、昼ごろに南の空を通り、夕方に西の空にしずみます。❓なぜ、いつも同じ道すじを通るのでしょう。まず、動き方を確かめます。',
    add: [...horizon(), ...skyArc(), sunAt(180), sunAt(90), sunAt(0), lb(64, 106, '日の出', 9, C.red), lb(160, 26, '正午ごろ', 9, C.red), lb(256, 106, '日の入り', 9, C.red), ...cap('東からのぼり、南を通り、西にしずむ')],
  },
  {
    note: '❓では、本当に太陽が動いているの？→いいえ。動いているのは地球です。地球は、北極の上から見ると反時計（はんとけい）回りに、西から東へコマのように回っています。これを自転（じてん）といいます。',
    add: [cover(0, 0, 320, 150), ci(30, 60, 16, '太陽', C.red, FILL.yellow, 9), ar(52, 60, 100, 60, C.red), ci(190, 60, 40, undefined, C.blue, FILL.blue), ar(232, 78, 232, 42, C.blue), ar(148, 42, 148, 78, C.blue), lb(190, 60, '地球', 12, C.blue, 'middle', true), lb(190, 118, '西から東へ自転', 11, C.blue, 'middle', true), ...cap('動いているのは地球（自転）')],
  },
  {
    note: '❓なぜ、太陽は東から西へ動いて見えるの？→走る電車の中から外を見ると、電車は右へ進んでいるのに、木は左へ動いて見えますね。同じように、地球が西から東へ回るので、太陽は反対の西へ動いて見えます。',
    add: [cover(0, 0, 320, 150), bx(20, 40, 130, 46, '電車（右へ進む）', C.main, FILL.warm, 12), ar(30, 100, 130, 100, C.main), bx(210, 40, 90, 46, '木\n（左へ動いて見える）', C.green, FILL.green, 10), ar(290, 100, 220, 100, C.green), ...cap('自分が動くと、まわりは反対に動いて見える')],
  },
  {
    note: '❓では、どれくらいの速さで動いて見える？→地球は1日（24時間）でちょうど1回転、つまり360度回ります。だから1時間では 360÷24＝15度。太陽は1時間に約15度動いて見えます。',
    add: [cover(0, 0, 320, 150), ci(160, 70, 52, undefined, C.gray, FILL.gray), lb(160, 60, '1日24時間で', 11, C.ink), lb(160, 80, '360度', 16, C.red, 'middle', true), ar(212, 70, 212, 58, C.blue), ...cap('360 ÷ 24 ＝ 15度（1時間に動く角度）', undefined, C.green)],
  },
  {
    note: '❓3時間ではどれだけ動く？→1時間に15度ずつなので、3時間で 15×3＝45度です。図のように、1時間ごとに同じ幅（はば）だけ動いていきます。',
    add: [cover(0, 0, 320, 150), ...horizon(), ...skyArc(), ...[0, 1, 2, 3].map((k) => sunAt(180 - 15 * k, 7)), lb(30, 146, '0時間', 9, C.red, 'middle', true), lb(96, 56, '3時間後', 9, C.red, 'middle', true), ...cap('15 × 3 ＝ 45度', '1時間ごとに、同じ角度ずつ進む', C.green)],
  },
  {
    note: '❓太陽が真南に来たときを何という？→南中（なんちゅう）といいます。このとき太陽は1日でいちばん高く、時刻は正午ごろです。',
    add: [cover(0, 0, 320, 150), ...horizon(), ...skyArc(), sunAt(90, 11), lb(160, 20, '南中（正午ごろ・いちばん高い）', 10, C.red, 'middle', true), ...cap('真南に来たとき ＝ 南中')],
  },
  {
    note: '❓南中のとき、なぜ棒（ぼう）のかげがいちばん短いの？→太陽が高いほど、光がほぼ真上から当たるので、かげが短くなるからです。朝や夕方は光がななめから当たるので、かげが長くなります。',
    add: [cover(0, 0, 320, 150), ln(20, 122, 300, 122, C.gray, false, 2), ln(70, 122, 70, 70, C.main, false, 4), ln(70, 122, 120, 122, C.gray, false, 5), lb(95, 136, '短い', 10, C.gray), ar(70, 30, 70, 62, C.red), lb(70, 20, '南中：真上から', 9, C.red), ln(210, 122, 210, 70, C.main, false, 4), ln(210, 122, 290, 122, C.gray, false, 5), lb(250, 136, '長い', 10, C.gray), ar(280, 40, 216, 68, C.red), lb(255, 26, '朝・夕：ななめから', 9, C.red), ...cap('太陽が高いほど、かげは短い')],
  },
  {
    note: '❓太陽が60度動くには、何時間かかる？→1時間に15度なので、60÷15＝4時間です。逆に、動いた角度がわかれば、経（た）った時間もわかります。',
    add: [cover(0, 0, 320, 150), ...horizon(), ...skyArc(), sunAt(180, 7), sunAt(120, 7), ln(160, 118, 160, 118, C.gray), lb(40, 60, '60度', 12, C.red, 'middle', true), ...cap('60 ÷ 15 ＝ 4時間', undefined, C.green)],
  },
  {
    note: 'まとめです。太陽は東からのぼり、南を通って西にしずみます。動いているのは地球の自転で、1時間に約15度。南中はいちばん高く、正午ごろです。',
    add: [cover(0, 0, 320, 150), bx(20, 14, 280, 28, '東 → 南 → 西', C.red, FILL.yellow, 13), bx(20, 50, 280, 28, '動いているのは地球（自転）', C.blue, FILL.blue, 13), bx(20, 86, 280, 28, '1日360度 → 1時間に15度', C.green, FILL.green, 13), lb(160, 130, '南中：真南・いちばん高い・かげ最短', 11, C.ink, 'middle', true), ...cap('太陽は止まっていて、地球が回っている')],
  },
]);

// ── 南中高度と季節 ──
const sideRay = (elev: number, color: string, text: string): DiagramElement[] => {
  const a = (elev * Math.PI) / 180;
  const ex = 60 + 200 * Math.cos(a);
  const ey = 120 - 200 * Math.sin(a) * 0.45;
  return [ln(60, 120, ex, ey, color, false, 2), lb(ex, ey - 8, text, 10, color, 'middle', true)];
};
const tiltEarth = (cx: number, cy: number, label: string, color: string): DiagramElement[] => [
  ci(cx, cy, 24, undefined, C.blue, FILL.blue),
  ln(cx + 14, cy - 40, cx - 14, cy + 40, C.gray, false, 2),
  lb(cx + 16, cy - 46, '北', 9, C.gray, 'middle', true),
  lb(cx, cy + 56, label, 11, color, 'middle', true),
];
const nanchu: DiagramFigure = show([
  {
    note: '太陽が真南に来たとき（南中）の、地面から太陽までの角度を、南中高度（なんちゅうこうど）といいます。❓これは1年中同じでしょうか。じつは季節によって変わります。',
    add: [ln(30, 120, 300, 120, C.gray, false, 2), ln(60, 120, 60, 116, C.gray), ln(60, 120, 232, 40, C.red, false, 2), ci(240, 36, 11, undefined, C.red, FILL.yellow), lb(150, 128, '地面', 10, C.gray), lb(190, 100, '南中高度', 10, C.red, 'middle', true), lb(60, 132, '観測する人', 9, C.gray), ...cap('南中高度 ＝ 真南に来た太陽の高さ（角度）')],
  },
  {
    note: '❓季節でどう変わる？→夏はいちばん高く、冬はいちばん低くなります。緯度（いど）35度の場所なら、夏至（げし）の日は約78度、冬至（とうじ）の日は約32度、春分・秋分は55度です。',
    add: [cover(0, 0, 320, 150), ln(30, 122, 300, 122, C.gray, false, 2), ...sideRay(78, C.red, '夏 約78度'), ...sideRay(55, C.green, '春・秋 55度'), ...sideRay(32, C.blue, '冬 約32度'), ...cap('夏は高く、冬は低い')],
  },
  {
    note: '❓なぜ高さが変わるの？→地球は、地軸（ちじく）を約23.4度かたむけたまま、太陽のまわりを1年かけて回っています。かたむきの向きは変わらないので、季節によって太陽との向き合い方がちがってきます。',
    add: [cover(0, 0, 320, 150), ci(160, 60, 18, '太陽', C.red, FILL.yellow, 9), ...tiltEarth(50, 60, '夏（日本）', C.red), ...tiltEarth(270, 60, '冬（日本）', C.blue), ...cap('地軸をかたむけたまま公転している')],
  },
  {
    note: '❓夏は、どうして太陽が高い？→夏は北半球が太陽のほうへかたむいているので、日本から見ると太陽が空の高いところを通ります。冬は反対に太陽から遠ざかる向きにかたむくので、低くなります。',
    add: [cover(0, 0, 320, 150), ci(160, 60, 18, '太陽', C.red, FILL.yellow, 9), ...tiltEarth(50, 60, '夏：太陽のほうへ', C.red), ar(80, 60, 138, 60, C.red), ...tiltEarth(270, 60, '冬：反対へ', C.blue), ar(240, 60, 182, 60, C.blue, true), ...cap('太陽のほうへかたむく季節が夏')],
  },
  {
    note: '❓昼の長さはどうなる？→太陽が高く通る夏は、空を通る道すじが長いので昼が長く、冬は道すじが短いので昼が短くなります。夏至が昼いちばん長く、冬至がいちばん短い日です。',
    add: [cover(0, 0, 320, 150), ln(10, 120, 310, 120, C.gray, false, 2), ...[180, 165, 150, 135, 120, 105, 90, 75, 60, 45, 30, 15, 0].map((d) => { const p = skyPt(d); return ci(p.x, p.y + 4, 2, undefined, C.red, C.red); }), ...[180, 165, 150, 135, 120, 105, 90, 75, 60, 45, 30, 15, 0].map((d) => { const p = { x: HZ.cx + HZ.rx * 0.75 * Math.cos((d * Math.PI) / 180), y: 120 - 44 * Math.sin((d * Math.PI) / 180) }; return ci(p.x, p.y, 2, undefined, C.blue, C.blue); }), lb(160, 30, '夏至：高くて道すじが長い', 10, C.red, 'middle', true), lb(160, 104, '冬至：低くて短い', 10, C.blue, 'middle', true), ...cap('夏は昼が長く、冬は昼が短い')],
  },
  {
    note: '❓なぜ夏は暑くなるの？→太陽が高いと、同じ幅の光が小さい面積に集まって地面をあたためます。低いとおなじ光が広い面積にうすく広がるので、あたたまりにくいのです。それに夏は昼も長いので、より暑くなります。',
    add: [cover(0, 0, 320, 150), ln(10, 120, 310, 120, C.gray, false, 2), ln(50, 20, 66, 120, C.red), ln(90, 20, 106, 120, C.red), ln(66, 120, 106, 120, C.red, false, 5), lb(86, 136, '高い：せまく集まる', 10, C.red, 'middle', true), ln(190, 60, 220, 120, C.blue), ln(230, 60, 260, 120, C.blue), ln(220, 120, 290, 120, C.blue, false, 5), lb(250, 136, '低い：広くうすい', 10, C.blue, 'middle', true), ...cap('高いほど、地面が強くあたたまる')],
  },
  {
    note: '❓春分・秋分の南中高度は、どう計算する？→90度からその土地の緯度をひきます。緯度35度なら 90−35＝55度。緯度40度なら 90−40＝50度です。',
    add: [cover(0, 0, 320, 150), bx(20, 30, 280, 36, undefined, C.gray, FILL.gray), bx(20, 30, 100, 36, '緯度 35', C.blue, FILL.blue, 13), bx(120, 30, 180, 36, '南中高度 55', C.red, FILL.red, 13), lb(160, 20, '全部で 90度', 11, C.ink, 'middle', true), bx(20, 84, 280, 36, undefined, C.gray, FILL.gray), bx(20, 84, 115, 36, '緯度 40', C.blue, FILL.blue, 13), bx(135, 84, 165, 36, '南中高度 50', C.red, FILL.red, 13), ...cap('90 − 35 ＝ 55度、90 − 40 ＝ 50度', '北へ行く（緯度が高い）ほど低くなる', C.green)],
  },
  {
    note: '❓季節がある原因は、地球と太陽の距離（きょり）が変わるから？→ちがいます。距離の変化はほんのわずかで、原因は地軸がかたむいたまま公転していることです。',
    add: [cover(0, 0, 320, 150), bx(20, 14, 280, 34, '× 太陽との距離が変わるから', C.gray, FILL.gray, 13), bx(20, 62, 280, 40, '○ 地軸がかたむいたまま\n公転しているから', C.green, FILL.green, 13), ...cap('季節の原因は、地軸のかたむき')],
  },
]);

// ── 月の満ち欠け ──
const M = { cx: 160, cy: 72, R: 52 };
const moonPos = (deg: number) => ({ x: M.cx + M.R * Math.cos((deg * Math.PI) / 180), y: M.cy - M.R * Math.sin((deg * Math.PI) / 180) });
/** 太陽（左）に向いた半分だけ光る月。 */
const litMoon = (deg: number, r = 9): DiagramElement[] => {
  const p = moonPos(deg);
  const pts: [number, number][] = [];
  for (let k = 0; k <= 12; k++) {
    const t = (Math.PI / 2) + (Math.PI * k) / 12;
    pts.push([p.x + r * Math.cos(t), p.y - r * Math.sin(t)]);
  }
  return [ci(p.x, p.y, r, undefined, C.gray, '#4B5563'), pg(pts, C.gray, '#FDE047')];
};
const earthMoon = (): DiagramElement[] => [
  ci(M.cx, M.cy, M.R, undefined, C.gray, '#FFFFFF'),
  ...[0, 1, 2].map((i) => ar(8, 40 + i * 32, 46, 40 + i * 32, C.red)),
  ci(-4, 72, 0, undefined, C.red, C.red),
  lb(28, 24, '太陽の光', 10, C.red, 'middle', true),
  ci(M.cx, M.cy, 15, '地球', C.blue, FILL.blue, 9),
];
/** 地球から見た月の形。c：−1で見えない、0で半分、1で満月。waxing：右側が光る（満ちていく途中）。 */
const phase = (cx: number, cy: number, r: number, c: number, waxing: boolean): DiagramElement[] => {
  const s = waxing ? 1 : -1;
  const pts: [number, number][] = [];
  for (let k = 0; k <= 16; k++) {
    const t = (Math.PI * k) / 16;
    pts.push([cx + s * r * Math.sin(t), cy - r * Math.cos(t)]);
  }
  for (let k = 16; k >= 0; k--) {
    const t = (Math.PI * k) / 16;
    pts.push([cx - s * c * r * Math.sin(t), cy - r * Math.cos(t)]);
  }
  return [ci(cx, cy, r, undefined, C.gray, '#4B5563'), ...(c > -0.99 ? [pg(pts, C.gray, '#FDE047')] : [])];
};
const tsuki: DiagramFigure = show([
  {
    note: '夜空の月は、まるくなったり細くなったりします。❓まず、月は自分で光っているのでしょうか。いいえ、月は自分では光らず、太陽の光を反射（はんしゃ）した部分だけが光って見えます。',
    add: [...earthMoon().slice(1, 3), ci(160, 72, 30, undefined, C.gray, '#4B5563'), pg([[160, 42], [148, 46], [138, 56], [132, 72], [138, 88], [148, 98], [160, 102]], C.gray, '#FDE047'), ...cap('月は、太陽の光を反射して光る')],
  },
  {
    note: '❓では、なぜ形が変わって見えるの？→月は地球のまわりを回っています。月の光る半分は、いつも太陽のほうを向いていますが、地球から見える角度が変わるので、光る部分の見え方が変わるのです。',
    add: [cover(0, 0, 320, 150), ...earthMoon(), ...[180, 225, 270, 315, 0, 45, 90, 135].flatMap((d) => litMoon(d)), ...cap('月・地球・太陽の位置関係が変わるから')],
  },
  {
    note: '❓地球から見ると、どんな形になる？→新月（見えない）、三日月、上弦（じょうげん）の月（右半分）、満月、下弦（かげん）の月（左半分）と変わります。新月から満月までは光る部分がふえ、そのあとへっていきます。',
    add: [cover(0, 0, 320, 150), ...phase(34, 62, 22, -1, true), ...phase(96, 62, 22, -0.5, true), ...phase(160, 62, 22, 0, true), ...phase(224, 62, 22, 1, true), ...phase(286, 62, 22, 0, false), lb(34, 100, '新月', 10, C.ink, 'middle', true), lb(96, 100, '三日月', 10, C.ink, 'middle', true), lb(160, 100, '上弦', 10, C.ink, 'middle', true), lb(224, 100, '満月', 10, C.ink, 'middle', true), lb(286, 100, '下弦', 10, C.ink, 'middle', true), ...cap('新月 → 三日月 → 上弦 → 満月 → 下弦 → 新月')],
  },
  {
    note: '❓新月のとき、月はどこにいる？→太陽と同じ方向、つまり地球と太陽のあいだにいます。光っている面は太陽側を向いているので、地球からは暗い面しか見えず、月は見えません。',
    add: [cover(0, 0, 320, 150), ...earthMoon(), ...litMoon(180), ...cap('新月：太陽と同じ方向', '光る面が反対側なので、見えない', C.red)],
  },
  {
    note: '❓満月のときは？→太陽の反対側にいます。光っている面がちょうど地球のほうを向くので、まるい月が全部見えます。',
    add: [cover(0, 0, 320, 150), ...earthMoon(), ...litMoon(0), lb(262, 72, '満月', 10, C.red, 'middle', true), ...cap('満月：太陽の反対側', '光る面が地球を向く', C.red)],
  },
  {
    note: '❓上弦・下弦の月は？→太陽と地球を結ぶ線に対して、月が直角の位置にいるときです。地球からは光る面のちょうど半分が見えるので、半月の形になります。',
    add: [cover(0, 0, 320, 150), ...earthMoon(), ...litMoon(270), ...litMoon(90), ...cap('上弦・下弦：直角の位置 ＝ 半月')],
  },
  {
    note: '❓新月から次の新月まで、どれくらいかかる？→約29.5日です。太陽・地球・月の位置関係がもとにもどる（満ち欠けが1周する）までの日数で、月が地球を1周する27.3日より少し長くなります。上弦は約7日後、満月は約15日後、下弦は約22日後です。',
    add: [cover(0, 0, 320, 150), ...flowRow(), ...cap('約29.5日で、もとの形にもどる')],
  },
  {
    note: '❓満月はいつ見える？→満月は太陽の反対にいるので、太陽と正反対の動きをします。夕方に東からのぼり、真夜中に南中し、明け方に西へしずみます。',
    add: [cover(0, 0, 320, 150), ...horizon(), ...skyArc(), ...[[180, '夕方'], [90, '真夜中'], [0, '明け方']].map(([d, t]) => { const p = skyPt(d as number); return ci(p.x, p.y, 11, undefined, C.gray, '#FDE047'); }), lb(50, 106, '夕方', 9, C.ink, 'middle', true), lb(160, 20, '真夜中（南中）', 9, C.ink, 'middle', true), lb(270, 106, '明け方', 9, C.ink, 'middle', true), ...cap('満月：夕方東 → 真夜中南 → 明け方西')],
  },
  {
    note: '❓では、三日月は？→太陽に近い側にあるので、太陽がしずんだ夕方の西の空に、少しのあいだだけ見えます。上弦の月は夕方、南の空に見えます。',
    add: [cover(0, 0, 320, 150), ...horizon(), ...skyArc(), ...phase(skyPt(28).x, skyPt(28).y + 4, 10, -0.5, true), ...phase(skyPt(90).x, skyPt(90).y, 11, 0, true), lb(245, 100, '三日月：夕方の西', 9, C.ink, 'middle', true), lb(160, 12, '上弦：夕方の南', 9, C.ink, 'middle', true), ...cap('太陽に近い月ほど、夕方の低い空に見える')],
  },
]);
function flowRow(): DiagramElement[] {
  const names = ['新月', '三日月', '上弦', '満月', '下弦'];
  return names.flatMap((n, i) => {
    const x = 10 + i * 61;
    return [bx(x, 40, 52, 30, n, C.main, FILL.warm, 11), ...(i > 0 ? [ar(x - 8, 55, x - 1, 55, C.main)] : [])];
  }).concat([lb(160, 96, '（下弦のあとは、また新月）', 10, C.gray), lb(160, 20, '約29.5日で一周', 12, C.purple, 'middle', true)]);
}

// ── 星の1日の動き ──
const PS = { cx: 160, cy: 72 };
const starOn = (r: number, deg: number, size = 5): DiagramElement => ci(PS.cx + r * Math.cos((deg * Math.PI) / 180), PS.cy - r * Math.sin((deg * Math.PI) / 180), size, undefined, C.gray, '#FDE047');
const ringGuide = (): DiagramElement[] => {
  const out: DiagramElement[] = [];
  [24, 46, 66].forEach((r) => {
    for (let d = 0; d < 360; d += 20) {
      const a = (d * Math.PI) / 180;
      const b = ((d + 10) * Math.PI) / 180;
      out.push(ln(PS.cx + r * Math.cos(a), PS.cy - r * Math.sin(a), PS.cx + r * Math.cos(b), PS.cy - r * Math.sin(b), C.gray));
    }
  });
  return out;
};
const hoshi1: DiagramFigure = show([
  {
    note: '北の空を長い時間見ていると、星は1つの星を中心にぐるぐる回っているように見えます。その中心にある星が北極星（ほっきょくせい）で、星は反時計回りに動きます。',
    add: [...ringGuide(), ci(PS.cx, PS.cy, 5, undefined, C.red, '#FDE047'), lb(PS.cx, PS.cy + 12, '北極星', 10, C.red, 'middle', true), starOn(46, 30), starOn(66, 200), starOn(24, 110), ar(PS.cx + 46, PS.cy - 6, PS.cx + 40, PS.cy - 24, C.blue), ...cap('北極星を中心に、反時計回り')],
  },
  {
    note: '❓なぜ北極星は動かないの？→北極星は、地球の地軸（ちじく）をまっすぐ北へのばした先に、ほぼ位置しているからです。地球が地軸を中心に回っても、その方向にある星の見える向きは変わりません。',
    add: [cover(0, 0, 320, 150), ln(160, 138, 160, 24, C.gray, true, 2), ci(160, 112, 24, '地球', C.blue, FILL.blue, 10), ci(160, 16, 6, undefined, C.red, '#FDE047'), lb(205, 16, '北極星', 10, C.red, 'start', true), lb(178, 64, '地軸をのばした先', 10, C.gray, 'start'), ...cap('地軸の延長線上 → 動かない')],
  },
  {
    note: '❓では、ほかの星はなぜ回って見えるの？→地球が1日に1回転（自転）するからです。星のほうが動いているのではなく、地球が回るので、星が反対向きに回って見えます。',
    add: [cover(0, 0, 320, 150), ...ringGuide(), ci(PS.cx, PS.cy, 5, undefined, C.red, '#FDE047'), starOn(66, 0), starOn(66, 90), starOn(66, 180), starOn(66, 270), lb(48, 132, '1日でひと回り\n（360度）', 10, C.ink, 'middle', true), ...cap('地球が自転するから、星が回って見える')],
  },
  {
    note: '❓どれくらいの速さで回る？→1日24時間で360度回るので、360÷24＝15度。星は1時間に約15度回って見えます。太陽が1時間に15度動くのと同じ理由です。',
    add: [cover(0, 0, 320, 150), ...ringGuide(), ci(PS.cx, PS.cy, 5, undefined, C.red, '#FDE047'), ...[0, 1, 2, 3].map((k) => starOn(66, 15 * k, 4)), lb(PS.cx + 76, PS.cy, '0時', 9, C.ink, 'start'), lb(PS.cx + 64, PS.cy - 42, '1時間後', 9, C.ink, 'start'), ...cap('360 ÷ 24 ＝ 15度（1時間）', undefined, C.green)],
  },
  {
    note: '❓では、6時間ではどうなる？→15×6＝90度、つまり直角（ちょっかく）だけ反時計回りに動きます。3時間なら 15×3＝45度です。',
    add: [cover(0, 0, 320, 150), ...ringGuide(), ci(PS.cx, PS.cy, 5, undefined, C.red, '#FDE047'), starOn(66, 0, 6), ln(PS.cx, PS.cy, PS.cx + 66, PS.cy, C.red), starOn(66, 90, 6), ln(PS.cx, PS.cy, PS.cx, PS.cy - 66, C.red), ar(PS.cx + 40, PS.cy - 10, PS.cx + 12, PS.cy - 38, C.blue), lb(PS.cx + 46, PS.cy - 34, '90度', 11, C.blue, 'start', true), ...cap('6時間 → 15 × 6 ＝ 90度（反時計回り）', '3時間 → 15 × 3 ＝ 45度', C.green)],
  },
  {
    note: '❓南の空の星は、どう動く？→太陽と同じように、東から南を通って西へ動きます。地球が西から東へ回るので、空のものはその逆、東から西へ流れて見えるからです。',
    add: [cover(0, 0, 320, 150), ...horizon(), ...skyArc(), ...[180, 150, 120, 90, 60, 30, 0].map((d) => { const p = skyPt(d); return ci(p.x, p.y, 4, undefined, C.gray, '#FDE047'); }), ar(70, 60, 110, 44, C.blue), ...cap('南の空：東 → 南 → 西', '太陽と同じ向き')],
  },
  {
    note: 'まとめです。北の空は北極星を中心に反時計回りに1時間で約15度、南の空は東から西へ動きます。どれも、地球が自転しているために起こる見かけの動きです。',
    add: [cover(0, 0, 320, 150), bx(20, 12, 280, 30, '北の空：北極星を中心に反時計回り', C.blue, FILL.blue, 12), bx(20, 52, 280, 30, '南の空：東 → 南 → 西', C.red, FILL.red, 13), bx(20, 92, 280, 30, '1時間に約15度（自転のため）', C.green, FILL.green, 13), ...cap('北極星はほとんど動かない（北の目印）')],
  },
]);

// ── 星の1年の動き（年周運動） ──
const orbit = { cx: 160, cy: 76, R: 44 };
const earthAt = (deg: number): { x: number; y: number } => ({ x: orbit.cx + orbit.R * Math.cos((deg * Math.PI) / 180), y: orbit.cy - orbit.R * Math.sin((deg * Math.PI) / 180) });
const hoshi2: DiagramFigure = show([
  {
    note: '毎日、同じ時刻に同じ星を見ると、星の位置は少しずつ西へずれていきます。1か月で約30度ずれます。❓なぜずれるのでしょう。',
    add: [...horizon(), ...skyArc(), ci(skyPt(90).x, skyPt(90).y, 5, undefined, C.gray, '#FDE047'), ci(skyPt(120).x, skyPt(120).y, 5, undefined, C.red, '#FDE047'), ar(skyPt(90).x - 10, skyPt(90).y + 2, skyPt(120).x + 8, skyPt(120).y - 2, C.red), lb(160, 22, '同じ時刻に見た星の位置', 10, C.gray, 'middle', true), ...cap('同じ時刻の星は、1か月に約30度、西へ')],
  },
  {
    note: '❓なぜずれる？→地球が太陽のまわりを、1年かけて1周（公転）しているからです。地球の位置が変わると、夜の側（太陽と反対側）に見える方向も、少しずつ変わっていきます。',
    add: [cover(0, 0, 320, 150), ci(160, 76, 44, undefined, C.gray, '#FFFFFF'), ci(160, 76, 14, '太陽', C.red, FILL.yellow, 8), ...[0, 90, 180, 270].map((d) => { const p = earthAt(d); return ci(p.x, p.y, 8, undefined, C.blue, FILL.blue); }), ...[0, 90, 180, 270].map((d) => { const p = earthAt(d); const q = { x: p.x + 26 * Math.cos((d * Math.PI) / 180), y: p.y - 26 * Math.sin((d * Math.PI) / 180) }; return ar(p.x + 9 * Math.cos((d * Math.PI) / 180), p.y - 9 * Math.sin((d * Math.PI) / 180), q.x, q.y, C.purple); }), lb(60, 20, '矢印：夜の側に\n見える方向', 9, C.purple, 'middle', true), ...cap('公転すると、夜に見える方向が変わる')],
  },
  {
    note: '❓どれくらいずれる？→1年（12か月）で360度ずれるので、1か月では 360÷12＝30度です。1日では約1度（360÷365）ずれます。',
    add: [cover(0, 0, 320, 150), bx(20, 14, 280, 30, '1年 ＝ 12か月 ＝ 360度', C.blue, FILL.blue, 13), ar(160, 46, 160, 70), bx(20, 72, 280, 34, '1か月 ＝ 360 ÷ 12 ＝ 30度', C.green, FILL.green, 14), lb(160, 128, '（1日では、約1度）', 11, C.gray), ...cap('1か月に約30度、西へずれる')],
  },
  {
    note: '❓30度は、時間にすると？→星は1時間に15度動いて見えるので、30度は 30÷15＝2時間ぶんです。だから同じ星は、1か月で2時間早く同じ位置に来ます。',
    add: [cover(0, 0, 320, 150), bx(20, 20, 130, 34, '15度 ＝ 1時間', C.main, FILL.warm, 13), bx(170, 20, 130, 34, '30度 ＝ 2時間', C.green, FILL.green, 13), ar(150, 37, 168, 37), lb(160, 84, '30 ÷ 15 ＝ 2', 16, C.ink, 'middle', true), ...cap('1か月で、2時間早くなる')],
  },
  {
    note: '❓なぜ「早く」なるの？→星が西へずれるということは、同じ時刻には星がもう西にあるということです。つまり、南中はそれより前に、もう終わっています。だから南中の時刻は早まります。',
    add: [cover(0, 0, 320, 150), ...horizon(), ...skyArc(), ci(skyPt(90).x, skyPt(90).y, 5, undefined, C.gray, '#FDE047'), lb(120, 22, '先月の同じ時刻', 9, C.gray, 'middle'), ci(skyPt(60).x, skyPt(60).y, 5, undefined, C.red, '#FDE047'), lb(skyPt(60).x + 16, skyPt(60).y - 8, '今月の同じ時刻', 9, C.red, 'start', true), ...cap('西へずれた ＝ 南中は、もっと前に済んだ')],
  },
  {
    note: '例題です。午後8時に南中した星は、2か月後には何時に南中する？→1か月で2時間早くなるので、2か月で4時間早くなり、午後8時−4時間＝午後4時ごろです。',
    add: [cover(0, 0, 320, 150), bx(10, 30, 88, 44, '今\n午後8時', C.blue, FILL.blue, 12), ar(100, 52, 118, 52), bx(120, 30, 88, 44, '1か月後\n午後6時', C.main, FILL.warm, 12), ar(210, 52, 228, 52), bx(230, 30, 80, 44, '2か月後\n午後4時', C.green, FILL.green, 12), lb(160, 100, '1か月ごとに2時間ずつ早くなる', 11, C.ink, 'middle', true), ...cap('8時 − 2時間 − 2時間 ＝ 午後4時', undefined, C.green)],
  },
  {
    note: '別の例です。午後10時に南中した星は、1か月後には午後10時−2時間＝午後8時ごろに南中します。',
    add: [cover(0, 0, 320, 150), bx(20, 40, 120, 44, '今\n午後10時', C.blue, FILL.blue, 13), ar(142, 62, 178, 62), bx(180, 40, 120, 44, '1か月後\n午後8時', C.green, FILL.green, 13), ...cap('10時 − 2時間 ＝ 午後8時')],
  },
  {
    note: '❓なぜ季節で見える星座が変わるの？→公転で、夜の側に見える方向が変わるからです。半年たつと反対の方向になり、夏の夜に見えていた星座は、冬には昼の空にあって見えなくなります。',
    add: [cover(0, 0, 320, 150), ci(160, 76, 44, undefined, C.gray, '#FFFFFF'), ci(160, 76, 14, '太陽', C.red, FILL.yellow, 8), ci(earthAt(0).x, earthAt(0).y, 8, undefined, C.red, FILL.red), lb(earthAt(0).x + 4, earthAt(0).y - 16, '夏', 10, C.red, 'middle', true), ci(earthAt(180).x, earthAt(180).y, 8, undefined, C.blue, FILL.blue), lb(earthAt(180).x - 2, earthAt(180).y - 16, '冬', 10, C.blue, 'middle', true), lb(160, 140, '半年でまったく反対の方向になる', 10, C.ink, 'middle', true), ...cap('季節で見える星座が変わる（公転が原因）')],
  },
  {
    note: 'まとめです。自転は1日で、星は1時間に15度動きます。公転は1年で、同じ時刻の星は1か月に30度ずつ西へずれます。「時間」と「月」の単位をまちがえないようにしましょう。',
    add: [cover(0, 0, 320, 150), bx(15, 16, 290, 40, '自転（1日）：星は1時間に15度', C.blue, FILL.blue, 13), bx(15, 68, 290, 40, '公転（1年）：同じ時刻の星は\n1か月に30度、西へ', C.green, FILL.green, 12), ...cap('30度 ＝ 2時間ぶん')],
  },
]);

// ── 湿度 ──
const cube = (x: number, y: number, s: number, n: number, color: string = C.blue): DiagramElement[] => [
  bx(x, y, s, s, undefined, C.gray, FILL.gray),
  ...dots(n, x + 12, y + 14, { r: 4, gap: 14, perRow: Math.max(1, Math.floor((s - 12) / 14)), color, fill: FILL.blue }),
];
const shitsudo: DiagramFigure = show([
  {
    note: '空気の中には、目に見えない水蒸気（すいじょうき）がふくまれています。空気がどれくらい湿（しめ）っているかを表すのが湿度（しつど）です。❓どうやって表すのでしょう。',
    add: [...cube(110, 14, 100, 12), lb(160, 128, '空気1m³の中の水蒸気', 10, C.blue, 'middle', true), ...cap('空気の中にふくまれる水蒸気の量')],
  },
  {
    note: '❓空気は、水蒸気をいくらでもふくめる？→いいえ。ふくめる量には限界（げんかい）があり、これを飽和水蒸気量（ほうわすいじょうきりょう）といいます。空気1m³が入れられる水蒸気の、いっぱいの量です。',
    add: [cover(0, 0, 320, 150), ...cube(110, 14, 100, 20), lb(160, 128, '限界いっぱい ＝ 飽和水蒸気量', 10, C.red, 'middle', true), ...cap('ふくめる量には、限界がある')],
  },
  {
    note: '❓その限界は、いつも同じ？→ちがいます。気温が高いほど空気は大きな入れ物のようになり、たくさんの水蒸気をふくめます。気温が低いと入れ物は小さく、ふくめる量も少なくなります。',
    add: [cover(0, 0, 320, 150), bx(30, 44, 80, 80, '気温が低い\n限界は小さい', C.blue, FILL.blue, 11), bx(140, 14, 160, 110, '気温が高い\n限界は大きい', C.red, FILL.red, 12), ...cap('気温が高いほど、飽和水蒸気量は大きい')],
  },
  {
    note: '❓湿度とは、けっきょく何？→いま入っている水蒸気の量が、その気温の限界に対して何％かを表したものです。式は「湿度（％）＝ 水蒸気の量 ÷ 飽和水蒸気量 × 100」です。',
    add: [cover(0, 0, 320, 150), bx(30, 30, 260, 26, undefined, C.gray, '#FFFFFF'), bx(30, 30, 195, 26, undefined, C.blue, FILL.blue), lb(127, 43, 'いま入っている量', 11, C.blue, 'middle', true), lb(160, 76, '限界（飽和水蒸気量）', 11, C.gray, 'middle', true), ...cap('湿度 ＝ いまの量 ÷ 限界 × 100', undefined, C.green)],
  },
  {
    note: '❓なぜ割合（わりあい）で表すの？→同じ量の水蒸気でも、入れ物の大きさ（気温）がちがえば「どれくらいいっぱいか」がちがうからです。たとえば限界が20gの空気に15g入っていれば、15÷20×100＝75％です。',
    add: [cover(0, 0, 320, 150), bx(30, 30, 260, 26, undefined, C.gray, '#FFFFFF'), bx(30, 30, 195, 26, undefined, C.blue, FILL.blue), lb(127, 43, '15g', 12, C.blue, 'middle', true), lb(160, 76, '限界 20g', 11, C.gray, 'middle', true), bx(70, 96, 180, 32, '15 ÷ 20 × 100 ＝ 75％', C.green, FILL.green, 14), ...cap('ちがう限界でくらべるための割合')],
  },
  {
    note: '例題です。飽和水蒸気量が17g/m³の気温で、空気1m³に8.5g入っています。湿度は？→8.5÷17＝0.5、つまり 0.5×100＝50％です。ちょうど半分の入りぐあいです。',
    add: [cover(0, 0, 320, 150), bx(30, 30, 260, 26, undefined, C.gray, '#FFFFFF'), bx(30, 30, 130, 26, undefined, C.blue, FILL.blue), lb(95, 43, '8.5g', 12, C.blue, 'middle', true), lb(160, 76, '限界 17g', 11, C.gray, 'middle', true), bx(70, 96, 180, 32, '8.5 ÷ 17 × 100 ＝ 50％', C.green, FILL.green, 14), ...cap('半分入っているから、50％')],
  },
  {
    note: '❓水蒸気の量が同じまま、気温が下がるとどうなる？→限界が小さくなるので、入っている割合が大きくなり、湿度は高くなります。たとえば限界が17gから10gに下がれば、8.5÷10×100＝85％です。',
    add: [cover(0, 0, 320, 150), bx(30, 30, 260, 26, undefined, C.gray, '#FFFFFF'), bx(30, 30, 130, 26, undefined, C.blue, FILL.blue), bx(30, 66, 153, 26, undefined, C.gray, '#FFFFFF'), bx(30, 66, 130, 26, undefined, C.blue, FILL.blue), lb(95, 43, '8.5g', 11, C.blue, 'middle', true), lb(95, 79, '8.5g', 11, C.blue, 'middle', true), lb(240, 79, '限界が10gに下がった', 9, C.red, 'middle', true), bx(60, 102, 200, 30, '8.5 ÷ 10 × 100 ＝ 85％', C.red, FILL.red, 14), ...cap('気温が下がると、湿度は上がる')],
  },
  {
    note: '❓湿度が100％になった空気をさらに冷やすと？→限界がもっと小さくなるので、ふくみきれない水蒸気が水（すい）てきになって出てきます。これが雲や霧（きり）、まどの結露（けつろ）のもとです。',
    add: [cover(0, 0, 320, 150), ...cube(120, 14, 80, 14), ...[0, 1, 2].map((k) => ci(140 + k * 20, 112 + k * 4, 3, undefined, C.blue, C.blue)), ar(160, 96, 160, 108, C.blue), lb(160, 138, 'あふれた水蒸気 → 水てき', 10, C.blue, 'middle', true), ...cap('限界をこえた分が、水てきになる')],
  },
]);

// ── 露点 ──
const rotenBar = (y: number, limit: number, label: string, amount = 8.5): DiagramElement[] => [
  bx(30, y, 260, 22, undefined, C.gray, '#FFFFFF'),
  bx(30, y, 260 * (Math.min(amount, limit) / 17), 22, undefined, C.blue, FILL.blue),
  ln(30 + 260 * (limit / 17), y - 4, 30 + 260 * (limit / 17), y + 26, C.red, false, 3),
  lb(160, y + 36, label, 10, C.ink, 'middle', true),
];
const roten: DiagramFigure = show([
  {
    note: '冷たい飲み物を入れたコップの外側に、水（すい）てきがつくことがあります。❓これは、空気を冷やしていくと起こることです。空気を冷やして、水蒸気が水てきになりはじめる温度を、露点（ろてん）といいます。',
    add: [bx(120, 30, 60, 80, undefined, C.blue, FILL.blue), ...[0, 1, 2, 3].map((k) => ci(112 + (k % 2) * 76, 50 + k * 14, 3, undefined, C.blue, C.blue)), lb(150, 20, '冷たい飲み物', 10, C.blue, 'middle', true), ...cap('露点 ＝ 水てきになりはじめる温度')],
  },
  {
    note: '❓なぜ冷やすと水てきになるの？→気温が下がると、空気がふくめる限界（飽和水蒸気量）が小さくなるからです。入っている水蒸気の量が同じでも、限界が下がっていくと、いつかぴったり限界になります。',
    add: [cover(0, 0, 320, 150), ...rotenBar(24, 17, '気温が高いとき：限界 17g（たとえば）'), ...rotenBar(84, 12, '冷えてきた：限界 12g'), ...cap('入っている量は同じ（8.5g）', '限界だけが、下がっていく')],
  },
  {
    note: '❓限界がちょうど8.5gまで下がったら？→水蒸気の量とぴったり同じになります。このときの温度が露点で、湿度はちょうど100％です。8.5÷8.5×100＝100％。',
    add: [cover(0, 0, 320, 150), ...rotenBar(30, 8.5, '限界 ＝ 8.5g ＝ 入っている量'), bx(60, 96, 200, 30, '8.5 ÷ 8.5 × 100 ＝ 100％', C.red, FILL.red, 14), ...cap('露点では、湿度が100％')],
  },
  {
    note: '❓さらに冷やすと？→限界が入っている量より小さくなり、ふくみきれなくなった水蒸気が水てきになって出てきます。これが、水てきができる理由です。',
    add: [cover(0, 0, 320, 150), ...rotenBar(20, 6, '限界が6gに下がった'), ...[0, 1, 2].map((k) => ci(120 + k * 40, 100, 4, undefined, C.blue, C.blue)), lb(160, 118, 'ふくみきれない分は水てきに', 10, C.blue, 'middle', true), ...cap('露点以下になると、水てきが出る')],
  },
  {
    note: '❓コップの水てきは、中の水がしみ出したもの？→ちがいます。コップに触（ふ）れている空気が冷やされて露点以下になり、空気中の水蒸気が水てきになったものです。だから、外側についているのです。',
    add: [cover(0, 0, 320, 150), bx(120, 30, 60, 80, undefined, C.blue, FILL.blue), ar(60, 70, 116, 70, C.red, true), lb(60, 56, 'まわりの空気', 10, C.red, 'middle', true), ...[0, 1, 2].map((k) => ci(117, 50 + k * 18, 3, undefined, C.blue, C.blue)), lb(240, 70, 'コップにふれた空気が\n冷やされる', 10, C.blue, 'middle', true), ...cap('中の水ではなく、空気の水蒸気が水になった')],
  },
  {
    note: '❓露点が高い空気とは、どんな空気？→水蒸気をたくさんふくむ空気です。入っている量が多いと、あまり冷やさなくてもすぐ限界に届くので、露点が高くなります。',
    add: [cover(0, 0, 320, 150), bx(30, 20, 260, 22, undefined, C.gray, '#FFFFFF'), bx(30, 20, 90, 22, undefined, C.blue, FILL.blue), lb(160, 56, '水蒸気が少ない → 露点は低い（かなり冷やす）', 10, C.blue, 'middle', true), bx(30, 84, 260, 22, undefined, C.gray, '#FFFFFF'), bx(30, 84, 200, 22, undefined, C.red, FILL.red), lb(160, 120, '水蒸気が多い → 露点は高い（少し冷やせば）', 10, C.red, 'middle', true), ...cap('露点は、ふくまれる水蒸気の量で決まる')],
  },
  {
    note: '❓夏の冷たいコップに水てきがつきやすいのはなぜ？→夏の空気は水蒸気が多くて露点が高いので、コップで少し冷やされるだけで露点以下になるからです。',
    add: [cover(0, 0, 320, 150), bx(20, 20, 130, 44, '夏：水蒸気が多い\n露点が高い', C.red, FILL.red, 11), ar(152, 42, 178, 42), bx(180, 20, 130, 44, '少し冷えるだけで\n水てきがつく', C.blue, FILL.blue, 11), ...cap('露点が高いほど、水てきができやすい')],
  },
  {
    note: 'まとめです。露点は、空気を冷やして水蒸気が水てきになりはじめる温度。そのとき湿度は100％で、水蒸気の量が限界（飽和）にちょうどなっています。露点は、水蒸気が多い空気ほど高くなります。',
    add: [cover(0, 0, 320, 150), bx(20, 14, 280, 28, '露点 ＝ 水てきになりはじめる温度', C.blue, FILL.blue, 12), bx(20, 52, 280, 28, '露点では、湿度は100％', C.red, FILL.red, 13), bx(20, 90, 280, 28, '水蒸気が多いほど、露点は高い', C.green, FILL.green, 12), ...cap('露点 ＝ ちょうど限界になる温度')],
  },
]);

// ── 雲・雨のでき方 ──
const cloudBall = (x: number, y: number, r: number, color: string = C.blue): DiagramElement => ci(x, y, r, undefined, color, FILL.blue);
const kumo: DiagramFigure = show([
  {
    note: '雲や雨は、空気がのぼっていくところでできます。流れは「地面が温まる→空気が上昇（じょうしょう）→ぼうちょうして冷える→露点以下で水てき（雲）→大きくなって雨」です。❓それぞれ、なぜそうなるのか順に見ていきます。',
    add: [...['地面が\n温まる', '空気が\n上昇', 'ぼうちょう\nして冷える'].flatMap((t, i) => [bx(10 + i * 105, 20, 95, 38, t, C.main, FILL.warm, 11), ...(i > 0 ? [ar(10 + i * 105 - 9, 39, 10 + i * 105 - 1, 39, C.main)] : [])]), ...['露点以下\nで水てき', '雲になる', '雨になる'].flatMap((t, i) => [bx(10 + i * 105, 76, 95, 38, t, C.blue, FILL.blue, 11), ...(i > 0 ? [ar(10 + i * 105 - 9, 95, 10 + i * 105 - 1, 95, C.blue)] : [])]), ar(160, 60, 160, 74, C.gray), ...cap('地面から雲、雨までの流れ')],
  },
  {
    note: '❓なぜ空気は上へのぼるの？→地面が日光で温まると、そのまわりの空気も温まってふくらみ、軽くなるからです。軽くなった空気は、まわりの空気の中を上へのぼっていきます。',
    add: [cover(0, 0, 320, 150), ci(160, 28, 14, '太陽', C.red, FILL.yellow, 8), ar(160, 46, 160, 70, C.red), bx(20, 100, 280, 22, '温まった地面', C.main, FILL.warm, 11), ar(90, 96, 90, 40, C.red), ar(230, 96, 230, 40, C.red), lb(90, 30, '温まって軽い空気', 10, C.red, 'middle', true), lb(230, 30, '上へのぼる', 10, C.red, 'middle', true), ...cap('温まった空気は軽いので、上昇する')],
  },
  {
    note: '❓上空の気圧（きあつ）はどうなっている？→上へいくほど、その上にある空気が少ないので、空気を押す力（気圧）は小さくなります。地面の近くは上にたくさん空気があるので、気圧が大きいのです。',
    add: [cover(0, 0, 320, 150), lb(80, 20, '上空：気圧が低い', 11, C.blue, 'middle', true), ...[0, 1, 2].map((k) => ar(40 + k * 40, 30, 40 + k * 40, 44, C.blue)), lb(80, 100, '地面近く：気圧が高い', 11, C.red, 'middle', true), ...[0, 1, 2].map((k) => ar(40 + k * 40, 66, 40 + k * 40, 94, C.red)), lb(240, 32, '上の空気が少ない', 10, C.gray, 'middle'), lb(240, 84, '上の空気が多い\n（おされる力が大きい）', 10, C.gray, 'middle'), ...cap('上へいくほど、気圧は低くなる')],
  },
  {
    note: '❓気圧が低いと、空気はどうなる？→まわりから押される力がゆるむので、空気のかたまりは風船のようにふくらみます。これをぼうちょうといいます。',
    add: [cover(0, 0, 320, 150), cloudBall(70, 100, 12), lb(70, 128, '地面近く', 10, C.gray), ar(96, 84, 200, 50, C.gray, true), cloudBall(240, 46, 30), lb(240, 90, '上空：ふくらむ', 10, C.blue, 'middle', true), ...cap('気圧が低い所で、空気はぼうちょうする')],
  },
  {
    note: '❓なぜ、ふくらむと冷えるの？→ふくらむとき、空気はまわりの空気を押しのけるために自分の持っている熱を使うからです。外から冷やされるのではなく、自分がふくらむことで温度が下がります。',
    add: [cover(0, 0, 320, 150), cloudBall(70, 70, 16), lb(70, 100, '温度：高い', 11, C.red, 'middle', true), ar(96, 70, 150, 70, C.blue), lb(123, 56, 'ふくらむ', 10, C.blue), cloudBall(230, 70, 34), lb(230, 116, '温度：低い', 11, C.blue, 'middle', true), ...cap('まわりを押しのけるのに、熱を使う')],
  },
  {
    note: '❓冷えると、なぜ雲ができるの？→冷えると、空気がふくめる水蒸気の限界が小さくなり、露点（ろてん）以下になると水蒸気が水てきや氷のつぶになります。この小さなつぶの集まりが雲です。',
    add: [cover(0, 0, 320, 150), bx(30, 20, 260, 20, undefined, C.gray, '#FFFFFF'), bx(30, 20, 260, 20, undefined, C.blue, FILL.blue), lb(160, 30, '冷える → 限界が小さくなる', 10, C.ink, 'middle', true), ar(160, 46, 160, 66, C.blue), lb(160, 76, '露点以下 → 水蒸気が水てきに', 11, C.blue, 'middle', true), ...[0, 1, 2, 3, 4, 5, 6].map((k) => ci(70 + k * 30, 112 + (k % 2) * 8, 6, undefined, C.blue, FILL.blue)), ...cap('水てきの集まりが、雲')],
  },
  {
    note: '❓雲のつぶが、なぜ雨になって落ちてくるの？→雲のつぶはとても小さく軽いので、上向きの空気の流れに支えられて浮（う）かんでいます。つぶどうしがぶつかってくっつき、大きく重くなると、支えきれなくなって落ちてきます。',
    add: [cover(0, 0, 320, 150), ...[0, 1, 2, 3].map((k) => ci(60 + k * 18, 32 + (k % 2) * 8, 4, undefined, C.blue, FILL.blue)), lb(90, 60, '小さくて軽い → 浮かぶ', 10, C.blue, 'middle', true), ar(200, 30, 250, 30, C.gray, true), ci(250, 40, 12, undefined, C.blue, FILL.blue), ar(250, 58, 250, 108, C.blue), lb(250, 122, '雨', 12, C.blue, 'middle', true), lb(150, 100, 'くっついて大きく重くなる', 10, C.ink, 'middle', true), ...cap('つぶが大きく重くなると、雨になる')],
  },
  {
    note: '❓空気が下へおりるときは？→こんどは気圧が高いほうへ動くので、押されてちぢみ、温度が上がります。すると水てきがまた水蒸気にもどるので、雲はできません。雲ができるのは、空気が上昇するときです。',
    add: [cover(0, 0, 320, 150), bx(20, 20, 130, 46, '上昇\nふくらむ・冷える', C.blue, FILL.blue, 11), ar(152, 43, 176, 43), bx(178, 20, 130, 46, '雲ができる', C.blue, FILL.blue, 12), bx(20, 82, 130, 46, '下降\nちぢむ・温まる', C.red, FILL.red, 11), ar(152, 105, 176, 105), bx(178, 82, 130, 46, '雲はできない', C.red, FILL.red, 12), ...cap('雲ができるのは、空気が上昇するとき')],
  },
]);

// ── 寒冷前線 ──
const front = (steep: boolean): DiagramElement[] => [
  ln(10, 122, 310, 122, C.gray, false, 2),
  pg(steep ? [[10, 122], [150, 122], [110, 34], [10, 34]] : [[10, 122], [230, 122], [140, 90], [10, 90]], C.blue, FILL.blue),
];
const kanrei: DiagramFigure = show([
  {
    note: '冷たい空気と暖かい空気がぶつかるところを、前線（ぜんせん）といいます。冷たい空気が暖かい空気に向かって進んでくるものが、寒冷前線（かんれいぜんせん）です。❓ぶつかるとどうなるのでしょう。',
    add: [ln(10, 122, 310, 122, C.gray, false, 2), bx(10, 60, 100, 50, '冷たい空気', C.blue, FILL.blue, 12), bx(210, 60, 100, 50, '暖かい空気', C.red, FILL.red, 12), ar(112, 85, 148, 85, C.blue), ...cap('冷たい空気 → 暖かい空気へ向かって進む')],
  },
  {
    note: '❓どちらの空気が下にもぐるの？→冷たい空気は重く、暖かい空気は軽いので、冷たい空気が地面をはうように下へもぐりこみ、暖かい空気は上に押し上げられます。',
    add: [cover(0, 0, 320, 150), ...front(true), lb(70, 90, '冷たい空気\n（重い）', 11, C.blue, 'middle', true), lb(240, 70, '暖かい空気（軽い）', 11, C.red, 'middle', true), ar(135, 66, 175, 36, C.red), ...cap('重い冷たい空気が下へもぐる')],
  },
  {
    note: '❓なぜ「急に」押し上げるの？→寒冷前線は、冷たい空気の先（境目）が急な坂のようになっていて、進む速さも速いからです。暖かい空気は短い距離で一気に上へ持ち上げられます。',
    add: [cover(0, 0, 320, 150), ...front(true), ar(20, 108, 110, 108, C.blue), ar(152, 100, 136, 40, C.red), lb(230, 100, '境目が急な坂', 11, C.ink, 'middle', true), ...cap('急な坂 → 暖かい空気が急に押し上げられる')],
  },
  {
    note: '❓急に押し上げられると、どんな雲ができる？→暖かい空気がぐんぐんのぼるので、たてに高く発達した積乱雲（せきらんうん）ができます。いわゆる入道雲（にゅうどうぐも）です。',
    add: [cover(0, 0, 320, 150), ...front(true), pg([[150, 120], [150, 60], [162, 40], [180, 20], [200, 30], [222, 44], [226, 70], [222, 120]], C.gray, '#E5E7EB'), lb(190, 78, '積乱雲', 12, C.ink, 'middle', true), ar(152, 100, 144, 64, C.red), ...cap('たてに高い雲 ＝ 積乱雲')],
  },
  {
    note: '❓なぜ強い雨が短い時間だけ降るの？→積乱雲は前線のすぐ近くの、せまい範囲にしかできません。急にのぼる空気で雲が一気に発達するので雨は強く、前線が進んでいくと雲もすぐ通りすぎるので、短い時間で終わります。',
    add: [cover(0, 0, 320, 150), ln(10, 122, 310, 122, C.gray, false, 2), pg([[150, 122], [150, 60], [162, 40], [180, 20], [200, 30], [222, 44], [226, 70], [222, 122]], C.gray, '#E5E7EB'), ...[0, 1, 2, 3, 4].map((k) => ln(160 + k * 14, 88, 156 + k * 14, 118, C.blue, false, 2)), lb(190, 136, 'せまい範囲', 10, C.blue, 'middle', true), ...cap('せまい範囲に、短時間、強く降る')],
  },
  {
    note: '❓通りすぎたあと、気温はどうなる？→地面のそばが冷たい空気におおわれるので、気温が下がります。風向きも急に変わります（南寄りの風から北寄りの風へ）。',
    add: [cover(0, 0, 320, 150), bx(20, 30, 120, 44, '通過前\n暖かい', C.red, FILL.red, 12), ar(142, 52, 178, 52, C.gray), bx(180, 30, 120, 44, '通過後\n気温が下がる', C.blue, FILL.blue, 12), lb(160, 100, '風向きも変わる', 12, C.ink, 'middle', true), ...cap('通過すると、気温が下がる')],
  },
  {
    note: '❓天気図では、どう書く？→寒冷前線は、青い線に三角（▲）がついた記号で書きます。三角がついている向きに前線が進みます。',
    add: [cover(0, 0, 320, 150), ln(30, 70, 290, 70, C.blue, false, 3), ...[0, 1, 2, 3, 4, 5].map((k) => pg([[50 + k * 40, 70], [70 + k * 40, 70], [60 + k * 40, 54]], C.blue, C.blue)), ar(160, 96, 160, 46, C.gray), lb(200, 100, '進む向き', 10, C.gray, 'start'), ...cap('寒冷前線の記号：三角（▲）')],
  },
  {
    note: '❓温暖前線とくらべると？→温暖前線は、暖かい空気が冷たい空気の上へゆるやかにはい上がり、広い範囲に長時間、弱い雨を降らせて、通過後は気温が上がります。寒冷前線と、ちょうど反対のことが多いのでセットで覚えましょう。',
    add: [cover(0, 0, 320, 150), bx(10, 14, 90, 24, '', C.gray, FILL.gray), bx(102, 14, 100, 24, '寒冷前線', C.blue, FILL.blue, 12), bx(204, 14, 106, 24, '温暖前線', C.red, FILL.red, 12), bx(10, 42, 90, 26, '雨', C.gray, FILL.gray, 11), bx(102, 42, 100, 26, 'せまく短く強い', C.blue, FILL.blue, 10), bx(204, 42, 106, 26, '広く長く弱い', C.red, FILL.red, 10), bx(10, 72, 90, 26, '雲', C.gray, FILL.gray, 11), bx(102, 72, 100, 26, '積乱雲', C.blue, FILL.blue, 11), bx(204, 72, 106, 26, '乱層雲など', C.red, FILL.red, 11), bx(10, 102, 90, 26, '通過後', C.gray, FILL.gray, 11), bx(102, 102, 100, 26, '気温が下がる', C.blue, FILL.blue, 11), bx(204, 102, 106, 26, '気温が上がる', C.red, FILL.red, 11), ...cap('寒冷と温暖は、反対のセットで覚える')],
  },
  {
    note: 'まとめです。寒冷前線は、冷たい空気が暖かい空気を急に押し上げて積乱雲ができ、せまい範囲に短時間の強い雨が降ります。通過すると気温が下がり、風向きが変わります。記号は▲です。',
    add: [cover(0, 0, 320, 150), bx(20, 12, 280, 28, '冷たい空気が暖かい空気を急に押し上げる', C.blue, FILL.blue, 12), bx(20, 48, 280, 28, '積乱雲 → せまく短く強い雨', C.gray, FILL.gray, 12), bx(20, 84, 280, 28, '通過後は気温が下がる・風向きが変わる', C.green, FILL.green, 12), ...cap('記号は▲（三角）、三角の向きへ進む')],
  },
]);

export const DIAGRAMS_OLD_RIKAC: Record<string, DiagramFigure> = {
  'ものが燃える3条件': moeru,
  '酸性・中性・アルカリ性（リトマス紙）': litmus,
  '中和': chuwa,
  '太陽の1日の動き（日周運動）': nisshu,
  '南中高度と季節': nanchu,
  '月の満ち欠け': tsuki,
  '星の1日の動き': hoshi1,
  '星の1年の動き（年周運動）': hoshi2,
  '湿度': shitsudo,
  '露点（ろてん）': roten,
  '雲・雨のでき方': kumo,
  '寒冷前線': kanrei,
};
