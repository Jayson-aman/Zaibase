import type { Figure } from './figures';

// 高校コア問題（koko_gen / koko_oyo の理科）の図解。図が効く問題のみ。
// 計算値そのもの（答え）は極力図に描かず、与えられた条件・回路構成・
// 反応式・関係グラフを示すことで理解を助ける方針。
export const figuresKokoRika: Record<string, Figure> = {
  // === koko_gen_rika（一般コア・理科 01〜20）===

  // gen_01：鉄の酸化（四酸化三鉄の生成）
  koko_gen_rika_01: {
    kind: 'chemEquation',
    equation: '3Fe + 2O2 -> Fe3O4',
    caption: '鉄の酸化（生成物は黒色の四酸化三鉄・磁石につく）',
  },

  // gen_04：地震のP波・S波の走時（震源距離100kmでP波5秒後・S波25秒後）
  koko_gen_rika_04: {
    kind: 'lineChart',
    xLabel: '時間（s）',
    yLabel: '震源距離（km）',
    xRange: [0, 30],
    yRange: [0, 120],
    series: [
      { label: 'P波', color: '#0EA5E9', markers: true, points: [{ x: 0, y: 0 }, { x: 5, y: 100 }] },
      { label: 'S波', color: '#EF4444', markers: true, points: [{ x: 0, y: 0 }, { x: 25, y: 100 }] },
    ],
    caption: '走時曲線：震源距離100kmにP波は5秒後、S波は25秒後に到達（傾きが速さ）',
  },

  // gen_05：メンデルF2の遺伝子型比 RR:Rr:rr = 1:2:1
  koko_gen_rika_05: {
    kind: 'barChart',
    yLabel: '個体数の比',
    bars: [
      { label: 'RR', value: 1, color: '#0EA5E9' },
      { label: 'Rr', value: 2, color: '#0284C7' },
      { label: 'rr', value: 1, color: '#64748B' },
    ],
    caption: 'F₂の遺伝子型比 RR:Rr:rr = 1:2:1（表現型は 丸:しわ = 3:1）',
  },

  // gen_11：オームの法則（20Ωに100Vをかける）
  koko_gen_rika_11: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: '20Ω' }],
    battery: { label: '100V' },
    caption: 'オームの法則 I = V/R（100Vを20Ωにかけたときの電流を求める）',
  },

  // gen_12：光合成の化学反応式
  koko_gen_rika_12: {
    kind: 'chemEquation',
    equation: '6CO2 + 6H2O -> C6H12O6 + 6O2',
    caption: '光合成（葉緑体で光エネルギーを使って糖と酸素を合成）',
  },

  // gen_13：中和（塩酸＋水酸化ナトリウム）
  koko_gen_rika_13: {
    kind: 'chemEquation',
    equation: 'HCl + NaOH -> NaCl + H2O',
    caption: '中和：H⁺ + OH⁻ → H₂O、塩として塩化ナトリウム（食塩）ができる',
  },

  // gen_18：遺伝 F2の遺伝子型比 AA:Aa:aa = 1:2:1
  koko_gen_rika_18: {
    kind: 'barChart',
    yLabel: '個体数の比',
    bars: [
      { label: 'AA', value: 1, color: '#0EA5E9' },
      { label: 'Aa', value: 2, color: '#0284C7' },
      { label: 'aa', value: 1, color: '#64748B' },
    ],
    caption: 'F₂の遺伝子型比 AA:Aa:aa = 1:2:1（表現型は 丸:しわ = 3:1）',
  },

  // === koko_oyo_rika（応用コア・理科 01〜50）===

  // oyo_03：斜面上の物体（30°）に働く重力の分解を示す直角三角形
  koko_oyo_rika_03: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: '30°' },
      { x: 4, y: 0 },
      { x: 4, y: 2.31 },
    ],
    sideLabels: ['水平面', '垂直（高さ）', '斜面'],
    rightAngles: [1],
    caption: '傾き30°の斜面。重力W=mg=49Nを斜面方向 Wsin30°=24.5N と垂直方向 Wcos30°≈42.4N に分解',
  },

  // oyo_05：並列回路（6Ωと3Ω、電源100V）
  koko_oyo_rika_05: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: '6Ω' }],
      [{ type: 'resistor', label: '3Ω' }],
    ],
    battery: { label: '100V' },
    caption: '並列回路（電源100V）。各枝に同じ電圧、合成抵抗は 1/R=1/6+1/3',
  },

  // oyo_11：直列回路（10Ω・20Ω・30Ω、電源12V）
  koko_oyo_rika_11: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '10Ω' },
      { type: 'resistor', label: '20Ω' },
      { type: 'resistor', label: '30Ω' },
    ],
    battery: { label: '12V' },
    caption: '直列回路（電源12V）。合成抵抗は和、全体に同じ電流が流れ電圧が分圧される',
  },

  // oyo_17：水素の燃焼（水の生成）
  koko_oyo_rika_17: {
    kind: 'chemEquation',
    equation: '2H2 + O2 -> 2H2O',
    caption: '係数比 = mol比（H₂ : H₂O = 2 : 2 = 1 : 1）',
  },

  // oyo_22：硝酸カリウムの溶解度（与えられた2点。析出量は答えのため描かない）
  koko_oyo_rika_22: {
    kind: 'lineChart',
    xLabel: '温度（℃）',
    yLabel: '溶解度（g/100g水）',
    xRange: [0, 80],
    yRange: [0, 120],
    series: [
      {
        label: 'KNO₃',
        color: '#0EA5E9',
        markers: true,
        points: [{ x: 20, y: 32 }, { x: 60, y: 109 }],
      },
    ],
    caption: 'KNO₃の溶解度（60℃で109g、20℃で32g／水100g）。冷却すると差の分だけ析出',
  },

  // oyo_24：同濃度の強酸(HCl)と弱酸(酢酸)のpH比較
  koko_oyo_rika_24: {
    kind: 'barChart',
    yLabel: 'pH',
    yMax: 4,
    bars: [
      { label: '塩酸(強酸)', value: 1.0, color: '#EF4444' },
      { label: '酢酸(弱酸)', value: 2.9, color: '#0EA5E9' },
    ],
    caption: '同じ0.1mol/Lでも、完全電離する強酸はpHが低く（酸性が強い）、部分電離の弱酸はpHが高い',
  },

  // oyo_28：並列回路（10Ωと20Ω、電源60V）
  koko_oyo_rika_28: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: '10Ω' }],
      [{ type: 'resistor', label: '20Ω' }],
    ],
    battery: { label: '60V' },
    caption: '並列回路（電源60V）。各枝に60Vがかかり、電流は枝ごとに分かれて足し合わさる',
  },

  // oyo_34：鉄の酸化（酸化鉄(III)の生成）
  koko_oyo_rika_34: {
    kind: 'chemEquation',
    equation: '4Fe + 3O2 -> 2Fe2O3',
    caption: 'Feの酸化数 0→+3（酸化・還元剤）、Oは 0→−2（還元・酸化剤）',
  },

  // oyo_35：中和（塩酸＋水酸化ナトリウム）
  koko_oyo_rika_35: {
    kind: 'chemEquation',
    equation: 'HCl + NaOH -> NaCl + H2O',
    caption: '強酸＋強塩基の中和。塩は塩化ナトリウム、水溶液は中性（pH7）',
  },

  // oyo_38：エタノールの完全燃焼
  koko_oyo_rika_38: {
    kind: 'chemEquation',
    equation: 'C2H5OH + 3O2 -> 2CO2 + 3H2O',
    caption: '有機物の完全燃焼（C→CO₂、H→H₂O）。1molから CO₂ 2mol・H₂O 3mol',
  },

  // oyo_39：メタン・エチレン・アセチレンの結合（単・二重・三重結合）
  koko_oyo_rika_39: {
    kind: 'chemStructure',
    atoms: [
      // メタン CH4（0〜4）
      { el: 'C', x: -5, y: 0 },
      { el: 'H', x: -5, y: -1.3 },
      { el: 'H', x: -5, y: 1.3 },
      { el: 'H', x: -6.3, y: 0 },
      { el: 'H', x: -3.7, y: 0 },
      // エチレン C2H4（5〜10）
      { el: 'C', x: -0.7, y: 0 },
      { el: 'C', x: 0.7, y: 0 },
      { el: 'H', x: -1.5, y: -1 },
      { el: 'H', x: -1.5, y: 1 },
      { el: 'H', x: 1.5, y: -1 },
      { el: 'H', x: 1.5, y: 1 },
      // アセチレン C2H2（11〜14）
      { el: 'C', x: 4, y: 0 },
      { el: 'C', x: 5.3, y: 0 },
      { el: 'H', x: 2.9, y: 0 },
      { el: 'H', x: 6.4, y: 0 },
    ],
    bonds: [
      { from: 0, to: 1 },
      { from: 0, to: 2 },
      { from: 0, to: 3 },
      { from: 0, to: 4 },
      { from: 5, to: 6, order: 2 },
      { from: 5, to: 7 },
      { from: 5, to: 8 },
      { from: 6, to: 9 },
      { from: 6, to: 10 },
      { from: 11, to: 12, order: 3 },
      { from: 11, to: 13 },
      { from: 12, to: 14 },
    ],
    caption: 'CH₄（単結合）・C₂H₄（二重結合）・C₂H₂（三重結合）。不飽和結合ほど反応しやすい',
  },

  // oyo_40：触媒の効果（活性化エネルギーの反応経路図）
  koko_oyo_rika_40: {
    kind: 'lineChart',
    xLabel: '反応の進行',
    yLabel: 'エネルギー',
    xRange: [0, 10],
    yRange: [0, 12],
    series: [
      {
        label: '触媒なし',
        color: '#EF4444',
        points: [
          { x: 0, y: 5 }, { x: 2, y: 5.5 }, { x: 3.5, y: 7.5 },
          { x: 5, y: 10 }, { x: 6.5, y: 7 }, { x: 8, y: 3 }, { x: 10, y: 2 },
        ],
      },
      {
        label: '触媒あり',
        color: '#0EA5E9',
        points: [
          { x: 0, y: 5 }, { x: 2, y: 5.3 }, { x: 3.5, y: 6.3 },
          { x: 5, y: 7.5 }, { x: 6.5, y: 5.5 }, { x: 8, y: 3 }, { x: 10, y: 2 },
        ],
      },
    ],
    caption: '触媒は山の高さ（活性化エネルギー）を下げる。反応物・生成物のエネルギーは変わらない',
  },

  // oyo_41：ABO血液型 IAi × IBi の子の比 AB:A:B:O = 1:1:1:1
  koko_oyo_rika_41: {
    kind: 'pieChart',
    slices: [
      { label: 'AB (IAIB)', value: 1, color: '#0EA5E9' },
      { label: 'A (IAi)', value: 1, color: '#0284C7' },
      { label: 'B (IBi)', value: 1, color: '#38BDF8' },
      { label: 'O (ii)', value: 1, color: '#64748B' },
    ],
    caption: '父IAi × 母IBi の子 → AB : A : B : O = 1 : 1 : 1 : 1（O型が1/4で生まれうる）',
  },

  // oyo_43：生態系のエネルギーピラミッド（栄養段階ごとに約1/10）
  koko_oyo_rika_43: {
    kind: 'barChart',
    yLabel: 'エネルギー（相対）',
    bars: [
      { label: '生産者', value: 100, color: '#059669' },
      { label: '一次消費者', value: 10, color: '#0EA5E9' },
      { label: '二次消費者', value: 1, color: '#64748B' },
    ],
    caption: 'エネルギーは一方向に流れ、栄養段階が上がるごとに約10〜20%しか伝わらない',
  },
};
