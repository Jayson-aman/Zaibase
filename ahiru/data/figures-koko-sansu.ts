import type { Figure } from './figures';

// 高校コア問題（koko_gen / koko_oyo の算数・数学）の図解。図が効く問題のみ。
// 純粋な計算（因数分解・方程式・確率の数値・速さの文章題など）はスキップ。
// 既に他ファイル（figures-math-*.ts）に図があるIDは重複させない：
//   koko_gen_sansu_08 / koko_gen_sansu_13 / koko_oyo_sansu_08 / koko_oyo_sansu_15
//   koko_oyo_sansu_28 / koko_oyo_sansu_34 / koko_oyo_sansu_36 / koko_oyo_sansu_48
export const figuresKokoSansu: Record<string, Figure> = {
  // 一次関数 y=2x+1 と y=-x+7 の交点。交点座標(2,5)は解答なので点は打たない。
  koko_gen_sansu_02: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-2, 9],
    lines: [
      { a: 2, b: 1, label: 'y=2x+1' },
      { a: -1, b: 7, label: 'y=-x+7' },
    ],
    steps: [
      '2x + 1 = -x + 7 を解く: 3x = 6 → x = 2',
      'x = 2 を y = 2x+1 に代入: y = 2×2+1 = 5',
    ],
  },
  // 中心角 ∠AOB=120° のおうぎ形と、その弧に対する円周角 ∠APB。円周角60°は解答なので示さない。
  koko_gen_sansu_07: {
    kind: 'circle',
    points: [
      { angle: 150, label: 'A' },
      { angle: 30, label: 'B' },
      { angle: 270, label: 'P' },
    ],
    chords: [
      [2, 0],
      [2, 1],
    ],
    sector: { from: 30, to: 150, label: '120°' },
    showCenter: true,
  },
  // ∠C=90°の直角三角形ABC。AC=5cm・BC=12cm（与えられた辺）。斜辺AB=13とsinAは解答なので示さない。
  koko_gen_sansu_09: {
    kind: 'polygon',
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: 12, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
    ],
    sideLabels: [null, '12cm', '5cm'],
    rightAngles: [2],
    steps: [
      '三平方の定理: AB² = AC² + BC² = 5² + 12² = 169 → AB = 13cm',
      'sin A = 対辺 ÷ 斜辺 = BC ÷ AB = 12/13',
    ],
  },
  // 底面の半径3cm・高さ4cmの円錐。母線5cm・表面積・体積は解答なので示さない。
  koko_gen_sansu_19: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm' },
    steps: [
      '体積 = (1/3) × π × 3² × 4 = 12π cm³',
      '母線 l = √(3²+4²) = 5cm',
      '表面積 = 底面積(9π) + 側面積(π×3×5=15π) = 24π cm²',
    ],
  },
  // 2点 A(1, 3)・B(5, 7)（与えられた点）。直線の方程式 y=x+2 は解答なので直線は引かない。
  koko_gen_sansu_20: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 9],
    points: [
      { x: 1, y: 3, label: 'A(1, 3)' },
      { x: 5, y: 7, label: 'B(5, 7)' },
    ],
    steps: [
      '傾き m = (7−3)/(5−1) = 1',
      '点A(1,3)を通るので y − 3 = 1×(x−1) → y = x + 2',
    ],
  },
  // 放物線 y=2x²（下に開かず上に開く）。区間ごとの変化の割合は解答なので示さない。
  koko_oyo_sansu_13: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 20],
    parabolas: [{ a: 2 }],
    steps: [
      'x=1→3: y=2×1²=2 → y=2×3²=18、変化の割合=(18−2)/(3−1)=8',
      'x=−2→0: y=2×(−2)²=8 → y=0、変化の割合=(0−8)/(0−(−2))=−4',
    ],
  },
  // 放物線 y=ax² 上の点A(3, 18)（与えられた点）。a=2・x=−2のyの値は解答。
  koko_oyo_sansu_14: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-2, 20],
    parabolas: [{ a: 2 }],
    points: [{ x: 3, y: 18, label: 'A(3, 18)' }],
    steps: [
      '18 = a×3² = 9a → a = 2',
      'y = 2x² に x=−2 を代入: y = 2×(−2)² = 2×4 = 8',
    ],
  },
  // 平行四辺形ABCD。BCの中点M、AMの延長とDCの延長の交点E。AM=MEの証明。
  koko_oyo_sansu_16: {
    kind: 'coordinate',
    xRange: [-1, 6],
    yRange: [-5, 5],
    points: [
      { x: 1, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: 5, y: 4, label: 'D' },
      { x: 2, y: 0, label: 'M' },
      { x: 3, y: -4, label: 'E' },
    ],
    polygon: [
      { x: 1, y: 4 },
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 5, y: 4 },
    ],
    segments: [
      [
        { x: 1, y: 4 },
        { x: 3, y: -4 },
      ],
      [
        { x: 5, y: 4 },
        { x: 3, y: -4 },
      ],
    ],
    caption: 'MはBCの中点。AMの延長とDCの延長の交点がE。',
    steps: [
      'BM = CM（MはBCの中点）',
      '∠ABM = ∠ECM（AB∥DCの錯角）、∠AMB = ∠EMC（対頂角）',
      'ASA合同より △ABM ≡ △ECM',
      '対応する辺なので AM = ME',
    ],
  },
  // 直径ABに対する円周角 ∠ACB。中心O、C は円周上。∠ACB=90°は解答（示さない）。
  koko_oyo_sansu_17: {
    kind: 'circle',
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 90, label: 'C' },
    ],
    chords: [
      [0, 2],
      [2, 1],
      [0, 1],
    ],
    showCenter: true,
    caption: 'ABは直径、Cは円周上の点。',
    steps: [
      'OA=OB=OC=r（半径）なので△OACと△OBCはそれぞれ二等辺三角形',
      '△OAC: ∠OAC=∠OCA=α、△OBC: ∠OBC=∠OCB=β',
      '△ABCの内角の和より α+β+(α+β)=180° → α+β=90°',
      '∠ACB=α+β=90°',
    ],
  },
  // 1辺6cmの正三角形ABC。BC上にBP=2cmとなる点P。AP（＝2√7）は解答なので示さない。
  koko_oyo_sansu_22: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 7],
    points: [
      { x: 3, y: 5.196, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 2, y: 0, label: 'P' },
    ],
    polygon: [
      { x: 3, y: 5.196 },
      { x: 0, y: 0 },
      { x: 6, y: 0 },
    ],
    segments: [
      [
        { x: 3, y: 5.196 },
        { x: 2, y: 0 },
      ],
    ],
    caption: '1辺6cmの正三角形。BP=2cm。APを求める。',
    steps: [
      '正三角形の高さ AH = √(6²−3²) = 3√3cm（BH=3cm）',
      'HP = BH − BP = 3 − 2 = 1cm',
      'AP² = AH² + HP² = 27+1 = 28 → AP = √28 = 2√7cm',
    ],
  },
  // ∠C=90°の直角三角形ABC（AB=10・BC=6）。斜辺AB上の点D（BD=4）からBCへの垂線の足E。DEは解答。
  koko_oyo_sansu_23: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 9],
    points: [
      { x: 0, y: 8, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 0, y: 0, label: 'C' },
      { x: 3.6, y: 3.2, label: 'D' },
      { x: 3.6, y: 0, label: 'E' },
    ],
    polygon: [
      { x: 0, y: 8 },
      { x: 6, y: 0 },
      { x: 0, y: 0 },
    ],
    segments: [
      [
        { x: 3.6, y: 3.2 },
        { x: 3.6, y: 0 },
      ],
    ],
    caption: '∠C=90°, AB=10cm, BC=6cm, BD=4cm。DE⊥BC。',
    steps: [
      'AC = √(10²−6²) = 8cm（三平方の定理）',
      '△DBE∽△ABC（AA相似）、相似比 = BD:AB = 4:10 = 2:5',
      'DE = AC × (BD/AB) = 8 × 4/10 = 16/5cm',
    ],
  },
  // 1辺4cmの立方体。体対角線AG（＝4√3）は解答なので示さない。
  koko_oyo_sansu_30: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '4cm', depth: '4cm', height: '4cm' },
    steps: [
      '底面の対角線 BD = √(4²+4²) = 4√2cm',
      '体対角線 AG = √((4√2)²+4²) = √48 = 4√3cm',
    ],
  },
  // 底面の半径3cm・高さ4cmの円錐。母線5cm・表面積・体積は解答。
  koko_oyo_sansu_31: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '3cm', height: '4cm' },
    steps: [
      '母線 l = √(3²+4²) = 5cm',
      '表面積 = 底面積(9π) + 側面積(π×3×5=15π) = 24π cm²',
      '体積 = (1/3)×π×3²×4 = 12π cm³',
    ],
  },
  // 縦3cm・横4cm・高さ5cmの直方体の展開図。表面積94cm²は解答。
  koko_oyo_sansu_33: {
    kind: 'net',
    shape: 'cuboid',
    dims: { w: '4cm', d: '3cm', h: '5cm' },
    steps: [
      '上下（縦×横）= 3×4 = 12cm² → 2枚で24cm²',
      '前後（横×高さ）= 4×5 = 20cm² → 2枚で40cm²',
      '左右（縦×高さ）= 3×5 = 15cm² → 2枚で30cm²',
      '表面積 = 24+40+30 = 94cm²',
    ],
  },
  // AB=ACの二等辺三角形ABC。∠Aの二等分線とBCの交点D。BD=CDの証明。
  koko_oyo_sansu_37: {
    kind: 'coordinate',
    xRange: [-3, 3],
    yRange: [-1, 5],
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
    ],
    polygon: [
      { x: 0, y: 4 },
      { x: -2, y: 0 },
      { x: 2, y: 0 },
    ],
    segments: [
      [
        { x: 0, y: 4 },
        { x: 0, y: 0 },
      ],
    ],
    caption: 'AB=ACの二等辺三角形。ADは∠Aの二等分線。',
    steps: [
      'AB = AC（二等辺三角形の等辺）、∠BAD = ∠CAD（角の二等分線）、AD = AD（共通）',
      'SAS合同より △ABD ≡ △ACD',
      '対応する辺なので BD = CD',
    ],
  },
  // ∠B=90°の直角三角形ABC（AB=6・BC=8）。BC上を動く点P（BP=t）と△ABP。
  koko_oyo_sansu_39: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [-1, 7],
    points: [
      { x: 0, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 4, y: 0, label: 'P' },
    ],
    polygon: [
      { x: 0, y: 6 },
      { x: 0, y: 0 },
      { x: 4, y: 0 },
    ],
    segments: [
      [
        { x: 0, y: 6 },
        { x: 8, y: 0 },
      ],
      [
        { x: 4, y: 0 },
        { x: 8, y: 0 },
      ],
    ],
    caption: '∠B=90°, AB=6cm, BC=8cm。P は BC 上を動く（BP=t）。塗りは△ABP。',
    steps: [
      '底辺=BP=t、高さ=AB=6（∠B=90°）なので S = (1/2)×t×6 = 3t',
      'S=12のとき: 3t=12 → t=4cm（0≤t≤8の範囲内）',
    ],
  },
  // 正五角形。1つの内角108°は解答なので角度は示さない。
  koko_oyo_sansu_40: {
    kind: 'polygon',
    points: [
      { x: 0, y: 1 },
      { x: -0.951, y: 0.309 },
      { x: -0.588, y: -0.809 },
      { x: 0.588, y: -0.809 },
      { x: 0.951, y: 0.309 },
    ],
    equalSides: [[0, 1, 2, 3, 4]],
    equalAngles: [[0, 1, 2, 3, 4]],
    caption: '正五角形',
    steps: [
      'n角形の内角の和 = 180(n−2)°',
      '正n角形の1つの内角 = 180(n−2)÷n',
      '正五角形(n=5): 180×3÷5 = 108°',
    ],
  },
  // ∠A=60°の三角形ABC（AB=5cm・AC=6cm）。BC（＝√31）は解答なので示さない。
  koko_oyo_sansu_41: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 5, y: 0, label: 'B' },
      { x: 3, y: 5.196, label: 'C' },
    ],
    sideLabels: ['5cm', null, '6cm'],
    caption: '∠A=60°。BCを求める。',
    steps: [
      '∠A=60°の頂点Aを原点に置き、B(5,0)、C(6cos60°,6sin60°)=(3,3√3)と座標を設定',
      'BC² = (5−3)² + (0−3√3)² = 4+27 = 31',
      'BC = √31 cm',
    ],
  },
  // 正方形ABCDと各辺の中点を結んだ正方形EFGH。面積比1/2は解答。
  koko_oyo_sansu_49: {
    kind: 'coordinate',
    xRange: [-0.5, 2.5],
    yRange: [-0.5, 2.5],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 2, y: 0, label: 'B' },
      { x: 2, y: 2, label: 'C' },
      { x: 0, y: 2, label: 'D' },
      { x: 1, y: 0, label: 'E' },
      { x: 2, y: 1, label: 'F' },
      { x: 1, y: 2, label: 'G' },
      { x: 0, y: 1, label: 'H' },
    ],
    polygon: [
      { x: 1, y: 0 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
      { x: 0, y: 1 },
    ],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 2, y: 0 },
      ],
      [
        { x: 2, y: 0 },
        { x: 2, y: 2 },
      ],
      [
        { x: 2, y: 2 },
        { x: 0, y: 2 },
      ],
      [
        { x: 0, y: 2 },
        { x: 0, y: 0 },
      ],
    ],
    caption: '正方形ABCDと各辺の中点を結んだ正方形EFGH（塗り）。',
    steps: [
      '正方形ABCDの一辺を2とし、中点E(1,0)、F(2,1)、G(1,2)、H(0,1)とする',
      'EF = √((2−1)²+(1−0)²) = √2 なのでEFGHの面積 = (√2)² = 2',
      'ABCDの面積 = 2² = 4 なので、面積比 = 2/4 = 1/2',
    ],
  },
  // 半径rの円に内接する正六角形。面積(3√3/2)r²は解答。
  koko_oyo_sansu_50: {
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
    caption: '半径rの円に内接する正六角形',
    steps: [
      '正六角形は中心角60°の正三角形6個に分かれる（1辺=r）',
      '正三角形の面積 = (√3/4)r²',
      '正六角形の面積 = 6×(√3/4)r² = (3√3/2)r²',
    ],
  },
};
