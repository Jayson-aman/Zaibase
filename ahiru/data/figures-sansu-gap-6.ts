import type { Figure } from './figures';

// 算数・数学：図解ギャップ埋め バッチ6（未対応だった幾何・グラフ問題に図を追加）
export const figuresSansuGap6: Record<string, Figure> = {
  // 三角形の2つの角40°・65°（与えられた値）。残り1つの角（求める値）は表示しない。
  term1_2026_chugaku_sansu_005: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    caption: '∠A=40°、∠B=65°。∠C（求める角）は表示しない。',
  },
  // 四角形の3つの角100°・80°・95°（与えられた値）。残り1つの角（求める値）は表示しない。
  term1_2026_chugaku_sansu_006: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 7, y: 4, label: 'C' },
      { x: 2, y: 5, label: 'D' },
    ],
    caption: '四角形の3つの角が100°・80°・95°（残り1つの角は求める値なので表示しない）。',
  },
  // 二等辺三角形、頂角A=50°（与えられた値）。底角B・C（等しいが求める値）は表示しない。
  term1_2026_chugaku_sansu_008: {
    kind: 'polygon',
    points: [
      { x: 3, y: 5, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    equalSides: [[0, 2]],
    caption: '∠A（頂角）=50°。底角∠B・∠C（求める角）は表示しない。',
  },
  // 正三角形（全ての辺・角が等しい）。1つの角の大きさ（求める値）は表示しない。
  term1_2026_chugaku_sansu_009: {
    kind: 'polygon',
    points: [
      { x: 3, y: 5.196, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    equalSides: [[0, 1, 2]],
    caption: '正三角形。1つの角の大きさ（求める値）は表示しない。',
  },
  // 二等辺三角形、底角=72°（与えられた値）。頂角（求める値）は表示しない。
  term1_2026_chugaku_sansu_010: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    equalAngles: [[1, 2]],
    equalSides: [[0, 2]],
    caption: '底角∠B=∠C=72°。頂角∠A（求める角）は表示しない。',
  },
  // 二等辺三角形AB=AC、BC=8cm・周りの長さ22cm（与えられた値）。AB・AC（求める値）は表示しない。
  term1_2026_chugaku_sansu_011: {
    kind: 'polygon',
    points: [
      { x: 4, y: 5, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    sideLabels: [null, '8cm', null],
    equalSides: [[0, 2]],
    caption: 'AB=AC（二等辺三角形）。BC=8cm、周りの長さ=22cm。AB・AC（求める長さ）は表示しない。',
  },
  // 1辺5cmの正三角形（与えられた値）。コンパスの開き＝辺の長さと同じ5cm。
  term1_2026_chugaku_sansu_012: {
    kind: 'polygon',
    points: [
      { x: 2.5, y: 4.33, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', '5cm', '5cm'],
    equalSides: [[0, 1, 2]],
    caption: '1辺5cmの正三角形。コンパスの半径を1辺と同じ長さにして作図する。',
  },
  // 縦4cm・横6cm・高さ5cmの直方体（すべて与えられた値）。体積は求める値。
  term1_2026_chugaku_sansu_019: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '4cm', height: '5cm' },
  },
  // 1辺7cmの立方体（与えられた値）。体積は求める値。
  term1_2026_chugaku_sansu_020: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '7cm', depth: '7cm', height: '7cm' },
  },
  // 底面縦5cm・横8cm、高さ6cmの直方体の水そう（すべて与えられた値）。水量(L)は求める値。
  term1_2026_chugaku_sansu_021: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '8cm', depth: '5cm', height: '6cm' },
    caption: '水そういっぱいに入る水の量（L）は求める値なので表示しない。',
  },
  // 直方体、縦5cm・横6cm（与えられた値）、体積180cm³（与えられた値）。高さ（求める値）は表示しない。
  term1_2026_chugaku_sansu_022: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '6cm', depth: '5cm' },
    caption: '体積=180cm³。高さ（求める値）は表示しない。',
  },
  // 縦3cm・横4cm・高さ2cmの直方体（与えられた値）。1辺12cmの立方体に積み重ねる（個数は求める値）。
  term1_2026_chugaku_sansu_023: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '3cm', height: '2cm' },
    caption: 'この直方体を、1辺12cmの立方体にすきまなく積み重ねる。必要な個数は求める値なので表示しない。',
  },
  // △ABC≡△DEF、AB=5cm・BC=7cm・∠B=60°（与えられた値）。DE・EF・∠E（求める値）は表示しない。
  term1_2026_chugaku_sansu_026: {
    kind: 'polygon',
    points: [
      { x: 2.5, y: 4.33, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 7, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', '7cm', null],
    caption:
      '△ABCと合同な△DEF（対応:A↔D、B↔E、C↔F）。DE・EF・∠Eは△ABCの対応する値と等しい（求める値なので表示しない）。',
  },
  // 平行四辺形ABCDに対角線ACを引く。AB=CD・BC=DA（性質として使う）。合同条件は求める答えなので数値なし。
  term1_2026_chugaku_sansu_028: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 5, y: 2, label: 'C' },
      { x: 1, y: 2, label: 'D' },
    ],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    diagonals: [[0, 2]],
    caption: '平行四辺形ABCD。対角線ACを引く。使われている合同条件（求める答え）は表示しない。',
  },
  // △ABC≡△PQR、∠A=80°・∠B=55°（与えられた値）。∠R（求める値）は表示しない。
  term1_2026_chugaku_sansu_029: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 2, y: 4, label: 'C' },
    ],
    caption: '△ABC（∠A=80°、∠B=55°）と合同な△PQR（対応A↔P、B↔Q、C↔R）。∠R（求める角）は表示しない。',
  },
  // △ABC（BC=4cm、∠B=50°、与えられた値）を2倍に拡大した△DEF。EF・∠E（求める値）は表示しない。
  term1_2026_chugaku_sansu_056: {
    kind: 'polygon',
    points: [
      { x: 1.93, y: 2.3, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
    ],
    sideLabels: [null, '4cm', null],
    caption:
      '△ABC（BC=4cm、∠B=50°）を2倍に拡大した△DEF（対応A↔D、B↔E、C↔F）。EF・∠E（求める値）は表示しない。',
  },
  // △ABC（面積48cm²、与えられた値）を1/2に縮小した△DEF。DEFの面積（求める値）は表示しない。
  term1_2026_chugaku_sansu_059: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    caption: '△ABC（面積48cm²）を1/2に縮小した△DEF（対応A↔D、B↔E、C↔F）。DEFの面積（求める値）は表示しない。',
  },
  // 縮図△A'B'C'（1000分の1、与えられた値）、A'B'=7.2cm（与えられた値）。実際のAB（求める値）は表示しない。
  term1_2026_chugaku_sansu_060: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: "A'" },
      { x: 7.2, y: 0, label: "B'" },
      { x: 3, y: 5, label: "C'" },
    ],
    sideLabels: [null, '7.2cm', null],
    caption: '池の対岸をはかるための縮図（1000分の1）。実際のAB（求める値）は表示しない。',
  },
  // 比例 y=3x のグラフ（与えられた式）。x=2から5までの変化を考える（変化の割合は求める値）。
  koko_kiso_sansu_10: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-2, 20],
    lines: [{ a: 3, b: 0 }],
    caption: 'y=3x のグラフ。x=2から5までの変化の割合は求める値なので表示しない。',
  },
  // 反比例 y=6/x のグラフ（与えられた式）。特徴を読み取る問題。
  koko_kiso_sansu_11: {
    kind: 'coordinate',
    xRange: [-6, 6],
    yRange: [-6, 6],
    hyperbolas: [{ k: 6 }],
  },
  // 一次関数 y=-3x+5 のグラフ（与えられた式）。x=1から4の変化の割合・yの増加量は求める値。
  koko_kiso_sansu_13: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [-10, 6],
    lines: [{ a: -3, b: 5 }],
    caption: 'y=-3x+5 のグラフ。x=1から4までの変化の割合・yの増加量は求める値なので表示しない。',
  },
  // y=2x+1 と y=-x+4（与えられた式）。交点の座標（求める値）は表示しない。
  koko_kiso_sansu_14: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-2, 6],
    lines: [
      { a: 2, b: 1 },
      { a: -1, b: 4 },
    ],
    caption: '交点の座標は求める値なので表示しない。',
  },
  // △ABC、∠A=50°・∠B=70°（与えられた値）。Cにおける外角∠ACD（求める値）は表示しない。
  koko_kiso_sansu_19: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 2, y: 4, label: 'C' },
    ],
    caption: '△ABC（∠A=50°、∠B=70°）。Cにおける外角∠ACD（求める値）は表示しない。',
  },
  // 二等辺三角形AB=AC=5cm・BC=6cm（与えられた値）。頂点Aから底辺への垂線の長さ（求める値）は表示しない。
  koko_kiso_sansu_22: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', '6cm', '5cm'],
    heights: [{ from: 0, toEdge: [1, 2] }],
    caption: 'AB=AC=5cm、BC=6cm。頂点Aから辺BCへの垂線（長さは求める値なので表示しない）。',
  },
  // 平行四辺形ABCD、∠A=65°（与えられた値）。∠B・∠C・∠D（求める値）は表示しない。
  koko_kiso_sansu_24: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 6, y: 3, label: 'C' },
      { x: 1, y: 3, label: 'D' },
    ],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    caption: '平行四辺形ABCD。∠A=65°。∠B・∠C・∠D（求める値）は表示しない。',
  },
  // y=x² と y=x+2（与えられた式）。交点の座標（求める値）は表示しない。
  koko_kiso_sansu_34: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    lines: [{ a: 1, b: 2 }],
    caption: '交点の座標は求める値なので表示しない。',
  },
  // 直角三角形、直角を挟む2辺3cm・4cm（与えられた値）。斜辺（求める値）は表示しない。
  koko_kiso_sansu_35: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: [null, '4cm', '3cm'],
    rightAngles: [2],
    caption: '直角を挟む2辺が3cm・4cm。斜辺（求める長さ）は表示しない。',
  },
  // 3辺5cm・6cm・8cm（与えられた値）。直角三角形かどうかは求める答え。
  koko_kiso_sansu_36: {
    kind: 'polygon',
    points: [
      { x: 5.3, y: 5.99, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', '5cm', '6cm'],
    caption: '3辺が5cm・6cm・8cmの三角形。直角三角形かどうかを判定する（表示しない）。',
  },
  // 30°-60°-90°の直角三角形、斜辺8cm（与えられた値）。他の2辺（求める値）は表示しない。
  koko_kiso_sansu_37: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6.93, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', null, null],
    rightAngles: [2],
    caption: '∠A=30°、∠B=60°、∠C=90°。斜辺AB=8cm。他の2辺（求める値）は表示しない。',
  },
  // 座標平面上の2点A(1,2)・B(4,6)（与えられた値）。距離（求める値）は表示しない。
  koko_kiso_sansu_38: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 8],
    points: [
      { x: 1, y: 2, label: 'A' },
      { x: 4, y: 6, label: 'B' },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 4, y: 6 },
      ],
    ],
    caption: '2点A(1,2)、B(4,6)。距離は求める値なので表示しない。',
  },
  // 円O、弧ABに対する中心角=80°（与えられた値）。同じ弧に対する円周角（求める値）は表示しない。
  koko_kiso_sansu_39: {
    kind: 'circle',
    points: [
      { angle: 130, label: 'A' },
      { angle: 50, label: 'B' },
    ],
    chords: [[0, 1]],
    sector: { from: 50, to: 130, label: '80°' },
    showCenter: true,
    caption: '弧ABに対する中心角=80°。同じ弧に対する円周角（求める値）は表示しない。',
  },
  // 円、同じ弧に対する円周角∠APB=35°（与えられた値、P・Qは弧の同じ側）。∠AQB（求める値）は表示しない。
  koko_kiso_sansu_40: {
    kind: 'circle',
    points: [
      { angle: 160, label: 'A' },
      { angle: 20, label: 'B' },
      { angle: -60, label: 'P' },
      { angle: -100, label: 'Q' },
    ],
    chords: [
      [0, 2],
      [2, 1],
      [0, 3],
      [3, 1],
    ],
    caption: '弧ABに対する∠APB=35°（P・Qは弧の同じ側にある点）。∠AQB（求める角）は表示しない。',
  },
  // 円錐、底面半径3cm・母線5cm（与えられた値）。表面積は求める値。
  koko_kiso_sansu_42: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', slant: '5cm' },
  },
  // 線分ABの中点、A(2,-4)・B(6,2)（与えられた値）。中点M（求める値）は表示しない。
  koko_kiso_sansu_67: {
    kind: 'coordinate',
    xRange: [0, 8],
    yRange: [-6, 4],
    points: [
      { x: 2, y: -4, label: 'A' },
      { x: 6, y: 2, label: 'B' },
    ],
    segments: [
      [
        { x: 2, y: -4 },
        { x: 6, y: 2 },
      ],
    ],
    caption: '線分ABの中点Mは求める値なので表示しない。',
  },
  // 台形（上底4cm・下底10cm・高さ6cm、与えられた値）。別に底辺8cm・高さ5cmの三角形の面積も問われる（面積はいずれも求める値）。
  koko_kiso_sansu_69: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 7, y: 6, label: 'C' },
      { x: 3, y: 6, label: 'D' },
    ],
    sideLabels: ['10cm', null, '4cm', null],
    heights: [{ from: 2, toEdge: [0, 1], label: '6cm' }],
    caption:
      '台形（上底4cm、下底10cm、高さ6cm）。底辺8cm・高さ5cmの三角形の面積も別途問われる（図は省略、面積は求める値）。',
  },
  // 半径6cmの円（与えられた値）。面積・円周の長さは求める値。
  koko_kiso_sansu_70: {
    kind: 'circle',
    radiusLabel: '6cm',
    caption: '面積・円周の長さは求める値なので表示しない。',
  },
  // 半径6cm・中心角120°のおうぎ形（与えられた値）。弧の長さ・面積は求める値。
  koko_kiso_sansu_71: {
    kind: 'circle',
    radiusLabel: '6cm',
    sector: { from: 0, to: 120, label: '120°' },
    caption: '弧の長さ・面積は求める値なので表示しない。',
  },
  // 直角三角形、斜辺13cm・1辺5cm（与えられた値）。残りの辺（求める値）は表示しない。
  koko_kiso_sansu_72: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['13cm', null, '5cm'],
    rightAngles: [2],
    caption: '斜辺13cm、1辺5cm。残りの辺（求める値）は表示しない。',
  },
  // 45°-45°-90°の直角二等辺三角形、斜辺8cm（与えられた値）。他の2辺（求める値）は表示しない。
  koko_kiso_sansu_73: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5.657, label: 'A' },
      { x: 5.657, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', null, null],
    rightAngles: [2],
    equalSides: [[1, 2]],
    caption: '斜辺8cm。他の2辺（求める値）は表示しない。',
  },
  // 正三角形、1辺6cm（与えられた値）。高さ・面積は求める値。
  koko_kiso_sansu_74: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5.196, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['6cm', '6cm', '6cm'],
    heights: [{ from: 0, toEdge: [1, 2] }],
    caption: '高さ・面積は求める値なので表示しない。',
  },
  // 円柱、底面半径4cm・高さ9cm（与えられた値）。体積・表面積は求める値。
  koko_kiso_sansu_78: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '9cm' },
  },
  // 球、半径3cm（与えられた値）。体積・表面積は求める値。
  koko_kiso_sansu_79: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '3cm' },
  },
  // 正方形ABCD、対角線AC・BDの交点O（性質として直角・対角線が等しい）。△ABO≡△CDOの証明が答え。
  koko_kiso_sansu_80: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 4, y: 4, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    equalSides: [[0, 1, 2, 3]],
    rightAngles: [0, 1, 2, 3],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '正方形ABCD。対角線ACとBDの交点をO。△ABO≡△CDOを証明する（証明問題）。',
  },
  // 半円の弧AB、Pは円周上の点（ABは直径）。∠APB（求める値）は表示しない。
  koko_kiso_sansu_82: {
    kind: 'circle',
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 100, label: 'P' },
    ],
    chords: [
      [0, 2],
      [2, 1],
    ],
    showCenter: true,
    caption: 'ABは直径、Pは円周上の点。∠APB（求める角）は表示しない。',
  },
  // 座標平面上のA(1,4)・B(5,2)・C(3,-2)（与えられた値）。△ABCの面積は求める値。
  koko_kiso_sansu_91: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-4, 6],
    points: [
      { x: 1, y: 4, label: 'A' },
      { x: 5, y: 2, label: 'B' },
      { x: 3, y: -2, label: 'C' },
    ],
    polygon: [
      { x: 1, y: 4 },
      { x: 5, y: 2 },
      { x: 3, y: -2 },
    ],
    caption: '△ABCの面積は求める値なので表示しない。',
  },
  // ひし形、対角線8cm・6cm（与えられた値）。1辺の長さは求める値。
  koko_kiso_sansu_93: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 0, y: -4, label: 'C' },
      { x: -3, y: 0, label: 'D' },
    ],
    equalSides: [[0, 1, 2, 3]],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '対角線AC=8cm、BD=6cm。1辺の長さは求める値なので表示しない。',
  },
  // 座標平面上のA(1,2)・B(4,6)（与えられた値、三平方の定理の応用）。距離は求める値。
  koko_kiso_sansu_94: {
    kind: 'coordinate',
    xRange: [0, 6],
    yRange: [0, 8],
    points: [
      { x: 1, y: 2, label: 'A' },
      { x: 4, y: 6, label: 'B' },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 4, y: 6 },
      ],
    ],
    caption: '2点A(1,2)、B(4,6)の距離は求める値なので表示しない。',
  },
  // 平行四辺形ABCD、対角線AC・BDの交点O。△AOB≡△CODの証明が答え。
  koko_kiso_sansu_95: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 5, y: 2, label: 'C' },
      { x: 1, y: 2, label: 'D' },
    ],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '平行四辺形ABCD。対角線ACとBDの交点をO。△AOB≡△CODを証明する（証明問題）。',
  },
  // 円錐、底面半径3cm・高さ4cm（与えられた値）。母線の長さは求める値。
  koko_kiso_sansu_96: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm' },
    caption: '母線の長さは求める値なので表示しない。',
  },
  // 放物線y=x²、直線y=2x+3（与えられた式）。交点・囲まれた面積は求める値。
  koko_max_sansu_07: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
    caption: '交点や囲まれた面積は求める値なので表示しない。',
  },
  // 正三角形ABC（1辺a）、BC上の点D（BD:DC=1:2、与えられた比）。ADの長さ(aで表す、求める値)は表示しない。
  koko_max_sansu_08: {
    kind: 'polygon',
    points: [
      { x: 3, y: 5.196, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'D' },
      { x: 6, y: 0, label: 'C' },
    ],
    sideLabels: ['a', '1', '2', 'a'],
    equalSides: [[0, 3]],
    caption: '正三角形ABC（1辺a）。BC上の点DはBD:DC=1:2に内分。ADの長さ（求める値）は表示しない。',
  },
  // 1辺6cmの立方体（与えられた値）。頂点Aから対角の頂点Gまでの最短距離は求める値。
  koko_max_sansu_10: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '頂点Aから対角の頂点Gまでの最短距離（展開図を使って求める）は表示しない。',
  },
  // 円錐、底面半径4cm・母線10cm（与えられた値）。側面のおうぎ形の中心角は求める値。
  koko_max_sansu_12: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '4cm', slant: '10cm' },
    caption: '側面のおうぎ形の中心角は求める値なので表示しない。',
  },
  // 2点A(-1,3)・B(5,-1)（与えられた値）。中点M・垂直二等分線の式は求める値。
  koko_max_sansu_20: {
    kind: 'coordinate',
    xRange: [-3, 7],
    yRange: [-3, 5],
    points: [
      { x: -1, y: 3, label: 'A' },
      { x: 5, y: -1, label: 'B' },
    ],
    segments: [
      [
        { x: -1, y: 3 },
        { x: 5, y: -1 },
      ],
    ],
    caption: '中点M・垂直二等分線の式は求める値なので表示しない。',
  },
  // 円Oの直径AB=10cm、弦CDはABと点Eで垂直に交わりCE=3cm（与えられた値）。BE（求める値）は表示しない。
  koko_max_sansu_21: {
    kind: 'circle',
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 110, label: 'C' },
      { angle: 250, label: 'D' },
    ],
    chords: [
      [0, 1],
      [2, 3],
    ],
    showCenter: true,
    caption: '直径AB=10cm。弦CDはABと点Eで垂直に交わり、CE=3cm。BE（求める値）は表示しない。',
  },
  // 球、半径6cm（与えられた値）。体積・表面積は求める値。
  koko_max_sansu_24: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '6cm' },
  },
  // 2点P(1,2)・Q(4,8)（与えられた値）。直線と軸で囲まれた三角形の面積は求める値。
  koko_max_sansu_30: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-1, 10],
    points: [
      { x: 1, y: 2, label: 'P' },
      { x: 4, y: 8, label: 'Q' },
    ],
    segments: [
      [
        { x: 1, y: 2 },
        { x: 4, y: 8 },
      ],
    ],
    caption: '直線PQとx軸・y軸で囲まれた三角形の面積は求める値なので表示しない。',
  },
  // △ABC（内角の和の証明用、一般的な三角形）。証明問題のため数値は不要。
  koko_max_sansu_32: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    caption: '頂点を通り対辺に平行な直線を引いて、内角の和が180°であることを証明する（証明問題）。',
  },
  // 原点Oから直線y=3x+4（与えられた式）へ下ろした垂線。垂線の足の座標は求める値。
  koko_max_sansu_37: {
    kind: 'coordinate',
    xRange: [-4, 2],
    yRange: [-2, 8],
    lines: [{ a: 3, b: 4 }],
    points: [{ x: 0, y: 0, label: 'O' }],
    caption: '垂線の足の座標は求める値なので表示しない。',
  },
  // 正六角形（外角の和=360°は性質として使う）。1つの内角は求める値。
  koko_max_sansu_44: {
    kind: 'polygon',
    points: [
      { x: 10, y: 0 },
      { x: 5, y: 8.66 },
      { x: -5, y: 8.66 },
      { x: -10, y: 0 },
      { x: -5, y: -8.66 },
      { x: 5, y: -8.66 },
    ],
    equalSides: [[0, 1, 2, 3, 4, 5]],
    equalAngles: [[0, 1, 2, 3, 4, 5]],
    caption: '正六角形。外角の和は常に360°。1つの内角（求める値）は表示しない。',
  },
  // 直線l₁:2x-y+1=0、l₂:x+2y-3=0（与えられた式）。交点の座標は求める値。
  koko_max_sansu_45: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-2, 4],
    lines: [
      { a: 2, b: 1, label: 'l₁' },
      { a: -0.5, b: 1.5, label: 'l₂' },
    ],
    caption: '交点の座標は求める値なので表示しない。',
  },
  // 半径5cmの円（与えられた値）。面積・円周の長さは求める値。別途、底辺6cm・高さ8cmの三角形の面積も問われる。
  chugaku_sansu_ex_01_007: {
    kind: 'circle',
    radiusLabel: '5cm',
    caption:
      '面積・円周の長さは求める値なので表示しない（別途、底辺6cm・高さ8cmの三角形の面積も問われている。図は省略）。',
  },
  // 1辺4cmの立方体（与えられた値）。体積・表面積は求める値。
  chugaku_sansu_ex_01_016: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
  },
  // 直角三角形（底辺3cm・高さ4cm、与えられた値）を底辺方向に5cm平行移動。通過した面積は求める値。
  chugaku_sansu_ex_01_020: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'C' },
    ],
    sideLabels: ['4cm', '3cm', null],
    rightAngles: [1],
    caption: 'この直角三角形を底辺の方向に5cm平行移動する。通過した面積は求める値なので表示しない。',
  },
  // 台形（上底6cm・下底10cm・高さ8cm、与えられた値）内側に半径3cmの円が内接。面積・割合は求める値。
  chugaku_sansu_ex_01_026: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 10, y: 0, label: 'B' },
      { x: 8, y: 8, label: 'C' },
      { x: 2, y: 8, label: 'D' },
    ],
    sideLabels: ['10cm', null, '6cm', null],
    heights: [{ from: 2, toEdge: [0, 1], label: '8cm' }],
    caption:
      '台形（上底6cm、下底10cm、高さ8cm）の内側に半径3cmの円が内接する。面積・割合は求める値なので表示しない。',
  },
  // 円柱、底面半径3cm・高さ10cm（与えられた値）。同じ底面の円錐との体積差は求める値。
  chugaku_sansu_ex_01_029: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '10cm' },
    caption: 'この円柱と同じ底面・高さの円錐との体積の差は求める値なので表示しない。',
  },
  // 半径3cmの円を4等分したおうぎ形（中心角90°、与えられた条件）。面積・弧の長さは求める値。
  chugaku_sansu_ex_01_034: {
    kind: 'circle',
    radiusLabel: '3cm',
    sector: { from: 0, to: 90, label: '90°' },
    caption:
      '半径3cmの円を4等分したおうぎ形。面積・弧の長さは求める値なので表示しない（大小2つの円の面積比は別問題、図は省略）。',
  },
  // 円錐、底面半径6cm・母線12cm（与えられた値）。体積・表面積、傾けたときの水の体積は求める値。
  chugaku_sansu_ex_01_040: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', slant: '12cm' },
    caption: '体積・表面積、および傾けたときの水の体積は求める値なので表示しない。',
  },
  // 1辺6cmの正三角形（与えられた値）の外側を半径2cmの円（与えられた値）が転がる。中心の軌跡の長さは求める値。
  chugaku_sansu_ex_01_042: {
    kind: 'polygon',
    points: [
      { x: 3, y: 5.196, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    sideLabels: ['6cm', '6cm', '6cm'],
    equalSides: [[0, 1, 2]],
    caption:
      '1辺6cmの正三角形の外側を半径2cmの円が転がりながら1周する。円の中心が描く軌跡の長さは求める値なので表示しない。',
  },
  // 1辺6cmの立方体（与えられた値）をある頂点を通る平面で切断。切断面（正三角形）の1辺・面積は求める値。
  chugaku_sansu_ex_01_047: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption:
      'ある頂点を通る平面で切断したときの切断面（正三角形）の1辺の長さ・面積は求める値なので表示しない。',
  },
  // 座標平面上のA(0,4)・B(3,0)・C(6,4)（与えられた値）。△ABCの面積・内部の格子点の個数は求める値。
  chugaku_sansu_ex_01_049: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 6],
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 3, y: 0, label: 'B' },
      { x: 6, y: 4, label: 'C' },
    ],
    polygon: [
      { x: 0, y: 4 },
      { x: 3, y: 0 },
      { x: 6, y: 4 },
    ],
    caption: '△ABCの面積・内部の格子点の個数は求める値なので表示しない。',
  },
  // 原点を通る比例のグラフ上の点(3,12)（与えられた値）。比例定数・式は求める値なので線は表示しない。
  koko_kankan_sansu_04: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-10, 15],
    points: [{ x: 3, y: 12, label: '(3, 12)' }],
    caption: '原点を通る比例のグラフ上の点(3,12)。比例定数・式は求める値なので表示しない。',
  },
  // △ABC（∠A=50°・∠B=70°、底辺BC=8cm・高さ6cm、いずれも与えられた値）。面積・∠C・外角は求める値。
  koko_kankan_sansu_05: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    sideLabels: [null, '8cm', null],
    heights: [{ from: 0, toEdge: [1, 2], label: '6cm' }],
    caption: '△ABC（∠A=50°、∠B=70°）。底辺BC=8cm、高さ=6cm。面積・∠C・∠Aの外角は求める値なので表示しない。',
  },
  // 2点A(1,3)・B(4,9)（与えられた値）と直線y=-x+5（与えられた式）。直線ABの式・交点は求める値。
  koko_kankan_sansu_07: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-2, 10],
    points: [
      { x: 1, y: 3, label: 'A' },
      { x: 4, y: 9, label: 'B' },
    ],
    lines: [{ a: -1, b: 5 }],
    caption: '直線ABの式・直線y=-x+5との交点は求める値なので表示しない。',
  },
  // 二次関数y=-2x²+8x-3（与えられた式）。頂点・軸・x=0〜5での最大最小は求める値。
  koko_kankan_sansu_12: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-14, 6],
    parabolas: [{ a: -2, b: 8, c: -3 }],
    caption: '頂点・軸・x=0から5の範囲での最大値・最小値は求める値なので表示しない。',
  },
  // 円O、弧BCに対する円周角∠BAC・∠BDC（等しい、性質）。AB直径のときの∠ADB・外部の点Pからの接線PA=6cm等は別途。
  koko_kankan_sansu_13: {
    kind: 'circle',
    points: [
      { angle: 160, label: 'A' },
      { angle: 60, label: 'B' },
      { angle: 20, label: 'C' },
      { angle: 280, label: 'D' },
    ],
    chords: [
      [1, 0],
      [0, 2],
      [1, 3],
      [3, 2],
    ],
    showCenter: true,
    caption:
      '弧BCに対する円周角∠BAC=∠BDC（同じ弧に対する円周角は等しい）。ABが直径のときの∠ADB、外部の点Pからの接線PA=6cm・割線PBC（PB=4cm）によるPCは別途求める（表示しない）。',
  },
  // 二等辺三角形AB=AC（与えられた条件）、DはBCの中点（性質:BD=DC）。△ABD≡△ACD、AD⊥BCの証明が答え。
  koko_kankan_sansu_16: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -3, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'D' },
      { x: 3, y: 0, label: 'C' },
    ],
    equalSides: [
      [0, 3],
      [1, 2],
    ],
    diagonals: [[0, 2]],
    caption: 'AB=AC（二等辺三角形）、DはBCの中点。△ABD≡△ACD、AD⊥BCを証明する（証明問題）。',
  },
  // 放物線y=x²、直線y=2x+3（与えられた式）、点P(0,3)（与えられた値）。交点A・B、距離PA・PBは求める値。
  koko_kankan_sansu_17: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
    points: [{ x: 0, y: 3, label: 'P' }],
    caption: '交点A・B、距離PA・PB、△PABが直角三角形かどうかは求める値なので表示しない。',
  },
  // 1辺4cmの立方体（与えられた値）。体対角線・表面積・体積・表面を伝わる最短距離は求める値。
  koko_kankan_sansu_18: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
  },
  // 放物線y=x²-4x+3、直線y=x-1（与えられた式）。頂点・交点A,B・△OABの面積は求める値。
  koko_kankan_sansu_20: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 8],
    parabolas: [{ a: 1, b: -4, c: 3 }],
    lines: [{ a: 1, b: -1 }],
    caption: '頂点・交点A,B・△OABの面積・頂点を通る平行な直線の式は求める値なので表示しない。',
  },
  // 平行四辺形、底辺9cm・高さ6cm（与えられた値）。面積は求める値。
  koko_sansu_ex_17_007: {
    kind: 'polygon',
    points: [
      { x: 2, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 9, y: 0, label: 'C' },
      { x: 11, y: 6, label: 'D' },
    ],
    sideLabels: [null, '9cm', null, null],
    heights: [{ from: 0, toEdge: [1, 2], label: '6cm' }],
    caption: '面積は求める値なので表示しない。',
  },
  // 台形、上底4cm・下底8cm・高さ5cm（与えられた値）。面積は求める値。
  koko_sansu_ex_17_008: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 6, y: 5, label: 'C' },
      { x: 2, y: 5, label: 'D' },
    ],
    sideLabels: ['8cm', null, '4cm', null],
    heights: [{ from: 2, toEdge: [0, 1], label: '5cm' }],
    caption: '面積は求める値なので表示しない。',
  },
  // 直方体、縦5cm・横4cm・高さ3cm（与えられた値）。体積は求める値。
  koko_sansu_ex_17_009: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '4cm', depth: '5cm', height: '3cm' },
  },
  // 円柱、底面半径3cm・高さ7cm（与えられた値）。体積は求める値。
  koko_sansu_ex_17_010: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '3cm', height: '7cm' },
  },
  // 三角形、底辺12cm・高さ8cm（与えられた値）。面積は求める値。
  koko_sansu_ex_17_018: {
    kind: 'polygon',
    points: [
      { x: 4, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
    ],
    sideLabels: [null, '12cm', null],
    heights: [{ from: 0, toEdge: [1, 2], label: '8cm' }],
    caption: '面積は求める値なので表示しない。',
  },
  // 半径6cm・中心角120°のおうぎ形（与えられた値）。弧の長さ・面積は求める値。
  koko_sansu_ex_17_032: {
    kind: 'circle',
    radiusLabel: '6cm',
    sector: { from: 0, to: 120, label: '120°' },
    caption: '弧の長さ・面積は求める値なので表示しない。',
  },
  // y=-2x+5、y=x-1（与えられた式）。交点・y軸で囲まれた三角形の面積は求める値。
  koko_sansu_ex_17_043: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-2, 6],
    lines: [
      { a: -2, b: 5 },
      { a: 1, b: -1 },
    ],
    caption: '交点・y軸で囲まれた三角形の面積は求める値なので表示しない。',
  },
  // 球、半径3cm（与えられた値）。体積・表面積は求める値。
  koko_sansu_ex_17_045: {
    kind: 'solid',
    shape: 'sphere',
    labels: { radius: '3cm' },
  },
  // 帯グラフ、200人のうちA型35%（与えられた値）。A型の人数は求める値。
  sansu_data_ch_11: {
    kind: 'pieChart',
    slices: [
      { label: 'A型', value: 35 },
      { label: 'その他', value: 65 },
    ],
    caption: '帯グラフ：200人のうちA型35%。A型の人数は求める値なので表示しない。',
  },
  // 折れ線グラフ、1月2000人・2月2400人・3月3000人（与えられた値）。最も増えた月・増加数は求める値。
  sansu_data_ch_21: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '来客数（人）',
    series: [
      {
        label: '来客数',
        markers: true,
        points: [
          { x: 1, y: 2000 },
          { x: 2, y: 2400 },
          { x: 3, y: 3000 },
        ],
      },
    ],
    caption: '最も来客数が増えた月・その増加数は求める値なので表示しない。',
  },
  // 円グラフ、あるおうぎ形の中心角=90°（与えられた値）。この項目の割合（%）は求める値。
  sansu_data_ch_22: {
    kind: 'circle',
    sector: { from: 0, to: 90, label: '90°' },
    showCenter: true,
    caption: '円グラフのある項目のおうぎ形の中心角=90°。この項目が全体の何%かは求める値なので表示しない。',
  },
  // ドットプロット、0冊1人・1冊3人・2冊5人・3冊2人・4冊1人（与えられた値）。最頻値は求める値。
  sansu_data_ch_27: {
    kind: 'barChart',
    xLabel: '読んだ冊数',
    yLabel: '人数',
    histogram: true,
    bars: [
      { label: '0冊', value: 1 },
      { label: '1冊', value: 3 },
      { label: '2冊', value: 5 },
      { label: '3冊', value: 2 },
      { label: '4冊', value: 1 },
    ],
    caption: '最頻値（もっとも人数が多い冊数）は求める値なので表示しない。',
  },
};
