import type { Figure } from './figures';

// 中学受験 英語「不定詞・動名詞・分詞・関係詞・受動態」拡張ユニット（eigo_s296〜eigo_s340）の教科書用図解。
// キーは lessons-eigo-ext09.ts の figureId と対応。
// 英語は図にしにくい教科なので、「語順」「修飾の向き」「分類」「度合いの境目」など、
// 図にすることで本当に理解が進む箇所にだけ付けてある（45課中21課）。
// 語順の図は数直線を使い、目盛りの数字を語順の番号（①②③…）として読ませている。
export const lessonFigsEigoExt09: Record<string, Figure> = {
  // s296：不定詞の三用法のおおよその出題割合
  lf_eigoext09_296: {
    kind: 'pieChart',
    slices: [
      { label: '名詞的用法', value: 45, color: '#0EA5E9' },
      { label: '副詞的用法', value: 35, color: '#0369A1' },
      { label: '形容詞的用法', value: 20, color: '#16A34A' },
    ],
    caption:
      '入試で出る不定詞の三用法のおおよその割合。名詞的用法（〜すること）が最も多く、次に副詞的用法（〜するために など）。まずこの二つを確実にする',
  },

  // s297：want to play soccer の語順（数直線の目盛り＝語順の番号）
  lf_eigoext09_297: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: 'I（主語）' },
      { x: 2, label: 'want（動詞）' },
      { x: 3, label: 'to play' },
      { x: 4, label: 'soccer' },
    ],
    caption:
      '「わたしはサッカーをしたい」の語順。目盛りの数字は並べる順番を表す。③の to play が want の目的語（〜することを）で、動詞が二つ続いて見えるのが名詞的用法の目印',
  },

  // s299：名詞的用法が入る三か所（主語・目的語・補語）を三角形の三辺に配置
  lf_eigoext09_299: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 5, y: 8 },
    ],
    sideLabels: ['目的語 I like to swim.', '補語 My dream is to swim.', '主語 To swim is fun.'],
    fill: true,
    caption:
      '名詞的用法の不定詞が入る三か所。名詞が入れる場所（主語・目的語・補語）ならどこにでも入る。どの位置にあるかを見れば、訳に頼らず名詞的用法だと判断できる',
  },

  // s300：something cold to drink の語順
  lf_eigoext09_300: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'something' },
      { x: 2, label: 'cold' },
      { x: 3, label: 'to drink' },
    ],
    caption:
      '「何か冷たい飲み物」の語順。-thing で終わる語は、形容詞（②cold）も不定詞（③to drink）も後ろに置く。日本語「冷たい→飲み物」とは逆の順になる',
  },

  // s302：名詞を修飾する語の位置（一語は前・二語以上は後ろ）
  lf_eigoext09_302: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 5 },
      { x: 0, y: 5 },
    ],
    sideLabels: ['中心にある名詞', '後ろから→ 不定詞・分詞句・関係詞節', null, '←前から 一語の形容詞'],
    fill: true,
    caption:
      '名詞を説明する語の位置。一語なら前（a big house）、二語以上のかたまりなら後ろ（a house to live in）。この原則は不定詞・分詞・関係代名詞に共通する英語の大原則',
  },

  // s304：文の骨組みに、目的の不定詞が後ろから付け足される
  lf_eigoext09_304: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 5 },
      { x: 0, y: 5 },
    ],
    sideLabels: ['文の骨組み I went to the park', 'あとに付け足す to play soccer', null, null],
    fill: true,
    caption:
      '目的の副詞的用法は、完成した文にあとから付け足される「おまけ」。消しても I went to the park. と文が成り立つのが、名詞的用法との決定的なちがい',
  },

  // s307：副詞的用法の内わけ
  lf_eigoext09_307: {
    kind: 'pieChart',
    slices: [
      { label: '目的（〜するために）', value: 70, color: '#0EA5E9' },
      { label: '感情の原因（〜して）', value: 22, color: '#0369A1' },
      { label: '結果・判断の根拠', value: 8, color: '#F59E0B' },
    ],
    caption:
      '副詞的用法の内わけのおおよその割合。大半が目的で、次が感情の原因。結果（grow up to be 〜）や判断の根拠（kind to help 〜）はまれなので、決まり文句として覚えれば足りる',
  },

  // s308：疑問詞＋不定詞の四つの意味を正方形の四辺に配置
  lf_eigoext09_308: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: ['when to 〜 いつ', 'where to 〜 どこで', 'what to 〜 何を', 'how to 〜 どうやって'],
    fill: true,
    caption:
      '疑問詞＋不定詞の四つの型。どれも「〜すべきか」という名詞のかたまりになり、目的語の位置に入る。which to 〜（どちらを）も同じ仲間。why だけはこの形にできない',
  },

  // s311：It is easy for me to swim. の語順（形式主語と真主語）
  lf_eigoext09_311: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: 'It is（形だけの主語）' },
      { x: 2, label: 'easy' },
      { x: 3, label: 'for me' },
      { x: 4, label: 'to swim（本当の主語）' },
    ],
    caption:
      '「わたしにとって泳ぐことは簡単だ」の語順。①の It は訳さない形だけの主語で、本当の主語は④の to swim。③の for me（だれが泳ぐか）は形容詞のあと・to の前に置く',
  },

  // s313：too ... to 〜 は「限度をこえていて無理」
  lf_eigoext09_313: {
    kind: 'numberLine',
    min: 0,
    max: 100,
    step: 20,
    segments: [{ from: 0, to: 60, toOpen: true }],
    points: [{ x: 90, label: 'too hot to drink（熱すぎて飲めない）' }],
    caption:
      'コーヒーの温度に見立てた too ... to 〜 の図。太線の範囲（60度未満）なら飲めるが、90度は限度をこえているので飲めない。too は「行きすぎて無理」を表すので、not がなくても否定の意味になる',
  },

  // s314：enough to 〜 は「境目に達していてできる」
  lf_eigoext09_314: {
    kind: 'numberLine',
    min: 0,
    max: 24,
    step: 4,
    segments: [{ from: 18, to: 24 }],
    points: [
      { x: 12, label: 'too young to drive' },
      { x: 20, label: 'old enough to drive' },
    ],
    caption:
      '運転できる年齢に見立てた図。18歳の境目に達していれば old enough to drive（できる）、達していなければ too young to drive（できない）。enough と too はちょうど反対の意味を表す',
  },

  // s316：動名詞が入る四か所を正方形の四辺に配置
  lf_eigoext09_316: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ],
    sideLabels: [
      '前置詞のあと good at playing',
      '補語 My hobby is playing',
      '目的語 I enjoy playing',
      '主語 Playing tennis is fun',
    ],
    fill: true,
    caption:
      '動名詞が入る四か所。主語・目的語・補語は不定詞の名詞的用法と同じだが、「前置詞のあと」だけは動名詞にしかできない。前置詞のあとに to＋原形は置けない',
  },

  // s320：目的語の形による動詞の分類
  lf_eigoext09_320: {
    kind: 'pieChart',
    slices: [
      { label: '不定詞だけ（want・decide）', value: 40, color: '#0EA5E9' },
      { label: '動名詞だけ（enjoy・finish）', value: 35, color: '#0369A1' },
      { label: 'どちらもよい（like・begin）', value: 25, color: '#16A34A' },
    ],
    caption:
      '目的語に何をとるかによる動詞の三分類（入試に出る動詞のおおよその割合）。不定詞だけの組は「これからのこと」、動名詞だけの組は「すでに・現にしていること」を目的語にする',
  },

  // s323：不定詞は未来向き、動名詞は過去・現実向き
  lf_eigoext09_323: {
    kind: 'numberLine',
    min: -5,
    max: 5,
    step: 5,
    points: [
      { x: -3, label: '動名詞 〜ing（すでにした）' },
      { x: 3, label: '不定詞 to 〜（これからする）' },
    ],
    caption:
      '時間の向きで見た不定詞と動名詞のちがい。remember to lock（これからかける）／remember locking（かけたことを覚えている）のように、同じ動詞でも後ろの形で時間の向きが変わる',
  },

  // s324：現在分詞が一語のときは名詞の前
  lf_eigoext09_324: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'a' },
      { x: 2, label: 'sleeping（一語）' },
      { x: 3, label: 'baby' },
    ],
    caption:
      '「眠っている赤ちゃん」の語順。説明する分詞が一語のときは名詞の前に置く。sleeping in the bed のように二語以上になったら、the baby sleeping in the bed と後ろに回る',
  },

  // s326：過去分詞のかたまりは名詞の後ろ
  lf_eigoext09_326: {
    kind: 'numberLine',
    min: 0,
    max: 5,
    step: 1,
    points: [
      { x: 1, label: 'the letter' },
      { x: 2, label: 'written' },
      { x: 3, label: 'in English' },
      { x: 4, label: '（is difficult）' },
    ],
    caption:
      '「英語で書かれた手紙」の語順。②③のかたまりが①の名詞を後ろから説明する。文の動詞は④の is で、written を文の動詞と読みちがえないことが読解の要点',
  },

  // s328：関係詞節が先行詞を後ろから説明する（節の広がりを太線で示す）
  lf_eigoext09_328: {
    kind: 'numberLine',
    min: 0,
    max: 6,
    step: 1,
    segments: [{ from: 3, to: 5 }],
    points: [
      { x: 1, label: 'I know' },
      { x: 2, label: 'a boy（先行詞）' },
      { x: 4, label: 'who plays the piano' },
    ],
    caption:
      '主格の関係代名詞。太線の範囲が「先行詞 a boy を後ろから説明するかたまり」。who は He の代わり（代名詞）と、二文をつなぐ接着剤の二役を果たすので、he を重ねて書いてはいけない',
  },

  // s330：目的格の関係代名詞は、あとの文に「穴」が残る
  lf_eigoext09_330: {
    kind: 'numberLine',
    min: 0,
    max: 7,
    step: 1,
    segments: [{ from: 3, to: 6 }],
    points: [
      { x: 2, label: 'the book（先行詞）' },
      { x: 3, label: 'which' },
      { x: 4, label: 'I' },
      { x: 5, label: 'read' },
      { x: 6, label: '★穴（目的語なし）' },
    ],
    caption:
      '目的格の関係代名詞。which のあとが「主語＋動詞」で、read の目的語が抜けた★の穴がある。ここに先行詞 the book が入るはずだった、と考えるともとの二文にもどせる',
  },

  // s333：省略できるのは目的格だけ
  lf_eigoext09_333: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 6 },
      { x: 0, y: 6 },
    ],
    sideLabels: ['目的格 the book (which) I read', '→ 省略できる', '主格 a boy who plays', '→ 省略できない'],
    fill: true,
    caption:
      '関係代名詞の直後を見て決める。直後が動詞なら主格で省略できない。直後が主語（I・he など）なら目的格で省略できる。省略されると「名詞＋主語＋動詞」の並びになる',
  },

  // s335：関係副詞の三つ
  lf_eigoext09_335: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 5, y: 8 },
    ],
    sideLabels: ['when 時 the day when we met', 'why 理由 the reason why', 'where 場所 the house where I live'],
    fill: true,
    caption:
      '関係副詞の三つと、対応する先行詞。関係副詞のあとには主語も目的語もそろった完全な文が来る。あとの文に欠けたところがあれば、関係代名詞（who・which・that）を使う',
  },

  // s337：能動態→受動態で主語と目的語が入れかわる（交差する線で示す）
  lf_eigoext09_337: {
    kind: 'coordinate',
    xRange: [0, 10],
    yRange: [0, 4],
    segments: [
      [
        { x: 1, y: 3 },
        { x: 8, y: 1 },
      ],
      [
        { x: 6, y: 3 },
        { x: 1.5, y: 1 },
      ],
    ],
    points: [
      { x: 1, y: 3, label: 'Tom（能動態の主語）' },
      { x: 6, y: 3, label: 'the window（目的語）' },
      { x: 1.5, y: 1, label: 'The window（受動態の主語）' },
      { x: 8, y: 1, label: 'by Tom（文末へ）' },
    ],
    caption:
      '上の段が能動態 Tom broke the window.、下の段が受動態 The window was broken by Tom.。二本の線が交差しているとおり、主語と目的語が入れかわり、もとの主語は by 〜 として文末に回る',
  },
};
