import type { Lesson } from './lesson-types';

// 高校受験 英語「不定詞・動名詞・分詞」拡張ユニット（40セッション：koko_eigo_s256〜koko_eigo_s295）
// order は 756〜795。
// 構成：不定詞 名詞的用法(4)／形容詞的用法(4)／副詞的用法・目的原因結果(5)／疑問詞＋不定詞(3)／
//       It is ...(for 人) to〜(4)／too〜to・〜enough to と so that 書きかえ(4)／
//       want・tell・ask ＋人＋to(4)／動名詞の用法(4)／不定詞だけ・動名詞だけをとる動詞(4)／
//       現在分詞・過去分詞の形容詞用法(4)
// 図解は「語順を四角の枠に見立てる」「分類の割合」「2軸で使い分けを整理する」など、
// 図にすることで本当に理解が進む箇所にだけ付けてある（40課中18課）。
// 語順の図は、四角形の辺を①→②→③→④の順にたどると英語の並びになるようにしてある。
export const kokoEigoExt08Lessons: Lesson[] = [
  // ───────────── 1. 不定詞の名詞的用法（s256〜s259） ─────────────
  {
    id: 'koko_eigo_s256',
    subject: 'eigo',
    examType: 'koko',
    title: '不定詞①：to＋動詞の原形という「かたまり」',
    description: '不定詞の形と、名詞的・形容詞的・副詞的の三用法の全体像をつかむ',
    intro: 'I want. だけでは「私はほしい」で終わってしまいます。何をしたいのかを続けたいのに、英語は一つの文に動詞を二つ並べられません。そこで二つ目の動詞の前に to を置き、「to＋動詞の原形」というかたまりにします。これが不定詞で、動詞を文の中で名詞や形容詞のように使うための仕組みです。',
    order: 756,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '不定詞＝to＋動詞の原形。主語が三人称単数でも過去の文でも、to のうしろは必ず原形（to plays・to played は誤り）。',
      '用法は三つ。名詞的用法「〜すること」／形容詞的用法「〜するための・〜すべき」／副詞的用法「〜するために・〜して」。',
      '見分けるのは訳ではなく「文の中でのはたらき」。主語・目的語・補語になっていれば名詞的用法。',
      '名詞のすぐうしろに置かれてその名詞を説明していれば形容詞的用法。',
      '主語と動詞がそろって文が完成したあとに付け足されていれば副詞的用法。',
      '不定詞の否定は not to＋原形。not は to の前に置く（to not go は誤り）。',
    ],
    sections: [
      {
        heading: '不定詞の形は一つだけ',
        body: `英語は一つの文の中に、時制を持った動詞（述語動詞）を一つしか置けない。「私はサッカーをしたい」を I want play soccer. と書けないのはそのためである。二つ目の動詞は「動詞の顔をやめる」必要があり、その合図が to である。

■ 形
to＋動詞の原形。この形は何があっても変わらない。
例）I want to play soccer.（私はサッカーをしたい）
例）He wants to play soccer.（三単現の s が付くのは wants だけ。to play はそのまま）
例）She wanted to be a doctor.（過去形になるのは wanted だけ。to be はそのまま）

⚠ 注意：He wants to plays soccer. / She wanted to was a doctor. はいずれも誤り。時制や三単現を表すのは文のメインの動詞（want・wanted）の役目で、不定詞はその影響を受けない。だから「不定詞」（形が定まらない＝変化しない、の意味）と呼ばれる。

■ 否定
not を to の前に置く。
例）He told me not to go there.（彼は私にそこへ行かないように言った）
例）Be careful not to catch a cold.（かぜをひかないように気をつけて）

★ ポイント：入試の書きかえ・並べかえでは、まず「メインの動詞はどれか」を決め、残った動詞に to を付ける、という順で考えると迷わない。`,
      },
      {
        heading: '三つの用法の見取り図',
        figureId: 'lf_kokoeigoext08_256',
        body: `同じ to＋原形でも、文の中でどの品詞のはたらきをしているかで三つに分かれる。訳し方が違うのではなく、はたらきが違うから訳が変わる、という順序で理解する。

■ 名詞的用法（〜すること）
名詞と同じ位置、つまり主語・目的語・補語に入る。
例）I like to swim.（swim するのが好き＝like の目的語）
例）My dream is to be a vet.（is のうしろ＝補語）

■ 形容詞的用法（〜するための・〜すべき）
名詞のすぐうしろに置かれ、その名詞を説明する。
例）I have a lot of homework to do.（do するべき homework）
例）Please give me something to drink.（drink するための something）

■ 副詞的用法（〜するために・〜して）
主語と動詞がそろって文として完成したあとに、目的や原因を付け足す。
例）I went to the library to study math.（I went to the library で文は完成している）
例）I am glad to see you.（I am glad で完成、その理由を付け足している）

★ ポイント：判別の手順は「①その to〜を消しても文が成り立つか → 成り立てば副詞的用法。②消すと成り立たず、直前が名詞なら形容詞的用法。③どちらでもなければ名詞的用法」。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は英語を勉強したいと思っている。」を英語にしなさい。',
        wrongAnswer: 'He wants to studies English.',
        trapExplanation: '主語が He なので「動詞に s を付ける」という規則を、文中のすべての動詞に当てはめてしまう。',
        correctAnswer: 'He wants to study English.',
        correctExplanation:
          '三単現の s が付くのは、文の時制を担当するメインの動詞（wants）だけ。to のうしろは必ず原形なので study のままにする。過去の文でも同じで、He wanted to study English. のように変化するのは wanted だけである。',
      },
      {
        question: '「私は彼にそのことを話さないように言った。」を英語にしなさい。',
        wrongAnswer: 'I told him to not talk about it.',
        trapExplanation: '「don\'t＋動詞」の感覚を引きずり、動詞のすぐ前に not を置いてしまう。',
        correctAnswer: 'I told him not to talk about it.',
        correctExplanation:
          '不定詞を否定するときは、to を含めたかたまり全体を打ち消すので not は to の前に置く。Be careful not to be late.（遅れないように気をつけて）も同じ形。日本語の語順とは逆になるので、まとめて覚えてしまうとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s257',
    subject: 'eigo',
    examType: 'koko',
    title: '名詞的用法①：主語・補語になる不定詞',
    description: '文の主語や be動詞のうしろに入る to不定詞と、動詞の単複の扱いを身につける',
    intro: '「本を読むことは大切だ」と言いたいとき、日本語では「読むこと」と名詞に変えて主語にします。英語も同じで、read に to を付けて to read とすれば、そのまま主語の席に座らせることができます。ただし「読むこと」は数えられる物ではないので、続く be動詞は is になります。この一点が入試でよく狙われます。',
    order: 757,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '主語になる不定詞：To read books is important.（〜することは…だ）',
      '不定詞の主語は必ず単数扱い。動詞は is / was を使う（are は誤り）。',
      '補語になる不定詞：My dream is to be a teacher.（〜することです）',
      '主語が長くなるのを嫌い、実際の英語では It is important to read books. の形が好まれる。',
      '補語の位置では、主語＝不定詞の内容という関係が成り立つ（My job is to wash the dishes.）。',
    ],
    sections: [
      {
        heading: '主語の位置に入る不定詞',
        figureId: 'lf_kokoeigoext08_257',
        body: `名詞的用法とは、to＋原形のかたまりを「名詞ひとかたまり」として扱う使い方である。名詞が入れる席は三つ、主語・目的語・補語。まず主語の席から見る。

■ 形
To＋動詞の原形 ＋ 動詞 ＋ …
例）To play tennis is fun.（テニスをすることは楽しい）
例）To get up early is good for your health.（早起きすることは健康によい）
例）To speak English is not easy.（英語を話すことは簡単ではない）

■ 動詞は必ず単数扱い
「テニスをすること」という行為は一つの事がらなので、続く be動詞は is（過去なら was）になる。
例）To collect old coins is my hobby.（○）
例）To collect old coins are my hobby.（×）

⚠ 注意：直前の名詞（tennis・books・coins）が複数形だと、つられて are にしてしまう答案が非常に多い。動詞が対応しているのは To 〜 のかたまり全体であって、その中の名詞ではない。

★ ポイント：主語に不定詞を置く形は文法的には正しいが、頭でっかちで読みにくいため、実際の入試英文では It is fun to play tennis. のように It で始める形（s272 以降で学ぶ）のほうがはるかに多い。`,
      },
      {
        heading: '補語の位置に入る不定詞',
        body: `be動詞のうしろに来て「主語＝〜すること」という関係を作る使い方である。

■ 形
主語 ＋ be動詞 ＋ to＋動詞の原形
例）My dream is to be a doctor.（私の夢は医者になることです）
例）My job is to wash the dishes.（私の仕事は皿を洗うことです）
例）Her plan was to visit Kyoto in spring.（彼女の計画は春に京都を訪れることでした）

主語の名詞（dream・job・plan・hope・wish・aim）と、うしろの to〜 がイコールで結ばれているのが特徴である。だから My dream is to be a doctor. は My dream ＝ to be a doctor という関係になる。

■ 進行形とのまぎらわしさに注意
be動詞＋to〜 の形は、be動詞＋-ing（進行形）とは別物である。
例）My hobby is playing the guitar.（動名詞。s284 で学ぶ）
例）He is playing the guitar.（進行形）
主語が「人」で、その人が今その動作をしているなら進行形。主語が dream・hobby・job のような「事がら」を表す名詞なら補語である。

⚠ 注意：「私の夢は医者になることです」を My dream is a doctor. と書くと「私の夢は医者だ」となり、夢＝人 という意味不明な文になる。to be を落とさないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。To read many books （　） important for students.',
        wrongAnswer: 'are',
        trapExplanation: 'be動詞の直前にある books が複数形なので、それを主語だと思いこんで are を選んでしまう。',
        correctAnswer: 'is',
        correctExplanation:
          '主語は books ではなく To read many books（多くの本を読むこと）というかたまり全体で、これは一つの事がらなので単数扱いになる。不定詞や動名詞が主語のときは、中に複数形の名詞が入っていても動詞は is / was を使う。',
      },
      {
        question: '「私の夢は英語の先生になることです。」を英語にしなさい。',
        wrongAnswer: 'My dream is an English teacher.',
        trapExplanation: '日本語の「〜になることです」の「なる」を訳し落とし、名詞をそのままつないでしまう。',
        correctAnswer: 'My dream is to be an English teacher.',
        correctExplanation:
          '補語の位置に不定詞を置いて「夢＝先生になること」とする。to be（または to become）を入れないと「私の夢は英語の先生（という人）だ」という意味になってしまう。My dream is to be a doctor. / My job is to help sick people. も同じ形。',
      },
    ],
  },

  {
    id: 'koko_eigo_s258',
    subject: 'eigo',
    examType: 'koko',
    title: '名詞的用法②：動詞の目的語になる不定詞',
    description: 'want / hope / decide / try など、うしろに to不定詞をとる動詞の使い方を固める',
    intro: '英作文で最もよく使うのが「〜したい」「〜しようと思う」という言い方です。want・hope・decide のように、うしろに「これからすること」を続ける動詞は、目的語として to不定詞をとります。逆に enjoy のようにこの形を嫌う動詞もあり、その線引きが入試の定番です。まずは to をとる仲間から確実にします。',
    order: 758,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '目的語になる不定詞：I want to go to Kyoto.（〜することを…する）',
      'to不定詞を目的語にとる代表：want / hope / wish / decide / promise / plan / expect / try / need。',
      'like / love / begin / start は不定詞と動名詞のどちらもとれる。',
      'would like to 〜 は want to 〜 のていねいな言い方（〜したいのですが）。',
      '疑問文・否定文になっても to〜 の形は変わらない（Do you want to go?／I don\'t want to go.）。',
    ],
    sections: [
      {
        heading: '目的語の席に入る不定詞',
        body: `「何を？」に当たる部分が動作であるとき、その動作を to＋原形にして動詞のうしろに置く。

■ 代表的な動詞と例文
want to 〜（〜したい）
　例）I want to visit Australia someday.
hope to 〜（〜したいと望む）
　例）We hope to see you again next year.
decide to 〜（〜することに決める）
　例）He decided to study abroad.
promise to 〜（〜すると約束する）
　例）She promised to write to me every month.
try to 〜（〜しようと努力する）
　例）I tried to open the window, but I couldn't.
need to 〜（〜する必要がある）
　例）You need to take this medicine after every meal.

■ 疑問文・否定文でも形は同じ
例）Do you want to come with us?（いっしょに来たいですか）
例）I don't want to talk about it.（それについて話したくない）
例）He didn't decide to leave the team.（チームを離れると決めたわけではない）

★ ポイント：ここに並ぶ動詞はどれも「まだ実現していないこれからのこと」を続けている。to にはもともと「→（〜へ向かう）」という前置詞の意味があり、その未来向きの感覚が不定詞にも残っている、と考えると仲間分けが覚えやすい。`,
      },
      {
        heading: 'would like to と、動名詞もとれる動詞',
        body: `■ would like to 〜
want to 〜 は「〜したい」という直接的な言い方で、店や目上の人に対しては少しぶしつけになる。ていねいにするときは would like to を使う。
例）I would like to see Mr. Brown.（ブラウンさんにお会いしたいのですが）
例）I'd like to have a cup of coffee.（コーヒーを一杯いただきたいのですが）
短縮形は I'd / He'd などになる。疑問文の Would you like to 〜? は「〜しませんか」という勧誘になる。
例）Would you like to join us?（いっしょにどうですか）

■ 不定詞・動名詞のどちらもとれる動詞
like / love / begin / start / continue は、うしろに to不定詞でも動名詞でも置ける。意味の違いはほとんどない。
例）I like to play the piano. ＝ I like playing the piano.
例）It began to rain. ＝ It began raining.

⚠ 注意：enjoy / finish / stop / mind は不定詞をとらず、必ず動名詞をとる（s285・s288で詳しく学ぶ）。I enjoyed to play tennis. は誤りで、I enjoyed playing tennis. が正しい。動詞ごとにどちらをとるかが決まっているので、動詞と形をセットで覚えること。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。My brother decided （study） in Canada.',
        wrongAnswer: 'studying',
        trapExplanation: '「〜することを決めた」の「〜すること」を、日本語の名詞的な感じから動名詞だと判断してしまう。',
        correctAnswer: 'to study',
        correctExplanation:
          'decide はうしろに to不定詞だけをとる動詞で、decide doing とは言わない。want / hope / promise / plan / expect も同じ仲間で、いずれも「これから実現すること」を続けるため to をとる。動詞ごとに形が決まっていることを、例文ごと覚えるのが最短である。',
      },
      {
        question: '次の文の誤りを直しなさい。Do you want play tennis with me?',
        wrongAnswer: 'Do you want playing tennis with me?',
        trapExplanation: '誤りが「動詞の形」だと思いこみ、-ing にすれば直ると考えてしまう。落ちているのは to である。',
        correctAnswer: 'Do you want to play tennis with me?',
        correctExplanation:
          'want のうしろに動作を続けるときは必ず to を入れる。want playing とは言わない。会話でよく聞く Do you want to 〜? をそのまま音で覚えておくと、to の脱落を防げる。ていねいに言うなら Would you like to play tennis with me? となる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s259',
    subject: 'eigo',
    examType: 'koko',
    title: '名詞的用法③：三用法の見分け方と和訳',
    description: '同じ to〜 が三用法のどれなのかを、消去法と直前の語で判定できるようにする',
    intro: '入試では「下線部の不定詞と同じ用法のものを選べ」という問題が必ず出ます。訳を作ってから考えると「〜するために」と「〜すること」が混ざって迷います。実は訳より先に、その to〜 を文から取り除いてみるだけで、ほとんどの場合は決着がつきます。判定の手順を型にしてしまいましょう。',
    order: 759,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '判定手順①：to〜 を取り除いても文が成立する → 副詞的用法。',
      '判定手順②：取り除くと成立せず、直前が名詞 → 形容詞的用法。',
      '判定手順③：どちらでもない（主語・目的語・補語の席にある）→ 名詞的用法。',
      '名詞的用法は「〜すること」と訳せるが、訳だけで決めない（形容詞的用法も「〜すること」と訳せる場合がある）。',
      'like / want / hope のうしろの to〜 は、ほぼ確実に名詞的用法（目的語）。',
    ],
    sections: [
      {
        heading: '取り除いてみる、が最短の判定法',
        body: `不定詞の用法を決めるのは意味ではなく、文の骨組み（主語＋動詞＋目的語・補語）の中にその to〜 が組みこまれているかどうかである。

■ 手順①：消してみる
消しても文として成り立つなら、その to〜 は骨組みの外にある付け足し、つまり副詞的用法である。
例）I went to the park to play tennis.
　→ I went to the park. で成立 → 副詞的用法（目的）
例）I was glad to hear the news.
　→ I was glad. で成立 → 副詞的用法（原因）

■ 手順②：直前が名詞かを見る
消すと文が不完全になり、しかも直前に名詞があるなら形容詞的用法。
例）I have a lot of homework to do.
　→ I have a lot of homework. は成立するが、to do は直前の homework を説明している → 形容詞的用法
判断に迷うときは「その名詞を to〜 の目的語にできるか」を確かめる。do the homework が成り立つので形容詞的用法だとわかる。

■ 手順③：残りが名詞的用法
例）I want to buy a new bike.
　→ I want. では意味をなさない（何をほしいのかが必要）→ 目的語＝名詞的用法
例）To swim in this river is dangerous.
　→ 主語の席にある → 名詞的用法

★ ポイント：①→②→③の順に当てはめる。順序を変えると、副詞的用法を「〜すること」と訳せてしまう場面で迷うことになる。`,
      },
      {
        heading: '同じ動詞でも用法が変わる',
        body: `同じ take pictures という動作でも、置かれる場所によって用法は変わる。三つを並べて確かめる。

例）I like to take pictures.
　　（写真をとることが好きだ）→ like の目的語 → 名詞的用法
例）I have no time to take pictures.
　　（写真をとる時間がない）→ 直前の time を説明 → 形容詞的用法
例）I went to the lake to take pictures.
　　（写真をとるためにその湖へ行った）→ I went to the lake. で完成 → 副詞的用法

■ 訳だけで判断すると失敗する例
例）My plan is to visit Kyoto.（私の計画は京都を訪れることです）→ 補語 → 名詞的用法
例）I have a plan to visit Kyoto.（私は京都を訪れる計画がある）→ 直前の plan を説明 → 形容詞的用法
どちらも「京都を訪れること」と訳せてしまうが、用法は別である。be動詞のうしろか、名詞のうしろか、という位置で決まる。

⚠ 注意：It is easy to swim. のような形式主語の文（s272）は、It が形だけの主語で、本当の主語は to swim である。したがって名詞的用法に分類する。「It があるから副詞的用法」ではないので注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の to see は何用法か。I was very happy to see my old friend.',
        wrongAnswer: '名詞的用法（会うことがうれしかった、と訳せるから）',
        trapExplanation: '「〜すること」と訳せてしまうため、訳だけを手がかりに名詞的用法だと判断してしまう。',
        correctAnswer: '副詞的用法（感情の原因を表す）',
        correctExplanation:
          'to see my old friend を取り除いても I was very happy. で文として完成する。骨組みの外にある付け足しなので副詞的用法で、ここでは「うれしかった理由」を表している。訳ではなく「消しても成り立つか」で判定するのが確実である。',
      },
      {
        question: '次の文の to visit は何用法か。I have a plan to visit Okinawa this summer.',
        wrongAnswer: '副詞的用法（訪れるために計画を持っている）',
        trapExplanation: '「〜するために」と訳せなくもないので、目的を表す副詞的用法だと考えてしまう。',
        correctAnswer: '形容詞的用法（直前の a plan を説明している）',
        correctExplanation:
          'to visit Okinawa は直前の名詞 a plan の中身を説明していて、「沖縄を訪れるという計画」という関係になっている。同じ動詞でも My plan is to visit Okinawa. なら be動詞のうしろの補語なので名詞的用法。直前が名詞かどうかを必ず確認する。',
      },
    ],
  },

  // ───────────── 2. 不定詞の形容詞的用法（s260〜s263） ─────────────
  {
    id: 'koko_eigo_s260',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞的用法①：名詞をうしろから説明する',
    description: '名詞＋to不定詞の語順と、「1語なら前・2語以上なら後ろ」という修飾の原則を理解する',
    intro: '「冷たい水」は cold water と前から説明しますが、「飲むための水」は water to drink と後ろから説明します。日本語はどちらも名詞の前に置くので、この差が英作文の失点源になります。英語は「短い修飾語は前、長いかたまりは後ろ」という原則で動いており、不定詞は必ず後ろ側に回ります。',
    order: 760,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '形容詞的用法は「名詞 ＋ to＋動詞の原形」の語順。必ず名詞のうしろに置く。',
      '訳は「〜するための・〜すべき・〜する（名詞）」。',
      '英語の修飾の原則：1語の修飾語は名詞の前、2語以上のかたまりは名詞の後ろ。',
      '-thing / -body / -one で終わる代名詞も、うしろから説明する（something to eat）。',
      '「時間・仕事・機会」を表す名詞と相性がよい（time to go / work to do / a chance to talk）。',
    ],
    sections: [
      {
        heading: '修飾語の位置には原則がある',
        figureId: 'lf_kokoeigoext08_260',
        body: `英語では、名詞を説明する語が1語だけなら名詞の前、2語以上のかたまりなら名詞の後ろ、という原則がある。不定詞は to＋原形で最低でも2語なので、例外なく名詞の後ろに置かれる。

■ 前から説明する場合（1語）
例）cold water（冷たい水）
例）a new bike（新しい自転車）
例）a sleeping baby（眠っている赤ちゃん／分詞1語。s293で扱う）

■ 後ろから説明する場合（2語以上）
例）water to drink（飲むための水）
例）a bike to ride（乗るための自転車）
例）the boy running in the park（公園を走っている少年／分詞のかたまり。s294で扱う）

■ 形容詞的用法の例文
例）I have a lot of homework to do today.（今日はやるべき宿題がたくさんある）
例）It's time to go to bed.（もう寝る時間だ）
例）He has many friends to help him.（彼には助けてくれる友達がたくさんいる）
例）Do you have anything to eat?（何か食べる物を持っていますか）

★ ポイント：日本語は「飲むための水」と前から説明するので、英語も to drink water と書きたくなる。しかし to drink water は「水を飲むこと」という別の意味になってしまう。語順が意味を決めることを意識する。`,
      },
      {
        heading: '名詞と不定詞の関係を確かめる',
        body: `形容詞的用法では、修飾される名詞と不定詞の間に、次のいずれかの関係が成り立っている。

■ 名詞が不定詞の目的語になる関係（最も多い）
例）I want something to drink.
　　→ drink something（何かを飲む）が成り立つ
例）She has a letter to write.
　　→ write a letter（手紙を書く）が成り立つ

■ 名詞が不定詞の主語のようにはたらく関係
例）He has many friends to help him.
　　→ friends help him（友達が彼を助ける）が成り立つ
例）I have no one to talk to.（話し相手がいない）

■ 名詞の中身を説明する関係
time / way / chance / plan / promise など、内容を必要とする名詞に付く。
例）I have no time to watch TV.（テレビを見る時間がない）
例）This is the best way to learn English.（これが英語を学ぶ最良の方法だ）
例）I had a chance to talk with her.（彼女と話す機会があった）

⚠ 注意：I have a lot of homework to do it. のように、うしろに it を付け足してはいけない。do の目的語はすでに homework として前に出ているので、二重に置くことになる。並べかえ問題でこの誤りが非常に多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は何か食べる物がほしい。」を英語にしなさい。',
        wrongAnswer: 'I want to eat something.',
        trapExplanation: '日本語の「食べる物」を「食べること」とまとめて訳してしまい、名詞的用法の文にしてしまう。',
        correctAnswer: 'I want something to eat.',
        correctExplanation:
          'I want to eat something. は「私は何かを食べたい」で、ほしいのは「食べるという行為」になる。一方 I want something to eat. は「食べるための物がほしい」で、ほしいのは物である。入試の和文英訳では「〜する物・〜する時間」のように名詞が中心なら、名詞＋to〜 の語順にする。',
      },
      {
        question: '語を並べかえなさい。（do / a lot of / I / to / homework / have）今日はやるべき宿題がたくさんある。',
        wrongAnswer: 'I have a lot of homework to do it.',
        trapExplanation: '「宿題をやる」という日本語につられ、do の目的語として it を補ってしまう。',
        correctAnswer: 'I have a lot of homework to do.',
        correctExplanation:
          '形容詞的用法では、修飾される名詞（homework）がそのまま不定詞の目的語のはたらきをしている。したがって to do のうしろに目的語を置く必要はない。I have no time to watch TV. や something to drink も同じで、うしろに it を足すと誤りになる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s261',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞的用法②：something cold to drink の語順',
    description: '-thing 型の代名詞に形容詞と不定詞が両方つくときの並べ方を確定させる',
    intro: '夏の暑い日に「何か冷たい飲み物がほしい」と言いたい。something と cold と to drink、三つの部品はそろっているのに、どう並べるかで迷います。英語では -thing で終わる語だけは形容詞も後ろに回るという特別ルールがあり、この語順は高校入試の並べかえ問題の常連です。',
    order: 761,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '語順は「-thing ＋ 形容詞 ＋ to＋動詞の原形」。例：something cold to drink。',
      'something / anything / nothing / someone / everybody などは、形容詞を前に置けない。',
      'cold something / to drink something cold のような順は誤り。',
      '疑問文・否定文では anything / nothing を使う（Do you have anything cold to drink?）。',
      'else を付ける場合も後ろ（something else to eat／もっと他に食べる物）。',
    ],
    sections: [
      {
        heading: '-thing 型だけの特別な語順',
        figureId: 'lf_kokoeigoext08_261',
        body: `ふつうの名詞は「形容詞＋名詞」の順に並ぶ（cold water）。ところが something / anything / nothing / someone / somebody / everything などの代名詞は、形容詞を前に置けず、必ずうしろに従える。

■ 形容詞1語だけが付くとき
例）I want something cold.（何か冷たい物がほしい）
例）Is there anything new?（何か新しいことはありますか）
例）There is nothing special today.（今日は特別なことは何もない）

■ 形容詞と不定詞の両方が付くとき
語順は「-thing → 形容詞 → to＋原形」の順に固定される。
例）I want something cold to drink.（何か冷たい飲み物がほしい）
例）Do you have anything interesting to read?（何かおもしろい読み物はありますか）
例）Please give me something hot to eat.（何か温かい食べ物をください）

■ 誤りやすい並べ方
例）× I want cold something to drink.（形容詞を前に置いている）
例）× I want something to drink cold.（不定詞のうしろに形容詞を置いている）
例）× I want to drink something cold.（これ自体は正しい文だが「冷たい物を飲みたい」で、「飲み物がほしい」ではない）

★ ポイント：「サムシング → コールド → トゥードリンク」と、日本語の語順と逆にリズムで覚えてしまうと並べかえで迷わない。`,
      },
      {
        heading: 'something と anything の使い分け、else の位置',
        body: `■ 肯定文は something、疑問文・否定文は anything
例）I have something to tell you.（あなたに話したいことがある）
例）Do you have anything to tell me?（何か話したいことがありますか）
例）I don't have anything to do today.（今日はすることが何もない）
　＝ I have nothing to do today.（nothing を使うと not は不要）

⚠ 注意：I don't have nothing to do. のように not と nothing を重ねてはいけない。否定は一文に一つが原則である。

■ 相手にすすめる疑問文では something を使う
相手が Yes と答えることを期待する勧誘・依頼では、疑問文でも something を使う。
例）Would you like something to drink?（何かお飲みになりますか）
例）Can I have something cold to drink?（何か冷たい飲み物をいただけますか）

■ else の位置
「ほかに」を表す else も -thing のうしろに置き、不定詞はさらにそのうしろに来る。
例）Do you want anything else to eat?（ほかに何か食べる物がほしいですか）
例）Is there something else to do?（ほかに何かすることはありますか）

★ ポイント：付け足す語はすべて -thing の右側に、形容詞 → else → to不定詞 の順に並ぶと覚えておけばよい。`,
      },
    ],
    trapExamples: [
      {
        question: '語を並べかえなさい。（to / something / I / cold / want / drink）何か冷たい飲み物がほしい。',
        wrongAnswer: 'I want cold something to drink.',
        trapExplanation: '「冷たい何か」という日本語の語順と、cold water のような通常の形容詞＋名詞の並びに引きずられる。',
        correctAnswer: 'I want something cold to drink.',
        correctExplanation:
          '-thing で終わる代名詞は形容詞を前に置けず、必ずうしろに従える。さらに不定詞はその形容詞の後ろに来るので、something → cold → to drink の順になる。anything hot to eat、nothing special to say もすべて同じ並びである。',
      },
      {
        question: '次の文の誤りを直しなさい。I don\'t have nothing to do this afternoon.',
        wrongAnswer: 'I don\'t have nothing to do this afternoon.（正しいのでそのまま）',
        trapExplanation: '「何もすることがない」という日本語に否定語が一つしかないことに気づかず、not と nothing を重ねてしまう。',
        correctAnswer: 'I don\'t have anything to do this afternoon.（＝ I have nothing to do this afternoon.）',
        correctExplanation:
          '英語では一つの文に否定語は一つが原則。not を使うなら anything、nothing を使うなら not を消す。どちらの形でも意味は「今日の午後はすることが何もない」で同じである。書きかえ問題では両方の形を書けるようにしておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s262',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞的用法③：前置詞が残る形（a house to live in）',
    description: '不定詞の中の動詞が前置詞を必要とする場合に、文末の前置詞を落とさない習慣をつける',
    intro: '「住むための家」を a house to live と書くと、英語では意味が完成しません。live は「〜に住む」と言うために in を必要とするからです。名詞を前に出したせいで、行き場を失った前置詞が文の最後に取り残される。この「置き去りの前置詞」は、公立入試でも難関私立でもねらわれる定番です。',
    order: 762,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '不定詞の中の動詞が前置詞を必要とするとき、前置詞は文末に残す（a house to live in）。',
      '確認法：元の文に戻す。live in a house → a house to live in。',
      '頻出：write with（ペン）／sit on（いす）／play with（友達）／talk about（話題）／listen to。',
      '前置詞が不要な動詞では付けない（something to eat に前置詞は不要）。',
      '前置詞を落とすと、名詞と動詞の関係が切れて英文として成立しない。',
    ],
    sections: [
      {
        heading: '前置詞が残るしくみ',
        body: `形容詞的用法は「名詞を不定詞の目的語の位置から前に取り出した形」だと考えるとわかりやすい。取り出したときに、その名詞と動詞をつないでいた前置詞は、行き場がないので文末に残る。

■ 作り方の手順
①言いたい内容を、ふつうの文で作る。
　例）I live in a house.
②説明したい名詞（a house）を前に出す。
　例）a house … live in
③残りを to＋原形にして名詞のうしろへ。
　例）a house to live in（住むための家）

■ 頻出例
例）Give me a pen to write with.（書くためのペンをください）
　← write with a pen（ペンで書く）
例）I need a chair to sit on.（座るためのいすが必要だ）
　← sit on a chair（いすに座る）
例）He has no friends to play with.（いっしょに遊ぶ友達がいない）
　← play with friends（友達と遊ぶ）
例）We have a lot of things to talk about.（話すことがたくさんある）
　← talk about things（物事について話す）

★ ポイント：迷ったら①の元の文に必ず戻す。元の文で前置詞が必要だったなら、不定詞にしたときも必要である。`,
      },
      {
        heading: '前置詞がいらない場合との区別',
        body: `すべての不定詞に前置詞が残るわけではない。動詞が目的語を直接とるなら前置詞は不要である。

■ 前置詞が不要な例
例）something to eat（食べる物）← eat something（前置詞なしで目的語をとる）
例）a book to read（読む本）← read a book
例）homework to do（やるべき宿題）← do homework
例）a letter to write（書くべき手紙）← write a letter

■ 前置詞が必要な例
例）a house to live in ← live in a house
例）a chair to sit on ← sit on a chair
例）a friend to talk to ← talk to a friend
例）music to listen to ← listen to music

■ 同じ名詞でも動詞によって変わる
例）a pen to buy（買うためのペン）← buy a pen（前置詞なし）
例）a pen to write with（書くためのペン）← write with a pen（前置詞あり）

⚠ 注意：日本語訳はどちらも「〜するための○○」で同じになるので、訳から判断してはいけない。必ず英語の元の文（動詞＋前置詞＋名詞）を頭の中で作って確かめる。listen to / look at / talk about / wait for のように前置詞とセットで覚える動詞は、特に落としやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちには住む家がありません。」を英語にしなさい。',
        wrongAnswer: 'We have no house to live.',
        trapExplanation: '日本語の「住む家」に助詞「に」が現れないため、in が必要なことに気づかない。',
        correctAnswer: 'We have no house to live in.',
        correctExplanation:
          'live は「〜に住む」と言うために in を必要とする（live in Osaka）。名詞 house を前に出しても in は消えず、文末に残る。同じ形に a chair to sit on、a friend to talk to、a pen to write with がある。元の文 live in a house に戻して確認する習慣をつける。',
      },
      {
        question: '次の文の誤りを指摘しなさい。I want something cold to drink with.',
        wrongAnswer: '誤りはない（with が必要）',
        trapExplanation: '「前置詞を落とすと誤り」と覚えた反動で、必要のない前置詞まで付けてしまう。',
        correctAnswer: 'with が不要。I want something cold to drink. が正しい。',
        correctExplanation:
          'drink は目的語を直接とる動詞で、drink something のように前置詞を使わない。したがって something to drink のままでよい。前置詞を残すかどうかは、元の文（drink something／live in a house）で前置詞が要るかどうかだけで決まる。機械的に付けないこと。',
      },
    ],
  },

  {
    id: 'koko_eigo_s263',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞的用法④：the first 〜 to … と入試演習',
    description: '序数・最上級に続く不定詞や、慣用的な名詞＋不定詞の形を仕上げる',
    intro: '「彼はその質問に答えた最初の生徒だった」。この「最初に〜した人」という言い方は、英語では the first student to answer と不定詞で表します。序数や最上級のあとに来る不定詞は、意味が「〜すべき」ではなく「実際に〜した」になるのが特徴で、和訳問題でつまずきやすいところです。',
    order: 763,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'the first / the second / the last ＋名詞＋to〜＝「最初に〜する（した）…」。',
      'the only / the best など最上級・限定表現のあとも不定詞で説明できる。',
      'この形では「〜すべき」ではなく、実際に行われた（行われる）動作を表す。',
      'be動詞の時制で「した」か「する」かが決まる（was the first to 〜 なら過去の事実）。',
      '入試では「名詞＋to〜」を関係代名詞（who / which）に書きかえる問題も出る。',
    ],
    sections: [
      {
        heading: '序数・最上級に続く不定詞',
        body: `序数（first / second / third / last）や最上級（the best / the only）と結びついた名詞のうしろに不定詞を置くと、「〜する（した）最初の人・物」という意味になる。

■ 例文
例）He was the first student to answer the question.
　　（彼はその質問に答えた最初の生徒だった）
例）She was the last person to leave the room.
　　（彼女はその部屋を最後に出た人だった）
例）Yuri was the only girl to join the contest.
　　（ユリはそのコンテストに参加した唯一の女子だった）
例）Who was the first person to walk on the moon?
　　（月面を歩いた最初の人はだれですか）

■ 訳し方の注意
ふつうの形容詞的用法は「〜すべき・〜するための」と訳す（homework to do＝やるべき宿題）。しかしこの型では、動作は実際に行われている。the first student to answer は「答えるべき最初の生徒」ではなく「実際に答えた最初の生徒」である。

■ 関係代名詞への書きかえ
例）He was the first student to answer the question.
　＝ He was the first student that answered the question.
書きかえるときは、be動詞の時制に合わせて動詞を過去形にする（was → answered）。

★ ポイント：「first / last / only ＋名詞＋to〜」はひとまとまりの型として、例文ごと暗記してしまうのが速い。`,
      },
      {
        heading: '名詞＋不定詞の総仕上げ',
        body: `形容詞的用法でよく使われる名詞は限られている。次の組み合わせを覚えておけば、英作文でほぼ困らない。

■ 時間・機会を表す名詞
例）I have no time to watch TV.（テレビを見る時間がない）
例）I had a chance to talk with a foreign student.（留学生と話す機会があった）
例）It is time to go home.（もう家に帰る時間だ）

■ 方法・理由を表す名詞
例）This is the best way to learn new words.（これが新しい単語を覚える最良の方法だ）
例）I have a good reason to say no.（断るもっともな理由がある）

■ 予定・約束を表す名詞
例）We have a plan to visit the museum tomorrow.（明日、博物館を訪れる計画がある）
例）He kept his promise to help me.（彼は私を助けるという約束を守った）

■ 物・事を表す名詞
例）There are many things to remember before the test.（テスト前に覚えることがたくさんある）
例）I have some good news to tell you.（あなたに伝えるよい知らせがある）

⚠ 注意：these / those / much / many を伴っても語順は変わらない。things to remember の順で、remember things の語順に戻してはいけない。並べかえでは、まず「名詞のかたまり」を作り、そのうしろに to〜 を置くと決めておく。`,
      },
    ],
    trapExamples: [
      {
        question: '和訳しなさい。She was the first Japanese woman to climb the mountain.',
        wrongAnswer: '彼女はその山に登るべき最初の日本人女性だった。',
        trapExplanation: '形容詞的用法＝「〜すべき」と機械的に覚えているため、実際に登った事実を表す文を義務の意味に訳してしまう。',
        correctAnswer: '彼女はその山に登った最初の日本人女性だった。',
        correctExplanation:
          'the first / the last / the only ＋名詞＋to〜 の型では、不定詞は実際に行われた動作を表す。be動詞が was（過去）なので「登った」と訳す。関係代名詞を使えば She was the first Japanese woman that climbed the mountain. と書きかえられる。',
      },
      {
        question: '語を並べかえなさい。（things / are / to / there / many / remember）覚えることがたくさんある。',
        wrongAnswer: 'There are many to remember things.',
        trapExplanation: '「覚えること」という日本語の語順のまま、動詞 remember のうしろに things を置いてしまう。',
        correctAnswer: 'There are many things to remember.',
        correctExplanation:
          '形容詞的用法は必ず「名詞 ＋ to＋原形」の順である。まず many things という名詞のかたまりを作り、そのうしろに to remember を置く。something to eat、a lot of homework to do も同じ構造で、修飾される名詞が不定詞の目的語のはたらきをしている。',
      },
    ],
  },

  // ───────────── 3. 不定詞の副詞的用法（s264〜s268） ─────────────
  {
    id: 'koko_eigo_s264',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞的用法①：目的「〜するために」',
    description: '完成した文のうしろに目的を付け足す不定詞の使い方を身につける',
    intro: '「図書館へ行った」だけでは、なぜ行ったのかがわかりません。英語では文をいったん完成させてから、うしろに to＋動詞の原形を足して理由を説明します。I went to the library to study. のように、後半が「そのために」を担当する。この付け足しの感覚が、副詞的用法の正体です。',
    order: 764,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '副詞的用法の目的は「〜するために」。文が完成したあとに to＋原形を足す。',
      '目的の to〜 は取り除いても文が成り立つ（I went to the library. だけで意味が通る）。',
      '文頭に置くこともできる（To study math, I went to the library.）。カンマで区切る。',
      '「〜するために」を for＋動詞 で表すことはできない（for study は誤り）。',
      'go to 〜 to … のように to が二つ続いても、前は前置詞、後ろは不定詞で別物。',
    ],
    sections: [
      {
        heading: '文を完成させてから目的を足す',
        figureId: 'lf_kokoeigoext08_264',
        body: `副詞的用法の目的は、「なぜその動作をしたのか」を説明する付け足しである。したがって、まず主語＋動詞で文を完成させ、そのうしろに to＋原形を置く。

■ 例文
例）I went to the library to study math.（数学を勉強するために図書館へ行った）
例）She got up early to catch the first train.（始発列車に乗るために早起きした）
例）He came to Japan to learn Japanese.（日本語を学ぶために日本に来た）
例）We use this room to practice the piano.（ピアノを練習するためにこの部屋を使う）

■ 確認の方法
to〜 を消しても文になるかを見る。
　I went to the library.（○ 成立する）→ 目的の副詞的用法
　I want to study math. から to study math を消すと I want. となり意味をなさない → こちらは名詞的用法（目的語）

■ 文頭に置く形
強調したいときは前に出し、カンマで区切る。
例）To pass the exam, he studied very hard.（試験に合格するために、彼は必死に勉強した）

⚠ 注意：I went to the library. の to は前置詞（〜へ）で、to study の to は不定詞である。同じ形でも役割が違う。前置詞の to のうしろには名詞、不定詞の to のうしろには動詞の原形が来る、という違いで見分ける。`,
      },
      {
        heading: 'for との使い分け',
        body: `日本語の「〜のために」につられて for を使う誤りが非常に多い。for のうしろに置けるのは名詞であって、動詞の原形ではない。

■ 正しい形
例）I went to the store to buy some milk.（牛乳を買うために店へ行った）
例）I went to the store for some milk.（牛乳を買いに店へ行った／for のうしろは名詞）
例）× I went to the store for buy some milk.
例）× I went to the store for buying some milk.（この for -ing は「用途」を表す別の使い方で、この文では不自然）

■ for が使える「用途」の言い方
物の使いみちを説明するときは、for＋動名詞の形が使える。
例）This knife is for cutting bread.（このナイフはパンを切るためのものだ）
例）This room is used for storing old books.（この部屋は古い本を保管するのに使われている）
ただし「人がある目的で動く」場合は to不定詞を使う。

■ 「〜しに行く」の言い方
例）I went to see a movie.（映画を見に行った）
例）He came to see me yesterday.（彼は昨日私に会いに来た）
go / come のあとに目的を付け足す形は会話でも頻出である。

★ ポイント：動詞を続けたいなら to＋原形、名詞を続けたいなら for＋名詞。この二本立てで整理すれば迷わない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は英語を勉強するためにアメリカへ行きました。」を英語にしなさい。',
        wrongAnswer: 'I went to America for study English.',
        trapExplanation: '日本語の「〜のために」を for に直訳し、そのうしろに動詞の原形を続けてしまう。',
        correctAnswer: 'I went to America to study English.',
        correctExplanation:
          'for は前置詞なので、うしろには名詞（または動名詞）しか置けない。動詞を続けて「〜するために」と言うときは to＋動詞の原形を使う。名詞で言いたければ I went to America for the study of English. のようになるが、入試では to study English の形が求められる。',
      },
      {
        question: '次の文の to visit は何用法か。He saved money to visit Australia.',
        wrongAnswer: '名詞的用法（オーストラリアを訪れることのためにお金をためた）',
        trapExplanation: '「訪れること」と訳せるうえ、動詞 saved のうしろにあるので目的語だと思ってしまう。',
        correctAnswer: '副詞的用法（目的を表す）',
        correctExplanation:
          'saved の目的語はすでに money である。to visit Australia を消しても He saved money. で文が成立するので、これは付け足しの副詞的用法にあたる。「動詞のうしろにあるから目的語」ではなく、目的語がすでに埋まっていないかを確認するのが判定のこつである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s265',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞的用法②：in order to と Why への答え方',
    description: '目的をはっきり示す in order to / so as to と、Why 疑問文への不定詞の返答を習得する',
    intro: '「なぜ早く起きたの？」と聞かれて、英語では Because 〜 と答えるほかに、To catch the first train. と不定詞だけで答える言い方があります。目的を答えるときの決まり文句で、リスニングにも並べかえにも出ます。目的をはっきり示す in order to とあわせて整理しておきましょう。',
    order: 765,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'in order to 〜／so as to 〜 は「〜するために」を明示する言い方。to 〜 だけより目的の意味がはっきりする。',
      '否定は in order not to 〜／so as not to 〜（〜しないように）。',
      'Why 〜? への答え方は二通り。Because＋文／To＋動詞の原形。',
      'To 〜. で答えるときは主語や be動詞を付けない（Because I wanted to 〜 の代わり）。',
      'so that 主語 can 〜 も「〜できるように」という目的を表す（難関私立で頻出）。',
    ],
    sections: [
      {
        heading: '目的をはっきり示す言い方',
        body: `to＋原形だけでも目的は表せるが、「〜して」（原因）や「〜すること」（名詞的）と読み違えられることがある。目的だと明示したいときは in order to や so as to を使う。

■ in order to 〜
例）He got up early in order to catch the first train.
　　（始発列車に乗るために早起きした）
例）I studied hard in order to pass the entrance exam.
　　（入試に合格するために一生懸命勉強した）

■ so as to 〜
例）She spoke slowly so as to make herself understood.
　　（自分の言うことをわかってもらうためにゆっくり話した）

■ 否定形の位置に注意
「〜しないように」は not を to の直前に入れる。
例）He ran to the station in order not to miss the train.（電車に乗り遅れないように駅まで走った）
例）Write your name clearly so as not to be mistaken for someone else.（他の人とまちがえられないように名前をはっきり書きなさい）

■ so that 主語 can 〜
節（主語＋動詞）を使って目的を表す形もある。
例）I got up early so that I could catch the first train.
　　（始発に乗れるように早起きした）
過去の文では could を使う点に注意する。

★ ポイント：不定詞は主語が同じときにしか使えない。「彼が〜できるように私が…した」のように主語が異なるときは so that を使う。`,
      },
      {
        heading: 'Why 〜? への二通りの答え方',
        body: `Why で聞かれたときの答えには、理由を述べる Because 型と、目的を述べる To 型がある。

■ Because＋主語＋動詞
例）Why did you go to the station? — Because I wanted to meet my aunt.
　　（なぜ駅へ行ったのですか — おばに会いたかったからです）

■ To＋動詞の原形
例）Why did you go to the station? — To meet my aunt.
　　（おばに会うためです）
主語も be動詞も付けず、To から始めるのが決まりである。

⚠ 注意：次の答え方はいずれも誤り。
　× Because to meet my aunt.（Because のうしろは文）
　× For meet my aunt.（for のうしろに原形は置けない）
　× To met my aunt.（to のうしろは原形）

■ 目的を答えているか、理由を答えているかで選ぶ
「これからしようとしたこと」なら To 〜、「すでにある事情・気持ち」なら Because 〜 が自然である。
例）Why are you studying so hard? — To become a doctor.（医者になるためです）
例）Why were you absent yesterday? — Because I had a fever.（熱があったからです）

★ ポイント：入試の対話文完成では、質問が Why で、選択肢に To＋原形があれば、まずそれを疑ってよい。ただし「熱があった」のように目的ではありえない内容なら Because を選ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: '答えとして適切なものを選びなさい。Why did you go to the library? （ア）Because I wanted to borrow some books.（イ）For borrow some books.（ウ）To borrowed some books.',
        wrongAnswer: '（イ）For borrow some books.',
        trapExplanation: '「〜するために」を for と覚えているうえ、短く答える形として自然に見えてしまう。',
        correctAnswer: '（ア）Because I wanted to borrow some books.（または To borrow some books.）',
        correctExplanation:
          'for のうしろに動詞の原形は置けないので（イ）は誤り。（ウ）は to のうしろが過去形になっているので誤り。正しくは Because＋主語＋動詞、または To＋動詞の原形。目的を短く答えるなら To borrow some books. となる。',
      },
      {
        question: '「彼は遅れないように早く家を出た。」を in order を使って英語にしなさい。',
        wrongAnswer: 'He left home early in order to not be late.',
        trapExplanation: 'not を動詞の直前に置く癖が出て、to と原形の間に not を割りこませてしまう。',
        correctAnswer: 'He left home early in order not to be late.',
        correctExplanation:
          '不定詞を否定するときは not を to の前に置くので、in order not to 〜 の語順になる。so as を使う場合も so as not to be late となる。so that を使えば He left home early so that he would not be late. と書ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s266',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞的用法③：感情の原因「〜して…だ」',
    description: 'glad / surprised / sorry などの感情形容詞に続く不定詞の型を固める',
    intro: '「会えてうれしい」「知って驚いた」。日本語では「〜して」と理由を先に言いますが、英語は I am glad と気持ちを先に言い、そのあとで to see you と理由を足します。感情を表す形容詞のうしろに来る不定詞は、目的ではなく原因を表す。この語順の逆転をつかむと、会話表現がまとめて身につきます。',
    order: 766,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '感情を表す形容詞 ＋ to＋動詞の原形 ＝「〜して…だ」（原因・理由）。',
      '頻出の形容詞：glad / happy / sad / sorry / surprised / excited / disappointed / lucky。',
      '目的（〜するために）と原因（〜して）の区別は、前にある語が感情形容詞かどうかで決まる。',
      'I\'m glad to meet you. / I\'m sorry to hear that. は会話の定型表現。',
      '人の気持ちは -ed（surprised）、物事の性質は -ing（surprising）で表す。',
    ],
    sections: [
      {
        heading: '気持ちを先に、理由をあとに',
        figureId: 'lf_kokoeigoext08_266',
        body: `英語は「どう感じたか」を先に述べ、「なぜそう感じたか」をあとから to＋原形で足す。日本語と順序が逆になる。

■ 例文
例）I am glad to see you again.（またお会いできてうれしいです）
例）She was surprised to hear the news.（彼女はその知らせを聞いて驚いた）
例）I'm sorry to hear that.（それを聞いて残念です／お気の毒に）
例）He was happy to receive your letter.（彼はあなたの手紙を受け取って喜んだ）
例）We were excited to watch the final game.（決勝戦を見てわくわくした）
例）I was disappointed to lose the match.（試合に負けてがっかりした）

■ よく使う感情形容詞
glad（うれしい）／happy（幸せな）／sad（悲しい）／sorry（残念な・すまなく思う）／surprised（驚いた）／excited（わくわくした）／disappointed（がっかりした）／lucky（幸運な）

■ 目的との見分け方
to〜 の直前を見る。be動詞＋感情形容詞 なら原因、動作動詞で文が完成していれば目的である。
例）I was glad to go there.（行けてうれしかった＝原因）
例）I went there to see her.（彼女に会うために行った＝目的）

★ ポイント：I'm glad to 〜／I'm sorry to 〜／Nice to meet you. は、会話文の空所補充で頻出。まるごと音で覚えておくと反応が速くなる。`,
      },
      {
        heading: '-ed と -ing の使い分け',
        body: `感情に関する語には、-ed 形と -ing 形の二種類がある。どちらを使うかで意味が変わるため、入試で必ず問われる。

■ -ed 形：人が「そう感じている」
例）I was surprised at the news.（私はその知らせに驚いた）
例）The children were excited.（子どもたちは興奮していた）
例）She looked bored during the speech.（彼女は演説の間、退屈そうだった）

■ -ing 形：物事が「そう感じさせる」
例）The news was surprising.（その知らせは驚くべきものだった）
例）The game was exciting.（その試合はわくわくさせるものだった）
例）His speech was boring.（彼の演説は退屈だった）

■ 感情の原因を表す不定詞と組み合わせる
例）I was excited to see the exciting game.
　　（私はそのわくわくする試合を見て興奮した）
主語が人（I）なら excited、試合そのものを説明するなら exciting になる。

⚠ 注意：I was exciting to see the game. と書くと「私は見ていて（周囲を）わくわくさせる存在だった」という意味になってしまう。主語が人か物かを必ず確認する。interested / interesting、tired / tiring、surprised / surprising も同じ関係である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の to hear は何用法か。I was very sad to hear about the accident.',
        wrongAnswer: '副詞的用法（目的：事故について聞くために悲しかった）',
        trapExplanation: '副詞的用法＝「〜するために」と一対一で覚えているため、感情の原因を目的と取り違えてしまう。',
        correctAnswer: '副詞的用法（感情の原因：事故について聞いて悲しかった）',
        correctExplanation:
          '副詞的用法には目的・原因・結果の三つがある。直前が be動詞＋感情を表す形容詞（sad）のときは原因を表し、「〜して」と訳す。目的なら I went to the hospital to see him. のように、動作動詞で文が完成している形になる。',
      },
      {
        question: '（　）に入る語を選びなさい。I was very （interested / interesting） to visit the old temple.',
        wrongAnswer: 'interesting',
        trapExplanation: '「おもしろかった」という日本語から、-ing 形のほうが自然に感じてしまう。',
        correctAnswer: 'interested',
        correctExplanation:
          '主語が I（人）で「興味を持った」という気持ちを表すので -ed 形の interested を使う。-ing 形は物事の性質を表し、The old temple was interesting.（その古い寺は興味深かった）のように使う。excited / exciting、surprised / surprising も同じ使い分けになる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s267',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞的用法④：結果と判断の根拠',
    description: 'grew up to be 〜 型の結果用法と、must be kind to 〜 型の判断根拠を読み解く',
    intro: '「彼は成長して有名な歌手になった」を英語では He grew up to be a famous singer. と言います。to be を「なるために」と訳すと、生まれたときから歌手を目指していたことになってしまう。ここでの不定詞は目的ではなく、そのあとに起きた結果を表しています。難関私立の和訳問題で差がつく用法です。',
    order: 767,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '結果を表す不定詞：grow up to be 〜（成長して〜になる）／live to be 〜（生きて〜歳になる）。',
      '結果の用法は「…して（その結果）〜になった」と、前から順に訳す。',
      'wake up to find 〜（目を覚ますと〜だとわかる）も結果の型。',
      '判断の根拠：must be / can\'t be ＋形容詞 ＋ to〜（〜するとは…にちがいない）。',
      '判断の根拠では「〜するなんて」と訳すと自然になる（You are kind to say so.）。',
    ],
    sections: [
      {
        heading: '結果を表す不定詞',
        body: `目的の不定詞は「これからしようとすること」を表すが、結果の不定詞は「実際にそうなったこと」を表す。使われる動詞と形が決まっているので、型ごと覚える。

■ grow up to be 〜（成長して〜になる）
例）He grew up to be a famous singer.
　　（彼は成長して有名な歌手になった）
例）She grew up to be a doctor like her mother.
　　（彼女は成長して母親のような医者になった）

■ live to be 〜（〜歳まで生きる）
例）My grandfather lived to be ninety.
　　（祖父は九十歳まで生きた）

■ wake up to find 〜（目が覚めると〜だとわかる）
例）He woke up to find himself alone in the room.
　　（彼が目を覚ますと、部屋に一人だった）

■ 訳す順序
結果の不定詞は、英語の語順どおり前から後ろへ訳す。目的の不定詞のように後ろから訳し上げると意味が壊れる。
　○ 成長して有名な歌手になった
　× 有名な歌手になるために成長した

⚠ 注意：only to 〜 は「（…したが）結局〜しただけだった」という残念な結果を表す。He ran to the station only to find that the train had left.（駅まで走ったが、列車はもう出たあとだった）。難関私立の長文で出る。`,
      },
      {
        heading: '判断の根拠を表す不定詞',
        body: `「〜するなんて…だ」と、人の性質や状況を判断する根拠を示す使い方である。多くは助動詞 must / can't や、人の性質を表す形容詞とともに使われる。

■ must be 〜 to …（…するとは〜にちがいない）
例）He must be kind to help an old woman with her bags.
　　（おばあさんの荷物を手伝うとは、彼は親切にちがいない）
例）She must be crazy to swim in the sea in winter.
　　（冬に海で泳ぐとは、彼女はどうかしているにちがいない）

■ 人の性質を表す形容詞 ＋ to …（…するとは〜だ）
例）You are very kind to say so.（そう言ってくれるとはとても親切ですね）
例）He was careless to leave his bag on the train.（電車にかばんを置き忘れるとは、彼は不注意だった）

■ 感情の原因との違い
感情の原因は glad / sorry / surprised のように「気持ち」を表す形容詞に付く。判断の根拠は kind / careless / wise / foolish のように「性質」を表す形容詞に付く。
例）I'm glad to see you.（気持ち → 原因）
例）You are kind to help me.（性質 → 判断の根拠）

★ ポイント：性質を表す形容詞は、It is kind of you to help me.（s274）の形にも書きかえられる。of を使うのはこの仲間の形容詞だけである。`,
      },
    ],
    trapExamples: [
      {
        question: '和訳しなさい。My uncle grew up to be a pilot.',
        wrongAnswer: 'おじはパイロットになるために成長した。',
        trapExplanation: '副詞的用法をすべて「〜するために」と訳す習慣が、結果を表す型にもそのまま適用されてしまう。',
        correctAnswer: 'おじは成長してパイロットになった。',
        correctExplanation:
          'grow up to be 〜 は結果を表す決まった型で、「成長して〜になる」と前から順に訳す。live to be ninety（九十歳まで生きる）も同じ。目的と結果の区別は、動詞が grow up / live / wake up などかどうかで見当がつく。',
      },
      {
        question: '和訳しなさい。He must be very tired to fall asleep during the class.',
        wrongAnswer: '彼は授業中に眠るためにとても疲れているにちがいない。',
        trapExplanation: '直前が形容詞なので感情の原因と考えるか、あるいは「〜するために」と目的で訳してしまう。',
        correctAnswer: '授業中に眠ってしまうとは、彼はとても疲れているにちがいない。',
        correctExplanation:
          'must be ＋形容詞 ＋ to〜 は、そう判断した根拠を示す型で、「〜するなんて・〜するとは」と訳す。to fall asleep（眠りこんでしまうこと）が、疲れているという判断の証拠になっている。You are kind to help me. も同じ仲間である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s268',
    subject: 'eigo',
    examType: 'koko',
    title: '不定詞の三用法：総合識別演習',
    description: '長文中の to不定詞を、位置と直前の語から瞬時に分類できるようにする',
    intro: '入試の下線部問題は「同じ用法のものを選べ」という形で出ます。四つの選択肢を一つずつ訳していては時間が足りません。実は用法は、to〜 の直前にある語を見るだけで八割方決まります。名詞なら形容詞的、感情形容詞なら原因、完成した文のあとなら目的。この反射を作ります。',
    order: 768,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '直前が名詞 → 形容詞的用法（something to eat／time to go）。',
      '直前が be動詞＋感情形容詞 → 副詞的用法（原因）。',
      '完成した文のあと → 副詞的用法（目的）。',
      '主語・目的語・補語の席にある → 名詞的用法。',
      'It is 〜 to … の to は、形だけの主語 It に対する本当の主語なので名詞的用法。',
      '選択肢問題は、まず自分の下線部を分類してから、選択肢を同じ手順で分類する。',
    ],
    sections: [
      {
        heading: '直前の語で決める',
        body: `不定詞の用法は、to の直前にある語を見ればほとんど決まる。次の順に確認する。

■ ①直前が名詞・代名詞 → 形容詞的用法
例）I have a lot of work to do.（work＝名詞）
例）Give me something to drink.（something＝代名詞）
ただし tell me to go のように「動詞＋人＋to〜」の形（s280）は例外で、名詞的用法の一種として扱う。

■ ②直前が be動詞＋感情形容詞 → 副詞的用法（原因）
例）I was glad to hear from you.
例）She was surprised to see the dog.

■ ③文がすでに完成している → 副詞的用法（目的）
例）He went to the store to buy some eggs.（He went to the store. で完成）

■ ④それ以外（主語・目的語・補語の席） → 名詞的用法
例）To read books is important.（主語）
例）I want to read this book.（目的語）
例）My hope is to read many books.（補語）

★ ポイント：判定に迷ったら「to〜 を消してみる」に戻る。消して文が残れば副詞的用法、残らなければ名詞的用法か形容詞的用法である。`,
      },
      {
        heading: '入試での問われ方',
        body: `■ 下線部と同じ用法を選ぶ問題
下線部：I got up early to see the sunrise.（目的）
　ア I want to see the sunrise.（目的語＝名詞的用法）
　イ I have no time to see the sunrise.（time を説明＝形容詞的用法）
　ウ He went to the beach to see the sunrise.（文が完成→目的＝副詞的用法）
　エ To see the sunrise is wonderful.（主語＝名詞的用法）
答えはウ。まず自分の下線部を分類してから、選択肢を同じ手順で処理する。

■ 和訳問題
用法によって訳し方が決まる。
　名詞的用法 →「〜すること」
　形容詞的用法 →「〜するための・〜すべき」（ただし first / last のあとは「実際に〜した」）
　副詞的用法（目的）→「〜するために」
　副詞的用法（原因）→「〜して」
　副詞的用法（結果）→「…して（その結果）〜になった」

■ 書きかえ問題
名詞的用法の主語は It で受けかえられる（To swim is fun. → It is fun to swim.）。形容詞的用法は関係代名詞に、目的の副詞的用法は in order to や so that に書きかえられる。

⚠ 注意：長文中では to のあとに副詞が入ることがある（to quickly finish the work）。to と原形の間に語が入っても不定詞であることに変わりはない。`,
      },
    ],
    trapExamples: [
      {
        question: '下線部と同じ用法のものを選びなさい。下線部：She has many books to read.（ア）I like to read books.（イ）He came here to read books.（ウ）I want something to read.',
        wrongAnswer: '（ア）I like to read books.',
        trapExplanation: '同じ read という動詞が使われているうえ、どちらも「読む」と訳せるので、動詞の一致で選んでしまう。',
        correctAnswer: '（ウ）I want something to read.',
        correctExplanation:
          '下線部の to read は直前の名詞 books を説明する形容詞的用法。（ウ）も直前の代名詞 something を説明しているので同じ用法である。（ア）は like の目的語で名詞的用法、（イ）は He came here. で文が完成しているので目的の副詞的用法。動詞ではなく位置で判断する。',
      },
      {
        question: '次の文の to become は何用法か。It is not easy to become a professional player.',
        wrongAnswer: '副詞的用法（プロ選手になるために簡単ではない）',
        trapExplanation: '文の後半に置かれているため「付け足し＝副詞的用法」と早合点してしまう。It を「それ」と訳すのも一因である。',
        correctAnswer: '名詞的用法（It は形式主語で、本当の主語が to become 以下）',
        correctExplanation:
          'It is 〜 to … の It は形だけの主語で、意味の上での主語は to become a professional player である。したがって主語の席にある名詞的用法にあたる。To become a professional player is not easy. と書きかえられることからも確認できる。',
      },
    ],
  },

  // ───────────── 4. 疑問詞＋不定詞（s269〜s271） ─────────────
  {
    id: 'koko_eigo_s269',
    subject: 'eigo',
    examType: 'koko',
    title: '疑問詞＋不定詞①：how to 〜 の使い方',
    description: 'know / tell / learn などのうしろに置く「how＋to＋原形」を使いこなす',
    intro: '「使い方を教えて」と言いたいとき、英語では how to use this と言います。how（どのように）と to use（使うこと）をつないで、「どう使えばよいか」というひとかたまりの名詞にしてしまう仕組みです。取扱説明や道案内で必ず出てくるうえ、間接疑問文への書きかえもねらわれます。',
    order: 769,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'how to＋動詞の原形＝「どのように〜すればよいか・〜のしかた」。',
      '全体がひとかたまりの名詞として、動詞の目的語になる。',
      'よく使う動詞：know / tell / teach / learn / show / ask / understand。',
      'tell / teach / show は「人＋how to〜」の語順（tell me how to get there）。',
      'know how to swim は「泳ぎ方を知っている＝泳げる」の意味になる。',
    ],
    sections: [
      {
        heading: 'how to のかたまりを作る',
        figureId: 'lf_kokoeigoext08_269',
        body: `疑問詞と不定詞を組み合わせると、「どうすればよいか」という内容をひとかたまりの名詞にできる。文の中では目的語の席に入る。

■ 基本形
動詞 ＋ how ＋ to＋動詞の原形
例）I know how to play the guitar.（ギターの弾き方を知っている）
例）He learned how to cook Japanese food.（彼は和食の作り方を学んだ）
例）Do you know how to get to the station?（駅への行き方を知っていますか）

■ 人を間にはさむ動詞
tell / teach / show は「だれに」を先に置く。
例）Please tell me how to use this machine.（この機械の使い方を教えてください）
例）My father taught me how to ride a bike.（父は自転車の乗り方を教えてくれた）
例）Can you show me how to send an e-mail?（メールの送り方を見せてもらえますか）

■ 「〜できる」に近い意味
know how to 〜 は「〜のしかたを知っている」から「〜できる」に近い意味になる。
例）She knows how to swim.（彼女は泳ぎ方を知っている＝泳げる）
ただし can swim（能力として泳げる）とは重なりつつも、know how to は「方法を心得ている」ことに重点がある。

⚠ 注意：how to のうしろは必ず原形。× how to plays／× how to played／× how to playing はすべて誤り。`,
      },
      {
        heading: '長さのある目的語として扱う',
        body: `how to〜 のかたまりは、そのまま名詞ひとつ分としてはたらく。したがって、その前後の形は名詞を置いたときと同じになる。

■ 名詞と置きかえて確認する
例）I know his name.（名詞）
例）I know how to use this camera.（how to のかたまり）
どちらも know の目的語なので、同じ位置に入る。

■ 疑問文・否定文でも形は変わらない
例）Do you know how to make miso soup?（みそ汁の作り方を知っていますか）
例）I don't know how to answer this question.（この質問にどう答えたらよいかわからない）

■ 目的語が二つある形との組み合わせ
例）He told me how to solve the problem.（彼はその問題の解き方を教えてくれた）
「me」が「だれに」、「how to solve the problem」が「何を」にあたる。この二つの順序は入れかえられない。
　× He told how to solve the problem me.

■ 会話でよく出る表現
例）Could you tell me how to get to the museum?（博物館への行き方を教えていただけますか）
例）I want to learn how to speak Chinese.（中国語の話し方を学びたい）
道案内は公立入試のリスニング・対話文の定番なので、この形はそのまま覚えておく。

★ ポイント：how to のうしろにも目的語を続けられる（how to use this machine）。この machine を落とすと文が不完全になるので注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。My mother taught me how （make） a cake.',
        wrongAnswer: 'making',
        trapExplanation: '「作り方」という日本語の名詞的な感じから、-ing 形（動名詞）にしてしまう。',
        correctAnswer: 'to make',
        correctExplanation:
          '疑問詞と組み合わせて「〜のしかた」を表すのは how＋to＋動詞の原形の形で、how making とは言わない。how to make a cake 全体が taught の目的語になっている。tell me how to use it、show me how to do it も同じ形である。',
      },
      {
        question: '語を並べかえなさい。（tell / how / me / to / the station / you / get to / could）駅への行き方を教えていただけますか。',
        wrongAnswer: 'Could you tell how to get to the station me?',
        trapExplanation: '「〜への行き方を私に」という日本語の語順のまま、目的語 me を文末に置いてしまう。',
        correctAnswer: 'Could you tell me how to get to the station?',
        correctExplanation:
          'tell / teach / show は「人 → 内容」の順に目的語を並べる。how to get to the station は長いが、それでもひとかたまりの名詞なので me のうしろに置く。人を文末に回すことはできない。道をたずねる定型表現としてそのまま覚えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s270',
    subject: 'eigo',
    examType: 'koko',
    title: '疑問詞＋不定詞②：what / when / where / which to',
    description: 'how 以外の疑問詞と不定詞の組み合わせ、および which＋名詞＋to の形を覚える',
    intro: '買い物で迷ったとき、英語では I can\'t decide which to buy. と言います。how to だけでなく、what・when・where・which も不定詞と組み合わせられる。ただし why だけはこの形をとりません。使える語と使えない語をはっきりさせておくと、選択問題で確実に得点できます。',
    order: 770,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'what to〜（何を〜すべきか）／when to〜（いつ〜すべきか）／where to〜（どこで〜すべきか）。',
      'which to〜（どちらを〜すべきか）／which＋名詞＋to〜（どちらの…を〜すべきか）。',
      'why to〜 という形は使わない（理由は不定詞では表せない）。',
      'what to do は「何をすべきか」、how to do it は「どうやってすべきか」で意味が違う。',
      'これらのかたまりは、動詞の目的語になるほか、主語や補語にもなれる。',
    ],
    sections: [
      {
        heading: '疑問詞ごとの意味',
        body: `疑問詞に to＋原形を続けると、「何を／いつ／どこで〜すべきか」という内容のかたまりになる。

■ what to 〜（何を〜すべきか）
例）I don't know what to do next.（次に何をすべきかわからない）
例）Please tell me what to say at the meeting.（会議で何を言えばよいか教えてください）

■ when to 〜（いつ〜すべきか）
例）Tell me when to start.（いつ始めればよいか教えて）
例）He didn't know when to stop talking.（彼はいつ話をやめればよいかわからなかった）

■ where to 〜（どこで／どこへ〜すべきか）
例）I asked him where to put the box.（その箱をどこに置けばよいか彼にたずねた）
例）We haven't decided where to go this summer.（この夏どこへ行くかまだ決めていない）

■ which to 〜（どちらを〜すべきか）
例）I can't decide which to buy.（どちらを買うべきか決められない）
名詞を伴う場合は which のすぐうしろに置く。
例）I can't decide which book to buy.（どちらの本を買うべきか決められない）
例）Tell me which train to take.（どの電車に乗ればよいか教えて）

⚠ 注意：why to〜 という言い方はしない。「なぜ〜すべきか」は why I should 〜 のように、主語と助動詞を使った間接疑問文で表す。`,
      },
      {
        heading: 'かたまりが置かれる位置',
        body: `疑問詞＋不定詞は名詞のはたらきをするので、目的語のほかに主語・補語にもなれる。

■ 目的語（最も多い）
例）She knows what to bring to the party.（パーティーに何を持っていけばよいか知っている）

■ 補語
例）The problem is where to hold the meeting.（問題はどこで会議を開くかだ）

■ 主語（かたい言い方だが、読解では出る）
例）What to do next is the question.（次に何をすべきかが問題だ）

■ what to do と how to do it の違い
例）I don't know what to do.（何をすべきかわからない＝内容が不明）
例）I don't know how to do it.（どうやってすればよいかわからない＝方法が不明）
how to do のうしろには目的語 it が必要である。do の目的語が how では埋まらないためで、what to do には it を付けない（what がすでに目的語だから）。

★ ポイント：what to do it とすると目的語が二重になるので誤り。逆に how to do のあとで it を落とすのも誤り。この対比は難関私立の正誤問題で頻出である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。I didn\'t know why to answer his question.',
        wrongAnswer: 'I didn\'t know why to answering his question.',
        trapExplanation: '疑問詞ならどれでも不定詞と組めると思いこみ、動詞の形だけを直そうとしてしまう。',
        correctAnswer: 'I didn\'t know how to answer his question.（または why I should answer his question.）',
        correctExplanation:
          'why to〜 という形は英語に存在しない。「どう答えればよいか」なら how to answer、「なぜ答えるべきか」なら why I should answer のように主語と助動詞を使った間接疑問文にする。使えるのは what / when / where / which / how である。',
      },
      {
        question: '（　）に入るものを選びなさい。It was so dark that I didn\'t know （what to do / what to do it）.',
        wrongAnswer: 'what to do it',
        trapExplanation: 'how to do it という形を覚えているため、what のときも同じように it が必要だと考えてしまう。',
        correctAnswer: 'what to do',
        correctExplanation:
          'what 自体が do の目的語（何を）にあたるので、さらに it を置くと目的語が二つになり誤りになる。一方 how は方法を表すだけで目的語にならないため、how to do it のように it が必要である。what to do と how to do it をセットで覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s271',
    subject: 'eigo',
    examType: 'koko',
    title: '疑問詞＋不定詞③：間接疑問文への書きかえ',
    description: '「疑問詞＋to不定詞」と「疑問詞＋主語＋should/can＋動詞」の相互変換を身につける',
    intro: 'how to use it は「使い方」ですが、これを文でくわしく言うと how I should use it になります。入試の書きかえ問題では、この二つを行き来させる出題が定番です。ポイントは二つ、主語をだれにするかと、疑問文の語順にしないこと。ここを外すと一気に減点されます。',
    order: 771,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '疑問詞＋to不定詞 ＝ 疑問詞＋主語＋should（または can）＋動詞の原形。',
      '義務・当然の意味なら should、可能・方法の意味なら can を使う。',
      '間接疑問文の中は「主語＋動詞」の平叙文の語順（疑問文の語順にしない）。',
      '補う主語は、その動作を実際にする人（Tell me how to 〜 なら I）。',
      '主節が過去形なら should → should のまま、can → could に変える（時制の一致）。',
    ],
    sections: [
      {
        heading: '書きかえの手順',
        body: `疑問詞＋不定詞は「だれがするのか」を言わない形である。文に開くときは、その動作をする人を主語として補い、should または can を入れる。

■ 手順
①動作をするのはだれかを決める。
②「疑問詞＋主語＋should/can＋動詞の原形」の順に並べる。

■ 例
例）I don't know what to do.
　＝ I don't know what I should do.（するのは私）
例）Tell me how to use this machine.
　＝ Tell me how I should use this machine.（使うのは私）
例）She knows where to buy the ticket.
　＝ She knows where she can buy the ticket.（買うのは彼女）
例）He didn't know when to start.
　＝ He didn't know when he should start.（始めるのは彼）

■ should と can の選び方
「〜すべきか」という義務・判断なら should、「〜できるか・どうすれば〜できるか」という方法・可能なら can を選ぶ。どちらでも意味が通る場合が多いが、道順や入手方法は can が自然である。

★ ポイント：主語は必ずしも文の主語と同じではない。Tell me how to get there. の「行く」のは話し手（I）である。だれの動作かを日本語で確かめてから書く。`,
      },
      {
        heading: '間接疑問文の語順に注意',
        body: `書きかえで最も多い誤りが、疑問文の語順のまま書いてしまうことである。

■ 正しい語順
文の中に入った疑問詞のかたまりは、ふつうの文（主語＋動詞）の語順になる。
例）○ I don't know what I should do.
例）× I don't know what should I do.
例）○ Tell me where he lives.
例）× Tell me where does he live.

■ 三単現・時制にも注意
間接疑問の中の動詞も、主語と時制に合わせる。
例）Do you know what he wants?（× what does he want）
例）I didn't know where she was.（主節が過去なので was）

■ 主節が過去のとき
例）I didn't know what to say.
　＝ I didn't know what I should say.
should は過去でも形が変わらないのでそのまま使える。can を使う場合は could にする。
例）He didn't know how to open the box.
　＝ He didn't know how he could open the box.

⚠ 注意：不定詞の形にはもともと時制がないため、書きかえるときに初めて時制を決めることになる。主節の動詞が過去形かどうかを必ず確認してから助動詞を選ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。I don\'t know what to say to her.',
        wrongAnswer: 'I don\'t know what should I say to her.',
        trapExplanation: '疑問詞で始まるので疑問文だと錯覚し、「疑問詞＋助動詞＋主語」の語順で書いてしまう。',
        correctAnswer: 'I don\'t know what I should say to her.',
        correctExplanation:
          '文の中に組みこまれた疑問詞のかたまりは、平叙文と同じ「主語＋（助動詞）＋動詞」の語順になる。これを間接疑問文という。Do you know where he lives?（× where does he live）も同じ原則で、語順の乱れは最も減点されやすい誤りである。',
      },
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。He didn\'t know how to get to the hall.',
        wrongAnswer: 'He didn\'t know how he can get to the hall.',
        trapExplanation: '不定詞には時制がないため、主節が過去であることを見落として can のまま書いてしまう。',
        correctAnswer: 'He didn\'t know how he could get to the hall.',
        correctExplanation:
          '主節の動詞が didn\'t know と過去形なので、従属節の助動詞も過去形の could にそろえる（時制の一致）。should は過去でも形が変わらないので、how he should get to the hall と書くこともできる。まず主節の時制を確認する習慣をつける。',
      },
    ],
  },

  // ───────────── 5. It is ...(for 人) to 〜（s272〜s275） ─────────────
  {
    id: 'koko_eigo_s272',
    subject: 'eigo',
    examType: 'koko',
    title: 'It is ... to 〜①：形式主語の it',
    description: '長い主語を避けるために it を先に置く形と、その訳し方を理解する',
    intro: '英語は文の頭が重くなるのを嫌います。To read English books every day is important. は正しい文ですが、動詞 is にたどりつくまでが長すぎて読みにくい。そこで先に軽い It を置き、中身をあとから to 〜 で言い直します。「それは」と訳さない it の登場です。',
    order: 772,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'It is ＋形容詞 ＋ to＋動詞の原形＝「〜することは…だ」。',
      'この It は形式主語（仮主語）。「それは」とは訳さない。',
      '本当の主語は to〜 以下（真主語）。',
      'To 〜 is …. の形と同じ意味だが、英語では It で始める形が自然。',
      'よく使う形容詞：easy / difficult / hard / important / necessary / dangerous / interesting / fun。',
    ],
    sections: [
      {
        heading: '重い主語をうしろへ送る',
        figureId: 'lf_kokoeigoext08_272',
        body: `不定詞を主語にすると、動詞が出てくるまでが長くなる。そこで、意味を持たない It を主語の席に座らせ、本当の主語を文の後半に回す。

■ 形
It ＋ is（was）＋ 形容詞 ＋ to＋動詞の原形 …
例）It is easy to swim in this river.（この川で泳ぐのは簡単だ）
例）It is important to read books every day.（毎日本を読むことは大切だ）
例）It was dangerous to go out in the storm.（嵐の中を外出するのは危険だった）
例）It is fun to talk with foreign people.（外国の人と話すのは楽しい）

■ 元の形との対応
例）To read books every day is important.
　＝ It is important to read books every day.
どちらも意味は同じだが、実際の英文では下の形が圧倒的に多い。

■ 訳し方
It は訳さず、to〜 以下を「〜することは」と主語のように訳す。
　○ 毎日本を読むことは大切だ
　× それは毎日本を読むことが大切だ

⚠ 注意：It is easy swimming in this river. のように動名詞を続けることはできない。形式主語の it が受けるのは to不定詞である（動名詞を使うなら Swimming in this river is easy. のように主語の位置に置く）。`,
      },
      {
        heading: '天候・時刻の it との区別',
        body: `it には複数の使い方があり、入試ではその識別が問われる。

■ ①形式主語の it（訳さない）
例）It is difficult to answer this question.（この問題に答えるのは難しい）
うしろに to〜 があり、その内容が主語にあたる。

■ ②天候・時刻・距離・明暗を表す it（訳さない）
例）It is rainy today.（今日は雨だ）
例）It is seven o'clock now.（今七時だ）
例）It is about five kilometers from here to the station.（ここから駅まで約五キロだ）
この it も「それは」とは訳さないが、うしろに to〜 が続かない点で①と区別できる。

■ ③代名詞の it（前に出た名詞を指す。訳す）
例）I bought a new bag. It is very light.（それはとても軽い）
前の文に指すべき名詞があるかどうかで判断する。

■ 識別の手順
まず前の文に指すべき名詞があるかを見る → あれば代名詞。なければ、うしろに to〜 があるかを見る → あれば形式主語、なければ天候・時刻などの it。

★ ポイント：It is nine o'clock. It is time to go to bed. のように、②と①が続けて出ることもある。to〜 の有無だけで機械的に切り分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '和訳しなさい。It is very important to keep the promise.',
        wrongAnswer: 'それは約束を守るためにとても大切だ。',
        trapExplanation: 'It を代名詞と考えて「それは」と訳し、to〜 を目的の副詞的用法として「〜ために」と処理してしまう。',
        correctAnswer: '約束を守ることはとても大切だ。',
        correctExplanation:
          'It is ＋形容詞＋ to〜 の It は形式主語で、意味を持たないので訳さない。本当の主語は to keep the promise（約束を守ること）である。To keep the promise is very important. と書きかえられることを確認すれば、主語であることがはっきりする。',
      },
      {
        question: '（　）に入る語句を選びなさい。It is dangerous （swimming / to swim） in this river.',
        wrongAnswer: 'swimming',
        trapExplanation: '「泳ぐこと」は動名詞でも表せると知っているため、どちらでもよいと考えてしまう。',
        correctAnswer: 'to swim',
        correctExplanation:
          '形式主語の It が受けられるのは to不定詞であって、動名詞をこの位置に置くのは誤り。動名詞を使うなら Swimming in this river is dangerous. のように、そのまま主語の席に置く。It is 〜 to … はひとまとまりの型として覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s273',
    subject: 'eigo',
    examType: 'koko',
    title: 'It is ... to 〜②：for 人 で「だれにとって」を示す',
    description: '不定詞の意味上の主語 for＋目的格 を正しい位置に入れられるようにする',
    intro: '「泳ぐのは簡単だ」と言われても、水泳部員には簡単でも、泳げない人には難しい。だれにとってなのかを示したいときは、to の直前に for me、for him と入れます。ここで使うのは目的格。for I と書いてしまう誤りが、公立入試でも毎年出ています。',
    order: 773,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '語順は It is ＋形容詞 ＋ for＋人 ＋ to＋動詞の原形。',
      'for のうしろの人称代名詞は必ず目的格（me / him / her / us / them）。',
      'for＋人 は不定詞の意味上の主語（実際にその動作をする人）を表す。',
      '「だれにとっても当てはまる」ときは for 〜 を省略する。',
      'for＋人 は形容詞と to の間に入れる。文末に置くのは誤り。',
    ],
    sections: [
      {
        heading: '意味上の主語を入れる位置',
        body: `It is easy to swim. は「（一般に）泳ぐのは簡単だ」という意味である。「私にとって」と限定したいときは、to の直前に for me を入れる。

■ 形
It is ＋ 形容詞 ＋ for＋人 ＋ to＋動詞の原形
例）It is easy for me to swim.（私にとって泳ぐのは簡単だ）
例）It was difficult for him to answer the question.（彼にとってその質問に答えるのは難しかった）
例）It is necessary for us to save water.（私たちが水を節約することは必要だ）
例）It is impossible for her to finish the work in an hour.（彼女が一時間でその仕事を終えるのは不可能だ）

■ 代名詞は目的格
for は前置詞なので、うしろの代名詞は目的格になる。
　○ for me / for him / for her / for us / for them / for you
　× for I / for he / for she / for we / for they

■ 位置を動かさない
例）○ It is hard for children to read this book.
例）× It is hard to read this book for children.（意味があいまいになり、入試では誤りとされる）

★ ポイント：for＋人 は「だれがその動作をするのか」を示す。It is easy for me to swim. の「泳ぐ」のは me である。この関係を意味上の主語という。`,
      },
      {
        heading: '書きかえと使い分け',
        body: `■ 文にほどく書きかえ
「〜にとって…することは難しい」は、その人を主語にした文に近い意味になる。
例）It is difficult for me to get up at five.
　≒ I find it difficult to get up at five.（五時に起きるのは難しいと感じる）
　≒ I can't easily get up at five.
入試では、次のように「主語をだれにするか」を問う形で出る。
例）It was easy for Ken to solve the problem.
　＝ Ken solved the problem easily.（ケンは簡単にその問題を解いた）

■ for を入れない場合
一般論として述べるときは for 〜 を置かない。
例）It is important to help each other.（お互いに助け合うことは大切だ）
だれにとっても当てはまる内容なので、特定の人を示す必要がない。

■ 動名詞との対応
例）It is dangerous for children to play here.
　＝ It is dangerous for children to play in this place.
動名詞に書きかえるなら Children's playing here is dangerous. となるが、中学の範囲では It 〜 to … の形で覚えておけば十分である。

⚠ 注意：It is kind for you to help me. は誤りで、of を使う。人の性質を表す形容詞では for ではなく of になる（次のセッションで扱う）。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。It was easy （　） me to answer the question.',
        wrongAnswer: 'to',
        trapExplanation: '「私に」という日本語から to を選んでしまう。It is 〜 to … の to がすでにあることに気づかない。',
        correctAnswer: 'for',
        correctExplanation:
          '不定詞の意味上の主語（だれがその動作をするか）は for＋人 で表す。It was easy for me to answer the question. となり、答えたのは me である。to は不定詞を作るためにすでに使われているので、ここに入るのは for である。',
      },
      {
        question: '「彼女にとって、その箱を運ぶのは大変だった。」を英語にしなさい。',
        wrongAnswer: 'It was hard for she to carry the box.',
        trapExplanation: '「彼女は」という日本語につられ、主格の she をそのまま前置詞のうしろに置いてしまう。',
        correctAnswer: 'It was hard for her to carry the box.',
        correctExplanation:
          'for は前置詞なので、続く代名詞は必ず目的格にする（her / him / me / us / them）。日本語では「彼女にとって」「彼女が」のように主語らしく訳されるが、英語の形の上では前置詞の目的語である。for I / for he も同じ理由で誤りになる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s274',
    subject: 'eigo',
    examType: 'koko',
    title: 'It is ... to 〜③：of 人 を使う形容詞',
    description: 'kind / careless など人の性質を表す形容詞のときに of を選べるようにする',
    intro: '「手伝ってくれてありがとう、ご親切に」を英語では It is kind of you to help me. と言います。ここだけ for ではなく of。見分け方は単純で、「You are kind.」と言い直せるかどうかです。人そのものを評価している形容詞なら of、そうでなければ for。この一手で確実に得点できます。',
    order: 774,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '人の性質を評価する形容詞のときは It is ＋形容詞 ＋ of＋人 ＋ to〜 になる。',
      'of をとる形容詞：kind / nice / good / careless / foolish / wise / polite / rude / brave。',
      '見分け方：「人＋is＋形容詞」が成り立てば of（You are kind.）。',
      'easy / difficult / important / necessary / dangerous は for（I am easy. は成り立たない）。',
      'of の文は「〜するとは…だ」と訳すと自然（判断の根拠の言い方に近い）。',
    ],
    sections: [
      {
        heading: 'of をとる形容詞と for をとる形容詞',
        body: `不定詞の意味上の主語は、ふつう for＋人 で表す。しかし、その形容詞が「動作の難しさ」ではなく「人そのものの性質」を評価している場合は of を使う。

■ of を使う例
例）It is kind of you to help me.（手伝ってくれるとはご親切に）
例）It was careless of him to leave the door open.（ドアを開けっぱなしにするとは、彼は不注意だった）
例）It is wise of her to save money.（お金をためるとは、彼女は賢い）
例）It was rude of them to say such a thing.（そんなことを言うとは、彼らは失礼だった）

■ for を使う例
例）It is easy for me to swim.（私にとって泳ぐのは簡単だ）
例）It is necessary for us to study English.（私たちが英語を学ぶことは必要だ）
例）It was difficult for him to get up early.（彼にとって早起きは難しかった）

■ 判定法
「人＋be動詞＋形容詞」という文が成り立つかを確かめる。
　You are kind.（○ 成り立つ）→ of
　I am easy.（× 意味をなさない）→ for
kind / careless / wise / foolish / polite / brave は人の性質を表せるので of、easy / difficult / important / dangerous は動作の性質を表すので for になる。

★ ポイント：of の文は「〜するとは…だ」と訳す。for の文は「〜にとって…だ」と訳す。訳し方まで含めて対で覚える。`,
      },
      {
        heading: '書きかえと会話での使い方',
        body: `■ 人を主語にした文への書きかえ
of の文は、その人を主語にした文に書きかえられる。
例）It is kind of you to help me.
　＝ You are kind to help me.（手伝ってくれるとはご親切ですね）
例）It was careless of him to lose the key.
　＝ He was careless to lose the key.（かぎをなくすとは彼は不注意だった）
これは s267 で学んだ「判断の根拠を表す不定詞」と同じ内容である。

一方 for の文はこの書きかえができない。
　It is easy for me to swim. → × I am easy to swim.（意味が変わる／不自然）

■ 会話での定型表現
例）That's very kind of you.（ご親切にどうも）
例）It's nice of you to say so.（そう言ってくださってうれしいです）
お礼を述べる場面でそのまま使えるので、暗記しておくとよい。

■ 混同しやすい形
例）This book is easy for me to read.（この本は私には読みやすい）
これは主語が This book で、It 〜 to … とは別の型である。読む対象が主語に出ているため、read のうしろに it を置かない点にも注意する（× easy for me to read it）。

⚠ 注意：It is kind for you to help me. や He is easy to swim. のような混同は、内容が理解できていても形で失点する典型例である。判定法を必ず一度当てはめること。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。It was very kind （　） you to carry my bag.',
        wrongAnswer: 'for',
        trapExplanation: '意味上の主語＝for と一つ覚えにしているため、形容詞の種類を確かめずに for を入れてしまう。',
        correctAnswer: 'of',
        correctExplanation:
          'kind は人の性質を表す形容詞で、You are kind. という文が成り立つ。この場合は of を使い、「かばんを運んでくれるとはご親切に」と訳す。You were very kind to carry my bag. と書きかえられる。easy や difficult のように人の性質でない形容詞のときは for を使う。',
      },
      {
        question: '（　）に入る語を答えなさい。It is difficult （　） him to read this English book.',
        wrongAnswer: 'of',
        trapExplanation: '直前のセッションで of を学んだ直後だと、意味上の主語はすべて of だと思いこんで逆に間違える。',
        correctAnswer: 'for',
        correctExplanation:
          'difficult は動作の難しさを表す形容詞で、He is difficult. という文は「彼は気難しい」という別の意味になってしまう。したがって of ではなく for を使う。判定は「人＋is＋形容詞」が同じ意味で成り立つかどうか、の一点で行う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s275',
    subject: 'eigo',
    examType: 'koko',
    title: 'It is ... to 〜④：書きかえと It takes 人 時間 to 〜',
    description: 'To 〜 is …. との相互変換と、所要時間を表す It takes の型を仕上げる',
    intro: '「学校まで歩いて三十分かかる」。この「かかる」を英語では take で表し、It takes me thirty minutes to walk to school. と言います。It で始め、人、時間、to＋動詞の原形の順に並べる決まった型です。順番を一か所でも入れかえると通じなくなるので、型ごと固めてしまいましょう。',
    order: 775,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'It takes ＋（人）＋ 時間 ＋ to＋動詞の原形＝「（人が）〜するのに…かかる」。',
      '人を入れる場合、for は不要（It takes for me 〜 は誤り）。',
      '過去のことは It took 〜 になる。',
      '費用は It costs ＋（人）＋ 金額 ＋ to〜 で表す。',
      'To 〜 is …. ↔ It is … to 〜. の書きかえは、主語を It に置きかえて to〜 を文末へ送るだけ。',
    ],
    sections: [
      {
        heading: 'It takes の語順',
        figureId: 'lf_kokoeigoext08_275',
        body: `所要時間を表す It takes は、語順が完全に決まっている。①It takes → ②人 → ③時間 → ④to＋動詞の原形。

■ 例文
例）It takes me thirty minutes to walk to school.（学校まで歩いて三十分かかる）
例）It took him two hours to finish the work.（彼がその仕事を終えるのに二時間かかった）
例）It takes about ten minutes to get to the station by bike.（自転車で駅まで約十分かかる）
例）How long does it take to go there?（そこへ行くのにどのくらいかかりますか）

■ 人を入れるときに for は付けない
　○ It takes me thirty minutes to walk to school.
　× It takes for me thirty minutes to walk to school.
It is easy for me to swim. の for につられる誤りが非常に多い。takes のうしろは前置詞なしで人を置く。

■ 時間をたずねる形
例）How long does it take from here to the station?（ここから駅までどのくらいかかりますか）
例）How long did it take you to write this report?（このレポートを書くのにどのくらいかかりましたか）
答えは It takes about twenty minutes. のように It で受ける。

★ ポイント：費用なら It costs を使う。It cost me five hundred yen to take the bus.（バスに乗るのに五百円かかった）。cost は過去形も cost で変わらない。`,
      },
      {
        heading: 'To 〜 is …. との書きかえ',
        body: `入試の書きかえ問題で最頻出なのが、不定詞の主語を形式主語 It に置きかえる操作である。

■ 手順
①元の主語 To 〜 をそのまま文末へ移す。
②あいた主語の席に It を置く。
③be動詞は is / was のまま（もともと単数扱いなので変わらない）。

例）To play the piano is not easy.
　→ It is not easy to play the piano.
例）To read this book was interesting for me.
　→ It was interesting for me to read this book.
例）To swim in the sea is dangerous for children.
　→ It is dangerous for children to swim in the sea.

■ 動名詞が主語の場合
Playing the piano is not easy. のように動名詞が主語のときも、It を使う形に書きかえられる。ただしそのとき動名詞は to不定詞に変える。
例）Playing the piano is not easy.
　→ It is not easy to play the piano.（× It is not easy playing the piano.）

■ 逆向きの書きかえ
例）It is important to help each other.
　→ To help each other is important.
テストでは「ほぼ同じ意味の文に」と指示されるので、どちらの向きにも変換できるようにしておく。

⚠ 注意：書きかえのとき for＋人 の位置は形容詞と to の間のままにする。It is dangerous to swim in the sea for children. のように文末へ送ると、意味があいまいになり誤りとされる。`,
      },
    ],
    trapExamples: [
      {
        question: '「駅まで歩いて二十分かかります。」を It takes を使って英語にしなさい。',
        wrongAnswer: 'It takes for me twenty minutes to walk to the station.',
        trapExplanation: 'It is easy for me to 〜 の形を思い出し、人の前に for が必要だと思いこんでしまう。',
        correctAnswer: 'It takes me twenty minutes to walk to the station.',
        correctExplanation:
          'It takes のうしろに人を置くときは前置詞を付けない。takes が「人に時間を要させる」という形をとるためで、It takes ＋人＋時間＋to〜 の順に並べる。for が必要なのは It is ＋形容詞＋for＋人＋to〜 のほうであり、二つの型を混ぜないこと。',
      },
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。Getting up early is good for your health.',
        wrongAnswer: 'It is good for your health getting up early.',
        trapExplanation: '主語を文末へ送ることだけを覚えていて、動名詞のまま移してしまう。',
        correctAnswer: 'It is good for your health to get up early.',
        correctExplanation:
          '形式主語の It が受けるのは to不定詞なので、文末へ送るときに動名詞 getting を to get に変える必要がある。It is good for your health getting up early. は誤り。動名詞のまま使いたいなら、元の Getting up early is good for your health. の形にしておく。',
      },
    ],
  },

  // ───────────── 6. too 〜 to と 〜 enough to（s276〜s279） ─────────────
  {
    id: 'koko_eigo_s276',
    subject: 'eigo',
    examType: 'koko',
    title: 'too 〜 to …①：「…できないほど〜だ」',
    description: 'not がないのに否定の意味になる too 〜 to … の型と訳し方を身につける',
    intro: 'This book is too difficult to read. この文には not がありません。それなのに意味は「難しすぎて読めない」。too には「必要以上に・度を越して」という否定的な響きがあり、そのせいで後半の動作が実現しないことを示します。not なしで否定を表す、英語のおもしろい仕組みです。',
    order: 776,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'too ＋形容詞・副詞 ＋ to＋動詞の原形＝「〜すぎて…できない」。',
      'not がなくても否定の意味になる。訳に「できない」を必ず入れる。',
      'too は「必要以上に」の意味。very（とても）とは違う。',
      '語順は「too → 形容詞・副詞 → to＋原形」。too のうしろに名詞は置けない。',
      '「〜すぎる」だけを言うときは too＋形容詞で止めてよい（This coffee is too hot.）。',
    ],
    sections: [
      {
        heading: 'too と very の違い',
        figureId: 'lf_kokoeigoext08_276',
        body: `very は単に程度が大きいことを表すが、too は「必要な程度・許される程度を越えている」という否定的な評価を含む。

■ very と too
例）This coffee is very hot.（このコーヒーはとても熱い／おいしそうだ、という含みもある）
例）This coffee is too hot.（このコーヒーは熱すぎる／飲めない、という含みがある）

■ too 〜 to … の形
too ＋ 形容詞・副詞 ＋ to＋動詞の原形
例）This book is too difficult to read.（この本は難しすぎて読めない）
例）He is too tired to walk.（彼は疲れすぎていて歩けない）
例）She was too busy to have lunch.（彼女は忙しすぎて昼食をとれなかった）
例）He spoke too fast for me to understand.（彼は速く話しすぎて私には理解できなかった）

■ 訳に「できない」を必ず入れる
　○ 難しすぎて読めない
　× とても難しくて読む

■ too のうしろは形容詞か副詞
　○ too difficult（形容詞）／too fast（副詞）
　× too a difficult book（名詞は置けない）
名詞を使いたいときは too difficult a book という特別な語順になるが、中学では扱わない。

★ ポイント：too が見えたら、その文は否定の内容だと即座に判断する。長文読解での読み違いを防げる。`,
      },
      {
        heading: 'to 以下の目的語に注意',
        body: `too 〜 to … の to 以下は、前に出ている主語を目的語として受けている。そのため、to のうしろに目的語を置かない。

■ 目的語を重ねない
例）○ This book is too difficult to read.
例）× This book is too difficult to read it.
read の目的語は主語の This book なので、it を置くと二重になる。形容詞的用法（something to eat）と同じ考え方である。

■ 主語が人の場合
例）He is too young to drive a car.（彼は若すぎて車を運転できない）
この場合の drive の目的語は a car で、主語の he は drive の主語にあたる。したがって a car は必要である。目的語を落としてはいけない。

■ 「だれにとって」を入れる
動作をする人を示すときは、to の前に for＋人 を置く（s277 でくわしく扱う）。
例）This box is too heavy for me to carry.（この箱は重すぎて私には運べない）

■ 副詞を修飾する場合
例）He got up too late to catch the first train.（彼は起きるのが遅すぎて始発に乗れなかった）
例）She walked too slowly to arrive on time.（彼女は歩くのが遅すぎて時間どおりに着けなかった）

⚠ 注意：too のうしろに来るのが形容詞か副詞かは、修飾する相手で決まる。be動詞のあとなら形容詞、一般動詞を説明するなら副詞である。`,
      },
    ],
    trapExamples: [
      {
        question: '和訳しなさい。This tea is too hot to drink.',
        wrongAnswer: 'このお茶はとても熱くて飲める。',
        trapExplanation: 'too を very と同じ「とても」と訳してしまい、否定の意味が消えてしまう。',
        correctAnswer: 'このお茶は熱すぎて飲めない。',
        correctExplanation:
          'too は「度を越して」という否定的な意味を持ち、too 〜 to … 全体で「〜すぎて…できない」を表す。not がなくても否定になるのが特徴である。単に「とても熱い」と言いたいなら This tea is very hot. とする。',
      },
      {
        question: '次の文の誤りを直しなさい。This question is too difficult to answer it.',
        wrongAnswer: 'This question is too difficult to answer it.（正しいのでそのまま）',
        trapExplanation: '「その問題に答える」という日本語から、answer の目的語 it が必要だと感じてしまう。',
        correctAnswer: 'This question is too difficult to answer.',
        correctExplanation:
          'answer の目的語は主語の This question なので、さらに it を置くと目的語が二重になる。ただし so 〜 that … の文に書きかえるときは、that 以下が独立した文になるため it が必要になる（It is so difficult that I can\'t answer it.）。この差が入試で問われる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s277',
    subject: 'eigo',
    examType: 'koko',
    title: 'too 〜 to …②：for 人 と so 〜 that … can\'t の書きかえ',
    description: '意味上の主語 for＋人 の位置と、so that 構文への正確な変換を習得する',
    intro: 'too 〜 to … を so 〜 that … に書きかえる問題は、高校入試の書きかえで最頻出です。ところが正答率は高くありません。理由はただ一つ、that 以下の文末に置く it を落とすからです。不定詞では要らなかった it が、that 節では必要になる。この一点で合否が分かれます。',
    order: 777,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      'too ＋形容詞 ＋ for＋人 ＋ to〜＝「（人）には〜すぎて…できない」。',
      '書きかえ：too 〜 to … ＝ so 〜 that ＋主語＋can\'t（couldn\'t）＋動詞。',
      'that 節は独立した文なので、目的語の it を必ず補う。',
      '主節が過去形なら couldn\'t を使う（時制をそろえる）。',
      'for＋人 がなければ、that 節の主語は文脈に合う一般的な主語（I / we / he など）を補う。',
    ],
    sections: [
      {
        heading: 'for 人 を入れる位置',
        body: `too 〜 to … に「だれにとって」を加えるときは、to の直前に for＋人（目的格）を置く。

■ 形
too ＋ 形容詞・副詞 ＋ for＋人 ＋ to＋動詞の原形
例）This box is too heavy for me to carry.（この箱は重すぎて私には運べない）
例）The problem was too difficult for him to solve.（その問題は難しすぎて彼には解けなかった）
例）He speaks too fast for us to understand.（彼は速く話しすぎて私たちには理解できない）

■ 代名詞は目的格
　○ for me / for him / for her / for us / for them
　× for I / for he

■ for がないときの意味
for〜 を置かなければ、「一般にだれにとっても」あるいは「話し手にとって」という意味になる。
例）This book is too difficult to read.（この本は難しすぎて読めない）

★ ポイント：for＋人 は、to 以下の動作を実際にする人を示す。This box is too heavy for me to carry. で運ぶのは me である。s273 の It is easy for me to swim. と同じしくみである。`,
      },
      {
        heading: 'so 〜 that … can\'t への書きかえ',
        body: `too 〜 to … は、so 〜 that … can't を使った文にほぼ同じ意味で書きかえられる。

■ 手順
①too を so に変える。
②to〜 を that＋主語＋can't＋動詞の原形 に変える。主語は for＋人 の人（なければ文脈から補う）。
③that 節は独立した文なので、目的語が必要なら it などを補う。

例）This box is too heavy for me to carry.
　＝ This box is so heavy that I can't carry it.
例）This book is too difficult to read.
　＝ This book is so difficult that I can't read it.
例）He was too tired to walk.
　＝ He was so tired that he couldn't walk.（walk は目的語をとらないので it は不要）

■ 時制をそろえる
主節が過去形なら that 節も過去形（couldn't）にする。
例）The problem was too difficult for him to solve.
　＝ The problem was so difficult that he couldn't solve it.

■ it が要る場合・要らない場合
that 節の動詞が目的語を必要とする他動詞（carry / read / solve / answer / drink）なら it を置く。目的語をとらない自動詞（walk / run / go / sleep）なら置かない。

⚠ 注意：This box is so heavy that I can't carry. は目的語が抜けているので誤り。逆に This box is too heavy for me to carry it. も it が余分で誤り。不定詞では不要、that 節では必要、と覚える。`,
      },
    ],
    trapExamples: [
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。This bag is too heavy for me to carry.',
        wrongAnswer: 'This bag is so heavy that I can\'t carry.',
        trapExplanation: '元の文に目的語がないので、書きかえた文でも不要だと考えて it を落としてしまう。',
        correctAnswer: 'This bag is so heavy that I can\'t carry it.',
        correctExplanation:
          'that 以下は主語と動詞のそろった独立した文なので、他動詞 carry には目的語が必要になる。この it は主語の This bag を指す。不定詞の to carry では主語がそのまま目的語のはたらきをするため it が不要だった。この差が書きかえの最大のポイントである。',
      },
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。The question was too difficult for her to answer.',
        wrongAnswer: 'The question was so difficult that she can\'t answer it.',
        trapExplanation: 'that 節を作ることに気をとられ、主節が過去形であることを見落として can\'t のままにしてしまう。',
        correctAnswer: 'The question was so difficult that she couldn\'t answer it.',
        correctExplanation:
          '主節の動詞が was と過去形なので、that 節の助動詞も過去形の couldn\'t にそろえる。目的語 it も忘れずに置く。書きかえでは「①so に変える ②主語を補う ③時制をそろえる ④目的語を補う」の四点を毎回確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s278',
    subject: 'eigo',
    examType: 'koko',
    title: '〜 enough to …①：enough の位置',
    description: '形容詞・副詞のうしろに置く enough と、名詞の前に置く enough を区別する',
    intro: 'enough は「十分に」という意味ですが、置く場所が独特です。「十分に年をとっている」は old enough で、enough old ではありません。ところが「十分なお金」は enough money で、money enough とは言わない。修飾する相手が形容詞か名詞かで、前後が入れかわるのです。',
    order: 778,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '形容詞・副詞 ＋ enough ＋ to＋動詞の原形＝「…できるほど十分に〜だ」。',
      'enough は形容詞・副詞のうしろに置く（old enough／× enough old）。',
      '名詞を修飾するときは名詞の前に置く（enough money／enough time）。',
      '「だれにとって」は for＋人 を enough と to の間に入れる（kind enough for me to 〜 の形もあるが、多くは省略）。',
      'too 〜 to … が否定的なのに対し、〜 enough to … は肯定的な内容を表す。',
    ],
    sections: [
      {
        heading: 'enough を置く位置',
        figureId: 'lf_kokoeigoext08_278',
        body: `enough は「十分な・十分に」という意味だが、修飾する相手によって位置が変わる。

■ 形容詞・副詞を修飾するとき → うしろに置く
例）He is old enough to drive a car.（彼は車を運転できる年齢だ）
例）She was kind enough to show me the way.（彼女は親切にも道を教えてくれた）
例）This room is large enough to hold fifty people.（この部屋は五十人入れるほど広い）
例）He ran fast enough to win the race.（彼はレースに勝てるほど速く走った）
　× enough old / × enough fast は誤り。

■ 名詞を修飾するとき → 前に置く
例）I have enough money to buy the ticket.（切符を買うのに十分なお金がある）
例）We don't have enough time to finish it.（それを終える十分な時間がない）
　× money enough は現代英語では不自然。

■ 訳し方
「…できるほど十分に〜だ」「〜なので…できる」のどちらでもよい。
例）He is old enough to drive a car.
　→ 車を運転できるほどの年齢だ／十分な年齢なので運転できる

★ ポイント：old enough（形容詞のうしろ）と enough money（名詞の前）を対にして声に出して覚えると、位置を取り違えなくなる。`,
      },
      {
        heading: 'too 〜 to … との対比',
        body: `too 〜 to … と 〜 enough to … は、同じ「程度＋不定詞」の型でありながら、意味の向きが正反対である。

■ too 〜 to …（否定）
例）He is too young to drive a car.（若すぎて運転できない）

■ 〜 enough to …（肯定）
例）He is old enough to drive a car.（運転できる年齢だ）

同じ内容を反対から述べているので、書きかえ問題では対で出題される。
例）He is too young to drive a car.
　＝ He is not old enough to drive a car.（運転できる年齢に達していない）

■ 否定文での enough
not 〜 enough to … は「…できるほど〜ではない」となる。
例）This room is not large enough to hold fifty people.（この部屋は五十人入れるほど広くはない）
例）I'm not tall enough to reach the top shelf.（いちばん上の棚に手が届くほど背が高くない）

■ for＋人 を入れる形
例）The book is easy enough for children to read.（その本は子どもが読めるほどやさしい）
enough と to の間に for＋人 を置く。too 〜 for 人 to … と同じ位置関係である。

⚠ 注意：This book is enough easy to read. のように enough を前に置くのは誤り。形容詞 easy のうしろに置いて easy enough とする。`,
      },
    ],
    trapExamples: [
      {
        question: '語を並べかえなさい。（enough / is / to / he / a car / drive / old）彼は車を運転できる年齢だ。',
        wrongAnswer: 'He is enough old to drive a car.',
        trapExplanation: '「十分に年をとっている」という日本語の語順のまま、副詞 enough を形容詞の前に置いてしまう。',
        correctAnswer: 'He is old enough to drive a car.',
        correctExplanation:
          'enough が形容詞・副詞を修飾するときは、必ずそのうしろに置く（old enough／fast enough／kind enough）。前に置けるのは名詞を修飾するとき（enough money／enough time）だけである。very old のような通常の副詞とは位置が逆になる点に注意する。',
      },
      {
        question: '（　）に入るものを選びなさい。I don\'t have （enough money / money enough） to buy this bike.',
        wrongAnswer: 'money enough',
        trapExplanation: 'old enough で「うしろに置く」と覚えたため、名詞のときも同じようにうしろへ置いてしまう。',
        correctAnswer: 'enough money',
        correctExplanation:
          'enough が名詞を修飾するときは名詞の前に置く。形容詞・副詞のうしろに置くのは、その形容詞・副詞の程度を説明する場合である。enough money to buy 〜（〜を買うのに十分なお金）、enough time to finish 〜（〜を終える十分な時間）はそのまま覚えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s279',
    subject: 'eigo',
    examType: 'koko',
    title: '〜 enough to …②：so 〜 that … can への書きかえ',
    description: 'enough to の文を so that 構文に変換し、時制と主語を正しくそろえる',
    intro: 'too 〜 to … が so 〜 that … can\'t になるなら、enough to はどうなるでしょう。答えは so 〜 that … can です。否定が肯定に変わるだけで、手順はまったく同じ。ただし時制のそろえ方と、目的語 it の補い方は変わりません。二つの型をまとめて仕上げます。',
    order: 779,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '〜 enough to … ＝ so 〜 that ＋主語＋can（could）＋動詞の原形。',
      '主節が過去形なら could にする。',
      'that 節の動詞が他動詞なら目的語を補う。',
      'too 〜 to … ＝ so 〜 that … can\'t（否定）と対で覚える。',
      'kind enough to 〜 は「親切にも〜してくれる」と訳すと自然。',
    ],
    sections: [
      {
        heading: '書きかえの手順',
        body: `〜 enough to … は so 〜 that … can に書きかえられる。手順は too 〜 to … の場合と同じで、否定が肯定になるだけである。

■ 手順
①enough を消し、形容詞・副詞の前に so を置く。
②to〜 を that＋主語＋can＋動詞の原形 にする。
③主節が過去なら could にする。
④that 節の動詞が他動詞なら目的語を補う。

例）He is rich enough to buy that car.
　＝ He is so rich that he can buy that car.
例）She ran fast enough to catch the train.
　＝ She ran so fast that she could catch the train.
例）This room is large enough to hold fifty people.
　＝ This room is so large that it can hold fifty people.

■ 主語の決め方
for＋人 があればその人、なければ文の主語をそのまま使う。
例）The book is easy enough for children to read.
　＝ The book is so easy that children can read it.
この場合、read の目的語として it（＝the book）を補う。

★ ポイント：too の型と enough の型を並べて練習すると定着が早い。
　too difficult to read ＝ so difficult that I can't read it
　easy enough to read ＝ so easy that I can read it`,
      },
      {
        heading: '入試での出題パターン',
        body: `■ ①同意文完成
例）He was kind enough to carry my bag.
　＝ He was so kind that he carried my bag.
親切にしてくれた事実を述べる文では、can を使わず単に過去形にすることもある。文脈に応じて選ぶ。

■ ②too 〜 to … との相互変換
例）He is too young to go to school alone.
　＝ He is not old enough to go to school alone.
　＝ He is so young that he can't go to school alone.
一つの内容を三通りで表せるようにしておく。

■ ③並べかえ
enough の位置（形容詞・副詞のうしろ、名詞の前）と、for＋人 の位置（enough と to の間）が問われる。
例）This box is light enough for me to carry.（この箱は私が運べるほど軽い）

■ ④和訳
kind / nice を使った文は「親切にも〜してくれた」と訳すと自然になる。
例）She was kind enough to lend me her umbrella.
　→ 彼女は親切にも傘を貸してくれた。

⚠ 注意：so 〜 that … の that は省略されることがあるが、書きかえ問題では省略せずに書くほうが安全である。また enough to の文を that 節に直したとき、主語を書き忘れる誤りが多い。that のうしろは必ず主語から始める。`,
      },
    ],
    trapExamples: [
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。She ran fast enough to catch the last bus.',
        wrongAnswer: 'She ran so fast that she can catch the last bus.',
        trapExplanation: '不定詞には時制がないため、主節が過去形（ran）であることを意識せずに can を使ってしまう。',
        correctAnswer: 'She ran so fast that she could catch the last bus.',
        correctExplanation:
          '主節の動詞が ran と過去形なので、that 節の助動詞も過去形の could にそろえる。書きかえでは、①so に変える ②主語を補う ③時制をそろえる ④必要なら目的語を補う、の順に確認する。catch には目的語 the last bus があるので it は不要である。',
      },
      {
        question: '「この本は私が読めるほどやさしい。」を enough を使って英語にしなさい。',
        wrongAnswer: 'This book is easy enough for me to read it.',
        trapExplanation: 'so 〜 that の文で it が必要だったことを覚えていて、不定詞の文にも it を付け足してしまう。',
        correctAnswer: 'This book is easy enough for me to read.',
        correctExplanation:
          '不定詞の to read は、主語の This book をそのまま目的語として受けているので it は不要である。it が必要になるのは that 節に書きかえたとき（This book is so easy that I can read it.）だけ。不定詞では不要、that 節では必要、と対で覚える。',
      },
    ],
  },

  // ───────────── 7. want / tell / ask ＋人＋to 不定詞（s280〜s283） ─────────────
  {
    id: 'koko_eigo_s280',
    subject: 'eigo',
    examType: 'koko',
    title: 'want 人 to 〜：だれがするのかを変える',
    description: 'want to 〜 と want 人 to 〜 の意味の違いと語順を確実にする',
    intro: 'I want to help you. は「私があなたを手伝いたい」。I want you to help me. は「あなたに手伝ってほしい」。to の前に人を一つ入れるだけで、動作をする人がそっくり入れかわります。日本語では「〜してほしい」という一語で済むところが、英語では語順で表される。ここが英作文の分かれ目です。',
    order: 780,
    studyPeriod: '中3前半',
    targetLevel: 'kiso',
    keyPoints: [
      'want ＋人＋ to＋動詞の原形＝「（人）に〜してほしい」。',
      'want to 〜 は「自分が〜したい」。to の前に人が入ると動作をする人が変わる。',
      '人の位置には目的格を置く（me / him / her / us / them）。',
      'that 節は使えない（I want that you help me. は誤り）。',
      'would like ＋人＋ to〜 はていねいな言い方（〜していただきたいのですが）。',
    ],
    sections: [
      {
        heading: '動作をするのはだれか',
        figureId: 'lf_kokoeigoext08_280',
        body: `不定詞の前に人を置くと、その人が to 以下の動作をすることになる。この人を不定詞の意味上の主語という。

■ 比べてみる
例）I want to go to the party.（私がパーティーに行きたい）
例）I want you to go to the party.（あなたにパーティーに行ってほしい）
行くのは、上の文では I、下の文では you である。

■ 例文
例）My mother wants me to clean my room.（母は私に部屋を掃除してほしがっている）
例）I want him to call me tonight.（今夜彼に電話してほしい）
例）Do you want me to help you?（手伝いましょうか／私に手伝ってほしいですか）
例）She didn't want us to worry about her.（彼女は私たちに心配してほしくなかった）

■ 語順は固定
want ＋ 人（目的格）＋ to＋動詞の原形
　× I want to you go.／× I want you go.／× I want that you go.
that 節を使う言い方は英語にはない。日本語の「〜ということを望む」に引きずられないこと。

★ ポイント：Do you want me to 〜? は「〜しましょうか」という申し出になる。Shall I 〜? とほぼ同じ意味で、会話文の空所補充で頻出である。`,
      },
      {
        heading: 'ていねいな言い方と否定',
        body: `■ would like ＋人＋ to 〜
want を would like にするとていねいになる。目上の人や客に対して使う。
例）I would like you to come to my house.（私の家に来ていただきたいのですが）
例）I'd like him to check this report.（彼にこの報告書を確認してもらいたいのですが）
短縮形は I'd / We'd などになる。

■ 否定
①「〜してほしくない」→ want を否定する。
例）I don't want you to go there.（あなたにそこへ行ってほしくない）
②「〜しないでほしい」→ 不定詞を否定する。
例）I want you not to go there.（あなたにそこへ行かないでほしい）
実際の英語では①のほうがはるかによく使われる。

■ 疑問文
例）What do you want me to do?（私に何をしてほしいのですか）
例）Where do you want us to wait?（私たちにどこで待ってほしいですか）
疑問詞が to 以下の目的語や場所にあたる形で、対話文でよく出る。

⚠ 注意：hope はこの形をとれない。× I hope you to come. は誤りで、I hope (that) you will come. とする。want / tell / ask はこの形をとるが、hope / say はとらない。動詞ごとに使える形が違うので、まとめて覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は彼に手伝ってほしい。」を英語にしなさい。',
        wrongAnswer: 'I want to help him.',
        trapExplanation: '「手伝ってほしい」の主語をあいまいにとらえ、want to 〜 の形にしてしまう。この文は「私が彼を手伝いたい」の意味になる。',
        correctAnswer: 'I want him to help me.',
        correctExplanation:
          '手伝うのは彼なので、want のうしろに him を置いて「彼が手伝う」という関係を作る。さらに手伝ってもらう相手は私なので、help の目的語は me になる。動作をするのはだれか、その動作を受けるのはだれかを日本語の段階で確かめてから英語にする。',
      },
      {
        question: '次の文の誤りを直しなさい。I hope you to visit my school next week.',
        wrongAnswer: 'I hope you visit to my school next week.',
        trapExplanation: 'want と同じように hope も「人＋to」の形をとれると思いこみ、to の位置だけを変えて直そうとする。',
        correctAnswer: 'I hope (that) you will visit my school next week.',
        correctExplanation:
          'hope は「人＋to不定詞」の形をとらない動詞で、that 節を使って表す。逆に want は that 節をとらない（× I want that you come.）。want / tell / ask は「人＋to」、hope / say / think は that 節、と動詞ごとに使える形を整理しておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s281',
    subject: 'eigo',
    examType: 'koko',
    title: 'tell / ask ＋人＋ to 〜 と not to 〜',
    description: '指示・依頼を表す形と、その否定形の語順を身につける',
    intro: '先生が「走るな」と言った、を英語にすると The teacher told us not to run. となります。「言った」は told、「走るな」は not to run。日本語では文末にある否定が、英語では to の前に来ます。tell と ask の使い分けとあわせて、指示や依頼を伝える形を固めましょう。',
    order: 781,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'tell ＋人＋ to〜＝「（人）に〜するように言う・命じる」。',
      'ask ＋人＋ to〜＝「（人）に〜するように頼む」。',
      '否定は not to〜（to の前に not）。to not 〜 は誤り。',
      'この形をとる動詞：want / tell / ask / would like / advise / allow。',
      'say は「人＋to」の形をとらない（say to 人 that 〜 のように使う）。',
    ],
    sections: [
      {
        heading: 'tell と ask の使い分け',
        body: `どちらも「人＋to＋原形」をとるが、上下関係や強さが違う。

■ tell ＋人＋ to〜（指示・命令）
例）My father told me to come home early.（父は私に早く帰ってくるように言った）
例）The doctor told him to stop smoking.（医者は彼にたばこをやめるように言った）
例）She told the children to be quiet.（彼女は子どもたちに静かにするように言った）

■ ask ＋人＋ to〜（依頼・お願い）
例）She asked me to open the window.（彼女は私に窓を開けてくれるように頼んだ）
例）I asked him to carry the box.（私は彼にその箱を運んでくれるように頼んだ）
例）Can I ask you to wait here?（ここで待っていただけますか）

■ say との違い
say はこの形をとらない。
　× He said me to go.
　○ He told me to go.
　○ He said to me, "Go."（直接話法）
「言う」を英語にするとき、うしろに「人＋to」が続くなら tell を選ぶ。

★ ポイント：tell は「上から下」、ask は「お願い」というイメージ。文脈でどちらがふさわしいかを判断する問題が出る。`,
      },
      {
        heading: '否定の形と、その他の動詞',
        body: `■ not は to の前
例）The teacher told us not to run in the hallway.（先生は廊下を走らないように言った）
例）My mother told me not to eat too much.（母は食べすぎないように言った）
例）He asked me not to tell anyone.（彼はだれにも言わないでほしいと頼んだ）
　× told us to not run は誤り。not は to を含めたかたまり全体の前に置く。

■ 同じ形をとる主な動詞
want ＋人＋to（〜してほしい）
tell ＋人＋to（〜するように言う）
ask ＋人＋to（〜するように頼む）
would like ＋人＋to（〜していただきたい）
advise ＋人＋to（〜するように助言する）
allow ＋人＋to（〜することを許す）
例）My parents allowed me to go camping.（両親は私がキャンプに行くことを許してくれた）
例）The teacher advised us to read more books.（先生は私たちにもっと本を読むように助言した）

■ 受け身にすると
例）I was told to wait here.（ここで待つように言われた）
例）We were asked not to take pictures.（写真をとらないように頼まれた）
公立入試でも長文中に出るので、意味をとれるようにしておく。

⚠ 注意：tell / ask のうしろの人を落とすと意味が変わる。She asked to open the window. は「彼女は（自分が）窓を開けてよいかたずねた」となり、だれに頼んだのかが消えてしまう。`,
      },
    ],
    trapExamples: [
      {
        question: '「母は私に夜おそくテレビを見ないように言いました。」を英語にしなさい。',
        wrongAnswer: 'My mother told me to not watch TV late at night.',
        trapExplanation: 'don\'t watch のように「動詞の直前に not」という感覚が残り、to と原形の間に not を入れてしまう。',
        correctAnswer: 'My mother told me not to watch TV late at night.',
        correctExplanation:
          '不定詞を否定するときは not を to の前に置く。told me not to watch の語順になる。日本語では「見ないように」と否定が動詞のそばに来るため誤りやすいが、英語では to の前と決まっている。ask の場合も asked me not to 〜 となる。',
      },
      {
        question: '次の文の誤りを直しなさい。He said me to close the door.',
        wrongAnswer: 'He said to me to close the door.',
        trapExplanation: 'say と tell の使い分けを知らず、前置詞 to を足せば直ると考えてしまう。',
        correctAnswer: 'He told me to close the door.',
        correctExplanation:
          'say は「人＋to不定詞」の形をとらない動詞である。「人に〜するように言う」は tell ＋人＋ to〜 を使う。say を使うなら He said to me, "Close the door." のように直接話法にする。tell / ask / want はこの形をとる、と覚えておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s282',
    subject: 'eigo',
    examType: 'koko',
    title: '命令文から tell / ask ＋人＋to 〜 への書きかえ',
    description: '直接話法の命令文を、間接話法の不定詞の形に正しく変換する',
    intro: '「窓を開けて」と彼女が言った。これを一つの文にまとめると She told me to open the window. になります。かぎかっこの中の命令文を、tell や ask を使った形に組みこむ操作です。please があれば ask、なければ tell。そして代名詞の入れかえ。手順どおりに進めれば必ず正解できます。',
    order: 782,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '命令文 →「tell ＋人＋ to＋原形」。please 付きの依頼 →「ask ＋人＋ to＋原形」。',
      '否定の命令文（Don\'t 〜）→「not to＋原形」。',
      '代名詞は話し手・聞き手の関係に合わせて変える（my → his など）。',
      '伝える相手は said to 〜 の 〜 の部分から取る。',
      '書きかえ後は、かぎかっこもコンマも不要になる。',
    ],
    sections: [
      {
        heading: '書きかえの手順',
        body: `直接話法（かぎかっこで発言をそのまま引用する形）を、間接話法（文に組みこむ形）に直す。

■ 手順
①命令文か依頼かを判断する。ふつうの命令文なら tell、Please 付きや Will you 〜? なら ask を選ぶ。
②said to のうしろの人を、tell / ask のうしろに移す。
③かぎかっこの中の動詞を to＋原形にする。
④代名詞（my / me / your / you など）を、伝える人の立場に合わせて変える。

■ 例
例）"Open the window," she said to me.
　→ She told me to open the window.
例）"Please help me," he said to her.
　→ He asked her to help him.（me → him に変わる）
例）"Don't be late," the teacher said to us.
　→ The teacher told us not to be late.
例）"Wash your hands," my mother said to me.
　→ My mother told me to wash my hands.（your → my に変わる）

★ ポイント：代名詞の変換がいちばんの得点差になる。発言者が「私の」と言った部分は、文にまとめると「その人の」になる、という原則で処理する。`,
      },
      {
        heading: 'tell と ask の選び方、その他の注意',
        body: `■ tell を選ぶ場合
命令・指示の内容で、Please が付いていない。
例）"Come here," he said to me. → He told me to come here.
例）"Study harder," my father said to me. → My father told me to study harder.

■ ask を選ぶ場合
Please が付いている、あるいは Will you 〜? / Can you 〜? のような依頼の形。
例）"Please close the door," she said to me. → She asked me to close the door.
例）"Will you help me?" he said to me. → He asked me to help him.
書きかえた文に please は残さない。

■ 否定の命令文
例）"Don't touch it," the man said to us. → The man told us not to touch it.
Don't は not to になる。

■ 主語が明示されていない場合
said to me の me が伝えられた相手なので、tell / ask のうしろにはその人が入る。said だけで相手が書かれていないときは、文脈から補うか、she said が主語になる形で処理する。

⚠ 注意：時制は tell / ask の側で表す。told / asked と過去形にしたあと、不定詞は原形のままである。× told me to came は誤り。動詞を二重に過去にしないこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。"Please carry my bag," she said to Tom.',
        wrongAnswer: 'She told Tom to carry my bag.',
        trapExplanation: 'Please を無視して tell を選んでしまい、さらに発言中の my をそのまま残してしまう。',
        correctAnswer: 'She asked Tom to carry her bag.',
        correctExplanation:
          'Please が付いた依頼なので ask を使う。また、発言者は she なので、発言中の my bag は文にまとめると her bag になる。代名詞の変換（my → her、me → her、your → Tom\'s など）は書きかえの最頻出ポイントである。',
      },
      {
        question: 'ほぼ同じ意味になるように書きかえなさい。"Don\'t open the box," my father said to me.',
        wrongAnswer: 'My father told me don\'t open the box.',
        trapExplanation: 'かぎかっこを外すことだけを考え、中の命令文の形（Don\'t＋原形）をそのまま残してしまう。',
        correctAnswer: 'My father told me not to open the box.',
        correctExplanation:
          '否定の命令文は not to＋動詞の原形に変える。tell ＋人＋ not to〜 の語順になり、don\'t は消える。肯定の命令文なら told me to open 〜 となる。書きかえ後の文にかぎかっこや don\'t が残っていたら、その時点で誤りだと気づけるようにする。',
      },
    ],
  },

  {
    id: 'koko_eigo_s283',
    subject: 'eigo',
    examType: 'koko',
    title: 'help / make / let ＋人＋動詞の原形（原形不定詞）',
    description: 'to を付けない不定詞をとる動詞のグループを区別できるようにする',
    intro: 'My mother made me clean my room. この文に to はありません。made me to clean と書きたくなりますが誤りです。make・let・have、そして知覚動詞のうしろでは、to が消えて動詞の原形だけが残ります。この「to のない不定詞」を原形不定詞といい、難関私立の正誤問題の定番です。',
    order: 783,
    studyPeriod: '中3夏',
    targetLevel: 'nyushi',
    keyPoints: [
      'make ＋人＋動詞の原形＝「（人）に無理に〜させる」。',
      'let ＋人＋動詞の原形＝「（人）に〜させてやる・〜するのを許す」。',
      'help ＋人＋（to）動詞の原形＝「（人）が〜するのを手伝う」。to はあってもなくてもよい。',
      '知覚動詞 see / hear / feel ＋人＋動詞の原形＝「〜するのを見る・聞く」。',
      'これらの動詞のうしろに to を入れるのは誤り（× made me to clean）。',
    ],
    sections: [
      {
        heading: 'make / let / help の使い分け',
        body: `使役動詞と呼ばれるグループで、いずれも「人に何かをさせる」を表すが、強さが違う。うしろは to のない原形になる。

■ make ＋人＋原形（強制）
例）My mother made me clean my room.（母は私に部屋を掃除させた）
例）The movie made me cry.（その映画は私を泣かせた）
本人の意思に関係なくそうさせる、という意味である。

■ let ＋人＋原形（許可）
例）My father let me use his computer.（父は私にパソコンを使わせてくれた）
例）Let me introduce myself.（自己紹介させてください）
例）Let me help you.（お手伝いしましょう）
本人がしたいことを許す、という意味である。let の過去形は let で形が変わらない。

■ help ＋人＋（to）原形
例）I helped my mother cook dinner.（母が夕食を作るのを手伝った）
例）I helped my mother to cook dinner.（同じ意味。to があってもよい）
help だけは to を付けても付けなくてもよい。

⚠ 注意：make / let のうしろに to を入れるのは誤り。× My mother made me to clean my room. 一方 want / tell / ask は必ず to が必要である（told me to clean）。この二つのグループを混ぜないこと。`,
      },
      {
        heading: '知覚動詞と受け身での注意',
        body: `■ see / hear / feel / watch ＋人＋原形
「〜するのを見る・聞く」という意味で、うしろは原形になる。
例）I saw him cross the street.（彼が通りを渡るのを見た）
例）I heard someone call my name.（だれかが私の名前を呼ぶのが聞こえた）
例）I felt the ground shake.（地面が揺れるのを感じた）

■ 原形と -ing の違い
原形なら動作の始めから終わりまで、-ing なら途中の場面を見た（聞いた）ことを表す。
例）I saw him cross the street.（渡りきるまで見た）
例）I saw him crossing the street.（渡っている途中を見た）
入試ではどちらも正解になることが多いが、意味の違いを説明させる問題が出る。

■ 受け身になると to が復活する
make を受け身にすると、消えていた to が現れる。
例）My mother made me clean my room.
　→ I was made to clean my room by my mother.（部屋を掃除させられた）
例）He was seen to enter the room.（彼が部屋に入るのを見られた）
難関私立で問われる形なので、形だけでも覚えておく。

★ ポイント：整理すると、to が必要なのは want / tell / ask / advise / allow、to が不要なのは make / let / have / help（任意）／see / hear / feel。二つのリストを対にして暗記する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。My mother made me to wash the dishes.',
        wrongAnswer: 'My mother made me washing the dishes.',
        trapExplanation: '誤りが to だと気づかず、動詞の形を -ing に変えれば直ると考えてしまう。',
        correctAnswer: 'My mother made me wash the dishes.',
        correctExplanation:
          'make ＋人＋動詞の原形の形では to を付けない（原形不定詞）。let / have も同じで、let me use、have him carry のようになる。to が必要なのは want / tell / ask のグループである。ただし受け身にすると I was made to wash the dishes. のように to が現れる。',
      },
      {
        question: '（　）に入るものを選びなさい。My father let me （use / to use / using） his camera.',
        wrongAnswer: 'to use',
        trapExplanation: '「人＋to＋動詞の原形」という形を広く覚えているため、let のうしろにも to を入れてしまう。',
        correctAnswer: 'use',
        correctExplanation:
          'let は「〜させてやる」を表す使役動詞で、うしろは to のない原形になる。Let me help you.、Let me know your answer. も同じ形である。allow を使えば My father allowed me to use his camera. となり、こちらは to が必要になる。動詞ごとに形が決まっている。',
      },
    ],
  },

  // ───────────── 8. 動名詞の用法（s284〜s287） ─────────────
  {
    id: 'koko_eigo_s284',
    subject: 'eigo',
    examType: 'koko',
    title: '動名詞①：-ing で名詞になる',
    description: '動名詞の作り方と、主語・補語になる用法を身につける',
    intro: '「テニスをすること」は to play tennis とも playing tennis とも言えます。動詞に -ing を付けるだけで名詞のはたらきをさせる、これが動名詞です。進行形と形は同じでも役割はまったく違う。作り方のつづりの規則と、動詞が単数扱いになる点をここで固めます。',
    order: 784,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '動名詞＝動詞の -ing 形が名詞のはたらきをするもの。「〜すること」と訳す。',
      '主語・補語・目的語・前置詞の目的語になれる（不定詞は前置詞のうしろに置けない）。',
      '主語になるときは単数扱い。動詞は is / was。',
      'つづり：make → making／run → running／study → studying／lie → lying。',
      '進行形（be動詞＋-ing）とは別物。be動詞のうしろでも、主語が事がらなら補語の動名詞。',
    ],
    sections: [
      {
        heading: '作り方と主語・補語の用法',
        figureId: 'lf_kokoeigoext08_284',
        body: `動名詞は動詞の -ing 形をそのまま名詞として使うものである。

■ つづりの規則
①ふつうは -ing を付ける：play → playing／read → reading
②e で終わる語は e を取って -ing：make → making／come → coming／write → writing
③「短母音＋子音字」で終わる語は子音字を重ねる：run → running／swim → swimming／sit → sitting／stop → stopping
④ie で終わる語は y に変えて -ing：lie → lying／die → dying
⑤y で終わっても、そのまま -ing：study → studying／play → playing

■ 主語になる動名詞
例）Playing tennis is a lot of fun.（テニスをすることはとても楽しい）
例）Reading books is important for students.（本を読むことは生徒にとって大切だ）
例）Getting up early is good for your health.（早起きは健康によい）
動詞は必ず単数扱いで is / was を使う。中に複数形の名詞（books）が入っていても are にしない。

■ 補語になる動名詞
例）My hobby is collecting old stamps.（私の趣味は古い切手を集めることです）
例）Her job is teaching English.（彼女の仕事は英語を教えることです）

★ ポイント：主語の位置では、不定詞より動名詞のほうが自然な英語になることが多い。Swimming is fun. のほうが To swim is fun. よりよく使われる。`,
      },
      {
        heading: '進行形との区別',
        body: `be動詞＋-ing の形は、進行形にも動名詞（補語）にもなる。見分けは主語と意味で行う。

■ 進行形
主語が動作をしている最中であることを表す。
例）He is playing the guitar.（彼はギターを弾いている）
主語（he）が実際にその動作をしている。

■ 補語の動名詞
主語＝-ing の内容、という関係になる。
例）My hobby is playing the guitar.（私の趣味はギターを弾くことです）
主語（my hobby）は「趣味」という事がらであり、ギターを弾いているわけではない。

■ 見分け方
主語が人や動物で、実際に動作をしていれば進行形。主語が hobby / job / dream / plan のような事がらを表す名詞なら補語の動名詞である。

■ 動名詞が使える位置、不定詞が使える位置
　主語　　　　　→ 動名詞○　不定詞○
　補語　　　　　→ 動名詞○　不定詞○
　動詞の目的語　→ 動詞によって決まる（s288〜s290）
　前置詞の目的語→ 動名詞○　不定詞×
最後の一点が最も重要で、be good at swimming は言えるが be good at to swim は言えない。

⚠ 注意：形式主語 It を使う文では不定詞しか使えない。It is fun to swim.（○）／It is fun swimming.（×）。動名詞なら Swimming is fun. の形にする。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。Reading English books （　） not easy for me.',
        wrongAnswer: 'are',
        trapExplanation: 'be動詞の直前にある books が複数形なので、そこに合わせて are を選んでしまう。',
        correctAnswer: 'is',
        correctExplanation:
          '主語は books ではなく Reading English books（英語の本を読むこと）というかたまり全体で、一つの事がらなので単数扱いになる。動名詞や不定詞が主語のときは動詞を is / was にする。To read English books is not easy for me. と書きかえても同じである。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。My brother is good at （swim）.',
        wrongAnswer: 'to swim',
        trapExplanation: '「泳ぐこと」を不定詞でも表せると知っているため、前置詞のうしろでも to不定詞を置いてしまう。',
        correctAnswer: 'swimming',
        correctExplanation:
          '前置詞（at / in / for / without / about など）のうしろに動詞を置くときは、必ず動名詞にする。不定詞は前置詞の目的語になれない。be good at swimming、without saying、Thank you for coming など、前置詞とセットで動名詞を覚えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s285',
    subject: 'eigo',
    examType: 'koko',
    title: '動名詞②：動詞の目的語になる動名詞',
    description: 'enjoy / finish / stop / mind など、動名詞をとる動詞の使い方を固める',
    intro: '「楽しかった」を英語で言うとき、I enjoyed to play tennis. と書くと誤りになります。enjoy はうしろに動名詞しかとりません。すでに起きたこと、実際に体験したことを続ける動詞は -ing を好む。この感覚をつかむと、丸暗記に頼らずに正しい形が選べるようになります。',
    order: 785,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      'enjoy / finish / stop / mind は動名詞だけを目的語にとる。',
      'enjoy doing（〜して楽しむ）／finish doing（〜し終える）。',
      'stop doing は「〜するのをやめる」。stop to do とは意味が違う（s290）。',
      'Would you mind ~ing? は「〜していただけませんか」。承諾の答えは No, not at all. など否定形。',
      'like / love / begin / start は不定詞・動名詞のどちらもとれる。',
    ],
    sections: [
      {
        heading: '動名詞をとる代表的な動詞',
        body: `次の動詞は、うしろに動作を続けるとき必ず動名詞を使う。to不定詞を置くと誤りになる。

■ enjoy ~ing（〜して楽しむ）
例）I enjoyed talking with her.（彼女と話して楽しかった）
例）We enjoyed watching the fireworks.（花火を見て楽しんだ）
　× I enjoyed to talk with her.

■ finish ~ing（〜し終える）
例）Have you finished washing the dishes?（皿を洗い終えましたか）
例）He finished writing the report at midnight.（彼は真夜中に報告書を書き終えた）

■ stop ~ing（〜するのをやめる）
例）It stopped raining in the afternoon.（午後には雨がやんだ）
例）My father stopped smoking last year.（父は去年たばこをやめた）

■ mind ~ing（〜するのをいやがる）
例）Would you mind opening the window?（窓を開けていただけませんか）
例）Do you mind waiting here for a while?（少しの間ここで待っていただけますか）

★ ポイント：これらの動詞はいずれも「すでに始まっている・実際に行われている動作」を受けている。enjoy も finish も stop も、その動作をしている最中の場面が前提になっている。だから -ing と相性がよい、と理解すると覚えやすい。`,
      },
      {
        heading: 'mind の答え方と、両方とれる動詞',
        body: `■ Would you mind ~ing? への答え方
mind は「〜をいやだと思う」という意味なので、承諾するときは否定で答える。
例）Would you mind opening the window?（窓を開けていただけませんか）
　承諾：No, not at all.／Of course not.／Certainly not.（いいですよ）
　断る：I'm sorry, but it's cold today.（すみません、今日は寒くて）
Yes と答えると「いやです」の意味になってしまうので注意する。

■ 不定詞・動名詞のどちらもとれる動詞
like / love / hate / begin / start / continue は、どちらの形でも意味がほとんど変わらない。
例）I like playing the piano. ＝ I like to play the piano.
例）It began raining. ＝ It began to rain.
例）She started studying French. ＝ She started to study French.

■ 進行形のときは不定詞を選ぶ
begin / start がすでに -ing 形になっているときは、-ing が続くのを避けて不定詞を使う。
例）It is beginning to rain.（○）／It is beginning raining.（不自然）

■ 目的語が動名詞のときの否定
例）I finished doing my homework before dinner.（夕食前に宿題を終えた）
否定は動詞側で作る。I didn't finish doing my homework.（宿題を終えられなかった）

⚠ 注意：want / hope / decide は動名詞をとらない。I want playing tennis. は誤りで、I want to play tennis. が正しい（s289）。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。We enjoyed （swim） in the sea last summer.',
        wrongAnswer: 'to swim',
        trapExplanation: '「泳ぐことを楽しんだ」という日本語から、「〜すること」＝to不定詞と機械的に置きかえてしまう。',
        correctAnswer: 'swimming',
        correctExplanation:
          'enjoy は動名詞だけを目的語にとる動詞で、enjoy to 〜 とは言わない。finish / stop / mind も同じ仲間である。「〜すること」という訳は不定詞にも動名詞にも当てはまるので、訳ではなく動詞の種類で形を決める必要がある。',
      },
      {
        question: '次の対話で、ドアを閉めることを承諾する返事を選びなさい。A: Would you mind closing the door? B:（ア）Yes, of course.（イ）No, not at all.',
        wrongAnswer: '（ア）Yes, of course.',
        trapExplanation: '「もちろんいいですよ」という日本語の感覚から Yes を選んでしまうが、mind は「いやがる」の意味である。',
        correctAnswer: '（イ）No, not at all.',
        correctExplanation:
          'Would you mind ~ing? は直訳すると「〜するのをいやだと思いますか」なので、承諾するときは No（いやではありません）と答える。Yes と答えると「いやです」と断ったことになる。Of course not. / Certainly not. も承諾の返事である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s286',
    subject: 'eigo',
    examType: 'koko',
    title: '動名詞③：前置詞のうしろは必ず動名詞',
    description: 'at / in / for / without など前置詞に続く動詞の形を確定させる',
    intro: '「彼はピアノがじょうずだ」は He is good at playing the piano.。ここで to play と書くと誤りです。前置詞のうしろに置けるのは名詞であり、不定詞は名詞のはたらきをしていても入れません。この一点だけで、動名詞を選ぶべき場面の半分は判断がつきます。',
    order: 786,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '前置詞（at / in / of / for / without / about / before / after）のうしろは必ず動名詞。',
      '不定詞は前置詞の目的語になれない（× good at to play）。',
      'be good at ~ing／be interested in ~ing／be afraid of ~ing／be proud of ~ing。',
      'without ~ing（〜しないで）／before ~ing（〜する前に）／after ~ing（〜したあとで）。',
      'Thank you for ~ing／How about ~ing? は会話の定型表現。',
    ],
    sections: [
      {
        heading: '前置詞＋動名詞の頻出表現',
        body: `前置詞のうしろには名詞が来る。動作を置きたいときは動名詞にする。

■ be動詞＋形容詞＋前置詞
be good at ~ing（〜がじょうずだ）
　例）She is good at playing the piano.
be interested in ~ing（〜に興味がある）
　例）I am interested in learning about other countries.
be afraid of ~ing（〜するのをこわがる）
　例）He is afraid of speaking in front of people.
be proud of ~ing（〜することを誇りに思う）
　例）They are proud of living in this town.
be tired of ~ing（〜にあきる）
　例）I am tired of waiting for the bus.

■ そのほかの前置詞
without ~ing（〜しないで）
　例）He went out without saying goodbye.（さよならも言わずに出て行った）
before ~ing（〜する前に）／after ~ing（〜したあとで）
　例）Wash your hands before eating lunch.
　例）After finishing my homework, I watched TV.
by ~ing（〜することによって）
　例）He improved his English by reading many books.

★ ポイント：熟語の最後が前置詞で終わっているかどうかを確認する習慣をつける。at / in / of / for / with / about で終わっていれば、続く動詞は必ず -ing になる。`,
      },
      {
        heading: '会話の定型表現と、to の見分け',
        body: `■ Thank you for ~ing（〜してくれてありがとう）
例）Thank you for helping me with my homework.（宿題を手伝ってくれてありがとう）
例）Thank you for inviting me to the party.（パーティーに招いてくれてありがとう）

■ How about ~ing?（〜するのはどうですか）
例）How about going to the movies this weekend?（今週末、映画に行くのはどうですか）
例）What about having lunch together?（いっしょに昼食を食べませんか）
Let's 〜 や Shall we 〜? に書きかえられる。
例）How about playing tennis? ＝ Let's play tennis. ＝ Shall we play tennis?

■ I'm sorry for ~ing（〜してすみません）
例）I'm sorry for being late.（遅れてすみません）

■ to が前置詞か不定詞かの見分け
look forward to のように、to で終わる熟語では to が前置詞なので動名詞が続く。
例）I'm looking forward to seeing you again.（またお会いできるのを楽しみにしています）
　× I'm looking forward to see you again.
例）I am used to getting up early.（早起きには慣れている）
判定法：その to のうしろに名詞を置けるか試す。I'm looking forward to your letter.（○ 名詞が置ける）→ 前置詞なので動名詞が続く。

⚠ 注意：want to go / decide to go の to は不定詞の to なので原形が続く。to のうしろに名詞を置けない（× want to a letter）ので区別できる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。I am looking forward to （see） you next month.',
        wrongAnswer: 'see',
        trapExplanation: 'to のうしろは動詞の原形という規則が強く働き、この to が前置詞であることを見落としてしまう。',
        correctAnswer: 'seeing',
        correctExplanation:
          'look forward to の to は不定詞の to ではなく前置詞である。前置詞のうしろは動名詞になるので seeing が正しい。見分けるには、to のうしろに名詞を置けるかを試す。I\'m looking forward to your visit. が成り立つので、この to は前置詞だとわかる。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。He left the room without （say） anything.',
        wrongAnswer: 'to say',
        trapExplanation: '「何も言わずに」という否定的な意味から、not to say のような不定詞の形を思い浮かべてしまう。',
        correctAnswer: 'saying',
        correctExplanation:
          'without は前置詞なので、うしろの動詞は必ず動名詞になる。without saying anything で「何も言わずに」という意味になる。前置詞のうしろに不定詞は置けない、という原則は例外がないので、熟語の最後が前置詞かどうかを必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s287',
    subject: 'eigo',
    examType: 'koko',
    title: '動名詞④：go ~ing・be busy ~ing などの慣用表現',
    description: '動名詞を含む決まり文句をまとめて覚え、英作文で使えるようにする',
    intro: '「釣りに行く」は go to fish ではなく go fishing。「宿題で忙しい」は be busy doing my homework。動名詞には、理屈より先に形で覚えてしまったほうが速い決まり文句がいくつもあります。どれも会話や英作文で使い勝手がよく、入試でもそのまま出題されます。',
    order: 787,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      'go ~ing＝「〜しに行く」（go shopping／go fishing／go swimming／go skiing）。',
      'be busy ~ing＝「〜するのに忙しい」。',
      'feel like ~ing＝「〜したい気がする」。',
      'spend ＋時間・お金＋ ~ing＝「〜して（時間・お金）を使う」。',
      'be used to ~ing＝「〜することに慣れている」（used to＋原形「以前は〜した」とは別物）。',
    ],
    sections: [
      {
        heading: 'よく出る慣用表現',
        body: `動名詞を含む決まり文句は、形をそのまま覚えて使うのが早い。

■ go ~ing（〜しに行く）
例）I went shopping with my sister yesterday.（昨日、姉と買い物に行った）
例）We often go fishing in the river.（私たちはよくその川へ釣りに行く）
例）They went skiing in Hokkaido last winter.（彼らは去年の冬、北海道へスキーに行った）
場所を言うときの前置詞に注意する。
　○ go shopping at the store／go swimming in the sea
　× go shopping to the store

■ be busy ~ing（〜するのに忙しい）
例）She is busy preparing for the concert.（彼女はコンサートの準備で忙しい）
例）I was busy doing my homework last night.（昨夜は宿題で忙しかった）

■ feel like ~ing（〜したい気がする）
例）I feel like eating something sweet.（何か甘い物が食べたい気分だ）
例）I don't feel like going out today.（今日は外出する気になれない）

■ spend ＋時間・お金 ＋ ~ing
例）I spent two hours playing video games.（テレビゲームをして二時間を過ごした）
例）He spends a lot of money buying books.（彼は本を買うのに多くのお金を使う）

★ ポイント：go ~ing の -ing は、swim / ski / shop / fish / camp / hike など、それ自体が活動を表す動詞に限られる。go studying とは言わない。`,
      },
      {
        heading: 'まぎらわしい表現の整理',
        body: `■ be used to ~ing と used to＋原形
形が似ているが意味はまったく違う。
例）I am used to getting up early.（早起きすることに慣れている）
　→ be動詞があり、to のうしろは動名詞。
例）I used to get up early.（以前は早起きしたものだ）
　→ be動詞がなく、to のうしろは原形。今はそうではない、という含みがある。
見分けは be動詞の有無で行う。

■ There is no ~ing（〜することはできない）
例）There is no telling what will happen.（何が起こるかわからない）
難関私立の長文で出る形。

■ It is no use ~ing（〜してもむだだ）
例）It is no use crying over spilt milk.（こぼれたミルクを嘆いてもむだだ／覆水盆に返らず）
ことわざとして出題されることがある。

■ How about ~ing? と Why don't you 〜?
例）How about going to the park?（公園へ行くのはどうですか）
　＝ Why don't you go to the park?（why don't のうしろは原形）
同じ提案でも、うしろの形が違う点に注意する。

⚠ 注意：be interested in ~ing のように前置詞で終わる熟語と、want to〜 のように不定詞をとる動詞を混同しないこと。熟語の最後の語が前置詞なら動名詞、不定詞の to なら原形である。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は昨日、母と買い物に行きました。」を英語にしなさい。',
        wrongAnswer: 'I went to shop with my mother yesterday.',
        trapExplanation: '「〜しに行く」を目的の不定詞（go to 〜）で表そうとして、慣用表現 go ~ing を使えていない。',
        correctAnswer: 'I went shopping with my mother yesterday.',
        correctExplanation:
          '買い物・釣り・水泳・スキーなどの活動に出かけるときは go ~ing の形を使う。go shopping / go fishing / go swimming / go skiing はそのまま覚える。なお場所を続けるときは go shopping at the store のように at / in を使い、to は使わない。',
      },
      {
        question: '和訳しなさい。My grandfather used to walk to the station every morning.',
        wrongAnswer: '祖父は毎朝、駅まで歩くことに慣れていた。',
        trapExplanation: 'be used to ~ing（〜に慣れている）と混同し、be動詞がないことを見落として「慣れていた」と訳してしまう。',
        correctAnswer: '祖父は以前、毎朝駅まで歩いたものだった。',
        correctExplanation:
          'used to＋動詞の原形は「以前は〜したものだ（今はしていない）」という過去の習慣を表す。be動詞がなく、to のうしろが原形（walk）である点が手がかりになる。「慣れている」は He is used to walking to the station. のように be動詞＋used to＋動名詞になる。',
      },
    ],
  },

  // ───────────── 9. 不定詞だけ・動名詞だけを目的語にとる動詞（s288〜s291） ─────────────
  {
    id: 'koko_eigo_s288',
    subject: 'eigo',
    examType: 'koko',
    title: '動名詞だけを目的語にとる動詞',
    description: 'enjoy / finish / stop / mind を中心に、-ing しかとらない動詞をまとめて覚える',
    intro: '同じ「〜すること」なのに、enjoy のうしろには playing しか置けず、want のうしろには to play しか置けません。理屈で説明しきれない部分もあるので、中学で必要な二十語ほどを三つのグループに分けて覚えてしまうのが最短です。まずは動名詞だけをとるグループからです。',
    order: 788,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '動名詞だけをとる動詞（8語）：enjoy / finish / stop / mind / practice / keep / give up / avoid。',
      'これらの動詞に to不定詞を続けるのは誤り（× enjoy to play）。',
      '共通する感覚は「すでに行われている・実際にしている動作」。',
      'keep ~ing＝「〜し続ける」／give up ~ing＝「〜するのをあきらめる」。',
      '中学で覚える20語の内訳は、動名詞のみ8語・不定詞のみ7語・両方5語。',
    ],
    sections: [
      {
        heading: '八つの動詞を覚える',
        figureId: 'lf_kokoeigoext08_288',
        body: `動名詞だけを目的語にとる動詞は、中学範囲では次の八つを押さえれば足りる。

■ enjoy ~ing（〜して楽しむ）
例）We enjoyed singing together.（いっしょに歌って楽しんだ）
■ finish ~ing（〜し終える）
例）I finished reading the book last night.（昨夜その本を読み終えた）
■ stop ~ing（〜するのをやめる）
例）He stopped playing the game and went to bed.（彼はゲームをやめて寝た）
■ mind ~ing（〜するのをいやがる）
例）Would you mind closing the window?（窓を閉めていただけませんか）
■ practice ~ing（〜する練習をする）
例）She practices playing the violin every day.（彼女は毎日バイオリンを弾く練習をする）
■ keep ~ing（〜し続ける）
例）He kept running for two hours.（彼は二時間走り続けた）
■ give up ~ing（〜するのをあきらめる）
例）Don't give up trying.（挑戦することをあきらめてはいけない）
■ avoid ~ing（〜するのを避ける）
例）He avoided answering my question.（彼は私の質問に答えるのを避けた）

★ ポイント：どの動詞も「もう始まっている動作」を受けている。楽しむ・終える・やめる・練習する・続ける・あきらめる・避ける。いずれも、その動作がすでに存在していなければ言えない内容である。だから -ing が続く、と理解すると丸暗記が減る。`,
      },
      {
        heading: '三つのグループの全体像',
        body: `中学で覚えるべき動詞を三つに分けて整理する。合計二十語で、入試に出るものはほぼ尽くされる。

■ ①動名詞だけ（8語）
enjoy／finish／stop／mind／practice／keep／give up／avoid

■ ②不定詞だけ（7語）
want／hope／decide／promise／wish／expect／plan

■ ③どちらもとれる（5語）
like／love／begin／start／continue

■ 使い方の確認
例）I enjoy playing tennis.（①なので -ing）
例）I want to play tennis.（②なので to）
例）I like playing tennis. ＝ I like to play tennis.（③なのでどちらも可）

■ 覚え方
①のグループは「すでにしている動作」、②のグループは「これからする動作」を受ける、と方向で覚える。want・hope・decide・promise・plan はどれも、まだ実現していない先のことを述べている。

⚠ 注意：stop は①に入るが、stop to 〜 という形自体は存在する。ただしその to〜 は目的語ではなく「〜するために」を表す副詞的用法である（s290でくわしく扱う）。「stop に to は使えない」と単純に覚えると読解で誤る。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。My sister practices （play） the piano every evening.',
        wrongAnswer: 'to play',
        trapExplanation: '「弾く練習をする」の「弾く」を、これからする動作だと考えて不定詞にしてしまう。',
        correctAnswer: 'playing',
        correctExplanation:
          'practice は動名詞だけを目的語にとる動詞である。enjoy / finish / stop / mind / keep / give up / avoid も同じグループで、いずれも to不定詞を続けられない。練習・継続・中止のように「すでに行われている動作」を受ける動詞は -ing をとる、と方向でとらえるとよい。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。It kept （rain） all day yesterday.',
        wrongAnswer: 'to rain',
        trapExplanation: '「降り続けた」を「降るという状態を保った」と考え、continue to rain と同じ感覚で to を付けてしまう。',
        correctAnswer: 'raining',
        correctExplanation:
          'keep は動名詞だけをとる動詞なので keep raining が正しい。似た意味の continue は両方とれるため It continued to rain. も It continued raining. も正しい。意味が近くても動詞ごとに形が決まっているので、グループ分けで覚える必要がある。',
      },
    ],
  },

  {
    id: 'koko_eigo_s289',
    subject: 'eigo',
    examType: 'koko',
    title: '不定詞だけを目的語にとる動詞',
    description: 'want / hope / decide / promise など、これからの動作を受ける動詞を固める',
    intro: '「またお会いしたいです」を I hope seeing you again. とは言いません。hope・want・decide・promise はどれも、まだ起きていないこれからのことを続ける動詞で、未来へ向かう感覚を持つ to と結びつきます。前回の動名詞グループと対にして覚えると、混乱がなくなります。',
    order: 789,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '不定詞だけをとる動詞（7語）：want / hope / decide / promise / wish / expect / plan。',
      'これらに動名詞を続けるのは誤り（× hope seeing）。',
      '共通する感覚は「これから実現する動作」。to の「→」の感覚と合う。',
      'hope は「人＋to」の形をとらない（I hope you to come. は誤り）。',
      'need / would like も不定詞をとる（I need to go.／I would like to go.）。',
    ],
    sections: [
      {
        heading: '七つの動詞と例文',
        body: `不定詞だけを目的語にとる動詞は、いずれも「これから実現すること」を続けている。

■ want to 〜（〜したい）
例）I want to be a nurse in the future.（将来看護師になりたい）
■ hope to 〜（〜したいと望む）
例）I hope to see you again soon.（近いうちにまたお会いしたいです）
■ decide to 〜（〜することに決める）
例）She decided to join the tennis club.（彼女はテニス部に入ることに決めた）
■ promise to 〜（〜すると約束する）
例）He promised to come back before dark.（彼は暗くなる前に帰ると約束した）
■ wish to 〜（〜したいと願う。want よりかたい言い方）
例）I wish to speak to the manager.（責任者と話をしたいのですが）
■ expect to 〜（〜するつもりだ・〜だろうと思う）
例）We expect to arrive at noon.（正午に到着する見込みです）
■ plan to 〜（〜する計画だ）
例）They plan to visit Kyoto next month.（彼らは来月京都を訪れる計画だ）

■ 同じ仲間の表現
need to 〜（〜する必要がある）／would like to 〜（〜したいのですが）／try to 〜（〜しようとする）／learn to 〜（〜できるようになる）

★ ポイント：この七語はすべて「まだ起きていないこと」を述べている。動名詞グループが「すでに起きていること」だったのと正反対である。この向きの違いで整理する。`,
      },
      {
        heading: '形をまちがえやすい場面',
        body: `■ 前置詞の直後との混同
同じ hope でも、名詞を続けるときは前置詞を使う。
例）I hope to see you.（不定詞）
例）I'm looking forward to seeing you.（前置詞 to なので動名詞）
どちらも「会うのを楽しみにする」に近い意味だが、形は正反対である。熟語の最後が前置詞かどうかで判断する。

■ hope は「人＋to」をとらない
例）× I hope you to come to the party.
例）○ I hope (that) you will come to the party.
want / tell / ask は「人＋to」をとるが、hope / say / think はとらない。

■ 疑問文・否定文でも形は変わらない
例）Do you plan to study abroad?（留学する計画はありますか）
例）He didn't promise to help us.（彼は私たちを手伝うとは約束しなかった）

■ 主語が三人称単数でも to 以下は原形
例）She wants to go home early.（wants に s が付き、go は原形のまま）

⚠ 注意：decide / promise / plan は日本語では「〜することを」と名詞のように訳されるため、動名詞を選びたくなる。しかし形は必ず to不定詞である。訳ではなく動詞のグループで決める、という原則を徹底する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。We hope （visit） Okinawa next summer.',
        wrongAnswer: 'visiting',
        trapExplanation: '直前に学んだ enjoy ~ing / finish ~ing の形が残っていて、hope も同じように -ing をとると考えてしまう。',
        correctAnswer: 'to visit',
        correctExplanation:
          'hope は to不定詞だけを目的語にとる動詞である。want / decide / promise / wish / expect / plan も同じグループで、いずれもまだ実現していない先のことを受ける。enjoy / finish / stop / mind の動名詞グループと対にして覚えるとよい。',
      },
      {
        question: '次の文の誤りを直しなさい。I hope you to win the game.',
        wrongAnswer: 'I hope you winning the game.',
        trapExplanation: 'want you to 〜 の形を知っているため、hope でも同じように「人＋to」が使えると考えてしまう。',
        correctAnswer: 'I hope (that) you will win the game.',
        correctExplanation:
          'hope は「人＋to不定詞」の形をとらない動詞で、that 節を使って表す。同じ内容を want で言えば I want you to win the game. となる。「人＋to」がとれるのは want / tell / ask / would like / advise / allow などで、hope / say / think はとれない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s290',
    subject: 'eigo',
    examType: 'koko',
    title: 'stop to do と stop doing：意味が変わる動詞',
    description: 'stop / remember / forget / try で、不定詞と動名詞の意味の違いを判別する',
    intro: 'He stopped smoking. は「たばこをやめた」。ところが He stopped to smoke. は「たばこを吸うために立ち止まった」。to が付くだけで意味が正反対になります。remember や forget も同じ現象を起こす。入試で最も差がつくのがこの四語で、和訳・選択・正誤のどの形式でも出題されます。',
    order: 790,
    studyPeriod: '中3夏',
    targetLevel: 'nyushi',
    keyPoints: [
      'stop doing＝「〜するのをやめる」。doing は stop の目的語。',
      'stop to do＝「〜するために立ち止まる（手を止める）」。to do は目的の副詞的用法。',
      'remember to do＝「忘れずに〜する」／remember doing＝「〜したのを覚えている」。',
      'forget to do＝「〜するのを忘れる」／forget doing＝「〜したのを忘れる」。',
      'try to do＝「〜しようと努力する」／try doing＝「ためしに〜してみる」。',
      '共通の原則：to不定詞はこれからすること、動名詞はすでにした（している）こと。',
    ],
    sections: [
      {
        heading: 'stop の二つの形',
        body: `stop は動名詞だけを目的語にとる動詞である。したがって stop のうしろの to不定詞は目的語ではなく、「〜するために」を表す副詞的用法になる。この違いが意味を大きく変える。

■ stop ~ing（〜するのをやめる）
例）My father stopped smoking last year.（父は去年たばこをやめた）
例）The baby stopped crying when she saw her mother.（赤ちゃんは母親を見ると泣きやんだ）
やめた動作は -ing の部分である。

■ stop to do（〜するために立ち止まる・手を止める）
例）My father stopped to smoke.（父はたばこを吸うために立ち止まった）
例）We stopped to take some pictures.（私たちは写真をとるために立ち止まった）
やめた（止めた）のは、それまでしていた歩行や作業であり、to 以下はこれからする動作である。

■ 見分けの手順
①stop のうしろが -ing → その動作をやめた。
②stop のうしろが to＋原形 → いったん止まって、これから to 以下をする。
③文全体の状況（歩いていた・作業していた）と合うほうを選ぶ。

⚠ 注意：He stopped to smoke. を「たばこを吸うのをやめた」と訳すのは、入試で最も多い誤答の一つである。to があれば「これからする」と機械的に判断してよい。`,
      },
      {
        heading: 'remember / forget / try',
        figureId: 'lf_kokoeigoext08_290',
        body: `stop と同じように、うしろの形で意味が変わる動詞がほかにもある。共通する原則は「to不定詞はこれからのこと、動名詞はすでにしたこと」である。

■ remember
remember to do＝「忘れずに〜する」（これからすること）
　例）Remember to lock the door.（忘れずにドアにかぎをかけなさい）
remember doing＝「〜したのを覚えている」（すでにしたこと）
　例）I remember meeting him at the party.（パーティーで彼に会ったのを覚えている）

■ forget
forget to do＝「〜するのを忘れる」（これからすることを忘れる）
　例）Don't forget to bring your umbrella.（傘を持ってくるのを忘れないで）
forget doing＝「〜したのを忘れる」（したことを忘れる）
　例）I'll never forget visiting Kyoto with you.（あなたと京都を訪れたことは決して忘れません）

■ try
try to do＝「〜しようと努力する」
　例）I tried to open the door, but it didn't open.（開けようとしたが開かなかった）
try doing＝「ためしに〜してみる」
　例）Try pushing the button.（ためしにそのボタンを押してみて）
try to do は「うまくいかなかった」という含みを持つことが多い。

★ ポイント：Don't forget to 〜 は「これから忘れずに」の意味で、日常会話でも最頻出。I'll never forget ~ing は思い出を語るときの定型表現である。`,
      },
    ],
    trapExamples: [
      {
        question: '和訳しなさい。On the way home, he stopped to buy some flowers.',
        wrongAnswer: '帰り道で、彼は花を買うのをやめた。',
        trapExplanation: 'stop＝やめる、という訳語だけを覚えているため、うしろが to不定詞でも「〜するのをやめる」と訳してしまう。',
        correctAnswer: '帰り道で、彼は花を買うために立ち止まった。',
        correctExplanation:
          'stop は動名詞だけを目的語にとるので、うしろの to buy は目的を表す副詞的用法である。したがって「花を買うために立ち止まった」となる。「買うのをやめた」なら he stopped buying some flowers. となる。to があれば「これからする動作」と判断する。',
      },
      {
        question: '（　）内から適切なものを選びなさい。Don\'t forget （to post / posting） this letter tomorrow.',
        wrongAnswer: 'posting',
        trapExplanation: 'forget のうしろは動名詞と覚えていたり、「投函すること」という訳から -ing を選んでしまう。',
        correctAnswer: 'to post',
        correctExplanation:
          'tomorrow とあるので、これからする動作である。forget to do は「（これから）〜するのを忘れる」なので、Don\'t forget to post 〜 で「忘れずに投函して」となる。forget doing は「〜したのを忘れる」で、I forgot posting the letter.（投函したことを忘れた）のように過去の行為に使う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s291',
    subject: 'eigo',
    examType: 'koko',
    title: '不定詞と動名詞：総合識別演習',
    description: '位置と動詞の種類から、to不定詞と動名詞のどちらを使うかを即断できるようにする',
    intro: '不定詞と動名詞のどちらを使うか。判断の材料は三つだけです。前置詞のうしろか、動詞の目的語か、それ以外か。前置詞なら動名詞、目的語なら動詞の種類で決まり、それ以外なら多くの場合どちらでもよい。この三分岐を体に入れれば、選択問題は数秒で終わります。',
    order: 791,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '前置詞のうしろ → 必ず動名詞（例外なし）。',
      '動詞の目的語 → 動詞の種類で決まる（enjoy は -ing、want は to）。',
      '主語・補語 → どちらでもよい（動名詞のほうが自然なことが多い）。',
      '形式主語 It のうしろ → 必ず to不定詞（It is fun to swim.）。',
      '「〜するために」（目的）→ 必ず to不定詞。',
      'stop / remember / forget / try は意味で使い分ける。',
    ],
    sections: [
      {
        heading: '三つの分岐で決める',
        body: `どちらを使うかは、その動詞が置かれる位置で決まる。次の順に確認する。

■ ①前置詞のうしろか
前置詞（at / in / of / for / without / about / before / after、および look forward to の to）のうしろなら、必ず動名詞。
例）She is good at cooking.／Thank you for coming.／He left without saying anything.

■ ②動詞の目的語か
動詞の種類で決まる。
　enjoy / finish / stop / mind / practice / keep / give up / avoid → 動名詞
　want / hope / decide / promise / wish / expect / plan → to不定詞
　like / love / begin / start / continue → どちらでもよい
例）I finished writing the report.／I decided to write the report.

■ ③それ以外（主語・補語・目的の表現）
主語と補語はどちらも使えるが、形式主語 It の文と「〜するために」の目的の表現は to不定詞に限られる。
例）Swimming is fun. ＝ To swim is fun. ＝ It is fun to swim.（× It is fun swimming.）
例）I went to the park to play tennis.（× for playing tennis）

★ ポイント：①→②→③の順に見れば、ほとんどの問題は動詞の意味を考えずに処理できる。まず前置詞を探す、という習慣をつける。`,
      },
      {
        heading: '入試での出題形式',
        body: `■ ①適語選択・語形変化
例）I'm interested in （learn） about history. → learning（前置詞 in のうしろ）
例）He decided （go） abroad. → to go（decide は不定詞）
例）Would you mind （open） the window? → opening（mind は動名詞）

■ ②書きかえ
例）To get up early is difficult for me.
　＝ Getting up early is difficult for me.
　＝ It is difficult for me to get up early.
主語の位置なら不定詞と動名詞は交換できるが、It で始める形にするときは必ず不定詞に戻す。

■ ③並べかえ
例）（tennis / enjoyed / we / playing / after school）
　→ We enjoyed playing tennis after school.
enjoy のうしろは -ing、という知識がそのまま語順の決め手になる。

■ ④誤り指摘
例）× I'm looking forward to see you.（to は前置詞なので seeing）
例）× He is good at to play soccer.（前置詞のうしろに不定詞は置けない）
例）× It is important reading books every day.（形式主語の It は不定詞を受ける）

⚠ 注意：like / begin は両方とれるが、進行形の中では -ing の重複を避けて不定詞を使う。It is beginning to rain.（○）／It is beginning raining.（×）。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。I am interested in （study） the history of Japan.',
        wrongAnswer: 'to study',
        trapExplanation: '「学ぶこと」という訳から不定詞を選んでしまい、直前の in が前置詞であることを見落とす。',
        correctAnswer: 'studying',
        correctExplanation:
          '前置詞のうしろに動詞を置くときは、例外なく動名詞にする。be interested in ~ing のほか、be good at ~ing、be afraid of ~ing、Thank you for ~ing も同じ形である。まず前置詞があるかどうかを探す、という手順を最初に置くと迷わない。',
      },
      {
        question: '次の文の誤りを直しなさい。It is important learning English every day.',
        wrongAnswer: 'It is important learn English every day.',
        trapExplanation: '動名詞と不定詞は主語の位置で交換できると覚えているため、形式主語 It の文でも動名詞が使えると考えてしまう。',
        correctAnswer: 'It is important to learn English every day.（または Learning English every day is important.）',
        correctExplanation:
          '形式主語の It が受けられるのは to不定詞だけで、動名詞をこの位置に置くことはできない。動名詞を使いたい場合は Learning English every day is important. のように、そのまま主語の席に置く。It 〜 to … はひとまとまりの型として扱う。',
      },
    ],
  },

  // ───────────── 10. 分詞の形容詞用法（s292〜s295） ─────────────
  {
    id: 'koko_eigo_s292',
    subject: 'eigo',
    examType: 'koko',
    title: '分詞①：現在分詞と過去分詞の意味',
    description: '「〜している」と「〜される」を、名詞との関係から選び分ける',
    intro: 'boiling water は「沸騰しているお湯」、boiled water は「沸かした湯」。同じ boil でも -ing と -ed で意味が逆になります。決め手は、修飾される名詞がその動作を「する側」か「される側」か。この一点さえ押さえれば、分詞の選択問題は落としません。',
    order: 792,
    studyPeriod: '中3夏',
    targetLevel: 'kiso',
    keyPoints: [
      '現在分詞（-ing）＝「〜している」（名詞がその動作をする側）。',
      '過去分詞＝「〜される・〜された」（名詞がその動作をされる側）。',
      '判定法：名詞と動詞の間に「〜が…する」が成り立てば現在分詞、「〜が…される」なら過去分詞。',
      '不規則動詞の過去分詞を正確に覚えておく（break → broken／write → written／speak → spoken）。',
      '分詞は形容詞のはたらきをする。be動詞と組めば進行形・受け身になる。',
    ],
    sections: [
      {
        heading: 'する側か、される側か',
        body: `分詞とは、動詞に -ing や -ed を付けて形容詞のように使う形をいう。どちらを使うかは、修飾される名詞との関係で決まる。

■ 現在分詞（-ing）＝「〜している」
名詞がその動作をする側のとき。
例）a running boy（走っている少年）← the boy runs
例）a crying baby（泣いている赤ちゃん）← the baby cries
例）boiling water（沸騰しているお湯）← the water boils
例）the rising sun（昇る太陽）

■ 過去分詞＝「〜される・〜された」
名詞がその動作をされる側のとき。
例）a broken window（割られた窓）← the window is broken
例）a used car（中古車＝使われた車）← the car is used
例）boiled water（沸かした湯）← the water is boiled
例）fallen leaves（落ち葉）
　※ fall は目的語をとらない動詞なので、この過去分詞は「〜し終えた」という完了の意味を表す例外的な例である。

■ 判定の手順
①修飾される名詞を主語にして文を作ってみる。
②「名詞が〜する」が自然なら現在分詞、「名詞が〜される」が自然なら過去分詞。
例）a （break）window → The window is broken.（窓は割られる）→ broken

★ ポイント：過去分詞は不規則変化が多い。break-broke-broken、write-wrote-written、speak-spoke-spoken、take-took-taken、know-knew-known を正確に書けるようにしておく。`,
      },
      {
        heading: 'よく出る分詞と、進行形・受け身との関係',
        body: `■ 入試頻出の組み合わせ
現在分詞：a sleeping baby（眠っている赤ちゃん）／a swimming boy（泳いでいる少年）／a singing bird（さえずっている鳥）／burning houses（燃えている家）
過去分詞：a broken cup（割れたカップ）／a used bike（中古の自転車）／spoken English（話し言葉の英語）／written English（書き言葉の英語）／a stolen bag（盗まれたかばん）／boiled eggs（ゆで卵）

■ be動詞と組み合わせると別の文法になる
例）The boy is running.（進行形＝走っている）
例）The window is broken.（受け身＝割られている）
分詞そのものは形容詞のはたらきで、be動詞と組んだときだけ進行形・受け身という文の形になる。名詞を直接説明していれば分詞の形容詞用法である。

■ 感情を表す分詞
例）an exciting game（わくわくさせる試合）／excited children（興奮した子どもたち）
物が人を「〜させる」なら -ing、人が「〜させられた」状態なら過去分詞になる。s266 で学んだ surprised / surprising と同じ考え方である。

⚠ 注意：a used car を「使う車」と訳すのは誤り。use の過去分詞なので「使われた車＝中古車」である。同じく spoken English は「話す英語」ではなく「話される英語＝話し言葉」となる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。Be careful. There is a （break） glass on the floor.',
        wrongAnswer: 'breaking',
        trapExplanation: '「割れているガラス」という日本語の「〜ている」につられ、現在分詞を選んでしまう。',
        correctAnswer: 'broken',
        correctExplanation:
          'ガラスは自分で割るのではなく「割られる」側なので過去分詞を使う。The glass is broken. という関係が成り立つ。日本語の「〜ている」は状態も表すため、現在分詞と決めつけてはいけない。名詞がする側か、される側かで判断する。',
      },
      {
        question: '和訳しなさい。My father bought a used car last month.',
        wrongAnswer: '父は先月、使う車を買った。',
        trapExplanation: 'used を「使う」という現在形の意味で読み、過去分詞であることを見落としてしまう。',
        correctAnswer: '父は先月、中古車を買った。',
        correctExplanation:
          'used は use の過去分詞で「使われた」という意味なので、a used car は「中古車」を表す。同じように spoken English は「話し言葉の英語」、written English は「書き言葉の英語」になる。過去分詞は「される・された」と訳すのが原則である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s293',
    subject: 'eigo',
    examType: 'koko',
    title: '分詞②：1語なら名詞の前に置く',
    description: '分詞1語で名詞を修飾するときの語順と、冠詞との位置関係を確定させる',
    intro: '「眠っている赤ちゃん」は a sleeping baby。分詞が1語だけのときは、ふつうの形容詞と同じように名詞の前に置きます。a baby sleeping と書きたくなりますが、それは2語以上のときの形です。英語の修飾は「短いものは前、長いものは後ろ」。この原則を語順の図で確認します。',
    order: 793,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '分詞が1語だけで名詞を修飾するときは、名詞の前に置く。',
      '語順は「冠詞（a / the）＋分詞＋名詞」（a sleeping baby／the broken window）。',
      '2語以上のかたまりになったら名詞の後ろに回る（a baby sleeping in the bed）。',
      '形容詞と同じ位置なので、very などの副詞は付けない（× very sleeping baby）。',
      '前に置く分詞は「性質・状態」を、後ろに置く分詞は「そのときの動作」を表す傾向がある。',
    ],
    sections: [
      {
        heading: '1語の分詞は名詞の前',
        figureId: 'lf_kokoeigoext08_293',
        body: `分詞は形容詞のはたらきをするので、1語なら形容詞と同じ位置、つまり名詞の直前に置く。

■ 現在分詞1語
例）a sleeping baby（眠っている赤ちゃん）
例）a crying girl（泣いている女の子）
例）a singing bird（さえずっている鳥）
例）the rising sun（昇る太陽）
例）running water（流れている水＝水道水）

■ 過去分詞1語
例）a broken window（割れた窓）
例）a used car（中古車）
例）boiled eggs（ゆで卵）
例）fallen leaves（落ち葉）
例）spoken English（話し言葉の英語）

■ 冠詞との位置
冠詞（a / an / the）や所有格は分詞よりさらに前に置く。
　○ a sleeping baby／my broken watch／the stolen money
　× sleeping a baby／broken my watch

■ 形容詞と並べるとき
例）a big sleeping dog（大きな眠っている犬）
ふつうの形容詞と分詞を並べる場合は、形容詞が先に来ることが多い。

★ ポイント：「1語なら前」という原則は、不定詞（必ず2語以上なので後ろ）や関係代名詞（必ず後ろ）とも整合している。修飾語の長さが位置を決める、と一本の原則で覚える。`,
      },
      {
        heading: '前置きできるか判断する',
        body: `分詞に語句が付いて2語以上になると、前には置けなくなる。

■ 1語 → 前
例）a sleeping baby（眠っている赤ちゃん）

■ 2語以上 → 後ろ
例）a baby sleeping in the bed（ベッドで眠っている赤ちゃん）
　× a sleeping in the bed baby
in the bed という語句が付いた瞬間、かたまり全体が名詞の後ろに回る。

■ 前置きの分詞は「性質」を表しやすい
例）a swimming pool（プール）
これは「泳いでいるプール」ではなく「泳ぐための場所」を表す。同じ -ing でも、用途を表すものは動名詞であり、分詞とは区別される（s295で扱う）。
例）a swimming boy（泳いでいる少年）→ こちらは分詞。

■ 過去分詞の注意
例）a broken window（割れた窓）
例）a window broken by the boy（その少年に割られた窓）
by 〜 が付くと2語以上になるので、後ろに回る。

⚠ 注意：a baby sleeping と書けるのは、うしろに語句が続く場合か、特定の場面を述べる場合に限られる。中学の入試問題では「1語なら前、2語以上なら後ろ」で処理して問題ない。`,
      },
    ],
    trapExamples: [
      {
        question: '語を並べかえなさい。（baby / a / look / at / sleeping）眠っている赤ちゃんを見てごらん。',
        wrongAnswer: 'Look at a baby sleeping.',
        trapExplanation: '「後置修飾」を学んだ直後だと、分詞は名詞のうしろに置くものだと思いこんでしまう。',
        correctAnswer: 'Look at a sleeping baby.',
        correctExplanation:
          '分詞が1語だけのときは、形容詞と同じように名詞の前に置く。うしろに回るのは in the bed のような語句が付いて2語以上になったときで、a baby sleeping in the bed の形になる。修飾語の長さで位置が決まる、という原則で判断する。',
      },
      {
        question: '（　）内の語を正しい形と位置で入れなさい。I don\'t like （boil） eggs.（ゆで卵）',
        wrongAnswer: 'I don\'t like boiling eggs.',
        trapExplanation: '「ゆでる」という動作から現在分詞を選んでしまい、卵が「ゆでられる側」であることを見落とす。',
        correctAnswer: 'I don\'t like boiled eggs.',
        correctExplanation:
          '卵は自分でゆでるのではなくゆでられる側なので、過去分詞 boiled を使う。boiling eggs とすると「ゆでている最中の卵」あるいは「卵をゆでること（動名詞）」という別の意味になる。boiling water（沸騰しているお湯）と boiled water（沸かした湯）の対比で覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s294',
    subject: 'eigo',
    examType: 'koko',
    title: '分詞③：2語以上なら名詞の後ろに置く',
    description: '分詞のかたまりで名詞を後ろから修飾する形と、主語の動詞を見失わない読み方を身につける',
    intro: '「公園で走っている少年は私の兄です」を英語にすると The boy running in the park is my brother.。主語が長くなり、動詞 is が遠くに離れます。長文で読み間違えるのは、たいていこの形です。どこまでが主語のかたまりで、どこから文の動詞なのか。線を引いて切る練習をします。',
    order: 794,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '分詞に語句が付いて2語以上になったら、名詞の後ろに置く。',
      '語順は「名詞 ＋ 分詞 ＋ 続く語句」（the boy running in the park）。',
      '主語を修飾すると主語が長くなる。文の動詞は分詞のかたまりの後ろにある。',
      '動詞の単複は、修飾される名詞（先頭の名詞）に合わせる。',
      '関係代名詞に書きかえられる（the boy running ＝ the boy who is running）。',
    ],
    sections: [
      {
        heading: '後ろから説明するかたまり',
        figureId: 'lf_kokoeigoext08_294',
        body: `分詞に目的語や場所などの語句が付くと、かたまり全体が名詞の後ろに回る。

■ 現在分詞のかたまり
例）The boy running in the park is my brother.（公園で走っている少年は私の兄です）
例）Look at the girl playing the piano.（ピアノを弾いている少女を見て）
例）Do you know the man standing by the door?（ドアのそばに立っている男性を知っていますか）

■ 過去分詞のかたまり
例）This is a letter written in English.（これは英語で書かれた手紙です）
例）The language spoken in Brazil is Portuguese.（ブラジルで話されている言語はポルトガル語です）
例）These are pictures taken by my father.（これらは父が撮った写真です）
例）The car made in Japan is very popular.（日本で作られたその車はとても人気がある）

■ 読み方の手順
①名詞のうしろに分詞（-ing / 過去分詞）が続いていたら、そこから修飾のかたまりが始まる。
②かたまりが終わるところ（次に出てくる動詞）で文の骨組みに戻る。
例）The boy / running in the park / is my brother.
　　名詞　　修飾のかたまり　　　　文の動詞

★ ポイント：長い主語を見たら「文の動詞はどこか」を先に探す。The boy running in the park までを主語のかたまりとして一つにまとめれば、is が動詞だとすぐわかる。`,
      },
      {
        heading: '動詞の一致と関係代名詞への書きかえ',
        body: `■ 動詞は先頭の名詞に合わせる
例）The boy running in the park is my brother.（主語は The boy → is）
例）The boys running in the park are my brothers.（主語は The boys → are）
分詞のかたまりの中にある名詞（the park）に合わせてはいけない。

■ 関係代名詞への書きかえ
現在分詞は「主格の関係代名詞＋be動詞」に、過去分詞も同じく書きかえられる。
例）The boy running in the park is my brother.
　＝ The boy who is running in the park is my brother.
例）This is a letter written in English.
　＝ This is a letter which was written in English.
書きかえるとき、be動詞の時制は文全体に合わせる。

■ 進行形との区別
例）The boy running in the park is my brother.（running は分詞。文の動詞は is）
例）The boy is running in the park.（is running が進行形。文の動詞）
be動詞が -ing の直前にあれば進行形、名詞の直後にいきなり -ing が来ていれば分詞である。

⚠ 注意：The boy running in the park my brother. のように文の動詞を書き忘れる誤りが多い。分詞のかたまりを主語に付けたら、必ずそのあとに動詞があるかを確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。The children playing soccer in the park （　） my classmates.',
        wrongAnswer: 'is',
        trapExplanation: '直前にある the park が単数なので、それを主語だと思ってしまう。分詞のかたまりが主語を長くしていることに気づかない。',
        correctAnswer: 'are',
        correctExplanation:
          '主語は The children で、playing soccer in the park はそれを修飾する分詞のかたまりである。したがって動詞は複数形に合わせて are になる。長い主語では、先頭の名詞まで戻って単複を確認する習慣をつける。',
      },
      {
        question: '語を並べかえなさい。（in English / this / a book / written / is）これは英語で書かれた本です。',
        wrongAnswer: 'This is a written in English book.',
        trapExplanation: '「英語で書かれた本」という日本語の語順のまま、修飾のかたまりを名詞の前に置いてしまう。',
        correctAnswer: 'This is a book written in English.',
        correctExplanation:
          '分詞に in English という語句が付いて2語以上になっているので、かたまり全体を名詞 a book の後ろに置く。前に置けるのは分詞1語のとき（a written report のような形）だけである。関係代名詞を使えば a book which was written in English となる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s295',
    subject: 'eigo',
    examType: 'koko',
    title: '分詞・動名詞・不定詞：後置修飾の総合識別',
    description: '名詞のうしろに続く -ing・過去分詞・to不定詞を、正確に読み分けて訳す',
    intro: 'a swimming pool は「泳いでいるプール」ではありません。a swimming boy なら「泳いでいる少年」なのに、なぜ違うのか。同じ -ing でも、動名詞（〜するための）と現在分詞（〜している）では意味がまるで変わります。最後にこの単元の全体を、識別という一点でまとめ上げます。',
    order: 795,
    studyPeriod: '中3夏',
    targetLevel: 'nyushi',
    keyPoints: [
      '名詞の前の -ing：動名詞なら「〜するための（用途）」、現在分詞なら「〜している（動作）」。',
      '名詞のうしろの -ing／過去分詞 → 分詞のかたまり（後置修飾）。',
      '名詞のうしろの to＋原形 → 不定詞の形容詞的用法（〜するための・〜すべき）。',
      '判定法：「その名詞がその動作をしているか」を確かめると、分詞か動名詞かがわかる。',
      '名詞のうしろが「主語＋動詞」なら関係代名詞の省略（the book I read yesterday）。',
    ],
    sections: [
      {
        heading: '名詞の前の -ing を見分ける',
        body: `名詞の前に置かれた -ing には二種類ある。

■ 現在分詞（〜している）
その名詞が実際にその動作をしている。
例）a swimming boy（泳いでいる少年）← The boy is swimming.
例）a sleeping baby（眠っている赤ちゃん）← The baby is sleeping.
例）a running dog（走っている犬）

■ 動名詞（〜するための・〜用の）
その名詞の用途を表す。名詞はその動作をしていない。
例）a swimming pool（水泳用のプール）← プールは泳がない
例）a sleeping bag（寝袋）← 袋は眠らない
例）a washing machine（洗濯機）／a waiting room（待合室）／a shopping bag（買い物袋）

■ 判定法
「その名詞が〜している」と言えるかどうかを確かめる。言えれば現在分詞、言えなければ動名詞（用途）である。

★ ポイント：入試では a sleeping baby と a sleeping bag、a swimming boy と a swimming pool のように対で出題される。訳し分けができるようにしておく。`,
      },
      {
        heading: '名詞のうしろに続く形の識別',
        figureId: 'lf_kokoeigoext08_295',
        body: `名詞のうしろに何が続くかで、修飾のしかたが決まる。

■ ①-ing のかたまり → 現在分詞（〜している）
例）the boy running in the park（公園で走っている少年）

■ ②過去分詞のかたまり → 過去分詞（〜される・された）
例）a letter written in English（英語で書かれた手紙）

■ ③to＋動詞の原形 → 不定詞の形容詞的用法（〜するための・〜すべき）
例）something to eat（食べる物）／a lot of work to do（すべき仕事）

■ ④主語＋動詞 → 関係代名詞の省略
例）the book I read yesterday（私が昨日読んだ本）

■ 訳し分けの練習
例）the girl playing the piano（ピアノを弾いている少女／今している）
例）the girl to play the piano（ピアノを弾くことになっている少女／これからする）
例）the piano played by the girl（少女によって弾かれるピアノ／される側）

■ 進行形との最終確認
例）The man standing over there is my uncle.（standing は分詞。文の動詞は is）
例）The man is standing over there.（is standing が進行形）
名詞の直後にいきなり -ing が来ていれば分詞、be動詞をはさんでいれば進行形である。

⚠ 注意：分詞のかたまりが主語を修飾しているとき、文の動詞を落とす誤りが最も多い。The students studying in the library quiet. のような文は、are が抜けている。長い主語を書いたら、必ず動詞の有無を確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '和訳しなさい。My father built a swimming pool in the garden.',
        wrongAnswer: '父は庭に泳いでいるプールを作った。',
        trapExplanation: '名詞の前の -ing をすべて現在分詞（〜している）と考えてしまい、用途を表す動名詞であることに気づかない。',
        correctAnswer: '父は庭にプール（水泳用のプール）を作った。',
        correctExplanation:
          'プール自体が泳ぐわけではないので、この swimming は「泳ぐための」という用途を表す動名詞である。a sleeping bag（寝袋）、a washing machine（洗濯機）も同じ。一方 a swimming boy はその少年が泳いでいるので現在分詞になる。名詞がその動作をするかどうかで見分ける。',
      },
      {
        question: '次の文の誤りを直しなさい。The girl standing by the window my sister.',
        wrongAnswer: 'The girl is standing by the window my sister.',
        trapExplanation: 'standing を文の動詞だと思いこみ、be動詞を分詞の前に補って進行形にしてしまう。',
        correctAnswer: 'The girl standing by the window is my sister.',
        correctExplanation:
          'standing by the window は The girl を修飾する分詞のかたまりで、文の動詞ではない。したがって、そのかたまりのうしろに文の動詞 is を置く必要がある。分詞のかたまりを主語に付けたら、必ずそのあとに動詞があるかを確認する。',
      },
    ],
  },
];
