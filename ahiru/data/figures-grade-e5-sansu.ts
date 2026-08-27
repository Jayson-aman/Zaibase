import type { Figure } from './figures';

// 小学5年生 算数（grade_e5_sansu_01..50）の図解。
// 図があると理解が深まる問題（角度・図形・体積・立体・円・グラフ）だけに付与。
// 整数と小数の10倍・100倍・1/10、分数と小数・整数の関係、分数のたし算・ひき算は
// 純粋な計算問題で図で理解が深まらないため付けていない。
export const figuresGradeE5Sansu: Record<string, Figure> = {
  // ============================================================
  // 体積（直方体・立方体）
  // ============================================================
  // 縦5cm・横8cm・高さ4cmの直方体。体積 = 5×8×4 = 160cm³。
  grade_e5_sansu_06: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '8cm', depth: '5cm', height: '4cm' },
    caption: '体積 = 5×8×4 = 160cm³',
  },

  // 1辺6cmの立方体。体積 = 6×6×6 = 216cm³。
  grade_e5_sansu_07: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm', depth: '6cm', height: '6cm' },
    caption: '体積 = 6×6×6 = 216cm³',
  },

  // 縦12cm・横9cm・高さ□cmの直方体。体積540cm³から高さを求める。
  grade_e5_sansu_08: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '9cm', depth: '12cm', height: '？cm' },
    caption: '体積540cm³から高さを求める',
    steps: [
      '底面積 = 12 × 9 = 108cm²',
      '高さ = 540 ÷ 108 = 5cm',
    ],
  },

  // 縦20cm・横30cmの底面に深さ15cmまで水が入った水そう。9000cm³=9L。
  grade_e5_sansu_09: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '30cm', depth: '20cm', height: '15cm' },
    caption: '水の体積 = 20×30×15 = 9000cm³ = 9L',
    steps: [
      '底面積 = 20 × 30 = 600cm²',
      '水の体積 = 600 × 15 = 9000cm³',
      '1000cm³ = 1Lなので、9000cm³ = 9L',
    ],
  },

  // 1辺10cmの立方体の容器から、底面8cm×10cmの直方体の容器へ水を移しかえる。
  grade_e5_sansu_10: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '10cm', depth: '10cm', height: '10cm' },
    caption: '水の体積は移しかえても変わらない',
    steps: [
      'はじめの水の体積 = 10×10×10 = 1000cm³',
      '新しい容器の底面積 = 8×10 = 80cm²',
      '水の深さ = 1000 ÷ 80 = 12.5cm',
    ],
  },

  // ============================================================
  // 合同な図形
  // ============================================================
  // 三角形ABC（AB=7cm、BC=9cm、CA=6cm）。合同な三角形DEFとの対応。
  grade_e5_sansu_11: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 7, y: 0, label: 'B' },
      { x: 0.29, y: 5.99, label: 'C' },
    ],
    sideLabels: ['7cm', '9cm', '6cm'],
    caption: 'AB=DE, BC=EF, CA=FD（対応する辺の順番に注目）',
  },

  // 合同な図形は対応する角の大きさもすべて等しい。
  grade_e5_sansu_12: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 6, label: 'C' },
    ],
    caption: '合同な図形では対応する角の大きさはすべて等しい',
  },

  // 2組の辺(AB・BC)とその間の角(∠B)が等しければ合同、という条件を表す三角形。
  grade_e5_sansu_13: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    equalSides: [[0, 1]],
    caption: '2組の辺(AB・BC)とその間の角(∠B)がそれぞれ等しければ合同',
  },

  // 四角形ABCDと対角線AC。AB=AD、BC=DCの凧形（たこ形）。
  grade_e5_sansu_14: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 0, y: -6, label: 'C' },
      { x: -5, y: 0, label: 'D' },
    ],
    equalSides: [
      [0, 3],
      [1, 2],
    ],
    diagonals: [[0, 2]],
    caption: 'AB=AD、BC=DC、ACは共通の辺 → 3組の辺がそれぞれ等しい',
    steps: [
      'AB = AD（問題文より）',
      'BC = DC（問題文より）',
      'AC = AC（2つの三角形に共通の辺）',
      '3組の辺がそれぞれ等しいので、三角形ABCと三角形ACDは合同',
    ],
  },

  // ============================================================
  // 図形の角（三角形・四角形の内角の和）
  // ============================================================
  grade_e5_sansu_15: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 8, y: 0, label: 'B' },
      { x: 3, y: 5, label: 'C' },
    ],
    caption: '3つの内角の和 = 180度',
  },

  grade_e5_sansu_16: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 7, y: 4, label: 'C' },
      { x: 1, y: 5, label: 'D' },
    ],
    diagonals: [[0, 2]],
    caption: '対角線で2つの三角形に分けると、内角の和 = 180×2 = 360度',
  },

  // 2つの角が50度・65度の三角形。残りの角 = 180−50−65 = 65度。
  grade_e5_sansu_17: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 9, y: 0, label: 'B' },
      { x: 3, y: 6, label: 'C' },
    ],
    caption: '∠A=50度、∠B=65度のとき、∠C = 180−50−65 = 65度',
    steps: [
      '三角形の内角の和は180度',
      '残りの角 = 180 − 50 − 65 = 65度',
    ],
  },

  // 3つの角が80度・95度・110度の四角形。残りの角 = 360−80−95−110 = 75度。
  grade_e5_sansu_18: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 7, y: 0, label: 'B' },
      { x: 8, y: 5, label: 'C' },
      { x: 1, y: 6, label: 'D' },
    ],
    diagonals: [[0, 2]],
    caption: '∠A=80度、∠B=95度、∠C=110度のとき、∠D = 360−80−95−110 = 75度',
    steps: [
      '四角形の内角の和は360度',
      '残りの角 = 360 − (80+95+110) = 360 − 285 = 75度',
    ],
  },

  // 五角形。1つの頂点から対角線を2本ひいて3つの三角形に分ける。
  grade_e5_sansu_19: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: -7.61, y: 2.47, label: 'B' },
      { x: -4.7, y: -6.47, label: 'C' },
      { x: 4.7, y: -6.47, label: 'D' },
      { x: 7.61, y: 2.47, label: 'E' },
    ],
    diagonals: [
      [0, 2],
      [0, 3],
    ],
    caption: '1つの頂点から対角線を2本ひくと3つの三角形に分けられる',
    steps: [
      '五角形は1つの頂点から対角線2本で3つの三角形に分けられる',
      '内角の和 = 180 × 3 = 540度',
    ],
  },

  // ============================================================
  // 平均
  // ============================================================
  grade_e5_sansu_29: {
    kind: 'barChart',
    yLabel: '点',
    yMax: 100,
    bars: [
      { label: '1回目', value: 80 },
      { label: '2回目', value: 90 },
      { label: '3回目', value: 70 },
    ],
    caption: '平均 = (80+90+70) ÷ 3 = 80点',
  },

  grade_e5_sansu_30: {
    kind: 'barChart',
    yLabel: 'kg',
    yMax: 40,
    bars: [
      { label: '1人目', value: 32 },
      { label: '2人目', value: 32 },
      { label: '3人目', value: 32 },
      { label: '4人目', value: 32 },
      { label: '5人目', value: 32 },
    ],
    caption: '平均32kg × 5人 = 合計160kg',
  },

  grade_e5_sansu_31: {
    kind: 'barChart',
    yLabel: 'cm',
    yMax: 150,
    bars: [
      { label: '男子15人 平均', value: 140 },
      { label: '女子10人 平均', value: 136 },
      { label: 'クラス全体25人 平均', value: 138.4 },
    ],
    caption: '(140×15 + 136×10) ÷ 25 = 138.4cm',
    steps: [
      '男子の合計 = 140 × 15 = 2100cm',
      '女子の合計 = 136 × 10 = 1360cm',
      '全体の合計 = 2100 + 1360 = 3460cm',
      '全体の平均 = 3460 ÷ 25 = 138.4cm',
    ],
  },

  grade_e5_sansu_32: {
    kind: 'barChart',
    yLabel: '分',
    yMax: 50,
    bars: [
      { label: '1日目', value: 25 },
      { label: '2日目', value: 40 },
      { label: '3日目', value: 0 },
      { label: '4日目', value: 35 },
    ],
    caption: '平均 = (25+40+0+35) ÷ 4 = 25分',
  },

  grade_e5_sansu_33: {
    kind: 'barChart',
    yLabel: '点',
    yMax: 100,
    bars: [
      { label: 'はじめの4回 平均', value: 82 },
      { label: '5回目', value: 98 },
      { label: '5回全体 平均', value: 85.2 },
    ],
    caption: '(82×4 + 98) ÷ 5 = 85.2点',
    steps: [
      'はじめの4回の合計 = 82 × 4 = 328点',
      '5回の合計 = 328 + 98 = 426点',
      '5回全体の平均 = 426 ÷ 5 = 85.2点',
    ],
  },

  // ============================================================
  // 単位量あたりの大きさ（速さ・人口密度）
  // ============================================================
  grade_e5_sansu_34: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 90],
    lines: [{ a: 30, b: 0, label: 'y=30x' }],
    points: [{ x: 2, y: 60, label: '(2時間, 60km)' }],
    caption: '時速30km：2時間で60km',
    steps: ['速さ = 道のり ÷ 時間 = 60 ÷ 2 = 30', '時速30km'],
  },

  grade_e5_sansu_35: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 150],
    lines: [{ a: 45, b: 0, label: 'y=45x' }],
    points: [{ x: 3, y: 135, label: '(3時間, 135km)' }],
    caption: '時速45km：3時間で135km',
    steps: ['道のり = 速さ × 時間 = 45 × 3 = 135km'],
  },

  grade_e5_sansu_36: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 240],
    lines: [{ a: 70, b: 0, label: 'y=70x' }],
    points: [{ x: 3, y: 210, label: '(3時間, 210km)' }],
    caption: '時速70km：210kmで3時間',
    steps: ['時間 = 道のり ÷ 速さ = 210 ÷ 70 = 3時間'],
  },

  grade_e5_sansu_37: {
    kind: 'barChart',
    yLabel: '人/km²',
    yMax: 400,
    bars: [{ label: '人口密度', value: 300 }],
    caption: '24000人 ÷ 80km² = 300人/km²',
  },

  grade_e5_sansu_38: {
    kind: 'barChart',
    yLabel: '円',
    yMax: 500,
    bars: [
      { label: '150gの値段', value: 420 },
      { label: '100gあたり', value: 280 },
    ],
    caption: '1gあたり420÷150=2.8円 → 100gあたり280円',
    steps: ['1gあたり = 420 ÷ 150 = 2.8円', '100gあたり = 2.8 × 100 = 280円'],
  },

  grade_e5_sansu_39: {
    kind: 'barChart',
    yLabel: '人/km²',
    yMax: 400,
    bars: [
      { label: 'A町(45km², 13500人)', value: 300 },
      { label: 'B町(60km², 21000人)', value: 350 },
    ],
    caption: 'B町の方が人口密度が高い（350人/km²）',
    steps: [
      'A町 = 13500 ÷ 45 = 300人/km²',
      'B町 = 21000 ÷ 60 = 350人/km²',
      '300 < 350なので、B町の方が人口密度が高い',
    ],
  },

  // ============================================================
  // 割合（百分率・歩合）
  // ============================================================
  grade_e5_sansu_40: {
    kind: 'pieChart',
    slices: [
      { label: '眼鏡 8人', value: 8 },
      { label: '眼鏡なし 32人', value: 32 },
    ],
    caption: '8 ÷ 40 = 0.2 = 20%',
  },

  grade_e5_sansu_41: {
    kind: 'barChart',
    yLabel: '円',
    yMax: 600,
    bars: [
      { label: '定価', value: 500 },
      { label: '売値(30%引き)', value: 350 },
    ],
    caption: '500 × (1−0.3) = 500 × 0.7 = 350円',
  },

  grade_e5_sansu_42: {
    kind: 'pieChart',
    slices: [
      { label: '男子 270人', value: 270 },
      { label: '女子 330人', value: 330 },
    ],
    caption: '600 × 0.45 = 270人',
  },

  grade_e5_sansu_44: {
    kind: 'barChart',
    yLabel: '円',
    yMax: 2200,
    bars: [
      { label: '定価', value: 2000 },
      { label: '売値', value: 1500 },
    ],
    caption: '値引き額500円 ÷ 定価2000円 = 25%',
    steps: ['値引き額 = 2000 − 1500 = 500円', '500 ÷ 2000 = 0.25 = 25%'],
  },

  grade_e5_sansu_45: {
    kind: 'barChart',
    yLabel: '円',
    yMax: 1200,
    bars: [
      { label: '仕入れ値', value: 800 },
      { label: '定価(25%利益)', value: 1000 },
    ],
    caption: '800 × 1.25 = 1000円',
  },

  // ============================================================
  // 円と正多角形
  // ============================================================
  grade_e5_sansu_46: {
    kind: 'circle',
    radiusLabel: '7cm',
    showCenter: true,
    caption: '円周 = 7×2×3.14 = 43.96cm',
  },

  grade_e5_sansu_47: {
    kind: 'circle',
    radiusLabel: '10cm（直径20cm）',
    showCenter: true,
    caption: '面積 = 10×10×3.14 = 314cm²',
    steps: ['直径20cmなので半径 = 20÷2 = 10cm', '面積 = 10×10×3.14 = 314cm²'],
  },

  grade_e5_sansu_48: {
    kind: 'polygon',
    points: [
      { x: 10, y: 0 },
      { x: 7.07, y: 7.07 },
      { x: 0, y: 10 },
      { x: -7.07, y: 7.07 },
      { x: -10, y: 0 },
      { x: -7.07, y: -7.07 },
      { x: 0, y: -10 },
      { x: 7.07, y: -7.07 },
    ],
    equalAngles: [[0, 1, 2, 3, 4, 5, 6, 7]],
    caption: '正八角形の1つの内角 = 135度',
    steps: ['内角の和 = (8−2)×180 = 1080度', '1つの内角 = 1080 ÷ 8 = 135度'],
  },

  // ============================================================
  // 角柱と円柱（見取図・展開図）
  // ============================================================
  grade_e5_sansu_49: {
    kind: 'solid',
    shape: 'triangularPrism',
    caption: '底面2つ＋側面3つ = 5つの面',
  },

  grade_e5_sansu_50: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '4cm', height: '10cm' },
    caption: '側面の展開図（長方形）の横の長さ = 底面の円周',
    steps: [
      '底面の円周 = (4×2) × 3.14 = 25.12cm',
      'これが展開図の側面（長方形）の横の長さになる',
    ],
  },
};
