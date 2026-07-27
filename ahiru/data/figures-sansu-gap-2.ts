import type { Figure } from './figures';

// 算数・数学：図解ギャップ埋め バッチ2（未対応だった幾何・グラフ問題に図を追加）
export const figuresSansuGap2: Record<string, Figure> = {
  // 一次関数 y=3x-4 のグラフ。(1)(2)の値・(3)の傾き/切片は解答なので数値・点は表示しない。
  koko_kankan_sansu_c1_01: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-8, 8],
    lines: [{ a: 3, b: -4 }],
  },
  // 2直線 y=2x+3、y=-x+9 のグラフ。交点(2,7)は解答なので点は打たない。
  koko_kankan_sansu_c1_03: {
    kind: 'coordinate',
    xRange: [-2, 10],
    yRange: [-2, 12],
    lines: [
      { a: 2, b: 3 },
      { a: -1, b: 9 },
    ],
  },
  // 一次関数 y=-2x+7 のグラフ。xの変化量2→5・yの変化量は解答なので強調しない。
  koko_kankan_sansu_c1_05: {
    kind: 'coordinate',
    xRange: [0, 7],
    yRange: [-8, 8],
    lines: [{ a: -2, b: 7 }],
  },
  // 反比例 y=12/x のグラフ。(1)(2)の値・(3)の象限は解答なので点や着色はしない。
  koko_kankan_sansu_c1_06: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-8, 8],
    hyperbolas: [{ k: 12 }],
  },
  // 直線 y=-2x+8 のグラフ。A,Bの座標・△OABの面積は解答なので点や塗りは表示しない。
  koko_kankan_sansu_c1_08: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-2, 10],
    lines: [{ a: -2, b: 8 }],
  },
  // 放物線 y=x² と直線 y=x+2。交点(-1,1),(2,4)は解答なので点は表示しない。
  koko_kankan_sansu_c1_10: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 6],
    parabolas: [{ a: 1 }],
    lines: [{ a: 1, b: 2 }],
  },
  // 双曲線 y=6/x 上の与えられた点P(2,3),Q(-3,-2)。長方形の面積は解答なので長方形は描かない。
  koko_kankan_sansu_c1_14: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-5, 5],
    hyperbolas: [{ k: 6 }],
    points: [
      { x: 2, y: 3, label: 'P(2, 3)' },
      { x: -3, y: -2, label: 'Q(-3, -2)' },
    ],
  },
  // 2直線 y=x+1、y=-2x+7。交点(2,3)・三角形の面積は解答なので点や塗りは表示しない。
  koko_kankan_sansu_c1_15: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-1, 8],
    lines: [
      { a: 1, b: 1 },
      { a: -2, b: 7 },
    ],
  },
  // 一次関数 y=-3x+5。xの変域-2≤x≤3は与えられている。yの変域は解答なので強調しない。
  koko_kankan_sansu_c1_21: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-5, 12],
    lines: [{ a: -3, b: 5 }],
  },
  // 放物線 y=(1/2)x² と直線 y=x+4。A,Bの座標・線分ABの長さは解答なので点は表示しない。
  koko_kankan_sansu_c1_25: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-1, 9],
    parabolas: [{ a: 0.5 }],
    lines: [{ a: 1, b: 4 }],
  },
  // 放物線 y=x² 上の与えられた点A(-2,4),B(3,9)。Cの座標・面積比は解答なので表示しない。
  koko_kankan_sansu_c1_26: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    points: [
      { x: -2, y: 4, label: 'A(-2, 4)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
    ],
  },
  // 放物線 y=x² 上の与えられた点A(-2,4),B(3,9)。台形ABB′A′の面積は解答なので表示しない。
  koko_kankan_sansu_c1_27: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    points: [
      { x: -2, y: 4, label: 'A(-2, 4)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
    ],
  },
  // 直線 l1: y=2x+3 のみ表示（l2は解答で求める式なので表示しない）。
  koko_kankan_sansu_c1_28: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-4, 10],
    lines: [{ a: 2, b: 3, label: 'l1' }],
  },
  // 双曲線 y=8/x 上の与えられた点A(2,4),B(-4,-2)。長方形の面積(常に8)は解答。
  koko_kankan_sansu_c1_29: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-6, 6],
    hyperbolas: [{ k: 8 }],
    points: [
      { x: 2, y: 4, label: 'A(2, 4)' },
      { x: -4, y: -2, label: 'B(-4, -2)' },
    ],
  },
  // 与えられた2点A(0,0),B(6,0)と直線y=-x+9。点Cの座標は解答なので表示しない。
  koko_kankan_sansu_c1_36: {
    kind: 'coordinate',
    xRange: [-1, 10],
    yRange: [-1, 10],
    lines: [{ a: -1, b: 9 }],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
    ],
  },
  // 直線 y=-x+6。座標軸との交点で作る三角形の周の長さは解答なので点は打たない。
  koko_kankan_sansu_c1_39: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 7],
    lines: [{ a: -1, b: 6 }],
  },
  // 放物線 y=x² と直線 y=-x+6。交点A,B・中点Mは解答なので点は表示しない。
  koko_kankan_sansu_c1_40: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    lines: [{ a: -1, b: 6 }],
  },
  // 放物線 y=2x²（一般形）。tは変数（part2でt=3を使う）なのでP,Qの点は打たない。
  koko_kankan_sansu_c1_43: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 14],
    parabolas: [{ a: 2 }],
  },
  // 四角形ABCDの頂点A(-1,1),B(2,1),C(4,5),D(1,5)はすべて与えられている。対角線の交点M・面積は解答。
  koko_kankan_sansu_c1_49: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [0, 6],
    points: [
      { x: -1, y: 1, label: 'A' },
      { x: 2, y: 1, label: 'B' },
      { x: 4, y: 5, label: 'C' },
      { x: 1, y: 5, label: 'D' },
    ],
    polygon: [
      { x: -1, y: 1 },
      { x: 2, y: 1 },
      { x: 4, y: 5 },
      { x: 1, y: 5 },
    ],
  },
  // 放物線 y=(1/2)x² と直線 y=x+4。A,Bの座標・△OABの面積・二等分線は解答なので表示しない。
  koko_kankan_sansu_c1_50: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-1, 9],
    parabolas: [{ a: 0.5 }],
    lines: [{ a: 1, b: 4 }],
  },
  // 放物線 y=x²-2x+1 と直線 y=2x+1。交点(0,1),(4,9)・2交点間の距離は解答なので点は表示しない。
  koko_sansu_ex_05_003: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-2, 12],
    parabolas: [{ a: 1, b: -2, c: 1 }],
    lines: [{ a: 2, b: 1 }],
  },
  // 正三角形(1辺6cm)。外接円半径R・内接円半径rは解答なので円は描かない。
  koko_sansu_ex_05_004: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5.196, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['6cm', '6cm', '6cm'],
    equalSides: [[0, 1, 2]],
  },
  // 直角三角形（∠B=90°）。AB=8cm,BC=6cmが与えられている。AC(斜辺)は計算値なので表示しない。BDは解答。
  koko_sansu_ex_05_006: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', '6cm', null],
    rightAngles: [1],
  },
  // 3点A(1,3),B(4,1),C(2,5)はすべて与えられている。面積は解答。
  koko_sansu_ex_05_008: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 6],
    points: [
      { x: 1, y: 3, label: 'A' },
      { x: 4, y: 1, label: 'B' },
      { x: 2, y: 5, label: 'C' },
    ],
    polygon: [
      { x: 1, y: 3 },
      { x: 4, y: 1 },
      { x: 2, y: 5 },
    ],
  },
  // 1辺4cmの立方体。対角線・体積・表面積・角度は解答なので1辺の長さのみ表示。
  koko_sansu_ex_05_009: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
  },
  // △ABCの3辺AB=7,BC=5,CA=6はすべて与えられている。cos∠B・面積・外接円半径は解答。
  koko_sansu_ex_05_013: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 7, y: 0, label: 'B' },
      { x: 4.29, y: 4.2, label: 'C' },
    ],
    sideLabels: ['7', '5', '6'],
  },
  // 円に内接する四角形ABCD。AB=3,BC=4,CD=5,DA=6が与えられている（配置は概略、正確な縮尺ではない）。
  // 対角線の交点P・△APBと△CPDの面積比は解答。
  koko_sansu_ex_05_019: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 6, y: 2, label: 'C' },
      { x: 2, y: 5, label: 'D' },
    ],
    sideLabels: ['3', '4', '5', '6'],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
  },
  // 放物線 y=x² と与えられた点A(0,3)。Pの座標・最小距離は解答なので点は表示しない。
  koko_sansu_ex_05_025: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    points: [{ x: 0, y: 3, label: 'A(0, 3)' }],
  },
  // 放物線が点(3,6)を通ることが与えられている（a=2/3は解答なので表示せず、形だけ正しく描く）。直線y=2xも与えられている。交点は解答。
  koko_sansu_ex_05_031: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-2, 10],
    parabolas: [{ a: 2 / 3 }],
    lines: [{ a: 2, b: 0 }],
    points: [{ x: 3, y: 6, label: '(3, 6)' }],
  },
  // 円 x²+y²=25（半径5）上の与えられた点P(3,4)。接線の式・原点からの距離は解答。
  koko_sansu_ex_05_032: {
    kind: 'circle',
    radiusLabel: '5',
    points: [{ angle: 53.13, label: 'P(3, 4)' }],
  },
  // 直線 2x-y+3=0（y=2x+3）と与えられた点A(4,1)。対称点Bの座標は解答。
  koko_sansu_ex_05_034: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-2, 12],
    lines: [{ a: 2, b: 3 }],
    points: [{ x: 4, y: 1, label: 'A(4, 1)' }],
  },
  // 平行四辺形ABCD、対角線の交点O。△AOB=6cm²が与えられている。他の三角形とABCDの面積は解答。
  koko_sansu_ex_05_036: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 6, y: 3, label: 'C' },
      { x: 2, y: 3, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '△AOB = 6cm²（Oは対角線の交点）。他の三角形の面積とABCDの面積は解答。',
  },
  // 与えられた2点A(-2,0),B(0,4)と線分AB。垂線の足P・最小距離は解答なので点は表示しない。
  koko_sansu_ex_05_040: {
    kind: 'coordinate',
    xRange: [-3, 2],
    yRange: [-1, 5],
    points: [
      { x: -2, y: 0, label: 'A' },
      { x: 0, y: 4, label: 'B' },
    ],
    segments: [
      [
        { x: -2, y: 0 },
        { x: 0, y: 4 },
      ],
    ],
  },
  // ∠BAC=60°、BC=6cmが与えられている（AB+AC=8だが個々のAB,ACの値は不定）。Rと面積は解答。
  koko_sansu_ex_05_041: {
    kind: 'polygon',
    points: [
      { x: -3, y: -1.732, label: 'B' },
      { x: 3, y: -1.732, label: 'C' },
      { x: 0, y: 3.464, label: 'A' },
    ],
    sideLabels: ['6cm', null, null],
    caption: '∠BAC=60°、BC=6cmが与えられている。AB+AC=8（個々の値は不定）。Rと面積は解答。',
  },
  // 一般の三角形ABCとAからBCへの垂線の足H（数値は与えられていない）。BH,CH,AHの具体的な値は解答。
  koko_sansu_ex_05_043: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
    ],
    heights: [{ from: 0, toEdge: [1, 2], label: 'H' }],
  },
  // 半径5cmの円、弦AB=8cmが与えられている。中心Oから弦ABまでの距離dは解答。
  koko_sansu_ex_05_046: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 143.13, label: 'A' },
      { angle: 36.87, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
  },
  // 放物線 y=x² 上の点A(2,4),B(-2,4)（a=2の場合。問題文で与えられた具体値）。三角形の面積は解答。
  koko_sansu_ex_05_049: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 6],
    parabolas: [{ a: 1 }],
    points: [
      { x: 2, y: 4, label: 'A(2, 4)' },
      { x: -2, y: 4, label: 'B(-2, 4)' },
    ],
  },
  // 直角三角形。斜辺13cm・一辺5cmが与えられている。残りの辺(12cm)は解答なのでラベルなし。
  koko_sansu_ex_06_003: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', null, '13cm'],
    rightAngles: [1],
  },
  // 半径5cmの円、弦AB=6cmが与えられている。中心から弦までの距離は解答。
  koko_sansu_ex_06_005: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 126.87, label: 'A' },
      { angle: 53.13, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
  },
  // 放物線 y=2x²-4x+1。頂点・最小値は解答なので点は表示しない。
  koko_sansu_ex_06_012: {
    kind: 'coordinate',
    xRange: [-1, 3],
    yRange: [-3, 6],
    parabolas: [{ a: 2, b: -4, c: 1 }],
  },
  // 円に内接する△ABC。∠BAC=35°が与えられている（∠BOCは解答なので数値は表示しない）。
  koko_sansu_ex_06_013: {
    kind: 'circle',
    points: [
      { angle: 0, label: 'B' },
      { angle: 70, label: 'C' },
      { angle: 200, label: 'A' },
    ],
    chords: [
      [2, 0],
      [2, 1],
      [0, 1],
    ],
    showCenter: true,
  },
  // 放物線 y=x² と直線 y=2x+3の式は与えられている。Pの位置(tは変数)・交点・面積は解答なので点は表示しない。
  koko_sansu_ex_06_021: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
  },
  // 3点A(1,2),B(4,6),C(7,2)は与えられている。面積は解答。
  koko_sansu_ex_06_022: {
    kind: 'coordinate',
    xRange: [0, 8],
    yRange: [0, 7],
    points: [
      { x: 1, y: 2, label: 'A' },
      { x: 4, y: 6, label: 'B' },
      { x: 7, y: 2, label: 'C' },
    ],
    polygon: [
      { x: 1, y: 2 },
      { x: 4, y: 6 },
      { x: 7, y: 2 },
    ],
  },
  // 円に内接する四角形ABCD。AB=5,BC=3,CD=5,DA=7が与えられている（配置は概略）。対角線ACの長さは解答。
  koko_sansu_ex_06_023: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 7, y: 2, label: 'C' },
      { x: 2, y: 5, label: 'D' },
    ],
    sideLabels: ['5', '3', '5', '7'],
    diagonals: [[0, 2]],
  },
  // 放物線 y=x²-4。A,B(x軸との交点)・Pの位置(tは変数)・面積は解答なので点は表示しない。
  koko_sansu_ex_06_035: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-5, 6],
    parabolas: [{ a: 1, c: -4 }],
  },
  // 直角三角形。斜辺2√5cm・一辺2cmが与えられている。残りの辺・面積・比は解答。
  koko_sansu_ex_06_039: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
    ],
    sideLabels: ['2cm', null, '2√5cm'],
    rightAngles: [1],
  },
  // 直径AB=10cm、弦AC=6cmが与えられている（半径5cmとして描画）。∠ACBとBCの長さは解答。
  koko_sansu_ex_06_040: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 106.26, label: 'C' },
    ],
    chords: [
      [0, 2],
      [2, 1],
    ],
    showCenter: true,
    caption: '直径AB=10cm、弦AC=6cmが与えられている。∠ACBとBCの長さは解答。',
  },
  // 半径3cmの球。半径2倍(6cm)の球との比較(表面積比・体積比)は解答なので基準の球のみ表示。
  koko_sansu_ex_06_048: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '3cm' },
  },
  // 与えられた点A(2,5)と直線y=x。A',A''の座標は解答なので表示しない。
  koko_sansu_ex_06_049: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-6, 6],
    lines: [{ a: 1, b: 0 }],
    points: [{ x: 2, y: 5, label: 'A(2, 5)' }],
  },
  // 放物線 y=x²（aは解答として求める変数なので点P,Qは打たない）。
  koko_sansu_ex_06_050: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 16],
    parabolas: [{ a: 1 }],
  },
  // 底辺10cm・高さ6cmの三角形。面積は解答。
  kiso_sansu_042: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 3, y: 6 },
    ],
    sideLabels: ['10cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '6cm' }],
  },
  // 半径7cmの円。面積は解答。
  kiso_sansu_043: {
    kind: 'circle',
    radiusLabel: '7cm',
  },
  // 直径10cmの円（半径5cmとして描画）。円周の長さは解答。
  kiso_sansu_044: {
    kind: 'circle',
    radiusLabel: '5cm',
    caption: '直径10cmの円（半径5cmとして描画）。円周の長さは解答。',
  },
  // 底辺8cm・高さ6cmの平行四辺形。面積は解答。
  kiso_sansu_046: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 11, y: 6 },
      { x: 3, y: 6 },
    ],
    sideLabels: ['8cm', null, null, null],
    heights: [{ from: 3, toEdge: [0, 1], label: '6cm' }],
  },
  // 上底4cm・下底8cm・高さ5cmの台形。面積は解答。
  kiso_sansu_047: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 6, y: 5 },
      { x: 2, y: 5 },
    ],
    sideLabels: ['8cm', null, '4cm', null],
    heights: [{ from: 3, toEdge: [0, 1], label: '5cm' }],
  },
  // ひし形、対角線6cmと8cmが与えられている。面積は解答。
  kiso_sansu_048: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4 },
      { x: 3, y: 0 },
      { x: 0, y: -4 },
      { x: -3, y: 0 },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '対角線6cmと8cmが与えられている。面積は解答。',
  },
  // 半径6cmの半円。面積は解答。
  kiso_sansu_049: {
    kind: 'circle',
    radiusLabel: '6cm',
    sector: { from: 0, to: 180, label: '半円' },
  },
  // 縦6cm・横9cmの長方形から底辺3cm・高さ4cmの三角形を切り取り（位置は問題文で指定なし、右下角と仮定）。残った面積は解答。
  kiso_sansu_050: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 6, y: 0 },
      { x: 9, y: 4 },
      { x: 9, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: [null, null, null, '9cm', '6cm'],
    caption:
      'ここから底辺3cm・高さ4cmの直角三角形を切り取った（切り取る位置は問題文に指定がないため一例として右下角と仮定）。残った図形の面積は解答。',
  },
  // 縦4cm・横5cm・高さ6cmの直方体。体積は解答。
  kiso_sansu_051: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '4cm', height: '6cm' },
  },
  // 1辺5cmの立方体。体積・表面積は解答。
  kiso_sansu_052: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '5cm', depth: '5cm', height: '5cm' },
  },
  // 底面が縦3cm・横4cm、高さ8cmの直方体。表面積は解答。
  kiso_sansu_053: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '8cm' },
  },
  // 底面の半径3cm、高さ10cmの円柱。体積は解答。
  kiso_sansu_054: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '10cm' },
  },
  // 底面が1辺6cmの正三角形（面積15.6㎠は問題文で与えられている）、高さ10cmの三角柱。体積は解答。
  kiso_sansu_055: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { width: '6cm', height: '10cm' },
    caption: '底面は1辺6cmの正三角形（面積15.6㎠が問題文で与えられている）。高さ10cm。体積は解答。',
  },
  // 底面の半径4cm、高さ6cmの円柱。表面積は解答。
  kiso_sansu_056: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '6cm' },
  },
  // 底面が1辺4cmの正方形、高さ9cmの四角柱。体積・表面積は解答。
  kiso_sansu_057: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '4cm', height: '9cm' },
  },
  // 縦3cm・横4cm・高さ5cmの直方体から1辺2cmの立方体をくり抜く（位置は問題文で指定なし）。残った体積は解答。
  kiso_sansu_058: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '5cm' },
    caption: 'この直方体から1辺2cmの立方体をどこか1つくり抜いた（位置は問題文に指定なし）。残った体積は解答。',
  },
  // 正三角形(1辺6cm)。高さ・面積は解答なので高さの数値は表示しない。
  koko_sansu_ex_03_012: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5.196, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['6cm', '6cm', '6cm'],
    equalSides: [[0, 1, 2]],
    heights: [{ from: 0, toEdge: [1, 2] }],
  },
  // 半径5cmの円、中心角90°のおうぎ形（90°は与えられている）。面積・円周・弧の長さは解答。
  koko_sansu_ex_03_013: {
    kind: 'circle',
    radiusLabel: '5cm',
    sector: { from: 0, to: 90, label: '90°' },
  },
  // 平行四辺形ABCD、∠A=70°が与えられている。∠B,∠C,∠Dは解答。
  koko_sansu_ex_03_016: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 7, y: 3, label: 'C' },
      { x: 2, y: 3, label: 'D' },
    ],
    equalAngles: [[0, 2]],
    caption: '∠A=70°が与えられている。∠B,∠C,∠Dは解答。',
  },
  // 放物線 y=-x²+4。頂点・最大値最小値は解答なので点は表示しない（xの変域-1≤x≤2は問題文で与えられている）。
  koko_sansu_ex_03_025: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 5],
    parabolas: [{ a: -1, c: 4 }],
  },
  // 与えられた2点A(0,4),B(3,0)と線分AB。直線の式・距離・△OABの面積は解答なので式や塗りは表示しない。
  koko_sansu_ex_03_029: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 6],
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 3, y: 0, label: 'B' },
    ],
    segments: [
      [
        { x: 0, y: 4 },
        { x: 3, y: 0 },
      ],
    ],
  },
  // 半径6cm、中心角∠AOB=120°が与えられている。弧の長さ・弦の長さ・弓形の面積は解答。
  koko_sansu_ex_03_032: {
    kind: 'circle',
    radiusLabel: '6cm',
    points: [
      { angle: 150, label: 'A' },
      { angle: 30, label: 'B' },
    ],
    chords: [[0, 1]],
    sector: { from: 30, to: 150, label: '120°' },
    showCenter: true,
  },
  // 放物線 y=x²-2x-3。交点・頂点は解答なので点は表示しない。
  koko_sansu_ex_03_035: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-5, 8],
    parabolas: [{ a: 1, b: -2, c: -3 }],
  },
  // 直角三角形。斜辺13cm・一辺5cmが与えられている。残りの辺・面積・内接円半径は解答。
  koko_sansu_ex_03_042: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', null, '13cm'],
    rightAngles: [1],
  },
  // △ABCの3辺(AB=6,BC=8,CA=10)は与えられている。直角三角形かどうか・∠ABC・面積は解答なので直角マークは付けない。
  koko_sansu_ex_03_045: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 6, y: 8, label: 'C' },
    ],
    sideLabels: ['6', '8', '10'],
  },
  // 放物線 y=x²-4x+3。頂点・x軸との交点・y軸との交点は解答なので点は表示しない。
  koko_sansu_ex_03_047: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 6],
    parabolas: [{ a: 1, b: -4, c: 3 }],
  },
  // 円Oで弦ABと弦CDが点Pで交わる。AP=3,PB=4,CP=2が与えられている。PDは解答。
  koko_sansu_ex_03_048: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 280, label: 'B' },
      { angle: 20, label: 'C' },
      { angle: 200, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    caption: '弦ABと弦CDが点Pで交わる。AP=3,PB=4,CP=2が与えられている。PDは解答。',
  },
  // 放物線 y=2x²-8x+6。頂点・軸は解答なので点は表示しない。
  koko_sansu_ex_08_001: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-4, 8],
    parabolas: [{ a: 2, b: -8, c: 6 }],
  },
  // 直角三角形。斜辺13cm・一辺5cmが与えられている。残りの辺は解答。
  koko_sansu_ex_08_002: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', null, '13cm'],
    rightAngles: [1],
  },
  // 半径5cmの円、弦AB=8cmが与えられている。中心Oから弦ABまでの距離は解答。
  koko_sansu_ex_08_003: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 143.13, label: 'A' },
      { angle: 36.87, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
  },
  // 半径rの円に内接する正方形（rは記号のまま）。1辺の長さと面積は解答。
  koko_sansu_ex_08_007: {
    kind: 'circle',
    radiusLabel: 'r',
    points: [
      { angle: 45, label: 'A' },
      { angle: 135, label: 'B' },
      { angle: 225, label: 'C' },
      { angle: 315, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    showCenter: true,
  },
  // 二等辺三角形AB=AC、∠A=40°が与えられている。正三角形でないことの論証が解答。
  koko_sansu_ex_08_016: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    equalSides: [[0, 2]],
    caption: 'AB=AC（二等辺三角形）、∠A=40°が与えられている。',
  },
  // 与えられた点A(2,1)と直線y=2x-3。対称点A′の座標は解答なので表示しない。
  koko_sansu_ex_08_031: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-4, 6],
    lines: [{ a: 2, b: -3 }],
    points: [{ x: 2, y: 1, label: 'A(2, 1)' }],
  },
  // 正三角形(1辺6)。内接円・外接円の半径は解答なので円は描かない。
  koko_sansu_ex_08_046: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5.196, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['6', '6', '6'],
    equalSides: [[0, 1, 2]],
  },
  // 直径ABに対する円周上の点C（Thalesの定理の証明問題）。∠ACB=90°の証明が解答なので直角マークは付けない。
  koko_sansu_ex_14_005: {
    kind: 'circle',
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 60, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    showCenter: true,
  },
  // 放物線 y=2x²-8x+6。頂点・x軸との交点は解答なので点は表示しない。
  koko_sansu_ex_14_007: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-4, 8],
    parabolas: [{ a: 2, b: -8, c: 6 }],
  },
  // 半径rの円に内接する正六角形（rは記号のまま）。面積は解答。
  koko_sansu_ex_14_009: {
    kind: 'circle',
    radiusLabel: 'r',
    points: [
      { angle: 0, label: 'A' },
      { angle: 60, label: 'B' },
      { angle: 120, label: 'C' },
      { angle: 180, label: 'D' },
      { angle: 240, label: 'E' },
      { angle: 300, label: 'F' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    showCenter: true,
  },
  // △ABCの3辺AB=5,BC=7,CA=6は与えられている。cos∠B・面積は解答。
  koko_sansu_ex_14_020: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 1.2, y: 5.878, label: 'C' },
    ],
    sideLabels: ['5', '7', '6'],
  },
  // 1辺aの正三角形（aは記号のまま）。S=r×sの確認は解答。
  koko_sansu_ex_14_032: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5.2, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['a', 'a', 'a'],
    equalSides: [[0, 1, 2]],
  },
  // 放物線 y=x² と与えられた点Q(0,2)。Pの座標・最小値は解答なので点は表示しない。
  koko_sansu_ex_14_034: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 6],
    parabolas: [{ a: 1 }],
    points: [{ x: 0, y: 2, label: 'Q(0, 2)' }],
  },
  // 辺BCの中点Mを持つ一般の三角形ABC（中線定理の証明、数値は一般化のための例示配置）。
  koko_sansu_ex_14_041: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 5],
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'M' },
    ],
    segments: [
      [
        { x: 0, y: 4 },
        { x: -3, y: 0 },
      ],
      [
        { x: 0, y: 4 },
        { x: 3, y: 0 },
      ],
      [
        { x: -3, y: 0 },
        { x: 3, y: 0 },
      ],
      [
        { x: 0, y: 4 },
        { x: 0, y: 0 },
      ],
    ],
    caption: '辺BCの中点M。AB²+AC²=2(AM²+BM²)（中線定理）を証明する問題（座標は一般化のための例示配置）。',
  },
  // 問1・2は縦4cm・横6cm・高さ5cmの直方体（問3・4は底面半径3cm・高さ10cmの円柱、この図は直方体のみ表示）。体積・表面積は解答。
  kaimei_sansu_2: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '4cm', height: '5cm' },
    caption:
      '問1・2は縦4cm・横6cm・高さ5cmの直方体。問3・4は底面半径3cm・高さ10cmの円柱（この図は直方体のみ表示）。体積・表面積は解答。',
  },
};
