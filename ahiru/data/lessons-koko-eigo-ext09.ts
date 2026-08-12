import type { Lesson } from './lesson-types';

// 高校受験 英語「関係代名詞・接続詞・間接疑問」拡張ユニット（40セッション：koko_eigo_s296〜koko_eigo_s335）
// order は 796〜835。
// 構成：関係代名詞 who 主格(4)／which 主格・目的格(4)／that の用法(4)／目的格の省略(4)／
//       関係代名詞と分詞の書きかえ(3)／等位接続詞と命令文, and〜(4)／従属接続詞 when/if/because/though(4)／
//       that節と時制の一致(4)／間接疑問(5)／相関接続詞(4)
// 図解は 40 課中 18 課（45%）。語順ボックス（polygon）と修飾範囲の線（numberLine）だけを使い、
// 英文はスペル・冠詞・三単現・時制を検算してある（lesson-figs-koko-eigo-ext09.ts）。
export const kokoEigoExt09Lessons: Lesson[] = [
  // ───────── 1. 関係代名詞 who（主格）（s296〜s299） ─────────
  {
    id: 'koko_eigo_s296',
    subject: 'eigo',
    examType: 'koko',
    title: '関係代名詞①：2つの文を1つにするしくみ（主格 who）',
    description: '「私には友達がいる」＋「その友達はカナダに住んでいる」を1文にまとめる手順を身につける',
    intro:
      '「友達がいます。その友達はカナダに住んでいます。」日本語ならわざわざ2文に切らず、「カナダに住んでいる友達がいます」と一息で言えます。英語でこの一息を作る道具が関係代名詞です。2つの文をのりでつなぐ接着剤だと思って、どこにのりを付けるのかを見ていきましょう。',
    order: 796,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      '関係代名詞は「接続詞＋代名詞」の二役を1語で兼ねる。だから元の代名詞（he/she/it）は消える。',
      '説明される名詞を先行詞という。who の先行詞は「人」。',
      '主格＝関係代名詞のすぐ後ろが動詞。もとの文で主語だった語が変わったもの。',
      'who の後ろの動詞は、主節の主語ではなく先行詞の人称・数に合わせる（a friend who lives／friends who live）。',
      '関係詞節は先行詞のすぐ後ろに置く。離すと何を説明しているかわからなくなる。',
      '日本語には「〜する（名詞）」と、後ろから前へ戻して訳す。',
    ],
    sections: [
      {
        heading: '2文を1文にする三つの手順',
        figureId: 'lf_kokoeigoext09_296',
        body: `関係代名詞は、同じものを指す語を共有している2つの文を、1つの文にまとめるための語である。

例）I know the girl.（私はその女の子を知っている）
　　She plays the piano.（彼女はピアノをひく）

この2文は the girl と she が同じ人物を指している。ここが「のり付け」できる場所である。

■ 手順①　共通する語を見つける
　文①の the girl ＝ 文②の she。文①側の名詞（the girl）が先行詞になる。

■ 手順②　二つ目の文の共通語を関係代名詞に変える
　she は「人」で、しかも文②の中では主語である。人が先行詞で主語のはたらきをするから who を使う。
　She plays the piano. → who plays the piano

■ 手順③　先行詞のすぐ後ろに差しこむ
　I know the girl ＋ who plays the piano
　→ I know the girl who plays the piano.（私はピアノをひくその女の子を知っている）

★ ポイント：who は「そして彼女は」という接続詞と代名詞の二役を1語で果たしている。だから元の she は書かない。
　× I know the girl who she plays the piano.（she が余っている）

⚠ 注意：関係詞節は必ず先行詞の直後に置く。
　× I know the girl in Tokyo who plays the piano.（「東京にいる女の子」と言いたいのでなければ位置がずれている）`,
      },
      {
        heading: '動詞の形は「先行詞」に合わせる',
        body: `関係代名詞の後ろの動詞をどの形にするかで、多くの受験生がつまずく。合わせる相手は主節の主語ではなく、先行詞である。

例）I have a friend who lives in Canada.
　　→ 先行詞は a friend（3人称単数）なので lives。主節の主語 I につられて live としない。

例）I have friends who live in Canada.
　　→ 先行詞が friends（複数）なので live。

例）The boy who is playing soccer is my brother.
　　→ 先行詞は The boy（単数）なので who is。文全体の動詞はそのあとの is。

■ 訳し方
関係詞節は後ろから前へ戻して訳す。
　a friend who lives in Canada ＝「カナダに住んでいる友達」
　the man who helped me yesterday ＝「昨日私を助けてくれた男の人」

「友達、そしてその友達はカナダに住んでいる」と前から訳し下すと日本語として不自然になる。記述問題では減点されることがあるので、必ず「〜する（名詞）」の形に直す。

★ ポイント：who を見たら、①先行詞はどれか ②who の後ろの動詞は何か、の2点を必ず確認する。この2点さえ押さえれば主格の who は完成する。

⚠ 注意：先行詞が「もの・動物」のときは who は使えない（which や that を使う）。逆に、人が先行詞のときに which は使えない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の2文を関係代名詞を使って1文にしなさい。I have a friend. He lives in Canada.',
        wrongAnswer: 'I have a friend who he lives in Canada.',
        trapExplanation:
          '「つなぐことばを足す」というイメージだけで who を差しこむため、もとの主語 he がそのまま残ってしまう。日本語で「友達がいて、そして彼はカナダに住んでいる」と考えると he を消す理由が見えなくなる。',
        correctAnswer: 'I have a friend who lives in Canada.',
        correctExplanation:
          'who は「接続詞＋代名詞（he）」の二役を1語で兼ねている。he が who に姿を変えたのだから、he を重ねて書いてはいけない。手順は①共通語 a friend ＝ he を見つける ②he を who に変える ③先行詞 a friend の直後に置く、の三つ。',
      },
      {
        question: '( )に入る語を選びなさい。I know a boy who ( ) three dogs.（have / has）',
        wrongAnswer: 'have',
        trapExplanation:
          '文の先頭が I know なので、主語 I に合わせて原形 have を選んでしまう。関係詞節の動詞が「どの語に合わせるのか」を意識していないと起こる誤り。',
        correctAnswer: 'has',
        correctExplanation:
          'who の後ろの動詞が合わせる相手は、主節の主語 I ではなく先行詞 a boy（3人称単数）である。したがって has。I know a boy who has three dogs.（私は犬を3匹飼っている男の子を知っている）。先行詞が boys と複数なら who have になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s297',
    subject: 'eigo',
    examType: 'koko',
    title: '関係代名詞②：どこからどこまでが関係詞節か',
    description: '関係詞節の範囲を線で押さえ、後ろから前へ訳す読み方を固める',
    intro:
      '英語の長文でつまずく人の多くは、単語ではなく「切れ目」がわからなくて止まっています。関係代名詞が出てきたら、そこから先のどこまでが名詞の説明なのか。その範囲を線で囲えるようになるだけで、一文の意味がすっと決まります。',
    order: 797,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      '関係詞節は関係代名詞から始まり、文全体の動詞（述語動詞）の直前で終わることが多い。',
      '先行詞＋関係詞節を「大きな名詞のかたまり」としてひとまとめに扱う。',
      '訳すときは関係詞節を先に訳し、「〜する（先行詞）」と後ろから前へ戻す。',
      '前から「そして彼が〜」と訳し下すと不自然な日本語になり、記述で減点されやすい。',
      '関係詞節の中の動詞と、文全体の動詞を混同しない。動詞が2つ見えたら片方は節の中。',
    ],
    sections: [
      {
        heading: '関係詞節の範囲を線で囲う',
        figureId: 'lf_kokoeigoext09_297',
        body: `関係代名詞が出てきたら、まず「どこまでが説明か」を決める。

例）I have a friend who lives in Canada.
　　　　　　　　　└──── ここから文末まで ────┘

who lives in Canada がひとかたまりで a friend を説明している。先行詞と合わせた a friend who lives in Canada 全体が「カナダに住んでいる友達」という大きな名詞のかたまりになり、これが have の目的語である。

例）The man who lives next to us is a doctor.
　　　　　　└─── 関係詞節 ───┘
文全体の主語は The man who lives next to us（私たちの隣に住んでいる男の人）で、述語動詞は is。関係詞節の中の lives を文全体の動詞だと思うと、そのあとの is が余って混乱する。

■ 範囲の決め方
①関係代名詞（who / which / that）を見つける。
②そこから右へ読み、二つ目の「主語のない動詞」が現れるまでが節の中。
③その次に来る動詞が文全体の述語動詞。

★ ポイント：関係詞節の中に主語がない（who がその代わり）のが主格の特徴。したがって who のあとの動詞は節の中、その先で主語なしに現れる動詞が文全体の動詞になる。

⚠ 注意：関係詞節が長くなると主語と述語が大きく離れる。The students who came to Japan last summer are studying Japanese now. では主語 The students と述語 are が7語も離れている。`,
      },
      {
        heading: '後ろから前へ戻して訳す',
        body: `関係詞節は日本語の連体修飾（「〜する〇〇」）にあたる。したがって訳は必ず後ろから前へ戻す。

例）This is the man who helped me yesterday.
　　○「こちらが昨日私を助けてくれた男の人です」
　　×「こちらが男の人です、そして彼は昨日私を助けました」

例）I know a girl who can speak three languages.
　　○「私は3か国語を話せる女の子を知っています」

■ 「大きな名詞」として扱う練習
先行詞＋関係詞節をカッコでくくると、文の骨格が見える。
　(The boy who won the race) is my cousin. → 骨格は「〇〇 is my cousin」。
　I met (a woman who works at the hospital). → 骨格は「I met 〇〇」。

■ 説明が2つ以上つくこともある
　I have a friend who lives in Canada and studies music.
　→ who lives in Canada と (who) studies music の2つが and で並んでいる。「カナダに住んでいて音楽を勉強している友達」。二つ目の who は繰り返しになるので省くのがふつう。

★ ポイント：長文では「先行詞＋関係詞節」をひとかたまりと見て、いったん骨格だけ読む。細かい説明はあとから戻って確認すれば十分である。

⚠ 注意：関係詞節の中に文全体の目的語が含まれていることはない。節の外と中を混ぜて訳さないこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'The boy who won the race is my brother. の文全体の述語動詞はどれか。',
        wrongAnswer: 'won',
        trapExplanation:
          '左から読んでいって最初に見つかる動詞を述語動詞だと思ってしまう。won は関係詞節（who won the race）の中の動詞であって、文全体の動詞ではない。',
        correctAnswer: 'is',
        correctExplanation:
          '主語は The boy who won the race（そのレースで優勝した男の子）というひとかたまり。その後ろの is が文全体の述語動詞である。動詞が2つ見えたら、関係代名詞のすぐ後ろにあるほうが節の中の動詞だと判断する。',
      },
      {
        question: 'This is the man who helped me yesterday. を日本語にしなさい。',
        wrongAnswer: 'こちらが男の人です、そして彼は昨日私を助けました。',
        trapExplanation:
          '英語の語順のまま前から訳し下してしまう。who を「そして彼が」と接続詞のように訳すと、意味は伝わっても日本語として不自然で、記述問題では修飾関係を理解していないと判断されやすい。',
        correctAnswer: 'こちらが昨日私を助けてくれた男の人です。',
        correctExplanation:
          '関係詞節は先行詞を後ろから修飾する。who helped me yesterday を先に「昨日私を助けてくれた」と訳し、先行詞 the man の前に置いて「昨日私を助けてくれた男の人」とする。日本語の連体修飾の形にそろえるのがコツ。',
      },
    ],
  },

  {
    id: 'koko_eigo_s298',
    subject: 'eigo',
    examType: 'koko',
    title: '関係代名詞③：主語が長い文の骨格をつかむ',
    description: '先行詞＋関係詞節が主語になる文で、述語動詞と単数・複数を正しく判断する',
    intro:
      '「あそこでギターをひいている背の高い男の子は私のいとこです。」主語だけで十行分もある日本語の文を、私たちは自然に読んでいます。英語も同じで、主語がふくらんだ文は入試の定番です。ふくらんだ主語の「芯」がどれかを見つけられれば、動詞の形は自動的に決まります。',
    order: 798,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '先行詞＋関係詞節が主語になると、主語と述語動詞が大きく離れる。',
      '述語動詞の単数・複数は、関係詞節の中の語ではなく先行詞（主語の芯）で決める。',
      '関係詞節をカッコでくくって消すと、文の骨格（主語＋動詞）が見える。',
      '「主語の芯」は関係代名詞の直前にある名詞。',
      '節の中の動詞と文全体の動詞、合計2つの動詞があるのが正常な形。',
    ],
    sections: [
      {
        heading: '関係詞節をカッコでくくって骨格を出す',
        body: `関係詞節が主語についた文は、次の手順で読む。

例）The girl who is standing by the door is my cousin.

①関係代名詞 who を見つける。
②who から、次に主語なしで現れる動詞の直前までをカッコでくくる。
　The girl (who is standing by the door) is my cousin.
③カッコを消して読む。
　The girl is my cousin.（その女の子は私のいとこです）
④カッコの中を戻して訳す。
　「ドアのそばに立っている女の子は私のいとこです」

■ もっと長い例
　The students who came to our school from Australia last month are studying Japanese.
　→ The students (who came to our school from Australia last month) are studying Japanese.
　→ 骨格は The students are studying Japanese.（先月オーストラリアから来た生徒たちは日本語を勉強している）

★ ポイント：主語が長い文では「is / are / was / were / does などが2回出てくる」ことが多い。1回目が節の中、2回目が文全体、と考えると整理しやすい。

⚠ 注意：関係詞節の中の動詞を文全体の動詞と取りちがえると、そのあとの語がすべて余って見える。「余りが出たら切れ目を間違えている」と考えて読み直す。`,
      },
      {
        heading: '動詞の単数・複数は「芯」で決める',
        body: `関係詞節の中には、先行詞と数がちがう名詞がよく登場する。述語動詞をそれに合わせてしまうのが典型的な失点である。

例）The students who came from Australia are staying at my house.
　　→ 主語の芯は The students（複数）なので are。直前の Australia（単数）につられて is としない。

例）The man who has two dogs lives next to us.
　　→ 主語の芯は The man（単数）なので lives。節の中の two dogs につられて live としない。

例）The books which my father bought last week are on the desk.
　　→ 主語の芯は The books（複数）なので are。節の中の my father につられて is としない。

■ 見分けの手順
①関係代名詞の直前の名詞を探す ＝ それが先行詞であり主語の芯。
②節をカッコで消す。
③芯の単数・複数だけを見て述語動詞を決める。

★ ポイント：「関係代名詞の直前が芯」と覚える。The color of the flowers which grew here is beautiful. のように of 句が挟まる場合も、which の直前 the flowers は of 句の中なので芯ではなく、主語の芯は The color（単数）で is になる。

⚠ 注意：節の中の動詞は先行詞に合わせる（who has）が、文全体の動詞も同じく先行詞（＝主語の芯）に合わせる。合わせる相手はどちらも同じである点を混同しないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。The students who came from Australia ( ) staying at my house.（is / are）',
        wrongAnswer: 'is',
        trapExplanation:
          '空所の直前にある Australia が単数名詞なので、それに合わせて is を選んでしまう。関係詞節の中の語は主語ではないのに、位置が近いだけで引きずられる。',
        correctAnswer: 'are',
        correctExplanation:
          '関係詞節 who came from Australia をカッコで消すと The students ( ) staying at my house. となり、主語が The students（複数）だとわかる。したがって are。動詞を選ぶときは必ず節を消して骨格を出す。',
      },
      {
        question: 'The man who lives next to us has two dogs. の主語と述語動詞を答えなさい。',
        wrongAnswer: '主語は who、述語動詞は lives',
        trapExplanation:
          '関係代名詞 who が節の中で主語のはたらきをするため、文全体の主語も who だと考えてしまう。また最初に現れる動詞 lives を述語動詞だと思ってしまう。',
        correctAnswer: '主語は The man who lives next to us（芯は The man）、述語動詞は has',
        correctExplanation:
          'who が主語のはたらきをするのは関係詞節の中だけである。文全体の主語は先行詞を芯とする The man who lives next to us というかたまりで、その述語動詞は節の外にある has。節をカッコで消すと The man has two dogs. という骨格が残る。',
      },
    ],
  },

  {
    id: 'koko_eigo_s299',
    subject: 'eigo',
    examType: 'koko',
    title: '関係代名詞④：whose（所有格）と whom（目的格）',
    description: 'who・whose・whom の使い分けを「後ろの形」で判断できるようにする',
    intro:
      '「お父さんが医者である友達」を英語で言うとき、who では足りません。説明したいのは友達本人ではなく「その友達のお父さん」だからです。関係代名詞にも「〜の」という形があり、それが whose です。後ろに何が続くかを見れば、who・whose・whom は迷わず選べます。',
    order: 799,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'whose のあとには必ず名詞が続く（whose father / whose roof）。冠詞（a / the）は付けない。',
      'whose ＋名詞のあとは完全な文が続く（欠けがない）。',
      'whom は目的格で、後ろは〈主語＋動詞〉。日常では who や that で代用し、省略もできる。',
      '前置詞の直後に置けるのは whom と which だけ（× for who、× for that）。',
      'whose はものが先行詞でも使える（the house whose roof is red）。',
    ],
    sections: [
      {
        heading: 'whose は「〜の」＋名詞',
        body: `所有格の関係代名詞 whose は、「その人の／そのものの」という所有の関係を表す。

例）I have a friend.（私には友達がいる）
　　His father is a doctor.（彼のお父さんは医者だ）
　　→ 共通するのは a friend と his。his（所有格）が whose に変わる。
　　→ I have a friend whose father is a doctor.（私にはお父さんが医者の友達がいる）

■ whose の形の特徴
　①直後に必ず名詞が来る　whose father / whose name / whose roof
　②その名詞に a / the を付けない　× whose the father
　③whose ＋名詞のあとは、主語も目的語も欠けていない完全な文になる
　　whose father is a doctor ＝「その人の父は医者だ」で欠けなし。

■ もの・動物が先行詞でも使える
　I live in a house whose roof is red.（私は屋根が赤い家に住んでいる）
　the house of which the roof is red と書くこともできるが、入試では whose で十分。

★ ポイント：whose か who かで迷ったら、直後を見る。名詞なら whose、動詞なら who。
　a friend who works at a bank（直後が動詞 → who）
　a friend whose brother works at a bank（直後が名詞 → whose）

⚠ 注意：who is（〜である）と whose（〜の）は音が似ていて混同しやすい。The boy who is my brother と The boy whose brother is a teacher はまったく別の意味である。`,
      },
      {
        heading: 'whom は目的格。後ろは〈主語＋動詞〉',
        body: `whom は人が先行詞で、関係詞節の中で目的語のはたらきをするときに使う。

例）The man is a famous singer.（その男性は有名な歌手だ）
　　We met him yesterday.（私たちは昨日彼に会った）
　　→ him（目的格）が whom に変わり、前に出る。
　　→ The man whom we met yesterday is a famous singer.

■ whom の後ろの形
　whom のあとは〈主語＋動詞〉で始まり、その動詞の目的語が欠けている。
　whom we met ＿（met の目的語がない）

■ 実際の英語では
　話しことばでは whom の代わりに who や that を使い、さらに省略することも多い。
　The man (whom / who / that) we met yesterday is a famous singer.
　入試では「whom を選ばせる問題」と「省略に気づかせる問題」の両方が出る。

■ 前置詞と一緒に使うとき
　the friend with whom I went to the concert（かたい言い方）
　the friend (whom) I went to the concert with（ふつうの言い方）
　前置詞の直後に置けるのは whom と which だけで、that や who は置けない。

★ ポイント：who・whose・whom の判別は「直後を見る」だけでよい。直後が動詞なら who、名詞なら whose、〈主語＋動詞〉なら whom。

⚠ 注意：whose の直後の名詞が節の主語になっているとき（whose father is a doctor）、その is を文全体の動詞と取りちがえないこと。文全体の動詞はさらに後ろにある。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。I have a friend ( ) father is a doctor.（who / whose / whom）',
        wrongAnswer: 'who',
        trapExplanation:
          '先行詞が a friend という「人」なので、反射的に who を選んでしまう。しかし who を入れると who father is a doctor となり、関係代名詞のすぐ後ろに名詞 father が来る説明のつかない形になる。',
        correctAnswer: 'whose',
        correctExplanation:
          '空所の直後が名詞 father なので所有格 whose を選ぶ。もとの2文は I have a friend. ＋ His father is a doctor. で、his が whose に変わったもの。「先行詞が人だから who」ではなく「直後が名詞だから whose」と判断する。',
      },
      {
        question: '( )に入る語を選びなさい。The man ( ) we met yesterday is a famous singer.（whose / whom）',
        wrongAnswer: 'whose',
        trapExplanation:
          '空所の直後にある we を名詞と見て、「〜の」の whose だと考えてしまう。we は名詞ではなく主語の代名詞であり、whose we met という形は成り立たない。',
        correctAnswer: 'whom',
        correctExplanation:
          '空所の直後は we met と〈主語＋動詞〉で、しかも met の目的語が欠けている（もとは We met him yesterday.）。目的語の欠けを埋めるのは目的格なので whom。会話では who や that でもよく、省略して The man we met yesterday 〜 とも言える。',
      },
    ],
  },

  // ───────── 2. 関係代名詞 which（主格・目的格）（s300〜s303） ─────────
  {
    id: 'koko_eigo_s300',
    subject: 'eigo',
    examType: 'koko',
    title: 'which①：もの・動物を説明する主格の which',
    description: '先行詞が人以外のときの主格 which を、受動態との組み合わせまで含めて使いこなす',
    intro:
      '「アイスクリームを作る機械」「毎年多くの人が訪れる街」。人ではないものにも、説明を後ろから付け足したい場面はいくらでもあります。人には who、それ以外には which。この一本の線を引くだけで、使える表現が一気に増えます。',
    order: 800,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'which の先行詞は「もの・動物・こと」。人には使えない。',
      '主格の which は直後が動詞。動詞の形は先行詞の単数・複数に合わせる。',
      '先行詞が「〜される側」なら関係詞節は受動態〈be動詞＋過去分詞〉になる。',
      'which は that で置きかえられる（主格・目的格とも）。',
      '主格の which は省略できない。',
    ],
    sections: [
      {
        heading: '主格 which の作り方',
        body: `which の使い方は who とまったく同じで、ちがうのは先行詞が「人以外」である点だけである。

例）This is a machine.（これは機械です）
　　It makes ice cream.（それはアイスクリームを作ります）
　　→ 共通語は a machine ＝ it。it は文②の主語なので主格。
　　→ This is a machine which makes ice cream.（これはアイスクリームを作る機械です）

■ 動詞の形は先行詞に合わせる
　a machine which makes ice cream（先行詞が単数 → makes）
　machines which make ice cream（先行詞が複数 → make）
　the book which was written by Soseki（先行詞が単数・過去 → was）

■ 動物にも which を使う
　I have a dog which runs very fast.（私は速く走る犬を飼っている）
　※ 飼い主が家族のように扱う場合に who を使うこともあるが、入試では which（または that）を選ぶ。

★ ポイント：先行詞が人か人以外かを最初に確かめる。人 → who、人以外 → which、どちらでも使えるのが that。

⚠ 注意：主格の関係代名詞は who も which も省略できない。× This is a machine makes ice cream. は動詞が2つ並んだ壊れた文になる。`,
      },
      {
        heading: '先行詞が「される側」のときは受動態',
        body: `関係詞節の中の動詞を能動にするか受動にするかは、先行詞がその動作を「する側」か「される側」かで決まる。

例）Kyoto is a city which is visited by many people every year.
　　→ 京都は「訪れられる」側なので受動態 is visited。
　　× Kyoto is a city which visits many people. だと「京都が人々を訪問する」という意味になってしまう。

例）English is a language which is spoken all over the world.
　　→ 英語は「話される」側なので is spoken。

例）This is the letter which was written by my grandfather.
　　→ 手紙は「書かれた」側なので was written。

■ 判断の手順
①先行詞を関係詞節の主語の位置に戻してみる。
　a city ＋ visit … →「街が訪れる」？　不自然 → 受動態。
　a machine ＋ make ice cream →「機械が作る」　自然 → 能動態。
②時制は本文に合わせる（現在なら is / are、過去なら was / were）。

★ ポイント：「もの」が先行詞のときは受動態になる確率が高い。ものは動作をされる側になりやすいからである。

⚠ 注意：受動態の by 〜 は省略できるが、be動詞は省略できない。× a language which spoken all over the world は誤り（which is を丸ごと省いて a language spoken all over the world とするのは正しい）。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。This is a machine ( ) makes ice cream.（who / which / whose）',
        wrongAnswer: 'who',
        trapExplanation:
          '「アイスクリームを作る」という人間らしい動作にひきずられて who を選んでしまう。また who を「〜する」と訳す万能語だと思っていると、先行詞の種類を確認しなくなる。',
        correctAnswer: 'which',
        correctExplanation:
          '先行詞は a machine で「もの」なので which（または that）を使う。who を使えるのは先行詞が人のときだけである。直後が動詞 makes なので主格であり、先行詞が単数なので makes と三単現の s が付く。',
      },
      {
        question: '( )に入る語句を選びなさい。Kyoto is a city which ( ) by many people every year.（visits / is visited）',
        wrongAnswer: 'visits',
        trapExplanation:
          '関係代名詞の直後だから動詞をそのまま置けばよいと考え、能動態を選んでしまう。by many people という語句を見落とすと気づけない。',
        correctAnswer: 'is visited',
        correctExplanation:
          '先行詞 a city を関係詞節の主語に戻すと「街が多くの人を訪問する」となり意味が通らない。京都は訪れられる側なので受動態〈be動詞＋過去分詞〉にして is visited とする。Kyoto is a city which is visited by many people every year.（京都は毎年多くの人に訪れられる街です）',
      },
    ],
  },

  {
    id: 'koko_eigo_s301',
    subject: 'eigo',
    examType: 'koko',
    title: 'which②：目的格の which と「欠け」の見つけ方',
    description: '関係詞節の中で目的語が欠けている形を見抜き、語順を崩さずに文を作る',
    intro:
      '「私が昨日買った本」を英語にするとき、buy の後ろに本来あるはずの「本」が消えます。関係代名詞の文には、必ずこの「消えた場所」があります。どこが欠けているかを指させるようになると、主格と目的格の区別も、省略の可否も、すべて同じ物差しで判断できます。',
    order: 801,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '目的格の which は、直後が〈主語＋動詞〉。',
      '関係詞節の中では、その動詞の目的語が欠けている。',
      'もとの文の目的語（it / them など）は which に変わって前に出るので、節の中には残さない。',
      '主語と動詞の語順は変えない（× which sang Ken）。',
      '目的格の which は that に置きかえられ、省略もできる。',
    ],
    sections: [
      {
        heading: '目的語が which に変わって前に出る',
        figureId: 'lf_kokoeigoext09_301',
        body: `目的格の関係代名詞は、関係詞節の中で目的語だった語が変化したものである。

例）This is the book.（これがその本です）
　　I bought it yesterday.（私は昨日それを買いました）
　　→ 共通語は the book ＝ it。it は bought の目的語なので目的格。
　　→ it を which に変えて節の先頭に出す。
　　→ This is the book which I bought yesterday.（これは私が昨日買った本です）

■ ここで起きていること
　I bought it yesterday.
　　　　　　↑ この目的語が which になって節の先頭へ移動する
　which I bought ＿ yesterday（bought の後ろが空いている）

この「空いている場所」を先行詞 the book が埋めている、と考えるとよい。

★ ポイント：目的語を前に出しても、残りの語順はいっさい変えない。which のあとは I bought yesterday とそのままの順で続く。
　× This is the book which bought I yesterday.

⚠ 注意：which に変わったのだから、もとの it を残してはいけない。
　× This is the book which I bought it yesterday.（it が余分）
　これは日本語で「私がそれを買った本」と考えてしまうために起こる誤りである。`,
      },
      {
        heading: '「欠け」を探す読み方',
        body: `関係詞節を読むときは、「何が欠けているか」を必ず確認する。欠けの位置で主格か目的格かが決まる。

■ 主格の場合（主語が欠けている）
　the train which goes to Kyoto
　→ which の直後がいきなり動詞 goes。「何が行くのか」という主語が節の中にない。

■ 目的格の場合（目的語が欠けている）
　the song which Ken sang at the party
　→ which の直後は Ken sang と〈主語＋動詞〉。sang の後ろに「何を歌ったのか」がない。

■ 前置詞の目的語が欠けている場合
　the house which I live in
　→ in の後ろが空いている。前置詞をうっかり落とすと文が成り立たない。

■ 練習の手順
①関係代名詞を見つける。
②その右側を、主語・動詞・目的語がそろっているか確かめながら読む。
③足りない位置を指さす。そこに先行詞を戻すと元の文になる。
　the song which Ken sang ＿ → Ken sang the song. と戻せれば正しく読めている。

★ ポイント：関係代名詞の後ろは必ずどこかが「不完全」になる。完全な文が続いていたら、それは関係代名詞ではなく接続詞の that か、whose ＋名詞の形である。

⚠ 注意：目的格でも「動詞の目的語」と「前置詞の目的語」の2種類がある。前置詞のほうを見落とすと英作文で必ず減点される。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文には1か所誤りがあります。正しく直しなさい。This is the book which I bought it yesterday.',
        wrongAnswer: 'which を that に直す',
        trapExplanation:
          '「どこかが変だ」と感じたときに、いちばん目立つ関係代名詞を疑ってしまう。しかし which も that もここでは正しく、本当の誤りは節の中に残った it である。',
        correctAnswer: 'it を削除する（This is the book which I bought yesterday.）',
        correctExplanation:
          'which はもとの目的語 it が姿を変えたものなので、it を重ねて書くことはできない。関係代名詞を入れたら、もとの文にあった代名詞（it / them / him / her）は必ず消す。which を that に変えても it が残っている限り誤りのままである。',
      },
      {
        question: '次の2文を関係代名詞を使って1文にしなさい。I like the song. Ken sang it at the party.',
        wrongAnswer: 'I like the song which sang Ken at the party.',
        trapExplanation:
          '「関係代名詞の後ろはすぐ動詞」という主格のルールを覚えていて、それを目的格にも当てはめてしまう。目的語を前に出したのだから主語 Ken も動かすべきだと考えて語順を崩す。',
        correctAnswer: 'I like the song which Ken sang at the party.',
        correctExplanation:
          '前に出るのは目的語だった it（→ which）だけで、主語と動詞の順序 Ken sang はそのまま残す。目的格の関係詞節は必ず〈関係代名詞＋主語＋動詞〉の順になる。that に変えても、省略して I like the song Ken sang at the party. としてもよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s302',
    subject: 'eigo',
    examType: 'koko',
    title: '主格か目的格か：直後の形だけで決める',
    description: '関係代名詞の格を「直後が動詞か、主語＋動詞か」の一点で判定する',
    intro:
      'who だから主格、whom だから目的格——そう覚えていると、who が目的格で使われた瞬間に手が止まります。実は格は語の見た目ではなく、直後に何が来ているかだけで決まります。物差しを一本にすると、選択肢問題は数秒で片づきます。',
    order: 802,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '直後が動詞 → 主格（節の中の主語が欠けている）。省略できない。',
      '直後が〈主語＋動詞〉→ 目的格（節の中の目的語が欠けている）。省略できる。',
      'who は目的格で使われることもある（The girl who I met 〜）。語の見た目で決めない。',
      '直後が名詞なら whose、直後が完全な文なら接続詞の that。',
      '助動詞（can / will）も動詞の仲間。who can play は主格。',
    ],
    sections: [
      {
        heading: '判定は「直後を見る」だけ',
        figureId: 'lf_kokoeigoext09_302',
        body: `関係代名詞の格は、次の一点だけで決まる。

■ 直後が動詞（助動詞を含む）→ 主格
　the man who helped me（who ＋ helped）
　a boy who can play the guitar（who ＋ can play）
　the train which goes to Kyoto（which ＋ goes）
　→ 節の中に主語がない。関係代名詞自身が主語のはたらきをしている。
　→ 省略できない。省略すると動詞が2つ並んで壊れる。

■ 直後が〈主語＋動詞〉→ 目的格
　the man who(m) I helped（who ＋ I helped）
　the book which he wrote（which ＋ he wrote）
　→ 節の中に主語があり、動詞の目的語が欠けている。
　→ 省略できる。

■ 直後が名詞 → 所有格 whose
　a friend whose father is a doctor

■ 直後が完全な文 → 関係代名詞ではなく接続詞の that
　I think that he is right.

★ ポイント：先行詞が人かものかは who / which / that のどれを使うかを決めるだけで、格には関係しない。格を決めるのは直後の形だけである。

⚠ 注意：直後に副詞が入ることがある。the man who always helps us は who の直後が always（副詞）だが、その次が helps（動詞）なので主格である。副詞は無視して次を見る。`,
      },
      {
        heading: 'who が目的格で使われる形に慣れる',
        body: `学校では「主格は who、目的格は whom」と習うが、実際の英語や入試の長文では、目的格でも who や that が広く使われる。

例）The girl who I met at the party was very kind.
　　→ who の直後が I met と〈主語＋動詞〉なので、この who は目的格。whom でも that でも、省略しても正しい。

例）The teacher that everyone likes is Mr. Sato.
　　→ that の直後が everyone likes なので目的格。

■ よくある選択肢問題の型
　I know a boy ( ) can play the guitar very well.（who / whom）
　→ 直後が can play（助動詞＋動詞）なので主格 → who。

　The man ( ) we visited last Sunday is a doctor.（who / whose）
　→ 直後が we visited（主語＋動詞）で visited の目的語が欠けている → 目的格 → who（whom / that も可）。whose は直後が名詞のときだけ。

★ ポイント：「whom が選択肢にあるから目的格」ではない。まず直後を見て格を決め、それから選択肢の中で使える語を選ぶ、という順番を守る。

⚠ 注意：主格は省略できないので、空所補充で「省略できるか」を問われたら、まず直後の形で格を判定する。判定を飛ばして「短いほうが自然だから」と省略すると誤りになる。`,
      },
    ],
    trapExamples: [
      {
        question: 'The girl who I met yesterday is from Canada. の who は主格か目的格か答えなさい。',
        wrongAnswer: '主格',
        trapExplanation:
          '「who ＝ 主格、whom ＝ 目的格」と語の見た目で暗記しているため、who を見た瞬間に主格だと判断してしまう。実際の英語では目的格でも who がふつうに使われる。',
        correctAnswer: '目的格（whom や that に置きかえたり、省略したりできる）',
        correctExplanation:
          'who の直後は I met と〈主語＋動詞〉で、met の目的語が欠けている（もとは I met the girl yesterday.）。したがってこの who は目的格である。The girl I met yesterday is from Canada. と省略しても正しい文になる。',
      },
      {
        question: '( )に入る語を選びなさい。I know a boy ( ) can play the guitar very well.（who / whom）',
        wrongAnswer: 'whom',
        trapExplanation:
          '空所の前が a boy という人の名詞で、しかも I know の目的語になっているので、「目的格だから whom」と考えてしまう。先行詞が主節でどんなはたらきをしているかは、関係代名詞の格とは無関係である。',
        correctAnswer: 'who',
        correctExplanation:
          '空所の直後は can play という〈助動詞＋動詞〉なので、節の中の主語が欠けている＝主格である。したがって who（that も可）。格を決めるのは「関係代名詞の直後の形」だけで、先行詞が主節で目的語かどうかは関係しない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s303',
    subject: 'eigo',
    examType: 'koko',
    title: '前置詞といっしょに使う関係代名詞',
    description: 'the house which I live in / in which I live の形を落とさずに書けるようにする',
    intro:
      '「私が住んでいる家」を英語にすると、live の後ろに in が残ります。日本語には現れない前置詞なので、書き忘れて減点される定番の場所です。前置詞をどこに置くのか、置き方によって使える関係代名詞がどう変わるのかを整理しましょう。',
    order: 803,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'もとの文にあった前置詞は、関係代名詞の文にしても必ずどこかに残る。',
      '前置詞を節の最後に残す形（the house which I live in）がふつうの言い方。',
      '前置詞を関係代名詞の前に置く形（the house in which I live）はかたい言い方。',
      '前置詞の直後に置けるのは whom と which だけ。× in that、× with who。',
      '前置詞が関係代名詞の前にあるとき、その関係代名詞は省略できない。',
    ],
    sections: [
      {
        heading: '前置詞は消えない',
        body: `関係代名詞を作るときに落としやすいのが、もとの文にあった前置詞である。

例）This is the house.（これがその家です）
　　I live in it.（私はそこに住んでいます）
　　→ it は前置詞 in の目的語。it を which に変えて前に出す。
　　→ This is the house which I live in.（これは私が住んでいる家です）

in を落として This is the house which I live. と書くと、live の後ろに場所がなく、意味が成立しない。

■ 前置詞をよく落とす動詞
　live in ／ talk about ／ talk with ／ look for ／ look at ／ listen to ／ wait for ／ go to ／ write with

例）This is the pen which I wrote the letter with.（これは私がその手紙を書いたペンです）
例）The person who(m) I talked with was very kind.（私が話した人はとても親切でした）

■ 確かめ方
関係詞節を元の文に戻してみる。
　which I live in → I live in the house.（成立する）
　which I live → I live the house.（成立しない → 前置詞が足りない）

★ ポイント：日本語訳には前置詞が現れない。「私が住んでいる家」「私が話した人」からは in や with が見えないので、必ず英語の動詞の側から確認する。

⚠ 注意：関係代名詞を省略しても前置詞は残る。the house I live in ／ the person I talked with。前置詞まで一緒に消してはいけない。`,
      },
      {
        heading: '前置詞を前に出す形（in which / with whom）',
        body: `前置詞は関係代名詞の直前に置くこともできる。書きことばやかたい文章で使われる形である。

　This is the house which I live in.（ふつうの言い方）
　This is the house in which I live.（かたい言い方）

　The friend who(m) I went to the concert with is Ken.
　The friend with whom I went to the concert is Ken.

■ このときの重要な制限
①前置詞の直後に置けるのは whom（人）と which（もの）だけ。
　× the house in that I live　　× the friend with who I went
②前置詞＋関係代名詞は省略できない。
　× the house in I live
③前置詞を前に出したら、節の最後には置かない（二重に書かない）。
　× the house in which I live in

■ 意味は同じ
どちらの形でも意味は変わらない。入試では「in which を which 〜 in に書きかえよ」「that が使えない位置はどこか」といった形で問われる。

★ ポイント：that は前置詞の直後に置けない。これは that が使えない代表的な場面なので、次の課の「that が使えない場合」とセットで覚える。

⚠ 注意：前置詞を前に出す形では、関係代名詞のあとが〈主語＋動詞〉で、しかも欠けがない完全な文に見える。in which I live は I live だけで文が成り立っているように見えるが、in の目的語が which として前に出ているだけである。`,
      },
    ],
    trapExamples: [
      {
        question: 'This is the house ( ) I live. の空所に which を入れれば正しい文になりますか。',
        wrongAnswer: 'なる（This is the house which I live. で正しい）',
        trapExplanation:
          '「目的格の関係代名詞を入れれば完成する」と考え、もとの文 I live in it. にあった前置詞 in を落としてしまう。日本語の「私が住んでいる家」には前置詞にあたる語がないので気づきにくい。',
        correctAnswer: 'ならない。This is the house which I live in.（または This is the house in which I live.）が正しい。',
        correctExplanation:
          'live は「〜に住む」と言うのに in が必要な動詞である。関係詞節を元に戻すと I live in the house. となり、in が要ることがわかる。前置詞は節の最後に残すか、関係代名詞の前に出すかのどちらかで、消してはいけない。',
      },
      {
        question: '( )に入る語を選びなさい。This is the pen with ( ) I wrote the letter.（that / which）',
        wrongAnswer: 'that',
        trapExplanation:
          'that は who にも which にも使える万能の関係代名詞だと覚えているため、前置詞の後ろでも使えると思ってしまう。',
        correctAnswer: 'which',
        correctExplanation:
          '前置詞の直後に置ける関係代名詞は whom と which だけで、that は置けない。that を使いたいなら前置詞を節の最後に回して This is the pen that I wrote the letter with. とする。前置詞を前に出す形では that も省略も使えない。',
      },
    ],
  },

  // ───────── 3. that の用法（s304〜s307） ─────────
  {
    id: 'koko_eigo_s304',
    subject: 'eigo',
    examType: 'koko',
    title: 'that①：who・which の代わりになる万能の関係代名詞',
    description: 'that が人にもものにも使えること、人＋ものの先行詞では that しか使えないことを押さえる',
    intro:
      '関係代名詞を三つも覚えるのは大変だ——そう思った人に朗報です。that は人にもものにも使えて、主格でも目的格でも使えます。ただし「いつでも that でよい」わけではありません。まずは that が活躍する場面を確認してから、使えない場面へ進みましょう。',
    order: 804,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      'that は先行詞が人でもものでも使える（who・which の代わり）。',
      '主格でも目的格でも使える。所有格（whose）の代わりにはならない。',
      '先行詞が「人＋もの（動物）」のときは that しか使えない。',
      '目的格の that は省略できるが、主格の that は省略できない。',
      '会話や試験の長文では that がいちばんよく使われる。',
    ],
    sections: [
      {
        heading: 'that は who・which の両方の代わりになる',
        body: `that は、先行詞の種類を問わずに使える関係代名詞である。

■ 人が先行詞（who の代わり）
　I have a friend that lives in Osaka.（＝ who lives in Osaka）
　The man that we met is a doctor.（＝ whom we met）

■ もの・動物が先行詞（which の代わり）
　This is the bus that goes to the station.（＝ which goes）
　The book that I read last night was interesting.（＝ which I read）

■ 主格でも目的格でも使える
　主格：the girl that plays the piano（直後が動詞）
　目的格：the girl that I know（直後が主語＋動詞）

■ ただし所有格の代わりにはならない
　× a friend that father is a doctor
　○ a friend whose father is a doctor
　whose だけは that で置きかえられない。

★ ポイント：that が使えるかどうかで迷ったら、「所有格ではないか」「前置詞の直後ではないか」「コンマの後ろではないか」の三つを確認する。この三つ以外なら that が使える。

⚠ 注意：目的格の that は省略できるが、主格の that は省略できない。× This is the bus goes to the station. は誤り。`,
      },
      {
        heading: '「人＋もの」が先行詞のときは that しか使えない',
        body: `先行詞に人と人以外がいっしょに含まれるとき、who も which も使えない。人と物のどちらにも使える that だけが残る。

例）Look at the boy and the dog that are running in the park.
　　（公園を走っている男の子と犬を見て）
　　→ 先行詞は the boy and the dog。who では犬が説明できず、which では男の子が説明できない。だから that。

例）We talked about the people and the places that we saw in Kyoto.
　　（私たちは京都で見た人々と場所について話した）

■ 動詞の形に注意
　先行詞が and で結ばれて2つ以上あるので複数扱いになる。
　the boy and the dog that are running（× is running）

■ 似た形との区別
　Look at the boy who is running with a dog.（先行詞は the boy だけ → who）
　先行詞が本当に2つあるのか、後ろの語句が単なる修飾なのかを見きわめる。

★ ポイント：入試では「先行詞が人＋もの → that」は選択肢問題の定番。選択肢に who / which / that が並んでいたら、まず先行詞に人と人以外が混ざっていないか確認する。

⚠ 注意：この場合も所有格や前置詞の直後には使えないという that の制限は変わらない。「人＋もの」だから何でも that でよい、というわけではない。`,
      },
    ],
    trapExamples: [
      {
        question: 'I have a friend that lives in Osaka. この英文は正しいですか、誤りですか。',
        wrongAnswer: '誤り。先行詞が人なので who にしなければならない。',
        trapExplanation:
          '「人には who、ものには which、that はその代わり」と習うと、that を格下の代用品と考え、人が先行詞のときは who でなければならないと思い込んでしまう。',
        correctAnswer: '正しい（who を使っても同じ意味になる）',
        correctExplanation:
          'that は先行詞が人でもものでも使える。したがって a friend that lives in Osaka も a friend who lives in Osaka も正しい。むしろ会話では that のほうがよく使われる。that が使えないのは所有格・前置詞の直後・コンマ付きの継続用法の三つの場面だけである。',
      },
      {
        question: '( )に入る語を選びなさい。Look at the boy and the dog ( ) are running in the park.（who / which / that）',
        wrongAnswer: 'who',
        trapExplanation:
          '先行詞の先頭に the boy という人がいるので、それだけを見て who を選んでしまう。and でつながれたもう一方の the dog が説明できなくなることに気づかない。',
        correctAnswer: 'that',
        correctExplanation:
          '先行詞は the boy and the dog で、人と動物が混ざっている。who では犬を、which では男の子を説明できないので、両方に使える that を用いる。先行詞が2つで複数扱いになるため、動詞も are running となる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s305',
    subject: 'eigo',
    examType: 'koko',
    title: 'that②：that を使うのが好まれる場合',
    description: '最上級・the only・-thing・all などのあとで that が選ばれる型を覚える',
    intro:
      '「私が今まで読んだ中でいちばんおもしろい本」「彼が言ったことすべて」。この二つの日本語には共通点があります。どちらも「これ以外にない」と範囲をぎゅっと限定していることです。英語では、こういうとき関係代名詞に that を選びます。理由がわかると丸暗記が減ります。',
    order: 805,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '最上級（the best / the most 〜）が先行詞に付くときは that。',
      'the only / the first / the last / the same / the very が付くときは that。',
      'all / every / no / any が付くときは that。',
      'everything / something / anything / nothing が先行詞のときは that。',
      'これらは「範囲を限定しきる語」で、that と相性がよいと覚える。',
    ],
    sections: [
      {
        heading: 'that が好まれる先行詞のリスト',
        body: `次のような語が先行詞に付いているとき、関係代名詞は that を使うのがふつうである。

■ ①最上級
　This is the most interesting book that I have ever read.
　（これは私が今まで読んだ中でいちばんおもしろい本です）
　She is the kindest woman that I have ever met.

■ ②the only / the first / the last / the same / the very
　He is the only student that can answer the question.
　（その質問に答えられる唯一の生徒だ）
　This is the first letter that I wrote in English.

■ ③all / every / no / any
　All the students that came to the party enjoyed it.
　That is all that I know.（それが私が知っているすべてです）

■ ④-thing で終わる語
　Everything that he said was true.（彼が言ったことはすべて本当だった）
　There is something that I want to tell you.

★ ポイント：どれも「それしかない・すべてだ」と範囲を限定しきる表現である。すでに限定されているものにさらに説明を加えるとき、英語は that を選ぶ、と理解しておくと覚えやすい。

⚠ 注意：④の -thing が先行詞のときに which を使うことはできない。× everything which he said は避ける（入試では誤りとして扱われる）。`,
      },
      {
        heading: '実際の出題での使われ方',
        body: `入試では、次の三つの形で問われる。

■ ①空所補充
　Everything ( ) he said was true.（which / that）→ that
　This is the best movie ( ) I have ever seen.（which / that）→ that

■ ②誤り指摘・訂正
　× She is the kindest woman which I have ever met.
　→ 先行詞が人なので which は使えず、しかも最上級が付いているので that が最適。
　○ She is the kindest woman that I have ever met.

■ ③並べかえ英作文
　「これは私が今までに見た中でいちばん美しい景色です」
　This is the most beautiful view that I have ever seen.
　have ever seen（今までに見た）と現在完了の経験用法がセットで出ることが多い。

■ 省略にも注意
　これらの that はほとんどが目的格なので、省略できる。
　This is the best movie I have ever seen. も正しい。
　ただし主格のときは省略できない。He is the only student that can answer it. の that は主格なので省略不可。

★ ポイント：最上級＋that＋have ever ＋過去分詞は、そのまま暗唱できるようにしておくと英作文で強い。

⚠ 注意：「that が好まれる」は規則であって絶対の禁止ではない場面もあるが、選択肢に that があるなら迷わず that を選ぶこと。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。Everything ( ) he said was true.（which / that）',
        wrongAnswer: 'which',
        trapExplanation:
          '先行詞 Everything を「もの」だと判断し、「人には who、ものには which」の原則を機械的に当てはめてしまう。-thing で終わる語が特別扱いされることを知らないと必ず引っかかる。',
        correctAnswer: 'that',
        correctExplanation:
          'everything / something / anything / nothing が先行詞のときは that を使う。Everything that he said was true.（彼の言ったことはすべて本当だった）。この that は said の目的語が欠けている目的格なので、Everything he said was true. と省略することもできる。',
      },
      {
        question: '次の英文の誤りを1か所直しなさい。She is the kindest woman which I have ever met.',
        wrongAnswer: 'ever を削除する',
        trapExplanation:
          'have ever met という見慣れない並びを見て、ever が余分だと感じてしまう。しかし have ever met は現在完了の経験用法「今までに会った」で正しい表現である。',
        correctAnswer: 'which を that に直す（She is the kindest woman that I have ever met.）',
        correctExplanation:
          '先行詞 woman は人なので which は使えない。さらに最上級 the kindest が付いているので、who や whom よりも that を使うのがふつうである。「最上級＋that＋have ever＋過去分詞」は入試頻出の型なのでまとめて覚えておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s306',
    subject: 'eigo',
    examType: 'koko',
    title: 'that③：that が使えない二つの場面',
    description: '前置詞の直後とコンマ付きの継続用法では that が使えないことを理解する',
    intro:
      '万能に見える that にも、入れないところが二つだけあります。前置詞のすぐ後ろと、コンマのすぐ後ろです。そしてこのコンマの有無は、実は文の意味そのものを変えてしまいます。たった一つの記号が「息子が2人だけ」か「ほかにもいる」かを分けるのです。',
    order: 806,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '前置詞の直後に that は置けない（× in that、× with that）。',
      'コンマ付きの継続用法では that を使えない（, which ／ , who を使う）。',
      '継続用法では関係代名詞を省略できない。',
      '継続用法は「補足説明」で、前から順に訳す（そしてそれは〜）。',
      '限定用法（コンマなし）は「どれのことか」を絞りこむ説明。',
    ],
    sections: [
      {
        heading: '①前置詞の直後、②コンマの直後',
        body: `that が使えないのは次の二つの場面だけである。

■ ①前置詞の直後
　× The house in that he lives is very old.
　○ The house in which he lives is very old.
　○ The house that he lives in is very old.（前置詞を後ろに回せば that が使える）

前置詞を関係代名詞の前に出す形では which（もの）と whom（人）しか置けない。that を使いたければ前置詞を節の最後に回す。

■ ②コンマ付きの継続用法
　× I visited Nara, that is famous for its old temples.
　○ I visited Nara, which is famous for its old temples.
　　（私は奈良を訪れた。そこは古いお寺で有名だ）
　○ I met Mr. Tanaka, who teaches us math.
　　（私は田中先生に会った。その先生は私たちに数学を教えている）

コンマの後ろに置けるのは which と who(m) だけである。

■ 継続用法では省略もできない
　× I visited Nara, is famous for its old temples.
　目的格でも省略できない。× I met Mr. Tanaka, we like very much.（○ whom we like very much）

★ ポイント：that が使えない場面は「前置詞の直後」「コンマの直後」の二つだけ、と数を決めて覚える。

⚠ 注意：固有名詞（Nara, Mr. Tanaka など）が先行詞のときは、ふつう継続用法（コンマ付き）になる。固有名詞はすでに一つに決まっていて、絞りこむ必要がないからである。`,
      },
      {
        heading: 'コンマの有無で意味が変わる',
        body: `コンマの有無は見落としやすいが、意味を大きく変える。

■ 限定用法（コンマなし）
　He has two sons who became doctors.
　→「医者になった息子が2人いる」。息子はほかにもいるかもしれず、そのうち医者になったのが2人、という意味になる。関係詞節が「どの息子か」を絞りこんでいる。

■ 継続用法（コンマあり）
　He has two sons, who became doctors.
　→「彼には息子が2人いて、その2人とも医者になった」。息子は2人だけで、関係詞節はその2人についての補足説明である。

■ 訳し方のちがい
　限定用法：後ろから前へ戻して訳す（「〜する〇〇」）。
　継続用法：前から順に訳す（「〇〇、そしてそれは〜」「〇〇だが、それは〜」）。

例）I have a friend who lives in Canada.（カナダに住んでいる友達がいる／ほかにも友達はいる）
例）I called Ken, who was still sleeping.（ケンに電話したが、彼はまだ寝ていた）

■ 継続用法で使える形
　, who ／ , whom ／ , whose ／ , which の四つ。, that は不可。

★ ポイント：継続用法の which は、前の文全体を先行詞にすることもできる。
　He said nothing, which made her angry.（彼は何も言わなかった。そのことが彼女を怒らせた）

⚠ 注意：英作文でコンマを付けるかどうか迷ったら、「絞りこむ説明」なら付けない、「補足説明」なら付ける、と判断する。固有名詞のあとは補足説明になるのでコンマを付ける。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。I visited Nara, ( ) is famous for its old temples.（that / which）',
        wrongAnswer: 'that',
        trapExplanation:
          'that は人にもものにも使える万能の関係代名詞だと覚えているので、コンマの後ろでも使えると考えてしまう。コンマが意味を持つ記号だという意識が薄いと気づけない。',
        correctAnswer: 'which',
        correctExplanation:
          'コンマ付きの継続用法では that を使えない。使えるのは which・who・whom・whose だけである。I visited Nara, which is famous for its old temples.（私は奈良を訪れた。そこは古いお寺で有名だ）と、前から順に訳す。',
      },
      {
        question:
          'He has two sons who became doctors. と He has two sons, who became doctors. の意味のちがいを説明しなさい。',
        wrongAnswer: 'コンマがあるだけで、意味は同じ。',
        trapExplanation:
          'コンマを単なる読みやすさのための記号だと考えてしまう。日本語訳を作るときにどちらも「医者になった2人の息子がいる」としてしまい、限定用法と継続用法の区別に気づかない。',
        correctAnswer:
          'コンマなしは「医者になった息子が2人いる（ほかにも息子がいるかもしれない）」、コンマありは「息子が2人いて、その2人とも医者になった（息子は2人だけ）」。',
        correctExplanation:
          'コンマなしの限定用法は「どの息子か」を絞りこむ説明なので、絞りこむ余地＝ほかの息子の存在を暗示する。コンマありの継続用法は two sons についての補足説明なので、息子は2人で全部ということになる。継続用法は前から順に訳す。',
      },
    ],
  },

  {
    id: 'koko_eigo_s307',
    subject: 'eigo',
    examType: 'koko',
    title: 'that の識別：関係代名詞・接続詞・指示語',
    description: 'that の三つの働きを「後ろの形」だけで見分ける手順を身につける',
    intro:
      '英語で最も多く登場する単語の一つが that です。「あれ」「〜ということ」「〜する〇〇」と、まったく別の顔を持っています。しかし見分け方は一つだけ。that の後ろに何が続くかを見る、それだけです。この一手で長文の読み違いが確実に減ります。',
    order: 807,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '後ろに名詞が来る、または that が単独で使われる → 指示語（あれ・あの）。',
      '後ろが完全な文（欠けなし）→ 接続詞（〜ということ）。',
      '後ろが不完全（主語または目的語が欠ける）→ 関係代名詞。',
      '接続詞の that は省略できる。関係代名詞の that は目的格のときだけ省略できる。',
      '同格の that（the news that 〜）は後ろが完全な文なので接続詞の仲間。',
    ],
    sections: [
      {
        heading: '三つの that を後ろの形で見分ける',
        figureId: 'lf_kokoeigoext09_307',
        body: `that の識別は「後ろに何が続くか」だけで決まる。

■ ①指示語の that（あれ・あの）
　That is my bike.（あれは私の自転車です）… that が単独で主語
　That book is interesting.（あの本はおもしろい）… that ＋名詞
　→ 後ろに名詞が来るか、that だけで名詞として使われている。

■ ②接続詞の that（〜ということ）
　I know that he is kind.（私は彼が親切だと知っている）
　→ that の後ろは he is kind で、主語も補語もそろった完全な文。
　→ この that は省略できる（I know he is kind.）。

■ ③関係代名詞の that（〜する〇〇）
　This is the book that I bought.（これは私が買った本です）
　→ that の後ろは I bought で、bought の目的語が欠けている。
　→ 直前に先行詞（the book）がある。

■ 判定の手順
①that の直後が名詞か？ → 指示語
②that の前に先行詞になりそうな名詞があるか？
③that の後ろの文に欠けがあるか？ → 欠けあり＝関係代名詞、欠けなし＝接続詞

★ ポイント：「先行詞があるかどうか」だけでは決まらない。the news that 〜 のように名詞が前にあっても接続詞のことがある。決め手はあくまで「後ろの文に欠けがあるか」である。

⚠ 注意：I think that book is expensive. の that は指示語である。I think のあとだから接続詞、と決めつけると訳が「私はその本が高いと思う」ではなく別の意味に崩れる。`,
      },
      {
        heading: '同格の that との区別',
        body: `名詞の直後に that が来て、しかも後ろが完全な文になっている場合がある。これを同格の that という。

例）The news that she had passed the exam surprised us.
　　（彼女が試験に合格したという知らせは私たちを驚かせた）
　　→ that の後ろ she had passed the exam は完全な文。
　　→ この that は「〜という」と名詞の中身を説明している＝接続詞の仲間。

例）The news that she told me was surprising.
　　（彼女が私に話してくれた知らせは驚くべきものだった）
　　→ that の後ろ she told me は、told の目的語が欠けている（she told me the news）。
　　→ こちらは関係代名詞（目的格）。

同じ The news that 〜 でも、後ろの文が完全かどうかで働きが変わる。

■ 同格の that と相性のよい名詞
　news / fact / idea / opinion / hope / feeling / rumor
　例）the fact that he was late（彼が遅刻したという事実）

■ 見分けの練習
　the idea that we should start early（後ろが完全 → 同格・接続詞）
　the idea that he gave us（gave の目的語が欠ける → 関係代名詞）

★ ポイント：訳してみて「〜という〇〇」となれば同格、「〜する〇〇」となれば関係代名詞、という確認もできる。

⚠ 注意：同格の that は省略しないのがふつう。関係代名詞の目的格の that は省略できる。この差も判別の手がかりになる。`,
      },
    ],
    trapExamples: [
      {
        question: 'I think that book is expensive. の that の働きを答えなさい。',
        wrongAnswer: '接続詞（〜ということ）',
        trapExplanation:
          'I think のあとの that は接続詞、という型を機械的に当てはめてしまう。that の直後が book という名詞であることを確認していないために起こる誤り。',
        correctAnswer: '指示語（形容詞）で「あの」の意味。that book で「あの本」。',
        correctExplanation:
          'that の直後が名詞 book なので指示語である。訳は「私はあの本は高いと思う」。接続詞の that なら後ろに〈主語＋動詞〉の完全な文が来るので、I think that the book is expensive. のように the book is という形になる。直後が名詞か文かを必ず確かめる。',
      },
      {
        question: 'The news that she told me was surprising. の that は接続詞と関係代名詞のどちらですか。',
        wrongAnswer: '接続詞（同格の that）',
        trapExplanation:
          'news that という並びを見た瞬間に「〜という知らせ」の同格の that を思い浮かべてしまう。名詞の種類だけで判断し、後ろの文に欠けがあるかを確かめないために起こる。',
        correctAnswer: '関係代名詞（目的格）',
        correctExplanation:
          'that の後ろは she told me で、told の目的語が欠けている（もとは She told me the news.）。欠けがあるので関係代名詞である。同格の that なら The news that she had passed the exam 〜 のように後ろが完全な文になる。判定は名詞ではなく後ろの形で行う。',
      },
    ],
  },

  // ───────── 4. 目的格の省略（s308〜s311） ─────────
  {
    id: 'koko_eigo_s308',
    subject: 'eigo',
    examType: 'koko',
    title: '目的格の省略①：省略できる関係代名詞',
    description: '目的格の関係代名詞が省略される形に慣れ、省略しても残るものを確認する',
    intro:
      '英語話者は、言わなくても伝わる語をどんどん落とします。関係代名詞の目的格もその一つで、実際の文章では省略されているほうがふつうです。「なくても意味が決まる」からこそ落とせる。逆に言えば、落とせない関係代名詞もあります。まず落とせるほうから見ていきましょう。',
    order: 808,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '省略できるのは目的格の関係代名詞（whom / which / that）だけ。',
      '省略すると〈名詞＋主語＋動詞〉という並びになる。',
      '省略されるのは関係代名詞だけで、前置詞は残る（the girl I talked with）。',
      '省略しても意味は変わらない。長文では省略形のほうが多い。',
      'コンマ付きの継続用法では、目的格でも省略できない。',
    ],
    sections: [
      {
        heading: '目的格は落としてよい',
        figureId: 'lf_kokoeigoext09_308',
        body: `目的格の関係代名詞は、あってもなくても意味が決まるので省略できる。

例）The movie which we saw last night was exciting.
　→ The movie we saw last night was exciting.
　（私たちが昨夜見た映画はわくわくした）

例）The man whom I met at the station was Ken's father.
　→ The man I met at the station was Ken's father.

例）This is the cake that my mother made.
　→ This is the cake my mother made.

■ 省略後の形の特徴
　名詞のすぐ後ろに〈主語＋動詞〉が続く。
　The movie ＋ we saw ＋ …
　この並びを見たら「関係代名詞が省略されている」と判断できる。

■ 省略しても文全体の動詞は変わらない
　The movie we saw last night was exciting.
　→ 主語は The movie we saw last night、述語動詞は was。
　節の中の saw と文全体の was の二つが並ぶのは正常な形である。

★ ポイント：省略できるかどうかは格で決まる。直後が〈主語＋動詞〉なら目的格なので省略可、直後が動詞なら主格なので省略不可。

⚠ 注意：継続用法（コンマ付き）は目的格でも省略できない。× I called Ken, I like very much. は誤りで、○ I called Ken, whom I like very much. とする。`,
      },
      {
        heading: '省略しても前置詞は残る',
        body: `省略されるのは関係代名詞だけである。もとの文にあった前置詞は必ず残る。

例）The girl whom I talked with is Ken's sister.
　→ The girl I talked with is Ken's sister.（with は残る）
　× The girl I talked is Ken's sister.

例）This is the house which I live in.
　→ This is the house I live in.（in は残る）

例）The pen that I wrote the letter with is a present from my aunt.
　→ The pen I wrote the letter with is a present from my aunt.

■ 前置詞が前に出ている形は省略できない
　○ The girl with whom I talked is Ken's sister.
　× The girl with I talked is Ken's sister.
　前置詞＋関係代名詞のセットになっているときは、関係代名詞を落とせない。

■ 確認の方法
　省略形を見たら、頭の中で関係代名詞を戻して元の2文に分解する。
　The girl I talked with 〜 → The girl ＋ I talked with the girl. → 成立する。
　The girl I talked 〜 → I talked the girl. → 成立しない（前置詞が足りない）。

★ ポイント：日本語訳には前置詞が出てこない（「私が話した女の子」）。英語の動詞が前置詞を必要とするかどうかで判断する。

⚠ 注意：talk with / talk to / talk about は意味がちがう。「〜について話す」なら about、「〜と話す」なら with や to。省略の問題でも動詞と前置詞の組み合わせを正しく選ぶこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'The book I read last night was interesting. この英文に誤りはありますか。',
        wrongAnswer: 'ある。book と I の間に which（または that）が必要である。',
        trapExplanation:
          '名詞のすぐ後ろに主語が来る形に慣れていないため、語が抜けている壊れた文に見えてしまう。省略が「省いてもよい」ではなく「省いてはいけない」と思い込んでいる。',
        correctAnswer: '誤りはない。目的格の関係代名詞（which / that）が省略された正しい文である。',
        correctExplanation:
          'read の目的語が欠けている（もとは I read the book last night.）ので、省略されているのは目的格の関係代名詞である。目的格は省略してよいので The book I read last night was interesting.（私が昨夜読んだ本はおもしろかった）は正しい。文全体の動詞は was。',
      },
      {
        question: 'The girl whom I talked with is Ken\'s sister. の関係代名詞を省略した形を書きなさい。',
        wrongAnswer: 'The girl I talked is Ken\'s sister.',
        trapExplanation:
          '関係代名詞を省くときに、その近くにある前置詞 with もいっしょに落としてしまう。日本語の「私が話した女の子」には with にあたる語がないので、余分に見えてしまう。',
        correctAnswer: 'The girl I talked with is Ken\'s sister.',
        correctExplanation:
          '省略できるのは関係代名詞 whom だけで、with は talk with 〜（〜と話す）という動詞と前置詞の組み合わせの一部なので残る。元の文に戻すと I talked with the girl. となり、with が必要だと確かめられる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s309',
    subject: 'eigo',
    examType: 'koko',
    title: '目的格の省略②：主格は絶対に省略できない',
    description: '主格の関係代名詞を省いた誤文を見抜き、なぜ壊れるのかを説明できるようにする',
    intro:
      '「私にはアメリカに住んでいる友達がいます」を I have a friend lives in America. と書く答案が、毎年たくさん出ます。省略できるのは目的格だけ——この一行を知らないだけで落とす一点です。なぜ主格は省略できないのか、文の形から理由を確かめておきましょう。',
    order: 809,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '主格の関係代名詞（who / which / that）は省略できない。',
      '省略すると〈名詞＋動詞〉となり、1文に動詞が2つある壊れた文になる。',
      '主格でも〈who / which is ＋ 分詞〉のときは who is / which is をまとめて省ける。',
      '省略の可否は「直後が動詞か、主語＋動詞か」で判断する。',
      '英作文では、省略できるか迷ったら省略せずに書くほうが安全。',
    ],
    sections: [
      {
        heading: 'なぜ主格は省略できないのか',
        figureId: 'lf_kokoeigoext09_309',
        body: `主格の関係代名詞を省略すると、文の形が壊れる。

○ I have a friend who lives in America.
× I have a friend lives in America.

誤文では、a friend の直後に動詞 lives が来ている。この文には have と lives という二つの動詞があるのに、それをつなぐ語が何もない。英語では一つの文（節）に述語動詞は一つだけなので、この形は成立しない。

一方、目的格の省略では形が壊れない。
　The book I read was interesting.
　→ The book のあとに I read という新しい〈主語＋動詞〉が始まっているので、節の切れ目がはっきりわかる。だから関係代名詞がなくても読める。

■ 主格の省略ができない例をもう一つ
　○ This is the bus which goes to the station.
　× This is the bus goes to the station.

■ 判断の手順
①関係代名詞（またはそれが入るはずの場所）の直後を見る。
②動詞が来ていれば主格 → 省略不可。
③〈主語＋動詞〉が来ていれば目的格 → 省略可。

★ ポイント：「名詞＋動詞」が直接並ぶ英文は誤り、「名詞＋主語＋動詞」が並ぶのは正しい。この形の差で覚える。

⚠ 注意：入試の誤り訂正問題では、この主格の省略が最頻出である。動詞が2つ並んでいたら、まず関係代名詞の抜けを疑う。`,
      },
      {
        heading: '〈who is ＋ 分詞〉はまとめて省ける',
        body: `主格でも、後ろが〈be動詞＋分詞〉になっているときは、関係代名詞と be動詞をまとめて省くことができる。

例）The boy who is playing tennis is my brother.
　→ The boy playing tennis is my brother.（テニスをしている男の子は私の兄です）

例）The language which is spoken in Brazil is Portuguese.
　→ The language spoken in Brazil is Portuguese.（ブラジルで話されている言語はポルトガル語です）

■ 大事なのは「まとめて」消すこと
　× The boy who playing tennis is my brother.（is だけ消した）
　× The boy is playing tennis is my brother.（who だけ消した）
　who is / which is / that is をひとかたまりで消して、分詞（-ing / 過去分詞）を残す。

■ これは省略ではなく「分詞の後置修飾」
　文法的には、関係代名詞を省いたのではなく、分詞が名詞を後ろから修飾する別の形になったと考える。書きかえ問題として出題される。

■ 見分けの練習
　The boy playing tennis …（正しい・分詞）
　The boy plays tennis …（誤り・動詞が2つ）
　-ing の形かどうかが分かれ目になる。

★ ポイント：「主格は省略できない」は原則。ただし〈関係代名詞＋be動詞〉のセットだけは丸ごと消せる、と例外を一つ添えて覚える。

⚠ 注意：be動詞がない主格（who lives / which goes）は分詞にできないので、関係代名詞を必ず書く。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の誤りを直しなさい。I have a friend lives in America.',
        wrongAnswer: '誤りはない（関係代名詞が省略されているだけである）',
        trapExplanation:
          '目的格の省略を学んだあとに、「関係代名詞はいつでも省ける」と一般化してしまう。日本語の「アメリカに住んでいる友達」には関係代名詞にあたる語がないので、なくても自然に感じてしまう。',
        correctAnswer: 'I have a friend who lives in America.（who は that でもよい）',
        correctExplanation:
          '省略できるのは目的格だけで、主格は省略できない。省略した形では a friend lives と〈名詞＋動詞〉が並び、have と lives の二つの動詞をつなぐものがない壊れた文になる。lives の主語にあたる who を必ず書く。',
      },
      {
        question:
          '正しい英文はどちらですか。(a) The boy playing tennis is my brother. (b) The boy plays tennis is my brother.',
        wrongAnswer: '(b)',
        trapExplanation:
          '「テニスをしている少年」を英語にするとき、関係代名詞を省いて動詞をそのまま続ければよいと考えてしまう。plays に三単現の s が付いているぶん、正しい形に見えてしまうのも落とし穴である。',
        correctAnswer: '(a)',
        correctExplanation:
          '(b) は plays と is の二つの動詞が並ぶ壊れた文である。主格の who is はまとめて省けるが、そのとき動詞は現在分詞 playing の形になる。(a) は The boy who is playing tennis is my brother. と同じ意味で、分詞が名詞を後ろから修飾している。',
      },
    ],
  },

  {
    id: 'koko_eigo_s310',
    subject: 'eigo',
    examType: 'koko',
    title: '目的格の省略③：〈名詞＋主語＋動詞〉は省略の合図',
    description: '省略された関係代名詞を長文の中で見抜き、文の骨格を取り出す',
    intro:
      '長文の一文が急に意味不明になるとき、多くは省略された関係代名詞が原因です。「名詞のすぐ後ろに、いきなり別の主語が現れる」。この並びを見つけたら、そこに見えない関係代名詞がいます。合図さえ知っていれば、読むスピードは変わります。',
    order: 810,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '〈名詞＋主語＋動詞〉が並んだら、目的格の関係代名詞が省略されている。',
      '省略された関係詞節は、次に現れる動詞の直前で終わる。',
      '文全体の述語動詞は、関係詞節の外にある動詞。',
      '述語動詞の単数・複数は、節の中の名詞ではなく主語の芯で決める。',
      '訳は「〜する（名詞）」と後ろから戻す。2文に切って訳さない。',
    ],
    sections: [
      {
        heading: '合図を見つけて節を切り出す',
        figureId: 'lf_kokoeigoext09_310',
        body: `省略された関係代名詞を見つける手順は次のとおりである。

例）The cake my mother made was delicious.

①名詞（The cake）のすぐ後ろに、別の主語（my mother）が来ている → 省略の合図。
②そこから動詞（made）までが関係詞節。
　The cake (that) my mother made …
③その次に現れる動詞 was が文全体の述語動詞。
④訳す。「母が作ったケーキはおいしかった」

■ もう一つの例
　The man my father works with is very kind.
　→ The man (whom) my father works with までが主語のかたまり。
　→ 述語動詞は is。「父がいっしょに働いている男性はとても親切です」

■ 動詞が三つ以上に見えるとき
　The pictures he took in Kyoto were very beautiful.
　→ took は節の中、were が文全体の動詞。主語の芯は The pictures（複数）なので were。
　→ 節の中の he（単数）につられて was としない。

★ ポイント：英語の一文には述語動詞が一つだけ。動詞が二つ見えたら、必ずどちらかが節の中にある。

⚠ 注意：〈名詞＋主語＋動詞〉の並びは、that が省略された接続詞のこともある（I think he is right.）。前の語が think / know / say などの動詞なら接続詞の that、名詞なら関係代名詞、と区別する。`,
      },
      {
        heading: '2文に切って訳さない',
        body: `省略に気づかないと、一つの文を二つの文のように訳してしまう。

例）I lost the watch my grandfather gave me.
　×「私は時計をなくした。祖父は私にくれた。」
　○「私は祖父がくれた時計をなくしました。」

例）The song Ken sang at the concert made everyone happy.
　×「その歌はケンがコンサートで歌った。みんなを幸せにした。」
　○「ケンがコンサートで歌った歌は、みんなを幸せにしました。」

■ 骨格を先に取る
　(The song Ken sang at the concert) made everyone happy.
　主語＝カッコの中身全部、動詞＝made、目的語＝everyone、補語＝happy。
　make ＋ 人 ＋ 形容詞で「（人）を〜にする」。

■ 練習の型
　次の三つを必ず口に出して確認する。
　①主語はどこからどこまでか
　②述語動詞はどれか
　③関係詞節はどの名詞を説明しているか

★ ポイント：省略形は長文でも英作文でも頻出。「〜が…した〇〇」という日本語を見たら、英語では〈名詞＋主語＋動詞〉で書けると考える。

⚠ 注意：省略した形で書いても減点されないが、関係代名詞を入れて書いても正解になる。自信がなければ that を入れて書けばよい。`,
      },
    ],
    trapExamples: [
      {
        question: 'The man my father works with is very kind. の文全体の述語動詞はどれですか。',
        wrongAnswer: 'works',
        trapExplanation:
          '左から読んで最初に見つかる動詞を述語動詞だと思ってしまう。関係代名詞が省略されているため節の始まりが見えず、my father works with が説明部分だと気づけない。',
        correctAnswer: 'is',
        correctExplanation:
          'The man の直後に別の主語 my father が来ているので、目的格の関係代名詞が省略されている。The man (whom) my father works with までが主語のかたまりで、その外にある is が文全体の述語動詞である。訳は「父がいっしょに働いている男性はとても親切です」。',
      },
      {
        question: '次の英文の誤りを直しなさい。The pictures he took in Kyoto was very beautiful.',
        wrongAnswer: 'took を take に直す',
        trapExplanation:
          '「どこかの動詞の形が変だ」と感じて、目についた節の中の動詞をいじってしまう。主語が The pictures という複数名詞であることを、離れた位置にあるために見落とす。',
        correctAnswer: 'was を were に直す（The pictures he took in Kyoto were very beautiful.）',
        correctExplanation:
          'he took in Kyoto は関係代名詞が省略された関係詞節で、主語の芯は The pictures（複数）である。したがって述語動詞は were。節の中の he（単数）や Kyoto につられて was としないこと。節をカッコで消して骨格 The pictures were very beautiful. を確かめる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s311',
    subject: 'eigo',
    examType: 'koko',
    title: '目的格の省略④：省略を含む長文の読み方',
    description: '関係詞節を含む長い一文から、主語・動詞・目的語を素早く取り出す',
    intro:
      '入試の長文には、一文が四十語を超えるものもあります。それでも骨格は必ず〈主語＋動詞〉の一組です。関係詞節という飾りをいったん外して芯だけを見る訓練をすると、知らない単語があっても文の意味の方向は決まります。',
    order: 811,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '長い一文はまず〈主語＋述語動詞〉の一組を探す。',
      '関係詞節（省略されたものも含む）はカッコでくくって外す。',
      '主語の芯は関係代名詞の直前、または最初の名詞。',
      '節が二重になることもある（関係詞節の中にさらに関係詞節）。',
      '訳は骨格 → 修飾の順で組み立てる。',
    ],
    sections: [
      {
        heading: '飾りを外して骨格を見る',
        body: `長い文を読む手順を固定しておくと、時間内に処理できるようになる。

例）The letters that my grandfather wrote to my grandmother during the war are kept in this box.

①関係代名詞 that を見つける。
②that から、次に主語なしで現れる動詞の直前までをカッコに入れる。
　The letters (that my grandfather wrote to my grandmother during the war) are kept in this box.
③カッコを外して骨格を読む。
　The letters are kept in this box.（それらの手紙はこの箱に保管されている）
④カッコの中を戻す。
　「祖父が戦争中に祖母に書いた手紙は、この箱に保管されています」

■ 省略されている場合も同じ
　The letters my grandfather wrote to my grandmother are kept in this box.
　→ 名詞 The letters の直後に主語 my grandfather が来ているので、そこから節が始まる。

■ 節が二重になる例
　The man who lives in the house that my father built is a teacher.
　→ that my father built は the house を説明し、who lives in the house that my father built が The man を説明している。
　→ 骨格は The man is a teacher.

★ ポイント：カッコをどこで閉じるかは「主語のない動詞が次に現れる直前」。この一点で決める。

⚠ 注意：節の中に前置詞句（in the house / during the war）が入ると長くなるが、切れ目は動詞で判断する。前置詞句の長さに惑わされない。`,
      },
      {
        heading: '骨格から日本語を組み立てる',
        body: `骨格が取れたら、日本語は「修飾 → 芯」の順に組み立てる。

例）The song Ken sang at the concert made everyone happy.
　骨格：The song made everyone happy.（その歌はみんなを幸せにした）
　修飾：Ken sang at the concert（ケンがコンサートで歌った）
　完成：「ケンがコンサートで歌った歌は、みんなを幸せにしました」

例）The book I borrowed from the library last week was written by a famous scientist.
　骨格：The book was written by a famous scientist.
　修飾：I borrowed from the library last week
　完成：「私が先週図書館で借りた本は、有名な科学者によって書かれたものでした」

■ 記述問題での注意
　和訳問題では、関係詞節を「そして〜」と前から訳し下すと減点されることがある。必ず「〜する（名詞）」の形にまとめる。
　ただし継続用法（コンマ付き）だけは前から訳す。

■ 英作文への応用
　「私が昨日会った先生はとても親切でした」
　→ 骨格「先生はとても親切でした」＝ The teacher was very kind.
　→ 修飾「私が昨日会った」＝ (whom) I met yesterday
　→ The teacher I met yesterday was very kind.

★ ポイント：英作文でも「骨格を先に書き、あとから修飾を差しこむ」順で作ると、動詞の数を間違えなくなる。

⚠ 注意：骨格の動詞を書き忘れる誤りが多い。× The teacher I met yesterday very kind. のように be動詞が抜けていないか、必ず見直す。`,
      },
    ],
    trapExamples: [
      {
        question: 'The song Ken sang at the concert made everyone happy. の主語・述語動詞・目的語を答えなさい。',
        wrongAnswer: '主語は Ken、述語動詞は sang、目的語は the song',
        trapExplanation:
          'Ken sang という〈主語＋動詞〉の並びが目立つので、それを文の骨格だと思ってしまう。関係代名詞が省略されていて、The song が文頭の主語であることを見落とす。',
        correctAnswer:
          '主語は The song (that) Ken sang at the concert（芯は The song）、述語動詞は made、目的語は everyone',
        correctExplanation:
          'The song の直後に別の主語 Ken が来ているので、そこから関係詞節が始まる。節をカッコで外すと The song made everyone happy. という骨格が残る。make ＋ 人 ＋ 形容詞で「（人）を〜にする」なので、「ケンがコンサートで歌った歌はみんなを幸せにした」となる。',
      },
      {
        question: 'The teacher I met yesterday very kind. この英作文の誤りを直しなさい。',
        wrongAnswer: 'I met を that I met に直す',
        trapExplanation:
          '関係代名詞が省略されている形に不安を感じて、そこを直せばよいと考えてしまう。目的格の省略は正しいので、本当の誤りである述語動詞の欠落に気づけない。',
        correctAnswer: 'The teacher I met yesterday was very kind.（be動詞 was を補う）',
        correctExplanation:
          '関係詞節 I met yesterday をカッコで外すと The teacher very kind. となり、述語動詞がないことがわかる。修飾が長くなると骨格の動詞を書き忘れやすい。英作文では「骨格を先に書き、あとから修飾を差しこむ」順で作ると防げる。',
      },
    ],
  },

  // ───────── 5. 関係代名詞と分詞の書きかえ（s312〜s314） ─────────
  {
    id: 'koko_eigo_s312',
    subject: 'eigo',
    examType: 'koko',
    title: '分詞との書きかえ①：現在分詞の後置修飾',
    description: '〈主格の関係代名詞＋be動詞＋-ing〉を現在分詞一語の修飾に直す',
    intro:
      '「あそこで走っている少年」を英語で言うとき、the boy who is running over there と the boy running over there の二通りがあります。長いほうから who is を抜いただけ。この一手を知っていると、書きかえ問題も長文の後置修飾も同時に片づきます。',
    order: 812,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '〈主格の関係代名詞＋be動詞＋-ing〉は、who is / which is をまとめて消して現在分詞だけを残せる。',
      'who だけ、is だけを消すのは誤り。必ずセットで消す。',
      '分詞が一語だけのときは名詞の前に置く（a running boy）。二語以上なら後ろに置く。',
      '分詞の後置修飾は「その名詞が自分でその動作をしている」ときに使う。',
      '書きかえても文全体の述語動詞は変わらない。',
    ],
    sections: [
      {
        heading: 'who is をまとめて消す',
        figureId: 'lf_kokoeigoext09_312',
        body: `主格の関係代名詞のあとが be動詞＋現在分詞になっているとき、〈関係代名詞＋be動詞〉をまとめて省ける。

例）the boy who is running over there
　→ the boy running over there（あそこで走っている少年）

例）The girl who is playing the piano is my sister.
　→ The girl playing the piano is my sister.（ピアノをひいている女の子は私の姉です）

例）Do you know the man who is talking with Ken?
　→ Do you know the man talking with Ken?

■ 消し方のルール
　○ who is をセットで消す → the boy running
　× is だけ消す → the boy who running（who が浮いてしまう）
　× who だけ消す → the boy is running（動詞が2つになる）

■ 一語か二語以上かで位置が変わる
　修飾語が分詞一語だけ → 名詞の前
　　a sleeping baby（眠っている赤ちゃん）
　分詞に語句が付く → 名詞の後ろ
　　a baby sleeping in the bed（ベッドで眠っている赤ちゃん）

★ ポイント：分詞の後置修飾は「名詞＋-ing」で始まる。長文でこの形を見たら、頭の中で who is を補って読むと関係がはっきりする。

⚠ 注意：the girl playing the piano は「ピアノをひいている女の子」だが、the girl plays the piano と書くと文になってしまい修飾にならない。-ing の形であることが決定的に重要である。`,
      },
      {
        heading: '進行形でない現在形も分詞にできる場合',
        body: `who is がない現在形の関係詞節でも、意味の上で「その名詞が動作をしている」なら分詞に直せることがある。

例）the students who study English in this room
　→ the students studying English in this room（この部屋で英語を勉強している生徒たち）

ただし入試の書きかえ問題では、〈who / which is ＋ -ing〉の形をそのまま分詞にする出題がほとんどである。迷ったときは be動詞があるかどうかで判断すればよい。

■ 分詞にできない代表例
　have（持っている）・know（知っている）・like（好きだ）など、状態を表す動詞は進行形にしないので、分詞の後置修飾にもしない。
　○ a girl who has three brothers
　△ a girl having three brothers（不自然）

■ 訳の順序は変わらない
　どちらの形でも、日本語には後ろから前へ戻して訳す。
　the man standing at the door ＝「ドアのところに立っている男性」

■ 書きかえ問題の答え方
　「関係代名詞を使って書きかえなさい」→ 分詞の前に who is / which is を補う。
　「分詞を使って書きかえなさい」→ who is / which is を消す。
　どちらの方向にも直せるように、両方の形を口に出して覚えておく。

★ ポイント：分詞の後置修飾は、関係代名詞を習う前に学ぶ「後ろから名詞を説明する形」と同じもの。二つを結びつけて整理する。

⚠ 注意：分詞に直すと「だれが」という情報が消える場合は書きかえられない。次の課で扱う目的格の書きかえと合わせて確認する。`,
      },
    ],
    trapExamples: [
      {
        question: 'the boy who is running over there を分詞を使って書きかえなさい。',
        wrongAnswer: 'the boy who running over there',
        trapExplanation:
          '「be動詞を消して分詞を残す」という部分だけを覚えていて、関係代名詞 who も一緒に消すことを忘れてしまう。who が残ると、そのあとに動詞がない不完全な節になる。',
        correctAnswer: 'the boy running over there',
        correctExplanation:
          '消すのは〈関係代名詞＋be動詞〉のセット、つまり who is をまとめてである。残るのは現在分詞 running 以下で、the boy running over there（あそこで走っている少年）となる。who だけを消すと the boy is running となり、名詞の説明ではなく文になってしまう。',
      },
      {
        question: '( )に入る語を選びなさい。Do you know the girl ( ) the piano over there?（playing / plays）',
        wrongAnswer: 'plays',
        trapExplanation:
          '「ピアノをひいている女の子」という日本語から、動詞をそのまま置けばよいと考えてしまう。三単現の s が付いているぶん正しそうに見えるのも落とし穴である。',
        correctAnswer: 'playing',
        correctExplanation:
          '名詞を後ろから修飾するには分詞を使う。Do you know the girl playing the piano over there?（＝ the girl who is playing the piano over there）。plays を入れると know の目的語の中に述語動詞が生まれてしまい、名詞を説明する形にならない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s313',
    subject: 'eigo',
    examType: 'koko',
    title: '分詞との書きかえ②：過去分詞の後置修飾',
    description: '〈主格の関係代名詞＋be動詞＋過去分詞〉を過去分詞一語の修飾に直す',
    intro:
      '「世界中で話されている言語」。話すのは人であって、言語は話される側です。この「される側」を一語で表せるのが過去分詞です。English is a language spoken all over the world. という一文が書ければ、受動態と関係代名詞と分詞が一度につながります。',
    order: 813,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '〈主格の関係代名詞＋be動詞＋過去分詞〉は、関係代名詞と be動詞をまとめて消せる。',
      '過去分詞の後置修飾は「その名詞が〜される」という受け身の意味を表す。',
      '現在分詞（-ing）は「する側」、過去分詞は「される側」。',
      '不規則動詞の過去分詞（written / spoken / built / taken / made）を正確に書く。',
      'by 〜 は省略できるが、be動詞を残したまま関係代名詞だけ消すことはできない。',
    ],
    sections: [
      {
        heading: 'される側は過去分詞',
        body: `名詞がその動作を「される」立場のときは、過去分詞で後ろから修飾する。

例）English is a language which is spoken all over the world.
　→ English is a language spoken all over the world.（英語は世界中で話されている言語です）

例）This is a temple which was built about 400 years ago.
　→ This is a temple built about 400 years ago.（これは約400年前に建てられたお寺です）

例）The letter which was written by my grandfather is in this box.
　→ The letter written by my grandfather is in this box.

■ 現在分詞との使い分け
　the boy running in the park（走っている少年）… 少年が走る＝する側
　the language spoken in Brazil（話されている言語）… 言語は話される＝される側

判断は「名詞がその動作をするのか、されるのか」の一点。

■ 不規則動詞の過去分詞に注意
　write → written ／ speak → spoken ／ build → built ／ take → taken ／ make → made ／ break → broken ／ sing → sung ／ know → known

■ 一語なら前に置く
　a broken window（割れた窓）／ boiled eggs（ゆで卵）
　a window broken by the boy（その男の子が割った窓）… 語句が付くので後ろ

★ ポイント：過去分詞の後置修飾は、関係代名詞＋受動態を短くした形だと理解する。長文で「名詞＋過去分詞」を見たら which was を補って読む。

⚠ 注意：過去形と過去分詞が同じ形の動詞（made / built / sent）では、修飾なのか述語動詞なのか迷いやすい。前後の主語と動詞の数を数えて判断する。`,
      },
      {
        heading: '書きかえの往復練習',
        body: `入試では、分詞 → 関係代名詞、関係代名詞 → 分詞の両方向で問われる。

■ 分詞 → 関係代名詞
　the pictures taken by my father
　→ the pictures which were taken by my father
　補うのは〈関係代名詞＋be動詞〉。be動詞の形は先行詞の数と文全体の時制に合わせる。
　the picture taken … → which was taken（単数）
　the pictures taken … → which were taken（複数）

■ 関係代名詞 → 分詞
　the boy who was helped by the teacher
　→ the boy helped by the teacher

■ 時制の合わせ方
　This is a temple which was built 400 years ago.（過去に建てられた）
　English is a language which is spoken all over the world.（今話されている）
　分詞にすると時制が表面から消えるので、戻すときは文脈で判断する。

■ よくある出題
　「次の文を分詞を使って書きかえなさい」
　The book which was written by Soseki is famous.
　→ The book written by Soseki is famous.

★ ポイント：分詞の後置修飾では be動詞が消えるので、書きかえたあとに文全体の述語動詞が残っているか必ず確認する。The book written by Soseki is famous. の is が文全体の動詞である。

⚠ 注意：× The book written by Soseki famous. のように、書きかえの際に文全体の be動詞まで消してしまう誤りが多い。消すのは関係詞節の中の be動詞だけである。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。This is a temple ( ) about 400 years ago.（building / built）',
        wrongAnswer: 'building',
        trapExplanation:
          '「建っているお寺」と日本語で考えて現在分詞を選んでしまう。お寺が自分で建てるわけではないという受け身の関係に気づいていない。',
        correctAnswer: 'built',
        correctExplanation:
          'お寺は「建てられる」側なので過去分詞 built を使う。This is a temple built about 400 years ago.（＝ a temple which was built about 400 years ago）。名詞がその動作をする側なら現在分詞、される側なら過去分詞、と必ず立場を確認する。',
      },
      {
        question: '次の英文の誤りを直しなさい。English is a language which speaks all over the world.',
        wrongAnswer: 'which を that に直す',
        trapExplanation:
          '関係代名詞の選び方が誤っていると考えてしまう。しかし先行詞は a language でものなので which は正しく、本当の誤りは能動態のままになっている動詞のほうである。',
        correctAnswer:
          'speaks を is spoken に直す（English is a language which is spoken all over the world.）。which is を省いて a language spoken all over the world としてもよい。',
        correctExplanation:
          '言語は「話される」側なので受動態にする必要がある。which speaks では「言語が話す」という意味になってしまう。関係詞節の中の動詞は、先行詞を主語に戻したときに意味が通るかどうかで能動・受動を決める。',
      },
    ],
  },

  {
    id: 'koko_eigo_s314',
    subject: 'eigo',
    examType: 'koko',
    title: '分詞との書きかえ③：書きかえられない場合',
    description: '目的格の関係詞節や状態動詞は分詞に直せないことを判断できるようにする',
    intro:
      '書きかえのルールを覚えると、今度は何でも書きかえたくなります。しかし「私が駅で会った男の子」は分詞では表せません。だれが会ったのかという情報が消えてしまうからです。書きかえられる条件を逆から確認しておくと、余計な減点を防げます。',
    order: 814,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '分詞に直せるのは主格の関係詞節だけ。目的格は直せない。',
      '目的格の関係詞節には節の中に主語があり、分詞にするとその主語が表せなくなる。',
      'have・know・like など状態を表す動詞は現在分詞の後置修飾にしない。',
      '書きかえの可否は「関係代名詞の直後が動詞か、主語＋動詞か」で判断できる。',
      '書きかえられない場合は、関係代名詞を残したまま答えるのが正解。',
    ],
    sections: [
      {
        heading: '目的格は分詞に直せない',
        body: `分詞の後置修飾は「その名詞が動作をする（現在分詞）」「その名詞が動作をされる（過去分詞）」の二つだけを表せる。だから節の中に別の主語がある目的格は表現できない。

例）The boy who I met at the station was Ken's brother.
　→ 分詞では書きかえられない。
　× The boy meeting at the station …（少年が会っている、という別の意味になる）
　× The boy met at the station …（少年が会われた、となり I が消えてしまう）

節の中の主語 I（私が会った）は、分詞では表す方法がない。

■ 書きかえられる／られないの判定
　直後が動詞（主格）→ 書きかえ可
　　the man who is waiting for you → the man waiting for you
　直後が〈主語＋動詞〉（目的格）→ 書きかえ不可
　　the man whom you are waiting for → そのまま

■ 受動態なら書きかえられることもある
　the letter which was written by my father → the letter written by my father
　これは主格＋受動態なので可。目的格の the letter which my father wrote は不可。

★ ポイント：まず格を判定し、主格なら書きかえを検討する。この順序を守るだけで誤答が消える。

⚠ 注意：設問が「書きかえなさい」でも、書きかえられない場合がある。そのときは「書きかえられない」と答えるか、関係代名詞を残した形を答える。無理に分詞にすると意味が変わって減点される。`,
      },
      {
        heading: '状態を表す動詞は分詞にしない',
        body: `主格であっても、動詞が状態を表すものであれば現在分詞の後置修飾にはしない。

■ 進行形にできない動詞
　have（持っている）・know（知っている）・like（好きだ）・want（ほしい）・belong（属する）・resemble（似ている）
　これらは「今〜している最中」という意味を持たないので、-ing にして名詞を修飾する形にしない。

例）○ I know a girl who has three brothers.
　　△ I know a girl having three brothers.（不自然）

例）○ the students who like music
　　△ the students liking music（不自然）

■ 逆に、分詞にしやすい動詞
　run / play / sit / stand / wait / sleep / study / talk / walk など、動作が続く様子を表す動詞。

■ 過去分詞のほうは制限が少ない
　受け身の意味なら状態動詞でも使える場合がある（a country known for its food）。known は「知られている」で自然に使う。

★ ポイント：「今その動作をしている最中だと言えるか」を自分に問う。言えるなら現在分詞にできる。

⚠ 注意：入試の書きかえ問題では、状態動詞をわざと出して「書きかえられない」と判断させる出題がある。ルールを機械的に当てはめず、意味が通るかを最後に確かめること。`,
      },
    ],
    trapExamples: [
      {
        question: 'I know a girl who has three brothers. を分詞を使って書きかえられますか。',
        wrongAnswer: 'I know a girl having three brothers.',
        trapExplanation:
          '「主格の関係代名詞は分詞に直せる」という規則を機械的に当てはめてしまう。has が状態を表す動詞で、進行形にできないことを確認していない。',
        correctAnswer: '書きかえられない。who has のままにする。',
        correctExplanation:
          'have は「持っている」という状態を表し、I am having three brothers のように進行形にできない。したがって現在分詞 having で名詞を修飾する形にもしない。分詞に直せるのは、run・play・wait のように「その動作をしている最中」と言える動詞のときである。',
      },
      {
        question: 'The boy who I met at the station was Ken\'s brother. を分詞を使って書きかえなさい。',
        wrongAnswer: 'The boy meeting at the station was Ken\'s brother.',
        trapExplanation:
          '関係代名詞を消して動詞を -ing にすればよいと考えてしまう。この節が目的格であり、節の中に I という別の主語がいることを見落としている。',
        correctAnswer: '分詞では書きかえられない（The boy (whom) I met at the station was Ken\'s brother. のままにする）。',
        correctExplanation:
          'who の直後が I met と〈主語＋動詞〉なのでこれは目的格である。分詞の後置修飾は「名詞がする」「名詞がされる」の二つしか表せないため、「私が会った」という節の中の主語を表現できない。目的格は分詞に直せない、と覚えておく。',
      },
    ],
  },

  // ───────── 6. 等位接続詞と「命令文, and/or 〜」（s315〜s318） ─────────
  {
    id: 'koko_eigo_s315',
    subject: 'eigo',
    examType: 'koko',
    title: '等位接続詞①：and・but・or・so と「同じ形をつなぐ」原則',
    description: '等位接続詞の意味を整理し、前後の形をそろえる並列のルールを守る',
    intro:
      '「私はテニスをすることと泳ぐことが好きです」を英語にすると、多くの人が playing tennis and to swim と書いてしまいます。意味は伝わりますが、英語では and の左右は同じ形でそろえるのが決まりです。天びんの左右をそろえる感覚を身につけましょう。',
    order: 815,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'and（そして）・but（しかし）・or（または）・so（だから）は対等な語句や文をつなぐ。',
      'つなぐ前後は同じ形にそろえる（名詞と名詞、-ing と -ing、to 不定詞と to 不定詞）。',
      '三つ以上並べるときは A, B(,) and C の形。',
      'so は「だから」で結果を導く。理由を導く because とは順序が逆になる。',
      '等位接続詞は文頭で使わないのが原則（書きことば）。',
    ],
    sections: [
      {
        heading: '四つの等位接続詞',
        body: `等位接続詞は、語と語、句と句、文と文を対等な関係でつなぐ。

■ and（そして・〜と）
　I like tennis and soccer.（名詞と名詞）
　He got up early and went out.（動詞句と動詞句）
　It was cold, and it began to rain.（文と文）

■ but（しかし・だが）
　He is young, but he is very wise.（若いが賢い）
　I called her, but she didn't answer.

■ or（または・あるいは）
　Would you like tea or coffee?
　Hurry up, or you will be late.（この用法は次の課で扱う）

■ so（だから・それで）
　It was raining, so I stayed home.（雨だったので家にいた）
　so の前がふつうコンマになる。

■ 三つ以上並べるとき
　I have a dog, a cat, and two birds.
　最後だけ and を付け、その前にコンマを打つ（打たない書き方もある）。

★ ポイント：and・but・or・so は左右が対等。どちらかが主で、どちらかが従、という関係にはならない。これが「従属接続詞（when / because など）」との大きなちがいである。

⚠ 注意：接続詞を二つ重ねない。× Because it was cold, so we stayed home. は誤り（because か so のどちらか一方にする）。`,
      },
      {
        heading: '前後の形をそろえる（並列）',
        body: `等位接続詞でつなぐときは、前後の語句を同じ形にそろえる。これを並列という。入試の英作文で最も減点されやすい点である。

■ 動名詞と不定詞を混ぜない
　× I like playing tennis and to swim.
　○ I like playing tennis and swimming.
　○ I like to play tennis and to swim.

■ 品詞をそろえる
　× She is kind and a good singer.（形容詞と名詞）
　○ She is kind and friendly.（形容詞と形容詞）
　○ She is a kind girl and a good singer.（名詞句と名詞句）

■ 時制・形をそろえる
　× He came home and is watching TV.（過去と現在進行が唐突）
　○ He came home and watched TV.

■ 主語が共通なら二度書かない
　○ He got up early and went to school.
　△ He got up early and he went to school.（誤りではないが冗長）

★ ポイント：and・but・or を見たら「左右は同じ形か」と必ず自問する。天びんが釣り合っているかを確かめるイメージで見直す。

⚠ 注意：not only A but also B や both A and B のような相関接続詞でも、A と B の形をそろえる必要がある。この点はこのユニットの最後で改めて扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の誤りを直しなさい。I like playing tennis and to swim.',
        wrongAnswer: 'and を but に直す',
        trapExplanation:
          '文のつながりに違和感を覚えたときに、接続詞そのものを疑ってしまう。しかし「テニスと水泳が好きだ」という内容に逆接は合わず、本当の誤りは and の左右の形がそろっていないことである。',
        correctAnswer: 'to swim を swimming に直す（I like playing tennis and swimming.）。I like to play tennis and to swim. でもよい。',
        correctExplanation:
          '等位接続詞は前後を同じ形でつなぐ。左が動名詞 playing なら右も動名詞 swimming にそろえる。逆に左を to play にそろえてもよい。like はどちらの形も取れるので、そろえてさえいれば正しい。',
      },
      {
        question: '( )に入る語を選びなさい。He is young ( ) he is very wise.（and / but / so）',
        wrongAnswer: 'so',
        trapExplanation:
          '「若い」「賢い」の二つをどちらもプラスの評価と受け取り、「若い、だから賢い」と因果関係でつないでしまう。日本語では成り立ちそうに見えるが、若さは賢さの理由にはならない。',
        correctAnswer: 'but',
        correctExplanation:
          '「彼は若いけれども、とても賢い」と、ふつうは結びつかない二つを対比させる文なので逆接の but を使う。so は「だから」で前が理由・後ろが結果になるときに使う（It was raining, so I stayed home.）。',
      },
    ],
  },

  {
    id: 'koko_eigo_s316',
    subject: 'eigo',
    examType: 'koko',
    title: '等位接続詞②：命令文, and 〜（そうすれば）',
    description: '「命令文, and 〜」の形と、If を使った書きかえを正確に作る',
    intro:
      '道案内で「その角を左に曲がってください。そうすれば郵便局が見えます」と言うことがあります。英語ではこれを Turn left, and you will see the post office. と、たった一つの and で表します。命令文のあとの and には「そうすれば」という特別な訳が生まれるのです。',
    order: 816,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      '〈命令文, and 〜〉＝「…しなさい、そうすれば〜」。',
      '書きかえは〈If you ＋ 動詞の原形（現在形）, you will 〜〉。肯定の if になる。',
      '命令文のあとにはコンマを打つ。',
      'and のあとは未来のことなので、ふつう will を使う。',
      '命令文なので主語 you は書かない。',
    ],
    sections: [
      {
        heading: '「そうすれば」の and',
        body: `命令文のあとに and を置くと、「そうすれば」という意味になる。

例）Turn left, and you will see the post office.
　（左に曲がりなさい、そうすれば郵便局が見えます）

例）Study hard, and you will pass the exam.
　（一生懸命勉強しなさい、そうすれば試験に合格します）

例）Practice every day, and you will get better.
　（毎日練習しなさい、そうすればうまくなります）

■ 形のポイント
　①命令文なので動詞の原形で始める。主語 you は書かない。
　②命令文の終わりにコンマを打つ。
　③and のあとは「これから起こること」なので will を使うのがふつう。
　　△ Study hard, and you pass the exam.（現在形では不自然）

■ If を使った書きかえ
　Turn left, and you will see the post office.
　＝ If you turn left, you will see the post office.
　if 節の中は未来のことでも現在形（turn）にする点に注意。

★ ポイント：and は「プラスの結果」を導く。命令したとおりにすれば良いことが起きる、という流れになる。

⚠ 注意：命令文の否定形（Don't 〜）と組み合わせることもある。Don't be late, and you will be fine. のような形はまれで、入試ではふつう肯定の命令文で出る。`,
      },
      {
        heading: '書きかえの手順を固定する',
        body: `〈命令文, and 〜〉→〈If 〜〉の書きかえは、次の手順で機械的に作れる。

①主語 You を補う。
　Turn left → you turn
②If を頭に付ける。
　If you turn left,
③and を消して、後半をそのまま続ける。
　If you turn left, you will see the post office.

■ 逆方向の書きかえ
　If you get up early, you will catch the first train.
　→ Get up early, and you will catch the first train.
　if 節の主語 you と If を取り、動詞を原形にして命令文にする。

■ 混同しやすい or との比較
　Get up early, and you will catch the first train.（早く起きれば間に合う）
　Get up early, or you will miss the first train.（早く起きないと乗り遅れる）
　and は肯定の if、or は否定の if に対応する。ここは次の課で詳しく扱う。

■ 意味から判断する
　後半が「よいこと」なら and、「困ったこと」なら or。
　You will pass the exam.（よいこと）→ and
　You will be late for school.（困ったこと）→ or

★ ポイント：書きかえのときは if 節の動詞を現在形にする。× If you will turn left は誤り。

⚠ 注意：命令文のあとのコンマを忘れると減点対象になることがある。Turn left and you will 〜 とコンマなしで書かないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を If で始まる文に書きかえなさい。Turn left, and you will see the post office.',
        wrongAnswer: 'If you don\'t turn left, you will see the post office.',
        trapExplanation:
          '「命令文, 〜」の書きかえはすべて If you don\'t 〜 だと覚えてしまい、or の場合の書きかえと混同する。and と or で if の肯定・否定が入れかわることを整理できていない。',
        correctAnswer: 'If you turn left, you will see the post office.',
        correctExplanation:
          'and は「そうすれば」なので、肯定の if に対応する。命令文に主語 You を補い、If を付けて If you turn left, とし、後半をそのまま続ける。否定の If you don\'t 〜 になるのは or（そうしないと）のときである。',
      },
      {
        question: '「毎日練習しなさい、そうすればうまくなりますよ」を英語にしなさい。',
        wrongAnswer: 'Practice every day, and you get better.',
        trapExplanation:
          '日本語の「うまくなりますよ」を現在形のまま英語にしてしまう。and のあとが「これから起こること」だという意識がないと will が抜ける。',
        correctAnswer: 'Practice every day, and you will get better.',
        correctExplanation:
          '〈命令文, and 〜〉の後半は、命令に従った結果これから起こることなので will を使う。命令文は動詞の原形 Practice で始め、主語 You は書かない。コンマを忘れないこと。If you practice every day, you will get better. と書いても正解。',
      },
    ],
  },

  {
    id: 'koko_eigo_s317',
    subject: 'eigo',
    examType: 'koko',
    title: '等位接続詞③：命令文, or 〜（そうしないと）',
    description: 'or の「そうしないと」の意味をつかみ、否定の if への書きかえを正確に行う',
    intro:
      '「急ぎなさい、そうしないとバスに乗り遅れますよ」。この「そうしないと」を、英語はたった二文字の or で表します。and と or はどちらもよく見る語ですが、命令文のあとでは正反対のはたらきをします。後半が良いことか困ったことか、そこを見るのがコツです。',
    order: 817,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '〈命令文, or 〜〉＝「…しなさい、そうしないと〜」。',
      '書きかえは〈If you don\'t ＋ 動詞の原形, you will 〜〉と否定の if になる。',
      'or のあとは望ましくない結果が来ることが多い。',
      'and（そうすれば）と or（そうしないと）を後半の内容で見分ける。',
      'Unless you 〜 を使って書きかえることもできる。',
    ],
    sections: [
      {
        heading: '「そうしないと」の or',
        figureId: 'lf_kokoeigoext09_317',
        body: `命令文のあとに or を置くと、「そうしないと」という意味になる。

例）Hurry up, or you will miss the bus.
　（急ぎなさい、そうしないとバスに乗り遅れますよ）

例）Wear a coat, or you will catch a cold.
　（コートを着なさい、そうしないとかぜをひきますよ）

例）Be quiet, or the baby will wake up.
　（静かにしなさい、そうしないと赤ちゃんが起きてしまいますよ）

■ 書きかえ
　Hurry up, or you will miss the bus.
　＝ If you don't hurry up, you will miss the bus.
　＝ Unless you hurry up, you will miss the bus.

■ 手順
①主語 You を補い、否定にする。
　Hurry up → you don't hurry up
②If を頭に付ける。
　If you don't hurry up,
③or を消して後半をそのまま続ける。

★ ポイント：or のあとには「困ったこと」が来る。miss the bus / catch a cold / be late / fail the exam などがその代表である。

⚠ 注意：書きかえで don't を入れ忘れる誤りが非常に多い。「そうしないと」の「ない」がどこに現れるかを意識する。`,
      },
      {
        heading: 'and と or を見分ける',
        body: `どちらを使うかは、後半の内容が「望ましいこと」か「望ましくないこと」かで決まる。

■ 望ましい結果 → and
　Study hard, and you will pass the exam.（合格する＝よいこと）
　Turn right, and you will find the station.（駅が見つかる＝よいこと）

■ 望ましくない結果 → or
　Study hard, or you will fail the exam.（不合格になる＝困ること）
　Hurry up, or you will be late for school.（遅刻する＝困ること）

■ 同じ命令文でも後半で変わる
　Get up early, and you will catch the first train.
　Get up early, or you will miss the first train.
　前半はどちらも「早く起きなさい」だが、後半が catch（間に合う）か miss（乗り遅れる）かで and と or が入れかわる。

■ 書きかえの対応表
　命令文, and 〜 ＝ If you 〜（肯定）, you will 〜
　命令文, or 〜 ＝ If you don't 〜（否定）, you will 〜 ＝ Unless you 〜, you will 〜

★ ポイント：unless は「〜しない限り」で、それ自体に否定の意味が含まれる。Unless you hurry up の中に don't を入れてはいけない（二重否定になる）。

⚠ 注意：日本語につられて「そうしないと」を and で書いてしまう誤りが多い。空所補充では必ず後半の意味を読んでから選ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。Hurry up, ( ) you will miss the train.（and / or）',
        wrongAnswer: 'and',
        trapExplanation:
          '命令文のあとの接続詞として and をまず思い浮かべ、後半の内容を読まずに選んでしまう。「急ぎなさい、そして電車に乗り遅れます」という意味の通らない文になっていることに気づかない。',
        correctAnswer: 'or',
        correctExplanation:
          '後半の you will miss the train（電車に乗り遅れる）は望ましくない結果なので、「そうしないと」の or を使う。Hurry up, or you will miss the train.（急ぎなさい、そうしないと電車に乗り遅れますよ）。後半が catch the train なら and になる。',
      },
      {
        question: 'Wear a coat, or you will catch a cold. を If を使って書きかえなさい。',
        wrongAnswer: 'If you wear a coat, you will catch a cold.',
        trapExplanation:
          'or を無視して命令文をそのまま if 節に移してしまう。その結果「コートを着ればかぜをひく」という正反対の意味になってしまう。',
        correctAnswer: 'If you don\'t wear a coat, you will catch a cold.（Unless you wear a coat, you will catch a cold. でもよい）',
        correctExplanation:
          'or は「そうしないと」なので、否定の if に対応する。命令文に主語 You を補って否定にし、If you don\'t wear a coat, とする。unless を使えば否定の意味が含まれるので don\'t は不要である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s318',
    subject: 'eigo',
    examType: 'koko',
    title: '等位接続詞④：so と because の使い分け',
    description: '結果を導く so と理由を導く because を、語順の観点から区別する',
    intro:
      '日本語の「〜ので」は便利すぎて、英語にするときに迷いを生みます。「雨だったので家にいた」を英語にするとき、so と because のどちらを使うかは、どちらの内容を先に書くかで決まります。日本語の訳語ではなく、前後の順序で選ぶのがコツです。',
    order: 818,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'so は「だから」。前が理由、後ろが結果。',
      'because は「なぜなら・〜なので」。後ろが理由。',
      'because と so を同じ文で重ねて使わない。',
      'because のあとは〈主語＋動詞〉、because of のあとは名詞（句）。',
      'Why 〜? の答えは Because 〜. と、because だけで文にしてよい。',
    ],
    sections: [
      {
        heading: '語順で決まる so と because',
        body: `so と because は、どちらも原因と結果を結ぶが、置く位置が正反対である。

■ so（だから）… 理由 → so → 結果
　It was raining, so I stayed home.（雨が降っていた。だから家にいた）
　I was tired, so I went to bed early.

■ because（〜なので）… 結果 → because → 理由
　I stayed home because it was raining.（雨が降っていたので家にいた）
　Because it was raining, I stayed home.（because 節を前に出すとコンマを打つ）

同じ内容でも、書く順序によって使う接続詞が変わる。

■ 判断の手順
①二つの内容のどちらが理由でどちらが結果かを決める。
②先に書くのが理由なら so、先に書くのが結果なら because。

例）「熱があったので学校を休んだ」
　I had a fever, so I was absent from school.
　I was absent from school because I had a fever.

★ ポイント：日本語の「〜ので」だけを手がかりにすると、so と because のどちらも当てはまってしまう。必ず「どちらを先に書くか」で決める。

⚠ 注意：so には「とても」の意味（so 〜 that …）もある。It was so hot that I couldn't sleep.（とても暑かったので眠れなかった）。この so は接続詞ではなく副詞で、that とセットで使う。`,
      },
      {
        heading: '接続詞を重ねない・because of との区別',
        body: `日本語では「雨だったので、だから家にいた」と言えてしまうため、英語でも because と so を重ねてしまう誤りが起こる。

　× Because it was very cold, so we didn't go out.
　○ Because it was very cold, we didn't go out.
　○ It was very cold, so we didn't go out.

英語では原因と結果を結ぶ接続詞は一つだけ使う。

■ because と because of
　because ＋〈主語＋動詞〉
　　We couldn't go out because it rained heavily.
　because of ＋ 名詞（句）
　　We couldn't go out because of the heavy rain.
　× because of it rained heavily（of のあとに文は置けない）
　× because the heavy rain（because のあとに名詞だけは置けない）

■ Why の答え方
　"Why were you absent yesterday?" — "Because I had a fever."
　答えでは because 節だけで文にしてよい。ただしふつうの文章の途中では、because 節だけを独立した一文にしない。

★ ポイント：because のあとに続くのが文か名詞かを見て、because と because of を選び分ける。

⚠ 注意：since や as も「〜なので」の意味で使えるが、since には「〜以来」の意味もある。主節が現在完了なら「〜以来」、そうでなければ「〜なので」と判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。It was raining, ( ) I stayed home.（so / because）',
        wrongAnswer: 'because',
        trapExplanation:
          '日本語の「雨が降っていたので家にいた」の「ので」を because に直結させてしまう。しかしこの文では理由が先に書かれているので、because を入れると「雨が降っていた、なぜなら私は家にいたから」という逆の意味になる。',
        correctAnswer: 'so',
        correctExplanation:
          '前半 It was raining が理由、後半 I stayed home が結果である。理由を先に書いたときに結果を導くのは so。because を使うなら順序を入れかえて I stayed home because it was raining. とする。日本語の訳語ではなく、前後どちらが理由かで判断する。',
      },
      {
        question: '次の英文の誤りを直しなさい。Because it was very cold, so we didn\'t go out.',
        wrongAnswer: 'Because を If に直す',
        trapExplanation:
          '文の前半に違和感を覚えて接続詞そのものを変えてしまう。一つの文に because と so という二つの接続詞が入っていることに気づいていない。日本語の「寒かったので、だから外出しなかった」がそのまま英語になっている。',
        correctAnswer: 'so を削除する（Because it was very cold, we didn\'t go out.）。It was very cold, so we didn\'t go out. でもよい。',
        correctExplanation:
          '英語では原因と結果を結ぶ接続詞は一つだけである。because を残すなら so を消し、so を残すなら because を消す。日本語の「〜ので、だから…」の形をそのまま英語にすると必ずこの誤りになるので注意する。',
      },
    ],
  },

  // ───────── 7. 従属接続詞 when / if / because / though（s319〜s322） ─────────
  {
    id: 'koko_eigo_s319',
    subject: 'eigo',
    examType: 'koko',
    title: '従属接続詞①：時を表す when・while・before・after・until',
    description: '時を表す副詞節の意味と、未来のことでも現在形にするルールを身につける',
    intro:
      '「駅に着いたら電話するね」を英語にするとき、着くのは未来なのに will を使いません。時を表す節の中だけは、未来のことも現在形で書くという約束があるからです。理屈より先に、正しい形を口になじませてしまうのが近道です。',
    order: 819,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      'when（〜のとき）・while（〜している間に）・before（〜の前に）・after（〜のあとで）・until（〜までずっと）。',
      '時を表す副詞節の中では、未来のことでも現在形を使う（× when I will get home）。',
      '主節の will はそのまま残す。',
      'while のあとは進行形が来ることが多い（while I was walking）。',
      '副詞節が文頭に来たらコンマを打ち、後ろに来たらコンマは不要。',
    ],
    sections: [
      {
        heading: '時を表す接続詞と語順',
        figureId: 'lf_kokoeigoext09_319',
        body: `時を表す接続詞は、文の前にも後ろにも置ける。

例）When I came home, my mother was cooking.
　＝ My mother was cooking when I came home.
　（私が帰宅したとき、母は料理をしていた）

■ おもな接続詞
　when（〜のとき）　While I was walking, it began to rain.
　while（〜している間に）
　before（〜の前に）　Wash your hands before you eat.
　after（〜のあとで）　I went out after I finished my homework.
　until / till（〜までずっと）　Please wait here until he comes back.
　as soon as（〜するとすぐに）　I will call you as soon as I arrive.

■ when と while の使い分け
　when：ある時点（came / arrived のような一瞬の動作にも使える）
　while：継続している間（was walking / was sleeping のような進行形と相性がよい）
　例）It began to rain while I was walking home.（歩いている途中で降り出した）

■ コンマの位置
　文頭に置いたらコンマを打つ。When I came home, 〜
　後ろに置いたらコンマは不要。〜 when I came home.

★ ポイント：接続詞のあとには必ず〈主語＋動詞〉が続く。前置詞（before / after は前置詞にもなる）との区別に注意する。
　after school（前置詞＋名詞）／ after I came home（接続詞＋主語＋動詞）

⚠ 注意：when には「いつ」という疑問詞の用法もある。I don't know when he will come.（いつ来るか）は間接疑問で、この場合は未来のことに will を使える。この区別はこのユニットの後半で扱う。`,
      },
      {
        heading: '時・条件の副詞節では未来も現在形',
        body: `時や条件を表す副詞節の中では、未来のことでも現在形で表す。これは高校入試で最も出題される文法事項の一つである。

　○ I will call you when I get home.
　× I will call you when I will get home.
　（家に着いたら電話します）

　○ Please wait here until he comes back.
　× Please wait here until he will come back.

　○ We will go on a picnic if it is sunny tomorrow.
　× We will go on a picnic if it will be sunny tomorrow.

■ 主節はそのまま
　主節（メインの文）では will を使ってよい。現在形にするのは副詞節の中だけである。
　I will call you（主節・will のまま）＋ when I get home（副詞節・現在形）

■ 対象になる接続詞
　時：when / while / before / after / until / as soon as / by the time
　条件：if / unless

■ 三単現の s を忘れない
　現在形にするので三単現の s が必要になる。
　when he comes（× when he come）
　as soon as she arrives（× as soon as she arrive）

★ ポイント：「時・条件の副詞節では未来も現在形」と唱えて覚える。ただし現在完了は使える（when you have finished 〜）。

⚠ 注意：この規則は副詞節にだけ当てはまる。名詞節（〜かどうか・いつ〜か）の if や when では未来のことに will を使う。I don't know if it will rain tomorrow. は正しい。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語句を選びなさい。I will call you when I ( ) home.（get / will get）',
        wrongAnswer: 'will get',
        trapExplanation:
          '「家に着いたら」は未来のことなので、当然 will を使うと考えてしまう。主節に will があるので、それに合わせようとする心理も働く。',
        correctAnswer: 'get',
        correctExplanation:
          '時を表す副詞節（when 節）の中では、未来のことでも現在形を使う。I will call you when I get home.（家に着いたら電話します）。主節の will はそのまま残す点に注意する。get の主語が I なので三単現の s は不要だが、he なら gets になる。',
      },
      {
        question: '( )に入る語を選びなさい。It began to rain ( ) I was walking home.（while / until）',
        wrongAnswer: 'until',
        trapExplanation:
          '「歩いて帰る間ずっと」というイメージから「〜まで」の until を選んでしまう。しかし until は終点を表す語で、「歩いていた途中で雨が降り出した」という意味には合わない。',
        correctAnswer: 'while',
        correctExplanation:
          '進行中の動作（was walking）の途中で別のことが起きたときは while を使う。It began to rain while I was walking home.（家に歩いて帰る途中で雨が降り出した）。until は I waited until he came back. のように「〜するまでずっと続いた」ことを表す。',
      },
    ],
  },

  {
    id: 'koko_eigo_s320',
    subject: 'eigo',
    examType: 'koko',
    title: '従属接続詞②：条件を表す if と unless',
    description: '条件の if 節の時制と、unless の否定の意味を正しく扱う',
    intro:
      '「急がなければ遅れますよ」の「なければ」を、英語では二通りに書けます。if you don\'t hurry と unless you hurry です。unless という一語の中にすでに「ない」が入っているので、not を重ねると意味がひっくり返ってしまいます。ここは差がつくポイントです。',
    order: 820,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      'if（もし〜なら）の副詞節では、未来のことでも現在形を使う。',
      'unless（〜しない限り・〜でなければ）＝ if ... not。',
      'unless の節の中に not を入れない（二重否定になる）。',
      '条件節が文頭ならコンマを打つ。',
      '「〜かどうか」の意味の if は名詞節で、未来には will を使う。',
    ],
    sections: [
      {
        heading: '条件の if の作り方',
        body: `if は「もし〜なら」と条件を表す。時を表す接続詞と同じく、副詞節の中では未来のことでも現在形を使う。

　○ If it rains tomorrow, we will stay home.
　× If it will rain tomorrow, we will stay home.
　（明日雨が降ったら、私たちは家にいます）

　○ If you are free this afternoon, please help me.
　○ We will play soccer if it is sunny tomorrow.

■ コンマの位置
　If it rains tomorrow, we will stay home.（文頭 → コンマあり）
　We will stay home if it rains tomorrow.（後ろ → コンマなし）

■ 主節にはいろいろな形が来る
　will：If you are tired, you will feel better after a rest.
　命令文：If you are tired, take a rest.
　can / must：If you want to pass, you must study harder.

■ 三単現の s に注意
　If he comes, please tell me.（× If he come）
　If it rains（× If it rain）

★ ポイント：if 節の中を現在形にするのを忘れる誤りが最多。「if 節の中に will は書かない」と決めて覚える。

⚠ 注意：現在の事実に反する仮定（仮定法）は高校で学ぶ範囲。中学範囲では「もし〜なら」の条件文として、現在形＋will で書けばよい。`,
      },
      {
        heading: 'unless は「〜しない限り」',
        body: `unless は if ... not と同じ意味を、一語で表す接続詞である。

例）You will be late unless you hurry.
　＝ You will be late if you don't hurry.
　（急がなければ遅れますよ）

例）Unless it rains, we will go on a picnic.
　＝ If it doesn't rain, we will go on a picnic.
　（雨が降らなければピクニックに行きます）

■ 二重否定にしない
　× You will be late unless you don't hurry.
　これでは「急がないのでなければ遅れる」となり、意味が逆になってしまう。unless の中にはすでに否定が含まれているので、not を入れてはいけない。

■ 「命令文, or 〜」との関係
　Hurry up, or you will be late.
　＝ If you don't hurry up, you will be late.
　＝ Unless you hurry up, you will be late.
　三つの形が同じ内容を表す。書きかえ問題で三つとも問われる。

■ unless の節も現在形
　Unless it rains tomorrow, 〜（× Unless it will rain tomorrow）

★ ポイント：unless ＝ if ... not。書きかえるときは、unless を if に変えて動詞を否定にする、という一手で対応できる。

⚠ 注意：if には「〜かどうか」という名詞節の用法もある（I don't know if he will come.）。この if は条件ではないので、未来のことに will を使える。副詞節か名詞節かの区別は、間接疑問の課で詳しく扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語句を選びなさい。If it ( ) tomorrow, we will stay home.（rains / will rain）',
        wrongAnswer: 'will rain',
        trapExplanation:
          '「明日雨が降ったら」は未来のことなので will を使うと考えてしまう。主節に we will stay home と will があるため、そろえたくなる心理も働く。',
        correctAnswer: 'rains',
        correctExplanation:
          '条件を表す副詞節（if 節）の中では、未来のことでも現在形を使う。主語が it なので三単現の s が付いて rains。主節の will はそのまま残し、If it rains tomorrow, we will stay home. とする。',
      },
      {
        question: '( )に入る語を選びなさい。You will be late ( ) you hurry.（if / unless）',
        wrongAnswer: 'if',
        trapExplanation:
          '「急がなければ遅れる」の「なければ」を表そうとして if を選んでしまう。しかし If you hurry では「急げば遅れる」という逆の意味になり、否定にするには don\'t を補う必要がある。',
        correctAnswer: 'unless',
        correctExplanation:
          'unless は「〜しない限り」で if ... not と同じ意味を持つ。You will be late unless you hurry.（急がなければ遅れますよ）＝ You will be late if you don\'t hurry. unless の中にすでに否定が含まれているので、unless you don\'t hurry としないこと。',
      },
    ],
  },

  {
    id: 'koko_eigo_s321',
    subject: 'eigo',
    examType: 'koko',
    title: '従属接続詞③：理由を表す because・since・as',
    description: 'because と because of の使い分け、since の二つの意味を判別する',
    intro:
      '「大雨のせいで外出できなかった」を英語にするとき、because を使うと文が壊れます。because のあとには文が、because of のあとには名詞が来るからです。たった二文字の of の有無で形が変わる。ここは英作文の失点が集中する場所です。',
    order: 821,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'because ＋〈主語＋動詞〉、because of ＋ 名詞（句）。',
      'since・as も「〜なので」の意味で使える。',
      'since には「〜以来」の意味もある。主節が現在完了なら「〜以来」。',
      '理由の節は文頭にも文末にも置ける。文頭ならコンマを打つ。',
      'Why 〜? の答えは Because 〜. で文にしてよい。',
    ],
    sections: [
      {
        heading: 'because と because of',
        body: `because は接続詞、because of は前置詞のはたらきをする。後ろに来る形がちがう。

■ because ＋〈主語＋動詞〉
　We couldn't go out because it rained heavily.
　I was late because I missed the bus.
　He is popular because he is kind to everyone.

■ because of ＋ 名詞（句）
　We couldn't go out because of the heavy rain.
　The game was canceled because of the snow.
　I was late because of the traffic jam.

■ よくある誤り
　× We couldn't go out because the heavy rain.（because のあとに名詞だけ）
　× I was late because of I missed the bus.（because of のあとに文）

■ 書きかえ
　because ↔ because of の書きかえは、動詞を名詞に変える作業になる。
　because it rained heavily → because of the heavy rain
　because he was sick → because of his illness

■ 位置とコンマ
　Because it rained heavily, we couldn't go out.（文頭 → コンマ）
　We couldn't go out because it rained heavily.（文末 → コンマなし）

★ ポイント：空所のあとを見て、〈主語＋動詞〉なら because、名詞だけなら because of と決める。

⚠ 注意：長い文章の中で、because 節だけを独立した一文として書くのは避ける（会話の答えでは可）。`,
      },
      {
        heading: 'since と as の二つの顔',
        body: `since と as も理由を表せるが、それぞれ別の意味を持つので判別が必要になる。

■ since（〜なので／〜以来）
　理由：Since he was tired, he went to bed early.（疲れていたので早く寝た）
　時の起点：He has lived here since he was ten.（10歳のときからここに住んでいる）

■ 判別の目安
　主節が現在完了（have / has ＋ 過去分詞）なら「〜以来」。
　　I have known him since we were children.（子どものころから知っている）
　主節が現在完了でなければ「〜なので」。
　　Since it was raining, we stayed home.

■ as（〜なので／〜のとき／〜のように）
　理由：As I was busy, I couldn't call you.
　時：As I was leaving, the phone rang.
　様態：Do as I do.（私がするようにしなさい）
　as は意味が多いので、文脈で判断する。

■ 理由の言い方の強さ
　because がいちばんはっきりと理由を述べる。since や as は「すでにわかっていること」を理由として軽く添えるときに使う。

★ ポイント：since を見たら、まず主節の時制を確認する。現在完了なら「〜以来」、そうでなければ「〜なので」。

⚠ 注意：since ＋ 名詞（since 2020 / since last week）は前置詞で、「〜以来」の意味になる。since ＋〈主語＋動詞〉のときだけ二つの意味を迷う。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に because か because of のどちらかを入れなさい。We couldn\'t go out ( ) the heavy rain.',
        wrongAnswer: 'because',
        trapExplanation:
          '「〜なので」という日本語だけを手がかりにして because を選んでしまう。後ろに続くのが the heavy rain という名詞だけで、〈主語＋動詞〉になっていないことを確認していない。',
        correctAnswer: 'because of',
        correctExplanation:
          'because のあとには〈主語＋動詞〉が、because of のあとには名詞（句）が来る。ここは the heavy rain という名詞句なので because of を使う。動詞を使って書くなら We couldn\'t go out because it rained heavily. となる。',
      },
      {
        question: 'Since he was tired, he went to bed early. の Since の意味を答えなさい。',
        wrongAnswer: '「〜以来」',
        trapExplanation:
          'since は現在完了とセットで「〜以来」と習うことが多いため、その意味だけを覚えてしまう。「疲れて以来、早く寝た」と訳しても不自然だと気づかないまま進んでしまう。',
        correctAnswer: '「〜なので」（理由）',
        correctExplanation:
          'since には〈理由〉と〈時の起点〉の二つの意味がある。主節が現在完了なら「〜以来」（He has lived here since he was ten.）、現在完了でなければ「〜なので」と判断する。この文の主節は went と過去形なので理由の意味になり、「疲れていたので彼は早く寝た」となる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s322',
    subject: 'eigo',
    examType: 'koko',
    title: '従属接続詞④：though・although と even if・even though',
    description: '逆接の従属接続詞を使いこなし、but との重複や even if との混同を避ける',
    intro:
      '「疲れていたけれど、彼は働き続けた」を英語にすると、Though he was tired, but he kept working. と書いてしまう人がいます。日本語では「けれど」を一度しか言っていないのに、英語では二回言ってしまっているのです。接続詞は一つ、という原則をここで固めます。',
    order: 822,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'though / although（〜だけれども）は従属接続詞。but は等位接続詞。',
      'though と but を同じ文で重ねて使わない。',
      'even though（〜だけれども）は事実、even if（たとえ〜でも）は仮定。',
      'even if の節でも、未来のことは現在形で表す。',
      'though は文末に置いて「でもね」という副詞として使うこともある。',
    ],
    sections: [
      {
        heading: 'though・although と but の使い分け',
        body: `逆接には二つの型がある。

■ 従属接続詞 though / although
　Though he was tired, he kept working.
　＝ Although he was tired, he kept working.
　（疲れていたけれども、彼は働き続けた）
　文の後ろに置くこともできる。
　He kept working though he was tired.

■ 等位接続詞 but
　He was tired, but he kept working.

同じ内容を表すが、though を使ったら but は不要である。
　× Though he was tired, but he kept working.
　日本語の「〜けれども、しかし…」をそのまま英語にすると、この誤りになる。

■ though と although のちがい
　意味はほぼ同じ。although のほうがややかたい表現で、文頭に置かれることが多い。入試ではどちらを選んでも正解になる出題が多い。

■ 文末の though
　It was cold. It was sunny, though.（寒かった。でも晴れていたけどね）
　この though は副詞で、コンマのあとに置く。

★ ポイント：一つの文に接続詞は一つ。though を使うなら but を消し、but を使うなら though を消す。

⚠ 注意：because と so を重ねる誤り（前の課）と同じ構造の誤りである。日本語の「〜ので、だから」「〜けれど、しかし」が原因なので、まとめて注意する。`,
      },
      {
        heading: 'even though と even if',
        body: `even が付くと意味が強まるが、though と if では表す内容がちがう。

■ even though（〜だけれども）… 実際にそうである事実
　Even though it was raining, we went out.
　（雨が降っていたけれども、私たちは外出した）
　→ 実際に雨が降っていた。

■ even if（たとえ〜でも）… まだ決まっていない仮定
　Even if it rains, I will go.
　（たとえ雨が降っても、私は行きます）
　→ 降るかどうかはわからない。

■ 見分けの手がかり
　その内容がすでに起きている・事実である → even though
　これから起こるかどうかわからない → even if

■ even if の節は現在形
　even if も条件の副詞節なので、未来のことでも現在形で表す。
　○ Even if it rains tomorrow, I will go.
　× Even if it will rain tomorrow, I will go.

■ 訳し分けの練習
　Even though he is rich, he is not happy.（金持ちだけれども幸せではない＝実際に金持ち）
　Even if he is rich, I don't want to marry him.（たとえ金持ちでも結婚したくない＝金持ちかどうかは不明）

★ ポイント：even though は事実、even if は仮定。日本語では「たとえ〜でも」と訳せるのが even if。

⚠ 注意：even though の代わりに even but や but even を使うことはできない。even は though / if と組んで使う。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の誤りを直しなさい。Though he was tired, but he kept working.',
        wrongAnswer: 'Though を Because に直す',
        trapExplanation:
          '文の意味が取りにくく感じて、先頭の接続詞を別のものに変えてしまう。一つの文に though と but という二つの接続詞が入っていることに気づいていない。',
        correctAnswer: 'but を削除する（Though he was tired, he kept working.）。He was tired, but he kept working. でもよい。',
        correctExplanation:
          'though は従属接続詞、but は等位接続詞で、どちらも逆接を表す。日本語の「疲れていたけれども、しかし働き続けた」をそのまま英語にすると二重になってしまう。英語では接続詞は一つだけ使う。',
      },
      {
        question: '「たとえ雨が降っても、私は行きます」を英語にしなさい。',
        wrongAnswer: 'Even though it rains, I will go.',
        trapExplanation:
          'even though と even if を同じものだと思い込んでいる。「たとえ〜でも」という日本語を even though に当ててしまい、事実と仮定の区別ができていない。',
        correctAnswer: 'Even if it rains, I will go.',
        correctExplanation:
          'even if は「たとえ〜でも」で、これから起こるかどうかわからない仮定を表す。even though は「〜だけれども」で、実際にそうである事実を表す（Even though it was raining, we went out. は実際に降っていた）。条件の副詞節なので rains と現在形にする点にも注意。',
      },
    ],
  },

  // ───────── 8. that節と時制の一致（s323〜s326） ─────────
  {
    id: 'koko_eigo_s323',
    subject: 'eigo',
    examType: 'koko',
    title: 'that節①：I think that 〜 の形と that の省略',
    description: '接続詞 that が作る名詞のかたまりを理解し、語順を崩さずに使う',
    intro:
      '「彼は正しいと思う」の「彼は正しい」は、一つの文でありながら think の目的語にもなっています。文まるごとを名詞のように扱う、この便利な仕組みを作るのが接続詞の that です。英語で自分の意見を書くときの土台になる形です。',
    order: 823,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'kiso',
    keyPoints: [
      '接続詞の that は「〜ということ」の意味で、後ろに完全な文が来る。',
      'that 節全体が think / know / say などの目的語になる。',
      'この that は省略できる。',
      'that のあとは平叙文の語順（〈主語＋動詞〉）。疑問文の語順にしない。',
      'be sure that / be glad that / be afraid that など、形容詞のあとにも続く。',
    ],
    sections: [
      {
        heading: '文をまるごと目的語にする that',
        body: `接続詞の that は、一つの文を「〜ということ」という名詞のかたまりに変える。

例）He is right.（彼は正しい）
　　→ that he is right（彼が正しいということ）
　　→ I think that he is right.（私は彼が正しいと思う）

■ that 節をとるおもな動詞
　think（思う）／ know（知っている）／ say（言う）／ hope（望む）／ believe（信じる）／ hear（聞く）／ find（わかる）／ show（示す）
　例）I hear that she is sick.（彼女は病気だそうだ）
　例）The news shows that the plan worked.（そのニュースは計画がうまくいったことを示している）

■ 形容詞のあとにも続く
　be sure that（きっと〜だと思う）／ be glad that（〜してうれしい）／ be afraid that（残念ながら〜だと思う）／ be surprised that（〜に驚く）
　例）I am sure that he will come.
　例）I am glad that you like it.

■ that の省略
　この that は省略できる。会話ではむしろ省略するほうがふつう。
　I think he is right.／ I am sure he will come.

★ ポイント：that の後ろは完全な文である。主語も目的語も欠けていない。ここが関係代名詞の that との決定的なちがいになる。

⚠ 注意：that を省略すると〈動詞＋主語＋動詞〉という並びになる（think he is）。この形に慣れておかないと長文で切れ目を見失う。`,
      },
      {
        heading: 'that のあとは平叙文の語順',
        body: `that 節の中は、疑問文ではなくふつうの文（平叙文）の語順で書く。

　○ I think that he is a good teacher.
　× I think that is he a good teacher.

日本語で「彼はよい先生だと思う」と考えるぶんには誤りようがないが、疑問文を含む文を作るときに語順が崩れやすい。

■ 全体を疑問文にするとき
　Do you think that he is right?（あなたは彼が正しいと思いますか）
　→ 疑問文にするのは主節（Do you think）だけで、that 節の中はそのまま。

■ 疑問詞が付くとき
　What do you think he will say?（彼は何と言うと思いますか）
　→ 疑問詞を文頭に出し、that は使わない。この形は入試でよく出る。

■ 否定にするとき
　I don't think that he is right.（彼は正しくないと思う）
　→ 英語では not を前の think に付けるのがふつう。この点は後の課で扱う。

■ 節の中の時制
　主節が過去なら that 節も過去にそろえる（時制の一致）。
　He says that he is busy. → He said that he was busy.

★ ポイント：that 節の中は独立した一つの文として書ける形になっていなければならない。書いたあとに that を外して読み、文として成り立つか確かめる。

⚠ 注意：that の後ろが完全な文でないなら、それは接続詞ではなく関係代名詞である。The book that I bought の that は関係代名詞。`,
      },
    ],
    trapExamples: [
      {
        question: 'I think he is right. の he is right の前に省略されている語を答えなさい。',
        wrongAnswer: '省略されている語はない',
        trapExplanation:
          'I think he is right. という形をひとかたまりで覚えているため、接続詞が省かれていることに気づかない。動詞のあとにいきなり別の主語が来る形を不自然に感じないまま使っている。',
        correctAnswer: 'that（接続詞）',
        correctExplanation:
          'think の目的語になっているのは he is right という文全体で、それを名詞のかたまりにするのが接続詞の that である。I think that he is right. の that が省略された形。この that は省略できるが、関係代名詞の主格は省略できないという差を意識しておく。',
      },
      {
        question: '次の英文の誤りを直しなさい。I think that is he a good teacher.',
        wrongAnswer: 'that を削除する',
        trapExplanation:
          '文のどこかが変だと感じたときに、いちばん省略しやすい that を消せば直ると考えてしまう。しかし that を消しても is he a good teacher という疑問文の語順は残ったままである。',
        correctAnswer: 'I think that he is a good teacher.（I think he is a good teacher. でもよい）',
        correctExplanation:
          'that 節の中は平叙文の語順、つまり〈主語＋動詞〉で書く。is he という疑問文の語順は使えない。全体を疑問文にしたいときは主節を Do you think 〜? とし、that 節の中はそのままにする。',
      },
    ],
  },

  {
    id: 'koko_eigo_s324',
    subject: 'eigo',
    examType: 'koko',
    title: 'that節②：時制の一致',
    description: '主節が過去のとき、that 節の動詞も過去にそろえるルールを身につける',
    intro:
      '「彼は忙しいと言った」。日本語では「忙しい」が現在の形のままです。ところが英語では He said that he was busy. と過去形にします。言ったのが過去なら、その中身も過去の話。時間の軸をそろえるという英語の考え方を確認しましょう。',
    order: 824,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '主節の動詞が過去形なら、that 節の中の動詞も過去形にする（時制の一致）。',
      'is → was、are → were、have → had、will → would、can → could。',
      '日本語訳は現在のように訳すことが多いので、訳につられない。',
      '主節が現在形なら that 節はそのまま。',
      '間接疑問の中の動詞も同じく時制の一致を受ける。',
    ],
    sections: [
      {
        heading: '主節が過去なら節の中も過去',
        figureId: 'lf_kokoeigoext09_324',
        body: `主節の動詞を過去形にすると、that 節の中の動詞も過去形に変える。これを時制の一致という。

例）He says that he is busy.（彼は忙しいと言っている）
　→ He said that he was busy.（彼は忙しいと言った）

例）I think that she will come.（彼女は来ると思う）
　→ I thought that she would come.（彼女は来ると思った）

例）She knows that I can swim.
　→ She knew that I could swim.

■ 変化の対応
　is / am → was　　are → were
　play → played　　have / has → had
　will → would　　can → could　　may → might　　must → had to

■ なぜ過去にするのか
　「言った」のは過去の時点であり、「忙しい」のもその過去の時点での話だからである。英語は時間の軸をそろえて表す言語なので、両方を過去形にする。

★ ポイント：日本語では「忙しいと言った」「来ると思った」と、中身を現在形のように訳す。訳が現在形だからといって英語も現在形にしないこと。

⚠ 注意：主節が現在形（says / think）のときは、that 節の時制は自由である。He says that he was busy yesterday.（昨日忙しかったと言っている）も正しい。`,
      },
      {
        heading: '書きかえ問題での使われ方',
        body: `入試では「次の文を過去の文にしなさい」という形で問われることが多い。

例）I think that he is a good player.
　→ I thought that he was a good player.

例）She says that she will visit us next week.
　→ She said that she would visit us next week.
　※ next week はそのままでよい（厳密には the next week とすることもあるが、中学範囲では問われない）。

例）He says that he has finished his homework.
　→ He said that he had finished his homework.
　※ 現在完了 has finished は過去完了 had finished になる。高校範囲だが、選択肢に出ることがある。

■ 直接話法との関係
　He said, "I am busy." → He said that he was busy.
　引用符の中の I は he に、am は was に変わる。人称と時制の両方を直す。

■ 間接疑問でも同じ
　I asked him where he lives. → I asked him where he lived.
　主節が過去（asked）なので、間接疑問の中も過去形にする。

★ ポイント：主節の動詞を過去にしたら、節の中の動詞・助動詞をすべて過去形に直す。一つでも残すと減点される。

⚠ 注意：不変の真理や歴史的事実は時制の一致を受けない。この例外は次の課で扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を答えなさい。He says that he is busy. → He said that he ( ) busy.',
        wrongAnswer: 'is',
        trapExplanation:
          '日本語では「彼は忙しいと言った」と、that 節の中を現在の形で訳す。その訳につられて is のままにしてしまう。主節だけを過去にすれば足りると考えている。',
        correctAnswer: 'was',
        correctExplanation:
          '主節の動詞を said と過去形にしたので、that 節の中の動詞も過去形 was にそろえる（時制の一致）。He said that he was busy.「言った」のも「忙しかった」のも同じ過去の時点だからである。日本語訳は現在形のようになるが、英語では過去形にする。',
      },
      {
        question: '次の文を過去の文にしなさい。I think that she will come.',
        wrongAnswer: 'I thought that she will come.',
        trapExplanation:
          '主節の think だけを thought に変えて満足してしまう。助動詞 will も時制の一致を受けることを見落としている。',
        correctAnswer: 'I thought that she would come.',
        correctExplanation:
          '時制の一致では、that 節の中の助動詞も過去形にする。will → would、can → could、may → might となる。I thought that she would come.（彼女は来るだろうと思った）。動詞だけでなく助動詞も忘れずに直す。',
      },
    ],
  },

  {
    id: 'koko_eigo_s325',
    subject: 'eigo',
    examType: 'koko',
    title: 'that節③：時制の一致の例外',
    description: '不変の真理・ことわざ・歴史的事実の扱いを区別する',
    intro:
      '「先生は太陽は東から昇ると教えてくれた」。教えてくれたのは過去でも、太陽が東から昇ることは今も変わりません。だから英語でも現在形のままにします。時制の一致には、この「今も変わらない」という例外があるのです。ただし歴史の出来事は別扱いです。',
    order: 825,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '不変の真理・科学的事実は、主節が過去でも現在形のまま。',
      'ことわざ・格言も現在形のまま。',
      '今も変わらない事実・習慣も現在形のままにできる。',
      '歴史上の出来事は、いつでも過去形のまま（現在形にしない）。',
      '例外は「現在形にする」ものと「過去形のままにする」ものの二種類がある。',
    ],
    sections: [
      {
        heading: '現在形のままにする例外',
        body: `主節が過去でも、次のものは現在形のままにする。

■ ①不変の真理・科学的事実
　Our teacher told us that the sun rises in the east.
　（先生は太陽が東から昇ると教えてくれた）
　→ 太陽が東から昇るのは今も変わらないので rises のまま。

　He said that water boils at 100 degrees Celsius.
　（水はセ氏100度で沸騰すると彼は言った）

■ ②ことわざ・格言
　My mother often said that time is money.
　（母はよく時は金なりと言っていた）

■ ③今も変わらない事実
　She said that she lives in Osaka.（彼女は大阪に住んでいると言った＝今も住んでいる）
　※ 過去のことだと明示したいときは lived にする。

■ 理由
　時制の一致は「その時点での話だから過去にそろえる」という仕組みである。今も成り立つ内容は過去の一時点に限定されないので、現在形のままにする。

★ ポイント：例外にあたるのは「いつの時代でも成り立つ」内容だけである。個人の一時的な状態（忙しい・疲れている）は例外にならない。

⚠ 注意：例外を覚えたばかりのときに、なんでも現在形にしてしまう誤りが起こる。He said that he is busy. は誤りで、He said that he was busy. が正しい。`,
      },
      {
        heading: '過去形のままにする例外（歴史的事実）',
        body: `歴史上の出来事は、主節がどんな時制でも過去形のままにする。

例）We learned that World War II ended in 1945.
　（私たちは第二次世界大戦が1945年に終わったと学んだ）
　→ 現在形 ends にはしない。

例）Everyone knows that Columbus reached America in 1492.
　（コロンブスが1492年にアメリカに到達したことはだれもが知っている）
　→ 主節が現在形 knows でも、reached は過去形のまま。

■ 二種類の例外を整理する
　現在形のままにする：不変の真理・ことわざ・今も変わらない事実
　過去形のままにする：歴史上の出来事

どちらも「時制の一致を受けない」という点では同じだが、残る形が逆になる。

■ 見分けの目安
　年号や歴史上の人物・出来事が出てきたら過去形のまま。
　自然科学の法則やことわざなら現在形のまま。

■ 出題のされ方
　空所補充で（rises / rose）（ends / ended）のように、現在形と過去形を選ばせる形が多い。

★ ポイント：「例外＝現在形」と単純に覚えると、歴史的事実で必ず間違える。例外は二種類あると数えて覚える。

⚠ 注意：I learned that the earth goes around the sun.（地球は太陽の周りを回る）は不変の真理なので現在形。同じ理科の内容でも、実験をした日の出来事なら過去形になる。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。Our teacher told us that the sun ( ) in the east.（rises / rose）',
        wrongAnswer: 'rose',
        trapExplanation:
          '主節が told と過去形なので、時制の一致を機械的に当てはめて過去形を選んでしまう。太陽が東から昇るという内容が、過去の一時点に限られない事実であることを考えていない。',
        correctAnswer: 'rises',
        correctExplanation:
          '不変の真理・科学的事実は時制の一致を受けず、現在形のままにする。Our teacher told us that the sun rises in the east.（先生は太陽が東から昇ると教えてくれた）。三単現の s を忘れないこと。ことわざや今も変わらない事実も同じ扱いである。',
      },
      {
        question: '( )に入る語を選びなさい。She said that World War II ( ) in 1945.（ends / ended）',
        wrongAnswer: 'ends',
        trapExplanation:
          '「時制の一致の例外は現在形にする」と一つだけ覚えているため、歴史的事実にも現在形を当てはめてしまう。例外が二種類あることを整理できていない。',
        correctAnswer: 'ended',
        correctExplanation:
          '歴史上の出来事は、主節の時制にかかわらず過去形のままにする。She said that World War II ended in 1945. 現在形のままにするのは不変の真理・ことわざ・今も変わらない事実で、歴史的事実はそれとは逆に過去形のまま残る。',
      },
    ],
  },

  {
    id: 'koko_eigo_s326',
    subject: 'eigo',
    examType: 'koko',
    title: 'that節④：I don\'t think 〜 と so・not の代用',
    description: '否定を前に出す英語の言い方と、that 節を一語で受ける so・not を使いこなす',
    intro:
      '「彼は来ないと思います」を英語にすると、not の位置が日本語とずれます。英語は I don\'t think he will come. と、否定をいちばん前の動詞に付けるのです。同じ内容でも並べ方がちがう。この感覚は英作文の完成度を大きく左右します。',
    order: 826,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '「〜でないと思う」は I don\'t think that 〜 と、not を前の動詞に付ける。',
      'hope・be afraid では否定を前に出さない（I hope he will not be late.）。',
      'I think so.（そう思う）／ I don\'t think so.（そうは思わない）。',
      'I hope so.（そうだといいな）／ I hope not.（そうでないといいな）。',
      'so・not は前に出た内容を一語で受ける代用表現。',
    ],
    sections: [
      {
        heading: '否定は前の動詞に付ける',
        body: `日本語では「彼は来ないと思う」と、否定を後ろの内容に付ける。英語ではふつう前の動詞に付ける。

　○ I don't think he will come.（彼は来ないと思います）
　△ I think he won't come.（誤りではないが不自然）

■ この形をとるおもな動詞
　think / believe / suppose / imagine
　例）I don't believe that he is telling the truth.（彼が本当のことを言っているとは思わない）
　例）I don't think this is a good idea.

■ 否定を前に出さない動詞
　hope / be afraid / be sure は、否定を後ろに置く。
　○ I hope he will not be late.（彼が遅れないといいなと思う）
　× I don't hope he will be late.（不自然）
　○ I'm afraid he won't come.（残念ながら彼は来ないと思う）

■ 訳し方
　I don't think he is right. は「彼が正しいとは思わない」＝「彼は正しくないと思う」。日本語に直すときは自然な言い方を選ぶ。

★ ポイント：think・believe は前に否定、hope・be afraid は後ろに否定。動詞ごとにセットで覚える。

⚠ 注意：入試の英作文では I don't think 〜 の形が正解として求められることが多い。「〜ないと思う」を見たら、まず I don't think を思い浮かべる。`,
      },
      {
        heading: 'so と not で that 節を受ける',
        body: `前に出た内容をくり返す代わりに、so や not の一語で受けることができる。

■ so（そう・そうである）
　"Is he coming?" — "I think so."（来ると思います）
　"Will it be sunny tomorrow?" — "I hope so."（そうだといいですね）
　"Is she a doctor?" — "I'm afraid so."（残念ながらそうです）

■ not（そうではない）
　"Will it rain tomorrow?" — "I hope not."（降らないといいですね）
　"Is he angry?" — "I'm afraid not."（残念ながらちがいます）

■ think の否定は so を残して don't を使う
　"Is he coming?" — "I don't think so."（来ないと思います）
　× I think not.（かたい言い方で、ふつうは使わない）

■ 整理
　think：I think so. ／ I don't think so.
　hope：I hope so. ／ I hope not.
　be afraid：I'm afraid so. ／ I'm afraid not.

■ 会話文問題での出題
　対話文の空所に so か not を入れさせる問題が定番。前の発言の内容を肯定したいのか否定したいのかを読み取る。

★ ポイント：hope は「そうであってほしい」という願いなので、望まないことには not を使う。天気の話では「雨が降らないといいな」＝ I hope not. が頻出。

⚠ 注意：I hope not. を I don't hope so. とは言わない。hope の否定は not を後ろに置く、という原則がここでも生きている。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は来ないと思います」を英語にしなさい。',
        wrongAnswer: 'I think that he will not come.',
        trapExplanation:
          '日本語の語順どおりに「来ない」を that 節の中で否定してしまう。文法的に完全な誤りではないが、英語としては不自然で、入試では正解として扱われないことが多い。',
        correctAnswer: 'I don\'t think (that) he will come.',
        correctExplanation:
          'think・believe では、否定を前の動詞に付けるのが英語の言い方である。I don\'t think he will come. で「彼は来ないと思う」の意味になる。一方 hope や be afraid では否定を後ろに置く（I hope he will not be late.）。動詞ごとに覚える。',
      },
      {
        question: '空所に入る語を答えなさい。「明日は雨が降りますか」「降らないといいですね」 "Will it rain tomorrow?" — "I hope ( )."',
        wrongAnswer: 'so',
        trapExplanation:
          'I hope so.（そうだといいですね）という決まり文句を丸暗記しているため、内容を確かめずに so を入れてしまう。「降らないといいですね」という否定の願いであることを読み取れていない。',
        correctAnswer: 'not',
        correctExplanation:
          'I hope not. で「そうでないといいですね」の意味になる。前の内容（雨が降ること）を否定して受けるので not。肯定なら I hope so.（降るといいですね）。think の場合は I don\'t think so. と、don\'t を使って否定する点もあわせて整理しておく。',
      },
    ],
  },

  // ───────── 9. 間接疑問（s327〜s331） ─────────
  {
    id: 'koko_eigo_s327',
    subject: 'eigo',
    examType: 'koko',
    title: '間接疑問①：語順が平叙文に戻る',
    description: '疑問文が文の中に入ると〈疑問詞＋主語＋動詞〉の語順になることを徹底する',
    intro:
      '「彼はどこに住んでいますか」は Where does he live? です。ではこれを「あなたは彼がどこに住んでいるか知っていますか」に変えると、does が消えて語順がひっくり返ります。文の中に入った疑問文は、疑問文の顔をやめてふつうの文の顔に戻る。ここが最大の山場です。',
    order: 827,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'kiso',
    keyPoints: [
      '疑問文が文の一部になると〈疑問詞＋主語＋動詞〉の語順になる。',
      '疑問文の語順（疑問詞＋do/does/did＋主語＋原形）のまま入れてはいけない。',
      'be動詞の疑問文も語順が戻る（Who is he? → who he is）。',
      '間接疑問のかたまり全体が、動詞の目的語などになる。',
      '文末の「?」は主節が疑問文のときだけ付ける。',
    ],
    sections: [
      {
        heading: '疑問文が文の中に入ると語順が戻る',
        figureId: 'lf_kokoeigoext09_327',
        body: `疑問文をそのまま別の文の中に入れることはできない。語順を平叙文（ふつうの文）に戻す必要がある。

例）Where does he live?（彼はどこに住んでいますか）
　　→ Do you know where he lives?（彼がどこに住んでいるか知っていますか）
　　× Do you know where does he live?

例）What is this?（これは何ですか）
　　→ I don't know what this is.（これが何なのかわかりません）
　　× I don't know what is this.

例）When will she come?（彼女はいつ来ますか）
　　→ I don't know when she will come.
　　× I don't know when will she come.

■ 何が起きているか
　疑問文では〈疑問詞＋be動詞／助動詞＋主語〉と、主語より前に動詞が出てくる。文の中に入るとこの倒置がなくなり、〈疑問詞＋主語＋動詞〉というふつうの語順に戻る。

■ 手順
　①もとの疑問文を平叙文に戻す（He lives there. / This is 〜.）。
　②疑問詞を先頭に置く。
　③そのかたまりを文の中に入れる。

★ ポイント：間接疑問のかたまりは「疑問詞＋主語＋動詞」。この三語の順番を呪文のように覚える。

⚠ 注意：この語順の誤りは高校入試で最も多く出題されるひっかけである。空所補充・並べかえ・誤り訂正のどの形式でも狙われる。`,
      },
      {
        heading: 'かたまり全体が目的語になる',
        body: `間接疑問は、名詞と同じはたらきをするかたまりになる。

例）I know his address.（私は彼の住所を知っている）
　　I know where he lives.（私は彼がどこに住んでいるか知っている）
　　→ where he lives が his address と同じ位置にある＝ know の目的語。

例）Tell me your name. → Tell me what your name is.
例）I want to know the reason. → I want to know why he was absent.

■ 間接疑問を導くおもな表現
　Do you know 〜? ／ I don't know 〜 ／ Tell me 〜 ／ Could you tell me 〜? ／ I want to know 〜 ／ I wonder 〜

■ 文末の記号
　Do you know where he lives?　→ 主節が疑問文なので「?」
　I don't know where he lives.　→ 主節が平叙文なので「.」
　Please tell me where he lives.　→ 主節が命令文なので「.」

中に疑問詞があるからといって、必ず「?」になるわけではない。

■ be動詞の場合も同じ
　Who is that girl? → I want to know who that girl is.
　主語は that girl なので、〈疑問詞 who ＋主語 that girl ＋動詞 is〉の順になる。

★ ポイント：間接疑問は「大きな名詞」。文の中でどの位置に入るのかを意識すると、語順が崩れにくい。

⚠ 注意：Could you tell me where the station is? のように、ていねいな依頼の中に入ることも多い。この場合も中の語順は平叙文のままである。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼がどこに住んでいるか知っていますか」を英語にしなさい。',
        wrongAnswer: 'Do you know where does he live?',
        trapExplanation:
          'もとの疑問文 Where does he live? をそのまま Do you know のあとにつなげてしまう。疑問の意味があるのだから疑問文の語順のままでよい、と考えてしまうのが原因である。',
        correctAnswer: 'Do you know where he lives?',
        correctExplanation:
          '疑問文が文の中に入ると〈疑問詞＋主語＋動詞〉の平叙文の語順に戻る。does が消え、その分の三単現の s が live に戻って lives になる。文末の「?」は主節 Do you know が疑問文だから付いているのであって、中の疑問詞のせいではない。',
      },
      {
        question: '次の英文の誤りを直しなさい。I don\'t know what is this.',
        wrongAnswer: 'what を that に直す',
        trapExplanation:
          '違和感の原因を疑問詞のほうだと考えてしまう。しかし「これが何なのか」を表すには what が必要で、本当の誤りは is this という疑問文の語順である。',
        correctAnswer: 'I don\'t know what this is.',
        correctExplanation:
          '間接疑問の中は〈疑問詞＋主語＋動詞〉の順にする。主語は this、動詞は is なので what this is となる。もとの疑問文 What is this? では be動詞が主語の前に出ているが、文の中に入るとその倒置がなくなる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s328',
    subject: 'eigo',
    examType: 'koko',
    title: '間接疑問②：do・does・did が消えるときの動詞の形',
    description: 'do/does/did を消したあと、三単現の s や過去形を動詞に戻す作業を確実にする',
    intro:
      '間接疑問で does を消すと、動詞は裸になります。しかしそこで終わりではありません。does が背負っていた「三人称単数・現在」という情報を、動詞に返してあげる必要があるのです。did なら過去形に。この最後の一手を忘れる答案が驚くほど多くあります。',
    order: 828,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '間接疑問では do / does / did が消える。',
      'does が消えたら動詞に三単現の s を戻す（want → wants）。',
      'did が消えたら動詞を過去形に戻す（buy → bought）。',
      'do が消えたら動詞は原形のまま。',
      '助動詞 will / can はそのまま残す（消えるのは do / does / did だけ）。',
    ],
    sections: [
      {
        heading: '消した分を動詞に返す',
        figureId: 'lf_kokoeigoext09_328',
        body: `疑問文の do / does / did は、間接疑問にすると消える。ただし、それらが表していた情報は動詞に戻さなければならない。

■ does が消える場合
　What does he want?（彼は何がほしいのですか）
　→ I know what he wants.（彼が何をほしがっているか知っている）
　→ does が消え、want に三単現の s が付いて wants。
　× I know what he want.

■ did が消える場合
　What did she buy?（彼女は何を買ったのですか）
　→ I know what she bought.
　→ did が消え、buy が過去形 bought に戻る。
　× I know what she buy.／× I know what she did buy.

■ do が消える場合
　Where do they live?
　→ I know where they live.
　→ 主語が they なので動詞は原形のまま live。

■ 助動詞は残る
　When will he come? → I don't know when he will come.
　What can she do? → I don't know what she can do.
　will / can / must は消さずにそのまま〈主語＋助動詞＋動詞〉の順で置く。

★ ポイント：消えるのは do / does / did の三つだけ。この三つは「疑問文を作るためだけの助動詞」なので、疑問文でなくなれば不要になる。

⚠ 注意：does を消したあとに s を戻し忘れる誤りが最多である。主語が he / she / it や単数名詞のときは必ず確認する。`,
      },
      {
        heading: '手順を三段階で固定する',
        body: `間接疑問を作る作業は、次の三段階で機械的に行える。

①do / does / did を消す。
②〈疑問詞＋主語＋動詞〉の順に並べる。
③消した do / does / did の情報を動詞に戻す。

■ 練習
　Where does your father work?
　①does を消す → Where your father work
　②語順を確認 → where your father works（疑問詞＋主語＋動詞）
　③does の分の s を戻す → works
　→ Do you know where your father works?

　When did the movie start?
　①did を消す ②where 〜 ではなく when the movie start ③過去形に戻す → started
　→ I don't remember when the movie started.

■ 疑問詞が二語以上のとき
　What time does the bus leave? → Do you know what time the bus leaves?
　How many books did he buy? → I don't know how many books he bought.
　疑問詞のかたまり（what time / how many books）をひとまとまりで先頭に置く。

■ be動詞の疑問文には do 系がない
　Where is he from? → I don't know where he is from.
　be動詞は主語の後ろに戻すだけでよい。

★ ポイント：③を飛ばすと必ず減点される。「消したら戻す」を一組で覚える。

⚠ 注意：I know what did she buy. のように did を残す誤りもよく見られる。疑問文でなくなったのだから do 系の助動詞は不要である。`,
      },
    ],
    trapExamples: [
      {
        question: 'What did she buy? を I know で始まる文の中に入れなさい。',
        wrongAnswer: 'I know what did she buy.',
        trapExplanation:
          'もとの疑問文をそのまま I know のあとに置いてしまう。疑問文らしさを残したほうが「何を買ったのか」という意味が伝わると感じてしまうのも原因である。',
        correctAnswer: 'I know what she bought.',
        correctExplanation:
          '間接疑問では did が消え、〈疑問詞＋主語＋動詞〉の語順になる。さらに did が背負っていた過去の情報を動詞に戻すので、buy は過去形 bought になる。did を残したり、buy のまま置いたりするのはどちらも誤りである。',
      },
      {
        question: '( )に入る語を選びなさい。Tell me what he ( ).（want / wants）',
        wrongAnswer: 'want',
        trapExplanation:
          'もとの疑問文 What does he want? では動詞が原形 want なので、その形をそのまま持ってきてしまう。does が消えたあとに三単現の s を戻す作業を忘れている。',
        correctAnswer: 'wants',
        correctExplanation:
          'does が消えると、その does が表していた「三人称単数・現在」を動詞が引き受ける。したがって want に s を付けて wants にする。Tell me what he wants.（彼が何をほしがっているか教えて）。did が消えるときは過去形に戻す、と同じ考え方である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s329',
    subject: 'eigo',
    examType: 'koko',
    title: '間接疑問③：疑問詞のない疑問文は if・whether',
    description: 'Yes/No で答える疑問文を文の中に入れるとき、if や whether を使う形を覚える',
    intro:
      '「彼が来るかどうかわかりません」。この「かどうか」にあたる語が英語にもあります。if と whether です。ただしこの if は「もし〜なら」の if とは別物で、未来のことに will を使えます。同じつづりで働きがちがう、要注意の一語です。',
    order: 829,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '疑問詞のない疑問文を文の中に入れるときは if または whether（〜かどうか）を使う。',
      'if / whether のあとも〈主語＋動詞〉の平叙文の語順。',
      'この if は名詞節なので、未来のことには will を使う。',
      '条件の if（もし〜なら）は副詞節なので、未来でも現在形。',
      'whether は or not と組んで使える（whether or not / whether 〜 or not）。',
    ],
    sections: [
      {
        heading: '「〜かどうか」の if と whether',
        body: `Yes / No で答える疑問文には疑問詞がない。その場合は if または whether を使って文の中に入れる。

例）Will he come?（彼は来ますか）
　　→ I don't know if he will come.（彼が来るかどうかわかりません）
　　→ I don't know whether he will come.

例）Is she a student?
　　→ I want to know if she is a student.

例）Did you finish your homework?
　　→ She asked me if I had finished my homework.（時制の一致を受ける）

■ 語順は平叙文
　○ I don't know if he will come.
　× I don't know if will he come.
　疑問詞がある場合と同じく、疑問文の語順のまま入れることはできない。

■ if と whether のちがい
　意味はほぼ同じ。whether のほうがかたい表現で、or not と組み合わせやすい。
　I don't know whether or not he will come.
　I don't know whether he will come or not.
　※ if の直後に or not は置けない（× if or not he will come）。

★ ポイント：疑問詞があれば疑問詞、なければ if / whether。この一点で使い分ける。

⚠ 注意：Do you know if he is at home? に対する答えは Yes / No である。「〜かどうか」という部分だけを取り出して答えるのではない。`,
      },
      {
        heading: '条件の if と「〜かどうか」の if',
        body: `同じ if でも、はたらきがちがえば時制の扱いも変わる。

■ 名詞節の if（〜かどうか）
　know / wonder / ask などの目的語になる。
　I don't know if it will rain tomorrow.（明日雨が降るかどうかわからない）
　→ 未来のことなので will を使う。

■ 副詞節の if（もし〜なら）
　条件を表し、主節に付け足される。
　If it rains tomorrow, we will stay home.（もし明日雨が降ったら家にいます）
　→ 時・条件の副詞節なので現在形。

■ 見分け方
　if 節を取り除いて文が成り立つか。
　I don't know if it will rain tomorrow. → I don't know だけでは目的語がなく、内容が足りない → 名詞節。
　If it rains tomorrow, we will stay home. → We will stay home. だけで文が成り立つ → 副詞節。

■ 比べてみる
　I don't know if he will come.（来るかどうかわからない・名詞節・will 可）
　If he comes, please tell me.（もし彼が来たら教えて・副詞節・現在形）

★ ポイント：「〜かどうか」と訳せるなら名詞節で will が使える。「もし〜なら」と訳せるなら副詞節で現在形にする。訳で見分けられる。

⚠ 注意：whether は「〜かどうか」の意味しか持たないので、迷ったら whether に置きかえられるかを試すとよい。置きかえられれば名詞節である。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼が来るかどうかわかりません」を英語にしなさい。',
        wrongAnswer: 'I don\'t know if will he come.',
        trapExplanation:
          '疑問文 Will he come? をそのまま if のあとに置いてしまう。疑問詞がある間接疑問では語順を直せても、if の場合は疑問文の形を残してよいと思い込んでしまう。',
        correctAnswer: 'I don\'t know if he will come.（whether を使ってもよい）',
        correctExplanation:
          'if / whether のあとも〈主語＋動詞〉の平叙文の語順にする。will he ではなく he will の順。疑問詞のない疑問文を文の中に入れるときは if または whether を使い、語順を戻すという点は疑問詞の場合とまったく同じである。',
      },
      {
        question: '( )に入る語句を選びなさい。I don\'t know if it ( ) tomorrow.（rains / will rain）',
        wrongAnswer: 'rains',
        trapExplanation:
          '「時・条件の副詞節では未来でも現在形」というルールを覚えているため、if を見た瞬間に現在形を選んでしまう。この if が「もし〜なら」ではなく「〜かどうか」であることを確認していない。',
        correctAnswer: 'will rain',
        correctExplanation:
          'この if は know の目的語になる名詞節（〜かどうか）なので、未来のことは will で表す。I don\'t know if it will rain tomorrow.（明日雨が降るかどうかわからない）。現在形にするのは If it rains tomorrow, we will stay home. のような条件の副詞節のときだけである。whether に置きかえられるかで見分けられる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s330',
    subject: 'eigo',
    examType: 'koko',
    title: '間接疑問④：疑問詞が主語のときは語順が変わらない',
    description: 'Who broke it? のように疑問詞自身が主語の場合の扱いを区別する',
    intro:
      '「誰が窓を割ったの?」は Who broke the window? です。よく見ると、この文には does も did もありません。疑問詞がそのまま主語になっているからです。もともと〈主語＋動詞〉の順なので、文の中に入れても形は変わりません。例外に見えて、実は同じ原理です。',
    order: 830,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '疑問詞が主語のときは、疑問文がすでに〈主語＋動詞〉の語順になっている。',
      'したがって間接疑問にしても語順は変わらない。',
      '疑問詞の主語は三人称単数扱い（Who wants 〜? / What makes 〜?）。',
      '疑問詞が主語かどうかは、もとの疑問文に do / does / did があるかで判断できる。',
      'Who is that girl? は who が補語で、主語は that girl。語順が変わる。',
    ],
    sections: [
      {
        heading: '疑問詞が主語の疑問文',
        figureId: 'lf_kokoeigoext09_330',
        body: `疑問詞そのものが主語になっている疑問文は、はじめから〈主語＋動詞〉の語順である。

例）Who broke the window?（誰がその窓を割ったのですか）
　　→ 主語は Who、動詞は broke。do / does / did は使わない。
　　→ Do you know who broke the window?（誰が割ったか知っていますか）
　　→ 語順はそのまま。

例）What happened yesterday?（昨日何が起きたのですか）
　　→ Tell me what happened yesterday.

例）Who wants to go with me?（誰が私といっしょに行きたいですか）
　　→ I don't know who wants to go with me.

■ 見分け方
　もとの疑問文に do / does / did がなく、疑問詞の直後にいきなり動詞が来ていれば、その疑問詞は主語である。
　Who broke it?（did がない → who が主語）
　What did he break?（did がある → he が主語で、what は目的語）

■ 三人称単数扱い
　疑問詞の主語は単数として扱う。
　Who wants some tea?（× Who want）
　What makes you so happy?（× What make）

★ ポイント：「間接疑問では語順が変わる」という原則の例外ではなく、もともと平叙文と同じ語順だから何も変える必要がない、と理解する。

⚠ 注意：語順を変えようとして Do you know who did break the window? のように did を足してしまう誤りがある。もとの疑問文になかったものを足してはいけない。`,
      },
      {
        heading: 'Who is that girl? との区別',
        body: `who が出てくる疑問文でも、who が主語でない場合がある。

■ who が主語の場合
　Who broke the window?（誰が割ったか）
　→ who が動作をする側。間接疑問にしても who broke the window のまま。

■ who が補語の場合
　Who is that girl?（あの女の子は誰ですか）
　→ 主語は that girl で、who は「誰であるか」を表す補語。
　→ 間接疑問にすると〈疑問詞＋主語＋動詞〉の順になる。
　→ I want to know who that girl is.
　→ × I want to know who is that girl.

■ 見分け方
　who のあとにすぐ動詞が来て、その動詞に別の主語がないなら who が主語。
　who のあとが be動詞で、そのあとに名詞（that girl）があるなら、その名詞が主語。

■ 練習
　Who called you? → I don't know who called me.（who が主語・語順そのまま）
　Who is he? → I don't know who he is.（he が主語・語順が変わる）
　What is your name? → Tell me what your name is.（your name が主語）

★ ポイント：be動詞の文では、who のあとに名詞があればその名詞が主語である。この一点で判断できる。

⚠ 注意：What is this? → I don't know what this is. も同じ型である。this が主語なので〈what＋this＋is〉の順になる。`,
      },
    ],
    trapExamples: [
      {
        question: '「誰がこの窓を割ったか知っていますか」を英語にしなさい。',
        wrongAnswer: 'Do you know who did break this window?',
        trapExplanation:
          '「間接疑問では do / does / did を消す」というルールだけを覚えていて、逆に語順を直そうとして did を足してしまう。もとの疑問文 Who broke this window? に did がないことを確認していない。',
        correctAnswer: 'Do you know who broke this window?',
        correctExplanation:
          'who が主語の疑問文には do / does / did を使わない。Who broke this window? はすでに〈主語＋動詞〉の語順なので、間接疑問にしても形はそのままである。もとの疑問文になかったものを足してはいけない。',
      },
      {
        question: '次の英文の誤りを直しなさい。I want to know who is that girl.',
        wrongAnswer: 'that girl を she に直す',
        trapExplanation:
          'who is that girl という並びが Who is that girl? という疑問文と同じなので、正しいと感じてしまう。この who は主語ではなく補語で、主語は that girl であることに気づいていない。',
        correctAnswer: 'I want to know who that girl is.',
        correctExplanation:
          'この文の主語は that girl であり、who は「誰であるか」を表す補語である。したがって〈疑問詞＋主語＋動詞〉の順にして who that girl is とする。語順が変わらないのは Who broke the window? のように疑問詞そのものが主語のときだけである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s331',
    subject: 'eigo',
    examType: 'koko',
    title: '間接疑問⑤：時制の一致と文末の記号',
    description: '間接疑問を含む文全体を、時制・記号まで含めて正確に仕上げる',
    intro:
      '間接疑問の語順を直せるようになると、次に落とすのは時制と文末の記号です。「彼にどこに住んでいるかたずねた」なら中の動詞も過去形。中に疑問詞があっても、主節が命令文ならピリオドで終わる。細部を詰めて得点を確定させましょう。',
    order: 831,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '主節が過去形なら、間接疑問の中の動詞も過去形にする（時制の一致）。',
      '文末の記号は主節で決まる。主節が疑問文なら「?」、それ以外は「.」。',
      'Could you tell me 〜? / Do you know 〜? は疑問文なので「?」。',
      'Please tell me 〜 / I wonder 〜 は「.」。',
      '間接疑問のかたまりは、動詞の目的語や to 不定詞の目的語になる。',
    ],
    sections: [
      {
        heading: 'かたまりの位置と文末の記号',
        figureId: 'lf_kokoeigoext09_331',
        body: `間接疑問は名詞のはたらきをするかたまりなので、文の中のいろいろな位置に入る。

例）Please tell me what he said.（彼が何と言ったのか教えてください）
　→ what he said が tell の二つ目の目的語。文末はピリオド。

例）Do you know where the station is?（駅がどこにあるか知っていますか）
　→ 主節 Do you know が疑問文なので、文末はクエスチョンマーク。

例）I want to know why she was absent.
　→ to know の目的語。文末はピリオド。

例）I wonder how old he is.（彼が何歳なのかなあ）
　→ I wonder 〜 は「〜かなあ」とひとりごとのように言う表現。文末はピリオド。

■ 記号の決め方
　文全体が疑問文か平叙文か（命令文か）だけを見る。中に疑問詞があるかどうかは関係ない。
　Could you tell me where he lives?　→ Could you 〜? は疑問文 → 「?」
　Please tell me where he lives.　　→ 命令文 → 「.」

★ ポイント：「疑問詞が入っているから ?」ではない。主節の形だけで決まる。

⚠ 注意：Could you tell me 〜? はていねいな依頼だが形は疑問文なので「?」を付ける。日本語では「教えてください」と命令文のように訳すため、ピリオドにしてしまう誤りが起こる。`,
      },
      {
        heading: '間接疑問と時制の一致',
        body: `主節の動詞が過去形なら、間接疑問の中の動詞も過去形にする。

例）I ask him where he lives.
　→ I asked him where he lived.（私は彼にどこに住んでいるかたずねた）

例）She asks me what I want.
　→ She asked me what I wanted.

例）I don't know when he will come.
　→ I didn't know when he would come.（will → would）

■ 二つの作業を同時に行う
　①疑問文の語順を平叙文に戻す
　②主節が過去なら時制の一致を適用する
　この二つを別々に確認する習慣をつける。

　例）Where does he live? を I asked him で受ける。
　　①does を消し、where he lives にする。
　　②主節が asked なので lives → lived。
　　→ I asked him where he lived.

■ 例外も同じ
　不変の真理は現在形のまま。
　He asked me why the sun rises in the east.

■ 直接話法との関係
　He said to me, "Where do you live?" → He asked me where I lived.
　人称（you → I）と時制（do live → lived）の両方を直す。

★ ポイント：語順だけ直して時制を忘れる誤りが非常に多い。主節の動詞が過去形かどうかを最初に確認する。

⚠ 注意：主節が現在形（ask / know / wonder）なら時制の一致は起こらない。I know where he lives. のままでよい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文末に付ける記号は「?」と「.」のどちらですか。Please tell me what time the movie starts',
        wrongAnswer: '「?」',
        trapExplanation:
          '文の中に what time という疑問詞が入っているので、文全体が疑問文だと考えてしまう。文末の記号を決めるのは主節の形だという原則を意識していない。',
        correctAnswer: '「.」（ピリオド）',
        correctExplanation:
          '文全体は Please tell me 〜 という命令文なので、文末はピリオドである。クエスチョンマークを付けるのは主節が疑問文のとき（Do you know what time the movie starts?／Could you tell me what time the movie starts?）だけである。',
      },
      {
        question: '( )に入る語を選びなさい。I asked him where he ( ).（lives / lived）',
        wrongAnswer: 'lives',
        trapExplanation:
          '間接疑問の語順を平叙文に戻すことに気を取られ、時制の一致まで手が回らない。「どこに住んでいるか」という日本語が現在形なので、そのまま lives にしてしまう。',
        correctAnswer: 'lived',
        correctExplanation:
          '主節の動詞が asked と過去形なので、間接疑問の中の動詞も過去形にそろえる。I asked him where he lived.（私は彼にどこに住んでいるのかたずねた）。間接疑問では①語順を戻す②時制の一致を確認する、の二つを必ずセットで行う。',
      },
    ],
  },

  // ───────── 10. 相関接続詞（s332〜s335） ─────────
  {
    id: 'koko_eigo_s332',
    subject: 'eigo',
    examType: 'koko',
    title: '相関接続詞①：both A and B と not only A but also B',
    description: '二語一組の接続詞の形をそろえ、動詞の一致を正しく判断する',
    intro:
      '「トムもケンも両方サッカーが上手だ」。この「両方」を表す both は、必ず and とペアで使います。二つで一組の接続詞は、A と B の形をそろえることが命です。片方が名詞、もう片方が動詞句、では天びんが傾いてしまいます。',
    order: 832,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      'both A and B（A も B も両方）は必ず複数扱い。',
      'not only A but also B（A だけでなく B も）。also は省略されることがある。',
      'A と B は同じ形（同じ品詞・同じ構造）にそろえる。',
      'not only A but also B が主語のとき、動詞は B に合わせる。',
      'both A and B は「両方」なので、否定文で使うと部分否定になり紛らわしい。',
    ],
    sections: [
      {
        heading: 'both A and B は複数扱い',
        body: `both A and B は「A も B も両方とも」という意味で、主語になると必ず複数扱いになる。

例）Both Tom and Ken are good at soccer.（トムもケンも両方サッカーが上手だ）
　　× Both Tom and Ken is good at soccer.

例）Both my father and my mother work at the same hospital.
例）She can speak both English and French.

■ A と B の形をそろえる
　○ both English and French（名詞と名詞）
　○ both reading books and listening to music（動名詞と動名詞）
　× both English and speak French（名詞と動詞句）

■ both のほかの使い方
　Both of them are my friends.（both of ＋ 複数名詞）
　They both like music.（主語のあとに置く）

■ 否定文での注意
　I don't like both of them. は「両方とも好きというわけではない」という部分否定になる。「両方とも好きではない」と言いたいときは neither を使う（次の課）。

★ ポイント：both A and B は「二つそろって主語」なので複数。ここは選択肢問題で頻出する。

⚠ 注意：both のあとに three 以上は続かない。三つ以上を並べるときは all を使う。`,
      },
      {
        heading: 'not only A but also B',
        body: `not only A but also B は「A だけでなく B も」という意味である。

例）He can speak not only English but also French.
　（彼は英語だけでなくフランス語も話せる）

例）She is not only kind but also clever.
　（彼女は親切なだけでなく賢い）

■ A と B の形をそろえる
　× He can not only speak English but also French.
　　→ A が speak English（動詞句）、B が French（名詞）でそろっていない。
　○ He can speak not only English but also French.
　　→ A も B も名詞。not only を English の直前に移せばそろう。

■ also の省略
　not only A but B のように also を省くこともある。意味は変わらない。

■ 主語になったときの動詞
　Not only you but also he is invited to the party.
　→ 動詞は but also の後ろの he に合わせる（近いほうに合わせる）。
　→ × Not only you but also he are invited.

■ 強調の位置
　not only は、A の直前に置く。英作文では「どこから A が始まるか」を意識して置く位置を決める。

★ ポイント：相関接続詞の問題は「A と B の形はそろっているか」「動詞はどちらに合わせるか」の二点に集約される。

⚠ 注意：not only 〜 but also 〜 は書きかえ問題でもよく出る（B as well as A）。次の課で扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。Both Tom and Ken ( ) good at soccer.（is / are）',
        wrongAnswer: 'is',
        trapExplanation:
          '空所の直前にある Ken が単数名詞なので、それに合わせて is を選んでしまう。both A and B 全体が主語であり、二人そろって複数になることを見落としている。',
        correctAnswer: 'are',
        correctExplanation:
          'both A and B は「A も B も両方」で必ず複数扱いになる。したがって Both Tom and Ken are good at soccer.（トムもケンも両方サッカーが上手だ）。同じ相関接続詞でも either A or B / neither A nor B は近いほうに合わせるので、混同しないこと。',
      },
      {
        question: '次の英文の誤りを直しなさい。He can not only speak English but also French.',
        wrongAnswer: 'not only を both に直す',
        trapExplanation:
          '文の意味が取りにくく感じて、相関接続詞そのものを変えてしまう。本当の誤りは not only と but also が結んでいる A と B の形がそろっていないことである。',
        correctAnswer: 'He can speak not only English but also French.',
        correctExplanation:
          'not only A but also B の A と B は同じ形にそろえる。もとの文は A が speak English（動詞句）、B が French（名詞）でそろっていない。not only を English の直前に移せば、A も B も名詞になってそろう。',
      },
    ],
  },

  {
    id: 'koko_eigo_s333',
    subject: 'eigo',
    examType: 'koko',
    title: '相関接続詞②：either A or B と neither A nor B',
    description: '動詞を「近いほう」に合わせる規則と、neither の否定の意味を押さえる',
    intro:
      '「あなたか私のどちらかが間違っている」を英語にすると、動詞は am になります。二人いるのに複数ではないうえ、you ではなく I に合わせるからです。動詞に近いほうに合わせる——この一言を知っているかどうかで、選択肢問題の正答率が変わります。',
    order: 833,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      'either A or B（A か B のどちらか）、neither A nor B（A も B もどちらも〜ない）。',
      '主語になったときの動詞は、動詞に近い B に合わせる。',
      'neither A nor B はそれ自体が否定なので、not を重ねない。',
      'neither A nor B ＝ not either A or B。',
      'both A and B は複数扱い。either / neither とは扱いがちがう。',
    ],
    sections: [
      {
        heading: '動詞は「近いほう」に合わせる',
        figureId: 'lf_kokoeigoext09_333',
        body: `either A or B と neither A nor B が主語になるとき、動詞は B（動詞に近いほう）に合わせる。

例）Either you or I am wrong.（あなたか私のどちらかが間違っている）
　　→ 動詞に近いのは I なので am。

例）Either Tom or his friends are coming.
　　→ 近いのは his friends（複数）なので are。

例）Neither Tom nor his friends were there.
　　→ 近いのは his friends（複数）なので were。

例）Neither he nor I have a car.
　　→ 近いのは I なので have。

■ both との比較
　both A and B → 必ず複数（Both Tom and Ken are kind.）
　either A or B / neither A nor B → 近いほうに合わせる

■ 語順で答えが変わる
　Either you or I am wrong.
　Either I or you are wrong.
　どちらも正しいが、動詞の形が変わる。

★ ポイント：「近いほうに合わせる」と唱えて覚える。英語では動詞のすぐ前にある語との音のつながりを優先する。

⚠ 注意：either A or B は「どちらか一方」なので二つのうちの一つ。three 以上には使わない。`,
      },
      {
        heading: 'neither は否定を含む',
        body: `neither A nor B は「A も B もどちらも〜ない」という意味で、それ自体が否定を表す。

例）I like neither coffee nor tea.（私はコーヒーも紅茶も好きではありません）
　　× I don't like neither coffee nor tea.（二重否定になる）

■ not either 〜 or 〜 で書きかえられる
　I like neither coffee nor tea.
　＝ I don't like either coffee or tea.
　否定語 not を使うときは either 〜 or 〜 にする。

■ 単独の neither / either
　"I don't like natto." — "Neither do I."（私もです）
　"I don't like natto." — "I don't, either."（私もです）
　肯定の「私もです」は Me too. / So do I. で、否定のときは Neither do I. になる。

■ どちらも複数ではない
　Neither of them is my friend.（どちらも友達ではない）
　neither of ＋ 複数名詞 でも、動詞は単数で受けるのが原則。

★ ポイント：neither の中にすでに「ない」が入っている。unless の中に否定が入っているのと同じ考え方である。

⚠ 注意：日本語の「〜も…もない」を、not と neither の両方で表そうとして二重否定にしてしまう誤りが多い。どちらか一方だけで表す。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。Either you or Tom ( ) wrong.（is / are）',
        wrongAnswer: 'are',
        trapExplanation:
          'you と Tom で二人いるので複数だと考えたり、文中の you に合わせて are を選んだりしてしまう。either A or B が「どちらか一方」であることと、動詞を近いほうに合わせる規則を知らないと必ず引っかかる。',
        correctAnswer: 'is',
        correctExplanation:
          'either A or B が主語のとき、動詞は動詞に近いほう（ここでは Tom）に合わせる。Tom は三人称単数なので is。Either you or Tom is wrong.（あなたかトムのどちらかが間違っている）。both A and B なら必ず複数扱いで are になる点と区別する。',
      },
      {
        question: '「私はコーヒーも紅茶も好きではありません」を neither を使って英語にしなさい。',
        wrongAnswer: 'I don\'t like neither coffee nor tea.',
        trapExplanation:
          '日本語の「好きではありません」を don\'t で、「〜も…も」を neither nor で表そうとして、否定を二回使ってしまう。neither 自体に否定の意味が含まれていることに気づいていない。',
        correctAnswer: 'I like neither coffee nor tea.（I don\'t like either coffee or tea. でもよい）',
        correctExplanation:
          'neither A nor B はそれ自体が「どちらも〜ない」という否定表現なので、don\'t を重ねると二重否定になる。not を使いたい場合は either 〜 or 〜 に変えて I don\'t like either coffee or tea. とする。unless の中に not を入れないのと同じ考え方である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s334',
    subject: 'eigo',
    examType: 'koko',
    title: '相関接続詞③：B as well as A への書きかえ',
    description: 'not only A but also B を B as well as A に直し、動詞の一致まで正しく決める',
    intro:
      '同じ内容を別の形で書かせる問題は、入試の定番です。not only A but also B を as well as で書きかえるとき、A と B の位置が入れかわります。順番が変わるということは、動詞を合わせる相手も変わるということ。ここまで見抜ければ満点です。',
    order: 834,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'not only A but also B ＝ B as well as A。A と B の順序が入れかわる。',
      'as well as では、力点の置かれる語（B）が前に来る。',
      '動詞は as well as の前の語（B）に合わせる。',
      'not only A but also B が主語のときも、動詞は B に合わせる。',
      '書きかえたあと、A と B の形がそろっているか確認する。',
    ],
    sections: [
      {
        heading: '順序が入れかわる書きかえ',
        body: `not only A but also B（A だけでなく B も）を as well as で書きかえると、A と B の順序が入れかわる。

例）She can speak not only English but also Chinese.
　→ She can speak Chinese as well as English.
　（彼女は英語だけでなく中国語も話せる）

例）He plays not only the guitar but also the piano.
　→ He plays the piano as well as the guitar.

■ なぜ入れかわるのか
　not only A but also B では、後ろの B に力点が置かれる。as well as では前に来る語に力点が置かれるので、B が前に出る。
　「英語だけでなく中国語も」＝「英語と同様に中国語も」で、強調されるのは中国語のほう。

■ 手順
　①not only のあとの A、but also のあとの B を確認する。
　②B を前に書く。
　③as well as を置く。
　④A を後ろに書く。

■ 形をそろえる
　書きかえたあとも A と B は同じ品詞・同じ形であること。
　Chinese as well as English（名詞と名詞）

★ ポイント：入れかえを忘れて She can speak English as well as Chinese. と書くと、強調される内容が逆になってしまう。

⚠ 注意：as well as には「〜と同じくらい上手に」という別の意味もある（She can swim as well as her brother.）。文脈で判断する。`,
      },
      {
        heading: '動詞をどちらに合わせるか',
        body: `相関接続詞が主語になったときの動詞の一致は、次のように整理できる。

■ both A and B → 必ず複数
　Both Tom and Ken are kind.

■ either A or B / neither A nor B → 近いほう（B）
　Either you or Tom is wrong.
　Neither he nor I have a car.

■ not only A but also B → B（but also のあと）
　Not only you but also he is invited to the party.
　→ 主語の中心は he なので is。you につられて are としない。

■ B as well as A → B（as well as の前）
　He as well as you is invited to the party.
　→ 主語の中心は He なので is。

■ 覚え方
　both だけが例外で必ず複数。ほかは「主語の中心になる語」に合わせる。not only A but also B と B as well as A では、どちらも B が中心である。

★ ポイント：書きかえで順序が入れかわると、動詞に合わせる相手の位置も変わる。書きかえたあとに必ず動詞を見直す。

⚠ 注意：Not only you but also he is invited. のように、直前の he に合わせるように見えるが、これは偶然ではなく「B が主語の中心だから」である。順序が Not only he but also you なら are になる。`,
      },
    ],
    trapExamples: [
      {
        question: '( )に入る語を選びなさい。Not only you but also he ( ) invited to the party.（was / were）',
        wrongAnswer: 'were',
        trapExplanation:
          '文頭の you につられて were を選んでしまう。あるいは you と he で二人いるから複数だと考えてしまう。not only A but also B の主語の中心が B であることを知らないと迷う。',
        correctAnswer: 'was',
        correctExplanation:
          'not only A but also B が主語のとき、動詞は but also のあとの B に合わせる。ここでは he なので was。Not only you but also he was invited to the party.（あなただけでなく彼もパーティーに招待された）。both A and B なら複数扱いになる点と区別する。',
      },
      {
        question: 'She can speak not only English but also Chinese. を as well as を使って書きかえなさい。',
        wrongAnswer: 'She can speak English as well as Chinese.',
        trapExplanation:
          '書きかえるときに not only と but also を as well as に置きかえるだけで、A と B の順序をそのままにしてしまう。その結果、強調される内容が「英語も」と逆になってしまう。',
        correctAnswer: 'She can speak Chinese as well as English.',
        correctExplanation:
          'not only A but also B では後ろの B に力点があるが、B as well as A では前に出た語に力点が置かれる。したがって B（Chinese）を前、A（English）を後ろに置く。「英語だけでなく中国語も話せる」という強調の位置を保つには、順序を入れかえる必要がある。',
      },
    ],
  },

  {
    id: 'koko_eigo_s335',
    subject: 'eigo',
    examType: 'koko',
    title: '総合演習：関係代名詞・接続詞・間接疑問の識別',
    description: 'that と who の働きを一つの物差しで見分け、単元全体を整理する',
    intro:
      '同じ that が三通り、同じ who が二通りの働きを持ちます。ばらばらに覚えると混乱しますが、実は見るところは一つだけ。その語の直後に何が来ているか、そして直前に名詞があるか。最後にこの物差しで全部を通して確認しておきましょう。',
    order: 835,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'that：後ろが完全な文なら接続詞、不完全なら関係代名詞、名詞が続けば指示語。',
      'who：直前に名詞（先行詞）があれば関係代名詞、なければ疑問詞。',
      '間接疑問は〈疑問詞＋主語＋動詞〉。関係詞節の主格は〈who＋動詞〉。',
      '省略できるのは目的格の関係代名詞と接続詞の that。主格は省略できない。',
      '時・条件の副詞節は現在形、「〜かどうか」の名詞節は will が使える。',
    ],
    sections: [
      {
        heading: '一つの物差しで見分ける',
        figureId: 'lf_kokoeigoext09_335',
        body: `この単元で学んだ形は、次の手順ですべて判別できる。

■ ステップ1　その語の直前を見る
　名詞がある → 関係代名詞の可能性
　名詞がない → 疑問詞（間接疑問）や接続詞

■ ステップ2　その語の直後を見る
　動詞 → 主格の関係代名詞（省略不可）
　主語＋動詞で、どこかが欠けている → 目的格の関係代名詞（省略可）
　主語＋動詞で、欠けがない → 接続詞の that、または間接疑問
　名詞 → whose、または指示語の that

■ 具体例
　Do you know the boy who broke the window?
　→ who の直前に the boy（名詞）→ 関係代名詞。「窓を割った男の子を知っていますか」

　Do you know who broke the window?
　→ who の直前が know（動詞）で名詞がない → 疑問詞・間接疑問。「誰が窓を割ったか知っていますか」

　I know that he is honest.（後ろが完全 → 接続詞）
　This is the book that I read.（read の目的語が欠ける → 関係代名詞）
　I like that book.（後ろが名詞 → 指示語）

★ ポイント：直前と直後の二か所を見る。この二か所以外は見なくてよい。

⚠ 注意：先行詞になれるのは名詞だけである。動詞や前置詞のあとに who が来ていたら、それは疑問詞である。`,
      },
      {
        heading: '単元全体のチェックリスト',
        body: `入試直前に確認したい要点を並べる。

■ 関係代名詞
　□ 主格は省略できない（× a friend lives in Osaka）
　□ 目的格は省略できる（the book I read）
　□ 動詞は先行詞に合わせる（a friend who lives ／ friends who live）
　□ 前置詞は消えない（the house I live in）
　□ that は前置詞の直後とコンマの直後では使えない
　□ 人＋ものが先行詞なら that

■ 接続詞
　□ because と so、though と but を重ねない
　□ because ＋文、because of ＋名詞
　□ 命令文, and ＝ If 〜（肯定）／ 命令文, or ＝ If 〜 not
　□ 時・条件の副詞節は未来でも現在形
　□ unless の中に not を入れない

■ that節・間接疑問
　□ 主節が過去なら節の中も過去（時制の一致）
　□ 不変の真理は現在形、歴史的事実は過去形のまま
　□ 間接疑問は〈疑問詞＋主語＋動詞〉
　□ do / does / did は消し、s や過去形を動詞に戻す
　□ 疑問詞が主語なら語順は変わらない
　□ 文末の記号は主節で決まる

■ 相関接続詞
　□ both A and B は複数
　□ either / neither と not only 〜 but also 〜 は B に合わせる
　□ A と B の形をそろえる

★ ポイント：どの項目も「形をそろえる」「語順を戻す」「重ねない」の三つに分類できる。

⚠ 注意：一つの文に二つ以上の要素が同時に出ることが多い。長い文ほど、上の項目を順に確認する習慣が効いてくる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '次の三つのうち、that の働きが他と異なるものを選びなさい。(a) I know that he is honest. (b) The book that I read was fun. (c) I hear that she is sick.',
        wrongAnswer: '(c)',
        trapExplanation:
          '動詞 know・hear が並んでいるのを見て、意味の似ている (a) と (b) を同じ仲間だと考えてしまう。判断の基準を「前にある語」に置いてしまい、後ろの形を確認していない。',
        correctAnswer: '(b)',
        correctExplanation:
          '(a) と (c) は that の後ろが he is honest / she is sick と完全な文なので接続詞である。(b) は that の後ろが I read で、read の目的語が欠けているので関係代名詞（目的格）。判別は必ず「that の後ろに欠けがあるか」で行う。',
      },
      {
        question:
          'Do you know the boy who broke the window? と Do you know who broke the window? の意味のちがいを説明しなさい。',
        wrongAnswer: '同じ意味である（the boy があるかないかだけのちがい）。',
        trapExplanation:
          'どちらも who broke the window という同じ並びを含んでいるので、同じ内容を言いかえただけだと考えてしまう。who の直前に名詞があるかどうかで働きが変わることに気づいていない。',
        correctAnswer:
          '前者は「窓を割った男の子を知っていますか」（who は関係代名詞で the boy を説明）、後者は「誰が窓を割ったか知っていますか」（who は疑問詞で間接疑問）。',
        correctExplanation:
          'who の直前に先行詞となる名詞 the boy があれば関係代名詞で、know の目的語は the boy 全体になる。名詞がなければ疑問詞で、who broke the window というかたまり全体が know の目的語になる。直前を見るだけで区別できる。',
      },
    ],
  },
];
