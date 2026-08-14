import type { Figure } from './figures';

// 算数・数学：図解ギャップ埋め バッチ5（未対応だった幾何・グラフ問題に図を追加）
export const figuresSansuGap5: Record<string, Figure> = {
  // 一次関数 y=-2x+6 のグラフ。x切片・y切片・三角形の面積(9)は解答なので数値は示さない。
  koko_sansu_ex_07_003: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 8],
    lines: [{ a: -2, b: 6 }],
  },
  // 直角三角形。斜辺13cm・一辺5cmは与えられた値。もう一辺(12cm)は解答なのでラベルなし。
  koko_sansu_ex_07_004: {
    kind: 'polygon',
    points: [
      { x: 0, y: 12, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['13cm', '5cm', null],
    rightAngles: [2],
  },
  // 半径6cmの円。弧の長さ4π cm(与えられた値)。中心角は解答なので扇形の角度は描かない。
  koko_sansu_ex_07_005: {
    kind: 'circle',
    radiusLabel: '6cm',
    showCenter: true,
    caption: '弧の長さ4π cmの弧（中心角は解答）',
  },
  // 半径10cm・弦AB=12cm(与えられた値)。中心から弦の中点までの距離は解答なので示さない。
  koko_sansu_ex_07_006: {
    kind: 'circle',
    radiusLabel: '10cm',
    points: [
      { angle: 125, label: 'A' },
      { angle: 55, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '弦AB=12cm（中心からの距離は解答）',
  },
  // 与えられた2点(2,7)・(5,1)。直線の式(a,b)は解答なので直線は描かない。
  koko_sansu_ex_07_008: {
    kind: 'coordinate',
    xRange: [0, 7],
    yRange: [0, 9],
    points: [
      { x: 2, y: 7, label: '(2, 7)' },
      { x: 5, y: 1, label: '(5, 1)' },
    ],
  },
  // 円Oで中心角∠AOB=100°(与えられた値)。円周角は解答なので示さない。
  koko_sansu_ex_07_011: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 125, label: 'A' },
      { angle: 55, label: 'B' },
    ],
    chords: [[0, 1]],
    sector: { from: 55, to: 125, label: '100°' },
  },
  // 平行四辺形ABCD、AB=8cm・AD=6cm・∠DAB=60°(すべて与えられた値)。対角線ACの長さは解答。
  koko_sansu_ex_07_015: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 11, y: 5.2, label: 'C' },
      { x: 3, y: 5.2, label: 'D' },
    ],
    sideLabels: ['8cm', '6cm', '8cm', '6cm'],
    diagonals: [[0, 2]],
  },
  // 底面1辺6cmの正方形・高さ8cmの直方体(すべて与えられた値)。体積・表面積・対角線は解答。
  koko_sansu_ex_07_018: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '6cm', height: '8cm' },
  },
  // 底面半径3cm・母線9cmの円錐(すべて与えられた値)。体積・表面積は解答。
  koko_sansu_ex_07_019: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', slant: '9cm' },
  },
  // 平行四辺形の面積=60cm²・AB=10cm(すべて与えられた値)。高さと△ABDの面積は解答。
  koko_sansu_ex_07_026: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 12, y: 6, label: 'C' },
      { x: 2, y: 6, label: 'D' },
    ],
    sideLabels: ['10cm', null, null, null],
    caption: '平行四辺形の面積=60cm²（高さと△ABDの面積は解答）',
  },
  // △ABC∽△DEF、相似比2:5、AB=8cm(与えられた値)。DEと△DEFの面積は解答。
  koko_sansu_ex_07_027: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 6, label: 'C' },
    ],
    sideLabels: ['8cm', null, null],
    caption: '△ABC∽△DEF、相似比2:5、△ABCの面積12cm²（DEと△DEFの面積は解答）',
  },
  // 円周角∠APB=35°(与えられた値、Pは弧AB上)。中心角∠AOBと優弧側の円周角∠AQBは解答。
  koko_sansu_ex_07_029: {
    kind: 'circle',
    points: [
      { angle: 125, label: 'A' },
      { angle: 55, label: 'B' },
      { angle: 280, label: 'P' },
    ],
    chords: [
      [0, 2],
      [1, 2],
    ],
    showCenter: true,
    caption: '円周角∠APB=35°（中心角∠AOBと円周角∠AQBは解答）',
  },
  // 弦PQ=8cm・中心から弦までの距離=3cm(与えられた値)。半径と弧の長さは解答なので半径は示さない。
  koko_sansu_ex_07_031: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'P' },
      { angle: 80, label: 'Q' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '弦PQ=8cm、中心から弦までの距離=3cm（半径・弧の長さは解答）',
  },
  // 放物線y=x²-2x-3(与えられた式)。頂点・x軸との交点・三角形の面積は解答。
  koko_sansu_ex_07_033: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-6, 6],
    parabolas: [{ a: 1, b: -2, c: -3 }],
  },
  // 正六角形(n=6、与えられた値)。内角の和・1つの内角・敷き詰めの説明は解答。
  koko_sansu_ex_07_034: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0 },
      { x: 2.5, y: 4.33 },
      { x: -2.5, y: 4.33 },
      { x: -5, y: 0 },
      { x: -2.5, y: -4.33 },
      { x: 2.5, y: -4.33 },
    ],
  },
  // 半径5cmの球(与えられた値)。体積・表面積・内接立方体の1辺は解答。
  koko_sansu_ex_07_035: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '5cm' },
  },
  // 座標平面上の△ABC、A(1,4)・B(5,0)・C(3,-2)(すべて与えられた値)。面積は解答。
  koko_sansu_ex_07_040: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-3, 5],
    points: [
      { x: 1, y: 4, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 3, y: -2, label: 'C' },
    ],
    polygon: [
      { x: 1, y: 4 },
      { x: 5, y: 0 },
      { x: 3, y: -2 },
    ],
  },
  // △ABC、A(0,6)・B(-3,0)・C(4,0)(すべて与えられた値)。中点M・中線AM・重心Gは解答。
  koko_sansu_ex_07_047: {
    kind: 'coordinate',
    xRange: [-5, 6],
    yRange: [-2, 8],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
    ],
    polygon: [
      { x: 0, y: 6 },
      { x: -3, y: 0 },
      { x: 4, y: 0 },
    ],
  },
  // 放物線y=x²上の与えられた点A(1,1)・B(3,9)。直線ABの式・囲む面積は解答なので直線は描かない。
  koko_sansu_ex_07_050: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    points: [
      { x: 1, y: 1, label: 'A(1, 1)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
    ],
  },
  // y=x²とy=2x+3(与えられた式)。交点は解答。
  koko_sansu_ex_04_004: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 10],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
  },
  // 直角三角形、斜辺10cm・一辺6cm(与えられた値)。もう一辺(8cm)・面積・周長は解答。
  koko_sansu_ex_04_006: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['10cm', '6cm', null],
    rightAngles: [2],
  },
  // 半径6cm・弦AB=6cm(与えられた値)。垂線の長さと中心角∠AOBは解答。
  koko_sansu_ex_04_007: {
    kind: 'circle',
    radiusLabel: '6cm',
    points: [
      { angle: 100, label: 'A' },
      { angle: 80, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '弦AB=6cm（垂線の長さと中心角は解答）',
  },
  // 直角三角形、AB=8cm・AC=6cm・∠A=90°(すべて与えられた値)。外接円の半径Rと面積は解答。
  koko_sansu_ex_04_015: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 0, y: 6, label: 'C' },
    ],
    sideLabels: ['8cm', null, '6cm'],
    rightAngles: [0],
  },
  // 円周角の定理、BDが直径、∠BAC=35°・∠ABD=25°(与えられた値)。∠BDAと∠ACDは解答。
  koko_sansu_ex_04_016: {
    kind: 'circle',
    points: [
      { angle: 160, label: 'B' },
      { angle: 340, label: 'D' },
      { angle: 60, label: 'A' },
      { angle: 250, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [2, 3],
      [0, 3],
    ],
    showCenter: true,
    caption: 'BDは直径。∠BAC=35°、∠ABD=25°（∠BDAと∠ACDは解答）',
  },
  // △ABC、∠A=60°・AB=4cm・AC=6cm(与えられた値)。角の二等分線ADによるBD:DCの比は解答。
  koko_sansu_ex_04_017: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 3, y: 5.2, label: 'C' },
    ],
    sideLabels: ['4cm', null, '6cm'],
    caption: '∠A=60°、角の二等分線AD（D上のBD:DCは解答）',
  },
  // △ABC、AB=5・BC=7・CA=8(すべて与えられた値)。cosBは解答。
  koko_sansu_ex_04_018: {
    kind: 'polygon',
    points: [
      { x: 0.71, y: 4.95, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 7, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', '7cm', '8cm'],
  },
  // 直角三角形ABC、∠A=90°・AB=9cm・AC=12cm(与えられた値)。BC上の点DでAD⊥BC。AD・BD・DCは解答。
  koko_sansu_ex_04_024: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 9, y: 0, label: 'B' },
      { x: 0, y: 12, label: 'C' },
    ],
    sideLabels: ['9cm', null, '12cm'],
    rightAngles: [0],
    heights: [{ from: 0, toEdge: [1, 2] }],
  },
  // 座標平面上のA(-2,0)・B(4,0)・C(0,6)(すべて与えられた値)。面積・中点M・中線AMは解答。
  koko_sansu_ex_04_031: {
    kind: 'coordinate',
    xRange: [-4, 6],
    yRange: [-2, 8],
    points: [
      { x: -2, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 0, y: 6, label: 'C' },
    ],
    polygon: [
      { x: -2, y: 0 },
      { x: 4, y: 0 },
      { x: 0, y: 6 },
    ],
  },
  // 半径r=3cmの球(与えられた値)。表面積・体積(共に36π)は解答。
  koko_sansu_ex_04_034: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '3cm' },
  },
  // △ABC、AB=7・BC=5・CA=6(すべて与えられた値)。内接円の接点によるAP・BP・CQは解答。
  koko_sansu_ex_04_037: {
    kind: 'polygon',
    points: [
      { x: 3.8, y: 5.88, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: ['7cm', '5cm', '6cm'],
  },
  // y=x²-2xとy=-x+6(与えられた式)。交点・囲まれた面積は解答。
  koko_sansu_ex_04_041: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 10],
    parabolas: [{ a: 1, b: -2, c: 0 }],
    lines: [{ a: -1, b: 6 }],
  },
  // 正六角形(与えられた値)。対角線の本数・三角形分割数は解答。
  koko_sansu_ex_04_042: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0 },
      { x: 2.5, y: 4.33 },
      { x: -2.5, y: 4.33 },
      { x: -5, y: 0 },
      { x: -2.5, y: -4.33 },
      { x: 2.5, y: -4.33 },
    ],
  },
  // 正三角形ABC(1辺4cm、与えられた値)。点P(重心)の位置とAPの長さは解答なのでPは示さない。
  koko_sansu_ex_04_047: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3.46, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'C' },
    ],
    sideLabels: ['4cm', '4cm', '4cm'],
    equalSides: [[0, 1, 2]],
  },
  // y=x²のグラフ(与えられた式)。接線y=4x+bのbと接点は解答なので直線は描かない。
  koko_sansu_ex_04_049: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-2, 10],
    parabolas: [{ a: 1 }],
  },
  // 放物線y=x²-4x+3(与えられた式)。x軸との交点・範囲・格子点は解答。
  koko_sansu_ex_04_050: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 6],
    parabolas: [{ a: 1, b: -4, c: 3 }],
  },
  // y=x²-4x+7(与えられた式)。頂点・軸は解答。
  koko_sansu_ex_12_004: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [0, 12],
    parabolas: [{ a: 1, b: -4, c: 7 }],
  },
  // y=x²とy=2x+3(与えられた式)。交点は解答。
  koko_sansu_ex_12_006: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 10],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
  },
  // 1辺6cmの立方体(与えられた値)。体対角線は解答。
  koko_sansu_ex_12_010: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm' },
  },
  // 半径r=5cm・弦AB=8cm(すべて与えられた値)。弦の中点MからOまでの距離OMは解答。
  koko_sansu_ex_12_013: {
    kind: 'circle',
    radiusLabel: '5cm',
    points: [
      { angle: 110, label: 'A' },
      { angle: 70, label: 'B' },
    ],
    chords: [[0, 1]],
    showCenter: true,
    caption: '弦AB=8cm（中点MからOまでの距離OMは解答）',
  },
  // 正三角柱、底面1辺4cm・高さ6cm(すべて与えられた値)。体積は解答。
  koko_sansu_ex_12_014: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { width: '4cm', height: '6cm' },
  },
  // y=x²とy=x+6(与えられた式)。囲まれた領域の面積は解答。
  koko_sansu_ex_12_017: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    lines: [{ a: 1, b: 6 }],
  },
  // 座標平面上のA(1,2)・B(4,6)・C(7,2)(すべて与えられた値)。面積は解答。
  koko_sansu_ex_12_022: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [0, 8],
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
  // 放物線y=x²-2x+3、境界x=0とx=4(すべて与えられた値)。台形近似による面積は解答。
  koko_sansu_ex_12_023: {
    kind: 'coordinate',
    xRange: [-0.5, 4.5],
    yRange: [0, 12],
    parabolas: [{ a: 1, b: -2, c: 3 }],
    caption: 'x=0からx=4までの範囲（面積の近似値は解答）',
  },
  // y=x²のグラフ(与えられた式)。点(t,t²)における接線の式は解答（tは一般の値のため点は特定しない）。
  koko_sansu_ex_12_026: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 9],
    parabolas: [{ a: 1 }],
  },
  // 半径3cmの球(与えられた値)。表面積・体積(共に36π)は解答。
  koko_sansu_ex_12_031: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '3cm' },
  },
  // 底面半径r=3cm・母線l=5cm(すべて与えられた値)の円錐。側面積・体積は解答。
  koko_sansu_ex_12_037: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', slant: '5cm' },
  },
  // 平行四辺形、AB=5cm・AD=7cm・∠A=60°(すべて与えられた値)。対角線ACは解答。
  koko_sansu_ex_12_039: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 8.5, y: 6.06, label: 'C' },
      { x: 3.5, y: 6.06, label: 'D' },
    ],
    sideLabels: ['5cm', '7cm', '5cm', '7cm'],
    diagonals: [[0, 2]],
  },
  // 直方体ABCDEFGH、AB=3cm・BC=4cm・BF=5cm(すべて与えられた値)。体対角線AGと底面となす角は解答。
  koko_sansu_ex_12_042: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '3cm', depth: '4cm', height: '5cm' },
  },
  // 座標平面上のA(2,0)・B(0,4)・C(6,3)(すべて与えられた値)。面積は解答。
  koko_sansu_ex_12_044: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 5],
    points: [
      { x: 2, y: 0, label: 'A' },
      { x: 0, y: 4, label: 'B' },
      { x: 6, y: 3, label: 'C' },
    ],
    polygon: [
      { x: 2, y: 0 },
      { x: 0, y: 4 },
      { x: 6, y: 3 },
    ],
  },
  // 一次関数y=2x+3のグラフ(与えられた式)。x=4のときのyは解答。
  koko_kiso_sansu_b_19: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-2, 14],
    lines: [{ a: 2, b: 3 }],
  },
  // 一次関数y=3x-1のグラフ(与えられた式)。傾き・切片・グラフの説明は解答。
  koko_kiso_sansu_b_20: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-4, 10],
    lines: [{ a: 3, b: -1 }],
  },
  // ①y=3x+2②y=x²③y=6/x④y=5(すべて与えられた式)。4つのグラフの形を比較し、一次関数はどれかは解答。
  koko_kiso_sansu_b_23: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-6, 10],
    lines: [
      { a: 3, b: 2, label: '①' },
      { a: 0, b: 5, label: '④' },
    ],
    parabolas: [{ a: 1, label: '②' }],
    hyperbolas: [{ k: 6, label: '③' }],
  },
  // 一次関数y=-x+6、xの変域0≦x≦4(すべて与えられた値)。yの変域は解答。
  koko_kiso_sansu_b_24: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 7],
    lines: [{ a: -1, b: 6 }],
  },
  // 比例y=3x(与えられた式)。x=-2のときのyの値は解答。
  koko_kiso_sansu_b_26: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-8, 8],
    lines: [{ a: 3, b: 0 }],
  },
  // 三角形、底辺8cm・高さ5cm(すべて与えられた値)。面積は解答。
  koko_kiso_sansu_b_27: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 3, y: 5 },
    ],
    sideLabels: ['8cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '5cm' }],
  },
  // 半径6cmの円(与えられた値)。面積・円周は解答。
  koko_kiso_sansu_b_28: {
    kind: 'circle',
    radiusLabel: '6cm',
  },
  // 底面半径3cm・高さ10cmの円柱(すべて与えられた値)。体積は解答。
  koko_kiso_sansu_b_29: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '10cm' },
  },
  // 三角形の2つの角が60°と75°(与えられた値)。残りの角は解答。
  koko_kiso_sansu_b_30: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 6, y: 0 },
      { x: 2, y: 4 },
    ],
    caption: '2つの角が60°と75°（残りの角は解答）',
  },
  // 平行線l∥mに直線nが交わる。l側の角=65°(与えられた値)。m側の同位角は解答。
  koko_kiso_sansu_b_31: {
    kind: 'coordinate',
    xRange: [-3, 6],
    yRange: [-1, 7],
    lines: [
      { a: 0, b: 2, label: 'l' },
      { a: 0, b: 5, label: 'm' },
      { a: 1, b: 0, label: 'n' },
    ],
    caption: 'l∥mに直線nが交わる。l側の角=65°（m側の同位角は解答）',
  },
  // 底面1辺4cmの正方形・高さ9cmの直方体(すべて与えられた値)。体積・表面積は解答。
  koko_kiso_sansu_b_33: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '4cm', height: '9cm' },
  },
  // 正六角形。外角の和・1つの内角・1つの外角は解答（外角の和は常に360°）。
  koko_kiso_sansu_b_34: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0 },
      { x: 2.5, y: 4.33 },
      { x: -2.5, y: 4.33 },
      { x: -5, y: 0 },
      { x: -2.5, y: -4.33 },
      { x: 2.5, y: -4.33 },
    ],
  },
  // 底面半径4cm・母線8cmの円錐(すべて与えられた値)。体積は解答。
  koko_kiso_sansu_b_35: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '4cm', slant: '8cm' },
  },
  // 直角三角形、直角をはさむ2辺が6cmと8cm(すべて与えられた値)。斜辺は解答。
  koko_kiso_sansu_b_36: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 8, label: 'C' },
    ],
    sideLabels: ['6cm', null, '8cm'],
    rightAngles: [0],
  },
  // 比例のグラフ上の与えられた点(3,12)。比例定数とx=7のときのyの値は解答なので直線は描かない。
  koko_kiso_sansu_b_39: {
    kind: 'coordinate',
    xRange: [0, 8],
    yRange: [0, 30],
    points: [{ x: 3, y: 12, label: '(3, 12)' }],
  },
  // 三角形、底辺8cm・高さ5cm(すべて与えられた値)。面積は解答。
  chugaku_sansu_ex_02_008: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 8, y: 0 },
      { x: 3, y: 5 },
    ],
    sideLabels: ['8cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '5cm' }],
  },
  // 台形、上底4cm・下底8cm・高さ5cm(すべて与えられた値)。面積は解答。
  chugaku_sansu_ex_02_010: {
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
  // ひし形の対角線が6cmと8cm(すべて与えられた値)。面積は解答。
  chugaku_sansu_ex_02_015: {
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
    caption: '対角線が6cmと8cm（面積は解答）',
  },
  // 直径10cm(半径5cmに換算、与えられた値)の円。面積・円周は解答。
  chugaku_sansu_ex_02_016: {
    kind: 'circle',
    radiusLabel: '5cm',
    caption: '直径10cm（面積・円周は解答）',
  },
  // 平行四辺形、底辺7cm・高さ4cm(すべて与えられた値)。面積は解答。
  chugaku_sansu_ex_02_019: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 7, y: 0 },
      { x: 9, y: 4 },
      { x: 2, y: 4 },
    ],
    sideLabels: ['7cm', null, null, null],
    heights: [{ from: 3, toEdge: [0, 1], label: '4cm' }],
  },
  // 半径3cmの半円(与えられた値)。面積と周の長さは解答。
  chugaku_sansu_ex_02_031: {
    kind: 'circle',
    radiusLabel: '3cm',
    sector: { from: 0, to: 180 },
    caption: '半円（面積と周の長さは解答）',
  },
  // 底面1辺4cmの正方形・高さ6cmの直方体(すべて与えられた値)。体積・表面積は解答。
  chugaku_sansu_ex_02_032: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '4cm', height: '6cm' },
  },
  // 底面半径3cm・高さ4cmの円柱(すべて与えられた値)。体積・表面積は解答。
  chugaku_sansu_ex_02_033: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '4cm' },
  },
  // 底面半径4cm・高さ3cmの円錐(すべて与えられた値)。体積は解答。
  chugaku_sansu_ex_02_034: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '4cm', height: '3cm' },
  },
  // 底面が3cm×4cmの直角三角形・高さ5cmの三角柱(すべて与えられた値)。体積は解答。
  chugaku_sansu_ex_02_035: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { width: '3cm', depth: '4cm', height: '5cm' },
  },
  // 直角三角形、斜辺13cm・一辺5cm(与えられた値)。もう一辺(12cm)は解答。
  koko_sansu_ex_09_010: {
    kind: 'polygon',
    points: [
      { x: 0, y: 12, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['13cm', '5cm', null],
    rightAngles: [2],
  },
  // 半径3cm・中心角120°(すべて与えられた値)の扇形。弧の長さと面積は解答。
  koko_sansu_ex_09_011: {
    kind: 'circle',
    radiusLabel: '3cm',
    showCenter: true,
    sector: { from: 0, to: 120, label: '120°' },
  },
  // 円周角∠APB=35°(与えられた値)。中心角∠AOBと円周角∠AQBは解答。
  koko_sansu_ex_09_025: {
    kind: 'circle',
    points: [
      { angle: 125, label: 'A' },
      { angle: 55, label: 'B' },
      { angle: 280, label: 'P' },
    ],
    chords: [
      [0, 2],
      [1, 2],
    ],
    showCenter: true,
  },
  // 直角三角形、AB=8cm・BC=6cm・∠B=90°(すべて与えられた値)。斜辺ACと面積、∠Aの角度は解答。
  koko_sansu_ex_09_029: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', '6cm', null],
    rightAngles: [1],
  },
  // y=3x-1とy=-x+7(与えられた式)。交点と三角形の面積は解答。
  koko_sansu_ex_09_030: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-4, 10],
    lines: [
      { a: 3, b: -1 },
      { a: -1, b: 7 },
    ],
  },
  // 円に内接する四角形ABCD、∠A=80°・∠B=110°(与えられた値)。∠Cと∠Dは解答。
  koko_sansu_ex_09_034: {
    kind: 'circle',
    points: [
      { angle: 100, label: 'A' },
      { angle: 190, label: 'B' },
      { angle: 280, label: 'C' },
      { angle: 20, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '∠A=80°、∠B=110°（∠Cと∠Dは解答）',
  },
  // △ABC、A(0,6)・B(-3,0)・C(3,0)(すべて与えられた値)。面積・重心・中線AMは解答。
  koko_sansu_ex_09_040: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-2, 8],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    polygon: [
      { x: 0, y: 6 },
      { x: -3, y: 0 },
      { x: 3, y: 0 },
    ],
  },
  // 直線y=2x+1(与えられた式)と与えられた点P(3,1)。距離は解答。
  koko_sansu_ex_09_044: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-2, 10],
    lines: [{ a: 2, b: 1 }],
    points: [{ x: 3, y: 1, label: 'P(3, 1)' }],
  },
  // 放物線y=x²-2x-3(与えられた式)。B(-1,0)・C(3,0)は問題文中で与えられた点。頂点A・面積・重心は解答。
  koko_sansu_ex_09_050: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-6, 4],
    parabolas: [{ a: 1, b: -2, c: -3 }],
    points: [
      { x: -1, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
  },
  // 直線y=3x-1のグラフ(与えられた式)。点P(a,3a-1)のaの値(距離√10)は解答なので点は示さない。
  koko_oyo_sansu_21: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-6, 8],
    lines: [{ a: 3, b: -1 }],
  },
  // 円Oの外部の点Pからの接線、OA=4cm(半径)・PA=6cm(与えられた値)、∠OAP=90°(接線⊥半径)。POとPBは解答。
  koko_oyo_sansu_29: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 4, y: 0, label: 'A' },
      { x: 4, y: 6, label: 'P' },
    ],
    sideLabels: ['4cm', '6cm', null],
    rightAngles: [1],
  },
  // 半径6cmの球(与えられた値)。中心から3cmの距離で切った断面の面積は解答。
  koko_oyo_sansu_32: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '6cm' },
    caption: '中心から3cmの距離で切断（断面の面積は解答）',
  },
  // 縦5cm・横8cmの厚紙(すべて与えられた値)。四隅から1辺xcmの正方形を切り取り箱を作る。体積V(x)と最大にするxは解答。
  koko_oyo_sansu_42: {
    kind: 'polygon',
    points: [
      { x: 1, y: 0 },
      { x: 7, y: 0 },
      { x: 7, y: 1 },
      { x: 8, y: 1 },
      { x: 8, y: 4 },
      { x: 7, y: 4 },
      { x: 7, y: 5 },
      { x: 1, y: 5 },
      { x: 1, y: 4 },
      { x: 0, y: 4 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    sideLabels: [null, null, null, null, null, null, null, null, null, null, null, null],
    caption: '縦5cm・横8cmの厚紙。四隅から1辺xcmの正方形を切り取る（体積V(x)と最大値のxは解答）',
  },
  // y=2x-3のグラフ(与えられた式)。x=4のときのyは解答。
  term1_2026_koko_sansu_008: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-5, 10],
    lines: [{ a: 2, b: -3 }],
  },
  // y=(1/2)x+3、xの変域-4≦x≦2(すべて与えられた値)。yの変域は解答。
  term1_2026_koko_sansu_027: {
    kind: 'coordinate',
    xRange: [-5, 3],
    yRange: [0, 5],
    lines: [{ a: 0.5, b: 3 }],
  },
  // 直角三角形ABC、A(0,6)・B(0,0)・C(8,0)(すべて与えられた値)。点PはBC上を動く(BP=x)。面積の式とx=6は解答。
  term1_2026_koko_sansu_050: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [-1, 8],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    polygon: [
      { x: 0, y: 6 },
      { x: 0, y: 0 },
      { x: 8, y: 0 },
    ],
  },
  // A社:基本料金1200円・1分20円、B社:基本料金2000円・1分10円(すべて与えられた値)。式yA,yBと等しくなる時間は解答。
  term1_2026_koko_sansu_051: {
    kind: 'coordinate',
    xRange: [0, 120],
    yRange: [0, 4000],
    lines: [
      { a: 20, b: 1200, label: 'A社' },
      { a: 10, b: 2000, label: 'B社' },
    ],
  },
};
