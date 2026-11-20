// 「手順は進むのに図が変わらない」図を、手順ごとに部品が増える動く図解（diagram）に作り直したもの。
// 座標は 320×240 の内部座標。手順1つにつき必ず新しい部品を add に入れる（図が毎回変わる）。
// 元の図形データ（数値・答え）は変えず、caption も元のまま。手順の文は、図に出ない補助線や印を述べていたもの
// （自動生成の定型文だったもの）を、図に合わせて書き直した。
import type { Figure, DiagramElement } from './figures';
import { show, bx, lb, ln, ar, pg, sc, C, FILL } from './diagram-kit';

type E = DiagramElement;
type Anchor = 'start' | 'middle' | 'end';

const BLUE_T = 'rgba(14,165,233,0.16)';
const GREEN_T = 'rgba(22,163,74,0.16)';
const RED_T = 'rgba(225,29,72,0.14)';

/** 太字のラベル。 */
const L = (x: number, y: number, t: string, size = 12, color: string = C.ink, anchor: Anchor = 'middle'): E => lb(x, y, t, size, color, anchor, true);
/** 長方形（塗りつき）。 */
const rc = (x1: number, y1: number, x2: number, y2: number, color: string, fill: string): E =>
  pg([[x1, y1], [x2, y1], [x2, y2], [x1, y2]], color, fill);
/** 塗らない枠線の多角形。 */
const frame = (pts: [number, number][], color: string): E => pg(pts, color, 'none');
const fmt = (n: number): string => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// ---------------------------------------------------------------------------
// 鶴亀算・過不足型の面積図（lf_ext09_*）
// 横＝合計の数、たて＝1つあたりの値。全部「少ないほう」と仮定した長方形に、たりない分の長方形をたす。
// ---------------------------------------------------------------------------
type Tsuru = {
  N: number; a: number; b: number; nt: number;
  rule: string; assume: string; what: string;
  qu: string; vu: string;
  tall: string; tu: string; short: string; su: string;
};

function tsuru(o: Tsuru): Figure {
  const { N, a, b, nt, vu, qu } = o;
  const ns = N - nt;
  const T = nt * b + ns * a;
  const base = N * a;
  const D = T - base;
  const d = b - a;
  const x0 = 40, W = 240, yTop = 40, yBot = 130, H = yBot - yTop;
  const sx = W / N;
  const wt = nt * sx;
  const ya = yBot - (a / b) * H;
  const xs = x0 + wt;
  return show(
    [
      {
        note: `${o.rule}。${o.assume}と仮定する。合計は${N}${qu}なので、${N}×${a}＝${fmt(base)}${vu}。青い長方形がその大きさ。`,
        add: [
          ln(x0, 28, x0 + W, 28, C.purple, false, 2), ln(x0, 24, x0, 32, C.purple, false, 2), ln(x0 + W, 24, x0 + W, 32, C.purple, false, 2),
          L(160, 18, `合計 ${N}${qu}`, 12, C.purple),
          rc(x0, ya, x0 + W, yBot, C.blue, FILL.blue), L(x0 - 4, (ya + yBot) / 2 + 4, `${a}${vu}`, 11, C.blue, 'end'),
          L(160, 186, `${o.assume}：${N}×${a}＝${fmt(base)}${vu}`, 13, C.blue),
        ],
      },
      {
        note: `ほんとうの${o.what}は${fmt(T)}${vu}。${o.assume}と仮定した${fmt(base)}${vu}より大きいので、実際の形は赤茶色の線のようになる。`,
        add: [
          frame([[x0, yBot], [x0 + W, yBot], [x0 + W, ya], [xs, ya], [xs, yTop], [x0, yTop]], C.main),
          L(x0 - 4, yTop + 4, `${b}${vu}`, 11, C.main, 'end'),
          L(160, 200, `ほんとうは ${fmt(T)}${vu}`, 13, C.main),
        ],
      },
      {
        note: `たりない ${fmt(T)}−${fmt(base)}＝${fmt(D)}${vu} は、${o.tall}1つにつき ${b}−${a}＝${d}${vu} ずつのちがいが、${o.tall}の数だけ集まったもの。赤い長方形がそれ。`,
        add: [
          rc(x0, yTop, xs, ya, C.red, FILL.red), L((x0 + xs) / 2, (yTop + ya) / 2 + 4, `差${d}${vu}`, 11, C.red),
          L(160, 214, `たりない分 ${fmt(T)}−${fmt(base)}＝${fmt(D)}${vu}`, 13, C.red),
        ],
      },
      {
        note: `赤い長方形は たて${d}${vu}・よこ（${o.tall}の数）なので、${fmt(D)}÷${d}＝${nt}。よこの長さが${o.tall}の数。${o.short}は ${N}−${nt}＝${ns}${o.su}。`,
        add: [
          ln(x0, 140, xs, 140, C.red, false, 3), ln(x0, 136, x0, 144, C.red, false, 3), ln(xs, 136, xs, 144, C.red, false, 3),
          L((x0 + xs) / 2, 154, `${o.tall} ${nt}${o.tu}`, 12, C.red),
          ln(xs, 140, x0 + W, 140, C.blue, false, 3), ln(x0 + W, 136, x0 + W, 144, C.blue, false, 3),
          L(x0 + W, 168, `${o.short} ${ns}${o.su}`, 12, C.blue, 'end'),
        ],
      },
      {
        note: `答え：${o.tall}${nt}${o.tu}、${o.short}${ns}${o.su}。確かめ：${nt}×${b}＋${ns}×${a}＝${fmt(nt * b)}＋${fmt(ns * a)}＝${fmt(T)}${vu}で、はじめの合計と同じ。`,
        add: [L(160, 232, `${nt}×${b}＋${ns}×${a}＝${fmt(T)}${vu} ✓`, 13, C.green)],
      },
    ],
  ) as Figure;
}

// ---------------------------------------------------------------------------
// 2×2 の組み合わせ表（遺伝の格子）
// ---------------------------------------------------------------------------
function punnett(o: {
  cols: [string, string]; rows: [string, string]; cells: [string, string, string, string];
  colName: string; rowName: string;
  note0: string; note1: string; note2: string; note3: string; note4: string;
  group: [string, string, string, string]; // 各マスの色分け（'a'|'b'|'c'）
  ratio: string; ratioNote: string; lastLines: string[];
}): Figure {
  const cx = [130, 200], cy = [70, 120], w = 70, h = 50;
  const col = { a: [C.blue, FILL.blue], b: [C.main, FILL.yellow], c: [C.red, FILL.red] } as const;
  const idx: [number, number][] = [[0, 0], [1, 0], [0, 1], [1, 1]];
  return show(
    [
      {
        note: o.note0,
        add: [
          L(200, 30, o.colName, 11, C.blue), L(165, 62, o.cols[0], 14, C.blue), L(235, 62, o.cols[1], 14, C.blue),
          L(8, 106, o.rowName.split('|')[0], 11, C.green, 'start'), L(8, 122, o.rowName.split('|')[1], 11, C.green, 'start'),
          L(118, 100, o.rows[0], 14, C.green, 'end'), L(118, 150, o.rows[1], 14, C.green, 'end'),
        ],
      },
      { note: o.note1, add: idx.map(([i, j]) => bx(cx[i], cy[j], w, h, undefined, C.gray, FILL.gray)) },
      { note: o.note2, add: idx.map(([i, j], k) => bx(cx[i], cy[j], w, h, o.cells[k], C.gray, FILL.warm, 16)) },
      {
        note: o.note3,
        add: [
          ...idx.map(([i, j], k) => bx(cx[i], cy[j], w, h, o.cells[k], col[o.group[k] as 'a' | 'b' | 'c'][0], col[o.group[k] as 'a' | 'b' | 'c'][1], 16)),
          L(160, 198, o.ratio, 14, C.red),
        ],
      },
      { note: o.note4, add: o.lastLines.map((t, k) => L(160, 216 + k * 16, t, 12, C.green)) },
    ],
  ) as Figure;
}

// ---------------------------------------------------------------------------
export const staticFix: Record<string, Figure> = {
  // 36×99 を 36×(100−1) と考える（面積図）
  lf_new20j1_08: show(
    [
      { note: '36×99をそのまま計算すると筆算が大変。まず、たて36・よこ99の長方形で考える。',
        add: [rc(40, 50, 250, 122, C.blue, FILL.blue), L(145, 90, '36×99', 16, C.ink), L(145, 42, '99', 12, C.blue), L(28, 90, '36', 12, C.blue, 'end')] },
      { note: '99を100−1と考える。長方形の右に「1」の細い帯をつけると、よこ100の長方形になる。',
        add: [rc(250, 50, 280, 122, C.red, FILL.red), ln(40, 30, 280, 30, C.purple, false, 2), ln(40, 26, 40, 34, C.purple, false, 2), ln(280, 26, 280, 34, C.purple, false, 2),
          L(160, 22, '100', 12, C.purple), L(265, 42, '1', 12, C.red), L(118, 150, '※「1」の帯は広げて表示', 9, C.gray)] },
      { note: '36×99=36×(100−1)。大きな長方形（100）から細い帯（1）をひくと考える。',
        add: [L(160, 166, '36×99＝36×(100−1)', 14, C.ink)] },
      { note: '分配法則で36×100−36×1に分ける。',
        add: [L(160, 186, '＝36×100−36×1', 14, C.ink)] },
      { note: '36×100=3600。よこ100の大きな長方形ぜんたいの面積。',
        add: [frame([[40, 50], [280, 50], [280, 122], [40, 122]], C.green), L(145, 110, '36×100＝3600', 12, C.green)] },
      { note: '36×1=36。赤い細い帯の面積で、これを大きな長方形からひく。',
        add: [L(265, 140, '36×1＝36', 12, C.red)] },
      { note: '3600−36=3564。', add: [L(160, 208, '3600−36＝3564', 16, C.red)] },
      { note: 'このように「100に近い数」は100との差を利用すると暗算しやすい。', add: [L(160, 228, '100に近い数は、100との差を使う', 12, C.ink)] },
    ],
    '36×99は99を100−1と考えて分配法則を使う。36×100−36×1=3600−36=3564。100に近い数は差を利用すると暗算しやすい',
  ),

  // 三角形の内角の和（角B=55°、角C=65° から 角A=60°）
  lf_sansu_ext04_126: show(
    [
      { note: '頂点を順に A・B・C と結んだ三角形。まず形と頂点の名前をおさえる。',
        add: [pg([[170, 61], [80, 190], [230, 190]], C.main, FILL.warm), L(170, 50, 'A', 14), L(66, 200, 'B', 14), L(244, 200, 'C', 14)] },
      { note: '三角形の内角の和は180°。3つの角に色をつけて、角度を求めるときの手がかりにする。',
        add: [sc(80, 190, 28, 0, 55, C.blue, BLUE_T), sc(230, 190, 26, 115, 180, C.green, GREEN_T), sc(170, 61, 26, 235, 295, C.red, RED_T),
          L(160, 218, '3つの角の和は180°', 13, C.ink)] },
      { note: '分かっている角に印をつける。角B＝55°、角C＝65°。',
        add: [L(123, 168, '55°', 12, C.blue), L(189, 164, '65°', 12, C.green)] },
      { note: '角B＝55°、角C＝65°のとき、角A＝180−55−65＝60°。三角形の内角の和は常に180°',
        add: [L(166, 110, '60°', 13, C.red), L(160, 234, '180−55−65＝60°', 14, C.red)] },
    ],
    '角B＝55°、角C＝65°のとき、角A＝180−55−65＝60°。三角形の内角の和は常に180°',
  ),

  // 三角形の外角（角A=42°、角B=88° から 角Cの内角=50°、外角=130°）
  lf_sansu_ext04_127: show(
    [
      { note: '頂点を順に A・B・C と結んだ三角形。まず形と頂点の名前をおさえる。',
        add: [pg([[64.5, 68], [60, 196], [172, 196]], C.main, FILL.warm), L(64, 56, 'A', 14), L(48, 208, 'B', 14), L(172, 212, 'C', 14)] },
      { note: '三角形の内角の和は180°。3つの角に色をつけて、角度を求めるときの手がかりにする。',
        add: [sc(60, 196, 26, 0, 88, C.blue, BLUE_T), sc(64.5, 68, 32, 268, 310, C.red, RED_T), sc(172, 196, 24, 130, 180, C.green, GREEN_T)] },
      { note: '分かっている角に印をつける。角A＝42°、角B＝88°。',
        add: [L(82, 113, '42°', 12, C.red), L(92, 165, '88°', 12, C.blue)] },
      { note: '角A＝42°、角B＝88°のとき、角Cの内角＝180−42−88＝50°。辺BCをCの先までのばすと、角Cの外角＝隣り合わない2つの内角の和＝42＋88＝130°',
        add: [ln(172, 196, 276, 196, C.purple, true, 2), L(280, 212, 'D', 14), sc(172, 196, 30, 0, 130, C.purple, 'rgba(147,51,234,0.14)'),
          L(138, 182, '50°', 11, C.green), L(196, 150, '外角130°', 12, C.purple),
          L(160, 218, '内角C＝180−42−88＝50°', 12, C.green), L(160, 234, '外角C＝42＋88＝130°', 12, C.purple)] },
    ],
    '角A＝42°、角B＝88°のとき、角Cの内角＝50°。角Cの外角＝隣り合わない2つの内角の和＝42＋88＝130°',
  ),

  // 砂時計型の相似（AB ∥ CD）
  sext04_s158_naze: show(
    [
      { note: '線分 AC と線分 BD が点 O で交わる砂時計の形。上の AB と下の CD は平行。',
        add: [ln(92, 67, 262, 187, C.ink, false, 2), ln(228, 67, 58, 187, C.ink, false, 2), ln(92, 67, 228, 67, C.main, false, 2.5), ln(58, 187, 262, 187, C.main, false, 2.5),
          L(80, 60, 'A', 13), L(240, 60, 'B', 13), L(46, 202, 'D', 13), L(274, 202, 'C', 13), L(172, 112, 'O', 12, C.ink, 'start'),
          L(160, 57, 'AB 4cm', 11, C.main), L(160, 205, 'CD 6cm', 11, C.main), L(160, 40, 'AB ∥ CD', 12, C.purple)] },
      { note: '角 AOB と角 COD は対頂角で、平行に関係なく等しい。でも相似には等しい角が 2 組必要で、これは 1 組だけ。',
        add: [sc(160, 115, 22, 35.2, 144.8, C.red, RED_T), sc(160, 115, 22, 215.2, 324.8, C.red, RED_T), L(160, 10, '対頂角（赤）はいつも等しい。でも1組だけ', 11, C.red)] },
      { note: 'AB ∥ CD なので、AC を横断線と見ると角 OAB と角 OCD は錯角で等しい。2 組そろって △OAB ∽ △OCD。対応は A↔C、B↔D。',
        add: [pg([[160, 115], [92, 67], [228, 67]], C.blue, BLUE_T), pg([[160, 115], [262, 187], [58, 187]], C.blue, BLUE_T),
          sc(92, 67, 30, -35.2, 0, C.green, GREEN_T), sc(262, 187, 30, 144.8, 180, C.green, GREEN_T),
          L(160, 24, '錯角（緑）も等しい → 2組そろって △OAB∽△OCD', 11, C.green)] },
      { note: '相似比は AB:CD＝4:6＝2:3。OA:OC＝2:3 なので OA＝3cm なら OC＝3×3/2＝4.5cm。大きい三角形の辺 OC が長い。3×2/3＝2 は比を逆にかけた誤り。',
        add: [L(112, 84, 'OA 3cm', 11, C.blue, 'end'), L(214, 160, 'OC 4.5cm', 11, C.blue, 'start'),
          L(160, 222, 'AB:CD＝4:6＝2:3', 13, C.ink), L(160, 236, 'OA:OC＝2:3 → OC＝3×3÷2＝4.5cm', 12, C.red)] },
      { note: '検算：OA:OC＝3:4.5＝2:3＝AB:CD で一致。OB:OD も 2:3。平行の印が無い図では対頂角しか無く、相似は使えない。',
        add: [L(160, 146, '3:4.5＝2:3 ✓', 11, C.green), L(160, 161, 'OB:OD＝2:3 ✓', 11, C.green)] },
    ],
    '線分 AC と BD が O で交わり、AB ∥ CD。対頂角 角 AOB＝角 COD はいつでも等しいが、それだけでは 1 組。AB ∥ CD の錯角 角 OAB＝角 OCD で 2 組そろって △OAB ∽ △OCD。相似比 AB:CD＝4:6＝2:3 で OA:OC＝OB:OD＝2:3。OA＝3 なら OC＝4.5。平行でなければ相似は言えない。',
  ),

  // 正方形が長方形に入り込む（3秒後）
  lf_ext05_173: show(
    [
      { note: '長方形（よこ12cm・たて6cm）と、1辺5cmの正方形。正方形は長方形の左から、毎秒1cmで入り込んでいく。',
        add: [rc(110, 70, 290, 160, C.main, FILL.warm), L(200, 62, 'よこ12cm', 11, C.main), L(300, 118, 'たて6cm', 11, C.main, 'start')] },
      { note: 'はじめ（0秒）、正方形は長方形の左のすぐ外にある。点線の正方形がその位置。',
        add: [frame([[35, 85], [110, 85], [110, 160], [35, 160]], C.gray), L(52, 128, '0秒', 11, C.gray), L(72, 176, '1辺5cm', 11, C.gray)] },
      { note: '毎秒1cmで右へ進むので、3秒で 1×3＝3cm 進む。',
        add: [ar(110, 190, 155, 190, C.red), L(132, 206, '3秒で3cm', 12, C.red)] },
      { note: '3秒後の正方形。右の3cmぶんが長方形の中に入った。',
        add: [pg([[80, 85], [155, 85], [155, 160], [80, 160]], C.blue, BLUE_T), L(97, 104, '3秒後', 11, C.blue)] },
      { note: '重なった部分は、よこ3cm・たて5cmの長方形。',
        add: [rc(110, 85, 155, 160, C.red, RED_T), L(132, 78, '3cm', 11, C.red), L(104, 128, '5cm', 11, C.red, 'end')] },
      { note: '重なった部分の面積＝3×5＝15平方cm。', add: [L(215, 128, '3×5＝15', 14, C.red), L(215, 146, '（平方cm）', 11, C.red)] },
    ],
    '正方形（1辺5cm）が長方形（よこ12cm、たて6cm）の左から毎秒1cmで入り込み始めて3秒後の様子。正方形は3cm分だけ長方形の中に入っている（まだ5cm全部は入っていない）。重なった部分（よこ3cm×たて5cm）の面積＝15cm²',
  ),

  // 2つの正方形が近づいて重なる（2.6秒後）
  lf_ext05_174: show(
    [
      { note: '正方形P（1辺4cm・毎秒3cmで右へ）と正方形Q（1辺6cm・毎秒2cmで左へ）。はじめのすき間は10cm。',
        add: [rc(20, 44, 76, 100, C.blue, FILL.blue), L(48, 76, 'P', 14, C.blue), rc(216, 16, 300, 100, C.red, FILL.red), L(258, 62, 'Q', 14, C.red),
          ln(76, 112, 216, 112, C.purple, false, 2), ln(76, 108, 76, 116, C.purple, false, 2), ln(216, 108, 216, 116, C.purple, false, 2), L(146, 130, 'すき間 10cm', 11, C.purple)] },
      { note: 'Pは右へ毎秒3cm、Qは左へ毎秒2cm。向かい合って進むので、1秒で 3＋2＝5cm 近づく。',
        add: [ar(80, 72, 120, 72, C.blue), L(100, 66, '3cm/秒', 11, C.blue), ar(212, 60, 172, 60, C.red), L(192, 54, '2cm/秒', 11, C.red), L(64, 150, '近づく速さ 5cm/秒', 10, C.ink)] },
      { note: '2.6秒で縮まる距離は 5×2.6＝13cm。',
        add: [L(64, 164, '2.6秒で 13cm', 10, C.ink)] },
      { note: 'はじめのすき間は10cm。13cm近づくと、13−10＝3cm だけ重なる。下の図が2.6秒後。',
        add: [pg([[129, 190], [185, 190], [185, 134], [129, 134]], C.blue, BLUE_T), pg([[143, 190], [227, 190], [227, 106], [143, 106]], C.red, RED_T),
          rc(143, 134, 185, 190, C.purple, 'rgba(147,51,234,0.35)'), L(160, 202, 'ここが重なり（よこ3cm）', 11, C.purple), L(160, 178, '13−10＝3cm', 11, C.ink)] },
      { note: '重なる部分は、よこ3cm・たて4cm（小さいほうのPの高さ）。面積＝3×4＝12平方cm。',
        add: [L(160, 224, '重なりの面積 3×4＝12（平方cm）', 13, C.purple)] },
    ],
    '正方形P（1辺4cm、毎秒3cmで右へ）と正方形Q（1辺6cm、毎秒2cmで左へ）が2.6秒後に重なっている様子。近づく速さ＝3+2＝5cm/秒、2.6秒で縮まる距離＝13cm、最初の隙間10cmを引くと重なりのよこ＝3cm。重なる部分の面積＝3×4＝12cm²',
  ),

  // 鶴亀算の面積図
  lf_ext09_306: tsuru({ N: 10, a: 2, b: 4, nt: 6, rule: '鶴は1羽2本、亀は1匹4本', assume: '全部鶴', what: '足の合計', qu: '匹', vu: '本', tall: '亀', tu: '匹', short: '鶴', su: '羽' }),
  lf_ext09_307: tsuru({ N: 15, a: 2, b: 4, nt: 7, rule: '鶴は1羽2本、亀は1匹4本', assume: '全部鶴', what: '足の合計', qu: '匹', vu: '本', tall: '亀', tu: '匹', short: '鶴', su: '羽' }),
  lf_ext09_309: tsuru({ N: 20, a: 2, b: 4, nt: 9, rule: 'にわとりは1羽2本、ヤギは1匹4本', assume: '全部にわとり', what: '足の合計', qu: '匹', vu: '本', tall: 'ヤギ', tu: '匹', short: 'にわとり', su: '羽' }),
  lf_ext09_310: tsuru({ N: 18, a: 80, b: 120, nt: 7, rule: 'えんぴつは1本80円、ペンは1本120円', assume: '全部えんぴつ', what: 'ねだんの合計', qu: '本', vu: '円', tall: 'ペン', tu: '本', short: 'えんぴつ', su: '本' }),
  lf_ext09_314: tsuru({ N: 15, a: 60, b: 150, nt: 5, rule: '歩きは分速60m、走りは分速150m', assume: '全部歩いたと', what: '道のりの合計', qu: '分', vu: 'm', tall: '走った時間', tu: '分', short: '歩いた時間', su: '分' }),
  lf_ext09_340: tsuru({ N: 15, a: 80, b: 120, nt: 10, rule: 'みかんは1個80円、りんごは1個120円', assume: '全部みかん', what: 'ねだんの合計', qu: '個', vu: '円', tall: 'りんご', tu: '個', short: 'みかん', su: '個' }),
  lf_ext09_342: tsuru({ N: 30, a: 10, b: 12, nt: 22, rule: '10歳の生徒と12歳の生徒がいる', assume: '全員10歳', what: '年れいの合計', qu: '人', vu: '歳', tall: '12歳の生徒', tu: '人', short: '10歳の生徒', su: '人' }),
  lf_ext09_343: tsuru({ N: 20, a: 120, b: 180, nt: 5, rule: 'Aは1個120円、Bは1個180円', assume: '全部A', what: '売り上げの合計', qu: '個', vu: '円', tall: 'B', tu: '個', short: 'A', su: '個' }),

  // 分配法則 a(b＋c)＝ab＋ac（長方形の面積）
  lf_kokomathext01_022: show(
    [
      { note: 'たて5、よこ 3＋4 の長方形を考える。',
        add: [rc(48, 50, 272, 160, C.main, FILL.warm), ln(48, 30, 272, 30, C.purple, false, 2), ln(48, 26, 48, 34, C.purple, false, 2), ln(272, 26, 272, 34, C.purple, false, 2),
          L(160, 22, '3＋4', 13, C.purple), L(40, 108, '5', 13, C.main, 'end')] },
      { note: '面積は たて×よこ＝5×(3＋4)＝5×7＝35。',
        add: [L(160, 188, '全体の面積 5×(3＋4)＝35', 13, C.ink)] },
      { note: 'よこを 3 と 4 に分ける。長方形が左右 2 枚に分かれる。',
        add: [ln(144, 50, 144, 160, C.ink, true, 2), rc(48, 50, 144, 160, C.blue, BLUE_T), rc(144, 50, 272, 160, C.green, GREEN_T), L(96, 44, '3', 12, C.blue), L(208, 44, '4', 12, C.green)] },
      { note: '左の長方形の面積は 5×3＝15。', add: [L(96, 110, '5×3＝15', 13, C.blue)] },
      { note: '右の長方形の面積は 5×4＝20。', add: [L(208, 110, '5×4＝20', 13, C.green)] },
      { note: '2枚の和はやはり 15＋20＝35。これが分配法則 a(b＋c)＝ab＋ac の正体。',
        add: [L(160, 208, '5×3＋5×4＝15＋20＝35', 13, C.red), L(160, 226, 'a(b＋c)＝ab＋ac', 13, C.red)] },
    ],
    '縦5、横 3＋4 の長方形。面積は 5×(3＋4)＝35 だが、横を3と4に分けると 5×3＝15 と 5×4＝20 の2枚に分かれ、和はやはり35。これが分配法則 a(b＋c)＝ab＋ac の正体',
  ),

  // L字型の面積（2通りの求め方）
  lf_kokomathext01_025: show(
    [
      { note: 'L字型の図形。よこ8、たて6で、右上が 5×3 だけへこんでいる。',
        add: [pg([[70, 172], [246, 172], [246, 106], [136, 106], [136, 40], [70, 40]], C.main, FILL.warm),
          L(158, 186, '8', 12, C.main), L(60, 106, '6', 12, C.main, 'end'), L(254, 140, '3', 12, C.main, 'start'), L(103, 32, '3', 12, C.main)] },
      { note: '方法1：へこみを うめて 8×6 の大きな長方形にする。うめた赤い部分（5×3）はあとでひく。',
        add: [frame([[70, 172], [246, 172], [246, 40], [70, 40]], C.gray), rc(136, 40, 246, 106, C.red, RED_T), L(191, 76, 'へこみ 5×3', 11, C.red)] },
      { note: '大きい長方形からへこみを引くと 8×6−5×3＝48−15＝33。',
        add: [L(160, 204, '方法1：8×6−5×3＝48−15＝33', 13, C.red)] },
      { note: '方法2：図を横に1本線を引いて、下の 8×3 と上の 3×3 の2つの長方形に分ける。',
        add: [ln(70, 106, 246, 106, C.ink, true, 2), rc(70, 106, 246, 172, C.blue, BLUE_T), rc(70, 40, 136, 106, C.green, GREEN_T), L(158, 144, '8×3', 12, C.blue), L(103, 76, '3×3', 12, C.green)] },
      { note: '2つの長方形の面積をたすと 8×3＋3×3＝24＋9＝33。',
        add: [L(160, 220, '方法2：8×3＋3×3＝24＋9＝33', 13, C.green)] },
      { note: 'どちらも同じ33になる。これが分配法則 a(b−c)＝ab−ac が成り立つということ。',
        add: [L(160, 236, 'どちらも33（分配法則 a(b−c)＝ab−ac）', 12, C.ink)] },
    ],
    'L字型の面積。大きい長方形からへこみを引いて 8×6−5×3＝33、2つの長方形に分けて 8×3＋3×3＝33。どちらでも同じになるのは分配法則 a(b−c)＝ab−ac が成り立つから',
  ),

  // 面積で見る x²＋7x＋12 ＝ (x＋3)(x＋4)（図は x＝5）
  lf_kokomathext02_068: show(
    [
      { note: '面積が x²＋7x＋12 の長方形をつくる。まず外がわの枠と、右に式を書く。',
        add: [frame([[40, 34], [168, 34], [168, 178], [40, 178]], C.gray), L(190, 60, 'x²＋7x＋12', 13, C.ink, 'start'), L(190, 80, '（図は x＝5）', 11, C.gray, 'start')] },
      { note: 'まず x×x の正方形（面積 x²）をおく。',
        add: [rc(40, 98, 120, 178, C.blue, FILL.blue), L(80, 142, 'x²', 15, C.blue)] },
      { note: 'となりに たて x・よこ 3 の長方形（面積 3x）をおく。',
        add: [rc(120, 98, 168, 178, C.green, FILL.green), L(144, 142, '3x', 13, C.green)] },
      { note: '上に たて 4・よこ x の長方形（面積 4x）をおく。',
        add: [rc(40, 34, 120, 98, C.green, FILL.green), L(80, 70, '4x', 13, C.green)] },
      { note: 'あいたすみに 3×4＝12 の長方形。これで x²＋3x＋4x＋12 がそろう。',
        add: [rc(120, 34, 168, 98, C.purple, FILL.purple), L(144, 70, '12', 13, C.purple)] },
      { note: '中央の 7x は 3x＋4x。かけて12・たして7になる2数が 3 と 4。',
        add: [L(190, 108, '7x ＝ 3x ＋ 4x', 12, C.green, 'start'), L(190, 126, '3×4＝12', 12, C.purple, 'start'), L(190, 144, '3＋4＝7', 12, C.purple, 'start')] },
      { note: 'たては x＋4、よこは x＋3。だから x²＋7x＋12＝(x＋3)(x＋4)。x＝5 なら 8×9＝72。',
        add: [L(104, 24, '(x＋3)', 12, C.red), L(38, 108, '(x＋4)', 12, C.red, 'end'), L(190, 172, '＝(x＋3)(x＋4)', 13, C.red, 'start'), L(190, 192, 'x＝5 で 8×9＝72', 11, C.red, 'start')] },
    ],
    '面積 x²+7x+12 の長方形。x²、3x、4x、3×4=12 に分かれ、たて(x+4)・よこ(x+3)。中央の7xが 3x+4x であることが見える。かけて12・たして7 の2数が3と4（図は x=5 の場合で 8×9=72）',
  ),

  // 面積で見る x²＋6x＋9 ＝ (x＋3)²（図は x＝6）
  lf_kokomathext02_070: show(
    [
      { note: '面積が x²＋6x＋9 の正方形をつくる。まず外がわの枠と、右に式を書く。',
        add: [frame([[40, 34], [184, 34], [184, 178], [40, 178]], C.gray), L(198, 60, 'x²＋6x＋9', 13, C.ink, 'start'), L(198, 80, '（図は x＝6）', 11, C.gray, 'start')] },
      { note: 'まず x×x の正方形（面積 x²）をおく。',
        add: [rc(40, 82, 136, 178, C.blue, FILL.blue), L(88, 134, 'x²', 15, C.blue)] },
      { note: '右に たて x・よこ 3 の長方形（面積 3x）をおく。',
        add: [rc(136, 82, 184, 178, C.green, FILL.green), L(160, 134, '3x', 13, C.green)] },
      { note: '上に たて 3・よこ x の長方形（もう1つの 3x）をおく。',
        add: [rc(40, 34, 136, 82, C.green, FILL.green), L(88, 62, '3x', 13, C.green)] },
      { note: 'あいたすみに 3×3＝9 の正方形。これで x²＋3x＋3x＋9 がそろう。',
        add: [rc(136, 34, 184, 82, C.purple, FILL.purple), L(160, 62, '9', 13, C.purple)] },
      { note: '中央の 6x は 3x＋3x＝2×x×3。これが完全平方式になる条件。',
        add: [L(198, 108, '6x ＝ 2×x×3', 12, C.green, 'start'), L(198, 126, '9 ＝ 3×3', 12, C.purple, 'start')] },
      { note: '一辺は x＋3。だから x²＋6x＋9＝(x＋3)²。x＝6 なら 9²＝81＝36＋18＋18＋9。',
        add: [L(112, 24, '(x＋3)', 12, C.red), L(38, 108, '(x＋3)', 12, C.red, 'end'), L(198, 172, '＝(x＋3)²', 13, C.red, 'start'), L(198, 192, 'x＝6 で 9²＝81', 11, C.red, 'start')] },
    ],
    '面積 x²+6x+9 の正方形。x²、3x、3x、9 に分かれ、一辺は x+3。中央の6xが 2×x×3 になっていることが完全平方式の判定条件（図は x=6 の場合で 9²=81=36+18+18+9）',
  ),

  // ブーメラン型の角（∠BDC＝∠BAC＋∠ABD＋∠ACD）
  lf_kokomathext06_195: show(
    [
      { note: '頂点を順に A・B・D・C と結んだ、へこみのあるブーメラン型。D が内側にへこんだ点。',
        add: [pg([[152, 33], [88, 180], [152, 132], [216, 180]], C.main, FILL.warm), L(152, 22, 'A', 14), L(76, 190, 'B', 14), L(228, 190, 'C', 14), L(152, 124, 'D', 13, C.ink, 'middle')] },
      { note: '知りたい角は ∠BDC（D で下むきにひらく角）。赤く印をつける。',
        add: [sc(152, 132, 26, 216.9, 323.1, C.red, RED_T), L(152, 166, '∠BDC', 11, C.red)] },
      { note: '補助線：A から D を通って、辺 BC までのばす。ぶつかった点を E とする。',
        add: [ln(152, 132, 152, 180, C.green, true, 2.5), L(152, 198, 'E', 14, C.green)] },
      { note: '外角の性質：∠BDE＝∠BAD＋∠ABD、∠CDE＝∠CAD＋∠ACD。D から下の角を青と緑に分ける。',
        add: [sc(152, 132, 16, 216.9, 270, C.blue, BLUE_T), sc(152, 132, 16, 270, 323.1, C.green, GREEN_T), L(112, 156, '∠BDE', 10, C.blue), L(194, 156, '∠CDE', 10, C.green)] },
      { note: '2つをたすと ∠BDC＝∠BDE＋∠CDE＝(∠BAD＋∠ABD)＋(∠CAD＋∠ACD)＝∠BAC＋∠ABD＋∠ACD。',
        add: [L(160, 216, '∠BDC＝∠BDE＋∠CDE', 12, C.ink), L(160, 232, '＝∠BAC＋∠ABD＋∠ACD', 13, C.red)] },
    ],
    'ブーメラン型（矢じり形）。内側にへこんだ点Dについて、∠BDC＝∠BAC＋∠ABD＋∠ACD が成り立つ',
  ),

  // Aa × Aa の組み合わせ表
  lf_kokorikaext10_376: punnett({
    cols: ['A', 'a'], rows: ['A', 'a'], cells: ['AA', 'Aa', 'Aa', 'aa'],
    colName: '一方の生殖細胞', rowName: 'もう一方の|生殖細胞',
    note0: 'Aa × Aa の組み合わせ表。上の行が一方の生殖細胞 A と a、左の列がもう一方の生殖細胞 A と a。',
    note1: '4つのマスができる。それぞれが、上と左の生殖細胞の組み合わせ。',
    note2: 'マスに組み合わせを書く。AA、Aa、Aa、aa の4通りが、同じ確率で起こる。',
    note3: 'AA が1、Aa が2（右上と左下）、aa が1。遺伝子型の比は AA:Aa:aa＝1:2:1。',
    note4: '見た目は AA と Aa がどちらも顕性形質。顕性:潜性＝(1＋2):1＝3:1。',
    group: ['a', 'b', 'b', 'c'], ratio: 'AA:Aa:aa＝1:2:1',
    ratioNote: '', lastLines: ['AA・Aa は顕性（1＋2）', 'aa は潜性（1）　→ 顕性:潜性＝3:1'],
  }),

  // 検定交雑 Aa × aa の組み合わせ表
  lf_kokorikaext10_378: punnett({
    cols: ['a', 'a'], rows: ['A', 'a'], cells: ['Aa', 'Aa', 'aa', 'aa'],
    colName: 'aa がつくる生殖細胞', rowName: 'Aa がつくる|生殖細胞',
    note0: '検定交雑 Aa × aa の組み合わせ表。aa がつくる生殖細胞は a の1種類だけなので、上の列はどちらも a。左の列は Aa がつくる A と a。',
    note1: '4つのマスができる。それぞれが、上と左の生殖細胞の組み合わせ。',
    note2: 'マスに組み合わせを書く。上の行（A）からは Aa が2つ、下の行（a）からは aa が2つ。',
    note3: 'Aa が2、aa が2。遺伝子型の比は Aa:aa＝1:1。見た目も顕性:潜性＝1:1。',
    note4: '調べたい個体が AA なら、子はすべて Aa（すべて顕性形質）になる。潜性形質が出るかどうかで遺伝子型を判定できる。',
    group: ['b', 'b', 'c', 'c'], ratio: 'Aa:aa＝1:1',
    ratioNote: '', lastLines: ['潜性（aa）の子が出る → 調べた個体は Aa', '出ない（すべて Aa）→ 調べた個体は AA'],
  }),
};
