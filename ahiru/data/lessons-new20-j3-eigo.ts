import type { Lesson } from './lesson-types';

export const lessonsNew20J3Eigo: Lesson[] = [
  {
    id: 'new20_j3_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法①：仮定法とは何か——直説法とのちがい',
    description: '「もし〜なら」の文には二種類あることを知り、仮定法という考え方の入り口をつかむ',
    intro: 'If it rains tomorrow, I will stay home. と If I were a bird, I would fly to you. は、どちらも「もし〜なら」の文だが、動詞の形も意味の重みもまったくちがう。前者は明日雨が降るかもしれないという現実的な話、後者は自分が鳥になることなどあり得ないという空想の話である。この二つを区別する考え方が「仮定法」である。',
    order: 8580,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '直説法：現実に起こりうることを、そのままの時制で述べる言い方。',
      '仮定法：現実に反すること・実現しそうにないことを、あえて時制を一つ過去にずらして述べる言い方。',
      '仮定法過去は「今の事実に反する」ことを、動詞を過去形にして表す。',
      '仮定法過去完了は「過去の事実に反する」ことを、had＋過去分詞にして表す。',
      '「形は過去なのに意味は現在」というズレが仮定法の最大の特徴であり、最初のつまずきポイントでもある。',
      '仮定法は中学の学習指導要領にも入っており、公立・私立を問わず高校入試で狙われる。',
    ],
    sections: [
      {
        heading: '直説法の if と仮定法の if',
        body: `英語の if 節には、性質のまったく異なる二つの用法がある。この二つを見分けることが、仮定法学習の出発点になる。

■ 直説法（現実にありうる条件）
明日雨が降るかどうかはまだわからないが、十分にありうることを述べている。
　If it rains tomorrow, I will stay home.
　（もし明日雨が降ったら、私は家にいます）
if節の動詞は現在形（rains）、主節は will。すでに学んだ「時・条件を表す副詞節では未来のことも現在形」というルールそのものである。

■ 仮定法（現実にはありえない・反する条件）
自分が鳥であることはあり得ない。現実にはない話を、たとえ話として述べている。
　If I were a bird, I would fly to you.
　（もし私が鳥だったら、あなたのところへ飛んでいくのに）
if節の動詞は過去形（were）だが、話しているのは「今」のことである。

■ 見分けるための問い
「その条件は、実際に起こる可能性があるか」を自分に問いかける。
　可能性がある → 直説法（現在形・未来形をそのまま使う）
　可能性がない・現実に反する → 仮定法（時制を一つ過去にずらす）

★ポイント：仮定法は「文法上の特別ルール」ではなく、「現実ではないことを話しているよ」という合図として、わざと時制を過去にずらしていると理解すると納得しやすい。`,
      },
      {
        heading: '仮定法の二つの基本形（全体地図）',
        body: `この単元群では仮定法を細かく分けて学ぶが、まずは全体の地図を持っておくと迷わない。仮定法には大きく分けて二つの基本形がある。

■ 仮定法過去（今の事実に反する仮定）
　If ＋ 主語 ＋ 過去形 〜, 主語 ＋ would/could/might ＋ 原形 …
　例）If I had more time, I could help you.
　　　（もっと時間があれば、あなたを手伝えるのに）→ 今、時間がない

■ 仮定法過去完了（過去の事実に反する仮定）
　If ＋ 主語 ＋ had ＋ 過去分詞 〜, 主語 ＋ would/could/might ＋ have ＋ 過去分詞 …
　例）If I had had more time, I could have helped you.
　　　（もっと時間があったら、あなたを手伝えたのに）→ あの時、時間がなかった

+--------------------+------------------------+------------------------------+
| 種類               | 表す内容               | if節の動詞                   |
+--------------------+------------------------+------------------------------+
| 仮定法過去         | 今の事実に反する仮定   | 過去形（be動詞は were が原則）|
| 仮定法過去完了     | 過去の事実に反する仮定 | had ＋ 過去分詞               |
+--------------------+------------------------+------------------------------+

★ポイント：「時制が一つ過去にずれる」という感覚は共通している。今のことなら過去形、過去のことなら過去完了形、と覚えると整理しやすい。

⚠注意：仮定法過去の if節は形だけ見ると「ふつうの過去形の文」と区別がつきにくい。次の課から一つずつ丁寧に形と意味を固めていく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の2文のうち、if節の動詞の形が正しいのはどちらか説明しなさい。①If it rains tomorrow, I will stay home. ②If I have wings, I would fly to you.',
        wrongAnswer: 'どちらも同じ「もし〜なら」の文だから、②もこのままで正しい。',
        trapExplanation: '日本語訳だけを見ると、どちらも「もし〜なら」で同じに見えてしまい、②が現実にありえない仮定（仮定法）だと気づかない。',
        correctAnswer: '①は正しい。②は If I had wings, I would fly to you. が正しい。',
        correctExplanation: '①は明日雨が降る可能性がある現実的な話なので、if節は現在形のままでよい（直説法）。②は「翼がある」というありえない仮定なので、would を使っている主節に合わせて if節も過去形 had にする必要がある（仮定法過去）。主節に would/could/might があれば、まず仮定法を疑う習慣をつけるとよい。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法過去①：If＋過去形, would＋原形の基本形',
    description: '「もし（今）〜なら…なのに」という仮定法過去の基本の形を、正確に組み立てられるようにする',
    intro: 'お金があれば新しい自転車を買うのに——現実には買えていない。このような「今の事実とは違うこと」を語るときに使うのが仮定法過去である。形はシンプルだが、if節と主節で使う動詞の形がそれぞれ決まっているため、正確に覚える必要がある。',
    order: 8581,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '仮定法過去の基本形：If ＋ 主語 ＋ 動詞の過去形 〜, 主語 ＋ would/could/might ＋ 動詞の原形 …',
      '訳し方：「もし（今）〜なら、…だろうに／…できるのに」。',
      'if節の動詞は「過去形」だが、指しているのは「現在」の事実である点に最重要の注意が必要。',
      'if節・主節のどちらの位置に主語がきても、動詞の形のルールは変わらない。',
      '主節を先に置いてもよい（I would buy a new bike if I had enough money.）。',
      'if節と主節が入れかわっても、意味とルールは同じ。コンマの有無だけが変わる。',
    ],
    sections: [
      {
        heading: '基本形を組み立てる',
        body: `■ 仮定法過去の形
　If ＋ 主語 ＋ 動詞の過去形（一般動詞は過去形、be動詞は were）〜,
　主語 ＋ would/could/might ＋ 動詞の原形 …

　例）If I had enough money, I would buy a new bike.
　　　（もし十分なお金があれば、新しい自転車を買うのに）
　　　→ 現実：お金が足りないので買えない

　例）If she knew his phone number, she could call him.
　　　（もし彼の電話番号を知っていれば、彼に電話できるのに）
　　　→ 現実：電話番号を知らない

★ポイント：if節の動詞は「過去形」の形をしているが、表しているのは「今の」ありえない・実現しそうにない話である。「形は過去、意味は現在」というズレを最初にしっかり意識する。

■ if節と主節の順序は入れかえ可能
主節を先に置くこともできる。その場合、コンマは不要になる。
　I would buy a new bike if I had enough money.
　（意味・仮定法の判断基準はどちらも同じ）

⚠注意：if節の動詞を現在形のまま使ってしまうミスが非常に多い。
　× If I have enough money, I would buy a new bike.
　〇 If I had enough money, I would buy a new bike.
　主節に would/could/might があるのに if節が現在形になっていたら、まず誤りを疑う。`,
      },
      {
        heading: '一般動詞の仮定法過去を作る練習',
        body: `一般動詞を使う仮定法過去は、ふつうの過去形と見た目が同じなので、文脈（主節にwould/could/mightがあるか）で判断する。

　例）If I lived near the sea, I would go swimming every day.
　　　（もし海の近くに住んでいたら、毎日泳ぎに行くのに）
　　　→ 現実：海の近くに住んでいない

　例）If he studied harder, he could pass the test.
　　　（もっと熱心に勉強すれば、テストに合格できるのに）
　　　→ 現実：あまり熱心に勉強していない（＝合格は難しい）

　例）If they had a car, they might travel more.
　　　（もし車を持っていたら、もっと旅行するかもしれないのに）
　　　→ 現実：車を持っていない

■ 主語による動詞変化はふつうの過去形と同じ
　三単現の -s は過去形にはつかない。lives ではなく lived、knows ではなく knew。
　仮定法だからといって特別な変化があるわけではなく、動詞は素直に「過去形」にするだけでよい（be動詞を除く）。

★ポイント：一般動詞の仮定法過去は「見た目はただの過去形」。区別するカギは主節にwould/could/mightがあるかどうかと、内容が「現在の事実に反しているか」の2点である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する形を答えなさい。If I (know / knew) her address, I would visit her.',
        wrongAnswer: 'know',
        trapExplanation: '「知っていたら」という日本語につられて、つい現在形を選んでしまう。主節に would があることを見落とすと、if節も現在形のままでよいと錯覚しやすい。',
        correctAnswer: 'knew',
        correctExplanation: '主節に would visit（原形）があるので仮定法過去だと判断できる。「今、彼女の住所を知らない」という現実に反する仮定なので、if節の動詞は過去形 knew にする。仮定法の問題では、まず主節の would/could/might を探し、そこから逆算してif節の形を決めるとミスが減る。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法過去②：be動詞は were——I were の不思議',
    description: '仮定法過去でbe動詞が原則wereになる理由と、"If I were you"の定番表現を身につける',
    intro: 'I was a student. とは言うのに、仮定法では If I were a student, … と were を使う。主語が I なのに was ではなく were——これは中学英語の中でもとりわけ奇妙に感じられるルールだが、理由を知れば納得できる。',
    order: 8582,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '仮定法過去でbe動詞を使うときは、主語が I / he / she / it でも were を使うのが原則。',
      'くだけた話し言葉では was も使われるが、書き言葉・試験では were が標準とされる。',
      '"If I were you, I would 〜." は「私があなたなら〜する」というアドバイスの決まり文句。',
      'you や we、複数の主語はもともと were なので、仮定法でも were のまま変化しない。',
      'be動詞以外の一般動詞には、この「wereへの統一」は起こらない（ふつうの過去形を使う）。',
    ],
    sections: [
      {
        heading: 'なぜ were を使うのか',
        body: `■ 仮定法過去のbe動詞は were が原則
ふつうの過去形では I was、he was のように am/is の過去形は was を使う。
しかし仮定法過去では、主語が単数（I / he / she / it）であっても were を使うのが伝統的なルールである。

　例）If I were rich, I would travel around the world.
　　　（もしお金持ちなら、世界中を旅行するのに）
　例）If he were here, he could help us.
　　　（もし彼がここにいたら、私たちを手伝えるのに）

★ポイント：「事実に反することを話している」という合図として、be動詞をあえて were（本来は複数・you用の形）に統一することで、ふつうの過去形（was）とはっきり区別している、と理解すると覚えやすい。

■ was も使われる場面
くだけた会話では If I was you, … のように was が使われることもある。ただし、学校の授業・入試では were を使うのが標準的な答えとされるため、書くときは were で統一するのが安全である。

⚠注意：you や we、複数名詞が主語のときは、もともと were を使うので、仮定法でも形は変わらない。
　If you were free, we could go shopping together.
　（あなたが暇なら、一緒に買い物に行けるのに）`,
      },
      {
        heading: '"If I were you" ——アドバイスの決まり文句',
        body: `■ If I were you, I would 〜.（もし私があなたなら〜するのに）
自分が相手の立場だったらどうするかを述べる、アドバイスの定番表現。会話文・自由英作文の両方で頻出。

　例）If I were you, I would apologize to her right away.
　　　（もし私があなたなら、すぐに彼女に謝るのに）
　例）If I were you, I wouldn't buy such an expensive bag.
　　　（もし私があなたなら、そんな高いバッグは買わないだろう）

■ 主節を疑問文にした形
アドバイスを求めるときにも使われる。
　What would you do if you were me?
　（もしあなたが私だったら、どうする？）

■ 似た意味を表す別の言い方
　In your place, I would 〜.（あなたの立場なら、私は〜する）
　もほぼ同じ意味で使われる。

★ポイント："If I were you" は暗記しておくべき最頻出フレーズ。were の部分を was にしないよう、セットで丸ごと覚えてしまうのが最も確実。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように英文を完成させなさい。「もし私があなたなら、そんなことは言わない。」If I (　　) you, I (　　) say such a thing.',
        wrongAnswer: 'was / don\'t',
        trapExplanation: '主語が I なので反射的に was を選んでしまい、さらに現在形 don\'t を使ってしまう。仮定法過去だと気づかず、ふつうの現在の文として処理してしまうミス。',
        correctAnswer: "were / wouldn't",
        correctExplanation: "「私があなたなら」は現実に反する仮定（私はあなたにはなれない）なので仮定法過去。be動詞は主語がIでも were を使い、主節は wouldn't（would not）を使う。If I were you は丸ごと定型句として覚えておくと、迷わず were を選べる。",
      },
    ],
  },

  {
    id: 'new20_j3_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法過去③：would・could・mightの意味の違い',
    description: '主節で使う助動詞would/could/mightのニュアンスの違いを理解し、文脈に応じて正しく選べるようにする',
    intro: '「お金があれば旅行に行くのに」と言うとき、would/could/mightのどれを使うかで伝わる意味の重みが変わる。ここでは仮定法の主節でよく使われる3つの助動詞のニュアンスの違いを整理する。',
    order: 8583,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      'would：単純な推量・意志「〜するだろうに」。仮定法でもっとも標準的に使われる。',
      'could：能力・可能性「〜できるのに」。canの過去形の形を使うことで仮定法の意味になる。',
      'might：低い可能性「〜かもしれないのに」。mayより控えめ・不確かなニュアンス。',
      '同じif節でも、主節の助動詞が変わると伝わる確信の強さが変わる。',
      'wouldn\'t/couldn\'t/mightn\'tの否定形も同じルールで使う。',
    ],
    sections: [
      {
        heading: '3つの助動詞のニュアンス比較',
        body: `■ would（〜するだろうに）
もっとも基本的で、単純な結果・意志を述べるときに使う。仮定法過去の主節でいちばん多く使われる。
　If it were sunny, I would go for a walk.
　（晴れていたら、散歩に行くのに）

■ could（〜できるのに）
「能力があれば・条件が整えば実行できる」という可能性を強調する。
　If it were sunny, we could play outside.
　（晴れていたら、外で遊べるのに）→「できる」という可能性に焦点

■ might（〜かもしれないのに）
would/couldよりも確信度が低く、「そうなる可能性もある」という控えめな言い方になる。
　If it were sunny, we might have a picnic.
　（晴れていたら、ピクニックをするかもしれないのに）→ 断定を避けた言い方

+----------+---------------------------+------------------------------+
| 助動詞   | ニュアンス                | 確信の強さ                    |
+----------+---------------------------+------------------------------+
| would    | 単純な推量・意志          | ふつう                        |
| could    | 能力・可能性を強調        | 「できる」ことに焦点          |
| might    | 弱い可能性・控えめな推量  | いちばん弱い（不確か）        |
+----------+---------------------------+------------------------------+

★ポイント：どれを使っても仮定法過去の文法的な形は同じ。違いは「話し手がどのくらい確信しているか」という意味あいだけである。`,
      },
      {
        heading: '文脈から助動詞を選ぶ練習',
        body: `実際の入試では、日本語訳や文脈のヒントから、would/could/mightのどれがふさわしいかを判断させる問題が出る。

　例）「もし彼が忙しくなければ、私たちを手伝ってくれるだろうに。」（単純な推量）
　　　If he weren't busy, he would help us.

　例）「もし辞書があれば、この単語の意味を調べられるのに。」（できる、という能力）
　　　If I had a dictionary, I could look up the meaning of this word.

　例）「もし彼女に聞けば、答えを知っているかもしれないのに。」（控えめな可能性）
　　　If we asked her, she might know the answer.

■ 否定形も同じルールで作る
　wouldn't（would not）、couldn't（could not）、mightn't（might not、ただしmight notの形の方が一般的）
　If I were free, I wouldn't stay home.
　（もし暇なら、家にはいないだろうに）

⚠注意：「〜できるのに」という日本語が出てきたら could、「〜かもしれないのに」なら might、それ以外はwouldを基本にすると判断しやすい。ただし絶対のルールではなく、文全体の意味を優先して考えること。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に最も合うものを選びなさい。「もし辞書を持っていたら、その単語を調べられるのに。」If I had a dictionary, I (would / could / might) look up the word.',
        wrongAnswer: 'would',
        trapExplanation: 'would を「万能の仮定法の助動詞」だと思い込み、意味の違いを考えずに機械的に選んでしまう。',
        correctAnswer: 'could',
        correctExplanation: '「調べられる」という日本語は「〜できる」という能力・可能性を表しているので could がふさわしい。would でも文法的には誤りではないが、「調べるだろうに」という単純な推量になり、日本語の「調べられるのに」のニュアンスとは少しずれる。入試の書き換え問題では、日本語の「〜できる」「〜かもしれない」に敏感になることが得点につながる。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法過去④：直説法との見分け方',
    description: 'if節の動詞の形と文脈から、直説法（現実の条件）か仮定法過去（現実に反する仮定）かを正確に見分ける',
    intro: 'If it rains, I will stay home. と If I were a bird, I would fly. は、どちらも「if＋主語＋動詞」の形をしているが、中身はまったく違う。この課では、入試で実際に問われる「識別」に焦点をしぼって練習する。',
    order: 8584,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '直説法の条件文：if節は現在形、主節はwill/canなど。実現の可能性がある内容を表す。',
      '仮定法過去：if節は過去形（be動詞はwere）、主節はwould/could/might＋原形。現実に反する内容を表す。',
      '見分けるカギは「if節の動詞の形」と「その内容が現実にありえるかどうか」の両方を確認すること。',
      '主節にwould/could/mightがあれば仮定法、willやcanがあれば直説法である可能性が高い。',
      '時・条件を表す副詞節（if/whenなど）で未来のことを現在形にするルールと、仮定法過去を混同しないこと。',
    ],
    sections: [
      {
        heading: '直説法と仮定法過去の対照表',
        body: `■ 見た目が似ている2つの文を並べて比較する

+--------------------------------------------+--------------------------------------------------+
| 直説法（ありうる条件）                     | 仮定法過去（現実に反する仮定）                    |
+--------------------------------------------+--------------------------------------------------+
| If it rains tomorrow, I will stay home.     | If I were a bird, I would fly to you.             |
| （明日雨が降ったら、家にいます）            | （もし私が鳥なら、あなたのところへ飛んでいくのに）|
| →明日雨が降る可能性は十分にある             | →私が鳥になることはあり得ない                     |
+--------------------------------------------+--------------------------------------------------+
| If you are free, let's go shopping.         | If I had wings, I could fly.                      |
| （もし暇なら、買い物に行こう）              | （もし翼があれば、飛べるのに）                    |
| →相手が暇かどうかは現実にありうる話         | →人間に翼はない、現実にありえない話               |
+--------------------------------------------+--------------------------------------------------+

★ポイント：if節の動詞の形（現在形か過去形か）をまず見る。次に、その内容が現実に起こりうることかどうかを考える。この2段階でほぼ確実に見分けられる。

■ 主節のマーカーで見分ける近道
　will / can / may が主節にある → 直説法（実現しうる話）
　would / could / might が主節にある → 仮定法過去（実現しない・反する話）`,
      },
      {
        heading: '識別演習と紛らわしいパターン',
        body: `■ 紛らわしいパターン①：時・条件の副詞節との混同
時・条件を表す副詞節（if/when/beforeなど）では、未来のことでも現在形を使うというルールがある（直説法の一種）。
　When he comes back, I will tell him the news.
　（彼が戻ってきたら、その知らせを伝えます）
　→ これは仮定法ではなく、単なる「時を表す副詞節」の現在形。主節に will があり、内容も現実的。

■ 紛らわしいパターン②：過去の習慣を表す if
「もし〜だったら、いつも…した」という過去の習慣を表す文は、if節・主節ともにふつうの過去形を使うが、これは仮定法ではない。
　If I had free time, I always read books.（過去のことを言う場合は文脈で判断）
　このような文は仮定法の「would」を使わないため、通常の過去形の条件文として区別する。

■ 識別のための質問リスト
　①if節の動詞は現在形か、過去形か。
　②主節はwill/canか、would/could/mightか。
　③内容は現実にありうることか、現実に反する空想か。
この3点をセットで確認すれば、直説法か仮定法過去かをほぼ間違えずに判断できる。

⚠注意：日本語訳だけで判断しようとすると、「もし〜なら」という表現が両方に共通するため間違えやすい。必ず動詞の形と現実性の両方をチェックすること。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文が直説法・仮定法過去のどちらかを判断しなさい。If you study hard, you will pass the exam.',
        wrongAnswer: '主節にwillがあるが「もし〜なら」だから仮定法だと判断してしまう。',
        trapExplanation: '「もし〜なら」という日本語のイメージだけで仮定法だと思い込み、動詞の形（study=現在形、will=直説法のマーカー）を確認しないミス。',
        correctAnswer: '直説法（ありうる条件）である。',
        correctExplanation: 'if節の動詞は現在形 study、主節は will pass。一生懸命勉強すれば合格するというのは現実に十分ありうる話であり、現実に反する空想ではない。「もし〜なら」という日本語だけで仮定法と決めつけず、動詞の形と内容の現実性を必ず確認する。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    title: 'I wish①：I wish＋仮定法過去で「今〜だったらなあ」',
    description: '現在かなわない願望を表すI wish＋仮定法過去の形と、I hopeとの違いを身につける',
    intro: '「もっと背が高ければなあ」「英語がペラペラだったらなあ」——今の自分にはかなわない願いを口にするとき使うのがI wishの構文である。ここまで学んできたif節の仮定法過去の知識が、そのままI wishにも生かせる。',
    order: 8585,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      'I wish ＋ 主語 ＋ 動詞の過去形（be動詞はwere）：「（今）〜であればなあ／〜できればなあ」。',
      'I wishのあとの動詞は、ifの仮定法過去と同じ発想で「一つ過去にずらす」。',
      'I hope（実現可能な願望）とI wish（実現しない・かなわない願望）を混同しないこと。',
      'canの仮定法過去はcouldになる（I wish I could 〜）。',
      'wishの後にthatを置くこともあるが、ふつうは省略される。',
    ],
    sections: [
      {
        heading: 'I wish＋仮定法過去の形と意味',
        body: `■ 基本形
　I wish ＋ 主語 ＋ 動詞の過去形（またはwere）… .
　「（今）〜であればなあ／〜できればなあ」という、現実には実現していない願望を表す。

　例）I wish I were taller.
　　　（背が高ければなあ）→ 現実：背が高くない
　例）I wish I had a smartphone.
　　　（スマートフォンを持っていたらなあ）→ 現実：持っていない
　例）I wish I could speak English well.
　　　（英語が上手に話せたらなあ）→ 現実：うまく話せない

★ポイント：canの仮定法過去はcanの過去形couldを使う。willの場合はwouldになる。
　I wish it would stop raining.（雨がやんでくれたらなあ）

■ be動詞はwereが原則
if節の仮定法過去と同じく、I wishの後のbe動詞も主語に関係なくwereを使うのが標準。
　I wish today were Sunday.（今日が日曜日ならなあ）

⚠注意：I wishのあとを現在形のままにしてしまう誤りが非常に多い。
　× I wish I can swim well.
　〇 I wish I could swim well.`,
      },
      {
        heading: 'I hope との違い',
        body: `■ I hope（実現可能な願望）
これから起こりうること、実現の可能性がある願いに使う。あとに続く動詞は現在形や未来を表すwillなどをそのまま使う。
　I hope you will pass the exam.
　（合格するといいね）→ 合格する可能性は十分にある
　I hope it is sunny tomorrow.
　（明日晴れるといいな）→ 実現しうる願い

■ I wish（実現しない・現実に反する願望）
現実にはかなっていない、あるいはかないそうにないことを願うときに使う。あとに続く動詞は仮定法過去（過去形）にする。
　I wish I were a doctor.
　（医者だったらなあ）→ 現実は医者ではない

+----------+----------------------------+------------------------------+
| 表現     | 使う場面                    | 後ろの動詞の形               |
+----------+----------------------------+------------------------------+
| I hope   | 実現可能な願い              | 現在形／will＋原形           |
| I wish   | 実現しない・反する願い      | 過去形（仮定法過去）         |
+----------+----------------------------+------------------------------+

★ポイント：「実現できそうか、できなさそうか」で hope と wish を選び分ける。この区別は自由英作文や会話表現の出題でも問われる重要ポイント。

⚠注意：I hope のあとに仮定法（過去形）を使うのは誤り。hopeは常に「ありうる」内容にしか使わない。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を選びなさい。I wish I (am / were) good at math.',
        wrongAnswer: 'am',
        trapExplanation: '「私は数学が得意だ」という現在の状態をそのまま現在形で表そうとしてしまい、I wishのあとは仮定法過去にするというルールを忘れてしまう。',
        correctAnswer: 'were',
        correctExplanation: 'I wishは「現実にはそうではないけれど、そうだったらいいのに」という願望を表す構文なので、後ろの動詞は仮定法過去（be動詞はwere）にする。「私は数学が得意ではない」という現実があるからこそ、この願望が生まれている。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    title: 'I wish②：I wish＋仮定法過去完了で「あの時〜だったらなあ」',
    description: '過去の出来事への後悔を表すI wish＋仮定法過去完了の形を身につけ、I wish＋仮定法過去と使い分ける',
    intro: '「あの時もっと勉強していればなあ」——これは今の願望ではなく、過去の出来事に対する後悔である。I wishのあとを一段階さらに過去に進めた形、仮定法過去完了を学ぶ。',
    order: 8586,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      'I wish ＋ 主語 ＋ had ＋ 過去分詞：「（あの時）〜だったらなあ／〜していればなあ」という過去への後悔を表す。',
      'I wish＋仮定法過去（今のこと）と、I wish＋仮定法過去完了（過去のこと）は指している時点が違う。',
      '主節が「would have＋過去分詞」になる誤りに注意（I wishの後ろは常にhad＋過去分詞）。',
      'wish以外にもif onlyという強調表現があり、同じ形のルールで使われる。',
    ],
    sections: [
      {
        heading: 'I wish＋仮定法過去完了の形と意味',
        body: `■ 基本形
　I wish ＋ 主語 ＋ had ＋ 過去分詞 … .
　「（あの時）〜だったらなあ／〜していればなあ」という、過去の事実に反する後悔を表す。

　例）I wish I had studied harder for the test.
　　　（もっとテストに向けて勉強していればなあ）→ 現実：あまり勉強しなかった
　例）I wish I had visited Kyoto when I was in Japan.
　　　（日本にいたとき京都を訪れていればなあ）→ 現実：訪れなかった
　例）I wish I hadn't said such a thing to her.
　　　（彼女にあんなことを言わなければよかったのに）→ 現実：言ってしまった

★ポイント：I wishの後ろが「had＋過去分詞」になっているのを見たら、過去の出来事への後悔だと即座に判断する。

⚠注意：主節を would have ＋過去分詞 にしてしまう誤りが多い。
　× I wish I would have studied harder.（標準的な文法では不自然とされる）
　〇 I wish I had studied harder.
　I wishのあとは常に had＋過去分詞で、would haveは使わない。`,
      },
      {
        heading: '仮定法過去との使い分けとif only',
        body: `■ I wish＋仮定法過去 と I wish＋仮定法過去完了の対比

+---------------------------+----------------------------+---------------------------------+
| 表現                       | 指している時点             | 例文                              |
+---------------------------+----------------------------+---------------------------------+
| I wish ＋ 過去形           | 今                          | I wish I were rich.（今、金持ちならなあ）|
| I wish ＋ had ＋ 過去分詞  | あの時（過去）              | I wish I had been rich then.（あの時、金持ちだったらなあ）|
+---------------------------+----------------------------+---------------------------------+

★ポイント：「今」なのか「あの時（過去）」なのかを日本語からしっかり読み取る。「もっと〜していれば」「〜だったらなあ」のように過去を振り返る内容であれば had＋過去分詞。

■ if only ＋ 仮定法（より強い願望・後悔）
if onlyはI wishよりも感情の強い「〜さえすればなあ」という表現で、同じ仮定法のルールを使う。
　If only I had listened to my teacher!
　（先生の言うことを聞いていさえすればなあ）
　If only I were more confident.
　（もっと自信があればなあ）

⚠注意：if onlyの文はふつう感嘆符（!）で終わることが多く、後半の主節（would〜など）を省略してそのまま強い感情を表す用法もよく使われる。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように英文を完成させなさい。「あの時傘を持ってくればよかった。」I wish I (　　) (　　) an umbrella then.',
        wrongAnswer: 'would bring',
        trapExplanation: '「（あの時）～すればよかった」という日本語から、単純にwould＋原形を思い浮かべてしまい、had＋過去分詞という仮定法過去完了の形を思いつかない。',
        correctAnswer: 'had brought',
        correctExplanation: '過去の出来事（あの時、傘を持ってこなかったこと）への後悔なので、仮定法過去完了 I wish ＋ had ＋ 過去分詞 を使う。bringの過去分詞は brought。I wishのあとにwould haveを使わないことも合わせて確認しておく。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    title: 'as if / as though：まるで〜であるかのように',
    description: 'as if・as thoughに続く仮定法過去・仮定法過去完了の使い分けを身につける',
    intro: '「彼はまるで幽霊を見たかのような顔をしていた」——実際には幽霊など見ていないが、そのように見えたという比喩表現。ここまで学んだ仮定法過去・仮定法過去完了の知識を、as if / as thoughという新しい枠組みで使いこなす。',
    order: 8587,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      'as if / as though ＋ 仮定法過去：「まるで（今）〜であるかのように」（主節と同時の、現実に反する比較）。',
      'as if / as though ＋ 仮定法過去完了：「まるで（それ以前に）〜だったかのように」（主節より前の、現実に反する比較）。',
      'as ifとas thoughはほぼ同じ意味で、書きかえが可能。',
      'look / sound / feel / talk などの動詞のあとによく使われる。',
      '実際にそうである可能性が高いときは、仮定法ではなく現在形を使うこともある（口語ではその方が多いという説もあるが、入試では仮定法の形が問われやすい）。',
    ],
    sections: [
      {
        heading: 'as if＋仮定法過去（同時の比較）',
        body: `■ 基本形
　主語 ＋ 動詞 ＋ as if（as though）＋ 主語 ＋ 動詞の過去形 … .
　「まるで（今）〜であるかのように」——主節と同じ時点の、現実に反する様子を比較する。

　例）He talks as if he knew everything.
　　　（彼はまるで何でも知っているかのように話す）→ 実際は知らない
　例）She looks as if she were sick.
　　　（彼女はまるで病気であるかのように見える）→ 実際に病気かどうかは断定していない
　例）He acts as if he were the boss.
　　　（彼はまるでボスであるかのようにふるまう）→ 実際はボスではない

★ポイント：look/sound/feel/talk/act のように「様子・印象」を表す動詞のあとによく使われる。be動詞はwereが原則（口語ではwasも可）。

■ as if と as though の関係
ほぼ同じ意味で使われ、書きかえ問題でもそのまま置きかえられる。
　He speaks as if he were a native speaker.
　＝ He speaks as though he were a native speaker.
　（彼はまるでネイティブスピーカーであるかのように話す）`,
      },
      {
        heading: 'as if＋仮定法過去完了（それ以前との比較）と識別',
        body: `■ as if ＋ 仮定法過去完了（主節より前の時点との比較）
主節の内容よりも「さらに前」に起きたかのような様子を表すときは、as ifのあとをhad＋過去分詞にする。

　例）She looked as if she had seen a ghost.
　　　（彼女はまるで幽霊を見たかのような顔をしていた）→ その表情を見た時点より前に「見た」かのように見えた
　例）He talked about the movie as if he had watched it many times.
　　　（彼はまるでその映画を何度も見たことがあるかのように話した）

+---------------------------------+--------------------------------------------+
| 形                                | 表す時間関係                                 |
+---------------------------------+--------------------------------------------+
| as if ＋ 過去形                  | 主節と同時のありえない様子                  |
| as if ＋ had ＋ 過去分詞         | 主節より前の時点でのありえない様子          |
+---------------------------------+--------------------------------------------+

■ 事実である可能性が高い場合の as if
話し手が「実際にそうかもしれない」と考えている場合は、as ifのあとに現在形を使うこともある（くだけた言い方や、事実に近い印象のとき）。ただし入試の書き換え・空所補充問題では、仮定法の形（過去形／had＋過去分詞）を選ばせる出題が中心になる。

★ポイント：as ifの前の動詞（look/soundなど）の時点と、as if節の内容の時点の前後関係を意識すると、過去形かhad＋過去分詞かを迷わず選べる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する形を選びなさい。He looked as if he (was tired / had run) a long way, though he had actually just walked from the station.',
        wrongAnswer: 'was tired',
        trapExplanation: '「疲れているように見えた」という日本語につられ、単純な形容詞的な仮定法過去を選んでしまい、「その表情より前に何かをした」という時間のズレを読み取れない。',
        correctAnswer: 'had run',
        correctExplanation: '文の後半で「実際には駅から歩いてきただけだった」と対比されていることから、「まるで長い道のりを走ってきたかのように見えた」という、見た目の時点よりも前の出来事との比較だとわかる。したがって as if のあとは仮定法過去完了 had run にする。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法過去完了①：If had＋過去分詞, would have＋過去分詞',
    description: '過去の事実に反する仮定を表す仮定法過去完了の基本形を、正確に組み立てられるようにする',
    intro: '「あの時もっと勉強していたら、合格していたのに」——もう変えられない過去について「もしこうだったら」と語るとき使うのが仮定法過去完了である。仮定法過去よりも時制がもう一段階複雑になるため、形をしっかり固めておきたい。',
    order: 8588,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '仮定法過去完了の基本形：If ＋ 主語 ＋ had ＋ 過去分詞 〜, 主語 ＋ would/could/might ＋ have ＋ 過去分詞 … 。',
      '訳し方：「（あの時）もし〜だったら、…だっただろうに」。',
      'if節・主節ともに、ふつうの過去完了・現在完了とは違う「仮定法」の意味で使われている。',
      'have を忘れて would＋過去分詞にしてしまう誤りが非常に多い。',
      'be動詞の過去分詞はbeenを使う（If it had been sunny, …）。',
    ],
    sections: [
      {
        heading: '基本形と成り立ち',
        body: `■ 仮定法過去完了の形
　If ＋ 主語 ＋ had ＋ 過去分詞 〜,
　主語 ＋ would/could/might ＋ have ＋ 過去分詞 … .
　「（あの時）もし〜だったら、…だっただろうに」——過去の事実と反対のことを述べる。

　例）If I had studied harder, I would have passed the exam.
　　　（もっと勉強していたら、試験に合格していたのに）
　　　→ 現実：勉強しなかった、そして合格しなかった
　例）If we had left earlier, we could have caught the train.
　　　（もっと早く出発していたら、電車に間に合っていたのに）
　　　→ 現実：早く出発しなかった、そして間に合わなかった

★ポイント：仮定法過去（if＋過去形, would＋原形）よりも、さらに一段階「過去」に時制がずれた形と考えるとよい。今のことなら仮定法過去、過去のことなら仮定法過去完了。

■ be動詞の場合
　If it had been sunny, we would have had a picnic.
　（晴れていたら、ピクニックをしていたのに）
　be動詞の過去分詞は been を使う。`,
      },
      {
        heading: 'よくある形のミスと修正',
        body: `仮定法過去完了は動詞の要素が多いため、うっかりミスが起きやすい。ここでよく出る誤りのパターンを確認しておく。

■ ミス①：主節でhaveを忘れる
　× If I had studied harder, I would passed the exam.
　〇 If I had studied harder, I would have passed the exam.
　would のあとには必ず have を入れ、そのあとに過去分詞を続ける。

■ ミス②：if節でhadを忘れる
　× If I studied harder, I would have passed the exam.（これは仮定法過去と仮定法過去完了が混ざった特殊な形＝混合型として扱われることもあるが、基本の形としては誤り）
　〇 If I had studied harder, I would have passed the exam.

■ ミス③：過去分詞の形を間違える
不規則動詞の過去分詞を正確に覚えておく必要がある。
　catch→caught、buy→bought、see→seen、go→gone、write→written など。
　If I had had more money, I could have bought that bag.
　（お金がもっとあったら、あのバッグを買えたのに）→ have の過去分詞は had なので had had という形になる点に注意。

⚠注意：「would have＋過去分詞」を「would of」のようにつづってしまう誤りは、発音（would've）につられたスペルミスなので、正しくは have を使うことを意識する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。If I had known the news, I would called you.',
        wrongAnswer: '誤りなしと判断する。',
        trapExplanation: 'if節のhad knownが正しくできているため安心してしまい、主節のwould calledのhaveの抜けに気づかない。',
        correctAnswer: 'If I had known the news, I would have called you.',
        correctExplanation: '仮定法過去完了の主節は「would/could/might ＋ have ＋ 過去分詞」の形。would のすぐあとに過去分詞を続けるのではなく、必ず have をはさむ。この have の抜けは仮定法過去完了でもっとも多いミスの一つである。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法過去完了②：仮定法過去との識別と混合型',
    description: '仮定法過去と仮定法過去完了を正確に見分け、時制が入り混じる混合型の仮定法にも対応できるようにする',
    intro: '仮定法過去と仮定法過去完了は形も意味も似ているため混同しやすい。この課では両者を並べて識別する練習をし、さらに難関校で出題される「if節は過去、主節は今」のような混合型にも触れる。',
    order: 8589,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '仮定法過去は「今」のこと、仮定法過去完了は「過去（あの時）」のことを表す。',
      '見分けるカギは日本語訳の「〜なら」（今）か「〜だったら」（あの時）かという時間の手がかり。',
      'if節の形（過去形かhad＋過去分詞か）を必ず確認する。',
      '混合型：過去の事実が今の状態に影響している場合、if節は過去完了、主節は仮定法過去（would＋原形）になることがある。',
      '入試では空所補充・書き換え・並べ替えのいずれの形式でも出題されうる。',
    ],
    sections: [
      {
        heading: '仮定法過去 vs 仮定法過去完了：対照整理',
        body: `+----------------+------------------------------+--------------------------------------+
| 種類           | if節                          | 主節                                  |
+----------------+------------------------------+--------------------------------------+
| 仮定法過去     | 過去形（be動詞はwere）       | would/could/might ＋ 原形            |
| 仮定法過去完了 | had ＋ 過去分詞               | would/could/might ＋ have ＋ 過去分詞|
+----------------+------------------------------+--------------------------------------+

■ 意味の対比
　仮定法過去：If I had more money, I would buy it.（今お金があれば買うのに）
　仮定法過去完了：If I had had more money, I would have bought it.（あの時お金があったら買っていたのに）

★ポイント：日本語訳の「〜なら」「〜であれば」（現在）と「〜だったら」「〜していたら」（過去）の違いに注目する。特に「あの時」「そのとき」「〜さえしていれば」という語があれば仮定法過去完了の合図。

■ 識別の手順
　①主節にhaveがあるか確認する（あれば仮定法過去完了の可能性が高い）
　②if節がhad＋過去分詞か、単純な過去形かを見る
　③文脈・時を表す語句（now／then／at that timeなど）から時点を確認する`,
      },
      {
        heading: '混合型の仮定法（過去の原因→今の結果）',
        body: `■ 混合型とは
過去に起きなかったことが、今の状態にまで影響している場合、if節は仮定法過去完了（過去のこと）、主節は仮定法過去（今のこと）という組み合わせが使われることがある。難関校の読解・並べ替え問題で登場する。

　例）If I had studied medicine, I would be a doctor now.
　　　（もし医学を勉強していたら、今ごろ医者になっているのに）
　　　→ if節：過去（あの時、医学を勉強しなかった）
　　　→ 主節：現在（今、医者ではない）

　例）If she hadn't missed the train, she would be here now.
　　　（もし電車に乗り遅れていなければ、彼女は今ここにいるだろうに）

★ポイント：if節が「過去の出来事」、主節が「今の状態」を表すときは、if節をhad＋過去分詞（仮定法過去完了）、主節をwould＋原形（仮定法過去）にする、という組み合わせのルールを覚えておく。

■ 逆パターンは基本的に使われない
「if節が今のこと・主節が過去のこと」という逆向きの混合は、意味の上でもほとんど起こらないため、入試では扱われない。上のパターン（過去の原因→今の結果）だけ押さえておけば十分。

⚠注意：混合型は難関校レベルの発展知識。まずは仮定法過去と仮定法過去完了の基本形を完璧にしたうえで、余裕があれば取り組む。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る最も適切なものを選びなさい。If I had taken your advice then, I (　　) happier now.',
        wrongAnswer: 'would have been',
        trapExplanation: '仮定法過去完了の形を機械的に「if節がhad＋過去分詞なら主節もwould have＋過去分詞にする」と思い込んでしまい、文末のnow（今）という手がかりを見落とす。',
        correctAnswer: 'would be',
        correctExplanation: '文末に now があることから、主節は「今」の状態を表しているとわかる。if節（あの時アドバイスを聞いていたら＝過去）と主節（今幸せだろうに＝現在）で時点がずれる混合型の仮定法なので、主節は仮定法過去の形 would be を使う。文末の時を表す語（now/thenなど）を必ずチェックする習慣をつける。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    title: '仮定法の倒置：Were I 〜／Had I 〜／Should 〜',
    description: 'ifを省略して主語と動詞を倒置する、書き言葉らしい仮定法の形を身につける',
    intro: 'if を使わずに Were I rich, … や Had I known, … のように語順を入れかえるだけで「もし〜なら」を表す方法がある。硬い書き言葉・長文読解・難関校の並べ替え問題でよく登場する形である。',
    order: 8590,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'ifを省略して主語と動詞（were/had/should）を入れかえることで、仮定法の意味を表せる。',
      'If I were 〜 → Were I 〜、If I had 〜 → Had I 〜という対応関係。',
      'Should＋主語＋原形は「万が一〜すれば」という、実現の可能性が低い未来の仮定を表す。',
      '否定文では倒置した動詞の直後にnotを置く（短縮形は使わない）。',
      '倒置の形は主に書き言葉・フォーマルな文章に使われ、会話ではあまり使われない。',
    ],
    sections: [
      {
        heading: 'Were / Had を使った倒置',
        body: `■ 仮定法過去の倒置：Were ＋ 主語 〜
be動詞を使う仮定法過去では、ifを省略して Were を主語の前に出すことができる。

　If I were you, I would accept the offer.
　→ Were I you, I would accept the offer.
　（もし私があなたなら、その申し出を受けるのに）

■ 仮定法過去完了の倒置：Had ＋ 主語 ＋ 過去分詞 〜
had を使う仮定法過去完了でも、同じように if を省略してHadを主語の前に出す。

　If I had known the truth, I would have told you.
　→ Had I known the truth, I would have told you.
　（もし真実を知っていたら、あなたに話していたのに）

★ポイント：倒置できるのは、if節の動詞が were か had のときだけ。一般動詞の過去形（If he studiedなど）は倒置できない。

⚠注意：倒置文の否定は短縮形を使わない。
　If I were not busy, … → Were I not busy, …（Weren't Iとは言わない）
　If I had not known, … → Had I not known, …（Hadn't Iは倒置では使わない）`,
      },
      {
        heading: 'Should ＋ 主語 ＋ 原形（未来の低い可能性）',
        body: `■ Should を使う仮定法（万が一〜すれば）
未来に起こる可能性が低いことを仮定するとき、if節にshouldを使うことがある。倒置してShouldを主語の前に出す形も頻出。

　If it should rain tomorrow, the game will be canceled.
　→ Should it rain tomorrow, the game will be canceled.
　（万が一明日雨が降ったら、試合は中止になります）

★ポイント：should を使う仮定法は「絶対にないとは言い切れないが、可能性はかなり低い」という未来の仮定に使う。主節にはwill／wouldのどちらも使われうる（可能性の低さの度合いによって変わる）。

■ 倒置形のまとめ表
+------------------------+---------------------------+
| 元の if 節              | 倒置した形                 |
+------------------------+---------------------------+
| If I were 〜            | Were I 〜                  |
| If I had 過去分詞 〜    | Had I 過去分詞 〜          |
| If it should 〜         | Should it 〜               |
+------------------------+---------------------------+

⚠注意：この倒置は硬い書き言葉・論説文・スピーチなどで使われる文語的な形。日常会話ではふつうにifを使う文の方が多い。読解・並べ替え問題で「見た瞬間に仮定法だと気づけるか」がポイントになる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をifを使わない形（倒置）に書きかえなさい。If she had left home earlier, she would have arrived on time.',
        wrongAnswer: 'If she had, left home earlier, she would have arrived on time.（ifを消さずにhad sheの語順だけ変えようとする）',
        trapExplanation: 'ifを省略せずに主語と動詞だけを入れかえようとしてしまい、ifを完全に消す必要があることを忘れる。',
        correctAnswer: 'Had she left home earlier, she would have arrived on time.',
        correctExplanation: '倒置ではifを完全に取り除き、hadを文頭に出して主語の前に置く。had（助動詞的に使われるhad）＋主語＋過去分詞という語順になる。文頭がWere/Had/Shouldで始まっていたら、ifが省略された仮定法の文だと即座に見抜けるようにしておく。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    title: 'ifを使わない仮定表現：Without / But for / With',
    description: 'if節を使わずに仮定の意味を表すWithout・But for・Withの用法を身につける',
    intro: '「あなたの助けがなければ」を英語にするとき、いつもif it were not for 〜という長い形を使うわけではない。Without や But for という短い前置詞句だけで、同じ仮定の意味を表すことができる。',
    order: 8591,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'Without ＋ 名詞（〜がなければ）は、仮定法過去・仮定法過去完了のどちらの主節とも組み合わせられる。',
      'But for ＋ 名詞もWithoutとほぼ同じ意味（〜がなければ）で、ややかたい書き言葉。',
      'If it were not for 〜（今）／If it had not been for 〜（過去）と書きかえられる。',
      'With ＋ 名詞（〜があれば）はWithoutの反対の意味を表す。',
      '主節の時制（would/could＋原形か、would/could have＋過去分詞か）で、今のことか過去のことかを判断する。',
    ],
    sections: [
      {
        heading: 'Without / But for の使い方',
        body: `■ Without ＋ 名詞（〜がなければ／〜がなかったら）
if節を使わずに、Withoutという前置詞のあとに名詞を置くだけで仮定の意味を表せる。主節の時制によって「今のこと」か「過去のこと」かが決まる。

　今のこと（仮定法過去と組み合わせ）：
　　Without your help, I couldn't finish this project.
　　（あなたの助けがなければ、このプロジェクトを終えられないだろう）
　　＝ If it were not for your help, I couldn't finish this project.

　過去のこと（仮定法過去完了と組み合わせ）：
　　Without your help, I couldn't have finished this project.
　　（あなたの助けがなかったら、このプロジェクトを終えられなかっただろう）
　　＝ If it had not been for your help, I couldn't have finished this project.

■ But for ＋ 名詞
Withoutとほぼ同じ意味で使われるが、ややかたい書き言葉に多い表現。
　But for his advice, I would have failed.
　（彼の助言がなかったら、私は失敗していただろう）

★ポイント：Without/But forのあとの名詞だけを見ても「今のこと」か「過去のこと」かは判断できない。必ず主節の動詞の形（原形かhave＋過去分詞か）を確認する。`,
      },
      {
        heading: 'With の使い方とifを使う元の形との対応',
        body: `■ With ＋ 名詞（〜があれば／〜があったら）
Withoutの反対で、何かが「ある」という条件を仮定するときに使う。

　例）With a little more time, I could finish the work.
　　　（もう少し時間があれば、その仕事を終えられるのに）
　　　＝ If I had a little more time, I could finish the work.
　例）With your support, we could have succeeded.
　　　（あなたの支えがあったら、私たちは成功できていただろう）
　　　＝ If we had had your support, we could have succeeded.

■ ifを使う元の形との対応の整理
+---------------------------+--------------------------------------------------+
| ifを使わない形             | ifを使う元の形                                     |
+---------------------------+--------------------------------------------------+
| Without 〜, S would 原形   | If it were not for 〜, S would 原形               |
| Without 〜, S would have 過去分詞 | If it had not been for 〜, S would have 過去分詞 |
| With 〜, S could 原形      | If S had 〜, S could 原形                          |
+---------------------------+--------------------------------------------------+

★ポイント：Without/With＋名詞は「if＋主語＋動詞」の代わりに短くまとめた表現であり、意味も文法の仕組みも仮定法そのものであることを忘れないこと。

⚠注意：Without/Withのあとに続くのは名詞（または動名詞）であり、ifのあとのような「主語＋動詞」の文の形は続けられない。
　× Without you help me, …
　〇 Without your help, …`,
      },
    ],
    trapExamples: [
      {
        question: '次の2文がほぼ同じ意味になるように書きかえなさい。If it had not been for his help, I couldn\'t have solved the problem. = (　　) his help, I couldn\'t have solved the problem.',
        wrongAnswer: 'With',
        trapExplanation: 'WithoutとWithの意味を逆に覚えてしまい、「助けがなかったら」なのに「助けがあれば」を表すWithを選んでしまう。',
        correctAnswer: 'Without',
        correctExplanation: '「彼の助けがなかったら」という意味なので、「〜がなければ」を表す Without を使う。もし「彼の助けがあれば」だったら With が正解になる。主節が couldn\'t have solved（否定＋仮定法過去完了）であることからも、実際には助けがあって問題が解けた、つまり「助けがなければ解けなかった」という文脈だと確認できる。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    title: '話法①：直接話法と間接話法の基本のしくみ',
    description: '発言をそのまま引用する直接話法と、自分の言葉で伝え直す間接話法のしくみの違いをつかむ',
    intro: '友だちが "I am tired." と言ったのを誰かに伝えるとき、そのまま "" 付きで伝える言い方と、「彼は疲れていると言った」のように自分の言葉に直して伝える言い方の2通りがある。この2つを英語でどう表すかが「話法」の学習である。',
    order: 8592,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '直接話法：発言をそのままの言葉で" "（引用符）に入れて伝える言い方（He said, "I am tired."）。',
      '間接話法：発言をthat節などに直して、伝える人の立場から述べ直す言い方（He said that he was tired.）。',
      '直接話法から間接話法に直すときは、①引用符とコンマを取ってthatでつなぐ、②代名詞を変える、③時制を一致させる、④時・場所を表す語を変える、の4点をチェックする。',
      'that は省略されることが多いが、意味は変わらない。',
      'この課ではまず①の「文の骨組みの変化」だけに絞って身につける。②〜④は次の課以降で個別にくわしく扱う。',
    ],
    sections: [
      {
        heading: '直接話法と間接話法の違い',
        body: `■ 直接話法（そのまま引用する）
発言をそのままの言葉で、コンマと引用符（" "）を使って伝える。
　He said, "I am tired."
　（彼は「私は疲れています」と言った）
引用符の中は、実際にその人が発した言葉そのままである。

■ 間接話法（自分の言葉で伝え直す）
発言の内容を、伝える人の立場からthat節などを使って述べ直す。
　He said that he was tired.
　（彼は疲れていると言った）
引用符は使わず、that節の中の主語・動詞は、伝える人の視点に合わせて変化する。

+-----------------------------+--------------------------------+
| 直接話法                     | 間接話法                        |
+-----------------------------+--------------------------------+
| He said, "I am tired."       | He said that he was tired.      |
| コンマ＋引用符で発言そのまま | that節で伝える人の言葉に直す    |
+-----------------------------+--------------------------------+

★ポイント：直接話法は「録音を再生する」ようなイメージ、間接話法は「要約して報告する」ようなイメージだと考えると違いをつかみやすい。`,
      },
      {
        heading: '直接話法から間接話法への基本の手順',
        body: `間接話法に書きかえるときにチェックすべき点は次の4つ。この課では①をくわしく扱い、②〜④は今後の課で1つずつ深めていく。

■ ①コンマと引用符を取り、thatでつなぐ
　He said, "I like music." → He said (that) he likes music.（②③はまだ考えない、骨組みだけ）
　まず文の形として、コンマと" "を取り除き、その代わりにthatを入れて1つの文につなげる。that は省略しても文法的には正しい。

■ ②代名詞を変える（次の課でくわしく扱う）
　発言の中の "I" は、伝える人からみると "he" や "she" になることが多い。

■ ③時制を一致させる（別の課でくわしく扱う）
　伝達動詞（said）が過去形なら、that節の中の動詞も原則としてもう一段階過去にずらす。

■ ④時・場所を表す語を変える（別の課でくわしく扱う）
　"now" や "here"、"tomorrow" のような語は、話す時点と伝える時点がずれることに合わせて別の語に変わることがある。

★ポイント：一度にすべてを覚えようとせず、①「that節の骨組みを作る」→②代名詞→③時制→④時・場所の語、という順番で1つずつ積み上げていくと混乱しにくい。

⚠注意：間接話法にするとき、コンマと引用符を消し忘れるミスが多い。
　× He said, that he was tired.
　〇 He said that he was tired.`,
      },
    ],
    trapExamples: [
      {
        question: '次の直接話法の文を、骨組みだけ（代名詞・時制はそのまま）間接話法の形にしなさい。She said, "I am busy."',
        wrongAnswer: 'She said, that I am busy.',
        trapExplanation: 'thatを付け加えることはできても、直接話法の名残であるコンマと引用符をそのまま残してしまう。',
        correctAnswer: 'She said that I am busy.（骨組みのみ。実際は代名詞・時制の変化も必要でSheが自分について言っているのでshe is busyとなる点は次の課で扱う）',
        correctExplanation: '間接話法にするときは、コンマと引用符（" "）を完全に取り除き、その代わりにthatを置いて1つのつながった文にする。直接話法の見た目（コンマ＋" "）を少しでも残してしまうと、間接話法の形として不完全になる。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    title: '話法②：代名詞の変化——立場を入れかえる',
    description: '間接話法にするとき、発言の中の代名詞を伝える人の立場に合わせて正しく変える',
    intro: '"I am tired." と本人が言ったことを、別の人が伝えるとき「私は疲れている」とそのまま言ったら誰のことかわからなくなる。話し手の視点から、伝える人の視点へ——代名詞の入れかえは話法の中でも特につまずきやすいポイントである。',
    order: 8593,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '直接話法の中の代名詞は、発言した本人の視点。間接話法では、伝える人（話法を報告する人）の視点に合わせて変える。',
      '基本パターン：I → he/she（発言者を指す代名詞に）、my → his/her、me → him/her。',
      'you は、話しかけられている相手が誰かによって、I（私）やyou（あなた）など、状況に応じて変わる。',
      'we は、伝える人自身も含まれる場合はweのまま、含まれない場合はtheyになることが多い。',
      '代名詞の変化は「誰が誰に何を伝えているか」を場面ごとに考える必要があり、機械的な暗記だけでは対応しきれない。',
    ],
    sections: [
      {
        heading: '基本パターン：I / my / me の変化',
        body: `■ I → he / she（発言者が誰かによって変わる）
発言者自身を指すIは、伝える人からみると「彼・彼女」になることが多い。
　Ken said, "I am hungry." → Ken said that he was hungry.
　（ケンは自分はお腹が空いていると言った → ケンはお腹が空いていると言った）
　Emi said, "I like dogs." → Emi said that she liked dogs.

■ my → his / her、me → him / her
所有格・目的格も同じように、発言者の性別に合わせて変化する。
　He said, "This is my bag." → He said that that was his bag.
　She said, "Please help me." → She said (that) I should help her.（依頼の場合はaskで書きかえるのが一般的だが、代名詞の考え方は同じ）

■ 主語がIで、伝える人自身の発言の場合
自分自身の発言を間接話法にするときは、Iはそのままのこともある。
　I said, "I am busy." → I said that I was busy.
　（自分の発言を自分で伝え直す場合、主語のIは変わらない）

★ポイント：代名詞の変化は「誰の発言を、誰が、誰に伝えているか」という人間関係を頭の中で図にすると整理しやすい。`,
      },
      {
        heading: 'you / we の変化と練習',
        body: `■ you の変化
you が誰を指すかは場面によって変わる。話しかけた相手が「伝える人自身」であれば、youはI（私）になる。第三者であれば、そのままyouやheなどに変わる。

　彼が私に向かって言った場合：
　He said to me, "You look tired."
　→ He said that I looked tired.（youは「私」を指していたのでIになる）

　彼が別の人（Tom）に向かって言った場合、それを私が伝えるなら：
　He said to Tom, "You look tired."
　→ He told Tom that he looked tired.（youは「Tom」を指していたのでheになる）

■ we の変化
weに伝える人自身が含まれていれば we のまま。含まれていなければ they になることが多い。
　They said, "We are ready." → They said that they were ready.
　（伝える人がweに含まれていない場合）

★ポイント：代名詞の変化は表を丸暗記するよりも、「その言葉を発したとき、誰が誰に向かって言ったか」を毎回考えるくせをつけることが最も確実な対策になる。

⚠注意：youがそのまま残るべき場面で機械的にIやheに変えてしまうミスが多い。必ず「誰が誰に話しかけているか」を確認してから代名詞を決める。`,
      },
    ],
    trapExamples: [
      {
        question: '次を間接話法にしなさい（代名詞の変化のみに注目）。Tom said to me, "I will help you."',
        wrongAnswer: 'Tom said that I will help you.',
        trapExplanation: 'Iをそのまま残してしまい、発言者Tom自身を指すIを、伝える人（私）の視点のheに変える必要があることに気づかない。',
        correctAnswer: 'Tom said that he would help me.（時制の一致will→wouldは次の課で扱う）',
        correctExplanation: '発言の中のIはTom自身を指しているので、伝える人（私）から見るとheになる。またyouは「私（聞き手）」を指していたので、間接話法ではmeになる。代名詞は「誰が言ったか」「誰に向かって言ったか」の両方を確認して決める。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    title: '話法③：時制の一致——伝達動詞が過去なら1つ前へ',
    description: '伝達動詞（said等）が過去形のとき、that節の中の動詞をどのように過去にずらすかを身につける',
    intro: '"I am tired." という発言を、あとから「彼は疲れていると言った」と過去のこととして伝えるとき、that節の中の動詞も一緒に過去にずれる。この「時制の一致」は話法の中でも特に間違えやすいポイントである。',
    order: 8594,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '伝達動詞（said/toldなど）が過去形のとき、that節の中の動詞は原則として1つ前の時制にずらす（時制の一致）。',
      '現在形→過去形、過去形→過去完了形、will→would、can→could、mustはmust/had toのどちらも可。',
      '例外：不変の真理・現在も変わらない事実は、時制の一致を受けず現在形のままでよい。',
      'すでに過去完了形だった動詞は、それ以上過去にずらせないのでそのまま。',
      '時制の一致は間接疑問文・話法どちらにも共通するルールである。',
    ],
    sections: [
      {
        heading: '時制の一致の基本ルールと対応表',
        body: `■ 時制の一致とは
伝達動詞（say/tellなど）が過去形（said/told）のとき、that節の中の動詞も、伝える時点から見て自然な形になるよう、原則として1つ前の時制にずらす。

+------------------+---------------------------+
| 直接話法（元の形）| 間接話法（時制の一致後）  |
+------------------+---------------------------+
| 現在形            | 過去形                     |
| 現在進行形        | 過去進行形                 |
| 過去形            | 過去完了形                 |
| will              | would                      |
| can               | could                      |
| may               | might                      |
| must              | must / had to              |
+------------------+---------------------------+

　例）He said, "I am tired." → He said that he was tired.
　例）She said, "I will call you." → She said that she would call me.
　例）They said, "We can help you." → They said that they could help me.

★ポイント：「現在形は過去形へ、過去形は過去完了形へ」と、時制を1段階さかのぼらせるのが基本の動き。willやcanなどの助動詞も、それぞれの過去形（would/could）に対応させる。`,
      },
      {
        heading: '時制の一致の例外とすでに過去完了の場合',
        body: `■ 例外①：不変の真理・現在も変わらない事実
科学的な事実やことわざなど、いつでも成り立つ内容は、伝達動詞が過去でも時制の一致を受けず、現在形のままにする。

　例）The teacher said that the earth goes around the sun.
　　　（先生は地球は太陽のまわりを回っていると言った）
　　　→ goesを過去形goneにする必要はない。いつの時代でも成り立つ事実だから。

■ 例外②：現在も変わらない習慣や事実
「発言時から今まで変わらず続いている」と話し手が考えている内容は、現在形のままにされることも多い。
　He said that he likes soccer.（彼はサッカーが好きだと言った：今も好きだと考えられる場合）

■ すでに過去完了形だった場合
発言の中の動詞がもともと過去完了形（had＋過去分詞）だった場合、それより前の時制はないため、形は変わらずそのまま使う。
　She said, "I had already finished my homework."
　→ She said that she had already finished her homework.（そのまま）

★ポイント：時制の一致は「機械的に全部1つ前にずらす」だけでなく、「本当にずらす必要がある内容かどうか」を意味の面からも考える必要がある。

⚠注意：willをwouldに変え忘れるミスが非常に多い。特に未来を表す文の話法転換では、必ずwillの変化をチェックする。`,
      },
    ],
    trapExamples: [
      {
        question: '次を間接話法にしなさい。He said, "I will visit Kyoto next month."',
        wrongAnswer: 'He said that he will visit Kyoto next month.',
        trapExplanation: '主語（he）と時制の一致（will→would）の両方を意識しなければならないところで、willをそのまま残してしまう。特にwillの変化は見落とされやすい。',
        correctAnswer: 'He said that he would visit Kyoto the following month.（時・場所の語の変化は次の課で扱う）',
        correctExplanation: '伝達動詞said（過去形）に合わせて、willはwouldに時制の一致させる。next monthのような時を表す語も、話す時点と伝える時点がずれる場合はthe following monthのように変化することがある（詳しくは次の課）。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    title: '話法④：時・場所を表す語の変化（now→then等）',
    description: '間接話法で時・場所を表す語（now/today/here等）がどのように変化するかを整理して覚える',
    intro: '「今日」「ここ」「明日」——これらの語は、話している時点を基準にした言葉である。あとになって別の場所で伝え直すとき、この基準がずれるため、対応する語に変えなければならない。',
    order: 8595,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '時・場所を表す語は、発言した時点と伝える時点がずれることに合わせて変化する。',
      'now→then、today→that day、tomorrow→the next day、yesterday→the day before、here→there、this→that。',
      '文脈上ずれがない場合（同じ日のうちに伝えるときなど）は、そのままの語を使うこともある。',
      '代名詞・時制・時や場所の副詞の3つをそろえてはじめて正確な間接話法になる。',
      '長文読解でこれらの変化を見抜けると、誰がいつ何を言ったのか正確に追える。',
    ],
    sections: [
      {
        heading: '時・場所を表す語の対応表',
        body: `間接話法にするとき、時や場所を表す語も、伝える時点に合わせて変える必要がある。以下の対応表は入試でも頻出なのでしっかり覚えておく。

+-------------+------------------+  +-------------+-------------------+
| 直接話法    | 間接話法          |  | 直接話法    | 間接話法           |
+-------------+------------------+  +-------------+-------------------+
| now         | then              |  | this week   | that week          |
| today       | that day          |  | next week   | the following week |
| tomorrow    | the next day      |  | last week   | the week before    |
| yesterday   | the day before    |  | ago         | before             |
| tonight     | that night        |  | this        | that                |
| here        | there             |  | these       | those               |
+-------------+------------------+  +-------------+-------------------+

　例）She said, "I will meet you here tomorrow."
　　　→ She said that she would meet me there the next day.
　　　（彼女は明日ここで会うと言った → 彼女はその翌日そこで会うと言った）

★ポイント：これらの変化は「発言した時点」と「伝える時点」がずれることに由来する。「今日」と言われても、翌日以降に伝えるときには「その日」と言い換える必要がある。`,
      },
      {
        heading: '実際にずれない場合の扱いと総合練習',
        body: `■ ずれがない場合はそのままでよいこともある
発言をその場・その日のうちにすぐ伝える場合など、時・場所が実際にずれていないときは、todayやhereなどをそのまま使うことも許容される。

　例）（発言直後にすぐ隣の人に伝える場合）
　　　He said, "I am busy today." → He said that he was busy today.
　　　（同じ日のうちに伝えているので today のままでも自然）

■ 3つの変化を同時にそろえる総合練習
話法の転換では、①代名詞、②時制、③時・場所の語の3つを同時にチェックする必要がある。

　例）She said to me, "I saw you here yesterday."
　　　① 代名詞：I→she、you→I（私を指していたので）
　　　② 時制：saw→had seen（過去→過去完了）
　　　③ 時・場所：here→there、yesterday→the day before
　　　→ She told me that she had seen me there the day before.

★ポイント：一気に全部を変えようとせず、①代名詞→②時制→③時・場所の語、の順番で1つずつチェックしていくと、書きかえミスが減る。

⚠注意：時・場所の語だけを変えて、代名詞や時制を変え忘れる、あるいはその逆のミスが多い。3つセットで確認する習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '次を間接話法にしなさい（発言から数日後に別の人に伝える場面）。He said, "I saw her yesterday."',
        wrongAnswer: 'He said that he saw her yesterday.',
        trapExplanation: '時制の一致（saw→had seen）はできても、yesterdayを時の経過に合わせて変える必要があることに気づかず、そのまま残してしまう。',
        correctAnswer: 'He said that he had seen her the day before.',
        correctExplanation: '発言の時点から数日たってから伝える場面なので、「昨日（yesterday）」は発言した時点を基準にした語であり、伝える時点では通用しない。「その前日（the day before）」に変える必要がある。同時に、過去形sawはさらに前の時制である過去完了形had seenに変える。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    title: '話法⑤：Yes/No疑問文の話法転換',
    description: '疑問詞のないYes/No疑問文を、if・whetherを使って間接話法に転換する方法を身につける',
    intro: '"Are you busy?" と聞かれたことを誰かに伝えるとき、そのまま疑問文の形を残すことはできない。疑問詞のないYes/No疑問文を間接話法にするときは、if / whether という新しい道具を使う。',
    order: 8596,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '疑問文を間接話法にするとき、伝達動詞はsayではなくaskに変える。',
      '疑問詞のないYes/No疑問文は、if または whether（〜かどうか）を使ってつなぐ。',
      'if/whetherのあとは疑問文の語順（do/does/didを使う語順）ではなく、平叙文の語順に戻す。',
      '代名詞・時制・時や場所の語の変化ルールは、平叙文の話法転換と同じように適用する。',
      'whetherは "whether or not" の形でも使われ、ifよりもややかたい響きを持つ。',
    ],
    sections: [
      {
        heading: 'if / whether を使った基本の転換',
        body: `■ 疑問文の伝達動詞：ask
平叙文はsay/tellを使うことが多いが、疑問文を伝えるときの伝達動詞はaskを使う。

■ Yes/No疑問文の転換手順
　①伝達動詞をaskに変える（say to 人 → ask 人）
　②文末の？（クエスチョンマーク）とコンマ・引用符を取る
　③if または whether でつなぐ
　④if/whetherのあとは do/does/did を使わない平叙文の語順にする
　⑤代名詞・時制・時や場所の語も、平叙文のときと同じルールで変える

　例）He said to me, "Are you busy?"
　　　→ He asked me if I was busy.
　　　（彼は私に忙しいかどうか尋ねた）

　例）She said to him, "Did you call her?"
　　　→ She asked him if he had called her.
　　　（彼女は彼に彼女に電話したかどうか尋ねた）

★ポイント：if/whetherのあとの語順は、間接疑問文で学んだ「疑問詞のあとは平叙文の語順」というルールとまったく同じ発想である。`,
      },
      {
        heading: 'whether の使い方とifとの違い',
        body: `■ whether も同じ意味で使える
whetherもifと同じく「〜かどうか」を表し、Yes/No疑問文の話法転換に使える。

　例）She said, "Will it rain tomorrow?"
　　　→ She asked whether it would rain the next day.
　　　（彼女は翌日雨が降るかどうか尋ねた）

■ whether or not の形
whetherは "or not" を直後や文末に付けて使われることもある。ifにはこの使い方はない。
　He asked whether or not I would come.
　He asked whether I would come or not.
　（彼は私が来るかどうかを尋ねた）

■ if と whether の使い分けの目安
どちらも間接疑問・話法のYes/No転換で使えるが、whetherの方がややかたい書き言葉に多く、to不定詞の前や文頭ではwhetherしか使えない、といった細かい違いがある。中学〜高校入試レベルでは、どちらを使っても基本的に正解になることが多い。

★ポイント：疑問詞のある疑問文（What/Where/Whenなど）は疑問詞をそのまま使い、疑問詞のない疑問文（Yes/Noで答える疑問文）だけがif/whetherを必要とする、という区別を必ず押さえる。

⚠注意：if/whetherを使わずに、そのままdo/does/didを残してしまう誤りが非常に多い。
　× He asked me did I like it.
　〇 He asked me if I liked it.`,
      },
    ],
    trapExamples: [
      {
        question: '次を間接話法にしなさい。She said to me, "Do you know his name?"',
        wrongAnswer: 'She asked me do I know his name.',
        trapExplanation: '伝達動詞をaskに変えることはできても、if/whetherを使わずに疑問文の語順（do you knowなど）をそのまま残してしまう。',
        correctAnswer: 'She asked me if I knew his name.',
        correctExplanation: '疑問詞のないYes/No疑問文なので、if（またはwhether）でつなぎ、その後ろは平叙文の語順（I knew his name）に戻す。do/does/didはif/whetherを使うことで消える。この語順の変化は間接疑問文で学んだルールと同じである。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    title: '話法⑥：疑問詞疑問文の話法転換',
    description: 'What/Where/Whenなど疑問詞のある疑問文を、疑問詞を残したまま間接話法に転換する',
    intro: '"Where do you live?" のような疑問詞付きの疑問文は、if/whetherを使わず、疑問詞をそのまま残して間接話法に直す。すでに学んだ間接疑問文の語順ルールが、そのまま話法にも生かされる単元である。',
    order: 8597,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '疑問詞のある疑問文は、その疑問詞をそのまま使ってつなぎ、if/whetherは不要。',
      '疑問詞のあとは、do/does/didを使わない平叙文の語順にする。',
      '伝達動詞はaskを使う（tellの後には人＋疑問詞〜という形も可能）。',
      '疑問詞が主語の場合は、もともと〈疑問詞＋動詞〉の語順なので、変化はほとんど起きない。',
      '代名詞・時制・時や場所の語の変化は、これまでの課と同じルールをそのまま適用する。',
    ],
    sections: [
      {
        heading: '疑問詞をそのまま残す転換の基本',
        body: `■ 基本の手順
疑問詞（What/Where/When/Who/Whyなど）がある疑問文は、if/whetherを使わず、その疑問詞をそのままつなぎ言葉として使う。あとは平叙文の話法転換と同じ流れになる。

　例）He said to me, "Where do you live?"
　　　→ He asked me where I lived.
　　　（彼は私にどこに住んでいるか尋ねた）

　例）She said to him, "What time did the train leave?"
　　　→ She asked him what time the train had left.
　　　（彼女は彼に電車が何時に出たか尋ねた）

★ポイント：疑問詞のあとは do/does/did を使わない語順（間接疑問文と同じ形）にする。三単現のsや時制の情報は動詞側に残す。
　Where does he live? → she asked where he lived.（doesが消えてliveにsが戻る）

⚠注意：if/whetherを不要な場面で付け加えてしまう誤りに注意する。
　× He asked me if where I lived.
　〇 He asked me where I lived.（疑問詞があるのでif/whetherは使わない）`,
      },
      {
        heading: '疑問詞が主語のときと総合演習',
        body: `■ 疑問詞が主語の場合（語順はそのまま）
疑問詞自体が文の主語になっているときは、もとから〈疑問詞＋動詞〉の順なので、間接話法にしても語順はほとんど変わらない。

　例）He said, "Who broke the window?"
　　　→ He asked who had broken the window.
　　　（彼は誰が窓を割ったのか尋ねた）→ Who がそのまま主語として動詞の前に残る

　例）She said, "What happened?"
　　　→ She asked what had happened.
　　　（彼女は何が起きたのか尋ねた）

■ 総合演習：代名詞・時制・時や場所の語も含めて
　He said to me, "When will you finish your homework?"
　→ He asked me when I would finish my homework.
　（代名詞：you→I、時制：will→would、時・場所の語：この文には該当なし）

　She said to me, "Why were you late yesterday?"
　→ She asked me why I had been late the day before.
　（代名詞：you→I、時制：were→had been、時・場所の語：yesterday→the day before）

★ポイント：疑問詞疑問文の話法転換は「①伝達動詞をaskに変える」「②疑問詞を残す」「③疑問詞のあとを平叙文の語順にする」「④代名詞・時制・時や場所の語を変える」の4段階を、順番通りに一つずつ処理していけば必ず正しく組み立てられる。`,
      },
    ],
    trapExamples: [
      {
        question: '次を間接話法にしなさい。He said to me, "What do you want to eat?"',
        wrongAnswer: 'He asked me what did I want to eat.',
        trapExplanation: '疑問詞をそのまま使う点は正しくできても、そのあとをdo/does/didを使う疑問文の語順のまま残してしまう。間接疑問文の語順ルールを話法でも忘れずに適用する必要がある。',
        correctAnswer: 'He asked me what I wanted to eat.',
        correctExplanation: '疑問詞whatのあとは、do/does/didを使わない平叙文の語順（I wanted to eat）に戻す。同時に、代名詞you→I、時制want→wantedの変化も忘れずに行う。疑問詞があってもなくても、「疑問詞（if/whether）＋主語＋動詞」という平叙文の語順になる点は共通している。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    title: '話法⑦：命令文の話法転換——tell/ask＋人＋to〜',
    description: '命令文・依頼文を、伝達動詞tell/askと不定詞を使って間接話法に転換する方法を身につける',
    intro: '"Open the door." という命令を人に伝えるとき、命令文の形をそのまま間接話法に入れることはできない。ここでは、命令文・依頼文特有の転換ルール（tell/ask＋人＋to〜）を学ぶ。',
    order: 8598,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'oyo',
    keyPoints: [
      '命令文を間接話法にするとき、伝達動詞をtell（命令・指示）またはask（依頼）に変え、〈人＋to＋動詞の原形〉の形にする。',
      '否定の命令文（Don\'t〜）は、〈人＋not to＋動詞の原形〉にする。',
      '依頼・助言・警告などの内容に応じて、tell/ask以外にもadvise（助言する）・order（命令する）・warn（警告する）などの伝達動詞が使われる。',
      'that節ではなく、to不定詞を使う点が平叙文・疑問文の話法転換と大きく異なる。',
      '命令文の主語（隠れているYou）は、話法に直すときは「命令された人」として目的語の位置に来る。',
    ],
    sections: [
      {
        heading: '命令文の基本の転換：tell/ask＋人＋to〜',
        body: `■ 肯定の命令文
命令文を間接話法にするときは、伝達動詞をtell（強めの指示・命令）やask（依頼）に変え、〈人＋to＋動詞の原形〉の形にする。that節は使わない。

　例）She said to me, "Open the door."
　　　→ She told me to open the door.
　　　（彼女は私にドアを開けるように言った）

　例）He said to her, "Please help me with my homework."
　　　→ He asked her to help him with his homework.
　　　（彼は彼女に宿題を手伝ってくれるよう頼んだ）

★ポイント：tellは「（強めに）〜するように言う」、askは「（お願いして）〜するように頼む」というニュアンスの違いがある。Pleaseが付いている場合は依頼なのでaskを選ぶことが多い。

■ 否定の命令文
Don't〜で始まる否定の命令文は、〈人＋not to＋動詞の原形〉にする。

　例）He said, "Don't be late."
　　　→ He told me not to be late.
　　　（彼は私に遅れないように言った）
　　　例）She said to us, "Don't touch this."
　　　→ She told us not to touch that.

⚠注意：notの位置はtoの直前。
　× He told me to not be late.
　〇 He told me not to be late.`,
      },
      {
        heading: 'tell/ask以外の伝達動詞と総合練習',
        body: `■ 内容に応じたさまざまな伝達動詞
命令文の内容（助言・警告・命令など）によって、tell/ask以外の伝達動詞が使われることもある。

　advise（助言する）：
　　The doctor said, "You should exercise more."
　　→ The doctor advised me to exercise more.
　order（命令する・より強い響き）：
　　The officer said, "Stop!"
　　→ The officer ordered him to stop.
　warn（警告する）：
　　She said, "Don't go near the river."
　　→ She warned us not to go near the river.

★ポイント：advise/order/warnなどはいずれもtell/askと同じ〈人＋to＋原形〉の形で使う。伝達動詞を変えるだけで文全体のニュアンスが伝わるので、日本語訳（助言・命令・警告のどれか）から適切な動詞を選ぶ練習をしておくとよい。

■ 命令文の主語が隠れたYouであることの確認
命令文はもともと主語Youが省略された文である。話法に直すとき、この「命令された相手」がtell/askの直後の「人」の部分になる。
　（元の会話）Ken said to Mika, "Wait here."
　→ Ken told Mika to wait there.
　　　（waitの意味上の主語はMika＝命令された人であることを意識する）

⚠注意：命令文をthat節で書きかえてしまう誤りが多い。
　× She told me that I open the door.
　〇 She told me to open the door.
　命令文の話法転換ではthat節ではなく、to不定詞を使うことを必ず覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次を間接話法にしなさい。The teacher said to us, "Don\'t run in the hallway."',
        wrongAnswer: "The teacher told us that we don't run in the hallway.",
        trapExplanation: '命令文の話法転換もthat節を使うものだと思い込み、平叙文と同じ形にしてしまう。否定命令のnotの位置も誤りやすい。',
        correctAnswer: 'The teacher told us not to run in the hallway.',
        correctExplanation: '命令文（特に否定の命令文）を間接話法にするときは、that節ではなく〈人＋not to＋動詞の原形〉の形を使う。notはtoの直前に置く。that節を使ってしまうのは、平叙文の話法転換のルールを命令文にもそのまま当てはめてしまうことが原因なので、「命令文はto不定詞」と意識的に区別する。',
      },
    ],
  },

  {
    id: 'new20_j3_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    title: '話法⑧：総合演習・入試頻出パターン',
    description: '代名詞・時制・時や場所の語・文の種類の転換ルールをすべて組み合わせ、入試レベルの話法問題に対応する',
    intro: 'ここまで学んできた話法のルール——代名詞、時制の一致、時・場所を表す語、疑問文・命令文の転換——を1つの文の中で同時に使いこなす総合演習を行う。入試の書き換え・並べ替え問題で実際にどう問われるかも確認する。',
    order: 8599,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '話法の転換は「①文の種類を判断→②伝達動詞を選ぶ→③代名詞→④時制→⑤時・場所の語」の順に一つずつ処理すると確実。',
      '平叙文はsay/tell＋that節、疑問文はask＋if/whetherまたは疑問詞、命令文はtell/ask＋to不定詞、と文の種類ごとに骨組みが決まる。',
      '複数の文の種類が混ざった長めの対話文を話法に直す問題は、難関私立で頻出。',
      '入試では空所補充・並べ替え・全文書き換えなど、さまざまな出題形式で問われる。',
      '見直しの際は、代名詞・時制・時や場所の語の3点をもう一度チェックする。',
    ],
    sections: [
      {
        heading: '文の種類ごとの骨組みの総整理',
        body: `話法の転換は、まず「発言が平叙文・疑問文・命令文のどれか」を判断し、それぞれの骨組みを選ぶところから始まる。

+--------------+------------------------------+------------------------------------------------+
| 文の種類     | 伝達動詞と骨組み              | 例                                              |
+--------------+------------------------------+------------------------------------------------+
| 平叙文       | say/tell ＋ (that) ＋ 平叙文  | He said (that) he was busy.                     |
| Yes/No疑問文 | ask ＋ if/whether ＋ 平叙文語順| He asked if I was busy.                         |
| 疑問詞疑問文 | ask ＋ 疑問詞 ＋ 平叙文語順    | He asked where I lived.                         |
| 命令文（肯定）| tell/ask ＋ 人 ＋ to 原形     | He told me to open the door.                    |
| 命令文（否定）| tell/ask ＋ 人 ＋ not to 原形 | He told me not to be late.                      |
+--------------+------------------------------+------------------------------------------------+

★ポイント：この表の「骨組み」を先に決めてから、代名詞・時制・時や場所の語を1つずつ当てはめていくと、複雑な文でも整理しやすい。

■ 手順のまとめ（5ステップ）
　①発言が平叙文・疑問文・命令文のどれかを判断する
　②上の表からふさわしい骨組み（伝達動詞とつなぎ方）を選ぶ
　③代名詞を伝える人の立場に合わせて変える
　④時制の一致を適用する（伝達動詞が過去形なら1つ前の時制へ）
　⑤時・場所を表す語（now/here/todayなど）を変える`,
      },
      {
        heading: '入試頻出パターンと総合問題',
        body: `📝入試問題例

【問1】次の文を間接話法に直しなさい。
Mika said to Ken, "I am going to visit Osaka next week."
→ 答え：Mika told Ken that she was going to visit Osaka the following week.
（代名詞I→she、時制の一致am going to→was going to、next week→the following week）

【問2】次の文を間接話法に直しなさい。
He said to me, "Can you come to my house tomorrow?"
→ 答え：He asked me if I could come to his house the next day.
（Yes/No疑問文なのでif、can→could、my→his、tomorrow→the next day）

【問3】次の文を間接話法に直しなさい。
The teacher said to the students, "Don't be late for class."
→ 答え：The teacher told the students not to be late for class.
（命令文（否定）なのでtell＋人＋not to）

【問4】（　）に最も適切なものを選びなさい。
She asked me (　　) I had finished my homework.
① that  ② if  ③ to  ④ what
→ 答え：② if（Yes/No疑問文の転換にはif/whetherを使う）

【問5】並べかえなさい。
( me / he / told / to / the / window / close ).
→ 答え：He told me to close the window.（命令文の転換：tell＋人＋to＋原形）

■ 見直しの3チェックポイント
話法の問題を解き終えたら、必ず次の3点を見直す。
　①代名詞は伝える人の立場に正しく変わっているか
　②時制は伝達動詞に合わせて一致しているか（または例外に該当するか）
　③時・場所を表す語は、話す時点と伝える時点のずれに合わせて変わっているか

★ポイント：話法の総合問題は、1つのミスが連鎖して複数の減点につながりやすい。焦らず①〜⑤の手順を順番通りに踏むことが、結果的にいちばんの近道になる。`,
      },
    ],
    trapExamples: [
      {
        question: '次を間接話法にしなさい。She said to me, "I saw this movie here yesterday."',
        wrongAnswer: 'She said that she saw this movie here yesterday.',
        trapExplanation: '文の種類の判断（平叙文）は正しくできても、時制の一致（saw→had seen）と、this→that、here→there、yesterday→the day beforeという時・場所の語の変化をまとめて見落としてしまう。',
        correctAnswer: 'She told me that she had seen that movie there the day before.',
        correctExplanation: '平叙文の話法転換では、代名詞（省略）、時制の一致（saw→had seen：過去形はさらに一段階過去の過去完了形へ）、指示語・場所・時の語（this→that、here→there、yesterday→the day before）のすべてを同時にチェックする必要がある。一つでも見落とすと不正解になるため、5ステップを順番に確認する習慣が重要になる。',
      },
    ],
  },
];
