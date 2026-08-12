import type { Lesson } from './lesson-types';

// 高校受験 英語「現在完了形と受動態」拡張ユニット（35セッション：koko_eigo_s111〜koko_eigo_s145）
// order は 611〜645。
// 構成：現在完了 継続(5)／完了・結果(5)／経験(5)／現在完了進行形(2)／
//       現在完了と過去形の使い分け(4)／受動態の基本(5)／受動態の時制・疑問文・否定文(4)／
//       by以外の前置詞をとる受動態(3)／SVOO・SVOCの受動態(2)
// 図解は「時間の流れ」を示す numberLine を中心に、全35課中17課に付けてある
// （lesson-figs-koko-eigo-ext04.ts）。継続＝幅、完了＝右端の1点、経験＝点の数、
// 過去形＝今と切れた点、という対比が一目でわかることをねらっている。
export const kokoEigoExt04Lessons: Lesson[] = [
  // ───────────────── 1. 現在完了・継続（s111〜s115） ─────────────────
  {
    id: 'koko_eigo_s111',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 継続①：have/has＋過去分詞で「ずっと〜している」',
    description: '現在完了の形と、継続用法が「過去のある時点から今まで」を表すことをつかむ',
    intro: '「大阪に住んで10年です」を英語にしようとして、lived にするか lives にするか迷ったことはありませんか。日本語では同じ「住んでいる」でも、英語は「今も続いているかどうか」で形を変えます。過去と今をつなぐためだけに用意された形、それが現在完了です。',
    order: 611,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      '現在完了の形は have/has＋過去分詞。主語が3人称単数のときだけ has を使う。',
      '継続用法＝「（過去のある時点から）今までずっと〜している」。時間の「幅」を表す。',
      '過去形は今と切れた1点。He lived in Osaka. は「今はもう住んでいない」ことをにおわせる。',
      "短縮形は I have＝I've／He has＝He's／They have＝They've。He's は He is とまぎらわしいので後ろの語で判断する。",
      '継続用法でよく使う動詞は live・know・be・have・want など、状態を表す動詞。',
    ],
    sections: [
      {
        heading: '現在完了の形をまず固める',
        figureId: 'lf_kokoeigoext04_111',
        body: `現在完了は「have/has ＋ 過去分詞」という2語1セットの形である。この2語はどんな用法でも変わらない。

■ have と has の使い分け
主語が I / you / we / they / 複数名詞 → have
主語が he / she / it / 3人称単数の名詞 → has
例）I have lived in Osaka for ten years.
　　He has lived in Osaka for ten years.
　　My parents have lived in Osaka for ten years.

⚠ 注意：has は「三単現の s」ではなく have の3人称単数形である。has の後ろの過去分詞に s を付けてはいけない。
× He has lives／× He has liveds　○ He has lived

■ 継続用法の意味
継続用法は「過去のある時点に始まり、今もその状態が続いている」ことを表す。日本語では「ずっと〜している」「〜して…になる」と訳す。
例）I have known him for three years.（3年前から今まで知り合いだ）
　　We have been busy since last week.（先週からずっと忙しい）

■ 過去形との決定的な差
He lived in Osaka for ten years.（過去形）は「10年住んでいた」という過去の事実だけを述べ、今は住んでいない可能性が高い。
He has lived in Osaka for ten years.（現在完了）は「今も住んでいる」ことまで含む。

★ ポイント：継続用法は数直線の「矢印の長さ」。左端が始まった時点、右端は必ず「今」に届いている。右端が今に届かない話には現在完了は使えない。`,
      },
      {
        heading: '過去分詞を思い出す',
        body: `現在完了は過去分詞なしには作れない。過去形と過去分詞が同じ動詞と、ちがう動詞を区別しておく。

■ 規則動詞（-ed を付ける）は過去形＝過去分詞
play — played — played／study — studied — studied／stop — stopped — stopped
live — lived — lived／want — wanted — wanted

■ 不規則動詞でも過去形＝過去分詞のもの
have — had — had／make — made — made／buy — bought — bought
teach — taught — taught／find — found — found／keep — kept — kept
leave — left — left／lose — lost — lost／build — built — built

■ 過去形と過去分詞がちがうもの（ここが入試の山）
be — was/were — been　　go — went — gone　　do — did — done
see — saw — seen　　　　eat — ate — eaten　　take — took — taken
write — wrote — written　speak — spoke — spoken　break — broke — broken
know — knew — known　　give — gave — given　　come — came — come
run — ran — run　　　　become — became — become

例）I have seen the movie.（× I have saw は誤り）
　　She has written a letter.（× She has wrote は誤り）

⚠ 注意：come — came — come、run — ran — run、become — became — become は「原形＝過去分詞」。I have come here. の come は原形ではなく過去分詞である。

★ ポイント：現在完了で誤りが出るときは、たいてい過去分詞のところで過去形を書いてしまっている。まず過去分詞の欄を口に出して確かめる習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適切な形に直しなさい。He （ live ） in Osaka since 2016.',
        wrongAnswer: 'lives',
        trapExplanation: '「今も住んでいる」＝現在のことだと考え、三単現の s を付けた現在形にしてしまう。日本語の「住んでいる」に引きずられるのが原因。',
        correctAnswer: 'has lived',
        correctExplanation:
          'since 2016 は「2016年から今まで」という幅を示すので、現在形ではなく現在完了の継続用法を使う。主語 He は3人称単数なので has、その後ろは過去分詞 lived。答えは has lived。現在形 lives は「ふだん住んでいる」という今だけの事実で、2016年からという幅を表せない。',
      },
      {
        question: '「私は3年間ずっと彼を知っています」を英語にしなさい。',
        wrongAnswer: 'I am knowing him for three years.',
        trapExplanation: '「ずっと〜している」という日本語を見て進行形にしてしまう。さらに know は状態動詞なので、そもそも進行形にできない。',
        correctAnswer: 'I have known him for three years.',
        correctExplanation:
          '「ずっと〜している」は進行形ではなく現在完了の継続で表す。know の過去分詞は known なので I have known him for three years. となる。know・live・be・have（持っている）・want・like などの状態動詞は原則として進行形にしないことも合わせて覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s112',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 継続②：for と since の使い分け',
    description: 'for＝期間の長さ、since＝始まった時点、という区別を数直線で理解する',
    intro: '「3年間」と「3年前から」は、日本語ではどちらも同じ長さを指しています。ところが英語では for と since に分かれ、入れかえると即座に誤りになります。この二つは数直線の「長さ」と「点」の関係にそのまま対応していて、絵にすると迷わなくなります。',
    order: 612,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'for ＋ 期間の長さ（three years／a long time／ten minutes／a week）。',
      'since ＋ 始まった時点（2020／last year／this morning／yesterday／then）。',
      'since の後ろには文（主語＋動詞）も置ける。そのときの動詞は過去形にする。',
      'for は数直線の「矢印の長さ」、since は「矢印の左端の点」。',
      '期間をたずねるときは How long 〜? を使い、for か since を含めて答える。',
    ],
    sections: [
      {
        heading: 'for と since は指しているものがちがう',
        figureId: 'lf_kokoeigoext04_112',
        body: `for も since も継続用法とセットで使うが、指しているものが根本的にちがう。

■ for ＋ 期間（どれだけの間）
後ろには「長さ」を表す語句が来る。
例）for three years／for six months／for a week／for ten minutes／for a long time
　　I have studied English for six years.（6年間ずっと英語を勉強している）

■ since ＋ 起点（いつから）
後ろには「時点」を表す語句が来る。
例）since 2020／since last year／since this morning／since yesterday／since then／since I was a child
　　I have studied English since 2020.（2020年からずっと英語を勉強している）

■ 見分けるコツ
その語句が「時計や年表の1点を指すか、長さを指すか」で決める。
・2020／last Sunday／this morning／April → 点 → since
・three years／two hours／a long time → 長さ → for
「3年前から」は日本語では点のように聞こえるが、英語では for three years（長さ）と言うのが自然である。

★ ポイント：同じ内容を for でも since でも言える。2026年の今から見て「2020年から」＝ since 2020 ＝ for six years。数直線で左端を指すか、矢印全体を指すかのちがいにすぎない。`,
      },
      {
        heading: 'since の後ろに文が来る形',
        body: `since は前置詞としてだけでなく、接続詞としても使える。つまり後ろに「主語＋動詞」の文を置ける。

■ since ＋ 主語 ＋ 過去形
例）I have lived here since I came to Japan.（日本に来てからずっとここに住んでいる）
　　We have been good friends since we were in elementary school.
　　He has been sick since he ate that fish.

⚠ 注意：since の後ろの動詞は必ず過去形にする。その動作は「幅の左端で終わった1点」だからである。
× I have lived here since I have come to Japan.
○ I have lived here since I came to Japan.

■ 主節は現在完了、since 節は過去形
この「主節＝現在完了／since 節＝過去形」の組み合わせは入試で頻出する。並べかえ問題でも、since の直後の動詞を過去形にできるかで差がつく。

■ for と since を使わない継続
継続用法は for・since がなくても成り立つ。
例）How long have you known each other?
　　I have wanted this bag for a long time. → for a long time は「長い間」。
　　It has been cold these days.

★ ポイント：期間をたずねる文は How long ＋ have/has ＋ 主語 ＋ 過去分詞 〜? の語順。答えるときは For three years. / Since 2020. のように、たずねられた「長さ」または「点」で答える。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に for か since を入れなさい。We have been friends （　） 2019.',
        wrongAnswer: 'for',
        trapExplanation: '「2019年から友達だ」という日本語の「から」を「〜の間」と取りちがえ、期間だと思って for を選んでしまう。',
        correctAnswer: 'since',
        correctExplanation:
          '2019 は年号、つまり時間の1点なので since を使う。for の後ろに来るのは three years や a long time のような「長さ」。もし for を使うなら for seven years（2019年から2026年まで）のように長さに言いかえる必要がある。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。I have lived in this town since I （ come ） here.',
        wrongAnswer: 'have come',
        trapExplanation: '主節が現在完了なので、since の後ろも現在完了でそろえるべきだと考えてしまう。時制の一致という別のルールと混同するのが原因。',
        correctAnswer: 'came',
        correctExplanation:
          'since の後ろは「継続が始まった過去の1点」を示すので必ず過去形にする。come の過去形は came。正しくは I have lived in this town since I came here. 主節は今まで続く幅（現在完了）、since 節は左端の点（過去形）と役割が分かれている。',
      },
    ],
  },

  {
    id: 'koko_eigo_s113',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 継続③：否定文・疑問文と How long',
    description: '現在完了の否定文・疑問文の作り方と、期間をたずねる How long 〜? を使えるようにする',
    intro: "現在完了の否定文を作るとき、don't を出してしまう人がとても多いのです。しかし現在完了には have/has という助動詞がすでにいるので、do の出番はありません。この一点を押さえるだけで、否定文も疑問文も一気に作れるようになります。",
    order: 613,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      "否定文は have/has の直後に not を置く。have not＝haven't／has not＝hasn't。",
      '疑問文は have/has を主語の前に出す。Have you 〜? / Has he 〜?',
      "答え方は Yes, I have. / No, I haven't.（do・does は使わない）。",
      '期間をたずねるのは How long ＋ have/has ＋ 主語 ＋ 過去分詞 〜?',
      'How long の答えは For 〜. または Since 〜. の形でよい。',
    ],
    sections: [
      {
        heading: '否定文と疑問文は have/has を動かすだけ',
        body: `現在完了の have/has は「持っている」という一般動詞ではなく、助動詞として働いている。だから否定文・疑問文の作り方は can や will と同じ扱いになる。

■ 否定文：have/has ＋ not ＋ 過去分詞
例）I have not seen him for a week.（1週間彼に会っていない）
　　She has not been well since last month.
短縮形：have not → haven't／has not → hasn't
例）I haven't seen him for a week.

⚠ 注意：× I don't have seen him. は誤り。現在完了に do/does を持ちこまない。

■ 疑問文：Have/Has ＋ 主語 ＋ 過去分詞 〜?
例）Have you lived here for a long time?
　　Has he been busy since Monday?

■ 答え方
Yes, I have. / No, I have not.（No, I haven't.）
Yes, he has. / No, he hasn't.
× Yes, I do. / × Yes, I did. は誤り。疑問文で使った語をそのまま返すのが英語の原則である。

★ ポイント：「否定文は have/has のうしろに not」「疑問文は have/has を先頭へ」。この2つだけで、継続・完了・経験のどの用法でも同じように処理できる。`,
      },
      {
        heading: 'How long でたずねる',
        body: `継続用法で最もよく問われるのが「どのくらいの間〜していますか」という質問文である。

■ 語順
How long ＋ have/has ＋ 主語 ＋ 過去分詞 〜?
例）How long have you known Ken?（どのくらいケンを知っていますか）
　　How long has she been in Japan?（彼女はどのくらい日本にいますか）
　　How long have they been married?

⚠ 注意：How long の後ろも疑問文の語順にする。
× How long you have known Ken?　○ How long have you known Ken?

■ 答え方
For five years.（5年間です）
Since 2021.（2021年からです）
For about two months.
文で答えるなら I have known him for five years. のように現在完了で返す。

■ 似た疑問詞との区別
・How long 〜? → 期間（継続用法）
・How many times 〜? → 回数（経験用法）
・When 〜? → 過去の1点をたずねるので現在完了とは使えない（過去形で答える）

例）× When have you come to Japan?
　　○ When did you come to Japan? — I came here in 2021.

★ ポイント：How long は「幅」をたずねる語なので現在完了と相性がよい。逆に When は「今と切れた1点」をたずねる語なので、現在完了とは同じ文に置けない。この対比は後の課でもう一度扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は先週から彼に会っていません」を英語にしなさい。',
        wrongAnswer: "I don't have met him since last week.",
        trapExplanation: "否定文といえば don't、という一般動詞のクセが出てしまう。現在完了の have は助動詞なので do を足す必要がないことを見落としている。",
        correctAnswer: "I have not met him since last week.（I haven't met him since last week.）",
        correctExplanation:
          "現在完了の否定は have/has の直後に not を置くだけでよい。meet の過去分詞は met。短縮形なら haven't met となる。do・does・did は現在完了の文には一切登場しないと覚えておくとよい。",
      },
      {
        question: '下線部をたずねる疑問文にしなさい。She has lived in Nara for eight years.（for eight years が下線部）',
        wrongAnswer: 'How long she has lived in Nara?',
        trapExplanation: '疑問詞を前に付けただけで満足し、その後ろを平叙文のままにしてしまう。疑問詞疑問文でも主語と助動詞の入れかえが必要なことを忘れている。',
        correctAnswer: 'How long has she lived in Nara?',
        correctExplanation:
          '期間をたずねるので How long を文頭に置き、その後ろは has ＋ 主語 ＋ 過去分詞 の疑問文語順にする。答えは For eight years. または Since 2018.（2026年の8年前）。How many times や Where などでも同じく語順の入れかえが必要である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s114',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 継続④：状態動詞と「進行形にしない」ルール',
    description: '継続用法で使いやすい状態動詞を整理し、進行形との使い分けの土台を作る',
    intro: '「ずっと待っている」は have been waiting、「ずっと知っている」は have known。同じ「ずっと」なのに、なぜ片方だけ -ing が付くのでしょう。その分かれ目は、動詞が「動作」を表すか「状態」を表すかにあります。ここを先に整理しておくと、次の現在完了進行形がすんなり入ります。',
    order: 614,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '状態動詞（know・live・be・have・want・like・love・believe・belong）は進行形にしない。',
      '状態動詞の継続は、現在完了（have/has＋過去分詞）だけで「ずっと〜している」を表せる。',
      'have は「持っている」なら状態動詞、「食べる・過ごす」なら動作動詞で進行形にできる。',
      'be動詞の過去分詞は been。I have been busy. のように「ずっと〜だ」を表す。',
      'live は状態にも動作にも近く、have lived と have been living のどちらも使える例外的な動詞。',
    ],
    sections: [
      {
        heading: '状態動詞と動作動詞',
        body: `英語の動詞は、大きく「動作動詞」と「状態動詞」に分けられる。この区別が進行形を使えるかどうかを決める。

■ 動作動詞（動きがあり、始まりと終わりがある）
run／study／play／wait／read／write／rain／work／talk
→ 進行形にできる。I am studying now.

■ 状態動詞（動きがなく、その状態が続いているだけ）
know（知っている）／live（住んでいる）／be（〜である）／have（持っている）／want（ほしい）／like・love（好きだ）／believe（信じている）／belong（属している）／need（必要としている）／understand（理解している）
→ 原則として進行形にしない。
× I am knowing him.　○ I know him.
× I am wanting a new bike.　○ I want a new bike.

■ 継続用法では状態動詞が主役
状態動詞は「ずっと続いている」ことを、現在完了だけで表せる。
例）I have known him since 2019.
　　We have been friends for ten years.
　　She has had that watch for five years.（have の過去分詞は had）
　　He has wanted a dog for a long time.

★ ポイント：状態動詞は「-ing を付けなくても、もともと続いている意味を持っている」と考える。だから have known だけで「ずっと知っている」になる。`,
      },
      {
        heading: '意味によって変わる動詞と be動詞の扱い',
        body: `同じ単語でも、意味によって状態動詞になったり動作動詞になったりするものがある。

■ have
「持っている」＝状態 → 進行形にしない。I have two cats.
「食べる・過ごす」＝動作 → 進行形にできる。We are having lunch now. / They are having a good time.

■ see / look at
see（見える）＝状態 → I can see the mountain.
watch・look at（見る・ながめる）＝動作 → I am watching TV.

■ think
think（〜だと思う）＝状態 → I think he is right.
think about（考えている）＝動作 → I am thinking about my future.

■ be動詞の継続
be の過去分詞は been である。been を使うと「ずっと〜の状態だ」を表せる。
例）I have been busy since Monday.（月曜からずっと忙しい）
　　He has been in the hospital for two weeks.（2週間入院している）
　　It has been cold since last night.

⚠ 注意：been の前の have/has を落とさないこと。× I been busy. は誤り。

■ live は例外
live は状態に近いが動作としても扱えるため、I have lived here for ten years. と I have been living here for ten years. のどちらも正しい。意味の差はほとんどない。

★ ポイント：「進行形にできない動詞は、現在完了だけで継続を表す」。この原則を持っておくと、次の課の現在完了進行形との使い分けで迷わない。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りがあれば直しなさい。She has been having a nice camera since last year.',
        wrongAnswer: '誤りなし（そのままでよい）',
        trapExplanation: 'have been ＋ -ing という現在完了進行形の形だけを見て正しいと判断してしまう。ここでの have が「持っている」という状態動詞であることを見落としている。',
        correctAnswer: 'She has had a nice camera since last year.',
        correctExplanation:
          '「持っている」の意味の have は状態動詞なので進行形にできない。したがって現在完了進行形ではなく、ふつうの現在完了 has had を使う。ただし「食べる」の意味なら We have been having lunch. のように進行形も可能で、意味によって扱いが変わる点に注意する。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。It （ be ） cold since last week.',
        wrongAnswer: 'has being',
        trapExplanation: 'be の変化形をとっさに思い出せず、-ing 形の being を過去分詞だと思いこんでしまう。be — was/were — been の3番目を覚えていないことが原因。',
        correctAnswer: 'has been',
        correctExplanation:
          'be の過去分詞は been。現在完了は have/has ＋ 過去分詞なので has been が正しい。being は現在分詞・動名詞であって過去分詞ではない。be — was/were — been、go — went — gone、do — did — done は書き取りでも狙われるので確実にしておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s115',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 継続⑤：「〜して…年になる」の言いかえ',
    description: '同じ内容を過去形・現在完了・It has been 〜 で言いかえる入試頻出パターンを固める',
    intro: '「祖父が亡くなって5年になります」。この一文は、英語では少なくとも4通りに書けます。入試の書きかえ問題は、まさにこの「同じ時間の幅を、点で言うか長さで言うか」を試しています。数直線を1本引けば、4つの文がすべて同じ絵になることが見えてきます。',
    order: 615,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      'He died five years ago.（過去形・点）＝ He has been dead for five years.（状態の継続）',
      '＝ It has been five years since he died.（It is 〜 since も可）',
      '＝ Five years have passed since he died.（Five years は複数なので have passed）',
      'since の後ろの動詞は必ず過去形にする（he died）。',
      '「〜して…年になる」型の書きかえは、公立入試・私立入試のどちらでも頻出。',
    ],
    sections: [
      {
        heading: '4通りの言いかえを1本の数直線で見る',
        figureId: 'lf_kokoeigoext04_115',
        body: `次の4文はすべて同じ状況を表している。試験ではこの間の書きかえが問われる。

① He died five years ago.（彼は5年前に亡くなった）
② He has been dead for five years.（亡くなって5年になる）
③ It has been five years since he died.
④ Five years have passed since he died.

■ それぞれの言い分
①は「亡くなった」という点だけを述べた過去形。ago があるので現在完了は使えない。
②は dead（死んでいる）という状態が5年続いていると見る。die は一瞬の動作なので × He has died for five years. とは言えない。
③は「彼が亡くなってから5年が経っている」と、時間そのものを主語 It に立てた形。It is five years since he died. も正しい。
④は「5年が過ぎた」と、Five years を主語にした形。Five years は複数扱いなので動詞は have passed。× Five years has passed とはしない。

⚠ 注意：②の落とし穴は動詞選びである。die（死ぬ）は一瞬の動作なので継続にできない。「亡くなっている状態」を表す形容詞 dead を使うのがポイント。同じ理屈で、
× He has left home for a week. → ○ He has been away from home for a week.
× It has begun to rain for two hours. → ○ It has been raining for two hours.

★ ポイント：書きかえのときは「一瞬の動作」か「続く状態」かをまず判定する。一瞬の動作なら ① ③ ④ の形、続く状態なら ② の形が使える。`,
      },
      {
        heading: 'よく出るパターンを覚えてしまう',
        body: `同じ発想の書きかえは、亡くなった話以外にもたくさんある。型で覚えておくと速い。

■ 「〜してから…になる」
He came to Japan three years ago.
＝ He has been in Japan for three years.
＝ It has been three years since he came to Japan.
＝ Three years have passed since he came to Japan.

■ 「最後に〜してから…になる」
I last saw her two years ago.
＝ I have not seen her for two years.
＝ It has been two years since I last saw her.
＝ Two years have passed since I last saw her.

■ 「〜が壊れてから…」
My watch broke a week ago.
＝ My watch has been broken for a week.

■ 「雨が降り出してから…」
It began to rain two hours ago.
＝ It has been raining for two hours.

⚠ 注意：「最後に会ったのは2年前」を現在完了で言いかえるときは否定文になる。「2年間会っていない」と発想を裏返すのがコツで、ここを肯定文のままにすると誤りになる。

★ ポイント：時間の言いかえは「ago ↔ for ↔ since」の三角形。ago は過去形とだけ、for と since は現在完了とだけ組む。この対応表が頭に入っていれば、初見の文でも同じ手順で処理できる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文とほぼ同じ意味になるように書きかえなさい。My grandfather died five years ago. → My grandfather （　　　） for five years.',
        wrongAnswer: 'has died',
        trapExplanation: '「亡くなって5年」という日本語をそのまま die の現在完了にしてしまう。die が「亡くなる」という一瞬の動作で、5年間続けることができない点を見落としている。',
        correctAnswer: 'has been dead',
        correctExplanation:
          '5年間続いているのは「亡くなる動作」ではなく「亡くなっている状態」なので、形容詞 dead を使って has been dead とする。同じ発想で、has been broken（壊れたままだ）、has been away（留守にしている）、has been asleep（眠っている）などが使える。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。Three years （ pass ） since she left Japan.',
        wrongAnswer: 'has passed',
        trapExplanation: 'Three years をひとかたまりの時間と考えて単数扱いし、has を選んでしまう。またこの型を It has been 〜 と混同して has を書くこともある。',
        correctAnswer: 'have passed',
        correctExplanation:
          'この文の主語は Three years という複数名詞なので、動詞は have passed になる。単数扱いになるのは It has been three years since 〜 の形で、主語が It のときである。主語が何かを見てから have/has を決めること。since の後ろが過去形 left になっている点も確認しておく。',
      },
    ],
  },

  // ───────────────── 2. 現在完了・完了／結果（s116〜s120） ─────────────────
  {
    id: 'koko_eigo_s116',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 完了①：just「ちょうど〜したところだ」',
    description: '完了用法の意味と、just の位置・訳し方を身につける',
    intro: '駅のホームで「今、電車が出ちゃった」と言うとき、あなたは過去のことを話しているのに、気持ちは完全に「今」にあります。この「終わったばかりで、今の自分に影響している」感覚を表すのが完了用法です。継続が矢印の長さなら、完了は今のすぐ手前に打たれた1点です。',
    order: 616,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      '完了用法＝「（今）〜し終えたところだ」。動作が終わった時点が今のすぐ手前にある。',
      'just は have/has と過去分詞の間に置く。I have just finished my homework.',
      'just now（たった今）は過去形と使う。I finished it just now.',
      '完了用法でよく使う動詞は finish・arrive・leave・come・eat・read・clean など動作動詞。',
      '訳し方は「ちょうど〜したところだ」「もう〜してしまった」。',
    ],
    sections: [
      {
        heading: '完了用法は「今のすぐ手前で終わった」',
        figureId: 'lf_kokoeigoext04_116',
        body: `完了用法は、動作が終わったばかりで、その結果が今に及んでいることを表す。

■ 基本の形と例
have/has ＋ just ＋ 過去分詞
例）I have just finished my homework.（ちょうど宿題を終えたところだ）
　　The train has just left.（電車はちょうど出たところだ）
　　She has just arrived at the station.
　　We have just eaten lunch.

■ just の位置
just は have/has と過去分詞の間に入れる。
○ I have just washed the dishes.
× I just have washed the dishes.
× I have washed just the dishes.（「皿だけ」という別の意味になってしまう）

■ 過去形との差
The train left.（電車は出た）は、いつ出たかも今どうなのかも言っていない。
The train has just left.（今出たところだ）は「だから今この駅にいない」という現在の状況まで含む。

■ just now に注意
just now は「たった今」という意味だが、今から切り離された過去の一点を指すので過去形と使う。
○ I finished it just now.
× I have finished it just now.

★ ポイント：完了用法は数直線の右端に打たれた1点。左に伸びる矢印（継続）でも、あちこちに散らばる点（経験）でもない。この形のちがいが訳し分けの手がかりになる。`,
      },
      {
        heading: '完了用法で使われる動詞と訳し方',
        body: `完了用法は「終わりのある動作」と相性がよい。状態動詞では完了用法にならない。

■ よく使う動詞
finish（終える）／do（する）／eat（食べる）／read（読む）／write（書く）／clean（そうじする）／wash（洗う）／arrive（着く）／come（来る）／leave（出発する）／get（着く・手に入れる）／buy（買う）

例）I have just written a letter to her.
　　He has just come home.
　　They have just cleaned the classroom.

■ 訳のバリエーション
・「ちょうど〜したところだ」…just があるとき
・「もう〜してしまった」…already があるとき
・「まだ〜していない」…否定文＋yet のとき
どれも「今の時点でその動作が終わっているかどうか」を述べている点は共通している。

■ 継続用法との見分け
文中に for・since があれば継続、just・already・yet があれば完了と判断してよい。
例）I have read the book for two hours.（× この形は不自然。継続なら現在完了進行形 I have been reading the book for two hours.）
　　I have just read the book.（完了：読み終えたところだ）

⚠ 注意：read の過去分詞は read（発音はレッド）。形が原形と同じなので、have read と書けているか確認する。同じ型に cut — cut — cut、put — put — put、hurt — hurt — hurt がある。

★ ポイント：完了用法は「終わったかどうか」を今の時点で報告している文。だから「いつ終わったか」を細かく言う語（two days ago など）とは共存できない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はちょうど宿題を終えたところです」を英語にしなさい。',
        wrongAnswer: 'I just have finished my homework.',
        trapExplanation: '日本語の「ちょうど」を文の前のほうに置きたくなり、have の前に just を出してしまう。副詞の位置は日本語の語順とは対応しない。',
        correctAnswer: 'I have just finished my homework.',
        correctExplanation:
          'just・already・never・ever といった副詞は have/has と過去分詞の間に入れるのが原則である。したがって have just finished の順になる。yet だけは例外で、文末に置く（I have not finished my homework yet.）。',
      },
      {
        question: '誤りがあれば直しなさい。The train has just left the station five minutes ago.',
        wrongAnswer: '誤りなし（そのままでよい）',
        trapExplanation: '「ちょうど5分前に出た」という日本語が自然に感じられるため、just と ago を同じ文に入れても違和感を持たない。しかし ago は今から切り離された過去の一点を指す語である。',
        correctAnswer: 'The train left the station five minutes ago.（または The train has just left the station.）',
        correctExplanation:
          '現在完了は右端が必ず「今」に届く表現なので、ago・yesterday・last week のように過去の一点を指定する語とは同じ文に置けない。ago を残すなら過去形 left に、現在完了を残すなら ago を消す。この組み合わせは入試の誤文訂正で最頻出である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s117',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 完了②：already と yet の位置と意味',
    description: 'already（もう）と yet（まだ・もう）の使い分けと、置く位置を正確にする',
    intro: '「もう食べた？」「まだ食べてない」。この日常会話をそのまま英語にすると、already と yet が登場します。ところが already は文の真ん中、yet は文の最後と、置く場所がまるでちがいます。位置を間違えると減点されるので、意味と場所をセットで覚えてしまいましょう。',
    order: 617,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'already（もう・すでに）は肯定文で使い、have/has と過去分詞の間に置く。',
      'yet は否定文で「まだ」、疑問文で「もう」の意味になり、文末に置く。',
      'I have not finished it yet.（まだ終えていない）／Have you finished it yet?（もう終えましたか）',
      '疑問文に already を使うと「もう（そんなに早く）〜したの」という驚きを表す。',
      'yet を肯定文に置いて「もう〜した」とは言わない。',
    ],
    sections: [
      {
        heading: 'already と yet の役割分担',
        figureId: 'lf_kokoeigoext04_117',
        body: `完了用法では、already と yet が対になって使われる。

■ already：肯定文で「もう・すでに」
位置は have/has と過去分詞の間。
例）I have already read that book.（その本はもう読んだ）
　　He has already gone home.
　　We have already finished lunch.

■ yet：否定文で「まだ（〜ない）」／疑問文で「もう（〜しましたか）」
位置は文末。
例）I have not finished my homework yet.（宿題をまだ終えていない）
　　She hasn't come yet.（彼女はまだ来ていない）
　　Have you eaten breakfast yet?（もう朝食を食べましたか）
　　Has the bus arrived yet?

■ 位置をまとめる
already → have/has の直後（× I have read already that book. は不自然）
yet → 文の最後（× I have not yet finished it. は書き言葉では可だが、中学では文末が基本）

■ 答え方
Have you finished it yet?
— Yes, I have. I have already finished it.
— No, I haven't. I haven't finished it yet.（Not yet. でもよい）

★ ポイント：数直線で言えば、already は「今より前にすでに完了の点が打たれている」、yet は「今の時点でまだ点が打てていない」。同じ完了用法でも、点があるかないかで語を選ぶ。`,
      },
      {
        heading: '疑問文の already と、まぎらわしい語',
        body: `already は原則として肯定文で使うが、疑問文に置くと特別な意味になる。

■ 疑問文の already ＝ 驚き
Have you already finished your homework?
（え、もう宿題終わったの？）
「そんなに早く終わったのか」という驚きが込められる。ふつうに「もう終わった？」とたずねるだけなら yet を使う。

■ still（まだ〜している）との区別
still は「まだ続いている」で、否定文では have/has の前に置く。
例）He is still sleeping.（まだ眠っている）
　　He still hasn't finished it.（彼はまだそれを終えていない＝いらだちを含む）
　　He hasn't finished it yet.（まだ終えていない＝客観的）

■ 肯定文の yet は「まだ」ではない
yet を肯定文で使って「もう〜した」とは言わない。
× I have yet finished it.
○ I have already finished it.

⚠ 注意：already は l が2つ、そして l の後ろの e に注意。× allready／× alredy は綴りの誤り。同じく yet は3文字だけなので、疑問文で yes と書きまちがえないこと。

■ 語順の練習
（　）内を並べかえる問題では、already は have/has の直後、yet は文末という原則がそのまま答えになる。
例）(already / I / seen / have / the movie) → I have already seen the movie.
　　(yet / has / not / he / come) → He has not come yet.

★ ポイント：already と yet はどちらも「完了しているか」を問う語。肯定なら already、否定・疑問なら yet、と機械的に振り分けてよい。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に already か yet を入れなさい。Have you cleaned your room （　）?',
        wrongAnswer: 'already',
        trapExplanation: '「もう部屋をそうじした？」という日本語の「もう」を already と直訳してしまう。already は肯定文用で、疑問文に置くと驚きの意味になり、ふつうの質問にはならない。',
        correctAnswer: 'yet',
        correctExplanation:
          '疑問文で「もう〜しましたか」とたずねるときは文末に yet を置く。Have you cleaned your room yet? が正解。already を入れると「え、もうそうじしたの？」という驚きの文になり、単純な質問としては不自然である。',
      },
      {
        question: '正しい語順に並べかえなさい。( already / has / the letter / she / written )',
        wrongAnswer: 'She already has written the letter.',
        trapExplanation: '日本語の「彼女はもう手紙を書いた」の語順につられて、already を has の前に出してしまう。副詞の位置は日本語と対応しないことを忘れている。',
        correctAnswer: 'She has already written the letter.',
        correctExplanation:
          'already は have/has と過去分詞の間に置くのが原則なので has already written となる。write の過去分詞は written（wrote は過去形）。同じ位置に入る副詞に just・never・ever・often があり、yet だけが文末に来ることも合わせて確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s118',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 完了③：否定文・疑問文と Not yet. の答え方',
    description: '完了用法の否定文・疑問文を作り、会話文でよく出る短い応答を身につける',
    intro: '英語の会話文問題では、「Have you 〜 yet?」に対する短い返事がそのまま設問になります。Yes, I have. のほかに Not yet. という便利な返事もあり、これを知らないと空所補充で手が止まります。形を作れるだけでなく、返事まで使えるようにしておきましょう。',
    order: 618,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '完了用法の否定文は have/has not ＋ 過去分詞 ＋ yet の形になることが多い。',
      '疑問文は Have/Has ＋ 主語 ＋ 過去分詞 ＋ yet? の語順。',
      "答え方は Yes, I have. / No, I haven't. / Not yet.（まだです）。",
      'Not yet. は I have not 〜 yet. の省略で、会話文の空所補充で頻出。',
      '「もう〜した？」に「うん、さっき」と答えるときは過去形になる（Yes, I did it an hour ago.）。',
    ],
    sections: [
      {
        heading: '否定文・疑問文の作り方をそろえる',
        body: `完了用法の否定文・疑問文も、継続用法と同じく have/has を動かすだけでよい。ちがうのは yet が付くことである。

■ 否定文
have/has ＋ not ＋ 過去分詞 ＋ yet
例）I have not done my homework yet.（まだ宿題をしていない）
　　The bus has not come yet.
　　They haven't decided yet.

■ 疑問文
Have/Has ＋ 主語 ＋ 過去分詞 ＋ yet?
例）Have you finished your report yet?
　　Has he called you yet?
　　Have they left yet?

■ 答え方の型
Yes, I have.（はい、終わりました）
No, I haven't.（いいえ、まだです）
Not yet.（まだです）※ I have not finished it yet. の省略
Yes, I have already finished it.
No, I haven't finished it yet.

⚠ 注意：× Yes, I did. / × No, I don't. は誤り。疑問文の先頭に出ている語（have/has）をそのまま返す。

★ ポイント：Not yet. は会話文の空所補充で最頻出の応答である。「もう〜した？」に対する「まだ」を2語で言えるようにしておく。`,
      },
      {
        heading: '会話文でのやりとりを型で覚える',
        body: `入試の会話文では、次のようなやりとりがそのまま出題される。

■ 典型パターン①
A: Have you finished your homework yet?
B: No, not yet. I have a lot of things to do.
A: You should hurry.

■ 典型パターン②
A: Has your brother come home yet?
B: Yes, he has. He came home an hour ago.
（「もう帰ってきた？」に「うん」と答えたあと、いつ帰ったかを言うときは過去形 came になる。ここで has come を続けると an hour ago と衝突する）

■ 典型パターン③
A: Have you ever been to Kyoto?
B: Yes, I have. I have been there twice.
（これは経験用法。次の課で扱う）

■ 空所補充での狙われ方
・Have you 〜 yet? の yet を答えさせる
・Not yet. を答えさせる
・No, I haven't. の haven't を答えさせる
・答えの中の過去形（came・went・did）を答えさせる

⚠ 注意：「もう終わった？」「うん、2時間前に」の後半は過去形になる。現在完了は「いつ」を言わない形なので、時刻や ago を足したくなったら過去形に切りかえる。

★ ポイント：会話文は「たずねる文＝現在完了／時をくわしく言う文＝過去形」という役割分担で進むことが多い。この流れを知っていると、空所に入る動詞の形を選びやすくなる。`,
      },
    ],
    trapExamples: [
      {
        question: '対話が成り立つように答えの文を完成させなさい。A: Have you washed the dishes yet?　B: No, I （　　　）.',
        wrongAnswer: "No, I didn't.",
        trapExplanation: "「洗ってない」という過去の否定だと感じて didn't を使ってしまう。疑問文の先頭にある語をそのまま返すという原則を忘れている。",
        correctAnswer: "No, I haven't.（または Not yet.）",
        correctExplanation:
          "Have you 〜? で始まる疑問文には have/haven't で答える。No, I haven't. が正解で、Not yet.（まだです）も自然な応答である。Did you wash 〜? とたずねられたときだけ No, I didn't. になる。文頭の助動詞を見て答えを決めること。",
      },
      {
        question: '誤りがあれば直しなさい。A: Has Ken come home yet?　B: Yes, he has come home thirty minutes ago.',
        wrongAnswer: '誤りなし（そのままでよい）',
        trapExplanation: '前の文が現在完了なので、答えも現在完了でそろえるべきだと考えてしまう。しかし答えの文には thirty minutes ago という過去の一点が入っている。',
        correctAnswer: 'Yes, he has. He came home thirty minutes ago.',
        correctExplanation:
          'ago は現在完了と共存できないので、時刻を言う文は過去形 came にする。返事の Yes, he has. までは現在完了、そのあと「いつ帰ったか」を足すときに過去形へ切りかえるのが自然な流れである。会話文問題ではこの切りかえが繰り返し問われる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s119',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 結果①：have been to と have gone to',
    description: '「行ったことがある」と「行ってしまった」を、今どこにいるかで区別する',
    intro: '「彼はカナダに行っています」。この日本語、本人は今カナダにいるのでしょうか、それとも帰ってきて思い出を語っているのでしょうか。英語は been と gone を使い分けて、この二つをはっきり分けます。ちがいは「今ここにいるかどうか」、たった一点です。',
    order: 619,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'have been to 〜＝「〜へ行ったことがある」（経験・今はここにいる）。',
      'have gone to 〜＝「〜へ行ってしまった」（結果・今ここにいない）。',
      'have been in 〜＝「〜にずっといる」（継続）。to と in で意味が変わる。',
      'I have gone to 〜 とは原則言わない（自分がここにいないことになるため）。',
      'have been to には「〜へ行ってきたところだ」（完了）の意味もある。',
    ],
    sections: [
      {
        heading: 'been と gone のちがいは「今どこにいるか」',
        figureId: 'lf_kokoeigoext04_119',
        body: `be動詞の過去分詞 been と、go の過去分詞 gone は、どちらも「行く」に関係するが意味が正反対になる。

■ have been to 〜（行ったことがある）
行って、そして帰ってきている。だから話し手は今ここにいる。
例）He has been to Canada.（彼はカナダへ行ったことがある）
　　I have been to Tokyo three times.
　　Have you ever been to Hokkaido?

■ have gone to 〜（行ってしまった）
行ったきりで、今ここにはいない。
例）He has gone to Canada.（彼はカナダへ行ってしまった＝今ここにいない）
　　She has gone to the library.（図書館へ行っていて、今この部屋にはいない）

■ 主語による制限
主語が I や we のときは have gone to をふつう使わない。自分がここにいないと言うことになり、話している事実と矛盾するからである。
× I have gone to Canada.
○ I have been to Canada.

■ have been in / at 〜（ずっといる）
to ではなく in や at を使うと「その場所にずっといる」という継続になる。
例）He has been in Canada for two years.（2年間カナダにいる）
　　I have been at home all day.

★ ポイント：been to は「行って帰ってきた」＝経験、gone to は「行ってそのまま」＝結果、been in は「そこにいる」＝継続。前置詞まで含めて3つセットで覚える。`,
      },
      {
        heading: '結果用法とは何か',
        body: `have gone to のように「過去に起きたことの結果が今も残っている」用法を、結果用法と呼ぶ。完了用法と近い仲間である。

■ 代表的な結果用法
I have lost my key.（かぎをなくした＝今も見つかっていない）
He has gone to America.（アメリカへ行った＝今ここにいない）
She has become a doctor.（医者になった＝今も医者である）
The bus has already left.（バスは出てしまった＝今ここにない）
It has stopped raining.（雨がやんだ＝今降っていない）

■ 過去形との差がはっきり出る
I lost my key yesterday.（昨日なくした。今見つかったかどうかは不明）
I have lost my key.（なくして、今も手元にない）
この差が読解問題の設問になることがある。「今どうなのか」を問われたら現在完了の文を探す。

■ 完了用法と結果用法の関係
完了用法（just / already / yet）は「終わったか」に注目し、結果用法は「終わった結果が今どうか」に注目する。両者はほとんど同じ文で、見る角度がちがうだけなので、区別に神経質になる必要はない。

⚠ 注意：go の変化は go — went — gone。過去形 went と過去分詞 gone を取りちがえると、× He has went to Canada. という誤りになる。

★ ポイント：結果用法は「だから今こうなっている」と補って訳すと意味がはっきりする。He has gone to Canada.＝「カナダへ行った、だから今ここにいない」。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に been か gone を入れなさい。I have （　） to Kyoto twice.',
        wrongAnswer: 'gone',
        trapExplanation: '「行ったことがある」の「行く」から go を思い出し、その過去分詞 gone を入れてしまう。been が be動詞の過去分詞なので「行く」と結びつかないと感じるのが原因。',
        correctAnswer: 'been',
        correctExplanation:
          '「2回行ったことがある」は経験なので have been to を使う。しかも主語が I なので、have gone to（行ってしまって今ここにいない）とは言えない。I have been to Kyoto twice. が正解。twice（2回）という回数の語も経験用法の目印になる。',
      },
      {
        question: '日本語に直しなさい。Ken has gone to the hospital.',
        wrongAnswer: 'ケンは病院へ行ったことがある。',
        trapExplanation: 'have＋過去分詞を見ると反射的に「〜したことがある」と訳してしまう。been と gone の差を意識していないため、経験用法だと決めつけている。',
        correctAnswer: 'ケンは病院へ行ってしまった（今ここにいない）。',
        correctExplanation:
          'gone を使うのは結果用法で、「行ってしまって今ここにいない」ことを表す。「行ったことがある」なら Ken has been to the hospital. となる。訳し分けの問題では、been か gone かをまず見て、それから訳を決めるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s120',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 結果②：lose・leave・become と「今の状態」',
    description: '結果用法でよく使われる動詞を集め、過去形との訳し分けを練習する',
    intro: '「さいふをなくした」と言われたら、あなたはまず「今も見つかっていないのか」を気にするはずです。英語の現在完了は、まさにその「今どうなっているか」まで込みで伝える形です。逆に過去形で言われたら、今のことは何も保証されていません。',
    order: 620,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '結果用法でよく使う動詞：lose・leave・go・come・become・break・stop・finish・grow。',
      'I have lost my watch.＝なくして今も手元にない。I lost my watch.＝なくした事実だけ。',
      'leave の変化は leave — left — left。have left は「置き忘れてきた」の意味でよく出る。',
      '結果用法は「だから今〜だ」と補って訳すと自然になる。',
      '「今どうなのか」を問う設問では、現在完了の文が根拠になる。',
    ],
    sections: [
      {
        heading: '結果用法でよく使う動詞',
        figureId: 'lf_kokoeigoext04_120',
        body: `結果用法は「過去に起きた出来事の結果が、今も残っている」ことを表す。次の動詞がよく使われる。

■ lose（なくす）— lost — lost
I have lost my umbrella.（かさをなくして、今も持っていない）

■ leave（置き忘れる・出発する）— left — left
I have left my textbook at home.（教科書を家に忘れてきた＝今手元にない）
The train has already left.（電車はもう出てしまった）

■ become（〜になる）— became — become
He has become a teacher.（先生になって、今も先生だ）
It has become warm.（暖かくなった＝今暖かい）

■ break（こわす・こわれる）— broke — broken
I have broken my glasses.（めがねをこわして、今使えない）

■ stop（やむ・やめる）
It has stopped snowing.（雪がやんで、今降っていない）

■ grow（成長する）— grew — grown
She has grown tall.（背が伸びて、今は高い）

★ ポイント：どれも「〜した、だから今〜だ」という二段構えで訳せる。訳すときにこの「だから今」を心の中で足すと、過去形との差がはっきりする。`,
      },
      {
        heading: '過去形との訳し分けと入試での問われ方',
        body: `結果用法は、過去形と並べて出題されることが多い。ちがいを言葉にできるようにしておく。

■ 対比の練習
① I lost my key yesterday.
　→ 昨日なくした。その後見つかったかもしれないし、見つかっていないかもしれない。
② I have lost my key.
　→ なくして、今も見つかっていない。だから今困っている。

① He went to Osaka last week.
　→ 先週大阪へ行った。今どこにいるかは不明。
② He has gone to Osaka.
　→ 大阪へ行ってしまって、今ここにいない。

① The bus left five minutes ago.
　→ 5分前に出発した（過去の事実）。
② The bus has already left.
　→ もう出てしまった（だから今このバス停にはいない）。

■ 入試での問われ方
・和訳問題で「今どうなっているか」まで書けているかが採点対象になる。
・内容一致問題で「彼は今どこにいるか」が問われ、has gone to が根拠になる。
・書きかえ問題で He is not here now. He went to Tokyo. → He has gone to Tokyo. のようにまとめさせる。

⚠ 注意：結果用法にも ago・yesterday・last week は付けられない。付けたくなったら過去形にする。この原則はどの用法でも同じである。

★ ポイント：現在完了は「過去の話をしながら、今のことを伝える形」。だから訳すときは必ず「今」の情報が答えに残るようにする。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に直しなさい。I have left my dictionary at school.',
        wrongAnswer: '私は学校を出て辞書のところへ行った。',
        trapExplanation: 'leave を「出発する・去る」の意味だけで覚えていると、at school の扱いに困って苦しい訳を作ってしまう。leave には「置き忘れる」の意味があることを知らないのが原因。',
        correctAnswer: '私は辞書を学校に置き忘れてきた（だから今手元にない）。',
        correctExplanation:
          'leave A at B で「AをBに置いてくる・置き忘れる」の意味になる。現在完了なので「今も手元にない」という結果まで含む。leave — left — left の変化と、この2つの意味（出発する／置き忘れる）を両方覚えておくこと。',
      },
      {
        question: '次の2文を1文にまとめなさい。Tom is not here now. He went to Nagoya.',
        wrongAnswer: 'Tom has been to Nagoya.',
        trapExplanation: '現在完了にすることまでは思いついたが、「行ったことがある」の have been to を選んでしまう。been to だと帰ってきていることになり、is not here now と矛盾する。',
        correctAnswer: 'Tom has gone to Nagoya.',
        correctExplanation:
          '「今ここにいない」＋「名古屋へ行った」を1文にすると、結果用法の has gone to になる。has been to は「行ったことがある（今はここにいる）」なので、この文脈では使えない。been と gone の使い分けは、今どこにいるかを手がかりに決める。',
      },
    ],
  },

  // ───────────────── 3. 現在完了・経験（s121〜s125） ─────────────────
  {
    id: 'koko_eigo_s121',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 経験①：「〜したことがある」の形',
    description: '経験用法の意味と、いつのことかを問題にしない性質をつかむ',
    intro: '「富士山に登ったことある？」と聞かれて、あなたは何年の何月に登ったかまで答えるでしょうか。ふつうは「あるよ、2回ね」で十分です。経験用法は、いつのことかをぼかしたまま「今までに何回あったか」だけを伝える形なのです。',
    order: 621,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      '経験用法＝「今までに〜したことがある」。過去から今までの間に何回あったかを表す。',
      '目印になる語は ever・never・once・twice・〜 times・before。',
      'いつのことかは問題にしないので、yesterday や last year とは共存できない。',
      '「〜へ行ったことがある」は have been to 〜（have gone to ではない）。',
      'before（以前に）は文末に置く。I have seen him before.',
    ],
    sections: [
      {
        heading: '経験用法は「点の数」を数えている',
        figureId: 'lf_kokoeigoext04_121',
        body: `経験用法は、生まれてから今までのどこかで、その動作が起きたことがあるかを述べる。

■ 基本の形
have/has ＋ 過去分詞（＋ 回数を表す語）
例）I have visited Kyoto twice.（京都を2回訪れたことがある）
　　He has read this book before.（彼は以前この本を読んだことがある）
　　She has climbed Mt. Fuji.（彼女は富士山に登ったことがある）
　　We have seen a panda at the zoo.

■ いつのことかは言わない
経験用法は「回数」には関心があるが「日付」には関心がない。だから、
× I have visited Kyoto last year.
○ I visited Kyoto last year.（過去形）
○ I have visited Kyoto twice.

■ before の使い方
before（以前に）は経験用法の目印で、文末に置く。
例）I have met her before.（以前に会ったことがある）
　　Have you played this game before?

■ 3用法の位置づけ
継続＝矢印の長さ（for / since）
完了・結果＝今のすぐ手前の1点（just / already / yet）
経験＝過去に散らばる点の数（ever / never / 〜 times / before）
形はどれも have/has ＋ 過去分詞で同じなので、いっしょに使われている語で判断する。

★ ポイント：経験用法かどうかは「回数を数えられるか」で見分けられる。「2回」「1度も」と言えるなら経験用法である。`,
      },
      {
        heading: '経験用法で使う動詞と訳し方',
        body: `経験用法は「何度も起こりうる動作」と相性がよい。一度きりしか起こらない出来事とは合わない。

■ よく使う動詞
visit（訪れる）／see（見る・会う）／meet（会う）／eat（食べる）／read（読む）／hear（聞く）／play（する）／climb（登る）／try（試す）／be to 〜（行く）

例）I have never eaten natto.
　　Have you ever heard this song?
　　He has tried Japanese food many times.

■ 一度きりの出来事には使いにくい
× I have been born in Osaka.（生まれるのは1回だけなので経験にならない）
○ I was born in Osaka.
× He has died twice. のような文は成り立たない。

■ 訳し方の型
肯定文：「〜したことがある」
否定文：「一度も〜したことがない」
疑問文：「今までに〜したことがありますか」

■ 現在完了の3用法の訳し分け練習
I have lived here for ten years.（継続）→ 10年間ここに住んでいる
I have just cleaned my room.（完了）→ ちょうど部屋をそうじしたところだ
I have cleaned this room three times.（経験）→ この部屋を3回そうじしたことがある
同じ have cleaned でも、いっしょにある語で訳が変わることを確認する。

★ ポイント：訳し分けの手がかりは副詞句。for / since → 継続、just / already / yet → 完了、ever / never / 回数 / before → 経験。この対応表を暗記しておくと読解が速くなる。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りがあれば直しなさい。I have visited Nara last summer.',
        wrongAnswer: '誤りなし（そのままでよい）',
        trapExplanation: '「奈良を訪れたことがある」と「去年の夏に」を両方伝えたくなり、経験用法に過去の一点を足してしまう。日本語では自然に言えるので違和感が生じにくい。',
        correctAnswer: 'I visited Nara last summer.',
        correctExplanation:
          '経験用法はいつのことかを言わない形なので、last summer・yesterday・in 2020 などの過去の一点とは共存できない。日付を言いたいなら過去形にする。逆に日付を消すなら I have visited Nara. または I have visited Nara twice. とする。',
      },
      {
        question: '「私は東京へ行ったことが3回あります」を英語にしなさい。',
        wrongAnswer: 'I have gone to Tokyo three times.',
        trapExplanation: '「行った」から go を選び、その過去分詞 gone を使ってしまう。gone を使うと「行ってしまって今ここにいない」という意味になり、話している本人には使えない。',
        correctAnswer: 'I have been to Tokyo three times.',
        correctExplanation:
          '「〜へ行ったことがある」という経験は have been to 〜 で表す。主語が I なので have gone to はそもそも使えない。回数は three times を文末に置く。1回は once、2回は twice、3回以上は 〜 times を使う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s122',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 経験②：never と ever の使い分け',
    description: 'never（一度も〜ない）と ever（今までに）の意味・位置・答え方を整理する',
    intro: '「一度も食べたことがない」を英語にするとき、not を使うか never を使うかで迷いませんか。実は never は1語で「一度もない」を表すので、not はいりません。うっかり両方入れると二重否定になってしまいます。ever とセットで、位置まで固めましょう。',
    order: 622,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'never＝「一度も〜ない」。1語で否定を表すので not は不要。',
      'ever＝「今までに」。主に疑問文で使い、have/has と過去分詞の間に置く。',
      'never も ever も have/has と過去分詞の間に置く。',
      'Have you ever 〜? の答えは Yes, I have. / No, I never have. / No, I have never 〜.',
      'never の代わりに not 〜 before も使える。I have not seen him before.',
    ],
    sections: [
      {
        heading: 'never と ever の位置と意味',
        figureId: 'lf_kokoeigoext04_122',
        body: `経験用法の否定と疑問は、never と ever が担当する。

■ never（一度も〜ない）
位置：have/has と過去分詞の間。
例）I have never seen a real elephant.（本物のゾウを一度も見たことがない）
　　He has never been to a foreign country.
　　She has never eaten sushi.

⚠ 注意：never はそれ自体が否定語なので not を重ねない。
× I have not never seen it.
× I have never not seen it.
○ I have never seen it.

■ ever（今までに）
位置：have/has と過去分詞の間。主に疑問文で使う。
例）Have you ever been to Okinawa?（今までに沖縄へ行ったことがありますか）
　　Has he ever played the guitar?
肯定文で ever を単独に使うことはふつうしない（× I have ever seen it.）。

■ 答え方
Have you ever been to Okinawa?
— Yes, I have. I have been there twice.
— No, I have not. / No, I never have. / No, I have never been there.

■ 数直線で見ると
経験用法は「過去に打たれた点の数」を数えている。never は点が0個、ever は「点が1つでもあるか」をたずねている、と考えるとわかりやすい。

★ ポイント：never も ever も置く場所は同じ（have/has の直後）。ちがうのは never が否定、ever が疑問という役割だけである。`,
      },
      {
        heading: 'まぎらわしい表現との区別',
        body: `never・ever のまわりには、まぎらわしい表現がいくつかある。

■ never と not 〜 before
I have never met him. ＝ I have not met him before.
どちらも「一度も会ったことがない」。never を使うほうが強い。

■ ever を含む最上級の書きかえ（難関私立で頻出）
This is the most interesting book I have ever read.
（これは私が今までに読んだ中でいちばんおもしろい本だ）
This is the best movie I have ever seen.
This is the first time I have ever visited this town.
ever は「今までに」という意味を最上級の後ろの節に添える働きをする。

■ never を使った書きかえ
I have never seen such a beautiful sunset.
＝ This is the most beautiful sunset I have ever seen.
＝ This is the first time I have seen such a beautiful sunset.
3つとも同じ内容で、入試の書きかえで循環して出題される。

■ ever を使わない never の位置
never は否定文以外にも、頻度を表す副詞として一般動詞の前・be動詞の後ろに置ける。
例）He never comes late.（彼は決して遅刻しない）
　　She is never angry.

⚠ 注意：never の綴りは n-e-v-e-r。ever に n を付けた形だと考えると覚えやすい。

★ ポイント：「今までに読んだ中でいちばん」という日本語を見たら、the 最上級 ＋ 名詞 ＋ I have ever 過去分詞 の形を思い出す。この型は英作文でそのまま使える。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は一度も海外へ行ったことがありません」を英語にしなさい。',
        wrongAnswer: "I haven't never been abroad.",
        trapExplanation: '「〜ない」を表すために not を入れ、さらに「一度も」を never で足してしまう。日本語では「一度も行っていない」と否定語が重なるので、そのまま英語にしてしまう。',
        correctAnswer: 'I have never been abroad.',
        correctExplanation:
          'never は1語で「一度も〜ない」という否定を表すので、not を重ねてはいけない。have never been abroad が正しい。not を使いたいなら I have not been abroad before. のように before を添える形にする。「海外へ」は abroad 1語で表し、to abroad とはしない点も確認しておく。',
      },
      {
        question: '正しい語順に並べかえなさい。( ever / you / been / have / to Hokkaido )?',
        wrongAnswer: 'Have you been ever to Hokkaido?',
        trapExplanation: 'ever を「今までに」という副詞と考え、過去分詞の後ろに置いてしまう。just・already と同じ位置に入るという原則を当てはめていない。',
        correctAnswer: 'Have you ever been to Hokkaido?',
        correctExplanation:
          'ever・never・just・already は have/has と過去分詞の間に置く。したがって Have you ever been to Hokkaido? が正しい。文末に置くのは yet と before だけだと整理しておくと、並べかえで迷わない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s123',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 経験③：回数の言い方と How many times',
    description: 'once・twice・〜 times を使い分け、回数をたずねる疑問文を作れるようにする',
    intro: '「1回」「2回」「3回」。日本語ではどれも同じ「回」ですが、英語は最初の2つだけ特別な単語を持っています。once と twice です。ここを知らないと one time、two times と書いてしまい、不自然な英語になります。回数のたずね方まで一気に固めましょう。',
    order: 623,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '1回＝once、2回＝twice、3回以上＝three times / four times のように times を使う。',
      '回数を表す語句は文末に置く。I have seen it three times.',
      '回数をたずねるのは How many times ＋ have/has ＋ 主語 ＋ 過去分詞 〜?',
      'How often 〜? もほぼ同じ意味で使える。',
      'many times（何度も）／several times（数回）／a few times（2〜3回）も覚える。',
    ],
    sections: [
      {
        heading: '回数の言い方',
        figureId: 'lf_kokoeigoext04_123',
        body: `経験用法では、回数を表す語句がほぼ必ず登場する。

■ 基本の数え方
1回 → once
2回 → twice
3回 → three times
4回 → four times
5回 → five times
※ one time / two times も文法的には可能だが、英語では once / twice が自然で、入試でもこちらが答えになる。

■ 位置は文末
例）I have been to Tokyo once.
　　She has read this book twice.
　　We have visited that museum three times.

■ 回数を表すその他の語句
many times（何度も）／several times（数回）／a few times（2〜3回）／a lot（たくさん）／only once（1度だけ）
例）He has been late many times.
　　I have talked with her only once.

■ 数直線で見ると
経験用法は過去に打たれた点の数を数えている。three times なら点が3つ、never なら点が0個ということになる。いつ打たれた点かは問われない。

★ ポイント：once と twice は「回数」以外にも使う。once upon a time（むかしむかし）、once a week（週に1回）、twice a month（月に2回）などの表現も入試で問われる。`,
      },
      {
        heading: '回数をたずねる疑問文',
        body: `「何回〜したことがありますか」は How many times で始める。

■ 語順
How many times ＋ have/has ＋ 主語 ＋ 過去分詞 〜?
例）How many times have you been to Kyoto?（何回京都へ行ったことがありますか）
　　How many times has he seen that movie?

■ 答え方
Three times.（3回です）
Once.（1回です）
Never.（一度もありません）
文で答えるなら I have been there three times. のように現在完了で返す。

■ How often との関係
How often have you visited Nara? も「何回訪れたことがありますか」の意味で使える。ただし How often は現在形と使うと「どのくらいの頻度で」という意味になる。
例）How often do you go to the library? — Twice a week.

■ 他の疑問詞との整理
How long 〜? → 期間（継続用法）→ For / Since で答える
How many times 〜? → 回数（経験用法）→ Once / Twice / 〜 times で答える
When 〜? → 過去の一点 → 過去形で答える（現在完了とは使えない）

⚠ 注意：How many times の後ろも疑問文の語順にする。
× How many times you have been to Kyoto?
○ How many times have you been to Kyoto?

★ ポイント：疑問詞ごとに「どの用法とセットか」を覚えておくと、長文の設問でも答えの形をすぐ決められる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はその映画を2回見たことがあります」を英語にしなさい。',
        wrongAnswer: 'I have seen the movie two times.',
        trapExplanation: '3回が three times なのだから2回は two times だろうと考えて、規則的に当てはめてしまう。1回と2回だけ専用の単語があることを知らないのが原因。',
        correctAnswer: 'I have seen the movie twice.',
        correctExplanation:
          '英語では1回を once、2回を twice という専用の語で表し、3回以上から three times のように times を使う。two times は通じるが不自然で、入試では twice が正答になる。see の過去分詞が seen であることも確認する。',
      },
      {
        question: '下線部をたずねる疑問文にしなさい。Ken has climbed Mt. Fuji three times.（three times が下線部）',
        wrongAnswer: 'How long has Ken climbed Mt. Fuji?',
        trapExplanation: '現在完了の疑問詞といえば How long、と条件反射で選んでしまう。下線部が回数なのか期間なのかを確かめていない。',
        correctAnswer: 'How many times has Ken climbed Mt. Fuji?',
        correctExplanation:
          '下線部の three times は回数なので、たずねる疑問詞は How many times になる。How long は for three years のような期間をたずねるときに使う。下線部が「長さ」か「回数」かを見てから疑問詞を選ぶこと。語順は How many times ＋ has ＋ 主語 ＋ 過去分詞。',
      },
    ],
  },

  {
    id: 'koko_eigo_s124',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 経験④：会話でのたずね方と答え方',
    description: 'Have you ever 〜? を軸に、会話文でのやりとりを型として身につける',
    intro: '外国から来た人と話すとき、いちばんよく使う質問のひとつが「日本食を食べたことある？」です。入試の会話文でも、この Have you ever 〜? は繰り返し登場します。質問だけでなく、そのあとに続く自然な受け答えまでセットで覚えると、会話文の穴うめが得意になります。',
    order: 624,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'Have you ever ＋ 過去分詞 〜? が経験をたずねる基本形。',
      'Yes と答えたあとは、回数や感想を過去形または現在完了で続ける。',
      'No, never. / No, I have not. / This is my first time. などの返し方がある。',
      '「〜はどうでしたか」は How was it? / How did you like it? とたずねる。',
      '会話文では、たずねる文が現在完了、くわしく述べる文が過去形になることが多い。',
    ],
    sections: [
      {
        heading: 'たずね方と答え方の型',
        body: `Have you ever 〜? は会話文の定番である。答えのバリエーションまで押さえておく。

■ たずねる
Have you ever been to Kyoto?
Have you ever eaten natto?
Have you ever seen a shooting star?
Have you ever tried Japanese calligraphy?

■ Yes の答え
Yes, I have. I have been there twice.
Yes, I have. I went there last summer.（くわしく言うときは過去形）
Yes, once. It was really beautiful.

■ No の答え
No, I have not. / No, I have never been there.
No, never. But I want to go someday.
No, this is my first time.

■ 続けてたずねる
How was it?（どうでしたか）
How did you like it?（気に入りましたか）
When did you go there?（いつ行ったのですか）※ 過去形でたずねる
Who did you go with?

★ ポイント：会話は「経験をたずねる（現在完了）→ くわしい事情を語る（過去形）」という流れで進む。この切りかえに気づけると、動詞の形を選ぶ問題を落とさない。`,
      },
      {
        heading: '会話文でよく出るやりとり',
        body: `実際の入試会話文に近い形で流れを確認する。

■ やりとり①
A: Have you ever been to a Japanese festival?
B: No, I have not. Is it fun?
A: Yes. I went to one in Osaka last month. It was very exciting.
B: Sounds nice. I want to go next time.

■ やりとり②
A: Have you finished your science report yet?
B: Not yet. I have been working on it since this morning.
A: You have been busy these days.

■ やりとり③
A: How many times have you visited Nara?
B: Only once. I saw the big Buddha there.
A: When did you go?
B: Three years ago.

■ 設問になりやすい場所
・ever・yet・never など副詞の空所
・Not yet. / No, never. などの応答の空所
・過去形と現在完了の選択（When did you go? に対して I went 〜.）
・内容一致で「Bは何回行ったか」「Bは今どうしているか」

⚠ 注意：やりとり③のように、When did you go? と聞かれたら答えは必ず過去形になる。Three years ago. のように ago で答えるのも自然だが、現在完了で答えてはいけない。

★ ポイント：会話文は暗記した型がそのまま得点になる領域である。Have you ever 〜? / Not yet. / No, never. / How was it? の4つは声に出して覚えてしまう。`,
      },
    ],
    trapExamples: [
      {
        question: '対話が成り立つように（　）に入る文を選びなさい。A: Have you ever been to Australia?　B: （　）　A: When did you go there?',
        wrongAnswer: 'No, I have never been there.',
        trapExplanation: 'Bの返事だけを見て自然な英文を選んでしまい、そのあとのAの発言との整合性を確かめていない。「いつ行ったの」と続くので、Bは行ったことがあるはずである。',
        correctAnswer: 'Yes, I have.',
        correctExplanation:
          '直後にAが When did you go there?（いつ行ったのですか）とたずねているので、Bは「行ったことがある」と答えていなければ話がつながらない。会話文の空所は、前だけでなく後ろの発言も必ず読んでから決めること。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。A: Have you ever visited Hokkaido?　B: Yes. I （ go ） there two years ago.',
        wrongAnswer: 'have gone',
        trapExplanation: 'Aの質問が現在完了なので、答えも現在完了でそろえるべきだと考えてしまう。答えの文に two years ago が入っていることを見落としている。',
        correctAnswer: 'went',
        correctExplanation:
          'two years ago は今から切り離された過去の一点を指すので、現在完了とは共存できない。したがって過去形 went を使う。たずねる文は現在完了、時期をくわしく言う文は過去形、という会話文の型どおりである。なお have gone there は「行ってしまって今ここにいない」の意味になるため、話し手自身には使えない点でも誤りである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s125',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了 経験⑤：最上級・first time を使った書きかえ',
    description: '「今までで最も〜」「〜するのは初めて」の3通りの言いかえを身につける',
    intro: '「こんなに大きな犬を見たのは初めてだ」。この一文は英語では3通りに書け、しかも入試ではその書きかえがそのまま出題されます。使うのは現在完了の経験用法と最上級。日本語では別々に見える3つの文が、実は同じ場面を指していることに気づくと、書きかえが一気に楽になります。',
    order: 625,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'This is the 最上級 ＋ 名詞 ＋ (that) I have ever 過去分詞. が基本形。',
      '＝ I have never 過去分詞 ＋ such a 形容詞 ＋ 名詞.',
      '＝ This is the first time I have 過去分詞 〜.（〜するのは初めてだ）',
      'ever は have と過去分詞の間に置く。',
      '比較級を使った I have never seen a bigger dog than this one. も同じ内容を表せる。',
    ],
    sections: [
      {
        heading: '3通りの言いかえ',
        body: `次の3文はすべて同じ場面を表す。書きかえ問題ではこの間の変換が問われる。

① This is the biggest dog that I have ever seen.
　（これは私が今までに見た中でいちばん大きな犬だ）
② I have never seen such a big dog.
　（私はこんなに大きな犬を見たことがない）
③ This is the first time I have ever seen such a big dog.
　（こんなに大きな犬を見るのは初めてだ）

■ ①の作り方
This is the ＋ 最上級 ＋ 名詞 ＋ (that) ＋ 主語 ＋ have/has ever ＋ 過去分詞.
that は省略できる。ever は have と過去分詞の間。
例）This is the most interesting book I have ever read.
　　He is the kindest person I have ever met.

■ ②の作り方
主語 ＋ have/has never ＋ 過去分詞 ＋ such a(n) ＋ 形容詞 ＋ 名詞.
such a のあとは形容詞＋名詞の順。× such big a dog は誤り。
例）I have never read such an interesting book.

■ ③の作り方
This is the first time ＋ 主語 ＋ have/has ＋ 過去分詞 〜.
「〜するのはこれが初めてだ」。the second time なら「2回目だ」。
例）This is the first time I have visited this town.

★ ポイント：①は「最上級」、②は「never ＋ such a」、③は「the first time」。3つのキーワードで引き出せるようにしておく。`,
      },
      {
        heading: '比較級を使った言いかえと注意点',
        body: `同じ内容は比較級でも表せる。難関私立ではこちらも出る。

■ 比較級を使う形
I have never seen a bigger dog than this one.
（これより大きな犬を見たことがない）
＝ This is the biggest dog I have ever seen.

例）I have never read a more interesting book than this.
　　There is no better way than this.

■ 使う語の対応表
最上級：the biggest / the most interesting / the best
比較級：bigger than / more interesting than / better than
such a ＋ 形容詞：such a big / such an interesting

■ 注意すべき綴りと形
・such a(n) の a / an は次の語で決まる。such an interesting book（母音で始まるので an）。
・most interesting のように語が長い形容詞は more / most を使う。
・good — better — best、bad — worse — worst、many/much — more — most は不規則。

⚠ 注意：the first time の後ろの動詞を過去形にしてはいけない。
× This is the first time I visited this town.（口語では見られるが、入試では現在完了が正答）
○ This is the first time I have visited this town.

■ 英作文での使いどころ
「今までで最高の〜だった」「〜するのは初めてです」は英作文の定番表現である。型ごと覚えておけば、その場で組み立てる必要がない。

★ ポイント：3つの型はどれも「経験用法＋比較」の組み合わせ。現在完了の部分（have ever 過去分詞 / have never 過去分詞）は共通なので、そこを軸に前後を入れかえるだけでよい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文とほぼ同じ意味になるように書きかえなさい。This is the most beautiful picture I have ever seen. → I have never seen （　　　） beautiful picture.',
        wrongAnswer: 'so a',
        trapExplanation: 'such と so の使い分けがあいまいなため、「こんなに美しい」を so で表そうとする。so は形容詞を直接修飾するので、後ろに a ＋ 名詞を続けられない。',
        correctAnswer: 'such a',
        correctExplanation:
          'such a(n) ＋ 形容詞 ＋ 名詞 の語順で「こんなに〜な…」を表す。したがって such a beautiful picture となる。so を使うなら so beautiful a picture という語順になるが、中学では such a を答えにするのが基本である。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。This is the first time I （ visit ） Kyoto.',
        wrongAnswer: 'visited',
        trapExplanation: '「初めて京都を訪れた」という日本語から、訪れたのは過去だと考えて過去形にしてしまう。the first time の後ろは現在完了にするという型を知らないのが原因。',
        correctAnswer: 'have visited',
        correctExplanation:
          'This is the first time の後ろは現在完了にするのが原則である。「今この瞬間までの経験の中で1回目だ」という意味なので、今とつながる現在完了がふさわしい。答えは have visited。同じ型で This is the second time I have been here. のようにも使える。',
      },
    ],
  },

  // ───────────────── 4. 現在完了進行形（s126〜s127） ─────────────────
  {
    id: 'koko_eigo_s126',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了進行形①：have been ＋ -ing の形',
    description: '「ずっと〜し続けている」を表す現在完了進行形の作り方と使いどころを学ぶ',
    intro: '「朝からずっと雨が降っている」。この文の主役は、雨がやんでいないという「今もなお続いている感じ」です。ふつうの現在完了でも通じますが、この続いている感じを強く出したいときに使うのが現在完了進行形です。形は have been に -ing を足すだけです。',
    order: 626,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '形は have/has been ＋ 動詞の -ing 形。been は be の過去分詞。',
      '意味は「（過去のある時点から）今までずっと〜し続けている」。',
      '動作動詞（rain・study・wait・play・work・read）と使う。',
      '状態動詞（know・live・be・have＝持つ）は原則として使わない。',
      '疑問文は How long have you been -ing? の形になることが多い。',
    ],
    sections: [
      {
        heading: '形と意味',
        figureId: 'lf_kokoeigoext04_126',
        body: `現在完了進行形は、現在完了（have ＋ 過去分詞）と進行形（be ＋ -ing）を合体させた形である。

■ 作り方
have/has ＋ been ＋ 動詞の -ing 形
be の過去分詞が been なので、have been という並びになる。
例）It has been raining since this morning.（今朝からずっと雨が降っている）
　　I have been studying English for two hours.（2時間ずっと英語を勉強している）
　　They have been waiting for you.（彼らはずっとあなたを待っている）
　　She has been working here since 2020.

■ 意味
「過去のある時点に始まり、今も続いている最中である」ことを表す。ふつうの現在完了の継続よりも、動作が今なお進行中であることを強調する。

■ 否定文・疑問文
否定文：have/has ＋ not ＋ been ＋ -ing
　例）It has not been raining.
疑問文：Have/Has ＋ 主語 ＋ been ＋ -ing 〜?
　例）Have you been waiting long?
　　　How long have you been studying?
　答え：For two hours. / Since ten o'clock.

⚠ 注意：been を書き落として have raining としたり、be動詞を is にして has is raining としたりする誤りが多い。have/has ＋ been ＋ -ing の3点セットで覚える。

★ ポイント：数直線で見ると、矢印の右端が今に届き、しかもそこで切れずに先へ続いていくイメージ。「今もやっている最中」が現在完了進行形の核心である。`,
      },
      {
        heading: '使える動詞と -ing の作り方',
        body: `現在完了進行形は動作動詞とだけ組む。状態動詞では作れない。

■ よく使う動詞
rain（降る）／snow／study（勉強する）／wait（待つ）／play（する）／work（働く）／read（読む）／talk（話す）／run（走る）／practice（練習する）／watch（見る）／use（使う）／sleep（眠る）

例）He has been playing soccer for three hours.
　　We have been talking about the plan since noon.
　　The baby has been sleeping for two hours.

■ 使えない動詞（状態動詞）
know／live（ただし live は例外的に可）／be／have（持っている）／want／like／love／believe／understand／belong
× I have been knowing him for five years.
○ I have known him for five years.

■ -ing の作り方の復習
・ふつうは -ing を付ける：play → playing、study → studying
・e で終わる語は e を取って -ing：write → writing、use → using、make → making
・短母音＋子音字で終わる語は子音字を重ねる：run → running、swim → swimming、sit → sitting、get → getting、stop → stopping、begin → beginning
・ie で終わる語は y に変えて -ing：die → dying、lie → lying

例）I have been running for thirty minutes.（× runing は綴りの誤り）
　　It has been beginning 〜 とは言わない（begin は一瞬の動作）。

★ ポイント：「進行形にできない動詞は現在完了進行形にもできない」。この一言で判定できる。迷ったら「今〜している最中」と言えるかを試してみる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は2時間ずっと英語を勉強しています」を英語にしなさい。',
        wrongAnswer: 'I have studying English for two hours.',
        trapExplanation: '現在完了は have ＋ 過去分詞、進行形は be ＋ -ing と別々に覚えているため、合体させるときに been を落としてしまう。',
        correctAnswer: 'I have been studying English for two hours.',
        correctExplanation:
          '現在完了進行形は have/has ＋ been ＋ -ing の3語構成である。be の過去分詞 been が必ず入る。× have studying、× has is studying、× am been studying はいずれも誤り。for two hours は文末に置く。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。I （ know ） Ken since we were children.',
        wrongAnswer: 'have been knowing',
        trapExplanation: '「ずっと知っている」という継続の日本語から、続いている感じを出すために現在完了進行形にしてしまう。know が状態動詞であることを見落としている。',
        correctAnswer: 'have known',
        correctExplanation:
          'know は状態動詞なので進行形にできず、現在完了進行形にもできない。ふつうの現在完了 have known を使う。状態動詞はもともと「続いている」意味を持っているので、-ing を足す必要がない。live だけは例外で have lived / have been living のどちらも使える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s127',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了進行形②：現在完了との使い分け',
    description: '「終わったか」を言う現在完了と「続いている最中」を言う現在完了進行形を区別する',
    intro: '「3時間本を読んでいます」と「本を3冊読み終えました」。どちらも過去から今までの話ですが、前者は途中経過、後者は成果の報告です。英語もこの二つを形で区別していて、途中経過なら進行形、終わった量なら完了形を使います。この感覚をつかむと、選択問題で迷わなくなります。',
    order: 627,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '現在完了進行形＝動作が今も続いている最中（終わっていない）。',
      '現在完了＝終わったこと、または状態の継続。',
      '「何ページ読んだ」のように結果の量を言うときは現在完了を使う。',
      '「どのくらいの間読んでいるか」を言うときは現在完了進行形が自然。',
      'How long have you been -ing? は現在完了進行形の代表的な疑問文。',
    ],
    sections: [
      {
        heading: '二つの形の役割分担',
        body: `現在完了と現在完了進行形は、どちらも過去から今までをつなぐが、注目点がちがう。

■ 現在完了進行形：まだ終わっていない、続いている最中
I have been reading this book for two hours.
（2時間この本を読んでいる。まだ読み終えていない）
It has been snowing since last night.（今も降っている）
He has been waiting for an hour.（今も待っている）

■ 現在完了：終わった、または状態が続いている
I have read this book twice.（2回読み終えた＝経験）
I have just read this book.（読み終えたところ＝完了）
I have known him for ten years.（状態の継続）

■ 対比の例
① I have been writing a letter.（手紙を書いている最中。まだ書き終えていない）
② I have written a letter.（手紙を書き終えた）
① I have been painting the wall.（塗っている最中）
② I have painted the wall.（塗り終えた）

■ 量を言うときは現在完了
「どれだけできたか」という結果の量を述べるときは現在完了を使う。
○ I have read fifty pages so far.（今までに50ページ読んだ）
△ I have been reading fifty pages. は不自然。

★ ポイント：「途中経過を言う → 進行形」「成果を言う → 完了形」。日本語の「〜している」「〜した」ではなく、終わっているかどうかで判断する。`,
      },
      {
        heading: '入試での問われ方',
        body: `現在完了進行形は、公立入試では選択問題、私立入試では書きかえや英作文で問われる。

■ 選択問題の型
It ( has been raining / has rained ) since this morning, so the ground is still wet.
→ 「今も降っている・地面がまだぬれている」ので現在完了進行形が自然。

He ( has been reading / has read ) three books this month.
→ 「3冊読んだ」という結果の量なので現在完了。

■ How long の疑問文
How long have you been waiting?（どのくらい待っているのですか）
— For twenty minutes.（20分です）
動作動詞の場合、How long 〜? には現在完了進行形で答えるのが自然である。
一方、状態動詞なら How long have you known him? のようにふつうの現在完了になる。

■ 書きかえ
It started to rain three hours ago. It is still raining now.
＝ It has been raining for three hours.
2文を1文にまとめる問題で頻出。「〜し始めた」＋「今も続いている」→ 現在完了進行形、という手順で作る。

⚠ 注意：live は状態にも動作にも近いので、I have lived here for ten years. と I have been living here for ten years. のどちらも正しい。work・study・wait も両方使えることがあり、その場合はどちらを選んでも減点されない。

★ ポイント：判定に迷ったら「今この瞬間もやっているか」を自分に問う。やっているなら進行形、終わっているなら完了形でよい。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適切なものを選びなさい。It started to rain at nine, and it is still raining. → It （ has rained / has been raining ） for three hours.',
        wrongAnswer: 'has rained',
        trapExplanation: '「3時間雨が降った」という日本語から、for がある継続だと考えてふつうの現在完了を選んでしまう。still raining（今も降っている）という情報を使っていない。',
        correctAnswer: 'has been raining',
        correctExplanation:
          'is still raining から、動作が今も続いている最中だとわかる。動作動詞 rain の継続は現在完了進行形 has been raining で表すのが自然である。has rained だと「降ったことがある・降り終えた」というニュアンスになり、今も降っている状況と合わない。',
      },
      {
        question: '（　）内から適切なものを選びなさい。I （ have been reading / have read ） three books since last month.',
        wrongAnswer: 'have been reading',
        trapExplanation: 'since があるので継続だと考え、続いている感じの強い現在完了進行形を選んでしまう。three books という「結果の量」が示されている点を見落としている。',
        correctAnswer: 'have read',
        correctExplanation:
          'three books は「読み終えた冊数」という結果の量なので、ふつうの現在完了 have read を使う。現在完了進行形は「まだ終わっていない動作」を表すため、冊数のように完了した数量とは合わない。「量を言うなら完了形、途中経過なら進行形」と整理しておく。',
      },
    ],
  },

  // ───────────────── 5. 現在完了と過去形の使い分け（s128〜s131） ─────────────────
  {
    id: 'koko_eigo_s128',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了と過去形①：「今とつながっているか」で決める',
    description: '同じ出来事でも、今と結びつけるかどうかで形が変わることを理解する',
    intro: '「カナダに行った」という一つの出来事も、伝えたいことによって英語の形が変わります。「2020年に行った」と事実を報告するなら過去形、「行ったことがあるんだ」と今の自分の経験として語るなら現在完了。同じ出来事でも、話し手が今とつなげたいかどうかが分かれ道になります。',
    order: 628,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '過去形＝過去の一点で完結。今のことは何も言っていない。',
      '現在完了＝過去の出来事を今と結びつけて述べる。',
      '「いつ」を言いたいときは過去形、「今どうか」を言いたいときは現在完了。',
      '同じ出来事でも、話し手の意図によってどちらも使える。',
      '現在完了は「今」に届く矢印、過去形は今と切れた点、と図で覚える。',
    ],
    sections: [
      {
        heading: '同じ出来事でも形が変わる',
        figureId: 'lf_kokoeigoext04_128',
        body: `英語の時制は「いつ起きたか」だけでなく「今とどう関係するか」で決まる。

■ 過去形が選ばれる場面
・いつのことかを言うとき
　I went to Canada in 2020.
・今のことには触れず、過去の出来事だけを報告するとき
　He lived in Osaka for ten years.（今は住んでいない）
・物語や体験を順に語るとき
　I got up at six. I ate breakfast. Then I went to school.

■ 現在完了が選ばれる場面
・今の経験として語るとき
　I have been to Canada.（行ったことがある）
・今の状態を説明するとき
　I have lost my key.（だから今困っている）
・今まで続いていることを言うとき
　He has lived in Osaka for ten years.（今も住んでいる）

■ 同じ出来事の二つの言い方
出来事：2020年にカナダへ行った
① I went to Canada in 2020.（いつ行ったかを報告）
② I have been to Canada.（行った経験があると述べる）
どちらも正しい。ちがうのは何を伝えたいかである。

★ ポイント：現在完了は「今」に届く矢印、過去形は今と切れた点。だから過去形には「いつ」を足せるが、現在完了には足せない。この形のちがいが、次の課で扱う語句の制限を生んでいる。`,
      },
      {
        heading: '判定の手順',
        body: `試験で迷ったときに使える判定手順をまとめる。

■ 手順①：文中に時を表す語句があるか探す
・yesterday / last 〜 / 〜 ago / in 2020 / then / just now / When 〜? がある → 過去形
・for / since / just / already / yet / ever / never / 〜 times / before / so far / recently がある → 現在完了

■ 手順②：語句がなければ「今どうか」を見る
・「今も続いている」「今その結果がある」「今までの経験だ」→ 現在完了
・「今のことは関係ない、過去の話をしている」→ 過去形

■ 手順③：前後の文とのつながりを見る
・He is not here now. の後なら He has gone out. が自然。
・Last night was terrible. の後なら過去形で続く。

■ 練習
① I ( saw / have seen ) that movie last week. → saw（last week があるので過去形）
② I ( saw / have seen ) that movie three times. → have seen（回数なので経験）
③ She ( was / has been ) sick since Monday. → has been（since があるので継続）
④ When ( did you buy / have you bought ) this bag? → did you buy（When は過去形と）

⚠ 注意：recently（最近）や so far（今までのところ）は現在完了と使えるが、just now（たった今）は過去形と使う。まぎらわしいので分けて覚える。

★ ポイント：まず「時の語句」を探し、なければ「今との関係」を考える。この2段構えなら、初見の文でも短時間で判定できる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適切なものを選びなさい。My father （ has bought / bought ） this car three years ago.',
        wrongAnswer: 'has bought',
        trapExplanation: '「3年前に買って今も持っている」という状況を思い浮かべ、今とつながっているから現在完了だと考えてしまう。ago があることを見落としている。',
        correctAnswer: 'bought',
        correctExplanation:
          'three years ago は今から切り離された過去の一点を指す語句なので、現在完了とは同じ文に置けない。したがって過去形 bought を選ぶ。「今も持っている」と言いたいなら My father has had this car for three years. のように書きかえる必要がある。',
      },
      {
        question: '（　）内から適切なものを選びなさい。A: Where is Ken?　B: He （ went / has gone ） to the library.',
        wrongAnswer: 'went',
        trapExplanation: '「図書館へ行った」という過去の動作だけに注目して過去形を選んでしまう。Aの質問が「ケンは今どこにいるの」であることを使っていない。',
        correctAnswer: 'has gone',
        correctExplanation:
          'Aは「今どこにいるか」をたずねているので、Bは「行ってしまって今ここにいない」という結果を伝える必要がある。それを表すのが has gone to である。went だと「行った」という過去の事実だけで、今どこにいるかの答えにならない。前後の文脈から時制を決める典型例である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s129',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了と過去形②：ago・yesterday・When は現在完了と使えない',
    description: '現在完了と共存できない語句を確実に覚え、誤文訂正に強くなる',
    intro: '入試の誤文訂正で、いちばんよく仕込まれているワナがこれです。I have finished it two days ago. 一見きれいな英文ですが、ago があるだけで即座に誤りになります。理由はたった一つ、現在完了は「今」から切り離された時点を指定できないからです。',
    order: 629,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '現在完了と使えない語句：yesterday／〜 ago／last week・last year／in 2020／then／just now／When 〜?',
      'これらはすべて「今から切り離された過去の一点」を指す語である。',
      '現在完了と使える語句：for／since／just／already／yet／ever／never／〜 times／before／so far／recently／today／this week',
      'just now（たった今）は過去形、just（ちょうど）は現在完了。混同しやすい。',
      '誤文訂正では、ago と現在完了の組み合わせが最頻出。',
    ],
    sections: [
      {
        heading: '使える語句・使えない語句',
        figureId: 'lf_kokoeigoext04_129',
        body: `現在完了は右端が必ず「今」に届く表現である。だから「今から切れた一点」を指す語とは同居できない。

■ 現在完了と共存できない語句
yesterday（昨日）
〜 ago（〜前に）：two days ago / a week ago / long ago
last 〜（この前の〜）：last night / last week / last month / last year
in ＋ 過去の年（in 2020 / in April）
then（そのとき）
just now（たった今）
When 〜?（いつ〜？）

例）× I have seen him yesterday. → ○ I saw him yesterday.
　　× He has come here two hours ago. → ○ He came here two hours ago.
　　× When have you finished it? → ○ When did you finish it?

■ 現在完了と共存できる語句
for 〜／since 〜／just／already／yet／ever／never／once・twice・〜 times／before／so far（今までのところ）／recently・lately（最近）／up to now／today／this week／this year／all day

例）○ I have finished it already.
　　○ I have not seen him lately.
　　○ We have had a lot of rain this month.

★ ポイント：today・this week・this year は「今もその期間の中にいる」ので現在完了と使える。yesterday・last week は「もう終わった期間」なので使えない。期間が今を含むかどうかが分かれ目である。`,
      },
      {
        heading: '誤文訂正のやり方',
        body: `誤文訂正の問題は、直し方が2通りあることが多い。どちらでもよいが、問題の指示に従う。

■ パターン①：時の語句を残して動詞を過去形に直す
× I have visited Kyoto last summer.
○ I visited Kyoto last summer.

■ パターン②：動詞を残して時の語句を消す・変える
× I have visited Kyoto last summer.
○ I have visited Kyoto twice.
○ I have visited Kyoto before.

■ When の扱い
When は「いつ」という過去の一点をたずねる語なので、現在完了とは使えない。
× When have you bought this bag?
○ When did you buy this bag?
一方 How long（どのくらいの間）や How many times（何回）は現在完了と使える。
○ How long have you had this bag?
○ How many times have you been there?

■ just と just now
I have just arrived.（ちょうど着いたところだ）→ 現在完了
I arrived just now.（たった今着いた）→ 過去形
日本語ではどちらも「たった今着いた」だが、英語では形が変わる。

⚠ 注意：現在完了の文に ago を足したくなったら、それは過去形にすべき合図である。「いつ」を言いたい気持ちが出たら過去形、と覚えておく。

★ ポイント：誤文訂正では、まず時を表す語句を丸で囲む。それが「今と切れた一点」なら、動詞は必ず過去形でなければならない。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りがあれば直しなさい。I have finished my homework two days ago.',
        wrongAnswer: '誤りなし（そのままでよい）',
        trapExplanation: '「2日前に宿題を終えた」という日本語がまったく自然なので、英文にも違和感を持たない。ago が現在完了と共存できないという知識が抜けている。',
        correctAnswer: 'I finished my homework two days ago.',
        correctExplanation:
          'ago は今から切り離された過去の一点を指すので、現在完了とは同じ文に置けない。ago を残すなら動詞を過去形 finished にする。逆に現在完了を残すなら I have already finished my homework. のように ago を消す。この組み合わせは誤文訂正の最頻出パターンである。',
      },
      {
        question: '（　）内から適切なものを選びなさい。（　） did you come to Japan? — Three years ago.',
        wrongAnswer: 'How long have you come to Japan?',
        trapExplanation: '答えが Three years ago. なので期間だと思いこみ、How long と現在完了を選んでしまう。ago は期間ではなく「今から何年前か」という点を示している。',
        correctAnswer: 'When',
        correctExplanation:
          '答えの Three years ago. は「3年前という過去の一点」なので、たずねる文は When did you come to Japan? になる。When は現在完了と使えない。もし How long を使うなら How long have you been in Japan? — For three years. のように、動詞も答えも変える必要がある。',
      },
    ],
  },

  {
    id: 'koko_eigo_s130',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了と過去形③：ago と since の書きかえ',
    description: 'ago を使った過去形の文を、since や for を使った現在完了に書きかえる',
    intro: '「彼は6年前に日本に来ました」と「彼は2020年から日本にいます」。日本語では別の文に見えますが、指している事実はまったく同じです。入試の書きかえ問題は、この「同じ事実を別の角度から言う」練習にほかなりません。ago と since の橋渡しを覚えましょう。',
    order: 630,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'ago は過去形と、for・since は現在完了とセットで使う。',
      'He came to Japan six years ago.＝He has been in Japan for six years.',
      '＝He has been in Japan since 2020.（2026年の6年前は2020年）',
      '書きかえのとき、come → be、buy → have、die → be dead のように動詞を変えることが多い。',
      '否定の書きかえ：He last visited us three years ago.＝He has not visited us for three years.',
    ],
    sections: [
      {
        heading: 'ago と since を橋渡しする',
        figureId: 'lf_kokoeigoext04_130',
        body: `ago（過去形）と since / for（現在完了）は、同じ時間の幅を別の角度から言ったものである。

■ 基本の対応
He came to Japan six years ago.（6年前に来た＝点）
＝ He has been in Japan for six years.（6年間いる＝幅）
＝ He has been in Japan since 2020.（2020年からいる＝起点）
※ 今が2026年なので、6年前は2020年になる。

■ 動詞が変わることに注意
書きかえるときは、動詞を「一瞬の動作」から「続く状態」に変える必要がある。
come（来る）→ be in（いる）
buy（買う）→ have（持っている）
die（死ぬ）→ be dead（亡くなっている）
become（〜になる）→ be（〜である）
move（引っ越す）→ live（住んでいる）
lose（なくす）→ not have（持っていない）

例）I bought this bike three years ago.
　＝ I have had this bike for three years.
　　My uncle became a teacher in 2016.
　＝ My uncle has been a teacher for ten years.
　　She moved to Kobe five years ago.
　＝ She has lived in Kobe for five years.

★ ポイント：「点の動詞」をそのまま現在完了にしてはいけない。× He has come to Japan for six years. は誤り。come は一瞬の動作なので6年間続けられない。`,
      },
      {
        heading: '否定を使う書きかえ',
        body: `「最後に〜したのは…前」という文は、否定の現在完了に書きかえる。

■ 型
主語 ＋ last ＋ 過去形 ＋ 〜 ＋ 期間 ago.
＝ 主語 ＋ have/has not ＋ 過去分詞 ＋ 〜 ＋ for ＋ 期間.
＝ It has been ＋ 期間 ＋ since ＋ 主語 ＋ last ＋ 過去形.

例）I last saw Tom two years ago.
　＝ I have not seen Tom for two years.
　＝ It has been two years since I last saw Tom.

　　It last rained three weeks ago.
　＝ It has not rained for three weeks.

■ なぜ否定になるのか
「最後に会ったのが2年前」ということは、「そのあと2年間は会っていない」という意味になる。日本語の発想を裏返す必要があるので、書きかえ問題の中でも難度が高い。

■ 肯定・否定の見分け
・「〜し続けている」→ 肯定の現在完了
・「最後に〜したのは…前」→ 否定の現在完了
・「〜してから…になる」→ It has been 〜 since または 期間 have passed since

■ 練習
① He came here an hour ago and he is still here.
　＝ He has been here for an hour.
② I last played tennis in April.
　＝ I have not played tennis since April.
③ My watch broke a week ago.
　＝ My watch has been broken for a week.

★ ポイント：書きかえは「①動詞を状態に変える ②期間を for、起点を since で表す ③最後に〜なら否定にする」の3手順で処理できる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文とほぼ同じ意味になるように書きかえなさい。Ken came to this school three years ago. → Ken （　　　） at this school for three years.',
        wrongAnswer: 'has come',
        trapExplanation: '元の文の動詞 come をそのまま現在完了にしてしまう。come は「来る」という一瞬の動作なので、3年間続けることができないという点を見落としている。',
        correctAnswer: 'has been',
        correctExplanation:
          '「3年間この学校にいる」という状態の継続にするには、come（来る）を be（いる）に変えて has been at this school for three years とする。空所の後ろが at this school になっていることも、be動詞が入る手がかりになる。動詞を状態に変えるのが書きかえの要点である。',
      },
      {
        question: '次の文とほぼ同じ意味になるように書きかえなさい。I last met her two years ago. → I （　　　） her for two years.',
        wrongAnswer: 'have met',
        trapExplanation: '「2年前に会った」を肯定のまま現在完了にしてしまう。「最後に会ったのが2年前」＝「2年間会っていない」という裏返しの発想が必要なことに気づいていない。',
        correctAnswer: "have not met（短縮形は haven't met）",
        correctExplanation:
          '最後に会ったのが2年前ということは、それ以来2年間会っていないという意味になる。したがって否定の現在完了 have not met を使う。「last ＋ 過去形 ＋ ago」を見たら「have not ＋ 過去分詞 ＋ for」に変える、と型で覚えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s131',
    subject: 'eigo',
    examType: 'koko',
    title: '現在完了と過去形④：3用法の総整理と識別演習',
    description: '継続・完了／結果・経験の3用法を1本の時間軸で整理し、識別できるようにする',
    intro: 'ここまでで現在完了の3つの用法をひととおり見てきました。形はどれも have＋過去分詞で同じなので、混乱しやすいのも当然です。しかし1本の時間軸に並べてみると、幅・1点・点の数という三つの形がはっきり分かれます。最後にその全体像をまとめておきましょう。',
    order: 631,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '継続＝左端から今までの「幅」。目印は for / since / How long。',
      '完了・結果＝今のすぐ手前で終わった「1点」。目印は just / already / yet。',
      '経験＝過去に散らばる「点の数」。目印は ever / never / 〜 times / before。',
      '3用法とも右端は必ず「今」に届いているので、ago・yesterday とは使えない。',
      '用法の判定は、いっしょに使われている副詞句を探すのがいちばん速い。',
    ],
    sections: [
      {
        heading: '1本の時間軸で3用法を並べる',
        figureId: 'lf_kokoeigoext04_131',
        body: `現在完了は形が一つで意味が三つある。時間軸の上でどこを見ているかで整理する。

■ 継続（幅）
過去のある点から今まで、途切れずに続いている。
目印：for 〜／since 〜／How long 〜?
例）I have lived here for ten years.
訳：「ずっと〜している」

■ 完了・結果（今のすぐ手前の1点）
たった今、または少し前に終わり、その結果が今に及んでいる。
目印：just／already／yet／now
例）I have just finished my homework.
訳：「〜したところだ」「〜してしまった」

■ 経験（点の数）
過去のどこかで何回起きたかを数える。いつかは問わない。
目印：ever／never／once／twice／〜 times／before
例）I have been to Kyoto twice.
訳：「〜したことがある」

■ 共通するルール
・形はすべて have/has ＋ 過去分詞
・否定は have/has not、疑問は Have/Has を前に
・右端は必ず「今」に届くので、ago・yesterday・last week・When 〜? とは使えない

★ ポイント：3用法は別々の文法ではなく、「過去と今をつなぐ」という一つの働きを、幅・1点・点の数という三つの角度から見たものである。`,
      },
      {
        heading: '識別演習',
        body: `次の文がどの用法かを判定し、日本語に直す練習をする。判定の手がかりは副詞句である。

① I have known Ken since we were in the first grade.
→ since があるので継続。「1年生のときからケンを知っている」

② The concert has already started.
→ already があるので完了。「コンサートはもう始まってしまった」

③ Have you ever climbed Mt. Fuji?
→ ever があるので経験。「富士山に登ったことがありますか」

④ She has gone to the station.
→ gone なので結果。「駅へ行ってしまった（今ここにいない）」

⑤ How long have they been married?
→ How long があるので継続。「どのくらい結婚しているのですか」

⑥ I have not read the book yet.
→ yet があるので完了。「まだその本を読んでいない」

⑦ We have visited that temple many times.
→ many times があるので経験。「あの寺を何度も訪れたことがある」

⑧ It has been raining since noon.
→ 現在完了進行形＋since なので継続。「正午からずっと雨が降っている」

■ 手がかりがない場合
副詞句がないときは、文脈から「今どうか」を読み取る。
例）I have lost my wallet.（結果：今ない）
　　He has become a doctor.（結果：今医者だ）

⚠ 注意：have been to（経験）と have gone to（結果）、have been in（継続）は形が似ていて用法がちがう。前置詞と過去分詞の組み合わせで判断する。

★ ポイント：まず副詞句を探し、なければ「今どうなっているか」を考える。この順番なら、長文中の現在完了もその場で処理できる。`,
      },
    ],
    trapExamples: [
      {
        question: '用法を答えなさい。He has been to the library three times this week.',
        wrongAnswer: '継続（ずっと図書館にいる）',
        trapExplanation: 'has been という形を見て be動詞の継続だと考えてしまう。後ろが to であること、three times という回数があることを見ていない。',
        correctAnswer: '経験（今週3回図書館へ行ったことがある）',
        correctExplanation:
          'have been to 〜 は「〜へ行ったことがある」という経験を表す。three times という回数の語も経験用法の目印である。継続なら have been in the library for two hours のように in や at を使う。to か in かで用法が変わる点が要注意である。',
      },
      {
        question: '（　）内から適切なものを選びなさい。I （ have watched / watched ） this movie when I was ten.',
        wrongAnswer: 'have watched',
        trapExplanation: '「この映画を見たことがある」と経験のように読めるため現在完了を選んでしまう。when I was ten という過去の一点を示す節があることを見落としている。',
        correctAnswer: 'watched',
        correctExplanation:
          'when I was ten（10歳のとき）は今から切り離された過去の一点なので、現在完了とは共存できない。したがって過去形 watched を使う。経験として言いたいなら I have watched this movie before. のように、時を示す節を外す必要がある。',
      },
    ],
  },

  // ───────────────── 6. 受動態の基本（s132〜s136） ─────────────────
  {
    id: 'koko_eigo_s132',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態①：be動詞＋過去分詞の形を作る',
    description: '受動態の形と意味をつかみ、能動態との対応を理解する',
    intro: '「この学校は1950年に建てられました」。日本語のこの言い方、だれが建てたかは言っていませんね。英語にも同じように「される側」を主語にする言い方があり、それが受動態です。だれがやったかより、何がどうされたかを伝えたいときに使います。',
    order: 632,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '受動態の形は be動詞 ＋ 過去分詞。「〜される・〜された」の意味になる。',
      'be動詞は主語の人称・数・時制に合わせて am / is / are / was / were を選ぶ。',
      '過去分詞は形が変わらない。時制を担当するのは be動詞のほうである。',
      '動作をした人を示すときは by 〜 を文末に置く。',
      '能動態の目的語が、受動態では主語になる。',
    ],
    sections: [
      {
        heading: '受動態の形と意味',
        body: `英語の文は、動作を「する側」を主語にするか「される側」を主語にするかで2通りに書ける。

■ 能動態（する側が主語）
Tom broke the window.（トムが窓をこわした）

■ 受動態（される側が主語）
The window was broken by Tom.（窓はトムによってこわされた）

■ 形
be動詞 ＋ 過去分詞（＋ by ＋ 動作主）
be動詞は主語と時制に合わせる。
例）English is spoken in many countries.（英語は多くの国で話されている）
　　This room is cleaned every day.（この部屋は毎日そうじされる）
　　These pictures were taken by my father.（これらの写真は父が撮った）
　　The letter was written in English.

■ be動詞の選び方
主語が I → am／he・she・it・単数名詞 → is／you・we・they・複数名詞 → are
過去なら I・he・she・it・単数名詞 → was／you・we・they・複数名詞 → were
例）I am invited to the party.
　　The books are sold at that shop.
　　The song was sung by many people.

⚠ 注意：be動詞を落として × English spoken in many countries. とする誤りが非常に多い。受動態は必ず be動詞とセットである。

★ ポイント：受動態は「be動詞＋過去分詞」の2語で1つの動詞と考える。時制を決めるのは be動詞、意味を決めるのは過去分詞、と役割を分けて覚える。`,
      },
      {
        heading: '受動態を使う理由',
        body: `なぜわざわざ「される側」を主語にするのか。理由がわかると、長文で受動態が出てきたときの読み方も変わる。

■ 理由①：動作主がわからない・言う必要がない
My bike was stolen.（自転車が盗まれた）
だれが盗んだかわからないので、by 〜 を付けようがない。

■ 理由②：動作主が「みんな・人々」で言うまでもない
English is spoken in Australia.（オーストラリアでは英語が話されている）
だれが話すかは「そこの人々」に決まっているので言わない。

■ 理由③：される側のほうが話題の中心
This temple was built about 1300 years ago.
話題は寺であって、建てた人ではない。

■ 理由④：科学や説明の文章で客観的に書きたい
Water is made up of hydrogen and oxygen.
Rice is grown in this area.

■ 日本語との対応
日本語の「〜される」「〜されている」だけでなく、「〜してある」「〜だ」と訳したほうが自然なことも多い。
This book is written in easy English.→「この本はやさしい英語で書かれている」
The store is closed today.→「その店は今日閉まっている」

★ ポイント：受動態は「動作主を言わないための道具」でもある。だから by 〜 が省略される文のほうがむしろ多い。by がないからといって受動態でないとは限らない。`,
      },
    ],
    trapExamples: [
      {
        question: '「英語は多くの国で話されています」を英語にしなさい。',
        wrongAnswer: 'English speaks in many countries.',
        trapExplanation: '日本語の語順どおりに English を主語にしたあと、動詞をそのまま能動態にしてしまう。「話される」という受け身であることを形に反映していない。',
        correctAnswer: 'English is spoken in many countries.',
        correctExplanation:
          '「話される」は受動態なので be動詞 ＋ 過去分詞にする。主語 English は単数なので is、speak の過去分詞は spoken。English speaks では「英語が話す」という意味になってしまう。be動詞を落とさないことが最大の注意点である。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。These pictures were （ take ） by my sister.',
        wrongAnswer: 'took',
        trapExplanation: 'were という過去形があるので、動詞も過去形にそろえるべきだと考えてしまう。受動態では be動詞が時制を担当し、後ろは必ず過去分詞になることを見落としている。',
        correctAnswer: 'taken',
        correctExplanation:
          '受動態は be動詞 ＋ 過去分詞なので、were の後ろは過去分詞 taken になる。take — took — taken の3番目である。過去形 took を置くと was/were と動詞が二重になってしまう。時制は be動詞だけで表す、と覚えておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s133',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態②：能動態から受動態への書きかえ手順',
    description: '3つの手順で機械的に書きかえられるようにし、by の扱いを正確にする',
    intro: '受動態への書きかえは、実は手順が決まっている作業です。目的語を前へ、動詞を be＋過去分詞へ、主語を by の後ろへ。この3ステップを守れば、どんな文でも書きかえられます。ただし代名詞の形が変わるところだけは、機械的にやると必ず落とし穴にはまります。',
    order: 633,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '手順①：能動態の目的語を受動態の主語にする。',
      '手順②：動詞を be動詞 ＋ 過去分詞にする（be動詞の時制は元の文と同じ）。',
      '手順③：能動態の主語を by の後ろに置く。',
      '代名詞は主格→目的格に変える。he → by him、they → by them、I → by me。',
      '目的語のない文（自動詞の文）は受動態にできない。',
    ],
    sections: [
      {
        heading: '書きかえの3手順',
        body: `能動態から受動態への書きかえは、次の3手順で必ずできる。

■ 例文で確認
能動態：Many people love this song.
① 目的語 this song を主語にする → This song
② 動詞 love を be ＋ 過去分詞に → is loved（主語が単数・現在なので is）
③ 主語 Many people を by の後ろへ → by many people
完成：This song is loved by many people.

■ もう一つ
能動態：My father washed the car yesterday.
① the car → The car
② washed → was washed（過去・単数なので was）
③ My father → by my father
完成：The car was washed by my father yesterday.

■ be動詞の決め方
・時制は元の文と同じ（現在なら am/is/are、過去なら was/were）
・単数か複数かは「新しい主語」に合わせる
例）Ken made these cakes.（these cakes は複数・過去）
　→ These cakes were made by Ken.

■ 代名詞の変化
by の後ろは前置詞の目的語なので、目的格にする。
I → me／we → us／he → him／she → her／they → them／you → you／it → it
例）He wrote this letter. → This letter was written by him.（× by he は誤り）

★ ポイント：手順を飛ばさず、①主語 ②動詞 ③by の順に書く。特に②で be動詞の時制と数を確認する習慣をつけると、失点が激減する。`,
      },
      {
        heading: '受動態にするときの注意点',
        body: `機械的に書きかえられない場合がある。次の点に注意する。

■ 目的語が2つある文（SVOO）
He gave me a book. のように目的語が2つある文は、受動態が2通り作れる。くわしくは後の課で扱う。

■ 目的語がない文は受動態にできない
自動詞（目的語をとらない動詞）の文は受動態にできない。
go／come／run／walk／sleep／happen／arrive／appear／occur／rise／die
× The accident was happened yesterday.
○ The accident happened yesterday.
× He was arrived at the station.
○ He arrived at the station.

■ by を使わないほうが自然な場合
動作主が「人々一般」なら by them / by people は書かない。
○ English is spoken in Canada.
△ English is spoken by people in Canada.

■ 疑問文・否定文の書きかえ
Did Tom break the window? → Was the window broken by Tom?
Tom did not break the window. → The window was not broken by Tom.

■ 進行形・完了形の文
He is washing the car. → The car is being washed by him.（進行形の受動態）
He has washed the car. → The car has been washed by him.（現在完了の受動態）
これらは後の課でくわしく扱う。

⚠ 注意：happen（起こる）、appear（現れる）、rise（のぼる）、arrive（到着する）、belong to（属する）は受動態にしないこと。特に happen は「起こされた」と考えて be happened としてしまう誤りが多い。

★ ポイント：書きかえの前に「この動詞は目的語をとっているか」を確認する。目的語がなければ、そもそも受動態は作れない。`,
      },
    ],
    trapExamples: [
      {
        question: '受動態に書きかえなさい。He painted this picture.',
        wrongAnswer: 'This picture was painted by he.',
        trapExplanation: '元の文の主語 He をそのまま by の後ろに移してしまう。by は前置詞なので、後ろの代名詞は目的格にしなければならないことを忘れている。',
        correctAnswer: 'This picture was painted by him.',
        correctExplanation:
          'by の後ろは前置詞の目的語なので目的格 him にする。I → me、we → us、he → him、she → her、they → them と変える。paint の過去分詞は painted、主語 This picture は単数で時制は過去なので was を使う。',
      },
      {
        question: '誤りがあれば直しなさい。A big earthquake was happened in this area last year.',
        wrongAnswer: '誤りなし（そのままでよい）',
        trapExplanation: '「地震が起こされた」という日本語は不自然だが、was ＋ 過去分詞という形が整っているので正しく見えてしまう。happen が自動詞であることを知らないのが原因。',
        correctAnswer: 'A big earthquake happened in this area last year.',
        correctExplanation:
          'happen は目的語をとらない自動詞なので受動態にできない。同じ仲間に arrive・appear・rise・occur・die・belong がある。受動態が作れるのは目的語をとる他動詞だけである、という原則を確認しておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s134',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態③：過去分詞の不規則変化を固める',
    description: '受動態で必要になる不規則動詞の過去分詞を、型ごとに整理して覚える',
    intro: '受動態でつまずく原因の大半は、文法ではなく単語です。過去分詞が出てこなければ、どんなに手順を知っていても文が書けません。幸い不規則動詞には型があり、まとまりで覚えると一気に負担が減ります。ここで一度、受動態でよく使うものを総ざらいしましょう。',
    order: 634,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      'A-B-B型（過去形＝過去分詞）：make — made — made、build — built — built など。',
      'A-B-C型（3つとも異なる）：write — wrote — written、speak — spoke — spoken など。',
      'A-A-A型（3つとも同じ）：put・cut・read・hurt・set。',
      'A-B-A型（原形＝過去分詞）：come — came — come、run — ran — run、become — became — become。',
      '-en で終わる過去分詞（written・spoken・broken・eaten・taken・given）は受動態で頻出。',
    ],
    sections: [
      {
        heading: '型ごとに覚える',
        body: `不規則動詞は変化のしかたで4つの型に分けられる。

■ A-A-A型（原形・過去形・過去分詞がすべて同じ）
put — put — put（置く）
cut — cut — cut（切る）
read — read — read（読む）※発音は リード・レッド・レッド
hurt — hurt — hurt（傷つける）
set — set — set（置く）
let — let — let（させる）
例）The vegetables are cut into small pieces.

■ A-B-B型（過去形＝過去分詞）
make — made — made／build — built — built／buy — bought — bought
teach — taught — taught／catch — caught — caught／find — found — found
keep — kept — kept／send — sent — sent／sell — sold — sold
tell — told — told／hold — held — held／leave — left — left
lose — lost — lost／bring — brought — brought／think — thought — thought
hear — heard — heard／understand — understood — understood／win — won — won
例）This house was built in 1980.
　　The letter was sent last week.

■ A-B-C型（3つとも異なる）
write — wrote — written／speak — spoke — spoken／break — broke — broken
take — took — taken／give — gave — given／eat — ate — eaten
see — saw — seen／know — knew — known／sing — sang — sung
drink — drank — drunk／choose — chose — chosen／steal — stole — stolen
wear — wore — worn／drive — drove — driven／grow — grew — grown
throw — threw — thrown／forget — forgot — forgotten／begin — began — begun
例）This song was sung by many students.
　　My bike was stolen last night.

■ A-B-A型（原形＝過去分詞）
come — came — come／run — ran — run／become — became — become

★ ポイント：受動態で使うのは3番目の欄だけである。暗記のときは「原形と過去分詞」を対にして声に出すと定着が速い。`,
      },
      {
        heading: '受動態で出やすい動詞トップクラス',
        body: `入試の受動態で実際によく登場する動詞を、例文とセットで確認する。

■ build（建てる）— built
This temple was built about 400 years ago.

■ write（書く）— written
This book was written by a famous writer.

■ speak（話す）— spoken
French is spoken in some parts of Canada.

■ make（作る）— made
These desks are made in Japan.

■ take（撮る・連れて行く）— taken
This photo was taken in Kyoto.

■ break（こわす）— broken
The window was broken by the strong wind.

■ know（知る）— known
His name is known all over the world.

■ use（使う）— used
This room is used for meetings.

■ give（与える）— given
A nice present was given to me.

■ see（見る）— seen
Mt. Fuji can be seen from here.

■ hold（開催する）— held
The Olympics were held in Tokyo in 2021.

■ invite（招待する）— invited
We were invited to the party.

⚠ 注意：発音とつづりで迷いやすいもの
・read の過去分詞は read（つづりは同じ、発音はレッド）
・grown（grow）と known（know）は n を落としやすい
・forgotten（forget）は t が2つ
・written（write）は t が2つ

★ ポイント：受動態の問題で空所に入るのはほぼ必ず過去分詞である。空所の前に be動詞があったら、迷わず3番目の欄を思い出す。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適切な形に直しなさい。This bridge was （ build ） fifty years ago.',
        wrongAnswer: 'builded',
        trapExplanation: '過去分詞の作り方として -ed を付ける規則変化を当てはめてしまう。build が不規則動詞で built という形を持つことを覚えていない。',
        correctAnswer: 'built',
        correctExplanation:
          'build は build — built — built と変化する不規則動詞で、過去形も過去分詞も built。したがって was built が正しい。buy — bought — bought、teach — taught — taught など、同じ A-B-B型 の仲間とまとめて覚えておくとよい。',
      },
      {
        question: '（　）内の語を適切な形に直しなさい。The window was （ break ） by the strong wind.',
        wrongAnswer: 'broke',
        trapExplanation: 'break の過去形 broke が真っ先に浮かび、そのまま入れてしまう。break — broke — broken の3番目まで確認していないのが原因。',
        correctAnswer: 'broken',
        correctExplanation:
          '受動態は be動詞 ＋ 過去分詞なので、was の後ろには過去分詞 broken が入る。broke は過去形なので使えない。write — wrote — written、speak — spoke — spoken、take — took — taken など、-en で終わる過去分詞を持つ動詞は受動態で頻出するので確実にしておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s135',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態④：by 〜 を省略する場合と、by の使い方',
    description: 'by 〜 を書くべき場合と省略すべき場合を判断できるようにする',
    intro: '教科書の受動態の例文を見ていると、by 〜 が付いている文と付いていない文があります。実は、英語では by を省略するほうが多数派です。だれがやったかを言わなくてよいからこそ受動態を使う、という事情があるからです。書くべき場面を見きわめましょう。',
    order: 635,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      'by 〜 を書くのは、動作主が特定の人・物で、伝える価値があるときだけ。',
      '動作主が不明・一般の人々・言うまでもないときは by を省略する。',
      'by の後ろの代名詞は目的格（by him / by her / by them / by me）。',
      'by them・by people・by us は原則として省略する。',
      '省略された by の内容を答えさせる設問が出ることがある。',
    ],
    sections: [
      {
        heading: 'by を書く場合・書かない場合',
        body: `受動態の by 〜 は「だれによって」を示すが、いつも必要なわけではない。

■ by を書く場合
動作主が特定の人・団体で、その情報に意味があるとき。
例）This novel was written by Natsume Soseki.（だれが書いたかが重要）
　　The window was broken by my brother.（だれがこわしたかが問題）
　　This song is loved by young people.（愛しているのがだれかを示したい）

■ by を書かない場合
①動作主がわからない
　My bag was stolen on the train.（だれが盗んだかわからない）
②動作主が一般の人々
　English is spoken in many countries.（by people は不要）
　This flower is called a sunflower.（by us は不要）
③動作主が明らかで言うまでもない
　The letter was delivered this morning.（郵便配達員に決まっている）
　He was taken to the hospital.（救急隊や周囲の人に決まっている）

■ 統計的な事実
実際の英文では、受動態の文の大半で by 〜 が省略されている。「受動態＝by がある文」と思いこまないこと。

★ ポイント：受動態を使う動機の一つが「動作主を言わずにすませたい」である。したがって by がないのは自然なことで、むしろ by を付けるかどうかを毎回考える必要がある。`,
      },
      {
        heading: 'by の使い方でまちがえやすい点',
        body: `by そのものにも注意点がある。

■ 代名詞は目的格
by me／by us／by him／by her／by them／by you／by it
× by I／× by he／× by they は誤り。

■ by と with のちがい
by は「動作をした人・もの」、with は「使った道具」を表す。
例）The letter was written by Tom.（トムが書いた）
　　The letter was written with a pen.（ペンで書かれた）
　　The room was cleaned by my mother with a new vacuum cleaner.

■ by の位置
ふつうは文末に置くが、場所や時を表す語句がある場合は by を先に置くことが多い。
例）This picture was painted by Picasso in 1937.
　　The cake was made by my sister yesterday.

■ 受動態の答えとして by を書かせる問題
能動態から受動態への書きかえでは by 〜 を必ず書く。
Tom uses this computer. → This computer is used by Tom.
一方、動作主が they / people / we の場合は書かなくてよい。
They speak English in Australia. → English is spoken in Australia.

⚠ 注意：by の後ろに動作主を置くのであって、場所や時間を置くのではない。× This school was built by 1950. は誤り（in 1950 が正しい）。by 1950 は「1950年までに」という別の意味になる。

★ ポイント：by の後ろに来るのは「その動作をした人・もの」だけ。道具なら with、材料なら of / from、場所なら in / at を使う。前置詞を混同しないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '受動態に書きかえなさい。They speak Spanish in Mexico.',
        wrongAnswer: 'Spanish is spoken by them in Mexico.',
        trapExplanation: '書きかえの手順どおりに主語 They を by の後ろへ移してしまう。この They が「メキシコの人々一般」を指す漠然とした主語であることに気づいていない。',
        correctAnswer: 'Spanish is spoken in Mexico.',
        correctExplanation:
          '能動態の主語が they / people / we / someone のように「一般の人々」を指す場合、受動態では by 〜 を省略するのがふつうである。by them を残すと「その人たちによって」という限定された意味になり不自然になる。手順は手順として、省略の判断を必ず加えること。',
      },
      {
        question: '（　）に by か with を入れなさい。This letter was written （　） a pencil.',
        wrongAnswer: 'by',
        trapExplanation: '受動態といえば by、と機械的に結びつけてしまう。空所の後ろが道具（えんぴつ）であって人ではないことを見ていない。',
        correctAnswer: 'with',
        correctExplanation:
          'by は「動作をした人・もの」、with は「使った道具」を表す。えんぴつは道具なので with a pencil となる。人を示すなら This letter was written by Ken. のようになる。同じ文に両方入ることもあり、This letter was written by Ken with a pencil. も成り立つ。',
      },
    ],
  },

  {
    id: 'koko_eigo_s136',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑤：受動態にできない動詞と、受け身に見える表現',
    description: '自動詞や状態動詞の扱いを知り、受動態にしてはいけない文を見抜く',
    intro: '「事故が起きた」を英語にするとき、was happened と書いてしまう人が毎年たくさんいます。日本語の「〜された」という感覚に引っぱられるからです。ところが英語では、そもそも受動態にできない動詞があります。そのリストを持っておくだけで、確実に点を守れます。',
    order: 636,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '目的語をとらない自動詞は受動態にできない：happen・occur・appear・arrive・rise・die・come・go。',
      '状態を表す一部の他動詞も受動態にしにくい：have（持つ）・resemble（似ている）・suit。',
      'belong to（属する）は受動態にしない。× is belonged to は誤り。',
      '群動詞（laugh at / speak to / look after）は全体を1つの動詞として受動態にする。',
      '過去分詞が形容詞のように使われる表現（be interested in など）は次の課で扱う。',
    ],
    sections: [
      {
        heading: '受動態にできない動詞',
        body: `受動態が作れるのは「目的語をとる他動詞」だけである。目的語がなければ、主語に持ってくるものがない。

■ 自動詞（目的語をとらない）
happen（起こる）／occur（起こる）／appear（現れる）／disappear（消える）
arrive（到着する）／come（来る）／go（行く）／walk（歩く）／run（走る）
rise（のぼる）／fall（落ちる）／die（死ぬ）／live（住む）／sleep（眠る）
例）× The accident was happened. → ○ The accident happened.
　　× He was died two years ago. → ○ He died two years ago.
　　× The sun is risen in the east. → ○ The sun rises in the east.

■ 状態を表す他動詞
have（持っている）／resemble（似ている）／suit（似合う）／cost（費用がかかる）／lack（欠いている）
× A car is had by him. → ○ He has a car.
× She is resembled by her mother. → ○ She resembles her mother.

■ belong to（属する）
× This bag is belonged to me. → ○ This bag belongs to me.

■ よくある誤りの原因
日本語では「起こる」を「起こされた」、「似ている」を「似られている」とは言わないのに、英語にするときだけ受動態にしてしまう。日本語で受け身に言えるかどうかを確かめるのが有効なチェックになる。

★ ポイント：受動態を書く前に「この動詞の後ろに目的語（名詞）が置けるか」を確認する。置けなければ自動詞なので、受動態は作れない。`,
      },
      {
        heading: '群動詞の受動態',
        body: `動詞と前置詞・副詞がセットで1つの意味を作るものを群動詞という。受動態にするときは、セットのまま扱う。

■ 代表的な群動詞
laugh at 〜（〜を笑う）／speak to 〜（〜に話しかける）／look after 〜（〜の世話をする）
take care of 〜（〜の世話をする）／look up to 〜（〜を尊敬する）／run over 〜（〜をひく）
put off 〜（〜を延期する）／turn on 〜（〜をつける）／turn off 〜（〜を消す）
depend on 〜（〜に頼る）／listen to 〜（〜を聞く）／look at 〜（〜を見る）

■ 受動態の作り方
群動詞の前置詞・副詞は消さずに残す。
Everyone laughed at him.
→ He was laughed at by everyone.（at を落とさない）

A stranger spoke to me.
→ I was spoken to by a stranger.

My aunt looks after the children.
→ The children are looked after by my aunt.

They put off the meeting.
→ The meeting was put off.

■ 前置詞が2つ並ぶ形
He was laughed at by everyone. のように、at と by が並ぶ形になる。見た目が不自然に感じられるが、これが正しい。at を落とすと「彼が笑われた」ではなく意味が通らなくなる。

⚠ 注意：take care of の受動態は The baby was taken care of by her. となる。of を落とさないこと。

★ ポイント：群動詞は「動詞＋前置詞」で1つの他動詞だと考える。受動態にしても、そのかたまりは分解しない。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りがあれば直しなさい。This dictionary is belonged to my brother.',
        wrongAnswer: '誤りなし（そのままでよい）',
        trapExplanation: 'belong to に to があるので他動詞のように見え、be ＋ 過去分詞 の形が整っているため正しく感じられる。belong が自動詞であることを知らないのが原因。',
        correctAnswer: 'This dictionary belongs to my brother.',
        correctExplanation:
          'belong to は「〜のものである」という意味の自動詞なので受動態にできない。能動態のまま belongs to を使う。主語 This dictionary は3人称単数なので belongs と s が付く点も確認する。同じく happen・appear・die も受動態にしない。',
      },
      {
        question: '受動態に書きかえなさい。Everyone laughed at Tom.',
        wrongAnswer: 'Tom was laughed by everyone.',
        trapExplanation: '動詞 laugh だけを受動態にして、後ろの前置詞 at を落としてしまう。laugh at で1つの他動詞として働いていることを見落としている。',
        correctAnswer: 'Tom was laughed at by everyone.',
        correctExplanation:
          'laugh at は群動詞なので、受動態にするときも at を残す。したがって was laughed at by everyone となり、at と by が並ぶ形になる。speak to → be spoken to、look after → be looked after、take care of → be taken care of も同じ作りである。',
      },
    ],
  },

  // ───────────────── 7. 受動態の時制・疑問文・否定文（s137〜s140） ─────────────────
  {
    id: 'koko_eigo_s137',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑥：時制は be動詞で決まる（現在・過去・未来）',
    description: '受動態の時制の作り方を、be動詞の形に注目して整理する',
    intro: '受動態の文で「いつのことか」を決めているのは、実は過去分詞ではなく be動詞のほうです。過去分詞はどの時制でも姿を変えません。この分業がわかると、現在・過去・未来のどれでも同じやり方で作れるようになります。',
    order: 637,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '現在の受動態＝am / is / are ＋ 過去分詞。',
      '過去の受動態＝was / were ＋ 過去分詞。',
      '未来の受動態＝will be ＋ 過去分詞（will の後ろは原形 be）。',
      'be going to の受動態＝be going to be ＋ 過去分詞。',
      '過去分詞は時制によって形を変えない。時制を担当するのは be動詞だけ。',
    ],
    sections: [
      {
        heading: '3つの時制を並べて確認する',
        figureId: 'lf_kokoeigoext04_137',
        body: `受動態の時制は、be動詞の形だけで決まる。

■ 現在：am / is / are ＋ 過去分詞
This room is used every day.（この部屋は毎日使われている）
These cars are made in Japan.
I am invited to many parties.

■ 過去：was / were ＋ 過去分詞
This school was built in 1950.（この学校は1950年に建てられた）
These pictures were taken last year.
The window was broken yesterday.

■ 未来：will be ＋ 過去分詞
A new library will be built next year.（来年、新しい図書館が建てられる）
The meeting will be held on Monday.
⚠ 注意：will の後ろは動詞の原形なので be になる。× will is built／× will built は誤り。

■ be going to の受動態：be going to be ＋ 過去分詞
The old building is going to be taken down.
The party is going to be held at the hall.

■ 主語による be動詞の選び方（過去）
単数主語 → was／複数主語 → were
例）The letter was sent yesterday.（単数）
　　The letters were sent yesterday.（複数）

★ ポイント：受動態の骨組みは「be動詞 ＋ 過去分詞」で固定。変わるのは be動詞の部分だけである。だから時制の問題は be動詞をどうするかだけを考えればよい。`,
      },
      {
        heading: '時制の一致と、時を表す語句',
        body: `受動態でも、時を表す語句と時制を合わせる必要がある。

■ 時を表す語句と時制の対応
every day / usually / always → 現在
yesterday / last year / 〜 ago / in 1950 → 過去
tomorrow / next week / soon → 未来

例）This room ( is / was ) cleaned every morning. → is
　　This temple ( is / was ) built in 1300. → was
　　A new station ( will be / is ) built next year. → will be

■ 能動態からの書きかえと時制
能動態の時制をそのまま受動態に写す。
They build a new house every year. → A new house is built every year.
They built a new house last year. → A new house was built last year.
They will build a new house next year. → A new house will be built next year.

■ 主節と従属節の時制
He said that the letter was written in English.
主節が過去なので、that 以下も過去の受動態になる。

■ 助動詞のある受動態（予告）
will 以外の助動詞でも同じで、「助動詞 ＋ be ＋ 過去分詞」になる。
Mt. Fuji can be seen from here.
This work must be finished today.
くわしくは s140 で扱う。

⚠ 注意：未来の受動態で will be を will been としたり、be を落として will built としたりする誤りが多い。助動詞の後ろは必ず原形 be である。

★ ポイント：受動態の時制問題は「be動詞をどの形にするか」の問題である。文中の時を表す語句を探して、そこから be動詞を決める。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適切な形に直しなさい。A new bridge will （ build ） next year.',
        wrongAnswer: 'built',
        trapExplanation: '「建てられる」という受け身から過去分詞 built を思いつくものの、will の直後にそのまま置いてしまい、be を入れ忘れる。助動詞と過去分詞の間に be が必要なことを見落としている。',
        correctAnswer: 'be built',
        correctExplanation:
          '未来の受動態は will be ＋ 過去分詞の形になる。will の後ろは原形なので be、その後ろに過去分詞 built が続く。× will built／× will is built／× will been built はすべて誤り。助動詞 ＋ be ＋ 過去分詞という3語構成で覚える。',
      },
      {
        question: '（　）内から適切なものを選びなさい。This temple （ is / was ） built about four hundred years ago.',
        wrongAnswer: 'is',
        trapExplanation: '「今も寺は建っている」ので現在形だと考えてしまう。受動態の時制は「建てられた時点」で決まることを見落としている。',
        correctAnswer: 'was',
        correctExplanation:
          'about four hundred years ago は過去の一点を示すので、be動詞は過去形 was になる。「今も建っている」という現在の状態を言いたいなら This temple has stood here for four hundred years. のように別の文にする。文中の時を表す語句から be動詞を決めるのが原則である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s138',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑦：現在完了の受動態 have been ＋ 過去分詞',
    description: '現在完了と受動態を組み合わせた形を作り、意味を読み取れるようにする',
    intro: 'ここまで学んだ現在完了と受動態が、ついに合体します。「50年間ずっと愛され続けている」のように、「今まで続いている」と「される側」を同時に言いたい場面は意外と多いのです。形は have been ＋ 過去分詞。been さえ落とさなければ難しくありません。',
    order: 638,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '形は have/has been ＋ 過去分詞。been は be の過去分詞。',
      '意味は「（今まで）〜されてきた・〜されてしまった」。',
      '現在完了の3用法（継続・完了／結果・経験）がそのまま受動態でも使える。',
      '否定文は have/has not been ＋ 過去分詞、疑問文は Have/Has ＋ 主語 ＋ been ＋ 過去分詞。',
      '現在完了進行形の受動態（have been being 〜）は使わない。',
    ],
    sections: [
      {
        heading: '形と意味',
        figureId: 'lf_kokoeigoext04_138',
        body: `現在完了（have ＋ 過去分詞）と受動態（be ＋ 過去分詞）を合わせると、have been ＋ 過去分詞になる。

■ 組み立て方
現在完了：have ＋ 過去分詞
受動態：be ＋ 過去分詞
合わせると：have ＋ be の過去分詞（been）＋ 過去分詞
つまり have/has been ＋ 過去分詞。

■ 例文
This song has been loved by young people for fifty years.
（この歌は50年間、若い人たちに愛され続けている）※継続
The room has just been cleaned.
（部屋はちょうどそうじされたところだ）※完了
My bike has been stolen.
（自転車を盗まれてしまった。今もない）※結果
This book has been read by many students.
（この本は多くの生徒に読まれてきた）※経験

■ 否定文・疑問文
否定：The letter has not been sent yet.（手紙はまだ送られていない）
疑問：Has the work been finished yet?（仕事はもう終わりましたか）
　　 — Yes, it has. / No, it has not.

■ 主語による使い分け
have か has かは主語で決まる。been と過去分詞の部分は変わらない。
例）These rooms have been used for meetings.
　　This room has been used for meetings.

★ ポイント：have been ＋ 過去分詞は3語で1セット。been を書き落とすと × has cleaned（そうじした＝能動）になってしまい、意味が正反対になる。`,
      },
      {
        heading: '過去形の受動態・過去完了との区別',
        body: `似た形が並ぶので、それぞれの意味を区別しておく。

■ 3つの形を並べる
① The room was cleaned yesterday.（昨日そうじされた）※過去の受動態
② The room has been cleaned.（そうじされて、今きれいだ）※現在完了の受動態
③ The room is cleaned every day.（毎日そうじされる）※現在の受動態

①は過去の事実だけ、②は今の状態まで含む、③は習慣。この差が和訳や内容一致で問われる。

■ 能動態との対応
Someone has cleaned the room.（能動：だれかが部屋をそうじした）
→ The room has been cleaned.（受動：部屋はそうじされた）
能動態の have cleaned が、受動態では have been cleaned になる。

■ よくある誤り
× The room has cleaned.（そうじした側になってしまう）
× The room has been clean.（clean は形容詞。過去分詞 cleaned が必要）
× The room is been cleaned.（is been という並びは存在しない）

■ 現在完了進行形の受動態は使わない
「ずっとそうじされ続けている」を have been being cleaned とは言わない。中学・高校入試の範囲では、現在完了の受動態 have been cleaned までで足りる。

⚠ 注意：受動態の完了形は yet・just・already・for・since といっしょによく使われる。これらの副詞の位置は、現在完了のときと同じ（just / already は been の前、yet は文末）。
例）The work has already been finished.
　　The work has not been finished yet.

★ ポイント：have been ＋ 過去分詞 を見たら、「今までに〜されている」と訳す。been があるかないかで、する側とされる側が入れかわる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の自転車は盗まれてしまいました（今もありません）」を英語にしなさい。',
        wrongAnswer: 'My bike has stolen.',
        trapExplanation: '現在完了は have ＋ 過去分詞だと覚えているため、has stolen で完成したと思ってしまう。自転車は「盗む側」ではなく「盗まれる側」であることが形に反映されていない。',
        correctAnswer: 'My bike has been stolen.',
        correctExplanation:
          '現在完了の受動態は have/has been ＋ 過去分詞である。been を入れないと「自転車が盗んだ」という意味になってしまう。steal — stole — stolen の過去分詞は stolen。「今もない」という結果を含むので現在完了がふさわしい。',
      },
      {
        question: '正しい語順に並べかえなさい。( been / the letter / has / sent / already )',
        wrongAnswer: 'The letter has been sent already.',
        trapExplanation: 'already を文末に置いても意味は通じるため、副詞の定位置を確認せずに並べてしまう。already は have と過去分詞の間に入るという原則を思い出せていない。',
        correctAnswer: 'The letter has already been sent.',
        correctExplanation:
          'already は have/has の直後に置くのが原則なので、has already been sent の順になる。yet なら文末に置き、The letter has not been sent yet. となる。受動態が加わっても副詞の位置のルールは変わらない、と押さえておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s139',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑧：否定文と疑問文の作り方',
    description: '受動態の否定文・疑問文を、be動詞を動かすだけで作れるようにする',
    intro: "受動態の否定文と疑問文で、また don't や did を出してしまう人がいます。しかし受動態の主役は be動詞です。be動詞の文なら、否定は not を後ろに、疑問は be動詞を前に出すだけでした。これまで学んできたルールが、そのまま使えるのです。",
    order: 639,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '否定文は be動詞の直後に not を置く。is not ＋ 過去分詞、was not ＋ 過去分詞。',
      '疑問文は be動詞を主語の前に出す。Is this book read by many people?',
      '答え方は Yes, it is. / No, it is not.（do・does・did は使わない）。',
      '疑問詞のある疑問文は、疑問詞 ＋ be動詞 ＋ 主語 ＋ 過去分詞 〜? の語順。',
      '「だれによって」は By whom 〜? または Who 〜 by? でたずねる。',
    ],
    sections: [
      {
        heading: '否定文と疑問文',
        body: `受動態は be動詞の文なので、否定文・疑問文の作り方も be動詞の文と同じである。

■ 否定文：be動詞 ＋ not ＋ 過去分詞
This book is not read by young people.（この本は若い人には読まれていない）
The window was not broken by Tom.
These cars are not made in Japan.
短縮形：is not → isn't／are not → aren't／was not → wasn't／were not → weren't

■ 疑問文：be動詞 ＋ 主語 ＋ 過去分詞 〜?
Is this book read by many people?（この本は多くの人に読まれていますか）
Was the window broken by Tom?
Are these cars made in Japan?

■ 答え方
Yes, it is. / No, it is not.
Yes, they are. / No, they are not.
⚠ 注意：× Yes, it does. / × Yes, it did. は誤り。疑問文の先頭の語をそのまま返す。

■ 未来・助動詞の受動態の否定・疑問
Will the meeting be held tomorrow? — Yes, it will.
The meeting will not be held tomorrow.
Can this word be used in English? — Yes, it can.

★ ポイント：受動態の否定文・疑問文で do / does / did は絶対に使わない。be動詞を動かすだけでよい、という一点を徹底する。`,
      },
      {
        heading: '疑問詞のある疑問文',
        body: `疑問詞を使って受動態でたずねる形も入試で問われる。

■ 語順
疑問詞 ＋ be動詞 ＋ 主語 ＋ 過去分詞 〜?
例）When was this school built?（この学校はいつ建てられましたか）
　　Where are these cars made?（これらの車はどこで作られていますか）
　　Why was the game canceled?
　　How is this word used?

■ 「だれによって」をたずねる
By whom was this picture painted?（かたい言い方）
Who was this picture painted by?（会話でふつうに使う）
どちらも「この絵はだれによって描かれましたか」。by を文末に残す形が口語的である。

■ 主語をたずねる場合
What language is spoken in Brazil?（ブラジルでは何語が話されていますか）
疑問詞そのものが主語なので、語順は入れかえない。
Who was invited to the party?（だれがパーティーに招待されましたか）

■ 答え方の例
When was this school built? — It was built in 1950.
Where are these cars made? — They are made in Germany.
Who was this picture painted by? — It was painted by Picasso.

⚠ 注意：受動態の疑問文でも、be動詞の時制と数を主語に合わせる。These cars の主語には are、This car には is を使う。

★ ポイント：疑問詞疑問文は「疑問詞を前に出し、残りを疑問文の語順にする」だけ。受動態でもこの手順は変わらない。`,
      },
    ],
    trapExamples: [
      {
        question: '疑問文に直しなさい。This song is sung by many people.',
        wrongAnswer: 'Does this song sung by many people?',
        trapExplanation: '疑問文といえば do / does で始める、という一般動詞のクセが出てしまう。文の動詞が be動詞 is であることを見落としている。',
        correctAnswer: 'Is this song sung by many people?',
        correctExplanation:
          '受動態は be動詞の文なので、疑問文は be動詞を主語の前に出すだけでよい。Is this song sung by many people? が正解で、答えは Yes, it is. / No, it is not. となる。受動態の文に do / does / did は登場しない。',
      },
      {
        question: '下線部をたずねる疑問文にしなさい。This temple was built in 1650.（in 1650 が下線部）',
        wrongAnswer: 'When did this temple build?',
        trapExplanation: '「いつ建てましたか」と能動態のつもりで組み立ててしまい、did を使ったうえに build のままにしている。寺は建てられる側であることが形に反映されていない。',
        correctAnswer: 'When was this temple built?',
        correctExplanation:
          '受動態の疑問詞疑問文は「疑問詞 ＋ be動詞 ＋ 主語 ＋ 過去分詞」の語順になる。したがって When was this temple built? が正しい。答えは It was built in 1650. となる。did を使うと能動態になり、「この寺が何かを建てた」という意味になってしまう。',
      },
    ],
  },

  {
    id: 'koko_eigo_s140',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑨：助動詞のある受動態と、注意すべき形',
    description: 'can be / must be / should be ＋ 過去分詞の形を作り、意味を読み取る',
    intro: '「ここから富士山が見えます」を英語にすると、実は受動態になります。Mt. Fuji can be seen from here. 助動詞と受動態が組み合わさる形は、看板や案内の英語でも頻繁に登場します。助動詞の後ろは必ず be、この一点さえ守れば作れます。',
    order: 640,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '助動詞のある受動態は「助動詞 ＋ be ＋ 過去分詞」。助動詞の後ろは必ず原形 be。',
      'can be seen（見える）／must be finished（終えられねばならない）／should be done（されるべきだ）。',
      '否定は助動詞 ＋ not ＋ be ＋ 過去分詞。疑問は助動詞を主語の前に出す。',
      'have to の受動態は have to be ＋ 過去分詞。',
      '進行形の受動態は be being ＋ 過去分詞（発展）。The house is being built now.',
    ],
    sections: [
      {
        heading: '助動詞 ＋ be ＋ 過去分詞',
        body: `助動詞の後ろは必ず動詞の原形が来る。受動態の be動詞も原形 be になる。

■ 基本の形
助動詞 ＋ be ＋ 過去分詞
例）Mt. Fuji can be seen from here.（ここから富士山が見える）
　　This work must be finished by tomorrow.（この仕事は明日までに終えられねばならない）
　　The letter should be sent today.（手紙は今日送られるべきだ）
　　This book may be read by children.（この本は子どもに読まれるかもしれない）
　　The window will be closed soon.

■ 助動詞ごとの意味
can be ＋ 過去分詞 → 「〜されうる・〜できる」
must be ＋ 過去分詞 → 「〜されなければならない」
should be ＋ 過去分詞 → 「〜されるべきだ」
may be ＋ 過去分詞 → 「〜されるかもしれない」
will be ＋ 過去分詞 → 「〜されるだろう」
have to be ＋ 過去分詞 → 「〜される必要がある」

■ 否定文・疑問文
否定：This flower cannot be seen in winter.
　　 The rule must not be broken.（規則は破られてはならない）
疑問：Can this word be used here? — Yes, it can.
　　 Must this work be done today?

■ よく使われる場面
・看板や掲示：Smoking is not allowed here.（喫煙は許されていない）
・説明文：This machine can be used easily.
・指示：The homework must be handed in by Friday.

★ ポイント：助動詞 ＋ be ＋ 過去分詞 の3語で1セット。be を落とすと × can seen となり、意味が通らなくなる。`,
      },
      {
        heading: '進行形の受動態と、能動態への書きかえ',
        body: `やや発展的な形だが、難関私立で出題されることがある。

■ 進行形の受動態：be being ＋ 過去分詞
「今〜されているところだ」を表す。
例）The house is being built now.（その家は今建てられているところだ）
　　The road was being repaired then.（その道路はそのとき修理されているところだった）
現在完了進行形の受動態（have been being ＋ 過去分詞）は実際にはほとんど使われない。

■ 能動態への書きかえ
受動態から能動態に戻すときは、by の後ろを主語にする。
This song can be sung by children. → Children can sing this song.
The room must be cleaned by us. → We must clean the room.
by 〜 がない場合は、主語に we / you / they / people などを補う。
This word is not used now. → We do not use this word now.
　　　　　　　　　　　　　→ People do not use this word now.

■ 受動態にすると自然になる場面
「〜が見える」「〜が聞こえる」を英語らしく言うと受動態になることがある。
Mt. Fuji can be seen from my house.（家から富士山が見える）
The music could be heard from far away.
日本語につられて I can see Mt. Fuji. としても誤りではないが、「見える」という状況説明では受動態が自然である。

⚠ 注意：be being ＋ 過去分詞 の being を落として × The house is built now. とすると「今建てられる」という習慣の意味になり、進行の意味が消える。

★ ポイント：助動詞・進行形・完了形のどれと組み合わせても、受動態の核は「be ＋ 過去分詞」で変わらない。be の形（be / being / been / is / was）だけが変化する。`,
      },
    ],
    trapExamples: [
      {
        question: '「ここから海が見えます」を英語にしなさい（受動態を使うこと）。',
        wrongAnswer: 'The sea can seen from here.',
        trapExplanation: '助動詞の後ろは原形だと覚えているため、can の直後に過去分詞 seen を置いてしまう。受動態には be動詞が必要で、その原形 be が入ることを忘れている。',
        correctAnswer: 'The sea can be seen from here.',
        correctExplanation:
          '助動詞のある受動態は「助動詞 ＋ be ＋ 過去分詞」の3語構成である。can be seen が正しい。× can seen／× can is seen／× can was seen はすべて誤り。must be done、should be sent、will be built も同じ作りである。',
      },
      {
        question: '能動態に書きかえなさい。This computer must be used carefully by everyone.',
        wrongAnswer: 'Everyone must used this computer carefully.',
        trapExplanation: '受動態の過去分詞 used をそのまま能動態にも持ちこんでしまう。助動詞 must の後ろは動詞の原形になることを見落としている。',
        correctAnswer: 'Everyone must use this computer carefully.',
        correctExplanation:
          'by の後ろの everyone を主語にし、must の後ろは原形 use にする。受動態では be が入っていたが、能動態では助動詞のすぐ後ろに一般動詞の原形が来る。× must used／× must uses は助動詞の基本ルールに反するので誤りである。',
      },
    ],
  },

  // ───────────────── 8. by以外の前置詞をとる受動態（s141〜s143） ─────────────────
  {
    id: 'koko_eigo_s141',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑩：be known to / for / as の使い分け',
    description: 'known の後ろに来る3つの前置詞を、意味のちがいとともに区別する',
    intro: '「この町は温泉で有名です」「彼の名前は世界中に知られています」。どちらも日本語では「知られる」ですが、英語では後ろの前置詞が別のものになります。to・for・as の3つ。前置詞1語で意味が変わるので、入試では格好の出題材料になります。',
    order: 641,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'be known to 〜＝「〜に知られている」（後ろは人・範囲）。',
      'be known for 〜＝「〜で有名だ」（後ろは有名な理由・特徴）。',
      'be known as 〜＝「〜として知られている」（後ろは肩書き・呼び名）。',
      'be known by 〜＝「〜によって判断される」（ことわざなどの特殊な用法）。',
      'be known to all＝みんなに知られている。all over the world と組み合わせることも多い。',
    ],
    sections: [
      {
        heading: '3つの前置詞を意味で分ける',
        body: `known は「知られている」だが、後ろの前置詞によって何を言っているかが変わる。

■ be known to 〜（〜に知られている）
to の後ろには「知っている人・範囲」が来る。
例）His name is known to everyone in this town.（彼の名前はこの町のみんなに知られている）
　　This fact is known to few people.
　　He is known to all the students.
※ 「世界中に知られている」は is known all over the world と、to を使わない形もよく使われる。

■ be known for 〜（〜で有名だ）
for の後ろには「有名になっている理由・特徴」が来る。
例）This town is known for its hot springs.（この町は温泉で有名だ）
　　Kyoto is known for its old temples.
　　He is known for his kindness.
※ be famous for 〜 と同じ意味である。

■ be known as 〜（〜として知られている）
as の後ろには「肩書き・呼び名・立場」が来る。
例）He is known as a great writer.（彼は偉大な作家として知られている）
　　This area is known as the Kitchen of Japan.
　　She is known as Mika among her friends.

■ 見分けの目安
後ろが「人」→ to／後ろが「特徴・理由」→ for／後ろが「呼び名・肩書き」→ as
この対応を覚えておけば、空所補充で迷わない。

★ ポイント：for と as の区別は「その名詞が主語そのものを言いかえているか」で決まる。He is known as a writer. は「彼＝作家」だが、He is known for his novels. は「彼≠小説」である。`,
      },
      {
        heading: 'known を使ったその他の表現',
        body: `known のまわりには、入試でよく出る表現がいくつかある。

■ be known by 〜（〜によって判断される）
ことわざで使われる特殊な用法。
例）A man is known by the company he keeps.（人は付き合う仲間で判断される）
ふつうの「〜に知られている」では by は使わないので注意する。

■ be well known（よく知られている）
例）He is well known in this country.
　　This is a well-known story.（ハイフンでつないで形容詞にする）

■ 書きかえ
This town is known for its beautiful beaches.
＝ This town is famous for its beautiful beaches.
His name is known to everyone.
＝ Everyone knows his name.（能動態に戻す）

■ 似た形の表現
be interested in（〜に興味がある）
be surprised at（〜に驚く）
be pleased with（〜を喜ぶ）
be satisfied with（〜に満足する）
これらも by ではない前置詞をとる受動態で、次の課でまとめて扱う。

⚠ 注意：be known の後ろに by を置いて「〜に知られている」としてはいけない。
× His name is known by everyone.（ことわざ以外では不自然）
○ His name is known to everyone.

★ ポイント：known の3つの前置詞は、for と as を対比させて覚えると混乱しにくい。for は「理由」、as は「名前・肩書き」である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適切な前置詞を入れなさい。This city is known （　） its beautiful old castle.',
        wrongAnswer: 'to',
        trapExplanation: 'be known といえば to、と一つだけ覚えていると、後ろが何であっても to を入れてしまう。空所の後ろが「城」という特徴であって人ではないことを見ていない。',
        correctAnswer: 'for',
        correctExplanation:
          '「美しい古い城で有名だ」という有名になっている理由を示すので be known for を使う。to を使うのは「〜に知られている」と知る側の人を示すときである。be famous for と同じ意味だと覚えておくと選びやすい。',
      },
      {
        question: '（　）に適切な前置詞を入れなさい。He is known （　） the father of modern science.',
        wrongAnswer: 'for',
        trapExplanation: '「〜で有名だ」という訳を当てはめて for を選んでしまう。後ろの the father of modern science が彼自身の呼び名であって、理由ではないことを見落としている。',
        correctAnswer: 'as',
        correctExplanation:
          '空所の後ろが「近代科学の父」という肩書きであり、彼そのものを言いかえている。したがって be known as を使う。for の後ろに来るのは his great discoveries のような理由・業績で、主語と同じものを指す語ではない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s142',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑪：be covered with / filled with / surprised at',
    description: '感情や状態を表す受動態が、by 以外の前置詞をとることを覚える',
    intro: '「山が雪でおおわれている」を英語にするとき、by snow としてしまいがちです。ところが正解は with snow。雪は「動作をした人」ではなく「おおっている中身」だからです。感情や状態を表す受動態には、こうした専用の前置詞がついています。まとめて覚えてしまいましょう。',
    order: 642,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'be covered with 〜＝「〜でおおわれている」。',
      'be filled with 〜＝「〜でいっぱいだ」（＝be full of）。',
      'be surprised at 〜＝「〜に驚く」（by も可だが at が基本）。',
      'be pleased with 〜／be satisfied with 〜／be excited about 〜。',
      '感情を表す動詞の受動態は、日本語では能動的に「驚く・喜ぶ」と訳す。',
    ],
    sections: [
      {
        heading: 'with をとるグループ',
        body: `「何でおおわれているか」「何でいっぱいか」を示すときは with を使う。動作をした人ではないので by にはならない。

■ be covered with 〜（〜でおおわれている）
例）The mountain is covered with snow.（山は雪でおおわれている）
　　The table was covered with a white cloth.
　　The ground was covered with fallen leaves.

■ be filled with 〜（〜でいっぱいだ）
例）The box was filled with old books.（箱は古い本でいっぱいだった）
　　Her eyes were filled with tears.
※ 同じ意味の be full of 〜 も覚える。The box was full of old books.

■ be pleased with 〜（〜を喜ぶ・気に入る）
例）She was pleased with the present.
　　My teacher was pleased with my report.

■ be satisfied with 〜（〜に満足する）
例）He is satisfied with his new job.

■ be crowded with 〜（〜で混雑している）
例）The station was crowded with people.

■ be caught in 〜（〜にあう・巻きこまれる）
例）I was caught in a shower on my way home.（帰る途中でにわか雨にあった）

★ ポイント：with のグループは「中身・材料・道具」を示している。by は「動作主」専用だと切り分けておくと選択に迷わない。`,
      },
      {
        heading: '感情を表す受動態',
        body: `英語では「驚く」「喜ぶ」「興奮する」などの感情を、受動態で表すことが多い。日本語では能動的に訳す。

■ be surprised at 〜（〜に驚く）
例）I was surprised at the news.（その知らせに驚いた）
　　We were surprised at his sudden visit.
※ be surprised by 〜 も使われるが、中学では at が基本。
※ 後ろに文を続けるときは be surprised to 〜 や be surprised that 〜 になる。
　　I was surprised to hear the news.

■ be excited about 〜（〜に興奮する・わくわくする）
例）The children were excited about the trip.

■ be interested in 〜（〜に興味がある）
例）I am interested in Japanese history.

■ be worried about 〜（〜を心配する）
例）She is worried about her son.

■ be tired of 〜／be tired from 〜
be tired of 〜＝「〜にあきる」　I am tired of this game.
be tired from 〜＝「〜で疲れる」　I am tired from working all day.

■ be born（生まれる）
例）I was born in Osaka in 2010.
「生まれる」はもともと受動態の形で覚える。× I born／× I am born in 2010 は誤り。

⚠ 注意：これらの表現は「be動詞 ＋ 過去分詞」の形をしているが、過去分詞が形容詞のように働いている。だから「〜される」と訳すと不自然になり、「驚く」「興味がある」と能動的に訳すのが正しい。

★ ポイント：前置詞ごとにグループで覚える。with（covered / filled / pleased / satisfied / crowded）、at（surprised）、in（interested / caught）、about（excited / worried）。声に出して固めるのが最も速い。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適切な前置詞を入れなさい。The top of the mountain was covered （　） snow.',
        wrongAnswer: 'by',
        trapExplanation: '受動態の後ろは by だと機械的に覚えているため、snow を動作主のように扱ってしまう。雪はおおっている中身であって、動作をした人ではない。',
        correctAnswer: 'with',
        correctExplanation:
          'be covered with 〜 で「〜でおおわれている」を表す。with は「中身・材料」を示す前置詞である。同じグループに be filled with（〜でいっぱいだ）、be crowded with（〜で混雑している）、be pleased with（〜を喜ぶ）がある。by は動作主専用だと切り分けておく。',
      },
      {
        question: '日本語に直しなさい。I was surprised at the news.',
        wrongAnswer: '私はその知らせに驚かされた。',
        trapExplanation: '受動態だから「〜される」と訳さなければならないと考え、不自然な日本語にしてしまう。感情を表す受動態は能動的に訳すという原則を知らないのが原因。',
        correctAnswer: '私はその知らせに驚いた。',
        correctExplanation:
          'be surprised at は形の上では受動態だが、過去分詞が形容詞のように働いており、日本語では「驚く」と能動的に訳す。同じく be interested in は「興味がある」、be worried about は「心配する」、be excited about は「わくわくする」と訳す。',
      },
    ],
  },

  {
    id: 'koko_eigo_s143',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑫：be made of / from / into と材料の表し方',
    description: '材料を表す of と from の使い分けを、見た目でわかるかどうかで判断する',
    intro: '机は木でできている、ワインはぶどうからできている。日本語ではどちらも「できている」ですが、英語は of と from を使い分けます。分かれ目は「材料が見てわかるかどうか」。この一言を覚えておけば、入試で必ず出るこの問題を落としません。',
    order: 643,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'be made of 〜＝材料が見てわかる（形が変わっていない）。The desk is made of wood.',
      'be made from 〜＝材料が見てわからない（性質が変わっている）。Wine is made from grapes.',
      'be made into 〜＝「〜に作りかえられる」。材料が主語になる。Grapes are made into wine.',
      'be made in 〜＝「〜で作られる」（産地・場所）。This car is made in Japan.',
      'be made up of 〜＝「〜から成り立っている」。Water is made up of hydrogen and oxygen.',
    ],
    sections: [
      {
        heading: 'of と from の使い分け',
        body: `made の後ろの前置詞は、材料が元の姿をとどめているかどうかで決まる。

■ be made of 〜（材料が見てわかる）
物理的な変化だけで、材料が何かひと目でわかる場合。
例）This desk is made of wood.（この机は木でできている）
　　The bridge is made of stone.
　　These cups are made of glass.
　　This bag is made of leather.

■ be made from 〜（材料が見てわからない）
化学的に変化して、元が何かわからなくなっている場合。
例）Wine is made from grapes.（ワインはぶどうから作られる）
　　Butter is made from milk.
　　Paper is made from wood.
　　Cheese is made from milk.

■ 判定のしかた
「できあがったものを見て、材料が当てられるか」を考える。
・木の机 → 見れば木だとわかる → of
・ぶどうのワイン → 液体を見てもぶどうとはわからない → from
※ paper と wood の関係は、紙を見ても木とはわからないので from を使う。

■ be made into 〜（〜に作りかえられる）
材料のほうを主語にすると into になる。
例）Grapes are made into wine.（ぶどうはワインに作りかえられる）
　　Milk is made into butter and cheese.
　　Wood is made into paper.
of / from の文をひっくり返した形だと考えるとよい。

★ ポイント：of は「形が残る」、from は「形が消える」、into は「材料が主語」。この3点セットで整理する。`,
      },
      {
        heading: 'made を使うその他の表現',
        body: `made には材料以外の使い方もある。あわせて覚えておく。

■ be made in 〜（〜で作られる：産地）
例）This car is made in Japan.（この車は日本製だ）
　　These toys are made in China.
in の後ろは国や地域であって、材料ではない。

■ be made by 〜（〜によって作られる：作った人）
例）This cake was made by my sister.
by の後ろは人である。

■ be made up of 〜（〜から成り立っている）
全体を構成している要素を示す。
例）Water is made up of hydrogen and oxygen.（水は水素と酸素からできている）
　　Our class is made up of thirty students.
※ consist of 〜（〜から成る）とほぼ同じ意味。ただし consist は自動詞なので受動態にしない。
　　○ Our class consists of thirty students.
　　× Our class is consisted of thirty students.

■ まとめ表
of → 材料（見てわかる）
from → 材料（見てわからない）
into → 材料を主語にして「〜になる」
in → 産地
by → 作った人
up of → 構成要素

⚠ 注意：be made of と be made in を混同しないこと。This desk is made in wood. は誤り、This car is made of Japan. も誤りである。後ろが材料か場所かで決める。

★ ポイント：made の前置詞は入試の定番である。「木の机は of、ワインは from、日本製は in、作った人は by」と4つの代表例を丸ごと覚えてしまうのが確実である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に of か from を入れなさい。Cheese is made （　） milk.',
        wrongAnswer: 'of',
        trapExplanation: 'チーズも牛乳も同じ乳製品だから材料がわかると考えて of を選んでしまう。実際にはチーズを見ても牛乳だとは見分けられず、性質が変化している。',
        correctAnswer: 'from',
        correctExplanation:
          'チーズは牛乳が発酵して性質そのものが変わったもので、見た目から材料が牛乳だとはわからない。したがって be made from を使う。同じ仲間に Wine is made from grapes.、Butter is made from milk.、Paper is made from wood. がある。',
      },
      {
        question: '（　）に適切な前置詞を入れなさい。This watch is made （　） Switzerland.',
        wrongAnswer: 'of',
        trapExplanation: 'be made といえば材料の of、と条件反射で選んでしまう。空所の後ろが Switzerland という国名であり、材料ではないことを見ていない。',
        correctAnswer: 'in',
        correctExplanation:
          '後ろが国名なので「〜で作られた（〜製の）」を表す be made in を使う。材料なら of / from、作った人なら by、構成要素なら up of である。空所の後ろが「材料・場所・人」のどれかをまず確かめてから前置詞を選ぶこと。',
      },
    ],
  },

  // ───────────────── 9. SVOO・SVOCの受動態（s144〜s145） ─────────────────
  {
    id: 'koko_eigo_s144',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑬：SVOO（give型）の受動態は2通り作れる',
    description: '目的語が2つある文の受動態を、to と for の使い分けとともに作れるようにする',
    intro: '「先生が私に本をくれた」。この文には「私」と「本」という二つの目的語があります。ということは、受動態の主語になれる候補も二つ。実際、英語では両方を主語にした受動態が作れます。ただし残ったほうの目的語には、to か for を付ける必要があります。',
    order: 644,
    studyPeriod: '中3夏',
    targetLevel: 'nyushi',
    keyPoints: [
      'SVOO の文は、人を主語にする受動態と物を主語にする受動態の2通りが作れる。',
      '人を主語：I was given a book by my teacher.',
      '物を主語：A book was given to me by my teacher.（残った人に to を付ける）',
      'give・send・show・teach・tell・lend は to、buy・make・cook・find は for を使う。',
      'buy・make 型は人を主語にした受動態を作らないのがふつう。',
    ],
    sections: [
      {
        heading: '2通りの受動態の作り方',
        body: `目的語を2つとる動詞（SVOO）の文は、受動態が2通り作れる。

■ もとの文
My teacher gave me a book.（先生は私に本をくれた）
目的語は me（人）と a book（物）の2つ。

■ ①人を主語にする
I was given a book by my teacher.
（私は先生から本を与えられた）
残った目的語 a book は、そのまま be動詞＋過去分詞の後ろに置く。

■ ②物を主語にする
A book was given to me by my teacher.
（1冊の本が先生から私に与えられた）
残った目的語 me には前置詞 to を付ける。ここを忘れる誤りが多い。

■ 他の例
He showed us some pictures.
→ We were shown some pictures by him.
→ Some pictures were shown to us by him.

She told me an interesting story.
→ I was told an interesting story by her.
→ An interesting story was told to me by her.

They sent him a letter.
→ He was sent a letter.
→ A letter was sent to him.

★ ポイント：物を主語にしたときだけ、残った「人」に前置詞が必要になる。この前置詞が to か for かは動詞によって決まっている。`,
      },
      {
        heading: 'to をとる動詞と for をとる動詞',
        body: `SVOO の書きかえで使う前置詞は、動詞ごとに決まっている。

■ to をとる動詞（相手が必要な動作）
give（与える）／send（送る）／show（見せる）／teach（教える）／tell（話す）／lend（貸す）／pass（手渡す）／write（書く）／sell（売る）／bring（持ってくる）
例）He gave a present to her.
　　She taught English to us.
受動態：A present was given to her. / English was taught to us.

■ for をとる動詞（相手のためにしてあげる動作）
buy（買う）／make（作る）／cook（料理する）／find（見つける）／get（手に入れる）／choose（選ぶ）／sing（歌う）
例）My father bought a bike for me.
　　She made a cake for us.
受動態：A bike was bought for me. / A cake was made for us.

■ for 型は人を主語にしない
buy・make 型の動詞では、人を主語にした受動態はふつう作らない。
△ I was bought a bike by my father.（不自然）
○ A bike was bought for me by my father.
理由は、for が「〜のために」という意味で、相手が直接その動作を受けているわけではないからである。give のように相手に直接手渡す動作では、人を主語にできる。

■ 覚え方
「相手に届く動作」＝to（give / send / show / teach / tell / lend）
「相手のためにする動作」＝for（buy / make / cook / find / get）

⚠ 注意：物を主語にした受動態で to / for を落とすと、× A book was given me. のようになり誤りである（口語では見られるが入試では減点対象）。

★ ポイント：SVOO の受動態は「どちらを主語にするか」と「残った人に to か for か」の2段階。動詞のグループ分けを先に覚えるのが近道である。`,
      },
    ],
    trapExamples: [
      {
        question: '受動態に書きかえなさい（a nice watch を主語にすること）。My uncle gave me a nice watch.',
        wrongAnswer: 'A nice watch was given me by my uncle.',
        trapExplanation: '目的語 a nice watch を主語に出したあと、残った me をそのままの位置に置いてしまう。人が動詞から離れたときには前置詞が必要になることを見落としている。',
        correctAnswer: 'A nice watch was given to me by my uncle.',
        correctExplanation:
          '物を主語にした受動態では、残った「人」に前置詞を付ける。give は to をとる動詞なので to me となる。give・send・show・teach・tell・lend は to、buy・make・cook・find は for を使う。この動詞のグループ分けが答えを決める。',
      },
      {
        question: '受動態に書きかえなさい。My mother made me a beautiful dress.',
        wrongAnswer: 'I was made a beautiful dress by my mother.',
        trapExplanation: 'SVOO は人を主語にした受動態も作れる、というルールを機械的に当てはめてしまう。make が for をとる動詞で、人を主語にした受動態を作らないことを知らないのが原因。',
        correctAnswer: 'A beautiful dress was made for me by my mother.',
        correctExplanation:
          'make・buy・cook・find のように for をとる動詞では、人を主語にした受動態はふつう作らない。物を主語にして A beautiful dress was made for me by my mother. とする。なお I was made 〜 という形は「私は〜させられた」という別の意味（使役の受動態）にもなり、誤解を招く。',
      },
    ],
  },

  {
    id: 'koko_eigo_s145',
    subject: 'eigo',
    examType: 'koko',
    title: '受動態⑭：SVOC（call・make・name型）の受動態',
    description: '補語の残る受動態を作り、call・name・make の使い方を仕上げる',
    intro: '「その犬をポチと呼んでいます」を受動態にすると、「ポチ」はどこへ行くのでしょう。答えは、動かさずにその場に残します。補語は目的語ではないので、主語にはなれないからです。現在完了と受動態を学んできたこのユニットの、最後の仕上げです。',
    order: 645,
    studyPeriod: '中3夏',
    targetLevel: 'nyushi',
    keyPoints: [
      'SVOC の受動態では、補語（C）はそのまま過去分詞の後ろに残す。',
      'They call the dog Pochi. → The dog is called Pochi.',
      'We named the baby Kate. → The baby was named Kate.',
      'The news made me happy. → I was made happy by the news.',
      'make ＋ O ＋ 原形（使役）の受動態は to 不定詞になる。I was made to clean the room.',
    ],
    sections: [
      {
        heading: '補語は動かさない',
        body: `SVOC の文は「目的語 ＋ 補語」の形をとる。受動態にすると、目的語だけが主語になり、補語はその場に残る。

■ call（〜を…と呼ぶ）
They call the dog Pochi.（彼らはその犬をポチと呼ぶ）
→ The dog is called Pochi.（その犬はポチと呼ばれている）
Pochi は補語なので動かさない。

■ name（〜を…と名づける）
We named the baby Kate.
→ The baby was named Kate.

■ make（〜を…にする）
The news made me happy.（その知らせは私を幸せにした）
→ I was made happy by the news.（私はその知らせで幸せになった）

■ elect（〜を…に選ぶ）
They elected him captain.
→ He was elected captain.

■ keep（〜を…のままにしておく）
We must keep the room clean.
→ The room must be kept clean.

■ 受動態にしたときの語順
主語 ＋ be動詞 ＋ 過去分詞 ＋ 補語（＋ by 〜）
補語は形容詞でも名詞でもよい。

★ ポイント：SVOC の受動態は「目的語だけが前に出て、補語は取り残される」と覚える。× Pochi is called the dog. のように補語を主語にしてはいけない。`,
      },
      {
        heading: '入試での問われ方と、使役の受動態',
        body: `SVOC の受動態は、公立入試では call・name の形で、難関私立では make の使役形で問われる。

■ What is this called in English?（これは英語で何と呼ばれますか）
最頻出の疑問文である。答えは It is called a compass. のようになる。
・What do you call this in English? — We call it a compass.（能動態）
・What is this called in English? — It is called a compass.（受動態）
2通りの言い方をセットで覚えておく。

■ be called の応用
This flower is called a sunflower.
This kind of music is called jazz.
He is called Ken by his friends.

■ 使役の make の受動態（発展）
make ＋ 目的語 ＋ 動詞の原形 で「〜に…させる」という意味になる。
He made me clean the room.（彼は私に部屋をそうじさせた）
これを受動態にすると、原形だった動詞に to が付く。
→ I was made to clean the room by him.
同じく see / hear の知覚動詞も、受動態では to 不定詞になる。
I saw him enter the room. → He was seen to enter the room.

■ let の受動態は使わない
let ＋ O ＋ 原形（〜させてやる）は受動態にせず、be allowed to 〜 で言いかえる。
They let me go out. → I was allowed to go out.

⚠ 注意：能動態では原形だったものが、受動態では to 不定詞になる点が最大のポイントである。× I was made clean the room. は誤り。

★ ポイント：このユニットで学んだ現在完了と受動態は、組み合わせて出題されることが多い。The room has been kept clean.（部屋はきれいに保たれてきた）のような文も、ここまでの知識で読み解ける。`,
      },
    ],
    trapExamples: [
      {
        question: '受動態に書きかえなさい。We call this flower a sunflower.',
        wrongAnswer: 'A sunflower is called this flower.',
        trapExplanation: '文の最後にある a sunflower を目的語だと思いこみ、それを主語にしてしまう。this flower が目的語、a sunflower が補語であるという構造を取りちがえている。',
        correctAnswer: 'This flower is called a sunflower.',
        correctExplanation:
          'SVOC では this flower が目的語、a sunflower が補語である。受動態にできるのは目的語だけなので、This flower is called a sunflower. となり、補語 a sunflower はその場に残る。「この花＝ひまわり」という関係を確かめると、どちらが補語かを判断できる。',
      },
      {
        question: '受動態に書きかえなさい。My mother made me wash the dishes.',
        wrongAnswer: 'I was made wash the dishes by my mother.',
        trapExplanation: '能動態の原形 wash をそのまま受動態にも持ちこんでしまう。使役の make を受動態にすると原形が to 不定詞に変わることを知らないのが原因。',
        correctAnswer: 'I was made to wash the dishes by my mother.',
        correctExplanation:
          'make ＋ 目的語 ＋ 原形 を受動態にすると、原形だった動詞に to が付いて to 不定詞になる。したがって was made to wash が正しい。知覚動詞も同じで、I saw him enter the room. → He was seen to enter the room. となる。let はこの形にせず、be allowed to 〜 で言いかえる。',
      },
    ],
  },
];
