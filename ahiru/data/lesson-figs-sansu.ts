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
};
