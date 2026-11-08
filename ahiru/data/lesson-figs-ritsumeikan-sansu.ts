// 立命館対策（高校受験・数学）12単元の動く図解。キーは lessons-ritsumeikan-sansu.ts の figureId（lf_ritsumeikan_sansu_01〜12）と対応。
// どの図も 7枚以上のスライド（状況→手がかり→理由→計算→答え→確かめ→まちがい）。座標は 320×240。
// 数値は各単元の例題と同じ。例題は python で検算済み（図の座標も同じ値から計算している）。
import type { Figure, DiagramElement as E } from './figures';
import { show, fresh, band, cover, bx, lb, ln, pg, ci, ar, C, FILL } from './diagram-kit';

const K = {
  b: [C.blue, FILL.blue],
  g: [C.green, FILL.green],
  r: [C.red, FILL.red],
  p: [C.purple, FILL.purple],
  y: [C.main, FILL.yellow],
  k: [C.gray, FILL.gray],
} as const;
type Tone = keyof typeof K;

/** 見出し＋縦に並べた箱（最大5つ）で、スライド全体を作りかえる。 */
const rows = (head: string, items: [string, Tone][], size = 14): E[] =>
  fresh(lb(12, 20, head, 12, C.gray, 'start', true), ...items.map(([t, c], i) => bx(20, 34 + i * 40, 280, 32, t, K[c][0], K[c][1], size)));

/** 右の列（x=204〜）の文字を、前のものをおおって書きかえる。 */
const col = (lines: [string, Tone?][], x0 = 204, y0 = 36, size = 11): E[] => [
  cover(x0, 0, 320 - x0, 240),
  ...lines.map(([t, c], i) => lb(x0 + 4, y0 + i * 20, t, size, c ? K[c][0] : C.ink, 'start', c === 'g' || c === 'r')),
];

/** 下の帯（y から下）に2行の説明を書く。 */
const cap = (y: number, a: string, b?: string, tone: Tone = 'b'): E[] =>
  band(y, lb(160, y + 14, a, 12, K[tone][0], 'middle', true), ...(b ? [lb(160, y + 32, b, 12, C.ink, 'middle')] : []));

const title = (t: string): E => lb(12, 16, t, 12, C.gray, 'start', true);

// ───────────────────────── 01 平方根 ─────────────────────────
const f01 = show(
  [
    { note: 'x＝√5＋2、y＝√5－2 のとき、x²＋y² と x²－y² を求める問題。そのまま2乗すると、√5をふくむ展開が2回いる。', add: rows('①状況・問い', [['x＝√5＋2','b'],['y＝√5－2','b'],['x²＋y² ＝ ？','y'],['x²－y² ＝ ？','y']]) },
    { note: '手がかり。和・差・積を先に出す。和は＋2と－2が消え、差は√5が消え、積は和と差の積の公式で√が消える。どれも簡単な数になる。', add: rows('②手がかり：和・差・積', [['x＋y ＝ 2√5','g'],['x－y ＝ 4','g'],['xy ＝ (√5)²－2² ＝ 1','g']]) },
    { note: '理由。(x＋y)² を展開すると x²＋2xy＋y² になるので、両辺から2xyを引くと x²＋y² が出る。2乗の差は和と差の積に因数分解できる。', add: rows('③理由：式を作りかえる', [['x²＋y² ＝ (x＋y)²－2xy','p'],['(x＋y)²＝x²＋2xy＋y² だから','k'],['x²－y² ＝ (x＋y)(x－y)','p']], 13) },
    { note: '計算その1。(2√5)² は 2²×(√5)²＝4×5＝20。そこから 2xy＝2×1＝2 を引いて 18。', add: rows('④計算：x²＋y²', [['x²＋y² ＝ (2√5)²－2×1','b'],['＝ 20－2','b'],['＝ 18','g']]) },
    { note: '計算その2。x²－y² は (x＋y)(x－y) に直して、2√5×4＝8√5。', add: rows('④計算：x²－y²', [['x²－y² ＝ (x＋y)(x－y)','b'],['＝ 2√5 × 4','b'],['＝ 8√5','g']]) },
    { note: '答え。x²＋y²＝18、x²－y²＝8√5。', add: rows('⑤答え', [['x²＋y² ＝ 18','g'],['x²－y² ＝ 8√5','g']]) },
    { note: '確かめ。√5≒2.236 として小数で計算すると、和は約18.0、差は約17.89。8√5≒17.89 なので、答えと一致する。', add: rows('⑥確かめ（小数でおよその値）', [['x≒4.236　y≒0.236','k'],['x²≒17.94　y²≒0.06　和≒18.0','k'],['差≒17.89　8√5≒17.89 で一致','g']], 13) },
    { note: 'よくあるまちがい。x²＋y² を (x＋y)² と同じにしてしまうと、2xy が余分に入って 20 になる。2xy を引くのを忘れない。', add: rows('⑦まちがい', [['×　x²＋y² ＝ (x＋y)² ＝ 20','r'],['（2xy を引き忘れている）','k'],['○　(x＋y)²－2xy ＝ 18','g']]) },
  ],
  '答え　x²＋y²＝18、x²－y²＝8√5',
);

// ───────────────────────── 02 食塩水 ─────────────────────────
const beaker = (x: number, y: number, w: number, h: number, fill: string, color: string): E[] => [
  pg([[x, y + h * 0.35], [x + w, y + h * 0.35], [x + w, y + h], [x, y + h]], color, fill),
  ln(x, y, x, y + h, color, false, 2),
  ln(x, y + h, x + w, y + h, color, false, 2),
  ln(x + w, y, x + w, y + h, color, false, 2),
];
const beakers = (): E[] => [
  title('5%の食塩水 x g ＋ 12%の食塩水 y g'),
  ...beaker(20, 60, 70, 90, FILL.blue, C.blue),
  ...beaker(125, 60, 70, 90, FILL.purple, C.purple),
  ...beaker(230, 60, 70, 90, FILL.green, C.green),
  lb(55, 52, 'A', 13, C.blue, 'middle', true), lb(160, 52, 'B', 13, C.purple, 'middle', true), lb(265, 52, '混ぜたもの', 13, C.green, 'middle', true),
  lb(55, 112, '5%', 16, C.ink, 'middle', true), lb(55, 134, 'x g', 13, C.ink, 'middle'),
  lb(160, 112, '12%', 16, C.ink, 'middle', true), lb(160, 134, 'y g', 13, C.ink, 'middle'),
  lb(265, 112, '9%', 16, C.ink, 'middle', true), lb(265, 134, '700 g', 13, C.ink, 'middle'),
  lb(110, 112, '＋', 20, C.gray, 'middle'), lb(212, 112, '＝', 20, C.gray, 'middle'),
];
const f02 = show(
  [
    { note: '状況。5%の食塩水 x g と、12%の食塩水 y g を混ぜて、9%の食塩水を 700g 作る。x と y を求める。', add: fresh(...beakers()) },
    { note: '手がかり。食塩の量＝食塩水の量×濃度。濃度（％）は割合なので足せないが、食塩の「量」は足せる。', add: [...band(165, bx(20, 172, 280, 30, '食塩の量 ＝ 食塩水の量 × 濃度', C.blue, FILL.blue, 14), lb(160, 224, '濃度は足せない。「量」なら足せる', 12, C.gray, 'middle'))] },
    { note: '理由。食塩は、混ぜる前も混ぜた後も増えも減りもしない。だから「食塩の量の合計」が変わらないことで式が作れる。', add: band(165, bx(20, 172, 280, 28, '混ぜても、食塩の量の合計は変わらない', C.purple, FILL.purple, 13), bx(20, 206, 280, 28, '→ 食塩の「量」で式を立てる', C.purple, FILL.purple, 13)) },
    { note: '式を2本立てる。食塩水の量は x＋y＝700。食塩の量は 0.05x＋0.12y＝700×0.09＝63。', add: band(165, bx(20, 172, 280, 28, '食塩水の量　x＋y＝700', C.green, FILL.green, 14), bx(20, 206, 280, 28, '食塩の量　0.05x＋0.12y＝63', C.green, FILL.green, 14)) },
    { note: '計算。y＝700－x を代入して、0.05x＋0.12(700－x)＝63。展開すると 84－0.07x＝63 で、x＝300。y＝700－300＝400。', add: rows('④計算', [['y＝700－x を代入','b'],['0.05x＋0.12(700－x)＝63','b'],['84－0.07x＝63　x＝300','g'],['y＝700－300＝400','g']]) },
    { note: '答え。5%の食塩水 300g、12%の食塩水 400g。', add: rows('⑤答え', [['5%の食塩水　300 g','g'],['12%の食塩水　400 g','g']]) },
    { note: '確かめ。食塩は 300×0.05＝15g と 400×0.12＝48g で、合計63g。700gの9%は63gなので、条件に合う。', add: rows('⑥確かめ', [['300×0.05＝15 g','k'],['400×0.12＝48 g','k'],['15＋48＝63 g ＝ 700×0.09','g']]) },
    { note: 'よくあるまちがい。(5＋12)÷2＝8.5% と平均してしまう。量がちがうので、濃度は平均にならない。食塩の量で考える。', add: rows('⑦まちがい', [['×　(5＋12)÷2＝8.5% と考える','r'],['濃度は平均にならない（量がちがう）','k'],['○　食塩の「量」で式を立てる','g']]) },
  ],
  '答え　5%の食塩水300g、12%の食塩水400g',
);

// ───────────────────────── 03 道の幅 ─────────────────────────
const land = (): E[] => [pg([[20, 40], [180, 40], [180, 136], [20, 136]], C.gray, FILL.green)];
const roadsCross = (): E[] => [
  pg([[80, 40], [96, 40], [96, 136], [80, 136]], C.main, FILL.yellow),
  pg([[20, 76], [180, 76], [180, 92], [20, 92]], C.main, FILL.yellow),
];
const f03 = show(
  [
    { note: '状況。縦12m・横20mの土地に、幅 x m の道を縦と横に1本ずつ通す。道をのぞいた花だんが180m²になる x を求める。', add: fresh(title('土地 20m×12m、道の幅 x m'), ...land(), lb(100, 34, '20m', 11, C.gray, 'middle'), lb(186, 92, '12m', 11, C.gray, 'start'), lb(192, 62, '花だん 180m²', 12, C.green, 'start', true)) },
    { note: '手がかり。道は縦と横に1本ずつで、交わっている。交わりの重なりを考えると面倒になる。', add: [...roadsCross(), lb(192, 120, '道の幅 x m', 12, C.main, 'start', true)] },
    { note: '理由。道を土地の左と上の端に寄せても、花だんの面積は変わらない（平行移動しても面積は同じ）。すると花だんは、縦(12－x)・横(20－x)の長方形になる。', add: fresh(title('道を端に寄せる'), pg([[20, 40], [180, 40], [180, 136], [20, 136]], C.main, FILL.yellow), pg([[36, 56], [180, 56], [180, 136], [36, 136]], C.green, FILL.green), lb(108, 152, '20－x', 12, C.green, 'middle', true), lb(186, 100, '12－x', 12, C.green, 'start', true)) },
    { note: '式を立てる。花だんの面積＝(20－x)(12－x)＝180。展開して整理すると x²－32x＋60＝0。', add: rows('③式と整理', [['(20－x)(12－x)＝180','b'],['240－32x＋x²＝180','b'],['x²－32x＋60＝0','g']]) },
    { note: '因数分解。かけて0になるのは、どちらかが0のとき。だから x－2＝0 または x－30＝0。', add: rows('④因数分解', [['(x－2)(x－30)＝0','b'],['x＝2、x＝30','g']]) },
    { note: '解の吟味。道の幅は、土地の縦12mより小さくなければならない。x＝30 は12mより大きいので、問題に合わない。x＝2 は合う。', add: rows('⑤解の吟味', [['道の幅は 12m より小さい','p'],['x＝30 は不適','r'],['x＝2 は適する','g']]) },
    { note: '答え。道の幅は2m。', add: rows('⑥答え', [['道の幅　2 m','g']]) },
    { note: '確かめ。x＝2 のとき、花だんは縦10m・横18m。10×18＝180m²で、条件に合う。', add: rows('⑦確かめ', [['縦 12－2＝10 m、横 20－2＝18 m','k'],['10×18＝180 m²　✓','g']]) },
    { note: 'よくあるまちがい。解の吟味をせず、2mと30mの両方を答えてしまう。', add: rows('⑧まちがい', [['×　2m と 30m の両方を答える','r'],['○　条件に合う解だけを答える','g']]) },
  ],
  '答え　2m',
);

// ───────────────────────── 04 放物線と直線 ─────────────────────────
const X4 = (x: number) => 100 + 17 * x;
const Y4 = (y: number) => 190 - 17 * y;
const axes4 = (): E[] => {
  const out: E[] = [ln(X4(-4.5), Y4(0), X4(6), Y4(0), C.gray, false, 1), ln(X4(0), Y4(-0.4), X4(0), Y4(9.3), C.gray, false, 1), lb(194, 184, 'x', 11, C.gray, 'start'), lb(106, 34, 'y', 11, C.gray, 'start')];
  for (let x = -4; x < 4.2; x += 0.4) {
    const x2 = Math.min(x + 0.4, 4.2);
    out.push(ln(X4(x), Y4(x * x / 2), X4(x2), Y4(x2 * x2 / 2), C.blue, false, 2));
  }
  return out;
};
const O4: [number, number] = [X4(0), Y4(0)];
const A4: [number, number] = [X4(-2), Y4(2)];
const B4: [number, number] = [X4(4), Y4(8)];
const f04 = show(
  [
    { note: '状況。放物線 y＝x²÷2 の上に、x座標が－2 の点A と、x座標が4 の点B がある。直線ABの式と、△OABの面積、さらに△OABを面積で二等分する直線を求める。', add: fresh(title('放物線 y＝x²÷2'), ...axes4(), ...col([['y＝x²÷2', 'b'], ['A：x＝－2'], ['B：x＝4']])) },
    { note: '手がかり。放物線上の点は、x座標を式に代入すれば y座標が出る。A は (－2)²÷2＝2、B は 4²÷2＝8。', add: [ci(A4[0], A4[1], 3, undefined, C.red, C.red), ci(B4[0], B4[1], 3, undefined, C.red, C.red), lb(A4[0] - 4, A4[1] + 16, 'A(－2,2)', 11, C.red, 'end', true), lb(B4[0] - 6, B4[1] - 4, 'B(4,8)', 11, C.red, 'end', true), ...col([['放物線上の点は', 'k'], ['xを代入して求める', 'k'], ['A：(－2)²÷2＝2'], ['B：4²÷2＝8']])] },
    { note: '直線ABの式。傾き＝(8－2)÷(4＋2)＝1。A(－2,2) を通るので、y＝x＋4。y軸との交点は C(0,4)。公式の a(p＋q)＝0.5×(－2＋4)＝1 とも一致する。', add: [ln(X4(-3.5), Y4(0.5), X4(5), Y4(9), C.green, false, 2), ci(X4(0), Y4(4), 3, undefined, C.purple, C.purple), lb(X4(0) + 7, Y4(4) + 4, 'C(0,4)', 11, C.purple, 'start', true), ...col([['傾き＝6÷6＝1'], ['A を通るので'], ['y＝x＋4', 'g'], ['C は y軸との交点'], ['公式 a(p＋q)', 'k'], ['0.5×2＝1 ✓', 'k']])] },
    { note: '△OABの面積。OC（y軸上）を底辺にして、△OACと△OCBに分ける。△OAC＝4×2÷2＝4、△OCB＝4×4÷2＝8。合わせて12。', add: [pg([O4, A4, B4], C.main, FILL.yellow), ln(X4(0), Y4(0), X4(0), Y4(4), C.purple, true, 2), ...col([['底辺 OC＝4'], ['高さ A は2、B は4'], ['△OAC＝4×2÷2＝4'], ['△OCB＝4×4÷2＝8'], ['合計 12', 'g']])] },
    { note: '面積を二等分する直線。中点Mと頂点Oを結ぶ中線は、底辺が等しく高さが共通なので、面積を二等分する。ABの中点は M(1,5)。', add: [ci(X4(1), Y4(5), 3, undefined, C.green, C.green), lb(X4(1) + 7, Y4(5) + 4, 'M(1,5)', 11, C.green, 'start', true), ln(X4(0), Y4(0), X4(1.6), Y4(8), C.green, false, 2), ...col([['ABの中点M', 'g'], ['x：(－2＋4)÷2＝1'], ['y：(2＋8)÷2＝5'], ['直線OM：y＝5x', 'g']])] },
    { note: '答え。直線ABは y＝x＋4、△OABの面積は12、面積を二等分する直線は y＝5x。', add: col([['直線AB', 'g'], ['y＝x＋4'], ['△OAB＝12', 'g'], ['二等分する直線', 'g'], ['y＝5x']]) },
    { note: '確かめ。△OAM＝6、△OMB＝6 で等しく、合計は12。M(1,5) が y＝x＋4 の上にあるかも、5＝1＋4 で確かめられる。', add: col([['△OAM＝6', 'k'], ['△OMB＝6', 'k'], ['合計 12 ✓', 'g'], ['M は y＝x＋4 上', 'k'], ['5＝1＋4 ✓', 'g']]) },
    { note: 'よくあるまちがい。y＝x²÷2 の 0.5 を、直線の傾きだと思ってしまう。傾きは2点から出す。', add: rows('まちがい', [['×　傾きを 0.5（a の値）とする','r'],['a は放物線の開き方','k'],['○　2点から (8－2)÷(4＋2)＝1','g']]) },
  ],
  '答え　y＝x＋4、△OAB＝12、二等分する直線 y＝5x',
);

// ───────────────────────── 05 動点 ─────────────────────────
const rect5 = (): E[] => [
  pg([[20, 50], [116, 50], [116, 122], [20, 122]], C.gray, FILL.warm),
  lb(16, 50, 'A', 12, C.ink, 'end', true), lb(122, 50, 'D', 12, C.ink, 'start', true),
  lb(16, 136, 'B', 12, C.ink, 'end', true), lb(122, 136, 'C', 12, C.ink, 'start', true),
];
const X5 = (x: number) => 170 + 18 * x;
const Y5 = (y: number) => 200 - 6 * y;
const graph5 = (): E[] => [
  ln(X5(0), Y5(0), 302, Y5(0), C.gray, false, 1), ln(X5(0), Y5(0), X5(0), Y5(25), C.gray, false, 1),
  lb(166, Y5(24) + 4, '24', 10, C.gray, 'end'), lb(X5(4), 214, '4', 10, C.gray, 'middle'), lb(X5(7), 214, '7', 10, C.gray, 'middle'),
  lb(174, 44, 'y(cm²)', 10, C.gray, 'start'), lb(296, 228, 'x(秒)', 10, C.gray, 'end'),
  ln(X5(0), Y5(24), X5(4), Y5(24), C.blue, false, 3), ln(X5(4), Y5(24), X5(7), Y5(0), C.blue, false, 3),
];
const left5 = (lines: string[], tone: Tone = 'b'): E[] => [
  cover(6, 148, 160, 90),
  ...lines.map((t, i) => lb(12, 166 + i * 22, t, 12, i === 0 ? K[tone][0] : C.ink, 'start', i === 0)),
];
const f05 = show(
  [
    { note: '状況。長方形ABCD（AB＝6cm、BC＝8cm）で、点PがBを出発して B→C→D を毎秒2cmで進む。x秒後の△APDの面積を y として、y＝12 になる時刻を求める。', add: fresh(title('P：B→C→D　毎秒2cm'), ...rect5(), ci(20, 122, 4, undefined, C.red, C.red), lb(26, 114, 'P', 12, C.red, 'start', true), lb(130, 86, 'AB＝6cm', 12, C.ink, 'start'), lb(130, 106, 'BC＝8cm', 12, C.ink, 'start'), lb(12, 172, '△APD の面積を y とする', 13, C.blue, 'start', true), lb(12, 196, 'y＝12 になるのは何秒後？', 13, C.ink, 'start')) },
    { note: '手がかり。BCの長さは8cmなので、BC上にいるのは 8÷2＝4秒間。CD上にいるのは 6÷2＝3秒間。曲がり角の4秒で、場合を分ける。', add: fresh(title('区切りの時刻'), ...rect5(), ci(68, 122, 4, undefined, C.red, C.red), lb(68, 140, 'P', 12, C.red, 'middle', true), ...col([['B→C：8÷2＝4秒', 'b'], ['C→D：6÷2＝3秒', 'b'], ['4秒で曲がる', 'k'], ['0≦x≦4 と', 'k'], ['4≦x≦7 に分ける', 'k']], 130, 70, 12)) },
    { note: '理由その1。P が BC 上にあるとき、△APD の底辺 AD＝8 は動かず、高さ（PからADまでの距離）は、BC と AD が平行なので AB＝6 で一定。だから面積は 8×6÷2＝24 でずっと変わらない。', add: fresh(title('0≦x≦4：P は BC 上'), ...rect5(), pg([[20, 50], [68, 122], [116, 50]], C.red, FILL.red), ci(68, 122, 4, undefined, C.red, C.red), lb(68, 140, 'P', 12, C.red, 'middle', true), ...col([['底辺 AD＝8', 'r'], ['高さ AB＝6（一定）', 'r'], ['y＝8×6÷2', 'r'], ['＝24', 'g']], 130, 70, 12)) },
    { note: '理由その2。P が CD 上にあるとき、PD＝(全体の道のり14)－(進んだ道のり2x)＝14－2x。底辺をDPとみると、ADはDPと直角なので y＝8×(14－2x)÷2＝56－8x。x＝5.5 なら PD＝3。', add: fresh(title('4≦x≦7：P は CD 上'), ...rect5(), pg([[20, 50], [116, 86], [116, 50]], C.red, FILL.red), ci(116, 86, 4, undefined, C.red, C.red), lb(122, 92, 'P', 12, C.red, 'start', true), ...col([['x＝5.5 のとき', 'k'], ['PD＝14－2x', 'r'], ['＝14－11＝3', 'r'], ['y＝8×PD÷2', 'r']], 130, 120, 12)) },
    { note: '式とグラフ。0≦x≦4 では y＝24（水平な線）、4≦x≦7 では y＝56－8x（右下がり）。x＝4 で 24 と 24 になり、グラフがつながる。', add: fresh(title('グラフ'), ...rect5(), ...graph5(), lb(12, 172, '0≦x≦4：y＝24', 12, C.blue, 'start', true), lb(12, 194, '4≦x≦7：y＝56－8x', 12, C.blue, 'start', true), lb(12, 216, 'x＝4 で式がつながる', 11, C.gray, 'start')) },
    { note: '計算。y＝12 とおく。0≦x≦4 では y＝24 なので12にならない。4≦x≦7 では 56－8x＝12、8x＝44、x＝5.5。この値は範囲に入っている。', add: [...graph5().slice(0, 0), ln(X5(0), Y5(12), X5(5.5), Y5(12), C.red, true, 1), ln(X5(5.5), Y5(12), X5(5.5), Y5(0), C.red, true, 1), ci(X5(5.5), Y5(12), 3, undefined, C.red, C.red), lb(X5(5.5), 214, '5.5', 10, C.red, 'middle', true), ...left5(['y＝12 とおく', '56－8x＝12', '8x＝44　x＝5.5'])] },
    { note: '答え。5.5秒後。0≦x≦4 では y＝24 で12にならないので、答えは 4≦x≦7 の中の1つだけ。', add: left5(['答え', '5.5秒後', '（4≦x≦7 に入る）'], 'g') },
    { note: '確かめ。5.5秒後は PD＝14－11＝3cm。△APD＝8×3÷2＝12cm²。条件に合う。', add: left5(['確かめ', 'PD＝14－11＝3 cm', '8×3÷2＝12 ✓'], 'g') },
    { note: 'よくあるまちがい。y＝24 の部分だけを見て「12になる時刻はない」と答えてしまう。場合分けしたすべての区間を調べる。', add: rows('まちがい', [['×　y＝24 だけ見て「なし」','r'],['（CD上で面積が減ることを落とす）','k'],['○　どの区間も調べて 5.5秒後','g']]) },
  ],
  '答え　5.5秒後',
);

// ───────────────────────── 06 証明 ─────────────────────────
const A6: [number, number] = [60, 170], B6: [number, number] = [200, 170], C6: [number, number] = [260, 90], D6: [number, number] = [120, 90];
const O6: [number, number] = [160, 130], E6: [number, number] = [130, 170], F6: [number, number] = [190, 90];
const base6 = (shade = false): E[] => [
  pg([A6, B6, C6, D6], C.gray, FILL.gray),
  ...(shade ? [pg([A6, O6, E6], C.red, FILL.red), pg([C6, O6, F6], C.blue, FILL.blue)] : []),
  ln(...A6, ...B6, C.ink, false, 2), ln(...B6, ...C6, C.ink, false, 2), ln(...C6, ...D6, C.ink, false, 2), ln(...D6, ...A6, C.ink, false, 2),
  ln(...A6, ...C6, C.gray, false, 1), ln(...B6, ...D6, C.gray, false, 1), ln(...E6, ...F6, C.purple, false, 2),
  lb(44, 184, 'A', 13, C.ink, 'start', true), lb(204, 184, 'B', 13, C.ink, 'start', true), lb(266, 92, 'C', 13, C.ink, 'start', true), lb(104, 88, 'D', 13, C.ink, 'start', true),
  lb(166, 124, 'O', 12, C.ink, 'start', true), lb(124, 188, 'E', 12, C.ink, 'start', true), lb(194, 84, 'F', 12, C.ink, 'start', true),
];
const f06 = show(
  [
    { note: '状況。平行四辺形ABCDの対角線の交点をOとする。Oを通る直線が、辺AB・辺CDと点E・Fで交わる。OE＝OF を証明する。', add: fresh(title('平行四辺形ABCD'), ...base6(), ...cap(200, 'OE＝OF を証明したい', '平行四辺形ABCD、Oは対角線の交点')) },
    { note: '手がかり。OEとOFをふくむ三角形は △AOE と △COF。この2つが合同なら、対応する辺として OE＝OF が言える。合同条件の3つの等しさを探す。', add: fresh(title('△AOE と △COF に注目'), ...base6(true), ...cap(200, '△AOE と △COF が合同なら', 'OE＝OF が言える', 'p')) },
    { note: '①AO＝CO。平行四辺形の対角線は、それぞれの中点で交わるから。', add: fresh(title('① 辺'), ...base6(), ln(...A6, ...O6, C.red, false, 4), ln(...O6, ...C6, C.red, false, 4), ...cap(200, '① AO＝CO', '（平行四辺形の対角線は中点で交わる）', 'r')) },
    { note: '②∠AOE＝∠COF。2直線ACとEFが交わってできる対頂角だから等しい。', add: fresh(title('② 角（対頂角）'), ...base6(), lb(130, 152, '●', 14, C.green, 'middle'), lb(190, 114, '●', 14, C.green, 'middle'), ...cap(200, '② ∠AOE＝∠COF', '（対頂角は等しい）', 'g')) },
    { note: '③∠EAO＝∠FCO。AB∥DC なので、錯角は等しい。', add: fresh(title('③ 角（錯角）'), ...base6(), lb(94, 168, '▲', 12, C.purple, 'middle'), lb(226, 98, '▲', 12, C.purple, 'middle'), ...cap(200, '③ ∠EAO＝∠FCO', '（AB∥DC の錯角は等しい）', 'p')) },
    { note: '合同の結論。①②③より、1組の辺とその両端の角がそれぞれ等しいので、△AOE≡△COF。辺AOは、角∠EAOと∠AOEにはさまれている。', add: fresh(title('合同'), ...base6(true), ...cap(200, '1組の辺とその両端の角が等しい', '△AOE≡△COF', 'b')) },
    { note: '結論。合同な図形の対応する辺は等しいので、OE＝OF。', add: fresh(title('結論'), ...base6(), ln(...O6, ...E6, C.green, false, 4), ln(...O6, ...F6, C.green, false, 4), ...cap(200, 'OE＝OF', '（合同な図形の対応する辺は等しい）', 'g')) },
    { note: '証明の流れのまとめ。辺・角・角の3つの等しさを、根拠つきで並べてから合同を言う。', add: rows('まとめ', [['AO＝CO（対角線は中点で交わる）','g'],['∠AOE＝∠COF（対頂角）','g'],['∠EAO＝∠FCO（錯角）','g'],['△AOE≡△COF　より　OE＝OF','p']], 13) },
    { note: 'よくあるまちがい。「Oが真ん中に見えるから等しい」のように、見た目を根拠にしてしまう。根拠は定理・定義・仮定で言い切る。', add: rows('まちがい', [['×　見た目が同じだから等しい','r'],['（図は根拠にならない）','k'],['○　等しい理由を1行ずつ書く','g']]) },
  ],
  '証明　△AOE≡△COF より OE＝OF',
);

// ───────────────────────── 07 相似（台形） ─────────────────────────
const A7: [number, number] = [100, 80], D7: [number, number] = [184, 80], B7: [number, number] = [60, 180], C7: [number, number] = [200, 180], P7: [number, number] = [137.5, 117.5];
const base7 = (diag = false): E[] => [
  ln(...A7, ...D7, C.ink, false, 2), ln(...D7, ...C7, C.ink, false, 2), ln(...C7, ...B7, C.ink, false, 2), ln(...B7, ...A7, C.ink, false, 2),
  ...(diag ? [ln(...A7, ...C7, C.gray, false, 1.5), ln(...B7, ...D7, C.gray, false, 1.5), lb(143, 112, 'P', 12, C.ink, 'start', true)] : []),
  lb(92, 78, 'A', 13, C.ink, 'end', true), lb(190, 78, 'D', 13, C.ink, 'start', true), lb(52, 192, 'B', 13, C.ink, 'end', true), lb(206, 192, 'C', 13, C.ink, 'start', true),
];
const f07 = show(
  [
    { note: '状況。AD∥BC の台形ABCDで、AD＝6cm、BC＝10cm。対角線ACとBDの交点をPとする。△APDが18cm²のとき、台形の面積を求める。', add: fresh(title('台形ABCD　AD∥BC'), pg([A7, D7, C7, B7], C.gray, FILL.warm), ...base7(), lb(142, 70, 'AD＝6', 12, C.blue, 'middle', true), lb(130, 198, 'BC＝10', 12, C.blue, 'middle', true), ...cap(200, '△APD＝18 のとき', '台形ABCDの面積は？')) },
    { note: '手がかり。対角線を引くと、台形は4つの三角形に分かれる。△APD、△APB、△DPC、△CPB。', add: fresh(title('対角線で4つの三角形'), pg([A7, D7, C7, B7], C.gray, FILL.warm), ...base7(true), ...cap(200, '4つの三角形：△APD、△APB、', '△DPC、△CPB')) },
    { note: '理由。AD∥BC なので、錯角が等しい。2組の角が等しいので △APD∽△CPB。相似比は AD:CB＝6:10＝3:5。', add: fresh(title('相似を見つける'), pg([A7, D7, P7], C.main, FILL.yellow), pg([B7, C7, P7], C.blue, FILL.blue), ...base7(true), ...cap(200, '△APD∽△CPB（錯角が等しい）', '相似比 6:10＝3:5')) },
    { note: '計算その1。面積比は相似比の2乗なので 3²:5²＝9:25。18:△CPB＝9:25 より △CPB＝18×25÷9＝50。', add: fresh(title('面積比は2乗'), pg([A7, D7, P7], C.main, FILL.yellow), pg([B7, C7, P7], C.blue, FILL.blue), ...base7(true), ...cap(200, '面積比 9:25（相似比の2乗）', '18:△CPB＝9:25 → △CPB＝50', 'g')) },
    { note: '計算その2。△APBと△CPBは、頂点Bから直線ACへの高さが共通。底辺の比 AP:PC＝3:5 が面積比になる。△APB＝50×3÷5＝30。△DPCも同様に30。', add: fresh(title('高さが共通な三角形'), pg([A7, B7, P7], C.green, FILL.green), pg([D7, C7, P7], C.green, FILL.green), ...base7(true), ...cap(200, '高さが共通 → 面積比は底辺の比 3:5', '△APB＝△DPC＝50×3÷5＝30', 'g')) },
    { note: '合計。18＋50＋30＋30＝128。台形の面積は128cm²。', add: fresh(title('4つの面積'), pg([A7, D7, P7], C.main, FILL.yellow), pg([B7, C7, P7], C.blue, FILL.blue), pg([A7, B7, P7], C.green, FILL.green), pg([D7, C7, P7], C.green, FILL.green), ...base7(true), lb(140, 98, '18', 12, C.ink, 'middle', true), lb(132, 166, '50', 12, C.ink, 'middle', true), lb(99, 130, '30', 12, C.ink, 'middle', true), lb(174, 130, '30', 12, C.ink, 'middle', true), ...cap(200, '18＋50＋30＋30＝128', '答え　128cm²', 'g')) },
    { note: '確かめ。△ABC＝30＋50＝80 は、底辺BC＝10 なら高さ16。△ACD＝18＋30＝48 は、底辺AD＝6 なら高さ16。どちらも台形の高さが16で、矛盾しない。', add: fresh(title('高さで確かめる'), pg([A7, D7, C7, B7], C.gray, FILL.warm), ...base7(true), ...cap(200, '△ABC＝80 → 高さ 80×2÷10＝16', '△ACD＝48 → 高さ 48×2÷6＝16 ✓', 'g')) },
    { note: 'よくあるまちがい。相似比3:5をそのまま面積比にしてしまう。面積は縦も横も拡大するので、比は2回かかる。', add: rows('まちがい', [['×　面積比を 3:5 のまま使う','r'],['（長さの比と面積の比はちがう）','k'],['○　相似比の2乗　9:25','g']]) },
  ],
  '答え　台形ABCD＝128cm²',
);

// ───────────────────────── 08 円周角 ─────────────────────────
const CX = 110, CY = 115, R = 85;
const pt8 = (deg: number): [number, number] => [CX + R * Math.cos((deg * Math.PI) / 180), CY - R * Math.sin((deg * Math.PI) / 180)];
const B8 = pt8(180), D8 = pt8(0), A8 = pt8(56), C8 = pt8(250);
const circle8 = (): E[] => {
  const pts: [number, number][] = [];
  for (let i = 0; i < 48; i++) pts.push(pt8((i * 360) / 48));
  return [
    pg(pts, C.blue, FILL.warm),
    lb(B8[0] - 4, B8[1] + 4, 'B', 13, C.ink, 'end', true), lb(D8[0] + 5, D8[1] + 4, 'D', 13, C.ink, 'start', true),
    lb(A8[0] + 5, A8[1] - 3, 'A', 13, C.ink, 'start', true), lb(C8[0] - 6, C8[1] + 14, 'C', 13, C.ink, 'end', true),
    ci(B8[0], B8[1], 2.5, undefined, C.ink, C.ink), ci(D8[0], D8[1], 2.5, undefined, C.ink, C.ink),
    ci(A8[0], A8[1], 2.5, undefined, C.ink, C.ink), ci(C8[0], C8[1], 2.5, undefined, C.ink, C.ink),
  ];
};
const f08 = show(
  [
    { note: '状況。円の周上に A、B、C、D がこの順にあり、BD は直径。∠ABD＝28° のとき、∠ACB を求める。', add: fresh(title('円O'), ...circle8(), ...col([['∠ABD＝28°', 'b'], ['BD は直径'], ['∠ACB＝？', 'r']], 216)) },
    { note: '手がかり。BDは直径。直径に対する円周角は90°（中心角が180°で、その半分）という道具が使える。', add: [ln(...B8, ...D8, C.blue, false, 3), ...col([['BD は直径', 'b'], ['直径に対する', 'k'], ['円周角は90°', 'b']], 216)] },
    { note: '理由と計算その1。直径に対する円周角なので ∠BAD＝90°。三角形ABDができる。', add: [ln(...B8, ...A8, C.green, false, 2), ln(...A8, ...D8, C.green, false, 2), ...col([['△ABD で', 'k'], ['∠BAD＝90°', 'g'], ['∠ABD＝28°', 'g']], 216)] },
    { note: '計算その2。三角形の内角の和は180°なので、∠ADB＝180°－90°－28°＝62°。', add: [lb(D8[0] - 36, D8[1] - 8, '62°', 11, C.red, 'start', true), ...col([['∠ADB', 'k'], ['＝180－90－28', 'k'], ['＝62°', 'r']], 216)] },
    { note: '理由と計算その3。∠ACBと∠ADBは、どちらも弧ABに対する円周角。同じ弧に対する円周角は等しいので、∠ACB＝∠ADB＝62°。', add: [ln(...C8, ...A8, C.red, false, 2), ln(...C8, ...B8, C.red, false, 2), ...col([['弧AB に対する', 'k'], ['円周角どうし', 'k'], ['∠ACB＝∠ADB', 'r'], ['＝62°', 'r']], 216)] },
    { note: '答え。∠ACB＝62°。', add: col([['答え', 'g'], ['∠ACB＝62°', 'g']], 216) },
    { note: '確かめ。BDは直径なので ∠BCD＝90°。∠ACDは弧ADに対する円周角で、∠ABDと同じ28°。62°＋28°＝90° で、∠BCD＝90° と一致する。', add: [ln(...C8, ...D8, C.purple, false, 2), ...col([['∠BCD＝90°', 'k'], ['∠ACD＝∠ABD', 'k'], ['＝28°', 'k'], ['62＋28＝90 ✓', 'g']], 216)] },
    { note: 'よくあるまちがい。∠ACBを∠ABDと同じ28°にしてしまう。弧ADに対する角と弧ABに対する角を取りちがえている。', add: rows('まちがい', [['×　∠ACB＝∠ABD＝28°','r'],['（弧ADと弧ABを取りちがえ）','k'],['○　「どの弧か」を先に言う','g']]) },
  ],
  '答え　∠ACB＝62°',
);

// ───────────────────────── 09 三平方 ─────────────────────────
const A9: [number, number] = [60, 50], B9: [number, number] = [60, 170], C9: [number, number] = [150, 170], D9: [number, number] = [150, 50];
const H9: [number, number] = [117.6, 93.2];
const rect9 = (): E[] => [
  pg([A9, D9, C9, B9], C.gray, FILL.warm),
  lb(52, 48, 'A', 13, C.ink, 'end', true), lb(52, 184, 'B', 13, C.ink, 'end', true), lb(156, 184, 'C', 13, C.ink, 'start', true), lb(156, 46, 'D', 13, C.ink, 'start', true),
  lb(44, 114, '8', 12, C.gray, 'end'), lb(105, 186, '6', 12, C.gray, 'middle'),
];
const f09 = show(
  [
    { note: '状況。長方形ABCD（AB＝8cm、BC＝6cm）。頂点Aから対角線BDに垂線AHを下ろすとき、AHとBHの長さを求める。', add: fresh(title('長方形ABCD'), ...rect9(), ln(...B9, ...D9, C.blue, false, 2), ln(...A9, ...H9, C.red, false, 2), lb(123, 90, 'H', 12, C.ink, 'start', true), ...col([['AB＝8　BC＝6', 'k'], ['AH⊥BD', 'k'], ['AH、BH を', 'b'], ['求める', 'b']], 186)) },
    { note: '手がかり。△ABDは、∠A＝90°の直角三角形で、AB＝8、AD＝BC＝6。斜辺BDは三平方の定理で出せる。', add: [ln(...B9, ...D9, C.blue, false, 4), ...col([['△ABD は直角三角形', 'k'], ['BD²＝8²＋6²', 'b'], ['＝100', 'b'], ['BD＝10', 'g']], 186)] },
    { note: '理由。△ABDの面積は、直角をはさむ辺を使うと 8×6÷2＝24。BDを底辺、AHを高さとみても同じ面積なので、10×AH÷2＝24。面積は見方を変えても同じ。', add: [pg([A9, B9, D9], C.main, FILL.yellow), ln(...A9, ...H9, C.red, false, 3), ...col([['面積を2通りに', 'k'], ['8×6÷2＝24', 'b'], ['10×AH÷2＝24', 'b']], 186)] },
    { note: '計算その1。10×AH÷2＝24 より AH＝48÷10＝4.8。', add: col([['AH＝48÷10', 'b'], ['＝4.8', 'g'], ['（面積の二通り表し）', 'k']], 186) },
    { note: '計算その2。△ABHは∠AHB＝90°の直角三角形。BH²＝AB²－AH²＝64－23.04＝40.96 で、BH＝6.4。', add: [ln(...B9, ...H9, C.green, false, 4), ...col([['△ABH で', 'k'], ['BH²＝8²－4.8²', 'b'], ['＝64－23.04', 'b'], ['＝40.96', 'b'], ['BH＝6.4', 'g']], 186)] },
    { note: '確かめ。相似でも出せる。△ABH∽△DBA なので BH:BA＝BA:BD。BH＝64÷10＝6.4。三平方の定理の答えと一致する。', add: col([['△ABH∽△DBA', 'k'], ['BH:BA＝BA:BD', 'k'], ['BH＝64÷10', 'k'], ['＝6.4 ✓', 'g']], 186) },
    { note: '答え。AH＝4.8cm、BH＝6.4cm。AH²＋BH²＝23.04＋40.96＝64＝AB² も成り立つ。', add: col([['答え', 'g'], ['AH＝4.8cm', 'g'], ['BH＝6.4cm', 'g'], ['AH²＋BH²＝64', 'k'], ['＝AB² ✓', 'g']], 186) },
    { note: 'よくあるまちがい。面積24 を AH としてしまう。24 は「底辺×高さ÷2」の面積で、AH を出すには BD でわる必要がある。', add: rows('まちがい', [['×　AH＝24','r'],['（面積と高さを混同）','k'],['○　10×AH÷2＝24 から AH＝4.8','g']]) },
  ],
  '答え　AH＝4.8cm、BH＝6.4cm',
);

// ───────────────────────── 10 空間図形（立方体の切断） ─────────────────────────
const A10: [number, number] = [50, 190], B10: [number, number] = [126, 190], C10: [number, number] = [168, 158], D10: [number, number] = [92, 158];
const E10: [number, number] = [50, 114], F10: [number, number] = [126, 114], G10: [number, number] = [168, 82], H10: [number, number] = [92, 82];
const cube10 = (): E[] => [
  ln(...A10, ...B10, C.ink, false, 2), ln(...B10, ...C10, C.ink, false, 2), ln(...A10, ...E10, C.ink, false, 2), ln(...B10, ...F10, C.ink, false, 2), ln(...C10, ...G10, C.ink, false, 2),
  ln(...E10, ...F10, C.ink, false, 2), ln(...F10, ...G10, C.ink, false, 2), ln(...G10, ...H10, C.ink, false, 2), ln(...E10, ...H10, C.ink, false, 2),
  ln(...A10, ...D10, C.gray, true, 1), ln(...D10, ...C10, C.gray, true, 1), ln(...D10, ...H10, C.gray, true, 1),
  lb(42, 196, 'A', 12, C.ink, 'end', true), lb(130, 200, 'B', 12, C.ink, 'start', true), lb(172, 166, 'C', 12, C.ink, 'start', true), lb(86, 164, 'D', 12, C.ink, 'end', true),
  lb(42, 112, 'E', 12, C.ink, 'end', true), lb(122, 108, 'F', 12, C.ink, 'end', true), lb(172, 80, 'G', 12, C.ink, 'start', true), lb(88, 78, 'H', 12, C.ink, 'end', true),
];
const f10 = show(
  [
    { note: '状況。1辺6cmの立方体ABCD-EFGH。三角錐C-BDGの体積と、頂点Cから面BDGまでの距離を求める。', add: fresh(title('立方体　1辺6cm'), ...cube10(), ...col([['三角錐 C－BDG', 'b'], ['Cから面BDGまでの', 'k'], ['距離を求める', 'k']], 190)) },
    { note: '手がかり。Cから出る3辺 CB、CD、CG は、たがいに垂直。CBDを底面、CGを高さとみれば、体積は辺の長さだけで出せる。', add: [ln(...C10, ...B10, C.red, false, 4), ln(...C10, ...D10, C.red, false, 4), ln(...C10, ...G10, C.red, false, 4), ln(...B10, ...D10, C.blue, false, 2), ln(...D10, ...G10, C.blue, false, 2), ln(...G10, ...B10, C.blue, false, 2), ...col([['Cから出る3辺', 'r'], ['CB、CD、CG は', 'k'], ['たがいに垂直', 'k']], 190)] },
    { note: '計算その1。△CBDを底面とする。△CBD＝6×6÷2＝18、高さCG＝6。体積＝18×6÷3＝36cm³。', add: [pg([C10, B10, D10], C.red, FILL.red), ...col([['底面 △CBD', 'r'], ['＝6×6÷2＝18', 'k'], ['高さ CG＝6', 'k'], ['V＝18×6÷3', 'b'], ['＝36', 'g']], 190)] },
    { note: '理由と計算その2。△BDGの3辺は、どれも面の対角線で 6√2。3辺が等しい正三角形。高さは 6√2×√3÷2＝3√6、面積は 6√2×3√6÷2＝18√3。', add: [pg([B10, D10, G10], C.blue, FILL.blue), ...col([['△BDG の3辺', 'b'], ['どれも 6√2', 'b'], ['正三角形', 'b'], ['高さ＝3√6', 'k'], ['面積＝18√3', 'g']], 190)] },
    { note: '理由。同じ三角錐を、△BDGを底面と見ると、高さは求めたい距離h。体積はどの面を底面にしても同じなので、18√3×h÷3＝36。', add: col([['底面を △BDG に', 'b'], ['V＝18√3×h÷3', 'b'], ['＝6√3×h', 'b'], ['体積は同じ', 'k'], ['36＝6√3×h', 'g']], 190) },
    { note: '計算その3。h＝36÷(6√3)＝6÷√3＝2√3。', add: col([['h＝6÷√3', 'b'], ['＝6√3÷3', 'b'], ['＝2√3', 'g']], 190) },
    { note: '答え。体積は36cm³、Cから面BDGまでの距離は 2√3 cm。', add: col([['答え', 'g'], ['体積 36cm³', 'g'], ['距離 2√3 cm', 'g']], 190) },
    { note: '確かめ。立方体の対角線CEは 6√3。CEは面BDGに垂直で、面BDGは対角線を3等分する位置を通る。6√3÷3＝2√3 で一致する。', add: [ln(...C10, ...E10, C.green, true, 2), ...col([['対角線CE＝6√3', 'k'], ['面BDGで3等分', 'k'], ['6√3÷3＝2√3 ✓', 'g']], 190)] },
    { note: 'よくあるまちがい。△BDGを直角三角形と思い、面積を6√2×6√2÷2＝36にしてしまう。3辺が等しい正三角形である。', add: rows('まちがい', [['×　△BDG の面積＝36','r'],['（直角三角形と思いこむ）','k'],['○　正三角形 18√3','g']]) },
  ],
  '答え　体積36cm³、距離2√3cm',
);

// ───────────────────────── 11 確率（さいころ） ─────────────────────────
const grid11 = (hl: number[]): E[] => {
  const out: E[] = [];
  for (let i = 0; i < 6; i++) {
    out.push(lb(60 + i * 22 + 11, 44, String(i + 1), 10, C.blue, 'middle', true));
    out.push(lb(52, 50 + i * 22 + 15, String(i + 1), 10, C.purple, 'end', true));
    for (let j = 0; j < 6; j++) {
      const s = i + 1 + j + 1;
      const on = hl.includes(s);
      out.push(bx(60 + i * 22, 50 + j * 22, 22, 22, String(s), on ? C.red : C.gray, on ? FILL.yellow : '#FFFFFF', 10));
    }
  }
  return out;
};
const f11 = show(
  [
    { note: '状況。大小2つのさいころを同時に投げる。出た目の和が4の倍数になる確率を求める。表の横は大のさいころの目、縦は小のさいころの目で、マスの数は目の和。', add: fresh(title('目の和（横：大　縦：小）'), ...grid11([]), ...col([['和が4の倍数に', 'b'], ['なる確率は？', 'b']], 204, 70, 12)) },
    { note: '手がかり。大小を区別するので、目の組は 6×6＝36通りで、どの組も同様に確からしい。和は同じ確率ではないので、組を基本に数える。', add: fresh(title('目の和（横：大　縦：小）'), ...grid11([]), ...col([['全部で', 'k'], ['6×6＝36通り', 'b'], ['どの組も同様に', 'k'], ['確からしい', 'k']], 204, 70, 12)) },
    { note: '数える1。和が4になる組は (1,3)(2,2)(3,1) の3通り。表で色をつける。', add: fresh(title('和が4'), ...grid11([4]), ...col([['和が4：3通り', 'r'], ['(1,3)(2,2)(3,1)', 'k']], 204, 70, 12)) },
    { note: '数える2。和が8になる組は (2,6)(3,5)(4,4)(5,3)(6,2) の5通り。', add: fresh(title('和が4、8'), ...grid11([4, 8]), ...col([['和が8：5通り', 'r'], ['(2,6)(3,5)(4,4)', 'k'], ['(5,3)(6,2)', 'k']], 204, 70, 12)) },
    { note: '数える3。和が12になる組は (6,6) の1通り。これで4の倍数の和は、4・8・12 がすべて。', add: fresh(title('和が4、8、12'), ...grid11([4, 8, 12]), ...col([['和が12：1通り', 'r'], ['(6,6)', 'k']], 204, 70, 12)) },
    { note: '確率。3＋5＋1＝9通り。確率は 9÷36＝1/4。', add: fresh(title('確率'), ...grid11([4, 8, 12]), ...col([['3＋5＋1＝9通り', 'b'], ['9÷36＝1/4', 'g']], 204, 70, 12)) },
    { note: '確かめ。大のさいころの目ごとに、条件に合う小の目を数える。1・2・2・1・1・2 通りで、合計9通り。', add: fresh(title('大の目ごとに数える'), ...grid11([4, 8, 12]), ...col([['大の目 1〜6 で', 'k'], ['1,2,2,1,1,2 通り', 'k'], ['合計 9通り ✓', 'g']], 204, 70, 12)) },
    { note: 'よくあるまちがい。(1,3)と(3,1)を同じ場合として1通りに数えると、全体も21通りになって、確率が変わってしまう。大小を区別して36通りで数える。', add: rows('まちがい', [['×　(1,3)と(3,1)を1通りに数える','r'],['（全体も21通りになってしまう）','k'],['○　大小を区別して 36通り','g']]) },
  ],
  '答え　9÷36＝1/4',
);

// ───────────────────────── 12 箱ひげ図 ─────────────────────────
const X12 = (v: number) => 20 + 14 * v;
const DATA12 = [4, 5, 7, 8, 9, 11, 12, 14, 15, 20];
const dataRow = (): E[] => [
  title('データ（小さい順）'),
  ...DATA12.map((v) => ci(X12(v), 70, 7, String(v), C.blue, FILL.blue, 9)),
  ln(X12(0), 92, X12(21), 92, C.gray, false, 1),
  ...[0, 5, 10, 15, 20].flatMap((v) => [ln(X12(v), 88, X12(v), 96, C.gray, false, 1), lb(X12(v), 108, String(v), 10, C.gray, 'middle')]),
];
const boxplot = (): E[] => [
  pg([[X12(7), 135], [X12(14), 135], [X12(14), 165], [X12(7), 165]], C.blue, FILL.blue),
  ln(X12(10), 135, X12(10), 165, C.red, false, 3),
  ln(X12(4), 150, X12(7), 150, C.blue, false, 2), ln(X12(14), 150, X12(20), 150, C.blue, false, 2),
  ln(X12(4), 142, X12(4), 158, C.blue, false, 2), ln(X12(20), 142, X12(20), 158, C.blue, false, 2),
];
const f12 = show(
  [
    { note: '状況。10個のデータ 4、5、7、8、9、11、12、14、15、20 について、中央値、四分位数、範囲、四分位範囲を求めて、箱ひげ図に表す。', add: fresh(...dataRow()) },
    { note: '手がかり。10個なので、5番目の9と6番目の11の平均が中央値。(9＋11)÷2＝10。', add: [ln(X12(10), 54, X12(10), 180, C.red, true, 1), lb(X12(10), 48, '中央値 10', 11, C.red, 'middle', true)] },
    { note: '理由。中央値でデータを下位半分と上位半分に分ける。下位半分 4、5、7、8、9 の中央値が7（第1四分位数）、上位半分 11、12、14、15、20 の中央値が14（第3四分位数）。', add: [ln(X12(7), 54, X12(7), 180, C.green, true, 1), ln(X12(14), 54, X12(14), 180, C.green, true, 1), lb(X12(7), 124, 'Q1＝7', 11, C.green, 'middle', true), lb(X12(14), 124, 'Q3＝14', 11, C.green, 'middle', true)] },
    { note: '箱ひげ図。箱の左端が第1四分位数7、右端が第3四分位数14、中の線が中央値10。ひげの先が最小値4と最大値20。', add: [...boxplot(), lb(X12(4), 182, '最小4', 11, C.gray, 'middle'), lb(X12(20), 182, '最大20', 11, C.gray, 'middle')] },
    { note: '計算その1。範囲は 最大値－最小値＝20－4＝16。', add: band(190, ar(X12(4) + 2, 204, X12(20) - 2, 204, C.main), lb(160, 224, '範囲＝20－4＝16', 12, C.main, 'middle', true)) },
    { note: '計算その2。四分位範囲は 第3四分位数－第1四分位数＝14－7＝7。これは箱の長さ。', add: band(190, ar(X12(7) + 2, 204, X12(14) - 2, 204, C.blue), lb(160, 224, '四分位範囲＝14－7＝7', 12, C.blue, 'middle', true)) },
    { note: '外れ値のテスト。最大の20を40に変えると、平均は10.5から12.5に、範囲は16から36に変わる。でも中央値10と四分位範囲7は変わらない。', add: rows('20 を 40 にかえると', [['平均　10.5 → 12.5（動く）','r'],['範囲　16 → 36（動く）','r'],['中央値 10（動かない）','g'],['四分位範囲 7（動かない）','g']]) },
    { note: 'よくあるまちがい。箱が長いと人数が多いと思ってしまう。箱の中のデータは、箱の長さにかかわらず全体の約半分。箱が長いのは、散らばっているということ。', add: rows('まちがい', [['×　箱が長い ＝ 人数が多い','r'],['箱の中は、どちらも約半分','k'],['○　箱の長さ ＝ ばらつき','g']]) },
  ],
  '答え　中央値10、Q1＝7、Q3＝14、範囲16、四分位範囲7',
);

export const lessonFigsRitsumeikan_sansu: Record<string, Figure> = {
  lf_ritsumeikan_sansu_01: f01,
  lf_ritsumeikan_sansu_02: f02,
  lf_ritsumeikan_sansu_03: f03,
  lf_ritsumeikan_sansu_04: f04,
  lf_ritsumeikan_sansu_05: f05,
  lf_ritsumeikan_sansu_06: f06,
  lf_ritsumeikan_sansu_07: f07,
  lf_ritsumeikan_sansu_08: f08,
  lf_ritsumeikan_sansu_09: f09,
  lf_ritsumeikan_sansu_10: f10,
  lf_ritsumeikan_sansu_11: f11,
  lf_ritsumeikan_sansu_12: f12,
};
