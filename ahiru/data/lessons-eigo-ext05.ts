import type { Lesson } from './lesson-types';

// 中学受験 英語「助動詞・命令文・感嘆文・付加疑問」拡張ユニット（35セッション：eigo_s156〜eigo_s190）
// order は 656〜690。
// 構成：can / be able to(4)／may・might(3)／must・have to と否定の違い(5)／should・had better(3)／
//       will・would(3)／shall・Let's(3)／依頼と許可の会話表現(4)／命令文(4)／感嘆文(3)／付加疑問・否定疑問(3)
// 図解（lesson-figs-eigo-ext05.ts）は、語順そのものが得点を左右する箇所と、
// 「確信の強さ」「義務の強さ」「ていねいさ」のように目盛りで比べると理解が進む箇所だけに付けてある（35課中15課）。
export const eigoExt05Lessons: Lesson[] = [
  // ───────────────────── 1. can / be able to（s156〜s159） ─────────────────────
  {
    id: 'eigo_s156',
    subject: 'eigo',
    examType: 'chugaku',
    title: '助動詞の基本と can①：「〜できる」の文の形',
    description: '助動詞に共通する三つの決まりを覚え、can を使った肯定文・否定文を正しく作れるようにする',
    order: 656,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '助動詞は動詞の前に置いて、「できる」「かもしれない」などの気持ちを付け加える語。',
      '助動詞のあとの動詞は必ず原形。主語が三人称単数でも s を付けない（× She can plays）。',
      '助動詞自身も形を変えない。主語が he / she でも can は can のまま（× cans）。',
      '助動詞を二つ並べることはできない（× will can → will be able to）。',
      '否定文は助動詞のうしろに not を置くだけ。don\'t / doesn\'t は使わない。',
      'can not は一語でつなげて cannot と書き、短縮形は can\'t。',
    ],
    sections: [
      {
        heading: '助動詞に共通する三つの決まり',
        body: `英語の動詞は、そのままでは「する・した」という事実しか伝えられない。そこに「できる」「〜しなければならない」「〜かもしれない」といった話し手の気持ちを付け加えるのが助動詞である。can・may・must・will・should などがその仲間で、いつも動詞の前に置く。

助動詞にはどれにも共通する三つの決まりがある。この三つを最初に丸ごと覚えてしまえば、can でも must でも will でも同じように文が作れる。

■ 決まり① 助動詞のあとは動詞の原形
例）She can play the piano.（彼女はピアノをひける）
主語が she でも play に s は付かない。× She can plays the piano.

■ 決まり② 助動詞自身は形を変えない
例）He can swim fast.（彼は速く泳げる）
× He cans swim. のように助動詞に s を付けてはいけない。

■ 決まり③ 助動詞は二つ並べられない
× He will can come. とは言えない。「〜できるだろう」は will be able to を使って He will be able to come. と表す。

★ ポイント：「助動詞のうしろは原形」「助動詞に s は付かない」の二つは、これから習うすべての助動詞に効く。ここでつまずくと must でも should でも同じまちがいをくり返すことになる。`,
        figureId: 'lf_eigoext05_156',
      },
      {
        heading: 'can の意味と否定文の作り方',
        body: `can の中心の意味は「〜することができる」である。人の能力にも、ものごとの可能性にも使う。

例）I can play the guitar.（私はギターがひける）＝能力
例）You can see Mt. Fuji from here.（ここから富士山が見えます）＝可能
例）You can use my bike.（私の自転車を使っていいよ）＝許可

■ 否定文
助動詞の否定文は、助動詞のすぐうしろに not を置くだけでできる。一般動詞の否定文で使う don't / doesn't は使わない。
例）I cannot swim. ＝ I can't swim.（私は泳げない）
× I don't can swim. ／ × He doesn't can swim. は典型的なまちがい。

■ can not の書き方
can の場合だけ、not をくっつけて cannot と一語で書くのがふつうである。短縮形は can't。書くときは cannot・can't のどちらでもよいが、can not と離して書くのは避ける。

■ 主語が何であっても形は同じ
I can / You can / He can / She can / We can / They can とすべて同じ。三単現の s におびえて cans と書いてしまう受験生が毎年いるので、ここは声に出して確認しておく。

⚠ 注意：can のうしろに to を入れて × I can to swim. とするまちがいも多い。want to play・be able to play のように to を使う形を先に習っているとつられやすいが、助動詞のうしろは to なしの原形である。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女はピアノをひくことができます。」を英語にしなさい。',
        wrongAnswer: 'She can plays the piano.',
        trapExplanation: '主語が三人称単数のときは動詞に s を付ける、という三単現のルールが体にしみついているため、can のうしろの play にもつい s を付けてしまう。',
        correctAnswer: 'She can play the piano.',
        correctExplanation:
          '助動詞のあとの動詞は必ず原形なので、三単現の s は付けない。三単現の s は「助動詞のない現在の文」だけのルールである。She plays the piano.（s あり）と She can play the piano.（s なし）を並べて覚えるとよい。',
      },
      {
        question: '「私の兄は英語を話せません。」を英語にしなさい。',
        wrongAnswer: "My brother doesn't can speak English.",
        trapExplanation: '一般動詞の否定文は doesn\'t を使うと習っているため、can のある文にもそのまま doesn\'t を付けてしまう。',
        correctAnswer: "My brother cannot speak English.（＝ My brother can't speak English.）",
        correctExplanation:
          '助動詞のある文の否定は、助動詞のうしろに not を置くだけでよい。do / does の助けはいらない。can not は cannot と一語で書き、短縮形は can\'t。疑問文も同じで、Does he can 〜? ではなく Can he 〜? となる。',
      },
    ],
  },

  {
    id: 'eigo_s157',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'can②：疑問文の作り方と答え方',
    description: 'can の疑問文は can を主語の前に出すだけであることを理解し、答え方まで正確に書けるようにする',
    order: 657,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'can の疑問文は can を主語の前に出す。Do / Does は使わない。',
      '答えは Yes, 主語 can. / No, 主語 can\'t. と、必ず can で受ける。',
      '答えの主語は代名詞にする（Can Ken 〜? → Yes, he can.）。',
      '疑問詞のある文は「疑問詞＋can＋主語＋原形 〜?」の語順（What can you see?）。',
      'How many などのかたまりは、ばらさずに丸ごと文の先頭に置く。',
    ],
    sections: [
      {
        heading: '疑問文は can を前に出すだけ',
        body: `助動詞のある文を疑問文にするときは、助動詞を主語の前に出すだけでよい。一般動詞の疑問文で使う Do / Does は必要ない。

例）You can play the guitar.（あなたはギターがひける）
　→ Can you play the guitar?（あなたはギターがひけますか）

例）Ken can run fast.
　→ Can Ken run fast?

■ 答え方
答えるときも can を使って受ける。
Yes, I can. / No, I can't.
Yes, he can. / No, he can't.
× Yes, I do. や × No, I don't. と答えるのは誤りである。「聞かれた助動詞でそのまま返す」と覚える。

■ 答えの主語は代名詞にする
Can your sister swim? — Yes, she can.
Can Tom and Ken play soccer? — Yes, they can.
問題文の主語をそのまま書き写して Yes, your sister can. とすると不自然。答えでは代名詞に置きかえるのが原則である。

★ ポイント：肯定文・否定文・疑問文の三つを、同じ文で並べて練習すると定着が早い。
He can ride a bike. ／ He can't ride a bike. ／ Can he ride a bike?`,
        figureId: 'lf_eigoext05_157',
      },
      {
        heading: '疑問詞といっしょに使う',
        body: `「何が見えますか」「どこで買えますか」のように、疑問詞と can を組み合わせる文は入試でよく出る。語順は決まっていて、疑問詞をいちばん前に置き、そのうしろに can の疑問文の形をそのまま続ける。

■ 語順：疑問詞 ＋ can ＋ 主語 ＋ 動詞の原形 〜?
例）What can you see from your room?（あなたの部屋から何が見えますか）
例）Where can I buy this book?（どこでこの本を買えますか）
例）When can we meet?（いつ会えますか）
例）How can I get to the station?（どうやって駅へ行けますか）

■ かたまりで動く疑問詞
How many books can you carry?（何冊の本を運べますか）
How fast can he swim?（彼はどれくらい速く泳げますか）
How many books・How fast はひとかたまりなので、ばらさずに丸ごと先頭に置く。× How can you many books carry? のようにはならない。

■ 疑問詞が主語になるとき
Who can answer this question?（だれがこの問題に答えられますか）
この文の who は主語なので、うしろは can answer とふつうの語順のまま続く。答えは I can. や Ken can. のように短く言う。

⚠ 注意：What can you see? のように疑問詞を前に出したあとは、必ず「can ＋ 主語」の順になる。× What you can see? と主語が先に来る語順は、日本語の語順につられた典型的なまちがいである。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは中国語を話せますか。」を英語にしなさい。',
        wrongAnswer: 'Do you can speak Chinese?',
        trapExplanation: '疑問文は Do で始める、と一般動詞のルールを先に覚えているため、can のある文にも Do を付け足してしまう。',
        correctAnswer: 'Can you speak Chinese?',
        correctExplanation:
          '助動詞のある文の疑問文は、助動詞を主語の前に出すだけでよい。Do / Does は一般動詞の文にしか使わない。同じように Must you go? / Will you come? も do は不要である。',
      },
      {
        question: 'Can your brother play the violin? に「はい、ひけます」と答えなさい。',
        wrongAnswer: 'Yes, he does.',
        trapExplanation: 'Yes, he does. という答え方の形になじみがあるため、can で聞かれたことを忘れて does で受けてしまう。主語を your brother のまま書いてしまうミスも多い。',
        correctAnswer: 'Yes, he can.',
        correctExplanation:
          '聞かれた助動詞をそのまま使って答えるのが原則。Can 〜? には can / can\'t で返す。また主語は代名詞にかえるので、your brother は he になる。否定で答えるときは No, he can\'t. とする。',
      },
    ],
  },

  {
    id: 'eigo_s158',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'can③：could と be able to（過去・未来の「できる」）',
    description: 'can には過去形 could があるが未来形はないことを理解し、be able to で時制を補えるようにする',
    order: 658,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'can の過去形は could。「〜できた」の意味になる。',
      'can に未来形はない。「〜できるだろう」は will be able to を使う（× will can）。',
      'be able to の be は主語に合わせて am / is / are、過去は was / were になる。',
      '過去に一回だけ「実際にやりとげた」ことは was / were able to を使うのがふつう。',
      'could の否定は couldn\'t（＝could not）。「〜できなかった」。',
    ],
    sections: [
      {
        heading: 'could と will be able to',
        body: `can は「〜できる」という現在の文にしか使えない。過去や未来を表したいときは、次のように形を変える。

■ 過去「〜できた」→ could
例）I could swim when I was five.（私は五歳のとき泳げた）
例）He couldn't come to the party.（彼はパーティーに来られなかった）

■ 未来「〜できるだろう」→ will be able to
助動詞は二つ並べられないので、× will can とは書けない。can と同じ意味を持つ be able to を借りてきて、will be able to とする。
例）You will be able to speak English well.（あなたは英語を上手に話せるようになるでしょう）

■ be able to の形
be able to は「be動詞＋able to＋動詞の原形」で、be動詞の部分が主語と時制に合わせて変化する。
現在：I am able to 〜 ／ He is able to 〜 ／ They are able to 〜
過去：I was able to 〜 ／ They were able to 〜
未来：I will be able to 〜（この be は原形のまま）

★ ポイント：can が使える場面ではふつう can を使う。be able to はもっぱら「助動詞が二つ並んでしまうとき」の助っ人として登場する、と考えておくとよい。`,
        figureId: 'lf_eigoext05_158',
      },
      {
        heading: 'could と was able to の使い分け',
        body: `どちらも「〜できた」と訳せるが、英検三級や上位校の入試では区別が問われることがある。

■ could ＝ もともとその力があった（能力・状態）
例）My grandfather could speak three languages.（祖父は三か国語を話せた）
例）I could read English books when I was ten.
「いつでもできる力を持っていた」という、幅のある過去を表す。

■ was / were able to ＝ その一回、実際にやりとげた
例）I was able to finish my homework before dinner.（私は夕食前に宿題を終えることができた）
例）He was able to catch the last train.（彼は最終電車に間に合った）
「がんばった結果、そのときうまくいった」という一回きりの出来事には was / were able to を使う。

■ 否定なら could でもよい
「できなかった」という否定では、一回きりの出来事でも couldn't が自然に使える。
例）I couldn't catch the last train.（最終電車に間に合わなかった）

⚠ 注意：「昨日は雨がやんだので、公園でサッカーができた」のような一回の出来事に could を使うと不自然になる。過去の文を英作するときは、「もともとの力の話か、その日一度だけの話か」を確かめるくせをつけたい。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは来年、上手に泳げるようになるでしょう。」を英語にしなさい。',
        wrongAnswer: 'You will can swim well next year.',
        trapExplanation: '「〜だろう」は will、「〜できる」は can と、日本語の意味を一つずつ英語に置きかえていくと、助動詞が二つ並んでしまうことに気づかない。',
        correctAnswer: 'You will be able to swim well next year.',
        correctExplanation:
          '助動詞は一つの文に二つ並べられない。will を残して can のほうを be able to に置きかえる。will のうしろは原形なので be able to の be はそのままの形。同じ理由で「〜しなければならないだろう」も × will must ではなく will have to となる。',
      },
      {
        question: '「私は昨日、その川を泳いでわたることができた。」を英語にしなさい。',
        wrongAnswer: 'I could swim across the river yesterday.',
        trapExplanation: '「できた」＝ can の過去形 could、と機械的に置きかえてしまう。could が「もともとその力があった」という意味に寄ることを知らないために起こる。',
        correctAnswer: 'I was able to swim across the river yesterday.',
        correctExplanation:
          '過去の一回きりの出来事を「実際にやりとげた」と言うときは was / were able to を使う。could は「五歳のときから泳げた」のように、力を持っていた状態を表すのに向いている。ただし否定文（couldn\'t）はどちらの場合にも使える。',
      },
    ],
  },

  {
    id: 'eigo_s159',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'can④：許可と依頼の can、can\'t の「はずがない」',
    description: 'Can I 〜? と Can you 〜? を区別し、会話で使う can の意味を正しくつかむ',
    order: 659,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'Can I 〜? ＝「（私が）〜してもいいですか」＝許可を求める言い方。',
      'Can you 〜? ＝「（あなたが）〜してくれますか」＝相手への依頼。',
      '主語が I か you かで意味がまったく変わるので、英作文では必ず確認する。',
      '承諾は Sure. / Of course. / All right. 、断るときは I\'m sorry, I can\'t.。',
      'can\'t には「〜のはずがない」という強い否定の推量の意味もある。',
    ],
    sections: [
      {
        heading: 'Can I 〜? と Can you 〜?',
        body: `can は「能力」だけでなく、会話では「許可」と「依頼」にも使われる。見分けるかぎは主語である。

■ Can I 〜?（私が〜してもいいですか）＝許可を求める
例）Can I use your dictionary?（辞書を使ってもいいですか）
例）Can I have some water?（お水をいただけますか）
自分が何かをしたいときの言い方。

■ Can you 〜?（〜してくれませんか）＝相手への依頼
例）Can you open the window?（窓を開けてくれませんか）
例）Can you help me with my homework?（宿題を手伝ってくれませんか）
相手に何かをしてもらいたいときの言い方。

■ 答え方
どちらにも次のように答える。
承諾：Sure. ／ Of course. ／ All right. ／ No problem.
断り：I'm sorry, I can't. ／ Sorry, but I'm busy now.
Yes, you can. とも言えるが、上から許可を出すひびきになることがあるので、会話では Sure. のほうがよく使われる。

★ ポイント：日本語の「〜していい？」と「〜してくれる？」はどちらも短いので混同しやすい。英語では「するのはだれか」を主語がはっきり示す、と意識する。`,
      },
      {
        heading: 'can\'t ＝「〜のはずがない」',
        body: `can't は「〜できない」のほかに、「〜のはずがない」という強い打ち消しの推量を表すことがある。上位校や英検三級で問われる用法である。

例）It can't be true.（それが本当のはずがない）
例）He can't be at home. His bike isn't here.（彼が家にいるはずがない。自転車がないもの）
例）That can't be Ken. He is in Osaka today.

■ 「〜にちがいない」の反対語として覚える
must be 〜（〜にちがいない） ⇔ can't be 〜（〜のはずがない）
この二つは対になっている。「〜でないにちがいない」と言いたくて must not be としてしまうまちがいが非常に多い。must not は「してはいけない」という禁止の意味になってしまう。

■ 見分け方
うしろが be や動詞の原形でも、文の内容が「能力」ではなく「そんなことはありえない」という判断であれば推量の can't である。
例）She can't be twenty.（彼女が二十歳のはずがない）＝ 能力の話ではない

⚠ 注意：Can it be true?（本当だろうか）のように、疑問文で「いったい〜だろうか」という驚きを表すこともある。訳すときは前後の文の内容から判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '「窓を開けてくれませんか。」を英語にしなさい。',
        wrongAnswer: 'Can I open the window?',
        trapExplanation: '日本語の「開けてくれませんか」には主語がないため、どちらが動作をするのかを意識せずに、覚えやすい Can I 〜? の形を選んでしまう。',
        correctAnswer: 'Can you open the window?',
        correctExplanation:
          '窓を開けるのは相手なので主語は you。Can I open the window? では「私が開けてもいいですか」となり、意味が正反対になる。「相手にしてもらう＝ you」「自分がする＝ I」と、動作をする人を先に決めてから英文を書く。',
      },
      {
        question: '次の英文を日本語にしなさい。「That story can\'t be true.」',
        wrongAnswer: 'その話は本当にすることができない。',
        trapExplanation: 'can\'t を「〜できない」と機械的に訳すため、be true（本当である）と結びついて意味の通らない日本語になってしまう。',
        correctAnswer: 'その話が本当のはずがない。',
        correctExplanation:
          'can\'t be 〜 は「〜のはずがない」という強い打ち消しの推量。反対に must be 〜 は「〜にちがいない」。訳して意味が通らないときは、能力の can ではなく推量の can\'t を疑う。',
      },
    ],
  },

  // ───────────────────── 2. may / might（s160〜s162） ─────────────────────
  {
    id: 'eigo_s160',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'may①：許可の may（May I 〜? と答え方）',
    description: 'ていねいに許可を求める May I 〜? の形と受け答えを、会話の場面ごとに身につける',
    order: 660,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'May I 〜? ＝「〜してもよろしいですか」。Can I 〜? よりていねい。',
      'may のうしろも動詞の原形（× May I to use 〜?）。',
      '承諾は Sure. / Of course. / Certainly.、断りは I\'m sorry, but 〜。',
      'May you 〜? という依頼の言い方はしない。相手に頼むときは Can / Will / Could you 〜?。',
      'May I help you? は店員の「いらっしゃいませ・何かお探しですか」の決まり文句。',
    ],
    sections: [
      {
        heading: 'ていねいに許可を求める May I 〜?',
        body: `may の第一の意味は「〜してもよい」という許可である。とくに疑問文の May I 〜? は、初対面の人や目上の人に何かを頼むときのていねいな言い方として、会話問題で頻出する。

例）May I come in?（入ってもよろしいですか）
例）May I use your phone?（電話をお借りしてもよろしいですか）
例）May I ask you a question?（質問してもよろしいですか）
例）May I take a picture here?（ここで写真をとってもよろしいですか）

■ 平叙文の may
例）You may go home now.（もう帰ってよろしい）
これは先生が生徒に言うような、上の立場から許可を与えるひびきになる。友達どうしでは使わない。

■ 答え方
承諾：Sure. ／ Of course. ／ Certainly. ／ Yes, please do.
断り：I'm sorry, but you can't. ／ I'm afraid not.
No, you may not. は「だめです」と強くはねつけるひびきになるので、ふつうは I'm sorry を付けてやわらげる。

★ ポイント：ていねいさの順は Can I 〜? ＜ May I 〜? ＜ Could I 〜? のイメージ。相手が友達なら Can I、店員さんや先生になら May I、と場面で選ぶ。`,
      },
      {
        heading: '会話で覚える決まり文句',
        body: `May I 〜? は会話文の並べかえ・応答選択でくり返し出題される。次の型は場面ごと丸ごと覚えてしまうのが速い。

■ 店で
店員：May I help you?（いらっしゃいませ。何かお探しですか）
客：Yes, please. I'm looking for a T-shirt.（はい。Tシャツを探しています）
客：No, thank you. I'm just looking.（いいえ、けっこうです。見ているだけです）

■ 電話で
May I speak to Ken, please?（ケンさんをお願いします）
— Speaking.（私です）
— Just a moment, please.（少々お待ちください）
— I'm sorry, he is out now.（すみません、いま出かけています）

■ 名前をたずねる
May I have your name, please?（お名前をうかがってもよろしいですか）

⚠ 注意：May I help you? を「私を手伝ってくれますか」と取りちがえる受験生が多い。動作をするのは I（店員）なので、「（私が）お手伝いしましょうか」という申し出である。「手伝ってくれますか」と頼むときは Can you help me? となる。`,
      },
    ],
    trapExamples: [
      {
        question: '店員に「私のかばんを運んでいただけますか」と頼む言い方として正しいものを書きなさい。',
        wrongAnswer: 'May you carry my bag?',
        trapExplanation: 'may は「ていねいな言い方」と覚えているため、相手に頼むときにも May you 〜? と主語だけ入れかえて使ってしまう。',
        correctAnswer: 'Could you carry my bag?（Can you 〜? / Will you 〜? も可）',
        correctExplanation:
          'May I 〜? は「私がしてもよいか」と許可を求める形で、May you 〜? という依頼の言い方は英語にはない。相手に何かをしてもらうときは Can you / Will you / Could you / Would you を使う。「許可の may は主語が I のときだけ」と覚えておく。',
      },
      {
        question: '店で店員に May I help you? と言われた。「いいえ、けっこうです。見ているだけです」と答えなさい。',
        wrongAnswer: "No, I don't. I see only.",
        trapExplanation: 'May I help you? を「あなたは私を手伝いますか」と読みちがえ、一般動詞の疑問文のつもりで No, I don\'t. と答えてしまう。',
        correctAnswer: "No, thank you. I'm just looking.",
        correctExplanation:
          'May I help you? は店員の決まり文句で「いらっしゃいませ、何かお探しですか」の意味。断るときは No, thank you.、用があるときは Yes, please. で受ける。「見ているだけです」は I\'m just looking. が決まった言い方である。',
      },
    ],
  },

  {
    id: 'eigo_s161',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'may②：推量の may / might（〜かもしれない）',
    description: 'may と might が表す「かもしれない」の意味と、確信の強さの違いをつかむ',
    order: 661,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'may ＝「〜かもしれない」。五分五分くらいの弱い推量。',
      'might は may よりさらに自信のない「ひょっとすると〜かもしれない」。',
      'might は形は may の過去形だが、意味は現在の弱い推量であることが多い。',
      '推量の may not ＝「〜しないかもしれない」。禁止の意味ではない。',
      '確信の強さは must ＞ will ＞ may ＞ might の順。',
    ],
    sections: [
      {
        heading: '「〜かもしれない」の may と might',
        body: `may には許可のほかに、もう一つ大切な意味がある。「〜かもしれない」という推量である。天気や人の予定など、はっきり分からないことを言うときに使う。

例）It may rain this afternoon.（午後は雨が降るかもしれない）
例）He may be sick.（彼は病気かもしれない）
例）She may know the answer.（彼女は答えを知っているかもしれない）

■ might はもっと自信がない
例）It might snow tonight.（今夜はひょっとすると雪が降るかもしれない）
例）He might be at home.（彼は家にいるかもしれない）
might は形の上では may の過去形だが、現在のことについて「may よりさらに自信がない」と言うのに使うことが多い。might を見て機械的に過去に訳さないよう気をつける。

■ 許可か推量かの見分け方
・May I 〜? のように主語が I の疑問文 → ほぼ許可
・It may rain. / He may be 〜. のように三人称が主語の平叙文 → ほぼ推量
文全体の意味を日本語にしてみて、「〜してもよい」と「〜かもしれない」のどちらが通じるかで決める。

★ ポイント：推量の may・might のうしろも当然、動詞の原形。be動詞なら is や are ではなく be になる（He may be busy.）。`,
        figureId: 'lf_eigoext05_161',
      },
      {
        heading: '推量の may not と否定の意味',
        body: `推量の may を否定にすると「〜しないかもしれない」となる。禁止の「〜してはいけない」ではないので注意する。

例）He may not come to school today.（彼は今日、学校に来ないかもしれない）
例）It may not be true.（それは本当ではないかもしれない）

■ 許可の may not は「してはいけない」
例）You may not use your phone here.（ここでは電話を使ってはいけません）
同じ may not でも、許可の意味で使えば禁止になる。主語と場面で判断する。

■ 確信の強さくらべ
He must be tired.（疲れているにちがいない）…ほぼ確実
He will be tired.（疲れているだろう）…かなり確か
He may be tired.（疲れているかもしれない）…五分五分
He might be tired.（ひょっとすると疲れているかもしれない）…自信なし
He can't be tired.（疲れているはずがない）…強く打ち消す

■ 書きかえの定番
It may rain tomorrow. ＝ Maybe it will rain tomorrow. ＝ Perhaps it will rain tomorrow.
副詞の maybe（たぶん）を使った文への書きかえは頻出。maybe は一語、may be（〜かもしれない）は二語なので、書き分けに注意する。

⚠ 注意：It maybe rain tomorrow. は誤り。maybe は副詞なので文の先頭に置き、うしろは will rain のようにふつうの文が続く。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。「Tom may not come to the party.」',
        wrongAnswer: 'トムはパーティーに来てはいけない。',
        trapExplanation: 'may を「〜してもよい」の意味だけで覚えていると、その否定 may not をすべて「〜してはいけない」という禁止だと思いこんでしまう。',
        correctAnswer: 'トムはパーティーに来ないかもしれない。',
        correctExplanation:
          '主語が三人称で、内容が「話し手にも分からないこと」なら推量の may。推量の否定 may not は「〜しないかもしれない」となる。禁止を表したいときは must not（〜してはいけない）を使うのがふつうである。',
      },
      {
        question: '次の英文を日本語にしなさい。「It might rain tomorrow.」',
        wrongAnswer: '昨日は雨が降ったかもしれない。',
        trapExplanation: 'might は may の過去形だと習うため、文全体を過去のことだと思いこんでしまう。tomorrow を見落とすと気づけない。',
        correctAnswer: '明日はひょっとすると雨が降るかもしれない。',
        correctExplanation:
          'might は形こそ may の過去形だが、現在や未来のことを「may よりも自信なく」述べるのに使うことが多い。tomorrow があるのだから過去の訳になるはずがない。時を表す語（yesterday / tomorrow / tonight）を先に確認するくせをつける。',
      },
    ],
  },

  {
    id: 'eigo_s162',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'may③：許可と推量の見分け方（may のまとめ）',
    description: 'may・might の二つの意味を場面から判断し、書きかえ問題にも対応できるようにする',
    order: 662,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'may の意味は「許可（〜してよい）」と「推量（〜かもしれない）」の二つだけ。',
      '主語が I の疑問文なら許可、三人称の平叙文なら推量と考えるのが基本。',
      '許可の may は can で、推量の may は maybe を使った文で言いかえられる。',
      'May I 〜? への答えは Sure. / Of course. / I\'m sorry, but 〜。',
      'マイナスの内容（病気・遅刻・雨）が続くときは推量であることが多い。',
    ],
    sections: [
      {
        heading: '二つの意味を場面で見分ける',
        body: `may には「許可」と「推量」の二つの意味がある。テストでは、どちらの意味かを答えさせたり、正しく訳させたりする問題が出る。次の手順で判断すれば迷わない。

■ 手順① 主語と文の形を見る
・May I 〜? / May we 〜? → 許可（〜してもよいですか）
・You may 〜. → 許可（〜してよろしい）
・He / She / It / They may 〜. → ほとんど推量（〜かもしれない）

■ 手順② 日本語にして通るほうを選ぶ
It may be cold tomorrow. を「明日は寒くてもよい」と訳しても意味が通らない。「明日は寒いかもしれない」なら通る。だから推量。

■ 手順③ 内容がマイナスなら推量を疑う
He may be sick.（病気かもしれない）／The train may be late.（電車は遅れるかもしれない）
「病気になってよい」「遅れてよい」と許可することはふつうないので、推量と判断できる。

★ ポイント：might には許可の意味がほとんどなく、ほぼ推量専用と考えてよい。might が出てきたら「ひょっとすると〜かもしれない」と訳せば当たる。`,
      },
      {
        heading: '書きかえと会話でのていねいさ',
        body: `may の二つの意味は、それぞれ別の表現で言いかえられる。書きかえ問題では、どちらの意味かを見分けてから直す必要がある。

■ 許可の may ⇔ can
May I use this computer? ＝ Can I use this computer?
You may go home. ＝ You can go home.
※ていねいさは may のほうが上。

■ 推量の may ⇔ maybe / perhaps ＋ will
She may come tomorrow. ＝ Maybe she will come tomorrow.
It may be sunny. ＝ Perhaps it will be sunny.
※maybe は一語の副詞で「たぶん」。may be（助動詞＋be）と混同しないこと。

■ ていねいさの階段（許可を求める言い方）
Can I 〜?（友達に）＜ May I 〜?（目上の人に）＜ Could I 〜?（さらにていねい）
どれも答え方は同じで、Sure. / Of course. / I'm sorry, but 〜。

■ 会話でよく出るやりとり
A: May I sit here?（ここにすわってもよろしいですか）
B: Sure. Go ahead.（どうぞ）
A: May I take this seat?
B: I'm sorry, but my friend is coming.（すみません、友達が来るので）

⚠ 注意：Maybe を文の途中に入れて × It will maybe rain. とするのは不自然。Maybe it will rain. と文頭に置く形で覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文とほぼ同じ意味になるように（　）に入る語を書きなさい。「She may be late.」＝「（　）she will be late.」',
        wrongAnswer: 'May',
        trapExplanation: 'may をそのまま前に移せばよいと考えてしまう。maybe（副詞・一語）と may be（助動詞＋動詞・二語）の区別がついていない。',
        correctAnswer: 'Maybe（Perhaps でもよい）',
        correctExplanation:
          '推量の may は「maybe ＋ ふつうの文」で言いかえられる。maybe は「たぶん」という意味の副詞で一語。空所のあとに she will be late と完全な文が続いているので、助動詞ではなく副詞が入ると判断できる。',
      },
      {
        question: '次の may と同じ意味・用法の may を含む文を、ア〜ウから選びなさい。「You may use my bike.」　ア It may be cold. イ May I come in? ウ He may not know it.',
        wrongAnswer: 'ウ',
        trapExplanation: 'not の有無や主語の形だけを見て「似ている文」を選んでしまい、意味が許可か推量かという肝心の点を確かめていない。',
        correctAnswer: 'イ',
        correctExplanation:
          '問題文の You may use my bike. は「私の自転車を使ってよい」という許可。同じ許可の用法はイの May I come in?（入ってもよろしいですか）。アとウはどちらも「〜かもしれない」という推量である。まず日本語に直して意味で分類する。',
      },
    ],
  },
  // ───────────────────── 3. must / have to（s163〜s167） ─────────────────────
  {
    id: 'eigo_s163',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'must①：「〜しなければならない」の文',
    description: 'must の肯定文・否定文・疑問文の形をおさえ、強い義務を表す使い方を理解する',
    order: 663,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'must ＝「〜しなければならない」。話し手の強い気持ちがこもった義務。',
      'must のうしろも動詞の原形。三単現の s も to も付けない。',
      '疑問文は Must ＋ 主語 ＋ 原形 〜?。Do は使わない。',
      'must には過去形・未来形がないので、had to / will have to で補う。',
      'must not は「〜してはいけない」という禁止。',
    ],
    sections: [
      {
        heading: 'must の形と意味',
        body: `must は「〜しなければならない」という強い義務を表す助動詞である。規則で決まっていることや、話し手が「絶対にそうすべきだ」と思っていることに使う。

■ 肯定文
例）You must wash your hands before dinner.（夕食の前に手を洗いなさい）
例）We must be quiet in the library.（図書館では静かにしなければならない）
例）She must study hard for the test.
主語が she でも must に s は付かず、うしろの動詞も原形のままである。

■ 否定文（禁止）
例）You must not run here.（ここで走ってはいけません）
短縮形は mustn't。「〜しなくてよい」ではなく「〜してはいけない」という強い禁止になる点が最大のポイントで、次のセッションで詳しく学ぶ。

■ 疑問文
例）Must I go now?（もう行かなければなりませんか）
— Yes, you must. ／ No, you don't have to.（いいえ、その必要はありません）
答えの No のほうが独特で、No, you mustn't. とすると「行ってはいけない」という別の意味になってしまう。

★ ポイント：must は形が一つしかない。s も付かず、過去形も未来形もない。「変わらない代わりに、意味が強い」と覚える。`,
      },
      {
        heading: 'must が使えない場面',
        body: `must は便利だが弱点がある。過去形と未来形を持たないことである。

■ 過去「〜しなければならなかった」→ had to
例）I had to walk home yesterday.（昨日は歩いて帰らなければならなかった）
× I must walk home yesterday. とは書けない。

■ 未来「〜しなければならないだろう」→ will have to
例）You will have to get up early tomorrow.
助動詞は二つ並べられないので × will must は誤り。

■ ていねいさ・かたさ
must は命令に近い強さがあるので、目上の人や初対面の人に向かって You must 〜. と言うときつく響く。日常会話では have to や should を使うほうが自然な場面が多い。

■ must と have to の意味の差
・You must finish it today.（話し手が「今日中にやれ」と強く思っている）
・You have to finish it today.（規則や事情でそうなっている）
中学受験のレベルではほぼ同じ意味として書きかえに使われるが、この差を知っておくと英文の調子が読みとりやすくなる。

⚠ 注意：must のうしろに to を入れて × You must to go. とするまちがいが非常に多い。have to の to につられるためである。「to が付くのは have to のほうだけ」と唱えて覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは今日、宿題を終えなければなりません。」を英語にしなさい。',
        wrongAnswer: 'You must to finish your homework today.',
        trapExplanation: '同じ意味の have to に to が入っているため、must のうしろにも to が必要だと思いこんでしまう。',
        correctAnswer: 'You must finish your homework today.',
        correctExplanation:
          'must は助動詞なので、うしろは to のない動詞の原形。to が付くのは have to / be able to のように「動詞のかたまり」で助動詞の代わりをする表現のほうである。must ＋ 原形、have to ＋ 原形（to は have にくっついている）と整理する。',
      },
      {
        question: '「私は昨日、早く起きなければなりませんでした。」を英語にしなさい。',
        wrongAnswer: 'I must got up early yesterday.',
        trapExplanation: 'must には過去形がないことを知らないため、うしろの動詞を過去形にして過去を表そうとしてしまう。助動詞のあとは原形という基本もくずれている。',
        correctAnswer: 'I had to get up early yesterday.',
        correctExplanation:
          'must は現在の文にしか使えない。過去は have to の過去形 had to を使って表す。うしろは当然 get のままの原形。未来なら will have to、否定の過去なら didn\'t have to（〜する必要がなかった）となる。',
      },
    ],
  },

  {
    id: 'eigo_s164',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'have to①：形と疑問文・否定文（do を使う）',
    description: 'have to は一般動詞の仲間なので、疑問文・否定文に do / does が必要なことを理解する',
    order: 664,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'have to ＋ 動詞の原形 ＝「〜しなければならない」。',
      '主語が三人称単数のときは has to になる。',
      '疑問文は Do / Does ＋ 主語 ＋ have to 〜?。must とは作り方がちがう。',
      '否定文は don\'t / doesn\'t have to ＝「〜しなくてよい」。',
      '答えは Yes, 主語 do(does). / No, 主語 don\'t(doesn\'t). となる。',
    ],
    sections: [
      {
        heading: 'have to は一般動詞の仲間',
        body: `have to は must とほぼ同じ意味だが、文の作り方はまったくちがう。have to の have は一般動詞なので、疑問文・否定文には do / does の助けが必要になる。

■ 肯定文
例）I have to clean my room.（部屋をそうじしなければならない）
例）He has to help his mother.（彼はお母さんを手伝わなければならない）
主語が he / she / it のときは has to になる。ここが助動詞 must との大きなちがいで、must は主語が何でも must のままだった。

■ 疑問文
例）Do you have to go now?（もう行かなければなりませんか）
例）Does she have to wear a uniform?（彼女は制服を着なければなりませんか）
— Yes, she does. ／ No, she doesn't.
Does のうしろは has ではなく have to に戻る点にも注意する。

■ 否定文
例）I don't have to get up early on Sunday.（日曜日は早く起きなくてよい）
例）He doesn't have to come today.

★ ポイント：must は「助動詞グループ」、have to は「一般動詞グループ」。同じ意味なのに文の作り方が別々なので、意味だけでつないで覚えると必ず事故が起きる。`,
        figureId: 'lf_eigoext05_164',
      },
      {
        heading: 'must と have to の書きかえ',
        body: `入試では「ほぼ同じ意味の文にしなさい」という書きかえ問題で、must と have to がよく出る。肯定文どうしなら次のように置きかえられる。

■ 肯定文の書きかえ
I must go now. ＝ I have to go now.
She must study English. ＝ She has to study English.（三単現の has を忘れない）
We must be careful. ＝ We have to be careful.

■ 時制がある文
I had to study yesterday.（過去）
I will have to study tomorrow.（未来）
must には過去形も未来形もないので、これらは have to しか使えない。

■ 否定文は書きかえできない
You must not swim here.（泳いではいけない）
You don't have to swim here.（泳がなくてよい）
この二つは意味が正反対である。書きかえ問題で否定文が出たら、機械的に置きかえてはいけない。次のセッションで集中的に確認する。

■ 主語がかわるときの注意
Tom must practice every day. ＝ Tom has to practice every day.
must の文には三単現の s がなかったので、have to に直したときに has にし忘れる受験生が非常に多い。書きかえたら必ず主語を見直す。

⚠ 注意：Does he have to 〜? の答えを Yes, he must. とするのは不自然。聞かれた形（does）で受けて Yes, he does. と答える。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は毎日、犬を散歩させなければなりません。」を英語にしなさい。',
        wrongAnswer: 'He have to walk his dog every day.',
        trapExplanation: 'have to をひとかたまりの決まり文句として覚えているため、主語が三人称単数でも have のままにしてしまう。must には s が付かないという知識が悪い方向に働くこともある。',
        correctAnswer: 'He has to walk his dog every day.',
        correctExplanation:
          'have to の have は一般動詞なので、三人称単数現在では has to になる。助動詞 must なら He must walk 〜. と s は付かない。「must は変わらない／have to は変わる」と対にして覚える。',
      },
      {
        question: '「あなたは今日、学校へ行かなければなりませんか。」を英語にしなさい。',
        wrongAnswer: 'Have you to go to school today?',
        trapExplanation: 'be動詞や助動詞の疑問文と同じように、have を主語の前に出せばよいと考えてしまう。have to の have が一般動詞であることを見落としている。',
        correctAnswer: 'Do you have to go to school today?',
        correctExplanation:
          'have to の疑問文は Do / Does を文の先頭に置き、have to はそのままの位置に残す。三人称単数なら Does he have to 〜? となり、has ではなく have に戻ることにも注意する。答えは Yes, I do. / No, I don\'t.。',
      },
    ],
  },

  {
    id: 'eigo_s165',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'have to②：had to と will have to（時制の補い方）',
    description: 'must が持たない過去・未来を have to でどう表すかを、時を表す語とともに練習する',
    order: 665,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '過去「〜しなければならなかった」＝ had to ＋ 原形。',
      '過去の否定「〜する必要がなかった」＝ didn\'t have to ＋ 原形。',
      '未来「〜しなければならないだろう」＝ will have to ＋ 原形（× will must）。',
      '過去の疑問文は Did ＋ 主語 ＋ have to 〜?（had to にしない）。',
      'yesterday / last night / tomorrow など、時を表す語が時制を決める手がかりになる。',
    ],
    sections: [
      {
        heading: '過去の「〜しなければならなかった」',
        body: `must には過去形がない。過去のことを言うときは have to の過去形 had to を使う。

■ 肯定文
例）I had to stay home last Sunday.（この前の日曜は家にいなければならなかった）
例）She had to take care of her brother.（彼女は弟の世話をしなければならなかった）
had to は主語が何であっても had to のまま。三単現も関係ない。

■ 否定文
例）I didn't have to go to school yesterday.（昨日は学校へ行かなくてよかった）
「行かなければならなかった」の否定ではなく、「行く必要がなかった」という意味になる。

■ 疑問文
例）Did you have to walk home?（歩いて帰らなければならなかったの）
— Yes, I did. ／ No, I didn't.
Did を使ったので、うしろは had to ではなく have to に戻る。× Did you had to 〜? は誤り。

★ ポイント：時を表す語（yesterday・last week・then）があれば過去、tomorrow・next week があれば未来と判断できる。英作文でも和訳でも、まず時を表す語をさがす。`,
      },
      {
        heading: '未来の「〜しなければならないだろう」',
        body: `未来のことは will have to で表す。× will must とは言えない。助動詞を二つ並べられないという決まりを、ここでも思い出す。

■ 肯定文
例）You will have to wait for an hour.（一時間待たなければならないでしょう）
例）We will have to leave early tomorrow.
will のうしろは原形なので、have to の have はそのまま。has to にはならない。× He will has to go. は誤りで、He will have to go. が正しい。

■ 否定文
例）You won't have to pay for it.（それにお金をはらう必要はないでしょう）

■ 疑問文
例）Will I have to change trains?（電車を乗りかえなければなりませんか）
— Yes, you will. ／ No, you won't.

■ まとめ表（頭の中で作る）
現在：must ／ have to（has to）
過去：had to （must には過去形なし）
未来：will have to （must には未来形なし）
否定：must not（禁止）／ don't have to（不要）

⚠ 注意：「〜しなければならないでしょう」を書くとき、まず will を書いてから have to を続ける。will の直後に must や has to を書きたくなったら、助動詞のルール③を思い出すこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは明日、6時に起きなければならないでしょう。」を英語にしなさい。',
        wrongAnswer: 'We will must get up at six tomorrow.',
        trapExplanation: '「〜だろう」＝ will、「〜しなければならない」＝ must と一語ずつ置きかえてしまい、助動詞が二つ並んでいることに気づかない。',
        correctAnswer: 'We will have to get up at six tomorrow.',
        correctExplanation:
          '助動詞は一つの文に二つ並べられない。will を残し、must を have to に置きかえる。will のうしろは原形なので has to にはならない。同じ理由で「〜できるだろう」も will be able to となる。',
      },
      {
        question: '「あなたは昨日、部屋をそうじしなければならなかったのですか。」を英語にしなさい。',
        wrongAnswer: 'Did you had to clean your room yesterday?',
        trapExplanation: '過去の文だから had にする、という意識が強すぎて、Did をすでに使っていることを忘れてしまう。過去形が二か所に出てしまう典型的なミス。',
        correctAnswer: 'Did you have to clean your room yesterday?',
        correctExplanation:
          'Did が文の先頭に出た時点で、うしろの動詞は原形に戻る。したがって had to ではなく have to。一般動詞の過去の疑問文（Did you go 〜?）とまったく同じ仕組みである。答えは Yes, I did. / No, I didn\'t.。',
      },
    ],
  },

  {
    id: 'eigo_s166',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'must not と don\'t have to のちがい',
    description: '「してはいけない」と「しなくてよい」を混同しない。入試最頻出の対比を図で整理する',
    order: 666,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      'must not（mustn\'t）＝「〜してはいけない」＝強い禁止。',
      'don\'t have to ＝「〜しなくてよい・する必要がない」＝不要。',
      '二つは反対の意味なので、書きかえ問題で入れかえてはいけない。',
      'Must I 〜? への No の答えは No, you don\'t have to.（No, you mustn\'t. は別の意味）。',
      '禁止は Don\'t 〜. や You can\'t 〜. でも表せる。',
    ],
    sections: [
      {
        heading: '正反対になる二つの否定',
        body: `must と have to は肯定文ではほぼ同じ意味なのに、否定文になると意味が正反対になる。中学受験でも英検でも、ここがいちばんねらわれる。

■ must not ＝ してはいけない（禁止）
例）You must not swim in this river.（この川で泳いではいけません）
例）You mustn't tell anyone.（だれにも言ってはいけないよ）
「絶対にするな」という強い禁止で、標識や校則にも使われる。

■ don't have to ＝ しなくてよい（不要）
例）You don't have to come tomorrow.（明日は来なくてよいですよ）
例）He doesn't have to wear a tie.（彼はネクタイをしめる必要がない）
「してもよいが、その必要はない」という意味。するかしないかは相手の自由である。

■ ならべて確認
You must not eat here.（ここで食べてはいけない）
You don't have to eat here.（ここで食べなくてもよい）
たった数語のちがいで、店の看板なら意味が正反対になってしまう。

★ ポイント：must not の not は「動作そのもの」を打ち消し、don't have to の not は「しなければならないという義務」を打ち消している。何を打ち消しているのかを考えると混乱しない。`,
        figureId: 'lf_eigoext05_166',
      },
      {
        heading: '答え方と言いかえ',
        body: `Must I 〜? と聞かれたときの答えは、この単元でいちばんまちがえやすい。

■ Must I 〜? への答え
Must I go now?（もう行かなければなりませんか）
— Yes, you must.（はい、行かなければなりません）
— No, you don't have to.（いいえ、その必要はありません）
No, you mustn't. と答えると「いいえ、行ってはいけません」という別の意味になってしまう。「Must の No は don't have to」と型で覚える。

■ 禁止のいろいろな言い方
You must not run here.
＝ Don't run here.（命令文）
＝ You can't run here.（ここでは走れません＝走ってはいけません）
掲示では No running. のような書き方も使われる。

■ 不要のいろいろな言い方
You don't have to hurry.
＝ You need not hurry.（急ぐ必要はない）
＝ There is no need to hurry.
need not は少しかたい言い方だが、英検三級の書きかえで見かける。

■ 過去の「しなくてよかった」
I didn't have to work last Sunday.（先週の日曜は働かなくてよかった）

⚠ 注意：和訳問題で don't have to を「してはいけない」と書くと、正解にはならない。逆に must not を「しなくてよい」と書いても同じ。訳を書き終えたら、「禁止か、不要か」を必ず読み返して確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは明日、ここへ来なくてもよいです。」を英語にしなさい。',
        wrongAnswer: "You must not come here tomorrow.",
        trapExplanation: '「〜しなくてよい」を「〜しない」＋「must（〜しなければならない）の否定」と考えてしまい、must not を選んでしまう。日本語の「〜なくてよい」と「〜てはいけない」の差が英語では大きい。',
        correctAnswer: "You don't have to come here tomorrow.",
        correctExplanation:
          'must not は「してはいけない」という禁止で、意味が正反対になってしまう。「しなくてよい・する必要がない」は don\'t have to。主語が三人称単数なら doesn\'t have to、過去なら didn\'t have to を使う。',
      },
      {
        question: '次の英文を日本語にしなさい。「You don\'t have to answer this question.」',
        wrongAnswer: 'あなたはこの質問に答えてはいけません。',
        trapExplanation: 'have to ＝「しなければならない」と覚えているので、その否定は「してはいけない」だと思ってしまう。否定が義務のほうにかかっていることに気づいていない。',
        correctAnswer: 'あなたはこの質問に答えなくてもよい（答える必要はない）。',
        correctExplanation:
          'don\'t have to は「その義務がない」＝「しなくてよい」。答えるかどうかは自由である。「答えてはいけない」と禁止するなら You must not answer this question. となる。not が何を打ち消しているかを考えるのがこつ。',
      },
    ],
  },

  {
    id: 'eigo_s167',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'must②：推量の must（〜にちがいない）と助動詞マップ',
    description: '「〜にちがいない」の must を理解し、助動詞を推量の強さと義務の強さで整理する',
    order: 667,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      'must には「〜にちがいない」という強い推量の意味もある。',
      'must be 〜（〜にちがいない） ⇔ can\'t be 〜（〜のはずがない）が対になる。',
      '推量の must の否定に must not は使わない。',
      '義務か推量かは、うしろが動作か状態かと、文の内容で見分ける。',
      '助動詞は「推量の強さ」と「義務の強さ」の二つの顔を持つ。',
    ],
    sections: [
      {
        heading: '「〜にちがいない」の must',
        body: `must は「〜しなければならない」だけでなく、「〜にちがいない」という強い推量も表す。話し手が状況から見て「そうとしか考えられない」と判断しているときに使う。

例）You must be tired.（あなたは疲れているにちがいない）
例）He must be sick. He didn't come today.（彼は病気にちがいない。今日来なかったから）
例）That must be Ken's bike.（あれはケンの自転車にちがいない）

■ 義務か推量かの見分け方
・うしろが be動詞や know / like など「状態を表す語」→ 推量が多い
　You must be hungry.（おなかがすいているにちがいない）
・うしろが go / study / clean など「動作を表す語」→ 義務が多い
　You must study hard.（一生懸命勉強しなければならない）
ただし決め手は文の内容である。「疲れなければならない」と訳して意味が通らなければ推量である。

■ 反対の意味は can't
must be 〜（〜にちがいない） ⇔ can't be 〜（〜のはずがない）
例）He must be at home. ⇔ He can't be at home.
推量を打ち消すのに must not は使わない。must not は「してはいけない」という禁止だからである。

★ ポイント：must be と can't be はセットで覚える。「ちがいない」「はずがない」という日本語も、対にして口に出しておくとよい。`,
      },
      {
        heading: '助動詞を二つの軸で整理する',
        body: `ここまでに出てきた助動詞は、どれも「推量（どのくらい確かか）」と「義務・許可（どのくらい強くうながすか）」という二つの顔を持っている。二つの軸で位置づけると、全体像がつかめる。

■ 推量の軸（〜だろう）
must（にちがいない）＞ will（だろう）＞ may（かもしれない）＞ might（ひょっとすると）
打ち消し側：can't（はずがない）

■ 義務・許可の軸（〜すべきだ）
must（しなければならない）＞ have to（しなければならない）＞ should（したほうがよい）＞ may / can（してもよい）
打ち消し側：must not（してはいけない）

■ 同じ語が両方にあらわれる
must：右上（強い推量・強い義務）
should：まん中（たぶん〜だろう・したほうがよい）
may：弱い推量・軽い許可
might：いちばん弱い推量。義務の意味はほぼない

■ 実際の文で確かめる
You must be careful.（気をつけなければならない）＝義務
You must be Tom's sister.（トムのお姉さんにちがいない）＝推量
同じ must be でも、うしろが careful（気をつける）なら義務、Tom's sister（人の正体）なら推量になる。

⚠ 注意：選択問題では「意味の強さ」で正解が決まることがある。「たぶん〜だろう」と書いてあれば may、「ぜったい〜にちがいない」なら must、と日本語の強さに合わせて選ぶ。`,
        figureId: 'lf_eigoext05_167',
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。「You must be very tired.」',
        wrongAnswer: 'あなたはとても疲れなければなりません。',
        trapExplanation: 'must ＝「〜しなければならない」と一つの意味しか覚えていないため、be tired と結びつけて意味の通らない訳を作ってしまう。',
        correctAnswer: 'あなたはとても疲れているにちがいありません。',
        correctExplanation:
          'must には「〜にちがいない」という推量の意味がある。うしろが be tired のような状態を表す語で、しかも「疲れる義務」など存在しないのだから、推量と判断できる。訳して意味が通らないときは、もう一つの意味を思い出す。',
      },
      {
        question: '「彼がうそをついているはずがない。」を英語にしなさい。',
        wrongAnswer: "He must not be telling a lie.",
        trapExplanation: '「〜にちがいない」が must be なので、その反対は must not be だと考えてしまう。must not が禁止の意味になることを忘れている。',
        correctAnswer: "He can't be telling a lie.（He can't be a liar. なども可）",
        correctExplanation:
          '推量の must be を打ち消すのは can\'t be（〜のはずがない）である。must not be としてしまうと「うそをついてはいけない」という禁止の意味になってしまう。must be ⇔ can\'t be の対を、はじめから一組にして覚えておく。',
      },
    ],
  },

  // ───────────────────── 4. should / had better（s168〜s170） ─────────────────────
  {
    id: 'eigo_s168',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'should①：「〜すべきだ・したほうがよい」',
    description: 'should の肯定・否定・疑問の形を身につけ、助言する文を書けるようにする',
    order: 668,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'should ＝「〜すべきだ・〜したほうがよい」。must より弱い、やわらかい助言。',
      'should のうしろも動詞の原形。to は付けない。',
      '否定は should not（shouldn\'t）＝「〜しないほうがよい」。',
      '疑問文は Should I 〜?（〜したほうがよいですか）。',
      '疑問詞といっしょのときは「疑問詞＋should＋主語＋原形」の語順。',
    ],
    sections: [
      {
        heading: 'should の形と使い方',
        body: `should は相手に「〜したほうがいいよ」とすすめたり、「〜すべきだ」と軽く義務を示したりする助動詞である。must ほど強くないので、友達にも先生にも使いやすい。

■ 肯定文
例）You should see a doctor.（お医者さんに行ったほうがいいよ）
例）You should take an umbrella. It may rain.（かさを持っていったほうがいい。雨が降るかもしれない）
例）We should help each other.（私たちはたがいに助け合うべきだ）

■ 否定文
例）You shouldn't eat too much.（食べすぎないほうがいい）
例）You should not go out today.
「〜しないほうがよい」という、やわらかい打ち消しになる。must not（絶対にするな）ほど強くない。

■ 疑問文
例）Should I bring my lunch?（お弁当を持っていったほうがいいですか）
— Yes, you should. ／ No, you don't have to.（その必要はありません）
— No, you shouldn't.（やめたほうがいい）

★ ポイント：should も助動詞なので、三単現の s も付かず、to も付かない。He should goes. も He should to go. も誤りで、He should go. が正しい。`,
      },
      {
        heading: '疑問詞といっしょに使う should',
        body: `会話では「何をしたらいいですか」「どこへ行けばいいですか」と相談する場面が多い。このとき should がよく使われる。

■ 語順：疑問詞 ＋ should ＋ 主語 ＋ 動詞の原形 〜?
例）What should I do?（私はどうしたらよいですか）
例）Where should we meet?（どこで待ち合わせましょうか）
例）When should I call you?（いつ電話したらよいですか）
例）Which bus should I take?（どのバスに乗ればよいですか）

日本語では「私は何をすべきですか」と主語が先に来るので、× What I should do? と書いてしまう受験生が多い。疑問詞のすぐうしろに助動詞、その次に主語、と順番を固定して覚える。

■ 助言を表す他の言い方
You should go to bed early.
＝ You had better go to bed early.（もっと強い。次のセッションで学ぶ）
＝ Why don't you go to bed early?（早く寝たらどう？）
＝ How about going to bed early?（早く寝るのはどう？）

■ 会話でよく出るやりとり
A: I have a headache.（頭が痛いんだ）
B: You should go home and rest.（家に帰って休んだほうがいいよ）
A: Thank you. I will.（ありがとう。そうするよ）

⚠ 注意：Should I 〜? の答えで No, you shouldn't.（やめたほうがいい）と No, you don't have to.（その必要はない）は意味がちがう。相手の質問の内容に合うほうを選ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは医者に診てもらったほうがいいですよ。」を英語にしなさい。',
        wrongAnswer: 'You should to see a doctor.',
        trapExplanation: '「〜したほうがよい」という日本語からは「〜すること」という感じを受けるため、to 不定詞を続けたくなる。have to や want to の形にもつられる。',
        correctAnswer: 'You should see a doctor.',
        correctExplanation:
          'should は助動詞なので、うしろは to のない動詞の原形。can・may・must・will・should はすべて同じ決まりである。to が付くのは have to / be able to / want to のように、動詞や形容詞のあとに to が来る形だけ。',
      },
      {
        question: '「私は何をしたらよいですか。」を英語にしなさい。',
        wrongAnswer: 'What I should do?',
        trapExplanation: '日本語が「私は—何を—したらよいか」の順なので、そのまま主語を先に置いてしまう。疑問詞を前に出したあとの語順が身についていない。',
        correctAnswer: 'What should I do?',
        correctExplanation:
          '疑問詞のある助動詞の疑問文は「疑問詞＋助動詞＋主語＋動詞の原形」の順。What should I do? / Where should we go? / When can you come? はすべて同じ形である。日本語の語順につられないよう、型ごと声に出して覚える。',
      },
    ],
  },

  {
    id: 'eigo_s169',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'had better：強い助言と警告',
    description: 'had better の形と、should より強いというひびきの差を理解して使い分ける',
    order: 669,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'had better ＋ 動詞の原形 ＝「〜したほうがよい」。should より強い。',
      '否定は had better not ＋ 原形。not の位置に注意（× had not better）。',
      'had と書くが過去の意味ではない。短縮形は You\'d better 〜。',
      '「そうしないと困ったことになる」という警告のひびきがある。',
      '目上の人に向かって使うと失礼になるので、そのときは should を使う。',
    ],
    sections: [
      {
        heading: 'had better の形',
        body: `had better は二語で一つの助動詞のようにはたらき、「〜したほうがよい」という強めの助言を表す。

■ 肯定文
例）You had better take an umbrella.（かさを持っていったほうがいい）
例）You'd better hurry.（急いだほうがいい）
短縮形は You'd better / He'd better のように、主語のあとに 'd を付ける。

■ うしろは原形
had と書いてあっても過去の意味ではなく、うしろの動詞は必ず原形である。
× You had better to go. ／ × You had better went. はどちらも誤り。

■ 否定文
例）You had better not go out today.（今日は出かけないほうがいい）
例）You'd better not tell him.（彼には言わないほうがいい）
not は better のうしろに置く。× You had not better go. は誤りで、ここが試験でよくねらわれる。

■ 主語がかわっても形は同じ
I had better / You had better / He had better / They had better
had が has や have に変わることはない。

★ ポイント：「had better ＋ 原形」「had better not ＋ 原形」の二つの型を、そのまま音で覚えてしまうのが確実である。`,
      },
      {
        heading: 'should との強さのちがい',
        body: `had better と should はどちらも「〜したほうがよい」と訳せるが、ひびきの強さがちがう。

■ should ＝ やわらかい助言
You should go to bed early.（早く寝たほうがいいよ）
相手のためを思ったアドバイス。だれに向かって使ってもよい。

■ had better ＝ 強い助言・警告
You had better go to bed early.（早く寝たほうがいい。でないと明日つらいよ）
「そうしないとまずいことになる」という警告がふくまれる。親が子どもに、あるいは友達どうしで使う言い方で、先生や目上の人に向かって使うと「そうしないとどうなっても知らないぞ」と聞こえてしまい失礼になる。

■ 強さの順
Don't be late.（命令）＞ You must not be late.（禁止）＞ You had better not be late.（強い助言）＞ You shouldn't be late.（助言）＞ You may not want to be late.（かなり遠回し）

■ 目上の人に助言するとき
先生に「早く帰られたほうがいいですよ」と言いたいときは、had better ではなく
I think you should go home early. や Why don't you go home early? を使う。

⚠ 注意：had better を「〜したほうがよい」という和訳だけで覚えていると、丁寧語のつもりで目上の人に使ってしまう。英作文の場面設定（相手はだれか）を必ず確認する。`,
        figureId: 'lf_eigoext05_169',
      },
    ],
    trapExamples: [
      {
        question: '「今日は出かけないほうがいいよ。」を英語にしなさい。',
        wrongAnswer: "You had not better go out today.",
        trapExplanation: '助動詞の否定は助動詞のすぐうしろに not を置く、という規則にひきずられ、had のうしろに not を入れてしまう。',
        correctAnswer: "You had better not go out today.",
        correctExplanation:
          'had better は二語でひとかたまりなので、not はそのかたまりのうしろ、つまり better の直後に置く。「had better not ＋ 動詞の原形」と型で覚える。短縮形なら You\'d better not go out today.。',
      },
      {
        question: '先生に「もう遅いので、早くお帰りになったほうがいいですよ」と伝えたい。適切な英文はどちらか。ア You had better go home early. イ I think you should go home early.',
        wrongAnswer: 'ア',
        trapExplanation: 'had better を「〜したほうがよい」というていねいな助言だと思いこんでいるため、目上の人にこそ使うべき表現だと勘ちがいしてしまう。',
        correctAnswer: 'イ',
        correctExplanation:
          'had better には「そうしないと困ったことになるぞ」という警告のひびきがあり、目上の人に向けて使うと失礼になる。先生に助言するときは I think you should 〜. や Why don\'t you 〜? のようにやわらかい言い方を選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s170',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'should②：助言・提案の表現を使い分ける',
    description: 'Why don\'t you 〜? / How about 〜ing? など、助言と提案の言い方をまとめて整理する',
    order: 670,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'Why don\'t you 〜? ＝「〜したらどうですか」という提案。理由をたずねる文ではない。',
      'How about 〜? のうしろは名詞か動詞の -ing 形（× How about to go）。',
      'Why don\'t we 〜? ＝ Shall we 〜? ＝ Let\'s 〜.（いっしょにしよう）。',
      'I think you should 〜. はやわらかく助言する言い方。',
      '提案への返事は That\'s a good idea. / Sounds good. / Sorry, I can\'t.。',
    ],
    sections: [
      {
        heading: '助言・提案の代表的な言い方',
        body: `相手に何かをすすめる言い方は、会話問題でくり返し出題される。意味の近い表現をまとめて覚えておくと、書きかえにも応答選択にも強くなる。

■ You should 〜.（〜したほうがいい）
例）You should try this cake.（このケーキを食べてみるといいよ）

■ Why don't you 〜?（〜したらどうですか）
例）Why don't you ask your teacher?（先生に聞いてみたらどう）
形は否定疑問文だが、「なぜ〜しないのですか」と理由をたずねているのではなく、提案の決まり文句である。

■ How about 〜?（〜はどうですか）
例）How about this one?（こちらはいかがですか）＝うしろは名詞
例）How about going to the movies?（映画に行くのはどう）＝うしろは動名詞
about は前置詞なので、動詞を続けるときは必ず -ing 形にする。× How about to go は誤り。

■ Why don't we 〜? / Shall we 〜? / Let's 〜.（いっしょに〜しよう）
例）Why don't we play tennis? ＝ Shall we play tennis? ＝ Let's play tennis.
you なら「あなたが」、we なら「いっしょに」と、主語で相手の受け取り方が変わる。

★ ポイント：Why don't you 〜? は「あなたへの提案」、Why don't we 〜? は「いっしょにやろう」という誘い。you と we を読み分ける。`,
      },
      {
        heading: '提案への答え方',
        body: `提案されたときの返事も、決まった言い方を覚えておけばそのまま得点になる。

■ 賛成するとき
That's a good idea.（いい考えですね）
Sounds good. ／ That sounds nice.（よさそうですね）
Yes, let's.（そうしましょう）※Let's 〜. や Shall we 〜? に対して
Sure. ／ Of course. ／ All right.（いいですよ）

■ 断るとき
I'm sorry, I can't.（すみません、できません）
Sorry, but I have to help my mother.（ごめんなさい、母を手伝わないといけないので）
Maybe next time.（また今度ね）
断るときは、理由を一言そえるのが自然である。

■ 会話の流れの例
A: I have a bad cold.（ひどいかぜをひいてしまって）
B: Why don't you go home and rest?（家に帰って休んだらどう）
A: That's a good idea. Thank you.（それはいい考えだね。ありがとう）

A: How about going to the park after school?（放課後、公園に行くのはどう）
B: Sounds good. Let's meet at the gate.（いいね。門のところで待ち合わせよう）

⚠ 注意：Why don't you 〜? に対して「Because 〜」と理由を答えるのは誤り。提案なので、Sure. や That's a good idea. のように賛成・不賛成で答える。`,
      },
    ],
    trapExamples: [
      {
        question: '「放課後、買い物に行くのはどうですか。」を英語にしなさい。',
        wrongAnswer: 'How about to go shopping after school?',
        trapExplanation: '「〜すること」を to 不定詞で表す形になじんでいるため、How about のうしろにも to go を置いてしまう。about が前置詞であることを意識していない。',
        correctAnswer: 'How about going shopping after school?',
        correctExplanation:
          'about は前置詞なので、うしろに動詞を続けるときは -ing 形（動名詞）にする。How about ＋ 名詞／動名詞、と型で覚える。同じ意味で Why don\'t we go shopping after school? や Let\'s go shopping after school. とも言える。',
      },
      {
        question: '次の英文を日本語にしなさい。「Why don\'t you come with us?」',
        wrongAnswer: 'あなたはなぜ私たちといっしょに来ないのですか。',
        trapExplanation: 'Why と don\'t が並んでいるため、理由をたずねる否定疑問文だと読んでしまう。会話の決まり文句であることを知らないと必ず引っかかる。',
        correctAnswer: '私たちといっしょに来ませんか（来たらどうですか）。',
        correctExplanation:
          'Why don\'t you 〜? は「〜したらどうですか」という提案・勧誘の決まり文句。答えるときも理由ではなく Sure. / That\'s a good idea. / Sorry, I can\'t. のように応じる。Why don\'t we 〜? なら「いっしょに〜しませんか」となる。',
      },
    ],
  },
  // ───────────────────── 5. will / would（s171〜s173） ─────────────────────
  {
    id: 'eigo_s171',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'will①：未来と意志（will と be going to）',
    description: 'will の形と意味をおさえ、be going to との使い分けまで理解する',
    order: 671,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'will ＋ 動詞の原形 ＝「〜するだろう・〜するつもりだ」。',
      '主語が三人称単数でも will のまま。うしろの動詞にも s を付けない。',
      '否定は will not ＝ won\'t。疑問文は Will ＋ 主語 ＋ 原形 〜?。',
      'be going to は前から決めていた予定、will はその場で決めた意志に使う。',
      '未来を表す語（tomorrow / next week / soon）といっしょに使うことが多い。',
    ],
    sections: [
      {
        heading: 'will の形',
        body: `will は未来のことを表す助動詞で、「〜するだろう」という予想と、「〜するつもりだ」という意志の二つの意味を持つ。

■ 肯定文
例）It will be sunny tomorrow.（明日は晴れるでしょう）＝予想
例）I will call you tonight.（今夜、電話するね）＝意志
例）He will be fifteen next month.（彼は来月十五歳になります）
主語が he でも will は変わらず、うしろの動詞も原形。× He wills come. も × He will comes. も誤り。

■ 否定文
例）I won't tell anyone.（だれにも言わないよ）
例）It won't rain this afternoon.
will not の短縮形は won't。will not をつなげて willn't とは書かない。

■ 疑問文
例）Will you be free tomorrow?（明日はひまですか）
— Yes, I will. ／ No, I won't.

■ 未来を表す語といっしょに
tomorrow（明日）・next week（来週）・next year（来年）・soon（まもなく）・someday（いつか）
これらの語があれば未来の文と判断してよい。

★ ポイント：短縮形 I'll / You'll / He'll / We'll / They'll は会話文で必ず出る。読めるだけでなく書けるようにしておく。`,
      },
      {
        heading: 'will と be going to',
        body: `未来を表す言い方には be going to もある。中学受験でも書きかえや選択で問われるので、使い分けの目安を持っておきたい。

■ be going to ＝ 前から決めていた予定
例）I am going to visit my grandmother next Sunday.（次の日曜に祖母を訪ねる予定です）
すでに計画してあることを言う。be動詞は主語に合わせて am / is / are と変わる。

■ will ＝ その場で決めた意志・単なる予想
例）A: The phone is ringing.（電話が鳴っているよ）
　　B: I'll get it.（ぼくが出るよ）＝今その場で決めた
例）I think it will rain tomorrow.（明日は雨だと思う）＝ただの予想

■ 形のちがい
be going to のうしろも動詞の原形である。
例）She is going to buy a new bag.
× She is going to buys 〜 は誤り。

■ 否定文・疑問文
例）I'm not going to go out today.
例）Are you going to play soccer? — Yes, I am. / No, I'm not.
be going to の疑問文は be動詞を前に出す。will の疑問文とは作り方がちがう。

⚠ 注意：時や条件を表す if / when のあとでは、未来のことでも現在形を使う。
例）If it is fine tomorrow, we will go on a picnic.（× If it will be fine 〜）
これは上位校でねらわれる決まりである。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の姉は来年、大阪に住むでしょう。」を英語にしなさい。',
        wrongAnswer: 'My sister will lives in Osaka next year.',
        trapExplanation: '主語が三人称単数なので動詞に s を付けるという習慣が働き、will のうしろの live にも s を付けてしまう。',
        correctAnswer: 'My sister will live in Osaka next year.',
        correctExplanation:
          '助動詞のうしろは必ず原形なので、三単現の s は付かない。will 自身も wills にはならない。三単現の s は「助動詞のない現在の文」だけのルールだと、can の課で学んだことをそのまま当てはめる。',
      },
      {
        question: '「私は今日の午後、買い物に行く予定です（前から決めていた）。」を英語にしなさい。',
        wrongAnswer: 'I will go shopping this afternoon.',
        trapExplanation: '「〜する予定です」という日本語をすべて will で表せると思ってしまう。前から決めていたのか、その場で決めたのかという区別を意識していない。',
        correctAnswer: 'I am going to go shopping this afternoon.',
        correctExplanation:
          '前もって決めてある予定は be going to で表すのが自然。will はその場で決めた意志や、単なる予想に使う。問題文に「前から決めていた」「〜する予定だ」とあれば be going to を選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s172',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'would①：would like to（ていねいな「〜したい」）',
    description: 'want の代わりに使う would like / would like to の形と会話での使い方を覚える',
    order: 672,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'would like ＋ 名詞 ＝「〜がほしいのですが」。want のていねいな言い方。',
      'would like to ＋ 動詞の原形 ＝「〜したいのですが」。',
      '短縮形は I\'d like 〜。主語が何でも would の形は変わらない。',
      'Would you like 〜? ＝「〜はいかがですか」とすすめる言い方。',
      'すすめられたときの返事は Yes, please. / No, thank you.。',
    ],
    sections: [
      {
        heading: 'would like と would like to',
        body: `want（〜がほしい・〜したい）は、そのまま使うと少し直接的でぶっきらぼうに聞こえることがある。店や初対面の人との会話では、would like を使うとていねいになる。

■ would like ＋ 名詞（〜がほしいのですが）
例）I would like a cup of tea.（紅茶を一杯いただきたいのですが）
例）I'd like this one, please.（これをください）
短縮形は I'd like。会話文ではほとんどこの形で出る。

■ would like to ＋ 動詞の原形（〜したいのですが）
例）I would like to go with you.（あなたといっしょに行きたいのですが）
例）I'd like to ask you a question.（質問したいのですが）
to のうしろは必ず原形。× I'd like to going は誤り。

■ 主語がかわっても形は同じ
He would like to see you.（彼はあなたに会いたがっています）
would は助動詞なので、三人称単数でも would のまま。

■ want との比較
I want some water.（水がほしい）…友達や家族に
I'd like some water.（お水をいただけますか）…店員や目上の人に
意味はほぼ同じで、ていねいさがちがう。

★ ポイント：would like ＝ want、would like to ＝ want to。この対応を覚えておけば、書きかえ問題は一瞬で解ける。`,
      },
      {
        heading: 'Would you like 〜? とその答え方',
        body: `相手に何かをすすめるときは Would you like 〜? を使う。レストランや家庭でのもてなしの場面として頻出する。

■ Would you like ＋ 名詞?（〜はいかがですか）
例）Would you like some tea?（お茶はいかがですか）
例）Would you like another piece of cake?（ケーキをもう一つどうぞ）

■ Would you like to ＋ 原形?（〜しませんか）
例）Would you like to come to my house?（うちに来ませんか）
例）Would you like to join us?（私たちに加わりませんか）

■ 答え方
Yes, please.（はい、お願いします）
No, thank you.（いいえ、けっこうです）
Yes, I'd love to.（ぜひ）※to のあとに動詞を続けない形で使う
すすめられたときに Yes, I do. や Yes, I want. と答えるのは誤りである。

■ ていねいな疑問文で使う some
ふつう疑問文では any を使うが、すすめる文では some を使う。
例）Would you like some coffee?（× any coffee）
これは「相手が yes と答えることを期待している」ときの決まりで、Would you like 〜? のほか How about some 〜? でも同じである。

⚠ 注意：Would you like to 〜?（〜しませんか）と Would you 〜?（〜してくれませんか）はまったく別の意味。like to があるかないかで、相手にすすめているのか、頼んでいるのかが変わる。`,
      },
    ],
    trapExamples: [
      {
        question: 'Would you like some tea? に「はい、お願いします」と答えなさい。',
        wrongAnswer: 'Yes, I want.',
        trapExplanation: 'would like ＝ want と覚えているため、答えにも want を使ってしまう。またすすめられたときの決まり文句を知らない。',
        correctAnswer: 'Yes, please.',
        correctExplanation:
          '何かをすすめられたときは Yes, please.（はい、お願いします）／ No, thank you.（いいえ、けっこうです）で答えるのが決まり。Yes, I want. は英語として不自然で、want を使うなら Yes, I want some tea. と目的語まで必要になる。',
      },
      {
        question: '店員に「この赤いシャツがほしいのですが」とていねいに伝える文を書きなさい。',
        wrongAnswer: 'I want this red shirt.',
        trapExplanation: '「ほしい」＝ want と直訳してしまう。文法としては誤りではないが、店員に対しては直接的でぶっきらぼうな言い方になる。',
        correctAnswer: "I'd like this red shirt.（I would like this red shirt.）",
        correctExplanation:
          '店や初対面の人との会話では、want の代わりに would like を使うとていねいになる。動詞を続けたいときは would like to ＋ 原形（I\'d like to try it on. 試着したいのですが）。会話文の問題では、場面に合うていねいさが問われる。',
      },
    ],
  },

  {
    id: 'eigo_s173',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'would②：Will you 〜? と Would you 〜?（依頼）',
    description: '相手にものを頼む言い方を、ていねいさの度合いとともに整理する',
    order: 673,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'Will you 〜? ＝「〜してくれますか」。Would you 〜? はそのていねい版。',
      'ていねいさは Will / Can ＜ Would / Could の順で強くなる。',
      '承諾は Sure. / All right. / Of course.、断りは I\'m sorry, I can\'t.。',
      'Would you 〜?（依頼）と Would you like to 〜?（勧誘）は別物。',
      '「私が〜しましょうか」は Shall I 〜? で、Will you 〜? ではない。',
    ],
    sections: [
      {
        heading: '依頼の Will you 〜? / Would you 〜?',
        body: `相手に何かをしてもらいたいときは、will や would を使って頼むことができる。

■ Will you 〜?（〜してくれませんか）
例）Will you open the window?（窓を開けてくれませんか）
例）Will you help me with my homework?（宿題を手伝ってくれませんか）
友達や家族に対して使うくだけた言い方。

■ Would you 〜?（〜していただけませんか）
例）Would you close the door?（ドアを閉めていただけませんか）
例）Would you say that again?（もう一度言っていただけませんか）
would は will のていねいな形で、目上の人や初対面の人に使う。

■ ていねいさの順
Will you 〜? ／ Can you 〜?（友達に）
Would you 〜? ／ Could you 〜?（目上の人に）
さらにていねいにしたいときは、文の終わりに please を付ける。
例）Would you help me, please?

■ 答え方
承諾：Sure. ／ All right. ／ OK. ／ Of course. ／ Certainly.
断り：I'm sorry, I can't. ／ Sorry, I'm busy now.
Yes, I will. と答えることもできるが、会話では Sure. のほうが自然に響く。

★ ポイント：頼まれごとを引き受ける返事は Sure. の一語で足りる。会話文の空所補充で最もよく問われる語である。`,
        figureId: 'lf_eigoext05_173',
      },
      {
        heading: 'まぎらわしい形の区別',
        body: `would を使う文は形が似ているため、意味を取りちがえやすい。次の三つをはっきり区別する。

■ Would you 〜?（依頼）
Would you open the window?（窓を開けていただけませんか）
→ 動作をするのは相手（you）。

■ Would you like 〜? / Would you like to 〜?（勧誘・すすめ）
Would you like some coffee?（コーヒーはいかがですか）
Would you like to open the window?（窓を開けたいですか＝開けてもよいですよ）
→ 相手の希望をたずねている。頼んでいるのではない。

■ Shall I 〜?（申し出）
Shall I open the window?（（私が）窓を開けましょうか）
→ 動作をするのは自分（I）。

三つとも窓を開ける話だが、開けるのがだれか、そして頼んでいるのか申し出ているのかがまったくちがう。英作文では「動作をするのはだれか」を先に決めるとまちがえない。

■ 会話の流れの例
A: It's hot in here. Would you open the window?（暑いですね。窓を開けていただけますか）
B: Sure. No problem.（もちろんです）

A: It's hot in here.（暑いですね）
B: Shall I open the window?（窓を開けましょうか）
A: Yes, please.（はい、お願いします）

⚠ 注意：Would you like to 〜? を「〜してくれませんか」と訳す誤りが非常に多い。like to があれば「〜したいですか・〜しませんか」と、相手の気持ちをたずねる文である。`,
      },
    ],
    trapExamples: [
      {
        question: '「（あなたの）かばんを持ちましょうか。」と申し出る文を英語にしなさい。',
        wrongAnswer: 'Will you carry my bag?',
        trapExplanation: '日本語の「〜しましょうか」に主語がないため、覚えている依頼の型をそのまま使ってしまう。Will you 〜? では「私のかばんを運んでくれませんか」と、相手に頼む文になってしまう。',
        correctAnswer: 'Shall I carry your bag?',
        correctExplanation:
          '運ぶのは自分なので主語は I。「（私が）〜しましょうか」という申し出は Shall I 〜? を使う。答えは Yes, please. / No, thank you.。相手に頼むなら Will you carry my bag? となり、意味が正反対になる。',
      },
      {
        question: '「このいすを運んでいただけませんか。」を英語にしなさい。',
        wrongAnswer: 'Would you like to carry this chair?',
        trapExplanation: 'Would you like 〜? をていねいな依頼の形として覚えているため、like to を付けたままにしてしまう。実際には「このいすを運びたいですか」と相手の希望をたずねる文になる。',
        correctAnswer: 'Would you carry this chair?（Could you carry this chair? も可）',
        correctExplanation:
          '依頼は Would you ＋ 動詞の原形 〜?。like to が入ると勧誘・希望をたずねる文に変わってしまう。Would you 〜?（していただけますか）と Would you like to 〜?（〜しませんか）を、形と意味の両方で区別する。',
      },
    ],
  },

  // ───────────────────── 6. shall / Let's（s174〜s176） ─────────────────────
  {
    id: 'eigo_s174',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Shall I 〜?：「（私が）〜しましょうか」の申し出',
    description: '自分が何かをしてあげると申し出る Shall I 〜? の形と答え方を身につける',
    order: 674,
    studyPeriod: '小6前半',
    targetLevel: 'kiso',
    keyPoints: [
      'Shall I ＋ 動詞の原形 〜? ＝「（私が）〜しましょうか」という申し出。',
      '答えは Yes, please.（お願いします）／ No, thank you.（けっこうです）。',
      'Shall I 〜? に Yes, let\'s. と答えるのは誤り。',
      '同じ意味で Do you want me to 〜? や Can I help you? も使う。',
      'Shall you 〜? という言い方はない。相手に頼むのは Will / Could you 〜?。',
    ],
    sections: [
      {
        heading: 'Shall I 〜? の形と場面',
        body: `Shall I 〜? は「（私が）〜しましょうか」と、自分から手助けを申し出る言い方である。困っている人を見かけたときの決まり文句として、会話問題で頻出する。

例）Shall I open the window?（窓を開けましょうか）
例）Shall I carry your bag?（かばんをお持ちしましょうか）
例）Shall I help you?（お手伝いしましょうか）
例）Shall I call a taxi for you?（タクシーを呼びましょうか）

■ うしろは動詞の原形
shall も助動詞なので、うしろは原形。× Shall I to help you? は誤り。

■ 答え方
Yes, please.（はい、お願いします）
No, thank you. I'm all right.（いいえ、けっこうです。だいじょうぶです）
Thank you. That's very kind of you.（ありがとうございます。ご親切に）
Shall I 〜? は自分がすることを申し出ているので、Yes, let's.（そうしましょう）とは答えない。let's は「いっしょにしよう」という意味だからである。

★ ポイント：Shall I 〜? は主語が I。「私が動く」と決まっているので、答えは「お願いします／けっこうです」になる。ここを取りちがえると会話問題を一問落とす。`,
      },
      {
        heading: '似た意味の言い方',
        body: `申し出の言い方はいくつかある。場面に応じて選べるようにしておく。

■ Shall I 〜?（〜しましょうか）
少しかたい、ていねいな申し出。

■ Can I help you? / May I help you?
店員がお客に「いらっしゃいませ、何かお探しですか」と声をかける定番。困っている人に「お手伝いしましょうか」と言うときにも使う。

■ Do you want me to 〜?（〜してほしいですか）
友達どうしのくだけた言い方。
例）Do you want me to help you?

■ Let me 〜.（〜させてください）
例）Let me help you.（お手伝いさせてください）

■ 会話の流れの例
A: This box is very heavy.（この箱、とても重いんです）
B: Shall I help you?（お手伝いしましょうか）
A: Yes, please. Thank you very much.（はい、お願いします。ありがとうございます）

A: Shall I turn on the light?（電気をつけましょうか）
B: No, thank you. It's still bright.（いいえ、けっこうです。まだ明るいので）

⚠ 注意：相手にしてもらいたいときに Shall you 〜? とは言わない。英語に Shall you 〜? という依頼の形は存在しないので、Will you 〜? / Can you 〜? / Could you 〜? を使う。`,
      },
    ],
    trapExamples: [
      {
        question: 'Shall I open the window? に「はい、お願いします」と答えなさい。',
        wrongAnswer: "Yes, let's.",
        trapExplanation: 'Shall で始まる疑問文の答えは Yes, let\'s. だと丸暗記しているため、Shall I と Shall we の区別をせずに答えてしまう。',
        correctAnswer: 'Yes, please.',
        correctExplanation:
          'Shall I 〜? は「（私が）〜しましょうか」という申し出なので、答えは Yes, please.（お願いします）／ No, thank you.（けっこうです）。Yes, let\'s. と答えるのは Shall we 〜?（いっしょに〜しましょうか）に対してである。',
      },
      {
        question: '「（あなたが）私を手伝ってくれませんか。」を英語にしなさい。',
        wrongAnswer: 'Shall you help me?',
        trapExplanation: 'Shall I 〜? を「手伝いましょうか」と覚えているため、主語だけ you に変えれば「手伝ってくれますか」になると考えてしまう。',
        correctAnswer: 'Will you help me?（Can you 〜? / Could you 〜? も可）',
        correctExplanation:
          '英語に Shall you 〜? という依頼の形はない。相手に何かを頼むときは Will you / Can you / Would you / Could you を使う。shall が使えるのは Shall I 〜?（申し出）と Shall we 〜?（誘い）の二つの形だと覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s175',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Shall we 〜? と Let\'s 〜.：いっしょにしようと誘う',
    description: '相手を誘う二つの言い方の形をおさえ、否定の Let\'s not まで正しく書けるようにする',
    order: 675,
    studyPeriod: '小6前半',
    targetLevel: 'kiso',
    keyPoints: [
      'Shall we ＋ 原形 〜? ＝「いっしょに〜しましょうか」。',
      'Let\'s ＋ 原形 ＝「〜しましょう」。Let\'s は Let us の短縮形。',
      'Let\'s のうしろも動詞の原形（× Let\'s to go／× Let\'s going）。',
      '否定は Let\'s not ＋ 原形 ＝「〜するのはやめましょう」。',
      'Shall we 〜? ＝ Let\'s 〜. ＝ Why don\'t we 〜? はほぼ同じ意味。',
    ],
    sections: [
      {
        heading: 'Shall we 〜? と Let\'s 〜. の形',
        body: `相手をさそって「いっしょに〜しよう」と言う言い方は二つある。どちらも会話問題と書きかえ問題の定番である。

■ Shall we ＋ 動詞の原形 〜?
例）Shall we play tennis after school?（放課後にテニスをしませんか）
例）Shall we go to the museum?（博物館に行きましょうか）
少していねいで、相手の気持ちをうかがうひびきがある。

■ Let's ＋ 動詞の原形.
例）Let's play tennis after school.（放課後にテニスをしよう）
例）Let's go to the museum.
Let's は Let us の短縮形。うしろは必ず動詞の原形で、疑問文ではないのでピリオドで終わる。
× Let's to play ／ × Let's playing はどちらも誤り。

■ 否定「〜するのはやめよう」
例）Let's not talk about it.（その話はやめよう）
例）Let's not go out today. It's raining.
not は Let's のうしろに置く。× Let's don't go. は誤りである。

■ 書きかえ
Shall we go shopping? ＝ Let's go shopping. ＝ Why don't we go shopping?
どれもほぼ同じ意味で、書きかえ問題でそのまま出題される。

★ ポイント：Shall we 〜? は疑問文なので ? で終わり、Let's 〜. は誘いかける文なので . で終わる。書き終えたら文末の記号を確認する。`,
      },
      {
        heading: '答え方と会話での使い方',
        body: `さそわれたときの返事も決まっている。丸ごと覚えてしまえば得点源になる。

■ Shall we 〜? / Let's 〜. への返事
賛成：Yes, let's.（そうしましょう）
　　　That's a good idea. ／ Sounds good. ／ Sure.
断り：No, let's not.（やめておきましょう）
　　　I'm sorry, I can't. I have to study today.

Yes, let's. は Shall we 〜? と Let's 〜. のどちらに対しても使える返事である。一方、Shall I 〜?（私がしましょうか）に対しては使えない。

■ 会話の流れの例
A: Shall we have lunch together?（いっしょにお昼を食べませんか）
B: Yes, let's. Where shall we go?（そうしましょう。どこへ行きましょうか）
A: How about the new cafe near the station?（駅の近くの新しいカフェはどう）
B: Sounds good.（いいですね）

■ Let's 〜, shall we? という形
例）Let's go, shall we?（行きましょうよ、ね）
Let's の文につける付加疑問は shall we? である。これは付加疑問の課でもう一度確認する。

⚠ 注意：「〜しましょう」と「〜しましょうか（私が）」は日本語では一字ちがいだが、英語では Let's / Shall we（いっしょに）と Shall I（私が）に分かれる。だれが動くのかを必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「放課後にサッカーをしましょう。」を英語にしなさい。',
        wrongAnswer: "Let's to play soccer after school.",
        trapExplanation: 'Let\'s を「〜すること」を導く語のように感じてしまい、to を続けてしまう。want to play などの形にもつられる。',
        correctAnswer: "Let's play soccer after school.",
        correctExplanation:
          "Let's は Let us の短縮形で、うしろは動詞の原形が続く。× Let's to play も × Let's playing も誤り。同じ意味の Shall we play soccer after school? も、shall のうしろが原形である点は同じ。",
      },
      {
        question: '「今日は出かけるのはやめましょう。」を英語にしなさい。',
        wrongAnswer: "Let's don't go out today.",
        trapExplanation: '否定文は don\'t を使うという一般動詞のルールをそのまま当てはめてしまう。Let\'s の否定形を習っていないと必ずこの形になる。',
        correctAnswer: "Let's not go out today.",
        correctExplanation:
          "Let's の否定は「Let's not ＋ 動詞の原形」。don't は使わない。Let's not talk about it.（その話はやめよう）のように、not の位置は Let's のすぐうしろで固定である。",
      },
    ],
  },

  {
    id: 'eigo_s176',
    subject: 'eigo',
    examType: 'chugaku',
    title: '提案・申し出への答え方のまとめ',
    description: 'Shall I / Shall we / Let\'s / Would you like への返事を、場面ごとに正しく選べるようにする',
    order: 676,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'Shall I 〜?（私がしましょうか）→ Yes, please. / No, thank you.',
      'Shall we 〜? / Let\'s 〜.（いっしょにしよう）→ Yes, let\'s. / No, let\'s not.',
      'Would you like 〜?（いかがですか）→ Yes, please. / No, thank you.',
      'Can you 〜? / Could you 〜?（してくれますか）→ Sure. / I\'m sorry, I can\'t.',
      '断るときは理由を一言そえると自然になる。',
    ],
    sections: [
      {
        heading: '「だれがするか」で返事が決まる',
        body: `会話問題では、さそわれた・すすめられた・頼まれた場面での返事を選ばせる問題が必ず出る。返事の形は「動作をするのはだれか」で決まる。

■ 自分がする（相手の申し出を受ける）
Shall I 〜? ／ Would you like 〜? ／ May I help you?
→ Yes, please.（はい、お願いします）
→ No, thank you.（いいえ、けっこうです）

■ いっしょにする（さそいに応じる）
Shall we 〜? ／ Let's 〜. ／ Why don't we 〜?
→ Yes, let's.（そうしましょう）
→ No, let's not.（やめておきましょう）
→ That's a good idea. ／ Sounds good.

■ 相手がする（頼まれごとを引き受ける）
Can you 〜? ／ Will you 〜? ／ Could you 〜? ／ Would you 〜?
→ Sure. ／ Of course. ／ All right. ／ Certainly.
→ I'm sorry, I can't.

★ ポイント：Yes, please. は「してもらう」とき、Yes, let's. は「いっしょにする」とき、Sure. は「してあげる」とき。三つを場面とセットで覚える。`,
      },
      {
        heading: '自然な断り方',
        body: `英語では、断るときにただ No. とだけ言うのはぶっきらぼうに聞こえる。「ごめんなさい」と「理由」をそえるのが基本の形である。

■ 断りの基本の型
I'm sorry, but ＋ 理由.
例）I'm sorry, but I have to help my mother.（すみません、母を手伝わなければならなくて）
例）Sorry, I can't. I have a piano lesson today.（ごめん、無理なんだ。今日はピアノのレッスンがあって）
例）Thank you, but I'm busy this afternoon. Maybe next time.（ありがとう、でも今日の午後はいそがしくて。また今度ね）

■ お礼をそえる断り方
No, thank you. I'm all right.（いいえ、けっこうです。だいじょうぶです）
That's very kind of you, but I can do it myself.（ご親切にありがとうございます。でも自分でできます）

■ 会話の流れの例
A: Shall we go to the movies this Sunday?（今度の日曜、映画に行きませんか）
B: I'm sorry, I can't. I'm going to visit my grandmother.（ごめんなさい、行けません。祖母の家に行く予定なんです）
A: That's too bad. How about next Sunday?（残念。来週の日曜はどうですか）
B: Sounds good.（いいですね）

⚠ 注意：That's too bad.（それは残念ですね）は相手の残念な知らせに対する決まり文句である。「それはとても悪い」と直訳しないよう気をつける。`,
      },
    ],
    trapExamples: [
      {
        question: 'Shall I help you with your homework? に「はい、お願いします」と答えなさい。',
        wrongAnswer: "Yes, let's.",
        trapExplanation: 'shall という語だけを見て、いっしょに何かをする誘いだと思ってしまう。Shall I は「私が手伝いましょうか」という申し出である。',
        correctAnswer: 'Yes, please.',
        correctExplanation:
          '手伝うのは相手なので、こちらは「お願いします」と受ける。Yes, please. / No, thank you. が正しい返事。Yes, let\'s. は「いっしょにやりましょう」という意味なので、Shall we 〜? や Let\'s 〜. への返事になる。',
      },
      {
        question: "Let's play catch in the park. に「そうしましょう」と答えなさい。",
        wrongAnswer: 'Yes, please.',
        trapExplanation: '賛成の返事はすべて Yes, please. だと思いこんでいる。Let\'s は「いっしょにやろう」という誘いなので、please（お願いします）では意味が合わない。',
        correctAnswer: "Yes, let's.",
        correctExplanation:
          "Let's 〜. や Shall we 〜? のように「いっしょにしよう」と誘われたときは Yes, let's.（そうしましょう）／ No, let's not.（やめておきましょう）で答える。Yes, please. は相手が自分のために何かをしてくれるときの返事である。",
      },
    ],
  },

  // ───────────────────── 7. 依頼・許可の会話表現（s177〜s180） ─────────────────────
  {
    id: 'eigo_s177',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Could you 〜?：ていねいに人にものを頼む',
    description: 'Could you 〜? の意味と語順をおさえ、道をたずねる場面の会話に強くなる',
    order: 677,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'Could you ＋ 原形 〜? ＝「〜していただけませんか」。過去の意味ではない。',
      'Can you 〜? よりていねい。初対面の人や目上の人に使う。',
      'Could you tell me the way to 〜? は道をたずねる決まり文句。',
      'tell me のあとに疑問文が続くときは「主語＋動詞」の語順になる。',
      '承諾は Sure. / Certainly.、断りは I\'m sorry, I can\'t.。',
    ],
    sections: [
      {
        heading: 'Could you 〜? の意味と使い方',
        body: `could は can の過去形だが、Could you 〜? という疑問文では過去の意味にならない。「〜していただけませんか」という、ていねいな依頼になる。

例）Could you help me?（手伝っていただけませんか）
例）Could you say that again?（もう一度言っていただけませんか）
例）Could you speak more slowly?（もっとゆっくり話していただけませんか）
例）Could you show me your ticket?（切符を見せていただけますか）

■ ていねいさの階段
Can you 〜?（〜してくれる？）…友達に
Will you 〜?（〜してくれますか）…友達・家族に
Could you 〜?（〜していただけませんか）…目上の人・初対面の人に
Would you 〜?（〜していただけませんか）…同じくていねい
さらに please を付けると、よりていねいになる。
例）Could you open the door, please?

■ 答え方
承諾：Sure. ／ Certainly. ／ Of course. ／ All right.
断り：I'm sorry, I can't. ／ I'm afraid I can't.
Yes, I could. とは答えない。could をそのまま返すと不自然になるので、Sure. などを使う。

★ ポイント：Could you 〜? を「〜できましたか」と訳すと意味が通らなくなる。疑問文の Could you / Would you はていねいさを表す形だと覚える。`,
      },
      {
        heading: '道をたずねる会話',
        body: `Could you 〜? は、道をたずねる場面の会話としてよく出題される。型ごと覚えてしまうのが早い。

■ たずねる言い方
Excuse me. Could you tell me the way to the station?（すみません、駅へ行く道を教えていただけませんか）
Could you tell me how to get to the museum?（博物館への行き方を教えていただけますか）
Where is the post office?（郵便局はどこですか）

■ 答え方
Go straight along this street.（この通りをまっすぐ行ってください）
Turn right at the second corner.（二つ目の角を右に曲がってください）
You'll see it on your left.（左手に見えますよ）
It's about five minutes' walk.（歩いて五分ほどです）
I'm sorry, I'm a stranger here.（すみません、このあたりは不案内なんです）

■ 語順の注意
Could you tell me のあとに「どこ・いつ・何」をたずねる文を続けるときは、疑問文の語順にしない。
○ Could you tell me where the station is?
× Could you tell me where is the station?
tell me のうしろは「疑問詞＋主語＋動詞」の順になる。これを間接疑問といい、上位校で問われる。

⚠ 注意：道案内の答えは命令文（Go / Turn）で表す。これは次の命令文の課とつながる。「行ってください」とていねいに言うときは、文末に please を付ける。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。「Could you carry this box for me?」',
        wrongAnswer: 'あなたは私のためにこの箱を運ぶことができましたか。',
        trapExplanation: 'could ＝ can の過去形と覚えているため、疑問文でも過去の意味に訳してしまう。ていねいな依頼の形であることを知らないと必ず引っかかる。',
        correctAnswer: 'この箱を運んでいただけませんか。',
        correctExplanation:
          'Could you 〜? / Would you 〜? は過去ではなく、ていねいな依頼を表す。Can you 〜? のていねい版と考える。答えるときも Sure. / Certainly. / I\'m sorry, I can\'t. を使い、Yes, I could. とは言わない。',
      },
      {
        question: '「駅がどこにあるか教えていただけませんか。」を英語にしなさい。',
        wrongAnswer: 'Could you tell me where is the station?',
        trapExplanation: 'Where is the station? という疑問文の形をそのまま文の中に入れてしまう。文の中に入る疑問文は語順が変わることを知らない。',
        correctAnswer: 'Could you tell me where the station is?',
        correctExplanation:
          'tell me / know / ask のあとに疑問詞の文が続くときは、「疑問詞＋主語＋動詞」というふつうの語順に戻す（間接疑問）。Do you know what this is?（× what is this）も同じ仕組みである。',
      },
    ],
  },

  {
    id: 'eigo_s178',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'May I 〜? / Could I 〜?：ていねいに許可を求める',
    description: '自分が何かをする許しを求める言い方を、場面と語法の両面から身につける',
    order: 678,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'May I 〜? / Could I 〜? ＝「〜してもよろしいですか」。主語は I。',
      'ていねいさは Can I ＜ May I ＜ Could I の順。',
      'use（その場で使う）と borrow（借りて持っていく）を使い分ける。',
      '電話の May I speak to 〜? への返事は Speaking. / Just a moment, please.',
      '断るときは I\'m sorry, but 〜 とやわらげる。',
    ],
    sections: [
      {
        heading: '許可を求める三つの言い方',
        body: `自分が何かをしたいとき、相手に許しを求める言い方は三つある。どれも主語は I である。

■ Can I 〜?（〜してもいい？）
例）Can I use your eraser?（消しゴムを使ってもいい？）友達に。

■ May I 〜?（〜してもよろしいですか）
例）May I come in?（入ってもよろしいですか）先生や目上の人に。

■ Could I 〜?（〜させていただけますか）
例）Could I use your phone?（電話をお借りできますか）いちばんていねい。

■ 答え方
承諾：Sure. ／ Of course. ／ Certainly. ／ Go ahead.（どうぞ）
断り：I'm sorry, but you can't. ／ I'm afraid not.
No, you may not. は強くはねつける言い方なので、ふつうは I'm sorry を付けてやわらげる。

■ use と borrow のちがい
use ＝ その場で使う（電話・トイレ・辞書など動かさないもの）
borrow ＝ 借りて自分のところへ持っていく（本・かさ・自転車など）
例）May I use the bathroom?（トイレをお借りしてもよいですか）
例）May I borrow your umbrella?（かさを借りてもよいですか）
日本語ではどちらも「借りる」と言うので、取りちがえやすい。

★ ポイント：May I 〜? は自分がする、Could you 〜? は相手がする。I と you のどちらで始まるかが意味を決める。`,
      },
      {
        heading: '電話と訪問の会話',
        body: `May I 〜? は電話の会話でも決まり文句になっている。並べかえや応答選択で頻出する。

■ 電話をかける側
Hello. This is Ken.（もしもし、ケンです）※ I am Ken. とは言わない
May I speak to Mr. Brown, please?（ブラウンさんをお願いします）
Could I leave a message?（伝言をお願いできますか）

■ 電話を受ける側
Speaking.（私です）
Just a moment, please. ／ Hold on, please.（少々お待ちください）
I'm sorry, he is out now.（すみません、いま外出しています）
Shall I take a message?（ご伝言をうかがいましょうか）
Can I call you back later?（あとでかけ直してもよいですか）

■ 家をたずねる場面
May I come in?（入ってもよろしいですか）
— Sure. Please come in.（どうぞお入りください）
Please make yourself at home.（どうぞ楽になさってください）

⚠ 注意：電話で自分の名前を言うときは This is Ken (speaking). と言う。I am Ken. は目の前の相手に自己紹介するときの言い方で、電話では使わない。また相手をたずねるときは Who are you? ではなく May I ask who is calling? や Who's calling, please? を使う。`,
      },
    ],
    trapExamples: [
      {
        question: 'ホームステイ先で「トイレをお借りしてもよろしいですか」とたずねる文を書きなさい。',
        wrongAnswer: 'May I borrow the bathroom?',
        trapExplanation: '日本語の「借りる」をそのまま borrow に置きかえてしまう。borrow は「持っていって使う」ことなので、トイレには使えない。',
        correctAnswer: 'May I use the bathroom?',
        correctExplanation:
          'その場から動かせないもの（トイレ・電話・辞書をその場で見るなど）は use、持っていって使えるもの（本・かさ・自転車）は borrow を使う。「借りる」という日本語にまどわされず、動かすかどうかで判断する。',
      },
      {
        question: '電話で May I speak to Tom, please? と言われた。自分がトムのとき、どう答えるか。',
        wrongAnswer: 'Yes, you may.',
        trapExplanation: 'May I 〜? に対する答えは Yes, you may. だと機械的に覚えているため、電話特有の受け答えがあることに気づかない。',
        correctAnswer: 'Speaking.（This is Tom speaking. も可）',
        correctExplanation:
          '電話で「私です」と伝えるときは Speaking. または This is he / This is Tom speaking. と言う。相手が不在なら I\'m sorry, he is out now.、取りつぐなら Just a moment, please. が定番。電話の会話は場面ごと丸ごと覚える。',
      },
    ],
  },

  {
    id: 'eigo_s179',
    subject: 'eigo',
    examType: 'chugaku',
    title: '依頼と許可の整理（だれがするか × ていねいさ）',
    description: 'I で始まる許可と you で始まる依頼を二つの軸で整理し、正しく選べるようにする',
    order: 679,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '主語が I なら許可（自分がする）、you なら依頼（相手がする）。',
      'ていねいさは can → may / will → could / would の順に上がる。',
      'Would you mind 〜ing? は「〜していただけませんか」でうしろは -ing 形。',
      'Would you mind 〜? への承諾は No, not at all.（否定で「いいですよ」）。',
      '英作文では「動作をするのはだれか」を先に決めてから助動詞を選ぶ。',
    ],
    sections: [
      {
        heading: '二つの軸で表現を整理する',
        body: `依頼と許可の表現はよく似た形をしているので、二つの軸で位置づけると混乱しなくなる。

■ 軸① だれが動作をするか
自分がする（許可を求める）：Can I 〜? ／ May I 〜? ／ Could I 〜?
相手がする（依頼する）：Can you 〜? ／ Will you 〜? ／ Could you 〜? ／ Would you 〜?

■ 軸② どのくらいていねいか
くだけた ← Can ／ Will → May ／ Would ／ Could → ていねい

■ 組み合わせて覚える
Can I use your pen?（ペン借りていい？）友達に、自分がする
Could I use your pen?（ペンをお借りできますか）目上の人に、自分がする
Can you pass me the salt?（塩取って）友達に、相手がする
Could you pass me the salt?（塩を取っていただけますか）目上の人に、相手がする

四つとも「ペン」「塩」の話だが、だれが動くのか、どのくらいていねいかがちがう。英作文では、まず日本語を読んで「動くのはだれか」を決め、次に「相手はだれか」でていねいさを決める、という二段階で考える。

★ ポイント：日本語の「〜してもいい？」は自分が動く、「〜してくれる？」は相手が動く。助詞の少ない短い日本語ほど、動作主を落ち着いて確かめる。`,
        figureId: 'lf_eigoext05_179',
      },
      {
        heading: 'Would you mind 〜? の答え方',
        body: `上位校や英検準二級で出る、少し変わった依頼の言い方が Would you mind 〜? である。

■ 形
Would you mind ＋ 動詞の -ing 形?
例）Would you mind opening the window?（窓を開けていただけませんか）
例）Would you mind waiting here?（ここで待っていただけますか）
mind は「いやだと思う」という意味の動詞で、直訳すると「〜するのをいやだと思いますか」となる。

■ 答え方が逆になる
承諾（いいですよ）：No, not at all. ／ Of course not. ／ Certainly not.
断り（申し訳ないが）：I'm sorry, but 〜
「いやだと思いますか」→「いいえ、まったく」＝「いいですよ」という理くつである。Yes. と答えると「いやです」という意味になってしまうので注意する。

■ Do you mind if I 〜? もある
例）Do you mind if I open the window?（窓を開けてもよろしいですか）
これは自分が動く許可の言い方。答えはやはり No, not at all.（どうぞ）となる。

■ ほかの依頼表現との比較
Could you open the window?（開けていただけますか）— Sure.
Would you mind opening the window?（開けていただけませんか）— No, not at all.
答え方がちがうことを、必ず形とセットで覚える。

⚠ 注意：mind のうしろは動名詞（-ing）で、to 不定詞は使わない。× Would you mind to open 〜? は誤り。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたのペンを使ってもよろしいですか。」を英語にしなさい。',
        wrongAnswer: 'Could you use your pen?',
        trapExplanation: 'ていねいな言い方＝ Could you 〜? と覚えているため、動作をするのが自分であることを忘れて you を主語にしてしまう。',
        correctAnswer: 'Could I use your pen?（May I use your pen? も可）',
        correctExplanation:
          'ペンを使うのは自分なので主語は I。Could you use your pen? では「あなたのペンを使っていただけますか」という意味不明の文になる。「自分がする＝ I」「相手がする＝ you」をまず決めてから、ていねいさで助動詞を選ぶ。',
      },
      {
        question: 'Would you mind opening the window? に「いいですよ（どうぞ）」と答えなさい。',
        wrongAnswer: 'Yes, of course.',
        trapExplanation: '承諾するのだから Yes だと考えてしまう。mind が「いやだと思う」という意味なので、Yes は「いやです」という断りになってしまう。',
        correctAnswer: 'No, not at all.（Of course not. / Certainly not. も可）',
        correctExplanation:
          'Would you mind 〜? は「〜するのをいやだと思いますか」とたずねる形なので、承諾するときは No（いいえ、まったくいやではありません）で答える。Could you 〜? への Sure. とは答え方が逆になる点が問われやすい。',
      },
    ],
  },

  {
    id: 'eigo_s180',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話でよく出る受け答えと決まり文句',
    description: '助動詞を使った会話でくり返し出る応答表現を、場面ごとに整理して覚える',
    order: 680,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'Sure. / Of course. / Certainly. ＝「いいですよ」（依頼への承諾）。',
      'Here you are. ＝「はい、どうぞ」（ものを手わたすとき）。',
      'I\'m afraid not. ＝「残念ながらちがいます・できません」。',
      'That\'s too bad. ＝「それは残念ですね」。',
      '店では May I help you? — Yes, please. / No, thank you. I\'m just looking.',
    ],
    sections: [
      {
        heading: '場面別の決まり文句',
        body: `助動詞の単元の会話問題は、応答の決まり文句を知っているかどうかで差がつく。場面ごとにまとめて覚える。

■ 頼まれたとき
Sure. ／ Of course. ／ Certainly. ／ All right. ／ No problem.（いいですよ）
I'm sorry, I can't.（すみません、できません）
I'm afraid I can't.（残念ながらできません）

■ ものをわたすとき
Here you are. ／ Here it is.（はい、どうぞ）
— Thank you. ／ Thanks a lot.
— You're welcome. ／ Not at all.（どういたしまして）

■ 申し出をうけるとき・ことわるとき
Yes, please.（お願いします）
No, thank you. I'm all right.（けっこうです。だいじょうぶです）
That's very kind of you.（ご親切にありがとうございます）

■ 残念な知らせを聞いたとき
That's too bad.（それは残念ですね）
I'm sorry to hear that.（それはお気の毒に）

■ 店で
店員：May I help you?／店員：Here you are.
客：Yes, please. I'm looking for a cap.／客：No, thank you. I'm just looking.
客：How much is it?／客：I'll take it.（これをいただきます）

★ ポイント：I'm afraid 〜 は「残念ながら〜」という前置き。I'm afraid not.（残念ながらちがいます）、I'm afraid so.（残念ながらそのとおりです）の二つは丸暗記しておく。`,
      },
      {
        heading: '会話文の流れを読む',
        body: `会話問題では、空所の前後から「これは依頼か、申し出か、さそいか」を見きわめることが第一歩になる。次の三つの流れを頭に入れておく。

■ 依頼の流れ
A: Could you help me with my homework?（宿題を手伝ってくださいませんか）
B: Sure. What's the problem?（いいですよ。どこが分からないの）
A: I can't answer this question.（この問題が解けなくて）

■ 申し出の流れ
A: You look tired. Shall I carry your bag?（疲れているみたいだね。かばんを持とうか）
B: Thank you. That's very kind of you.（ありがとう。ご親切に）
A: No problem.（どういたしまして）

■ さそいの流れ
A: Shall we go to the zoo this Saturday?（今度の土曜、動物園に行きませんか）
B: I'd like to, but I have to help my father.（行きたいのですが、父を手伝わなければならなくて）
A: That's too bad. How about next week?（残念だな。来週はどう）
B: Sounds good.（いいですね）

■ ことわるときの決まり文句
I'd like to, but 〜（行きたいのですが〜）は、断り方としてとてもよく出る。I'd like to のあとに動詞を続けないまま but でつなぐ形をそのまま覚える。

⚠ 注意：You're welcome.（どういたしまして）は Thank you. への返事。Excuse me.（すみません）は人に話しかけるときや軽くあやまるとき、I'm sorry. は本当に悪かったときと、使い分けがある。`,
      },
    ],
    trapExamples: [
      {
        question: '店で May I help you? と声をかけられた。「いいえ、けっこうです。見ているだけです」と答えなさい。',
        wrongAnswer: "No, I don't. I'm seeing only.",
        trapExplanation: '一般動詞の疑問文だと勘ちがいして No, I don\'t. と答えてしまう。また「見ているだけ」を see で表そうとしている。',
        correctAnswer: "No, thank you. I'm just looking.",
        correctExplanation:
          '店員の May I help you? は申し出なので、Yes, please. / No, thank you. で答える。「見ているだけです」は I\'m just looking. が決まった言い方。look は「目を向ける」、see は「目に入る」で、店で品物を見て回るのは look である。',
      },
      {
        question: '次の英文を日本語にしなさい。「Here you are.」',
        wrongAnswer: 'ここにあなたがいます。',
        trapExplanation: 'Here / you / are をそのまま単語ごとに直訳してしまう。ものを手わたすときの決まり文句であることを知らないと意味が取れない。',
        correctAnswer: 'はい、どうぞ。',
        correctExplanation:
          'Here you are. ／ Here it is. は、相手にものを手わたすときの決まり文句で「はい、どうぞ」の意味。返事は Thank you.、それに対しては You\'re welcome. と続く。会話の決まり文句は直訳せず、場面ごと覚える。',
      },
    ],
  },
  // ───────────────────── 8. 命令文（s181〜s184） ─────────────────────
  {
    id: 'eigo_s181',
    subject: 'eigo',
    examType: 'chugaku',
    title: '命令文①：動詞の原形で始める文',
    description: '主語を書かずに動詞の原形で始める命令文の作り方を、be動詞の文までふくめて習得する',
    order: 681,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '命令文は主語 You を書かず、動詞の原形で始める。',
      '三単現の s も過去形も使わない。いつでも原形。',
      'be動詞の文の命令文は Be 〜. で始める（You are kind. → Be kind.）。',
      '命令文は「〜しなさい」だけでなく、道案内や説明にも使う。',
      '文の終わりはピリオド。強く言うときは感嘆符（!）を使うこともある。',
    ],
    sections: [
      {
        heading: '命令文の作り方',
        body: `相手に「〜しなさい」「〜してください」と言う文を命令文という。作り方はとても簡単で、ふつうの文から主語 You を取り、動詞を原形にするだけである。

■ 一般動詞の文から
You open the window.（あなたは窓を開ける）
→ Open the window.（窓を開けなさい）

You study English every day.
→ Study English every day.（毎日英語を勉強しなさい）

You wash your hands.
→ Wash your hands.（手を洗いなさい）

主語がないので、三単現の s を付ける必要もない。相手に言う文なのだから、そもそも主語は you に決まっていて、書かなくても分かるという理くつである。

■ 動詞は必ず原形
過去のことを命令することはできないので、過去形は使わない。
× Opened the window. ／ × Opens the window. はどちらも誤り。

■ 使われる場面
命令だけでなく、指示・道案内・説明書・レシピなど、幅広く使われる。
例）Turn right at the next corner.（次の角を右に曲がってください）
例）Put the eggs into the bowl.（卵をボウルに入れます）

★ ポイント：「命令文＝動詞の原形で始まる文」と覚える。文の最初の語が動詞の原形なら、それは命令文である。`,
        figureId: 'lf_eigoext05_181',
      },
      {
        heading: 'be動詞の命令文',
        body: `be動詞（am / is / are）を使った文を命令文にするときは、be動詞の原形である Be を文の先頭に置く。ここが受験生のつまずきどころである。

■ 作り方
You are quiet.（あなたは静かだ）
→ Be quiet.（静かにしなさい）

You are kind to others.
→ Be kind to others.（人には親切にしなさい）

You are careful.
→ Be careful.（気をつけなさい）

am / is / are の原形は be である。are をそのまま残して × Are quiet. とすると疑問文のような形になってしまい、意味が通らない。

■ よく使う be の命令文
Be quiet.（静かに）
Be careful.（気をつけて）
Be kind.（親切にしなさい）
Be a good boy.（いい子にしていなさい）
Be on time.（時間を守りなさい）

■ 主語を書いてしまうまちがい
「あなたは窓を開けなさい」という日本語につられて You open the window. と書くと、「あなたは窓を開けます」というふつうの文になってしまい、命令の意味にならない。日本語に「あなたは」があっても、英語では書かない。

⚠ 注意：命令文の文末はピリオドが基本。強い調子を表したいときだけ感嘆符を使う（Look out!／Stop!）。会話文の並べかえ問題では、文末の記号まで採点されることがある。`,
      },
    ],
    trapExamples: [
      {
        question: '「静かにしなさい。」を英語にしなさい。',
        wrongAnswer: 'Are quiet.',
        trapExplanation: 'You are quiet. の主語を取るだけだと考えて、are をそのまま残してしまう。be動詞にも原形があることを意識していない。',
        correctAnswer: 'Be quiet.',
        correctExplanation:
          '命令文では動詞を原形にする。am / is / are の原形は be なので、Be quiet. となる。Be careful.（気をつけて）、Be kind.（親切にしなさい）も同じ形。「be動詞の命令文は Be で始まる」と型で覚える。',
      },
      {
        question: '「（あなたは）このドアを開けなさい。」を英語にしなさい。',
        wrongAnswer: 'You open this door.',
        trapExplanation: '日本語に「あなたは」があるため、主語を書いてしまう。書いてしまうと「あなたはこのドアを開けます」というふつうの文になり、命令の意味が消える。',
        correctAnswer: 'Open this door.',
        correctExplanation:
          '命令文は主語 You を書かず、動詞の原形から始める。相手に向かって言う文なので、主語が you であることは言わなくても分かるからである。ていねいに言いたいときは Please open this door. や Open this door, please. とする。',
      },
    ],
  },

  {
    id: 'eigo_s182',
    subject: 'eigo',
    examType: 'chugaku',
    title: '命令文②：否定の命令文（Don\'t 〜.）',
    description: '「〜してはいけません」を表す Don\'t の命令文を、be動詞の文もふくめて正確に作る',
    order: 682,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '否定の命令文は Don\'t ＋ 動詞の原形 ＝「〜してはいけない・〜しないで」。',
      'be動詞の文でも Don\'t be 〜. とする（× Be not 〜.）。',
      '主語がないので doesn\'t は使わない。いつでも Don\'t。',
      'Never ＋ 原形 ＝「決して〜するな」。Don\'t よりさらに強い。',
      'ていねいにするときは Please don\'t 〜. と、please を先頭に置く。',
    ],
    sections: [
      {
        heading: 'Don\'t で始める否定の命令文',
        body: `「〜してはいけません」と止めるときは、命令文の前に Don't を置く。

■ 一般動詞の場合
Open the window.（窓を開けなさい）
→ Don't open the window.（窓を開けてはいけません）

例）Don't run in the hallway.（ろうかを走ってはいけません）
例）Don't touch this button.（このボタンにさわらないで）
例）Don't worry.（心配しないで）
例）Don't forget your homework.（宿題を忘れないで）

■ be動詞の場合も Don't
Be late. → Don't be late.（遅れてはいけません）
例）Don't be afraid.（こわがらないで）
例）Don't be shy.（はずかしがらないで）
× Be not late. とは言わない。be動詞の否定命令文も Don't be 〜. の形になる。

■ 主語がないので doesn't は使わない
命令文には主語がないので、相手が何人でも、どんな人でも Don't のままである。× Doesn't run. のような形は存在しない。

★ ポイント：「命令文の否定は、文の頭に Don't を足すだけ」。一般動詞でも be動詞でも同じで、例外がない。`,
      },
      {
        heading: 'Never と please',
        body: `否定の命令文には、意味を強めたりやわらげたりする言い方がある。

■ Never ＋ 動詞の原形（決して〜するな）
例）Never give up.（決してあきらめるな）
例）Never tell a lie.（決してうそをついてはいけない）
Don't よりも強い調子になる。標語やことわざのような文でよく使われる。Never のうしろも動詞の原形で、Don't は付けない（× Never don't give up.）。

■ Please をそえてやわらげる
例）Please don't open the door.（どうかドアを開けないでください）
例）Don't open the door, please.
please は文頭か文末に置く。文末に置くときは、直前にコンマを入れる。
× Don't please open the door. のように、文の途中に入れるのは誤りである。

■ 禁止を表す他の言い方
Don't swim here.（ここで泳いではいけない）
＝ You must not swim here.
＝ You can't swim here.
掲示では No swimming.（遊泳禁止）のように「No ＋ -ing」の形も使われる。

■ 相手を気づかう決まり文句
Don't worry.（心配しないで）
Don't mention it.（どういたしまして）
Don't be sad.（悲しまないで）

⚠ 注意：Don't be late for school.（学校に遅れてはいけません）のように、be動詞のあとに形容詞や熟語が続く形は頻出。be を落として × Don't late for school. と書くまちがいに気をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '「遅れてはいけませんよ。」を英語にしなさい。',
        wrongAnswer: "Don't late.",
        trapExplanation: '「遅れる」を late という一語で表せると思ってしまう。late は形容詞なので、動詞 be が必要であることを見落としている。',
        correctAnswer: "Don't be late.",
        correctExplanation:
          'late は「遅い」という形容詞なので、be動詞と組にして be late（遅れる）となる。否定の命令文にすると Don\'t be late. である。同じように Don\'t be afraid. / Don\'t be shy. も be を落とさない。',
      },
      {
        question: '「どうか泣かないでください。」を英語にしなさい。',
        wrongAnswer: "Don't please cry.",
        trapExplanation: '日本語の「どうか泣かないで」の語順につられ、Don\'t のうしろに please を入れてしまう。please の置き場所が決まっていることを知らない。',
        correctAnswer: "Please don't cry.（Don't cry, please. も可）",
        correctExplanation:
          'please は文の先頭か文の終わりに置く。文末に置くときは Don\'t cry, please. とコンマを入れる。文の途中に割りこませることはできない。肯定の命令文でも Please sit down. / Sit down, please. と同じ規則である。',
      },
    ],
  },

  {
    id: 'eigo_s183',
    subject: 'eigo',
    examType: 'chugaku',
    title: '命令文③：please の位置と呼びかけのコンマ',
    description: 'ていねいな命令文の作り方と、名前で呼びかけるときのコンマの使い方を正確に身につける',
    order: 683,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'please は文頭か文末に置く。文末のときは直前にコンマを入れる。',
      '呼びかけの名前も、文頭・文末どちらでもコンマで区切る。',
      'Please 〜. でもていねいさは十分だが、Could you 〜? のほうがよりていねい。',
      'Let\'s 〜. は命令文ではないが、同じく原形で始まる仲間として覚える。',
      'コンマの有無で減点されることがあるので、書いたら必ず確認する。',
    ],
    sections: [
      {
        heading: 'please の置き場所',
        body: `命令文に please を付けると「〜してください」とていねいになる。置く場所は文頭か文末の二か所だけである。

■ 文頭に置く
例）Please open the window.（窓を開けてください）
例）Please come in.（どうぞお入りください）
コンマは不要である。

■ 文末に置く
例）Open the window, please.
例）Come in, please.
文末に置くときは、please の直前にコンマを入れる。このコンマを落とすと減点されることがある。

■ 途中には置けない
× Open please the window. は誤り。please は文全体にかかる語なので、文の中に割りこませない。

■ 否定の命令文でも同じ
Please don't touch it.（さわらないでください）
Don't touch it, please.

■ もっとていねいに言いたいとき
Please open the window. よりも
Could you open the window? ／ Would you open the window?
のほうがていねいである。目上の人やお店の人には、こちらを使うとよい。

★ ポイント：please があっても命令文は命令文なので、動詞は原形のまま。Please opens 〜 のように s を付けてはいけない。`,
        figureId: 'lf_eigoext05_183',
      },
      {
        heading: '呼びかけのコンマ',
        body: `相手の名前を呼びながら命令文を言うとき、名前と文の間には必ずコンマを入れる。これを呼びかけのコンマという。

■ 名前が前
例）Ken, come here.（ケン、こっちへおいで）
例）Tom, be quiet.（トム、静かに）

■ 名前があと
例）Come here, Ken.
例）Close the door, Tom.

■ please と両方使うとき
例）Ken, please open the window.
例）Open the window, please, Ken.（少しくどいので、ふつうは Ken, please open the window. とする）

■ コンマがないと意味が変わってしまう例
Let's eat, Grandma.（おばあちゃん、食べよう）
Let's eat Grandma.（おばあちゃんを食べよう）
コンマ一つで意味がまるで変わってしまう。英語ではコンマが意味を決める大切な記号である。

■ Let's 〜. も原形で始まる
Let's go home.（家に帰ろう）は命令文ではないが、Let's のうしろが動詞の原形という点は命令文と同じ。「原形で始まるなかま」として並べて覚えておくと、語順を忘れにくい。

⚠ 注意：呼びかけの語は、名前だけでなく Mr. Brown / everyone / boys and girls などでも同じようにコンマで区切る。
例）Everyone, look at this picture.`,
      },
    ],
    trapExamples: [
      {
        question: '「ドアを閉めてください、ケン。」を英語にしなさい。',
        wrongAnswer: 'Close the door please Ken.',
        trapExplanation: '語順は合っているのに、コンマをまったく打たない。日本語では読点を打たなくても意味が通じるため、英語でも不要だと感じてしまう。',
        correctAnswer: 'Close the door, please, Ken.（Ken, please close the door. も可）',
        correctExplanation:
          '文末の please の前にはコンマを入れ、呼びかけの名前の前にもコンマを入れる。すっきり書くなら Ken, please close the door. とするとよい。コンマの有無は採点対象になるので、書き終えたら必ず見直す。',
      },
      {
        question: '「どうぞこの本を読んでください。」を英語にしなさい。',
        wrongAnswer: 'Read please this book.',
        trapExplanation: '「どうぞ読んでください」という日本語の順に引きずられ、動詞のすぐあとに please を入れてしまう。',
        correctAnswer: 'Please read this book.（Read this book, please. も可）',
        correctExplanation:
          'please は文頭か文末のどちらかに置く。文末に置くときは直前にコンマが必要。文の途中に入れることはできない。否定の命令文でも Please don\'t 〜. / Don\'t 〜, please. と同じ規則である。',
      },
    ],
  },

  {
    id: 'eigo_s184',
    subject: 'eigo',
    examType: 'chugaku',
    title: '命令文④：命令文, and 〜 と 命令文, or 〜',
    description: '「そうすれば」と「さもないと」を表す二つの型を、if を使った文への書きかえまで理解する',
    order: 684,
    studyPeriod: '小5前半',
    targetLevel: 'moshi',
    keyPoints: [
      '命令文, and 〜 ＝「〜しなさい、そうすれば…」。',
      '命令文, or 〜 ＝「〜しなさい、さもないと…」。',
      'and のあとは良い結果、or のあとは困った結果が続くことが多い。',
      '命令文, and 〜 ＝ If you 〜, … に書きかえられる。',
      '命令文, or 〜 ＝ If you don\'t 〜, … と、否定にして書きかえる。',
    ],
    sections: [
      {
        heading: '二つの型を覚える',
        body: `命令文のうしろにコンマを打ち、and または or を続けると、「そうすれば」「さもないと」という意味の文になる。入試の定番である。

■ 命令文, and 〜（〜しなさい、そうすれば…）
例）Hurry up, and you will catch the bus.（急ぎなさい、そうすればバスに間に合います）
例）Study hard, and you will pass the exam.（一生懸命勉強しなさい、そうすれば試験に受かります）
例）Turn right, and you will see the post office.（右に曲がれば、郵便局が見えます）
and のあとには、命令にしたがった場合の良い結果が続く。

■ 命令文, or 〜（〜しなさい、さもないと…）
例）Hurry up, or you will miss the bus.（急ぎなさい、さもないとバスに乗り遅れます）
例）Get up early, or you will be late for school.（早く起きなさい、でないと学校に遅れます）
例）Take an umbrella, or you will get wet.（かさを持っていきなさい、さもないとぬれますよ）
or のあとには、命令にしたがわなかった場合の困った結果が続く。

■ 見分け方
うしろの文が「うまくいく話」なら and、「困った話」なら or。
catch the bus（間に合う）→ and ／ miss the bus（乗り遅れる）→ or
pass（受かる）→ and ／ fail（落ちる）→ or

★ ポイント：and は「そうすれば」、or は「さもないと」。日本語の訳とセットで、コンマの位置まで覚える。`,
      },
      {
        heading: 'if を使った文への書きかえ',
        body: `この二つの型は、if（もし〜ならば）を使った文に書きかえられる。書きかえ問題では、and と or で否定の有無が変わることがねらわれる。

■ 命令文, and 〜 ＝ If you 〜, …
Hurry up, and you will catch the bus.
＝ If you hurry up, you will catch the bus.（もし急げば、バスに間に合うでしょう）
そのまま if の文にすればよい。

■ 命令文, or 〜 ＝ If you don't 〜, …
Hurry up, or you will miss the bus.
＝ If you don't hurry up, you will miss the bus.（もし急がなければ、バスに乗り遅れるでしょう）
or は「さもないと」＝「もし〜しなければ」なので、if の文では否定にする。ここを落とすと不正解になる。

■ 書きかえの手順
①命令文の部分を主語 you で始まる文に直す
②and ならそのまま、or なら don't を入れる
③文全体を If 〜, … の形に整える

■ 未来のことでも if のあとは現在形
If you hurry up, you will catch the bus.
× If you will hurry up 〜 とは書かない。時や条件を表す if / when のあとは、未来のことでも現在形を使うという決まりがある。

⚠ 注意：or には「または」という意味もあるので、コンマの前が命令文になっているかを必ず確かめる。Tea or coffee?（紅茶かコーヒーか）の or とは別のはたらきである。`,
      },
    ],
    trapExamples: [
      {
        question: '「早く起きなさい、さもないと学校に遅れますよ。」を英語にしなさい。',
        wrongAnswer: 'Get up early, and you will be late for school.',
        trapExplanation: '命令文のあとをつなぐのは and だと覚えているため、うしろが「遅れる」という困った結果であることに気づかず and を使ってしまう。',
        correctAnswer: 'Get up early, or you will be late for school.',
        correctExplanation:
          'and は「そうすれば」で良い結果、or は「さもないと」で困った結果を導く。be late for school（学校に遅れる）は困った結果なので or を使う。うしろの内容が良いか悪いかで選ぶ、と手順を決めておく。',
      },
      {
        question: '次の文とほぼ同じ意味になるように書きかえなさい。「Run fast, or you will miss the train.」→「If you （　） fast, you will miss the train.」',
        wrongAnswer: 'run',
        trapExplanation: '命令文の部分をそのまま if の文に移せばよいと考えてしまう。or が「〜しなければ」という否定の意味をふくんでいることを見落としている。',
        correctAnswer: "don't run",
        correctExplanation:
          '命令文, or 〜 は「もし〜しなければ…」という意味なので、if の文にするときは否定にする。If you don\'t run fast, you will miss the train. となる。and の場合は否定にせず、そのまま If you run fast, … とする。',
      },
    ],
  },

  // ───────────────────── 9. 感嘆文（s185〜s187） ─────────────────────
  {
    id: 'eigo_s185',
    subject: 'eigo',
    examType: 'chugaku',
    title: '感嘆文①：What で始まる感嘆文',
    description: '「なんて〜な…でしょう」を表す What の感嘆文の語順と、a / an の有無を正確に身につける',
    order: 685,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'What ＋ (a / an) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞 ! の語順。',
      '名詞があるときは What を使う。',
      '数えられる名詞が単数のときは a / an を忘れない。',
      '複数形や数えられない名詞には a / an を付けない。',
      '文末の主語＋動詞は省略できる（What a beautiful flower!）。',
    ],
    sections: [
      {
        heading: 'What の感嘆文の語順',
        body: `おどろきや感動を表して「なんて〜な…でしょう」と言う文を感嘆文という。名詞がふくまれるときは What で始める。

■ 基本の語順
What ＋ (a / an) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞 !

例）What a beautiful flower this is!（これはなんて美しい花でしょう）
例）What a tall building that is!（あれはなんて高い建物でしょう）
例）What an interesting book this is!（これはなんておもしろい本でしょう）
例）What a good singer she is!（彼女はなんて歌が上手なのでしょう）

■ ふつうの文からの作り方
This is a very beautiful flower.（これはとても美しい花です）
①very を取って、a beautiful flower をひとかたまりにする
②その前に What を置いて文の先頭へ
③残った this is をうしろに置き、文末を ! にする
→ What a beautiful flower this is!

■ 文末は必ず感嘆符
感嘆文の終わりはピリオドではなく ! を付ける。書き忘れると減点される。

★ ポイント：もとの文の very を what に置きかえて、そのかたまりを前に出す、と考えると作りやすい。`,
        figureId: 'lf_eigoext05_185',
      },
      {
        heading: 'a / an を付けるか付けないか',
        body: `What の感嘆文でいちばんまちがえやすいのが a / an の有無である。判断は、うしろの名詞の形で決まる。

■ 数えられる名詞の単数 → a / an が必要
What a big dog it is!（なんて大きな犬でしょう）
What an old temple this is!（なんて古いお寺でしょう）
形容詞が母音の音で始まるときは an（an old / an interesting / an easy）。

■ 複数形 → a / an は付けない
What beautiful flowers they are!（なんて美しい花々でしょう）
What kind people they are!（なんて親切な人たちでしょう）

■ 数えられない名詞 → a / an は付けない
What good news it is!（なんてよい知らせでしょう）
What cold water this is!（なんて冷たい水でしょう）
news・water・money・information などは数えられない名詞である。

■ 見分けの手順
①名詞をさがす
②その名詞が数えられて、しかも一つなら a / an
③複数形か、数えられない名詞なら付けない

■ 主語と動詞の省略
What a beautiful flower this is! → What a beautiful flower!
会話では省略した形がよく使われる。What a nice day!（なんていい天気でしょう）／What a surprise!（なんておどろき）などが定番である。

⚠ 注意：a / an の位置は What のすぐあと。× What beautiful a flower の順にはならない。「What ＋ a ＋ 形容詞 ＋ 名詞」の順を口に出して覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「これはなんて美しい花なのでしょう。」を英語にしなさい。',
        wrongAnswer: 'What beautiful flower this is!',
        trapExplanation: '感嘆文の語順は覚えているが、flower が数えられる名詞の単数であることを意識していないため、a を落としてしまう。',
        correctAnswer: 'What a beautiful flower this is!',
        correctExplanation:
          '数えられる名詞が単数のときは a / an が必要。位置は What のすぐあとで、What a beautiful flower となる。形容詞が母音の音で始まるときは an（What an interesting book this is!）。複数形なら a は付けない。',
      },
      {
        question: '「彼らはなんて親切な少年たちなのでしょう。」を英語にしなさい。',
        wrongAnswer: 'What a kind boys they are!',
        trapExplanation: 'What のあとには必ず a が入ると型で覚えてしまっているため、名詞が複数形でも a を付けてしまう。',
        correctAnswer: 'What kind boys they are!',
        correctExplanation:
          'a / an は「数えられる名詞の単数」に付く冠詞なので、複数形の boys には付けられない。What kind boys they are! が正しい。数えられない名詞も同じで、What good news it is! のように a を付けない。',
      },
    ],
  },

  {
    id: 'eigo_s186',
    subject: 'eigo',
    examType: 'chugaku',
    title: '感嘆文②：How で始まる感嘆文',
    description: '名詞をふくまない感嘆文 How 〜! の語順を、疑問文との区別まで含めて習得する',
    order: 686,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'How ＋ 形容詞（副詞）＋ 主語 ＋ 動詞 ! の語順。',
      'How のあとに名詞は入らない。a / an も付かない。',
      '主語と動詞は疑問文の語順にしない（× How fast is he!）。',
      '文末の主語＋動詞は省略できる（How beautiful!）。',
      '副詞を使えば How fast he runs! のように動作の様子も表せる。',
    ],
    sections: [
      {
        heading: 'How の感嘆文の語順',
        body: `名詞をふくまず、「なんて〜だろう」と性質や様子だけを言うときは How で始める。

■ 基本の語順
How ＋ 形容詞または副詞 ＋ 主語 ＋ 動詞 !

例）How beautiful this flower is!（この花はなんて美しいのでしょう）
例）How kind she is!（彼女はなんて親切なのでしょう）
例）How tall he is!（彼はなんて背が高いのでしょう）
例）How fast he runs!（彼はなんて速く走るのでしょう）
例）How well she plays the piano!（彼女はなんて上手にピアノをひくのでしょう）

■ 形容詞と副詞のどちらも使える
be動詞の文なら形容詞（How kind she is!）、一般動詞の文なら副詞（How fast he runs!）が入る。

■ ふつうの文からの作り方
This flower is very beautiful.
①very beautiful の very を how に置きかえる
②How beautiful を文の先頭へ
③残った this flower is をうしろに置き、文末を ! にする
→ How beautiful this flower is!

★ ポイント：How のうしろに来るのは一語（形容詞か副詞）だけ。名詞をつづけたくなったら、それは What の感嘆文である。`,
        figureId: 'lf_eigoext05_186',
      },
      {
        heading: '疑問文の語順にしない',
        body: `How で始まる文には疑問文もあるので、語順の区別がとても大切である。

■ 感嘆文（主語 → 動詞の順）
How fast he runs!（彼はなんて速く走るのでしょう）
How old this temple is!（このお寺はなんて古いのでしょう）
主語と動詞はふつうの文の順のまま。

■ 疑問文（動詞・助動詞 → 主語の順）
How fast does he run?（彼はどれくらい速く走りますか）
How old is this temple?（このお寺はどれくらい古いのですか）
be動詞や助動詞が主語の前に出る。

■ まちがえやすい形
× How fast is he!（疑問文の語順になっている）
○ How fast he runs!（一般動詞の文）
○ How fast he is!（「彼はなんて足が速いのだろう」＝形容詞 fast）

■ 省略した形
How beautiful!（なんて美しいのでしょう）
How kind of you!（ご親切に）
How nice!（すてきですね）
会話では主語と動詞を省略した形がよく使われる。

■ How + many / much の例外
How many books he has!（彼はなんてたくさんの本を持っているのだろう）
数や量をたずねる many / much は、名詞が続いても How を使う。これは次のセッションで確認する。

⚠ 注意：文末の記号でも見分けられる。? なら疑問文、! なら感嘆文。読解でも、記号を先に見ると意味を取りちがえない。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼はなんて速いランナーなのでしょう。」を英語にしなさい。',
        wrongAnswer: 'How a fast runner he is!',
        trapExplanation: 'How ＝「なんて」という訳だけで覚えているため、名詞（runner）が入っていても How で始めてしまう。',
        correctAnswer: 'What a fast runner he is!',
        correctExplanation:
          '名詞（runner）がふくまれるので What の感嘆文を使う。How のあとに来るのは形容詞か副詞ひとつだけで、名詞や a / an は入らない。同じ内容を How で言うなら How fast he runs!（彼はなんて速く走るのでしょう）となる。',
      },
      {
        question: '「このお寺はなんて古いのでしょう。」を英語にしなさい。',
        wrongAnswer: 'How old is this temple!',
        trapExplanation: 'How old is 〜? という疑問文の形になじんでいるため、感嘆文でも be動詞を主語の前に出してしまう。',
        correctAnswer: 'How old this temple is!',
        correctExplanation:
          '感嘆文では主語と動詞をふつうの語順（主語→動詞）のまま置く。How old is this temple? としてしまうと「このお寺はどれくらい古いのですか」という疑問文になる。文末が ! か ? かも、あわせて確認する。',
      },
    ],
  },

  {
    id: 'eigo_s187',
    subject: 'eigo',
    examType: 'chugaku',
    title: '感嘆文③：What と How の使い分け',
    description: '名詞があるかどうかで What と How を選び分け、省略形や例外にも対応できるようにする',
    order: 687,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '名詞があれば What、なければ How。これが最大の見分け方。',
      'What ＋ (a/an) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞 !',
      'How ＋ 形容詞・副詞 ＋ 主語 ＋ 動詞 !',
      'How many / How much は名詞が続いても How を使う。',
      '同じ内容を What と How の両方で言い表せることがある。',
    ],
    sections: [
      {
        heading: '名詞があるかどうかで決める',
        body: `感嘆文で What と How のどちらを使うかは、文の中に名詞があるかどうかで決まる。手順にしてしまえば迷わない。

■ 手順① 「なんて〜」の部分に名詞があるか
ある → What ／ ない → How

■ 手順② 語順を当てはめる
What ＋ (a / an) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞 !
How ＋ 形容詞・副詞 ＋ 主語 ＋ 動詞 !

■ 同じ内容を両方で言う
彼はなんてよい野球選手なのだろう。
→ What a good baseball player he is!（名詞 player がある）
→ How well he plays baseball!（名詞がなく、副詞 well を使う）

これはなんて簡単な問題なのだろう。
→ What an easy question this is!
→ How easy this question is!

意味はほぼ同じでも、名詞を使うか使わないかで What と How が入れかわる。書きかえ問題で頻出する。

■ もとの文にもどして考える
He is a very good player.（very ＋ 形容詞 ＋ 名詞）→ What
He plays very well.（very ＋ 副詞）→ How
「very が付いている語が名詞のかたまりの中にあるか」で判断するのがこつである。

★ ポイント：very を what / how に置きかえて前に出す、という作り方を覚えれば、どちらを使うかも自然に決まる。`,
      },
      {
        heading: '例外と省略',
        body: `いくつか気をつけたい形がある。

■ How many / How much は名詞が続いても How
例）How many books he has!（彼はなんてたくさんの本を持っているのだろう）
例）How much money she has!（彼女はなんてたくさんのお金を持っているのだろう）
many・much は数や量を表す語で、how と結びついてひとかたまりになるため、名詞が続いても How のままである。× What many books は誤り。

■ 主語＋動詞の省略
What a nice day!（なんていい天気だろう）
What a surprise!（なんておどろき）
How nice!（すてきですね）
How beautiful!（なんて美しいのだろう）
会話ではむしろ省略形のほうがよく使われる。省略しても文末の ! は必要である。

■ How ＋ of you の形
How kind of you!（ご親切にありがとうございます）
That's very kind of you. と同じ意味で、お礼の決まり文句になっている。

■ 感嘆文と疑問文の見分け
What a beautiful garden this is!（感嘆文・! で終わる）
What is this?（疑問文・? で終わる）
How old this temple is!（感嘆文・主語→動詞）
How old is this temple?（疑問文・動詞→主語）

⚠ 注意：What と How のどちらでも書ける内容でも、問題に語数の指定や語群がある場合は、指定に合うほうを選ぶ。並べかえ問題では、a があれば What、なければ How と当たりを付けられる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女はなんて上手に歌うのでしょう。」を英語にしなさい。',
        wrongAnswer: 'What well she sings!',
        trapExplanation: '感嘆文といえば What と覚えているため、名詞がない文にも What を使ってしまう。well が副詞であることに注目できていない。',
        correctAnswer: 'How well she sings!',
        correctExplanation:
          '名詞がなく、副詞 well で「上手に」と言っているので How を使う。How ＋ 副詞 ＋ 主語 ＋ 動詞 ! の語順である。名詞を使って言いかえるなら What a good singer she is! となり、このときは What になる。',
      },
      {
        question: '「彼はなんてたくさんの本を持っているのでしょう。」を英語にしなさい。',
        wrongAnswer: 'What many books he has!',
        trapExplanation: '名詞（books）があるから What、という覚え方だけで判断してしまう。many が how と結びつく語であることを知らない。',
        correctAnswer: 'How many books he has!',
        correctExplanation:
          'many・much は how と組になって「どれくらい多くの」を表すので、名詞が続いても How で始める。How many books / How much money はひとかたまりで動く。名詞があれば What という原則の、数少ない例外として覚えておく。',
      },
    ],
  },

  // ───────────────────── 10. 付加疑問・否定疑問（s188〜s190） ─────────────────────
  {
    id: 'eigo_s188',
    subject: 'eigo',
    examType: 'chugaku',
    title: '付加疑問文①：「〜ですね」の作り方',
    description: '肯定文には否定、否定文には肯定を付ける付加疑問の作り方を正確に身につける',
    order: 688,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '付加疑問は「本文, 反対の形＋代名詞?」の形で「〜ですね」を表す。',
      '本文が肯定なら否定の短縮形、否定なら肯定の形にする。',
      '使う語は本文と同じ種類（be動詞→be動詞、助動詞→助動詞、一般動詞→do / does / did）。',
      '主語は必ず代名詞にかえる（Tom → he、this book → it）。',
      '短縮形を使うのが原則（is not → isn\'t）。',
    ],
    sections: [
      {
        heading: '付加疑問文の作り方',
        body: `文の終わりに短い疑問の形をつけて「〜ですね」「〜でしょう？」と念をおす言い方を付加疑問文という。作り方は三つの手順で決まる。

■ 手順① 本文が肯定か否定かを見る
肯定文 → 否定の付加疑問を付ける
否定文 → 肯定の付加疑問を付ける

■ 手順② 本文で使われている語の種類をそろえる
be動詞の文 → be動詞を使う
　You are tired, aren't you?（疲れているんですね）
　Tom isn't busy, is he?（トムはいそがしくないんですね）
助動詞の文 → 同じ助動詞を使う
　You can swim, can't you?
　He won't come, will he?
一般動詞の文 → do / does / did を使う
　You like music, don't you?
　She plays tennis, doesn't she?
　They went home, didn't they?

■ 手順③ 主語を代名詞にかえる
Tom can swim, can't he?（Tom → he）
This book is interesting, isn't it?（This book → it）
Ken and Tom are friends, aren't they?

★ ポイント：「本文の反対」「同じ種類の語」「代名詞」の三つを順に確かめれば、どんな文にも付けられる。`,
        figureId: 'lf_eigoext05_188',
      },
      {
        heading: '書き方の細かい決まり',
        body: `付加疑問には形の上の決まりがいくつかある。細かいところで減点されやすいので、ここで確認しておく。

■ コンマと疑問符
本文と付加疑問の間にはコンマを入れ、文末は ? で終わる。
例）You are a student, aren't you?
コンマを落とす、ピリオドで終える、といったミスに注意する。

■ 短縮形を使う
否定の付加疑問は必ず短縮形にする。
○ isn't it? ／ don't you? ／ can't he?
△ is it not? は古い言い方で、ふつう使わない。

■ am の場合だけ特別
I am late, aren't I?（私は遅れていますね）
amn't という形はないので、aren't I? を使うと決まっている。

■ 否定文に付けるとき
She can't drive, can she?（彼女は運転できないんですね）
They didn't come, did they?
本文が否定なら、付加疑問は肯定の形になる。not を二つ重ねてはいけない。

■ There is 〜. の文
There is a park near here, isn't there?
主語のように見える there をそのまま使う。

⚠ 注意：付加疑問は「相手に確かめる」ための言い方なので、話しことばでよく使われる。読解では、話し手が相手の同意を求めている場面だと分かる手がかりになる。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは中学生ですよね。」を英語にしなさい。（You are a junior high school student, ＿＿＿ ＿＿＿?）',
        wrongAnswer: "You are a junior high school student, don't you?",
        trapExplanation: '付加疑問といえば don\'t you? という形をいちばんよく見かけるため、本文が be動詞の文であることを確かめずに付けてしまう。',
        correctAnswer: "You are a junior high school student, aren't you?",
        correctExplanation:
          '付加疑問には、本文と同じ種類の語を使う。本文が be動詞（are）の文なので、付加疑問も be動詞を使って aren\'t you? とする。do / does / did を使うのは、本文が一般動詞の文のときだけである。',
      },
      {
        question: '「この自転車はあなたのものですね。」を英語にしなさい。（This bike is yours, ＿＿＿ ＿＿＿?）',
        wrongAnswer: "This bike is yours, isn't this bike?",
        trapExplanation: '主語をそのまま書き写してしまう。付加疑問の主語は代名詞にする、という決まりを知らないと起こるミス。this を残して isn\'t this? としてしまう例も多い。',
        correctAnswer: "This bike is yours, isn't it?",
        correctExplanation:
          '付加疑問の主語は必ず代名詞にかえる。This bike は「もの」なので it になる。Tom → he、Ken and Tom → they、your sister → she のように置きかえる。動詞の種類（is）はそのまま使い、否定の短縮形にする。',
      },
    ],
  },

  {
    id: 'eigo_s189',
    subject: 'eigo',
    examType: 'chugaku',
    title: '付加疑問文②：答え方と特別な形',
    description: '付加疑問への答え方の原則と、命令文・Let\'s に付く特別な形を身につける',
    order: 689,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '答えは付加疑問ではなく「事実」に合わせる。中身が肯定なら Yes、否定なら No。',
      '日本語の「はい・いいえ」とずれることがあるので、事実で判断する。',
      '命令文には will you? を付ける（Open the window, will you?）。',
      'Let\'s 〜. には shall we? を付ける（Let\'s go, shall we?）。',
      'Don\'t 〜. にも will you? を付ける。',
    ],
    sections: [
      {
        heading: '答え方は「事実」で決める',
        body: `付加疑問への答え方は、付いている疑問の形ではなく、実際にどうなのかという事実で決まる。

■ 原則
そうである → Yes, ＋ 肯定
そうでない → No, ＋ 否定

例）You can swim, can't you?（泳げますよね）
　泳げる → Yes, I can.
　泳げない → No, I can't.

例）Tom can't swim, can he?（トムは泳げないんですよね）
　泳げない → No, he can't.
　泳げる → Yes, he can.

■ 日本語とずれる場合
「トムは泳げないんですよね」に対して、日本語では「はい、泳げません」と答える。しかし英語では、泳げないという事実に合わせて No, he can't. となる。日本語の「はい」につられて Yes, he can't. と書くのは、二重に誤りである（Yes のあとに否定は来ない）。

■ 覚え方
Yes のあとは必ず肯定、No のあとは必ず否定。この組み合わせがくずれることはない。
○ Yes, he can. ／ ○ No, he can't.
× Yes, he can't. ／ × No, he can.

★ ポイント：付加疑問の答えは、日本語に訳さず「事実はどちらか」だけを考える。これで確実に正解できる。`,
      },
      {
        heading: '命令文と Let\'s の付加疑問',
        body: `命令文や Let's 〜. にも付加疑問を付けられる。ただし、付ける形が特別に決まっている。

■ 命令文 → will you?
例）Open the window, will you?（窓を開けてくれませんか）
例）Wait here, will you?（ここで待っていてくれますか）
命令の調子をやわらげ、「〜してくれませんか」という依頼に近い言い方になる。won't you? を使うと、よりていねいなさそいになる。

■ 否定の命令文 → will you?
例）Don't tell anyone, will you?（だれにも言わないでね）
否定の命令文でも、付けるのは will you? である。

■ Let's 〜. → shall we?
例）Let's go to the park, shall we?（公園に行きましょうよ、ね）
例）Let's take a break, shall we?（ひと休みしましょうか）
Let's は「いっしょに〜しよう」という誘いなので、shall we? が対応する。

■ 三つをまとめて覚える
ふつうの文 → 本文と同じ種類の語で作る
命令文（Don't もふくむ）→ will you?
Let's 〜. → shall we?

■ I am の文
I'm right, aren't I?（私は正しいですよね）
amn't という形がないため、aren't I? を使う。

⚠ 注意：命令文に do you? や can you? を付けるのは誤り。「命令文には will you?、Let's には shall we?」と、二つセットで暗記する。`,
      },
    ],
    trapExamples: [
      {
        question: '「Tom can\'t play the guitar, can he?」に、「はい、ひけません」という内容で答えなさい。',
        wrongAnswer: "Yes, he can't.",
        trapExplanation: '日本語の「はい、ひけません」の「はい」につられて Yes を選んでしまう。英語では Yes のあとに否定文は来ない。',
        correctAnswer: "No, he can't.",
        correctExplanation:
          '英語では、事実が「できない」なら No、「できる」なら Yes と答える。日本語の「はい・いいえ」は相手の言ったことへの同意を表すが、英語は事実そのものに合わせる。Yes ＋ 肯定、No ＋ 否定の組み合わせはくずれない。',
      },
      {
        question: '「いっしょに公園へ行きましょうよ、ね。」を英語にしなさい。（Let\'s go to the park, ＿＿＿ ＿＿＿?）',
        wrongAnswer: "Let's go to the park, will you?",
        trapExplanation: '命令文に will you? を付けると覚えたため、原形で始まるという点が似ている Let\'s の文にも同じものを付けてしまう。',
        correctAnswer: "Let's go to the park, shall we?",
        correctExplanation:
          "Let's 〜. に付ける付加疑問は shall we? と決まっている。will you? を付けるのは命令文（Open the door, will you? / Don't be late, will you?）である。Let's ＝ shall we、命令文 ＝ will you と対にして覚える。",
      },
    ],
  },

  {
    id: 'eigo_s190',
    subject: 'eigo',
    examType: 'chugaku',
    title: '否定疑問文：Don\'t you 〜? の形と答え方',
    description: '「〜ではないのですか」とたずねる文の作り方と、日本語とずれる答え方を確実にする',
    order: 690,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '否定疑問文は Don\'t / Aren\'t / Can\'t など、短縮形で文を始める。',
      '意味は「〜ではないのですか・〜しないのですか」。おどろきや念おしを表す。',
      '答えは事実で決める。そうなら Yes、そうでないなら No。',
      '日本語の「はい・いいえ」と逆になることが多いので、訳に引きずられない。',
      'Yes ＋ 肯定／No ＋ 否定の組み合わせは絶対にくずれない。',
    ],
    sections: [
      {
        heading: '否定疑問文の作り方',
        body: `「〜ではないのですか」「〜しないのですか」とたずねる文を否定疑問文という。ふつうの疑問文の先頭を否定の短縮形にするだけで作れる。

■ 一般動詞の文
Do you like natto? → Don't you like natto?（納豆が好きではないのですか）
Does he play soccer? → Doesn't he play soccer?
Did you go there? → Didn't you go there?

■ be動詞の文
Are you tired? → Aren't you tired?（疲れていないのですか）
Is this your bag? → Isn't this your bag?

■ 助動詞の文
Can you swim? → Can't you swim?（泳げないのですか）
Will you come? → Won't you come?（来ないのですか）

■ 短縮形で書く
否定疑問文では、短縮形を使うのが決まりである。
○ Don't you 〜? ／ × Do not you 〜?
主語の前に not だけを置く形は使わない。

■ 使われる場面
・おどろき：Don't you know Ken?（ケンを知らないの？）
・念おし：Isn't it cold today?（今日は寒くない？）
・さそい：Won't you come with us?（いっしょに来ませんか）
Won't you 〜? はさそいの決まり文句としても使われる。

★ ポイント：形は「短縮形＋主語＋…?」。ふつうの疑問文の頭を否定にするだけと考えればよい。`,
      },
      {
        heading: '答え方は日本語と逆になる',
        body: `否定疑問文でいちばん大切なのは答え方である。英語では、聞かれ方に関係なく「事実」に合わせて Yes / No を決める。

■ 原則
そうである（する）→ Yes, ＋ 肯定
そうでない（しない）→ No, ＋ 否定

例）Don't you like tomatoes?（トマトは好きではないのですか）
　好きだ → Yes, I do.（日本語では「いいえ、好きです」）
　好きではない → No, I don't.（日本語では「はい、好きではありません」）

例）Aren't you hungry?（おなかはすいていないのですか）
　すいている → Yes, I am.（いいえ、すいています）
　すいていない → No, I'm not.（はい、すいていません）

■ 日本語との差
日本語の「はい・いいえ」は、相手の言ったことに同意するかどうかを表す。英語の Yes / No は、事実がどうであるかだけを表す。だから否定疑問文では、両者がしばしば逆になる。

■ まちがえないための手順
①質問の否定は無視して、「事実はどうか」だけを考える
②事実が肯定なら Yes、否定なら No
③Yes のあとは肯定、No のあとは否定でそろえる

■ 付加疑問文でも同じ
You aren't busy, are you? — Yes, I am.（いいえ、いそがしいです）
考え方はまったく同じである。

⚠ 注意：Yes, I don't. や No, I do. のような組み合わせは、どんな場合でも誤り。答えを書いたら、Yes と肯定、No と否定がそろっているかを必ず確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '「Don\'t you like natto?」に、「いいえ、好きです」という内容で答えなさい。',
        wrongAnswer: "No, I do.",
        trapExplanation: '日本語の「いいえ」につられて No を選んでしまう。さらに No のあとに肯定の I do を続けており、組み合わせもくずれている。',
        correctAnswer: 'Yes, I do.',
        correctExplanation:
          '英語では事実に合わせて答える。好きだという事実があるので Yes、そのあとは肯定の I do。日本語の「いいえ、好きです」とはちょうど逆になる。質問の Don\'t は無視して、「好きか、好きでないか」だけを考えるとまちがえない。',
      },
      {
        question: '「あなたは中国語を話さないのですか。」を英語にしなさい。',
        wrongAnswer: 'Do not you speak Chinese?',
        trapExplanation: '否定文は not を使うと覚えているため、Do のうしろに not をそのまま置いてしまう。否定疑問文では短縮形を使うという決まりを知らない。',
        correctAnswer: "Don't you speak Chinese?",
        correctExplanation:
          '否定疑問文は Don\'t / Doesn\'t / Didn\'t / Aren\'t / Can\'t のように短縮形で文を始める。Do not you 〜? という形は使わない。be動詞なら Aren\'t you 〜?、助動詞なら Can\'t you 〜? と、すべて同じ作り方である。',
      },
    ],
  },
];
