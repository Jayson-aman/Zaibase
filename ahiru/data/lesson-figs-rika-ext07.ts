import type { Figure } from './figures';

// 中学受験理科 拡張ユニットVII「物理：電気回路」（rika_s211〜s255）専用の図解データ。
// lessons-rika-ext07.ts の各Lessonのsections[].figureIdから参照される。
export const lessonFigsRikaExt07: Record<string, Figure> = {
  // ============ 1. 電流・電圧・抵抗の基本 ============
  // s211: 電流計は回路に直列に接続する
  r7f_s211: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'bulb', label: '豆電球' }, { type: 'ammeter' }],
    battery: { label: '電源' },
    caption: '電流計は回路に直列につなぐ。豆電球を流れる電流の大きさをそのまま測定できる',
  },
  // s212: 電圧計は測定したい部分に並列に接続する
  r7f_s212: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R 10Ω' }],
    branches: [[{ type: 'voltmeter' }]],
    battery: { label: '電源' },
    caption: '電圧計は測定したい部分(R)に並列につなぐ。電圧計自体はほとんど電流を流さない',
  },
  // s213: オームの法則 V=IR（20Ωに4A→80V）
  r7f_s213: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'R 20Ω' }, { type: 'ammeter', label: '4A' }],
    battery: { label: 'V=IR=80V' },
    caption: '20Ωの抵抗に4Aの電流が流れているとき、V＝I×R＝20×4＝80V',
  },
  // s214: オームの法則の逆算（12V・3A→R=4Ω）
  r7f_s214: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'R＝?' }, { type: 'ammeter', label: '3A' }],
    battery: { label: '12V' },
    caption: '12Vの電源で3Aの電流が流れた。R＝V÷I＝12÷3＝4Ω',
  },
  // s215: 電圧-電流グラフの読み取り（R1=8Ω、R2=4Ω）
  r7f_s215: {
    kind: 'lineChart',
    xLabel: '電圧(V)',
    yLabel: '電流(A)',
    xRange: [0, 5],
    yRange: [0, 1.2],
    series: [
      { label: 'R₁(傾き急=抵抗小　4Ω)', markers: true, points: [{ x: 0, y: 0 }, { x: 2, y: 0.5 }, { x: 4, y: 1 }] },
      { label: 'R₂(傾き緩=抵抗大　8Ω)', markers: true, points: [{ x: 0, y: 0 }, { x: 4, y: 0.5 }] },
    ],
    caption: 'R＝V÷I。R₂は電圧4V・電流0.5Aの点を通るのでR＝4÷0.5＝8Ω。傾きが緩やかなほど抵抗が大きい',
  },
  // s216: 導線の長さ・断面積と抵抗（8Ω→長さ1/2・断面積2倍→2Ω）
  r7f_s216: {
    kind: 'barChart',
    yLabel: '抵抗(Ω)',
    bars: [
      { label: '元の導線(長さL・断面積A)', value: 8 },
      { label: '長さ1/2倍・断面積2倍', value: 2 },
    ],
    caption: '抵抗は長さに比例し断面積に反比例。8Ω×(1/2)×(1/2)＝2Ω。4Vをかけると電流は4÷2＝2A',
  },

  // ============ 2. 直列回路 ============
  // s217: 直列回路の基本（R1=5Ω,R2=15Ω,V=20V）
  r7f_s217: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'R₁ 5Ω' }, { type: 'resistor', label: 'R₂ 15Ω' }],
    battery: { label: '20V' },
    caption: '合成抵抗＝5＋15＝20Ω。電流＝20÷20＝1A（回路のどこでも同じ）',
  },
  // s218: 直列3つの抵抗（R1=2,R2=3,R3=5Ω,V=20V）
  r7f_s218: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'R₁ 2Ω' }, { type: 'resistor', label: 'R₂ 3Ω' }, { type: 'resistor', label: 'R₃ 5Ω' }],
    battery: { label: '20V' },
    caption: '合成抵抗＝2＋3＋5＝10Ω。電流＝20÷10＝2A。V₁＝4V,V₂＝6V,V₃＝10V（合計20V）',
  },
  // s219: 直列の電圧分配（R1=4,R2=12Ω,V=24V）
  r7f_s219: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'R₁ 4Ω(6V)' }, { type: 'resistor', label: 'R₂ 12Ω(18V)' }],
    battery: { label: '24V' },
    caption: 'V₁:V₂＝R₁:R₂＝4:12＝1:3。V₁＝6V,V₂＝18V（抵抗が大きいほど電圧も大きい＝正比）',
  },
  // s220: 乾電池の直列つなぎ（1.5V×3＝4.5V）
  r7f_s220: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'R 9Ω' }],
    battery: { label: '4.5V(1.5V×3個)', cells: 3 },
    caption: '電池3個を直列につなぐと4.5V。R＝9Ωなら電流＝4.5÷9＝0.5A',
  },
  // s221: 直列に抵抗を追加すると電流が減る（10Ω→20Ω, V=20V一定）
  r7f_s221: {
    kind: 'barChart',
    yLabel: '電流(A)',
    bars: [
      { label: '抵抗1個(10Ω)', value: 2 },
      { label: '抵抗2個を直列で追加(20Ω)', value: 1 },
    ],
    caption: 'V＝20V一定。合成抵抗が10Ω→20Ωに増えると、電流は2A→1Aに減る',
  },
  // s222: 豆電球の直列つなぎ（R5Ω,V=10V）
  r7f_s222: {
    kind: 'barChart',
    yLabel: '電流(A)',
    bars: [
      { label: '豆電球1個(R5Ω)', value: 2 },
      { label: '豆電球2個を直列(R10Ω)', value: 1 },
    ],
    caption: 'V＝10V一定。電球を直列で増やすと合成抵抗が増え、電流が減って暗くなる',
  },

  // ============ 3. 並列回路 ============
  // s223: 並列回路の基本（R1=4,R2=12Ω,V=12V）
  r7f_s223: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R₁ 4Ω' }], [{ type: 'resistor', label: 'R₂ 12Ω' }]],
    battery: { label: '12V' },
    caption: '各枝の電圧はどちらも12V（同じ）。I₁＝12÷4＝3A、I₂＝12÷12＝1A、合計4A',
  },
  // s224: 並列の合成抵抗（6Ω×2本、6Ω×3本）
  r7f_s224: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R₁ 6Ω' }], [{ type: 'resistor', label: 'R₂ 6Ω' }]],
    battery: { label: '12V' },
    caption: '1/R＝1/6＋1/6＝1/3→R＝3Ω。I₁＝I₂＝12÷6＝2A、合計4A。3本を並列にすると2Ωになる',
  },
  // s225: 並列合成抵抗は最小の抵抗より小さい（4Ω,20Ω,V=10V）
  r7f_s225: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R₁ 4Ω' }], [{ type: 'resistor', label: 'R₂ 20Ω' }]],
    battery: { label: '10V' },
    caption: '1/R＝1/4＋1/20＝6/20→R＝10/3Ω≈3.3Ω。最も小さいR₁(4Ω)よりも合成抵抗は小さくなる',
  },
  // s226: 並列の電流分配（R1=3,R2=6Ω,V=6V）
  r7f_s226: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R₁ 3Ω' }], [{ type: 'resistor', label: 'R₂ 6Ω' }]],
    battery: { label: '6V' },
    caption: 'I₁＝6÷3＝2A、I₂＝6÷6＝1A。I₁:I₂＝2:1＝R₂:R₁（抵抗の逆比）',
  },
  // s227: 並列で1つの豆電球が切れても他は変わらない（R5Ω×2,V=10V）
  r7f_s227: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'bulb', label: 'A 5Ω' }], [{ type: 'bulb', label: 'B 5Ω' }]],
    battery: { label: '10V' },
    caption: 'AもBも電流は10÷5＝2A。Bが切れてもAには変わらず10Vがかかり続けるので2Aのまま',
  },
  // s228: 電池の並列つなぎ（電圧は1.5Vのまま、電流は分担）
  r7f_s228: {
    kind: 'barChart',
    yLabel: '電流(A)',
    bars: [
      { label: '電球を流れる電流(電池1個でも2個並列でも)', value: 0.5 },
      { label: '電池1個あたりが受け持つ電流(2個並列時)', value: 0.25 },
    ],
    caption: '電池を並列にしても電圧は1.5Vのまま。電球の電流0.5Aは変わらず、電池2個で半分ずつ(0.25A)分担する',
  },

  // ============ 4. 直列と並列の複合回路 ============
  // s229: 直列の中に並列（R1=4直列＋(R2=4∥R3=4)、V=12V）
  r7f_s229: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 4Ω' }],
    branches: [[{ type: 'resistor', label: 'R₂ 4Ω' }], [{ type: 'resistor', label: 'R₃ 4Ω' }]],
    battery: { label: '12V' },
    caption: '並列部分＝1/(1/4+1/4)＝2Ω。全体＝4＋2＝6Ω、I＝12÷6＝2A。V₁＝8V,並列部＝4V',
  },
  // s230: 並列の枝の中に直列（R1=6Ω枝 ∥ (R2=2Ω+R3=4Ω)枝、V=9V）
  r7f_s230: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R₁ 6Ω' }], [{ type: 'resistor', label: 'R₂ 2Ω' }, { type: 'resistor', label: 'R₃ 4Ω' }]],
    battery: { label: '9V' },
    caption: '枝2はR₂+R₃＝6Ωの直列。どちらの枝も9Vで、電流はそれぞれ9÷6＝1.5A。合計3A',
  },
  // s231: 複合回路のSTEP解法（R1=12直列＋(R2=8∥R3=8)、V=32V）
  r7f_s231: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 12Ω' }],
    branches: [[{ type: 'resistor', label: 'R₂ 8Ω' }], [{ type: 'resistor', label: 'R₃ 8Ω' }]],
    battery: { label: '32V' },
    caption: 'STEP1並列先に計算:8∥8＝4Ω→STEP2全体＝12+4＝16Ω→STEP3 I＝32÷16＝2A→STEP4 V₁＝24V,並列部＝8V',
  },
  // s232: 未知の抵抗を求める（R1=4直列, R3=12既知, 全体I=2A,V=16V→R2=6Ω）
  r7f_s232: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 4Ω' }, { type: 'ammeter', label: '2A' }],
    branches: [[{ type: 'resistor', label: 'R₂ ?Ω' }], [{ type: 'resistor', label: 'R₃ 12Ω' }]],
    battery: { label: '16V' },
    caption: '全体R＝16÷2＝8Ω→並列部＝8-4＝4Ω→1/4＝1/R₂+1/12よりR₂＝6Ω',
  },
  // s233: 電圧計を含む複合回路（R1=5,R2=10Ω,V=30V、電圧計はR2に並列）
  r7f_s233: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 5Ω' }],
    branches: [[{ type: 'resistor', label: 'R₂ 10Ω' }], [{ type: 'voltmeter' }]],
    battery: { label: '30V' },
    caption: '電圧計はR₂に並列接続。全体R＝15Ω、I＝2A。電圧計の読み＝I×R₂＝2×10＝20V',
  },
  // s234: スイッチで変わる複合回路（R1=3直列,R2=6Ω,スイッチ経由R3=6Ω,V=18V）
  r7f_s234: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 3Ω' }],
    branches: [[{ type: 'resistor', label: 'R₂ 6Ω' }], [{ type: 'switch' }, { type: 'resistor', label: 'R₃ 6Ω' }]],
    battery: { label: '18V' },
    caption: '開：R₁+R₂=9Ω→I=2A／閉：R₁+(R₂∥R₃)=3+3=6Ω→I=3A。閉じると電流が増える',
  },
  // s235: 複合回路の電球の明るさ変化（A=4Ω直列,B=4Ω∥C=4Ω,V=12V）
  r7f_s235: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'bulb', label: 'A 4Ω' }],
    branches: [[{ type: 'bulb', label: 'B 4Ω' }], [{ type: 'bulb', label: 'C 4Ω' }]],
    battery: { label: '12V' },
    caption: 'Cを追加すると合成抵抗が下がりAは1.5A→2Aに明るくなる。Bは1.5A→1Aに暗くなる',
  },

  // ============ 5. 豆電球の明るさの比較 ============
  // s236: 電流と消費電力（R5Ω,I=1A→5W,I=2A→20W）
  r7f_s236: {
    kind: 'barChart',
    yLabel: '消費電力(W)',
    bars: [
      { label: '電流1A(R5Ω)', value: 5 },
      { label: '電流2A(R5Ω)', value: 20 },
    ],
    caption: 'P＝I²×R。電流が2倍になると電力(明るさ)は2倍ではなく4倍(5W→20W)になる',
  },
  // s237: 直列つなぎの豆電球は暗くなる（R6Ω,V=12V）
  r7f_s237: {
    kind: 'barChart',
    yLabel: '消費電力(W)/1個あたり',
    bars: [
      { label: '電球1個(R6Ω)', value: 24 },
      { label: '電球2個を直列(各6Ω)', value: 6 },
    ],
    caption: 'V=12V一定。電流が2A→1Aと半分になると、電力は24W→6Wと1/4になる',
  },
  // s238: 並列つなぎの豆電球は明るさが変わらない（R6Ω,V=12V）
  r7f_s238: {
    kind: 'barChart',
    yLabel: '消費電力(W)/1個あたり',
    bars: [
      { label: '電球1個(R6Ω)', value: 24 },
      { label: '電球2個を並列(各6Ω)', value: 24 },
    ],
    caption: '並列では各電球にかかる電圧が12Vのまま変わらないため、明るさ(24W)も変わらない',
  },
  // s239: 直列・並列・混合つなぎの明るさ比較（R4Ω×3,V=12V）
  r7f_s239: {
    kind: 'barChart',
    yLabel: '消費電力(W)',
    bars: [
      { label: '全部直列(各)', value: 4 },
      { label: '混合:直列側A', value: 16 },
      { label: '混合:並列側B,C(各)', value: 4 },
      { label: '全部並列(各)', value: 36 },
    ],
    caption: '同じ電球3個(R4Ω)・電源12V。つなぎ方だけで明るさが4W〜36Wまで変わる',
  },
  // s240: 豆電球が1個切れたときの変化（複合回路、s229と同条件）
  r7f_s240: {
    kind: 'barChart',
    yLabel: '電流(A)',
    bars: [
      { label: 'A：故障前', value: 2 },
      { label: 'A：Bが切れた後', value: 1.5 },
      { label: 'C：故障前', value: 1 },
      { label: 'C：Bが切れた後', value: 1.5 },
    ],
    caption: 'R₁=4Ω直列+並列(R₂=R₃=4Ω)、V=12V。Bが切れると合成抵抗が変わりAは暗く、Cは明るくなる',
  },

  // ============ 6. 電磁石 ============
  // s241: 電磁石のしくみと右手の法則（コイル3Ω,V=6V→2A）
  r7f_s241: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'コイル 3Ω' }],
    battery: { label: '6V' },
    caption: 'I＝6÷3＝2A。右手の4本指を電流の向きに巻きつけると、開いた親指の向きがN極',
  },
  // s242: 電磁石を強くする3条件（電流・巻き数・鉄しん）
  r7f_s242: {
    kind: 'barChart',
    yLabel: 'クリップ数(相対)',
    bars: [
      { label: 'A:電池1個・50回・しんなし', value: 5 },
      { label: 'B:電池2個・50回・しんなし', value: 10 },
      { label: 'C:電池2個・100回・しんなし', value: 20 },
      { label: 'D:電池2個・100回・しんあり', value: 60 },
    ],
    caption: 'コイル抵抗1.5Ω。A→B:電流1A→2A(電池2個で3V)で強さ2倍。B→C:巻き数2倍でさらに2倍。D:鉄しんで急増',
  },
  // s243: 巻き数と抵抗の関係（同じ導線を延長すると電流が減る）
  r7f_s243: {
    kind: 'barChart',
    yLabel: '磁力の強さ(相対=巻数×電流)',
    bars: [
      { label: '50回・3V(R=2Ω→I=1.5A)', value: 75 },
      { label: '同じ太さの導線で100回・3V(R=4Ω→I=0.75A)', value: 75 },
      { label: '100回・電流を1.5Aに保てた場合', value: 150 },
    ],
    caption: '巻き数を2倍にしても、導線が長くなり抵抗が2倍(2Ω→4Ω)になると電流が半分になり、強さは変わらない',
  },
  // s244: 電磁石の利用（クレーン、コイル0.5Ω,V=6V→12A）
  r7f_s244: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: '電磁石コイル 0.5Ω' }, { type: 'switch' }],
    battery: { label: '6V' },
    caption: 'I＝6÷0.5＝12A。スイッチを切ると電流0Aになり磁力を失う→クレーンが鉄を離す',
  },
  // s245: 電磁石の極の判定（コイル2Ω,V=6V→3A）
  r7f_s245: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'コイル 2Ω' }],
    battery: { label: '6V' },
    caption: 'I＝6÷2＝3A。電池の向きを逆にすると電流の向きも逆になり、電磁石のN極とS極が入れかわる',
  },
  // s246: 電池の直列/並列と磁力の強さ（コイル1Ω,100回）
  r7f_s246: {
    kind: 'barChart',
    yLabel: '磁力の強さ(相対=巻数×電流)',
    bars: [
      { label: '電池2個 直列(3V,R1Ω→I=3A)', value: 300 },
      { label: '電池2個 並列(1.5V,R1Ω→I=1.5A)', value: 150 },
    ],
    caption: '直列は電圧が2倍(3V)になり電流3A、並列は電圧1.5Vのまま電流1.5A。磁力は直列の方が2倍強い',
  },

  // ============ 7. モーターと発電 ============
  // s247: モーターのしくみ（コイル4Ω,V=8V→2A）
  r7f_s247: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'コイル 4Ω' }],
    battery: { label: '8V' },
    caption: 'I＝8÷4＝2A。整流子が半回転ごとに電流の向きを切りかえ、コイルは同じ向きに回り続ける',
  },
  // s248: フレミングの左手の法則（コイル5Ω,V=10V→2A）
  r7f_s248: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'コイル 5Ω' }],
    battery: { label: '10V' },
    caption: 'I＝10÷5＝2A。左手：中指＝電流の向き、人さし指＝磁界の向き、親指＝力(回転)の向き',
  },
  // s249: 電磁誘導（コイル3Ω,誘導起電力0.6V→0.2A）
  r7f_s249: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'コイル 3Ω' }],
    battery: { label: '0.6V(誘導起電力)' },
    caption: 'I＝0.6÷3＝0.2A。磁石を動かして磁界が変化している瞬間だけ電流が流れる',
  },
  // s250: フレミングの右手の法則（コイル4Ω,誘導起電力2V→0.5A）
  r7f_s250: {
    kind: 'circuit',
    layout: 'series',
    series: [{ type: 'resistor', label: 'コイル 4Ω' }],
    battery: { label: '2V(誘導起電力)' },
    caption: 'I＝2÷4＝0.5A。右手：親指＝動かす向き、人さし指＝磁界の向き、中指＝誘導電流の向き',
  },
  // s251: 手回し発電機（コイル2Ω、速さ2倍で起電力2倍）
  r7f_s251: {
    kind: 'barChart',
    yLabel: '起電力(V)',
    bars: [
      { label: 'ふつうの速さ', value: 3 },
      { label: '2倍の速さで回す', value: 6 },
    ],
    caption: 'コイル抵抗2Ω。3V→I=1.5A、6V→I=3A。速く回すほど起電力も電流も大きくなる',
  },

  // ============ 8. 電気回路の入試実戦演習 ============
  // s252: 複合回路の電流電圧計算（R1=3直列,R2=R3=6Ω並列,V=18V）
  r7f_s252: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 3Ω' }],
    branches: [[{ type: 'resistor', label: 'R₂ 6Ω' }], [{ type: 'resistor', label: 'R₃ 6Ω' }]],
    battery: { label: '18V' },
    caption: '並列部＝6∥6＝3Ω。全体＝3+3＝6Ω→I＝18÷6＝3A。V₁＝9V,並列部＝9V,I₂＝I₃＝1.5A',
  },
  // s253: 未知抵抗を求める（R1=1直列,R2=6既知,I=4A,V=20V→R3=12Ω）
  r7f_s253: {
    kind: 'circuit',
    layout: 'parallel',
    series: [{ type: 'resistor', label: 'R₁ 1Ω' }, { type: 'ammeter', label: '4A' }],
    branches: [[{ type: 'resistor', label: 'R₂ 6Ω' }], [{ type: 'resistor', label: 'R₃ ?Ω' }]],
    battery: { label: '20V' },
    caption: '全体R＝20÷4＝5Ω→並列部＝5-1＝4Ω→1/4＝1/6+1/R₃よりR₃＝12Ω',
  },
  // s254: 3つの豆電球の明るさランキング（R3Ω×3,V=9V）
  r7f_s254: {
    kind: 'barChart',
    yLabel: '消費電力(W)',
    bars: [
      { label: '全部直列(各)', value: 3 },
      { label: '混合:直列側①', value: 12 },
      { label: '混合:並列側②③(各)', value: 3 },
      { label: '全部並列(各)', value: 27 },
    ],
    caption: '同じ電球3個(R3Ω)・電源9V。明るさ順：全部並列(27W)＞混合①(12W)＞全部直列・混合②③(3W)',
  },
  // s255: 総合問題（R1=4Ω,R2=12Ωで直列公式と並列公式を取り違えない）
  r7f_s255: {
    kind: 'barChart',
    yLabel: '合成抵抗(Ω)',
    bars: [
      { label: '直列(正しい計算)', value: 16 },
      { label: '直列に並列公式を誤用', value: 3 },
      { label: '並列(正しい計算)', value: 3 },
      { label: '並列に直列公式を誤用', value: 16 },
    ],
    caption: 'R₁=4Ω,R₂=12Ω。直列はR＝4+12＝16Ω、並列は1/R=1/4+1/12→R＝3Ω。公式を取り違えると答えが入れかわる',
  },
};
