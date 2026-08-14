import type { Lesson } from './lesson-types';

// 高校受験 英語「be動詞・一般動詞と5文型」拡張ユニット（35セッション：koko_eigo_s036〜koko_eigo_s070）
// order は 536〜570。
// 構成：be動詞と一般動詞の区別(5)／否定文・疑問文の作り方(6)／第1文型SV・第2文型SVC(5)／
//       第3文型SVO(4)／第4文型SVOO と書きかえ to・for(5)／第5文型SVOC(5)／
//       There is・are 構文(3)／自動詞と他動詞の区別(2)
// 図解は「語順」を主役に据え、長方形を区切った語順ボックスで S・V・O・C の並びを示す
// （lesson-figs-koko-eigo-ext02.ts／35課中16課）。
export const kokoEigoExt02Lessons: Lesson[] = [
  // ─────────────── 1. be動詞と一般動詞の区別（s036〜s040） ───────────────
  {
    id: 'koko_eigo_s036',
    subject: 'eigo',
    examType: 'koko',
    title: 'be動詞①：am / are / is の使い分け',
    description: '主語によって形が変わるbe動詞の基本と、「＝」でつなぐはたらきをつかむ',
    intro: '「私は中学生です」を英語にするとき、日本語の「です」にあたる語が必要になります。それが be動詞です。ところが日本語の「です」は一語なのに、英語では am・are・is と三つに姿を変えます。だれの話をしているかで形が決まる――この決まり方をつかめば、英文の土台が一気に安定します。',
    order: 536,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞は「A ＝ B（AはBです）」「Aがある・いる」を表す。日本語の「です・います・あります」にあたる。',
      '現在形は3つ。I → am、you と複数の主語 → are、それ以外の単数（he / she / it / 人名）→ is。',
      "短縮形は I'm / you're / he's / she's / it's / we're / they're。",
      'be動詞のうしろには名詞・形容詞・場所を表す語句が来る。動作を表す語は来ない。',
      'Tom and I は「私たち」＝複数なので are。主語のかたまり全体を見て単数か複数かを決める。',
    ],
    sections: [
      {
        heading: 'be動詞は「＝」の記号',
        body: `英語の文には必ず動詞が要る。「私は中学生です」のように動作がない文でも、日本語の「です」にあたる語を置かなければ英文として成立しない。その役目をするのが be動詞（am / are / is）である。

■ be動詞の2つのはたらき
①「A ＝ B」を表す
　例）I am a junior high school student.（私は中学生です）
　例）She is kind.（彼女は親切です）
　この場合、be動詞の前後は同じものを指すか、前の語を説明する語になっている。
②「〜がある・いる」を表す
　例）Ken is in the library.（ケンは図書館にいます）
　例）My bag is on the desk.（私のかばんは机の上にあります）
　うしろに場所を表す語句（in / on / at 〜）が来ると、この意味になる。

■ 現在形は3つだけ
　I → am　　　例）I am from Osaka.
　you・複数 → are　　例）You are late. / They are my friends.
　それ以外の単数 → is　　例）He is a doctor. / This is my bike.

★ ポイント：日本語の「です」は主語が何でも同じ形だが、英語は主語によって形が変わる。英作文では「主語を見る → be動詞を決める」の順番を必ず守ること。書き終えてから主語とbe動詞の組み合わせを見直す習慣をつけると、失点が大きく減る。`,
        figureId: 'lf_kokoeigoext02_036',
      },
      {
        heading: '主語を見て形を決める手順',
        body: `be動詞を選ぶときにやることは1つ、「主語が何か」を確かめることだけである。ところが入試では、主語をわざと長くして単数か複数かを見えにくくしてくる。

■ 判断のしかた
①主語が I なら am、you なら are。この2つは例外として先に処理する。
②残りは「1つ（1人）か、2つ（2人）以上か」だけで決める。1つなら is、2つ以上なら are。
　例）This flower is beautiful.（1本 → is）
　例）These flowers are beautiful.（複数 → are）

■ まちがえやすい主語
　Tom and I → 私たち（複数）なので are
　例）Tom and I are on the same team.
　Ken's parents → 両親（2人）なので are
　例）Ken's parents are teachers.
　My father and mother → 複数なので are
　The boy with two dogs → 中心は The boy（1人）なので is
　例）The boy with two dogs is my brother.

■ 短縮形
　I am → I'm　you are → you're　he is → he's　it is → it's
　we are → we're　they are → they're
　※ 短縮形は会話や英作文で使ってよいが、答案では元の形で書いてもまちがいにはならない。

⚠ 注意：Ken's parents の 's は所有格の印であって、主語が単数だという印ではない。主語のかたまりの「中心になる名詞」がどれかを見つけ、その数で判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。Tom and I (　) high school students.',
        wrongAnswer: 'am',
        trapExplanation: '主語の中に I があるのを見つけて、反射的に「I なら am」と決めてしまう。主語のかたまり全体を見ていないために起こるミス。',
        correctAnswer: 'are',
        correctExplanation: 'Tom and I は「トムと私」＝2人、つまり we に置きかえられる複数の主語である。複数の主語には are を使う。Tom and I are high school students. のように、主語が and で結ばれていたら、まず「we / they に言いかえられないか」を確かめるとよい。',
      },
      {
        question: '（　）に適する語を入れなさい。Ken\'s parents (　) English teachers.',
        wrongAnswer: 'is',
        trapExplanation: "文の先頭が Ken's と単数の人名で始まるので、主語を Ken だと思いこんで is を選んでしまう。",
        correctAnswer: 'are',
        correctExplanation: "Ken's は「ケンの」という所有格で、主語の中心は parents（両親＝複数）である。したがって are を使い、Ken's parents are English teachers. となる。主語が長いときは、修飾している部分を取り除いて中心の名詞を探す。",
      },
    ],
  },

  {
    id: 'koko_eigo_s037',
    subject: 'eigo',
    examType: 'koko',
    title: '一般動詞①：動作や状態を表す動詞',
    description: 'be動詞以外の動詞のはたらきと、主語によって形が変わる仕組みを整理する',
    intro: '「私はサッカーが好きです」と言いたいのに、be動詞だけでは「私＝好き」という妙な文しか作れません。走る・食べる・好きだ――こうした中身のある動きや気持ちを表すのが一般動詞です。be動詞とは役割がまったく違うので、まずこの二種類をはっきり分けるところから始めます。',
    order: 537,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞＝be動詞（am / are / is / was / were）以外のすべての動詞。',
      'play・run のような動作だけでなく、like・know・have・want のような状態も一般動詞で表す。',
      '主語が三人称単数（I と you 以外の1人・1つ）で現在の話のとき、動詞に -s / -es を付ける。',
      '一般動詞のある文に be動詞は入れない。× I am like dogs. → ○ I like dogs.',
      '「〜を」にあたる語（目的語）は動詞のすぐうしろに置く。I play tennis. の語順を崩さない。',
    ],
    sections: [
      {
        heading: 'be動詞と一般動詞は役割が違う',
        body: `英語の動詞は、be動詞と一般動詞の2種類に分かれる。この区別ができていないと、否定文も疑問文も作れない。

■ be動詞（am / are / is）
主語とうしろの語を「＝」で結ぶ。それ自体には動作の意味がない。
　例）I am busy.（私は忙しい）
　例）He is my brother.（彼は私の兄です）

■ 一般動詞
主語が何をするか、どういう状態かを表す。数は非常に多い。
　動作を表すもの：play, run, go, come, study, write, eat, watch, read
　状態を表すもの：like, know, have, want, live, need, love
　例）I play soccer every Sunday.（私は毎週日曜サッカーをします）
　例）She likes music.（彼女は音楽が好きです）

■ 「好きだ」も一般動詞
日本語では「好きです」「持っています」と「です・ます」で終わるため、be動詞を使いたくなる。しかし英語では like・have という一般動詞1語で表すので、be動詞は要らない。
　× I am like dogs.　　○ I like dogs.
　× He is have a car.　　○ He has a car.

★ ポイント：1つの文に動詞は原則1つ。be動詞を置いたら一般動詞は置かない、一般動詞を置いたら be動詞は置かない。この原則を最初に頭に入れておくと、あとで否定文・疑問文を学ぶときに迷わない。`,
      },
      {
        heading: '主語によって形が変わる',
        body: `一般動詞は、主語が三人称単数で、現在のことを言うときだけ形が変わる。それ以外は原形（辞書に載っている形）のまま使う。

■ 三人称単数とは
一人称＝I / we、二人称＝you。それ以外がすべて三人称である。三人称の中で1人・1つのものが三人称単数。
　he, she, it, Ken, my mother, this book, the dog など

■ 現在形の使い分け
　I play tennis.（一人称なのでそのまま）
　You play tennis.（二人称なのでそのまま）
　We / They play tennis.（複数なのでそのまま）
　He plays tennis.（三人称単数なので -s が付く）
　My sister plays tennis.（三人称単数なので -s が付く）

■ 現在形が表す意味
現在形は「今この瞬間」ではなく、ふだんくり返している習慣や、変わらない事実を表す。
　例）I go to school by bike.（自転車通学をしている）
　例）The sun rises in the east.（太陽は東からのぼる）
そのため every day / usually / always などの語と一緒に使われることが多い。

⚠ 注意：-s を付けるのは「三人称」「単数」「現在」の3条件がそろったときだけ。過去の文（I played）や、主語が複数の文（They play）では絶対に付けない。3つの条件のどれか1つでも欠けたら原形のままである。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適する形にしなさい。My parents (live) in Osaka.',
        wrongAnswer: 'lives',
        trapExplanation: '直前の Osaka や、主語が「私の両親」という一つのまとまりに見えることから、三人称単数と勘違いして -s を付けてしまう。',
        correctAnswer: 'live',
        correctExplanation: 'parents は「両親」で2人以上、つまり複数の主語である。複数の主語には -s を付けず原形のまま使うので My parents live in Osaka. が正しい。-s が付くのは主語が「1人・1つ」のときだけだと覚える。',
      },
      {
        question: '誤りを直しなさい。I am like dogs very much.',
        wrongAnswer: 'I am like dogs very much.（そのままでよい）',
        trapExplanation: '日本語の「私は犬が好きです」の「です」を be動詞だと考え、like の前に am を入れてしまう。「好き」を形容詞のように感じているのが原因。',
        correctAnswer: 'I like dogs very much.',
        correctExplanation: 'like は「〜を好む」という意味の一般動詞なので、それだけで述語になる。be動詞は不要である。同じ理由で × He is have a bike. も誤りで、He has a bike. が正しい。「1つの文に動詞は1つ」を確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s038',
    subject: 'eigo',
    examType: 'koko',
    title: '一般動詞②：三人称単数現在の -s の付け方',
    description: '-s / -es のつづりの規則と発音を、例外までふくめて確実にする',
    intro: 'He play soccer. と書いて減点された経験は、だれにでもあります。たった一文字の s ですが、入試の英作文では必ず見られるポイントです。しかも study が studies、go が goes と、付け方そのものにも規則があります。ここで一度、つづりのルールを整理してしまいましょう。',
    order: 538,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '原則は動詞の終わりに -s を付ける（play → plays、run → runs）。',
      '-s / -x / -ch / -sh / -o で終わる語は -es（watch → watches、go → goes）。',
      '「子音字 ＋ y」で終わる語は y を i に変えて -es（study → studies）。「母音字 ＋ y」はそのまま -s（play → plays）。',
      'have → has は特別な形。三単現で haves とは絶対に書かない。',
      '発音は3種類。/s/（likes）・/z/（plays）・/iz/（watches）。語尾の音で決まる。',
    ],
    sections: [
      {
        heading: 'つづりの4つの規則',
        body: `三人称単数現在の -s は、ただ s を足すだけではない場合がある。次の4つに分けて覚える。

■ ①そのまま -s を付ける（大多数）
　play → plays　　run → runs　　like → likes　　come → comes
　read → reads　　speak → speaks　　live → lives　　know → knows

■ ②-s, -x, -ch, -sh, -o で終わる語は -es
　watch → watches　　teach → teaches　　wash → washes
　pass → passes　　fix → fixes　　go → goes　　do → does
　※ この5つの語尾は、s だけを足すと発音しにくいために e を補う。

■ ③「子音字 ＋ y」は y を i に変えて -es
　study → studies　　cry → cries　　carry → carries　　try → tries
　fly → flies　　worry → worries

■ ④「母音字 ＋ y」はそのまま -s
　play → plays　　stay → stays　　enjoy → enjoys　　buy → buys
　y の直前が a, i, u, e, o のときは③の規則を使わない。

■ 特別な形
　have → has（× haves）
　be動詞は am / are / is で別扱い。

★ ポイント：③と④の分かれ目は「y の直前が母音字か子音字か」。study の y の前は d（子音字）なので studies、play の y の前は a（母音字）なので plays。入試ではこの2つを並べて出題することが多い。`,
      },
      {
        heading: '発音の3種類と入試での問われ方',
        body: `つづりだけでなく、-s の発音も出題される。発音は語尾の音によって自動的に決まる。

■ /s/ と読む
無声音（息だけの音 p, k, t, f）で終わる語のあと。
　例）likes, stops, takes, wants, helps, walks

■ /z/ と読む
有声音（のどがふるえる音）や母音で終わる語のあと。数としてはこれが最も多い。
　例）plays, runs, goes, lives, reads, comes, knows

■ /iz/ と読む
s, z, sh, ch, x など「シュ・ズ」系の音で終わる語のあと。音節が1つ増える。
　例）watches, teaches, washes, uses, passes

■ 入試での出題形式
①（　）内の語を適する形に直す問題
　My sister (study) English every day. → studies
②下線部の発音が他と異なるものを選ぶ問題
　likes / stops / plays / takes → plays だけ /z/
③英作文で自然に使わせる問題（最も配点が大きい）

⚠ 注意：does は go と同じ扱いで -es が付くが、発音は /dʌz/ で「ドゥーズ」となり、do の音とは変わる。goes も /gouz/。つづりの規則と発音の変化は別々に確認しておくこと。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適する形にしなさい。My brother (study) math every night.',
        wrongAnswer: 'studys',
        trapExplanation: '「三単現は s を足すだけ」と単純に覚えているため、y をそのまま残して s を付けてしまう。',
        correctAnswer: 'studies',
        correctExplanation: 'study は y の直前が d という子音字なので、y を i に変えて -es を付け studies となる。同じ仲間に cry → cries、carry → carries、try → tries がある。y の1つ前の文字を必ず確認する。',
      },
      {
        question: '（　）内の語を適する形にしなさい。He (play) the piano very well.',
        wrongAnswer: 'plaies',
        trapExplanation: 'study → studies の規則を覚えた直後に、「y で終わる語はすべて ies」と拡大して当てはめてしまう。規則を覚えたことが逆に失点につながる典型例。',
        correctAnswer: 'plays',
        correctExplanation: 'play は y の直前が a という母音字なので、y を変えずにそのまま -s を付けて plays となる。stay → stays、enjoy → enjoys、buy → buys も同じ。「子音字＋y なら ies、母音字＋y なら s」と対で覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s039',
    subject: 'eigo',
    examType: 'koko',
    title: 'be動詞と一般動詞を混ぜない',
    description: '× I am play tennis. 型のミスと、逆に動詞が抜けるミスを両方つぶす',
    intro: '英作文でいちばん多い減点は、難しい単語のつづりミスではありません。I am play tennis. のように、be動詞と一般動詞を同時に置いてしまう誤りです。日本語の「〜します」「〜です」の感覚をそのまま英語に持ちこむと起こります。原因が分かれば、確実に防げるミスです。',
    order: 539,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '1つの文に述語動詞は1つ。be動詞と一般動詞を並べて置くことはできない。',
      '× I am play tennis. → ○ I play tennis.（動作を言うなら一般動詞だけ）',
      '形容詞・名詞を述語にするときは be動詞が必要。× She kind. → ○ She is kind.',
      '「〜しています」（進行形）だけは be動詞 ＋ 動詞のing形という決まった組み合わせ。',
      '英作文では書いたあとに「動詞はいくつあるか」を数えて確かめる。',
    ],
    sections: [
      {
        heading: 'なぜ am play のような誤りが起きるのか',
        body: `日本語は「私はテニスをします」「私は忙しいです」のように、どちらも「〜ます・です」で終わる。この語尾の感覚を英語に持ちこむと、be動詞を「です」の訳として付け足してしまう。

■ よくある誤りと直し方
　× I am play tennis every Sunday.
　○ I play tennis every Sunday.
　　→ play という一般動詞がすでに述語なので am は不要。

　× He is have two dogs.
　○ He has two dogs.
　　→ have が述語。三人称単数なので has にする。

　× My mother is cook dinner every day.
　○ My mother cooks dinner every day.

■ 逆に、be動詞が必要な文
うしろが名詞や形容詞のときは、be動詞がないと文にならない。
　× She kind to everyone.
　○ She is kind to everyone.
　× I a member of the tennis club.
　○ I am a member of the tennis club.

★ ポイント：英語の文は「主語 ＋ 述語動詞」が骨組みである。うしろに来るのが動作なら一般動詞1つ、名詞や形容詞なら be動詞1つ。どちらを置くかを決めてから書き始めるとミスが消える。`,
      },
      {
        heading: '例外に見えるが例外ではない形',
        body: `be動詞と一般動詞らしきものが並ぶ形が、実際の英文には存在する。ただしこれは「2つの述語動詞」ではない。

■ 進行形（be動詞 ＋ 動詞のing形）
　例）I am playing tennis now.（今テニスをしているところだ）
　例）She is studying in her room.
ing形は「〜している」という状態を表す形になっており、be動詞と組み合わせて1つの述語をつくる。playing だけでは述語になれないので be動詞が要る。

■ 現在形との意味の違い
　I play tennis.　ふだんテニスをする（習慣）
　I am playing tennis.　今まさにやっている最中（進行中）
　「毎週日曜日にテニスをします」を進行形で書くと誤りになる。

■ 受け身（be動詞 ＋ 過去分詞）※中3で学ぶ
　例）This book is read by many people.（多くの人に読まれている）
これも be動詞と過去分詞が組んで1つの述語になっている形である。

⚠ 注意：「be動詞と一般動詞を並べてはいけない」という原則は、あくまで原形の一般動詞についての話。× I am play（原形）は誤りだが、○ I am playing（ing形）は正しい。原形が並んでいたら必ず誤りだと判断してよい。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りがあれば直しなさい。My father is go to work by train.',
        wrongAnswer: 'My father is go to work by train.（正しい）',
        trapExplanation: '「父は電車で仕事に行きます」の「行きます」を go、「ます」を is と、日本語を2つに分けて訳してしまう。日本語の語尾を独立した語として訳す癖が原因。',
        correctAnswer: 'My father goes to work by train.',
        correctExplanation: 'go だけで「行く」という述語になるので is は不要。主語 My father は三人称単数で現在の習慣を表すため goes とする。動詞を数えて2つあれば（進行形・受け身でない限り）どちらかが余分だと判断する。',
      },
      {
        question: '「彼女はとても親切です」を英語にしなさい。',
        wrongAnswer: 'She very kind.',
        trapExplanation: '前の問題で「be動詞を入れすぎるな」と意識しすぎると、今度は必要な be動詞まで落としてしまう。kind が形容詞であることを見落としている。',
        correctAnswer: 'She is very kind.',
        correctExplanation: 'kind は形容詞なので、それだけでは述語になれない。主語と形容詞をつなぐ be動詞 is が必ず要る。うしろが動作を表す動詞なら be動詞は不要、うしろが名詞・形容詞なら be動詞が必要、と条件で切り分ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s040',
    subject: 'eigo',
    examType: 'koko',
    title: '過去の文：was / were と一般動詞の過去形',
    description: 'be動詞の過去形と、規則動詞・不規則動詞の過去形を使い分ける',
    intro: '「昨日」の話をするのに現在形のまま書いてしまう答案は驚くほど多いものです。yesterday や last week という語が文のどこかにあれば、動詞は過去形にしなければなりません。時を表す語は、動詞の形を決める合図です。その合図の読み取り方を身につけます。',
    order: 540,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の過去形は2つだけ。am / is → was、are → were。',
      '一般動詞の規則変化は -ed を付ける（played, watched）。e で終われば -d（liked）。',
      '「子音字 ＋ y」は y を i に変えて -ed（studied）。短母音 ＋ 子音字1つは子音字を重ねる（stopped）。',
      '不規則動詞は形を丸暗記する（go → went、have → had、see → saw、come → came）。',
      'yesterday / last 〜 / 〜 ago / then は過去形の合図。文中にあれば必ず過去形にする。',
    ],
    sections: [
      {
        heading: 'be動詞の過去形は2つだけ',
        body: `現在形の am / are / is は、過去形になると was と were の2つに集約される。覚える量が減るので、ここは得点源にしたい。

■ 対応関係
　I am → I was
　He / She / It is → He / She / It was
　You are → You were
　We / They are → We / They were

■ 使い方
　例）I was very busy yesterday.（昨日はとても忙しかった）
　例）They were in the library then.（そのとき彼らは図書館にいた）
　例）The movie was interesting.（その映画はおもしろかった）

■ 過去を示す合図の語
　yesterday（昨日）／last night, last week, last year（昨夜、先週、昨年）
　three days ago（3日前）／then, at that time（そのとき）
　when I was a child（子どものころ）
これらが文の中にあれば、動詞は必ず過去形になる。

★ ポイント：主語が単数か複数かの判断は現在形とまったく同じで、単数 → was、複数 → were。you だけは1人でも were を使う（you are の対応がそのまま残る）。ここが唯一のひっかけどころである。`,
      },
      {
        heading: '一般動詞の過去形：規則変化と不規則変化',
        body: `一般動詞の過去形は、-ed を付ける規則動詞と、形が変わる不規則動詞に分かれる。主語が何であっても形は1つで、三単現のような区別はない。

■ 規則変化の4つの型
①そのまま -ed：play → played、watch → watched、want → wanted
②e で終わる語は -d だけ：like → liked、live → lived、use → used
③子音字 ＋ y は y を i に変えて -ed：study → studied、cry → cried、carry → carried
④短母音 ＋ 子音字1つで終わる語は子音字を重ねて -ed：stop → stopped、plan → planned

■ よく出る不規則動詞
　go → went　　come → came　　see → saw　　have → had
　do → did　　get → got　　take → took　　make → made
　write → wrote　　read → read（つづりは同じ、発音は /red/）
　put → put　　cut → cut（形が変わらない）

■ 主語による変化はない
　I played / He played / They played　いずれも同じ形。
三単現の -s は現在形だけの決まりなので、過去形に -s を付けることはない。

⚠ 注意：read や put のように現在形と同じつづりの不規則動詞があるため、つづりだけでは時制が判断できないことがある。yesterday などの語や前後の文の流れで時制を確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。I go to the library yesterday.',
        wrongAnswer: 'I go to the library yesterday.（正しい）',
        trapExplanation: '文の前半を書いた時点で時制を決めてしまい、最後の yesterday を読み飛ばす。日本語では「昨日」が文頭に来ることが多いのに対し、英語では文末に置かれるため見落としやすい。',
        correctAnswer: 'I went to the library yesterday.',
        correctExplanation: 'yesterday は過去を表す語なので、動詞は過去形にする。go の過去形は不規則変化で went。英文を読むときも書くときも、文末まで見てから時制を決める習慣をつける。',
      },
      {
        question: '誤りを直しなさい。He was played soccer last Sunday.',
        wrongAnswer: 'He was played soccer last Sunday.（正しい）',
        trapExplanation: '「過去の文だから was を入れる」「過去形だから played にする」と、過去を表す印を二重に付けてしまう。過去の合図が2か所に出てしまった形。',
        correctAnswer: 'He played soccer last Sunday.',
        correctExplanation: 'played だけで過去を表せるので was は不要。be動詞と一般動詞は並べられないという原則もここで効く。なお was played という形は「〜された」という受け身であり、この文の意味には合わない。',
      },
    ],
  },
  // ─────────────── 2. 否定文・疑問文の作り方（s041〜s046） ───────────────
  {
    id: 'koko_eigo_s041',
    subject: 'eigo',
    examType: 'koko',
    title: 'be動詞の否定文：not の位置',
    description: 'be動詞のうしろに not を置くだけという原則と、短縮形の作り方を確実にする',
    intro: '日本語では「私は忙しくありません」と、打ち消しの言葉が文の最後に来ます。英語は逆で、打ち消しの not は前のほう、be動詞のすぐうしろに入ります。位置がひっくり返るので、日本語の語順のまま訳すと必ず崩れます。まずは not の定位置を体にしみこませましょう。',
    order: 541,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の否定文は「be動詞 ＋ not」。語順を変えたり語を足したりしない。',
      "短縮形は is not → isn't、are not → aren't、was not → wasn't、were not → weren't。",
      "am not に短縮形はない。I am not → I'm not と書く（× I amn't）。",
      '一般動詞の文に be動詞の否定を使ってはいけない。× He isn\'t play soccer.',
      'not のうしろに a / any を伴う形もよく出る。He is not a doctor. / There are not any books.',
    ],
    sections: [
      {
        heading: 'not は be動詞の直後に入れるだけ',
        body: `be動詞の文を否定文にする手順は、たった1つ。be動詞のすぐうしろに not を入れる。語順の入れかえも、語の追加も要らない。

■ 作り方
　I am busy.（私は忙しい）
　→ I am not busy.（私は忙しくない）
　He is a teacher.
　→ He is not a teacher.
　They were in the park.
　→ They were not in the park.

■ 短縮形
　is not → isn't　　are not → aren't
　was not → wasn't　　were not → weren't
　例）She isn't from Canada. / They weren't at home.

■ am not だけは特別
am not には isn't のような1語の短縮形が存在しない。主語と be動詞のほうを縮めて I'm not とする。
　○ I am not hungry. ／ ○ I'm not hungry.
　× I amn't hungry.

■ 主語 ＋ be動詞の短縮もできる
　He is not → He's not（＝ He isn't）
　どちらの縮め方でも意味は同じ。答案ではどちらを書いてもよい。

★ ポイント：日本語につられて「忙しくない」を busy not のように書いてしまう答案がある。英語では not は必ず be動詞のうしろ、説明する語（形容詞や名詞）の前に来る。`,
        figureId: 'lf_kokoeigoext02_041',
      },
      {
        heading: '一般動詞の否定と混同しない',
        body: `否定文の作り方は、文の述語が be動詞か一般動詞かでまったく違う。ここを取りちがえるミスは入試でもよく出題される。

■ be動詞の文 → not を足すだけ
　He is busy. → He is not busy.

■ 一般動詞の文 → don't / doesn't を足して動詞は原形
　He plays soccer. → He does not play soccer.
　× He isn't play soccer.（be動詞と一般動詞が並んでいて誤り）

■ 判断の手順
①文の述語動詞を探す。
②それが am / are / is / was / were なら、うしろに not を入れる。
③それ以外（一般動詞）なら don't / doesn't / didn't を主語のうしろに入れ、動詞を原形にもどす。

■ 否定文でよく使う語
　not 〜 any（1つも〜ない）：I don't have any money.
　never（決して〜ない）：He is never late.（never は not と一緒に使わない）
　no ＋ 名詞：I have no brothers.（＝ I don't have any brothers.）

⚠ 注意：「〜ではありません」という日本語だけを見て be動詞の否定を選ばないこと。「サッカーをしません」なら一般動詞の否定、「サッカー選手ではありません」なら be動詞の否定になる。うしろが動作か名詞かで見分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はおなかがすいていません」を英語にしなさい。',
        wrongAnswer: "I amn't hungry.",
        trapExplanation: "isn't / aren't という短縮形を覚えたあと、同じ規則が am にも当てはまると考えて amn't を作ってしまう。規則の一般化によるミス。",
        correctAnswer: "I'm not hungry.（I am not hungry. も可）",
        correctExplanation: "am not には1語の短縮形がなく、amn't という語は英語に存在しない。短縮するなら主語のほうと縮めて I'm not とする。短縮しなければ I am not hungry. でよい。",
      },
      {
        question: '誤りを直しなさい。My brother isn\'t play the guitar.',
        wrongAnswer: "My brother isn't play the guitar.（正しい）",
        trapExplanation: "「〜しません」という否定の日本語を見て、覚えたばかりの isn't を機械的に当てはめてしまう。述語が一般動詞 play であることを確認していない。",
        correctAnswer: "My brother doesn't play the guitar.",
        correctExplanation: "述語は一般動詞 play なので、否定文は doesn't を主語のうしろに置き、動詞は原形 play のままにする。isn't play のように be動詞と一般動詞の原形が並ぶ形は必ず誤りだと判断してよい。",
      },
    ],
  },

  {
    id: 'koko_eigo_s042',
    subject: 'eigo',
    examType: 'koko',
    title: 'be動詞の疑問文と答え方',
    description: 'be動詞を文頭に出す語順と、Yes / No で答えるときの主語の直し方を身につける',
    intro: '日本語は文の最後に「か」を付ければ質問になりますが、英語はそうはいきません。語の順番そのものを入れかえます。さらに厄介なのが答え方で、Is Tom your brother? に Yes, Tom is. と答えると不自然です。質問と答えはセットで練習すると一気に身につきます。',
    order: 542,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の疑問文は be動詞を主語の前に出す。Are you 〜? / Is he 〜? / Were they 〜?',
      '答えるときは主語を代名詞に置きかえる。Tom → he、this / that → it、these / those → they。',
      'Yes の答えでは短縮形を使わない。○ Yes, I am.／× Yes, I\'m.',
      "No の答えでは短縮形を使ってよい。No, I'm not. / No, he isn't.",
      '文末に「?」を付けるだけでは疑問文にならない。語順の入れかえが必要。',
    ],
    sections: [
      {
        heading: '疑問文は be動詞を先頭に出す',
        body: `be動詞の文を疑問文にするには、be動詞を主語の前に移動させ、文末に「?」を付ける。文字の順番を入れかえるだけで、語を足したり減らしたりはしない。

■ 作り方
　You are a soccer fan.
　→ Are you a soccer fan?
　He is from Australia.
　→ Is he from Australia?
　They were busy yesterday.
　→ Were they busy yesterday?

■ 語順を守る
　× You are a soccer fan?（語順が肯定文のまま）
　○ Are you a soccer fan?
話し言葉では前者のような言い方もあるが、入試の答案では必ず語順を入れかえた形で書く。

■ 主語が長いときも同じ
　Ken and his sister are in the same class.
　→ Are Ken and his sister in the same class?
　主語のかたまり全体をそのまま be動詞のうしろに置く。

★ ポイント：疑問文を作るときにいちばん多いミスは、be動詞を出したあとに元の位置にも残してしまうこと（× Are you are a soccer fan?）。移動であって複製ではない。`,
      },
      {
        heading: 'Yes / No の答え方',
        body: `疑問文に答えるときは、主語を代名詞に置きかえ、be動詞をそろえる。日本語の感覚で名詞をくり返すと不自然になる。

■ 主語の置きかえ
　Tom → he　　Mary → she　　this / that → it
　these / those → they　　your father → he　　your parents → they
　例）Is Tom your brother? → Yes, he is. / No, he isn't.
　例）Is that your bike? → Yes, it is. / No, it isn't.
　例）Are these your books? → Yes, they are. / No, they aren't.

■ you で聞かれたら I か we で答える
　Are you a student? → Yes, I am.
　Are you and Ken in the tennis club? → Yes, we are.

■ 短縮形の決まり
　Yes の答えでは短縮しない。
　　○ Yes, I am. ／ × Yes, I'm.
　　○ Yes, he is. ／ × Yes, he's.
　No の答えでは短縮してよい。
　　No, I'm not. ／ No, he isn't. ／ No, they aren't.
文の最後に来る語は強く発音されるため、短縮した形では言えない、というのがその理由である。

⚠ 注意：Is this your pen? に Yes, this is. と答えるのは誤り。this / that は答えの中では it に変える。Are those your shoes? なら they を使う。`,
      },
    ],
    trapExamples: [
      {
        question: 'Is Tom your brother? に Yes で答えなさい。',
        wrongAnswer: 'Yes, Tom is.',
        trapExplanation: '日本語では「はい、トムは私の兄です」と名前をくり返しても自然なので、そのまま英語にしてしまう。代名詞に置きかえるという英語の約束を使えていない。',
        correctAnswer: 'Yes, he is.',
        correctExplanation: '答えの文では、聞かれた主語を代名詞に置きかえる。Tom は男性1人なので he。Is that your bag? なら Yes, it is.、Are these your pens? なら Yes, they are. のように、指すものによって it / they を使い分ける。',
      },
      {
        question: '「あなたは疲れていますか」を英語にしなさい。',
        wrongAnswer: 'You are tired?',
        trapExplanation: '日本語が「〜ですか」と語尾だけで疑問を表すため、英語も肯定文の語順のまま「?」を付ければよいと考えてしまう。',
        correctAnswer: 'Are you tired?',
        correctExplanation: '英語の疑問文は be動詞を主語の前に出して語順を変える。Are you tired? が正しい形である。書いたあとに「文の先頭が be動詞になっているか」を必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s043',
    subject: 'eigo',
    examType: 'koko',
    title: "一般動詞の否定文：don't / doesn't / didn't",
    description: '助動詞 do を使った否定の作り方と、動詞を原形にもどす原則をおさえる',
    intro: 'He doesn\'t plays tennis. ――一見よさそうに見えるこの文は誤りです。doesn\'t の中にすでに三単現の s が入っているので、動詞まで s を付けると二重になってしまうのです。この「s は一か所だけ」という感覚をつかむと、否定文の形は迷わなくなります。',
    order: 543,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      "一般動詞の否定文は「主語 ＋ don't / doesn't / didn't ＋ 動詞の原形」。",
      '主語が三人称単数で現在なら doesn\'t、それ以外の現在なら don\'t、過去ならすべて didn\'t。',
      "doesn't / didn't のうしろの動詞は必ず原形。× doesn't plays／× didn't played。",
      'do は助動詞としてはたらいており、動詞そのものの意味はもたない。',
      "not 〜 any の形もよく出る。I don't have any brothers.（1人もいない）",
    ],
    sections: [
      {
        heading: '3つの形の使い分け',
        body: `一般動詞の否定文では、do / does / did という助動詞を借りてきて not を付ける。動詞そのものは原形にもどす。

■ 現在の否定文
　主語が I / you / we / they / 複数 → do not（don't）
　　例）I don't like natto.
　　例）They don't live in Tokyo.
　主語が三人称単数（he / she / it / 人名 / 単数の名詞）→ does not（doesn't）
　　例）He doesn't play the guitar.
　　例）My sister doesn't eat breakfast.

■ 過去の否定文
　主語が何であっても did not（didn't）
　　例）I didn't go to school yesterday.
　　例）She didn't come to the party.

■ 動詞は必ず原形にもどす
　He plays tennis. → He doesn't play tennis.（× plays）
　She studied English. → She didn't study English.（× studied）
　三単現の -s も過去形の -ed も、does / did のほうがすでに引き受けているので、動詞側では表さない。

★ ポイント：「s や ed は文の中で一度だけ」と覚える。does に s があるから play は原形、did が過去を表しているから study は原形、というように、印が二重にならないよう確認する。`,
        figureId: 'lf_kokoeigoext02_043',
      },
      {
        heading: '否定文でよく使う表現',
        body: `否定文には、肯定文とは形が変わる語がある。入試ではこの変化を利用した書きかえ問題が出る。

■ some → any
肯定文の some は、否定文・疑問文では any に変える。
　I have some questions. → I don't have any questions.
　※ any 〜 not ではなく、not 〜 any の順に置く。

■ not any ＝ no
　I don't have any brothers. ＝ I have no brothers.
　どちらも「兄弟が1人もいない」の意味。no を使うときは don't を使わない（× I don't have no brothers.）。

■ 部分否定に注意
　I don't know all of them.（全員を知っているわけではない）
　全部を否定しているのではなく、一部を否定している言い方である。

■ never は not を伴わない
　He never eats breakfast.（決して朝食を食べない）
　× He doesn't never eat breakfast.
　never だけで否定の意味をもつので、don't は要らない。

⚠ 注意：否定の語を1つの文に2つ入れてはいけない。don't と no、doesn't と never を重ねて使うのは誤りである。日本語の「1つも〜ない」を直訳しようとすると起こりやすいミスなので気をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。My father doesn\'t drinks coffee.',
        wrongAnswer: "My father doesn't drinks coffee.（正しい）",
        trapExplanation: '主語が三人称単数なので動詞に -s が要ると考え、doesn\'t のあとの動詞にも s を付けてしまう。三単現の規則を否定文にもそのまま持ちこんだ形。',
        correctAnswer: "My father doesn't drink coffee.",
        correctExplanation: "doesn't の中の does がすでに三人称単数現在を表しているので、そのうしろの動詞は原形 drink にする。同じ理由で didn't のあとも原形（× didn't went → ○ didn't go）。",
      },
      {
        question: '「私の姉はコーヒーを飲みません」を英語にしなさい。',
        wrongAnswer: "My sister don't drink coffee.",
        trapExplanation: "don't のほうが使い慣れているため、主語の人称を確かめずに don't を選んでしまう。動詞を原形にすることばかり意識して、do と does の区別がおろそかになる。",
        correctAnswer: "My sister doesn't drink coffee.",
        correctExplanation: "My sister は三人称単数なので doesn't を使う。「動詞は原形」「do か does かは主語で決める」の2点をセットで確認する。過去の文ならどの主語でも didn't になる。",
      },
    ],
  },

  {
    id: 'koko_eigo_s044',
    subject: 'eigo',
    examType: 'koko',
    title: '一般動詞の疑問文と答え方',
    description: 'Do / Does / Did で始める疑問文と、do を使った答え方をそろえる',
    intro: 'Are you play tennis? と書いてしまう人は少なくありません。be動詞の疑問文を覚えた直後ほど、この誤りが増えます。一般動詞の文では be動詞は出る幕がなく、代わりに Do や Does が先頭に立ちます。どちらの助けを借りるのか、文の述語を見て決める練習をします。',
    order: 544,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞の疑問文は「Do / Does / Did ＋ 主語 ＋ 動詞の原形 〜?」。',
      '主語が三人称単数で現在なら Does、それ以外の現在なら Do、過去はすべて Did。',
      'Does / Did のうしろの動詞は原形。× Does he plays 〜?／× Did you went 〜?',
      '答えも do を使う。Yes, he does. / No, he doesn\'t. / Yes, I did. / No, I didn\'t.',
      'be動詞の疑問文と混ぜない。× Are you play tennis? → ○ Do you play tennis?',
    ],
    sections: [
      {
        heading: 'Do / Does / Did を文頭に置く',
        body: `一般動詞の文には、前に出せる be動詞がない。そこで助動詞 do を借りてきて文頭に置く。

■ 作り方
　You play tennis. → Do you play tennis?
　He plays tennis. → Does he play tennis?
　She went to Kyoto. → Did she go to Kyoto?

■ 3つの使い分け
　Do ＋ I / you / we / they / 複数の主語（現在）
　Does ＋ he / she / it / 人名 / 単数の名詞（現在）
　Did ＋ すべての主語（過去）

■ 動詞は原形にもどす
　× Does he plays soccer?　○ Does he play soccer?
　× Did you went there?　○ Did you go there?
Does に三単現の s、Did に過去の意味がすでに含まれているので、動詞は原形で置く。否定文とまったく同じ考え方である。

■ be動詞と混ぜない
　× Are you play tennis?
　× Is he like music?
これらは be動詞と一般動詞の原形が並んでいて誤り。述語が一般動詞なら Do / Does / Did を使う。

★ ポイント：疑問文を作るときは、まず「この文の述語は be動詞か一般動詞か」を必ず確かめる。be動詞なら前に出す、一般動詞なら do を借りる。この二択が全体の入り口になる。`,
      },
      {
        heading: '答え方と受け答えの組み立て',
        body: `Do / Does / Did で聞かれたら、答えも do / does / did を使う。be動詞で答えてはいけない。

■ 基本の答え方
　Do you like music? → Yes, I do. / No, I don't.
　Does she play the piano? → Yes, she does. / No, she doesn't.
　Did they win the game? → Yes, they did. / No, they didn't.

■ 主語は代名詞に置きかえる
　Does Ken speak English? → Yes, he does.
　Did your parents go out? → Yes, they did.

■ 答えのあとに情報を足す
入試の対話文では、Yes / No のあとに一文を続けることが多い。
　Do you play any sports? — Yes, I do. I play basketball.
　Did you enjoy the movie? — No, I didn't. It was too long.

■ 疑問文と時制をそろえる
　Did you see him yesterday? — Yes, I did.（× Yes, I do.）
聞かれた文の助動詞と同じものを使うのが原則である。

⚠ 注意：Does she play the piano? に Yes, she plays. と答えるのは誤り。答えの部分では動詞をくり返さず、does だけで受ける。逆に Yes, she is. のように be動詞で答えるのも誤りである。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。Does your brother likes soccer?',
        wrongAnswer: 'Does your brother likes soccer?（正しい）',
        trapExplanation: '主語 your brother が三人称単数だと分かっているので、Does を置いたうえに動詞にも -s を付けてしまう。三単現の印を二重に付ける典型的なミス。',
        correctAnswer: 'Does your brother like soccer?',
        correctExplanation: 'Does がすでに三人称単数現在を表しているので、そのうしろの動詞は原形 like にする。答えるときは Yes, he does. / No, he doesn\'t. のように does で受ける。',
      },
      {
        question: '「あなたはテニスをしますか」を英語にしなさい。',
        wrongAnswer: 'Are you play tennis?',
        trapExplanation: 'be動詞の疑問文の作り方（be動詞を前に出す）を先に覚えているため、一般動詞の文にもそのまま当てはめてしまう。文の述語が play であることを確認していない。',
        correctAnswer: 'Do you play tennis?',
        correctExplanation: '述語が一般動詞 play なので、疑問文は Do を文頭に置いて Do you play tennis? とする。be動詞と一般動詞の原形が並ぶ形（are play）は必ず誤りだと見抜けるようにする。',
      },
    ],
  },

  {
    id: 'koko_eigo_s045',
    subject: 'eigo',
    examType: 'koko',
    title: '疑問詞のある疑問文：語順の原則',
    description: 'What / Where / When / Why / How を使った疑問文の作り方と答え方を整理する',
    intro: 'Yes か No で答えられない質問――「何を」「どこで」「なぜ」――を作るには、まず疑問詞を先頭に置きます。そのうしろは、これまで習った疑問文の語順をそっくりそのまま続けるだけです。この「二階建て」の仕組みが見えると、長い疑問文も組み立てられるようになります。',
    order: 545,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '語順は「疑問詞 ＋ 疑問文の語順」。What do you want? / Where is he?',
      '主な疑問詞：what（何）・who（だれ）・when（いつ）・where（どこ）・why（なぜ）・how（どのように）。',
      '疑問詞のある疑問文には Yes / No で答えない。聞かれた中身を答える。',
      'how many / how much / how long / how often のように how は他の語と組んで使う。',
      'how many のうしろの名詞は必ず複数形。How many books do you have?',
    ],
    sections: [
      {
        heading: '疑問詞 ＋ 疑問文の語順',
        body: `疑問詞のある疑問文は、二段階で組み立てる。①まず普通の疑問文を作る、②その前に疑問詞を置く。この順で考えれば語順を間違えない。

■ 一般動詞の文
　You want a new bike.
　→ Do you want a new bike?（疑問文にする）
　→ What do you want?（たずねたい部分を what にして前に出す）

　He lives in Osaka.
　→ Does he live in Osaka?
　→ Where does he live?

■ be動詞の文
　She is in the library.
　→ Is she in the library?
　→ Where is she?

■ 答え方
疑問詞で聞かれたら、Yes / No ではなく中身を答える。
　What do you want? — I want a new bike.（× Yes, I do.）
　Where does he live? — He lives in Osaka.
　When is your birthday? — It's May 5th.

★ ポイント：疑問詞を前に出しても、うしろの部分は疑問文の語順のままである。× What you do want? のように肯定文の語順にもどしてしまう誤りが非常に多い。`,
        figureId: 'lf_kokoeigoext02_045',
      },
      {
        heading: 'how の仲間と what の仲間',
        body: `how と what は、うしろに別の語を従えて1つの疑問詞のかたまりを作ることがある。かたまり全体を文頭に置く。

■ how の仲間
　How many 〜?（いくつ）：How many CDs do you have?
　How much 〜?（いくら・どれくらいの量）：How much is this bag?
　How long 〜?（どれくらいの長さ・期間）：How long did you stay in Kyoto?
　How often 〜?（どれくらいの頻度で）：How often do you play tennis?
　How old 〜?（何歳）：How old is your sister?
　How far 〜?（どれくらいの距離）：How far is it from here to the station?

■ what の仲間
　What time 〜?（何時に）：What time do you get up?
　What sport 〜?（どのスポーツ）：What sport do you like?
　What color 〜?（何色）：What color is your bike?

■ 数えられるかどうかで how many / how much を選ぶ
　数えられる名詞 → how many ＋ 複数形（how many books）
　数えられない名詞 → how much ＋ そのまま（how much water、how much money）

⚠ 注意：How many のうしろの名詞は必ず複数形にする。× How many book do you have? は誤りで、正しくは How many books do you have?。「何冊」という日本語には複数の印がないので、意識して s を付ける必要がある。`,
      },
    ],
    trapExamples: [
      {
        question: '正しい英文に並べかえなさい。（you / what / want / do / ?）',
        wrongAnswer: 'What you do want?',
        trapExplanation: '疑問詞を前に出したことで疑問文が完成したと感じてしまい、そのうしろを肯定文の語順（you do want）にもどしてしまう。日本語の「あなたは何がほしいですか」の語順に引っぱられている。',
        correctAnswer: 'What do you want?',
        correctExplanation: '「疑問詞 ＋ 疑問文の語順」が原則なので、What のうしろは do you want と疑問文の並びを保つ。まず Do you want 〜? を作り、その前に What を置くと考えると間違えない。',
      },
      {
        question: '「あなたは本を何冊持っていますか」を英語にしなさい。',
        wrongAnswer: 'How many book do you have?',
        trapExplanation: '日本語の「何冊」には複数を表す印がないため、名詞をそのままの形で書いてしまう。数をたずねている時点で2つ以上を想定している、という英語の考え方が抜けている。',
        correctAnswer: 'How many books do you have?',
        correctExplanation: 'How many のうしろの名詞は必ず複数形にする。数えられない名詞をたずねるときは How much water do you need? のように how much を使い、名詞は複数形にしない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s046',
    subject: 'eigo',
    examType: 'koko',
    title: '主語をたずねる疑問文',
    description: 'Who / What が主語になるときの語順と、動詞の形・答え方をおさえる',
    intro: '「だれがこの窓を割ったのですか」と聞くとき、英語では do も did も使いません。たずねたい「だれが」がそのまま主語の位置にあるので、語順を入れかえる必要がないのです。これまでの疑問文とは作り方が違う特別な形なので、独立して覚えてしまいましょう。',
    order: 546,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '疑問詞が主語になるときは、語順を変えず「疑問詞 ＋ 動詞 〜?」の形にする。',
      'Who / What が主語のとき、動詞は三人称単数扱い。現在なら -s が付く（Who plays 〜?）。',
      'do / does / did は使わない。× Who did break the window?',
      '答えは「主語 ＋ do / does / did」の形が便利。— Ken does. / My mother did.',
      'Who is 〜? のように be動詞が続く形もある。Who is that girl? — She is Yumi.',
    ],
    sections: [
      {
        heading: '疑問詞が主語のときは語順を変えない',
        body: `これまで学んだ疑問文は、たずねたい部分が目的語や場所だったので、語順の入れかえが必要だった。しかし、たずねたい部分が主語そのものである場合は、その位置に疑問詞を置くだけでよい。

■ 目的語をたずねる場合（これまでの形）
　You saw Ken.（あなたはケンを見た）
　→ Who did you see?（あなたはだれを見ましたか）
　うしろの did you see は疑問文の語順。

■ 主語をたずねる場合（今回の形）
　Ken broke the window.（ケンが窓を割った）
　→ Who broke the window?（だれが窓を割りましたか）
　主語の位置に who を置くだけ。did は使わない。

■ 例
　Who wants some tea?（だれかお茶がほしい人はいますか）
　Who lives in that house?（だれがあの家に住んでいますか）
　What happened yesterday?（昨日何が起きたのですか）
　What made you so happy?（何があなたをそんなに幸せにしたのですか）

★ ポイント：疑問文なのに do / does / did が出てこない――これが主語をたずねる疑問文の目印である。「だれが〜しますか」「何が〜しますか」と訳せるときは、この形だと判断してよい。`,
      },
      {
        heading: '動詞の形と答え方',
        body: `疑問詞 who / what が主語になるときは、「だれか1人・何か1つ」として扱う。そのため動詞は三人称単数の形になる。

■ 現在の文では -s が付く
　Who plays the piano in your family?（× Who play）
　Who wants to go with me?
　What makes you think so?

■ 過去の文はふつうの過去形
　Who broke the window?
　Who came to the party?
　Who ate my cake?

■ 答え方
①「主語 ＋ do / does / did」で短く答える。
　Who plays the piano? — My sister does.
　Who broke the window? — Ken did.
　Who is absent today? — Tom is.（be動詞の文なら be動詞で受ける）
②文で答えてもよい。
　Who plays the piano? — My sister plays the piano.

■ Who is 〜? の形
　Who is that tall boy? — He is my cousin.
この場合の who は主語で、is that tall boy ではなく who is が骨組みになっている。

⚠ 注意：答えるときに be動詞と一般動詞を取りちがえないこと。Who cooks dinner? に対して × My mother is. は誤りで、○ My mother does. が正しい。聞かれた文の動詞の種類に合わせて受ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「だれがこの本を書いたのですか」を英語にしなさい。',
        wrongAnswer: 'Who did write this book?',
        trapExplanation: '「疑問文には do / does / did が要る」と機械的に覚えているため、主語をたずねる形にも did を入れてしまう。who がすでに主語の位置にあることに気づいていない。',
        correctAnswer: 'Who wrote this book?',
        correctExplanation: 'who が主語なので語順を変える必要がなく、did も不要である。動詞をそのまま過去形にして Who wrote this book? とする。目的語をたずねる What did you write? との違いを比べて覚えるとよい。',
      },
      {
        question: 'Who cooks dinner in your family? に「母です」と答えなさい。',
        wrongAnswer: 'My mother is.',
        trapExplanation: '「母です」という日本語の「です」に引かれて be動詞で答えてしまう。聞かれた文の動詞が一般動詞 cooks であることを見ていない。',
        correctAnswer: 'My mother does.',
        correctExplanation: '一般動詞で聞かれたら do / does / did で受けるのが原則。cooks は三人称単数現在なので does を使う。Who is absent today? のように be動詞で聞かれた場合は Tom is. と be動詞で受ける。',
      },
    ],
  },
  // ─────────────── 3. 第1文型SV・第2文型SVC（s047〜s051） ───────────────
  {
    id: 'koko_eigo_s047',
    subject: 'eigo',
    examType: 'koko',
    title: '5文型の全体像：S・V・O・C と修飾語M',
    description: '英文の骨組みを作る4つの要素と、数に入れない修飾語のちがいをつかむ',
    intro: '長い英文になると、どこまでが主語でどれが動詞なのか分からなくなります。ところが英文の形は、たった5つの型に整理できます。しかも見分ける手がかりは、飾りの部分を消して骨組みだけを取り出すこと。この作業に慣れると、長文の一文一文がすっきり読めるようになります。',
    order: 547,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      '文の要素はS（主語）・V（動詞）・O（目的語）・C（補語）の4つ。それ以外はM（修飾語）。',
      '5つの型：①SV ②SVC ③SVO ④SVOO ⑤SVOC。',
      'C は主語や目的語を説明する語で、名詞か形容詞が入る。副詞は C になれない。',
      'O は「〜を・〜に」にあたる語で、名詞か代名詞（目的格）が入る。',
      '場所・時・様子を表す語句（in the park、yesterday、very）はM。文型を数えるときは外す。',
    ],
    sections: [
      {
        heading: '文を組み立てる4つの部品',
        body: `英文はどんなに長くても、次の4種類の部品と、それ以外の飾り（修飾語M）でできている。

■ S（主語 Subject）
「〜は・〜が」にあたる部分。名詞や代名詞が入る。
　例）My brother plays tennis. の My brother

■ V（動詞 Verb）
述語になる動詞。be動詞か一般動詞。
　例）My brother plays tennis. の plays

■ O（目的語 Object）
動詞の動作が向かう相手。日本語では「〜を」が多いが「〜に」のこともある。
　例）I know him.（彼を）／ I called her.（彼女に）

■ C（補語 Complement）
S や O がどんなものかを説明する語。名詞または形容詞。
　例）He is a doctor.（a doctor が C）
　例）She looks happy.（happy が C）

■ M（修飾語 Modifier）
なくても文が成り立つ飾りの部分。場所・時・様子など。
　例）I studied English hard in my room yesterday. の hard / in my room / yesterday

★ ポイント：文型を答える問題では、まずMを線で消してしまう。残った骨組みが SV なのか SVC なのかを見れば、5文型のどれかがすぐ決まる。`,
        figureId: 'lf_kokoeigoext02_047',
      },
      {
        heading: '5つの型と見分けの順序',
        body: `英語の文の型は次の5つ。上から順に確かめていくと、判断を間違えにくい。

■ ①第1文型 SV
　例）Birds fly.／He works in a bank.
　動詞のうしろにMしかない。

■ ②第2文型 SVC（S ＝ C）
　例）He is a teacher.／She looks tired.
　動詞のうしろの語が主語を説明している。

■ ③第3文型 SVO（S ≠ O）
　例）I like music.／He opened the door.
　動詞のうしろの語が動作の相手・対象になっている。

■ ④第4文型 SVOO
　例）He gave me a book.
　名詞が2つ続き、前が人、うしろが物。2つはイコールにならない。

■ ⑤第5文型 SVOC（O ＝ C）
　例）We call him Ken.／The news made me happy.
　名詞が2つ続くが、その2つがイコールで結べる。

■ 見分けの手順
①Mを外す →②動詞のうしろに何もなければSV →③1つあって S ＝ それなら SVC、S ≠ それなら SVO →④2つあって O ＝ C なら SVOC、そうでなければ SVOO。

⚠ 注意：うしろに語があるかどうかだけで判断しないこと。He is in the park. の in the park は場所を表すMなので、この文は SVC ではなく SV である。be動詞の文がすべて第2文型になるわけではない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。He runs very fast.',
        wrongAnswer: '第3文型（SVO）',
        trapExplanation: '動詞 runs のうしろに語が続いているのを見て、それを目的語だと判断してしまう。very fast が副詞（様子を表すM）であることに気づいていない。',
        correctAnswer: '第1文型（SV）',
        correctExplanation: 'very fast は「どのように走るか」を説明する修飾語Mで、文の要素には数えない。Mを消すと He runs. だけが残るので第1文型である。O になれるのは名詞・代名詞であって、副詞は O にならない。',
      },
      {
        question: '次の文の文型を答えなさい。She is in the kitchen.',
        wrongAnswer: '第2文型（SVC）',
        trapExplanation: '「be動詞があるから第2文型」と覚えてしまい、うしろの語句の中身を見ずに判断する。in the kitchen が場所を表すMだと確認していない。',
        correctAnswer: '第1文型（SV）',
        correctExplanation: 'in the kitchen は「どこにいるか」を表すMなので、骨組みは She is だけ。この is は「いる・ある」の意味で、第1文型のVとしてはたらいている。She is a cook. なら a cook が C になり第2文型になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s048',
    subject: 'eigo',
    examType: 'koko',
    title: '第1文型 SV：修飾語をはずして骨組みを見る',
    description: '主語と動詞だけで成り立つ文を見抜き、Mの部分を切り離して読む力をつける',
    intro: 'My father goes to work by train every morning. ――語数は9語もありますが、骨組みはたった2語、My father goes です。残りはすべて飾りです。この「飾りを外す」感覚は長文読解でそのまま武器になります。まずは短い文で練習しましょう。',
    order: 548,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      '第1文型は「S ＋ V」だけで意味が成り立つ文。うしろに続くのはすべてM。',
      '代表的な動詞：go, come, run, walk, live, work, swim, stay, happen, rise。',
      'be動詞が「ある・いる」の意味で使われる文も第1文型（He is in Tokyo.）。',
      'Mになるのは前置詞 ＋ 名詞（in the park）、副詞（fast, hard）、時を表す語句（yesterday）。',
      '第1文型の動詞は自動詞。うしろに名詞を続けるときは前置詞が要る（arrive at 〜）。',
    ],
    sections: [
      {
        heading: '骨組みは2語だけ',
        body: `第1文型は、主語と動詞だけで文が完結する形である。うしろに語句がいくつ続いていても、それらがすべてMなら第1文型になる。

■ 例
　Birds fly.（S ＝ Birds、V ＝ fly）
　My father walks to the park every morning.
　　→ Mを外すと My father walks
　The train arrived at ten.
　　→ Mを外すと The train arrived
　They live in Osaka with their grandmother.
　　→ Mを外すと They live

■ Mになるものの見分け方
①前置詞で始まるかたまり：in the park / at ten / with his friends / by bus
②副詞：fast, hard, well, early, here, there, together
③時を表す語句：yesterday, last night, every day, then

■ よく使われる動詞
go, come, run, walk, swim, live, work, stay, sit, stand, sleep, happen, rise, fall, arrive

■ be動詞も第1文型を作る
　He is in the library.（彼は図書館にいる）
　There is a book on the desk.（本がある）
「ある・いる」の意味の be動詞は第1文型のVである。

★ ポイント：文型を見抜くには「前置詞で始まったらそこから先はM」と覚えるのが速い。in / on / at / to / with / for / by / from などが見えたら、そのかたまりを丸ごと外して考える。`,
        figureId: 'lf_kokoeigoext02_048',
      },
      {
        heading: '前置詞が必要な動詞に注意',
        body: `第1文型を作る動詞は自動詞であり、目的語を直接とることができない。うしろに名詞を続けるには前置詞が必要になる。

■ 前置詞とセットで覚える動詞
　arrive at ＋ 狭い場所（arrive at the station）
　arrive in ＋ 広い場所（arrive in Tokyo）
　go to ＋ 場所（go to school）
　listen to ＋ 音（listen to music）
　look at ＋ 見るもの（look at the picture）
　wait for ＋ 人・物（wait for the bus）
　get to ＋ 場所（get to the airport）
　talk about ＋ 話題（talk about the plan）

■ 日本語につられて前置詞を落とす誤り
　× We arrived the station at six.
　○ We arrived at the station at six.
日本語の「駅に到着した」の「に」を訳し忘れると、この誤りになる。

■ 同じ意味で他動詞のものと比べる
　arrive at the station ＝ reach the station
　reach は他動詞なので前置詞を付けない（× reach at the station）。
　listen to music と hear a sound も同じ関係で、hear は他動詞。

⚠ 注意：go home、come here のように、home / here が副詞のため前置詞を付けない場合がある（× go to home、× come to here）。前置詞が要るかどうかは、動詞とうしろの語の組み合わせで決まる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。My father works in a bank.',
        wrongAnswer: '第3文型（SVO）',
        trapExplanation: 'works のうしろに a bank という名詞があるので、それを目的語だと判断してしまう。直前の in という前置詞を見落としているのが原因。',
        correctAnswer: '第1文型（SV）',
        correctExplanation: 'in a bank は前置詞で始まるかたまりなので全体がMになる。骨組みは My father works だけで第1文型。前置詞の直後の名詞は前置詞の目的語であって、文の要素であるOにはならない。',
      },
      {
        question: '「私たちは昨日、大阪に到着しました」を英語にしなさい。',
        wrongAnswer: 'We arrived Osaka yesterday.',
        trapExplanation: '日本語の「大阪に到着した」を語ごとに置きかえると arrive Osaka になってしまう。arrive が自動詞で、名詞を直接とれないことを知らないと必ず起こる誤り。',
        correctAnswer: 'We arrived in Osaka yesterday.',
        correctExplanation: 'arrive は自動詞なので、うしろに場所の名詞を続けるには前置詞が要る。広い場所なら in、駅や空港のような地点なら at を使う。他動詞 reach を使えば We reached Osaka yesterday. と前置詞なしで書ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s049',
    subject: 'eigo',
    examType: 'koko',
    title: '第2文型 SVC①：be動詞 ＋ 補語',
    description: 'S ＝ C の関係を見抜き、Cになれる語・なれない語を区別する',
    intro: '「彼は医者です」も「彼は忙しい」も、英語では同じ形をしています。どちらも be動詞をはさんで、前と後ろがイコールで結ばれているからです。この「＝」の関係が見えるかどうかが、文型を判断する分かれ目になります。イコールで結べるかどうか、実際に確かめながら進みます。',
    order: 549,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      '第2文型は「S ＋ V ＋ C」で、S ＝ C の関係が成り立つ。',
      'Cになれるのは名詞と形容詞。副詞はCになれない（× He is happily.）。',
      'Cが名詞のときは主語の数に合わせる。They are good friends.',
      'be動詞のうしろが場所を表す語句のときは第2文型ではなく第1文型。',
      '「〜です」と訳せてもCが名詞か形容詞かで、冠詞や複数形の扱いが変わる。',
    ],
    sections: [
      {
        heading: 'S ＝ C という関係',
        body: `第2文型のいちばんの特徴は、主語と補語がイコールで結べることである。判断に迷ったら、実際に「＝」を入れて意味が通るか確かめる。

■ Cが名詞の場合
　He is a doctor.（He ＝ a doctor）
　My father is an English teacher.
　These are my books.

■ Cが形容詞の場合
　The book is interesting.（The book ＝ interesting）
　She is very kind.
　The children were hungry.

■ イコールで結べるか確かめる
　He is a doctor. → 彼＝医者 ○（第2文型）
　He is in Osaka. → 彼＝大阪の中 ×（イコールにならない → 第1文型）

■ Cが名詞のときの数と冠詞
主語の数に合わせて名詞の形を決める。
　○ He is a good student.（単数なので a が要る）
　○ They are good students.（複数なので複数形）
　× They are good student.

★ ポイント：C の位置に来る語が名詞なら「主語と同一人物・同一物」、形容詞なら「主語の性質・状態」を表す。どちらの場合も S ＝ C と考えてよい。`,
        figureId: 'lf_kokoeigoext02_049',
      },
      {
        heading: 'Cになれない語：副詞',
        body: `補語になれるのは名詞か形容詞に限られる。副詞は補語にならないので、be動詞のうしろに置くことはできない。

■ 形容詞と副詞の区別
　形容詞：状態や性質を表し、名詞を説明する。busy, happy, kind, tired, careful
　副詞：動作の様子を表し、動詞を説明する。busily, happily, kindly, carefully
多くは形容詞に -ly を付けると副詞になる。

■ 正しい使い分け
　○ He is busy.（彼は忙しい）
　× He is busily.
　○ She works hard.（一生けんめい働く／hard は副詞でMになる）
　× She works hardly.（hardly は「ほとんど〜ない」で意味が変わる）

■ まぎらわしい語
　good（形容詞）／well（副詞・「体調がよい」の形容詞でもある）
　　He is a good singer.（形容詞）
　　He sings well.（副詞）
　　I don't feel well today.（体調の意味の形容詞）
　fast は形容詞でも副詞でも同じ形。
　　He is a fast runner.／He runs fast.

⚠ 注意：日本語では「忙しく」「幸せに」のように活用しても同じ語に見えるため、-ly が要るかどうかの判断が難しい。「be動詞のうしろなら形容詞」「一般動詞を説明するなら副詞」という位置で覚えるのが確実である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語を選びなさい。Your brother is (busy / busily) today.',
        wrongAnswer: 'busily',
        trapExplanation: '「忙しく」という日本語の語尾に引かれて副詞を選んでしまう。be動詞のうしろに来る語は主語を説明する補語であることを意識していない。',
        correctAnswer: 'busy',
        correctExplanation: 'be動詞のうしろに置けるのは名詞か形容詞。busy は形容詞で、Your brother ＝ busy という関係を作る。busily は動作の様子を表す副詞なので、He worked busily. のように一般動詞を説明するときに使う。',
      },
      {
        question: '誤りを直しなさい。Ken and Yumi are a good friend.',
        wrongAnswer: 'Ken and Yumi are a good friend.（正しい）',
        trapExplanation: '「よい友達です」という日本語には単数・複数の区別がないため、Cの名詞をそのまま単数形で書いてしまう。are を選べた時点で安心してしまうのも一因。',
        correctAnswer: 'Ken and Yumi are good friends.',
        correctExplanation: 'S ＝ C の関係があるので、主語が複数なら補語の名詞も複数形にする。a を外して friends とするのが正しい。My father and mother are teachers. も同じ考え方である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s050',
    subject: 'eigo',
    examType: 'koko',
    title: '第2文型 SVC②：become / look / feel など',
    description: 'be動詞以外でSVCを作る動詞をまとめ、うしろに置く語の形を決められるようにする',
    intro: '「彼は疲れているように見える」を He looks tired. と言います。look は「見る」ではないの、と戸惑うところです。実は be動詞と同じはたらきをする動詞がいくつもあり、それらはすべて S ＝ C の形を取ります。仲間ごとに覚えてしまえば、まとめて使えるようになります。',
    order: 550,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'be動詞以外でSVCを作る動詞：become, get, look, feel, sound, taste, smell, keep, stay, turn。',
      'これらのうしろには形容詞が入る。副詞は入らない（× look happily）。',
      'become のうしろには名詞も形容詞も入る（become a doctor / become famous）。',
      'look / sound / feel のうしろに名詞を置くときは like が必要（look like his father）。',
      'get は「〜になる」という変化を表す（get angry / get dark）。',
    ],
    sections: [
      {
        heading: 'be動詞の代わりをする動詞',
        body: `SVCを作る動詞は be動詞だけではない。次の動詞は「S ＝ C」の関係を作りながら、意味を少し加える。

■ 変化を表す（〜になる）
　become：He became a doctor.／She became famous.
　get：It got dark.／He got angry.
　turn：The leaves turned red.
　grow：He grew tall.

■ 状態が続くことを表す（〜のままである）
　keep：Please keep quiet.
　stay：The store stays open until nine.
　remain：The problem remained unsolved.

■ 感覚を表す（〜に見える・聞こえる・感じる）
　look：You look tired.（疲れて見える）
　sound：That sounds interesting.（おもしろそうだ）
　feel：I feel sick.（気分が悪い）
　taste：This soup tastes good.（おいしい味がする）
　smell：These flowers smell sweet.（甘い香りがする）

■ すべてイコールで確かめられる
　You look tired. → you ＝ tired
　This soup tastes good. → this soup ＝ good

★ ポイント：これらの動詞のうしろに来るのは形容詞である。「見える」「聞こえる」と訳すからといって、副詞（happily, well）を置いてはいけない。`,
      },
      {
        heading: 'うしろに名詞を置くときは like が要る',
        body: `look / sound / feel / taste / smell は、うしろに形容詞を直接置ける。しかし名詞を置くときには like（〜のような）が必要になる。

■ 形容詞なら直接置く
　He looks young.（若く見える）
　That sounds fun.
　It smells good.

■ 名詞なら like を入れる
　He looks like his father.（父親に似ている）
　That sounds like a good idea.
　It tastes like orange juice.
　× He looks his father. は誤り。

■ become は名詞も形容詞も直接置ける
　She became a nurse.（名詞）
　She became famous.（形容詞）
　become に like は不要である。

■ 判断の手順
①うしろの語が形容詞か名詞かを見る。
②形容詞ならそのまま置く。
③名詞なら、動詞が become 以外の感覚動詞であれば like を入れる。

⚠ 注意：like を「好き」という動詞だと思いこむと、He looks like his father. の構造が分からなくなる。ここでの like は「〜のような」という前置詞である。動詞の like と形が同じなので、文の中の位置で判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語を選びなさい。You look (happy / happily) today.',
        wrongAnswer: 'happily',
        trapExplanation: '「うれしそうに見える」という日本語の「〜そうに」を副詞と考えてしまう。look が be動詞と同じはたらきをしていることに気づいていない。',
        correctAnswer: 'happy',
        correctExplanation: 'look は S ＝ C の関係を作る動詞なので、うしろには形容詞が入る。You ＝ happy という関係になり、You look happy. が正しい。副詞 happily は He smiled happily. のように動作の様子を表すときに使う。',
      },
      {
        question: '誤りを直しなさい。He looks like young.',
        wrongAnswer: 'He looks like young.（正しい）',
        trapExplanation: '「〜のように見える」という日本語をそのまま英語にすると look like になるため、うしろが形容詞でも like を入れてしまう。like が必要な条件を「意味」で判断しているのが原因。',
        correctAnswer: 'He looks young.',
        correctExplanation: 'うしろが形容詞 young なら like は不要で、He looks young. とする。like を入れるのはうしろが名詞のときだけで、He looks like his father.（父親に似ている）のように使う。うしろの語の品詞で決める。',
      },
    ],
  },

  {
    id: 'koko_eigo_s051',
    subject: 'eigo',
    examType: 'koko',
    title: '同じ動詞でも文型が変わる：look at と look tired',
    description: '一つの動詞が第1文型にも第2文型にもなることを、代表的な語で確認する',
    intro: '同じ look なのに、look at the picture では「見る」、look tired では「見える」。英語では動詞そのものより、うしろに何を置いたかで意味が決まることがよくあります。辞書を引く前に、文の形から意味を推理する。この読み方ができると、知らない語にも強くなります。',
    order: 551,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'look at 〜（〜を見る）は第1文型、look ＋ 形容詞（〜に見える）は第2文型。',
      'get to 〜（〜に着く）は第1文型、get ＋ 形容詞（〜になる）は第2文型。',
      'grow（育つ・第1文型）と grow ＋ 形容詞（〜になる・第2文型）。',
      'run（走る・第1文型）と run a shop（店を経営する・第3文型）。',
      'うしろに前置詞があれば第1文型、形容詞があれば第2文型と判断できる。',
    ],
    sections: [
      {
        heading: 'うしろの形で意味が決まる',
        body: `英語の動詞は、うしろにどんな語が来るかによって意味を変える。代表的な組み合わせを対で覚えておくと、読解でも英作文でも迷わない。

■ look
　look at ＋ 名詞：〜を見る（第1文型・atが必要）
　　例）Look at that bird.
　look ＋ 形容詞：〜に見える（第2文型）
　　例）You look tired.
　look for ＋ 名詞：〜をさがす
　　例）I'm looking for my key.
　look like ＋ 名詞：〜に似ている
　　例）She looks like her mother.

■ get
　get to ＋ 場所：〜に着く（第1文型）
　　例）We got to the station at six.
　get ＋ 形容詞：〜になる（第2文型）
　　例）It's getting cold.
　get ＋ 名詞：〜を手に入れる（第3文型）
　　例）I got a letter from him.

■ grow
　The plants grew fast.（育った・第1文型）
　He grew tall.（背が高くなった・第2文型）
　They grow rice here.（米を作る・第3文型）

★ ポイント：訳から文型を決めるのではなく、形から意味を決める。うしろが「前置詞＋名詞」なら第1文型、「形容詞」なら第2文型、「名詞だけ」なら第3文型、と機械的に判断してよい。`,
      },
      {
        heading: 'まぎらわしいペアを整理する',
        body: `入試では、同じ動詞を使った2つの文を並べて文型や意味を答えさせる問題がよく出る。次の組み合わせを確認しておく。

■ 見る系
　look at the picture（意識して目を向ける）
　see a movie（自然に目に入る・映画を見る）
　watch TV（動きのあるものをじっと見る）
　look at は前置詞が必要、see / watch は他動詞で不要。

■ 聞く系
　listen to music（意識して耳を傾ける・to が必要）
　hear a sound（自然に聞こえる・他動詞なので前置詞不要）

■ 着く系
　arrive at the station ／ get to the station ／ reach the station
　arrive と get は前置詞が必要、reach は不要。

■ turn の例
　The leaves turned red.（第2文型・赤くなった）
　He turned the page.（第3文型・ページをめくった）
　Turn right at the corner.（第1文型・曲がる）

⚠ 注意：意味が似ている語ほど、前置詞の有無で差がつく。listen to / hear、look at / see、arrive at / reach は、必ずセットで書き出して覚えること。入試ではこの組み合わせが繰り返し問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はその絵を見ました」を英語にしなさい。（look を使って）',
        wrongAnswer: 'I looked the picture.',
        trapExplanation: '日本語の「絵を見る」の「を」を目的語の印だと考え、look をそのまま他動詞のように使ってしまう。look が前置詞 at を必要とすることを覚えていない。',
        correctAnswer: 'I looked at the picture.',
        correctExplanation: 'look は自動詞なので、見る対象を続けるには at が要る。I looked at the picture. が正しい。他動詞の see を使えば I saw the picture. と前置詞なしで書ける。',
      },
      {
        question: '「彼は疲れているように見えた」を英語にしなさい。',
        wrongAnswer: 'He looked at tired.',
        trapExplanation: '前の問題で「look には at が要る」と覚えたことを、今度は形容詞が続く文にも当てはめてしまう。規則を場面に関係なく広げてしまう典型的なミス。',
        correctAnswer: 'He looked tired.',
        correctExplanation: 'うしろが形容詞 tired のときは at を入れない。He ＝ tired という第2文型になり、He looked tired. が正しい。at が要るのは、うしろに「見る対象の名詞」が来るときだけである。',
      },
    ],
  },
  // ─────────────── 4. 第3文型SVO（s052〜s055） ───────────────
  {
    id: 'koko_eigo_s052',
    subject: 'eigo',
    examType: 'koko',
    title: '第3文型 SVO：目的語をとる動詞',
    description: '動作の相手・対象を表すOのはたらきと、S ≠ O という関係をつかむ',
    intro: '英語の文でいちばん多い形がこの第3文型です。「だれが」「どうする」「何を」の三つが並ぶだけの単純な形ですが、日本語とは語順が逆になります。「私はテニスをします」の「テニスを」が英語では最後に来る――この入れかわりに慣れることが、英作文の第一歩です。',
    order: 552,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      '第3文型は「S ＋ V ＋ O」。O は動作の相手・対象を表す。',
      'S と O は別のもの（S ≠ O）。ここが S ＝ C の第2文型との決定的な違い。',
      'O になれるのは名詞・代名詞（目的格）・動名詞・不定詞など「名詞のはたらきをする語句」。',
      '日本語の「〜を」だけでなく「〜に」「〜と」にあたる場合もある（call him / marry her）。',
      '目的語をとる動詞を他動詞という。他動詞のうしろに前置詞は入れない。',
    ],
    sections: [
      {
        heading: 'S ≠ O が第3文型の目印',
        body: `第3文型は、動詞の動作が向かう相手や対象をうしろに置く形である。

■ 基本の形
　Ken plays the guitar.（S ＝ Ken、V ＝ plays、O ＝ the guitar）
　I like music.
　She opened the window.
　We studied English yesterday.（yesterday はM）

■ 第2文型との見分け
　He is a teacher. → He ＝ a teacher（第2文型）
　He knows a teacher. → He ≠ a teacher（第3文型）
うしろに名詞が1つ来るという点では同じ形に見えるが、主語とイコールで結べるかどうかで区別する。

■ 日本語の助詞にだまされない
英語のOは、日本語では必ずしも「〜を」にならない。
　I called him.（彼に電話した）
　He married her.（彼女と結婚した）
　We entered the room.（部屋に入った）
　She resembles her mother.（母親に似ている）
どれも英語では前置詞なしで名詞を直接置く。

★ ポイント：「〜を」と訳せない動詞ほど、前置詞を入れたくなる。日本語の助詞ではなく、その動詞が他動詞かどうかで決まると覚えること。`,
        figureId: 'lf_kokoeigoext02_052',
      },
      {
        heading: '語順を崩さない',
        body: `日本語は「私は／テニスを／します」と目的語が動詞の前に来るが、英語は「主語 → 動詞 → 目的語」の順が固定されている。この語順は英語の意味そのものを決めている。

■ 語順が変われば意味が変わる
　Ken likes Yumi.（ケンはユミが好き）
　Yumi likes Ken.（ユミはケンが好き）
日本語は「ケンはユミが好き」「ユミをケンは好き」のように助詞で関係を示せるが、英語は位置でしか示せない。

■ Mが入っても骨組みは動かない
　I study English hard every day.
　　→ S ＝ I、V ＝ study、O ＝ English、hard と every day はM
　× I study hard English every day.（Mが割りこんで語順が崩れている）

■ 目的語が長くなる場合
　I know the tall boy over there.
　O が the tall boy over there という長いかたまりになっているだけで、形は同じ。

■ 代名詞は目的格にする
　I know he. は誤り。○ I know him.
　目的語の位置に置く代名詞は me / you / him / her / it / us / them の形にする。

⚠ 注意：動詞と目的語の間に副詞をはさむと不自然になる。× I like very much music. は誤りで、○ I like music very much. とする。「動詞のすぐうしろに目的語」を守る。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は昨夜、彼に電話しました」を英語にしなさい。',
        wrongAnswer: 'I called to him last night.',
        trapExplanation: '日本語の「彼に」の「に」を前置詞 to に置きかえてしまう。call が他動詞で、電話する相手をそのまま目的語にできることを知らないと起こる。',
        correctAnswer: 'I called him last night.',
        correctExplanation: 'call は他動詞なので、相手を直接目的語にする。I called him last night. が正しい。日本語の助詞「に」を機械的に前置詞に変えず、その動詞が他動詞かどうかで判断する。',
      },
      {
        question: '誤りを直しなさい。I know he very well.',
        wrongAnswer: 'I know he very well.（正しい）',
        trapExplanation: '「彼を知っている」の「彼」をそのまま he と書いてしまう。代名詞が目的語の位置では形を変えることを忘れている。',
        correctAnswer: 'I know him very well.',
        correctExplanation: '目的語の位置に来る代名詞は目的格にする。he → him、she → her、they → them、I → me、we → us。I know him very well. が正しい形である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s053',
    subject: 'eigo',
    examType: 'koko',
    title: '目的語になれる形：名詞・動名詞・不定詞',
    description: 'Oの位置に置ける語句の種類と、動詞ごとの使い分けを整理する',
    intro: '「私は泳ぐのが好きです」を英語にすると、I like swim. ではなく I like swimming. になります。動詞をそのまま目的語の位置に置くことはできず、名詞のはたらきをする形に変えなければならないからです。どんな形に変えればよいのか、動詞ごとの決まりを見ていきます。',
    order: 553,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'O になれるのは名詞・代名詞（目的格）・動名詞（〜ing）・不定詞（to ＋ 原形）。',
      '動詞をそのまま O にはできない。× I like swim. → ○ I like swimming.',
      '動名詞だけをとる動詞：enjoy, finish, stop, practice。',
      '不定詞だけをとる動詞：want, hope, decide, wish。',
      'like, begin, start はどちらもとれる（I like reading. ＝ I like to read.）。',
    ],
    sections: [
      {
        heading: 'O の位置に置ける4つの形',
        body: `目的語になれるのは「名詞のはたらきをするもの」に限られる。次の4種類を押さえておく。

■ ①名詞
　I bought a book.／She met my teacher.

■ ②代名詞の目的格
　I know him.／We helped them.
　主格（I, he, she, they）を目的語の位置に置いてはいけない。

■ ③動名詞（動詞のing形）
「〜すること」という名詞のはたらきをする。
　I enjoyed talking with him.
　She finished doing her homework.

■ ④不定詞（to ＋ 動詞の原形）
これも「〜すること」を表す。
　I want to go to America.
　He decided to study abroad.

■ そのままの動詞は置けない
　× I want go to America.
　× I enjoyed talk with him.
動詞は主語に対する述語としてしか使えないので、目的語にするには③か④の形に変える必要がある。

★ ポイント：英作文で「〜することが好き」「〜したい」と書くときは、必ず ing 形か to ＋ 原形のどちらかになる。原形をそのまま置いていないか、最後に確認する。`,
      },
      {
        heading: '動詞によって決まる ing と to の使い分け',
        body: `動名詞と不定詞のどちらをとるかは、動詞ごとに決まっている。丸暗記が必要な部分なので、グループで覚える。

■ 動名詞だけをとる動詞
　enjoy（楽しむ）／finish（終える）／stop（やめる）／practice（練習する）／
　give up（あきらめる）／mind（気にする）
　例）We enjoyed swimming in the sea.（× enjoyed to swim）
　例）He finished reading the book.（× finished to read）

■ 不定詞だけをとる動詞
　want（〜したい）／hope（望む）／decide（決める）／wish（願う）／
　promise（約束する）／expect（期待する）
　例）I want to be a teacher.（× want being）
　例）She decided to join the club.

■ どちらもとれる動詞
　like / love / begin / start / continue
　例）I like playing tennis. ＝ I like to play tennis.

■ 意味が変わる動詞
　stop ＋ ing：〜するのをやめる（He stopped talking.）
　stop ＋ to 不定詞：〜するために立ち止まる（He stopped to talk.）
　この to 不定詞は目的語ではなく「〜するために」を表すM。

⚠ 注意：enjoy to 〜、want ing はどちらも誤り。「エンジョイは ing」「ウォントは to」と口に出して覚えると、試験中に思い出しやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。I like play tennis with my friends.',
        wrongAnswer: 'I like play tennis with my friends.（正しい）',
        trapExplanation: '日本語の「テニスをするのが好き」をそのまま並べると like play になる。目的語の位置には名詞のはたらきをする形しか置けない、という約束を使えていない。',
        correctAnswer: 'I like playing tennis with my friends.（I like to play tennis 〜 も可）',
        correctExplanation: 'like の目的語には動名詞 playing か不定詞 to play を置く。動詞の原形をそのまま目的語にすることはできない。like はどちらの形もとれる動詞なので、両方とも正解になる。',
      },
      {
        question: '（　）内の語を適する形にしなさい。We enjoyed (talk) with our teacher.',
        wrongAnswer: 'to talk',
        trapExplanation: 'want to や decide to のように「〜すること」は to 不定詞だと覚えているため、enjoy にも to を付けてしまう。動詞ごとに形が決まっていることを見落としている。',
        correctAnswer: 'talking',
        correctExplanation: 'enjoy は動名詞だけを目的語にとる動詞なので、We enjoyed talking with our teacher. が正しい。同じ仲間の finish, stop, practice も ing 形をとる。want, hope, decide は to 不定詞をとる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s054',
    subject: 'eigo',
    examType: 'koko',
    title: '前置詞を付けてしまう他動詞',
    description: 'discuss / marry / reach / enter など、日本語につられて誤りやすい動詞を固める',
    intro: '「その問題について話し合った」を We discussed about the problem. と書くと、about が余分で減点されます。日本語の「について」「に」「と」という助詞が、そのまま前置詞になるとは限らないのです。入試で何度も問われる定番なので、まとめて片づけてしまいましょう。',
    order: 554,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '前置詞を付けない他動詞：discuss, marry, enter, reach, attend, mention, resemble, approach。',
      '× discuss about ／ × marry with ／ × enter into ／ × reach at はすべて誤り。',
      '逆に前置詞が必要な自動詞：arrive at, listen to, look at, wait for, get to, graduate from。',
      '同じ意味でも自動詞か他動詞かで前置詞の要否が変わる（arrive at ＝ reach）。',
      '英作文では動詞を書いた瞬間に「この動詞は前置詞が要るか」を確認する。',
    ],
    sections: [
      {
        heading: '前置詞を入れてはいけない動詞',
        body: `日本語では「〜について」「〜と」「〜に」と助詞が付くのに、英語では前置詞を入れない動詞がある。入試の定番なので確実に覚える。

■ 代表的な他動詞
　discuss（〜について話し合う）
　　○ We discussed the plan.　× We discussed about the plan.
　marry（〜と結婚する）
　　○ He married her.　× He married with her.
　enter（〜に入る）
　　○ She entered the room.　× She entered into the room.
　reach（〜に着く）
　　○ We reached the station.　× We reached at the station.
　attend（〜に出席する）
　　○ I attended the meeting.　× I attended to the meeting.
　mention（〜について述べる）
　　○ He mentioned the problem.　× He mentioned about the problem.
　resemble（〜に似ている）
　　○ She resembles her mother.　× She resembles to her mother.
　approach（〜に近づく）
　　○ The typhoon approached the island.

■ なぜ間違えるのか
これらの動詞は日本語に訳すと「〜について」「〜と」「〜に」という助詞が付く。その助詞を英語の前置詞に置きかえようとするために、余計な語が入ってしまう。

★ ポイント：「意味の中に前置詞が入っている動詞」と考えるとよい。discuss は「〜について話し合う」で「について」まで含んだ1語なので、about は要らない。`,
        figureId: 'lf_kokoeigoext02_054',
      },
      {
        heading: '逆に前置詞が必要な自動詞',
        body: `前の項目とは逆に、日本語では「〜を」と訳せるのに前置詞が必要な動詞もある。両方をセットで覚えると混乱しない。

■ 前置詞が必要な自動詞
　arrive at / in（〜に着く）
　　We arrived at the airport.／We arrived in Kyoto.
　listen to（〜を聞く）
　　I listened to the radio.
　look at（〜を見る）
　　Look at this picture.
　wait for（〜を待つ）
　　I waited for her for an hour.
　get to（〜に着く）
　　I got to school at eight.
　graduate from（〜を卒業する）
　　He graduated from high school last year.
　agree with（〜に賛成する）
　　I agree with you.
　belong to（〜に所属する）
　　She belongs to the tennis club.

■ 意味が同じなのに扱いが違うペア
　arrive at the station ＝ get to the station ＝ reach the station
　前の2つは前置詞が要り、reach だけ要らない。
　listen to music（意識して聞く）／hear a sound（自然に聞こえる）
　look at the bird（意識して見る）／see a bird（目に入る）

⚠ 注意：英作文では、まず動詞を決め、その動詞が他動詞か自動詞かを思い出してから目的語を書くこと。書き終えてから前置詞を足したり削ったりすると、かえって誤りが増える。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは環境問題について話し合いました」を英語にしなさい。',
        wrongAnswer: 'We discussed about the environmental problem.',
        trapExplanation: '「〜について」という日本語をそのまま about に置きかえてしまう。talk about 〜 という表現を知っていることが、かえって discuss にも about を付ける原因になる。',
        correctAnswer: 'We discussed the environmental problem.',
        correctExplanation: 'discuss は「〜について話し合う」という意味を1語で表す他動詞なので、about は不要である。about を使いたければ We talked about the environmental problem. と、自動詞 talk を使う。',
      },
      {
        question: '「私たちは6時に駅に着きました」を reach を使って英語にしなさい。',
        wrongAnswer: 'We reached at the station at six.',
        trapExplanation: 'arrive at the station という形を先に覚えているため、同じ「着く」という意味の reach にも at を付けてしまう。意味が同じなら形も同じだと考えるのが原因。',
        correctAnswer: 'We reached the station at six.',
        correctExplanation: 'reach は他動詞なので前置詞を入れず、目的語を直接置く。arrive は自動詞なので We arrived at the station at six. のように at が要る。意味ではなく動詞ごとの性質で決まる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s055',
    subject: 'eigo',
    examType: 'koko',
    title: 'SVC と SVO の見分け',
    description: 'S ＝ C か S ≠ O かという判断基準で、2つの文型を確実に区別する',
    intro: 'He became a doctor. と He knows a doctor. は、見た目がまったく同じ形です。しかし前者は「彼＝医者」、後者は「彼と医者は別人」。この違いが文型の違いになります。イコールで結べるかどうかを実際に確かめる――たったこれだけの作業で、二つの文型は完全に切り分けられます。',
    order: 555,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '判断の基準はただ一つ。S ＝ うしろの語なら SVC、S ≠ うしろの語なら SVO。',
      'be動詞・become・look・feel・get などのうしろは C になりやすい。',
      'have・know・like・play・open などのうしろは O になる。',
      '同じ動詞でも文型が変わる。He got angry.（SVC）／He got a letter.（SVO）',
      '感覚動詞のうしろに名詞を置くときは like が要る（look like a nurse）。',
    ],
    sections: [
      {
        heading: 'イコールで確かめる',
        body: `SVCとSVOは、どちらも「S ＋ V ＋ 名詞（または形容詞）」という同じ並びに見える。区別の方法は1つ、主語とうしろの語をイコールで結べるかどうかである。

■ SVC（S ＝ C）
　He became a doctor. → 彼 ＝ 医者 ○
　She is my sister. → 彼女 ＝ 姉 ○
　The soup tastes good. → スープ ＝ よい味 ○
　※ C が形容詞のときは必ず SVC。形容詞は O にならない。

■ SVO（S ≠ O）
　He knows a doctor. → 彼 ≠ 医者 ○（別人）
　She has a sister. → 彼女 ≠ 姉
　I made a cake. → 私 ≠ ケーキ

■ 動詞で見当をつける
　SVCを作りやすい動詞：be, become, get, turn, grow, look, feel, sound, taste, smell, keep, stay
　SVOを作りやすい動詞：have, know, like, want, make, take, play, open, buy, see

■ 形容詞が来たら即SVC
うしろが形容詞なら考えるまでもなくSVCである。形容詞は目的語にはなれない。
　He looks tired.／It got dark.／Keep quiet.

★ ポイント：訳した日本語で決めようとすると、「〜になる」「〜を持つ」のどちらか迷うことがある。イコールで結べるかという1つの基準に絞ると、判断がぶれない。`,
      },
      {
        heading: '同じ動詞が両方の文型を作る',
        body: `1つの動詞が、うしろに置く語によって SVC にも SVO にもなる。よく出るものを整理しておく。

■ get
　He got angry.（怒った・SVC／彼 ＝ 怒っている）
　He got a letter.（手紙を受け取った・SVO／彼 ≠ 手紙）

■ turn
　The leaves turned red.（SVC／葉 ＝ 赤い）
　He turned the key.（SVO／彼 ≠ かぎ）

■ grow
　He grew tall.（SVC／彼 ＝ 背が高い）
　They grow vegetables.（SVO／彼ら ≠ 野菜）

■ make
　She made a cake.（SVO）
　She made her son a doctor.（第5文型・息子 ＝ 医者）
　make はさらに別の文型も作るので、うしろの語数まで確認する。

■ 感覚動詞 ＋ 名詞には like
　× She looks a nurse.
　○ She looks like a nurse.（看護師のように見える）
　○ She is a nurse.（看護師である）
look のうしろに名詞をそのまま置くことはできない。

⚠ 注意：文型の問題では、動詞の意味を思い出すより先に「うしろの語が形容詞か名詞か」「主語とイコールになるか」を見る。この順で確認すれば、知らない動詞が出ても文型は判断できる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。My uncle became a pilot.',
        wrongAnswer: '第3文型（SVO）',
        trapExplanation: '動詞のうしろに a pilot という名詞があるため、反射的に目的語だと判断してしまう。「なる」を「〜を得る」のような動作と感じてしまうのも原因。',
        correctAnswer: '第2文型（SVC）',
        correctExplanation: 'My uncle ＝ a pilot という関係が成り立つので、a pilot は補語である。become は S ＝ C の関係を作る動詞。同じ名詞が続いていても My uncle knows a pilot. なら別人なので第3文型になる。',
      },
      {
        question: '誤りを直しなさい。My aunt looks a nurse.',
        wrongAnswer: 'My aunt looks a nurse.（正しい）',
        trapExplanation: 'look tired のように「look ＋ 語」で「〜に見える」と言えることを覚えているため、名詞を続けるときにも同じ形で書いてしまう。うしろが形容詞か名詞かを区別していない。',
        correctAnswer: 'My aunt looks like a nurse.',
        correctExplanation: 'look のうしろに名詞を置くときは like が必要である。My aunt looks like a nurse. なら「看護師のように見える」。実際に看護師であるなら My aunt is a nurse. と be動詞を使う。',
      },
    ],
  },
  // ─────────── 5. 第4文型SVOO と書きかえ（to / for）（s056〜s060） ───────────
  {
    id: 'koko_eigo_s056',
    subject: 'eigo',
    examType: 'koko',
    title: '第4文型 SVOO：人 ＋ 物 の語順',
    description: '目的語を2つとる動詞の形と、「人 → 物」という順序を身につける',
    intro: '「父が私に腕時計をくれた」――この文には「私に」と「腕時計を」という二つの相手が出てきます。英語ではこれを gave me a watch と続けて並べるだけ。前置詞も接続詞も要りません。ただし順番は必ず「人 → 物」。逆にすると意味が通じなくなります。',
    order: 556,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '第4文型は「S ＋ V ＋ O1（人）＋ O2（物）」。「〜に…を」という意味になる。',
      '語順は必ず「人 → 物」。× gave a watch me は誤り。',
      'O1 と O2 はイコールにならない（me ≠ a watch）。ここが第5文型との違い。',
      'よく使う動詞：give, show, teach, tell, send, lend, buy, make, cook, ask, get。',
      'O1 に代名詞を置くときは目的格にする（give me / show him / teach us）。',
    ],
    sections: [
      {
        heading: '目的語が2つ並ぶ形',
        body: `第4文型は、「だれに」「何を」の2つを続けて並べる形である。前置詞を使わずに並べられるのが特徴。

■ 基本の形
　My father gave me a watch.（父は私に腕時計をくれた）
　　S ＝ My father、V ＝ gave、O1 ＝ me、O2 ＝ a watch
　She showed us her pictures.
　Mr. Sato teaches us English.
　I sent him a birthday card.

■ 語順は「人 → 物」
　○ He gave me a book.
　× He gave a book me.
2つの名詞を並べるだけなので、順番が唯一の手がかりになる。順番を崩すと意味が伝わらない。

■ よく使う動詞
　give（与える）／show（見せる）／teach（教える）／tell（話す）／
　send（送る）／lend（貸す）／buy（買ってやる）／make（作ってやる）／
　cook（料理してやる）／get（手に入れてやる）／ask（たずねる）／pass（手渡す）

■ 「〜に」を to や for で表さない
　× I teach to him English.
　○ I teach him English.
第4文型では前置詞を使わない。前置詞を使う形は次の課で学ぶ書きかえの形になる。

★ ポイント：第4文型を作れるのは「相手にものを渡す・伝える」という意味の動詞に限られる。どんな動詞でも2つの目的語をとれるわけではない。`,
        figureId: 'lf_kokoeigoext02_056',
      },
      {
        heading: '第3文型・第5文型との区別',
        body: `動詞のうしろに名詞が並ぶ形は他の文型にもある。数と関係で見分ける。

■ うしろの名詞が1つなら第3文型
　He gave a book to me. → O は a book だけ（to me はM）
　He teaches English. → O は English だけ

■ うしろの名詞が2つで、イコールにならなければ第4文型
　He gave me a book.（me ≠ a book）
　She made him a cake.（him ≠ a cake）

■ うしろの名詞が2つでも、イコールになれば第5文型
　They made him the captain.（him ＝ the captain）
　We call him Ken.（him ＝ Ken）

■ 見分けの手順
①動詞のうしろの名詞を数える。
②2つあれば、その2つをイコールで結んでみる。
③結べれば第5文型、結べなければ第4文型。

■ 代名詞は目的格に
　× He gave I a book.　○ He gave me a book.
　× She showed we her album.　○ She showed us her album.

⚠ 注意：She made him a cake. と They made him a hero. は形が同じだが、前者は「彼にケーキを作った」（第4文型）、後者は「彼を英雄にした」（第5文型）。him とうしろの名詞が同一人物かどうかで判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '正しい英文に並べかえなさい。（a book / gave / he / me / .）',
        wrongAnswer: 'He gave a book me.',
        trapExplanation: '日本語では「本を私にくれた」という語順も自然なので、そのまま英語に置きかえてしまう。英語の第4文型では順序が意味を決めることを意識していない。',
        correctAnswer: 'He gave me a book.',
        correctExplanation: '第4文型の語順は「人 → 物」で固定されている。He gave me a book. が正しい。物を先に言いたい場合は前置詞を使い、He gave a book to me. とする必要がある。',
      },
      {
        question: '「佐藤先生は私たちに英語を教えています」を英語にしなさい。',
        wrongAnswer: 'Mr. Sato teaches to us English.',
        trapExplanation: '「私たちに」の「に」を to だと考えて前置詞を入れてしまう。第4文型では前置詞を使わないという約束を使えていない。',
        correctAnswer: 'Mr. Sato teaches us English.',
        correctExplanation: '第4文型は「人 → 物」を前置詞なしで並べる形なので teaches us English とする。to を使うなら物を先に置いて Mr. Sato teaches English to us. と書きかえる。どちらか一方の形にそろえる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s057',
    subject: 'eigo',
    examType: 'koko',
    title: 'SVOO → SVO ＋ to の書きかえ',
    description: 'give / show / teach など to をとるグループの書きかえを正確にできるようにする',
    intro: '同じ内容を二通りの語順で言えるのが第4文型のおもしろいところです。He showed me the picture. は He showed the picture to me. とも言えます。ただし使う前置詞は動詞によって to か for に決まっていて、入試ではまさにそこが問われます。まずは to のグループから。',
    order: 557,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '書きかえの形は「S ＋ V ＋ 物 ＋ to ＋ 人」。物と人の順序が入れかわる。',
      'to をとる動詞：give, show, teach, tell, send, lend, pass, write, hand, bring。',
      '共通する意味は「相手に直接わたす・伝える」。相手がいないと成り立たない動作。',
      '書きかえても文型は変わる。第4文型（SVOO）→ 第3文型（SVO ＋ M）。',
      '物が代名詞のときは書きかえた形を使う（Give it to me.）。',
    ],
    sections: [
      {
        heading: 'to をとるグループ',
        body: `第4文型の文は、目的語の順序を入れかえて前置詞を補うことで、第3文型に書きかえられる。give の仲間では前置詞に to を使う。

■ 書きかえの手順
①O1（人）と O2（物）の順序を入れかえる。
②人の前に to を置く。
　He showed me the picture.
　→ He showed the picture to me.

■ 例
　My mother gave me this bag.
　→ My mother gave this bag to me.
　Mr. Ito teaches us math.
　→ Mr. Ito teaches math to us.
　I sent her a letter.
　→ I sent a letter to her.
　Please tell me the truth.
　→ Please tell the truth to me.

■ to をとる動詞
give, show, teach, tell, send, lend, pass, write, hand, bring, offer, sell

■ なぜ to なのか
これらはすべて「相手にわたす・とどける」動作で、物が人のほうへ移動する。to は「〜へ向かって」という方向を表す前置詞なので、この意味と結びついている。

★ ポイント：意味を思い出せないときは「相手がいなければ成り立たない動作かどうか」で判断する。give・show・teach は相手がいて初めて成り立つので to をとる。`,
        figureId: 'lf_kokoeigoext02_057',
      },
      {
        heading: '書きかえで変わること・変わらないこと',
        body: `書きかえは語順を変える操作なので、文型そのものも変わる。入試ではこの点まで問われることがある。

■ 文型の変化
　He gave me a book.（第4文型 SVOO）
　He gave a book to me.（第3文型 SVO ＋ M）
書きかえた文では、O は a book だけで、to me は前置詞のかたまり（M）になる。

■ 意味の重点が変わる
英語では文の後ろに来る語のほうが強調される。
　He gave me a book.　→「何をくれたか（本）」に重点
　He gave a book to me.　→「だれにくれたか（私に）」に重点
どちらも内容は同じだが、伝わる感じが少し変わる。

■ 前置詞を落とさない
　× He gave a book me.
　○ He gave a book to me.
順序を入れかえたら必ず前置詞を補う。これを忘れる答案が非常に多い。

■ 疑問文・否定文でも同じ
　Did he give you the ticket?
　→ Did he give the ticket to you?

⚠ 注意：語順を入れかえるときに、片方だけ直して He gave to me a book. のような形にしてしまう誤りがある。「物 → to ＋ 人」の順を最後まで通すこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'He bought me a new bike. を、ほぼ同じ意味の文に書きかえなさい。',
        wrongAnswer: 'He bought a new bike to me.',
        trapExplanation: 'give や show の書きかえで to を使ったことをそのまま当てはめてしまう。動詞ごとに前置詞が決まっていることを確認していない。',
        correctAnswer: 'He bought a new bike for me.',
        correctExplanation: 'buy は「相手のために買ってやる」という意味なので for をとるグループに入る。to をとるのは give, show, teach, tell, send, lend など、相手に直接わたす動作の動詞である。',
      },
      {
        question: 'She gave me a present. を to を使って書きかえなさい。',
        wrongAnswer: 'She gave to me a present.',
        trapExplanation: '「to を使う」という指示だけを見て、人の前に to を置いたものの、物と人の順序を入れかえるのを忘れてしまう。書きかえを2つの操作に分けて考えていない。',
        correctAnswer: 'She gave a present to me.',
        correctExplanation: '書きかえは「①物を先に出す ②人の前に to を置く」の2段階で行う。片方だけ実行すると gave to me a present のような誤りになる。完成した文をもう一度読み直して語順を確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s058',
    subject: 'eigo',
    examType: 'koko',
    title: 'SVOO → SVO ＋ for の書きかえ',
    description: 'buy / make / cook など for をとるグループを、to のグループと対比して覚える',
    intro: '母がケーキを作ってくれた――このとき母は、ケーキを私に手渡す前に、まず「私のために」作っています。相手がその場にいなくても成り立つ動作です。この感覚のちがいが、to と for の使い分けの正体です。理屈が分かれば、暗記の量はぐっと減ります。',
    order: 558,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '書きかえの形は「S ＋ V ＋ 物 ＋ for ＋ 人」。',
      'for をとる動詞：buy, make, cook, get, find, choose, sing, build。',
      '共通する意味は「相手のために〜してやる」。相手がその場にいなくてもできる動作。',
      'to のグループ（give, show, teach, tell, send, lend）と対で覚える。',
      '入試では to と for のどちらを入れるかを直接問う問題が頻出。',
    ],
    sections: [
      {
        heading: 'for をとるグループ',
        body: `buy や make の仲間は、書きかえのときに for を使う。to のグループと形は同じで、前置詞だけが異なる。

■ 書きかえの例
　She made me a cake.
　→ She made a cake for me.
　My father bought me a new bike.
　→ My father bought a new bike for me.
　My mother cooked us dinner.
　→ My mother cooked dinner for us.
　Will you get me a cup of tea?
　→ Will you get a cup of tea for me?

■ for をとる動詞
buy（買ってやる）／make（作ってやる）／cook（料理してやる）／get（取ってきてやる）／
find（見つけてやる）／choose（選んでやる）／sing（歌ってやる）／build（建ててやる）

■ to と for の意味のちがい
　to のグループ：物が相手のところへ移動する。相手がいなければ動作が成立しない。
　　give, show, teach, tell, send, lend
　for のグループ：相手のために何かをする。相手がその場にいなくてもできる。
　　buy, make, cook, get, find, choose

■ 覚え方
「作る・買う・料理する・見つける・選ぶ」は、相手がいなくても一人でできる作業である。これらは for。相手に手渡したり伝えたりする動作は to。

★ ポイント：迷ったら「その動作は相手がいなくてもできるか」と自問する。できるなら for、できないなら to。丸暗記より確実に思い出せる。`,
        figureId: 'lf_kokoeigoext02_058',
      },
      {
        heading: '入試での問われ方',
        body: `to と for の使い分けは、入試で繰り返し出題される。出題の形をあらかじめ知っておくと対応しやすい。

■ ①同じ意味の文にする書きかえ問題
　My aunt made me a doll.
　→ My aunt made a doll (　) me.　→ for

■ ②適する前置詞を選ぶ問題
　He showed the photo (to / for) us.　→ to
　She cooked lunch (to / for) us.　→ for

■ ③誤りを見つける問題
　× I bought a present to my mother.　→ for が正しい

■ 動詞ごとに整理した一覧
　to：give, show, teach, tell, send, lend, pass, write, hand, bring
　for：buy, make, cook, get, find, choose, sing, build

■ 書きかえられない動詞もある
　ask は of を使う（ask him a question → ask a question of him）。
　cost, take, save は書きかえられない（It took me an hour. の書きかえ不可）。
これらは次の課でくわしく扱う。

⚠ 注意：make は for のグループだが、第5文型でも使われる（make him happy）。同じ動詞でも文型が違えば書きかえの規則も変わるので、まず文型を確かめてから書きかえる。`,
      },
    ],
    trapExamples: [
      {
        question: 'My mother made me a cake. を、ほぼ同じ意味の文に書きかえなさい。',
        wrongAnswer: 'My mother made a cake to me.',
        trapExplanation: '書きかえといえば to、という思いこみが働く。give の書きかえを先に習うことが多いため、to のほうが記憶に残りやすいのが原因。',
        correctAnswer: 'My mother made a cake for me.',
        correctExplanation: 'make は「相手のために作ってやる」動作なので for をとる。ケーキは作った時点では相手に渡っていない、と考えると理解しやすい。buy, cook, get, find も同じ for のグループである。',
      },
      {
        question: '（　）に適する前置詞を入れなさい。He showed the picture (　) me.',
        wrongAnswer: 'for',
        trapExplanation: '直前に for の書きかえを練習した直後だと、こんどは何でも for を入れてしまう。動詞が show であることを確認していない。',
        correctAnswer: 'to',
        correctExplanation: 'show は相手に直接見せる動作なので to をとる。He showed the picture to me. が正しい。to と for のどちらかを問われたら、まず動詞を見て「わたす・伝える」系か「〜してやる」系かを判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s059',
    subject: 'eigo',
    examType: 'koko',
    title: '書きかえの例外：ask ＋ of と、書きかえられない動詞',
    description: 'of を使う ask と、cost / take / save のように書きかえできない動詞を確認する',
    intro: 'to か for か――そう身構えたところに ask が出てくると、答えは of です。さらに It took me an hour. のように、そもそも書きかえられない文もあります。例外はごく少数なので、ここでまとめて処理してしまえば、書きかえ問題で落とす心配はなくなります。',
    order: 559,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      'ask は of を使う。ask him a question → ask a question of him。',
      'cost, take, save は書きかえられない（It took me two hours. のままで使う）。',
      'It takes ＋ 人 ＋ 時間 ＋ to 〜 は決まった形として覚える。',
      '書きかえの可否は動詞ごとに決まっている。意味からは判断できない。',
      '書きかえられない文を無理に書きかえると誤答になる。「書きかえ不可」と判断する力も必要。',
    ],
    sections: [
      {
        heading: 'of を使う ask',
        body: `第4文型の書きかえで of を使うのは ask だけと考えてよい。数が少ないので、動詞名ごと覚えてしまう。

■ ask の書きかえ
　He asked me a question.
　→ He asked a question of me.
　May I ask you a favor?
　→ May I ask a favor of you?

■ ask を to や for で書きかえない
　× He asked a question to me.
　× He asked a question for me.
どちらも誤り。ask ＋ 物 ＋ of ＋ 人 という形で固定されている。

■ ask には別の使い方もある
　I asked him to help me.（彼に手伝ってくれと頼んだ）
　この形は「ask ＋ 人 ＋ to ＋ 動詞の原形」で、第4文型の書きかえとは別の構文である。
　I asked him for help.（彼に助けを求めた）
　この for は「〜を求めて」という意味で、書きかえの for とは役割が違う。

■ 実際の使用頻度
ask a question of him という形は、日常会話ではあまり使われない。しかし入試の書きかえ問題では出題されるため、形として覚えておく必要がある。

★ ポイント：書きかえの前置詞は「原則 to、作ってやる系は for、ask だけ of」と3段階で覚える。この順に思い出せば取りちがえない。`,
      },
      {
        heading: '書きかえられない動詞',
        body: `第4文型の形をしていても、書きかえられない動詞がある。むしろ「書きかえ不可」と見抜けるかどうかが問われる。

■ cost（〜に…の費用がかかる）
　The bike cost me 30,000 yen.（その自転車は3万円した）
　× The bike cost 30,000 yen to me.

■ take（〜に…の時間がかかる）
　It took me two hours to finish the work.
　× It took two hours to me 〜

■ save（〜の手間を省く）
　This machine saves us a lot of time.
　× This machine saves a lot of time for us.（この形は不自然）

■ It takes の決まった形
　It takes ＋ 人 ＋ 時間 ＋ to ＋ 動詞の原形
　例）It takes me twenty minutes to get to school.（学校まで20分かかる）
　人を省くこともできる。It takes twenty minutes to get to school.

■ なぜ書きかえられないのか
これらの動詞では、O1（人）が「わたされる相手」ではなく「費用や時間を負担する人」を表している。物が人へ移動する意味がないため、to や for で言いかえられない。

⚠ 注意：書きかえ問題ですべての文が書きかえられるとは限らない。cost / take / save が出てきたら、書きかえずにそのままの形で使う。テストで「書きかえなさい」と指示された場合、これらの動詞は出題されない。`,
      },
    ],
    trapExamples: [
      {
        question: 'He asked me a difficult question. を、ほぼ同じ意味の文に書きかえなさい。',
        wrongAnswer: 'He asked a difficult question to me.',
        trapExplanation: 'give や show と同じ「相手に伝える」動作に見えるため、to を選んでしまう。ask だけが of をとるという例外を覚えていない。',
        correctAnswer: 'He asked a difficult question of me.',
        correctExplanation: 'ask の書きかえには of を使い、ask ＋ 物 ＋ of ＋ 人 の形になる。to をとるのは give, show, teach, tell, send, lend、for をとるのは buy, make, cook, get。ask は of と、動詞名で覚えておく。',
      },
      {
        question: 'It took me two hours to clean my room. を to を使って書きかえなさい。',
        wrongAnswer: 'It took two hours to me to clean my room.',
        trapExplanation: '「書きかえなさい」という指示があると、どんな文でも必ず書きかえられると思いこんでしまう。take が書きかえできない動詞であることを知らないのが原因。',
        correctAnswer: '書きかえられない（It took me two hours to clean my room. のまま）',
        correctExplanation: 'take は「時間がかかる」という意味で、物が人にわたる動作ではないため to / for による書きかえができない。cost や save も同じ。It takes ＋ 人 ＋ 時間 ＋ to 〜 は決まった形として丸ごと覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s060',
    subject: 'eigo',
    examType: 'koko',
    title: 'SVOO の注意点：代名詞と語順',
    description: '目的語が代名詞のときの語順や、答え方でつまずきやすい点を確認する',
    intro: '「それを私にください」を Give me it. と言うと、英語としては不自然に響きます。代名詞のように「すでに話題に出ているもの」は、文の後ろではなく前に置きたくなるからです。語順の決まりには、こうした情報の並べ方の感覚が働いています。仕組みを知れば自然に選べます。',
    order: 560,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '物が代名詞（it / them）のときは、SVOO ではなく SVO ＋ to / for の形を使う。',
      '○ Give it to me.／△ Give me it.（自然な英語ではない）',
      '目的語に置く代名詞はすべて目的格（me, him, her, us, them）。',
      '第4文型のまま疑問文・否定文にすることもできる（Did he give you the ticket?）。',
      '英作文では、迷ったら SVO ＋ to / for の形で書くほうが安全。',
    ],
    sections: [
      {
        heading: '代名詞が来るときの語順',
        body: `第4文型は「人 → 物」の順が原則だが、物が代名詞になると事情が変わる。

■ 物が代名詞のとき
　○ Give it to me.（それを私にください）
　△ Give me it.
it や them のようにすでに話題に出ているものは、文の中で軽く扱われるため、長い位置（文末）に置くと不自然になる。前置詞を使った形にするのが自然である。

■ 両方が代名詞のとき
　○ Show it to him.
　× Show him it.

■ 人が代名詞・物が名詞のときは第4文型が自然
　○ He gave me a book.
　この形は最も自然で、書きかえなくてよい。

■ 目的格を守る
　× He gave I a book.　○ He gave me a book.
　× She showed we her album.　○ She showed us her album.
　主格 I, he, she, we, they を目的語の位置に置くことはできない。

★ ポイント：英作文で迷ったら SVO ＋ to / for の形を選ぶ。この形は物が代名詞でも名詞でも使えるため、失点の危険が小さい。`,
      },
      {
        heading: '疑問文・否定文と、覚えておきたい表現',
        body: `第4文型のまま疑問文や否定文にすることもできる。作り方はこれまでと同じで、do / does / did を使う。

■ 疑問文
　Did he give you the ticket?（彼はあなたにチケットをくれましたか）
　Does your mother make you lunch every day?
　What did he give you?（何をくれたのですか／物をたずねる）
　Who gave you this?（だれがくれたのですか／主語をたずねる）

■ 否定文
　He didn't tell me the truth.
　She doesn't teach us English this year.

■ 依頼の表現でよく使う形
　Will you show me your notebook?
　Could you tell me the way to the station?（駅への道を教えてください）
　Please pass me the salt.（塩を取ってください）

■ tell と say の区別
　○ He told me the news.（tell は人を目的語にとれる）
　× He said me the news.
　○ He said to me, "I am tired."（say は人の前に to が要る）
say は第4文型を作らない動詞である。

⚠ 注意：道をたずねる表現 Could you tell me the way to the station? は、tell が第4文型をとる代表例として頻出する。teach（学問を教える）ではなく tell を使う点にも注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '「それを私に見せてください」を英語にしなさい。',
        wrongAnswer: 'Please show me it.',
        trapExplanation: '第4文型は「人 → 物」の順と覚えているため、物が代名詞でもそのまま当てはめてしまう。代名詞は文末に置かないという英語の感覚を知らないのが原因。',
        correctAnswer: 'Please show it to me.',
        correctExplanation: '物が it や them のような代名詞のときは、SVO ＋ to / for の形にする。Please show it to me. が自然な英語である。人が代名詞で物が名詞なら Please show me your ticket. のように第4文型でよい。',
      },
      {
        question: '誤りを直しなさい。He said me the news.',
        wrongAnswer: 'He said me the news.（正しい）',
        trapExplanation: '「私にニュースを言った」という日本語から、said を第4文型で使ってしまう。tell と say の使い分けを意識していない。',
        correctAnswer: 'He told me the news.',
        correctExplanation: 'say は人を直接目的語にとれないので、第4文型を作れない。人を続けるなら say to me という形になる。「人に〜を伝える」という第4文型では tell を使い、He told me the news. とするのが正しい。',
      },
    ],
  },
  // ─────────────── 6. 第5文型SVOC（s061〜s065） ───────────────
  {
    id: 'koko_eigo_s061',
    subject: 'eigo',
    examType: 'koko',
    title: '第5文型 SVOC：O ＝ C の関係',
    description: '目的語とそれを説明する補語が並ぶ形を、O ＝ C という関係でつかむ',
    intro: 'We call him Ken. ――him と Ken は同じ人物です。第4文型では2つの目的語が別のものを指していましたが、こちらはイコールで結ばれます。同じ「名詞が2つ並ぶ」形なのに、関係がまるで違う。この違いを見抜くことが、5文型の総仕上げになります。',
    order: 561,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '第5文型は「S ＋ V ＋ O ＋ C」で、O ＝ C の関係が成り立つ。',
      'C になれるのは名詞と形容詞。副詞はCになれない（× make me happily）。',
      '代表的な動詞：call, name, make, keep, leave, find, elect。',
      '「OをCと呼ぶ・名づける」「OをCにする」「OをCのままにする」という意味になる。',
      'O と C の順序は固定。× We call Ken him は誤り。',
    ],
    sections: [
      {
        heading: 'O ＝ C を確かめる',
        body: `第5文型では、動詞のうしろに来る2つの語がイコールで結ばれる。「O は C である」という関係を作るのが特徴。

■ 基本の形
　We call him Ken.（him ＝ Ken）
　They named the baby Mary.（the baby ＝ Mary）
　The news made us happy.（us ＝ happy）
　Please keep the door open.（the door ＝ open）
　I found the book interesting.（the book ＝ interesting）

■ 意味のグループ
①O を C と呼ぶ・名づける：call, name
②O を C にする：make, elect, get
③O を C のままにしておく：keep, leave
④O が C だと分かる：find, think

■ 第4文型との見分け
　She made him a cake.（him ≠ a cake → 第4文型）
　They made him the captain.（him ＝ the captain → 第5文型）
形は同じでも、2つの語がイコールになるかどうかで文型が決まる。

■ 語順は固定
　○ We call him Ken.
　× We call Ken him.
O が先、C があとという順序は変えられない。

★ ポイント：文型を判断するときは、動詞のうしろの2語の間に「is」を入れてみるとよい。He is Ken. と言えるなら第5文型、言えないなら第4文型である。`,
        figureId: 'lf_kokoeigoext02_061',
      },
      {
        heading: 'C の位置に置ける語',
        body: `補語になれるのは名詞と形容詞である。第2文型のCと同じ考え方で、副詞は置けない。

■ C が名詞の場合
　We call this flower a sunflower.
　They elected him captain of the team.
　My friends call me Yu.

■ C が形容詞の場合
　The song made me sad.
　Keep your room clean.
　Don't leave the window open.
　I found the story exciting.

■ 副詞は置けない
　× The news made me happily.
　○ The news made me happy.
　× Keep the room cleanly.
　○ Keep the room clean.
日本語では「幸せに」「きれいに」と副詞のように訳すため、-ly を付けたくなるが誤りである。

■ 受け身にすると分かりやすい
　We call him Ken. → He is called Ken.（彼はケンと呼ばれる）
　C の部分がそのまま残ることから、C が O を説明していることが確認できる。

⚠ 注意：C に形容詞を置くとき、日本語の訳語に引きずられないこと。「部屋をきれいにしておく」の「きれいに」は英語では形容詞 clean である。C は O の状態を表すので、動作の様子を表す副詞は使わない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは彼をケンと呼びます」を英語にしなさい。',
        wrongAnswer: 'We call to him Ken.',
        trapExplanation: '「彼を〜と呼ぶ」の「と」を前置詞 to に置きかえてしまう。call が第5文型を作り、O と C を続けて並べるだけでよいことを知らないのが原因。',
        correctAnswer: 'We call him Ken.',
        correctExplanation: 'call ＋ O ＋ C の形で「OをCと呼ぶ」を表す。前置詞は入れない。him ＝ Ken という関係が成り立っているので第5文型である。名づける場合の name も同じ形をとる。',
      },
      {
        question: '誤りを直しなさい。The news made me to happy.',
        wrongAnswer: 'The news made me to happy.（正しい）',
        trapExplanation: '「私を幸せにした」の「〜に」を to だと考えて入れてしまう。want him to go のような不定詞の形の記憶が混ざることもある。',
        correctAnswer: 'The news made me happy.',
        correctExplanation: 'make ＋ O ＋ C の C には形容詞をそのまま置く。to は不要である。me ＝ happy という関係になり第5文型となる。なお副詞 happily を置くのも誤りなので注意する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s062',
    subject: 'eigo',
    examType: 'koko',
    title: 'call / name / make ＋ O ＋ 名詞',
    description: 'Cが名詞になる第5文型を、語順と冠詞に注意しながら使えるようにする',
    intro: '「その犬をポチと名づけた」「彼をキャプテンに選んだ」――どちらも、あるものに新しい呼び名や立場を与える言い方です。英語ではこれを O と C を並べるだけで表します。日本語の「と」「に」に当たる語は入りません。まずは名詞が C になる形から固めます。',
    order: 562,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      'call ＋ O ＋ C（名詞）：OをCと呼ぶ。We call him Ken.',
      'name ＋ O ＋ C（名詞）：OをCと名づける。They named the dog Pochi.',
      'make ＋ O ＋ C（名詞）：OをCにする。The news made him a hero.',
      'elect ＋ O ＋ C：OをCに選ぶ。役職名には a / the を付けないことが多い。',
      '語順は「O → C」。前置詞（to / as）は入れない。',
    ],
    sections: [
      {
        heading: '呼び名・名前・立場を与える形',
        body: `C が名詞になる第5文型は、「Oに名前や立場を与える」という意味を表す。

■ call（〜と呼ぶ）
　We call him Ken.
　My friends call me Yu-chan.
　What do you call this flower in English?（この花を英語で何と呼びますか）
　　→ 答え：We call it a sunflower.

■ name（〜と名づける）
　They named their baby Mary.
　We named the dog Pochi.
　He was named after his grandfather.（祖父にちなんで名づけられた）

■ make（〜にする）
　The victory made him a hero.
　Hard work made her a great pianist.

■ elect / choose（〜に選ぶ）
　We elected him captain of our team.
　They chose her class leader.
　役職を表す名詞が C になるときは、a / the を付けないことが多い。

★ ポイント：What do you call 〜 in English? は入試の対話文でよく出る表現である。答えるときも We call it 〜. と同じ第5文型で返す。`,
      },
      {
        heading: '語順と前置詞のあやまり',
        body: `この形でのミスは、ほとんどが語順か余計な前置詞である。

■ 語順を守る
　○ We named the dog Pochi.（犬 → 名前）
　× We named Pochi the dog.（「ポチを犬と名づけた」という意味になってしまう）
必ず「説明される側（O）」を先に、「新しい呼び名（C）」をあとに置く。

■ 前置詞を入れない
　× They named the baby as Mary.
　× We call to him Ken.
　○ They named the baby Mary.
　○ We call him Ken.
日本語の「〜と」「〜に」に当たる語は英語では現れない。

■ 受け身の形
　We call him Ken. → He is called Ken.
　They named the baby Mary. → The baby was named Mary.
受け身にすると C だけがうしろに残る。

■ 疑問文
　What do you call this in Japanese?
　What did they name their baby?
たずねる部分が C なので、疑問詞 what を文頭に出す。

⚠ 注意：as を入れる形（regard A as B、think of A as B）は別の構文であって、call や name には as を使わない。似た意味の表現でも動詞ごとに形が決まっている。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼らはその赤ちゃんをメアリーと名づけました」を英語にしなさい。',
        wrongAnswer: 'They named the baby as Mary.',
        trapExplanation: '「〜と名づける」の「と」を as で表そうとしてしまう。regard A as B のような別の構文の記憶が混ざるのも原因になる。',
        correctAnswer: 'They named the baby Mary.',
        correctExplanation: 'name は O と C を続けて並べるだけでよく、as は入れない。the baby ＝ Mary という第5文型になる。call も同じで、× call him as Ken ではなく call him Ken とする。',
      },
      {
        question: '正しい英文に並べかえなさい。（Pochi / we / the dog / named / .）',
        wrongAnswer: 'We named Pochi the dog.',
        trapExplanation: '「ポチと名づけた」という日本語の語順のまま、名前を先に置いてしまう。O と C の役割を確認していないために、意味が逆の文になっている。',
        correctAnswer: 'We named the dog Pochi.',
        correctExplanation: '第5文型は「説明される側（O）→ 新しい呼び名（C）」の順。the dog が O、Pochi が C なので We named the dog Pochi. が正しい。並べかえ問題では O ＝ C の関係と語順を必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s063',
    subject: 'eigo',
    examType: 'koko',
    title: 'make / keep / leave / find ＋ O ＋ 形容詞',
    description: 'Cが形容詞になる第5文型を、副詞との取りちがえに注意して使い分ける',
    intro: '「部屋をきれいにしておきなさい」を Keep the room cleanly. と書くと誤りです。日本語では「きれいに」と副詞のように言いますが、英語では部屋そのものの状態を表す形容詞 clean を使います。訳語ではなく、何を説明しているかで品詞を決める――その練習をします。',
    order: 563,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      'make ＋ O ＋ 形容詞：OをCにする。The news made me happy.',
      'keep ＋ O ＋ 形容詞：OをCのままにしておく。Keep the door closed.',
      'leave ＋ O ＋ 形容詞：OをCのままにして放っておく。Don\'t leave the window open.',
      'find ＋ O ＋ 形容詞：OがCだと分かる。I found the book easy.',
      'C の位置には形容詞。副詞（-ly の形）は入らない。',
    ],
    sections: [
      {
        heading: '状態を表す形容詞をCに置く',
        body: `C が形容詞になる第5文型は、「O をどういう状態にするか」を表す。動詞ごとに意味のちがいがある。

■ make（〜の状態にする）
　The news made us happy.（その知らせは私たちを幸せにした）
　His words made me angry.
　Music makes me relaxed.

■ keep（〜の状態を保つ）
　Please keep the door closed.
　Keep your hands clean.
　We must keep the river clean.

■ leave（〜の状態のまま放っておく）
　Don't leave the window open.
　He left the door unlocked.

■ find（〜だと分かる・感じる）
　I found the book easy.（その本はやさしいと分かった）
　I found the movie boring.

■ get / turn なども使える
　I got my hands dirty.（手が汚れた）

★ ポイント：これらの文はすべて「O ＝ C」で確かめられる。us ＝ happy、the door ＝ closed、the book ＝ easy。イコールが成り立たなければ第5文型ではない。`,
        figureId: 'lf_kokoeigoext02_063',
      },
      {
        heading: '形容詞と副詞を取りちがえない',
        body: `この形でいちばん多い誤りは、C の位置に副詞を置いてしまうことである。日本語の訳が「〜に」「〜く」となるため、副詞に見えてしまう。

■ 正しい形
　○ The news made me happy.　× made me happily
　○ Keep the room clean.　× keep the room cleanly
　○ I found the question easy.　× found the question easily

■ 見分け方
C は O の状態を説明している。つまり名詞を説明しているのだから形容詞である。一方、副詞は動詞の様子を説明する語なので、ここには入らない。
　He solved the question easily.（easily は solved を説明する副詞・第3文型）
　I found the question easy.（easy は the question を説明する形容詞・第5文型）

■ まぎらわしい語
　free（自由な・形容詞）／freely（自由に・副詞）
　quiet（静かな・形容詞）／quietly（静かに・副詞）
　　Keep quiet.（静かにしていなさい）
　　He spoke quietly.（静かに話した）

■ 過去分詞が C になることもある
　Keep the door closed.（閉めたままにしておく）
　I heard my name called.
過去分詞は「〜された状態」という形容詞のはたらきをしている。

⚠ 注意：日本語の「〜くする」「〜にする」は副詞のように聞こえるが、英語では状態を表す形容詞を使う。訳語ではなく「何を説明しているか」で品詞を決める習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '「部屋をきれいにしておきなさい」を英語にしなさい。',
        wrongAnswer: 'Keep the room cleanly.',
        trapExplanation: '「きれいに」という日本語の語尾から副詞を選んでしまう。C が the room の状態を説明する語であることを意識していない。',
        correctAnswer: 'Keep the room clean.',
        correctExplanation: 'C は O を説明する語なので形容詞 clean を使う。the room ＝ clean という関係になり第5文型。副詞 cleanly は動作の様子を表す語なので、この位置には置けない。',
      },
      {
        question: '正しい英文に並べかえなさい。（interesting / I / the book / found / .）',
        wrongAnswer: 'I found interesting the book.',
        trapExplanation: '「おもしろい本だと分かった」という日本語につられ、形容詞を名詞の前に置いてしまう。第5文型では O が先、C があとという語順を確認していない。',
        correctAnswer: 'I found the book interesting.',
        correctExplanation: '第5文型の語順は「O → C」なので I found the book interesting. が正しい。I found an interesting book. と書くと「おもしろい本を見つけた」という第3文型になり、意味が変わってしまう。',
      },
    ],
  },

  {
    id: 'koko_eigo_s064',
    subject: 'eigo',
    examType: 'koko',
    title: 'SVOO と SVOC の見分け',
    description: '名詞が2つ並ぶ形を、イコールが成り立つかどうかで確実に判断する',
    intro: 'She made him a cake. と They made him the captain. は、単語の並び方がまったく同じです。それでも前者は「彼にケーキを作った」、後者は「彼をキャプテンにした」。決め手は him とうしろの語が同じものを指すかどうか、ただそれだけです。判断の手順を固めます。',
    order: 564,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '判断の基準は O1 ＝ O2 になるかどうか。なるなら SVOC、ならないなら SVOO。',
      'SVOO は「人 ＋ 物」、SVOC は「O ＋ その説明」。',
      'SVOO は to / for を使って書きかえられるが、SVOC は書きかえられない。',
      'make は両方の文型を作る。made him a cake（SVOO）／made him a hero（SVOC）。',
      'C が形容詞ならば迷わず SVOC。形容詞は目的語にならない。',
    ],
    sections: [
      {
        heading: 'イコールが成り立つかで決める',
        body: `動詞のうしろに名詞が2つ並ぶ文は、SVOO か SVOC のどちらかである。見分ける方法は、2つの名詞の間に is を入れてみることである。

■ SVOO（イコールにならない）
　She made him a cake.
　　→ He is a cake. とは言えない → 第4文型
　My father bought me a bike.
　　→ I am a bike. とは言えない → 第4文型

■ SVOC（イコールになる）
　They made him the captain.
　　→ He is the captain. と言える → 第5文型
　We call him Ken.
　　→ He is Ken. と言える → 第5文型

■ 書きかえられるかどうかでも確認できる
　SVOO は前置詞を使って書きかえられる。
　　She made him a cake. → She made a cake for him. ○
　SVOC は書きかえられない。
　　They made him the captain. → × They made the captain for him.
この操作をしてみて意味が通らなければ SVOC である。

★ ポイント：意味を考える前に、まず「is を入れて言えるか」を試す。この一手間で、形が同じ2つの文型を確実に切り分けられる。`,
      },
      {
        heading: '同じ動詞が両方の文型を作る',
        body: `make のように、SVOO と SVOC の両方を作る動詞がある。うしろの語の関係で意味が決まる。

■ make の2つの使い方
　My mother made me a cake.（母は私にケーキを作ってくれた／SVOO）
　The news made me sad.（その知らせは私を悲しませた／SVOC）
　Hard work made him a great player.（努力が彼を名選手にした／SVOC）

■ find の2つの使い方
　I found him a good job.（彼によい仕事を見つけてやった／SVOO）
　I found him kind.（彼は親切だと分かった／SVOC）

■ get の2つの使い方
　Please get me a ticket.（チケットを取ってきて／SVOO）
　I got my shoes wet.（靴をぬらしてしまった／SVOC）

■ 形容詞が来たら必ず SVOC
　The news made me sad. の sad は形容詞なので目的語にはなれない。うしろの語が形容詞なら考えるまでもなく第5文型である。

⚠ 注意：訳から判断しようとすると、「〜してやる」と「〜にする」の区別があいまいになることがある。必ず「O1 is O2」が言えるかどうかという形の基準で判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。My mother made me a cake.',
        wrongAnswer: '第5文型（SVOC）',
        trapExplanation: 'make ＋ O ＋ C の形を学んだ直後だと、made me 〜 という並びを見ただけで第5文型だと決めてしまう。me と a cake の関係を確かめていない。',
        correctAnswer: '第4文型（SVOO）',
        correctExplanation: 'I am a cake. とは言えないので、me と a cake はイコールにならない。「私にケーキを作ってくれた」という意味なので第4文型である。前置詞を使って made a cake for me と書きかえられることでも確認できる。',
      },
      {
        question: '次の文の文型を答えなさい。They made him the captain of the team.',
        wrongAnswer: '第4文型（SVOO）',
        trapExplanation: '前の問題で made me a cake が第4文型だったため、同じ形に見えるこの文も第4文型だと判断してしまう。形だけを見て関係を確かめていない。',
        correctAnswer: '第5文型（SVOC）',
        correctExplanation: 'He is the captain of the team. と言えるので、him ＝ the captain という関係が成り立つ。したがって第5文型である。× They made the captain for him. とは書きかえられない点でも区別できる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s065',
    subject: 'eigo',
    examType: 'koko',
    title: 'SVOC の発展：原形不定詞と to 不定詞',
    description: 'help / let / make ＋ O ＋ 原形、want / tell / ask ＋ O ＋ to 〜 を使い分ける',
    intro: '「母は私に部屋を掃除させた」は My mother made me clean my room. で、to が入りません。ところが「母は私に部屋を掃除してほしいと思っている」なら wants me to clean となり、to が必要です。to が要るか要らないかは動詞で決まっています。ここを整理します。',
    order: 565,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      'make / let / have ＋ O ＋ 動詞の原形（to を付けない）。使役動詞という。',
      'help ＋ O ＋ 原形／help ＋ O ＋ to 〜 はどちらも可。',
      'want / tell / ask ＋ O ＋ to ＋ 動詞の原形（to が必要）。',
      'see / hear / feel ＋ O ＋ 原形（知覚動詞。〜するのを見る・聞く）。',
      '意味は「Oが〜する」。Oと動詞の間に主語・述語の関係がある。',
    ],
    sections: [
      {
        heading: '原形が続くグループ',
        body: `第5文型の C の位置には、動詞の原形が来ることがある。この形をとる動詞は限られている。

■ 使役動詞（〜させる）
　make ＋ O ＋ 原形：（強制的に）〜させる
　　My mother made me clean my room.（掃除させた）
　let ＋ O ＋ 原形：（許して）〜させてやる
　　Let me help you.（手伝わせてください）
　　My father let me use his computer.
　have ＋ O ＋ 原形：〜してもらう
　　I had him carry my bag.

■ help
　help ＋ O ＋ 原形／help ＋ O ＋ to ＋ 原形（どちらでもよい）
　　He helped me carry the box.
　　He helped me to carry the box.

■ 知覚動詞（〜するのを見る・聞く・感じる）
　see / watch / hear / feel ＋ O ＋ 原形
　　I saw him enter the room.（彼が部屋に入るのを見た）
　　I heard someone call my name.

■ すべて「O が〜する」という関係
　made me clean → 私が掃除する
　saw him enter → 彼が入る
O と原形の間に、主語と述語の関係が成り立っている。

★ ポイント：原形をとるのは make / let / have / help と、see / watch / hear / feel のグループだけ。これ以外の動詞では to が必要になる。`,
      },
      {
        heading: 'to が必要なグループ',
        body: `want, tell, ask などの動詞では、C の位置に to ＋ 動詞の原形を置く。to を落とすと誤りになる。

■ 代表的な動詞
　want ＋ O ＋ to 〜（Oに〜してほしい）
　　I want you to come with me.
　　She wants me to help her.
　tell ＋ O ＋ to 〜（Oに〜するように言う）
　　My teacher told me to study harder.
　ask ＋ O ＋ to 〜（Oに〜するよう頼む）
　　I asked him to open the window.
　would like ＋ O ＋ to 〜（丁寧に「〜してほしい」）
　　I would like you to come to the party.

■ 否定の形
　My mother told me not to go out.（外出しないように言った）
　not は to の前に置く。

■ 使役動詞との対比
　○ She made me clean the room.（to なし）
　○ She told me to clean the room.（to あり）
どちらも「私が掃除する」という関係だが、to の有無は動詞で決まる。

■ 受け身になると to が現れる
　She made me clean the room. → I was made to clean the room.
受け身では make のあとにも to が付く。

⚠ 注意：want のうしろに that 節は置けない。× I want that you come. は誤りで、○ I want you to come. とする。日本語の「〜してほしいと思う」を that で表そうとしないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。My mother made me to clean my room.',
        wrongAnswer: 'My mother made me to clean my room.（正しい）',
        trapExplanation: 'want me to 〜、tell me to 〜 の形を先に覚えているため、make にも to を付けてしまう。使役動詞が原形をとるという例外を意識していない。',
        correctAnswer: 'My mother made me clean my room.',
        correctExplanation: 'make / let / have は使役動詞で、うしろの動詞は原形のまま置く。to は付けない。同じ内容を to を使って言うなら、My mother told me to clean my room. のように tell を使う。',
      },
      {
        question: '「彼女は私に手伝ってほしいと思っています」を英語にしなさい。',
        wrongAnswer: 'She wants me help her.',
        trapExplanation: 'make me clean のような原形の形を学んだ直後だと、want にも同じ形を当てはめてしまう。to をとるグループと原形をとるグループの区別ができていない。',
        correctAnswer: 'She wants me to help her.',
        correctExplanation: 'want は「O に〜してほしい」というとき to 不定詞をとる。原形をとるのは make / let / have / help と知覚動詞だけである。tell, ask, would like も to をとるグループに入る。',
      },
    ],
  },
  // ─────────────── 7. There is / are 構文（s066〜s068） ───────────────
  {
    id: 'koko_eigo_s066',
    subject: 'eigo',
    examType: 'koko',
    title: 'There is / are：存在を表す言い方',
    description: '「〜がある・いる」を表す構文の語順と、be動詞の数の合わせ方をおさえる',
    intro: '「机の上に本があります」を英語で言うとき、多くの人が The desk has a book. と考えてしまいます。英語では There is a book on the desk. と、まず「あるよ」と切り出してから中身を言います。この There には「そこに」という意味はありません。仕組みを知れば迷わなくなります。',
    order: 566,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '「〜がある・いる」は There is / There are ＋ 名詞 ＋ 場所を表す語句。',
      'be動詞はうしろの名詞（本当の主語）の数に合わせる。単数 → is、複数 → are。',
      'There 自体に「そこに」という意味はない。訳さない。',
      '過去は There was / There were、未来は There will be。',
      'have を使って「〜がある」を表そうとしない。× The desk has a book.',
    ],
    sections: [
      {
        heading: '語順と be動詞の一致',
        body: `There is / are は、聞き手がまだ知らないものの存在を伝えるときに使う。

■ 基本の形
　There is ＋ 単数の名詞 ＋ 場所
　　There is a cat under the table.（テーブルの下にネコがいます）
　There are ＋ 複数の名詞 ＋ 場所
　　There are five books on the desk.（机の上に本が5冊あります）

■ be動詞はうしろの名詞に合わせる
　There is a book on the desk.（a book は単数 → is）
　There are many books on the desk.（many books は複数 → are）
　There is some water in the glass.（water は数えられない名詞 → is）
文頭の There は形の上の主語にすぎず、本当の主語はうしろの名詞である。

■ 過去・未来
　There was a park here ten years ago.（10年前ここに公園があった）
　There were many people in the hall.
　There will be a concert next Sunday.

■ 場所を表す語句
　on the desk / in the box / under the tree / near the station / in this city
これらは M で、なくても文は成り立つ。

★ ポイント：英作文では、まず「あるものが単数か複数か」を確かめてから is / are を決める。文頭の There を見て is に決めてしまうミスがとても多い。`,
        figureId: 'lf_kokoeigoext02_066',
      },
      {
        heading: '日本語の「ある」との違い',
        body: `日本語の「〜がある」を英語にするとき、have を使ってしまう誤りが目立つ。使い分けを整理する。

■ There is / are を使う場合
存在そのものを伝えるとき。
　○ There is a big park in our town.（私たちの町には大きな公園があります）
　× Our town has a big park. は不自然。

■ have を使う場合
持ち主がはっきりしていて「所有している」と言えるとき。
　○ I have two brothers.（兄弟が2人います）
　○ This room has two windows.（部屋の設備として言う場合は可）

■ 主語がはっきりしている場合は be動詞だけでよい
　My bag is on the desk.（私のかばんは机の上にあります）
　場所を伝えるのが目的なら、There は使わない。

■ 訳し方
There is a cat under the table. を「そこにネコがいます」と訳してはいけない。「テーブルの下にネコがいます」と訳す。There は文を始めるための語であって、意味をもたない。

■ 短縮形
　There is → There's（会話でよく使う）
　There are に短縮形はない。

⚠ 注意：There is / are の文では、うしろの名詞が主語である。There are a lot of people in the park. のように主語が長くなると数を見失いやすいので、名詞の中心語（people）を確認して be動詞を決める。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。There (　) many students in the gym.',
        wrongAnswer: 'is',
        trapExplanation: '文頭の There を主語だと思いこみ、単数扱いで is を選んでしまう。うしろの名詞が本当の主語であることを理解していない。',
        correctAnswer: 'are',
        correctExplanation: '本当の主語は many students で複数なので are を使う。There are many students in the gym. が正しい。be動詞を決めるときは必ずうしろの名詞を見る、と手順を固定しておく。',
      },
      {
        question: '「私の家の近くに公園があります」を英語にしなさい。',
        wrongAnswer: 'My house has a park near it.',
        trapExplanation: '日本語の「ある」を「持っている」と結びつけて have を使ってしまう。存在を表す There is / are 構文が使えることを思い出せていない。',
        correctAnswer: 'There is a park near my house.',
        correctExplanation: '存在を伝えるときは There is / are を使う。所有していないものに have は使えない。「〜がある」と言いたいときは、まず There is / are の形を考えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s067',
    subject: 'eigo',
    examType: 'koko',
    title: 'There is / are の否定文・疑問文',
    description: '否定・疑問の作り方と、数をたずねる How many 〜 are there? を身につける',
    intro: '「教室にはだれもいません」「かばんの中に本はありますか」――こうした言い方は、be動詞の否定文・疑問文とまったく同じ作り方でできます。違うのは答え方で、Yes, it is. ではなく Yes, there is. と There をくり返す点です。細かいところですが、入試ではきちんと問われます。',
    order: 567,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '否定文は be動詞のうしろに not。There is not / There are not（There isn\'t / aren\'t）。',
      '「1つもない」は not 〜 any か no を使う。There aren\'t any books. ＝ There are no books.',
      '疑問文は be動詞を There の前に出す。Is there 〜? / Are there 〜?',
      '答えは Yes, there is. / No, there isn\'t. のように there を使う。',
      '数をたずねるときは How many ＋ 複数名詞 ＋ are there ＋ 場所?',
    ],
    sections: [
      {
        heading: '否定文と疑問文の作り方',
        body: `作り方は be動詞の文とまったく同じで、not を入れるか be動詞を前に出すかである。

■ 否定文
　There is a book on the desk.
　→ There is not a book on the desk.（There isn't 〜）
　There are some students in the room.
　→ There are not any students in the room.（There aren't 〜）
　※ 肯定文の some は否定文・疑問文で any に変える。

■ 「1つもない」の言い方
　There aren't any chairs in this room.
　＝ There are no chairs in this room.
　no を使うときは not を使わない。

■ 疑問文
　Is there a park near here?（この近くに公園はありますか）
　Are there any children in the room?
　Was there a shop here before?

■ 答え方
　Is there a park near here? — Yes, there is. / No, there isn't.
　Are there any students? — Yes, there are. / No, there aren't.
答えでも there を使う。× Yes, it is. は誤りである。

★ ポイント：疑問文では any を使うのがふつう。Are there any questions?（質問はありますか）は授業でもよく使われる表現である。`,
      },
      {
        heading: '数をたずねる言い方',
        body: `「いくつありますか」とたずねるときは、How many を使った決まった語順がある。

■ 基本の形
　How many ＋ 複数名詞 ＋ are there ＋ 場所?
　　How many students are there in your class?（あなたのクラスには何人生徒がいますか）
　　— There are thirty-five.（35人です）
　　How many parks are there in this city?

■ 語順に注意
　○ How many students are there in your class?
　× How many students there are in your class?
疑問文なので、are を there の前に出す。

■ 名詞は必ず複数形
　○ How many books are there on the desk?
　× How many book are there 〜?

■ 数えられない名詞の場合
　How much water is there in the bottle?
　much を使い、be動詞は is にする。

■ 答え方
　There are five.（数だけ答える）
　There are five books on the desk.（文で答える）
　答えるときも There を使うのが自然である。

⚠ 注意：How many のうしろの名詞が複数形でも、数えられない名詞をたずねる How much のうしろは単数形のまま。water, money, time などは複数形にしない。`,
      },
    ],
    trapExamples: [
      {
        question: 'Is there any milk in the bottle? に Yes で答えなさい。',
        wrongAnswer: 'Yes, it is.',
        trapExplanation: 'Is で始まる疑問文なので、be動詞の疑問文と同じように主語を代名詞にして答えてしまう。There 構文では there をそのまま使うという決まりを知らないのが原因。',
        correctAnswer: 'Yes, there is.',
        correctExplanation: 'There is / are の疑問文には Yes, there is. / No, there isn\'t. と there を使って答える。Are there 〜? なら Yes, there are. / No, there aren\'t. となる。答えの形まで含めて1組で覚える。',
      },
      {
        question: '「あなたのクラスには何人の生徒がいますか」を英語にしなさい。',
        wrongAnswer: 'How many students there are in your class?',
        trapExplanation: '疑問詞を文頭に出したところで安心してしまい、うしろを肯定文の語順のままにしてしまう。疑問文では be動詞を主語の前に出すという原則が抜けている。',
        correctAnswer: 'How many students are there in your class?',
        correctExplanation: '「疑問詞 ＋ 疑問文の語順」が原則なので、are を there の前に出して are there とする。How many のうしろの名詞は複数形 students にすることも忘れない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s068',
    subject: 'eigo',
    examType: 'koko',
    title: 'There is / are が使えないとき',
    description: '特定のものを主語にできないという制限と、時制の変化を確認する',
    intro: '「私のかばんは机の上にあります」を There is my bag on the desk. と書くと不自然です。There is / are は「まだ相手が知らないもの」を紹介する言い方なので、「私のかばん」のようにはっきり決まったものには使えません。この使い分けは、公立入試の英作文でも差がつくところです。',
    order: 568,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      'my / your / the / 人名など「特定のもの」は There is / are の主語にできない。',
      '特定のものの場所を言うときは「主語 ＋ be動詞 ＋ 場所」の形にする。My bag is on the desk.',
      'There is / are の主語になれるのは a / some / many / no などが付く不特定の名詞。',
      '過去は There was / were、未来は There will be、助動詞は There must be のように使う。',
      '日本語では同じ「〜にあります」でも、英語では2つの形を使い分ける。',
    ],
    sections: [
      {
        heading: '特定のものは主語にできない',
        body: `There is / are は、相手がまだ知らないものを話題に出すときの言い方である。そのため、すでに特定されているものには使えない。

■ 使えないもの（特定のもの）
　my bag / your book / the pen / Ken's bike / this desk / Tokyo Tower
　× There is my bag on the desk.
　○ My bag is on the desk.
　× There is the book on the table.
　○ The book is on the table.

■ 使えるもの（不特定のもの）
　a book / some water / many people / three cats / no students
　○ There is a book on the desk.
　○ There are some children in the park.

■ 使い分けの考え方
　There is 〜：「〜というものが存在する」と新しく紹介する。
　主語 ＋ be動詞 ＋ 場所：「その物がどこにあるか」を説明する。
どちらも日本語では「〜にあります」と訳されるので、英語にするときに何を伝えたいのかを考える必要がある。

■ 対話の中での使い分け
　A: Is there a post office near here?（不特定 → There）
　B: Yes. It's next to the bank.（すでに話題に出たもの → it）
一度話題に出たあとは it / they を主語にする。

★ ポイント：主語に my, your, the, this, 人名が付いていたら There is / are は使えない、と形で覚えてしまうのが確実である。`,
      },
      {
        heading: '時制と助動詞',
        body: `There is / are の be動詞の部分は、時制や助動詞によって形を変える。

■ 過去
　There was a big tree here ten years ago.
　There were many students in the gym yesterday.
　過去でも、うしろの名詞の数に合わせて was / were を選ぶ。

■ 未来
　There will be a meeting tomorrow.
　There is going to be a concert next month.
　will のうしろは原形なので There will be となる（× There will is）。

■ 助動詞
　There must be some mistake.（何かまちがいがあるにちがいない）
　There may be a problem.（問題があるかもしれない）
　There should be a station near here.
助動詞のうしろも be の形になる。

■ 現在完了（中3で学ぶ）
　There have been many changes.（多くの変化があった）

■ 数を合わせる原則は変わらない
　There was a cat.／There were two cats.
　時制が変わっても、be動詞はうしろの名詞の数に合わせる。

⚠ 注意：未来の文で × There will is a concert. と書く誤りが多い。助動詞のうしろは必ず動詞の原形なので、is ではなく be を使う。There is going to be 〜 の形も be が2回出てくるように見えるが正しい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私のかばんは机の上にあります」を英語にしなさい。',
        wrongAnswer: 'There is my bag on the desk.',
        trapExplanation: '「〜にあります」という日本語を見た瞬間に There is を使ってしまう。my bag が特定のもので、There 構文の主語にできないことを知らないのが原因。',
        correctAnswer: 'My bag is on the desk.',
        correctExplanation: 'my / your / the / this などが付く特定の名詞は There is / are の主語にできない。その場合は「主語 ＋ be動詞 ＋ 場所」の形で表す。a bag のように不特定なら There is a bag on the desk. でよい。',
      },
      {
        question: '「明日、体育館でコンサートがあります」を英語にしなさい。',
        wrongAnswer: 'There will is a concert in the gym tomorrow.',
        trapExplanation: 'There is 〜 という形を覚えているため、will を足すときに is をそのまま残してしまう。助動詞のうしろは原形という原則を、There 構文には当てはめていない。',
        correctAnswer: 'There will be a concert in the gym tomorrow.',
        correctExplanation: 'will のうしろは動詞の原形なので、is ではなく be を使う。同じように There must be 〜、There may be 〜 も原形の be になる。過去なら There was a concert 〜 と was を使う。',
      },
    ],
  },

  // ─────────────── 8. 自動詞と他動詞の区別（s069〜s070） ───────────────
  {
    id: 'koko_eigo_s069',
    subject: 'eigo',
    examType: 'koko',
    title: '自動詞と他動詞：前置詞が要るか要らないか',
    description: '目的語を直接とれる動詞とそうでない動詞を、意味の近いペアで区別する',
    intro: 'listen と hear はどちらも「聞く」ですが、listen には to が必要で hear には要りません。日本語の訳が同じでも、英語では性質が違うのです。この違いは「その動作を自分から起こすか、勝手に起こるか」と結びついています。仕組みごと理解して、まとめて覚えてしまいましょう。',
    order: 569,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      '他動詞は目的語を直接とる。自動詞は目的語をとらず、名詞を続けるには前置詞が要る。',
      '意味が近くても扱いが違う：listen to ↔ hear、look at ↔ see、arrive at ↔ reach。',
      '前置詞不要の他動詞：reach, discuss, marry, enter, attend, mention, resemble。',
      '前置詞が必要な自動詞：arrive at, listen to, look at, wait for, get to, belong to。',
      '辞書で調べるときは、その動詞が自動詞か他動詞かの表示を確認する。',
    ],
    sections: [
      {
        heading: '意味の近いペアで比べる',
        body: `入試で問われるのは、意味が似ているのに扱いが違う動詞の組み合わせである。ペアで整理して覚える。

■ 聞く
　listen to ＋ 名詞（自動詞・意識して耳を傾ける）
　　I listened to the radio last night.
　hear ＋ 名詞（他動詞・自然に聞こえる）
　　I heard a strange sound.
　※ 「音楽を聞く」は listen to music、「物音が聞こえた」は heard a sound。

■ 見る
　look at ＋ 名詞（自動詞・意識して目を向ける）
　　Look at that picture.
　see ＋ 名詞（他動詞・目に入る）
　　I saw Ken at the station.
　watch ＋ 名詞（他動詞・動くものをじっと見る）
　　I watched the soccer game on TV.

■ 着く
　arrive at / in ＋ 名詞（自動詞）
　　We arrived at the hotel.
　get to ＋ 名詞（自動詞）
　　We got to the hotel.
　reach ＋ 名詞（他動詞）
　　We reached the hotel.

■ その他
　wait for ＋ 名詞（自動詞）／ enter ＋ 名詞（他動詞）
　graduate from ＋ 名詞（自動詞）／ attend ＋ 名詞（他動詞）

★ ポイント：訳が同じでも形が違う。「listen には to、hear には何も付けない」のように、動詞と前置詞をひとかたまりの形で覚えてしまうこと。`,
        figureId: 'lf_kokoeigoext02_069',
      },
      {
        heading: '見分け方と覚え方',
        body: `動詞が自動詞か他動詞かは、規則から導けるものではなく、語ごとに決まっている。ただし覚え方の工夫はできる。

■ ①よく出るものを一覧で覚える
　前置詞が要らない（他動詞）
　　reach（着く）／discuss（話し合う）／marry（結婚する）／enter（入る）／
　　attend（出席する）／mention（述べる）／resemble（似ている）／approach（近づく）
　前置詞が要る（自動詞）
　　arrive at / in（着く）／listen to（聞く）／look at（見る）／wait for（待つ）／
　　get to（着く）／belong to（所属する）／agree with（賛成する）／graduate from（卒業する）

■ ②例文ごと覚える
語だけを覚えると試験中に迷う。I listened to the radio. のように短い文で覚えると、前置詞の有無まで一緒に思い出せる。

■ ③一つの動詞が両方の使い方をすることもある
　The door opened.（ドアが開いた・自動詞）
　He opened the door.（ドアを開けた・他動詞）
　The class started at nine.（自動詞）／ He started his work.（他動詞）
open, start, begin, close, move, change などは自動詞・他動詞の両方で使える。

⚠ 注意：「〜を」と訳せるから他動詞だ、という判断はできない。listen to music は「音楽を聞く」と訳せるが listen は自動詞である。日本語の助詞ではなく、英語の動詞ごとの性質で決まる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は昨夜、奇妙な物音を聞きました」を英語にしなさい。',
        wrongAnswer: 'I listened a strange sound last night.',
        trapExplanation: '「聞く」といえば listen という記憶が先に働き、しかも to まで落としてしまう。listen が自動詞であることと、意図せず聞こえた場合は hear を使うことの両方を外している。',
        correctAnswer: 'I heard a strange sound last night.',
        correctExplanation: '自然に耳に入った音は hear で表し、他動詞なので前置詞は不要である。意識して耳を傾ける場合は listen to を使い、I listened to the radio. のように to が要る。2語をペアで覚える。',
      },
      {
        question: '「私たちは6時に空港に到着しました」を arrive を使って英語にしなさい。',
        wrongAnswer: 'We arrived the airport at six.',
        trapExplanation: '日本語の「空港に到着した」を語順どおりに置きかえてしまう。reach the station のような他動詞の形と混ざって、前置詞を落とすことも多い。',
        correctAnswer: 'We arrived at the airport at six.',
        correctExplanation: 'arrive は自動詞なので、場所を続けるには at（地点）や in（広い場所）が要る。他動詞の reach を使えば We reached the airport at six. と前置詞なしで書ける。どちらの動詞を使うかで形が変わる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s070',
    subject: 'eigo',
    examType: 'koko',
    title: 'まぎらわしい自動詞・他動詞のペア',
    description: 'rise / raise、lie / lay、sit / set などを意味と形の両面から区別する',
    intro: '「太陽がのぼる」と「手をあげる」。日本語では別の言葉ですが、英語では rise と raise という一文字違いの語になります。しかも一方は目的語をとり、もう一方はとりません。形が似ているぶん取りちがえやすく、だからこそ入試で狙われます。最後に総仕上げとして整理します。',
    order: 570,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      'rise（自動詞・のぼる／rose - risen）と raise（他動詞・あげる／raised - raised）。',
      'lie（自動詞・横たわる／lay - lain）と lay（他動詞・置く／laid - laid）。',
      'sit（自動詞・すわる／sat - sat）と set（他動詞・置く／set - set）。',
      '自動詞のほうは目的語をとらず、他動詞のほうは必ず目的語をとる。',
      'lie の過去形 lay と、他動詞 lay の原形が同じつづりになる点に注意する。',
    ],
    sections: [
      {
        heading: '3組のペアを整理する',
        body: `形が似ていて意味も近い動詞のペアは、自動詞か他動詞かで区別する。

■ rise と raise
　rise（自動詞）：のぼる・上がる　rise - rose - risen
　　The sun rises in the east.（太陽は東からのぼる）
　　Prices are rising.（物価が上がっている）
　raise（他動詞）：あげる・育てる　raise - raised - raised
　　He raised his hand.（彼は手をあげた）
　　They raise sheep on the farm.

■ lie と lay
　lie（自動詞）：横たわる・ある　lie - lay - lain
　　He was lying on the bed.（ベッドに横になっていた）
　lay（他動詞）：置く・横たえる　lay - laid - laid
　　She laid the baby on the bed.（赤ちゃんをベッドに寝かせた）
　※ lie には「うそをつく」（lie - lied - lied）という別の語もある。

■ sit と set
　sit（自動詞）：すわる　sit - sat - sat
　　Please sit down.
　set（他動詞）：置く・セットする　set - set - set
　　I set the alarm for six.

★ ポイント：うしろに目的語があるかどうかで選ぶ。目的語があれば他動詞（raise, lay, set）、なければ自動詞（rise, lie, sit）。日本語の訳よりも文の形で判断するほうが確実である。`,
      },
      {
        heading: '総合練習：文型と動詞の性質',
        body: `この単元で学んだことを合わせて確認する。文型の判断は、動詞の性質を知っていることが前提になる。

■ 手順のまとめ
①修飾語M（前置詞のかたまり・副詞・時を表す語句）を外す。
②残った骨組みで、動詞のうしろに何があるか数える。
③何もなければ第1文型。
④1つで、主語とイコールなら第2文型、イコールでなければ第3文型。
⑤2つで、その2つがイコールなら第5文型、イコールでなければ第4文型。

■ 確認してみる
　The sun rises in the east.
　　→ in the east はM。The sun rises だけ → 第1文型
　He raised his hand.
　　→ his hand が O → 第3文型
　She laid the baby on the bed.
　　→ the baby が O、on the bed はM → 第3文型
　The news made us happy.
　　→ us ＝ happy → 第5文型
　My father gave me a watch.
　　→ me ≠ a watch → 第4文型

■ 自動詞は第1・第2文型、他動詞は第3・第4・第5文型を作る
自動詞は目的語をとらないので、O が入る文型は作れない。動詞の性質と文型はこのようにつながっている。

⚠ 注意：lie の過去形は lay で、他動詞 lay の原形と同じつづりになる。He lay on the grass.（彼は草の上に横になった）は自動詞 lie の過去形。目的語があるかどうかで、どちらの語か判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語を選びなさい。The sun (rises / raises) in the east.',
        wrongAnswer: 'raises',
        trapExplanation: 'rise と raise はつづりが似ているうえ、どちらも「あがる」と訳せるため区別できていない。うしろに目的語がないことを確認していない。',
        correctAnswer: 'rises',
        correctExplanation: 'in the east は前置詞のかたまりでMなので、目的語がない。目的語をとらない自動詞 rise を使い The sun rises in the east. とする。raise は他動詞なので He raised his hand. のように目的語が必要である。',
      },
      {
        question: '「彼は質問するために手をあげた」を英語にしなさい。',
        wrongAnswer: 'He rose his hand to ask a question.',
        trapExplanation: 'rise の過去形 rose を覚えていることで、かえって「あげた」に当てはめてしまう。his hand という目的語があるのに、自動詞を選んでいる点に気づいていない。',
        correctAnswer: 'He raised his hand to ask a question.',
        correctExplanation: 'his hand という目的語があるので他動詞 raise を使い、過去形は raised。rise は目的語をとらない自動詞で、The sun rose.（太陽がのぼった）のように使う。目的語の有無で選ぶ。',
      },
    ],
  },
];
