import type { Figure } from './figures';

// 高校受験 理科「電流と回路」拡張ユニット（koko_rika_s071〜koko_rika_s110）の教科書用図解。
// キーは lessons-koko-rika-ext03.ts の figureId と対応（全40課中20課に付与）。
// 回路は circuit（直列＝上辺に素子・下辺に電池／並列＝左に電池・枝を縦に配置）で、
// 電流と電圧の比例関係は coordinate の lines（傾き a＝1/R）で示す。
// すべての数値は「直列＝電流一定・電圧の和」「並列＝電圧一定・電流の和」
// 「直列合成 R＝R₁+R₂」「並列合成 1/R＝1/R₁+1/R₂」「P＝VI」「Q＝Pt」で検算済み。
export const lessonFigsKokoRikaExt03: Record<string, Figure> = {
  // s071：もっとも基本の回路（電池・スイッチ・豆電球が一本道でつながる）
  lf_kokorikaext03_071: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'switch', label: 'スイッチ' },
      { type: 'bulb', label: '豆電球' },
    ],
    battery: { label: '電池（左が＋極）' },
    caption:
      '基本の回路図。電池の記号は「長い線が＋極・短く太い線が−極」。電流は＋極を出て、スイッチ→豆電球→−極へと一本道で流れる。導線は必ず直線と直角で描き、電池・スイッチ・豆電球以外のものは描かない。この一周がつながっていないと電流は流れない。',
  },

  // s072：並列つなぎ（枝分かれ）の回路図
  lf_kokorikaext03_072: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'switch', label: 'スイッチ' }],
    branches: [[{ type: 'bulb', label: '豆電球①' }], [{ type: 'bulb', label: '豆電球②' }]],
    battery: { label: '電池' },
    caption:
      '並列つなぎ。電流の道が枝分かれし、また合流している。枝分かれ→合流があれば並列、一本道なら直列。スイッチは枝分かれの前（幹の部分）にあるので、これを切ると①②の両方が消える。',
  },

  // s075：直列回路の電流はどこでも同じ（6V／10Ω＋20Ω→合成30Ω→0.2A）
  lf_kokorikaext03_075: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'ammeter', label: '0.2A' },
      { type: 'resistor', label: 'R₁ 10Ω' },
      { type: 'resistor', label: 'R₂ 20Ω' },
      { type: 'ammeter', label: '0.2A' },
    ],
    battery: { label: '6V' },
    caption:
      '直列回路の電流。合成抵抗は10＋20＝30Ω、流れる電流は 6÷30＝0.2A。抵抗の前でも後ろでも電流計は同じ0.2Aを示す。電流は途中で減ったり消えたりしない。',
  },

  // s076：直列回路の電圧は分かれて和になる（2V＋4V＝6V）
  lf_kokorikaext03_076: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: 'R₁ 10Ω → 2V' },
      { type: 'resistor', label: 'R₂ 20Ω → 4V' },
    ],
    battery: { label: '電源 6V' },
    caption:
      '直列回路の電圧。電流はどちらも0.2Aなので、R₁にかかる電圧は0.2×10＝2V、R₂には0.2×20＝4V。2＋4＝6Vで電源の電圧に一致する。抵抗が大きいほど大きな電圧が分けられる（10Ω:20Ω＝2V:4V）。',
  },

  // s079：直列3個（9V／5Ω＋10Ω＋15Ω＝30Ω→0.3A、1.5V＋3V＋4.5V＝9V）
  lf_kokorikaext03_079: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '5Ω→1.5V' },
      { type: 'resistor', label: '10Ω→3V' },
      { type: 'resistor', label: '15Ω→4.5V' },
    ],
    battery: { label: '9V（電流0.3A）' },
    caption:
      '抵抗3個の直列。合成抵抗は5＋10＋15＝30Ω、電流は 9÷30＝0.3A で3個とも共通。電圧は 0.3×5＝1.5V、0.3×10＝3V、0.3×15＝4.5V。和は1.5＋3＋4.5＝9Vで電源電圧と一致する。電圧の比5:10:15は抵抗の比そのもの。',
  },

  // s080：並列回路の電圧はどの枝も電源と同じ（12V）
  lf_kokorikaext03_080: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: 'R₁ 20Ω・12V' }],
      [{ type: 'resistor', label: 'R₂ 30Ω・12V' }],
    ],
    battery: { label: '電源 12V' },
    caption:
      '並列回路の電圧。どちらの枝も「電池の＋極側」と「−極側」に直接つながっているので、20Ωにも30Ωにも同じ12Vがかかる。抵抗の大きさが違っても電圧は分かれない。',
  },

  // s081：並列回路の電流は枝に分かれて和になる（0.6A＋0.4A＝1.0A）
  lf_kokorikaext03_081: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'ammeter', label: '幹 1.0A' }],
    branches: [
      [{ type: 'resistor', label: 'R₁ 20Ω' }, { type: 'ammeter', label: '0.6A' }],
      [{ type: 'resistor', label: 'R₂ 30Ω' }, { type: 'ammeter', label: '0.4A' }],
    ],
    battery: { label: '12V' },
    caption:
      '並列回路の電流。各枝は 12÷20＝0.6A、12÷30＝0.4A。幹（枝分かれの前）には合計の0.6＋0.4＝1.0Aが流れる。抵抗が小さい枝ほど多くの電流が流れる（20Ω:30Ω に対し電流は0.6A:0.4A＝3:2で逆比）。',
  },

  // s084：直列と並列の混合（12V／4Ω直列＋（6Ω//12Ω＝4Ω）→合成8Ω→1.5A）
  lf_kokorikaext03_084: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 4Ω（6V）' }],
    branches: [
      [{ type: 'resistor', label: 'R₂ 6Ω・1A' }],
      [{ type: 'resistor', label: 'R₃ 12Ω・0.5A' }],
    ],
    battery: { label: '12V' },
    caption:
      '混合回路。まず並列部分 R₂・R₃ をまとめると 6×12÷(6＋12)＝4Ω。R₁と直列なので全体は4＋4＝8Ω、電流は 12÷8＝1.5A。R₁の電圧は1.5×4＝6V、残りの6Vが並列部にかかる。枝の電流は6÷6＝1A と 6÷12＝0.5A で、和は1.5Aと一致する。',
  },

  // s085：電圧と電流は比例（20Ωの電熱線。傾き a＝1/20＝0.05）
  lf_kokorikaext03_085: {
    kind: 'coordinate',
    xRange: [0, 10.5],
    yRange: [0, 0.6],
    lines: [{ a: 0.05, b: 0, label: '20Ω' }],
    points: [
      { x: 2, y: 0.1, label: '2V・0.10A' },
      { x: 4, y: 0.2 },
      { x: 6, y: 0.3 },
      { x: 8, y: 0.4 },
      { x: 10, y: 0.5, label: '10V・0.50A' },
    ],
    caption:
      '20Ωの電熱線について、電圧（横軸V）を変えながら電流（縦軸A）を測った結果。測定点は原点を通る一直線上に並ぶ＝電流は電圧に比例する（オームの法則）。傾きは 0.5÷10＝0.05 で、これは 1÷20（抵抗の逆数）にあたる。',
  },

  // s087：グラフの傾きと抵抗の関係（5Ω：傾き0.2／10Ω：傾き0.1）
  lf_kokorikaext03_087: {
    kind: 'coordinate',
    xRange: [0, 10.5],
    yRange: [0, 2.2],
    lines: [
      { a: 0.2, b: 0, label: 'A（5Ω）' },
      { a: 0.1, b: 0, label: 'B（10Ω）' },
    ],
    points: [
      { x: 10, y: 2, label: '10V・2A' },
      { x: 10, y: 1, label: '10V・1A' },
    ],
    caption:
      '2本の電熱線A・BのIグラフ。同じ10Vをかけたとき、Aは2A、Bは1A流れる。抵抗は R＝V÷I なので A＝10÷2＝5Ω、B＝10÷1＝10Ω。傾きが急なほど抵抗は小さい（傾き＝1/R）。「傾きが大きい＝抵抗が大きい」と読むのは誤り。',
  },

  // s091：直列の合成抵抗（8V／15Ω＋25Ω＝40Ω→0.2A、3V＋5V＝8V）
  lf_kokorikaext03_091: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'resistor', label: '15Ω→3V' },
      { type: 'resistor', label: '25Ω→5V' },
    ],
    battery: { label: '8V（0.2A）' },
    caption:
      '直列の合成抵抗は単純な足し算 R＝15＋25＝40Ω。電流は 8÷40＝0.2A。各抵抗の電圧は0.2×15＝3V、0.2×25＝5Vで、和の8Vが電源電圧に一致する。直列につなぐと合成抵抗はどの1本よりも必ず大きくなる。',
  },

  // s092：並列の合成抵抗（6V／6Ω・3Ω→合成2Ω、1A＋2A＝3A）
  lf_kokorikaext03_092: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'ammeter', label: '全体 3A' }],
    branches: [
      [{ type: 'resistor', label: '6Ω・1A' }],
      [{ type: 'resistor', label: '3Ω・2A' }],
    ],
    battery: { label: '6V' },
    caption:
      '並列の合成抵抗は 1/R＝1/6＋1/3＝1/6＋2/6＝3/6＝1/2 より R＝2Ω。確かめ算：枝の電流は 6÷6＝1A と 6÷3＝2A、全体は3Aなので R＝6÷3＝2Ω。並列にすると合成抵抗はどの1本よりも必ず小さくなる。',
  },

  // s094：混合回路の合成抵抗（18V／2Ω＋（12Ω//6Ω＝4Ω）＝6Ω→3A）
  lf_kokorikaext03_094: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 2Ω（6V）' }],
    branches: [
      [{ type: 'resistor', label: 'R₂ 12Ω・1A' }],
      [{ type: 'resistor', label: 'R₃ 6Ω・2A' }],
    ],
    battery: { label: '18V（全体3A）' },
    caption:
      '混合回路の合成抵抗は「内側の並列を先にまとめる」。12×6÷(12＋6)＝72÷18＝4Ω。これに R₁ の2Ωを足して全体は6Ω、電流は 18÷6＝3A。R₁の電圧は3×2＝6V、並列部には18−6＝12V。枝は 12÷12＝1A、12÷6＝2A で和は3A。すべて整合する。',
  },

  // s101：同じ2本の抵抗でも直列と並列で電力がまったく違う（電源6V・10Ωと20Ω）
  lf_kokorikaext03_101: {
    kind: 'barChart',
    yLabel: '電力（W）',
    yMax: 4,
    bars: [
      { label: '直列 10Ω', value: 0.4 },
      { label: '直列 20Ω', value: 0.8 },
      { label: '並列 10Ω', value: 3.6 },
      { label: '並列 20Ω', value: 1.8 },
    ],
    caption:
      '電源6Vに10Ωと20Ωをつないだときの各抵抗の電力。直列（合成30Ω・電流0.2A）では 2V×0.2＝0.4W と 4V×0.2＝0.8W で、抵抗が大きい方が電力大。並列（各6V）では 6×0.6＝3.6W と 6×0.3＝1.8W で、抵抗が小さい方が電力大。全体は直列1.2W、並列5.4W。',
  },

  // s102：電熱線による水の温度上昇（14W・水100g → 2℃/分）
  lf_kokorikaext03_102: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水温（℃）',
    xRange: [0, 5],
    yRange: [18, 32],
    series: [
      {
        label: '14Wの電熱線・水100g',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 1, y: 22 },
          { x: 2, y: 24 },
          { x: 3, y: 26 },
          { x: 4, y: 28 },
          { x: 5, y: 30 },
        ],
      },
    ],
    caption:
      '14Wの電熱線（14V・1A）を水100gに入れて加熱したときの水温。1分間に発生する熱量は Q＝14×60＝840J、水100gを1℃上げるには 4.2×100＝420J なので、上昇は840÷420＝2℃/分。5分では 14×300＝4200J、4200÷420＝10℃上がって30℃になる。グラフは直線（熱量は時間に比例）。',
  },

  // s104：電力を2倍にすると温度上昇も2倍（14W と 7W の比較）
  lf_kokorikaext03_104: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水温（℃）',
    xRange: [0, 5],
    yRange: [18, 32],
    series: [
      {
        label: '電熱線A 14Ω・14W',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 1, y: 22 },
          { x: 2, y: 24 },
          { x: 3, y: 26 },
          { x: 4, y: 28 },
          { x: 5, y: 30 },
        ],
      },
      {
        label: '電熱線B 28Ω・7W',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 1, y: 21 },
          { x: 2, y: 22 },
          { x: 3, y: 23 },
          { x: 4, y: 24 },
          { x: 5, y: 25 },
        ],
      },
    ],
    caption:
      '電源14Vに電熱線A（14Ω）とB（28Ω）を並列につなぎ、それぞれ水100gを加熱した。Aは1A・14W、Bは0.5A・7W。上昇はAが2℃/分、Bが1℃/分で、電力の比14:7＝2:1と温度上昇の比2:1が一致する。同じ電圧で並列につないだとき、抵抗が小さい方がよく発熱する。',
  },

  // s106：電流計は直列につなぐ
  lf_kokorikaext03_106: {
    kind: 'circuit',
    layout: 'series',
    series: [
      { type: 'ammeter', label: '電流計（直列）' },
      { type: 'resistor', label: '電熱線' },
    ],
    battery: { label: '電源' },
    caption:
      '電流計は「調べたい部分と一直線になるように」直列につなぐ。電流計の内部抵抗はごく小さく、つないでも回路の電流をほとんど変えない。逆に電流計を電源に直接（並列に）つなぐと大電流が流れて壊れるので絶対にしない。',
  },

  // s107：電圧計は測りたい部分に並列につなぐ
  lf_kokorikaext03_107: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: '電熱線' }],
      [{ type: 'voltmeter', label: '電圧計（並列）' }],
    ],
    battery: { label: '電源' },
    caption:
      '電圧計は「電熱線の両端をはさむように」並列につなぐ。電圧計の内部抵抗は非常に大きく、ほとんど電流を流さないので、つないでも回路の電流はほぼ変わらない。電圧は「2点間の差」なので、必ず両端に橋をかける形になる。',
  },

  // s109：総合演習①（15V／3Ω直列＋（6Ω//3Ω＝2Ω）＝5Ω→3A）
  lf_kokorikaext03_109: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₃ 3Ω（9V）' }],
    branches: [
      [{ type: 'resistor', label: 'R₁ 6Ω・1A' }],
      [{ type: 'resistor', label: 'R₂ 3Ω・2A' }],
    ],
    battery: { label: '15V（全体3A）' },
    caption:
      '総合演習の回路。並列部分は 6×3÷(6＋3)＝18÷9＝2Ω、R₃と直列で全体は3＋2＝5Ω、電流は 15÷5＝3A。R₃の電圧は3×3＝9V、並列部は15−9＝6V、各枝は6÷6＝1A と 6÷3＝2A（和3A）。電力はR₃が9×3＝27W、枝が6W と12W、合計45W＝15×3で一致する。',
  },

  // s110：総合演習②（10Ωと40ΩのIグラフ。傾き0.1と0.025）
  lf_kokorikaext03_110: {
    kind: 'coordinate',
    xRange: [0, 21],
    yRange: [0, 2.2],
    lines: [
      { a: 0.1, b: 0, label: 'A（10Ω）' },
      { a: 0.025, b: 0, label: 'B（40Ω）' },
    ],
    points: [
      { x: 20, y: 2, label: '20V・2A' },
      { x: 20, y: 0.5, label: '20V・0.5A' },
    ],
    caption:
      '電熱線A・BのIグラフ。20Vのとき A は2A、B は0.5A なので A＝20÷2＝10Ω、B＝20÷0.5＝40Ω。この2本を20Vの電源に並列につなぐと合成は 10×40÷50＝8Ω・電流2.5A・全電力50W。直列につなぐと合成50Ω・電流0.4A・全電力8Wとなり、同じ2本でもつなぎ方で消費電力は大きく変わる。',
  },
};
