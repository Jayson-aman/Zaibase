import type { Figure } from './figures';

// 中学受験 算数 の教科書用図解バッチ。キーは lessons-*.ts の figureId と対応。
export const lessonFigsSansu: Record<string, Figure> = {
  // ===== sansu_01_wariai 割合・百分率・比 =====

  // 1. 割合とは（定価1,200円→売価840円は70%）
  lf_sansu_01: {
    kind: 'pieChart',
    slices: [
      { label: '売価 840円', value: 840 },
      { label: '割引額 360円', value: 360 },
    ],
    caption: '定価1,200円のうち売価840円 → 割合＝840÷1,200＝0.7（70%＝7割）',
  },

  // 2. 小数・百分率・歩合の対応を数直線で
  lf_sansu_02: {
    kind: 'numberLine',
    min: 0,
    max: 1,
    step: 0.25,
    points: [
      { x: 0.1, label: '1割' },
      { x: 0.25, label: '25%' },
      { x: 0.5, label: '5割' },
      { x: 0.75, label: '75%' },
      { x: 1, label: '10割' },
    ],
    caption: '小数0.25＝25%＝2割5分。同じ割合の3つの表し方を数直線で対応させる',
  },

  // 5. 売買損益（原価800→定価1,120→売価840）
  lf_sansu_03: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '原価 800円', value: 800 },
      { label: '定価 1,120円', value: 1120 },
      { label: '売価 840円', value: 840 },
    ],
    caption: '原価×1.4＝定価、定価×0.75＝売価。利益＝840−800＝＋40円',
  },

  // 6. 食塩水の混合（6%200g + 10%300g → 8.4%）
  lf_sansu_04: {
    kind: 'barChart',
    yLabel: '食塩の重さ（g）',
    bars: [
      { label: '6%×200g', value: 12 },
      { label: '10%×300g', value: 30 },
      { label: '混合後500g', value: 42 },
    ],
    caption: '食塩の量を先に計算：12＋30＝42g → 濃度＝42÷500×100＝8.4%',
  },

  // ===== sansu_02_hayasa 速さ =====

  // 1. 速さの基本（秒速20m＝時速72kmの時間-道のりグラフ）
  lf_sansu_05: {
    kind: 'lineChart',
    xLabel: '時間（秒）',
    yLabel: '道のり（m）',
    series: [
      {
        label: '秒速20m',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 10, y: 200 },
          { x: 20, y: 400 },
          { x: 30, y: 600 },
          { x: 40, y: 800 },
          { x: 50, y: 1000 },
        ],
      },
    ],
    caption: '時速72km＝秒速20m（÷3.6）。グラフの傾きが速さを表す',
  },

  // 2. 旅人算（出会い算：18km、時速4kmと時速5km）
  lf_sansu_06: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 18],
    lines: [
      { a: 4, b: 0, label: 'A 時速4km' },
      { a: -5, b: 18, label: 'B 時速5km' },
    ],
    points: [{ x: 2, y: 8, label: '出会い' }],
    caption: '18km÷(4＋5)＝2時間後、Aの出発点から8km地点で出会う',
  },

  // 4. 流水算（下り・静水・上りの速さ）
  lf_sansu_07: {
    kind: 'barChart',
    yLabel: '速さ（km/時）',
    bars: [
      { label: '下り 12', value: 12 },
      { label: '静水時 10', value: 10 },
      { label: '上り 8', value: 8 },
    ],
    caption: '静水時＝(12＋8)÷2＝10、川の流れ＝(12−8)÷2＝2km/時',
  },

  // ===== sansu_03_zukei 平面図形 =====

  // 1. 三角形の面積（底辺と高さ）
  lf_sansu_08: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 3, y: 5, label: 'A' },
    ],
    sideLabels: ['底辺 8cm', null, null],
    heights: [{ from: 2, toEdge: [0, 1], label: '高さ 5cm' }],
    fill: true,
    caption: '三角形の面積＝底辺×高さ÷2＝8×5÷2＝20cm²。高さは底辺に垂直な長さ',
  },

  // 2. 多角形の内角の和（五角形＝三角形3つ）
  lf_sansu_09: {
    kind: 'polygon',
    points: [
      { x: 0, y: 1, label: 'A' },
      { x: -0.95, y: 0.31, label: 'B' },
      { x: -0.59, y: -0.81, label: 'C' },
      { x: 0.59, y: -0.81, label: 'D' },
      { x: 0.95, y: 0.31, label: 'E' },
    ],
    diagonals: [
      [0, 2],
      [0, 3],
    ],
    caption: '五角形は対角線で三角形3つに分かれる → 内角の和＝(5−2)×180°＝540°',
  },

  // 3. 相似（DE//BC で △ADE∽△ABC、相似比2:5）
  lf_sansu_10: {
    kind: 'coordinate',
    xRange: [-3, 5],
    yRange: [0, 6],
    polygon: [
      { x: 0, y: 5 },
      { x: -2, y: 0 },
      { x: 4, y: 0 },
    ],
    segments: [
      [
        { x: -0.8, y: 3 },
        { x: 1.6, y: 3 },
      ],
    ],
    points: [
      { x: 0, y: 5, label: 'A' },
      { x: -2, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'C' },
      { x: -0.8, y: 3, label: 'D' },
      { x: 1.6, y: 3, label: 'E' },
    ],
    caption: 'DE//BC、AD:AB＝2:5 → DE:BC＝2:5、面積比＝2²:5²＝4:25',
  },

  // 5. 台形の面積（上底4・下底10・高さ6）
  lf_sansu_11: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 7, y: 6 },
      { x: 3, y: 6 },
    ],
    sideLabels: ['下底 10cm', null, '上底 4cm', null],
    heights: [{ from: 3, toEdge: [0, 1], label: '高さ 6cm' }],
    fill: true,
    caption: '台形の面積＝(上底＋下底)×高さ÷2＝(4＋10)×6÷2＝42cm²',
  },

  // ===== sansu_04_bunsu 分数・小数・整数 =====

  // 1. 通分（1/4＋1/6を12分のいくつに揃える）
  lf_sansu_12: {
    kind: 'barChart',
    yLabel: '12分のいくつ',
    bars: [
      { label: '1/4＝3/12', value: 3 },
      { label: '1/6＝2/12', value: 2 },
      { label: '和＝5/12', value: 5 },
    ],
    caption: '分母を最小公倍数12にそろえる：3/12＋2/12＝5/12',
  },

  // 2. 小数と分数の対応（8分の仲間を数直線で）
  lf_sansu_13: {
    kind: 'numberLine',
    min: 0,
    max: 1,
    step: 0.25,
    points: [
      { x: 0.125, label: '1/8' },
      { x: 0.375, label: '3/8' },
      { x: 0.625, label: '5/8' },
      { x: 0.875, label: '7/8' },
    ],
    caption: '0.125＝1/8、0.375＝3/8、0.625＝5/8、0.875＝7/8。「8分の仲間」は丸暗記',
  },

  // 5. 部分分数分解（望遠鏡式の和は1に近づく）
  lf_sansu_14: {
    kind: 'lineChart',
    xLabel: '足した個数 n',
    yLabel: '和',
    yRange: [0, 1.1],
    series: [
      {
        label: '和＝1−1/(n+1)',
        markers: true,
        points: [
          { x: 1, y: 0.5 },
          { x: 2, y: 0.667 },
          { x: 3, y: 0.75 },
          { x: 4, y: 0.8 },
          { x: 5, y: 0.833 },
          { x: 6, y: 0.857 },
        ],
      },
      {
        label: '1',
        dashed: true,
        points: [
          { x: 1, y: 1 },
          { x: 6, y: 1 },
        ],
      },
    ],
    caption: '1/(1×2)＋1/(2×3)＋…＝1−1/(n+1)。途中が消えて1に近づく',
  },

  // ===== sansu_05_sigoto 仕事算・植木算・鶴亀算 =====

  // 1. 仕事算（全体12とおくとA:2/日、B:3/日）
  lf_sansu_15: {
    kind: 'barChart',
    yLabel: '1日の仕事量（全体＝12）',
    bars: [
      { label: 'A（6日）', value: 2 },
      { label: 'B（4日）', value: 3 },
      { label: '2人いっしょ', value: 5 },
    ],
    caption: '全体を12（6と4の最小公倍数）とおく → 2人なら12÷5＝2.4日で完成',
  },

  // 2. 植木算（40mに5mごと・両端あり）
  lf_sansu_16: {
    kind: 'numberLine',
    min: 0,
    max: 40,
    step: 5,
    points: [
      { x: 0, label: '1本目' },
      { x: 5 },
      { x: 10 },
      { x: 15 },
      { x: 20 },
      { x: 25 },
      { x: 30 },
      { x: 35 },
      { x: 40, label: '9本目' },
    ],
    caption: '40m÷5m＝8区間 → 両端に植えると本数＝8＋1＝9本',
  },

  // 3. 鶴亀算（全部ツルと仮定）
  lf_sansu_17: {
    kind: 'barChart',
    yLabel: '足の本数',
    bars: [
      { label: '全部ツルなら 2×10', value: 20 },
      { label: '実際の合計', value: 28 },
    ],
    caption: '差8本÷(4−2)本＝カメ4匹、ツル6匹（10匹・足28本の場合）',
  },

  // 5. 年齢算（父と子×3のグラフが交わる年）
  lf_sansu_18: {
    kind: 'lineChart',
    xLabel: '何年後',
    yLabel: '年齢',
    series: [
      {
        label: '父の年齢',
        points: [
          { x: 0, y: 43 },
          { x: 10, y: 53 },
        ],
      },
      {
        label: '子の年齢×3',
        points: [
          { x: 0, y: 39 },
          { x: 10, y: 69 },
        ],
      },
    ],
    caption: '2年後に交わる：父45歳＝子15歳×3。年齢の「差30歳」はずっと変わらない',
  },

  // ===== sansu_06_kishoku 規則性・数列 =====

  // 1. 等差数列（初項3・公差4）
  lf_sansu_19: {
    kind: 'lineChart',
    xLabel: '番目 n',
    yLabel: '数',
    series: [
      {
        label: '公差4',
        markers: true,
        points: [
          { x: 1, y: 3 },
          { x: 2, y: 7 },
          { x: 3, y: 11 },
          { x: 4, y: 15 },
          { x: 5, y: 19 },
          { x: 6, y: 23 },
        ],
      },
    ],
    caption: '3, 7, 11, 15, … 第n項＝3＋(n−1)×4。同じ数ずつ増えるから点が一直線に並ぶ',
  },

  // 2. 奇数の和＝平方数（4×4の点の並び）
  lf_sansu_20: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 5],
    points: [
      { x: 1, y: 1 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 4, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 4, y: 2 },
      { x: 1, y: 3 },
      { x: 2, y: 3 },
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
    ],
    caption: '1＋3＋5＋7＝16＝4×4。奇数をL字型に足していくと正方形の点の並びになる',
  },

  // 3. 群数列（第n群までの個数＝三角数）
  lf_sansu_21: {
    kind: 'lineChart',
    xLabel: '群の番号 n',
    yLabel: '第n群までの個数',
    series: [
      {
        label: 'n(n+1)/2',
        markers: true,
        points: [
          { x: 1, y: 1 },
          { x: 2, y: 3 },
          { x: 3, y: 6 },
          { x: 4, y: 10 },
          { x: 5, y: 15 },
          { x: 6, y: 21 },
        ],
      },
    ],
    caption: '1＋2＋…＋n＝n(n+1)/2（三角数）。第100項がどの群かは、この数と比べて特定する',
  },

  // ===== sansu_07_rittai 立体図形 =====

  // 1. 直方体の体積
  lf_sansu_22: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: 'よこ5cm', depth: 'たて4cm', height: '高さ6cm' },
    caption: '直方体の体積＝たて×よこ×高さ＝4×5×6＝120cm³',
  },

  // 2. 円柱の表面積（側面のよこ＝円周）
  lf_sansu_23: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '半径2cm', height: '高さ5cm' },
    caption: '側面を開くと長方形：よこ＝底面の円周（直径×3.14）、たて＝高さ',
  },

  // 3. サイコロの展開図（向かい合う面の和は7）
  lf_sansu_24: {
    kind: 'net',
    shape: 'cube',
    faceLabels: ['1', '2', '6', '5', '3', '4'],
    caption: 'サイコロの展開図：1つ飛ばしの面が向かい合う。1⇔6、2⇔5、3⇔4（和は7）',
  },

  // 4. 段差のある水そうの水位グラフ
  lf_sansu_25: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水の深さ（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 2.5, y: 10 },
          { x: 7.5, y: 20 },
        ],
      },
    ],
    caption: '下半分（底面積200cm²）は毎分4cm、上半分（400cm²）は毎分2cm。折れ点＝形が変わる高さ',
  },

  // ===== sansu_08_kazu 数の性質 =====

  // 3. 最小公倍数（バスが同時に出発する周期）
  lf_sansu_26: {
    kind: 'numberLine',
    min: 0,
    max: 36,
    step: 6,
    points: [
      { x: 12, label: 'A' },
      { x: 18, label: 'B' },
      { x: 24, label: 'A' },
      { x: 36, label: 'A・B同時' },
    ],
    caption: 'A駅発は12分ごと、B駅発は18分ごと → 最小公倍数36分後に再び同時発車',
  },

  // 4. 約数の個数（平方数だけ奇数個）
  lf_sansu_27: {
    kind: 'barChart',
    yLabel: '約数の個数',
    bars: [
      { label: '1', value: 1, color: '#F59E0B' },
      { label: '2', value: 2 },
      { label: '3', value: 2 },
      { label: '4', value: 3, color: '#F59E0B' },
      { label: '5', value: 2 },
      { label: '6', value: 4 },
      { label: '7', value: 2 },
      { label: '8', value: 4 },
      { label: '9', value: 3, color: '#F59E0B' },
      { label: '10', value: 4 },
      { label: '11', value: 2 },
      { label: '12', value: 6 },
    ],
    caption: '約数の個数が奇数になるのは平方数（1, 4, 9）だけ。素数はちょうど2個',
  },

  // 5. 2進法の位の重み（1011＝11）
  lf_sansu_28: {
    kind: 'barChart',
    yLabel: '位の値×数字',
    bars: [
      { label: '8の位「1」', value: 8 },
      { label: '4の位「0」', value: 0 },
      { label: '2の位「1」', value: 2 },
      { label: '1の位「1」', value: 1 },
    ],
    caption: '2進法の1011 ＝ 8×1＋4×0＋2×1＋1×1 ＝ 11（10進法）',
  },

  // ===== sansu_09_tokushu 特殊算 =====

  // 1. 和差算（和3,000円・差400円）
  lf_sansu_29: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '兄 1,700円', value: 1700 },
      { label: '弟 1,300円', value: 1300 },
    ],
    caption: '兄＝(和3,000＋差400)÷2＝1,700円、弟＝(3,000−400)÷2＝1,300円',
  },

  // 4. 平均算（グループの平均は合計に戻す）
  lf_sansu_30: {
    kind: 'barChart',
    yLabel: '平均点',
    bars: [
      { label: '男子20人', value: 65 },
      { label: '女子15人', value: 72 },
      { label: '全体35人', value: 68 },
    ],
    caption: '合計＝1,300＋1,080＝2,380点 → 2,380÷35＝68点。単純平均68.5点ではない！',
  },

  // 5. 相当算（本のページ：1/3ずつ）
  lf_sansu_31: {
    kind: 'pieChart',
    slices: [
      { label: '1日目 1/3', value: 40 },
      { label: '2日目 1/3', value: 40 },
      { label: '残り 40ページ', value: 40 },
    ],
    caption: '残りの1/3が40ページにあたる → 全体＝40÷1/3＝120ページ',
  },

  // ===== sansu_10_ido 点の移動とグラフ =====

  // 1. 点の移動と面積の変化（増える→一定→減る）
  lf_sansu_32: {
    kind: 'lineChart',
    xLabel: '時間（秒）',
    yLabel: '三角形APDの面積（cm²）',
    series: [
      {
        label: '面積',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 18 },
          { x: 8, y: 18 },
          { x: 11, y: 0 },
        ],
      },
    ],
    caption: 'A→B：増える、B→C：一定（最大18cm²）、C→D：減る。折れ点＝頂点通過の瞬間',
  },

  // 4. 仕切りのある水そうの水位（3段階）
  lf_sansu_33: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '左側の水位（cm）',
    series: [
      {
        label: '左側',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 2, y: 10 },
          { x: 4, y: 10 },
          { x: 6, y: 15 },
        ],
      },
    ],
    caption: '①左だけ上がる（急）②仕切りをこえて右へ流れ込む間は一定 ③左右一体でゆるやかに上昇',
  },

  // 5. ダイヤグラム（12km・時速4kmと時速6kmの出会い）
  lf_sansu_34: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 12],
    lines: [
      { a: 4, b: 0, label: '太郎 時速4km' },
      { a: -6, b: 12, label: '次郎 時速6km' },
    ],
    points: [{ x: 1.2, y: 4.8, label: '出会い' }],
    caption: '交点が出会い：12÷(4＋6)＝1.2時間後、A町から4.8km。傾き＝速さ',
  },

  // ===== sansu_11_baai_kakuritsu 場合の数と確率 =====

  // 3. 組み合わせ（円周上の6点を結ぶ直線は15本）
  lf_sansu_35: {
    kind: 'circle',
    points: [
      { angle: 90, label: 'A' },
      { angle: 150, label: 'B' },
      { angle: 210, label: 'C' },
      { angle: 270, label: 'D' },
      { angle: 330, label: 'E' },
      { angle: 30, label: 'F' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 3],
      [2, 4],
      [2, 5],
      [3, 4],
      [3, 5],
      [4, 5],
    ],
    caption: '6点から2点を選ぶ組み合わせ＝(6×5)÷2＝15本。ABとBAは同じ直線',
  },

  // 4. 道順の書き込み法（よこ3×たて2は10通り）
  lf_sansu_36: {
    kind: 'coordinate',
    xRange: [-0.5, 3.8],
    yRange: [-0.5, 2.8],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 3, y: 0 },
      ],
      [
        { x: 0, y: 1 },
        { x: 3, y: 1 },
      ],
      [
        { x: 0, y: 2 },
        { x: 3, y: 2 },
      ],
      [
        { x: 0, y: 0 },
        { x: 0, y: 2 },
      ],
      [
        { x: 1, y: 0 },
        { x: 1, y: 2 },
      ],
      [
        { x: 2, y: 0 },
        { x: 2, y: 2 },
      ],
      [
        { x: 3, y: 0 },
        { x: 3, y: 2 },
      ],
    ],
    points: [
      { x: 0, y: 0, label: 'S' },
      { x: 1, y: 0, label: '1' },
      { x: 2, y: 0, label: '1' },
      { x: 3, y: 0, label: '1' },
      { x: 0, y: 1, label: '1' },
      { x: 1, y: 1, label: '2' },
      { x: 2, y: 1, label: '3' },
      { x: 3, y: 1, label: '4' },
      { x: 0, y: 2, label: '1' },
      { x: 1, y: 2, label: '3' },
      { x: 2, y: 2, label: '6' },
      { x: 3, y: 2, label: '10' },
    ],
    caption: '各交差点の数＝「左の数」＋「下の数」。右上のゴールまで最短経路は10通り',
  },

  // 5. 2個のサイコロの和の分布（和7が最多）
  lf_sansu_37: {
    kind: 'barChart',
    yLabel: '場合の数',
    histogram: true,
    bars: [
      { label: '2', value: 1 },
      { label: '3', value: 2 },
      { label: '4', value: 3 },
      { label: '5', value: 4 },
      { label: '6', value: 5 },
      { label: '7', value: 6, color: '#F59E0B' },
      { label: '8', value: 5 },
      { label: '9', value: 4 },
      { label: '10', value: 3 },
      { label: '11', value: 2 },
      { label: '12', value: 1 },
    ],
    caption: '全36通りのうち和7は6通りで最多 → 確率＝6/36＝1/6',
  },

  // ===== sansu_12_tanni_atari 単位量あたりの大きさ =====

  // 1. 人口密度の比較（A市2,000人/km² vs B市4,000人/km²）
  lf_sansu_38: {
    kind: 'barChart',
    yLabel: '人口密度（人/km²）',
    bars: [
      { label: 'A市(12万人/60km²)', value: 2000 },
      { label: 'B市(18万人/45km²)', value: 4000 },
    ],
    caption: '人口密度＝人口÷面積。B市はA市の2倍混んでいる（4,000人/km²と2,000人/km²）',
  },

  // 2. こみぐあい（部屋A0.2人/㎡ vs 部屋B0.24人/㎡）
  lf_sansu_39: {
    kind: 'barChart',
    yLabel: '1㎡あたりの人数（人）',
    bars: [
      { label: '部屋A(40㎡・8人)', value: 0.2 },
      { label: '部屋B(25㎡・6人)', value: 0.24 },
    ],
    caption: '1㎡あたりの人数は部屋Bの方が多い → 部屋Bの方が混んでいる',
  },

  // 3. 燃費の比較（車A15km/L vs 車B20km/L）
  lf_sansu_40: {
    kind: 'barChart',
    yLabel: '燃費（km/L）',
    bars: [
      { label: '車A(600km/40L)', value: 15 },
      { label: '車B(500km/25L)', value: 20 },
    ],
    caption: '燃費＝走った距離÷使ったガソリンの量。車Bの方が燃費がよい（1Lで20km走る）',
  },

  // ===== sansu_13_hirei_hantai 比例と反比例 =====

  // 1. 比例のグラフ（y=2x、原点を通る直線）
  lf_sansu_41: {
    kind: 'coordinate',
    xRange: [0, 5],
    yRange: [0, 10],
    lines: [{ a: 2, b: 0, label: 'y＝2x' }],
    points: [
      { x: 1, y: 2 },
      { x: 2, y: 4 },
      { x: 3, y: 6 },
    ],
    caption: 'yはxに比例。xが2倍・3倍になるとyも2倍・3倍になる（原点を通る直線）',
  },

  // 2. 反比例のグラフ（y=12/x、双曲線）
  lf_sansu_42: {
    kind: 'coordinate',
    xRange: [0.5, 6],
    yRange: [0, 12],
    hyperbolas: [{ k: 12, label: 'y＝12/x' }],
    points: [
      { x: 2, y: 6 },
      { x: 3, y: 4 },
      { x: 4, y: 3 },
    ],
    caption: 'xとyの積は常に12で一定。xが2倍になるとyは1/2になる（双曲線）',
  },

  // 3. 比例と反比例のグラフの形の違い
  lf_sansu_43: {
    kind: 'lineChart',
    xLabel: 'x',
    yLabel: 'y',
    series: [
      {
        label: '比例 y＝2x',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 2 },
          { x: 2, y: 4 },
          { x: 3, y: 6 },
          { x: 4, y: 8 },
        ],
      },
      {
        label: '反比例 y＝12/x',
        markers: true,
        dashed: true,
        points: [
          { x: 1, y: 12 },
          { x: 2, y: 6 },
          { x: 3, y: 4 },
          { x: 4, y: 3 },
          { x: 6, y: 2 },
        ],
      },
    ],
    caption: '比例のグラフは原点を通る直線、反比例のグラフは軸に近づくが触れない曲線',
  },

  // ===== sansu_14_zukei_ido 図形の移動 =====

  // 1. 平行移動（三角形ABC→A'B'C'、右3・上1）
  lf_sansu_44: {
    kind: 'coordinate',
    xRange: [-0.5, 6],
    yRange: [-0.5, 4],
    segments: [
      [{ x: 0, y: 0 }, { x: 2, y: 0 }],
      [{ x: 2, y: 0 }, { x: 0, y: 2 }],
      [{ x: 0, y: 2 }, { x: 0, y: 0 }],
      [{ x: 3, y: 1 }, { x: 5, y: 1 }],
      [{ x: 5, y: 1 }, { x: 3, y: 3 }],
      [{ x: 3, y: 3 }, { x: 3, y: 1 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 2, y: 0, label: 'B' },
      { x: 0, y: 2, label: 'C' },
      { x: 3, y: 1, label: "A'" },
      { x: 5, y: 1, label: "B'" },
      { x: 3, y: 3, label: "C'" },
    ],
    caption: '三角形ABCを右に3・上に1平行移動すると三角形A\'B\'C\'になる。形と大きさは変わらない',
  },

  // 2. 回転移動（中心Oのまわりに90°回転）
  lf_sansu_45: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 0, label: 'P' },
      { angle: 90, label: "P'" },
    ],
    chords: [[0, 1]],
    caption: '点Pを中心Oのまわりに90°回転させると点P\'に移る。OP＝OP\'（半径は変わらない）',
  },

  // 3. 転がり移動（円が直線上を転がる：中心の高さは半径のまま一定）
  lf_sansu_46: {
    kind: 'lineChart',
    xLabel: '転がった距離（cm）',
    yLabel: '中心の高さ（cm）',
    series: [
      {
        label: '円の中心の高さ',
        markers: true,
        points: [
          { x: 0, y: 3 },
          { x: 10, y: 3 },
          { x: 20, y: 3 },
          { x: 30, y: 3 },
        ],
      },
    ],
    caption: '半径3cmの円が直線上を転がるとき、中心は常に高さ3cmを保ったまま水平に進む',
  },

  // ===== sansu_15_setsudan 立体・平面図形の切断 =====

  // 1. 立方体の切断の基本
  lf_sansu_47: {
    kind: 'solid',
    shape: 'cube',
    labels: { width: '6cm' },
    caption: '1辺6cmの立方体。3点を通る平面で切ると切り口の形が変わる',
  },

  // 2. 中点を通る切断面（正六角形）
  lf_sansu_48: {
    kind: 'polygon',
    points: [
      { x: 2, y: 0, label: 'P' },
      { x: 4, y: 0, label: 'Q' },
      { x: 6, y: 2, label: 'R' },
      { x: 4, y: 4, label: 'S' },
      { x: 2, y: 4, label: 'T' },
      { x: 0, y: 2, label: 'U' },
    ],
    fill: true,
    caption: '立方体の各辺の中点を通るように切ると、切り口は正六角形になる',
  },

  // 3. 直方体の切断（対角線を含む長方形の切り口）
  lf_sansu_49: {
    kind: 'solid',
    shape: 'cuboid',
    labels: { width: '8cm', depth: '6cm', height: '4cm' },
    caption: 'たて6cm・よこ8cm・高さ4cmの直方体。対角線を含む平面で切ると切り口は長方形になる',
  },

  // ===== sansu_16_bunpai_sashiatsume 分配算・差集め算の発展 =====

  // 1. 分配算（3,600円を3:2:1に分配）
  lf_sansu_50: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '兄', value: 1800 },
      { label: '弟', value: 1200 },
      { label: '妹', value: 600 },
    ],
    caption: '合計3,600円を兄:弟:妹＝3:2:1で分けると、兄1,800円・弟1,200円・妹600円',
  },

  // 2. 差集め算（余り7個・不足5個から人数を求める）
  lf_sansu_51: {
    kind: 'barChart',
    yLabel: '個数（余り／不足）',
    bars: [
      { label: '4個ずつ（余り）', value: 7 },
      { label: '6個ずつ（不足）', value: 5 },
    ],
    caption: '余り7個と不足5個の合計12個が、1人あたりの差(6−4＝2個)×人数にあたる→人数＝12÷2＝6人',
  },

  // ===== sansu_17_heikin_tsurukame 平均とつるかめ算の発展 =====

  // 1. 平均点の推移（4回目に必要な点数を逆算）
  lf_sansu_52: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: '1回目', value: 68 },
      { label: '2回目', value: 75 },
      { label: '3回目', value: 82 },
      { label: '4回目(目標)', value: 95 },
    ],
    caption: '4回の平均を80点にするには、合計320点が必要→4回目は320−225＝95点',
  },

  // 2. 3種類のつるかめ算（りんご・みかん・かき）
  lf_sansu_53: {
    kind: 'barChart',
    yLabel: '個数',
    bars: [
      { label: 'りんご(100円)', value: 3 },
      { label: 'みかん(60円)', value: 6 },
      { label: 'かき(140円)', value: 6 },
    ],
    caption: '「かきの数＝りんごの数の2倍」という条件で2種類のつるかめ算に帰着させて解く',
  },

  // ===== sansu_18_mizusou_graph 水そう問題とグラフの発展 =====

  // 1. 仕切りのある水そうの水位グラフ（傾きが変わる）
  lf_sansu_54: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水位（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 5, y: 10 },
          { x: 15, y: 16 },
        ],
      },
    ],
    caption: '仕切りの高さ(10cm)に達するまでは底面積が小さく傾きが急、その後は底面積が広がり傾きがゆるやかになる',
  },

  // 2. 仕切りで分かれた底面積の比較
  lf_sansu_55: {
    kind: 'barChart',
    yLabel: '底面積（cm²）',
    bars: [
      { label: '仕切りの左側', value: 20 },
      { label: '仕切りの右側', value: 30 },
      { label: '合計（仕切りを超えた後）', value: 50 },
    ],
    caption: '底面積が小さいほど、同じ水の量を入れたときの水位の上がり方が急になる',
  },

  // ===== sansu_19_ronri_pazuru 論理・推理パズル =====

  // 1. 数直線を使った手がかりの整理
  lf_sansu_56: {
    kind: 'numberLine',
    min: 0,
    max: 20,
    step: 5,
    points: [{ x: 12, label: 'Aの得点' }],
    segments: [{ from: 8, to: 16 }],
    caption: '手がかり「8点より多く16点より少ない」を数直線に表すと、候補の範囲がしぼり込める',
  },

  // 2. 総当たり戦の勝ち数（4人・6試合）
  lf_sansu_57: {
    kind: 'barChart',
    yLabel: '勝った試合数',
    bars: [
      { label: 'A', value: 3 },
      { label: 'B', value: 2 },
      { label: 'C', value: 1 },
      { label: 'D', value: 0 },
    ],
    caption: '総当たり戦（4人）の総試合数＝4×3÷2＝6試合。勝ち数の合計は必ず試合数と一致する',
  },

  // ===== sansu_20_hi_bunshou 比の文章題の応用 =====

  // 1. 比で分けたお金（A:B＝3:2、合計3,500円）
  lf_sansu_58: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: 'Aの所持金', value: 2100 },
      { label: 'Bの所持金', value: 1400 },
    ],
    caption: 'A:B＝3:2で合計3,500円→1あたり700円、A＝2,100円、B＝1,400円',
  },

  // 2. 比を使った面積比（BD:DC=3:2 のときの三角形の面積比）
  lf_sansu_59: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'D' },
      { x: 10, y: 0, label: 'C' },
      { x: 4, y: 6, label: 'A' },
    ],
    sideLabels: ['BD', 'DC', null, null],
    caption: 'BD:DC＝3:2のとき、△ABD:△ADC＝3:2（底辺の比＝高さが共通なので面積比と一致）',
  },

  // ===== sansu_21_houjin_kisokusei 数表と規則性の発展（方陣算） =====

  // 1. 中空方陣（1辺4個・周は12人）
  lf_sansu_60: {
    kind: 'coordinate',
    xRange: [-0.5, 3.5],
    yRange: [-0.5, 3.5],
    points: [
      { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
      { x: 0, y: 1 }, { x: 3, y: 1 },
      { x: 0, y: 2 }, { x: 3, y: 2 },
      { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
    ],
    caption: '1辺4個の中空の正方形（方陣）の周りの人数＝(4−1)×4＝12人。1辺n個なら周は(n−1)×4人',
  },

  // 2. 格子点を数える（直角三角形の中の格子点）
  lf_sansu_61: {
    kind: 'coordinate',
    xRange: [-0.5, 4.5],
    yRange: [-0.5, 3.5],
    polygon: [
      { x: 0, y: 0 },
      { x: 4, y: 0 },
      { x: 0, y: 3 },
    ],
    points: [
      { x: 0, y: 0 }, { x: 4, y: 0 }, { x: 0, y: 3 },
      { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
      { x: 0, y: 1 }, { x: 0, y: 2 },
    ],
    caption: '直角をはさむ2辺が4と3の直角三角形。格子点は図をかいて1つずつ数えるのが基本',
  },

  // ===== sansu_22_wariai_hi_yugo 割合・比の融合発展問題 =====

  // 1. 連続する値上げ・値下げ（2,000円→2,400円→1,800円）
  lf_sansu_62: {
    kind: 'barChart',
    yLabel: '価格（円）',
    bars: [
      { label: '元値', value: 2000 },
      { label: '20%値上げ後', value: 2400 },
      { label: '25%値下げ後', value: 1800 },
    ],
    caption: '2,000円→20%値上げ(×1.2)→2,400円→25%値下げ(×0.75)→1,800円。結局10%値下げと同じ',
  },

  // 2. 食塩水の複数操作（水を加える＋食塩を加える）
  lf_sansu_63: {
    kind: 'barChart',
    yLabel: '食塩の重さ（g）',
    bars: [
      { label: '操作前(10%×300g)', value: 30 },
      { label: '水100g加えた後', value: 30 },
      { label: 'さらに食塩20g加えた後', value: 50 },
    ],
    caption: '水を加えても食塩の量は変わらないが、食塩そのものを加えると食塩の量が増える点に注意',
  },

  // ===== 追加バッチ：既存147セクション中、図解が有効な残り未着手セクション =====

  // sansu_01 3. 比の基本（24:36:60→最大公約数12で割ると2:3:5）
  lf_sansu_64: {
    kind: 'barChart',
    yLabel: '値',
    bars: [
      { label: '24', value: 24 },
      { label: '36', value: 36 },
      { label: '60', value: 60 },
    ],
    caption: '24:36:60 は最大公約数12で割ると最も簡単な整数比2:3:5になる',
  },

  // sansu_01 4. 比の文章題（配分算：2,100円を3:2:1に分配）
  lf_sansu_65: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: 'A（比3）', value: 1050 },
      { label: 'B（比2）', value: 700 },
      { label: 'C（比1）', value: 350 },
    ],
    caption: '合計2,100円を3:2:1に分ける→1あたり2,100÷6＝350円。A＝1,050円、B＝700円、C＝350円',
  },

  // sansu_02 3. 通過算（電車120m＋トンネル880m＝移動距離1,000m）
  lf_sansu_66: {
    kind: 'barChart',
    yLabel: '長さ（m）',
    bars: [
      { label: '電車の長さ', value: 120 },
      { label: 'トンネルの長さ', value: 880 },
      { label: '移動距離の合計', value: 1000 },
    ],
    caption: '通過にかかる移動距離＝電車の長さ＋トンネルの長さ＝120＋880＝1,000m。秒速20mなら時間＝1,000÷20＝50秒',
  },

  // sansu_03 4. 等積変形と補助線（中点Dで△ABD:△ADC＝1:1）
  lf_sansu_67: {
    kind: 'polygon',
    points: [
      { x: 3, y: 6, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 5, y: 0, label: 'D' },
      { x: 10, y: 0, label: 'C' },
    ],
    sideLabels: [null, 'BD', 'DC', null],
    diagonals: [[0, 2]],
    equalSides: [[1, 2]],
    caption: 'DがBCの中点（BD:DC＝1:1）で高さ（頂点Aから底辺までの距離）が共通なので、△ABD:△ADC＝1:1',
  },

  // sansu_04 3. 整数の性質（120cm×180cmを1辺60cmの正方形タイルで敷く＝2枚×3枚）
  lf_sansu_68: {
    kind: 'coordinate',
    xRange: [-0.4, 3.4],
    yRange: [-0.4, 2.4],
    segments: [
      [{ x: 0, y: 0 }, { x: 3, y: 0 }],
      [{ x: 3, y: 0 }, { x: 3, y: 2 }],
      [{ x: 3, y: 2 }, { x: 0, y: 2 }],
      [{ x: 0, y: 2 }, { x: 0, y: 0 }],
      [{ x: 1, y: 0 }, { x: 1, y: 2 }],
      [{ x: 2, y: 0 }, { x: 2, y: 2 }],
      [{ x: 0, y: 1 }, { x: 3, y: 1 }],
    ],
    caption: 'たて120cm・よこ180cmの長方形を1辺60cm（120と180の最大公約数）の正方形タイルで敷くと、たて2枚×よこ3枚＝6枚で過不足なく敷ける',
  },

  // sansu_05 4. ニュートン算（3頭で20日：最初の草40＋20日で生える草20＝食べる量60）
  lf_sansu_69: {
    kind: 'barChart',
    yLabel: '草の量',
    bars: [
      { label: '最初の草（S）', value: 40 },
      { label: '20日で生える草', value: 20 },
      { label: '3頭が20日で食べる量', value: 60 },
    ],
    caption: '3頭で20日：最初の草S＋20日で生える草(r×20)＝3頭が食べる量(60)。S＝40、r＝1のとき40＋20＝60が成り立つ',
  },

  // sansu_06 4. 場合の数の基本（シャツ3種×ズボン4種＝12通り）
  lf_sansu_70: {
    kind: 'coordinate',
    xRange: [-0.5, 2.5],
    yRange: [-0.5, 3.5],
    points: [
      { x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 },
      { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 },
      { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 },
    ],
    caption: 'シャツ3種類×ズボン4種類＝12通りの組み合わせ（積の法則）。点1つが1つの組み合わせを表す',
  },

  // sansu_07 5. 入試例題（回転体：4cm×3cmの長方形を3cm辺で回転→半径4cm・高さ3cmの円柱）
  lf_sansu_71: {
    kind: 'solid',
    shape: 'cylinder',
    labels: { radius: '半径4cm', height: '高さ3cm' },
    caption: 'たて4cm・よこ3cmの長方形をよこの辺（3cm）を軸に1回転すると、半径4cm・高さ3cmの円柱ができる。体積＝4×4×3.14×3＝150.72cm³',
  },

  // sansu_09 2. 消去算（ペン1本80円・ノート1冊120円）
  lf_sansu_72: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: 'ペン1本', value: 80 },
      { label: 'ノート1冊', value: 120 },
    ],
    caption: 'ペン2本＋ノート3冊＝520円、ペン3本＋ノート2冊＝480円の連立から、ペン1本80円・ノート1冊120円が求まる',
  },

  // sansu_09 3. 過不足算（4個ずつで15個余り、6個ずつで5個不足→10人）
  lf_sansu_73: {
    kind: 'barChart',
    yLabel: '個数（余り・不足）',
    bars: [
      { label: '4個ずつ（余り）', value: 15 },
      { label: '6個ずつ（不足）', value: 5 },
    ],
    caption: '余り15個＋不足5個＝20個が、1人あたりの差（6−4＝2個）×人数にあたる→人数＝20÷2＝10人、みかん＝4×10＋15＝55個',
  },

  // sansu_10 2. 面積-時間グラフを読む（6秒で最大24cm²、その後10秒で0に戻る）
  lf_sansu_74: {
    kind: 'lineChart',
    xLabel: '時間（秒）',
    yLabel: '面積（cm²）',
    series: [
      {
        label: '面積',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 6, y: 24 },
          { x: 16, y: 0 },
        ],
      },
    ],
    caption: '6秒で最大24cm²（辺の長さ＝2×6＝12cm）、その後10秒で0に戻る（もう一辺＝2×10＝20cm）。折れ点の時刻×速さ＝辺の長さ',
  },

  // sansu_10 3. 2点が同時に動く問題（周40cm、毎秒3cmと2cmが反対向きで8秒後に出会う）
  lf_sansu_75: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 40],
    lines: [
      { a: 3, b: 0, label: 'P 毎秒3cm' },
      { a: -2, b: 40, label: 'Q 毎秒2cm（反対向き）' },
    ],
    points: [{ x: 8, y: 24, label: '出会う' }],
    caption: '周の長さ40cmの長方形を反対向きに進むP（毎秒3cm）とQ（毎秒2cm）は、40÷(3＋2)＝8秒後に出会う',
  },

  // sansu_12 4. 単位量あたりの文章題パターン（工場の生産効率比較）
  lf_sansu_76: {
    kind: 'barChart',
    yLabel: '1時間あたりの生産数（個/時）',
    bars: [
      { label: '工場X(480個/6時間)', value: 80 },
      { label: '工場Y(525個/7時間)', value: 75 },
      { label: '工場Z(440個/5時間)', value: 88 },
    ],
    caption: 'すべて「1時間あたり」にそろえて比べると、効率のよい順はZ＞X＞Y',
  },

  // sansu_13 4. 比例の文章題（バネ：10gで2cm→35gで7cm）
  lf_sansu_77: {
    kind: 'coordinate',
    xRange: [0, 40],
    yRange: [0, 8],
    lines: [{ a: 0.2, b: 0, label: 'のび＝0.2×おもり' }],
    points: [
      { x: 10, y: 2, label: '10g→2cm' },
      { x: 35, y: 7, label: '35g→7cm' },
    ],
    caption: 'バネの伸びはおもりの重さに比例。1gあたり2÷10＝0.2cm伸びるので、35gでは0.2×35＝7cm伸びる',
  },

  // sansu_13 5. 反比例の文章題（面積60cm²一定の長方形：たて×よこ＝60）
  lf_sansu_78: {
    kind: 'coordinate',
    xRange: [1, 15],
    yRange: [0, 15],
    hyperbolas: [{ k: 60, label: 'たて×よこ＝60' }],
    points: [
      { x: 5, y: 12, label: 'たて5→よこ12' },
      { x: 12, y: 5, label: 'たて12→よこ5' },
    ],
    caption: '面積60cm²の長方形は、たてとよこが反比例の関係（たて×よこ＝60で一定）。たてが5cmならよこ12cm、たてが12cmならよこ5cm',
  },

  // sansu_14 2. 対称移動（点(2,3)のx軸・y軸に関する線対称移動）
  lf_sansu_79: {
    kind: 'coordinate',
    xRange: [-4, 4],
    yRange: [-4, 4],
    points: [
      { x: 2, y: 3, label: 'P(2,3)' },
      { x: 2, y: -3, label: "P'(2,-3)" },
      { x: -2, y: 3, label: "P''(-2,3)" },
    ],
    segments: [
      [{ x: 2, y: 3 }, { x: 2, y: -3 }],
      [{ x: 2, y: 3 }, { x: -2, y: 3 }],
    ],
    caption: '点(2,3)をx軸について線対称移動すると(2,-3)、y軸について線対称移動すると(-2,3)になる',
  },

  // sansu_14 5. 多角形の転がり移動（1辺分の回転角＝180°－内角）
  lf_sansu_80: {
    kind: 'barChart',
    yLabel: '1辺分の回転角（度）',
    bars: [
      { label: '正三角形(内角60°)', value: 120 },
      { label: '正方形(内角90°)', value: 90 },
      { label: '正六角形(内角120°)', value: 60 },
    ],
    caption: '1辺分だけ転がって倒れる回転角＝180°−内角。内角が大きい図形ほど回転角は小さい',
  },

  // sansu_15 3. 角すい・円すいの切断と相似（高さ12cmの円すいを頂点から4cmで切断）
  lf_sansu_81: {
    kind: 'solid',
    shape: 'cone',
    labels: { height: '高さ12cm' },
    caption: '高さ12cmの円すいを頂点から4cmで底面に平行に切ると、相似比4:12＝1:3、上部の小さい円すいと元の円すいの体積比は1³:3³＝1:27',
  },

  // sansu_16 2. 差がついた分配算（合計2,600円、姉は妹より400円多い）
  lf_sansu_82: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '姉', value: 1500 },
      { label: '妹', value: 1100 },
    ],
    caption: '合計2,600円、姉は妹より400円多い→妹＝(2,600−400)÷2＝1,100円、姉＝(2,600＋400)÷2＝1,500円',
  },

  // sansu_16 4. 分配後に移動する問題（合計5,000円、7:3→兄が弟に1,000円渡すと1:1）
  lf_sansu_83: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: '兄（はじめ）', value: 3500 },
      { label: '弟（はじめ）', value: 1500 },
      { label: '兄（あと）', value: 2500 },
      { label: '弟（あと）', value: 2500 },
    ],
    caption: '合計5,000円を7:3で分けた後、兄が弟に1,000円渡すと1:1（2,500円ずつ）になる',
  },

  // sansu_16 5. 3人以上の分配算（合計90個、A=2B、C=B-6→A48,B24,C18）
  lf_sansu_84: {
    kind: 'barChart',
    yLabel: '個数',
    bars: [
      { label: 'A(=2B)', value: 48 },
      { label: 'B', value: 24 },
      { label: 'C(=B−6)', value: 18 },
    ],
    caption: '合計90個、AはBの2倍、CはBより6個少ない→4B−6＝90からB＝24、A＝48、C＝18',
  },

  // sansu_17 2. 平均を目標値にする問題（30人平均65→31人目標66→転入生96点）
  lf_sansu_85: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: 'もとの30人の平均', value: 65 },
      { label: '31人での目標平均', value: 66 },
      { label: '転入生の点数', value: 96 },
    ],
    caption: '30人合計1,950点→31人合計目標2,046点→転入生＝2,046−1,950＝96点',
  },

  // sansu_17 3. 面積図（てんびん図）で解く平均（男子24人70点・女子16人80点→全体74点）
  lf_sansu_86: {
    kind: 'barChart',
    yLabel: '平均点',
    bars: [
      { label: '男子24人', value: 70 },
      { label: '女子16人', value: 80 },
      { label: '全体40人', value: 74 },
    ],
    caption: '男子の合計1,680点＋女子の合計1,280点＝2,960点→全体の平均＝2,960÷40＝74点（単純平均75点ではない）',
  },

  // sansu_17 5. 平均とつるかめ算の融合問題（40問×3点=120点の仮定と実際96点の差）
  lf_sansu_87: {
    kind: 'barChart',
    yLabel: '点数',
    bars: [
      { label: '全問正解と仮定', value: 120 },
      { label: '実際の合計点', value: 96 },
    ],
    caption: '40問×3点＝120点（全問正解の仮定）との差24点を、1問不正解にすると減る4点で割ると不正解6問、正解34問',
  },

  // sansu_18 3. 複数の給水口・排水口がある問題（0-3分で0→25cm、3-5分で25→35cm）
  lf_sansu_88: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水位（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 25 },
          { x: 5, y: 35 },
        ],
      },
    ],
    caption: '最初の3分は給水のみ（毎分500cm³）で水位25cmまで上昇、3分後から排水（毎分200cm³）も始まり正味毎分300cm³で5分後には35cmになる',
  },

  // sansu_18 4. おもりを沈める問題（底面積40cm²、おもり200cm³→水位+5cm）
  lf_sansu_89: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 0, label: '沈める前の水位' },
      { x: 5, label: '沈めた後(+5cm)' },
    ],
    caption: '底面積40cm²の容器に体積200cm³のおもりを完全に沈めると、水位は200÷40＝5cm上がる',
  },

  // sansu_18 5. 複合容器のグラフ（毎分100cm³：0-3分で0→15cm、3-8分で15→25cm）
  lf_sansu_90: {
    kind: 'lineChart',
    xLabel: '時間（分）',
    yLabel: '水位（cm）',
    series: [
      {
        label: '水位',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 15 },
          { x: 8, y: 25 },
        ],
      },
    ],
    caption: '毎分100cm³で水を入れたときのグラフ：0〜3分で水位0→15cm（底面積300÷15＝20cm²）、3〜8分で15→25cm（底面積500÷10＝50cm²）',
  },

  // sansu_19 5. 魔方陣の基本（3×3魔方陣：4 9 2／3 5 7／8 1 6、各列の和15）
  lf_sansu_91: {
    kind: 'coordinate',
    xRange: [-1, 3],
    yRange: [-1, 3],
    segments: [
      [{ x: -0.5, y: -0.5 }, { x: 2.5, y: -0.5 }],
      [{ x: 2.5, y: -0.5 }, { x: 2.5, y: 2.5 }],
      [{ x: 2.5, y: 2.5 }, { x: -0.5, y: 2.5 }],
      [{ x: -0.5, y: 2.5 }, { x: -0.5, y: -0.5 }],
      [{ x: 0.5, y: -0.5 }, { x: 0.5, y: 2.5 }],
      [{ x: 1.5, y: -0.5 }, { x: 1.5, y: 2.5 }],
      [{ x: -0.5, y: 0.5 }, { x: 2.5, y: 0.5 }],
      [{ x: -0.5, y: 1.5 }, { x: 2.5, y: 1.5 }],
    ],
    points: [
      { x: 0, y: 2, label: '4' }, { x: 1, y: 2, label: '9' }, { x: 2, y: 2, label: '2' },
      { x: 0, y: 1, label: '3' }, { x: 1, y: 1, label: '5' }, { x: 2, y: 1, label: '7' },
      { x: 0, y: 0, label: '8' }, { x: 1, y: 0, label: '1' }, { x: 2, y: 0, label: '6' },
    ],
    caption: '3×3の魔方陣：たて・よこ・ななめの和がすべて15になる（1〜9の合計45÷3列＝15）。中心には必ず5が入る',
  },

  // sansu_20 2. 仕事の比の文章題（速さの比3:2→日数の比は逆比2:3）
  lf_sansu_92: {
    kind: 'barChart',
    yLabel: '比の値',
    bars: [
      { label: 'Aの仕事の速さ', value: 3 },
      { label: 'Bの仕事の速さ', value: 2 },
      { label: 'Aがかかる日数', value: 2 },
      { label: 'Bがかかる日数', value: 3 },
    ],
    caption: '速さの比3:2のとき、日数の比はその逆比2:3になる（速いAの方が日数は少ない）',
  },

  // sansu_20 3. 速さの比の文章題（往復平均：行き時速4km・帰り時速6km）
  lf_sansu_93: {
    kind: 'lineChart',
    xLabel: '時間（時間）',
    yLabel: '道のり（km）',
    series: [
      {
        label: 'A町からの距離',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 3, y: 12 },
          { x: 5, y: 0 },
        ],
      },
    ],
    caption: '道のり12kmを行き時速4km（3時間）・帰り時速6km（2時間）で往復。往復24km÷往復5時間＝平均時速4.8km（単純平均5km/hではない）',
  },

  // sansu_20 5. 年齢比・分配比の融合問題（父45歳・子10歳、比9:2→25年後に半分）
  lf_sansu_94: {
    kind: 'lineChart',
    xLabel: '何年後',
    yLabel: '年齢',
    series: [
      { label: '父の年齢', points: [{ x: 0, y: 45 }, { x: 25, y: 70 }] },
      { label: '子の年齢', points: [{ x: 0, y: 10 }, { x: 25, y: 35 }] },
    ],
    caption: '父45歳・子10歳（比9:2）、年齢の差35歳は一定。25年後に父70歳・子35歳となり、子が父のちょうど半分になる',
  },

  // sansu_21 2. 中空方陣の応用（1辺10人の外側と1辺8人の内側の模式図）
  lf_sansu_95: {
    kind: 'coordinate',
    xRange: [-0.5, 3.5],
    yRange: [-0.5, 3.5],
    points: [
      { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 },
      { x: 0, y: 1 }, { x: 3, y: 1 },
      { x: 0, y: 2 }, { x: 3, y: 2 },
      { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 },
      { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 },
    ],
    caption: '外側の1重目（1辺10人、模式図）と内側の2重目（1辺8人、外側より2人少ない）。1重目＝(10−1)×4＝36人、2重目＝(8−1)×4＝28人、合計64人',
  },

  // sansu_21 3. 数表の規則性（行×列の九九型数表、4行3列＝12）
  lf_sansu_96: {
    kind: 'coordinate',
    xRange: [-1, 4],
    yRange: [-1, 4],
    segments: [
      [{ x: -0.5, y: -0.5 }, { x: 3.5, y: -0.5 }],
      [{ x: 3.5, y: -0.5 }, { x: 3.5, y: 3.5 }],
      [{ x: 3.5, y: 3.5 }, { x: -0.5, y: 3.5 }],
      [{ x: -0.5, y: 3.5 }, { x: -0.5, y: -0.5 }],
      [{ x: 0.5, y: -0.5 }, { x: 0.5, y: 3.5 }],
      [{ x: 1.5, y: -0.5 }, { x: 1.5, y: 3.5 }],
      [{ x: 2.5, y: -0.5 }, { x: 2.5, y: 3.5 }],
      [{ x: -0.5, y: 0.5 }, { x: 3.5, y: 0.5 }],
      [{ x: -0.5, y: 1.5 }, { x: 3.5, y: 1.5 }],
      [{ x: -0.5, y: 2.5 }, { x: 3.5, y: 2.5 }],
    ],
    points: [
      { x: 0, y: 3, label: '1' }, { x: 1, y: 3, label: '2' }, { x: 2, y: 3, label: '3' }, { x: 3, y: 3, label: '4' },
      { x: 0, y: 2, label: '2' }, { x: 1, y: 2, label: '4' }, { x: 2, y: 2, label: '6' }, { x: 3, y: 2, label: '8' },
      { x: 0, y: 1, label: '3' }, { x: 1, y: 1, label: '6' }, { x: 2, y: 1, label: '9' }, { x: 3, y: 1, label: '12' },
      { x: 0, y: 0, label: '4' }, { x: 1, y: 0, label: '8' }, { x: 2, y: 0, label: '?' }, { x: 3, y: 0, label: '16' },
    ],
    caption: '数表は「行の数×列の数」になっている（九九の表と同じ規則）。4行目3列目＝4×3＝12',
  },

  // sansu_21 4. 階差数列（1,2,4,7,11,16…階差1,2,3,4,5）
  lf_sansu_97: {
    kind: 'lineChart',
    xLabel: '番目 n',
    yLabel: '数',
    series: [
      {
        label: '数列',
        markers: true,
        points: [
          { x: 1, y: 1 },
          { x: 2, y: 2 },
          { x: 3, y: 4 },
          { x: 4, y: 7 },
          { x: 5, y: 11 },
          { x: 6, y: 16 },
        ],
      },
    ],
    caption: '数列1,2,4,7,11,16,…の階差は1,2,3,4,5と増えていく等差数列。第7項＝16＋6＝22',
  },

  // sansu_22 3. 一部を取り出して入れ替える食塩水問題（15%の食塩水500g→100g入れ替え→12%）
  lf_sansu_98: {
    kind: 'barChart',
    yLabel: '食塩の重さ（g）',
    bars: [
      { label: '元の食塩水500g(15%)', value: 75 },
      { label: '100g取り出した後の残り400g', value: 60 },
      { label: '水100gを加えた後500g', value: 60 },
    ],
    caption: '15%の食塩水500gから100gを取り出しても残り400gの濃度は15%のまま（食塩60g）。水100gを加えても食塩は変わらず60g→濃度＝60÷500×100＝12%',
  },

  // sansu_22 4. 売買損益と比の融合（A・Bの原価比3:2、Aの定価3,600円）
  lf_sansu_99: {
    kind: 'barChart',
    yLabel: '金額（円）',
    bars: [
      { label: 'A原価', value: 3000 },
      { label: 'A定価', value: 3600 },
      { label: 'B原価', value: 2000 },
      { label: 'B定価', value: 2400 },
    ],
    caption: 'A・Bの原価の比は3:2。どちらも原価の20%の利益を見込むと、Aの定価3,600円のときBの原価は2,000円、定価は2,400円',
  },

  // sansu_22 5. 割合の文章題の総合演習（来客数：昨年100→今年112→来年103.04）
  lf_sansu_100: {
    kind: 'barChart',
    yLabel: '来客数（昨年＝100）',
    bars: [
      { label: '昨年', value: 100 },
      { label: '今年(+12%)', value: 112 },
      { label: '来年(-8%見込み)', value: 103.04 },
    ],
    caption: '昨年100人→今年は12%増えて112人→来年は今年より8%減る見込みで112×0.92＝103.04人',
  },
};
