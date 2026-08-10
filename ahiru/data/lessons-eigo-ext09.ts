import type { Lesson } from './lesson-types';

// 中学受験 英語「不定詞・動名詞・分詞・関係詞・受動態」拡張ユニット（45セッション：eigo_s296〜eigo_s340）
// order は 796〜840。
// 構成：不定詞 名詞的用法(4)／形容詞的用法(4)／副詞的用法(4)／疑問詞＋不定詞(3)／
//       It is ... to 〜・too 〜 to・enough to(5)／動名詞の用法(4)／不定詞だけ・動名詞だけを目的語にとる動詞(4)／
//       現在分詞・過去分詞の形容詞用法(4)／関係代名詞 who・which・that(5)／関係代名詞の省略・関係副詞(4)／
//       受動態の基本(2)／受動態の時制・疑問文・否定文・by以外の前置詞(2)
// 想定レベルは英検4〜3級中心、上位校の英語選択入試・帰国子女入試で準2級相当まで。
// 図解は「語順」「修飾の向き」「分類」「度合いの境目」など、図にして本当に理解が進む箇所だけに付けてある
//（lesson-figs-eigo-ext09.ts、45課中21課）。
export const eigoExt09Lessons: Lesson[] = [
  // ───────────────────── 1. 不定詞 名詞的用法（s296〜s299） ─────────────────────
  {
    id: 'eigo_s296',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不定詞①：to＋動詞の原形と三つのはたらき',
    description: '不定詞の形をつかみ、名詞的・形容詞的・副詞的の三用法があることを知る',
    order: 796,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '不定詞＝to＋動詞の原形。主語が三人称単数でも、文が過去形でも、to のあとは必ず原形。',
      '三つの用法：名詞的用法（〜すること）・形容詞的用法（〜するための）・副詞的用法（〜するために など）。',
      '用法の見分けは日本語訳ではなく「文の中でどのはたらきをしているか」で決める。',
      '前置詞の to（to school）とは別物。前置詞の to のあとは名詞、不定詞の to のあとは動詞の原形。',
      '不定詞の否定は not to＋動詞の原形。to not とは書かない。',
    ],
    sections: [
      {
        heading: '不定詞の形は一つだけ',
        body: `不定詞は「to ＋ 動詞の原形」という、たった一つの形しかない。まわりがどんな形でも、to のあとの動詞は絶対に変化しない。

例）I want to play soccer.（わたしはサッカーをしたい）
例）She wants to play soccer.（彼女はサッカーをしたい）
例）He wanted to play soccer.（彼はサッカーをしたかった）

■ 三人称単数の s は付けない
二番目の文で s が付いているのは wants だけである。to play を to plays にしてはいけない。s を付けるかどうかを決めるのは「文の主語と結びついた動詞」だけであり、to のあとの動詞は主語と直接結びついていないからである。

■ 過去形にもしない
三番目の文で過去にしているのも wanted だけで、to play はそのままである。「したかった」の「したい」の部分だけが過去になり、「サッカーをする」という中身は形を変えない。

■ 否定は not を to の前に置く
例）I decided not to go to the party.（わたしはパーティーに行かないことに決めた）
「行かないこと」とひとかたまりで否定するので、not は to のすぐ前に置く。

★ ポイント：不定詞が出てきたら、まず「to ＋ 原形」の二語をひとかたまりの箱として囲む。この箱は文の中で名詞・形容詞・副詞のどれかのはたらきをする。`,
      },
      {
        heading: '三つの用法の見取り図',
        body: `同じ「to ＋ 原形」でも、文の中での役目によって三つに分けられる。

■ ①名詞的用法（〜すること）
名詞と同じはたらきをして、主語・目的語・補語になる。
例）I like to read books.（読むことが好きだ）… like の目的語
例）To swim is fun.（泳ぐことは楽しい）… 主語

■ ②形容詞的用法（〜するための・〜すべき）
すぐ前の名詞を、後ろから説明する。
例）I have a lot of homework to do.（するべき宿題がたくさんある）… homework を説明

■ ③副詞的用法（〜するために・〜して）
動詞や形容詞に説明を付け加える。目的や感情の原因を表す。
例）I went to the park to play soccer.（サッカーをするために公園へ行った）
例）I am happy to see you.（あなたに会えてうれしい）

■ 見分けの手順
まず不定詞の直前を見る。直前が名詞なら形容詞的用法の可能性が高い。動詞の直後で「〜することを」と入るなら名詞的用法。文全体から取りのぞいても文が成り立つなら副詞的用法である。

⚠ 注意：日本語訳だけで決めようとすると失敗する。「〜するために」と訳せても、その部分を消して文が成り立たないなら名詞的用法である。`,
        figureId: 'lf_eigoext09_296',
      },
    ],
    trapExamples: [
      {
        question: '（　）に become を適する形にして入れなさい。She wants (　) a doctor.',
        wrongAnswer: 'to becomes',
        trapExplanation:
          '主語 She が三人称単数なので、文中の動詞にはすべて s を付けなければいけないと思いこみ、to のあとの動詞にまで s を付けてしまう。',
        correctAnswer: 'to become',
        correctExplanation:
          's が付くのは主語と直接結びついた動詞だけである。この文では wants にすでに s が付いており、to のあとは必ず原形なので to become が正しい。「She wanted to become a doctor.」のように過去の文でも to become は変わらない。',
      },
      {
        question: '誤りを直しなさい。I decided not go to the party.',
        wrongAnswer: 'I don\'t decided to go to the party.',
        trapExplanation:
          '「行かないことに決めた」という日本語につられて、否定は文全体の動詞に付けるものだと考え、don\'t を decided の前に出してしまう。それでは「決めなかった」という別の意味になる。',
        correctAnswer: 'I decided not to go to the party.',
        correctExplanation:
          '否定したいのは「決めた」ではなく「行くこと」の方である。不定詞の内容だけを否定するときは not を to のすぐ前に置いて not to go とする。「決めなかった」なら I didn\'t decide to go to the party. となり、意味がまったく変わる。',
      },
    ],
  },

  {
    id: 'eigo_s297',
    subject: 'eigo',
    examType: 'chugaku',
    title: '名詞的用法①：want to 〜／like to 〜（〜することを）',
    description: '動詞の目的語になる不定詞をつかみ、want to・like to の語順を身につける',
    order: 797,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '名詞的用法の不定詞は「〜すること」と訳し、名詞と同じ位置に入る。',
      'want to 〜＝〜したい／like to 〜＝〜するのが好き／need to 〜＝〜する必要がある。',
      '語順は「主語＋動詞＋to＋動詞の原形＋（その他）」。動詞が二つ続いて見えるのが特徴。',
      'want のあとに名詞を置けば「〜がほしい」、to＋原形を置けば「〜したい」。',
      '疑問文・否定文は前の動詞だけを変える（Do you want to 〜? / I don\'t want to 〜.）。',
    ],
    sections: [
      {
        heading: '「〜したい」「〜するのが好き」の作り方',
        body: `動詞のすぐ後ろに置かれた不定詞は、その動詞の目的語になる。日本語では「〜することを」「〜するのが」と訳す。

例）I want to drink water.（わたしは水を飲みたい）
例）She likes to sing songs.（彼女は歌を歌うのが好きだ）
例）We need to leave now.（わたしたちは今出発する必要がある）

■ want の二つの使い方
名詞を置く場合　　例）I want a new bike.（新しい自転車がほしい）
不定詞を置く場合　例）I want to buy a new bike.（新しい自転車を買いたい）
「ほしい」のか「したい」のかで、後ろに置くものが変わる。

■ 動詞が二つ並んで見える
want to drink のように、動詞が二つ続いているように見えるのが名詞的用法の目印である。英語では動詞を二つそのまま並べることはできないので、あいだに to を入れて「二つ目は動詞ではなく名詞のかたまりですよ」と示している。

■ 疑問文・否定文
例）Do you want to go to the zoo?（動物園に行きたいですか）
例）I don\'t want to go there.（そこには行きたくない）
形を変えるのは前の動詞（want）だけで、to go は最後まで原形のままである。

★ ポイント：「したい」＝want to、「する必要がある」＝need to、「〜しようとする」＝try to は、そのまま二語セットで覚えてしまうとよい。`,
        figureId: 'lf_eigoext09_297',
      },
      {
        heading: 'would like to 〜 とていねいな言い方',
        body: `want to 〜 はまっすぐな言い方なので、ていねいに言いたいときは would like to 〜 を使う。

例）I would like to have a cup of tea.（紅茶を一杯いただきたいのですが）
例）Would you like to come with us?（わたしたちといっしょに来ませんか）

短縮形は I\'d like to 〜 となる。中学受験の英語入試でも、ていねいな会話文の中でよく出る。

■ 「〜がほしい」のていねい形
例）I would like some water.（お水をいただきたいのですが）
このように would like のあとに名詞を置くこともでき、その場合は「〜がほしい」の意味になる。

■ Would you like 〜? は勧める表現
例）Would you like some cake?（ケーキはいかがですか）
食べ物をすすめるときの決まり文句で、答え方は Yes, please.（はい、お願いします）／ No, thank you.（いいえ、けっこうです）である。

⚠ 注意：would like のあとの動詞は必ず to を付ける。would like go とはできない。また Would you like to 〜? は「〜しませんか」という誘いなので、Do you want to 〜? よりていねいだと覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「わたしは水を飲みたい」',
        wrongAnswer: 'I want drink water.',
        trapExplanation:
          '「飲みたい」を want と drink の二語で表そうとして、動詞を二つそのまま並べてしまう。日本語では「飲み＋たい」とくっつくので、英語でも直接つながると思いこみやすい。',
        correctAnswer: 'I want to drink water.',
        correctExplanation:
          '英語では動詞を二つ続けて置けない。二つ目の動詞は to を付けて名詞のかたまり（不定詞）にしてから、want の目的語として置く。「I want water.（水がほしい）」と「I want to drink water.（水を飲みたい）」のちがいを声に出して確かめるとよい。',
      },
      {
        question: '（　）に適する語を入れなさい。My sister likes (　) (　) pictures.（絵をかくのが好きだ）',
        wrongAnswer: 'likes to draws',
        trapExplanation:
          '主語 My sister が三人称単数だと意識しすぎて、to のあとの draw にまで s を付けてしまう。likes の s に引っぱられる典型的なまちがいである。',
        correctAnswer: 'to draw',
        correctExplanation:
          '三単現の s は主語と直接結びついた動詞（likes）だけに付ける。to のあとは何があっても原形なので to draw。過去の文 My sister liked to draw pictures. でも to draw は変わらない。',
      },
    ],
  },

  {
    id: 'eigo_s298',
    subject: 'eigo',
    examType: 'chugaku',
    title: '名詞的用法②：目的語になる不定詞（hope・decide・try・begin）',
    description: 'want・like 以外の、目的語に不定詞をとる重要動詞をまとめて覚える',
    order: 798,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'hope to 〜（〜したいと望む）／decide to 〜（〜することに決める）／try to 〜（〜しようとする）。',
      'begin to 〜・start to 〜（〜し始める）／learn to 〜（〜できるようになる）。',
      'promise to 〜（〜すると約束する）／plan to 〜（〜する計画だ）も入試頻出。',
      'hope to のあとは自分がすること。相手がすることを望むときは hope (that) 節を使う。',
      '「〜しようとしたが、できなかった」は tried to 〜 で表せる。',
    ],
    sections: [
      {
        heading: '目的語に不定詞をとる代表的な動詞',
        body: `「これから〜する」という中身を目的語にとる動詞は、不定詞と相性がよい。次の動詞はそのまま二語セットで覚える。

例）I hope to see you again.（またあなたに会えることを願っています）
例）We decided to go camping.（わたしたちはキャンプに行くことに決めた）
例）He tried to open the door.（彼はドアを開けようとした）
例）It began to rain.（雨が降り始めた）
例）She learned to ride a bike.（彼女は自転車に乗れるようになった）
例）I promised to help my mother.（母を手伝うと約束した）
例）They plan to visit Kyoto.（彼らは京都を訪れる計画だ）

■ 共通するイメージ
どれも「まだ実現していないこれからのこと」を目的語にしている。望む・決める・試す・始める・約束する・計画する——いずれも行動より前の段階を表す動詞である。この「未来向き」の感じが、不定詞をとる動詞の共通点である。

★ ポイント：begin と start は不定詞でも動名詞でも目的語にできる（It began to rain. ＝ It began raining.）。しかし hope・decide・promise・plan は不定詞しか目的語にできない。この区別はあとの単元で詳しく学ぶ。`,
      },
      {
        heading: 'hope to と hope that のちがい',
        body: `hope は「〜であればいいなと願う」という動詞で、後ろの形によって願う中身が変わる。

■ hope to ＋ 原形（自分がすること）
例）I hope to become a teacher.（先生になりたいと思っている）
不定詞のあとに主語を書けないので、「〜するのは文の主語（I）自身」に限られる。

■ hope (that) ＋ 主語＋動詞（相手や他の人のこと）
例）I hope (that) you will get well soon.（あなたが早くよくなることを願っています）
別の人がすることを願うときは、that のあとにその人を主語として書く。that は省略できる。

■ try to と try 〜ing のちがい
例）I tried to call him.（彼に電話しようとした＝実際にはできなかったことが多い）
例）I tried calling him.（ためしに電話してみた＝実際にかけた）
try to は「しようと努力する」、try 〜ing は「ためしにやってみる」である。

⚠ 注意：I hope you to come. は誤り。hope は「人＋to〜」の形をとらない。I want you to come.（あなたに来てほしい）の want とは形がちがうので混同しないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「わたしはあなたが試合に勝つことを願っています」',
        wrongAnswer: 'I hope you to win the game.',
        trapExplanation:
          'want you to 〜（あなたに〜してほしい）の形を覚えていると、hope も同じように「hope ＋ 人 ＋ to 〜」と書けると思いこんでしまう。',
        correctAnswer: 'I hope (that) you will win the game.',
        correctExplanation:
          'hope は「人＋to〜」の形をとらない動詞である。自分以外の人について願うときは hope のあとに「主語＋動詞」の文をそのまま続ける。自分のことなら I hope to win the game.（勝ちたいと思っている）と不定詞で言える。',
      },
      {
        question: '（　）に適するものを選びなさい。It began (　) hard.（激しく降り始めた）　ア to rain　イ to rained　ウ rain',
        wrongAnswer: 'ウ rain',
        trapExplanation:
          'began がすでに動詞なので、後ろは原形をそのまま置けばよいと考えてしまう。助動詞のあとが原形になる（can rain）ルールと混同するのが原因である。',
        correctAnswer: 'ア to rain',
        correctExplanation:
          'began は助動詞ではなく一般動詞なので、後ろに動詞をそのまま置くことはできない。目的語として置くには to を付けて不定詞にする。イ to rained は to のあとが原形になっていないので誤り。なお It began raining hard. も正しい言い方である。',
      },
    ],
  },

  {
    id: 'eigo_s299',
    subject: 'eigo',
    examType: 'chugaku',
    title: '名詞的用法③：主語・補語になる不定詞',
    description: 'To 〜 is ... の主語用法と、My dream is to 〜 の補語用法をおさえる',
    order: 799,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '不定詞は主語にもなる。To play tennis is fun.（テニスをすることは楽しい）',
      '主語が不定詞のとき、動詞は is（三人称単数扱い）を使う。',
      'be動詞のあとに置くと補語になる。My dream is to be a vet.（わたしの夢は獣医になることだ）',
      '主語の不定詞は重いので、ふつうは It is fun to play tennis. と It で言いかえる。',
      '名詞的用法は「主語・目的語・補語」の三か所に入る、と場所で覚える。',
    ],
    sections: [
      {
        heading: '主語になる不定詞・補語になる不定詞',
        body: `不定詞は名詞と同じはたらきをするので、名詞が入る場所ならどこにでも入る。

■ 主語になる（文の先頭）
例）To play tennis is fun.（テニスをすることは楽しい）
例）To get up early is good for your health.（早く起きることは健康によい）
主語は「〜すること」という一つのまとまりなので、動詞は is を使う。To play tennis are fun. とはしない。

■ 補語になる（be動詞のあと）
例）My dream is to be a vet.（わたしの夢は獣医になることだ）
例）Her job is to teach English.（彼女の仕事は英語を教えることだ）
「主語＝不定詞の内容」という形で、イコールの関係になっている。

■ 目的語になる（動詞のあと）
例）I like to play tennis.（テニスをするのが好きだ）

このように名詞的用法は主語・補語・目的語の三か所に現れる。どの位置にあるかを確かめれば、日本語訳に頼らなくても名詞的用法だと判断できる。

★ ポイント：不定詞を取りのぞくと文が成り立たなくなる（To play tennis is fun. から To play tennis を消すと is fun だけになる）なら、それは名詞的用法である。`,
        figureId: 'lf_eigoext09_299',
      },
      {
        heading: '主語の不定詞は It で言いかえるのがふつう',
        body: `英語では「長くて重いものは後ろへ回す」という習慣がある。そのため主語が不定詞のときは、形だけの主語 It を先頭に置き、本当の主語である不定詞を後ろへ送るのがふつうである。

例）To play tennis is fun.
　→ It is fun to play tennis.（テニスをすることは楽しい）
例）To speak English is not easy.
　→ It is not easy to speak English.（英語を話すことは簡単ではない）

この It には「それ」という意味はなく、訳さない。くわしくは It is ... to 〜 の単元で学ぶ。

■ 補語の不定詞は言いかえない
例）My dream is to travel around the world.（わたしの夢は世界中を旅することだ）
補語の位置はもともと文の後ろなので、そのままでよい。

■ 主語が不定詞のときの動詞
例）To read books is important.（○）
例）To read books are important.（×）
不定詞のかたまりは、どんなに長くても一つのものとして扱うので、動詞は is・was など単数の形にする。

⚠ 注意：To play tennis is fun. は文法的に正しいが、実際の英文では It is fun to play tennis. の方がずっとよく使われる。英作文ではどちらも正解になるが、書きかえ問題では必ず It の形を求められる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。To collect stamps (　) my hobby.（切手を集めることがわたしの趣味です）',
        wrongAnswer: 'are',
        trapExplanation:
          'stamps が複数形なので、すぐ前の名詞に引っぱられて are を選んでしまう。主語は stamps ではなく「To collect stamps（切手を集めること）」全体である。',
        correctAnswer: 'is',
        correctExplanation:
          '主語は「To collect stamps」というひとかたまりの内容で、これは一つのことがらなので単数扱いになる。したがって is が正しい。同じ理由で To read books is important.（○）／are（×）となる。',
      },
      {
        question: '次の文の不定詞は何用法か。My dream is to visit Australia.',
        wrongAnswer: '副詞的用法（〜するために）',
        trapExplanation:
          '「オーストラリアを訪れるために」と訳してしまうと副詞的用法に見える。しかしそう訳すと「わたしの夢はオーストラリアを訪れるためにある」となり、日本語として意味が通らない。',
        correctAnswer: '名詞的用法（〜すること）',
        correctExplanation:
          'be動詞 is のあとに置かれて「わたしの夢＝オーストラリアを訪れること」というイコールの関係を作っているので、補語になる名詞的用法である。to visit Australia を消すと My dream is. となって文が成り立たない点も、名詞的用法である証拠になる。',
      },
    ],
  },

  // ───────────────────── 2. 不定詞 形容詞的用法（s300〜s303） ─────────────────────
  {
    id: 'eigo_s300',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞的用法①：something to drink（-thing の後ろ）',
    description: 'something・anything などを後ろから説明する不定詞の語順を身につける',
    order: 800,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '形容詞的用法の不定詞は、すぐ前の名詞を後ろから説明して「〜するための・〜すべき」を表す。',
      'something to drink（何か飲み物）／something to eat（何か食べ物）が代表例。',
      '-thing で終わる語は形容詞も後ろに置く。something cold（何か冷たいもの）。',
      '語順は「something ＋ 形容詞 ＋ to ＋ 原形」。something cold to drink。',
      '疑問文・否定文では anything を使う。Do you have anything to eat?',
    ],
    sections: [
      {
        heading: '名詞を後ろから説明する不定詞',
        body: `形容詞的用法の不定詞は、直前の名詞にくっついて「どんな名詞か」を説明する。日本語では「〜するための」「〜すべき」と訳す。

例）I want something to drink.（何か飲むもの＝飲み物がほしい）
例）Give me something to eat.（何か食べるものをください）
例）I have a lot of homework to do.（するべき宿題がたくさんある）

■ 訳し上げるのがコツ
英語は「something ← to drink」と後ろから前へかかる。日本語にするときは後ろから先に訳して「飲むための → もの」とすると自然になる。

■ -thing で終わる語は形容詞も後ろ
ふつうの名詞は cold water のように形容詞が前に付くが、something・anything・nothing・everything は形容詞を後ろに置く。
例）something cold（何か冷たいもの）
例）something interesting（何かおもしろいこと）

■ 形容詞と不定詞の両方を付ける語順
例）I want something cold to drink.（何か冷たい飲み物がほしい）
形容詞が先、不定詞が後ろ、という順番は絶対に入れかわらない。

★ ポイント：「何か冷たい飲み物」＝ something（もの）＋ cold（冷たい）＋ to drink（飲むための）と、日本語とは逆の順に並べる。`,
        figureId: 'lf_eigoext09_300',
      },
      {
        heading: 'something・anything・nothing の使い分け',
        body: `-thing の語は、文の種類によって使い分ける。

■ 肯定文は something
例）I have something to tell you.（あなたに話すことがある）

■ 疑問文・否定文は anything
例）Do you have anything to eat?（何か食べるものはありますか）
例）I don\'t have anything to do today.（今日はすることが何もない）

■ nothing は一語で否定を表す
例）I have nothing to do today.（今日はすることが何もない）
上の don\'t have anything と同じ意味である。nothing を使うときは don\'t を付けない。

■ 人にすすめる疑問文では something
例）Would you like something to drink?（何かお飲み物はいかがですか）
「どうぞ」と相手にすすめる気持ちがあるときは、疑問文でも something を使う。レストランの会話文でよく出る。

⚠ 注意：I don\'t have nothing to do. のように否定を二つ重ねてはいけない。英語では否定は文に一つだけである。「何もない」は don\'t 〜 anything か nothing のどちらか一方で表す。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「何か冷たい飲み物がほしい」',
        wrongAnswer: 'I want cold something to drink.',
        trapExplanation:
          '日本語の「冷たい飲み物」や cold water の語順につられて、形容詞を something の前に置いてしまう。ふつうの名詞では正しい語順なので、よけいにまちがえやすい。',
        correctAnswer: 'I want something cold to drink.',
        correctExplanation:
          'something・anything・nothing・everything は、形容詞を必ず後ろに置く特別な語である。そのあとに不定詞が続くので、「something ＋ 形容詞 ＋ to ＋ 原形」の順になる。something hot to eat（何か温かい食べ物）も同じ形である。',
      },
      {
        question: '（　）に適する語を入れなさい。I don\'t have (　) to do today.（今日はすることが何もない）',
        wrongAnswer: 'nothing',
        trapExplanation:
          '日本語の「何もない」につられて nothing を選んでしまう。しかし文にはすでに don\'t があるので、否定が二重になってしまう。',
        correctAnswer: 'anything',
        correctExplanation:
          '英語では一つの文に否定は一つだけである。don\'t がある文では anything を使い、I don\'t have anything to do today. とする。don\'t を使わずに I have nothing to do today. と書けば、これも同じ意味で正しい。',
      },
    ],
  },

  {
    id: 'eigo_s301',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞的用法②：a lot of homework to do（名詞を後ろから）',
    description: 'ふつうの名詞に不定詞が後ろから付く形を、代表例とともに練習する',
    order: 801,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '「〜するための○○」「〜すべき○○」は、名詞のすぐ後ろに不定詞を置く。',
      'a lot of homework to do（するべき宿題）／many books to read（読むべき本）。',
      'time to 〜（〜する時間）／a chance to 〜（〜する機会）／a way to 〜（〜する方法）。',
      '日本語とは逆に「名詞 → 不定詞」の順。不定詞が名詞の前に出ることはない。',
      'the first / the last / the only が付く名詞にも不定詞が後ろから付く。',
    ],
    sections: [
      {
        heading: '名詞のすぐ後ろに置く',
        body: `-thing の語だけでなく、ふつうの名詞にも不定詞は後ろから付く。

例）I have a lot of homework to do.（するべき宿題がたくさんある）
例）She has many books to read.（彼女には読むべき本がたくさんある）
例）I have no time to watch TV.（テレビを見る時間がない）
例）This is a good chance to practice English.（これは英語を練習するよい機会だ）
例）Do you know a way to solve this problem?（この問題を解く方法を知っていますか）

■ 位置を絶対にまちがえない
不定詞は説明したい名詞の「すぐ後ろ」に置く。to do a lot of homework のように前に出すと、「宿題をたくさんすること」という別の意味（名詞的用法）になってしまう。
例）I have a lot of homework to do.（するべき宿題がたくさんある）
例）I want to do a lot of homework.（宿題をたくさんしたい）
語順が変わると用法も意味も変わる。

■ よく使う組み合わせ
time to go（行く時間）／something to say（言うべきこと）／a place to stay（泊まる場所）／money to buy it（それを買うためのお金）

★ ポイント：「〜すべき○○」と日本語で言えるときは、必ず「○○ ＋ to ＋ 原形」の順に並べる。`,
      },
      {
        heading: 'the first・the only と組み合わせる形',
        body: `順番や唯一性を表す語が付いた名詞にも、不定詞が後ろから付く。上位校の入試や英検3級以上でよく出る形である。

例）He was the first person to arrive.（彼は最初に到着した人だった）
例）She was the last one to leave the room.（彼女は最後に部屋を出た人だった）
例）Tom is the only student to know the answer.（トムはその答えを知っている唯一の生徒だ）

■ 訳し方
「the first ＋ 名詞 ＋ to 〜」は「最初に〜した○○」と訳す。「〜するための」とすると不自然になるので、順番の語といっしょのときは「最初に〜した」「最後に〜した」と覚えてしまうとよい。

■ 名詞的用法との見分け
例）I want to be the first to arrive.（最初に着く人になりたい）
この文には to be（名詞的用法）と to arrive（形容詞的用法）が両方入っている。to be は want の目的語、to arrive は the first を説明している。位置を見れば区別できる。

⚠ 注意：the first to arrive は「最初に到着した」であり、「最初に到着するつもり」ではない。文全体の時制（was／is）で、いつのことかが決まる。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「わたしには読むべき本が何冊かある」',
        wrongAnswer: 'I have to read some books.',
        trapExplanation:
          '「読むべき」という日本語から have to（〜しなければならない）を連想して、have と to を続けて書いてしまう。その結果「本を読まなければならない」という別の文になる。',
        correctAnswer: 'I have some books to read.',
        correctExplanation:
          '説明したい名詞（some books）を先に置き、そのすぐ後ろに to read を付ける。have to は「主語＋have to＋原形」で助動詞のはたらきをするが、この文の have は「持っている」という本来の意味である。名詞をあいだにはさむかどうかで、意味がまったく変わる。',
      },
      {
        question: '次の文の不定詞は何用法か。She had no time to eat lunch.',
        wrongAnswer: '副詞的用法（昼食を食べるために）',
        trapExplanation:
          '「昼食を食べるために」と訳せてしまうため、目的を表す副詞的用法だと判断してしまう。しかしそれでは「食べるために時間がなかった」となり意味が通らない。',
        correctAnswer: '形容詞的用法（昼食を食べる時間）',
        correctExplanation:
          'to eat lunch は直前の名詞 time を説明していて、「昼食を食べる（ための）時間」というかたまりを作っている。判断のこつは、不定詞の直前が名詞かどうかを見ること。名詞の直後にあり、その名詞の内容を説明していれば形容詞的用法である。',
      },
    ],
  },

  {
    id: 'eigo_s302',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞的用法③：修飾は前からか後ろからか',
    description: '名詞を説明する語の位置の原則（一語は前・二語以上は後ろ）を理解する',
    order: 802,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '一語の形容詞は名詞の前から修飾する（a big house）。',
      '二語以上のかたまり（不定詞・分詞句・関係詞節）は名詞の後ろから修飾する。',
      'この原則は不定詞・分詞・関係代名詞のすべてに共通する、英語の大原則である。',
      '-thing の語だけは例外で、一語の形容詞も後ろに置く（something cold）。',
      '後ろから説明された名詞は、日本語では後ろから前へ訳し上げる。',
    ],
    sections: [
      {
        heading: '英語の修飾の大原則',
        body: `名詞を説明する語は、長さによって置く場所が決まっている。この原則を知っておくと、これから学ぶ分詞・関係代名詞まで一気に見通せるようになる。

■ 一語なら名詞の前
例）a big house（大きな家）
例）an interesting book（おもしろい本）
例）a sleeping baby（眠っている赤ちゃん）

■ 二語以上のかたまりなら名詞の後ろ
例）a house to live in（住むための家）… 不定詞
例）the baby sleeping in the bed（ベッドで眠っている赤ちゃん）… 分詞句
例）the book which I read yesterday（わたしが昨日読んだ本）… 関係詞節

同じ「眠っている赤ちゃん」でも、sleeping 一語なら前、sleeping in the bed という二語以上のかたまりなら後ろになる。

■ 日本語との決定的なちがい
日本語は「わたしが昨日読んだ本」のように、どんなに長い説明でも必ず名詞の前に置く。英語は逆に、長い説明はすべて名詞の後ろに置く。この向きのちがいが、英語の長文読解でつまずく最大の原因である。

★ ポイント：名詞が出てきたら、その直後まで目を走らせる。to＋原形・〜ing・過去分詞・who/which/that があれば、そこから後ろは全部その名詞の説明である。`,
        figureId: 'lf_eigoext09_302',
      },
      {
        heading: '訳し上げの練習',
        body: `後ろから説明された名詞は、日本語にするとき順番をひっくり返す。

例）This is the best way to learn English.
　　→ これは英語を学ぶための最もよい方法だ。
例）I need a friend to talk with.
　　→ わたしには話し相手が必要だ。
例）She has a lot of work to finish today.
　　→ 彼女には今日終わらせるべき仕事がたくさんある。

■ かたまりの切れ目を見つける
長い文では、どこまでが名詞の説明かを見きわめる必要がある。
例）The boy standing by the door is my brother.
この文では The boy standing by the door までが主語である。動詞 is が出てきたところで説明部分が終わる、と判断する。

■ 主語が長くなる文に慣れる
例）The students who study hard get good results.
主語は The students who study hard（一生けんめい勉強する生徒たち）で、動詞は get である。名詞のあとに who/which/that が来たら、そこから動詞が二つ目に出てくるまでが説明のかたまりだと考えるとよい。

⚠ 注意：「後ろから説明する」形に慣れていないと、the book to read を「本を読む」のように前から順に読んでしまい、文の意味を取りちがえる。名詞と説明のかたまりは必ずセットで囲むくせをつける。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「わたしは何か温かい食べ物がほしい」　want / I / to / hot / eat / something',
        wrongAnswer: 'I want hot something to eat.',
        trapExplanation:
          '「一語の形容詞は名詞の前」という原則を覚えたばかりだと、それを something にも当てはめて hot を前に置いてしまう。',
        correctAnswer: 'I want something hot to eat.',
        correctExplanation:
          '-thing で終わる語（something・anything・nothing・everything）は、この原則の唯一の例外で、一語の形容詞も後ろに置く。「something ＋ 形容詞 ＋ to ＋ 原形」の順を、例外として丸ごと覚えておく。',
      },
      {
        question: '下線部はどこまでが主語か。The girl playing the piano over there is my sister.',
        wrongAnswer: 'The girl だけが主語で、playing 以下は進行形の動詞',
        trapExplanation:
          '「The girl is playing the piano（女の子はピアノをひいている）」という進行形の文だと思いこみ、playing を文の動詞として読んでしまう。be動詞が離れた位置にあるので気づきにくい。',
        correctAnswer: 'The girl playing the piano over there までが主語（動詞は is）',
        correctExplanation:
          'playing the piano over there は The girl を後ろから説明するかたまりで、「あそこでピアノをひいている女の子」となる。進行形なら The girl is playing 〜 のように be動詞が 〜ing の直前に来る。be動詞がないまま 〜ing が名詞の直後に続いていたら、それは説明のかたまりだと判断する。',
      },
    ],
  },

  {
    id: 'eigo_s303',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞的用法④：a friend to play with（前置詞が残る形）',
    description: '「いっしょに遊ぶ友だち」「住む家」など、文末に前置詞が残る形をおさえる',
    order: 803,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'a friend to play with（いっしょに遊ぶ友だち）のように、文末に前置詞が残ることがある。',
      '「〜と話す」なら talk with、「〜に住む」なら live in と、もとの言い方に必要な前置詞が残る。',
      '見分け方：不定詞の中身を文に戻したとき前置詞が必要なら、その前置詞を最後に置く。',
      'a house to live in（住む家）／a pen to write with（書くためのペン）／a chair to sit on（すわるいす）。',
      '前置詞を落とすと減点される。入試で最も差がつくポイントの一つ。',
    ],
    sections: [
      {
        heading: 'なぜ最後に前置詞が残るのか',
        body: `「いっしょに遊ぶ友だち」を英語にするとき、a friend to play では足りない。play with a friend（友だちといっしょに遊ぶ）というもとの言い方に with が必要だからである。

例）I want a friend to play with.（いっしょに遊ぶ友だちがほしい）
例）I need a house to live in.（住む家が必要だ）
例）Give me a pen to write with.（書くためのペンをください）
例）There is no chair to sit on.（すわるいすがない）

■ 確かめ方
説明されている名詞を、不定詞の後ろに戻してみる。
　a friend to play with → play with a friend（○ 友だちと遊ぶ）
　a friend to play → play a friend（× 友だちを遊ぶ？意味が通らない）
戻したときに前置詞が必要なら、その前置詞を文末に残す。

■ 前置詞がいらない場合
例）I have some books to read.
　→ read some books（本を読む）で前置詞は不要なので、to read だけでよい。
例）She has a lot of work to do.
　→ do a lot of work（仕事をする）も前置詞は不要である。

★ ポイント：「〜する」の部分が目的語を直接とるかどうかで決まる。読む・する・食べるは直接とる（前置詞なし）、遊ぶ・住む・すわるは前置詞が必要である。`,
      },
      {
        heading: '入試でねらわれる形',
        body: `文末の前置詞は、書き落としても文が通じてしまうように見えるため、受験生が最も落としやすい部分である。だからこそ出題される。

例）I have no friends to talk with.（話し相手がいない）
例）This is a good place to swim in.（ここは泳ぐのによい場所だ）
例）He needs someone to work with.（彼はいっしょに働く人を必要としている）
例）Do you have anything to write on?（何か書くもの＝紙はありますか）

■ write with と write on のちがい
例）something to write with（書くための道具＝ペン・えんぴつ）
例）something to write on（書くための面＝紙・ノート）
道具には with、面には on を使う。この二つを入れかえる問題は英検3級・上位校の入試で頻出である。

■ 場所を表すときは in / at
例）a place to live in（住む場所）
例）a room to study in（勉強する部屋）
ただし live や study が「そこで」の意味をすでに含んでいる文脈では省かれることもあり、実際の英文では a place to live のように使われる場合もある。中学受験の答案では前置詞を付ける形で覚えておけばよい。

⚠ 注意：前置詞は必ず文の最後に置き、to の前には出さない。a friend with to play とは絶対に書かない。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「わたしはいっしょに遊ぶ友だちがほしい」',
        wrongAnswer: 'I want a friend to play.',
        trapExplanation:
          '「遊ぶ友だち」という日本語をそのまま a friend to play と写してしまう。日本語には「といっしょに」にあたる語が表れないので、必要な with に気づけない。',
        correctAnswer: 'I want a friend to play with.',
        correctExplanation:
          '不定詞の中身を文に戻すと play with a friend となり、with がなければ意味が成り立たない。したがって with を文末に残して a friend to play with とする。同じ理由で a house to live in、a chair to sit on も前置詞が必要である。',
      },
      {
        question: '（　）に with か on のどちらかを入れなさい。Do you have anything to write (　)?（何か書く紙はありますか）',
        wrongAnswer: 'with',
        trapExplanation:
          '「書くもの」＝ write with で覚えていると、日本語の「書くもの」だけを見て機械的に with を選んでしまう。しかし求めているのはペンではなく紙である。',
        correctAnswer: 'on',
        correctExplanation:
          'write on 〜 は「〜の上に書く」で、紙やノートなど書く面を表す。write with 〜 は「〜を使って書く」で、ペンやえんぴつなど道具を表す。日本語の「書くもの」は両方を指せるので、かっこの後ろの日本語（紙・ペン）を必ず確かめてから前置詞を選ぶ。',
      },
    ],
  },
  // ───────────────────── 3. 不定詞 副詞的用法（s304〜s307） ─────────────────────
  {
    id: 'eigo_s304',
    subject: 'eigo',
    examType: 'chugaku',
    title: '副詞的用法①：目的「〜するために」',
    description: '動作の目的を表す不定詞をつかみ、「なぜ？」に答える形として理解する',
    order: 804,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '副詞的用法の代表は目的で、「〜するために」と訳す。',
      '文の骨組み（主語＋動詞）が先にあり、その後ろに目的の不定詞を付け足す。',
      'Why 〜? への答えとして、To 〜. と不定詞だけで答えられる。',
      'はっきり目的を示したいときは in order to 〜 を使う（上位校向け）。',
      '不定詞を取りのぞいても文が成り立つなら副詞的用法である。',
    ],
    sections: [
      {
        heading: '「なぜ？」に答える不定詞',
        body: `副詞的用法の不定詞は、動詞に説明を付け加える。いちばん多いのが目的を表す使い方である。

例）I went to the library to borrow some books.（本を借りるために図書館へ行った）
例）She got up early to catch the first train.（始発電車に乗るために早く起きた）
例）We use a dictionary to look up new words.（新しい単語を調べるために辞書を使う）

■ 文の骨組みは前半だけ
上の一つ目の文は、to borrow some books を消しても I went to the library. として立派に成り立つ。つまり不定詞は、完成した文にあとから付け足された「おまけ」である。これが名詞的用法（消すと文が壊れる）との決定的なちがいである。

■ Why への答えになる
例）Why did you go to the library? — To borrow some books.（本を借りるためです）
Because I wanted to borrow some books. と答えてもよい。To 〜 と答えられる不定詞は、必ず目的の副詞的用法である。

■ 文頭に出すこともできる
例）To catch the first train, she got up early.
目的を強調したいときは前に出し、コンマで区切る。

★ ポイント：判定は「消してみる」。消しても文が成り立てば副詞的用法、成り立たなければ名詞的用法である。`,
        figureId: 'lf_eigoext09_304',
      },
      {
        heading: 'in order to と so that（上位校向け）',
        body: `目的をはっきり示したいときや、書き言葉では in order to 〜 を使う。

例）He studied hard in order to pass the exam.（彼は試験に合格するために一生けんめい勉強した）
例）I left home early in order not to be late.（遅れないように早く家を出た）

否定は in order not to 〜 の順になる。not の位置に注意する。

■ so that ... can 〜 への書きかえ
例）He studied hard to pass the exam.
　→ He studied hard so that he could pass the exam.
so that を使うと、目的の中身に別の主語を立てられる。
例）I spoke slowly so that everyone could understand me.（みんながわかるようにゆっくり話した）
不定詞では「わたしがわかる」ことしか表せないので、他の人を主語にしたいときは so that を使う。

■ 「〜しないために」
例）Be careful not to catch a cold.（かぜをひかないように気をつけて）
not は to の前に置く。

⚠ 注意：日本語の「〜するように」につられて、for を使って for pass the exam などとしてはいけない。前置詞 for のあとに動詞の原形は置けない。目的を表すのは to＋原形か、for＋名詞（for the exam）である。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「彼女は英語を勉強するためにアメリカへ行った」',
        wrongAnswer: 'She went to America for study English.',
        trapExplanation:
          '「〜のために」＝ for と覚えているため、for のあとに動詞をそのまま続けてしまう。前置詞のあとに動詞の原形は置けないという原則を忘れている。',
        correctAnswer: 'She went to America to study English.',
        correctExplanation:
          '目的を表して「〜するために」と言うときは to＋動詞の原形を使う。for を使うなら後ろは名詞にして for her English study のようにしなければならない。どうしても for を使いたいなら for studying English と動名詞にする必要がある。',
      },
      {
        question: '次の文の不定詞は何用法か。I went to the store to buy some eggs.',
        wrongAnswer: '名詞的用法（卵を買うこと）',
        trapExplanation:
          '「卵を買うこと」と名詞のように訳せてしまうので、名詞的用法だと判断してしまう。went の直後にあることも、目的語だと思わせる原因になる。',
        correctAnswer: '副詞的用法（卵を買うために）',
        correctExplanation:
          'to buy some eggs を消すと I went to the store. となり、文はきちんと成り立つ。名詞的用法なら消したときに目的語がなくなって文が壊れる。また go は目的語をとらない動詞なので、後ろの不定詞は目的語ではありえない。',
      },
    ],
  },

  {
    id: 'eigo_s305',
    subject: 'eigo',
    examType: 'chugaku',
    title: '副詞的用法②：感情の原因「〜して（うれしい）」',
    description: 'be glad to 〜 など、感情を表す形容詞のあとに続く不定詞をおさえる',
    order: 805,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '感情を表す形容詞のあとの不定詞は、その感情の原因を表して「〜して」と訳す。',
      'be glad to 〜／be happy to 〜／be sad to 〜／be sorry to 〜／be surprised to 〜。',
      '語順は「be動詞＋感情の形容詞＋to＋動詞の原形」。',
      'Nice to meet you. は「お会いできてうれしい」で、この用法の決まり文句。',
      '感情の形容詞の直後にあるかどうかで、目的の用法と区別する。',
    ],
    sections: [
      {
        heading: 'うれしい・悲しい・驚いた理由を示す',
        body: `感情を表す形容詞のあとに不定詞を置くと、「なぜその気持ちになったのか」を説明できる。

例）I am glad to see you.（あなたに会えてうれしい）
例）We were happy to hear the news.（その知らせを聞いてうれしかった）
例）She was sad to leave her friends.（友だちと別れて悲しかった）
例）I was surprised to see him there.（そこで彼を見て驚いた）
例）I\'m sorry to hear that.（それを聞いて気の毒に思います）

■ 訳は「〜して」
目的の用法は「〜するために」、感情の原因は「〜して」と訳し分ける。直前に感情の形容詞（glad・happy・sad・sorry・surprised・excited）があれば、原因の用法だと判断してよい。

■ あいさつの決まり文句
例）Nice to meet you.（はじめまして＝お会いできてうれしい）
例）I\'m happy to be here.（ここに来られてうれしいです）
どちらも感情の原因を表す不定詞である。

■ 感情の形容詞の一覧
glad（うれしい）／happy（幸せな）／sad（悲しい）／sorry（気の毒に思う・残念な）／surprised（驚いた）／excited（わくわくした）／disappointed（がっかりした）

★ ポイント：be surprised・be excited のように、感情を表す語には過去分詞から生まれたものが多い。be動詞とセットで覚える。`,
      },
      {
        heading: '同じ形でちがう意味になる文',
        body: `不定詞の直前にある語を見ないと、意味を取りちがえることがある。

例）I was happy to help him.（彼を手伝えてうれしかった）… 原因
例）I called him to help him.（彼を手伝うために電話した）… 目的
どちらも to help him だが、直前が形容詞 happy か、動詞 called かで用法が変わる。

■ sorry の二つの意味
例）I\'m sorry to hear that.（それを聞いて残念に思う）… 気の毒
例）I\'m sorry to be late.（遅れてすみません）… おわび
sorry は「残念に思う」と「すまなく思う」の両方を表すので、文脈で判断する。

■ 会話でよく出る形
例）I\'m glad to help you.（お手伝いできてうれしいです）
例）Are you excited to go to Tokyo Disneyland?（東京ディズニーランドに行くのが楽しみですか）
例）He was disappointed to lose the game.（試合に負けてがっかりした）

⚠ 注意：I am glad to see you. の to see you を「あなたに会うために」と訳すと「あなたに会うためにうれしい」となって意味が通らない。感情の形容詞のあとでは必ず「〜して」と訳す。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に直しなさい。She was surprised to find the door open.',
        wrongAnswer: '彼女はドアが開いているのを見つけるために驚いた。',
        trapExplanation:
          '不定詞＝「〜するために」と一つだけ覚えていると、感情の形容詞のあとでも機械的に目的で訳してしまい、日本語として通らない文になる。',
        correctAnswer: '彼女はドアが開いているのを見つけて驚いた。',
        correctExplanation:
          'surprised は感情を表す形容詞なので、そのあとの不定詞は驚いた原因を表す。「〜して」と訳す。訳したあと日本語として自然かどうかを必ず確かめると、この種のまちがいは防げる。',
      },
      {
        question: '（　）に適する語を入れなさい。I\'m (　) to meet you.（お会いできてうれしいです）',
        wrongAnswer: 'happily',
        trapExplanation:
          '「うれしく」という日本語の感じから副詞 happily を選んでしまう。しかし be動詞のあとに置けるのは形容詞であって副詞ではない。',
        correctAnswer: 'happy（または glad）',
        correctExplanation:
          'be動詞のあとには主語の様子を表す形容詞が入る。したがって happy か glad が正しい。「感情の形容詞＋to＋原形」がこの用法の決まった形であり、副詞が入る余地はない。',
      },
    ],
  },

  {
    id: 'eigo_s306',
    subject: 'eigo',
    examType: 'chugaku',
    title: '副詞的用法③：結果と判断の根拠',
    description: 'grow up to be 〜 の結果用法と、be kind to 〜 の判断の根拠をおさえる',
    order: 806,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '結果の用法：grow up to be 〜（成長して〜になる）、live to be 〜（生きて〜歳になる）。',
      '結果の用法は前から順に訳す（「〜して、そして…になった」）。',
      '判断の根拠：He is kind to help me.（手伝ってくれるとは親切だ）。',
      '判断の根拠では、人の性質を表す形容詞（kind・careless・clever）が使われる。',
      '結果・根拠は上位校向け。まず目的と感情の原因を確実にしてから取り組む。',
    ],
    sections: [
      {
        heading: '結果を表す不定詞',
        body: `ふつう不定詞は「これからのこと」を表すが、決まった言い方の中では「その結果どうなったか」を表すことがある。訳すときは前から順に読む。

例）He grew up to be a famous doctor.（彼は成長して有名な医者になった）
例）My grandfather lived to be ninety.（祖父は九十歳まで生きた）
例）She went to the station only to find the train had left.（駅へ行ったが、電車はもう出たあとだった）

■ 前から訳すのがこつ
「有名な医者になるために成長した」と後ろから訳すと不自然になる。結果の用法は、起きた順に「成長した → その結果、医者になった」と訳す。

■ 覚えるべき決まり文句
grow up to be 〜（成長して〜になる）
live to be 〜（〜歳まで生きる）
only to 〜（〜しただけだった・結局〜した）
never to 〜（そして二度と〜しなかった）

■ 目的との見分け
目的なら「〜するために」で意味が通る。通らずに「そして〜した」の方が自然なら結果である。grow up・live のように、目的を持って行うわけではない動詞のあとでは結果になりやすい。

★ ポイント：中学受験で必ず押さえるのは grow up to be 〜 と live to be 〜 の二つ。この二つは丸ごと暗記してよい。`,
      },
      {
        heading: '判断の根拠を表す不定詞',
        body: `人の性質を表す形容詞のあとに不定詞を置くと、「そう判断した理由」を表す。

例）He is kind to help old people.（お年寄りを助けるとは、彼は親切だ）
例）You were careless to leave your umbrella on the train.（電車にかさを忘れるとは、あなたは不注意だった）
例）She was clever to solve the problem.（その問題を解くとは、彼女は賢い）

■ 感情の原因との区別
感情の形容詞（glad・sad・surprised）→ 原因「〜して」
性質の形容詞（kind・careless・clever・foolish）→ 根拠「〜するとは」
主語がどんな人かを述べているのが根拠の用法である。

■ It is 〜 of 人 to ... との関係
例）It is kind of you to help me.（手伝ってくださるとは、ご親切に）
これは You are kind to help me. とほぼ同じ内容である。性質を表す形容詞では for ではなく of を使う点が入試でねらわれる。

⚠ 注意：He is kind to help me. の to help me を「助けるために」と訳すと「助けるために親切だ」となって意味が通らない。形容詞が感情か性質かを先に確かめる習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に直しなさい。My grandmother lived to be one hundred.',
        wrongAnswer: '祖母は百歳になるために生きた。',
        trapExplanation:
          '不定詞＝目的と決めつけて「〜になるために」と訳してしまう。しかし人は百歳になることを目的に生きるわけではなく、日本語として不自然である。',
        correctAnswer: '祖母は百歳まで生きた。',
        correctExplanation:
          'live to be 〜 は結果を表す決まった言い方で、「生きて、その結果〜歳になった」という意味になる。前から順に訳すのがこつ。同じ形の grow up to be 〜（成長して〜になる）とセットで覚えておく。',
      },
      {
        question: '（　）に for か of を入れなさい。It was kind (　) you to carry my bag.（かばんを運んでくださるとはご親切に）',
        wrongAnswer: 'for',
        trapExplanation:
          'It is ... for 人 to 〜 の形を先に習っているため、すべて for でよいと思いこんでしまう。形容詞の種類によって前置詞が変わることに気づけない。',
        correctAnswer: 'of',
        correctExplanation:
          'kind・careless・clever・foolish など、人の性質を表す形容詞のときは of を使う。easy・difficult・important・necessary など、ことがらの性質を表す形容詞のときは for を使う。「その人がどんな人かを言っているなら of」と覚える。',
      },
    ],
  },

  {
    id: 'eigo_s307',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不定詞の総合：三用法の見分け方',
    description: '三用法を判別する手順を固め、入試の用法識別問題に対応できるようにする',
    order: 807,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '手順①：不定詞を消してみる。文が壊れれば名詞的用法。',
      '手順②：直前が名詞なら形容詞的用法（その名詞の説明になっているか確かめる）。',
      '手順③：消しても文が成り立ち、直前が動詞や形容詞なら副詞的用法。',
      '副詞的用法の内わけは、目的が最も多く、次に感情の原因、結果や根拠はまれ。',
      '訳だけで決めない。位置と、消したときに文が成り立つかで決める。',
    ],
    sections: [
      {
        heading: '三段階の判別手順',
        body: `用法を問う問題は、次の手順を上から順に当てはめれば必ず解ける。

■ 手順① 不定詞を消してみる
例）I want to play tennis. → I want. となり文が壊れる → 名詞的用法
例）I have homework to do. → I have homework. で成り立つ → 名詞的用法ではない
例）I went there to see him. → I went there. で成り立つ → 名詞的用法ではない

■ 手順② 直前が名詞かどうかを見る
例）I have homework to do. → 直前が homework（名詞）で、「するべき宿題」と説明している → 形容詞的用法

■ 手順③ 残りは副詞的用法
例）I went there to see him. → 直前は there（副詞）で、went の目的を説明 → 副詞的用法

■ まぎらわしい例で確かめる
例）I have no time to play.（遊ぶ時間がない）… 直前が time → 形容詞的用法
例）I have time to play.（遊ぶ時間がある）… 同じく形容詞的用法
例）I came here to play.（遊ぶためにここへ来た）… 直前が here → 副詞的用法

★ ポイント：直前が名詞でも、その名詞の説明になっていなければ形容詞的用法ではない。「I want money to buy a game.（ゲームを買うためのお金）」は形容詞的用法だが、「I asked him to come.」の him は説明されているのではないので形容詞的用法にはならない。`,
        figureId: 'lf_eigoext09_307',
      },
      {
        heading: '一文に二つ以上の不定詞が入る場合',
        body: `入試の長文では、一つの文に不定詞がいくつも出てくる。それぞれ別々に判定する。

例）I want to buy a book to read on the train.
　to buy → want の目的語（名詞的用法）
　to read → a book を説明（形容詞的用法）
　訳）電車の中で読む本を買いたい。

例）She went to the store to buy something to eat.
　to buy → went の目的（副詞的用法）
　to eat → something を説明（形容詞的用法）
　訳）彼女は何か食べるものを買いに店へ行った。

■ 順番に切って読む
長い文では、to が出てくるたびに直前の語を見て役目を決め、かたまりごとに切って読む。前から順に処理すれば、どんなに不定詞が並んでも読み解ける。

■ 頻度の目安
入試に出る不定詞は名詞的用法が最も多く、次に副詞的用法（その大半は目的）、形容詞的用法が続く。まぎらわしいのは形容詞的用法と副詞的用法の区別なので、「直前が名詞か」を必ず確かめる。

⚠ 注意：It is easy to swim. の to swim は形式主語 It が指す本当の主語なので名詞的用法である。「泳ぐために簡単だ」と副詞的に訳してはいけない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の不定詞は何用法か。I have a lot of things to tell you.',
        wrongAnswer: '副詞的用法（あなたに話すために）',
        trapExplanation:
          'to tell you を「あなたに話すために」と訳すと一見通じるので、目的の副詞的用法だと判断してしまう。文末にあることも副詞的だと感じさせる。',
        correctAnswer: '形容詞的用法（あなたに話すべきこと）',
        correctExplanation:
          '直前が things という名詞で、「あなたに話すべきこと」とその名詞の中身を説明している。手順どおり「直前が名詞か」「その名詞の説明になっているか」を確かめれば、形容詞的用法だとわかる。',
      },
      {
        question: '次の文の不定詞は何用法か。To see is to believe.',
        wrongAnswer: '主語の To see は名詞的用法、is のあとの to believe は副詞的用法',
        trapExplanation:
          '文の後半にある不定詞は副詞的用法が多いという思いこみから、位置だけで判断してしまう。',
        correctAnswer: '両方とも名詞的用法（見ることは信じることだ＝百聞は一見にしかず）',
        correctExplanation:
          'To see は主語、to believe は be動詞のあとの補語で、どちらも名詞のはたらきをしている。be動詞のあとの不定詞は「主語＝不定詞の内容」というイコール関係を作るので名詞的用法である。to believe を消すと To see is. となって文が壊れる点でも確かめられる。',
      },
    ],
  },

  // ───────────────────── 4. 疑問詞＋不定詞（s308〜s310） ─────────────────────
  {
    id: 'eigo_s308',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞＋不定詞①：how to 〜（〜のしかた）',
    description: 'how to＋動詞の原形で「〜のしかた」を表す形を身につける',
    order: 808,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'how to＋動詞の原形＝「〜のしかた」「どうやって〜すればよいか」。',
      '「疑問詞＋不定詞」はひとかたまりで名詞のはたらきをする（目的語になる）。',
      'know how to 〜（〜のしかたを知っている）／learn how to 〜（〜のしかたを習う）。',
      'tell me how to 〜（〜のしかたを教えて）は道案内・説明でよく使う。',
      'how to のあとも必ず動詞の原形。主語は書かない。',
    ],
    sections: [
      {
        heading: 'how to のかたまりを作る',
        body: `疑問詞のあとに不定詞を置くと、「どうやって〜すればよいか」という内容をひとかたまりの名詞として表せる。

例）I know how to swim.（わたしは泳ぎ方を知っている＝泳げる）
例）He learned how to use a computer.（彼はコンピューターの使い方を習った）
例）Please tell me how to get to the station.（駅への行き方を教えてください）
例）Do you know how to make curry?（カレーの作り方を知っていますか）

■ ひとかたまりで名詞になる
how to swim は「泳ぎ方」という一つの名詞のかたまりとして、know の目的語になっている。だから I know how to swim. は「主語＋動詞＋目的語」の形である。

■ 主語は書かない
例）I know how to swim.（○）
例）I know how I to swim.（×）
不定詞の中に主語を入れることはできない。だれがするのかは、文の主語からわかると考える。

■ can への書きかえ
例）I know how to swim. ≒ I can swim.（泳げる）
know how to 〜 は「やり方がわかっている＝できる」という意味になることが多い。

★ ポイント：how to＋原形は「〜のしかた」という名詞のかたまり。目的語の位置にすっぽり入る、と形で覚える。`,
        figureId: 'lf_eigoext09_308',
      },
      {
        heading: '道案内と説明の会話',
        body: `how to 〜 は、道をたずねる場面や作り方を説明する場面で必ず出てくる。中学受験の会話文問題でも定番である。

例）Could you tell me how to get to the museum?（博物館への行き方を教えていただけますか）
例）I don\'t know how to say it in English.（それを英語で何と言えばよいかわかりません）
例）She showed me how to fold a paper crane.（彼女は折り鶴の折り方を見せてくれた）

■ 「教える」の動詞
tell（言って教える）／show（見せて教える）／teach（教科として教える）
例）My father taught me how to ride a bike.（父は自転車の乗り方を教えてくれた）
どれも「人＋how to 〜」の順に並べる。

■ 答え方の例
Go straight and turn right at the second corner.（まっすぐ行って、二つ目の角を右に曲がってください）
It\'s next to the post office.（郵便局のとなりです）

⚠ 注意：how to のあとに to を重ねてしまうミスが多い。how to to get とは書かない。また get to the station の to は前置詞なので、how to get to 〜 と to が二回出てくるのは正しい形である。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「わたしはギターのひき方を知りません」',
        wrongAnswer: 'I don\'t know how to playing the guitar.',
        trapExplanation:
          '「〜すること」を表す形として動名詞を先に思い出してしまい、how to のあとを playing にしてしまう。to のあとは必ず原形という原則を忘れている。',
        correctAnswer: 'I don\'t know how to play the guitar.',
        correctExplanation:
          '「疑問詞＋to＋動詞の原形」が決まった形で、to のあとが 〜ing になることはない。なお how playing とも書けない。「how to ＋ 原形」を一つのかたまりとして暗記してしまうのが確実である。',
      },
      {
        question: '（　）に適する語を入れなさい。Please tell me (　) to get to the station.（駅への行き方を教えてください）',
        wrongAnswer: 'where',
        trapExplanation:
          '「駅へ」という場所の語につられて where を選んでしまう。where to go なら「どこへ行けばよいか」で、行き方をたずねる内容にはならない。',
        correctAnswer: 'how',
        correctExplanation:
          'たずねているのは行き先ではなく「どうやって行くか」なので how を使う。where to go は「どこへ行けばよいか」、how to get to 〜 は「〜への行き方」。日本語の「駅への行き方」の「方」が方法を指していることに注目する。',
      },
    ],
  },

  {
    id: 'eigo_s309',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞＋不定詞②：what to / when to / where to / which to',
    description: 'how 以外の疑問詞と不定詞の組み合わせを、意味のちがいとともに覚える',
    order: 809,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'what to do（何をすべきか）／when to start（いつ始めるべきか）／where to go（どこへ行くべきか）。',
      'which to buy（どちらを買うべきか）／which book to buy（どの本を買うべきか）。',
      'どれも「〜すべきか」という意味を含み、名詞のかたまりとして目的語になる。',
      'why to 〜 という形はない。理由は why 節（why I should 〜）で表す。',
      'I don\'t know what to do. は「どうしたらよいかわからない」の決まり文句。',
    ],
    sections: [
      {
        heading: '疑問詞ごとの意味',
        body: `疑問詞を変えると、たずねる中身が変わる。

例）I don\'t know what to do.（何をすればよいかわからない）
例）Please tell me when to start.（いつ始めればよいか教えてください）
例）We didn\'t know where to go.（どこへ行けばよいかわからなかった）
例）I can\'t decide which to choose.（どちらを選べばよいか決められない）

■ which は名詞を続けられる
例）I can\'t decide which book to buy.（どの本を買えばよいか決められない）
例）Tell me which way to go.（どちらの道を行けばよいか教えて）
which のあとに名詞を置くと「どの○○を」となる。what も同じように what time to leave（何時に出発すべきか）のように使える。

■ 使う動詞
know（知っている）／tell（教える）／ask（たずねる）／decide（決める）／learn（習う）／show（見せて教える）／forget（忘れる）
例）I forgot where to put my key.（かぎをどこに置けばよいか忘れた）

■ why には使えない
例）I don\'t know why to go.（×）
理由をたずねる why は不定詞と組み合わせられない。I don\'t know why I should go.（なぜ行かなければならないのかわからない）のように、主語＋動詞の形で表す。

★ ポイント：how・what・when・where・which の五つは不定詞と組める。why だけは組めない、と例外で覚える。`,
      },
      {
        heading: '会話でよく使う表現',
        body: `疑問詞＋不定詞は、困っている場面や相談の場面で自然に使われる。会話文の空所補充でねらわれる。

例）I don\'t know what to say.（何と言えばよいかわからない）
例）What should I do? — I don\'t know what to do, either.（どうしよう。—わたしにもどうしたらよいかわからない）
例）Do you know where to buy tickets?（切符をどこで買えばよいか知っていますか）
例）Let\'s decide when to meet.（いつ会うか決めましょう）

■ 「〜すべきか」の should を補って考える
what to do ≒ what I should do
where to go ≒ where I should go
このように should を補うと意味がはっきりする。書きかえ問題ではこの関係が問われる。

例）I don\'t know what to do.
　＝ I don\'t know what I should do.

■ 目的語が二つある形
例）Please tell me what to bring.（何を持っていけばよいか教えてください）
tell のあとに「me（人）＋ what to bring（もの）」と二つ並ぶ形になる。人が先、内容が後ろである。

⚠ 注意：what to do の to のあとに主語を入れて what to I do とは書かない。主語を入れたいなら what I should do のように should の形にする。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。I don\'t know (　) to buy for her birthday.（誕生日に何を買えばよいかわからない）',
        wrongAnswer: 'how',
        trapExplanation:
          '疑問詞＋不定詞を how to 〜 の形で最初に習うため、意味を確かめずに how を入れてしまう。how to buy なら「買い方」になり、贈り物を選ぶ話にならない。',
        correctAnswer: 'what',
        correctExplanation:
          'たずねているのは買う方法ではなく「何を」買うかなので what を使う。「何を」＝what、「どうやって」＝how、「いつ」＝when、「どこで」＝where と、日本語のたずねる中身に合わせて選ぶ。',
      },
      {
        question: '誤りを直しなさい。I don\'t know why to be late for school.',
        wrongAnswer: 'why to be late のままでよい',
        trapExplanation:
          'how to・what to が使えるので、why でも同じように不定詞を続けられると考えてしまう。疑問詞と不定詞は何でも組み合わせられると思いこむのが原因である。',
        correctAnswer: 'I don\'t know why I was late for school.（なぜ遅刻したのかわからない）',
        correctExplanation:
          'why だけは不定詞と組み合わせられない。理由を表すときは why のあとに主語＋動詞を続ける。「疑問詞＋不定詞」が使えるのは how・what・when・where・which の五つだと覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s310',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞＋不定詞③：間接疑問との書きかえ',
    description: '疑問詞＋不定詞と「疑問詞＋主語＋動詞」の言いかえを整理する',
    order: 810,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '疑問詞＋不定詞 ≒ 疑問詞＋主語＋should＋動詞の原形。',
      '間接疑問（文の中に入った疑問文）の語順は「疑問詞＋主語＋動詞」。疑問文の語順にしない。',
      'I don\'t know what to do. ＝ I don\'t know what I should do.',
      '主語がちがう場合は不定詞では表せないので、間接疑問を使う。',
      '間接疑問では do／does／did を使わない（what he wants であって what does he want ではない）。',
    ],
    sections: [
      {
        heading: '間接疑問の語順',
        body: `疑問文が別の文の中に入ると、語順がふつうの文（主語＋動詞）にもどる。これを間接疑問という。

例）Where does he live?（彼はどこに住んでいますか）
　→ I don\'t know where he lives.（彼がどこに住んでいるか知らない）
例）What is this?（これは何ですか）
　→ Tell me what this is.（これが何か教えて）
例）When did she come?（彼女はいつ来ましたか）
　→ I don\'t know when she came.（彼女がいつ来たか知らない）

■ 三つの変化
①疑問詞のあとを「主語＋動詞」の順にもどす
②do・does・did は消し、その分を動詞の形に反映させる（lives・came）
③文末のクエスチョンマークは、文全体が疑問文でなければ付けない

■ 不定詞との関係
例）I don\'t know what to do. ＝ I don\'t know what I should do.
例）Tell me how to use it. ＝ Tell me how I should use it.
不定詞の形は短く言えるが、主語を示せない。だれがするのかを変えたいときは間接疑問にする。

★ ポイント：間接疑問は「疑問文の顔をした、ふつうの語順の名詞のかたまり」である。`,
      },
      {
        heading: '不定詞では表せない場合',
        body: `疑問詞＋不定詞は、動作をする人が文の主語（または相手）と同じときにしか使えない。

例）I don\'t know what to do.（わたしが何をすべきか）
例）Tell me what to do.（わたしが何をすべきか）
どちらも動作をするのは「わたし」である。

■ 別の人が主語のとき
例）I don\'t know what he should do.（彼が何をすべきかわからない）
これを I don\'t know what to do. と書いてしまうと「わたしが何をすべきか」となり、意味が変わってしまう。動作をする人がちがうときは、必ず間接疑問を使う。

■ 時制のあるなし
不定詞には時制がないので、いつのことかは文全体で決まる。
例）I didn\'t know what to say.（何を言えばよいかわからなかった）
間接疑問なら動詞の形で時を示せる。
例）I don\'t know where he went.（彼がどこへ行ったか知らない）
過去のことは、不定詞では表せず間接疑問が必要である。

⚠ 注意：I don\'t know what does he want. は誤り。文の中に入った疑問文では does を使わず、I don\'t know what he wants. とする。この語順のまちがいは入試で最も多い減点箇所の一つである。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。Do you know where does she live?',
        wrongAnswer: 'where does she live のままでよい',
        trapExplanation:
          'Where does she live? という疑問文をそのまま文の中に入れてしまう。疑問文が二つ重なっていることに気づけない。',
        correctAnswer: 'Do you know where she lives?',
        correctExplanation:
          '文の中に入った疑問文（間接疑問）は「疑問詞＋主語＋動詞」の語順にもどる。does は消し、その分を lives と三単現の形にして表す。文全体は Do you know 〜? という疑問文なので、クエスチョンマークは文末に付ける。',
      },
      {
        question: '同じ意味の文にしなさい。I don\'t know what I should say.',
        wrongAnswer: 'I don\'t know what should to say.',
        trapExplanation:
          '不定詞に直すときに should を残したまま to を加えてしまう。助動詞と不定詞は同時には使えない。',
        correctAnswer: 'I don\'t know what to say.',
        correctExplanation:
          '「疑問詞＋主語＋should＋原形」は、主語と should を消して「疑問詞＋to＋原形」に置きかえられる。should to のように助動詞と to を並べることはできない。動作をする人が文の主語と同じときにだけ、この書きかえができる。',
      },
    ],
  },
  // ─────────── 5. It is ... to 〜／too 〜 to／〜 enough to（s311〜s315） ───────────
  {
    id: 'eigo_s311',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'It is ... to 〜①：形式主語の It',
    description: '重い主語を後ろへ回し、先頭に It を置く形をつかむ',
    order: 811,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'It is ... to 〜 の It は形だけの主語で、「それ」とは訳さない。',
      '本当の主語は to 以下。「〜することは…だ」と後ろから訳し上げる。',
      'To swim is easy. ＝ It is easy to swim. の書きかえができるようにする。',
      'It のあとの be動詞は is・was など単数の形。',
      'よく使う形容詞：easy・difficult（hard）・important・necessary・interesting・fun・dangerous。',
    ],
    sections: [
      {
        heading: '重いものは後ろへ回す',
        body: `英語には「長いかたまりを文の先頭に置きたくない」という性質がある。そこで主語が不定詞のときは、先頭に形だけの主語 It を置き、本当の主語を後ろへ送る。

例）To speak English is difficult.
　→ It is difficult to speak English.（英語を話すことは難しい）
例）To get up early is good for you.
　→ It is good for you to get up early.（早起きはあなたにとってよい）

■ It は訳さない
この It には「それ」という意味はまったくない。「〜することは…だ」と、to 以下から訳し上げる。

■ よく使う形容詞
easy（簡単だ）／difficult・hard（難しい）／important（大切だ）／necessary（必要だ）／interesting（おもしろい）／fun（楽しい）／dangerous（危険だ）／impossible（不可能だ）

例）It is important to help each other.（たがいに助け合うことは大切だ）
例）It is dangerous to swim in this river.（この川で泳ぐのは危険だ）
例）It is fun to play with a dog.（犬と遊ぶのは楽しい）

■ 名詞を使う形もある
例）It is a good idea to start early.（早く始めるのはよい考えだ）
形容詞だけでなく「a good idea」のような名詞も入れられる。

★ ポイント：It で始まって、あとに to＋原形が出てきたら、その It は形式主語だと考えてよい。`,
        figureId: 'lf_eigoext09_311',
      },
      {
        heading: '否定文・疑問文と、時制の変化',
        body: `形式主語の文も、ふつうの be動詞の文と同じように否定・疑問にできる。

例）It is not easy to learn a foreign language.（外国語を学ぶのは簡単ではない）
例）Is it difficult to play the violin?（バイオリンをひくのは難しいですか）
　— Yes, it is. / No, it isn\'t.
答えの it もそのまま使う。

■ 過去の文
例）It was interesting to visit the old temple.（その古い寺を訪れるのはおもしろかった）
be動詞を was にするだけで、to visit は変わらない。

■ 天気の it との区別
例）It is rainy today.（今日は雨だ）… 天気の it
例）It is fun to play in the rain.（雨の中で遊ぶのは楽しい）… 形式主語の it
どちらも訳さない it だが、後ろに to＋原形があるかどうかで区別する。

■ 長い主語を実際に見くらべる
To read many books when you are young is important.
It is important to read many books when you are young.
下の形の方が、主語がすぐ終わるので意味を取りやすい。実際の英文ではほとんどが下の形である。

⚠ 注意：It is easy swim. のように to を落とさない。また It is easy to swimming. のように to のあとを 〜ing にしない。`,
      },
    ],
    trapExamples: [
      {
        question: '同じ意味の文にしなさい。To ride a bike is easy for me.',
        wrongAnswer: 'This is easy to ride a bike for me.',
        trapExplanation:
          '形式主語には「それ」を指す語を置けばよいと考え、This や That を使ってしまう。形式主語に使えるのは It だけである。',
        correctAnswer: 'It is easy for me to ride a bike.',
        correctExplanation:
          '後ろに回した不定詞の代わりに先頭に置けるのは It だけで、This・That は使えない。また for me（だれにとって）は形容詞のすぐあと、to の前に置くのが決まった順である。',
      },
      {
        question: '日本語に直しなさい。It is important to keep your room clean.',
        wrongAnswer: 'それは、あなたの部屋をきれいに保つために大切だ。',
        trapExplanation:
          'It を「それ」と訳し、to 以下を「〜するために」と副詞的に訳してしまう。二重にまちがえた結果、日本語として意味の通らない文になる。',
        correctAnswer: '自分の部屋をきれいにしておくことは大切だ。',
        correctExplanation:
          '形式主語の It は訳さず、to 以下を主語として「〜することは…だ」と訳し上げる。It のすぐあとが be動詞＋形容詞で、そのあとに to＋原形が続いていれば、この形だと判断できる。',
      },
    ],
  },

  {
    id: 'eigo_s312',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'It is ... to 〜②：for 人 と of 人',
    description: '「だれにとって」を表す for 人 の位置と、of を使う場合を区別する',
    order: 812,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '「だれにとって」は for 人 で表し、形容詞のあと・to の前に置く。',
      'It is easy for me to swim.（わたしにとって泳ぐことは簡単だ）',
      'for 人 は不定詞の意味上の主語。「その人が〜する」という関係になる。',
      '人の性質を表す形容詞（kind・careless・clever・foolish）のときは of 人 を使う。',
      '代名詞は for me・for him など目的格にする（for I とはしない）。',
    ],
    sections: [
      {
        heading: 'for 人 の位置と意味',
        body: `不定詞の動作をするのがだれかを示したいときは、to の前に「for ＋ 人」を置く。

例）It is easy for me to swim.（わたしにとって泳ぐことは簡単だ）
例）It is difficult for children to read this book.（子どもたちがこの本を読むのは難しい）
例）It is necessary for us to study every day.（わたしたちが毎日勉強することは必要だ）

■ 位置は必ず「形容詞のあと・to の前」
例）It is easy for me to swim.（○）
例）It is for me easy to swim.（×）
例）For me it is easy to swim.（強調のためなら可能だが、答案では上の形にする）

■ 「〜にとって」ではなく「〜が」と訳す方がよい場合
例）It is important for you to practice every day.
　→ あなたが毎日練習することが大切だ。
for のあとの人は、不定詞の動作をする人（意味上の主語）である。「わたしにとって泳ぐ」ではなく「わたしが泳ぐ」という関係になっている。

■ 代名詞の形
I → for me／he → for him／she → for her／we → for us／they → for them
前置詞のあとなので目的格を使う。

★ ポイント：It is ... for 人 to 〜 は「人が〜するのは…だ」と訳すと、意味がすっきり通ることが多い。`,
      },
      {
        heading: 'of を使う形容詞',
        body: `形容詞が「人の性質」を表すときだけは、for ではなく of を使う。

例）It is kind of you to help me.（手伝ってくださるとはご親切に）
例）It was careless of him to lose the key.（かぎをなくすとは彼は不注意だった）
例）It is clever of her to solve the problem.（その問題を解くとは彼女は賢い）

■ 見分け方
「人 is 形容詞」と言いかえて意味が通るなら of。
　It is kind of you to help me. → You are kind.（○ 意味が通る）→ of
　It is easy for me to swim. → I am easy.（× 意味が通らない）→ for

■ of を使う形容詞
kind（親切な）／nice（やさしい）／careless（不注意な）／clever（賢い）／wise（賢明な）／foolish・silly（おろかな）／polite（礼儀正しい）

■ for を使う形容詞
easy／difficult・hard／important／necessary／possible／impossible／dangerous／interesting／natural

■ 書きかえ
例）It is kind of you to help me. ＝ You are kind to help me.
of の文は「人＋be動詞＋形容詞＋to 〜」に書きかえられる。for の文はこの書きかえができない。

⚠ 注意：It is kind for you to help me. は誤り。性質を表す形容詞では必ず of を使う。この一問で差が付く出題が多い。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。It is difficult (　) me to answer this question.',
        wrongAnswer: 'of',
        trapExplanation:
          'of you を使う形をあとから習うと、「人を示すときは of」と単純化してしまい、形容詞の種類を確かめずに of を選んでしまう。',
        correctAnswer: 'for',
        correctExplanation:
          'difficult は「ことがらが難しい」ことを表す形容詞なので for を使う。確かめ方は「I am difficult.」と言いかえてみること。意味が通らないので for である。「You are kind.」のように言いかえて通る形容詞（kind・careless など）のときだけ of を使う。',
      },
      {
        question: '日本語に合う英文にしなさい。「彼にとって英語を話すことは簡単だ」',
        wrongAnswer: 'It is easy for he to speak English.',
        trapExplanation:
          '「彼にとって」の「彼」をそのまま主格 he で書いてしまう。日本語では「彼」の形が変わらないため、格の区別を忘れやすい。',
        correctAnswer: 'It is easy for him to speak English.',
        correctExplanation:
          'for は前置詞なので、そのあとの代名詞は目的格にする。he → him、she → her、they → them、we → us、I → me。同じ理由で to me、with her なども目的格になる。',
      },
    ],
  },

  {
    id: 'eigo_s313',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'too ... to 〜：〜すぎて…できない',
    description: '程度が行きすぎて実現できないことを表す too ... to の形をおさえる',
    order: 813,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'too ＋ 形容詞・副詞 ＋ to ＋ 原形＝「あまりに…すぎて〜できない」。',
      '英文には not がないのに、日本語では「できない」と否定になる。',
      'too は「多すぎ・行きすぎ」を表す語。very とはちがう。',
      'so ... that ... can\'t 〜 に書きかえられる。',
      '「だれにとって」を入れるときは too ... for 人 to 〜 の順。',
    ],
    sections: [
      {
        heading: '否定の語がないのに「できない」',
        body: `too ... to 〜 は、程度が行きすぎているために実現できない、という意味を表す。

例）This coffee is too hot to drink.（このコーヒーは熱すぎて飲めない）
例）He is too young to drive a car.（彼は若すぎて車を運転できない）
例）I was too tired to walk any more.（疲れすぎてそれ以上歩けなかった）
例）The box is too heavy to carry.（その箱は重すぎて運べない）

■ not がないのに否定の意味
英文のどこにも not はないが、日本語にすると「〜できない」となる。too という語自体に「限度をこえている」という意味があるからである。

■ very との決定的なちがい
例）This coffee is very hot.（このコーヒーはとても熱い）… 飲めるかどうかは言っていない
例）This coffee is too hot to drink.（熱すぎて飲めない）… 飲めないと言っている
very は程度が大きいだけ、too は「大きすぎて困る」である。

■ 「だれにとって」を入れる
例）This book is too difficult for me to read.（この本はわたしには難しすぎて読めない）
for 人 は too ... と to の間に入れる。

★ ポイント：too が出てきたら「行きすぎ→無理」と反応する。訳すときは必ず最後を「〜できない」で結ぶ。`,
        figureId: 'lf_eigoext09_313',
      },
      {
        heading: 'so ... that ... can\'t 〜 への書きかえ',
        body: `too ... to 〜 は、so ... that ... can\'t 〜 の形に書きかえられる。入試の書きかえ問題の定番である。

例）He is too busy to help us.
　＝ He is so busy that he can\'t help us.（彼はとても忙しいのでわたしたちを手伝えない）

■ 書きかえの手順
①too → so にする
②to → that ＋ 主語 ＋ can\'t（過去なら couldn\'t）にする
③that のあとの主語は、文の主語をもう一度書く

例）The tea was too hot to drink.
　＝ The tea was so hot that I couldn\'t drink it.
過去の文なので couldn\'t になる。また that 以下は完全な文にしなければならないので、drink の目的語 it を必ず書く点に注意する。

■ 目的語の it を落とさない
too ... to 〜 の形では、to drink のあとに目的語を書かない（The tea was too hot to drink it. は誤り）。しかし that の文では drink it と書く必要がある。この「it の有無」が入試でねらわれる。

⚠ 注意：too ... to 〜 の to のあとに目的語を重ねて書くのは誤り。主語がすでにその目的語だからである。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に直しなさい。This question is too difficult for me to answer.',
        wrongAnswer: 'この問題はわたしにとってとても難しくて答えられる。',
        trapExplanation:
          'too を very と同じ「とても」と考えてしまい、not がないので肯定の意味だと判断してしまう。英文に否定語が見えないことが最大の落とし穴である。',
        correctAnswer: 'この問題はわたしには難しすぎて答えられない。',
        correctExplanation:
          'too ... to 〜 は「…すぎて〜できない」という否定の意味を含む。not がなくても否定で訳す。very とちがい、too は「限度をこえている」ことを表す語である。',
      },
      {
        question: '同じ意味の文にしなさい。The bag was too heavy for me to carry.',
        wrongAnswer: 'The bag was so heavy that I couldn\'t carry.',
        trapExplanation:
          'too ... to 〜 の形では目的語を書かないため、そのまま that の文に写して carry の目的語を落としてしまう。',
        correctAnswer: 'The bag was so heavy that I couldn\'t carry it.',
        correctExplanation:
          'that 以下は主語と動詞のそろった完全な文にしなければならないので、carry の目的語 it（＝the bag）が必要である。too ... to 〜 の形では主語が目的語を兼ねるので書かないが、書きかえたときは必ず補う。',
      },
    ],
  },

  {
    id: 'eigo_s314',
    subject: 'eigo',
    examType: 'chugaku',
    title: '... enough to 〜：〜するのに十分…だ',
    description: 'enough の位置に注意しながら、条件を満たしていることを表す形を学ぶ',
    order: 814,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '形容詞・副詞 ＋ enough ＋ to ＋ 原形＝「〜するのに十分…だ」。',
      'enough は形容詞・副詞の「後ろ」に置く（old enough であって enough old ではない）。',
      '名詞を修飾するときだけ enough は名詞の「前」に置く（enough money）。',
      'so ... that ... can 〜 に書きかえられる。',
      'too ... to 〜（できない）と enough to 〜（できる）は反対の意味になる。',
    ],
    sections: [
      {
        heading: 'enough の位置',
        body: `enough は「十分に」という意味で、置く場所が語の種類によって決まっている。

■ 形容詞・副詞のあと
例）He is old enough to drive a car.（彼は車を運転できる年齢だ）
例）She is tall enough to reach the shelf.（彼女は棚に手が届くほど背が高い）
例）He ran fast enough to catch the bus.（彼はバスに間に合うほど速く走った）

■ 名詞の前
例）I have enough money to buy the ticket.（切符を買うのに十分なお金がある）
例）We have enough time to finish it.（それを終えるのに十分な時間がある）

形容詞・副詞なら後ろ、名詞なら前。この使い分けだけで一問取れる出題がある。

■ 訳し方
「〜するのに十分…だ」が基本だが、日本語としては「…なので〜できる」と訳すと自然になることが多い。
例）He is kind enough to help me.（彼は親切なのでわたしを手伝ってくれる＝親切にも手伝ってくれる）

★ ポイント：old enough to 〜、tall enough to 〜 のように「形容詞 → enough → to」の順を音で覚えてしまうとまちがえない。`,
        figureId: 'lf_eigoext09_314',
      },
      {
        heading: 'too ... to との対比と書きかえ',
        body: `too ... to 〜 と enough to 〜 は、ちょうど反対の意味を表す。

例）He is too young to drive a car.（若すぎて運転できない）
例）He is old enough to drive a car.（運転できる年齢だ）
同じ内容を、足りない側から言うか、足りている側から言うかのちがいである。

■ so ... that ... can 〜 への書きかえ
例）She is rich enough to buy the car.
　＝ She is so rich that she can buy the car.（彼女はとても裕福なのでその車を買える）
too の場合は can\'t、enough の場合は can になる。

例）He was strong enough to lift the box.
　＝ He was so strong that he could lift the box.
過去の文なので could を使う。書きかえた文では lift の目的語 the box をきちんと書く。

■ 否定の形
例）He is not old enough to drive a car.（彼は運転できる年齢ではない）
＝ He is too young to drive a car.
not enough と too はほぼ同じ内容を表す。

⚠ 注意：enough を形容詞の前に置いて enough old とするのは誤り。名詞の前に置く enough money と混同しないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「彼は本を運べるほど強い」　strong / he / to / is / carry / enough / the books',
        wrongAnswer: 'He is enough strong to carry the books.',
        trapExplanation:
          '「十分に強い」という日本語の語順（十分に→強い）につられて、enough を形容詞の前に置いてしまう。very strong の語順の記憶も影響する。',
        correctAnswer: 'He is strong enough to carry the books.',
        correctExplanation:
          'enough が形容詞・副詞を修飾するときは、必ずその後ろに置く。前に置くのは名詞を修飾するとき（enough books）だけである。「形容詞→enough→to＋原形」の順を固定して覚える。',
      },
      {
        question: '同じ意味の文にしなさい。This box is light enough for me to carry.',
        wrongAnswer: 'This box is so light that I can\'t carry it.',
        trapExplanation:
          'too ... to 〜 の書きかえ（can\'t を使う）と混同して、enough の文でも can\'t を使ってしまう。二つの形が似ているため取りちがえやすい。',
        correctAnswer: 'This box is so light that I can carry it.',
        correctExplanation:
          'enough to 〜 は条件を満たしていて「できる」という意味なので can を使う。「できない」の can\'t を使うのは too ... to 〜 の方である。too は行きすぎて無理、enough は十分でできる、と反対の意味であることを押さえる。',
      },
    ],
  },

  {
    id: 'eigo_s315',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不定詞の総仕上げ：書きかえパターンの整理',
    description: 'too/enough/It is ... to/疑問詞＋不定詞の書きかえを一気に確認する',
    order: 815,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'To 〜 is ... ＝ It is ... to 〜（形式主語）。',
      'too ... to 〜 ＝ so ... that ... can\'t 〜（目的語の it を補う）。',
      '... enough to 〜 ＝ so ... that ... can 〜。',
      '疑問詞＋to＋原形 ＝ 疑問詞＋主語＋should＋原形。',
      '書きかえでは時制（can／could）と目的語の有無を必ず確認する。',
    ],
    sections: [
      {
        heading: '四つの書きかえを並べて確認',
        body: `不定詞の書きかえは、入試で必ず一問は出る。四つの型を並べて覚える。

■ ①形式主語
To learn English is important.
＝ It is important to learn English.

■ ②too ... to 〜
He is too tired to work.
＝ He is so tired that he can\'t work.

■ ③enough to 〜
She is old enough to go alone.
＝ She is so old that she can go alone.

■ ④疑問詞＋不定詞
I don\'t know how to use it.
＝ I don\'t know how I should use it.

■ 時制をそろえる
例）The soup was too hot to eat.
　＝ The soup was so hot that I couldn\'t eat it.
もとの文が過去なら、書きかえた文の助動詞も過去（couldn\'t・could）にする。ここを現在のままにする答案が非常に多い。

★ ポイント：書きかえたあと、必ず声に出して読み、主語と動詞がそろっているかを確かめる。`,
      },
      {
        heading: '見落としやすいチェックポイント',
        body: `書きかえ問題では、次の三点を必ず確認する。

■ ①目的語の it を補ったか
too ... to 〜 や enough to 〜 の形では、不定詞の目的語を書かない。しかし that の文に直したら、その目的語を必ず書く。
例）This tea is too hot to drink. → so hot that I can\'t drink it.

■ ②主語をもう一度書いたか
that のあとは完全な文なので、主語を書く必要がある。
例）He is so busy that he can\'t come.（he を二回書く）

■ ③for 人 を主語に変えたか
too ... for 人 to 〜 を書きかえるときは、for のあとの人が that の文の主語になる。
例）The book is too difficult for me to read.
　＝ The book is so difficult that I can\'t read it.
for me が I になっている点に注意する。

■ 総合練習
例）It is easy for him to answer the question.
　→ 不定詞の主語は he、内容は答えること。To answer the question is easy for him. とも書ける。

⚠ 注意：so ... that の that は接続詞なので省略できる場合もあるが、答案では必ず書く。省略すると採点者に伝わりにくい。`,
      },
    ],
    trapExamples: [
      {
        question: '同じ意味の文にしなさい。The problem was too hard for us to solve.',
        wrongAnswer: 'The problem was so hard that we can\'t solve it.',
        trapExplanation:
          'for us を we に変えるところまではできても、もとの文が過去（was）であることを見落とし、can\'t のまま書いてしまう。',
        correctAnswer: 'The problem was so hard that we couldn\'t solve it.',
        correctExplanation:
          '書きかえでは時制をそろえるのが原則である。もとの文が was なので、that 以下も過去にして couldn\'t とする。あわせて solve の目的語 it を補うことも忘れない。',
      },
      {
        question: '同じ意味の文にしなさい。To play the piano is not easy.',
        wrongAnswer: 'It is not easy playing the piano.',
        trapExplanation:
          '「〜すること」を表す形として動名詞も習っているため、後ろへ回すときに 〜ing にしてしまう。形式主語 It が受けられるのは不定詞である。',
        correctAnswer: 'It is not easy to play the piano.',
        correctExplanation:
          '形式主語 It は、後ろに回した to＋原形（不定詞）を指す。動名詞をそのまま It で受ける形は中学段階では使わない。「It is ... to 〜」を決まった形として覚える。',
      },
    ],
  },

  // ───────────────────── 6. 動名詞の用法（s316〜s319） ─────────────────────
  {
    id: 'eigo_s316',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動名詞①：〜ing が名詞になる（四つの位置）',
    description: '動名詞の作り方と、文の中で入る四か所を整理する',
    order: 816,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '動名詞＝動詞の 〜ing 形が名詞のはたらきをするもの。「〜すること」と訳す。',
      '入る場所は四つ：主語・動詞の目的語・be動詞のあとの補語・前置詞のあと。',
      '進行形の 〜ing とは形が同じ。前に be動詞があるかどうかで見分ける。',
      '動名詞が主語のときの動詞は is・was など単数の形。',
      '前置詞のあとに動詞を置くときは、必ず動名詞にする（不定詞は置けない）。',
    ],
    sections: [
      {
        heading: '動名詞の作り方と四つの位置',
        body: `動詞に ing を付けると「〜すること」という名詞のかたまりになる。これを動名詞という。

■ 作り方
ふつうは ing を付ける：play → playing／read → reading
e で終わる語は e をとって ing：make → making／write → writing／come → coming
短母音＋子音字で終わる語は子音字を重ねる：run → running／swim → swimming／sit → sitting

■ 入る四つの位置
①主語
例）Playing tennis is fun.（テニスをすることは楽しい）
②動詞の目的語
例）I enjoy playing tennis.（テニスをすることを楽しむ）
③be動詞のあとの補語
例）My hobby is playing tennis.（わたしの趣味はテニスをすることだ）
④前置詞のあと
例）He is good at playing tennis.（彼はテニスをするのが得意だ）

①〜③は不定詞の名詞的用法と同じ位置だが、④だけは動名詞にしかできない。前置詞のあとに to＋原形は置けないからである。

★ ポイント：「前置詞のあとは必ず 〜ing」。この一点だけでも確実に覚えておくと、入試で得点できる。`,
        figureId: 'lf_eigoext09_316',
      },
      {
        heading: '進行形の 〜ing との見分け方',
        body: `動名詞も進行形も 〜ing の形をしているが、はたらきがまったくちがう。

■ 進行形は be動詞とセット
例）He is playing tennis now.（彼は今テニスをしている）
be動詞（is）＋ 〜ing で「今〜している最中だ」を表す。

■ 動名詞は名詞のかたまり
例）His hobby is playing tennis.（彼の趣味はテニスをすることだ）
形は is playing でそっくりだが、意味は「趣味＝テニスをすること」というイコール関係である。

■ 見分けの手順
主語が人で「今している最中」の意味なら進行形。主語がものごと（hobby・dream・job）で「主語＝〜すること」の関係なら動名詞である。
例）My job is teaching English.（わたしの仕事は英語を教えることだ）… job は英語を教えている最中にはなれないので動名詞。

■ 動名詞が主語のときの動詞
例）Reading books is fun.（○）
例）Reading books are fun.（×）
不定詞のときと同じで、動名詞のかたまりは一つのことがらなので単数扱いになる。

⚠ 注意：Swimming is my favorite sport. の Swimming は動名詞の主語である。「泳いでいる」と進行形に訳さないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。Reading English books (　) interesting.',
        wrongAnswer: 'are',
        trapExplanation:
          'books が複数形なので、直前の名詞に引っぱられて are を選んでしまう。主語が「Reading English books」というひとかたまりであることを見落としている。',
        correctAnswer: 'is',
        correctExplanation:
          '動名詞のかたまりは、どれだけ長くても一つのことがらとして単数扱いする。したがって is が正しい。不定詞が主語のときと同じルールである。',
      },
      {
        question: '次の文の 〜ing は動名詞か進行形か。My dream is traveling around the world.',
        wrongAnswer: '進行形（夢が世界中を旅している）',
        trapExplanation:
          'is ＋ 〜ing の形を見た瞬間に進行形だと決めつけてしまう。形だけで判断して、意味が通るかを確かめていない。',
        correctAnswer: '動名詞（わたしの夢は世界中を旅することだ）',
        correctExplanation:
          '主語は My dream で、夢が旅をしている最中になることはありえない。「わたしの夢＝世界中を旅すること」というイコールの関係なので、be動詞のあとの補語になる動名詞である。主語がその動作を実際にしているかどうかで判断する。',
      },
    ],
  },

  {
    id: 'eigo_s317',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動名詞②：主語・補語になる動名詞',
    description: '文の先頭と be動詞のあとに置かれた動名詞を読み書きできるようにする',
    order: 817,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '主語の位置：Playing soccer is fun.（サッカーをすることは楽しい）',
      '補語の位置：My hobby is collecting stamps.（趣味は切手集めだ）',
      '主語には不定詞も使えるが、日常的なことがらは動名詞の方が自然。',
      '主語が動名詞のとき、動詞は単数扱い（is／was）。',
      '「趣味は〜です」「仕事は〜です」は動名詞で表すのが決まった言い方。',
    ],
    sections: [
      {
        heading: '主語になる動名詞',
        body: `動名詞を文の先頭に置くと、「〜することは」という主語になる。

例）Playing the piano is a lot of fun.（ピアノをひくことはとても楽しい）
例）Getting up early is good for your health.（早起きは健康によい）
例）Studying English every day is important.（毎日英語を勉強することは大切だ）
例）Walking in the park makes me happy.（公園を歩くとわたしは幸せな気持ちになる）

■ 不定詞との使い分け
To play the piano is fun. も文法的には正しいが、ふだんくり返し行うことがらや一般的なことがらは動名詞で表す方が自然である。逆に、これからの計画や一回きりのことは不定詞や It is ... to 〜 で表すことが多い。中学受験ではどちらも正解になるので、まず動名詞で書けるようにしておくとよい。

■ 主語の長さに注意して読む
例）Reading a lot of books when you are young is very important.
主語は Reading a lot of books when you are young までで、動詞は is である。動名詞が主語のときは、動詞（is・was など）が出てくるところまでが主語だと考える。

★ ポイント：文頭の 〜ing は、多くの場合「〜することは」という主語である。進行形の be動詞がないことを確かめる。`,
      },
      {
        heading: '補語になる動名詞',
        body: `be動詞のあとに動名詞を置くと、「主語＝〜すること」というイコール関係を作る。

例）My hobby is taking pictures.（わたしの趣味は写真をとることだ）
例）Her job is helping sick people.（彼女の仕事は病気の人を助けることだ）
例）The most important thing is doing your best.（最も大切なことは全力をつくすことだ）

■ 会話でよく出る言い方
例）What is your hobby? — My hobby is reading books.（趣味は何ですか。—読書です）
例）My favorite thing is playing with my dog.（いちばん好きなことは犬と遊ぶことだ）

■ 主語と補語を入れかえられる
例）My hobby is collecting stamps.
　＝ Collecting stamps is my hobby.
イコールの関係なので、前後を入れかえても意味は変わらない。

■ 進行形と区別する練習
例）He is teaching English now.（彼は今英語を教えている）… 進行形
例）His job is teaching English.（彼の仕事は英語を教えることだ）… 動名詞
主語が人で「今」を表す語があれば進行形、主語が job・hobby・dream などなら動名詞である。

⚠ 注意：My hobby is play tennis. は誤り。be動詞のあとに動詞の原形は置けない。playing（動名詞）か to play（不定詞）にする。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「わたしの趣味は音楽を聞くことです」',
        wrongAnswer: 'My hobby is listen to music.',
        trapExplanation:
          '「聞くこと」を listen とそのまま書いてしまう。be動詞のあとに動詞の原形を置くことはできないという原則が抜けている。',
        correctAnswer: 'My hobby is listening to music.',
        correctExplanation:
          'be動詞のあとには名詞・形容詞にあたるものしか置けないので、動詞は動名詞 listening にする。to listen to music（不定詞）でも文法的には正しいが、趣味を述べるときは動名詞を使うのがふつうである。listen to 〜（〜を聞く）の to も落とさないこと。',
      },
      {
        question: '（　）に適する語を入れなさい。Swimming in the sea (　) exciting.',
        wrongAnswer: 'are',
        trapExplanation:
          '主語がどれか判断できないまま、直前の名詞 the sea や、文が長いことから複数を感じ取って are を選んでしまう。',
        correctAnswer: 'is',
        correctExplanation:
          '主語は Swimming in the sea（海で泳ぐこと）というひとかたまりで、一つのことがらなので単数扱いになり is を使う。動名詞が主語のときの動詞は必ず単数形にする。',
      },
    ],
  },

  {
    id: 'eigo_s318',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動名詞③：目的語になる動名詞（enjoy・finish・stop）',
    description: '動名詞を目的語にとる代表的な動詞を、意味のまとまりで覚える',
    order: 818,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'enjoy 〜ing（〜して楽しむ）／finish 〜ing（〜し終える）／stop 〜ing（〜するのをやめる）。',
      'これらの動詞のあとに to＋原形は置けない。',
      'How about 〜ing?（〜はどうですか）は前置詞 about のあとなので動名詞。',
      'Thank you for 〜ing.（〜してくれてありがとう）も前置詞のあとなので動名詞。',
      '否定は not 〜ing の順（動名詞の直前に not）。',
    ],
    sections: [
      {
        heading: '動名詞を目的語にとる動詞',
        body: `次の動詞は、目的語に動名詞をとる。to＋原形を置くことはできない。

例）I enjoyed talking with you.（あなたと話せて楽しかった）
例）He finished doing his homework.（彼は宿題をし終えた）
例）She stopped watching TV.（彼女はテレビを見るのをやめた）
例）Would you mind opening the window?（窓を開けていただけませんか）
例）I gave up smoking.（たばこをやめた）
例）We practiced singing the song.（その歌を歌う練習をした）

■ 覚え方
enjoy（楽しむ）・finish（終える）・stop（やめる）・give up（あきらめる）・mind（いやがる）・practice（練習する）・avoid（さける）——どれも「すでに始めている、または現に行っていること」を目的語にしている点で共通する。これから先のことを表す不定詞とは向きが逆である。

■ 会話文でよく出る形
例）Did you enjoy watching the game?（試合を見て楽しかったですか）
例）Let\'s finish cleaning the room first.（まず部屋のそうじを終わらせよう）

★ ポイント：enjoy to play・finish to do は誤り。この三語（enjoy・finish・stop）は動名詞専用だと最初に固めておく。`,
      },
      {
        heading: '前置詞のあとの動名詞と決まり文句',
        body: `前置詞のあとに動詞を置くときは、必ず動名詞にする。これは例外のない規則である。

例）Thank you for helping me.（手伝ってくれてありがとう）
例）How about going shopping?（買い物に行くのはどうですか）
例）He is good at swimming.（彼は泳ぐのが得意だ）
例）She went out without saying goodbye.（彼女はさようならも言わずに出て行った）
例）Wash your hands before eating.（食べる前に手を洗いなさい）
例）After finishing lunch, we went out.（昼食を終えてから出かけた）

■ How about 〜? の about は前置詞
How about to go shopping? は誤りである。about のあとなので going にする。

■ look forward to 〜ing に注意
例）I\'m looking forward to seeing you.（あなたに会うのを楽しみにしています）
この to は不定詞の to ではなく前置詞の to なので、あとは 〜ing になる。上位校でねらわれる形である。

■ 動名詞の否定
例）I\'m sorry for not calling you.（電話しなくてごめんなさい）
not は動名詞のすぐ前に置く。

⚠ 注意：before・after・without・by・for・at・about・of はすべて前置詞である。これらのあとに動詞を置くときは 〜ing にする、と丸ごと覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適するものを選びなさい。I enjoyed (　) with my friends.　ア to talk　イ talking　ウ talk',
        wrongAnswer: 'ア to talk',
        trapExplanation:
          'want to・hope to のように「動詞＋to＋原形」の形を多く習っているため、enjoy でも同じように to を続けてしまう。',
        correctAnswer: 'イ talking',
        correctExplanation:
          'enjoy は目的語に動名詞しかとらない動詞である。enjoy to talk とは言えない。finish・stop・give up・mind・practice も同じ仲間なので、まとめて動名詞専用として覚える。',
      },
      {
        question: '誤りを直しなさい。How about to play tennis after school?',
        wrongAnswer: 'to play のままでよい',
        trapExplanation:
          '「テニスをするのはどう？」という誘いの意味から不定詞を選んでしまう。about が前置詞であることを見落としている。',
        correctAnswer: 'How about playing tennis after school?',
        correctExplanation:
          'about は前置詞なので、そのあとに動詞を置くときは必ず動名詞にする。同じ理由で Thank you for helping me.、He is good at playing the piano. も 〜ing になる。「前置詞のあとは 〜ing」は例外のない規則である。',
      },
    ],
  },

  {
    id: 'eigo_s319',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動名詞④：前置詞＋動名詞の重要表現',
    description: 'be good at 〜ing など、前置詞とセットで覚える表現を身につける',
    order: 819,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'be good at 〜ing（〜が得意だ）／be interested in 〜ing（〜に興味がある）。',
      'be afraid of 〜ing（〜するのをこわがる）／be proud of 〜ing（〜を誇りに思う）。',
      'without 〜ing（〜せずに）／before 〜ing（〜する前に）／after 〜ing（〜したあとで）。',
      'look forward to 〜ing の to は前置詞。to のあとが 〜ing になる例外的な形。',
      'How about 〜ing? / What about 〜ing?（〜はどうですか）は提案の決まり文句。',
    ],
    sections: [
      {
        heading: 'be動詞＋形容詞＋前置詞のセット',
        body: `形容詞と前置詞がセットになった表現は、後ろに動詞が来ると必ず動名詞になる。

例）She is good at cooking.（彼女は料理が得意だ）
例）I am interested in learning Chinese.（中国語を学ぶことに興味がある）
例）He is afraid of making mistakes.（彼はまちがえるのをこわがっている）
例）They are proud of winning the game.（彼らは試合に勝ったことを誇りに思っている）
例）I am tired of waiting.（待つのにうんざりしている）

■ 前置詞を落とさない
be good at のように、at まで含めて一つの表現である。She is good cooking. は誤り。前置詞と形容詞をセットで音読して覚えるとよい。

■ よく出る組み合わせ
be good at（得意）／be bad at（苦手）／be interested in（興味がある）／be afraid of（こわい）／be proud of（誇りに思う）／be tired of（あきている）／be fond of（好きだ）

■ 否定の形
例）I am not good at speaking in front of people.（人前で話すのが得意ではない）

★ ポイント：これらは受動態の be interested in 〜 とも重なる表現である。あとで受動態を学ぶときに、同じ形が出てくることを思い出せるようにしておく。`,
      },
      {
        heading: '時・方法を表す前置詞と動名詞',
        body: `時や方法を表す前置詞のあとでも、動詞は動名詞になる。

例）Wash your hands before eating lunch.（昼食を食べる前に手を洗いなさい）
例）After doing my homework, I watched TV.（宿題をしたあとテレビを見た）
例）He left without saying anything.（彼は何も言わずに出て行った）
例）You can improve your English by reading many books.（たくさん本を読むことで英語を上達させられる）
例）Thank you for inviting me.（招待してくれてありがとう）

■ by 〜ing は「〜することによって」
方法や手段を表す。入試の英作文でよく使う。
例）We can save water by turning off the tap.（じゃ口を閉めることで水を節約できる）

■ look forward to 〜ing の落とし穴
例）I\'m looking forward to seeing you again.（またお会いできるのを楽しみにしています）
この to は前置詞なので、後ろは動名詞になる。to see としてはいけない。手紙文・メール文の結びで頻出である。

■ 前置詞と不定詞の to を見分ける
不定詞の to のあとは原形、前置詞の to のあとは名詞か動名詞。to school（前置詞）／to go（不定詞）のように、後ろを見れば判断できる。

⚠ 注意：Thank you for to help me. は誤り。for は前置詞なので Thank you for helping me. とする。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する形を入れなさい。I\'m looking forward to (　) you next month.（see を使って）',
        wrongAnswer: 'see',
        trapExplanation:
          'to があるので不定詞だと考え、後ろを原形にしてしまう。look forward to の to が前置詞であることは形からは見分けにくいので、非常に多いまちがいである。',
        correctAnswer: 'seeing',
        correctExplanation:
          'look forward to 〜 の to は前置詞なので、後ろには名詞か動名詞しか置けない。look forward to the party（名詞）と同じ感覚で、動詞なら seeing にする。決まり文句として「to のあとは 〜ing」と覚えてしまう。',
      },
      {
        question: '日本語に合う英文にしなさい。「彼は何も言わずに部屋を出て行った」',
        wrongAnswer: 'He left the room without to say anything.',
        trapExplanation:
          '「言わずに」という否定的な意味から not to say を思いうかべ、without のあとに不定詞を続けてしまう。without が前置詞であることを見落としている。',
        correctAnswer: 'He left the room without saying anything.',
        correctExplanation:
          'without は前置詞なので、後ろの動詞は必ず動名詞にする。without 〜ing で「〜せずに」という意味になり、without 自体に否定の意味が入っているので not は不要である。',
      },
    ],
  },
  // ────── 7. 不定詞だけ／動名詞だけを目的語にとる動詞（s320〜s323） ──────
  {
    id: 'eigo_s320',
    subject: 'eigo',
    examType: 'chugaku',
    title: '目的語の形①：三つのグループに分ける',
    description: '不定詞専用・動名詞専用・どちらも可の動詞を分類して全体像をつかむ',
    order: 820,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '動詞は目的語の形で三つに分かれる：不定詞だけ・動名詞だけ・どちらもよい。',
      '不定詞だけ：want・hope・decide・promise・plan・wish・expect。',
      '動名詞だけ：enjoy・finish・stop・give up・mind・practice・avoid。',
      'どちらもよい：like・love・begin・start・continue。',
      '「これから」は不定詞、「すでに・現に」は動名詞、というイメージで整理する。',
    ],
    sections: [
      {
        heading: '三つのグループ',
        body: `動詞のあとに別の動詞を続けるとき、to＋原形にするか 〜ing にするかは、前の動詞によって決まっている。

■ ①不定詞だけをとる動詞
want（したい）・hope（願う）・decide（決める）・promise（約束する）・plan（計画する）・wish（望む）・expect（期待する）・need（必要とする）
例）I want to go home.（○）／I want going home.（×）

■ ②動名詞だけをとる動詞
enjoy（楽しむ）・finish（終える）・stop（やめる）・give up（あきらめる）・mind（いやがる）・practice（練習する）・avoid（さける）
例）I enjoy playing tennis.（○）／I enjoy to play tennis.（×）

■ ③どちらでもよい動詞
like（好む）・love（大好きだ）・begin（始める）・start（始める）・continue（続ける）
例）I like to swim. ＝ I like swimming.（泳ぐのが好きだ）
例）It began to rain. ＝ It began raining.（雨が降り始めた）

■ 意味で覚える
不定詞専用の動詞は「まだしていない、これからのこと」を目的語にする。動名詞専用の動詞は「すでに始めていること・現にしていること」を目的語にする。この向きのちがいを意識すると、覚えていない動詞でも推測できる。

★ ポイント：まず①と②の代表七語ずつを完全に暗記する。入試ではほぼこの範囲から出る。`,
        figureId: 'lf_eigoext09_320',
      },
      {
        heading: '空所補充問題の解き方',
        body: `入試では「（　）内の語を適する形にしなさい」という形で出る。手順は決まっている。

■ 手順
①（　）の直前の動詞を確認する
②その動詞がどのグループかを思い出す
③不定詞専用なら to＋原形、動名詞専用なら 〜ing にする

例）She finished (write) the letter. → 動名詞専用 → writing
例）They decided (visit) Kyoto. → 不定詞専用 → to visit
例）He likes (play) the guitar. → どちらも可 → to play でも playing でもよい

■ 前置詞の直後は無条件で動名詞
例）He is good at (cook). → cooking
例）Thank you for (invite) me. → inviting
動詞のグループを考える必要すらない。前置詞が見えたら 〜ing である。

■ まちがえやすい組み合わせ
例）I hope to see you.（○）／I hope seeing you.（×）
例）Would you mind opening the window?（○）／Would you mind to open 〜?（×）
例）We practiced playing the song.（○）／We practiced to play 〜（×）

⚠ 注意：need は「必要とする」の意味では不定詞をとる（I need to sleep.）。物を主語にした need 〜ing（The car needs washing.）は高校で学ぶ形なので、中学受験では不定詞で覚えておけばよい。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内を適する形にしなさい。He finished (read) the book last night.',
        wrongAnswer: 'to read',
        trapExplanation:
          '「読み終えた」という日本語から「読むことを終えた」と考え、目的語を to read という不定詞にしてしまう。want to の形に引っぱられるのが原因である。',
        correctAnswer: 'reading',
        correctExplanation:
          'finish は動名詞だけを目的語にとる動詞である。finish to read とは言えない。enjoy・stop・give up・mind・practice・avoid も同じ仲間なので、七語をまとめて覚えておく。',
      },
      {
        question: '（　）内を適する形にしなさい。They decided (go) to the museum.',
        wrongAnswer: 'going',
        trapExplanation:
          '直前に動詞があるから 〜ing にするのだろうと形だけで判断してしまう。decide がどのグループかを確かめていない。',
        correctAnswer: 'to go',
        correctExplanation:
          'decide は不定詞だけを目的語にとる動詞である。「行くことに決めた」というのはこれから行うことなので、未来向きの不定詞が合う。want・hope・promise・plan・wish・expect も同じ仲間である。',
      },
    ],
  },

  {
    id: 'eigo_s321',
    subject: 'eigo',
    examType: 'chugaku',
    title: '目的語の形②：動名詞だけをとる動詞',
    description: 'enjoy・finish・stop・give up・mind・practice・avoid を確実にする',
    order: 821,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '動名詞専用：enjoy・finish・stop・give up・mind・practice・avoid・keep。',
      'Would you mind 〜ing? は「〜していただけませんか」というていねいな依頼。',
      'mind の質問に「いいですよ」と答えるときは No, not at all. などと否定で答える。',
      'keep 〜ing は「〜し続ける」。',
      'これらの動詞に to＋原形を続けたら必ず誤りになる。',
    ],
    sections: [
      {
        heading: '動名詞専用の動詞をまとめて覚える',
        body: `次の動詞は、目的語に動名詞しかとらない。

例）We enjoyed swimming in the sea.（海で泳いで楽しんだ）
例）Have you finished cleaning your room?（部屋のそうじは終わりましたか）
例）Stop talking, please.（話すのをやめてください）
例）He gave up trying to fix it.（彼はそれを直そうとするのをあきらめた）
例）She practices playing the violin every day.（彼女は毎日バイオリンの練習をする）
例）You should avoid eating too much.（食べすぎはさけるべきだ）
例）The baby kept crying all night.（赤ちゃんは一晩じゅう泣き続けた）

■ 共通するイメージ
楽しむ・終える・やめる・あきらめる・練習する・さける・続ける——どれも「すでに行っていること」や「くり返し行うこと」を対象にしている。だから、実際に行われている感じの強い動名詞が合う。

■ keep 〜ing
例）Keep going straight.（まっすぐ進み続けてください）
道案内でよく使う。

★ ポイント：enjoy to play・finish to do・stop to talk（別の意味になる）などは入試の定番のひっかけである。`,
      },
      {
        heading: 'Would you mind 〜ing? の受け答え',
        body: `mind はもともと「いやだと思う」という意味の動詞である。この意味を知らないと、答え方をまちがえる。

例）Would you mind opening the window?
　直訳：窓を開けることをいやだと思いますか
　意味：窓を開けていただけませんか

■ 答え方
承知するとき：No, not at all.（いいえ、まったくかまいません）／ Of course not.／ Certainly.
断るとき：I\'m sorry, but I have a cold.（すみませんが、かぜをひいているので）

「いいですよ」と引き受けるのに No で答えるのは、「いやだと思いますか」に対して「いやではありません」と答えているからである。

■ Do you mind 〜? も同じ
例）Do you mind waiting a few minutes?（数分待っていただけますか）
— Not at all.（かまいませんよ）

■ ていねいさの比較
Please open the window.（ふつう）
Can you open the window?（親しい相手に）
Could you open the window?（ていねい）
Would you mind opening the window?（最もていねい）

⚠ 注意：Would you mind to open the window? は誤り。mind は動名詞専用なので opening にする。`,
      },
    ],
    trapExamples: [
      {
        question: 'Would you mind closing the door? に対し「いいですよ」と答えるとき、適切なものはどれか。　ア Yes, I do.　イ No, not at all.',
        wrongAnswer: 'ア Yes, I do.',
        trapExplanation:
          '「いいですよ」＝Yes と考えてしまう。しかし mind は「いやだと思う」という意味なので、Yes と答えると「いやです」という断りになってしまう。',
        correctAnswer: 'イ No, not at all.',
        correctExplanation:
          'Would you mind 〜ing? は「〜するのをいやだと思いますか」という質問である。引き受けるときは「いやではありません」＝No, not at all. や Of course not. と答える。日本語の「はい・いいえ」と逆になる代表的な表現である。',
      },
      {
        question: '（　）内を適する形にしなさい。The children kept (play) in the rain.',
        wrongAnswer: 'to play',
        trapExplanation:
          '「遊び続けた」を「遊ぶことを続けた」と考えて不定詞にしてしまう。keep が動名詞専用であることを知らないと起こるまちがいである。',
        correctAnswer: 'playing',
        correctExplanation:
          'keep 〜ing で「〜し続ける」という意味になる。keep to play とは言えない。すでに行っている動作が続いていることを表すので、動名詞が合う。同じ仲間の enjoy・finish・stop・give up・mind・practice・avoid もあわせて確認する。',
      },
    ],
  },

  {
    id: 'eigo_s322',
    subject: 'eigo',
    examType: 'chugaku',
    title: '目的語の形③：不定詞だけをとる動詞',
    description: 'want・hope・decide・promise・plan・wish・expect を確実にする',
    order: 822,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '不定詞専用：want・hope・decide・promise・plan・wish・expect・agree・refuse。',
      'want 人 to 〜（人に〜してほしい）という形も重要。',
      'tell 人 to 〜（〜するように言う）／ask 人 to 〜（〜するよう頼む）。',
      'これらの動詞に 〜ing を続けたら誤りになる。',
      'want 人 to 〜 と hope の形のちがいに注意（hope 人 to 〜 は不可）。',
    ],
    sections: [
      {
        heading: '不定詞専用の動詞と「人＋to」の形',
        body: `次の動詞は、目的語に不定詞しかとらない。どれも「これからのこと」を表す。

例）I want to be a scientist.（科学者になりたい）
例）We hope to see you soon.（すぐにお会いできることを願っています）
例）He decided to study abroad.（彼は留学することに決めた）
例）She promised to come early.（彼女は早く来ると約束した）
例）They plan to build a new library.（彼らは新しい図書館を建てる計画だ）
例）I expect to arrive at six.（六時に着く見こみだ）

■ 「人に〜してほしい」の形
例）I want you to help me.（あなたに手伝ってほしい）
例）My mother told me to clean my room.（母はわたしに部屋をそうじするように言った）
例）He asked me to open the door.（彼はわたしにドアを開けるよう頼んだ）
「動詞＋人＋to＋原形」の順に並べる。この形をとる動詞は want・tell・ask が代表である。

■ 訳し分け
want 人 to 〜：〜してほしい
tell 人 to 〜：〜するように言う（命令に近い）
ask 人 to 〜：〜するよう頼む（お願い）

★ ポイント：「人＋to」の形をとれるのは want・tell・ask など。hope はこの形をとれないので、hope you to 〜 は誤りである。`,
      },
      {
        heading: '否定と、命令文の書きかえ',
        body: `「人に〜しないように言う」は、not を to の前に置く。

例）My mother told me not to go out at night.（母はわたしに夜に外出しないように言った）
例）He asked me not to tell anyone.（彼はだれにも言わないでほしいと頼んだ）

■ 命令文からの書きかえ
例）She said to me, "Open the window."
　→ She told me to open the window.（彼女はわたしに窓を開けるように言った）
例）He said to me, "Don\'t be late."
　→ He told me not to be late.（彼はわたしに遅れないように言った）
命令文が肯定なら to＋原形、否定なら not to＋原形になる。

例）"Please help me," he said to me.
　→ He asked me to help him.（彼はわたしに手伝ってくれるよう頼んだ）
please が付いた依頼の命令文は ask を使い、代名詞は me → him のように変える。

■ 主語の変化に注意
書きかえたとき、もとの文の me や him がだれを指すかが変わることがある。「だれがだれに何をするのか」を必ず確かめる。

⚠ 注意：told me to not go out のように not を to のあとに置くのは誤り。not は必ず to の前である。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文にしなさい。「わたしは彼に手伝ってほしい」',
        wrongAnswer: 'I want he to help me.',
        trapExplanation:
          '「彼に」の部分をそのまま主格 he で書いてしまう。want のあとの人は目的語なので目的格にしなければならない。',
        correctAnswer: 'I want him to help me.',
        correctExplanation:
          'want 人 to 〜 の「人」は目的語の位置なので目的格にする。he → him、she → her、they → them、I → me。同じ形の tell him to 〜、ask her to 〜 も同様である。',
      },
      {
        question: '命令文を書きかえなさい。My father said to me, "Don\'t watch TV before dinner."',
        wrongAnswer: 'My father told me to don\'t watch TV before dinner.',
        trapExplanation:
          'もとの命令文の Don\'t をそのまま残してしまう。「to＋原形」の形の中に don\'t を入れることはできない。',
        correctAnswer: 'My father told me not to watch TV before dinner.',
        correctExplanation:
          '否定の命令文を書きかえるときは、don\'t を消して not を to の前に置く。「told 人 not to＋原形」が決まった形である。not to watch の順序（not が先）も重要である。',
      },
    ],
  },

  {
    id: 'eigo_s323',
    subject: 'eigo',
    examType: 'chugaku',
    title: '目的語の形④：意味が変わる stop・remember・forget・try',
    description: '不定詞と動名詞で意味が変わる動詞を、時間の向きで整理する',
    order: 823,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'stop to 〜＝〜するために立ち止まる／stop 〜ing＝〜するのをやめる。',
      'remember to 〜＝忘れずに〜する／remember 〜ing＝〜したことを覚えている。',
      'forget to 〜＝〜するのを忘れる／forget 〜ing＝〜したことを忘れる。',
      'try to 〜＝〜しようと努力する／try 〜ing＝ためしに〜してみる。',
      '不定詞は「これから」、動名詞は「すでに・実際に」の向きを表す。',
    ],
    sections: [
      {
        heading: '時間の向きで区別する',
        body: `同じ動詞でも、後ろが不定詞か動名詞かで意味が変わるものがある。区別のかぎは「時間の向き」である。不定詞はこれからのこと、動名詞はすでにしたこと・現にしていることを指す。

■ stop
例）He stopped to smoke.（彼はたばこを吸うために立ち止まった）… これから吸う
例）He stopped smoking.（彼はたばこを吸うのをやめた）… もう吸わない
stop to 〜 の不定詞は目的語ではなく、目的を表す副詞的用法である。

■ remember
例）Remember to lock the door.（忘れずにドアにかぎをかけなさい）… これからかける
例）I remember locking the door.（ドアにかぎをかけたことを覚えている）… すでにかけた

■ forget
例）Don\'t forget to call me.（電話するのを忘れないで）… これからかける
例）I\'ll never forget visiting Kyoto.（京都を訪れたことを決して忘れない）… すでに訪れた

■ try
例）I tried to open the window.（窓を開けようとした）… 努力したができなかった感じ
例）I tried opening the window.（ためしに窓を開けてみた）… 実際に開けた

★ ポイント：不定詞＝未来向き、動名詞＝過去・現実向き。この一本の軸で四つの動詞をまとめて整理できる。`,
        figureId: 'lf_eigoext09_323',
      },
      {
        heading: '文脈から判断する練習',
        body: `試験では、前後の文から時間の向きを読み取って選ぶ問題が出る。

例）I remember (see) him somewhere before.
　before（以前に）があるので、すでに会ったこと → seeing

例）Please remember (bring) your umbrella tomorrow.
　tomorrow（明日）があるので、これから持ってくること → to bring

例）She stopped (talk) when the teacher came in.
　先生が入ってきて話すのをやめた → talking

例）He stopped (buy) a drink on his way home.
　飲み物を買うために立ち止まった → to buy

■ 手がかりになる語
before・yesterday・last week → 動名詞（すでにしたこと）
tomorrow・next time・don\'t forget → 不定詞（これからのこと）

■ 訳の確認
迷ったら両方の訳を作ってみて、文脈に合う方を選ぶ。「彼はたばこを吸うために立ち止まった」と「彼はたばこをやめた」では、話の流れがまったくちがう。

⚠ 注意：stop to 〜 の to＋原形は目的語ではないので、「〜することをやめる」という意味には絶対にならない。「やめる」と言いたいときは必ず stop 〜ing である。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に直しなさい。My father stopped smoking last year.',
        wrongAnswer: '父は去年たばこを吸うために立ち止まった。',
        trapExplanation:
          'stop to 〜 と stop 〜ing の区別があいまいなまま、stop を「立ち止まる」の意味に取ってしまう。last year という語とも合わない訳になる。',
        correctAnswer: '父は去年たばこをやめた。',
        correctExplanation:
          'stop 〜ing は「（すでにしていたことを）やめる」という意味である。stop to 〜 なら「〜するために立ち止まる」で、この to＋原形は目的を表す副詞的用法になる。動名詞は「すでに行っていること」を指す、という向きで覚える。',
      },
      {
        question: '（　）内を適する形にしなさい。Don\'t forget (post) this letter tomorrow.',
        wrongAnswer: 'posting',
        trapExplanation:
          'forget 〜ing（〜したことを忘れる）の形を覚えていると、意味を確かめずに動名詞を選んでしまう。tomorrow という語を見落としている。',
        correctAnswer: 'to post',
        correctExplanation:
          'tomorrow があるので、これから出す手紙のことである。「これから〜するのを忘れない」は forget to 〜 を使う。forget 〜ing は「（過去に）〜したことを忘れる」で、I\'ll never forget seeing him.（彼に会ったことを忘れない）のように使う。',
      },
    ],
  },

  // ────── 8. 現在分詞・過去分詞の形容詞用法（s324〜s327） ──────
  {
    id: 'eigo_s324',
    subject: 'eigo',
    examType: 'chugaku',
    title: '分詞①：現在分詞が名詞の前に付く（a sleeping baby）',
    description: '〜ing 一語が名詞を前から修飾する形をつかむ',
    order: 824,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '現在分詞（〜ing）は「〜している」という意味で名詞を説明する。',
      '一語だけのときは名詞の前に置く（a sleeping baby＝眠っている赤ちゃん）。',
      'a running boy（走っている少年）／a crying child（泣いている子ども）。',
      '動名詞の 〜ing（〜すること）とは意味がちがう（a sleeping bag＝寝袋）。',
      '進行形（be動詞＋〜ing）とも区別する。前に be動詞があるかを確かめる。',
    ],
    sections: [
      {
        heading: '「〜している○○」の言い方',
        body: `動詞に ing を付けた形（現在分詞）は、「〜している」という意味で名詞を説明できる。説明する語が一語だけのときは、形容詞と同じように名詞の前に置く。

例）Look at the sleeping baby.（眠っている赤ちゃんを見て）
例）The running boy is my brother.（走っている少年はわたしの弟だ）
例）I heard a crying child.（泣いている子どもの声が聞こえた）
例）Don\'t touch the burning candle.（燃えているろうそくにさわらないで）

■ 形容詞と同じ位置
a big house（大きな家）の big と同じ位置に sleeping が入る、と考えればよい。
a big baby（大きな赤ちゃん）／a sleeping baby（眠っている赤ちゃん）

■ 進行形との区別
例）The baby is sleeping.（赤ちゃんは眠っている）… 進行形の文
例）the sleeping baby（眠っている赤ちゃん）… 名詞のかたまり
進行形は be動詞とセットで文の動詞になる。分詞の形容詞用法は be動詞を伴わず、名詞にくっついてかたまりを作る。

★ ポイント：〜ing のあとに名詞が続いていて、その前に be動詞がなければ、その 〜ing は名詞を説明する現在分詞である。`,
        figureId: 'lf_eigoext09_324',
      },
      {
        heading: '動名詞が名詞に付く場合との区別',
        body: `〜ing ＋ 名詞の形には、実は二種類ある。

■ 現在分詞：「〜している○○」
例）a sleeping baby（眠っている赤ちゃん）… 赤ちゃんが眠っている
例）a swimming boy（泳いでいる少年）… 少年が泳いでいる

■ 動名詞：「〜するための○○」（用途を表す）
例）a sleeping bag（寝袋）… ふくろが眠っているのではない
例）a swimming pool（プール）… プールが泳いでいるのではない
例）a waiting room（待合室）／a shopping bag（買い物ぶくろ）

■ 見分け方
「その名詞が〜している」と言えるなら現在分詞、「〜するための道具・場所」なら動名詞である。
　The baby is sleeping.（○）→ a sleeping baby は現在分詞
　The bag is sleeping.（×）→ a sleeping bag は動名詞

■ 訳し方の注意
a sleeping bag を「眠っているふくろ」と訳すと意味が通らない。おかしいと感じたら、用途を表す動名詞ではないかを疑う。

⚠ 注意：中学受験ではこの区別を細かく問われることは少ないが、a swimming pool・a shopping mall などの語を「泳いでいるプール」と読まないよう、意味で確かめる習慣をつけておく。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に直しなさい。The crying girl is my sister.',
        wrongAnswer: '泣いている女の子はわたしの姉妹である。（The girl is crying. と同じ文だと考える）',
        trapExplanation:
          '訳自体はほぼ合っていても、crying を文の動詞だと考えると、is my sister との関係が説明できなくなる。進行形と分詞の区別ができていないと、長い文で必ず行きづまる。',
        correctAnswer: '泣いている女の子はわたしの妹（姉）だ。The crying girl までが主語、is が動詞。',
        correctExplanation:
          'crying は The girl を前から説明する現在分詞で、The crying girl 全体が主語になっている。文の動詞は is である。進行形なら The girl is crying. のように be動詞が 〜ing の直前に来る。文の骨組みを見つける練習として重要である。',
      },
      {
        question: '日本語に直しなさい。I bought a new sleeping bag.',
        wrongAnswer: 'わたしは新しい眠っているふくろを買った。',
        trapExplanation:
          '〜ing ＋ 名詞をすべて「〜している○○」と訳してしまう。ふくろが眠るはずがないのに、形だけで機械的に処理している。',
        correctAnswer: 'わたしは新しい寝袋を買った。',
        correctExplanation:
          'a sleeping bag の sleeping は「眠るための」という用途を表す動名詞である。「その名詞が〜している」と言えるかどうかで判断する。a swimming pool（泳ぐためのプール）、a waiting room（待つための部屋）も同じ形である。',
      },
    ],
  },

  {
    id: 'eigo_s325',
    subject: 'eigo',
    examType: 'chugaku',
    title: '分詞②：二語以上は名詞の後ろ（the boy running in the park）',
    description: '現在分詞のかたまりが名詞を後ろから説明する形を読めるようにする',
    order: 825,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '現在分詞に語句が付いて二語以上になったら、名詞の後ろに置く。',
      'the boy running in the park（公園で走っている少年）。',
      '日本語に訳すときは後ろから前へ訳し上げる。',
      '主語が長くなるので、文の動詞がどれかを見きわめる必要がある。',
      '関係代名詞を使った文（the boy who is running）とほぼ同じ意味になる。',
    ],
    sections: [
      {
        heading: '後ろから説明するかたまり',
        body: `現在分詞に語句が付いて長くなると、名詞の後ろに回る。英語の大原則「一語は前、二語以上は後ろ」のとおりである。

例）The boy running in the park is my brother.（公園で走っている少年はわたしの弟だ）
例）Do you know the girl playing the piano?（ピアノをひいている女の子を知っていますか）
例）The man standing by the door is our teacher.（ドアのそばに立っている男の人はわたしたちの先生だ）
例）Look at the cat sleeping on the sofa.（ソファの上で眠っているねこを見て）

■ 前と後ろの対応
a sleeping baby（一語→前）
the baby sleeping in the bed（三語→後ろ）
同じ sleeping でも、後ろに語句が付くかどうかで位置が変わる。

■ 訳し上げる
The boy running in the park → 公園で走っている少年
英語では「少年 ← 公園で走っている」の順、日本語では逆になる。

★ ポイント：名詞のすぐ後ろに 〜ing が来て、その前に be動詞がなければ、そこから後ろは名詞の説明である。`,
      },
      {
        heading: '文の動詞を見つける',
        body: `分詞のかたまりが主語に付くと、主語が長くなって動詞が遠くなる。読解でつまずく最大の原因なので、切り分けの練習をする。

例）The students studying in the library are my classmates.
　主語：The students studying in the library（図書館で勉強している生徒たち）
　動詞：are
　訳：図書館で勉強している生徒たちはわたしのクラスメートだ。

例）The woman talking with my mother is a doctor.
　主語：The woman talking with my mother
　動詞：is
　訳：母と話している女性は医者だ。

■ 手順
①文の先頭から名詞を見つける
②その直後に 〜ing があれば、説明のかたまりが始まったと考える
③次に出てくる be動詞や一般動詞が、文の本当の動詞である

■ 関係代名詞との関係
例）The boy running in the park ＝ The boy who is running in the park
分詞は関係代名詞＋be動詞を省いた形と考えることもできる。あとの単元で学ぶ関係代名詞とつながる大切な見方である。

⚠ 注意：The boy running in the park is my brother. を「少年は公園で走っている」と読むと、後ろの is my brother が宙にういてしまう。動詞が二つあるように見えたら、前の 〜ing は説明のかたまりだと考える。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に直しなさい。The girl singing on the stage is my sister.',
        wrongAnswer: '女の子はステージの上で歌っていて、わたしの姉だ。',
        trapExplanation:
          'singing を文の動詞だと考えて進行形のように訳し、そのあとの is my sister を無理につなげてしまう。be動詞がないことに気づいていない。',
        correctAnswer: 'ステージの上で歌っている女の子はわたしの姉だ。',
        correctExplanation:
          'singing の前に be動詞がないので、これは The girl を後ろから説明する現在分詞である。The girl singing on the stage までが主語で、文の動詞は is。「名詞＋〜ing」で be動詞がなければ説明のかたまりだと判断する。',
      },
      {
        question: '日本語に合うように並べかえなさい。「向こうで走っている犬はわたしのです」　running / the / over there / dog / is / mine',
        wrongAnswer: 'The running over there dog is mine.',
        trapExplanation:
          '「一語なら名詞の前」というルールだけを覚えていて、running に over there が付いて二語以上になっていることを見落としてしまう。',
        correctAnswer: 'The dog running over there is mine.',
        correctExplanation:
          '説明が二語以上のかたまりになったら、名詞の後ろに置く。running over there は三語のかたまりなので The dog の後ろに回す。前に置けるのは a running dog のように分詞が一語のときだけである。',
      },
    ],
  },

  {
    id: 'eigo_s326',
    subject: 'eigo',
    examType: 'chugaku',
    title: '分詞③：過去分詞が名詞を説明する（〜される・〜された）',
    description: '過去分詞の形容詞用法を、前置と後置の両方でおさえる',
    order: 826,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '過去分詞は「〜される・〜された」という受け身の意味で名詞を説明する。',
      '一語なら名詞の前（a broken window＝こわれた窓）。',
      '二語以上なら名詞の後ろ（a letter written in English＝英語で書かれた手紙）。',
      '規則動詞の過去分詞は 〜ed、不規則動詞は個別に覚える（write－wrote－written）。',
      '現在分詞は「する側」、過去分詞は「される側」を表す。',
    ],
    sections: [
      {
        heading: '「〜された○○」の言い方',
        body: `過去分詞を名詞に付けると、「〜される」「〜された」という受け身の意味を表す。

■ 一語なら前
例）a broken window（こわれた窓）
例）a used car（中古車＝使われた車）
例）boiled eggs（ゆで卵＝ゆでられた卵）
例）fried chicken（フライドチキン＝油であげられたとり肉）

■ 二語以上なら後ろ
例）This is a letter written in English.（これは英語で書かれた手紙だ）
例）The book read by many people is famous.（多くの人に読まれているその本は有名だ）
例）I like the picture painted by Picasso.（ピカソによってかかれたその絵が好きだ）
例）The language spoken in Brazil is Portuguese.（ブラジルで話されている言語はポルトガル語だ）

■ 過去分詞の作り方
規則動詞：play → played／use → used／cook → cooked
不規則動詞：write → written／break → broken／speak → spoken／take → taken／make → made／see → seen／know → known／build → built

★ ポイント：過去分詞は受動態でも使うので、不規則動詞の変化表（原形・過去形・過去分詞）を必ず覚えておく。`,
        figureId: 'lf_eigoext09_326',
      },
      {
        heading: '過去形と過去分詞を混同しない',
        body: `過去分詞は過去形とは別物である。形が同じ動詞が多いので、位置で判断する。

例）I read the book written by him.（彼によって書かれた本を読んだ）
文の動詞は read（過去形）、written は the book を説明する過去分詞である。

例）The window broken by the boy was mine.（その少年にこわされた窓はわたしのものだった）
主語は The window broken by the boy、動詞は was である。broken を文の動詞と読んでしまうと、was の行き場がなくなる。

■ 規則動詞では形が同じ
例）The car used by my father is old.（父が使っている車は古い）
used は過去形とも過去分詞とも同じ形だが、あとに was／is などの動詞が続くことから、ここでは過去分詞だとわかる。

■ 判断の手順
①名詞のすぐあとに動詞らしい語があるか
②その語のあとにもう一つ動詞（is・was・are など）があるか
③あれば、最初の語は名詞を説明する分詞である

⚠ 注意：I know a boy called Ken.（ケンと呼ばれている少年を知っている）のように、called＝「〜と呼ばれる」の形は入試頻出である。call－called－called と変化する規則動詞である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内を適する形にしなさい。This is a book (write) by Natsume Soseki.',
        wrongAnswer: 'writing',
        trapExplanation:
          '分詞といえば 〜ing と覚えてしまい、本が「書く側」なのか「書かれる側」なのかを考えずに現在分詞を選んでしまう。',
        correctAnswer: 'written',
        correctExplanation:
          '本は書かれるものなので、受け身の意味を表す過去分詞 written を使う。write－wrote－written と変化する不規則動詞である。「〜している」なら現在分詞、「〜される・された」なら過去分詞、と意味で選ぶ。',
      },
      {
        question: '日本語に直しなさい。The letter written in French was difficult to read.',
        wrongAnswer: 'その手紙はフランス語で書いた、そして読むのが難しかった。',
        trapExplanation:
          'written を文の動詞（過去形）だと考えてしまい、そのあとの was の位置づけができなくなる。分詞のかたまりが主語に付いていることを見落としている。',
        correctAnswer: 'フランス語で書かれたその手紙は読むのが難しかった。',
        correctExplanation:
          'written in French は The letter を後ろから説明する過去分詞のかたまりで、主語は The letter written in French、文の動詞は was である。動詞らしい語が二つ並んだら、前の方が分詞ではないかを疑う。',
      },
    ],
  },

  {
    id: 'eigo_s327',
    subject: 'eigo',
    examType: 'chugaku',
    title: '分詞④：現在分詞と過去分詞の使い分け',
    description: '「する側」か「される側」かで分詞を選べるようにする',
    order: 827,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '説明される名詞が動作をする側なら現在分詞（〜ing）。',
      '説明される名詞が動作をされる側なら過去分詞。',
      'the boy calling my name（わたしの名を呼んでいる少年）／the boy called Ken（ケンと呼ばれる少年）。',
      'exciting（わくわくさせる）と excited（わくわくした）の使い分けも同じ考え方。',
      '迷ったら「名詞は〜しているのか、〜されるのか」と日本語で確かめる。',
    ],
    sections: [
      {
        heading: 'する側か、される側か',
        body: `現在分詞と過去分詞のどちらを使うかは、説明される名詞と動作の関係で決まる。

■ 名詞が動作をする側 → 現在分詞
例）the boy calling my name（わたしの名を呼んでいる少年）… 少年が呼んでいる
例）the girl reading a book（本を読んでいる女の子）… 女の子が読んでいる
例）the dog running in the yard（庭を走っている犬）

■ 名詞が動作をされる側 → 過去分詞
例）the boy called Ken（ケンと呼ばれている少年）… 少年が呼ばれている
例）the book read by many people（多くの人に読まれる本）
例）the window broken by the ball（ボールでこわされた窓）

■ 同じ動詞で見くらべる
例）the man teaching English（英語を教えている男の人）
例）English taught by him（彼によって教えられている英語）
同じ teach でも、主語になる名詞が教える側か教えられる側かで形が変わる。

■ 確かめ方
名詞を主語にして文を作ってみる。
　The boy calls my name.（少年が呼ぶ）→ 現在分詞 calling
　The boy is called Ken.（少年が呼ばれる）→ 過去分詞 called

★ ポイント：「する側＝〜ing」「される側＝過去分詞」。この一行が分詞の全部である。`,
      },
      {
        heading: 'exciting と excited',
        body: `感情を表す語にも、同じ「する側・される側」の考え方が当てはまる。

■ 〜ing：まわりをそういう気持ちにさせる
例）The game was exciting.（その試合はわくわくさせるものだった＝おもしろかった）
例）This is an interesting book.（これはおもしろい本だ）
例）The news was surprising.（その知らせは驚くべきものだった）

■ 過去分詞：人がそういう気持ちにさせられた
例）I was excited.（わたしはわくわくした）
例）I am interested in science.（わたしは科学に興味がある）
例）We were surprised at the news.（わたしたちはその知らせに驚いた）

■ 使い分けのこつ
人が主語なら過去分詞、ものごとが主語なら 〜ing になることが多い。
例）I was bored.（退屈した）／The movie was boring.（その映画は退屈だった）
「I am boring.」と書くと「わたしは退屈な人間だ」という意味になってしまう。

■ 前置詞とセットで覚える
be interested in（〜に興味がある）／be surprised at（〜に驚く）／be excited about（〜にわくわくする）

⚠ 注意：I am interesting in music. は誤り。「わたしが興味を持っている」のだから I am interested in music. とする。この一語のちがいで意味が正反対になる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内を適する形にしなさい。I know the girl (call) Mary.',
        wrongAnswer: 'calling',
        trapExplanation:
          '「〜している」の形をとりあえず選んでしまい、少女が呼んでいるのか呼ばれているのかを考えない。calling Mary だと「メアリーを呼んでいる少女」となり、意味が変わる。',
        correctAnswer: 'called',
        correctExplanation:
          '「メアリーと呼ばれている少女」なので、される側を表す過去分詞 called を使う。the girl calling Mary（メアリーを呼んでいる少女）とはまったく別の意味になるので、名詞が「する側」か「される側」かを必ず確かめる。',
      },
      {
        question: '（　）に適する語を入れなさい。I am (　) in Japanese history.（日本の歴史に興味がある）',
        wrongAnswer: 'interesting',
        trapExplanation:
          '「おもしろい」＝interesting と覚えているため、興味を持っているのが自分であることを考えずに 〜ing を選んでしまう。',
        correctAnswer: 'interested',
        correctExplanation:
          '人が興味を持たされている側なので過去分詞 interested を使い、be interested in 〜 の形にする。interesting は「（まわりを）おもしろがらせる」という意味で、Japanese history is interesting. のようにものごとを主語にして使う。',
      },
    ],
  },
  // ────── 9. 関係代名詞 who / which / that（s328〜s332） ──────
  {
    id: 'eigo_s328',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係代名詞①：二つの文を一つにする（主格の who）',
    description: '関係代名詞のはたらきを理解し、人を先行詞とする主格の who を使えるようにする',
    order: 828,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '関係代名詞は「代名詞」と「接着剤」の二役を同時に果たす語。',
      '説明される名詞を先行詞といい、関係代名詞はそのすぐ後ろに置く。',
      '先行詞が人で、あとに動詞が続くときは主格の who を使う。',
      'who のあとの動詞は、先行詞の数に合わせる（a boy who plays／boys who play）。',
      '関係詞のかたまりは、名詞を後ろから説明する（英語の大原則どおり）。',
    ],
    sections: [
      {
        heading: '二つの文をつなぐしくみ',
        body: `次の二つの文を、一つにまとめてみる。

　I know a boy.（わたしはある少年を知っている）
　He plays the piano well.（彼はピアノを上手にひく）

二つ目の文の He は、一つ目の a boy を指している。この He を who に変えて、a boy のすぐ後ろにくっつける。

　→ I know a boy who plays the piano well.（わたしはピアノを上手にひく少年を知っている）

■ 関係代名詞の二つの役目
①代名詞の役目：He の代わりをして、あとの文の主語になっている
②接着剤の役目：二つの文をつなげている
この二役を同時に果たすので「関係代名詞」という。

■ 先行詞
説明される名詞（この文では a boy）を先行詞という。関係代名詞は必ず先行詞のすぐ後ろに置く。

■ もっと例を見る
例）The girl who won the race is my friend.（レースに勝った女の子はわたしの友だちだ）
例）I have a friend who lives in America.（アメリカに住んでいる友だちがいる）
例）Do you know the man who is talking with Ken?（ケンと話している男の人を知っていますか）

★ ポイント：who のあとには必ず動詞が来る。これが主格の目印である。`,
        figureId: 'lf_eigoext09_328',
      },
      {
        heading: '動詞の形を先行詞に合わせる',
        body: `who のあとの動詞は、先行詞の人称と数に合わせる。ここが入試でよくねらわれる。

例）I have a friend who lives in Osaka.（大阪に住んでいる友だちが一人いる）
　先行詞 a friend は単数 → lives（s が付く）
例）I have friends who live in Osaka.（大阪に住んでいる友だちがいる）
　先行詞 friends は複数 → live（s は付かない）

■ 時制もそろえる
例）I met a girl who was from Canada.（カナダ出身の女の子に会った）
文全体が過去なので、関係詞のあとの動詞も過去にする。

■ 主語が長くなる文
例）The students who study hard get good grades.
　主語：The students who study hard（一生けんめい勉強する生徒たち）
　動詞：get
関係詞のかたまりが主語に付くと動詞が遠くなる。二つ目の動詞が文全体の動詞である。

■ 訳し上げる
The man who lives next door is a teacher.
→ となりに住んでいる男の人は先生だ。
関係詞のかたまりは、日本語では名詞の前に置いて訳す。

⚠ 注意：I know a boy who he plays the piano. は誤り。who がすでに主語のはたらきをしているので、he を重ねて書いてはいけない。`,
      },
    ],
    trapExamples: [
      {
        question: '二つの文を一つにしなさい。I have a friend. She can speak French.',
        wrongAnswer: 'I have a friend who she can speak French.',
        trapExplanation:
          'もとの文の She を消し忘れて、who といっしょに残してしまう。関係代名詞が代名詞の役目を兼ねていることが理解できていない。',
        correctAnswer: 'I have a friend who can speak French.',
        correctExplanation:
          'who は She の代わりとしてあとの文の主語になっているので、She は消さなければならない。関係代名詞は「代名詞＋接着剤」の二役をこなす語である。主語が二つ並んでいたら、必ずどちらかが余分である。',
      },
      {
        question: '（　）内を適する形にしなさい。I have a friend who (live) in London.',
        wrongAnswer: 'live',
        trapExplanation:
          '文の主語が I なので、動詞にも s は要らないと考えてしまう。who のあとの動詞が合わせるのは先行詞であることを見落としている。',
        correctAnswer: 'lives',
        correctExplanation:
          'who のあとの動詞は先行詞 a friend（三人称単数）に合わせるので lives になる。先行詞が friends なら live である。文全体の主語 I ではなく、直前の先行詞を見るのが鉄則である。',
      },
    ],
  },

  {
    id: 'eigo_s329',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係代名詞②：主格の which・that（もの・動物）',
    description: '先行詞がもの・動物のときの主格の関係代名詞を使えるようにする',
    order: 829,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '先行詞がもの・動物のときは which を使う。that でも代用できる。',
      '主格なので、関係代名詞のあとには動詞が続く。',
      'a bus which goes to the station（駅へ行くバス）。',
      '先行詞が人でも that は使える（who の代わり）。',
      '動詞の形は先行詞の数に合わせる（a book which is 〜／books which are 〜）。',
    ],
    sections: [
      {
        heading: 'which と that の使い分け',
        body: `先行詞がもの・動物のときは which を使う。that はもの・人のどちらにも使える万能の関係代名詞である。

例）This is the bus which goes to the station.（これは駅へ行くバスです）
例）I have a dog which has long ears.（耳の長い犬を飼っている）
例）The house which stands on the hill is very old.（丘の上に建っている家はとても古い）

■ that で言いかえる
例）This is the bus that goes to the station.
例）I know a boy that plays the piano well.（人が先行詞でも that が使える）

■ 使い分けのまとめ
先行詞が人　　→ who／that
先行詞がもの・動物 → which／that

■ 二つの文をつなぐ手順（which の場合）
　I want a computer.（コンピューターがほしい）
　It is small and light.（それは小さくて軽い）
　→ I want a computer which is small and light.
It を which に変え、先行詞 a computer のすぐ後ろに置く。

★ ポイント：which のあとに動詞が来ていれば主格。先行詞の数に合わせて is／are、has／have を選ぶ。`,
      },
      {
        heading: '長い文を読み解く',
        body: `関係代名詞が入ると文が長くなるので、かたまりの切れ目を見つける練習が必要である。

例）The train which leaves at six is always crowded.
　主語：The train which leaves at six（六時に出る電車）
　動詞：is
　訳：六時に出る電車はいつもこんでいる。

例）I like books which have a lot of pictures.
　先行詞：books（複数）→ have（s は付かない）
　訳：わたしは絵がたくさんある本が好きだ。

例）This is the letter which came from my uncle.
　訳：これはおじから来た手紙だ。

■ 手順
①名詞のすぐあとに who・which・that があるか見る
②あれば、そこから説明のかたまりが始まる
③次に出てくる動詞（二つ目の動詞）が文全体の動詞

■ 主語と動詞の数の一致
例）The books which are on the desk are mine.
are が二回出てくるが、一つ目は関係詞の中の動詞（先行詞 books に合わせる）、二つ目が文全体の動詞である。

⚠ 注意：I have a dog which it has long ears. は誤り。which が主語のはたらきをしているので it は不要である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。This is the train (　) goes to Kyoto.',
        wrongAnswer: 'who',
        trapExplanation:
          '関係代名詞といえば who と覚えてしまい、先行詞が人かものかを確かめずに選んでしまう。',
        correctAnswer: 'which（または that）',
        correctExplanation:
          '先行詞 the train はものなので which を使う。that でもよい。who を使えるのは先行詞が人のときだけである。「人＝who、もの＝which、どちらでも＝that」と整理しておく。',
      },
      {
        question: '（　）内を適する形にしなさい。I like the songs which (be) popular among young people.',
        wrongAnswer: 'is',
        trapExplanation:
          '直前が which という単数のような語なので、機械的に is を選んでしまう。合わせるのは先行詞であることを忘れている。',
        correctAnswer: 'are',
        correctExplanation:
          '関係代名詞のあとの動詞は先行詞に合わせる。先行詞は the songs で複数なので are になる。先行詞が the song なら is である。which や that 自体には単数・複数の区別がないので、必ず先行詞を見る。',
      },
    ],
  },

  {
    id: 'eigo_s330',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係代名詞③：目的格の which・that（穴があく位置）',
    description: '関係詞のあとに主語＋動詞が続く目的格の形を理解する',
    order: 830,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '関係代名詞のあとに「主語＋動詞」が続くときは目的格。',
      '目的格の関係詞のあとは、目的語が抜けた「穴」のある文になる。',
      'the book which I read yesterday（わたしが昨日読んだ本）。',
      '目的格には which・that を使う（先行詞が人なら whom・who・that）。',
      '穴の位置に先行詞を戻すと、もとの二文にもどせる。',
    ],
    sections: [
      {
        heading: '主格と目的格の見分け方',
        body: `関係代名詞のあとに何が続くかで、主格か目的格かが決まる。

■ 主格：関係詞のあとが動詞
例）This is the book which made me cry.（わたしを泣かせた本だ）
which が主語のはたらきをしている。

■ 目的格：関係詞のあとが主語＋動詞
例）This is the book which I read last week.（先週わたしが読んだ本だ）
which は read の目的語のはたらきをしている。

■ 「穴」を意識する
目的格の文では、関係詞のあとの文に目的語がない。
　This is the book which I read ★ last week.
　★の位置に the book が入るはずだった、と考える。

■ 二つの文にもどしてみる
　This is the book.（これはその本だ）
　I read it last week.（わたしは先週それを読んだ）
　it（＝the book）を which に変えて前に出すと、上の文になる。

★ ポイント：関係代名詞のあとを見る。動詞なら主格、主語＋動詞なら目的格。この一手で必ず判別できる。`,
        figureId: 'lf_eigoext09_330',
      },
      {
        heading: '目的格の例文と作り方',
        body: `目的格の関係代名詞を使った文を、作り方の手順とともに確認する。

例）The movie which we saw yesterday was very sad.（昨日わたしたちが見た映画はとても悲しかった）
例）Is this the bag that you bought in Tokyo?（これは東京で買ったかばんですか）
例）The cake which my mother made was delicious.（母が作ったケーキはおいしかった）

■ 作り方の手順
　This is the picture.（これはその写真だ）
　I took it in Kyoto.（京都でそれをとった）
①二文に共通する語を見つける（the picture ＝ it）
②あとの文の it を which に変える
③which を文の先頭に出す（which I took in Kyoto）
④先行詞のすぐ後ろにつなぐ
　→ This is the picture which I took in Kyoto.

■ 目的語を残さない
例）This is the picture which I took it in Kyoto.（×）
which がすでに目的語なので it は書かない。主格のときに主語を重ねないのと同じ理屈である。

■ 先行詞が人の目的格
例）The man whom I met yesterday is a doctor.（昨日会った男の人は医者だ）
かたい言い方では whom、ふつうは who または that を使い、実際には省略することが多い。

⚠ 注意：目的格の関係代名詞は省略できる（次の課で学ぶ）。省略された文を読めるようにしておくことが、長文読解では決定的に重要である。`,
      },
    ],
    trapExamples: [
      {
        question: '二つの文を一つにしなさい。This is the letter. I got it yesterday.',
        wrongAnswer: 'This is the letter which I got it yesterday.',
        trapExplanation:
          'もとの文の it を消し忘れてしまう。which がすでに got の目的語になっていることに気づいていない。',
        correctAnswer: 'This is the letter which I got yesterday.',
        correctExplanation:
          '目的格の関係代名詞は、あとの文の目的語の代わりをしている。したがって it は消す。目的格の文では「関係詞のあとに目的語が抜けた穴がある」のが正しい形である。',
      },
      {
        question: '次の関係代名詞は主格か目的格か。I know a girl that speaks three languages.',
        wrongAnswer: '目的格（わたしが知っている女の子、なので）',
        trapExplanation:
          '「わたしが知っている女の子」という日本語訳から、that を know の目的語だと考えてしまう。しかし know の目的語はすでに a girl であり、that は別のはたらきをしている。',
        correctAnswer: '主格',
        correctExplanation:
          'that のすぐあとが speaks という動詞なので主格である。that speaks three languages（三か国語を話す）が a girl を説明している。関係詞のあとが動詞なら主格、主語＋動詞なら目的格、と形で判断する。',
      },
    ],
  },

  {
    id: 'eigo_s331',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係代名詞④：先行詞が人のときの目的格',
    description: 'whom・who・that の使い分けと、実際の英文での自然な形を知る',
    order: 831,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '先行詞が人で目的格のときは whom が正式だが、who や that も使われる。',
      '会話では省略するのがふつう（the man I met yesterday）。',
      'the boy whom I saw at the park（公園で見かけた少年）。',
      '主格の who と目的格の whom は、あとに続く形で区別する。',
      '入試では「省略されている関係代名詞を補う」形で問われることが多い。',
    ],
    sections: [
      {
        heading: 'whom・who・that の使い分け',
        body: `先行詞が人で、関係代名詞が目的語のはたらきをするときは whom を使う。ただし、ふだんの英語では who や that を使ったり、省略したりすることが多い。

例）The man whom I met yesterday is a famous writer.（昨日会った男の人は有名な作家だ）
例）The girl who(m) you saw is my sister.（あなたが見かけた女の子はわたしの妹だ）
例）The student that our teacher praised is Ken.（先生がほめた生徒はケンだ）

■ 主格との対比
主格：The man who lives next door is kind.（となりに住んでいる男の人は親切だ）… who のあとが動詞
目的格：The man whom I met is kind.（わたしが会った男の人は親切だ）… whom のあとが主語＋動詞

■ 前置詞が残る場合
例）The girl whom I talked with is Yumi.（わたしが話をした女の子はユミだ）
もとの文が I talked with her. なので、with が文末に残る。不定詞の a friend to play with と同じ考え方である。

★ ポイント：中学受験では whom を書けなくても、who・that で言いかえられれば十分な場合が多い。ただし読解のために whom を見て意味が取れるようにしておく。`,
      },
      {
        heading: '関係代名詞のまとめ表',
        body: `ここまでの関係代名詞を、先行詞と格で整理する。

■ 先行詞が人
主格：who（that）　例）the boy who runs fast
目的格：whom・who（that）　例）the boy whom I know

■ 先行詞がもの・動物
主格：which（that）　例）the cat which sleeps here
目的格：which（that）　例）the cat which I saw

■ 判別の手順
①先行詞は人か、ものか → who 系か which 系かが決まる
②関係詞のあとは動詞か、主語＋動詞か → 主格か目的格かが決まる

■ 練習
例）I have an uncle (　) works in Canada.
　先行詞 an uncle は人、あとは動詞 works → who（主格）
例）The book (　) I borrowed was interesting.
　先行詞 The book はもの、あとは主語＋動詞 → which（目的格）

■ that が好まれる場合
先行詞に the only・the first・the best・all・every などが付くときは that を使うのがふつうである。
例）This is the best movie that I have ever seen.（これは今まで見た中で最高の映画だ）

⚠ 注意：who・whom・which・that はどれも「だれ・どれ」とは訳さない。関係代名詞は疑問詞ではないので、訳語を当てずに「後ろから説明するかたまり」として処理する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。The woman (　) I met at the station was Ms. Green.',
        wrongAnswer: 'which',
        trapExplanation:
          '先行詞を確かめずに、目的格といえば which と覚えてしまう。The woman が人であることを見落としている。',
        correctAnswer: 'whom（who／that でもよい）',
        correctExplanation:
          '先行詞 The woman は人なので which は使えない。目的格なので whom が正式だが、who や that でもよい。「人か、ものか」を先に決め、そのあとで「主格か、目的格か」を決める二段階で考える。',
      },
      {
        question: '次の文の関係代名詞は主格か目的格か。The boy who is running over there is my brother.',
        wrongAnswer: '目的格（わたしの弟、だから）',
        trapExplanation:
          '文全体の意味だけで判断してしまい、who の直後を確認していない。is という動詞が続いていることに注意が向いていない。',
        correctAnswer: '主格',
        correctExplanation:
          'who のあとが is running という動詞なので主格である。目的格なら who のあとに「主語＋動詞」が続く（The boy who I saw 〜）。判別は必ず関係詞の直後の形で行う。',
      },
    ],
  },

  {
    id: 'eigo_s332',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係代名詞⑤：that を使う場合・使えない場合',
    description: 'that が好まれる先行詞と、that の他の用法との区別を整理する',
    order: 832,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'that は人にもものにも使える万能の関係代名詞（主格・目的格の両方）。',
      '先行詞に the only・the first・the best・all・every が付くときは that を使う。',
      '先行詞が「人＋もの」のときも that を使う。',
      '接続詞の that（I think that 〜）や指示語の that とは別物。',
      '関係代名詞の that のあとには、必ず不完全な文（主語か目的語が欠けた文）が来る。',
    ],
    sections: [
      {
        heading: 'that が好まれる場合',
        body: `that は who・which の代わりに使える便利な関係代名詞だが、特に that を使うのがふつうという場面がある。

■ 先行詞に最上級・序数・only・all・every が付くとき
例）This is the most interesting book that I have ever read.（今まで読んだ中で最もおもしろい本だ）
例）She was the first student that came to school.（最初に学校に来た生徒だった）
例）He is the only friend that helped me.（助けてくれたただ一人の友だちだ）
例）This is all that I know.（これがわたしの知っているすべてだ）

■ 先行詞が「人ともの」の両方のとき
例）Look at the boy and the dog that are running.（走っている少年と犬を見て）
人には who、ものには which を使うが、両方が並んでいるときはどちらも使えないので that を使う。

■ 先行詞が everything・something・anything のとき
例）Tell me everything that you know.（あなたが知っていることをすべて教えて）

★ ポイント：迷ったら that を使ってよい場面が多い。ただし前置詞の直後（in which など）や、コンマのあとの関係詞では that は使えないが、これは高校で学ぶ内容である。`,
      },
      {
        heading: 'いろいろな that を区別する',
        body: `that は関係代名詞のほかにも使い方があるので、区別できるようにする。

■ ①指示語の that（あれ・あの）
例）That is my house.（あれはわたしの家だ）
例）I like that picture.（あの絵が好きだ）

■ ②接続詞の that（〜ということ）
例）I think that he is right.（彼は正しいと思う）
例）I know that she likes music.（彼女が音楽好きだと知っている）
接続詞の that のあとには、主語も目的語もそろった完全な文が来る。

■ ③関係代名詞の that
例）This is the book that I bought yesterday.（昨日買った本だ）
関係代名詞の that のあとには、主語か目的語が欠けた不完全な文が来る（I bought の目的語がない）。

■ 見分けの手順
that のあとの文を見る。
　完全な文（主語も目的語もある）→ 接続詞
　不完全な文（主語か目的語がない）→ 関係代名詞
　あとに名詞が続く、または一語で文の主語になっている → 指示語

■ 練習
例）I know that boy.（あの少年を知っている）… 指示語
例）I know that he is kind.（彼が親切だと知っている）… 接続詞
例）I know a boy that is kind.（親切な少年を知っている）… 関係代名詞

⚠ 注意：接続詞の that は省略できる（I think he is right.）が、主格の関係代名詞の that は省略できない。省略できるのは目的格の関係代名詞である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の that のはたらきは何か。I believe that she will come.',
        wrongAnswer: '関係代名詞（彼女が来るということを信じる、の「ということ」が先行詞）',
        trapExplanation:
          'that という語を見ると反射的に関係代名詞だと考えてしまう。that の前に先行詞になる名詞がないことを確認していない。',
        correctAnswer: '接続詞（〜ということ）',
        correctExplanation:
          'that の前に名詞（先行詞）がなく、あとには she will come という主語も動詞もそろった完全な文が続いている。したがって接続詞である。関係代名詞の that なら、あとの文は主語か目的語が欠けた不完全な文になる。',
      },
      {
        question: '（　）に適する語を入れなさい。This is the best cake (　) I have ever eaten.',
        wrongAnswer: 'who',
        trapExplanation:
          '関係代名詞を who と決めつけてしまう。先行詞 cake がものであることも、最上級が付いていることも見ていない。',
        correctAnswer: 'that（which でもよい）',
        correctExplanation:
          '先行詞 the best cake はもので、しかも最上級が付いているので that を使うのがふつうである。which も文法的には正しい。先行詞が人でないので who は使えない。',
      },
    ],
  },

  // ────── 10. 関係代名詞の省略・関係副詞（s333〜s336） ──────
  {
    id: 'eigo_s333',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係代名詞の省略①：目的格は省ける',
    description: '省略できる関係代名詞とできない関係代名詞を、形の上で区別する',
    order: 833,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '目的格の関係代名詞（which・that・whom）は省略できる。',
      '主格の関係代名詞（who・which・that）は省略できない。',
      '省略されると「名詞＋主語＋動詞」という形になる。',
      'the book I read yesterday＝the book which I read yesterday。',
      '実際の英文では省略されている方が多いので、読めることが最優先。',
    ],
    sections: [
      {
        heading: '省略できるのは目的格だけ',
        body: `関係代名詞は、目的格のときだけ省略できる。主格は省略できない。

■ 目的格（省略できる）
例）This is the book which I read yesterday.
　→ This is the book I read yesterday.（昨日わたしが読んだ本だ）
例）The man whom I met was kind.
　→ The man I met was kind.（わたしが会った男の人は親切だった）

■ 主格（省略できない）
例）I know a boy who plays the piano.（○）
例）I know a boy plays the piano.（×）
主格を省略すると、動詞が二つ並んで意味が取れなくなってしまう。

■ なぜ目的格は省けるのか
目的格の関係詞のあとには「主語＋動詞」が続く。名詞のすぐあとにまた主語が来る形は、関係詞がなくても「ここから説明が始まる」とわかるので、省いても混乱しない。

■ 省略された形の特徴
「名詞 ＋ 主語 ＋ 動詞」と並んでいたら、関係代名詞が省略されていると考える。
例）the picture he took（彼がとった写真）
例）the song we sang（わたしたちが歌った歌）

★ ポイント：関係詞の直後が主語（I・he・we・my mother など）なら省略できる。直後が動詞なら省略できない。`,
        figureId: 'lf_eigoext09_333',
      },
      {
        heading: '省略された文を読む練習',
        body: `実際の英文では、目的格の関係代名詞はほとんど省略される。読めるようにしておくことが最優先である。

例）The cake my mother made was delicious.（母が作ったケーキはおいしかった）
　＝ The cake which my mother made was delicious.
例）Is this the key you are looking for?（これがあなたのさがしているかぎですか）
　＝ Is this the key which you are looking for?
例）The people I met in Kyoto were very kind.（京都で会った人々はとても親切だった）

■ 動詞が二つあることに気づく
The cake my mother made was delicious. には made と was の二つの動詞がある。動詞が二つあるのに接続詞がないときは、関係代名詞が省略されていると考える。

■ 切り分けの手順
①名詞のすぐあとに主語らしい語（名詞・代名詞）が来ていないか
②来ていれば、そこから説明のかたまりが始まる
③二つ目の動詞が文全体の動詞

■ 主語の中に入る場合
例）The book I bought yesterday is very interesting.
　主語：The book I bought yesterday（昨日買った本）
　動詞：is

⚠ 注意：The man I met was kind. を「男の人はわたしに会った」と読むと was kind が宙にういてしまう。名詞のあとに突然別の主語が現れたら、省略された関係代名詞を補って読む。`,
      },
    ],
    trapExamples: [
      {
        question: '関係代名詞を省略できるのはどちらか。ア The girl who sings well is Emi.　イ The song which she sang was nice.',
        wrongAnswer: 'ア',
        trapExplanation:
          '関係代名詞はどれも省略できると思いこみ、格を確かめずに答えてしまう。who のあとが動詞であることを見ていない。',
        correctAnswer: 'イ',
        correctExplanation:
          'アの who は直後が動詞 sings なので主格で、省略できない。イの which は直後が she sang という主語＋動詞なので目的格で、The song she sang was nice. と省略できる。省略できるのは目的格だけである。',
      },
      {
        question: '日本語に直しなさい。The letter I received this morning was from my grandmother.',
        wrongAnswer: '手紙は今朝わたしを受け取り、祖母から来た。',
        trapExplanation:
          'The letter を主語、received を文の動詞と読んでしまい、あとの was の位置づけができなくなる。省略された関係代名詞に気づいていない。',
        correctAnswer: '今朝わたしが受け取った手紙は祖母からのものだった。',
        correctExplanation:
          'The letter のすぐあとに I という別の主語が来ているので、ここに目的格の関係代名詞（which／that）が省略されている。主語は The letter I received this morning、文の動詞は was である。名詞＋主語＋動詞の並びを見たら省略を疑う。',
      },
    ],
  },

  {
    id: 'eigo_s334',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係代名詞の省略②：長文で見抜く練習',
    description: '省略・分詞・不定詞が混ざった長い名詞のかたまりを読み解く',
    order: 834,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '名詞の後ろに付く説明は、不定詞・分詞・関係詞節の三種類。',
      'いずれも「名詞 ← 後ろから説明」という同じしくみである。',
      '文の本当の動詞を見つけることが、長文読解の第一歩。',
      '動詞が二つ以上あって接続詞がなければ、どこかが説明のかたまりである。',
      '主語が長いときほど、区切りを鉛筆で示しながら読む。',
    ],
    sections: [
      {
        heading: '三種類の後置修飾を並べて確認',
        body: `名詞を後ろから説明する形は、これまでに三つ学んだ。すべて同じしくみである。

■ ①不定詞
例）I have a lot of homework to do.（するべき宿題）
■ ②分詞
例）The boy running in the park is Ken.（走っている少年）
例）The letter written in English is from Tom.（英語で書かれた手紙）
■ ③関係詞節
例）The book which I bought is interesting.（買った本）
例）The book I bought is interesting.（省略形）

どれも「名詞 ＋ 説明のかたまり」という同じ形をしている。日本語にするときは、必ず後ろから前へ訳し上げる。

■ 言いかえの関係
例）the boy running in the park ＝ the boy who is running in the park
例）the letter written in English ＝ the letter which was written in English
分詞は「関係代名詞＋be動詞」を省いた形と見ることもできる。この見方ができると、両方をまとめて理解できる。

★ ポイント：名詞が出てきたら、その直後に to＋原形・〜ing・過去分詞・who/which/that・主語 のどれかが来ていないかを確認する。`,
      },
      {
        heading: '文の骨組みを取り出す',
        body: `長い文を読むときは、まず文の骨組み（主語と動詞）を取り出す。

例）The students who study English every day can speak it well.
　主語：The students who study English every day
　動詞：can speak
　訳：毎日英語を勉強する生徒たちは、それを上手に話すことができる。

例）The book my father gave me for my birthday is very useful.
　主語：The book my father gave me for my birthday
　動詞：is
　訳：父が誕生日にくれた本はとても役に立つ。

例）The girl standing at the gate with a red bag is my cousin.
　主語：The girl standing at the gate with a red bag
　動詞：is
　訳：赤いかばんを持って門のところに立っている女の子はわたしのいとこだ。

■ 手順のまとめ
①文の先頭の名詞をさがす
②その直後から説明が始まっていないか確認する
③説明のかたまりが終わったところに出てくる動詞が、文全体の動詞
④骨組みだけを先に訳し、あとから説明を組みこむ

⚠ 注意：説明のかたまりの中にある動詞（study・gave・standing）を文全体の動詞とまちがえると、訳が根本から狂う。動詞が複数あるときは、必ずどれが骨組みかを決めてから訳す。`,
      },
    ],
    trapExamples: [
      {
        question: '文全体の動詞はどれか。The man who lives next to us works at a bank.',
        wrongAnswer: 'lives',
        trapExplanation:
          '主語のすぐあとに出てくる動詞を、文全体の動詞だと思いこんでしまう。who から始まる説明のかたまりの中の動詞であることを見落としている。',
        correctAnswer: 'works',
        correctExplanation:
          'who lives next to us は The man を説明するかたまりで、その中の動詞が lives である。説明が終わったあとに出てくる works が文全体の動詞になる。訳は「わたしたちのとなりに住んでいる男の人は銀行で働いている」。',
      },
      {
        question: '日本語に直しなさい。The pictures he took in Australia were beautiful.',
        wrongAnswer: 'その写真は彼をオーストラリアで撮り、美しかった。',
        trapExplanation:
          'The pictures を主語、took を文の動詞と読んでしまう。名詞のすぐあとに he という別の主語が来ていることに気づいていない。',
        correctAnswer: '彼がオーストラリアでとった写真は美しかった。',
        correctExplanation:
          'The pictures のあとに he という主語が続いているので、ここに目的格の関係代名詞が省略されている。主語は The pictures he took in Australia、文の動詞は were である。were が複数形になっていることも、主語が The pictures であることの手がかりになる。',
      },
    ],
  },

  {
    id: 'eigo_s335',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係副詞①：where（場所）と when（時）',
    description: '場所や時を表す名詞を説明する where・when の使い方を学ぶ',
    order: 835,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '先行詞が場所（place・town・house）なら where を使う。',
      '先行詞が時（day・time・year）なら when を使う。',
      'where・when のあとには、主語も目的語もそろった完全な文が来る。',
      '関係代名詞のあとは不完全な文、関係副詞のあとは完全な文、という点で区別する。',
      'the place where I was born（わたしが生まれた場所）／the day when we met（出会った日）。',
    ],
    sections: [
      {
        heading: 'where と when の使い方',
        body: `場所や時を表す名詞を説明するときは、関係副詞 where・when を使う。

■ where（場所）
例）This is the house where I was born.（これはわたしが生まれた家だ）
例）I want to visit the town where my grandmother lives.（祖母が住んでいる町を訪れたい）
例）The park where we played is near the station.（わたしたちが遊んだ公園は駅の近くだ）

■ when（時）
例）I remember the day when we first met.（わたしたちが初めて会った日を覚えている）
例）Spring is the season when many flowers bloom.（春は多くの花がさく季節だ）
例）Sunday is the day when I can relax.（日曜日はゆっくりできる日だ）

■ 二つの文から作る
　This is the house.（これはその家だ）
　I was born in it.（わたしはそこで生まれた）
　→ in it をまとめて where にする
　→ This is the house where I was born.

★ ポイント：where・when は「前置詞＋関係代名詞」をまとめた形だと考えるとよい。だから、あとに続く文には前置詞も目的語も残らず、完全な形になる。`,
        figureId: 'lf_eigoext09_335',
      },
      {
        heading: '関係代名詞との区別',
        body: `where・when を使うか、which・that を使うかは、あとに続く文が完全かどうかで決まる。

■ あとが不完全な文 → 関係代名詞
例）This is the house which my father built.（父が建てた家だ）
　built の目的語が欠けている（不完全）→ which

■ あとが完全な文 → 関係副詞
例）This is the house where my father lives.（父が住んでいる家だ）
　lives は目的語を必要としない（完全）→ where

同じ the house が先行詞でも、あとの文の形によって使う語が変わる。

■ 練習
例）I know the town (　) is famous for its castle.
　is famous 〜 は主語が欠けている → which（関係代名詞）
例）I know the town (　) my uncle lives.
　my uncle lives は完全な文 → where（関係副詞）

■ why と how
例）This is the reason why he was late.（これが彼が遅れた理由だ）
例）This is how he solved the problem.（これが彼の問題の解き方だ）
why は先行詞 the reason とともに使い、how は先行詞なしで「〜する方法」を表す。上位校では出題されることがある。

⚠ 注意：関係副詞のあとの文には、場所や時を表す語（there・then）を残してはいけない。This is the house where I was born there. は誤りである。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。This is the school (　) my mother studied.',
        wrongAnswer: 'which',
        trapExplanation:
          '先行詞が the school というものなので which を選んでしまう。あとに続く my mother studied が完全な文であることを確かめていない。',
        correctAnswer: 'where',
        correctExplanation:
          'my mother studied は主語も動詞もそろった完全な文なので、関係代名詞は入らない。「母が勉強した学校」＝場所を表すので関係副詞 where を使う。which を使うなら This is the school which my mother built.（母が建てた学校）のように、目的語の欠けた文が続く。',
      },
      {
        question: '誤りを直しなさい。I will never forget the day when we met on that day.',
        wrongAnswer: 'when we met on that day のままでよい',
        trapExplanation:
          '「その日に会った」という日本語をそのまま英語にしようとして、when を使ったうえに on that day も書いてしまう。同じ内容を二回言っていることに気づいていない。',
        correctAnswer: 'I will never forget the day when we met.',
        correctExplanation:
          'when がすでに「その日に」という意味を含んでいるので、on that day は不要である。関係副詞のあとの文からは、時や場所を表す語句を取りのぞいて完全な文にする。同じ理由で where 〜 there も誤りになる。',
      },
    ],
  },

  {
    id: 'eigo_s336',
    subject: 'eigo',
    examType: 'chugaku',
    title: '関係詞の総合：どれを入れるかの手順',
    description: '関係代名詞・関係副詞の選択を、三段階の手順で確実にする',
    order: 836,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '手順①：先行詞は人か、もの・動物か、場所か、時か。',
      '手順②：あとに続く文は完全か、不完全か。',
      '手順③：不完全なら関係代名詞、完全なら関係副詞。',
      '不完全な文のうち、主語が欠けていれば主格、目的語が欠けていれば目的格。',
      '目的格なら省略できる、というところまで一続きで確認する。',
    ],
    sections: [
      {
        heading: '三段階の判別手順',
        body: `関係詞の選択問題は、次の手順で必ず解ける。

■ 手順① 先行詞の種類を見る
人 → who／whom／that
もの・動物 → which／that
場所 → where（ただし完全な文が続くとき）
時 → when（ただし完全な文が続くとき）

■ 手順② あとの文が完全か不完全かを見る
主語が欠けている → 主格の関係代名詞
目的語が欠けている → 目的格の関係代名詞
どこも欠けていない → 関係副詞

■ 手順③ 当てはめる
例）I have a friend (　) can play the guitar.
　先行詞は人、あとは can play で主語が欠けている → who（主格）
例）The bag (　) I bought yesterday is red.
　先行詞はもの、あとは I bought で目的語が欠けている → which（目的格・省略可）
例）This is the room (　) we have lunch.
　先行詞は場所、we have lunch は完全 → where

★ ポイント：まず「あとの文に欠けているところがあるか」を見る。ここを見れば、関係代名詞と関係副詞をまちがえることはない。`,
      },
      {
        heading: '二文を一文にまとめる練習',
        body: `記述問題では、二つの文を一つにまとめさせる形がよく出る。

例）I know a girl. She lives in Kobe.
　共通する語：a girl ＝ She（主語）→ 主格 who
　→ I know a girl who lives in Kobe.

例）This is the camera. My father bought it last year.
　共通する語：the camera ＝ it（目的語）→ 目的格 which
　→ This is the camera which my father bought last year.
　（省略して This is the camera my father bought last year. でもよい）

例）I visited the city. My aunt lives there.
　共通する語：the city ＝ there（場所を表す副詞）→ 関係副詞 where
　→ I visited the city where my aunt lives.

■ 手順のまとめ
①二文に共通する語を見つける
②あとの文でその語がどんなはたらきをしているかを見る（主語・目的語・場所や時を表す副詞）
③主語なら主格、目的語なら目的格、副詞なら関係副詞
④関係詞を先行詞のすぐ後ろに置き、あとの文からもとの語を消す

⚠ 注意：もとの語（She・it・there）を消し忘れるのが最も多いミスである。関係詞に置きかえた語は必ず消す。`,
      },
    ],
    trapExamples: [
      {
        question: '二つの文を一つにしなさい。This is the park. I often play in it.',
        wrongAnswer: 'This is the park which I often play in it.',
        trapExplanation:
          'it を which に置きかえて前に出したあと、もとの it を消し忘れてしまう。前置詞 in が残ることにも気づきにくい。',
        correctAnswer: 'This is the park which I often play in.（または This is the park where I often play.）',
        correctExplanation:
          'it を which に変えて先行詞のすぐ後ろに置いたら、もとの it は消す。前置詞 in は文末に残る。in it をまとめて where にすれば This is the park where I often play. となり、こちらの方が自然である。',
      },
      {
        question: '（　）に適する語を入れなさい。I remember the day (　) I first met her.',
        wrongAnswer: 'which',
        trapExplanation:
          '先行詞 the day を「もの」と考えて which を選んでしまう。あとの I first met her に何も欠けていないことを確かめていない。',
        correctAnswer: 'when',
        correctExplanation:
          'I first met her は主語も目的語もそろった完全な文なので、関係代名詞は入らない。先行詞が the day という時を表す語なので関係副詞 when を使う。「あとの文が完全かどうか」を必ず先に確認する。',
      },
    ],
  },

  // ────── 11・12. 受動態（s337〜s340） ──────
  {
    id: 'eigo_s337',
    subject: 'eigo',
    examType: 'chugaku',
    title: '受動態①：be動詞＋過去分詞と語順の入れかえ',
    description: '能動態から受動態への書きかえを、語順の動きとしてつかむ',
    order: 837,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '受動態＝be動詞＋過去分詞。「〜される」「〜された」という意味。',
      '能動態の目的語が受動態の主語になり、能動態の主語は by 〜 として文末へ回る。',
      'be動詞は新しい主語の人称・数と、もとの文の時制に合わせる。',
      'Tom broke the window. → The window was broken by Tom.',
      '目的語のない文（go・come・run など）は受動態にできない。',
    ],
    sections: [
      {
        heading: '語順が入れかわるしくみ',
        body: `受動態は「〜される」という言い方で、be動詞＋過去分詞で作る。

例）Tom broke the window.（トムが窓をこわした）… 能動態
　→ The window was broken by Tom.（窓はトムによってこわされた）… 受動態

■ 書きかえの三つの手順
①能動態の目的語（the window）を、受動態の主語にする
②動詞を「be動詞＋過去分詞」にする。be動詞はもとの文の時制と新しい主語に合わせる（過去＋単数 → was）
③能動態の主語（Tom）を by のあとに置き、文末に回す

■ もっと例を見る
例）Many people love this song.
　→ This song is loved by many people.（この歌は多くの人に愛されている）
例）My mother made this cake.
　→ This cake was made by my mother.（このケーキは母によって作られた）
例）They speak English in Australia.
　→ English is spoken in Australia.（オーストラリアでは英語が話されている）

■ by のあとは目的格
例）She helped me. → I was helped by her.
by のあとの代名詞は目的格にする（she → her）。

★ ポイント：主語と目的語が入れかわり、動詞が be動詞＋過去分詞になる。この二つの動きを図でつかむ。`,
        figureId: 'lf_eigoext09_337',
      },
      {
        heading: '受動態にできない文',
        body: `受動態を作るには、能動態に目的語がなければならない。目的語をとらない動詞は受動態にできない。

■ 受動態にできない動詞の例
go（行く）／come（来る）／run（走る）／sleep（眠る）／happen（起こる）／arrive（到着する）
例）He goes to school. → He is gone to school.（×）
「学校へ行かれる」という文は作れない。

■ be動詞の形を決める二つの条件
①もとの文の時制（現在か過去か）
②新しい主語の人称と数
例）They clean the rooms every day.
　→ The rooms are cleaned every day.（現在・複数 → are）
例）He wrote these letters.
　→ These letters were written by him.（過去・複数 → were）

■ 過去分詞を正しく使う
不規則動詞は必ず覚える。
write－wrote－written／speak－spoke－spoken／break－broke－broken／take－took－taken／build－built－built／make－made－made／see－saw－seen／know－knew－known／give－gave－given／eat－ate－eaten

⚠ 注意：受動態の動詞部分に過去形を使うのは誤り。The window was broke by Tom. ではなく was broken である。過去形と過去分詞のちがいを必ず確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '受動態に書きかえなさい。My brother washed the car yesterday.',
        wrongAnswer: 'The car was washed by my brother yesterday.（正しい）／The car is washed by my brother yesterday.（誤り）',
        trapExplanation:
          '受動態の be動詞をいつも is・are にしてしまい、もとの文が過去（washed）であることを反映させ忘れる。yesterday という語があっても気づかない。',
        correctAnswer: 'The car was washed by my brother yesterday.',
        correctExplanation:
          '受動態の be動詞は、もとの文の時制と新しい主語に合わせる。もとが過去で、新しい主語 The car が単数なので was を使う。時制は動詞の過去分詞ではなく be動詞で示すことを覚えておく。',
      },
      {
        question: '誤りを直しなさい。The window was broke by the boy.',
        wrongAnswer: 'was broke のままでよい',
        trapExplanation:
          '過去のことだから過去形 broke を使えばよいと考えてしまう。be動詞のあとに来るのは過去分詞であることが抜けている。',
        correctAnswer: 'The window was broken by the boy.',
        correctExplanation:
          '受動態は「be動詞＋過去分詞」で作る。break の変化は break－broke－broken なので、過去分詞は broken である。時を表すのは was の方なので、broke を重ねる必要はない。不規則動詞は三つの形をセットで暗記する。',
      },
    ],
  },

  {
    id: 'eigo_s338',
    subject: 'eigo',
    examType: 'chugaku',
    title: '受動態②：by の省略と、覚えるべき過去分詞',
    description: 'by 〜 を省く場合を知り、不規則動詞の過去分詞を確実にする',
    order: 838,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'だれがしたか言う必要がないときは by 〜 を省く。',
      'English is spoken in many countries.（by people は書かない）',
      '受動態は「する人」より「されるもの」に注目したいときに使う。',
      '不規則動詞の過去分詞（written・spoken・broken・taken・known・built）は必ず暗記。',
      '規則動詞は過去形と過去分詞が同じ形（used・cleaned・visited）。',
    ],
    sections: [
      {
        heading: 'by 〜 を省くとき',
        body: `受動態では、by のあとの語を書かないことの方が多い。次の場合は省くのがふつうである。

■ ①だれがするか明らかなとき
例）This school was built in 1950.（この学校は1950年に建てられた）
建てたのは建設業者だが、言う必要がない。

■ ②だれがするか一般的すぎるとき
例）English is spoken in many countries.（英語は多くの国で話されている）
by people と書く必要はない。

■ ③だれがしたかわからないとき
例）My bike was stolen last night.（昨夜、自転車がぬすまれた）
ぬすんだ人がわからないので by は書けない。

■ 受動態を使う理由
受動態は「する人」よりも「されるもの」に話の中心を置きたいときに使う。だから by 〜 は必要なときだけ書き加える。

例）This picture was painted by Picasso.（ピカソによってかかれた）… だれがかいたかが大事なので by が必要
例）This temple was built 400 years ago.（400年前に建てられた）… だれが建てたかは重要でないので by なし

★ ポイント：入試の英作文では、by 〜 を書くかどうか迷ったら「その情報が大事かどうか」で判断する。`,
      },
      {
        heading: '過去分詞の暗記',
        body: `受動態を書くには、過去分詞を正確に覚えている必要がある。

■ 規則動詞（過去形と過去分詞が同じ）
play－played－played／use－used－used／clean－cleaned－cleaned／visit－visited－visited／invite－invited－invited／call－called－called

■ 不規則動詞（三つとも形がちがう）
write－wrote－written（書く）
speak－spoke－spoken（話す）
break－broke－broken（こわす）
take－took－taken（とる）
give－gave－given（あたえる）
know－knew－known（知っている）
see－saw－seen（見る）
eat－ate－eaten（食べる）
sing－sang－sung（歌う）
drive－drove－driven（運転する）

■ 不規則動詞（過去形と過去分詞が同じ）
build－built－built（建てる）／make－made－made（作る）／teach－taught－taught（教える）／buy－bought－bought（買う）／find－found－found（見つける）／send－sent－sent（送る）

■ 原形・過去形・過去分詞が全部同じ
put－put－put（置く）／cut－cut－cut（切る）／read－read－read（読む・発音は過去形と過去分詞がレッド）

⚠ 注意：受動態の文で過去形を使ってしまうミスが非常に多い。「be動詞のあとは必ず過去分詞」と唱えて確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '受動態に書きかえなさい。People speak English in Canada.',
        wrongAnswer: 'English is spoken by people in Canada.',
        trapExplanation:
          '受動態には必ず by 〜 が必要だと思いこみ、書かなくてよい by people をわざわざ書いてしまう。文としては通じるが不自然である。',
        correctAnswer: 'English is spoken in Canada.',
        correctExplanation:
          '主語が people のように「一般の人々」を表すときは、by 〜 を省くのがふつうである。だれが話すかは明らかで、情報として意味がないからである。同じ理由で They sell books here. → Books are sold here. のように by them も書かない。',
      },
      {
        question: '（　）内を適する形にしなさい。These pictures were (take) by my father.',
        wrongAnswer: 'took',
        trapExplanation:
          '「とった」という過去の意味から過去形 took を選んでしまう。be動詞 were がすでに過去を示していることに気づいていない。',
        correctAnswer: 'taken',
        correctExplanation:
          '受動態は「be動詞＋過去分詞」なので、be動詞のあとには過去分詞が来る。take－took－taken なので taken が正しい。時を表すのは were の方であり、過去分詞は時制を表さない。',
      },
    ],
  },

  {
    id: 'eigo_s339',
    subject: 'eigo',
    examType: 'chugaku',
    title: '受動態③：時制・否定文・疑問文',
    description: '受動態の否定文・疑問文の作り方と、助動詞との組み合わせをおさえる',
    order: 839,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '否定文は be動詞のあとに not を置く（is not made／was not written）。',
      '疑問文は be動詞を主語の前に出す（Is this made in Japan?）。',
      '答えるときも be動詞を使う（Yes, it is. / No, it isn\'t.）。',
      '助動詞があるときは「助動詞＋be＋過去分詞」（will be sold／can be seen）。',
      '疑問詞で始まる受動態の疑問文（When was it built?）も頻出。',
    ],
    sections: [
      {
        heading: '否定文と疑問文の作り方',
        body: `受動態はbe動詞の文なので、否定文・疑問文の作り方もbe動詞の文と同じである。

■ 否定文：be動詞のあとに not
例）This book is not read by young people.（この本は若い人には読まれていない）
例）The letter was not written in English.（その手紙は英語で書かれていなかった）
短縮形は isn\'t・wasn\'t・aren\'t・weren\'t を使う。

■ 疑問文：be動詞を主語の前に出す
例）Is this car made in Japan?（この車は日本で作られていますか）
　— Yes, it is. / No, it isn\'t.
例）Was this picture painted by Monet?（この絵はモネによってかかれましたか）
　— Yes, it was. / No, it wasn\'t.

■ do・does・did は使わない
例）Does this car made in Japan?（×）
受動態は be動詞の文なので、do・does・did は登場しない。ここは入試で必ずねらわれる。

■ 疑問詞で始まる疑問文
例）When was this temple built?（この寺はいつ建てられましたか）
例）Where is rice grown in Japan?（日本ではどこで米が作られていますか）
例）By whom was this book written?（この本はだれによって書かれましたか）
最後の形はかたい言い方で、ふつうは Who was this book written by? と言う。

★ ポイント：受動態の文を見たら「be動詞の文」と考える。否定も疑問も be動詞のルールどおりに処理する。`,
      },
      {
        heading: '助動詞のある受動態と未来の受動態',
        body: `助動詞といっしょに使うときは、「助動詞＋be＋過去分詞」の形になる。助動詞のあとは必ず原形なので、be動詞は be の形になる。

例）This song will be sung at the concert.（この歌はコンサートで歌われるだろう）
例）Mt. Fuji can be seen from here.（ここから富士山が見える＝見られる）
例）The homework must be finished by tomorrow.（宿題は明日までに終えられなければならない）
例）This room should be cleaned every day.（この部屋は毎日そうじされるべきだ）

■ 否定文・疑問文
例）This song will not be sung at the concert.
例）Can Mt. Fuji be seen from here? — Yes, it can.
助動詞のあとに not を置き、疑問文では助動詞を主語の前に出す。

■ 進行形の受動態は中学範囲外
「〜されているところだ」（is being built）は高校で学ぶ形なので、中学受験では覚えなくてよい。

■ 現在完了の受動態
例）This book has been read by many people.（この本は多くの人に読まれてきた）
上位校の長文では出てくることがあるので、形だけ知っておくとよい。

⚠ 注意：will is sold・can is seen のように、助動詞のあとに is を置くのは誤り。助動詞のあとは必ず原形の be である。`,
      },
    ],
    trapExamples: [
      {
        question: '疑問文にしなさい。This computer is used by many students.',
        wrongAnswer: 'Does this computer used by many students?',
        trapExplanation:
          '一般動詞の文の疑問文の作り方（do・does を使う）を当てはめてしまう。used という語の見た目から一般動詞の文だと錯覚するのが原因である。',
        correctAnswer: 'Is this computer used by many students?',
        correctExplanation:
          '受動態は be動詞の文なので、疑問文では be動詞（is）を主語の前に出す。do・does・did は使わない。答えるときも Yes, it is. / No, it isn\'t. と be動詞で答える。',
      },
      {
        question: '（　）に適する語を入れなさい。The concert will (　) held next Sunday.（コンサートは次の日曜に開かれる）',
        wrongAnswer: 'is',
        trapExplanation:
          '受動態は「be動詞＋過去分詞」だと覚えているため、主語に合わせて is を入れてしまう。will のあとが原形になることを忘れている。',
        correctAnswer: 'be',
        correctExplanation:
          '助動詞 will のあとは必ず動詞の原形なので、be動詞は原形の be になる。「助動詞＋be＋過去分詞」が受動態と助動詞を組み合わせた形である。can be seen、must be finished も同じ形である。',
      },
    ],
  },

  {
    id: 'eigo_s340',
    subject: 'eigo',
    examType: 'chugaku',
    title: '受動態④：by 以外の前置詞を使う表現',
    description: 'be interested in など、by を使わない受動態の決まり文句を覚える',
    order: 840,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'be interested in 〜（〜に興味がある）／be surprised at 〜（〜に驚く）。',
      'be covered with 〜（〜でおおわれている）／be filled with 〜（〜でいっぱいだ）。',
      'be known to 〜（〜に知られている）／be made of 〜・be made from 〜。',
      'be made of は材料が見てわかるとき、be made from は見てわからないとき。',
      'これらは by を使わないので、前置詞ごと丸暗記する。',
    ],
    sections: [
      {
        heading: 'by を使わない受動態',
        body: `受動態の形をしていても、by ではなく決まった前置詞を使う表現がある。丸ごと覚えてしまう。

例）I am interested in science.（わたしは科学に興味がある）
例）We were surprised at the news.（わたしたちはその知らせに驚いた）
例）The mountain is covered with snow.（その山は雪でおおわれている）
例）The box was filled with old books.（その箱は古い本でいっぱいだった）
例）He is known to everyone in this town.（彼はこの町のみんなに知られている）
例）She was pleased with the present.（彼女はそのプレゼントを喜んだ）

■ 前置詞ごと覚える
interested in（興味がある）／surprised at（驚く）／covered with（おおわれている）／filled with（いっぱいだ）／known to（知られている）／pleased with（喜ぶ）／satisfied with（満足する）／worried about（心配する）

■ 感情を表すものが多い
「驚かされる」「喜ばされる」というように、日本語では能動的に感じるものが英語では受け身の形になる。日本語との感覚のちがいに注意する。

★ ポイント：be動詞＋過去分詞＋前置詞を、三語まとめて声に出して覚える。前置詞だけを答えさせる出題が非常に多い。`,
      },
      {
        heading: 'be made of と be made from',
        body: `「〜で作られている」を表す言い方は、材料が見た目でわかるかどうかで使い分ける。

■ be made of：材料の形が残っている（見ればわかる）
例）This desk is made of wood.（この机は木で作られている）
例）The bag is made of leather.（そのかばんは革で作られている）

■ be made from：材料の形が変わっている（見てもわからない）
例）Wine is made from grapes.（ワインはぶどうから作られる）
例）Cheese is made from milk.（チーズは牛乳から作られる）
例）Paper is made from wood.（紙は木から作られる）

同じ木でも、机なら見て木とわかるので of、紙は見ても木とわからないので from を使う。

■ be made into：材料を主語にする言い方
例）Grapes are made into wine.（ぶどうはワインに加工される）
「材料 → 製品」の向きで言うときは into を使う。

■ be made in：産地
例）This car was made in Japan.（この車は日本で作られた）
場所を表すときは in である。

⚠ 注意：of・from・into・in の四つはすべて出題される。「見てわかる＝of」「変化している＝from」「材料が主語＝into」「場所＝in」と整理して覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。The top of the mountain was covered (　) snow.',
        wrongAnswer: 'by',
        trapExplanation:
          '受動態には by を使うと覚えているため、前置詞を考えずに by を入れてしまう。covered with が決まった形であることを知らない。',
        correctAnswer: 'with',
        correctExplanation:
          'be covered with 〜（〜でおおわれている）は by を使わない受動態の決まり文句である。同じ仲間に be filled with（〜でいっぱいだ）、be pleased with（〜を喜ぶ）がある。「be動詞＋過去分詞＋前置詞」を三語セットで覚えることが唯一の対策である。',
      },
      {
        question: '（　）に of か from を入れなさい。Butter is made (　) milk.',
        wrongAnswer: 'of',
        trapExplanation:
          '「〜で作られる」＝be made of と一つだけ覚えていると、材料が見てわかるかどうかを考えずに of を選んでしまう。',
        correctAnswer: 'from',
        correctExplanation:
          'バターを見ても牛乳の形は残っていない。このように材料が姿を変えているときは be made from を使う。木で作った机（This desk is made of wood.）のように、見て材料がわかるときは be made of である。',
      },
    ],
  },
];
