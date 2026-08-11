import type { Lesson } from './lesson-types';

// 中学受験 英語「時制（現在・過去・未来・進行形・現在完了）」拡張ユニット
// （40セッション：eigo_s116〜eigo_s155）
// order は 616〜655。
// 構成：現在形の3用法(4)／過去形・規則動詞(4)／不規則動詞の3変化(5)／現在進行形(4)／
//       過去進行形と状態動詞(4)／未来 will と be going to(5)／現在完了 継続(4)／
//       現在完了 完了・結果(4)／現在完了 経験(3)／現在完了と過去形の使い分け(3)
// 図解は「時間のどこを指しているか」を数直線で見せる形が中心（lesson-figs-eigo-ext04.ts）。
export const eigoExt04Lessons: Lesson[] = [
  // ───────────────────── 1. 現在形の3用法（s116〜s119） ─────────────────────
  {
    id: 'eigo_s116',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在形①：くり返す習慣を表す',
    description: '現在形は「今この瞬間」ではなく「いつもくり返していること」を表す、という基本をつかむ',
    intro: '「私は英語を勉強しています」を英語にすると、I study English. と I am studying English. の2つが考えられます。前者は「ふだん勉強している」、後者は「今まさに勉強中」。英語の現在形は、実は今この瞬間を表しません。',
    order: 616,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '現在形の中心の意味は「今この瞬間の動作」ではなく「くり返している習慣」。',
      'every day / every Sunday / usually / always / often / sometimes がある文はまず現在形。',
      '主語が三人称単数（he・she・it・my father など）のときだけ動詞に -s／-es が付く。',
      '「今まさに〜している」は現在進行形（be＋~ing）で表し、現在形とは指す時間がちがう。',
      '否定文・疑問文では do／does を使い、そのとき動詞は必ず原形にもどす。',
    ],
    sections: [
      {
        heading: '現在形が指している「時間」',
        body: `英語の「現在形」という名前は、じつはまぎらわしい。現在形が表すのは「今この瞬間にしていること」ではなく、「ふだんくり返していること」だからである。

例）I play soccer every Sunday.（私は毎週日曜日にサッカーをします）
この文は、今この瞬間にサッカーをしているとは言っていない。先週の日曜もして、今週の日曜もして、来週の日曜もするだろう、という「くり返し」を表している。

例）My father gets up at six every morning.（父は毎朝6時に起きます）
これも同じで、毎朝くり返される習慣を述べている。

■ 現在形といっしょに使われやすい語
every day（毎日）・every week（毎週）・every Sunday（毎週日曜日）・on Sundays（日曜日にはいつも）
always（いつも）・usually（たいてい）・often（よく）・sometimes（ときどき）・never（けっして〜ない）

これらの語が文の中にあれば、その文はほぼ現在形である。逆に、これらの語がある文を進行形にしてはいけない。

★ ポイント：現在形＝「点がくり返し並んでいる」イメージ。今この瞬間だけを指す一本の帯（現在進行形）とは、指している時間そのものがちがう。`,
        figureId: 'lf_eigoext04_116',
      },
      {
        heading: '主語によって動詞の形が変わる',
        body: `現在形でいちばん失点しやすいのが、主語が三人称単数のときに動詞へ -s を付け忘れることである。

■ 三人称単数とは
自分（I）でも相手（you）でもない、一人（一つ）のもの。
he / she / it / Ken / my mother / that dog / this book / everyone など。

例）I play tennis.　You play tennis.　We play tennis.　They play tennis.（-s なし）
　　He plays tennis.　She plays tennis.　Ken plays tennis.（-s あり）

■ 否定文・疑問文では -s が do のほうへ移る
否定文：He does not（doesn't）play tennis.　← plays ではなく play にもどる
疑問文：Does he play tennis?　― Yes, he does. / No, he doesn't.
「-s は文の中に一つだけ」と覚えるとよい。does に -s があるので、動詞は原形にもどるのである。

⚠ 注意：主語が長いと数を見あやまりやすい。My father and my brother play tennis.（父と兄＝二人なので -s なし）／ The boy with two dogs runs fast.（主語は The boy 一人なので -s あり）。「〜と〜」でつながれていれば複数、前置詞のかたまりが後ろに付いているだけなら、その前の名詞が主語である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼は毎朝6時に起きます。」',
        wrongAnswer: 'He get up at six every morning.',
        trapExplanation:
          '日本語には「主語が一人だと動詞の形が変わる」という決まりがないので、he と get をそのままつなげてしまう。日本語で考えてから英語に置きかえる子ほど落としやすい。',
        correctAnswer: 'He gets up at six every morning.',
        correctExplanation:
          '主語 He は三人称・単数、そして時制は現在なので、動詞に -s を付けて gets にする。英作文では書き終えたあとに「主語は he・she・it のどれかに置きかえられるか」を必ず確認する習慣をつける。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は今、宿題をしています。」',
        wrongAnswer: 'I do my homework now.',
        trapExplanation:
          '「現在のこと＝現在形」と覚えているため、now があっても現在形で書いてしまう。しかし現在形は「毎日する」という習慣の意味になり、「今まさにしている」という意味にはならない。',
        correctAnswer: 'I am doing my homework now.',
        correctExplanation:
          '今この瞬間に進行中の動作は、現在進行形 be動詞＋~ing で表す。now・right now・at this moment などがあれば進行形を疑う。I do my homework every day.（毎日する＝習慣）との差をセットで覚える。',
      },
    ],
  },

  {
    id: 'eigo_s117',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在形②：三人称単数現在の -s のつづり',
    description: '-s／-es の付け方の四つのパターンと、主語の数の見きわめ方を身につける',
    intro: 'study は studies なのに、play は plays。同じ y で終わるのに変わり方がちがいます。しかも -s が付くのは「三人称・単数・現在」の3つがそろったときだけ。1つでも欠ければ付きません。条件から確認します。',
    order: 617,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '-s が付くのは「三人称・単数・現在」の三つがそろったときだけ。',
      's, x, ch, sh, o で終わる動詞は -es（passes, mixes, watches, washes, goes, does）。',
      '「子音字＋y」は y を i に変えて -es（study→studies, carry→carries, fly→flies）。',
      '「母音字＋y」はそのまま -s（play→plays, enjoy→enjoys, stay→stays）。',
      'have だけは特別な形 has になる。',
    ],
    sections: [
      {
        heading: '-s／-es の付け方 四つのパターン',
        body: `① そのまま -s を付ける（いちばん多い）
play→plays　like→likes　run→runs　read→reads　want→wants　live→lives

② s, x, ch, sh, o で終わる語は -es
pass→passes　mix→mixes　teach→teaches　watch→watches　wash→washes　finish→finishes　go→goes　do→does
（発音しにくいので、間に e を入れて「イズ」と読めるようにしていると考えるとよい）

③ 「子音字＋y」は y を i に変えて -es
study→studies　carry→carries　fly→flies　cry→cries　try→tries
y の直前が a, i, u, e, o 以外（子音字）のときだけこの変え方をする。

④ 「母音字＋y」はそのまま -s
play→plays　enjoy→enjoys　stay→stays　buy→buys
y の直前が a や o（母音字）なら、何も変えずに -s を付けるだけ。

■ 特別な形
have→has（haves とはならない）
be動詞は am / is / are と、はじめから形が決まっている。

★ ポイント：③と④の見分けは「y の一つ前の文字」だけを見る。study の t は子音字→ studies、play の a は母音字→ plays。この一手間で確実に得点できる。`,
      },
      {
        heading: '主語の数を見あやまらない',
        body: `-s のルールを覚えても、そもそも主語の数を取りちがえると意味がない。入試で狙われるのは次のような形である。

■ 主語が「〜と〜」でつながれているとき → 複数
Ken and Yumi go to the same school.（ケンとユミ＝二人なので -s なし）
My brother and I like baseball.（兄と私＝二人なので -s なし）

■ 主語の後ろに前置詞のかたまりが付いているとき → 前の名詞が主語
The boy with two dogs runs in the park.（主語は The boy＝一人なので runs）
The books on the desk are mine.（主語は The books＝複数）
with two dogs や on the desk は、主語の説明をしているだけで主語ではない。

■ 「みんな」「だれも」を表す語は単数あつかい
Everyone knows his name.（everyone は単数）
Every student has a computer.（every＋単数名詞は単数）

⚠ 注意：日本語で「私の兄と私は」と言うと最後が「私」なので、つい I だけに合わせて動詞を選んでしまう。しかし主語全体は二人＝複数なので、-s は付けない。英文を書いたら、主語を he / she / it / they のどれかに置きかえてみて確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼女は毎日、音楽を勉強します。」',
        wrongAnswer: 'She studys music every day.',
        trapExplanation:
          '「三人称単数なら -s を付ける」とだけ覚えているので、study にそのまま -s を付けてしまう。y で終わる動詞には別の決まりがあることが頭から抜けている。',
        correctAnswer: 'She studies music every day.',
        correctExplanation:
          'study は y の直前が t（子音字）なので、y を i に変えて -es を付け studies となる。同じ仲間に carry→carries、fly→flies、try→tries がある。一方 play は y の直前が a（母音字）なので plays でよい。',
      },
      {
        question: '次の英文の（　）に入る正しい形を選びなさい。My sister and I （go / goes）to school together.',
        wrongAnswer: 'goes',
        trapExplanation:
          '（　）のすぐ前にある I や、主語の中の My sister（一人）だけが目に入り、「単数だから goes」と決めてしまう。主語全体を一つのかたまりとして見ていないために起こる誤りである。',
        correctAnswer: 'go',
        correctExplanation:
          '主語は My sister and I（姉と私＝二人）で複数なので、-s は付けずに go とする。主語全体を代名詞に置きかえると we になり、We go to school together. と確かめられる。and でつながれた主語は複数、と覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s118',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在形③：いつでも変わらない事実を表す',
    description: '自然の法則や決まりきったことがらは、いつの話でも現在形で表すことを理解する',
    intro: '「太陽は東からのぼる」は、昨日の話でも100年前の話でも The sun rises in the east. と現在形で書きます。いつでも変わらないことは、いつの話でも現在形。時制は時間だけで決まるのではないのです。',
    order: 618,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '「いつでもそうだ」という事実・法則は、過去の話の中でも現在形で書く。',
      '例）The sun rises in the east.／Water boils at 100 degrees Celsius.',
      '日本語の「〜している」に引かれて進行形にしない（The earth goes around the sun.）。',
      '時刻表・規則・ことわざのように「決まっていること」も現在形。',
      '国や人の性質を一般的に述べるときも現在形（Pandas eat bamboo.）。',
    ],
    sections: [
      {
        heading: 'いつでも成り立つことは現在形',
        body: `現在形の二つ目の用法は「不変の事実」である。昨日も今日も明日も変わらず成り立つことは、いつの話をしていても現在形で表す。

例）The sun rises in the east and sets in the west.（太陽は東からのぼり、西にしずむ）
例）Water boils at 100 degrees Celsius.（水はセ氏100度でふっとうする）
例）Water freezes at zero degrees Celsius.（水はセ氏0度でこおる）
例）The earth goes around the sun.（地球は太陽のまわりを回っている）
例）Ice is lighter than water.（氷は水より軽い）

これらは「今そうなっている」だけでなく「いつでもそうだ」という内容なので、現在形以外は使えない。

■ 決まっていることも現在形
The bank opens at nine.（銀行は9時に開く）
Our school starts in April.（私たちの学校は4月に始まる）
The train leaves at 6:30.（その電車は6時30分に出発する）
時刻表や規則のように「決まりとして動かないこと」も、未来のことであっても現在形で表す。

★ ポイント：現在形は「今」を指す形ではなく、「時間に左右されない形」だと考えるとすっきりする。習慣も、法則も、時刻表も、すべて「いつでもそう」だから現在形なのである。`,
      },
      {
        heading: '日本語につられて起こる二つの誤り',
        body: `■ 誤り1：過去の話の中だから、と過去形にしてしまう
理科の実験を思い出して書くとき、「あのとき水は100度でふっとうした」と考えて Water boiled at 100 degrees. と書いてしまうことがある。しかし「水は100度でふっとうする」という性質は今も変わらないので、Water boils at 100 degrees Celsius. と現在形にする。実験をした「そのとき」の出来事を語る場合だけ過去形になる。
例）Yesterday we heated the water, and it boiled.（昨日水を熱したら、ふっとうした）← この文の boiled は、昨日起きた一回の出来事なので過去形でよい。

■ 誤り2：「〜している」だから、と進行形にしてしまう
「地球は太陽のまわりを回っている」を The earth is going around the sun. と書くのは誤り。日本語の「〜ている」は、進行中の動作にも、変わらない事実にも使えるあいまいな言い方だからである。英語では「いつでもそうだ」なら現在形、「今この瞬間だけ」なら進行形とはっきり分かれる。
正）The earth goes around the sun.
正）The moon goes around the earth.

⚠ 注意：一般的な性質を述べるときは、主語を複数形にすることが多い。Pandas eat bamboo.（パンダは竹を食べる）／ Dogs like to run.（犬は走るのが好きだ）。A panda eats bamboo. も可能だが、複数形のほうが「〜というものは」という感じがよく出る。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「水はセ氏100度でふっとうします。」',
        wrongAnswer: 'Water boiled at 100 degrees Celsius.',
        trapExplanation:
          '理科の授業でやった実験の場面を思いうかべ、「あのときふっとうした」という体験の記憶にひきずられて過去形にしてしまう。実験は過去でも、性質そのものは今も変わらない。',
        correctAnswer: 'Water boils at 100 degrees Celsius.',
        correctExplanation:
          '「水は100度でふっとうする」はいつでも成り立つ事実なので、主語 Water（三人称単数）に合わせて現在形 boils を使う。過去形になるのは「昨日、実験で水がふっとうした」のように一回の出来事を語るときだけである。',
      },
      {
        question: '次の日本語を英語にしなさい。「地球は太陽のまわりを回っています。」',
        wrongAnswer: 'The earth is going around the sun.',
        trapExplanation:
          '日本語の「回っています」の「〜ています」を、そのまま現在進行形に置きかえてしまう。日本語の「〜ている」は進行中の動作にも変わらない事実にも使えるので、そのまま訳すと形をまちがえる。',
        correctAnswer: 'The earth goes around the sun.',
        correctExplanation:
          '「地球が太陽のまわりを回る」は今だけでなくいつでも成り立つ事実なので現在形を使う。「〜ている」という日本語を見たら、①今この瞬間だけか、②いつでもそうか、を必ず自分に問いかけてから形を決める。',
      },
    ],
  },

  {
    id: 'eigo_s119',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在形④：今の状態を表す be動詞と一般動詞',
    description: 'be動詞の使い分けと、状態を表す一般動詞（like・have・live など）の使い方を整理する',
    intro: '「私は犬を飼っています」を I am having a dog. と言うと変です。have は「持っている」という状態なので、進行形にしません。「〜ています」に引かれて進行形にしてしまう、日本語話者らしいまちがいです。',
    order: 619,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞は主語で決まる。I→am／you・複数→are／三人称単数→is。',
      'be動詞と一般動詞を一つの文に二つ並べない（× I am like baseball.）。',
      'like・know・have・want・live などは「状態」を表し、現在形で今のことが言える。',
      'There is ＋単数名詞／There are ＋複数名詞。be動詞は後ろの名詞に合わせる。',
      '「〜がいます・あります」は There is/are と have を場面で使い分ける。',
    ],
    sections: [
      {
        heading: 'be動詞は「＝」を表す',
        body: `現在形の三つ目の用法は「今の状態」である。まず be動詞から確認する。

■ be動詞の使い分け
I am a student.（私は生徒です）
You are kind.（あなたは親切です）
He is my brother.（彼は私の兄です）
They are in the park.（彼らは公園にいます）

be動詞は「主語＝後ろの語」または「主語がどこにいるか」を表す。主語によって am / are / is を使い分けるだけで、意味は変わらない。

■ 短縮形
I am → I'm　You are → You're　He is → He's　They are → They're
is not → isn't　are not → aren't（am not に短縮形はない）

■ be動詞と一般動詞は一つの文に二つ入れない
× I am like baseball.
○ I like baseball.（私は野球が好きです）
× He is play tennis.
○ He plays tennis.（彼はテニスをします）
「〜です」という日本語につられて be動詞を先に置き、そのあとに一般動詞を続けてしまうのがいちばん多い誤りである。文の中心となる動詞は一つだけ、と覚えておく。

★ ポイント：be動詞は「＝」、一般動詞は「動作や状態」。両方を同時に文の中心にはできない。ただし be動詞＋~ing（進行形）だけは例外で、これは二つで一つの動詞のはたらきをしている。`,
      },
      {
        heading: '状態を表す一般動詞と There is / There are',
        body: `一般動詞の中には、動作ではなく「状態」を表すものがある。これらは現在形のままで「今のこと」を表せる。

例）I like music.（私は音楽が好きです）
例）I know his name.（私は彼の名前を知っています）
例）He has two dogs.（彼はイヌを2匹飼っています）
例）She lives in Osaka.（彼女は大阪に住んでいます）
例）I want a new bike.（私は新しい自転車がほしい）
日本語では「知っています」「飼っています」「住んでいます」と「〜ています」が付くが、英語では進行形にしないことに注意する。

■ There is / There are（〜があります・います）
There is a book on the desk.（机の上に本が1冊あります）
There are three books on the desk.（机の上に本が3冊あります）
be動詞は There ではなく、後ろに来る名詞の数に合わせる。単数なら is、複数なら are。
疑問文は Is there a book on the desk?（― Yes, there is. / No, there isn't.）となる。

■ There is/are と have の使い分け
There is a park near my house.（家の近くに公園があります）＝ 場所に何かが存在する
I have a bike.（私は自転車を持っています）＝ だれかが所有している
どちらも日本語では「あります」となるので、「だれのものか」を言いたいときは have、「そこに存在する」だけなら There is/are と覚える。

⚠ 注意：There is/are のあとに the my your this などが付いた名詞は置かない。× There is my bike in the garage. → ○ My bike is in the garage.`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は野球が好きです。」',
        wrongAnswer: 'I am like baseball.',
        trapExplanation:
          '日本語の文末が「〜です」で終わっているので、「です＝am」と反射的に置いてしまい、そのあとに like を続けてしまう。be動詞を「です」の訳語だと思いこんでいるために起こる誤りである。',
        correctAnswer: 'I like baseball.',
        correctExplanation:
          'like はそれ自体が「〜が好きだ」という意味の一般動詞なので、be動詞は不要。一つの文の中心となる動詞は一つだけである。「〜です」で終わる日本語でも、like・know・want・have のような動詞を使うときは be動詞を付けない。',
      },
      {
        question: '次の日本語を英語にしなさい。「机の上に本が3冊あります。」',
        wrongAnswer: 'There is three books on the desk.',
        trapExplanation:
          'There is 〜 を一つのかたまりとして丸暗記しているため、後ろが複数名詞になっても is のまま書いてしまう。There が主語だと思っていると、いつまでも直らない。',
        correctAnswer: 'There are three books on the desk.',
        correctExplanation:
          'There is/are の be動詞は、後ろに来る名詞の数に合わせる。three books は複数なので are を使う。逆に There are a book. も誤り。まず名詞が単数か複数かを見てから is / are を決める、という順番で書く。',
      },
    ],
  },

  // ───────────────────── 2. 過去形（規則動詞）（s120〜s123） ─────────────────────
  {
    id: 'eigo_s120',
    subject: 'eigo',
    examType: 'chugaku',
    title: '過去形①：過去の一点で完結する',
    description: '過去形が指している時間と、be動詞 was/were・一般動詞 -ed の基本形をつかむ',
    intro: '「昨日、京都に行きました」は I went to Kyoto yesterday.。日本語の「した」は今とのつながりをぼかせますが、英語の過去形は「そこで終わったこと」とはっきり言い切ります。be動詞は was と were の2つだけです。',
    order: 620,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '過去形は「過去のある一点で起きて、そこで終わったこと」を表し、今とはつながらない。',
      'be動詞の過去形は was（I・三人称単数）と were（you・複数）の二つだけ。',
      '一般動詞の規則変化は原形に -ed を付ける。主語が何であっても形は変わらない。',
      'yesterday／last night／last week／three days ago／in 2020 は過去形の合図。',
      '過去形には三人称単数の -s は存在しない（× He playeds）。',
    ],
    sections: [
      {
        heading: '過去形が指している時間',
        body: `過去形は「過去のある一点で始まり、その場で終わったこと」を表す。今この瞬間とは線がつながっていない、というのが最大の特徴である。

例）I visited my grandmother yesterday.（私は昨日、祖母を訪ねました）
昨日という一点での出来事を述べているだけで、今も祖母の家にいるかどうかには何も触れていない。

例）He was busy last week.（彼は先週いそがしかった）
先週いそがしかったと言っているだけで、今いそがしいかどうかは分からない。

■ 過去形といっしょに使われる語
yesterday（昨日）・last night（昨夜）・last week / month / year（先週・先月・昨年）
three days ago（3日前）・a long time ago（ずっと昔）・in 2020（2020年に）・then / at that time（そのとき）
これらは「過去の一点」を指す語なので、過去形とだけ結びつく。あとで学ぶ現在完了とはいっしょに使えない。

★ ポイント：過去形は「点」。今とつながっていないからこそ、yesterday のような「いつ」を表す語を自由にそえられる。これは現在完了との決定的なちがいになる。`,
        figureId: 'lf_eigoext04_120',
      },
      {
        heading: 'be動詞の過去形と一般動詞の過去形',
        body: `■ be動詞の過去形は二つだけ
am → was　　is → was　　are → were
I was tired.（私はつかれていました）
He was at home.（彼は家にいました）
You were kind to me.（あなたは私に親切でした）
They were in the library.（彼らは図書館にいました）
現在形は am / is / are と三つあるが、過去形は was と were の二つに減る。you は一人でも were を使う点に注意する。

■ 一般動詞の規則変化
原形に -ed を付けるだけで、主語が何であっても形は同じ。
play → played　　watch → watched　　want → wanted　　help → helped　　open → opened
I played tennis.　He played tennis.　They played tennis.（すべて played）
現在形では He plays と -s が必要だったが、過去形では主語による形の変化がまったくない。ここは英語の中で最も楽な部分である。

⚠ 注意：現在形のくせが残って He playeds のように -s まで付けてしまう誤りが出る。過去形に三人称単数の -s は存在しない。

■ 「〜でした」と「〜しました」の見分け
日本語が「〜でした」「〜だった」で終わっていれば be動詞の過去形、「〜しました」「〜した」で終わっていれば一般動詞の過去形になることが多い。ただし「〜にいました」も be動詞（was / were）なので気をつける。
例）私は昨日いそがしかった。→ I was busy yesterday.
例）私は昨日、公園にいました。→ I was in the park yesterday.
例）私は昨日、公園へ行きました。→ I went to the park yesterday.`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は昨日、公園へ行きませんでした。」',
        wrongAnswer: "I didn't went to the park yesterday.",
        trapExplanation:
          '「過去の文だから動詞も過去形」と考えて、didn\'t のあとまで過去形にしてしまう。過去を表す仕事はすでに did が引き受けている、という仕組みが見えていない。',
        correctAnswer: "I didn't go to the park yesterday.",
        correctExplanation:
          '否定文では did（do の過去形）が過去を表すので、そのあとの動詞は原形にもどす。現在形の He doesn\'t play. で play にもどるのと同じ仕組みで、「過去を表す印は文に一つだけ」と覚えるとよい。',
      },
      {
        question: '次の英文の（　）に入る正しい語を選びなさい。They （was / were）busy yesterday.',
        wrongAnswer: 'was',
        trapExplanation:
          '過去形の be動詞といえば was、と一つだけを強く覚えていると、主語が複数でも was を選んでしまう。現在形で are を使う主語には were、という対応が結びついていない。',
        correctAnswer: 'were',
        correctExplanation:
          '主語 They は複数なので were を使う。現在形の am・is が was に、are が were に変わる、と対応させて覚える。とくに You were 〜. は you が一人であっても were なので、まちがえやすい形として押さえておく。',
      },
    ],
  },

  {
    id: 'eigo_s121',
    subject: 'eigo',
    examType: 'chugaku',
    title: '過去形②：-ed のつけ方 四つのパターン',
    description: '規則動詞の過去形のつづりを、四つの型に整理して確実に書けるようにする',
    intro: 'stop の過去形は stoped ではなく stopped、study は studyed ではなく studied。同じ -ed を付けるだけなのに、つづりが4通りに分かれます。分かれ目は語尾の形。パターンで覚えれば書きまちがえません。',
    order: 621,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '原則はそのまま -ed（play→played, watch→watched, want→wanted）。',
      'e で終わる語は -d だけ（like→liked, live→lived, use→used）。',
      '「子音字＋y」は y を i に変えて -ed（study→studied, carry→carried, cry→cried）。',
      '「母音字＋y」はそのまま -ed（play→played, enjoy→enjoyed, stay→stayed）。',
      '「短い母音＋子音字1つ」で終わる語は最後の子音字を重ねて -ed（stop→stopped, plan→planned）。',
    ],
    sections: [
      {
        heading: '四つのパターン',
        body: `規則動詞の過去形は、次の四つの型に分けて覚える。

① そのまま -ed を付ける（いちばん多い）
play→played　watch→watched　want→wanted　help→helped　open→opened　visit→visited　call→called　listen→listened

② e で終わる語は -d だけ
like→liked　live→lived　use→used　close→closed　move→moved　arrive→arrived　practice→practiced
すでに e があるので、d を一つ足すだけでよい。likeed とは書かない。

③ 「子音字＋y」は y を i に変えて -ed
study→studied　carry→carried　cry→cried　try→tried　worry→worried
三人称単数の -es のときと同じ考え方である。

④ 「母音字＋y」はそのまま -ed
play→played　enjoy→enjoyed　stay→stayed
y の直前が a や o なら、何も変えずに -ed を付ける。plaied は誤り。

■ 五つ目の型：子音字を重ねる
stop→stopped　plan→planned　drop→dropped　shop→shopped
「短い母音1つ＋子音字1つ」で終わる語は、最後の子音字を重ねてから -ed を付ける。母音が短いままであることを示す書き方である。

★ ポイント：まず語の最後の文字を見る。e なら②、y なら③か④（一つ前が母音字かどうか）、それ以外なら①か⑤。この順で判断すれば迷わない。`,
      },
      {
        heading: '子音字を重ねる型を広げすぎない',
        body: `五つ目の「子音字を重ねる」型は便利だが、当てはめすぎる誤りが非常に多い。重ねるのは次の条件をすべて満たすときだけである。

■ 重ねる条件
（ア）最後が「母音字1つ＋子音字1つ」で終わっている
（イ）その母音が短く読まれる（1音節、または最後の部分を強く読む語）

stop →「o（短い母音）＋p（子音字1つ）」で1音節 → stopped ○
plan →「a（短い母音）＋n（子音字1つ）」で1音節 → planned ○
drop → dropped ○　　shop → shopped ○

■ 重ねない例
visit → visited（visit は前のほうを強く読む2音節の語なので重ねない。× visitted）
open → opened（同じく前を強く読む。× openned）
wait → waited（母音字が ai と二つ並んでいるので条件（ア）に当てはまらない。× waitted）
rain → rained（同じく ai なので重ねない）
help → helped（最後が lp と子音字2つなので重ねない）
look → looked（oo と母音字が二つなので重ねない）

⚠ 注意：まぎらわしい組み合わせを並べて覚えると強い。
stop→stopped ／ visit→visited
plan→planned ／ open→opened
drop→dropped ／ wait→waited
左は重ねる、右は重ねない。声に出して「ストップト」「ヴィジティッド」と読み比べると、リズムのちがいでも区別できる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼はそのバスを止めました。」',
        wrongAnswer: 'He stoped the bus.',
        trapExplanation:
          '「過去形は -ed を付けるだけ」と覚えているので、stop にそのまま -ed を付けてしまう。子音字を重ねるという決まりが頭から抜けているために起こる、最も多い書きあやまりの一つ。',
        correctAnswer: 'He stopped the bus.',
        correctExplanation:
          'stop は「短い母音 o ＋子音字 p」で終わる1音節の語なので、p を重ねて stopped とする。同じ型に plan→planned、drop→dropped、shop→shopped がある。stoped と書くと「ストゥープト」のように長く読む語に見えてしまう。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は昨年、京都を訪れました。」',
        wrongAnswer: 'I visitted Kyoto last year.',
        trapExplanation:
          'stopped や planned を覚えたあとに起こる「覚えすぎ」の誤り。最後が「母音字＋子音字」に見えるので、条件を確かめずに t を重ねてしまう。ルールを広げすぎるのも失点の原因になる。',
        correctAnswer: 'I visited Kyoto last year.',
        correctExplanation:
          'visit は vi-sit と2音節で、前の部分を強く読む語なので子音字を重ねない。そのまま -ed を付けて visited とする。open→opened も同じ仲間。子音字を重ねるのは stop・plan・drop のように短くて1音節の語だ、とセットで覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s122',
    subject: 'eigo',
    examType: 'chugaku',
    title: '過去形③：-ed の発音と、まぎらわしいつづり',
    description: '-ed の三つの発音を区別し、リスニングと読み上げでつまずかないようにする',
    intro: 'wanted は「ウォンティド」と、音のかたまりが1つ増えます。ところが looked は「ルックト」で増えません。同じ -ed でも読み方は3通り。聞いた文が過去形かどうかを判断する手がかりになります。',
    order: 622,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '-ed の発音は三種類。[t]／[d]／[id] のどれになるかは直前の音で決まる。',
      '直前が [t] [d] の音のときだけ [id]（wanted, needed, visited, started）と読み、音節が一つ増える。',
      '直前が息だけの音（k, p, s, ʃ, tʃ, f）なら [t]（looked, stopped, washed, watched）。',
      'それ以外（声を出す音・母音）なら [d]（played, opened, listened, cleaned）。',
      'つづりの例外に注意。die→died、lie→lied、agree→agreed（e を重ねない）。',
    ],
    sections: [
      {
        heading: '-ed の三つの発音',
        body: `-ed はいつも「エド」と読むわけではない。直前の音によって、次の三通りに変わる。

■ [id]（イド）と読む場合 ― 直前が t か d の音
wanted（ウォンティド）・needed（ニーディド）・visited（ヴィジティド）・started（スターティド）・decided（ディサイディド）
t や d のあとに t や d を続けると発音しにくいので、間に母音を入れる。この場合だけ音節が一つ増える（want は1音節、wanted は2音節）。

■ [t]（ト）と読む場合 ― 直前が息だけで出す音（k, p, s, sh, ch, f）
looked（ルックト）・stopped（ストップト）・washed（ウォッシュト）・watched（ウォッチト）・helped（ヘルプト）・laughed（ラフト）
つづりに ed とあっても、母音は入らず「ト」とだけ読む。

■ [d]（ド）と読む場合 ― それ以外（声を出す音・母音のあと）
played（プレイド）・opened（オープンド）・listened（リスンド）・cleaned（クリーンド）・lived（リヴド）・enjoyed（エンジョイド）

★ ポイント：見分け方は「直前の音が t / d か、そうでないか」をまず確かめること。t / d なら [id]。ちがえば、その音を出すときにのどがふるえるかどうかで [d] と [t] に分かれる。`,
      },
      {
        heading: 'つづりでまちがえやすい語',
        body: `発音とあわせて、つづりの例外も確認しておく。

■ e で終わる語に -ed を付けるとき
die → died（死んだ）　lie → lied（うそをついた）　tie → tied（結んだ）
これらは e で終わっているので d を足すだけである。dieed とは書かない。また、y に変える必要もないので dyed（染めた）としてしまうのも誤り（dye は「染める」という別の動詞）。

■ ee で終わる語
agree → agreed（同意した）　free → freed
すでに e が二つあるので、そのまま d を足す。

■ 意味のちがいに注意する組
live（リヴ）→ lived（住んでいた）／ leave（リーヴ）→ left（去った・置いてきた／不規則動詞）
plan（計画する）→ planned ／ plant（植える）→ planted
つづりが似ていても、変化のしかたも意味もちがう。

⚠ 注意：入試のリスニングでは「現在形か過去形か」を -ed の音だけで聞き分けさせる問題が出る。とくに [t] と読む型（looked, stopped, watched）は、うっかりすると現在形に聞こえるので、直前の名詞や yesterday などの語もあわせて判断する。

■ 練習：次の -ed の読み方を分けてみる
walked ［t］／ needed ［id］／ played ［d］／ washed ［t］／ visited ［id］／ opened ［d］`,
      },
    ],
    trapExamples: [
      {
        question: 'stopped の -ed の発音として正しいものを選びなさい。ア「ト」［t］　イ「ド」［d］　ウ「イド」［id］',
        wrongAnswer: 'ウ「イド」［id］（ストッピドのように2音節で読む）',
        trapExplanation:
          'つづりで p が二つ重なっているうえに ed という文字が見えるので、「ストッ・ピド」と余分な母音を入れて読んでしまう。文字の見た目につられ、音の決まりで考えていない。',
        correctAnswer: 'ア「ト」［t］（ストップト、1音節）',
        correctExplanation:
          '［id］と読むのは直前が t か d の音のときだけ。stop の最後は p なので［t］と読み、stopped は「ストップト」と1音節で発音する。つづりが長くなっても音節は増えない。wanted［id］、played［d］と並べて音で覚える。',
      },
      {
        question: '次の日本語を英語にしなさい。「そのイヌは3年前に死にました。」',
        wrongAnswer: 'The dog dyed three years ago.',
        trapExplanation:
          'study→studied を覚えているために「y があれば i に変える」と考えたり、dieed とは書けないと気づいて音の似た dye を持ち出したりしてしまう。dye は「（布を）染める」という別の動詞である。',
        correctAnswer: 'The dog died three years ago.',
        correctExplanation:
          'die は e で終わっているので、d を一つ足して died とするだけでよい。lie→lied、tie→tied も同じ型。y を i に変える決まりは study・carry のように「子音字＋y」で終わる語だけに使い、e で終わる語には使わない。',
      },
    ],
  },

  {
    id: 'eigo_s123',
    subject: 'eigo',
    examType: 'chugaku',
    title: '過去形④：否定文・疑問文（did の使い方）',
    description: 'did を使う過去の否定文・疑問文と、be動詞の過去の文とを区別できるようにする',
    intro: 'Did you played tennis? と書いてしまうのはよくあることです。did がすでに「過去」を表しているので、動詞は原形にもどします。しかも be動詞の過去の文には did を使いません。使い分けを固めましょう。',
    order: 623,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞の過去の否定文は did not（didn\'t）＋動詞の原形。',
      '疑問文は Did ＋主語＋動詞の原形 …? で、答えも did / didn\'t を使う。',
      'did を使ったら動詞は必ず原形にもどす（× Did you played）。',
      'be動詞の過去の文には did を使わない。was / were をそのまま前に出す。',
      '疑問詞の文は What did you do? のように「疑問詞＋did＋主語＋原形」の順。',
    ],
    sections: [
      {
        heading: 'did を使う否定文と疑問文',
        body: `一般動詞の過去の文を否定文・疑問文にするときは、do の過去形 did を使う。

■ 否定文
I played tennis. → I did not（didn't）play tennis.（私はテニスをしませんでした）
He watched TV. → He didn't watch TV.（彼はテレビを見ませんでした）
主語が何であっても didn't の形は変わらない。現在形では don't と doesn't を使い分けたが、過去形では didn't だけである。

■ 疑問文
You played tennis. → Did you play tennis?（あなたはテニスをしましたか）
― Yes, I did. / No, I didn't.
She went to school. → Did she go to school?
― Yes, she did. / No, she didn't.

■ did のあとは必ず原形
× Did you played tennis?　○ Did you play tennis?
× He didn't went home.　○ He didn't go home.
過去を表す仕事は did が引き受けているので、動詞まで過去形にすると「過去の印」が二重になってしまう。

■ 疑問詞のある疑問文
What did you do yesterday?（あなたは昨日、何をしましたか）― I studied math.
Where did he go?（彼はどこへ行きましたか）― He went to the library.
When did you get up?（あなたはいつ起きましたか）― I got up at six.
「疑問詞＋did＋主語＋動詞の原形」の順にそろえる。答えの文では過去形にもどることに注意する。

★ ポイント：did が出てきたら、そのうしろの動詞は原形。これだけで多くの失点が防げる。`,
      },
      {
        heading: 'be動詞の過去の文には did を使わない',
        body: `be動詞の文は、現在形のときと同じように「be動詞そのもの」を動かす。did は使わない。

■ 否定文
I was busy. → I was not（wasn't）busy.（私はいそがしくなかった）
They were at home. → They weren't at home.（彼らは家にいなかった）

■ 疑問文
He was at home. → Was he at home?（彼は家にいましたか）
― Yes, he was. / No, he wasn't.
You were tired. → Were you tired?
― Yes, I was. / No, I wasn't.

■ まちがえやすい形
× Did he be at home yesterday?
○ Was he at home yesterday?
× He didn't be busy.
○ He wasn't busy.

■ 見分け方
日本語が「〜でした」「〜だった」「〜にいました」で終わっていれば be動詞、「〜しました」「〜した」なら一般動詞、と大まかに判断できる。迷ったら、まず肯定文を作ってみるとよい。肯定文に was / were があれば be動詞の文、なければ一般動詞の文である。

⚠ 注意：進行形の過去（過去進行形）も be動詞の文なので、did は使わない。
× Did you doing your homework?　○ Were you doing your homework?（あなたは宿題をしていましたか）`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「あなたは昨日、テニスをしましたか。」',
        wrongAnswer: 'Did you played tennis yesterday?',
        trapExplanation:
          '「昨日のことだから動詞も過去形にしなければ」と考えて、Did のあとまで過去形にしてしまう。日本語では「しましたか」と一か所で過去を表すので、英語でも二重になることに気づきにくい。',
        correctAnswer: 'Did you play tennis yesterday?',
        correctExplanation:
          'Did がすでに過去を表しているので、そのあとの動詞は原形 play にもどす。答えるときは Yes, I did. / No, I didn\'t. とし、内容を続けるなら I played tennis with Ken. のように過去形にもどる。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼は昨日、家にいましたか。」',
        wrongAnswer: 'Did he be at home yesterday?',
        trapExplanation:
          '「過去の疑問文は Did で始める」とだけ覚えているため、be動詞の文にも Did を付けてしまう。日本語の「いましたか」が動作のように感じられることも原因になる。',
        correctAnswer: 'Was he at home yesterday?',
        correctExplanation:
          '「家にいた」は be動詞（was）の文なので、was を主語の前に出すだけでよい。答えは Yes, he was. / No, he wasn\'t.。did を使うのは一般動詞の文だけ、be動詞の文は be動詞そのものを動かす、と使い分ける。',
      },
    ],
  },
  // ───────────────── 3. 不規則動詞の過去形・過去分詞（s124〜s128） ─────────────────
  {
    id: 'eigo_s124',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則動詞①：規則動詞と不規則動詞',
    description: '不規則動詞を「原形-過去形-過去分詞」の3変化でとらえ、過去分詞の役割を知る',
    intro: 'go の過去形が goed でないことは知っていても、なぜ went なのかは説明できません。よく使う動詞ほど形が不規則なのです。数は200語ほど。原形・過去形・過去分詞を3つセットで覚える理由から始めます。',
    order: 624,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '不規則動詞は200語ほどしかないが、毎日使う動詞ほど不規則なので出会う回数は非常に多い。',
      '覚えるときは「原形－過去形－過去分詞」の3つをセットで、声に出して覚える。',
      '過去分詞は現在完了（have＋過去分詞）と受け身（be＋過去分詞）で使う形。',
      '過去形と過去分詞は形がちがうことがある（go-went-gone, see-saw-seen）。',
      '不規則動詞に -ed を付けてはいけない（× buyed, × goed, × teached）。',
    ],
    sections: [
      {
        heading: '数は少ないが、出会う回数は多い',
        body: `英語の動詞の大部分は -ed を付けるだけで過去形になる「規則動詞」である。しかし一部の動詞は、まったくちがう形に変わる。これを「不規則動詞」という。

例）go → went（行った）　　see → saw（見た）　　buy → bought（買った）
例）take → took（取った）　　come → came（来た）　　have → had（持っていた）

不規則動詞は全部で200語ほどしかなく、動詞全体から見ればごくわずかである。ところが、be・have・do・go・come・get・take・make・see・say のように毎日使う基本の動詞ほど不規則なので、英文を読むと必ず出てくる。数は少ないのに出会う回数が多い、というのが不規則動詞の特徴である。

だから「まず不規則動詞を全部覚えてしまう」ことが、時制を得点源にする最短の道になる。

★ ポイント：規則動詞は考えれば書ける。不規則動詞は覚えていなければ絶対に書けない。だから覚える価値がいちばん高い。`,
        figureId: 'lf_eigoext04_124',
      },
      {
        heading: '3変化で覚える理由',
        body: `不規則動詞は「原形－過去形－過去分詞」の3つを必ずセットで覚える。過去形だけ覚えても、あとで現在完了を学ぶときに必ず困るからである。

■ 三つの形とその使い道
原形　　… 現在形の文、did のあと、will のあと、to のあと（to go）
過去形　… 過去の文（I went to Kyoto.）
過去分詞… 現在完了（I have gone. / I have seen.）、受け身（It is made in Japan.）

例）go － went － gone
　I go to school.（現在）
　I went to school.（過去）
　He has gone to America.（現在完了）

例）see － saw － seen
　I see a bird.／I saw a bird.／I have seen the movie.

例）eat － ate － eaten
　I eat lunch.／I ate lunch.／I have eaten lunch.

■ 覚え方のコツ
声に出して「ゴー・ウェント・ゴーン」「シー・ソー・シーン」「イート・エイト・イートン」とリズムで唱える。目で見るだけより、音のかたまりで覚えたほうが定着する。1日10語ずつ、3回に分けて口に出すのが効果的である。

⚠ 注意：不規則動詞に -ed を付けるのは、入試でいちばん多い減点である。buyed・goed・teached・comed・seed はすべて誤り。「この動詞は不規則だったか」と一度立ち止まる習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼は昨日、新しい自転車を買いました。」',
        wrongAnswer: 'He buyed a new bike yesterday.',
        trapExplanation:
          '「過去形は -ed を付ける」という規則をすべての動詞に当てはめてしまう。buy は日常でよく使う語なのに不規則動詞である、という意識が薄いと必ず起こる。',
        correctAnswer: 'He bought a new bike yesterday.',
        correctExplanation:
          'buy は buy － bought － bought と変化する不規則動詞。同じ型に bring－brought－brought、think－thought－thought、teach－taught－taught がある。まとめて「オート組」として覚えるとよい。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼女はもう昼食を食べてしまいました。」',
        wrongAnswer: 'She has ate lunch already.',
        trapExplanation:
          'eat の過去形 ate は覚えているが、過去分詞 eaten まで区別できていない。「過去のことだから ate」と考えてしまい、have のあとに過去形を置いてしまう。',
        correctAnswer: 'She has already eaten lunch.',
        correctExplanation:
          'have／has のあとに置くのは過去分詞なので eaten が正しい。eat － ate － eaten と3つセットで覚える。過去形と過去分詞が同じ動詞（buy－bought－bought）もあるので、形がちがう動詞ほど意識して覚える必要がある。',
      },
    ],
  },

  {
    id: 'eigo_s125',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則動詞②：A-B-B型（過去形と過去分詞が同じ）',
    description: '不規則動詞の半分を占める A-B-B 型を、音のグループごとにまとめて覚える',
    intro: 'buy-bought、bring-brought、think-thought。ばらばらに覚えると多く感じますが、音の似たものを組にすると一気に減ります。過去形と過去分詞が同じ A-B-B 型は、不規則動詞のおよそ半分を占めています。',
    order: 625,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'A-B-B型＝過去形と過去分詞が同じ形。不規則動詞のおよそ半分を占める。',
      '「オート／アート組」：buy-bought, bring-brought, think-thought, teach-taught, catch-caught。',
      '「エプト組」：keep-kept, sleep-slept, feel-felt, leave-left, lose-lost, build-built。',
      '「オールド組」：tell-told, sell-sold, hold-held。',
      'say-said, hear-heard, find-found, meet-met, send-sent, make-made, have-had も同型。',
    ],
    sections: [
      {
        heading: 'A-B-B型とは',
        body: `不規則動詞の中でいちばん多いのが、過去形と過去分詞が同じ形になる型である。原形をA、変化後をBと書いて A-B-B 型という。二つ覚えれば済むので、いちばん楽な型でもある。

■ オート・アート組（-ought / -aught）
buy － bought － bought（買う）
bring － brought － brought（持ってくる）
think － thought － thought（思う）
fight － fought － fought（戦う）
teach － taught － taught（教える）
catch － caught － caught（つかまえる）

■ エプト・エルト組（-ept / -elt / -ft）
keep － kept － kept（保つ）
sleep － slept － slept（ねむる）
feel － felt － felt（感じる）
leave － left － left（去る・置いていく）
lose － lost － lost（失う・負ける）
build － built － built（建てる）
spend － spent － spent（費やす）
send － sent － sent（送る）

■ オールド組（-old / -eld）
tell － told － told（伝える）
sell － sold － sold（売る）
hold － held － held（持つ・開催する）

★ ポイント：バラバラに覚えるのではなく、音のグループでまとめる。「ボート・ブロート・ソート・トート・コート」と続けて唱えると、記憶に残りやすい。`,
      },
      {
        heading: 'そのほかの A-B-B 型と使い方',
        body: `■ 覚えておきたい残りの A-B-B 型
say － said － said（言う。発音は「セッド」）
hear － heard － heard（聞こえる。発音は「ハード」）
find － found － found（見つける）
meet － met － met（会う）
sit － sat － sat（すわる）
stand － stood － stood（立つ）
understand － understood － understood（理解する）
make － made － made（作る）
have － had － had（持っている）
pay － paid － paid（支払う）
read － read － read（読む。つづりは同じで発音だけ「リード→レッド」に変わる）

■ 文の中での使い方
I bought this book last week.（過去形）
I have bought a new computer.（現在完了）
This book was bought in Kyoto.（受け身）
過去形と過去分詞が同じなので、どこに置いても形は変わらない。have があれば現在完了、be動詞があれば受け身、どちらもなければ過去形、と見分ける。

⚠ 注意：意味の取りちがえに気をつける動詞がある。
・leave は「去る」だけでなく「（物を）置き忘れる」の意味でもよく出る。I left my bag on the train.（電車にかばんを置き忘れた）
・say は「（内容を）言う」、tell は「（人に）伝える」。say のあとに人は直接置けない。× say me → ○ tell me
・hold は「持つ」のほか「（会などを）開く」。The festival was held last week.（祭りが先週開かれた）`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼は私に本当のことを言いました。」',
        wrongAnswer: 'He said me the truth.',
        trapExplanation:
          '「言う＝say」と一対一で覚えているので、日本語の「私に言った」をそのまま said me としてしまう。say と tell の使い分けは、動詞の形ではなく語法の問題なので、変化だけ覚えていても防げない。',
        correctAnswer: 'He told me the truth.',
        correctExplanation:
          'say のあとに「人」を直接置くことはできず、「〜に言う」と相手を示すときは tell を使う（tell － told － told）。say を使うなら He said to me, "..." のように to が必要。「tell＋人＋内容」「say＋内容」と形で覚える。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼女は10年間、英語を教えています。」',
        wrongAnswer: 'She has teached English for ten years.',
        trapExplanation:
          '現在完了の形（have/has＋過去分詞）は理解できていても、teach が不規則動詞であることを忘れて -ed を付けてしまう。ch で終わるので -ed が自然に見えてしまうのも一因である。',
        correctAnswer: 'She has taught English for ten years.',
        correctExplanation:
          'teach は teach － taught － taught と変化する A-B-B 型。過去形も過去分詞も taught なので、has のあとにそのまま置ける。catch － caught － caught と発音が似ているので、二つ並べて覚えるとよい。',
      },
    ],
  },

  {
    id: 'eigo_s126',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則動詞③：A-B-C型（三つとも形がちがう）',
    description: '最も重要な A-B-C 型を、母音の変化のパターンでまとめて覚える',
    intro: 'I seen it. や They swum. のように、過去分詞を過去形の場所に置くまちがいがよく起こります。see-saw-seen、swim-swam-swum のように3つとも形がちがう型は、数は少ないのに出題は最も多いのです。',
    order: 626,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'A-B-C型＝原形・過去形・過去分詞の三つとも形がちがう。数は少ないが最頻出。',
      '「-en で終わる組」：take-took-taken, give-gave-given, write-wrote-written, speak-spoke-spoken。',
      '「i-a-u 組」：sing-sang-sung, drink-drank-drunk, swim-swam-swum, begin-began-begun, ring-rang-rung。',
      'go-went-gone, see-saw-seen, eat-ate-eaten, do-did-done, be-was/were-been は最重要。',
      '過去分詞を過去形の位置に置く誤り（× I seen, × They swum）がいちばん多い。',
    ],
    sections: [
      {
        heading: '-en で終わる組と i-a-u 組',
        body: `三つとも形がちがう A-B-C 型は、数こそ少ないものの、どれも毎日使う動詞ばかりである。母音の変わり方でグループにすると覚えやすい。

■ 過去分詞が -en / -n で終わる組
take － took － taken（取る）
give － gave － given（与える）
write － wrote － written（書く）
speak － spoke － spoken（話す）
break － broke － broken（こわす）
choose － chose － chosen（選ぶ）
drive － drove － driven（運転する）
ride － rode － ridden（乗る）
know － knew － known（知っている）
grow － grew － grown（育つ）
throw － threw － thrown（投げる）
fly － flew － flown（飛ぶ）
draw － drew － drawn（線でかく）
see － saw － seen（見える）
eat － ate － eaten（食べる）
fall － fell － fallen（落ちる）
forget － forgot － forgotten（忘れる）
wear － wore － worn（身につけている）

■ i － a － u と母音が変わる組
sing － sang － sung（歌う）
drink － drank － drunk（飲む）
swim － swam － swum（泳ぐ）
begin － began － begun（始める）
ring － rang － rung（鳴る）
「イ・ア・ウ」と口の形が順に変わるので、声に出すと一気に覚えられる。

★ ポイント：A-B-C 型は「過去分詞に -en が付くか」「母音が i-a-u と動くか」の二つでほとんど整理できる。`,
      },
      {
        heading: '最重要の五語と、位置による使い分け',
        body: `次の五語は英語のあらゆる文に出てくるので、何よりも先に覚える。

go － went － gone（行く）
do － did － done（する）
see － saw － seen（見える）
eat － ate － eaten（食べる）
be － was / were － been（〜である・いる）

be動詞だけは過去形が二つ（was と were）ある点に注意する。

■ 位置で形が決まる
I went to Kyoto last year.（過去形：文の中心の動詞）
I have been to Kyoto twice.（過去分詞：have のあと）
This letter was written by Ken.（過去分詞：be動詞のあと＝受け身）
I want to go to Kyoto.（原形：to のあと）
Did you go to Kyoto?（原形：did のあと）
I will go to Kyoto.（原形：will のあと）

つまり、動詞の形は「意味」ではなく「置かれる場所」で決まる。have があれば過去分詞、did や will のあとなら原形、と機械的に判断できる。

⚠ 注意：口語では I seen it. / They swum. のような言い方を耳にすることがあるが、これは誤った形として入試では×になる。過去分詞は単独で文の動詞にはなれない。必ず have か be動詞といっしょに使う、と覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私はその映画を見たことがあります。」',
        wrongAnswer: 'I have saw that movie.',
        trapExplanation:
          'see の過去形 saw はよく知っているが、過去分詞 seen が別にあることを意識していない。「過去のことだから saw」と考え、have のあとにそのまま置いてしまう。',
        correctAnswer: 'I have seen that movie.',
        correctExplanation:
          'have／has のあとは必ず過去分詞なので seen を使う。see － saw － seen と3つ唱えて覚える。同じ型に eat － ate － eaten、take － took － taken、write － wrote － written がある。過去分詞が -en で終わる組としてまとめて覚えるとよい。',
      },
      {
        question: '次の日本語を英語にしなさい。「その鳥は空高く飛びました。」',
        wrongAnswer: 'The bird flied high in the sky.',
        trapExplanation:
          'fly が y で終わっているので、study → studied の決まりを当てはめて flied としてしまう。つづりの規則を思い出したことが、かえって不規則動詞であることを見えなくしている。',
        correctAnswer: 'The bird flew high in the sky.',
        correctExplanation:
          'fly は fly － flew － flown と変化する不規則動詞。y を i に変える決まりは規則動詞にしか使えない。同じ型に grow － grew － grown、throw － threw － thrown、know － knew － known、draw － drew － drawn がある。',
      },
    ],
  },

  {
    id: 'eigo_s127',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則動詞④：A-A-A型・A-B-A型',
    description: '形が変わらない型と、原形と過去分詞が同じ型を区別して覚える',
    intro: 'cut や put は、原形も過去形も同じ形です。では I cut it. は「切る」でしょうか、「切った」でしょうか。形では決まらないので周りの語から判断します。read に至っては、形は同じで発音だけ変わります。',
    order: 627,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'A-A-A型＝三つとも同じ形。cut, put, set, hit, let, shut, cost, hurt。',
      'read は A-A-A 型だが、発音だけ「リード→レッド」に変わる。',
      'A-B-A型＝原形と過去分詞が同じ。come-came-come, run-ran-run, become-became-become。',
      'A-A-A型は形が同じなので、時制は主語や周りの語から判断する。',
      'A-B-A型では過去形だけがちがうので、過去形の書き落としに注意する。',
    ],
    sections: [
      {
        heading: 'A-A-A型：形が変わらない動詞',
        body: `三つとも同じ形のままの動詞がある。楽に見えるが、逆に「時制が見た目で分からない」というむずかしさがある。

■ 代表的な A-A-A 型
cut － cut － cut（切る）
put － put － put（置く）
set － set － set（置く・整える）
hit － hit － hit（打つ）
let － let － let（させる）
shut － shut － shut（閉める）
cost － cost － cost（費用がかかる）
hurt － hurt － hurt（傷つける・痛む）

■ read はつづりだけ同じ
read － read － read
つづりは三つとも read だが、発音は「リード → レッド → レッド」と変わる。音読の問題や読解でよく問われる。
例）I read a book every night.（リード＝現在形）
例）I read a book last night.（レッド＝過去形）
この二文はつづりだけ見ると区別がつかない。every night か last night かで判断する。

■ 時制の見分け方
He cut the paper.（過去形か現在形か？）
主語が He なのに -s が付いていないので、これは過去形である。現在形なら He cuts the paper. となる。
このように、A-A-A 型の文では「三単現の -s があるかどうか」「yesterday などの語があるかどうか」で時制を判断する。

★ ポイント：A-A-A 型の動詞が出てきたら、必ず文全体を見て時制を決める。動詞の形だけ見ても答えは出ない。`,
      },
      {
        heading: 'A-B-A型：原形と過去分詞が同じ',
        body: `過去形だけがちがい、原形と過去分詞が同じ形にもどる型もある。

come － came － come（来る）
run － ran － run（走る）
become － became － become（〜になる）

■ 文の中での使い分け
He comes here every day.（現在形）
He came here yesterday.（過去形）
He has come here many times.（現在完了：過去分詞は come にもどる）

I run every morning.（現在形）
I ran in the park yesterday.（過去形）
I have run ten kilometers.（現在完了）

■ まちがえやすい点
come－came－come のように原形と過去分詞が同じだと、「じゃあ過去形も come でいいのでは」と考えて He come here yesterday. と書いてしまう誤りが多い。真ん中だけがちがう型だと、はっきり意識しておく。

⚠ 注意：become は「〜になる」という意味で、あとに名詞や形容詞が続く。He became a doctor.（彼は医者になった）／ It became cold.（寒くなった）。過去分詞も become なので、He has become a good player.（彼はよい選手になった）となる。

■ 型のまとめ
A-B-B（teach－taught－taught）… いちばん多い
A-B-C（go－went－gone）… 数は少ないが最頻出
A-A-A（cut－cut－cut）… 形は同じ、時制は周りで判断
A-B-A（come－came－come）… 真ん中だけちがう`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の下線部 read の読み方を答えなさい。I read an interesting book last night.',
        wrongAnswer: '「リード」と読む',
        trapExplanation:
          'つづりが現在形とまったく同じなので、そのまま「リード」と読んでしまう。read が不規則動詞で、つづりを変えずに発音だけ変わることを知らないと必ず落とす。',
        correctAnswer: '「レッド」と読む（過去形）',
        correctExplanation:
          'last night があるのでこの read は過去形であり、発音は「レッド」になる。read － read － read はつづりが同じで発音だけ変わる特別な動詞。文中の時を表す語や三単現の -s の有無を手がかりに、どの時制かを先に決めてから読む。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼は昨日、ここへ来ました。」',
        wrongAnswer: 'He come here yesterday.',
        trapExplanation:
          'come－came－come の三つのうち二つが come なので、「come のままでよい」と思いこんでしまう。A-B-A 型は真ん中だけがちがう、という点が抜け落ちている。',
        correctAnswer: 'He came here yesterday.',
        correctExplanation:
          '過去形は came である。原形と過去分詞が同じ come だからこそ、過去形 came を強く意識して覚える必要がある。run － ran － run、become － became － become も同じ型で、真ん中だけが変わる。',
      },
    ],
  },

  {
    id: 'eigo_s128',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則動詞⑤：まぎらわしい動詞の総整理',
    description: '形が似ていて取りちがえやすい不規則動詞を、意味とセットで区別する',
    intro: 'fall（落ちる）と feel（感じる）は、過去形が fell と felt でよく似ています。leave は「去る」とも「置き忘れる」とも訳せます。形も意味もまぎらわしい動詞は、例文ごと覚えるのが結局いちばん速い方法です。',
    order: 628,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'fall（落ちる）－fell－fallen と feel（感じる）－felt－felt を混同しない。',
      'find（見つける）－found－found と、規則動詞 found（設立する）－founded は別語。',
      'leave（去る・置き忘れる）－left－left と forget（忘れる）の使い分け。',
      'A-B-B型が半分を占めるので、まずそこから覚えると効率がよい。',
      '意味が二つある動詞（leave, hold, run, spend）は、例文ごと覚える。',
    ],
    sections: [
      {
        heading: '型ごとの分量を知って、覚える順番を決める',
        body: `不規則動詞を「やみくもに全部」覚えようとすると続かない。型ごとの分量を知り、多い型から手をつけると効率がよい。

■ おおよその内訳
A-B-B型（teach－taught－taught）… 約半分
A-B-C型（go－went－gone）… 3割ほど
A-A-A型（cut－cut－cut）… 1割強
A-B-A型（come－came－come）… わずか3語（come, run, become）

つまり、A-B-B 型をまとめて覚えるだけで半分が終わる。次に A-B-C 型を覚えれば8割に届く。残りの A-A-A 型・A-B-A 型は語数が少ないので、最後に一気に暗記できる。

■ 覚える順番の目安
第1週：A-B-B型のオート組・エプト組（buy, bring, think, teach, catch, keep, sleep, feel, leave, lose）
第2週：A-B-B型の残り（say, hear, find, meet, sit, stand, make, have, tell, sell）
第3週：A-B-C型の -en 組（take, give, write, speak, break, know, see, eat）
第4週：A-B-C型の i-a-u 組と A-A-A型・A-B-A型

★ ポイント：毎日ちがう語を少しずつではなく、同じ型を1週間くり返す。型のリズムごと体に入れるほうが忘れにくい。`,
        figureId: 'lf_eigoext04_128',
      },
      {
        heading: 'まぎらわしい組をペアで区別する',
        body: `入試で差がつくのは、形や意味が似ている動詞の区別である。ペアにして覚える。

■ fall と feel
fall － fell － fallen（落ちる・倒れる）
feel － felt － felt（感じる）
He fell from the tree.（彼は木から落ちた）
He felt sad.（彼は悲しく感じた）
fell と felt は l が一つちがうだけなので、意味とセットで覚える。

■ find と found
find － found － found（見つける）
found － founded － founded（設立する。これは規則動詞）
I found my key.（かぎを見つけた）
The school was founded in 1950.（その学校は1950年に設立された）

■ leave と forget
leave － left － left（去る／物を置き忘れる）
forget － forgot － forgotten（忘れる＝頭から抜ける）
I left my bag on the train.（かばんを電車に置き忘れた ← 場所を言うときは leave）
I forgot his name.（彼の名前を忘れた ← 場所を言わないときは forget）

■ そのほかの注意組
lose － lost － lost（失う・負ける）／ loose（ゆるい：形容詞で別語）
sit（すわる：sit－sat－sat）／ set（置く：set－set－set）
rise（のぼる：rise－rose－risen）／ raise（上げる：規則動詞 raised）

⚠ 注意：意味が二つある動詞は、両方の例文を覚えておく。
hold：持つ／開催する　The meeting was held last Friday.
run：走る／経営する　My uncle runs a small shop.
spend：（お金を）使う／（時間を）過ごす　I spent two hours on my homework.`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼は昨日、木から落ちました。」',
        wrongAnswer: 'He felt from the tree yesterday.',
        trapExplanation:
          'fall と feel はつづりも音も似ているうえ、過去形 fell と felt は一文字ちがいなので取りちがえやすい。単語カードで形だけ覚えていると、意味の確認がおろそかになる。',
        correctAnswer: 'He fell from the tree yesterday.',
        correctExplanation:
          '「落ちる」は fall － fell － fallen なので過去形は fell。「感じる」は feel － felt － felt で過去形は felt。fall には fall（秋）という名詞の意味もあるので、「秋は葉が落ちる」と結びつけて覚えると区別しやすい。',
      },
      {
        question: '次の日本語を英語にしなさい。「私はかばんを電車に置き忘れました。」',
        wrongAnswer: 'I forgot my bag on the train.',
        trapExplanation:
          '「忘れた＝forget」と一対一で覚えているため、場所を表す語が付いていても forgot を使ってしまう。動詞の変化ではなく語法の問題なので、暗記だけでは防げない。',
        correctAnswer: 'I left my bag on the train.',
        correctExplanation:
          '「（場所に）置き忘れる」は leave － left － left を使う。forget は「記憶から抜ける」ことを表し、あとに場所を表す語句を続けることはできない。「場所が出てきたら leave」と形で覚えておくとよい。',
      },
    ],
  },

  // ───────────────────── 4. 現在進行形（s129〜s132） ─────────────────────
  {
    id: 'eigo_s129',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在進行形①：be動詞＋~ing のかたち',
    description: '「今まさにしている最中」を表す現在進行形の形と意味をつかむ',
    intro: '「私は英語を勉強しています」を I am study English. と書いてしまう人はとても多いのです。am のうしろは studying でなければなりません。be動詞と ~ing はセット。どちらが欠けても文になりません。',
    order: 629,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '現在進行形は「be動詞（am/is/are）＋動詞の ~ing 形」。be動詞を落とさない。',
      '意味は「今まさに〜している最中だ」。今を含む短い時間の幅を表す。',
      'be動詞は主語に合わせて am / is / are を使い分ける。',
      'now, right now, at this moment, Look!, Listen! が合図になる。',
      '~ing 形だけでは動詞のはたらきをしない（× He playing soccer.）。',
    ],
    sections: [
      {
        heading: '現在進行形が指す時間',
        body: `現在進行形は「今まさにしている最中だ」ということを表す。少し前に始まり、今も続いていて、もうすぐ終わる、という短い時間の幅を指している。

例）I am reading a book now.（私は今、本を読んでいるところです）
例）She is cooking dinner.（彼女は夕食を作っているところです）
例）They are playing soccer in the park.（彼らは公園でサッカーをしているところです）

■ 形は「be動詞＋~ing」
主語　　　be動詞　　~ing形
I　　　　　am　　　reading
He / She / It　is　　reading
You / We / They　are　reading

■ 合図になる語
now（今）・right now（ちょうど今）・at this moment（この瞬間）
Look!（見て！）・Listen!（聞いて！）
Look! The bus is coming.（見て！　バスが来るよ）
Listen! Someone is singing.（聞いて！　だれかが歌っているよ）
命令の形で相手の注意を今この瞬間に向けているので、あとには必ず進行形が続く。

★ ポイント：現在形が「点がくり返し並ぶ」形なのに対し、現在進行形は「今を包む一本の帯」。同じ「今」でも、指しているものがまったくちがう。`,
        figureId: 'lf_eigoext04_129',
      },
      {
        heading: 'be動詞を落とさない',
        body: `現在進行形でいちばん多い失点は、be動詞を書き落とすことである。

× They playing soccer.
○ They are playing soccer.
× He studying English.
○ He is studying English.

日本語の「〜している」は動詞ひとつで表せるので、英語でも一語で足りると感じてしまうのが原因である。しかし英語の ~ing 形は、それだけでは文の動詞になれない。必ず be動詞とセットで使う。

■ ~ing 形だけを使う場面（参考）
Playing soccer is fun.（サッカーをすることは楽しい）← 主語になっている
これは「動名詞」と呼ばれる別の使い方で、進行形ではない。進行形として使うなら必ず be動詞が前に必要である。

■ ~ing を落とす誤りもある
× My mother is cook in the kitchen.
○ My mother is cooking in the kitchen.
be動詞と原形をそのまま並べても進行形にはならない。be動詞＋~ing の二つがそろって、はじめて「〜している最中」の意味になる。

⚠ 注意：主語が長いときは、be動詞の形を選びまちがえやすい。
The boys in the park are playing baseball.（主語は The boys＝複数なので are）
The girl with two dogs is walking along the river.（主語は The girl＝単数なので is）
in the park や with two dogs は主語の説明にすぎない。前置詞のかたまりを取りのぞいてから be動詞を決める。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼らは公園でサッカーをしています。」',
        wrongAnswer: 'They playing soccer in the park.',
        trapExplanation:
          '日本語の「しています」が動詞ひとつで表せるので、英語でも playing だけで足りると感じてしまう。~ing 形が単独では文の動詞になれない、という仕組みが身についていない。',
        correctAnswer: 'They are playing soccer in the park.',
        correctExplanation:
          '現在進行形は必ず「be動詞＋~ing」の二語一組で使う。主語 They は複数なので are を置く。英作文では ~ing を書いたら、その前に am / is / are があるかを必ず指さして確認する習慣をつける。',
      },
      {
        question: '次の日本語を英語にしなさい。「見て！　あの鳥は歌っているよ。」',
        wrongAnswer: 'Look! That bird sings.',
        trapExplanation:
          '「鳥は歌う」という内容だけを見て現在形を選んでしまう。Look! が「今この瞬間を見て」という合図であることに気づいていない。',
        correctAnswer: 'Look! That bird is singing.',
        correctExplanation:
          'Look! や Listen! は相手の注意を今この瞬間に向ける語なので、あとには現在進行形が続く。That bird sings. だと「あの鳥は（いつも）歌う」という習慣の意味になり、目の前の場面を表せない。',
      },
    ],
  },

  {
    id: 'eigo_s130',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在進行形②：現在形（習慣）との使い分け',
    description: '同じ「〜しています」でも、習慣なら現在形・進行中なら進行形と選び分ける',
    intro: '「私はテニスをしています」は、部活の話なら I play tennis.、今コートにいるなら I am playing tennis.。日本語の「〜ています」は両方に使えるあいまいな言い方なので、英語にするとき必ず立ち止まります。',
    order: 630,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '日本語の「〜ています」は、習慣にも進行中にも使えるあいまいな言い方。',
      'every day / usually / always があれば現在形、now / Look! があれば進行形。',
      '「今この瞬間そうしているか」を自分に問いかけてから形を決める。',
      '職業・状態を述べる「〜しています」は現在形（She teaches English.）。',
      '「〜を飼っています」「〜を持っています」は have を使い、進行形にしない。',
    ],
    sections: [
      {
        heading: '日本語の「〜ています」は二つの意味を持つ',
        body: `日本語の「〜ています」は、次の二つをどちらも表せる、とてもあいまいな言い方である。

① 今まさにしている最中　→　英語では現在進行形
　「私は今、英語を勉強しています」　I am studying English now.
② いつもくり返している習慣　→　英語では現在形
　「私は毎日、英語を勉強しています」　I study English every day.

日本語では同じ「勉強しています」なのに、英語ではまったくちがう形になる。だから日本語をそのまま置きかえるのではなく、「今この瞬間そうしているのか」を必ず自分に問いかける必要がある。

■ 見分けの合図
現在形になる語：every day / every morning / on Sundays / usually / always / often / sometimes / never
現在進行形になる語：now / right now / at this moment / Look! / Listen! / these days（最近）

例）My father usually gets up at six.（父はたいてい6時に起きます＝習慣）
例）My father is getting up now.（父は今、起きているところです＝今の動作）

★ ポイント：迷ったら「今、目の前でその動作をしているか」を考える。していれば進行形、していなくても言えるなら現在形。`,
        figureId: 'lf_eigoext04_130',
      },
      {
        heading: '進行形にしてはいけない「〜ています」',
        body: `日本語で「〜ています」となっていても、英語では進行形にできない場合がある。とくに次の三つに注意する。

■ ① 職業や役割を述べるとき
She teaches English at a high school.（彼女は高校で英語を教えています）
My father works for a bank.（父は銀行に勤めています）
「今この瞬間に教えている」のではなく「そういう仕事をしている」という意味なので現在形になる。

■ ② 所有・状態を表すとき
I have two dogs.（私はイヌを2匹飼っています）
He knows my name.（彼は私の名前を知っています）
She lives in Osaka.（彼女は大阪に住んでいます）
I like music.（私は音楽が好きです）
これらは動作ではなく状態なので、進行形にしない。× I am having two dogs. は誤り。

■ ③ 変わらない事実を述べるとき
The earth goes around the sun.（地球は太陽のまわりを回っています）
This river flows into the sea.（この川は海に流れこんでいます）

⚠ 注意：逆に、現在形で書いてしまう誤りも多い。
× My father reads a newspaper now.
○ My father is reading a newspaper now.
now があるのに現在形にすると「父は今（いつも）新聞を読む」という意味不明な文になる。now / Look! / Listen! を見たら反射的に進行形、と覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は毎日ピアノを弾いています。」',
        wrongAnswer: 'I am playing the piano every day.',
        trapExplanation:
          '「弾いています」の「〜ています」だけを見て進行形を選んでしまう。every day という「くり返し」を示す語があるのに、日本語の語尾のほうに気を取られている。',
        correctAnswer: 'I play the piano every day.',
        correctExplanation:
          'every day があるので、これは今この瞬間の動作ではなく習慣である。習慣は現在形で表すので I play the piano every day. とする。「〜ています」を見たら、まず every day や now などの合図の語をさがしてから形を決める。',
      },
      {
        question: '次の日本語を英語にしなさい。「私はイヌを2匹飼っています。」',
        wrongAnswer: 'I am having two dogs.',
        trapExplanation:
          '「飼っています」の「〜ています」から進行形を選び、さらに「飼う＝have」と考えて am having としてしまう。have が状態を表す動詞で進行形にできないことを知らないと起こる。',
        correctAnswer: 'I have two dogs.',
        correctExplanation:
          '「飼っている・持っている」という所有は状態なので、have を現在形のまま使う。状態を表す動詞（have・know・like・want・live）は、日本語が「〜ています」でも進行形にしない。これは次のまとまりで学ぶ「状態動詞」の代表例である。',
      },
    ],
  },

  {
    id: 'eigo_s131',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在進行形③：~ing のつづり',
    description: '~ing 形の作り方を三つの型で整理し、書きあやまりをなくす',
    intro: 'run は runing ではなく running、make は makeing ではなく making、die は dieing ではなく dying。~ing を付けるだけなのに、語尾によって型が分かれます。書き取りで差がつくところです。',
    order: 631,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '原則はそのまま -ing（play→playing, study→studying, watch→watching）。',
      'e で終わる語は e を取って -ing（make→making, write→writing, come→coming）。',
      '「短い母音＋子音字1つ」は子音字を重ねて -ing（run→running, swim→swimming, sit→sitting）。',
      'ie で終わる語は ie を y に変えて -ing（die→dying, lie→lying）。',
      'see→seeing、be→being は e を取らない。',
    ],
    sections: [
      {
        heading: '三つの型',
        body: `~ing 形の作り方は、次の三つの型で整理できる。

① そのまま -ing を付ける（いちばん多い）
play→playing　study→studying　watch→watching　read→reading　listen→listening　enjoy→enjoying
study は y を i に変えない。studying が正しい（過去形の studied とは扱いがちがう）。

② e で終わる語は e を取ってから -ing
make→making　write→writing　come→coming　take→taking　use→using　have→having　live→living　dance→dancing
「発音しない e」なので、取ってしまう。makeing とは書かない。
ただし see→seeing、agree→agreeing、be→being は e を残す（ee や特別な形のため）。

③ 「短い母音1つ＋子音字1つ」は子音字を重ねる
run→running　swim→swimming　sit→sitting　get→getting　put→putting　cut→cutting　stop→stopping　begin→beginning　shop→shopping
過去形で stopped としたのと同じ考え方である。

■ 例外：ie → y
die→dying（死ぬ）　lie→lying（横になる・うそをつく）　tie→tying（結ぶ）
i が二つ続くのをさけるため、ie を y に変える。

★ ポイント：語の最後を見て、e なら②、「母音1つ＋子音字1つ」なら③、それ以外は①。この順に判断すれば迷わない。`,
      },
      {
        heading: '重ねる・重ねないの見分け',
        body: `③の「子音字を重ねる」型を広げすぎる誤りが多い。重ねるのは次の条件を満たすときだけである。

■ 重ねる条件
（ア）最後が「母音字1つ＋子音字1つ」
（イ）その母音を短く読む（1音節、または最後を強く読む語）

run → running（u が短い、1音節）○
swim → swimming ○　sit → sitting ○　get → getting ○
begin → beginning（be-GIN と最後を強く読むので重ねる）○

■ 重ねない例
wait → waiting（母音字が ai と二つ並ぶ。× waitting）
read → reading（ea と二つ。× readding）
look → looking（oo と二つ。× lookking）
help → helping（最後が lp と子音字二つ。× helpping）
open → opening（O-pen と前を強く読む2音節。× openning）
visit → visiting（前を強く読む。× visitting）

■ まぎらわしい組を並べて覚える
run→running ／ rain→raining
sit→sitting ／ wait→waiting
stop→stopping ／ open→opening
swim→swimming ／ seem→seeming

⚠ 注意：進行形と過去形で判断の基準は同じである。stop は stopped と stopping、visit は visited と visiting。過去形で重ねる語は進行形でも重ね、重ねない語はどちらでも重ねない。一度覚えれば両方に使える。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼は今、公園を走っています。」',
        wrongAnswer: 'He is runing in the park now.',
        trapExplanation:
          '「~ing を付けるだけ」と覚えているので、run にそのまま ing を付けてしまう。子音字を重ねる決まりが抜けている、最も多い書きあやまりの一つである。',
        correctAnswer: 'He is running in the park now.',
        correctExplanation:
          'run は「短い母音 u ＋子音字 n」で終わる1音節の語なので、n を重ねて running とする。同じ型に swim→swimming、sit→sitting、get→getting、begin→beginning がある。runing と書くと「ルーニング」のように長く読む語に見えてしまう。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は今、電車を待っています。」',
        wrongAnswer: 'I am waitting for the train now.',
        trapExplanation:
          'running や sitting を覚えたあとに起こる「覚えすぎ」の誤り。最後が t で終わっているので条件を確かめずに重ねてしまう。ルールは適用しすぎても失点になる。',
        correctAnswer: 'I am waiting for the train now.',
        correctExplanation:
          'wait は母音字が ai と二つ並んでいるので、「母音字1つ＋子音字1つ」という条件に当てはまらない。そのまま -ing を付けて waiting とする。rain→raining、read→reading、look→looking も同じで重ねない。',
      },
    ],
  },

  {
    id: 'eigo_s132',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在進行形④：否定文・疑問文と答え方',
    description: '進行形の否定文・疑問文はすべて be動詞を動かす、という原則を徹底する',
    intro: 'Do you playing soccer? と書いてしまうのは、疑問文には do が要ると思いこんでいるからです。進行形の文にはすでに be動詞があるので、それを前に出すだけ。動かすのは be動詞、と決めてしまいましょう。',
    order: 632,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '否定文は be動詞のすぐあとに not を置く（He is not playing.）。',
      '疑問文は be動詞を主語の前に出す（Are you studying?）。',
      '答えも be動詞でそろえる（Yes, I am. / No, I am not.）。do は使わない。',
      '疑問詞の文は「疑問詞＋be動詞＋主語＋~ing …?」の順（What are you doing?）。',
      'What are you doing? には I am ~ing … で答える。',
    ],
    sections: [
      {
        heading: '否定文・疑問文はすべて be動詞を動かす',
        body: `進行形は be動詞を使う文なので、否定文も疑問文も be動詞の文とまったく同じ作り方になる。do や does は使わない。

■ 否定文：be動詞のすぐあとに not
He is playing soccer. → He is not（isn't）playing soccer.
They are watching TV. → They aren't watching TV.
I am reading. → I am not reading.（am not に短縮形はない）

■ 疑問文：be動詞を主語の前に出す
You are studying. → Are you studying?
― Yes, I am. / No, I'm not.
She is cooking. → Is she cooking?
― Yes, she is. / No, she isn't.

■ 答え方をそろえる
質問が Are 〜? なら答えも am / are / is を使う。
× Are you watching TV? ― Yes, I do.
○ Are you watching TV? ― Yes, I am.
「聞かれた動詞で答える」が英語の原則である。Do you 〜? には do、Are you 〜? には be動詞、Did you 〜? には did、で答える。

★ ポイント：進行形の文を見たら「これは be動詞の文だ」と最初に決めてしまう。そうすれば否定も疑問も自動的に決まる。`,
      },
      {
        heading: '疑問詞を使う進行形の疑問文',
        body: `疑問詞（what, where, who, how など）を使うときは、疑問詞を文の先頭に置き、そのあとを疑問文の形にする。

■ 語順
疑問詞 ＋ be動詞 ＋ 主語 ＋ ~ing … ?

What are you doing?（あなたは何をしているのですか）
― I'm doing my homework.（宿題をしています）
Where is he going?（彼はどこへ行くところですか）
― He is going to the library.
Who is playing the piano?（だれがピアノを弾いているのですか）
― Ken is.（ケンです）
※ 疑問詞 who が主語のときは、そのまま「Who is ~ing …?」の語順になる。

■ よく問われる答え方
What are you doing? に対しては、動作を答えるので I am ~ing … と進行形で返す。
× What are you doing? ― I do my homework.
○ What are you doing? ― I'm doing my homework.

How are you feeling today?（今日は気分はどうですか）― I'm feeling better, thank you.

⚠ 注意：What do you do? と What are you doing? はまったく意味がちがう。
What do you do?（あなたは何をしていますか＝ご職業は何ですか）
What are you doing?（あなたは今、何をしているのですか）
現在形は習慣や職業、進行形は今この瞬間の動作を尋ねる。会話文の問題でよく出るちがいである。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「あなたは今、何をしているのですか。」',
        wrongAnswer: 'What do you doing now?',
        trapExplanation:
          '「疑問文は do で始める」と強く覚えているため、進行形の文にも do を持ちこんでしまう。be動詞の文には do を使わない、という区別ができていない。',
        correctAnswer: 'What are you doing now?',
        correctExplanation:
          '進行形は be動詞の文なので、疑問文では be動詞を主語の前に出す。「疑問詞＋be動詞＋主語＋~ing」の順で What are you doing now? とする。答えも I am doing my homework. のように進行形でそろえる。',
      },
      {
        question: '次の問いに対する正しい答えを選びなさい。Are you watching TV? ― （Yes, I do. / Yes, I am.）',
        wrongAnswer: 'Yes, I do.',
        trapExplanation:
          'Yes, I do. という答え方を先に覚えているため、質問の形を確かめずに口をついて出てしまう。聞かれた動詞と答えの動詞をそろえる、という原則が身についていない。',
        correctAnswer: 'Yes, I am.',
        correctExplanation:
          '質問が Are 〜? なので、答えも be動詞を使って Yes, I am. / No, I\'m not. とする。Do you 〜? なら Yes, I do.、Did you 〜? なら Yes, I did.、Have you 〜? なら Yes, I have.、と質問の先頭の語で答えが決まる。',
      },
    ],
  },
  // ───────────── 5. 過去進行形・進行形にしない動詞（s133〜s136） ─────────────
  {
    id: 'eigo_s133',
    subject: 'eigo',
    examType: 'chugaku',
    title: '過去進行形①：was / were ＋ ~ing',
    description: '過去のある時点で進行中だった動作を表す形をつかむ',
    intro: '「7時には夕食を食べていました」は、I had dinner at seven. ではなく I was having dinner at seven.。過去形は1回で終わった動作、過去進行形はそのとき続いていた動作を表します。',
    order: 633,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '過去進行形は「was / were ＋ ~ing」で、「そのとき〜している最中だった」を表す。',
      'be動詞は主語に合わせる。I・三人称単数→was、you・複数→were。',
      'then / at that time / at seven last night のように「過去の一点」を示す語と使う。',
      '否定文・疑問文は be動詞を動かす（wasn\'t / Were you 〜?）。did は使わない。',
      '過去形は「一回で終わった動作」、過去進行形は「続いていた動作」。',
    ],
    sections: [
      {
        heading: '過去進行形の形と意味',
        body: `過去進行形は「過去のある時点で、その動作が進行中だった」ことを表す。現在進行形の be動詞を過去形にするだけでよい。

例）I was watching TV at eight last night.（私は昨夜8時にテレビを見ていました）
例）They were playing soccer then.（彼らはそのときサッカーをしていました）
例）She was studying in her room.（彼女は自分の部屋で勉強していました）

■ 形
I / He / She / It ＋ was ＋ ~ing
You / We / They ＋ were ＋ ~ing

■ いっしょに使われる語
then（そのとき）・at that time（そのとき）・at eight last night（昨夜8時に）
this morning（今朝）・when I came home（私が家に帰ったとき）
「過去のどの時点で進行中だったのか」をはっきりさせる語句が必要になる。ただ was playing とだけ言っても、いつのことか分からないからである。

■ 過去形とのちがい
I watched TV last night.（昨夜テレビを見た＝見たという事実だけ）
I was watching TV at eight last night.（昨夜8時には見ている最中だった＝その時点で進行中）
前者は「見た」という出来事を一点として述べ、後者は「その時刻に続いていた」という幅を述べている。

★ ポイント：過去進行形は「過去に置いた帯」。その帯のどこかを指し示す語句（then、at eight、when 〜）がセットになる。`,
        figureId: 'lf_eigoext04_133',
      },
      {
        heading: '否定文・疑問文と、二つの動作の関係',
        body: `■ 否定文・疑問文は be動詞を動かす
He was sleeping. → He was not（wasn't）sleeping.
They were studying. → They weren't studying.
You were reading. → Were you reading?　― Yes, I was. / No, I wasn't.
What were you doing at that time?（そのとき何をしていましたか）― I was cooking dinner.
現在進行形と同じく、did は使わない。× Did you doing 〜? は誤りである。

■ 二つの動作が同時に起こる文
過去進行形は、別の動作といっしょに使われることが多い。
When I came home, my mother was cooking dinner.
（私が家に帰ったとき、母は夕食を作っていました）
この文では、母が料理をしている長い時間の帯の中に、「私が帰った」という一回きりの動作が割りこんでいる。

■ どちらを進行形にするか
・長く続いていたほう　→　過去進行形（was cooking）
・その途中で起きた短い動作　→　過去形（came）
両方を過去形にすると「帰ってから料理を始めた」という別の意味になってしまうので、区別が重要である。

⚠ 注意：主語が長いときの was / were の選びまちがえに注意する。
My brother and I were listening to music then.（兄と私＝二人なので were）
The boys in the park were playing baseball.（主語は The boys＝複数なので were）
すぐ前の語ではなく、主語全体の数で決める。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私が家に帰ったとき、母は夕食を作っていました。」',
        wrongAnswer: 'When I came home, my mother cooked dinner.',
        trapExplanation:
          '「過去の話なのだから、二つとも過去形でよい」と考えてしまう。日本語の「作っていました」の「〜ていました」が進行を表していることに気づいていない。',
        correctAnswer: 'When I came home, my mother was cooking dinner.',
        correctExplanation:
          '母が料理をしている途中に「私が帰る」という動作が起きたので、続いていたほうを過去進行形 was cooking にする。両方を過去形にすると「帰ってから料理を始めた」という別の意味の文になってしまう。',
      },
      {
        question: '次の英文の（　）に入る正しい語を選びなさい。My brother and I （was / were）listening to music then.',
        wrongAnswer: 'was',
        trapExplanation:
          '（　）のすぐ前にある I につられて was を選んでしまう。I was 〜 という形をよく使うため、主語全体を見ずに反射的に答えてしまうことが原因である。',
        correctAnswer: 'were',
        correctExplanation:
          '主語は My brother and I（兄と私＝二人）で複数なので were を使う。主語を代名詞に置きかえると We were listening to music then. となり、すぐ確かめられる。and でつながれた主語は複数、と覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s134',
    subject: 'eigo',
    examType: 'chugaku',
    title: '過去進行形②：when と while の使い分け',
    description: '二つの動作の関係を when / while で正しく結べるようにする',
    intro: '「勉強しているときに電話が鳴った」を英語にすると、どちらを進行形にするか迷います。長く続いていたほうを進行形、とちゅうで起きた短い動作を過去形にします。while のうしろを過去形にしないのがきまりです。',
    order: 634,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'when＝「〜したとき」。あとには短い一回の動作（過去形）が来ることが多い。',
      'while＝「〜している間に」。あとには続いていた動作（過去進行形）が来る。',
      '長く続いていたほうを進行形、途中で起きた短い動作を過去形にする。',
      'when / while のかたまりは文の前半にも後半にも置ける。前に置くときはコンマで区切る。',
      'while の直後を過去形にしない（× While I studied 〜）。',
    ],
    sections: [
      {
        heading: 'when と while の役割のちがい',
        body: `過去進行形は、when や while を使って別の動作と結びつけることが多い。

■ when 〜（〜したとき）
あとに続くのは、たいてい「一回きりの短い動作」である。
When the phone rang, I was taking a bath.
（電話が鳴ったとき、私はふろに入っていました）
「電話が鳴る」は一瞬の出来事なので過去形、「ふろに入っている」は続いていたので過去進行形になる。

■ while 〜（〜している間に）
あとに続くのは「続いていた動作」なので、過去進行形になる。
While I was studying English, my brother came into my room.
（私が英語を勉強している間に、弟が部屋に入ってきました）

■ 二つの言い方は入れかえられる
When the phone rang, I was taking a bath.
＝ While I was taking a bath, the phone rang.
同じ場面を、どちらの動作を先に述べるかで言いかえているだけである。when のあとは短い動作、while のあとは続いていた動作、という役割は変わらない。

★ ポイント：「割りこんだほうが when、割りこまれたほうが while」と覚えると迷わない。`,
      },
      {
        heading: '語順と、まちがえやすい形',
        body: `■ 語順は二通り
When I came home, my mother was cooking dinner.
My mother was cooking dinner when I came home.
when や while のかたまりは、文の前に置いても後ろに置いてもよい。前に置くときはコンマ（,）で区切る。後ろに置くときはコンマは不要である。

■ while の直後を過去形にしない
× While I studied English, my brother came into my room.
○ While I was studying English, my brother came into my room.
while は「〜している間に」という意味なので、そのあとは進行形になるのが原則である。

■ 両方が続いていた場合は両方進行形
While I was cooking, my sister was cleaning the room.
（私が料理をしている間、姉は部屋をそうじしていました）
二つの動作が並行して続いていたときは、どちらも過去進行形にする。

■ 短い動作どうしなら両方過去形
When I opened the door, the cat ran out.
（私がドアを開けると、ネコが走り出た）
どちらも一瞬の出来事なので、進行形にはしない。

⚠ 注意：when は「〜したとき」だけでなく「〜するとき」の意味でも使う。When I get up, I always drink water.（起きたとき、いつも水を飲む）。この場合は習慣なので現在形になる。時制は文全体の内容で決める。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私が英語を勉強している間に、弟が部屋に入ってきました。」',
        wrongAnswer: 'While I studied English, my brother came into my room.',
        trapExplanation:
          '「過去の文だから過去形」と機械的に考え、while のあとも過去形にしてしまう。while が「〜している間に」という進行の意味を持つことが意識されていない。',
        correctAnswer: 'While I was studying English, my brother came into my room.',
        correctExplanation:
          'while のあとには「続いていた動作」が来るので過去進行形 was studying にする。そこへ割りこんできた「弟が入ってきた」は一回きりの動作なので過去形 came。while ＝進行形、と形で結びつけて覚える。',
      },
      {
        question: '次の日本語を英語にしなさい。「電話が鳴ったとき、私はふろに入っていました。」',
        wrongAnswer: 'When the phone was ringing, I took a bath.',
        trapExplanation:
          'どちらを進行形にするかを取りちがえている。日本語の語順のまま「電話が鳴った」を先に見て、そこに進行形を当ててしまうために起こる。',
        correctAnswer: 'When the phone rang, I was taking a bath.',
        correctExplanation:
          '長く続いていたのは「ふろに入っている」ほうなので、そちらを過去進行形 was taking にする。「電話が鳴る」は一瞬の出来事なので過去形 rang。「割りこんだ短い動作が when のあと」と覚えると判断が速くなる。',
      },
    ],
  },

  {
    id: 'eigo_s135',
    subject: 'eigo',
    examType: 'chugaku',
    title: '進行形にしない動詞①：状態動詞',
    description: 'know・like・have など、進行形にできない動詞のグループを覚える',
    intro: '「彼を知っています」を I am knowing him. とは言えません。know は状態を表すので、進行形にしないからです。日本語の「〜ています」がそのまま進行形にならない動詞のグループを、まとめて覚えます。',
    order: 635,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '状態を表す動詞は、日本語が「〜ている」でも進行形にしない。',
      '気持ち：like, love, want, need, hate。',
      '頭のはたらき：know, understand, remember, believe, think（思う）。',
      '所有・関係：have（持っている）, belong to, resemble。',
      '感覚：see（見える）, hear（聞こえる）。can をそえて I can see 〜. と言うことが多い。',
    ],
    sections: [
      {
        heading: '状態動詞とは',
        body: `動詞には「動作」を表すものと「状態」を表すものがある。状態を表す動詞は進行形にしない。

■ 状態動詞の代表
気持ちを表す：like（好きだ）・love（愛している）・want（ほしい）・need（必要だ）・hate（きらいだ）
頭のはたらきを表す：know（知っている）・understand（理解している）・remember（覚えている）・believe（信じている）・think（〜だと思う）
所有・関係を表す：have（持っている）・belong to（〜に属している）・resemble（似ている）
感覚を表す：see（見える）・hear（聞こえる）・smell（においがする）・taste（味がする）

例）I know his name.（彼の名前を知っています）
例）She wants a new bag.（彼女は新しいかばんをほしがっています）
例）He has a nice car.（彼はすてきな車を持っています）
例）I understand your question.（あなたの質問が分かります）

これらはすべて日本語で「〜ている」となるが、× I am knowing、× She is wanting とは言えない。

■ なぜ進行形にしないのか
進行形は「今始まって、今続いていて、もうすぐ終わる」という短い幅を作る形である。ところが状態動詞は、はじめから長く続いている状態そのものを表しているので、わざわざ幅を作る必要がない。「知っている」という状態に「今まさに知っている最中」という言い方は成り立たないのである。

★ ポイント：動作は「やめられる」、状態は「やめられない」。走るのはやめられるが、知っているのは自分でやめられない。やめられないものは進行形にしない。`,
        figureId: 'lf_eigoext04_135',
      },
      {
        heading: '感覚を表す動詞と can',
        body: `see・hear のような感覚の動詞は、進行形にするかわりに can をそえることが多い。

例）I can see Mt. Fuji from here.（ここから富士山が見えます）
例）I can hear a bird singing.（鳥が鳴いているのが聞こえます）
「今この瞬間に見えている・聞こえている」ことを表したいときに、英語では can see / can hear と言う。日本語の「見えている」「聞こえている」につられて am seeing / am hearing としないよう注意する。

■ look / watch / listen とのちがい
see（見える）… 自然に目に入る　　→ I can see the sea.
look at（目を向ける）… 意識して見る → I am looking at the picture.（進行形にできる）
watch（動くものをじっと見る）… → I am watching TV.（進行形にできる）
hear（聞こえる）… 自然に耳に入る　→ I can hear music.
listen to（耳をかたむける）… → I am listening to music.（進行形にできる）

同じ「見る」「聞く」でも、自分の意志でする動作（look at, watch, listen to）は進行形にできる。自然に感じ取るだけの see, hear は進行形にしない。この対応は入試で非常によく問われる。

⚠ 注意：think は意味によって扱いがちがう。
I think he is right.（彼は正しいと思う）… 「思う」＝状態なので進行形にしない
I am thinking about my future.（将来について考えているところだ）… 「頭を働かせる」＝動作なので進行形にできる
このように、一つの動詞が二つの顔を持つことがある。次のまとまりでくわしく学ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私はこの歌を知っています。」',
        wrongAnswer: 'I am knowing this song.',
        trapExplanation:
          '「知っています」の「〜ています」を進行形と結びつけてしまう。日本語では状態も「〜ている」で表すので、そのまま置きかえると誤りになる。',
        correctAnswer: 'I know this song.',
        correctExplanation:
          'know は状態を表す動詞なので進行形にしない。現在形のままで「今知っている」という意味になる。like・want・have・understand・remember も同じ仲間で、日本語が「〜ている」でも現在形のまま使う。',
      },
      {
        question: '次の日本語を英語にしなさい。「ここから海が見えます。」',
        wrongAnswer: 'I am seeing the sea from here.',
        trapExplanation:
          '「見えています」という今の状態を表したいので進行形を選んでしまう。see が「自然に目に入る」という状態の動詞であることを知らないと起こる。',
        correctAnswer: 'I can see the sea from here.',
        correctExplanation:
          'see・hear は進行形にせず、can をそえて「見える・聞こえる」を表す。意識して見る look at や watch、耳をかたむける listen to は進行形にできる（I am watching TV.）。この対応をペアで覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s136',
    subject: 'eigo',
    examType: 'chugaku',
    title: '進行形にしない動詞②：have や think の二つの顔',
    description: '同じ動詞でも意味によって進行形にできる場合とできない場合があることを知る',
    intro: 'have は進行形にできないと習ったのに、We are having lunch. は正しい英語です。「持っている」なら状態、「食べる」なら動作だからです。同じ動詞が2つの顔を持つ、その見分け方を身につけます。',
    order: 636,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'have は「持っている」なら状態で進行形にしない。「食べる・過ごす」なら動作で進行形にできる。',
      'We are having lunch.（昼食を食べているところだ）／We are having a good time.（楽しんでいる）は正しい。',
      'think は「〜と思う」なら状態、「考える」なら動作（I am thinking about it.）。',
      'see は「見える」なら状態、「（人に）会う」なら動作。',
      '「動作かどうか」は、その行為を自分の意志で始めたり止めたりできるかで判断する。',
    ],
    sections: [
      {
        heading: 'have の二つの顔',
        body: `have は英語で最もよく使う動詞の一つで、意味によって進行形にできるかどうかが変わる。

■ 状態の have（進行形にしない）
I have two brothers.（兄弟が二人います）
He has a new bike.（新しい自転車を持っています）
She has long hair.（髪が長い）
I have a cold.（風邪をひいている）
「持っている・そなえている」という所有や性質を表す have は状態なので、進行形にできない。

■ 動作の have（進行形にできる）
We are having lunch now.（私たちは今、昼食を食べているところです）
They are having a party.（彼らはパーティーを開いているところです）
I am having a good time.（私は楽しい時を過ごしています）
have が「食べる・飲む・（会などを）開く・（時を）過ごす」の意味になると、これは動作なので進行形にできる。

■ 見分け方
その動作を「今始めた」「もうすぐ終わる」と言えるなら動作、ずっとそうであり続けるだけなら状態である。昼食は始まって終わるので動作、兄弟がいることはやめられないので状態である。

★ ポイント：have を見たら「持っている」か「食べる・過ごす」かを確かめる。前者なら現在形、後者なら進行形も使える。`,
      },
      {
        heading: 'think・see なども二つの顔を持つ',
        body: `■ think
I think he is a good teacher.（彼はよい先生だと思います）… 「思う」＝状態、進行形にしない
I am thinking about my future.（将来について考えているところです）… 「頭を働かせる」＝動作、進行形にできる
「〜と思う」という意見は状態、「あれこれ考える」という頭のはたらきは動作である。

■ see
I can see a bird in the tree.（木に鳥が見えます）… 「見える」＝状態
I am seeing my grandmother this weekend.（今週末、祖母に会う予定です）… 「会う」＝動作
※「会う予定」の意味では未来を表す使い方にもなる。

■ そのほかの例
taste：This soup tastes good.（このスープはおいしい味がする＝状態）／ She is tasting the soup.（彼女はスープの味見をしている＝動作）
smell：The flower smells sweet.（甘いにおいがする＝状態）／ He is smelling the flower.（花のにおいをかいでいる＝動作）
look：You look tired.（つかれて見える＝状態）／ I am looking at the map.（地図を見ている＝動作）

■ 覚え方
「自然にそうなっている」なら状態、「自分でしている」なら動作。味がするのは自然だが、味見をするのは自分の意志でする動作である。

⚠ 注意：「have は進行形にできない」とだけ覚えると、今度は We have lunch now. と書いてしまう。ルールは覚えすぎても失点になる。意味を確かめてから形を決める、という順番を守る。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私たちは今、昼食を食べているところです。」',
        wrongAnswer: 'We have lunch now.',
        trapExplanation:
          '「have は状態動詞だから進行形にできない」と一度覚えたことを、意味を確かめずにすべての have に当てはめてしまう。ルールの覚えすぎから生まれる誤りである。',
        correctAnswer: 'We are having lunch now.',
        correctExplanation:
          'この have は「食べる」という動作の意味なので、進行形にできる。進行形にしないのは「持っている・そなえている」という所有の have だけ。have a party、have a good time も動作なので are having と言える。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は新しい自転車を持っています。」',
        wrongAnswer: 'I am having a new bike.',
        trapExplanation:
          'We are having lunch. のような形を覚えたあとに、今度はすべての have を進行形にしてしまう。「持っています」の「〜ています」も進行形と結びつきやすい。',
        correctAnswer: 'I have a new bike.',
        correctExplanation:
          '「持っている」という所有は状態なので進行形にしない。have は「所有＝状態、食べる・過ごす＝動作」と二つの顔を持つので、そのつど意味を確かめる。所有の have は現在形のままで「今持っている」ことを表せる。',
      },
    ],
  },

  // ───────────── 6. 未来表現 will と be going to（s137〜s141） ─────────────
  {
    id: 'eigo_s137',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未来①：will の基本',
    description: 'will の形と、「その場で決めた意志」「今の予測」という二つの意味をつかむ',
    intro: '「じゃあ、ぼくが持つよ」のように、その場で決めたことは will で表します。ところが will のうしろは必ず原形なので、He will is busy. とは書けません。will be です。意味と形をあわせて確認します。',
    order: 637,
    studyPeriod: '小6前半',
    targetLevel: 'kiso',
    keyPoints: [
      'will のあとは必ず動詞の原形。主語が三人称単数でも -s は付けない。',
      'be動詞の原形は be（× will is、○ will be）。',
      'will の意味①：話しているその場で決めた意志（I\'ll help you.）。',
      'will の意味②：今の時点での予測（It will be sunny tomorrow.）。',
      'tomorrow / next week / someday / in the future が合図になる。',
    ],
    sections: [
      {
        heading: 'will の形',
        body: `英語には「未来形」という動詞の形はない。未来のことは will や be going to などの言い方で表す。

■ 形は「will ＋ 動詞の原形」
I will go to Tokyo next week.（私は来週、東京へ行きます）
He will come here tomorrow.（彼は明日ここへ来ます）
They will be busy next month.（彼らは来月いそがしいでしょう）

■ 主語による形の変化がない
will は主語が何であっても will のまま。そして will のあとの動詞は必ず原形になる。
× He will comes here.　○ He will come here.
× She will goes to school.　○ She will go to school.
現在形では He comes と -s が必要だったが、will のあとでは原形にもどる。

■ be動詞の原形は be
× It will is sunny.　○ It will be sunny tomorrow.（明日は晴れるでしょう）
× You will are busy.　○ You will be busy tomorrow.
am / is / are の原形が be であることを忘れると、この形でつまずく。

■ 短縮形
I will → I'll　　you will → you'll　　he will → he'll　　it will → it'll
we will → we'll　　they will → they'll
会話文では短縮形がよく使われる。

★ ポイント：will のあとは原形。三単現の -s も、be動詞の is も、そこには入らない。`,
        figureId: 'lf_eigoext04_137',
      },
      {
        heading: 'will の二つの意味',
        body: `■ ① その場で決めた意志（〜します）
話している、まさにその瞬間に決めたことを表す。
A: The phone is ringing.（電話が鳴っているよ）
B: I'll answer it.（私が出ます）
A: This bag is heavy.（このかばん、重いなあ）
B: I'll carry it for you.（私が運びましょう）
前もって決めていたわけではなく、その場で申し出ているので will を使う。

■ ② 今の時点での予測（〜でしょう）
It will be sunny tomorrow.（明日は晴れるでしょう）
He will be twelve next year.（彼は来年12歳になります）
I think it will rain this afternoon.（午後は雨が降ると思います）
「たぶんこうなるだろう」という話し手の見通しを表す。I think 〜 や probably（たぶん）といっしょに使われることが多い。

■ 合図になる語
tomorrow（明日）・next week / month / year（来週・来月・来年）
someday（いつか）・in the future（将来）・soon（まもなく）・this afternoon（今日の午後）

⚠ 注意：日本語の「〜します」がすべて will になるわけではない。前から決めていた予定は be going to を使うほうが自然である（次のまとまりで学ぶ）。will はあくまで「今決めた」「今予測した」という、決断や判断の瞬間が「今」にある言い方である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼は明日、ここへ来るでしょう。」',
        wrongAnswer: 'He will comes here tomorrow.',
        trapExplanation:
          '「主語が三人称単数なら動詞に -s」という決まりが強く身についているため、will があっても -s を付けてしまう。will のあとが原形だという原則が抜けている。',
        correctAnswer: 'He will come here tomorrow.',
        correctExplanation:
          'will のあとは必ず動詞の原形なので come とする。三単現の -s が付くのは「現在形」のときだけ。will・can・must などの助動詞のあと、did のあと、to のあとは、いずれも原形になる。',
      },
      {
        question: '次の日本語を英語にしなさい。「あなたは明日、いそがしいでしょう。」',
        wrongAnswer: 'You will are busy tomorrow.',
        trapExplanation:
          '「あなたは〜です」を英語にするとき You are 〜 と覚えているので、will を足すときも are をそのまま残してしまう。be動詞の原形が be であることを意識していない。',
        correctAnswer: 'You will be busy tomorrow.',
        correctExplanation:
          'am / is / are の原形は be なので、will のあとは be になる。It will be sunny. / He will be twelve next year. も同じ形。「will のあとは原形」という原則は、be動詞にもそのまま当てはまる。',
      },
    ],
  },

  {
    id: 'eigo_s138',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未来②：will の否定文・疑問文と Shall',
    description: "won't の形、Will you 〜? の依頼、Shall I / Shall we の使い分けを覚える",
    intro: "will not の短縮形は willn't ではなく won't です。形が予想外なので、これは覚えるしかありません。また Will you 〜? は「〜するつもりですか」だけでなく、「〜してくれませんか」という頼み方にもなります。",
    order: 638,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '否定は will not。短縮形は won\'t（× willn\'t）。',
      '疑問文は Will ＋主語＋原形 …?　答えは Yes, 主語 will. / No, 主語 won\'t.',
      'Will you 〜? は「〜してくれませんか」という依頼にもなる。答えは Sure. / All right. / Sorry, I can\'t.',
      'Shall I 〜?＝「（私が）〜しましょうか」。答えは Yes, please. / No, thank you.',
      'Shall we 〜?＝「（いっしょに）〜しましょうか」。答えは Yes, let\'s. / No, let\'s not.',
    ],
    sections: [
      {
        heading: '否定文と疑問文',
        body: `■ 否定文：will not（won't）＋原形
I will not（won't）go to school tomorrow.（明日は学校へ行きません）
It won't rain this afternoon.（今日の午後は雨は降らないでしょう）
短縮形は won't である。don't・doesn't・didn't の形につられて willn't と書くのは誤り。つづりも「wo」で始まる点に注意する。

■ 疑問文：Will ＋主語＋動詞の原形 …?
Will he come to the party?（彼はパーティーに来るでしょうか）
― Yes, he will. / No, he won't.
Will it be sunny tomorrow?（明日は晴れるでしょうか）
― Yes, it will. / No, it won't.

■ 疑問詞のある疑問文
What will you do this weekend?（今週末は何をしますか）― I'll visit my uncle.
Where will you go next summer?（来年の夏はどこへ行きますか）
When will he come back?（彼はいつもどってきますか）
語順は「疑問詞＋will＋主語＋原形 …?」となる。

★ ポイント：will の文はすべて「will を動かす」だけで否定・疑問が作れる。do や does は使わない。`,
      },
      {
        heading: 'Will you 〜? と Shall I / Shall we 〜?',
        body: `■ Will you 〜?（〜してくれませんか）
Will you open the window?（窓を開けてくれませんか）
― Sure. / All right. / OK. / Sorry, I can't.
本来は「あなたは〜するつもりですか」だが、実際には相手にお願いする言い方としてよく使われる。答えるときは Yes, I will. でも通じるが、会話では Sure. や All right. が自然である。
より丁寧に言うときは Would you 〜? や Could you 〜? を使う。

■ Shall I 〜?（（私が）〜しましょうか）
Shall I open the window?（窓を開けましょうか）
― Yes, please.（はい、お願いします）／ No, thank you.（いいえ、けっこうです）
自分が相手のために何かをしようと申し出る言い方である。

■ Shall we 〜?（（いっしょに）〜しましょうか）
Shall we play tennis?（いっしょにテニスをしませんか）
― Yes, let's.（そうしましょう）／ No, let's not.（やめておきましょう）
Let's play tennis. とほぼ同じ意味になる。

■ 答え方をまちがえない
Shall I 〜? → Yes, please. / No, thank you.
Shall we 〜? → Yes, let's. / No, let's not.
I（私が一人でする）か we（いっしょにする）かで答え方が変わる。ここは入試で必ず問われる。

⚠ 注意：Will you 〜? は場面によって「依頼」にも「予定をたずねる文」にもなる。Will you come to the party?（パーティーに来ますか＝予定をたずねる）／ Will you help me?（手伝ってくれませんか＝依頼）。前後の会話から判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は明日、学校へ行きません。」',
        wrongAnswer: "I willn't go to school tomorrow.",
        trapExplanation:
          "don't・doesn't・didn't・isn't のように「not を n't にして後ろにくっつける」という形に慣れているため、will にも同じ作り方を当てはめてしまう。",
        correctAnswer: "I won't go to school tomorrow.",
        correctExplanation:
          'will not の短縮形は won\'t という特別な形になる。willn\'t という語は存在しない。つづりも will とは変わって「wo」で始まるので、書いて覚える必要がある。短縮しない I will not go 〜 でももちろん正しい。',
      },
      {
        question: '次の問いへの正しい答えを選びなさい。Shall I carry your bag? ― （Yes, let\'s. / Yes, please.）',
        wrongAnswer: "Yes, let's.",
        trapExplanation:
          'Shall という語だけを見て、Shall we 〜? の答え方 Yes, let\'s. を反射的に選んでしまう。I と we のちがいを読み取れていない。',
        correctAnswer: 'Yes, please.',
        correctExplanation:
          'Shall I 〜? は「（私が）〜しましょうか」という申し出なので、答えは Yes, please. / No, thank you. になる。Yes, let\'s. と答えるのは Shall we 〜?（いっしょに〜しましょうか）のとき。I か we かをまず確かめる。',
      },
    ],
  },

  {
    id: 'eigo_s139',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未来③：be going to（前から決めていた予定）',
    description: 'be going to の形と、「前から決めていた予定」「きざしからの予測」の意味をつかむ',
    intro: '「来週、京都に行くつもりです」のように前から決めていた予定は、be going to で表します。going という語が入っていますが、「行く」という意味とはかぎりません。to のうしろは必ず原形です。',
    order: 639,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '形は「be動詞（am/is/are）＋going to＋動詞の原形」。be動詞は主語に合わせる。',
      '意味①：前から決めていた予定・つもり（I am going to visit Kyoto next week.）。',
      '意味②：今のきざしから見た予測（It is going to rain. 空が暗い）。',
      '否定文・疑問文は be動詞を動かす（isn\'t going to / Are you going to 〜?）。',
      'to のあとは必ず原形（× is going to buys）。',
    ],
    sections: [
      {
        heading: 'be going to の形と意味',
        body: `■ 形
I am going to play tennis tomorrow.（明日テニスをするつもりです）
He is going to visit his uncle next Sunday.（彼は次の日曜におじさんを訪ねる予定です）
They are going to have a party.（彼らはパーティーを開く予定です）
be動詞は主語に合わせて am / is / are を使い分け、going to のあとは必ず動詞の原形を置く。

■ 意味① 前から決めていた予定
I'm going to study abroad next year.（私は来年、留学するつもりです）
すでに心の中で決めていて、場合によっては準備も始めていることを表す。「今決めた」ではなく「前から決めていた」という点が will とのちがいである。

■ 意味② 今のきざしから見た予測
Look at those dark clouds. It's going to rain.（あの黒い雲を見て。雨が降りそうだ）
He is going to fall!（彼は落ちそうだ！）
目の前に「そうなりそうな証拠」があるときの予測に使う。単なる見通しを述べる will とはちがい、根拠が目の前にある。

★ ポイント：be going to は「もうその方向に進んでいる」感じ。決めた時点や、そうなるきざしが、すでに今より前にある。`,
        figureId: 'lf_eigoext04_139',
      },
      {
        heading: '否定文・疑問文と注意点',
        body: `be going to は be動詞を使う文なので、否定文も疑問文も be動詞を動かす。

■ 否定文
I am not going to watch TV tonight.（今夜はテレビを見るつもりはありません）
He isn't going to come.（彼は来るつもりはありません）
They aren't going to play soccer.

■ 疑問文
Are you going to visit Kyoto?（京都を訪れるつもりですか）
― Yes, I am. / No, I'm not.
Is he going to join us?（彼は参加する予定ですか）
― Yes, he is. / No, he isn't.
What are you going to do this weekend?（今週末は何をするつもりですか）
― I'm going to see a movie.

■ to のあとは原形
× She is going to buys a new bike.
○ She is going to buy a new bike.
going to のあとには必ず原形が来る。三単現の -s を付けるのは、現在形の動詞だけである。

■ be going to go の重なり
I am going to go to Osaka next week.（来週、大阪へ行く予定です）
go が二回続くので変に見えるが、これは正しい文である。会話では I'm going to Osaka next week. と、現在進行形で予定を表す言い方も使われる。

⚠ 注意：be動詞を落とす誤りが多い。× They going to play tennis. → ○ They are going to play tennis. going to は be動詞とセットで一つの形である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼女は来月、新しい自転車を買うつもりです。」',
        wrongAnswer: 'She is going to buys a new bike next month.',
        trapExplanation:
          '主語 She が三人称単数であることが目に入り、動詞に -s を付けてしまう。すでに is が主語に合わせてあるので、そのあとは原形でよい、という仕組みが見えていない。',
        correctAnswer: 'She is going to buy a new bike next month.',
        correctExplanation:
          'going to のあとは必ず動詞の原形なので buy とする。主語に合わせるのは be動詞（is）のほうで、-s の役目はそこですでに果たされている。will come、to buy、did go と同じく「原形が来る場所」として覚える。',
      },
      {
        question: '次の場面にふさわしい英文を選びなさい。空を見上げると黒い雲が広がっている。「雨が降りそうだ。」',
        wrongAnswer: 'It will rain.',
        trapExplanation:
          '「未来のこと＝will」と一つだけ覚えているため、目の前に根拠があってもすべて will で表してしまう。will と be going to の使い分けが「時」ではなく「根拠の有無」で決まることを知らない。',
        correctAnswer: "It's going to rain.",
        correctExplanation:
          '黒い雲という「そうなりそうなきざし」が目の前にあるときの予測は be going to を使う。will は根拠のない見通しや、今その場で思った予測に使う。Look at those clouds. It\'s going to rain. がひとまとまりの表現として出題される。',
      },
    ],
  },

  {
    id: 'eigo_s140',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未来④：will と be going to の使い分け',
    description: '「いつ決めたか」「根拠があるか」で二つの未来表現を選び分ける',
    intro: 'will も be going to も「〜するつもり」と訳せるのに、英語では選び分けます。決め手は「いつ決めたか」。今この場で決めたなら will、前から決めていたなら be going to。切符をもう買ってあるなら後者です。',
    order: 640,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '決めたのが「今この瞬間」なら will、「前から」なら be going to。',
      'その場の申し出・約束は will（I\'ll get it. / I\'ll help you.）。',
      '準備ずみの予定は be going to（I\'m going to visit Kyoto. 切符はもう買った）。',
      '目の前のきざしから予測するときは be going to、根拠のない見通しは will。',
      'どちらでもよい場合も多いが、会話問題では場面から判断させる出題が多い。',
    ],
    sections: [
      {
        heading: '「いつ決めたか」で選ぶ',
        body: `will と be going to は、どちらも未来のことを表す。ちがいは「決めた時点がどこにあるか」である。

■ その場で決めた → will
A: The phone is ringing.（電話が鳴っているよ）
B: I'll answer it.（私が出ます）
電話が鳴るのを聞いて、その瞬間に決めたことなので will を使う。ここで I'm going to answer it. と言うと「前からそのつもりだった」という不自然な意味になる。

A: I can't open this jar.（このびんが開かない）
B: I'll help you.（手伝ってあげるよ）

■ 前から決めていた → be going to
A: Why are you buying so much food?（どうしてそんなに食べ物を買っているの）
B: I'm going to have a party tonight.（今夜パーティーを開く予定なんだ）
買い物をしている時点ですでに決まっていたことなので be going to を使う。

■ 判断の手順
①その予定は、話す前から決まっていたか　→　はい：be going to
②話しているその瞬間に決めたか　→　はい：will

★ ポイント：会話文の問題では、直前のセリフを見る。相手の言葉を聞いて決めたのなら必ず will である。`,
      },
      {
        heading: '予測のときの使い分けと、共通する点',
        body: `■ 予測の場合
根拠が目の前にある　→　be going to
　Look at the sky. It's going to snow.（空を見て。雪が降りそうだ）
　The baby is going to cry.（赤ちゃんが泣きそうだ ← 顔がゆがんでいる）
根拠がなく、話し手の見通しを述べる　→　will
　I think he will win the game.（彼は試合に勝つと思う）
　Our team will be strong next year.（来年、私たちのチームは強くなるでしょう）

■ どちらでもよい場合
He will be twelve next year. ／ He is going to be twelve next year.
決まりきった未来のことは、どちらを使っても大きな差はない。実際の会話では区別があいまいなことも多い。

■ 入試での問われ方
①会話文で、直前のセリフを受けて答える場面 → will（その場の決断）
②「もう切符を買った」「準備をしている」などの記述がある → be going to
③「あの雲を見て」「顔色が悪い」など目の前の証拠がある → be going to
④ I think 〜 / probably といっしょ → will

■ 意志を表す will の否定
I won't do it again.（二度としません）
won't には「どうしても〜しない」という強い拒否の意味が出ることがある。
This door won't open.（このドアはどうしても開かない）

⚠ 注意：日本語の「〜するつもりです」はどちらにもなる。「つもり」という語だけで be going to と決めつけず、いつ決めたのかを場面から読み取る。`,
      },
    ],
    trapExamples: [
      {
        question: '次の会話の（　）に入る英文を選びなさい。A: The phone is ringing.　B: （　）',
        wrongAnswer: "I'm going to answer it.",
        trapExplanation:
          '「これから電話に出る＝未来のこと」とだけ考え、be going to を選んでしまう。be going to が「前から決めていた」という意味を持つことに気づいていない。',
        correctAnswer: "I'll answer it.",
        correctExplanation:
          '電話が鳴るのを聞いて、その瞬間に「私が出よう」と決めたのだから will を使う。I\'m going to answer it. だと「前から電話に出るつもりだった」という不自然な意味になる。会話文では直前のセリフを受けた決断かどうかを見る。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は今年の夏、北海道を訪れるつもりです。切符はもう買いました。」（前半のみ英語にする）',
        wrongAnswer: 'I will visit Hokkaido this summer.',
        trapExplanation:
          '「〜するつもりです」という日本語を見て、未来だから will と決めてしまう。「切符はもう買った」という、前から決めていた証拠を読み落としている。',
        correctAnswer: "I'm going to visit Hokkaido this summer.",
        correctExplanation:
          '切符を買っているということは、話す前からその予定が決まっていたということなので be going to を使う。will はその場で決めたことに使う言い方。日本語の「つもり」だけで判断せず、いつ決めたかを場面から読み取る。',
      },
    ],
  },

  {
    id: 'eigo_s141',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未来⑤：現在進行形・現在形で表す未来',
    description: '進行形や現在形が未来を表す場合と、時・条件を表す文の中の時制を整理する',
    intro: '「明日雨が降ったら」を If it will rain tomorrow, と書くと誤りです。if や when のあとでは、未来のことでも現在形を使います。理由は説明しにくいのですが、入試では最頻出のひっかけです。',
    order: 641,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '現在進行形は「約束ずみの近い予定」を表せる（I\'m meeting Ken at three tomorrow.）。',
      '時刻表・行事のように決まっている予定は現在形（The train leaves at 6:30.）。',
      'if・when・before・after・until・as soon as のあとでは、未来のことも現在形で表す。',
      '× If it will rain tomorrow → ○ If it rains tomorrow が最頻出のひっかけ。',
      '文の中心の動詞のほうは will のままでよい（If it rains, I will stay home.）。',
    ],
    sections: [
      {
        heading: '未来を表す四つの言い方',
        body: `未来のことは will と be going to のほかに、現在進行形や現在形でも表せる。どれくらい前から決まっているか、どれくらい確定しているかで使い分ける。

■ 現在形（時刻表・行事など、決まりきった予定）
The train leaves at 6:30 tomorrow morning.（その電車は明朝6時30分に出ます）
School starts on April 8.（学校は4月8日に始まります）
The concert begins at seven.（コンサートは7時に始まります）
個人の意志では動かせない、決まった予定に使う。

■ 現在進行形（すでに約束・予約がすんでいる近い予定）
I'm meeting Ken at three tomorrow.（明日3時にケンに会うことになっています）
We're having a party this Saturday.（今週の土曜日にパーティーをします）
すでに相手と約束したり、場所を予約したりして、動かしにくくなっている予定を表す。

■ be going to（前から決めている予定）
I'm going to buy a new bike next month.

■ will（今決めたこと・今の予測）
I'll help you.　It will be sunny tomorrow.

★ ポイント：左（現在形）へ行くほど「動かせない」、右（will）へ行くほど「その場の判断」になる。`,
        figureId: 'lf_eigoext04_141',
      },
      {
        heading: '時・条件を表す文の中では現在形',
        body: `英語には、未来のことでも will を使わない大切な決まりがある。

■ 決まり
if（もし〜なら）・when（〜するとき）・before（〜する前に）・after（〜したあとで）・until（〜するまで）・as soon as（〜するとすぐに）などが導くまとまりの中では、未来のことでも現在形を使う。

例）If it rains tomorrow, I will stay home.
　（もし明日雨が降ったら、家にいます）
　× If it will rain tomorrow, ...
例）When he comes back, I will tell him.
　（彼がもどってきたら、彼に伝えます）
　× When he will come back, ...
例）I will call you as soon as I arrive at the station.
　（駅に着いたらすぐに電話します）
　× as soon as I will arrive ...
例）Let's wait here until the rain stops.
　（雨がやむまでここで待ちましょう）

■ 文の中心のほうは will でよい
If it rains tomorrow, I will stay home.
前半（if のまとまり）は現在形、後半（文の中心）は will。両方を現在形にする必要はない。

■ 覚え方
「if・when のあとは will を使わない」と一言で覚えてしまう。これは中学入試でも高校入試でも必ず出る決まりである。

⚠ 注意：when には「いつ〜か」という疑問の意味もあり、その場合は will を使える。I don't know when he will come.（彼がいつ来るか分からない）。ただし中学受験ではまず「時・条件のまとまりでは現在形」を確実にしておけばよい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「もし明日雨が降ったら、私は家にいます。」',
        wrongAnswer: 'If it will rain tomorrow, I will stay home.',
        trapExplanation:
          '「明日のこと＝未来だから will」と考えて、if のまとまりの中まで will を入れてしまう。日本語では「降ったら」と過去のような形になるため、時制のずれにも気づきにくい。',
        correctAnswer: 'If it rains tomorrow, I will stay home.',
        correctExplanation:
          'if・when・before・after・until・as soon as が導くまとまりの中では、未来のことでも現在形を使う。主語 it は三人称単数なので rains となる。文の中心のほうは I will stay home. と will のままでよい。',
      },
      {
        question: '次の英文の意味として正しいものを選びなさい。I\'m having lunch with my aunt tomorrow.',
        wrongAnswer: '私は明日、おばと昼食を食べている最中だ。',
        trapExplanation:
          '「現在進行形＝今〜している最中」と一つだけ覚えているため、tomorrow があっても「〜している最中」と訳してしまう。進行形が近い予定を表す使い方を知らない。',
        correctAnswer: '私は明日、おばと昼食を食べる予定だ。',
        correctExplanation:
          '現在進行形は、すでに約束がすんでいる近い未来の予定を表すことがある。tomorrow・this Saturday・next week など未来を示す語がいっしょにあれば「〜する予定だ」と読む。I\'m meeting Ken at three tomorrow. も同じ使い方である。',
      },
    ],
  },
  // ───────────── 7. 現在完了 継続（s142〜s145） ─────────────
  {
    id: 'eigo_s142',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了①：have / has ＋過去分詞のかたち',
    description: '現在完了の形をつかみ、「過去から今までがひとつながり」というイメージを持つ',
    intro: '「彼はもう出かけました」と「彼は出かけました」。日本語ではどちらも過去のようですが、英語では今どうなっているかで形が変わります。have と過去分詞を組み合わせた現在完了は、過去と今をつなぐ形なのです。',
    order: 642,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '形は「have / has ＋過去分詞」。主語が三人称単数のときだけ has。',
      '現在完了は「過去のある時点から今まで」がつながっていることを表す。',
      '用法は三つ。継続（ずっと〜している）・完了／結果（〜してしまった）・経験（〜したことがある）。',
      '否定は have not（haven\'t）／has not（hasn\'t）＋過去分詞。',
      '疑問文は Have / Has を主語の前に出し、答えも have / has でそろえる。',
    ],
    sections: [
      {
        heading: '現在完了の形',
        body: `現在完了は「have（has）＋過去分詞」という形で、過去のある時点から今までがひとつながりになっていることを表す。

■ 形
I have lived in Osaka for five years.（私は5年間、大阪に住んでいます）
He has lived in Osaka for five years.（主語が三人称単数なので has）
They have already finished their homework.（彼らはもう宿題を終えました）

主語　　　　　　　助動詞　　過去分詞
I / You / We / They　have　　lived
He / She / It　　　　has　　　lived

■ 短縮形
I have → I've　　you have → you've　　we have → we've　　they have → they've
he has → he's　　she has → she's　　it has → it's
※ he's は he is の短縮形でもあるので、あとに過去分詞が来ていれば he has だと判断する。

■ 否定文
I have not（haven't）seen him.（私は彼に会っていません）
She has not（hasn't）finished her work.

■ 疑問文
Have you finished your homework?（宿題は終わりましたか）
― Yes, I have. / No, I haven't.
Has he arrived yet?（彼はもう着きましたか）
― Yes, he has. / No, he hasn't.
答えるときは have / has を使う。do や did は使わない。

★ ポイント：have は「持っている」ではなく、ここでは過去分詞とセットで時制を作る役目をしている。意味を訳そうとせず、形として覚える。`,
        figureId: 'lf_eigoext04_142',
      },
      {
        heading: '三つの用法と、共通するイメージ',
        body: `現在完了には三つの用法があるが、根っこにあるイメージは一つだけである。「過去のある時点から今まで、線がつながっている」ということである。

■ ① 継続（ずっと〜している）
I have known him for ten years.（私は彼を10年間知っています）
過去のある時点で知り合い、その状態が今も続いている。
合図の語：for（〜の間）・since（〜以来）・How long（どのくらいの間）

■ ② 完了・結果（〜してしまった・〜したところだ）
I have just finished my homework.（ちょうど宿題を終えたところです）
動作は終わったが、その結果が今に残っている。
合図の語：just（ちょうど）・already（もう）・yet（まだ・もう）

■ ③ 経験（〜したことがある）
I have visited Kyoto three times.（私は京都を3回訪れたことがあります）
生まれてから今までの間に、その経験がある。
合図の語：ever（今までに）・never（一度も〜ない）・before（以前に）・once / twice / 〜 times（回数）

■ 用法の見分け方
文中の合図の語を見れば、たいていどの用法か決まる。for / since があれば継続、just / already / yet があれば完了・結果、ever / never / 回数があれば経験である。

⚠ 注意：be動詞の過去分詞は been である。I have been busy since yesterday.（昨日からずっといそがしい）。× I have be busy は誤り。be － was/were － been をしっかり覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「彼は3年間、大阪に住んでいます。」',
        wrongAnswer: 'He have lived in Osaka for three years.',
        trapExplanation:
          '現在完了の形を「have＋過去分詞」と一つだけ覚えているため、主語が三人称単数でも have のままにしてしまう。have が動詞と同じように主語で形を変えることを意識していない。',
        correctAnswer: 'He has lived in Osaka for three years.',
        correctExplanation:
          '主語 He は三人称単数なので has を使う。現在完了の have / has は、現在形の have / has と同じ使い分けをする。I have、You have、He has、She has、They have と、主語を見てから決める習慣をつける。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は昨日からずっといそがしい。」',
        wrongAnswer: 'I have be busy since yesterday.',
        trapExplanation:
          '「have のあとは原形」と、will のあとの決まりと混同してしまう。また be動詞の過去分詞が been であることを覚えていないと、原形の be を置くしかなくなる。',
        correctAnswer: 'I have been busy since yesterday.',
        correctExplanation:
          'have のあとに来るのは原形ではなく過去分詞なので、be の過去分詞 been を使う。be － was / were － been と3変化で覚えておく。原形が来るのは will・can・did のあとで、have のあとは必ず過去分詞である。',
      },
    ],
  },

  {
    id: 'eigo_s143',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了②：継続用法（ずっと〜している）',
    description: '過去に始まった状態が今も続いていることを表す使い方を身につける',
    intro: '「私は大阪に3年住んでいます」を I live in Osaka for three years. と書きたくなります。でも3年前から今までという幅があるので、英語では I have lived in Osaka for three years. とします。',
    order: 643,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '継続＝「過去のある時点に始まって、今も続いている」。日本語は「ずっと〜している」。',
      '合図は for（〜の間）・since（〜以来）・How long（どのくらいの間）。',
      '日本語が現在の形（「知っています」「住んでいます」）でも、期間があれば現在完了。',
      'live・know・be・want・study のような状態を表す語と相性がよい。',
      '動作の継続は「have been ＋~ing」（現在完了進行形）にする。',
    ],
    sections: [
      {
        heading: '継続用法の考え方',
        body: `継続用法は「過去のある時点に始まって、今もその状態が続いている」ことを表す。

例）I have known him for ten years.（私は彼を10年間知っています）
10年前に知り合って、今も知っている。

例）She has lived in Tokyo since 2020.（彼女は2020年からずっと東京に住んでいます）
2020年に住み始めて、今も住んでいる。

例）We have been friends for a long time.（私たちは長い間ずっと友だちです）
例）It has been cold since last week.（先週からずっと寒い）

■ 日本語にまどわされない
日本語では「知っています」「住んでいます」と現在の形になるので、つい I know him for ten years. と現在形で書いてしまう。しかし現在形は「今のこと」しか表さないので、「10年間」という期間をそえることができない。期間が出てきたら現在完了、と覚える。

■ 過去形ともちがう
He lived in Tokyo for ten years.（彼は10年間、東京に住んでいた）← 今はもう住んでいない
He has lived in Tokyo for ten years.（彼は10年間、東京に住んでいる）← 今も住んでいる
同じ「10年間」でも、今とつながっているかどうかで形が変わる。

★ ポイント：「今も続いているか」を確かめる。続いていれば現在完了、終わっていれば過去形。`,
      },
      {
        heading: '状態の継続と動作の継続',
        body: `■ 状態の継続 ― ふつうの現在完了
live（住んでいる）・know（知っている）・be（〜である）・want（ほしい）・have（持っている）のような状態を表す語は、have＋過去分詞のままで継続を表せる。
I have wanted this book for a long time.（この本をずっとほしいと思っていました）
He has been sick since Monday.（彼は月曜日からずっと病気です）

■ 動作の継続 ― 現在完了進行形（have been ＋~ing）
run（走る）・study（勉強する）・rain（雨が降る）・wait（待つ）のような動作を表す語は、「have been ＋~ing」の形にすると「ずっと〜し続けている」がはっきり表せる。
It has been raining since this morning.（今朝からずっと雨が降っています）
He has been running for two hours.（彼は2時間ずっと走っています）
I have been waiting for you for an hour.（1時間ずっとあなたを待っています）

■ 使い分けの目安
状態を表す語　→　have＋過去分詞（I have known him for ten years.）
動作を表す語　→　have been ＋~ing（I have been studying for three hours.）
ただし study・work・live などは、どちらの形でも継続を表せることが多い。

⚠ 注意：know・like・be などの状態動詞は、進行形にできないという決まりがあるので、× I have been knowing him とは言えない。進行形にできない動詞は、現在完了進行形にもできない。ここは s135 で学んだ状態動詞の決まりがそのまま生きる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は5年間、彼を知っています。」',
        wrongAnswer: 'I know him for five years.',
        trapExplanation:
          '日本語が「知っています」と現在の形で終わっているので、そのまま現在形にしてしまう。「5年間」という期間が、今とはつながらない現在形とは合わないことに気づいていない。',
        correctAnswer: 'I have known him for five years.',
        correctExplanation:
          '「5年前から今まで知っている」という継続なので現在完了にする。know の過去分詞は known。for 〜（〜の間）や since 〜（〜以来）といった期間を表す語が出てきたら、現在形ではなく現在完了を使う。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼は2時間ずっと走っています。」',
        wrongAnswer: 'He has run for two hours.',
        trapExplanation:
          '「継続は have＋過去分詞」とだけ覚えているため、動作を表す動詞にもそのまま当てはめてしまう。He has run 〜 は「走ったことがある」という経験の意味に読まれやすい。',
        correctAnswer: 'He has been running for two hours.',
        correctExplanation:
          'run のような動作を表す動詞で「ずっと〜し続けている」と言うときは、have been ＋~ing（現在完了進行形）にする。It has been raining since this morning. も同じ形。状態を表す know・live などは have＋過去分詞のままでよい。',
      },
    ],
  },

  {
    id: 'eigo_s144',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了③：for と since の使い分け',
    description: '「幅」を表す for と「起点」を表す since を確実に区別する',
    intro: '「3年間」は for three years、「2020年から」は since 2020。for のうしろには長さ、since のうしろには始まった時点が来ます。「3年前から」を since three years と書くのは、よくある誤りです。',
    order: 644,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'for＋期間の長さ（for three years, for a week, for a long time）。',
      'since＋起点（since 2020, since last week, since I was a child）。',
      'since のあとには文（主語＋動詞の過去形）を置くこともできる。',
      '「3年前から」は for three years または since three years ago（× since three years）。',
      'for のあとに「いつ」を表す語、since のあとに「長さ」を表す語は置かない。',
    ],
    sections: [
      {
        heading: 'for は長さ、since は起点',
        body: `継続用法でいちばん問われるのが for と since の使い分けである。指しているものがまったくちがう。

■ for ＋「どれくらいの長さか」
for three years（3年間）・for a week（1週間）・for two hours（2時間）
for a long time（長い間）・for many years（何年も）
I have studied English for five years.（私は5年間、英語を勉強しています）

■ since ＋「いつからか」
since 2021（2021年から）・since last week（先週から）・since this morning（今朝から）
since April（4月から）・since I was a child（子どものころから）
I have studied English since 2021.（私は2021年から英語を勉強しています）

■ 同じ内容を二通りで言える
I have lived here for five years.
＝ I have lived here since 2021.（今が2026年だとして）
同じ帯を、「長さ」で言うか「始まり」で言うかのちがいである。

★ ポイント：for のあとには数えられる長さ、since のあとには時計やカレンダーで指せる一点が来る。「◯年間」なら for、「◯年から」なら since。`,
        figureId: 'lf_eigoext04_144',
      },
      {
        heading: 'since のあとに文が来る形と、「〜前から」',
        body: `■ since のあとに文を置く
since は前置詞としてだけでなく、あとに「主語＋動詞」を続けることもできる。そのときの動詞は過去形にする。
I have known her since I was a child.（子どものころから彼女を知っています）
He has been busy since he came to Japan.（日本に来てからずっといそがしい）
It has been raining since I got up.（起きてからずっと雨が降っています）
「〜して以来」という起点を、文で表しているのである。

■ 「〜前から」の言い方
日本語の「3年前から」を since three years と書くのは誤り。three years は「長さ」であって「いつ」ではないからである。次の二通りで表す。
○ for three years（3年間）
○ since three years ago（3年前から）
ago を付ければ「3年前」という一点になるので since が使える。

■ How long で尋ねる
How long have you lived here?（どのくらいここに住んでいますか）
― For ten years.（10年間です）／ Since 2015.（2015年からです）
答えは for でも since でもよい。

⚠ 注意：for が不要な場合もある。all day（一日中）・all my life（生まれてからずっと）・these days のような語には for を付けない。
○ I have been busy all day.（一日中いそがしい）
× I have been busy for all day.`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は3年前からこの町に住んでいます。」',
        wrongAnswer: 'I have lived in this town since three years.',
        trapExplanation:
          '日本語の「3年前から」の「から」を見て since を選び、「3年」をそのまま置いてしまう。since のあとには「長さ」ではなく「いつ」が来る、という区別ができていない。',
        correctAnswer: 'I have lived in this town for three years.（または since three years ago）',
        correctExplanation:
          'three years は長さなので for を使う。どうしても「〜前から」と言いたければ ago を付けて since three years ago とする。「◯年間」なら for、「◯年から・◯月から」なら since、と日本語の形で見分ける。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は子どものころから彼を知っています。」',
        wrongAnswer: 'I have known him for I was a child.',
        trapExplanation:
          'for と since のどちらを使うか迷ったすえ、よく見る for を選んでしまう。since のあとには「主語＋動詞」の文を置けることを知らないと、この形は作れない。',
        correctAnswer: 'I have known him since I was a child.',
        correctExplanation:
          '「子どものころ」は起点にあたるので since を使い、そのあとに I was a child という文を続ける。since のあとの動詞は過去形にする。for のあとに文を置くことはできないので、この形を見たら since と決まる。',
      },
    ],
  },

  {
    id: 'eigo_s145',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了④：継続の疑問文と答え方',
    description: 'How long 〜? をはじめとする継続の疑問文を、正しい語順と答え方で使う',
    intro: '「どのくらい日本にいますか」は How long have you been in Japan? とたずねます。答えは Yes・No ではなく For 〜. や Since 〜.。ところが When でたずねると、なぜか過去形の文になります。',
    order: 645,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '期間を尋ねるのは How long have / has ＋主語＋過去分詞 …?',
      '答えは For 〜. または Since 〜. で、Yes / No では答えない。',
      'Have you 〜 for / since …? のように Yes / No で答える疑問文もある。',
      '否定文は haven\'t / hasn\'t ＋過去分詞（I haven\'t seen him for a week.）。',
      'How long ではなく When で尋ねると過去形の文になる（When did you come to Japan?）。',
    ],
    sections: [
      {
        heading: 'How long で期間を尋ねる',
        body: `継続用法で「どのくらいの間」を尋ねるときは How long を使う。

■ 語順
How long ＋ have / has ＋ 主語 ＋ 過去分詞 … ?

How long have you lived in this town?（どのくらいこの町に住んでいますか）
― For five years.（5年間です）／ Since 2020.（2020年からです）
How long has she been sick?（彼女はどのくらい病気なのですか）
― Since last Monday.（先週の月曜からです）
How long have you been studying English?（どのくらい英語を勉強していますか）
― For three years.

■ 答え方
For 〜.（期間の長さ）または Since 〜.（起点）で答える。
文にして答えるなら I have lived here for five years. のようにくり返してもよい。
× How long have you lived here? ― Yes, I have.
How long は「どのくらい」を尋ねているので、Yes / No では答えられない。

■ Yes / No で答える疑問文
Have you lived here for a long time?（長い間ここに住んでいるのですか）
― Yes, I have. / No, I haven't.
Has he been in the hospital since last week?
― Yes, he has.
疑問詞がなければ Yes / No で答える。ここは形で判断する。

★ ポイント：疑問詞のある文は Yes / No で答えない。これは現在完了にかぎらず、英語全体の原則である。`,
      },
      {
        heading: '否定文と、When との使い分け',
        body: `■ 継続の否定文
I haven't seen him for a week.（1週間、彼に会っていません）
She hasn't written to me since last year.（彼女は昨年から手紙をくれていません）
It hasn't rained for a month.（1か月、雨が降っていません）
「ずっと〜していない」という意味になり、これも継続用法である。

■ 言いかえの形
I haven't seen him for a week.
＝ It has been a week since I last saw him.（彼に最後に会ってから1週間になります）
少し難しいが、上位校ではこの言いかえも問われる。

■ When で尋ねると過去形になる
How long have you lived in Japan?（どのくらい日本に住んでいますか）← 現在完了
When did you come to Japan?（いつ日本に来たのですか）← 過去形
When は「いつ」という過去の一点を尋ねる語なので、現在完了とはいっしょに使えない。
× When have you come to Japan?
これは入試で非常によく問われるので、How long は現在完了、When は過去形、とセットで覚える。

⚠ 注意：答え方の対応も確認しておく。
How long 〜? → For 〜. / Since 〜.
When 〜? → Three years ago. / In 2020. / Last week.
どちらも「時」に関する質問だが、答えの形がちがう。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「あなたはどのくらいの間、英語を勉強していますか。」',
        wrongAnswer: 'How long do you study English?',
        trapExplanation:
          '「勉強していますか」という日本語が現在の形なので、現在形の疑問文にしてしまう。「どのくらいの間」という期間が、今だけを指す現在形とは合わないことに気づいていない。',
        correctAnswer: 'How long have you studied English?（または How long have you been studying English?）',
        correctExplanation:
          '過去から今まで続いている期間を尋ねるので現在完了にする。How long＋have／has＋主語＋過去分詞、の語順を固めて覚える。答えは For three years. / Since 2021. のように for か since で返す。',
      },
      {
        question: '次の問いへの正しい答えを選びなさい。How long have you known her? ― （Yes, I have. / For ten years.）',
        wrongAnswer: 'Yes, I have.',
        trapExplanation:
          '文が have で始まっているように見えるため、Yes / No で答える疑問文だと思ってしまう。文頭の How long という疑問詞を読み飛ばしていることが原因である。',
        correctAnswer: 'For ten years.',
        correctExplanation:
          'How long は「どのくらいの間」を尋ねる疑問詞なので、For 〜. または Since 〜. で答える。疑問詞がある疑問文は Yes / No では答えない。Have you known her for a long time? なら Yes, I have. でよい。',
      },
    ],
  },

  // ───────────── 8. 現在完了 完了・結果（s146〜s149） ─────────────
  {
    id: 'eigo_s146',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了⑤：完了・結果（もう〜してしまった）',
    description: '動作は終わったが、その結果が今に残っていることを表す使い方をつかむ',
    intro: '「宿題はもう終わった」は、単なる過去の報告ではありません。だから今は遊べる、という今の状態まで含んでいます。英語ではこれを have finished と表します。just・already・yet が合図になります。',
    order: 646,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '完了・結果＝「動作は終わったが、その結果が今に残っている」。',
      '合図は just（ちょうど）・already（もう）・yet（まだ・もう）。',
      'already はふつう肯定文、yet は否定文・疑問文で使う。',
      '日本語では「〜したところだ」「もう〜してしまった」となる。',
      '現在完了は「〜したことがある」だけではない。用法を合図の語で見分ける。',
    ],
    sections: [
      {
        heading: '完了・結果とは',
        body: `完了・結果の用法は、「その動作は少し前に終わったが、終わった結果が今に残っている」ことを表す。

例）I have just finished my homework.（ちょうど宿題を終えたところです）
　宿題を終えたのは少し前。その結果、今は宿題が残っていない。
例）The train has already left.（電車はもう出てしまいました）
　出発したのは少し前。その結果、今ホームに電車はいない。
例）She has washed the dishes.（彼女は皿を洗ってしまいました）
　その結果、今は皿がきれいになっている。

■ 過去形とのちがい
I finished my homework.（宿題を終えた）… 終えたという事実だけ
I have just finished my homework.（ちょうど終えたところだ）… 今その結果がある
過去形は過去の一点を述べるだけで、今どうなっているかには触れない。現在完了は今の状態まで含めて述べる。

■ 合図の語
just（ちょうど・たった今）：I have just arrived.（たった今着いたところです）
already（もう・すでに）：He has already read the book.（彼はもうその本を読んでしまいました）
yet（否定文で「まだ」、疑問文で「もう」）：I haven't finished it yet. / Have you finished it yet?

★ ポイント：完了・結果は「帯がとても短く、右はしが今にぴったりくっついている」イメージ。だから今の状態を語れる。`,
        figureId: 'lf_eigoext04_146',
      },
      {
        heading: '用法の見分けと、三つの用法の関係',
        body: `現在完了は形が同じなので、どの用法かは合図の語と文の内容で見分ける。

■ 合図の語による見分け
for / since / How long　→　継続（ずっと〜している）
just / already / yet　　→　完了・結果（〜したところだ）
ever / never / before / 回数　→　経験（〜したことがある）

■ 合図の語がない場合は内容で判断する
I have washed my hands.（手を洗いました＝今きれいだ）… 完了・結果
I have washed this car three times.（この車を3回洗ったことがある）… 経験（回数がある）
I have lived here since 2020.（2020年から住んでいる）… 継続（since がある）

■ 三つの用法に共通するもの
どの用法でも「今とつながっている」ことは共通している。
継続 → 今も続いている
完了・結果 → 今その結果が残っている
経験 → 今その経験を持っている
つまり現在完了は、いつでも「今どうであるか」を語る形なのである。

⚠ 注意：「現在完了＝〜したことがある」と一つだけ覚えていると、I have washed the car. を「洗ったことがある」と読んでしまう。合図の語がない文では、前後の文脈からどの用法かを決める。会話文なら直前のセリフが大きな手がかりになる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の意味として、この場面に合うものを選びなさい。（父に「車がきれいだね」と言われて）I have washed the car.',
        wrongAnswer: '私はその車を洗ったことがあります。',
        trapExplanation:
          '「現在完了＝〜したことがある」と一つの訳だけを覚えているため、経験の意味で読んでしまう。合図の語がないときは文脈で判断する、という手順が身についていない。',
        correctAnswer: '私はその車を洗ってしまいました（だから今きれいなのです）。',
        correctExplanation:
          '「車がきれいだ」という今の状態が話題なので、これは完了・結果の用法である。洗い終えた結果が今に残っていることを表す。経験なら I have washed this car three times. のように回数や before などがそえられることが多い。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼女はもうその手紙を書いてしまいましたか。」',
        wrongAnswer: 'Has she written the letter already?',
        trapExplanation:
          '日本語の「もう」をそのまま already に置きかえてしまう。already は主に肯定文で使い、疑問文では yet を使う、という使い分けを知らないために起こる。',
        correctAnswer: 'Has she written the letter yet?',
        correctExplanation:
          '疑問文で「もう〜しましたか」と尋ねるときは文末に yet を置く。already を疑問文で使うと「もう（そんなに早く）〜したの？」という驚きの意味になる。肯定文なら She has already written the letter. でよい。',
      },
    ],
  },

  {
    id: 'eigo_s147',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了⑥：just と already の位置',
    description: 'just・already を置く位置と、just now との使い分けを覚える',
    intro: 'I have just arrived. の just は、have と過去分詞のあいだに入ります。ところがよく似た just now は現在完了では使えず、過去形とセットです。1語ちがうだけで形が変わるので、位置ごと覚えます。',
    order: 647,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'just・already は have / has と過去分詞の間に置く。',
      '例）I have just arrived. / He has already finished it.',
      'just now（たった今）は過去形といっしょに使う（He left just now.）。',
      'already は肯定文で「もう」、疑問文では驚きを表す。',
      '文末に置く yet とは位置がちがうので、まとめて整理して覚える。',
    ],
    sections: [
      {
        heading: '置く位置は have と過去分詞の間',
        body: `just（ちょうど）と already（もう）は、have / has と過去分詞の間に置く。

○ I have just arrived at the station.（たった今、駅に着きました）
○ He has already finished his homework.（彼はもう宿題を終えました）
○ The bus has just left.（バスはちょうど出たところです）
○ She has already gone home.（彼女はもう帰ってしまいました）

× I have arrived just at the station.
× He has finished already his homework.
位置がずれると不自然になったり、意味が変わったりする。「have ＋ just / already ＋ 過去分詞」というかたまりで覚えてしまうのがよい。

■ yet は文末
I haven't finished my homework yet.（まだ宿題を終えていません）
Have you finished your homework yet?（もう宿題を終えましたか）
yet だけは文の最後に置く。位置がちがうので、just / already と分けて覚える。

■ 位置のまとめ
have ＋ just ＋ 過去分詞　… 「ちょうど〜したところだ」
have ＋ already ＋ 過去分詞　… 「もう〜してしまった」
have not ＋ 過去分詞 ＋ yet　… 「まだ〜していない」
Have ＋ 主語 ＋ 過去分詞 ＋ yet ?　… 「もう〜しましたか」

★ ポイント：just と already は「中」、yet は「後ろ」。この三つの位置だけは図で覚えてしまう。`,
      },
      {
        heading: 'just と just now のちがい',
        body: `just と just now は形が似ているが、いっしょに使う時制がちがう。

■ just ＋ 現在完了
He has just left the office.（彼はちょうど会社を出たところです）
just は「ちょうど今しがた」という意味で、現在完了とともに使う。

■ just now ＋ 過去形
He left the office just now.（彼はたった今、会社を出ました）
just now は「たった今」という過去の一点を指す語なので、過去形といっしょに使う。
× He has left the office just now.

■ なぜちがうのか
just now は yesterday や three days ago と同じ「いつ」を表す語である。現在完了は「いつ」を表す語といっしょに使えないので、just now とは結びつかない。一方 just は「いつ」ではなく「たった今しがた」という近さを表しているだけなので、現在完了と使える。

■ そのほかの語の位置
never も have と過去分詞の間に置く。I have never been to Hokkaido.
ever も同じ位置。Have you ever seen a panda?
これらは「頻度や経験の程度」を表す語なので、まとめて「have と過去分詞の間」と覚えてよい。

⚠ 注意：already を疑問文で使うと意味が変わる。
Have you finished your homework yet?（もう宿題は終わりましたか）… ふつうの質問
Have you already finished your homework?（もう終わったの？）… 「そんなに早く？」という驚き
入試では、ふつうの質問なら yet、と覚えておけばよい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私はちょうど駅に着いたところです。」',
        wrongAnswer: 'I have arrived just at the station.',
        trapExplanation:
          '日本語の「ちょうど駅に」という語順につられて、just を場所を表す語句の前に置いてしまう。just が動詞にかかる語であることを意識していない。',
        correctAnswer: 'I have just arrived at the station.',
        correctExplanation:
          'just は have と過去分詞の間に置く。「have ＋ just ＋ 過去分詞」をひとかたまりで覚える。already・never・ever も同じ位置に入る。文末に置くのは yet だけである。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼はたった今、出発しました。」',
        wrongAnswer: 'He has left just now.',
        trapExplanation:
          'just と just now を同じ意味の語だと思っているため、現在完了にそのまま just now を付けてしまう。just now が「いつ」を表す過去の語であることに気づいていない。',
        correctAnswer: 'He left just now.',
        correctExplanation:
          'just now は「たった今」という過去の一点を指す語なので、過去形といっしょに使う。現在完了で言いたいなら He has just left. と just だけにする。yesterday や three days ago と同じ仲間だと考えると分かりやすい。',
      },
    ],
  },

  {
    id: 'eigo_s148',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了⑦：yet の二つの意味',
    description: '否定文の「まだ」と疑問文の「もう」を、文の形から読み分ける',
    intro: '同じ yet でも、否定文では「まだ」、疑問文では「もう」と訳が反対になります。Have you washed the dishes yet? は「もう皿を洗いましたか」。訳から考えると混乱するので、文の形を先に見るのがこつです。',
    order: 648,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'yet は文末に置く。否定文では「まだ（〜していない）」、疑問文では「もう（〜しましたか）」。',
      '否定文：I haven\'t washed the dishes yet.（まだ皿を洗っていません）',
      '疑問文：Have you washed the dishes yet?（もう皿を洗いましたか）',
      '同じ yet でも訳が反対になるので、文の形を先に見る。',
      'still（まだ〜している）とは意味も位置もちがう。',
    ],
    sections: [
      {
        heading: '否定文の yet と疑問文の yet',
        body: `yet は文末に置く語で、否定文と疑問文で意味が変わる。

■ 否定文の yet ＝「まだ〜していない」
I haven't finished my homework yet.（私はまだ宿題を終えていません）
She hasn't come home yet.（彼女はまだ帰ってきていません）
The store hasn't opened yet.（その店はまだ開いていません）

■ 疑問文の yet ＝「もう〜しましたか」
Have you finished your homework yet?（もう宿題を終えましたか）
― Yes, I have.（はい、終えました）／ No, not yet.（いいえ、まだです）
Has the bus come yet?（バスはもう来ましたか）

■ 答え方
No, not yet. は「いいえ、まだです」という決まった言い方で、会話文の空所補充でよく出る。
Yes, I have already finished it. のように already で答えることもできる。

■ 訳が反対になる理由
yet はもともと「今の時点で」という意味を持つ語である。それが否定文では「今の時点でまだ〜ない」、疑問文では「今の時点でもう〜したか」となる。日本語の訳が反対に見えるだけで、はたらきは同じである。

★ ポイント：yet を見たら、まず「否定文か疑問文か」を確かめる。それだけで訳が決まる。`,
      },
      {
        heading: 'still・already との区別',
        body: `■ still（まだ〜している）
He is still sleeping.（彼はまだねむっています）
I still remember her name.（私はまだ彼女の名前を覚えています）
still は「以前からの状態が今も続いている」ことを表し、be動詞や一般動詞の前に置く。文末には置かない。

■ 否定文の still（まだ〜していない）
He still hasn't finished his work.（彼はまだ仕事を終えていない）
これは「終わっていないことに対するいらだち」を表す少し強い言い方である。ふつうは He hasn't finished his work yet. を使う。

■ 三つの語のまとめ
already：もう（すでに）… 肯定文、have と過去分詞の間
yet：まだ／もう … 否定文・疑問文、文末
still：まだ（〜し続けている）… 動詞の前

例）He has already arrived.（彼はもう着きました）
例）He hasn't arrived yet.（彼はまだ着いていません）
例）He is still waiting.（彼はまだ待っています）

⚠ 注意：yet には「けれども」という別の意味もある（It is small, yet powerful.）。中学受験では現在完了といっしょに使う用法だけを押さえておけば十分である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私はまだ昼食を食べていません。」',
        wrongAnswer: "I don't eat lunch yet.",
        trapExplanation:
          '「食べていません」という日本語を現在形の否定文にしてしまう。「まだ〜していない」が、過去から今までの間に一度もしていないという現在完了の意味であることに気づいていない。',
        correctAnswer: "I haven't eaten lunch yet.",
        correctExplanation:
          '「まだ〜していない」は現在完了の否定文＋yet で表す。eat の過去分詞は eaten。I don\'t eat lunch. だと「私は（ふだん）昼食を食べない」という習慣の意味になってしまい、場面に合わない。',
      },
      {
        question: '次の英文の意味として正しいものを選びなさい。Have you finished your homework yet?',
        wrongAnswer: 'あなたはまだ宿題を終えていないのですか。',
        trapExplanation:
          'yet＝「まだ」と一対一で覚えているため、疑問文でも「まだ」と訳してしまう。文の形によって訳が変わることを知らないと、読解でも意味を取りちがえる。',
        correctAnswer: 'あなたはもう宿題を終えましたか。',
        correctExplanation:
          '疑問文の yet は「もう」という意味になる。「まだ」と訳すのは否定文のとき（I haven\'t finished it yet.）。yet を見たら、まず否定文か疑問文かを確かめてから訳を決める。答えは Yes, I have. / No, not yet. となる。',
      },
    ],
  },

  {
    id: 'eigo_s149',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了⑧：結果が今に残るということ',
    description: 'have lost・have gone など、今の状態まで語る言い方を理解する',
    intro: 'I lost my key. は「なくした」だけですが、I have lost my key. は「なくして、今も見つかっていない」まで表します。過去形では今の状況が伝わりません。だから現在完了を選ぶのです。',
    order: 649,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'I have lost my key.＝なくして、今も見つかっていない。',
      'He has gone to America.＝行ってしまって、今ここにいない。',
      'I have caught a cold.＝風邪をひいて、今も風邪をひいている。',
      '過去形にすると「今どうなっているか」は表せない。',
      '「その結果、今どうなのか」を言いたいときに現在完了を選ぶ。',
    ],
    sections: [
      {
        heading: '結果を表す代表的な言い方',
        body: `完了・結果の用法の中でも、「今の状態」がはっきり出る言い方を覚えておく。

■ have lost（なくして、今もない）
I have lost my watch.（時計をなくしてしまいました＝今も見つかっていない）
過去形の I lost my watch yesterday. は「昨日なくした」という事実だけを述べ、今見つかったかどうかには触れない。

■ have gone to（行ってしまって、今ここにいない）
He has gone to America.（彼はアメリカへ行ってしまいました＝今ここにいない）
「行ったことがある」ではないことに注意する。

■ have caught a cold（風邪をひいて、今もひいている）
I have caught a cold.（風邪をひいてしまいました＝今も具合が悪い）

■ have broken（こわして、今もこわれている）
He has broken the window.（彼が窓をこわしてしまいました＝今も割れたまま）

■ have become（〜になって、今もそうである）
It has become warm.（暖かくなりました＝今は暖かい）

★ ポイント：どれも「〜してしまった。だから今こうだ」という二段構えの意味を持つ。日本語の「〜してしまった」に近い。`,
      },
      {
        heading: '過去形との差をはっきりさせる',
        body: `同じ内容でも、過去形と現在完了では伝わることがちがう。

■ 例1
I lost my key yesterday.（昨日かぎをなくした）
　→ 今どうなっているかは分からない。もう見つかっているかもしれない。
I have lost my key.（かぎをなくしてしまった）
　→ 今も見つかっていない。だから今こまっている。

■ 例2
He went to America.（彼はアメリカへ行った）
　→ 今もどっているかどうかは分からない。
He has gone to America.（彼はアメリカへ行ってしまった）
　→ 今ここにいない。

■ 例3
She lost her wallet, but she found it later.（財布をなくしたが、あとで見つけた）
この文では「今はある」ので、現在完了ではなく過去形を使う。現在完了を使うと「今もない」という意味と矛盾してしまう。

■ 会話でのはたらき
現在完了は「だから今こまっている」「だから今いない」という、今の事情を相手に伝える形である。だから会話文で理由を説明する場面によく出てくる。
A: Why are you looking for something?（何をさがしているの）
B: I've lost my glasses.（めがねをなくしてしまって）

⚠ 注意：yesterday や last week のような「いつ」を表す語といっしょには使えない。× I have lost my key yesterday. → ○ I lost my key yesterday.（過去形にする）。この決まりは s154 でくわしく学ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の意味として正しいものを選びなさい。He has gone to Canada.',
        wrongAnswer: '彼はカナダへ行ったことがあります。',
        trapExplanation:
          '「現在完了＝〜したことがある」と覚えているため、経験の意味で読んでしまう。go の過去分詞 gone が「行ってしまって今いない」を表すことを知らないと必ず取りちがえる。',
        correctAnswer: '彼はカナダへ行ってしまいました（今ここにいません）。',
        correctExplanation:
          'have gone to 〜 は「行ってしまって今ここにいない」という結果を表す。「行ったことがある」という経験は have been to 〜 を使い、He has been to Canada. となる。この二つの区別は入試の定番である。',
      },
      {
        question: '次の日本語を英語にしなさい。「私はかぎをなくしてしまいました（今も見つかっていません）。」',
        wrongAnswer: 'I lost my key.',
        trapExplanation:
          '「なくした」という過去の出来事に目が行き、過去形で済ませてしまう。かっこ書きの「今も見つかっていない」という条件が、時制の選び方に関わることに気づいていない。',
        correctAnswer: 'I have lost my key.',
        correctExplanation:
          '「今も見つかっていない」という結果まで表したいので現在完了を使う。I lost my key. は「なくした」という過去の事実を述べるだけで、今の状態には触れない。「その結果、今どうなのか」を言いたいときは現在完了を選ぶ。',
      },
    ],
  },

  // ───────────── 9. 現在完了 経験（s150〜s152） ─────────────
  {
    id: 'eigo_s150',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了⑨：経験用法（〜したことがある）',
    description: '生まれてから今までの間の経験を表す使い方をつかむ',
    intro: '「富士山に登ったことがありますか」は Have you ever climbed Mt. Fuji? とたずねます。「登りましたか」との差は、生まれてから今までのどこかで、という幅があること。回数を数えられるのが特徴です。',
    order: 650,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '経験＝「今までに〜したことがある」。回数を数えられるのが特徴。',
      '合図は ever（今までに）・never（一度もない）・before（以前に）・once / twice / 〜 times。',
      'never は have と過去分詞の間に置き、not とは重ねない。',
      '疑問文は Have you ever ＋過去分詞 …? で、答えは Yes, I have. / No, I never have. / No, I haven\'t.',
      '「いつ」を表す語（three years ago など）とはいっしょに使えない。',
    ],
    sections: [
      {
        heading: '経験用法の考え方',
        body: `経験用法は「生まれてから今までの間に、その経験があるか」を表す。

例）I have visited Kyoto three times.（私は京都を3回訪れたことがあります）
例）She has read this book before.（彼女は以前この本を読んだことがあります）
例）I have never seen a real panda.（私は本物のパンダを一度も見たことがありません）
例）Have you ever climbed Mt. Fuji?（あなたは富士山に登ったことがありますか）

■ 「いつ」は問題にしない
経験用法では、その経験がいつのことかは問題にしない。だから three years ago や last year のような「いつ」を表す語とはいっしょに使えない。回数（three times）は言えるが、日付は言えないのである。
× I have visited Kyoto three years ago.
○ I visited Kyoto three years ago.（過去形にする）
○ I have visited Kyoto three times.（回数なら現在完了でよい）

■ 合図の語
ever（今までに）… 疑問文で使う
never（一度も〜ない）… 否定の意味を持つ
before（以前に）… 文末に置く
once（1回）・twice（2回）・three times（3回）・many times（何度も）

★ ポイント：経験は「生まれてから今まで」という長い帯の中に、点がいくつあるかを数える形。だから回数は言えても、日付は言えない。`,
        figureId: 'lf_eigoext04_150',
      },
      {
        heading: '否定文・疑問文の作り方',
        body: `■ 否定文には never を使う
I have never been to Hokkaido.（私は北海道へ行ったことが一度もありません）
He has never eaten natto.（彼は納豆を食べたことが一度もありません）
never は have と過去分詞の間に置く。never 自体が否定の意味を持っているので、not と重ねてはいけない。
× I haven't never seen it.
○ I have never seen it.

■ not を使う否定文もある
I have not seen that movie.（その映画を見たことがありません）
never を使うほうが「一度も」という気持ちが強く出る。

■ 疑問文には ever を使う
Have you ever been to Kyoto?（京都へ行ったことがありますか）
― Yes, I have.（はい、あります）
― No, I haven't.（いいえ、ありません）
― No, I have never been there.（いいえ、一度もありません）
ever は「今までに」という意味で、have と過去分詞の間に置く。

■ 回数を尋ねる
How many times have you been to Kyoto?（何回、京都へ行ったことがありますか）
― Three times.（3回です）／ Only once.（1回だけです）

⚠ 注意：ever は疑問文で使うのが基本で、肯定文では使わない。× I have ever been to Kyoto. は誤り。肯定文なら I have been to Kyoto before. や I have been to Kyoto twice. とする。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私はその映画を一度も見たことがありません。」',
        wrongAnswer: "I haven't never seen that movie.",
        trapExplanation:
          '「〜ない」という日本語に引かれて否定の形を作り、そこへさらに never を足してしまう。never がそれ自体で否定の意味を持つことを意識していない。',
        correctAnswer: 'I have never seen that movie.',
        correctExplanation:
          'never は「一度も〜ない」という否定の意味をすでに含んでいるので、not と重ねて使わない。have と過去分詞の間に置いて I have never seen 〜 とする。not を使うなら I have not seen that movie. とする。',
      },
      {
        question: '次の日本語を英語にしなさい。「あなたは今までにその歌を聞いたことがありますか。」',
        wrongAnswer: 'Do you ever hear that song?',
        trapExplanation:
          '「聞いたことがありますか」を「聞きますか」に近い形でとらえ、現在形の疑問文にしてしまう。「今までに」という経験を表すには現在完了が必要だと気づいていない。',
        correctAnswer: 'Have you ever heard that song?',
        correctExplanation:
          '経験を尋ねるときは Have you ever ＋過去分詞 …? の形にする。hear の過去分詞は heard。答えは Yes, I have. / No, I haven\'t.。Do you ever hear 〜? だと「ふだん聞くことがありますか」という別の意味になる。',
      },
    ],
  },

  {
    id: 'eigo_s151',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了⑩：ever・never・before と回数の言い方',
    description: '経験用法でよく使う語の位置と、回数の表し方を確実にする',
    intro: 'never は have と過去分詞のあいだ、before は文末。置く場所が語ごとに決まっています。また「以前に」は before で、ago は使えません。ago は過去形とセットの語だからです。位置ごと覚えましょう。',
    order: 651,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'ever・never は have と過去分詞の間、before は文末に置く。',
      '回数は once（1回）・twice（2回）・three times（3回）・many times（何度も）。',
      '「以前に」は before。ago は過去形とセットなので現在完了では使えない。',
      '回数を尋ねるのは How many times have you ＋過去分詞 …?',
      'Have you ever 〜? への答えは Yes, I have. / No, I haven\'t. / No, never.',
    ],
    sections: [
      {
        heading: '語の位置を固める',
        body: `経験用法でよく使う語は、置く場所が決まっている。

■ have と過去分詞の間に置く語
ever（今までに）：Have you ever visited Kyoto?
never（一度も〜ない）：I have never visited Kyoto.
just（ちょうど）：I have just visited Kyoto.（完了・結果）
already（もう）：I have already visited Kyoto.（完了・結果）

■ 文末に置く語
before（以前に）：I have seen him before.（以前に彼に会ったことがあります）
yet（まだ・もう）：I haven't seen him yet.
回数を表す語：I have seen him twice.（2回会ったことがあります）

■ よくある位置の誤り
× I never have read the book.
○ I have never read the book.
never を have の前に置くのは誤りである。「have ＋ never ＋ 過去分詞」というかたまりで覚える。

★ ポイント：ever・never は「中」、before・yet・回数は「後ろ」。この二つに分けて覚えれば十分である。`,
      },
      {
        heading: '回数の表し方と、before / ago の区別',
        body: `■ 回数の言い方
once（1回）　twice（2回）　three times（3回）　four times（4回）　many times（何度も）
※ 1回・2回だけは once・twice という特別な語を使う。one time・two times とも言えるが、once・twice のほうがふつうである。3回以降は「数＋times」の形になる。

I have been to Hokkaido once.（北海道へ1回行ったことがあります）
He has read this book twice.（彼はこの本を2回読んだことがあります）
She has visited America many times.（彼女は何度もアメリカを訪れたことがあります）

■ 回数を尋ねる
How many times have you been to Kyoto?（何回、京都へ行ったことがありますか）
― Three times. / Only once. / Never.
How often 〜? も使えるが、中学受験では How many times 〜? を覚えておけばよい。

■ before と ago の区別
before（以前に）… 現在完了と使える。今から見ていつのことかは言わない。
　I have met him before.（以前に彼に会ったことがあります）
ago（〜前に）… 過去形と使う。「今から◯だけさかのぼった一点」を指す。
　I met him three days ago.（3日前に彼に会いました）
　× I have met him three days ago.

■ 覚え方
ago は必ず前に数量が付く（three days ago, a year ago）。before は単独で「以前に」と使える。数量が付いていたら過去形、と考えるとよい。

⚠ 注意：before にも「〜する前に」という別の使い方がある（before I go to bed）。現在完了といっしょに文末に置かれていれば「以前に」の意味である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は以前、彼に会ったことがあります。」',
        wrongAnswer: 'I have met him ago.',
        trapExplanation:
          '「以前」という日本語から ago を思いうかべてしまう。ago は「◯日前」のように数量とセットで使い、現在完了とはいっしょに使えないことを知らない。',
        correctAnswer: 'I have met him before.',
        correctExplanation:
          '現在完了で「以前に」と言うときは before を文末に置く。ago は three days ago のように数量が必要で、しかも過去形とセットで使う語である（I met him three days ago.）。ago が出てきたら過去形、と結びつけて覚える。',
      },
      {
        question: '次の日本語を英語にしなさい。「私はその本を一度も読んだことがありません。」',
        wrongAnswer: 'I never have read the book.',
        trapExplanation:
          '日本語の「一度も」を先に言いたい気持ちから、never を have の前に出してしまう。「have ＋ never ＋ 過去分詞」という位置が固まっていない。',
        correctAnswer: 'I have never read the book.',
        correctExplanation:
          'never は have と過去分詞の間に置く。ever・just・already も同じ位置に入る。文末に置くのは before・yet・回数を表す語である。位置を二つのグループに分けて覚えると迷わない。',
      },
    ],
  },

  {
    id: 'eigo_s152',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了⑪：have been to と have gone to',
    description: '経験の been to、結果の gone to、継続の been in を区別する',
    intro: 'He has been to America. は「行ったことがある」、He has gone to America. は「行ってしまって、今ここにいない」。to のあとが同じでも意味は大きくちがいます。しくみが分かれば取りちがえません。',
    order: 652,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'have been to 〜＝「〜へ行ったことがある」（経験）／「〜へ行ってきたところだ」（完了）。',
      'have gone to 〜＝「〜へ行ってしまった（今ここにいない）」（結果）。',
      'have been in 〜＝「〜にずっといる」（継続）。前置詞が to か in かで意味が変わる。',
      'I have gone to 〜 とは言わない（自分が今ここにいないことになる）。',
      'have been to には「行った経験」、have gone to には「今いない」という結果がある。',
    ],
    sections: [
      {
        heading: '三つの形を並べて区別する',
        body: `be動詞の過去分詞 been を使った形は、前置詞と組み合わせで意味が変わる。三つを並べて覚える。

■ have been to 〜（経験：〜へ行ったことがある）
I have been to Kyoto three times.（京都へ3回行ったことがあります）
Have you ever been to America?（アメリカへ行ったことがありますか）
その場所を訪れた経験があり、今はもどってきている。

■ have been to 〜（完了：〜へ行ってきたところだ）
I have just been to the post office.（郵便局へ行ってきたところです）
just がそえられると「行ってきた」という完了の意味になる。

■ have gone to 〜（結果：〜へ行ってしまった）
He has gone to America.（彼はアメリカへ行ってしまいました＝今ここにいない）
行ったきり、今この場にいないことを表す。

■ have been in 〜（継続：〜にずっといる）
She has been in Osaka for three years.（彼女は3年間ずっと大阪にいます）
in は「その中にいる」という状態を表すので、継続の意味になる。

★ ポイント：been to は「行って帰ってきた」、gone to は「行ったきり」、been in は「ずっとそこにいる」。`,
      },
      {
        heading: 'まちがえやすい点',
        body: `■ 主語が I や we のときは gone を使わない
× I have gone to Kyoto.
自分が「行ってしまって今ここにいない」ことになるので、話している本人には使えない。
○ I have been to Kyoto.（行ったことがある）

■ 三人称でも文脈で決まる
He has been to Kyoto.（彼は京都へ行ったことがある＝今ここにいる）
He has gone to Kyoto.（彼は京都へ行ってしまった＝今ここにいない）
同じ「行った」でも、今その人がどこにいるかがちがう。会話文では「だから彼は今いないんだ」といった説明とセットで出る。

■ 前置詞を落とさない
× I have been Kyoto.
○ I have been to Kyoto.
「〜へ」という方向を表す to が必要である。

■ そのほかの been の使い方
I have been busy since yesterday.（昨日からずっといそがしい）… be動詞の継続
It has been three years since he left Japan.（彼が日本を発ってから3年になります）… 時の経過

⚠ 注意：have been to 〜 は「行ったことがある」と訳すため経験用法だと思いがちだが、just や already がそえられると「行ってきたところだ」という完了の意味になる。合図の語を見てから訳を決める。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は一度アメリカへ行ったことがあります。」',
        wrongAnswer: 'I have gone to America once.',
        trapExplanation:
          '「行った」という日本語から go を選び、その過去分詞 gone を使ってしまう。gone to が「行ってしまって今ここにいない」を表すことを知らないと、必ずこの形になる。',
        correctAnswer: 'I have been to America once.',
        correctExplanation:
          '「行ったことがある」という経験は have been to 〜 で表す。I have gone to America. と言うと、話している自分が今ここにいないという矛盾した文になる。主語が I や we のときは gone を使わない、と覚えておく。',
      },
      {
        question: '次の日本語を英語にしなさい。「彼女は3日間ずっと病院にいます。」',
        wrongAnswer: 'She has been to the hospital for three days.',
        trapExplanation:
          'been という語を見て「been to」の形をそのまま当てはめてしまう。to と in で意味が変わることを意識していないと、「行ったことがある」の形で書いてしまう。',
        correctAnswer: 'She has been in the hospital for three days.',
        correctExplanation:
          '「ずっと〜にいる」という継続は have been in 〜 で表す。been to は「行ったことがある・行ってきた」で、for three days という期間とは合わない。to は方向、in は「その中にいる」状態、と前置詞の意味から考える。',
      },
    ],
  },

  // ───────────── 10. 現在完了と過去形の使い分け（s153〜s155） ─────────────
  {
    id: 'eigo_s153',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了と過去形①：今とつながるか、切れているか',
    description: '同じ出来事でも、今とのつながりの有無で形が変わることを理解する',
    intro: '「京都に行きました」を英語にするとき、I went to Kyoto. と I have been to Kyoto. のどちらを選ぶでしょうか。日本語は同じでも、今とのつながりがあるかどうかで形が変わります。判断のしかたを決めます。',
    order: 653,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '過去形＝過去の一点で完結し、今とは切れている。',
      '現在完了＝過去から今までつながっていて、今の状態まで語る。',
      '同じ日本語でも、今どうなっているかで形が変わる。',
      '「今も続いている」「今も結果が残っている」「今までの経験」なら現在完了。',
      '英作文では「今どうなのか」を自分に問いかけてから形を決める。',
    ],
    sections: [
      {
        heading: '二つの形が指す範囲のちがい',
        body: `過去形と現在完了は、どちらも「過去に起きたこと」を語る。ちがいは、その出来事を今と結びつけるかどうかである。

■ 過去形：点で終わる
I lost my umbrella yesterday.（昨日、かさをなくしました）
昨日という一点での出来事を述べているだけで、今かさがあるかどうかには触れていない。もう見つかっているかもしれない。

■ 現在完了：今まで届く
I have lost my umbrella.（かさをなくしてしまいました）
なくした結果が今まで届いているので、「今も見つかっていない」ことまで表す。

■ ほかの例
He went to America.（アメリカへ行った）… 今もどっているかは不明
He has gone to America.（アメリカへ行ってしまった）… 今ここにいない

She lived in Osaka for ten years.（10年間、大阪に住んでいた）… 今は住んでいない
She has lived in Osaka for ten years.（10年間、大阪に住んでいる）… 今も住んでいる

I was busy last week.（先週いそがしかった）… 今はどうか分からない
I have been busy since last week.（先週からずっといそがしい）… 今もいそがしい

★ ポイント：「今どうなのか」まで言いたいときだけ現在完了を使う。言う必要がなければ過去形でよい。`,
        figureId: 'lf_eigoext04_153',
      },
      {
        heading: '日本語からの判断のしかた',
        body: `日本語だけを見ると、どちらの形にすべきか分かりにくい。次の手順で判断する。

■ 手順
① その出来事は今も続いているか　→　はい：現在完了（継続）
② その結果が今も残っているか　→　はい：現在完了（完了・結果）
③ 今までの経験として言っているか　→　はい：現在完了（経験）
④ 「いつ」を表す語（昨日・先週・3年前）があるか　→　はい：過去形

■ 日本語の手がかり
現在完了になりやすい表現
　「ずっと〜している」「〜してしまった」「〜したことがある」「もう〜した」「まだ〜していない」
過去形になりやすい表現
　「昨日〜した」「先週〜した」「〜年前に〜した」「そのとき〜した」

■ まぎらわしい例
「私は3年間、大阪に住んでいました」
　→ 今は住んでいないなら過去形：I lived in Osaka for three years.
「私は3年間、大阪に住んでいます」
　→ 今も住んでいるので現在完了：I have lived in Osaka for three years.
日本語の語尾のわずかなちがいが、英語では時制のちがいになる。

⚠ 注意：現在完了は「今」に関わる形なので、過去の一点を指す語とはいっしょに使えない。この決まりについては次のまとまりでくわしく確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の二文のうち、「今もかさが見つかっていない」ことまで表すのはどちらか。ア I lost my umbrella.　イ I have lost my umbrella.',
        wrongAnswer: 'ア I lost my umbrella.',
        trapExplanation:
          'どちらも日本語では「かさをなくした」と訳せるので、同じ意味だと思ってしまう。過去形が今の状態には触れない形であることが理解できていない。',
        correctAnswer: 'イ I have lost my umbrella.',
        correctExplanation:
          '過去形は過去の一点を述べるだけで、今かさがあるかどうかには触れない。現在完了は今まで線がつながっているので、「今も見つかっていない」という結果まで表す。「今どうなのか」を語るのが現在完了である。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は3年間ずっとここにいます。」',
        wrongAnswer: 'I am here for three years.',
        trapExplanation:
          '「います」という現在の言い方から、be動詞の現在形を選んでしまう。「3年間」という期間は、今だけを指す現在形とはいっしょに使えないことに気づいていない。',
        correctAnswer: 'I have been here for three years.',
        correctExplanation:
          '過去のある時点から今まで続いているので現在完了にする。be の過去分詞は been。期間を表す for 〜 や since 〜 が出てきたら、現在形ではなく現在完了を使う、と結びつけて覚える。',
      },
    ],
  },

  {
    id: 'eigo_s154',
    subject: 'eigo',
    examType: 'chugaku',
    title: '現在完了と過去形②：いっしょに使えない語',
    description: 'yesterday・ago・When 〜? など、現在完了と共存できない語を押さえる',
    intro: 'I have finished it yesterday. は誤りです。現在完了は今とつながる形なので、yesterday のように過去の一点を指す語とは同居できません。When でたずねるときも過去形になります。線引きを覚えます。',
    order: 654,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '現在完了は「過去の一点」を指す語といっしょに使えない。',
      '使えない語：yesterday, last night / week / year, 〜 ago, just now, then, in 2020。',
      'When 〜? で尋ねるときは過去形（× When have you come?　○ When did you come?）。',
      '使える語：for, since, just, already, yet, ever, never, before, 回数, today, this week。',
      '「いつ」を言いたいなら過去形、「今どうか」を言いたいなら現在完了。',
    ],
    sections: [
      {
        heading: 'いっしょに使えない語',
        body: `現在完了は「過去から今まで」を一本の線でとらえる形である。だから、線の途中の一点だけを指す語とは矛盾してしまい、いっしょに使えない。

■ 使えない語
yesterday（昨日）・last night / last week / last year（昨夜・先週・昨年）
three days ago（3日前）・a long time ago（ずっと昔）
just now（たった今）・then / at that time（そのとき）・in 2020（2020年に）
When 〜?（いつ〜か）

× I have finished the book three days ago.
○ I finished the book three days ago.（過去形にする）
× He has come to Japan last year.
○ He came to Japan last year.

■ 使える語
for 〜（〜の間）・since 〜（〜以来）
just（ちょうど）・already（もう）・yet（まだ・もう）
ever（今までに）・never（一度も〜ない）・before（以前に）・once / twice / 〜 times
today（今日）・this week / this month（今週・今月）・recently（最近）
これらは「今を含む範囲」を表すので、現在完了と両立する。

★ ポイント：「いつ」を指す語は過去形、「どのくらい・何回・もう／まだ」を表す語は現在完了。語を見た瞬間に時制が決まる。`,
      },
      {
        heading: 'When と How long の対応',
        body: `■ 疑問文での使い分け
When did you come to Japan?（いつ日本に来たのですか）― Three years ago.
How long have you been in Japan?（どのくらい日本にいますか）― For three years.

When は「過去のいつか」を尋ねる語なので、必ず過去形とセットになる。
× When have you come to Japan? は誤りである。「来て今もいる」という気持ちから現在完了にしてしまいがちだが、When がある時点で過去形と決まる。

■ 二つの文で書き分ける
「私は3年前に日本に来て、今もここにいます」を英語にするときは、二文に分ける。
I came to Japan three years ago. And I have been here since then.
一文の中に「3年前」と現在完了を同居させることはできない。

■ 書きかえの問題
He died three years ago.（彼は3年前に亡くなった）
＝ He has been dead for three years.（彼が亡くなって3年になります）
＝ Three years have passed since he died.
＝ It has been three years since he died.
上位校ではこうした書きかえも出る。「3年前に死んだ」＝「死んだ状態が3年続いている」と考えると、現在完了に置きかえられる。

⚠ 注意：today や this week は「今を含む期間」なので現在完了と使える。I have seen him twice today.（今日、彼に2回会いました）。ただし今日がもう終わった話をするなら過去形になる。今を含むかどうかで判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「あなたはいつ日本へ来たのですか。」',
        wrongAnswer: 'When have you come to Japan?',
        trapExplanation:
          '「来て今も日本にいる」という状況から、今とつながる現在完了を選んでしまう。When が「過去のいつか」を尋ねる語であり、現在完了とは共存できないことを知らない。',
        correctAnswer: 'When did you come to Japan?',
        correctExplanation:
          'When は過去の一点を尋ねる語なので、必ず過去形といっしょに使う。今もいることを言いたいなら How long have you been in Japan?（どのくらい日本にいますか）と別の尋ね方をする。When＝過去形、How long＝現在完了、とセットで覚える。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は3日前にその本を読み終えました。」',
        wrongAnswer: 'I have finished the book three days ago.',
        trapExplanation:
          '「読み終えた」という完了の意味から現在完了を選び、そこに「3日前」をそのまま足してしまう。「〜してしまった」という日本語が現在完了と強く結びついているために起こる。',
        correctAnswer: 'I finished the book three days ago.',
        correctExplanation:
          'three days ago は過去の一点を指す語なので、現在完了とはいっしょに使えない。過去形 finished にする。現在完了で言うなら I have just finished the book.（ちょうど読み終えたところです）のように、「いつ」を表す語を外す。',
      },
    ],
  },

  {
    id: 'eigo_s155',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時制の総整理：一本の時間軸で並べる',
    description: 'ここまで学んだすべての時制を、一本の時間軸の上で整理して選べるようにする',
    intro: '現在形・過去形・進行形・未来・現在完了。ここまでに出てきた形をばらばらに覚えていると、英作文のたびに迷います。1本の時間軸の上に並べ、「点か幅か」「今とつながるか」の2つで選べるようにして仕上げます。',
    order: 655,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '判断は二段階。①今とつながっているか　②点か幅か。',
      '過去形＝過去の点／過去進行形＝過去の幅／現在完了＝過去から今までの幅。',
      '現在形＝くり返す点／現在進行形＝今の幅／will・be going to＝これから。',
      '時・条件を表すまとまり（if, when など）の中では、未来のことも現在形。',
      'and で結ばれた動詞は同じ時制にそろえる。',
    ],
    sections: [
      {
        heading: '一本の時間軸にすべてを並べる',
        body: `ここまで学んだ時制を、一本の時間軸の上に並べて整理する。

■ 過去のこと
過去形：I played tennis yesterday.（過去の一点での出来事）
過去進行形：I was playing tennis at three yesterday.（過去のある時点で進行中）

■ 過去から今まで
現在完了（継続）：I have played tennis for five years.（今も続いている）
現在完了（完了・結果）：I have just played tennis.（終わって、その結果が今にある）
現在完了（経験）：I have played tennis many times.（今までに何回も）

■ 今のこと
現在形：I play tennis every Sunday.（くり返す習慣）
現在進行形：I am playing tennis now.（今この瞬間の幅）

■ これからのこと
will：I'll play tennis with you.（今決めた）
be going to：I'm going to play tennis tomorrow.（前から決めていた）
現在進行形：I'm playing tennis at three tomorrow.（約束ずみ）
現在形：The game starts at three.（決まっている予定）

★ ポイント：形が七つ以上あっても、判断するのは二つだけ。①今とつながっているか　②点か幅か。この二つを順に確かめれば、どの形を使うかは自動的に決まる。`,
        figureId: 'lf_eigoext04_155',
      },
      {
        heading: '入試で問われる最後の確認事項',
        body: `時制の問題で最後まで残りやすい注意点をまとめておく。

■ ① 時・条件のまとまりでは未来も現在形
If it rains tomorrow, I will stay home.
When he comes back, I will tell him.
if・when・before・after・until・as soon as のあとは will を使わない。

■ ② and で結ばれた動詞は時制をそろえる
× I went to the park and play soccer.
○ I went to the park and played soccer.
一つ目の動詞が過去形なら、and のあとも過去形にする。

■ ③ 状態動詞は進行形にしない
× I am knowing him.　○ I know him.
ただし have は「食べる・過ごす」の意味なら進行形にできる。

■ ④ 現在完了に「いつ」を表す語は付けない
× I have seen him yesterday.　○ I saw him yesterday.

■ ⑤ 助動詞や did のあとは原形
× He will comes.　○ He will come.
× Did you played?　○ Did you play?

■ ⑥ have のあとは過去分詞
× I have saw it.　○ I have seen it.

■ 見直しの手順
英作文を書き終えたら、次の順で見直す。
（ア）主語と動詞の数は合っているか
（イ）時を表す語と時制は矛盾していないか
（ウ）助動詞・did・to のあとは原形か
（エ）have のあとは過去分詞か
この四つを確認するだけで、時制の失点は大きく減らせる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の日本語を英語にしなさい。「私は昨日から母に会っていません。」',
        wrongAnswer: "I don't see my mother since yesterday.",
        trapExplanation:
          '「会っていません」という日本語が現在の否定に見えるため、現在形の否定文にしてしまう。since yesterday という「昨日から今まで」の幅が、現在形とは合わないことに気づいていない。',
        correctAnswer: "I haven't seen my mother since yesterday.",
        correctExplanation:
          '昨日から今まで続いている状態なので現在完了の否定文にする。see の過去分詞は seen。since 〜 や for 〜 が出てきたら現在完了、と機械的に結びつけてよい。「ずっと〜していない」も継続用法である。',
      },
      {
        question: '次の日本語を英語にしなさい。「私は昨日、公園へ行ってサッカーをしました。」',
        wrongAnswer: 'I went to the park yesterday and play soccer.',
        trapExplanation:
          '一つ目の動詞を過去形にしたことで安心してしまい、and のあとの動詞を原形のままにしてしまう。日本語では最後にだけ「〜しました」と付くので、二つ目の動詞の時制を意識しにくい。',
        correctAnswer: 'I went to the park yesterday and played soccer.',
        correctExplanation:
          'and で結ばれた二つの動詞は、同じ時制にそろえる。went が過去形なので played も過去形にする。長い英作文では、and や but の前後で時制がずれていないかを最後に必ず確認する。',
      },
    ],
  },
];
