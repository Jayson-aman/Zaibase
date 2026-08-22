import type { Figure } from './figures';

// 算数・数学の図形バッチ2（面積・合同・角度・関数グラフ・立体など）。
// エージェントが問題ごとに図形を追加する。
export const figuresMath2: Record<string, Figure> = {
  // 二等辺三角形 AB=AC=10, BC=12, BD=4, ADを引く（ADの長さを問う→ラベルなし）
  kankan_sansu_09: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'D' },
      { x: 12, y: 0, label: 'C' },
      { x: 6, y: 8, label: 'A' },
    ],
    sideLabels: ['4cm', null, '10cm', '10cm'],
    equalSides: [[2, 3]],
    diagonals: [[3, 1]],
    steps: [
      'AからBCに垂線AHを下ろす（Hは中点）: BH = BC÷2 = 12÷2 = 6cm',
      'AH² = AB²-BH² = 10²-6² = 64 → AH = 8cm',
      'HD = BH-BD = 6-4 = 2cm',
      'AD² = AH²+HD² = 8²+2² = 68 → AD = √68 = 2√17cm',
    ],
  },

  // 台形 ABCD（AB//CD, AB=6, CD=4, 高さ5）＋対角線 AC・BD（面積・△APB は答え→非表示）
  koko_max_sansu_33: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 5, y: 5, label: 'C' },
      { x: 1, y: 5, label: 'D' },
    ],
    sideLabels: ['6cm', null, '4cm', null],
    diagonals: [[0, 2], [1, 3]],
    heights: [{ from: 3, toEdge: [0, 1], label: '5cm' }],
    steps: [
      '台形の面積 = (6+4)×5÷2 = 25cm²',
      '△APB∽△CPD（AA相似）、相似比 AB:CD=6:4=3:2 → 面積比=9:4',
      '△APB = 25×9/(3+2)² = 25×9/25 = 9cm²',
    ],
  },

  // 一次関数 y=2x+4 と y=-x+7、x軸との交点B(-2,0)・C(7,0)、交点A(1,6)、囲む三角形
  koko_oyo_sansu_08: {
    kind: 'coordinate',
    xRange: [-4, 9],
    yRange: [-2, 9],
    lines: [
      { a: 2, b: 4, label: 'y=2x+4' },
      { a: -1, b: 7, label: 'y=-x+7' },
    ],
    points: [
      { x: 1, y: 6, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 7, y: 0, label: 'C' },
    ],
    polygon: [
      { x: -2, y: 0 },
      { x: 1, y: 6 },
      { x: 7, y: 0 },
    ],
  },

  // 放物線 y=(1/2)x² と直線 l が A(-2,2), B(4,8) で交わる。C(0,4)。直線の式は答え→ラベルなし
  koko_moshi_sansu_11: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-1, 9],
    parabolas: [{ a: 0.5, label: 'y=½x²' }],
    lines: [{ a: 1, b: 4 }],
    points: [
      { x: -2, y: 2, label: 'A' },
      { x: 4, y: 8, label: 'B' },
      { x: 0, y: 4, label: 'C' },
    ],
    steps: [
      '直線lの傾き = (8-2)/(4-(-2)) = 6/6 = 1 → y = x+4',
      '直線lとy軸の交点 C(0, 4)',
      '△AOC = (1/2)×OC×(Aのx座標の絶対値) = (1/2)×4×2 = 4',
    ],
  },

  // 平行四辺形 ABCD の対角線 AC・BD が O で交わる（AB=4cm、面積は答え→非表示）
  koko_moshi_sansu_23: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 6, y: 3, label: 'C' },
      { x: 2, y: 3, label: 'D' },
    ],
    sideLabels: ['4cm', null, null, null],
    diagonals: [[0, 2], [1, 3]],
  },

  // 平行四辺形（底辺12cm・高さ8cm）
  kansai_hokuyo_sansu_05: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 12, y: 0 },
      { x: 15, y: 8 },
      { x: 3, y: 8 },
    ],
    sideLabels: ['12cm', null, null, null],
    heights: [{ from: 3, toEdge: [0, 1], label: '8cm' }],
  },

  // 直角二等辺三角形（斜辺10cm、直角をはさむ2辺が等しい）。面積は答え→非表示
  nichinoken_figure_09: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 7.071, y: 0, label: 'B' },
      { x: 0, y: 7.071, label: 'C' },
    ],
    sideLabels: [null, '10cm', null],
    rightAngles: [0],
    equalSides: [[0, 2]],
    steps: [
      '斜辺を底辺とみると、高さ = 10÷2 = 5cm',
      '面積 = 10×5÷2 = 25cm²',
    ],
  },

  // 二次関数 y=2x²（下に凸の放物線）
  koko_kankan_sansu_b_11: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 18],
    parabolas: [{ a: 2, label: 'y=2x²' }],
    steps: [
      '(1) x=-1→y=2、x=3→y=18: 変化の割合=(18-2)/(3-(-1))=16/4=4',
      '(2) x=-2のとき y=2×(-2)²=8',
      '(3) -2≤x≤2の最小値: 頂点(0,0)のy=0',
    ],
  },

  // 円Oの円周角。中心角∠AOB=140°（与件）。C は優弧側、D は劣弧側
  koko_kankan_sansu_c2_03: {
    kind: 'circle',
    showCenter: true,
    sector: { from: 20, to: 160 },
    points: [
      { angle: 160, label: 'A' },
      { angle: 20, label: 'B' },
      { angle: 270, label: 'C' },
      { angle: 90, label: 'D' },
    ],
    chords: [[0, 2], [1, 2], [0, 3], [1, 3], [0, 1]],
    steps: [
      '(1) ∠ACB = ∠AOB÷2 = 140°÷2 = 70°',
      '(2) 優弧に対する中心角 = 360°-140° = 220° → ∠ADB = 220°÷2 = 110°',
    ],
  },

  // △ABC の辺AB上に D、辺AC上に E、線分DE（∠ADE=∠ACB）。AB の長さは答え→非表示
  koko_kankan_sansu_c2_09: {
    kind: 'polygon',
    points: [
      { x: 0, y: 9, label: 'A' },
      { x: -1, y: 7.5, label: 'D' },
      { x: -6, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 2.25, y: 5.625, label: 'E' },
    ],
    diagonals: [[1, 4]],
  },

  // 円周上の3点A,B,Cが弧を 2:3:4 に分ける（内角は答え→非表示）
  koko_kankan_sansu_c2_15: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 90, label: 'A' },
      { angle: 10, label: 'B' },
      { angle: 250, label: 'C' },
    ],
    chords: [[0, 1], [1, 2], [2, 0]],
    steps: [
      '弧の比2:3:4を360°に配分（1あたり40°）: 弧AB=80°、弧BC=120°、弧CA=160°',
      '∠A = 弧BC÷2 = 120°÷2 = 60°',
      '∠B = 弧CA÷2 = 160°÷2 = 80°',
      '∠C = 弧AB÷2 = 80°÷2 = 40°',
    ],
  },

  // 座標平面上の3点 A(0,0), B(4,0), C(2,2√3)（正三角形＝答え→辺の長さは非表示）
  koko_kankan_sansu_c2_21: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 5],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 4, y: 0, label: 'B' },
      { x: 2, y: 3.4641, label: 'C' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 2, y: 3.4641 },
    ],
    steps: [
      'AB = √{(4-0)²+(0-0)²} = √16 = 4',
      'AC = √{(2-0)²+(2√3-0)²} = √(4+12) = √16 = 4',
      'BC = √{(2-4)²+(2√3-0)²} = √(4+12) = √16 = 4',
    ],
  },

  // 円内で弦AB・CDが点Pで交わる（△APC∽△DPB）。長さは答え→非表示
  koko_kankan_sansu_c2_27: {
    kind: 'circle',
    points: [
      { angle: 150, label: 'A' },
      { angle: 320, label: 'B' },
      { angle: 60, label: 'C' },
      { angle: 215, label: 'D' },
    ],
    chords: [[0, 1], [2, 3]],
  },

  // ひし形ABCD（1辺10cm、対角線AC=16cm）。BD・面積は答え→非表示
  koko_kankan_sansu_c2_45: {
    kind: 'polygon',
    points: [
      { x: -8, y: 0, label: 'A' },
      { x: 0, y: 6, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 0, y: -6, label: 'D' },
    ],
    sideLabels: ['10cm', null, null, null],
    equalSides: [[0, 1, 2, 3]],
    diagonals: [[0, 2], [1, 3]],
    steps: [
      'AO = AC÷2 = 16÷2 = 8cm',
      'BO² = AB²-AO² = 10²-8² = 36 → BO = 6cm → BD = 2×6 = 12cm',
      '面積 = 対角線の積÷2 = 16×12÷2 = 96cm²',
    ],
  },

  // 直方体（縦4cm・横5cm・高さ6cm）。体積・表面積は答え→非表示
  koko_kankan_sansu_c5_01: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '5cm', depth: '4cm', height: '6cm' },
    steps: [
      '体積 = 4×5×6 = 120cm³',
      '3種類の面の面積: 4×5=20、5×6=30、4×6=24',
      '表面積 = (20+30+24)×2 = 148cm²',
    ],
  },

  // 正三角柱（底面は1辺4cmの正三角形、高さ7cm）。表面積は答え→非表示
  koko_kankan_sansu_c5_10: {
    kind: 'solid',
    shape: 'triangularPrism',
    labels: { height: '7cm' },
    caption: '底面は1辺4cmの正三角形',
    steps: [
      '底面積(2枚) = 2×(√3/4)×4² = 2×4√3 = 8√3cm²',
      '側面積 = 底面の周(4×3)×高さ7 = 12×7 = 84cm²',
      '表面積 = 8√3 + 84 cm²',
    ],
  },

  // 二次不等式 x²-3x+2<0 の放物線（解 1<x<2 は答え→区間の明示はしない）
  koko_sansu_ex_01_046: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-1, 4],
    parabolas: [{ a: 1, b: -3, c: 2, label: 'y=x²-3x+2' }],
    steps: [
      '(x-1)(x-2)=0 → x=1, 2（放物線がx軸と交わる点）',
      'a=1>0（下に凸）なので2根の間で y<0 → 解は 1<x<2',
    ],
  },

  // 円すい（底面の半径3cm・母線9cm）。中心角は答え→非表示
  toin_v2_s007: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', slant: '9cm' },
    steps: [
      '底面の円周 = 2π×3 = 6π cm（側面のおうぎ形の弧の長さに等しい）',
      '半径9cmの円の全周 = 2π×9 = 18π cm',
      '中心角 = (6π÷18π)×360° = 120°',
    ],
  },

  // 放物線 y=(1/4)x² 上の2点 A(-4,4), B(2,1) と △OAB。直線の式・面積は答え→非表示
  koko_kanto2026_sansu_013: {
    kind: 'coordinate',
    xRange: [-5, 3],
    yRange: [-1, 5],
    parabolas: [{ a: 0.25, label: 'y=¼x²' }],
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: -4, y: 4, label: 'A' },
      { x: 2, y: 1, label: 'B' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: -4, y: 4 },
      { x: 2, y: 1 },
    ],
    steps: [
      '(1) 変域は0を含み最小値0。両端: x=-4→y=4、x=2→y=1、|-4|>|2|なので最大値y=4 → 0≤y≤4',
      '(2) 傾き=(1-4)/(2-(-4))=-1/2、B(2,1)を代入: 1=-1+b→b=2 → y=-(1/2)x+2',
      '(3) y切片C(0,2): △OAC=2×4/2=4、△OBC=2×2/2=2 → △OAB=4+2=6',
    ],
  },
};
