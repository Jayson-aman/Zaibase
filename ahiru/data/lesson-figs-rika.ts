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

  // ── 第12章 ものの燃え方 ─────────────────────────────
  // 集気びんの中でろうそくを燃やしたときの酸素・二酸化炭素の割合の変化。
  lf_rika_21: {
    kind: 'lineChart',
    xLabel: '燃焼時間',
    yLabel: '気体の割合(%)',
    xRange: [0, 5],
    yRange: [0, 25],
    series: [
      { label: '酸素', markers: true, points: [ { x: 0, y: 21 }, { x: 1, y: 20 }, { x: 2, y: 19 }, { x: 3, y: 18 }, { x: 4, y: 17.2 }, { x: 5, y: 17 } ] },
      { label: '二酸化炭素', markers: true, points: [ { x: 0, y: 0.04 }, { x: 1, y: 0.8 }, { x: 2, y: 1.6 }, { x: 3, y: 2.4 }, { x: 4, y: 3.2 }, { x: 5, y: 3.5 } ] },
    ],
    caption: '火が消えても酸素はゼロにならず約17%残る。ちっ素（約78%）は変化しない',
  },

  // ── 第13章 気体の発生と性質 ─────────────────────────────
  // 亜鉛にうすい塩酸を加えたときの水素発生の化学反応式。
  lf_rika_22: {
    kind: 'chemEquation',
    equation: 'Zn + 2HCl -> ZnCl2 + H2',
    caption: '亜鉛とうすい塩酸の反応で水素が発生する。水にとけにくいので水上置換法で集める',
  },
  // 気体の重さ（空気=1とした比重）の比較。
  lf_rika_23: {
    kind: 'barChart',
    yLabel: '空気=1としたときの重さ',
    bars: [
      { label: '水素' , value: 0.07 },
      { label: 'アンモニア' , value: 0.6 },
      { label: 'ちっ素' , value: 0.97 },
      { label: '酸素' , value: 1.11 },
      { label: '二酸化炭素' , value: 1.53 },
    ],
    caption: '1より小さい気体は空気より軽く上に集まりやすく、1より大きい気体は下にたまりやすい',
  },

  // ── 第14章 動物の分類 ─────────────────────────────
  // セキツイ動物5類の心臓の部屋の数（心房+心室）の比較。
  lf_rika_24: {
    kind: 'barChart',
    yLabel: '心臓の部屋の数',
    bars: [
      { label: '魚類' , value: 2 },
      { label: '両生類' , value: 3 },
      { label: 'は虫類' , value: 3 },
      { label: '鳥類' , value: 4 },
      { label: 'ほ乳類' , value: 4 },
    ],
    caption: '進化的に新しいなかまほど心臓の部屋が増え、動脈血と静脈血が分かれて効率がよくなる',
  },

  // ── 第15章 こん虫の一生と季節 ─────────────────────────────
  // 日本の月別平均気温（東京付近の目安）。季節の生き物の活動と対応させる。
  lf_rika_25: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '平均気温(℃)',
    xRange: [1, 12],
    yRange: [0, 30],
    series: [
      { label: '平均気温', markers: true, points: [ { x: 1, y: 5.4 }, { x: 2, y: 6.1 }, { x: 3, y: 9.4 }, { x: 4, y: 14.3 }, { x: 5, y: 18.8 }, { x: 6, y: 21.9 }, { x: 7, y: 25.7 }, { x: 8, y: 27.4 }, { x: 9, y: 23.3 }, { x: 10, y: 18.0 }, { x: 11, y: 12.5 }, { x: 12, y: 7.7 } ] },
    ],
    caption: '気温の変化と季節の生き物（春の発生・夏のセミ・秋の渡り・冬の冬眠）の時期は対応している',
  },

  // ── 第16章 花のつくりと受粉 ─────────────────────────────
  // 虫媒花と風媒花の花粉数の違い（1花あたりの目安・単位：万粒）。
  lf_rika_26: {
    kind: 'barChart',
    yLabel: '花粉の数(万粒/花・目安)',
    bars: [
      { label: '虫媒花(アブラナ)' , value: 0.3 },
      { label: '風媒花(スギ)' , value: 40 },
    ],
    caption: '風媒花は運び手（虫）がいない不確実さを、花粉の数を非常に多くすることで補っている',
  },

  // ── 第17章 天体の日周運動・年周運動 ─────────────────────────────
  // 夏のある1日の太陽の高度変化（日周運動）。南中（正午ごろ）で最大になる。
  lf_rika_28: {
    kind: 'lineChart',
    xLabel: '時刻(時)',
    yLabel: '太陽の高度(度)',
    xRange: [4, 20],
    yRange: [0, 80],
    series: [
      { label: '太陽の高度', markers: true, points: [ { x: 5, y: 0 }, { x: 8, y: 30 }, { x: 12, y: 78 }, { x: 16, y: 40 }, { x: 19, y: 0 } ] },
    ],
    caption: '太陽の高度は南中（真南にくる、正午ごろ）で最大になる。日周運動は1時間に約15度',
  },
  // 星の年周運動：経過日数と見かけの移動角度（1日に約1度、1か月に約30度）。
  lf_rika_27: {
    kind: 'lineChart',
    xLabel: '経過日数(日)',
    yLabel: '見かけの移動角度(度)',
    xRange: [0, 365],
    yRange: [0, 360],
    series: [
      { label: '移動角度', markers: true, points: [ { x: 0, y: 0 }, { x: 30, y: 30 }, { x: 90, y: 90 }, { x: 180, y: 180 }, { x: 270, y: 270 }, { x: 365, y: 360 } ] },
    ],
    caption: '同じ時刻に見える星座の位置は1日に約1度・1か月に約30度、西へ動いて見える（年周運動）',
  },

  // ── 第18章 流水のはたらきと地層 ─────────────────────────────
  // 川原の石の大きさ（上流・中流・下流）の比較。
  lf_rika_29: {
    kind: 'barChart',
    yLabel: '石の大きさ(直径cm・目安)',
    bars: [
      { label: '上流' , value: 15 },
      { label: '中流' , value: 8 },
      { label: '下流' , value: 3 },
    ],
    caption: '下流ほど運ばれる間にぶつかり合って角がとれ、丸く小さくなる',
  },
  // 化石をふくむ地層の柱状図（示準化石・示相化石の例）。
  lf_rika_30: {
    kind: 'stratum',
    columns: [
      {
        label: '地点A',
        topLabel: '地表',
        layers: [
          { name: '砂岩（シジミの化石）', thickness: 3, pattern: 'sand' },
          { name: '泥岩（アンモナイトの化石）', thickness: 4, pattern: 'mud' },
          { name: '石灰岩（サンゴの化石）', thickness: 3, pattern: 'lime' },
        ],
      },
    ],
    caption: 'アンモナイトは示準化石（中生代とわかる）、サンゴ・シジミは示相化石（当時の環境がわかる）',
  },

  // ── 第19章 人体の呼吸と血液循環 ─────────────────────────────
  // 血液の体積の内訳（血球と血しょうのおおよその割合）。
  lf_rika_31: {
    kind: 'pieChart',
    slices: [
      { label: '血球(赤血球など)' , value: 45 },
      { label: '血しょう' , value: 55 },
    ],
    caption: '血液は血球（おもに赤血球）が約45%、液体成分の血しょうが約55%を占める',
  },

  // ── 第20章 実験器具と観察 ─────────────────────────────
  // 接眼レンズ×対物レンズの組み合わせによる顕微鏡の倍率一覧。
  lf_rika_32: {
    kind: 'barChart',
    yLabel: '倍率',
    bars: [
      { label: '10×4' , value: 40 },
      { label: '10×10' , value: 100 },
      { label: '10×40' , value: 400 },
      { label: '15×40' , value: 600 },
    ],
    caption: '顕微鏡の倍率＝接眼レンズの倍率×対物レンズの倍率',
  },

  // ── 第21章 環境問題と生物多様性 ─────────────────────────────
  // 生物濃縮：栄養段階が上がるほど体内の汚染物質濃度が高くなる（相対値）。
  lf_rika_33: {
    kind: 'barChart',
    yLabel: '体内の濃度(相対値)',
    bars: [
      { label: 'プランクトン' , value: 1 },
      { label: '小魚' , value: 10 },
      { label: '大型の魚' , value: 100 },
      { label: '鳥類' , value: 1000 },
    ],
    caption: '分解されにくい物質は食物連鎖を通じて上位の生物ほど高濃度に蓄積される（生物濃縮）',
  },

  // ── 第22章 火山と鉱物 ─────────────────────────────
  // 成層火山のイメージ（円すい形。溶岩と火山灰が交互に積み重なってできる）。
  lf_rika_34: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '火口の半径', height: '山の高さ', slant: '斜面' },
    caption: '成層火山（例：富士山）は溶岩の流出と噴火（火山灰など）をくり返し、円すい形に積み重なってできる',
  },

  // ── 追加バッチ（カバレッジ拡充） ─────────────────────────────

  // 第1章 植物：入試例題1（呼吸量・見かけの光合成量・真の光合成量）
  lf_rika_35: {
    kind: 'barChart',
    yLabel: 'CO₂量(mg/時間)',
    bars: [
      { label: '呼吸量(暗所)', value: 2 },
      { label: '見かけの光合成量', value: 6 },
      { label: '真の光合成量', value: 8 },
    ],
    caption: '真の光合成量＝見かけの光合成量＋呼吸量＝6＋2＝8mg/時間',
  },

  // 第2章 電気回路：電力と発熱量（Q=P×t、500Wのストーブ）
  lf_rika_36: {
    kind: 'lineChart',
    xLabel: '使用時間(分)',
    yLabel: '発熱量(kJ)',
    xRange: [0, 10],
    yRange: [0, 320],
    series: [
      { label: '500Wの電気ストーブ', markers: true, points: [ { x: 0, y: 0 }, { x: 10, y: 300 } ] },
    ],
    caption: 'Q＝P×t。500W×600秒(10分)＝300,000J＝300kJ。原点を通る比例のグラフになる',
  },
  // 第2章 電気回路：入試例題1（R1直列＋R2/R3並列、電源30V）
  lf_rika_37: {
    kind: 'circuit',
    layout: 'parallel',
    series: [ { type: 'resistor', label: 'R₁ 10Ω' } ],
    branches: [
      [ { type: 'resistor', label: 'R₂ 15Ω' } ],
      [ { type: 'resistor', label: 'R₃ 30Ω' } ],
    ],
    battery: { label: '30V' },
    caption: 'R₂とR₃の並列合成10Ω＋R₁10Ω＝20Ω。全体の電流＝30÷20＝1.5A、R₁の電圧＝15V',
  },

  // 第3章 化学変化：密度の比較（木・水・アルミニウム・鉄）
  lf_rika_38: {
    kind: 'barChart',
    yLabel: '密度(g/cm³)',
    bars: [
      { label: '木', value: 0.5 },
      { label: '水', value: 1.0 },
      { label: 'アルミニウム', value: 2.7 },
      { label: '鉄', value: 7.9 },
    ],
    caption: '密度＝質量÷体積。密度が大きいほど同じ体積で重い。54g・20cm³の物体はアルミニウム(2.7g/cm³)',
  },
  // 第3章 化学変化：pHスケール（酸性・中性・アルカリ性）
  lf_rika_39: {
    kind: 'numberLine',
    min: 0,
    max: 14,
    step: 2,
    points: [
      { x: 0, label: '酸性(強)' },
      { x: 7, label: '中性' },
      { x: 14, label: 'アルカリ性(強)' },
    ],
    caption: 'pHが7より小さいほど酸性が強く、7より大きいほどアルカリ性が強い。pH＝7は中性（BTB液は緑色）',
  },
  // 第3章 化学変化：入試例題1（石灰石＋塩酸→CO₂、質量保存）
  lf_rika_40: {
    kind: 'chemEquation',
    equation: 'CaCO3 + 2HCl -> CaCl2 + H2O + CO2',
    caption: '石灰石（炭酸カルシウム）にうすい塩酸を加えると二酸化炭素が発生する。密閉していなければ発生したCO₂の分だけ質量が減る',
  },
  // 第3章 化学変化：MAXレベル（水の電気分解）
  lf_rika_41: {
    kind: 'chemEquation',
    equation: '2H2O -> 2H2 + O2',
    caption: '水の電気分解。陰極に水素、陽極に酸素が発生し、体積比は水素：酸素＝2：1',
  },

  // 第4章 天体・地層：太陽系8惑星の順序
  lf_rika_42: {
    kind: 'numberLine',
    min: 0,
    max: 9,
    step: 1,
    points: [
      { x: 0, label: '太陽' },
      { x: 1, label: '水星' },
      { x: 2, label: '金星' },
      { x: 3, label: '地球' },
      { x: 4, label: '火星' },
      { x: 5, label: '木星' },
      { x: 6, label: '土星' },
      { x: 7, label: '天王星' },
      { x: 8, label: '海王星' },
    ],
    caption: '太陽から近い順に「水金地火木土天海」。水星・金星が内惑星、火星より外側が外惑星',
  },
  // 第4章 天体・地層：月の満ち欠けのサイクル（模式）
  lf_rika_43: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 180, label: '新月' },
      { angle: 135, label: '三日月' },
      { angle: 90, label: '上弦の月' },
      { angle: 45, label: '満ちていく月' },
      { angle: 0, label: '満月' },
      { angle: 315, label: '欠けていく月' },
      { angle: 270, label: '下弦の月' },
      { angle: 225, label: '三日月' },
    ],
    caption: '月は地球のまわりを公転しながら太陽光の当たる向きが変わり、新月→上弦→満月→下弦→新月と満ち欠けする（周期約29.5日）',
  },
  // 第4章 天体・地層：季節ごとの南中高度（北緯35°）
  lf_rika_44: {
    kind: 'barChart',
    yLabel: '南中高度(度)',
    bars: [
      { label: '冬至', value: 31.6 },
      { label: '春分・秋分', value: 55 },
      { label: '夏至', value: 78.4 },
    ],
    caption: '北緯35°での南中高度。夏至90－35＋23.4＝78.4°、冬至90－35－23.4＝31.6°、春秋分90－35＝55°',
  },

  // 第5章 力・運動：エネルギー保存（高さと位置・運動エネルギー）
  lf_rika_45: {
    kind: 'lineChart',
    xLabel: '高さ(m)',
    yLabel: 'エネルギー(J)',
    xRange: [0, 2],
    yRange: [0, 1050],
    series: [
      { label: '位置エネルギー', color: '#0EA5E9', markers: true, points: [ { x: 0, y: 0 }, { x: 2, y: 1000 } ] },
      { label: '運動エネルギー', color: '#E11D48', markers: true, points: [ { x: 0, y: 1000 }, { x: 2, y: 0 } ] },
    ],
    caption: '摩擦がなければ位置エネルギー＋運動エネルギーは一定（エネルギー保存の法則）。高い位置ほど位置エネルギー大・運動エネルギー小',
  },
  // 第5章 力・運動：入試例題3（浮力の計算）
  lf_rika_46: {
    kind: 'barChart',
    yLabel: '力(N)',
    bars: [
      { label: '重力', value: 5.4 },
      { label: '浮力', value: 2.0 },
      { label: '見かけの重さ', value: 3.4 },
    ],
    caption: '密度2.7g/cm³・体積200cm³のアルミニウム。重力5.4N－浮力2.0N＝見かけの重さ3.4N',
  },

  // 第6章 生態系・人体・遺伝：消化器官（口→食道→胃→小腸→大腸）
  lf_rika_47: {
    kind: 'bioDiagram',
    template: 'digestiveSystem',
    caption: '口→食道→胃→肝臓・すい臓からの消化液→小腸（吸収）→大腸→こう門の順に食べ物が通る',
  },
  // 第6章 生態系・人体・遺伝：目のつくり
  lf_rika_48: {
    kind: 'bioDiagram',
    template: 'eye',
    caption: '角膜から入った光は水晶体で屈折し、網膜に像を結ぶ。視神経が信号を脳へ伝える',
  },
  // 第6章 生態系・人体・遺伝：入試例題3（F2・400粒のうち丸・しわ）
  lf_rika_49: {
    kind: 'barChart',
    yLabel: '種子の数(粒)',
    bars: [
      { label: '丸(優性)', value: 300 },
      { label: 'しわ(劣性)', value: 100 },
    ],
    caption: 'F2の表現型比は丸：しわ＝3：1。400粒のうちしわは400×1/4＝100粒、丸は300粒',
  },

  // 第7章 光・音・熱：入試例題1（鏡にうつる像までの距離）
  lf_rika_50: {
    kind: 'numberLine',
    min: -1,
    max: 7,
    step: 1,
    points: [
      { x: 0, label: '人' },
      { x: 3, label: '鏡' },
      { x: 6, label: '像' },
    ],
    caption: '鏡の奥、物体と鏡の距離と同じ位置に像ができる。人から像までの見かけの距離は3＋3＝6m',
  },
  // 第7章 光・音・熱：MAXレベル（凸レンズの写像公式、f=10cm）
  lf_rika_51: {
    kind: 'lineChart',
    xLabel: '物体距離a(cm)',
    yLabel: '像距離b(cm)',
    xRange: [10, 45],
    yRange: [0, 35],
    series: [
      { label: '焦点距離10cmのレンズ', markers: true, points: [ { x: 15, y: 30 }, { x: 20, y: 20 }, { x: 30, y: 15 }, { x: 40, y: 13.3 } ] },
    ],
    caption: '1/a＋1/b＝1/f（f＝10cm）。a＝20cm（焦点距離の2倍）で実物と同じ大きさの実像ができる（a＝b＝20）',
  },

  // 第8章 てこ・輪軸・滑車：棒の重さと支点・重心・右端
  lf_rika_52: {
    kind: 'numberLine',
    min: 0,
    max: 60,
    step: 10,
    points: [
      { x: 0, label: '支点' },
      { x: 30, label: '重心(120g)' },
      { x: 60, label: '右端(F)' },
    ],
    caption: '長さ60cm・重さ120gの棒。F×60＝120×30よりF＝60g',
  },
  // 第8章 てこ・輪軸・滑車：輪軸のつり合い（力×半径が一定）
  lf_rika_53: {
    kind: 'coordinate',
    xRange: [0, 40],
    yRange: [0, 80],
    hyperbolas: [ { k: 600, label: '力×半径＝600' } ],
    points: [
      { x: 30, y: 20, label: '大輪 20g' },
      { x: 10, y: 60, label: '小輪 60g' },
    ],
    caption: '輪軸のつり合いは「力×半径」が一定（てこと同じ考え方）。20g×30cm＝60g×10cm＝600',
  },
  // 第8章 てこ・輪軸・滑車：動滑車の数と必要な力
  lf_rika_54: {
    kind: 'barChart',
    yLabel: '必要な力(g)',
    bars: [
      { label: '動滑車0個', value: 200 },
      { label: '動滑車1個', value: 100 },
      { label: '動滑車2個', value: 50 },
    ],
    caption: '200gの物体を持ち上げるのに必要な力＝重さ÷(2×動滑車の数)。動滑車が増えるほど力は小さくなる',
  },
  // 第8章 てこ・輪軸・滑車：入試例題1（複数おもりのてこ）
  lf_rika_55: {
    kind: 'numberLine',
    min: -50,
    max: 40,
    step: 10,
    points: [
      { x: -40, label: '30g' },
      { x: -20, label: '60g' },
      { x: 0, label: '支点' },
      { x: 30, label: '80g' },
    ],
    caption: '左のモーメント合計＝60×20＋30×40＝2400。右：x×30＝2400よりx＝80g',
  },
  // 第8章 てこ・輪軸・滑車：MAXレベル（2段てこの倍率）
  lf_rika_56: {
    kind: 'barChart',
    yLabel: '力(g)',
    bars: [
      { label: '力点', value: 10 },
      { label: 'てこA出力', value: 40 },
      { label: 'てこB出力(最終)', value: 120 },
    ],
    caption: '連結したてこの倍率はかけ算になる。10g→(4倍)→40g→(3倍)→120g、全体で12倍',
  },

  // 第9章 水溶液：再結晶（硝酸カリウム80℃→20℃）
  lf_rika_57: {
    kind: 'barChart',
    yLabel: '硝酸カリウムの量(g)',
    bars: [
      { label: '80℃でとけていた量', value: 170 },
      { label: '20℃でとける量', value: 32 },
      { label: '出てくる結晶', value: 138 },
    ],
    caption: '水100gの飽和水溶液を80℃から20℃に冷やすと170－32＝138gの結晶が出てくる',
  },
  // 第9章 水溶液：入試例題1（8%→水を加えて5%に）
  lf_rika_58: {
    kind: 'pieChart',
    slices: [
      { label: '食塩', value: 12 },
      { label: '水', value: 228 },
    ],
    caption: '8％の食塩水150gに水90gを加えると全体240g・食塩12gで濃度5％になる（12÷240×100＝5％）',
  },
  // 第9章 水溶液：MAXレベル（水を蒸発させた後の結晶量）
  lf_rika_59: {
    kind: 'barChart',
    yLabel: '硝酸カリウムの量(g)',
    bars: [
      { label: 'はじめにとけていた量', value: 64 },
      { label: '水50g蒸発後にとける量', value: 32 },
      { label: '出てくる結晶', value: 32 },
    ],
    caption: '40℃の飽和水溶液(水100g＋硝酸カリウム64g)から水を50g蒸発させると、とける量が半分(32g)になり32gの結晶が出る',
  },

  // 第11章 天気と気象：入試例題2（露点の内挿）
  lf_rika_60: {
    kind: 'lineChart',
    xLabel: '気温(℃)',
    yLabel: '飽和水蒸気量(g/m³)',
    xRange: [7, 11],
    yRange: [8, 10],
    series: [
      { label: '飽和水蒸気量', markers: true, points: [ { x: 8, y: 8.3 }, { x: 10, y: 9.4 } ] },
    ],
    caption: '水蒸気量8.65g/m³になる温度が露点。8℃で8.3、10℃で9.4なので露点はおよそ9℃前後',
  },

  // 第12章 ものの燃え方：発火点の比較
  lf_rika_61: {
    kind: 'barChart',
    yLabel: '発火点(℃)',
    bars: [
      { label: '紙', value: 290 },
      { label: 'ガソリン', value: 300 },
      { label: 'アルコール', value: 400 },
      { label: '木材', value: 435 },
    ],
    caption: '発火点が低い物質ほど低い温度で燃え始め、危険性が高い（木材の発火点は約400〜470℃の目安で435とした）',
  },
  // 第12章 ものの燃え方：空気の成分の割合
  lf_rika_62: {
    kind: 'pieChart',
    slices: [
      { label: 'ちっ素', value: 78 },
      { label: '酸素', value: 21 },
      { label: 'その他(アルゴン等)', value: 1 },
    ],
    caption: '空気の体積の割合。二酸化炭素は約0.04％とごくわずかで「その他」に含まれる',
  },
  // 第12章 ものの燃え方：入試例題3（集気びんの容積と燃焼時間）
  lf_rika_63: {
    kind: 'lineChart',
    xLabel: '集気びんの容積(mL)',
    yLabel: '燃える時間(秒)',
    xRange: [0, 2000],
    yRange: [0, 170],
    series: [
      { label: '燃焼時間', markers: true, points: [ { x: 500, y: 40 }, { x: 1000, y: 80 }, { x: 2000, y: 160 } ] },
    ],
    caption: 'びんの容積(空気の量)と燃える時間はほぼ比例する',
  },

  // 第13章 気体の発生と性質：酸素の発生（過酸化水素水の分解）
  lf_rika_64: {
    kind: 'chemEquation',
    equation: '2H2O2 -> 2H2O + O2',
    caption: '二酸化マンガンを触媒として過酸化水素水（オキシドール）が分解し、酸素が発生する',
  },
  // 第13章 気体の発生と性質：入試例題2（亜鉛の質量と水素の発生量）
  lf_rika_65: {
    kind: 'lineChart',
    xLabel: '亜鉛の質量(g)',
    yLabel: '発生する水素の体積(L)',
    xRange: [0, 6.5],
    yRange: [0, 2.6],
    series: [
      { label: '水素の発生量', markers: true, points: [ { x: 0, y: 0 }, { x: 3.25, y: 1.2 }, { x: 6.5, y: 2.4 } ] },
    ],
    caption: '亜鉛の質量と発生する水素の体積は比例する。3.25g→1.2L、2倍の6.5g→2.4L',
  },

  // 第14章 動物の分類：あしの数の比較（昆虫類・クモ類・甲殻類）
  lf_rika_66: {
    kind: 'barChart',
    yLabel: 'あしの数(本)',
    bars: [
      { label: '昆虫類', value: 6 },
      { label: 'クモ類', value: 8 },
      { label: '甲殻類', value: 10 },
    ],
    caption: 'あしが6本＝昆虫類。クモ類は8本、甲殻類(エビ・カニ)は10本前後でどちらも昆虫ではない',
  },
  // 第14章 動物の分類：昆虫のからだのつくり
  lf_rika_67: {
    kind: 'bioDiagram',
    template: 'insectBody',
    caption: '昆虫のからだは頭部・胸部・腹部の3つに分かれ、あし6本・はねはすべて胸部につく',
  },

  // 第15章 こん虫の一生と季節：変態のステージ（完全変態）
  lf_rika_68: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: '卵' },
      { x: 2, label: '幼虫' },
      { x: 3, label: 'さなぎ' },
      { x: 4, label: '成虫' },
    ],
    caption: '完全変態は卵→幼虫→さなぎ→成虫の4段階。不完全変態はさなぎ（3）の段階がなく、卵→幼虫→成虫の3段階',
  },
  // 第15章 こん虫の一生と季節：セミの幼虫期間と成虫期間の対比
  lf_rika_69: {
    kind: 'barChart',
    yLabel: '期間(日・目安)',
    bars: [
      { label: '幼虫(土の中・最大17年)', value: 6205 },
      { label: '成虫(地上・1〜2週間)', value: 14 },
    ],
    caption: 'セミは一生の大部分（数年〜17年）を土の中の幼虫として過ごし、地上の成虫期間はごくわずか',
  },
  // 第15章 こん虫の一生と季節：MAXレベル（積算温度）
  lf_rika_70: {
    kind: 'lineChart',
    xLabel: '経過日数(日)',
    yLabel: '積算温度(℃・累積)',
    xRange: [0, 3],
    yRange: [0, 22],
    series: [
      { label: '積算温度', markers: true, points: [ { x: 1, y: 5 }, { x: 2, y: 12 }, { x: 3, y: 20 } ] },
    ],
    caption: '1日目5℃・2日目7℃・3日目8℃の気温を足し合わせていく（積算温度）。一定値を超えるとサクラが開花すると予測される',
  },

  // 第16章 花のつくりと受粉：花のつくり
  lf_rika_71: {
    kind: 'bioDiagram',
    template: 'flower',
    caption: '外側から「がく→花弁→おしべ(やく)→めしべ(柱頭・花柱・子房・胚珠)」の順に並ぶ',
  },
  // 第16章 花のつくりと受粉：種子のつくり
  lf_rika_72: {
    kind: 'bioDiagram',
    template: 'seed',
    caption: '受精後、胚珠は種子になる。種皮の中に子葉・幼根・幼芽をふくむ胚が入っている',
  },

  // 第17章 天体の日周運動・年周運動：経度差と南中時刻のずれ
  lf_rika_73: {
    kind: 'lineChart',
    xLabel: '経度差(度)',
    yLabel: '時刻差(分)',
    xRange: [0, 30],
    yRange: [0, 130],
    series: [
      { label: '南中時刻のずれ', markers: true, points: [ { x: 0, y: 0 }, { x: 15, y: 60 }, { x: 30, y: 120 } ] },
    ],
    caption: '経度1度につき時刻は4分ずれる。東経150度は明石(東経135度)より15度東にあるため南中が60分早い',
  },
  // 第17章 天体の日周運動・年周運動：MAXレベル（恒星時と太陽時の累積差）
  lf_rika_74: {
    kind: 'lineChart',
    xLabel: '経過日数(日)',
    yLabel: '恒星時との差(分・累積)',
    xRange: [0, 365],
    yRange: [0, 1500],
    series: [
      { label: '太陽時と恒星時の差', markers: true, points: [ { x: 0, y: 0 }, { x: 100, y: 400 }, { x: 200, y: 800 }, { x: 365, y: 1460 } ] },
    ],
    caption: '1日あたり約4分のズレが365日積み重なると約1460分（≒24.3時間）、ほぼ1日分になる',
  },

  // 第18章 流水のはたらきと地層：MAXレベル（流速の2乗と運搬できる粒の重さ）
  lf_rika_75: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 9],
    parabolas: [ { a: 1, label: '運べる重さ∝流速²' } ],
    caption: '流水が運べる粒の重さは流速のおよそ2乗に比例する。流速が2倍になると運べる重さは約4倍以上になる',
  },

  // 第19章 人体の呼吸と血液循環：心臓のつくり
  lf_rika_76: {
    kind: 'bioDiagram',
    template: 'heart',
    caption: '心臓は右心房・右心室・左心房・左心室の2心房2心室。弁が血液の逆流を防ぐ',
  },
  // 第19章 人体の呼吸と血液循環：入試例題3（脈拍数の比較）
  lf_rika_77: {
    kind: 'barChart',
    yLabel: '心拍数(回/分)',
    bars: [
      { label: '安静時の例(15秒で18回)', value: 72 },
      { label: '運動直後の例(10秒で20回)', value: 120 },
    ],
    caption: '15秒18回→1分72回(18×4)。運動直後は10秒20回→1分120回(20×6)と大きく増加する',
  },

  // 第20章 理科の実験器具と観察：顕微鏡の倍率一覧
  lf_rika_78: {
    kind: 'barChart',
    yLabel: '倍率',
    bars: [
      { label: '10×4', value: 40 },
      { label: '10×10', value: 100 },
      { label: '10×40', value: 400 },
      { label: '15×40', value: 600 },
    ],
    caption: '顕微鏡の倍率＝接眼レンズの倍率×対物レンズの倍率',
  },

  // 第22章 火山のしくみと鉱物：マグマの粘性と火山の形
  lf_rika_79: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '盾状火山' },
      { x: 2, label: '成層火山' },
      { x: 3, label: '溶岩ドーム' },
    ],
    caption: 'マグマの粘性は盾状火山＜成層火山＜溶岩ドームの順に大きくなる。粘性が大きいほど爆発的な噴火になる',
  },
};
