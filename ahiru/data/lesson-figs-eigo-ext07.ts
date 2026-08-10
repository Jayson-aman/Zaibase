import type { Figure } from './figures';

// 中学受験 英語「形容詞・副詞・比較」拡張ユニット（eigo_s226〜eigo_s260）の教科書用図解。
// キーは lessons-eigo-ext07.ts の figureId と対応。
// 英語は図解が馴染みにくい教科なので、「語順」「頻度の度合い」「大小関係」など、
// 目で見ることで理解が進む箇所にだけ付けてある（35課中15課）。
export const lessonFigsEigoExt07: Record<string, Figure> = {
  // s227：形容詞をならべる順番を左から右へ一列に示す
  lf_eigoext07_227: {
    kind: 'numberLine',
    min: 1,
    max: 6,
    step: 1,
    points: [
      { x: 1, label: '①a/my/two' },
      { x: 2, label: '②nice' },
      { x: 3, label: '③big' },
      { x: 4, label: '④new' },
      { x: 5, label: '⑤red' },
      { x: 6, label: '⑥car' },
    ],
    caption:
      '形容詞をならべる順番。①冠詞・所有格・数 →②評価 →③大きさ →④新旧 →⑤色 →⑥名詞。色は名詞のいちばん近くに置く（two big red apples）。a・my・two は必ず先頭で、new my bike とは言わない',
  },

  // s232：a few / few / a little / little の「量の度合い」を数直線で対比する
  lf_eigoext07_232: {
    kind: 'numberLine',
    min: 0,
    max: 10,
    step: 1,
    points: [
      { x: 0, label: 'no / not any' },
      { x: 1, label: 'few / little' },
      { x: 3, label: 'a few / a little' },
      { x: 6, label: 'some' },
      { x: 9, label: 'many / much' },
    ],
    caption:
      '数量表現の度合い。a が付く a few・a little は「少しはある」（プラス）、a の付かない few・little は「ほとんどない」（マイナス）。数えられる名詞には few、数えられない名詞には little を使う',
  },

  // s237：副詞をならべる順番（様態→場所→時）を語順の一列として示す
  lf_eigoext07_237: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'played tennis' },
      { x: 2, label: 'hard(様態)' },
      { x: 3, label: 'in the park(場所)' },
      { x: 4, label: 'yesterday(時)' },
    ],
    caption:
      '副詞の語順。〈動詞＋目的語〉のかたまりのあとに、様態（どのように）→場所（どこで）→時（いつ）の順でならべる。日本語は「昨日公園で」と時を先に言うので、英語では逆になる点に注意',
  },

  // s238：頻度の副詞の度合い（このユニットで最も図解が効く箇所）
  lf_eigoext07_238: {
    kind: 'barChart',
    xLabel: '頻度の副詞',
    yLabel: 'どれくらいの割合か(%)',
    yMax: 100,
    bars: [
      { label: 'always', value: 100, color: '#0369A1' },
      { label: 'usually', value: 80, color: '#0284C7' },
      { label: 'often', value: 60, color: '#0EA5E9' },
      { label: 'sometimes', value: 40, color: '#16A34A' },
      { label: 'seldom', value: 10, color: '#F59E0B' },
      { label: 'never', value: 0, color: '#EF4444' },
    ],
    caption:
      '頻度の副詞のおおよその度合い。always（いつも）＞ usually（たいてい）＞ often（よく）＞ sometimes（ときどき）＞ seldom・rarely（めったに〜ない）＞ never（決して〜ない）。usually を「ときどき」と訳す誤りが多い',
  },

  // s239：頻度の副詞を置く位置（be動詞・助動詞のあと／一般動詞の前）
  lf_eigoext07_239: {
    kind: 'numberLine',
    min: 1,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '主語 He' },
      { x: 2, label: 'is / will' },
      { x: 3, label: 'always' },
      { x: 4, label: 'busy / help' },
    ],
    caption:
      '頻度の副詞の位置。be動詞・助動詞があるときはそのあと（He is always busy. / I will always help you.）。be動詞も助動詞もない文では一般動詞の前（He always goes to school.）に置く',
  },

  // s241：原級・比較級・最上級を、3人の身長の実例で対応させる
  lf_eigoext07_241: {
    kind: 'barChart',
    xLabel: '3人の身長',
    yLabel: '身長(cm)',
    yMax: 180,
    bars: [
      { label: 'Tom', value: 145, color: '#16A34A' },
      { label: 'Yuki', value: 152, color: '#0284C7' },
      { label: 'Ken', value: 160, color: '#0369A1' },
    ],
    caption:
      '比較の三つの形。Ken is tall.（原級）／Ken is taller than Yuki.（比較級・than が必要）／Ken is the tallest of the three.（最上級・the と of が必要）。Tom は Yuki ほど背が高くないので Tom is not as tall as Yuki. とも言える',
  },

  // s242：語の長さ（音節数）で -er 型か more 型かが決まることを示す
  lf_eigoext07_242: {
    kind: 'numberLine',
    min: 1,
    max: 3,
    step: 1,
    points: [
      { x: 1, label: '1音節 tall→taller' },
      { x: 2, label: '2音節 easy→easier / famous→more' },
      { x: 3, label: '3音節以上 beautiful→more' },
    ],
    caption:
      '横軸は音節（母音のかたまり）の数。1音節は -er / -est、3音節以上は more / most。2音節は -y で終われば -er 型（easy→easier）、それ以外は more 型（famous→more famous）に分かれる',
  },

  // s249：as 〜 as は「同じくらい」＝二つの棒が同じ高さ
  lf_eigoext07_249: {
    kind: 'barChart',
    xLabel: '2人の身長',
    yLabel: '身長(cm)',
    yMax: 180,
    bars: [
      { label: 'Ken', value: 155, color: '#0369A1' },
      { label: 'Tom', value: 155, color: '#0EA5E9' },
    ],
    caption:
      '二つが同じ程度のときは as 〜 as を使う。Ken is as tall as Tom.（ケンはトムと同じくらい背が高い）。as と as の間に入るのは必ず原級で、as taller as とはしない',
  },

  // s250：not as 〜 as は「〜ほど…ない」＝as のあとのほうが上
  lf_eigoext07_250: {
    kind: 'barChart',
    xLabel: '2人の身長',
    yLabel: '身長(cm)',
    yMax: 180,
    bars: [
      { label: 'Tom', value: 150, color: '#16A34A' },
      { label: 'Ken', value: 165, color: '#0369A1' },
    ],
    caption:
      'Tom is not as tall as Ken.（トムはケンほど背が高くない）。棒が低いほうが主語になる。上なのは as のあとのケンなので、比較級で書くと Ken is taller than Tom. となる',
  },

  // s252：倍数表現は「何倍か」を棒の高さの比で見る
  lf_eigoext07_252: {
    kind: 'barChart',
    xLabel: '2つの箱の重さ',
    yLabel: '重さ(kg)',
    yMax: 8,
    bars: [
      { label: 'that box', value: 3, color: '#0EA5E9' },
      { label: 'this box', value: 6, color: '#0369A1' },
    ],
    caption:
      'This box is twice as heavy as that one.（この箱はあの箱の2倍の重さだ）。倍数は最初の as の前に置き、as と as の間は原級のまま。twice heavier than とはしない',
  },

  // s254：much は差が大きいときの強調。very は比較級には使えない
  lf_eigoext07_254: {
    kind: 'barChart',
    xLabel: '2人の身長',
    yLabel: '身長(cm)',
    yMax: 200,
    bars: [
      { label: 'Tom', value: 150, color: '#16A34A' },
      { label: 'Ken', value: 180, color: '#0369A1' },
    ],
    caption:
      '差が大きいときは比較級を強めて Ken is much taller than Tom.（ケンはトムよりずっと背が高い）と言う。強調には much・far・a lot を使い、very は使えない。very が強めるのは原級（very tall）',
  },

  // s255：比較級 and 比較級は「一定の方向へ変化が進む」ことを表す
  lf_eigoext07_255: {
    kind: 'lineChart',
    xLabel: '月',
    yLabel: '気温(℃)',
    xRange: [4, 8],
    yRange: [10, 35],
    series: [
      {
        label: '平均気温',
        color: '#EF4444',
        markers: true,
        points: [
          { x: 4, y: 15 },
          { x: 5, y: 20 },
          { x: 6, y: 24 },
          { x: 7, y: 28 },
          { x: 8, y: 31 },
        ],
      },
    ],
    caption:
      'グラフのように一定の方向へ変化が進むことを〈比較級＋and＋比較級〉で表す。It is getting hotter and hotter.（だんだん暑くなってきている）。more 型の語では more and more popular のように more だけをくり返す',
  },

  // s257：最上級の範囲を示す in と of の使い分け
  lf_eigoext07_257: {
    kind: 'barChart',
    xLabel: 'my class の3人',
    yLabel: '身長(cm)',
    yMax: 180,
    bars: [
      { label: 'Yuki', value: 148, color: '#16A34A' },
      { label: 'Tom', value: 154, color: '#0EA5E9' },
      { label: 'Ken', value: 162, color: '#0369A1' },
    ],
    caption:
      '同じ内容でも範囲の示し方で前置詞が変わる。集団や場所を一つのまとまりとして示すときは in（Ken is the tallest in my class.）、数や仲間の集まりで示すときは of（Ken is the tallest of the three.）',
  },

  // s258：one of the 最上級＋複数名詞（日本の高い山の実データ）
  lf_eigoext07_258: {
    kind: 'barChart',
    xLabel: '日本の高い山',
    yLabel: '標高(m)',
    yMax: 4000,
    bars: [
      { label: '富士山', value: 3776, color: '#0369A1' },
      { label: '北岳', value: 3193, color: '#0284C7' },
      { label: '奥穂高岳', value: 3190, color: '#0EA5E9' },
    ],
    caption:
      'いちばんは一つだけなので Mt. Fuji is the highest mountain in Japan.。2番目以降を含めて言うときは Mt. Kita is one of the highest mountains in Japan. と、名詞を複数形にする',
  },

  // s260：総合演習。タイムは「数値が小さいほど速い」という読みかえに注意
  lf_eigoext07_260: {
    kind: 'barChart',
    xLabel: '50m走のタイム',
    yLabel: 'タイム(秒)',
    yMax: 10,
    bars: [
      { label: 'Ken', value: 8.0, color: '#0369A1' },
      { label: 'Tom', value: 8.5, color: '#0EA5E9' },
      { label: 'Sam', value: 9.0, color: '#16A34A' },
    ],
    caption:
      'タイムは数値が小さいほど速い。棒がいちばん低いケンが Ken runs the fastest of the three.。サムについては Sam does not run as fast as Ken.（サムはケンほど速く走らない）とも言える。数値の大小と速さの大小が逆になる点が読み取りの落とし穴',
  },
};
