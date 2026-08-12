import type { Lesson } from './lesson-types';

// 高校受験 英語「助動詞・命令文・感嘆文・付加疑問」拡張ユニット（35セッション：koko_eigo_s146〜koko_eigo_s180）
// order は 646〜680。
// 構成：can / be able to(5)／may / might(3)／must / have to と否定の違い(6)／should / had better(3)／
//       will / would(4)／shall / Let's(3)／依頼と許可の会話表現(4)／命令文(3)／感嘆文(2)／付加疑問・否定疑問(2)
// 図解は「確信の強さ」「丁寧さ」「時制で使える形」など、ことばの意味の幅を位置で示すと
// 理解が進む箇所だけに付けてある（35課中15課・lesson-figs-koko-eigo-ext05.ts）。
export const kokoEigoExt05Lessons: Lesson[] = [
  // ───────────────── 1. can / be able to（s146〜s150） ─────────────────
  {
    id: 'koko_eigo_s146',
    subject: 'eigo',
    examType: 'koko',
    title: 'can①：「〜できる」を表す助動詞の基本',
    description: 'can のうしろは必ず原形。否定・疑問・答え方までを型として固める',
    order: 646,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro: '友だちに「自転車、乗れる？」と聞くとき、日本語は動詞を「乗る」から「乗れる」に変える。ところが英語には「乗れる」という形の動詞がない。かわりに ride の前に can を一語置くだけでよい。動詞にはいっさい手を加えず、前に一語足すだけで意味を変えられる。これが助動詞という道具の正体である。',
    keyPoints: [
      'can は助動詞。うしろは必ず動詞の原形で、主語が三人称単数でも s はつけない（× He can plays）。',
      'can 自身も形を変えない（× He cans）。人称でも数でも変化しないのが助動詞の特徴。',
      '否定は can not をつづけて書いた cannot、短縮形は can\'t。',
      '疑問文は Can を主語の前に出す。do / does は使わない（× Do you can swim?）。',
      '答えは Yes, 主語＋can. / No, 主語＋can\'t. 質問文の先頭に出た語をそのまま使う。',
      'can には「能力」と「状況として可能」の二つの意味がある。',
    ],
    sections: [
      {
        heading: 'can の形——うしろは必ず原形',
        body: `英語には「泳げる」「話せる」のように動詞そのものを変えて可能の意味を出す形がない。そこで動詞の前に can を置く。can のように動詞に意味をそえる語を助動詞という。

■ 肯定文：主語＋can＋動詞の原形〜.
例）I can swim fast.（私は速く泳げる）
例）He can play the guitar.（彼はギターを弾ける）
ここで大事なのは、主語が he でも動詞に s がつかないことである。can 自体も三単現の s を受け取らないので、× He cans play も × He can plays も両方まちがい。「助動詞が来た時点で、そのうしろは原形で固定」と覚える。

■ 否定文：can のうしろに not を置く
例）I cannot read Chinese.／I can't read Chinese.
⚠ 注意：cannot は一語につづけて書くのがふつうである。can not と離す書き方は「できないわけではない」といった特別な場合に使うので、答案では cannot か can't に統一しておくと安全。

■ 疑問文：can を主語の前に出す
例）Can you play the piano? — Yes, I can. / No, I can't.
例）× Do you can play the piano?（do と can が二重になっている）

★ ポイント：助動詞のある文は「疑問文なら助動詞を前へ、否定文なら助動詞のうしろに not」。be動詞の文とまったく同じ動かし方で、一般動詞につく do / does の出番はない。`,
      },
      {
        heading: '「能力」の can と「状況として可能」の can',
        body: `can の意味は大きく二つに分かれる。訳はどちらも「できる」なので、どちらの意味かは文脈で判断する。

■ ①能力（〜する力がある）
その人が身につけている力を表す。主語はふつう人である。
例）My sister can speak three languages.
例）Ken can run fast.

■ ②状況として可能（条件がそろっているからできる）
本人の実力ではなく、まわりの状況がそれを許している、という意味。
例）You can see Mt. Fuji from this window.（この窓から富士山が見える）
例）We can't use this room today.（今日はこの部屋を使えない）
②は「窓に能力がある」わけでも「私たちに実力がない」わけでもない。状況がそうさせている。主語がもの・場所のときや、時間・場所を表す語句がついているときは②であることが多い。

■ 会話で毎回出る二つの形
Can you 〜?（〜してくれますか＝依頼）／Can I 〜?（〜してもいいですか＝許可）
例）Can you help me?／Can I use your pen?
主語が you なら相手に動いてもらう依頼、主語が I なら自分が動く許可。会話文の空所補充ではこの見分けだけで正解が決まることが多い。

⚠ 注意：助動詞は二つ並べられない。× He will can swim. とは言えない。未来のことは will be able to と言いかえる（s148 でくわしく扱う）。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文のまちがいを直しなさい。 My brother can plays the violin very well.',
        wrongAnswer: 'My brother cans play the violin very well.',
        trapExplanation: '主語が三人称単数なのだからどこかに s が必要だ、と思いこみ、動詞から can のほうへ s を移してしまう。',
        correctAnswer: 'My brother can play the violin very well.',
        correctExplanation:
          '助動詞 can のうしろは必ず動詞の原形になる。三単現の s は「助動詞のない現在の文」でだけ現れるので、can がある時点で s は消える。can 自身も人称や数で変化しないため、cans という形は英語に存在しない。',
      },
      {
        question: 'Can you swim? に「いいえ、泳げません」と答える。空所に入る語を書きなさい。 No, I （　）.',
        wrongAnswer: "No, I don't.",
        trapExplanation: '答えの文だけを見ると swim という一般動詞の文に見えるので、反射的に do / don\'t を使ってしまう。',
        correctAnswer: "No, I can't.",
        correctExplanation:
          '応答文には、質問文の先頭に出ている語をそのまま返すのが原則。Can で聞かれたら can / can\'t、Do で聞かれたら do / don\'t、Are で聞かれたら am / am not で答える。先頭の語を見てから答えを書く習慣をつける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s147',
    subject: 'eigo',
    examType: 'koko',
    title: 'can②：「起こりうる」の can と「ありえない」の can\'t',
    description: '能力以外の can——一般的な可能性と、強い否定の推量 can\'t be を区別する',
    order: 647,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: '天気の話で「四月でも寒くなることがあります」と言うとき、英語は It can be cold in April. と can を使う。「四月に能力がある」わけではない。can にはもう一つ「そういうことは起こりうる」という顔があり、否定の can\'t になると今度は「そんなことはありえない」という強い打ち消しに変わる。',
    keyPoints: [
      'can は「〜することがある・起こりうる」という一般的な可能性も表す。主語はもの・ことが多い。',
      '一般的可能性の can は「いつでも起こるとはかぎらないが、起こる場合がある」という意味。',
      '否定の can\'t（cannot）は「〜のはずがない・ありえない」という強い否定の推量になる。',
      'can\'t be 〜 の反対は must be 〜（〜にちがいない）。二つで一組にして覚える。',
      '「〜かもしれない」（可能性は半々）は can ではなく may / might を使う。',
    ],
    sections: [
      {
        heading: '「起こりうる」を表す can',
        body: `can は「その人にその力がある」だけでなく、「世の中の性質として、そういうことが起こる場合がある」という一般的な可能性も表す。

例）Accidents can happen anywhere.（事故はどこでも起こりうる）
例）It can be very cold in this town in April.（この町では四月でもとても寒くなることがある）
例）This medicine can make you sleepy.（この薬は眠気を起こすことがある）

■ 「かもしれない」との違い
この can は「今まさにそうかもしれない」ではなく、「一般にそういうことがある」という性質の話である。今日の空を見上げて「雨が降るかもしれない」と言いたいときに It can rain today. とは言わない。この場合は It may rain today. を使う。
　一般的性質　→ It can rain a lot in June.（六月はよく雨が降ることがある）
　今の推量　　→ It may rain this afternoon.（今日の午後は雨かもしれない）

■ 疑問文の can「いったい〜だろうか」
例）Can it be true?（それが本当なんてことがあるだろうか）
驚きや疑いを込めた言い方で、長文の会話部分に出てくる。

★ ポイント：主語が人以外で、時や場所の語がついていたら「能力」ではなく「起こりうる」を疑う。訳は「〜することがある」とすると自然になる。`,
      },
      {
        heading: 'can\'t be 〜：「〜のはずがない」',
        body: `否定形になると can の可能性は「ゼロ」になり、「そんなことはありえない・〜のはずがない」という強い否定の推量を表す。

例）That can't be true.（それが本当のはずがない）
例）He can't be hungry. He ate a big lunch.（彼が空腹のはずがない。昼にたくさん食べたのだから）
例）This can't be Ken's bag. His bag is much bigger.

■ must be との対（つい）で覚える
　must be 〜　＝〜にちがいない（肯定側の断定）
　can't be 〜　＝〜のはずがない（否定側の断定）
例）She must be tired. ⇔ She can't be tired.
どちらも「かなり自信がある」点は同じで、向きだけが逆である。「must の否定は mustn't」と機械的に考えると、「〜してはいけない」という禁止の意味になってしまい、推量の否定にはならない。推量を否定するときは can't を使う、と別に覚える。

■ be 動詞を落とさない
日本語の「彼が犯人のはずがない」には「である」にあたる語が見えないため、× He can't the criminal. と書いてしまう答案が多い。名詞・形容詞の前には be が必要である。
例）He can't be the criminal.

⚠ 注意：can't be と「できない」の can't は形が同じ。うしろが be＋名詞・形容詞なら推量、be 以外の一般動詞なら能力・可能と見分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼がうそをついているはずがない」を英語にしなさい。',
        wrongAnswer: 'He must not be telling a lie.',
        trapExplanation: '「〜にちがいない」が must be だから、その否定は must not be だろうと考えてしまう。しかし must not は「してはいけない」という禁止を表す語である。',
        correctAnswer: "He can't be telling a lie.",
        correctExplanation:
          '推量を否定して「〜のはずがない」と言うときは can\'t（cannot）を使う。must be 〜（〜にちがいない）の反対は can\'t be 〜（〜のはずがない）で、must not は禁止という別の意味になる。この対応は入試の空所補充で毎年問われる。',
      },
      {
        question: '「この話は本当かもしれない」を英語にしなさい。',
        wrongAnswer: 'This story can be true.',
        trapExplanation: 'can に「ありうる」の意味があると習ったので、「かもしれない」もそのまま can で表せると考えてしまう。',
        correctAnswer: 'This story may be true.',
        correctExplanation:
          '肯定文の can は「一般にそういうことが起こりうる」という性質を表し、目の前の一件について「かもしれない」と推量するときには使わない。個別の事がらへの推量は may / might を使う。can be は「〜ということもある」と訳せるかどうかで確かめる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s148',
    subject: 'eigo',
    examType: 'koko',
    title: 'can と be able to：時制と組み合わせの使い分け',
    description: 'will can とは言えない。be able to を借りて未来・完了・不定詞に対応する',
    order: 648,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: '「来年には英語が話せるようになるよ」と言いたいのに、will can とは書けない。英語は助動詞を二つ並べることを許さないからである。そこで登場するのが be able to で、これは助動詞ではなく be動詞の仲間だから、時制でも不定詞でも自由に姿を変えられる。can の弱点を補う交代要員だと考えるとよい。',
    keyPoints: [
      'be able to は can とほぼ同じ意味。be動詞の仲間なので主語と時制に合わせて am / is / are / was / were と変化する。',
      '助動詞は二つ並べられない。× will can → ○ will be able to。',
      '× to can → ○ to be able to（不定詞）、× have could → ○ have been able to（現在完了）。',
      '現在・過去のふつうの文では can / could のほうが自然でよく使われる。be able to は形の都合で必要なときに使う。',
      'be able to の否定は be not able to、疑問は be動詞を主語の前に出す。',
    ],
    sections: [
      {
        heading: 'can が使えない場所を be able to が埋める',
        figureId: 'lf_kokoeigoext05_148',
        body: `can は便利だが、たった二つの形（can・could）しか持たない。未来を表す will や、完了形の have、不定詞の to といっしょに使いたいとき、can では対応できない。英語には「助動詞を二つ並べてはいけない」という決まりがあるからである。

■ 使えない形と、その言いかえ
　× I will can swim next year.
　○ I will be able to swim next year.（来年には泳げるようになる）
　× I want to can speak English.
　○ I want to be able to speak English.（英語を話せるようになりたい）
　× I have could use a computer since last year.
　○ I have been able to use a computer since last year.

■ be able to の形
be動詞なので主語と時制に合わせる。
　現在：I am able to 〜／He is able to 〜／They are able to 〜
　過去：I was able to 〜／They were able to 〜
　未来：I will be able to 〜
　否定：He is not able to 〜／疑問：Are you able to 〜?

■ ふだんは can を使う
現在・過去のふつうの文なら can / could のほうが短く自然である。He is able to swim. は文法的に正しいが、日常では He can swim. と言う。試験では「be able to を使って書きかえなさい」「will を使って書きかえなさい」と形を指定されることが多いので、両方書けるようにしておく。

★ ポイント：助動詞のうしろに助動詞は置けない。そこにぶつかったら be able to（can）／have to（must）に置きかえる、と覚えておくと、must の未来 will have to にもそのまま応用できる。`,
      },
      {
        heading: '書きかえ問題での注意点',
        body: `入試では can ⇄ be able to の書きかえがそのまま出題される。次の三点で失点しやすい。

■ ①主語に合わせた be 動詞にする
　Tom can play the piano.
　→ Tom is able to play the piano.（× Tom are / × Tom be）
主語が三人称単数なら is、複数なら are、I なら am。be を原形のまま書く誤りが非常に多い。

■ ②過去の文では was / were にする
　Tom could play the piano when he was five.
　→ Tom was able to play the piano when he was five.
could をそのまま残して × could be able to としないこと。意味が二重になる。

■ ③否定・疑問の作り方が変わる
can の否定は can't だが、be able to の否定は be動詞に not をつける。
　He can't come. → He is not able to come.
　Can he come? → Is he able to come?
be able to は be動詞の文なので、疑問文では be動詞を主語の前に出す。ここで do を持ち出す誤り（× Does he able to come?）が目立つ。

■ 未来の否定
　He won't be able to come tomorrow.（明日は来られないだろう）
will not be able to の語順で、not は will のうしろに入る。

⚠ 注意：be able to の主語はふつう人である。ものを主語にした一般的な可能性（Accidents can happen.）を be able to で言いかえることはできない。書きかえは「能力」の can のときだけ成り立つ。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は来年、車を運転できるようになるでしょう」を英語にしなさい。',
        wrongAnswer: 'He will can drive a car next year.',
        trapExplanation: '「〜だろう」は will、「〜できる」は can と一語ずつ置きかえていくと、助動詞が二つ並んだ文ができあがってしまう。',
        correctAnswer: 'He will be able to drive a car next year.',
        correctExplanation:
          '英語では助動詞を二つ続けて使えない。will のうしろは動詞の原形が来るので、can の代わりに原形の be を持つ be able to を使い、will be able to とする。同じ理由で must の未来は will have to になる。',
      },
      {
        question: '次の文のまちがいを直しなさい。 I want to can speak English like you.',
        wrongAnswer: 'I want to can speaking English like you.',
        trapExplanation: 'to のうしろが原形だから can でよいと考え、あとの動詞の形だけを直そうとしてしまう。can が原形だという思いこみが原因である。',
        correctAnswer: 'I want to be able to speak English like you.',
        correctExplanation:
          'can には原形がなく、to のうしろに置くことはできない。to be able to speak という形にする。to のあとに助動詞は置けない、と覚えておくと、to must（→ to have to）の誤りも防げる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s149',
    subject: 'eigo',
    examType: 'koko',
    title: 'could の二つの顔：過去の能力と、控えめな言い方',
    description: '過去形なのに現在の意味になる could。丁寧な依頼・弱い推量の用法をつかむ',
    order: 649,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: 'Could you help me? と言われて、「過去のことを聞かれている」と思う人はいない。could は can の過去形なのに、この文では過去の意味をまったく持っていない。英語では、わざと過去形にして「今のことから一歩下がる」ことで、丁寧さや控えめさを出す。時間の距離を、心の距離に使い回しているのである。',
    keyPoints: [
      'could の意味は大きく二つ。①過去の能力「〜できた」 ②現在の控えめ・丁寧な言い方。',
      'Could you 〜?（〜してくださいませんか）は Can you 〜? より丁寧。過去の意味はない。',
      'Could I 〜?（〜してもよろしいですか）は Can I 〜? より丁寧な許可の求め方。',
      'It could be 〜 は「〜かもしれない」（may より確信が弱い）。',
      'Could you 〜? への答えに Yes, I could. は使わない。Sure. / Of course. / All right. と答える。',
    ],
    sections: [
      {
        heading: '①過去の能力を表す could',
        body: `まず基本の使い方から確認する。could は can の過去形として「〜できた」を表す。

例）I could swim when I was five years old.（五歳のとき泳げた）
例）My grandfather could read four languages.（祖父は四か国語を読めた）
例）I couldn't sleep well last night.（昨夜はよく眠れなかった）

■ 「そのころは〜できた」という状態
この could は、ある期間ずっと持っていた力を表す。「五歳のとき」「若いころ」のように、期間を表す語句といっしょに出てくることが多い。
　When I was a child, I could run very fast.

■ 否定は couldn't が広く使える
「〜できなかった」は、一回きりの出来事でも期間の話でも couldn't でよい。
例）I couldn't find my key this morning.（今朝、鍵が見つからなかった）
肯定の could には制限があるが（s150 で扱う）、否定にはこの制限がない。ここは覚えやすい非対称である。

■ 時制の一致で現れる could
過去の文の中では、can が自動的に could に変わる。
例）He said, "I can help you." → He said that he could help me.
この could も「〜できる」という意味のまま、形だけが過去になったものである。長文中の could を全部「〜できた」と訳すと不自然になることがあるのは、このためである。

★ ポイント：could を見たら、まず「過去の話か、今の話か」を文全体から判断する。時を表す語句（yesterday, when I was 〜, then）があれば過去、なければ次に扱う控えめな用法を疑う。`,
      },
      {
        heading: '②控えめ・丁寧を表す could',
        body: `過去形をわざと使うと、「今ここ」から一歩引いた言い方になる。英語ではこれを丁寧さとして利用する。

■ Could you 〜?（〜してくださいませんか）
例）Could you say that again, please?（もう一度おっしゃっていただけますか）
Can you 〜? が「ねえ、〜してくれる？」なら、Could you 〜? は「〜していただけますか」。相手に断る余地を残す言い方である。
⚠ 注意：答えるときに Yes, I could. とは言わない。過去のことを聞かれているわけではないからである。Sure. / Of course. / All right. / Certainly. と答え、断るときは I'm sorry, I can't. と言う。

■ Could I 〜?（〜してもよろしいですか）
例）Could I use your bike?（自転車をお借りしてもよろしいですか）
Can I 〜? より遠慮した許可の求め方。答えは Sure, go ahead. など。

■ 弱い推量の could
例）The rumor could be true.（そのうわさは本当かもしれない）
may より自信のない言い方で、「可能性としてはありうる」という程度である。might とほぼ同じ強さと考えてよい。

■ まとめ方
　過去の意味あり　→ ①「〜できた」
　過去の意味なし　→ ②丁寧・控えめ（依頼・許可・弱い推量）
Could you 〜? / Could I 〜? / could be 〜 の三つの形を見たら、ほぼ②だと判断してよい。`,
      },
    ],
    trapExamples: [
      {
        question: '対話を完成させなさい。 A: Could you carry this box for me? B: （　）',
        wrongAnswer: 'Yes, I could.',
        trapExplanation: 'Could で聞かれたのだから could で答える、という「答え方の原則」を機械的に当てはめてしまう。しかしこの Could you は過去のことをたずねる文ではない。',
        correctAnswer: 'Sure. / Of course. / All right.',
        correctExplanation:
          'Could you 〜? は丁寧な依頼で、能力をたずねているのではない。だから Yes, I could.（できました）という応答は意味が合わない。引き受けるときは Sure. / Certainly. / All right.、断るときは I\'m sorry, I can\'t. と答える。',
      },
      {
        question: '次の文を日本語にしなさい。 The story could be true.',
        wrongAnswer: 'その話は本当でありえた。',
        trapExplanation: 'could を機械的に can の過去形と考え、「〜できた」「〜でありえた」と過去で訳してしまう。過去を表す語句が文中にないことを見落としている。',
        correctAnswer: 'その話は本当かもしれない。',
        correctExplanation:
          '過去を表す語句がなく、うしろが be＋形容詞になっている could は、現在の控えめな推量を表す。may より自信のない「〜かもしれない」である。could を見たら、まず文中に過去を示す語があるかを確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s150',
    subject: 'eigo',
    examType: 'koko',
    title: 'could と was able to：「実際にやりとげた」のはどちらか',
    description: '一回きりの成功には was able to。肯定文だけに現れる使い分けを押さえる',
    order: 650,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '「昨日、やっと彼と話すことができた」を I could talk with him yesterday. と書くと、英語では不自然に響く。could は「その気になればできる状態だった」までしか言えず、「実際にやりとげた」という報告には向かないからである。一回きりの達成には was able to を使う、という一線がここにある。',
    keyPoints: [
      '一般的な能力（そのころずっとできた）＝ could。',
      '一回きりの場面で実際にやりとげた＝ was / were able to（managed to と同じ感覚）。',
      'この区別が問題になるのは肯定文だけ。否定文はどちらも couldn\'t / wasn\'t able to でよい。',
      'see, hear, feel, understand, remember など知覚・心理を表す動詞は、一回のことでも could が自然。',
      '入試では「ついに〜できた」「なんとか〜できた」という日本語が was able to の合図になる。',
    ],
    sections: [
      {
        heading: '「できる状態だった」と「実際にやった」の差',
        body: `could は「その力・条件がそなわっていた」という状態を表す。一方 was able to は、その力を使って実際に結果を出したことまで含む。

■ 一般的な能力 → could
例）I could run fast when I was in elementary school.（小学生のころは速く走れた）
「ずっとその力があった」という状態の説明である。

■ 一回きりの達成 → was / were able to
例）The firefighters were able to save the child.（消防士たちはその子を救うことができた）
例）I was able to finish my homework before dinner.（夕食前に宿題を終わらせることができた）
どちらも「その場面で実際にやりとげた」という報告である。ここを could にすると、英語話者には「やろうと思えばできる状態だった（実際にやったかは不明）」と聞こえてしまう。

■ 見分けの合図になる日本語
「ついに」「なんとか」「〜することができた（そしてやった）」→ was / were able to
「そのころは〜できた」「若いころは〜できた」→ could

■ 否定文には区別がない
例）I couldn't catch the last train.／I wasn't able to catch the last train.
どちらも自然である。「できなかった」＝結果が出ていない点は共通なので、区別する必要がないためである。

★ ポイント：肯定文で一回きりの出来事を語るときだけ was able to を選ぶ。この一点さえ押さえれば、あとは could でよい。`,
      },
      {
        heading: '例外：見えた・聞こえた・わかった は could',
        body: `一回きりの出来事でも、次のグループの動詞は could を使うのが自然である。

■ 知覚・心理を表す動詞
see（見える）／hear（聞こえる）／feel（感じる）／smell（においがする）／understand（わかる）／remember（思い出せる）／believe

例）From the top of the hill, I could see the whole town.（丘の上から町全体が見えた）
例）I could hear someone singing in the next room.
例）I couldn't understand what he said at that time.

■ なぜ例外になるのか
これらは「努力してやりとげる行為」ではなく、条件がそろえば自然に起こる状態だからである。「見ようと努力して見た」のではなく「見える状態にあった」。だから was able to の「やりとげた」という感じが合わない。

■ 実際の入試での出方
・和文英訳「山の頂上から海が見えた」→ I could see the sea from the top of the mountain.
・並べかえ問題で was / able / to が選択肢にないときは、could を使う合図でもある。

⚠ 注意：規則を覚えたばかりの受験生は「一回きり＝was able to」と機械的に当てはめて、I was able to see 〜 と書きがちである。動詞の種類まで見てから決めること。なお see に「会う」の意味があるとき（I was able to see the doctor yesterday.）は達成なので was able to でよい。同じ単語でも意味で判断が変わる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は道に迷ったが、ついに駅を見つけることができた」を英語にしなさい。',
        wrongAnswer: 'He got lost, but he could find the station at last.',
        trapExplanation: '「〜できた」を見た瞬間に could と訳してしまう。could は「できる状態だった」までしか表さず、実際にやりとげたという報告にならない。',
        correctAnswer: 'He got lost, but he was able to find the station at last.',
        correctExplanation:
          '「ついに」「やっと」がついた一回きりの達成は was / were able to で表す。managed to find と言いかえられるかどうかで確かめるとよい。逆に「そのころは〜できた」という一般的能力なら could を使う。',
      },
      {
        question: '「そのとき、私は山の頂上をはっきり見ることができた」を英語にしなさい。',
        wrongAnswer: 'I was able to see the top of the mountain clearly then.',
        trapExplanation: '「一回きりの出来事だから was able to」という規則をそのまま当てはめてしまい、動詞が see であることを見落としている。',
        correctAnswer: 'I could see the top of the mountain clearly then.',
        correctExplanation:
          'see・hear・feel・understand など知覚や心理を表す動詞は、一回きりの場面でも could を使うのがふつうである。これらは努力してやりとげる行為ではなく、条件がそろって自然にそうなる状態を表すからである。',
      },
    ],
  },

  // ───────────────── 2. may / might（s151〜s153） ─────────────────
  {
    id: 'koko_eigo_s151',
    subject: 'eigo',
    examType: 'koko',
    title: 'may①：許可を表す may と May I 〜?',
    description: '「〜してもよい」の may。丁寧な許可の求め方と、その答え方をそろえる',
    order: 651,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    intro: 'デパートで店員に声をかけられるとき、決まって May I help you? と言われる。Can I help you? でも通じるが、初対面の客には一段あらたまった may が選ばれる。同じ「〜してもいいですか」でも、相手との距離によって語を選び分けている。この感覚がつかめると、会話文の空所補充が一気に解きやすくなる。',
    keyPoints: [
      'may は「〜してもよい」という許可を表す助動詞。うしろは動詞の原形。',
      'May I 〜? は Can I 〜? より改まった許可の求め方。店員の May I help you? が代表例。',
      'You may 〜. は「〜してよろしい」と許可を与える言い方。目上には使わない。',
      'may not は「〜してはいけない」（許可しない）。must not よりはおだやかだが禁止である。',
      'May I 〜? への答えは Sure. / Of course. / Go ahead. など。Yes, please. は Shall I 〜? への答え。',
      '相手に何かを頼むときに May you 〜? とは言えない。依頼は Will / Would / Could you 〜? を使う。',
    ],
    sections: [
      {
        heading: '許可を求める May I 〜?',
        body: `may の第一の用法は許可である。相手に「〜してもよいか」とたずねるときは、主語を I にして May I 〜? の形にする。

例）May I come in?（入ってもよろしいですか）
例）May I use your dictionary?（辞書をお借りしてもよろしいですか）
例）May I ask you a question?（質問してもよろしいですか）

■ Can I 〜? との違い
　Can I 〜?　友達・家族など親しい相手に。ふだんの会話。
　May I 〜?　店員と客、初対面、先生や目上の人に。改まった場面。
どちらも文法的に正しい。試験では「ていねいな言い方に直しなさい」という指示で May I や Could I が答えになる。

■ 答え方
　引き受ける：Sure. / Of course. / Certainly. / Go ahead. / Yes, you may.（目上が目下に許可を与える言い方）
　断る：I'm sorry, but you can't. / I'm afraid not.
⚠ 注意：Yes, please. は「はい、お願いします」という意味で、Shall I 〜?（〜しましょうか）や Would you like 〜?（〜はいかがですか）への答えである。May I use your pen? に Yes, please. と答えると、「はい、お願いします」となって話がかみ合わない。

■ 店で使う May I help you?
店員が客に言う決まり文句で、「いらっしゃいませ・何かお探しですか」にあたる。客の答えは Yes, please. I'm looking for a T-shirt. や No, thank you. I'm just looking. となる。逆に客が店員に May I help you? と言うことはない。`,
      },
      {
        heading: '許可を与える You may と、禁止の may not',
        body: `主語を you にすると、許可を与える文になる。

例）You may use this computer.（このコンピュータを使ってよろしい）
例）You may go home now.（もう帰ってよろしい）

■ 立場に注意
You may 〜. は「許可を与える」立場からの言い方なので、先生が生徒に、親が子どもに、というときに使う。生徒が先生に You may 〜. と言うと、たいへん失礼になる。同じ「どうぞ」でも、相手が目上なら Please go ahead. のような言い方を選ぶ。

■ may not は「〜してはいけない」
例）You may not take pictures in this museum.（この美術館では写真を撮ってはいけません）
許可を与えないという意味なので、結果として禁止になる。掲示や規則の文でよく見かける。must not よりは冷静な言い方だが、禁止であることに変わりはない。
　must not　＝強い禁止（絶対にだめ）
　may not　＝許可しない（規則としてだめ）

■ 短縮形がないことに注意
may not に短縮形はない（× mayn't はふつう使わない）。答案では may not とそのまま書く。

★ ポイント：may には次のセッションで扱う「〜かもしれない」の意味もある。You may not go out. は文脈しだいで「外出してはいけない」とも「外出しないかもしれない」とも読める。主語が you で規則の話なら許可、それ以外なら推量、というのが読み分けの目安になる。`,
      },
    ],
    trapExamples: [
      {
        question: '対話として自然でないものを選びなさい。 A: May I open the window? B: ①Sure, go ahead. ②Of course. ③Yes, please.',
        wrongAnswer: '③は「はい、お願いします」だから自然である',
        trapExplanation: 'Yes, please. は日本語にすると「はい、どうぞ」に近く聞こえるため、許可を与える返事としても使えると思いこんでしまう。',
        correctAnswer: '③Yes, please. が不自然',
        correctExplanation:
          'Yes, please. は「はい、お願いします」と相手に何かをしてもらう答えであり、Shall I open the window?（開けましょうか）への返事である。May I 〜? は自分が動く許可を求める文なので、答えは Sure. / Of course. / Go ahead. となる。主語が I か you かで答え方が変わる。',
      },
      {
        question: '「窓を開けてくださいませんか」を英語にしなさい。',
        wrongAnswer: 'May you open the window?',
        trapExplanation: '「〜してもよいですか」の May I 〜? を覚えたあと、主語を you に変えれば依頼になるはずだと考えてしまう。',
        correctAnswer: 'Would you open the window? / Could you open the window?',
        correctExplanation:
          'may は「許可」を表す語なので、相手に行動を頼む依頼の文には使えない。May you 〜? という言い方は英語に存在しない。依頼は Will you / Can you（親しい相手）、Would you / Could you（丁寧）を使う。主語が I なら許可、you なら依頼、と整理しておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s152',
    subject: 'eigo',
    examType: 'koko',
    title: 'may②・might：「〜かもしれない」の推量',
    description: '半々の可能性を表す may と、より控えめな might。否定の形と訳し方',
    order: 652,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: '空が少し暗い。「雨が降るかもしれない」と言いたいが、降るとも降らないとも決めきれない。この「五分五分」の気持ちを一語で表すのが may である。might にすると「ひょっとしたら」とさらに自信がなくなる。天気予報のように断定を避けたい場面で、英語はこの二語を使い分けている。',
    keyPoints: [
      'may は「〜かもしれない」という推量を表す。可能性は半々くらい。',
      'might は may より自信のない言い方。「ひょっとすると〜かもしれない」。',
      'might は形こそ may の過去形だが、単独で使えば現在の推量を表す。',
      '否定の may not / might not は「〜でないかもしれない」。禁止の may not と文脈で区別する。',
      '「〜だったかもしれない」と過去のことを言うときは may / might have＋過去分詞。',
    ],
    sections: [
      {
        heading: '推量の may と might',
        body: `may のもう一つの用法が推量である。「そうかもしれないし、そうでないかもしれない」という、判断を保留した言い方になる。

例）It may rain tomorrow.（明日は雨かもしれない）
例）He may be at home now.（彼は今、家にいるかもしれない）
例）She may know the answer.（彼女は答えを知っているかもしれない）

■ might はもっと控えめ
例）It might snow tonight.（ひょっとすると今夜は雪かもしれない）
may が五分五分なら、might は「その可能性も一応ある」程度。会話では自信のなさや遠慮を出すために might がよく選ばれる。試験で may と might のどちらでも正解になる場面は多いが、「ひょっとしたら」「もしかすると」という日本語がついていたら might を選ぶとよい。

■ 形の注意
どちらも助動詞なので、うしろは必ず原形。
　× He may is busy.　○ He may be busy.
名詞・形容詞の前には be を忘れないこと。ここは can't be / must be と同じ落とし穴である。

■ 疑問文には使わない
「彼は家にいるだろうか」を May he be at home? とは言わない。推量を疑問文にするときは Do you think he is at home? や Is he at home? のように言う。may の疑問文 May I 〜? は許可を求める文であって、推量ではない。

★ ポイント：may を見たら「〜してもよい」と「〜かもしれない」の二択。主語が I で疑問文なら許可、主語が三人称で肯定文なら推量、という見分けが実戦的である。`,
      },
      {
        heading: '否定の形と、過去のことを言う形',
        body: `■ may not / might not は「〜でないかもしれない」
例）He may not come to the party.（彼はパーティーに来ないかもしれない）
例）She might not know about it.（彼女はそのことを知らないかもしれない）
推量の否定は「可能性が低い」ではなく「〜しないという可能性がある」という意味になる。「来ないかもしれない」であって「来るはずがない」ではない。強く打ち消すのは can't（〜のはずがない）である。

■ 禁止の may not との見分け
　You may not use this room.（この部屋を使ってはいけない）＝規則の話・主語は you
　He may not use this room.（彼はこの部屋を使わないかもしれない）＝推量
主語と場面で判断する。学校の掲示や先生のことばなら禁止、うわさ話や予想なら推量である。

■ 過去のことを推量する形
「〜だったかもしれない」は may / might have＋過去分詞。
例）He may have missed the train.（電車に乗り遅れたのかもしれない）
例）She might have been sick yesterday.（昨日は具合が悪かったのかもしれない）
might を「〜だったかもしれない」と訳すのは誤りで、過去の推量にするには have＋過去分詞が必要である。

⚠ 注意：may を含む文が長文に出てきたら、断定していないことを読み落とさないこと。内容一致問題で「〜である」と言い切った選択肢は、本文が may なら不正解になることが多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「明日は雨が降らないかもしれない」を英語にしなさい。',
        wrongAnswer: "It can't rain tomorrow.",
        trapExplanation: '「〜ないかもしれない」の「ない」に引かれて強い否定 can\'t を選んでしまう。can\'t は「〜のはずがない」という断定であり、可能性を残す言い方ではない。',
        correctAnswer: 'It may not rain tomorrow. / It might not rain tomorrow.',
        correctExplanation:
          '推量の否定は may not / might not で表し、「〜しないかもしれない」となる。can\'t は可能性をゼロにする断定なので意味が強すぎる。「かもしれない」が残っている日本語なら may / might を使う。',
      },
      {
        question: '次の文を日本語にしなさい。 He might be sick.',
        wrongAnswer: '彼は病気だったかもしれない。',
        trapExplanation: 'might が may の過去形だと知っているために、そのまま過去の意味で訳してしまう。文中に過去を表す語がないことを見落としている。',
        correctAnswer: '彼は病気かもしれない。',
        correctExplanation:
          'might は形の上では may の過去形だが、単独で使えば現在についての控えめな推量を表す。過去のことを推量するには might have been のように have＋過去分詞を続ける必要がある。He might have been sick. なら「病気だったのかもしれない」となる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s153',
    subject: 'eigo',
    examType: 'koko',
    title: '推量の助動詞くらべ：確信の強さと言い方の控えめさ',
    description: 'must / will / should / may / might / can\'t を一本の物差しの上に並べる',
    order: 653,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '同じ「彼は家にいる」でも、He must be home. と He might be home. では話し手の自信がまるで違う。日本語なら「〜にちがいない」「〜かもしれない」と語尾を変えるところを、英語は助動詞一語で調節する。助動詞を確信の強さの順に並べて頭に入れておくと、空所補充で迷わなくなる。',
    keyPoints: [
      '確信の強い順：must（〜にちがいない）＞ will ＞ should（〜のはずだ）＞ may ＞ might / could（〜かもしれない）。',
      '否定側の断定は can\'t（〜のはずがない）。must not は禁止であって推量の否定ではない。',
      '推量の助動詞のうしろが名詞・形容詞なら be を必ず入れる（must be / may be / can\'t be）。',
      'maybe（たぶん）は一語の副詞、may be（〜かもしれない）は助動詞＋動詞。書き分ける。',
      '確信が弱い語ほど、言い方としては控えめ・丁寧に響く。',
    ],
    sections: [
      {
        heading: '確信の強さで並べる',
        figureId: 'lf_kokoeigoext05_153',
        body: `同じ場面を、助動詞だけ変えて言ってみる。

　He must be tired.（疲れているにちがいない）……根拠があって、ほぼ確信
　He will be tired.（疲れているだろう）……高い確率での予想
　He should be tired.（疲れているはずだ）……当然そうなるという予想
　He may be tired.（疲れているかもしれない）……五分五分
　He might be tired.（ひょっとすると疲れているかもしれない）……自信なし
　He can't be tired.（疲れているはずがない）……ありえないという断定

■ 二つの端は「言い切り」
must と can't は、向きこそ逆だがどちらも言い切っている。根拠がある場面で使う。
例）He must be hungry. He hasn't eaten anything since morning.
例）He can't be hungry. He had a big lunch an hour ago.
根拠を示す文がうしろに続くことが多いので、空所補充では前後の文が決め手になる。

■ 真ん中は「保留」
may / might / could は判断を保留する言い方である。うわさ・予想・遠慮のある発言に出てくる。

■ should は「当然そうなるはず」
例）The train should arrive at ten.（電車は十時に着くはずだ）
時刻表や約束など、根拠のある予定について「そうなるはず」と言う。must ほど強くはない。

★ ポイント：確信が弱い語ほど、聞き手には控えめで丁寧に響く。だから依頼でも Can you 〜? より Could you 〜? のほうが丁寧になる。確信の強さと丁寧さは、同じ物差しの裏表である。`,
      },
      {
        heading: 'まちがえやすい二つの書き分け',
        body: `■ ①maybe と may be
　maybe：一語の副詞。「たぶん」。文の最初に置くことが多い。
　　例）Maybe he is at home.
　may be：助動詞 may＋動詞 be。「〜かもしれない」。
　　例）He may be at home.
意味はほぼ同じだが、品詞も位置も違う。× He maybe at home. は動詞が抜けた文になるので誤り。逆に × May be he is at home. も誤り。並べかえ問題で maybe が一語のカードで出たら文頭、may と be が別々のカードなら主語のうしろ、と判断する。

■ ②be の入れ忘れ
日本語の「彼は忙しいにちがいない」には「である」にあたる語が見えないため、× He must busy. と書く誤りが非常に多い。助動詞のうしろは動詞の原形でなければならないので、形容詞・名詞の前には be が要る。
　○ He must be busy.／○ It may be true.／○ She can't be a doctor.

■ 推量の否定は can't
　「〜にちがいない」　→ must be
　「〜のはずがない」　→ can't be（× must not be）
must not be は「〜であってはならない」という禁止・要求の意味になってしまう。

⚠ 注意：長文で He may be the man we are looking for. のような文が出たら、話し手はまだ確定していない。設問の選択肢が「彼が探している男だとわかった」となっていれば、それは言いすぎで不正解になる。助動詞は確信の度合いを示す情報として読むこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は疲れているにちがいない」を英語にしなさい。',
        wrongAnswer: 'He must tired.',
        trapExplanation: '日本語には「である」にあたる語が現れないため、must のうしろにそのまま形容詞をつないでしまう。',
        correctAnswer: 'He must be tired.',
        correctExplanation:
          '助動詞のうしろには必ず動詞の原形が来る。tired は形容詞なので、動詞 be を入れて must be tired とする。may be / can\'t be / should be も同じで、名詞・形容詞の前には be が必要である。',
      },
      {
        question: '空所に入る語を選びなさい。 This bag （　） be Ken\'s. He doesn\'t like this color at all. ①must ②can\'t',
        wrongAnswer: '①must',
        trapExplanation: '「〜にちがいない」を表す must を覚えたばかりだと、推量の空所を見ただけで must を選んでしまい、うしろの否定的な根拠を読まずに終わってしまう。',
        correctAnswer: '②can\'t',
        correctExplanation:
          '第二文が「彼はこの色がまったく好きではない」という否定の根拠なので、「これがケンのかばんのはずがない」となる。推量の空所補充は必ず前後の文で根拠を確かめる。肯定的な根拠なら must be、否定的な根拠なら can\'t be が入る。',
      },
    ],
  },

  // ───────────────── 3. must / have to と否定の違い（s154〜s159） ─────────────────
  {
    id: 'koko_eigo_s154',
    subject: 'eigo',
    examType: 'koko',
    title: 'must①：義務「〜しなければならない」の形',
    description: 'must の形の決まりと、Must I 〜? への答え方を正しく身につける',
    order: 654,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    intro: '「もう寝なさい」と言うかわりに、英語は You must go to bed now. と言う。must は話し手が「そうしないといけない」と強く思っていることを示す語で、命令に近い重さがある。形は単純だが、to を入れてしまう誤りと、答え方をまちがえる落とし穴が待っている。',
    keyPoints: [
      'must＋動詞の原形で「〜しなければならない」。to は入れない（× must to）。',
      'must は人称でも数でも形を変えない（× He musts）。過去形・未来形も持たない。',
      'must は話し手自身の強い気持ちや判断からくる義務を表す。',
      '疑問文は Must I 〜? だが、実際の会話では Do I have to 〜? のほうがよく使われる。',
      'Must I 〜? に「いいえ、その必要はありません」と答えるときは No, you don\'t have to. とする。',
    ],
    sections: [
      {
        heading: 'must の形と意味',
        body: `must は「〜しなければならない」という義務・必要を表す助動詞である。

■ 肯定文：主語＋must＋動詞の原形〜.
例）I must finish this report today.（今日この報告書を仕上げなければならない）
例）You must be quiet in the library.（図書館では静かにしなければならない）
例）We must help each other.

■ 形の三つの決まり
①うしろは動詞の原形。to を入れない。
　× You must to go home.　○ You must go home.
②主語が三人称単数でも変化しない。
　× He musts study.　○ He must study.
③must には過去形も未来形もない。過去は had to、未来は will have to で表す（s159 で扱う）。

■ must が表す「気持ち」
must は、話し手が心の中で「これはやらないといけない」と判断していることを表す。だから自分に言い聞かせる文や、強く勧める文でよく使われる。
例）I must call her tonight.（今夜彼女に電話しなくちゃ）
例）You must see this movie. It's wonderful.（この映画は絶対に見るべきだ）
最後の例のように、強くすすめる意味にもなる。「見なければ罰せられる」わけではなく、話し手の熱意を表している。

★ ポイント：must は規則そのものというより、話し手の判断の強さを表す。外から与えられた事情を言うときは、次のセッションで扱う have to のほうが自然になる。`,
      },
      {
        heading: '疑問文と、その答え方',
        body: `■ 疑問文は must を主語の前に出す
例）Must I go there alone?（一人でそこへ行かなければなりませんか）
ただし実際の会話では Do I have to go there alone? のほうがよく使われる。must の疑問文は少し形式ばった響きがある。

■ 答え方に落とし穴がある
　はい、その必要があります　→ Yes, you must.
　いいえ、その必要はありません　→ No, you don't have to.
must で聞かれたのだから must で答える、と考えて No, you mustn't. と書くと、「絶対にしてはいけない」という禁止の返事になってしまう。行かなくてもよいと言いたいのに、行くなと止めていることになり、意味が正反対になる。

例）A: Must I finish this today?（今日中に終わらせないといけませんか）
　　B: No, you don't have to. You can do it tomorrow.（いいえ、その必要はありません。明日でいいですよ）
　　B': No, you mustn't.（いいえ、やってはいけません）……禁止になってしまう

■ 表にして覚える
　Must I 〜? — Yes, you must.（しなければならない）
　　　　　　 — No, you don't have to.（しなくてよい）
　　　　　　 — No, you mustn't.（してはいけない）※必要性を否定していない

⚠ 注意：この「must の否定は二種類ある」という点が、この単元最大のテーマである。s156・s157 でくわしく扱うが、答え方の場面でも同じ落とし穴が待っていることを、いま押さえておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文のまちがいを直しなさい。 You must to wash your hands before dinner.',
        wrongAnswer: 'You must to washing your hands before dinner.',
        trapExplanation: 'have to の形が頭にあると must to も正しく見えてしまい、to のあとの動詞の形だけを直そうとしてしまう。',
        correctAnswer: 'You must wash your hands before dinner.',
        correctExplanation:
          'must は助動詞なので、うしろは動詞の原形が直接続く。to が必要なのは have to のほうで、have to は have＋to不定詞という別の形である。must to という形は英語に存在しない。',
      },
      {
        question: '対話を完成させなさい。 A: Must I clean this room now? B: No, you （　）. You can do it later.',
        wrongAnswer: "No, you mustn't.",
        trapExplanation: 'Must で聞かれたら must で答える、という原則をそのまま当てはめてしまう。しかし mustn\'t は「してはいけない」という禁止になり、あとに続く「あとでやればいい」と食い違う。',
        correctAnswer: "No, you don't have to.",
        correctExplanation:
          '「その必要はない」と必要性を打ち消すときは don\'t have to を使う。mustn\'t は行為そのものを禁止する語なので、Must I 〜? への「いいえ」の答えには使えない。あとに続く文が Yes 側か No 側かの手がかりになる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s155',
    subject: 'eigo',
    examType: 'koko',
    title: 'have to：must との違いと、時制の広さ',
    description: 'has to / had to / will have to。形の変化と、外からの事情という意味',
    order: 655,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: '「明日は六時に起きなければならない」。理由が「自分がそう決めたから」なら must、「始発に乗る必要があるから」なら have to がなじむ。さらに have to には、must にはない大きな強みがある。過去にも未来にも姿を変えられることだ。must が現在にしか立てない一本足であるのに対し、have to は時間の上を自由に歩ける。',
    keyPoints: [
      'have to＋動詞の原形で「〜しなければならない」。主語が三人称単数なら has to。',
      'have to は一般動詞の文。疑問・否定には do / does / did を使う。',
      'must は現在の意味しか表せない。過去は had to、未来は will have to。',
      'must は話し手の judgment（判断・気持ち）、have to は外からの事情、というのが基本の感じ分け。',
      '発音は have to ＝ハフトゥ、has to ＝ハストゥ。to の前で音が変わる。',
    ],
    sections: [
      {
        heading: 'have to の形——一般動詞として扱う',
        figureId: 'lf_kokoeigoext05_155',
        body: `have to は二語で一つの助動詞のようにはたらくが、文の作り方は一般動詞 have と同じである。ここが must との最大のちがいになる。

■ 肯定文
例）I have to get up at six.
例）He has to get up at six.（主語が三人称単数なら has to）
例）They have to wear uniforms at school.

■ 否定文（do / does を使う）
例）I don't have to get up early on Sundays.
例）She doesn't have to come tomorrow.
　× She hasn't to come. は現代英語ではふつう使わない。

■ 疑問文（Do / Does を主語の前に）
例）Do I have to answer this question?
例）Does he have to go there?
　× Have you to go? は使わない。× Does he must go? は助動詞が二つで誤り。
答えは Yes, you do. / No, you don't. のように do で返す。

■ 時制を自由に変えられる
　現在：I have to work today.
　過去：I had to work yesterday.
　未来：I will have to work tomorrow.
　助動詞のあと：You may have to wait.（待たなければならないかもしれない）
must は現在にしか使えないので、過去・未来・他の助動詞との組み合わせは、すべて have to が引き受ける。

★ ポイント：must と have to の関係は、can と be able to の関係とそっくりである。形が変えられない助動詞のかわりに、変化できる語句が控えている、という同じしくみである。`,
      },
      {
        heading: 'must と have to の意味のちがい',
        body: `二つとも「〜しなければならない」と訳せるが、どこから来た義務なのかが違う。

■ must＝話し手の中から出てくる義務
例）I must study harder.（もっと勉強しなければ、と自分で思っている）
例）You must see a doctor.（心配だから、ぜひ行きなさい）
話し手の判断・熱意・強い勧めを表す。

■ have to＝外の事情から来る義務
例）I have to study for the test tomorrow.（明日試験があるから、勉強せざるをえない）
例）We have to wear a helmet on the bike.（そういう決まりだから）
規則・予定・状況など、自分の外側にある事情が理由になっている。

■ 実際には交換できる場面も多い
現在の肯定文であれば、多くの場合どちらを使っても通じる。試験でどちらか一方に決めさせる問題は、ふつう「時制」か「否定」で判断させる。
　・過去や未来のことなら have to しか使えない
　・否定になると意味がまったく変わる（次のセッション以降）

■ 書きかえ問題の型
　He must leave now. → He has to leave now.
　He had to leave then.（過去は must にできない）
　He will have to leave soon.（未来も must にできない）
主語に合わせて has にするのを忘れないこと。

⚠ 注意：must には「〜にちがいない」という推量の意味もあるが、have to にその意味はない。He must be tired. を He has to be tired. と書きかえることはできない（アメリカ英語の会話では使う場合もあるが、入試では書きかえない）。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文のまちがいを直しなさい。 My sister have to practice the piano every day.',
        wrongAnswer: 'My sister have to practices the piano every day.',
        trapExplanation: '三単現の s が必要だと気づいても、have to を助動詞だと思っているために、うしろの動詞 practice のほうに s をつけてしまう。',
        correctAnswer: 'My sister has to practice the piano every day.',
        correctExplanation:
          'have to の have は一般動詞なので、主語が三人称単数なら has に変える。to のうしろは不定詞なので原形のまま。「s は前の have につく、うしろは原形」と形で覚える。must との大きなちがいである。',
      },
      {
        question: '「彼は今日、学校へ行かなければなりませんか」を英語にしなさい。',
        wrongAnswer: 'Does he must go to school today?',
        trapExplanation: 'have to と must を同じ意味だと覚えているため、疑問文の作り方まで混ぜてしまい、do と助動詞を同時に使う文になってしまう。',
        correctAnswer: 'Does he have to go to school today?',
        correctExplanation:
          'must は助動詞なので疑問文は Must he go 〜? となり、do は使わない。have to は一般動詞の文なので Does he have to 〜? となる。二つの作り方を混ぜて Does he must とすることはできない。答えは Yes, he does. / No, he doesn\'t. で返す。',
      },
    ],
  },

  {
    id: 'koko_eigo_s156',
    subject: 'eigo',
    examType: 'koko',
    title: 'must not：「〜してはいけない」という禁止',
    description: '掲示・校則に出る強い禁止。not の位置と、Don\'t 〜. との関係',
    order: 656,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: 'プールの入口に「走ってはいけません」と書いてある。英語では You must not run here. または Don\'t run here. となる。must に not がついただけなのに、意味は「走らなくてもよい」ではなく「走るな」。not がどの部分を打ち消しているのかを考えると、この強さの理由が見えてくる。',
    keyPoints: [
      'must not（mustn\'t）は「〜してはいけない」という強い禁止を表す。',
      'not が打ち消しているのは「必要」ではなく「その行為」。だから禁止になる。',
      '短縮形 mustn\'t の発音は「マスント」。t の音は落ちる。',
      '助動詞の否定に do は使わない（× You must don\'t 〜）。',
      '命令文の Don\'t 〜. とほぼ同じ意味だが、must not のほうが規則としての重さがある。',
      'must not には過去形がない。過去は wasn\'t allowed to（〜することを許されなかった）などで表す。',
    ],
    sections: [
      {
        heading: 'must not の形と強さ',
        body: `must not は「〜してはいけない」という禁止を表す。学校の規則、公共の場の掲示、親から子への注意など、守らせたい場面で使う。

■ 形
主語＋must not（mustn't）＋動詞の原形〜.
例）You must not swim in this river.（この川で泳いではいけません）
例）You mustn't tell anyone about this.（このことを誰にも言ってはいけない）
例）Students must not use their smartphones in class.

■ 否定に do は使わない
　× You must don't touch it.
　× You don't must touch it.
　○ You must not touch it.
助動詞の否定は「助動詞のうしろに not」で作る。do / does を持ち出すのは、一般動詞の文（have to など）のときだけである。

■ なぜ「しなくてよい」にならないのか
must not は「〜しないことが義務だ」という意味である。not が打ち消しているのは「〜する」という行為のほうであって、「しなければならない」という必要のほうではない。だから結果として、その行為を禁じることになる。
　must ＋ not do　＝「しないことが必要だ」＝してはいけない
必要そのものを打ち消したいときは、have to の否定を使う（次のセッション）。

★ ポイント：掲示・校則・注意書きは、命令文（Don't 〜.）／must not／may not のどれでも書ける。強さの順はおよそ must not ＞ Don't 〜. ＞ may not。書きかえ問題ではこの三つが行き来する。`,
      },
      {
        heading: '命令文との書きかえと、過去の言い方',
        body: `■ Don't 〜. との書きかえ
例）Don't open the door. ＝ You must not open the door.
命令文は目の前の相手にその場で言う形、must not は規則として述べる形、という違いはあるが、書きかえ問題ではほぼ同じ意味として扱われる。
　Don't be late. ＝ You must not be late.
be動詞のときも同じで、must not be 〜 の形になる。

■ 掲示でよく見る形
公共の掲示では、主語を省いた短い形も多い。
　No parking.（駐車禁止）／No smoking.（禁煙）
　Don't touch.（さわらないでください）
これらを文にせよ、という問題では You must not park here. / You must not smoke here. と書ける。

■ 過去の禁止をどう言うか
must には過去形がないため、「〜してはいけなかった」をそのまま must not では表せない。
　例）When I was a child, I wasn't allowed to watch TV after nine.
　　（子どものころ、九時以降テレビを見ることを許されなかった）
入試ではあまり問われないが、must not に過去形がないことは知っておくと、時制の問題で迷わない。

■ 未来の禁止
　You will not be able to enter the room.（部屋に入れなくなる）のように別の言い方をするか、規則の話なら現在の must not のままで未来のことも表せる。
　You must not be late tomorrow.（明日は遅刻してはいけない）

⚠ 注意：must not を「〜する必要はない」と訳す誤りは、和訳問題でも内容一致問題でも失点に直結する。not がついても必要は消えず、行為が禁じられる、と何度も確認しておくこと。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を日本語にしなさい。 You mustn\'t tell anyone about this plan.',
        wrongAnswer: 'この計画について誰かに話す必要はない。',
        trapExplanation: 'must が「しなければならない」だから、否定は「しなくてよい」になるはずだ、と日本語の感覚で機械的に反転させてしまう。',
        correctAnswer: 'この計画について誰にも話してはいけない。',
        correctExplanation:
          'must not は「〜しないことが義務だ」という意味で、行為そのものを禁じる。「〜する必要はない」と必要を打ち消すのは don\'t have to のほうである。この二つは正反対の意味なので、訳し分けを必ず身につける。',
      },
      {
        question: '次の文のまちがいを直しなさい。 You must don\'t play soccer in this park.',
        wrongAnswer: "You don't must play soccer in this park.",
        trapExplanation: '一般動詞の否定文で don\'t を使う習慣が残っているため、助動詞の文にも don\'t を持ちこんでしまい、位置だけを変えて直そうとする。',
        correctAnswer: "You must not play soccer in this park.",
        correctExplanation:
          '助動詞の否定は助動詞のうしろに not を置いて作る。do / does / did を使うのは一般動詞の文だけである。must not（mustn\'t）が正しい形で、don\'t must も must don\'t も英語には存在しない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s157',
    subject: 'eigo',
    examType: 'koko',
    title: '★must not と don\'t have to は正反対',
    description: '同じ「not」でも、禁止になるか自由になるか。入試最頻出の対比',
    order: 657,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: 'must と have to は、肯定文ではほとんど同じ意味で使える。ところが not をつけたとたん、二つは正反対の方向へ分かれる。You must not come.（来てはいけない）と You don\'t have to come.（来なくてよい）。一語の違いで、相手を追い返すか、気楽にさせるかが変わってしまう。ここは入試で最も多く問われる分かれ道である。',
    keyPoints: [
      'must not＝「〜してはいけない」（禁止）。行為そのものを打ち消す。',
      'don\'t have to＝「〜しなくてよい」（不必要）。必要のほうを打ち消す。してもよい。',
      '肯定文の must ≒ have to だが、否定文では意味が正反対になる。',
      'don\'t have to は need not（needn\'t）とほぼ同じ意味。',
      'Must I 〜? への「いいえ」は No, you don\'t have to.（No, you mustn\'t. は禁止になる）。',
    ],
    sections: [
      {
        heading: 'not がどこを打ち消しているか',
        figureId: 'lf_kokoeigoext05_157',
        body: `二つの文を並べて、意味の差を確かめる。

　You must not come tomorrow.　明日は来てはいけない。（来たら困る）
　You don't have to come tomorrow.　明日は来なくてよい。（来ても来なくてもよい）

同じ「not」なのに、なぜここまで違うのか。打ち消している場所が違うからである。

■ must not＝「〜しないこと」が義務
must（義務）＋ not come（来ない）→ 来ないことが義務 → 禁止
not は動詞の側についていて、義務そのものは生きている。

■ don't have to＝「必要」がない
don't（打ち消し）＋ have to（必要がある）→ 必要がない → 自由
not は have to（必要）の側についているので、義務そのものが消える。

■ 図で言えば
　must　　　　　　→ しなければならない（上）
　don't have to　 → どちらでもよい（まん中）
　must not　　　　→ してはいけない（下）
have to に not をつけるとまん中まで下がるだけだが、must に not をつけると一気に下まで落ちる。同じ not でも落ち方が違う、と覚える。

★ ポイント：日本語で確かめるときは「してもいいの？」と自問する。「してもいい」なら don't have to、「だめ」なら must not。`,
      },
      {
        heading: '言いかえと、実戦での見分け方',
        body: `■ don't have to の仲間
　don't have to ＝ don't need to ＝ need not（needn't）
例）You don't have to worry. ＝ You don't need to worry. ＝ You needn't worry.
need not のうしろは原形（needn't worry）、don't need to のうしろは to＋原形（don't need to worry）。形が違うので書きかえ問題では注意する。

■ must not の仲間
　must not ＝ Don't 〜.（命令文）＝ may not（規則として）
例）You must not run here. ＝ Don't run here.

■ 対話文での見分け
問題文の前後に必ずヒントがある。
例）A: Do I have to bring my lunch tomorrow?
　　B: No, you （don't have to）. The school will give us lunch.
　　→ 学校が昼食を出すのだから「持ってこなくてよい」。
例）A: Can I take pictures here?
　　B: No, you （must not）. It's not allowed in this museum.
　　→ 許されていないのだから「撮ってはいけない」。
空所のあとに続く理由の文を読めば、必要の否定か禁止かはすぐ決まる。

■ 過去のこと
　didn't have to 〜　＝〜する必要がなかった（だからしなかった）
　例）I didn't have to go to school yesterday. It was a holiday.
　「してはいけなかった」ではないので注意する。

⚠ 注意：和文英訳で「〜しなくてもよい」を must not と書いてしまうと、意味が完全に逆になる。減点ではなく零点になる誤りなので、書いたあとに「これで相手に禁止していないか」を必ず確かめること。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは明日、早く来なくてもよい」を英語にしなさい。',
        wrongAnswer: "You must not come early tomorrow.",
        trapExplanation: '「〜しなくてもよい」の「ない」を見て、must の否定形をあてはめてしまう。must not は必要を打ち消す形ではなく、行為を禁じる形である。',
        correctAnswer: "You don't have to come early tomorrow.",
        correctExplanation:
          '必要そのものを打ち消して「しなくてよい」と言うときは don\'t have to（＝don\'t need to、needn\'t）を使う。must not は「早く来てはいけない」という禁止になり、意味が正反対になってしまう。',
      },
      {
        question: '対話を完成させなさい。 A: Do I have to wear a school uniform on Saturday? B: No, you （　）. You can wear anything you like.',
        wrongAnswer: "No, you mustn't.",
        trapExplanation: '否定の答えだから強い否定形を選べばよい、と考えて mustn\'t を入れてしまう。あとに続く「好きなものを着てよい」という文と食い違うことに気づいていない。',
        correctAnswer: "No, you don't have to.",
        correctExplanation:
          'あとの文が「好きなものを着てよい」と自由を認めているので、必要を打ち消す don\'t have to が正しい。mustn\'t を入れると「制服を着てはいけない」となり、次の文と矛盾する。空所補充では必ず前後の文との整合を確かめる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s158',
    subject: 'eigo',
    examType: 'koko',
    title: 'must②：「〜にちがいない」という推量',
    description: '義務の must と推量の must を訳し分け、can\'t be と対にして覚える',
    order: 658,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '友だちが朝から何も食べていないと聞いて、You must be hungry! と言う。「おなかがすかなければならない」という命令ではない。目の前の事実から「そうにちがいない」と判断しているのである。同じ must が、義務にも推量にもなる。どちらで読むかは、うしろに be が来るかどうかが大きな手がかりになる。',
    keyPoints: [
      'must には「〜しなければならない」（義務）と「〜にちがいない」（推量）の二つの意味がある。',
      'must be＋名詞・形容詞の形はほぼ推量。must＋一般動詞は義務のことが多い。',
      '推量の must の否定は can\'t（〜のはずがない）。must not は禁止になってしまう。',
      '推量の must は have to で言いかえない。この意味は must 専用と考える。',
      '「〜だったにちがいない」は must have＋過去分詞。',
      '推量の must には、判断のもとになる根拠の文が前後に必ずある。',
    ],
    sections: [
      {
        heading: '義務の must と推量の must',
        figureId: 'lf_kokoeigoext05_158',
        body: `must の二つの意味を、同じ主語で並べてみる。

　You must go home now.　もう家に帰らなければならない。（義務）
　You must be very tired.　とても疲れているにちがいない。（推量）

■ 見分けの目安
①うしろが be＋形容詞・名詞 → 推量であることが多い
　例）He must be a doctor.（医者にちがいない）
　例）She must be at home now.（今、家にいるにちがいない）
②うしろが動作を表す一般動詞 → 義務であることが多い
　例）You must clean your room.（部屋を掃除しなければならない）
③状態を表す一般動詞なら推量もある
　例）He must know her.（彼は彼女を知っているにちがいない）
　例）You must have a lot of homework.（宿題がたくさんあるんだろうね）
know / have / like のような状態動詞のときは、義務ではなく推量で読むほうが自然な場合が多い。

■ 根拠を探す
推量の must には、そう判断した理由が前後にある。
例）He must be hungry. He hasn't eaten anything since this morning.
例）She must be surprised. She didn't know about the party at all.
根拠の文が見つかれば推量、見つからず「そうしなさい」という流れなら義務である。

★ ポイント：訳して確かめるのがいちばん確実。「〜しなければならない」と「〜にちがいない」の両方を当てはめ、文脈に合うほうを選ぶ。`,
      },
      {
        heading: '推量の must を否定するとき',
        body: `■ 否定は can't を使う
　must be 〜（〜にちがいない）　⇔　can't be 〜（〜のはずがない）
例）He must be tired. ⇔ He can't be tired.
must not be は「〜であってはならない」という禁止・要求の意味になってしまうので、推量の否定には使わない。ここは s147・s153 でも確認した重要な対応である。

■ have to で言いかえられない
　He must be tired.（推量）→ × He has to be tired.（入試では書きかえない）
must ⇄ have to の書きかえが成り立つのは、義務の意味のときだけである。書きかえ問題では、まず must の意味を確かめてから手を動かす。

■ 過去の推量：must have＋過去分詞
例）He must have missed the bus.（バスに乗り遅れたにちがいない）
例）She must have been very busy last week.
「〜だったにちがいない」は have＋過去分詞を続ける。× He must was tired. とは書けない（助動詞のうしろは原形）。

■ 対になる形もそろえる
　must have＋過去分詞　〜したにちがいない
　can't have＋過去分詞　〜したはずがない
　may have＋過去分詞　　〜したかもしれない
　should have＋過去分詞　〜すべきだったのに（しなかった）

⚠ 注意：must be の be を落とす誤りが後を絶たない。日本語の「彼は先生にちがいない」には「である」が現れないためである。He must be a teacher. と、be を必ず入れること。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を日本語にしなさい。 You must be tired. You walked for five hours.',
        wrongAnswer: 'あなたは疲れなければならない。五時間も歩いたのだから。',
        trapExplanation: 'must＝「しなければならない」と一通りにしか覚えていないため、うしろが be＋形容詞であることに気づかず、義務として訳してしまう。',
        correctAnswer: 'あなたは疲れているにちがいない。五時間も歩いたのだから。',
        correctExplanation:
          'must＋be＋形容詞は「〜にちがいない」という推量を表す。第二文の「五時間歩いた」が、そう判断した根拠になっている。義務か推量かで迷ったら、両方の訳を当てはめて文脈に合うほうを選ぶ。',
      },
      {
        question: '「彼女は英語を話せるにちがいない」を英語にしなさい。',
        wrongAnswer: 'She must can speak English.',
        trapExplanation: '「〜にちがいない」は must、「〜できる」は can と、日本語の語句ごとに英語をあてはめていくと、助動詞が二つ並んだ文になってしまう。',
        correctAnswer: 'She must be able to speak English.',
        correctExplanation:
          '助動詞は二つ並べられないので、can を be able to に言いかえて must be able to とする。同じ理由で「〜しなければならないだろう」は will have to になる。助動詞が二つ必要になったら、片方を be able to / have to に置きかえる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s159',
    subject: 'eigo',
    examType: 'koko',
    title: 'have to の時制：had to / will have to / didn\'t have to',
    description: 'must が持てない過去と未来を、have to がどう引き受けるか',
    order: 659,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    intro: '「昨日は九時まで働かなければならなかった」。これを must で書こうとすると手が止まる。must には過去形がないからである。かわりに had to が過去を、will have to が未来を受け持つ。そして否定の didn\'t have to は「する必要がなかった」——つまり、しなかったのである。',
    keyPoints: [
      'must の過去は had to、未来は will have to。must 自体は形を変えない。',
      '疑問文は Did you have to 〜? / Will you have to 〜?。',
      'didn\'t have to＝「〜する必要がなかった」。実際にはしていない、という含みがある。',
      '「〜してはいけなかった」は didn\'t have to では表せない（wasn\'t allowed to などを使う）。',
      '他の助動詞と組み合わせるときも have to を使う（may have to／should have to）。',
    ],
    sections: [
      {
        heading: '過去・未来・その他の形',
        body: `must は現在にしか立てない。過去も未来も、have to が引き受ける。

■ 過去：had to
例）I had to walk home yesterday because I missed the last bus.
例）She had to take care of her little brother last Sunday.
主語が何であっても had to（have の過去形は had だけ）。

■ 過去の疑問・否定
例）Did you have to work last night? — Yes, I did. / No, I didn't.
例）I didn't have to go to school yesterday.
一般動詞の文なので did / didn't を使う。

■ 未来：will have to
例）You will have to wait for about ten minutes.
例）We will have to leave early tomorrow morning.
　× You will must wait.（助動詞が二つ）は誤り。

■ 他の助動詞との組み合わせ
　may have to　〜しなければならないかもしれない
　　例）You may have to change trains at Umeda.
　should have to は不自然なので使わない。
　to have to　〜しなければならないこと（不定詞）
　　例）I don't want to have to do it again.

■ 現在完了と組み合わせる形
　例）I have had to work every weekend this month.
やや高度だが、have to が変化できる語句だからこそ可能な形である。must にはこれができない。

★ ポイント：時制が現在以外になった瞬間に must は使えなくなる、と覚えておけば、書きかえ問題で迷うことがない。`,
      },
      {
        heading: 'didn\'t have to の意味を取りちがえない',
        body: `■ didn't have to＝「する必要がなかった」
例）I didn't have to pay for the ticket. My friend bought it for me.
　（チケット代を払う必要がなかった。友達が買ってくれたから）
必要がなかったのだから、ふつうは実際にしていない。ここが日本語の「しなくてもよかった」と重なる。

■ 「してはいけなかった」ではない
禁止の意味を過去で言いたいときは、must not に過去形がないので別の言い方をする。
　例）We weren't allowed to enter the room.（部屋に入ることを許されなかった）
　例）We couldn't enter the room.（入れなかった）
didn't have to と混同すると意味が正反対になる。現在形の must not / don't have to の対比と同じ落とし穴が、過去形でも待っている。

■ should have＋過去分詞との違い
　I didn't have to go.　行く必要がなかった（だから行かなかった。それでよかった）
　I shouldn't have gone.　行くべきではなかった（行ってしまった。後悔している）
どちらも「行かなくてよかった」と訳せてしまうことがあるので、行ったか行かなかったかで区別する。

■ 入試での出方
・和文英訳「昨日は宿題をする必要がなかった」→ I didn't have to do my homework yesterday.
・対話文 A: Did you have to wait long? B: No, I didn't. The bus came soon.
・書きかえ He must finish it today. → 過去の文にせよ → He had to finish it yesterday.

⚠ 注意：had to は「〜しなければならなかった（そしてした）」という含みで使われることが多い。実際にやったかどうかまで問われる内容一致問題では、この含みが答えの決め手になる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は昨日、早く起きなければならなかった」を英語にしなさい。',
        wrongAnswer: 'I must got up early yesterday.',
        trapExplanation: '「〜しなければならない」は must だと覚えているため、過去の文でも must を使い、うしろの動詞だけを過去形にして時制を合わせようとしてしまう。',
        correctAnswer: 'I had to get up early yesterday.',
        correctExplanation:
          'must には過去形がないので、過去の義務は had to で表す。また助動詞のうしろは必ず原形なので、must got という形自体が誤りである。未来なら will have to を使う。',
      },
      {
        question: '次の文を日本語にしなさい。 You didn\'t have to bring your umbrella.',
        wrongAnswer: 'あなたはかさを持ってきてはいけなかった。',
        trapExplanation: 'have to の否定を must not の過去形だと思いこみ、禁止の意味で訳してしまう。現在形の don\'t have to と must not の対比が身についていないと、過去形でも同じ誤りが起きる。',
        correctAnswer: 'あなたはかさを持ってくる必要はなかった。',
        correctExplanation:
          'didn\'t have to は「〜する必要がなかった」であり、禁止ではない。過去の禁止を言いたいときは weren\'t allowed to 〜 や couldn\'t 〜 を使う。not が「必要」を打ち消すのか「行為」を打ち消すのかを、過去形でも同じように見分ける。',
      },
    ],
  },

  // ───────────────── 4. should / had better（s160〜s162） ─────────────────
  {
    id: 'koko_eigo_s160',
    subject: 'eigo',
    examType: 'koko',
    title: 'should：「〜したほうがよい・〜すべきだ」',
    description: '助言を表す should の形と、義務の強さの中での位置',
    order: 660,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    intro: '友だちが咳をしている。「病院に行かなければならない」と言うと強すぎるし、「行ってもいいよ」ではぬるい。ちょうどよい強さが You should see a doctor. である。should は相手に選ぶ余地を残しながら、こうしたほうがよいと背中を押す語で、会話でも作文でも出番がいちばん多い。',
    keyPoints: [
      'should＋動詞の原形で「〜すべきだ・〜したほうがよい」。to は入れない。',
      '否定は should not（shouldn\'t）＝「〜すべきでない」。',
      '疑問文 Should I 〜? は「〜したほうがいいですか」と助言を求める形。',
      '強さの順はおよそ must ＞ have to ＞ had better ＞ should。should はいちばんおだやかな助言。',
      'Should I 〜? に「その必要はない」と答えるときは No, you don\'t have to. とする。',
      '「〜すべきだったのに（しなかった）」は should have＋過去分詞。',
    ],
    sections: [
      {
        heading: 'should の形と使い方',
        figureId: 'lf_kokoeigoext05_160',
        body: `should は助言・当然を表す助動詞である。「そうするのが正しい・そうしたほうがよい」という気持ちで使う。

■ 肯定文
例）You should go to bed early.（早く寝たほうがいいよ）
例）We should help each other.（私たちは助け合うべきだ）
例）He should study harder for the exam.
助動詞なので、主語が三人称単数でも should のままで、うしろは原形（× He should studies）。

■ 否定文
例）You shouldn't eat too much before bed.
例）We should not waste water.
「〜すべきでない・しないほうがよい」という意味。禁止ほど強くはない。

■ 疑問文
例）Should I call him now?（今、彼に電話したほうがいいでしょうか）
例）What should I do?（どうすればいいでしょう）
相手に助言を求める言い方で、会話文の空所補充で頻出する。答えは Yes, you should. / You should wait. のように具体的な助言で返すことが多い。

■ 義務の強さの中での位置
　must　　　　絶対にそうしなければならない
　have to　　 事情としてそうする必要がある
　had better　そうしないとまずいことになる（警告）
　should　　　そうしたほうがよい（助言）
should がいちばんおだやかで、相手に選ぶ余地を残す。作文でアドバイスを書くときは should がいちばん無難である。

★ ポイント：日本語の「〜すべきだ」は強く聞こえるが、英語の should はそこまで強くない。「〜したほうがいいよ」くらいの気持ちで使ってよい。`,
      },
      {
        heading: '答え方と、過去のことを言う形',
        body: `■ Should I 〜? への答え
　はい、そうすべきです　→ Yes, you should.
　いいえ、その必要はありません　→ No, you don't have to.
　いいえ、やめたほうがいい　→ No, you shouldn't.
「必要がない」と「やめたほうがよい」は別のことなので、答えを選ぶときは前後の文を見る。
例）A: Should I bring my lunch tomorrow?
　　B: No, you don't have to. The school will give us lunch.（必要がない）
例）A: Should I tell him the truth?
　　B: No, you shouldn't. It will hurt him.（やめたほうがよい）

■ should have＋過去分詞
「〜すべきだったのに（実際にはしなかった）」という後悔・非難を表す。
例）I should have studied harder.（もっと勉強すべきだった）
例）You should have told me earlier.（もっと早く言ってくれればよかったのに）
　× I should studied harder. とは書けない。助動詞のうしろは原形なので、have＋過去分詞の形にする。
否定は shouldn't have＋過去分詞（〜すべきではなかったのに、してしまった）。
例）I shouldn't have said that.

■ 「〜のはずだ」の should
should には推量の用法もある（s162 でくわしく扱う）。
例）The train should be here soon.（電車はもうすぐ来るはずだ）

⚠ 注意：should to と書く誤りが多い。ought to（〜すべきだ）に to があるため混ざるのだが、should のうしろに to は入らない。ought to はうしろが原形で、否定は ought not to となる。`,
      },
    ],
    trapExamples: [
      {
        question: '対話を完成させなさい。 A: Should I bring something to drink? B: No, you （　）. I\'ll buy some juice for everyone.',
        wrongAnswer: "No, you shouldn't.",
        trapExplanation: 'Should で聞かれたのだから should で答える、と機械的に考えてしまう。shouldn\'t は「持ってこないほうがよい」と止める意味になり、あとの「みんなの分を買う」という文とずれる。',
        correctAnswer: "No, you don't have to.",
        correctExplanation:
          '「その必要はない」と必要を打ち消すときは don\'t have to を使う。shouldn\'t は「やめたほうがよい」と行為を止める助言なので、理由の文と合うかどうかで選び分ける。ここでは話し手が用意するので、必要がないという答えになる。',
      },
      {
        question: '「私はもっと早く寝るべきだった」を英語にしなさい。',
        wrongAnswer: 'I should went to bed earlier.',
        trapExplanation: '過去のことだから動詞を過去形にすればよい、と考えて should のうしろを過去形にしてしまう。助動詞のうしろは常に原形だという原則が抜けている。',
        correctAnswer: 'I should have gone to bed earlier.',
        correctExplanation:
          '「〜すべきだったのに、しなかった」は should have＋過去分詞で表す。助動詞のうしろは必ず原形なので、時間をさかのぼるはたらきは have＋過去分詞が受け持つ。must have＋過去分詞（〜したにちがいない）も同じしくみである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s161',
    subject: 'eigo',
    examType: 'koko',
    title: 'had better：「〜したほうがよい」——実はかなり強い',
    description: 'had better の形と not の位置、そして使う相手を選ぶ理由',
    order: 661,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    intro: '教科書には「had better＝〜したほうがよい」と書いてある。ところが英語話者がこれを言うときは、「そうしないと困ったことになるよ」という警告の響きがある。先生に向かって You had better 〜. と言うと、かなり失礼になる。訳が同じでも、重さがまるで違う語がある——その代表例である。',
    keyPoints: [
      'had better＋動詞の原形。had は過去の意味を持たず、現在の忠告を表す。',
      '短縮形は \'d better（You\'d better 〜.）。会話ではこの形が多い。',
      '否定は had better not＋原形。not の位置に注意（× had not better）。',
      '「そうしないと困る」という警告の含みがあり、should よりかなり強い。',
      '目上の人には使わない。目上には You should 〜. や Why don\'t you 〜? を使う。',
    ],
    sections: [
      {
        heading: '形と、not の位置',
        body: `■ 基本の形
主語＋had better＋動詞の原形〜.
例）You had better go home now.（もう家に帰ったほうがいい）
例）We had better hurry.（急いだほうがいい）
例）You'd better take an umbrella.（\'d better が会話でふつうの形）

■ had は過去ではない
had という形につられて「〜したほうがよかった」と訳すのは誤りである。had better は二語で一つの助動詞のようにはたらき、意味は現在・これからのことについての忠告になる。過去のことを言いたいときは should have＋過去分詞（〜すべきだったのに）を使う。

■ 否定は had better not
例）You had better not go out today.（今日は出かけないほうがいい）
例）You'd better not tell him about it.
　× You had not better go out.
　× You don't had better go out.
not は better のうしろ、動詞の直前に入る。ここは書きかえ・並べかえで必ず問われる。

■ 疑問文
Had I better 〜? という形もあるが、実際にはあまり使わない。「〜したほうがいいですか」とたずねるときは Should I 〜? を使うのがふつうである。

★ ポイント：形は had better ＋原形、否定は had better not ＋原形。この二つを口に出して覚えてしまうと、not の位置で迷わなくなる。`,
      },
      {
        heading: '強さと、使う相手',
        body: `■ 「そうしないと困る」という含み
had better は、そうしなかった場合に良くない結果が起こることをほのめかす言い方である。
例）You'd better see a doctor.（医者に行ったほうがいい。行かないと悪化するよ）
例）You'd better not be late again.（もう遅刻しないほうがいいぞ）
二つめの文は、ほとんど警告・脅しに近い響きになる。

■ should との違い
　You should see a doctor.　行ったほうがいいと思うよ（おだやかな助言）
　You'd better see a doctor.　行ったほうがいい。でないとまずい（強い忠告）
日本語にするとどちらも「〜したほうがよい」だが、英語では強さが違う。作文では、相手にすすめるだけなら should、危険や締め切りが迫っているなら had better を選ぶ。

■ 相手を選ぶ
had better は上から言う響きがあるので、目上の人や初対面の人には使わない。
　先生に対して　× You had better read this book.
　　　　　　　　○ I think you should read this book. / Why don't you read this book?
入試の会話文でも、目上の人へのアドバイスとして had better が正解になることはまずない。

■ 強さの一覧（もう一度）
　must（絶対）＞ have to（事情として）＞ had better（そうしないとまずい）＞ should（したほうがよい）＞ Why don't you 〜?（〜したら？）

⚠ 注意：had better は「〜したほうがよい」という訳のやわらかさから、should と同じ感覚で使ってしまいがちである。訳ではなく強さで覚えること。`,
      },
    ],
    trapExamples: [
      {
        question: '「今日は外に出ないほうがいい」を英語にしなさい。（had better を使うこと）',
        wrongAnswer: "You had not better go out today.",
        trapExplanation: 'had を助動詞のように感じて、「助動詞のうしろに not」という原則をあてはめ、had と better の間に not を入れてしまう。',
        correctAnswer: "You had better not go out today.",
        correctExplanation:
          'had better は二語で一つのまとまりなので、not はそのうしろ、動詞の直前に置く。had better not＋原形の形で覚える。don\'t を使う形（× You don\'t had better）も誤りである。',
      },
      {
        question: '次の文を日本語にしなさい。 You had better see a doctor.',
        wrongAnswer: 'あなたは医者に行ったほうがよかった。',
        trapExplanation: 'had という過去形の見た目にひかれて、過去の意味で訳してしまう。had better の had は時制を表していない。',
        correctAnswer: '医者に行ったほうがいい（行かないとまずいよ）。',
        correctExplanation:
          'had better は形こそ過去だが、意味はこれからのことについての強い忠告である。「〜すべきだったのに」と過去のことを言うなら should have＋過去分詞（You should have seen a doctor.）を使う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s162',
    subject: 'eigo',
    examType: 'koko',
    title: 'should の推量：「〜のはずだ」と読む場合',
    description: '時刻表・予定など根拠のある予想を表す should を、義務の should と読み分ける',
    order: 662,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '駅で友だちを待っている。時刻表どおりなら、電車はもう着いているころだ。こういうとき英語は The train should be here by now. と言う。「電車は着くべきだ」と文句を言っているのではなく、「着いているはずだ」と予想しているのである。should のこの顔を知らないと、長文の一文がまるごと読みちがいになる。',
    keyPoints: [
      'should には「〜のはずだ」という推量の用法がある。根拠のある予想を表す。',
      '確信の強さは must ＞ should ＞ may。「そうなって当然」という程度。',
      'うしろが be＋形容詞・場所を表す語句なら推量であることが多い。',
      '義務の should は「人が行う動作」、推量の should は「そうなる見込み」。主語と動詞で見分ける。',
      '「〜のはずだったのに（実際は違った）」は should have＋過去分詞でも表せる。',
    ],
    sections: [
      {
        heading: '「〜のはずだ」の should',
        body: `should は「そうなるのが当然だ」という気持ちから、予想を表す用法にも広がる。

例）The train should arrive at ten.（電車は十時に着くはずだ）
例）He should be home by now.（彼はもう家に着いているはずだ）
例）It should be sunny tomorrow.（明日は晴れるはずだ）
例）This book should be useful for you.（この本は君の役に立つはずだ）

■ 根拠があるのが特徴
時刻表・予定・経験など、そう考えるだけの理由がある。「なんとなくそう思う」なら may、「絶対そうだ」なら must、「当然そうなるはず」なら should、という位置関係になる。
　must be　〜にちがいない（ほぼ確信）
　should be　〜のはずだ（当然そうなる見込み）
　may be　〜かもしれない（五分五分）

■ 義務との見分け
　You should be quiet here.（静かにすべきだ）……人に行動を求めている＝義務
　He should be at school now.（今、学校にいるはずだ）……状況の予想＝推量
主語が you で、これからの行動を求めていれば義務。主語が三人称やもので、今の状況・これからの見込みを述べていれば推量である。

★ ポイント：「〜べきだ」と訳して意味が通らないときは、必ず「〜のはずだ」を試す。この二つを行き来できるようになると、長文の読み違いが激減する。`,
      },
      {
        heading: '確信の強さで選ぶ',
        body: `空所補充では、根拠の強さから助動詞を選ばせる問題が出る。

■ 根拠が強ければ must
例）He （must） be at home. I saw him go into his house five minutes ago.
　五分前に家に入るのを見た、という直接の根拠があるので「いるにちがいない」。

■ 予定・見込みなら should
例）The bus （should） come soon. It usually comes at 8:15.
　いつもの時刻という根拠から「もうすぐ来るはず」。

■ 可能性の一つなら may / might
例）He （may） be sick. He wasn't at school today.
　休んだ理由はいくつも考えられるので「かもしれない」。

■ 否定の根拠があれば can't
例）That （can't） be true. I talked with him this morning.

■ should have＋過去分詞の二つの意味
　①〜すべきだったのに（後悔・非難）
　　例）You should have called me.（電話してくれればよかったのに）
　②〜だったはずなのに（予想が外れた）
　　例）The letter should have arrived yesterday.（手紙は昨日着いているはずなのに）
どちらの意味かは、その行為を人が選べるかどうかで判断する。人が選べる行為なら①、届く・起こるなど成り行きなら②になりやすい。

⚠ 注意：推量の should は「〜のはずだ」と訳すが、絶対の断定ではない。長文の内容一致で「必ずそうなる」と言い切った選択肢は、本文が should なら言いすぎであることが多い。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を日本語にしなさい。 The package should arrive tomorrow morning.',
        wrongAnswer: 'その荷物は明日の朝に届くべきだ。',
        trapExplanation: 'should＝「〜すべきだ」としか覚えていないため、主語が荷物（人ではない）であることに気づかず、義務として訳してしまう。',
        correctAnswer: 'その荷物は明日の朝には届くはずだ。',
        correctExplanation:
          '主語が人以外で、成り行きとして起こることを述べている should は「〜のはずだ」という推量になる。配送予定という根拠にもとづく予想である。「べきだ」と訳して意味が通らないときは推量を疑う。',
      },
      {
        question: '空所に入る語を選びなさい。 He （　） be at home now. I saw him go into his house a minute ago. ①should ②must',
        wrongAnswer: '①should',
        trapExplanation: '「〜のはずだ」という日本語を思いうかべて should を選んでしまう。直前に本人を見たという強い根拠があることを、確信の度合いに結びつけられていない。',
        correctAnswer: '②must',
        correctExplanation:
          '「一分前に家に入るのを見た」という直接の根拠があるので、ほぼ確信を表す must be（〜にちがいない）が適切である。should be は時刻表や予定など間接的な根拠にもとづく「そうなるはず」で、確信は一段弱い。根拠の強さで選ぶ。',
      },
    ],
  },

  // ───────────────── 5. will / would（s163〜s166） ─────────────────
  {
    id: 'koko_eigo_s163',
    subject: 'eigo',
    examType: 'koko',
    title: 'will：未来と「その場の意志」／be going to との違い',
    description: 'いつ決めたのかで決まる will と be going to の使い分け',
    order: 663,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: '電話が鳴った。とっさに「私が出る！」と言うとき、英語は I\'ll get it! と言う。ここで I\'m going to get it. と言うと、まるで前から出ると決めていたように聞こえて不自然になる。will と be going to のちがいは、未来のいつかではなく、「いつ決めたか」という決定の時点にある。',
    keyPoints: [
      'will＋動詞の原形。その場で決めた意志と、単なる未来の予測を表す。',
      'be going to＋原形は、前から決めていた予定や、目に見える根拠のある予測。',
      '否定は won\'t（will not）。「どうしても〜しない」という強い拒否も表す。',
      '時・条件を表す副詞節（when, if, before, after, until）の中では、未来のことでも現在形を使う。',
      'Shall I / Shall we の形は s167、Will you 〜? の依頼は s164 で扱う。',
    ],
    sections: [
      {
        heading: 'いつ決めたのかで選ぶ',
        figureId: 'lf_kokoeigoext05_163',
        body: `will と be going to はどちらも未来のことを言う形だが、話し手の頭の中の動きが違う。

■ その場で決めた → will
例）A: We don't have any milk. B: OK, I'll buy some.（じゃあ買ってくるよ）
例）The phone is ringing. I'll answer it.
相手の話を聞いて、いま決めた。この「いま決めた」感じが will の意志用法である。

■ 前から決めていた → be going to
例）I'm going to visit my grandmother this weekend.（前から予定していた）
例）We are going to have a party next Saturday.
すでに心づもりや準備がある予定である。

■ 予測でも使い分けがある
　根拠のない予測（たぶんこうなるだろう）→ will
　　例）I think it will rain tomorrow.
　目に見える根拠がある予測 → be going to
　　例）Look at those dark clouds. It's going to rain.
空を見て言っているので、後者は be going to が自然である。

■ 否定 won't の強さ
例）He won't listen to me.（彼はどうしても私の言うことを聞こうとしない）
例）This door won't open.（このドアはどうしても開かない）
単なる未来の否定だけでなく、「どうしても〜しない」という拒否を表すことがある。ものが主語のときにもよく使われる。

★ ポイント：日本語訳はどちらも「〜するつもりだ」になるので、訳では区別できない。会話の流れの中で、その場で決めたのか前から決めていたのかを読み取る。`,
      },
      {
        heading: '時・条件の副詞節では現在形',
        body: `未来のことを言う文でも、when や if で始まる部分の中では will を使わない。これは英語の大きな決まりの一つである。

例）I will call you when I arrive at the station.
　（× when I will arrive）
例）If it rains tomorrow, we will stay home.
　（× If it will rain tomorrow）
例）Let's wait here until he comes back.
　（× until he will come back）

■ 対象になる接続詞
when／if／before／after／until（till）／as soon as／by the time
これらが導く副詞節の中では、未来のことでも現在形にする。

■ 「名詞節」なら will を使える
同じ when や if でも、動詞の目的語になっている場合（名詞節）は will が使える。
例）I don't know when he will come.（彼がいつ来るか分からない）……know の目的語
例）I will ask him if he will join us.（参加するかどうか聞いてみる）……ask の目的語
副詞節は「文全体にかかる、いつ・もし」の部分。名詞節は「〜かどうか・いつ〜か」という中身の部分である。見分けは、その部分を取り去っても文が成り立つかどうかで判断できる（取り去っても成り立てば副詞節）。

■ 主語が三人称単数なら s を忘れない
例）If he comes, please tell me.（× If he come）
現在形にする、ということは三単現の s も必要になるということである。ここでの落としが非常に多い。

⚠ 注意：この決まりは will だけでなく、be going to にも当てはまる。× When I am going to arrive とは書かない。`,
      },
    ],
    trapExamples: [
      {
        question: '対話を完成させなさい。 A: The doorbell is ringing. B: OK, I （　） answer it. （will / am going to から選ぶ）',
        wrongAnswer: 'I am going to answer it.',
        trapExplanation: 'be going to は未来のことなら何でも使えると思っているため、いま決めた行動にも使ってしまう。実際には「前から出ようと計画していた」という不自然な意味になる。',
        correctAnswer: 'I will answer it.',
        correctExplanation:
          'ベルが鳴ったのを聞いて、その場で「出るよ」と決めている。この場でとっさに決めた意志は will（\'ll）で表す。前から予定していたことなら be going to を使う。どちらを選ぶかは、決めた時点が発言の前か後かで決まる。',
      },
      {
        question: '次の文のまちがいを直しなさい。 If it will be sunny tomorrow, we will go to the beach.',
        wrongAnswer: 'If it will be sunny tomorrow, we go to the beach.',
        trapExplanation: '未来のことだから両方 will にすべきだと考えてしまう。直そうとするときも、主節のほうを現在形にしてしまい、直す場所を取りちがえる。',
        correctAnswer: 'If it is sunny tomorrow, we will go to the beach.',
        correctExplanation:
          '時や条件を表す副詞節（if・when・before・until など）の中では、未来のことでも現在形を使う。will を残すのは主節のほうである。同じ理由で I will call you when I get home. も when 以下は現在形になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s164',
    subject: 'eigo',
    examType: 'koko',
    title: 'Will you 〜? の二つの顔と、Won\'t you 〜?',
    description: '依頼の Will you と、すすめる Will you。Won\'t you は勧誘',
    order: 664,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: 'Will you have some more tea? と言われて「お茶を持ってきてくれますか」と受け取ると、話がかみ合わない。これは「もう少しお茶はいかがですか」というすすめの言い方である。同じ Will you 〜? でも、動詞が何かで意味が変わる。さらに Won\'t you 〜? になると、否定の形なのに誘いの意味になる。',
    keyPoints: [
      'Will you 〜? は「〜してくれますか」という依頼。Can you 〜? と同じくらいの気軽さ。',
      'Will you have 〜? / Will you take 〜? は「〜はいかがですか」というすすめ。',
      'Won\'t you 〜? は「〜しませんか」という勧誘。否定の形だが誘っている。',
      '依頼への答えは Sure. / All right. / OK. / I\'m sorry, I can\'t. など。',
      '命令文のあとに , will you? をつけると、少しやわらかい依頼になる。',
    ],
    sections: [
      {
        heading: '依頼の Will you 〜?',
        body: `Will you 〜? は「〜してくれますか」と相手に行動を頼む形である。

例）Will you open the window?（窓を開けてくれますか）
例）Will you help me with my homework?
例）Will you wait here for a minute?

■ 丁寧さの目安
　Will you 〜?／Can you 〜?　　親しい相手への気軽な依頼
　Would you 〜?／Could you 〜?　丁寧な依頼（s170 でくわしく）
Will you 〜? は場合によっては命令に近く響くので、初対面の人や目上の人には Could you 〜? を使うほうが安全である。please をつけると少しやわらかくなる。
例）Will you close the door, please?

■ 答え方
　引き受ける：Sure. / Certainly. / All right. / OK. / No problem.
　断る：I'm sorry, I can't. / I'm afraid I can't right now.
Yes, I will. も文法的には正しいが、会話では Sure. などのほうが自然である。

■ 命令文＋, will you?
例）Open the window, will you?（窓を開けてくれない？）
例）Don't be so noisy, will you?
命令文のあとに , will you? をつけると、命令の調子がやわらぐ。付加疑問文の一種で、s179 でもう一度扱う。

★ ポイント：Will you 〜? の主語は you。「相手が動く」形である。自分が動く許可を求めるなら Can I 〜? / May I 〜? になる。`,
      },
      {
        heading: 'すすめる Will you 〜? と、誘う Won\'t you 〜?',
        body: `■ すすめる Will you 〜?
have / take / try など「受け取る」系の動詞が来ると、依頼ではなく相手にすすめる意味になる。
例）Will you have some more coffee?（コーヒーをもう少しいかがですか）
例）Will you have another piece of cake?
「コーヒーを持ってきてくれますか」ではない。相手が飲む・食べるのだから、依頼にはなりようがない、と考えると分かりやすい。
より丁寧には Would you like some more coffee? を使う。

■ 誘う Won't you 〜?
例）Won't you come with us?（いっしょに来ませんか）
例）Won't you have a seat?（おかけになりませんか）
否定の疑問文の形だが、「来ないつもりですか」と責めているのではなく、ていねいに誘っている。日本語の「〜しませんか」と同じ発想である。
答えは Yes, I'd love to.（ぜひ）／Thank you, I will. / I'm sorry, I can't.

■ 誘いの表現の仲間
　Won't you 〜?／Why don't you 〜?／How about 〜ing?／Would you like to 〜?
どれも「〜しませんか」と訳せる。s169 で書きかえをまとめて扱う。

⚠ 注意：Won't you 〜? を「〜しないのですか」と訳すと文脈から浮くことが多い。誘いの場面では「〜しませんか」と訳す。答えるときも、断る場合は No, I won't. ではなく I'm sorry, I can't. のように理由を添えるのがふつうである。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を日本語にしなさい。 Won\'t you join us for lunch?',
        wrongAnswer: 'あなたは私たちと昼食をとらないつもりですか。',
        trapExplanation: '否定の疑問文なので「〜しないのか」と直訳してしまう。会話での Won\'t you 〜? が誘いの決まり文句であることを知らないと、相手を責めている文に読めてしまう。',
        correctAnswer: 'いっしょに昼食をとりませんか。',
        correctExplanation:
          'Won\'t you 〜? は「〜しませんか」という丁寧な勧誘を表す。日本語の「〜しませんか」も否定の形で誘っているのと同じ発想である。答えは Yes, I\'d love to. や I\'m sorry, I can\'t. のように返す。',
      },
      {
        question: '次の文を日本語にしなさい。 Will you have another cup of tea?',
        wrongAnswer: 'お茶をもう一杯持ってきてくれますか。',
        trapExplanation: 'Will you 〜?＝依頼、と一通りに覚えているため、have を「持ってくる」と読みかえてまで依頼の意味にしてしまう。',
        correctAnswer: 'お茶をもう一杯いかがですか。',
        correctExplanation:
          'have / take / try など、相手が受け取る動作を表す動詞が来ると、Will you 〜? は依頼ではなく「〜はいかがですか」というすすめになる。飲むのは相手なので依頼にはならない、と考えると見分けられる。丁寧には Would you like 〜? を使う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s165',
    subject: 'eigo',
    examType: 'koko',
    title: 'would：Would you 〜? と would like to',
    description: '丁寧さを一段上げる would。want to との書きかえと答え方',
    order: 665,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    intro: 'レストランで店員に I want to eat this. と言うと、子どもがねだっているように聞こえてしまう。大人は I would like to have this. と言う。would は will の過去形だが、ここでも過去の意味はない。一歩下がった言い方にすることで、丁寧さを作り出しているのである。',
    keyPoints: [
      'would like to＋原形＝want to の丁寧な言い方（〜したいのですが）。',
      'would like＋名詞＝want＋名詞の丁寧な言い方（〜がほしいのですが）。',
      'Would you like 〜?＝「〜はいかがですか」（すすめる）。答えは Yes, please. / No, thank you.',
      'Would you like to 〜?＝「〜しませんか」（誘う）。Would you 〜?（依頼）とは別物。',
      '短縮形は I\'d like to 〜。会話ではこの形が多い。',
    ],
    sections: [
      {
        heading: 'would like の使い方',
        figureId: 'lf_kokoeigoext05_165',
        body: `■ would like to＋動詞の原形
「〜したいのですが」という丁寧な希望を表す。want to のあらたまった形である。
例）I would like to ask you a question.（質問したいのですが）
例）I'd like to see Mr. Brown.（ブラウンさんにお目にかかりたいのですが）
　want to → would like to　という書きかえは頻出。

■ would like＋名詞
「〜がほしいのですが」。want の丁寧形。
例）I'd like a cup of coffee, please.
例）I would like two tickets for the concert.

■ Would you like 〜?（すすめる）
例）Would you like some tea?（お茶はいかがですか）
　答え：Yes, please. / Yes, thank you. / No, thank you. I'm fine.
　⚠ Yes, I would like. とは答えない。like のうしろが空いてしまい、文として成り立たない。

■ Would you like to 〜?（誘う）
例）Would you like to go to the movies with me?（映画に行きませんか）
　答え：Yes, I'd love to. / That sounds nice. / I'm sorry, I can't.

■ Would you 〜?（依頼）との区別
　Would you open the window?　窓を開けてくださいませんか（依頼）
　Would you like to open the window?　窓を開けたいですか（相手の希望をたずねている）
like to が入るかどうかで、依頼か希望かがまるで変わる。窓を開けてほしいのに Would you like to 〜? と言うと、「開けたいですか」と的外れな質問になる。

★ ポイント：Would you like 〜? は相手のためのすすめ・誘い、Would you 〜? は自分のための依頼。主語は同じでも向きが逆である。`,
      },
      {
        heading: '丁寧さの段階と、その他の would',
        body: `■ 依頼の丁寧さ
　Can you 〜?　　　　〜してくれる？（親しい相手）
　Will you 〜?　　　 〜してくれますか
　Could you 〜?　　　〜していただけますか
　Would you 〜?　　　〜していただけますか
　Would you mind 〜ing?　〜していただけませんか（最も丁寧・s171 で扱う）
would / could を使うと、過去形にすることで一歩引いた言い方になり、丁寧さが上がる。

■ Would you 〜? への答え
　Sure. / Certainly. / Of course. / All right.
　I'm sorry, I can't. / I'm afraid I can't.
Yes, I would. とは答えないのが自然である。Could you 〜? に Yes, I could. と答えないのと同じ理由による。

■ その他の would
①「〜だろう（に）」という控えめな推量
　例）That would be nice.（それはいいですね）
　例）I would say he is right.（彼が正しいと思いますが）
②過去の習慣（s166 でくわしく）
　例）He would often go fishing with his father.
③時制の一致
　例）He said he would come.（彼は来ると言った）

⚠ 注意：would を見たら、まず「過去の意味があるか」を確かめる。時制の一致と過去の習慣以外は、たいてい丁寧・控えめの would である。`,
      },
    ],
    trapExamples: [
      {
        question: '対話を完成させなさい。 A: Would you like some more cake? B: （　） It\'s delicious.',
        wrongAnswer: 'Yes, I would like.',
        trapExplanation: 'Would で聞かれたら would で答える、という原則を当てはめてしまう。しかし like のうしろに何もないため、文として成り立たない形になってしまう。',
        correctAnswer: 'Yes, please.',
        correctExplanation:
          'Would you like 〜? は「〜はいかがですか」というすすめなので、答えは Yes, please.（はい、お願いします）／No, thank you.（いいえ、けっこうです）となる。Yes, I would like. は目的語が抜けた不完全な文である。',
      },
      {
        question: '「窓を開けてくださいませんか」を英語にしなさい。',
        wrongAnswer: 'Would you like to open the window?',
        trapExplanation: '丁寧な言い方といえば would like、と覚えているため、依頼の文にも like to を入れてしまう。その結果、相手の希望をたずねる文に変わってしまう。',
        correctAnswer: 'Would you open the window? / Could you open the window?',
        correctExplanation:
          'Would you like to 〜? は「〜したいですか・〜しませんか」と相手の希望や誘いを表す。相手に行動を頼むときは like to を入れず Would you 〜? / Could you 〜? とする。like to の有無で意味が変わることを押さえる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s166',
    subject: 'eigo',
    examType: 'koko',
    title: 'would often と used to：過去の習慣・状態',
    description: '「よく〜したものだ」の二つの言い方と、使えない場面のちがい',
    order: 666,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '「子どものころ、よく川で泳いだものだ」。この「〜したものだ」を英語で言うと used to swim または would often swim になる。二つはよく似ているが、「昔この角に本屋があった」のような状態の話になると、would は使えなくなる。動作か状態かが分かれ道である。',
    keyPoints: [
      'used to＋原形＝「以前は〜していた・以前は〜だった」。今はそうでない、という含みがある。',
      'would often＋原形＝「よく〜したものだ」。過去にくり返した動作を回想する言い方。',
      '状態（be・live・have・like など）には would を使えない。used to だけ。',
      'There used to be 〜.＝「以前は〜があった」。頻出の形。',
      'be used to＋動名詞は「〜に慣れている」。まったく別の表現なので混同しない。',
    ],
    sections: [
      {
        heading: 'used to と would often',
        figureId: 'lf_kokoeigoext05_166',
        body: `どちらも「過去にくり返していたが、今はしていない」ことを表す。

■ used to＋動詞の原形
例）I used to play tennis every Sunday.（以前は毎週日曜にテニスをしていた）
例）She used to be very shy.（彼女は以前とても内気だった）
例）There used to be a bookstore at that corner.（あの角には以前、本屋があった）
「今はもうそうではない」という対比が言外に含まれる。

■ would often＋動詞の原形
例）My grandfather would often tell me old stories.（祖父はよく昔話をしてくれたものだ）
例）We would often go camping in summer.
思い出を語る調子があり、often / sometimes などの頻度を表す副詞といっしょに使うことが多い。

■ 決定的なちがい——状態には would を使えない
　○ I used to live in Osaka.（以前は大阪に住んでいた）
　× I would live in Osaka.
　○ There used to be a big tree here.
　× There would be a big tree here.
live / be / have / like / know などの状態を表す語には used to しか使えない。would が表せるのは「くり返された動作」だけである。

■ 否定・疑問
　didn't use to 〜（used ではなく use に戻る）
　Did you use to 〜?
例）I didn't use to like natto, but now I love it.

★ ポイント：動作なら両方使える、状態なら used to だけ。迷ったら used to を選べば安全である。`,
      },
      {
        heading: 'be used to 〜ing との区別',
        body: `形が似ていてまぎらわしい三つを並べる。

■ ①used to＋動詞の原形（以前は〜していた）
例）I used to get up at six.（以前は六時に起きていた。今は違う）
used が「かつて〜した」を表し、to のうしろは原形。

■ ②be used to＋動名詞（〜に慣れている）
例）I am used to getting up early.（早起きには慣れている）
この to は前置詞なので、うしろは動名詞（〜ing）または名詞になる。
例）He is used to Japanese food.
例）She got used to her new school.（新しい学校に慣れた）

■ ③be used to＋動詞の原形（〜するために使われる）＝受け身
例）This knife is used to cut bread.（このナイフはパンを切るのに使われる）
use（使う）の受動態に不定詞が続いた形である。

■ 見分け方
　used to＋原形　→　①以前は〜していた
　be動詞＋used to＋〜ing　→　②慣れている
　be動詞＋used to＋原形（もの主語）　→　③〜するために使われる
主語がものか人か、be動詞があるか、うしろが原形か ing かの三点で区別できる。

■ 入試での出方
・空所補充「私は早起きに慣れています」→ I am used to （getting） up early.
・書きかえ「以前ここに郵便局があった」→ There （used to） be a post office here.
・和訳 He is used to speaking in public.（人前で話すことに慣れている）

⚠ 注意：「〜に慣れている」を used to getting と書いて be を落とす誤りが多い。②には必ず be動詞（am / is / are / was / were / get）が必要である。`,
      },
    ],
    trapExamples: [
      {
        question: '「以前この近くに大きな公園があった」を英語にしなさい。',
        wrongAnswer: 'There would be a big park near here.',
        trapExplanation: '「以前は〜だった」を would often と used to のどちらでも言えると覚えているため、状態を表す文にも would を使ってしまう。',
        correctAnswer: 'There used to be a big park near here.',
        correctExplanation:
          'would（often）が表せるのは、過去にくり返された動作だけである。be・live・have のような状態には used to しか使えない。There used to be 〜.（以前は〜があった）は書きかえ問題の定番なので、形ごと覚えておく。',
      },
      {
        question: '「私は早起きに慣れています」を英語にしなさい。',
        wrongAnswer: 'I used to get up early.',
        trapExplanation: 'used to という形を見た瞬間に「〜に慣れている」と「以前は〜していた」が頭の中で混ざり、be動詞のない形を選んでしまう。',
        correctAnswer: 'I am used to getting up early.',
        correctExplanation:
          '「〜に慣れている」は be used to＋動名詞。この to は前置詞なので、うしろは getting のような ing 形になる。be動詞のない used to＋原形は「以前は〜していた（今は違う）」という別の意味になる。be動詞の有無とうしろの形で見分ける。',
      },
    ],
  },

  // ───────────────── 6. shall / Let's（s167〜s169） ─────────────────
  {
    id: 'koko_eigo_s167',
    subject: 'eigo',
    examType: 'koko',
    title: 'Shall I 〜? と Shall we 〜?：申し出と提案',
    description: '主語が I か we かで、意味も答え方も変わる二つの形',
    order: 667,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    intro: '重そうな荷物を持っている人に「持ちましょうか」と声をかけるのが Shall I carry it? 友だちに「少し休もうか」と言うのが Shall we take a break? どちらも Shall で始まるのに、動くのは前者では自分だけ、後者では二人。主語が一語違うだけで、答え方まで変わってしまう。',
    keyPoints: [
      'Shall I 〜?＝「（私が）〜しましょうか」という申し出。動くのは自分。',
      'Shall we 〜?＝「（いっしょに）〜しましょうか」という提案。動くのは自分と相手。',
      'Shall I 〜? の答えは Yes, please. / No, thank you.',
      'Shall we 〜? の答えは Yes, let\'s. / No, let\'s not. / That\'s a good idea.',
      'Shall we 〜? ＝ Let\'s 〜. ＝ How about 〜ing? と書きかえられる。',
    ],
    sections: [
      {
        heading: '二つの形と、答え方の対応',
        figureId: 'lf_kokoeigoext05_167',
        body: `■ Shall I 〜?（〜しましょうか）
自分が相手のために何かをする、という申し出である。
例）Shall I open the window?（窓を開けましょうか）
例）Shall I help you with your bags?
例）Shall I show you the way to the station?
　答え：Yes, please.（はい、お願いします）／No, thank you.（いいえ、けっこうです）
「お願いします」と頼む側になるので、Yes, please. が答えになる。

■ Shall we 〜?（〜しましょうか）
二人でいっしょに何かをする、という提案である。
例）Shall we go for a walk?（散歩に行きませんか）
例）Shall we start the meeting?
　答え：Yes, let's.（そうしましょう）／No, let's not.（やめておきましょう）／That's a good idea. / Sounds good.

■ 答え方をまちがえない
　Shall I open the window? — × Yes, let's.（自分は関係ないのに「そうしましょう」はおかしい）
　Shall we play tennis? — × Yes, please.（お願いされる側がいないのにおかしい）
どちらが動くのかを考えれば、答えは自然に決まる。Shall I なら相手に頼まれる形、Shall we なら二人で決める形である。

■ 言いかえ
　Shall I 〜? ≒ Do you want me to 〜? / Would you like me to 〜?
　Shall we 〜? ≒ Let's 〜. / How about 〜ing? / Why don't we 〜?

★ ポイント：主語が I か we か。この一語を見るだけで、意味も答え方も決まる。`,
      },
      {
        heading: '場面ごとの使い方',
        body: `会話文の空所補充では、場面がヒントになる。

■ 手伝いを申し出る場面
例）A: This box is very heavy.
　　B: Shall I carry it for you?
　　A: Yes, please. Thank you.
相手が困っている描写があれば Shall I 〜? が入る。

■ 誘う場面
例）A: I'm free this afternoon.
　　B: Shall we go shopping?
　　A: Yes, let's.
二人の予定を決めている流れなら Shall we 〜? が入る。

■ May I 〜? との違い
　May I help you?　（私が）お手伝いしましょうか＝店員の決まり文句
　Shall I help you?　手伝いましょうか
どちらも申し出だが、May I 〜? は「〜させていただいてもよいですか」と許可を求める形をとった申し出である。店員が客に言うときは May I help you? が定番。

■ Shall の他の用法
Shall は現代英語では Shall I / Shall we 以外にほとんど使われない。「〜するでしょう」の意味の I shall 〜 は古めかしい言い方である。入試では Shall I / Shall we の二つだけ押さえればよい。

⚠ 注意：Shall we 〜? を「〜してくれますか」と依頼に訳す誤りに注意する。依頼は Will you / Could you 〜? である。Shall we は必ず「いっしょに」という意味を含む。`,
      },
    ],
    trapExamples: [
      {
        question: '対話を完成させなさい。 A: Shall I carry your bag? B: （　） Thank you very much.',
        wrongAnswer: "Yes, let's.",
        trapExplanation: 'Shall で始まる文への答えは Yes, let\'s. だと一つだけ覚えているため、主語が I か we かを見ずに答えてしまう。',
        correctAnswer: 'Yes, please.',
        correctExplanation:
          'Shall I 〜? は「（私が）〜しましょうか」という申し出なので、答えは Yes, please.（お願いします）／No, thank you.（けっこうです）となる。Yes, let\'s. は Shall we 〜?（いっしょに〜しましょうか）への答えである。動くのが誰かを確かめる。',
      },
      {
        question: '同じ意味になるように空所を埋めなさい。 Let\'s go to the park. ＝ （　）（　）go to the park?',
        wrongAnswer: 'Shall I go to the park?',
        trapExplanation: 'Let\'s＝Shall と対応だけを覚えていて、主語まで意識していないため、I と we を取りちがえてしまう。',
        correctAnswer: 'Shall we go to the park?',
        correctExplanation:
          'Let\'s 〜. は Let us 〜. の短縮で、「私たちが」いっしょにする提案である。したがって Shall we 〜? に対応する。Shall I 〜? は自分だけが動く申し出なので、Let\'s の書きかえにはならない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s168',
    subject: 'eigo',
    examType: 'koko',
    title: 'Let\'s 〜. の形と、その答え方',
    description: '「〜しましょう」の基本形。否定は Let\'s not、応答は Yes, let\'s.',
    order: 668,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro: '昼休みに友だちを誘うとき、Let\'s play soccer! と言う。この Let\'s は Let us が縮まったもので、もとの意味は「私たちに〜させて」。そこから「いっしょに〜しよう」という誘いの形になった。短くて便利な形だが、否定にするときに Let\'s don\'t と書いてしまう人が驚くほど多い。',
    keyPoints: [
      'Let\'s＋動詞の原形＝「（いっしょに）〜しましょう」。Let\'s は Let us の短縮形。',
      '否定は Let\'s not＋原形（× Let\'s don\'t）。',
      '答えは Yes, let\'s. / All right. / That\'s a good idea. / I\'m sorry, I can\'t.',
      'Let\'s の付加疑問は shall we?（Let\'s go, shall we?）。',
      'Let\'s 〜. ＝ Shall we 〜? ＝ How about 〜ing? ＝ Why don\'t we 〜? と書きかえられる。',
    ],
    sections: [
      {
        heading: 'Let\'s の形',
        body: `■ 肯定
Let's＋動詞の原形〜.
例）Let's play tennis after school.（放課後にテニスをしよう）
例）Let's go to the library.
例）Let's be quiet here.（静かにしよう）……be動詞のときは原形の be を使う

■ 否定は Let's not
例）Let's not talk about it now.（今はその話をやめておこう）
例）Let's not waste time.
　× Let's don't talk about it.
　× Don't let's talk about it.
Let's は命令文の仲間だが、否定にするときに Don't を持ってくる形にはならない。not を Let's の直後に置く、と形で覚える。

■ もとの形は Let us
Let us 〜 は「私たちに〜させてください」という意味で、let（〜させる）＋us＋原形という形である。ここから「いっしょに〜しよう」という誘いに変わった。教科書やスピーチでは、短縮しない Let us 〜 が使われることもある。

■ Let me 〜. との比較
例）Let me help you.（私に手伝わせてください＝手伝いましょう）
例）Let me see.（ええと……）
me なら自分一人、us（Let's）なら二人以上。ここでも「誰が動くか」が形に現れている。

★ ポイント：Let's＋原形、否定は Let's not＋原形。この二つを声に出して覚えると、書きかえでも並べかえでも迷わない。`,
      },
      {
        heading: '答え方と書きかえ',
        body: `■ 答え方
　賛成する：Yes, let's. / All right. / OK. / That's a good idea. / Sounds good.
　断る：No, let's not. / I'm sorry, I can't. / I'd love to, but I have to study.
Yes, we do. や Yes, I will. とは答えない。Let's は「私たち」が主語の誘いなので、答えも let's で受けるか、賛成・辞退の決まり文句で返す。

■ 書きかえ（頻出）
　Let's play tennis.
　＝ Shall we play tennis?
　＝ How about playing tennis?（How about のうしろは動名詞）
　＝ Why don't we play tennis?
　＝ What do you say to playing tennis?（やや難）
どれも「テニスをしませんか」という誘いになる。空所の数と語形（ing か原形か）で、どれを書くかを判断する。

■ 付加疑問は shall we?
例）Let's take a break, shall we?
命令文の付加疑問が will you? であるのに対し、Let's の付加疑問は shall we? になる。s179 でもう一度扱う。

■ 会話でのやりとり例
　A: Let's go to the new cafe near the station.
　B: That's a good idea. When shall we go?
　A: How about tomorrow afternoon?
　B: Sounds good.

⚠ 注意：Let's のうしろに to を入れる誤り（× Let's to play）も多い。Let's は let＋us＋原形なので、to は入らない。`,
      },
    ],
    trapExamples: [
      {
        question: '「今日はテレビを見るのはやめておこう」を英語にしなさい。（Let\'s を使うこと）',
        wrongAnswer: "Let's don't watch TV today.",
        trapExplanation: '命令文の否定が Don\'t 〜. であることから、Let\'s の否定にも don\'t を使えばよいと考えてしまう。',
        correctAnswer: "Let's not watch TV today.",
        correctExplanation:
          'Let\'s の否定は not を Let\'s の直後に置いて Let\'s not＋動詞の原形とする。Let\'s は let us（私たちに〜させて）がもとなので、do / don\'t を使う一般動詞の否定文とは作り方が違う。',
      },
      {
        question: '対話を完成させなさい。 A: Let\'s have lunch at that new restaurant. B: （　） I\'ve wanted to try it.',
        wrongAnswer: 'Yes, we do.',
        trapExplanation: '答えの形を「Yes＋主語＋動詞」の型に当てはめようとして、誘いの文にふさわしくない応答を作ってしまう。',
        correctAnswer: "Yes, let's. / That's a good idea.",
        correctExplanation:
          'Let\'s 〜. への賛成は Yes, let\'s. / All right. / That\'s a good idea. などで返す。断るときは No, let\'s not. や I\'m sorry, I can\'t. を使う。Yes, we do. は誘いへの答えとして成り立たない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s169',
    subject: 'eigo',
    examType: 'koko',
    title: '提案・勧誘の言いかえ：How about / Why don\'t we / Why don\'t you',
    description: '「〜しませんか」を表す表現を書きかえでつなぎ、we と you を区別する',
    order: 669,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    intro: '同じ「映画に行かない？」を、英語は何通りにも言える。Let\'s go / Shall we go / How about going / Why don\'t we go——どれも同じ場面で使える。ただし Why don\'t you go? だけは意味がずれて、「あなたが行ったら？」になる。we と you の一字で、誘いか助言かが分かれる。',
    keyPoints: [
      'How about＋動名詞（〜ing）／名詞。about は前置詞なので to不定詞は続かない。',
      'Why don\'t we 〜?＝Let\'s 〜.（いっしょにしよう）。うしろは動詞の原形。',
      'Why don\'t you 〜?＝「〜したらどうですか」（相手への提案・助言）。',
      'Why don\'t 〜? は理由をたずねる文ではない。「なぜ〜しないのか」と訳さない。',
      'What about 〜ing? は How about 〜ing? とほぼ同じ意味。',
    ],
    sections: [
      {
        heading: '書きかえの輪をつくる',
        body: `「いっしょに〜しよう」を表す形は、次のように書きかえられる。

　Let's go to the movies.
　＝ Shall we go to the movies?
　＝ How about going to the movies?
　＝ Why don't we go to the movies?

■ うしろの形に注意
　Let's ＋原形　　　　　　go
　Shall we ＋原形　　　　 go
　How about ＋動名詞　　　going
　Why don't we ＋原形　　 go
How about だけが ing になる。about が前置詞だからである。
　× How about to go / × How about go
これは並べかえ問題・語形変化問題で必ずねらわれる。

■ How about の後ろは名詞でもよい
例）How about some coffee?（コーヒーはいかがですか）
例）How about tomorrow?（明日はどうですか）
時や日を提案するときにもよく使う。

■ What about 〜? もほぼ同じ
例）What about going for a walk?
細かく言えば What about 〜? は「〜のほうはどうする？」と話題を戻す使い方もあるが、提案としては How about 〜? と同じに扱ってよい。

★ ポイント：書きかえ問題では空所の数が手がかりになる。二語なら Shall we、三語なら Why don't we、How about なら動詞を ing にする、と対応づけておく。`,
      },
      {
        heading: 'Why don\'t we と Why don\'t you',
        body: `■ Why don't we 〜?＝いっしょにしよう
例）Why don't we take a break?（休憩しませんか）
例）Why don't we ask him about it?
主語が we なので、自分も相手も動く。Let's と同じ意味になる。

■ Why don't you 〜?＝あなたが〜したらどうですか
例）Why don't you see a doctor?（医者に行ったらどうですか）
例）Why don't you join our club?（うちの部に入りませんか）
動くのは相手だけ。助言や勧誘になる。should よりやわらかく、相手にすすめる言い方として非常によく使われる。

■ 「なぜ〜しないのか」ではない
形は否定疑問文だが、理由をたずねているわけではない。
　Why don't you eat vegetables?
　→ ×「なぜ野菜を食べないのですか」（理由を問う読み）
　→ ○「野菜を食べたらどうですか」（すすめる読み）
本当に理由を聞きたいときは、文脈でそう分かるように書かれる。会話文では、まず提案の意味で読む。

■ 答え方
　Why don't you 〜? — That's a good idea. / OK, I will. / Thank you, but I'm fine.
　Why don't we 〜? — Yes, let's. / Sounds good. / I'm sorry, I can't today.

■ 助言表現の強さ
　You must 〜.（強い）＞ You should 〜. ＞ Why don't you 〜?（やわらかい）
目上の人にすすめるときは Why don't you 〜? や Would you like to 〜? が安全である。

⚠ 注意：Why don't we と Why don't you を取りちがえると、誘いが助言に変わってしまう。長文の会話部分では、そのあと誰が行動したかを読むと確認できる。`,
      },
    ],
    trapExamples: [
      {
        question: '同じ意味になるように空所を埋めなさい。 Let\'s go shopping this afternoon. ＝ How about （　） shopping this afternoon?',
        wrongAnswer: 'How about to go shopping this afternoon?',
        trapExplanation: 'Let\'s のうしろが原形だったので、書きかえた先でも原形か to不定詞が続くと考えてしまう。about が前置詞であることを見落としている。',
        correctAnswer: 'How about going shopping this afternoon?',
        correctExplanation:
          'How about の about は前置詞なので、うしろには名詞か動名詞（〜ing）が来る。to不定詞や原形は続かない。同じ理由で What about 〜ing? / How about some tea? という形になる。',
      },
      {
        question: '次の文を日本語にしなさい。 Why don\'t you take a rest for a while?',
        wrongAnswer: 'あなたはなぜしばらく休まないのですか。',
        trapExplanation: 'Why don\'t 〜? を否定疑問文として直訳し、理由をたずねる文だと考えてしまう。会話での決まった使い方を知らないと、相手を責める文に読めてしまう。',
        correctAnswer: 'しばらく休んだらどうですか。',
        correctExplanation:
          'Why don\'t you 〜? は「〜したらどうですか」という提案・助言の決まり文句である。Why don\'t we 〜? なら「（いっしょに）〜しませんか」という誘いになる。we か you かで、誘いと助言を読み分ける。',
      },
    ],
  },

  // ───────────────── 7. 依頼と許可の会話表現（s170〜s173） ─────────────────
  {
    id: 'koko_eigo_s170',
    subject: 'eigo',
    examType: 'koko',
    title: '依頼の階段：Can you / Will you / Could you / Would you',
    description: '相手に何かを頼む表現を、丁寧さの順に整理する',
    order: 670,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '同じ「窓を開けて」でも、家族に言うのと、初めて会った人に言うのでは言い方を変える。日本語なら「開けて」「開けてくれる？」「開けていただけますか」と語尾を変えるところを、英語は文頭の助動詞一語で調節する。どの階段に立つかを選べるようになると、会話文の空所補充が確実に取れるようになる。',
    keyPoints: [
      '依頼の丁寧さ：Can you ＜ Will you ＜ Could you ≒ Would you ＜ Would you mind 〜ing?',
      'could / would が丁寧なのは、過去形にして一歩引いた言い方にしているから。',
      'please をつけるとどの形もやわらぐ（Could you 〜, please? / Please open the window.）。',
      '依頼は主語が you、許可を求めるときは主語が I。ここを取りちがえない。',
      '答えは Sure. / Certainly. / All right. / I\'m sorry, I can\'t. など。Yes, I could. とは言わない。',
    ],
    sections: [
      {
        heading: '丁寧さの階段',
        figureId: 'lf_kokoeigoext05_170',
        body: `相手に行動を頼む形を、気軽なものから順に並べる。

　Can you open the window?　　　　　窓を開けてくれる？（親しい相手）
　Will you open the window?　　　　 窓を開けてくれますか
　Could you open the window?　　　　窓を開けていただけますか
　Would you open the window?　　　　窓を開けていただけますか
　Would you mind opening the window?　窓を開けていただけませんか（最も丁寧）

■ なぜ could / would が丁寧なのか
過去形にすると「今ここ」から一歩離れた言い方になり、相手に断る余地を残す響きになる。時間の距離を、遠慮の距離に使っているのである。日本語の「〜していただけますでしょうか」と同じ発想と考えてよい。

■ can と will のちがい
　Can you 〜?　できますか（能力・可能性をたずねる形）
　Will you 〜?　してくれますか（意志をたずねる形）
実際にはどちらも依頼として使われ、丁寧さもほぼ同じである。Will you 〜? は言い方によっては命令に近く響くので、目上の人には Could you 〜? を使うほうが安全である。

■ please の位置
　Could you open the window, please?（文末・カンマの前に置く）
　Please open the window.（命令文の前）
文末に置くときはカンマを打つ。

★ ポイント：試験で「もっとていねいな言い方に書きかえなさい」と言われたら、Can → Could、Will → Would に変えるのが基本の一手である。`,
      },
      {
        heading: '依頼と許可を取りちがえない',
        body: `依頼と許可は、主語で見分ける。

■ 依頼（相手が動く）＝主語は you
例）Can you help me?（手伝ってくれますか）
例）Could you tell me the way to the station?（駅への道を教えていただけますか）
例）Would you carry this box?

■ 許可（自分が動く）＝主語は I
例）Can I help you?（お手伝いしましょうか／店員：何かお探しですか）
例）Could I use your bike?（自転車をお借りしてもよろしいですか）
例）May I come in?

■ 取りちがえると意味が逆になる
「あなたのペンを借りてもいいですか」と言いたいのに Could you borrow your pen? と書くと、「あなたは自分のペンを借りられますか」という意味不明の文になる。借りるのは自分なので Could I borrow your pen? が正しい。

■ 答え方をそろえる
　依頼を引き受ける：Sure. / Certainly. / Of course. / All right. / No problem.
　依頼を断る：I'm sorry, I can't. / I'm afraid I can't. / Sorry, I'm busy now.
　許可を与える：Sure, go ahead. / Of course. / Certainly.
　許可を断る：I'm sorry, but you can't. / I'm afraid not.
⚠ 注意：Could you 〜? に Yes, I could. とは答えない。過去の能力をたずねているわけではないからである。

■ 実戦での手順
①主語が I か you かを見る　②丁寧さの階段のどこかを見る　③答えの決まり文句を選ぶ
この三段階で、会話文の空所補充はほぼ機械的に解ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたの辞書をお借りしてもよろしいですか」を英語にしなさい。',
        wrongAnswer: 'Could you borrow your dictionary?',
        trapExplanation: '「〜していただけますか」という丁寧な日本語につられて Could you の形を選んでしまう。しかし借りるのは自分なので、主語が合っていない。',
        correctAnswer: 'Could I borrow your dictionary? / May I use your dictionary?',
        correctExplanation:
          '借りるという行為をするのは自分なので、主語は I になる。Could you borrow 〜? では「あなたが借りられますか」となって意味が通らない。依頼は you、許可は I、と主語で整理する。なお「貸してくれますか」と相手を動かすなら Could you lend me your dictionary? となる。',
      },
      {
        question: '対話を完成させなさい。 A: Could you take a picture of us? B: （　） Say cheese!',
        wrongAnswer: 'Yes, I could.',
        trapExplanation: 'Could で聞かれたから could で返す、という原則を当てはめてしまう。この Could you は丁寧な依頼で、能力をたずねているのではない。',
        correctAnswer: 'Sure. / Of course. / Certainly.',
        correctExplanation:
          '丁寧な依頼を引き受けるときは Sure. / Certainly. / All right. などで答える。Yes, I could. は「（昔は）できました」という意味になってしまう。断るときは I\'m sorry, I can\'t. と理由を添える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s171',
    subject: 'eigo',
    examType: 'koko',
    title: '依頼への答え方と Would you mind 〜?',
    description: '引き受ける・断るの決まり文句と、mind の答えが逆になる理由',
    order: 671,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: 'Would you mind opening the window? と頼まれて、快く引き受けるつもりで Yes. と答えると、相手は窓を開けずに立ち去ってしまう。mind は「いやだと思う」という意味だから、Yes は「いやです」になるのである。答えが日本語と逆になる、この一点だけで一問取られる。',
    keyPoints: [
      '引き受ける：Sure. / Certainly. / Of course. / All right. / No problem.',
      '断る：I\'m sorry, I can\'t. / I\'m afraid I can\'t. 理由を添えるのがふつう。',
      'mind は「いやだと思う・気にする」。Would you mind 〜ing? は「〜するのをいやだと思いますか」。',
      'Would you mind 〜? に引き受けるときの答えは No. / Not at all. / Of course not.',
      'Would you mind if I 〜? は「私が〜してもかまいませんか」という許可の求め方。',
    ],
    sections: [
      {
        heading: '引き受ける・断るの決まり文句',
        body: `依頼を受けたときの答えは、ほぼ決まり文句である。書けるようにしておくと、会話文で確実に得点できる。

■ 引き受ける
　Sure.／Sure, I will.／Certainly.／Of course.／All right.／OK.／No problem.
例）A: Could you help me with my homework? B: Sure. What's the problem?

■ 断る
　I'm sorry, I can't.／I'm afraid I can't.／Sorry, but I'm busy right now.
英語では、断るときに理由をひとこと添えるのがふつうである。
例）A: Can you come to my house this afternoon?
　　B: I'm sorry, I can't. I have to take care of my sister.

■ すぐには決められないとき
　Just a minute.／Let me see.／I'll think about it.

■ 前後の文と合っているかを確かめる
空所補充では、空所のあとに続く文が最大の手がかりになる。
例）A: Could you help me with these boxes?
　　B: （　） I have to leave right now.
　　→ 続く文が「今すぐ出なければならない」なので、断りの I'm sorry, I can't. が入る。
　　→ ここに Sure. を入れると、次の文と矛盾する。

★ ポイント：答えの決まり文句だけを見て選ばず、必ずそのあとの一文まで読む。会話文の空所補充は、前後との整合で決まる。`,
      },
      {
        heading: 'Would you mind 〜? の答えが逆になる理由',
        body: `■ mind の意味
mind は「いやだと思う・気にする」という意味の動詞である。うしろには動名詞（〜ing）が来る。
例）Would you mind opening the window?
　直訳すると「窓を開けるのをいやだと思いますか」。

■ だから答えは逆になる
　引き受ける（いやではない）→ No.／Not at all.／Of course not.／Certainly not.
　断る（いやです）→ I'm sorry, but I have a cold.（ふつうは理由を言ってやんわり断る）
日本語の「いいですよ」に引かれて Yes. と答えると、「いやです」という意味になってしまう。
例）A: Would you mind waiting for a few minutes?
　　B: Not at all.（かまいませんよ）

■ Would you mind if I 〜?
自分が何かをする許可を求める形。
例）Would you mind if I opened the window?（窓を開けてもかまいませんか）
if のあとが過去形（opened）になることがあるが、意味は現在のことである。丁寧さを出すための形で、Do you mind if I open 〜? と現在形にすることもある。答えはやはり No, not at all.（どうぞ）となる。

■ 似た形：Do you mind 〜?
Would you mind 〜? のほうが丁寧だが、答え方は同じである。

⚠ 注意：入試では「B の答えとして適切なものを選べ」という形で出る。選択肢に Yes, of course. と Of course not. が並んでいたら、mind があるかどうかを必ず確認する。mind があれば、引き受ける答えは not のついたほうである。`,
      },
    ],
    trapExamples: [
      {
        question: '対話を完成させなさい。 A: Would you mind closing the door? B: （　） （快く引き受ける答え）',
        wrongAnswer: 'Yes, of course.',
        trapExplanation: '日本語の「はい、いいですよ」をそのまま Yes に置きかえてしまう。mind が「いやだと思う」という意味であることを忘れているため、答えが逆になる。',
        correctAnswer: 'Not at all. / Of course not. / No, not at all.',
        correctExplanation:
          'Would you mind 〜ing? は「〜するのをいやだと思いますか」という質問である。引き受けるなら「いやではない」＝ No / Not at all で答える。Yes と答えると「いやです」という拒否になってしまう。mind を見たら答えの Yes / No を反転させる。',
      },
      {
        question: '対話を完成させなさい。 A: Could you help me with my homework now? B: （　） I have to leave for practice in five minutes.',
        wrongAnswer: 'Sure. No problem.',
        trapExplanation: '依頼への答えといえば Sure.、と覚えているため、空所だけを見て決めてしまい、あとに続く「五分後に練習へ出なければならない」という事情を読んでいない。',
        correctAnswer: "I'm sorry, I can't.",
        correctExplanation:
          '空所のあとに、引き受けられない理由が述べられている。したがって断りの表現が入る。会話文の空所補充では、空所の前後の文と意味がつながるかを必ず確かめる。断るときは I\'m sorry, I can\'t. / I\'m afraid I can\'t. を使い、理由を添える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s172',
    subject: 'eigo',
    examType: 'koko',
    title: '許可を求める表現：Can I / May I / Could I',
    description: '自分が動くときの言い方をそろえ、場面に合う丁寧さを選ぶ',
    order: 672,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '友だちの家で「トイレ借りていい？」と聞くのと、初めて訪ねた家で同じことを聞くのとでは、言い方を変えたい。英語では Can I 〜? と May I 〜? を選び分ける。どちらも文法的には正しいので、正解を決めるのは場面である。誰に向かって話しているのかを読み取る力が問われる。',
    keyPoints: [
      '許可を求める形の主語は I。Can I ＜ Is it OK if I ＜ May I ≒ Could I の順に丁寧になる。',
      'May I 〜? は改まった場面向け。店員の May I help you? が代表例。',
      '許可を与える：Sure, go ahead. / Of course. / Certainly.',
      '許可を断る：I\'m sorry, but you can\'t. / I\'m afraid not. 理由を添える。',
      'Shall I 〜? は「〜しましょうか」という申し出であって、許可を求める形ではない。',
    ],
    sections: [
      {
        heading: '許可を求める形の階段',
        figureId: 'lf_kokoeigoext05_172',
        body: `自分が何かをしてよいかをたずねる形を、気軽なものから並べる。

　Can I use your pen?　　　　　　ペン使っていい？（親しい相手）
　Is it OK if I use your pen?　　ペンを使ってもいいですか
　May I use your pen?　　　　　　ペンをお借りしてもよろしいですか（改まった場面）
　Could I use your pen?　　　　　ペンをお借りしてもよろしいでしょうか

■ May I と Could I
どちらも丁寧である。May I 〜? のほうがあらたまった響きがあり、店員・受付・初対面の相手との会話でよく使われる。Could I 〜? は遠慮を込めた言い方で、友人にも目上の人にも使える。

■ 場面から選ぶ
　友だちどうし　→ Can I 〜?
　店・ホテル・先生　→ May I 〜? / Could I 〜?
入試の会話文では、話し手の関係が必ず書かれている。誰と誰の会話かを読んでから空所を埋める。

■ 答え方
　許可する：Sure, go ahead.／Of course.／Certainly.／Yes, please do.
　断る：I'm sorry, but you can't.／I'm afraid not.／Sorry, it's not allowed here.
断るときは理由を添えるのがふつうである。
例）A: May I take pictures here? B: I'm sorry, you can't. Photos are not allowed in this room.

★ ポイント：Can I 〜? と Can you 〜? は一字違いで意味が反対になる。空所補充では、そのあとの文で「誰が動いたか」を確かめると確実である。`,
      },
      {
        heading: 'まぎらわしい三つの形',
        body: `会話文の空所補充では、次の三つが選択肢に並ぶことが多い。

■ ①Can I 〜? / May I 〜?（許可）……自分が動く
例）May I sit here?（ここに座ってもよろしいですか）
　→ 座るのは自分。

■ ②Can you 〜? / Could you 〜?（依頼）……相手が動く
例）Could you move over a little?（少し詰めていただけますか）
　→ 動くのは相手。

■ ③Shall I 〜?（申し出）……自分が相手のために動く
例）Shall I carry your bag?（かばんをお持ちしましょうか）
　→ 自分が動くが、相手のためにする。答えは Yes, please. / No, thank you.

■ 見分けの手順
　1. 主語は I か you か　　→ you なら依頼
　2. 主語が I なら、自分の得になるか、相手の得になるか
　　　自分のため　→ 許可（May I / Can I）
　　　相手のため　→ 申し出（Shall I / May I help you?）

例）A: （　） help you? B: Yes, please. I'm looking for a blue shirt.
　→ 客を助けるのは店員なので、申し出の May I help you? が入る。
例）A: （　） try this on? B: Sure. The fitting room is over there.
　→ 試着するのは客自身なので、許可の May I / Can I が入る。

⚠ 注意：May I help you? は店員が客に言う決まり文句である。客が店員に向かって言うことはない。立場を取りちがえないよう、会話の設定を先に確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '空所に入る語を選びなさい。 A: （　） I take a picture here? B: I\'m sorry, you can\'t. It\'s not allowed. ①Shall ②May',
        wrongAnswer: '①Shall',
        trapExplanation: 'Shall I 〜? も May I 〜? も主語が I なので、意味を考えずに形だけで選んでしまう。Shall I は「〜しましょうか」という申し出であり、許可を求める形ではない。',
        correctAnswer: '②May',
        correctExplanation:
          '写真を撮るのは自分の希望なので、許可を求める May I（Can I）が入る。Shall I take a picture? は「（あなたのために）写真を撮りましょうか」という申し出になり、「許されていません」という答えとかみ合わない。',
      },
      {
        question: '店員が客に最初にかける言葉として正しいものを選びなさい。 ①May I help you? ②Could you help me?',
        wrongAnswer: '②Could you help me?',
        trapExplanation: '「お手伝いしましょうか」という日本語から help を探し、主語の向きを確かめずに選んでしまう。②では店員が客に助けを求めることになる。',
        correctAnswer: '①May I help you?',
        correctExplanation:
          '店員が客に声をかける決まり文句は May I help you?（いらっしゃいませ・何かお探しですか）である。答えは Yes, please. I\'m looking for 〜. や No, thank you. I\'m just looking. となる。②は自分が助けてもらう依頼なので、立場が逆である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s173',
    subject: 'eigo',
    examType: 'koko',
    title: '場面で選ぶ会話表現：買い物・道案内・電話',
    description: '入試の会話文で毎年出る定型表現を、場面ごとに整理する',
    order: 673,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    intro: '会話文の空所補充は、単語力ではなく「その場面で人が何と言うか」を知っているかで決まる。電話で「私です」を I am Tom. と言う英語話者はいない。買い物・道案内・電話という三つの場面には、そのまま覚えるべき決まり文句がある。ここを固めると、入試の会話問題は得点源になる。',
    keyPoints: [
      '買い物：May I help you? — Yes, please. I\'m looking for 〜. / No, thank you. I\'m just looking.',
      '品物を渡す：Here you are. / Here it is.（「はい、どうぞ」）',
      '道案内：Could you tell me the way to 〜? / Shall I show you the way?',
      '電話：Hello, this is Ken. / May I speak to Tom? — Speaking. / Hold on, please.',
      '聞き取れないとき：Pardon? / I beg your pardon? / Could you say that again?',
    ],
    sections: [
      {
        heading: '買い物と道案内',
        body: `■ 買い物の場面
　店員：May I help you?（いらっしゃいませ）
　客：Yes, please. I'm looking for a birthday present for my sister.
　　　／No, thank you. I'm just looking.（見ているだけです）
　店員：How about this one?／What color would you like?／What size do you wear?
　客：Can I try it on?（試着してもいいですか）／How much is it?
　店員：It's three thousand yen.／Here you are.（はい、どうぞ）
　客：I'll take it.（これをください）

★ ポイント：Here you are. は品物を手渡すときのことばである。「はい、どうぞ」と訳せるが、許可を与える Sure, go ahead. とは場面が違う。手に持って渡していれば Here you are.、行動を許すなら Go ahead. と使い分ける。

■ 道案内の場面
　たずねる：Excuse me. Could you tell me the way to the station?
　　　　　　／How can I get to the museum?
　答える：Go straight along this street and turn right at the second corner.
　　　　　It's on your left. You can't miss it.（すぐ分かりますよ）
　どのくらいかかるか：How long does it take?（どのくらいかかりますか）
　　　　　　　　　　　It takes about ten minutes on foot.
　分からないとき：I'm sorry, I'm a stranger here.（この辺りは不案内です）

■ 申し出る形
　Shall I show you the way?（道をご案内しましょうか）
　答え：Yes, please. That's very kind of you.／No, thank you. I can find it.`,
      },
      {
        heading: '電話と、聞き返し',
        body: `■ 電話の場面（決まり文句がとくに多い）
　かける：Hello. This is Ken.（もしもし、ケンです）
　　　　　May I speak to Tom, please?（トムさんをお願いします）
　本人が出た：Speaking.（私です）／This is he. / This is she.
　取りつぐ：Just a moment, please.／Hold on, please.／I'll get him.
　不在：I'm sorry, he is out now.／He isn't home right now.
　伝言：Can I take a message?（伝言を承りましょうか）
　　　　Can I leave a message?（伝言をお願いできますか）
　折り返し：Could you tell him to call me back?（折り返し電話をくれるよう伝えていただけますか）

⚠ 注意：電話で自分の名前を言うときは This is Ken. であって、× I am Ken. とは言わない。また「私です」は Speaking. で、× I am. とは言わない。この二つは毎年どこかの入試で出る。

■ 聞き返す・確かめる
　Pardon?／I beg your pardon?／Excuse me?（もう一度言ってください）
　Could you say that again, please?
　Could you speak more slowly?
　What do you mean?（どういう意味ですか）

■ お礼と応答
　Thank you very much. — You're welcome.／Not at all.／My pleasure.
　That's very kind of you.（ご親切にありがとうございます）

■ 解き方の手順
①場面（店・道・電話・教室）を確認する　②話し手の立場（店員か客か、かける側か受ける側か）を確認する　③その場面の決まり文句から選ぶ
選択肢を一つずつ訳すより、この三段階のほうが速く正確である。`,
      },
    ],
    trapExamples: [
      {
        question: '電話での対話を完成させなさい。 A: Hello. May I speak to Ken, please? B: （　） （本人が出た場合の答え）',
        wrongAnswer: 'Yes, I am Ken.',
        trapExplanation: '日本語の「はい、ケンです」をそのまま英語に置きかえてしまう。電話では自分を指すのに I am 〜 を使わない、という約束を知らないと必ず起こる誤りである。',
        correctAnswer: 'Speaking. / This is Ken speaking.',
        correctExplanation:
          '電話で「私です」と答えるときは Speaking. または This is he. / This is Ken speaking. を使う。自分から名乗るときも This is Ken. であって I am Ken. とは言わない。電話特有の言い方としてそのまま覚える。',
      },
      {
        question: '店員が商品を手渡しながら言う言葉として適切なものを選びなさい。 ①Yes, please. ②Here you are.',
        wrongAnswer: '①Yes, please.',
        trapExplanation: '「はい、どうぞ」という日本語が Yes, please. とも Here you are. とも訳せるため、場面を考えずに選んでしまう。',
        correctAnswer: '②Here you are.',
        correctExplanation:
          'Here you are.（＝Here it is.）は品物を手渡すときの決まり文句である。Yes, please. は Shall I 〜? や Would you like 〜? に対して「はい、お願いします」と頼む側が言うことばで、渡す側は使わない。誰が何をしている場面かで選ぶ。',
      },
    ],
  },

  // ───────────────── 8. 命令文（s174〜s176） ─────────────────
  {
    id: 'koko_eigo_s174',
    subject: 'eigo',
    examType: 'koko',
    title: '命令文の基本：動詞の原形で始める',
    description: '主語を書かない、be動詞は Be。please の位置と呼びかけの書き方',
    order: 674,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro: '英語の命令文は、主語をまるごと省いてしまう。Open the door. と、いきなり動詞から始める。日本語も「開けて」と主語を言わないから感覚は近いが、be動詞の文になると Are quiet. と書いてしまう人が続出する。原形とは何かを、ここで一度はっきりさせておく。',
    keyPoints: [
      '命令文は主語 you を書かず、動詞の原形で文を始める。',
      'be動詞の命令文は Be 〜.（× Are 〜.）。Be quiet. / Be careful. / Be kind to others.',
      'please は文頭（Please 〜.）か文末（〜, please.）に置く。文末ではカンマを打つ。',
      '呼びかけの名前は、カンマで区切って文の前か後ろに置く（Ken, close the door.）。',
      '主語をつけると命令ではなくふつうの文になる（You close the door.＝あなたはドアを閉める）。',
    ],
    sections: [
      {
        heading: '命令文の作り方',
        body: `命令文は、目の前の相手（you）に「〜しなさい・〜して」と言う文である。主語 you は言わなくても分かるので省き、動詞の原形から始める。

■ 一般動詞の命令文
例）Open your textbook to page ten.（教科書の十ページを開きなさい）
例）Wash your hands before dinner.
例）Study hard.
ふつうの文 You open the door. から主語を取れば命令文になる。三単現の s も、時制の変化も関係しない。

■ be動詞の命令文
be動詞の原形は be である。したがって、
　○ Be quiet.（静かにしなさい）
　○ Be careful.（気をつけて）
　○ Be kind to old people.
　× Are quiet.／× Is careful.
am / is / are はすべて「主語に合わせて変化した形」であって原形ではない。命令文には原形しか使えないので be になる。ここは最重要の一点である。

■ 呼びかけ
名前を添えるときはカンマで区切る。
例）Ken, close the window.／Close the window, Ken.
カンマがないと Ken close the window. となり、主語＋動詞の文に見えてしまう（しかも三単現の s がない誤文になる）。

★ ポイント：命令文かどうかは「文が動詞で始まっているか」で判断する。長文で動詞から始まる文が出てきたら、まず命令文を疑う。`,
      },
      {
        heading: 'please の使い方と、丁寧さ',
        body: `■ please の位置
　文頭：Please open the window.
　文末：Open the window, please.
文末に置くときはカンマを打つのがふつうである。please をつけると「〜してください」とややていねいになる。

■ ただし please をつけても命令は命令
Please open the window. は、Could you open the window? ほど丁寧ではない。目上の人に頼むときは、命令文ではなく依頼の疑問文を使うほうがよい。
　友だちに　→ Open the window, please.
　先生に　　→ Could you open the window?
書きかえ問題では「ていねいな言い方に直しなさい」という指示で、命令文 → Could you 〜? / Would you 〜? への書きかえが問われる。
例）Show me your notebook. → Could you show me your notebook?

■ 命令文のあとに続く形
　命令文, and 〜.（〜しなさい、そうすれば…）
　命令文, or 〜.（〜しなさい、さもないと…）
　命令文, will you?（〜してくれない？）
それぞれ s176・s179 で扱う。

■ Let's 〜. も命令文の仲間
Let's play tennis. は「私たちに〜させて」という let の命令文から生まれた形である（s168）。

⚠ 注意：命令文を作れという問題で、主語 You を残したまま Please you open the door. と書く誤りがある。命令文に主語は書かない。強調のために You be quiet! のように主語を置く形はあるが、答案では避ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「教室では静かにしなさい」を英語にしなさい。',
        wrongAnswer: 'Are quiet in the classroom.',
        trapExplanation: '「静かだ」は You are quiet. だから、主語を取れば Are quiet. になると考えてしまう。are が原形ではないことを見落としている。',
        correctAnswer: 'Be quiet in the classroom.',
        correctExplanation:
          '命令文は動詞の原形で始める。be動詞の原形は be なので、Be quiet. となる。am / is / are は主語に合わせて変化した形であって原形ではない。Be careful. / Be kind. / Don\'t be late. も同じ形である。',
      },
      {
        question: '「ケン、この窓を閉めなさい」を英語にしなさい。',
        wrongAnswer: 'Ken closes this window.',
        trapExplanation: '呼びかけの Ken を主語だと考えてしまい、三単現の s までつけて、ふつうの平叙文にしてしまう。',
        correctAnswer: 'Ken, close this window. / Close this window, Ken.',
        correctExplanation:
          '呼びかけの名前はカンマで区切り、命令文の本体は動詞の原形から始める。Ken closes this window. は「ケンはこの窓を閉める」という事実を述べた文になってしまう。カンマの有無で文の種類が変わる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s175',
    subject: 'eigo',
    examType: 'koko',
    title: '否定の命令文：Don\'t 〜. と Never 〜.',
    description: '「〜するな」の作り方と、命令文をやわらげる言いかえ',
    order: 675,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    intro: '「遅れるな」を英語で言うと Don\'t be late. である。命令文には主語がないのに、否定にすると Don\'t が顔を出す。しかも be を落として Don\'t late. と書く誤りが非常に多い。さらに強く「決して〜するな」と言いたいときは Never を使う。強さの段階を、言い方ごとに整理しておこう。',
    keyPoints: [
      '否定の命令文は Don\'t＋動詞の原形。主語がなくても Don\'t を使う。',
      'be動詞なら Don\'t be 〜.（Don\'t be late. / Don\'t be afraid.）。be を落とさない。',
      'Never＋原形は Don\'t より強い「決して〜するな」。',
      'Please don\'t 〜. の語順（× Don\'t please 〜.）。',
      '命令文は強い言い方。目上の人には Could you 〜? / Why don\'t you 〜? に言いかえる。',
    ],
    sections: [
      {
        heading: 'Don\'t と Never',
        figureId: 'lf_kokoeigoext05_175',
        body: `■ Don't＋動詞の原形
例）Don't run in the hallway.（廊下を走ってはいけません）
例）Don't open the door.
主語がないのに don\'t が出てくるのは奇妙に見えるが、命令文の否定はこの形と決まっている。

■ be動詞の否定命令文
例）Don't be late.（遅れないで）
例）Don't be afraid.（こわがらないで）
例）Don't be so noisy.
　× Don't late.／× Don't afraid.
late も afraid も形容詞なので、動詞 be が必要である。s174 の Be quiet. と対にして覚える。

■ Never＋原形（もっと強い）
例）Never give up.（決してあきらめるな）
例）Never tell a lie.（決してうそをつくな）
Don't より強く、格言やスローガンでよく使われる。
　× Never don't give up.（否定が二重）
Never 自体が否定の意味を持つので、don\'t は不要である。

■ please をつけるとき
例）Please don't touch the paintings.（絵にさわらないでください）
　× Don't please touch 〜.
please は文頭か文末に置く。文末なら Don't touch the paintings, please. となる。

★ ポイント：Don't be 〜. の be を落とさないこと。「動詞がない文は作れない」と考えれば、形容詞の前に be が要ることは自然に分かる。`,
      },
      {
        heading: '強さの調整——命令文から依頼へ',
        body: `命令文は相手に選ぶ余地を与えない、いちばん強い言い方である。場面によっては失礼になるので、言いかえられるようにしておく。

■ 強い順に並べる
　Open the window.　　　　　　　　　窓を開けろ（命令）
　Please open the window.　　　　　 窓を開けてください
　Will you open the window?　　　　 窓を開けてくれますか
　Could you open the window?　　　　窓を開けていただけますか
　Would you mind opening the window?　窓を開けていただけませんか
下にいくほど丁寧になり、相手が断りやすくなる。

■ 禁止の言い方の強さ
　Don't smoke here.（吸わないで）
　You must not smoke here.（吸ってはいけない）
　You may not smoke here.（規則として許されていない）
　Smoking is not allowed here.（掲示のような客観的な言い方）
掲示では No smoking. のような短い形も使われる。

■ 書きかえ問題の型
　Don't be late. ＝ You must not be late.
　Don't run here. ＝ You must not run here.
　Be quiet. ＝ You must be quiet.
命令文と must / must not の書きかえは頻出である。主語 You を補うことを忘れない。

■ 目上の人へのアドバイス
　× You had better read this book.（上から言う響きになる）
　○ Why don't you read this book?／I think you should read this book.

⚠ 注意：Never を使った文を否定文だと思って、内容一致問題で意味を逆に取る誤りがある。Never give up. は「あきらめるな」であって「あきらめない」という報告ではない。`,
      },
    ],
    trapExamples: [
      {
        question: '「授業に遅れないようにしなさい」を英語にしなさい。',
        wrongAnswer: "Don't late for class.",
        trapExplanation: '「遅れる」を late 一語で表せると思いこみ、動詞を入れずに文を作ってしまう。late は形容詞であって動詞ではない。',
        correctAnswer: "Don't be late for class.",
        correctExplanation:
          'late は形容詞なので、動詞 be が必要である。否定の命令文は Don\'t＋動詞の原形なので、Don\'t be late. となる。肯定なら Be on time.（時間を守りなさい）のように、やはり be を使う。',
      },
      {
        question: '「決してうそをついてはいけない」を英語にしなさい。（Never を使うこと）',
        wrongAnswer: "Never don't tell a lie.",
        trapExplanation: '「〜してはいけない」の否定は Don\'t だと覚えているため、Never をつけ足す形で書いてしまい、否定を二重に使ってしまう。',
        correctAnswer: 'Never tell a lie.',
        correctExplanation:
          'Never 自体が「決して〜ない」という否定の意味を持つので、don\'t は不要である。Never＋動詞の原形で「決して〜するな」という強い禁止になる。Don\'t tell a lie. でも意味は通じるが、Never のほうが強い。',
      },
    ],
  },

  {
    id: 'koko_eigo_s176',
    subject: 'eigo',
    examType: 'koko',
    title: '命令文＋and / or：「そうすれば」と「さもないと」',
    description: '二つの接続詞で意味が反転する形と、If への書きかえ',
    order: 676,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '「急ぎなさい、そうすればバスに間に合う」と「急ぎなさい、さもないとバスに乗り遅れる」。日本語では「そうすれば」「さもないと」で言い分けるところを、英語は and と or のたった一語で切り替える。読み落とすと、結論が正反対になってしまう。書きかえの If 文でも、否定の入れ忘れが最大の落とし穴になる。',
    keyPoints: [
      '命令文, and 〜.＝「〜しなさい、そうすれば…」（よい結果）。',
      '命令文, or 〜.＝「〜しなさい、さもないと…」（悪い結果）。',
      'and の書きかえ：If you＋動詞（肯定）, you will 〜.',
      'or の書きかえ：If you don\'t＋動詞, you will 〜. ＝ Unless you＋動詞, you will 〜.',
      'and / or のあとは will を使った未来の文になることが多い。',
    ],
    sections: [
      {
        heading: 'and と or で結果が反転する',
        body: `命令文のあとにカンマを打ち、and または or を続けると、その命令に従った場合・従わなかった場合の結果を表せる。

■ 命令文, and 〜.（そうすれば）
例）Hurry up, and you will catch the bus.（急ぎなさい、そうすればバスに間に合います）
例）Get up early, and you can see the sunrise.
例）Turn right at the corner, and you'll see the post office on your left.
道案内でも非常によく使われる形である。

■ 命令文, or 〜.（さもないと）
例）Hurry up, or you will miss the bus.（急ぎなさい、さもないとバスに乗り遅れます）
例）Study hard, or you will fail the test.
例）Put on your coat, or you'll catch a cold.

■ 覚え方
　and → 「そして」→ 命令に従った先の、よい結果
　or → 「または」→ 従わなかったほうの、悪い結果
うしろの文がよいことなら and、悪いことなら or、と内容から判断できる。空所補充では、うしろの内容を読むだけで答えが決まる。

■ 主語のない命令文であることを見落とさない
Hurry up, and 〜. の前半には主語がない。カンマの前が動詞で始まっていれば命令文である。長文の中でこの形に出会ったら、「〜しなさい、そうすれば」と訳す準備をする。

★ ポイント：and か or かを決めるのは、うしろの文が「うれしいこと」か「困ること」か。訳す前に、まずそこを見る。`,
      },
      {
        heading: 'If を使った書きかえ',
        body: `入試ではこの形を If の文に書きかえさせる問題が頻出する。

■ and の書きかえ（否定は入らない）
　Hurry up, and you will catch the bus.
　＝ If you hurry up, you will catch the bus.
命令文の部分をそのまま If you＋動詞（現在形）にする。

■ or の書きかえ（否定が入る）
　Hurry up, or you will miss the bus.
　＝ If you don't hurry up, you will miss the bus.
　＝ Unless you hurry up, you will miss the bus.
or は「そうしなければ」という意味なので、If 文にすると don\'t が必要になる。ここを忘れる誤りが最も多い。
Unless＝If 〜 not なので、Unless のあとには don\'t を入れない（× Unless you don't hurry up）。

■ 時・条件の副詞節では現在形
If のあとは未来のことでも現在形にする（s163）。
　○ If you hurry up, you will catch the bus.
　× If you will hurry up, 〜
主語が三人称単数なら三単現の s も必要である。
　例）If he leaves now, he will be in time.

■ be動詞の命令文でも同じ
　Be kind to others, and they will be kind to you.
　＝ If you are kind to others, they will be kind to you.

■ 練習の型
　Study hard, or you will fail. → If you don't study hard, you will fail.
　Take this medicine, and you will feel better. → If you take this medicine, you will feel better.

⚠ 注意：or の文を If に書きかえるとき、うしろの結果の文はそのまま残す。否定にするのは If のほうだけである。両方を否定にしてしまうと、意味が元に戻らない。`,
      },
    ],
    trapExamples: [
      {
        question: '空所に入る語を選びなさい。 Leave now, （　） you will be late for the meeting. ①and ②or',
        wrongAnswer: '①and',
        trapExplanation: 'カンマのあとに続く文をよく読まず、「〜しなさい、そうすれば」という形をよく見るからという理由で and を選んでしまう。',
        correctAnswer: '②or',
        correctExplanation:
          'うしろの文は「会議に遅れる」という困った結果である。従わなかった場合の悪い結果を導くのは or（さもないと）。よい結果なら and になる。うしろの内容がうれしいことか困ることかで決める。',
      },
      {
        question: '同じ意味になるように書きかえなさい。 Hurry up, or you will miss the train.',
        wrongAnswer: 'If you hurry up, you will miss the train.',
        trapExplanation: '命令文をそのまま If you＋動詞 に置きかえてしまい、or に含まれる「そうしなければ」という否定を落としてしまう。結果として、急いだのに乗り遅れるという意味の通らない文になる。',
        correctAnswer: "If you don't hurry up, you will miss the train.",
        correctExplanation:
          '命令文, or 〜. は「〜しなさい、さもないと…」なので、If に書きかえるときは否定にして If you don\'t 〜 とする。Unless you hurry up, you will miss the train. とも書ける（Unless は if 〜 not の意味なので don\'t は不要）。and の文なら否定は入らない。',
      },
    ],
  },

  // ───────────────── 9. 感嘆文（s177〜s178） ─────────────────
  {
    id: 'koko_eigo_s177',
    subject: 'eigo',
    examType: 'koko',
    title: '感嘆文①：What で始まる形',
    description: 'What (a/an)＋形容詞＋名詞＋主語＋動詞! の語順を正確に組み立てる',
    order: 677,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro: '満開の桜を見て「なんてきれいな花なんだ！」と言うとき、英語は What a beautiful flower this is! と言う。疑問詞 what で始まるのに疑問文ではない。しかも語順は this is で、疑問文の is this ではない。この一点を落とすだけで、並べかえ問題が全滅する。',
    keyPoints: [
      'What＋(a/an)＋形容詞＋名詞＋主語＋動詞! の語順。',
      '感嘆文は疑問文ではないので、主語と動詞をひっくり返さない（× What a nice car is this!）。',
      '名詞が複数形・不可算名詞のときは a / an をつけない。',
      '主語＋動詞は省略できる（What a beautiful flower!）。',
      '文末は必ず感嘆符（!）。日本語では「なんて〜なのだろう」と訳す。',
    ],
    sections: [
      {
        heading: 'What の感嘆文の組み立て',
        body: `感嘆文は「なんて〜なのだろう」と、驚きや感動を表す文である。名詞を中心に驚くときは What で始める。

■ 語順
What＋(a / an)＋形容詞＋名詞＋主語＋動詞!
例）What a beautiful flower this is!（なんてきれいな花なんだろう）
例）What an interesting book that is!
例）What a good idea it is!

■ 組み立ての手順
ふつうの文から作ると分かりやすい。
　This is a very beautiful flower.
　①very を取り、a beautiful flower のかたまりを文頭へ動かす
　②その前に What を置く
　③残った this is をうしろにつける
　→ What a beautiful flower this is!
主語と動詞の順番はふつうの文のままである。疑問文ではないので × What a beautiful flower is this! とはしない。

■ a / an をつけない場合
①名詞が複数形
　例）What beautiful flowers these are!
②数えられない名詞
　例）What good news this is!（news は不可算名詞）
　例）What beautiful weather it is!
a / an は「一つの」という意味なので、複数や不可算にはつかない。

■ 主語＋動詞の省略
会話では、うしろの主語＋動詞を省くことが多い。
例）What a beautiful flower!（なんてきれいな花！）
例）What a surprise!／What a pity!（なんて残念な）
入試の並べかえでは、語群に this is があるかどうかで、省略の有無が決まる。

★ ポイント：What の直後には必ず名詞のかたまりが来る。形容詞だけで名詞がなければ、次のセッションで扱う How を使う。`,
      },
      {
        heading: 'まちがえやすい点',
        body: `■ ①a / an の付け忘れ・付けすぎ
　○ What a big dog that is!（単数）
　○ What big dogs those are!（複数・a なし）
　× What a big dogs those are!
名詞が単数か複数かを必ず確かめる。an は母音の音で始まる語の前（an old house, an interesting story）。

■ ②語順を疑問文にしてしまう
　○ What a nice car this is!
　× What a nice car is this!
感嘆文は「驚きを述べる文」であって、たずねる文ではない。主語＋動詞の順を守る。

■ ③形容詞を忘れない
感嘆文の形容詞は省くこともできる。
例）What a day!（なんて日だ）
ただし試験で「なんて美しい花だろう」と指定されていれば beautiful は必要である。

■ ④文末の感嘆符
感嘆文の終わりは「!」である。ピリオドやクエスチョンマークは誤り。

■ ⑤how との使い分け（次セッションの予告）
　名詞がある　→ What
　形容詞・副詞だけ　→ How
例）What a fast runner he is!（runner という名詞がある）
　　How fast he runs!（fast は副詞、名詞がない）
この二つは書きかえ問題で必ずペアにされる。

⚠ 注意：What is this? のような疑問文と形が似ているので、文末が「!」か「?」かを見て区別する。長文では感嘆文が話し手の感情を表すので、心情を問う設問の根拠になることが多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「なんてきれいな花なんだろう（複数の花を見て）」を英語にしなさい。',
        wrongAnswer: 'What a beautiful flowers these are!',
        trapExplanation: '感嘆文は What a 〜 で始まる、と一つの形だけで覚えているため、名詞が複数形になっても a を残してしまう。',
        correctAnswer: 'What beautiful flowers these are!',
        correctExplanation:
          'a / an は「一つの」を表すので、複数形の名詞にはつけない。名詞が単数なら What a beautiful flower this is!、複数なら What beautiful flowers these are! となる。news や weather のような不可算名詞にも a はつかない。',
      },
      {
        question: '次の語を並べかえて感嘆文を作りなさい。 （ this / a / what / is / nice / camera ）',
        wrongAnswer: 'What a nice camera is this!',
        trapExplanation: 'What で始まる文を疑問文だと思いこみ、be動詞を主語の前に出す語順にしてしまう。感嘆文は疑問文ではない。',
        correctAnswer: 'What a nice camera this is!',
        correctExplanation:
          '感嘆文は驚きを述べる文なので、主語＋動詞の語順はふつうの文のままである。What a nice camera のかたまりのあとに this is と続ける。文末は感嘆符にする。省略して What a nice camera! と言うこともできる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s178',
    subject: 'eigo',
    examType: 'koko',
    title: '感嘆文②：How の形と、What との使い分け',
    description: '名詞があるかどうかで決まる二つの形。書きかえで形容詞と副詞を入れかえる',
    order: 678,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '「なんて速いんだ！」は How fast! だが、「なんて速いランナーなんだ！」は What a fast runner! になる。分かれ目は、驚いている中心が名詞かどうかである。しかも二つは書きかえで結ばれていて、そのとき形容詞が副詞に姿を変える。ここが最後の関門になる。',
    keyPoints: [
      'How＋形容詞（副詞）＋主語＋動詞! の語順。How のうしろに名詞は来ない。',
      '名詞があれば What、形容詞・副詞だけなら How。',
      'How のあとにも a / an は入らない（× How a beautiful flower this is!）。',
      '書きかえ：What a fast runner he is! ＝ How fast he runs!（形容詞→副詞、名詞→動詞）。',
      '主語＋動詞は省略できる（How beautiful! / How kind of you!）。',
    ],
    sections: [
      {
        heading: 'How の感嘆文',
        body: `形容詞や副詞そのものに驚くときは How で始める。

■ 語順
How＋形容詞（または副詞）＋主語＋動詞!
例）How beautiful this flower is!（この花はなんて美しいのだろう）
例）How kind she is!
例）How fast he runs!（fast は副詞、runs が動詞）
例）How well she plays the piano!

■ 名詞は入らない
　○ How beautiful this flower is!
　× How a beautiful flower this is!
How のうしろに来るのは形容詞か副詞だけである。名詞がある文は What を使う。

■ 主語＋動詞の省略
例）How beautiful!（なんて美しい）
例）How nice!／How exciting!
例）How kind of you!（ご親切に）
会話ではこの短い形が多い。

■ 疑問文の How との区別
　How tall are you?（背はどのくらいですか）……疑問文・語順は are you
　How tall he is!（彼はなんて背が高いのだろう）……感嘆文・語順は he is
語順と文末の記号（? か !）で見分ける。

★ ポイント：How のうしろに「a」があったら、その時点で誤り。a があるなら What の文である。`,
      },
      {
        heading: 'What ⇄ How の書きかえ',
        body: `同じ内容を、What の文でも How の文でも言える場合がある。入試ではこの書きかえが頻出する。

■ 型①：be動詞の文
　What a beautiful flower this is!
　＝ How beautiful this flower is!
名詞 flower を主語の位置に移し、形容詞 beautiful だけを How のあとに置く。this is が this flower is に変わる点に注意する。

　What a kind girl she is! ＝ How kind she is!

■ 型②：一般動詞の文（形容詞が副詞に変わる）
　What a fast runner he is!（彼はなんて速いランナーなんだ）
　＝ How fast he runs!（彼はなんて速く走るんだ）
名詞 runner が動詞 runs に、形容詞 fast が副詞 fast に変わる。
　What a good tennis player she is!
　＝ How well she plays tennis!
good（形容詞）→ well（副詞）と形が変わることに注意する。同じように、
　careful → carefully／beautiful → beautifully／early → early／hard → hard
副詞の作り方（多くは形容詞＋ly、good だけは well）を確認しておく。

■ 手順のまとめ
　What の文 → How の文
　①名詞を動詞に直す（runner → runs、player → plays、singer → sings）
　②形容詞を副詞に直す（fast → fast、good → well、beautiful → beautifully）
　③主語＋動詞の語順はそのまま

■ 主語と動詞の一致を忘れない
　He is a fast runner. → How fast he runs!（三単現の s）
　They are fast runners. → How fast they run!

⚠ 注意：How good she plays tennis! は誤り。plays は動詞なので、修飾するのは副詞 well である。形容詞と副詞の区別は、この書きかえで必ず問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '「なんて美しい花なんだろう」を How で始めて英語にしなさい。',
        wrongAnswer: 'How a beautiful flower this is!',
        trapExplanation: 'What の感嘆文の形が頭に残っているため、How に置きかえるときも a beautiful flower のかたまりをそのまま残してしまう。',
        correctAnswer: 'How beautiful this flower is!',
        correctExplanation:
          'How のうしろには形容詞か副詞だけが来て、名詞は入らない。名詞 flower は主語の位置に移して this flower is とする。名詞を残したいなら What a beautiful flower this is! と What の文にする。How のあとの a は必ず誤りである。',
      },
      {
        question: '同じ意味になるように書きかえなさい。 What a good tennis player she is! ＝ How （　） she （　） tennis!',
        wrongAnswer: 'How good she plays tennis!',
        trapExplanation: '形容詞 good をそのまま移してしまう。動詞 plays を修飾するには副詞が必要だという意識がはたらかない。',
        correctAnswer: 'How well she plays tennis!',
        correctExplanation:
          '名詞 player を動詞 plays に直すと、それを修飾する語は副詞でなければならない。good（形容詞）の副詞形は well である。fast のように形が変わらない語、beautiful → beautifully のように ly がつく語もあるので、副詞形をあわせて覚える。',
      },
    ],
  },

  // ───────────────── 10. 付加疑問文・否定疑問文（s179〜s180） ─────────────────
  {
    id: 'koko_eigo_s179',
    subject: 'eigo',
    examType: 'koko',
    title: '付加疑問文：「〜ですね」のたすき掛け',
    description: '肯定なら否定、否定なら肯定。主語・動詞のそろえ方と例外',
    order: 679,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro: '「今日は寒いですね」の「ですね」にあたるのが付加疑問文である。英語では It\'s cold today, isn\'t it? のように、文の最後に短い疑問形をくっつける。ルールは単純で、本文が肯定なら否定、否定なら肯定。ちょうどたすき掛けになる。あとは、どの語を使うかを本文から拾えばよい。',
    keyPoints: [
      '本文が肯定なら否定の付加疑問、本文が否定なら肯定の付加疑問（たすき掛け）。',
      '付加疑問の主語は必ず代名詞にする（Tom → he、your sister → she、this book → it）。',
      '本文に be動詞・助動詞があればそれを使う。なければ do / does / did を使う。',
      '否定の付加疑問は必ず短縮形（isn\'t it? / don\'t you? / can\'t he?）。',
      '例外：命令文 → will you?／Let\'s 〜 → shall we?／I am 〜 → aren\'t I?／There is 〜 → isn\'t there?',
    ],
    sections: [
      {
        heading: '作り方の三手順',
        figureId: 'lf_kokoeigoext05_179',
        body: `付加疑問文は「〜ですね・〜でしょう」と相手に確認する言い方である。作り方は次の三手順で決まる。

■ ①本文の肯定・否定を逆にする
　You are a student, aren't you?（肯定→否定）
　You aren't a student, are you?（否定→肯定）

■ ②使う語を本文から拾う
　be動詞の文 → be動詞を使う
　　It is cold today, isn't it?
　助動詞の文 → その助動詞を使う
　　He can swim, can't he?／You will come, won't you?
　一般動詞の文 → do / does / did を使う
　　You like music, don't you?
　　She plays tennis, doesn't she?
　　They went home, didn't they?
　現在完了の文 → have / has を使う
　　You have finished it, haven't you?

■ ③主語を代名詞にする
　Tom can drive, can't he?
　Your sister is a nurse, isn't she?
　This book is interesting, isn't it?
　Ken and Mary are friends, aren't they?
固有名詞や名詞句をそのまま残すのは誤り（× isn't Tom?）。

★ ポイント：三手順のうち、まちがえやすいのは②である。本文を見て「be動詞・助動詞があるか」をまず確かめ、なければ do 系にする、という順で考える。`,
      },
      {
        heading: '例外の形と、答え方',
        body: `■ 覚えるべき例外
　命令文 → , will you?
　　例）Open the window, will you?／Don't be late, will you?
　Let's 〜. → , shall we?
　　例）Let's play tennis, shall we?
　I am 〜. → , aren't I?
　　例）I am right, aren't I?（× amn't I はふつう使わない）
　There is / are 〜. → , isn't there? / aren't there?
　　例）There is a park near here, isn't there?
　（本文が否定のときは逆になる：There isn't any milk, is there?）

■ 準否定語に注意
never / hardly / few / little などは否定の意味を持つので、本文が否定として扱われ、付加疑問は肯定になる。
　例）He never comes late, does he?
　例）You have little money, do you?

■ 答え方
答えは付加疑問に引きずられず、内容が肯定なら Yes、否定なら No で答える。
　You like coffee, don't you? — Yes, I do.（好きです）／No, I don't.（好きではありません）
　You aren't busy, are you? — Yes, I am.（いいえ、忙しいです）／No, I'm not.（はい、忙しくありません）
二つめの例のように、否定の本文への答えは日本語と英語で「はい・いいえ」が入れかわる。ここは次のセッションで扱う否定疑問文とまったく同じしくみである。

■ 読み方（音の上げ下げ）
本当に確認したいときは上げ調子、同意を求めるだけなら下げ調子で読む。リスニングでの手がかりになる。

⚠ 注意：付加疑問の短縮形を忘れて × is not it? と書く誤りがある。付加疑問の否定は必ず短縮形にする。`,
      },
    ],
    trapExamples: [
      {
        question: '空所を埋めなさい。 You don\'t like natto, （　）（　）?',
        wrongAnswer: "You don't like natto, don't you?",
        trapExplanation: '本文の形をそのままくり返せばよいと考えてしまう。付加疑問は本文と逆にする、というたすき掛けの原則が抜けている。',
        correctAnswer: 'You don\'t like natto, do you?',
        correctExplanation:
          '本文が否定なら付加疑問は肯定にする。一般動詞の否定文なので do を使い、do you? となる。逆に You like natto, don\'t you? のように、本文が肯定なら付加疑問は否定の短縮形になる。',
      },
      {
        question: '空所を埋めなさい。 Let\'s go to the beach this weekend, （　）（　）?',
        wrongAnswer: "Let's go to the beach this weekend, will you?",
        trapExplanation: '命令文の付加疑問が will you? であることを覚えているため、同じ「動詞で始まる文」である Let\'s にも will you? をつけてしまう。',
        correctAnswer: "Let's go to the beach this weekend, shall we?",
        correctExplanation:
          'Let\'s 〜. の付加疑問は shall we? と決まっている。Let\'s は Let us（私たちが）の意味なので、we で受けるのである。命令文（Open the door, will you?）とは別に覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s180',
    subject: 'eigo',
    examType: 'koko',
    title: '否定疑問文：Yes / No が日本語と逆になる',
    description: 'Don\'t you 〜? への答え方を、内容で決める習慣をつける',
    order: 680,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    intro: '「納豆、好きじゃないの？」と聞かれて「うん、好きだよ」と答える日本語。同じ場面の英語は Don\'t you like natto? — Yes, I do. となる。日本語の「うん」は質問への同意、英語の Yes は答えの中身が肯定であることを示す。基準が違うから、訳すと「はい」と「いいえ」が入れかわる。',
    keyPoints: [
      '否定疑問文は Don\'t you 〜? / Aren\'t you 〜? / Didn\'t you 〜? のように短縮形で始める。',
      '答えは質問の形に関係なく、内容が肯定なら Yes、否定なら No。',
      '日本語に訳すと「はい」と「いいえ」が入れかわる（Yes＝いいえ、No＝はい）。',
      '付加疑問文への答え方も、まったく同じ考え方でよい。',
      '否定疑問文には驚き・確認・さそいの気持ちがこもることが多い。',
    ],
    sections: [
      {
        heading: '否定疑問文の形と意味',
        body: `■ 形
be動詞・助動詞・do の否定の短縮形を文頭に置く。
例）Aren't you tired?（疲れていないのですか）
例）Don't you like natto?（納豆が好きではないのですか）
例）Didn't you go to the party?（パーティーに行かなかったのですか）
例）Can't you swim?（泳げないのですか）
　× Do not you like natto? のように短縮しない形は、ふつう使わない。

■ 込められる気持ち
①驚き・意外
　例）Don't you know his name? Everyone knows him.（え、知らないの）
②確認
　例）Isn't this your umbrella?（これ、あなたのかさじゃない？）
③さそい・すすめ
　例）Won't you come with us?（いっしょに来ませんか）
　例）Why don't you try it?（やってみたらどう）
③の形は、s164・s169 で扱ったとおり誘いの決まり文句である。「〜しないのですか」と直訳すると意味がずれる。

■ 訳し方
「〜ではないのですか」と訳すのが基本だが、②③のように確認や誘いのときは、日本語では「〜ですよね」「〜しませんか」と訳したほうが自然になる。

★ ポイント：否定疑問文は、話し手が「そうだと思っていたのに違うのかな」と感じているときに出てくる。この気持ちの部分が、長文の心情問題で問われる。`,
      },
      {
        heading: '答え方——内容で決める',
        figureId: 'lf_kokoeigoext05_180',
        body: `英語の Yes / No は、質問の形とは無関係に、答えの中身で決まる。

■ 原則
　答えの内容が肯定（する・そうだ）　→ Yes
　答えの内容が否定（しない・ちがう）→ No

例）Don't you like natto?
　　Yes, I do.（いいえ、好きです）
　　No, I don't.（はい、好きではありません）
例）Aren't you a student?
　　Yes, I am.（いいえ、学生です）
　　No, I'm not.（はい、学生ではありません）
例）Didn't you finish your homework?
　　Yes, I did.（いいえ、終わらせました）
　　No, I didn't.（はい、終わっていません）

■ なぜ日本語と逆になるのか
日本語の「はい・いいえ」は、相手の言ったことに同意するかどうかで決まる。「好きじゃないの？」に対して「はい」は「そのとおり、好きではない」という同意である。
英語の Yes / No は、自分の答えの中身が肯定か否定かだけで決まる。だから「好きだ」なら、質問がどんな形でも Yes になる。
　日本語　＝質問への同意で決める
　英語　　＝答えの中身で決める
基準が違うので、訳すと入れかわるのである。

■ 矛盾する答えは書かない
　× Yes, I don't.／× No, I do.
Yes のうしろは必ず肯定の文、No のうしろは必ず否定の文になる。ここが最終確認のポイントである。答えを書いたら、Yes と do、No と don\'t がそろっているかを見る。

■ 付加疑問文でも同じ
　You aren't hungry, are you? — Yes, I am.（いいえ、おなかがすいています）
　　　　　　　　　　　　　　 — No, I'm not.（はい、すいていません）

⚠ 注意：和訳問題では、Yes を「はい」と訳すと意味が逆になる場合がある。否定疑問文への答えは、まず内容を日本語にしてから「はい・いいえ」を決める。`,
      },
    ],
    trapExamples: [
      {
        question: '対話を完成させなさい。 A: Don\'t you have a smartphone? B: （　）, I do. I got it last month.',
        wrongAnswer: 'No, I do.',
        trapExplanation: '日本語の「いいえ、持っています」をそのまま置きかえて No を選んでしまう。英語の Yes / No が答えの中身で決まることを忘れている。',
        correctAnswer: 'Yes, I do.',
        correctExplanation:
          '英語では、答えの内容が肯定なら質問の形に関係なく Yes を使う。「持っている」という肯定の内容なので Yes, I do. となり、日本語にすると「いいえ、持っています」となる。Yes のうしろに否定文、No のうしろに肯定文が来ることはない。',
      },
      {
        question: '対話を完成させなさい。 A: You aren\'t hungry, are you? B: （　）, I\'m not. I had a big lunch.',
        wrongAnswer: "Yes, I'm not.",
        trapExplanation: '日本語で「はい、すいていません」と答えるため、「はい」にあたる Yes を選んでしまう。その結果、Yes のうしろに否定文が続く矛盾した形になる。',
        correctAnswer: "No, I'm not.",
        correctExplanation:
          '答えの内容が「おなかはすいていない」という否定なので No を使う。日本語にすると「はい、すいていません」となり、はい・いいえが入れかわる。Yes のうしろは必ず肯定文、No のうしろは必ず否定文、という形の一致で確認できる。',
      },
    ],
  },
];
