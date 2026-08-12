import type { Lesson } from './lesson-types';

// 高校受験 英語「長文読解」拡張ユニット（40セッション：koko_eigo_s336〜koko_eigo_s375）
// order は 836〜875。
// 構成：読解の基本姿勢(4)／主語と動詞を見つける(5)／代名詞の指示内容(4)／
//       つなぎ語から展開を読む(5)／段落の主題文(4)／物語文の読解(5)／
//       説明文・論説文の読解(5)／図表つき読解(5)／内容一致と要旨把握(3)
// 各セッションに150〜300語程度のオリジナル英文パッセージを載せ、そのあとに日本語で読み方を解説する。
// 図解（lesson-figs-koko-eigo-ext10.ts）は、英文中の数値をそのままグラフにしたものだけを
// 付けてあり、図の数値と英文の記述は完全に一致させてある（40課中18課に付与）。
export const kokoEigoExt10Lessons: Lesson[] = [
  // ───────────── 1. 読解の基本姿勢（s336〜s339） ─────────────
  {
    id: 'koko_eigo_s336',
    subject: 'eigo',
    examType: 'koko',
    title: '読解の基本姿勢①：設問を先に読んでから本文に入る',
    description: '本文を読む前に設問に目を通し、何を探しながら読むかを決めてから読み始める手順を身につける',
    intro: '知らない町で「駅はどこですか」と聞かれてから歩くのと、何も考えずにぶらぶら歩くのとでは、同じ道でも目に入るものがまるで違います。長文も同じで、何を探すかを決めてから読むと、必要な一文が向こうから飛びこんできます。まず設問を見る、これだけで読む速さが変わります。',
    order: 836,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '本文より先に設問（と選択肢）に目を通し、「何を探すか」を決めてから読み始める。',
      '先読みするのは設問文だけでよい。長い選択肢まで全部覚えようとすると逆に時間を失う。',
      '設問の疑問詞（Why / How many / What）が、探すべき情報の種類を教えてくれる。',
      '設問は本文の流れとほぼ同じ順に並ぶことが多い。前の設問の答えより後ろを探す。',
      'キーワードが見つかっても、その一文だけで即答しない。前後1〜2文まで必ず確かめる。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `まず設問だけ見てほしい。①Why did Ms. Sato start the event? ②How many books can a student borrow at a time? この二つを頭に入れてから、下の英文を読む。

Our school library is a quiet place on the second floor. It opens at eight thirty in the morning and closes at five in the afternoon. Students can borrow three books at a time, and they must return them within two weeks.

Last year, the librarian, Ms. Sato, noticed a problem. Many students came to the library only to do their homework. They did not read books for fun. Ms. Sato wanted to change this, so she started a small event called "Book Friends."

In this event, each student writes a short card about a book he or she likes. The card does not have to be long. Three or four sentences are enough. Ms. Sato puts the cards on a large board near the door, and other students read them.

The idea worked well. Students often choose a book because a friend recommends it. In the first month, the number of books borrowed increased. Ms. Sato says that a card written by a classmate is more powerful than a poster made by a teacher.`,
      },
      {
        heading: '先読みしたから、どこを見ればよいかが決まる',
        body: `■ ①Why 〜? は「理由」を探す設問
理由を表す語は限られている。because / so / for this reason / that is why の四つを覚えておけば、目が自然にそこで止まる。本文では第2段落に "Many students came to the library only to do their homework. They did not read books for fun. Ms. Sato wanted to change this, so she started 〜" とある。so の前が理由、後ろが結果だ。答えは「多くの生徒が宿題のためだけに図書館に来ていて、楽しみのために本を読まなかったから」。

■ ②How many 〜? は「数字」を探す設問
数字は文字の中で目立つので、先読みしておけば一瞬で見つかる。第1段落の three books at a time が該当箇所である。

■ 先読みしない読み方との違い
先読みをせずに最初から丁寧に読むと、第1段落の開館時間や場所（on the second floor / eight thirty / five）まで頭に入れようとしてしまう。しかし設問はそこを聞いていない。読む前に設問を見ておけば、開館時間の部分は「数字はあるが冊数ではない」と判断して素通りできる。

★ ポイント：先読みは「速く読む技術」ではなく「読まなくてよい場所を決める技術」である。長文で時間が足りない人は、読む速さではなく、捨てる場所の判断で差がついている。

⚠ 注意：先読みするのは設問文だけでよい。ア〜エの選択肢まで全部覚えてから読もうとすると、四つの内容が頭の中で混ざり、かえって本文が読めなくなる。選択肢は本文の該当箇所を見つけてから読み比べる。`,
      },
      {
        heading: '設問の並び順を味方にする',
        body: `入試の長文問題は、設問がだいたい本文の流れどおりに並んでいる。第1問の答えは前のほう、最後の問いの答えは後ろのほう、という具合である。これを知っていると、探す範囲を半分以下に減らせる。

例）設問が「①開館時間 ②Ms. Sato が気づいた問題 ③カードの書き方 ④結果」と並んでいるなら、②の答えを第4段落まで探しに行く必要はない。①の答えを見つけた場所より後ろ、③の答えより前を見ればよい。

■ 実際の手順（30秒で終わる）
①設問の疑問詞と固有名詞（人名・地名・数字）に丸をつける。
②本文を頭から読み、丸をつけた語が出てきたところで速度を落とす。
③該当箇所の前後1〜2文を読み、答えを決める。
④選択肢を読み比べる。

■ 「一文だけで決めない」
本文最終段落に "In the first month, the number of books borrowed increased." とある。ここだけ見て「Book Friends は貸出冊数を増やすために始まった」と答えたくなるが、これは行事の結果であって理由ではない。理由は第2段落に書かれている。設問の疑問詞が Why なのか What happened なのかを取り違えると、正しい場所を見ていても誤答になる。

★ ポイント：先読み → キーワード発見 → 前後を確認 → 解答、の4ステップを崩さない。速さは③④を丁寧にやったうえでの結果として付いてくる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "Students can borrow three books at a time, and they must return them within two weeks." に合うのはどちらか。ア 生徒は2週間に3冊まで借りられる　イ 生徒は一度に3冊まで借りられ、2週間以内に返す',
        wrongAnswer: 'ア',
        trapExplanation: 'at a time を「ある期間に」と取り違え、後ろの within two weeks とくっつけて「2週間で3冊」という一つの条件にまとめてしまう。and の前後が別々の条件だという意識が抜けている。',
        correctAnswer: 'イ',
        correctExplanation:
          'at a time は「一度に・同時に」の意味で、同時に手元に置ける冊数の制限を表す。and の後ろの must return them within two weeks は返却期限の話で、別の条件である。and が二つの文をつないでいるときは、前半と後半をいったん切り離して意味を取る。',
      },
      {
        question: '本文について Why did Ms. Sato start Book Friends? と問われた。ア 多くの生徒が宿題のためだけに図書館を使い、楽しみで本を読まなかったから　イ 借りられた本の数が増えたから',
        wrongAnswer: 'イ',
        trapExplanation: '数字や increased のような目立つ語に飛びついてしまうため。しかしこれは行事を始めた「結果」であって「理由」ではない。Why と問われているのに結果を答えている。',
        correctAnswer: 'ア',
        correctExplanation:
          'Why の答えは because / so / for this reason の周辺にある。本文では "They did not read books for fun. Ms. Sato wanted to change this, so she started 〜" と、so の前に理由が書かれている。時間の流れでいえば「理由 → 行動 → 結果」であり、結果は行動より後ろに出てくる。設問の疑問詞を確認してから該当箇所を決めること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s337',
    subject: 'eigo',
    examType: 'koko',
    title: '読解の基本姿勢②：返り読みをやめ、意味のかたまりで前から読む',
    description: '英文を日本語の語順に組みかえずに、主語＋動詞から順に前から処理する読み方に切りかえる',
    intro: '日本語に直そうとすると、どうしても文の後ろから戻って読むことになります。1文ならできても、200語の長文で毎回戻っていたら時間はいくらあっても足りません。英語は左から右へ情報が並んでいます。その順のまま受け取る練習をすると、読む速さは2倍近くになります。',
    order: 837,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '返り読み＝日本語の語順に直すために文末から戻る読み方。長文では時間を失う最大の原因。',
      '英文は「だれが→どうする→何を→どこで→いつ」の順で情報が出る。その順のまま受け取る。',
      '意味のかたまり（チャンク）の切れ目は、前置詞の前・接続詞の前・関係詞の前・カンマ。',
      '訳を作らず「日本語のメモ書き」程度で先へ進む。完全な訳文は設問に答えるときだけ作る。',
      '声に出さずに読む（黙読）。頭の中で音読していると、音読の速さ以上には読めない。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう（スラッシュを引きながら）',
        body: `次の英文を、後ろから戻らずに前から読んでみる。読みながら、意味の切れ目に / を入れていく。

Every morning, I leave my house at seven fifteen. The station near my house is about ten minutes away on foot. On the train, I usually read a book about space, because I want to be a scientist in the future.

Last Tuesday, however, something different happened. A woman with a heavy bag got on the train at the next station. She was standing in front of me, and she looked very tired. I wanted to give her my seat, but I could not stand up. I was afraid that other people would look at me.

The train stopped at the third station. A boy who was sitting next to me stood up quickly and said something to the woman in a small voice. She smiled and sat down. The boy did not look at anyone. He just took out his phone and started to read.

That evening, I told my mother about the boy. She said, "Kindness does not need a loud voice." Since then, I have decided to act first and think later, at least on the train.`,
      },
      {
        heading: '切れ目はどこに入れるか',
        body: `■ 切れ目を入れる4か所
①前置詞（in / on / at / with / about / for）の前
②接続詞（and / but / because / when / if）の前
③関係詞（who / which / that）の前
④カンマ

例）Every morning, / I leave my house / at seven fifteen.
　　「毎朝／私は家を出る／7時15分に」
例）A woman with a heavy bag / got on the train / at the next station.
　　「一人の女性、重いかばんを持った／電車に乗った／次の駅で」
例）A boy / who was sitting next to me / stood up quickly / and said something / to the woman / in a small voice.
　　「一人の男の子／私のとなりに座っていた／さっと立ち上がった／そして何か言った／その女性に／小さな声で」

■ 日本語として不自然でよい
「一人の女性、重いかばんを持った」は日本語としては変だが、意味は取れている。長文を読むときに必要なのはこのレベルの理解で、きれいな訳文ではない。訳文を作るのは、和訳問題を解くときだけでよい。

★ ポイント：チャンクの区切りは慣れると自然に見えるようになる。最初のうちは実際にえんぴつで / を書きこみながら読むとよい。3週間も続けると、書かなくても切れ目が見えるようになる。

⚠ 注意：切れ目を細かく入れすぎると、逆に読みにくくなる。3〜6語で一区切りが目安。`,
      },
      {
        heading: '前から読むと設問にも強くなる',
        body: `前から読む習慣がつくと、「どこに何が書いてあったか」の記憶が残りやすくなる。返り読みをしていると同じ文を何度も往復するので、内容ではなく語順の操作に頭を使ってしまい、読み終えたときに何も覚えていないという状態になる。

■ この英文で押さえる情報の流れ
第1段落＝ふだんの様子（毎朝の習慣）。第2段落＝ある日の出来事と「私」の気持ち（席をゆずれなかった）。第3段落＝男の子の行動。第4段落＝母の言葉と「私」の決意。

つまり「日常 → 出来事 → 他者の行動 → 気づき」という、入試の物語文でもっともよく出る型である。前から順に読んでいれば、この4段構成は自然に頭に入る。

■ 黙読の速さを上げる
頭の中で英語を音読していると、1分間に150語程度が限界になる。目で語のかたまりをとらえる練習をすると、200〜250語まで上がる。具体的には、1行を2〜3回の視線移動で読む意識を持つ。1語ずつ目で追わない。

■ 練習法
同じ英文を3回読む。1回目は / を入れながら、2回目は / を見ながら速く、3回目は何も見ずに。同じ英文でよいので、速く読める感覚を体で覚えることが大切である。

★ ポイント：長文が苦手な人の多くは、単語力ではなく読む順序で損をしている。前から読む練習は、単語を覚えるより早く点数に効く。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "I was afraid that other people would look at me." の意味として正しいのはどちらか。ア 私は他の人が私を見てくれるのを期待していた　イ 私は他の人に見られるのがこわかった',
        wrongAnswer: 'ア',
        trapExplanation: 'be afraid that 〜 を「〜だろうと思う」とだけ覚えていたり、would を「〜してくれるだろう」と好意的に取ったりして、こわがっているという肝心の気持ちを落としてしまう。',
        correctAnswer: 'イ',
        correctExplanation:
          'be afraid that 〜 は「〜ではないかとこわい・心配だ」。前の文に I could not stand up（立ち上がれなかった）とあり、立てなかった理由がこの文である。前から読んでいれば「立てなかった → こわかったから」と流れがつながる。文の意味に迷ったら、直前の文とのつながりで決める。',
      },
      {
        question: '本文の "A boy who was sitting next to me stood up quickly" で、実際に立ち上がったのはだれか。',
        wrongAnswer: '私（I）',
        trapExplanation: '文の後ろから訳そうとして who was sitting next to me の me が目に入り、主語をとりちがえる。返り読みをするとこの型の主語ミスが起きやすい。',
        correctAnswer: 'となりに座っていた男の子（A boy）',
        correctExplanation:
          'who was sitting next to me は直前の A boy を説明する関係代名詞のかたまりで、文全体の主語は A boy である。前から「A boy（男の子が）／who was sitting next to me（私のとなりに座っていた）／stood up（立ち上がった）」と読めば取りちがえない。主語のうしろに who / which / that が続いたら、そこから動詞までを一つのかたまりとしてくくること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s338',
    subject: 'eigo',
    examType: 'koko',
    title: '読解の基本姿勢③：知らない単語を前後から推測する',
    description: '未知語が出ても止まらず、定義・言いかえ・対比・具体例の手がかりから意味を絞りこむ',
    intro: '長文で知らない単語が1語も出ないということは、まずありません。入試の英文は、知らない語があっても読めるように作られています。実際、答えに必要な語には必ずヒントが近くに置かれています。止まって悩むのではなく、まわりを見て決める。これが読解の技術です。',
    order: 838,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '知らない語で止まらない。まず読み進め、必要になったら前後から推測する。',
      '手がかり①定義：A is B / A, or B / A means 〜 の形で直後に説明されている。',
      '手がかり②具体例：for example / such as の後ろを見れば、その語の仲間がわかる。',
      '手がかり③対比：but / however / instead の前後で反対の意味になる。',
      '品詞だけでも決める。動詞か名詞かがわかれば、選択肢を半分に減らせる。',
      '意味は「よいこと／悪いこと」のプラスマイナスだけでも十分なことが多い。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `知らない語が出ても止まらずに、最後まで読んでみる。

Have you ever heard the word "solar cooker"? A solar cooker is a simple box that uses sunlight to heat food. It has no electricity and no fire. Instead, it has a shiny metal surface that gathers the light of the sun.

In some parts of the world, people must walk for hours to collect wood for cooking. This work is often done by children, and it takes time that they could use for study. Cutting trees for wood also damages forests. A solar cooker can help these families, because sunlight is free and it never runs out.

Of course, the cooker has a weakness. On a cloudy day it is almost useless, and it cooks food slowly. A meal that takes twenty minutes on a gas stove may take two hours in a solar cooker. For this reason, some people use it only for boiling water.

Even so, many groups continue to give solar cookers to villages. They say that saving even one hour of walking each day makes a big difference to a child.`,
      },
      {
        heading: '4つの手がかりで意味を決める',
        body: `■ 手がかり①：定義（A is B）
solar cooker を知らなくてよい。直後に A solar cooker is a simple box that uses sunlight to heat food. と説明がある。「太陽の光で食べ物を温める箱」だとわかる。英文では、筆者が読者の知らない語を使うとき、ほぼ必ず直後に説明を置く。is / means / that is / , or 〜 の形を探す。

■ 手がかり②：具体例
gathers（集める）が難しければ、前後を見る。it has a shiny metal surface that gathers the light of the sun とあり、ぴかぴかの金属面が光をどうするのかを考えれば「集める」しかない。

■ 手がかり③：対比
weakness が難しい場合、Of course, the cooker has a weakness. の後ろに almost useless / cooks food slowly とマイナスの内容が並ぶ。したがって weakness はマイナスの語、つまり「弱点」である。前の段落が can help these families とプラスの内容だったことも手がかりになる。

■ 手がかり④：語の形（品詞）
useless は use（使う）＋ -less（〜がない）。-less が付けば「〜がない」というマイナスの意味になる（careless / homeless）。runs out は「尽きる」だが、直前の sunlight is free and it never 〜 から「なくならない」と見当がつく。

★ ポイント：意味を1語に決めきれなくても、プラスかマイナスかがわかれば設問は解けることが多い。

⚠ 注意：知っている語に形が似ているというだけで決めつけない。damage を「ダメージ＝損害」と取れるのは正解だが、たとえば present（現在の・出席して）のように、カタカナ語の意味しか知らないと誤読する語もある。文の中で成り立つかを必ず確かめる。`,
      },
      {
        heading: '推測した意味を検算する',
        body: `推測した意味は、必ずその文にあてはめて確かめる。ここを飛ばすと、思いこみのまま読み進めて全体を誤読する。

例）weakness ＝「弱点」と推測 → 「もちろん、そのクッカーには弱点がある。くもりの日にはほとんど役に立たず、調理が遅い」→ つながる。よってこの推測でよい。

例）runs out ＝「走って出ていく」と直訳 → 「日光は無料で、決して走って出ていかない」→ 意味が通らない。よって別の意味（尽きる）を考える。

■ 意味が通らないときのチェック順
①主語と動詞を取りちがえていないか。
②その語が動詞ではなく名詞ではないか（逆もある）。
③熟語・句動詞ではないか（run out / give up / put off など、2語で1つの意味）。
④否定語（not / never / no / without）を読み落としていないか。

■ 設問に直接関わる語だけ丁寧に扱う
本文中の未知語すべてを推測する必要はない。設問に下線が引かれている語、選択肢に出てくる語だけ丁寧に扱えばよい。それ以外は「たぶんマイナスの語」くらいで通過してよい。

★ ポイント：入試本番で知らない語が3〜5語あるのはふつうのこと。全部わかろうとせず、設問が要求する語だけ確実に処理する。

⚠ 注意：辞書のない試験中に「思い出せない」と何十秒も止まるのが最大の失点原因。10秒考えて出てこなければ、印だけ付けて先に進む。`,
      },
    ],
    trapExamples: [
      {
        question: '本文中の weakness の意味に最も近いのはどれか。ア 強み　イ 弱点　ウ 重さ',
        wrongAnswer: 'ウ',
        trapExplanation: 'weak（弱い）と weight（重さ）を混同するか、weakness の -ness だけを見て「〜さ＝重さ」と結びつけてしまう。前後の内容を確かめずに語形だけで判断している。',
        correctAnswer: 'イ',
        correctExplanation:
          '直後に almost useless（ほとんど役に立たない）、cooks food slowly（調理が遅い）とマイナスの内容が並ぶので、weakness は欠点を表す語だとわかる。Of course で始まる文は、それまでのよい話に対して「もちろん短所もある」と譲歩する型であり、この型を知っていればマイナス内容が来ると予想できる。',
      },
      {
        question: '本文の "A meal that takes twenty minutes on a gas stove may take two hours in a solar cooker." が表しているのはどちらか。ア ソーラークッカーのほうが早く調理できる　イ ソーラークッカーのほうが時間がかかる',
        wrongAnswer: 'ア',
        trapExplanation: 'twenty minutes と two hours の二つの数字だけを拾い、どちらがどの調理法の時間かを取りちがえる。数字の直後の前置詞句（on a gas stove / in a solar cooker）を読み飛ばすと逆に取る。',
        correctAnswer: 'イ',
        correctExplanation:
          '主語は A meal that takes twenty minutes on a gas stove（ガスこんろなら20分で済む食事）で、その食事が may take two hours in a solar cooker（ソーラークッカーでは2時間かかることもある）と述べている。数字を拾ったら、必ずその直後の前置詞句まで読んで「どちらの条件の数字か」を確定させること。前の文の cooks food slowly とも一致する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s339',
    subject: 'eigo',
    examType: 'koko',
    title: '読解の基本姿勢④：全体を見渡してから細部に入る',
    description: '題・段落数・数字の位置をざっと確認し、本文の地図を作ってから精読に入る手順を学ぶ',
    intro: '山に登る前に地図を見ておくと、途中で道に迷いません。長文も同じで、いきなり1行目から精読するより、30秒だけ全体を眺めて「どこに何がありそうか」を把握したほうが速く正確に読めます。数字や固有名詞は遠くからでも見えるので、その位置を先に覚えておきます。',
    order: 839,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '精読の前に30秒で全体を見渡す（題・段落数・数字・固有名詞・図表の有無）。',
      '数字と大文字で始まる語は目立つので、位置だけ先に覚えておくと後で探す時間が減る。',
      '各段落の1文目だけ拾い読みすると、話の骨組みがつかめる。',
      '合計と内訳が出てくる英文では、内訳の合計が本文の総数と一致するかを確認する。',
      '図表がある問題では、図表の軸・単位・年を先に見てから英文に入る。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう（数字に印をつけながら）',
        body: `Our school has many clubs, and every first-year student must join one of them. In April, our teacher asked all the first-year students which club they had chosen. There are 120 first-year students this year.

The most popular club was the soccer club. Forty students chose it. The second was the brass band, with thirty students. The tennis club came next with twenty-five students. Fifteen students joined the art club, and the last ten students joined the science club.

Our teacher was a little surprised. Ten years ago, the science club was the largest club in our school, and more than fifty students belonged to it. Now it is the smallest one.

The science club members are not sad, though. They say that a small club is easier to run, because everyone can use the machines and no one has to wait. This year they are making a small robot that can carry books from one classroom to another. They will show it at the school festival in November.`,
        figureId: 'lf_kokoeigoext10_339',
      },
      {
        heading: '30秒の見渡しで何がわかるか',
        body: `■ 段落の1文目だけ拾う
①Our school has many clubs 〜（部活動の話だ）
②The most popular club was the soccer club.（人気順の話だ）
③Our teacher was a little surprised.（先生が驚いた＝過去との比較が来る）
④The science club members are not sad, though.（科学部の視点に変わる）

これだけで「部活動の人数 → 人気順 → 昔との比較 → 科学部の現在」という地図ができる。この地図があれば、たとえば「科学部が今作っているものは何か」と問われたとき、迷わず第4段落を見に行ける。

■ 数字の位置を覚える
120 / 40 / 30 / 25 / 15 / 10 / 50 と数字が並んでいる。数字が集まっているのは第2段落。人数を問う設問はここを見ればよい。

■ 内訳の合計を確かめる
40＋30＋25＋15＋10＝120。第1段落の There are 120 first-year students this year. と一致する。合計が合えば、読みちがえがないことの確認になるし、「グラフのどの棒がどの部か」を答える問題でも決め手になる。

★ ポイント：合計が合わないときは、自分がどこかを読みちがえている。もう一度その段落だけ読み直す。これは図表つき読解でとくに効く。

⚠ 注意：見渡しはあくまで30秒。ここで丁寧に読み始めると二度手間になる。目的は「地図を作ること」であって「内容を理解すること」ではない。`,
      },
      {
        heading: '過去と現在の対比に注意する',
        body: `第3段落は入試でねらわれる型である。Ten years ago, the science club was the largest club 〜 / Now it is the smallest one. と、10年前と今が正反対になっている。

■ 時を表す語が対比の合図
Ten years ago / In the past / At that time / Now / Today / These days
これらの語が出たら、その前後で内容がひっくり返る可能性が高い。えんぴつで印をつけておく。

■ 数字の年代に注意
more than fifty students belonged to it は「10年前の科学部」の人数であって、今の人数ではない。今は10人である。設問で「科学部の人数」を聞かれたとき、どちらの時点を聞いているかを必ず確認する。

例）How many students are in the science club now? → 10人
例）How many students were in the science club ten years ago? → 50人より多かった

■ one / it の指す先
Now it is the smallest one. の it は the science club、one は club である。one は「同じ種類のもの」を指す代名詞で、the smallest one ＝ the smallest club。

★ ポイント：長文で「今」と「昔」が出てきたら、必ず二列の表を頭の中に作る。人数・順位・気持ちがどう変わったかが問われる。

⚠ 注意：though が文末に置かれると「でも・だけど」という意味の副詞になる（The science club members are not sad, though.）。文頭の though（〜だけれども）とは働きが違うので、接続詞と決めつけないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '本文と図から、現在いちばん人数の少ない部はどれか。また、10年前にいちばん大きかった部はどれか。',
        wrongAnswer: 'どちらも科学部ではなく、現在いちばん少ないのはテニス部だと答える',
        trapExplanation: 'Ten years ago 〜 the largest club という文だけを見て「科学部＝大きい部」という印象が残り、現在の順位（第2段落の10人）と混ざってしまう。時点を分けずに読んだために起きる誤り。',
        correctAnswer: '現在いちばん少ないのは科学部（10人）。10年前にいちばん大きかったのも科学部。',
        correctExplanation:
          '第2段落は現在の人数（サッカー40・吹奏楽30・テニス25・美術15・科学10）で、科学部が最少である。第3段落は10年前の話で、当時の科学部は最大だった。同じ部が「昔は最大・今は最少」と逆転しているのがこの英文の要点であり、Now it is the smallest one. がそれをまとめている。時を表す語で情報を仕分けること。',
      },
      {
        question: '本文の内容に合うのはどれか。ア 1年生は全員どれかの部に入らなければならない　イ 1年生は好きな部に入ってもよいが、入らなくてもよい',
        wrongAnswer: 'イ',
        trapExplanation: 'must join を「入ることができる」と弱く読んでしまう。can と must の区別があいまいなまま、日本の学校の実感（部活は任意のところもある）で判断してしまうことも原因。',
        correctAnswer: 'ア',
        correctExplanation:
          'every first-year student must join one of them の must は「〜しなければならない」という義務を表す。every が付いているので「1年生は全員」である。読解では自分の常識ではなく本文の助動詞に従う。must（義務）／should（〜すべき）／can（できる）／may（〜してもよい）の4つは、内容一致問題で必ず区別すること。',
      },
    ],
  },

  // ───────────── 2. 主語と動詞を見つける（s340〜s344） ─────────────
  {
    id: 'koko_eigo_s340',
    subject: 'eigo',
    examType: 'koko',
    title: '主語と動詞①：文の骨組み（S と V）をまず探す',
    description: 'どんなに長い英文でも、まず主語と動詞を一組見つけて骨組みをつかむ手順を身につける',
    intro: '長い英文を前にすると、単語の数に圧倒されて何が書いてあるかわからなくなります。でも英文は必ず「だれが・どうする」の一組が骨で、あとはすべて肉付けです。骨さえ見つければ、残りは後から足せばよい。まず S と V を探す、この一手で長文は急にやさしくなります。',
    order: 840,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'どんな長文でも、1文の骨組みは「S（主語）＋V（動詞）」の一組。',
      '主語は文の先頭近くにある名詞、動詞はその直後に来る「変化する形の語」（現在形・過去形）。',
      '前置詞の後ろの名詞（in the class の class）は主語になれない。',
      'to 不定詞・-ing・過去分詞は、単独では文の動詞（V）になれない。',
      '主語と動詞の間に長い説明が入ることが多い。間を( )でくくって飛ばす。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `各文の主語に○、動詞に□を付けるつもりで読む。

Mr. Green teaches science at our school. He came to Japan from Australia eight years ago. At first, he could not speak Japanese well, so he used many pictures in his classes. His students liked them, and they began to draw pictures in their notebooks too.

Mr. Green has a special rule. In his class, students must ask at least one question every week. Some students thought that this rule was difficult, but Mr. Green said, "A question is the first step of science."

One day, a quiet girl in the back row raised her hand. She asked why the sky is blue. Mr. Green smiled and said that it was a very good question. He did not answer it at once. Instead, he gave the class a week to find the answer.

The next week, six students brought different answers. Some of them were wrong, but Mr. Green wrote all of them on the blackboard. Then the class talked about which answer was the best. The girl who asked the first question now wants to study physics at university.`,
      },
      {
        heading: '主語と動詞の見つけ方',
        body: `■ 主語（S）の見つけ方
文の先頭から見て、前置詞の付いていない最初の名詞（または代名詞）が主語である。
例）Mr. Green teaches science 〜 → S＝Mr. Green、V＝teaches
例）In his class, students must ask 〜 → In his class は前置詞句なので主語ではない。S＝students、V＝must ask

■ 動詞（V）の見つけ方
主語のすぐ後ろにあり、時制によって形が変わる語を探す。teaches / came / used / liked / has / thought / said / raised など。

■ V になれない形
・to speak（to 不定詞）
・speaking（-ing 形。be 動詞とセットのときだけ V の一部）
・spoken（過去分詞。have / be とセットのときだけ V の一部）
例）he began to draw pictures → V は began。to draw は V ではない。

■ 主語が長い場合
The girl who asked the first question now wants to study physics at university.
S＝The girl（who asked the first question は The girl の説明なので( )でくくる）、V＝wants。
「その女の子は（最初の質問をした）今は物理を勉強したいと思っている」

★ ポイント：主語と動詞が離れているときこそ、間をくくって飛ばす。飛ばした部分は後で戻って読めばよい。

⚠ 注意：a quiet girl in the back row raised her hand の主語は a quiet girl であって the back row ではない。in の後ろの名詞は主語になれない。この原則だけで主語のミスの大半は防げる。`,
      },
      {
        heading: '動詞が二つ以上ある文をどう扱うか',
        body: `1文の中に動詞のように見える語が二つ以上あるときは、次のどれかである。

■ ①and / but で二つの文がつながっている
His students liked them, and they began to draw pictures 〜
S1＝His students、V1＝liked／S2＝they、V2＝began。and の前後で切って別々に読む。

■ ②that 節の中の動詞
Some students thought that this rule was difficult.
主節は S＝Some students、V＝thought。that 以下は thought の中身で、その中に S＝this rule、V＝was がある。「入れ子」になっている。

■ ③間接疑問
She asked why the sky is blue.
主節は S＝She、V＝asked。why 以下は「なぜ空は青いのか」という疑問文の内容が名詞のかたまりになったもので、語順が〈疑問詞＋主語＋動詞〉になる（why is the sky ではない）。

■ ④関係代名詞の中の動詞
The girl who asked the first question 〜 wants 〜
who asked 〜 は The girl の説明で、文全体の V は wants である。

例）Then the class talked about which answer was the best.
　　S＝the class、V＝talked。about の後ろは which answer was the best という間接疑問のかたまり。

★ ポイント：動詞が複数見えたら、「どれが文全体の V か」を1つだけ決める。残りは必ず何かの中に入っている。

⚠ 注意：入試の下線部和訳では、文全体の V を取りちがえると全部が崩れる。逆に S と V さえ合っていれば、細かい修飾語がずれても部分点は残る。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "One day, a quiet girl in the back row raised her hand." の主語はどれか。',
        wrongAnswer: 'the back row',
        trapExplanation: '動詞 raised のすぐ前にある名詞を主語だと思ってしまう。しかし the back row は前置詞 in の後ろにある名詞なので、主語にはなれない。',
        correctAnswer: 'a quiet girl',
        correctExplanation:
          '主語は文の先頭から見て最初の「前置詞が付いていない名詞」である。One day は時を表す副詞句、in the back row は a quiet girl を説明する前置詞句。骨組みは a quiet girl raised her hand（一人の無口な女の子が手をあげた）。動詞の直前の名詞が主語とは限らないことを覚えておく。',
      },
      {
        question: '本文の "She asked why the sky is blue." を英語で正しく書き直したものはどれか。ア She asked why is the sky blue.　イ She asked why the sky is blue.',
        wrongAnswer: 'ア',
        trapExplanation: '疑問詞のあとは疑問文の語順（is the sky）になると思いこんでしまう。しかし文の中に埋めこまれた疑問文（間接疑問）は〈疑問詞＋主語＋動詞〉の平叙文の語順になる。',
        correctAnswer: 'イ',
        correctExplanation:
          '間接疑問は名詞のかたまりとして文の一部になるため、語順は〈疑問詞＋S＋V〉。Do you know where he lives?（× where does he live）も同じ。読解では逆に、why や where のあとがふつうの語順で並んでいたら「これは疑問文ではなく、文の一部（目的語）だ」と判断する手がかりになる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s341',
    subject: 'eigo',
    examType: 'koko',
    title: '主語と動詞②：長い主語を後ろの説明ごとくくる',
    description: '関係代名詞や前置詞句で長くなった主語を一つのかたまりとして扱い、動詞を見失わない',
    intro: '「駅の近くにあった古い本屋が先月閉店した」という文で、主語は「本屋」です。英語も同じで、主語の後ろに説明がぶら下がると主語だけが長くなります。どこまでが主語かを見きわめられれば、20語を超える文でも「だれが／どうした」の一言に縮められます。',
    order: 841,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '主語の後ろに who / which / that が来たら、そこから次の動詞までが主語の説明。',
      '説明のかたまりが終わったところに、文全体の動詞が現れる。',
      '関係代名詞が省略されることがある（The thing I remember best is 〜）。名詞＋〈S＋V〉が続いたら省略を疑う。',
      '主語が単数か複数かは、説明を取り除いた「本体の名詞」で決まる。',
      '長い主語は「〜するもの・〜する人」と、まとめて日本語一語にしてしまうと読みやすい。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `The old bookshop near the station closed last month. The man who ran it for forty years was ninety years old, and he decided to stop working. Many people in our town were sad about the news.

The books that he sold were not new. Most of them came from houses in the town. When a family moved away, they often brought their old books to him. The shop was small and dark, but the smell of paper in it made me calm.

The thing I remember best is his memory. A customer who came only once a year could ask, "Do you have that book about birds?" and he would go straight to the right shelf. He never used a computer.

Last week, a young woman who used to visit the shop as a child opened a small cafe in the same building. On the wall, she put a photo of the old man. Under the photo, she wrote one sentence: "The books have gone, but the stories are still here."`,
      },
      {
        heading: '主語のかたまりを( )でくくる',
        body: `■ 例1：The man (who ran it for forty years) was ninety years old.
S＝The man、V＝was。( )の中は「それを40年間営んでいた」という説明。日本語では「40年間その店をやっていた男性は90歳だった」となり、説明が主語の前に来る。英語は後ろ、日本語は前、という語順の差を意識する。

■ 例2：The books (that he sold) were not new.
S＝The books（複数）、V＝were。( )内の he sold につられて was と書くと誤り。動詞の形は「本体の名詞」に合わせる。

■ 例3：The thing (I remember best) is his memory.
The thing の後ろにいきなり I remember と〈S＋V〉が続いている。これは関係代名詞 that（または which）が省略された形。「名詞＋S＋V」と並んだら省略を疑う。

■ 例4：a young woman (who used to visit the shop as a child) opened a small cafe
S＝a young woman、V＝opened。( )が9語もあるので、opened を見失いやすい。

例）The old bookshop (near the station) closed last month.
　　前置詞句も主語を長くする。S＝The old bookshop、V＝closed。

★ ポイント：( )の中には必ず動詞がある。しかしそれは文全体の V ではない。( )が閉じた直後に本物の V が現れる。

⚠ 注意：the smell of paper in it made me calm の主語は the smell（においが）であって paper ではない。of / in の後ろの名詞は主語になれない。`,
      },
      {
        heading: '長い主語を一語にまとめて読む',
        body: `読解では、長い主語を細かく訳す必要はない。かたまりごと「その人」「そのこと」とまとめて先へ進むほうが速い。

例）The man who ran it for forty years was ninety years old.
　　→ ざっくり「その店の人は90歳だった」

例）A customer who came only once a year could ask, "Do you have that book about birds?"
　　→ ざっくり「年1回しか来ない客でも、こう聞ける」

■ 主語が長い文は「筆者が強調したい主語」であることが多い
説明を付けてまで特定しているのだから、その主語は話の中で重要である。The thing I remember best is his memory.（いちばん覚えているのは彼の記憶力だ）は、まさにこの段落の主題文になっている。

■ 単数・複数の判定
The books that he sold were not new.
→ 本体は The books（複数）→ were
The man who ran it for forty years was 〜
→ 本体は The man（単数）→ was
英作文でも並べかえ問題でも問われるので、必ず本体の名詞を見る。

■ 練習の仕方
長い文に出会ったら、①( )でくくる ②残った S と V だけを声に出す ③( )の中身を戻す、の順で読む。慣れると①〜③が同時にできるようになる。

★ ポイント：長文で時間が足りない人は、長い主語のたびに立ち止まっている。「本体＋説明」と割り切るだけで速度が上がる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "The books that he sold were not new." の主語と動詞の組み合わせとして正しいのはどれか。ア 主語 he・動詞 sold　イ 主語 The books・動詞 were',
        wrongAnswer: 'ア',
        trapExplanation: 'that he sold の部分が〈S＋V〉の形になっているため、そちらを文の骨組みだと思ってしまう。関係代名詞の中の S と V を、文全体の S と V と取りちがえる典型例。',
        correctAnswer: 'イ',
        correctExplanation:
          'that he sold は The books を説明する関係代名詞のかたまりで、that は sold の目的語にあたる（彼が売っていた本）。文全体の骨組みは The books were not new（その本は新しくなかった）。関係代名詞のかたまりが閉じた直後に現れる were が本物の動詞である。',
      },
      {
        question: '空所に入る動詞として正しいのはどちらか。The books that he ( sold / sells ) 〜 の話とは別に、次の文を完成させよ。The students who study in this room ( is / are ) very quiet.',
        wrongAnswer: 'is',
        trapExplanation: '動詞の直前にある room（単数）に引かれて is を選んでしまう。主語の本体ではなく、いちばん近い名詞に合わせてしまう誤り。',
        correctAnswer: 'are',
        correctExplanation:
          '主語の本体は The students（複数）で、who study in this room はその説明にすぎない。動詞の数は必ず本体の名詞に合わせる。同じ理由で The box of old books is heavy.（本体は The box なので is）となる。読解でも、この一致を利用して「どこまでが主語か」を逆算できる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s342',
    subject: 'eigo',
    examType: 'koko',
    title: '主語と動詞③：修飾語（前置詞句・分詞）を切り離す',
    description: '文のあちこちに入りこむ前置詞句や分詞のかたまりを外し、骨組みだけを取り出す',
    intro: '料理の写真から皿と飾りを取り除くと、何の料理かがはっきりします。英文も、前置詞句や -ing・-ed のかたまりを外すと、驚くほど短い骨だけが残ります。飾りは後で戻せばよいので、まず外す。この作業に慣れると、1行に収まらない文もこわくなくなります。',
    order: 842,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '前置詞句（in / on / at / for / with / under / along ＋名詞）は骨組みではない。外して読む。',
      'カンマではさまれた部分は、たいてい直前の名詞の説明。外しても文が成り立つ。',
      '名詞の直後の -ing は「〜している…」、-ed（過去分詞）は「〜された…」と後ろから名詞を説明する。',
      '外したあとに残る〈S＋V〉が、その文で筆者が言いたい中心である。',
      'グラフを説明する英文では、数値は必ず前置詞句の中に入る（in April / with 33 degrees）。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `For one year, the students in the science club at our school measured the temperature of the schoolyard. They took the temperature at noon on the fifteenth day of every month. The graph shows the average temperature in five of those months.

In April, the temperature at noon was 15 degrees. It rose to 22 degrees in June. The hottest month was August, with 33 degrees. In October it fell to 20 degrees, and in December it was only 8 degrees.

The students also measured the temperature under the large tree in the corner of the schoolyard. On the hottest day in August, the ground under the tree was five degrees cooler than the open ground.

After the study, the club wrote a report for the school newspaper. In the report, they asked the school to plant more trees along the west side of the building. The principal read the report and agreed. Ten young trees, given by a local company, were planted in March.`,
        figureId: 'lf_kokoeigoext10_342',
      },
      {
        heading: '飾りを外すと骨が見える',
        body: `■ 第1文を分解する
For one year, / the students / in the science club / at our school / measured / the temperature / of the schoolyard.
外す部分：For one year（副詞句）／in the science club（students の説明）／at our school（club の説明）／of the schoolyard（temperature の説明）
残る骨：The students measured the temperature.（生徒たちが気温をはかった）
20語の文が5語になる。長文ではこのレベルの理解で十分先へ進める。

■ 第2文
They took the temperature / at noon / on the fifteenth day / of every month.
骨：They took the temperature.（正午に、毎月15日に、という条件は前置詞句の中）

■ カンマではさまれた説明
Ten young trees, given by a local company, were planted in March.
given by a local company（地元の会社から寄贈された）は Ten young trees の説明。外すと Ten young trees were planted in March. となり、文として成立する。分詞のかたまりを外しても文が壊れないことが、それが飾りである証拠になる。

★ ポイント：外して文が壊れなければ飾り、壊れたら骨。この判定法は関係代名詞でも分詞でも使える。

⚠ 注意：the ground under the tree was five degrees cooler than the open ground の主語は the ground（地面）。under the tree を外すと the ground was cooler となり、どの地面かを見失うので、設問に関わるときは飾りも必ず戻して確認する。外すのは「速く読むための一時的な作業」である。`,
      },
      {
        heading: 'グラフと英文を突き合わせる',
        body: `この英文の数値は、そのままグラフになっている。数値はすべて前置詞句や with のかたまりに入っている点に注目する。

■ 英文の数値
In April 〜 was 15 degrees ／ rose to 22 degrees in June ／ The hottest month was August, with 33 degrees ／ In October it fell to 20 degrees ／ in December it was only 8 degrees

■ グラフとの対応
4月＝15℃、6月＝22℃、8月＝33℃、10月＝20℃、12月＝8℃。折れ線は4月から8月まで上がり、8月を頂点として12月まで下がる。この「上がって下がる」形は rose to（上がった）／fell to（下がった）という動詞に対応している。

■ 変化を表す動詞をまとめて覚える
上がる：rise（rose - risen）／go up／increase
下がる：fall（fell - fallen）／go down／decrease
横ばい：stay the same／do not change
急に：sharply／rapidly　ゆるやかに：slowly／gradually

■ 木かげの数値に注意
On the hottest day in August, the ground under the tree was five degrees cooler than the open ground. 33－5＝28℃である。この28という数字は本文にもグラフにも直接は書かれていない。計算して求める必要がある。図表つき読解では、こうした「引き算・足し算で出す数値」がよく問われる。

★ ポイント：グラフの縦軸の単位（ここは℃）を必ず確認してから読む。単位を見落とすと、数字は合っているのに答えが合わないという事態になる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、8月に大きな木の下の地面は約何度だったと考えられるか。',
        wrongAnswer: '5℃',
        trapExplanation: 'five degrees cooler の five だけを拾って、それが気温そのものだと思ってしまう。cooler than 〜 が「〜より…だけ低い」という差を表していることを見落としている。',
        correctAnswer: '約28℃',
        correctExplanation:
          'was five degrees cooler than the open ground は「開けた場所より5度低かった」という差の表現。8月の気温はグラフでも本文でも33℃なので、33－5＝28℃となる。〈数値＋比較級＋than〉は差を表す形（three years older than me なら3歳年上）で、その数値自体が答えになることはない。',
      },
      {
        question: '本文の "Ten young trees, given by a local company, were planted in March." の主語はどれか。',
        wrongAnswer: 'a local company',
        trapExplanation: 'given by a local company の by の後ろにある行為者を主語だと思ってしまう。受け身の by 〜 は「〜によって」であって文の主語ではない。',
        correctAnswer: 'Ten young trees',
        correctExplanation:
          'given by a local company はカンマではさまれた分詞のかたまりで、直前の Ten young trees を説明している（地元の会社から寄贈された10本の若木）。外すと Ten young trees were planted in March. となり文が成立するので、これが骨組みである。カンマではさまれた部分を外して文が成り立つかどうかで、飾りか骨かを判定できる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s343',
    subject: 'eigo',
    examType: 'koko',
    title: '主語と動詞④：接続詞・関係詞でつながった複文をほどく',
    description: 'when / because / although / that などで結ばれた二つ以上の文を、主節と従属節に分けて読む',
    intro: '長い文が読めないのは、単語が難しいからではなく、文が二つ以上つながっているからです。「〜のとき」「〜なので」「〜だけれども」の部分をいったん外すと、本当に言いたい一文が残ります。どちらが主で、どちらが従かを見分けられれば、20語の文も一息で読めます。',
    order: 843,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '接続詞（when / because / if / although / while）で始まるかたまりは従属節。主節ではない。',
      '従属節が文頭に来るときはカンマで区切られる。カンマの後ろが主節。',
      'that 節は「〜ということ」という名詞のかたまりで、動詞の目的語になる。',
      'although / though は「〜だけれども」。この語があったら、後ろに予想外の内容が来る。',
      '筆者の主張は従属節ではなく主節に書かれる。設問の答えも主節にあることが多い。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `When my brother was in the third year of junior high school, he broke his leg in a soccer game. Because he could not walk for two months, he had to stay at home after school. Although he was usually a cheerful person, he became very quiet during that time.

One evening, a boy who lived next door brought him a box. Inside it there were about two hundred paper cranes. The boy said that the students in my brother's class had made them. My brother did not say anything, but I saw that his eyes were wet.

After he got well, my brother joined the volunteer club at his school. He said that he wanted to do something for other people, because so many people had done something for him.

Now he is a university student, and every Sunday he visits a hospital and reads books to children who cannot leave their beds. He often tells me that the paper cranes changed his life more than the doctors did.`,
      },
      {
        heading: '主節と従属節を分ける',
        body: `■ 見分け方
接続詞（when / because / if / although / while / after / before / since）で始まるかたまりが従属節。それ以外の〈S＋V〉が主節である。

例）When my brother was in the third year of junior high school, / he broke his leg in a soccer game.
従属節：いつの話か（中3のとき）　主節：足を折った ← こちらが中心

例）Because he could not walk for two months, / he had to stay at home after school.
従属節：理由　主節：家にいなければならなかった ← こちらが中心

例）Although he was usually a cheerful person, / he became very quiet during that time.
従属節：ふだんは明るい　主節：とても静かになった ← こちらが中心

■ although があったら「逆」が来る
although / though / even though は「〜だけれども」。前半と後半が食いちがう。ここでは「ふだんは明るい ↔ とても静かになった」。この落差が、この段落で筆者が伝えたいことである。

★ ポイント：内容一致問題で「筆者が言いたいこと」を選ぶときは、必ず主節を見る。従属節は条件・理由・時などの付け足しである。

⚠ 注意：Because 〜 が文頭に来ても、意味は「〜なので」で変わらない。日本語では「〜なので」が前に来るのがふつうなので、むしろ読みやすい形である。文中に来た場合（He had to stay at home because he could not walk.）も意味は同じ。`,
      },
      {
        heading: 'that 節と入れ子構造',
        body: `■ that 節は「〜ということ」
The boy said that the students in my brother's class had made them.
主節：The boy said（男の子は言った）　that 以下：その中身（兄のクラスの生徒たちがそれらを作ったということ）
この文には〈S＋V〉が二組ある。said の主語は The boy、had made の主語は the students である。

■ 時制のずれ（過去完了）
had made は「言った時点よりさらに前に作られていた」ことを表す。物語文では、この過去完了が「回想」の合図になる。
同じく so many people had done something for him も、ボランティア部に入った時点より前の出来事である。

■ 三重の入れ子
He said that he wanted to do something for other people, because so many people had done something for him.
①He said（主節）②that he wanted 〜（said の中身）③because 〜（wanted の理由）
このように三段になっても、外側から順にほどけばよい。

例）He often tells me that the paper cranes changed his life more than the doctors did.
　　主節：He often tells me　中身：折り鶴が医者以上に彼の人生を変えた
　　文末の did は changed his life の繰り返しを避けた代動詞である。

★ ポイント：that の後ろは必ず〈S＋V〉が続く。逆にいえば、that の直後に名詞と動詞が並んでいたら「これは接続詞の that だ」と判断できる。

⚠ 注意：saw that his eyes were wet の wet は「ぬれている」。泣いていたということを直接書かずに表す言い方で、物語文ではこうした間接表現が心情問題として問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "Although he was usually a cheerful person, he became very quiet during that time." の内容に合うのはどちらか。ア 兄はふだんから静かな性格だった　イ 兄はふだんは明るいが、その時期は静かになった',
        wrongAnswer: 'ア',
        trapExplanation: 'Although を because のような理由の接続詞と取り違え、「明るい性格だったので静かになった」あるいは「もともと静かだった」と読んでしまう。逆接の合図を見落とすと、前半と後半の関係が逆になる。',
        correctAnswer: 'イ',
        correctExplanation:
          'Although は「〜だけれども」という逆接。前半（ふだんは明るい人）と後半（その時期はとても静かになった）が食いちがっていることを示す。usually（ふだんは）と during that time（その期間は）という時を表す語も、通常と例外の対比を裏づけている。although / though / even though を見たら、必ず前後で内容が反転すると考える。',
      },
      {
        question: '本文の "The boy said that the students in my brother\'s class had made them." で、折り鶴を作ったのはだれか。',
        wrongAnswer: 'となりに住む男の子（The boy）',
        trapExplanation: '主節の主語 The boy が目立つため、that 節の中の主語まで The boy だと思ってしまう。that 節の中には別の〈S＋V〉があることを見落としている。',
        correctAnswer: '兄のクラスの生徒たち（the students in my brother\'s class）',
        correctExplanation:
          'said の主語は The boy だが、that 節の中の主語は the students in my brother\'s class で、had made の主語はこちらである。男の子は届けた人であって作った人ではない。that 節が出てきたら、節の中の主語と動詞をもう一組さがすこと。had made という過去完了は、届けた時点より前に作られていたことを示している。',
      },
    ],
  },

  {
    id: 'koko_eigo_s344',
    subject: 'eigo',
    examType: 'koko',
    title: '主語と動詞⑤：There is 構文と形式主語 it',
    description: '主語が後ろに置かれる There 構文と、it が本当の主語の代わりをする形を正確に読む',
    intro: '「箱の中にネコが3匹いる」を英語では There are three cats in the box. と言います。文の先頭の There は「そこに」ではなく、ただの合図です。主語が後ろにある文、主語が形だけの it である文。この二つを知らないと、長文で主語をずっと取りちがえたまま読むことになります。',
    order: 844,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'There is / There are の本当の主語は be 動詞の後ろの名詞。単複はその名詞で決まる。',
      'There 構文の There は「そこに」と訳さない。場所は文末の前置詞句で表す。',
      'It is 〜 to do／It is 〜 that 〜 の it は形式主語。本当の主語は to 以下・that 以下。',
      'It takes 〈人〉〈時間〉to do 〜＝「〈人〉が〜するのに〈時間〉かかる」。',
      '天候・時刻・距離の it は何も指さない（It is cold today.）。指示内容を答えさせる問題では注意。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `There are 200 students in our school, and in June we asked all of them how they come to school. The result was interesting.

The largest group was the students who walk. There were 90 of them. Sixty students come by bicycle, and forty students take the bus. Only ten students come by train, because our school is far from the station.

It is not easy for the students who come by bus. There is only one bus every thirty minutes in the morning. If they miss it, they are late for the first class. Last winter, when a heavy snow stopped the buses, those forty students could not come to school at all.

For this reason, the students who take the bus asked the city for one more bus. It took them six months to collect enough signatures. In April, the city answered. There will be a new bus at 7:40 from this September, and the students are waiting for it.`,
        figureId: 'lf_kokoeigoext10_344',
      },
      {
        heading: 'There 構文の読み方',
        body: `■ 主語は be 動詞の後ろ
There are 200 students in our school. → 主語は 200 students、be 動詞は are。
There is only one bus every thirty minutes. → 主語は only one bus、be 動詞は is。
主語が単数なら is / was、複数なら are / were を使う。ここが並べかえ問題で最も問われる点である。

■ There を「そこに」と訳さない
There are 200 students in our school. は「そこに200人の生徒がいる」ではなく「私たちの学校には200人の生徒がいる」。場所は文末の in our school が表している。

■ 時制と助動詞も付く
There were 90 of them.（過去）／There will be a new bus 〜（未来）／There may be a problem.（推量）
be 動詞の部分が変化するだけで、構造は同じである。

■ 「新しい情報」を出す合図
英語では、初めて話に出すものを There is 〜 で紹介し、二度目からは the を付けて主語にする。本文でも There will be a new bus 〜 の後、the students are waiting for it と it で受けている。

★ ポイント：長文で There is / are が出たら、「ここから新しいものの話が始まる」と考えるとよい。

⚠ 注意：There are 90 of them. の them は the students who walk を指す。数字＋of＋代名詞は「そのうちの〜人」。ここでは歩いて通学する生徒が90人という意味になる。`,
      },
      {
        heading: '形式主語 it と、it takes 〜',
        body: `■ It is 〜 for 人 to do
It is not easy for the students who come by bus.
この it は「それ」ではなく、後ろの内容を先に示すための形式主語である。本来はここに to 以下が入るが、この文では前後の文脈から「バス通学すること」が省略されている。完全な形なら It is not easy for the students to come by bus. となる。

■ It takes 〈人〉〈時間〉to do
It took them six months to collect enough signatures.
「彼らが十分な署名を集めるのに6か月かかった」。この it も何も指さない。時間の長さを表す決まった形である。
例）It takes me twenty minutes to walk to the station.（駅まで歩いて20分かかる）

■ 指示内容を問われる it との区別
① 前に出た名詞を指す it：If they miss it, they are late.（it＝the bus）
② 形式主語の it：It is not easy for 〜（何も指さない）
③ 天候・時刻・距離の it：It is cold today.（何も指さない）
下線部の it の内容を答えよという問題では、まず①〜③のどれかを判定する。②③なら「特定のものを指していない」が答えになる。

例）the students are waiting for it の it は a new bus を指す（①の型）。

★ ポイント：it の直後に is＋形容詞＋to do／that 〜 と続いていたら、ほぼ形式主語である。

⚠ 注意：It is not easy for the students who come by bus. の for 〜 は「〜にとって」。to 不定詞の意味上の主語を表す。「〜のために」と訳すと意味がずれる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、自転車で通学する生徒の人数として正しいのはどれか。ア 40人　イ 60人　ウ 90人',
        wrongAnswer: 'ア',
        trapExplanation: 'Sixty students come by bicycle, and forty students take the bus. の二つの数字を、語順の印象だけで結びつけてしまう。数字の直後にある動詞と手段（come by bicycle / take the bus）を確認していない。',
        correctAnswer: 'イ',
        correctExplanation:
          'Sixty students come by bicycle が自転車、forty students take the bus がバスである。英文の数字は必ずその直後の語句とセットで読むこと。合計も検算になる：90（徒歩）＋60（自転車）＋40（バス）＋10（電車）＝200で、第1段落の There are 200 students in our school と一致する。合計が合えば読みちがえていないと確認できる。',
      },
      {
        question: '本文の "It took them six months to collect enough signatures." の It は何を指すか。',
        wrongAnswer: '新しいバス（a new bus）',
        trapExplanation: 'it を見ると必ず前の名詞を探す習慣があるため、近くにある名詞を無理にあてはめてしまう。形式主語の it が何も指さない場合があることを知らない。',
        correctAnswer: '何も指さない（It takes 〜 to do の形式主語）',
        correctExplanation:
          'It takes 〈人〉〈時間〉to do 〜 は「〈人〉が〜するのに〈時間〉かかる」を表す決まった形で、この it は形式主語であり特定のものを指さない。本当の主語は to collect enough signatures（十分な署名を集めること）である。it の指示内容を問われたら、まず〈It is ... to do〉〈It takes ... to do〉〈天候・時刻の it〉でないかを確認する。',
      },
    ],
  },
  // ───────────── 3. 代名詞の指示内容（s345〜s348） ─────────────
  {
    id: 'koko_eigo_s345',
    subject: 'eigo',
    examType: 'koko',
    title: '代名詞①：it / they が何を指すかを決める',
    description: '前に出た名詞のうち、数と意味が合うものを選んで代名詞の指示内容を確定させる',
    intro: '友だちとの会話で「あれ、どうなった？」と言われて話が通じるのは、直前の話題を二人とも覚えているからです。英語の it や they も同じで、直前に出たものを指します。ところが長文では名詞がいくつも並ぶため、どれを指すかで意味が正反対になることがあります。決め方には手順があります。',
    order: 845,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '代名詞は原則として「直前に出た名詞」を指す。遠くの名詞を探しに行かない。',
      '数を合わせる：it は単数、they / them は複数。ここで候補は半分に減る。',
      '代名詞の位置に候補の名詞を入れ直し、文が成り立つかを必ず確かめる。',
      '主語の it と目的語の it が同じ文にあるときは、別のものを指すことがある。',
      'them は「人」だけでなく「もの」も指す。人だと決めつけない。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `下線を引くつもりで、it・they・them・to them に印を付けながら読む。

Sea turtles have lived on the earth for more than one hundred million years. Today, however, six of the seven kinds are in danger. One reason is plastic. A plastic bag floating in the sea looks like a jellyfish, and a turtle eats it by mistake.

Another reason is light. Baby turtles come out of their eggs on a beach at night. They must walk to the sea, and they find it by the light of the moon on the water. If there are bright lights near the beach, the babies walk toward them instead. Many of them die before they reach the sea.

In one town in Florida, people decided to turn off the lights near the beach in summer. They also used special lamps that do not shine toward the sea. After three years, the number of baby turtles that reached the sea became twice as large.

Small changes can save an animal. We do not always have to build something new. Sometimes we only have to turn something off.`,
      },
      {
        heading: '3つの手順で指示内容を決める',
        body: `■ 手順①：数を合わせる
it → 単数の名詞　they / them → 複数の名詞
a turtle eats it by mistake の it は単数なので、候補は a plastic bag か a jellyfish。

■ 手順②：意味が通るほうを選ぶ
「カメがクラゲを食べる」も一見成り立つが、この段落の話題は plastic（プラスチック）である。One reason is plastic. と始まっているので、問題になっているのはレジ袋を食べてしまうことである。よって it＝a plastic bag。

■ 手順③：入れ直して確かめる
a turtle eats a plastic bag by mistake（カメがレジ袋をまちがえて食べる）→ 意味が通る。by mistake（まちがえて）という語も、クラゲと見まちがえたという流れに合う。

■ 同じ文の中で別のものを指す例
They must walk to the sea, and they find it by the light of the moon.
They＝Baby turtles（複数）、it＝the sea（単数）。同じ文に they と it があるが、数が違うので取りちがえない。

例）the babies walk toward them instead → them は複数。直前の bright lights を指す。「代わりに明かりのほうへ歩いてしまう」。

★ ポイント：迷ったら「数 → 意味 → 入れ直し」の順。この3手順を飛ばして直感で選ぶと、選択肢問題で必ず落とし穴にはまる。

⚠ 注意：Many of them die before they reach the sea. の them は Baby turtles を指す。直前の bright lights ではない。「明かりの多くが死ぬ」では意味が通らないので、入れ直しの検算で気づける。`,
      },
      {
        heading: '記述問題での答え方',
        body: `「下線部 it の内容を日本語で答えなさい」という問題は、公立入試でも私立入試でも定番である。

■ 答え方のきまり
①名詞のかたまりで答える（「〜こと」「〜もの」で終わる形）。
②本文の語をそのまま日本語に直す。自分の言葉で言いかえすぎない。
③修飾語も落とさない。単に「袋」ではなく「海に浮かんでいるレジ袋」と書く。

例）a turtle eats it by mistake の it
　　答え：海に浮かんでいるレジ袋（クラゲに似て見えるプラスチックの袋）

例）they find it by the light of the moon の it
　　答え：海

■ 字数制限がある場合
「10字以内」なら「海に浮かぶレジ袋」（8字）のように、中心の名詞を残して修飾語を削る。中心の名詞（袋）を削ってはいけない。

■ 前の段落までさかのぼる場合
代名詞は原則として直前を指すが、段落の1文目に出てくる they などは、前の段落の主語を受けることがある。第3段落の They also used special lamps 〜 の They は、直前の people（フロリダの町の人々）である。

★ ポイント：入れ直して意味が通るかどうかが最終判定。文法的に可能でも意味が通らなければ誤り。

⚠ 注意：the number of baby turtles that reached the sea became twice as large は「海にたどり着いた子ガメの数が2倍になった」。twice as large は「2倍」であって「2つ」ではない。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "A plastic bag floating in the sea looks like a jellyfish, and a turtle eats it by mistake." の it が指すものはどちらか。ア クラゲ　イ 海に浮かんでいるレジ袋',
        wrongAnswer: 'ア',
        trapExplanation: 'it の直前にある名詞が a jellyfish なので、いちばん近い名詞を機械的に選んでしまう。しかし「カメがクラゲをまちがえて食べる」では by mistake（まちがえて）が意味をなさない。',
        correctAnswer: 'イ',
        correctExplanation:
          'この段落の話題は One reason is plastic.（原因のひとつはプラスチック）である。レジ袋がクラゲのように見えるため、カメがまちがえて袋のほうを食べてしまう、という流れ。代名詞は「いちばん近い名詞」ではなく「入れ直して意味が通る名詞」を選ぶ。by mistake が決め手になる。',
      },
      {
        question: '本文の "Many of them die before they reach the sea." の them が指すものはどちらか。ア 浜辺の近くの明るい光　イ 子ガメたち',
        wrongAnswer: 'ア',
        trapExplanation: '直前の文に bright lights と them があり、同じ them だから同じものを指すはずだと考えてしまう。同じ語形でも指す先が変わることがある点を見落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'them に bright lights を入れると「多くの明かりが海にたどり着く前に死ぬ」となり、意味が通らない。子ガメを入れると「多くの子ガメが海にたどり着く前に死んでしまう」となり、前文（明かりのほうへ歩いてしまう）の結果として自然につながる。代名詞は文ごとに入れ直して検算すること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s346',
    subject: 'eigo',
    examType: 'koko',
    title: '代名詞②：this / that が文全体を指すとき',
    description: '名詞ではなく前の文の内容全体を受ける this / that / so を見分け、まとめて答える',
    intro: '「それはいい考えだね」の「それ」は、直前の一語ではなく、相手が話したこと全体を指しています。英語の this や that も同じ働きをします。名詞を探しても見つからないとき、指しているのは「文全体」です。これに気づくと、記述問題の書き方が一気に決まります。',
    order: 846,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'this / that は前の文（または数文）の内容全体を指すことがある。名詞1語とは限らない。',
      '該当する名詞が見つからないときは、内容全体を指していると考える。',
      '答えるときは「〜（する）こと」という形の日本語でまとめる。',
      'do so / do that は前に出た動作をまるごと受ける（＝繰り返しを避ける言い方）。',
      'this は近い内容・直前の内容、that はやや離れた内容を指す傾向がある。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Last year, our class had a problem. Some students left their lunch on their plates every day. The teachers told us not to do that, but nothing changed. Then our class decided to try something new.

For two weeks, we wrote down the weight of the food we left. On the first day, it was 3.2 kilograms. We put the number on the wall of the classroom, and everyone could see it.

This was a simple idea, but it worked. On the fifth day, the weight was 1.8 kilograms. On the last day, it was only 0.6 kilograms. Nobody told us to eat more. We just saw the number and thought about it.

Our teacher said that this experience taught us something important. When we cannot see a problem, we cannot solve it. That is true not only about food but also about electricity, water, and time. Since then, our class has kept a record of the electricity we use in our classroom.`,
      },
      {
        heading: '内容を指す this / that の見つけ方',
        body: `■ 名詞を探しても見つからないとき
This was a simple idea, but it worked.
this にあたる名詞は直前にない。指しているのは「2週間、残した食べ物の重さを記録し、その数字を教室の壁に貼り出したこと」という前段落の内容全体である。「これは単純な考えだったが、うまくいった」となる。

■ do that / do so
The teachers told us not to do that, but nothing changed.
that＝leave their lunch on their plates（給食を皿に残すこと）。do that で「そうすること」。動作全体を受けている。

■ that が離れた内容を受ける例
That is true not only about food but also about electricity, water, and time.
that＝直前の文 When we cannot see a problem, we cannot solve it.（問題が見えないと解決できないということ）。

■ this experience のように名詞を伴う形
this experience は「この経験」で、this が experience という名詞を修飾している。この場合、どの経験かを本文から特定して答える。ここでは「残飯の重さを記録して見えるようにしたら、残飯が減ったという経験」。

★ ポイント：this / that の後ろに名詞が続くか（this idea）、単独で主語になっているか（This was 〜）をまず見る。単独なら内容を指している可能性が高い。

⚠ 注意：it が内容を指すこともある。We just saw the number and thought about it. の it は the number（数字）だが、直後の it worked の it は「その考え」を指す。同じ it でも指す先が違うので、1文ごとに確認する。`,
      },
      {
        heading: '記述で「〜こと」とまとめる練習',
        body: `内容を指す指示語の記述問題は、答えの形が決まっている。「〜（する）こと」で終える。

例）下線部 This was a simple idea の This の内容を日本語で説明せよ。
　　答え：2週間にわたって給食の残りの重さを量って記録し、その数字を教室の壁にはり出して全員が見られるようにしたこと。

■ 書くときの手順
①指示語を含む文を読み、「何が simple idea なのか」を確認する。
②直前の1〜3文を読み、動作の中心を取り出す。
③主語・動作・目的を落とさずに一文にまとめる。
④指示語をその日本語に置きかえて読み直し、文が通るか確認する。

■ 字数の目安
「30字以内」なら中心だけを残す：残した食べ物の重さを記録して教室にはり出したこと（26字）。
「50字程度」なら条件（2週間・全員が見られる）も入れる。

■ 数値の扱い
本文の 3.2 → 1.8 → 0.6 kilograms は、指示語の説明には不要である。設問が「どのように変化したか」と聞いているときだけ使う。指示語の説明にすべての情報を詰めこむと、かえって減点される。

★ ポイント：指示語の記述は「短くまとめる力」が問われている。本文をそのまま長く訳すのは答案にならない。

⚠ 注意：解答に「これ」「それ」を残さないこと。「これを教室にはった」のように指示語を残すと、説明したことにならず0点になる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "This was a simple idea, but it worked." の This が指す内容として正しいのはどちらか。ア 給食を残す生徒がいたこと　イ 残した食べ物の重さを記録して教室にはり出したこと',
        wrongAnswer: 'ア',
        trapExplanation: '段落の最初に出てきた「問題」の内容を、そのまま指示語の中身だと思ってしまう。しかし simple idea（単純な考え）という語と結びつくのは、問題そのものではなく、そのために行った工夫である。',
        correctAnswer: 'イ',
        correctExplanation:
          '指示語の中身は、指示語を含む文にあてはめて意味が通るかで決まる。「給食を残す生徒がいたことは単純な考えだった」では意味をなさない。直前の段落に書かれた行動（2週間、残飯の重さを記録し、数字を壁にはった）が idea の中身である。指示語の直前だけでなく、その語と結びつく名詞（idea・experience・problem）が何を指すかで範囲を決める。',
      },
      {
        question: '本文の "The teachers told us not to do that" の that が指すものはどれか。',
        wrongAnswer: '先生が注意すること',
        trapExplanation: 'that を含む文の主語（The teachers）に引かれて、先生の動作を指すと考えてしまう。しかし do that は told us（私たちに言った）の内容であり、生徒の動作である。',
        correctAnswer: '給食を皿に残すこと',
        correctExplanation:
          'told 〈人〉 not to do 〜 は「〈人〉に〜しないように言う」で、do の主語は us（生徒）である。したがって that は直前の文 Some students left their lunch on their plates every day. の動作を指す。do that / do so は「その動作をする」という意味で、動作の主体は不定詞の意味上の主語（ここでは us）になる点に注意する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s347',
    subject: 'eigo',
    examType: 'koko',
    title: '代名詞③：one / another / the other / some と others',
    description: '不特定の一つを表す one、もう一つの another、残り全部の the other(s) を区別する',
    intro: '3個のケーキから1個食べたあと、残りを指して「もう一つ」と言うのか「残り全部」と言うのかで話が変わります。英語ではこの区別を one / another / the other という別々の語で表します。長文では人数や個数の設問に直結するので、意味の差をはっきりさせておきます。',
    order: 847,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'one＝不特定の一つ／it＝すでに話に出たそのもの。この二つは入れかえられない。',
      'another＝他のもう一つ（残りが2つ以上あるとき）。an＋other が語源。',
      'the other＝残っている最後の一つ。the others＝残り全部（複数）。',
      'some 〜, others 〜＝「〜な人もいれば、〜な人もいる」。全体の一部ずつを表す。',
      'the other ＋複数名詞（the other six students）は「残りの6人」。合計から逆算して確かめる。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Last month, our class of 40 students did a survey about pets. We asked one question: "What animal do you keep at home?" Students who keep no pet were asked to choose "none."

Sixteen students answered that they keep a dog. Ten students keep a cat, and six keep fish. Two students keep a bird, and the other six students keep no pet at all.

The results were not what we expected. Before the survey, many of us thought that cats were the most popular. One student said, "I see many cats in my town, so I thought there were more cat owners." Another student said that dogs are easier to see, because people walk them outside.

Some students keep more than one animal. In that case, we asked them to choose the animal they have kept the longest. This rule made the survey simple, but it also means that the real number of cats in our class is larger than ten.

We are going to do the same survey again next year with the new first-year students.`,
        figureId: 'lf_kokoeigoext10_347',
      },
      {
        heading: 'one / another / the other の使い分け',
        body: `■ one＝不特定の一つ
One student said, "I see many cats 〜"（ある生徒が言った）
だれか特定できない一人を指す。it に置きかえられない。

■ another＝他のもう一つ
Another student said that dogs are easier to see 〜（別のある生徒が言った）
まだ他にも生徒がいる中の「もう一人」。an＋other が縮まった語なので、a や the は付けない。

■ the other ＋名詞＝残り全部
the other six students keep no pet at all（残りの6人はペットを飼っていない）
the が付くと「残っているのはこれで全部」という意味になる。実際に検算すると、16＋10＋6＋2＝34、40－34＝6 で一致する。

■ some 〜, others 〜
Some students keep more than one animal.（複数の動物を飼っている生徒もいる）
some だけが使われているときも「全体のうちの一部」を表す。「全員が」ではない。

■ まとめ表（3個のものがあるとき）
one（1つ目）→ another（2つ目）→ the other（最後の1つ）
2個なら one → the other、たくさんなら one → another → 〜 → the others。

★ ポイント：the が付いていたら「残り確定」、付いていなければ「まだ他にもある」。この一点で判断できる。

⚠ 注意：the other six students の six を見落として「残り1人」と読むと、合計が合わなくなる。合計40人という情報を使って必ず検算する。`,
      },
      {
        heading: 'グラフと数の検算',
        body: `円グラフは全体を100とみなして割合を示す。この英文の数値は次のとおり。

犬16人／猫10人／魚6人／鳥2人／飼っていない6人　合計40人

■ 割合に直す
犬 16÷40＝40％／猫 10÷40＝25％／魚 6÷40＝15％／鳥 2÷40＝5％／なし 6÷40＝15％
合計 40＋25＋15＋5＋15＝100％。合っている。

■ 英文と図の照合ポイント
①いちばん大きい区分は何か → 犬（16人・40％）
②「猫がいちばん人気だと思っていた」は調査前の予想であって結果ではない。
③「ペットを飼っていない生徒」も一つの区分として数に入っている。

■ 最終段落の but に注意
This rule made the survey simple, but it also means that the real number of cats in our class is larger than ten.
「複数飼っている場合はいちばん長く飼っている動物を選ばせた」というルールのせいで、猫の実際の数は10より多い。つまりグラフの10という数字は「猫を飼っている生徒のうち、猫を最も長く飼っている生徒の数」である。

★ ポイント：図表つき読解では、数字の定義（何を数えた数字か）が本文に書いてあることが多い。そこを読まずに数字だけ拾うと誤答する。

⚠ 注意：「猫を飼っている生徒は10人である」と断定する選択肢は、この本文では誤りになる。larger than ten と本文が明言しているからである。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "the other six students keep no pet at all" から、この学級でペットを飼っていない生徒は何人か。',
        wrongAnswer: '1人',
        trapExplanation: 'the other を「残りの一人」と機械的に覚えていて、直後の six を読み飛ばしてしまう。the other は後ろに複数名詞が来れば「残りの〜人（全員）」を表す。',
        correctAnswer: '6人',
        correctExplanation:
          'the other six students は「残りの6人の生徒」。検算すると、犬16＋猫10＋魚6＋鳥2＝34人、40－34＝6人となり一致する。the other は「残り全部」を示す語で、単数か複数かは後ろの名詞で決まる（the other student なら残り1人、the other six students なら残り6人）。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア 調査の結果、猫を飼っている生徒がいちばん多かった　イ 調査の前は猫がいちばん多いと思われていたが、結果は犬が最も多かった',
        wrongAnswer: 'ア',
        trapExplanation: 'many of us thought that cats were the most popular という文だけを見て、それを調査結果だと思ってしまう。thought（思っていた）と Before the survey（調査の前は）という語を見落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'Before the survey, many of us thought that 〜 は調査前の予想である。結果は Sixteen students answered that they keep a dog. で犬が16人と最多。The results were not what we expected.（結果は予想と違った）という文が、予想と結果が食いちがうことをはっきり示している。「予想・意見」と「事実・結果」は必ず分けて読むこと。',
      },
    ],
  },

  {
    id: 'koko_eigo_s348',
    subject: 'eigo',
    examType: 'koko',
    title: '代名詞④：下線部の指示内容を日本語で説明する',
    description: '指示語を含む下線部を、本文の語を使って過不足なく日本語でまとめる答案の作り方',
    intro: '「そこを説明しなさい」と言われて、本文をまるごと写しても点はもらえません。逆に短くしすぎると、何のことかわからない答案になります。どこまで書けば伝わるか。答案には決まった作り方があり、それを知っているかどうかで記述の点数は大きく変わります。',
    order: 848,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '解答に「これ」「それ」などの指示語を残さない。残すと説明したことにならない。',
      '文末は設問の形に合わせる（「〜こと」「〜という点」「〜だから」）。',
      '主語・目的語を補う。だれが何をしたかがわかる日本語にする。',
      '本文の語順ではなく、日本語として自然な語順に組み直す。',
      '字数制限があるときは、修飾語から削り、中心の名詞と動作は必ず残す。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Aki is a first-year student at a junior high school in a small town. Her school has only 78 students, and the number is getting smaller every year. Last spring, the town office said that the school might close in a few years. Many students were worried about this.

Aki thought about it for a long time. Then she wrote a letter to the town office. In the letter, she asked for one thing: to let students from other towns come and study at her school for one week in summer.

At first, the adults did not think it was possible. But Aki and her friends collected 500 names on paper and showed them to the town office. The idea was finally accepted.

Last August, twenty students from three cities came to the town. They studied with Aki in the same classroom, swam in the river, and helped farmers in the morning. Three of them said that they wanted to move to the town in the future.

Aki says that she does not know if the school will stay open. But she is sure that doing something is better than waiting.`,
      },
      {
        heading: '答案の作り方（4ステップ）',
        body: `設問：下線部 Many students were worried about this. の this の内容を日本語で説明しなさい。

■ ステップ1：指示語を含む文の意味を確認する
「多くの生徒がこのことを心配した」。心配の対象になるようなマイナスの内容が前にあるはずだと予想する。

■ ステップ2：直前を読む
Last spring, the town office said that the school might close in a few years.（去年の春、町役場が、その学校が数年のうちに閉校するかもしれないと言った）

■ ステップ3：日本語に組み直す
・主語を補う：だれが → 町役場が
・動作：言った／閉校するかもしれない
・文末：「〜こと」で終える
答案：町役場が、アキの学校が数年のうちに閉校するかもしれないと言ったこと。

■ ステップ4：入れ直して確認する
「多くの生徒が〈町役場が…と言ったこと〉を心配した」→ 意味が通る。完成。

★ ポイント：ステップ4の入れ直しを必ずやる。ここで日本語として変なら、まだ答案になっていない。

⚠ 注意：「学校がなくなること」だけでは不十分な場合がある。だれが言ったのか（町役場）、いつの話か（数年のうちに）まで書くと確実。ただし字数制限があるときは、設問が求める中心（閉校するかもしれないこと）を優先する。`,
      },
      {
        heading: 'まぎらわしい it・one thing の処理',
        body: `■ Aki thought about it for a long time. の it
直前の this と同じ内容（閉校するかもしれないという問題）を指す。ここでは「その問題について長い間考えた」でよい。

■ she asked for one thing: to let students from other towns 〜
コロン（:）は「つまり」「すなわち」の合図で、後ろが one thing の中身である。よって「一つのこと」の内容は「よその町の生徒を夏に1週間、自分の学校に来て学ばせること」。
コロン・ダッシュ（—）の後ろは、直前の語の説明になっていることが多い。指示内容を問われたら、まずコロンの後ろを見る。

■ the adults did not think it was possible の it
この it は「アキの提案（よその町の生徒を受け入れること）」を指す。「大人たちは、それが可能だとは思わなかった」。

■ showed them to the town office の them
直前の 500 names on paper（紙に集めた500人の署名）を指す。人ではなく「もの」を指す them の例である。

■ Three of them said that 〜 の them
twenty students from three cities（3つの市から来た20人の生徒）を指す。「そのうちの3人が」。

★ ポイント：同じ英文の中に it が何度も出てきても、それぞれ別のものを指すことがある。1つずつ入れ直して確かめる。

⚠ 注意：最終文 doing something is better than waiting は「何かをすることは待っていることよりよい」。動名詞が主語になっている形で、下線部和訳でもよく出る。`,
      },
    ],
    trapExamples: [
      {
        question: '下線部 Many students were worried about this. の this の内容を説明する答案として、より適切なのはどちらか。ア これを心配した　イ 町役場が、学校が数年のうちに閉校するかもしれないと言ったこと',
        wrongAnswer: 'ア',
        trapExplanation: '解答に指示語をそのまま残してしまう。本文を訳しただけで、「何を」説明したことにならない。字数を埋めようとして本文の言い回しを写すと起きやすい。',
        correctAnswer: 'イ',
        correctExplanation:
          '指示語の説明問題では、解答の中に「これ」「それ」を残してはいけない。指示語が指す具体的な内容を、主語（町役場）・内容（数年のうちに閉校するかもしれない）まで補って書く。書き終えたら、元の文の指示語の位置にその日本語を入れ直し、意味が通るかを確認する。',
      },
      {
        question: '本文の "she asked for one thing: to let students from other towns come and study at her school for one week in summer" で、アキが求めた one thing とは何か。',
        wrongAnswer: '町役場に手紙を書くこと',
        trapExplanation: '直前の文（手紙を書いた）を one thing の中身だと思ってしまう。コロン（:）の後ろに内容が書かれているという書式の約束を知らないために起きる誤り。',
        correctAnswer: 'よその町の生徒が、夏に1週間、自分の学校に来て一緒に学べるようにしてほしいということ',
        correctExplanation:
          'コロン（:）は直前の語句の中身を示す記号で、one thing の具体的内容が後ろに書かれている。let 〈人〉 do は「〈人〉に〜させる・〜するのを許す」という許可の意味なので、「来て学ぶことを認めてほしい」と訳す。コロン・セミコロン・ダッシュの後ろは説明であるという書式を覚えておくと、指示内容の問題が速く解ける。',
      },
    ],
  },

  // ───────────── 4. つなぎ語から展開を読む（s349〜s353） ─────────────
  {
    id: 'koko_eigo_s349',
    subject: 'eigo',
    examType: 'koko',
    title: 'つなぎ語①：however / but が示す話の折り返し',
    description: '逆接の語を目印にして、筆者が本当に言いたい後半部分を取り出す',
    intro: '「その映画、映像はきれいだったよ。でも……」と言われたら、続きが良い話でないことは想像がつきます。英語の however や but も同じ合図です。逆接の語のあとに筆者の本音が来る。この一点を知っているだけで、長文のどこに線を引けばよいかが決まります。',
    order: 849,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'but / however / yet / still は逆接。直後に筆者の主張が来ることが多い。',
      'however は副詞なので、文頭・文中にカンマとともに置く（However, 〜／〜, however, 〜）。',
      'but は接続詞なので、文と文をつなぐ。However を but と同じ位置には置けない。',
      '「一般論 → However → 筆者の考え」は論説文の最頻出パターン。',
      '逆接の前の内容を答えに選ぶと誤答になりやすい。線を引くのは後ろ。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Many people say that reading on a screen is the same as reading on paper. However, some studies show a difference.

In one experiment, two groups of students read the same story. The first group read it in a paper book, and the second group read it on a tablet. After that, both groups answered questions about the story. The two groups got almost the same score on questions about small facts, such as names and places.

But there was a clear difference in one kind of question. When the students were asked to put the events of the story in the right order, the paper group did much better. The researchers think that readers remember where a scene was on the page, and this helps them remember the order.

This does not mean that tablets are bad. A tablet can hold a thousand books, and it can make the letters larger for people who need it. Still, if you want to remember the order of events, paper may be the better choice for now.`,
      },
      {
        heading: '逆接の語の後ろに主張がある',
        body: `■ 第1段落の構造
Many people say that 〜（多くの人は〜と言う）＝一般論
However, some studies show a difference.（しかし、いくつかの研究は違いを示している）＝筆者の立場

英語の論説文はこの型で始まることが非常に多い。「多くの人は A だと言う。しかし B である」。設問で「筆者の考えはどれか」と問われたら、However の後ろを見る。

■ 一般論を示す表現
Many people say / Some people think / It is often said that / We usually believe
これらが出たら「この後にひっくり返るぞ」と身構える。

■ 第3段落の But
The two groups got almost the same score 〜（差がなかった）
But there was a clear difference in one kind of question.（しかし1種類の設問では明らかな差があった）
ここでも But の後ろが要点である。この実験の結論は「細かい事実の記憶には差がないが、出来事の順序の記憶では紙のほうがよい」。

■ Still の働き
Still, if you want to remember the order of events, paper may be the better choice for now.
Still は「それでもなお」。直前の「タブレットが悪いわけではない」という譲歩を受け、もう一度筆者の主張に戻している。

★ ポイント：however / but / still は「ここから大事」の印。読みながら△などの印を付けると、設問を解くときにすぐ戻れる。

⚠ 注意：however は接続詞ではないので、× I read it on paper, however I forgot the order. とは書けない。カンマではなくピリオドかセミコロンで切る。文法問題でも問われる。`,
      },
      {
        heading: '譲歩と主張のセットを見抜く',
        body: `第4段落は「譲歩 → 主張」という型である。

譲歩：This does not mean that tablets are bad. A tablet can hold a thousand books 〜（タブレットにも良い点がある）
主張：Still, 〜 paper may be the better choice for now.（それでも、今のところ紙のほうがよい）

■ 譲歩の合図
Of course / It is true that / This does not mean that / Certainly / Some may say that
これらは「相手の言い分を一度認める」ための表現である。認めているだけで、筆者の主張ではない。

■ 主張の合図
Still / However / But / Nevertheless / In my opinion / I believe that
譲歩のあとに来るこれらの語の後ろが、筆者の最終的な立場である。

■ 内容一致問題での使い分け
選択肢「筆者はタブレットは役に立たないと考えている」→ 誤り。A tablet can hold a thousand books と良い点を認めているし、does not mean that tablets are bad と明言している。
選択肢「出来事の順序を覚えたいなら、今のところ紙のほうがよいと筆者は考えている」→ 正しい。Still 以下と一致する。

■ may / for now という語の重み
may be the better choice for now は「今のところ〜かもしれない」。断定していない。選択肢が「紙のほうが必ず優れている」と断定していたら、それは言いすぎで誤りになる。

★ ポイント：入試の選択肢は、本文の「かもしれない」を「必ず」に変えて誤りを作ることが多い。助動詞と副詞の強さまで照合する。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の内容に合うのはどちらか。ア 紙でもタブレットでも、読解の結果に差はなかった　イ 細かい事実の記憶には差がなかったが、出来事の順序の記憶では紙のほうがよかった',
        wrongAnswer: 'ア',
        trapExplanation: 'The two groups got almost the same score という文で読むのをやめてしまうため。次の文が But で始まっており、そこから内容がひっくり返ることを見落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'almost the same score は「名前や場所などの細かい事実についての設問」に限った話で、直後の But there was a clear difference in one kind of question. で条件が変わる。出来事を正しい順に並べる設問では the paper group did much better である。逆接の語が来たら、その前だけで判断しないこと。',
      },
      {
        question: '次の英文の空所に入る語として正しいのはどちらか。I studied hard, ( however / but ) I could not answer the last question.',
        wrongAnswer: 'however',
        trapExplanation: 'however と but の意味が似ているため、置きかえられると思ってしまう。しかし however は副詞で、カンマ一つで二つの文をつなぐことはできない。',
        correctAnswer: 'but',
        correctExplanation:
          'but は接続詞なので二つの文をつなげる。however は副詞なので、文と文をつなぐ働きはなく、I studied hard. However, I could not answer the last question. のようにピリオドで切るか、セミコロンを使う。読解では however が文頭にあれば「前の文と逆の内容が来る」、文中にカンマではさまれていれば「その文全体が前と逆」と判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s350',
    subject: 'eigo',
    examType: 'koko',
    title: 'つなぎ語②：for example / in fact が示す具体と強調',
    description: '抽象的な主張と、その裏づけとなる具体例・数値の対応関係をつかむ',
    intro: '「うちの学校は行事が多い」と言われてもぴんと来ませんが、「4月は遠足、6月は合唱祭、9月は体育祭」と続けば納得できます。英語でも for example の前が主張、後ろが証拠です。この対応が見えると、長い段落でも「結局どれが言いたいことか」が一目でわかります。',
    order: 850,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'for example / for instance / such as の後ろは具体例。主張はその前にある。',
      'in fact は「実際には」。直前の思いこみを打ち消して事実を示すことが多い。',
      '具体例は複数並ぶことが多い。カンマと or / and の並びを数えると個数がわかる。',
      '設問が「主張」を聞いているのか「具体例」を聞いているのかを見きわめる。',
      '数値は具体例として出る。合計・割合の検算をすると読みちがえを防げる。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Food loss is a serious problem in our city. Last year the city measured the amount of food thrown away by five kinds of places. Homes produced 40 tons, restaurants 25 tons, supermarkets 18 tons, schools 12 tons, and hotels 5 tons. The total was 100 tons.

Many people think that restaurants waste the most food. In fact, homes waste more than restaurants and schools together. The reason is simple. There are only a few hundred restaurants in our city, but there are more than thirty thousand homes.

Homes waste food in several ways. For example, people buy too much at one time, forget vegetables at the back of the refrigerator, or cook more than they can eat. Such small losses are hard to see, because each home throws away only a little each day.

The city started a campaign called "Look Inside First." Before going shopping, people are asked to take a photo of the inside of their refrigerator. Families that joined the campaign cut their food waste by about thirty percent in six months.`,
        figureId: 'lf_kokoeigoext10_350',
      },
      {
        heading: '主張と具体例の対応',
        body: `■ 第3段落の構造
主張：Homes waste food in several ways.（家庭はいくつかの方法で食品を無駄にしている）
具体例：For example, ①buy too much at one time ②forget vegetables at the back of the refrigerator ③cook more than they can eat
まとめ：Such small losses are hard to see 〜（そうした小さな損失は見えにくい）

具体例は3つ。カンマと or の並びを数えれば個数がわかる。「本文で挙げられている例を3つ書きなさい」という設問はここから作られる。

■ such as と for example の違い
such as は名詞の直後に置いて「〜のような」と例を挙げる（fruits such as apples and oranges）。for example は文の頭に置いて、文まるごとで例を示す。読み方は同じで、「後ろは例だ」と判断する。

■ Such small losses の such
「そうした小さな損失」＝前に挙げた3つの例を受けている。such＋名詞は前の内容をまとめる働きがあり、指示語の一種として扱う。

★ ポイント：具体例は読み飛ばしてもよい部分である。時間がないときは、for example の前と、例が終わったあとのまとめ文だけを読む。

⚠ 注意：ただし「例として挙げられていないものはどれか」という設問が出ることがある。この場合だけは例を1つずつ照合する必要がある。設問を先読みしていれば、どちらの読み方をすべきか判断できる。`,
      },
      {
        heading: 'in fact と数値の検算',
        body: `■ in fact の働き
Many people think that restaurants waste the most food. In fact, homes waste more than restaurants and schools together.
「多くの人は飲食店がいちばん多いと思っている。実際には家庭のほうが多い」。in fact は思いこみを訂正する合図で、however と同じように後ろが要点になる。

■ 数値で確かめる
家庭40／飲食店25／スーパー18／学校12／ホテル5、合計100トン。
・飲食店25＋学校12＝37 < 家庭40 → 本文の記述と一致する。
・家庭の割合＝40÷100＝40％。
・上位2つ（家庭40＋飲食店25＝65）で全体の65％。

■ グラフとの照合ポイント
①いちばん高い棒＝家庭（40トン）
②いちばん低い棒＝ホテル（5トン）
③飲食店25とスーパー18の差は7トン
こうした差や合計を問う設問は、グラフから直接読めるものと、引き算が必要なものの2種類ある。

■ 最終段落の割合
cut their food waste by about thirty percent は「約30％減らした」。by は差の大きさを表す前置詞である。to thirty percent なら「30％まで減らした」（つまり70％減）となり、意味がまったく違う。

★ ポイント：by ＝ どれだけ変化したか（差）、to ＝ どこまで変化したか（到達点）。グラフ読解では必ず問われる区別である。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、飲食店とスーパーマーケットの食品廃棄量の合計は何トンか。',
        wrongAnswer: '40トン',
        trapExplanation: '設問の「合計」を見て、いちばん目立つ数字（家庭の40トン）をそのまま答えてしまう。あるいは本文の restaurants and schools together という記述に引きずられ、聞かれていない組み合わせで計算してしまう。',
        correctAnswer: '43トン',
        correctExplanation:
          '飲食店25トン＋スーパー18トン＝43トン。本文にあるのは homes waste more than restaurants and schools together（飲食店25＋学校12＝37トンより家庭40トンのほうが多い）という別の比較で、設問が聞いている組み合わせとは違う。設問がどの項目を聞いているかを確認してから、グラフの数値を足すこと。',
      },
      {
        question: '本文の "Families that joined the campaign cut their food waste by about thirty percent in six months." の意味として正しいのはどちらか。ア 食品廃棄を約30％減らした　イ 食品廃棄が元の30％の量になった',
        wrongAnswer: 'イ',
        trapExplanation: 'by と to の区別ができていないため、「30パーセントに」と読んでしまう。日本語で「30％になった」「30％減った」は結果がまったく違うのに、英語では前置詞1語で区別されている。',
        correctAnswer: 'ア',
        correctExplanation:
          'cut 〜 by 30 percent は「30％分だけ減らした」という差の表現で、残っているのは70％である。cut 〜 to 30 percent なら「30％まで減らした（70％減）」となる。increase by / decrease by / rise by も同じで、by の後ろは変化量、to の後ろは到達点を表す。グラフつき読解では必ず区別すること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s351',
    subject: 'eigo',
    examType: 'koko',
    title: 'つなぎ語③：because / so / as a result が示す因果',
    description: '原因と結果を正しい向きで結び、複数の原因が重なる文章を整理して読む',
    intro: 'ホタルが減ったのは水が汚れたから、と一言で片づけたくなります。しかし実際には、えさが減り、夜が明るくなり、川がコンクリートになり……と原因はいくつも重なっています。英文の因果関係は矢印の向きと本数がいのちです。どちらが原因でどちらが結果かを取りちがえないための読み方を学びます。',
    order: 851,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'because の後ろが原因、so / therefore / as a result の後ろが結果。向きが逆。',
      'because of ＋名詞／because ＋〈S＋V〉。後ろの形で使い分ける。',
      'that is why 〜＝「そういうわけで〜」（後ろが結果）。that is because 〜＝「それは〜だからだ」（後ろが原因）。',
      '原因が複数あるときは、One reason 〜 / Another reason 〜 / In addition で並ぶ。',
      '設問が「理由」を聞いたら because / so の周辺だけを見ればよい。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Why are there fewer fireflies in Japan than before? Many people think that the answer is simple: the water became dirty. That is only part of the story.

Fireflies need three things: clean water, small river snails to eat, and dark nights. Because rivers were covered with concrete, the snails lost their homes. As a result, the fireflies lost their food. In addition, bright streetlights make the nights bright, so the fireflies cannot find each other. Fireflies use their light to send messages, and a light that no one can see is useless.

In one town in Gifu, people worked on all three problems at the same time. They took the concrete out of a part of the river, put stones back, and turned off some of the streetlights in June and July. Five years later, the number of fireflies became about four times larger.

The lesson is clear. When a living thing disappears, there is usually more than one reason. Therefore, fixing only one of them is often not enough.`,
      },
      {
        heading: '原因と結果の向きをそろえる',
        body: `■ 矢印で整理する
Because rivers were covered with concrete, the snails lost their homes.
　川がコンクリートで覆われた（原因）→ カワニナが住みかを失った（結果）
As a result, the fireflies lost their food.
　カワニナが減った（原因）→ ホタルがえさを失った（結果）
bright streetlights make the nights bright, so the fireflies cannot find each other.
　街灯が明るい（原因）→ ホタルが互いを見つけられない（結果）

つまり因果の鎖が
コンクリート化 → カワニナ減少 → ホタルのえさ不足
街灯 → 夜が明るい → 交信できない
という2本走っている。

■ because と so は向きが逆
because ＋原因／so ＋結果。日本語に直すとき、because を「だから」と訳すと逆になる。
例）He was late because the train stopped.（電車が止まったので遅れた）
例）The train stopped, so he was late.（電車が止まった、だから彼は遅れた）
意味は同じでも、語の位置が入れかわっている。

★ ポイント：因果を問われたら、まず矢印を書く。頭の中だけで処理すると向きを取りちがえる。

⚠ 注意：because of は前置詞なので後ろは名詞（because of the rain）。because は接続詞なので後ろは〈S＋V〉（because it rained）。書きかえ問題の定番である。`,
      },
      {
        heading: '原因が複数あることを見落とさない',
        body: `この英文の要点は、最終段落に書かれている。When a living thing disappears, there is usually more than one reason.（生き物がいなくなるとき、たいてい理由は一つではない）

■ 「一つではない」を示す表現
Many people think that the answer is simple（多くの人は答えは単純だと思っている）→ 一般論
That is only part of the story.（それは話の一部にすぎない）→ 訂正
Fireflies need three things:（3つ必要である）→ 数を示す
In addition,（さらに）→ 追加

■ 数を示す語に印を付ける
three things / all three problems / more than one reason
数字が出たら、それに対応する項目がいくつ挙がっているかを数える。ここでは①clean water ②small river snails to eat ③dark nights の3つ。

■ 岐阜の町がやったこと（3つ）
①コンクリートを取り除いた ②石を戻した ③6月と7月に街灯を一部消した
「3つの問題に同時に取り組んだ」という記述と対応している。

■ Therefore の使い方
Therefore, fixing only one of them is often not enough.
therefore は「したがって」。前の内容から導かれる結論を示す。文頭でカンマを伴う点は however と同じで、接続詞ではないので and のように文をつなぐことはできない。

★ ポイント：「原因は一つではない」型の文章では、「Aだけが原因である」と書かれた選択肢は誤りになる。

⚠ 注意：the number of fireflies became about four times larger は「約4倍になった」。about（約）が付いているので、「ちょうど4倍」と断定する選択肢は言いすぎである。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "Because rivers were covered with concrete, the snails lost their homes." の因果関係として正しいのはどちらか。ア カワニナが住みかを失ったので、川がコンクリートで覆われた　イ 川がコンクリートで覆われたので、カワニナが住みかを失った',
        wrongAnswer: 'ア',
        trapExplanation: 'because を「だから」と訳して覚えているため、because の直後を結果だと考えてしまう。文頭に Because が来ると、日本語の語順と同じに見えてかえって混乱する。',
        correctAnswer: 'イ',
        correctExplanation:
          'because の後ろは必ず原因である。Because A, B. は「AなのでBだ」。so は逆で、A, so B. が「AだからBだ」となり、so の後ろが結果になる。矢印を書いて向きを固定するとまちがえない。ここでは「コンクリート化 → カワニナが住みかを失った」で、さらに As a result で「ホタルがえさを失った」へつながる。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア ホタルが減った原因は水の汚れだけである　イ ホタルが減った原因は複数あり、一つを直すだけでは足りない',
        wrongAnswer: 'ア',
        trapExplanation: '第1段落の the water became dirty という文を答えだと思ってしまう。しかしそれは Many people think 〜 に続く一般論で、直後に That is only part of the story. と否定されている。',
        correctAnswer: 'イ',
        correctExplanation:
          'That is only part of the story.（それは話の一部にすぎない）が一般論を打ち消し、最終段落の there is usually more than one reason / fixing only one of them is often not enough が筆者の結論である。Many people think that 〜 で始まる文は、その後で訂正されるための前置きであることが多い。一般論と筆者の主張を必ず区別する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s352',
    subject: 'eigo',
    examType: 'koko',
    title: 'つなぎ語④：first / then / finally で手順を追う',
    description: '順序を表す語を目印に、工程・手順を説明する英文を段階ごとに整理する',
    intro: '料理のレシピは「まず」「次に」「最後に」があるから作れます。英語でも手順を説明する文章には必ず順序の目印があり、それさえ拾えば内容は半分わかったも同然です。入試では「工程の順に並べかえよ」という設問が定番で、目印を見落とすと全滅します。',
    order: 852,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '順序の目印：First / Second / Third / Then / Next / After that / Finally / At last。',
      '目印は段落の先頭に置かれることが多い。段落の数＝工程の数になることがある。',
      '受け身（be ＋過去分詞）が多用される。だれがやるかより、何がされるかが中心。',
      '手順の説明では現在形が使われる（いつでも起こることだから）。',
      '最後の段落に「ただし」「しかし」で例外や限界が書かれることが多い。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Do you know how an old newspaper becomes a new one? The process has four steps.

First, the used paper is collected and taken to a factory. Workers remove things that are not paper, such as plastic bags and metal clips.

Second, the paper is put into a large machine with warm water. The machine mixes them until the paper becomes a soft gray liquid. This liquid is called pulp.

Third, the ink must be taken out. Air is sent into the pulp, and the ink sticks to the bubbles and rises to the top. The gray foam on the surface is then removed. After this step, the pulp becomes much whiter.

Finally, the pulp is spread out flat, pressed between rollers, and dried. The new paper is rolled up and sent to printing companies.

One tree makes about 8,000 sheets of paper. Japan recycles about 80 percent of its used paper, and this is one of the highest rates in the world. However, paper cannot be recycled forever. Each time, the fibers become shorter, so new wood must be added.`,
      },
      {
        heading: '工程を4つに切り分ける',
        body: `■ 段落＝工程
第2段落 First：集めて工場へ運び、紙でないもの（ビニール袋・金属のクリップ）を取り除く
第3段落 Second：温水とともに大きな機械に入れ、灰色の液体（パルプ）にする
第4段落 Third：空気を送りこみ、泡にインクを付着させて浮かせ、表面の泡を取り除く
第5段落 Finally：平らに広げ、ローラーで押し、乾かして巻き取る

■ 並べかえ問題への備え
「次のア〜エを工程の順に並べよ」という設問では、各選択肢のキーワードを工程の目印と結びつける。
ア インクを取り除く → Third
イ 工場へ運ぶ → First
ウ 乾かす → Finally
エ 温水と混ぜる → Second
答え：イ→エ→ア→ウ

■ 受け身が続く理由
is collected / is taken / is put / must be taken out / is sent / is removed / is spread / is pressed / is dried / is rolled up / is sent
だれがやるかは重要ではなく、何がされるかが中心だからである。受け身の文が続いたら「これは手順・工程の説明だ」と判断してよい。

★ ポイント：手順の英文は、動詞（何をするか）だけを拾えば内容がつかめる。名詞や修飾語は後回しでよい。

⚠ 注意：The machine mixes them の them は the paper and warm water（紙と温水）を指す。直前の名詞1語ではなく、2つのものをまとめて受けている。`,
      },
      {
        heading: '最終段落の「ただし」に注意',
        body: `最後の段落には、工程の説明とは別に、数値と限界が書かれている。

■ 数値
One tree makes about 8,000 sheets of paper.（木1本から約8,000枚）
Japan recycles about 80 percent of its used paper.（日本は使用済み紙の約80％を再生している）
one of the highest rates in the world（世界でも高い部類）

■ one of the ＋最上級＋複数名詞
「最も〜なもののうちの一つ」。「世界一である」とは言っていない。選択肢が「日本は世界一の再生率である」となっていたら誤り。この言いかえは入試で頻出のひっかけである。

■ However 以下が要点
However, paper cannot be recycled forever. Each time, the fibers become shorter, so new wood must be added.
「紙は永久に再生できるわけではない。そのたびに繊維が短くなるので、新しい木を加えなければならない」
リサイクルの説明文では、この「限界」の部分が主題になっていることが多い。

■ forever の否定
cannot 〜 forever は部分否定的に「永久に〜できるわけではない」。「まったく再生できない」ではない。not always（いつも〜とは限らない）、not all（全部が〜というわけではない）と同じ考え方で、否定語と always / all / forever が組み合わさったときは「全部否定ではない」と考える。

★ ポイント：説明文の最終段落は要旨そのものであることが多い。時間がないときは、最初の段落と最後の段落を先に読む。`,
      },
    ],
    trapExamples: [
      {
        question: '本文によると、インクを取り除く工程は4つの工程のうち何番目か。',
        wrongAnswer: '4番目（最後）',
        trapExplanation: 'インクを抜いて白くする作業を「仕上げ」だと感覚的に考え、Finally の段落と結びつけてしまう。段落の先頭にある Third という目印を確認していない。',
        correctAnswer: '3番目',
        correctExplanation:
          '第4段落が Third, the ink must be taken out. で始まっており、これが3番目の工程である。最後の Finally の段落は、パルプを平らに広げ、ローラーで押して乾かす工程である。工程の順序を問う設問では、必ず段落の先頭の副詞（First / Second / Third / Finally）を確認すること。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア 日本の古紙リサイクル率は世界で最も高い　イ 日本の古紙リサイクル率は世界でも高いほうである',
        wrongAnswer: 'ア',
        trapExplanation: 'one of the highest rates を「最も高い率」と読んでしまう。最上級が使われているので世界一だと思いこむが、one of 〜 が付くと「上位のうちの一つ」という意味になる。',
        correctAnswer: 'イ',
        correctExplanation:
          'one of the ＋最上級＋複数名詞は「最も〜なもののうちの一つ」で、1位だとは言っていない。名詞が複数形（rates）になっていることがその証拠である。入試の内容一致問題では、本文の one of the largest を選択肢で the largest に変える形のひっかけが頻出する。最上級を見たら one of が付いていないかを必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s353',
    subject: 'eigo',
    examType: 'koko',
    title: 'つなぎ語⑤：on the other hand / instead で対比を読む',
    description: '二つのものを比べる文章で、どちらの話をしているかを見失わずに読み分ける',
    intro: '二つのものを比べる文章は、どちらの話をしているかを一度見失うと、そのあと全部が反対の意味になります。英語には「一方では」「その代わりに」という切りかえの合図があり、そこで話し手が向きを変えます。合図に印を付けながら読むだけで、混乱はなくなります。',
    order: 853,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      'on the other hand＝「他方では」。二つを対比するときの切りかえの合図。',
      'instead＝「その代わりに」。前に否定された内容の代わりに来るものを示す。',
      'while / whereas は「〜する一方で」という対比の接続詞になることがある。',
      '比較の文では、何と何を比べているか（比較の対象）を必ず確認する。',
      '対比の文章は表にすると整理できる。項目を縦、比べる対象を横に並べる。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Sleep is important for students, but junior high school students in Japan sleep less than students in many other countries. A study of 15-year-old students showed the average hours of sleep on a school night: Japan 7.0 hours, the United States 7.6 hours, France 8.1 hours, and Finland 8.4 hours.

Why is the number in Japan the smallest? One reason is club activities. Many Japanese students practice sports before class and after school. On the other hand, students in Finland usually finish school at two or three in the afternoon, and club activities are not part of the school.

Homework is another reason. Japanese students often start their homework after eight at night. Instead of going to bed early, they study until midnight and then get up at six thirty.

Some schools in Japan have begun to change. One school in Chiba stopped morning practice and started classes thirty minutes later. Six months later, the students slept forty minutes longer on average, and fewer students slept during class.`,
        figureId: 'lf_kokoeigoext10_353',
      },
      {
        heading: '対比を表に整理する',
        body: `■ 日本とフィンランドの対比
　　　　　　　日本　　　　　　　　　　フィンランド
睡眠時間　　　7.0時間　　　　　　　　8.4時間
部活動　　　　朝練・放課後　　　　　　学校の一部ではない
下校時刻　　　（記載なし）　　　　　　午後2〜3時
宿題　　　　　夜8時以降に開始　　　　（記載なし）

表にすると、書かれていない欄（記載なし）がはっきりする。内容一致問題で「フィンランドの生徒は宿題をしない」といった選択肢が出たら、本文に書かれていないので誤りだと判断できる。

■ on the other hand の位置
On the other hand, students in Finland usually finish school at two or three 〜
日本の話から、フィンランドの話へ切りかわる合図である。この語の前後で主語が変わっていることを確認する。

■ instead の使い方
Instead of going to bed early, they study until midnight 〜
instead of ＋名詞・動名詞で「〜する代わりに」。「早く寝る代わりに、夜中まで勉強する」。instead 単独なら副詞で「その代わりに」（前の文の内容を受ける）。

★ ポイント：対比の文章では、段落ごとに「これはどちらの話か」を余白に書きこむとよい。

⚠ 注意：Japan 7.0 hours が「最も短い」ことは、他の3つと比べた結果である。世界で最も短いとは書かれていない。sleep less than students in many other countries（多くの他国より少ない）という表現の範囲を超えて答えないこと。`,
      },
      {
        heading: '比較の対象と数値の読み取り',
        body: `■ グラフの4つの数値
日本7.0／アメリカ7.6／フランス8.1／フィンランド8.4（単位：時間）
差を計算すると、フィンランド－日本＝1.4時間＝84分。アメリカ－日本＝0.6時間＝36分。

■ 比較級・最上級の照合
・Japan sleeps less than students in many other countries → 図の日本が最も低い棒であることと一致。
・Why is the number in Japan the smallest? → 4か国の中で最小。

■ 最終段落の数値に注意
the students slept forty minutes longer on average
これは「平均で40分長く寝るようになった」で、7.0時間が7.67時間になったという意味ではない。この学校の生徒に限った話であり、日本全体の数字ではない。グラフの数値と混ぜてはいけない。

■ fewer students slept during class
fewer は few の比較級で「より少ない数の」。「授業中に寝る生徒が減った」。less（量）と fewer（数）の区別も問われる。数えられる名詞には fewer、数えられない名詞には less を使う。

★ ポイント：本文中の数値には「全体の平均」と「一部の学校の変化」が混在している。どのグループの数字かを必ず確認する。

⚠ 注意：thirty minutes later（30分遅く始業）と forty minutes longer（40分長く睡眠）は別の数字である。30分遅く始めたのに40分長く眠れた理由は、朝練をやめたことも含まれるからで、本文はそこまで説明していない。書かれていないことを推測して答えないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、日本とフィンランドの平均睡眠時間の差は何分か。',
        wrongAnswer: '約1分',
        trapExplanation: '8.4－7.0＝1.4 という計算結果の数字だけを見て、単位を分と取りちがえてしまう。グラフの縦軸の単位（時間）を確認していない。',
        correctAnswer: '84分（1.4時間）',
        correctExplanation:
          '単位は hours（時間）なので、8.4－7.0＝1.4時間。1.4×60＝84分となる。グラフを読むときは、必ず縦軸の単位を先に確認する。小数の時間を分に直す設問は図表つき読解で頻出で、0.4時間＝24分、0.6時間＝36分のように、小数部分に60を掛ける計算を確実にしておく。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア 千葉のある学校では、始業を30分遅らせたところ、生徒の睡眠時間が平均40分のびた　イ 千葉のある学校では、始業を40分遅らせたところ、生徒の睡眠時間が平均30分のびた',
        wrongAnswer: 'イ',
        trapExplanation: '30分と40分という近い数字が同じ段落に出てくるため、どちらがどちらか記憶があいまいになる。数字とその直後の語（later / longer）をセットで読んでいない。',
        correctAnswer: 'ア',
        correctExplanation:
          'started classes thirty minutes later が「始業を30分遅らせた」、slept forty minutes longer が「40分長く眠った」である。数字は必ず直後の語とセットで読む。later（時刻が遅く）と longer（時間が長く）は意味が違うので、この二語の区別が決め手になる。数字が複数出る段落では、数字の横に「始業／睡眠」などとメモすると混同しない。',
      },
    ],
  },
  // ───────────── 5. 段落の主題文（s354〜s357） ─────────────
  {
    id: 'koko_eigo_s354',
    subject: 'eigo',
    examType: 'koko',
    title: '段落の主題文①：最初の一文に段落の内容が書いてある',
    description: '英語の段落は原則として1文目に要点を置く。その一文を拾って段落の中身を予測する',
    intro: '日本語の作文では結論を最後に置くことが多いですが、英語では逆に、最初の一文で言いたいことを宣言してから説明を始めます。だから1文目だけをたどっていけば、その文章の骨組みが見えます。この習慣を利用すると、時間のない試験で全体像を先につかめます。',
    order: 854,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '英語の段落は「主題文（topic sentence）→ 支持文（例・理由・数値）」の順で書かれる。',
      '主題文は原則として段落の1文目。各段落の1文目だけをつなぐと要旨になる。',
      '支持文には数値・具体例・研究結果が入る。主題文を裏づける材料である。',
      '段落の中で話題が変わることはない。1段落＝1話題が英語の書き方の約束。',
      '主題文には抽象的な語（more than / important / problem / way）が入りやすい。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `各段落の1文目に線を引きながら読む。

Honeybees do much more than make honey. About one third of the food we eat depends on insects that carry pollen from flower to flower, and honeybees do most of this work. Apples, strawberries, onions, and almonds all need them.

The number of honeybees is falling in many countries. Farmers in the United States lost about 40 percent of their bees in one year. Scientists say that there is no single cause. Diseases, chemicals used on farms, and the loss of wild flowers all hurt the bees at the same time.

People can help in small ways. If you plant flowers that bloom at different times of the year, bees can find food from spring to autumn. Some cities have made bee roads, long lines of flowers along streets and rivers, so that bees can move safely from one park to another.

Farmers can help too. Some of them now leave a small part of their fields without any chemicals. This costs money, but it brings more bees, and more bees mean more fruit. In one study, fields near such areas produced about 20 percent more apples.`,
      },
      {
        heading: '1文目だけをつなぐと要旨になる',
        body: `■ 4つの主題文
①Honeybees do much more than make honey.（ミツバチははちみつを作る以上のことをしている）
②The number of honeybees is falling in many countries.（多くの国でミツバチの数が減っている）
③People can help in small ways.（人々は小さな方法で手助けできる）
④Farmers can help too.（農家も手助けできる）

つなげると「ミツバチは重要 → 減っている → 私たちにできること → 農家にできること」となる。これがこの文章の要旨である。本文全体を読まなくても、1文目だけで構成がわかる。

■ 支持文の役割
①の支持文：About one third of the food 〜（数値）、Apples, strawberries 〜（具体例）
②の支持文：about 40 percent（数値）、Diseases, chemicals, the loss of wild flowers（原因の列挙）
③の支持文：plant flowers（例）、bee roads（例）
④の支持文：leave a small part of their fields（例）、about 20 percent more apples（数値）

■ 抽象と具体の階段
主題文は抽象的（much more than / falling / help）、支持文は具体的（40 percent / apples / bee roads）。この段差があるので、どちらが主題文かは読めば見分けられる。

★ ポイント：時間がないときは各段落の1文目＋最終段落を読む。それだけで内容一致問題の半分は解ける。

⚠ 注意：1文目が疑問文や短い導入文のときは、2文目が主題文になることもある。1文目が抽象的でなければ次の文を見る。`,
      },
      {
        heading: '要旨をまとめる練習',
        body: `■ 30字程度でまとめる
ミツバチは食料生産に欠かせないが数が減っており、市民も農家もできることがある。（38字）

■ まとめるときのルール
①主題文だけを使う。具体例（りんご・いちご）は入れない。
②数値も原則として入れない。「約40％減った」は支持文である。
③段落の順序どおりに並べる。

■ タイトルを選ぶ問題への応用
「この文章にふさわしい題名はどれか」という設問では、全段落に共通する話題を選ぶ。
ア Apples and Strawberries（第1段落の例だけ）→ 狭すぎる
イ How to Keep Bees at Home（本文にない）→ 誤り
ウ Honeybees and What We Can Do（全体を含む）→ 正しい
エ The History of Honey（本文にない）→ 誤り

題名の選択肢は「狭すぎる」「広すぎる」「本文にない」の3種類で誤りが作られる。とくに「狭すぎる」は、本文に確かに書いてあることなので選びたくなる。段落の一つだけの内容ではないかを必ず確認する。

■ more bees mean more fruit
「ミツバチが増えれば果実も増える」。more 〜 more 〜 の形で、比例関係を表す。The more you read, the faster you read.（読めば読むほど速く読める）と同じ考え方の表現である。

★ ポイント：要旨の設問は「本文に書いてあるか」ではなく「全体をおおっているか」で選ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: 'この文章の題名として最も適切なのはどれか。ア りんごといちごの育て方　イ ミツバチの減少と私たちにできること',
        wrongAnswer: 'ア',
        trapExplanation: '本文に apples と strawberries という語が実際に出てくるため、書いてある語を含む選択肢を選んでしまう。しかしそれは第1段落の具体例にすぎず、文章全体をおおっていない。',
        correctAnswer: 'イ',
        correctExplanation:
          '題名は文章全体をおおうものを選ぶ。4つの段落の主題文は「ミツバチの重要性」「減少」「市民にできること」「農家にできること」であり、これを一つにまとめたのがイである。アは第1段落の具体例だけで、第2段落以降を説明できない。題名選択では「本文に出てくる語が入っているか」ではなく「全段落を説明できるか」で判断する。',
      },
      {
        question: '本文の "About one third of the food we eat depends on insects that carry pollen from flower to flower" の内容に合うのはどちらか。ア 私たちが食べる食物の約3分の1は、花粉を運ぶ昆虫に支えられている　イ 昆虫の約3分の1が花粉を運んでいる',
        wrongAnswer: 'イ',
        trapExplanation: 'one third of 〜 の of の後ろがどこまでかを取りちがえる。the food we eat（私たちが食べる食物）が one third の対象なのに、後ろの insects を対象だと読んでしまう。',
        correctAnswer: 'ア',
        correctExplanation:
          '主語は About one third of the food we eat（私たちが食べる食物の約3分の1）で、we eat は the food を説明する関係代名詞の省略。動詞は depends on（〜に依存している）。割合を表す表現では、of の直後の名詞が「何の3分の1か」を示す。長い主語の切れ目を見きわめれば取りちがえない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s355',
    subject: 'eigo',
    examType: 'koko',
    title: '段落の主題文②：結論が最後に置かれる文章',
    description: '事実を積み上げて最後に主張を置く型を見抜き、結論の位置を判断する',
    intro: '「こんなことがあった、あんなこともあった、だから私はこう思う」。この順で書かれた文章では、最初の段落をいくら読んでも主張は見つかりません。英語でも、実例を並べてから最後に一般化する型があります。結論が前にあるか後ろにあるかを見分ける目を持ちましょう。',
    order: 855,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '事実や物語を積み上げ、最終段落で一般化する型がある（結論が後ろ）。',
      '最終段落の合図：In this way / This shows that / The lesson is / We can learn that。',
      '固有名詞・年号・数値が続く段落は事実の提示。主張ではない。',
      '主張の文には一般的な主語（Big inventions / People / We）と現在形が使われる。',
      '設問「筆者が最も言いたいことは何か」は、結論の段落から選ぶ。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `In 1958, a doctor in Sweden made a small machine that could send electricity to the heart. The first patient was 43 years old. His heart sometimes stopped, and he could not walk far. The machine worked for only three hours. The doctor made another one, and that one worked for two days.

Many people said that the idea would never be useful. The machines were too big, and the batteries died too quickly. The doctor did not stop. He and an engineer made a new machine every few months, and each time they learned something from the one that had failed.

The patient received 26 different machines during his life. He died in 2001 at the age of 86, and he lived longer than both the doctor and the engineer.

Big inventions are not born finished. They grow through many failures, and the people who use them early are part of the work.`,
      },
      {
        heading: '結論が後ろにある型を見抜く',
        body: `■ 各段落の性格
第1段落：1958年・43歳・3時間・2日 → 事実の羅列（年号と数値）
第2段落：周囲の反対と、それでも続けたこと → 出来事
第3段落：26台・2001年・86歳 → 事実の羅列
第4段落：Big inventions are not born finished. → 一般論・主張

第1〜3段落には固有名詞と数字しかない。ここに筆者の主張はない。主張は第4段落にある。

■ 主張の段落の見分け方
①主語が一般的：Big inventions / They / the people who use them early
②現在形：are not born / grow / are
③時と場所を示す語がない
事実の段落は過去形で、年号や場所が入る。この違いは目で見てわかる。

■ 一般化の合図
This shows that 〜／In this way 〜／The lesson is clear.／We can learn that 〜／This is true of 〜
本文では合図の語がなく、いきなり一般論に切りかわっている。合図がない場合もあるので、「時制が現在形に変わったら結論」と覚えておくとよい。

★ ポイント：物語風に始まる説明文は、ほぼ確実に最後で一般化する。最終段落を読まずに解答しないこと。

⚠ 注意：第2段落の Many people said that the idea would never be useful. は他人の意見であって筆者の主張ではない。「多くの人が言った」は一般論の提示である。`,
      },
      {
        heading: '事実の段落から情報を取り出す',
        body: `結論の段落が主張だとしても、設問の多くは事実の段落から作られる。数字の整理は必要である。

■ 年と人物
1958年：スウェーデンの医師が機械を作った
最初の患者：当時43歳
2001年：患者が86歳で死去
1958年に43歳なので、2001年には86歳。計算が合う（1958＋43＝2001、43＋43＝86）。

■ 機械の性能の変化
1台目：3時間だけ動いた
2台目：2日間動いた
生涯で26台を使った

■ he lived longer than both the doctor and the engineer
「彼は医師とエンジニアの両方より長生きした」。both A and B が than の後ろに来ている形。「機械を作った側より、使った側が長生きした」という事実が、最終段落の「早くから使う人も仕事の一部だ」という主張につながっている。

■ each time they learned something from the one that had failed
each time は接続詞的に「〜するたびに」。the one は a machine を指し、that had failed（失敗した）が説明している。過去完了は「学んだ時点より前に失敗していた」ことを示す。

★ ポイント：事実の段落と主張の段落は、設問の種類が違う。事実の段落 → 内容一致・数値。主張の段落 → 要旨・題名。どちらを聞かれているかで見る場所を変える。

⚠ 注意：Big inventions are not born finished. は「大きな発明は完成した形で生まれるわけではない」。not 〜 finished を「生まれない」と読まないこと。born finished（完成した状態で生まれる）を否定している。`,
      },
    ],
    trapExamples: [
      {
        question: 'この文章で筆者が最も言いたいことはどれか。ア 1958年にスウェーデンで心臓の機械が作られた　イ 大きな発明は多くの失敗を通して育ち、早くから使う人もその一部である',
        wrongAnswer: 'ア',
        trapExplanation: '第1段落の1文目が印象に残るため、そこを主張だと考えてしまう。しかし年号と固有名詞が並ぶ段落は事実の提示であり、筆者の考えではない。',
        correctAnswer: 'イ',
        correctExplanation:
          'この文章は事実を積み上げてから最終段落で一般化する型である。Big inventions are not born finished. 以下が筆者の主張で、時制が現在形に変わっていることがその印。「筆者が最も言いたいこと」を問う設問では、事実の段落（過去形・年号・数値）ではなく、一般論の段落（現在形・一般的な主語）を見る。',
      },
      {
        question: '本文によると、最初の患者は何歳まで生きたか。',
        wrongAnswer: '43歳',
        trapExplanation: '第1段落の The first patient was 43 years old. だけを見て答えてしまう。これは1958年の時点の年齢であって、亡くなったときの年齢ではない。',
        correctAnswer: '86歳',
        correctExplanation:
          '第3段落に He died in 2001 at the age of 86 とある。43歳は1958年時点の年齢で、1958＋43＝2001、43＋43＝86 と計算も合う。年齢や人数を問う設問では「いつの時点の数字か」を必ず確認する。同じ人物について複数の時点の情報が出る文章では、時点ごとに整理してから答えること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s356',
    subject: 'eigo',
    examType: 'koko',
    title: '段落の主題文③：段落どうしの関係を線でつなぐ',
    description: '各段落が前の段落に対してどんな役割（追加・逆接・具体化・結論）かを判定する',
    intro: '段落は独立した箱ではなく、前の段落を受けて次へ進む階段です。「さらに」なのか「しかし」なのか「つまり」なのかで、文章の向きが変わります。段落と段落の関係が読めるようになると、初めて見る英文でも次に何が来るか予想しながら読めるようになります。',
    order: 856,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '段落の関係は主に4つ：追加（また）／逆接（しかし）／具体化（たとえば）／結論（つまり）。',
      '段落の先頭の副詞（However / In addition / For example / As a result）が関係を教える。',
      '副詞がないときは、主語と時制の変化を見る。',
      '逆接で始まる段落には、筆者の心配・反論・条件が書かれることが多い。',
      '最終段落が「今後どうするか」で終わる文章は、要旨もその方向でまとめる。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Our school has asked its students the same question every year since 2020: how many minutes do you use a smartphone on a weekday? The average answer has changed a lot. In 2020 it was 80 minutes. In 2021 it rose to 110 minutes, and in 2022 to 140 minutes. In 2023 it was 170 minutes, and in 2024 it reached 190 minutes.

The reason for the rise is not only games. Many students now use their phones to watch videos about school subjects, to talk with club members, and to check the school website.

However, the school is worried about sleep. Students who use a phone for more than three hours a day go to bed about fifty minutes later than other students.

This year the school did not make a new rule. Instead, teachers asked each class to decide its own rule. Some classes decided to put their phones in a box during lunch time. Others decided nothing. The school will ask the same question again next year and compare the results.`,
        figureId: 'lf_kokoeigoext10_356',
      },
      {
        heading: '段落の関係を判定する',
        body: `■ 第1段落 → 第2段落：具体化・説明
第1段落は「使用時間が増えた」という事実（数値）。第2段落はその理由を説明している。The reason for the rise is 〜 という書き出しが、前段落を受けていることを示す。

■ 第2段落 → 第3段落：逆接
However, the school is worried about sleep.
第2段落は「勉強や連絡にも使っている」というプラスの内容。第3段落は However で始まり、心配な面（睡眠）へ切りかわる。

■ 第3段落 → 第4段落：対応・結論
This year the school did not make a new rule. Instead, 〜
問題（睡眠）に対して学校がどうしたかを述べる段落。Instead が「規則を作る代わりに」を示す。

■ 全体の骨組み
事実（増加）→ 理由 → 心配 → 対応
これは説明文でもっとも多い流れである。「事実 → 理由 → 問題 → 対策」と覚えておくと、次の段落の内容を予想しながら読める。

★ ポイント：段落の先頭の1〜2語を見るだけで関係がわかる。However（逆接）／In addition（追加）／For example（具体化）／As a result（結論）。

⚠ 注意：Instead は「その代わりに」。前の文の否定内容を受ける。did not make a new rule（新しい規則を作らなかった）→ Instead（代わりに）→ asked each class to decide its own rule（各クラスに決めさせた）。前の文が否定文であることを見落とすと、意味が逆になる。`,
      },
      {
        heading: 'グラフと本文の数値を照合する',
        body: `■ 折れ線グラフの数値
2020年80分／2021年110分／2022年140分／2023年170分／2024年190分

■ 変化の読み取り
・2020→2021は＋30分、2021→2022は＋30分、2022→2023は＋30分、2023→2024は＋20分。
・つまり増え方は最後の年だけゆるやかになっている。「増え続けているが、伸びは小さくなった」と読める。
・全体では80分から190分へ、110分増えた。約2.4倍である。

■ 本文の three hours との関係
Students who use a phone for more than three hours a day 〜
3時間＝180分。2024年の平均190分はこれを超えている。つまり平均的な生徒が「3時間以上使う生徒」にあたることになる。この計算は設問になりやすい。

■ 数値のまぎらわしさ
about fifty minutes later（約50分遅く寝る）は使用時間ではなく就寝時刻の差である。グラフの縦軸（使用時間）とは別の数字なので、混ぜてはいけない。

★ ポイント：グラフの数値と本文中の別の数値が混在するとき、単位（分・時間）と対象（使用時間・就寝時刻）を必ず確認する。

⚠ 注意：グラフから読めるのは「平均」だけである。「全員が190分使っている」わけではないし、「190分使う生徒が最も多い」わけでもない。平均と最頻値を混同した選択肢は誤りである。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、2020年から2024年までにスマートフォンの平均使用時間は何分増えたか。',
        wrongAnswer: '190分',
        trapExplanation: '2024年の数値をそのまま答えてしまう。設問が聞いているのは増加量（差）であって、最終年の値ではない。「増えたか」という語を読み落としている。',
        correctAnswer: '110分',
        correctExplanation:
          '2020年80分、2024年190分なので、190－80＝110分の増加である。グラフを読む設問では「その年の値」を聞いているのか「変化量」を聞いているのかを必ず確認する。英語では the value in 2024（値）と the increase from 2020 to 2024（増加量）で表現が分かれるので、設問文の名詞にも注目すること。',
      },
      {
        question: '本文の "This year the school did not make a new rule. Instead, teachers asked each class to decide its own rule." の内容に合うのはどちらか。ア 学校が新しい規則を作り、各クラスに守らせた　イ 学校は規則を作らず、各クラスに自分たちの規則を決めさせた',
        wrongAnswer: 'ア',
        trapExplanation: 'rule という語が二度出てくるため、「規則ができた」という印象だけが残る。did not make という否定と、Instead が前の否定を受けていることを見落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'did not make a new rule で学校が規則を作らなかったことが示され、Instead（その代わりに）が「規則を作る代わりに何をしたか」を導く。ask 〈人〉 to do は「〈人〉に〜するよう頼む」で、決めるのは各クラスである。Instead を見たら、直前の文が肯定か否定かを必ず確認する。否定文の後ろの Instead は「そうする代わりに」という置きかえを示す。',
      },
    ],
  },

  {
    id: 'koko_eigo_s357',
    subject: 'eigo',
    examType: 'koko',
    title: '段落の主題文④：段落に見出しを付ける練習',
    description: '各段落を短い日本語の見出しにまとめ、文章全体の構成表を作る',
    intro: 'ノートに写した英文をあとで見返しても、どこに何が書いてあったか思い出せません。でも段落の横に「①地球の水の量」「②家庭での使い方」と一言メモがあれば一瞬で戻れます。この見出し付けは、要旨把握と段落整序問題にそのまま効く練習です。',
    order: 857,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '見出しは10字前後の名詞句にする（「〜について」で終える）。',
      '見出しに数値や具体例を入れない。段落の話題だけを書く。',
      '見出しが2つ書きたくなったら、その段落を読みまちがえている可能性がある。',
      '段落整序問題は、見出しどうしのつながりで解く。',
      '本文に小見出しを付ける設問（選択式）は、この練習がそのまま得点になる。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Water covers about 70 percent of the earth, but only a very small part of it can be used by people. Most of it is sea water, and much of the fresh water is frozen in ice. Less than one percent is in rivers, lakes, and the ground where we can reach it.

A person in Japan uses about 200 liters of water a day at home. About 40 percent of it is used in the bath, and about 20 percent in the toilet. Drinking water is only a small part of the total.

Getting water is not easy everywhere. In some countries, people walk more than an hour to a well. Because this work is often given to girls, some of them cannot go to school.

Saving water at home is a good first step, but it is not enough. Most of the water used by a country goes to farms and factories. When we buy food that was grown far away, we are also using the water of that country.`,
      },
      {
        heading: '4つの見出しを作る',
        body: `■ 見出しの例
第1段落：地球上で使える水の少なさ
第2段落：日本の家庭での水の使いみち
第3段落：水を得るのが困難な地域の現実
第4段落：家庭の節水だけでは足りない理由

■ 見出しの作り方
①その段落で何度も出てくる語を探す（water / use / percent）。
②主題文（1文目）を10字前後に縮める。
③数値は入れない。「約200リットル」ではなく「家庭での使いみち」とする。

■ 見出しから要旨へ
「使える水は少ない → 家庭ではこう使っている → 手に入れるのが難しい地域もある → 家庭の節水だけでは不十分」
これをつなげば要旨になる。要旨は「地球上で使える水はごくわずかで、家庭の節水だけでなく、食料の輸入を通じて他国の水を使っていることにも目を向けるべきだ」となる。

■ 見出しが2つ浮かぶとき
第2段落に「日本人は200リットル使う」と「風呂が40％」の2つを書きたくなるが、後者は前者の内訳である。上位の話題（使いみち）を選ぶ。

★ ポイント：見出しは「その段落を一言で呼ぶ名前」。説明ではないので短くてよい。

⚠ 注意：第4段落の主題文は1文目 Saving water at home is a good first step, but it is not enough. である。but の後ろ（不十分だ）が要点で、見出しもそちらに合わせる。`,
      },
      {
        heading: '割合の読み取りに注意する',
        body: `この英文には割合が3か所出てくる。それぞれ「何に対する割合か」が違う。

■ about 70 percent of the earth
地球の表面のうち水が占める割合。

■ Less than one percent
地球上の水全体のうち、川・湖・地下水として使える水の割合。70％の1％ではない点に注意する。

■ About 40 percent of it is used in the bath
it＝a person in Japan uses about 200 liters of water a day at home の200リットル。つまり家庭で使う水のうち40％が風呂である。200×0.4＝80リットル。トイレは20％で40リットル。

このように、割合の「もとになる量」は段落ごとに変わる。of の後ろに何が書いてあるかを必ず確認する。

■ 最終段落の内容
Most of the water used by a country goes to farms and factories.
国全体で使う水の大半は農業と工業へ向かう。だから家庭の節水だけでは不十分である、という論理になっている。

When we buy food that was grown far away, we are also using the water of that country.
遠くで作られた食料を買うとき、その国の水も使っていることになる。これは「仮想水（バーチャルウォーター）」と呼ばれる考え方で、社会科でも扱う。

★ ポイント：割合の設問では、①もとになる量は何か ②その量はいくつか、の2点を確認してから計算する。

⚠ 注意：「日本人は1日に200リットルの水を飲む」と読むのは誤り。at home（家庭で）使う総量であり、Drinking water is only a small part of the total. と本文にも書かれている。`,
      },
    ],
    trapExamples: [
      {
        question: '本文によると、日本の家庭で1人が1日に風呂で使う水はおよそ何リットルか。',
        wrongAnswer: '40リットル',
        trapExplanation: '「風呂は約40％」の40という数字をそのままリットル数だと答えてしまう。パーセントとリットルという単位のちがいを意識せず、目に入った数字を書いている。',
        correctAnswer: '約80リットル',
        correctExplanation:
          '1人1日あたり家庭で約200リットル使い、そのうち約40％が風呂である。200×0.4＝80リットル。ちなみにトイレは20％なので200×0.2＝40リットルで、こちらが40という数字にあたる。割合が出たら「もとになる量×割合」を必ず計算し、単位（％かリットルか）を確認すること。',
      },
      {
        question: '本文の第4段落の見出しとして適切なのはどちらか。ア 家庭でできる節水の方法　イ 家庭の節水だけでは足りない理由',
        wrongAnswer: 'ア',
        trapExplanation: '1文目の前半 Saving water at home is a good first step だけを読んで見出しを作ってしまう。but の後ろに要点があることを見落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          '主題文は Saving water at home is a good first step, but it is not enough. で、but の後ろの「不十分だ」が要点である。続く2文も、国全体の水は農業・工業に使われること、輸入食料を通じて他国の水を使っていることを述べており、すべて「家庭の節水だけでは足りない」を支えている。逆接を含む主題文では、必ず but の後ろに合わせて見出しを作る。',
      },
    ],
  },

  // ───────────── 6. 物語文の読解（s358〜s362） ─────────────
  {
    id: 'koko_eigo_s358',
    subject: 'eigo',
    examType: 'koko',
    title: '物語文①：だれが・いつ・どこで（場面設定をつかむ）',
    description: '物語の冒頭で示される人物・時・場所・状況を整理し、読みちがえの土台をなくす',
    intro: '映画は最初の30秒で、季節・時間帯・登場人物の関係を映像で見せます。小説にその映像はないので、言葉が同じ役割を果たします。英語の物語文でも冒頭に手がかりが集中しています。ここを丁寧に読むと、あとの心情問題が驚くほど解きやすくなります。',
    order: 858,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '冒頭で確認するのは4つ：だれが／いつ／どこで／どんな状況か。',
      '登場人物の関係（家族・先生・店主）は、後の心情理解の前提になる。',
      '過去完了（had ＋過去分詞）は「物語の時点より前の出来事」を表す。',
      '天候・時刻・持ち物の描写は、雰囲気や人物の気持ちを暗示することが多い。',
      '会話文が始まったら、だれのせりふかを必ず確認する（said の主語）。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `It was the last Saturday of August, and the sun was still strong at five in the afternoon. Kenta stood in front of the old shop near the river with a paper bag in his hand. Inside the bag there was a small wooden box that his grandfather had made.

Kenta was fifteen. He had come to this town only three months before, and he still did not know many people. His grandfather had died in June, and his mother had asked him to bring the box to Mr. Ito, the man who ran the shop.

The door was open, but no one was inside. Kenta waited for ten minutes. Then an old man came out from the back room, looked at the box, and said nothing for a while. His hands were shaking a little.

"He finished it," the old man said at last. "He started this box in 1985, and he told me that he would give it to me when it was done."`,
      },
      {
        heading: '場面設定を4項目で書き出す',
        body: `■ いつ
It was the last Saturday of August（8月最後の土曜日）／at five in the afternoon（午後5時）／the sun was still strong（日差しがまだ強い）
→ 夏の夕方。まだ明るい。

■ どこで
in front of the old shop near the river（川の近くの古い店の前）

■ だれが
Kenta（15歳）／his grandfather（6月に死去）／his mother／Mr. Ito, the man who ran the shop（店主の老人）

■ どんな状況か
・ケンタは3か月前にこの町へ来たばかりで、知り合いが少ない。
・祖父が6月に亡くなった。
・母に頼まれ、祖父が作った木箱を伊藤さんに届けに来た。

★ ポイント：ここまでを読み終えた時点で、上の4項目をノートの余白に書けるかどうかで、後の設問の正答率が決まる。

■ 過去完了の使い分け
had come（来ていた）／had died（亡くなっていた）／had asked（頼んでいた）／had made（作っていた）
すべて「ケンタが店の前に立っている時点」より前の出来事である。物語の現在は stood / waited / came out などの過去形で書かれる。過去完了が出てきたら、時間軸を1つ戻る。

⚠ 注意：his grandfather had made（祖父が作った）と、最後のせりふの He finished it.（彼はそれを完成させた）は同じ箱の話である。1985年に作り始め、亡くなる前に完成させた、という時間の流れになる。`,
      },
      {
        heading: '描写から気持ちを読み取る',
        body: `物語文では、気持ちを直接書かずに動作や様子で表すことが多い。入試の心情問題はここから作られる。

■ His hands were shaking a little.（手が少し震えていた）
老人の気持ちを直接には書いていない。しかし、亡くなった友人が40年前に作り始めた箱を受け取った場面であることから、驚き・懐かしさ・悲しみが混じった気持ちだと読める。

■ said nothing for a while（しばらく何も言わなかった）
言葉が出ないほど心を動かされている。物語文で「沈黙」は強い感情の表れである。

■ at last（ようやく）
長い沈黙のあとで口を開いたことを示す。

■ 選択肢問題での考え方
「このときの老人の気持ちとして最も適切なものはどれか」
ア 箱を早く受け取りたいといらだっている → 10分待たせたのはケンタのほうで、根拠がない。
イ 友人が約束を果たしたことに深く心を動かされている → 手の震え・沈黙・せりふと一致。
ウ 箱の出来ばえに満足していない → 本文に不満を示す描写がない。

★ ポイント：心情の選択肢は、必ず本文の描写（動作・様子・せりふ）と1対1で対応させて選ぶ。「そう感じそうだから」で選ばない。

⚠ 注意：he told me that he would give it to me when it was done の would は「〜するつもりだ」という過去から見た未来。「くれるだろう」ではなく「くれると言っていた」という約束を表している。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の内容に合うのはどちらか。ア ケンタはこの町で生まれ育った　イ ケンタは3か月前にこの町へ来たばかりである',
        wrongAnswer: 'ア',
        trapExplanation: '祖父の知り合いに箱を届けるという場面から、昔からこの町に住んでいると思いこんでしまう。He had come to this town only three months before. という過去完了の一文を読み飛ばしている。',
        correctAnswer: 'イ',
        correctExplanation:
          'had come to this town only three months before は「（その時点の）3か月前にこの町へ来たばかりだった」。only と still did not know many people（まだ知り合いが少なかった）も、来たばかりであることを裏づけている。物語文では過去完了の一文に人物の背景が書かれていることが多いので、必ず拾うこと。',
        },
      {
        question: '本文の "His hands were shaking a little." の His がだれを指すか答えよ。',
        wrongAnswer: 'ケンタ',
        trapExplanation: '物語の主人公がケンタなので、代名詞はすべてケンタを指すと思いこんでしまう。直前の文の主語が an old man に変わっていることを見落としている。',
        correctAnswer: '老人（Mr. Ito）',
        correctExplanation:
          '直前の文は Then an old man came out from the back room, looked at the box, and said nothing for a while. で、主語は an old man。その流れで His hands were shaking と続くので、震えていたのは老人の手である。物語文では主語が交代する箇所が心情問題の急所になる。段落の途中で主語が変わったら、そこに印を付けておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s359',
    subject: 'eigo',
    examType: 'koko',
    title: '物語文②：気持ちの変化を三つの点で追う',
    description: '最初の気持ち・きっかけ・最後の気持ちの三点をおさえ、心情変化の設問に答える',
    intro: 'テストの心情問題でよく問われるのは「気持ちが変わった理由」です。物語には必ず、変化の前・きっかけ・変化の後という三つの点があります。この三点を線で結べば、選択肢のどれが本文と一致するかは機械的に決まります。感覚で選ぶ必要はありません。',
    order: 859,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '心情変化は「前の気持ち → きっかけ → 後の気持ち」の三点で整理する。',
      'きっかけは出来事か他人の言葉。物語の中盤に置かれることが多い。',
      '直接的な感情語（afraid / glad / sad）だけでなく、体の描写（hands became cold）も気持ちを表す。',
      '最後まで問題が解決しない話もある。「勝てなかったが、行ってよかった」型に注意。',
      '設問「なぜ〜したのか」は、きっかけの部分を答えとして書く。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Mika did not want to join the speech contest. Her teacher chose her because her English test scores were the best in the class, but Mika hated standing in front of people. When she practiced at home, her voice was fine. When she stood on the stage, her hands became cold and her words disappeared.

Two weeks before the contest, she asked her teacher to let another student go instead. Her teacher did not answer at once. Instead, she took Mika to the music room, where a first-year student was practicing the piano alone. The girl played the same eight bars again and again.

"She will play at the school festival," the teacher said. "Last year she could not play in front of anyone."

Mika watched for a while. She did not say anything on the way back to the classroom.

On the day of the contest, Mika still felt afraid. Her hands were cold again. But when she started to speak, she remembered the sound of those eight bars, and she did not stop until the end. She did not win a prize. She was still glad that she had gone up on the stage.`,
      },
      {
        heading: '三点で整理する',
        body: `■ 前の気持ち（第1・2段落）
did not want to join（出たくない）／hated standing in front of people（人前に立つのがきらい）／her hands became cold（手が冷たくなる）／asked her teacher to let another student go instead（代わってほしいと頼んだ）
→ 逃げたい気持ち。

■ きっかけ（第2・3段落）
先生は答えず、音楽室へ連れて行った。1年生が同じ8小節を何度もくり返し練習していた。先生の言葉：「去年、彼女は人前で弾けなかった」。
→ 自分と同じ状態から前に進もうとしている人を見た。

■ 後の気持ち（最終段落）
still felt afraid（まだこわかった）／Her hands were cold again（また手が冷たかった）／did not stop until the end（最後まで話しきった）／was still glad that she had gone up on the stage（それでも舞台に立ったことをうれしく思った）
→ こわさは消えていないが、逃げずにやりとげた。

★ ポイント：この物語の要点は「こわさが消えたこと」ではなく「こわいまま行動できたこと」である。心情変化の設問では、この差が正誤を分ける。

⚠ 注意：She did not win a prize.（入賞しなかった）とある。「努力が実って優勝した」型の選択肢は誤りである。物語文では、結果より心の変化が問われる。`,
      },
      {
        heading: '先生の行動の意味を読む',
        body: `■ 先生は説得していない
Her teacher did not answer at once. Instead, she took Mika to the music room 〜
先生はミカに「がんばれ」とも「出なさい」とも言っていない。ただ音楽室へ連れて行き、1年生の様子を見せただけである。

■ 直接言わないことの効果
物語文では、登場人物が言葉で説明しない場面がしばしば山場になる。読者（と主人公）に自分で気づかせるためである。設問「先生はなぜミカを音楽室へ連れて行ったのか」の答えは、
「ミカと同じように人前で演奏できなかった1年生が、くり返し練習して学校祭で弾こうとしている姿を見せ、ミカ自身に考えさせるため」となる。

■ ミカの沈黙
She did not say anything on the way back to the classroom.
何も言わなかったが、この沈黙は「考えている」ことを示す。物語文の沈黙は、感情が動いた合図である。

■ 8小節の記憶
she remembered the sound of those eight bars
本番でミカを支えたのは先生の言葉ではなく、くり返し聞いた8小節の音である。ここが「きっかけ」と「結果」を結ぶ線になっている。

★ ポイント：「なぜ〜したのか」を問われたら、本文中の出来事（人物の行動）を答えにする。自分の解釈や一般論を書かない。

⚠ 注意：the same eight bars again and again の bars は「（音楽の）小節」。「棒」「酒場」と訳すと意味が通らない。文脈から意味を決める練習にもなっている。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の内容に合うのはどちらか。ア ミカはスピーチコンテストで優勝した　イ ミカは入賞しなかったが、舞台に立ったことをうれしく思った',
        wrongAnswer: 'ア',
        trapExplanation: '努力して本番をやりとげる話なので、結末は成功だろうと決めつけてしまう。She did not win a prize. という一文を読み飛ばしている。',
        correctAnswer: 'イ',
        correctExplanation:
          '最終段落に She did not win a prize.（入賞しなかった）とはっきり書かれており、その直後に She was still glad that she had gone up on the stage.（それでも舞台に立ったことをうれしく思った）と続く。物語文の結末は「成功」とは限らない。結果と気持ちを分けて読み、本文に書かれた事実だけで判断すること。',
      },
      {
        question: '本文の内容として正しいのはどちらか。ア 本番ではもう緊張しなくなっていた　イ 本番でも緊張していたが、最後まで話しきった',
        wrongAnswer: 'ア',
        trapExplanation: '「成長した＝こわさが消えた」と考えてしまう。しかし本文には still felt afraid / Her hands were cold again とあり、恐怖は残ったままである。',
        correctAnswer: 'イ',
        correctExplanation:
          'On the day of the contest, Mika still felt afraid. Her hands were cold again. と、第1段落と同じ体の反応がくり返し書かれている。作者はわざと同じ描写を置いて「気持ちは変わっていない」ことを示し、そのうえで did not stop until the end と行動の変化を書いている。心情変化の問題では、変わったものと変わらなかったものを分けて読む。',
      },
    ],
  },

  {
    id: 'koko_eigo_s360',
    subject: 'eigo',
    examType: 'koko',
    title: '物語文③：出来事の順序と時制（回想を見抜く）',
    description: '過去完了や時を表す語から、出来事の前後関係を正しく並べ直す',
    intro: '物語は時間どおりに進むとは限りません。「その夜、姉が3年前のノートを見せた」と書かれれば、話は一度過去へ飛びます。英語ではこの飛躍を過去完了ではっきり示します。時制の目印を拾えば、出来事を正しい順番に並べ直せます。並べかえは入試の定番設問です。',
    order: 860,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '過去形＝物語の現在。過去完了（had ＋過去分詞）＝それより前の出来事。',
      '時を表す語（three years before / that night / the next morning）を必ず拾う。',
      '出来事の並べかえ問題は、時を表す語＋時制の二つで判定する。',
      '数値が時間とともに変化する物語では、表かグラフに整理する。',
      'ago は現在から見た過去、before は物語の過去から見たさらに前を表す。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Ryo joined the swimming club in April. At his first practice, he swam 50 meters in 45 seconds. He was the slowest of the ten first-year members, and he thought about leaving the club.

His coach did not talk about speed. He told Ryo to swim slowly and to count his strokes. In May, Ryo took 42 strokes for 50 meters. In June, he took 38. His time in May was 43 seconds, and in June it was 40 seconds.

In July, something strange happened. His time became 38 seconds, but he was not happy. He had lost to the same boy again at the club meet.

That night, his sister showed him an old notebook. It was hers from three years before, when she was in the club. Her first time was 48 seconds, slower than Ryo's. She had become the captain in her third year.

In August, Ryo swam 50 meters in 36 seconds. He still could not beat the fastest boy in his group, but for the first time he wanted to stay in the club.`,
        figureId: 'lf_kokoeigoext10_360',
      },
      {
        heading: '時間の軸を引く',
        body: `■ 物語の現在（過去形）
4月：入部、50m 45秒、10人中最下位、やめようかと思う
5月：42ストローク、43秒
6月：38ストローク、40秒
7月：38秒。しかし同じ相手にまた負けた
その夜：姉が古いノートを見せる
8月：36秒。初めて続けたいと思った

■ 物語より前の出来事（過去完了）
He had lost to the same boy again.（それまでにも同じ相手に負けていた）
It was hers from three years before（3年前の姉のノート）
She had become the captain in her third year.（姉は3年生でキャプテンになっていた）

■ ago と before の違い
three years ago なら「（今から）3年前」。three years before は「（そのときから）3年前」。物語の中では before を使う。この区別は英作文でも問われる。

■ 並べかえ問題の解き方
ア 姉が自分のノートを見せた／イ リョウが水泳部に入った／ウ リョウが初めて部に残りたいと思った／エ リョウがクラブの大会で負けた
時を表す語で判定：イ（April）→ エ（July）→ ア（That night）→ ウ（August）

★ ポイント：時を表す語を丸で囲みながら読むと、並べかえ問題は本文を読み返さずに解ける。

⚠ 注意：ストローク数（42→38）と秒数（43→40）が同じ段落に出てくる。単位（回数か秒か）を混同しないこと。`,
      },
      {
        heading: 'グラフから読み取れることと読み取れないこと',
        body: `■ グラフの数値（50mのタイム）
4月45秒／5月43秒／6月40秒／7月38秒／8月36秒
5か月で9秒縮まっている。折れ線は右下がりで、下がるほど速くなっていることを表す。

■ 読み取れること
・毎月タイムが縮んでいる（一度も遅くなっていない）。
・5月→6月の3秒、6月→7月の2秒、7月→8月の2秒と、縮み幅はほぼ一定である。
・姉の最初のタイム48秒は、リョウの最初のタイム45秒より遅い。

■ 読み取れないこと
・他の部員のタイム（本文に数字がない）。
・8月にリョウが何位だったか（still could not beat the fastest boy とあるだけ）。
・9月以降のタイム。

グラフの設問では「グラフから読み取れないもの」を選ばせる問題がよく出る。本文にも図にもない数値を推測して答えないこと。

■ タイムのグラフは「下が良い」
記録の折れ線は、下がるほど成績が良い。売上や人数のグラフとは逆なので、「減っている＝悪い」と早合点しない。縦軸のラベル（秒）を確認する習慣をつける。

★ ポイント：グラフを読む前に、①縦軸が何か ②大きいほうが良いのか小さいほうが良いのか、の2点を確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、リョウの4月から8月までのタイムの変化として正しいのはどちらか。ア 9秒速くなった　イ 9秒遅くなった',
        wrongAnswer: 'イ',
        trapExplanation: '折れ線が右下がりなので「下がった＝悪くなった」と考えてしまう。縦軸が秒（タイム）であり、値が小さいほど速いことを確認していない。',
        correctAnswer: 'ア',
        correctExplanation:
          '4月45秒、8月36秒なので45－36＝9秒縮まっている。タイムのグラフは値が小さいほど良い記録なので、右下がりは「速くなった」を意味する。グラフを読むときは縦軸のラベルと単位を先に確認し、増加と改善が一致しない種類のデータ（タイム・失点・欠席数など）に注意する。',
      },
      {
        question: '本文の "Her first time was 48 seconds, slower than Ryo\'s." から、姉とリョウのどちらの最初のタイムが速かったか。',
        wrongAnswer: '姉',
        trapExplanation: '姉が3年生でキャプテンになったという情報から「姉のほうが速い」と思いこんでしまう。slower than という比較級の向きを確認していない。',
        correctAnswer: 'リョウ（45秒）のほうが速かった',
        correctExplanation:
          'Her first time was 48 seconds, slower than Ryo\'s. は「姉の最初のタイムは48秒で、リョウのより遅かった」。リョウの最初は45秒である。Ryo\'s は Ryo\'s first time の省略。姉が後にキャプテンになったのは3年目の話で、最初のタイムとは別の情報である。比較級は必ず「どちらがどうなのか」を語順どおりに確認すること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s361',
    subject: 'eigo',
    examType: 'koko',
    title: '物語文④：会話文を読む（だれのせりふか・省略）',
    description: '引用符の連続する場面で話者を追い、省略の多い口語表現の意味を補って読む',
    intro: '会話が続く場面では「said」が省かれ、引用符だけが交互に並びます。読み手は行が変わるたびに話し手が交代するという約束を知っている前提です。さらに口語では語がどんどん省かれます。この二つの約束を知らないと、会話文だけ点が取れないという事態になります。',
    order: 861,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '英語の会話では、行（段落）が変わるたびに話し手が交代する。',
      'said が省略されても、交互の原則で話者を追える。',
      '口語では主語や動詞が省かれる（"Nothing." "Four thirty."）。前の文から補う。',
      '相手の言葉をさえぎる短い返事（No. / I said 〜）は強い感情を表す。',
      '会話の中の would / could は、丁寧さや仮定を表すことがある。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Sara found her brother in the kitchen at eleven at night. He was making rice balls.

"What are you doing?" she asked.
"Nothing," Takumi said. "Go to bed."
"You never cook."
"I said go to bed."

Sara did not move. Takumi put the rice balls into a small box and closed it.

"They are for tomorrow," he said at last. "Mom has to leave at five in the morning. She has not had breakfast for a week."
"Why didn't you tell me?"
"Because you would want to help, and you have your exam."

Sara looked at the box for a while.

"Wake me up at four thirty," she said.
"No."
"Then I will set my own alarm, and you cannot stop me."

Takumi looked at his sister. He almost smiled.

"Four thirty," he said. "Bring the salt."`,
      },
      {
        heading: '話者を追う',
        body: `■ 交互の原則
1行目 "What are you doing?" → she asked とあるのでサラ。
2行目 "Nothing," Takumi said. → タクミ。
3行目 "You never cook." → said がないが、行が変わったのでサラ。
4行目 "I said go to bed." → タクミ。

以下も同じで、行が変わるたびに交代する。地の文（Sara did not move. など）が入ると、いったん流れが切れるが、その次のせりふはふつう直前に動作をした人物か、その相手である。ここでは Takumi put the rice balls into a small box の直後に "They are for tomorrow," he said とあり、he＝タクミと確認できる。

■ 省略を補う
"Nothing." → I am doing nothing.（何もしていない）
"Four thirty." → I will wake you up at four thirty.（4時半に起こす）
"Bring the salt." → 命令文。主語 you が省略されている（文法上の省略）。

■ 強い感情の表れ
"I said go to bed." → 同じ命令をくり返す＝いらだち、または見られたくない気持ち。
"No." → 一語での拒否。
He almost smiled.（ほとんど笑いかけた）→ 折れた瞬間。

★ ポイント：会話文では、せりふの長さと語調が感情を表す。短く切り返すほど感情が強い。

⚠ 注意：sara と takumi の関係は her brother（サラの兄または弟）と書かれている。英語の brother だけでは年上か年下かわからない。「兄」と決めつけて解答すると、記述問題で減点されることがある。`,
      },
      {
        heading: '会話に隠れた事情を読み取る',
        body: `この場面で本当に起きていることは、せりふの外にある。

■ 事実の整理
・母は毎朝5時に家を出なければならない。
・母は1週間、朝食をとっていない。
・タクミは夜11時におにぎりを作っている。母のためである。
・サラには試験がある。だからタクミは言わなかった。

■ Because you would want to help, and you have your exam.
この would は「〜したがるだろう（から）」という推量。「（言えば）君は手伝いたがるだろうし、君には試験がある」。つまりタクミは、サラに負担をかけまいとして黙っていた。

■ Mom has not had breakfast for a week.
現在完了の継続用法。「1週間、朝食をとっていない（今も）」。for a week（1週間）という期間が現在完了と結びつく。この一文が、タクミが行動を起こした理由である。

■ 最後のやりとりの意味
サラ「4時半に起こして」→ タクミ「だめだ」→ サラ「じゃあ自分で目覚ましをかける」→ タクミ「4時半。塩を持ってきて」
タクミが折れて、二人でやることになった。Bring the salt. は「明日は一緒におにぎりを作ろう」という意味の、遠回しな受け入れである。

★ ポイント：会話文の設問では「二人の関係がどう変わったか」がよく問われる。せりふそのものより、直前直後の動作（He almost smiled.）が根拠になる。

⚠ 注意：Why didn't you tell me? は「なぜ言ってくれなかったの」。否定疑問文で、責める気持ちを含む。ふつうの疑問文（Why did you tell me?）とは意味が正反対になるので、not を見落とさないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の "You never cook." というせりふを言ったのはだれか。',
        wrongAnswer: 'タクミ',
        trapExplanation: '直前の行の "Nothing," Takumi said. に Takumi という名前があるため、次のせりふも同じ人物だと思ってしまう。会話は行ごとに話者が交代するという約束を知らない。',
        correctAnswer: 'サラ',
        correctExplanation:
          '英語の会話文では、行（段落）が変わるたびに話し手が交代する。1行目がサラ、2行目がタクミなので、3行目はサラである。内容から見ても「あなたは料理なんてしないのに」と言うのは、料理をしている本人ではなく、それを見ている側である。said が省略されていても、交互の原則と内容の両方で確認する。',
      },
      {
        question: '本文の "Why didn\'t you tell me?" に対するタクミの返事の意味として正しいのはどちらか。ア サラが手伝いたがるだろうし、試験があるから言わなかった　イ サラは手伝いたがらないだろうから言わなかった',
        wrongAnswer: 'イ',
        trapExplanation: 'Because you would want to help の would を「〜しないだろう」と否定的に取ってしまう。あるいは「言わなかった」という否定に引きずられて、後ろの内容まで否定で読んでしまう。',
        correctAnswer: 'ア',
        correctExplanation:
          'you would want to help は「君は手伝いたがるだろう」という肯定の推量である。手伝いたがることが分かっているからこそ、試験を控えたサラに知らせなかった、という思いやりの理由になっている。否定文の後ろに because が続くとき、because の中身まで否定されているわけではない。節ごとに肯定・否定を確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s362',
    subject: 'eigo',
    examType: 'koko',
    title: '物語文⑤：主題（この話は何を伝えたいか）をつかむ',
    description: '出来事の要約ではなく、話全体を通して作者が示した価値観を読み取る',
    intro: '「この話から何がわかるか」と聞かれると、あらすじを書いてしまいがちです。しかし問われているのは、出来事そのものではなく、その出来事を通して見えてくる考え方です。主人公の何が変わったのかを一言で言えれば、それが主題です。',
    order: 862,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '主題は「出来事の要約」ではなく「主人公の変化が示す価値観」。',
      '最終段落（とくに最後の一文）に主題が凝縮されていることが多い。',
      '冒頭の考えと結末の考えを比べると、変化がはっきりする。',
      '主題を表す選択肢は抽象的な言い方になる。具体的すぎる選択肢は要約にすぎない。',
      '主人公が「気づいた」ことと「解決した」ことは別。解決しないまま終わる話もある。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Every morning, an old woman sat on a bench in front of the station and sold flowers. She did not call out to anyone. She just put the flowers in old cans and waited.

Hiroshi passed her every day on his way to work. He never bought anything. He thought that buying flowers was a waste of money.

One rainy morning in October, the bench was empty. It was empty the next day, too. On the third day, Hiroshi asked the man at the newsstand about her. The man said that she had gone into the hospital.

That evening, Hiroshi bought a small plant at a shop near his house. He did not know why. He put it on the desk in his room, and he watered it every morning before work.

Three weeks later, the old woman came back. Hiroshi bought his first flowers from her. She said only, "Thank you," and gave him one more flower than he had paid for.

Now Hiroshi still does not think that flowers are useful. But he knows that some things do not need to be useful.`,
      },
      {
        heading: '冒頭と結末を比べる',
        body: `■ 冒頭のヒロシ
He never bought anything. He thought that buying flowers was a waste of money.（花を買うのは金のむだだと思っていた）

■ 結末のヒロシ
Now Hiroshi still does not think that flowers are useful. But he knows that some things do not need to be useful.（今も花が役に立つとは思っていない。しかし、役に立つ必要のないものもあると知っている）

■ 変わったもの・変わらなかったもの
変わらない：花が実用的でないという判断
変わった：実用性だけがものの価値ではないという考え方

この差が主題である。「花は役に立つと気づいた」ではない点に注意する。本文は still does not think that flowers are useful とはっきり書いている。

■ 主題を一文で
「ものの価値は役に立つかどうかだけでは決まらない」

★ ポイント：主題は「変化した部分」に宿る。冒頭の一文と結末の一文を並べて書き出すと、変化が目に見える。

⚠ 注意：「花屋のおばあさんが入院した」「ヒロシが植物を買った」はあらすじであって主題ではない。主題を問う設問にあらすじを書くと点にならない。`,
      },
      {
        heading: '行動の変化から気持ちを推測する',
        body: `この物語では、ヒロシの気持ちがほとんど書かれていない。書かれているのは行動だけである。

■ He did not know why.（なぜだかわからなかった）
植物を買った理由を本人が説明していない。ここが物語の中心である。理屈では説明できない気持ちが動いたことを示す。

■ he watered it every morning before work
毎朝、仕事の前に水をやる。「金のむだ」と言っていた人が、手間をかけるようになった。行動が変わっている。

■ gave him one more flower than he had paid for
「彼が払った分より1本多く花を渡した」。おばあさんの言葉は "Thank you." だけである。花1本が言葉の代わりになっている。

■ 設問例と答え方
Q：ヒロシはなぜ小さな植物を買ったと考えられるか。
A：毎朝見かけていた花売りのおばあさんがいなくなり、その不在を通して、花を売る姿が自分の生活の一部になっていたことに気づいたから。
（本文に He did not know why とあるので、本文の記述だけでは断定できない。「〜と考えられる」という問い方のときは、本文の事実（ベンチが空だった・入院した・その日の夕方に買った）を根拠に書く。）

★ ポイント：気持ちが書かれていない物語では、行動の変化そのものが答えの根拠になる。

⚠ 注意：one more flower than he had paid for の than 以下は「彼が支払った（本数）より」。過去完了は、花を渡した時点より前に支払っていたことを示す。単に「1本の花をくれた」ではない。`,
      },
    ],
    trapExamples: [
      {
        question: 'この物語の主題として最も適切なのはどちらか。ア ヒロシは花が役に立つものだと気づいた　イ 役に立つかどうかだけがものの価値ではない',
        wrongAnswer: 'ア',
        trapExplanation: '「主人公が考えを改めた話」だと大づかみにして、改めた中身まで確認せずに選んでしまう。本文最終段落の still does not think that flowers are useful を読み落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          '最終段落は Now Hiroshi still does not think that flowers are useful. But he knows that some things do not need to be useful. である。花が有用だと考えを変えたのではなく、「有用でなくてもよいものがある」と考えるようになった、というのがこの物語の主題である。主題を問う設問では、最終段落の逆接の後ろを必ず確認する。',
      },
      {
        question: '本文の "gave him one more flower than he had paid for" の意味として正しいのはどちらか。ア 彼が支払った本数より1本多く花を渡した　イ 花を1本渡し、代金を受け取った',
        wrongAnswer: 'イ',
        trapExplanation: 'one more flower の one だけを見て「1本の花」と読み、than 以下の比較の部分を無視してしまう。one more＝「もう1本」という比較の意味を落としている。',
        correctAnswer: 'ア',
        correctExplanation:
          'one more flower than 〜 は「〜より1本多い花」という比較表現である。he had paid for（彼が代金を払った分）より1本多く渡した、つまりおまけをした、という意味になる。この行為が、She said only, "Thank you." という短い言葉を補っており、物語の結末として重要である。〈数詞＋比較級＋than〉の形は差を表すことを覚えておく。',
      },
    ],
  },
  // ───────────── 7. 説明文・論説文の読解（s363〜s367） ─────────────
  {
    id: 'koko_eigo_s363',
    subject: 'eigo',
    examType: 'koko',
    title: '説明文①：定義 → 具体例 → まとめの型',
    description: '見慣れない語を定義から理解し、続く具体例でその中身を確かめる読み方を身につける',
    intro: '知らない専門用語が題名になっている英文を見ると身構えますが、そういう文章ほど親切に書かれています。筆者は読者が知らないと分かっているので、必ず最初に説明を置くからです。定義と例の位置さえわかれば、初めて見る話題でも読めます。',
    order: 863,
    studyPeriod: '中3夏',
    targetLevel: 'oyo',
    keyPoints: [
      '説明文の基本型は「定義 → 具体例（2つ以上） → まとめ」。',
      '定義の合図：〜 means 〜／〜 is 〜／This is called 〜／in other words。',
      '具体例の合図：The most famous example is 〜／Another example is 〜／For instance。',
      '例が2つ以上あるときは、共通点が筆者の言いたいことである。',
      'まとめの段落では、現在完了や現在形の一般論が使われる。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Have you ever heard of biomimicry? The word means making new things by copying nature. Engineers look at plants and animals, find a useful design, and use the same idea in a machine or a building.

The most famous example in Japan is a train. In the 1990s, the Shinkansen made a loud noise when it came out of a tunnel. An engineer who liked birds noticed that a kingfisher can enter water almost without a splash. Its beak is long and thin. The team gave the train a similar nose, and the noise became smaller. The new train also used less electricity.

Another example is a kind of tape. The feet of a gecko have millions of very small hairs, and these hairs let the animal walk on a wall. Scientists made a tape with the same structure. It sticks without glue and can be used again and again.

Nature has been testing designs for millions of years. When we copy them, we are using the results of a very long experiment.`,
      },
      {
        heading: '定義と例をつなぐ',
        body: `■ 定義（第1段落）
The word means making new things by copying nature.
biomimicry＝自然をまねて新しいものを作ること。means の後ろが定義である。知らない語が題名や1文目に出てきたら、means / is / is called を探す。

さらに次の文が定義を具体的な手順に言いかえている。
Engineers look at plants and animals, find a useful design, and use the same idea 〜
①観察する ②役に立つ設計を見つける ③同じ考えを機械や建物に使う

■ 例1（第2段落）：新幹線とカワセミ
問題：トンネルから出るときの大きな音
発見：カワセミはほとんど水しぶきを立てずに水に入る。くちばしが細長い。
応用：似た形の先頭部にした
結果：音が小さくなり、電気の使用量も減った

■ 例2（第3段落）：ヤモリとテープ
発見：ヤモリの足には無数の細かい毛があり、壁を歩ける
応用：同じ構造のテープを作った
結果：のりなしでくっつき、何度も使える

■ 二つの例の共通点
どちらも「自然の観察 → 人工物への応用 → 性能の向上」という同じ流れである。共通点こそが筆者の主張であり、最終段落の Nature has been testing designs for millions of years. につながる。

★ ポイント：例が2つ以上あるときは、必ず共通点を探す。それが要旨になる。

⚠ 注意：a kingfisher can enter water almost without a splash の almost without 〜 は「ほとんど〜なしで」。「まったくしぶきを立てない」と言い切ってはいない。`,
      },
      {
        heading: 'まとめの段落の読み方',
        body: `■ 現在完了進行形
Nature has been testing designs for millions of years.
「自然は何百万年も設計を試し続けてきた」。has been ＋ -ing は「過去から今まで続いている」ことを表す。for millions of years という期間の表現とセットで使われる。

■ 比喩をつかむ
we are using the results of a very long experiment
自然界の進化を「とても長い実験」にたとえている。実際に実験をしているわけではない。比喩は説明文の結びでよく使われ、内容一致問題では「自然が実験をしている」と書いた選択肢が誤りとして出る。

■ 設問例
Q：Why does the writer say that nature has been testing designs?
A：Because living things have changed over millions of years, and only useful designs have remained.（何百万年もかけて生き物が変化し、役に立つ設計だけが残ってきたから）

■ 説明文で問われる3種類の設問
①用語の定義（biomimicry とは何か）
②例の内容（新幹線の何がどう変わったか）
③筆者の主張（なぜ自然をまねるのがよいのか）
どの設問も、定義・例・まとめのどこを見ればよいかが決まっている。段落の役割を判定してから探す。

★ ポイント：説明文は「どこに何が書いてあるか」が型で決まっている。型を知っていれば、探す時間はほとんどかからない。

⚠ 注意：these hairs let the animal walk on a wall の let は「〜させてやる・〜できるようにする」。〈let ＋目的語＋動詞の原形〉の形。to walk とはならない。`,
      },
    ],
    trapExamples: [
      {
        question: '本文によると、新幹線の先頭部の形は何をまねたものか。ア カワセミのくちばし　イ ヤモリの足',
        wrongAnswer: 'イ',
        trapExplanation: '二つの例が並んでいるため、どちらの例がどの製品と対応するかが混ざってしまう。段落ごとに例が分かれていることを意識せずに読んでいる。',
        correctAnswer: 'ア',
        correctExplanation:
          '第2段落が新幹線とカワセミ（kingfisher）の例、第3段落がヤモリ（gecko）とテープの例である。The team gave the train a similar nose の similar は、直前に述べられたカワセミのくちばし（long and thin）に似た、という意味。例が複数ある説明文では、「例①＝何と何」「例②＝何と何」と対応表を作りながら読むと混同しない。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア 新しい新幹線は音が小さくなり、電気の使用量も減った　イ 新しい新幹線は音は小さくなったが、電気をより多く使うようになった',
        wrongAnswer: 'イ',
        trapExplanation: 'used less electricity の less を「もっと」と取りちがえる。less は little の比較級で「より少ない」であり、more とは逆の意味である。',
        correctAnswer: 'ア',
        correctExplanation:
          'The new train also used less electricity. は「新しい列車は電気の使用量も少なくなった」。also（〜も）は前の文の「音が小さくなった」に加えての効果を示している。less（より少ない）と more（より多い）、fewer（数がより少ない）は読解で頻出なので、必ず区別する。also / too / as well は「同じ方向の内容が続く」合図でもある。',
      },
    ],
  },

  {
    id: 'koko_eigo_s364',
    subject: 'eigo',
    examType: 'koko',
    title: '説明文②：比較・対照の英文を表に整理する',
    description: '複数の対象を比べる英文で、条件が変わると結論も変わることを読み取る',
    intro: '「電車のほうが環境にやさしい」と聞けばそのとおりに思えますが、4人で乗った車と、乗客のいないバスではどうでしょう。比較の文章では、条件を一つ変えるだけで答えがひっくり返ります。どの条件での比較なのかを見張りながら読む練習をします。',
    order: 864,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '比較の英文では「何と何を」「どの条件で」比べているかを必ず確認する。',
      'per person（1人あたり）／per kilometer（1kmあたり）という単位の表現に注意する。',
      '条件が変わると結論も変わる（4人乗りの車 vs 空のバス）。',
      'not always（いつも〜とは限らない）は部分否定。全面否定と区別する。',
      '筆者の結論は最終段落にあり、「〜が大事だ」という形でまとめられる。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `How much carbon dioxide does each way of traveling produce? A study measured the amount for one person traveling one kilometer. A plane produced 130 grams, a car with one person produced 120 grams, a bus produced 60 grams, and a train produced 20 grams.

The difference between a car and a train is large. However, the numbers change when more people ride together. If four people travel in the same car, the amount for each person becomes about 30 grams. A car is not always worse than a bus.

Trains are the best choice for long trips between cities. On the other hand, they cannot go everywhere. In areas with few people, a bus that runs three times a day may be the only choice, and an empty bus produces more carbon dioxide per person than a car.

The lesson is not that we should never use a car. The lesson is that the number of people in a vehicle matters as much as the kind of vehicle.`,
        figureId: 'lf_kokoeigoext10_364',
      },
      {
        heading: '条件をそろえて比べる',
        body: `■ 比較の条件を確認する
A study measured the amount for one person traveling one kilometer.
「1人が1km移動するときの量」という条件である。この条件をそろえないと比較にならない。per person per kilometer（1人1kmあたり）という単位を頭に入れる。

■ グラフの数値
飛行機130g／自動車（1人乗車）120g／バス60g／鉄道20g

■ 条件を変えるとどうなるか
If four people travel in the same car, the amount for each person becomes about 30 grams.
120÷4＝30。1人あたりに直すと、バスの60gより少なくなる。だから A car is not always worse than a bus.（車がいつもバスより悪いとは限らない）となる。

■ さらに条件を変える
an empty bus produces more carbon dioxide per person than a car
乗客の少ないバスは、1人あたりでは車より多くなる。バスという乗り物が悪いのではなく、乗っている人数の問題である。

★ ポイント：比較の文章で結論がひっくり返ったら、必ず「どの条件が変わったか」を確認する。ここでは乗車人数である。

⚠ 注意：not always は部分否定で「いつも〜とは限らない」。「決して〜ない（never）」ではない。not all（全部が〜とは限らない）、not both（両方とも〜とは限らない）も同じ型である。選択肢で全面否定に変えるひっかけが頻出する。`,
      },
      {
        heading: '筆者の結論をつかむ',
        body: `■ 最終段落の構造
The lesson is not that we should never use a car.（教訓は「車を決して使うな」ということではない）
The lesson is that the number of people in a vehicle matters as much as the kind of vehicle.（乗り物の種類と同じくらい、乗っている人数が重要だということだ）

not A but B（AではなくB）の形を2文に分けて書いている。前半で誤解を否定し、後半で本当の主張を述べる、論説文の定番の閉じ方である。

■ as much as 〜
matters as much as the kind of vehicle は「乗り物の種類と同じくらい重要である」。more than ではないので、「人数のほうが重要だ」とまでは言っていない。選択肢が「人数のほうが乗り物の種類より重要だ」となっていたら言いすぎである。

■ 数値をどこまで使えるか
・飛行機130gは1人1kmあたりの数字である。「飛行機のほうが必ず環境に悪い」と一般化はできない。長距離では他の手段が使えない場合もある。
・本文は「4人乗りなら約30g」と書いているが、これは車の数値を4で割った概算である。about（約）が付いていることを見落とさない。

★ ポイント：数値を含む論説文では、①条件 ②単位 ③概数かどうか、の3点を確認してから選択肢と照合する。

⚠ 注意：On the other hand（他方では）は対比の合図。ここでは「鉄道は都市間の長距離には最適だが、他方でどこへでも行けるわけではない」と、同じ対象の長所と短所を並べている。別のものとの比較とは限らない。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、4人が同じ車で移動した場合、1人1kmあたりの二酸化炭素はおよそ何グラムか。',
        wrongAnswer: '120グラム',
        trapExplanation: 'グラフの「自動車」の棒の値をそのまま答えてしまう。グラフの120gが「1人で乗ったとき」の数値であるという条件を読み落としている。',
        correctAnswer: '約30グラム',
        correctExplanation:
          'グラフの数値は a car with one person（1人乗車の車）についてのもので、120g である。4人で乗れば1人あたりは 120÷4＝30g になり、本文にも becomes about 30 grams と書かれている。グラフの数値には必ず条件が付いている。本文中の条件（with one person）を確認してから数値を使うこと。',
      },
      {
        question: '本文の "A car is not always worse than a bus." の意味として正しいのはどちらか。ア 車がバスより悪いということは決してない　イ 車がいつもバスより悪いとは限らない',
        wrongAnswer: 'ア',
        trapExplanation: 'not と always をそれぞれ別に処理せず、「まったく〜ない」という全面否定として読んでしまう。日本語でも「いつも〜ではない」と「決して〜ない」の差はあいまいになりやすい。',
        correctAnswer: 'イ',
        correctExplanation:
          'not always は部分否定で「いつも〜とは限らない」。この文脈では、1人乗車なら車のほうが多いが、4人乗車なら少なくなる、という条件つきの話である。全面否定なら A car is never worse than a bus. となる。not all / not both / not every / not always は部分否定であり、内容一致問題で全面否定にすりかえた選択肢が頻出する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s365',
    subject: 'eigo',
    examType: 'koko',
    title: '説明文③：原因と結果の連鎖を矢印でつなぐ',
    description: '一つの変化が次の変化を呼ぶ「連鎖」を、順番どおりに追って整理する',
    intro: 'ラッコがいなくなったら海の森が消えた、と言われてもすぐには結びつきません。しかし間にウニをはさむと一本の線になります。原因と結果が数珠つなぎになっている英文は、途中を一つ飛ばすだけで意味が通らなくなります。矢印でつなぐ読み方を覚えましょう。',
    order: 865,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '因果の連鎖はA→B→C→Dと矢印で書き出す。頭の中だけで追わない。',
      '連鎖の合図：After 〜 / With no 〜 / As a result / and so。',
      '「〜がいなくなると〜が増える」という逆向きの変化に注意する。',
      '元に戻る話（回復）も同じ連鎖を逆向きにたどる。',
      '最終段落の一般化（keystone species）が要旨になる。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `On the west coast of North America, there are large underwater forests of a plant called kelp. Kelp can grow thirty centimeters in a day, and many kinds of fish live in it.

In the nineteenth century, hunters killed almost all the sea otters in the area, because their fur was expensive. After the otters disappeared, something happened that no one expected. The number of sea urchins increased quickly, because sea otters eat sea urchins.

Sea urchins eat kelp. With no otters to eat them, the urchins ate the roots of the kelp, and the forests died. The fish that lived there lost their homes, and the fishing boats caught less.

When sea otters were protected in the twentieth century, their number slowly grew again. In places where the otters came back, the kelp forests also came back within ten years.

One animal can hold a whole system together. Scientists call such an animal a keystone species, after the stone at the top of an arch that keeps the other stones in place.`,
      },
      {
        heading: '矢印で連鎖を書く',
        body: `■ 減少の連鎖
ラッコが乱獲された（毛皮が高価だったため）
　↓
ウニを食べる者がいなくなった
　↓
ウニが急増した
　↓
ウニがケルプ（海藻）の根を食べた
　↓
海の森が消えた
　↓
そこに住んでいた魚が住みかを失った
　↓
漁獲量が減った

■ 回復の連鎖
20世紀にラッコが保護された
　↓
ラッコの数が回復した
　↓
ウニが減った（本文では省略されているが、論理上そうなる）
　↓
ケルプの森が10年以内に戻った

■ 連鎖を示す表現
After the otters disappeared 〜（〜のあと）
because sea otters eat sea urchins（理由）
With no otters to eat them 〜（ラッコがいないので）
and the forests died（結果）

★ ポイント：因果の連鎖では、途中の一つを抜かすと意味が通らなくなる。「ラッコが減った → 海藻が消えた」だけでは説明になっていない。間にウニが必要である。

⚠ 注意：With no otters to eat them の them はウニを指す。「ウニを食べるラッコがいないので」。to eat them が otters を説明する不定詞であることに注意する。`,
      },
      {
        heading: '一般化とたとえを読む',
        body: `■ 最終段落の一般化
One animal can hold a whole system together.（一つの動物が生態系全体を支えうる）
これがこの文章の主張である。第1〜4段落の事実は、この一文のための材料である。

■ keystone species という語の説明
Scientists call such an animal a keystone species, after the stone at the top of an arch that keeps the other stones in place.
・call A B（AをBと呼ぶ）の形。
・after 〜 はここでは「〜にちなんで」という意味。時間の「〜のあと」ではない。
・the stone at the top of an arch that keeps the other stones in place＝アーチの頂点にあって他の石を支えている石（要石）。
この石を抜くとアーチ全体が崩れる。だから「一つ抜けると全体が崩れる種」を keystone species と呼ぶ。たとえの意味まで説明されているので、語を知らなくても読める。

■ such an animal の such
「そのような動物」＝直前の「生態系全体を支えている動物」を指す。such は前の内容をまとめて受ける語である。

■ 設問の作られ方
Q：Why did the number of sea urchins increase?（なぜウニが増えたのか）
A：Because the sea otters that ate them were killed by hunters.（ウニを食べるラッコが乱獲されていなくなったから）
理由を答えるときは、連鎖の1つ前を書く。2つ前（毛皮が高価だった）を書くと、直接の理由になっていない。

★ ポイント：連鎖の中で「なぜ」と問われたら、その現象の直前の段を答える。飛ばして答えない。`,
      },
    ],
    trapExamples: [
      {
        question: '本文によると、ケルプの森が消えた直接の原因は何か。ア ラッコが乱獲されたこと　イ 増えたウニがケルプの根を食べたこと',
        wrongAnswer: 'ア',
        trapExplanation: '連鎖の出発点（ラッコの乱獲）を答えにしてしまう。確かに元をたどればラッコだが、設問が「直接の原因」を聞いているのに、二段階前を答えている。',
        correctAnswer: 'イ',
        correctExplanation:
          '本文は Sea urchins eat kelp. With no otters to eat them, the urchins ate the roots of the kelp, and the forests died. と、ウニが根を食べたことを直接の原因として書いている。ラッコの乱獲はウニが増えた原因であり、森が消えた原因はその次の段である。因果の連鎖では、設問が「直接の原因」か「もとの原因」かを読み分け、矢印の何段前を答えるかを決める。',
      },
      {
        question: '本文の "Scientists call such an animal a keystone species, after the stone at the top of an arch" の after の意味として正しいのはどちらか。ア 〜のあとで　イ 〜にちなんで',
        wrongAnswer: 'ア',
        trapExplanation: 'after を「〜のあとで」という時間の意味だけで覚えているため、「アーチの頂点の石のあとで」と読んで意味が通らなくなる。多義語の別の意味を知らない。',
        correctAnswer: 'イ',
        correctExplanation:
          'name A after B / call A after B は「BにちなんでAと名づける・呼ぶ」という意味である（He was named after his grandfather. 祖父にちなんで名づけられた）。ここではアーチの要石にちなんで keystone species と呼ぶ、という説明になっている。前置詞は複数の意味を持つので、時間の意味であてはめて通らなければ別の意味を考えること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s366',
    subject: 'eigo',
    examType: 'koko',
    title: '説明文④：問題 → 対策 → 効果と限界',
    description: '対策の効果を示す数値と、その対策が届かない範囲を分けて読み取る',
    intro: 'レジ袋が有料になって、多くの人が買い物袋を持つようになりました。では、それでプラスチックの問題は解決したのでしょうか。効果があった部分と、まだ手つかずの部分を分けて考えることが、論説文の読み方の核心です。',
    order: 866,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '説明文の型：問題 → 対策 → 効果（数値） → 限界（but / however）。',
      '効果を示す数値と、全体に占める割合は別の情報。両方を確認する。',
      '賛否が並ぶ段落では、Some people say 〜 / Others say 〜 の両方を読む。',
      '筆者の立場は最終段落に出る。Both may be right. のような中立の結論もある。',
      '「対策は無意味だった」という極端な選択肢は、たいてい誤り。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `In July 2020, shops in Japan began to charge for plastic bags. Before that, most bags were free. The government hoped that people would bring their own bags.

Did it work? A survey asked people whether they had refused a plastic bag in the last week. In March 2020, before the rule, 30 percent of people said yes. In November 2020, the number was 72 percent. In 2021 it was 75 percent, and in 2022 it was 77 percent.

The rule changed behavior quickly, but plastic bags are only a small part of the problem. Bags are about two percent of the plastic waste in Japan. Bottles, food trays, and packages are much larger.

Some people say that the rule was useless because of this. Others say that it was the first time that many people thought about plastic at all, and that this way of thinking is now spreading to other products.

Both may be right. A small rule can change habits, but it cannot solve a large problem by itself.`,
        figureId: 'lf_kokoeigoext10_366',
      },
      {
        heading: '効果と限界を分ける',
        body: `■ 問題
プラスチックごみ。レジ袋は無料で配られていた。

■ 対策
2020年7月からレジ袋の有料化。

■ 効果（数値）
2020年3月（規則の前）30％ → 2020年11月72％ → 2021年75％ → 2022年77％
「この1週間にレジ袋を断ったか」という質問に「はい」と答えた人の割合である。規則の前後で30％から72％へ、42ポイント増えている。

■ 限界
Bags are about two percent of the plastic waste in Japan.
レジ袋は日本のプラスチックごみの約2％にすぎない。ボトル・食品トレー・包装のほうがずっと多い。

★ ポイント：効果の数値（72％）と、対象の小ささ（2％）は別の話である。「行動は大きく変わったが、対象は小さかった」と両方を押さえる。

■ 「ポイント」と「％」の区別
30％から72％への変化は、42ポイントの増加である。「42％増えた」と書くと、30×1.42＝42.6％になってしまい別の意味になる。割合そのものの差は「ポイント」で表す。図表の設問ではこの区別が問われることがある。

⚠ 注意：the number was 72 percent の the number は「割合（％）」を指している。人数ではない。何の数字かを本文で確認すること。`,
      },
      {
        heading: '賛否を並べる段落の読み方',
        body: `■ Some people say 〜 / Others say 〜
Some people say that the rule was useless because of this.（だから規則は無意味だったという人もいる）
Others say that it was the first time that many people thought about plastic at all 〜（多くの人が初めてプラスチックについて考えるきっかけになったという人もいる）

どちらも他人の意見であり、筆者の主張ではない。この段落だけを読んで「筆者は規則が無意味だと考えている」と答えると誤りになる。

■ 筆者の立場
Both may be right. A small rule can change habits, but it cannot solve a large problem by itself.
「両方とも正しいかもしれない。小さな規則は習慣を変えられるが、それだけで大きな問題を解決することはできない」。
中立的にまとめているが、but の後ろに重心がある。「規則には意味があるが、それだけでは足りない」という立場である。

■ 内容一致問題での照合
・「筆者はレジ袋有料化を無意味だと考えている」→ 誤り。can change habits と効果を認めている。
・「筆者はレジ袋有料化だけでプラスチック問題が解決すると考えている」→ 誤り。cannot solve 〜 by itself と否定している。
・「筆者は、レジ袋有料化は習慣を変えたが、それだけでは不十分だと考えている」→ 正しい。

■ by itself
「それだけで・単独で」。cannot solve a large problem by itself は「単独では解決できない」であり、「まったく役に立たない」ではない。

★ ポイント：意見が対立する段落では、必ず最終段落まで読んで筆者の立場を確認する。

⚠ 注意：it was the first time that many people thought about plastic at all の at all は否定文でよく使うが、ここでは「そもそも」という強調である。「そもそもプラスチックについて考えた初めての機会だった」。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、規則の前（2020年3月）と2022年を比べると、レジ袋を断った人の割合は何ポイント増えたか。',
        wrongAnswer: '77ポイント',
        trapExplanation: '2022年の値をそのまま答えてしまう。設問が「増えたか」という変化量を聞いているのに、到達点の数値を答えている。',
        correctAnswer: '47ポイント',
        correctExplanation:
          '2020年3月が30％、2022年が77％なので、77－30＝47ポイントの増加である。割合そのものの差は「％」ではなく「ポイント」で表す（30％が77％になったことを「47％増えた」と書くと別の意味になる）。グラフの設問では、値を聞いているのか変化量を聞いているのかを必ず読み分けること。',
      },
      {
        question: 'この文章の筆者の立場に最も近いのはどれか。ア レジ袋有料化は無意味だった　イ レジ袋有料化は習慣を変えたが、それだけでは大きな問題は解決できない',
        wrongAnswer: 'ア',
        trapExplanation: 'Some people say that the rule was useless という一文を筆者の意見だと思ってしまう。Some people say 〜 は他人の意見の紹介であって、筆者の主張ではない。',
        correctAnswer: 'イ',
        correctExplanation:
          '最終段落の Both may be right. A small rule can change habits, but it cannot solve a large problem by itself. が筆者の結論である。can change habits で効果を認め、but 以下で限界を述べている。Some people say / Others say と両論を並べたあとの最終段落に筆者の立場が来る、という論説文の型を覚えておくこと。',
      },
    ],
  },

  {
    id: 'koko_eigo_s367',
    subject: 'eigo',
    examType: 'koko',
    title: '説明文⑤：筆者の主張と、その根拠を見分ける',
    description: '事実（データ）と意見（主張）を区別し、主張を支える根拠の質を確かめる',
    intro: '「今の若者は本を読まない」とよく言われます。本当でしょうか。データを見ると、実は20年前よりずっと読んでいます。思いこみと事実がずれているとき、筆者は必ずデータを示します。事実の部分と意見の部分を切り分けられれば、論説文の設問はほとんど解けます。',
    order: 867,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '事実＝数値・調査結果・出来事。意見＝I believe / should / important / worrying。',
      '筆者の主張には必ず根拠がある。主張と根拠を線で結んで確認する。',
      '「多くの人は〜と言う」は一般論。データで否定される展開が多い。',
      '数値が上下している場合、どの期間を切り取るかで印象が変わる。',
      '筆者の主張に反する事実も書かれていることがある。その扱いに注目する。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Every year, a Japanese group asks students how many books they read in a month. The percentage of junior high school students who read no books at all is called the no-reading rate. In 2000 it was 43 percent. In 2010 it was 13 percent, and in 2015 it was 15 percent. In 2020 it was 12 percent, and in 2023 it was 20 percent.

Many adults say that young people today do not read. The numbers show that this is not true, at least when we compare today with the year 2000. Something clearly changed after 2000, and that something was a school activity called morning reading, in which every student reads for ten minutes before the first class.

However, the rise after 2020 is worrying. Some schools stopped morning reading in order to make more time for other subjects.

I believe that ten minutes a day is not a waste. A student who reads for ten minutes a day reads about 3,600 minutes, or sixty hours, in a year.`,
        figureId: 'lf_kokoeigoext10_367',
      },
      {
        heading: '事実と意見を切り分ける',
        body: `■ 事実（第1段落）
2000年43％／2010年13％／2015年15％／2020年12％／2023年20％
これは調査結果であり、だれが読んでも変わらない。

■ 一般論（第2段落前半）
Many adults say that young people today do not read.
「多くの大人は、今の若者は本を読まないと言う」。これは筆者の意見ではなく、世間の見方である。

■ データによる反論（第2段落後半）
The numbers show that this is not true, at least when we compare today with the year 2000.
「少なくとも2000年と比べれば、それは正しくない」。at least（少なくとも）という限定に注意する。全面的に否定しているのではなく、比較する年を限った上での否定である。

■ 筆者の心配（第3段落）
However, the rise after 2020 is worrying.
worrying（心配な）は評価を表す語なので、ここから意見が始まる。

■ 筆者の主張（第4段落）
I believe that ten minutes a day is not a waste.
I believe that 〜 と明示されている。ここが主張である。

★ ポイント：意見の合図は I think / I believe / should / must / important / worrying / better。これらの語に印を付ければ、事実と意見の境目が見える。

⚠ 注意：at least when we compare today with the year 2000 という限定を落とすと、「若者は昔より読んでいる」と言い切ることになる。2020年から2023年にかけては悪化しているので、限定が必要なのである。`,
      },
      {
        heading: '数値の切り取り方に注意する',
        body: `■ どの期間を見るかで印象が変わる
・2000年から2023年：43％ → 20％（大きく改善）
・2020年から2023年：12％ → 20％（悪化）
同じデータでも、切り取る期間によって「よくなった」とも「悪くなった」とも言える。筆者は両方を書いているので公平である。片方だけを書く文章には注意が必要だ、という読み方も身につけておく。

■ 主張を支える根拠
I believe that ten minutes a day is not a waste.（主張）
A student who reads for ten minutes a day reads about 3,600 minutes, or sixty hours, in a year.（根拠）
10分×360日＝3,600分＝60時間。小さな積み重ねが大きな量になることを数値で示している。or sixty hours の or は「すなわち」で、言いかえを示す。

■ 因果の主張には注意
Something clearly changed after 2000, and that something was a school activity called morning reading
筆者は「朝読書が不読率を下げた」と述べている。ただしこれは、時期が一致していることを根拠にした推測でもある。他の原因（本の種類が増えた、図書館が増えた）を否定する記述は本文にない。「本文に書かれている主張」として答えるのは正しいが、「証明されている」と考えるのは行きすぎである。

★ ポイント：論説文では、主張・根拠・限定（at least / may / in my opinion）の3つに印を付けながら読む。

⚠ 注意：in which every student reads for ten minutes は「その活動の中で全生徒が10分間読む」。in which は関係代名詞に前置詞が付いた形で、直前の morning reading を説明している。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、中学生の不読率が最も低かったのは何年か。',
        wrongAnswer: '2010年',
        trapExplanation: '13％という数字が最初に目に入る低い値なので、そこで判断してしまう。2020年の12％を見落としており、5つの数値をすべて比べていない。',
        correctAnswer: '2020年（12％）',
        correctExplanation:
          '5つの値は2000年43％、2010年13％、2015年15％、2020年12％、2023年20％である。最も低いのは2020年の12％。「最も〜な年」を問う設問では、必ずすべての数値を比べる。13と12のように差が小さい値が離れた位置にあるとき、見落としが起きやすいので、グラフの点の高さでも確認すること。',
      },
      {
        question: 'この文章における筆者の主張はどれか。ア 2000年の不読率は43％だった　イ 1日10分の読書はむだではない',
        wrongAnswer: 'ア',
        trapExplanation: '本文に確かに書かれている内容なので、正しい記述であれば主張だと考えてしまう。しかしそれは調査結果（事実）であって、筆者の意見ではない。',
        correctAnswer: 'イ',
        correctExplanation:
          '第4段落に I believe that ten minutes a day is not a waste. と明示されており、これが筆者の主張である。43％という数値は主張を支えるための事実にすぎない。設問が「筆者の主張」を聞いているときは、I believe / I think / should / important などの評価を含む文を探す。事実の文（数値・年号）は主張にはならない。',
      },
    ],
  },

  // ───────────── 8. 図表つき読解（s368〜s372） ─────────────
  {
    id: 'koko_eigo_s368',
    subject: 'eigo',
    examType: 'koko',
    title: '図表つき読解①：棒グラフと英文を照合する',
    description: '棒グラフの項目と英文の記述を一つずつ対応させ、順位や差を正確に読み取る',
    intro: '図表つきの問題は、英語の力だけでなく「図を見る力」で差がつきます。棒の高さを見れば一瞬でわかることを、英文だけで追うと時間がかかります。逆に、図だけ見て答えると条件を読み落とします。両方を行き来する手順を決めておきましょう。',
    order: 868,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '先に図の軸・単位・項目名を確認してから英文を読む。',
      '英文の数値には必ず項目名が付く。数値と項目をセットで拾う。',
      '順位（the largest / the second / the smallest）は図で確認できる。',
      '合計が示されているときは、内訳の合計と一致するか検算する。',
      '図からは読み取れない情報（理由・気持ち）は必ず英文にある。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Our school asked all 250 students one question: which country do you want to visit most? The answers were as follows. Australia was chosen by 70 students, the United States by 60, Italy by 45, Korea by 40, and Egypt by 35.

Many teachers thought that the United States would be first. Australia won because of two reasons. Our school has had an exchange program with a school in Australia for twelve years, and about ten students go there every summer. Also, several students said that they wanted to see koalas and the sea.

Egypt was the smallest group, but the students who chose it gave the longest answers. All of them wrote about the pyramids, and three of them said that they wanted to study history at university.

We also asked how the students would travel. Almost all of them said that they would go by plane. Only two students chose a ship to Korea. They said that they loved ships more than planes.`,
        figureId: 'lf_kokoeigoext10_368',
      },
      {
        heading: '図と英文の対応を作る',
        body: `■ 数値の対応
オーストラリア70人／アメリカ60人／イタリア45人／韓国40人／エジプト35人

■ 検算する
70＋60＋45＋40＋35＝250。第1文の all 250 students と一致する。全員がどれか一つを選んだことになる。

■ 省略された動詞を補う
Australia was chosen by 70 students, the United States by 60, Italy by 45 〜
2つ目以降は was chosen が省略されている。英語では、同じ動詞のくり返しを避けて省く。「アメリカは60人に選ばれ、イタリアは45人に…」と補って読む。この省略に気づかないと、by 60 が何の数字かわからなくなる。

■ 図で読めること／英文にしかないこと
図で読める：順位、人数、差（70－35＝35人など）
英文にしかない：オーストラリアが1位になった理由（交換留学・コアラと海）、エジプトを選んだ生徒の回答が長かったこと、移動手段

★ ポイント：設問が「理由」を聞いていたら図は見ない。「人数・順位・差」を聞いていたら図を見る。この振り分けが速さを生む。

⚠ 注意：Many teachers thought that the United States would be first. は先生たちの予想であって結果ではない。1位はオーストラリアである。予想と結果を混同させる設問が頻出する。`,
      },
      {
        heading: '差・倍・割合を求める',
        body: `図表つき読解では、図に書かれていない数値を計算させる設問が出る。

■ 差
オーストラリア70人とエジプト35人の差＝35人
アメリカ60人とイタリア45人の差＝15人

■ 倍
70÷35＝2。オーストラリアはエジプトのちょうど2倍である。twice as many as 〜 という表現で問われる。
例）Australia was chosen by twice as many students as Egypt.（オーストラリアはエジプトの2倍の生徒に選ばれた）

■ 割合
オーストラリア 70÷250＝28％
アメリカ 60÷250＝24％
上位2つの合計 130÷250＝52％（過半数）

■ 英語での表し方
・the largest number of students（最も多くの生徒）
・the second largest（2番目に多い）
・three times as many as 〜（〜の3倍）
・about one fourth of 〜（〜の約4分の1）
選択肢はこうした表現で書かれるので、日本語で計算したあと英語表現に直して照合する。

★ ポイント：「2倍」「半分」「4分の1」はよく問われる。図を見たら、切りのよい関係になっている組み合わせがないか探しておくと速い。

⚠ 注意：Only two students chose a ship to Korea. の two は250人のうちの2人で、韓国を選んだ40人の中に含まれる。別枠ではない。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、最も多くの生徒が選んだ国はどこか。',
        wrongAnswer: 'アメリカ',
        trapExplanation: 'Many teachers thought that the United States would be first. という文を結果だと思ってしまう。thought（思っていた）と would（〜だろう）が予想を表していることを見落としている。',
        correctAnswer: 'オーストラリア（70人）',
        correctExplanation:
          '実際の結果は Australia was chosen by 70 students で、グラフでもオーストラリアの棒が最も高い。次の文の Australia won because of two reasons.（オーストラリアが1位になったのには2つの理由がある）も結果を裏づけている。thought / expected / hoped で導かれる内容は予想であり、事実と区別すること。',
      },
      {
        question: '本文とグラフから、オーストラリアを選んだ生徒はエジプトを選んだ生徒の何倍か。',
        wrongAnswer: '35倍',
        trapExplanation: '70－35＝35 と引き算をして、その値を「倍」として答えてしまう。差と倍の区別ができていない。設問の「何倍」という語を確認していない。',
        correctAnswer: '2倍',
        correctExplanation:
          '70÷35＝2 なのでちょうど2倍である。35は差（何人多いか）であって倍率ではない。英語では、差は 35 more students than 〜、倍率は twice as many students as 〜 と表現が分かれる。設問が difference（差）を聞いているのか times（倍）を聞いているのかを必ず確認してから計算する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s369',
    subject: 'eigo',
    examType: 'koko',
    title: '図表つき読解②：折れ線グラフで変化を追う',
    description: '年ごとの変化を表す折れ線を読み、増減の向き・幅・転換点を英語で表現する',
    intro: '折れ線グラフは「いつ変わったか」を一目で見せてくれます。上がり続けているのか、途中で折り返したのか。その転換点には必ず理由があり、英文はそこを説明しています。グラフの形と英文の説明を結びつける練習をします。',
    order: 869,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '折れ線では①最大値②最小値③転換点（増加から減少に変わる年）を先に押さえる。',
      '増加：rise / increase / go up　減少：fall / decrease / go down。',
      'the highest number in its history のような最上級は、グラフの頂点と対応する。',
      '転換点の直前・直後に、その理由が英文で説明されている。',
      '未来の予測（will / is going to）は事実ではない。図には表れない。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `The population of Minami Town has changed a lot in fifty years. In 1975 it was 12,000. In 1985 it rose to 14,000, the highest number in the town's history. After that it began to fall: 11,000 in 1995, 8,000 in 2005, and 6,000 in 2015.

The reason for the rise in the 1980s was a factory. It opened in 1978 and gave jobs to about 900 people. When the factory closed in 1990, many families moved to the city.

Today the town is trying something new. Since 2018, people who move to the town and start a farm can use an empty house for three years without paying rent. Twenty-two families have used this system, and half of them have stayed after the three years.

The town office says that the population will not return to 14,000. Their goal is different now: to keep the elementary school open. The school needs at least sixty children, and this year it has sixty-four.`,
        figureId: 'lf_kokoeigoext10_369',
      },
      {
        heading: 'グラフの形を言葉にする',
        body: `■ 数値
1975年12,000人／1985年14,000人／1995年11,000人／2005年8,000人／2015年6,000人

■ 形の説明
1975年から1985年にかけて増加（＋2,000人）、1985年が頂点、その後は一貫して減少。
1985→1995は－3,000人、1995→2005は－3,000人、2005→2015は－2,000人。減少の幅は最後の10年でやや小さくなっている。

■ 転換点と理由
頂点は1985年。理由は1978年に開いた工場である。約900人の働き口ができた。
1990年に工場が閉鎖され、多くの家族が都市へ移った。だから1995年以降は減り続けている。
グラフの折れ曲がりと、英文の出来事（工場の開設・閉鎖）が対応している。

■ 変化を表す英語
rose to 14,000（14,000まで上がった）
began to fall（下がり始めた）
the highest number in the town's history（町の歴史上最多）

★ ポイント：折れ線を読むときは「向き（上がる・下がる）」「幅（どれだけ）」「転換点（いつ変わったか）」の3点を言葉にする。

⚠ 注意：rose to 14,000 は「14,000まで上がった」。rose by 14,000 なら「14,000だけ増えた」で意味が違う。to は到達点、by は変化量である。`,
      },
      {
        heading: '図に表れない情報を英文から取る',
        body: `グラフは1975年から2015年までしか示していない。それ以降の話はすべて英文にある。

■ 2018年以降の取り組み
people who move to the town and start a farm can use an empty house for three years without paying rent
（町に移住して農業を始める人は、空き家を3年間、家賃なしで使える）

■ 結果
Twenty-two families have used this system, and half of them have stayed after the three years.
22家族が利用し、その半分（11家族）が3年後も残った。half of them の them は Twenty-two families を指す。

■ 目標の変化
The town office says that the population will not return to 14,000.（14,000には戻らないだろう）
Their goal is different now: to keep the elementary school open.（目標は小学校を存続させること）
コロンの後ろが goal の中身である。

■ 学校の人数
The school needs at least sixty children, and this year it has sixty-four.
必要なのは最低60人、今年は64人。あと4人の余裕しかない、と読める。at least（少なくとも）は下限を示す。

★ ポイント：図表つき読解では、図の範囲外の情報が必ず英文にある。設問が図に表れない年の話を聞いていたら、英文だけを見る。

⚠ 注意：will not return to 14,000 は町役場の見通しであって、決まった事実ではない。「町の人口は14,000人に戻らないことが決まっている」という選択肢は言いすぎである。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、南町の人口が最も多かったのは何年か。',
        wrongAnswer: '1975年',
        trapExplanation: 'グラフのいちばん左（最初の年）を最大値だと思ってしまう。人口が減っている町だという先入観から、初めが最も多いと決めつけている。',
        correctAnswer: '1985年（14,000人）',
        correctExplanation:
          '1975年は12,000人、1985年は14,000人で、本文にも the highest number in the town\'s history（町の歴史上最多）と明記されている。折れ線グラフでは、最初や最後ではなく途中に頂点があることが多い。最大値・最小値は必ずすべての点を比べて判断すること。',
      },
      {
        question: '本文の "Twenty-two families have used this system, and half of them have stayed after the three years." から、3年後も町に残った家族は何家族か。',
        wrongAnswer: '22家族',
        trapExplanation: '22という数字だけを拾い、half of them（そのうちの半分）という限定を読み落としてしまう。数字の後ろに続く条件を確認していない。',
        correctAnswer: '11家族',
        correctExplanation:
          'half of them の them は Twenty-two families を指すので、22÷2＝11家族である。数値が出てきたら、その数値を限定する語（half of / about / more than / only）まで必ず読む。half / a third / a quarter などの分数表現は、図表つき読解で計算を求められる典型である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s370',
    subject: 'eigo',
    examType: 'koko',
    title: '図表つき読解③：円グラフで割合を読む',
    description: '円グラフの区分と英文の数量を対応させ、割合と実数を行き来する',
    intro: '円グラフは「全体の中でどれくらいか」を見せる図です。英文には重さや人数といった実数が書かれ、図には割合が示されることが多いので、両者を行き来する計算が必要になります。ここでつまずく人が多いので、変換の手順を固めておきます。',
    order: 870,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      '円グラフは全体を100％とする。区分の合計は必ず100％になる。',
      '実数から割合：区分÷全体×100。割合から実数：全体×割合。',
      '英文に総量（The total weight was 〜）があれば、必ず検算に使う。',
      '「最も多い区分」と「半分以上か」は円グラフの定番の設問。',
      '調査の方法・期間（for one week など）は条件なので必ず確認する。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Last month our science club checked the garbage of our school for one week. The total weight was 200 kilograms. Paper was the largest part, 90 kilograms. Food was 50 kilograms, plastic 40 kilograms, and other things 20 kilograms.

We were surprised by the paper. Most of it was printed on only one side. If teachers and students used both sides, the amount could become much smaller.

The food garbage came almost only from school lunch. Rice and vegetables were left most often. When we asked the students why, the most common answer was not that they did not like the food. It was that there was not enough time to eat.

Our report has three suggestions. First, print on both sides of the paper. Second, give students five more minutes for lunch. Third, put three boxes, not one, in each classroom, so that paper, plastic, and food can be separated.

Our teacher sent the report to the school office in June. The lunch time will become five minutes longer from September.`,
        figureId: 'lf_kokoeigoext10_370',
      },
      {
        heading: '実数と割合を行き来する',
        body: `■ 実数
紙90kg／食べ物50kg／プラスチック40kg／その他20kg　合計200kg

■ 検算
90＋50＋40＋20＝200。本文の The total weight was 200 kilograms. と一致する。

■ 割合に直す
紙 90÷200＝45％
食べ物 50÷200＝25％
プラスチック 40÷200＝20％
その他 20÷200＝10％
合計 45＋25＋20＋10＝100％。合っている。

■ よく問われる関係
・紙は全体の半分より少し少ない（45％）。「半分以上」と書いた選択肢は誤り。
・紙は食べ物の約2倍弱（90÷50＝1.8倍）。「ちょうど2倍」は誤り。
・食べ物とプラスチックを合わせると90kgで、紙と同じ。

★ ポイント：円グラフの設問は「〜は全体の何％か」「〜は〜の何倍か」「〜は半分を超えるか」の3型がほとんど。実数から割合への変換を素早くできるようにしておく。

⚠ 注意：調査は for one week（1週間）である。「1日の量」ではない。1日あたりに直すなら200÷5（登校日）または200÷7となるが、本文にどちらか書かれていないので計算できない。条件が書かれていないことは答えられない。`,
      },
      {
        heading: '理由と提案を読み取る',
        body: `図からは割合しか読めない。理由と提案は英文にしかない。

■ 紙が多い理由
Most of it was printed on only one side.（その大半が片面だけに印刷されていた）
it＝the paper。両面を使えば量は減らせる、と述べている。

■ 給食を残す理由
the most common answer was not that they did not like the food. It was that there was not enough time to eat.
not A but B の形が2文に分かれている。「最も多かった答えは、食べ物が嫌いだからではなく、食べる時間が足りないからだった」。理由を取りちがえやすい箇所である。

■ 3つの提案
First, print on both sides of the paper.（両面印刷）
Second, give students five more minutes for lunch.（給食を5分長く）
Third, put three boxes, not one, in each classroom（各教室にごみ箱を1つではなく3つ置く）

■ 実現したこと
The lunch time will become five minutes longer from September.
3つの提案のうち、実現が決まったのは2つ目だけである。「3つとも実現した」という選択肢は誤りになる。

★ ポイント：提案が複数あるとき、そのうち何が実現したかを最後の段落で確認する。全部が実現するとは限らない。

⚠ 注意：five more minutes（あと5分）と five minutes longer（5分長く）は同じ意味である。表現が変わっても同じ内容を指していることを見抜く。これは内容一致問題の言いかえそのものである。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、紙は学校のごみ全体の何％を占めるか。',
        wrongAnswer: '90％',
        trapExplanation: '90キログラムという実数をそのまま％として答えてしまう。単位が kg なのか percent なのかを確認していない。',
        correctAnswer: '45％',
        correctExplanation:
          '紙は90kgで、全体は200kgである。90÷200×100＝45％となる。実数と割合は必ず区別し、割合を求めるときは「その区分÷全体」で計算する。ちなみに食べ物25％、プラスチック20％、その他10％で、合計は100％になる。合計が100％になるかどうかは検算に使える。',
      },
      {
        question: '本文によると、生徒が給食を残す理由として最も多かったのはどちらか。ア 給食が好きではないから　イ 食べる時間が足りないから',
        wrongAnswer: 'ア',
        trapExplanation: 'not that they did not like the food という否定の部分だけを読み、そこを答えだと思ってしまう。not A but B の B（本当の理由）にあたる次の文を読んでいない。',
        correctAnswer: 'イ',
        correctExplanation:
          'the most common answer was not that they did not like the food. It was that there was not enough time to eat. と、否定と肯定が2文に分けて書かれている。最も多かった答えは「食べる時間が足りない」である。この読み取りは後ろの提案（give students five more minutes for lunch）とも一致し、実際に9月から給食時間が5分長くなったという結末にもつながっている。',
      },
    ],
  },

  {
    id: 'koko_eigo_s371',
    subject: 'eigo',
    examType: 'koko',
    title: '図表つき読解④：グラフを使った発表原稿を読む',
    description: 'スピーチ形式の英文で、話し手が図のどこを指しているかを追いながら読む',
    intro: '入試ではスピーチ原稿の形で図表が出ることがよくあります。「このグラフを見てください」と言われたら、そこから先は図の説明です。話し手が図のどの部分を指しているかを追えるかどうかで、正答率が大きく変わります。',
    order: 871,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'moshi',
    keyPoints: [
      'スピーチ原稿の型：あいさつ → 話題 → 調査方法 → 図の説明 → 意見 → 結び。',
      'Look at this graph. / Please look at 〜 の直後が図の説明部分。',
      '話し手の意見（I think / My idea is）と、調査結果（数値）を区別する。',
      '図の中の「最も長い／短い棒」を指す表現に注目する。',
      '提案の内容が計算と合っているかを確かめる（数値の整合）。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Good morning, everyone. Today I want to talk about how we spend our time after school. Last week I asked the 30 students in my class how many minutes they use for each activity on a weekday. I will show you the average.

Study at home: 70 minutes. Club activities: 90 minutes. Smartphone: 100 minutes. Helping at home: 15 minutes. Reading: 10 minutes.

Look at this graph, please. The longest bar is the smartphone. It is longer than the bar for study at home. When I saw this, I was not surprised, because I use my phone a lot too.

But look at the shortest bars. We use only 15 minutes for helping at home and 10 minutes for reading. Together, that is 25 minutes, one fourth of the smartphone time.

I am not saying that we should throw away our phones. My idea is simple. If we use the phone for 25 minutes less, we can double the time for reading and helping at home. Thank you for listening.`,
        figureId: 'lf_kokoeigoext10_371',
      },
      {
        heading: '発表原稿の構成を追う',
        body: `■ 段落ごとの役割
第1段落：あいさつ・話題・調査方法（30人・平日・平均）
第2段落：データの提示（5項目）
第3段落：図の説明（最も長い棒）と感想
第4段落：図の説明（最も短い棒）と計算
第5段落：意見と提案・結び

■ 調査条件を確認する
the 30 students in my class（自分のクラスの30人）
on a weekday（平日）
the average（平均）
「学校全体の調査」でも「休日」でもない。条件を取りちがえた選択肢が誤答として用意される。

■ 図を指す表現
Look at this graph, please.／But look at the shortest bars.
この後ろが図の説明である。話し手がどの棒を指しているかを、図の上で確認しながら読む。

■ 数値
家庭学習70分／部活動90分／スマートフォン100分／家の手伝い15分／読書10分

★ ポイント：スピーチ形式では、話し手の主観（I was not surprised）と客観的な数値が交互に出てくる。設問がどちらを聞いているかを見きわめる。

⚠ 注意：It is longer than the bar for study at home. の It は the longest bar（スマートフォンの棒）を指す。100分と70分を比べており、30分長い。`,
      },
      {
        heading: '提案の計算を検算する',
        body: `■ 4分の1という表現
We use only 15 minutes for helping at home and 10 minutes for reading. Together, that is 25 minutes, one fourth of the smartphone time.
15＋10＝25分。スマートフォンは100分なので、25÷100＝4分の1。本文の one fourth と一致する。

■ 提案の計算
If we use the phone for 25 minutes less, we can double the time for reading and helping at home.
スマートフォン：100－25＝75分
読書＋手伝い：25＋25＝50分＝もとの2倍
double（2倍にする）という語と計算が一致している。

このように、発表原稿では話し手の提案が数値と合っているかを確かめる設問が出る。「20分減らせば2倍になる」と書いてあれば、25分必要なので誤りだと判断できる。

■ 意見の部分
I am not saying that we should throw away our phones.（スマートフォンを捨てるべきだと言っているのではない）
My idea is simple.（私の考えは単純だ）
極端な主張を先に否定してから自分の提案を述べる、という話し方である。内容一致問題では「話し手はスマートフォンをやめるべきだと考えている」という選択肢が誤りになる。

★ ポイント：発表原稿の結論は「〜すべきだ」ではなく「〜すればどうなるか」という提案の形で述べられることが多い。提案の数値は必ず検算する。

⚠ 注意：double は動詞で「2倍にする」。twice（2倍に・2回）は副詞で使い方が違う。double the time で「その時間を2倍にする」となる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、家の手伝いと読書に使う時間の合計は、スマートフォンに使う時間のどれくらいにあたるか。',
        wrongAnswer: '2分の1',
        trapExplanation: '25分と100分という数字を見て、なんとなく「半分くらい」と感覚で答えてしまう。あるいは提案の部分の「2倍」という語に引きずられている。',
        correctAnswer: '4分の1',
        correctExplanation:
          '家の手伝い15分＋読書10分＝25分、スマートフォンは100分なので、25÷100＝4分の1である。本文にも that is 25 minutes, one fourth of the smartphone time と書かれている。割合を問われたら必ず割り算をして確かめる。one fourth（4分の1）、one third（3分の1）、half（半分）という英語表現も覚えておくこと。',
      },
      {
        question: '発表者の意見に合うのはどちらか。ア スマートフォンを捨てるべきだ　イ スマートフォンの使用を25分減らせば、読書と手伝いの時間を2倍にできる',
        wrongAnswer: 'ア',
        trapExplanation: 'スマートフォンの使いすぎを問題にしている流れから、否定的な主張だと決めつけてしまう。I am not saying that 〜 という否定の前置きを読み落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'I am not saying that we should throw away our phones. と、極端な主張をはっきり否定したうえで、If we use the phone for 25 minutes less, we can double the time 〜 と提案している。25分減らせば読書と手伝いが25＋25＝50分となり、確かに2倍である。I am not saying that 〜（〜と言っているのではない）は、誤解を防ぐための前置きであり、その後ろに本当の主張が来る。',
      },
    ],
  },

  {
    id: 'koko_eigo_s372',
    subject: 'eigo',
    examType: 'koko',
    title: '図表つき読解⑤：二つの折れ線を比べる',
    description: '二系列のグラフで、それぞれの変化と両者の差を分けて読み取る',
    intro: '二本の線が引かれたグラフでは、「それぞれがどう動いたか」と「二本の差がどうなったか」という二つの見方があります。設問はこの二つを混ぜて聞いてきます。どちらの線の話をしているのかを常に確認しながら読む練習をします。',
    order: 872,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '二系列のグラフでは、まずどちらの線がどれかを凡例で確認する。',
      '各系列の最大・最小・転換点を別々に押さえる。',
      '二つの差（開き）が広がったか縮まったかは、引き算で確かめる。',
      '「以前の水準に戻ったか」という設問は、基準の年の値と比べる。',
      '単位（thousands＝千人）の読みまちがいに注意する。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `The graph shows the number of visitors to two places in our city from 2019 to 2023. The solid line is the city museum, and the dotted line is the city zoo. The unit is thousands of people.

In 2019, the museum had 40 thousand visitors and the zoo had 90 thousand. In 2020, both numbers fell sharply because the buildings were closed for three months: the museum to 15 thousand and the zoo to 30 thousand. In 2021 the museum recovered to 25 thousand and the zoo to 55 thousand. In 2022 the numbers were 35 thousand and 75 thousand, and in 2023 they were 45 thousand and 85 thousand.

By 2023, the museum had more visitors than before 2020, but the zoo had not returned to its 2019 number. The museum changed two things in 2021: it opened at night once a month, and it made all the labels in three languages. The zoo says that it will try something similar next year.`,
        figureId: 'lf_kokoeigoext10_372',
      },
      {
        heading: '二系列を別々に整理する',
        body: `■ 博物館（実線）
2019年40／2020年15／2021年25／2022年35／2023年45（単位：千人）
2020年に急落し、その後3年連続で回復。2023年には2019年（40）を上回った。

■ 動物園（点線）
2019年90／2020年30／2021年55／2022年75／2023年85（単位：千人）
同じく2020年に急落し、その後回復。ただし2023年（85）は2019年（90）に届いていない。

■ 差の変化
2019年：90－40＝50
2020年：30－15＝15
2021年：55－25＝30
2022年：75－35＝40
2023年：85－45＝40
2020年にいったん差が縮まり、その後また開いている。ただし2019年の50よりは小さい。

★ ポイント：二系列のグラフでは「それぞれの動き」と「二つの差」を別々に計算する。設問はどちらも聞いてくる。

⚠ 注意：The unit is thousands of people.（単位は千人）とある。40は40人ではなく40,000人である。単位を示す一文は必ず本文にあるので、見落とさない。`,
      },
      {
        heading: '「戻ったか」を判定する',
        body: `■ 本文の記述
By 2023, the museum had more visitors than before 2020, but the zoo had not returned to its 2019 number.
「2023年までに、博物館は2020年より前を上回る来館者を得たが、動物園は2019年の数に戻っていなかった」

■ 数値で確認する
博物館：2023年45 > 2019年40 → 上回った
動物園：2023年85 < 2019年90 → 戻っていない
本文の記述と図が一致する。

■ 理由は英文にしかない
The museum changed two things in 2021: it opened at night once a month, and it made all the labels in three languages.
①月に1回、夜間開館した ②すべての解説を3言語にした
コロンの後ろが two things の中身である。

動物園については、The zoo says that it will try something similar next year.（来年、同様のことを試すと言っている）とあるだけで、まだ実行していない。

■ 設問の作られ方
Q：Why did the number of visitors to the museum increase after 2021?
A：Because the museum opened at night once a month and made all the labels in three languages.
理由を聞かれたら図ではなく英文を見る。図には理由は描かれていない。

★ ポイント：「回復したか」を問う設問は、必ず基準年（ここでは2019年）と比べる。前年と比べて増えていても、基準年に届いていなければ「戻っていない」である。

⚠ 注意：fell sharply（急激に落ちた）の sharply は変化の激しさを表す副詞。gradually（徐々に）と対になる。グラフの傾きを説明する語として覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフから、2023年に2019年の水準を上回ったのはどちらか。ア 博物館　イ 動物園',
        wrongAnswer: 'イ',
        trapExplanation: '動物園のほうが常に来場者数が多い（85 > 45）ので、そちらが回復したと思ってしまう。比べるべきなのは他方の施設とではなく、同じ施設の2019年の値である。',
        correctAnswer: 'ア',
        correctExplanation:
          '博物館は2019年40千人 → 2023年45千人で上回っている。動物園は2019年90千人 → 2023年85千人で、まだ届いていない。本文にも the museum had more visitors than before 2020, but the zoo had not returned to its 2019 number と書かれている。「回復した」の判定は、必ず同じ系列の基準年の値と比べること。絶対数の大小とは別の話である。',
      },
      {
        question: '本文の "The unit is thousands of people." をふまえると、2019年の動物園の来場者数は何人か。',
        wrongAnswer: '90人',
        trapExplanation: 'グラフの目盛りの数字をそのまま人数として答えてしまう。単位を説明した一文を読み飛ばしている。図表つき読解で最も多い失点である。',
        correctAnswer: '90,000人（9万人）',
        correctExplanation:
          '単位は thousands of people（千人）なので、90は90×1,000＝90,000人を表す。図表つき読解では、単位が「千人」「万トン」「％」などに変換されていることが多く、その説明は本文の最初か図の軸ラベルに書かれている。読み始める前に単位を確認する習慣をつけること。',
      },
    ],
  },
  // ───────────── 9. 内容一致と要旨把握（s373〜s375） ─────────────
  {
    id: 'koko_eigo_s373',
    subject: 'eigo',
    examType: 'koko',
    title: '内容一致①：選択肢を本文と一語ずつ照合する',
    description: '内容一致問題を、印象ではなく本文の該当箇所との一対一の照合で解く手順を固める',
    intro: '内容一致問題は「なんとなく合っていそう」で選ぶと必ず外れます。作問者は、本文にある語を使いながら一か所だけ変えた選択肢を用意しているからです。どこが変えられやすいかは決まっているので、そこを重点的に確かめれば確実に正解できます。',
    order: 873,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '選択肢は必ず本文の該当箇所を見つけてから判定する。記憶で解かない。',
      '変えられやすい5か所：数値／主語（だれが）／時（いつ）／否定／程度（always・only）。',
      '本文にない内容は、たとえ常識的に正しくても誤り。',
      '選択肢の語が本文と同じでも、組み合わせが変えてあることがある。',
      '「本文の内容と合わないもの」を選ぶ設問では、設問文に印を付けてから解く。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `The library of our school keeps a record of the books that students borrow. Last year, first-year students borrowed 1,200 books, second-year students 900, and third-year students 500. The total was 2,600 books.

The librarian says that the difference is not only about study time. Third-year students are busy, but they also stop coming to the library because they think that reading is not useful for the entrance examination. In fact, many high school entrance examinations in Japan include a long reading passage, and students who read often finish it faster.

The library started a new service in April. Students can now ask for a book by writing its title on a card, and the librarian will bring it to their classroom. Third-year students used this service 180 times in the first three months.

"Some students do not have time to walk to the library," the librarian said. "If they cannot come to the books, the books can go to them."`,
        figureId: 'lf_kokoeigoext10_373',
      },
      {
        heading: '変えられやすい5か所を確かめる',
        body: `■ ①数値
1年生1,200冊／2年生900冊／3年生500冊／合計2,600冊
検算：1,200＋900＋500＝2,600。一致する。
選択肢で「3年生は900冊借りた」のように学年と数値の組み合わせを入れかえるのが定番である。

■ ②主語（だれが）
new service を使ったのは Third-year students（3年生）で、180回である。「1年生が180回使った」は誤り。
本を教室まで届けるのは the librarian（司書）で、生徒ではない。

■ ③時（いつ）
The library started a new service in April.（4月に開始）
in the first three months（最初の3か月で180回）
「1年間で180回」は誤り。

■ ④否定
reading is not useful for the entrance examination は3年生の思いこみである。筆者（司書）はそれを In fact 〜 で否定している。「読書は入試に役立たないと司書が言っている」は誤り。

■ ⑤程度を表す語
not only about study time（勉強時間だけの問題ではない）→ 「勉強時間は関係ない」は言いすぎ。
Some students do not have time 〜（一部の生徒）→ 「すべての生徒」は誤り。

★ ポイント：選択肢を読んだら、本文の該当する一文を指で押さえる。押さえられない選択肢は、たいてい誤りである。

⚠ 注意：In fact で始まる文は、直前の思いこみを訂正している。この文の内容（入試には長文が出るので、読む習慣のある生徒のほうが速く解ける）は司書の説明であり、本文の主張である。`,
      },
      {
        heading: '本文にない内容を切り捨てる',
        body: `内容一致問題では「常識的には正しいが本文にない」選択肢がよく混ざる。

例）「読書は語彙力を高めるので、入試に役立つ」
語彙力の話は本文に一切ない。内容として正しそうでも、本文にない以上、誤りである。

例）「3年生は部活動を引退したので図書館に来なくなった」
部活動の話は本文にない。本文が挙げている理由は①忙しい ②読書は入試に役立たないと思っている、の2つである。

■ 該当箇所を探す手順
①選択肢のキーワード（数値・固有名詞・学年）を選ぶ。
②本文でその語を探す。
③見つかった一文と、その前後1文を読む。
④選択肢の全部分が本文と一致するか確認する。

■ 一部だけ正しい選択肢に注意
「3年生は500冊借り、新しいサービスを1年間で180回使った」
前半は正しいが、後半の「1年間で」が誤り（最初の3か月で180回）。一部が正しいだけでは正解にならない。

■ 図で確認できること
学年ごとの冊数と順位はグラフで一目でわかる。1年生が最多、3年生が最少。1,200÷500＝2.4倍。差は700冊。

★ ポイント：内容一致は「本文にあるか」と「全部一致するか」の2段階で判定する。どちらか一方でも欠ければ誤り。`,
      },
    ],
    trapExamples: [
      {
        question: '本文とグラフの内容に合うのはどちらか。ア 3年生は昨年900冊借りた　イ 3年生は昨年500冊借りた',
        wrongAnswer: 'ア',
        trapExplanation: '本文に900という数字が実際に出てくるため、見覚えのある数字を選んでしまう。その900が2年生の冊数であることを確認していない。学年と数値の組み合わせを入れかえるのは、内容一致問題で最も多いひっかけである。',
        correctAnswer: 'イ',
        correctExplanation:
          '本文は first-year students borrowed 1,200 books, second-year students 900, and third-year students 500 と述べており、900は2年生である。グラフでも3年生の棒が最も低い。合計も1,200＋900＋500＝2,600で本文の The total was 2,600 books. と一致する。数値の選択肢は、必ず「だれの数値か」まで確認すること。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア 司書は、読書は入試に役立たないと考えている　イ 3年生の中には、読書は入試に役立たないと考えている生徒がいる',
        wrongAnswer: 'ア',
        trapExplanation: '本文中に reading is not useful for the entrance examination という語句がそのまま出てくるため、だれの考えかを確認せずに選んでしまう。that 節が「3年生がそう思っている」内容であることを見落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'they think that reading is not useful for the entrance examination の they は third-year students である。司書はむしろ次の文で In fact, many high school entrance examinations in Japan include a long reading passage 〜 と、その考えを訂正している。本文に同じ語句があっても「だれの発言・だれの考えか」で正誤が変わる。that 節の外側の主語を必ず確認すること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s374',
    subject: 'eigo',
    examType: 'koko',
    title: '内容一致②：言いかえ（パラフレーズ）を見抜く',
    description: '本文と違う語で同じ内容を述べた選択肢を、意味の一致で正しく判定する',
    intro: '正解の選択肢は、本文と同じ語では書かれていません。同じ語をそのまま使うのは、たいてい誤りの選択肢のほうです。作問者は本文を別の言い方に置きかえて正解を作ります。だから「同じ語があるか」ではなく「同じ意味か」で判定する目が必要です。',
    order: 874,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '正解の選択肢は本文の言いかえであることが多い。語の一致で選ばない。',
      'よくある言いかえ：did not lower＝kept the same／half the price＝much cheaper。',
      '否定の言いかえ：cannot win＝is not able to win／only＝not more than。',
      '具体（bread, flour）→ 抽象（products, materials）への言いかえに注意する。',
      '誤りの選択肢は、本文の語をそのまま使いながら関係を変えてあることが多い。',
    ],
    sections: [
      {
        heading: '英文を読んでみよう',
        body: `Ken works at a small bakery in a town near the sea. He opens the shop at seven in the morning, but he starts his work at three. Making bread takes a long time, because the dough must rest twice.

Last year a large supermarket opened next to the station, and it sells bread at half the price of Ken's shop. Some of his customers stopped coming. Ken did not lower his prices. Instead, he began to write a small card for each kind of bread, explaining where the flour came from and which farmer grew the wheat.

He also started to open the shop for one hour on Sunday afternoon, only for children. During that hour, children can make their own small bread for 100 yen. Their parents wait outside and talk with each other.

Ken says that he cannot win against the supermarket on price. But he thinks that a shop is not only a place to buy things. Now about twenty children come every Sunday, and some of their parents buy bread on weekdays too.`,
      },
      {
        heading: '言いかえの型を覚える',
        body: `■ 本文 → 言いかえの例
・Ken did not lower his prices. → He kept his prices the same.（値段を変えなかった）
・it sells bread at half the price of Ken's shop → The supermarket's bread is much cheaper.（ずっと安い）
・he starts his work at three → He begins working four hours before the shop opens.（開店の4時間前）
・explaining where the flour came from → giving information about the materials（材料についての情報を与える）
・a shop is not only a place to buy things → a shop can have another role（店には別の役割もありうる）

■ 数値の言いかえ
He opens the shop at seven in the morning, but he starts his work at three.
→ 7－3＝4なので「開店の4時間前に仕事を始める」。時刻から時間の長さへの言いかえは頻出である。

■ 具体から抽象へ
flour / wheat（小麦粉・小麦）→ materials / ingredients（材料）
bread（パン）→ products（商品）
選択肢が抽象語で書かれていても、本文の具体語がそれにあたるなら一致である。

★ ポイント：選択肢を読むとき、「本文のどの一文の言いかえか」を必ず特定する。特定できれば正解、できなければ誤り。

⚠ 注意：the dough must rest twice は「生地を2回休ませなければならない」。rest を「休憩する」と人の動作として読むと意味が通らない。パン作りの工程を表している。`,
      },
      {
        heading: '誤りの選択肢の作られ方',
        body: `■ 型①：本文の語を使って関係を逆にする
「ケンはスーパーマーケットに対抗して値段を下げた」
did not lower his prices（下げなかった）を逆にしている。本文の語（lower / prices）はそのまま使われている。

■ 型②：程度を強める
「ケンの客は全員来なくなった」
本文は Some of his customers stopped coming.（一部の客）。some → all への変更は頻出のひっかけである。

■ 型③：本文にない因果を作る
「子ども向けの時間を始めたので、スーパーマーケットの客が減った」
本文にスーパーの客が減ったという記述はない。増えたのはケンの店の日曜の子どもである。

■ 型④：主体を入れかえる
「子どもたちが日曜日にパンを買い、親は外で待っている」
本文は children can make their own small bread（子どもは自分のパンを作れる）であって、買うのではない。

■ 正解の選択肢の例
「ケンは値段では勝てないと考え、値下げではなく別の方法で客とのつながりを作ろうとした」
これは第2〜4段落全体の言いかえである。本文の語はほとんど使われていないが、内容は一致している。

★ ポイント：本文の語がそのまま並んでいる選択肢ほど疑う。言いかえられている選択肢ほど正解の可能性が高い。

⚠ 注意：a shop is not only a place to buy things は「店は物を買う場所であるだけではない」という部分否定。「店は物を買う場所ではない」ではない。not only 〜 の否定範囲に注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の内容に合うのはどちらか。ア ケンは店の値段を下げてスーパーマーケットに対抗した　イ ケンは値段を変えず、パンの材料や生産者を説明するカードを付けた',
        wrongAnswer: 'ア',
        trapExplanation: '本文に lower / prices という語がそのまま出てくるため、見覚えのある語が並ぶ選択肢を選んでしまう。did not という否定を読み落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'Ken did not lower his prices. Instead, he began to write a small card for each kind of bread 〜 と、値下げをしなかったことと、代わりに何をしたかが書かれている。Instead（その代わりに）は、直前の否定文を受けて別の行動を示す語である。本文の語がそのまま使われている選択肢ほど、否定や主語がすり替えられていないかを確かめること。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア ケンは開店の4時間前から仕事を始めている　イ ケンは開店の3時間前から仕事を始めている',
        wrongAnswer: 'イ',
        trapExplanation: 'at three（3時に）の3という数字をそのまま「3時間前」と読んでしまう。時刻と時間の長さを混同しており、開店時刻との引き算をしていない。',
        correctAnswer: 'ア',
        correctExplanation:
          'He opens the shop at seven in the morning, but he starts his work at three. なので、開店は7時、仕事開始は3時。7－3＝4で、開店の4時間前から働いていることになる。選択肢が本文の時刻をそのまま使わず「〜時間前」と言いかえている場合は、必ず引き算をして確かめる。時刻と経過時間の言いかえは内容一致問題で頻出である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s375',
    subject: 'eigo',
    examType: 'koko',
    title: '要旨把握：この文章に題名を付ける',
    description: '全段落に共通する話題を取り出し、広すぎず狭すぎない題名・要旨を選ぶ',
    intro: '長文の最後の設問はたいてい「題名を選べ」「要旨をまとめよ」です。ここまで読み切った力を一点に集める問題で、配点も高い。全体をおおっているかどうかという一つの物差しで選べば、迷わず決められます。仕上げとして、その物差しの使い方を確認します。',
    order: 875,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '題名は「全段落をおおうか」で選ぶ。本文に出てくる語かどうかではない。',
      '誤りの型は3つ：狭すぎる（一段落だけ）／広すぎる／本文にない。',
      '要旨は各段落の主題文をつなぎ、最終段落の結論で締める。',
      '最終段落に筆者の価値判断があれば、それを要旨の中心にする。',
      '数値・固有名詞は要旨に入れない。要旨は抽象度の高い文になる。',
    ],
    sections: [
      {
        heading: '英文とグラフを読んでみよう',
        body: `Twenty years ago, almost every house in this village had a rice field. Today only twelve families grow rice. The number of farmers has fallen every year: 60 in 2005, 45 in 2010, 30 in 2015, 20 in 2020, and 12 in 2025.

The village did not want the fields to disappear, so in 2016 it started a program called One Field, Many Hands. City people pay 20,000 yen a year, come to the village four times, and help with planting and harvesting. In return, they receive 30 kilograms of rice.

The program does not save money for the farmers. Teaching city people takes time, and mistakes happen. But the farmers say that the fields are now cared for by more than two hundred people, and the village has become known outside.

Three families from the city have moved to the village since 2020. Two of them joined the program first. The village office says that this is the real result: not the rice, but the people.`,
        figureId: 'lf_kokoeigoext10_375',
      },
      {
        heading: '題名を選ぶ物差し',
        body: `■ 各段落の主題
第1段落：農家の数が20年で大きく減った（60→12）
第2段落：村が始めた取り組み（都市の人が参加する仕組み）
第3段落：もうけにはならないが、田を支える人が増えた
第4段落：3家族が移住した。本当の成果は米ではなく人だ

■ 題名の候補を判定する
ア How to Grow Rice in Japan（日本での米の作り方）→ 本文にない。誤り。
イ The Number of Farmers in 2025（2025年の農家の数）→ 第1段落の一部だけ。狭すぎる。
ウ A Village That Found a New Kind of Harvest（新しい種類の収穫を見つけた村）→ 全段落をおおう。正しい。
エ Problems of Japanese Agriculture（日本の農業の問題）→ 本文は一つの村の取り組みが中心。広すぎる。

■ 3つの誤りの型
①狭すぎる：本文に書いてあるが、一部分だけ。いちばん選びたくなる誤答。
②広すぎる：本文より大きな話題。本文はその一例にすぎない。
③本文にない：語は似ているが内容が書かれていない。

★ ポイント：「本文に書いてあるか」だけで選ぶと①狭すぎる選択肢を選んでしまう。「全段落を説明できるか」で選ぶ。

⚠ 注意：not the rice, but the people は not A but B（AではなくB）の形。「本当の成果は米ではなく人だ」。この一文が題名の手がかりになっている。`,
      },
      {
        heading: '要旨を50字程度でまとめる',
        body: `■ 手順
①各段落の主題文を1行ずつ書く。
②数値・固有名詞を削る。
③最終段落の結論を最後に置く。
④指定字数に合わせて修飾語を削る。

■ 完成した要旨（約60字）
農家が減り続ける村が、都市の人が農作業に参加する仕組みを始めた。もうけは出ないが、田を支える人が増え、移住者も生まれた。村は米ではなく人を得たと考えている。

■ 入れないもの
・60人、12人、20,000円、30キログラムなどの数値
・One Field, Many Hands という名称（要旨に固有名詞は不要）
・2016年、2020年などの年号

■ グラフから読み取れること
2005年60人／2010年45人／2015年30人／2020年20人／2025年12人。
20年間で60人から12人へ、5分の1に減っている。減少の幅は15人、15人、10人、8人と、少しずつ小さくなっている。
本文の Today only twelve families grow rice. とグラフの2025年の値が一致する。

■ 注意すべき数字
Three families from the city have moved to the village since 2020.（3家族が移住）
Two of them joined the program first.（そのうち2家族は先にこの取り組みに参加していた）
「3家族全員が取り組みの参加者だった」は誤りである。

★ ポイント：要旨をまとめるときは、必ず最終段落の結論を入れる。事実の羅列だけでは要旨にならない。`,
      },
    ],
    trapExamples: [
      {
        question: 'この文章の題名として最も適切なのはどれか。ア 2025年の農家の数　イ 新しい収穫を見つけた村',
        wrongAnswer: 'ア',
        trapExplanation: '第1段落に農家の数のデータが詳しく書かれているため、そこを文章の中心だと考えてしまう。しかし数値は第1段落だけの内容で、第2段落以降の取り組みや移住の話を説明できない。',
        correctAnswer: 'イ',
        correctExplanation:
          '題名は全段落をおおうものを選ぶ。この文章は「農家の減少（背景）→ 取り組み → 効果 → 本当の成果は人」という流れで、最終段落の not the rice, but the people が結論である。アは第1段落の一部だけを指しており、狭すぎる。題名の誤答は「狭すぎる」「広すぎる」「本文にない」の3型で作られることを覚えておく。',
      },
      {
        question: '本文の内容に合うのはどちらか。ア 都市から移住した3家族は、全員がこの取り組みの参加者だった　イ 都市から移住した3家族のうち2家族は、先にこの取り組みに参加していた',
        wrongAnswer: 'ア',
        trapExplanation: '「取り組みが移住につながった」という話の流れから、移住者全員が参加者だったと考えてしまう。Two of them という限定を読み落としている。',
        correctAnswer: 'イ',
        correctExplanation:
          'Three families from the city have moved to the village since 2020. Two of them joined the program first. とあり、3家族のうち2家族が先に参加していたと書かれている。残りの1家族については何も書かれていない。数量を表す語（two of them / half of them / some of them）は、全体との関係を必ず確認する。書かれていないことを補って読まないこと。',
      },
    ],
  },
];
