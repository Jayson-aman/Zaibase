// 入試傾向問題（中学受験・算数 第07批）の動く図解スライド。
// キーは問題 id。「なぜ？→答え→では、なぜ？」の連鎖で、根っこまでたどる。
// 画面の上半分に図、下の帯（band）にそのスライドの式やひとこと、という配置。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, cover } from './diagram-kit';

type P = [number, number];
type E = DiagramElement;

/** 楕円（だえん）の点列。from〜to は度（数学の向き。180〜360 で下半分） */
const ell = (cx: number, cy: number, rx: number, ry: number, from = 0, to = 360, n = 28): P[] => {
  const out: P[] = [];
  for (let i = 0; i <= n; i++) {
    const a = ((from + ((to - from) * i) / n) * Math.PI) / 180;
    out.push([+(cx + rx * Math.cos(a)).toFixed(1), +(cy - ry * Math.sin(a)).toFixed(1)]);
  }
  return out;
};
const cell = (x: number, y: number, s: number, fill: string, color: string = C.gray): E =>
  pg([[x, y], [x + s, y], [x + s, y + s], [x, y + s]], color, fill);
/** 方眼（ますめ）。r0 行目から r1 行目の手前まで */
const cells = (c: number, r: number, x0: number, y0: number, s: number, fill: string, color: string = C.gray, r0 = 0, r1 = r): E[] => {
  const out: E[] = [];
  for (let j = r0; j < r1; j++) for (let i = 0; i < c; i++) out.push(cell(x0 + i * s, y0 + j * s, s, fill, color));
  return out;
};
/** 円柱（えんちゅう）。yt は上の楕円の中心、h は高さ（px） */
const cyl = (cx: number, yt: number, rx: number, ry: number, h: number, side: string, top: string, color: string = C.main): E[] => [
  pg([[cx - rx, yt], ...ell(cx, yt + h, rx, ry, 180, 360), [cx + rx, yt]], color, side),
  pg(ell(cx, yt, rx, ry), color, top),
];
/** 円すい。頂点 (cx,ya)、底面の楕円の中心 (cx,yb) */
const cone = (cx: number, ya: number, yb: number, rx: number, ry: number, side: string, color: string = C.main): E[] => [
  pg([[cx, ya], [cx - rx, yb], ...ell(cx, yb, rx, ry, 180, 360), [cx + rx, yb]], color, side),
  pg(ell(cx, yb, rx, ry, 0, 180, 16), color, side),
];
/** 直方体（ななめから見た図）。前の面 (x,y,w,h)、奥へ (dx,dy) */
const cub = (x: number, y: number, w: number, h: number, dx: number, dy: number, front: string, top: string, side: string, color: string = C.main): E[] => [
  pg([[x, y], [x + dx, y - dy], [x + w + dx, y - dy], [x + w, y]], color, top),
  pg([[x + w, y], [x + w + dx, y - dy], [x + w + dx, y + h - dy], [x + w, y + h]], color, side),
  pg([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], color, front),
];
/** 立方体・直方体の面に、n 等分の線を引く */
const cubGrid = (x: number, y: number, w: number, h: number, dx: number, dy: number, n: number, color: string = C.gray): E[] => {
  const out: E[] = [];
  for (let i = 1; i < n; i++) {
    const fx = (w * i) / n, fy = (h * i) / n, ex = (dx * i) / n, ey = (dy * i) / n;
    out.push(ln(x + fx, y, x + fx, y + h, color), ln(x, y + fy, x + w, y + fy, color));
    out.push(ln(x + fx, y, x + fx + dx, y - dy, color), ln(x + ex, y - ey, x + w + ex, y - ey, color));
    out.push(ln(x + w, y + fy, x + w + dx, y + fy - dy, color), ln(x + w + ex, y - ey, x + w + ex, y + h - ey, color));
  }
  return out;
};

/** 下の帯：式を1つ、枠に入れる */
const eq = (t: string, col: string = C.green, fill: string = FILL.green, size = 15): E[] => band(150, bx(24, 168, 272, 40, t, col, fill, size));
/** 下の帯：ひとこと */
const say = (t: string, col: string = C.ink, y = 180, size = 13): E[] => band(150, lb(160, y, t, size, col, 'middle', true));
/** 下の帯：ひとこと＋式 */
const both = (l1: string, l2: string, col: string = C.green, fill: string = FILL.green): E[] =>
  band(150, lb(160, 166, l1, 12, C.ink, 'middle', true), bx(24, 178, 272, 40, l2, col, fill, 15));

// ───────── 長方形の面積 ─────────
const R3 = { x: 76, y: 28, s: 14 };
const rect003 = (): E[] => [pg([[R3.x, R3.y], [R3.x + 168, R3.y], [R3.x + 168, R3.y + 112], [R3.x, R3.y + 112]], C.main, FILL.warm), lb(R3.x + 84, 18, '横12cm', 11, C.main), lb(R3.x - 6, R3.y + 56, 'たて8cm', 11, C.main, 'end')];
const f003 = show([
  { note: 'たて8cm、横12cmの長方形の面積（めんせき）を求めます。❓そもそも「面積」とは、何を数えたものでしょう。', add: [...rect003(), ...eq('たて8cm・横12cm の長方形', C.main, FILL.warm, 14)] },
  { note: '❓面積って何？→広さのことで、1辺1cmの正方形（1cm²）が何個しきつめられるかで表します。図の赤い正方形1つが1cm²です。', add: [cell(R3.x, R3.y, R3.s, FILL.red, C.red), lb(R3.x - 6, R3.y + 8, '1cm²→', 11, C.red, 'end'), ...say('1辺1cmの正方形 ＝ 1cm²', C.red)] },
  { note: '❓では、まず1段に何個ならぶ？→横の長さが12cmなので、1cmのますが横に12個ならびます。', add: [...cells(12, 8, R3.x, R3.y, R3.s, FILL.blue, C.blue, 0, 1), lb(R3.x + 176, R3.y + 8, '1段に 12個', 11, C.blue, 'start'), ...say('横に 12個ならぶ', C.blue)] },
  { note: '❓では、何段ならぶ？→たての長さが8cmなので、同じ段が8段かさなります。', add: [cover(246, R3.y - 2, 74, 18), ...cells(12, 8, R3.x, R3.y, R3.s, FILL.blue, C.blue, 1, 8), ...say('12個の段が 8段', C.blue)] },
  { note: '❓全部で何個？→12個が8段あるので、12×8＝96個。1個が1cm²だから、面積は96cm²です。', add: eq('12 × 8 ＝ 96個 → 96cm²') },
  { note: '❓では、なぜかけ算で数えるの？→「12個」を8回たす 12＋12＋…（8回）を、ひとまとめに書いたものがかけ算だからです。', add: [...[0, 1, 2, 3, 4, 5, 6, 7].map((j) => lb(R3.x + 176, R3.y + 7 + j * 14, '12', 9, C.green, 'start')), ...both('同じ数を何回もたす ＝ かけ算', '12＋12＋…＋12（8回）＝ 12×8')] },
  { note: '❓たてから数えたら？→たて1列は8個で、それが12列。8×12でも96個で同じになります。', add: [...cells(1, 8, R3.x, R3.y, R3.s, FILL.yellow, C.main), ...say('たてに数えても 8個が12列 → 8×12＝96', C.main)] },
  { note: '答えは96cm²。確かめ：周りの長さ（8＋12）×2＝40cmは「長さ」で、面積とは別の量です。面積の単位はcm²で区別します。', add: eq('答え 96cm²（cm² は面積の単位）') },
], '面積は1cm²のますの個数：12×8＝96');

// ───────── 比で分ける（3:5、合計160L） ─────────
const bx8 = (i: number) => 24 + 34 * i;
const boxes008 = (): E[] => [0, 1, 2, 3, 4, 5, 6, 7].map((i) => bx(bx8(i), 48, 34, 40, undefined, i < 3 ? C.blue : C.main, i < 3 ? FILL.blue : FILL.warm));
const f008 = show([
  { note: 'A地点とB地点の水の量の比が3:5で、合計は160Lです。B地点は何Lでしょう。❓比の「3」や「5」は、何を表しているのでしょう。', add: [ar(160, 34, 24, 34), ar(160, 34, 296, 34), lb(160, 22, '合計 160L', 12, C.ink, 'middle', true), ...boxes008(), lb(75, 104, 'A　3', 12, C.blue, 'middle', true), lb(211, 104, 'B　5', 12, C.main, 'middle', true), ...say('A：B ＝ 3：5、合計160L')] },
  { note: '❓3：5ってどういうこと？→全体を同じ大きさの箱8個に分けて、Aが3個ぶん、Bが5個ぶんという意味です。', add: [...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => lb(bx8(i) + 17, 62, '①', 12, C.ink)), ...say('3＋5＝8個ぶんに分ける')] },
  { note: '❓では3や5は何L？→Lの数そのものではなく、箱の「個数」です。箱1個が何Lかが分かれば、ぜんぶ分かります。', add: [lb(60, 132, '1個＝□L', 11, C.red, 'middle', true), ...say('箱1個ぶん ＝ □L を見つけたい', C.red)] },
  { note: '❓なぜ160÷8で1個ぶんが出るの？→8個ぶんをぜんぶあわせた量が160Lだから、8つに等分すれば1個ぶんになります。', add: [cover(10, 124, 130, 20), ...eq('160 ÷ 8 ＝ 20L（箱1個ぶん）', C.blue, FILL.blue)] },
  { note: '❓それぞれの箱の量は？→どの箱も1個ぶんは20Lです。', add: [...[0, 1, 2, 3, 4, 5, 6, 7].map((i) => lb(bx8(i) + 17, 80, '20L', 10, C.ink)), ...say('どの箱も 20L', C.blue)] },
  { note: '❓B地点は？→Bは箱5個ぶんなので、20×5＝100Lです。', add: [lb(211, 122, 'B＝20×5＝100L', 12, C.red, 'middle', true), ...eq('B ＝ 20 × 5 ＝ 100L', C.red, FILL.red)] },
  { note: '❓よくあるまちがいは？→比の数字5をそのままLにして「B＝5L」としてしまうことです。5は箱の個数だったので、20L×5個と考えます。', add: say('5は「5L」ではなく「箱5個」', C.red) },
  { note: '答えは100L。確かめ：Aは20×3＝60L。60＋100＝160Lで、合計と同じになります。', add: [lb(75, 122, 'A＝20×3＝60L', 12, C.blue, 'middle', true), ...eq('60＋100＝160L → 答え 100L')] },
], '比の合計で全体を割り、1個ぶんを出す');

// ───────── 三角形の面積 ─────────
const TB = { B: [80, 130] as P, Cc: [170, 130] as P, A: [130, 58] as P, H: [130, 130] as P, D: [220, 58] as P, G: [220, 130] as P };
const tri011 = (): E[] => [pg([TB.B, TB.Cc, TB.A], C.main, FILL.warm), ln(TB.A[0], TB.A[1], TB.H[0], TB.H[1], C.red, true)];
const f011 = show([
  { note: '底辺10cm、高さ8cmの三角形の面積（めんせき）を求めます。❓三角形はななめの形なので、ますを数えにくいです。どうすれば求められるでしょう。', add: [...tri011(), lb(125, 144, '底辺10cm', 11, C.main), lb(72, 98, '高さ8cm', 11, C.red, 'end'), ...say('底辺10cm・高さ8cm の三角形', C.main)] },
  { note: '❓どうやって求める？→面積の出し方を知っている形にかえます。同じ三角形をもう1つ、さかさまにしてくっつけると、平行四辺形（へいこうしへんけい）ができます。', add: [pg([TB.A, TB.D, TB.Cc], C.purple, FILL.purple), ...say('同じ三角形を逆さにしてくっつける', C.purple)] },
  { note: '❓では、平行四辺形の面積は？→左はしの三角形を右はしへ動かすと、たて8cm・横10cmの長方形になります。形をかえただけなので面積は変わりません。', add: [pg([TB.Cc, TB.G, TB.D], C.green, FILL.green), ln(TB.D[0], TB.D[1], TB.G[0], TB.G[1], C.green, true), ln(TB.H[0], TB.H[1], TB.G[0], TB.G[1], C.green, true), ...say('はしの三角形を動かすと 長方形に', C.green)] },
  { note: '❓長方形の面積は？→たて×横。底辺10cm×高さ8cm＝80cm²です。これが平行四辺形の面積でもあります。', add: eq('10 × 8 ＝ 80cm²（平行四辺形）') },
  { note: '❓では、三角形は？→平行四辺形は同じ三角形2つでできているので、三角形1つぶんは半分。80÷2＝40cm²です。', add: [pg([TB.B, TB.Cc, TB.A], C.red, FILL.red), ln(TB.A[0], TB.A[1], TB.H[0], TB.H[1], C.red, true), ...eq('80 ÷ 2 ＝ 40cm²', C.red, FILL.red)] },
  { note: '❓どんな三角形でも同じ？→はい。どんな三角形でも、同じものを逆さにつなげれば平行四辺形ができるので、「底辺×高さ÷2」がいつも使えます。', add: say('どの三角形でも 底辺×高さ÷2', C.purple) },
  { note: '答えは40cm²。確かめ：底辺を先に半分にして 10÷2×8＝5×8＝40cm²。÷2を忘れて80cm²としないこと。', add: eq('答え 40cm²（10÷2×8 でも 40）') },
], '三角形は、平行四辺形の半分');

// ───────── 正方形から円をくりぬく ─────────
const S12 = { x: 118, y: 30 };
const f012 = show([
  { note: '1辺14cmの正方形から、半径7cmの円を切り取った残りの面積を求めます（円周率3.14）。❓残りの形は、四すみの変わった形です。どう求めればいいでしょう。', add: [pg([[S12.x, S12.y], [S12.x + 84, S12.y], [S12.x + 84, S12.y + 84], [S12.x, S12.y + 84]], C.main, FILL.warm), ci(160, 72, 42, undefined, C.blue, FILL.blue), ln(160, 72, 202, 72, C.red), lb(181, 66, '7cm', 10, C.red), lb(160, 22, '14cm', 11, C.main), ...say('正方形14cm・円の半径7cm', C.main)] },
  { note: '❓残りの形は？→赤い点の四すみが、求めたい部分です。曲がった形なので、そのままでは計算できません。', add: [ci(124, 36, 4, undefined, C.red, C.red), ci(196, 36, 4, undefined, C.red, C.red), ci(124, 108, 4, undefined, C.red, C.red), ci(196, 108, 4, undefined, C.red, C.red), ...say('求めたいのは 四すみの部分', C.red)] },
  { note: '❓では、どうする？→「全体（正方形）から、いらない部分（円）を引く」と考えます。円は正方形にぴったり入る（円の直径14cm＝正方形の辺）ので、引き算で残りが出ます。まず正方形の面積です。', add: both('正方形の面積：1cm²のますが 14個×14段', '14 × 14 ＝ 196cm²') },
  { note: '❓円の面積は？→円の面積は「半径×半径×3.14」です。❓なぜ？→半径を1辺とする正方形（黄色）をつくると、円の面積はその正方形のちょうど3.14個ぶんになるからです。', add: [pg([[160, 72], [202, 72], [202, 30], [160, 30]], C.main, FILL.yellow), lb(181, 50, '半径×\n半径', 9, C.main), ...say('円 ＝ 半径×半径の正方形 の 3.14個ぶん', C.blue)] },
  { note: '❓半径はいくつ？→直径が14cmなので、半径は7cmです（半分にするのを忘れない）。7×7×3.14＝153.86cm²になります。', add: eq('7 × 7 × 3.14 ＝ 153.86cm²', C.blue, FILL.blue) },
  { note: '❓では、残りは？→正方形196cm²から円153.86cm²を引きます。', add: eq('196 − 153.86 ＝ 42.14cm²') },
  { note: '答えは42.14cm²。確かめ：円は正方形の3.14÷4＝0.785なので、残りは1−0.785＝0.215。196×0.215＝42.14で同じになります。', add: eq('196×0.215＝42.14 → 答え 42.14cm²') },
], '正方形−円。円の面積は 半径×半径×3.14');

// ───────── 直方体の体積 ─────────
const f013 = show([
  { note: 'たて5cm、横6cm、高さ4cmの直方体（ちょくほうたい）の体積（たいせき）を求めます。❓体積とは、何を数えたものでしょう。', add: [...cub(60, 70, 90, 60, 40, 30, FILL.warm, FILL.yellow, FILL.blue), lb(105, 143, '横6cm', 11, C.main), lb(54, 100, '高さ4cm', 11, C.main, 'end'), lb(196, 74, 'たて5cm', 10, C.main, 'start'), ...say('たて5cm・横6cm・高さ4cm', C.main)] },
  { note: '❓体積って何？→入れ物にどれだけ入るか、という大きさです。1辺1cmの立方体（1cm³）が何個入るかで表します。', add: [...fresh(), ...cub(130, 70, 30, 30, 14, 10, FILL.red, FILL.yellow, FILL.red, C.red), lb(160, 40, '1cm³', 13, C.red, 'middle', true), ...say('1辺1cmの立方体 ＝ 1cm³', C.red)] },
  { note: '❓まず、いちばん下の1段には何個入る？→上から見ると、横6個・たて5列。6×5＝30個ならびます（底の面積は30cm²）。', add: [...fresh(), ...cells(6, 5, 112, 24, 16, FILL.blue, C.blue), lb(160, 16, '横6個', 10, C.blue), lb(106, 64, 'たて5列', 10, C.blue, 'end'), ...both('上から見たところ（底面）', '6 × 5 ＝ 30個')] },
  { note: '❓では、それが何段ある？→高さが4cmなので、30個の段が4段かさなります。', add: [...fresh(), ...[0, 1, 2, 3].map((k) => bx(110, 24 + k * 26, 100, 22, '30個', C.blue, FILL.blue, 12)), lb(104, 75, '高さ4cm＝4段', 10, C.blue, 'end'), ...say('30個の段が 4段', C.blue)] },
  { note: '❓全部で何個？→30個が4段なので、30×4＝120個。1個が1cm³ですから、体積は120cm³です。', add: [...fresh(), ...[0, 1, 2, 3].map((k) => bx(110, 24 + k * 26, 100, 22, '30個', C.blue, FILL.blue, 12)), ...eq('30 × 4 ＝ 120cm³')] },
  { note: '❓だから体積は「底面積×高さ」になるの？→はい。底面積が「1段ぶんの個数」、高さが「段の数」だからです。たて×横×高さの3つをかけることになります。', add: [...fresh(), ...cub(60, 70, 90, 60, 40, 30, FILL.warm, FILL.yellow, FILL.blue), ...both('底面積（たて×横）×高さ', '5 × 6 × 4')] },
  { note: '答えは120cm³。確かめ：かける順番をかえても 6×4×5＝120で同じです。単位は3つの長さをかけたのでcm³になります。', add: [...fresh(), ...cub(60, 70, 90, 60, 40, 30, FILL.warm, FILL.yellow, FILL.blue), ...eq('答え 120cm³（6×4×5 でも 120）')] },
], '体積＝1段ぶんの個数（底面積）×段の数（高さ）');

// ───────── マッチ棒の規則性 ─────────
const match = (n: number, x0: number, yb: number, yt: number, s: number): { all: P[][]; } => {
  const pts: P[] = [];
  for (let j = 0; j <= n + 1; j++) pts.push([x0 + (j * s) / 2, j % 2 === 0 ? yb : yt]);
  const all: P[][] = [[pts[0], pts[1]], [pts[1], pts[2]], [pts[0], pts[2]]];
  for (let k = 2; k <= n; k++) all.push([pts[k], pts[k + 1]], [pts[k - 1], pts[k + 1]]);
  return { all };
};
const stick = (p: P[], color: string, w = 3): E => ln(p[0][0], p[0][1], p[1][0], p[1][1], color, false, w);
const m3 = match(3, 70, 110, 70, 40);
const m10 = match(10, 50, 110, 70, 40);
const f015 = show([
  { note: 'マッチ棒で正三角形を横一列につなげます。1個で3本、2個で5本、3個で7本。❓10個では何本いるでしょう。まず、増え方を調べます。', add: [...m3.all.map((p) => stick(p, C.main)), ...say('1個→3本　2個→5本　3個→7本', C.main)] },
  { note: '❓何本ずつ増えている？→3本→5本→7本と、2本ずつ増えています。図では、2個目で足した2本が赤、3個目で足した2本が紫です。', add: [stick(m3.all[3], C.red, 4), stick(m3.all[4], C.red, 4), stick(m3.all[5], C.purple, 4), stick(m3.all[6], C.purple, 4), ...say('新しい三角形ごとに 2本ふえる', C.red)] },
  { note: '❓なぜ2本ずつ？→正三角形は3本でできますが、新しい三角形は前の三角形と1本を共有（きょうゆう）します（緑の棒）。だから足すのは3−1＝2本だけです。', add: [stick(m3.all[1], C.green, 5), lb(120, 130, '共有する1本', 11, C.green, 'middle', true), ...say('3本のうち1本は もうある → 足すのは2本', C.green)] },
  { note: '❓10個ならどうなる？→1個目は3本そのまま（緑）。そこから9回、2本ずつ足します（赤）。', add: [...fresh(), ...m10.all.map((p, i) => stick(p, i < 3 ? C.green : C.red, 3)), ...both('はじめの3本 ＋ 2本を何回か足す', '3 ＋ 2×□回')] },
  { note: '❓なぜ10回ではなく9回？→増えるのは2個目からだからです。1個目は「はじめの3本」で数えているので、足す回数は10−1＝9回です。', add: [...fresh(), ...m10.all.map((p, i) => stick(p, i < 3 ? C.green : C.red, 3)), ...say('足す回数 ＝ 10−1 ＝ 9回（1個目は数えない）', C.red)] },
  { note: '❓計算すると？→3＋2×9＝3＋18＝21本です。', add: [...fresh(), ...m10.all.map((p, i) => stick(p, i < 3 ? C.green : C.red, 3)), ...eq('3 ＋ 2×9 ＝ 3 ＋ 18 ＝ 21本')] },
  { note: '答えは21本。確かめ：ぎざぎざの線に10＋1本、ななめの線に10本と数えなおすと、2×10＋1＝21本で同じになります。', add: [...fresh(), ...m10.all.map((p) => stick(p, C.main, 3)), ...eq('2×10＋1＝21 → 答え 21本')] },
], '1個ふえるごとに2本ふえる：3＋2×(10−1)');

// ───────── 相似と面積比（DE∥BC） ─────────
const T19 = { A: [160, 22] as P, B: [70, 128] as P, Cc: [250, 128] as P, D: [124, 64] as P, E: [196, 64] as P };
const tri019 = (): E[] => [pg([T19.A, T19.B, T19.Cc], C.main, FILL.warm), ln(T19.D[0], T19.D[1], T19.E[0], T19.E[1], C.blue, false, 2.5), lb(160, 12, 'A', 11, C.ink, 'middle', true), lb(60, 138, 'B', 11, C.ink, 'middle', true), lb(260, 138, 'C', 11, C.ink, 'middle', true), lb(113, 68, 'D', 11, C.ink, 'middle', true), lb(207, 68, 'E', 11, C.ink, 'middle', true)];
const f019 = show([
  { note: '三角形ABCの辺AB上にDをとりAD:DB=2:3、Dを通ってBCに平行な直線でACとの交点をEとします。△ABC＝75cm²のとき、△ADEの面積を求めます。', add: [...tri019(), lb(130, 38, '2', 11, C.red, 'middle', true), lb(86, 96, '3', 11, C.red, 'middle', true), lb(160, 112, '75cm²', 12, C.ink, 'middle', true), ...say('AD：DB ＝ 2：3、△ABC ＝ 75cm²')] },
  { note: '❓△ADEと△ABCは、なぜ同じ形（相似＝そうじ）といえる？→DEとBCは平行なので、角Dと角Bは同じ大きさです（同位角）。角Aは共通。3つの角がそろうので、拡大・縮小の関係になります。', add: [pg([T19.A, T19.D, T19.E], C.blue, FILL.blue), sc(124, 64, 14, 0, 49.7, C.red, FILL.red), sc(70, 128, 14, 0, 49.7, C.red, FILL.red), sc(160, 22, 14, 229.7, 310.3, C.green, FILL.green), ...say('角D＝角B、角Aは共通 → 同じ形（相似）', C.blue)] },
  { note: '❓相似な形の「長さの比」は？→ADとABの比です。AD:DB＝2:3なので、ABぜんたいは2＋3＝5。だから AD:AB＝2:5 です。', add: [ln(T19.A[0], T19.A[1], T19.D[0], T19.D[1], C.red, false, 4), ln(T19.D[0], T19.D[1], T19.B[0], T19.B[1], C.blue, false, 4), ...eq('AD：AB ＝ 2：(2＋3) ＝ 2：5', C.red, FILL.red)] },
  { note: '❓では、面積の比も2:5？→ちがいます。長さが2倍・5倍なら、たても横も同じ割合で変わります。1辺2の正方形は4個、1辺5の正方形は25個ぶん。面積は「2×2：5×5」です。', add: [...fresh(), ...cells(2, 2, 40, 68, 16, FILL.blue, C.blue), ...cells(5, 5, 130, 20, 16, FILL.red, C.red), lb(56, 112, '長さ2', 11, C.blue), lb(170, 112, '長さ5', 11, C.red), lb(56, 126, '2×2＝4個', 11, C.blue), lb(170, 126, '5×5＝25個', 11, C.red), ...say('面積の比 ＝ 長さの比を2回かける', C.ink)] },
  { note: '❓では△ADEと△ABCの面積の比は？→相似比2:5を2回かけて、4:25です。', add: [...fresh(), ...tri019(), pg([T19.A, T19.D, T19.E], C.blue, FILL.blue), lb(160, 52, '4', 13, C.red, 'middle', true), lb(160, 104, '25（全体）', 12, C.ink, 'middle', true), ...eq('△ADE：△ABC ＝ 4：25', C.blue, FILL.blue)] },
  { note: '❓75cm²は、比のどれにあたる？→全体の25にあたります。だから比の1あたり75÷25＝3cm²。△ADEは4にあたるので、3×4＝12cm²です。', add: [...fresh(), ...tri019(), pg([T19.A, T19.D, T19.E], C.blue, FILL.blue), lb(160, 52, '12', 13, C.red, 'middle', true), lb(160, 104, '75', 12, C.ink, 'middle', true), ...both('25 → 75cm²　だから 1 → 75÷25＝3', '3 × 4 ＝ 12cm²')] },
  { note: '答えは12cm²。確かめ：台形DBCEは 25−4＝21にあたるので3×21＝63cm²。12＋63＝75で、もとの面積と同じになります。', add: [...fresh(), ...tri019(), pg([T19.A, T19.D, T19.E], C.blue, FILL.blue), lb(160, 52, '12', 13, C.red, 'middle', true), lb(160, 104, '63', 12, C.ink, 'middle', true), ...eq('12＋63＝75 → 答え 12cm²')] },
], '相似：長さの比2:5 → 面積の比 4:25');

// ───────── 水の移しかえ（円柱→直方体） ─────────
const f021 = show([
  { note: '底面の半径3cm・高さ10cmの円柱の水を、底面が1辺6cmの正方形・高さ8cmの直方体の容器にうつします。水の深さを小数第2位を四捨五入して求めます。', add: [...cyl(80, 40, 27, 8, 90, FILL.blue, FILL.blue, C.blue), ...cub(190, 68, 54, 72, 24, 14, FILL.warm, FILL.yellow, FILL.gray), ar(120, 100, 184, 100, C.main), lb(80, 26, '半径3cm', 10, C.blue), lb(46, 90, '高さ10cm', 10, C.blue, 'end'), lb(217, 44, '6cm×6cm', 10, C.main), lb(274, 110, '高さ8cm', 10, C.main, 'start'), ...say('水をうつしかえる', C.main)] },
  { note: '❓うつしかえたら、水の量はどうなる？→水をこぼさなければ、増えも減りもしません。体積（たいせき）は同じです。まず円柱の中の水の体積を出します。', add: [lb(152, 82, '体積は同じ', 11, C.red, 'middle', true), ...say('水の体積は かわらない', C.red)] },
  { note: '❓円柱の体積は？→底面と同じ円の板を、高さぶん（10cm）つみ重ねたものなので「底面積×高さ」。底面積は 半径×半径×3.14＝3×3×3.14＝28.26cm²です。', add: [ln(53, 58, 107, 58, C.gray, true), ln(53, 76, 107, 76, C.gray, true), ln(53, 94, 107, 94, C.gray, true), ln(53, 112, 107, 112, C.gray, true), ...both('底面積 ＝ 半径×半径×3.14', '3 × 3 × 3.14 ＝ 28.26cm²')] },
  { note: '❓では、水の体積は？→底面積28.26cm²が10cm分あるので、28.26×10＝282.6cm³です。', add: eq('28.26 × 10 ＝ 282.6cm³', C.blue, FILL.blue) },
  { note: '❓直方体にうつすと、深さはどう決まる？→水の体積は「底面積×深さ」です。直方体の底面積は6×6＝36cm²なので、36×□＝282.6の□が深さです。', add: [pg([[190, 69], [244, 69], [244, 140], [190, 140]], C.blue, FILL.blue), pg([[244, 69], [268, 55], [268, 126], [244, 140]], C.blue, FILL.blue), lb(217, 106, '深さ□cm', 11, C.red, 'middle', true), ...both('底面積 6×6＝36cm²', '36 × □ ＝ 282.6')] },
  { note: '❓□はどう求める？→かけ算の逆はわり算です。□＝282.6÷36＝7.85cmになります。', add: eq('□ ＝ 282.6 ÷ 36 ＝ 7.85cm', C.red, FILL.red) },
  { note: '❓小数第2位を四捨五入すると？→7.85の2けた目は5なので切り上げて7.9cm。容器の高さ8cm以下なので、あふれません。', add: eq('7.85 → 四捨五入 → 7.9cm', C.main, FILL.warm) },
  { note: '答えは7.9cm。確かめ：36×7.85＝282.6cm³で、もとの水の体積と同じです。', add: eq('36×7.85＝282.6 → 答え 7.9cm') },
], '水の体積は同じ：円柱の体積÷直方体の底面積');

// ───────── 直角三角形を回転 ─────────
const Q27 = { P: [110, 30] as P, Q: [110, 102] as P, R: [164, 102] as P, R2: [56, 102] as P };
const outline = (pts: P[], color: string, dashed = false, width = 1.6): E[] => pts.slice(1).map((p, i) => ln(pts[i][0], pts[i][1], p[0], p[1], color, dashed, width));
const tri027 = (): E[] => [pg([Q27.P, Q27.Q, Q27.R], C.main, FILL.warm)];
const f027 = show([
  { note: '直角をはさむ2辺が3cmと4cmの直角三角形を、4cmの辺を軸にして1回転させます。どんな立体ができるでしょう。', add: [...tri027(), lb(104, 78, '4cm', 11, C.main, 'end'), lb(137, 128, '3cm', 11, C.main), ...say('直角をはさむ 3cm と 4cm', C.main)] },
  { note: '❓回転させると、何が動いて何が動かない？→軸にした4cmの辺は、その場にとどまって動きません。まわるのは、軸からはなれた部分だけです。', add: [ln(Q27.P[0], Q27.P[1], Q27.Q[0], Q27.Q[1], C.red, false, 4), lb(110, 20, '軸（動かない）', 10, C.red, 'middle', true), ...say('4cmの辺は軸 ＝ 動かない', C.red)] },
  { note: '❓では、軸に直角な3cmの辺は？→軸から3cmはなれたまま1周するので、半径3cmの円をえがきます。これが立体の底面になります。', add: [...outline(ell(110, 102, 54, 14), C.blue, true, 2), lb(200, 114, '半径3cmの円', 10, C.blue, 'start'), ...say('3cmの辺は 円をえがく', C.blue)] },
  { note: '❓斜辺（ななめの辺）は？→一方のはしは軸の頂点に、もう一方のはしは円のふちにあります。回ると、頂点と円のふちをむすぶ面（側面）をえがきます。', add: [pg([Q27.P, Q27.Q, Q27.R2], C.main, FILL.warm), ...[20, 60, 100, 140, 160].map((a) => { const p = ell(110, 102, 54, 14, a, a, 1)[0]; return ln(110, 30, p[0], p[1], C.purple, true); }), ...say('斜辺は 頂点と円のふちをむすぶ', C.purple)] },
  { note: '❓円柱や球にならないのはなぜ？→円柱は長方形を回したときにできます（軸と平行な辺があり、上にも円ができる）。この三角形は軸と平行な辺がなく、軸の上の1点にとがって終わるので、円柱ではありません。', add: [...fresh(), ...cyl(80, 36, 26, 8, 60, FILL.blue, FILL.blue, C.blue), ...cone(240, 28, 96, 40, 10, FILL.warm), lb(80, 122, '長方形を回す → 円柱', 10, C.blue), lb(240, 122, '直角三角形を回す → 円すい', 10, C.main), ...say('上がとがる形は 円すい', C.main)] },
  { note: '❓できた立体のようすは？→軸の4cmが高さ、3cmが底面の半径の円すい（えんすい）です。', add: [...fresh(), ...cone(160, 26, 100, 54, 14, FILL.warm), ln(160, 26, 160, 100, C.red, true), ln(160, 100, 214, 100, C.blue), lb(166, 66, '4cm', 10, C.red, 'start', true), lb(187, 94, '3cm', 10, C.blue), ...say('底面の半径3cm・高さ4cm の円すい', C.main)] },
  { note: '答えは円すい。確かめ：長方形を回せば円柱、半円を直径を軸に回せば球、直角三角形を直角をはさむ辺を軸に回せば円すい、と覚えておきます。', add: [...fresh(), ...cone(160, 26, 100, 54, 14, FILL.warm), ...eq('答え 円すい', C.main, FILL.warm)] },
], '直角三角形を1辺を軸に回すと円すい');

// ───────── 定価 ─────────
const pw = 22;
const f028 = show([
  { note: '原価800円の品物に、原価の2割の利益を見こんで定価をつけます。定価はいくらでしょう。❓まず「原価」を箱にして考えます（10個の青い箱が原価800円）。', add: [...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => bx(28 + i * pw, 56, pw, 40, undefined, C.blue, FILL.blue)), lb(138, 44, '原価 800円', 12, C.blue, 'middle', true), ...say('原価800円に、原価の2割を足す', C.main)] },
  { note: '❓「2割」って何？→「割」は、全体を10に分けたうちのいくつぶんか、という言い方です。1割は10分の1（0.1）。2割は、原価の箱2個ぶんです（赤い箱）。', add: [...[0, 1].map((i) => bx(28 + (10 + i) * pw, 56, pw, 40, undefined, C.red, FILL.red)), lb(270, 44, '利益 2割', 11, C.red, 'middle', true), ...say('1割＝10に分けた1つぶん', C.red)] },
  { note: '❓では、1割は何円？→原価800円を10に分ければ、箱1個ぶんは800÷10＝80円です。', add: [...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => lb(28 + i * pw + pw / 2, 76, '80', 9, C.ink)), ...eq('800 ÷ 10 ＝ 80円（1割）', C.blue, FILL.blue)] },
  { note: '❓利益の2割は？→箱2個ぶんなので、80×2＝160円です（800×0.2でも同じ）。', add: [lb(270, 112, '80×2＝160円', 11, C.red, 'middle', true), ...eq('利益 ＝ 80 × 2 ＝ 160円', C.red, FILL.red)] },
  { note: '❓定価は？→定価は「原価に利益を足した金額」です。800＋160＝960円。図では、青と赤の箱をぜんぶあわせた長さです。', add: [ar(160, 130, 28, 130, C.main), ar(160, 130, 292, 130, C.main), lb(160, 141, '定価', 10, C.main), ...eq('800 ＋ 160 ＝ 960円')] },
  { note: '❓もっと速い求め方は？→箱は10＋2＝12個ぶん。つまり定価は原価の「1.2倍」です。800×1.2＝960円で、同じ答えになります。', add: both('原価1 ＋ 利益0.2 ＝ 1.2倍', '800 × 1.2 ＝ 960円', C.purple, FILL.purple) },
  { note: '❓よくあるまちがいは？→「2割引き」とまちがえて、800×0.8＝640円とすることです。ここは見こむ（足す）ので、引きません。', add: say('「2割見こむ」は足す。「2割引き」は引く', C.red) },
  { note: '答えは960円。確かめ：1個ぶん80円が12個で、80×12＝960円です。', add: eq('80 × 12 ＝ 960 → 答え 960円') },
], '定価＝原価＋利益（原価の1.2倍）');

// ───────── 水そう（満水を24とおく） ─────────
const tank29 = (filled: number): E[] => {
  const out: E[] = [];
  for (let k = 0; k < 24; k++) out.push(cell(40 + (k % 12) * 20, 40 + Math.floor(k / 12) * 20, 20, k < filled ? FILL.blue : FILL.gray, k < filled ? C.blue : C.gray));
  return out;
};
const f029 = show([
  { note: 'ある水そうを満水にするのに、A管だけだと8分、B管だけだと12分かかります。はじめ2本で4分、そのあとB管だけで満水にします。全部で何分かかるでしょう。', add: [...tank29(0), lb(160, 30, '水そう（満水）', 11, C.ink, 'middle', true), lb(160, 100, 'A管だけ 8分　B管だけ 12分', 12, C.main, 'middle', true), lb(160, 122, '2本で4分 → A管を止める → B管だけ', 12, C.main), ...say('満水まで：A 8分・B 12分')] },
  { note: '❓そのままだと、速さをくらべにくいです。どうする？→満水の量を数字にします。8でも12でもわりきれる24にすると、1分に入る量が整数で出ます。図は、24このますで満水です。', add: [cover(60, 22, 200, 16), cover(0, 88, 320, 62), lb(160, 30, '満水 ＝ 24', 12, C.red, 'middle', true), lb(160, 104, 'A：24÷8＝3　B：24÷12＝2', 12, C.ink, 'middle', true), ...say('満水を24とおく（8と12でわれる数）', C.red)] },
  { note: '❓1分に入る量は？→A管は24÷8＝3、B管は24÷12＝2。2本そろえば、1分に3＋2＝5入ります。', add: [cover(0, 88, 320, 62), ...eq('A＝3　B＝2　→　2本で 1分に5', C.blue, FILL.blue)] },
  { note: '❓2本で4分入れると、どれだけたまる？→1分に5ずつ、4分で5×4＝20。24のうち20ます（青）まで入りました。', add: [...tank29(20), ...eq('(3 ＋ 2) × 4 ＝ 20')] },
  { note: '❓残りは？→満水24から20を引いて、24−20＝4。あと4ます（赤）です。', add: [cell(40 + 8 * 20, 60, 20, FILL.red, C.red), cell(40 + 9 * 20, 60, 20, FILL.red, C.red), cell(40 + 10 * 20, 60, 20, FILL.red, C.red), cell(40 + 11 * 20, 60, 20, FILL.red, C.red), ...eq('24 − 20 ＝ 4（残り）', C.red, FILL.red)] },
  { note: '❓残りの4は、どの管で入れる？→A管は止めたので、B管だけです。Bは1分に2入るので、4÷2＝2分かかります。', add: [lb(250, 100, 'Bだけ：1分に2', 11, C.main, 'middle', true), ...eq('4 ÷ 2 ＝ 2分（B管だけ）', C.main, FILL.warm)] },
  { note: '❓全部で何分？→はじめの4分と、あとの2分を足して、4＋2＝6分です。止めたあとを2本ぶんで計算しないように注意します。', add: eq('4 ＋ 2 ＝ 6分') },
  { note: '答えは6分。確かめ：Aは4分だけ働いて3×4＝12、Bは6分働いて2×6＝12。12＋12＝24で、ちょうど満水です。', add: eq('12＋12＝24 → 答え 6分') },
], '満水を24とおくと、1分の量が整数で出る');

// ───────── 円柱の展開図 ─────────
const f033 = show([
  { note: '底面の半径2cm、高さ5cmの円柱（えんちゅう）の展開図（てんかいず）で、側面になる長方形の横の長さを求めます（円周率3.14）。', add: [...cyl(90, 44, 30, 9, 75, FILL.warm, FILL.yellow), lb(90, 22, '半径2cm', 10, C.main), lb(54, 90, '高さ5cm', 10, C.main, 'end'), ...say('半径2cm・高さ5cm の円柱', C.main)] },
  { note: '❓展開図って何？→立体を切り開いて平らにした図です。円柱の側面をたてに1か所切って開くと、どんな形になるでしょう。→長方形になります。', add: [ln(120, 44, 120, 119, C.red, true, 2.5), ar(132, 82, 160, 82, C.red), pg([[165, 50], [290, 50], [290, 100], [165, 100]], C.main, FILL.warm), lb(228, 75, '長方形', 12, C.main, 'middle', true), ...say('側面は 切り開くと長方形', C.main)] },
  { note: '❓長方形のたては？→切り開いたのは、たて（高さ）の向きなので、たての長さは円柱の高さ5cmと同じです。', add: [ar(160, 75, 160, 50, C.red), ar(160, 75, 160, 100, C.red), lb(154, 62, '5cm', 11, C.red, 'end', true), ...say('たて ＝ 高さ ＝ 5cm', C.red)] },
  { note: '❓では、横の長さは？→側面は、底面のふちにそってぐるっと1周まきついていました。だから横の長さは、底面のふち1周ぶん、つまり円周です。円を転がすと、1回転で円周の長さだけ進みます。', add: [...fresh(), pg([[50, 30], [175.6, 30], [175.6, 80], [50, 80]], C.main, FILL.warm), lb(112, 55, '横 ？cm', 12, C.main, 'middle', true), ln(50, 126, 175.6, 126, C.gray), ci(70, 106, 20, undefined, C.blue, FILL.blue), ...[50, 90, 130, 170].map((x) => ln(x, 122, x, 130, C.ink)), lb(70, 138, '直径①', 9, C.blue), lb(110, 138, '直径②', 9, C.blue), lb(150, 138, '直径③', 9, C.blue), lb(174, 143, '少し', 9, C.red), ...say('横 ＝ 底面の円周（1回転で進む長さ）', C.blue)] },
  { note: '❓円周はどう出す？→円周は直径の約3.14倍（円周率）。直径は半径2cmの2倍で4cmなので、4×3.14＝12.56cmです。図でも、直径3つ分より少し長くなっています。', add: [...fresh(), pg([[50, 40], [175.6, 40], [175.6, 90], [50, 90]], C.main, FILL.warm), lb(112, 65, '12.56cm', 13, C.main, 'middle', true), ...both('円周 ＝ 直径 × 3.14（直径＝2×2＝4）', '4 × 3.14 ＝ 12.56cm')] },
  { note: '❓よくあるまちがいは？→半径2cmのまま使って「2×3.14」としたり、直径や半径をそのまま横の長さにすることです。円周は、必ず直径×3.14で求めます。', add: [...fresh(), pg([[50, 40], [175.6, 40], [175.6, 90], [50, 90]], C.main, FILL.warm), lb(112, 65, '12.56cm', 13, C.main, 'middle', true), ...say('半径2cmのまま×3.14 ではない（直径4cmを使う）', C.red)] },
  { note: '答えは12.56cm。確かめ：たて5cm、横12.56cmの長方形なので、側面積は5×12.56＝62.8cm²です。', add: [...fresh(), pg([[50, 40], [175.6, 40], [175.6, 90], [50, 90]], C.main, FILL.warm), lb(112, 65, '5cm × 12.56cm', 12, C.main, 'middle', true), ...eq('答え 12.56cm（側面積 62.8cm²）')] },
], '側面の横の長さ ＝ 底面の円周 ＝ 直径×3.14');

// ───────── 立方体の展開図の面積 ─────────
const X38 = 100;
const cross38 = (fill: string, color: string = C.main): E[] => [
  cell(X38 + 30, 20, 30, fill, color), cell(X38, 50, 30, fill, color), cell(X38 + 30, 50, 30, fill, color), cell(X38 + 60, 50, 30, fill, color), cell(X38 + 90, 50, 30, fill, color), cell(X38 + 30, 80, 30, fill, color),
];
const f038 = show([
  { note: '1辺が4cmの立方体（りっぽうたい）の展開図（てんかいず）全体の面積を求めます。❓展開図とは、どんな図でしょう。', add: [...cub(100, 50, 60, 60, 30, 22, FILL.warm, FILL.yellow, FILL.blue), lb(130, 122, '4cm', 11, C.main), ...say('1辺4cmの立方体', C.main)] },
  { note: '❓展開図って何？→立方体のへりを切って、ぜんぶつながったまま平らに広げた図です。十字の形は、その1つです。', add: [...fresh(), ...cross38(FILL.warm), ...say('切り開いて 平らにした図', C.main)] },
  { note: '❓面はいくつある？→立方体は、上・下・前・うしろ・左・右の6つの面でできています。展開図にも正方形が6つあります。', add: [...[1, 2, 3, 4, 5, 6].map((n) => lb([X38 + 45, X38 + 15, X38 + 45, X38 + 75, X38 + 105, X38 + 45][n - 1], [35, 65, 65, 65, 65, 95][n - 1], String(n), 13, C.ink, 'middle', true)), ...say('正方形が 6つ', C.ink)] },
  { note: '❓1つの面の面積は？→1辺4cmの正方形なので、4×4＝16cm²です。', add: [cell(X38 + 30, 20, 30, FILL.red, C.red), lb(X38 + 45, 35, '16', 13, C.red, 'middle', true), ...eq('4 × 4 ＝ 16cm²（1つの面）', C.red, FILL.red)] },
  { note: '❓6つの面は、ぜんぶ同じ大きさ？→立方体は、どの辺も同じ長さです。だから6つの面はすべて、同じ大きさの正方形（16cm²）です。', add: [...cross38(FILL.blue, C.blue), ...[1, 2, 3, 4, 5, 6].map((n) => lb([X38 + 45, X38 + 15, X38 + 45, X38 + 75, X38 + 105, X38 + 45][n - 1], [35, 65, 65, 65, 65, 95][n - 1], '16', 12, C.ink, 'middle', true)), ...say('6つとも 16cm²', C.blue)] },
  { note: '❓展開図全体の面積は？→切り開いても紙の広さは変わりません。16cm²が6つなので、16×6＝96cm²。これは立方体の表面積と同じです。', add: eq('16 × 6 ＝ 96cm²') },
  { note: '答えは96cm²。確かめ：十字の展開図は、たて3ます・横4ますの長方形（12ます）の中に6ますが入り、あと6ますがあいています。16×12−16×6＝192−96＝96で同じです。', add: [...outline([[X38, 20], [X38 + 120, 20], [X38 + 120, 110], [X38, 110], [X38, 20]], C.red, true, 2), ...eq('192 − 96 ＝ 96 → 答え 96cm²')] },
], '立方体の展開図の面積 ＝ 1つの面 × 6');

// ───────── 円すいの展開図（中心角） ─────────
const f042 = show([
  { note: '底面の半径3cm・高さ4cmの円すい（えんすい）の側面を広げると扇形（おうぎがた）になります。その中心角は何度でしょう。❓まず、扇形の半径にあたる、ななめの長さ（母線＝ぼせん）を知る必要があります。', add: [...cone(110, 30, 102, 54, 14, FILL.warm), ln(110, 30, 110, 102, C.red, true), ln(110, 102, 164, 102, C.blue), ln(110, 30, 164, 102, C.purple, false, 2.5), lb(114, 66, '4cm', 10, C.red, 'start', true), lb(137, 94, '3cm', 10, C.blue), lb(142, 56, '母線 ？', 10, C.purple, 'start', true), ...say('半径3cm・高さ4cm の円すい', C.main)] },
  { note: '❓母線は何cm？→半径3cm・高さ4cm・母線が直角三角形になります。3cmと4cmの直角三角形のななめの辺は5cm（3:4:5の直角三角形）です。', add: [...fresh(), pg([Q27.P, Q27.Q, Q27.R], C.main, FILL.warm), lb(104, 66, '4cm', 11, C.red, 'end'), lb(137, 116, '3cm', 11, C.blue), lb(146, 62, '5cm（母線）', 11, C.purple, 'start', true), ...eq('母線 ＝ 5cm（3・4・5の直角三角形）', C.purple, FILL.purple)] },
  { note: '❓側面を広げると？→頂点を中心に、半径が母線5cmの扇形になります。右の円は、底面（半径3cm）です。', add: [...fresh(), sc(140, 75, 70, -18, 198, C.main, FILL.warm), ci(250, 92, 30, '底面', C.blue, FILL.blue, 11), lb(140, 26, '半径5cm', 11, C.purple, 'middle', true), lb(140, 52, '中心角 ？度', 12, C.red, 'middle', true), ...say('側面 ＝ 半径5cmの扇形', C.main)] },
  { note: '❓扇形の曲がった縁（弧＝こ）の長さは？→組み立てると、この弧が底面のふちにぴったり重なります。だから弧の長さは底面の円周。円周は直径×3.14で、3×2×3.14＝18.84cmです。', add: [...outline(ell(140, 75, 70, 70, -18, 198, 40), C.red, false, 3.5), ci(250, 92, 30, '底面', C.red, FILL.blue, 11), ...both('弧の長さ ＝ 底面の円周', '3×2×3.14 ＝ 18.84cm', C.red, FILL.red)] },
  { note: '❓中心角はどう決まる？→扇形は、半径5cmの大きな円の一部です。大きな円の円周は5×2×3.14＝31.4cm。その中の18.84cmぶんなので、18.84÷31.4＝0.6（5分の3）です。', add: [...fresh(), ...outline(ell(140, 75, 70, 70, 0, 360, 48), C.gray, true, 1.6), sc(140, 75, 70, -18, 198, C.main, FILL.warm), ...both('大きな円周 5×2×3.14＝31.4cm', '18.84 ÷ 31.4 ＝ 0.6（5分の3）', C.main, FILL.warm)] },
  { note: '❓0.6なら、角度は？→円1周は360度。その0.6倍が扇形なので、360×0.6＝216度です。', add: [...fresh(), sc(140, 75, 70, -18, 198, C.main, FILL.warm), lb(140, 52, '216度', 14, C.red, 'middle', true), ...eq('360 × 0.6 ＝ 216度', C.red, FILL.red)] },
  { note: '❓どうして、半径÷母線（3÷5）だけで出るの？→円周は「半径×2×3.14」。底面の円周と大きな円の円周をくらべると、「2×3.14」が共通で消え、半径3と母線5の比だけが残るからです。', add: [...fresh(), ...both('底面の円周 ÷ 大きな円周', '(3×2×3.14) ÷ (5×2×3.14) ＝ 3÷5', C.purple, FILL.purple), lb(160, 60, '「2×3.14」が共通 → 消える', 13, C.purple, 'middle', true), lb(160, 90, '残るのは 3：5（半径：母線）', 13, C.ink, 'middle', true)] },
  { note: '答えは216度。確かめ：半径5cmの円周31.4cmの216÷360（0.6）は31.4×0.6＝18.84cmで、底面の円周と同じになります。母線を高さ4cmのまま計算しないこと。', add: [...fresh(), sc(140, 75, 70, -18, 198, C.main, FILL.warm), lb(140, 52, '216度', 14, C.red, 'middle', true), ...eq('31.4×0.6＝18.84 → 答え 216度')] },
], '中心角 ＝ 半径÷母線 × 360度');

// ───────── 三角形の面積の比（角を共有） ─────────
const T49 = { A: [40, 130] as P, B: [250, 130] as P, Cc: [120, 25] as P, D: [124, 130] as P, E: [72, 88] as P };
const tri049 = (): E[] => [pg([T49.A, T49.B, T49.Cc], C.main, FILL.warm), ln(T49.D[0], T49.D[1], T49.E[0], T49.E[1], C.blue, false, 2.5), lb(30, 140, 'A', 11, C.ink, 'middle', true), lb(260, 140, 'B', 11, C.ink, 'middle', true), lb(120, 14, 'C', 11, C.ink, 'middle', true), lb(124, 142, 'D', 11, C.ink, 'middle', true), lb(58, 88, 'E', 11, C.ink, 'middle', true)];
const f049 = show([
  { note: '三角形ABCの辺AB上にD、辺AC上にEがあり、AD:DB＝2:3、AE:EC＝2:3です。△ADEの面積は△ABCの何倍でしょう。', add: [...tri049(), lb(82, 120, '2', 11, C.red, 'middle', true), lb(187, 120, '3', 11, C.red, 'middle', true), lb(44, 106, '2', 11, C.red, 'middle', true), lb(110, 62, '3', 11, C.red, 'middle', true), ...say('AD：DB ＝ 2：3　AE：EC ＝ 2：3')] },
  { note: '❓面積をくらべるコツは？→「高さが同じ三角形は、面積の比が底辺の比と同じ」です。❓なぜ？→面積は「底辺×高さ÷2」。高さが同じなら、ちがうのは底辺だけだからです。', add: [...fresh(), pg([[70, 110], [130, 110], [120, 35]], C.blue, FILL.blue), pg([[130, 110], [220, 110], [120, 35]], C.red, FILL.red), ln(120, 35, 120, 110, C.ink, true), lb(100, 124, '底辺 2', 11, C.blue, 'middle', true), lb(175, 124, '底辺 3', 11, C.red, 'middle', true), lb(114, 78, '高さ共通', 10, C.ink, 'end'), ...say('高さが同じ → 面積の比 ＝ 底辺の比', C.ink)] },
  { note: '❓では、どうやって△ADEと△ABCを結びつける？→Bから直線でEをむすぶ補助線BEを引きます。まず△ABEと△ABC。Bから辺ACへの高さが共通で、底辺はAE：AC＝2：(2＋3)＝2：5です。', add: [...fresh(), ...tri049(), pg([T49.A, T49.B, T49.E], C.blue, FILL.blue), ln(T49.B[0], T49.B[1], T49.E[0], T49.E[1], C.purple, false, 3), ln(T49.D[0], T49.D[1], T49.E[0], T49.E[1], C.blue, false, 2.5), lb(30, 140, 'A', 11, C.ink, 'middle', true), lb(260, 140, 'B', 11, C.ink, 'middle', true), lb(120, 14, 'C', 11, C.ink, 'middle', true), lb(58, 88, 'E', 11, C.ink, 'middle', true), ...eq('△ABE：△ABC ＝ AE：AC ＝ 2：5', C.blue, FILL.blue)] },
  { note: '❓次に△ADEと△ABEは？→Eから辺ABへの高さが共通で、底辺はAD：AB＝2：5です。だから△ADE：△ABE＝2：5になります。', add: [pg([T49.A, T49.D, T49.E], C.red, FILL.red), ln(T49.B[0], T49.B[1], T49.E[0], T49.E[1], C.purple, false, 3), lb(124, 142, 'D', 11, C.ink, 'middle', true), lb(58, 88, 'E', 11, C.ink, 'middle', true), ...eq('△ADE：△ABE ＝ AD：AB ＝ 2：5', C.red, FILL.red)] },
  { note: '❓2つの関係をつなげると？→△ABCを25とおくと、△ABEはその5分の2で10。△ADEは△ABEの5分の2で4です。', add: [...fresh(), ...tri049(), ...eq('△ABC 25 → △ABE 10 → △ADE 4', C.purple, FILL.purple, 14)] },
  { note: '❓よくあるまちがいは？→AD：DBが2：3だからといって、AD：ABを2：3としないことです。ABぜんたいは2＋3＝5なので、AD：ABは2：5。これを使います。', add: [...fresh(), ...tri049(), ln(T49.A[0], T49.A[1], T49.D[0], T49.D[1], C.red, false, 4), ln(T49.D[0], T49.D[1], T49.B[0], T49.B[1], C.blue, false, 4), ...say('AD：AB ＝ 2：5（2：3ではない）', C.red)] },
  { note: '答えは25分の4倍。確かめ：はさむ2辺の比2/5と2/5をかけると 2/5×2/5＝4/25。△ABC（25）に対して△ADE（4）で、同じ値です。', add: [...fresh(), ...tri049(), ...eq('2/5 × 2/5 ＝ 4/25 → 答え 25分の4倍')] },
], '角を共有する三角形：面積の比 ＝ 2/5 × 2/5');

// ───────── 硬貨の払い方 ─────────
const tabH = (): E[] => [bx(10, 12, 76, 22, '100円', C.main, FILL.warm, 11), bx(90, 12, 70, 22, '残り', C.main, FILL.warm, 11), bx(164, 12, 86, 22, '50円の枚数', C.main, FILL.warm, 11), bx(254, 12, 56, 22, '通り', C.main, FILL.warm, 11)];
const tabR = (i: number, a: string, b: string, c: string, d: string): E[] => {
  const y = 38 + i * 26;
  return [bx(10, y, 76, 22, a, C.blue, FILL.blue, 12), bx(90, y, 70, 22, b, C.gray, FILL.gray, 12), bx(164, y, 86, 22, c, C.gray, FILL.gray, 12), bx(254, y, 56, 22, d, C.green, FILL.green, 12)];
};
const f053 = show([
  { note: '100円・50円・10円の硬貨を何枚使ってもよいとき、ちょうど300円を払う方法は何通りでしょう。', add: [ci(80, 62, 26, '100円', C.main, FILL.yellow, 12), ci(160, 62, 21, '50円', C.main, FILL.yellow, 12), ci(230, 62, 16, '10円', C.main, FILL.yellow, 11), lb(160, 20, 'ちょうど 300円', 13, C.ink, 'middle', true), ...say('100円・50円・10円 でちょうど300円')] },
  { note: '❓どう数えればもれなく数えられる？→ばらばらに数えると、数えもらしやダブりが出ます。いちばん大きい100円の枚数で分けると、100円の枚数がちがえば必ず別の払い方なので、ダブりません。', add: say('まず 100円の枚数で 場合分けする', C.red) },
  { note: '❓100円を3枚使うと？→300円ぴったり。残りは0円なので、50円も10円も使いません。1通りです。', add: [...fresh(), ...tabH(), ...tabR(0, '3枚', '0円', 'なし', '1通り'), ...say('100円3枚 → 残り0円 → 1通り', C.blue)] },
  { note: '❓100円を2枚使うと？→残りは100円。50円を0枚・1枚・2枚のどれかにして、残りを10円で払えるので、3通りです（10円は10枚・5枚・0枚）。', add: [...tabR(1, '2枚', '100円', '0〜2枚', '3通り'), ...say('残り100円 → 50円は 0・1・2枚 → 3通り', C.blue)] },
  { note: '❓100円を1枚使うと？→残りは200円。50円は最大4枚（200÷50）まで使えるので、0〜4枚の5通りです。', add: [...tabR(2, '1枚', '200円', '0〜4枚', '5通り'), ...say('残り200円 → 50円は 0〜4枚 → 5通り', C.blue)] },
  { note: '❓100円を使わないと？→残り300円。50円は最大6枚（300÷50）まで使えるので、0〜6枚の7通りです。', add: [...tabR(3, '0枚', '300円', '0〜6枚', '7通り'), ...say('残り300円 → 50円は 0〜6枚 → 7通り', C.blue)] },
  { note: '❓なぜ50円の枚数だけ数えればいいの？→50円の枚数を決めたら、残りは10円でぴったり払うしかないので、10円の枚数は自動で決まるからです（残り100円の例）。', add: [...fresh(), bx(40, 18, 240, 30, '50円0枚 ＋ 10円10枚', C.gray, FILL.gray, 13), bx(40, 54, 240, 30, '50円1枚 ＋ 10円5枚', C.gray, FILL.gray, 13), bx(40, 90, 240, 30, '50円2枚 ＋ 10円0枚', C.gray, FILL.gray, 13), ...say('50円の枚数が決まれば 10円は自動で決まる', C.purple)] },
  { note: '答えは16通り。4つの場合を足して、1＋3＋5＋7＝16通りです。確かめ：100円の枚数がちがう4グループは、ダブりもぬけもありません。', add: [...fresh(), ...tabH(), ...tabR(0, '3枚', '0円', 'なし', '1通り'), ...tabR(1, '2枚', '100円', '0〜2枚', '3通り'), ...tabR(2, '1枚', '200円', '0〜4枚', '5通り'), ...tabR(3, '0枚', '300円', '0〜6枚', '7通り'), ...eq('1＋3＋5＋7 ＝ 16通り')] },
], '大きい硬貨の枚数で場合分けして、もれなく数える');

// ───────── 台形の対角線と相似（AD6・BC10） ─────────
const Z54 = { A: [100, 40] as P, D: [160, 40] as P, B: [80, 120] as P, Cc: [180, 120] as P, O: [130, 70] as P };
const trap054 = (): E[] => [pg([Z54.A, Z54.D, Z54.Cc, Z54.B], C.main, FILL.warm), lb(94, 31, 'A', 11, C.ink, 'middle', true), lb(166, 31, 'D', 11, C.ink, 'middle', true), lb(72, 131, 'B', 11, C.ink, 'middle', true), lb(188, 131, 'C', 11, C.ink, 'middle', true)];
const diag054 = (): E[] => [ln(100, 40, 180, 120, C.ink), ln(160, 40, 80, 120, C.ink), lb(137, 66, 'O', 11, C.ink, 'middle', true)];
const f054 = show([
  { note: '台形ABCD（ADとBCは平行）で、AD＝6cm、BC＝10cm。対角線ACとBDの交点をOとするとき、△AODと△BOCの面積の比を求めます。', add: [...trap054(), ...diag054(), lb(130, 30, '6cm', 10, C.main), lb(130, 136, '10cm', 10, C.main), ...say('△AOD：△BOC ＝ ？')] },
  { note: '❓△AODと△COBは、なぜ同じ形（相似＝そうじ）といえる？→ADとBCは平行なので、角DAOと角BCO（緑）、角ADOと角CBO（紫）はそれぞれ同じ大きさ（錯角＝さっかく）。角が2組そろえば、3つめもそろいます。', add: [pg([Z54.A, Z54.D, Z54.O], C.blue, FILL.blue), pg([Z54.B, Z54.Cc, Z54.O], C.red, FILL.red), ...diag054(), sc(100, 40, 14, -45, 0, C.green, FILL.green), sc(180, 120, 14, 135, 180, C.green, FILL.green), sc(160, 40, 14, 180, 225, C.purple, FILL.purple), sc(80, 120, 14, 0, 45, C.purple, FILL.purple), ...say('平行 → 角が同じ → 同じ形（相似）', C.blue)] },
  { note: '❓相似比は？→同じ形の、対応する辺の長さの比です。ADとCBが対応していて、6：10＝3：5です。', add: eq('相似比 ＝ AD：CB ＝ 6：10 ＝ 3：5', C.blue, FILL.blue) },
  { note: '❓では、面積の比も3：5？→ちがいます。長さが3と5なら、たても横も同じ割合で変わります。1辺3の正方形は9個、1辺5の正方形は25個ぶん。面積は「3×3：5×5」です。', add: [...fresh(), ...cells(3, 3, 50, 60, 16, FILL.blue, C.blue), ...cells(5, 5, 150, 28, 16, FILL.red, C.red), lb(74, 120, '長さ3', 11, C.blue), lb(190, 120, '長さ5', 11, C.red), lb(74, 134, '3×3＝9個', 11, C.blue), lb(190, 134, '5×5＝25個', 11, C.red), ...say('面積の比 ＝ 長さの比を2回かける', C.ink)] },
  { note: '❓△AOD：△BOCは？→3×3：5×5＝9：25です。', add: [...fresh(), ...trap054(), pg([Z54.A, Z54.D, Z54.O], C.blue, FILL.blue), pg([Z54.B, Z54.Cc, Z54.O], C.red, FILL.red), ...diag054(), lb(130, 54, '9', 12, C.ink, 'middle', true), lb(130, 106, '25', 12, C.ink, 'middle', true), ...eq('3×3 ： 5×5 ＝ 9：25', C.red, FILL.red)] },
  { note: '❓よくあるまちがいは？→相似比3：5をそのまま面積の比にしてしまうことです。面積は2回かける（2乗）ので、9：25です。また、6：10のまま2乗するより、先に3：5に約分してから2回かけるほうが楽です。', add: say('3：5 のままではなく、2回かけた 9：25', C.red) },
  { note: '答えは9：25。確かめ：Oから平行な2辺までの高さの比は、AO：OC＝3：5と同じ。面積は(6×3)：(10×5)＝18：50＝9：25で、同じ比になります。', add: [...fresh(), ...trap054(), ...diag054(), ...eq('(6×3)：(10×5) ＝ 18：50 ＝ 9：25')] },
], '相似比3:5 → 面積の比は 3×3 : 5×5 ＝ 9 : 25');

// ───────── 相似な円すいの体積 ─────────
const cones055 = (): E[] => [...cone(90, 62, 106, 28, 7, FILL.blue, C.blue), ...cone(220, 40, 106, 42, 10, FILL.red, C.red)];
const f055 = show([
  { note: '相似な2つの円すいA、Bの底面の半径の比は2：3、Aの体積は40cm³です。Bの体積を求めます。', add: [...cones055(), lb(90, 124, 'A　40cm³', 11, C.blue, 'middle', true), lb(220, 124, 'B　？cm³', 11, C.red, 'middle', true), ...say('半径の比 A：B ＝ 2：3')] },
  { note: '❓相似って何？→形は同じで、大きさだけがちがう関係です。AをそのままBの大きさに拡大（かくだい）したものがBです。', add: [ar(122, 84, 170, 84, C.main), lb(146, 74, '拡大', 11, C.main, 'middle', true), ...say('形は同じ・大きさだけちがう ＝ 相似', C.main)] },
  { note: '❓長さが3/2倍になると、体積は？→立方体で考えます。1辺2の立方体と1辺3の立方体は、たて・横・高さの3つの長さが、ぜんぶ3/2倍になっています。', add: [...fresh(), ...cub(40, 70, 48, 48, 24, 18, FILL.blue, FILL.yellow, FILL.blue, C.blue), ...cubGrid(40, 70, 48, 48, 24, 18, 2, C.blue), ...cub(170, 50, 72, 72, 36, 27, FILL.red, FILL.yellow, FILL.red, C.red), ...cubGrid(170, 50, 72, 72, 36, 27, 3, C.red), lb(64, 132, '長さ2', 11, C.blue), lb(206, 136, '長さ3', 11, C.red), ...say('たて・横・高さ が ぜんぶ 3/2倍', C.ink)] },
  { note: '❓体積を数えると？→1辺2の立方体は2×2×2＝8個、1辺3の立方体は3×3×3＝27個の小さな立方体でできています。体積の比は8：27です。', add: [cover(0, 124, 320, 24), lb(76, 136, '2×2×2＝8個', 11, C.blue, 'middle', true), lb(224, 136, '3×3×3＝27個', 11, C.red, 'middle', true), ...eq('体積の比 ＝ 2×2×2 ： 3×3×3 ＝ 8：27', C.purple, FILL.purple, 14)] },
  { note: '❓円すいでも同じ？→相似な立体なら、形がなんでも、たて・横・高さがそろって同じ割合で変わります。だから、長さの比を3回かけた比になります。', add: [...fresh(), ...cones055(), lb(90, 124, '体積 8', 12, C.blue, 'middle', true), lb(220, 124, '体積 27', 12, C.red, 'middle', true), ...say('長さの比を 3回かける → 8：27', C.purple)] },
  { note: '❓Aの40cm³は、比のどれにあたる？→Aは比の8。8が40cm³なので、比の1あたりは40÷8＝5cm³です。', add: [...fresh(), bx(40, 34, 64, 30, 'A　8', C.blue, FILL.blue, 13), bx(40, 78, 216, 30, 'B　27', C.red, FILL.red, 13), lb(160, 130, 'A 8 → 40cm³', 11, C.blue), ...eq('40 ÷ 8 ＝ 5cm³（比の1あたり）', C.blue, FILL.blue)] },
  { note: '❓Bは？→Bは比の27なので、5×27＝135cm³です。', add: eq('B ＝ 5 × 27 ＝ 135cm³', C.red, FILL.red) },
  { note: '答えは135cm³。確かめ：40÷8＝5、135÷27＝5で、比の1あたりが同じです。面積の比（2回かける）と混ぜて、2×2：3×3にしないように注意します。', add: eq('135÷27＝5、40÷8＝5 → 答え 135cm³') },
], '相似な立体の体積の比 ＝ 長さの比を3回かける');

// ───────── 三角形の数表 ─────────
const rowBox = (r: number, k: number, n: number, col: string = C.main, fill: string = FILL.warm): E => bx(160 - (r * 26) / 2 + k * 26, 18 + (r - 1) * 30, 24, 24, String(n), col, fill, 11);
const tri058 = (): E[] => {
  const out: E[] = [];
  let n = 1;
  for (let r = 1; r <= 4; r++) for (let k = 0; k < r; k++) out.push(rowBox(r, k, n++));
  return out;
};
const lefts = [1, 2, 4, 7];
const f058 = show([
  { note: '自然数を1から順に、1段目に1個、2段目に2個、3段目に3個…と三角形に並べます。10段目の一番左の数はいくつでしょう。', add: [...tri058(), lb(160, 140, '…', 14, C.ink), ...say('10段目の 左はしの数 ＝ ？')] },
  { note: '❓どうやって求める？→数は1から順に、とぎれなく並んでいます。だから、ある段の左はしの数は「その前の段までに並んだ個数」のすぐ次の数です。', add: [...lefts.map((n, i) => rowBox(i + 1, 0, n, C.red, FILL.red)), lb(232, 60, '2＝1＋1', 10, C.red, 'start'), lb(232, 90, '4＝1＋2＋1', 10, C.red, 'start'), lb(232, 120, '7＝1＋2＋3＋1', 10, C.red, 'start'), ...say('左はし ＝ 前の段までの個数の合計 ＋1', C.red)] },
  { note: '❓では、10段目の前（9段目まで）に、数は何個ある？→各段の個数は段の番号と同じです。1段目1個、2段目2個、…、9段目9個。合計は1＋2＋…＋9です。', add: [...fresh(), ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => bx(25 + (n - 1) * 30, 50, 30, 30, String(n), C.blue, FILL.blue, 12)), lb(160, 36, '1段目〜9段目の個数', 12, C.blue, 'middle', true), ...say('1＋2＋3＋…＋9 を求める', C.blue)] },
  { note: '❓1＋2＋…＋9はどう足す？→同じ数の列を、逆の順にならべると、たてに足すとどの組も10になります（1＋9、2＋8…）。', add: [...[9, 8, 7, 6, 5, 4, 3, 2, 1].map((n, i) => bx(25 + i * 30, 84, 30, 30, String(n), C.purple, FILL.purple, 12)), ...[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => lb(40 + i * 30, 128, '10', 11, C.red, 'middle', true)), ...say('たてに足すと どこも10', C.red)] },
  { note: '❓その10は何組ある？→9組です。10が9組で90。ただし同じ列を2本ならべて足したので、90は求めたい合計の2倍。半分にして90÷2＝45個です。', add: eq('10 × 9 ÷ 2 ＝ 45個', C.purple, FILL.purple) },
  { note: '❓では、10段目の左はしは？→9段目までに45個。10段目の左はしは、その次の数なので45＋1＝46です。', add: [...fresh(), lb(160, 50, '1〜9段目で 45個', 14, C.ink, 'middle', true), lb(160, 88, '次の数が 10段目の左はし', 13, C.red, 'middle', true), ...eq('45 ＋ 1 ＝ 46', C.red, FILL.red)] },
  { note: '答えは46。確かめ：10段目には10個の数が並ぶので46〜55。次の11段目の左はしは56で、46＋10＝56と合います。よくあるまちがいは、10段目までの合計55に1を足して56としたり、45で止めたりすることです。', add: eq('46〜55（10個）、次は56 → 答え 46') },
], '左はし ＝ 前の段までの個数 ＋1');

// ───────── 円すいを高さの比1:2で切る ─────────
const cut60 = 22 + 98 / 3;
const cone60 = (): E[] => [...cone(160, 22, 120, 64, 14, FILL.warm), ...cone(160, 22, cut60, 64 / 3, 5, FILL.blue, C.blue)];
const f060 = show([
  { note: '円すい（えんすい）を、底面に平行な平面で、頂点からの高さの比が1：2になるように2つに分けます。上の小さい円すいと、下の円すい台の体積の比を求めます。', add: [...cone60(), lb(204, 40, '小さい円すい', 11, C.blue, 'start', true), lb(228, 100, '円すい台', 11, C.main, 'start', true), ...say('高さの比 1：2 で切る')] },
  { note: '❓高さの比1：2って？→全体の高さを、1＋2＝3に等分したとき、上が1つぶん、下が2つぶんということです。だから小さい円すいの高さは、全体の3分の1です。', add: [ar(100, 22, 100, cut60, C.blue), ar(100, cut60, 100, 120, C.main), lb(94, 40, '1', 12, C.blue, 'end', true), lb(94, 88, '2', 12, C.main, 'end', true), ...say('全体の高さ ＝ 1＋2 ＝ 3　→　上は3分の1', C.blue)] },
  { note: '❓小さい円すいと、もとの円すいの関係は？→底面に平行に切ったので、小さい円すいはもとの円すいと同じ形で小さくしたもの（相似＝そうじ）です。相似比は1：3です。', add: eq('小さい円すい：もとの円すい ＝ 1：3', C.blue, FILL.blue) },
  { note: '❓体積の比は？→長さが3倍になると、たて・横・高さがぜんぶ3倍。立方体で考えると1個と、3×3×3＝27個。体積の比は1：27です。', add: [...fresh(), ...cub(50, 100, 24, 24, 12, 9, FILL.blue, FILL.yellow, FILL.blue, C.blue), ...cub(130, 50, 72, 72, 36, 27, FILL.red, FILL.yellow, FILL.red, C.red), ...cubGrid(130, 50, 72, 72, 36, 27, 3, C.red), lb(62, 136, '1個', 11, C.blue, 'middle', true), lb(166, 136, '3×3×3＝27個', 11, C.red, 'middle', true), ...say('体積の比 ＝ 1×1×1 ： 3×3×3 ＝ 1：27', C.purple)] },
  { note: '❓円すい台の体積は？→もとの円すい（27）から、上の小さい円すい（1）を取り去った残りなので、27−1＝26です。', add: [...fresh(), ...cone60(), lb(160, 40, '1', 10, C.blue, 'middle', true), lb(160, 96, '26', 14, C.main, 'middle', true), ...eq('27 − 1 ＝ 26（円すい台）', C.main, FILL.warm)] },
  { note: '❓よくあるまちがいは？→高さの比1：2をそのまま体積の比にしたり、相似比を1：2としたりすることです。もとの円すいとの比は1：3で、体積は3回かけて1：27、そこから引きます。', add: say('1：2 のままでも 1：8 でもない。全体は 1：27', C.red) },
  { note: '答えは1：26。確かめ：1＋26＝27で、もとの円すいの体積の比と合います。', add: eq('1＋26＝27 → 答え 1：26') },
], '全体27 − 小さい円すい1 ＝ 円すい台26');

// ───────── 台形の4つの三角形 ─────────
const Z61 = { A: [110, 40] as P, D: [170, 40] as P, B: [90, 120] as P, Cc: [180, 120] as P, O: [138, 72] as P };
const trap061 = (): E[] => [pg([Z61.A, Z61.D, Z61.Cc, Z61.B], C.main, FILL.warm)];
const dg061 = (): E[] => [ln(110, 40, 180, 120, C.ink), ln(170, 40, 90, 120, C.ink), lb(104, 31, 'A', 11, C.ink, 'middle', true), lb(176, 31, 'D', 11, C.ink, 'middle', true), lb(82, 131, 'B', 11, C.ink, 'middle', true), lb(190, 131, 'C', 11, C.ink, 'middle', true), lb(146, 70, 'O', 10, C.ink, 'middle', true)];
const f061 = show([
  { note: '台形ABCD（AD＝4cm、BC＝6cm、ADとBCは平行）で、対角線の交点をOとします。△AODが8cm²のとき、台形全体の面積を求めます。対角線で、台形は4つの三角形に分かれます。', add: [...trap061(), ...dg061(), lb(139, 53, '8cm²', 9, C.red, 'middle', true), lb(140, 30, '4cm', 10, C.main), lb(135, 136, '6cm', 10, C.main), ...say('△AOD ＝ 8cm² → 台形全体 ＝ ？')] },
  { note: '❓△AODと△COBは、なぜ同じ形（相似＝そうじ）？→ADとBCが平行なので、錯角（さっかく）が等しくなり、角が2組そろうからです。相似比は対応する辺AD：CB＝4：6＝2：3です。', add: [pg([Z61.A, Z61.D, Z61.O], C.blue, FILL.blue), pg([Z61.B, Z61.Cc, Z61.O], C.red, FILL.red), ...dg061(), ...say('△AOD と △COB は相似（相似比 2：3）', C.blue)] },
  { note: '❓面積の比は？→長さの比2：3を2回かけて、2×2：3×3＝4：9です。△AODが比の4で8cm²だから、比の1は2cm²。△COBは9なので、2×9＝18cm²です。', add: [lb(139, 53, '8', 12, C.ink, 'middle', true), lb(138, 100, '18', 13, C.ink, 'middle', true), ...both('面積の比 2×2：3×3 ＝ 4：9　→　比の1 ＝ 8÷4 ＝ 2', '△COB ＝ 2 × 9 ＝ 18cm²', C.red, FILL.red)] },
  { note: '❓左右の△AOBと△DOCは？→△ABDと△ACDは、底辺ADが共通で、高さ（ADとBCのはば）も同じなので、面積が等しくなります。どちらからも共通の△AODを引くと、△AOB＝△DOCです。', add: [pg([Z61.A, Z61.B, Z61.O], C.green, FILL.green), pg([Z61.D, Z61.Cc, Z61.O], C.green, FILL.green), ...dg061(), ...both('△ABD＝△ACD（底辺ADが共通・高さも同じ）', '共通のAODをひく → △AOB＝△DOC', C.green, FILL.green)] },
  { note: '❓その面積は？→AO：OC＝2：3（相似比）です。△AODと△DOCは、Dから対角線ACへの高さが共通なので、面積の比は底辺の比AO：OC＝2：3。△AOD＝8なら、△DOCは8÷2×3＝12cm²です。', add: [lb(139, 53, '8', 12, C.ink, 'middle', true), lb(138, 100, '18', 13, C.ink, 'middle', true), lb(114, 78, '12', 12, C.ink, 'middle', true), lb(166, 78, '12', 12, C.ink, 'middle', true), ...both('高さが共通 → 面積の比 ＝ AO：OC ＝ 2：3', '△DOC ＝ 8 ÷ 2 × 3 ＝ 12cm²', C.green, FILL.green)] },
  { note: '❓台形全体は？→4つの三角形を足します。8＋12＋12＋18＝50cm²です。', add: eq('8 ＋ 12 ＋ 12 ＋ 18 ＝ 50cm²') },
  { note: '答えは50cm²。確かめ：4つの三角形の面積の比は4：6：6：9（合計25）で、比の1が2cm²なので、2×25＝50cm²。よくあるまちがいは、左右の三角形が等しいことを使わず、上と下の2つだけで全体を求めようとすることです。', add: eq('2 × (4＋6＋6＋9) ＝ 50 → 答え 50cm²') },
], '台形の対角線：上下は相似（面積比4:9）、左右は面積が等しい');

// ───────── 出会い算 ─────────
const road = (): E[] => [ln(30, 80, 290, 80, C.gray, false, 3), ci(30, 80, 10, 'A', C.blue, FILL.blue, 11), ci(290, 80, 10, 'B', C.main, FILL.warm, 11)];
const f064 = show([
  { note: '花子さんはA地点から分速80m、太郎さんは6km（＝6000m）はなれたB地点から分速120mで、同時に向かい合って出発します。2人がすれちがうのは、A地点から何mの地点でしょう。', add: [...road(), ar(44, 60, 100, 60, C.blue), ar(276, 60, 220, 60, C.main), lb(72, 50, '花子 分速80m', 10, C.blue, 'middle', true), lb(248, 50, '太郎 分速120m', 10, C.main, 'middle', true), lb(160, 104, 'A と B は 6km ＝ 6000m', 12, C.ink, 'middle', true), ...say('向かい合って出発')] },
  { note: '❓1分たつと、2人の間はどれだけ近づく？→花子さんが80m、太郎さんが120m、それぞれ相手に向かって進みます。間の道のりは、その合計ぶん縮みます。', add: [...fresh(), bx(50, 50, 80, 30, '花子 80m', C.blue, FILL.blue, 12), bx(130, 50, 120, 30, '太郎 120m', C.main, FILL.warm, 12), ar(250, 100, 50, 100, C.red), ar(50, 100, 250, 100, C.red), lb(150, 116, '合わせて 200m', 12, C.red, 'middle', true), ...say('1分で 間が 200m 縮む', C.red)] },
  { note: '❓なぜ足し算？→向かい合って進むと、どちらが進んでも「間の道のり」が縮むからです。2人の進んだ長さの合計が、縮んだ長さになります。', add: eq('速さの和 ＝ 80 ＋ 120 ＝ 分速200m', C.blue, FILL.blue) },
  { note: '❓では、いつ出会う？→間の6000mが、1分に200mずつ縮みます。6000mの中に200mが何個あるかを調べるので、6000÷200＝30分です（図は200mの目もり30個）。', add: [...fresh(), ...Array.from({ length: 30 }, (_, i) => pg([[40 + i * 8, 50], [48 + i * 8, 50], [48 + i * 8, 76], [40 + i * 8, 76]], C.blue, FILL.blue)), lb(160, 40, '6000m ＝ 200m が 30個', 12, C.blue, 'middle', true), ...eq('6000 ÷ 200 ＝ 30分後に出会う', C.blue, FILL.blue)] },
  { note: '❓A地点から何mで出会う？→A地点から歩き出したのは花子さんです。30分で 80×30＝2400m進んだ所が、A地点から2400mです。', add: [...fresh(), ...road(), ci(134, 80, 7, undefined, C.red, FILL.red), ar(40, 62, 130, 62, C.blue), ar(290, 62, 138, 62, C.main), lb(85, 52, '花子 2400m', 11, C.blue, 'middle', true), lb(214, 52, '太郎 3600m', 11, C.main, 'middle', true), lb(134, 104, '出会う点', 11, C.red, 'middle', true), ...eq('80 × 30 ＝ 2400m（Aから）', C.blue, FILL.blue)] },
  { note: '❓太郎さんの速さ120を使うとどうなる？→120×30＝3600mは、B地点から出会う点までの道のりです。A地点からの距離を聞かれているので、花子さんの速さを使います。', add: say('Aから → 花子の速さ。Bから → 太郎の速さ', C.red) },
  { note: '❓グラフでは？→花子さんは0から、太郎さんは6000mから始まる2本の直線で、交わる点が出会い（30分後・A地点から2400m）です。', add: [...fresh(), ln(50, 124, 250, 124, C.ink, false, 2), ln(50, 124, 50, 14, C.ink, false, 2), ln(50, 124, 230, 84, C.blue, false, 3), ln(50, 24, 230, 84, C.main, false, 3), ln(50, 84, 230, 84, C.gray, true), ln(230, 84, 230, 124, C.gray, true), ci(230, 84, 4, undefined, C.red, C.red), lb(46, 24, '6000', 9, C.ink, 'end'), lb(46, 84, '2400', 9, C.red, 'end', true), lb(46, 124, '0', 9, C.ink, 'end'), lb(230, 136, '30分', 10, C.red, 'middle', true), lb(150, 114, '花子', 10, C.blue, 'middle', true), lb(150, 40, '太郎', 10, C.main, 'middle', true), ...say('交わる点 ＝ 出会い（30分後・Aから2400m）', C.red)] },
  { note: '答えは2400m。確かめ：太郎さんは120×30＝3600m進みます。2400＋3600＝6000mで、A・B間の道のりと同じです。', add: eq('2400＋3600＝6000 → 答え 2400m') },
], '出会い算：間の道のり ÷ 速さの和 ＝ 出会うまでの時間');

// ───────── ニュートン算 ─────────
const bar65 = (): E[] => [bx(30, 40, 180, 26, 'もとの水', C.gray, FILL.gray, 12), bx(210, 40, 60, 26, '15分', C.blue, FILL.blue, 11), bx(30, 84, 180, 26, 'もとの水', C.gray, FILL.gray, 12), bx(210, 84, 36, 26, '9分', C.blue, FILL.blue, 10)];
const f065 = show([
  { note: '水そうには水が入っていて、さらに毎分一定の割合で水が注がれています。ポンプ4台で排水すると15分、6台だと9分で空になります。10台では何分でしょう。', add: [bx(40, 34, 90, 70, '水そう', C.blue, FILL.blue, 14), ar(150, 50, 136, 62, C.blue), lb(200, 44, '毎分一定で水が入る', 10, C.blue, 'start'), ar(136, 92, 168, 104, C.main), lb(202, 108, 'ポンプでくみ出す', 10, C.main, 'start'), lb(160, 130, '4台→15分　6台→9分　10台→？', 12, C.ink, 'middle', true), ...say('ポンプで排水しながら、水は入り続ける')] },
  { note: '❓くみ出した量は、どう表す？→ポンプ1台が1分にくみ出す量を「1」とします。4台で15分なら 4×15＝60、6台で9分なら 6×9＝54です。', add: [...fresh(), bx(30, 40, 240, 26, '4台 × 15分 ＝ 60', C.blue, FILL.blue, 13), bx(30, 84, 216, 26, '6台 × 9分 ＝ 54', C.main, FILL.warm, 13), ...say('ポンプ1台・1分 ＝ 1 とする', C.ink)] },
  { note: '❓くみ出した60や54の中身は？→最初にあった水だけでなく、くみ出している間に入ってきた水も、いっしょにくみ出しています。だから「もとの水＋入ってきた水」です。', add: [...fresh(), ...bar65(), lb(240, 130, '入ってきた水', 10, C.blue, 'middle'), ...say('くみ出した量 ＝ もとの水 ＋ 入ってきた水', C.ink)] },
  { note: '❓2つをくらべると何が分かる？→もとの水は同じなので、60−54＝6は、15分と9分の差（6分間）に入ってきた水の量です。', add: [bx(246, 40, 24, 26, undefined, C.red, 'transparent'), lb(258, 28, '差 6', 11, C.red, 'middle', true), ...eq('60 − 54 ＝ 6（15−9＝6分の間の水）', C.red, FILL.red)] },
  { note: '❓1分に入る水は？→6分間で6入ったので、6÷6＝1。1分に入る水は、ポンプ1台ぶん（1）です。', add: eq('6 ÷ 6 ＝ 1（1分に入る水）') },
  { note: '❓もとの水は？→6台で9分のくみ出し量54のうち、9分間に入った水は1×9＝9。54−9＝45がもとの水です。4台のほうでも 60−15＝45で同じです。', add: eq('54 − 1×9 ＝ 45（もとの水）', C.gray, FILL.gray) },
  { note: '❓10台ならどうなる？→1分に10くみ出し、1分に1入ってくるので、差し引き1分に9ずつ減ります。もとの水45が5回の9で空になります。', add: [...fresh(), ...[0, 1, 2, 3, 4].map((i) => bx(60 + i * 40, 50, 40, 30, '9', C.blue, FILL.blue, 13)), lb(160, 38, 'もとの水 45 ＝ 9 が 5個', 12, C.ink, 'middle', true), ...eq('45 ÷ (10−1) ＝ 45 ÷ 9 ＝ 5分', C.blue, FILL.blue)] },
  { note: '答えは5分。確かめ：5分でくみ出す量は10×5＝50。もとの水45と、5分で入る水1×5＝5の合計が50で同じです。入ってくる水を忘れて、45÷10としないこと。', add: eq('45＋1×5＝50＝10×5 → 答え 5分') },
], 'ニュートン算：差から入る水を出し、もとの水を出す');

// ───────── 立方体を高さの比1:2に切る ─────────
const c66 = (): E[] => [...cub(90, 56, 84, 84, 36, 27, FILL.warm, FILL.yellow, FILL.blue), pg([[90, 56], [174, 56], [174, 84], [90, 84]], C.red, FILL.red), pg([[174, 56], [210, 29], [210, 57], [174, 84]], C.red, FILL.red), ln(90, 84, 174, 84, C.red, false, 2.5), ln(174, 84, 210, 57, C.red, false, 2.5)];
const f066 = show([
  { note: '1辺12cmの立方体（りっぽうたい）を、ある面に平行な平面で、高さの比が1：2になるように切ります。小さい方の立体の体積を求めます。', add: [...c66(), lb(216, 132, '12cm', 11, C.main, 'start'), ...say('高さの比 1：2 で切る（赤い方が小さい）')] },
  { note: '❓高さの比1：2って？→高さ12cmを、1＋2＝3に等分するということです。小さい方は1つぶんで、12÷3＝4cm。大きい方は2つぶんで8cmです。', add: [ar(80, 56, 80, 84, C.red), ar(80, 84, 80, 140, C.blue), lb(74, 70, '4cm', 11, C.red, 'end', true), lb(74, 112, '8cm', 11, C.blue, 'end', true), ...eq('12 ÷ (1＋2) ＝ 4cm（小さい方の高さ）', C.red, FILL.red)] },
  { note: '❓体積の比は、どうして高さの比と同じ？→底に平行に切ったので、どこで切っても底面積は12×12＝144cm²で同じです。体積は「底面積×高さ」なので、高さが1：2なら体積も1：2。図の同じ大きさの箱3つのうち、小さい方は1つ、大きい方は2つです。', add: [...fresh(), bx(100, 20, 120, 34, '144×4 ＝ 576', C.red, FILL.red, 12), bx(100, 58, 120, 34, '144×4 ＝ 576', C.blue, FILL.blue, 12), bx(100, 96, 120, 34, '144×4 ＝ 576', C.blue, FILL.blue, 12), lb(94, 37, '小さい方', 10, C.red, 'end', true), lb(94, 94, '大きい方', 10, C.blue, 'end', true), ...say('底面積が同じ → 体積の比 ＝ 高さの比', C.ink)] },
  { note: '❓小さい方の体積は？→底面積144cm²で高さ4cmなので、144×4＝576cm³です。', add: eq('144 × 4 ＝ 576cm³', C.red, FILL.red) },
  { note: '❓別の方法は？→全体の体積は12×12×12＝1728cm³。これを3等分（1＋2）した1つぶんなので、1728÷3＝576cm³で同じになります。', add: [...fresh(), ...c66(), ...eq('12×12×12 ÷ 3 ＝ 1728 ÷ 3 ＝ 576cm³', C.purple, FILL.purple, 14)] },
  { note: '❓よくあるまちがいは？→「1：2」を体積の半分などと考えて1728÷2としてしまうことです。全体は1＋2＝3にあたるので、3で割ります。', add: say('全体は 1＋2＝3 → 3で割る（2では割らない）', C.red) },
  { note: '答えは576cm³。確かめ：576×3＝1728で全体の体積と同じ。大きい方は576×2＝1152cm³で、576：1152＝1：2になっています。', add: eq('576×3＝1728 → 答え 576cm³') },
], '底面積が同じ：体積の比 ＝ 高さの比');

// ───────── 立方体の頂点を切る（三角すい） ─────────
const cube6 = (): E[] => [...cub(70, 60, 80, 80, 40, 30, FILL.warm, FILL.yellow, FILL.blue), ...cubGrid(70, 60, 80, 80, 40, 30, 2, C.gray), pg([[70, 140], [110, 140], [70, 100]], C.red, FILL.red), ln(70, 140, 90, 125, C.red, true), ln(110, 140, 90, 125, C.red, true), ln(70, 100, 90, 125, C.red, true)];
const TP: P = [130, 100], TX: P = [200, 100], TY: P = [130, 35], TZ: P = [90, 130];
const tetra = (): E[] => [pg([TX, TY, TZ], C.red, FILL.yellow), pg([TP, TX, TY], C.main, FILL.warm), pg([TP, TY, TZ], C.main, FILL.blue), pg([TP, TX, TZ], C.main, FILL.gray)];
const f067 = show([
  { note: '1辺6cmの立方体（りっぽうたい）の頂点の1つを、そこに集まる3つの辺の中点を通る平面で切り落とします。切り落とされる三角すいの体積を求めます。', add: [...cube6(), lb(196, 132, '6cm', 11, C.main, 'start'), ...say('頂点を切り落とす（赤い部分）')] },
  { note: '❓切り落とされる形は？→6cmの辺の中点なので、頂点からの長さは6÷2＝3cm。3つの辺が3cmずつで、おたがいに直角に集まる三角すい（さんかくすい）です。', add: [...fresh(), ...tetra(), lb(165, 113, '3cm', 11, C.main, 'middle', true), lb(122, 68, '3cm', 11, C.main, 'end', true), lb(118, 141, '3cm', 11, C.main, 'middle', true), ...say('直角に集まる3辺が 3cm・3cm・3cm', C.main)] },
  { note: '❓三角すいの体積の出し方は？→「底面積×高さ÷3」です。❓なぜ÷3？→すいの体積は、同じ底面と同じ高さの柱（ちゅう）の3分の1だからです。', add: eq('三角すい ＝ 底面積 × 高さ ÷ 3（柱の3分の1）', C.purple, FILL.purple, 13) },
  { note: '❓底面は？→直角に集まる2辺（3cmと3cm）でできた直角二等辺三角形です。面積は3×3÷2＝4.5cm²。÷2するのは、3cm角の正方形の半分だからです。', add: [pg([TP, TX, TY], C.blue, FILL.blue), ...eq('底面積 ＝ 3 × 3 ÷ 2 ＝ 4.5cm²', C.blue, FILL.blue)] },
  { note: '❓高さは？→底面（青でなぞった三角形）に直角に立つ、残りの1辺が高さです。3cmです。体積は 4.5×3÷3＝4.5cm³になります。', add: [ln(130, 100, 90, 130, C.red, false, 3.5), cover(88, 133, 64, 14), lb(118, 141, '高さ3cm', 10, C.red, 'middle', true), ...eq('4.5 × 3 ÷ 3 ＝ 4.5cm³', C.red, FILL.red)] },
  { note: '❓よくあるまちがいは？→÷3を忘れて、直方体のように3×3×3＝27としてしまうことです。すいは柱の3分の1（しかも底面は三角形で÷2）なので、27より小さくなります。', add: say('3×3×3＝27 ではない（÷2 と ÷3 が必要）', C.red) },
  { note: '答えは4.5cm³。確かめ：3×3÷2×3÷3は、÷2と÷3をまとめて÷6とみて 3×3×3÷6＝27÷6＝4.5cm³。直角に集まる3辺をかけて6でわる、と覚えると速く求められます。', add: eq('3×3×3 ÷ 6 ＝ 4.5 → 答え 4.5cm³') },
], '三角すい ＝ 底面積×高さ÷3（直角に集まる3辺の積÷6）');

// ───────── 立方体の頂点を切る（倍率） ─────────
const f068 = show([
  { note: '1辺12cmの立方体（りっぽうたい）の頂点の1つを、そこに集まる3辺の中点を通る平面で切り落とします。切り落とした三角すいの体積は、もとの立方体の何倍でしょう。', add: [...cube6(), lb(196, 132, '12cm', 11, C.main, 'start'), ...say('頂点を切り落とす（赤い部分）')] },
  { note: '❓切り落とした形は？→12cmの辺の中点なので、頂点から6cm。3つの辺が6cmずつで直角に集まる三角すい（さんかくすい）です。', add: [...fresh(), ...tetra(), lb(165, 113, '6cm', 11, C.main, 'middle', true), lb(122, 68, '6cm', 11, C.main, 'end', true), lb(118, 141, '6cm', 11, C.main, 'middle', true), ...say('直角に集まる3辺が 6cm・6cm・6cm', C.main)] },
  { note: '❓底面積は？→直角に集まる2辺（6cm、6cm）の直角二等辺三角形。6×6÷2＝18cm²です（正方形の半分だから÷2）。', add: [pg([TP, TX, TY], C.blue, FILL.blue), ...eq('底面積 ＝ 6 × 6 ÷ 2 ＝ 18cm²', C.blue, FILL.blue)] },
  { note: '❓体積は？→すいの体積は「底面積×高さ÷3」（同じ底面・高さの柱の3分の1）。高さは残りの辺の6cmなので、18×6÷3＝36cm³です。', add: [ln(130, 100, 90, 130, C.red, false, 3.5), cover(88, 133, 64, 14), lb(118, 141, '高さ6cm', 10, C.red, 'middle', true), ...eq('18 × 6 ÷ 3 ＝ 36cm³', C.red, FILL.red)] },
  { note: '❓もとの立方体の体積は？→12×12×12＝1728cm³です。', add: [...fresh(), ...cub(100, 50, 80, 80, 40, 30, FILL.warm, FILL.yellow, FILL.blue), ...eq('12 × 12 × 12 ＝ 1728cm³', C.blue, FILL.blue)] },
  { note: '❓何倍？→もとの体積との比べ方は、わり算です。36÷1728。36でどちらも約分すると、1728÷36＝48なので、1/48倍です。', add: eq('36 ÷ 1728 ＝ 1/48', C.purple, FILL.purple) },
  { note: '❓別の方法で確かめるには？→立方体を各辺の中点で8つの小さい立方体（1辺6cm、216cm³）に分けます。切り落とした三角すいは、そのうちの1つの角にぴったり入り、36÷216＝6分の1です。', add: [...fresh(), ...cub(70, 60, 80, 80, 40, 30, FILL.warm, FILL.yellow, FILL.blue), ...cubGrid(70, 60, 80, 80, 40, 30, 2, C.gray), pg([[70, 140], [110, 140], [110, 100], [70, 100]], C.red, FILL.red), ...eq('1/8 × 1/6 ＝ 1/48', C.purple, FILL.purple)] },
  { note: '答えは1/48倍。よくあるまちがいは、÷3を忘れて 6×6÷2×6＝108 とし、108÷1728＝1/16 とすることです。すいは柱の3分の1なので、必ず÷3をします。', add: eq('36÷1728＝1/48 → 答え 1/48倍') },
], '36cm³ ÷ 1728cm³ ＝ 1/48');

// ───────── 四角すいを底面に平行に切る ─────────
const PA: P = [170, 22], P1: P = [100, 118], P2: P = [210, 118], P3: P = [240, 100], P4: P = [130, 100];
const sp = (p: P, f: number): P => [PA[0] + f * (p[0] - PA[0]), PA[1] + f * (p[1] - PA[1])];
const pyr = (f: number): E[] => [
  pg([P1, P2, P3, P4], C.gray, FILL.gray),
  pg([PA, P1, P2], C.main, FILL.warm),
  pg([PA, P2, P3], C.main, FILL.warm),
  pg([sp(P1, f), sp(P2, f), sp(P3, f), sp(P4, f)], C.blue, FILL.yellow),
  pg([PA, sp(P1, f), sp(P2, f)], C.blue, FILL.blue),
  pg([PA, sp(P2, f), sp(P3, f)], C.blue, FILL.blue),
];
const cutY = (f: number) => 22 + f * 87;
const twoCubes = (a: number, b: number): E[] => [
  ...cub(40, 70, a * 16, a * 16, a * 8, a * 6, FILL.blue, FILL.yellow, FILL.blue, C.blue), ...cubGrid(40, 70, a * 16, a * 16, a * 8, a * 6, a, C.blue),
  ...cub(170, 40, b * 16, b * 16, b * 8, b * 6, FILL.red, FILL.yellow, FILL.red, C.red), ...cubGrid(170, 40, b * 16, b * 16, b * 8, b * 6, b, C.red),
];
const f069 = show([
  { note: '底面が正方形で高さ18cmの四角すい（しかくすい）を、頂点から12cmの高さで底面に平行に切ります。切り取った小さい四角すいと、残った立体の体積の比を求めます。', add: [...pyr(2 / 3), ar(80, 22, 80, cutY(2 / 3), C.blue), ar(80, cutY(2 / 3), 80, 109, C.main), lb(74, 52, '12cm', 10, C.blue, 'end', true), lb(74, 96, '6cm', 10, C.main, 'end', true), ...say('全体の高さ18cm、頂点から12cmで切る')] },
  { note: '❓小さい四角すいと、もとの四角すいの関係は？→底に平行に切ると、切り口は底面と同じ正方形になります。頂点から遠ざかるほど、辺の長さも頂点からの距離に比例して大きくなるので、同じ形（相似＝そうじ）です。相似比は、頂点からの高さの比12：18＝2：3です。', add: eq('相似比 ＝ 12：18 ＝ 2：3（頂点からの高さ）', C.blue, FILL.blue) },
  { note: '❓体積の比は？→相似な立体は、たて・横・高さがぜんぶ同じ割合で変わります。長さ2と3の立方体で考えると、2×2×2＝8個と3×3×3＝27個。体積の比は8：27です。', add: [...fresh(), ...twoCubes(2, 3), lb(64, 132, '2×2×2＝8個', 11, C.blue, 'middle', true), lb(224, 138, '3×3×3＝27個', 11, C.red, 'middle', true), ...say('長さの比を3回かける → 8：27', C.purple)] },
  { note: '❓残りの立体は？→もとの四角すい全体を27とすると、小さい四角すいは8。残った立体は、全体から小さい部分を取り去った27−8＝19です。', add: [...fresh(), ...pyr(2 / 3), lb(170, 62, '8', 14, C.ink, 'middle', true), lb(170, 104, '19', 14, C.ink, 'middle', true), ...eq('27 − 8 ＝ 19（残った立体）', C.main, FILL.warm)] },
  { note: '❓問われている比は？→「小さい四角すい」と「残った立体」の比です。全体との比8：27ではありません。答えは小：残り＝8：19です。', add: eq('小さい四角すい：残った立体 ＝ 8：19', C.green, FILL.green) },
  { note: '❓よくあるまちがいは？→相似比2：3をそのまま体積の比にしたり、2乗して4：9としたりすることです。体積は3回かけるので8：27です。', add: say('2：3 のまま、4：9 でもない。3回かけて 8：27', C.red) },
  { note: '答えは8：19。確かめ：8＋19＝27で、もとの四角すい全体の比と同じになります。', add: eq('8＋19＝27 → 答え 8：19') },
], '小さい四角すい：全体 ＝ 2×2×2 ： 3×3×3 ＝ 8：27');

const f070 = show([
  { note: '頂点からの高さの比が3：5になるように、四角すいを底面に平行に切ります。もとの四角すい（全体）の体積が1000cm³のとき、切り取った小さい四角すいの体積を求めます。', add: [...pyr(3 / 5), ar(80, 22, 80, cutY(3 / 5), C.blue), ar(80, cutY(3 / 5), 80, 109, C.main), lb(74, 48, '3', 12, C.blue, 'end', true), lb(74, 92, '2', 12, C.main, 'end', true), lb(240, 40, '全体 1000cm³', 11, C.ink, 'middle', true), ...say('頂点から切り口まで3、頂点から底面まで5')] },
  { note: '❓小さい四角すいと全体の関係は？→底に平行に切るので、切り口は底面と同じ正方形。同じ形で小さくなった（相似＝そうじ）四角すいです。相似比は、頂点からの高さの比3：5です。', add: eq('相似比 ＝ 3：5（小さい：全体）', C.blue, FILL.blue) },
  { note: '❓体積の比は？→相似な立体は、たて・横・高さがぜんぶ同じ割合で変わります。立方体の個数で比べると3×3×3＝27個と5×5×5＝125個。体積の比は27：125です。', add: [...fresh(), ...twoCubes(3, 5), lb(64, 132, '3×3×3＝27個', 11, C.blue, 'middle', true), lb(224, 142, '5×5×5＝125個', 11, C.red, 'middle', true), ...say('長さの比を3回かける → 27：125', C.purple)] },
  { note: '❓1000cm³は比のどれにあたる？→全体なので、比の125です。125が1000cm³なので、比の1あたりは1000÷125＝8cm³です。', add: eq('1000 ÷ 125 ＝ 8cm³（比の1あたり）', C.blue, FILL.blue) },
  { note: '❓小さい四角すいは？→比の27にあたるので、8×27＝216cm³です。', add: [...fresh(), ...pyr(3 / 5), lb(170, 58, '27', 13, C.ink, 'middle', true), ...eq('8 × 27 ＝ 216cm³', C.red, FILL.red)] },
  { note: '❓よくあるまちがいは？→1000cm³を、切ったあとの「残りの立体」の体積と読むことです。問題文のとおり、1000cm³は切る前の全体です。', add: [...fresh(), ...pyr(3 / 5), lb(240, 50, '1000cm³は\n切る前の全体', 10, C.red, 'middle', true), ...say('1000cm³ ＝ もとの四角すい全体', C.red)] },
  { note: '答えは216cm³。確かめ：216÷1000＝0.216で、27÷125＝0.216と同じです。残りの立体は1000−216＝784cm³で、8×(125−27)＝8×98＝784と合います。', add: eq('216 ÷ 1000 ＝ 27 ÷ 125 → 答え 216cm³') },
], '全体を125とおく：小さい四角すいは27');

// ───────── 排水管と給水管 ─────────
const f072 = show([
  { note: '満水で3600Lの水そうがあります。排水管Aだけだと12分で空、満水からAとB（給水管）を同時に開けると20分で空になります。給水管Bだけで空の水そうを満水にするには何分かかるでしょう。', add: [bx(30, 30, 90, 70, '満水 3600L', C.blue, FILL.blue, 13), lb(215, 44, 'Aだけ排水：12分で空', 11, C.main, 'middle', true), lb(215, 68, 'AとB同時：20分で空', 11, C.main, 'middle', true), lb(215, 92, 'Bだけ給水：？分で満水', 11, C.red, 'middle', true), ...say('AとBは 水の出入りが反対')] },
  { note: '❓Aは1分に何L排水する？→3600Lを12分で空にするので、3600÷12＝300L。1分あたりの量に直すと、くらべやすくなります。', add: [...fresh(), bx(40, 40, 240, 26, 'Aだけ：1分に 300L 減る', C.main, FILL.warm, 13), ...eq('3600 ÷ 12 ＝ 300L', C.main, FILL.warm)] },
  { note: '❓AとB同時のときは、1分に何L減る？→3600Lが20分で空になるので、3600÷20＝180Lずつ減ります。', add: [bx(40, 84, 144, 26, '同時：1分に 180L 減る', C.purple, FILL.purple, 12), ...eq('3600 ÷ 20 ＝ 180L', C.purple, FILL.purple)] },
  { note: '❓2つをくらべると？→Aだけなら1分に300L減るのに、Bも開けると180Lしか減りません。ちがいは300−180＝120L。この120Lぶんは、Bが水を入れて減りを打ち消した量です。', add: [bx(184, 84, 96, 26, 'Bが入れた 120L', C.blue, FILL.blue, 11), ...eq('300 − 180 ＝ 120L（Bの給水）', C.blue, FILL.blue)] },
  { note: '❓なぜ引き算？→同時に開けたとき、水が減る量は「排水する量−給水する量」になるからです。300−□＝180の□が、Bの1分の給水量です。', add: both('減る量 ＝ 排水 − 給水', '300 − □ ＝ 180　→　□ ＝ 120', C.blue, FILL.blue) },
  { note: '❓Bだけで満水にするには？→Bは1分に120L入れます。3600Lが入るまで、3600÷120＝30分です。', add: eq('3600 ÷ 120 ＝ 30分', C.red, FILL.red) },
  { note: '❓よくあるまちがいは？→排水と給水が同時に起こっていることを見落とし、300と120を足してしまうことです。同時のときは、差になります。', add: say('同時 → 足し算ではなく、差（引き算）', C.red) },
  { note: '答えは30分。確かめ：300−120＝180Lで、AとB同時の減る量と同じです。3600÷180＝20分で、問題の条件とも合います。', add: eq('300−120＝180、3600÷180＝20 → 答え 30分') },
], '排水300 − 給水□ ＝ 同時に減る180');

// ───────── 形の変わる水そう ─────────
const tank73 = (): E[] => [pg([[100, 140], [220, 140], [220, 110], [190, 110], [190, 50], [130, 50], [130, 110], [100, 110]], C.main, FILL.gray), lb(94, 118, '下 40×40', 10, C.main, 'end'), lb(94, 132, '高さ10cm', 10, C.main, 'end'), lb(196, 80, '上 20×20', 10, C.main, 'start'), lb(196, 94, '高さ20cm', 10, C.main, 'start')];
const f073 = show([
  { note: '下が底面40cm×40cm・高さ10cm、上が底面20cm×20cm・高さ20cmの直方体（ちょくほうたい）を重ねた水そうに、毎分1000cm³で水を入れます。水面の高さが25cmになるのは何分後でしょう。', add: [...tank73(), ln(100, 65, 252, 65, C.red, true), lb(254, 56, '25cm', 10, C.red, 'middle', true), ...say('毎分1000cm³で 水面を25cmにする')] },
  { note: '❓水面25cmまでに、水はどこを満たす？→下の部分の10cmを全部満たし、そのうえの上の部分を、25−10＝15cmぶん満たします。底面積が変わるので、2つに分けて考えます。', add: [ar(270, 140, 270, 110, C.blue), ar(270, 110, 270, 65, C.red), lb(276, 126, '10cm', 10, C.blue, 'start', true), lb(276, 90, '15cm', 10, C.red, 'start', true), ...say('下の10cm ＋ 上の15cm に分けて考える', C.ink)] },
  { note: '❓下の部分の水の量は？→底面積は40×40＝1600cm²。1600cm²の板が10cmぶん重なるので、1600×10＝16000cm³です。', add: [pg([[100, 140], [220, 140], [220, 110], [100, 110]], C.blue, FILL.blue), ...eq('40×40×10 ＝ 16000cm³', C.blue, FILL.blue)] },
  { note: '❓かかる時間は？→1分に1000cm³ずつ入るので、16000cm³は1000が16個ぶん。16000÷1000＝16分です。', add: eq('16000 ÷ 1000 ＝ 16分', C.blue, FILL.blue) },
  { note: '❓上の部分の水の量は？→上の水の高さは、25cmではなく25−10＝15cmです（下の10cmは数え終わっています）。底面積20×20＝400cm²が15cmぶんで、400×15＝6000cm³です。', add: [pg([[130, 110], [190, 110], [190, 65], [130, 65]], C.blue, FILL.blue), lb(160, 88, '15cm', 11, C.ink, 'middle', true), ...eq('20×20×15 ＝ 6000cm³', C.red, FILL.red)] },
  { note: '❓かかる時間は？→6000÷1000＝6分です。', add: eq('6000 ÷ 1000 ＝ 6分', C.red, FILL.red) },
  { note: '❓全部で何分？→下を満たす16分と、上を満たす6分を足して、16＋6＝22分後です。', add: eq('16 ＋ 6 ＝ 22分後') },
  { note: '答えは22分後。確かめ：1000×22＝22000cm³。下の16000cm³と上の6000cm³を足した22000cm³と同じです。上の高さを25cmのまま計算しないこと。', add: eq('16000＋6000＝22000＝1000×22 → 答え 22分後') },
], '形が変わる水そう：区間ごとに 体積÷毎分の量');

// ───────── 給水管A・B（あとからB） ─────────
const tl = (): E[] => [ln(130, 34, 130, 118, C.gray, true), ln(250, 34, 250, 118, C.gray, true), bx(50, 40, 200, 26, 'A　毎分60L', C.blue, FILL.blue, 12), bx(130, 84, 120, 26, 'B　毎分？L', C.main, FILL.warm, 12), lb(50, 130, '0分', 10, C.ink), lb(130, 130, '10分', 10, C.ink), lb(250, 130, '25分', 10, C.ink)];
const f074 = show([
  { note: '空の水そう（3000L）に、毎分60Lの給水管Aで水を入れ始め、10分後にBも同時に使い始めたところ、25分後に満水になりました。Bは毎分何Lでしょう。', add: [...tl(), ...say('Aは0分から、Bは10分後から。どちらも25分まで')] },
  { note: '❓Aは何L入れた？→Aは最初から満水まで、25分間ずっと使われています。60×25＝1500Lです。', add: [bx(50, 40, 200, 26, 'A　60×25 ＝ 1500L', C.blue, FILL.blue, 13), ...eq('60 × 25 ＝ 1500L（A）', C.blue, FILL.blue)] },
  { note: '❓Bは何L入れた？→水そう全体が3000Lで、Aが1500L入れたので、残りはBが入れた量です。3000−1500＝1500L。', add: [bx(130, 84, 120, 26, 'B　1500L', C.main, FILL.warm, 13), ...eq('3000 − 1500 ＝ 1500L（B）', C.main, FILL.warm)] },
  { note: '❓Bは何分間使われた？→Bは10分後から25分まで。図の130〜250の長さで、25−10＝15分間です（最初の10分は使っていません）。', add: [ar(130, 116, 250, 116, C.red), ar(250, 116, 130, 116, C.red), lb(190, 127, '15分間', 11, C.red, 'middle', true), ...eq('25 − 10 ＝ 15分間', C.red, FILL.red)] },
  { note: '❓毎分の量は？→15分間で1500L入れたので、1分あたりは1500÷15＝100Lです。', add: eq('1500 ÷ 15 ＝ 毎分100L', C.red, FILL.red) },
  { note: '❓よくあるまちがいは？→Bの使われた時間を25分全体として、1500÷25としてしまうことです。Bは途中から使ったので、15分間で割ります。', add: say('1500÷25 ではない（Bは15分間だけ）', C.red) },
  { note: '答えは毎分100L。確かめ：Bは100×15＝1500L、Aは60×25＝1500L。1500＋1500＝3000Lで、水そう全体と同じです。', add: eq('1500＋1500＝3000 → 答え 毎分100L') },
], '全体 − Aの量 ＝ Bの量、Bの量 ÷ 使った時間');

// ───────── 反対方向に進む（速さの比） ─────────
const road77 = (): E[] => [ln(14, 80, 254, 80, C.gray, false, 3), ci(110, 80, 7, undefined, C.ink, FILL.yellow), lb(110, 98, '出発点', 10, C.ink)];
const f077 = show([
  { note: 'A君とB君は同じ地点から反対方向に同時に出発しました。速さの比は3：2（Aが速い）で、20分後に2人は1200mはなれました。A君の分速を求めます。', add: [...road77(), ar(120, 62, 250, 62, C.blue), ar(100, 62, 18, 62, C.main), lb(186, 52, 'A（速い）', 11, C.blue, 'middle', true), lb(60, 52, 'B', 11, C.main, 'middle', true), lb(160, 122, '20分後 1200m はなれた', 12, C.ink, 'middle', true), ...say('速さの比 A：B ＝ 3：2')] },
  { note: '❓1分にどれだけはなれる？→20分で1200mはなれたので、1分では1200÷20＝60mはなれます。', add: eq('1200 ÷ 20 ＝ 60m（1分にはなれる長さ）', C.blue, FILL.blue) },
  { note: '❓この60mは、何を表している？→反対向きに進むと、2人の間は「Aが進んだ分＋Bが進んだ分」だけはなれます。だから60は、2人の速さの和（分速）です。', add: [...both('はなれる長さ ＝ Aの分＋Bの分', '分速の和 ＝ 60', C.purple, FILL.purple)] },
  { note: '❓速さの比3：2は、どう使う？→速さを同じ大きさの箱5個に分けます。Aは3個、Bは2個で、あわせて5個ぶんが分速の和60です。', add: [...fresh(), ...[0, 1, 2, 3, 4].map((i) => bx(35 + i * 50, 50, 50, 40, undefined, i < 3 ? C.blue : C.main, i < 3 ? FILL.blue : FILL.warm)), lb(110, 40, 'A　3個', 12, C.blue, 'middle', true), lb(235, 40, 'B　2個', 12, C.main, 'middle', true), ...say('3＋2＝5個ぶん ＝ 分速60', C.purple)] },
  { note: '❓箱1個ぶんの速さは？→5個ぶんが60なので、60÷5＝12。どの箱も分速12mです。', add: [...[0, 1, 2, 3, 4].map((i) => lb(60 + i * 50, 70, '12', 12, C.ink, 'middle', true)), ...eq('60 ÷ 5 ＝ 12（箱1個ぶん）', C.purple, FILL.purple)] },
  { note: '❓A君の速さは？→Aは箱3個ぶんなので、12×3＝分速36mです（Bは12×2＝分速24m）。', add: eq('A ＝ 12 × 3 ＝ 分速36m', C.blue, FILL.blue) },
  { note: '❓よくあるまちがいは？→比の合計3＋2＝5で割るのを忘れ、60÷3や60×3としてしまうことです。60は2人の速さの和なので、まず5で割って箱1個ぶんを出します。', add: say('60をそのまま3倍しない（先に÷5）', C.red) },
  { note: '答えは分速36m。確かめ：Bは分速24m。36＋24＝60で速さの和と同じ。(36＋24)×20＝1200mで、問題の条件とも合います。', add: eq('(36＋24)×20＝1200 → 答え 分速36m') },
], '反対向き：分速の和 ＝ 間の長さ ÷ 時間、比で分ける');

export const figuresSchoolChugaku07: Record<string, Figure> = {
  kankan_top_sansu_003: f003,
  kankan_top_sansu_008: f008,
  kankan_top_sansu_011: f011,
  kankan_top_sansu_012: f012,
  kankan_top_sansu_013: f013,
  kankan_top_sansu_015: f015,
  kankan_top_sansu_019: f019,
  kankan_top_sansu_021: f021,
  kankan_top_sansu_027: f027,
  kankan_top_sansu_028: f028,
  kankan_top_sansu_029: f029,
  kankan_top_sansu_033: f033,
  kankan_top_sansu_038: f038,
  kankan_top_sansu_042: f042,
  kankan_top_sansu_049: f049,
  kankan_top_sansu_053: f053,
  kankan_top_sansu_054: f054,
  kankan_top_sansu_055: f055,
  kankan_top_sansu_058: f058,
  kankan_top_sansu_060: f060,
  kankan_top_sansu_061: f061,
  kankan_top_sansu_064: f064,
  kankan_top_sansu_065: f065,
  kankan_top_sansu_066: f066,
  kankan_top_sansu_067: f067,
  kankan_top_sansu_068: f068,
  kankan_top_sansu_069: f069,
  kankan_top_sansu_070: f070,
  kankan_top_sansu_072: f072,
  kankan_top_sansu_073: f073,
  kankan_top_sansu_074: f074,
  kankan_top_sansu_077: f077,
};
