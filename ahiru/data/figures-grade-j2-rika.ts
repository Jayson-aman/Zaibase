import type { Figure } from './figures';

// grade_j2_rika.ts（中2理科・新規50問）に対応する図解データ。
// キーは grade_j2_rika.ts の id と完全に一致させること。
export const figuresGradeJ2Rika: Record<string, Figure> = {
  // ── 化学変化と原子・分子／酸化・還元：化学反応式 ──
  grade_j2_rika_04: {
    kind: 'chemEquation',
    equation: 'C + O2 -> CO2',
    caption: '炭素の燃焼（炭素原子1個＋酸素分子1個 → 二酸化炭素分子1個）',
    steps: [
      '炭素原子1個と酸素分子1個（酸素原子2個）が結びつく',
      'できる二酸化炭素CO2は、炭素原子1個・酸素原子2個からなる',
      '左辺・右辺とも炭素原子1個・酸素原子2個で数が一致している',
    ],
  },
  grade_j2_rika_05: {
    kind: 'chemEquation',
    equation: '2H2 + O2 -> 2H2O',
    caption: '水素の燃焼',
    steps: [
      '酸素原子はO2に2個。右辺のH2Oも酸素原子2個が必要なので、H2Oの係数を2にする',
      '水素原子は2個のH2Oに4個ふくまれる。左辺のH2も4個の水素原子が必要なので、H2の係数を2にする',
      '2H2 + O2 → 2H2O で両辺の原子の数が一致する',
    ],
  },
  grade_j2_rika_06: {
    kind: 'chemEquation',
    equation: '2Mg + O2 -> 2MgO',
    caption: 'マグネシウムの燃焼（マグネシウム:酸素＝3:2の質量比で結びつく）',
    steps: [
      'マグネシウム原子2個と酸素分子1個（酸素原子2個）から、MgOが2個できる',
      '質量比はMg:O2＝3:2（原子の質量比Mg24:酸素原子2個分32を簡単にすると3:2）',
      'マグネシウム3.6gに結びつく酸素は 3.6×2/3＝2.4g',
      'できる酸化マグネシウムは 3.6＋2.4＝6.0g（質量保存の法則）',
    ],
  },
  grade_j2_rika_09: {
    kind: 'chemEquation',
    equation: 'CaCO3 + 2HCl -> CaCl2 + H2O + CO2',
    caption: '石灰石（炭酸カルシウム）と塩酸の反応',
    steps: [
      'Ca（カルシウム）の数は両辺とも1個で、すでに一致している',
      'Cl（塩素）は右辺のCaCl2に2個あるので、左辺のHClも2個（2HCl）必要',
      '2HClにすると水素原子は2個になり、右辺のH2Oの水素原子2個と一致する',
      '炭素・酸素の数も両辺とも炭素1個・酸素3個で一致していることを確認する',
    ],
  },
  grade_j2_rika_14: {
    kind: 'chemEquation',
    equation: '4Fe + 3O2 -> 2Fe2O3',
    caption: '鉄のさび（酸化鉄(III)の生成）',
    steps: [
      '酸化鉄(III)の化学式Fe2O3をもとに、鉄原子の数をそろえる',
      'Fe2O3の係数を2にすると鉄原子は4個になるので、左辺のFeの係数も4にする',
      'このとき酸素原子は右辺に2×3＝6個。左辺のO2の係数を3にすれば酸素原子も6個になる',
      '4Fe + 3O2 → 2Fe2O3 で両辺の原子の数が一致する',
    ],
  },
  grade_j2_rika_15: {
    kind: 'chemEquation',
    equation: '2CuO + C -> 2Cu + CO2',
    caption: '酸化銅の炭素による還元',
    steps: [
      '酸化銅CuOは還元されて銅になる（酸素を失う）',
      '炭素Cは酸化されて二酸化炭素になる（酸素と結びつく）',
      '係数をCuO:C:Cu:CO2＝2:1:2:1にすると、両辺で銅原子2個・酸素原子2個・炭素原子1個になる',
    ],
  },
  grade_j2_rika_16: {
    kind: 'chemEquation',
    equation: 'CuO + H2 -> Cu + H2O',
    caption: '酸化銅の水素による還元',
    steps: [
      '酸化銅CuOは還元されて銅になる（酸素を失う）',
      '水素H2は酸化されて水になる（酸素と結びつく）',
      '係数はすべて1で、両辺とも銅原子1個・酸素原子1個・水素原子2個で一致している',
    ],
  },

  // ── 酸化・還元：質量比のグラフ ──
  grade_j2_rika_13: {
    kind: 'lineChart',
    xLabel: '銅の質量(g)',
    yLabel: '結びつく酸素の質量(g)',
    xRange: [0, 2],
    yRange: [0, 0.5],
    series: [
      {
        label: '銅と酸素の質量関係',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 0.4, y: 0.1 },
          { x: 0.8, y: 0.2 },
          { x: 1.2, y: 0.3 },
          { x: 1.6, y: 0.4 },
        ],
      },
    ],
    caption: '銅の質量と、それに結びつく酸素の質量の関係（質量比 銅:酸素＝4:1）',
    steps: [
      'グラフから、銅の質量:酸素の質量＝4:1になっていることを読み取る（例:銅0.4gに対し酸素0.1g）',
      '銅0.8gに結びつく酸素をxgとすると、0.8:x＝4:1',
      'x＝0.8×(1/4)＝0.2g',
    ],
  },

  // ── 電流とその利用：オームの法則・直列並列回路 ──
  grade_j2_rika_18: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: '3Ω' }],
    battery: { label: '6V' },
    caption: '抵抗3Ωに電圧6Vを加えた回路。オームの法則 I＝V/R で電流を求める',
    steps: ['オームの法則 I＝V/R を使う', 'I＝6V ÷ 3Ω＝2A'],
  },
  grade_j2_rika_19: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '?Ω' },
      { type: 'ammeter', label: '3A' },
    ],
    battery: { label: '9V' },
    caption: '電圧9V・電流3Aの回路。オームの法則 R＝V/I で抵抗を求める',
    steps: ['オームの法則 R＝V/I を使う', 'R＝9V ÷ 3A＝3Ω'],
  },
  grade_j2_rika_20: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '20Ω' },
      { type: 'ammeter', label: '0.5A' },
    ],
    battery: { label: '?V' },
    caption: '抵抗20Ωに0.5Aの電流を流すために必要な電圧を求める。オームの法則 V＝IR を使う',
    steps: ['オームの法則 V＝IR を使う', 'V＝0.5A × 20Ω＝10V'],
  },
  grade_j2_rika_21: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '10Ω' },
      { type: 'resistor', label: '20Ω' },
    ],
    battery: { label: '6V' },
    caption: '10Ωと20Ωを直列につないだ回路（電源6V）',
    steps: ['合成抵抗＝10＋20＝30Ω', '電流＝6V ÷ 30Ω＝0.2A'],
  },
  grade_j2_rika_22: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: '4Ω' }], [{ type: 'resistor', label: '12Ω' }]],
    battery: { label: '12V' },
    caption: '4Ωと12Ωを並列につないだ回路（電源12V）。各枝に同じ12Vがかかる',
    steps: [
      '4Ω側の電流：I₁＝12V ÷ 4Ω＝3A',
      '12Ω側の電流：I₂＝12V ÷ 12Ω＝1A',
      '全体の電流：I＝I₁＋I₂＝3＋1＝4A',
    ],
  },
  grade_j2_rika_25: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: '2Ω' }],
    branches: [[{ type: 'resistor', label: '6Ω' }], [{ type: 'resistor', label: '3Ω' }]],
    battery: { label: '12V' },
    caption: '2Ωの抵抗と、6Ω・3Ωの並列部分を直列につないだ回路（電源12V）',
    steps: [
      '並列部分の合成抵抗：1/R＝1/6＋1/3＝1/2 → R＝2Ω',
      '回路全体の合成抵抗：2Ω（直列）＋2Ω（並列部分）＝4Ω',
      '全体の電流：I＝12V ÷ 4Ω＝3A',
      '並列部分にかかる電圧：3A × 2Ω＝6V',
      '6Ωの抵抗に流れる電流：6V ÷ 6Ω＝1A（3Ω側は6V÷3Ω＝2A、合計3Aで一致）',
    ],
  },
  grade_j2_rika_26: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '10Ω（電熱線）' },
      { type: 'ammeter', label: '2A' },
    ],
    battery: { label: '20V' },
    caption: '10Ωの電熱線に2Aの電流を5分間流したときの発熱量を求める',
    steps: [
      '電力 P＝I²R＝2² × 10＝40W',
      '5分＝300秒',
      '熱量 Q＝Pt＝40 × 300＝12000J（12kJ）',
    ],
  },

  // ── 動物の体のつくりと働き：心臓・消化器官 ──
  grade_j2_rika_41: {
    kind: 'bioDiagram',
    template: 'heart',
    hideParts: ['usinbou', 'sasinbou', 'usinshitsu', 'sasinshitsu'],
    caption: '心臓の断面模式図（正面から見た図。向かって左側が体の右側にあたる）',
  },
  grade_j2_rika_43: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    hideParts: ['kanzou', 'suizou'],
    caption: '消化に関わる器官の模式図',
  },

  // ── 気象とその変化：湿度・露点 ──
  grade_j2_rika_47: {
    kind: 'barChart',
    xLabel: '',
    yLabel: '水蒸気量(g/m³)',
    yMax: 25,
    bars: [
      { label: '飽和水蒸気量(25℃)', value: 23.1 },
      { label: '実際の水蒸気量', value: 11.55 },
    ],
    caption: '25℃の飽和水蒸気量と、教室の空気の実際の水蒸気量',
    steps: [
      '湿度(%) ＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100 の式を使う',
      '11.55 ÷ 23.1 × 100 を計算する',
      '＝ 50%',
    ],
  },
  grade_j2_rika_48: {
    kind: 'lineChart',
    xLabel: '気温(℃)',
    yLabel: '飽和水蒸気量(g/m³)',
    xRange: [14, 24],
    yRange: [10, 22],
    series: [
      {
        label: '飽和水蒸気量',
        markers: true,
        points: [
          { x: 16, y: 13.6 },
          { x: 18, y: 15.4 },
          { x: 20, y: 17.3 },
          { x: 22, y: 19.4 },
        ],
      },
    ],
    caption: '気温と飽和水蒸気量の関係。水蒸気量17.3g/m³の空気を冷やしたときの露点を求める',
    steps: [
      'この空気にふくまれる水蒸気量17.3g/m³を確認する',
      'グラフ（表）で、飽和水蒸気量がちょうど17.3g/m³になる気温を探す',
      '20℃のとき飽和水蒸気量が17.3g/m³と一致するので、露点は20℃',
    ],
  },
};
