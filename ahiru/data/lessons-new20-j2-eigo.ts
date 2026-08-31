import type { Lesson } from './lesson-types';

export const lessonsNew20J2Eigo: Lesson[] = [
  {
    id: 'new20_j2_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ①：過去進行形の文を組み立てる',
    description: 'was/were＋-ingの語順を並べかえ問題の形式で確実に組み立てられるようにする',
    intro: '過去進行形は意味自体は「〜していた」とすぐわかっても、いざ語をバラバラに並べられると be動詞をどこに置くか迷う人が多い。ここでは「まず be動詞を探す」という並べかえの手順を、実際の整序問題の形で練習する。',
    order: 8080,
    studyPeriod: '中2',
    keyPoints: [
      '並べかえ問題ではまず主語を確認し、それに合う was / were を探す。',
      '肯定文の骨組みは〈主語＋was/were＋動詞のing形〉。',
      '否定文は was/were の直後に not を置く。',
      '疑問文は Was/Were を文頭に出し、主語→動詞のing形の順。',
      'when節・while節がある文は、まず主節（was/were+ing）を組み、その後ろか前に節をつなげる。',
      '選択肢に -ing 形の動詞が2つある文では、どちらが「していた動作」でどちらが「割りこんだ動作」かを日本語訳から判断する。',
    ],
    sections: [
      {
        heading: '並べかえの基本手順：be動詞を最初に探す',
        body: `並べかえ問題でいきなり単語を動かし始めると、時間がかかるうえにミスも増える。過去進行形の文では、次の3ステップで組み立てると速く正確にできる。

■ ステップ①：主語を確定する
選択肢の中から主語になれる語（I, you, he, she, it, we, they や固有名詞）を見つけ、日本語訳と照らして文頭に置く。

■ ステップ②：主語に合う be動詞を選ぶ
　I → was　he/she/it・単数の名詞 → was　you/we/they・複数の名詞 → were
　選択肢に was と were の両方が混じっていることが多いので、主語に合わない方は絶対に使わないと決めてから組み立てる。

■ ステップ③：動詞を -ing 形にして be動詞の直後に置く
　〈主語＋was/were＋動詞のing形〉が骨組み。そのあとに目的語・場所・時を表す語句を続ける。

例題）（ I / was / studying / English ）at nine last night.
→ I was studying English at nine last night.（昨夜9時に英語を勉強していた）

例題）（ they / playing / soccer / were ）in the park then.
→ They were playing soccer in the park then.
★ポイント：were と playing の順番を逆にしてしまうミスが非常に多い。be動詞は必ず -ing 形の直前に来る。`,
      },
      {
        heading: 'when節・while節を含む文の組み立て方',
        body: `過去進行形は when（〜したとき）や while（〜している間）を使った複文の並べかえで特によく出題される。

■ 型①：「〜していたとき、…した」（過去進行形 + when + 過去形）
　I was watching TV when my mother came home.
　（母が帰宅したとき、私はテレビを見ていた）
　→「していた」方（背景）が過去進行形、「した」方（割りこみ）が過去形になる。

■ 型②：「〜している間に、…した」（while + 過去進行形, 過去形）
　While I was cooking dinner, the phone rang.
　（夕食を作っている間に、電話が鳴った）
　→ while の後ろの節は必ず過去進行形。

■ 並べかえの手順
① 選択肢に when / while があれば、まずその節がどちらの動詞と結びつくかを日本語訳から判断する。
② 過去進行形になる動詞（背景・継続していた動作）と、過去形になる動詞（一瞬の出来事）を見分ける。
③ 主節・従属節の順番は、日本語の語順どおりでよい場合が多いが、while節が文頭に来るときはコンマを忘れない。

例題）（ was / when / it / raining / started ）I left home.
→ It was raining when I started I left home.（誤り例：語順を崩している）
正しくは：It was raining when I left home.
★ポイント：when節の中の主語・動詞（I left home）は過去形のままにし、主節（It was raining）だけを過去進行形にする。`,
      },
      {
        heading: 'よくある並べかえミスとチェックポイント',
        body: `過去進行形の並べかえでは、次の3つのミスが繰り返し起こる。仕上げに必ず確認する。

■ ミス①：be動詞を忘れて動詞のing形だけを置いてしまう
　誤：I studying English then.
　正：I was studying English then.
　→ -ing 形の動詞を見た瞬間に「be動詞とセットか」を必ず確認する。

■ ミス②：was と were を主語に合わせず適当に選ぶ
　誤：They was playing soccer.
　正：They were playing soccer.
　→ 主語が複数（they, we, you、複数名詞）なら were、単数（I以外の1人・1つ）なら was。

■ ミス③：when節の中まで過去進行形にしてしまう
　誤：I was watching TV when my mother was coming home.
　正：I was watching TV when my mother came home.
　→「割りこんだ一瞬の動作」は過去形。継続していた背景の動作だけが過去進行形になる。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「彼女が電話をかけてきたとき、私は宿題をしていた。」（I / doing / was / homework / my）when she called me.',
        wrongAnswer: 'I doing was my homework',
        trapExplanation: 'be動詞を動詞のing形の後ろに置いてしまい、was と doing の順番を逆にしている。',
        correctAnswer: 'I was doing my homework when she called me.',
        correctExplanation: '過去進行形の骨組みは〈主語＋was/were＋動詞のing形〉。was は必ず動詞のing形の直前に置く。when以下（she called me）はすでに過去形で完成しているので、そのまま動かさない。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ②：未来表現（will / be going to）の文',
    description: 'will と be going to を含む文を、否定文・疑問文もふくめて正しい語順で組み立てる',
    intro: '未来を表す表現は will と be going to の2種類があり、それぞれ否定文・疑問文の作り方が違う。並べかえ問題では「どちらの形が使われているか」を選択肢から見抜く力が試される。',
    order: 8081,
    studyPeriod: '中2',
    keyPoints: [
      'will の文の骨組みは〈主語＋will＋動詞の原形〉。will のあとは必ず原形。',
      'be going to の文の骨組みは〈主語＋be動詞＋going to＋動詞の原形〉。',
      'will の否定文は will not（won\'t）、疑問文は Will を文頭に出す。',
      'be going to の否定文は be動詞のあとに not、疑問文は be動詞を文頭に出す。',
      '選択肢に going と to が別々に入っている場合、going to を1つのかたまりとして扱う。',
      '主語がheやsheのときは、be going toのbe動詞がisになることを忘れない。',
    ],
    sections: [
      {
        heading: 'will を使った文の組み立て',
        body: `will の文は骨組みがシンプルなので、まず will の位置を固定してから組み立てると速い。

■ 肯定文
　〈主語＋will＋動詞の原形〉
　I will help you.（手伝います）
　選択肢にhelpsやhelpingがあっても使わない。willのあとは必ず原形。

■ 否定文
　〈主語＋will not（won't）＋動詞の原形〉
　She will not come tomorrow.
　選択肢に won't が1語で入っていることが多いので見落とさない。

■ 疑問文と答え方
　〈Will＋主語＋動詞の原形〜?〉
　Will you help me? — Yes, I will. / No, I won't.
　答えるときも will をそのまま使う（does や do は使わない）。

例題）（ will / it / tomorrow / rain )?
→ Will it rain tomorrow?
★ポイント：疑問文は Will を文頭に出すだけで、あとの語順は肯定文と同じ（主語＋動詞の原形）。`,
      },
      {
        heading: 'be going to を使った文の組み立て',
        body: `be going to は「be動詞」が主語によって変わる点が、並べかえの最大の注意点になる。

■ be動詞の使い分け
　I → am　he/she/it → is　you/we/they → are

■ 肯定文
　〈主語＋be動詞＋going to＋動詞の原形〉
　We are going to visit Kyoto next month.

■ 否定文
　〈主語＋be動詞＋not＋going to＋動詞の原形〉
　He is not going to join the club.

■ 疑問文
　〈be動詞＋主語＋going to＋動詞の原形〜?〉
　Are you going to study abroad?
　— Yes, I am. / No, I'm not.

例題）（ is / going / she / to / buy ) a new bike.
→ She is going to buy a new bike.
★ポイント：goingとtoは必ずセットで隣り合わせる。選択肢の中でこの2語を先にくっつけてから、残りを組み立てるとミスが減る。`,
      },
      {
        heading: 'willとbe going toの使い分けが並べかえに出るとき',
        body: `並べかえ問題では、日本語訳のニュアンスからどちらを使うかを判断させる問題も出る。

■ 判断のポイント
　その場で決めた意志・単純な予測 → will
　　「電話が鳴っている。私が出るよ。」→ I will answer it.
　前もって決めていた予定・根拠のある予測 → be going to
　　「来週、京都に行く予定です。」→ I am going to visit Kyoto next week.

■ 天気予報のような根拠がある予測は be going to が好まれる
　Look at those clouds! It is going to rain soon.
　（あの雲を見て！もうすぐ雨が降りそうだ＝目に見える根拠がある）

■ 並べかえでの見分け方
選択肢に going と to の両方が含まれていれば be going to の文、含まれていなければ will の文だと即座に判断できる。まずこの1点を確認してから残りの語を組み立てるのが最短ルート。

⚠注意：be going to の疑問文で be動詞を忘れて Going to you visit Kyoto? のように並べてしまうミスが多い。疑問文は必ず be動詞を文頭に出す。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「彼らは来年アメリカに行く予定ではありません。」（ going / not / they / are / to ) go to America next year.',
        wrongAnswer: 'They not are going to',
        trapExplanation: 'not をbe動詞の前に置いてしまい、be動詞＋notの順番を逆にしている。',
        correctAnswer: 'They are not going to go to America next year.',
        correctExplanation: 'be going to の否定文は〈be動詞＋not＋going to〉の順。notはbe動詞の直後に置く。areとnotの順序を間違えないよう、be動詞を先に確定してからnotを続ける習慣をつける。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ③：助動詞（must / have to / should / may）の文',
    description: '4つの助動詞を使った文を、否定文・疑問文もふくめて正しい語順で組み立てる練習',
    intro: 'must・have to・should・mayはどれも「動詞の原形」を後ろに置くという共通点があるが、否定文の作り方や意味はそれぞれ違う。並べかえ問題ではこの違いをつかんでいないと、正しい語を選べても順番を間違えてしまう。',
    order: 8082,
    studyPeriod: '中2',
    keyPoints: [
      '4つとも骨組みは〈主語＋助動詞＋動詞の原形〉で共通している。',
      'must not は「〜してはいけない（禁止）」、don\'t have to は「〜する必要がない（不必要）」と意味が正反対。',
      'have to は一般動詞のあつかいなので、疑問文・否定文に do/does を使う。',
      'should の否定文は should not（shouldn\'t）。',
      'may の疑問文 May I 〜? は「許可を求める」丁寧な表現。',
      'has to になるのは主語が3人称単数（he/she/it）のときだけ。',
    ],
    sections: [
      {
        heading: 'must と have to：形の違いに注意',
        body: `must と have to は「〜しなければならない」という意味では似ているが、文法上の仲間が違うため、否定文・疑問文の作り方がまったく異なる。

■ must（助動詞のなかま）
　肯定文：〈主語＋must＋動詞の原形〉　You must finish this today.
　否定文：〈主語＋must not（mustn't）＋動詞の原形〉　You must not open the door.（〜してはいけない＝禁止）
　※mustには疑問文がほとんど使われず、Do I have to 〜? で代用するのが実用的。

■ have to（一般動詞のなかま）
　肯定文：〈主語＋have/has to＋動詞の原形〉　She has to get up early.
　否定文：〈主語＋do/does not have to＋動詞の原形〉　You don't have to hurry.（〜する必要がない＝不必要）
　疑問文：〈Do/Does＋主語＋have to＋動詞の原形〜?〉　Do you have to leave now?

■ 並べかえでの最重要ポイント
must not（禁止）と don't have to（不要）は意味がまったく逆になる。日本語訳が「〜しなくてよい」なら don't have to、「〜してはいけない」なら must not を選ぶ。この判断を先に済ませてから語順を組み立てる。

例題）（ have / you / to / don't / go ) to school today.
→ You don't have to go to school today.（今日は学校に行く必要がない）`,
      },
      {
        heading: 'should と may：助言と許可・推量の語順',
        body: `should と may は must・have to より意味がやわらかく、日常会話でもよく使われる。

■ should（〜したほうがよい・〜すべきだ）
　肯定文：〈主語＋should＋動詞の原形〉　You should see a doctor.
　否定文：〈主語＋should not（shouldn't）＋動詞の原形〉　You shouldn't eat too much.
　疑問文：〈Should＋主語＋動詞の原形〜?〉　Should I call him now?

■ may（許可・推量）
　許可：May I use your pen?（使ってもいいですか＝丁寧に許可を求める）
　　— Yes, you may. / No, you may not.
　推量：It may rain this afternoon.（〜かもしれない）
　否定：You may not park here.（〜してはいけない＝許可しない）

■ 並べかえでのコツ
May で始まる疑問文は「May I 〜?」の形が非常に多い。選択肢に May と I がある疑問文は、まずこの2語を文頭にセットしてから残りを組み立てるとよい。

例題）（ I / may / open / the window )?
→ May I open the window?（窓を開けてもいいですか）`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「今日は宿題をする必要がありません。」（ do / you / to / don\'t / have ) your homework today.',
        wrongAnswer: 'You must not do your homework today.',
        trapExplanation: '「〜する必要がない」という日本語を見て、似た意味の禁止表現 must not を選んでしまう。must not は「してはいけない」という禁止の意味になり、日本語とは逆の意味になってしまう。',
        correctAnswer: 'You don\'t have to do your homework today.',
        correctExplanation: '「〜する必要がない（不必要）」は don\'t have to で表す。must not（してはいけない）とdon\'t have to（する必要がない）は意味が正反対なので、並べかえの前に日本語のニュアンスを正確に確認することが大切。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ④：不定詞（3用法）を含む文',
    description: 'to不定詞の名詞的・形容詞的・副詞的用法を、並べかえ問題の中で見分けて組み立てる',
    intro: '不定詞そのものの意味は知っていても、並べかえ問題になると「to」をどこに置くべきか迷ってしまうことが多い。ここでは3つの用法ごとに、語順の作り方を整理する。',
    order: 8083,
    studyPeriod: '中2',
    keyPoints: [
      'to不定詞は必ず〈to＋動詞の原形〉のセットで動かす。',
      '名詞的用法は主語・目的語・補語の位置に置く。',
      '形容詞的用法は修飾する名詞のすぐ後ろに置く。',
      '副詞的用法（目的）は文の後ろに置くことが多く「〜するために」の意味になる。',
      'something / anything などは、形容詞＋to不定詞の順で後ろから修飾する（something cold to drink）。',
      '疑問詞＋to不定詞（how to, what to など）は1つのかたまりとして動かす。',
    ],
    sections: [
      {
        heading: '名詞的用法・形容詞的用法の並べかえ',
        body: `to不定詞のかたまり（to＋動詞の原形）はバラバラにせず、1つの単位として扱うのが並べかえの基本方針である。

■ 名詞的用法（主語・目的語・補語）
　My dream is to become a teacher.（私の夢は先生になることだ＝補語）
　I want to visit Okinawa.（沖縄を訪れたい＝目的語）
　組み立て手順：まず動詞（is, want など）を見つけ、そのあとにto＋動詞の原形をセットで続ける。

■ 形容詞的用法（名詞を後ろから修飾）
　I have a lot of homework to do.（やるべき宿題がたくさんある）
　修飾する名詞（homework）の直後にto不定詞を置く。名詞の前には置かない。

■ something / anything を含む特別な語順
　「何か冷たい飲み物」→ something cold to drink
　〈something（代名詞）＋形容詞＋to不定詞〉の順で、形容詞も名詞の後ろに回る点に注意。

例題）（ something / drink / to / cold ) を求める文で
→ something cold to drink
★ポイント：coldとto drinkの順番を逆にしないこと。形容詞が先、to不定詞が後ろ。`,
      },
      {
        heading: '副詞的用法・疑問詞+to不定詞の並べかえ',
        body: `■ 副詞的用法（目的：〜するために）
　I went to the library to study math.（数学を勉強するために図書館へ行った）
　文の骨組み（I went to the library）を先に完成させ、その後ろに to不定詞を続けるのが基本の並べかえ順序。

■ 副詞的用法（感情の原因：〜して）
　I was glad to see you.（あなたに会えてうれしかった）
　感情を表す形容詞（glad, happy, sad など）の直後にto不定詞を続ける。

■ 疑問詞＋to不定詞
　how to〜（〜の仕方）、what to〜（何を〜すべきか）、where to〜（どこで〜すべきか）
　Please tell me how to use this machine.
　疑問詞とto不定詞は必ずセットで動かす。tell meのあとに疑問詞＋to不定詞を続ける語順を崩さない。

例題）（ me / how / tell / to / get ) to the station.
→ tell me how to get to the station
★ポイント：howとtoを離してしまうミスが多い。howとto get はワンセットとして扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「私には読むべき本がたくさんある。」I have (many / to / books / read).',
        wrongAnswer: 'I have to read many books.',
        trapExplanation: 'to readをhaveの直後に置いてしまい、「読むために持っている」のような別の意味の文（さらにhave toと誤読されやすい形）を作ってしまう。',
        correctAnswer: 'I have many books to read.',
        correctExplanation: '形容詞的用法のto不定詞は、修飾する名詞（books）の直後に置く。〈have＋名詞＋to不定詞〉の順で「〜すべき名詞を持っている」という意味になる。haveの直後にtoを置くと have to（〜しなければならない）と紛れるので注意。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ⑤：動名詞を含む文',
    description: '動名詞（-ing）を目的語・主語・前置詞の目的語として使う文を正しい語順で組み立てる',
    intro: '動名詞は不定詞と形が似ているぶん、並べかえ問題では「どちらの形を使うべきか」で迷いやすい。ここでは動名詞だけが使える場面を整理し、確実に組み立てられるようにする。',
    order: 8084,
    studyPeriod: '中2',
    keyPoints: [
      '動名詞は動詞の-ing形で「〜すること」という名詞の働きをする。',
      'enjoy, finish, stop, mind, give upなどは動名詞だけを目的語にとる。',
      '前置詞（at, in, of, forなど）の直後は必ず動名詞になる。to不定詞は使えない。',
      '動名詞は主語にもなれる（Reading books is fun.）。',
      'be good at, look forward toなどのtoは前置詞なので、後ろは動名詞。',
      '動名詞と現在分詞（進行形の-ing）は形が同じなので、文中の働きで見分ける。',
    ],
    sections: [
      {
        heading: '目的語・主語になる動名詞の並べかえ',
        body: `■ 動名詞を目的語にとる動詞（並べかえ頻出10語）
　enjoy, finish, stop, mind, avoid, give up, practice, consider, suggest, keep
　He finished cleaning his room.（部屋の掃除を終えた）
　組み立て手順：動詞（finished）の直後に動名詞（cleaning）を続け、その後ろに目的語（his room）を置く。

■ 動名詞が主語になる文
　Reading books is my hobby.（読書は私の趣味だ）
　主語の位置に動名詞を置き、そのあとにbe動詞（単数あつかいなのでis）を続ける。動名詞が主語のときは常に単数として扱う点に注意。

例題）（ is / swimming / my / favorite / sport )
→ Swimming is my favorite sport.
★ポイント：動名詞が主語のとき、be動詞をareにしてしまうミスが多い。動名詞句はひとかたまりで単数あつかい。`,
      },
      {
        heading: '前置詞のあとの動名詞と、慣用表現の語順',
        body: `■ 前置詞＋動名詞は鉄則
　前置詞（at, in, of, for, about, withなど）の直後に動詞を続けるときは、必ず動名詞にする。to不定詞は絶対に使えない。
　She is interested in learning Chinese.（中国語を学ぶことに興味がある）
　I'm good at playing the piano.（ピアノを弾くのが得意だ）

■ look forward to のtoは前置詞
　I'm looking forward to seeing you.（あなたに会うのを楽しみにしています）
　このtoは不定詞のtoではなく前置詞のtoなので、後ろは動名詞になる。並べかえでは to seeing のように to の直後に -ing 形を続ける形を覚えておく。

■ go ~ing の形
　We went shopping yesterday.（買い物に行った）
　goのあとに動名詞を直接続ける決まった言い方。go to shopping としないこと。

例題）（ looking / to / forward / seeing / am ) you soon.
→ I am looking forward to seeing you soon.
★ポイント：toのあとにseeを原形のまま置くミスが多い。toが前置詞の働きをしているときは必ずseeingにする。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「彼女は音楽を聞くことを楽しんでいる。」She (to / enjoys / music / listening).',
        wrongAnswer: 'She enjoys to listening music.',
        trapExplanation: 'enjoyの後ろにtoを置いてしまい、動名詞と不定詞の形を混ぜてしまっている。enjoyはto不定詞を目的語にとれない動詞である。',
        correctAnswer: 'She enjoys listening to music.',
        correctExplanation: 'enjoyは動名詞だけを目的語にとる動詞なので、直後にはto不定詞ではなくlisteningを置く。また「〜を聞く」はlisten toという決まった形なので、toはlistening のあとに置く（listening to music）。動名詞のto不定詞化と、listen toの語順を同時に混同しないよう注意する。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ⑥：SVOO（人＋物）の語順',
    description: '「人に物をあげる/教える」型の第4文型を、正しい語順で組み立てる',
    intro: '「私に本をくれた」のような文は、日本語の語順につられて英語でも「本を私に」の順で並べてしまいがちである。ここではSVOOの「人が先、物があと」という英語独特の語順を体にしみこませる。',
    order: 8085,
    studyPeriod: '中2',
    keyPoints: [
      'SVOOの基本語順は〈主語＋動詞＋人（〜に）＋物（〜を）〉。',
      'give, show, teach, tell, send, buy, make などがSVOOをとる代表的な動詞。',
      '人が代名詞のときも語順は変わらない（give me it ではなく give it to me が自然）。',
      'SVOOはSVO＋to/forの文に書きかえられる（動詞によってtoかforを使い分ける）。',
      'ask は書きかえのときに of を使う特別な動詞。',
      '疑問文・否定文でも「人＋物」の順は崩れない。',
    ],
    sections: [
      {
        heading: 'SVOOの基本語順と、日本語との違い',
        body: `■ SVOOの骨組み
　〈主語＋動詞＋人＋物〉の順で、日本語の「〜に…を」と同じ順序になる点はむしろ覚えやすい。
　My father gave me a watch.（父は私に腕時計をくれた）
　She teaches us English.（彼女は私たちに英語を教える）

■ 並べかえの手順
① 動詞（give, teach, show, tell, send, buy, makeなど）を見つける。
② その直後に「人」を置く。
③ 最後に「物」を置く。
この順番を機械的に守れば、日本語の意味を深く考えなくても正しい語順が作れる。

例題）（ me / a / bought / bag / mother / my )
→ My mother bought me a bag.（母は私にかばんを買ってくれた）

⚠注意：日本語では「かばんを私に買ってくれた」のように物が先に来る言い方もできるが、英語のSVOOでは必ず人が先、物があと。この語順は例外なく守る。`,
      },
      {
        heading: '代名詞が入るときと、疑問文・否定文での語順',
        body: `■ 「物」が代名詞のときの言いかえ
　物の部分が it やthemなどの代名詞になると、SVOOのままでは不自然になり、SVO＋to/forの形にするのがふつう。
　△ Give me it.（不自然）
　○ Give it to me.（自然）
　並べかえ問題でも、選択肢にit/themとtoが両方あれば、この書きかえ形が正解になる可能性が高いと判断する。

■ 疑問文の語順
　Did you send her the letter?（彼女にその手紙を送りましたか）
　疑問文でも「人＋物」の順は変わらない。Did you send を文頭に出すだけで、あとはSVOOの語順のまま続ける。

■ 否定文の語順
　He didn't tell me the truth.（彼は私に真実を話さなかった）
　didn'tを動詞の前に置くだけで、「人＋物」の順序自体はそのまま保たれる。

例題）（ it / to / give / me )
→ Give it to me.
★ポイント：itを見た瞬間に「SVOOのままではなく、to/forを使う形かもしれない」と考える習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「その本を私にください。」Please (me / the / book / give).',
        wrongAnswer: 'Please give the book me.',
        trapExplanation: '日本語の「その本を私に」の順につられて、物（the book）を先、人（me）をあとに置いてしまっている。',
        correctAnswer: 'Please give me the book.',
        correctExplanation: 'SVOOの語順は〈動詞＋人＋物〉で固定されている。日本語の助詞の順序に引きずられず、英語では必ず「人が先、物があと」という語順のルールに従って組み立てる。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ⑦：SVOC（O＝Cの関係）の語順',
    description: '「OをCにする/呼ぶ」型の第5文型を、O＝Cの関係を意識して正しく組み立てる',
    intro: 'SVOCは見た目がSVOOと似ているため混同しやすいが、「OとCがイコールの関係にあるか」を確認すれば簡単に見分けられる。並べかえの前にこの関係をチェックする習慣をつける。',
    order: 8086,
    studyPeriod: '中2',
    keyPoints: [
      'SVOCの骨組みは〈主語＋動詞＋O＋C〉で、O＝Cの関係が成り立つ。',
      'call, name はOのあとに名詞を置く（O＝名詞）。',
      'make, keep, find, leaveはOのあとに形容詞を置くことが多い（O＝形容詞）。',
      'SVOOはO≠Oの関係（人と物は別物）、SVOCはO＝Cの関係という違いで見分ける。',
      '補語Cの位置には名詞または形容詞が入り、副詞は入らない。',
      'This movie made me happy. のように「物・事」が主語になる文もよく出題される。',
    ],
    sections: [
      {
        heading: 'SVOCの基本語順とSVOOとの見分け方',
        body: `■ SVOCの骨組み
　〈主語＋動詞＋O＋C〉で、Oのあとに続くCはOの状態や名前を説明する。
　We call him Ken.（私たちは彼をケンと呼ぶ）→ him＝Kenの関係が成り立つ
　This news made her happy.（この知らせは彼女を幸せにした）→ her＝happyの関係が成り立つ

■ SVOOとの決定的な違い
　SVOO：I gave him a book.（彼と本は別物＝O≠O）
　SVOC：We call him Ken.（彼＝ケン、イコールの関係＝O＝C）
　並べかえで迷ったら、2つの名詞（または名詞と形容詞）の間に「＝（イコール）」を入れて意味が通るかを確認する。通ればSVOC、通らなければSVOOの可能性が高い。

例題）（ him / Ken / call / we )
→ We call him Ken.
★ポイント：callのあとの語順は「O（呼ばれる人）→C（呼び名）」。逆にするとWe call Ken him.のような不自然な文になる。`,
      },
      {
        heading: '形容詞が補語になる文の組み立て',
        body: `■ make / keep / find / leave ＋ O ＋ 形容詞
　make：〜を…（の状態）にする　This song makes me happy.
　keep：〜を…（の状態）に保つ　Please keep the room clean.
　find：〜が…だとわかる　I found the book interesting.
　leave：〜を…のままにしておく　Don't leave the door open.

■ 並べかえの手順
① 動詞（make, keep, find, leaveなど）を確定する。
② その直後にO（人・物）を置く。
③ 最後にC（形容詞）を置く。Cの位置には名詞や形容詞は入るが、副詞（happily など）は入らない点に注意。

例題）（ the / room / keep / clean )
→ Keep the room clean.（部屋をきれいに保ちなさい）

⚠注意：Keep the room cleanly. のように副詞を補語の位置に置いてしまうミスが非常に多い。補語には形容詞のcleanを使い、副詞のcleanlyは使わない。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「その映画は私を悲しくさせた。」The movie (sad / made / me).',
        wrongAnswer: 'The movie made sad me.',
        trapExplanation: 'O（me）とC（sad）の順序を逆にしてしまい、「O＋C」ではなく「C＋O」の順で並べている。',
        correctAnswer: 'The movie made me sad.',
        correctExplanation: 'SVOCの語順は必ず〈動詞＋O＋C〉。madeのあとにまず目的語のme、その後ろに補語のsadを続ける。me＝sad（私＝悲しい）という関係が成り立っているかを確認すると語順のミスを防げる。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ⑧：There is / areの文',
    description: '存在を表すThere is/are構文を、疑問文・否定文もふくめて正しい語順で組み立てる',
    intro: '「〜がある」を表すThere is/areは、主語のように見えるThereが実は意味を持たない語であるという特殊な構造をしている。この構造の正体を理解すれば、並べかえでも迷わなくなる。',
    order: 8087,
    studyPeriod: '中2',
    keyPoints: [
      '肯定文の骨組みは〈There＋be動詞＋主語（実際の物・人）＋場所〉。',
      'be動詞は後ろに続く名詞の数で決める（単数・不可算名詞→is、複数名詞→are）。文頭のThereではなく、あとに続く名詞を見て決める点が最重要。',
      '否定文はbe動詞のあとにnotを置く（There isn\'t / There aren\'t）。',
      '疑問文はbe動詞をThereの前に出す（Is there 〜? / Are there 〜?）。',
      '特定の人・物（the, my, thisが付く名詞や固有名詞）にはThere is/areは使わない。',
      '過去のことを言うときはThere was / were になる。',
    ],
    sections: [
      {
        heading: '肯定文の語順とbe動詞の決め方',
        body: `■ There is/areの骨組み
　〈There＋be動詞＋主語＋場所を表す語句〉
　There is a cat on the sofa.（ソファの上に猫が1匹いる）
　There are three books on the desk.（机の上に本が3冊ある）

■ be動詞をどう決めるか（並べかえの最重要ポイント）
　There自体は「そこに」という意味を持たない形式的な語で、文の本当の主語はbe動詞のあとに来る名詞である。したがって、be動詞（is/are）はThereではなく、後ろの名詞の数に合わせて選ぶ。
　　a cat（単数）→ is
　　three books（複数）→ are

■ 並べかえの手順
① 選択肢の中の名詞が単数か複数かを確認する。
② その数に合わせてisかareを選ぶ。
③ 〈There＋be動詞＋名詞＋場所〉の順に並べる。

例題）（ are / there / the / in / apples / box )
→ There are apples in the box.（appleが複数なのでare）
★ポイント：is/areを先に感覚で選ばず、必ず後ろの名詞の数を先に確認してから決める。`,
      },
      {
        heading: '否定文・疑問文の語順と、使えない場合',
        body: `■ 否定文
　〈There＋be動詞＋not＋主語＋場所〉
　There isn't any milk in the fridge.（冷蔵庫に牛乳が全くない）
　There aren't any students in the room.

■ 疑問文
　〈be動詞＋there＋主語＋場所〜?〉
　Is there a bank near here?（この近くに銀行はありますか）
　— Yes, there is. / No, there isn't.
　Are there any parks in this town?
　— Yes, there are. / No, there aren't.
　答え方でもthereをそのまま使う点に注意（it や they には言いかえない）。

■ There is/areが使えない場合
　特定できる物・人（the, my, this, that が付く名詞や固有名詞）には使わない。
　誤：There is the cat on the sofa.
　正：The cat is on the sofa.（すでに特定されている猫は、その猫自身を主語にする）

例題）（ there / a / near / is / station / here )?
→ Is there a station near here?`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「机の上に鉛筆が2本あります。」There (two / are / pencils) on the desk.',
        wrongAnswer: 'There is two pencils on the desk.',
        trapExplanation: 'Thereを主語のように感じて「単数っぽい」という思い込みでisを選んでしまう。実際にはThere自体には数の概念がなく、後ろの名詞（two pencils）で判断しなければならない。',
        correctAnswer: 'There are two pencils on the desk.',
        correctExplanation: 'be動詞は文の本当の主語であるあとに続く名詞（two pencils＝複数）に合わせる。There isやThere areを選ぶときは、Thereではなく必ずbe動詞の直後に来る名詞を見て単数・複数を判断する。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ⑨：受動態の基本文',
    description: 'be動詞＋過去分詞の受動態を、肯定文・否定文・疑問文の形で正しく組み立てる',
    intro: '受動態は「〜される」という意味だけでなく、be動詞と過去分詞のペアをどこに置くかという語順の感覚が問われる。ここでは能動態との対応を意識しながら基本の型を固める。',
    order: 8088,
    studyPeriod: '中2',
    keyPoints: [
      '受動態の骨組みは〈主語＋be動詞＋過去分詞〉。',
      'be動詞は主語の人称・数と、文の時制（現在・過去）の両方に合わせて選ぶ。',
      '「〜によって」を表すときはby＋動作をした人を文末に置く。',
      '否定文はbe動詞のあとにnotを置き、疑問文はbe動詞を文頭に出す。',
      '規則動詞の過去分詞は-edだが、不規則動詞は1語ずつ形を覚える必要がある。',
      '能動態の目的語が受動態の主語になり、能動態の主語がbyのあとに回る、という対応関係を理解する。',
    ],
    sections: [
      {
        heading: '肯定文の語順と、能動態との対応',
        body: `■ 受動態の骨組み
　〈主語＋be動詞＋過去分詞〉
　This picture was painted by a famous artist.（この絵は有名な画家によって描かれた）

■ 能動態から受動態への対応関係
　能動態：A famous artist painted this picture.（S＋V＋O）
　受動態：This picture was painted by a famous artist.（能動態のOが主語に、Sがbyのあとに）
　並べかえでは、まず「何が主語になっているか（＝能動態では目的語だったもの）」を確認し、その主語に合わせてbe動詞を選ぶ。

■ be動詞の選び方
　主語の人称・数と、文全体の時制（現在か過去か）の両方を見て決める。
　　This letter is written in English.（現在・単数→is）
　　These letters were written in English.（過去・複数→were）

例題）（ was / this / by / built / house / him )
→ This house was built by him.（この家は彼によって建てられた）
★ポイント：byのあとには「動作をした人」がくる。主語（house）とbyのあとの人（him）を逆にしないこと。`,
      },
      {
        heading: '否定文・疑問文の語順とbyの省略',
        body: `■ 否定文
　〈主語＋be動詞＋not＋過去分詞〉
　This song is not sung in Japan.（この歌は日本では歌われていない）

■ 疑問文
　〈be動詞＋主語＋過去分詞〜?〉
　Is this room cleaned every day?（この部屋は毎日掃除されますか）
　— Yes, it is. / No, it isn't.

■ by 〜 を省略する場合
　「だれが行ったか」がわからない、または重要でないときは、by 〜 を省略する。
　English is spoken in many countries.（英語は多くの国で話されている＝話す人を特定する必要がない）
　並べかえの選択肢にbyや動作主の語がなければ、そのまま過去分詞で文を終える形が正解になる。

例題）（ isn't / cleaned / room / this )every day.
→ This room isn't cleaned every day.
★ポイント：notの位置はbe動詞の直後。過去分詞の前後を間違えて過去分詞の後ろにnotを置かないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「これらのケーキは彼女によって作られた。」These cakes (by / made / were / her).',
        wrongAnswer: 'These cakes was made by her.',
        trapExplanation: '主語These cakesが複数であることを見落とし、単数扱いのwasを選んでしまう。',
        correctAnswer: 'These cakes were made by her.',
        correctExplanation: 'be動詞は主語の数に合わせて選ぶ。These cakesは複数名詞なので、過去の受動態ではwereを使う。並べかえの前に主語が単数か複数かを必ず確認する習慣をつける。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ⑩：接続詞（when / if / because / that）を使った文',
    description: '従属接続詞を使った複文を、主節・従属節のつながりを意識して正しく組み立てる',
    intro: '接続詞を含む並べかえ問題では、2つの節（主語＋動詞のかたまり）をどうつなぐかがポイントになる。ここではwhen・if・because・thatの4つに絞って、複文の組み立て方を練習する。',
    order: 8089,
    studyPeriod: '中2',
    keyPoints: [
      '接続詞は2つの文（節）をつなぐ働きをし、そのあとには〈主語＋動詞〉が続く。',
      'when（〜するとき）、if（もし〜なら）、because（〜だから）はどれも副詞節を作る接続詞。',
      '従属節が文頭に来るときは、主節との間にコンマを置く。従属節が後ろに来るときはコンマ不要。',
      'if節・when節が「未来の内容」でも、節の中の動詞は現在形にする。',
      'thatは動詞の目的語になる節（〜ということ）を作り、think, know, hopeなどの後ろによく使われる。',
      '接続詞のthatは会話ではよく省略されるが、書く問題では明記されることが多い。',
    ],
    sections: [
      {
        heading: 'when・if・becauseで2つの節をつなぐ',
        body: `■ 基本の考え方
　接続詞のうしろには必ず〈主語＋動詞〉のセット（節）が続く。並べかえでは、まず接続詞を見つけ、そのすぐあとに主語・動詞を続けるという手順で組み立てる。

■ when（〜するとき）
　When I got home, it was raining.
　（家に着いたとき、雨が降っていた）

■ if（もし〜なら）
　If it is sunny tomorrow, we will go on a picnic.
　（もし明日晴れたら、ピクニックに行くつもりだ）
　★最重要ポイント：if節の中は未来のことでも現在形（is）を使う。will beとしないこと。

■ because（〜だから）
　I stayed home because I was sick.
　（病気だったので家にいた）
　becauseは理由を表す節を作り、通常は主節のあとに続けることが多い。

■ 語順のルール（コンマの有無）
　接続詞の節が文頭：When I got home, it was raining.（コンマが必要）
　接続詞の節が後ろ：It was raining when I got home.（コンマ不要）

例題）（ tomorrow / rains / if / it ), we will stay home.
→ If it rains tomorrow, we will stay home.`,
      },
      {
        heading: 'thatで動詞の目的語になる節をつなぐ',
        body: `■ thatの働き
　I think that he is right.（彼は正しいと思う）
　thatは「〜ということ」という意味で、think, know, hope, believeなどの動詞の目的語になる節を作る。thatのあとにも〈主語＋動詞〉が続く。

■ 並べかえの手順
① 動詞（think, know, hopeなど）を見つける。
② その直後にthatを置く（省略されている場合もある）。
③ thatのあとに〈主語＋動詞〉の節を続ける。

例題）（ that / think / he / I / busy / is )
→ I think that he is busy.

■ thatの省略
　会話や自由英作文ではthatを省略することも多い。
　I think he is busy.（thatを省略しても意味は同じ）
　並べかえの選択肢にthatが含まれていなければ、省略された形で文を作ればよい。

⚠注意：接続詞のthatと、指示代名詞のthat（あれ、それ）を混同しないこと。動詞のすぐあとに来て〈主語＋動詞〉が続くthatは接続詞である。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「もし明日雨が降れば、私たちは家にいるつもりです。」If it (tomorrow / rains / will rain), we will stay home.',
        wrongAnswer: 'If it will rain tomorrow',
        trapExplanation: '文全体が未来の内容なので、if節の中の動詞もwill rainにしてしまう。',
        correctAnswer: 'If it rains tomorrow, we will stay home.',
        correctExplanation: '時・条件を表す副詞節（when, ifなど）の中では、未来のことであっても動詞は現在形を使うという決まりがある。主節（we will stay home）だけがwillを使い、if節の中はrainsのままにする。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    title: '誤文訂正①：時制の誤り（過去進行形・未来表現）',
    description: '過去進行形と未来表現（will / be going to）に関する誤文を見つけて正しく直す練習',
    intro: '誤文訂正問題は、正しい文をゼロから作るのではなく「どこが間違っているか」を見つける力が試される。時制のまちがいは特に見落としやすいので、チェックすべきポイントを型として身につける。',
    order: 8090,
    studyPeriod: '中2',
    keyPoints: [
      '誤文訂正では、まず動詞（またはbe動詞）の形に注目する。',
      '過去進行形はwas/wereと主語の一致を必ず確認する。',
      'be going toのbe動詞を忘れている誤りが非常に多い。',
      'willのあとに動詞のing形やs付きの形を置く誤りに注意する。',
      'when節・if節の中でwillを使ってしまう誤りは頻出パターンの1つ。',
      '下線部が複数ある問題では、まず時制に関係する下線から確認すると効率がよい。',
    ],
    sections: [
      {
        heading: '過去進行形の誤りパターン',
        body: `■ パターン①：be動詞の主語との不一致
　誤：They was watching TV at that time.
　正：They were watching TV at that time.
　→ 主語theyは複数なので、wasではなくwereを使う。

■ パターン②：be動詞の抜け落ち
　誤：I studying English when you called.
　正：I was studying English when you called.
　→ 動詞のing形だけでは文が成り立たない。必ずbe動詞とセットで使う。

■ パターン③：when節の中まで進行形にしてしまう
　誤：I was reading a book when he was coming into the room.
　正：I was reading a book when he came into the room.
　→ 「割りこんだ一瞬の動作」は過去形にする。継続していた背景の動作だけが過去進行形。

■ 見つけ方のコツ
下線部にing形の動詞があれば、その直前にbe動詞があるか、あればそれが主語と一致しているかを必ず確認する。`,
      },
      {
        heading: '未来表現の誤りパターン',
        body: `■ パターン①：be going toのbe動詞の抜け落ち
　誤：She going to visit her aunt next week.
　正：She is going to visit her aunt next week.
　→ going toの前には必ずbe動詞（am/is/are）が必要。

■ パターン②：willのあとに原形以外を置く
　誤：He will comes tomorrow.
　正：He will come tomorrow.
　→ willのあとは主語が何であっても必ず動詞の原形。3人称単数でもsは付けない。

■ パターン③：if節・when節の中でwillを使う
　誤：If it will be sunny tomorrow, we will go hiking.
　正：If it is sunny tomorrow, we will go hiking.
　→ 時・条件を表す副詞節の中では、未来のことでも現在形を使う。

■ パターン④：be動詞と主語の不一致（be going to）
　誤：I are going to join the club.
　正：I am going to join the club.
　→ 主語Iにはamを使う。areやisと混同しない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。He will comes to the party if he has time.',
        wrongAnswer: 'He will comes to the party if he have time.（hasをhaveに直してしまう）',
        trapExplanation: '誤りが2箇所あるように見えて、if節の動詞hasを主語heに合わない形だと勘違いしてしまう。実際にはhasはheに正しく一致しており、誤りはwill comesの部分だけである。',
        correctAnswer: 'He will come to the party if he has time.',
        correctExplanation: 'willのあとの動詞は主語に関係なく常に原形。comesではなくcomeにする。if節の中のhasは主語he（3人称単数）に正しく一致しているので、直す必要はない。誤文訂正では「正しい部分まで直してしまう」ミスにも注意する。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    title: '誤文訂正②：助動詞のあとの動詞の形の誤り',
    description: 'must / have to / should / mayなど助動詞にまつわる誤文を見つけて正しく直す練習',
    intro: '助動詞の問題での誤りは、意味の勘違いよりも「あとに続く動詞の形」に集中して出題される。ここではよくある誤りのパターンを型として整理し、見つける速度を上げる。',
    order: 8091,
    studyPeriod: '中2',
    keyPoints: [
      '助動詞（must, should, may, will, canなど）のあとは必ず動詞の原形。',
      'have toは一般動詞のあつかいなので、3人称単数のときはhas toになる。',
      'must notとdon\'t have toは意味が逆になるので、文脈と合っているか確認する。',
      'have toの疑問文・否定文でdo/doesを忘れる誤りが多い。',
      'shouldの後ろにtoを入れてしまう誤り（should to〜）は頻出のひっかけ。',
      '2つの助動詞を並べて使うこと（will can〜など）はできない、という原則も確認する。',
    ],
    sections: [
      {
        heading: 'must / should / mayの後ろの形',
        body: `■ パターン①：助動詞のあとにto不定詞を置いてしまう
　誤：You should to see a doctor.
　正：You should see a doctor.
　→ should, must, mayなどの助動詞のあとは動詞の原形。toは不要。has toやwant toと混同しやすいので注意。

■ パターン②：助動詞のあとに3人称単数のsを付けてしまう
　誤：He must comes home early.
　正：He must come home early.
　→ 助動詞の後ろの動詞は主語が何であってもsを付けない。

■ パターン③：must notとdon't have toの意味の取り違え
　誤：You don't have to open the door.（「開けてはいけない」のつもりで使っている場合）
　正：You must not open the door.
　→ don't have toは「〜する必要がない」であり「〜してはいけない」ではない。禁止を表したいときはmust notを使う。

■ 見つけ方のコツ
下線部の直前にmust, should, mayなどの助動詞があれば、その動詞が原形になっているかを最優先で確認する。`,
      },
      {
        heading: 'have toの一般動詞的な性質にまつわる誤り',
        body: `■ パターン①：3人称単数でhas toにし忘れる
　誤：She have to finish her homework.
　正：She has to finish her homework.
　→ have toは一般動詞と同じ扱いなので、主語が3人称単数（he/she/it）のときはhas toになる。

■ パターン②：疑問文・否定文でdo/doesを忘れる
　誤：You have to go now?
　正：Do you have to go now?
　誤：She doesn't has to come.
　正：She doesn't have to come.
　→ 疑問文・否定文にはdo/doesを使い、そのあとのhave toは原形（have）に戻す。hasのままにしてしまう二重の誤りが多い。

■ パターン③：2つの助動詞を並べて使ってしまう
　誤：She will can speak English well.
　正：She will be able to speak English well.
　→ 助動詞は1つの動詞に対して2つ並べて使えない。canの未来を表したいときはwill be able toに言いかえる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。My sister have to practice the piano every day.',
        wrongAnswer: 'My sister has to practices the piano every day.（動詞practiceにも誤ってsを付けてしまう）',
        trapExplanation: '主語が3人称単数であることに気づき、haveをhasに直すところまでは正しいが、have to のあとの動詞practiceにまで3人称単数のsを付けてしまう。have toのあとは常に動詞の原形である。',
        correctAnswer: 'My sister has to practice the piano every day.',
        correctExplanation: '3人称単数の主語に合わせてhaveをhasに直すのが正しい修正。ただしhas toのあとに続く動詞は、have to全体で1つの助動詞的なまとまりとして働くため、常に原形（practice）のままにする。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    title: '誤文訂正③：不定詞と動名詞の使い分けの誤り',
    description: '動詞の目的語として不定詞・動名詞のどちらを使うべきかを誤った文を見つけて直す練習',
    intro: '不定詞と動名詞はどちらも「〜すること」と訳せるため、動詞ごとの決まりを覚えていないと誤文に気づけない。ここでは頻出動詞を思い出しながら、誤りを見抜く力を養う。',
    order: 8092,
    studyPeriod: '中2',
    keyPoints: [
      'enjoy, finish, stop, mind, avoid, give upなどは動名詞だけを目的語にとる。',
      'want, hope, decide, plan, promiseなどはto不定詞だけを目的語にとる。',
      'remember, forget, tryは-ingとtoで意味が変わるので文脈で判断する。',
      '前置詞のあとは必ず動名詞。to不定詞のtoと前置詞のtoを混同しないよう注意する。',
      '疑問詞＋to不定詞（how to〜など）のtoを忘れる誤りにも注意する。',
      'to不定詞のtoのあとにing形を置いてしまう誤り（to swimming など）は代表的なひっかけ。',
    ],
    sections: [
      {
        heading: '動名詞だけをとる動詞・不定詞だけをとる動詞の誤り',
        body: `■ パターン①：動名詞だけをとる動詞にto不定詞を使ってしまう
　誤：He enjoys to play soccer.
　正：He enjoys playing soccer.
　→ enjoy, finish, stop, mind, avoid, give upのあとはto不定詞ではなく動名詞。

■ パターン②：to不定詞だけをとる動詞に動名詞を使ってしまう
　誤：I want playing the guitar.
　正：I want to play the guitar.
　→ want, hope, decide, plan, promise, wishのあとは動名詞ではなくto不定詞。

■ 覚え方のコツ
どちらの動詞を使うかは1語ずつ覚えるしかないが、「楽しむ・終える・やめる」のように今すでにしている（していた）動作にかかわる動詞は動名詞、「望む・決める・約束する」のようにこれからのことを表す動詞はto不定詞、という傾向をヒントとして使うと判断しやすい。

■ 見つけ方のコツ
動詞の直後にtoまたはing形があれば、その動詞が動名詞専用・不定詞専用のどちらのグループに属するかを思い出す。`,
      },
      {
        heading: 'remember/forget/tryと、前置詞のあとの動名詞の誤り',
        body: `■ パターン①：remember/forget/tryの意味の取り違え
　「彼女に会ったことを覚えている」→ I remember meeting her.（過去にしたことを覚えている＝動名詞）
　「彼女に会うのを覚えておいて」→ Remember to meet her.（これからすることを覚えておく＝to不定詞）
　誤って逆の形を使うと、意味が正反対になってしまう。

■ パターン②：前置詞のあとにto不定詞を置いてしまう
　誤：She is interested in to learn Chinese.
　正：She is interested in learning Chinese.
　→ 前置詞（in, at, of, forなど）のあとは必ず動名詞。to不定詞は絶対に使えない。

■ パターン③：look forward toのtoのあとにto不定詞の原形を置いてしまう
　誤：I'm looking forward to see you.
　正：I'm looking forward to seeing you.
　→ このtoは前置詞なので、あとには動名詞（seeing）が続く。to不定詞のtoと勘違いして原形（see）を置く誤りが非常に多い。

■ 見つけ方のコツ
直前が前置詞であれば、そのあとの動詞は無条件に-ing形にする、というルールをまず優先して確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。I am looking forward to visit Kyoto next month.',
        wrongAnswer: 'I am looking forward to visiting Kyoto next month.（正しく直せているように見えるが、なぜそうなるかを理解せず暗記だけで対応している例）',
        trapExplanation: '多くの受験生はto visitをto visitingに直せば良いと形だけ覚えているが、なぜそうなるのかを理解していないと、look forward to以外の似た表現（例：want to）でも誤ってingを付けてしまう二次的なミスにつながる。',
        correctAnswer: 'I am looking forward to visiting Kyoto next month.',
        correctExplanation: 'look forward toのtoは不定詞のtoではなく前置詞のtoである。前置詞のあとには動名詞が続くというルールに従い、visitをvisitingに直す。この理屈を理解しておけば、be used to〜ing（〜に慣れている）など似た形の表現にも正しく対応できる。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    title: '誤文訂正④：SVOOとSVOCの語順の誤り',
    description: '第4文型（SVOO）と第5文型（SVOC）の語順を取り違えた誤文を見つけて直す練習',
    intro: 'SVOOとSVOCはどちらも動詞のあとに2つの語句が続くため、語順を逆にしたり、補語の位置に間違った品詞を置いたりする誤りが起きやすい。文型そのものを見分ける視点から誤文を訂正する。',
    order: 8093,
    studyPeriod: '中2',
    keyPoints: [
      'SVOOは〈動詞＋人＋物〉、SVOCは〈動詞＋O＋C（O＝Cの関係）〉と型が違う。',
      'SVOOで人と物の順序を逆にする誤りに注意する。',
      'SVOOの物が代名詞のときは、SVO＋to/forの形にする方が自然。',
      'SVOCの補語の位置に副詞を置いてしまう誤りに注意する（形容詞が正しい）。',
      'giveなどSVOOをとる動詞と、makeなどSVOCをとる動詞を混同しないようにする。',
      '誤文訂正では、まず動詞の直後に来ている2つの語句がO＋Oの関係かO＋Cの関係かを判定する。',
    ],
    sections: [
      {
        heading: 'SVOOの語順の誤り',
        body: `■ パターン①：人と物の順序が逆
　誤：My uncle gave a camera me.
　正：My uncle gave me a camera.
　→ SVOOは〈動詞＋人＋物〉の順が鉄則。物を先に置いてしまう誤りが最も多い。

■ パターン②：代名詞をSVOOのままにしてしまう
　誤：Please give me it.
　正：Please give it to me.
　→ 物の部分が it/them などの代名詞になるときは、SVOOのままだと不自然になるため、SVO＋to（またはfor）の形に書きかえるのがふつう。

■ パターン③：forを使うべき動詞にtoを使ってしまう（逆も同様）
　誤：She made a cake to me.
　正：She made a cake for me.
　→ make, buy, cookなど「相手のためにしてあげる」意味の動詞はforを使う。give, show, teach, tellなど「相手に直接渡す・伝える」意味の動詞はtoを使う。この使い分けを誤ると誤文になる。`,
      },
      {
        heading: 'SVOCの語順・品詞の誤り',
        body: `■ パターン①：OとCの順序が逆
　誤：This news made happy her.
　正：This news made her happy.
　→ SVOCも〈動詞＋O＋C〉の順が鉄則。ここでもSVOOと同じく、後ろの2語の順序を逆にする誤りが多い。

■ パターン②：補語の位置に副詞を置いてしまう
　誤：Keep the room cleanly.
　正：Keep the room clean.
　→ 補語には形容詞（clean）を使う。副詞（cleanly）を置くと文法的に誤りになる。「〜の状態にする・保つ」という意味のmake, keep, findのあとには形容詞が来ると覚えておく。

■ パターン③：SVOOの動詞とSVOCの動詞を混同する
　誤：We call Ken him.（callをSVOOのように使ってしまっている）
　正：We call him Ken.
　→ callはSVOC（O＝Cの関係）をとる動詞。giveのようなSVOOの語順（人が先）と混同しないよう、「呼ばれる人（O）が先、呼び名（C）があと」という順番を意識する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。The letter made surprised him.',
        wrongAnswer: 'The letter made him surprising.（surprisedをsurprisingに直してしまう）',
        trapExplanation: 'OとCの語順を正しくhim surprisedに直せたとしても、感情動詞の分詞の使い分け（人が感じる側は過去分詞）を誤ってsurprisingにしてしまうという、二重のポイントが絡む誤りが起きやすい。',
        correctAnswer: 'The letter made him surprised.',
        correctExplanation: 'まずSVOCの語順を〈動詞＋O＋C〉に直し、madeのあとをhim surprisedの順にする。さらに、「彼が驚いた（感じる側）」なので過去分詞のsurprisedを使う。物・事が「驚かせる」側なら現在分詞surprisingになるが、ここでは人（him）が感じる側なので過去分詞が正しい。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    title: '誤文訂正⑤：There is/areと受動態の基本の誤り',
    description: 'There is/are構文と受動態の基本形にまつわる誤文を見つけて直す練習',
    intro: 'There is/areと受動態は、どちらも「be動詞の選び方」がミスの温床になる。この単元では2つの構文を続けて練習することで、be動詞をどこに注目して選ぶべきかを整理する。',
    order: 8094,
    studyPeriod: '中2',
    keyPoints: [
      'There is/areのbe動詞は、Thereではなくあとに続く名詞の数に合わせる。',
      '受動態のbe動詞は、主語の数と文全体の時制の両方に合わせる。',
      '受動態で過去分詞を原形や-ing形のままにしてしまう誤りに注意する。',
      'There is/areを特定できる名詞（the, my などが付く語）に使ってしまう誤りに注意する。',
      '受動態の否定文でnotの位置を間違える誤りに注意する。',
      '疑問文でbe動詞を文頭に出し忘れる誤りは、There is/are・受動態のどちらにも共通して起こる。',
    ],
    sections: [
      {
        heading: 'There is/areの誤りパターン',
        body: `■ パターン①：be動詞を後ろの名詞ではなくThereに合わせて選んでしまう
　誤：There is many students in the gym.
　正：There are many students in the gym.
　→ many students（複数）に合わせてareを選ぶ。Thereという語のイメージにつられてisを選ばないこと。

■ パターン②：特定できる名詞にThere is/areを使ってしまう
　誤：There is the cat on the sofa.
　正：The cat is on the sofa.
　→ the, my, thisなどが付いて特定された名詞には、There is/areを使わず、その名詞自体を主語にする。

■ パターン③：疑問文でbe動詞を前に出し忘れる
　誤：There is a bank near here?
　正：Is there a bank near here?
　→ 疑問文はbe動詞をthereの前に出す。文末に?を付けるだけでは正しい疑問文にならない。`,
      },
      {
        heading: '受動態の誤りパターン',
        body: `■ パターン①：過去分詞にせず原形や-ing形を使ってしまう
　誤：This room is clean by my sister every day.
　正：This room is cleaned by my sister every day.
　→ 受動態にはbe動詞＋過去分詞が必要。cleanのままでは受動態にならない。

■ パターン②：be動詞が主語の数と一致していない
　誤：These bags was made in Japan.
　正：These bags were made in Japan.
　→ these bags（複数）にはwereを使う。was/wereの選択は主語の数を最優先で確認する。

■ パターン③：notの位置を過去分詞のあとに置いてしまう
　誤：This song is sung not in Japan.
　正：This song is not sung in Japan.
　→ 否定文のnotはbe動詞の直後、過去分詞の前に置く。

■ 共通する見つけ方のコツ
There is/areと受動態のどちらも、be動詞を選ぶときは「文の本当の主語（There is/areでは後ろの名詞、受動態では文頭の主語）」の数を確認するという同じ手順を使う。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。There is a lot of books on the shelf, and they was written by the same author.',
        wrongAnswer: 'There are a lot of books on the shelf, and they was written by the same author.（前半だけ直して後半を見落とす）',
        trapExplanation: '1文の中に2つの誤り（There is→There are、was→were）が含まれているのに、前半のThere is構文の誤りだけに気を取られ、後半の受動態のbe動詞の誤りを見落としてしまう。',
        correctAnswer: 'There are a lot of books on the shelf, and they were written by the same author.',
        correctExplanation: 'a lot of books（複数）に合わせてThere isをThere areに直す。さらにtheyを受ける受動態のbe動詞もwasではなくwereにする。1文に複数の誤りが含まれる問題では、文の前半だけで満足せず、最後まで主語と動詞の一致を確認する。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    title: '誤文訂正⑥：接続詞の使い方の誤り',
    description: 'when / if / because / thatの使い方を誤った文を見つけて正しく直す練習',
    intro: '接続詞にまつわる誤りは、単語自体の選び間違いよりも「節の中の動詞の形」で起こることが多い。特にif節・when節の中でwillを使ってしまう誤りは、中学生が最もよく落ちる落とし穴の1つである。',
    order: 8095,
    studyPeriod: '中2',
    keyPoints: [
      'when・if節が未来の内容を表すときも、節の中の動詞は現在形にする。',
      'because のあとには理由を表す〈主語＋動詞〉の節が続く。becauseのあとに名詞だけを置く誤りに注意する（その場合はbecause ofを使う）。',
      'that節は動詞（think, know, hopeなど）の直後に置き、意味のない指示語のthatと混同しない。',
      '2つの接続詞を1つの文で重ねて使えない（because so, and but など）ことを確認する。',
      '接続詞の節が文頭に来るときのコンマの有無も、誤文訂正でよく問われる。',
      '接続詞のあとの主語・動詞の一致（3人称単数のsなど）も見落とさず確認する。',
    ],
    sections: [
      {
        heading: 'when/ifの節の中の時制の誤り',
        body: `■ パターン①：if節の中でwillを使ってしまう
　誤：If it will be sunny tomorrow, we will go on a picnic.
　正：If it is sunny tomorrow, we will go on a picnic.
　→ 時・条件を表す副詞節（if, whenなど）の中は、未来のことでも現在形を使う。主節（we will go）だけがwillを使う。

■ パターン②：when節の中でも同じ誤りが起こる
　誤：When he will arrive, please call me.
　正：When he arrives, please call me.
　→ 「彼が到着したら」という未来の内容でも、when節の中はarrivesという現在形にする。3人称単数のsを付け忘れる二次的な誤りにも注意する。

■ 見つけ方のコツ
if / whenで始まる節（または文中に出てくるif / when）を見たら、その節の中にwillがないかを最優先でチェックする。ただし、名詞節としてのwhen（「いつ〜か」）やif（「〜かどうか」）の中ではwillを使ってよいので、副詞節か名詞節かの判別も忘れないこと。`,
      },
      {
        heading: 'because・thatの使い方の誤り',
        body: `■ パターン①：becauseのあとに名詞だけを置いてしまう
　誤：I stayed home because the rain.
　正：I stayed home because it was raining. / I stayed home because of the rain.
　→ becauseのあとには〈主語＋動詞〉の節が続く。名詞だけを続けたいときはbecause ofを使う。この2つを混同する誤りが非常に多い。

■ パターン②：becauseとsoを1つの文で両方使ってしまう
　誤：Because it was raining, so I stayed home.
　正：Because it was raining, I stayed home. / It was raining, so I stayed home.
　→ 日本語では「〜だから、だから」と両方入れても不自然にならないが、英語では理由を表す接続詞（because）と結果を表す接続詞（so）を1つの文の中で同時に使うことはできない。

■ パターン③：thatを不要な位置に入れてしまう
　誤：I know that that he is honest.
　正：I know that he is honest.
　→ 接続詞のthatは1つの節につき1回だけ。thatを重ねて使うことはない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。When you will finish your homework, please tell me.',
        wrongAnswer: 'When you finish your homework, please tell to me.（正しい部分tell meに、不要なtoを付け加えてしまう）',
        trapExplanation: 'when節の時制の誤り（will finish→finish）を直すことに気を取られ、もともと正しかったtell me（SVOOの語順）に、教えるという意味からtoが必要だと思い込んで誤って付け加えてしまう。',
        correctAnswer: 'When you finish your homework, please tell me.',
        correctExplanation: 'when節の中は未来のことでも現在形にするので、will finishをfinishに直す。tell meはすでにSVOO（人に伝える）の正しい語順なので、そのままにしておく。誤文訂正では、直すべき箇所以外に手を加えないことも大切である。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    title: '書きかえ①：能動態⇔受動態の基本の書きかえ',
    description: '能動態と受動態を、決まった手順にそって正しく相互に書きかえる練習',
    intro: '「能動態を受動態に書きかえなさい」という問題は手順さえ覚えれば機械的に解ける。ここでは4つのステップを繰り返し練習し、書きかえのミスを防ぐ。',
    order: 8096,
    studyPeriod: '中2',
    keyPoints: [
      '書きかえの4ステップ：①能動態の目的語を主語にする ②be動詞を主語と時制に合わせる ③動詞を過去分詞にする ④能動態の主語をby＋人にして文末に置く。',
      '能動態の主語がweやtheyなどの一般の人を指す場合、by 〜 は省略できる。',
      'SVOO文型を受動態にするときは2通りの書きかえ方がある（人を主語にする／物を主語にする）。',
      '受動態から能動態に戻すときは、逆の手順（byのあとの人を主語に戻す）をたどる。',
      '疑問文・否定文を含む能動態も、まず肯定文の形で考えてから疑問・否定の形にすると混乱しにくい。',
      '不規則動詞の過去分詞を正しく覚えていないと、書きかえの手順が合っていても誤答になる。',
    ],
    sections: [
      {
        heading: '能動態→受動態：書きかえの4ステップ',
        body: `■ 例文で確認する
　能動態：A famous artist painted this picture.
　受動態：This picture was painted by a famous artist.

■ ステップ①：能動態の目的語を主語にする
　this picture（目的語）→ This picture（新しい主語）

■ ステップ②：be動詞を、新しい主語と、もとの文の時制に合わせる
　もとの文は過去形（painted）なので、be動詞も過去形にする。this picture（単数）なのでwasを選ぶ。

■ ステップ③：動詞を過去分詞にする
　painted → painted（この動詞はもともと-edなので同じ形。不規則動詞のときはここで形が変わる）

■ ステップ④：能動態の主語をby＋人の形にして文末に置く
　A famous artist → by a famous artist

■ by 〜 を省略できる場合
　能動態の主語が we, they, people, someoneなど「一般の人」を指すときは、byの部分をまるごと省略できる。
　能動態：People speak English in many countries.
　受動態：English is spoken in many countries.（by peopleは省略）`,
      },
      {
        heading: 'SVOOを含む文と、否定文・疑問文の書きかえ',
        body: `■ SVOOの受動態：2通りの書きかえ方
　能動態：My father gave me a watch.
　受動態①（人を主語に）：I was given a watch by my father.
　受動態②（物を主語に）：A watch was given to me by my father.
　どちらも文法的に正しいが、人を主語にする書きかえの方がより自然でよく使われる。

■ 否定文の書きかえ
　能動態：He didn't write this letter.
　受動態：This letter wasn't written by him.
　→ notの位置はbe動詞の直後（wasn't）に置く。didn'tのnotをそのまま持ち越さない。

■ 疑問文の書きかえ
　能動態：Did she make this cake?
　受動態：Was this cake made by her?
　→ Did〜?の疑問文は、Was/Were〜?の形に変わる。

■ 受動態→能動態への逆算
　This bridge was built in 1990 by the government.
　→ The government built this bridge in 1990.
　byのあとの人（the government）を主語に戻し、be動詞＋過去分詞を能動態の時制に合った動詞の形に戻す。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を受動態に書きかえなさい。My mother made this cake.',
        wrongAnswer: 'This cake is made by my mother.',
        trapExplanation: '書きかえの手順（目的語を主語に、動詞を過去分詞に、byを付ける）は合っているが、もとの文の時制（過去形made）を確認せず、現在形のisを使ってしまっている。',
        correctAnswer: 'This cake was made by my mother.',
        correctExplanation: '受動態のbe動詞は、新しい主語の数だけでなく、もとの能動態の文の時制にも合わせなければならない。もとの文がmade（過去形）なので、受動態のbe動詞もwasにする。書きかえ問題では、時制を変えずにそのまま引き継ぐことを忘れないようにする。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    title: '書きかえ②：SVOO⇔SVO＋to/forの書きかえ',
    description: '「人に物をあげる」型の文を、to/forを使った書きかえの形に正しく変換する練習',
    intro: 'SVOOの文は、動詞によってtoを使うかforを使うかが決まっている。この単元では代表的な動詞をグループ分けして覚え、書きかえ問題で迷わないようにする。',
    order: 8097,
    studyPeriod: '中2',
    keyPoints: [
      '書きかえの基本手順は〈主語＋動詞＋物＋to/for＋人〉に並べかえること。',
      'give, show, teach, tell, send, lendなどはtoを使う。',
      'make, buy, cook, get, find などはforを使う。',
      'askだけは例外でofを使う（Will you ask a favor of him?のような形）。',
      '物が代名詞（it, themなど）のときはSVOOのままだと不自然なので、to/forの形にするのがふつう。',
      '一部の動詞（explain, introduceなど）はそもそもSVOOの形をとれず、常にto/forの形しか使わない。',
    ],
    sections: [
      {
        heading: 'toを使うグループとforを使うグループ',
        body: `■ toを使う動詞（「渡す・伝える」イメージ）
　give, show, teach, tell, send, lend, write, pass
　SVOO：I gave him a present.
　書きかえ：I gave a present to him.
　→「人に向かって物や情報が移動する」動詞はtoを使う、と覚えるとよい。

■ forを使う動詞（「相手のために何かをする」イメージ）
　make, buy, cook, get, find, choose
　SVOO：My mother made me a cake.
　書きかえ：My mother made a cake for me.
　→「その動作自体は人がいなくてもできるが、相手のためにしてあげる」動詞はforを使う、というイメージで区別できる。

■ 書きかえの手順
① 動詞のあとの「人」と「物」を確認する。
② 動詞がto/forのどちらのグループかを判断する。
③ 〈主語＋動詞＋物＋to/for＋人〉の順に並べかえる。

例題）She showed me her new bike.
→ She showed her new bike to me.（showはtoグループ）`,
      },
      {
        heading: '例外のask、代名詞のときの注意、書きかえられない動詞',
        body: `■ askはofを使う例外
　SVOO：Can I ask you a favor?
　書きかえ：Can I ask a favor of you?
　→ askはto/forではなくofを使う唯一の重要な例外。

■ 物が代名詞のときの注意
　SVOOのまま代名詞を使うと不自然になるため、書きかえの形（to/forを使う形）にするのがふつうである。
　△ Give me it.
　○ Give it to me.
　並べかえ・書きかえの両方で、itやthemを見たらSVOOではなくto/forの形を優先して考える。

■ SVOOの形をとれず、常にto/forの形しか使わない動詞
　explain, introduce, suggest など
　誤：Please explain me this word.
　正：Please explain this word to me.
　→ これらの動詞はもともとSVOOの形を持たないため、「書きかえる」のではなく、最初からto/forの形でしか使えないことに注意する。

■ 書きかえのチェック方法
書きかえたあとの文を読み、「主語が動詞＋物をして、それをto/forの人に向ける」という意味の流れになっているかを確認すると、to/forの選び間違いに気づきやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をSVO＋to/forの形に書きかえなさい。My grandfather bought me this bike.',
        wrongAnswer: 'My grandfather bought this bike to me.',
        trapExplanation: 'buyを「渡す」イメージのtoグループだと勘違いしてしまう。buyは「相手のために買ってあげる」という意味のforグループの動詞である。',
        correctAnswer: 'My grandfather bought this bike for me.',
        correctExplanation: 'buy, make, cook, get, find などは「相手のために〜してあげる」という意味を持つ動詞で、書きかえにはforを使う。give, show, teach, tellなど「相手に向かって渡す・伝える」動詞のtoと混同しないよう、動詞ごとにグループを覚えておく。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    title: '書きかえ③：比較表現の三通りの言いかえ',
    description: '同じ内容の比較を、比較級・原級（as ~ as）・最上級の3つの形で言いかえる練習',
    intro: '比較の書きかえ問題は「同じ事実を別の形で表現する」練習になる。比較級・as~as・最上級を自在に行き来できるようになると、英作文でも表現の幅が広がる。',
    order: 8098,
    studyPeriod: '中2',
    keyPoints: [
      '比較級⇔not as ~ as は、大小関係を保ったまま主語を入れかえて書きかえる。',
      '比較級 + than any other + 単数名詞は、最上級とほぼ同じ意味を表す。',
      'no other + 単数名詞 + is 比較級 than 〜 も最上級の書きかえに使える。',
      '書きかえのときは、もとの文の「どちらが上でどちらが下か」を最初に整理してから始める。',
      '主語を入れかえるとthanのあとの語も入れかわる点に注意する。',
      '最上級の文を比較級の文に書きかえるときは、比較の対象をthan any other 〜の形にする。',
    ],
    sections: [
      {
        heading: '比較級とnot as ~ asの書きかえ',
        body: `■ 比較級 → not as ~ as への書きかえ
　比較級：Tom is taller than Ken.（トムはケンより背が高い）
　書きかえ：Ken is not as tall as Tom.（ケンはトムほど背が高くない）
　→ 主語を入れかえ（TomとKen）、形容詞は原級（tall）に戻し、not as ~ asではさむ。thanのあとにあった語（Ken）が新しい主語になる点に注意。

■ 書きかえの手順
① もとの文で「どちらが上か」を確認する（比較級ならthanの前が上）。
② 下の方（than の後ろにあった語）を新しい主語にする。
③ 形容詞を原級に戻し、not as ~ as で挟む。
④ 上だった方（もとの主語）をasのあとに置く。

■ not as ~ as → 比較級への逆の書きかえ
　This book is not as interesting as that one.
　→ That one is more interesting than this book.
　同じ手順を逆にたどればよい。`,
      },
      {
        heading: '最上級との書きかえ',
        body: `■ 最上級 → 比較級（than any other）への書きかえ
　最上級：Ken is the tallest boy in his class.（ケンはクラスでいちばん背が高い）
　書きかえ：Ken is taller than any other boy in his class.（ケンは他のどの少年よりも背が高い）
　→〈比較級＋than any other＋単数名詞〉で最上級とほぼ同じ意味になる。any otherのあとの名詞は必ず単数形にする点が最重要。

■ 最上級 → no other 〜 の書きかえ
　書きかえ：No other boy in his class is taller than Ken.（クラスの他のどの少年もケンより背が高くない）
　→ 主語をNo other + 単数名詞にし、もとの最上級の主語（Ken）をthanのあとに置く。

■ 書きかえの手順まとめ
① 最上級の文の「いちばん」の対象（Ken）と、比較する集団（his class）を確認する。
② any other + 単数名詞、またはNo other + 単数名詞の形を選ぶ。
③ 比較級（taller）を使い、thanのあとにいちばんだった語（Ken）を置く。

例題）This is the most popular song in Japan.
→ This song is more popular than any other song in Japan.
→ No other song is more popular than this song in Japan.`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を「比較級＋than any other」を使って書きかえなさい。Mt. Fuji is the highest mountain in Japan.',
        wrongAnswer: 'Mt. Fuji is higher than any other mountains in Japan.',
        trapExplanation: 'any otherのあとの名詞を、日本語の「他のすべての山」という複数のイメージにつられて複数形（mountains）にしてしまう。',
        correctAnswer: 'Mt. Fuji is higher than any other mountain in Japan.',
        correctExplanation: 'any other のあとの名詞は、意味としては「他のいろいろな山」を指していても、文法的には必ず単数形にするという決まりがある。any（どの1つをとっても）という語の性質上、単数名詞と組み合わせるのが正しい形である。',
      },
    ],
  },

  {
    id: 'new20_j2_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    title: '空所補充：中2文法総合ドリル',
    description: '時制・助動詞・不定詞・動名詞・受動態など中2の重要文法を1つの文脈でまとめて確認する総合ドリル',
    intro: 'ここまで学んできた中2文法を、バラバラの単元としてではなく、1つの会話や文章の中でどう使い分けるかという視点でまとめて確認する。空所補充問題の解き方の手順も合わせて身につける。',
    order: 8099,
    studyPeriod: '中2',
    keyPoints: [
      '空所補充ではまず空所の前後の語（前置詞・助動詞・be動詞など）から、入る語の形を絞り込む。',
      '選択肢に動詞の原形・-ing形・過去分詞・to不定詞が並んでいる問題は、直前の語（助動詞・前置詞・be動詞）が最大のヒントになる。',
      '時制の手がかり（yesterday, tomorrow, now, every dayなど）を文中から見つけ出す習慣をつける。',
      '1つの文章の中で、過去進行形・未来表現・助動詞・不定詞・動名詞・受動態が混在して出題されることを想定して練習する。',
      '迷ったときは、まず日本語訳の意味を確認してから、文法的な形を最終チェックする、という順序で解く。',
      '解き終えたら、選んだ語を空所に戻して文全体を読み直し、不自然でないかを必ず確認する。',
    ],
    sections: [
      {
        heading: '空所補充を解く3つの手順',
        body: `■ 手順①：空所の前後の語をチェックする
　空所の直前に助動詞（must, should, willなど）があれば動詞の原形、be動詞があれば-ing形か過去分詞、前置詞があれば動名詞、というように、周囲の語だけで形をある程度絞り込める。

■ 手順②：文中の時を表す語をさがす
　yesterday, last night → 過去形・過去進行形
　tomorrow, next week → 未来表現（will / be going to）
　every day, always → 現在形
　このような手がかり語を見つけると、時制で迷う問題の多くが解ける。

■ 手順③：日本語訳と照らして最終確認する
　形だけで選ぶと、意味が通らない選択をしてしまうことがある。空所に語を入れたあと、必ず文全体を日本語に直してみて、自然な意味になっているかを確認する。

例題）I ( ) tennis when it started to rain.
　① play ② played ③ was playing ④ am playing
→ ③ was playing（過去進行形の中に過去の一瞬の出来事＝started to rainが割りこむ典型パターン）`,
      },
      {
        heading: '総合演習：1つの文章の中で文法を使い分ける',
        body: `次の文章の空所に入る最も適切な形を考えながら読んでみよう（解答は文章のあとに示す）。

Last Sunday, I (1: study) English in my room when my brother came in. He said, "You (2: have to / has to) come with me. We (3: be going to) visit our grandmother this afternoon." I was surprised because I (4: not / know) about the plan. My grandmother's house (5: build) about thirty years ago, but it still looks new. I want (6: learn) more about her life when I visit her.

■ 解答と考え方
(1) was studying：when以下に「割りこんだ動作」があるので過去進行形。
(2) have to：主語Youに合わせる。
(3) are going to：主語We、前もって決めていた予定なのでbe going to。
(4) didn't know：一般動詞knowの過去の否定文なのでdidn'tを使う。
(5) was built：houseが「建てられた」という受け身の関係なので受動態。
(6) to learn：wantはto不定詞だけを目的語にとる動詞。

■ 総合ドリルから見える大切な視点
1つの文章の中には複数の文法事項が自然に混在する。単元ごとにバラバラに覚えるだけでなく、こうした総合問題で「どの手がかりからどの文法を使うと判断したか」を1つずつ言葉にして確認する練習を重ねると、入試本番の長文・空所補充問題にも対応できる力がつく。`,
      },
    ],
    trapExamples: [
      {
        question: '空所に入る最も適切なものを選びなさい。My grandmother\'s house ( ) about thirty years ago.\n① built ② was built ③ is built ④ builds',
        wrongAnswer: '① built（「家が建てた」と能動態のまま選んでしまう）',
        trapExplanation: '主語My grandmother\'s houseが「建てる」動作をする側ではなく「建てられる」側であることに気づかず、能動態の過去形をそのまま選んでしまう。',
        correctAnswer: '② was built',
        correctExplanation: '家は自分で「建てる」ことができず、必ず人によって「建てられる」もの。このように主語が動作を受ける側になる文では受動態（be動詞＋過去分詞）を使う。about thirty years ago（約30年前に）という過去を表す語から、be動詞は過去形のwasを選ぶ。',
      },
    ],
  },
];
