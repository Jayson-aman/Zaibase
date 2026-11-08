import type { Lesson } from './lesson-types';

// 立命館高校・立命館宇治高校・立命館守山高校 対策（高校受験・英語）単元12本（ritsumeikan_eigo_01〜12、order 240001〜240012）。
// 図解は lesson-figs-ritsumeikan-eigo.ts（lf_ritsumeikan_eigo_01〜12）。
//
// ■ 入試プロフィール（2026/11/8 時点。ja.wikipedia.org の各校ページで確かめられた範囲だけ）
//   ・立命館高校（京都府長岡京市）：学校法人立命館の併設型中高一貫校。普通科。男女共学。
//   ・立命館宇治高校（京都府宇治市）：2003年に文部科学省のスーパーイングリッシュランゲージハイスクール（SELHi）に指定。
//     IB・IMコース（国語以外を英語で学ぶ）などがあり、英語・国際教育に力を入れている。
//   ・立命館守山高校（滋賀県守山市）：2006年に守山市から学校法人立命館へ移管して開校。海外研修・ユネスコスクール認定など国際教育に取り組む。
//   ・3校とも立命館大学などへの高大連携・一貫教育を特色にしている。
//   ■ 出典で確認できなかった点（断定しない）：入試の試験時間・配点・大問数・合格最低点・英語の出題形式の比率
//     （長文・文法・整序・英作文の配分）・記述の字数・リスニングの有無。学校の公式サイトが許可リスト外で取得できなかった。
//   ■ このため本単元は、高校入試の英語で一般に差がつく分野（長文の読み方・内容一致・不定詞/動名詞・関係代名詞・
//     受け身・現在完了・比較・間接疑問文・分詞・整序・和文英訳と自由英作文）を、中学範囲まで深く扱う自作教材である。
//     実際の過去問・市販教材の文章は一切写していない（英文はすべて自作）。リスニングは扱わない。
export const lessonsRitsumeikan_eigo: Lesson[] = [
  // 1. 長文①：つなぎ語と指示語
  {
    id: 'ritsumeikan_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：長文①つなぎ語と指示語で流れをつかむ',
    description: 'However・So・For example などのつなぎ語と、it・this・they などの指示語から、長文の道すじを読み取る',
    intro:
      '長い英文を前から全部訳そうとして、途中で「結局なんの話？」となった経験はありませんか。実は長文には道しるべがあります。つなぎ語は「話がどちらへ曲がるか」を、指示語は「いま何の話をしているか」を教えてくれます。この2つを押さえると、知らない単語があっても大筋は読めます。',
    order: 240001,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '逆接（話が反対に曲がる）：But／However。結果：So／Therefore。理由：Because。例：For example。追加：Also／In addition。',
      'つなぎ語は「前の文と後の文の関係」を表すので、空所は前後の2文の意味（プラスかマイナスか）を比べて選ぶ。',
      '指示語（it／this／that／they／them／these／those）は、直前の名詞か、直前の文全体を指す。',
      'it・this・that は単数、they・them・these・those は複数。人か物かでも絞れる。',
      '指す先を見つけたら、その語に入れかえて読み、意味が通るかを必ず確かめる。',
    ],
    sections: [
      {
        heading: 'なぜつなぎ語を見ると流れが読めるのか',
        body: `英文は「主張 → 理由 → 例 → まとめ」のような順に組み立てられます。書き手は、次の文が前の文とどんな関係かを、つなぎ語ひとつで読み手に知らせます。ですから、つなぎ語を見れば、その先の内容を半分予想できるのです。

■ よく出るつなぎ語
・逆接（反対の内容がくる）：But／However（しかし）。後ろには前と反対のプラス・マイナスが続く。
・結果：So／Therefore（だから）。前が原因、後ろが結果。
・理由：Because（なぜなら）。後ろが理由。
・例：For example（たとえば）。前の主張をくわしく言いかえる。
・追加：Also／In addition（さらに）。同じ向きの内容を足す。
・対比：On the other hand（一方で）。前と別の面を見せる。

■ 指示語はなぜ使われるのか
英語は同じ名詞のくり返しをきらいます。2回目からは it や they のような代名詞で受けます。だから it は「前に出てきた単数の物」を、they は「前に出てきた複数の物（人）」を指す、という決まりがあります。this と that は、名詞だけでなく、直前の文の内容まるごとを指すこともあります。

■ 指す先のさがし方
①その語が単数か複数かを見る（it／this／that＝単数、they／them＝複数）。②人か物かを見る。③直前の1〜2文から候補を拾い、指示語の位置に入れかえて読み、意味が通る方を選ぶ。

★ ここがポイント：**つなぎ語は「前後の文の関係」を表す**ので、前後の意味が同じ向きか反対かを比べて選ぶ。**指示語は直前から探し、入れかえて意味が通るかで確かめる。**`,
        figureId: 'lf_ritsumeikan_eigo_01',
      },
      {
        heading: 'やってみよう：例題',
        body: `次の英文を読んで、あとの問いに答えなさい。

Mika wanted to join the school choir. (A) she was afraid of singing in front of other people. Her friend Ken told her, "Everyone feels nervous at first." So she went to the first practice. (B) was easier than she had expected.

■ 例題1：空所(A)に入る語を選べ。（However／For example／Because／So）

【何を聞かれているか】前の文「合唱部に入りたかった」と、後ろの文「人前で歌うのがこわかった」を結ぶ語です。
【なぜこの考え方か】つなぎ語は前後の関係で決まるので、前と後ろがプラスかマイナスかを見ます。「入りたい」はプラス、「こわい」はマイナスで、向きが反対です。向きが反対のときは逆接を使います。
【ステップ1】前の文＝プラス（入りたい）。
【ステップ2】後ろの文＝マイナス（こわい）。反対の向き。
【ステップ3】選択肢を当てはめる。Because は後ろが理由になるが「入りたい理由がこわさ」では意味が通らない。So は「入りたかった、だから、こわかった」となり原因と結果がつながらない。For example は後ろが例にならない。
【答え】However
【確かめ】「入りたかった。しかし、人前で歌うのがこわかった。」と読むと自然である。
【よくあるまちがい】Because を、後ろの文の理由を言いたくなって選んでしまうこと。前後が同じ流れかどうかを先に調べる。

■ 例題2：(B)に入る文頭の語を選べ。（It／They／He／She）
【何を聞かれているか】「いちばん近い前の文で主語になれるものは何か」です。
【なぜこの考え方か】代名詞は直前の名詞を受けるので、文の主語は、単数か複数か・人か物かで決まります。was とあるので主語は単数です。
【ステップ1】直前の文は She went to the first practice. である。
【ステップ2】was easier（より簡単だった）と言えるのは、人ではなく「練習」である。
【ステップ3】practice は単数の物なので it で受ける。They は複数、He は男性、She はミカを指して「ミカが簡単だった」になってしまう。
【答え】It（the first practice を指す）
【確かめ】「最初の練習は、思っていたより簡単だった」となり、前後がつながる。
【よくあるまちがい】She を選んでしまうこと。人が主語になるとき、easier は「簡単な人」という意味になり不自然である。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) I like soccer. (　), my brother likes baseball better. の空所に入るのは、However と Because のどちらか。
答え：However。自分はサッカー、兄は野球と、対比の向きだから。

(2) Tom was tired. (　) he went to bed early. の空所に入るのは、So と But のどちらか。
答え：So。「疲れていた」が原因、「早く寝た」が結果だから。

(3) Yuki bought a new bag. She uses it every day. の it は何を指すか。
答え：a new bag（新しいかばん）。直前の文の単数の物で、「毎日使う」ことができるから。

(4) My friends came to my house. I showed them my new game. の them は何を指すか。
答え：my friends。複数の人を指していて、「見せる」相手になれるから。

全部できたら、答えの「理由」の部分まで言えるかを確かめよう。理由が言えなければ、まだ形で覚えているだけです。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① つなぎ語を、日本語の「だから」「しかし」の感覚だけで選ぶ。
→ 対策：前の文と後ろの文を、それぞれ「プラスの話」か「マイナスの話」かでメモする。同じ向きなら So／Also、反対なら However／But。

⚠ まちがい② 指示語を、いちばん近い名詞だと決めつける。
→ 近い名詞が答えとはかぎらない。this や that は、直前の文全体を指すことがある。入れかえて読んで、意味が通るかを確かめる。

⚠ まちがい③ it を、人や複数のものに当てる。
→ it は単数の物、they は複数。後ろの動詞が is か are か、was か were かで単数・複数が分かる。

⚠ まちがい④ 指示語の先を、1つの語だけで答えてしまう。
→ 「〜すること」「〜という事実」のように、文のかたまりが答えになる問題もある。問題の指示（日本語で答えよ・英語で答えよ）を確かめる。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) However と So は、前後の文の関係がどうちがうか。
(2) it と they は、何で使い分けるか。
(3) 指す先を見つけたあと、どうやって答えが正しいかを確かめるか。

【例の答え】
(1) However は後ろが前と反対の内容になる。So は前が原因で後ろが結果になる。
(2) 前に出てきた名詞が単数か複数かで使い分ける。
(3) その語に入れかえて読み、意味が通るかを確かめる。`,
      },
    ],
    trapExamples: [
      {
        question:
          'Yuki practiced the piano every day for a year. This helped her win the contest. 下線部 This は何を指すか。日本語で答えよ。',
        wrongAnswer: 'the piano（ピアノ）',
        trapExplanation:
          'This の直前にある名詞が the piano なので、いちばん近い名詞を選んでしまう。しかし「ピアノが彼女の優勝を助けた」では意味が通らない。',
        correctAnswer: 'ユキが1年間毎日ピアノを練習したこと',
        correctExplanation:
          'This は単数で、直前の文全体の内容を受けることができる。「1年間毎日ピアノを練習したこと」が優勝を助けた、と入れかえて読むと意味が通る。指示語は、近い名詞だけでなく文のかたまりを指すことがあるので、入れかえて意味を確かめる。',
      },
    ],
  },

  // 2. 長文②：内容一致
  {
    id: 'ritsumeikan_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：長文②内容一致は本文の根拠と言いかえで決める',
    description: '選択肢の言いかえを本文とつきあわせ、数・否定・限定の語を手がかりに内容一致問題を解く',
    intro:
      '内容一致の選択肢は、本文の言葉をそのまま使っているものほど危ない、という話を聞いたことはありませんか。作る側は、本文の語を使ってわざと反対の内容を作るからです。本当に合っている選択肢は、むしろ言いかえてあります。根拠を本文の中に探す読み方を身につけましょう。',
    order: 240002,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '内容一致は、選択肢を1つずつ本文に当てて、○か×かを決める。感覚で選ばない。',
      '同じ語が本文にあっても、数・時・主語・否定が入れかえられていれば×。',
      '正しい選択肢は、本文を言いかえて作られていることが多い（open→start など）。',
      '数字、no／not、only／all／always／never などの限定の語を先に確かめる。',
      '根拠にした本文の1文に線を引いてから選ぶ。根拠のない選択肢は選ばない。',
    ],
    sections: [
      {
        heading: 'なぜ「同じ語」にだまされるのか',
        body: `選択肢を作る人は、まちがいの選択肢を「それらしく」見せる必要があります。いちばん簡単なのは、本文の語をそのまま使って、数・時・主語・否定のどれかを1か所だけ変えることです。だから、本文と同じ語が並んでいる選択肢は、見た目が安心なぶん、かえって危ないのです。

反対に、正しい選択肢は、本文と同じ語だけではつまらないので、言いかえて作られます。たとえば本文が「The library opens at nine.」なら、正しい選択肢は「The library starts to be open at nine.」のような別の表現になることがあります。

■ 照合のしかた（3つの目）
①数の目：何冊・何週間・何時など。本文の数と選択肢の数が同じか。
②否定・限定の目：not／no／never、only／all／always／some。1語で意味が反対になる。
③主語・時の目：だれが、いつ。last year と ten years ago を取りちがえやすい。

■ 手順
選択肢を1つずつ、①〜③の目で本文の1文と見くらべます。合う文が本文に見つからなければ、その選択肢は×です。見つかったら、その文に線を引いて「根拠」にします。

★ ここがポイント：**本文と同じ語がある選択肢ほど、数・否定・時のどれかが入れかえられていないかを疑う。**根拠の1文を本文から見つけて選ぶ。`,
        figureId: 'lf_ritsumeikan_eigo_02',
      },
      {
        heading: 'やってみよう：例題',
        body: `次の英文を読んで、あとの問いに答えなさい。

Sota's town has a small library. It opens at nine in the morning and closes at five, except on Mondays. Students can borrow up to five books for two weeks. Last year, the library started a new event. Sota and other volunteers read picture books to children every Saturday afternoon.

■ 例題1：本文の内容に合うものを1つ選べ。
ア The library is open on Mondays.
イ Students can borrow books for five weeks.
ウ Volunteers read picture books to children on Saturday afternoons.
エ The library started the event ten years ago.

【何を聞かれているか】本文に書いてあることと同じ内容の選択肢を、1つだけ選びます。
【なぜこの考え方か】まちがいの選択肢は、本文の語を使って数や時を入れかえてあるので、1つずつ本文の文と照らし合わせる必要があります。感じで選ぶと、同じ語にだまされます。
【ステップ1】アを調べる。本文は「except on Mondays（月曜日を除く）」なので、月曜日は開いていない。アは×。
【ステップ2】イを調べる。本文は「up to five books for two weeks」で、5冊まで2週間。5週間は数が入れかえられている。イは×。
【ステップ3】ウを調べる。本文は「read picture books to children every Saturday afternoon」で、選択肢と同じ内容である。ウは○。
【ステップ4】エを調べる。本文は「Last year」で、去年。10年前ではない。エは×。
【答え】ウ
【確かめ】ウだけが、本文の1文に根拠を見つけられる。ほかの3つは、本文の数や時とくいちがう。
【よくあるまちがい】イを、five という語が本文にあるからという理由で選んでしまうこと。five は「冊数」であって「週数」ではない。

■ 例題2：次の文が本文と合っているかを、○か×で答え、理由を言え。
Sota is the only person who reads picture books to the children.
【何を聞かれているか】「only（ただ1人）」という限定が本文と合うかです。
【なぜこの考え方か】only や all は、ひとつでも例外があると×になる強い言い方なので、本文の人数の書き方を確かめます。
【ステップ1】本文は「Sota and other volunteers」と書いている。
【ステップ2】「Sota と ほかのボランティア」なので、読んでいるのはソタだけではない。
【答え】×（ほかのボランティアもいる）
【確かめ】「other volunteers」が根拠で、only person とは両立しない。
【よくあるまちがい】Sota が出てくるので○にしてしまうこと。人名が合っていても、only が合わなければ×である。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) 本文が「Tom has two brothers.」のとき、「Tom has three brothers.」は○か×か。
答え：×。数が入れかえられているから。

(2) 本文が「She sometimes walks to school.」のとき、「She always walks to school.」は○か×か。
答え：×。sometimes（ときどき）が always（いつも）に強められているから。

(3) 本文が「The festival is held in August.」のとき、「The festival takes place in summer.」は○か×か。
答え：○。August は夏の月で、is held と takes place は同じ意味の言いかえだから。

(4) 本文が「He didn't eat breakfast.」のとき、「He ate breakfast.」は○か×か。
答え：×。否定が肯定に変えられているから。

言いかえの○と、入れかえの×の見分けがつくようになったら完成です。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 本文と同じ語が多い選択肢を、正解だと感じて選ぶ。
→ 同じ語があるほど、1か所だけ入れかえた選択肢の可能性がある。数・否定・時の3つの目で確かめる。

⚠ まちがい② 常識で選ぶ。
→ 本文に書いていないことは、常識的に正しくても×。「本文の内容に合うもの」という指示を守る。

⚠ まちがい③ 範囲を広げすぎる。
→ 本文が「ときどき」なら「いつも」は×。「少し」を「たくさん」に変えるのも同じ。程度の語を見落とさない。

⚠ まちがい④ 全体を読まずに、最初の数行だけで決める。
→ 根拠は本文のどこにあるかが分からない。選択肢ごとに、本文のどの文が根拠かを探す。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) なぜ「本文と同じ語がある選択肢」は危ないのか。
(2) 内容一致の選択肢を調べるとき、どんな3つの点を見るか。
(3) 根拠を見つけたら、どうするか。

【例の答え】
(1) まちがいの選択肢は、本文の語を使って数・否定・時を1か所だけ入れかえて作られるから。
(2) 数、否定や限定の語、主語と時。
(3) 根拠の1文に線を引いてから選ぶ。根拠が見つからない選択肢は選ばない。`,
      },
    ],
    trapExamples: [
      {
        question:
          '本文：The library opens at nine in the morning and closes at five, except on Mondays. 次の文は本文と合っているか。「The library is open from nine to five every day.」',
        wrongAnswer: '合っている',
        trapExplanation:
          '「nine」「five」「opens」「closes」という本文と同じ語がそろっているため、安心して○にしてしまう。しかし every day が入れかえられている。',
        correctAnswer: '合っていない',
        correctExplanation:
          '本文には「except on Mondays（月曜日を除く）」とあるので、毎日開いているわけではない。時刻が合っていても、every day の部分が本文とくいちがう。同じ語が並んでいても、限定の語（every day）を本文と照らして確かめる。',
      },
    ],
  },

  // 3. 不定詞
  {
    id: 'ritsumeikan_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：不定詞の3用法を見分ける',
    description: '名詞的・形容詞的・副詞的の3用法を、to の前の形から見分け、It is … to ～ の文も使いこなす',
    intro:
      '「to ＋ 動詞のもと」の形は、英語に何度も出てきます。でも、日本語にすると「〜すること」「〜するための」「〜するために」と形が変わるので、混ざってしまう人が多いのです。実は、to の前に何があるかを見れば、3つの用法を見分けられます。',
    order: 240003,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '名詞的用法：「〜すること」。主語・目的語・補語になる（want to ～、to read is ～）。',
      '形容詞的用法：「〜するための／〜すべき」。名詞のすぐ後ろに置いて、その名詞を説明する。',
      '副詞的用法：「〜するために（目的）」「〜して（感情の原因）」。動詞や形容詞を説明する。',
      '見分け方：to の前が「名詞」なら形容詞的、「完全な文」なら副詞的、「want など」なら名詞的、を最初に疑う。',
      'It is 形容詞 (for 人) to ～.：「（人にとって）〜することは…だ」。it は形式的な主語で、to 以下が本当の主語。',
    ],
    sections: [
      {
        heading: 'なぜ「to の前」を見ると3用法が分かれるのか',
        body: `不定詞（to ＋ 動詞のもと）は、はたらきによって、名詞・形容詞・副詞のどれかの役を引き受けます。どの役かは、to ～ が「文の中のどこにはまっているか」で決まります。

■ 名詞的用法（〜すること）
文の中で、名詞が入る場所（主語・目的語・補語）に入っている。
例）I want to be a doctor.（私は医者になりたい）
want は「何を」が必要な動詞なので、to be a doctor が「〜すること」という目的語になっている。

■ 形容詞的用法（〜するための）
名詞のすぐ後ろに置かれて、その名詞を説明する。
例）I have a lot of homework to do today.（私は今日、するべき宿題がたくさんある）
to do は homework を後ろから説明している。

■ 副詞的用法（〜するために／〜して）
動詞や形容詞を説明する。文がすでに完成しているときに、あとから足される。
例）She went to the library to study.（彼女は勉強するために図書館へ行った）
She went to the library でもう文は完成している。to study は「なぜ行ったか」を足している。
例）I was glad to see you.（私はあなたに会えてうれしかった）
glad（うれしい）という感情の原因を、to see you が説明している。

■ It is … to ～ の文
例）It is important for us to read books.（私たちにとって、本を読むことは大切だ）
it は形式的な主語で、本当の主語は to read books。for us は「不定詞の動作をする人」を表す。主語が長いと文が頭でっかちになるので、先に It で受けておく。

★ ここがポイント：**to の前が名詞なら形容詞的、文がすでに完成しているなら副詞的、動詞が「何を」を求めているなら名詞的。**to ～ が「文のどこに入っているか」で見分ける。`,
        figureId: 'lf_ritsumeikan_eigo_03',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：下線部の不定詞の用法を答えよ。
(1) I want to be a doctor.
(2) I have a lot of homework to do today.
(3) She went to the library to study.
(4) I was glad to see you.

【何を聞かれているか】to ～ が「名詞的／形容詞的／副詞的」のどれかを答えます。
【なぜこの考え方か】用法は、to ～ が文のどこにはまっているかで決まるので、to の前を見ます。日本語にして考えると、「〜すること」と「〜するために」を取りちがえやすいからです。
【ステップ1】(1) want は「何を」が必要な動詞で、to be a doctor がその「何を」にあたる。→ 名詞的（〜すること）。
【ステップ2】(2) to do の前に homework という名詞がある。homework を後ろから説明している。→ 形容詞的（〜するための）。
【ステップ3】(3) She went to the library でもう文が完成している。to study は目的をあとから足している。→ 副詞的（〜するために）。
【ステップ4】(4) glad という感情を表す語の直後にあり、うれしい原因を説明している。→ 副詞的（〜して）。
【答え】(1) 名詞的 (2) 形容詞的 (3) 副詞的 (4) 副詞的
【確かめ】(2) を「宿題をするために」と訳すと意味が通らない。(1) を「医者になるために」と訳すと want の目的語がなくなる。
【よくあるまちがい】(2) を「〜するために」と訳して副詞的にしてしまうこと。名詞のすぐ後ろにあるなら形容詞的を疑う。

■ 例題2：「私たちにとって、毎日運動することは大切です。」を、It で始めて英語にせよ。
【何を聞かれているか】日本語の主語「運動すること」を、形式的な主語 It を使った文に直します。
【なぜこの考え方か】「運動すること」という長い主語を先に置くと文が重くなるので、It を主語にして、本当の主語 to ～ を後ろに回します。
【ステップ1】「大切です」→ is important。
【ステップ2】「私たちにとって」→ for us（不定詞の動作をする人は for ＋ 人）。
【ステップ3】「運動すること」→ to exercise。「毎日」→ every day。
【答え】It is important for us to exercise every day.
【確かめ】for us を to の直前に置けば、「us が exercise する」という関係が分かる。
【よくあるまちがい】for us を important の前に置いたり、of us と書いたりすること。ここでは for us が正しい。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) I need something to drink. の to drink の用法は？
答え：形容詞的。something という名詞を後ろから説明していて、「飲むための何か」だから。

(2) He studied hard to pass the exam. の to pass の用法は？
答え：副詞的（目的）。He studied hard で文が完成していて、「合格するために」を足しているから。

(3) To read English books is fun. の To read English books の用法は？
答え：名詞的。文の主語になっていて、「英語の本を読むこと」だから。

(4) It is easy ( ) me to swim. の空所に入る語は？
答え：for。to swim をする人（me）を表すから。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 「〜するために」と訳せるものは、すべて副詞的だと思う。
→ 名詞のすぐ後ろにある to ～ は形容詞的。「〜するための」で意味が通るかを確かめる。

⚠ まちがい② to のあとの動詞を、ing や ed にしてしまう。
→ 不定詞の to のあとは、必ず動詞のもとの形（原形）。三人称単数の s もつけない。

⚠ まちがい③ It is … to ～ の文で、人の前に of を使う。
→ 基本は for ＋ 人。of ＋ 人 は kind・nice・careless など、人の性格をほめたりけなしたりする語のときだけ。

⚠ まちがい④ 目的語の位置に to ～ を置けない動詞に使う。
→ enjoy や finish は不定詞ではなく動名詞をとる（次の単元で学ぶ）。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 不定詞の3つの用法を、日本語の意味で言え。
(2) 形容詞的用法と副詞的用法は、何をみて見分けるか。
(3) It is … to ～ の it は何を表しているか。

【例の答え】
(1) 名詞的は「〜すること」、形容詞的は「〜するための」、副詞的は「〜するために・〜して」。
(2) to の前に名詞があって後ろから説明していれば形容詞的、文がすでに完成していれば副詞的。
(3) 形式的な主語で、本当の主語は後ろの to ～ である。`,
      },
    ],
    trapExamples: [
      {
        question: 'I have no time to watch TV. 下線部 to watch TV の用法を答えよ。',
        wrongAnswer: '副詞的用法（テレビを見るために、時間がない）',
        trapExplanation:
          '「〜するために」と訳せそうだと思って、副詞的を選んでしまう。しかし「テレビを見るために、時間がない」では意味が通らない。',
        correctAnswer: '形容詞的用法（テレビを見るための時間）',
        correctExplanation:
          'to watch TV の前に time という名詞があり、to watch TV が time を後ろから説明している。「テレビを見るための時間がない」と訳して意味が通る。名詞のすぐ後ろにある to ～ は形容詞的を疑い、日本語にして意味が通るかを確かめる。',
      },
    ],
  },

  // 4. 動名詞と不定詞
  {
    id: 'ritsumeikan_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：動名詞と不定詞を目的語で使い分ける',
    description: 'enjoy・want・stop・remember などの動詞が、to ～ と ～ing のどちらをとるかを、イメージと理由で整理する',
    intro:
      'enjoy to play と書いたら×、want playing と書いても×。「どちらを使うか」の暗記が苦手な人は多いはずです。でも、to ～ と ～ing には、それぞれのもつイメージがあります。そのイメージから考えると、暗記の量がぐっと減ります。',
    order: 240004,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '動名詞（～ing）だけをとる動詞：enjoy／finish／stop／mind／practice／give up／keep。',
      '不定詞（to ～）だけをとる動詞：want／hope／decide／plan／need／promise／learn。',
      'どちらもとる動詞：like／love／start／begin／continue。意味はほぼ同じ。',
      'remember と forget は、to ～（これからのこと）と ～ing（過去のこと）で意味が変わる。stop も同様。',
      '前置詞のあとの動詞は、必ず動名詞（Thank you for ～ing／be good at ～ing）。',
    ],
    sections: [
      {
        heading: 'なぜ動詞によって形が決まるのか',
        body: `to ～ と ～ing には、それぞれのもつイメージがあります。

■ to ～ のイメージ：「これから向かう」
to は「〜へ向かう」という矢印です。だから、不定詞は、まだ実現していない未来の動作と相性がよいのです。
want（〜したい）、hope（〜を望む）、decide（〜を決める）、plan（〜を計画する）、need（〜が必要だ）、promise（〜を約束する）は、どれも「これからすること」を表します。だから to ～ をとります。

■ ～ing のイメージ：「いましている・すでにした」
動名詞は、動作そのものを「できごと」として見つめます。すでに起きたこと、いま起きていることを表すのに向いています。
enjoy（楽しむ）、finish（終える）、stop（やめる）、practice（練習する）、give up（あきらめる）は、実際にしている動作が目の前にあります。だから ～ing をとります。

■ 意味が変わる動詞
・remember to ～：忘れずに〜する（これから）／remember ～ing：〜したことを覚えている（過去）
・forget to ～：〜し忘れる（これからすることを忘れる）／forget ～ing：〜したことを忘れる（過去）
・stop ～ing：〜するのをやめる／stop to ～：〜するために立ち止まる

■ 前置詞のあとは動名詞
前置詞のあとには名詞の形が必要で、to ～ は前置詞 to と区別しにくいので、動名詞を使います。例：Thank you for helping me. ／ She is good at singing.

★ ここがポイント：**to ～ は「これから」、～ing は「いま・すでに」のイメージ。**remember／forget／stop は、to ～ か ～ing かで意味が変わるので、日本語の意味から選ぶ。`,
        figureId: 'lf_ritsumeikan_eigo_04',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：正しい形を選べ。
(1) She enjoyed (play／to play／playing) tennis.
(2) I want (go／to go／going) to Kyoto.
(3) I remember (to see／seeing) him at the station last year.
(4) Don't forget (to bring／bringing) your umbrella tomorrow.

【何を聞かれているか】動詞のあとに続く形が、to ～ か ～ing かを選びます。
【なぜこの考え方か】動詞によって「これから」か「いま・すでに」のイメージが決まるので、まず動詞のイメージを考えます。remember や forget は、時の語（last year、tomorrow）が手がかりになります。
【ステップ1】(1) enjoy は「いま楽しんでいる動作」を見つめる動詞で、動名詞だけをとる。→ playing。
【ステップ2】(2) want は「これからしたいこと」なので、to ～ をとる。→ to go。
【ステップ3】(3) last year（去年）は過去の話で、「見たことを覚えている」という意味になる。→ seeing。
【ステップ4】(4) tomorrow（明日）は未来の話で、「忘れずに持ってくる」という意味になる。→ to bring。
【答え】(1) playing (2) to go (3) seeing (4) to bring
【確かめ】(3) を to see にすると「会うのを忘れずに」という未来の意味になり、last year と矛盾する。
【よくあるまちがい】(1) を to play にしてしまうこと。enjoy は動名詞しかとらない。

■ 例題2：「彼は彼女と話すのをやめました。」を、stop を使って英語にせよ。
【何を聞かれているか】「話すのをやめた」という意味を、stop の正しい形で表します。
【なぜこの考え方か】stop は、あとに ～ing がくると「その動作をやめる」、to ～ がくると「〜するために立ち止まる」の意味になるので、日本語の意味から形を決めます。
【ステップ1】「〜するのをやめた」＝動作そのものをやめる。
【ステップ2】動作をやめるのは stop ＋ ～ing。
【ステップ3】「彼女と話す」＝ talk to her、過去の文なので stopped。
【答え】He stopped talking to her.
【確かめ】He stopped to talk to her. は「彼女と話すために立ち止まった」という別の意味になる。
【よくあるまちがい】to talk としてしまうこと。to ～ は目的を表すので、意味が変わってしまう。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) He finished (write／to write／writing) the report. の正しい形は？
答え：writing。finish は動名詞だけをとる動詞だから。

(2) I decided (study／to study／studying) abroad. の正しい形は？
答え：to study。decide は「これからすること」を決める動詞だから。

(3) Thank you for (help／to help／helping) me. の正しい形は？
答え：helping。前置詞 for のあとには動名詞を置くから。

(4) She likes (to read／reading) books. の形は、どちらも正しい。その理由は？
答え：like は、to ～ と ～ing のどちらもとれる動詞で、意味がほぼ同じだから。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① enjoy や finish のあとに to ～ を置く。
→ これらは「実際にしている動作」を見つめる動詞なので、動名詞だけ。

⚠ まちがい② want や decide のあとに ～ing を置く。
→ これらは「これからすること」なので、to ～ だけ。

⚠ まちがい③ remember ～ing と remember to ～ を取りちがえる。
→ 日本語で「覚えている」なら ～ing、「忘れずに」なら to ～。時を表す語（last year／tomorrow）も手がかり。

⚠ まちがい④ 前置詞のあとに to ～ を置く。
→ 前置詞のあとは名詞の働きが必要なので、動名詞にする。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) to ～ と ～ing は、それぞれどんなイメージか。
(2) remember to ～ と remember ～ing は、何がちがうか。
(3) 前置詞のあとで、動名詞を使うのはなぜか。

【例の答え】
(1) to ～ は「これから向かう」、～ing は「いましている・すでにした」というイメージ。
(2) to ～ は「忘れずに〜する」（これから）、～ing は「〜したことを覚えている」（過去）。
(3) 前置詞のあとには名詞の働きをする語が必要で、動名詞は動詞を名詞の形にしたものだから。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は彼女と話すのをやめました。」を英語に直したとき、正しい文はどちらか。① He stopped to talk to her.　② He stopped talking to her.',
        wrongAnswer: '① He stopped to talk to her.',
        trapExplanation:
          'stop のあとに to ～ を置くと、「やめる」のあとに動作が続く形に見えて、そのまま使えると思ってしまう。',
        correctAnswer: '② He stopped talking to her.',
        correctExplanation:
          'stop ～ing は「〜するのをやめる」、stop to ～ は「〜するために立ち止まる」という別の意味になる。①は「彼女と話すために立ち止まった」という意味である。やめる動作を表すときは、動名詞を使う。',
      },
    ],
  },

  // 5. 関係代名詞
  {
    id: 'ritsumeikan_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：関係代名詞（主格・目的格・省略）',
    description: 'who・which・that を、先行詞と「あとに続く形」で選び、目的格の省略まで使いこなす',
    intro:
      '「私には、カナダに住んでいる友達がいます」を英語にするとき、友達の説明が長くなって困りませんか。関係代名詞は、名詞のあとに説明の文をつなぐ接着剤です。選ぶときの手がかりは2つだけ。説明される名詞（先行詞）が人か物か、そして接着剤のすぐあとに何が来るかです。',
    order: 240005,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '関係代名詞は、名詞（先行詞）を後ろから説明する文を、その名詞につなぐ働きをする。',
      '先行詞が人なら who（または that）、物・動物なら which（または that）。',
      '主格：関係代名詞のすぐあとに動詞が来る（the girl who plays ～）。省略できない。',
      '目的格：関係代名詞のあとに「主語＋動詞」が来る（the book which I bought）。省略できる。',
      '目的格の文では、説明の文の中に目的語 it や him をもう一度書かない（関係代名詞が目的語の代わり）。',
    ],
    sections: [
      {
        heading: 'なぜ関係代名詞が必要で、どう選ぶのか',
        body: `「私にはカナダに住んでいる友達がいます」を、2つの文で言うと「I have a friend. He lives in Canada.」です。この2文を1文にまとめると、リズムがよくなります。このとき、2文目の「He」の代わりに関係代名詞を使い、a friend のすぐ後ろにつなぎます。

I have a friend who lives in Canada.

who は「He」の代わりであり、同時に2つの文をつなぐ接着剤でもあるので、「関係」「代名詞」と呼ばれます。

■ 選び方の2つの手がかり
①先行詞（説明される名詞）：人なら who、物・動物なら which。どちらにも使えるのが that。
②関係代名詞のすぐ後ろ：
・動詞が来る → 主格（関係代名詞が主語の役をしている）。省略できない。
　例）The girl who is playing the piano is my sister.
・「主語＋動詞」が来る → 目的格（関係代名詞が目的語の役をしている）。省略できる。
　例）This is the book (which) I bought yesterday.

■ なぜ目的格は省略できるのか
「the book I bought」と書いても、book のあとに I bought という「主語＋動詞」が続くので、「book を説明する文が始まった」と分かります。つなぎ目が見えるので、接着剤がなくても読めるのです。主格は、省略すると名詞のすぐ後ろに動詞が来て、文の形が崩れるので省略できません。

■ it をもう一度書かない理由
目的格では、関係代名詞が「目的語」の代わりをしています。だから、説明の文の中に it や him を書くと、目的語が二重になって誤りです。

★ ここがポイント：**先行詞が人か物かで who／which、すぐ後ろが動詞なら主格（省略不可）、主語＋動詞なら目的格（省略可）。**目的格の文に it を書き足さない。`,
        figureId: 'lf_ritsumeikan_eigo_05',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：空所に入る語を選べ。
The girl (who／which) is playing the piano is my sister.

【何を聞かれているか】先行詞に合う関係代名詞を選びます。
【なぜこの考え方か】関係代名詞は先行詞の種類で決まるので、まず先行詞を探します。
【ステップ1】先行詞は The girl（人）。
【ステップ2】人に使うのは who。which は物に使う。
【答え】who
【確かめ】The girl who is playing the piano（ピアノを弾いている少女）と読めて、すぐあとに動詞 is playing が来る。主格である。
【よくあるまちがい】which を選ぶこと。人には which を使わない。

■ 例題2：2つの文を、関係代名詞を使って1文にせよ。
(1) I have a friend. He lives in Canada.
(2) The movie was very good. We saw it last week.

【何を聞かれているか】2文を1文にまとめます。
【なぜこの考え方か】2文目の代名詞（He や it）が、1文目の名詞と同じものを指しているので、その代名詞を関係代名詞に置きかえて、名詞の後ろにつなぎます。
【ステップ1】(1) 先行詞は a friend（人）。He は主語の役なので、主格の who にする。→ I have a friend who lives in Canada.
【ステップ2】(2) 先行詞は The movie（物）。it は see の目的語なので、目的格の which（または that）にする。説明の文は We saw が残る。
【ステップ3】(2) 目的格の関係代名詞を名詞のすぐ後ろに置き、元の it は消す。→ The movie which we saw last week was very good.
【答え】(1) I have a friend who lives in Canada. (2) The movie which we saw last week was very good.（which は that でも、省略してもよい）
【確かめ】(2) に it を書き足した「The movie which we saw it last week」は、目的語が二重になり誤りである。
【よくあるまちがい】(2) で it を消し忘れること。関係代名詞が目的語の代わりなので、it は不要。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) The man (who／which) lives next door is a doctor. の正しい語は？
答え：who。先行詞 The man が人で、すぐ後ろに動詞 lives が来るから。

(2) The cake (which) my mother made was delicious. の which は省略できるか。
答え：できる。which のあとに「my mother made」という主語＋動詞が来る目的格だから。

(3) The girl who is singing is Mika. の who は省略できるか。
答え：できない。who のあとに動詞 is singing が来る主格だから。

(4) The bag that I bought it yesterday is nice. の誤りを直せ。
答え：it を消す。→ The bag that I bought yesterday is nice. that が目的語の代わりだから。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 人に which を使う、物に who を使う。
→ 先行詞を最初に確かめる。人は who、物は which。that はどちらでもよい。

⚠ まちがい② 主格を省略する。
→ すぐ後ろが動詞なら省略できない。省略できるのは、後ろが「主語＋動詞」の目的格だけ。

⚠ まちがい③ 目的格の文に it や him を書き足す。
→ 関係代名詞が目的語の代わりをしているので、目的語を重ねて書かない。

⚠ まちがい④ 動詞の形を、先行詞に合わせ忘れる。
→ 主格の関係代名詞のあとの動詞は、先行詞の数に合わせる。The girl who plays ～（三単現の s）。The girls who play ～。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 関係代名詞を、人か物かでどう選び分けるか。
(2) 目的格の関係代名詞は、なぜ省略できるのか。
(3) 目的格の文に it を書かないのは、なぜか。

【例の答え】
(1) 先行詞が人なら who、物なら which。どちらにも使えるのが that。
(2) 名詞のすぐ後ろに「主語＋動詞」が来るので、説明の文が始まったことが分かるから。
(3) 関係代名詞が目的語の代わりをしているので、it を書くと目的語が二重になるから。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「これは私が大阪で買ったかばんです。」を英語にせよ。（this／the bag／which／is／I／bought／in Osaka）',
        wrongAnswer: 'This is the bag which I bought it in Osaka.',
        trapExplanation:
          '日本語の「買った」の目的語は「かばん」なので、英語でも it を書いて「かばんを買った」と言いたくなる。しかし関係代名詞は、その目的語の役を引き受けている。',
        correctAnswer: 'This is the bag which I bought in Osaka.',
        correctExplanation:
          'which は bought の目的語の代わりをしているので、説明の文の中に it を書き足さない。目的格なので、which を省略した This is the bag I bought in Osaka. も正しい。目的格では、関係代名詞が目的語を引き受けている、と考える。',
      },
    ],
  },

  // 6. 受け身
  {
    id: 'ritsumeikan_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：受け身（受動態）の作り方と使いどころ',
    description: 'be動詞＋過去分詞の形、能動態からの書きかえ、by を省略する場合、助動詞つきの受け身まで',
    intro:
      '「窓が割られた」と「だれかが窓を割った」は、同じ出来事を、ちがう視点から言っています。英語の受け身は、「される側」を主役にする言い方です。形は簡単ですが、過去分詞の形と、能動態から書きかえる手順をはっきりさせておかないと、入試でまちがえやすい分野です。',
    order: 240006,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '受け身の形：be動詞（am／are／is／was／were）＋過去分詞（＋by 行為者）。',
      '能動態 → 受け身：目的語を主語にし、動詞を be＋過去分詞にし、主語を by ～ にする。',
      '過去分詞は不規則に注意：write→written／make→made／speak→spoken／see→seen／build→built／break→broken。',
      '否定は be動詞のあとに not、疑問は be動詞を主語の前に出す。',
      '助動詞つきの受け身は、助動詞＋be＋過去分詞（will be held／can be seen）。行為者が分からない・言うまでもないときは by ～ を省く。',
    ],
    sections: [
      {
        heading: 'なぜ受け身を使うのか、どう作るのか',
        body: `「Tom broke the window.（トムが窓を割った）」は、トムが主役です。ところが、話したいのが「窓がどうなったか」であれば、窓を主語にします。それが受け身です。

The window was broken by Tom.（窓はトムによって割られた）

■ 書きかえの手順（3ステップ）
①能動態の目的語（the window）を、受け身の主語にする。
②動詞を、be動詞＋過去分詞（was broken）にする。be動詞は、新しい主語の数と、時制（現在か過去か）に合わせる。
③能動態の主語（Tom）を、by ～ にして後ろに回す。

■ なぜ be動詞と過去分詞を使うのか
過去分詞には「〜された状態」という意味があります。broken は「割られた状態」です。be動詞が「（その状態に）ある」を表すので、be＋過去分詞で「〜されている／〜された」になります。

■ 過去分詞の形に注意
規則動詞は -ed（use→used）。不規則動詞は暗記が必要で、write→written、make→made、speak→spoken、see→seen、build→built、break→broken、read→read（発音は[red]）などです。

■ by を省くとき
行為者が分からない・言うまでもない・重要でないときは、by ～ をつけません。
例）English is spoken in Canada.（カナダでは英語が話されている）…だれが話しているかは言うまでもない。

■ 助動詞つき・否定・疑問
・助動詞つき：A new library will be built next year.（来年、新しい図書館が建てられる）。助動詞のあとは原形 be。
・否定：This book isn't read by many people.
・疑問：Was the window broken by Tom?

★ ここがポイント：**受け身は「be動詞＋過去分詞」で、書きかえは「目的語→主語」「動詞→be＋過去分詞」「主語→by ～」。**過去分詞（不規則）と、助動詞のあとの be に注意。`,
        figureId: 'lf_ritsumeikan_eigo_06',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：次の文を受け身の文に書きかえよ。
Tom broke the window.

【何を聞かれているか】能動態の文を、受け身に書きかえます。
【なぜこの考え方か】受け身は「される側」を主語にするので、目的語を主語の位置に動かします。動詞の形は、新しい主語と時制に合わせて決めます。
【ステップ1】目的語 the window を、新しい主語にする。
【ステップ2】break の過去分詞は broken。時制は過去、主語は単数なので be動詞は was。→ was broken。
【ステップ3】元の主語 Tom を、by Tom として後ろに回す。
【答え】The window was broken by Tom.
【確かめ】「窓はトムによって割られた」という意味で、元の文と同じ出来事を表している。
【よくあるまちがい】broke（過去形）をそのまま使って was broke とすること。受け身には過去分詞が必要。

■ 例題2：「この本は、多くの国で読まれています。」を英語にせよ。
【何を聞かれているか】日本語の受け身を、英語の受け身で表します。
【なぜこの考え方か】「読まれる」は「される側」の言い方なので、本が主語になります。だれが読むかは言うまでもないので、by ～ は書きません。
【ステップ1】主語は This book。
【ステップ2】「読まれています」は現在の受け身で、is read。
【ステップ3】「多くの国で」は in many countries。
【答え】This book is read in many countries.
【確かめ】「この本は多くの国で読まれている」となり、by ～ がなくても意味が通る。
【よくあるまちがい】reads と書くこと。本が主語のときは、本が「読む」のではなく「読まれる」。

■ 例題3：空所に適する形を書け。A new library (　　) (build) next year.
【何を聞かれているか】next year（来年）という未来の受け身の形です。
【なぜこの考え方か】新しい図書館は「建てられる」側なので受け身で、未来は will を使うから、will be ＋ 過去分詞になります。
【ステップ1】未来の受け身は will be ＋ 過去分詞。
【ステップ2】build の過去分詞は built。
【答え】will be built
【確かめ】助動詞 will のあとは動詞の原形 be なので、will is や will been は誤り。
【よくあるまちがい】will built とすること。be が抜けている。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) Mika wrote this letter. を受け身にせよ。
答え：This letter was written by Mika.（write の過去分詞は written）

(2) This room is cleaned every day. を否定文にせよ。
答え：This room isn't cleaned every day.（be動詞のあとに not）

(3) The window was broken. の疑問文は？
答え：Was the window broken?（be動詞を主語の前に出す）

(4) 「この車は日本で作られました。」を英語にせよ。
答え：This car was made in Japan.（make の過去分詞は made）`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 過去形と過去分詞をまちがえる。
→ break→broke（過去形）→broken（過去分詞）。受け身には過去分詞を使う。

⚠ まちがい② be動詞を忘れる。
→ 過去分詞だけでは受け身にならない。「This car made in Japan.」は文として成り立たない（分詞の後置修飾なら名詞を説明する形）。

⚠ まちがい③ 助動詞のあとで be を落とす。
→ will／can／must のあとの受け身は、必ず「助動詞＋be＋過去分詞」。

⚠ まちがい④ by を必ずつけると思う。
→ 行為者が不要なときは省く。By people は書かない。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 受け身の文は、何を主語にして、どんな形の動詞を使うか。
(2) 能動態から受け身に書きかえるとき、どの順で作るか。
(3) by ～ を省略できるのは、どんなときか。

【例の答え】
(1) 「される側」を主語にして、be動詞＋過去分詞を使う。
(2) 目的語を主語にし、動詞を be＋過去分詞にし、元の主語を by ～ にする。
(3) 行為者が分からない・言うまでもない・重要でないとき。`,
      },
    ],
    trapExamples: [
      {
        question: '「窓はトムに割られました。」を英語にしたとき、正しい文はどちらか。① The window was broke by Tom.　② The window was broken by Tom.',
        wrongAnswer: '① The window was broke by Tom.',
        trapExplanation:
          'break の過去形 broke が、「割った」という過去の意味と結びついて、過去の文だからと選んでしまう。',
        correctAnswer: '② The window was broken by Tom.',
        correctExplanation:
          '受け身は be動詞のあとに過去分詞を置く。break の過去分詞は broken で、過去形 broke とは別の形である。過去の文でも、受け身では過去形ではなく過去分詞を使う。',
      },
    ],
  },

  // 7. 現在完了
  {
    id: 'ritsumeikan_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：現在完了（継続・経験・完了）',
    description: 'have＋過去分詞の3つの意味を、手がかりの語で見分け、過去を表す語と一緒に使えない理由まで理解する',
    intro:
      '「I lived in Kyoto.」と「I have lived in Kyoto.」は、どちらも「住んだ」と訳せそうですが、意味がちがいます。前者は「過去に住んでいた（いまは？）」、後者は「いまも住んでいる」。現在完了は、「過去と今のつながり」を表す形です。手がかりの語を覚えて、3つの意味を見分けましょう。',
    order: 240007,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '形：have／has＋過去分詞。主語が三人称単数なら has。',
      '継続（ずっと〜している）：for（期間）／since（起点）／How long。例：I have lived here for ten years.',
      '経験（〜したことがある）：ever／never／before／once／twice／How many times。',
      '完了・結果（〜したところだ・〜してしまった）：just／already／yet。',
      'yesterday／last year／〜 ago／When ～? のような「過去だけ」を表す語とは使えない（過去形を使う）。',
    ],
    sections: [
      {
        heading: 'なぜ「過去と今のつながり」と言えるのか',
        body: `現在完了は have（持っている）＋過去分詞（〜した状態）という形です。「〜した状態を、いま持っている」というのが、もとの意味です。だから、過去に起きたことを、いまの状態とつなげて言うのです。

■ 3つの意味
①継続（ずっと〜している）
I have lived in Kyoto for ten years.（私は10年間ずっと京都に住んでいる）
過去に住みはじめて、いまも住んでいる。for は「期間」（ten years）、since は「起点」（since 2015）をつける。

②経験（〜したことがある）
I have been to Osaka twice.（私は大阪へ2回行ったことがある）
過去の経験が、いまの自分のなかにある。ever／never／before／once／twice が手がかり。

③完了・結果（〜したところだ／〜してしまった）
I have just finished my homework.（私はちょうど宿題を終えたところだ）
過去に終わったことが、いまの状態につながっている。just／already／yet が手がかり。

■ なぜ過去を表す語と使えないのか
現在完了は「いまとのつながり」を言う形です。yesterday や last year や 〜 ago のように、過去のある一点だけを指す語を足すと、「いま」とのつながりが切れてしまいます。だから、そういう語がある文は、過去形を使います。
正：I saw him yesterday.　誤：I have seen him yesterday.

■ have been to と have gone to
have been to ～ ＝ 行ったことがある（経験）、またはいま帰ってきている。
have gone to ～ ＝ 行ってしまった（いまここにいない）。

★ ここがポイント：**現在完了は「過去と今のつながり」を表すので、yesterday などの過去だけを表す語とは使えない。**for／since・ever／never・just／already／yet の手がかりで3つの意味を見分ける。`,
        figureId: 'lf_ritsumeikan_eigo_07',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：( )内の語を適する形に直し、for か since を選んで文を完成させよ。
I (live) in Kyoto (for／since) ten years.

【何を聞かれているか】現在完了の文を作り、前置詞を選びます。
【なぜこの考え方か】「10年間ずっと住んでいる」は、過去から今まで続いている状態なので継続の現在完了です。ten years は期間なので、期間をつなぐ for を選びます。
【ステップ1】主語 I なので、have＋過去分詞。
【ステップ2】live の過去分詞は lived（規則動詞）。→ have lived。
【ステップ3】ten years は「期間」なので for。since なら起点（2015など）をつける。
【答え】I have lived in Kyoto for ten years.
【確かめ】「10年間（ずっと）住んでいる」と読めて、いまも住んでいる意味になる。
【よくあるまちがい】since ten years とすること。since のあとは起点（いつから）。

■ 例題2：空所に適する語を入れよ。（　　）you ever（　　）sushi?
【何を聞かれているか】現在完了の疑問文の形です。
【なぜこの考え方か】ever は「これまでに」という意味で、経験をたずねるときに使います。経験は現在完了で言うので、Have you ever ～? の形になります。
【ステップ1】経験をたずねる疑問文は Have you ever ＋ 過去分詞 ～?。
【ステップ2】eat の過去分詞は eaten（不規則）。
【答え】Have／eaten
【確かめ】「あなたはこれまでにすしを食べたことがありますか」となる。
【よくあるまちがい】ate（過去形）を入れること。現在完了には過去分詞が必要。

■ 例題3：誤りを直せ。I have seen him yesterday.
【何を聞かれているか】文の誤りを見つけて直します。
【なぜこの考え方か】yesterday は「昨日」という過去のある一点を指す語なので、いまとのつながりを表す現在完了とは一緒に使えません。したがって過去形に直します。
【ステップ1】yesterday を見つける。→ 過去だけを表す語。
【ステップ2】現在完了を過去形に直す。see の過去形は saw。
【答え】I saw him yesterday.
【確かめ】「私は昨日、彼に会った」となり、過去の文として正しい。
【よくあるまちがい】yesterday を消して have seen を残すこと。「いつ」を言う文では過去形を使う。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) She has lived here (for／since) 2020. の正しい語は？
答え：since。2020 は起点（いつから）だから。

(2) I have (just／ago) finished lunch. の正しい語は？
答え：just。ago は過去だけを表す語で、現在完了とは使えないから。

(3) Have you finished your homework (yet／ever)? の正しい語は？
答え：yet。完了をたずねる疑問文で使う語だから。

(4) He has gone to America. の意味は？
答え：彼はアメリカへ行ってしまった（いまここにいない）。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① for と since を取りちがえる。
→ for＋期間（ten years）、since＋起点（2015／last year／I was a child）。

⚠ まちがい② 過去を表す語と現在完了を使う。
→ yesterday／last year／〜 ago／When ～? があれば、過去形。

⚠ まちがい③ 過去分詞を過去形にする。
→ eat→ate→eaten、go→went→gone、see→saw→seen、do→did→done。

⚠ まちがい④ have been to と have gone to を混ぜる。
→ been は「行ったことがある（もう戻っている）」、gone は「行ってしまった（ここにいない）」。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 現在完了の3つの意味は何か。
(2) なぜ yesterday と現在完了を一緒に使えないのか。
(3) for と since は、どうちがうか。

【例の答え】
(1) 継続（ずっと〜している）、経験（〜したことがある）、完了・結果（〜したところだ・〜してしまった）。
(2) 現在完了は「いまとのつながり」を表す形で、yesterday は過去の一点だけを指してつながりを切るから。
(3) for のあとには期間、since のあとには起点を置く。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は3年間ずっとこの町に住んでいます。」を英語にしたとき、正しい文はどちらか。① I have lived in this town since three years.　② I have lived in this town for three years.',
        wrongAnswer: '① I have lived in this town since three years.',
        trapExplanation:
          '「〜から」「〜間」の日本語の区別があいまいなまま、since を「〜以来」と覚えているので、継続を表す語として選んでしまう。',
        correctAnswer: '② I have lived in this town for three years.',
        correctExplanation:
          'three years は「3年間」という期間なので、期間をつなぐ for を使う。since のあとには、いつからかという起点（2023年・I was a child など）を置く。期間なら for、起点なら since。',
      },
    ],
  },

  // 8. 比較
  {
    id: 'ritsumeikan_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：比較の書きかえ（原級・比較級・最上級）',
    description: 'as ～ as・-er than・the -est の形と、同じ意味に言いかえる書きかえ問題を、考え方で整理する',
    intro:
      '「Mt. Fuji is the highest mountain in Japan.」を、「higher than any other」を使って書きかえる問題は、入試の定番です。答えを丸暗記するより、「同じ出来事を、別の角度から言っているだけ」と考えると、形が自然に覚えられます。',
    order: 240008,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '原級：as 形容詞 as（同じくらい）。否定の not as ～ as は「…ほど〜ない」。',
      '比較級：-er than／more ～ than。最上級：the -est／the most ～（in 場所・集団、of 複数）。',
      '長い語（beautiful／difficult／interesting／popular／expensive／important）は more／most を使う。',
      '書きかえの型：A is taller than B ＝ B is not as tall as A ＝ B is shorter than A。',
      '最上級＝比較級＋ than any other ＋単数名詞（any other のあとは単数）。',
    ],
    sections: [
      {
        heading: 'なぜ書きかえができるのか',
        body: `比べるときは、2つの見方があります。「AはBより高い」と言うことは、「BはAほど高くない」「BはAより低い」と言うことと、同じ事実を言っています。だから、書きかえができるのです。

■ 3つの形
・原級：A is as tall as B.（AはBと同じくらい背が高い）。否定は not as tall as（…ほど高くない）。
・比較級：A is taller than B.（AはBより背が高い）。
・最上級：A is the tallest in my class.（Aはクラスでいちばん背が高い）。

■ 書きかえの型①：比較級と原級の否定
Yuki is younger than Mika.（ユキはミカより若い）
＝ Mika is not as young as Yuki.（ミカはユキほど若くない）
主語と比べる相手を入れかえ、than を as ～ as の否定に変える。

■ 書きかえの型②：最上級と比較級
Mt. Fuji is the highest mountain in Japan.（富士山は日本でいちばん高い山だ）
＝ Mt. Fuji is higher than any other mountain in Japan.（富士山は日本のほかのどの山よりも高い）
「いちばん」は「ほかのすべてより上」と同じ意味だから。

■ なぜ any other のあとは単数なのか
any other mountain は「ほかの山のどれか1つと比べても」という意味です。1つ1つと比べているので単数形にします。複数形の mountains にすると、「ほかの山たち全部と比べる」という別の考え方になってしまうので、この書きかえでは単数を使います。

■ in と of の使い分け
最上級のあとで、場所・集団（範囲）を言うときは in（in Japan／in my class）、複数のもの（数）を言うときは of（of the four boys／of all）。

★ ここがポイント：**比較の書きかえは、同じ事実を別の角度から言うだけ。**最上級＝「比較級 than any other＋単数名詞」、「in＋範囲、of＋複数」を使い分ける。`,
        figureId: 'lf_ritsumeikan_eigo_08',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：ほぼ同じ意味になるように、空所に入る語を書け。
Yuki is younger than Mika. ＝ Mika is (　　) as (　　) as Yuki.

【何を聞かれているか】比較級の文を、as ～ as の否定の文に書きかえます。
【なぜこの考え方か】「ユキはミカより若い」ということは、ミカのほうが年上なので、「ミカはユキほど若くない」と言えます。主語と比べる相手を入れかえて、否定にします。
【ステップ1】主語を Mika にする（Yuki と入れかえる）。
【ステップ2】比較級 younger than を、not as young as にする。
【ステップ3】形容詞は原級 young。
【答え】not／young
【確かめ】「ミカはユキほど若くない」は、「ユキはミカより若い」と同じ意味になる。
【よくあるまちがい】younger を入れること。as ～ as の間は、形容詞の原級を入れる。

■ 例題2：ほぼ同じ意味になるように、書きかえよ。
Mt. Fuji is the highest mountain in Japan. ＝ Mt. Fuji is higher than (　　) (　　) mountain in Japan.

【何を聞かれているか】最上級を、比較級を使った文に書きかえます。
【なぜこの考え方か】「いちばん高い」は、「ほかのどの山より高い」と同じ意味だからです。any other のあとは、ほかの山を1つずつ比べるので、単数形を使います。
【ステップ1】最上級 the highest を、比較級 higher than に変える。
【ステップ2】「ほかのどの」＝ any other。
【ステップ3】mountain は単数形のまま使う。
【答え】any／other（any other mountain）
【確かめ】「富士山は日本のほかのどの山よりも高い」と読め、元の文と同じ意味になる。
【よくあるまちがい】any other mountains と複数にすること。ここでは単数形を使う。

■ 例題3：空所に適する語を書け。Ken is the (tall) of the four boys.
【何を聞かれているか】( )の語を最上級にします。
【なぜこの考え方か】「4人のなかでいちばん」と言っているので、最上級です。of the four boys のように複数の数が後ろに来るので、前に the が必要です。
【ステップ1】tall に -est をつけて tallest。
【ステップ2】最上級の前に the を置く。
【答え】tallest（the tallest）
【確かめ】「ケンは4人の少年のなかでいちばん背が高い」となる。
【よくあるまちがい】more tall とすること。短い語は -er／-est をつける。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) This book is (interesting) than that one. を正しい形に。
答え：more interesting。interesting は長い語なので、more をつける。

(2) Tom is taller than Ken. ＝ Ken is not as (　　) as Tom.
答え：tall。as ～ as の間には原級を入れる。

(3) Lake Biwa is the largest lake in Japan. ＝ Lake Biwa is larger than any other (　　) in Japan.
答え：lake（単数）。any other のあとは単数形。

(4) She is the best singer (in／of) the four. の正しい語は？
答え：of。the four のように複数の数が後ろに来るから。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① any other のあとに複数形を置く。
→ 「ほかのどの1つと比べても」という意味なので、単数形。

⚠ まちがい② as ～ as の間に比較級を入れる。
→ as と as のあいだは原級。as taller as は誤り。

⚠ まちがい③ 長い語に -er をつける。
→ beautiful／difficult／interesting／popular／expensive／important は more／most。

⚠ まちがい④ in と of を取りちがえる。
→ 範囲・場所は in、複数の数・all は of。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 「AはBより高い」は、as ～ as を使うとどう言えるか。
(2) 最上級を比較級で書きかえるとき、何を使うか。
(3) なぜ any other のあとは単数形なのか。

【例の答え】
(1) 「BはAほど高くない」と言える（B is not as tall as A）。
(2) 比較級＋ than any other ＋単数名詞を使う。
(3) ほかのものを1つずつ比べるという意味だから。`,
      },
    ],
    trapExamples: [
      {
        question:
          'Mt. Fuji is the highest mountain in Japan. を比較級を使って書きかえたとき、正しい文はどちらか。① Mt. Fuji is higher than any other mountains in Japan.　② Mt. Fuji is higher than any other mountain in Japan.',
        wrongAnswer: '① Mt. Fuji is higher than any other mountains in Japan.',
        trapExplanation:
          '「日本のほかの山々」という日本語から、山は複数だろうと考えて、mountains にしてしまう。',
        correctAnswer: '② Mt. Fuji is higher than any other mountain in Japan.',
        correctExplanation:
          'any other のあとは、ほかのどの1つと比べても、という意味なので単数形 mountain を使う。複数形にすると「ほかの山々全部と比べる」という別の考え方になってしまうので、この形では誤りである。',
      },
    ],
  },

  // 9. 間接疑問文・疑問詞＋to不定詞
  {
    id: 'ritsumeikan_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：間接疑問文と「疑問詞＋to不定詞」',
    description: '疑問文が文の一部になったときの語順（疑問詞＋主語＋動詞）と、how to ～ などの言いかえを整理する',
    intro:
      '「彼がどこに住んでいるか知っていますか」を英語にして、「Do you know where does he live?」と書いてしまう人は、とても多いのです。疑問文が文の中に入ると、語順が変わります。その理由を知れば、まちがえにくくなります。',
    order: 240009,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '間接疑問文：疑問詞＋主語＋動詞（平叙文の語順）。疑問文の語順にしない。',
      'do／does／did は、文の一部になると消え、動詞が時制を引き受ける（does live → lives、did buy → bought）。',
      'be動詞・助動詞は、主語のあとに回す（Where is he? → where he is）。',
      '疑問詞＋to不定詞：how to ～（〜のしかた）、what to ～（何を〜すべきか）、where to ～、when to ～。',
      'Yes／No でたずねる疑問文は、if（〜かどうか）を使って文の一部にする。',
    ],
    sections: [
      {
        heading: 'なぜ語順が変わるのか',
        body: `「Where does he live?」は、それだけで1つの疑問文です。疑問文の語順（do／does が主語の前に出る）は、「この文は質問です」という合図になっています。

ところが、これを「I know ～」の一部に入れると、文全体は「私は知っている」という普通の文（平叙文）になります。文の中に入った疑問は、もう質問ではないので、疑問の合図（do／does）はいりません。だから、平叙文の語順（主語＋動詞）になるのです。

Where does he live?（彼はどこに住んでいますか）
→ I know where he lives.（私は、彼がどこに住んでいるか知っている）

■ do／does／did が消える理由
do／does／did は、疑問文を作るためだけに使われていました。役目が終わったので消えます。消えた分は、動詞が時制と三単現の s を引き受けます。
・Where does he live? → where he lives（does が消え、live に s）
・What did he buy? → what he bought（did が消え、buy が過去形に）

■ be動詞・助動詞の場合
Where is he? → I don't know where he is.（is を主語のあとに回す）

■ 疑問詞＋to不定詞
how to use（使い方）、what to do（何をすべきか）、where to go（どこへ行くべきか）。主語が「私たち」など決まっているときは、間接疑問文を短くして、この形に書きかえられます。
例）I don't know how I should use it. ＝ I don't know how to use it.

■ Yes／No の疑問文は if
Does he like tennis? → I don't know if he likes tennis.（彼がテニスを好きかどうか知らない）

★ ここがポイント：**文の中に入った疑問文は、もう質問ではないので「疑問詞＋主語＋動詞」の語順になる。**do／does／did は消え、動詞が時制を引き受ける。`,
        figureId: 'lf_ritsumeikan_eigo_09',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：2つの文を1文にせよ。
(1) Where does she live? I don't know.
(2) What did he buy? Do you know?

【何を聞かれているか】疑問文を、別の文の一部に入れて1文にします。
【なぜこの考え方か】文の中に入った疑問は質問ではなくなるので、疑問文の語順をやめて、平叙文の語順（主語＋動詞）にします。
【ステップ1】(1) 疑問詞 where を前に出し、主語 she、動詞を続ける。does は消えるので、live が三単現の lives になる。
【ステップ2】(1) I don't know ＋ where she lives。
【ステップ3】(2) 疑問詞 what のあとに、主語 he、動詞を続ける。did は消えるので、buy が過去形 bought になる。
【ステップ4】(2) Do you know ＋ what he bought。文全体は疑問文なので、最後は ？。
【答え】(1) I don't know where she lives. (2) Do you know what he bought?
【確かめ】どちらも、疑問詞のあとに does や did が残っていない。
【よくあるまちがい】where does she live と、疑問文の語順のまま入れること。

■ 例題2：（　）の語を並べかえて、日本文に合う英文にせよ。「駅への行き方を教えてください。」（how／to／me／tell／get／please／to）＿＿ the station.
【何を聞かれているか】「行き方」を how to ～ の形で表し、文をつくります。
【なぜこの考え方か】「〜のしかた」は how to ～ で表せるので、まず how to get to を1つのかたまりにします。「教えてください」は Please tell me ～ です。
【ステップ1】「教えてください」→ Please tell me。
【ステップ2】「行き方」→ how to get to（かたまり）。
【ステップ3】つなげて、最後に the station を続ける。
【答え】Please tell me how to get to the station.
【確かめ】7語すべてを1回ずつ使っている。
【よくあるまちがい】tell me に how を入れて、tell how me のように順番を入れかえること。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) Where does he live? を I know ～ の形にせよ。
答え：I know where he lives.（does が消え、live に s）

(2) What did Mika say? を Do you know ～? の形にせよ。
答え：Do you know what Mika said?（did が消え、say が過去形 said）

(3) Where is the station? を Can you tell me ～? の形にせよ。
答え：Can you tell me where the station is?（is を主語のあとに回す）

(4) I don't know what I should do. を、to不定詞で書きかえよ。
答え：I don't know what to do.`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 疑問文の語順をそのまま入れる。
→ I know where does he live は誤り。where he lives にする。

⚠ まちがい② does／did を残して、動詞も変える。
→ 消えた does／did の分は、動詞が引き受ける。三単現の s・過去形を忘れない。

⚠ まちがい③ be動詞を主語の前に残す。
→ where is he ではなく、where he is。

⚠ まちがい④ 疑問詞のない Yes／No の疑問文に where を使う。
→ Yes／No の疑問文は if（〜かどうか）を使う。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 文の中に入った疑問文は、なぜ語順が変わるのか。
(2) do／does／did は、どうなるのか。
(3) how to ～ は、どんな意味か。

【例の答え】
(1) もう質問ではなく普通の文の一部になるので、平叙文の語順（主語＋動詞）になるから。
(2) 役目が終わって消え、動詞が時制と三単現の s を引き受ける。
(3) 「〜のしかた」という意味。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは、彼がどこに住んでいるか知っていますか。」を英語にしたとき、正しい文はどちらか。① Do you know where does he live?　② Do you know where he lives?',
        wrongAnswer: '① Do you know where does he live?',
        trapExplanation:
          '「どこに住んでいますか」という疑問文の形（where does he live）を、そのまま文の中に入れてしまう。',
        correctAnswer: '② Do you know where he lives?',
        correctExplanation:
          '文の中に入った疑問は質問ではないので、疑問詞のあとは平叙文の語順になる。does は役目を終えて消え、live は三単現の lives になる。文全体の疑問は、最初の Do you know ～? が受け持つ。',
      },
    ],
  },

  // 10. 分詞の後置修飾
  {
    id: 'ritsumeikan_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：分詞の後置修飾（現在分詞と過去分詞）',
    description: '名詞を後ろから説明する ～ing と過去分詞を、「している／される」の意味で選び分ける',
    intro:
      '「ピアノをひいている少女」を英語にすると、a girl playing the piano のように、名詞のあとに ～ing が続きます。でも、「a girl who is playing the piano」と同じ意味だと気づけば、むずかしくありません。分詞は、関係代名詞の文を短くした形です。',
    order: 240010,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '現在分詞（～ing）：「〜している」。名詞が自分で動作をしているとき（能動）。',
      '過去分詞（～ed／不規則形）：「〜された」。名詞が動作を受けているとき（受動）。',
      '分詞が1語なら名詞の前（a sleeping baby／a broken window）、2語以上のかたまりなら名詞の後ろ。',
      '後ろからの修飾は、「関係代名詞＋be動詞」を省いた形と考えられる（the boy who is playing → the boy playing）。',
      '選び方：名詞と分詞の関係が「〜が…する」なら ～ing、「〜が…される」なら過去分詞。',
    ],
    sections: [
      {
        heading: 'なぜ名詞の後ろに置くのか、どう選ぶのか',
        body: `分詞（現在分詞・過去分詞）は、形容詞のように名詞を説明できます。1語だけなら、形容詞と同じように名詞の前に置きます。

a sleeping baby（眠っている赤ちゃん）／a broken window（割れた窓）

ところが、分詞のあとに他の語が続いて、かたまりになるときは、名詞の後ろに置きます。かたまりを前に置くと、名詞までの距離が長くなって、読みにくくなるからです。

the boy playing soccer in the park（公園でサッカーをしている少年）

■ 関係代名詞の文を短くした形
The boy who is playing soccer in the park is Ken.
このとき「who is」を省くと、
The boy playing soccer in the park is Ken.
分詞のかたまりが名詞を後ろから説明している形になります。

■ ～ing と過去分詞の選び方
名詞と動詞の関係を日本語で言います。
・「少年が（サッカーを）している」→ 少年が動作をする（能動）→ playing
・「言語が（カナダで）話される」→ 言語は動作を受ける（受動）→ spoken
例）the language spoken in Canada（カナダで話されている言語）
例）a picture painted by my brother（私の兄によって描かれた絵）

■ 名前の言い方：called
「ケンと呼ばれている少年」＝ the boy called Ken。「呼ぶ」の受け身なので過去分詞 called。「ケンと呼んでいる少年」とはちがう。

★ ここがポイント：**名詞を後ろから説明する分詞は、関係代名詞＋be動詞を省いた形。**「〜している」なら ～ing、「〜された」なら過去分詞を、名詞との関係で選ぶ。`,
        figureId: 'lf_ritsumeikan_eigo_10',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：（　）に入る形を選べ。
(1) The girl (stand／standing／stood) under the tree is my sister.
(2) This is a picture (paint) by my brother. （適する形に直せ）
(3) 「川で泳いでいる少年はケンです。」を英語にせよ。

【何を聞かれているか】名詞を後ろから説明する分詞の形を、能動か受動かで選びます。
【なぜこの考え方か】名詞と動詞の関係が「〜が…する」なら現在分詞、「〜が…される」なら過去分詞です。まず、日本語にして関係を確かめます。
【ステップ1】(1) 「少女が立っている」は少女が動作をする。能動なので standing。
【ステップ2】(2) 「絵が描かれた」は絵が動作を受ける。受動なので、paint の過去分詞 painted。
【ステップ3】(3) 「少年が泳いでいる」は能動。the boy ＋ swimming in the river の形にする。swim は m を重ねて swimming。
【答え】(1) standing (2) painted (3) The boy swimming in the river is Ken.
【確かめ】(3) は The boy who is swimming in the river is Ken. から who is を省いた形になっている。
【よくあるまちがい】(1) を stood にすること。stood は過去形・過去分詞だが、「立たれた」は不自然。能動なら ～ing。

■ 例題2：「多くの国で話されている言語」を、分詞を使って英語にせよ。（冠詞は a を使う）
【何を聞かれているか】「話されている言語」を、名詞＋過去分詞の形で表します。
【なぜこの考え方か】言語は「話される」側なので受動です。したがって過去分詞を使い、in many countries を含めたかたまりを、名詞の後ろに置きます。
【ステップ1】名詞は language。
【ステップ2】speak の過去分詞は spoken。
【ステップ3】後ろのかたまりは spoken in many countries。
【答え】a language spoken in many countries
【確かめ】a language which is spoken in many countries から which is を省いた形になる。
【よくあるまちがい】speaking としてしまうこと。言語は話さない。話される側である。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) the boy (play) tennis over there の正しい形は？
答え：playing。少年がテニスをしている（能動）から。

(2) the car (make) in Japan の正しい形は？
答え：made。車は作られる側（受動）で、make の過去分詞は made だから。

(3) a (break) window の正しい形は？
答え：broken。1語なので名詞の前に置く。窓は割られた（受動）から。

(4) 「ミカと呼ばれている少女」を英語にせよ。
答え：the girl called Mika。「呼ばれる」なので過去分詞 called。`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 「〜している」「〜された」を取りちがえる。
→ 名詞を主語にして「〜が…する」か「〜が…される」かを日本語で言ってから選ぶ。

⚠ まちがい② かたまりを名詞の前に置く。
→ 分詞のあとに他の語が続くときは、名詞の後ろに置く。

⚠ まちがい③ 後ろから修飾の分詞に、be動詞を入れる。
→ the boy is playing soccer in the park is Ken は、動詞が二つになり誤り。who is を省くなら、is も省く。

⚠ まちがい④ 不規則動詞の過去分詞を、過去形にする。
→ write→written、break→broken、speak→spoken、make→made。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 分詞のかたまりは、なぜ名詞の後ろに置くのか。
(2) ～ing と過去分詞は、何で選び分けるのか。
(3) the boy playing soccer は、関係代名詞を使うとどう言えるか。

【例の答え】
(1) かたまりを前に置くと、名詞までの距離が長くなって読みにくいから。
(2) 名詞が動作をするなら ～ing、動作を受けるなら過去分詞。
(3) the boy who is playing soccer と言える。`,
      },
    ],
    trapExamples: [
      {
        question: '「ケンと呼ばれている少年は、私の友達です。」を英語にしたとき、正しい文はどちらか。① The boy calling Ken is my friend.　② The boy called Ken is my friend.',
        wrongAnswer: '① The boy calling Ken is my friend.',
        trapExplanation:
          '日本語の「呼ぶ」という動詞に引かれて、「〜している」の ～ing を選んでしまう。',
        correctAnswer: '② The boy called Ken is my friend.',
        correctExplanation:
          '少年は「呼ばれる」側（受動）なので、過去分詞 called を使う。①は「ケンを呼んでいる少年」という別の意味になる。名詞が動作を受けるなら、過去分詞を選ぶ。',
      },
    ],
  },

  // 11. 整序英作文
  {
    id: 'ritsumeikan_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：整序英作文は骨組みから組み立てる',
    description: '日本語から「主語と動詞」を決め、かたまりを作ってから並べる、迷わない整序の手順',
    intro:
      '並べかえ問題で、語をあちこち動かして「それっぽい」並びを探していませんか。それでは時間がかかるうえ、まちがいやすいのです。整序は、「骨組み → かたまり → 残り」の順に組み立てると、迷わず正解にたどりつけます。',
    order: 240011,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '手順①：日本語から、主語と動詞（文の骨組み）を最初に決める。',
      '手順②：語群から、決まったかたまりを先に作る（to ～、疑問詞＋主語＋動詞、関係代名詞、比較の形）。',
      '手順③：残りの語を、文の骨組みの前後に入れて並べる。',
      '手順④：日本語と照らして意味を確かめ、語数が足りているか、文頭が大文字かを確認する。',
      '語群の中の not／the／to など、小さい語ほど、かたまりの手がかりになる。',
    ],
    sections: [
      {
        heading: 'なぜ「骨組みから」だと迷わないのか',
        body: `英語の語順は、その語の「役割」で決まります。主語は文の最初、動詞は主語の直後、目的語は動詞の直後、という決まりがあります。つまり、語を動かして探すよりも、役割をあてはめていくほうが確実なのです。

■ 組み立ての手順
①骨組みを決める：日本語の「だれが」「どうする」から、主語と動詞を決める。
②かたまりを作る：語群の中から、くっつく語をまとめる。たとえば次のとおり。
・to ＋ 動詞 …… 不定詞（want to go）
・疑問詞 ＋ 主語 ＋ 動詞 …… 間接疑問文（where he lives）
・名詞 ＋ 関係代名詞 ＋ ～ …… 説明の文（the book which I bought）
・the ～est／more ～ than …… 比較の形
③残りを入れる：骨組みの前後に、かたまりと残りの語を並べる。
④確かめる：日本語の意味と合うか、使っていない語がないかを見る。

■ なぜかたまりを先に作るのか
並べかえる語が7つあると、並べ方は5000通りをこえます。けれども、かたまりを3つ作れば、並べるのは3つだけです。選択肢が一気にへるので、ミスも少なくなります。

■ 小さい語が手がかり
語群に to があれば不定詞か前置詞、the があればそのあとに名詞、which や who があれば直前が先行詞、のようにヒントが決まります。

★ ここがポイント：**整序は「骨組み（主語＋動詞）→かたまり→残り」の順に組み立てる。**語を動かして探さず、役割を当てはめる。最後に日本語の意味と語数を確かめる。`,
        figureId: 'lf_ritsumeikan_eigo_11',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：日本文に合うように、語を並べかえよ。
(1) 「これは私の父が作ったケーキです。」（the cake／this／my father／is／made）
(2) 「私は何を買えばよいかわかりません。」（what／I／buy／to／know／don't）
(3) 「これは京都でいちばん古い寺です。」（the oldest／is／temple／this／in Kyoto）

【何を聞かれているか】語群を並べかえて、日本文と同じ意味の英文を作ります。
【なぜこの考え方か】語順は役割で決まるので、骨組み（主語と動詞）を先に決め、くっつく語のかたまりを作ってから並べると、迷いません。
【ステップ1】(1) 骨組みは「これは〜です」＝ This is。残りの the cake／my father／made で、「私の父が作ったケーキ」を作る。
【ステップ2】(1) cake を後ろから説明するのは「my father made」（主語＋動詞）。目的格の関係代名詞が省略された形。→ the cake my father made。
【ステップ3】(2) 骨組みは I don't know。「何を買えばよいか」は what to buy（疑問詞＋to不定詞のかたまり）。
【ステップ4】(3) 骨組みは This is。「いちばん古い寺」は the oldest temple、場所は in Kyoto で最後。
【答え】(1) This is the cake my father made. (2) I don't know what to buy. (3) This is the oldest temple in Kyoto.
【確かめ】どれも使わない語がなく、日本文の意味と合う。
【よくあるまちがい】(1) で made を最後に置き、「This is the cake made my father」のように、2つの動詞が並ぶ形にしてしまうこと。主語＋動詞の順を守る。

■ 例題2：日本文に合うように並べよ。「ピアノを弾いている少女は私の妹です。」（is／the girl／playing／my sister／the piano）
【何を聞かれているか】主語の説明が長い文を、並べかえます。
【なぜこの考え方か】主語は「ピアノを弾いている少女」で、これを1つのかたまりにしてから、動詞 is を置きます。かたまりを作る前に is を置いてしまうと、動詞が二つになり、文が成立しません。
【ステップ1】名詞 the girl を先頭に置く。
【ステップ2】「ピアノを弾いている」は playing the piano。名詞の後ろから説明する分詞のかたまり。
【ステップ3】主語のかたまり the girl playing the piano のあとに、動詞 is と補語 my sister を置く。
【答え】The girl playing the piano is my sister.
【確かめ】5つの語群のすべてを使い、「ピアノを弾いている少女は私の妹です」と読める。
【よくあるまちがい】The girl is playing the piano my sister. のように、日本語の語順どおり進めること。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) 「彼女はテニスをするのが好きです。」（likes／she／play／to／tennis）
答え：She likes to play tennis.（骨組みは She likes、to play がかたまり）

(2) 「私は彼がどこに住んでいるか知りません。」（know／where／I／he／lives／don't）
答え：I don't know where he lives.（where he lives が間接疑問文のかたまり）

(3) 「これは私が昨日買った本です。」（I／the book／is／this／bought／yesterday）
答え：This is the book I bought yesterday.（the book のあとに I bought）

(4) 「富士山は日本でいちばん高い山です。」（is／in Japan／the highest／Mt. Fuji／mountain）
答え：Mt. Fuji is the highest mountain in Japan.`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 語を動かして、それらしい並びを探す。
→ 先に骨組み（主語＋動詞）を決め、役割を当てはめる。

⚠ まちがい② 動詞を2つ並べてしまう。
→ 1つの文に動詞は基本1つ。もう1つの動詞は、to 不定詞・分詞・関係代名詞の説明の中に入れる。

⚠ まちがい③ 使っていない語を残したまま終える。
→ 並べ終わったら、語群のすべてを使ったか数える。

⚠ まちがい④ 文頭を小文字、文末のピリオドを忘れる。
→ 答えの書き方（文頭は大文字・文末は . か ?）を最後に確かめる。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 整序問題は、何から決めるか。
(2) なぜかたまりを先に作るのか。
(3) 並べ終わったあと、何を確かめるか。

【例の答え】
(1) 主語と動詞の骨組み。
(2) 並べる単位がへって、迷いやミスが少なくなるから。
(3) 日本語の意味と合うか、語群を全部使ったか、文頭と文末の書き方。`,
      },
    ],
    trapExamples: [
      {
        question: '「ピアノを弾いている少女は私の妹です。」（is／the girl／playing／my sister／the piano）を並べかえたとき、正しい文はどちらか。① The girl is playing the piano my sister.　② The girl playing the piano is my sister.',
        wrongAnswer: '① The girl is playing the piano my sister.',
        trapExplanation:
          '日本語の「少女は…弾いている」という順に読んで、is playing の形を先に作ってしまう。語群のどれかが余るので、最後に my sister を置いてごまかしてしまう。',
        correctAnswer: '② The girl playing the piano is my sister.',
        correctExplanation:
          '主語は「ピアノを弾いている少女」という長いかたまりである。the girl のあとに playing the piano を続けて主語を完成させてから、動詞 is と補語 my sister を置く。①は playing the piano のあとに my sister が残り、文が成立しない。',
      },
    ],
  },

  // 12. 和文英訳・自由英作文
  {
    id: 'ritsumeikan_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    title: '立命館対策：和文英訳と自由英作文は「書ける文」で書く',
    description: '日本語を単純な言い方に言いかえ、意見＋理由＋まとめの型で、ミスの少ない英文を書く',
    intro:
      '英作文で、日本語をそのまま訳そうとして、手が止まったことはありませんか。実は、満点の答案は「むずかしい英語」ではなく、「確実に書ける英語」でできています。日本語を言いかえて、自分の知っている文型に持ちこむ。これが得点のコツです。',
    order: 240012,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '和文英訳は、まず主語と動詞を決め、日本語をやさしい言い方に言いかえてから英語にする。',
      '主語がない日本語は、「だれが」を自分で決める（I／we／they／you など）。',
      '自由英作文は「意見 → 理由1 → 理由2（または例）→ まとめ」の型で書く。',
      '知らない語は、知っている語に言いかえる（「訪れる価値がある」→「訪れるのにすばらしい場所だ」）。',
      '書いたあとに、三単現の s・時制・複数形・冠詞（a／the）・つづりを確かめる。',
    ],
    sections: [
      {
        heading: 'なぜ「言いかえ」が得点につながるのか',
        body: `日本語の表現を、そのまま英語にしようとすると、知らない語や、むずかしい文型が必要になることがあります。ところが、日本語を別の言い方に変えれば、中学で習った表現だけで書けることが多いのです。入試の英作文は、「言いたいことが正しく伝わるか」と「文法・つづりのミスが少ないか」で採点されることが一般的で、むずかしい語を使う必要はありません。

■ 和文英訳の手順
①主語と動詞を決める。日本語に主語がなければ、自分で補う。
②日本語をやさしく言いかえる。例：「彼女は料理が上手です」→「彼女は上手に料理をする」→ She cooks well.
③知っている文型に当てはめて、英語にする。
④見直し：主語と動詞の数、時制、冠詞、複数形、つづり。

■ 自由英作文の型
意見（I like ～ because ～.／I think ～.）→ 理由1（First,）→ 理由2（Second,）→ まとめ。
例）I like summer better than winter. First, I can swim in the sea. Second, I can enjoy fireworks with my family.
理由が2つあると、読み手にとって説得力が増します。文を短く区切ると、ミスも減ります。

■ ミスを減らす見直しの順
①主語と動詞は合っているか（三単現の s）。②時制は日本語と合っているか。③数えられる名詞に a／the や複数形の s がついているか。④つづりは合っているか。

★ ここがポイント：**日本語をやさしく言いかえ、自分が確実に書ける文型で書く。**自由英作文は「意見→理由→まとめ」で、見直しは三単現・時制・複数形・冠詞・つづりの順に行う。`,
        figureId: 'lf_ritsumeikan_eigo_12',
      },
      {
        heading: 'やってみよう：例題',
        body: `■ 例題1：「私の姉は毎朝6時に起きて、犬と散歩します。」を英語にせよ。
【何を聞かれているか】日本語を、文法のミスがない英語にします。
【なぜこの考え方か】主語を決め、動詞の形（現在・三単現）を先に決めておくと、ミスが減ります。「犬と散歩する」は難しいので、やさしい言いかえに変えます。
【ステップ1】主語は「私の姉」＝ My sister（三人称単数）。
【ステップ2】現在の習慣なので現在形。主語が三人称単数だから、動詞に s をつけて gets up。
【ステップ3】「毎朝6時に」＝ at six every morning。
【ステップ4】「犬と散歩する」＝ takes a walk with her dog。2つ目の動詞も三単現の s をつける。
【答え】My sister gets up at six every morning and takes a walk with her dog.
【確かめ】gets・takes と、2つの動詞のどちらにも s がついている。
【よくあるまちがい】My sister get up と書くこと。主語が My sister のとき、動詞に s が必要。

■ 例題2：「あなたは夏と冬のどちらが好きですか。理由もそえて、3文で書きなさい。」
【何を聞かれているか】意見と理由を、3文の英語で書きます。
【なぜこの考え方か】「意見→理由1→理由2」の型を使うと、3文でちょうど書けます。理由を2つ書くのは、読み手に説得力が伝わるからです。
【ステップ1】意見：I like summer better than winter.（比較級で言う）
【ステップ2】理由1：First, I can swim in the sea.（海で泳げるから）
【ステップ3】理由2：Second, I can enjoy fireworks with my family.（花火を家族と楽しめるから）
【答え】I like summer better than winter. First, I can swim in the sea. Second, I can enjoy fireworks with my family.
【確かめ】3文で、意見・理由1・理由2がそろっている。主語と動詞に誤りがなく、使った表現は中学で習ったものだけである。
【よくあるまちがい】理由を書かずに、I like summer. だけで終えること。理由を書かないと、問いに答えたことにならない。`,
      },
      {
        heading: 'たしかめ',
        body: `次の問いに答えて、自分でたしかめよう。

(1) 「彼女は料理が上手です」を、言いかえて英語にせよ。
答え：She cooks well.（または She is a good cook.）

(2) 「京都は訪れるのにすばらしい場所です」を英語にせよ。
答え：Kyoto is a great place to visit.（place のあとの to visit は形容詞的用法）

(3) 自由英作文で、理由を2つ書くときに文頭に使う語は？
答え：First,／Second,

(4) My brother play baseball every day. の誤りを直せ。
答え：My brother plays baseball every day.（主語が三人称単数なので s）`,
      },
      {
        heading: 'よくあるまちがい',
        body: `⚠ まちがい① 日本語をそのまま訳そうとして、知らない語で止まる。
→ やさしい言い方に言いかえる。知っている語・文型で書く。

⚠ まちがい② 三単現の s・過去形・複数形・冠詞を忘れる。
→ 書いたあとに、必ず見直しの順（動詞・時制・名詞・つづり）で確かめる。

⚠ まちがい③ 理由を書かない、または理由が意見とずれている。
→ 意見の直後に、理由を1〜2つ書く。理由が意見を支えているかを確かめる。

⚠ まちがい④ 1文を長くしすぎて、文の形をくずす。
→ 短い文を重ねる。短い文はミスも少なく、読み手にも伝わりやすい。`,
      },
      {
        heading: '自分のことばで',
        body: `次の問いに、自分のことばで答えてみよう。

(1) 和文英訳で、日本語をそのまま訳さないのはなぜか。
(2) 自由英作文の型を、順に言え。
(3) 書き終えたあと、どんな順で見直すか。

【例の答え】
(1) 知らない語や難しい文型で止まるので、知っている表現に言いかえたほうが正確に書けるから。
(2) 意見 → 理由1 → 理由2 → まとめ。
(3) 主語と動詞（三単現の s）、時制、名詞（冠詞と複数形）、つづり。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の姉は毎朝6時に起きます。」を英語にしたとき、正しい文はどちらか。① My sister get up at six every morning.　② My sister gets up at six every morning.',
        wrongAnswer: '① My sister get up at six every morning.',
        trapExplanation:
          '日本語には「三人称単数」という区別がないので、主語が My sister でも、動詞に s をつけ忘れてしまう。',
        correctAnswer: '② My sister gets up at six every morning.',
        correctExplanation:
          '主語 My sister は三人称単数で、現在の習慣を表す文なので、動詞に s をつけて gets up にする。日本語では区別しなくても、英語では主語の数に動詞を合わせる。',
      },
    ],
  },
];
