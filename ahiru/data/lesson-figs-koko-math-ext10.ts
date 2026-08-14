import type { Figure } from './figures';

// 高校受験 数学「確率・データの活用」拡張ユニット（koko_math_s341〜koko_math_s375）の教科書用図解。
// キーは lessons-koko-math-ext10.ts の figureId と対応（35課中17課に付与）。
// この単元は「数えた結果」「分布の形」を目で見ることが理解に直結するため、
// ヒストグラム（barChart + histogram）・箱ひげ図（boxplot）・円グラフ・折れ線を中心に構成した。
// すべての度数・確率は合計が総度数（または 1）になるよう検算済み。
export const lessonFigsKokoMathExt10: Record<string, Figure> = {
  // s344：道順の数え上げ。横3・縦2の格子。最短経路は 5!/(3!2!) = 10 通り
  lf_kokomathext10_344: {
    kind: 'coordinate',
    xRange: [0, 3],
    yRange: [0, 2],
    segments: [
      [{ x: 0, y: 0 }, { x: 3, y: 0 }],
      [{ x: 0, y: 1 }, { x: 3, y: 1 }],
      [{ x: 0, y: 2 }, { x: 3, y: 2 }],
      [{ x: 0, y: 0 }, { x: 0, y: 2 }],
      [{ x: 1, y: 0 }, { x: 1, y: 2 }],
      [{ x: 2, y: 0 }, { x: 2, y: 2 }],
      [{ x: 3, y: 0 }, { x: 3, y: 2 }],
    ],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 1, y: 1, label: 'P' },
      { x: 3, y: 2, label: 'B' },
    ],
    caption:
      'A から B へ最短で行く道順。右へ3区画・上へ2区画の計5回の移動の並べ方なので 5!÷(3!×2!)＝10通り。P を必ず通る道順は A→P が2通り、P→B が3通りで 2×3＝6通り',
  },

  // s349：大小2つのさいころの目の和の度数（全36通り。合計 1+2+3+4+5+6+5+4+3+2+1 = 36）
  lf_kokomathext10_349: {
    kind: 'barChart',
    xLabel: '2つのさいころの目の和',
    yLabel: '場合の数（通り）',
    yMax: 7,
    histogram: true,
    bars: [
      { label: '2', value: 1, color: '#0EA5E9' },
      { label: '3', value: 2, color: '#0EA5E9' },
      { label: '4', value: 3, color: '#0EA5E9' },
      { label: '5', value: 4, color: '#0EA5E9' },
      { label: '6', value: 5, color: '#0EA5E9' },
      { label: '7', value: 6, color: '#0369A1' },
      { label: '8', value: 5, color: '#0EA5E9' },
      { label: '9', value: 4, color: '#0EA5E9' },
      { label: '10', value: 3, color: '#0EA5E9' },
      { label: '11', value: 2, color: '#0EA5E9' },
      { label: '12', value: 1, color: '#0EA5E9' },
    ],
    caption:
      '和は2〜12の11種類だが、起こりやすさは同じではない。合計は36通りで、和7が6通り（＝6/36＝1/6）と最も多い。「11通りだから1/11」としてはいけない理由がこの形に表れている',
  },

  // s350：硬貨3枚を投げたときの「表の枚数」の分布（1+3+3+1 = 8通り）
  lf_kokomathext10_350: {
    kind: 'barChart',
    xLabel: '表が出た枚数',
    yLabel: '場合の数（通り）',
    yMax: 4,
    histogram: true,
    bars: [
      { label: '0枚', value: 1, color: '#0EA5E9' },
      { label: '1枚', value: 3, color: '#0369A1' },
      { label: '2枚', value: 3, color: '#0369A1' },
      { label: '3枚', value: 1, color: '#0EA5E9' },
    ],
    caption:
      '硬貨3枚の出方は 2×2×2＝8通り。表の枚数は0〜3の4種類だが、1枚・2枚が各3通りで起こりやすい。「4種類だから1/4」は誤り（表2枚は 3/8）',
  },

  // s351：大小2つのさいころの目の差（大−小）の度数（6+10+8+6+4+2 = 36）
  lf_kokomathext10_351: {
    kind: 'barChart',
    xLabel: '2つのさいころの目の差',
    yLabel: '場合の数（通り）',
    yMax: 11,
    histogram: true,
    bars: [
      { label: '0', value: 6, color: '#0EA5E9' },
      { label: '1', value: 10, color: '#0369A1' },
      { label: '2', value: 8, color: '#0EA5E9' },
      { label: '3', value: 6, color: '#0EA5E9' },
      { label: '4', value: 4, color: '#0EA5E9' },
      { label: '5', value: 2, color: '#0EA5E9' },
    ],
    caption:
      '目の差は0〜5の6種類だが度数はばらばら（合計36通り）。差1が10通りで最多、差5は(1,6)(6,1)の2通りだけ。差2は8通りなので確率は 8/36＝2/9',
  },

  // s356：赤玉3個・白玉2個から2個取り出すとき、「もどす」「もどさない」の確率比較（%）
  //  もどす：赤赤 9/25=36%、白白 4/25=16%、赤白 12/25=48%（合計100%）
  //  もどさない：赤赤 3/10=30%、白白 1/10=10%、赤白 6/10=60%（合計100%）
  lf_kokomathext10_356: {
    kind: 'barChart',
    xLabel: '取り出し方（赤3個・白2個の袋から2個）',
    yLabel: '確率（％）',
    yMax: 70,
    bars: [
      { label: '赤赤:もどす', value: 36, color: '#0EA5E9' },
      { label: '赤赤:もどさない', value: 30, color: '#0369A1' },
      { label: '白白:もどす', value: 16, color: '#0EA5E9' },
      { label: '白白:もどさない', value: 10, color: '#0369A1' },
      { label: '赤白:もどす', value: 48, color: '#0EA5E9' },
      { label: '赤白:もどさない', value: 60, color: '#0369A1' },
    ],
    caption:
      '同じ袋でも「もどす」と「もどさない」で確率は変わる。同じ色がそろう確率は下がり（36→30、16→10）、ちがう色になる確率は上がる（48→60）。どちらも3つの合計はちょうど100％',
  },

  // s357：さいころを n 回投げて「少なくとも1回1の目が出る」確率 1−(5/6)^n（％）
  lf_kokomathext10_357: {
    kind: 'lineChart',
    xLabel: 'さいころを投げる回数',
    yLabel: '少なくとも1回1が出る確率（％）',
    xRange: [0, 6],
    yRange: [0, 100],
    series: [
      {
        label: '1−(5/6)ⁿ',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 1, y: 16.7 },
          { x: 2, y: 30.6 },
          { x: 3, y: 42.1 },
          { x: 4, y: 51.8 },
          { x: 5, y: 59.8 },
          { x: 6, y: 66.5 },
        ],
      },
      {
        label: '50％の目安',
        color: '#EF4444',
        dashed: true,
        points: [
          { x: 0, y: 50 },
          { x: 6, y: 50 },
        ],
      },
    ],
    caption:
      '1回ごとの確率 1/6 を回数分たすと6回で100％になってしまうが、実際はそうならない。3回でも 91/216≒42.1％、50％を超えるのは4回目（671/1296≒51.8％）。「少なくとも1回」はたし算ではなく余事象で求める',
  },

  // s358：10本中3本が当たりのくじを2本引くとき（全 45 通り＝10C2）
  //  少なくとも1本当たり：45−21＝24通り、2本ともはずれ：7C2＝21通り
  lf_kokomathext10_358: {
    kind: 'pieChart',
    slices: [
      { label: '少なくとも1本当たり 24通り', value: 24, color: '#0EA5E9' },
      { label: '2本ともはずれ 21通り', value: 21, color: '#94A3B8' },
    ],
    caption:
      '10本中3本が当たりのくじから2本引く。全体は 10C2＝45通り。求めにくい「少なくとも1本当たり」は、数えやすい「2本ともはずれ（7C2＝21通り）」を全体から引いて 45−21＝24通り、確率は 24/45＝8/15',
  },

  // s360：ハンドボール投げの記録（50人）。合計 4+8+14+12+8+4 = 50
  lf_kokomathext10_360: {
    kind: 'barChart',
    xLabel: '記録（m）',
    yLabel: '度数（人）',
    yMax: 16,
    histogram: true,
    bars: [
      { label: '10〜15', value: 4, color: '#0EA5E9' },
      { label: '15〜20', value: 8, color: '#0EA5E9' },
      { label: '20〜25', value: 14, color: '#0369A1' },
      { label: '25〜30', value: 12, color: '#0EA5E9' },
      { label: '30〜35', value: 8, color: '#0EA5E9' },
      { label: '35〜40', value: 4, color: '#0EA5E9' },
    ],
    caption:
      '50人のハンドボール投げ。階級の幅は5m、度数の合計は50人。最頻値は度数最大の階級の階級値22.5m、平均値は（階級値×度数）の合計1245÷50＝24.9m。25m以上は 12+8+4＝24人',
  },

  // s361：通学時間（50人）。右に長い裾を引く分布。合計 12+15+9+6+4+3+1 = 50
  lf_kokomathext10_361: {
    kind: 'barChart',
    xLabel: '通学時間（分）',
    yLabel: '度数（人）',
    yMax: 17,
    histogram: true,
    bars: [
      { label: '0〜10', value: 12, color: '#0EA5E9' },
      { label: '10〜20', value: 15, color: '#0369A1' },
      { label: '20〜30', value: 9, color: '#0EA5E9' },
      { label: '30〜40', value: 6, color: '#0EA5E9' },
      { label: '40〜50', value: 4, color: '#0EA5E9' },
      { label: '50〜60', value: 3, color: '#0EA5E9' },
      { label: '60〜70', value: 1, color: '#0EA5E9' },
    ],
    caption:
      '右に長い裾を引く分布。中央値（25番目と26番目）は10〜20分の階級に入るが、遠くから通う少数の人に引っぱられて平均値は1130÷50＝22.6分になる。裾を引く向きの側へ平均値がずれる',
  },

  // s362：50人のテスト得点の相対度数（度数 3,16,12,12,7 → 相対度数 0.06+0.32+0.24+0.24+0.14 = 1.00）
  lf_kokomathext10_362: {
    kind: 'pieChart',
    slices: [
      { label: '0〜20点 3人(0.06)', value: 3, color: '#94A3B8' },
      { label: '20〜40点 16人(0.32)', value: 16, color: '#0369A1' },
      { label: '40〜60点 12人(0.24)', value: 12, color: '#0EA5E9' },
      { label: '60〜80点 12人(0.24)', value: 12, color: '#16A34A' },
      { label: '80〜100点 7人(0.14)', value: 7, color: '#F59E0B' },
    ],
    caption:
      '相対度数は「全体を1とみたときの割合」＝度数÷総度数。50人なので 3/50＝0.06、16/50＝0.32、12/50＝0.24、7/50＝0.14。相対度数の合計は必ず1.00になる（検算に使える）',
  },

  // s363：s362 と同じデータの累積相対度数（0.06→0.38→0.62→0.86→1.00）
  lf_kokomathext10_363: {
    kind: 'lineChart',
    xLabel: '得点（点）',
    yLabel: '累積相対度数（％）',
    xRange: [0, 100],
    yRange: [0, 100],
    series: [
      {
        label: '累積相対度数',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 0 },
          { x: 20, y: 6 },
          { x: 40, y: 38 },
          { x: 60, y: 62 },
          { x: 80, y: 86 },
          { x: 100, y: 100 },
        ],
      },
      {
        label: '50％の線',
        color: '#EF4444',
        dashed: true,
        points: [
          { x: 0, y: 50 },
          { x: 100, y: 50 },
        ],
      },
    ],
    caption:
      '累積相対度数は必ず増え続け、最後は1.00（100％）になる。50％の線と交わるのは40〜60点の区間なので、中央値が入る階級は「40点以上60点未満」。度数が最大の階級（20〜40点）とは別であることに注意',
  },

  // s364：1か月に読んだ本の冊数（30人）。合計 3+7+8+5+3+2+1+1 = 30、総冊数 90 → 平均3.0冊・中央値2冊
  lf_kokomathext10_364: {
    kind: 'barChart',
    xLabel: '1か月に読んだ本の冊数',
    yLabel: '人数（人）',
    yMax: 9,
    histogram: true,
    bars: [
      { label: '0', value: 3, color: '#0EA5E9' },
      { label: '1', value: 7, color: '#0EA5E9' },
      { label: '2', value: 8, color: '#0369A1' },
      { label: '3', value: 5, color: '#0EA5E9' },
      { label: '4', value: 3, color: '#0EA5E9' },
      { label: '5', value: 2, color: '#0EA5E9' },
      { label: '6', value: 0, color: '#0EA5E9' },
      { label: '7', value: 0, color: '#0EA5E9' },
      { label: '8', value: 0, color: '#0EA5E9' },
      { label: '9', value: 0, color: '#0EA5E9' },
      { label: '10', value: 1, color: '#F59E0B' },
      { label: '20', value: 1, color: '#EF4444' },
    ],
    caption:
      '30人の読書冊数。総冊数は 0×3+1×7+2×8+3×5+4×3+5×2+10+20＝90冊で平均3.0冊。しかし15番目・16番目はどちらも2冊なので中央値は2冊、最頻値も2冊（8人）。右端の10冊・20冊の2人が平均だけを押し上げている',
  },

  // s366：外れ値が代表値に与える影響。5人 60,65,70,75,80（平均70・中央値70）に0点の1人が加わった場合
  //  平均 350÷6＝58.3、中央値 (65+70)÷2＝67.5
  lf_kokomathext10_366: {
    kind: 'barChart',
    xLabel: '代表値のくらべ方',
    yLabel: '点数（点）',
    yMax: 80,
    bars: [
      { label: '平均:外れ値なし', value: 70, color: '#F59E0B' },
      { label: '平均:0点が1人', value: 58.3, color: '#EF4444' },
      { label: '中央値:外れ値なし', value: 70, color: '#0369A1' },
      { label: '中央値:0点が1人', value: 67.5, color: '#0EA5E9' },
    ],
    caption:
      '60・65・70・75・80点の5人（平均70点、中央値70点）に0点の1人が加わると、平均は 350÷6＝58.3点へ11.7点も下がるのに、中央値は (65+70)÷2＝67.5点で2.5点しか動かない。外れ値があるときは中央値の方が実態に合う',
  },

  // s368：11個のデータ 3,5,6,8,9,11,12,14,15,18,21 の五数要約
  lf_kokomathext10_368: {
    kind: 'boxplot',
    min: 3,
    q1: 6,
    median: 11,
    q3: 15,
    max: 21,
    scaleMin: 0,
    scaleMax: 25,
    caption:
      'データ 3,5,6,8,9,11,12,14,15,18,21（11個）の箱ひげ図。中央値は6番目の11。データが奇数個のときは中央値を除いて半分に分け、下位5個{3,5,6,8,9}の中央値6が第1四分位数、上位5個{12,14,15,18,21}の中央値15が第3四分位数。範囲は21−3＝18、四分位範囲は15−6＝9',
  },

  // s369：40人のテスト得点の箱ひげ図（最小32・Q1 55・中央値68・Q3 78・最大96）
  lf_kokomathext10_369: {
    kind: 'boxplot',
    min: 32,
    q1: 55,
    median: 68,
    q3: 78,
    max: 96,
    scaleMin: 0,
    scaleMax: 100,
    caption:
      '40人のテスト得点。ひげの左端・箱の左・中央線・箱の右・ひげの右端で区切られた4つの区間に、それぞれおよそ10人（全体の25％）ずつ入る。範囲は96−32＝64点、四分位範囲は78−55＝23点。平均値は箱ひげ図からは読み取れない',
  },

  // s370：右に長い裾を引く分布に対応する箱ひげ図（中央値が箱の左寄り、右ひげが長い）
  lf_kokomathext10_370: {
    kind: 'boxplot',
    min: 0,
    q1: 8,
    median: 14,
    q3: 28,
    max: 60,
    scaleMin: 0,
    scaleMax: 60,
    caption:
      '中央値14が箱の左寄りにある（中央値−Q1＝6に対しQ3−中央値＝14）。さらに右のひげが 60−28＝32 と長い。これは「小さい値に多くが集まり、右に長い裾を引くヒストグラム」に対応し、平均値は中央値より大きくなる',
  },

  // s374：A社とB社の売上高（億円）。縦軸を0から取った正直なグラフ
  lf_kokomathext10_374: {
    kind: 'lineChart',
    xLabel: '年',
    yLabel: '売上高（億円）',
    xRange: [2021, 2025],
    yRange: [0, 120],
    series: [
      {
        label: 'A社',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 2021, y: 100 },
          { x: 2022, y: 102 },
          { x: 2023, y: 104 },
          { x: 2024, y: 106 },
          { x: 2025, y: 108 },
        ],
      },
      {
        label: 'B社',
        color: '#F59E0B',
        markers: true,
        points: [
          { x: 2021, y: 80 },
          { x: 2022, y: 86 },
          { x: 2023, y: 92 },
          { x: 2024, y: 99 },
          { x: 2025, y: 107 },
        ],
      },
    ],
    caption:
      '縦軸を0から取ると、A社は5年で100→108億円（8％増）とほぼ横ばい、B社は80→107億円（約34％増）と急成長していることがわかる。縦軸を95〜110に切り取ると、A社の線が急上昇したように見えてしまう',
  },
};
