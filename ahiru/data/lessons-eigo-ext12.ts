import type { Lesson } from './lesson-types';

// 中学受験 英語「英作文・並べかえ・入試実戦演習」拡張ユニット（25セッション：eigo_s426〜eigo_s450）
// order は 926〜950。
// 構成：和文英訳の手順(3)／主語の扱い(2)／語順並べかえ(3)／条件英作文(3)／自由英作文(3)／
//       絵・写真の描写(3)／誤文訂正(3)／リスニング設問(2)／総合実戦演習(3)
// 図解は lesson-figs-eigo-ext12.ts（語順・時制の幅・語数配分など、図にして意味のある10課のみ）。
export const eigoExt12Lessons: Lesson[] = [
  // ───────────────── 1. 和文英訳の手順（s426〜s428） ─────────────────
  {
    id: 'eigo_s426',
    subject: 'eigo',
    examType: 'chugaku',
    title: '和文英訳①：日本語を「英語の型」に置きかえる',
    description: '日本語をそのまま訳さず、だれが・どうする・何を、の順に組み立て直す手順を身につける',
    order: 926,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '和文英訳は「訳す」のではなく「英語の型に置きかえる」作業である。',
      '英語の語順は必ず ①だれが ②どうする ③何を ④どこで・いつ の順。',
      '日本語は動詞が最後、英語は動詞が二番目。まず動詞をさがす。',
      '「〜です」につられて be動詞と一般動詞を重ねない（I am like ~ は誤り）。',
      '文の後ろの修飾語は「場所→時」の順に置く。',
    ],
    sections: [
      {
        heading: '三つのステップ',
        body: `和文英訳の問題は、日本語を頭から順に英語に置きかえようとすると必ず失敗する。日本語と英語では語を並べる順序がまったくちがうからである。次の三つのステップで組み立てる。

■ ステップ1　骨組みをさがす
日本語の文を読み、「だれが」「どうする（どんなだ）」「何を」の三つに印をつける。日本語では動詞（述語）が文の最後にあるので、まず文末を見る。
例）きのう、弟が公園でサッカーをした。
　　だれが＝弟　／　どうする＝した（play）　／　何を＝サッカーを

■ ステップ2　英語の順に並べる
骨組みを ①だれが → ②どうする → ③何を の順に置く。
　My brother played soccer

■ ステップ3　残りをつける
「どこで」「いつ」は文の後ろに、場所→時の順で置く。
　My brother played soccer in the park yesterday.

★ ポイント：日本語では「きのう、公園で」が前にあるが、英語では後ろに回る。しかも「公園で（場所）→きのう（時）」の順である。日本語の順のまま I yesterday played ... と書くのがもっとも多い失点である。`,
        figureId: 'lf_eigoext12_426',
      },
      {
        heading: '動詞は一つの文に一つ',
        body: `日本語の「〜です」は、英語では be動詞になる場合と、ならない場合がある。ここを取りちがえると、一つの文に動詞が二つ入ってしまう。

■ be動詞になる「です」
「A＝B」「Aは〜という状態だ」を表すとき。
例）私は中学生です。→ I am a junior high school student.
　　この本はおもしろいです。→ This book is interesting.

■ be動詞にならない「です」
文末が「〜します」「〜が好きです」「〜を持っています」のように動作や心の働きを表すとき。この場合は一般動詞だけを使い、be動詞は入れない。
例）私は英語が好きです。→ I like English.（I am like English. は誤り）
　　姉はピアノをひきます。→ My sister plays the piano.

■ 見分け方
日本語の「です」を「だ」に置きかえてみて、意味が変わらなければ be動詞、置きかえると変になるなら一般動詞である。「中学生だ」は自然、「英語が好きだ」も自然だが、後者は「好む」という動作を表す語なので like という動詞を使う。

⚠ 注意：一つの文に動詞が二つ並んだら、その時点でほぼ誤りである。書き終えたら「動詞は一つか」を必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はきのう公園へ行きました」を英語にしなさい。',
        wrongAnswer: 'I yesterday went to the park.',
        trapExplanation:
          '日本語の「きのう」が文の前のほうにあるので、そのままの順で英語に置きかえてしまう。日本語は時を表す語を先に言い、英語は後ろに回すという差に気づいていない。',
        correctAnswer: 'I went to the park yesterday.',
        correctExplanation:
          'まず骨組み I went（だれが・どうする）を作り、そのあとに「どこで→いつ」の順で to the park yesterday を続ける。英語では主語と動詞の間に yesterday のような時を表す語を割りこませない。',
      },
      {
        question: '「私は music が好きです」の下線部にならい、「私は理科が好きです」を英語にしなさい。',
        wrongAnswer: 'I am like science.',
        trapExplanation:
          '日本語の文末「です」を機械的に be動詞に置きかえ、さらに「好き」に like を当てたため、一つの文に動詞が二つ入ってしまった。「〜です」＝ be動詞という思いこみが原因。',
        correctAnswer: 'I like science.',
        correctExplanation:
          '「好きです」は「好む」という動作を表すので、一般動詞 like だけで表す。be動詞を使うなら I am interested in science. のように like を消さなければならない。動詞は一文に一つ、が原則である。',
      },
    ],
  },

  {
    id: 'eigo_s427',
    subject: 'eigo',
    examType: 'chugaku',
    title: '和文英訳②：動詞と時制を決める',
    description: '日本語の文末表現から、過去・現在・未来・進行形・現在完了のどれを使うかを判断する',
    order: 927,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '時制は日本語の文末（〜した／〜している／〜するつもり）で決まる。',
      '「毎日〜します」のような習慣は現在形。今この瞬間の動作は be動詞＋ing。',
      '「〜から…しています」は from ではなく現在完了＋for / since。',
      '「〜でした」が天気・時刻・寒暖のときは主語に it を立てる。',
      '時を表す語（yesterday, now, next week）は時制の合図なので必ず先に見る。',
    ],
    sections: [
      {
        heading: '文末が時制を決める',
        body: `日本語は文末の形に時間の情報が入っている。英訳するときは、まず文末だけを取り出して時間軸のどこに置くかを決める。

■ 対応の一覧
・〜した／〜だった　　　　→ 過去形（played, was）
・〜する／〜します（習慣）→ 現在形（plays, play）
・（今）〜している　　　　→ 現在進行形（is playing）
・〜するつもりだ／〜だろう→ will または be going to
・〜していた　　　　　　　→ 過去進行形（was playing）
・（ずっと）〜している　　→ 現在完了（have played / have been ~）

例）弟は毎日サッカーをします。→ My brother plays soccer every day.
　　弟は今サッカーをしています。→ My brother is playing soccer now.
　　弟はあすサッカーをするつもりです。→ My brother is going to play soccer tomorrow.

★ ポイント：「〜しています」は二種類ある。「今この瞬間」なら進行形、「毎日の習慣」なら現在形である。「父は銀行で働いています」は習慣なので My father works at a bank. が正しく、is working とすると「今まさに働いている最中だ」の意味になる。`,
        figureId: 'lf_eigoext12_427',
      },
      {
        heading: '「〜から」「〜でした」の落とし穴',
        body: `日本語の助詞を直訳すると誤りになる代表例が二つある。

■ 「〜から…しています」
「三年前から住んでいます」を from three years ago と訳したくなるが、英語ではこの言い方をしない。「三年間ずっと」と言いかえて現在完了を使う。
例）私は三年間大阪に住んでいます。→ I have lived in Osaka for three years.
　　私は子どものころからこの町に住んでいます。→ I have lived in this town since I was a child.
for のあとには長さ（three years, ten minutes）、since のあとには始まりの時点（2020, last year, I was a child）が来る。

■ 天気・時刻・寒暖の「〜でした」
日本語では主語を言わないが、英語では必ず主語が要る。天気・気温・時刻・曜日・明暗・距離は主語を it にする。
例）きのうは雨でした。→ It was rainy yesterday.（または It rained yesterday.）
　　今日は寒いです。→ It is cold today.
　　六時です。→ It is six o'clock.

⚠ 注意：Yesterday was rain. と書く答案が非常に多い。日本語の「きのうは」を主語だと思ってしまうためだが、yesterday は時を表す語であって主語にはならない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は三年前から大阪に住んでいます」を英語にしなさい。',
        wrongAnswer: 'I live in Osaka from three years ago.',
        trapExplanation:
          '「〜から」を from、「三年前」を three years ago と一語ずつ置きかえた直訳。さらに日本語の「住んでいます」を現在形のまま使ったため、「今も続いている三年間」という幅が表せていない。',
        correctAnswer: 'I have lived in Osaka for three years.',
        correctExplanation:
          '過去のある時点から今まで続いていることは現在完了で表す。続いた長さを言うときは for、始まりの時点を言うときは since を使う。「三年前から」は「三年間ずっと」と言いかえて for three years とするのが定型である。',
      },
      {
        question: '「きのうは雨でした」を英語にしなさい。',
        wrongAnswer: 'Yesterday was rain.',
        trapExplanation:
          '日本語の「きのうは」を主語だと考え、「雨」という名詞をそのまま補語に置いてしまった。日本語の「〜は」が必ず主語になるとはかぎらないことに気づいていない。',
        correctAnswer: 'It was rainy yesterday.',
        correctExplanation:
          '天気を表す文は主語を it にする。rain は名詞なので、形容詞の rainy に変えて It was rainy yesterday. とするか、rain を動詞として使って It rained yesterday. とする。yesterday は文の最後に置く。',
      },
    ],
  },

  {
    id: 'eigo_s428',
    subject: 'eigo',
    examType: 'chugaku',
    title: '和文英訳③：難しい日本語をやさしい日本語に言いかえる',
    description: '知っている単語だけで書けるように、日本語のほうを先にやさしく作り直す技術を学ぶ',
    order: 928,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '知らない単語は使わない。日本語のほうをやさしく言いかえてから訳す。',
      '難しい名詞は「だれが どうする」の文に開くと書きやすくなる。',
      '「〜することが好きだ」「趣味は〜だ」は動名詞（〜ing）か to 不定詞を使う。',
      '前置詞のあとに動詞を置くときは必ず ing 形にする（good at playing）。',
      '一文を短く切る。長い日本語は二文に分けてよい。',
    ],
    sections: [
      {
        heading: 'やさしい日本語に作り直す',
        body: `入試の和文英訳には、小学生が英語を知らない語がまざっていることがある。そこで大切なのが「日本語のほうを、自分が知っている英語で書ける日本語に作り直す」技術である。

■ 難しい名詞は文に開く
例）弟は好き嫌いが多い。
　　→「弟はいろいろな食べ物が好きではない」と言いかえる。
　　→ My brother does not like many kinds of food.
例）祖母は健康に気をつけている。
　　→「祖母は毎日野菜を食べ、よく歩く」と言いかえる。
　　→ My grandmother eats vegetables every day and walks a lot.

■ 難しい形容詞は説明にする
例）この町はにぎやかだ。→「この町にはたくさんの人と店がある」
　　→ There are many people and shops in this town.

■ 一文が長ければ二文に切る
例）私は昨日、母と買い物に行って、新しいくつを買いました。
　　→ I went shopping with my mother yesterday. I bought new shoes.

★ ポイント：採点されるのは「英語として正しいか」であって「難しい語を使ったか」ではない。やさしい単語で正確に書いた答案のほうが得点は高い。`,
      },
      {
        heading: '「〜すること」の表し方',
        body: `日本語の「〜すること」は、英語では動詞に ing を付けた形（動名詞）か、to ＋動詞の原形（to 不定詞）で表す。動詞をそのまま置いてはいけない。

■ 動名詞（〜ing）を使う場所
①主語　　　Reading books is fun.（本を読むことは楽しい）
②be動詞のあと　My hobby is reading books.（私の趣味は読書です）
③前置詞のあと　He is good at playing the piano.（彼はピアノをひくのが上手だ）
④enjoy, finish, like, stop のあと　I enjoyed playing soccer.

■ to 不定詞を使う場所
①want, hope, try, decide のあと　I want to be a doctor.
②「〜するために」　I went to the park to play tennis.
③「〜するための」　I have a lot of homework to do.

⚠ 注意：③の前置詞のあとがいちばんまちがえやすい。at, in, of, about, before, after はすべて前置詞なので、そのあとに動詞を置くなら必ず ing 形にする。He is good at play the piano. は誤りである。`,
      },
    ],
    trapExamples: [
      {
        question: '「弟は好き嫌いが多い」を英語にしなさい。',
        wrongAnswer: 'My brother has many likes and dislikes.',
        trapExplanation:
          '「好き嫌い」という日本語を辞書のとおりに名詞へ置きかえ、そのまま並べてしまった。英語としては何を言いたいのかが伝わらず、内容点がもらえない。',
        correctAnswer: 'My brother does not like many kinds of food.',
        correctExplanation:
          'まず日本語を「弟はいろいろな食べ物が好きではない」とやさしく作り直し、それから訳す。My brother is a picky eater. のような語を知らなくても、知っている語だけで正確に書ける。',
      },
      {
        question: '「私の趣味は本を読むことです」を英語にしなさい。',
        wrongAnswer: 'My hobby is read books.',
        trapExplanation:
          '「読むこと」という日本語につられて動詞 read をそのまま置いてしまった。is と read で動詞が二つ並んでいることにも気づいていない。',
        correctAnswer: 'My hobby is reading books.',
        correctExplanation:
          '「〜すること」は動名詞（〜ing）か to 不定詞にする。be動詞のあとでは reading books とするのがふつうで、to read books も可。I like reading books. と言いかえてもよい。',
      },
    ],
  },

  // ───────────────── 2. 主語の扱い（s429〜s430） ─────────────────
  {
    id: 'eigo_s429',
    subject: 'eigo',
    examType: 'chugaku',
    title: '主語を補う：日本語は主語を省く',
    description: '日本語で言わない主語を、英語では必ず立てるという原則と、その見つけ方を学ぶ',
    order: 929,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '英語の文には必ず主語が要る（命令文だけが例外）。',
      '主語がない日本語文は「だれが？」と自分に問いかけて補う。',
      '会話文では、前後のせりふから I / you / we のどれかを決める。',
      '天気・時刻・寒暖・明暗・距離は主語を it にする（形式的な主語）。',
      '「〜しなさい」「〜してください」は主語を書かない命令文にする。',
    ],
    sections: [
      {
        heading: '省かれた主語を見つける',
        body: `日本語は、話し手と聞き手にわかっていることばを省く言語である。とくに主語はよく省かれる。英語ではそれが許されないので、和文英訳では「消えている主語を拾う」ことが最初の仕事になる。

■ 「だれが？」と問いかける
例）とてもうれしかった。→ だれが？→ 私が → I was very happy.
例）今日はいそがしいですか。→ だれが？→ あなたが → Are you busy today?
例）来週、京都へ行きます。→ だれが？→ 私（たち）が → I am going to go to Kyoto next week.

■ 会話文では前後を見る
Ａ：How was the movie?
Ｂ：（とてもおもしろかったです）→ It was very interesting.
ここでの主語はＢ自身ではなく「映画」なので it になる。「おもしろかった」の主語がだれ（何）なのかを、直前のせりふから判断する。

■ 「〜と思います」の主語
「あした雨が降ると思います」は、思うのは私、降るのは雨。主語が二つある文になる。
　→ I think (that) it will rain tomorrow.

★ ポイント：主語を補うときは、日本語の中に答えが書いていないことが多い。文全体の場面を思いうかべて決める。`,
      },
      {
        heading: '主語がない文・it を立てる文',
        body: `主語をどうしても言えない、あるいは言う必要がない場合の型を覚えておく。

■ 命令文（主語を書かない）
「〜しなさい」「〜してください」「〜しよう」は動詞の原形で始める。
例）このドアを開けてください。→ Please open this door.（Open this door, please. も可）
例）ここで走ってはいけません。→ Don't run here.
例）公園へ行きましょう。→ Let's go to the park.

■ it を主語にする文
天気・気温・時刻・曜日・日付・明暗・距離には it を使う。この it は「それ」とは訳さない。
例）暑いですね。→ It is hot, isn't it?
　　九時半です。→ It is nine thirty.
　　今日は水曜日です。→ It is Wednesday today.
　　ここから駅まで一キロあります。→ It is one kilometer from here to the station.

■ 「〜することは…だ」の it
主語が長くなるときも it を立てて、本当の主語をうしろに回す。
例）毎日英語を勉強することは大切です。→ It is important to study English every day.

⚠ 注意：「暑いですね」を I am hot. とすると「私は（体が）暑い」の意味になり、気温の話にならない。天気・気温は必ず it を主語にする。`,
      },
    ],
    trapExamples: [
      {
        question: '暑い日に外で友達に「暑いですね」と言うときの英語を書きなさい。',
        wrongAnswer: 'I am hot.',
        trapExplanation:
          '日本語の「暑いですね」に主語がないので、話しているのは自分だと考えて I を立ててしまう。英語の I am hot. は「私は（体が）ほてっている」という意味になり、天気の話にならない。',
        correctAnswer: "It is hot today, isn't it?",
        correctExplanation:
          `天気・気温・寒暖は主語を it にするのが英語の決まりである。この it は「それ」と訳さない形式的な主語で、時刻の It is six o'clock. や曜日の It is Monday. と同じ働きをする。`,
      },
      {
        question: '「（あなたに）この仕事を手伝ってほしいのです」を英語にしなさい。',
        wrongAnswer: 'Want you to help me with this work.',
        trapExplanation:
          '日本語に主語がないため、そのまま動詞で書き始めてしまった。動詞で始まる文は命令文になるので、これでは「あなたに手伝ってほしいと思え」という意味不明の命令文になる。',
        correctAnswer: 'I want you to help me with this work.',
        correctExplanation:
          '「ほしい」と思っているのは私なので、主語 I を補って I want you to ~ の型にする。命令文以外の英文は必ず主語で始まる、と覚えておく。ていねいに言うなら Could you help me with this work? でもよい。',
      },
    ],
  },

  {
    id: 'eigo_s430',
    subject: 'eigo',
    examType: 'chugaku',
    title: '主語を変える：There is 構文と have の使い分け',
    description: '「〜がある・いる」を英語らしく言うために、主語を選び直す方法を学ぶ',
    order: 930,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'There is / There are は「相手が知らないものが存在する」ことを伝える型。',
      'There のあとに the, my, this のついた特定の名詞は置けない。',
      'be動詞の形はうしろの名詞の数で決める（There are five balls.）。',
      '「（人が）〜を持っている・いる」は have で表せる（I have two sisters.）。',
      '日本語の「〜は」が主語とはかぎらない。英語で言いやすい主語を選び直す。',
    ],
    sections: [
      {
        heading: 'There is / There are の型',
        body: `日本語の「〜がある」「〜がいる」は、英語では There is ～ / There are ～ の型で表すことが多い。この there は「そこに」とは訳さない。

■ 形
There ＋ be動詞 ＋ 名詞 ＋ 場所を表す語句
例）机の上に本が三冊あります。→ There are three books on the desk.
　　公園に犬が一匹います。→ There is a dog in the park.
　　冷蔵庫に牛乳が少しあります。→ There is some milk in the refrigerator.

■ be動詞はうしろの名詞に合わせる
There のうしろの名詞が単数なら is、複数なら are。数えられない名詞（milk, water, money）は単数扱いで is。
過去なら was / were を使う。
例）教室には生徒が二十人いました。→ There were twenty students in the classroom.

■ 疑問文と否定文
Is there a park near your house? — Yes, there is. / No, there isn't.
There are not any chairs in this room.（There are no chairs in this room. も可）

★ ポイント：There is ～ は「聞き手がまだ知らないものを初めて話題に出す」ときの型である。だから a, some, three のような「初めて出てくる印」のついた名詞と相性がよい。`,
      },
      {
        heading: 'the がつくものは There を使わない',
        body: `There is のうしろに、the / my / your / this / that のついた名詞や、人名を置くことはできない。これらは「相手がもう知っているもの」を指すからである。

■ すでに知っているものの居場所を言うとき
その名詞自身を主語にする。
例）私のかばんはいすの上にあります。→ My bag is on the chair.（There is my bag on the chair. は誤り）
例）お母さんは台所にいます。→ My mother is in the kitchen.
例）その本は机の上にあります。→ The book is on the desk.

■ have で言いかえられる場合
持ち主がはっきりしているときは have を使うと自然になる。
例）私には妹が二人います。→ I have two sisters.
例）この町には大きな公園があります。→ There is a big park in this town.
　　（My town has a big park. も可だが、中学受験では There is の型で書くのが安全）

■ 主語を選び直す練習
日本語の「〜は」につられないこと。
例）この問題は私には難しいです。→ This question is difficult for me.
　　（I am difficult. は「私は気難しい人だ」の意味になり誤り）

⚠ 注意：There is my bag ~ のような誤りは、日本語の「〜があります」をすべて There is に置きかえてしまうことから起きる。「初めて出す話題か、もう知っているものか」で使い分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「私のかばんはいすの上にあります」を英語にしなさい。',
        wrongAnswer: 'There is my bag on the chair.',
        trapExplanation:
          '日本語の「〜があります」を機械的に There is に置きかえてしまった。There is は初めて話題に出すものに使う型なので、すでに持ち主のわかっている my bag とはいっしょに使えない。',
        correctAnswer: 'My bag is on the chair.',
        correctExplanation:
          'the, my, your, this, その人の名前がついた名詞は、それ自身を主語にして be動詞で場所を言う。There is が使えるのは a や some や数詞のついた「初めて出てくるもの」だけだと覚える。',
      },
      {
        question: '「箱の中にボールが五個入っています」を英語にしなさい。',
        wrongAnswer: 'There is five balls in the box.',
        trapExplanation:
          'There is をひとまとまりの決まり文句だと思いこみ、うしろの名詞の数を見ずに書いてしまった。日本語では単数と複数を区別しないので気づきにくい。',
        correctAnswer: 'There are five balls in the box.',
        correctExplanation:
          'be動詞の形は、うしろに来る名詞の数で決める。five balls は複数なので are。逆に数えられない名詞は単数あつかいで There is some water in the glass. となる。書いたあとに必ず名詞の数を確かめる。',
      },
    ],
  },

  // ───────────────── 3. 語順並べかえ（s431〜s433） ─────────────────
  {
    id: 'eigo_s431',
    subject: 'eigo',
    examType: 'chugaku',
    title: '並べかえ①：骨組みを先に作る',
    description: '語群から動詞をさがし、主語・動詞・目的語の骨組みを組んでから残りを入れる手順を学ぶ',
    order: 931,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '並べかえは①動詞をさがす②主語を決める③目的語を置く、の順で解く。',
      '文の最後は「場所→時」の順に置く。',
      'show / give / tell / teach は「人→物」の順（show me the way）。',
      '語群の中の to, ing, 冠詞は「どの型を使うか」の目印になる。',
      '組み終えたら語をすべて使い切ったか、余りがないかを数えて確かめる。',
    ],
    sections: [
      {
        heading: '解く順序',
        body: `並べかえ問題は、語群をながめて意味の通りそうな順に置いていくと、時間がかかるうえに誤りやすい。次の順序で機械的に解く。

■ ステップ1　動詞をさがす
語群の中で動詞になれる語に印をつける。be動詞（am, is, are, was, were）や助動詞（can, will, would, must）があれば、それが文の骨になる。

■ ステップ2　主語を決める
日本語訳の「だれが」にあたる語を先頭に置く。疑問文なら Do / Does / Did / Is / Can などが先頭に来る。

■ ステップ3　目的語・補語を置く
「何を」にあたる語をつづける。

■ ステップ4　残りを後ろに
場所を表す語句 → 時を表す語句の順で並べる。

例題）[ soccer / in / played / the park / I / yesterday ]
①動詞＝played　②主語＝I　③目的語＝soccer　④場所＝in the park　⑤時＝yesterday
→ I played soccer in the park yesterday.

★ ポイント：最後に語群の語数と、できた英文の語数が一致するかを必ず数える。一語余る、一語足りないはこの確認で防げる。`,
        figureId: 'lf_eigoext12_431',
      },
      {
        heading: '「人→物」の順になる動詞',
        body: `目的語を二つとる動詞では、置く順序が決まっている。日本語の順とは逆になることが多いので、型ごと覚える。

■ ＜動詞＋人＋物＞の型
give（あげる）、show（見せる・教える）、tell（伝える）、teach（教える）、send（送る）、buy（買ってあげる）、make（作ってあげる）
例）駅への道を教えてくれませんか。→ Can you show me the way to the station?
例）父は私に新しい自転車を買ってくれた。→ My father bought me a new bike.
例）彼女は私たちに英語を教えています。→ She teaches us English.

■ 前置詞を使って言いかえる型
「人」を後ろに回すときは to または for が必要になる。
　give / show / tell / teach / send → to
　buy / make / cook → for
例）My father bought a new bike for me.
　　She teaches English to us.

⚠ 注意：Can you show the way to the station me? のように「人」を最後に置くのは誤り。人を後ろに回すなら to me が必要である。語群に to や for が入っているかどうかで、どちらの型を作るかを判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '[ is / how / it / long ] を並べかえて「それはどのくらいの長さですか」という意味の英文にしなさい。',
        wrongAnswer: 'How is it long?',
        trapExplanation:
          '疑問詞 How を先頭に置いたあと、be動詞と主語をひっくり返す形だけを覚えていて、long が How とひとまとまりになることに気づいていない。',
        correctAnswer: 'How long is it?',
        correctExplanation:
          'How は long, many, much, old, tall などとくっついて一つの疑問詞のかたまりを作る。かたまりを先頭に置いてから be動詞→主語の順にする。How long is it? / How old are you? / How many books do you have? はすべて同じ組み立てである。',
      },
      {
        question: '[ me / show / can / you / to the station / the way ] を並べかえなさい（「駅への道を教えてくれませんか」）。',
        wrongAnswer: 'Can you show the way to the station me?',
        trapExplanation:
          '日本語の「駅への道を（私に）教えて」の順に置いてしまい、show のあとに物を先に出した。人を表す me が行き場を失って文末に取り残されている。',
        correctAnswer: 'Can you show me the way to the station?',
        correctExplanation:
          'show, give, tell, teach などは＜動詞＋人＋物＞の順に置く。人を後ろに回したいときは to が必要で Can you show the way to the station to me? となるが、to が一つしかない語群ではこの形は作れない。語群に to for が足りるかどうかで型を決める。',
      },
    ],
  },

  {
    id: 'eigo_s432',
    subject: 'eigo',
    examType: 'chugaku',
    title: '並べかえ②：修飾語をどこに置くか',
    description: '形容詞・副詞・前置詞句がどの位置に入るかを、長さと種類で判断できるようにする',
    order: 932,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '一語の形容詞は名詞の前、二語以上のかたまりは名詞の後ろに置く。',
      '頻度を表す副詞（always, usually, often, sometimes, never）は一般動詞の前・be動詞の後ろ。',
      'very, really などは形容詞・副詞のすぐ前に置く。',
      '場所と時が並ぶときは「場所→時」の順。',
      '前置詞のかたまり（in the park, on the desk）は必ず前置詞から始めて動かす。',
    ],
    sections: [
      {
        heading: '名詞を説明する語の位置',
        body: `名詞を説明する語は、長さによって前に置くか後ろに置くかが決まる。

■ 一語なら名詞の前
例）a big park（大きな公園）／an interesting book（おもしろい本）／three red apples

形容詞が二つ以上並ぶときは、数→大きさ→色の順が基本。
例）three big red apples

■ 二語以上のかたまりなら名詞の後ろ
前置詞のかたまり、動詞の ing 形のかたまり、to 不定詞のかたまりは、名詞の後ろから説明する。
例）the book on the desk（机の上の本）
　　the boy running over there（あそこで走っている少年）
　　something cold to drink（何か冷たい飲み物）
　　a girl with long hair（長い髪の女の子）

例）あそこで走っている少年は私の兄です。
　　→ The boy running over there is my brother.
日本語では「あそこで走っている」が先に来るが、英語では the boy のあとに回る。

★ ポイント：-thing で終わる語（something, anything, nothing）は、一語の形容詞でも後ろに置く。something cold であって cold something ではない。`,
      },
      {
        heading: '副詞の位置',
        body: `副詞は種類によって置き場所が決まっている。

■ 頻度を表す副詞（always / usually / often / sometimes / never）
一般動詞の前、be動詞・助動詞の後ろに置く。
例）彼はいつも忙しい。→ He is always busy.（be動詞の後ろ）
　　彼女はいつも早起きする。→ She always gets up early.（一般動詞の前）
　　私は決してうそをつきません。→ I never tell a lie.
　　あなたはときどきテニスをしますか。→ Do you sometimes play tennis?

■ 様子を表す副詞（well / fast / slowly / hard）
ふつう文の最後、または動詞のすぐ後ろに置く。
例）彼は速く走る。→ He runs fast.
　　彼女は上手に英語を話す。→ She speaks English well.（speaks well English は誤り）

■ 場所と時
場所→時の順で文末に置く。
例）私は昨日図書館で英語を勉強した。→ I studied English in the library yesterday.

⚠ 注意：目的語（English など）と動詞の間に副詞を割りこませない。She speaks well English. のような答案が多いが、目的語のあとに置いて She speaks English well. とする。`,
      },
    ],
    trapExamples: [
      {
        question: '「あそこで走っている少年は私の兄です」を英語にしなさい。',
        wrongAnswer: 'The running over there boy is my brother.',
        trapExplanation:
          '日本語の「あそこで走っている少年」の順をそのまま英語にしたため、二語以上のかたまりを名詞の前に押しこんでしまった。一語の形容詞と同じあつかいにしてよいと思いこんでいる。',
        correctAnswer: 'The boy running over there is my brother.',
        correctExplanation:
          '説明が二語以上のかたまりになるときは、名詞の後ろから説明する。running over there が the boy を後ろから修飾している。The boy who is running over there ~ と関係代名詞で書いてもよい。',
      },
      {
        question: '「彼はいつも忙しい」を英語にしなさい。',
        wrongAnswer: 'He always is busy.',
        trapExplanation:
          '「頻度の副詞は動詞の前」とだけ覚えているため、be動詞の場合も前に置いてしまった。一般動詞と be動詞で位置が逆になることを区別していない。',
        correctAnswer: 'He is always busy.',
        correctExplanation:
          '頻度を表す副詞は、be動詞と助動詞の後ろ、一般動詞の前に置く。He is always busy. / He always studies hard. / He can always help us. の三つを並べて覚えるとまちがえない。',
      },
    ],
  },

  {
    id: 'eigo_s433',
    subject: 'eigo',
    examType: 'chugaku',
    title: '並べかえ③：疑問文・不定詞・比較の型',
    description: '入試の並べかえで頻出する、間接疑問・不定詞・比較の語順を型として覚える',
    order: 933,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '間接疑問（文の中の疑問詞）は＜疑問詞＋主語＋動詞＞の肯定文の語順に戻す。',
      'How many ＋ 名詞の複数形、How much ＋ 数えられない名詞。',
      '比較級は er / more、最上級は est / the most。high の最上級は highest。',
      '＜too ～ to …＞＜so ～ that …＞＜It is ～ to …＞は型ごと覚える。',
      '語群に that や to があれば、どの型を使わせたいかの合図と考える。',
    ],
    sections: [
      {
        heading: '間接疑問：語順が肯定文に戻る',
        body: `疑問詞で始まる文が、別の文の中に入りこむと、語順が肯定文と同じに戻る。これを間接疑問という。並べかえの頻出項目である。

■ もとの疑問文
Where does he live?（彼はどこに住んでいますか）
What time does the movie start?（映画は何時に始まりますか）

■ 文の中に入れると
Do you know where he lives?（彼がどこに住んでいるか知っていますか）
Do you know what time the movie starts?
I don't know where he lives.
Please tell me where the station is.

does や do は消え、動詞は主語に合わせた形（lives, starts）になる。

■ よく使う導入部分
Do you know ~ / I don't know ~ / Please tell me ~ / I want to know ~

★ ポイント：疑問詞のあとに do, does, did, is が来ていたら、そこで一度止まって「これは文の中に入っている疑問文ではないか」を疑う。入っているなら＜疑問詞＋主語＋動詞＞に直す。`,
      },
      {
        heading: '不定詞と比較の型',
        body: `並べかえで問われる型は数が限られている。次の型を、語群を見た瞬間に思い出せるようにする。

■ 不定詞の型
・It is ～ for 人 to 動詞　　（人が…するのは〜だ）
　例）It is easy for me to swim.
・too ～ to 動詞　　（…するには〜すぎる／〜すぎて…できない）
　例）This box is too heavy to carry.
・want 人 to 動詞　　（人に…してほしい）
　例）I want you to come to my house.
・something ＋ 形容詞 ＋ to 動詞
　例）I want something cold to drink.

■ 比較の型
・比較級 ＋ than　　例）He runs faster than I do.
・the ＋ 最上級 ＋ in / of　　例）Mt. Fuji is the highest mountain in Japan.
・as ～ as　　例）She is as tall as her mother.
・Which do you like better, A or B?　　（AとBではどちらが好きですか）

■ 長い語につく比較級・最上級
beautiful, interesting, difficult, popular, important のような長い語は more / most を使う。
例）This book is more interesting than that one.
　　Soccer is the most popular sport in this school.

⚠ 注意：good — better — best、bad — worse — worst、many/much — more — most、high — higher — highest は特別。high は短い語なので more high とはしない。`,
      },
    ],
    trapExamples: [
      {
        question: '[ know / where / do / you / lives / he ] を並べかえなさい（「彼がどこに住んでいるか知っていますか」）。',
        wrongAnswer: 'Do you know where does he live?',
        trapExplanation:
          '「どこに住んでいますか」という疑問文をそのまま文の後ろにつなげようとして does を補ってしまう。語群に does がないことにも気づいていない。',
        correctAnswer: 'Do you know where he lives?',
        correctExplanation:
          '疑問詞が文の中に入ると＜疑問詞＋主語＋動詞＞の語順に戻り、does は消えて動詞が lives になる。語群に does がないことは「間接疑問で解きなさい」という出題者からの合図である。',
      },
      {
        question: '「富士山は日本でいちばん高い山です」を英語にしなさい。',
        wrongAnswer: 'Mt. Fuji is the most high mountain in Japan.',
        trapExplanation:
          '「いちばん〜」を the most と覚えているため、短い語にも most をつけてしまった。high の最上級が highest であることを確かめずに書いている。',
        correctAnswer: 'Mt. Fuji is the highest mountain in Japan.',
        correctExplanation:
          '短い語は est、長い語（beautiful, interesting, difficult など）は most を使う。high, tall, large, old, young, fast はすべて短い語なので est をつける。最上級には the を忘れないこと。',
      },
    ],
  },

  // ───────────────── 4. 条件英作文（s434〜s436） ─────────────────
  {
    id: 'eigo_s434',
    subject: 'eigo',
    examType: 'chugaku',
    title: '条件英作文①：指定された語句を使う',
    description: '（　）内の語を使う、書き出しが決まっているなどの条件を正しく満たす答案の書き方',
    order: 934,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '指定語は必ず使う。使わなければ内容が正しくても0点になる。',
      '指定語は必要に応じて形を変えてよい（go → went）。「そのままの形で」と書いてあるときだけ変えない。',
      '書き出しが与えられているときは、その続きだけを書く。書き出しをもう一度書かない。',
      'enjoy, finish, stop のあとは ing 形。want, hope のあとは to 不定詞。',
      '書き終えたら、条件を一つずつ指さして確認する。',
    ],
    sections: [
      {
        heading: '指定語の使い方',
        body: `条件英作文とは、「（　）内の語を使って」「〜語以内で」「Because で書き始めて」のような条件つきの英作文である。内容が正しくても条件を破れば得点にならないので、条件の確認が最優先になる。

■ 指定語は形を変えてよいのが原則
例）次の日本語を、（　）内の語を使って英語にしなさい。
　　「私は昨日図書館へ行きました」（go）
　　→ I went to the library yesterday.
指定語 go は、文に合わせて went に変える。「（　）内の語をそのままの形で使うこと」と書かれている場合だけ、形を変えてはいけない。

■ 指定語が接続詞のとき
　「私は忙しかったので、テレビを見ませんでした」（because）
　→ I didn't watch TV because I was busy.
　　（Because I was busy, I didn't watch TV. も可）

■ 指定語が二つ以上のとき
　「彼はとても疲れていたので、早く寝ました」（so, that）
　→ He was so tired that he went to bed early.

★ ポイント：指定語は「この型で書きなさい」という出題者の指示である。because があれば理由の文、when があれば時の文、to があれば不定詞の型を作る、と読み取る。`,
      },
      {
        heading: '書き出し・書き終わりが決まっている問題',
        body: `書き出しの語句が与えられている問題では、その続きだけを解答らんに書く。与えられた部分をもう一度書くと語数がずれ、減点されることがある。

■ 例
問）「私はサッカーをすることが好きです」
　　I like （　　　　　　）.
　　→ playing soccer（または to play soccer）

問）あなたが将来なりたいものを英語で答えなさい。
　　I want to be （　　　　　　）.
　　→ a teacher

■ 動詞の形に注意する書き出し
・I enjoyed （　）. → playing soccer with my friends（enjoy のあとは ing）
・I want （　）. → to visit Kyoto（want のあとは to 不定詞）
・I am good at （　）. → playing the piano（前置詞 at のあとは ing）
・My dream is （　）. → to be a doctor（be動詞のあとは to 不定詞でも ing でもよい）

■ 解答らんの句読点
書き出しの部分に大文字があるので、続きは小文字で書き始める。文の終わりのピリオドを忘れない。

⚠ 注意：enjoy の直後に to 不定詞は置けない。I enjoyed to play soccer. は誤りで、I enjoyed playing soccer. とする。enjoy / finish / stop / practice のあとは ing、want / hope / decide / try のあとは to、とセットで覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '（enjoy）を使って「私は昨日サッカーをして楽しみました」を英語にしなさい。',
        wrongAnswer: 'I enjoyed to play soccer yesterday.',
        trapExplanation:
          '「〜することを楽しむ」という日本語から、「〜すること」を to 不定詞で表そうとしてしまう。want to ~ の型を覚えているために、同じ形が使えると思いこむ。',
        correctAnswer: 'I enjoyed playing soccer yesterday.',
        correctExplanation:
          'enjoy のあとに置けるのは動名詞（ing 形）だけである。同じ仲間に finish, stop, practice がある。反対に want, hope, decide, try のあとは to 不定詞。指定語が enjoy なら、うしろは必ず ing だと即断できる。',
      },
      {
        question: '（go）を使って「私は昨日図書館へ行きました」を英語にしなさい。',
        wrongAnswer: 'I go to the library yesterday.',
        trapExplanation:
          '「指定された語をそのまま使わなければならない」と思いこみ、go を原形のまま書いてしまった。yesterday という過去を表す語があるのに時制を合わせていない。',
        correctAnswer: 'I went to the library yesterday.',
        correctExplanation:
          '指定語は文に合うように形を変えてよい。「そのままの形で使うこと」と明記されている場合だけ変えない。yesterday があるので過去形 went にする。指定語を見たら、まず時制と主語に合わせて形を整える。',
      },
    ],
  },

  {
    id: 'eigo_s435',
    subject: 'eigo',
    examType: 'chugaku',
    title: '条件英作文②：語数指定を守る',
    description: '語数の数え方の決まりを覚え、指定語数にぴったり合わせる調整のしかたを学ぶ',
    order: 935,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      `短縮形（I'm, don't）は1語、離して書けば2語（I am, do not）。`,
      'ハイフンでつないだ語（e-mail, twenty-five）は1語。',
      'ice cream, high school のように離して書く語は2語。',
      'コンマ・ピリオド・クエスチョンマークは語数に数えない。',
      '語数が足りないときは形容詞・副詞・理由を足し、多いときは短縮形にして削る。',
    ],
    sections: [
      {
        heading: '語数の数え方',
        body: `「五語以上で」「六語以内で」といった語数指定は、数え方を知らないと守れない。次の決まりを覚える。

■ 1語と数えるもの
・短縮形：I'm（1語）／don't（1語）／it's（1語）／can't（1語）
・ハイフンでつないだ語：e-mail（1語）／twenty-five（1語）／T-shirt（1語）
・冠詞：a, an, the も1語として数える

■ 2語と数えるもの
・短縮しない形：I am（2語）／do not（2語）／it is（2語）
・離して書く名詞：ice cream（2語）／high school（2語）／post office（2語）

■ 数えないもの
コンマ、ピリオド、クエスチョンマーク、引用符などの記号は数えない。

■ 数え方の練習
I'm going to visit my aunt tomorrow.
　→ I'm(1) going(2) to(3) visit(4) my(5) aunt(6) tomorrow(7)　＝7語

★ ポイント：語数が足りないときは、短縮形をやめて I am, do not と離して書くだけで1語ずつ増やせる。逆に多いときは短縮形にして減らせる。`,
        figureId: 'lf_eigoext12_435',
      },
      {
        heading: '語数を調整する技術',
        body: `語数がぴったり合わないときは、次の方法で増減させる。内容を変えずに調整できるので、覚えておくと安心である。

■ 増やす方法
①形容詞・副詞を足す　　I like dogs. → I really like small dogs.
②理由をつける　　　　　I like summer. → I like summer because I can swim in the sea.
③場所や時を足す　　　　I play tennis. → I play tennis with my friends every Sunday.
④短縮形をやめる　　　　I'm a student. → I am a student.

■ 減らす方法
①短縮形にする　　　　　I do not like it. → I don't like it.
②くり返しを消す　　　　I like soccer and I like baseball. → I like soccer and baseball.
③代名詞に変える　　　　My brother plays soccer, and my brother is good at it. → My brother plays soccer, and he is good at it.

■ 語数の条件の読み分け
・「五語以上で」＝5, 6, 7語…はよいが、4語は不可
・「五語以内で」＝1〜5語はよいが、6語は不可
・「五語で」＝ちょうど5語

⚠ 注意：語数が一語でも条件から外れると、内容が正しくても0点になる採点が多い。書き終えたら必ず指で語を押さえながら数える。数えた語数を答案の横に小さくメモしておくと見直しが速い。`,
      },
    ],
    trapExamples: [
      {
        question: `次の英文は何語か答えなさい。I'm going to visit my aunt tomorrow.`,
        wrongAnswer: '8語',
        trapExplanation:
          "I'm を「I」と「am」に分けて2語と数えてしまった。短縮形は見た目が二つの語からできているので、つい二つに分けたくなる。",
        correctAnswer: '7語',
        correctExplanation:
          "アポストロフィでつないだ短縮形は1語と数える。I'm(1) going(2) to(3) visit(4) my(5) aunt(6) tomorrow(7) で7語。もし I am going to ~ と離して書けば8語になる。この一語の差で条件を満たせるかどうかが決まる。",
      },
      {
        question: '「あなたはなぜ英語を勉強するのですか」という問いに、五語以上の英語で答えなさい。',
        wrongAnswer: 'Because it is fun.',
        trapExplanation:
          '内容としては理由になっているが、Because(1) it(2) is(3) fun(4) で4語しかない。答えの中身に気を取られ、語数を数えないまま書き終えてしまう。',
        correctAnswer: 'Because I want to talk with people from other countries.',
        correctExplanation:
          '語数が足りないときは理由をくわしくする。この文は Because(1) I(2) want(3) to(4) talk(5) with(6) people(7) from(8) other(9) countries(10) で10語あり、条件を満たす。書いたら必ず語を指で押さえて数える。',
      },
    ],
  },

  {
    id: 'eigo_s436',
    subject: 'eigo',
    examType: 'chugaku',
    title: '条件英作文③：対話文の空所を埋める',
    description: '前後のせりふから、空所に入る文の種類（質問か答えか）を決めて書く手順を学ぶ',
    order: 936,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '空所の直後の返事を見れば、入るべき質問の種類がわかる。',
      '答えが時刻なら What time、場所なら Where、理由なら Why、値段なら How much。',
      'Yes, please. / No, thank you. と答える相手は Would you like ~ ? などの勧誘。',
      '提案（How about ~ ? / Shall we ~ ?）には Yes, I do. ではなく Sure. や That sounds good. で答える。',
      '会話特有の決まり文句（Here you are. / Just a moment. など）は丸ごと覚える。',
    ],
    sections: [
      {
        heading: '返事から質問を逆算する',
        body: `対話文の空所補充では、空所そのものを考える前に、空所の前後のせりふを読む。とくに直後の返事が最大のヒントになる。

■ 返事の種類と質問の対応
・It's ten thirty.　　　　→ What time is it (now)?
・It's five hundred yen.　→ How much is it?
・For two hours.　　　　　→ How long ~ ?
・Three times a week.　　 → How often ~ ?
・By bus.　　　　　　　　 → How do you go to ~ ?
・Because I was busy.　　 → Why ~ ?
・It's on the second floor. → Where is ~ ?
・Yes, please.　　　　　　→ Would you like ~ ? / Shall I ~ ?
・Sure. / All right.　　　→ Can you ~ ? / Will you ~ ?（依頼）

■ 例題
Ａ：（　　　　　　　）
Ｂ：It's ten thirty.
Ａ：Oh, we have to hurry.
答えが時刻なので、空所には What time is it now? が入る。

★ ポイント：Ｂの返事だけでなく、そのあとのＡのせりふも読む。「急がなくちゃ」と続いているので、時刻をたずねていることが確かめられる。`,
      },
      {
        heading: '会話の決まり文句',
        body: `対話文には、直訳では意味の取れない決まり文句が出る。型ごと覚えておくと、空所補充でも会話文の並べかえでも使える。

■ 店・電話・道案内
・May I help you? — Yes, please. I'm looking for a red T-shirt.（店員と客）
・Here you are. — Thank you.（はい、どうぞ）
・Hello. This is Ken speaking. May I speak to Tom?（電話）
・Just a moment, please.（少々お待ちください）
・Could you tell me the way to the station?（道をたずねる）
・Go straight and turn right at the second corner.（道案内）

■ さそう・提案する
・How about going to the movies? — That sounds good.
・Shall we play tennis after school? — Yes, let's.
・Why don't you come to my house? — Thank you. I will.

■ ことわる・あやまる
・I'm sorry, but I have to go home now.
・That's too bad.（それは残念だ）

⚠ 注意：How about ~ ? は Do you ~ ? の形をしていないので、Yes, I do. とは答えられない。Sure. / That sounds good. / Yes, let's. のような応答を使う。答え方の形が質問の形に合っているかを必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: 'Ａ：（　　　）　Ｂ：Yes, please.　空所に入る英文として適切なものを書きなさい。',
        wrongAnswer: 'Do you like tea?',
        trapExplanation:
          'Yes という語だけを見て、Yes / No で答えられる疑問文なら何でも入ると考えてしまった。Yes, please. は「はい、お願いします」という意味で、好みをたずねる質問への答えにはならない。',
        correctAnswer: 'Would you like some tea?',
        correctExplanation:
          'Yes, please. / No, thank you. と答えるのは、物をすすめたり手助けを申し出たりする文である。Would you like ~ ? / Shall I open the window? / Do you want some water? などが入る。Do you like tea? への答えは Yes, I do. になる。',
      },
      {
        question: 'Ａ：How about going to the movies this afternoon?　Ｂ：（　　　）　空所に入る応答を書きなさい。',
        wrongAnswer: 'Yes, I do.',
        trapExplanation:
          '疑問文だから Yes か No で答えると考え、do を使う形で応じてしまった。How about ~ ? は do を使った疑問文ではないので、Yes, I do. では答えられない。',
        correctAnswer: 'That sounds good.',
        correctExplanation:
          `How about ~ ? / Shall we ~ ? / Why don't we ~ ? はさそいの表現なので、Sure. / That sounds good. / Yes, let's. / I'm sorry, but I can't. のように応じる。答えの形は質問の形に合わせる、という原則を守る。`,
      },
    ],
  },

  // ───────────────── 5. 自由英作文（s437〜s439） ─────────────────
  {
    id: 'eigo_s437',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自由英作文①：意見＋理由二つの型',
    description: '立場をはっきり決め、理由を二つ並べて書く定型を身につける',
    order: 937,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '型は「意見→理由①→理由②→まとめ」の四文。',
      '立場は必ずどちらかに決める。「どちらも好き」は減点される。',
      'First, ~ . Second, ~ . で理由を二つに区切ると読みやすい。',
      'まとめは意見をくり返すだけでよい（That is why ~ . / So ~ .）。',
      '難しい語を使わず、確実に正しい英文を書くほうが点になる。',
    ],
    sections: [
      {
        heading: '四文の型',
        body: `自由英作文は「何を書くか」で迷うと時間がなくなる。あらかじめ型を決めておき、そこに内容を流しこむ。中学受験の英語では、四文・四十語程度が標準である。

■ 型
①意見　I think ~ . / I like ~ better.
②理由①　First, ~ .
③理由②　Second, ~ .
④まとめ　So I think ~ . / That is why I like ~ .

■ 例題と模範解答
問）Which do you like better, summer or winter? Write about 40 words.

I like summer better than winter. First, I can swim in the sea with my family. Second, we have a long vacation in summer, so I can read many books. That is why I like summer better.

（語数＝40語程度。文の数＝4文）

★ ポイント：①と④はほとんど同じ内容でよい。書く前に日本語で「夏。理由は海で泳げる、休みが長い」とメモしておけば、あとは型に流しこむだけで書き終わる。`,
        figureId: 'lf_eigoext12_437',
      },
      {
        heading: '立場を決めるということ',
        body: `日本語の作文では「どちらにもよさがある」と書くのが上手な書き方とされることがあるが、英語の自由英作文ではこれは減点になる。設問が「どちらが好きか」「賛成か反対か」を聞いている以上、答えは一つに決めなければならない。

■ 決めるときのコツ
好きかどうかではなく「英語で理由が二つ書けるほう」を選ぶ。本当は冬が好きでも、夏の理由のほうが英語で書きやすいなら夏を選んでよい。作文の内容は採点者に確かめようがないので、書きやすさで決める。

■ 使える理由の引き出し
・時間　I have more free time. / I can get up late.
・友達や家族　I can play with my friends. / I can talk with my family.
・体験　I went there last year, and it was a lot of fun.
・気持ち　It makes me happy. / I feel excited.
・役に立つ　It is good for my health. / It helps me study.

■ 賛成・反対を書くとき
I agree with this idea.（賛成です）／ I do not agree with this idea.（反対です）
そのあとは同じく First, ~ . Second, ~ . で理由を並べる。

⚠ 注意：理由が一つしかないのに二つに分けて書こうとすると、同じことのくり返しになって内容点が下がる。「楽しいから」と「おもしろいから」は同じ理由である。角度の違う理由を二つ用意する。`,
      },
    ],
    trapExamples: [
      {
        question: 'Which do you like better, dogs or cats? 理由を二つ入れて、四十語程度の英語で書きなさい。',
        wrongAnswer: 'I like both dogs and cats. They are very cute. I want to have them.',
        trapExplanation:
          '「どちらも好き」と書いて立場を決めなかったため、設問の条件（どちらが好きか）に答えていない。さらに理由が「かわいい」の一つしかなく、二つという条件も満たしていない。',
        correctAnswer:
          'I like dogs better than cats. First, I can take a walk with a dog every day. It is good for my health. Second, dogs can learn many things, so I can play with them. That is why I like dogs better.',
        correctExplanation:
          'まずどちらか一方に決め、First, ~ . Second, ~ . で角度の違う理由を二つ並べる。「散歩ができて健康によい」と「芸を覚えるので遊べる」は別の理由になっている。最後に意見をくり返して締めくくる。',
      },
      {
        question: 'Do you like studying English? 理由を二つ入れて英語で書きなさい。',
        wrongAnswer: 'Yes, I do. First, it is fun. Second, I enjoy it.',
        trapExplanation:
          '形の上では First と Second を使っているが、「楽しい」と「楽しんでいる」は同じ内容である。理由を二つ書いたつもりで、実際には一つしか書けていない。',
        correctAnswer:
          'Yes, I do. First, I can talk with people from other countries when I travel. Second, I can enjoy movies and songs in English. That is why I like studying English.',
        correctExplanation:
          '理由は「角度」を変える。この解答では「外国の人と話せる」と「英語の映画や歌を楽しめる」という別の場面を挙げている。理由を書いたら、二つを並べて読み直し、言いかえただけになっていないかを確かめる。',
      },
    ],
  },

  {
    id: 'eigo_s438',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自由英作文②：理由をふくらませる',
    description: '理由に具体例や自分の体験を足して、内容点の取れる答案にする',
    order: 938,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '理由は「一文で終わらせず、具体例か体験を一文足す」と厚みが出る。',
      'For example, ~ . / I went ~ last year. が具体化の合図。',
      '体験を書くときは過去形、いつものことは現在形。時制を混ぜない。',
      '接続詞 so（だから）、because（なぜなら）、but（しかし）で文をつなぐ。',
      '知っている言い回しの引き出し（It is fun to ~ . / It helps me ~ .）を用意しておく。',
    ],
    sections: [
      {
        heading: '理由をふくらませる二つの型',
        body: `理由を一文書いただけでは、四十語には届かないことが多い。理由のあとに一文足す型を覚えると、語数と内容点の両方が上がる。

■ 型A　具体例を足す
理由 → For example, ~ .
例）I like summer. First, I can do many things outside. For example, I can swim in the sea and go camping with my family.

■ 型B　自分の体験を足す
理由 → 過去の体験（過去形）
例）Second, summer vacation is long. Last summer, I went to my grandmother's house in Nagano and stayed there for a week.

■ so と because のつなぎ方
so（だから）は結果を後ろに、because（なぜなら）は理由を後ろに置く。
例）It was rainy, so we stayed home.
　　We stayed home because it was rainy.

★ ポイント：型Bの体験は本当のことでなくてよい。ただし書くと決めたら、その一文の中で時制をそろえる。「去年」と書いたのに現在形で続けると減点になる。`,
      },
      {
        heading: '使い回せる言い回しの引き出し',
        body: `自由英作文は本番でゼロから作る時間がない。次のような言い回しをあらかじめ覚えておき、内容だけを入れかえて使う。

■ 気持ち・評価
It is fun to play soccer.（サッカーをするのは楽しい）
It makes me happy.（それは私を幸せにする）
I am interested in science.（理科に興味がある）
I enjoyed talking with my friends.（友達と話すのが楽しかった）

■ できる・役に立つ
I can learn many things.（多くのことを学べる）
It helps me study English.（英語の勉強の助けになる）
It is good for my health.（健康によい）
I want to be a doctor in the future.（将来医者になりたい）

■ 時・頻度
every day / every Sunday / once a week / three times a month
after school / on weekends / during summer vacation

■ 数と量
a lot of books / many friends / a few people / some water

⚠ 注意：覚えた言い回しをそのまま使うときも、主語に合わせて動詞を変える必要がある。It helps me study English. の主語が複数なら They help me study English. になる。丸暗記した文をそのまま貼りつけて三単現をまちがえる答案が非常に多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「去年の夏、私は京都へ行き、とても楽しかったです」を自由英作文の一文として書きなさい。',
        wrongAnswer: 'Last summer, I go to Kyoto and it was fun.',
        trapExplanation:
          '文の後半は was と過去形にできているのに、前半の動詞 go を現在形のままにしてしまった。書きなれた I go to ~ という形が手が覚えていて、時制の確認が抜ける。',
        correctAnswer: 'Last summer, I went to Kyoto, and it was a lot of fun.',
        correctExplanation:
          'Last summer という過去を表す語がある以上、その文の動詞はすべて過去形にそろえる。and でつないだ二つの動詞（went と was）が同じ時制になっているかを、書いたあとに必ず確かめる。',
      },
      {
        question: '「例えば、私は友達とサッカーをすることができます」を英語で書きなさい。',
        wrongAnswer: 'For example, I can playing soccer with my friends.',
        trapExplanation:
          '「〜すること」という日本語につられ、can のあとに ing 形を置いてしまった。動名詞を使う場所と助動詞のあとの形を混同している。',
        correctAnswer: 'For example, I can play soccer with my friends.',
        correctExplanation:
          'can, will, must, should などの助動詞のあとは必ず動詞の原形が来る。ing 形を使うのは、前置詞のあと（good at playing）、enjoy などのあと、主語や補語になるときだけである。',
      },
    ],
  },

  {
    id: 'eigo_s439',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自由英作文③：見直しで減点を防ぐ',
    description: '書き終えたあと三十秒で行う、決まった順序の見直し手順を身につける',
    order: 939,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '見直しは「三単現→複数のs→冠詞→時制→つづり」の順で行う。',
      '主語が he / she / it などの単数なら、現在形の動詞に s がつく。',
      '数えられる名詞が二つ以上なら s、一つなら a か an が必要。',
      'by bike, by bus, go to school のように冠詞をつけない決まり文句がある。',
      '大文字で書き始め、ピリオドで終わっているかも点になる。',
    ],
    sections: [
      {
        heading: '見直しの順序を決めておく',
        body: `見直しは「なんとなく読み返す」のではなく、見る項目を決めて一項目ずつ通す。そのほうが速く、見落としがない。

■ 手順（各十秒）
①三単現の s
　主語が I, you, 複数以外で、現在の話なら、動詞に s がついているか。
　My brother like soccer.（誤）→ My brother likes soccer.（正）
②名詞の s
　二つ以上あるものに s がついているか。逆に一つなのに s をつけていないか。
　I have two brother.（誤）→ I have two brothers.（正）
③冠詞
　数えられる名詞が一つのとき、a / an / the / my などがついているか。
　My father is teacher.（誤）→ My father is a teacher.（正）
④時制
　yesterday, last year があるのに現在形になっていないか。
⑤つづり
　friend, because, beautiful, favorite, restaurant など、まちがえやすい語を確かめる。

★ ポイント：この五項目で失点のほとんどが防げる。内容を書き直そうとすると時間が足りなくなるので、見直しでは内容には手を入れない。`,
      },
      {
        heading: '冠詞をつけない決まり文句',
        body: `冠詞は「つけ忘れ」だけでなく「つけすぎ」も誤りになる。次の場合は a や the をつけない。

■ 交通手段の by
by bike / by bus / by train / by car / by plane
例）私は自転車で学校へ行きます。→ I go to school by bike.（by a bike は誤り）
　　ただし「歩いて」は on foot。

■ 建物を本来の目的で使うとき
go to school（勉強しに学校へ行く）／go to bed（寝る）／go to church
例）I go to school at eight.（校舎に用があって行くなら go to the school）

■ 食事の名前
have breakfast / have lunch / have dinner
例）私は七時に朝食を食べます。→ I have breakfast at seven.

■ スポーツ名
play soccer / play tennis / play baseball（the はつけない）
一方、楽器には the をつける。play the piano / play the guitar

■ 教科・言語・季節
study English / like math / in summer

⚠ 注意：play the soccer と play piano は、どちらもよくある誤り。「スポーツは冠詞なし、楽器は the」と対にして覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の町にはたくさんの人が住んでいます」を There で始めて英語にしなさい。',
        wrongAnswer: 'There is many people in my town.',
        trapExplanation:
          'people という語に s がついていないため単数だと思ってしまう。people は語形が変わらないだけで、意味は複数（人々）である。',
        correctAnswer: 'There are many people in my town.',
        correctExplanation:
          'people は person の複数形にあたる語で、つねに複数あつかいをする。同じように children, men, women も s がつかないが複数である。be動詞は are、動詞に三単現の s はつけない。',
      },
      {
        question: '「私は自転車で学校へ行きます」を英語にしなさい。',
        wrongAnswer: 'I go to school by a bike.',
        trapExplanation:
          '「数えられる名詞には冠詞が要る」という規則を覚えたばかりのため、by のあとの bike にも a をつけてしまった。冠詞は「つけすぎ」も誤りになると知らない。',
        correctAnswer: 'I go to school by bike.',
        correctExplanation:
          '交通手段を表す by のあとの名詞には冠詞をつけない。by bus, by train, by car も同じ。「歩いて」は on foot である。逆に自転車そのものを話題にするときは I have a new bike. のように冠詞が必要になる。',
      },
    ],
  },

  // ───────────────── 6. 絵・写真の描写（s440〜s442） ─────────────────
  {
    id: 'eigo_s440',
    subject: 'eigo',
    examType: 'chugaku',
    title: '絵の描写①：だれが何をしているかを書く',
    description: '絵を見て英文を作る問題で、現在進行形を使って動作を正確に描写する',
    order: 940,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '絵の中の動作は現在進行形（be動詞＋ing）で表す。',
      'be動詞は主語の数に合わせる（A boy is ~ . / Two girls are ~ .）。',
      'ing のつけ方に注意（run → running, swim → swimming, write → writing）。',
      'have（持っている）, like, know, want は進行形にしない。',
      '目立つものから順に、一文ずつ短く書く。',
    ],
    sections: [
      {
        heading: '現在進行形で描写する',
        body: `絵や写真を見て英語で説明する問題は、帰国子女入試や英語選択入試でよく出る。書き方の型は決まっている。

■ 型
＜主語＋be動詞＋動詞のing形＋（目的語）＋（場所）＞
例）A boy is playing soccer in the park.
　　Two girls are talking under the tree.
　　A man is reading a book on the bench.
　　A dog is sleeping by the door.

■ be動詞の選び方
主語が一人・一つなら is、二つ以上なら are。
例）A girl is running. / Three children are running.

■ ing のつけ方
・ふつうは ing をつける　　play → playing, read → reading, eat → eating
・e で終わる語は e を取る　make → making, write → writing, ride → riding
・短い語で子音を重ねる　　run → running, swim → swimming, sit → sitting, get → getting

■ 書く順序
絵の中でいちばん大きく描かれているもの、中央にあるものから書く。一文に二つも三つも詰めこまず、一文一動作にする。

★ ポイント：絵の描写では、名前のわからないものを無理に書かない。「ベンチ」がわからなければ、そこは書かずに A man is reading a book. だけにすればよい。`,
        figureId: 'lf_eigoext12_440',
      },
      {
        heading: '進行形にしない動詞',
        body: `動作ではなく「状態」を表す動詞は、進行形にしない。絵の描写でよくまちがえるので注意する。

■ 進行形にしない代表的な動詞
have（持っている・飼っている）／like（好きだ）／know（知っている）／want（ほしい）／see（見える）／hear（聞こえる）／belong（属している）
例）女の人が赤いかばんを持っている。→ A woman has a red bag.（is having は誤り）
　　男の子がねこを飼っている。→ A boy has a cat.

■ have が進行形になる場合
「食べる・飲む・（時を）過ごす」の意味なら進行形にできる。
例）They are having lunch.（昼食を食べているところだ）
　　We are having a good time.（楽しい時を過ごしている）

■ 「身につけている」の言い分け
wear は「身につけている」という状態、put on は「身につける」という動作。
例）A girl is wearing a red cap.（赤い帽子をかぶっている状態）
　　A girl is putting on her shoes.（今くつをはこうとしている動作）
「〜を持って・身につけて」を with で表すこともできる。
例）a girl with long hair（長い髪の女の子）／a boy with a blue bag

⚠ 注意：wear は「状態」を表す動詞だが、進行形にできる例外である。「着ている最中」ではなく「着ている状態」を表すので、絵の描写では is wearing がよく使われる。`,
      },
    ],
    trapExamples: [
      {
        question: '絵の中で男の子がサッカーをしている。この様子を英語で書きなさい。',
        wrongAnswer: 'A boy is play soccer.',
        trapExplanation:
          'be動詞を置くところまでは覚えていたが、動詞を ing 形にするのを忘れた。日本語の「している」という一つの表現が、英語では be動詞と ing の二つで表されることが意識できていない。',
        correctAnswer: 'A boy is playing soccer.',
        correctExplanation:
          '現在進行形は be動詞と ing 形の二つがそろって初めて成り立つ。どちらか一方だけでは誤りになる。A boy plays soccer. だと「習慣としてサッカーをする」の意味になり、絵の説明にならない。',
      },
      {
        question: '絵の中の女の人が赤いかばんを持っている。この様子を英語で書きなさい。',
        wrongAnswer: 'A woman is having a red bag.',
        trapExplanation:
          '「絵の描写はすべて現在進行形」と機械的に覚えたため、状態を表す have まで進行形にしてしまった。「持っている」という日本語の「〜ている」につられている。',
        correctAnswer: 'A woman has a red bag.',
        correctExplanation:
          '「持っている・所有している」の have は状態を表すので進行形にしない。同じ仲間に like, know, want, see がある。ただし「食べる」の意味の have は They are having lunch. のように進行形にできる。',
      },
    ],
  },

  {
    id: 'eigo_s441',
    subject: 'eigo',
    examType: 'chugaku',
    title: '絵の描写②：位置を表す前置詞',
    description: 'in / on / under / by / between などを使い分けて、ものの位置を正確に説明する',
    order: 941,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'ふれていれば on、中に入っていれば in、離れて上なら over / above。',
      '「二つの間」は between、「三つ以上の中」は among。',
      'in front of（〜の前に）と behind（〜の後ろに）は対で覚える。',
      'by / near / next to はどれも「そば」だが、next to は「すぐとなり」。',
      '前置詞のあとには必ず名詞（または代名詞の目的格）が来る。',
    ],
    sections: [
      {
        heading: '位置の前置詞',
        body: `位置を表す前置詞は、日本語の「上・下・中」と一対一で対応しない。ふれているかどうか、囲まれているかどうかで選ぶ。

■ 基本の使い分け
・in　　中に入っている　　The pen is in the box.
・on　　ふれている　　　　The book is on the desk. / A picture is on the wall.
・over / above　離れて上　A bird is flying over the house.
・under　真下　　　　　　The cat is under the table.
・by / near　そば　　　　He is standing by the window.
・next to　すぐとなり　　The post office is next to the bank.
・in front of　前に　　　A car is in front of the house.
・behind　後ろに　　　　　A boy is hiding behind the tree.
・between A and B　AとBの間に
・across from　向かい側に

■ 「壁に」は on
日本語では「壁に絵がかかっている」と言うが、絵は壁にふれているので on the wall である。同じように「天井に」は on the ceiling。
例）There is a picture on the wall.

★ ポイント：in と on の判断は「中に入っているか、表面にふれているか」。in the box（箱の中）と on the box（箱の上）はまったく違う位置になる。`,
        figureId: 'lf_eigoext12_441',
      },
      {
        heading: 'between と among、その他の注意',
        body: `数によって使い分ける前置詞、形が変わる前置詞に注意する。

■ between と among
・between … 二つ（二人）の間
　例）There is a bench between the two trees.
　　　I sat between Ken and Tom.
・among … 三つ（三人）以上の中
　例）He is popular among the students.

■ 前置詞のあとの代名詞は目的格
between you and I は誤りで、between you and me が正しい。前置詞のあとに来る代名詞は me, him, her, us, them の形になる。
例）Please sit next to me.
　　The dog ran to him.

■ 場所と時をつなげるとき
場所→時の順に置く。
例）I met her in front of the station at five.

■ よくある位置の言い方
・on the second floor（二階に）
・in the middle of the room（部屋の真ん中に）
・at the corner（角に）
・on the left / on the right（左に／右に）

⚠ 注意：「〜の間に」を日本語でひとくくりにして among を使うと誤りになる。二つなら必ず between。between the two trees のように、二つであることを the two ~ と示すと確実である。`,
      },
    ],
    trapExamples: [
      {
        question: '「壁に絵がかかっています」を There で始めて英語にしなさい。',
        wrongAnswer: 'There is a picture in the wall.',
        trapExplanation:
          '日本語の「壁に」という助詞「に」から、内部を表す in を選んでしまった。in を使うと「絵が壁の内部に埋めこまれている」という意味になる。',
        correctAnswer: 'There is a picture on the wall.',
        correctExplanation:
          'on は「表面にふれている」ことを表す前置詞で、上下や向きは関係ない。壁にかかった絵、天井の照明、顔についた汚れもすべて on を使う。in は「囲まれた内部」に入っているときだけ使う。',
      },
      {
        question: '「二本の木の間にベンチがあります」を英語にしなさい。',
        wrongAnswer: 'There is a bench among two trees.',
        trapExplanation:
          '「〜の間」という日本語をひとまとめに覚え、数による使い分けを意識していない。among と between のどちらでもよいと思いこんでいる。',
        correctAnswer: 'There is a bench between the two trees.',
        correctExplanation:
          'between は二つのものの間、among は三つ以上の中に囲まれているときに使う。two trees とはっきり二つと書かれているので between しか使えない。「木々の間を歩いた」なら I walked among the trees. となる。',
      },
    ],
  },

  {
    id: 'eigo_s442',
    subject: 'eigo',
    examType: 'chugaku',
    title: '絵の描写③：数量と様子をつけ加える',
    description: '数えられる名詞と数えられない名詞の量の表し方、色や様子の加え方を学ぶ',
    order: 942,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '数えられる名詞は many / a few、数えられない名詞は much / a little。',
      'a lot of と some はどちらにも使える。',
      'water, milk, bread, money, paper, homework は数えられない名詞。',
      '不規則な複数形（children, men, women, feet, teeth）を覚える。',
      '色や大きさは名詞の前、様子を表す副詞は文の後ろに置く。',
    ],
    sections: [
      {
        heading: '数えられる名詞と数えられない名詞',
        body: `英語の名詞は「一つ二つと数えられるもの」と「数えられないもの」に分かれる。絵の描写では量を表す語を使うので、この区別が必要になる。

■ 数えられない名詞の代表
water（水）／milk（牛乳）／juice／bread（パン）／rice（米）／money（お金）／paper（紙）／homework（宿題）／music／time（時間）／information

これらには a をつけず、複数形の s もつけない。
例）テーブルの上に水がたくさんあります。→ There is a lot of water on the table.
　　（There are many waters ~ は誤り）

■ 量を数える言い方
数えられない名詞を数えるときは、入れ物や単位を使う。
a glass of water（コップ一杯の水）／two glasses of milk
a cup of tea（カップ一杯の紅茶）／a piece of paper（一枚の紙）／two pieces of cake

■ many / much / a lot of
・many ＋ 数えられる名詞の複数形　many books
・much ＋ 数えられない名詞　much water（否定文・疑問文で使うことが多い）
・a lot of ＋ どちらでも可　a lot of books / a lot of water
・a few ＋ 数えられる名詞（少しの）／ a little ＋ 数えられない名詞（少しの）

★ ポイント：迷ったら a lot of と some を使う。どちらの名詞にも使えるので、誤りになりにくい。`,
      },
      {
        heading: '不規則な複数形と、様子の加え方',
        body: `複数形は s をつけるのが基本だが、形が変わるものがある。絵の描写で人数を書くときによく使う。

■ 不規則な複数形
child → children（子ども）／man → men（男の人）／woman → women（女の人）
foot → feet（足）／tooth → teeth（歯）／mouse → mice（ねずみ）
fish → fish（魚：単複同形）／sheep → sheep（羊：単複同形）
また people（人々）はそれ自体が複数である。

■ s の付け方が変わるもの
・s, x, ch, sh で終わる語 → es　bus → buses, box → boxes, watch → watches
・子音＋y → y を i に変えて es　city → cities, country → countries
・f, fe → ves　leaf → leaves, knife → knives

■ 様子をつけ加える
色・大きさ・材質は名詞の前に置く。
例）a big brown dog（大きな茶色い犬）／a small red car
様子を表す副詞は文の後ろに置く。
例）The children are running happily in the park.

■ 服装の表し方
A girl in a blue dress is singing.（青い服の女の子が歌っている）
A boy wearing glasses is reading a book.（めがねをかけた男の子が本を読んでいる）

⚠ 注意：three childs, two mans のような答案が多い。不規則な複数形は数が限られているので、まとめて覚えてしまう。`,
      },
    ],
    trapExamples: [
      {
        question: '「テーブルの上に水がたくさんあります」を英語にしなさい。',
        wrongAnswer: 'There are many waters on the table.',
        trapExplanation:
          '「たくさん」という日本語から many を選び、さらに複数だから s が要ると考えて waters としてしまった。water が数えられない名詞であることを意識していない。',
        correctAnswer: 'There is a lot of water on the table.',
        correctExplanation:
          'water は数えられない名詞なので複数形にせず、many も使わない。a lot of か much を使い、be動詞は is にする。数えたいときは two glasses of water のように入れ物で数える。',
      },
      {
        question: '「公園に三人の子どもがいます」を英語にしなさい。',
        wrongAnswer: 'There are three childs in the park.',
        trapExplanation:
          '複数形は s をつけると覚えているため、child にもそのまま s をつけてしまった。不規則な複数形の存在を思い出せていない。',
        correctAnswer: 'There are three children in the park.',
        correctExplanation:
          'child の複数形は children で、s はつかない。man → men、woman → women、foot → feet、tooth → teeth も同じく不規則である。数の少ない例外なので、まとめて暗記しておく。',
      },
    ],
  },

  // ───────────────── 7. 誤文訂正（s443〜s445） ─────────────────
  {
    id: 'eigo_s443',
    subject: 'eigo',
    examType: 'chugaku',
    title: '誤文訂正①：三単現と複数形の s',
    description: '誤りを見つける問題の解き方と、s のつけ忘れ・つけすぎの直し方',
    order: 943,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '主語が三人称単数で現在の話なら、動詞に s / es がつく。',
      `does や doesn't を使ったら、動詞は原形に戻す。`,
      'have の三単現は has、go は goes、study は studies。',
      '主語が複数（my parents, Ken and I）なら動詞に s はつかない。',
      '誤文訂正は「主語を丸で囲む→動詞を確かめる」の順で見る。',
    ],
    sections: [
      {
        heading: '誤文訂正の手順',
        body: `誤りを一か所見つけて直す問題は、やみくもに読み返すのではなく、見る順番を決めて解く。答案でよく見かける誤りの半分以上は三単現と冠詞なので、そこから確かめる。

■ 手順
①主語を丸で囲む　　だれが、いくつか
②動詞を四角で囲む　主語に合っているか、時制は合っているか
③名詞を見る　　　　s は要るか、冠詞は要るか
④前置詞を見る　　　抜けていないか、余分ではないか

■ 三単現の s がつく条件
・主語が I と you 以外の一人・一つ（he, she, it, my brother, Ken, this book）
・現在のことを表している（過去形・未来形ならつかない）
例）My brother plays tennis every Sunday.
　　Ken goes to school by bus.
　　This book looks interesting.

■ s / es のつけ方
・ふつうは s　　plays, likes, reads
・s, x, ch, sh, o で終わる語は es　goes, watches, teaches, washes
・子音＋y は y を i に変えて es　study → studies, cry → cries
・have は has（特別）

★ ポイント：主語が長いときは、その中心になる語を見る。The boy with two dogs is my friend. の主語は The boy なので is になる。`,
        figureId: 'lf_eigoext12_443',
      },
      {
        heading: 'does を使ったら動詞は原形',
        body: `疑問文や否定文で does を使うと、s の働きは does が引き受ける。だから動詞は原形に戻さなければならない。

■ 正しい形
・He plays tennis.（肯定文：動詞に s）
・He does not play tennis.（否定文：does not ＋ 原形）
・Does he play tennis?（疑問文：Does ＋ 主語 ＋ 原形）
・He doesn't play tennis.（短縮形）

■ よくある誤り
Does he plays tennis?（誤）→ Does he play tennis?
My brother don't like natto.（誤）→ My brother doesn't like natto.
She don't go to school by bus.（誤）→ She doesn't go to school by bus.

■ 過去形も同じ
did を使ったら動詞は原形になる。
Did you went to the park?（誤）→ Did you go to the park?
I didn't watched TV.（誤）→ I didn't watch TV.

■ 名詞の複数形のつけ忘れ
数を表す語のあとの名詞は必ず複数形にする。
I have two brother.（誤）→ I have two brothers.
There are many book in the library.（誤）→ There are many books in the library.

⚠ 注意：一つの文に s は一回だけ、という覚え方は誤り。My brothers play soccer.（名詞に s、動詞には s なし）と My brother plays soccer.（名詞に s なし、動詞に s）は、s の位置がちょうど入れかわる。主語と動詞をセットで見る。`,
      },
    ],
    trapExamples: [
      {
        question: `次の英文の誤りを一か所直しなさい。My brother don't like natto.`,
        wrongAnswer: `My brother don't likes natto.`,
        trapExplanation: `三単現の s が足りないと考え、動詞の like に s をつけてしまった。誤っているのは動詞ではなく don't のほうであることに気づいていない。`,
        correctAnswer: `My brother doesn't like natto.`,
        correctExplanation: `主語 My brother は三人称単数なので、否定文では doesn't を使う。そして doesn't のあとの動詞は原形の like のままにする。s は doesn't の中の does が引き受けている。`,
      },
      {
        question: '次の英文の誤りを一か所直しなさい。Does he plays tennis every Sunday?',
        wrongAnswer: 'Do he plays tennis every Sunday?',
        trapExplanation:
          '動詞に s がついているのを見て、Does を Do に変えてしまった。三単現の s は動詞ではなく Does のほうに現れる、という関係が理解できていない。',
        correctAnswer: 'Does he play tennis every Sunday?',
        correctExplanation:
          'Does で始まる疑問文では、うしろの動詞は必ず原形になる。主語 he は三人称単数なので Do には変えられない。Does を残し、plays を play に直すのが正しい。',
      },
    ],
  },

  {
    id: 'eigo_s444',
    subject: 'eigo',
    examType: 'chugaku',
    title: '誤文訂正②：冠詞のつけ忘れ・つけすぎ',
    description: 'a / an / the の使い分けと、冠詞をつけない決まり文句を整理する',
    order: 944,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'a と an の使い分けは、つづりではなく発音の最初の音で決める。',
      'an hour, an honest man は h を発音しないので an。',
      'a university, a uniform は「ユ」の音で始まるので a。',
      '二度目に出てくるもの、一つしかないものには the をつける。',
      'スポーツ名に the はつけず、楽器名には the をつける。',
    ],
    sections: [
      {
        heading: 'a と an は音で決める',
        body: `a と an の使い分けは「次の語が母音字（a, i, u, e, o）で始まるかどうか」ではなく、「母音の音で始まるかどうか」で決まる。

■ an を使う例
an apple / an orange / an egg / an umbrella / an old man / an interesting book
an hour（アワー：h を発音しない）
an honest boy（オネスト：h を発音しない）

■ a を使う例（母音字だが子音の音で始まる）
a university（ユニバーシティ：ユの音）
a uniform（ユニフォーム）
a useful book（ユースフル）
a European country（ユーロピアン）
a one-day trip（ワンデイ）

■ 形容詞がつくときは、形容詞の音で決める
an apple → a red apple（red はレの音）
a book → an interesting book（interesting はイの音）

★ ポイント：迷ったら声に出して読み、a の次に来る音が「ア・イ・ウ・エ・オ」なら an にする。hour は「アワー」と読むので an、university は「ユ」と読むので a になる。`,
      },
      {
        heading: 'the をつけるとき・つけないとき',
        body: `the は「どれのことか、話し手と聞き手の両方がわかっている」ときにつける。

■ the をつける場合
①二度目に出てくるもの
　I have a dog. The dog is very big.
②世界に一つしかないもの
　the sun / the moon / the earth / the sky
③あとから説明がついて特定されるもの
　the book on the desk / the girl I met yesterday
④最上級・序数のあと
　the highest mountain / the first day
⑤楽器
　play the piano / play the guitar

■ the をつけない場合
①スポーツ　play soccer / play tennis（play the soccer は誤り）
②教科・言語　study English / like math
③食事　have breakfast / have lunch
④交通手段の by　by bus / by train
⑤本来の目的で使う建物　go to school / go to bed
⑥固有名詞　Japan / Osaka / Mt. Fuji（ただし the Pacific Ocean のように例外もある）

■ 数えられない名詞と冠詞
water, milk, music, homework には a をつけない。
I have a homework.（誤）→ I have homework. / I have a lot of homework.

⚠ 注意：日本語には冠詞がないので、つけ忘れは意識しないと絶対に減らない。名詞を書いたら、そのたびに「一つか、複数か、数えられないか」を心の中で確かめる習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の誤りを一か所直しなさい。I waited for a hour at the station.',
        wrongAnswer: 'I waited for a hours at the station.',
        trapExplanation:
          '「一時間」を複数だと思って s をつけてしまった。本当の誤りは冠詞のほうで、hour の発音を意識していないことが原因である。',
        correctAnswer: 'I waited for an hour at the station.',
        correctExplanation:
          'hour は h を発音せず「アワー」と読むので、母音の音で始まる語として an を使う。同じく an honest man も h を発音しない。逆に a university は「ユ」と読むので a になる。つづりではなく音で決める。',
      },
      {
        question: '次の英文の誤りを一か所直しなさい。He plays the soccer every Sunday.',
        wrongAnswer: 'He play the soccer every Sunday.',
        trapExplanation:
          '動詞のほうを疑って s を取ってしまった。主語 He は三人称単数なので plays が正しく、誤っているのはスポーツ名についた the のほうである。',
        correctAnswer: 'He plays soccer every Sunday.',
        correctExplanation:
          'スポーツ名には冠詞をつけない。一方、楽器名には the をつけて play the piano, play the guitar とする。「スポーツは冠詞なし、楽器は the」と対にして覚えると、両方の誤りを同時に防げる。',
      },
    ],
  },

  {
    id: 'eigo_s445',
    subject: 'eigo',
    examType: 'chugaku',
    title: '誤文訂正③：時制のずれと前置詞の抜け',
    description: '時を表す語と動詞の形が合っているか、前置詞が過不足なく置かれているかを確かめる',
    order: 945,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '現在完了は yesterday, last year などの過去の一点を表す語と使えない。',
      'when や if で始まる文の中では、未来のことも現在形で表す。',
      'listen to, wait for, look for, arrive at は前置詞まで一組で覚える。',
      'home, here, there, abroad は副詞なので to をつけない。',
      '時を表す語の前の前置詞（at six / on Monday / in April）を使い分ける。',
    ],
    sections: [
      {
        heading: '時制のずれを見つける',
        body: `英文の中には、時制を決める手がかりになる語が必ずある。それと動詞の形が食いちがっていないかを確かめる。

■ 手がかりになる語
・yesterday, last week, ~ ago, then → 過去形
・now, right now, at present → 現在形か現在進行形
・tomorrow, next week, someday → will / be going to
・for ~ , since ~ , just, already, yet, ever, never → 現在完了

■ 現在完了と過去の一点は共存できない
現在完了は「過去のある時点から今まで」という幅を表す。だから yesterday や last year のような一点を指す語といっしょには使えない。
I have visited Kyoto last year.（誤）
→ I visited Kyoto last year.（過去形にする）
→ I have visited Kyoto three times.（回数なら現在完了でよい）

■ 時・条件を表す文の中では未来も現在形
if や when で始まる文の中は、未来のことでも will を使わない。
例）If it is sunny tomorrow, we will go to the park.（If it will be sunny ~ は誤り）
　　I will call you when I get home.

★ ポイント：文の中に時を表す語を見つけたら、まずそれに線を引く。そのうえで動詞の形が合っているかを確かめる、という順で見ると速い。`,
        figureId: 'lf_eigoext12_445',
      },
      {
        heading: '前置詞の抜けと余分',
        body: `動詞と前置詞は一組で覚える。日本語では助詞が一つなのに、英語では前置詞が要る場合と要らない場合がある。

■ 前置詞が必要な動詞（抜けやすい）
listen to ~（〜を聞く）　　I listened to the radio.
wait for ~（〜を待つ）　　I waited for the bus.
look for ~（〜をさがす）　I am looking for my key.
look at ~（〜を見る）　　 Look at that bird.
arrive at ~（〜に着く）　 We arrived at the station.
talk to / talk with ~（〜と話す）
be good at ~（〜が得意だ）

■ 前置詞が不要な語（つけすぎやすい）
home, here, there, abroad, downtown は副詞なので to をつけない。
I went to home.（誤）→ I went home.
Come to here.（誤）→ Come here.
また discuss や enter は日本語に「について」「に」があっても前置詞をとらない場合がある。

■ 時を表す前置詞
・at ＋ 時刻　at six, at noon
・on ＋ 曜日・日付　on Monday, on May 5
・in ＋ 月・季節・年　in April, in summer, in 2026
・yesterday, tomorrow, last night, next week には前置詞をつけない
　例）I met him last night.（in last night は誤り）

⚠ 注意：get to ~（〜に着く）は前置詞が要るが、get home は要らない。arrive も arrive at the station だが arrive home となる。home が特別だと覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の誤りを一か所直しなさい。I have visited Kyoto last year.',
        wrongAnswer: 'I have visited to Kyoto last year.',
        trapExplanation:
          'visit のあとに to が要ると思いこみ、そこを直してしまった。visit は前置詞をとらない動詞であり、本当の誤りは現在完了と last year がいっしょに使われていることである。',
        correctAnswer: 'I visited Kyoto last year.',
        correctExplanation:
          '現在完了は「過去から今まで」の幅を表すので、last year のような過去の一点を表す語とは使えない。last year を残すなら過去形の visited にする。現在完了を残すなら I have visited Kyoto three times. のようにする。',
      },
      {
        question: '次の英文の誤りを一か所直しなさい。I went to home at six yesterday.',
        wrongAnswer: 'I went to my home at six yesterday.',
        trapExplanation:
          '「to のあとに名詞が必要だ」と考えて my を足してしまった。home がこの文では名詞ではなく「家へ」という意味の副詞であることに気づいていない。',
        correctAnswer: 'I went home at six yesterday.',
        correctExplanation:
          'home, here, there, abroad は「〜へ」の意味をすでに含んだ副詞なので to をつけない。同じく get home, come home も前置詞なしで使う。一方 go to school, go to the park は名詞なので to が必要である。',
      },
    ],
  },

  // ───────────────── 8. リスニング（s446〜s447） ─────────────────
  {
    id: 'eigo_s446',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'リスニング①：先読みと設問の型',
    description: '放送が始まる前に選択肢を読み、何を聞き取るべきかを決めておく方法',
    order: 946,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '放送前に選択肢を読み、共通点と相違点に印をつける。',
      '選択肢が時刻なら時間、場所なら場所、人物なら人名を待ちかまえて聞く。',
      '会話では予定が途中で変わることが多い。最初に出た数字に飛びつかない。',
      '数量の問題は「かけ算・たし算をさせる」ことが多い。',
      '一問終わったらすぐ次の設問を先読みする。',
    ],
    sections: [
      {
        heading: '先読みでやること',
        body: `リスニングは、放送が始まってから考えていては間に合わない。放送前の数十秒でどれだけ準備できるかで得点が決まる。

■ 選択肢の共通点と相違点に印をつける
ア 3:00　イ 3:30　ウ 4:00　エ 4:30
→ すべて時刻なので「時刻を聞き取る問題」だとわかる。しかも三時台と四時台が並んでいるので、放送の中で「時刻が変更される」可能性が高い。

ア at the station　イ at the library　ウ at school　エ at the park
→ 場所を聞き取る問題。場所を表す語が出たら印をつける。

■ 設問文があるなら必ず先に読む
What time will they meet?（何時に会うか）
Where will they go first?（最初にどこへ行くか）
How many pens did she buy?（何本買ったか）
Why was Ken late?（なぜ遅れたか）
設問の疑問詞を見れば、聞き取るべき情報の種類が一つに決まる。

■ 聞きながらメモする
選択肢の横に、聞こえた数字や語をそのまま書く。頭の中だけで処理しようとしない。

★ ポイント：選択肢がすべて同じ種類（全部時刻、全部場所）なら、その情報だけを待ちかまえて聞けばよい。それ以外の部分は聞き取れなくてもかまわない。`,
      },
      {
        heading: '会話は「途中で変わる」',
        body: `リスニングの会話問題は、最初に出た情報がそのまま答えになることはほとんどない。必ずどこかで変更や修正が入る。

■ 予定が変わる型
Ａ：Let's meet at three.
Ｂ：Sorry, I have a piano lesson until three thirty. How about four?
Ａ：OK. See you then.
問）What time will they meet?
→ 答えは 4:00。最初に聞こえた three に飛びつくと誤る。

■ 変更の合図になる語
but / sorry / actually / How about ~ ? / Let's ~ instead / I changed my mind
これらが聞こえたら、その直後に本当の答えがある。

■ 計算させる型
Ａ：I bought two pens. Each pen was 150 yen.
問）How much did she pay?
→ 150 × 2 ＝ 300円。放送の中に 300 という数字は出てこない。

Ａ：The movie starts at two and it is two hours long.
問）What time will the movie end?
→ 4時。

⚠ 注意：数字が二つ以上聞こえたら、たし算・かけ算・引き算のどれかを求められている可能性を疑う。メモには数字だけでなく「2本」「1本150円」のように単位も書いておく。`,
      },
    ],
    trapExamples: [
      {
        question:
          `放送を聞いて答えなさい。Ａ：Let's meet at three. Ｂ：Sorry, I have a piano lesson until three thirty. How about four? Ａ：OK.　問：What time will they meet?`,
        wrongAnswer: '3時',
        trapExplanation:
          '最初に聞こえた at three をそのまま答えにしてしまった。会話の後半で予定が変更されていることを聞き逃している。放送の早い段階で答えが決まると思いこむのが原因。',
        correctAnswer: '4時',
        correctExplanation:
          'Sorry や How about ~ ? は予定変更の合図である。三時にはピアノのレッスンがあるので、Ｂが提案した four に決まり、Ａが OK と答えている。時刻を表す語が二つ以上出てきたら、最後に合意された時刻を答える。',
      },
      {
        question:
          '放送を聞いて答えなさい。Ａ：I bought two pens at the shop. Each pen was 150 yen.　問：How much did she pay?',
        wrongAnswer: '150円',
        trapExplanation:
          '放送の中に聞こえた数字 150 をそのまま答えにしてしまった。two pens という数を聞き取っていても、かけ算が必要だと気づいていない。',
        correctAnswer: '300円',
        correctExplanation:
          'each は「一つあたり」という意味なので、150円が一本の値段である。二本買っているので 150 × 2 ＝ 300円。数字が二つ聞こえたら計算を疑い、メモに「2本」「1本150円」と単位まで書いておくとまちがえない。',
      },
    ],
  },

  {
    id: 'eigo_s447',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'リスニング②：数字と固有名詞のメモ',
    description: '聞きまちがえやすい数字の聞き分けと、人名・地名を取りちがえないメモの取り方',
    order: 947,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'thirteen は後ろ、thirty は前にアクセントがある。',
      '14と40、15と50、16と60 も同じ形で聞き分ける。',
      'メモは英語で書かず、日本語と数字で速く書く。',
      '人名は頭文字（K, T）だけ書けば十分。',
      'だれが何をしたのかを取りちがえないよう、人名と情報を線で結ぶ。',
    ],
    sections: [
      {
        heading: '数字の聞き分け',
        body: `リスニングでもっとも失点しやすいのが数字である。とくに「十三と三十」型の聞き分けは、毎年どこかの学校で出る。

■ アクセントの位置で聞き分ける
・thirteen（サーティーン）… 後ろが強い　thir-TEEN
・thirty（サーティ）… 前が強い　THIR-ty
同じ関係が次の組にもある。
fourteen / forty　　fifteen / fifty　　sixteen / sixty
seventeen / seventy　　eighteen / eighty　　nineteen / ninety

■ 語尾の音でも見分けられる
-teen は最後まで「ティーン」と長くのばす。-ty は「ティ」と短く切れる。

■ 時刻の言い方
・seven thirty ＝ 7時30分
・seven fifteen ＝ 7時15分
・a quarter past seven ＝ 7時15分
・half past seven ＝ 7時30分
・ten to eight ＝ 8時10分前（7時50分）
・a quarter to eight ＝ 8時15分前（7時45分）

■ 値段・電話番号
・one thousand five hundred yen ＝ 1500円
・電話番号は一けたずつ読む（090-1234-5678 は zero nine zero, one two three four ~）

★ ポイント：放送で数字が聞こえたら、意味を考える前にまず数字だけをメモする。意味づけはあとでできる。`,
      },
      {
        heading: 'メモの取り方',
        body: `メモを英語で書こうとすると、書いている間に次の情報を聞き逃す。メモは自分だけがわかればよいので、日本語と数字と記号で書く。

■ メモの原則
①英語で書かない　　　　「サッカー」ではなく「サ」でもよい
②人名は頭文字だけ　　　Ken → K、Tom → T、Emily → E
③矢印と記号を使う　　　「K → 図書館」「T ×来ない」
④数字は必ず単位つき　　「150円/本」「2本」

■ だれが何をするのかを取りちがえない
Ａ：I'm going to Osaka this weekend. How about you?
Ｂ：I'm going to Okayama to see my grandmother.
メモ例）Ａ→大阪　Ｂ→岡山（祖母）
Osaka と Okayama は音が似ているうえ、二人の行き先が入れかわりやすい。話し手ごとに行を分けて書く。

■ 聞き取れなかったところは飛ばす
一語にこだわると、そのあと全部が聞こえなくなる。空欄のままにして先へ進む。

■ 二回放送されるとき
一回目は全体をつかみ、二回目でメモの空欄を埋める。一回目からすべて書き取ろうとしない。

⚠ 注意：メモは答えではない。放送が終わったら、メモを見ながら設問の疑問詞（What time / Where / How many）に合う情報を選んで答える。`,
      },
    ],
    trapExamples: [
      {
        question: '放送を聞いて答えなさい。The next bus leaves at seven thirty.　問：バスは何時に出発するか。',
        wrongAnswer: '7時13分',
        trapExplanation:
          'thirty と thirteen の音が似ているため、聞き分けられずに thirteen だと思ってしまった。数字は意味がわかった気になりやすく、確かめずに書いてしまう。',
        correctAnswer: '7時30分',
        correctExplanation:
          'thirty は前を強く読む（THIR-ty）、thirteen は後ろを強く読む（thir-TEEN）。また -teen はのばし、-ty は短く切れる。時刻として言うときは seven thirty ＝ 7時30分。7時13分なら seven thirteen になる。',
      },
      {
        question:
          `放送を聞いて答えなさい。Ａ：I'm going to Osaka this weekend. Ｂ：Really? I'm going to Okayama to see my grandmother.　問：Where will Ｂ go?`,
        wrongAnswer: '大阪',
        trapExplanation:
          'Osaka と Okayama は音が似ているうえ、最初に聞こえた地名の印象が強く残る。だれがどちらへ行くのかを分けてメモしていないため、二人の情報が混ざってしまう。',
        correctAnswer: '岡山',
        correctExplanation:
          '設問は Ｂ の行き先を聞いている。Ｂのせりふ I am going to Okayama ~ が答えの根拠になる。話し手ごとに行を分けて「Ａ→大阪／Ｂ→岡山（祖母に会う）」とメモすれば取りちがえない。',
      },
    ],
  },

  // ───────────────── 9. 総合実戦演習（s448〜s450） ─────────────────
  {
    id: 'eigo_s448',
    subject: 'eigo',
    examType: 'chugaku',
    title: '総合実戦演習①：英語選択入試（標準）',
    description: '語形変化・並べかえ・和文英訳・条件英作文を通しで解き、答案の作り方を確かめる',
    order: 948,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '語形変化の問題は、まず時制の手がかり語をさがす。',
      '並べかえは動詞→主語→目的語→修飾語の順で組む。',
      '和文英訳は知っている語だけで書く。難しい語は言いかえる。',
      '条件英作文は条件を指さして一つずつ確認してから書き始める。',
      '解き終えたら三単現・冠詞・複数形の三点だけを見直す。',
    ],
    sections: [
      {
        heading: '第1問・第2問（語形変化と並べかえ）',
        body: `■ 第1問　（　）内の語を正しい形に直しなさい。
(1) My sister （go） to school by bus every day.
(2) I （visit） my uncle in Tokyo last summer.
(3) Look! The children （play） in the park now.
(4) He is good at （swim）.
(5) Kyoto is one of the most beautiful （city） in Japan.

【解答】
(1) goes　… every day があるので現在形。主語 My sister は三人称単数なので es をつける。
(2) visited　… last summer があるので過去形。
(3) are playing　… Look! と now があるので現在進行形。主語 The children は複数なので are。
(4) swimming　… 前置詞 at のあとなので動名詞。m を重ねる。
(5) cities　… one of the ~ のあとは複数形。y を i に変えて es。

■ 第2問　［　］内の語を並べかえなさい。
(1)「私はきのう公園で野球をしました」
　［ baseball / in / played / the park / I / yesterday ］
(2)「彼がどこに住んでいるか知っていますか」
　［ know / where / do / you / lives / he ］
(3)「この箱は重すぎて私には運べません」
　［ heavy / this box / to / is / carry / too ］

【解答】
(1) I played baseball in the park yesterday.（場所→時の順）
(2) Do you know where he lives?（間接疑問なので肯定文の語順）
(3) This box is too heavy to carry.（too ～ to … の型）`,
      },
      {
        heading: '第3問・第4問（和文英訳と条件英作文）',
        body: `■ 第3問　次の日本語を英語にしなさい。
(1) 私の父は毎朝六時に起きます。
(2) その本は机の上にあります。
(3) あなたは何時に夕食を食べますか。
(4) きのうは雨だったので、私たちは家にいました。

【解答例】
(1) My father gets up at six every morning.
　　… 習慣なので現在形。三人称単数なので gets。at ＋ 時刻。
(2) The book is on the desk.
　　… the がついているので There is は使えない。名詞自身を主語にする。
(3) What time do you have dinner?
　　… What time ＋ do ＋ 主語 ＋ 原形。dinner に the はつけない。
(4) It was rainy yesterday, so we stayed home.
　　… 天気は it が主語。so で結果をつなぐ。home に to は不要。

■ 第4問　次の問いに、五語以上の英語で答えなさい。
What do you usually do on Sundays?

【解答例】
I usually play soccer with my friends in the park.
　… I(1) usually(2) play(3) soccer(4) with(5) my(6) friends(7) in(8) the(9) park(10) で10語。条件を満たす。

⚠ 注意：第4問で I play soccer.（3語）と書くと、内容は正しくても語数不足で0点になる。答えを書いたら必ず語を数え、条件を満たしているかを確かめてから次へ進む。`,
      },
    ],
    trapExamples: [
      {
        question: '第1問(5)　Kyoto is one of the most beautiful （city） in Japan. の（　）内を正しい形に直しなさい。',
        wrongAnswer: 'city',
        trapExplanation:
          '「京都は一つの都市だ」と考えて単数のままにしてしまった。one of ~ という型が「〜のうちの一つ」という意味であることを読み取れていない。',
        correctAnswer: 'cities',
        correctExplanation:
          'one of ＋ the ＋ 最上級 ＋ 複数名詞、で「もっとも〜な…のうちの一つ」を表す。複数あるものの中の一つを指すので、名詞は必ず複数形になる。city は子音＋y なので y を i に変えて cities とする。',
      },
      {
        question: '第3問(4)　「きのうは雨だったので、私たちは家にいました」を英語にしなさい。',
        wrongAnswer: 'Yesterday was rain, so we stayed at home.',
        trapExplanation:
          '「きのうは」を主語だと考えて Yesterday was ~ としてしまった。また rain という名詞をそのまま補語に置いている。stayed at home は誤りではないが、前半の誤りで大きく減点される。',
        correctAnswer: 'It was rainy yesterday, so we stayed home.',
        correctExplanation:
          '天気を表す文の主語は it にし、rain は形容詞の rainy に変える。yesterday は文の後ろに置く。stay home でも stay at home でもよいが、go home には to をつけない点と混同しないこと。',
      },
    ],
  },

  {
    id: 'eigo_s449',
    subject: 'eigo',
    examType: 'chugaku',
    title: '総合実戦演習②：帰国子女入試（記述中心）',
    description: 'まとまった量の英作文と読解記述が出る入試を想定し、書く量と正確さを両立させる',
    order: 949,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '六十語程度の英作文は「意見→理由①＋具体例→理由②＋具体例→まとめ」の五〜六文。',
      '読解の記述は本文の語をそのまま借りて答えると正確になる。',
      '設問が英語なら英語で、日本語なら日本語で答える。',
      '書き出しの語（First, Second, For example, However）で流れを見せる。',
      '時間の半分で書き上げ、残りで見直す配分にする。',
    ],
    sections: [
      {
        heading: '第1問　英作文（六十語程度）',
        body: `問）Some people say that students should study at home. Others say that students should study at the library. Which do you think is better? Write about 60 words.

【模範解答】
I think studying at the library is better than studying at home. First, the library is quiet, so I can concentrate on my homework. At home, my little brother often talks to me, and I cannot finish my work. Second, there are many books in the library. When I do not understand something, I can look for the answer right away. For these reasons, I like studying at the library.

（約70語。文の数＝6文）

【組み立て】
①意見　I think studying at the library is better ~ .
②理由①　First, the library is quiet, so ~ .
③理由①の具体例　At home, my little brother often talks to me ~ .
④理由②　Second, there are many books in the library.
⑤理由②の具体例　When I do not understand something, ~ .
⑥まとめ　For these reasons, ~ .

★ ポイント：六十語は四文では足りない。理由それぞれに具体例を一文ずつ足して六文にすると、ちょうどよい長さになる。`,
      },
      {
        heading: '第2問　読解と記述',
        body: `【本文】
Ken is a junior high school student. Last summer, he went to Australia and stayed with the Smith family for two weeks. At first, he could not speak English well, and he was very nervous. But Mr. Smith always spoke to him slowly and helped him. After a few days, Ken began to enjoy talking with the family. When he came back to Japan, he decided to study English harder.

【設問と解答】
(1) How long did Ken stay in Australia?
　→ He stayed there for two weeks.
　… 本文の for two weeks をそのまま使う。答えの文は He で始める。

(2) Why was Ken nervous at first?
　→ Because he could not speak English well.
　… Why には Because で答える。本文の語をそのまま借りる。

(3) ケンが日本に帰ってから決めたことを、日本語で答えなさい。
　→ 英語をもっと一生けんめい勉強しようということ。
　… 設問が日本語なので日本語で答える。harder は「もっと一生けんめいに」。

(4) 本文の内容に合うものを一つ選びなさい。
　ア Ken went to Australia with his family.
　イ Mr. Smith spoke to Ken slowly.
　ウ Ken could speak English well from the beginning.
　→ イ　… 本文の Mr. Smith always spoke to him slowly and helped him. に対応する。アは家族と行ったとは書かれていない。ウは本文と反対。

⚠ 注意：英語で答える設問に日本語で答える、日本語で答える設問を英語で答える、という取りちがえは毎年多い。設問文の書かれている言語をまず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '第2問(1)　How long did Ken stay in Australia? に英語で答えなさい。',
        wrongAnswer: 'Last summer.',
        trapExplanation:
          'How long を「いつ」の意味だと取りちがえ、本文の Last summer をそのまま答えにしてしまった。How long は期間の長さをたずねる表現である。',
        correctAnswer: 'He stayed there for two weeks.',
        correctExplanation:
          'How long は期間、When は時期をたずねる。本文の for two weeks が答えの根拠になる。For two weeks. とだけ答えてもよいが、He stayed there for two weeks. と一文で書くほうが確実に得点できる。',
      },
      {
        question: '第2問(3)　ケンが日本に帰ってから決めたことを、日本語で答えなさい。',
        wrongAnswer: 'He decided to study English harder.',
        trapExplanation:
          '本文の英語をそのまま抜き出して答えてしまった。前後の設問が英語で答える形式だったため、設問文が日本語に変わったことに気づいていない。',
        correctAnswer: '英語をもっと一生けんめい勉強しようということ。',
        correctExplanation:
          '設問が日本語で書かれているときは日本語で答える。根拠は本文最終文の he decided to study English harder である。harder は hard の比較級で「もっと一生けんめいに」の意味になる。',
      },
    ],
  },

  {
    id: 'eigo_s450',
    subject: 'eigo',
    examType: 'chugaku',
    title: '総合実戦演習③：直前総まとめと時間配分',
    description: '入試当日の解く順序・時間配分・見直しの手順を決め、点を落とさない答案にする',
    order: 950,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'リスニングは自分で時間を調整できない。それ以外で配分を作る。',
      '解く順序は「語彙・文法→リスニング→読解→英作文」が基本。',
      '英作文には必ず十分、見直しには五分を残す。',
      'わからない問題は空欄にせず、必ず何か書く。',
      '見直しは三単現・冠詞・複数形・時制・つづりの五点だけ。',
    ],
    sections: [
      {
        heading: '当日の時間配分',
        body: `試験時間五十分の入試を想定した配分の目安を決めておく。当日その場で考えると必ず時間が足りなくなる。

■ 配分の目安
・リスニング　10分（放送の時間で決まる。調整できない）
・語彙・文法　 5分（短時間で確実に取る）
・読解　　　　20分
・英作文　　　10分
・見直し　　　 5分

■ 解く順序
①放送前に、語彙・文法の問題を一気に片づける（放送が始まったら中断する）
②リスニング
③読解
④英作文
⑤見直し

リスニングは開始直後に放送されることが多いので、その前の待ち時間に問題冊子全体をながめ、英作文にどんな問題が出ているかだけ確かめておく。頭の片すみで考えながら他の問題を解ける。

■ 時間が足りなくなったら
英作文を捨ててはいけない。配点が大きいので、一文でも書く。逆に読解の最後の一問は捨ててもよい。

★ ポイント：時計は問題を解き始める前に見る。「読解に入るのは何時何分か」を先に決めておくと、遅れに気づける。`,
        figureId: 'lf_eigoext12_450',
      },
      {
        heading: '最後の見直しリスト',
        body: `見直しは項目を決めて、機械的に通す。内容を考え直すと時間が足りなくなる。

■ 英作文の見直し五点
①三単現の s　　主語が he / she / it / 単数の人名で現在の話なら、動詞に s
②名詞の s　　　二つ以上なら s、一つなら a / an / the
③冠詞　　　　　by bike, play soccer, go to school には冠詞をつけない
④時制　　　　　yesterday があるのに現在形になっていないか
⑤つづり　　　　friend / because / beautiful / favorite / restaurant / school

■ 形式の見直し三点
・文の最初は大文字か
・文の終わりにピリオドがあるか（疑問文はクエスチョンマーク）
・語数指定を満たしているか

■ 空欄を作らない
選択問題は必ずどれかを選ぶ。記号問題で迷ったら、本文に出てきた語をそのまま含む選択肢は誤りであることが多い（言いかえてある選択肢が正解になりやすい）。
英作文は、短くてもよいので必ず一文書く。I like summer because I can swim. だけでも部分点がつく。

■ 前日と当日にやること
前日は新しい問題に手を出さず、これまで書いた英作文の型と、覚えた言い回しの引き出しを読み返す。当日の朝は、不規則動詞の変化表と、まちがえやすいつづりを見る。

⚠ 注意：見直しで英文をまるごと書き直すと、新しい誤りが生まれることが多い。直すのは明らかな誤りだけにとどめる。`,
      },
    ],
    trapExamples: [
      {
        question: '試験終了五分前になり、英作文がまだ書けていない。どうすべきか。',
        wrongAnswer: '時間が足りないので英作文は空欄のままにし、読解の残りの設問を解く。',
        trapExplanation:
          '解ける問題から片づけるという考え方は正しいが、英作文は配点が大きく、部分点もつきやすい。空欄では必ず0点になるという点を見落としている。',
        correctAnswer: '短くてもよいので、意見と理由を一つずつ、二文だけでも書く。',
        correctExplanation:
          '英作文は語数が足りなくても、正しい英文が書けていれば部分点がつくことが多い。I like summer. I can swim in the sea. のような二文でも0点にはならない。読解の一問より英作文の部分点のほうが大きい。',
      },
      {
        question:
          '見直しの時間に、自分の英作文 I have two brother and they plays soccer. を読み返した。どこを直すべきか。',
        wrongAnswer: 'I have two brothers and they plays soccer.（brother だけを直す）',
        trapExplanation:
          '名詞の複数形の誤りに気づいて満足し、そこで見直しをやめてしまった。一文に誤りが二つ以上あることを想定していない。',
        correctAnswer: 'I have two brothers, and they play soccer.',
        correctExplanation:
          '誤りは二か所ある。two のあとの名詞は複数形 brothers、主語 they は複数なので動詞に s はつけず play にする。見直しは「一か所直したら終わり」ではなく、五つの項目をすべて通す。',
      },
    ],
  },
];
