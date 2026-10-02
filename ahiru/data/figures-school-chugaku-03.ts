// 入試傾向問題（中学受験・第3批）の動く図解スライド。キーは問題 id。
// 「なぜそうなるか」を❓→答えの連鎖でたどり、最後に答えと検算を置く。画面の上半分に図、下の帯に式やひとこと。
import type { Figure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, flow, dots } from './diagram-kit';

type E = DiagramElement;
// 下の帯用の箱と文字
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
// 上に図、下の帯（y=148 から）に式、の形
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(148, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const W = (x1: number, y1: number, x2: number, y2: number, color: string = C.gray, dashed = false): E => ln(x1, y1, x2, y2, color, dashed, 2);
const batt = (x: number, y: number, w: number, h: number, t = '電池'): E => bx(x, y, w, h, t, C.main, FILL.warm, 11);
const bulb = (x: number, y: number, t = '豆'): E => ci(x, y, 14, t, C.main, FILL.yellow, 11);
const res = (x: number, y: number, w: number, h: number, t: string): E => bx(x, y, w, h, t, C.purple, FILL.purple, 11);
const CLEAR = 'rgba(0,0,0,0)';

// ── otani_sansu_01 ──
const apples = (): E[] => dots(5, 50, 50, { r: 11, gap: 28, perRow: 5, color: C.red, fill: FILL.red, texts: ['120', '120', '120', '120', '120'] });
const oranges = (y: number): E[] => dots(8, 40, y, { r: 11, gap: 30, perRow: 8, color: C.main, fill: FILL.warm, texts: Array(8).fill('80') });
const otani01 = show([
  {
    note: '1個120円のりんごを5個と、1個80円のみかんを8個買います。合計はいくらでしょう。❓まず、同じ値段のものをまとめて買うと、代金はどう数えればよいでしょうか。',
    add: F([lb(160, 22, 'りんご 1個120円 × 5個', 12, C.red, 'middle', true), ...apples(), lb(160, 88, 'みかん 1個80円 × 8個', 12, C.main, 'middle', true), ...oranges(112)], [eb(160, '合計はいくら？', C.blue, FILL.blue, 16)]),
  },
  {
    note: '❓なぜかけ算で出せるの？→りんごは全部同じ120円なので、120円を5回たすのと同じです。同じ数を何回もたすことを、かけ算で短く書きます。',
    add: F([...apples(), lb(160, 88, '120＋120＋120＋120＋120', 14, C.red, 'middle', true)], [eb(158, '120 × 5 ＝ 600円', C.red, FILL.red, 16), tx(212, '同じ値段 × 個数', 12, C.gray)]),
  },
  {
    note: 'みかんも同じです。80円を8回たすことを、かけ算で書くと 80×8 ＝ 640円になります。',
    add: F([...oranges(50), lb(160, 88, '80円が8個', 14, C.main, 'middle', true)], [eb(158, '80 × 8 ＝ 640円', C.main, FILL.warm, 16), tx(212, '同じ値段 × 個数', 12, C.gray)]),
  },
  {
    note: '❓では、なぜりんごとみかんを別々に計算するの？→値段がちがうので、「1個の値段」を1つにそろえられないからです。先に、それぞれの代金を出します。',
    add: F([bx(30, 30, 110, 60, 'りんご\n600円', C.red, FILL.red, 15), bx(180, 30, 110, 60, 'みかん\n640円', C.main, FILL.warm, 15), lb(160, 66, '＋', 18, C.gray, 'middle', true)], [tx(170, '値段がちがうものは、別々にかける', 13, C.blue, true)]),
  },
  {
    note: '代金がそれぞれ出たので、最後に合わせます。600＋640 ＝ 1240円です。',
    add: T([], [eb(156, '600 ＋ 640 ＝ 1240円', C.green, FILL.green, 17), tx(210, '答え 1240円', 14, C.green, true)]),
  },
  {
    note: '❓よくあるまちがいは？→（120＋80）×（5＋8）＝200×13＝2600円 とする計算です。これは「どの品物も1個200円で13個買った」ときの代金で、問題とはちがいます。',
    add: F([bx(20, 30, 280, 44, '（120＋80）×（5＋8）＝ 2600円', C.red, FILL.red, 14), lb(160, 100, '× どれも1個200円で13個、という計算になってしまう', 11, C.red, 'middle', true)], [tx(170, '値段と個数を、それぞれたしてからかけない', 13, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。りんごを約100円×5＝500円、みかんを約100円×8＝800円と見ると、約1300円。1240円はこれに近いので、ありえる答えです。',
    add: F([bx(30, 30, 120, 34, 'りんご 約500円', C.red, FILL.red, 13), bx(170, 30, 120, 34, 'みかん 約800円', C.main, FILL.warm, 13), lb(160, 100, '合わせて 約1300円', 14, C.gray, 'middle', true)], [eb(156, '1240円 は 約1300円 に近い', C.green, FILL.green, 15), tx(210, '答え 1240円', 14, C.green, true)]),
  },
], '値段がちがうものは、別々にかけてからたす');

// ── otani_sansu_05 ──
const sectors8 = (cx: number, cy: number, r: number): E[] =>
  Array.from({ length: 8 }, (_, k) => sc(cx, cy, r, k * 45, (k + 1) * 45, C.main, k % 2 === 0 ? FILL.blue : FILL.warm));
const tri = (x0: number, w: number, top: number, bot: number, up: boolean, fill: string): E =>
  up ? pg([[x0, bot], [x0 + w, bot], [x0 + w / 2, top]], C.main, fill) : pg([[x0, top], [x0 + w, top], [x0 + w / 2, bot]], C.main, fill);
const otani05 = show([
  {
    note: '半径（はんけい）4cmの円の面積（めんせき）と、円周（えんしゅう＝まわりの長さ）を求めます。円周率は3.14です。',
    add: F([ci(160, 76, 56, undefined, C.main, FILL.blue), ln(160, 76, 216, 76, C.red, false, 2), lb(192, 94, '半径 4cm', 12, C.red, 'middle', true), ci(160, 76, 3, undefined, C.ink, C.ink)], [tx(172, '面積＝？　円周＝？　（円周率 3.14）', 14, C.blue, true)]),
  },
  {
    note: '❓円周はなぜ「直径×3.14」なの？→どんな大きさの円でも、円周は直径のちょうど3倍と少し（3.14倍）になるからです。この倍率が円周率です。直径8cmの棒を3本ならべても、円周にはまだ少し足りません。',
    add: F([lb(160, 18, '円周を まっすぐにのばすと…', 12, C.gray), bx(20, 30, 76, 28, '直径8', C.blue, FILL.blue, 12), bx(96, 30, 76, 28, '直径8', C.blue, FILL.blue, 12), bx(172, 30, 76, 28, '直径8', C.blue, FILL.blue, 12), bx(248, 30, 12, 28, '', C.red, FILL.red), lb(254, 76, '0.14', 10, C.red, 'middle', true), lb(140, 100, '3本 と 0.14本分 ＝ 3.14本', 13, C.ink, 'middle', true)], [eb(156, '円周 ＝ 直径 × 3.14', C.blue, FILL.blue, 16)]),
  },
  {
    note: '❓直径は？→直径は半径の2倍で、4×2＝8cmです。だから円周は 8×3.14＝25.12cm。半径4cmのまま 4×3.14 としないように気をつけます。',
    add: T([], [eb(152, '直径 4×2 ＝ 8cm', C.gray, FILL.gray, 14, 28), eb(186, '円周 8 × 3.14 ＝ 25.12cm', C.green, FILL.green, 16, 30)]),
  },
  {
    note: '❓では、面積はなぜ「半径×半径×3.14」なの？→円を、ピザのようにおうぎ形に細かく切って考えます。まず8つに切ります。',
    add: F([...sectors8(160, 76, 58)], [tx(172, '円を おうぎ形に細かく切る', 14, C.blue, true)]),
  },
  {
    note: '❓切ったものをどうする？→おうぎ形を、上向き・下向きと交互（こうご）にならべます。すると、平行四辺形のような形になります。',
    add: F([...[0, 1, 2, 3].map((i) => tri(60 + i * 32, 32, 50, 100, true, FILL.blue)), ...[0, 1, 2, 3].map((i) => tri(76 + i * 32, 32, 50, 100, false, FILL.warm))], [tx(150, 'おうぎ形を たがいちがいに ならべる', 13, C.blue, true), tx(172, '細かく切るほど、長方形に近づく', 12, C.gray)]),
  },
  {
    note: '❓長方形のたてとよこは？→たては円の半径（4cm）。よこは円周の半分です（ならべた下の辺が円周の半分になるから）。円周25.12cmの半分は12.56cmです。',
    add: F([bx(70, 34, 160, 70, '', C.main, FILL.blue), lb(150, 70, '面積を求める', 13, C.ink, 'middle', true), lb(150, 24, 'よこ ＝ 円周の半分 ＝ 12.56cm', 11, C.red, 'middle', true), lb(52, 70, 'たて\n4cm', 11, C.red, 'end', true)], [eb(152, 'たて×よこ ＝ 4 × 12.56 ＝ 50.24cm²', C.green, FILL.green, 14, 30), tx(206, '半径 × (直径×3.14÷2) ＝ 半径 × 半径 × 3.14', 11, C.gray)]),
  },
  {
    note: '❓だから式は？→よこの「直径×3.14÷2」は「半径×3.14」と同じです。たて（半径）にかけると、半径×半径×3.14。4×4×3.14＝16×3.14＝50.24cm²です。',
    add: F([], [eb(40, '面積 ＝ 4 × 4 × 3.14', C.blue, FILL.blue, 16, 34), eb(90, '＝ 16 × 3.14 ＝ 50.24cm²', C.green, FILL.green, 16, 34), tx(150, '面積は半径を2回、円周は直径を1回かける', 12, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。半径4cmの円は、1辺8cmの正方形（64cm²）にぴったり入ります。円の面積は正方形の約8割なので、64×0.8＝51.2に近い50.24は、ありえる答えです。',
    add: F([bx(110, 14, 100, 100, '', C.gray, FILL.gray), ci(160, 64, 50, undefined, C.main, FILL.blue), lb(160, 130, '正方形 8×8＝64cm²', 11, C.gray)], [eb(152, '64 × 0.8 ＝ 51.2 ≒ 50.24', C.green, FILL.green, 15, 30), tx(206, '答え 面積50.24cm²、円周25.12cm', 13, C.green, true)]),
  },
], '面積は半径×半径×3.14、円周は直径×3.14');

// ── otani_sansu_r02（つるかめ算）──
const slot = (i: number, t: string, color: string, fill: string): E => bx(12 + i * 30, 28, 26, 34, t, color, fill, 10);
const slots = (n80: number, label: boolean): E[] =>
  Array.from({ length: 10 }, (_, i) => (i < n80 ? slot(i, '80', C.red, FILL.red) : slot(i, label ? '50' : '?', label ? C.main : C.gray, label ? FILL.warm : FILL.gray)));
const otaniR02 = show([
  {
    note: 'りんご（1個80円）とみかん（1個50円）を、あわせて10個買って590円でした。りんごは何個でしょう。❓まず、10個のならびを□で表します。',
    add: F([lb(160, 14, 'あわせて10個・合計590円', 12, C.gray, 'middle', true), ...slots(0, false)], [tx(150, 'りんご 80円　　みかん 50円', 13, C.blue, true), tx(180, '何個ずつ？', 14, C.ink, true)]),
  },
  {
    note: '❓なぜ、先に「全部みかん」と考えるの？→片方にそろえると、代金がすぐ計算できて、実際の590円との「ずれ」が見えるからです。全部みかんなら 50×10＝500円です。',
    add: F([lb(160, 14, '全部みかん(50円)だったら？', 12, C.main, 'middle', true), ...slots(0, true)], [eb(156, '50 × 10 ＝ 500円', C.main, FILL.warm, 16), tx(208, '実際は590円 → 差は 590−500＝90円', 13, C.red, true)]),
  },
  {
    note: '❓なぜ差の90円が出るの？→本当は高いりんごがまじっているからです。みかん1個をりんご1個に入れかえると、代金は 80−50＝30円ふえます。',
    add: F([lb(160, 14, '1個入れかえると…', 12, C.red, 'middle', true), ...slots(1, true), ar(27, 76, 27, 66, C.red), lb(27, 90, '＋30円', 11, C.red, 'middle', true)], [eb(156, '80 − 50 ＝ 30円ふえる', C.red, FILL.red, 16), tx(208, '入れかえるたびに 30円ずつふえる', 13, C.gray)]),
  },
  {
    note: '❓90円ふやすには、何個入れかえる？→30円ずつふえるので、90÷30＝3個です。❓90÷80ではだめなの？→ふえるのは「りんごの値段80円」ではなく、みかんとの「差の30円」だからです。',
    add: F([lb(160, 14, '3個入れかえると 90円ふえる', 12, C.red, 'middle', true), ...slots(3, true), lb(57, 84, '＋30', 11, C.red, 'middle', true), lb(87, 84, '＋30', 11, C.red, 'middle', true), lb(117, 84, '＋30', 11, C.red, 'middle', true)], [eb(156, '90 ÷ 30 ＝ 3個（りんご）', C.green, FILL.green, 16), tx(208, 'みかんは 10−3＝7個', 14, C.green, true)]),
  },
  {
    note: '❓問3は？→りんご3個とみかん5個の代金を、別々に出してたします。りんご 80×3＝240円、みかん 50×5＝250円、合わせて 490円です。',
    add: F([bx(30, 30, 120, 50, 'りんご3個\n80×3＝240円', C.red, FILL.red, 13), bx(170, 30, 120, 50, 'みかん5個\n50×5＝250円', C.main, FILL.warm, 13), lb(160, 60, '＋', 16, C.gray, 'middle', true)], [eb(152, '240 ＋ 250 ＝ 490円', C.green, FILL.green, 17)]),
  },
  {
    note: '確かめ（検算）をします。りんご3個とみかん7個の代金は 80×3＋50×7＝240＋350＝590円で、問題の合計とぴったり合います。',
    add: F([...slots(3, true), lb(160, 100, '80×3 ＋ 50×7', 14, C.ink, 'middle', true)], [eb(152, '240 ＋ 350 ＝ 590円 ○', C.green, FILL.green, 16), tx(206, '答え 問1 3個　問2 7個　問3 490円', 13, C.green, true)]),
  },
  {
    note: 'つるかめ算の手順をまとめます。①全部一方だったと考える→②実際との差を出す→③1個入れかえたときの差で割る。この順で、なぜその計算をするのかも思い出せます。',
    add: F([], [...flow(['全部みかん\nと考える', '実際との\n差を出す', '1個ぶんの差\nでわる'], 30, { h: 60, color: C.blue, fill: FILL.blue, size: 12 }).flat(), tx(130, '50×10＝500 → 差90 → 90÷30＝3', 13, C.gray, true)]),
  },
], 'つるかめ算：全部一方と考え、差を1個ぶんの差でわる');

// ── nandai_sansu_20（13・14・15の三角形）── 9px＝1cm
const NA: [number, number] = [125, 20];
const NB: [number, number] = [80, 128];
const NC: [number, number] = [206, 128];
const NH: [number, number] = [125, 128];
const NI: [number, number] = [134, 92];
const tri20 = (): E[] => [pg([NA, NB, NC], C.main, 'rgba(14,165,233,0.08)'), lb(NA[0], 12, 'A', 12, C.ink, 'middle', true), lb(NB[0] - 8, NB[1] + 6, 'B', 12, C.ink, 'end', true), lb(NC[0] + 8, NC[1] + 6, 'C', 12, C.ink, 'start', true), lb(92, 70, '13', 11, C.blue, 'end', true), lb(172, 70, '15', 11, C.blue, 'start', true), lb(143, 141, '14', 11, C.blue, 'middle', true)];
const nandaiS20 = show([
  {
    note: '三角形ABCで、AB＝13、BC＝14、CA＝15です。この三角形の面積と、内接円（三角形の中にぴったり入る円）の半径を求めます。',
    add: F([...tri20()], [tx(170, '面積 ＝ ？　内接円の半径 ＝ ？', 14, C.blue, true)]),
  },
  {
    note: '❓高さが分からないときは？→頂点Aから底辺BCに垂直な線AHを引きます。すると、三角形が2つの直角三角形に分かれます。そのうち辺が整数になる有名な形をさがします。',
    add: F([...tri20(), ln(NA[0], NA[1], NH[0], NH[1], C.red, true, 2), lb(NH[0], NH[1] + 14, 'H', 12, C.red, 'middle', true)], [tx(168, 'Aから BC に垂直な線 AH', 14, C.blue, true), tx(196, 'BHとHCは？ AHは？', 13, C.gray)]),
  },
  {
    note: '❓どうやって5と9と12が見つかるの？→斜辺13の直角三角形は、辺の比が 5:12:13 になる形、斜辺15の直角三角形は 9:12:15（3:4:5の3倍）になる形があります。どちらも高さAHが12で同じになり、底辺は 5＋9＝14 とBCにぴったり合います。',
    add: F([pg([NA, NB, NH], C.blue, 'rgba(2,132,199,0.20)'), pg([NA, NH, NC], C.green, 'rgba(22,163,74,0.20)'), ...tri20(), ln(NA[0], NA[1], NH[0], NH[1], C.red, true, 2), lb(102, 141, '5', 11, C.blue, 'middle', true), lb(165, 141, '9', 11, C.green, 'middle', true), lb(130, 78, '12', 11, C.red, 'start', true)], [eb(150, '5:12:13 と 9:12:15（3:4:5の3倍）', C.purple, FILL.purple, 13, 28), tx(200, '5 ＋ 9 ＝ 14 ＝ BC ぴったり', 13, C.green, true)]),
  },
  {
    note: '❓面積は？→底辺BC＝14、高さAH＝12なので、三角形の面積は 底辺×高さ÷2＝14×12÷2＝84です。',
    add: F([pg([NA, NB, NC], C.main, FILL.blue), ln(NA[0], NA[1], NH[0], NH[1], C.red, true, 2), lb(130, 78, '12', 11, C.red, 'start', true), lb(143, 141, '14', 11, C.blue, 'middle', true)], [eb(150, '14 × 12 ÷ 2 ＝ 84', C.green, FILL.green, 16, 30), tx(204, '面積 84', 14, C.green, true)]),
  },
  {
    note: '❓内接円の半径は、どうやって？→内接円の中心Iから3つの頂点に線を引くと、三角形が3つに分かれます。どの三角形も、高さは内接円の半径r（円の半径は接点で辺に垂直だから）で、底辺は13・14・15です。',
    add: F([pg([NA, NB, NC], C.main, 'rgba(14,165,233,0.08)'), ci(NI[0], NI[1], 36, undefined, C.green, 'rgba(22,163,74,0.10)'), ci(NI[0], NI[1], 3, undefined, C.red, C.red), ln(NI[0], NI[1], NA[0], NA[1], C.gray, false, 1.5), ln(NI[0], NI[1], NB[0], NB[1], C.gray, false, 1.5), ln(NI[0], NI[1], NC[0], NC[1], C.gray, false, 1.5), ln(NI[0], NI[1], 134, 128, C.red, true, 1.5), lb(141, 112, 'r', 12, C.red, 'start', true), lb(NI[0] + 6, NI[1] - 4, 'I', 11, C.red, 'start', true)], [tx(166, '3つの三角形：底辺 13・14・15', 13, C.blue, true), tx(194, 'どれも 高さ ＝ r', 13, C.red, true)]),
  },
  {
    note: '❓面積はどう表せる？→3つの三角形の面積をたします。13×r÷2＋14×r÷2＋15×r÷2＝（13＋14＋15）×r÷2＝21×r。これが三角形ABC全体の面積84と等しくなります。',
    add: F([], [eb(20, '13×r÷2 ＋ 14×r÷2 ＋ 15×r÷2', C.blue, FILL.blue, 13, 30), eb(62, '＝（13＋14＋15）× r ÷ 2', C.blue, FILL.blue, 14, 30), eb(104, '＝ 42 × r ÷ 2 ＝ 21 × r', C.green, FILL.green, 14, 30), tx(164, '21 × r ＝ 84（全体の面積）', 14, C.red, true)]),
  },
  {
    note: '❓rはいくつ？→21×r＝84なので、r＝84÷21＝4です。内接円の半径は4です。',
    add: F([pg([NA, NB, NC], C.main, 'rgba(14,165,233,0.08)'), ci(NI[0], NI[1], 36, undefined, C.green, FILL.green), ln(NI[0], NI[1], 134, 128, C.red, false, 2), lb(141, 112, 'r＝4', 12, C.red, 'start', true)], [eb(150, '84 ÷ 21 ＝ 4', C.green, FILL.green, 16, 30), tx(204, '答え 面積84、内接円の半径4', 14, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。21×4＝84で、三角形の面積と一致します。13・14・15は、3:4:5と5:12:13という2つの有名な直角三角形を、高さ12の辺でぴったり貼り合わせた形だから、きれいな整数の答えになります。',
    add: F([], [eb(20, '21 × 4 ＝ 84 ○', C.green, FILL.green, 16, 30), tx(74, '13・14・15 ＝ 5:12:13 と 9:12:15 を', 12, C.gray), tx(94, '高さ12で貼り合わせた三角形', 12, C.gray), tx(130, '高さが分からなくても', 13, C.red, true), tx(152, 'まず 垂線で分けてみる', 13, C.red, true)]),
  },
], '垂線で整数の直角三角形に分け、面積＝半周×半径');

// ── nandai_rika_01（塩水に浮かぶ木片）──
const beaker = (surfaceY: number, x0 = 50, x1 = 270): E[] => [bx(x0, surfaceY, x1 - x0, 132 - surfaceY, undefined, C.blue, 'rgba(14,165,233,0.22)'), ln(x0, 40, x0, 132, C.gray, false, 2), ln(x1, 40, x1, 132, C.gray, false, 2), ln(x0, 132, x1, 132, C.gray, false, 2)];
const wood = (): E[] => [bx(120, 50, 80, 60, '木片', C.main, FILL.warm, 13), pg([[120, 70], [200, 70], [200, 110], [120, 110]], C.blue, 'rgba(14,165,233,0.35)')];
const nandaiR01 = show([
  {
    note: '1cm³あたりの重さ（密度）が0.8gで体積100cm³の木片を、1cm³あたり1.2gの塩水にうかべました。水面の上に出ている部分の体積は何cm³でしょう。',
    add: F([...beaker(70), ...wood(), lb(160, 42, '水面上 ？cm³', 11, C.red, 'middle', true), lb(238, 96, '塩水\n1.2g/cm³', 10, C.blue, 'middle', true)], [tx(158, '木片：1cm³あたり0.8g、体積100cm³', 13, C.main, true), tx(188, '水面上に出る体積は？', 13, C.gray)]),
  },
  {
    note: '❓まず、木片の重さは？→1cm³あたり0.8gが100cm³ぶんなので、0.8×100＝80gです。この重さが、木片を下へ引っぱっています。',
    add: F([...beaker(70), ...wood(), ar(100, 76, 100, 124, C.red), lb(96, 102, '重さ\n80g', 11, C.red, 'end', true)], [eb(152, '0.8 × 100 ＝ 80g', C.red, FILL.red, 16, 30)]),
  },
  {
    note: '❓うかんで止まっているのはなぜ？→下へ引く重さと、上へおす浮力（ふりょく）がつり合っているからです。だから、浮力も同じ80gぶんです。',
    add: F([...beaker(70), ...wood(), ar(100, 76, 100, 124, C.red), lb(96, 102, '重さ\n80g', 11, C.red, 'end', true), ar(222, 124, 222, 76, C.blue), lb(228, 102, '浮力\n80g', 11, C.blue, 'start', true)], [eb(152, '浮いて止まっている → 浮力 ＝ 重さ ＝ 80g', C.blue, FILL.blue, 12, 30)]),
  },
  {
    note: '❓浮力は、どうやって体積につながる？→浮力は、木片が押しのけた塩水の重さと同じです。塩水は1cm³が1.2gなので、80gぶんの塩水の体積は 80÷1.2＝66.7cm³。これが水中に沈んでいる部分の体積です。',
    add: F([...beaker(70), ...wood(), lb(160, 102, '沈む部分', 11, C.blue, 'middle', true), ln(112, 70, 112, 110, C.blue, false, 2)], [eb(148, '80 ÷ 1.2 ＝ 66.7cm³（沈む）', C.blue, FILL.blue, 15, 30), tx(202, '押しのけた塩水の重さ ＝ 浮力', 12, C.gray)]),
  },
  {
    note: '❓水面の上に出る体積は？→木片全体が100cm³で、そのうち66.7cm³が水の中なので、のこりの 100−66.7＝33.3cm³が水面の上に出ています。',
    add: F([...beaker(70), ...wood(), lb(160, 42, '水面上 33.3cm³', 11, C.red, 'middle', true), lb(160, 92, '水中 66.7cm³', 11, C.blue, 'middle', true)], [eb(152, '100 − 66.7 ＝ 33.3cm³', C.green, FILL.green, 16, 30), tx(206, '答え 33.3cm³（100/3cm³）', 13, C.green, true)]),
  },
  {
    note: '❓塩水だと、なぜ真水より水面の上に出る部分が多いの？→真水（1cm³が1.0g）なら80cm³が沈み、20cm³が出ます。塩水は同じ体積でも重い（1.2g）ので、少ない体積（66.7cm³）の塩水で80gを支えられ、沈む体積が小さくなって、その分出る部分が多くなります。',
    add: F([bx(20, 40, 100, 72, undefined, C.blue, 'rgba(14,165,233,0.22)'), bx(40, 28, 60, 60, '', C.main, FILL.warm), bx(40, 52, 60, 36, '', C.blue, 'rgba(14,165,233,0.35)'), lb(70, 104, '真水 1.0g', 10, C.blue, 'middle', true), lb(70, 20, '出る 20', 10, C.red, 'middle', true), bx(200, 40, 100, 72, undefined, C.blue, 'rgba(14,165,233,0.22)'), bx(220, 28, 60, 60, '', C.main, FILL.warm), bx(220, 48, 60, 40, '', C.blue, 'rgba(14,165,233,0.35)'), lb(250, 104, '塩水 1.2g', 10, C.blue, 'middle', true), lb(250, 20, '出る 33.3', 10, C.red, 'middle', true)], [tx(150, '真水：80cm³沈む・20cm³出る', 12, C.blue, true), tx(174, '塩水：66.7cm³沈む・33.3cm³出る', 12, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。66.7＋33.3＝100cm³で、木片の体積と一致します。また、沈んだ部分の塩水の重さは 66.7×1.2＝80gで、木片の重さ80gと合います。',
    add: F([], [eb(20, '66.7 ＋ 33.3 ＝ 100cm³ ○', C.green, FILL.green, 15, 30), eb(62, '66.7 × 1.2 ＝ 80g（木片の重さ）○', C.green, FILL.green, 14, 30), tx(126, '答え 33.3cm³（100/3cm³）', 15, C.green, true)]),
  },
], '浮いているとき、浮力＝重さ＝押しのけた液体の重さ');

// ── 損益の棒（tokyo_meidai_sansu_01 / 02 / hosei_sansu_02 / sansu_03 (1)）──
const bar = (x: number, y: number, w: number, t: string, color: string, fill: string, h = 26, size = 12): E => bx(x, y, w, h, t, color, fill, size);
// 10等分した定価の棒（n こ分を色つき）
const tenBar = (y: number, n: number, color: string, fill: string, x0 = 40, cell = 24): E[] =>
  Array.from({ length: 10 }, (_, i) => bx(x0 + i * cell, y, cell, 28, i < n ? String(i + 1) : '', i < n ? color : C.gray, i < n ? fill : FILL.gray, 10));

// ── tokyo_meidai_sansu_01 ──
// 目もり：7000円＝250px（1px＝28円）
const mb1 = (yen: number) => (yen / 7000) * 250;
const meidaiS01 = show([
  {
    note: '原価5320円の商品を、定価の2割引きで売ると利益が280円でした。定価の3割引きで売ると、損失は何円でしょう。❓まず、原価・売値・定価の大きさを、棒でくらべて考えます。',
    add: F([lb(30, 22, '原価 5320円', 12, C.gray, 'start', true), bar(30, 30, mb1(5320), '原価 5320円', C.gray, FILL.gray, 28, 12), lb(30, 88, '利益280円 がついたときの売値＝？', 12, C.blue, 'start', true)], [tx(150, '定価は？ → 3割引きの売値は？', 13, C.blue, true), tx(180, '売値が原価より安いと「損失」', 12, C.red)]),
  },
  {
    note: '❓2割引きの売値はいくら？→売値は「原価＋利益」です。5320＋280＝5600円。これが定価の2割引きの値段です。',
    add: F([bar(30, 30, mb1(5320), '原価 5320円', C.gray, FILL.gray, 28, 12), bar(30 + mb1(5320), 30, mb1(280), '', C.red, FILL.red, 28), lb(30 + mb1(5320) + 8, 76, '＋280', 11, C.red, 'middle', true), bar(30, 96, mb1(5600), '売値 5600円', C.blue, FILL.blue, 28, 12)], [eb(156, '5320 ＋ 280 ＝ 5600円', C.blue, FILL.blue, 16), tx(208, '（定価の2割引きの値段）', 12, C.gray)]),
  },
  {
    note: '❓なぜ5600円は「定価の0.8倍」なの？→2割引きは、定価を10こ分に分けたとき2こ分を引くことです。残りは 10−2＝8こ分。だから売値5600円は、定価の8こ分にあたります。',
    add: F([lb(160, 18, '定価を10こ分に分ける', 12, C.gray, 'middle', true), ...tenBar(28, 8, C.blue, FILL.blue), lb(40 + 4 * 24, 74, '8こ分 ＝ 5600円', 12, C.blue, 'middle', true), lb(40 + 9 * 24, 74, '2こ分（引く）', 10, C.red, 'middle', true)], [eb(156, '定価の 10−2 ＝ 8こ分 ＝ 5600円', C.blue, FILL.blue, 14)]),
  },
  {
    note: '❓では、定価は？→8こ分が5600円なので、1こ分は 5600÷8＝700円。定価は10こ分なので 700×10＝7000円です。（5600÷0.8 と同じ計算です。）',
    add: F([...tenBar(28, 10, C.green, FILL.green), lb(160, 74, '1こ分＝700円', 12, C.green, 'middle', true)], [eb(152, '5600 ÷ 8 ＝ 700円（1こ分）', C.blue, FILL.blue, 14, 28), eb(186, '700 × 10 ＝ 7000円（定価）', C.green, FILL.green, 14, 28)]),
  },
  {
    note: '❓3割引きの売値は？→3割引きは10こ分のうち3こ分を引くので、残りは7こ分。700×7＝4900円です。',
    add: F([...tenBar(28, 7, C.purple, FILL.purple), lb(40 + 3.5 * 24, 74, '7こ分', 12, C.purple, 'middle', true), lb(40 + 8.5 * 24, 74, '3こ分（引く）', 10, C.red, 'middle', true)], [eb(156, '700 × 7 ＝ 4900円', C.purple, FILL.purple, 16), tx(208, '（7000×0.7 と同じ）', 12, C.gray)]),
  },
  {
    note: '❓それで損か得か？→売値4900円を、原価5320円とくらべます。売値のほうが安いので損失で、5320−4900＝420円の損失です。',
    add: F([bar(30, 30, mb1(5320), '原価 5320円', C.gray, FILL.gray, 28, 12), bar(30, 70, mb1(4900), '売値 4900円', C.purple, FILL.purple, 28, 12), bar(30 + mb1(4900), 70, mb1(420), '', C.red, FILL.red, 28), lb(30 + mb1(4900) + 10, 112, '損失', 11, C.red, 'middle', true)], [eb(156, '5320 − 4900 ＝ 420円の損失', C.red, FILL.red, 16), tx(208, '答え 420円の損失', 14, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。2割引きと3割引きの売値の差は、定価の1割ぶんで 7000×0.1＝700円。2割引きのときの利益280円の利益は、700円下がると使い切って、さらに700−280＝420円たりなくなります。つまり420円の損失です。',
    add: F([bx(30, 30, 260, 34, '280円の利益 → 700円下がる → 420円たりない', C.green, FILL.green, 12)], [tx(120, '2割引きと3割引きの差 ＝ 定価の1割 ＝ 700円', 12, C.blue, true), eb(150, '700 − 280 ＝ 420円の損失 ○', C.green, FILL.green, 15, 30), tx(206, '3割引きは売値が原価を下回る', 12, C.gray)]),
  },
  {
    note: '❓よくあるまちがいは？→「2割引きで280円の利益なら、3割引きは1.5倍の420円の利益」と考えることです。利益は割引の割合に比例しません。売値と原価を必ずくらべます。',
    add: F([bx(20, 30, 280, 40, '280 × 1.5 ＝ 420円の利益 ×', C.red, FILL.red, 14)], [tx(130, '利益は割引の割合に比例しない', 13, C.red, true), tx(170, '必ず「売値」と「原価」をくらべる', 13, C.blue, true)]),
  },
], '定価を10こ分に分けて、売値と原価をくらべる');

// ── tokyo_meidai_sansu_02 ── 目もり：1800円＝240px
const mb2 = (yen: number) => (yen / 1800) * 240;
const meidaiS02 = show([
  {
    note: '原価1500円の商品に、原価の2割増しの定価をつけ、その定価の1割5分引きで売ります。売値は何円でしょう。❓2割増しと1割5分引きは、それぞれ何をもとにした割合でしょうか。',
    add: F([bar(40, 40, mb2(1500), '原価 1500円', C.gray, FILL.gray, 30, 13), lb(40, 28, 'まず原価', 12, C.gray, 'start', true)], [tx(150, '2割増し → 原価をもとにする', 13, C.blue, true), tx(178, '1割5分引き → 定価をもとにする', 13, C.red, true)]),
  },
  {
    note: '❓2割増しとは？→原価の10こ分に2こ分をたすことなので、原価の 1＋0.2＝1.2倍です。2割は1500×0.2＝300円。定価は1500＋300＝1800円です。',
    add: F([bar(40, 40, mb2(1500), '原価 1500円', C.gray, FILL.gray, 30, 13), bar(40 + mb2(1500), 40, mb2(300), '', C.red, FILL.red, 30), lb(40 + mb2(1500) + 20, 86, '＋300円', 11, C.red, 'middle', true), bar(40, 100, mb2(1800), '定価 1800円', C.blue, FILL.blue, 30, 13)], [eb(156, '1500 × 1.2 ＝ 1800円（定価）', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓1割5分引きとは？→「定価」の100こ分のうち15こ分を引くことなので、残りは 1−0.15＝0.85倍です。引く15%は、定価1800円の15%です。',
    add: F([bar(40, 40, mb2(1800) * 0.85, '残り 0.85', C.green, FILL.green, 30, 13), bar(40 + mb2(1800) * 0.85, 40, mb2(1800) * 0.15, '', C.red, FILL.red, 30), lb(40 + mb2(1800) * 0.85 + 18, 86, '引く0.15', 11, C.red, 'middle', true), lb(40, 28, '定価1800円を 1 とすると', 12, C.gray, 'start', true)], [eb(156, '1 − 0.15 ＝ 0.85', C.green, FILL.green, 16), tx(208, '定価の 0.85倍 が売値', 13, C.gray)]),
  },
  {
    note: '売値は、定価1800円の0.85倍です。1800×0.85＝1530円になります。',
    add: F([bar(40, 40, mb2(1800), '定価 1800円', C.blue, FILL.blue, 30, 13), bar(40, 100, mb2(1530), '売値 1530円', C.green, FILL.green, 30, 13)], [eb(156, '1800 × 0.85 ＝ 1530円', C.green, FILL.green, 16), tx(208, '答え 1530円', 14, C.green, true)]),
  },
  {
    note: '❓まとめて一度に計算できる？→原価に 1.2 をかけて、さらに 0.85 をかけます。1500×1.2×0.85＝1530円で、同じ答えになります。',
    add: F([...flow(['原価\n1500', '×1.2', '定価\n1800', '×0.85', '売値\n1530'], 40, { h: 50, color: C.blue, fill: FILL.blue, size: 11, gap: 8 }).flat()], [tx(150, '1.2 × 0.85 ＝ 1.02', 13, C.gray, true), tx(180, '1500 × 1.02 ＝ 1530円', 13, C.green, true)]),
  },
  {
    note: '❓よくあるまちがいは？→2割増しと1割5分引きを打ち消し合わせて「原価の5分増し＝1575円」とする計算です。でも、1割5分は定価1800円に対する割合で、270円。原価に対する15%（225円）とはちがいます。',
    add: F([bar(40, 30, mb2(270), '', C.red, FILL.red, 26), lb(40 + mb2(270) + 6, 43, '定価の15% ＝ 270円', 11, C.red, 'start', true), bar(40, 80, mb2(225), '', C.gray, FILL.gray, 26), lb(40 + mb2(225) + 6, 93, '原価の15% ＝ 225円', 11, C.gray, 'start', true)], [tx(150, 'もとにする量がちがうと 15% の大きさもちがう', 12, C.red, true), tx(180, '1575円 は まちがい', 13, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。定価1800円の1割5分は 1800×0.15＝270円。1800−270＝1530円で一致します。利益は 1530−1500＝30円です。',
    add: F([bar(40, 40, mb2(1500), '原価 1500円', C.gray, FILL.gray, 30, 13), bar(40, 90, mb2(1530), '売値 1530円', C.green, FILL.green, 30, 13), lb(40 + mb2(1530) + 4, 120, '利益30円', 11, C.green, 'start', true)], [eb(152, '1800 − 270 ＝ 1530円 ○', C.green, FILL.green, 16), tx(206, '答え 1530円', 14, C.green, true)]),
  },
], '割合は「何をもとにするか」を毎回たしかめる');

// ── tokyo_hosei_sansu_02 ── 目もり：1800円＝240px
const hoseiS02 = show([
  {
    note: '原価1500円の商品に2割増しの定価をつけ、定価の1割引きで売りました。定価・売値・利益を求めます。❓まず「2割増し」は、何をもとにした割合でしょう。',
    add: F([bar(40, 40, mb2(1500), '原価 1500円', C.gray, FILL.gray, 30, 13)], [tx(150, '2割増し → 原価をもとにする', 13, C.blue, true), tx(178, '1割引き → 定価をもとにする', 13, C.red, true)]),
  },
  {
    note: '❓定価はいくら？→2割増しは 1＋0.2＝1.2倍。1500×1.2＝1800円です。（2割の300円を原価にたしても同じです。）',
    add: F([bar(40, 40, mb2(1500), '原価 1500円', C.gray, FILL.gray, 30, 13), bar(40 + mb2(1500), 40, mb2(300), '', C.red, FILL.red, 30), lb(40 + mb2(1500) + 20, 86, '＋300円', 11, C.red, 'middle', true), bar(40, 100, mb2(1800), '定価 1800円', C.blue, FILL.blue, 30, 13)], [eb(156, '1500 × 1.2 ＝ 1800円', C.blue, FILL.blue, 16)]),
  },
  {
    note: '❓1割引きは、何に対する割合？→定価に対してです。定価1800円の1割は 1800×0.1＝180円。残りは 1−0.1＝0.9倍です。',
    add: F([bar(40, 40, mb2(1800) * 0.9, '定価の 0.9', C.green, FILL.green, 30, 13), bar(40 + mb2(1800) * 0.9, 40, mb2(1800) * 0.1, '', C.red, FILL.red, 30), lb(40 + mb2(1800) * 0.9 + 12, 86, '180円', 11, C.red, 'middle', true), lb(40, 28, '定価1800円を 1 とすると', 12, C.gray, 'start', true)], [eb(156, '1 − 0.1 ＝ 0.9', C.green, FILL.green, 16)]),
  },
  {
    note: '売値は、定価の0.9倍なので 1800×0.9＝1620円です。',
    add: F([bar(40, 40, mb2(1800), '定価 1800円', C.blue, FILL.blue, 30, 13), bar(40, 100, mb2(1620), '売値 1620円', C.green, FILL.green, 30, 13)], [eb(156, '1800 × 0.9 ＝ 1620円', C.green, FILL.green, 16)]),
  },
  {
    note: '❓利益はどう出す？→利益は「実際に売った値段−原価」です。定価は関係ありません。1620−1500＝120円の利益です。',
    add: F([bar(40, 40, mb2(1500), '原価 1500円', C.gray, FILL.gray, 30, 13), bar(40, 90, mb2(1620), '売値 1620円', C.green, FILL.green, 30, 13), bar(40 + mb2(1500), 40, mb2(120), '', C.red, FILL.red, 30), lb(40 + mb2(1620) + 4, 120, '利益120円', 11, C.red, 'start', true)], [eb(156, '1620 − 1500 ＝ 120円の利益', C.red, FILL.red, 15)]),
  },
  {
    note: '❓よくあるまちがいは？→2割増しと1割引きを打ち消し合わせて「原価の1割増し＝150円の利益」とすることです。1割引きの「もと」は定価1800円なので、引くのは180円。原価の1割の150円ではありません。',
    add: F([bar(40, 30, mb2(180), '', C.red, FILL.red, 26), lb(40 + mb2(180) + 6, 43, '定価の1割 ＝ 180円', 11, C.red, 'start', true), bar(40, 80, mb2(150), '', C.gray, FILL.gray, 26), lb(40 + mb2(150) + 6, 93, '原価の1割 ＝ 150円', 11, C.gray, 'start', true)], [tx(150, 'もとにする量がちがうので、打ち消し合わない', 12, C.red, true), tx(180, '150円の利益 は まちがい', 13, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。原価から一気に 1500×1.2×0.9＝1500×1.08＝1620円。原価の8分（0.08）が利益で、1500×0.08＝120円と一致します。',
    add: F([...flow(['原価\n1500', '×1.2', '×0.9', '売値\n1620'], 40, { h: 50, color: C.blue, fill: FILL.blue, size: 11, gap: 10 }).flat()], [tx(150, '1.2 × 0.9 ＝ 1.08', 13, C.gray, true), eb(166, '1500 × 0.08 ＝ 120円 ○', C.green, FILL.green, 15, 28), tx(214, '答え 1800円・1620円・120円の利益', 12, C.green, true)]),
  },
], '増しと引きは、もとにする量が別のものとして順に計算する');

// ── tokyo_meidai_sansu_03 ──
const mb3 = (yen: number) => (yen / 3600) * 240;
const triA = [160, 14] as const;
const triB = [60, 126] as const;
const triC = [260, 126] as const;
const triD = [120, 59] as const; // AD:DB = 2:3 → 上から 2/5
const triE = [200, 59] as const;
const tri3 = (): E[] => [pg([[triA[0], triA[1]], [triB[0], triB[1]], [triC[0], triC[1]]], C.main, 'rgba(14,165,233,0.10)'), lb(triA[0], triA[1] - 4, 'A', 12, C.ink, 'middle', true), lb(triB[0] - 8, triB[1] + 12, 'B', 12, C.ink, 'middle', true), lb(triC[0] + 8, triC[1] + 12, 'C', 12, C.ink, 'middle', true)];
const meidaiS03 = show([
  {
    note: '(1)定価3600円の商品を、定価の2割5分引きで仕入れ、定価の1割引きで売ります。利益は？❓仕入れ値も売値も、何をもとにした割合でしょうか。',
    add: F([bar(40, 40, mb3(3600), '定価 3600円', C.blue, FILL.blue, 30, 13)], [tx(130, '2割5分引きで仕入れ → 定価の ？倍', 13, C.gray, true), tx(160, '1割引きで売る → 定価の ？倍', 13, C.gray, true), tx(194, '（どちらも定価をもとにする）', 12, C.blue, true)]),
  },
  {
    note: '❓仕入れ値は？→2割5分引きは、定価の 1−0.25＝0.75倍です。3600×0.75＝2700円。',
    add: F([bar(40, 40, mb3(3600), '定価 3600円', C.blue, FILL.blue, 26, 12), bar(40, 84, mb3(2700), '仕入れ値 2700円', C.gray, FILL.gray, 26, 12), bar(40 + mb3(2700), 84, mb3(900), '', C.red, FILL.red, 26), lb(40 + mb3(2700) + 30, 126, '引く 900円', 11, C.red, 'middle', true)], [eb(156, '3600 × 0.75 ＝ 2700円', C.gray, FILL.gray, 16)]),
  },
  {
    note: '❓売値は？→1割引きは、定価の 1−0.1＝0.9倍です。3600×0.9＝3240円。',
    add: F([bar(40, 40, mb3(3600), '定価 3600円', C.blue, FILL.blue, 26, 12), bar(40, 84, mb3(3240), '売値 3240円', C.green, FILL.green, 26, 12), bar(40 + mb3(3240), 84, mb3(360), '', C.red, FILL.red, 26), lb(40 + mb3(3240) + 12, 126, '引く360円', 11, C.red, 'middle', true)], [eb(156, '3600 × 0.9 ＝ 3240円', C.green, FILL.green, 16)]),
  },
  {
    note: '❓利益は？→利益は「売値−仕入れ値」です。3240−2700＝540円の利益です。',
    add: F([bar(40, 40, mb3(2700), '仕入れ値 2700円', C.gray, FILL.gray, 28, 12), bar(40, 84, mb3(3240), '売値 3240円', C.green, FILL.green, 28, 12), bar(40 + mb3(2700), 40, mb3(540), '', C.red, FILL.red, 28), lb(40 + mb3(2700) + 26, 28, '利益 540円', 11, C.red, 'middle', true)], [eb(156, '3240 − 2700 ＝ 540円', C.green, FILL.green, 16), tx(208, '(1) 540円', 14, C.green, true)]),
  },
  {
    note: '(2)三角形ABCで、DEはBC（12cm）に平行で、AD:DB＝2:3です。DEの長さは？',
    add: F([...tri3(), ln(triD[0], triD[1], triE[0], triE[1], C.red, false, 2.5), lb(triD[0] - 8, triD[1] - 2, 'D', 12, C.ink, 'middle', true), lb(triE[0] + 8, triE[1] - 2, 'E', 12, C.ink, 'middle', true), lb(160, triB[1] + 14, 'BC ＝ 12cm', 12, C.blue, 'middle', true), lb(160, triD[1] - 6, 'DE ＝ ？', 12, C.red, 'middle', true)], [tx(170, 'DE ∥ BC（平行）　AD : DB ＝ 2 : 3', 13, C.blue, true)]),
  },
  {
    note: '❓なぜ三角形ADEと三角形ABCは「形が同じ（相似）」といえるの？→DEとBCが平行なので、同じ向きの角（同位角）が等しいからです。●の角と×の角が2組等しく、さらに頂点Aの角は共通なので、3つの角が全部等しい形になります。',
    add: T([...tri3(), ln(triD[0], triD[1], triE[0], triE[1], C.red, false, 2.5), lb(triD[0] - 4, triD[1] + 14, '●', 12, C.green, 'middle', true), lb(triB[0] + 14, triB[1] - 6, '●', 12, C.green, 'middle', true), lb(triE[0] + 4, triE[1] + 14, '×', 12, C.purple, 'middle', true), lb(triC[0] - 14, triC[1] - 6, '×', 12, C.purple, 'middle', true)], [tx(172, '角が全部等しい → 形が同じ（相似）', 13, C.blue, true)]),
  },
  {
    note: '❓相似なら、辺の比はどうなる？→対応する辺の比はみんな同じです。ADは全体ABの 2:(2+3)＝2:5。DB（3）だけを使って 2:3 としないよう注意します。だから DE:BC＝2:5 で、DE＝12×2÷5＝4.8cmです。',
    add: F([bx(20, 30, 100, 30, 'AD = 2', C.red, FILL.red, 13), bx(120, 30, 150, 30, 'DB = 3', C.gray, FILL.gray, 13), lb(145, 80, 'AB 全体 ＝ 2＋3 ＝ 5', 12, C.blue, 'middle', true)], [eb(130, 'DE : BC ＝ AD : AB ＝ 2 : 5', C.blue, FILL.blue, 14, 28), eb(164, 'DE ＝ 12 × 2 ÷ 5 ＝ 4.8cm', C.green, FILL.green, 15, 28), tx(214, '(2) 4.8cm', 14, C.green, true)]),
  },
  {
    note: '(3)相似比が3:5の2つの三角形で、小さい方の面積が27cm²のとき、大きい方の面積は？❓長さの比が3:5なら、面積の比は3:5でしょうか。正方形で考えます。',
    add: F([...[0, 1, 2].flatMap((i) => [0, 1, 2].map((j) => bx(30 + i * 20, 40 + j * 20, 20, 20, '', C.blue, FILL.blue))), ...[0, 1, 2, 3, 4].flatMap((i) => [0, 1, 2, 3, 4].map((j) => bx(130 + i * 20, 20 + j * 20, 20, 20, '', C.main, FILL.warm))), lb(60, 118, '1辺 3', 12, C.blue, 'middle', true), lb(180, 130, '1辺 5', 12, C.main, 'middle', true)], [tx(158, '長さの比 3 : 5', 13, C.gray, true), tx(186, '面積は「たて×よこ」で 2回かける', 13, C.blue, true)]),
  },
  {
    note: '❓面積の比は？→小さい方は 3×3＝9こ分、大きい方は 5×5＝25こ分。面積の比は 9:25です。相似比を2回かけた比になります（三角形でも同じ）。',
    add: F([...[0, 1, 2].flatMap((i) => [0, 1, 2].map((j) => bx(30 + i * 20, 40 + j * 20, 20, 20, '', C.blue, FILL.blue))), ...[0, 1, 2, 3, 4].flatMap((i) => [0, 1, 2, 3, 4].map((j) => bx(130 + i * 20, 20 + j * 20, 20, 20, '', C.main, FILL.warm))), lb(60, 118, '3×3＝9こ分', 12, C.blue, 'middle', true), lb(180, 130, '5×5＝25こ分', 12, C.main, 'middle', true)], [eb(156, '面積の比 ＝ 9 : 25', C.purple, FILL.purple, 17)]),
  },
  {
    note: '❓では大きい方は？→9こ分が27cm²なので、1こ分は 27÷9＝3cm²。25こ分で 3×25＝75cm²です。❓相似比のまま 3:5 で 27×5÷3＝45cm² としたのはなぜまちがい？→それは長さの比で、面積の比ではないからです。',
    add: F([bx(30, 24, 120, 40, '9こ分 ＝ 27cm²', C.blue, FILL.blue, 13), bx(170, 24, 120, 40, '25こ分 ＝ ？', C.main, FILL.warm, 13)], [eb(100, '27 ÷ 9 ＝ 3cm²（1こ分）', C.blue, FILL.blue, 14, 28), eb(134, '3 × 25 ＝ 75cm²', C.green, FILL.green, 16, 28), tx(190, '3:5 のまま 45cm² は まちがい', 12, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。(3)は27×25÷9＝75cm²でも同じ。(2)は4.8×5÷2＝12cmで、BCにもどります。(1)は3600×0.9＝3240、3600×0.75＝2700で、差は540円です。',
    add: F([], [eb(20, '(1) 3240 − 2700 ＝ 540円', C.green, FILL.green, 14, 30), eb(62, '(2) 4.8 × 5 ÷ 2 ＝ 12cm（BC）', C.green, FILL.green, 14, 30), eb(104, '(3) 27 × 25 ÷ 9 ＝ 75cm²', C.green, FILL.green, 14, 30), tx(166, '答え (1) 540円　(2) 4.8cm　(3) 75cm²', 13, C.green, true)]),
  },
], '割合は定価をもとに、相似は比で、面積比は相似比を2回かける');

// ── tokyo_hosei_sansu_01（流水算）──
const river = (): E[] => [bx(10, 36, 300, 84, undefined, C.blue, FILL.blue), lb(160, 48, '川の流れ →（時速4km）', 11, C.blue, 'middle', true)];
const boat = (x: number, y: number): E => bx(x, y, 56, 24, 'ボート', C.main, FILL.warm, 12);
const hoseiS01 = show([
  {
    note: '川の流れは時速4km、静水（流れのない水）でのボートの速さは時速12kmです。上りの速さ・下りの速さ・20kmの往復の時間を求めます。❓流れは、ボートの速さにどう関わるでしょう。',
    add: F([...river(), boat(130, 70), lb(160, 110, '静水で時速12km', 11, C.main, 'middle', true)], [tx(160, '下り ＝ ？　上り ＝ ？', 15, C.blue, true)]),
  },
  {
    note: '❓下りはなぜ速くなるの？→流れに運ばれて、ボートが自分の力で進む分に、流れの分がそのままプラスされるからです。12＋4＝時速16kmです。',
    add: F([...river(), boat(110, 72), ar(170, 84, 250, 84, C.main), lb(210, 70, '自分 12', 11, C.main, 'middle', true), ar(170, 104, 210, 104, C.blue), lb(216, 104, '流れ 4', 10, C.blue, 'start', true)], [eb(156, '下り ＝ 12 ＋ 4 ＝ 時速16km', C.green, FILL.green, 15)]),
  },
  {
    note: '❓上りはなぜ遅くなるの？→流れが逆向きにボートをおし返すからです。自分の速さ12から、流れの分4が引かれて、12−4＝時速8kmです。',
    add: F([...river(), boat(150, 72), ar(150, 84, 70, 84, C.main), lb(110, 70, '自分 12', 11, C.main, 'middle', true), ar(150, 104, 190, 104, C.blue), lb(196, 104, '流れ 4', 10, C.blue, 'start', true)], [eb(156, '上り ＝ 12 − 4 ＝ 時速8km', C.red, FILL.red, 15)]),
  },
  {
    note: '❓下り20kmにかかる時間は？→時間＝道のり÷速さ。20÷16＝1.25時間です。❓0.25時間は何分？→1時間＝60分なので 0.25×60＝15分。1時間15分です。',
    add: F([bx(20, 40, 280, 40, '下り 20km', C.green, FILL.green, 14), lb(160, 100, '時速16km で 20km', 12, C.gray, 'middle', true)], [eb(130, '20 ÷ 16 ＝ 1.25時間', C.green, FILL.green, 15, 28), eb(164, '0.25 × 60 ＝ 15分 → 1時間15分', C.green, FILL.green, 14, 28)]),
  },
  {
    note: '❓上り20kmは？→20÷8＝2.5時間。0.5時間は30分なので、2時間30分です。上りは下りより、速さが半分なので時間は2倍かかります。',
    add: F([bx(20, 40, 280, 40, '上り 20km', C.red, FILL.red, 14), lb(160, 100, '時速8km で 20km', 12, C.gray, 'middle', true)], [eb(130, '20 ÷ 8 ＝ 2.5時間', C.red, FILL.red, 15, 28), eb(164, '0.5 × 60 ＝ 30分 → 2時間30分', C.red, FILL.red, 14, 28)]),
  },
  {
    note: '往復の時間は、下りと上りをたして 1時間15分＋2時間30分＝3時間45分です。❓なぜ「40km÷時速12km」ではだめ？→上りと下りで速さがちがうので、静水時の速さ12では往復をまとめて計算できないからです。',
    add: F([bx(20, 34, 100, 36, '下り 1時間15分', C.green, FILL.green, 11), bx(120, 34, 180, 36, '上り 2時間30分', C.red, FILL.red, 12), lb(160, 92, '合計 3時間45分', 14, C.blue, 'middle', true)], [tx(150, '40 ÷ 12 ＝ 3時間20分 は まちがい', 13, C.red, true), tx(180, '上りと下りで速さがちがう', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）をします。下りと上りの速さ16と8をたして2でわると (16＋8)÷2＝12（静水の速さ）。ひいて2でわると (16−8)÷2＝4（流れの速さ）で、問題の条件にもどります。往復は3時間20分より長くなるはずで、3時間45分はそのとおりです。',
    add: F([], [eb(20, '(16＋8)÷2 ＝ 12　静水の速さ ○', C.green, FILL.green, 14, 30), eb(62, '(16−8)÷2 ＝ 4　流れの速さ ○', C.green, FILL.green, 14, 30), tx(118, '3時間45分 ＞ 3時間20分 ○', 13, C.green, true), tx(156, '答え 上り時速8km　下り時速16km　3時間45分', 12, C.green, true)]),
  },
], '下り＝静水＋流れ、上り＝静水−流れ');

// ── tokyo_chuo_sansu_02（比の文章題）──
const cell8 = (n: number, y: number, color: string, fill: string, from = 0): E[] =>
  Array.from({ length: n }, (_, i) => bx(40 + (from + i) * 30, y, 30, 26, '', color, fill));
const chuoS02 = show([
  {
    note: '兄と弟の所持金の比は5:3、合計は4000円です。兄はいくらでしょう。❓比の5:3とは、どんなことを表しているのでしょう。',
    add: F([lb(28, 50, '兄', 12, C.red, 'end', true), ...cell8(5, 36, C.red, FILL.red), lb(28, 94, '弟', 12, C.blue, 'end', true), ...cell8(3, 80, C.blue, FILL.blue), lb(160, 130, '同じ大きさの □ が 兄に5こ・弟に3こ', 12, C.gray, 'middle', true)], [tx(170, '合計 ＝ 4000円', 14, C.ink, true)]),
  },
  {
    note: '❓なぜ合計を8でわるの？→□は全部で 5＋3＝8こ。この8こ分が合計の4000円にあたるので、4000÷8＝500円が、□1こ分の金額です。',
    add: F([...cell8(5, 36, C.red, FILL.red), ...cell8(3, 36, C.blue, FILL.blue, 5), lb(160, 26, '8こ分 ＝ 4000円', 12, C.ink, 'middle', true), lb(160, 86, '□ 1こ分 ＝ ？', 12, C.gray, 'middle', true)], [eb(150, '4000 ÷ 8 ＝ 500円（1こ分）', C.green, FILL.green, 15)]),
  },
  {
    note: '❓兄の金額は？→兄は□が5こ分なので、500×5＝2500円。弟は□が3こ分なので、500×3＝1500円です。',
    add: F([...cell8(5, 36, C.red, FILL.red), ...cell8(3, 36, C.blue, FILL.blue, 5), lb(115, 82, '兄 500×5＝2500円', 11, C.red, 'middle', true), lb(250, 82, '弟 500×3＝1500円', 11, C.blue, 'middle', true)], [eb(150, '兄 2500円　弟 1500円', C.green, FILL.green, 16), tx(206, '問1 2500円　問2 1500円', 13, C.green, true)]),
  },
  {
    note: '問3：兄が弟に200円渡します。❓渡したあと、兄と弟の金額はいくらでしょう。兄は2500−200＝2300円、弟は1500＋200＝1700円です。',
    add: F([bar(40, 36, 2500 * 0.06, '兄 2500', C.red, FILL.red, 26, 11), bar(40, 80, 1500 * 0.06, '弟 1500', C.blue, FILL.blue, 26, 11), ar(180, 92, 180, 56, C.purple), lb(214, 74, '200円渡す', 11, C.purple, 'middle', true)], [eb(150, '兄 2500−200 ＝ 2300円', C.red, FILL.red, 14, 28), eb(184, '弟 1500＋200 ＝ 1700円', C.blue, FILL.blue, 14, 28)]),
  },
  {
    note: '❓なぜ比は5:3のままではないの？→5:3は「はじめの」金額の比です。お金を渡して金額が変わったので、比は実際の金額から作り直します。合計は 2300＋1700＝4000円で、渡す前と同じです。',
    add: F([bar(40, 36, 2300 * 0.06, '兄 2300', C.red, FILL.red, 26, 11), bar(40, 80, 1700 * 0.06, '弟 1700', C.blue, FILL.blue, 26, 11)], [tx(146, '2300 ＋ 1700 ＝ 4000円（合計は同じ）', 13, C.green, true), tx(176, '金額が変わったので、比は作り直す', 13, C.red, true)]),
  },
  {
    note: '❓比を簡単にするには？→2300:1700の両方を、同じ数の100でわります。すると23:17。❓もうこれ以上簡単にできない？→23と17は、どちらも1と自分自身でしかわれない数なので、共通の約数は1だけ。これが最も簡単な比です。',
    add: F([bx(30, 30, 100, 40, '2300 : 1700', C.gray, FILL.gray, 15), ar(140, 50, 180, 50, C.blue), lb(160, 40, '÷100', 11, C.blue, 'middle', true), bx(190, 30, 100, 40, '23 : 17', C.green, FILL.green, 17)], [tx(130, '23も17も、1と自分でしかわれない', 13, C.gray, true), tx(162, '答え 問3 23 : 17', 15, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。23＋17＝40で、4000÷40＝100。100×23＝2300、100×17＝1700となり、渡したあとの金額にもどります。',
    add: F([], [eb(20, '23＋17 ＝ 40　4000÷40 ＝ 100', C.blue, FILL.blue, 14, 30), eb(62, '100×23 ＝ 2300　100×17 ＝ 1700 ○', C.green, FILL.green, 14, 30), tx(120, '答え 問1 2500円　問2 1500円　問3 23:17', 13, C.green, true)]),
  },
], '比の合計で全体をわり、金額が変わったら比は作り直す');

// ── tokyo_chuo_sansu_03（直方体）──
// 前面 横8cm×高さ3cm、奥行き5cm（ななめ）。12px＝1cm
const cuboidFaces = (fillF: string = FILL.blue, fillT: string = FILL.warm, fillR: string = FILL.green): E[] => [
  pg([[60, 86], [156, 86], [156, 122], [60, 122]], C.blue, fillF),
  pg([[60, 86], [156, 86], [186, 65], [90, 65]], C.main, fillT),
  pg([[156, 86], [186, 65], [186, 101], [156, 122]], C.green, fillR),
];
const cuboidLabels = (): E[] => [lb(108, 136, '横 8cm', 11, C.blue, 'middle', true), lb(52, 106, '高さ\n3cm', 11, C.blue, 'end', true), lb(192, 68, '縦 5cm', 11, C.main, 'start', true)];
const chuoS03 = show([
  {
    note: '縦8cm・横5cm・高さ3cmの直方体（ちょくほうたい）があります。体積・表面積、そして同じ体積で底面が1辺4cmの正方形の直方体の高さを求めます。図は見やすいように向きを変えて、横8cm・縦5cm・高さ3cmとかいています。',
    add: F([...cuboidFaces(), ...cuboidLabels()], [tx(160, '体積は？　表面積は？　高さは？', 14, C.blue, true)]),
  },
  {
    note: '❓体積はなぜ「底面積×高さ」？→底面は横8×縦5＝40cm²。ここに1cm²の積み木が40こならびます。',
    add: T([...cuboidFaces(FILL.blue, FILL.yellow, FILL.green), ...cuboidLabels()], [eb(152, '底面積 ＝ 8 × 5 ＝ 40cm²（積み木40こ）', C.main, FILL.warm, 14, 30)]),
  },
  {
    note: '❓高さ3cmだと？→積み木40この1だんを、高さの3だんぶん積み重ねると 40×3＝120こ。1こは1cm³なので、体積は 8×5×3＝120cm³です。',
    add: T([...cuboidFaces(), ...cuboidLabels()], [eb(152, '40 × 3 ＝ 120（＝ 8×5×3）', C.blue, FILL.blue, 15, 28), tx(206, '問1 体積 120cm³', 14, C.green, true)]),
  },
  {
    note: '❓表面積とは？→箱の外側の6つの面の面積をぜんぶたしたものです。向かい合う面は同じ大きさなので、「前・上・横」の3種類を2まいずつ数えます。前は8×3＝24、上は8×5＝40、横は5×3＝15cm²です。',
    add: T([...cuboidFaces(FILL.blue, FILL.yellow, FILL.green), lb(108, 106, '前 24', 12, C.blue, 'middle', true), lb(120, 78, '上 40', 12, C.main, 'middle', true), lb(171, 96, '横15', 10, C.green, 'middle', true)], [tx(166, '3種類の面：24cm²・40cm²・15cm²', 13, C.gray, true)]),
  },
  {
    note: '❓どう数える？→3種類を2まいずつなので、（24＋40＋15）×2。80＋48＋30＝158cm²です。（79だけだと、半分しか数えていません。）',
    add: F([bx(20, 30, 84, 44, '前\n24×2＝48', C.blue, FILL.blue, 12), bx(118, 30, 84, 44, '上\n40×2＝80', C.main, FILL.yellow, 12), bx(216, 30, 84, 44, '横\n15×2＝30', C.green, FILL.green, 12)], [eb(110, '48 ＋ 80 ＋ 30 ＝ 158cm²', C.green, FILL.green, 16, 30), tx(166, '問2 表面積 158cm²', 14, C.green, true), tx(196, '79cm² は半分しか数えていない', 12, C.red)]),
  },
  {
    note: '問3：体積が同じ120cm³で、底面が1辺4cmの正方形の直方体の高さを求めます。❓底面積はいくつ？→4×4＝16cm²です。高さはまだ分かりません。',
    add: F([pg([[110, 30], [158, 30], [158, 120], [110, 120]], C.blue, FILL.blue), pg([[110, 30], [158, 30], [182, 13], [134, 13]], C.main, FILL.yellow), pg([[158, 30], [182, 13], [182, 103], [158, 120]], C.green, FILL.green), lb(100, 76, '高さ\n？cm', 12, C.red, 'end', true), lb(134, 134, '底面 4cm×4cm', 11, C.blue, 'middle', true), lb(250, 70, '体積 120cm³', 12, C.ink, 'middle', true)], [eb(152, '底面積 ＝ 4 × 4 ＝ 16cm²', C.blue, FILL.blue, 15, 30)]),
  },
  {
    note: '❓なぜ体積÷底面積で高さが出るの？→体積＝底面積×高さ なので、わり算で逆にたどれば 高さ＝体積÷底面積。120÷16＝7.5cmです。❓1辺の4でわると30cm？→それはちがいます。わるのは底面積16cm²です。',
    add: F([pg([[110, 30], [158, 30], [158, 120], [110, 120]], C.blue, FILL.blue), pg([[110, 30], [158, 30], [182, 13], [134, 13]], C.main, FILL.yellow), pg([[158, 30], [182, 13], [182, 103], [158, 120]], C.green, FILL.green), lb(100, 76, '7.5cm', 12, C.red, 'end', true), lb(134, 134, '底面 4cm×4cm', 11, C.blue, 'middle', true), lb(250, 70, '体積 120cm³', 12, C.ink, 'middle', true)], [eb(152, '120 ÷ 16 ＝ 7.5cm', C.green, FILL.green, 16, 30), tx(206, '4でわって30cm は まちがい', 12, C.red, true)]),
  },
  {
    note: '確かめ（検算）をします。4×4×7.5＝16×7.5＝120で、体積がぴったり合います。表面積も（40＋24＋15）×2＝79×2＝158cm²で一致します。',
    add: F([], [eb(20, '4 × 4 × 7.5 ＝ 120cm³ ○', C.green, FILL.green, 15, 30), eb(62, '（40＋24＋15）×2 ＝ 158cm² ○', C.green, FILL.green, 15, 30), tx(126, '答え 問1 120cm³　問2 158cm²　問3 7.5cm', 13, C.green, true)]),
  },
], '体積＝底面積×高さ、表面積は3種類を2まいずつ');

// ── tokyo_aoyama_sansu_01（台形）──
const trapA = (): E[] => [pg([[100, 125], [220, 125], [196, 29], [124, 29]], C.main, FILL.blue), ln(160, 29, 160, 125, C.red, true, 1.5), lb(160, 20, '上底 6cm', 11, C.blue, 'middle', true), lb(160, 138, '下底 10cm', 11, C.blue, 'middle', true), lb(152, 80, '高さ\n8cm', 11, C.red, 'end', true)];
const trapPair = (): E[] => [pg([[40, 110], [120, 110], [104, 46], [56, 46]], C.main, FILL.blue), pg([[104, 46], [184, 46], [168, 110], [120, 110]], C.purple, FILL.purple)];
const trapB = (): E[] => [pg([[100, 110], [196, 110], [164, 54], [132, 54]], C.main, FILL.blue), lb(148, 44, '上底 4cm', 11, C.blue, 'middle', true), lb(148, 124, '下底 ？cm', 11, C.red, 'middle', true), ln(164, 54, 164, 110, C.red, true, 1.5), lb(172, 82, '高さ7cm', 11, C.red, 'start', true), lb(264, 82, '面積\n56cm²', 12, C.ink, 'middle', true)];
const trapC = (): E[] => [pg([[97, 120], [223, 120], [181, 64], [139, 64]], C.main, FILL.blue), lb(160, 54, '上底 3cm', 11, C.blue, 'middle', true), lb(160, 134, '下底 9cm', 11, C.blue, 'middle', true), lb(104, 88, '5cm', 11, C.red, 'end', true), lb(216, 88, '5cm', 11, C.red, 'start', true)];
const aoyamaS01 = show([
  {
    note: '(1)上底6cm、下底10cm、高さ8cmの台形の面積を求めます。❓台形の面積はなぜ（上底＋下底）×高さ÷2なのでしょう。',
    add: F(trapA(), [tx(166, '面積 ＝ ？', 15, C.blue, true)]),
  },
  {
    note: '❓なぜ÷2が出てくるの？→同じ台形を上下逆さにして、となりにくっつけます。すると、底辺が「上底＋下底」の平行四辺形になります。',
    add: F([...trapPair(), lb(150, 126, '底辺 ＝ 上底 ＋ 下底', 12, C.red, 'middle', true)], [tx(158, '台形を2つあわせると 平行四辺形', 14, C.blue, true), tx(190, '高さは台形と同じ', 12, C.gray)]),
  },
  {
    note: '❓では、台形の面積は？→平行四辺形の面積は「底辺×高さ」＝（6＋10）×8＝128cm²。台形はその半分なので、128÷2＝64cm²。だから（上底＋下底）×高さ÷2です。',
    add: F([...trapPair(), lb(150, 126, '（6＋10）× 8 ＝ 128cm²', 12, C.red, 'middle', true)], [eb(148, '台形 ＝ 128 ÷ 2 ＝ 64cm²', C.green, FILL.green, 16, 30), tx(202, '問(1) 64cm²', 14, C.green, true)]),
  },
  {
    note: '(2)面積が56cm²、上底4cm、高さ7cmの台形の、下底を求めます。❓式をどう逆にたどるのでしょう。',
    add: F(trapB(), [tx(166, '（4 ＋ 下底）× 7 ÷ 2 ＝ 56', 14, C.blue, true)]),
  },
  {
    note: '❓÷2をもどすには？→×2をします。56×2＝112が（4＋下底）×7にあたります。❓×7をもどすには？→÷7で 112÷7＝16。これが4＋下底なので、下底＝16−4＝12cmです。',
    add: F([], [eb(20, '56 × 2 ＝ 112 ＝ （4＋下底）× 7', C.blue, FILL.blue, 13, 28), eb(54, '112 ÷ 7 ＝ 16 ＝ 4 ＋ 下底', C.blue, FILL.blue, 13, 28), eb(88, '下底 ＝ 16 − 4 ＝ 12cm', C.green, FILL.green, 15, 28), tx(150, '確かめ （4＋12）×7÷2 ＝ 56 ○', 13, C.green, true), tx(180, '問(2) 12cm', 14, C.green, true)]),
  },
  {
    note: '(3)等脚台形（左右の辺の長さが同じ台形）で、上底3cm、下底9cm、斜めの辺5cm。面積を求めます。❓高さが書かれていません。どうやって出しましょう。',
    add: F(trapC(), [tx(166, '高さが分からない！', 15, C.red, true)]),
  },
  {
    note: '❓どうやって高さをつくる？→上底の両はしから、下へ垂直な線を引きます。等脚台形は左右が同じ形なので、両はしに同じ直角三角形ができます。その底辺は（9−3）÷2＝3cmです。',
    add: T([...trapC(), ln(139, 64, 139, 120, C.red, true, 1.5), ln(181, 64, 181, 120, C.red, true, 1.5), lb(118, 132, '3cm', 11, C.green, 'middle', true), lb(202, 132, '3cm', 11, C.green, 'middle', true)], [eb(152, '（9 − 3）÷ 2 ＝ 3cm', C.green, FILL.green, 15, 30)]),
  },
  {
    note: '❓高さはいくつ？→斜辺5cm・底辺3cmの直角三角形は、辺の比が 3:4:5 の直角三角形です。だから残る1辺の高さは4cmと分かります。',
    add: T([...trapC(), pg([[97, 120], [139, 120], [139, 64]], C.green, 'rgba(22,163,74,0.25)'), pg([[223, 120], [181, 120], [181, 64]], C.green, 'rgba(22,163,74,0.25)'), ln(139, 64, 139, 120, C.red, true, 1.5), lb(150, 94, '高さ\n4cm', 11, C.red, 'start', true)], [eb(152, '辺の比 3 : 4 : 5 → 高さ 4cm', C.green, FILL.green, 15, 30), tx(206, '斜めの辺5cmは高さではない', 12, C.red)]),
  },
  {
    note: '高さ4cmが分かったので、台形の面積は（3＋9）×4÷2＝24cm²です。',
    add: T([...trapC(), ln(139, 64, 139, 120, C.red, true, 1.5), lb(150, 94, '4cm', 11, C.red, 'start', true)], [eb(152, '（3 ＋ 9）× 4 ÷ 2 ＝ 24cm²', C.green, FILL.green, 15, 30), tx(206, '問(3) 24cm²', 14, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。台形を、まん中の長方形（3×4＝12cm²）と、両はしの三角形2つ（3×4÷2＝6cm²が2つ）に分けると、12＋6×2＝24cm²で一致します。❓斜めの辺5を高さにした（3＋9）×5÷2＝30は、なぜまちがい？→高さは底辺に垂直な長さだからです。',
    add: F([pg([[97, 120], [223, 120], [181, 64], [139, 64]], C.main, FILL.blue), pg([[97, 120], [139, 120], [139, 64]], C.green, FILL.green), pg([[223, 120], [181, 120], [181, 64]], C.green, FILL.green), lb(118, 108, '6', 11, C.green, 'middle', true), lb(202, 108, '6', 11, C.green, 'middle', true), lb(160, 98, '12', 13, C.blue, 'middle', true)], [eb(148, '12 ＋ 6 × 2 ＝ 24cm² ○', C.green, FILL.green, 15, 28), tx(200, '答え (1) 64cm²　(2) 12cm　(3) 24cm²', 13, C.green, true)]),
  },
], '台形は2つあわせて平行四辺形、その半分');

// ── tokyo_chuo_rika_01（ばね）── 12px＝1cm、ばねの自然の長さ 40px
const zig = (x: number, y0: number, len: number, color: string = C.gray): E[] => {
  const n = 8;
  const pts: [number, number][] = [[x, y0], [x, y0 + 4]];
  for (let i = 1; i <= n; i++) pts.push([x + (i % 2 === 1 ? 9 : -9), y0 + 4 + ((len - 8) * i) / (n + 1)]);
  pts.push([x, y0 + len - 4], [x, y0 + len]);
  const out: E[] = [];
  for (let i = 0; i < pts.length - 1; i++) out.push(ln(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], color, false, 2));
  return out;
};
const ceil = (x: number): E => ln(x - 26, 16, x + 26, 16, C.ink, false, 3);
const spring = (x: number, cm: number, weight: string): E[] => {
  const len = 40 + cm * 12;
  return [ceil(x), ...zig(x, 16, len), bx(x - 24, 16 + len, 48, 24, weight, C.main, FILL.warm, 11)];
};
const chuoR01 = show([
  {
    note: 'あるばねは、300gのおもりをつるすと1cmのびます。おもりなしのとき（左）と、300gのとき（右）をくらべます。❓のびとおもりの重さには、どんな関係があるでしょう。',
    add: F([...[ceil(90), ...zig(90, 16, 40)], lb(90, 78, 'おもりなし', 11, C.gray, 'middle', true), ...spring(220, 1, '300g'), lb(250, 62, '1cmのび', 11, C.red, 'start', true), ln(180, 56, 232, 56, C.red, true, 1)], [tx(166, '300gで 1cmのびる', 14, C.blue, true)]),
  },
  {
    note: '❓のびは何に関係する？→おもりを2倍、3倍にすると、のびも2倍、3倍になります。これを「のびはおもりの重さに比例する」といいます。だから「300gで1cm」が、ものさしになります。',
    add: F([...spring(60, 1, '300g'), ...spring(160, 2, '600g'), ...spring(260, 3, '900g'), lb(60, 7, 'のび1cm', 10, C.red, 'middle', true), lb(160, 7, 'のび2cm', 10, C.red, 'middle', true), lb(260, 7, 'のび3cm', 10, C.red, 'middle', true)], [tx(166, '重さが2倍・3倍 → のびも2倍・3倍', 14, C.blue, true)]),
  },
  {
    note: '問1：150gのおもりのとき。❓150gは300gの何倍？→半分（0.5倍）です。のびも半分になるので、150÷300＝0.5cmです。',
    add: F([...spring(90, 0.5, '150g'), ...spring(220, 1, '300g'), lb(90, 7, 'のび0.5cm', 10, C.red, 'middle', true), lb(220, 7, 'のび1cm', 10, C.red, 'middle', true)], [eb(152, '150 ÷ 300 ＝ 0.5cm', C.green, FILL.green, 16, 30), tx(206, '問1 0.5cm', 14, C.green, true)]),
  },
  {
    note: '問2：5cmのばすには？❓5cmは1cmの何倍？→5倍です。のびが5倍なら、おもりも5倍の重さが必要なので、300×5＝1500gです。',
    add: F([...spring(90, 1, '300g'), ...spring(220, 5, '1500g'), lb(90, 7, 'のび1cm', 10, C.red, 'middle', true), lb(220, 7, 'のび5cm', 10, C.red, 'middle', true), ar(150, 70, 180, 70, C.purple), lb(165, 60, '5倍', 11, C.purple, 'middle', true)], [eb(152, '300 × 5 ＝ 1500g', C.green, FILL.green, 16, 30), tx(206, '問2 1500g', 14, C.green, true)]),
  },
  {
    note: '問3：自然長（おもりなしの長さ）が10cmのばねに200gをつるすと、全体の長さは？❓まず、のびはいくつ？→200÷300＝0.666…cm。小数第3位を四捨五入して、約0.67cmです。',
    add: F([lb(30, 24, '300gで 1cm のびる → 1cmぶん', 12, C.gray, 'start', true), bx(30, 34, 120, 28, '1cm ＝ 300g', C.blue, FILL.blue, 12), lb(30, 82, '200gは 300gの 2/3 → のびも 2/3', 12, C.gray, 'start', true), bx(30, 92, 80, 28, '200g ＝ ？cm', C.purple, FILL.purple, 12)], [eb(152, '200 ÷ 300 ＝ 0.666… ≒ 0.67cm', C.purple, FILL.purple, 15, 30)]),
  },
  {
    note: '❓全体の長さは、のびだけ？→ちがいます。全体の長さは「自然長＋のび」です。おもりなしでもすでに10cmあるので、10＋0.67＝10.67cmです。',
    add: F([bx(20, 40, 200, 34, '自然長 10cm', C.gray, FILL.gray, 14), bx(220, 40, 14, 34, '', C.red, FILL.red), lb(227, 92, 'のび 0.67', 11, C.red, 'middle', true)], [eb(120, '10 ＋ 0.67 ＝ 10.67cm', C.green, FILL.green, 16, 30), tx(174, '問3 10.67cm（約10.7cm）', 14, C.green, true), tx(204, 'のびだけを答えない', 12, C.red)]),
  },
  {
    note: '確かめ（検算）をします。問2は、1500÷300＝5cmとなり、のばしたい5cmにもどります。問1は0.5cm×2＝1cm、つまり300gのときの1cmにもどります。',
    add: F([], [eb(20, '問2 1500 ÷ 300 ＝ 5cm ○', C.green, FILL.green, 15, 30), eb(62, '問1 0.5 × 2 ＝ 1cm（300g）○', C.green, FILL.green, 15, 30), tx(126, '答え 問1 0.5cm　問2 1500g　問3 10.67cm', 13, C.green, true)]),
  },
], 'ばねののびは、おもりの重さに比例する');

// ── 電気回路（otani_rika_r03 / tokyo_meidai_rika_01・02 / tokyo_chuo_max_03 / nandai_rika_02）──
// 電池は左がわ。電池の数に応じて箱をならべ、上の線（y=40）と下の線（y=110）でつなぐ
const battLeft = (n: number): E[] => {
  if (n === 1) return [W(50, 40, 50, 62), batt(30, 62, 40, 26), W(50, 88, 50, 110)];
  if (n === 2) return [W(50, 40, 50, 52), batt(30, 52, 40, 24), W(50, 76, 50, 80), batt(30, 80, 40, 24), W(50, 104, 50, 110)];
  return [W(50, 40, 50, 56), bx(22, 56, 56, 34, '電池\n3個', C.main, FILL.warm, 11), W(50, 90, 50, 110)];
};
const branch = (x: number, y0: number, y1: number, mid: E, h: number): E[] => [W(x, y0, x, y0 + (y1 - y0) / 2 - h / 2), mid, W(x, y0 + (y1 - y0) / 2 + h / 2, x, y1)];
const dot = (x: number, y: number): E => ci(x, y, 3, undefined, C.ink, C.ink);
// 豆電球1個のわ
const loop1 = (n: number): E[] => [...battLeft(n), W(50, 40, 270, 40), W(270, 40, 270, 61), bulb(270, 75), W(270, 89, 270, 110), W(50, 110, 270, 110)];
// 豆電球2個を並列
const loopPar2 = (): E[] => [...battLeft(1), W(50, 40, 250, 40), W(50, 110, 250, 110), ...branch(190, 40, 110, bulb(190, 75), 28), ...branch(250, 40, 110, bulb(250, 75), 28), dot(190, 40), dot(190, 110)];
const cur = (x1: number, y1: number, x2: number, y2: number, t: string, tx_: number, ty: number, color: string = C.blue): E[] => [ar(x1, y1, x2, y2, color), lb(tx_, ty, t, 11, color, 'middle', true)];

const otaniR03 = show([
  {
    note: 'まず基本です。電池1個と豆電球1個のつなぎ方のとき、流れる電流（でんりゅう）を①、豆電球1個分の「流れにくさ（抵抗）」を1とします。❓電池を直列にしたり、豆電球を並列にすると、何が変わるでしょう。',
    add: F([...loop1(1), ...cur(110, 40, 170, 40, '電流①', 140, 28)], [tx(160, '電流 ＝ 電池の数 ÷ 抵抗 ＝ 1 ÷ 1 ＝ ①', 14, C.blue, true)]),
  },
  {
    note: '問1：電池を直列に2個つなぎます。❓なぜ電流がふえるの？→電池は電気をおし出す力です。直列2個なら、おす力が2個ぶんに合わさります。豆電球1個の抵抗は1のままなので、電流は 2÷1＝② で2倍です。',
    add: F([...loop1(2), ...cur(110, 40, 170, 40, '電流②', 140, 28, C.red)], [eb(150, '電流 ＝ 2 ÷ 1 ＝ ②（2倍）', C.red, FILL.red, 15, 30), tx(204, '電池1個のときより おす力が2倍', 12, C.gray)]),
  },
  {
    note: '❓では、明るさはどうなる？→明るさは「電流×電流」で決まります。電流が2倍なので、2×2＝4倍。電池1個のときより明るくなります。',
    add: F([...loop1(2), bulb(270, 75, '明'), lb(244, 78, '4倍', 11, C.red, 'end', true)], [tx(150, '明るさ ∝ 電流 × 電流', 13, C.gray, true), eb(166, '2 × 2 ＝ 4倍 → 問1 明るくなる', C.red, FILL.red, 14, 30)]),
  },
  {
    note: '問2：電池1個のまま、豆電球を並列に2個つなぎます。❓各豆電球にはどれだけ流れる？→電池1個のおす力は、どちらの枝にもそのままかかります。だから1本ずつに①が流れ、明るさは1個のときと同じです。',
    add: F([...loopPar2(), ...cur(130, 40, 170, 40, '①+①', 150, 28, C.purple), lb(190, 100, '①', 11, C.purple, 'middle', true), lb(250, 100, '①', 11, C.purple, 'middle', true)], [tx(158, '各枝 ＝ 1 ÷ 1 ＝ ①', 14, C.blue, true), tx(188, '1個ずつの明るさは変わらない', 12, C.gray)]),
  },
  {
    note: '❓では、なぜ電池は早く使い切るの？→電池から出ていく電流は、2本の枝の合計で ①＋①＝②。豆電球1個のときの2倍の電気を出し続けるので、電池は約半分の時間でなくなります。',
    add: F([...loopPar2(), ...cur(90, 40, 140, 40, '②', 115, 28, C.red)], [eb(150, '電池から出る電流 ①＋① ＝ ②', C.red, FILL.red, 14, 30), tx(204, '問2 早く使い切る', 14, C.red, true)]),
  },
  {
    note: '問3：抵抗が大きくなると、電流はどうなるでしょう。❓電流＝電池の数÷抵抗でした。電池1個で、抵抗が1なら①、2なら 1÷2＝1/2、4なら 1÷4＝1/4。わる数が大きいほど答えは小さくなります。',
    add: F([bx(30, 30, 76, 44, '抵抗1\n電流①', C.blue, FILL.blue, 13), bx(122, 30, 76, 44, '抵抗2\n電流1/2', C.purple, FILL.purple, 13), bx(214, 30, 76, 44, '抵抗4\n電流1/4', C.red, FILL.red, 13), ar(106, 52, 122, 52, C.gray), ar(198, 52, 214, 52, C.gray), lb(160, 98, '抵抗が大きい → 電流は小さい', 13, C.gray, 'middle', true)], [eb(148, '電流 ＝ 電池の数 ÷ 抵抗', C.blue, FILL.blue, 15, 30), tx(202, '問3 電流は小さくなる', 14, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。問1：電流2倍→明るさ2×2＝4倍。問2：並列1個ずつの明るさは1×1＝1で変わらず、電池だけが2倍の電流を出す。問3：抵抗が2倍になると電流は半分になり、式どおり。',
    add: F([], [eb(20, '問1 電流②　明るさ 2×2＝4倍', C.red, FILL.red, 14, 30), eb(62, '問2 各①　電池からは ②', C.purple, FILL.purple, 14, 30), eb(104, '問3 抵抗2倍 → 電流 1/2', C.blue, FILL.blue, 14, 30), tx(166, '答え 明るくなる・早く使い切る・小さくなる', 12, C.green, true)]),
  },
], '電流＝電池の数÷抵抗。並列は枝ごとに①、電池からは合計が出る');

// ── 直列（抵抗3と6）──
const loopSeries = (): E[] => [...battLeft(3), W(50, 40, 100, 40), res(100, 28, 60, 24, '抵抗3'), W(160, 40, 190, 40), res(190, 28, 60, 24, '抵抗6'), W(250, 40, 270, 40), W(270, 40, 270, 110), W(50, 110, 270, 110)];
const meidaiR01 = show([
  {
    note: '電池3個を直列につなぎ、抵抗3の電熱線と抵抗6の電熱線も直列につなぎます。電池1個・豆電球1個の電流を①、豆電球1個分の抵抗を1とします。❓全体の抵抗、電流、発熱の比はどうなるでしょう。',
    add: F(loopSeries(), [tx(160, '全体の抵抗は？　電流は？　発熱の比は？', 13, C.blue, true)]),
  },
  {
    note: '❓直列の全体の抵抗はなぜたし算？→電気の通り道が1本なので、電気は抵抗3も抵抗6も、どちらも通りぬけなければなりません。通りにくさが2つ分かさなるので、3＋6＝9です。',
    add: F([bx(40, 30, 60, 34, '3', C.purple, FILL.purple, 14), bx(100, 30, 120, 34, '6', C.purple, FILL.purple, 14), lb(130, 84, '合わせて 9', 13, C.blue, 'middle', true)], [eb(150, '3 ＋ 6 ＝ 9（全体の抵抗）', C.blue, FILL.blue, 15, 30)]),
  },
  {
    note: '❓電流はいくつ？→電流＝電池の数÷抵抗。電池3個、全体の抵抗9なので、3÷9＝1/3です。',
    add: F([...loopSeries(), ...cur(120, 124, 200, 124, '電流 1/3', 160, 136)], [eb(150, '3 ÷ 9 ＝ 1/3', C.green, FILL.green, 16, 30)]),
  },
  {
    note: '❓なぜ直列だと、どこでも電流は同じなの？→道が1本で枝分かれしないからです。1本の水道管を流れる水が、どこでも同じ量なのと同じで、抵抗3を通る電流も抵抗6を通る電流も、同じ1/3です。',
    add: F([...loopSeries(), lb(75, 20, '1/3', 11, C.red, 'middle', true), lb(175, 20, '1/3', 11, C.red, 'middle', true), lb(262, 82, '1/3', 11, C.red, 'end', true), lb(160, 128, '1/3', 11, C.red, 'middle', true)], [tx(160, 'どこも同じ 1/3', 15, C.red, true), tx(190, '直列は 電流が分かれない', 12, C.gray)]),
  },
  {
    note: '❓発熱はどう決まる？→発熱は「電流×電流×抵抗」で決まります。抵抗3は 1/3×1/3×3＝1/3、抵抗6は 1/3×1/3×6＝2/3です。',
    add: F([bx(30, 26, 120, 50, '抵抗3\n1/3×1/3×3＝1/3', C.purple, FILL.purple, 12), bx(170, 26, 120, 50, '抵抗6\n1/3×1/3×6＝2/3', C.purple, FILL.purple, 12)], [tx(120, '発熱 ＝ 電流 × 電流 × 抵抗', 13, C.gray, true), eb(148, '1/3 と 2/3', C.green, FILL.green, 16, 30)]),
  },
  {
    note: '❓発熱の比は？→電流×電流が2つの電熱線で同じなので、比は抵抗の比そのまま、3:6＝1:2です。1/3と2/3の比を見ても 1:2で同じです。',
    add: F([bar(30, 34, 100, '抵抗3 の発熱 1/3', C.purple, FILL.purple, 30, 11), bar(30, 80, 200, '抵抗6 の発熱 2/3', C.purple, FILL.purple, 30, 11), lb(268, 62, '1 : 2', 18, C.green, 'middle', true)], [tx(158, '電流が同じ → 発熱の比 ＝ 抵抗の比', 13, C.blue, true), eb(176, '3 : 6 ＝ 1 : 2', C.green, FILL.green, 15, 30)]),
  },
  {
    note: '確かめ（検算）をします。2つの発熱をたすと 1/3＋2/3＝1。全体の抵抗9を使って 1/3×1/3×9＝1 ともなり、一致します。',
    add: F([], [eb(20, '1/3 ＋ 2/3 ＝ 1', C.green, FILL.green, 15, 30), eb(62, '1/3 × 1/3 × 9 ＝ 1 ○', C.green, FILL.green, 15, 30), tx(126, '答え 全体の抵抗 9　電流 1/3　発熱の比 1:2', 13, C.green, true)]),
  },
], '直列：抵抗はたす、電流は同じ、発熱の比は抵抗の比');

// ── 並列（抵抗3と6・電池2個）──
const loopPar36 = (): E[] => [...battLeft(2), W(50, 40, 240, 40), W(50, 110, 240, 110), ...branch(170, 40, 110, res(150, 58, 40, 34, '抵抗3'), 34), ...branch(240, 40, 110, res(220, 58, 40, 34, '抵抗6'), 34), dot(170, 40), dot(170, 110)];
const meidaiR02 = show([
  {
    note: '電池2個を直列につなぎ、抵抗3と抵抗6の電熱線を並列につなぎます。電池1個・豆電球1個の電流を①、豆電球1個分の抵抗を1とします。❓全体の抵抗、各電熱線の電流と発熱を求めます。',
    add: F(loopPar36(), [tx(160, '全体の抵抗は？　各枝の電流と発熱は？', 13, C.blue, true)]),
  },
  {
    note: '❓並列の各枝には、どれだけの「おす力」がかかる？→どちらの枝も電池に直接つながっているので、電池2個ぶんのおす力がそのままかかります。だから、枝ごとに「電池の数÷その枝の抵抗」で電流が出せます。',
    add: F([...loopPar36(), lb(115, 28, '電池2個ぶん', 11, C.red, 'middle', true)], [tx(164, '枝の電流 ＝ 電池の数 ÷ その枝の抵抗', 13, C.blue, true)]),
  },
  {
    note: '抵抗3の枝：電流は 2÷3＝2/3。発熱は「電流×電流×抵抗」で 2/3×2/3×3＝4/3です。',
    add: F([...loopPar36(), lb(178, 104, '2/3', 11, C.red, 'start', true)], [eb(152, '2 ÷ 3 ＝ 2/3（電流）', C.blue, FILL.blue, 14, 28), eb(186, '2/3×2/3×3 ＝ 4/3（発熱）', C.green, FILL.green, 14, 28)]),
  },
  {
    note: '抵抗6の枝：電流は 2÷6＝1/3。発熱は 1/3×1/3×6＝2/3です。',
    add: F([...loopPar36(), lb(178, 104, '2/3', 11, C.red, 'start', true), lb(248, 104, '1/3', 11, C.red, 'start', true)], [eb(152, '2 ÷ 6 ＝ 1/3（電流）', C.blue, FILL.blue, 14, 28), eb(186, '1/3×1/3×6 ＝ 2/3（発熱）', C.green, FILL.green, 14, 28)]),
  },
  {
    note: '❓全体の電流は？→2つの枝が電池のところで合流するので、電流はたし算です。2/3＋1/3＝1、つまり①です。',
    add: F([...loopPar36(), ...cur(70, 40, 120, 40, '全体 ①', 95, 28, C.red)], [eb(152, '2/3 ＋ 1/3 ＝ 1（＝①）', C.red, FILL.red, 15, 30)]),
  },
  {
    note: '❓全体の抵抗は？→電流＝電池の数÷抵抗の式を逆にして、抵抗＝電池の数÷電流。2÷1＝2です。❓3と6をたして9ではだめ？→並列は道がふえて流れやすくなるので、抵抗は小さくなります。',
    add: F([bar(30, 26, 75, '抵抗3', C.purple, FILL.purple, 26, 12), bar(30, 60, 150, '抵抗6', C.purple, FILL.purple, 26, 12), bar(30, 100, 50, '全体 2', C.green, FILL.green, 26, 12), lb(92, 113, '3より6より小さい', 11, C.green, 'start', true)], [eb(148, '抵抗 ＝ 2 ÷ 1 ＝ 2', C.green, FILL.green, 16, 30), tx(202, '並列は 3＋6＝9 にならない', 12, C.red)]),
  },
  {
    note: '確かめ（検算）をします。全体の抵抗2は、3と6のどちらより小さくなっています。電流は2/3と1/3で、比は2:1。抵抗の比3:6＝1:2と逆になっています。',
    add: F([], [eb(20, '全体の抵抗 2 ＜ 3 ＜ 6 ○', C.green, FILL.green, 15, 30), eb(62, '電流比 2 : 1 ←→ 抵抗比 3 : 6', C.green, FILL.green, 14, 30), tx(124, '答え 全体の抵抗2', 13, C.green, true), tx(150, '抵抗3：電流2/3・発熱4/3', 12, C.green, true), tx(172, '抵抗6：電流1/3・発熱2/3', 12, C.green, true)]),
  },
], '並列：枝ごとに電池の数÷抵抗、電流はたして、抵抗にもどす');

// ── tokyo_chuo_max_03 ──
const chuoMax03 = show([
  {
    note: '電池2個を直列にして、抵抗3のR1と抵抗6のR2を並列につなぎます。電池1個・豆電球1個の電流を①、豆電球1個分の抵抗を1とします。❓並列回路の全体の抵抗と電流は？',
    add: F(loopPar36(), [tx(160, '全体の抵抗は？　全体の電流は？　電流の比は？', 12, C.blue, true)]),
  },
  {
    note: '❓並列では、どちらの枝にも同じ「おす力」がかかるのはなぜ？→両方の枝が、電池の＋と−に直接つながっているからです。どちらにも電池2個ぶんの力がかかります。',
    add: F([...loopPar36(), lb(115, 28, '電池2個ぶん', 11, C.red, 'middle', true)], [tx(164, 'どの枝にも 電池2個ぶん', 14, C.red, true)]),
  },
  {
    note: 'R1（抵抗3）に流れる電流は、電池の数÷抵抗＝2÷3＝2/3です。',
    add: F([...loopPar36(), lb(178, 104, '2/3', 11, C.red, 'start', true)], [eb(156, 'R1 ＝ 2 ÷ 3 ＝ 2/3', C.blue, FILL.blue, 16, 30)]),
  },
  {
    note: 'R2（抵抗6）に流れる電流は、2÷6＝1/3です。',
    add: F([...loopPar36(), lb(178, 104, '2/3', 11, C.red, 'start', true), lb(248, 104, '1/3', 11, C.red, 'start', true)], [eb(156, 'R2 ＝ 2 ÷ 6 ＝ 1/3', C.blue, FILL.blue, 16, 30)]),
  },
  {
    note: '問3：❓なぜ電流の比は抵抗の比と逆になるの？→抵抗は「流れにくさ」です。R2はR1の2倍流れにくいので、同じおす力でも流れる電流は半分になります。電流比 2/3:1/3＝2:1、抵抗比 3:6＝1:2で、逆の比です。',
    add: F([lb(90, 20, '抵抗', 12, C.gray, 'middle', true), lb(240, 20, '電流', 12, C.gray, 'middle', true), bar(20, 30, 70, 'R1  3', C.purple, FILL.purple, 28, 12), bar(20, 66, 140, 'R2  6', C.purple, FILL.purple, 28, 12), bar(190, 30, 100, 'R1  2/3', C.green, FILL.green, 28, 12), bar(190, 66, 50, '1/3', C.green, FILL.green, 28, 12), lb(160, 116, '抵抗が2倍 → 電流は半分', 13, C.red, 'middle', true)], [eb(148, '電流比 2 : 1　抵抗比 1 : 2', C.green, FILL.green, 15, 30)]),
  },
  {
    note: '❓全体の電流は？→電池のところで2本の枝が合流するので、2/3＋1/3＝1。つまり①です。',
    add: F([...loopPar36(), ...cur(70, 40, 120, 40, '全体 ①', 95, 28, C.red)], [eb(152, '2/3 ＋ 1/3 ＝ 1（＝①）', C.red, FILL.red, 15, 30)]),
  },
  {
    note: '❓全体の抵抗は？→抵抗＝電池の数÷電流＝2÷1＝2です。この2は、3と6のどちらより小さく、並列で道がふえて流れやすくなったことと合っています。',
    add: F([bar(30, 34, 75, '抵抗3', C.purple, FILL.purple, 26, 12), bar(30, 70, 150, '抵抗6', C.purple, FILL.purple, 26, 12), bar(30, 106, 50, '全体 2', C.green, FILL.green, 26, 12)], [eb(150, '2 ÷ 1 ＝ 2', C.green, FILL.green, 16, 30), tx(204, '答え 問1 2　問2 ①　問3 2/3と1/3', 13, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。全体の電流①に、抵抗2をかけると電池の数2にもどります（電流×抵抗＝電池の数）。R1は 2/3×3＝2、R2は 1/3×6＝2で、どちらも電池2個ぶんです。',
    add: F([], [eb(20, '全体 1 × 2 ＝ 2（電池の数）○', C.green, FILL.green, 14, 30), eb(62, 'R1 2/3 × 3 ＝ 2 ○', C.green, FILL.green, 14, 30), eb(104, 'R2 1/3 × 6 ＝ 2 ○', C.green, FILL.green, 14, 30)]),
  },
], '並列は枝ごとに電池の数÷抵抗、電流は抵抗に反比例する');

// ── nandai_rika_02（豆電球3個のつなぎ方）──
const b3 = (n: number, y: number): E => bulb(n, y);
const cSer3 = (): E[] => [...battLeft(1), W(50, 40, 96, 40), b3(110, 40), W(124, 40, 146, 40), b3(160, 40), W(174, 40, 196, 40), b3(210, 40), W(224, 40, 270, 40), W(270, 40, 270, 110), W(50, 110, 270, 110)];
const cPar3 = (): E[] => [...battLeft(1), W(50, 40, 250, 40), W(50, 110, 250, 110), ...[150, 200, 250].flatMap((x) => [...branch(x, 40, 110, b3(x, 75), 28), dot(x, 40), dot(x, 110)])];
const cMix1 = (): E[] => [...battLeft(1), W(50, 40, 86, 40), b3(100, 40), W(114, 40, 250, 40), W(50, 110, 250, 110), ...[190, 250].flatMap((x) => branch(x, 40, 110, b3(x, 75), 28)), dot(190, 40), dot(190, 110)];
const cMix2 = (): E[] => [...battLeft(1), W(50, 40, 240, 40), W(50, 110, 240, 110), W(170, 40, 170, 44), b3(170, 58), W(170, 72, 170, 78), b3(170, 92), W(170, 106, 170, 110), ...branch(240, 40, 110, b3(240, 75), 28), dot(170, 40), dot(170, 110)];
const nandaiR02 = show([
  {
    note: '同じ豆電球3個をすべて使い、直列と並列をいろいろ組み合わせます。全体の抵抗（豆電球1個分を1）は何種類あるでしょう。電池は1個で、そのときの電流を①とします。',
    add: F([...loop1(1), ...cur(110, 40, 170, 40, '電流①', 140, 28)], [tx(160, '3個ぜんぶ使う → つなぎ方をもれなく数える', 12, C.blue, true), tx(188, '1個だけのとき（抵抗1）は、数えない', 12, C.gray)]),
  },
  {
    note: '① 3個ぜんぶ直列。❓なぜたし算？→電気が豆電球を1つずつ順に通りぬけるので、通りにくさがかさなります。1＋1＋1＝3です。',
    add: F([...cSer3()], [eb(152, '① 直列3個 → 抵抗 1＋1＋1 ＝ 3', C.blue, FILL.blue, 14, 30)]),
  },
  {
    note: '② 3個ぜんぶ並列。電池1個の力が3本の枝のどれにもかかるので、枝ごとに①ずつ流れ、合計は③です。抵抗＝電池の数÷電流＝1÷3＝1/3です。',
    add: F([...cPar3(), lb(150, 102, '①', 11, C.red, 'middle', true), lb(200, 102, '①', 11, C.red, 'middle', true), lb(250, 102, '①', 11, C.red, 'middle', true)], [eb(148, '② 並列3個 → 電流 ③ → 抵抗 1÷3 ＝ 1/3', C.purple, FILL.purple, 13, 30), tx(202, '並列は 流れやすくなる', 12, C.gray)]),
  },
  {
    note: '③ 2個を並列にしたものに、1個を直列。❓並列2個の抵抗は？→電池1個で①ずつ2本に流れて合計②なので、1÷2＝1/2です。それに直列の1個をたして、1/2＋1＝3/2です。',
    add: F([...cMix1(), lb(190, 102, '①', 11, C.red, 'middle', true), lb(250, 102, '①', 11, C.red, 'middle', true)], [eb(148, '③ 並列部分 1/2 ＋ 直列の1 ＝ 3/2', C.green, FILL.green, 14, 30), tx(202, '並列2個の抵抗は 1÷2 ＝ 1/2', 12, C.gray)]),
  },
  {
    note: '④ 2個を直列にしたものに、1個を並列。❓どう計算する？→直列の枝は抵抗2なので電流は 1÷2＝1/2。もう1本の枝は①。合計は 1/2＋1＝3/2。抵抗＝電池の数÷電流＝1÷3/2＝2/3です。',
    add: F([...cMix2(), lb(165, 126, '1/2', 11, C.red, 'end', true), lb(240, 104, '①', 11, C.red, 'end', true)], [eb(148, '④ 電流 1/2＋1 ＝ 3/2 → 抵抗 2/3', C.green, FILL.green, 14, 30), tx(202, '「2＋1＝3」とたさない（並列は電流をたす）', 11, C.red)]),
  },
  {
    note: '❓もれはないか？→3個の使い方は、ぜんぶ直列・ぜんぶ並列・2個をまとめて1個とつなぐ、の3つの形で、2個まとめるほうは「並列2個＋直列1個」と「直列2個＋並列1個」の2通り。合わせて4種類です。',
    add: F([], [...flow(['ぜんぶ\n直列', 'ぜんぶ\n並列', '並列2個\n＋直列1', '直列2個\n＋並列1'], 20, { h: 50, color: C.blue, fill: FILL.blue, size: 11, gap: 8 }).flat(), eb(100, '抵抗 3　　1/3　　3/2　　2/3', C.green, FILL.green, 14, 30), tx(156, '4種類', 16, C.green, true)]),
  },
  {
    note: '大きさをくらべると 1/3 ＜ 2/3 ＜ 3/2 ＜ 3。並列が多いほど、抵抗は小さくなっています。③と④は、豆電球1個分（1）をはさんで大小が分かれるので、足し算だけで考えたらまちがいに気づけます。答えは 1/3、2/3、3/2、3 の4種類です。',
    add: F([ln(30, 60, 290, 60, C.gray, false, 2), ...[[1 / 3, '1/3'], [2 / 3, '2/3'], [1, '1（1個）'], [1.5, '3/2'], [3, '3']].flatMap(([v, t], idx) => [ci(40 + idx * 60, 60, 5, undefined, v === 1 ? C.gray : C.red, v === 1 ? FILL.gray : FILL.red), lb(40 + idx * 60, 82, t as string, 11, v === 1 ? C.gray : C.red, 'middle', true)])], [tx(150, '小さい ←　　　　　　　→ 大きい', 12, C.gray), eb(166, '答え 4種類（1/3、2/3、3/2、3）', C.green, FILL.green, 15, 30)]),
  },
], '直列は抵抗をたし、並列は電流をたして抵抗にもどす');

// ── tokyo_aoyama_rika_01（月の満ち欠け）──
const sunEarth = (): E[] => [
  ci(160, 75, 50, undefined, C.gray, CLEAR),
  ci(36, 75, 24, '太陽', C.main, FILL.yellow, 11),
  ar(66, 55, 96, 55, C.main), ar(66, 75, 96, 75, C.main), ar(66, 95, 96, 95, C.main),
  ci(160, 75, 13, '地球', C.blue, FILL.blue, 9),
];
const moonAt = (x: number, y: number, lit: boolean): E[] => [ci(x, y, 10, undefined, C.gray, lit ? FILL.gray : FILL.gray), ...(lit ? [sc(x, y, 10, 90, 270, C.main, FILL.yellow)] : [])];
const aoyamaR01 = show([
  {
    note: '太陽の光は、月の「太陽に向いた半分」だけをてらします。図は、月が地球から見て太陽の反対がわにあるときです。❓このとき、地球から月はどんな形に見えるでしょう。',
    add: F([...sunEarth(), ...moonAt(210, 75, true), lb(210, 100, '月', 11, C.gray, 'middle', true), lb(66, 40, '太陽の光', 10, C.main, 'middle', true)], [tx(166, '太陽 → 地球 → 月 の順', 14, C.blue, true)]),
  },
  {
    note: '❓なぜ満月に見えるの？→月は太陽に向いた左半分が光っています。地球は太陽と反対がわ（左）から月を見るので、光っている面がまるごと見えます。これが円形に光る満月です。',
    add: F([...sunEarth(), ...moonAt(210, 75, true), ar(178, 75, 196, 75, C.blue), lb(187, 62, '見る向き', 9, C.blue, 'middle', true)], [eb(150, '光る半分が、地球からまるごと見える', C.green, FILL.green, 14, 30), tx(204, '問(1) 満月', 14, C.green, true)]),
  },
  {
    note: '(2)❓新月から満月までは何日？→新月は月が太陽と地球のあいだ（左）、満月は反対がわ（右）です。月が地球のまわりを半周すると、新月から満月になります。満ち欠けの周期（29.5日）の半分なので、29.5÷2＝14.75で約15日です。',
    add: F([...sunEarth(), ...moonAt(110, 75, true), ...moonAt(210, 75, true), lb(110, 100, '新月', 11, C.gray, 'middle', true), lb(210, 100, '満月', 11, C.gray, 'middle', true), ar(130, 38, 190, 38, C.purple), lb(160, 26, '半周（半分の日数）', 10, C.purple, 'middle', true)], [eb(148, '29.5 ÷ 2 ＝ 14.75 ≒ 約15日', C.purple, FILL.purple, 15, 30), tx(202, '周期（朔望月）は約29.5日', 13, C.gray)]),
  },
  {
    note: '❓月が地球を1周する日数は27.3日なのに、満ち欠けの周期はなぜ29.5日なの？→月が1周するあいだに、地球も太陽のまわりを進みます。そのため、太陽・地球・月が同じならびにもどるには、さらに約2.2日かかります。',
    add: F([bx(27, 40, 246, 34, '月が地球を1周 ＝ 27.3日', C.blue, FILL.blue, 13), bx(273, 40, 20, 34, '', C.red, FILL.red), lb(283, 92, '＋約2.2日', 11, C.red, 'middle', true), lb(160, 26, '満ち欠けがもとにもどるまで ＝ 29.5日', 12, C.ink, 'middle', true)], [eb(148, '27.3 ＋ 2.2 ＝ 29.5日', C.green, FILL.green, 15, 30), tx(202, '公転（27.3日）と満ち欠け（29.5日）は別', 12, C.red, true)]),
  },
  {
    note: '(3)月食のしくみ。太陽・地球・月の順に一直線にならび、月が地球のかげ（灰色の部分）に入ります。月に太陽の光が当たらなくなるので、月が欠けて見えます。満月のときに起こります。',
    add: F([ci(36, 75, 24, '太陽', C.main, FILL.yellow, 11), ar(66, 75, 96, 75, C.main), pg([[173, 63], [310, 56], [310, 94], [173, 87]], C.gray, 'rgba(0,0,0,0.12)'), ci(160, 75, 13, '地球', C.blue, FILL.blue, 9), ci(250, 75, 10, undefined, C.gray, FILL.gray), lb(250, 104, '月', 11, C.gray, 'middle', true), lb(240, 48, '地球のかげ', 10, C.gray, 'middle', true)], [eb(148, '太陽 → 地球 → 月 （満月のとき）', C.blue, FILL.blue, 14, 30), tx(202, '月が地球のかげに入る', 13, C.gray)]),
  },
  {
    note: '日食のしくみ。太陽・月・地球の順にならび、月が太陽の光をさえぎります。月のかげが地球に落ちた場所では、太陽が欠けて見えます。新月のときに起こります。',
    add: F([ci(36, 75, 24, '太陽', C.main, FILL.yellow, 11), ar(66, 75, 96, 75, C.main), ci(120, 75, 9, undefined, C.gray, FILL.gray), lb(120, 54, '月', 11, C.gray, 'middle', true), pg([[120, 68], [147, 71], [147, 79], [120, 82]], C.gray, 'rgba(0,0,0,0.25)'), ci(160, 75, 13, '地球', C.blue, FILL.blue, 9)], [eb(148, '太陽 → 月 → 地球 （新月のとき）', C.red, FILL.red, 14, 30), tx(202, '月が太陽をかくす', 13, C.gray)]),
  },
  {
    note: '❓月食と日食のちがいは？→どちらも太陽・地球・月が一直線にならびますが、ならぶ順番が逆です。月食は「太陽・地球・月」で満月のとき、日食は「太陽・月・地球」で新月のときです。',
    add: F([], [...flow(['太陽', '地球', '月'], 22, { h: 34, color: C.blue, fill: FILL.blue, size: 13, gap: 24 }).flat(), lb(160, 76, '月食（満月のとき）', 12, C.blue, 'middle', true), ...flow(['太陽', '月', '地球'], 92, { h: 34, color: C.red, fill: FILL.red, size: 13, gap: 24 }).flat(), lb(160, 146, '日食（新月のとき）', 12, C.red, 'middle', true), tx(190, '答え 満月／約15日・約29.5日／ならぶ順が逆', 12, C.green, true)]),
  },
], '月の満ち欠けは、太陽・地球・月の位置できまる');

// ── tokyo_hosei_rika_01（電磁石）──
const core = (): E[] => [bx(90, 62, 146, 30, '', C.gray, FILL.gray), lb(163, 77, '鉄しん', 11, C.gray, 'middle', true)];
const coilTurns = (n: number, rev = false): E[] => {
  const x0 = 100;
  const sp = 130 / n;
  return Array.from({ length: n }, (_, i) => (rev ? ln(x0 + i * sp + 10, 54, x0 + i * sp, 100, C.red, false, 2) : ln(x0 + i * sp, 54, x0 + i * sp + 10, 100, C.red, false, 2)));
};
const magnetWires = (battLabel = '電池'): E[] => [bx(14, 68, 48, 24, battLabel, C.main, FILL.warm, battLabel.includes('\n') ? 9 : 11), W(38, 68, 38, 48), W(38, 48, 100, 48), W(100, 48, 100, 54), W(240, 100, 240, 120), W(240, 120, 38, 120), W(38, 120, 38, 92)];
const poles = (nRight: string, nLeft: string): E[] => [lb(250, 77, nRight, 16, nRight === 'N' ? C.red : C.blue, 'middle', true), lb(76, 77, nLeft, 16, nLeft === 'N' ? C.red : C.blue, 'middle', true)];
const hoseiRi01 = show([
  {
    note: '電磁石は、鉄しんにコイル（導線をまいたもの）をまき、電池をつないだものです。N極とS極ができます。❓巻き数、電流の強さ、電池のつなぎ方で、何が変わるでしょう。',
    add: F([...core(), ...coilTurns(6), ...magnetWires(), ...poles('N', 'S'), ar(50, 40, 80, 40, C.blue), lb(66, 30, '電流', 10, C.blue, 'middle', true)], [tx(166, '巻き数・電流・向き と 磁力', 14, C.blue, true)]),
  },
  {
    note: '❓なぜ電流を流すと磁石になるの？→導線に電流が流れると、そのまわりに磁石のはたらき（磁力）が生まれます。導線をコイルにして鉄しんにまくと、1まきぶんの力がぜんぶ重なり、鉄しんが強い磁石になります。',
    add: F([...core(), ...coilTurns(6), ...magnetWires(), ...poles('N', 'S'), lb(163, 112, '1まきぶんの力が 重なる', 11, C.red, 'middle', true)], [eb(150, '電流 ＋ コイル ＋ 鉄しん ＝ 磁石', C.blue, FILL.blue, 14, 30)]),
  },
  {
    note: '問1：巻き数を2倍にします。❓なぜ磁力が強くなるの？→1まきごとに同じ大きさの力が出て、それが重なるので、巻き数が2倍なら重なる力も約2倍です。',
    add: F([...core(), ...coilTurns(12), ...magnetWires(), ...poles('N', 'S'), lb(163, 112, '巻き数 6回 → 12回', 11, C.red, 'middle', true)], [eb(150, '巻き数2倍 → 磁力 約2倍', C.green, FILL.green, 15, 30), tx(204, '問1 約2倍になる', 14, C.green, true)]),
  },
  {
    note: '問2：電流を大きくします。❓なぜ強くなるの？→電流が大きいほど、1まきあたりの力も大きくなるからです。電池を直列でふやすと、電流が大きくなります。',
    add: F([...core(), ...coilTurns(6), bx(14, 56, 48, 22, '電池', C.main, FILL.warm, 11), bx(14, 80, 48, 22, '電池', C.main, FILL.warm, 11), W(38, 56, 38, 48), W(38, 48, 100, 48), W(100, 48, 100, 54), W(240, 100, 240, 120), W(240, 120, 38, 120), W(38, 120, 38, 102), W(38, 78, 38, 80), ...poles('N', 'S'), ar(50, 40, 100, 40, C.red), lb(75, 30, '電流 大', 10, C.red, 'middle', true)], [eb(150, '電流が大きい → 磁力が強い', C.green, FILL.green, 15, 30), tx(204, '問2 強くなる', 14, C.green, true)]),
  },
  {
    note: '問3：N極とS極を入れかえる方法①。電流の向きを逆にします。❓なぜ極が入れかわるの？→コイルの右手の法則です。右手の4本の指をコイルに流れる電流の向きにそろえてにぎると、のばした親指のほうがN極になります。電流が逆になると親指も逆になります。',
    add: F([...core(), ...coilTurns(6), ...magnetWires('電池\n(逆)'), ...poles('S', 'N'), ar(80, 40, 50, 40, C.blue), lb(66, 30, '電流（逆）', 10, C.blue, 'middle', true)], [eb(150, '電流の向きを逆 → N極とS極が入れかわる', C.blue, FILL.blue, 12, 30), tx(204, '①電池のつなぎ方を逆にする', 13, C.green, true)]),
  },
  {
    note: '方法②。コイルを巻く向きを逆にします。電流の向きは同じでも、コイルを回る向きが逆になるので、右手の親指の向きが逆になり、N極とS極が入れかわります。',
    add: F([...core(), ...coilTurns(6, true), ...magnetWires(), ...poles('S', 'N'), ar(50, 40, 80, 40, C.blue), lb(66, 30, '電流', 10, C.blue, 'middle', true)], [eb(150, '巻く向きを逆 → N極とS極が入れかわる', C.blue, FILL.blue, 12, 30), tx(204, '②コイルの巻く向きを逆にする', 13, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。①と②を両方行うと、逆が2回になって、もとのN極・S極にもどります。なお、鉄しんを入れると磁力は強くなりますが、極の向きは変わりません。',
    add: F([...core(), ...coilTurns(6, true), ...magnetWires('電池\n(逆)'), ...poles('N', 'S'), ar(80, 40, 50, 40, C.blue)], [eb(148, '①と②を両方 → もとにもどる ○', C.green, FILL.green, 14, 30), tx(200, '鉄しんは「強くする」だけで、極は変えない', 12, C.gray), tx(222, '答え 約2倍／強くなる／電流の向きか巻く向きを逆', 11, C.green, true)]),
  },
], '電磁石の磁力は巻き数と電流に比例、向きは電流と巻く向きで決まる');

// ── tokyo_gakushuin_rika_01（天気）──
const ring = (x: number, y: number, r: number, color: string = C.gray): E => ci(x, y, r, undefined, color, CLEAR);
const cloud = (x: number, y: number): E[] => [ci(x - 18, y + 4, 13, undefined, C.gray, FILL.gray), ci(x, y - 2, 16, undefined, C.gray, FILL.gray), ci(x + 20, y + 4, 12, undefined, C.gray, FILL.gray)];
const weatherMap = (narrow: boolean): E[] => [
  ...(narrow ? [ring(90, 76, 12, C.red), ring(90, 76, 20, C.red), ring(90, 76, 28, C.red)] : [ring(90, 76, 16, C.red), ring(90, 76, 34, C.red), ring(90, 76, 52, C.red)]),
  ...[ring(230, 76, 16, C.blue), ring(230, 76, 34, C.blue), ring(230, 76, 52, C.blue)],
  lb(90, 79, '低', 14, C.red, 'middle', true), lb(230, 79, '高', 14, C.blue, 'middle', true),
];
const gakushuinR01 = show([
  {
    note: '天気図には、高気圧（高）と低気圧（低）があります。日本付近の天気のしくみを考えます。❓まず、低気圧が近づくと天気はどうなるでしょう。',
    add: F([ci(90, 76, 18, '低', C.red, FILL.red, 14), ci(230, 76, 18, '高', C.blue, FILL.blue, 14), lb(90, 110, '低気圧', 11, C.red, 'middle', true), lb(230, 110, '高気圧', 11, C.blue, 'middle', true)], [tx(166, '天気図の 高 と 低', 14, C.blue, true)]),
  },
  {
    note: '❓低気圧では、なぜ天気が悪くなるの？→まわりから空気が中心に集まり、行き場がなくなって上へのぼります（上昇気流）。のぼった空気は上空の寒さで冷やされ、水蒸気が水てきや氷のつぶになって雲ができるからです。',
    add: F([W(20, 118, 300, 118, C.ink), ar(40, 110, 136, 110, C.blue), ar(280, 110, 184, 110, C.blue), ar(160, 106, 160, 60, C.red), ...cloud(160, 42), lb(160, 132, '低気圧の中心', 11, C.red, 'middle', true), lb(222, 66, '上昇気流', 11, C.red, 'start', true)], [eb(150, '空気が集まる → 上へ → 冷えて雲', C.red, FILL.red, 14, 30), tx(204, '問1 天気が悪くなる（雨やくもり）', 13, C.green, true)]),
  },
  {
    note: '❓反対の高気圧は？→高気圧では、空気が上から下へおりてきて（下降気流）、地面から外へ広がります。雲ができにくいので、ふつう晴れます。',
    add: F([W(20, 118, 300, 118, C.ink), ar(160, 50, 160, 104, C.blue), ar(150, 112, 70, 112, C.blue), ar(170, 112, 250, 112, C.blue), lb(160, 36, '下降気流', 11, C.blue, 'middle', true), lb(160, 132, '高気圧の中心', 11, C.blue, 'middle', true)], [eb(150, '空気がおりる → 雲ができにくい → 晴れ', C.blue, FILL.blue, 13, 30)]),
  },
  {
    note: '問2：❓日本の天気は、なぜ西から東へ変わるの？→日本の上空には、西から東へ吹き続ける風（偏西風）があります。低気圧や高気圧などの天気のかたまりが、この風に流されて西から東へ動くからです。',
    add: F([ar(30, 34, 290, 34, C.purple), lb(160, 22, '偏西風（上空を西から東へ）', 12, C.purple, 'middle', true), lb(20, 52, '西', 12, C.gray, 'middle', true), lb(300, 52, '東', 12, C.gray, 'middle', true), ci(70, 88, 16, '低', C.red, FILL.red, 13), ar(92, 88, 136, 88, C.purple, true), ci(160, 88, 16, '低', C.red, FILL.red, 13), ar(182, 88, 226, 88, C.purple, true), ci(250, 88, 16, '低', C.red, FILL.red, 13)], [eb(150, '天気のかたまり → 西から東へ', C.purple, FILL.purple, 15, 30), tx(204, '問2 偏西風', 14, C.green, true)]),
  },
  {
    note: '問3：等圧線とは、気圧が等しい地点を結んだ線です。天気図の中の同心円のような線がそれです。',
    add: F([...weatherMap(false)], [eb(150, '等圧線 ＝ 気圧が等しい地点を結んだ線', C.blue, FILL.blue, 14, 30)]),
  },
  {
    note: '❓間隔がせまいと、なぜ風が強いの？→せまい間隔は、短い距離で気圧が大きく変わっていることです。空気は気圧の高いほうから低いほうへ動くので、気圧の差が急なほど強く動いて、風が強くなります。',
    add: F([...weatherMap(true), ar(130, 76, 112, 76, C.red), ar(124, 60, 108, 54, C.red), ar(124, 92, 108, 98, C.red), lb(90, 138, '間隔せまい → 強い風', 10, C.red, 'middle', true), lb(230, 138, '間隔広い → 弱い風', 10, C.blue, 'middle', true)], [eb(150, '間隔がせまい ＝ 気圧の差が急 ＝ 風が強い', C.red, FILL.red, 12, 30), tx(204, '問3 等圧線の間隔がせまいほど風が強い', 12, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。天気予報で「西日本の雨が、あすは東日本に」と言うことは、偏西風の向き（西→東）と合っています。また、「間隔がせまい＝風が弱い」は逆なので注意します。',
    add: F([], [eb(18, '低気圧：上昇気流 → 雲 → 天気が悪い', C.red, FILL.red, 13, 30), eb(58, '天気は偏西風で 西 → 東 へ', C.purple, FILL.purple, 14, 30), eb(98, '等圧線がせまい → 風が強い', C.blue, FILL.blue, 14, 30), tx(158, '「せまい＝弱い」は逆！', 13, C.red, true)]),
  },
], '低気圧は上昇気流、天気は偏西風で西から東、等圧線がせまいと風が強い');

// ── tokyo_gakushuin_sansu_02（図形の角度）──
const triP = { A: [107, 29], B: [30, 120], C: [140, 120] } as const;
const triangle1 = (): E[] => [pg([[107, 29], [30, 120], [140, 120]], C.main, 'rgba(14,165,233,0.10)'), lb(107, 20, 'A', 12, C.ink, 'middle', true), lb(20, 128, 'B', 12, C.ink, 'middle', true), lb(150, 128, 'C', 12, C.ink, 'middle', true)];
// 平行線 l（上）と m（下）。P は l 上、Q は m 上、B は折れ点
const PP = [200, 30] as const;
const BB = [146, 75] as const;
const QQ = [178, 120] as const;
const lines2 = (): E[] => [
  W(20, 30, 300, 30, C.ink), W(20, 120, 300, 120, C.ink), lb(304, 30, 'l', 12, C.ink, 'start', true), lb(304, 120, 'm', 12, C.ink, 'start', true),
  ln(PP[0], PP[1], BB[0], BB[1], C.red, false, 2.5), ln(BB[0], BB[1], QQ[0], QQ[1], C.red, false, 2.5),
  lb(PP[0] + 8, PP[1] - 8, 'P', 12, C.ink, 'middle', true), lb(BB[0] - 10, BB[1], 'B', 12, C.ink, 'middle', true), lb(QQ[0] + 8, QQ[1] + 10, 'Q', 12, C.ink, 'middle', true),
  lb(150, 22, 'A', 11, C.gray, 'middle', true), lb(130, 132, 'M', 11, C.gray, 'middle', true),
];
const angle40 = (): E => lb(172, 42, '40°', 10, C.blue, 'middle', true);
const angle55 = (): E => lb(152, 108, '55°', 10, C.purple, 'middle', true);
const gakushuinS02 = show([
  {
    note: '問1：三角形の内角の和は何度でしょう。❓3つの角（●）を集めると、どうなるか考えます。',
    add: F([...triangle1(), lb(107, 46, '●', 14, C.red, 'middle', true), lb(45, 112, '●', 14, C.green, 'middle', true), lb(126, 112, '●', 14, C.blue, 'middle', true)], [tx(166, '3つの角の和は？', 15, C.blue, true)]),
  },
  {
    note: '❓なぜ180°なの？→頂点Aを通って底辺BCに平行な線を引きます。平行線の錯角は等しいので、BとCの角がAのところにもうつります。Aのまわりに3つの角が一直線にならび、一直線は180°です。',
    add: F([...triangle1(), ln(40, 29, 190, 29, C.green, true), lb(86, 38, '●', 14, C.green, 'middle', true), lb(107, 46, '●', 14, C.red, 'middle', true), lb(130, 38, '●', 14, C.blue, 'middle', true)], [eb(150, '3つの角 ＝ 一直線 ＝ 180°', C.green, FILL.green, 16, 30), tx(204, '問1 180°', 14, C.green, true)]),
  },
  {
    note: '問2：平行な直線l、mの間に折れ線P—B—Qがあります。∠APB＝40°、∠BQM＝55°のとき、折れ点の角∠PBQを求めます。',
    add: F([...lines2(), angle40(), angle55(), lb(166, 76, '？', 14, C.red, 'start', true)], [tx(166, '∠PBQ ＝ ？', 15, C.blue, true)]),
  },
  {
    note: '❓折れ点Bの角はどう求める？→Bを通って、l、mに平行な線を引きます（緑の点線）。❓なぜ引くの？→平行線があると、錯角が等しいというきまりが使えて、40°と55°をBのところに移せるからです。',
    add: F([...lines2(), angle40(), angle55(), ln(40, 75, 290, 75, C.green, true), lb(270, 66, '平行', 11, C.green, 'end', true)], [tx(158, 'Bを通る平行線を引く', 14, C.green, true), tx(188, '錯角が使えるようになる', 12, C.gray)]),
  },
  {
    note: '❓上がわの角は？→lと点線は平行なので、∠APB（40°）の錯角が、Bの点線の上がわの角と等しくなります。だから、点線とBPの間の角は40°です。',
    add: F([...lines2(), ln(40, 75, 290, 75, C.green, true), lb(172, 65, '40°', 11, C.blue, 'start', true), angle40()], [eb(150, '上がわ：錯角 → 40°', C.blue, FILL.blue, 15, 30)]),
  },
  {
    note: '❓下がわの角は？→mと点線も平行なので、∠BQM（55°）の錯角が、Bの点線の下がわの角と等しくなります。点線とBQの間の角は55°です。',
    add: F([...lines2(), ln(40, 75, 290, 75, C.green, true), lb(172, 65, '40°', 11, C.blue, 'start', true), lb(172, 88, '55°', 11, C.purple, 'start', true), angle55()], [eb(150, '下がわ：錯角 → 55°', C.purple, FILL.purple, 15, 30)]),
  },
  {
    note: '❓では、∠PBQは？→点線の上と下の角をあわせたものなので、40°＋55°＝95°です。補助線を引かずに40と55を見ていると、どこの角かわからなくなります。',
    add: F([...lines2(), ln(40, 75, 290, 75, C.green, true), lb(172, 65, '40°', 11, C.blue, 'start', true), lb(172, 88, '55°', 11, C.purple, 'start', true), lb(236, 102, '∠PBQ ＝ 95°', 12, C.red, 'middle', true)], [eb(150, '40° ＋ 55° ＝ 95°', C.red, FILL.red, 16, 30), tx(204, '問2 95°', 14, C.green, true)]),
  },
  {
    note: '問3：三角形ABCで∠A＝50°、∠B＝70°のとき、辺BCをのばした外角∠ACDを求めます。',
    add: F([pg([[89, 19], [50, 125], [150, 125]], C.main, 'rgba(14,165,233,0.10)'), ln(150, 125, 215, 125, C.gray, false, 2), lb(89, 10, 'A', 12, C.ink, 'middle', true), lb(40, 135, 'B', 12, C.ink, 'middle', true), lb(150, 138, 'C', 12, C.ink, 'middle', true), lb(222, 130, 'D', 12, C.ink, 'middle', true), lb(89, 40, '50°', 10, C.blue, 'middle', true), lb(72, 116, '70°', 10, C.blue, 'middle', true), lb(174, 114, '？', 14, C.red, 'middle', true)], [tx(166, '外角 ∠ACD ＝ ？', 15, C.blue, true)]),
  },
  {
    note: '❓内角∠Cは？→三角形の内角の和は180°なので、180−50−70＝60°。❓外角は？→Cのところで一直線（180°）なので、180−60＝120°です。',
    add: F([pg([[89, 19], [50, 125], [150, 125]], C.main, 'rgba(14,165,233,0.10)'), ln(150, 125, 215, 125, C.gray, false, 2), lb(89, 40, '50°', 10, C.blue, 'middle', true), lb(72, 116, '70°', 10, C.blue, 'middle', true), lb(132, 116, '60°', 10, C.green, 'middle', true), lb(176, 114, '120°', 11, C.red, 'middle', true)], [eb(148, '内角 180 − 50 − 70 ＝ 60°', C.green, FILL.green, 14, 28), eb(182, '外角 180 − 60 ＝ 120°', C.red, FILL.red, 14, 28)]),
  },
  {
    note: '確かめ（検算）をします。外角は「となりあわない2つの内角の和」に等しいので、50＋70＝120°でも同じです。なぜなら、外角＋内角C＝180と、A＋B＋内角C＝180から、外角＝A＋Bとなるからです。',
    add: F([], [eb(20, '別の方法 50° ＋ 70° ＝ 120° ○', C.green, FILL.green, 15, 30), tx(76, '外角 ＋ 内角C ＝ 180', 12, C.gray), tx(98, 'A ＋ B ＋ 内角C ＝ 180', 12, C.gray), tx(122, '→ 外角 ＝ A ＋ B', 13, C.blue, true), tx(170, '答え 問1 180°　問2 95°　問3 120°', 13, C.green, true)]),
  },
], '平行線に補助線を引いて錯角を使い、外角は隣り合わない2つの内角の和');

// ── tokyo_meidai_max_01（速さ）── A から km ＝ 30 ＋ km×21.67px
const X = (km: number): number => 30 + km * 21.667;
const road = (): E[] => [W(30, 80, 290, 80, C.ink), ln(30, 74, 30, 86, C.ink, false, 2), ln(290, 74, 290, 86, C.ink, false, 2), lb(30, 98, 'A', 12, C.ink, 'middle', true), lb(290, 98, 'B', 12, C.ink, 'middle', true), lb(160, 98, '12km', 11, C.gray, 'middle', true)];
const man = (km: number, t: string, color: string, fill: string): E => ci(X(km), 62, 11, t, color, fill, 10);
const meidaiMax01 = show([
  {
    note: 'AとBは12km離れています。太郎はAからBへ時速4kmで歩き、花子は同時にBからAへ一定の速さで歩きます。2時間後に初めて出会いました。❓出会った場所と、花子の速さは？',
    add: F([...road(), man(0, '太', C.red, FILL.red), man(12, '花', C.blue, FILL.blue), ar(50, 40, 90, 40, C.red), lb(70, 30, '時速4km', 10, C.red, 'middle', true), ar(270, 40, 230, 40, C.blue), lb(250, 30, '時速？km', 10, C.blue, 'middle', true)], [tx(160, '2時間後に 初めて出会う', 14, C.blue, true)]),
  },
  {
    note: '問1：❓出会った場所は？→太郎は2時間、時速4kmで進んだので、4×2＝8km。出会った場所は、Aから8kmの地点です。',
    add: F([...road(), man(8, '太', C.red, FILL.red), ar(X(0) + 12, 40, X(8) - 14, 40, C.red), lb(X(4), 28, '4×2＝8km', 11, C.red, 'middle', true), ln(X(8), 70, X(8), 90, C.green, true, 2)], [eb(152, '4 × 2 ＝ 8km（Aから）', C.green, FILL.green, 16, 30), tx(206, '問1 Aから8km', 14, C.green, true)]),
  },
  {
    note: '問2：❓花子は何km歩いた？→Bから出会った地点までは 12−8＝4km。これを2時間で歩いたので、速さは 4÷2＝時速2kmです。',
    add: F([...road(), man(8, '出', C.green, FILL.green), ar(X(12) - 12, 40, X(8) + 14, 40, C.blue), lb((X(12) + X(8)) / 2, 28, '12−8＝4km', 11, C.blue, 'middle', true)], [eb(148, '4 ÷ 2 ＝ 時速2km', C.blue, FILL.blue, 16, 30), tx(202, '問2 時速2km', 14, C.green, true)]),
  },
  {
    note: '❓なぜ2人の道のりをたすと12kmになるの？→向かい合って進んで出会うので、2人が歩いた道のりの合計がAB間の12kmだからです。同じことを速さで言うと、2人あわせて時速 4＋2＝6kmで近づき、6×2＝12kmです。',
    add: F([...road(), bx(X(0), 40, X(8) - X(0), 22, '太郎 8km', C.red, FILL.red, 11), bx(X(8), 40, X(12) - X(8), 22, '花子 4km', C.blue, FILL.blue, 11), lb(160, 122, '8 ＋ 4 ＝ 12km', 12, C.ink, 'middle', true)], [eb(150, '(4＋2) × 2 ＝ 12km ○', C.green, FILL.green, 15, 30), tx(204, '出会い：2人の速さの和で近づく', 12, C.gray)]),
  },
  {
    note: '問3：太郎は出会ったあとも歩き続けます。残り4kmを時速4kmで歩くので、かかる時間は4÷4＝1時間。太郎がBに着くのは、出発から2＋1＝3時間後です。このとき花子は2×3＝6km歩いているので、Aから6kmの地点にいます。',
    add: F([...road(), man(12, '太', C.red, FILL.red), man(6, '花', C.blue, FILL.blue), lb((X(6) + X(12)) / 2, 40, 'へだたり 6km', 11, C.purple, 'middle', true), ln(X(6), 48, X(12), 48, C.purple, false, 2)], [eb(148, '3時間後：太郎はB、花子はAから6km', C.purple, FILL.purple, 12, 30), tx(202, '4÷4＝1時間　2＋1＝3時間', 12, C.gray)]),
  },
  {
    note: '❓太郎はBで折り返して時速6kmで走ります。花子に追いつくのは、なぜ？→2人とも同じA向きに進み、太郎(6km/h)のほうが花子(2km/h)より速いからです。1時間に 6−2＝4kmずつ近づき、へだたり6kmが0になるのは 6÷4＝1.5時間後です。',
    add: F([...road(), man(12, '太', C.red, FILL.red), man(6, '花', C.blue, FILL.blue), ar(X(12) - 12, 40, X(6) + 40, 40, C.red), lb(X(9), 28, '時速6km', 10, C.red, 'middle', true), ar(X(6) - 12, 40, X(6) - 40, 40, C.blue), lb(X(6) - 26, 28, '時速2km', 10, C.blue, 'middle', true)], [eb(148, '6 − 2 ＝ 4km（1時間にちぢまる）', C.purple, FILL.purple, 13, 28), eb(182, '6 ÷ 4 ＝ 1.5時間', C.green, FILL.green, 15, 28)]),
  },
  {
    note: '❓では、出発から何時間後？→太郎がBに着いた3時間後から、さらに1.5時間なので 3＋1.5＝4.5時間＝4時間30分後です。出会う場所はAから3km（太郎 12−6×1.5、花子 12−2×4.5がどちらも3km）です。',
    add: F([...road(), man(3, '出', C.green, FILL.green), ln(X(3), 70, X(3), 90, C.green, true, 2)], [eb(148, '3 ＋ 1.5 ＝ 4.5時間 ＝ 4時間30分', C.green, FILL.green, 14, 30), tx(202, '太郎 12−9＝3km　花子 12−9＝3km', 12, C.gray), tx(224, '問3 4時間30分後', 13, C.green, true)]),
  },
  {
    note: '❓よくあるまちがいは？→最初の出会い（8km地点）で、太郎がもう折り返して走りはじめたと考えることです。太郎は、Bに着くまで時速4kmで歩き続け、Bで折り返してはじめて時速6kmになります。',
    add: F([...road(), man(8, '太', C.red, FILL.red), bx(40, 30, 240, 26, '8km地点で折り返す ×', C.red, FILL.red, 12)], [tx(140, 'Bに着くまで 時速4kmで歩く', 13, C.blue, true), tx(170, 'Bで折り返してから 時速6km', 13, C.blue, true)]),
  },
], '出会いは速さの和、追いつきは速さの差');

// ── tokyo_aoyama_max_01（正四面体）──
const T0: [number, number] = [160, 20];
const L0: [number, number] = [90, 115];
const R0: [number, number] = [230, 115];
const F0: [number, number] = [165, 140];
const mid = (a: [number, number], b: [number, number]): [number, number] => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const tetra = (): E[] => [
  pg([T0, L0, F0], C.main, FILL.blue), pg([T0, F0, R0], C.main, FILL.warm), ln(L0[0], L0[1], R0[0], R0[1], C.gray, true, 1.5),
];
const tetraLabels = (): E[] => [lb(108, 62, '6cm', 10, C.ink, 'end', true), lb(212, 62, '6cm', 10, C.ink, 'start', true), lb(118, 136, '6cm', 10, C.ink, 'end', true), lb(206, 136, '6cm', 10, C.ink, 'start', true)];
// 展開図（1辺12cmの大きな正三角形の中に、1辺6cmの正三角形が4まい）
const netTop: [number, number][] = [[160, 10], [124, 72.5], [196, 72.5]];
const netLeft: [number, number][] = [[88, 135], [124, 72.5], [160, 135]];
const netRight: [number, number][] = [[232, 135], [196, 72.5], [160, 135]];
const netMid: [number, number][] = [[124, 72.5], [196, 72.5], [160, 135]];
const net = (nums: boolean): E[] => [
  pg(netTop, C.main, FILL.blue), pg(netLeft, C.main, FILL.green), pg(netRight, C.main, FILL.purple), pg(netMid, C.main, FILL.yellow),
  ...(nums ? [lb(160, 52, '①', 14, C.ink, 'middle', true), lb(124, 112, '②', 14, C.ink, 'middle', true), lb(196, 112, '③', 14, C.ink, 'middle', true), lb(160, 92, '④', 14, C.ink, 'middle', true)] : []),
];
const aoyamaMax01 = show([
  {
    note: '1辺6cmの正三角形を面とする正三角錐（すべての面が正三角形）です。1面の面積は15.59cm²とします。この立体の展開図の面積、表面積、高さの半分で切ったときの上の部分の表面積の比を求めます。',
    add: F([...tetra(), ...tetraLabels()], [tx(160, '4つの面は、どれも1辺6cmの正三角形', 13, C.blue, true), tx(186, '1面の面積 15.59cm²', 13, C.gray)]),
  },
  {
    note: '問1：❓展開図の面積はなぜ「15.59×4」？→立体を切り開いて平らにすると、合同（同じ形・同じ大きさ）の正三角形が4まいならびます。1まいが15.59cm²なので、4まい分です。',
    add: F([...net(true)], [eb(148, '15.59 × 4 ＝ 62.36cm²', C.green, FILL.green, 16, 30), tx(202, '問1 約62.36cm²', 14, C.green, true)]),
  },
  {
    note: '問2：❓組み立てた立体の表面積は？→展開図を折って組み立てても、紙の大きさは変わりません。つまり、表面積は展開図の面積と同じです。問1と同じ約62.36cm²になります。',
    add: F([...net(true)], [eb(148, '表面積 ＝ 展開図の面積 ＝ 62.36cm²', C.green, FILL.green, 14, 30), tx(202, '問2 約62.36cm²', 14, C.green, true), tx(222, '折っても紙の大きさは変わらない', 11, C.gray)]),
  },
  {
    note: '問3：この立体を、底面と平行に高さの半分のところで切ります。❓上にできる小さい立体（黄色）は、もとの立体とどんな関係でしょう。',
    add: F([...tetra(), pg([T0, mid(T0, L0), mid(T0, F0)], C.red, FILL.yellow), pg([T0, mid(T0, F0), mid(T0, R0)], C.red, FILL.yellow), pg([mid(T0, L0), mid(T0, F0), mid(T0, R0)], C.red, 'rgba(225,29,72,0.15)'), lb(225, 75, '半分の高さで切る', 10, C.red, 'start', true)], [tx(166, '上の小さい立体と、もとの立体の関係は？', 13, C.blue, true)]),
  },
  {
    note: '❓なぜ形が同じ（相似）なの？→切った面が底面と平行なので、三角形の形が変わりません。頂点から半分の高さなので、辺の長さも全部半分で、小さい立体も1辺3cmの正三角錐になります。大きさの比（相似比）は1:2です。',
    add: F([...tetra(), pg([T0, mid(T0, L0), mid(T0, F0)], C.red, FILL.yellow), pg([T0, mid(T0, F0), mid(T0, R0)], C.red, FILL.yellow), pg([mid(T0, L0), mid(T0, F0), mid(T0, R0)], C.red, 'rgba(225,29,72,0.15)'), lb(120, 70, '3cm', 10, C.red, 'end', true), lb(200, 70, '3cm', 10, C.red, 'start', true)], [eb(148, 'もとの立体 : 小さい立体 ＝ 2 : 1', C.purple, FILL.purple, 15, 30), tx(202, '辺の長さがすべて半分（1辺3cm）', 12, C.gray)]),
  },
  {
    note: '❓では、1つの面の面積は何分のいくつ？→1辺6cmの正三角形は、1辺3cmの正三角形4まいでちょうどうめられます。だから1辺が半分になると、面積は4分の1です（たてにも半分、よこにも半分で、2回かける）。',
    add: F([pg([[88, 135], [232, 135], [160, 10]], C.main, FILL.blue), pg(netMid, C.red, FILL.yellow), lb(160, 52, '1辺3cm', 11, C.ink, 'middle', true), lb(160, 92, '1辺3cm', 11, C.ink, 'middle', true), lb(250, 60, '1辺6cm', 11, C.blue, 'middle', true)], [eb(148, '大きな三角形 ＝ 小さい三角形 4まい', C.blue, FILL.blue, 14, 30), tx(202, '面積は 1/2 × 1/2 ＝ 1/4', 13, C.red, true)]),
  },
  {
    note: '❓上の立体の表面積は？→小さい立体も4つの面（3つの側面と切った面）をもち、どの面も1辺3cmの正三角形。1面が15.59÷4の面積なので、全体ももとの表面積の4分の1です。62.36÷4＝15.59cm²で、これは1面ぶんと同じ大きさです。',
    add: F([...tetra(), pg([T0, mid(T0, L0), mid(T0, F0)], C.red, FILL.yellow), pg([T0, mid(T0, F0), mid(T0, R0)], C.red, FILL.yellow), pg([mid(T0, L0), mid(T0, F0), mid(T0, R0)], C.red, 'rgba(225,29,72,0.15)')], [eb(148, '62.36 ÷ 4 ＝ 15.59cm²', C.green, FILL.green, 16, 30), tx(202, '問3 4分の1倍', 14, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。相似比が1:2なら、表面積は1×1：2×2＝1：4。もとの表面積を1とすると、上の部分は4分の1です。❓表面積の比を長さの比のまま1:2としたのは、なぜまちがい？→面積は長さを2回かけるからです。',
    add: F([], [eb(20, '相似比 1 : 2', C.blue, FILL.blue, 15, 30), eb(62, '面積の比 1×1 : 2×2 ＝ 1 : 4', C.purple, FILL.purple, 15, 30), tx(120, '上の部分は もとの 4分の1倍', 14, C.green, true), tx(150, '1 : 2 のままは まちがい', 13, C.red, true), tx(190, '答え 約62.36cm²・約62.36cm²・4分の1倍', 12, C.green, true)]),
  },
], '展開図でも表面積は同じ、相似なら面積は相似比を2回かける');

// ── tokyo_aoyama_max_03（地層）──
const layerNames = [['A', 'れき岩', FILL.gray], ['B', '砂岩（アンモナイト）', FILL.yellow], ['C', '凝灰岩（火山灰）', FILL.red], ['D', '泥岩（フズリナ）', FILL.green], ['E', '石灰岩', FILL.blue]] as const;
const column = (x0: number, w: number, hl: string[] = [], yOff = 0): E[] =>
  layerNames.map(([k, , fill], i) => bx(x0, 10 + i * 26 + yOff, w, 26, k, hl.includes(k) ? C.red : C.gray, fill, 12));
const layerLabels = (x: number): E[] => layerNames.map(([, n], i) => lb(x, 23 + i * 26, n, 11, C.ink, 'start', true));
const aoyamaMax03 = show([
  {
    note: 'ある崖（がけ）で、上から順にA〜E層が見つかりました。A：れき岩、B：砂岩（アンモナイトの化石）、C：凝灰岩（火山灰が固まったもの）、D：泥岩（フズリナの化石）、E：石灰岩です。',
    add: F([...column(60, 70), ...layerLabels(140)], [tx(166, '上からA・B・C・D・E', 14, C.blue, true)]),
  },
  {
    note: '問1：❓古い順は？→E→D→C→B→Aです。❓なぜ下のほうが古いの？→地層は、先にたまった層の上に、あとの層がつぎつぎ重なっていくからです。下にあるものほど先にできた古い層で、これを地層累重（ちそうるいじゅう）の法則といいます。',
    add: F([...column(60, 70), ...layerLabels(140), ar(14, 130, 14, 12, C.blue), lb(52, 40, '新しい', 10, C.blue, 'end', true), lb(52, 110, '古い', 10, C.red, 'end', true)], [eb(148, '古い順 E → D → C → B → A', C.green, FILL.green, 15, 30), tx(202, '下の層ほど先にたまった', 13, C.gray)]),
  },
  {
    note: '問2：❓フズリナとアンモナイトは、何の手がかり？→ある時代にだけ栄え、広い範囲にすんでいた生物の化石は「示準化石（しじゅんかせき）」といい、その化石をふくむ地層の時代を教えてくれます。フズリナは古生代、アンモナイトは中生代です。',
    add: F([bx(20, 30, 88, 40, '古生代\nフズリナ', C.green, FILL.green, 12), bx(116, 30, 88, 40, '中生代\nアンモナイト', C.main, FILL.yellow, 11), bx(212, 30, 88, 40, '新生代', C.gray, FILL.gray, 12), ar(108, 50, 116, 50, C.gray), ar(204, 50, 212, 50, C.gray), lb(160, 92, '古い ← 時代 → 新しい', 11, C.gray, 'middle', true)], [eb(148, 'フズリナ → 古生代　アンモナイト → 中生代', C.green, FILL.green, 12, 30), tx(202, '問2 どちらも示準化石', 14, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。フズリナ（古生代）をふくむD層が下、アンモナイト（中生代）をふくむB層が上にあります。時代の順（古生代→中生代）と、地層の順（下→上）が一致しているので、問1と問2は矛盾しません。',
    add: F([...column(60, 70, ['B', 'D']), ...layerLabels(140), lb(54, 114, '古生代', 10, C.green, 'end', true), lb(54, 62, '中生代', 10, C.main, 'end', true)], [eb(148, '下（D）古生代 → 上（B）中生代', C.green, FILL.green, 14, 30), tx(202, '時代の順と地層の順が合っている', 12, C.gray)]),
  },
  {
    note: '問3：凝灰岩は、火山がふん火して出た火山灰が固まった岩石です。❓なぜ地層の対比に役立つの？→ふん火は短い時間に起こり、火山灰は広い範囲に同時に降りつもります。だから遠くはなれた2つの場所にも、同じ時期にできた同じ火山灰の層が見つかります。',
    add: F([...[0, 1, 2, 3, 4].map((i) => bx(30, 10 + i * 24, 80, 24, i === 1 ? '火山灰' : '', i === 1 ? C.red : C.gray, i === 1 ? FILL.red : FILL.gray, 11)), ...[0, 1, 2, 3, 4].map((i) => bx(210, 22 + i * 24, 80, 24, i === 1 ? '火山灰' : '', i === 1 ? C.red : C.gray, i === 1 ? FILL.red : FILL.gray, 11)), ln(110, 46, 210, 64, C.red, true, 2), lb(160, 30, '遠くはなれた場所', 10, C.gray, 'middle', true), lb(160, 88, '同じ時期の層', 11, C.red, 'middle', true)], [eb(148, '同時に広く降る → 同じ時期の目印', C.red, FILL.red, 14, 30)]),
  },
  {
    note: '❓このような「目印になる層」を何という？→「かぎ層」です。かぎ層を手がかりに、はなれた場所の地層を「同じ時期のもの」とそろえてくらべる（対比する）ことができます。',
    add: F([...[0, 1, 2, 3, 4].map((i) => bx(30, 10 + i * 24, 80, 24, i === 1 ? 'かぎ層' : '', i === 1 ? C.red : C.gray, i === 1 ? FILL.red : FILL.gray, 11)), ...[0, 1, 2, 3, 4].map((i) => bx(210, 22 + i * 24, 80, 24, i === 1 ? 'かぎ層' : '', i === 1 ? C.red : C.gray, i === 1 ? FILL.red : FILL.gray, 11)), ln(110, 46, 210, 64, C.red, true, 2)], [eb(148, '火山灰の層 ＝ かぎ層', C.red, FILL.red, 15, 30), tx(202, 'はなれた地層を くらべる手がかり', 12, C.gray)]),
  },
  {
    note: '答えをまとめます。問1：E→D→C→B→A（下ほど古い）。問2：アンモナイトは中生代、フズリナは古生代の示準化石。問3：ふん火は短い間に広い範囲へ火山灰を降らせるので、同じ時期の層としてくらべられる。（30字以内の例：広い範囲に同時に積もり、同時期の目印になるから。）',
    add: F([], [eb(14, '問1 E → D → C → B → A', C.green, FILL.green, 14, 28), eb(48, '問2 B 中生代　D 古生代', C.green, FILL.green, 14, 28), eb(82, '問3 広く同時に降る火山灰', C.green, FILL.green, 14, 28), tx(138, '30字の例：広い範囲に同時に積もり、', 11, C.gray), tx(156, '同時期の目印になるから。', 11, C.gray)]),
  },
], '地層は下ほど古い。示準化石は時代を、かぎ層は対比を教える');

// ── nandai_sansu_04（正六角形の面積）──
const HC = { x: 160, y: 78, R: 58 };
const hv = (k: number): [number, number] => [HC.x + HC.R * Math.cos((k * Math.PI) / 3), HC.y - HC.R * Math.sin((k * Math.PI) / 3)];
const V = [0, 1, 2, 3, 4, 5].map(hv);
const Mp = [0, 1, 2, 3, 4, 5].map((k) => mid(V[k], V[(k + 1) % 6]));
const O: [number, number] = [HC.x, HC.y];
const hexOuter = (fill: string = FILL.blue): E => pg(V, C.main, fill);
const hexInner = (fill: string = FILL.green): E => pg(Mp, C.green, fill);
const corners = (): E[] => [0, 1, 2, 3, 4, 5].map((k) => pg([V[k], Mp[(k + 5) % 6], Mp[k]], C.red, FILL.red));
const nandaiS04 = show([
  {
    note: '1辺1cmの正六角形の、各辺の中点（まんなか）を結んで、内側に正六角形をつくります。この操作をくり返します。最初から数えて5番目の正六角形の面積は、最初の何分の1でしょう。',
    add: F([hexOuter(), hexInner(), ...Mp.map((m) => ci(m[0], m[1], 3, undefined, C.red, C.red))], [tx(160, '中点を結ぶ → 内側の正六角形', 14, C.blue, true), tx(188, '5番目の面積 ＝ 最初の何分の1？', 13, C.gray)]),
  },
  {
    note: '❓5番目は、何回操作したもの？→最初が1番目で、1回操作すると2番目。5番目までは、操作を4回くり返します。1回で面積が何倍になるかが分かれば、4回ぶんをかけ合わせれば答えです。',
    add: F([...flow(['1番目', '2番目', '3番目', '4番目', '5番目'], 50, { h: 40, color: C.blue, fill: FILL.blue, size: 11 }).flat(), ...[1, 2, 3, 4].map((i) => lb(8 + i * 64 - 8, 40, '？倍', 10, C.red, 'middle', true))], [eb(148, '1番目 → 5番目 ＝ 操作4回', C.blue, FILL.blue, 15, 30), tx(202, 'まず1回で何倍になるかを調べる', 13, C.gray)]),
  },
  {
    note: '❓1回で面積は何倍？→まず、正六角形を中心から6つの合同な正三角形に分けます。その1つの面積を1とすると、正六角形全体は6です。',
    add: F([hexOuter(), ...V.map((p) => ln(O[0], O[1], p[0], p[1], C.main, false, 1.5)), pg([O, V[0], V[1]], C.red, FILL.red), lb(O[0] + 20, O[1] - 12, '1', 14, C.red, 'middle', true)], [eb(148, '正三角形1つ ＝ 1　全体 ＝ 6', C.blue, FILL.blue, 15, 30)]),
  },
  {
    note: '❓切り落とされる部分の大きさは？→となりあう3つの頂点A・B・Cをとります。O・A・B・Cをつなぐとひし形で、正三角形2つぶんの面積2です。ひし形は対角線ACで半分に分かれるので、三角形ABCの面積は1です。',
    add: F([hexOuter(FILL.gray), pg([O, V[0], V[1], V[2]], C.main, FILL.yellow), pg([V[0], V[1], V[2]], C.blue, 'rgba(2,132,199,0.25)'), ln(V[0][0], V[0][1], V[2][0], V[2][1], C.red, true, 2), lb(V[0][0] + 10, V[0][1] + 4, 'A', 12, C.ink, 'start', true), lb(V[1][0], V[1][1] - 8, 'B', 12, C.ink, 'middle', true), lb(V[2][0] - 10, V[2][1] - 6, 'C', 12, C.ink, 'end', true), lb(O[0], O[1] + 14, 'O', 11, C.gray, 'middle', true)], [eb(148, 'ひし形 OABC ＝ 2　その半分 → △ABC ＝ 1', C.blue, FILL.blue, 13, 30)]),
  },
  {
    note: '❓切り落とされる小さい三角形（Bのまわり）は？→辺の中点を結んだ線は、ACと平行で長さは半分です。だから小さい三角形は三角形ABCと相似で、辺の比は1:2。面積は2回かけて 1:4。つまり 1÷4＝0.25。これが6か所あるので、減る面積は 0.25×6＝1.5です。',
    add: F([hexOuter(FILL.gray), ...corners(), lb(V[1][0], V[1][1] - 8, '0.25', 10, C.red, 'middle', true), lb(V[5][0], V[5][1] + 12, '0.25', 10, C.red, 'middle', true)], [eb(148, '0.25 × 6 ＝ 1.5（切り落とす面積）', C.red, FILL.red, 14, 30), tx(202, '相似比 1:2 → 面積比 1:4', 13, C.gray)]),
  },
  {
    note: '❓残る面積は？→6−1.5＝4.5。もとの6に対する割合は 4.5÷6＝4分の3です。つまり、1回の操作で面積は4分の3倍になります。',
    add: F([hexOuter(FILL.gray), hexInner(FILL.green), lb(O[0], O[1] + 3, '4.5', 16, C.green, 'middle', true)], [eb(148, '6 − 1.5 ＝ 4.5　4.5 ÷ 6 ＝ 3/4', C.green, FILL.green, 15, 30), tx(202, '1回の操作で 3/4倍', 14, C.green, true)]),
  },
  {
    note: '❓4回くり返すと？→3/4をかけ合わせます。2番目は3/4、3番目は3/4×3/4＝9/16、4番目は27/64、5番目は81/256です。❓分数のかけ算は？→分子どうし（3×3×3×3＝81）、分母どうし（4×4×4×4＝256）をかけます。',
    add: F([...flow(['1番目\n1', '2番目\n3/4', '3番目\n9/16', '4番目\n27/64', '5番目\n81/256'], 40, { h: 50, color: C.green, fill: FILL.green, size: 10 }).flat()], [eb(130, '3×3×3×3 ＝ 81　4×4×4×4 ＝ 256', C.green, FILL.green, 14, 28), tx(190, '答え 256分の81', 15, C.green, true)]),
  },
  {
    note: '確かめ（検算）をします。❓もし辺の長さが半分になるなら、面積は2回かけて1/4のはずです。でも実際は3/4で、内側の正六角形の辺はもとの辺の半分にはなりません。81/256は約0.32、つまり最初の約3割で、4回で4分の3が4つなので、ありえる大きさです。',
    add: F([hexOuter(FILL.gray), hexInner(FILL.green)], [tx(148, '辺が半分なら 1/4（これは まちがい）', 13, C.red, true), tx(176, '実際は 3/4 が 4回 → 81/256 ≒ 0.32', 13, C.blue, true), tx(206, '答え 256分の81（81/256）', 14, C.green, true)]),
  },
], '1回で面積は4分の3倍、4回くり返して81/256');

// ── nandai_sansu_06（反射）── 11px＝1cm
const ballPath = (): E[] => [ln(30, 130, 74, 86, C.red, false, 2.5), ln(74, 86, 96, 108, C.red, false, 2.5), ln(96, 108, 74, 130, C.red, false, 2.5), ci(30, 130, 5, undefined, C.red, C.red)];
const tiles = (): E[] => [0, 1].flatMap((c) => [0, 1, 2].map((r) => bx(30 + c * 66, 98 - r * 44, 66, 44, '', C.gray, (c + r) % 2 === 0 ? FILL.blue : FILL.warm)));
const diag = (): E[] => [ln(30, 142, 162, 10, C.red, false, 2.5), ci(30, 142, 5, undefined, C.red, C.red)];
const nandaiS06 = show([
  {
    note: '縦4cm・横6cmの長方形の中を、ボールが左下のすみから右上へ45度の向きに進み、かべで反射します。初めてすみに着くまでに、横と縦に何cm進むでしょう。❓かべで曲がる道を、どうやって考えましょう。',
    add: F([bx(30, 86, 66, 44, '', C.blue, FILL.blue), ...ballPath(), lb(63, 72, '横6cm', 11, C.blue, 'middle', true), lb(26, 108, '縦\n4cm', 11, C.blue, 'end', true), lb(200, 70, 'かべで反射しながら', 12, C.ink, 'start', true), lb(200, 92, 'すみを めざす', 12, C.ink, 'start', true)], [tx(166, '初めてすみに着くまでの 横と縦は？', 13, C.blue, true)]),
  },
  {
    note: '❓反射を1つずつ追う代わりに、どうする？→かべの向こうに、同じ長方形を鏡のようにならべます。すると、かべでの折り返しが「そのまま直進」に変わります。ボールは、ならべた長方形の中を、まっすぐ進んでいくと考えられます。',
    add: F([...tiles(), ...diag(), lb(240, 60, 'かべの向こうに\n長方形をならべて\nまっすぐ進む', 11, C.ink, 'middle', true)], [tx(160, '折り返し → まっすぐ に直す', 14, C.blue, true)]),
  },
  {
    note: '❓45度だと、横と縦はどうなる？→45度で進むと、横に進んだ長さと縦に進んだ長さがいつも同じになります（正方形の対角線と同じ向き）。',
    add: F([...tiles(), ...diag(), ln(30, 142, 162, 142, C.blue, true, 1.5), ln(162, 142, 162, 10, C.blue, true, 1.5), lb(96, 134, '横', 11, C.blue, 'middle', true), lb(170, 80, '縦', 11, C.blue, 'start', true)], [tx(158, '横に進む長さ ＝ 縦に進む長さ', 14, C.blue, true)]),
  },
  {
    note: '❓すみに着くのは、いつ？→ならべた長方形の「かど」に着いたときです。横は6cmの倍数、かつ縦は4cmの倍数になった点です。かべ（境目の線）を通るだけの点は、かどではないので、すみではありません。',
    add: F([...tiles(), ...[0, 1, 2].flatMap((c) => [0, 1, 2, 3].map((r) => ci(30 + c * 66, 142 - r * 44, 3, undefined, C.gray, C.gray))), ...diag(), ci(74, 98, 4, undefined, C.main, FILL.yellow), ci(96, 76, 4, undefined, C.main, FILL.yellow), ci(118, 54, 4, undefined, C.main, FILL.yellow), ci(162, 10, 7, undefined, C.green, FILL.green), lb(240, 40, 'すみに着く', 12, C.green, 'middle', true), lb(240, 100, 'かべを通るだけ\n（すみではない）', 10, C.main, 'middle', true)], [tx(158, '横が6の倍数 かつ 縦が4の倍数', 14, C.blue, true)]),
  },
  {
    note: '❓どの長さになる？→横と縦は同じ長さなので、6の倍数であり4の倍数でもある数をさがします。6の倍数は 6・12・18…、4の倍数は 4・8・12・16…。初めて同じになるのは12です。つまり6と4の最小公倍数です。',
    add: F([bx(20, 24, 280, 34, '6の倍数　6　12　18　24', C.blue, FILL.blue, 14), bx(20, 66, 280, 34, '4の倍数　4　8　12　16', C.purple, FILL.purple, 14), lb(160, 118, '初めて同じになるのは 12', 13, C.red, 'middle', true)], [eb(148, '6と4の最小公倍数 ＝ 12', C.green, FILL.green, 16, 30)]),
  },
  {
    note: '答えは、横に12cm・縦に12cmです。12÷6＝2で横に長方形2まいぶん、12÷4＝3で縦に長方形3まいぶん進んだことになります。初めに着くすみは、もとの長方形では左上のすみです。',
    add: F([bx(30, 86, 66, 44, '', C.blue, FILL.blue), ci(30, 130, 5, undefined, C.red, C.red), lb(30, 146, '出発', 10, C.red, 'middle', true), ci(30, 86, 7, undefined, C.green, FILL.green), lb(24, 76, '着く', 10, C.green, 'end', true), lb(200, 76, '12÷6＝2まい分（横）', 11, C.ink, 'start', true), lb(200, 98, '12÷4＝3まい分（縦）', 11, C.ink, 'start', true)], [eb(150, '横に12cm、縦に12cm', C.green, FILL.green, 16, 30)]),
  },
  {
    note: '確かめ（検算）をします。12÷6＝2、12÷4＝3で、どちらも整数になっています。途中でかべに当たるのは、横の境目で1回、縦の境目で2回の合計3回です。❓斜めに進んだ長さを答えるのはなぜまちがい？→聞かれているのは、横と縦に進んだ長さだからです。',
    add: F([], [eb(20, '12 ÷ 6 ＝ 2　12 ÷ 4 ＝ 3　どちらも整数 ○', C.green, FILL.green, 12, 30), tx(76, '途中のかべ：横の境目1回＋縦の境目2回', 12, C.gray), tx(104, '＝ 3回', 13, C.gray), tx(140, '答え 横12cm、縦12cm', 15, C.green, true), tx(174, '斜めの長さを答えない', 12, C.red)]),
  },
], '反射は長方形をならべて直進に直し、最小公倍数で考える');

// ── nandai_sansu_11（正三角形の内部の点）── 24px＝1cm
const TA: [number, number] = [160, 14];
const TB: [number, number] = [88, 139];
const TC: [number, number] = [232, 139];
const PP2: [number, number] = [157, 91];
const Fab: [number, number] = [126, 73];
const Fbc: [number, number] = [157, 139];
const Fca: [number, number] = [192, 71];
const triBase = (): E[] => [pg([TA, TB, TC], C.main, 'rgba(14,165,233,0.08)'), lb(TA[0], 8, 'A', 12, C.ink, 'middle', true), lb(TB[0] - 8, TB[1] + 4, 'B', 12, C.ink, 'end', true), lb(TC[0] + 8, TC[1] + 4, 'C', 12, C.ink, 'start', true), ci(PP2[0], PP2[1], 4, undefined, C.red, C.red), lb(PP2[0] + 8, PP2[1] - 2, 'P', 12, C.red, 'start', true)];
const perps = (): E[] => [ln(PP2[0], PP2[1], Fab[0], Fab[1], C.blue, true, 1.5), ln(PP2[0], PP2[1], Fbc[0], Fbc[1], C.blue, true, 1.5), ln(PP2[0], PP2[1], Fca[0], Fca[1], C.blue, true, 1.5), lb(130, 88, '1.5', 11, C.blue, 'end', true), lb(162, 120, '2', 11, C.blue, 'start', true), lb(186, 88, '？', 12, C.red, 'start', true)];
const spokes = (): E[] => [ln(PP2[0], PP2[1], TA[0], TA[1], C.gray, false, 1.5), ln(PP2[0], PP2[1], TB[0], TB[1], C.gray, false, 1.5), ln(PP2[0], PP2[1], TC[0], TC[1], C.gray, false, 1.5)];
const nandaiS11 = show([
  {
    note: '1辺6cm、高さ5.2cmの正三角形ABCの内側に点Pがあります。Pから3つの辺に垂直な線を引いたところ、ABまでが1.5cm、BCまでが2cmでした。CAまでの長さは何cmでしょう。',
    add: F([...triBase(), ...perps(), lb(262, 60, '1辺 6cm\n高さ 5.2cm', 11, C.blue, 'middle', true)], [tx(178, 'CAまでの長さ ＝ ？', 15, C.blue, true)]),
  },
  {
    note: '❓Pの位置が分からないのに、どうやって求める？→Pの位置を求めるのではなく、PとA・B・Cを結んで、正三角形を3つの三角形に分けて考えます。',
    add: F([...triBase(), ...spokes()], [tx(168, 'P と A・B・C を結ぶ', 14, C.blue, true), tx(196, '3つの三角形に分かれる', 13, C.gray)]),
  },
  {
    note: '❓この3つの三角形は、どこが同じ？→どれも底辺が正三角形の1辺（6cm）です。高さは、Pから各辺までの距離（1.5cm、2cm、CAまで）です。',
    add: F([pg([PP2, TA, TB], C.blue, 'rgba(2,132,199,0.18)'), pg([PP2, TB, TC], C.main, 'rgba(250,204,21,0.30)'), pg([PP2, TC, TA], C.green, 'rgba(22,163,74,0.18)'), ...triBase(), ...perps(), ...spokes()], [tx(168, '底辺はどれも 6cm', 14, C.blue, true), tx(196, '高さ ＝ Pから各辺までの距離', 13, C.gray)]),
  },
  {
    note: '❓面積について、何がいえる？→3つの三角形をあわせると、ちょうどもとの正三角形になります。だから面積の合計は、正三角形の面積と等しくなります。三角形の面積は 底辺×高さ÷2 です。',
    add: F([pg([PP2, TA, TB], C.blue, 'rgba(2,132,199,0.18)'), pg([PP2, TB, TC], C.main, 'rgba(250,204,21,0.30)'), pg([PP2, TC, TA], C.green, 'rgba(22,163,74,0.18)'), ...triBase()], [eb(148, '6×1.5÷2 ＋ 6×2÷2 ＋ 6×□÷2', C.blue, FILL.blue, 13, 28), eb(180, '＝ 6 × 5.2 ÷ 2', C.green, FILL.green, 14, 28), tx(222, '3つの合計 ＝ 正三角形の面積', 12, C.gray)]),
  },
  {
    note: '❓式はどう整理する？→どの項も「6×（長さ）÷2」の形です。両がわから「6×…÷2」の形を見ると、のこるのは長さだけ。1.5＋2＋□＝5.2。つまり3つの距離の合計が、正三角形の高さと同じになります。',
    add: F([], [eb(14, '6×1.5÷2 ＝ 4.5', C.blue, FILL.blue, 13, 26), eb(46, '6×2÷2 ＝ 6', C.blue, FILL.blue, 13, 26), eb(78, '6×5.2÷2 ＝ 15.6（全体）', C.green, FILL.green, 13, 26), tx(128, '4.5 ＋ 6 ＋ □の三角形 ＝ 15.6', 13, C.gray, true), tx(160, '1.5 ＋ 2 ＋ □ ＝ 5.2', 15, C.red, true)]),
  },
  {
    note: 'したがって □＝5.2−1.5−2＝1.7cm。面積で確かめると、□の三角形は 15.6−4.5−6＝5.1cm²で、6×□÷2＝5.1 から □＝5.1×2÷6＝1.7cmになります。',
    add: F([...triBase(), ...perps()], [eb(154, '5.2 − 1.5 − 2 ＝ 1.7cm', C.green, FILL.green, 16, 30), tx(208, '答え 1.7cm', 14, C.green, true)]),
  },
  {
    note: '❓Pがどこにあっても同じ？→そうです。Pを動かしても、3つの距離の合計はいつも高さ5.2cmになります。図の棒で、1.5cm・2cm・1.7cmをつなぐと、ちょうど高さ5.2cmと同じ長さになります。',
    add: F([...triBase(), bx(262, 14, 28, 125, '', C.gray, FILL.gray), bx(262, 103, 28, 36, '1.5', C.blue, FILL.blue, 10), bx(262, 55, 28, 48, '2', C.main, FILL.yellow, 11), bx(262, 14, 28, 41, '1.7', C.green, FILL.green, 10), lb(276, 8, '高さ5.2', 10, C.ink, 'middle', true)], [eb(154, '1.5 ＋ 2 ＋ 1.7 ＝ 5.2 ○', C.green, FILL.green, 15, 30), tx(208, '3つの距離の合計 ＝ 高さ', 13, C.gray)]),
  },
  {
    note: '❓よくあるまちがいは？→Pの位置を、くわしく測って求めようとすることです。面積のきまりを使えば、Pの位置は分からなくても答えが出せます。',
    add: F([...triBase()], [tx(166, 'Pの位置を求めなくてよい', 14, C.blue, true), tx(192, '3つの距離の合計 ＝ 正三角形の高さ', 13, C.red, true), tx(218, '答え 1.7cm', 14, C.green, true)]),
  },
], '点から3辺までの距離の合計は、正三角形の高さと同じ');

// ── nandai_sansu_14（さいころ状の立方体）──
const tcol = (k: number): [string, string] => (k === 3 ? [C.red, FILL.red] : k === 2 ? [C.main, FILL.yellow] : k === 1 ? [C.green, FILL.green] : [C.blue, FILL.blue]);
const kOf = (z: number, i: number, j: number): number => [z, i, j].filter((v) => v === 0 || v === 2).length;
const layer = (z: number, x0: number, show_: (k: number) => boolean): E[] =>
  [0, 1, 2].flatMap((j) => [0, 1, 2].map((i) => {
    const k = kOf(z, i, j);
    const on = show_(k);
    const [c, f] = tcol(k);
    return bx(x0 + i * 28, 34 + j * 28, 28, 28, on ? String(k) : '', on ? c : C.gray, on ? f : FILL.gray, 12);
  }));
const layers3 = (show_: (k: number) => boolean): E[] => [lb(62, 24, '上の段', 11, C.ink, 'middle', true), ...layer(0, 20, show_), lb(157, 24, '中の段', 11, C.ink, 'middle', true), ...layer(1, 115, show_), lb(252, 24, '下の段', 11, C.ink, 'middle', true), ...layer(2, 210, show_)];
const nandaiS14 = show([
  {
    note: '小さい立方体27個で、3×3×3の大きい立方体をつくり、表面を赤くぬってから、もとの27個にばらします。赤い面の数が3面・2面・1面・0面のものは、それぞれ何個でしょう。大きい立方体を、上・中・下の3だんに分けて見ます。',
    add: F([...layers3(() => false)], [tx(150, '27個 ＝ 3だん × 9個', 14, C.blue, true), tx(180, '外に出ている面の数を数える', 13, C.gray)]),
  },
  {
    note: '❓どう数えればよい？→小さい立方体が大きい立方体のどの位置にあるかで、外に出る面の数が決まります。位置は「かど・辺のまんなか・面のまんなか・中心」の4種類です。',
    add: F([bx(20, 30, 130, 34, 'かど → 外に3面', C.red, FILL.red, 13), bx(170, 30, 130, 34, '辺のまんなか → 外に2面', C.main, FILL.yellow, 12), bx(20, 76, 130, 34, '面のまんなか → 外に1面', C.green, FILL.green, 12), bx(170, 76, 130, 34, '中心 → 外に0面', C.blue, FILL.blue, 13)], [tx(166, '位置で 赤い面の数が決まる', 14, C.blue, true)]),
  },
  {
    note: '❓3面赤は？→かどの小立方体は、外に3つの面が出ているので3面赤です。立方体のかどは8個（上の段に4つ、下の段に4つ）なので、3面赤は8個です。',
    add: F([...layers3((k) => k === 3)], [eb(148, '3面赤 ＝ かど ＝ 8個', C.red, FILL.red, 16, 30), tx(202, '上の段に4個、下の段に4個', 13, C.gray)]),
  },
  {
    note: '❓2面赤は？→辺のまんなかの小立方体は、2つの面が外に出ています。立方体の辺は12本で、1本に1個ずつなので、2面赤は12個です（上の段に4個、中の段に4個、下の段に4個）。',
    add: F([...layers3((k) => k === 2)], [eb(148, '2面赤 ＝ 辺の数 12本 ＝ 12個', C.main, FILL.yellow, 15, 30), tx(202, '1本の辺に1個ずつ', 13, C.gray)]),
  },
  {
    note: '❓1面赤は？→面のまんなかの小立方体は、1つの面だけが外に出ています。立方体の面は6つで、1つの面に1個ずつなので、1面赤は6個です（上の段に1個、中の段に4個、下の段に1個）。',
    add: F([...layers3((k) => k === 1)], [eb(148, '1面赤 ＝ 面の数 6つ ＝ 6個', C.green, FILL.green, 15, 30), tx(202, '1つの面に1個ずつ', 13, C.gray)]),
  },
  {
    note: '❓0面赤は？→中の段のまんなかの1個は、どの面も外に出ていません。だから赤い面が0面で、1個です。',
    add: F([...layers3((k) => k === 0)], [eb(148, '0面赤 ＝ 中心 ＝ 1個', C.blue, FILL.blue, 16, 30)]),
  },
  {
    note: '確かめ（検算）をします。8＋12＋6＋1＝27で、小さい立方体の総数と一致します。',
    add: F([...layers3(() => true)], [eb(148, '8 ＋ 12 ＋ 6 ＋ 1 ＝ 27個 ○', C.green, FILL.green, 16, 30), tx(202, '答え 3面8個　2面12個　1面6個　0面1個', 12, C.green, true)]),
  },
  {
    note: '❓よくあるまちがいは？→辺のまんなかの個数を、面の数（6）と取りちがえたり、かどの数（8）と混ぜたりすることです。「かど8・辺12・面6・中心1」と、場所の名前といっしょに覚えると混ざりません。',
    add: F([...flow(['かど\n8', '辺\n12', '面\n6', '中心\n1'], 34, { h: 56, color: C.blue, fill: FILL.blue, size: 13, gap: 16 }).flat()], [tx(130, '場所の名前といっしょに覚える', 13, C.blue, true), tx(166, '3面・2面・1面・0面 ＝ 8・12・6・1', 14, C.green, true)]),
  },
], '場所ごと（かど・辺・面・中心）に分けて数える');

export const figuresSchoolChugaku03: Record<string, Figure> = {
  'otani_sansu_01': otani01,
  'otani_sansu_05': otani05,
  'otani_sansu_r02': otaniR02,
  'tokyo_meidai_sansu_01': meidaiS01,
  'tokyo_meidai_sansu_02': meidaiS02,
  'tokyo_hosei_sansu_02': hoseiS02,
  'tokyo_meidai_sansu_03': meidaiS03,
  'tokyo_hosei_sansu_01': hoseiS01,
  'tokyo_chuo_sansu_02': chuoS02,
  'tokyo_chuo_sansu_03': chuoS03,
  'tokyo_aoyama_sansu_01': aoyamaS01,
  'tokyo_chuo_rika_01': chuoR01,
  'otani_rika_r03': otaniR03,
  'tokyo_meidai_rika_01': meidaiR01,
  'tokyo_meidai_rika_02': meidaiR02,
  'tokyo_chuo_max_03': chuoMax03,
  'nandai_rika_02': nandaiR02,
  'tokyo_aoyama_rika_01': aoyamaR01,
  'tokyo_hosei_rika_01': hoseiRi01,
  'tokyo_gakushuin_rika_01': gakushuinR01,
  'tokyo_gakushuin_sansu_02': gakushuinS02,
  'tokyo_meidai_max_01': meidaiMax01,
  'tokyo_aoyama_max_01': aoyamaMax01,
  'tokyo_aoyama_max_03': aoyamaMax03,
  'nandai_sansu_04': nandaiS04,
  'nandai_sansu_06': nandaiS06,
  'nandai_sansu_11': nandaiS11,
  'nandai_sansu_14': nandaiS14,
  'nandai_sansu_20': nandaiS20,
  'nandai_rika_01': nandaiR01,
};
