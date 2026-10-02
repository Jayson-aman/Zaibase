import type { Lesson } from './lesson-types';

// 高校受験 英語：問題集に対して教科書の単元が足りなかった分野を足す（TAG=gke）。
export const GAP_GKE_LESSONS: Lesson[] = [
  {
    id: 'gap_gke_01',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中1',
    order: 20900,
    targetLevel: 'kiso',
    title: 'Why と Because：理由のたずね方と答え方',
    description: 'Why の疑問文の語順、Because のあとに続く形、because of との使い分け、because と so の向きをまとめて身につける',
    intro: '「どうして遅れたの？」「バスに乗りおくれたから。」――日常でいちばん多いやりとりのひとつが、理由をたずねて理由を答える会話です。日本語なら「〜から」で済むところが、英語では Why・Because・because of・so と形が分かれます。つまずく場所はほぼ決まっているので、ここで根っこから整理しましょう。',
    keyPoints: [
      'Why は「なぜ・どうして」と理由をたずねる疑問詞。文の先頭に置き、あとは普通の疑問文の語順（do／does／did、または be動詞）になる。',
      '答えは Because ＋ 主語 ＋ 動詞。because は接続詞なので、あとに文（S＋V）が続く。',
      'Why の質問への答えなら、Because I like it. のように because 節だけで答えてよい。',
      '名詞だけを続けるときは because of ＋ 名詞（because of the rain）。of が付くと前置詞のかたまりになる。',
      '理由の前に because、結果の前に so を置く。同じ内容を、どちらから言うかで使い分ける。',
      'because 節を文の前に出すときは、あとにコンマを打つ。',
      'Why don\'t you ～? は理由をたずねる文ではなく、「～してはどうですか」という提案である。',
    ],
    sections: [
      {
        heading: 'Why と Because の組み立て',
        body: `「どうして遅れたの？」「バスに乗りおくれたから。」――理由をたずねて理由を答えるやりとりは、英語では Why と Because が組になる。

■ たずねる側：Why ＋ 疑問文の語順
Why do you like summer?（なぜ夏が好きなのですか）
Why is he absent today?（なぜ彼は今日欠席なのですか）
Why did you go to the library?（なぜ図書館へ行ったのですか）
Why は疑問詞なので文の先頭に置く。そのうしろは、一般動詞なら do／does／did、be動詞なら is／are／was／were を使った普通の疑問文の語順になる。

■ 答える側：Because ＋ 主語 ＋ 動詞
Why do you like summer? — Because I like swimming.（泳ぐのが好きだから）
Why is he absent today? — Because he has a cold.（かぜをひいているから）
Why did you go to the library? — Because I wanted to read some books.（本を読みたかったから）
because は「～なので・～だから」という意味の接続詞で、あとには必ず〈主語＋動詞〉の完全な文が続く。

★ ここがポイント：**Why? には Because ＋ 文で答える**。**Because のあとは「主語＋動詞」**が来るので、Because the bus. のように名詞だけを置くことはできない。

■ 短く答えてよい場面
Why の質問に答えるときだけは、Because I like it. のように because 節だけで会話が成り立つ。ふつうの文章では because 節だけを単独で書かないが、質問への答えは例外と覚えておく。`,
      },
      {
        heading: 'なぜ because のあとは文なのか、なぜ名詞には of が要るのか',
        body: `■ because は「文と文をつなぐ語」
I went to bed early.（早く寝た）← なぜ？ → I was tired.（疲れていた）
理由を言うには、「早く寝た」という文に「疲れていた」という文をつなぐ必要がある。文と文をつなぐ働きをするのが接続詞で、because はその仲間である。つなぐ相手が文なので、because のあとは〈主語＋動詞〉になる。
I went to bed early because I was tired.（疲れていたので早く寝た）

■ 名詞をつなぎたいときは because of
Because the rain. のように名詞だけでは文にならない。名詞を理由にするときは、前置詞の働きをする because of を使う。
We stayed home because of the rain.（雨のために家にいた）
= We stayed home because it was raining.
because of は前置詞のかたまりなので、あとは名詞（または代名詞・動名詞）。because は接続詞なので、あとは文。この対応を押さえれば間違えない。

■ 原因と結果は、because と so で向きが逆になる
I was tired, so I went to bed early.（疲れていた → だから早く寝た：原因が先）
I went to bed early because I was tired.（早く寝た ← なぜなら疲れていた：結果が先）
because は「理由」の前、so は「結果」の前に置く。同じ内容を、どちらから先に言うかで使い分けているだけである。

★ ここがポイント：**because ＋ 文／because of ＋ 名詞**。そして**because は理由の前、so は結果の前**に置く。

■ because 節を文の前に出すとき
Because I was tired, I went to bed early.
前に出したときは、because 節の終わりにコンマを打つ。後ろに置くときはコンマは要らない。`,
      },
      {
        heading: '例題：理由の文を作る',
        body: `【例題1】「なぜあなたは英語が好きなのですか。」とたずね、「楽しいからです。」と答える英文を書く。
・たずねる：理由をたずねるので Why。「好きだ」は一般動詞 like で、主語が you なので do を使う。→ Why do you like English?
・答える：「楽しいから」は〈Because ＋ 主語＋動詞〉。主語は English を指す it、状態は is fun。→ Because it is fun.
・検算：Why のあとが do you ～（疑問文の語順）、because のあとが it is（主語＋動詞）。どちらも合っている。

【例題2】並べかえ：( is / why / absent / he / ? )
・疑問詞 Why を先頭に置く → be動詞 is → 主語 he → absent。
・答え：Why is he absent?

【例題3】2文を because を使って1文にする。I was tired. I went to bed early.
・原因は「疲れていた」、結果は「早く寝た」。because の前に結果、あとに原因を置く。
・答え：I went to bed early because I was tired.
・so を使うなら、結果の前に so：I was tired, so I went to bed early.

【例題4】（　）に入る語を答える。Why are you studying so hard? — （　）I have a test tomorrow.
・I have a test tomorrow. は主語と動詞のそろった文で、理由を表している。理由の前に置く接続詞は because。
・答え：Because

★ ここがポイント：例題はどれも、**Why のあとは疑問文の語順**、**Because のあとは主語＋動詞**の2点で解ける。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `Why や because の入った英文を書いたら、次の4つを順にチェックする。

①Why のうしろは疑問文の語順か。Why you like ～ は × で、Why do you like ～ が ○。
②because のうしろに主語と動詞があるか。Because the rain は名詞だけなので ×。直すなら because it rained か because of the rain。
③原因と結果の向きは合っているか。「疲れた。だから寝た」なら、so は「寝た」の前に置く。because は「疲れた」の前に置く。
④Why don't you ～? に Because で答えていないか。これは「～してはどうですか」という誘いである。Why don't you join us?（いっしょにどう？）には、Sure. や Sorry, I can't. と答える。

★ ここがポイント：書き終えたら**「Why のあとは疑問文の語順」「because のあとは主語＋動詞」**の2か所を、必ず声に出して確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: 'Why are you late? に対する答えとして正しいものを選びなさい。\n① Because the bus.\n② Because the bus was late.\n③ Because of the bus was late.',
        wrongAnswer: '① Because the bus.',
        trapExplanation: '日本語の「バスだから」に引きずられて、名詞だけを because のあとに置いてしまう。because は接続詞なので、あとには文が必要である。',
        correctAnswer: '② Because the bus was late.',
        correctExplanation: 'because のあとには〈主語＋動詞〉が必要。the bus（主語）と was late（動詞）がそろった②が正しい。③は of が付いているので、あとに文は置けない。名詞で言うなら Because of the delay.（遅れのために）のようにする。',
      },
      {
        question: 'Why don\'t you join our club? に対する答えとして最も適切なものを選びなさい。\n① Because I like music.\n② Sure. I\'d love to.',
        wrongAnswer: '① Because I like music.',
        trapExplanation: 'Why で始まる文なので、反射的に Because で答えてしまう。しかし Why don\'t you ～? は理由をたずねる文ではなく、「～してはどうですか」という誘いである。',
        correctAnswer: '② Sure. I\'d love to.',
        correctExplanation: '誘いには、承諾（Sure. I\'d love to.）か、断り（Sorry, I can\'t.）で答える。断るときに、あとから Because I\'m busy. と理由を添えるのはよい。',
      },
    ],
  },
  {
    id: 'gap_gke_02',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中1',
    order: 20901,
    targetLevel: 'kiso',
    title: '職業と町の場所：What do you do? と What are you doing? のちがい',
    description: '職業名と町の施設の英語、職業をたずねる What do you do? と、いまの動作をたずねる What are you doing? を区別する',
    intro: '「お父さんは何をしている人？」と聞きたいとき、What is your father doing? と言ってしまう人がとても多い。これは「お父さんは今、何をしているところ？」という意味になってしまう。職業と町の場所の言い方を整理しながら、現在形と進行形が聞いている内容のちがいをはっきりさせよう。',
    keyPoints: [
      '職業は〈be動詞 ＋ a／an ＋ 職業名〉。母音の音で始まる語には an を付ける（a doctor、an artist、an engineer）。',
      '「職業は何ですか」は What do you do?／What does she do?（現在形）。ふだんの行いの積み重ねをたずねる。',
      '「いま何をしているところですか」は What are you doing?（現在進行形）。いまこの瞬間の動作をたずねる。',
      '主語が三人称単数なら does を使い、そのあとの動詞は原形。答えの動詞には -s が付く（She works at a bank.）。',
      '将来の夢は What do you want to be? — I want to be a doctor.',
      '「～で働く」は work at（地点としての場所）／work in（建物や町の中）／work for（会社・組織）。',
      'police officer・firefighter は男女どちらにも使える言い方。',
    ],
    sections: [
      {
        heading: '職業のたずね方・答え方と、町の場所',
        body: `■ 職業をたずねる・答える
What do you do? — I'm a teacher.（あなたの職業は？ — 教師です）
What does your father do? — He's a doctor.（お父さんの職業は？ — 医者です）
How about you? — I'm a student.
答えるときは、〈主語＋be動詞＋a／an＋職業名〉を使う。

■ 職業の語（a と an に注意）
teacher（教師）、doctor（医者）、nurse（看護師）、dentist（歯科医）、farmer（農家）、cook（料理人）、pilot（パイロット）、singer（歌手）、vet（獣医）、bus driver（バスの運転手）、police officer（警察官）、firefighter（消防士）
an artist（芸術家）、an engineer（技術者）のように、母音の音で始まる語には an を付ける。

■ 町の場所の語
library（図書館）、hospital（病院）、post office（郵便局）、bank（銀行）、station（駅）、supermarket（スーパーマーケット）、bookstore（書店）、bakery（パン屋）、museum（博物館）、city hall（市役所）、restaurant（レストラン）、airport（空港）

■ 職業と場所をむすぶ文
A nurse works at a hospital.（看護師は病院で働く）
A teacher works at a school.（教師は学校で働く）
A pilot works at an airport.（パイロットは空港で働く）
A farmer works on a farm.（農家は農場で働く）

★ ここがポイント：**職業を聞くときは What do you do?**。答えは**〈I'm a ＋職業名〉**で、「～で働く」は work と場所の語を組み合わせる。`,
      },
      {
        heading: 'なぜ What do you do? は職業で、What are you doing? はいまの動作なのか',
        body: `■ 現在形は「くり返し」、進行形は「いま」
現在形は、習慣・くり返し・いつも変わらないことを表す。毎日毎週くり返される行いの積み重ねが、その人の職業になる。だから職業をたずねる What do you do? は現在形になる。
進行形は、いま目の前で進んでいる動作を表す。What are you doing? は「いま、何をしているところ？」という意味になる。

■ What do you do? の do はなぜ2つあるのか
What do you do? の1つ目の do は疑問文をつくる助動詞、2つ目の do は「する」という意味の一般動詞である。「あなたは何を（what）、ふだん、する（do）のですか」と直訳できる。

■ 日本語の「何をしていますか」にだまされない
日本語では、職業をたずねるときも、いまの動作をたずねるときも「何をしていますか」と言える。英語は時間の幅で形を分ける。
What does your sister do? — She's a pianist.（職業）
What is your sister doing? — She's practicing the piano.（いまの動作）

■ 三人称単数のとき
主語が he／she／your mother のときは does を使い、本動詞の do は原形のまま。× What does he does? は誤り。答えの文の動詞には -s が付く。She works at a bank.

★ ここがポイント：**現在形＝職業・習慣、進行形＝いま**。**does のあとの動詞は原形**、答えの動詞には s が付く。`,
      },
      {
        heading: '例題：職業と場所を英語で言う',
        body: `【例題1】「あなたのお母さんの職業は何ですか。」を英語にする。
・職業をたずねるので What ～ do?。主語は your mother（三人称単数）なので does を使い、動詞は原形の do。
・答え：What does your mother do?

【例題2】「彼女は看護師です。病院で働いています。」を英語にする。
・「看護師です」→ She is a nurse.（nurse は子音の音で始まるので a）
・「病院で働いています」→ 主語が she なので work に s を付けて、She works at a hospital.
・答え：She is a nurse. She works at a hospital.

【例題3】電話で A：What are you doing? B：I'm cooking dinner. の意味を答える。
・進行形（are doing）なので、いまの動作をたずねている。
・答え：A「いま何をしているの？」B「夕食を作っているところだよ」

【例題4】（　）に入る語を答える。A：What（　）your brother do? B：He's an engineer.
・主語 your brother は三人称単数なので does。答え：does
・答えの文の engineer は母音の音で始まるので an になっている点も確かめる。

★ ここがポイント：**do／does の質問は職業**、**be動詞＋ing の質問はいまの動作**。三人称単数なら **does ＋ 原形**になる。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `職業や場所の英文を作ったら、次の5点を順に確認する。

①質問の形：do／does なら職業・習慣、be動詞＋ing なら、いまの動作。聞かれている内容と答えの内容が合っているか。
②答えの形：職業を聞かれたら I'm a ～.（または I work at ～.）で答えているか。I'm cooking. では、いまの動作の答えになってしまう。
③a と an：職業名の最初の音が母音なら an。つづりではなく音で決める。
④三人称単数：does のあとは原形、答えの動詞には s（works、teaches）。
⑤場所の前置詞：地点としての建物は at、会社や組織は for を使う。

★ ここがポイント：質問が**do／does なら職業**、**are／is＋ing ならいま**。この2つの形を見るだけで、答えの種類が決まる。`,
      },
    ],
    trapExamples: [
      {
        question: 'A：What does your sister do?\nB：（　）\n① She is cooking now.\n② She is a pianist.',
        wrongAnswer: '① She is cooking now.',
        trapExplanation: '日本語の「何をしているの？」で考えてしまい、いまの動作を答えにしている。What does ～ do? は職業をたずねる形である。',
        correctAnswer: '② She is a pianist.',
        correctExplanation: 'does ～ do の現在形は、ふだんの行いの積み重ね、つまり職業をたずねている。いまの動作をたずねるなら What is your sister doing? になる。',
      },
      {
        question: '「彼の職業は何ですか。」を英語にしたとき、正しいものを選びなさい。\n① What does he does?\n② What does he do?',
        wrongAnswer: '① What does he does?',
        trapExplanation: '主語が he なので、本動詞にも s を付けたくなる。しかし does の中にすでに三人称単数の s がある。',
        correctAnswer: '② What does he do?',
        correctExplanation: '疑問文では、does が三人称単数の s を引き受けるので、本動詞の do は原形に戻る。does ＋ 原形が決まりである。',
      },
    ],
  },
  {
    id: 'gap_gke_03',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中2',
    order: 20902,
    targetLevel: 'kiso',
    title: '句動詞①：動詞＋副詞（pick up・put on）と目的語の位置',
    description: '動詞に up・off・on などの副詞が付いて意味が決まる句動詞の意味のイメージと、代名詞のときの語順を身につける',
    intro: 'pick up は「拾う」、put on は「身につける」、turn off は「消す」。動詞のあとに小さな語がくっついて、新しい意味になる表現はとても多い。しかも「それを拾う」は pick up it ではなく pick it up と、語順まで変わる。意味と語順を、小さな語のイメージから理解しよう。',
    keyPoints: [
      '句動詞とは、動詞に副詞（up・off・on・out・down・back・away など）が付いて、ひとまとまりの意味になる表現のこと。',
      'up は「上へ・完全に」、off は「離れて」、on は「くっついて・作動して」、out は「外へ・なくなって」というイメージで意味がつかめる。',
      '目的語がいらないタイプ：get up（起きる）、sit down（すわる）、come back（戻る）、grow up（成長する）。',
      '目的語が名詞のとき：動詞＋副詞＋名詞、動詞＋名詞＋副詞のどちらでもよい（pick up the pen／pick the pen up）。',
      '目的語が代名詞（it・them・him・her など）のときは、必ず動詞と副詞の間に入れる（pick it up。× pick up it）。',
      'put on は「着る動作」、wear は「着ている状態」。いまの状態を言うなら wearing。',
      '目的語が長いときは、副詞のあとに回したほうが読みやすい。',
    ],
    sections: [
      {
        heading: '句動詞のしくみ：動詞＋副詞でひとつの意味になる',
        body: `■ 句動詞とは
動詞のあとに、up・off・on・out・down・back・away などの副詞が付いて、ひとまとまりの意味になるものを句動詞という。
pick up（拾う・車で迎えに行く）、put on（身につける）、take off（脱ぐ・離陸する）、turn on（つける）、turn off（消す）、throw away（捨てる）、write down（書きとめる）、give back（返す）、put away（片づける）、find out（見つけ出す・調べてわかる）、give up（あきらめる）

■ 目的語がいらないタイプ
get up（起きる）、sit down（すわる）、stand up（立ち上がる）、come back（戻る）、grow up（成長する）、wake up（目をさます）
例）I get up at six every day.（私は毎日6時に起きる）

■ 目的語が必要なタイプの語順
目的語が名詞のとき、2通りの置き方がある。
Please pick up the pen. ＝ Please pick the pen up.
Turn off the light. ＝ Turn the light off.
目的語が代名詞（it・them・him・her・me など）のときは、動詞と副詞の間に入れる。
○ Please pick it up.　× Please pick up it.
○ Turn them off.　× Turn off them.

★ ここがポイント：**名詞なら動詞の後ろでも間でもよい**が、**代名詞は必ず「動詞と副詞の間」**に入れる。`,
      },
      {
        heading: 'なぜ小さな語で意味が変わるのか、なぜ代名詞は間に入るのか',
        body: `■ 小さな語は「向きのイメージ」を持っている
up は上へ向かう動き。pick up は手でつまんで上に持ち上げるから「拾う」になる。off は「離れる」イメージ。take off は、体にくっついていたものを離すから「脱ぐ」、地面から離れるから「離陸する」。turn off はスイッチが電気から離れるから「消す」。on は「くっつく・作動する」イメージ。put on は体にくっつける、turn on は電気にくっつけて作動させる、と考える。out は「外へ・なくなる」のイメージ。find out は、隠れていたことが外に出て、わかることを表す。
このイメージを持っておけば、初めて見る組み合わせでも意味の見当がつく。

■ なぜ代名詞は間に入るのか
it・them・him のような代名詞は、すでに話題に出た短い語である。英語では、わかりきった内容を弱く短く言い、新しい意味を持つ強い語（副詞の up・off など）を文の後ろ側に置く傾向がある。そのため代名詞は動詞のすぐ後ろに入り、副詞が後ろに残る。名詞が目的語のときは、情報としてはじめて出てくるので、副詞の前にも後ろにも置ける。目的語が長いときも、副詞のあとに置くほうが読みやすい。

■ put on と wear のちがい
put on は「身につける動作」、wear は「身につけている状態」を表す。
Put on your coat. It's cold.（コートを着なさい。寒いよ）
She is wearing a red cap.（彼女は赤いぼうしをかぶっている）
「～を着ている」という状態を言いたいときに put on を使うのは、よくある誤りである。

★ ここがポイント：**副詞は向きのイメージ**（up＝上へ、off＝離れる、on＝くっつく）。**代名詞は動詞と副詞の間**。**動作は put on、状態は wear**。`,
      },
      {
        heading: '例題：語順と意味をたしかめる',
        body: `【例題1】「その本を拾ってください。」を英語にする。
・「拾う」は pick up。「その本」は名詞なので、Please pick up the book. と Please pick the book up. のどちらでもよい。
・「それを拾ってください」と代名詞にするなら、Please pick it up.

【例題2】次の文の誤りを直す。I'll pick up it at the station.
・it は代名詞なので、動詞と副詞の間に入れる。
・答え：I'll pick it up at the station.

【例題3】（　）に入る語を答える。It's dark in this room. Please（　）the light.
・暗いので、電気を「つける」。「つける」は turn on。「消す」の turn off ではない。
・答え：turn on

【例題4】She put on her new coat. の her new coat を代名詞に変える。
・her new coat は名詞のかたまりなので、代名詞 it に言いかえる。代名詞は間に入れる。
・答え：She put it on.

【例題5】（　）に入る形を選ぶ。He（　）a jacket when I met him. ①put on ②was wearing
・出会ったときに着ていた「状態」を言っているので wear を使う。過去の状態なので was wearing。
・答え：②

★ ここがポイント：**代名詞は動詞と副詞の間**に入れ、**着ている状態は wear** で言う。この2点で例題はすべて解ける。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `句動詞の英文を書いたら、次の4点を順に確かめる。

①目的語がいるか：get up や sit down のように、目的語を取らないタイプなのか。目的語を取るタイプなのか。
②目的語が代名詞か：it・them・him・her・me・us なら、動詞と副詞の間に入っているか。
③副詞のイメージと日本語が合うか：on と off、up と down のように反対のイメージを取りちがえていないか。「つける」は turn on、「消す」は turn off。
④動作か状態か：「着る」の動作は put on、「着ている」の状態は wear（進行形で wearing）。

★ ここがポイント：**代名詞が来たら、まず間に入れる**。これだけで語順のミスはほとんど防げる。`,
      },
    ],
    trapExamples: [
      {
        question: '「その本を拾ってください。」の英文として正しいものを選びなさい。\n① Please pick up it.\n② Please pick it up.',
        wrongAnswer: '① Please pick up it.',
        trapExplanation: '「pick up ＋ 目的語」という並びで覚えていると、代名詞も後ろに置いてしまう。',
        correctAnswer: '② Please pick it up.',
        correctExplanation: '目的語が代名詞（it）のときは、動詞と副詞の間に入れる。名詞の the book なら pick up the book でも pick the book up でもよい。',
      },
      {
        question: '（　）に入る語句を選びなさい。\nThe girl（　）a red cap is my sister.\n① putting on\n② wearing',
        wrongAnswer: '① putting on',
        trapExplanation: '日本語の「かぶっている」を、「着る・かぶる」の動作の言葉と結びつけてしまう。putting on は「かぶっているところ（動作の最中）」になり、状態を表さない。',
        correctAnswer: '② wearing',
        correctExplanation: '赤いぼうしをかぶっている「状態」を表すのは wear。a girl wearing a red cap（赤いぼうしをかぶっている女の子）のように、名詞を後ろから説明する形になる。',
      },
    ],
  },
  {
    id: 'gap_gke_04',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中2',
    order: 20903,
    targetLevel: 'kiso',
    title: '句動詞②：動詞＋前置詞と、3語の熟語（look for・get along with）',
    description: '前置詞が決める意味（look at／for／after）と、副詞型との見分け方、come up with などの3語の熟語をそろえる',
    intro: 'look at は「見る」、look for は「探す」、look after は「世話をする」。同じ look でも、後ろの小さな語で意味がまったく別になる。さらに get along with や run out of のように、3語でひとつの動詞のように働く熟語もある。副詞型との見分け方といっしょに、意味のイメージで整理しよう。',
    keyPoints: [
      '動詞＋前置詞は、あとに必ず目的語（名詞・代名詞）が来る。前置詞は目的語の前から動かない（look for it。× look it for）。',
      '前置詞の核のイメージが意味を決める：at＝一点に向ける、for＝求めて、after＝あとを追って、into＝中へ、up to＝上を見上げて。',
      'look at（見る）、look for（探す）、look after（世話をする）、wait for（待つ）、listen to（聞く）、talk about（話す）、ask for（求める）',
      '3語の熟語：get along with（仲よくやっていく）、come up with（思いつく）、run out of（使い果たす）、take care of（世話をする）、catch up with（追いつく）、put up with（がまんする）、look up to（尊敬する）',
      '日本語の「を」「に」にだまされない：wait for ～（～を待つ）、listen to ～（～を聞く）、look at ～（～を見る）に前置詞が必要。',
      '見分け方：代名詞を入れてみる。pick it up は間に入る（副詞型）、look for it は前置詞の前に出ない（前置詞型）。',
      'look forward to のあとの to は前置詞なので、うしろは名詞か動名詞（-ing）。',
    ],
    sections: [
      {
        heading: '動詞＋前置詞と3語の熟語',
        body: `■ 動詞＋前置詞
前置詞は、あとに続く名詞とセットになる語である。そのため、動詞＋前置詞の形では、目的語が前置詞のすぐ後ろに来る。
look at the board（黒板を見る）
look for my key（かぎを探す）
look after my little brother（弟の世話をする）
wait for the bus（バスを待つ）
listen to music（音楽を聞く）
talk about the plan（その計画について話す）
ask for help（助けを求める）
agree with you（あなたに賛成する）

■ 3語の熟語（動詞＋副詞＋前置詞）
get along with ～（～と仲よくやっていく）　Ken gets along with everyone.
come up with ～（～を思いつく）　She came up with a good idea.
run out of ～（～を使い果たす）　We ran out of milk.
take care of ～（～の世話をする・面倒を見る）　He takes care of the dog.
catch up with ～（～に追いつく）　I ran to catch up with him.
put up with ～（～をがまんする）　I can't put up with this noise.
look up to ～（～を尊敬する）　Everyone looks up to her.

■ 見分け方：代名詞を入れてみる
pick it up は代名詞が間に入る（副詞型）。look for it は、for が it の前から動かない（前置詞型）。× look it for とは言えない。

★ ここがポイント：**動詞＋前置詞は、前置詞のすぐ後ろに目的語**。3語の熟語は**まとまりを割らず**、最後の前置詞のあとに目的語を置く。`,
      },
      {
        heading: 'なぜ前置詞が意味を決めるのか、なぜ日本語にだまされるのか',
        body: `■ 前置詞のイメージが意味を決める
at は「一点に向ける」。look at は目をその一点に向けるから「見る」。
for は「求めて・向かって」。look for は、目当てのものを求めて目を動かすから「探す」。wait for は、来るものに気持ちを向けて待つ。
after は「あとを追って」。look after は、目を離さずに後を追うから「世話をする」。
up to は「上の人に向かって」。look up to は見上げるから「尊敬する」。
一つひとつを暗記するのではなく、前置詞の向きから意味を引き出せば、同じ動詞を使った別の熟語も区別できる。

■ 日本語の「を」「に」にだまされない
日本語では「～を待つ」「～を聞く」「～を見る」と、すべて「を」でつながる。そのため英語でも前置詞なしで動詞の直後に名詞を置いてしまう誤りが多い。
× I'm waiting you.　○ I'm waiting for you.
× She listens music.　○ She listens to music.
× Look the picture.　○ Look at the picture.
「待つ」「聞く」「見る」は、動作の向かう先を前置詞で示す動詞だと覚える。

■ look forward to のあとは -ing
look forward to ～ は「～を楽しみに待つ」。この to は不定詞の to ではなく前置詞の to なので、あとは名詞か動名詞になる。
I'm looking forward to seeing you.（あなたに会えるのを楽しみにしています）

★ ここがポイント：**前置詞のイメージが意味の核**（at＝一点、for＝求めて、after＝追って）。**「を」でつながる日本語に引きずられず、前置詞を落とさない**。`,
      },
      {
        heading: '例題：前置詞を選ぶ・熟語を完成させる',
        body: `【例題1】（　）に入る語を答える。I'm looking（　）my glasses. I can't find them.
・「探している」と「見つからない」の流れから、対象を求めて探している意味。
・答え：for（look for ～＝～を探す）

【例題2】「私は犬の世話をします。」を take care of を使って英語にする。
・take care of ～ は3語で「～の世話をする」。of のあとに目的語を置く。
・答え：I take care of my dog.（look after my dog でもよい）

【例題3】次の誤りを直す。I'm waiting you at the station.
・wait は「待つ」の対象を前置詞 for で示す。
・答え：I'm waiting for you at the station.

【例題4】（　）に入る語を答える。We ran out（　）sugar, so we went to the store.
・run out of ～＝～を使い果たす。砂糖がなくなって買いに行った流れに合う。
・答え：of

【例題5】（　）に入る形を選ぶ。I'm looking forward to（　）you. ①see ②seeing
・to が前置詞なので、うしろは動名詞。答え：②

★ ここがポイント：**前置詞を落とさない**こと、**3語の熟語はまとまりで覚える**こと。例題の誤りはどれもこの2点だった。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `動詞＋前置詞や熟語を使った英文は、次の4点で確かめる。

①前置詞が落ちていないか：wait・listen・look・talk・ask などの後ろに、対象を示す前置詞（for・to・at・about・for）が入っているか。
②前置詞の種類は合っているか：at＝見る、for＝探す、after＝世話、to＝聞く／尊敬、のようにイメージで確認する。
③3語の熟語を割っていないか：get along with は、with のあとに目的語。get along の途中に目的語を入れない。
④to のあとの形：look forward to ～ は前置詞の to なので、動詞を続けるなら -ing にする。

★ ここがポイント：**日本語を見たら「を・に」で終わらせず、「どこへ向かう動作か」を考える**。向かう先を示すのが前置詞である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。\nI\'m looking forward to see you.',
        wrongAnswer: 'I\'m looking forward to see you.（そのまま）',
        trapExplanation: 'to のあとに動詞の原形を置く不定詞と同じ形に見えるため、see でよいと思ってしまう。',
        correctAnswer: 'I\'m looking forward to seeing you.',
        correctExplanation: 'look forward to ～ の to は前置詞なので、うしろは名詞か動名詞（-ing）。「あなたに会うこと」を seeing you で表す。',
      },
      {
        question: '（　）に入る語を答えなさい。\nWe have to come up（　）a new plan.',
        wrongAnswer: 'for',
        trapExplanation: '「新しい計画を探す」のような日本語を連想して、look for の for を当てはめてしまう。',
        correctAnswer: 'with',
        correctExplanation: 'come up with ～ は「～を思いつく」という3語の熟語で、最後は with。「探す」の for と取りちがえやすいので、3語のかたまりごと覚える。',
      },
    ],
  },
  {
    id: 'gap_gke_05',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3前半',
    order: 20904,
    targetLevel: 'oyo',
    title: '関係代名詞 what①：「～するもの・こと」を作る what 節',
    description: 'the thing(s) that の働きを一語に含んだ関係代名詞 what の形と意味を、who・which・that との出発点のちがいから理解する',
    intro: 'I know what you want. は「あなたが欲しいものを知っている」。who や which と同じ関係代名詞なのに、what には前に置く名詞（先行詞）がない。なぜなのか。what は「もの・こと」という名詞の役目まで自分でかねている、特別な関係代名詞だからだ。形と意味の出発点から整理しよう。',
    keyPoints: [
      '関係代名詞 what ＝ the thing(s) that ～。「～するもの」「～すること」と訳す。',
      'what の前に先行詞（名詞）は置かない。what 自体に「もの・こと」の意味が入っているから。',
      '形は2つ：what ＋ 主語 ＋ 動詞（what you want）、what ＋ 動詞（what happened）。',
      'what のうしろは名詞が一つ欠けた形。欠けているのが目的語なら what ＋ S ＋ V、主語なら what ＋ V。',
      '先行詞があるときは which／that を使い、what は使わない（the book that I bought）。',
      'all・everything・anything などが先行詞のときは that を使う。what は付けない（Everything that he said）。',
      'what 節は名詞のかたまりで、全体が「～こと・もの」という一つの名詞として働く。',
    ],
    sections: [
      {
        heading: 'what の形と意味：the thing that をひとつにまとめた語',
        body: `■ what ＝ the thing(s) that
I know what you want.（私はあなたが欲しいものを知っている）
= I know the thing that you want.
what は、the thing that（～するもの）を一語にまとめたものである。だから「～するもの」「～すること」と訳す。

■ 形は2つ
①what ＋ 主語 ＋ 動詞（目的語が欠けた形）
This is what I bought yesterday.（これは私が昨日買ったものです）
Tell me what you saw.（あなたが見たことを教えて）
I can't believe what he said.（彼が言ったことが信じられない）

②what ＋ 動詞（主語が欠けた形）
What happened?（何が起きたのですか）
I don't know what is in the box.（箱の中に何があるのか知らない）
What is important is to try.（大切なのは、やってみることだ）

■ what 節は名詞のかたまり
What I need is time.（私に必要なのは時間です）
what I need の全体が「私に必要なもの」という一つの名詞になり、文の主語として働いている。

★ ここがポイント：**what ＝ the thing(s) that**。**前に名詞を置かず**、**「～もの」「～こと」と訳す**。`,
      },
      {
        heading: 'なぜ what には先行詞がないのか、なぜ that や which と入れかえられないのか',
        body: `■ 先行詞を自分の中に持っているから
who・which・that は、前の名詞（先行詞）を説明するために、その名詞を指す代名詞として働く。
the book which I bought（私が買った本）：book が先行詞で、which はそれを指す。
what は、the thing（もの）という先行詞の役目を自分でかねている。だから前に名詞を置く必要がない。
I know the thing that you want. → I know what you want. と、the thing that が what にまとまるのである。

■ 先行詞があると what は使えない
× This is the book what I bought.　○ This is the book that I bought.
先行詞 the book があるときは、すでに「もの」の部分が決まっているので、what を足すと「もの」が二重になってしまう。

■ all・everything があるときも that
× Everything what he said was true.　○ Everything that he said was true.（彼が言ったことはすべて本当だった）
Everything・all・anything は先行詞の役目を持つ名詞なので、that を使う。what は使わない。

■ 見分け方の手順
①直前に先行詞になる名詞があるか。→ あれば who／which／that。
②先行詞がなくて、「～もの・～こと」と訳せるか。→ what。
③what のあとの文に、名詞が一つ欠けているか。→ 欠けていれば what が正しい。

★ ここがポイント：**先行詞がある→ which／that、先行詞がない→ what**。**the thing(s) that に置きかえて意味が通るか**を確かめる。`,
      },
      {
        heading: '例題：what を使った文を作る',
        body: `【例題1】（　）に入る語を答える。The thing that I want is a new bike. = （　）I want is a new bike.
・The thing that を一語にまとめるので what。文頭なので大文字。
・答え：What

【例題2】「私は彼が言ったことが信じられません。」を英語にする。
・「彼が言ったこと」＝ the thing that he said ＝ what he said。
・「信じられない」は can't believe。
・答え：I can't believe what he said.

【例題3】「これは私が昨日買ったものです。」を英語にする。
・「私が昨日買ったもの」＝ what I bought yesterday。
・答え：This is what I bought yesterday.

【例題4】並べかえ：( is / I / what / need / time )
・「私に必要なもの」＝ what I need が主語。「は」にあたる is のあとに time を置く。
・答え：What I need is time.（Time is what I need. でもよい）
・検算：what I need は動詞 need の目的語が欠けた形になっている。

★ ここがポイント：**先行詞がなければ what**。迷ったら**the thing that に言いかえて意味が通るか**を確かめる。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `what を使った英文は、次の4つで確かめる。

①what の前に名詞が置かれていないか。名詞があるなら what ではなく which／that に直す。
②what のうしろの文に、名詞が一つ欠けているか。I know what you want. は want の目的語が欠けている。欠けていなければ what ではない。
③the thing(s) that に置きかえても意味が通るか。I can't believe the thing that he said. となれば OK。
④all・everything・anything のあとが what になっていないか。この3語のあとは that。

★ ここがポイント：書いたあとに**「the thing that に言いかえて、意味が通るか」**を確かめる。通れば what、通らなければ別の語を探す。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。\nThis is the book（　）I bought yesterday.\n① what\n② that',
        wrongAnswer: '① what',
        trapExplanation: '「私が買ったもの」という日本語から what を選んでしまう。しかしこの文には、すでに先行詞 the book がある。',
        correctAnswer: '② that',
        correctExplanation: '先行詞（the book）があるので、that（または which）を使う。what を使うと「もの」が二重になる。先行詞を取るなら、This is what I bought yesterday.（これは私が昨日買ったものです）となる。',
      },
      {
        question: '（　）に入る語を選びなさい。\nEverything（　）he said was true.\n① what\n② that',
        wrongAnswer: '① what',
        trapExplanation: '「彼が言ったこと」という訳から what を選びたくなる。しかし everything が「もの」の部分をすでに表している。',
        correctAnswer: '② that',
        correctExplanation: 'everything・all・anything は先行詞の役目をする。先行詞のあとに来る関係代名詞は that を使う。',
      },
    ],
  },
  {
    id: 'gap_gke_06',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3前半',
    order: 20905,
    targetLevel: 'oyo',
    title: '関係代名詞 what②：what 節の働きと、疑問詞 what・which／that との見分け',
    description: 'what 節が主語・目的語・補語・前置詞の目的語になるしくみ、疑問詞の what との見分け、what we call などの決まり文句をまとめる',
    intro: 'What he said surprised me. の what he said は主語、Listen to what I say. の what I say は前置詞の目的語。what 節はいろいろな場所に入る名詞のかたまりだ。さらに I know what he wants. が「何を欲しがるか」なのか「欲しがるもの」なのか、疑問詞との見分け方もここで整理しよう。',
    keyPoints: [
      'what 節は名詞のかたまりなので、主語・目的語・補語・前置詞の目的語になれる。',
      '主語：What he said surprised me.／目的語：Show me what you have.／補語：That is what I wanted to say.／前置詞の目的語：Listen to what I say.',
      'what 節の中で前置詞が最後に残る：I don\'t understand what he is talking about.（前置詞を落とさない）',
      '疑問詞の what（何を～か）と関係代名詞の what（～もの・こと）は、形が同じ。訳し分けて自然なほうを選ぶ。',
      'what we call ～／what is called ～ は「いわゆる～」という決まった言い方。',
      '関係代名詞 that は名詞の後ろにつくだけで、先行詞のない場所には使えない（× I can\'t believe that he said.）。',
      'what 節は全体で名詞なので、主語になるときは単数扱いが基本（What I need is time.）。',
    ],
    sections: [
      {
        heading: 'what 節が入る4つの場所',
        body: `what 節は「～もの・～こと」という一つの名詞のかたまりである。名詞が入れる場所には、どこにでも入る。

■ ①主語
What he said surprised me.（彼が言ったことは私を驚かせた）
What is important is to try.（大切なのは、やってみることだ）

■ ②動詞の目的語
Show me what you have in your hand.（手に持っているものを見せて）
I can't believe what he said.（彼が言ったことが信じられない）

■ ③補語（be動詞のあと）
That is what I wanted to say.（それこそ私が言いたかったことだ）
This is what I need.（これが私に必要なものだ）

■ ④前置詞の目的語
She is interested in what he wrote.（彼女は彼が書いたものに興味がある）
Listen to what I say.（私の言うことを聞きなさい）

■ 前置詞が最後に残る形
I don't understand what he is talking about.（彼が話していることがわからない）
what 節の中に前置詞が入るときは、about を落とさず文末に残す。

★ ここがポイント：**what 節は名詞のかたまり**。主語にも目的語にも補語にも、**前置詞のあとにも**入る。前置詞は**落とさずに残す**。`,
      },
      {
        heading: 'なぜ名詞の場所に入れるのか、疑問詞の what とはどうちがうのか',
        body: `■ what 節が名詞のかたまりになる理由
what は節の中では、欠けた名詞（目的語や主語）の役をする関係代名詞。同時に、what 自体が「もの・こと」という名詞の意味を持つので、what ＋ 文の全体が一つの名詞のかたまりになる。二重の働きがあるから、主語・目的語・補語のどこにでも置ける。

■ 関係代名詞の what と、疑問詞の what
what he wants という形は、2通りに読める。
①疑問詞（間接疑問）：I don't know what he wants.（彼が何をほしがっているか知らない）
②関係代名詞：I'll buy what he wants.（彼がほしがっているものを買う）
見分け方は訳し方で決める。「何を～か」と読んで自然なら疑問詞、「～もの・～こと」と読んで自然なら関係代名詞。know・ask・wonder・tell のように「知る・たずねる」動詞のあとは疑問詞で読むことが多く、buy・show・take などの動作を表す動詞のあとは、関係代名詞で読むことが多い。両方で読める文もあり、入試の和訳ではどちらも認められる。

■ what we call ～／what is called ～
He is what we call a walking dictionary.（彼はいわゆる生き字引だ）
what we call ～ と what is called ～ は、どちらも「いわゆる～」という決まった言い方。

■ that では代用できない
× I can't believe that he said.　○ I can't believe what he said.
関係代名詞の that は、前の名詞（先行詞）を説明するときだけに使う。先行詞のない場所に that を置くことはできない。

★ ここがポイント：**what 節は「名詞が欠けた文」＋「名詞の意味」の二重の働き**。**疑問詞か関係代名詞かは、訳して自然なほうで決める**。

■ 単数扱い
what 節が主語のときは、単数として扱うのが基本である。What I need is time.（is を使う）`,
      },
      {
        heading: '例題：what 節を使いこなす',
        body: `【例題1】「彼女が言ったことは本当です。」を英語にする。
・「彼女が言ったこと」＝ what she said。これが主語になる。
・主語が what 節（単数扱い）なので、is true。
・答え：What she said is true.

【例題2】（　）に入る語を答える。I don't understand（　）he is talking about.
・「彼が話していること」の「こと」を表す名詞が欠けている。最後に about が残っているので、about の目的語が欠けた形である。
・答え：what

【例題3】「私が欲しいのはこの赤いかばんです。」を英語にする。
・「私が欲しいもの」＝ what I want を主語にして、「は」にあたる is を置く。
・答え：What I want is this red bag.（This red bag is what I want. でもよい）

【例題4】次の下線部が疑問詞か関係代名詞かを答える。
①Do you know what he bought?　②I'll show you what I bought.
・①は know のあとで「彼が何を買ったか」とたずねる意味なので、疑問詞（間接疑問）。
・②は「私が買ったものを見せる」の意味なので、関係代名詞。
・答え：①疑問詞　②関係代名詞

【例題5】「彼はいわゆる生き字引だ。」を英語にする。
・「いわゆる」は what we call。「生き字引」は a walking dictionary。
・答え：He is what we call a walking dictionary.

★ ここがポイント：**what 節は名詞のかたまり**で、中の**前置詞は節の最後に残す**。この2点を例題で確かめた。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `what 節の入った英文は、次の4点で確かめる。

①what 節は名詞の場所に入っているか。主語・目的語・補語・前置詞のあと、のどれかになっているか。
②前置詞が落ちていないか。talking about、looking for、listening to など、動詞と前置詞のセットが節の中にあるとき、前置詞が文末に残っているか。
③単数扱いになっているか。What I need is time. のように、主語の what 節には is／was を使う。
④訳したときに「～もの」「～こと」で自然か。「何を～か」になるなら疑問詞の what の可能性がある。文脈を見て訳し分ける。

★ ここがポイント：what 節に迷ったら**「名詞が一つ欠けているか」「前置詞が残っているか」**の2点を見る。この2点がそろっていれば、形は正しい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。\nI don\'t understand what he is talking.',
        wrongAnswer: 'I don\'t understand what he is talking.（そのまま）',
        trapExplanation: 'what が目的語の役をするので、前置詞はいらないと考えてしまう。しかし talk は「～について話す」で about を必要とする。',
        correctAnswer: 'I don\'t understand what he is talking about.',
        correctExplanation: 'talk about ～ の about の目的語が what なので、about は節の最後に残る。what が前に出ても、前置詞は落とさずに文末に置く。',
      },
      {
        question: '（　）に入る語を選びなさい。\nI can\'t believe（　）he said.\n① that\n② what',
        wrongAnswer: '① that',
        trapExplanation: '「信じられない（that ～ということ）」と考えて、that節にしてしまう。しかし said の目的語が欠けている。',
        correctAnswer: '② what',
        correctExplanation: 'he said のあとには目的語がなく、名詞が欠けている。欠けた名詞の役と「こと」の意味を同時に果たせるのは what。「彼が言ったこと」を表す。',
      },
    ],
  },
  {
    id: 'gap_gke_07',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3前半',
    order: 20906,
    targetLevel: 'oyo',
    title: 'so ～ that …／such ～ that …：「とても～なので…」の結果・程度',
    description: 'so と such の使い分け、that 節の読み方、時制の一致、too ～ to … や enough との関係を整理する',
    intro: 'The test was so difficult that nobody could finish it.（テストはとても難しかったので、だれも終わらせられなかった）。so ～ that … は、程度と結果をひとつの文で言える便利な形だ。しかし so と such のどちらを使うか、that のあとの時制をどうするかで、入試の空所補充はよく間違える。理由から整理しよう。',
    keyPoints: [
      'so ＋ 形容詞／副詞 ＋ that ＋ 主語 ＋ 動詞：「とても～なので…」「…なほど～だ」。',
      'such ＋ (a／an) ＋ (形容詞) ＋ 名詞 ＋ that ＋ 主語 ＋ 動詞：名詞がついているときは such を使う。',
      '見分けは「名詞があるか」：so のあとは形容詞か副詞だけ、such のあとは名詞を含む。',
      'such のうしろの名詞が複数形・数えられない名詞のときは a／an は付けない（such nice people、such good weather）。',
      'that 節の時制は、主節の時制にそろえる。過去の文なら that 節も過去（could, couldn\'t）。',
      'that は会話では省略されることが多い（I was so tired I fell asleep.）。',
      'so ～ that … can\'t は too ～ to …、so ～ that … can は ～ enough to … に書きかえられる。',
    ],
    sections: [
      {
        heading: 'so ～ that … と such ～ that … の形',
        body: `■ so ＋ 形容詞／副詞 ＋ that …
The test was so difficult that nobody could finish it.（テストはとても難しかったので、だれも終えられなかった）
He ran so fast that I couldn't catch up with him.（彼はとても速く走ったので、私は追いつけなかった）
so のうしろには、形容詞（difficult）や副詞（fast）だけが来る。名詞は来ない。

■ such ＋ (a／an) ＋ (形容詞) ＋ 名詞 ＋ that …
It was such a hot day that we stayed inside.（とても暑い日だったので、私たちは家の中にいた）
She is such a kind girl that everyone likes her.（彼女はとても親切な女の子なので、みんなに好かれている）
名詞（day, girl）があるときは such を使い、〈such ＋ a／an ＋ 形容詞 ＋ 名詞〉の順に並べる。

■ a／an が付かない場合
such nice people（とても親切な人々）、such good weather（とてもよい天気）
名詞が複数形のとき、または weather・water のように数えられない名詞のときは、a／an は付けない。

■ 訳し方
「とても～なので…」と前から訳す。「…なほど～だ」と後ろから訳すこともできる。

★ ここがポイント：**名詞がなければ so、名詞があれば such**。そして**that 節は「結果」**を表す。`,
      },
      {
        heading: 'なぜ so と such を使い分けるのか、なぜ that 節の時制をそろえるのか',
        body: `■ so は「そんなに」、such は「そのような」
so は程度を表す副詞で、「そんなに」という意味で直後の形容詞・副詞を強める。副詞は名詞を直接説明できないので、名詞の前には置けない。such は「そのような」という意味の形容詞で、名詞を説明する語である。このため、名詞が付くときは such を使い、名詞が付かないときは so を使う。

■ なぜ that の後ろは結果なのか
so ～ の「そんなに～」は、どれほどなのかを示さずに終わる。続く that 節が「その程度は、…ということだ」と内容を説明し、結果を示す。that は「～ということ」の意味をつなぐ接続詞である。たとえば He was so tired that he fell asleep. は、「彼はそれほど疲れていた。その程度とは、眠りこんだということだ」と読める。

■ 時制は主節にそろえる
過去の文で so ～ that を使うとき、that 節の中も過去形にそろえる。
× I was so tired that I can't walk.　○ I was so tired that I couldn't walk.
couldn't は can't の過去形で、過去の出来事の結果であることを示す。

■ 書きかえ
so ～ that … can't ＝ too ～ to …
He is so young that he can't drive. ＝ He is too young to drive.
so ～ that … can ＝ ～ enough to …
He is so strong that he can lift the box. ＝ He is strong enough to lift the box.

★ ここがポイント：**so は形容詞・副詞の前、such は名詞のある塊の前**。**that 節は結果で、時制は主節にそろえる**。`,
      },
      {
        heading: '例題：so と such を選び、文を作る',
        body: `【例題1】（　）に入る語を答える。It was（　）a cold day that we stayed home.
・a cold day は〈a ＋ 形容詞 ＋ 名詞〉。名詞 day があるので such。
・答え：such

【例題2】（　）に入る語を答える。The box was（　）heavy that I couldn't carry it.
・heavy は形容詞だけで、名詞は付かない。so を使う。
・答え：so

【例題3】「彼女はとても速く走ったので、だれも彼女に追いつけませんでした。」を英語にする。
・「とても速く走った」＝ ran so fast。「だれも～できなかった」＝ nobody could ～。
・「追いつく」は catch up with ～。
・答え：She ran so fast that nobody could catch up with her.

【例題4】It was such a good movie that I saw it twice. を、The movie で始まる文に書きかえる。
・such a good movie を形容詞だけの good に直すので、such を so に変える。
・答え：The movie was so good that I saw it twice.
・検算：good は形容詞のみで名詞がない。so で正しい。

★ ここがポイント：**名詞があれば such、なければ so**。そして**that 節の時制は主節にそろえる**。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `so ～ that … の英文を書いたら、次の5点で確かめる。

①so のあとが形容詞か副詞だけか。名詞が続くなら such に直す。
②such のあとは〈a／an ＋ 形容詞 ＋ 名詞〉の順か。複数形・数えられない名詞に a／an を付けていないか。
③that のあとに、主語と動詞がそろっているか。
④時制：主節が過去なら、that 節の can は could に、will は would にそろえているか。
⑤「とても～なので…」と訳して、自然な日本語になるか。

★ ここがポイント：書きおえたら**「so のあとに名詞はないか」**を必ず見る。名詞があれば、so を such に直す。これが一番多い失点である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。\nIt was（　）nice weather that we went out.\n① so\n② such',
        wrongAnswer: '① so',
        trapExplanation: '「とても」と聞くと so を思い出し、weather が名詞であることを見落とす。',
        correctAnswer: '② such',
        correctExplanation: 'weather は名詞なので such を使う。weather は数えられない名詞なので、a は付かず such nice weather の形になる。',
      },
      {
        question: '（　）に入る語を選びなさい。\nHe was so tired that he（　）walk any more.\n① can\'t\n② couldn\'t',
        wrongAnswer: '① can\'t',
        trapExplanation: '意味だけで考えて、「歩けない」の can\'t を選んでしまう。しかし主節が過去（was）である。',
        correctAnswer: '② couldn\'t',
        correctExplanation: '主節が過去なので、that 節も過去形にそろえる。can\'t の過去形は couldn\'t。',
      },
    ],
  },
  {
    id: 'gap_gke_08',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3前半',
    order: 20907,
    targetLevel: 'oyo',
    title: 'so that ～ can／will：目的を表す so that と、so ～ that との見分け',
    description: '「～するために・～できるように」を表す so that の形と、助動詞が入る理由、in order to との書きかえ、so ～ that との見分けを整理する',
    intro: 'I got up early so that I could catch the first train.（始発に乗れるように早起きした）。so that は「目的」を表す。しかし前の単元の so ～ that …（とても～なので…）と形がそっくりで、入試ではこの2つを見分ける問題がよく出る。見分けるポイントは、so のすぐあとに何があるかだ。',
    keyPoints: [
      'so that ＋ 主語 ＋ can／will／may ＋ 動詞の原形：「～できるように」「～するために」（目的）。',
      '主節が過去のときは、can → could、will → would にそろえる。',
      'so の直後に形容詞・副詞があれば「結果・程度」の so ～ that …、なければ「目的」の so that。',
      '主語が同じときは、so that ～ can を in order to ＋ 動詞の原形、または to ＋ 動詞の原形に書きかえられる。',
      '主語がちがうときは so that を使う（She spoke slowly so that I could understand her.）。',
      'that は会話では省略されることがある（so I could ～）。',
      'コンマのある ～, so ～ は「だから」という意味の結果の so で、so that とは別のもの。',
    ],
    sections: [
      {
        heading: 'so that の形と意味',
        body: `■ so that ＋ 主語 ＋ can／will ＋ 動詞の原形
I got up early so that I could catch the first train.（始発に乗れるように、早く起きた）
He speaks slowly so that everyone can understand him.（みんなが理解できるように、彼はゆっくり話す）
She studies hard so that she will pass the exam.（試験に合格するように、彼女は熱心に勉強する）
so that のあとは〈主語＋助動詞＋動詞の原形〉の文になる。

■ 時制のそろえ方
主節が現在のとき → can／will
主節が過去のとき → could／would
I got up early so that I could catch the first train. は、主節が過去なので could を使っている。

■ in order to／to との書きかえ（主語が同じとき）
I studied hard so that I could pass the exam.
＝ I studied hard in order to pass the exam.
＝ I studied hard to pass the exam.
so that を使う文と、不定詞を使う文は、目的を表す点で同じ意味になる。

■ 主語がちがうときは so that
She spoke slowly so that I could understand her.
この文は、主語が she（話す人）と I（理解する人）でちがうので、不定詞ではなく so that を使うのが自然である。

★ ここがポイント：**so that ＋ S ＋ can／will ＋ 原形で「～するために」**。**過去の文では could／would にそろえる**。`,
      },
      {
        heading: 'なぜ can や will が入るのか、どうやって so ～ that と見分けるのか',
        body: `■ 目的は「まだ実現していないこと」
目的とは、これから実現させたいことである。実現していないこと、実現するかもしれないことは、英語では助動詞 can や will で表す。だから目的の so that のあとには、can・will（過去なら could・would）が入る。
結果の so ～ that … が「すでに起きたこと」を述べるのとは対照的である。

■ so ～ that … との見分け方
so の直後を見る。
・so のすぐあとに形容詞・副詞がある → 結果・程度「とても～なので…」
 She was so busy that she couldn't eat lunch.（彼女はとても忙しかったので、昼食を食べられなかった）
・so のすぐあとに that がある → 目的「～するために」
 She worked hard so that she could buy a new bike.（新しい自転車を買えるように、彼女は熱心に働いた）
日本語の訳でも見分けられる。「～ので」「～ほど」と訳せば結果、「～ように」「～ために」と訳せば目的である。

■ ほかの so との区別
I was hungry, so I ate a sandwich.（おなかがすいていた。だから、サンドイッチを食べた）
コンマのあとの so は「だから」の意味で、前の文の結果を述べる。that を伴わない。

★ ここがポイント：**目的の so that は助動詞つき**、**結果の so ～ that … は形容詞・副詞つき**。**「ように」なら目的、「ので・ほど」なら結果**。`,
      },
      {
        heading: '例題：目的と結果を書き分ける',
        body: `【例題1】（　）に入る語を答える。He studied hard（　）that he could pass the test.
・that のすぐ前に形容詞・副詞はなく、あとに could がある。目的を表す。
・答え：so

【例題2】「電車に間に合うように、私は急ぎました。」を英語にする。
・「間に合う」は catch the train。「急いだ」は hurried。
・「間に合うように」は目的。過去の文なので could を使う。
・答え：I hurried so that I could catch the train.

【例題3】I went to the shop to buy some milk. を so that を使って書きかえる。
・主語は I のままで、目的は「牛乳を買うため」。過去の文なので could。
・答え：I went to the shop so that I could buy some milk.

【例題4】次の2文のちがいを説明する。
(a) She was so busy that she couldn't eat lunch.
(b) She worked hard so that she could buy a new bike.
・(a) は so のすぐあとに busy があるので、結果・程度「とても忙しかったので昼食を食べられなかった」。
・(b) は so のすぐあとが that なので目的「自転車を買えるように熱心に働いた」。

★ ここがポイント：**so のすぐあとが that なら目的**、**形容詞・副詞なら結果**。**過去の文では could** を使う。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `目的の so that の英文は、次の5点で確かめる。

①so のすぐ後に形容詞・副詞がないか。あれば「結果・程度」の so ～ that …。
②that のあとに、主語と助動詞（can／will）、動詞の原形がそろっているか。
③主節の時制と助動詞の時制がそろっているか。過去なら could／would。
④日本語の訳が「～ように・～ために」になっているか。「～ので」になるなら、結果の so。
⑤主語が同じなら in order to でも書きかえられるか。書きかえて意味が変わらなければ、so that の文として正しい。

★ ここがポイント：**「ように・ために」と訳せるのが so that**、**「ので・ほど」と訳せるのが so ～ that**。この訳し分けが一番のとりでになる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。\nI got up early yesterday so that I（　）catch the first train.\n① can\n② could',
        wrongAnswer: '① can',
        trapExplanation: '「間に合えるように」という意味だけで、現在形の can を選んでしまう。しかし文全体が過去である。',
        correctAnswer: '② could',
        correctExplanation: '主節が過去（got up）なので、so that のあとの助動詞も過去形 could にそろえる。',
      },
      {
        question: 'I was so busy that I couldn\'t call you. を日本語にしなさい。',
        wrongAnswer: 'あなたに電話できるように、忙しかった。',
        trapExplanation: 'so that を見て、反射的に「～するように」と訳してしまう。しかし so のすぐあとに busy があるので、結果の so ～ that … である。',
        correctAnswer: 'とても忙しかったので、あなたに電話できなかった。',
        correctExplanation: 'so のすぐ後ろに形容詞 busy があるので、結果・程度の so ～ that …。that 節の中が couldn\'t（否定）であることも、結果の文である手がかりになる。',
      },
    ],
  },
  {
    id: 'gap_gke_09',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 20908,
    targetLevel: 'nyushi',
    title: '資料読み取り①：お知らせ・案内文・ポスターから必要な情報を探す',
    description: '入試の英語に出る案内文・ポスターを、設問から先に読み、見出し語と数字を手がかりに答えの根拠を探す手順',
    intro: '公立入試の英語では、長文のほかに、ポスターや案内文を見て答える問題がよく出る。文章をはじめから読む必要はない。何を探すのかを設問で決め、見出しの語と数字をたどれば、短時間で正解にたどりつける。この単元では、その探し方の手順を身につけよう。',
    keyPoints: [
      '案内文・ポスターは「設問を先に読み、探す情報を決めてから」本文を見る。',
      '見出しの語：Date（日付）、Time（時刻）、Place（場所）、Fee（料金）、Bring（持ち物）、Sign up（申しこみ）、Contact（連絡先）。',
      '日付・曜日・時刻・料金・年齢の数字には、必ず印を付ける。',
      'under ～ は「～未満」で、その数字を含まない（under 6 は 5歳以下）。',
      '期間の日数は、両端を含めて数える（8月3日から5日は3日間）。',
      'by ～ は「～までに（期限）」、until ～ は「～までずっと」。',
      '本文と設問は言いかえられている（Bring → need to take、free → don\'t have to pay）。語そのものではなく意味で探す。',
    ],
    sections: [
      {
        heading: '設問から読んで、探す情報を決める',
        body: `案内文の問題は、本文を頭から読むより、設問を先に読むほうが速くて正確である。

■ 手順
①設問を読み、「何を探すのか」を決める（日付か、料金か、持ち物か）。
②本文から、その情報の見出しの語を探す。
③見つけた行の数字・条件を確かめて、選択肢と照らし合わせる。

■ 見出しによく使われる語
Date（日付）、Time（時刻）、Place（場所）、Fee／Price（料金）、Bring（持ち物）、Sign up／Apply（申しこみ）、Contact（連絡先）、Notice（お知らせ）

■ 練習用のポスター
Summer English Camp
Date: August 3 (Mon.) – August 5 (Wed.)
Place: Midori Park Center
Time: 9:00 a.m. – 3:00 p.m.
Fee: 3,000 yen (Lunch is included.)
　　Children under 6 are free.
Bring: a notebook, a pen, and a water bottle
Sign up by July 20 (Mon.) at the front desk of the center.

■ 設問と、探す行の対応
「何日間か」→ Date の行　「何時に終わるか」→ Time の行　「いくら払うか」→ Fee の行　「持っていくもの」→ Bring の行　「いつまでに申しこむか」→ Sign up の行

★ ここがポイント：**設問で探す情報を先に決め**、**見出しの語を手がかりに本文のその行だけを読む**。全文を読む必要はない。`,
      },
      {
        heading: 'なぜ全部読まずに設問から読むのか、数字と条件のどこに罠があるか',
        body: `■ なぜ設問から読むのか
入試は時間が限られている。案内文は、書かれている情報の量が多くても、設問が聞くのはその一部だけである。何を探すかを先に決めておけば、必要な行だけを読めば済む。本文を先に読むと、全部の情報を覚えようとして、時間と集中力を使ってしまう。

■ 本文と設問は、言いかえられる
ポスターの Bring: a notebook ... は、設問では「You need to take ～.」と言いかえられることがある。Children under 6 are free. は「Children under 6 don't have to pay.」になる。語そのものを探すのではなく、意味で探す。

■ 数字と条件のわな
①under ～：under 6 は「6歳未満」。6歳の子は含まれないので、払うことになる。
②日数：August 3 から August 5 までは、3日、4日、5日の3日間。5－3＝2 ではなく、両端を含めて数える。
③by と until：Sign up by July 20 は、「7月20日までに（その日が最後の期限）」。until は「ずっとその時まで続く」の意味で、期限を表す by とはちがう。
④included：Lunch is included. は「昼食代は料金に含まれる」。昼食を持っていく必要はない。
⑤曜日：日付の横の曜日が、本文のほかの日付と合っているかも確かめる。

★ ここがポイント：**数字は単位まで読み**、**under・by・included などの条件の語**に印を付ける。ここが問題作成者の狙い目である。`,
      },
      {
        heading: '例題：ポスターから答えを探す',
        body: `（前のポスターを使う）

【例題1】How many days does the camp last?
・Date の行：8月3日から8月5日。3日、4日、5日で3日間。
・答え：Three days.

【例題2】Mika is 6 years old. How much does she pay?
・Fee の行：3,000 yen。Children under 6 are free. だが、under 6 は6歳未満で、6歳の Mika は含まれない。
・答え：3,000 yen.

【例題3】What time does the camp finish each day?
・Time の行：9:00 a.m. – 3:00 p.m.。終わるのは 3:00 p.m.。
・答え：At 3:00 p.m.

【例題4】本文の内容と合うものを選ぶ。
ア You must pay 3,000 yen if you are 5 years old.
イ You have to bring your lunch.
ウ You should sign up by July 20.
エ The camp is held at a school.
・ア：5歳は under 6 なので free。×
・イ：Lunch is included. なので持っていかなくてよい。×
・ウ：Sign up by July 20 と合っている。○
・エ：Place は Midori Park Center で、学校ではない。×
・答え：ウ

【例題5】What is NOT necessary to bring?
・Bring の行：a notebook、a pen、a water bottle。昼食は料金に含まれているので持っていかなくてよい。
・答え：Lunch（昼食）

★ ここがポイント：答えは必ず**本文の根拠の行**から出す。**under・by・included** などの条件の語に印を付ける。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `案内文の問題に答えたら、次の4つで確かめる。

①根拠の行を指せるか：選んだ答えについて、本文のどの行に書いてあるかを、指で押さえて言えるか。言えなければ、思いこみで選んでいる。
②数字を数えなおしたか：日数は両端を含めて数えなおす。料金は、足し算・引き算をやり直す。
③条件の語に印をつけたか：under・over・only・except・not・free・included。
④選択肢のどこが誤りかを言えるか：×を付けた選択肢について、本文のどの語と食いちがうのかを説明できる。

★ ここがポイント：**「根拠の行を指さして言える」**ことが、いちばんたしかな検算である。指させない選択肢は、答えにしない。`,
      },
    ],
    trapExamples: [
      {
        question: 'Children under 6 are free.（6歳未満は無料）\nMika is 6 years old. How much does she pay?\n（料金は3,000 yen）',
        wrongAnswer: '0 yen（無料）',
        trapExplanation: '「6歳」と「under 6」を見て、6歳も無料だと思いこむ。under は「未満」で、その数字を含まない。',
        correctAnswer: '3,000 yen',
        correctExplanation: 'under 6 は、0歳から5歳までを指す。6歳の Mika は含まれず、通常の料金を払う。',
      },
      {
        question: 'キャンプは August 3 (Mon.) から August 5 (Wed.) までです。何日間ですか。',
        wrongAnswer: '2 days（5－3）',
        trapExplanation: '日付を引き算して2日間と答えてしまう。期間は、始まりの日も終わりの日も数える。',
        correctAnswer: '3 days',
        correctExplanation: '3日、4日、5日と指を折って数える。両端を含めるので3日間。月曜日・火曜日・水曜日の3日間である。',
      },
    ],
  },
  {
    id: 'gap_gke_10',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 20909,
    targetLevel: 'nyushi',
    title: '資料読み取り②：予定表・時刻表・メニューの表と設問を照らし合わせる',
    description: '表（メニュー・バスの時刻表）から、行と列の交点を読み、足し算・引き算や条件の絞りこみで答えを出す手順',
    intro: 'メニューの値段、バスの時刻表、行事の予定表。表の形で出る資料は、行と列の交点を読む力と、簡単な計算を落ち着いてやる力が問われる。英文で書かれていても、やることは算数と同じだ。表の読み方と、条件を一つずつ絞る手順を身につけよう。',
    keyPoints: [
      '表は、縦（列）と横（行）の交点を読む。「だれが・何を・いつ」の3つが交わる1マスが答えになる。',
      '設問の条件を一つずつ当てはめて、候補を消していく（絞りこみ）。',
      '料金は、足し算・引き算を紙に書いてやり直す。おつり＝持っているお金－合計。',
      '時刻表は、乗る時刻と着く時刻の列を取りちがえない。かかる時間＝着く時刻－出る時刻。',
      '「～までに着く」は、着く時刻が指定時刻以前であるバスを選ぶ。',
      'a.m.（午前）と p.m.（午後）、単位（yen、minutes）まで読む。',
      '表の外に書かれた注意書き（Children ～、Closed on ～）にも条件がある。',
    ],
    sections: [
      {
        heading: '表の読み方：行と列を指でたどる',
        body: `■ メニュー（料金表）
Hamburger　450 yen
Pizza　600 yen
Salad　300 yen
Soup　250 yen
Orange juice　200 yen
Tea　150 yen

■ バスの時刻表
Bus　　Station　　City Hall　　Library
No. 1　8:00　　　　8:15　　　　　8:30
No. 2　8:30　　　　8:45　　　　　9:00
No. 3　9:00　　　　9:15　　　　　9:30

■ 読み方の手順
①設問から、「何の行」「何の列」を探すかを決める。
②行を指で右へ、列を指で下へたどり、交わる1マスを読む。
③値段なら計算、時刻なら引き算を、紙に書いてやる。

■ 例：バスの時刻表の読み方
「No. 2 の City Hall の時刻」→ No. 2 の行を右へ、City Hall の列を下へ。交わるのは 8:45。

★ ここがポイント：**行と列を指でたどって、交わる1マスを読む**。**計算は暗算せず、紙に書く**。`,
      },
      {
        heading: 'なぜ条件を一つずつ絞るのか、どこで取りちがえやすいか',
        body: `■ 条件を一つずつ絞る
表の問題は、選択肢が複数の条件をかねていることが多い。条件を一つずつ当てはめて、合わない候補を消していくと、答えが一つに絞られる。
「～までに着く」「800円以内」のような条件は、全部の候補にあてはめて、満たすものだけを残す。

■ 取りちがえやすい所
①列の取りちがえ：Station の列と City Hall の列を取りちがえて、出発時刻を到着時刻と読んでしまう。
②区切りの時刻：「9:15 までに着く」は、9:15 ちょうどに着くバスも入る。9:30 に着くバスは間に合わない。
③合計の計算：2品の合計を、1品の値段だけで比べてしまう。足し忘れが多い。
④足りない金額：持っているお金より合計が大きければ買えない。「いくら足りないか」は、合計－持っているお金。
⑤午前・午後：9:00 a.m.（午前9時）と 9:00 p.m.（午後9時）を取りちがえる。

■ 時刻表の「かかる時間」
かかる時間＝着く時刻－出る時刻。No. 1 の Station（8:00）から Library（8:30）まで、30分かかる。

★ ここがポイント：**条件を一つずつ当てはめて消していく**。**取りちがえやすいのは「列」と「合計」と「ちょうどの時刻」**。`,
      },
      {
        heading: '例題：メニューと時刻表から答えを出す',
        body: `（前のメニューと時刻表を使う）

【例題1】Ken orders a hamburger and orange juice. How much is it?
・Hamburger 450 yen ＋ Orange juice 200 yen ＝ 650 yen。
・答え：650 yen.

【例題2】Mika has 800 yen. She orders a pizza and tea. How much change does she get?
・Pizza 600 yen ＋ Tea 150 yen ＝ 750 yen。
・おつり＝800－750＝50。
・答え：50 yen.

【例題3】Mika also wants soup. Can she buy it with 800 yen?
・750 yen ＋ Soup 250 yen ＝ 1,000 yen。800 yen より多い。
・1,000－800＝200 で、200 yen 足りない。
・答え：No, she can't. She needs 200 yen more.

【例題4】What is the cheapest food and drink set? （食べ物1つと飲み物1つ）
・食べ物で一番安いのは Soup 250 yen。飲み物で一番安いのは Tea 150 yen。
・250＋150＝400。
・答え：Soup and tea, 400 yen.

【例題5】Emi wants to be at the library by 9:15. Which is the latest bus she can take from the station?
・Library の列で 9:15 以前に着くのは No. 1（8:30）と No. 2（9:00）。No. 3 は 9:30 で間に合わない。
・その中で一番遅い出発は No. 2。
・答え：No. 2.

【例題6】How long does it take from the station to City Hall?
・No. 1 で 8:00 に出て 8:15 に着く。15分。
・答え：Fifteen minutes.

★ ここがポイント：**表は行と列の交点**を読み、**計算は紙に書く**。おつりは「おつり＋合計＝持っているお金」で検算する。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `表の問題に答えたら、次の4点で確かめる。

①指でたどりなおす：行と列を、もう一度指でたどって、交わるマスが同じ数字か確認する。
②計算をやり直す：合計は足し算を2回、別の順でやる（450＋200 と 200＋450）。おつりは「おつり＋合計＝持っているお金」で逆算する。例：50＋750＝800。
③条件を全部満たしたか：「～までに」「～以内」「食べ物1つと飲み物1つ」など、設問の条件を指さして確認する。
④単位と午前・午後：yen、minutes、a.m.、p.m. を最後に読み直す。

★ ここがポイント：おつりは**「おつり＋合計＝持っているお金」**に戻して検算する。バスは**「着く時刻－出る時刻」**でかかる時間をたしかめる。`,
      },
    ],
    trapExamples: [
      {
        question: 'Mika has 800 yen. Can she buy a pizza (600 yen), soup (250 yen) and tea (150 yen)?',
        wrongAnswer: 'Yes, she can.',
        trapExplanation: '一番高いピザ（600円）だけが目に入り、「800円で買える」と思ってしまう。3品の合計を足していない。',
        correctAnswer: 'No, she can\'t.',
        correctExplanation: '600＋250＋150＝1,000。800円より多いので買えない。1,000－800＝200円足りない。',
      },
      {
        question: 'バスの時刻表（No. 2：Station 8:30、City Hall 8:45、Library 9:00）で、No. 2 は City Hall に何時に着きますか。',
        wrongAnswer: '8:30',
        trapExplanation: '行は合っていても、列を取りちがえて、Station の出発時刻を読んでしまう。',
        correctAnswer: '8:45',
        correctExplanation: 'City Hall の列と No. 2 の行が交わるマスを読む。Station の列は出発の時刻で、City Hall の列とは別の列である。',
      },
    ],
  },
  {
    id: 'gap_gke_11',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 20910,
    targetLevel: 'nyushi',
    title: 'リスニング⑥：音のつながり・消える音・弱く読まれる語を聞き取る',
    description: '連結・脱落・同化・はじき音・弱形といった音の変化のしくみと、聞こえた音から英文を復元する手順',
    intro: '単語はぜんぶ知っているのに、放送では聞き取れない。その原因の多くは、英語の音が文の中で変わることにある。つながる、消える、別の音になる、弱くなる。このしくみを知っておけば、聞こえた音を英文に復元できる。聞き取りのコツを、理由からつかもう。',
    keyPoints: [
      '連結：語末の子音と次の語頭の母音がつながる（an apple → アナップル、turn off → ターノフ）。',
      '脱落：語末の t・d・p・k などが、次に子音が続くと聞こえにくくなる（next day → ネクスデイ）。',
      '同化：隣り合う音が混ざって別の音になる（Did you → ディジュ、Would you → ウジュ、meet you → ミーチュ）。',
      'はじき音：アメリカ英語では、母音にはさまれた t が「ラ行」に近い音になる（water → ウォーラー、better → ベラー）。',
      '弱形：can・to・of・a・the などの機能語は弱く短い。内容語（名詞・動詞・形容詞）は強く長い。',
      'can と can\'t の聞き分け：can は弱く短く、can\'t は強く長く聞こえる。文末の can は強く読まれる。',
      '聞こえた音をカタカナでメモし、文法で英文に復元する。意味が通るかで確かめる。',
    ],
    sections: [
      {
        heading: '音が変わる5つのしくみ',
        body: `■ ①連結：子音＋母音がつながる
語末の子音が、次の語の母音にくっついて、一語のように聞こえる。
an apple → アナップル
turn off → ターノフ
Stand up. → スタンダップ

■ ②脱落：次に子音が来ると聞こえにくくなる
語末の t・d・p・k などは、次の語が子音で始まると、はっきり発音されない。
next day → ネクスデイ（t が聞こえにくい）
last night → ラスナイト
good boy → グッボーイ

■ ③同化：隣の音と混ざって別の音になる
Did you ～? → ディジュ ～？
Would you ～? → ウジュ ～？
Don't you ～? → ドンチュ ～？
Nice to meet you. → ナイス トゥ ミーチュ

■ ④はじき音（アメリカ英語）
母音にはさまれた t が、ラ行に近い音になる。
water → ウォーラー　better → ベラー　city → スィリィ

■ ⑤弱形：機能語は弱く、内容語は強く
can・to・of・for・a・the などは弱く短く読まれる。名詞・動詞・形容詞などの内容語は強く長く読まれる。

★ ここがポイント：**連結・脱落・同化・はじき音・弱形**の5つを知っておく。**聞き取れないのは耳が悪いからではなく、音が変わるから**である。`,
      },
      {
        heading: 'なぜ音が変わるのか、can と can\'t はどう聞き分けるのか',
        body: `■ 英語は強く読むところを軸にしゃべる
日本語は、一音ずつをほぼ同じ長さで発音する。英語は、強く読む音（名詞・動詞・形容詞など）を中心にして、そのあいだにある弱い語を速く短く言う。強い音のあいだにはさまれた弱い語は、短くなったり、前後の音と混ざったりする。これが音の変化の根っこである。

■ なぜつながるのか
英語は息を切らずに、ひとまとまりで言う。そのため、前の語の語末の子音が、次の語の母音に乗って発音される。an apple は「アン アップル」と二語に区切らず、「アナップル」と一息で言う。

■ can と can't の聞き分け
I can swim. → アイ クン スイム（can は弱く短く、swim が強い）
I can't swim. → アイ キャーント スイム（can't は強くはっきり）
can は弱く読まれ、can't は強く読まれる。この強さのちがいが、聞き分けの決め手になる。ただし、Yes, I can. のように文の最後に来る can は強く読まれる。

■ won't と want の聞き分け
won't は「ウォウント」と母音を長く、want は「ワント」と短く発音する。

■ 聞こえた音から、英文に復元する
音の変化を知ったうえで、聞こえた音をカタカナで書き、文法（主語・動詞がそろうか）で英文に直す。意味が通るかどうかで確かめる。

★ ここがポイント：**強く読まれる語に集中する**。**弱い語は全部聞き取ろうとせず、文法で復元する**。can と can't は**強さと長さ**で聞き分ける。`,
      },
      {
        heading: '例題：聞こえた音を英文に復元する',
        body: `【例題1】聞こえた音「ディジュー イート ブレックファスト？」を英文に直す。
・「ディジュー」は Did you が混ざった音（同化）。あとに eat breakfast が続く。
・答え：Did you eat breakfast?

【例題2】「アイ クン スイム」と「アイ キャーント スイム」のちがいを答える。
・「クン」と弱く短く聞こえるのは can。「キャーント」と強く長く聞こえるのは can't。
・答え：前者は I can swim.（泳げる）、後者は I can't swim.（泳げない）。

【例題3】「ターノフ ザ ライト」を英文に直す。
・「ターノフ」は turn off が連結した音。「ザ ライト」は the light。
・答え：Turn off the light.

【例題4】「ナイス トゥ ミーチュー」を英文に直す。
・「ミーチュー」は meet you が同化した音。
・答え：Nice to meet you.

【例題5】「ウォーラー」と聞こえた。何という語か。
・母音にはさまれた t が「ラ」に近い音になる（はじき音）。
・答え：water（水）

★ ここがポイント：**聞こえた音をまず書き、文法で英文に復元**する。**can は弱く、can't は強く**聞こえる。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `リスニングの答えを確かめるときは、次の4点で見直す。

①聞こえた音を、カタカナでメモしたか。メモがあれば、あとで英文に復元できる。
②文法で復元できているか。主語と動詞がそろうか。Did の次に you が来るか。
③意味が通るか。can と can't、won't と want を取りちがえていないか、前後の意味で確かめる。
④否定の語を聞き逃していないか。not・never・no・nothing は、強く読まれる。

練習のしかた
・ディクテーション：短い英文を聞いて書き取る。書けなかった所が、自分の弱点。
・シャドーイング：音声を少しおくれて、まねして言う。
・音読：自分で言えない音は、聞き取れない。

★ ここがポイント：書き取れなかった所は、**「知らない単語」か「音が変わっていた所」**のどちらかである。どちらかを見きわめて、対策を決める。`,
      },
    ],
    trapExamples: [
      {
        question: '放送：I can\'t swim.\n選択肢：① 私は泳げる。② 私は泳げない。',
        wrongAnswer: '① 私は泳げる。',
        trapExplanation: 'can\'t の最後の t は聞こえにくいので、can と思いこんでしまう。聞き分けの手がかりは、母音の強さと長さである。',
        correctAnswer: '② 私は泳げない。',
        correctExplanation: 'can\'t は「キャーント」と強く長く、はっきり聞こえる。can は「クン」と弱く短く聞こえる。強く長い音が聞こえたら、否定だと判断する。',
      },
      {
        question: '放送：I won\'t go to the party.\n選択肢：① 私はパーティーに行きたい。② 私はパーティーに行かない。',
        wrongAnswer: '① 私はパーティーに行きたい。',
        trapExplanation: 'won\'t と want を同じ「ウォント」と聞いてしまう。won\'t の母音は長く、want は短い。',
        correctAnswer: '② 私はパーティーに行かない。',
        correctExplanation: 'won\'t は「ウォウント」と母音を長く言い、want は「ワント」と短く言う。また want のあとには to が続くのがふつうで、want go とは言わない。go の前が to でなければ、want ではない。',
      },
    ],
  },
  {
    id: 'gap_gke_12',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 20911,
    targetLevel: 'nyushi',
    title: '長文頻出テーマ語彙①：科学技術・情報・メディア',
    description: 'インターネットやスマートフォンなど、入試の長文や英作文に出やすい科学技術と情報の語を、品詞と派生語でまとめて覚える',
    intro: 'スマートフォンやインターネットの便利さと問題点は、入試の長文や自由英作文でもっとも出やすいテーマのひとつだ。語を1つずつ覚えるのではなく、「テーマ」と「品詞のつながり」でまとめて覚えると、初めて見る長文でも内容が予想でき、読むスピードが上がる。',
    keyPoints: [
      '名詞：technology（科学技術）、invention（発明）、discovery（発見）、research（研究）、experiment（実験）、information（情報）、the Internet（インターネット）、website（ウェブサイト）',
      '動詞：invent（発明する）、discover（発見する）、develop（開発する）、improve（よくする）、solve（解決する）、search（さがす）、share（共有する）、connect（つなぐ）',
      '形容詞：useful（役に立つ）、convenient（便利な）、dangerous（危険な）、safe（安全な）、modern（現代の）、digital（デジタルの）、online（オンラインの）',
      'information と research は数えられない名詞。× informations。a lot of information、a piece of information。',
      'invent は「世の中になかったものを作る」、discover は「もとからあったものを見つける」。',
      '派生語：invent → invention → inventor（発明家）、use → useful ↔ useless、connect → connection、develop → development。',
      '論の型：「便利になった（良い点）。しかし問題もある（悪い点）。私の考えは…」',
    ],
    sections: [
      {
        heading: 'テーマ別に覚える：科学技術と情報の語',
        body: `■ 名詞
technology（科学技術）、invention（発明）、discovery（発見）、research（研究）、experiment（実験）、scientist（科学者）、information（情報）、the Internet（インターネット）、website（ウェブサイト）、smartphone（スマートフォン）、social media（ソーシャルメディア）、machine（機械）、robot（ロボット）、battery（電池）

■ 動詞
invent（発明する）、discover（発見する）、develop（開発する・発達させる）、improve（よくする）、solve（解決する）、search（さがす）、share（共有する）、connect（つなぐ）、communicate（意思を伝え合う）

■ 形容詞
useful（役に立つ）、convenient（便利な）、dangerous（危険な）、safe（安全な）、modern（現代の）、digital（デジタルの）、online（オンラインの）

■ 熟語・言い方
make our lives easier（私たちの生活をもっと楽にする）
spend time on ～（～に時間を使う）
search for information（情報をさがす）
get information from ～（～から情報を得る）

■ 例文
The Internet has changed the way we live.（インターネットは私たちの生き方を変えた）
Smartphones are very useful, but we spend too much time on them.（スマートフォンはとても便利だが、私たちはそれに時間を使いすぎている）

★ ここがポイント：**information と research は数えられない名詞**で、**s は付けない**。「**a lot of information**」「**some research**」の形で使う。`,
      },
      {
        heading: 'なぜ派生語でまとめるのか、invent と discover はどうちがうのか',
        body: `■ 派生語で一度に増やす
語形のきまりを知ると、覚える量が減る。
invent（動詞）→ invention（名詞）→ inventor（発明家）
discover（動詞）→ discovery（名詞）
develop（動詞）→ development（名詞）
connect（動詞）→ connection（名詞）
use（動詞）→ useful（役に立つ）↔ useless（役に立たない）
-ion や -ery は「動詞を名詞にする語尾」、-er や -or は「～する人」、-ful は「～に満ちた」、-less は「～がない」を表す。

■ invent と discover
invent は、世の中になかったものを新しく作り出すこと。電話や電球のように、人が作ったものに使う。
discover は、もとからあったものを見つけること。新しい星、新しい島、新しい病気の原因のように、すでにあったものに使う。
Scientists discovered a new kind of fish in the deep sea.（科学者たちは深海で新しい種類の魚を発見した）魚はもともと海にいたので、discover を使う。

■ 長文のテーマの型
科学技術の長文は、ほとんど次の流れで書かれている。
①Technology has made our lives easier.（便利になった）
②However, it also has some problems.（しかし問題もある）
③In my opinion, we should ～.（私は～すべきだと思う）
この流れを知っておくと、However や On the other hand の位置で、話の向きが変わることが予想できる。

★ ここがポイント：**invent＝新しく作る、discover＝すでにあるものを見つける**。**語尾のきまり**（-ion、-er、-ful、-less）で、語の品詞と意味が推測できる。`,
      },
      {
        heading: '例題：語を選び、語形を変える',
        body: `【例題1】（　）に入る語を選ぶ。Scientists（　）a new planet last year. ①invented ②discovered
・惑星はもとからあるものなので discover を使う。過去の話なので discovered。
・答え：②

【例題2】（　）に入る語を答える。The Internet is very（　）. We can get information quickly.
・「すぐ情報が得られる」ことから、「便利な」が合う。
・答え：convenient（useful も可）

【例題3】（　）に入る語を答える。He wants to be an（　）. He likes to make new machines.
・「新しい機械を作る」人なので、invent の「人」を表す形。語尾の -or を付ける。母音の音で始まるので an。
・答え：inventor

【例題4】「スマートフォンは私たちの生活をより便利にしました。」を英語にする。
・make ＋ O ＋ C「O を C にする」。「生活」は lives、「より便利に」は more convenient。
・現在とのつながりを表すので、現在完了を使う。
・答え：Smartphones have made our lives more convenient.

【例題5】次の誤りを直す。I got a lot of informations from the Internet.
・information は数えられない名詞なので、複数形にしない。
・答え：I got a lot of information from the Internet.

★ ここがポイント：空所は**品詞を先に決める**。**information は数えられない**ので s を付けない。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `語彙の問題は、次の5つで確かめる。

①空所の品詞は何か：名詞が入るのか、動詞か、形容詞か。a／the や形容詞のあとなら名詞、to のあとや主語のあとなら動詞、be動詞のあとなら形容詞が多い。
②数えられる名詞か：information、research は複数形にならない。
③語形変化は合っているか：-ion、-er、-ful、-less の語尾が、意味に合っているか。
④反意語のペアで意味を確かめる：useful ↔ useless、safe ↔ dangerous、convenient ↔ inconvenient。
⑤日本語に直して自然か：選んだ語を入れて、和訳して意味が通るかを確かめる。

★ ここがポイント：空所の語を選ぶ前に**「品詞は何か」「数えられるか」**を先に決める。これだけで選択肢が半分に減る。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。\nScientists（　）a new kind of fish in the deep sea.\n① invented\n② discovered',
        wrongAnswer: '① invented',
        trapExplanation: '「新しい」という言葉に引きずられて、「新しく作った」invent を選んでしまう。',
        correctAnswer: '② discovered',
        correctExplanation: '魚はもともと深海にいたもので、人が作ったものではない。すでにあったものを見つけたときは discover を使う。',
      },
      {
        question: '次の文の誤りを直しなさい。\nThe Internet gives us a lot of informations.',
        wrongAnswer: 'The Internet gives us a lot of informations.（そのまま）',
        trapExplanation: 'a lot of の後ろだから複数形だろうと考えて、information に s を付けてしまう。',
        correctAnswer: 'The Internet gives us a lot of information.',
        correctExplanation: 'information は数えられない名詞で、複数形にしない。a lot of は数えられる名詞にも、数えられない名詞にも使えるので、s の有無は名詞そのもので決める。',
      },
    ],
  },
  {
    id: 'gap_gke_13',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 20912,
    targetLevel: 'nyushi',
    title: '長文頻出テーマ語彙②：健康・食・生活習慣',
    description: '健康、食事、睡眠、体調に関する語と熟語を、動詞とセットで覚え、長文・英作文・会話文で使えるようにする',
    intro: '「朝食をとることはなぜ大切か」「睡眠は健康にどう関係するか」。健康や食生活は、長文や自由英作文でよく出る身近なテーマだ。会話文では、体調を伝える表現も出る。語だけでなく、動詞とのセットや前置詞まで一緒に覚えると、そのまま英作文で使える。',
    keyPoints: [
      '名詞：health（健康）、habit（習慣）、exercise（運動）、sleep（睡眠）、breakfast（朝食）、vegetable（野菜）、fruit（果物）、sugar（砂糖）、salt（塩）、stress（ストレス）、medicine（薬）、fever（熱）',
      '動詞とセットで覚える：get enough sleep（十分に眠る）、catch a cold（かぜをひく）、have a fever（熱がある）、take medicine（薬を飲む）、take a rest（休む）、stay healthy（健康でいる）',
      'be good for ～（～によい）／be bad for ～（～に悪い）。前置詞は for。',
      '派生語：health → healthy（健康的な）↔ unhealthy、ill → illness（病気）、injure → injury（けが）。',
      '不可算名詞：sleep、exercise（運動の意味）、sugar、salt、medicine。a／an を付けず、複数形にもしない。',
      '体調：have a headache／stomachache／toothache／fever／cough（頭痛／腹痛／歯痛／熱／せき）。',
      '健康の論の型：「～は健康によい。なぜなら…」「～しすぎると健康に悪い」',
    ],
    sections: [
      {
        heading: '健康と食生活の語：動詞とセットで覚える',
        body: `■ 名詞
health（健康）、habit（習慣）、exercise（運動）、sleep（睡眠）、breakfast（朝食）、vegetable（野菜）、fruit（果物）、sugar（砂糖）、salt（塩）、stress（ストレス）、medicine（薬）、fever（熱）、cough（せき）、injury（けが）

■ 動詞とセットで覚える
get enough sleep（十分に眠る）
eat breakfast（朝食をとる）
eat a balanced diet（バランスのとれた食事をする）
catch a cold（かぜをひく）
have a fever（熱がある）
take medicine（薬を飲む）
take a rest（休息をとる）
stay healthy（健康でいる）
make a habit of ～ing（～する習慣をつける）

■ 体調を伝える言い方
I have a headache.（頭が痛い）、I have a stomachache.（おなかが痛い）、I have a toothache.（歯が痛い）、I have a fever.（熱がある）、I have a cough.（せきが出る）
You should take a rest.（休んだほうがいいよ）

■ 前置詞を一緒に
Sleep is good for your health.（睡眠は健康によい）
Too much sugar is bad for your health.（砂糖のとりすぎは健康に悪い）
be good for ～ と be bad for ～ の前置詞は for。

★ ここがポイント：**語は動詞とセットで覚える**。**be good for ～／be bad for ～ の前置詞は for**。`,
      },
      {
        heading: 'なぜセットで覚えるのか、健康の話はどう論じるか',
        body: `■ 動詞とのセットで覚える理由
日本語の「かぜを引く」は、英語では catch a cold と言う。直訳の take や get は使わない。「薬を飲む」も、drink ではなく take medicine。名詞だけを覚えても、動詞を取りちがえると文が成り立たない。名詞は動詞とセットで1つのかたまりと考える。

■ 数えられない名詞
sleep、sugar、salt、medicine、exercise（運動の意味）は、数えられない名詞。a を付けず、複数形にもしない。量は much や a lot of で表す。「たくさんの睡眠」は a lot of sleep。

■ 派生語
health → healthy（健康的な）↔ unhealthy（不健康な）
ill（病気の）→ illness（病気）
injure（傷つける）→ injury（けが）
healthy な食べ物は healthy food。health は名詞、healthy は形容詞。

■ 論の型（自由英作文・長文）
①主張：Breakfast is important for our health.
②理由：Because it gives us energy for the morning.
③例：For example, students who eat breakfast can study better.
「～は健康によい」と述べるときは、It is good for your health to ～. や ～ is good for your health. が使いやすい。「～しすぎるのは悪い」は Too much ～ is bad for ～.

★ ここがポイント：**名詞は動詞とセットで1つのかたまり**。**health は名詞、healthy は形容詞**。論は**主張→理由→例**の順に書く。`,
      },
      {
        heading: '例題：語を選び、文を作る',
        body: `【例題1】（　）に入る形を選ぶ。You should get enough（　）to stay healthy. ①sleep ②sleeps
・sleep（睡眠）は数えられない名詞で、複数形にしない。
・答え：①

【例題2】（　）に入る語を答える。Eating too much sugar is bad（　）your health.
・be bad for ～（～に悪い）。前置詞は for。
・答え：for

【例題3】（　）に入る語を答える。I have a fever and a cough. I think I've（　）a cold.
・「かぜをひく」は catch a cold。have のあとなので過去分詞（現在完了）の caught。
・答え：caught

【例題4】「毎日運動することは健康によい。」を2通りに英語にする。
・主語を動名詞にする：Exercising every day is good for your health.
・形式主語 it を使う：It is good for your health to exercise every day.
・どちらも be good for ～（～によい）を使っている。

【例題5】「私は頭が痛いので、薬を飲みました。」を英語にする。
・「頭が痛い」は I have a headache.。理由は so でつなぐ。「薬を飲む」は take medicine。過去なので took。
・答え：I had a headache, so I took some medicine.

★ ここがポイント：**動詞と名詞はセットで覚える**（catch a cold、take medicine）。**good for ～／bad for ～ の for** を落とさない。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `健康や食生活の英文は、次の5つで確かめる。

①動詞と名詞の組み合わせは正しいか：catch a cold、take medicine、take a rest、get enough sleep。
②数えられない名詞に s や a を付けていないか：sleeps、a sugar は誤り。
③前置詞は正しいか：good for ～、bad for ～。
④品詞は合っているか：名詞 health と形容詞 healthy。「体によい食べ物」と言うときは、形容詞の healthy を使って healthy food とする。
⑤時制は合っているか：体調の話は、いまの状態（現在形）か、過去の出来事（過去形）かを日本語から確かめる。

★ ここがポイント：「かぜをひく」は**catch**、「薬を飲む」は**take**。**動詞を日本語の直訳で選ばない**ことが、いちばんの検算である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。\nI think I\'ve（　）a cold.\n① caught\n② taken',
        wrongAnswer: '② taken',
        trapExplanation: '「薬を飲む」の take と同じように、take を使ってしまう。「かぜをひく」は take では表さない。',
        correctAnswer: '① caught',
        correctExplanation: '「かぜをひく」は catch a cold。have のあとなので過去分詞の caught を使う。take は take medicine（薬を飲む）や take a rest（休む）で使う。',
      },
      {
        question: '（　）に入る語を選びなさい。\nSleep is good（　）our health.\n① for\n② to',
        wrongAnswer: '② to',
        trapExplanation: '「健康に」の「に」から to を選んでしまう。',
        correctAnswer: '① for',
        correctExplanation: 'be good for ～ で「～によい」。be bad for ～（～に悪い）も同じ前置詞 for を使う。日本語の「に」に引きずられず、熟語として覚える。',
      },
    ],
  },
];
