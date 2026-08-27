import type { Figure } from './figures';

// 中学3年 数学（grade_j3_sansu_xx）の図形バッチ。
// ほぼ全問に図解を付与。複数手順の問題には steps（動く図解）も付与する。
export const figuresGradeJ3Sansu: Record<string, Figure> = {
  // ---- 多項式の乗法・因数分解（面積で考える）----
  grade_j3_sansu_01: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 8, y: 5, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['(x+5)', null, null, '(x+3)'],
    rightAngles: [0, 1, 2, 3],
    caption: '面積で考える (x+3)(x+5)',
    steps: [
      'たて(x+3)・よこ(x+5)の長方形の面積 = (x+3)(x+5)',
      '展開すると x²+3x+5x+15 = x²+8x+15',
      'よって (x+3)(x+5) = x²+8x+15',
    ],
  },
  grade_j3_sansu_02: {
    kind: 'polygon',
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 6, y: 6, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['(x-4)', null, null, '(x-4)'],
    rightAngles: [0, 1, 2, 3],
    caption: '面積で考える (x-4)²（1辺(x-4)の正方形）',
    steps: ['1辺(x-4)の正方形の面積 = (x-4)²', '展開すると (x-4)² = x²-8x+16'],
  },
  grade_j3_sansu_03: {
    kind: 'polygon',
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 6, y: 4, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['(x-6)', null, null, '(x+4)'],
    rightAngles: [0, 1, 2, 3],
    caption: '面積 x²-2x-24 を長方形の面積として考える',
    steps: [
      '積が-24、和が-2になる2つの数を探す → -6と4',
      'x²-2x-24 = (x-6)(x+4)',
      '検算: (x-6)(x+4) = x²+4x-6x-24 = x²-2x-24 ✓',
    ],
  },
  grade_j3_sansu_04: {
    kind: 'polygon',
    points: [
      { x: 0, y: 9, label: 'A' },
      { x: 10, y: 9, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['103(=100+3)', null, null, '97(=100-3)'],
    rightAngles: [0, 1, 2, 3],
    caption: '面積で考える 97×103',
    steps: ['97=100-3, 103=100+3 とみる', '97×103=(100-3)(100+3)=100²-3²', '=10000-9=9991'],
  },
  grade_j3_sansu_05: {
    kind: 'polygon',
    points: [
      { x: 0, y: 2, label: 'A' },
      { x: 4, y: 2, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['(x+2)', null, null, '(x-2)'],
    rightAngles: [0, 1, 2, 3],
    caption: 'まず2でくくり、(x+2)(x-2)の面積を考える',
    steps: [
      'まず共通因数2をくくり出す: 2x²-8=2(x²-4)',
      'x²-4は2乗の差の公式: x²-4=(x+2)(x-2)',
      'よって 2x²-8=2(x+2)(x-2)',
    ],
  },

  // ---- 二次方程式の文章題 ----
  grade_j3_sansu_18: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 11, y: 8, label: 'B' },
      { x: 11, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['11cm', null, null, '8cm'],
    rightAngles: [0, 1, 2, 3],
    caption: '縦の長さをxcmとすると、横は(x+3)cm、面積88cm²',
    steps: [
      '縦をxcmとすると、横は(x+3)cm',
      '面積の式: x(x+3)=88 → x²+3x-88=0',
      '(x+11)(x-8)=0 → x>0よりx=8',
      '縦の長さは8cm(横は11cm)',
    ],
  },
  grade_j3_sansu_19: {
    kind: 'polygon',
    points: [
      { x: 0, y: 15, label: 'A' },
      { x: 20, y: 15, label: 'B' },
      { x: 20, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    sideLabels: ['20m', null, null, '15m'],
    rightAngles: [0, 1, 2, 3],
    caption: '縦15m、横20mの土地に十字の道を作る（道の幅をxmとする）',
    steps: [
      '道を端に寄せて考えると、残りの土地は縦(15-x)m、横(20-x)mの長方形になる',
      '(20-x)(15-x)=266 → 300-35x+x²=266 → x²-35x+34=0',
      '(x-1)(x-34)=0 → 0<x<15なのでx=1',
      '道の幅は1m',
    ],
  },

  // ---- 関数 y=ax²（変域・変化の割合）----
  grade_j3_sansu_20: {
    kind: 'coordinate',
    xRange: [0, 7],
    yRange: [0, 50],
    parabolas: [{ a: -5, b: 30, c: 0 }],
    points: [
      { x: 2, y: 40, label: '(2, 40)' },
      { x: 4, y: 40, label: '(4, 40)' },
    ],
    caption: '横軸：時間t(秒)／縦軸：高さh(m)　h=30t-5t²',
    steps: [
      'h=30t-5t²=40 とおく',
      '30t-5t²=40 → 5t²-30t+40=0 → t²-6t+8=0',
      '(t-2)(t-4)=0 → t=2, t=4',
      'よって2秒後と4秒後',
    ],
  },
  grade_j3_sansu_21: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 30],
    parabolas: [{ a: 3 }],
    points: [{ x: -2, y: 12, label: '(-2, 12)' }],
    steps: ['y=3x²にx=-2を代入', 'y=3×(-2)²=3×4=12'],
  },
  grade_j3_sansu_22: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-2, 20],
    parabolas: [{ a: 2 }],
    points: [{ x: 3, y: 18, label: '(3, 18)' }],
    steps: ['(3,18)を代入: 18=a×3²=9a', 'a=18÷9=2'],
  },
  grade_j3_sansu_23: {
    kind: 'coordinate',
    xRange: [-2, 4],
    yRange: [-2, 20],
    parabolas: [{ a: 2 }],
    points: [
      { x: -1, y: 2, label: 'x=-1,y=2' },
      { x: 0, y: 0, label: '最小(0,0)' },
      { x: 3, y: 18, label: '最大(3,18)' },
    ],
    caption: 'xの変域: -1≦x≦3',
    steps: [
      'a=2>0なので下に凸、頂点(0,0)がyの最小値',
      '変域-1≤x≤3は0を含むので、最小値はx=0のときy=0',
      'x=-1: y=2×1=2、x=3: y=2×9=18 → 最大はy=18',
      'yの変域: 0≤y≤18',
    ],
  },
  grade_j3_sansu_24: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-10, 2],
    parabolas: [{ a: -0.5 }],
    points: [
      { x: -2, y: -2, label: '(-2, -2)' },
      { x: 4, y: -8, label: '最小(4, -8)' },
      { x: 0, y: 0, label: '最大(0, 0)' },
    ],
    caption: 'xの変域: -2≦x≦4',
    steps: [
      'a=-1/2<0なので上に凸、頂点(0,0)がyの最大値',
      '変域-2≤x≤4は0を含むので、最大値はx=0のときy=0',
      'x=-2: y=-1/2×4=-2、x=4: y=-1/2×16=-8 → 最小はy=-8',
      'yの変域: -8≤y≤0',
    ],
  },
  grade_j3_sansu_25: {
    kind: 'coordinate',
    xRange: [-1, 5],
    yRange: [-1, 18],
    parabolas: [{ a: 1 }],
    lines: [{ a: 5, b: -4 }],
    points: [
      { x: 1, y: 1, label: '(1, 1)' },
      { x: 4, y: 16, label: '(4, 16)' },
    ],
    steps: [
      '変化の割合 = yの増加量 ÷ xの増加量',
      'x=1のときy=1、x=4のときy=16',
      '変化の割合 = (16-1)/(4-1) = 15/3 = 5',
    ],
  },
  grade_j3_sansu_26: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-2, 80],
    parabolas: [{ a: 3 }],
    points: [
      { x: 2, y: 12, label: '(2, 12)' },
      { x: 5, y: 75, label: '(5, 75)' },
    ],
    steps: ['y=ax²の変化の割合 = a×(x1+x2)', 'a×(2+5)=21 → 7a=21 → a=3'],
  },
  grade_j3_sansu_27: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [-2, 12],
    parabolas: [{ a: 1 }],
    lines: [{ a: 2, b: 3 }],
    points: [
      { x: -1, y: 1, label: 'A(-1, 1)' },
      { x: 3, y: 9, label: 'B(3, 9)' },
    ],
    steps: ['傾き = (9-1)/(3-(-1)) = 8/4 = 2', '点A(-1,1)を通る: y-1=2(x+1)', 'y=2x+3'],
  },
  grade_j3_sansu_28: {
    kind: 'coordinate',
    xRange: [-3, 4],
    yRange: [-1, 10],
    parabolas: [{ a: 1 }],
    polygon: [
      { x: -2, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'O' },
      { x: 3, y: 9, label: 'B' },
    ],
    points: [
      { x: -2, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'O' },
      { x: 3, y: 9, label: 'B' },
    ],
    steps: [
      '直線ABの式: 傾き=(9-4)/(3-(-2))=1 → y=x+6(y切片6)',
      'y軸との交点C(0,6)を使って△AOBを△AOCと△COBに分ける',
      '△AOC=1/2×6×2=6、△COB=1/2×6×3=9',
      '△AOB=6+9=15',
    ],
  },

  // ---- 相似な図形 ----
  grade_j3_sansu_29: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 3, y: 5, label: 'A' },
    ],
    caption: '相似な三角形（相似比2:3）',
    steps: [
      '面積比 = 相似比の2乗 = 2²:3² = 4:9',
      '小さい方が8cm²なので、大きい方 = 8×9/4 = 18cm²',
    ],
  },
  grade_j3_sansu_30: {
    kind: 'solid',
    shape: 'cylinder',
    caption: '相似な円柱（相似比3:5）',
    steps: [
      '体積比 = 相似比の3乗 = 3³:5³ = 27:125',
      '小さい方が54cm³なので、大きい方 = 54×125/27 = 250cm³',
    ],
  },
  grade_j3_sansu_31: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 7, y: 0, label: 'C' },
      { x: 2, y: 4, label: 'A' },
    ],
    caption: '相似な三角形（相似比4:7）',
    steps: [
      '相似な図形では、周の長さの比 = 相似比',
      '△DEFの周の長さ = 16×7/4 = 28cm',
    ],
  },
  grade_j3_sansu_32: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 7],
    polygon: [
      { x: 3, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
    ],
    segments: [
      [
        { x: 1, y: 2, label: 'D' },
        { x: 5, y: 2, label: 'E' },
      ],
    ],
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 1, y: 2, label: 'D' },
      { x: 5, y: 2, label: 'E' },
    ],
    caption: '△ABCの辺AB上にD、辺AC上にEがあり、DE∥BC',
    steps: [
      'DE∥BCより、△ADE∽△ABC(相似比 AD:AB)',
      'AD=4,DB=2 → AB=6 → AD:AB=4:6=2:3',
      '相似比2:3より DE:BC=2:3',
      '6:BC=2:3 → BC=6×3/2=9cm',
    ],
  },
  grade_j3_sansu_33: {
    kind: 'coordinate',
    xRange: [-1, 16],
    yRange: [-1, 13],
    polygon: [
      { x: 0, y: 0 },
      { x: 15, y: 0, label: '影の先端' },
      { x: 15, y: 12, label: '木の先端' },
    ],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 0 },
      ],
      [
        { x: 2, y: 0, label: '人の影の先端' },
        { x: 2, y: 1.6, label: '人 1.6m' },
      ],
    ],
    points: [
      { x: 0, y: 0, label: '太陽光の根もと' },
      { x: 2, y: 1.6, label: '人 1.6m' },
      { x: 15, y: 12, label: '木' },
    ],
    caption: '同じ時刻の太陽光でできる相似な直角三角形（人の影2m・木の影15m）',
    steps: [
      '人と木は同じ時刻の太陽光でできる相似な直角三角形',
      '身長:影 = 1.6:2 = 0.8',
      '木の高さ = 0.8×15 = 12m',
    ],
  },
  grade_j3_sansu_34: {
    kind: 'polygon',
    points: [
      { x: 3, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 7, y: 4, label: 'D' },
    ],
    sideLabels: [null, '10cm', null, '4cm'],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption: '台形ABCD（AD∥BC）と対角線の交点P',
    steps: [
      'AD∥BCより、△APD∽△CPB(平行線と錯角による相似)',
      '相似比 = AD:CB = 4:10 = 2:5',
      '面積比 = 2²:5² = 4:25',
      '△APD=8cm²なので、△CPB = 8×25/4 = 50cm²',
    ],
  },
  grade_j3_sansu_35: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', height: '12cm' },
    caption: '底面に平行な平面で高さの半分の位置を切断',
    steps: [
      '小さい円錐ともとの円錐は相似。高さの比(相似比)=6:12=1:2',
      '体積比は相似比の3乗: 1³:2³=1:8',
      '円錐台 = もとの円錐(8) - 小さい円錐(1) = 7',
      '円錐台:もとの円錐 = 7:8',
    ],
  },

  // ---- 円周角の定理 ----
  grade_j3_sansu_36: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 0, label: 'A' },
      { angle: 80, label: 'B' },
      { angle: 200, label: 'C' },
    ],
    chords: [
      [0, 1],
      [2, 0],
      [2, 1],
    ],
    sector: { from: 0, to: 80, label: '中心角80°' },
    caption: '円周角の定理：中心角80°に対する円周角∠ACB',
    steps: ['円周角の定理より、円周角 = 中心角 ÷ 2', '∠ACB = 80° ÷ 2 = 40°'],
  },
  grade_j3_sansu_37: {
    kind: 'circle',
    points: [
      { angle: 0, label: 'A' },
      { angle: 80, label: 'B' },
      { angle: 180, label: 'C' },
      { angle: 260, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
    caption: '円に内接する四角形ABCD（∠A=70°）',
    steps: ['円に内接する四角形の対角の和は180°', '∠A+∠C=180°', '∠C=180°-70°=110°'],
  },
  grade_j3_sansu_38: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'A' },
      { angle: 180, label: 'B' },
      { angle: 270, label: 'C' },
      { angle: 0, label: 'D' },
    ],
    chords: [
      [0, 2],
      [1, 3],
    ],
    caption: '円周上の4点A,B,C,D（この順）。線分ACとBDの交点P',
    steps: [
      '△ABPにおいて、∠PAB=∠CAB=48°（Pは線分AC上の点）',
      '∠PBA=∠DBA=32°（Pは線分BD上の点）',
      '三角形の外角の定理より、∠BPC=∠PAB+∠PBA=48°+32°=80°',
    ],
  },
  grade_j3_sansu_39: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'O' },
      { x: 5, y: 0, label: 'T' },
      { x: 5, y: 12, label: 'A' },
    ],
    sideLabels: ['5cm', null, '13cm'],
    rightAngles: [1],
    caption: '円の外部の点Aから引いた接線AT（Tは接点）。OTは半径',
    steps: [
      '接線と半径は接点で垂直に交わる（OT⊥AT）',
      '三平方の定理: AT²=OA²-OT²=13²-5²=169-25=144',
      'AT=√144=12cm',
    ],
  },
  grade_j3_sansu_40: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'A' },
      { angle: 200, label: 'B' },
      { angle: 280, label: 'D' },
      { angle: 330, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 3],
      [1, 2],
      [2, 3],
    ],
    caption: '二等辺三角形ABC(AB=AC、∠BAC=40°)と、弧BC(Aを含まない側)上の点D',
    steps: [
      '四角形ABDCは円に内接する四角形で、∠BACと∠BDCは対角の関係',
      '∠BAC+∠BDC=180°',
      '∠BDC=180°-40°=140°',
    ],
  },

  // ---- 三平方の定理（平面・空間）----
  grade_j3_sansu_41: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
    ],
    sideLabels: ['5cm', '12cm', null],
    rightAngles: [1],
    caption: '直角三角形（直角をはさむ2辺が5cm、12cm）',
  },
  grade_j3_sansu_42: {
    kind: 'polygon',
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 15, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', null, '17cm'],
    rightAngles: [1],
    caption: '直角三角形（斜辺17cm、1辺8cm）',
  },
  grade_j3_sansu_43: {
    kind: 'polygon',
    points: [
      { x: 4, y: 6.93, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
    ],
    sideLabels: ['8cm', '8cm', '8cm'],
    equalSides: [[0, 1, 2]],
    heights: [{ from: 0, toEdge: [1, 2], label: '4√3cm' }],
    caption: '1辺8cmの正三角形とその高さ',
    steps: [
      '正三角形の高さは、底辺を2等分する垂線',
      '三平方の定理: 高さ²=8²-4²=64-16=48',
      '高さ=√48=4√3cm',
    ],
  },
  grade_j3_sansu_44: {
    kind: 'coordinate',
    xRange: [0, 9],
    yRange: [-11, 5],
    segments: [
      [
        { x: 2, y: 3, label: 'A(2, 3)' },
        { x: 7, y: -9, label: 'B(7, -9)' },
      ],
    ],
    points: [
      { x: 2, y: 3, label: 'A(2, 3)' },
      { x: 7, y: -9, label: 'B(7, -9)' },
    ],
    steps: [
      'x座標の差=7-2=5、y座標の差=-9-3=-12',
      '距離=√(5²+12²)=√(25+144)=√169',
      '=13',
    ],
  },
  grade_j3_sansu_45: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '3cm', depth: '4cm', height: '12cm' },
    caption: '直方体の対角線',
    steps: [
      '直方体の対角線 d=√(幅²+奥行²+高さ²)',
      'd=√(3²+4²+12²)=√(9+16+144)=√169',
      '=13cm',
    ],
  },
  grade_j3_sansu_46: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm' },
    caption: '立方体ABCD-EFGHの空間対角線AG',
    steps: [
      'まず底面の対角線(面の対角線)を求める: √(6²+6²)=√72=6√2cm',
      '次に空間対角線: AG=√((6√2)²+6²)=√(72+36)=√108=6√3cm',
    ],
  },
  grade_j3_sansu_47: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', slant: '10cm' },
    caption: '円錐の高さ・半径・母線',
    steps: [
      '円錐の高さ・半径・母線は直角三角形をなす(高さ²+半径²=母線²)',
      '高さ²=10²-6²=100-36=64',
      '高さ=√64=8cm',
    ],
  },

  // ---- 標本調査 ----
  grade_j3_sansu_48: {
    kind: 'pieChart',
    slices: [
      { label: '良品', value: 392 },
      { label: '不良品', value: 8 },
    ],
    caption: '標本400個の内訳',
    steps: ['標本での不良品の割合 = 8/400 = 0.02', '母集団20000個での推定 = 20000×0.02 = 400個'],
  },
  grade_j3_sansu_49: {
    kind: 'pieChart',
    slices: [
      { label: '白玉', value: 45 },
      { label: '黒玉', value: 15 },
    ],
    caption: '標本60個の内訳',
    steps: ['標本での黒玉の割合 = 15/60 = 0.25', '袋全体500個での推定 = 500×0.25 = 125個'],
  },
  grade_j3_sansu_50: {
    kind: 'barChart',
    yLabel: '匹数',
    bars: [
      { label: '1回目(印をつけて放流)', value: 50 },
      { label: '2回目(捕獲)', value: 60 },
      { label: '2回目のうち印あり', value: 6 },
    ],
    caption: '標識再捕法',
    steps: [
      '2回目の標本での「印あり」の割合 = 6/60 = 1/10',
      '池全体の魚の数をN匹とすると、50/N = 6/60',
      'N = 50×60/6 = 500匹',
    ],
  },
};
