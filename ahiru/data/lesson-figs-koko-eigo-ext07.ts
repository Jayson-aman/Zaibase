import type { Figure } from './figures';

// 高校受験 英語「比較」拡張ユニット（koko_eigo_s221〜koko_eigo_s255）の図解。
// キーは lessons-koko-eigo-ext07.ts の figureId と対応（35課中15課）。
// 英語は「文法そのもの」を絵にできない教科なので、3者の大小関係を棒グラフで示し、
// 同じデータを原級（as 〜 as）・比較級（than）・最上級（the 〜est）の3通りで
// 言いかえられることを目で確かめられる箇所にだけ付けてある。
export const lessonFigsKokoEigoExt07: Record<string, Figure> = {
  // s221：比較の三つの形（身長 152 / 160 / 168 cm）
  lf_kokoeigoext07_221: {
    kind: 'barChart',
    xLabel: '3人の身長',
    yLabel: '身長（cm）',
    yMax: 180,
    bars: [
      { label: 'Ken 152', value: 152, color: '#0EA5E9' },
      { label: 'Tom 160', value: 160, color: '#0369A1' },
      { label: 'Bob 168', value: 168, color: '#16A34A' },
    ],
    caption:
      '同じデータを3通りで言える。比較級：Tom is taller than Ken.（トムはケンより高い）／最上級：Bob is the tallest of the three.（ボブが3人でいちばん高い）／原級の否定：Ken is not as tall as Tom.（ケンはトムほど高くない）。差を言うなら Bob is 16 centimeters taller than Ken.（168−152＝16）',
  },

  // s222：e で終わる語（large）の3通り。箱の容積 10 / 18 / 25 L
  lf_kokoeigoext07_222: {
    kind: 'barChart',
    xLabel: '3つの箱の大きさ',
    yLabel: '容積（L）',
    yMax: 30,
    bars: [
      { label: 'Box A 10', value: 10, color: '#0EA5E9' },
      { label: 'Box B 18', value: 18, color: '#0369A1' },
      { label: 'Box C 25', value: 25, color: '#16A34A' },
    ],
    caption:
      'large は e で終わるので -r / -st だけを付ける。比較級：Box B is larger than Box A.／最上級：Box C is the largest of the three.／原級の否定：Box A is not as large as Box B.。× largeer × largeest と e を二つ書かないこと',
  },

  // s224：more / most 型（expensive）。かばんの値段 3,000 / 8,000 / 15,000 円
  lf_kokoeigoext07_224: {
    kind: 'barChart',
    xLabel: '3つのかばんの値段',
    yLabel: '値段（円）',
    yMax: 18000,
    bars: [
      { label: 'Bag A 3000', value: 3000, color: '#0EA5E9' },
      { label: 'Bag B 8000', value: 8000, color: '#0369A1' },
      { label: 'Bag C 15000', value: 15000, color: '#16A34A' },
    ],
    caption:
      'expensive は音節が4つの長い語なので more / the most を前に置く。比較級：Bag B is more expensive than Bag A.／最上級：Bag C is the most expensive of the three.／原級の否定：Bag A is not as expensive as Bag B.。15000÷3000＝5 なので Bag C is five times as expensive as Bag A. とも言える',
  },

  // s227：good / well － better － best（テストの点 72 / 85 / 94 点）
  lf_kokoeigoext07_227: {
    kind: 'barChart',
    xLabel: '3人のテストの点',
    yLabel: '得点（点）',
    yMax: 100,
    bars: [
      { label: 'Aya 72', value: 72, color: '#0EA5E9' },
      { label: 'Ken 85', value: 85, color: '#0369A1' },
      { label: 'Mika 94', value: 94, color: '#16A34A' },
    ],
    caption:
      "good / well はどちらも better － best に変化する。比較級：Ken's score is better than Aya's.／最上級：Mika's score is the best of the three.／原級の否定：Aya's score is not as good as Ken's.。比べる相手は Aya ではなく Aya's（＝Aya's score）と、同じ種類にそろえる",
  },

  // s228：many / much － more － most（持っている本 12 / 20 / 31 冊）
  lf_kokoeigoext07_228: {
    kind: 'barChart',
    xLabel: '3人が持っている本',
    yLabel: '冊数（冊）',
    yMax: 35,
    bars: [
      { label: 'Ken 12', value: 12, color: '#0EA5E9' },
      { label: 'Yuka 20', value: 20, color: '#0369A1' },
      { label: 'Sho 31', value: 31, color: '#16A34A' },
    ],
    caption:
      'many（数）も much（量）も比較級は more、最上級は most。比較級：Yuka has more books than Ken.／最上級：Sho has the most books of the three.／原級の否定：Ken doesn\'t have as many books as Yuka.。原級に戻すときだけ many か much かを選び直す（books は数えられるので many）',
  },

  // s230：as 〜 as（身長 165 / 165 / 172 cm。ケンとトムが同じ）
  lf_kokoeigoext07_230: {
    kind: 'barChart',
    xLabel: '3人の身長',
    yLabel: '身長（cm）',
    yMax: 180,
    bars: [
      { label: 'Ken 165', value: 165, color: '#0EA5E9' },
      { label: 'Tom 165', value: 165, color: '#0369A1' },
      { label: 'Bob 172', value: 172, color: '#16A34A' },
    ],
    caption:
      'ケンとトムは同じ165cm。原級：Ken is as tall as Tom.（同じくらい高い）／比較級：Bob is taller than Ken.／原級の否定：Ken is not as tall as Bob.（ボブほど高くない）。as と as の間にはさむのは必ず原級 tall で、× as taller as とはしない',
  },

  // s232：not as 〜 as ⇔ 比較級（かばんの重さ 2 / 5 / 8 kg）
  lf_kokoeigoext07_232: {
    kind: 'barChart',
    xLabel: '3つのかばんの重さ',
    yLabel: '重さ（kg）',
    yMax: 10,
    bars: [
      { label: 'Bag A 2', value: 2, color: '#0EA5E9' },
      { label: 'Bag B 5', value: 5, color: '#0369A1' },
      { label: 'Bag C 8', value: 8, color: '#16A34A' },
    ],
    caption:
      '書きかえの関係。Bag A is not as heavy as Bag B.（原級の否定）＝ Bag B is heavier than Bag A.（主語を入れかえて比較級）＝ Bag A is lighter than Bag B.（主語はそのままで反対語）。最上級では Bag C is the heaviest of the three.',
  },

  // s234：倍数（本の冊数 5 / 10 / 15 冊。ちょうど2倍と3倍）
  lf_kokoeigoext07_234: {
    kind: 'barChart',
    xLabel: '3人が持っている本',
    yLabel: '冊数（冊）',
    yMax: 18,
    bars: [
      { label: 'Ken 5', value: 5, color: '#0EA5E9' },
      { label: 'Yuka 10', value: 10, color: '#0369A1' },
      { label: 'Sho 15', value: 15, color: '#16A34A' },
    ],
    caption:
      '倍数は割り算で確かめる。10÷5＝2 なので Yuka has twice as many books as Ken.、15÷5＝3 なので Sho has three times as many books as Ken.。倍数は as 〜 as のかたまりの前に置く（× as twice many books as）。差で言うなら 15−5＝10 で Sho has ten more books than Ken.',
  },

  // s236：much / far による比較級の強調（人口 5万 / 6万 / 30万人）
  lf_kokoeigoext07_236: {
    kind: 'barChart',
    xLabel: '3つの市の人口',
    yLabel: '人口（千人）',
    yMax: 350,
    bars: [
      { label: 'City A 50', value: 50, color: '#0EA5E9' },
      { label: 'City B 60', value: 60, color: '#0369A1' },
      { label: 'City C 300', value: 300, color: '#16A34A' },
    ],
    caption:
      '差が小さいか大きいかで強調語を変える。City B is a little larger than City A.（6万と5万＝差が小さい）／City C is much larger than City A.（30万と5万＝差が大きい）。× very larger とは言えない。very が付くのは原級（very large）だけ',
  },

  // s240：最上級と in（クラスの3人の身長 165 / 170 / 178 cm）
  lf_kokoeigoext07_240: {
    kind: 'barChart',
    xLabel: '同じクラスの3人の身長',
    yLabel: '身長（cm）',
    yMax: 190,
    bars: [
      { label: 'Bob 165', value: 165, color: '#0EA5E9' },
      { label: 'Tom 170', value: 170, color: '#0369A1' },
      { label: 'Ken 178', value: 178, color: '#16A34A' },
    ],
    caption:
      '同じ一位でも範囲の示し方は二通り。Ken is the tallest in his class.（in ＋ 場所・集団を表す単数の語）／Ken is the tallest of the three.（of ＋ 複数を表す語）。名詞を残すなら Ken is the tallest student in his class. と the を最初に置く',
  },

  // s241：最上級の of と in（日本の川の長さ 367 / 322 / 268 km）
  lf_kokoeigoext07_241: {
    kind: 'barChart',
    xLabel: '日本の川の長さ',
    yLabel: '長さ（km）',
    yMax: 400,
    bars: [
      { label: '信濃川 367', value: 367, color: '#0EA5E9' },
      { label: '利根川 322', value: 322, color: '#0369A1' },
      { label: '石狩川 268', value: 268, color: '#16A34A' },
    ],
    caption:
      'in と of の使い分け。The Shinano River is the longest river in Japan.（Japan は場所なので in）／The Shinano River is the longest of the three.（the three は複数なので of）。二位は序数を使って The Tone River is the second longest river in Japan.',
  },

  // s244：one of the 最上級（世界の高い山 8849 / 8611 / 8586 m）
  lf_kokoeigoext07_244: {
    kind: 'barChart',
    xLabel: '世界の高い山',
    yLabel: '標高（m）',
    yMax: 9000,
    bars: [
      { label: 'Everest 8849', value: 8849, color: '#0EA5E9' },
      { label: 'K2 8611', value: 8611, color: '#0369A1' },
      { label: 'Kangchenjunga 8586', value: 8586, color: '#16A34A' },
    ],
    caption:
      '一位を言うか、上位グループの一員と言うかで形が変わる。Everest is the highest mountain in the world.（単数）／K2 is one of the highest mountains in the world.（one of のあとは必ず複数形）／K2 is the second highest mountain in the world.（序数＋最上級）',
  },

  // s247：比較級 ＋ than any other（日本の都市の人口 1400 / 377 / 275 万人）
  lf_kokoeigoext07_247: {
    kind: 'barChart',
    xLabel: '日本の主な都市の人口',
    yLabel: '人口（万人）',
    yMax: 1500,
    bars: [
      { label: '東京都 1400', value: 1400, color: '#0EA5E9' },
      { label: '横浜市 377', value: 377, color: '#0369A1' },
      { label: '大阪市 275', value: 275, color: '#16A34A' },
    ],
    caption:
      '一位を4通りで表す。Tokyo is the largest city in Japan.／Tokyo is larger than any other city in Japan.（any other のあとは単数）／No other city in Japan is larger than Tokyo.／No other city in Japan is as large as Tokyo.（as にはさむのは原級）',
  },

  // s250：四通り言いかえの総合（好きなスポーツ サッカー18 / 野球12 / テニス6人）
  lf_kokoeigoext07_250: {
    kind: 'barChart',
    xLabel: 'クラス36人が好きなスポーツ',
    yLabel: '人数（人）',
    yMax: 20,
    bars: [
      { label: 'サッカー 18', value: 18, color: '#0EA5E9' },
      { label: '野球 12', value: 12, color: '#0369A1' },
      { label: 'テニス 6', value: 6, color: '#16A34A' },
    ],
    caption:
      '①Soccer is the most popular sport in my class. ②Soccer is more popular than any other sport in my class. ③No other sport in my class is more popular than soccer. ④No other sport in my class is as popular as soccer.。倍数は 18÷6＝3 で three times as many、差は 18−12＝6 で six more students',
  },

  // s251：the 比較級, the 比較級（練習時間と得点の関係）
  lf_kokoeigoext07_251: {
    kind: 'lineChart',
    xLabel: '1日の練習時間（時間）',
    yLabel: 'テストの得点（点）',
    xRange: [0, 5],
    yRange: [0, 100],
    series: [
      {
        label: '得点',
        color: '#0EA5E9',
        markers: true,
        points: [
          { x: 0, y: 40 },
          { x: 1, y: 52 },
          { x: 2, y: 63 },
          { x: 3, y: 72 },
          { x: 4, y: 80 },
          { x: 5, y: 86 },
        ],
      },
    ],
    caption:
      '練習時間が増えるほど得点も上がる、という二つの変化の連動を表すのが the ＋ 比較級, the ＋ 比較級 の形。The more you practice, the better you become.（練習すればするほどうまくなる）。比較級なのに the が付く数少ない形で、前半は未来のことでも現在形にする',
  },
};
