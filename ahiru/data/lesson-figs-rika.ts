import type { Figure } from './figures';

// 中学受験 理科 の教科書用図解バッチ。キーは lessons-*.ts の figureId と対応。
export const lessonFigsRika: Record<string, Figure> = {
  // ── 第1章 植物 ─────────────────────────────
  // 光の強さと（見かけの）光合成量。0付近で呼吸のみ→光補償点→光飽和点で一定。
  lf_rika_01: {
    kind: 'lineChart',
    xLabel: '光の強さ',
    yLabel: '見かけの光合成量',
    xRange: [0, 10],
    yRange: [-1.5, 5],
    series: [
      {
        label: '見かけの光合成量',
        markers: true,
        points: [
          { x: 0, y: -1 },
          { x: 1, y: 0 },
          { x: 2, y: 1 },
          { x: 3, y: 2 },
          { x: 4, y: 3 },
          { x: 5, y: 3.5 },
          { x: 6, y: 3.8 },
          { x: 7, y: 4 },
          { x: 8, y: 4 },
          { x: 9, y: 4 },
          { x: 10, y: 4 },
        ],
      },
    ],
    caption: 'y=0の点が光補償点（光合成量＝呼吸量）。一定になる所が光飽和点。真の光合成量＝見かけ＋呼吸量',
  },
  // 蒸散量の実験（ワセリンをぬる場所を変える）。A何もなし・B表・C裏・D両面。
  lf_rika_02: {
    kind: 'barChart',
    yLabel: '蒸散量(mL)',
    bars: [
      { label: 'A なし' , value: 10.0 },
      { label: 'B 表' , value: 7.5 },
      { label: 'C 裏' , value: 2.5 },
      { label: 'D 両面' , value: 0.5 },
    ],
    caption: '表からの蒸散＝A−B＝2.5、裏からの蒸散＝A−C＝7.5。気孔は葉の裏に多い',
  },

  // ── 第2章 電気回路 ─────────────────────────────
  // 電流(横)と電圧(縦)のグラフ。原点を通る直線で、傾きが抵抗の大きさ。
  lf_rika_03: {
    kind: 'lineChart',
    xLabel: '電流(A)',
    yLabel: '電圧(V)',
    xRange: [0, 0.4],
    yRange: [0, 6.5],
    series: [
      { label: '15Ω', markers: true, points: [ { x: 0, y: 0 }, { x: 0.1, y: 1.5 }, { x: 0.2, y: 3 }, { x: 0.3, y: 4.5 }, { x: 0.4, y: 6 } ] },
      { label: '10Ω', markers: true, points: [ { x: 0, y: 0 }, { x: 0.2, y: 2 }, { x: 0.4, y: 4 } ] },
    ],
    caption: '傾き＝電圧÷電流＝抵抗。傾きが大きいほど抵抗が大きい（オームの法則）',
  },
  // 直列回路：R₁6ΩとR₂4Ωを直列、電源10V。
  lf_rika_04: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: 'R₁ 6Ω' },
      { type: 'resistor', label: 'R₂ 4Ω' },
    ],
    battery: { label: '10V' },
    caption: '直列：電流はどこも同じ。合成抵抗＝6＋4＝10Ω、電流＝1A',
  },
  // 並列回路：R₁6ΩとR₂3Ωを並列、電源6V。
  lf_rika_05: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [ { type: 'resistor', label: 'R₁ 6Ω' } ],
      [ { type: 'resistor', label: 'R₂ 3Ω' } ],
    ],
    battery: { label: '6V' },
    caption: '並列：各枝の電圧は同じ。1/R＝1/6＋1/3→R＝2Ω、全電流＝3A',
  },

  // ── 第3章 化学変化 ─────────────────────────────
  // 金属の質量と、できる酸化物の質量（比例）。銅4:5、マグネシウム3:5。
  lf_rika_06: {
    kind: 'lineChart',
    xLabel: '金属の質量(g)',
    yLabel: '酸化物の質量(g)',
    xRange: [0, 8],
    yRange: [0, 11],
    series: [
      { label: '銅→酸化銅', markers: true, points: [ { x: 0, y: 0 }, { x: 4, y: 5 }, { x: 8, y: 10 } ] },
      { label: 'Mg→酸化Mg', markers: true, points: [ { x: 0, y: 0 }, { x: 3, y: 5 }, { x: 6, y: 10 } ] },
    ],
    caption: '銅:酸素:酸化銅＝4:1:5、Mg:酸素:酸化Mg＝3:2:5。質量は比例する',
  },
  // メタンの燃焼（酸化）の化学反応式。
  lf_rika_07: {
    kind: 'chemEquation',
    equation: 'CH4 + 2O2 -> CO2 + 2H2O',
    caption: 'メタンの燃焼。物質が酸素と結びつく反応（酸化）。左右で原子の数は保存される',
  },

  // ── 第4章 天体・地層 ─────────────────────────────
  // P波・S波の走時曲線。P波8km/s、S波4km/s。差＝初期微動継続時間。
  lf_rika_08: {
    kind: 'lineChart',
    xLabel: '震源距離(km)',
    yLabel: '到達時間(秒)',
    xRange: [0, 240],
    yRange: [0, 65],
    series: [
      { label: 'P波(8km/s)', markers: true, points: [ { x: 0, y: 0 }, { x: 80, y: 10 }, { x: 160, y: 20 }, { x: 240, y: 30 } ] },
      { label: 'S波(4km/s)', markers: true, points: [ { x: 0, y: 0 }, { x: 80, y: 20 }, { x: 160, y: 40 }, { x: 240, y: 60 } ] },
    ],
    caption: '2本の線のたての差＝初期微動継続時間。震源から遠いほど長くなる',
  },
  // 地層の柱状図（上ほど新しい、下ほど古い）。
  lf_rika_09: {
    kind: 'stratum',
    columns: [
      {
        label: '地点A',
        topLabel: '地表',
        layers: [
          { name: '砂岩', thickness: 3, pattern: 'sand' },
          { name: '泥岩', thickness: 4, pattern: 'mud' },
          { name: 'れき岩', thickness: 3, pattern: 'gravel' },
          { name: '砂岩', thickness: 3, pattern: 'sand' },
          { name: '火山灰', thickness: 2, pattern: 'ash' },
        ],
      },
    ],
    caption: '地層累重の法則：下の層ほど古い。最下層の火山灰が最も古い。れき岩→泥岩は海が深くなった証拠',
  },

  // ── 第5章 力・運動 ─────────────────────────────
  // ばねの伸びと力（フックの法則）。ばね定数2N/cm。
  lf_rika_10: {
    kind: 'lineChart',
    xLabel: '伸び(cm)',
    yLabel: '力(N)',
    xRange: [0, 4],
    yRange: [0, 9],
    series: [
      { label: 'ばね定数2N/cm', markers: true, points: [ { x: 0, y: 0 }, { x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 6 }, { x: 4, y: 8 } ] },
    ],
    caption: 'F＝k×x。原点を通る直線で、傾きがばね定数k。弾性限界内でのみ成立',
  },
  // 水の深さと水圧（比例）。水圧＝10000×深さ(Pa)。
  lf_rika_11: {
    kind: 'lineChart',
    xLabel: '深さ(m)',
    yLabel: '水圧(kPa)',
    xRange: [0, 3],
    yRange: [0, 33],
    series: [
      { label: '水圧', markers: true, points: [ { x: 0, y: 0 }, { x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 30 } ] },
    ],
    caption: '水圧は深さに比例する（水圧＝1000×10×深さ Pa）。1kPa＝1000Pa',
  },

  // ── 第6章 生態系・人体・遺伝 ─────────────────────────────
  // 生態ピラミッド（模式図）。上位（消費者）ほど個体数が少ない。
  lf_rika_12: {
    kind: 'barChart',
    yLabel: '個体数(相対)',
    bars: [
      { label: '生産者' , value: 1000 },
      { label: '一次消費者' , value: 200 },
      { label: '二次消費者' , value: 40 },
      { label: '三次消費者' , value: 8 },
    ],
    caption: '模式図：食物連鎖の上位（消費者）ほど個体数・エネルギー量が少なくなる',
  },
  // メンデルF2の遺伝子型比 AA:Aa:aa＝1:2:1。
  lf_rika_13: {
    kind: 'pieChart',
    slices: [
      { label: 'AA' , value: 1 },
      { label: 'Aa' , value: 2 },
      { label: 'aa' , value: 1 },
    ],
    caption: 'F2の遺伝子型比 AA:Aa:aa＝1:2:1。表現型は 優性(丸):劣性(しわ)＝3:1',
  },

  // ── 第7章 光・音・熱 ─────────────────────────────
  // 気温と音速（音速＝331.5＋0.6×気温）。
  lf_rika_14: {
    kind: 'lineChart',
    xLabel: '気温(℃)',
    yLabel: '音速(m/秒)',
    xRange: [0, 30],
    yRange: [330, 352],
    series: [
      { label: '音速', markers: true, points: [ { x: 0, y: 331.5 }, { x: 10, y: 337.5 }, { x: 15, y: 340.5 }, { x: 20, y: 343.5 }, { x: 30, y: 349.5 } ] },
    ],
    caption: '音速＝331.5＋0.6×気温。気温が高いほど速い。15℃で約340m/秒',
  },
  // 水の加熱曲線。0℃(融解)・100℃(沸騰)で温度が一定になる。
  lf_rika_15: {
    kind: 'lineChart',
    xLabel: '加熱時間',
    yLabel: '温度(℃)',
    xRange: [0, 14],
    yRange: [-20, 130],
    series: [
      { label: '温度', points: [ { x: 0, y: -20 }, { x: 2, y: 0 }, { x: 5, y: 0 }, { x: 9, y: 100 }, { x: 12, y: 100 }, { x: 14, y: 120 } ] },
    ],
    caption: '状態変化（0℃で融解・100℃で沸騰）の間は熱を加えても温度が一定になる',
  },

  // ── 第8章 てこ・輪軸・滑車 ─────────────────────────────
  // てこのつり合い：重さ×距離＝一定（反比例）。600の例。
  lf_rika_16: {
    kind: 'coordinate',
    xRange: [0, 40],
    yRange: [0, 80],
    hyperbolas: [ { k: 600, label: '重さ×距離＝600' } ],
    points: [
      { x: 20, y: 30, label: '30g' },
      { x: 15, y: 40, label: '40g' },
    ],
    caption: 'つり合い＝「おもりの重さ×支点からの距離」が左右で等しい。30g×20cm＝40g×15cm＝600',
  },

  // ── 第9章 水溶液・溶解度 ─────────────────────────────
  // 溶解度曲線。硝酸カリウム・ミョウバンは温度で急増、食塩はほぼ一定。
  lf_rika_17: {
    kind: 'lineChart',
    xLabel: '温度(℃)',
    yLabel: '溶解度(g/水100g)',
    xRange: [0, 80],
    yRange: [0, 180],
    series: [
      { label: '硝酸カリウム', markers: true, points: [ { x: 0, y: 13 }, { x: 20, y: 32 }, { x: 40, y: 64 }, { x: 60, y: 110 }, { x: 80, y: 170 } ] },
      { label: 'ミョウバン', markers: true, points: [ { x: 20, y: 11 }, { x: 40, y: 24 }, { x: 60, y: 57 }, { x: 80, y: 71 } ] },
      { label: '食塩', markers: true, points: [ { x: 0, y: 36 }, { x: 20, y: 36 }, { x: 40, y: 36 }, { x: 60, y: 37 }, { x: 80, y: 38 } ] },
    ],
    caption: '硝酸カリウムは温度で急増→冷やすと結晶が出る。食塩はほぼ一定→水を蒸発させて取り出す',
  },
  // 質量パーセント濃度：食塩20g＋水180g＝10%。
  lf_rika_18: {
    kind: 'pieChart',
    slices: [
      { label: '食塩' , value: 20 },
      { label: '水' , value: 180 },
    ],
    caption: '濃度＝溶質÷水溶液全体×100。食塩20g÷(20＋180)g×100＝10%（分母は全体）',
  },

  // ── 第10章 磁石・電流・電磁石 ─────────────────────────────
  // 電磁石の強さ比較（模式）。電流大・巻き数多・鉄しんありで最強。
  lf_rika_19: {
    kind: 'barChart',
    yLabel: 'クリップ数(相対)',
    bars: [
      { label: 'A' , value: 10 },
      { label: 'B' , value: 20 },
      { label: 'C' , value: 40 },
      { label: 'D' , value: 8 },
    ],
    caption: 'A電池1巻100・B電池2巻100・C電池2巻200鉄しんあり・D鉄しんなし。最強はC、鉄しんなしのDは弱い',
  },

  // ── 第11章 天気と気象 ─────────────────────────────
  // 気温と飽和水蒸気量。気温が高いほど大きい。
  lf_rika_20: {
    kind: 'lineChart',
    xLabel: '気温(℃)',
    yLabel: '飽和水蒸気量(g/m³)',
    xRange: [0, 30],
    yRange: [0, 33],
    series: [
      { label: '飽和水蒸気量', markers: true, points: [ { x: 0, y: 4.8 }, { x: 5, y: 6.8 }, { x: 10, y: 9.4 }, { x: 15, y: 12.8 }, { x: 20, y: 17.3 }, { x: 25, y: 23.1 }, { x: 30, y: 30.4 } ] },
    ],
    caption: '気温が高いほど飽和水蒸気量は大きい。湿度＝水蒸気量÷その気温の飽和水蒸気量×100',
  },
};
