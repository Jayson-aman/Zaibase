import type { Figure } from './figures';

// 算数・数学：図解ギャップ埋め バッチ4（未対応だった幾何・グラフ問題に図を追加）
export const figuresSansuGap4: Record<string, Figure> = {
  // 展開図(4つの正方形が縦一列D,A,E,F、Aの左にB・右にCが飛び出す、すべて与えられた配置)。向かい合う面の組は解答。
  chugaku2026_sansu_063: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['D', 'A', 'E', 'F', 'B', 'C'],
  },
  // 縦8cm・横5cm・高さ3cmの直方体(与えられた値)。表面積は解答。
  chugaku2026_sansu_064: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '8cm', height: '3cm' },
  },
  // 底面の半径4cm・高さ9cmの円柱(与えられた値)。体積は解答。
  chugaku2026_sansu_065: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '9cm' },
  },
  // △ABCの辺AB上にD、辺AC上にE。AD:DB=2:3(与えられた比)、BC=15cm(与えられた値)、DE//BC。DEの長さは解答。
  chugaku2026_sansu_073: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 6],
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
      { x: -1.2, y: 3, label: 'D' },
      { x: 1.2, y: 3, label: 'E' },
    ],
    polygon: [
      { x: 0, y: 5 },
      { x: -3, y: 0 },
      { x: 3, y: 0 },
    ],
    segments: [
      [
        { x: -1.2, y: 3 },
        { x: 1.2, y: 3 },
      ],
    ],
    caption: 'AD:DB=2:3、BC=15cm(与えられた値)、DE//BC。DEの長さは解答。',
  },
  // 底面が直角三角形(3cm・4cm・5cm)、高さ(柱の長さ)10cmの三角柱(与えられた値)。表面積は解答。
  chugaku2026_sansu_074: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { width: '3cm', depth: '4cm', height: '10cm' },
    caption: '底面は直角をはさむ辺が3cm・4cm(斜辺5cm)の直角三角形。',
  },
  // 縦8cm・横6cm・高さ5cmの直方体(与えられた値)。底面の対角線を含み底面に垂直な平面で切る。切り口の面積は解答。
  chugaku2026_sansu_075: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '8cm', height: '5cm' },
    caption: '底面の対角線を含む断面で切ったときの面積は解答。',
  },
  // 底面の半径3cm・高さ4cm・母線5cm(すべて与えられた値)の円錐。体積・表面積は解答。
  chugaku2026_sansu_076: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm', slant: '5cm' },
  },
  // 1辺4cmの正方形ABCD(与えられた値)。Aを中心に90°回転。対角線の反対の頂点Cが動いた道のりは解答。
  chugaku2026_sansu_077: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 4, y: 4, label: 'C' },
      { x: 0, y: 4, label: 'D' },
    ],
    sideLabels: ['4cm', '4cm', '4cm', '4cm'],
    rightAngles: [0, 1, 2, 3],
    caption: 'Aを中心に90°回転させたとき、対角線の反対側の頂点Cが動く弧の半径はACの対角線。',
  },
  // 長方形ABCD、AB=6cm・BC=8cm(与えられた値)。点PはAからAB上を秒速2cmで動く。求める時間は解答。
  chugaku2026_sansu_078: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 6, y: 8, label: 'C' },
      { x: 0, y: 8, label: 'D' },
    ],
    sideLabels: ['6cm', '8cm', '6cm', '8cm'],
    rightAngles: [0, 1, 2, 3],
    caption: '点PはAを出発し辺AB上を秒速2cmでBに向かう。△PBCの面積が△ABCの半分になる時間は解答。',
  },
  // 3方向からの投影図(正面4cm×3cm・真上4cm×2cm・真横2cm×3cm、与えられた値)から直方体の縦・横・高さを決定。体積は解答。
  chugaku2026_sansu_087: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '2cm', height: '3cm' },
    caption: '正面4cm×3cm、真上4cm×2cm、真横2cm×3cmの投影図から縦・横・高さを決定した直方体。',
  },
  // △ABC(面積60cm²、与えられた値)。D・E・Fはそれぞれ辺AB・BC・CAの中点。△DEFの面積等は解答。
  chugaku2026_sansu_089: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-1, 7],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -4, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: -2, y: 3, label: 'D' },
      { x: 0, y: 0, label: 'E' },
      { x: 2, y: 3, label: 'F' },
    ],
    polygon: [
      { x: 0, y: 6 },
      { x: -4, y: 0 },
      { x: 4, y: 0 },
    ],
    segments: [
      [
        { x: -2, y: 3 },
        { x: 0, y: 0 },
      ],
      [
        { x: 0, y: 0 },
        { x: 2, y: 3 },
      ],
      [
        { x: 2, y: 3 },
        { x: -2, y: 3 },
      ],
    ],
    caption: '△ABCの面積は60cm²(与えられた値)。D・E・Fは辺AB・BC・CAの中点。△DEFや△ADF等の面積は解答。',
  },
  // 台形ABCD、AB//CD、AB=4cm・CD=6cm(与えられた値)。対角線の交点O、△AOBの面積8cm²(与えられた値)。他の面積は解答。
  chugaku2026_sansu_090: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-1, 5],
    points: [
      { x: -2, y: 3, label: 'A' },
      { x: 2, y: 3, label: 'B' },
      { x: 3, y: 0, label: 'C' },
      { x: -3, y: 0, label: 'D' },
      { x: 0, y: 1.8, label: 'O' },
    ],
    polygon: [
      { x: -2, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 0 },
      { x: -3, y: 0 },
    ],
    segments: [
      [
        { x: -2, y: 3 },
        { x: 3, y: 0 },
      ],
      [
        { x: 2, y: 3 },
        { x: -3, y: 0 },
      ],
    ],
    caption: 'AB=4cm、CD=6cm(与えられた値)、AB//CD。△AOBの面積=8cm²(与えられた値)。他の面積・台形全体の面積は解答。',
  },
  // 三角錐(体積96cm³、与えられた値)。頂点からの高さの半分の位置で底面に平行に切る。上下の体積は解答。
  chugaku2026_sansu_091: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-3, 6],
    points: [
      { x: 0, y: 4.5, label: 'A' },
      { x: -3.2, y: -1, label: 'B' },
      { x: 3.2, y: -1, label: 'C' },
      { x: 0.3, y: -2.3, label: 'D' },
    ],
    segments: [
      [
        { x: 0, y: 4.5 },
        { x: -3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: -3.2, y: -1 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 3.2, y: -1 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: 0.3, y: -2.3 },
        { x: -3.2, y: -1 },
      ],
      [
        { x: -1.6, y: 1.75 },
        { x: 1.6, y: 1.75 },
      ],
      [
        { x: 1.6, y: 1.75 },
        { x: 0.15, y: 1.1 },
      ],
      [
        { x: 0.15, y: 1.1 },
        { x: -1.6, y: 1.75 },
      ],
    ],
    caption: '三角錐(体積96cm³、与えられた値)。頂点Aから底面BCDまでの高さの半分の位置で底面に平行に切る。上下の立体の体積は解答。',
  },
  // 1辺4cmの立方体(与えられた値)。表面を歩く最短の道のり(アリの問題)は解答。
  chugaku2026_sansu_092: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
    caption: '表面上を最短で歩く道のりは解答。',
  },
  // 1辺6cmの正方形(与えられた値)が直線上を頂点を中心に90°ずつ回転しながら転がる。頂点Aの動いた道のりは解答。
  chugaku2026_sansu_094: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 6, y: 6, label: 'C' },
      { x: 0, y: 6, label: 'D' },
    ],
    sideLabels: ['6cm', '6cm', '6cm', '6cm'],
    rightAngles: [0, 1, 2, 3],
    caption: 'この正方形が直線上を頂点を中心に90°ずつ回転しながら転がる。頂点Aが動く弧の長さの合計は解答。',
  },
  // 長方形ABCD、AB=16cm・BC=6cm(与えられた値)。PはAB上を秒速2cmで、QはBC上を秒速1cmで動く。面積は解答。
  chugaku2026_sansu_095: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 16, y: 0, label: 'B' },
      { x: 16, y: 6, label: 'C' },
      { x: 0, y: 6, label: 'D' },
    ],
    sideLabels: ['16cm', '6cm', '16cm', '6cm'],
    rightAngles: [0, 1, 2, 3],
    caption: 'PはAからAB上を秒速2cmでBへ、QはBからBC上を秒速1cmでCへ同時に出発する。△PBQの面積は解答。',
  },
  // 1辺6cmの立方体(与えられた値)。空間対角線に垂直で各辺の中点を通る平面で切る。切り口(正六角形)の面積は解答。
  chugaku2026_sansu_096: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '空間対角線に垂直で6辺の中点を通る平面で切ると正六角形の切り口ができる。その面積は解答。',
  },
  // 底面の半径6cm・高さ10cmの円柱(与えられた値)から、同じ底面・高さの円錐をくり抜く。残りの体積は解答。
  chugaku2026_sansu_108: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '6cm', height: '10cm' },
    caption: '上面から底面と同じ半径・高さの円錐の形にくり抜く。残った立体の体積は解答。',
  },
  // 正四面体(1辺6cm、体積72cm³、与えられた値)。高さの半分の位置で底面に平行に切る。上下の体積は解答。
  chugaku2026_sansu_109: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-3, 6],
    points: [
      { x: 0, y: 4.5, label: 'A' },
      { x: -3.2, y: -1, label: 'B' },
      { x: 3.2, y: -1, label: 'C' },
      { x: 0.3, y: -2.3, label: 'D' },
    ],
    segments: [
      [
        { x: 0, y: 4.5 },
        { x: -3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: -3.2, y: -1 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 3.2, y: -1 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: 0.3, y: -2.3 },
        { x: -3.2, y: -1 },
      ],
      [
        { x: -1.6, y: 1.75 },
        { x: 1.6, y: 1.75 },
      ],
      [
        { x: 1.6, y: 1.75 },
        { x: 0.15, y: 1.1 },
      ],
      [
        { x: 0.15, y: 1.1 },
        { x: -1.6, y: 1.75 },
      ],
    ],
    caption: '正四面体(1辺6cm、体積72cm³、与えられた値)。高さの半分の位置で底面に平行に切る。上下の立体の体積は解答。',
  },
  // △ABC(面積54cm²、与えられた値)、重心G。中線AD(D=BCの中点)の長さAD=15cm(与えられた値)。GBC面積・比・長さは解答。
  chugaku2026_sansu_113: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-1, 7],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -4, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
      { x: 0, y: 2, label: 'G' },
    ],
    polygon: [
      { x: 0, y: 6 },
      { x: -4, y: 0 },
      { x: 4, y: 0 },
    ],
    segments: [
      [
        { x: 0, y: 6 },
        { x: 0, y: 0 },
      ],
    ],
    caption: '△ABCの面積は54cm²(与えられた値)。GはA-D(BCの中点)を結ぶ中線上の重心。AD=15cm(与えられた値)。△GBCの面積・AG:GD・AG・GDの長さは解答。',
  },
  // 1辺6cmの立方体(与えられた値)。1頂点の3つ隣接頂点を通る平面で角を切り落とす。切り取る三角錐の体積・切り口面積は解答。
  chugaku2026_sansu_114: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '1つの頂点から出る3辺の隣接頂点を通る平面で、その頂点を含む三角錐を切り落とす。体積・切り口の面積は解答。',
  },
  // 底面の半径9cm・高さ12cmの円錐(与えられた値)。頂点から4cmの高さで底面に平行に切る。下部(円錐台)の体積は解答。
  chugaku2026_sansu_120: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '9cm', height: '12cm' },
    caption: '頂点から4cm(与えられた値)の高さの位置で底面に平行な平面で切る。下部の円錐台の体積は解答。',
  },
  // △ABCの辺AB上にD、辺AC上にE。AD=4cm・DB=6cm・DE=8cm(すべて与えられた値)、DE//BC。相似比・BCの長さは解答。
  koko_kanto2026_sansu_003: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-3, 6],
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: -5, y: -2, label: 'B' },
      { x: 5, y: -2, label: 'C' },
      { x: -2, y: 2.2, label: 'D' },
      { x: 2, y: 2.2, label: 'E' },
    ],
    polygon: [
      { x: 0, y: 5 },
      { x: -5, y: -2 },
      { x: 5, y: -2 },
    ],
    segments: [
      [
        { x: -2, y: 2.2 },
        { x: 2, y: 2.2 },
      ],
    ],
    caption: 'AD=4cm、DB=6cm、DE=8cm(すべて与えられた値)、DE//BC。△ADEと△ABCの相似比、BCの長さは解答。',
  },
  // 底面の半径3cm・高さ8cmの円柱(与えられた値)。体積・表面積は解答。
  koko_kanto2026_sansu_004: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '8cm' },
  },
  // 放物線y=(1/2)x²と直線y=x+4(与えられた式)。交点A・Bの座標・△OABの面積・ABの長さは解答。
  koko_kanto2026_sansu_006: {
    kind: 'coordinate',
    xRange: [-4, 6],
    yRange: [-2, 10],
    parabolas: [{ a: 0.5 }],
    lines: [{ a: 1, b: 4 }],
  },
  // 台形ABCD、AD//BC、AD=6cm・BC=9cm(与えられた値)。対角線の交点P。AP:PC・QRの長さは解答。
  koko_kanto2026_sansu_007: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-1, 5],
    points: [
      { x: -3, y: 4, label: 'A' },
      { x: 3, y: 4, label: 'D' },
      { x: -4.5, y: 0, label: 'B' },
      { x: 4.5, y: 0, label: 'C' },
    ],
    segments: [
      [
        { x: -3, y: 4 },
        { x: 4.5, y: 0 },
      ],
      [
        { x: 3, y: 4 },
        { x: -4.5, y: 0 },
      ],
    ],
    caption: 'AD=6cm、BC=9cm(与えられた値)、AD//BC。対角線の交点P。AP:PC、Pを通りBCに平行な直線とAB・DCの交点Q・Rを結ぶQRの長さは解答。',
  },
  // 直角三角形ABC(∠C=90°)、AC=9cm・BC=12cm(与えられた値)。斜辺ABへの垂線CH。AB・CH・AHは解答。
  koko_kanto2026_sansu_008: {
    kind: 'polygon',
    points: [
      { x: 9, y: 0, label: 'A' },
      { x: 0, y: 12, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: [null, '12cm', '9cm'],
    rightAngles: [2],
    heights: [{ from: 2, toEdge: [0, 1] }],
    caption: 'Cから斜辺ABに下ろした垂線の足がH。AB・CH・AHはすべて解答。',
  },
  // 円Oに内接する四角形ABCD、∠A=95°・∠B=80°(与えられた値)。∠C・∠Dは解答。
  koko_kanto2026_sansu_009: {
    kind: 'circle',
    points: [
      { angle: 135, label: 'A' },
      { angle: 45, label: 'B' },
      { angle: 315, label: 'C' },
      { angle: 225, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '∠A=95°、∠B=80°(与えられた値)。∠C・∠Dは解答。',
  },
  // 正四角錐、底面は1辺6cmの正方形・側面はすべて1辺6cmの正三角形(与えられた値)。高さ・体積は解答。
  koko_kanto2026_sansu_010: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-2, 6],
    segments: [
      [
        { x: -3, y: -1 },
        { x: 3, y: -1 },
      ],
      [
        { x: 3, y: -1 },
        { x: 4, y: 1.2 },
      ],
      [
        { x: 4, y: 1.2 },
        { x: -2, y: 1.2 },
      ],
      [
        { x: -2, y: 1.2 },
        { x: -3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: -3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: 3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: 4, y: 1.2 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: -2, y: 1.2 },
      ],
    ],
    caption: '底面は1辺6cmの正方形、側面はすべて1辺6cmの正三角形(与えられた値、側面の辺=底面の辺)。高さ・体積は解答。',
  },
  // △ABCの辺AB上にD、辺ACの一部にE。∠ADE=∠ACB、AD=6cm・AC=9cm・AE=4cm(与えられた値)。ABの長さ・DE:BCは解答。
  koko_kanto2026_sansu_014: {
    kind: 'coordinate',
    xRange: [-8, 8],
    yRange: [-3, 7],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: -6, y: -2, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: -3, y: 2, label: 'D' },
      { x: 2.67, y: 2.67, label: 'E' },
    ],
    segments: [
      [
        { x: 0, y: 6 },
        { x: -6, y: -2 },
      ],
      [
        { x: 0, y: 6 },
        { x: 6, y: 0 },
      ],
      [
        { x: -6, y: -2 },
        { x: 6, y: 0 },
      ],
      [
        { x: -3, y: 2 },
        { x: 2.67, y: 2.67 },
      ],
    ],
    caption: 'AD=6cm、AC=9cm、AE=4cm(与えられた値)。∠ADE=∠ACBより2角相等(∠A共通)で△ADE∽△ACB。ABの長さ、DE:BCの比は解答。',
  },
  // 放物線y=x²上の点A(-2, 4)・B(3, 9)(与えられた点)。△PABの面積が最大となる点P・その面積は解答。
  koko_kanto2026_sansu_015: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    points: [
      { x: -2, y: 4, label: 'A(-2, 4)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
    ],
    segments: [
      [
        { x: -2, y: 4 },
        { x: 3, y: 9 },
      ],
    ],
  },
  // 円O(半径5cm、与えられた値)、外部の点Aからの接線の長さ12cm(与えられた値)、接点T。直角三角形OTAとして図示。OAの長さ・四角形OTASの面積は解答。
  koko_kanto2026_sansu_016: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 5, y: 0, label: 'T' },
      { x: 5, y: 12, label: 'A' },
    ],
    sideLabels: ['5cm', '12cm', null],
    rightAngles: [1],
    caption: '接点Tでは半径OT⊥接線TA。OT=5cm(半径)、TA=12cm(接線の長さ、与えられた値)。OAの長さは解答。',
  },
  // 正四面体ABCD(1辺6cm、与えられた値)。P・Q・Rはそれぞれ辺AB・AC・ADの中点。△PQRの面積・体積比は解答。
  koko_kanto2026_sansu_017: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-3, 6],
    points: [
      { x: 0, y: 4.5, label: 'A' },
      { x: -3.2, y: -1, label: 'B' },
      { x: 3.2, y: -1, label: 'C' },
      { x: 0.3, y: -2.3, label: 'D' },
      { x: -1.6, y: 1.75, label: 'P' },
      { x: 1.6, y: 1.75, label: 'Q' },
      { x: 0.15, y: 1.1, label: 'R' },
    ],
    segments: [
      [
        { x: 0, y: 4.5 },
        { x: -3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: -3.2, y: -1 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 3.2, y: -1 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: 0.3, y: -2.3 },
        { x: -3.2, y: -1 },
      ],
      [
        { x: -1.6, y: 1.75 },
        { x: 1.6, y: 1.75 },
      ],
      [
        { x: 1.6, y: 1.75 },
        { x: 0.15, y: 1.1 },
      ],
      [
        { x: 0.15, y: 1.1 },
        { x: -1.6, y: 1.75 },
      ],
    ],
    caption: '正四面体ABCD(1辺6cm、与えられた値)。P・Q・Rはそれぞれ辺AB・AC・ADの中点。△PQRの面積、体積比は解答。',
  },
  // 円内部の点Pで弦AB・CDが交わる。AP=4cm・PB=9cm・CP=6cm・∠APC=70°(すべて与えられた値)。PD・∠BPDは解答。
  koko_kanto2026_sansu_020: {
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
    caption: 'AP=4cm、PB=9cm、CP=6cm、∠APC=70°(すべて与えられた値)。PDの長さ、∠BPDは解答。',
  },
  // 直角三角形ABC(∠C=90°、AC=3cm・BC=4cm、与えられた値)。ACを軸・BCを軸それぞれで回転させた体積は解答。
  koko_kanto2026_sansu_021: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'C' },
      { x: 3, y: 0, label: 'A' },
      { x: 0, y: 4, label: 'B' },
    ],
    sideLabels: ['3cm', null, '4cm'],
    rightAngles: [0],
    caption: 'ACを軸として1回転、BCを軸として1回転させたときのそれぞれの体積は解答。',
  },
  // 放物線y=(1/2)x²と直線y=2x+6(与えられた式)。交点A・Bの座標・△OABの面積・中点の座標は解答。
  koko_kanto2026_sansu_023: {
    kind: 'coordinate',
    xRange: [-4, 8],
    yRange: [-2, 20],
    parabolas: [{ a: 0.5 }],
    lines: [{ a: 2, b: 6 }],
  },
  // 直方体ABCD-EFGH、AB=6cm・AD=8cm・AE=10cm(与えられた値)。対角線AG・表面上の最短経路は解答。
  koko_kanto2026_sansu_025: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '8cm', height: '10cm' },
    caption: '対角線AGの長さ、面ABCDと面BCGFを開いて求める辺BC経由の最短経路は解答。',
  },
  // 円Oに内接する△TAB、TA=TB(二等辺三角形)。点Tでの接線ℓ上の点Cで∠BTC=65°(与えられた値)。∠TAB・∠TBA・∠ATBは解答。
  koko_kanto2026_sansu_026: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'T' },
      { x: -4, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
    ],
    equalSides: [[0, 2]],
    caption: 'TA=TB(与えられた条件)。点Tにおける円の接線ℓ上の点C(Aと反対側)で∠BTC=65°(与えられた値)。∠TAB・∠TBA・∠ATBは解答。',
  },
  // 底面が直角三角形(∠A=90°、AB=6cm・AC=8cm)、高さAD=12cm(すべて与えられた値)の三角柱ABC-DEF。体積・切断後の体積比は解答。
  koko_kanto2026_sansu_027: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { height: '12cm' },
    caption: '底面は∠A=90°、AB=6cm、AC=8cmの直角三角形。三角柱の体積、B・C・Dを通る平面で切った四面体ABCDの体積・比は解答。',
  },
  // 放物線y=(1/3)x²上の点A(-3, 3)・B(6, 12)(与えられた点)。点C・△ABCの面積・直線ABの式は解答。
  koko_kanto2026_sansu_029: {
    kind: 'coordinate',
    xRange: [-5, 8],
    yRange: [-2, 14],
    parabolas: [{ a: 0.3333 }],
    points: [
      { x: -3, y: 3, label: 'A(-3, 3)' },
      { x: 6, y: 12, label: 'B(6, 12)' },
    ],
  },
  // 底面が1辺6cmの正方形で高さ3cmの直方体(与えられた値)が球に内接する。対角線・球の半径・体積は解答。
  koko_kanto2026_sansu_032: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '6cm', height: '3cm' },
    caption: 'この直方体はすべての頂点が1つの球面上にある(空間対角線=球の直径)。対角線・球の半径・体積は解答。',
  },
  // 2直線y=3x-1、y=-x+7(与えられた式)。交点の座標は解答。
  koko_nyushi_sansu_19: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-3, 8],
    lines: [
      { a: 3, b: -1 },
      { a: -1, b: 7 },
    ],
  },
  // 一次関数y=-2x+5(与えられた式)。yの変域-3≤y≤5(与えられた範囲)。xの変域は解答。
  koko_nyushi_sansu_21: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-4, 10],
    lines: [{ a: -2, b: 5 }],
  },
  // 点A(0, 6)・B(4, 0)(与えられた点)。この2点を結ぶ直線の式は解答。
  koko_nyushi_sansu_22: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-1, 8],
    points: [
      { x: 0, y: 6, label: 'A(0, 6)' },
      { x: 4, y: 0, label: 'B(4, 0)' },
    ],
    segments: [
      [
        { x: 0, y: 6 },
        { x: 4, y: 0 },
      ],
    ],
  },
  // 平行四辺形ABCD、∠A=70°(与えられた値)。向かい合う角・隣り合う角の関係を図示。∠B・∠C・∠Dは解答。
  koko_nyushi_sansu_25: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: 'A' },
      { x: 4, y: 3, label: 'B' },
      { x: 5, y: 0, label: 'C' },
      { x: 1, y: 0, label: 'D' },
    ],
    equalAngles: [
      [0, 2],
      [1, 3],
    ],
    caption: '∠A=70°(与えられた値)。∠B・∠C・∠Dは解答。',
  },
  // 半径6cmの円(与えられた値)。面積・円周は解答。
  koko_nyushi_sansu_26: {
    kind: 'circle',
    radiusLabel: '6cm',
  },
  // 底辺8cm・高さ5cmの三角形(与えられた値)。面積、および面積を2倍にする高さは解答。
  koko_nyushi_sansu_28: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: -4, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
    ],
    sideLabels: [null, '8cm', null],
    heights: [{ from: 0, toEdge: [1, 2], label: '5cm' }],
    caption: '面積、および底辺を変えず面積を2倍にする高さは解答。',
  },
  // 半径4cm・中心角90°の扇形(与えられた値)。面積・弧の長さは解答。
  koko_nyushi_sansu_30: {
    kind: 'circle',
    radiusLabel: '4cm',
    sector: { from: 0, to: 90 },
    caption: '面積・弧の長さは解答。',
  },
  // 直角をはさむ2辺が3cm・4cm(与えられた値)の直角三角形。斜辺の長さは解答。
  koko_nyushi_sansu_32: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 0, y: 4, label: 'C' },
    ],
    sideLabels: ['3cm', null, '4cm'],
    rightAngles: [0],
  },
  // 斜辺13cm・一辺5cm(与えられた値)の直角三角形。もう一辺の長さは解答。
  koko_nyushi_sansu_33: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'A' },
      { x: 0, y: 12, label: 'C' },
    ],
    sideLabels: ['5cm', '13cm', null],
    rightAngles: [0],
  },
  // 点A(1, 2)・B(5, 5)(与えられた点)。2点間の距離は解答。
  koko_nyushi_sansu_35: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 6],
    points: [
      { x: 1, y: 2, label: 'A(1, 2)' },
      { x: 5, y: 5, label: 'B(5, 5)' },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 5, y: 5 },
      ],
    ],
  },
  // 底辺10cm・等しい2辺が13cm(すべて与えられた値)の二等辺三角形。高さ・面積は解答。
  koko_nyushi_sansu_36: {
    kind: 'polygon',
    points: [
      { x: 0, y: 12, label: 'A' },
      { x: -5, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: ['13cm', '10cm', '13cm'],
    equalSides: [[0, 2]],
    heights: [{ from: 0, toEdge: [1, 2] }],
  },
  // 1辺4cmの立方体(与えられた値)。体積・表面積は解答。
  koko_nyushi_sansu_37: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
  },
  // 半径3cmの球(与えられた値)。体積・表面積は解答。
  koko_nyushi_sansu_38: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '3cm' },
  },
  // 底面の半径3cm・高さ4cmの円錐(与えられた値)。体積は解答。
  koko_nyushi_sansu_39: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm' },
  },
  // 正四角錐、底面は1辺6cmの正方形、高さ4cm(与えられた値)。体積は解答。
  koko_nyushi_sansu_40: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-2, 6],
    segments: [
      [
        { x: -3, y: -1 },
        { x: 3, y: -1 },
      ],
      [
        { x: 3, y: -1 },
        { x: 4, y: 1.2 },
      ],
      [
        { x: 4, y: 1.2 },
        { x: -2, y: 1.2 },
      ],
      [
        { x: -2, y: 1.2 },
        { x: -3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: -3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: 3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: 4, y: 1.2 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: -2, y: 1.2 },
      ],
    ],
    caption: '底面は1辺6cmの正方形、高さ4cm(与えられた値)。体積は解答。',
  },
  // 底面の半径4cm・高さ9cmの円柱(与えられた値)。体積・側面積は解答。
  koko_nyushi_sansu_41: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '9cm' },
  },
  // 台形ABCD、AB//CD、AB=12cm・CD=8cm・高さ6cm(与えられた値)。対角線の交点P、△APBの面積は解答。
  oyo_sansu_034: {
    kind: 'coordinate',
    xRange: [-8, 8],
    yRange: [-1, 8],
    points: [
      { x: -6, y: 6, label: 'A' },
      { x: 6, y: 6, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: -4, y: 0, label: 'D' },
      { x: 0, y: 2.4, label: 'P' },
    ],
    segments: [
      [
        { x: -6, y: 6 },
        { x: 4, y: 0 },
      ],
      [
        { x: 6, y: 6 },
        { x: -4, y: 0 },
      ],
    ],
    caption: 'AB=12cm、CD=8cm(与えられた値)、高さ6cm、AB//CD。対角線の交点P。△APBの面積は解答。',
  },
  // 正方形ABCD(1辺9cm、与えられた値)、BE=3cm・CF=3cm(与えられた値)。△AEFの面積は解答。
  oyo_sansu_035: {
    kind: 'coordinate',
    xRange: [-1, 10],
    yRange: [-1, 10],
    points: [
      { x: 0, y: 9, label: 'A' },
      { x: 9, y: 9, label: 'B' },
      { x: 9, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
      { x: 9, y: 6, label: 'E' },
      { x: 6, y: 0, label: 'F' },
    ],
    polygon: [
      { x: 0, y: 9 },
      { x: 9, y: 9 },
      { x: 9, y: 0 },
      { x: 0, y: 0 },
    ],
    segments: [
      [
        { x: 0, y: 9 },
        { x: 9, y: 6 },
      ],
      [
        { x: 9, y: 6 },
        { x: 6, y: 0 },
      ],
      [
        { x: 6, y: 0 },
        { x: 0, y: 9 },
      ],
    ],
    caption: '正方形ABCD(1辺9cm、与えられた値)。BE=3cm、CF=3cm(与えられた値)。△AEFの面積は解答。',
  },
  // 直角三角形ABC、AB=5cm・BC=12cm・CA=13cm(すべて与えられた値)。Bから斜辺CAへの垂線の足H。AHは解答。
  oyo_sansu_036: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 0, y: 12, label: 'C' },
    ],
    sideLabels: ['5cm', '12cm', '13cm'],
    rightAngles: [1],
    heights: [{ from: 1, toEdge: [2, 0] }],
    caption: 'Bから斜辺CAへの垂線の足がH。AHの長さは解答。',
  },
  // 1辺6cmの立方体ABCD-EFGH(与えられた値)。頂点A・F・Cを通る平面で切る。切断面(正三角形)の面積は解答。
  oyo_sansu_047: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '頂点A・F・Cの3点を通る平面で切ると正三角形の切り口ができる。その面積は解答。',
  },
  // 底面半径4cm・高さ9cm(与えられた値)の円錐。体積・表面積は解答。
  oyo_sansu_048: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '4cm', height: '9cm' },
  },
  // 正四面体(1辺6cm、与えられた値)。体積は解答。
  oyo_sansu_049: {
    kind: 'coordinate',
    xRange: [-5, 5],
    yRange: [-3, 6],
    segments: [
      [
        { x: 0, y: 4.5 },
        { x: -3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 0, y: 4.5 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: -3.2, y: -1 },
        { x: 3.2, y: -1 },
      ],
      [
        { x: 3.2, y: -1 },
        { x: 0.3, y: -2.3 },
      ],
      [
        { x: 0.3, y: -2.3 },
        { x: -3.2, y: -1 },
      ],
    ],
    caption: '正四面体(1辺6cm、与えられた値)。体積は解答。',
  },
  // 縦4cm・横5cm・高さ3cm(与えられた値)の直方体。底面の対角線を含む断面の面積は解答。
  oyo_sansu_050: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '4cm', height: '3cm' },
    caption: '底面の対角線を含み縦・横の辺を含む断面の面積は解答。',
  },
  // 半径3cm・高さ8cm(与えられた値)の円柱。同じ底面・高さの内接する最大の円錐の体積は解答。
  oyo_sansu_051: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '8cm' },
    caption: 'この円柱に内接する最大の円錐(底面半径・高さは円柱と同じ)の体積は解答。',
  },
  // 半径6cmの球(与えられた値)。表面積・体積は解答。
  oyo_sansu_053: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '6cm' },
  },
  // 縦4cm・横5cm・高さ3cm(与えられた値)の直方体。体対角線の長さは解答。
  oyo_sansu_054: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '4cm', height: '3cm' },
    caption: '体対角線(最も長い対角線)の長さは解答。',
  },
  // 円錐台(上底の半径2cm・下底の半径5cm・高さ6cm、与えられた値)を側面から見た断面(台形)。体積は解答。
  oyo_sansu_055: {
    kind: 'polygon',
    points: [
      { x: -2, y: 6 },
      { x: 2, y: 6 },
      { x: 5, y: 0 },
      { x: -5, y: 0 },
    ],
    caption: '円錐台:上底の半径2cm、下底の半径5cm、高さ6cm(すべて与えられた値)を側面から見た断面図。体積は解答。',
  },
  // 底面が正六角形(1辺3cm、与えられた値)、高さ8cmの正六角柱。体積は解答。
  oyo_sansu_056: {
    kind: 'polygon',
    points: [
      { x: 3, y: 0 },
      { x: 1.5, y: 2.6 },
      { x: -1.5, y: 2.6 },
      { x: -3, y: 0 },
      { x: -1.5, y: -2.6 },
      { x: 1.5, y: -2.6 },
    ],
    sideLabels: ['3cm', '3cm', '3cm', '3cm', '3cm', '3cm'],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    caption: 'この正六角形を底面とする正六角柱の高さは8cm(与えられた値)。体積は解答。',
  },
  // 正六角形の6頂点A~F。3点を選んでできる直角三角形になる確率は解答。
  oyo_sansu_061: {
    kind: 'polygon',
    points: [
      { x: 3, y: 0, label: 'A' },
      { x: 1.5, y: 2.6, label: 'B' },
      { x: -1.5, y: 2.6, label: 'C' },
      { x: -3, y: 0, label: 'D' },
      { x: -1.5, y: -2.6, label: 'E' },
      { x: 1.5, y: -2.6, label: 'F' },
    ],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    caption: '正六角形の6頂点から3点を選んで三角形を作る。直角三角形になる確率(外接円の直径を斜辺とする場合)は解答。',
  },
  // 縦4列・横4列(計16個)の格子点(与えられた配置)。3点を選んで三角形ができる組み合わせは解答。
  oyo_sansu_065: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 3],
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 0, y: 3 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
    ],
    caption: '4×4の格子点(計16個)から3点を選んで三角形ができる組み合わせの数は解答。',
  },
  // 底辺10cm・高さ8cm(すべて与えられた値)の二等辺三角形。等辺の長さ・面積は解答。
  koko_sansu_ex_10_008: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: -5, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: [null, '10cm', null],
    equalSides: [[0, 2]],
    heights: [{ from: 0, toEdge: [1, 2], label: '8cm' }],
  },
  // 直線y=2x-1(与えられた式)と点(3, 7)(与えられた点)。この点を通り平行な直線の式・距離は解答。
  koko_sansu_ex_10_010: {
    kind: 'coordinate',
    xRange: [-2, 6],
    yRange: [-5, 10],
    lines: [{ a: 2, b: -1 }],
    points: [{ x: 3, y: 7, label: '(3, 7)' }],
  },
  // △ABCの外接円、∠BAC=60°・外接円の半径R=5(与えられた値)。BCの長さは解答。
  koko_sansu_ex_10_020: {
    kind: 'circle',
    points: [
      { angle: 270, label: 'A' },
      { angle: 150, label: 'B' },
      { angle: 30, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    showCenter: true,
    radiusLabel: '5',
    caption: '∠BAC=60°、外接円の半径R=5(与えられた値)。BCの長さは解答。',
  },
  // 円x²+y²=25(半径5、与えられた値)上の点(3, -4)(与えられた点)。この点での接線の式は解答。
  koko_sansu_ex_10_022: {
    kind: 'circle',
    points: [{ angle: 306.87, label: '(3, -4)' }],
    radiusLabel: '5',
    caption: 'この点における接線の式は解答。',
  },
  // 放物線y=x²(与えられた式)。直線y=mx+2は常に点(0, 2)を通る。接するmの値・接点は解答。
  koko_sansu_ex_10_026: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    points: [{ x: 0, y: 2, label: '(0, 2)' }],
    caption: '直線y=mx+2は常に点(0, 2)を通る。放物線に接するmの値・接点の座標は解答。',
  },
  // 円x²+y²=4(半径2、与えられた値)上を動く点P。Q=(Pのx座標+2, Pのy座標-1)の軌跡(新しい円)は解答。
  koko_sansu_ex_10_030: {
    kind: 'circle',
    radiusLabel: '2',
    caption: '点Pが動く円(原点中心・半径2)。点Q=(Pのx座標+2, Pのy座標-1)の軌跡は解答。',
  },
  // 直角三角形ABC(∠C=90°)、AC=3cm・BC=4cm(与えられた値)。斜辺ABへの垂線の足H。AH・HB・CHはすべて解答。
  koko_sansu_ex_10_035: {
    kind: 'polygon',
    points: [
      { x: 3, y: 0, label: 'A' },
      { x: 0, y: 4, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: [null, '4cm', '3cm'],
    rightAngles: [2],
    heights: [{ from: 2, toEdge: [0, 1] }],
  },
  // 4点A(0, 0)・B(4, 0)・C(3, 3)・D(1, 3)(すべて与えられた値)。平行四辺形かの確認・対角線の交点・面積は解答。
  koko_sansu_ex_10_047: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 4],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 3, y: 3, label: 'C' },
      { x: 1, y: 3, label: 'D' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 3, y: 3 },
      { x: 1, y: 3 },
    ],
  },
  // 半径(内接円の半径)1の円に外接する正六角形(n=6の場合、与えられた値)。面積・一般公式の具体値は解答。
  koko_sansu_ex_10_049: {
    kind: 'polygon',
    points: [
      { x: 3, y: 0 },
      { x: 1.5, y: 2.6 },
      { x: -1.5, y: 2.6 },
      { x: -3, y: 0 },
      { x: -1.5, y: -2.6 },
      { x: 1.5, y: -2.6 },
    ],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    caption: '半径(内接円の半径)1の円に外接する正六角形(n=6、与えられた値)。面積は解答。',
  },
  // 底辺14cm・高さ9cm(与えられた値)の三角形。面積は解答。
  sansu_gp_10: {
    kind: 'polygon',
    points: [
      { x: 0, y: 9, label: 'A' },
      { x: -7, y: 0, label: 'B' },
      { x: 7, y: 0, label: 'C' },
    ],
    sideLabels: [null, '14cm', null],
    heights: [{ from: 0, toEdge: [1, 2], label: '9cm' }],
  },
  // 半径6cmの円(与えられた値)から同じ中心の半径3cmの円を取り除いた図形(ドーナツ型)。面積は解答。
  sansu_gp_23: {
    kind: 'circle',
    radiusLabel: '6cm',
    caption: '同じ中心の半径3cmの円を取り除いた図形(ドーナツ型、与えられた値)。面積は解答。',
  },
  // 面積が一定(48cm²)の長方形、縦×横=48(反比例の関係、与えられた値)。x=6のときのy・比例/反比例の判定は解答。
  sansu_gp_27: {
    kind: 'coordinate',
    xRange: [1, 12],
    yRange: [1, 50],
    hyperbolas: [{ k: 48 }],
  },
  // 縦3列・横4列(計12個、与えられた配置)の格子点。3点を選んで三角形ができる組み合わせは解答。
  sansu_gp_31: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 2],
    points: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
    ],
  },
  // 正四角錐、底面は1辺6cmの正方形、高さ8cm(与えられた値)。体積は解答。
  sansu_gp_42: {
    kind: 'coordinate',
    xRange: [-4, 5],
    yRange: [-2, 6],
    segments: [
      [
        { x: -3, y: -1 },
        { x: 3, y: -1 },
      ],
      [
        { x: 3, y: -1 },
        { x: 4, y: 1.2 },
      ],
      [
        { x: 4, y: 1.2 },
        { x: -2, y: 1.2 },
      ],
      [
        { x: -2, y: 1.2 },
        { x: -3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: -3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: 3, y: -1 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: 4, y: 1.2 },
      ],
      [
        { x: 0.5, y: 4.5 },
        { x: -2, y: 1.2 },
      ],
    ],
    caption: '底面は1辺6cmの正方形、高さ8cm(与えられた値)。体積は解答。',
  },
  // 半径5cm・高さ12cm(与えられた値)の円柱。同じ底面・高さの円錐との体積比・円錐の体積は解答。
  sansu_gp_43: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '5cm', height: '12cm' },
    caption: '底面の半径5cm・高さ12cmの円柱。同じ底面・高さの円錐と体積を比べる（比は解答）。',
  },
  // 半径2cmの円(与えられた値)が1辺8cmの正方形(与えられた値)の外周を外側から1周する。円の中心が描く線の長さは解答。
  sansu_gp_44: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 8, y: 8, label: 'C' },
      { x: 0, y: 8, label: 'D' },
    ],
    sideLabels: ['8cm', '8cm', '8cm', '8cm'],
    rightAngles: [0, 1, 2, 3],
    caption: '半径2cm(与えられた値)の円がこの正方形の外周に沿って外側を1周する。円の中心が描く線の長さは解答。',
  },
  // 直角三角形(直角を挟む2辺が3cm・4cm、与えられた値)を4cmの辺を軸に1回転させると、半径3cm・高さ4cmの円錐になる。体積は解答。
  sansu_gp_45: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm' },
    caption: '直角を挟む2辺が3cm・4cmの直角三角形を、4cmの辺を軸として1回転させてできる円錐。体積は解答。',
  },
  // 円周上に等間隔に12個の点(与えられた配置)。直径を斜辺とする直角三角形の個数は解答。
  sansu_gp_49: {
    kind: 'circle',
    points: [
      { angle: 0 },
      { angle: 30 },
      { angle: 60 },
      { angle: 90 },
      { angle: 120 },
      { angle: 150 },
      { angle: 180 },
      { angle: 210 },
      { angle: 240 },
      { angle: 270 },
      { angle: 300 },
      { angle: 330 },
    ],
    caption: '円周上に等間隔に12個の点。直径を斜辺とする直角三角形の個数は解答。',
  },
  // 一次関数y=2x+3(与えられた式)。xの変域-1≤x≤3(与えられた範囲)。yの変域は解答。
  kk_sansu_03: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-3, 10],
    lines: [{ a: 2, b: 3 }],
  },
  // 直角をはさむ2辺が6cm・8cm(与えられた値)の直角三角形。斜辺の長さは解答。
  kk_sansu_06: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 8, label: 'C' },
    ],
    sideLabels: ['6cm', null, '8cm'],
    rightAngles: [0],
  },
  // 円O(半径5cm、与えられた値)、円外の点PでOP=13cm(与えられた値)。接点Qでは半径OQ⊥接線PQ(直角三角形)。接線PQの長さは解答。
  kk_sansu_08: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 5, y: 0, label: 'Q' },
      { x: 5, y: 12, label: 'P' },
    ],
    sideLabels: ['5cm', null, '13cm'],
    rightAngles: [1],
    caption: '接点Qでは半径OQ⊥接線PQ。OQ=5cm(半径)、OP=13cm(与えられた値)。接線PQの長さは解答。',
  },
  // 1辺8cmの立方体(与えられた値)。対角線(頂点から対角の頂点まで)の長さは解答。
  kt_sansu_06: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '8cm', depth: '8cm', height: '8cm' },
  },
  // 1辺6cmの正三角形(与えられた値)。面積は解答。
  kt_sansu_09: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5.196, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['6cm', '6cm', '6cm'],
    equalSides: [[0, 1, 2]],
  },
  // 長方形ABCD、AB=12cm・BC=8cm(与えられた値)。PはAB上を秒速2cmで、QはBC上を秒速1cmで動く。面積が8cm²になる時間は解答。
  koko_kankan_sansu_c4_23: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 12, y: 8, label: 'C' },
      { x: 0, y: 8, label: 'D' },
    ],
    sideLabels: ['12cm', '8cm', '12cm', '8cm'],
    rightAngles: [0, 1, 2, 3],
    caption: 'PはAからAB上を秒速2cmでBへ、QはBからBC上を秒速1cmでCへ同時に出発する。△PBQの面積が8cm²になる時間は解答。',
  },
  // 直角三角形、直角をはさむ2辺の差7cm・斜辺13cm(与えられた値)。2辺の長さはそれぞれ解答。
  koko_kankan_sansu_c4_32: {
    kind: 'polygon',
    points: [
      { x: 5, y: 0, label: 'A' },
      { x: 0, y: 12, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['13cm', null, null],
    rightAngles: [2],
    caption: '直角をはさむ2辺の長さの差は7cm(与えられた値)、斜辺=13cm(与えられた値)。2辺の長さはそれぞれ解答。',
  },
  // 1辺12cm(与えられた値)の正方形ABCD。PはAB上を秒速3cmで、QはBC上を秒速2cmで動く。面積が9cm²になる時間は解答。
  koko_kankan_sansu_c4_35: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 12, y: 12, label: 'C' },
      { x: 0, y: 12, label: 'D' },
    ],
    sideLabels: ['12cm', '12cm', '12cm', '12cm'],
    rightAngles: [0, 1, 2, 3],
    caption: 'PはAからAB上を秒速3cmでBへ、QはBからBC上を秒速2cmでCへ同時に出発する。△PBQの面積が9cm²になる時間は解答。',
  },
};
