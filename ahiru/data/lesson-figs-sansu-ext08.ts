import type { Figure } from './figures';

// 中学受験 算数 拡張バッチ08：規則性・数列（sansu_s276〜sansu_s305）用の図解。
// キーは lessons-sansu-ext08.ts の figureId と対応。
export const lessonFigsSansuExt08: Record<string, Figure> = {
  // s276: 等差数列とは（等差 vs 等比の対比）
  lf_ext08_01: {
    kind: 'lineChart',
    xLabel: '項番号（何番目）',
    yLabel: '値',
    series: [
      {
        label: '等差数列 3,7,11,15,19（公差+4）',
        markers: true,
        points: [
          { x: 1, y: 3 },
          { x: 2, y: 7 },
          { x: 3, y: 11 },
          { x: 4, y: 15 },
          { x: 5, y: 19 },
        ],
      },
      {
        label: '等差数列ではない 2,4,8,16',
        color: '#E11D48',
        dashed: true,
        markers: true,
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 4 },
          { x: 3, y: 8 },
          { x: 4, y: 16 },
        ],
      },
    ],
    caption: '青は差がつねに+4で一直線に増える等差数列。赤は差が2→4→8と変化しており等差数列ではない（等比数列）',
  },

  // s277: 一般項の公式
  lf_ext08_02: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '値',
    series: [
      {
        label: '初項3・公差5',
        markers: true,
        points: [
          { x: 1, y: 3 },
          { x: 2, y: 8 },
          { x: 3, y: 13 },
          { x: 4, y: 18 },
          { x: 5, y: 23 },
          { x: 6, y: 28 },
          { x: 7, y: 33 },
          { x: 8, y: 38 },
        ],
      },
    ],
    caption: '第8項＝3＋(8−1)×5＝38。かっこの中は「n−1」であって「n」ではないことに注意',
  },

  // s278: 公差がマイナスの等差数列
  lf_ext08_03: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '値',
    series: [
      {
        label: '初項50・公差−6',
        markers: true,
        color: '#E11D48',
        points: [
          { x: 1, y: 50 },
          { x: 2, y: 44 },
          { x: 3, y: 38 },
          { x: 4, y: 32 },
          { x: 5, y: 26 },
          { x: 6, y: 20 },
          { x: 7, y: 14 },
          { x: 8, y: 8 },
          { x: 9, y: 2 },
          { x: 10, y: -4 },
        ],
      },
    ],
    caption: '公差がマイナスなので右下がり。第9項まではプラス（2）、第10項で初めてマイナス（−4）になる',
  },

  // s280: 数列の中の奇数番目・偶数番目
  lf_ext08_04: {
    kind: 'lineChart',
    xLabel: '番号',
    yLabel: '値',
    series: [
      {
        label: '元の数列（初項2・公差3）',
        markers: true,
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 5 },
          { x: 3, y: 8 },
          { x: 4, y: 11 },
          { x: 5, y: 14 },
          { x: 6, y: 17 },
          { x: 7, y: 20 },
          { x: 8, y: 23 },
          { x: 9, y: 26 },
          { x: 10, y: 29 },
        ],
      },
      {
        label: '奇数番目だけを抜き出した新しい数列',
        color: '#16A34A',
        dashed: true,
        markers: true,
        points: [
          { x: 1, y: 2 },
          { x: 2, y: 8 },
          { x: 3, y: 14 },
          { x: 4, y: 20 },
          { x: 5, y: 26 },
        ],
      },
    ],
    caption: '1つおきに抜き出すと公差はもとの2倍（3→6）になる。緑の数列の10番目は元の数列の19番目にあたる',
  },

  // s282: ガウスの方法（ペアで101になる）
  lf_ext08_05: {
    kind: 'barChart',
    yLabel: '和',
    bars: [
      { label: '1+100', value: 101 },
      { label: '2+99', value: 101 },
      { label: '3+98', value: 101 },
      { label: '4+97', value: 101 },
      { label: '5+96', value: 101 },
    ],
    caption: 'どのペアも和は101で一定。101になるペアが50組できるので、1〜100の和＝101×50＝5050',
  },

  // s283: 等差数列の和の公式（基本）
  lf_ext08_06: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '値',
    series: [
      {
        label: '初項3・公差4（3〜51）',
        markers: true,
        points: [
          { x: 1, y: 3 }, { x: 2, y: 7 }, { x: 3, y: 11 }, { x: 4, y: 15 },
          { x: 5, y: 19 }, { x: 6, y: 23 }, { x: 7, y: 27 }, { x: 8, y: 31 },
          { x: 9, y: 35 }, { x: 10, y: 39 }, { x: 11, y: 43 }, { x: 12, y: 47 },
          { x: 13, y: 51 },
        ],
      },
    ],
    caption: '3から51までの項数は13個（(51−3)÷4＋1）。和＝(3＋51)×13÷2＝351',
  },

  // s285: 奇数の和・偶数の和
  lf_ext08_07: {
    kind: 'barChart',
    yLabel: '和',
    bars: [
      { label: '奇数の和(1〜99)', value: 2500 },
      { label: '偶数の和(2〜100)', value: 2550 },
    ],
    caption: '奇数1〜99も偶数2〜100も項数はどちらも50個。項数を末項の数値（99や100）と混同しないこと',
  },

  // s286: 部分区間の和
  lf_ext08_08: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '値',
    series: [
      {
        label: '初項2・公差5',
        markers: true,
        points: [
          { x: 1, y: 2 }, { x: 2, y: 7 }, { x: 3, y: 12 }, { x: 4, y: 17 },
          { x: 5, y: 22 }, { x: 6, y: 27 }, { x: 7, y: 32 }, { x: 8, y: 37 },
          { x: 9, y: 42 }, { x: 10, y: 47 },
        ],
      },
    ],
    caption: '5番目(22)から10番目(47)までの6個の和＝(22＋47)×6÷2＝207',
  },

  // s287: 分数の数列の和（telescoping）
  lf_ext08_09: {
    kind: 'lineChart',
    xLabel: '足した項の数',
    yLabel: '部分和',
    yRange: [0, 1],
    series: [
      {
        label: '1/(1×2)+1/(2×3)+…の部分和',
        markers: true,
        points: [
          { x: 1, y: 0.5 }, { x: 2, y: 0.667 }, { x: 3, y: 0.75 },
          { x: 4, y: 0.8 }, { x: 5, y: 0.833 }, { x: 6, y: 0.857 },
          { x: 7, y: 0.875 }, { x: 8, y: 0.889 }, { x: 9, y: 0.9 },
        ],
      },
    ],
    caption: '部分和は1に近づいていく。9項までのちょうどの和は9/10＝0.9（1−1/10）',
  },

  // s288: マッチ棒の数列
  lf_ext08_10: {
    kind: 'barChart',
    yLabel: 'マッチ棒の本数',
    bars: [
      { label: '1個', value: 4 },
      { label: '2個', value: 7 },
      { label: '3個', value: 10 },
      { label: '4個', value: 13 },
      { label: '5個', value: 16 },
      { label: '6個', value: 19 },
    ],
    caption: '正方形をn個つなげたときのマッチ棒の総数＝3n＋1',
  },

  // s289: 碁石の三角数
  lf_ext08_11: {
    kind: 'barChart',
    yLabel: '碁石の数',
    bars: [
      { label: '1段', value: 1 },
      { label: '2段', value: 3 },
      { label: '3段', value: 6 },
      { label: '4段', value: 10 },
      { label: '5段', value: 15 },
      { label: '6段', value: 21 },
      { label: '7段', value: 28 },
      { label: '8段', value: 36 },
    ],
    caption: '三角数＝n×(n＋1)÷2。8段目までの合計は36個',
  },

  // s290: 正方形数
  lf_ext08_12: {
    kind: 'barChart',
    yLabel: '碁石の数',
    bars: [
      { label: '1辺1', value: 1 },
      { label: '1辺2', value: 4 },
      { label: '1辺3', value: 9 },
      { label: '1辺4', value: 16 },
      { label: '1辺5', value: 25 },
      { label: '1辺6', value: 36 },
    ],
    caption: '正方形数＝n×n（すきまなく埋めた場合）。周りだけの中空方陣(n−1)×4と混同しないこと',
  },

  // s291: 中心+層で増える碁石（ひし形パターン）
  lf_ext08_13: {
    kind: 'barChart',
    yLabel: '増える碁石の数',
    bars: [
      { label: '1重目', value: 4 },
      { label: '2重目', value: 8 },
      { label: '3重目', value: 12 },
      { label: '4重目', value: 16 },
      { label: '5重目', value: 20 },
    ],
    caption: 'k重目に増える碁石は4×k個。総数を求めるときは中心の石1個を足し忘れないこと',
  },

  // s292: 図形の周りの長さの変化
  lf_ext08_14: {
    kind: 'lineChart',
    xLabel: '正方形の個数 n',
    yLabel: '周の長さ',
    series: [
      {
        label: '1辺1の正方形をn個横につなげた周の長さ',
        markers: true,
        points: [
          { x: 1, y: 4 }, { x: 2, y: 6 }, { x: 3, y: 8 }, { x: 4, y: 10 },
          { x: 5, y: 12 }, { x: 6, y: 14 }, { x: 7, y: 16 }, { x: 8, y: 18 },
          { x: 9, y: 20 }, { x: 10, y: 22 },
        ],
      },
    ],
    caption: '周の長さ＝2×(n＋1)。くっつく辺（共有辺）の分だけ、4nより短くなる',
  },

  // s293: 正方形から角を取り除いた形
  lf_ext08_15: {
    kind: 'barChart',
    yLabel: '碁石の数',
    bars: [
      { label: '大きい正方形(8×8)', value: 64 },
      { label: '取り除く部分(3×3)', value: 9 },
      { label: '残りの碁石', value: 55 },
    ],
    caption: '64−9＝55。(8−3)を2乗してはいけない（25は誤り）',
  },

  // s294: 階差数列の基本
  lf_ext08_16: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '値',
    series: [
      {
        label: '2,3,5,8,12,17,…（階差1,2,3,4,5,…）',
        markers: true,
        points: [
          { x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }, { x: 4, y: 8 },
          { x: 5, y: 12 }, { x: 6, y: 17 }, { x: 7, y: 23 }, { x: 8, y: 30 },
          { x: 9, y: 38 }, { x: 10, y: 47 },
        ],
      },
    ],
    caption: 'グラフの傾きがだんだん急になるのは、階差（差）自体が1,2,3,…と増えていくため',
  },

  // s296: フィボナッチ数列
  lf_ext08_17: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '値',
    series: [
      {
        label: '1,1,2,3,5,8,13,21,34,55,89,144',
        markers: true,
        color: '#9333EA',
        points: [
          { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 2 }, { x: 4, y: 3 },
          { x: 5, y: 5 }, { x: 6, y: 8 }, { x: 7, y: 13 }, { x: 8, y: 21 },
          { x: 9, y: 34 }, { x: 10, y: 55 }, { x: 11, y: 89 }, { x: 12, y: 144 },
        ],
      },
    ],
    caption: '前の2つの項の和が次の項になる（例：13＝5＋8）。一定の差や一定の比ではなく急激に増える',
  },

  // s297: 等比数列の基礎
  lf_ext08_18: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '値',
    series: [
      {
        label: '初項3・公比2',
        markers: true,
        color: '#F59E0B',
        points: [
          { x: 1, y: 3 }, { x: 2, y: 6 }, { x: 3, y: 12 }, { x: 4, y: 24 },
          { x: 5, y: 48 }, { x: 6, y: 96 }, { x: 7, y: 192 },
        ],
      },
    ],
    caption: '毎回2倍になる等比数列は等差数列よりずっと急に増える。差は3,6,12,24,…と変化し一定ではない',
  },

  // s298: 群数列
  lf_ext08_19: {
    kind: 'barChart',
    yLabel: 'グループ内の個数',
    bars: [
      { label: 'G1', value: 1 }, { label: 'G2', value: 2 }, { label: 'G3', value: 3 },
      { label: 'G4', value: 4 }, { label: 'G5', value: 5 }, { label: 'G6', value: 6 },
      { label: 'G7', value: 7 }, { label: 'G8', value: 8 },
    ],
    caption: '第kグループにはk個の数が入る。第kグループまでの累計個数＝k×(k＋1)÷2',
  },

  // s300: 和からNを逆算する
  lf_ext08_20: {
    kind: 'lineChart',
    xLabel: '項数 n',
    yLabel: '最初のn項の和',
    series: [
      {
        label: '初項3・公差5の数列の和 Sn',
        markers: true,
        color: '#0EA5E9',
        points: [
          { x: 1, y: 3 }, { x: 2, y: 11 }, { x: 3, y: 24 }, { x: 4, y: 42 },
          { x: 5, y: 65 }, { x: 6, y: 93 }, { x: 7, y: 126 }, { x: 8, y: 164 },
          { x: 9, y: 207 }, { x: 10, y: 255 }, { x: 11, y: 308 }, { x: 12, y: 366 },
        ],
      },
    ],
    caption: 'n＝12のとき、和がちょうど366になる',
  },

  // s301: 周期性（あまり）
  lf_ext08_21: {
    kind: 'numberLine',
    min: 0,
    max: 9,
    step: 1,
    points: [
      { x: 1, label: '赤' },
      { x: 2, label: '青' },
      { x: 3, label: '黄' },
      { x: 4, label: '緑' },
      { x: 5, label: '赤' },
      { x: 6, label: '青' },
      { x: 7, label: '黄' },
      { x: 8, label: '緑' },
    ],
    caption: '赤・青・黄・緑の4個で1周期。50番目は50÷4＝12あまり2なので「青」（あまり2＝周期の2番目）',
  },

  // s305: 六角数（難関）
  lf_ext08_22: {
    kind: 'lineChart',
    xLabel: '項番号 n',
    yLabel: '六角数 Hn',
    yRange: [0, 340],
    series: [
      {
        label: 'Hn = n×(2n−1)',
        markers: true,
        color: '#E11D48',
        points: [
          { x: 1, y: 1 }, { x: 2, y: 6 }, { x: 3, y: 15 }, { x: 4, y: 28 },
          { x: 5, y: 45 }, { x: 6, y: 66 }, { x: 7, y: 91 }, { x: 8, y: 120 },
          { x: 9, y: 153 }, { x: 10, y: 190 }, { x: 11, y: 231 }, { x: 12, y: 276 },
          { x: 13, y: 325 },
        ],
      },
    ],
    caption: 'n＝12でH12＝276（300をこえない最大）、n＝13でH13＝325（300を超える）',
  },
};
