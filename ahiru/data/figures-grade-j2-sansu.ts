import type { Figure } from './figures';

// grade_j2_sansu.ts（中2数学・新規50問）に対応する図解データ。
// キーは grade_j2_sansu.ts の id と完全に一致させること。
export const figuresGradeJ2Sansu: Record<string, Figure> = {
  // ── 一次関数 #19-28 ──
  grade_j2_sansu_19: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-5, 16],
    lines: [{ a: 3, b: -2, label: 'y=3x-2' }],
    points: [
      { x: 2, y: 4, label: 'x=2' },
      { x: 5, y: 13, label: 'x=5' },
    ],
    caption: '直線y=3x-2上で、xが2から5まで増えるときのyの変化',
    steps: ['傾き3を確認する', 'yの増加量 = 3 × (5−2) = 9'],
  },
  grade_j2_sansu_20: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-6, 10],
    lines: [{ a: -2, b: 5, label: 'y=-2x+5' }],
    caption: '傾き-2、切片5の直線',
  },
  grade_j2_sansu_21: {
    kind: 'coordinate',
    xRange: [-2, 5],
    yRange: [-3, 10],
    lines: [{ a: 2, b: 2, label: 'y=2x+2' }],
    points: [{ x: 1, y: 4, label: '(1,4)' }],
    caption: '点(1,4)を通り、傾きが2の直線',
    steps: ['直線をy=2x+bとおく', '点(1,4)を代入してb=4−2×1=2 → y=2x+2'],
  },
  grade_j2_sansu_22: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-2, 11],
    lines: [{ a: 2, b: 3, label: 'y=2x+3' }],
    points: [
      { x: 1, y: 5, label: '(1,5)' },
      { x: 3, y: 9, label: '(3,9)' },
    ],
    caption: '2点(1,5)、(3,9)を通る直線',
    steps: ['傾き = (9−5)÷(3−1) = 2', 'y=2x+bに(1,5)を代入してb=3 → y=2x+3'],
  },
  grade_j2_sansu_23: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-3, 10],
    lines: [{ a: -3, b: 7, label: 'y=-3x+7' }],
    points: [
      { x: 7 / 3, y: 0, label: '(7/3,0)' },
      { x: 0, y: 7, label: '(0,7)' },
    ],
    caption: '直線y=-3x+7のx軸・y軸との交点',
    steps: ['y=0を代入 → x=7/3(x軸との交点)', 'x=0を代入 → y=7(y軸との交点)'],
  },
  grade_j2_sansu_24: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-3, 8],
    lines: [
      { a: 2, b: -1, label: 'y=2x-1' },
      { a: -1, b: 5, label: 'y=-x+5' },
    ],
    points: [{ x: 2, y: 3, label: '交点(2,3)' }],
    caption: '2直線y=2x-1、y=-x+5の交点',
    steps: ['2x−1=−x+5 を解く → 3x=6 → x=2', 'x=2をy=2x−1に代入 → y=3'],
  },
  grade_j2_sansu_25: {
    kind: 'coordinate',
    xRange: [0, 25],
    yRange: [0, 60],
    lines: [{ a: 2, b: 12, label: 'y=2x+12' }],
    points: [
      { x: 0, y: 12, label: 'はじめ(12L)' },
      { x: 20, y: 52, label: '20分後(52L)' },
    ],
    caption: '水そうの水の量の変化（毎分2Lずつ増える）',
    steps: ['はじめの量12Lが切片、毎分2L増えるのが傾き → y=2x+12', 'x=20を代入 → y=2×20+12=52'],
  },
  grade_j2_sansu_26: {
    kind: 'coordinate',
    xRange: [0, 18],
    yRange: [0, 1300],
    lines: [
      { a: 70, b: 0, label: '兄' },
      { a: 105, b: -525, label: '弟' },
    ],
    points: [{ x: 15, y: 1050, label: '追いつく地点' }],
    caption: '兄と弟の家からの距離（分）のグラフ',
    steps: [
      '兄の位置 y=70t、弟の位置 y=105(t−5)=105t−525',
      '70t=105t−525 を解く → t=15',
      't=15を代入 → y=70×15=1050',
    ],
  },
  grade_j2_sansu_27: {
    kind: 'coordinate',
    xRange: [-4, 6],
    yRange: [-7, 9],
    lines: [{ a: -2, b: 3, label: 'y=-2x+3' }],
    points: [
      { x: -2, y: 7, label: '(-2,7)' },
      { x: 4, y: -5, label: '(4,-5)' },
    ],
    caption: '2点(-2,7)、(4,-5)を通る直線',
    steps: ['傾き a = (−5−7)÷(4−(−2)) = −2', 'y=−2x+bに(−2,7)を代入 → b=3'],
  },
  grade_j2_sansu_28: {
    kind: 'coordinate',
    xRange: [-4, 6],
    yRange: [-1, 9],
    lines: [
      { a: 1, b: 2, label: 'y=x+2' },
      { a: -2, b: 8, label: 'y=-2x+8' },
    ],
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: -2, y: 0, label: 'A' },
      { x: 2, y: 4, label: 'P' },
    ],
    polygon: [
      { x: 0, y: 0 },
      { x: -2, y: 0 },
      { x: 2, y: 4 },
    ],
    caption: '三角形OAP（Oは原点、Aはy=x+2とx軸の交点、Pは2直線の交点）',
    steps: [
      '交点Pを求める: x+2=−2x+8 → x=2、y=4',
      'Aを求める: y=0のとき x=−2 → A(−2,0)',
      '面積 = (1/2)×OA×Pのy座標 = (1/2)×2×4 = 4',
    ],
  },

  // ── 平行線と角 #29,30,31,32,34（33は具体的な図がないため図なし） ──
  grade_j2_sansu_29: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 7, y: 0, label: 'B' },
      { x: 8.5, y: 4, label: 'C' },
      { x: 1.5, y: 4, label: 'D' },
    ],
    diagonals: [[0, 2]],
    caption: 'AB∥DC。対角線ACが横断線になり、∠BACと∠DCAは錯角の位置にあるので等しい(52°)',
  },
  grade_j2_sansu_30: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 7, y: 0, label: 'B' },
      { x: 8.5, y: 4, label: 'C' },
      { x: 1.5, y: 4, label: 'D' },
    ],
    fill: false,
    caption:
      'ℓ(直線AB)とm(直線DC)に、直線n(直線AD)が交わっている。∠aはAにできる角、∠bはDにできる角で、同位角の位置にある。∠a=∠b=112°ならℓ∥mと言える',
  },
  grade_j2_sansu_31: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 7, y: 4, label: 'C' },
      { x: 1, y: 5, label: 'D' },
    ],
    fill: true,
    caption: '四角形の内角は80°、95°、120°、x（求める角）',
    steps: ['四角形の内角の和はいつも360°', '360−80−95−120=65° → 残りの内角は65°'],
  },
  grade_j2_sansu_32: {
    kind: 'polygon',
    points: [
      { x: 10, y: 5, label: 'A' },
      { x: 7.5, y: 9.33, label: 'B' },
      { x: 2.5, y: 9.33, label: 'C' },
      { x: 0, y: 5, label: 'D' },
      { x: 2.5, y: 0.67, label: 'E' },
      { x: 7.5, y: 0.67, label: 'F' },
    ],
    fill: true,
    equalSides: [[0, 1, 2, 3, 4, 5]],
    equalAngles: [[0, 1, 2, 3, 4, 5]],
    caption: '正六角形。6つの辺・6つの内角がすべて等しい',
    steps: ['内角の和=(6−2)×180=720°', '正六角形は6つの内角が等しいので720÷6=120°'],
  },
  grade_j2_sansu_34: {
    kind: 'polygon',
    points: [
      { x: 10, y: 5, label: 'A' },
      { x: 8.54, y: 8.54, label: 'B' },
      { x: 5, y: 10, label: 'C' },
      { x: 1.46, y: 8.54, label: 'D' },
      { x: 0, y: 5, label: 'E' },
      { x: 1.46, y: 1.46, label: 'F' },
      { x: 5, y: 0, label: 'G' },
      { x: 8.54, y: 1.46, label: 'H' },
    ],
    fill: true,
    equalSides: [[0, 1, 2, 3, 4, 5, 6, 7]],
    equalAngles: [[0, 1, 2, 3, 4, 5, 6, 7]],
    caption: '正八角形。8つの辺・8つの内角がすべて等しい',
    steps: ['外角の和はいつも360° → 1つの外角=360÷8=45°', '内角=180−45=135°'],
  },

  // ── 三角形の合同（証明） #37,38,39,40 ──
  grade_j2_sansu_37: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'C' },
      { x: 6, y: 0, label: 'B' },
      { x: 6, y: 4, label: 'D' },
    ],
    fill: false,
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: 'AとBの中点、CとDの中点がどちらも交点O。∠AOCと∠BODは対頂角',
    steps: [
      'OA=OB、OC=OD(中点の条件)',
      '∠AOC=∠BOD(対頂角)',
      '2辺とその間の角がそれぞれ等しい(SAS)なので△OAC≡△OBD',
    ],
  },
  grade_j2_sansu_38: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'M' },
      { x: 6, y: 0, label: 'C' },
    ],
    equalSides: [[0, 3]],
    diagonals: [[0, 2]],
    sideLabels: [null, null, null, null],
    caption: 'AB=ACの二等辺三角形。AMは∠Aの二等分線で、辺BCと点Mで交わる',
    steps: [
      'AB=AC(仮定)',
      '∠BAM=∠CAM(角の二等分線)',
      'AM=AM(共通)',
      '2辺とその間の角がそれぞれ等しい(SAS)なので△ABM≡△ACM',
    ],
  },
  grade_j2_sansu_39: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 8, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    diagonals: [[1, 3]],
    caption: 'AB=CD、AD=CBの四角形ABCDに対角線BDを引く',
    steps: [
      'AB=CD、AD=CB(仮定)、BD=DB(共通)',
      '3辺がそれぞれ等しい(SSS)なので△ABD≡△CDB',
      '合同な図形の対応する角より∠ADB=∠CBD(錯角)',
      '錯角が等しいのでAD∥BC',
    ],
  },
  grade_j2_sansu_40: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'H' },
      { x: 6, y: 0, label: 'C' },
    ],
    rightAngles: [2],
    equalSides: [[0, 3]],
    diagonals: [[0, 2]],
    sideLabels: [null, null, null, null],
    caption: 'AB=ACの二等辺三角形。AからBCへの垂線の足がH',
    steps: [
      '∠AHB=∠AHC=90°(垂線)',
      'AB=AC(仮定、斜辺)',
      'AH=AH(共通)',
      '直角三角形の斜辺と他の1辺がそれぞれ等しいので△ABH≡△ACH',
    ],
  },

  // ── 四角形の性質（平行四辺形） #41,42,43,44 ──
  grade_j2_sansu_41: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 7, y: 0, label: 'B' },
      { x: 9, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    fill: true,
    sideLabels: ['7cm', null, null, null],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    caption: '平行四辺形ABCD、∠A=65°',
  },
  grade_j2_sansu_42: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 8, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '対角線AC、BDの交点をO。AO=5cm、BO=3cm',
    steps: ['対角線は互いに他を2等分するのでAC=2×AO=10cm', 'BD=2×BO=6cm'],
  },
  grade_j2_sansu_43: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 8, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    diagonals: [[1, 3]],
    caption: '平行四辺形ABCDに対角線BDを引く',
    steps: [
      'AB∥DCの錯角より∠ABD=∠CDB',
      'AD∥BCの錯角より∠ADB=∠CBD',
      'BD=DB(共通)',
      '1辺とその両端の角がそれぞれ等しい(ASA)なので△ABD≡△CDB',
    ],
  },
  grade_j2_sansu_44: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 8, y: 4, label: 'C' },
      { x: 2, y: 4, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '対角線AC、BDの交点がO。AC上にAE=CFとなる点E、Fをとる（図には対角線の交点Oのみ表示）',
    steps: [
      '平行四辺形の対角線は互いに他を2等分するのでAO=CO、BO=DO',
      'AE=CFより AO−AE=CO−CF、つまりEO=FO',
      'EO=FO、BO=DOより対角線EF、BDが点Oでそれぞれ2等分し合う',
      '対角線がそれぞれの中点で交わる四角形は平行四辺形なので、四角形EBFDは平行四辺形',
    ],
  },

  // ── データの活用（箱ひげ図） #48,49,50 ──
  grade_j2_sansu_48: {
    kind: 'boxplot',
    min: 42,
    q1: 58,
    median: 68,
    q3: 80,
    max: 96,
    scaleMin: 30,
    scaleMax: 100,
  },
  grade_j2_sansu_49: {
    kind: 'boxplot',
    min: 30,
    q1: 45,
    median: 55,
    q3: 68,
    max: 85,
    scaleMin: 20,
    scaleMax: 90,
    steps: ['範囲=最大値−最小値=85−30=55点', '四分位範囲=Q3−Q1=68−45=23点'],
  },
  grade_j2_sansu_50: {
    kind: 'boxplot',
    min: 35,
    q1: 50,
    median: 62,
    q3: 75,
    max: 90,
    scaleMin: 30,
    scaleMax: 100,
    caption: 'A組の箱ひげ図（B組：最小40・Q1 55・中央60・Q3 68・最大95）',
    steps: [
      'A組の四分位範囲=75−50=25、B組の四分位範囲=68−55=13 → ①は正しい',
      'A組の中央値62、B組の中央値60 → ②は誤り',
      'A組の範囲=90−35=55、B組の範囲=95−40=55 → 等しいので③は誤り',
      'A組の最大値90 ＜ B組の最大値95 → ④は誤り',
    ],
  },
};
