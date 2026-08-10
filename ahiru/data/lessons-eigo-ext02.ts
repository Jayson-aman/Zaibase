import type { Lesson } from './lesson-types';

// 中学受験 英語「be動詞・一般動詞と基本文型」拡張ユニット（40セッション：eigo_s041〜eigo_s080）
// order は 541〜580。他ユニットと重複しない。
// 構成：be動詞の使い分けと短縮形(5)／be動詞の否定文・疑問文・答え方(4)／
//       一般動詞と三単現(6)／一般動詞の否定文・疑問文(5)／be動詞と一般動詞の区別(4)／
//       第1・第2文型(4)／第3文型(4)／第4文型(4)／第5文型(4)
// 図解は「語順」「2軸での整理」「割合」など、図にすることで本当に理解が進む箇所にだけ
// 付けてある（40課中17課／lesson-figs-eigo-ext02.ts）。
export const eigoExt02Lessons: Lesson[] = [
  // ───────────── 1. be動詞（am/is/are）の使い分け・短縮形（s041〜s045） ─────────────
  {
    id: 'eigo_s041',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞①：主語と「＝」で結ぶことば',
    description: 'am・is・are の三つがどんなはたらきをするのかを、日本語の「です」と区別してつかむ',
    order: 541,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞は am / is / are の三つ。「〜です」「〜である」と訳し、主語とあとの語を「＝」で結ぶ。',
      '語順は〈主語＋be動詞＋名詞または形容詞〉。I am a student. / She is kind.',
      'be動詞は日本語の「は」ではなく「＝」にあたる。「は」は主語のしるしにすぎない。',
      'あとに来るのが数えられる名詞の単数なら a / an を必ず付ける（I am a student.）。',
      '英語の文には必ず動詞が要る。「私は学生。」のような文でも am を省略できない。',
    ],
    sections: [
      {
        heading: 'be動詞は「＝」の記号',
        body: `英語の文は〈だれが〉〈どうする／どんなだ〉の順にならぶ。このうち「どんなだ」を表すときに使うのが be動詞である。be動詞には am・is・are の三つの形がある。

■ 基本の形
主語＋be動詞＋名詞・形容詞

例）I am a student.（私は学生です）
例）She is kind.（彼女は親切です）
例）They are my friends.（彼らは私の友達です）

■ be動詞＝イコール
be動詞のいちばん大事なはたらきは、主語とあとの語を「＝」でつなぐことである。

I ＝ a student
She ＝ kind
They ＝ my friends

日本語の「私は学生です」を見ると、「は」が be動詞にあたるように感じてしまう。しかし「は」は主語のしるし（主語を示す助詞）であって、be動詞ではない。be動詞にあたるのは文の終わりの「です」の部分である。

★ ポイント：主語のあとに「＝」の記号を置く、と考えるとよい。I（私）＝ a student（学生）。この「＝」が am という形になって現れている。`,
      },
      {
        heading: '英語の文には必ず動詞が要る',
        body: `日本語では「私は学生。」と言い切っても文になる。しかし英語では動詞のない文は作れない。

✗ I a student.
○ I am a student.

これは英語の文の絶対のきまりである。「です」にあたる語が日本語で目立たないときほど、be動詞を落としやすいので注意する。

■ 落としやすい形
形容詞が来るときは特に忘れやすい。

✗ She kind.　　○ She is kind.（彼女は親切です）
✗ We happy.　　○ We are happy.（私たちは幸せです）
✗ I hungry.　　○ I am hungry.（私はおなかがすいています）

「hungry（空腹の）」は形容詞なので、それだけでは文にならない。かならず am / is / are をはさむ。

■ 名詞が来るときは a / an を忘れない
数えられる名詞が一つのときは、前に a（母音の音で始まる語には an）を付ける。

例）I am a doctor.（私は医者です）
例）He is an English teacher.（彼は英語の先生です）

⚠ 注意：人の名前や国名のように「一つしかないもの」には a を付けない。
例）I am Ken.（○）／ I am a Ken.（✗）
例）She is Japanese.（○）※ Japanese はここでは形容詞`,
      },
    ],
    trapExamples: [
      {
        question: '「私は野球の選手です。」を英語にしなさい。',
        wrongAnswer: 'I am baseball player.',
        trapExplanation: '日本語には「一人の」にあたる語が出てこないので、a を入れる必要を感じない。am まで書けたところで安心してしまい、冠詞の確認をとばしてしまう。',
        correctAnswer: 'I am a baseball player.',
        correctExplanation:
          'player は数えられる名詞で、ここでは一人のことなので a が必要である。be動詞のあとに数えられる名詞の単数が来たら、a / an が付いているかを必ず確かめる。母音の音で始まる語のときは an（I am an artist.）になる。',
      },
      {
        question: '「彼女は親切です。」を英語にしなさい。',
        wrongAnswer: 'She kind.',
        trapExplanation: '日本語の「親切です」は「親切」＋「です」で、「です」がおまけのように見える。そのため kind だけで「親切です」を表せていると思ってしまう。',
        correctAnswer: 'She is kind.',
        correctExplanation:
          'kind は「親切な」という形容詞にすぎず、それだけでは文にならない。英語の文には必ず動詞が要るので、She と kind を「＝」で結ぶ is を入れる。形容詞が来る文ほど be動詞を落としやすいので、書き終わったら動詞があるかを見直す。',
      },
    ],
  },

  {
    id: 'eigo_s042',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞②：am・is・are の使い分け',
    description: '主語の人称と単数・複数によって be動詞の形が決まるしくみを整理する',
    order: 542,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'am は主語が I のときだけ。世界中で I am しかない。',
      'is は主語が he / she / it、および「一人・一つ」の名詞のとき。',
      'are は主語が you / we / they、および「二つ以上」の名詞のとき。',
      'you は「あなた」一人でも are（× you is）。',
      'and で二つ以上つないだ主語は複数なので are。Ken and I are 〜／Tom and Mika are 〜。',
    ],
    sections: [
      {
        heading: '三つの形の決まり方',
        body: `be動詞の形は、主語がだれで、いくつあるかで決まる。決め方は次の三段階で考える。

■ ①主語が I なら am
例）I am from Osaka.（私は大阪出身です）
am を使うのは主語が I のときだけである。ほかの主語で am を使うことはない。

■ ②主語が you なら are
例）You are a good singer.（あなたは歌が上手です）
you は「あなた」一人でも「あなたたち」でも are を使う。× You is とは絶対に言わない。

■ ③そのほかは「一つなら is、二つ以上なら are」
一人・一つ → is
例）He is my brother. / She is a nurse. / This is my desk.
例）My father is a teacher.（father は一人 → is）

二つ以上 → are
例）They are students. / We are in the same class.
例）My parents are teachers.（parents は二人 → are）

★ ポイント：「I なら am、you なら are、あとは数で決める」。この順に確かめれば迷わない。`,
        figureId: 'lf_eigoext02_042',
      },
      {
        heading: '主語が長いときの見分け方',
        body: `入試でまちがえるのは、主語が一語ではなく長いかたまりになっているときである。be動詞は「主語のかたまりの中心の語」に合わせる。

■ and でつないだ主語は複数
例）Ken and Yuki are in the library.（ケンとユキは図書室にいます）
例）My brother and I are good friends.（兄と私は仲よしです）
二人いるのだから are である。直前の I につられて am にしてはいけない。

■ うしろに説明が付いた主語
主語のかたまりの中心（数を決めている語）を見つける。

例）The boy with two dogs is my cousin.
　　（二匹の犬を連れた少年は私のいとこです）
中心は The boy（一人）なので is。直前の two dogs につられて are としない。

例）The books on the desk are mine.
　　（机の上の本は私のものです）
中心は The books（複数）なので are。

⚠ 注意：be動詞のすぐ前の語を見て決めるのではなく、「文の主語は何か」をつかんでから決める。前置詞（with / on / in など）から始まるかたまりは主語ではない。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に am / is / are のどれかを入れなさい。　Tom and I（　）in the same class.',
        wrongAnswer: 'am',
        trapExplanation: 'be動詞のすぐ前の語が I なので、「I なら am」の決まりをそのままあてはめてしまう。主語がどこからどこまでかを確かめていないために起こるまちがい。',
        correctAnswer: 'are',
        correctExplanation:
          '主語は Tom and I で、トムと私の二人である。二人以上なら are を使う。「I なら am」が使えるのは主語が I ひとつだけのときに限られる。and が見えたら、まず主語全体を丸で囲んで人数を数えるとよい。',
      },
      {
        question: '（　）に am / is / are のどれかを入れなさい。　My brother\'s friends（　）very kind.',
        wrongAnswer: 'is',
        trapExplanation: '文の先頭の My brother（兄・一人）だけを見て「一人だから is」と決めてしまう。所有を表す \'s が付いた語は主語の中心ではないのに、目立つので主語だと思いこむ。',
        correctAnswer: 'are',
        correctExplanation:
          '主語は My brother\'s friends（兄の友達）で、中心の語は friends という複数形である。したがって are を使う。\'s が付いた語は「だれの」を説明しているだけなので、そのうしろの名詞が単数か複数かで be動詞を決める。',
      },
    ],
  },

  {
    id: 'eigo_s043',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞③：主語になる代名詞（I・you・he・she・it・we・they）',
    description: '名詞を代名詞に置きかえるときの選び方と、それに合う be動詞を身につける',
    order: 543,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '主語になる代名詞は I / you / he / she / it / we / they の七つ。',
      'he＝男性一人、she＝女性一人、it＝人以外の一つ（動物・もの）。',
      '「〇〇と私」は we に置きかえる（Ken and I → we）。「〇〇とあなた」も you。',
      '人以外が二つ以上なら they。they は人にもものにも使える。',
      '代名詞が決まれば be動詞も決まる：I→am、he/she/it→is、you/we/they→are。',
    ],
    sections: [
      {
        heading: '代名詞の選び方',
        body: `同じ名詞をくり返さないために、二度目からは代名詞に置きかえる。どの代名詞を使うかは「だれ・何を指すか」と「一つか二つ以上か」で決まる。

■ 一人・一つを指すもの
I（私は）… 自分
you（あなたは）… 相手
he（彼は）… 男性一人（my father, Ken, the boy など）
she（彼女は）… 女性一人（my mother, Mika, the girl など）
it（それは）… 人以外の一つ（this book, the cat, my bag など）

■ 二つ以上を指すもの
we（私たちは）… 自分をふくむ二人以上
you（あなたたちは）… 相手をふくむ二人以上
they（彼らは／それらは）… 自分も相手もふくまない二つ以上

例）Ken is my friend. He is from Kobe.（ケン → he）
例）This is my bag. It is new.（bag → it）
例）Mika and Yuki are sisters. They are twins.（二人 → they）

★ ポイント：they は人だけでなくものにも使える。These are my books. They are old. のように、複数のものはすべて they になる。`,
      },
      {
        heading: 'まとめて置きかえるとき',
        body: `二つ以上の語がまとまって主語になっているときは、「自分が入っているか」「相手が入っているか」で決める。

■ 自分（I）が入っていれば we
Ken and I → we
My family and I → we
例）Ken and I are in the tennis club. → We are in the tennis club.

■ 自分は入らず、相手（you）が入っていれば you
You and Tom → you
例）You and Tom are late. → You are late.

■ 自分も相手も入っていなければ they
Ken and Mika → they
My father and mother → they
例）My father and mother are doctors. → They are doctors.

⚠ 注意：「〇〇と私」を they にするまちがいが非常に多い。自分が入っているのだから「彼ら」ではなく「私たち」である。

■ 代名詞が決まれば be動詞も決まる
I → am
he / she / it → is
you / we / they → are
主語を代名詞に置きかえてから be動詞を選ぶと、まちがいがへる。`,
      },
    ],
    trapExamples: [
      {
        question: '下線部を代名詞にかえなさい。　Mika and I are in the music room.',
        wrongAnswer: 'They are in the music room.',
        trapExplanation: 'Mika という他人の名前が先に出てくるので、「ミカたち」＝彼ら、と考えて they を選んでしまう。自分（I）が主語の中にふくまれていることを見落としている。',
        correctAnswer: 'We are in the music room.',
        correctExplanation:
          '主語に I（私）が入っているので、置きかえる代名詞は we（私たち）になる。they は自分も相手もふくまないときに使う語である。「and I」が見えたら自動的に we、と覚えておくとよい。be動詞は we でも are のままで変わらない。',
      },
      {
        question: '下線部を代名詞にかえなさい。　That dog is very big.',
        wrongAnswer: 'He is very big.',
        trapExplanation: '犬を飼っている人は犬を「彼」と呼ぶことがあるため、生きているものは he だと考えてしまう。日本語で「その子」と言う感覚に引きずられるのも原因である。',
        correctAnswer: 'It is very big.',
        correctExplanation:
          '英語では、人以外の一つのものや動物は it で受けるのが基本である。he / she は人（男性・女性）に使う。飼っている動物を性別まで意識して he / she と呼ぶことはあるが、入試で「代名詞にかえよ」と問われたら it が正解になる。be動詞は it なので is。',
      },
    ],
  },

  {
    id: 'eigo_s044',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞④：短縮形（I\'m・you\'re・isn\'t・aren\'t）',
    description: '会話でよく使う短縮形の作り方と、アポストロフィの位置を正確に覚える',
    order: 544,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '〈主語＋be動詞〉の短縮：I\'m / you\'re / he\'s / she\'s / it\'s / we\'re / they\'re。',
      '〈be動詞＋not〉の短縮：isn\'t / aren\'t。省いた文字の位置にアポストロフィを置く。',
      'am not には短縮形がない。I am not → I\'m not（× I amn\'t）。',
      'it\'s ＝ it is の短縮形。「その」を表す its とはまったく別の語。',
      '文の終わりでは短縮形を使わない。Yes, I am.（× Yes, I\'m.）',
    ],
    sections: [
      {
        heading: '二種類の短縮形',
        body: `会話や手紙では、二語をつづめて一語のように書くことが多い。これを短縮形という。be動詞の短縮形は二種類ある。

■ ①〈主語＋be動詞〉をつづめる
I am → I\'m
you are → you\'re
he is → he\'s
she is → she\'s
it is → it\'s
we are → we\'re
they are → they\'re
that is → that\'s

例）I\'m from Kyoto.（私は京都出身です）
例）They\'re in the gym.（彼らは体育館にいます）

■ ②〈be動詞＋not〉をつづめる
is not → isn\'t
are not → aren\'t

例）He isn\'t busy today.（彼は今日いそがしくありません）
例）We aren\'t hungry.（私たちはおなかがすいていません）

★ ポイント：アポストロフィ（\'）は「文字を省いたしるし」である。is not の o を省いたから isn\'t、are not の o を省いたから aren\'t。省いた文字のあった場所に置く、と考えれば位置をまちがえない。`,
      },
      {
        heading: 'まちがえやすい三つの点',
        body: `■ ① am not に短縮形はない
be動詞の中で am だけは not と結びついた短縮形を持たない。

✗ I amn\'t busy.
○ I am not busy.
○ I\'m not busy.（主語と be動詞のほうをつづめる）

「〜ではありません」を短く言いたいときは I\'m not の形にする。これは決まりなので理由なしに覚える。

■ ② it\'s と its はまったく別の語
it\'s ＝ it is（それは〜です）
its ＝ その（持ち主を表す語）

例）It\'s a cat.（それはねこです）
例）Its name is Tama.（その名前はタマです）
アポストロフィがあるかないかで意味が変わる。書き分けをまちがえると減点になる。

■ ③ 文の終わりでは短縮しない
答えの文のように、be動詞が文の最後に来るときは短縮形を使わない。

✗ Yes, I\'m.　　○ Yes, I am.
✗ Yes, he\'s.　　○ Yes, he is.

⚠ 注意：Yes, I\'m not. のような形も存在しない。否定で答えるときは No, I\'m not. または No, I am not. とする。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はつかれていません。」を、短縮形を使って三語で書きなさい。',
        wrongAnswer: 'I amn\'t tired.',
        trapExplanation: 'is not → isn\'t、are not → aren\'t という規則を見て、am not も同じように amn\'t にできると考えてしまう。規則がきれいにそろっているように見えるだけに引っかかりやすい。',
        correctAnswer: 'I\'m not tired.',
        correctExplanation:
          'am not だけは短縮形を作らない。短くしたいときは主語と be動詞のほうをつづめて I\'m not とする。三語という指定は I\'m / not / tired の三語を指している。be動詞の短縮でつまずいたら「amn\'t は存在しない」と思い出すこと。',
        },
      {
        question: '次の文の誤りを直しなさい。　Look at that cat. It\'s tail is very long.',
        wrongAnswer: 'It\'s tail is very long.（そのままで正しい）',
        trapExplanation: '「その」を表す語だと分かっていても、it に何かを付けるときはアポストロフィが要ると思いこんでいる。名前を表す \'s（Ken\'s bag）と混同するために起こる。',
        correctAnswer: 'Its tail is very long.',
        correctExplanation:
          'it\'s は it is をつづめた形なので、そのまま入れると「それは しっぽ は とても長い」という意味の通らない文になる。「その〜」を表すのはアポストロフィのない its である。my / your / his / her と同じ仲間だと考えるとよい。',
      },
    ],
  },

  {
    id: 'eigo_s045',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞⑤：「〜にいる・〜にある」を表す使い方',
    description: 'be動詞のもう一つの意味（存在）と、There is / There are の文をつかむ',
    order: 545,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞には「〜です（＝）」のほかに「〜にいる・〜にある（存在）」の意味がある。',
      '〈主語＋be動詞＋場所を表す語句〉で「〜にいる／ある」。My book is on the desk.',
      '「〜がある」を have で表さない。持ち主を言うときだけ have を使う。',
      'There is ＋ 単数、There are ＋ 複数。「〜がある」と新しく話題に出すときの言い方。',
      'There is / are のあとに the や my の付いた語は置かない（× There is my book on the desk.）。',
    ],
    sections: [
      {
        heading: 'be動詞の二つ目の意味',
        body: `be動詞には大きく二つの意味がある。

■ ①「〜です」＝主語と結びつける
例）He is a doctor.（彼は医者です）
例）This flower is beautiful.（この花は美しいです）

■ ②「〜にいる・〜にある」＝どこにあるかを言う
be動詞のうしろに場所を表す語句が来ると、「存在」の意味になる。

例）My father is in the kitchen.（父は台所にいます）
例）Your bag is on the chair.（あなたのかばんはいすの上にあります）
例）The station is near my house.（駅は私の家の近くにあります）
例）We are at school now.（私たちは今、学校にいます）

場所を表すのは in（〜の中に）・on（〜の上に）・under（〜の下に）・near（〜の近くに）・by（〜のそばに）・at（〜に）などの語である。

★ ポイント：be動詞のうしろを見て、名詞・形容詞なら「〜です」、場所なら「〜にいる／ある」と読み分ける。どちらの意味でも am / is / are の使い分けは変わらない。`,
      },
      {
        heading: 'There is / There are の文',
        body: `「（ある場所に）〜がある・〜がいる」と、聞き手がまだ知らないものを新しく話題に出すときは、There is / There are で文を始める。

■ 形
There is ＋ 単数のもの ＋ 場所
There are ＋ 複数のもの ＋ 場所

例）There is a cat under the table.（テーブルの下にねこが一匹います）
例）There are two libraries in this city.（この市には図書館が二つあります）

be動詞は There のうしろに来る名詞に合わせる。there 自体には「そこに」という意味はほとんどなく、文を始めるための語である。

■ 使えない場合
There is / are のあとには、the・my・this のような「すでに決まったもの」を表す語の付いた名詞は置かない。

✗ There is my book on the desk.
○ My book is on the desk.（私の本は机の上にあります）

自分の本は、聞き手ももう知っているものなので、ふつうの〈主語＋be動詞＋場所〉の文で表す。

⚠ 注意：日本語の「〜がある」につられて have を使うまちがいが多い。have は「持っている」であって、場所を言う文には使えない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私のかさは玄関にあります。」を英語にしなさい。（umbrella／at the door を使う）',
        wrongAnswer: 'My umbrella has at the door.',
        trapExplanation: '日本語の「ある」をそのまま「持っている（have）」に結びつけてしまう。「ある＝存在」と「持っている＝所有」が日本語では同じ言い方になることがあるため起こるまちがい。',
        correctAnswer: 'My umbrella is at the door.',
        correctExplanation:
          '「〜にある」と場所を言う文では be動詞を使う。have は「（人が）〜を持っている」という意味で、I have an umbrella.（私はかさを持っています）のように主語が持ち主のときに使う。主語がもの、うしろが場所なら be動詞、と覚える。',
      },
      {
        question: '（　）に is / are のどちらかを入れなさい。　There（　）three parks in my town.',
        wrongAnswer: 'is',
        trapExplanation: 'There is 〜 という形を一つのかたまりとして覚えてしまい、うしろの名詞が複数でも is のまま書いてしまう。There が単数のように見えるのも原因である。',
        correctAnswer: 'are',
        correctExplanation:
          'There is / are の be動詞は、うしろに来る名詞の数に合わせる。ここでは three parks と複数なので are になる。There は文を始めるための語で、数を決める語ではない。「There のうしろの名詞を数える」と手順にしておくとよい。',
      },
    ],
  },

  // ───────────── 2. be動詞の否定文・疑問文・答え方（s046〜s049） ─────────────
  {
    id: 'eigo_s046',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞の否定文：not はどこに入れるか',
    description: 'be動詞の文を「〜ではありません」にかえるときの not の位置を確実にする',
    order: 546,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の否定文は〈主語＋be動詞＋not＋〜〉。not は be動詞のすぐうしろ。',
      'don\'t / doesn\'t は使わない（× I don\'t am 〜）。be動詞の文は not だけで否定できる。',
      '短縮形は isn\'t / aren\'t。am not に短縮形はなく、I\'m not とする。',
      'not のうしろの a や the はそのまま残す。He is not a teacher.',
      '「〜にいない・〜にない」も同じ形。The cat is not under the table.',
    ],
    sections: [
      {
        heading: 'not は be動詞のすぐあと',
        body: `be動詞の文を否定文（「〜ではありません」）にするのはとても簡単で、be動詞のすぐうしろに not を入れるだけでよい。語順は変えない。

■ 作り方
I am a student.（私は学生です）
→ I am not a student.（私は学生ではありません）

She is my sister.
→ She is not my sister.（彼女は私の姉ではありません）

They are in the classroom.
→ They are not in the classroom.（彼らは教室にいません）

■ 短縮形を使うと
is not → isn\'t　　are not → aren\'t
例）She isn\'t my sister.
例）They aren\'t in the classroom.
am not だけは短縮形がないので、I\'m not busy. のように主語のほうをつづめる。

★ ポイント：be動詞の文には do や does は登場しない。× I don\'t am tired. のような文は英語には存在しない。be動詞そのものが「〜です」という動詞なので、not を付けるだけで否定になる。`,
        figureId: 'lf_eigoext02_046',
      },
      {
        heading: '否定文で気をつけること',
        body: `■ ① a / the は消さない
否定文にしても、名詞に付く a や the はそのまま残る。

例）He is a doctor. → He is not a doctor.（○）
✗ He is not doctor.

■ ② not のうしろの形は変わらない
形容詞でも名詞でも場所でも、同じように not を入れるだけである。

例）This question is not easy.（この問題はやさしくありません）
例）My father is not at home now.（父は今、家にいません）
例）Those aren\'t my shoes.（あれらは私のくつではありません）

■ ③ 「〜も〜ない」の言い方
too（〜も）は肯定文で使い、否定文では either にかわる。

例）I am a student, too.（私も学生です）
例）I am not a student, either.（私も学生ではありません）
中学受験でもときどき問われるので、否定文では either になることを覚えておく。

⚠ 注意：not をどこに入れるか迷ったら、「be動詞をさがして、そのすぐ右に置く」と手順化する。主語の前や文の最後に置くことはない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は先生ではありません。」を英語にしなさい。',
        wrongAnswer: 'I don\'t am a teacher.',
        trapExplanation: '「〜しません」を英語にするときは don\'t を使う、と一般動詞の否定文の作り方を覚えていて、それを be動詞の文にもあてはめてしまう。否定文＝don\'t という思いこみが原因である。',
        correctAnswer: 'I am not a teacher.（短縮形なら I\'m not a teacher.）',
        correctExplanation:
          'be動詞の文では、be動詞のすぐうしろに not を置くだけで否定文になる。do や does の助けは要らない。文の中に am / is / are があるかどうかをまず見て、あれば not だけを入れる、と手順を分けて覚えるとよい。',
      },
      {
        question: '「彼らは同じクラスではありません。」を英語にしなさい。（in the same class を使う）',
        wrongAnswer: 'They not are in the same class.',
        trapExplanation: '日本語では「同じクラスでは ない です」のように打ち消しがうしろに来るため、語順の感覚が定まらない。「not は主語のあと」とだけ覚えていると、be動詞の前に置いてしまう。',
        correctAnswer: 'They are not in the same class.（短縮形なら They aren\'t 〜）',
        correctExplanation:
          'not は必ず be動詞のうしろに入る。主語→be動詞→not の順である。短縮形 aren\'t を使えば are と not の順番をまちがえようがないので、迷ったときは isn\'t / aren\'t の形で書くのも有効である。',
      },
    ],
  },

  {
    id: 'eigo_s047',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞の疑問文：主語と入れかえる',
    description: 'be動詞を文の先頭に出して疑問文を作る手順を、語順の図で確実にする',
    order: 547,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の疑問文は〈be動詞＋主語＋〜?〉。be動詞を主語の前に出す。',
      '文の終わりにクエスチョンマーク（?）を付ける。文頭は大文字にする。',
      'Do / Does は使わない（× Do you are 〜?）。',
      '疑問文では短縮形〈主語＋be動詞〉は使えない（× \'re you 〜?）。',
      '主語が長いときは、そのかたまり全体をbe動詞のうしろに置く。Is the boy with a cap your brother?',
    ],
    sections: [
      {
        heading: '入れかえるだけで疑問文になる',
        body: `be動詞の文を疑問文（「〜ですか」）にするには、be動詞を主語の前に移すだけでよい。

■ 作り方
You are a student.（あなたは学生です）
→ Are you a student?（あなたは学生ですか）

He is your brother.
→ Is he your brother?（彼はあなたのお兄さんですか）

They are in the gym.
→ Are they in the gym?（彼らは体育館にいますか）

移動させたあと、文のはじめの語は大文字で書き始め、終わりに ? を付ける。もとの文にあった大文字・小文字はそれに合わせて直す。

■ 一般動詞の疑問文とはちがう
一般動詞の文では Do you 〜? のように do を借りてくるが、be動詞の文では do を使わない。

✗ Do you are a student?
○ Are you a student?

★ ポイント：be動詞は自分で前に出られる。do の助けが要るのは、前に出られない一般動詞のときだけである。`,
        figureId: 'lf_eigoext02_047',
      },
      {
        heading: '主語が長い疑問文',
        body: `主語が二語以上のかたまりのときも、やることは同じである。be動詞をかたまりの前に出す。

例）Your mother is a nurse.
→ Is your mother a nurse?（あなたのお母さんは看護師ですか）

例）The boy with a cap is your brother.
→ Is the boy with a cap your brother?
主語は The boy with a cap の全体で、中心は boy（一人）なので be動詞は is である。your につられて Are にしないよう気をつける。

例）Ken and Yuki are your friends.
→ Are Ken and Yuki your friends?

■ 短縮形は使えない
疑問文では〈主語＋be動詞〉の短縮形を使えない。

✗ \'re you free today?
○ Are you free today?（今日はひまですか）
短縮形は主語のうしろに be動詞があるときにだけ作れるものだからである。

⚠ 注意：疑問文にすると主語が be動詞のあとに来るので、be動詞をどれにするかを主語で決めるという順序は変わらない。先に主語を見つけてから、is か are かを決める。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたはサッカーファンですか。」を英語にしなさい。（a soccer fan を使う）',
        wrongAnswer: 'Do you are a soccer fan?',
        trapExplanation: '「〜ですか」とたずねる文は Do から始まる、と覚えているために、be動詞の文にも do を付け足してしまう。be動詞と一般動詞の疑問文の作り方を区別できていない。',
        correctAnswer: 'Are you a soccer fan?',
        correctExplanation:
          'be動詞の文では、be動詞そのものを主語の前に出せば疑問文になる。do を借りる必要はない。文の中に am / is / are があるかを最初に確かめ、あればそれを前に出す、と手順を分ければ混同しない。',
      },
      {
        question: '「あなたのお姉さんは高校生ですか。」を英語にしなさい。（a high school student を使う）',
        wrongAnswer: 'Are your sister a high school student?',
        trapExplanation: '「あなたの」という語につられて、you に合う are を選んでしまう。your は主語の中心ではなく「だれの」を説明する語にすぎないのに、目立つので主語だと感じてしまう。',
        correctAnswer: 'Is your sister a high school student?',
        correctExplanation:
          '主語は your sister（あなたのお姉さん）で、一人なので be動詞は is になる。疑問文にする前に、もとの文 Your sister is a high school student. を思いうかべて be動詞を決めると確実である。your / my / his などは数を決める語ではない。',
      },
    ],
  },

  {
    id: 'eigo_s048',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'be動詞の疑問文への答え方',
    description: 'Yes / No で答えるときの代名詞の選び方と、短縮形のきまりを整理する',
    order: 548,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '答え方は Yes, 主語＋be動詞. / No, 主語＋be動詞＋not.',
      '主語は必ず代名詞にする（Is Ken 〜? → Yes, he is.）。',
      'you とたずねられたら I か we で答える。you のまま返さない。',
      'Yes の答えでは短縮形を使わない（× Yes, I\'m. ○ Yes, I am.）。',
      'No の答えでは短縮形を使ってよい（No, I\'m not. / No, he isn\'t.）。',
    ],
    sections: [
      {
        heading: '答えの形と代名詞',
        body: `be動詞の疑問文には、Yes か No のあとに〈主語＋be動詞〉を続けて答える。

■ 基本の形
Yes, 主語＋be動詞.
No, 主語＋be動詞＋not.

例）Are you tired? － Yes, I am. / No, I am not.
例）Is he a teacher? － Yes, he is. / No, he isn\'t.
例）Are they your friends? － Yes, they are. / No, they aren\'t.

■ 主語は代名詞に置きかえる
たずねられた文の主語をそのままくり返さず、代名詞にする。

Is Ken your brother? － Yes, he is.（× Yes, Ken is.）
Is this your bag? － Yes, it is.（this → it）
Are those your books? － Yes, they are.（those → they）

■ you で聞かれたときの返し方
Are you 〜? と聞かれているのは自分のことなので、I で答える。
Are you and Tom 〜? のように二人以上を聞かれたら we で答える。

例）Are you a student? － Yes, I am.
例）Are you and Tom in the same class? － Yes, we are.

★ ポイント：問いの主語をそのまま返すと、意味がひっくり返ってしまう。「聞かれた相手の立場に立ちかえる」と考える。`,
      },
      {
        heading: '短縮形が使えるところ・使えないところ',
        body: `答えの文では短縮形の使い方に決まりがある。

■ Yes の答え → 短縮しない
✗ Yes, I\'m.　　○ Yes, I am.
✗ Yes, he\'s.　　○ Yes, he is.
✗ Yes, they\'re.　○ Yes, they are.

be動詞が文の最後に来るときは短縮形にできない、というのが理由である。

■ No の答え → 短縮してよい
○ No, I am not. ／ No, I\'m not.
○ No, he is not. ／ No, he isn\'t. ／ No, he\'s not.
No の答えでは not が最後に来るので、be動詞をつづめることができる。

■ this / that / these / those の受け方
Is this your pen? － Yes, it is.
Is that your house? － Yes, it is.
Are these your shoes? － Yes, they are.
this も that も、答えでは it になる。these / those は they になる。

⚠ 注意：Yes, this is. のように this をそのまま使うのはまちがい。答えではすでに何を指すか分かっているので、代名詞の it / they を使う。`,
      },
    ],
    trapExamples: [
      {
        question: 'Are you a member of the tennis club? に Yes で答えなさい。',
        wrongAnswer: 'Yes, you are.',
        trapExplanation: '問いの文にある you をそのまま写して答えてしまう。日本語では「はい、そうです」と主語を言わずに答えるので、だれのことを答えているのかを意識しないまま書き写しがちである。',
        correctAnswer: 'Yes, I am.',
        correctExplanation:
          'Are you 〜? は「あなたは〜ですか」と自分がたずねられている文なので、答えるときは I（私）にかえる。Yes, you are. では「はい、あなたはそうです」となって答えにならない。you で聞かれたら I（二人以上なら we）で返す、と決めておく。',
      },
      {
        question: 'Is your father a doctor? に Yes で答えなさい。',
        wrongAnswer: 'Yes, he\'s.',
        trapExplanation: '会話では he\'s をよく使うので、答えの文でも短くできると考えてしまう。短縮形は書けば書くほど自然に見えるため、使ってよい場所の制限に気づきにくい。',
        correctAnswer: 'Yes, he is.',
        correctExplanation:
          'be動詞が文の最後に来るときは短縮形を使えない。Yes, he is. と書くのが正しい。ただし No で答えるときは not が最後に来るので、No, he isn\'t. のように短縮できる。「Yesの答えは短縮しない」と一つの規則で覚えておく。',
      },
    ],
  },
  {
    id: 'eigo_s049',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞＋be動詞：What・Who・Where でたずねる',
    description: '「何・だれ・どこ」をたずねる文の語順と、Yes / No で答えないきまりをつかむ',
    order: 549,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '語順は〈疑問詞＋be動詞＋主語＋〜?〉。疑問詞は必ず文のいちばん前。',
      '疑問詞の疑問文には Yes / No で答えない。たずねられた中身を答える。',
      'What is 〜? → What\'s 〜? のように短縮できる。',
      'be動詞は主語に合わせる。Where are my keys?（keys は複数 → are）',
      'Who is that boy? のように、Who のあとも〈be動詞＋主語〉の順になる。',
    ],
    sections: [
      {
        heading: '疑問詞は文の先頭に置く',
        body: `「何ですか」「だれですか」「どこにありますか」のように、Yes / No では答えられないことをたずねるときは疑問詞を使う。

■ よく使う疑問詞
what（何）／who（だれ）／where（どこ）／when（いつ）／whose（だれの）／how（どのように・どれくらい）

■ 語順
疑問詞＋be動詞＋主語＋〜?

例）What is your name?（あなたの名前は何ですか）
例）Who is that girl?（あの女の子はだれですか）
例）Where is my pencil case?（私の筆箱はどこにありますか）
例）When is your birthday?（あなたの誕生日はいつですか）
例）Whose bag is this?（これはだれのかばんですか）

作り方は二段階で考える。
①ふつうの疑問文を作る（Is your name 〜?）
②たずねたい部分を疑問詞にかえて、文の先頭に出す（What is your name?）

★ ポイント：疑問詞は必ず先頭。× Your name is what? のように、日本語の語順のまま置いてはいけない。`,
        figureId: 'lf_eigoext02_049',
      },
      {
        heading: '答え方と be動詞の選び方',
        body: `■ Yes / No では答えない
疑問詞でたずねられたら、その中身を答える。

What is this? － It is a dictionary.（これは何ですか － 辞書です）
Who is he? － He is my uncle.（彼はだれですか － 私のおじです）
Where is your school? － It is near the station.（駅の近くです）

✗ What is this? － Yes, it is.
これは意味が通らない。疑問詞が見えたら Yes / No は使わない、と決めておく。

■ be動詞は主語に合わせる
疑問詞のうしろに来る be動詞も、主語の数で決まる。

例）Where is my key?（key は一つ → is）
例）Where are my keys?（keys は二つ以上 → are）
例）Who are those boys?（those boys は複数 → are）

■ 短縮形
What is → What\'s　　Where is → Where\'s　　Who is → Who\'s
例）What\'s your favorite color?（好きな色は何ですか）

⚠ 注意：Whose（だれの）と Who\'s（＝Who is）は音が同じで、意味がまったくちがう。Whose bag is this?（これはだれのかばんですか）と Who\'s that man?（あの男の人はだれですか）を書き分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたのかばんはどこにありますか。」を英語にしなさい。',
        wrongAnswer: 'Where your bag is?',
        trapExplanation: '日本語の「あなたのかばんは どこに ありますか」の語順のまま英語に置きかえてしまう。疑問詞さえ前に出せばよいと考え、そのあとの入れかえを忘れている。',
        correctAnswer: 'Where is your bag?',
        correctExplanation:
          '疑問詞のうしろも疑問文の語順のままなので、〈be動詞＋主語〉と続けなければならない。手順は、①Is your bag 〜? を作る、②たずねたい部分を where にして先頭に出す、の二段階。Where\'s your bag? と短縮してもよい。',
      },
      {
        question: 'What is that building? に答えなさい。',
        wrongAnswer: 'Yes, it is.',
        trapExplanation: 'be動詞で始まる疑問文には Yes / No で答える、という練習をくり返しているため、文の先頭に疑問詞があっても同じ答え方をしてしまう。is という語だけが目に入っている。',
        correctAnswer: 'It is a hospital.（など、その建物が何かを答える）',
        correctExplanation:
          '疑問詞（what / who / where など）でたずねられた文は「何なのか」を答える文なので、Yes / No では答えられない。文の先頭を見て、疑問詞があるかどうかをまず確かめる。答えの主語は that building を受けて it にする。',
      },
    ],
  },

  // ───────────── 3. 一般動詞の肯定文・三単現（s050〜s055） ─────────────
  {
    id: 'eigo_s050',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞①：be動詞ではない動詞',
    description: '「〜する」を表す一般動詞と be動詞のちがいを、はっきり区別する',
    order: 550,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞＝am / is / are 以外の動詞。play・like・have・go・study など。',
      '動作だけでなく、like・want・know・have のような気持ち・状態を表す動詞も一般動詞。',
      '一文に動詞は一つ。be動詞と一般動詞を並べない（× I am play tennis.）。',
      '語順は〈主語＋動詞＋（目的語）〉。日本語の「〜を〜する」とは逆の順になる。',
      '「私は〜が好きです」は like を使う（× I am like 〜）。「です」に引かれない。',
    ],
    sections: [
      {
        heading: '一般動詞とは何か',
        body: `英語の動詞は、be動詞（am / is / are）と、それ以外の一般動詞の二つに分かれる。一般動詞は「〜する」という動作や「〜している状態だ」という気持ち・状態を表す。

■ 動作を表すもの
play（する・演奏する）／run（走る）／go（行く）／come（来る）／study（勉強する）／read（読む）／write（書く）／eat（食べる）／speak（話す）

■ 気持ちや状態を表すもの
like（好む）／want（ほしがる）／know（知っている）／have（持っている）／live（住んでいる）／need（必要とする）

例）I play the piano.（私はピアノをひきます）
例）I like dogs.（私は犬が好きです）
例）He lives in Osaka.（彼は大阪に住んでいます）

■ 大切な区別
「〜です」と訳せる文でも、like・have・know などが使われていれば一般動詞の文である。日本語の訳し方ではなく、使われている語で判断する。

★ ポイント：I like English.（私は英語が好きです）は、日本語では「です」で終わるが英語では一般動詞 like の文。be動詞は入らない。`,
      },
      {
        heading: '一文に動詞は一つ',
        body: `英語の文には動詞が必ず一つ要るが、二つ並べることはできない。be動詞と一般動詞を続けて置く文は誤りである。

✗ I am play tennis.
○ I play tennis.（私はテニスをします）

✗ He is likes music.
○ He likes music.（彼は音楽が好きです）

✗ We are study English.
○ We study English.（私たちは英語を勉強します）

be動詞は「＝」を表す動詞なので、それ自体がすでに動詞である。そこに play や like をもう一つ足すことはできない。

■ 語順は「だれが → どうする → 何を」
日本語　私は　テニスを　します
英語　　I　　play　　　tennis

日本語では「何を」が動詞より前に来るが、英語では動詞のうしろに来る。日本語の順のまま並べると ✗ I tennis play. となってしまう。

⚠ 注意：英語を書くときは、まず主語、次に動詞、最後に「何を」の順に組み立てる。日本語を一語ずつ置きかえるのではなく、順番を組みかえる意識をもつ。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎日サッカーをします。」を英語にしなさい。（every day を使う）',
        wrongAnswer: 'I am play soccer every day.',
        trapExplanation: '「私は〜です」の文で I am をくり返し練習しているため、主語のあとには am を置くものだと体が覚えてしまっている。play という動詞を足しても、am のほうを消すことに気づかない。',
        correctAnswer: 'I play soccer every day.',
        correctExplanation:
          '一文に動詞は一つだけである。play という一般動詞を使うのだから、am は要らない。「主語のうしろに来る動詞は一つ」と確かめる習慣をつける。be動詞を使うのは、He is a soccer player.（彼はサッカー選手です）のように「＝」で結ぶときである。',
      },
      {
        question: '「私はテニスが好きです。」を英語にしなさい。',
        wrongAnswer: 'I tennis like.',
        trapExplanation: '日本語の「私は テニスが 好きです」の語順のまま単語を置きかえてしまう。日本語では動詞が最後に来るので、その感覚のまま英語を書くと目的語と動詞が逆になる。',
        correctAnswer: 'I like tennis.',
        correctExplanation:
          '英語は〈主語＋動詞＋目的語〉の順で、「何を」は動詞のうしろに来る。日本語とは逆になるので、書くときは「だれが→どうする→何を」と口に出しながら組み立てる。like は一般動詞なので be動詞は入らない。',
      },
    ],
  },

  {
    id: 'eigo_s051',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞②：語順〈主語＋動詞＋目的語〉',
    description: '英語の基本の語順と、修飾語をどこに置くかを図で確認する',
    order: 551,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '英語の基本語順は〈主語（S）＋動詞（V）＋目的語（O）〉。',
      '目的語は動詞のすぐうしろ。動詞と目的語の間に他の語をはさまない。',
      '「いつ・どこで」を表す語句は文の終わりに置くのがふつう。',
      '順番は〈場所→時〉。I play tennis in the park every Sunday.',
      '目的語が代名詞のときは目的格にする（× I like she. ○ I like her.）。',
    ],
    sections: [
      {
        heading: '基本の三つの箱',
        body: `英語の文は、前から順に「だれが」「どうする」「何を」の三つの箱にことばを入れていくと考えると分かりやすい。

■ 三つの箱
①主語（S）＝だれが
②動詞（V）＝どうする
③目的語（O）＝何を

例）I　　study　　English.
　　私は　勉強する　英語を

例）She　plays　the piano.
例）We　　like　　this song.
例）Tom　has　　two dogs.

日本語では「私は英語を勉強する」のように「何を」が動詞より前に来るが、英語では必ず動詞のうしろである。

■ 動詞と目的語の間に語をはさまない
✗ I study every day English.
○ I study English every day.

「毎日」のような語は、目的語のうしろに置く。動詞と目的語はぴったりくっつけるのが基本である。

★ ポイント：文を書いたら「S・V・O」の三つが正しい順に並んでいるかを指で追って確かめる。`,
        figureId: 'lf_eigoext02_051',
      },
      {
        heading: '「いつ・どこで」を置く場所',
        body: `時や場所を表す語句（修飾語）は、ふつう文の終わりに置く。二つ以上あるときは〈場所→時〉の順にする。

■ 場所→時の順
例）I play tennis in the park every Sunday.
　　（私は毎週日曜日に公園でテニスをします）
　　in the park（場所）→ every Sunday（時）

例）We study English at school every day.
　　（私たちは毎日学校で英語を勉強します）

日本語では「毎週日曜日に公園で」と時が先に来ることが多いので、英語にするときは順番を入れかえる必要がある。

■ 目的語が代名詞のとき
目的語の位置に代名詞を置くときは、形が変わる（目的格という）。

I → me　　you → you　　he → him　　she → her
it → it　　we → us　　they → them

例）I know him.（私は彼を知っています）※ × I know he.
例）She likes them.（彼女はそれらが好きです）

⚠ 注意：主語の位置で使う形（he / she / they）と目的語の位置で使う形（him / her / them）を混同しない。動詞のうしろに来たら形がかわる、と覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎週土曜日に公園で野球をします。」を英語にしなさい。（in the park／every Saturday を使う）',
        wrongAnswer: 'I play in the park baseball every Saturday.',
        trapExplanation: '日本語の「公園で野球を」の順につられて、場所を表す語句を目的語より前に入れてしまう。動詞のうしろにすぐ来るのが目的語だという原則が抜けている。',
        correctAnswer: 'I play baseball in the park every Saturday.',
        correctExplanation:
          '動詞と目的語はくっつけて〈play baseball〉とし、そのあとに修飾語を〈場所→時〉の順で並べる。日本語では時が先に来ることが多いので、英語では逆になると意識して入れかえる。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。　My sister likes（he）very much.',
        wrongAnswer: 'My sister likes he very much.',
        trapExplanation: '「彼」という日本語には形の変化がないので、he のまま置いてしまう。he＝彼、と一対一で覚えていて、置かれる場所によって形が変わることを意識していない。',
        correctAnswer: 'My sister likes him very much.',
        correctExplanation:
          '動詞のうしろ（目的語の位置）に来る代名詞は目的格になる。he → him、she → her、they → them、I → me、we → us と変わる。「動詞のうしろに来たら形がかわる」と手順にして、書いたあとに確かめるとよい。',
      },
    ],
  },

  {
    id: 'eigo_s052',
    subject: 'eigo',
    examType: 'chugaku',
    title: '三人称単数現在の -s ①：付ける・付けないの見分け',
    description: '主語が「自分でも相手でもない一人・一つ」のときに動詞へ -s を付ける規則を身につける',
    order: 552,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '主語が三人称単数（he / she / it、一人・一つの名詞）で現在の文のとき、動詞に -s を付ける。',
      '一人称＝I、二人称＝you、三人称＝それ以外。I と you には -s を付けない。',
      '主語が複数なら -s は付けない（My friends like 〜）。',
      '-s が付くのは動詞であって名詞ではない。名詞の複数の s とは別物。',
      '過去の文や、be動詞の文には三単現の -s は関係しない。',
    ],
    sections: [
      {
        heading: '「三人称単数現在」とは',
        body: `英語では、現在のことを言う文で主語が「三人称の単数」のとき、動詞の終わりに -s を付ける。これを三人称単数現在（三単現）の -s という。

■ 人称の分け方
一人称＝I、we（自分がふくまれる）
二人称＝you（相手）
三人称＝それ以外すべて（he, she, it, Ken, my mother, the dog, this book …）

■ 単数か複数か
単数＝一人・一つ
複数＝二つ以上

■ -s が付く条件
①主語が三人称
②主語が単数
③現在のことを言う文
この三つがすべてそろったときだけ -s を付ける。

例）He plays tennis.（彼はテニスをします）
例）She likes music.（彼女は音楽が好きです）
例）My father works at a bank.（父は銀行で働いています）
例）This bus goes to the station.（このバスは駅に行きます）

★ ポイント：I と you は、単数でも -s が付かない。I play / You play。ここは条件①（三人称であること）を満たさないからである。`,
      },
      {
        heading: '付けてはいけない場合',
        body: `-s を付けすぎるまちがいも多い。次の場合は付けない。

■ 主語が複数のとき
例）My friends like soccer.（○）　× My friends likes soccer.
例）Ken and Mika study together.（○）
例）They live in Tokyo.（○）

■ 主語が I / you のとき
例）I play the guitar.（○）　× I plays the guitar.
例）You know him well.（○）

■ 名詞の複数の s と混同しない
名詞に付く s（books, dogs）は「二つ以上」を表す。動詞に付く s は「主語が三人称単数」を表す。役割がまったくちがう。

例）He reads books.
reads の s ＝主語 He が三人称単数だから
books の s ＝本が二冊以上あるから

⚠ 注意：「dogs のように s が付いているから複数、だから動詞には -s は要らない」と考えるのは正しい。ただし目的語の s を見て決めてはいけない。動詞の -s を決めるのは、いつでも主語である。
例）He has three dogs.（主語 He が単数なので has）`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。　My mother and father（work）at the same hospital.',
        wrongAnswer: 'My mother and father works at the same hospital.',
        trapExplanation: '直前の father が一人なので、三人称単数だと判断して -s を付けてしまう。and でつながれた主語全体を見ずに、動詞のすぐ前の語だけで決めてしまうのが原因。',
        correctAnswer: 'My mother and father work at the same hospital.',
        correctExplanation:
          '主語は My mother and father の全体で、二人いるので複数である。複数の主語には三単現の -s を付けない。and が見えたら主語のかたまり全体を確かめる、という手順を必ず入れる。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。　I（have）a new bike.',
        wrongAnswer: 'I has a new bike.',
        trapExplanation: 'have の三人称単数形が has であることを覚えた直後は、have を見ると反射的に has にしたくなる。主語が I であることの確認をとばしてしまう。',
        correctAnswer: 'I have a new bike.',
        correctExplanation:
          '三単現の -s が付くのは主語が三人称単数のときだけである。I は一人称なので、単数であっても have のままでよい。has を使うのは He has / She has / My brother has のように主語が三人称単数のときに限られる。',
      },
    ],
  },

  {
    id: 'eigo_s053',
    subject: 'eigo',
    examType: 'chugaku',
    title: '三人称単数現在の -s ②：-es を付ける動詞',
    description: 's・x・ch・sh・o で終わる動詞の変化を、例とともに正確に覚える',
    order: 553,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'ほとんどの動詞はそのまま -s を付ける（play → plays、like → likes）。',
      's・x・ch・sh・o で終わる動詞には -es を付ける。',
      '代表例：goes / does / watches / teaches / washes / passes / mixes。',
      'go → goes、do → does は特に出題が多い。',
      '-es を付ける動詞は数が少ないので、語尾の五種類をまとめて覚えてしまう。',
    ],
    sections: [
      {
        heading: '大部分はそのまま -s',
        body: `三単現の -s の付け方は、まず「ほとんどの動詞はそのまま -s を付けるだけ」と押さえる。

例）play → plays　　like → likes　　run → runs
例）read → reads　　know → knows　　speak → speaks
例）live → lives　　come → comes　　write → writes
例）eat → eats　　want → wants　　need → needs

これが基本形で、大部分の動詞がここに入る。まず「そのまま -s」を土台にして、例外だけを覚えるとよい。

■ 例外① s・x・ch・sh・o で終わる動詞は -es
語尾がこの五種類のとき、そのまま s を付けると発音しにくくなるので -es を付ける。

s で終わる　　pass → passes（通り過ぎる）
x で終わる　　mix → mixes（混ぜる）／ fix → fixes（直す）
ch で終わる　watch → watches（見る）／ teach → teaches（教える）／ catch → catches（つかまえる）
sh で終わる　wash → washes（洗う）／ finish → finishes（終える）
o で終わる　　go → goes（行く）／ do → does（する）

★ ポイント：s・x・ch・sh・o の五つを「エス・エックス・チ・シュ・オー」と口で唱えて覚える。入試で出るのは goes・does・watches・teaches・washes がほとんどである。`,
        figureId: 'lf_eigoext02_053',
      },
      {
        heading: '発音と書き方の注意',
        body: `■ -es の発音
watches / teaches / washes / passes / mixes の -es は「イズ」と読む。goes と does だけは「ズ」に近い音になる。

goes は「ゴーズ」、does は「ダズ」と読む。does のつづりは do＋es だが、読み方は do の音のままではないので注意する。

■ 書きまちがえやすい形
✗ gos　　○ goes
✗ dos　　○ does
✗ watchs　○ watches
✗ washs　　○ washes
✗ teachs　○ teaches

いずれも「そのまま -s」の規則をあてはめてしまった形である。語尾を見て、五種類のどれかに当たらないかを必ず確かめる。

■ o で終わってもすべてが -es ではない
o で終わる動詞は数が少なく、中学受験で出るのは go と do のほぼ二つである。この二つだけを確実に覚えれば足りる。

⚠ 注意：play は y で終わるが、直前が a（母音）なので plays でよい。y で終わる動詞をすべて -ies にするのは誤りである。くわしくは次のまとまりで扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。　My brother（go）to school by bus.',
        wrongAnswer: 'My brother gos to school by bus.',
        trapExplanation: '「そのまま -s を付ける」という基本の規則を先に覚えているため、go にもそのまま s を付けてしまう。go は短い語なので例外だと気づきにくい。',
        correctAnswer: 'My brother goes to school by bus.',
        correctExplanation:
          'go は o で終わる動詞なので -es を付けて goes になる。同じ仲間の do → does もあわせて覚える。語尾が s・x・ch・sh・o のどれかなら -es、と確かめる手順を入れると防げる。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。　Yuki（play）the violin every evening.',
        wrongAnswer: 'Yuki plaies the violin every evening.',
        trapExplanation: 'y で終わる動詞は y を i にかえて -es を付ける、という規則を覚えた直後に、直前の文字を見ずにすべての y にあてはめてしまう。study → studies の印象が強すぎるのが原因。',
        correctAnswer: 'Yuki plays the violin every evening.',
        correctExplanation:
          'y を i にかえるのは、y の直前が子音のときだけである。play は y の直前が a（母音）なので、そのまま -s を付けて plays になる。同じく stay → stays、enjoy → enjoys、buy → buys。y の直前の一文字を必ず見る。',
      },
    ],
  },

  {
    id: 'eigo_s054',
    subject: 'eigo',
    examType: 'chugaku',
    title: '三人称単数現在の -s ③：y で終わる動詞と have',
    description: '子音＋y の動詞を -ies にかえる規則と、have → has の特別な変化を確実にする',
    order: 554,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '〈子音＋y〉で終わる動詞は、y を i にかえて -es（study → studies）。',
      '〈母音＋y〉で終わる動詞は、そのまま -s（play → plays、enjoy → enjoys）。',
      '母音は a・i・u・e・o の五つ。y の直前の一文字を見て判断する。',
      'have だけは特別で has になる（× haves）。',
      '名詞の複数形（city → cities）も同じ規則なので、まとめて覚えられる。',
    ],
    sections: [
      {
        heading: 'y の直前を見る',
        body: `y で終わる動詞は、y の直前の文字が母音か子音かで変化のしかたが分かれる。

■ 子音＋y → y を i にかえて -es
study → studies（勉強する）
carry → carries（運ぶ）
try → tries（ためす）
cry → cries（泣く）
fly → flies（飛ぶ）
worry → worries（心配する）

study の y の直前は d（子音）なので studies になる。

■ 母音＋y → そのまま -s
play → plays（する）
stay → stays（とどまる）
enjoy → enjoys（楽しむ）
buy → buys（買う）
say → says（言う）

play の y の直前は a（母音）なので plays でよい。

■ 母音とは
a・i・u・e・o の五文字。これ以外はすべて子音である。

★ ポイント：手順は「語尾が y か → 直前の一文字は母音か子音か → 子音なら ies、母音なら s」。二段階で確かめれば必ず正解できる。

⚠ 注意：says のつづりは規則どおりだが、読み方は「セズ」に近い音になる。読み方だけは例外である。`,
      },
      {
        heading: 'have → has という特別な形',
        body: `have は三単現の形が特別で、has になる。

✗ haves　　✗ hases　　○ has

例）I have a dog. → He has a dog.（彼は犬を飼っています）
例）We have two classes today. → She has two classes today.

have は「持っている・飼っている・（兄弟が）いる・（食事を）とる」など使い道が広く、入試でもよく出る。has の形はくり返し書いて覚える。

例）My sister has long hair.（姉は髪が長いです）
例）Ken has a lot of friends.（ケンには友達がたくさんいます）
例）He has breakfast at seven.（彼は七時に朝食を食べます）

■ そのほかの注意する動詞
do → does（する）※ o で終わるので -es
go → goes（行く）※ o で終わるので -es
have → has（持っている）※ 完全な例外

この三つが、三単現でとくに出題される動詞である。

■ 名詞の複数形も同じ規則
city → cities／country → countries／baby → babies（子音＋y）
boy → boys／day → days／key → keys（母音＋y）
動詞と名詞で同じ規則が働くので、あわせて覚えると効率がよい。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。　My sister（study）English every night.',
        wrongAnswer: 'My sister studys English every night.',
        trapExplanation: '「そのまま -s」という基本形が頭にあるので、y で終わる語にもそのまま s を付けてしまう。studys と書いても見た目に大きな違和感がないため、見直しでも気づきにくい。',
        correctAnswer: 'My sister studies English every night.',
        correctExplanation:
          'study は y の直前が d という子音なので、y を i にかえて -es を付け studies になる。同じ形に carry → carries、try → tries、cry → cries がある。y で終わる語を見たら、直前の一文字を必ず確かめる。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。　Tom（have）three brothers.',
        wrongAnswer: 'Tom haves three brothers.',
        trapExplanation: '三単現は -s を付けるという規則にしたがって、have にもそのまま s を付けてしまう。have は形が変わる特別な動詞だという例外を覚えていないと必ず引っかかる。',
        correctAnswer: 'Tom has three brothers.',
        correctExplanation:
          'have の三人称単数現在形は has という特別な形である。haves という語は存在しない。「三単現でとくに注意するのは has・goes・does の三つ」とまとめて覚えておくと、テストのときに思い出しやすい。',
      },
    ],
  },

  {
    id: 'eigo_s055',
    subject: 'eigo',
    examType: 'chugaku',
    title: '三人称単数現在の -s ④：主語を正しく見つける',
    description: '主語が長いときや修飾語が入るときに、動詞の形をまちがえないための手順を練習する',
    order: 555,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '動詞の形を決めるのは、いつでも主語の中心になる名詞。',
      'in / on / with / from などで始まるかたまりは主語ではない（修飾語）。',
      'The boy with two dogs runs fast.（中心は boy → runs）',
      'Everyone・Every 〜 は単数あつかいなので -s を付ける。',
      '書いたあとに「主語はどれか」「単数か複数か」を必ず確かめる。',
    ],
    sections: [
      {
        heading: '主語の中心をさがす',
        body: `三単現の -s でまちがえるのは、主語が長いときである。主語のかたまりの中で、数を決めている中心の名詞を見つけることが大切になる。

■ 前置詞から始まるかたまりは主語ではない
in（〜の中の）・on（〜の上の）・with（〜を持った）・from（〜出身の）・of（〜の）などで始まるかたまりは、直前の名詞を説明しているだけである。

例）The girl with two dogs lives near my house.
主語の中心＝The girl（一人）→ lives
うしろの two dogs は「二匹の犬を連れた」と girl を説明しているだけ。

例）The students in my class study very hard.
主語の中心＝The students（複数）→ study
my class（単数）にひかれて studies としない。

例）A boy from Canada speaks Japanese well.
主語の中心＝A boy → speaks

★ ポイント：動詞のすぐ前の名詞ではなく、「文が何について語っているか」を決める名詞を見る。前置詞から始まるかたまりに線を引いて消してしまうと、主語の中心が浮かび上がる。`,
      },
      {
        heading: '単数あつかいの主語',
        body: `見た目は複数っぽいのに単数としてあつかう主語がある。これらには -s を付ける。

■ everyone / everybody（みんな）
例）Everyone likes this song.（みんなこの歌が好きです）
「みんな」でも単数あつかいなので likes。

■ every ＋ 単数名詞
例）Every student has a computer.（すべての生徒がコンピュータを持っています）
every のうしろは必ず単数名詞で、動詞にも -s が付く。

■ 数えられない名詞
例）Water freezes at zero degrees.（水はセ氏0度でこおります）

■ 逆に複数あつかい
例）My family and I go to the beach every summer.（and で結ぶ → 複数）
例）These books are interesting.

■ 三単現が関係しない文
過去の文（I played / He played）では、主語が何であっても形は同じである。また be動詞の文（He is 〜）にも三単現の -s は関係しない。三単現の -s は「現在の文の一般動詞」だけの話である。

⚠ 注意：解き終わったら、①主語はどれか、②単数か複数か、③現在の文か、の三つを口の中で確かめる。この確認だけで失点が大きくへる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい形にしなさい。　The students in my class（study）very hard.',
        wrongAnswer: 'The students in my class studies very hard.',
        trapExplanation: '動詞のすぐ前にある my class（一つ）を主語だと思いこみ、三単現の -s を付けてしまう。前置詞 in から始まるかたまりが修飾語であることを見落としている。',
        correctAnswer: 'The students in my class study very hard.',
        correctExplanation:
          '主語は The students（複数）で、in my class は「私のクラスの」と students を説明する修飾語にすぎない。前置詞から始まるかたまりに線を引いて消すと、主語の中心が The students であることがはっきりする。複数なので -s は付けない。',
      },
      {
        question: '（　）内の語を正しい形にしなさい。　Everyone in my family（like）natto.',
        wrongAnswer: 'Everyone in my family like natto.',
        trapExplanation: 'everyone を「みんな」と訳すので、複数だと考えて -s を付けない。日本語の感覚では明らかに二人以上を指しているため、単数あつかいだと気づきにくい。',
        correctAnswer: 'Everyone in my family likes natto.',
        correctExplanation:
          'everyone / everybody / every ＋ 単数名詞 は、意味は「みんな」でも文法上は単数としてあつかう。したがって動詞には -s が付いて likes になる。in my family は修飾語なので、動詞の形とは関係しない。',
      },
    ],
  },

  // ───────────── 4. 一般動詞の否定文・疑問文（s056〜s060） ─────────────
  {
    id: 'eigo_s056',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞の否定文①：do not（don\'t）',
    description: '一般動詞の文を否定するときに do を借りてくるしくみをつかむ',
    order: 556,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞の否定文は〈主語＋do not（don\'t）＋動詞の原形〉。',
      'do not は動詞の前に置く。not だけを付けることはできない。',
      'be動詞は使わない（× I am not like 〜）。',
      '短縮形は don\'t。会話でも作文でもよく使う。',
      '主語が I / you / we / they や複数のときは don\'t（三人称単数は次のまとまり）。',
    ],
    sections: [
      {
        heading: 'do を借りて否定する',
        body: `be動詞の文は not を付けるだけで否定文になったが、一般動詞にはその力がない。そこで do という語を借りてきて、do not（短縮形 don\'t）を動詞の前に置く。

■ 形
主語＋do not（don\'t）＋動詞

例）I play tennis. → I don\'t play tennis.（私はテニスをしません）
例）They like natto. → They don\'t like natto.（彼らは納豆が好きではありません）
例）We have a car. → We don\'t have a car.（私たちは車を持っていません）
例）You know him. → You don\'t know him.（あなたは彼を知りません）

■ not だけでは否定できない
✗ I not play tennis.
✗ I play not tennis.
どちらも誤りである。英語では一般動詞を否定するとき、必ず do の助けが要る。

■ be動詞を混ぜない
✗ I am not play tennis.
be動詞と一般動詞を並べることはできないので、これも誤り。

★ ポイント：「一般動詞の否定＝don\'t を動詞の前に置く」と一つの動作で覚える。do not の not だけを取り出して使うことはない。`,
        figureId: 'lf_eigoext02_056',
      },
      {
        heading: '意味と使い方の広がり',
        body: `■ 「〜しません」だけでなく「〜ではありません」も
like や know のような状態を表す動詞でも、否定文の作り方は同じである。

例）I don\'t like carrots.（私はにんじんが好きではありません）
例）I don\'t know his name.（私は彼の名前を知りません）
例）We don\'t need it.（私たちはそれを必要としていません）

日本語では「好きではありません」と「です・ます」で終わるので be動詞を使いたくなるが、like は一般動詞なので don\'t を使う。

■ 「あまり〜ない」「まったく〜ない」
don\'t と組み合わせてよく使う語がある。

例）I don\'t play the piano very well.（あまり上手にひけません）
例）I don\'t like it at all.（まったく好きではありません）

■ 命令文の否定
「〜してはいけません」は Don\'t で文を始める。

例）Don\'t run in the hallway.（廊下を走ってはいけません）
例）Don\'t open the window.（窓を開けてはいけません）
主語がなく、Don\'t から始まる点がふつうの否定文とちがう。

⚠ 注意：Don\'t で始まる命令文と、I don\'t 〜 の否定文を混同しない。主語があるかないかで見分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は納豆が好きではありません。」を英語にしなさい。',
        wrongAnswer: 'I am not like natto.',
        trapExplanation: '日本語が「〜ではありません」と「です・ます」で終わるので、be動詞の否定文と同じ形にしてしまう。like を動詞ではなく「好き」という形容詞のように感じているのも原因である。',
        correctAnswer: 'I don\'t like natto.（I do not like natto.）',
        correctExplanation:
          'like は一般動詞なので、否定には do not（don\'t）を動詞の前に置く。be動詞と一般動詞は並べられない。日本語の訳ではなく「使われている語が be動詞か一般動詞か」で判断する習慣をつける。',
      },
      {
        question: '「私は英語を話しません。」を英語にしなさい。',
        wrongAnswer: 'I speak not English.',
        trapExplanation: 'be動詞の否定文で「動詞のうしろに not」と覚えたため、一般動詞でも同じ位置に not を置いてしまう。日本語の「話し ません」の語順とも合ってしまうので、まちがいに気づきにくい。',
        correctAnswer: 'I don\'t speak English.（I do not speak English.）',
        correctExplanation:
          '一般動詞の否定文では、動詞の前に do not（don\'t）を置く。not を単独で動詞のうしろに置く形は英語にはない。「be動詞なら not をうしろに、一般動詞なら don\'t を前に」と対で覚えると混同しない。',
      },
    ],
  },
  {
    id: 'eigo_s057',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞の否定文②：does not（doesn\'t）と原形',
    description: '主語が三人称単数のときの否定文で、動詞を原形に戻すきまりを身につける',
    order: 557,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '主語が三人称単数のときは does not（doesn\'t）を使う。',
      'doesn\'t のうしろの動詞は必ず原形（-s を取る）。',
      '× He doesn\'t plays 〜 は最頻出のまちがい。',
      'has も原形の have に戻る（He doesn\'t have a car.）。',
      '主語が I / you / we / they・複数なら don\'t、he / she / it・単数なら doesn\'t。',
    ],
    sections: [
      {
        heading: 'does を使う場合',
        body: `一般動詞の否定文で、主語が三人称単数のときは don\'t ではなく doesn\'t を使う。

■ 使い分け
I / you / we / they、複数の名詞　→ don\'t
he / she / it、単数の名詞　　　　→ doesn\'t

例）He doesn\'t play the piano.（彼はピアノをひきません）
例）She doesn\'t like coffee.（彼女はコーヒーが好きではありません）
例）My father doesn\'t watch TV.（父はテレビを見ません）
例）This bus doesn\'t go to the station.（このバスは駅へ行きません）

■ 動詞は原形に戻す
いちばん大切なのはここである。doesn\'t を使ったら、そのうしろの動詞から -s / -es を取って原形に戻す。

✗ He doesn\'t plays the piano.
○ He doesn\'t play the piano.

✗ She doesn\'t likes coffee.
○ She doesn\'t like coffee.

✗ He doesn\'t goes to school by bus.
○ He doesn\'t go to school by bus.

★ ポイント：「三人称単数」という情報は does がすでに持っている。だから動詞まで -s を付けると二重になってしまう。-s は文の中で一か所だけ、と覚える。`,
      },
      {
        heading: 'have → have に戻す',
        body: `肯定文で has になっていた動詞も、否定文では原形の have に戻る。

例）He has a bike. → He doesn\'t have a bike.（彼は自転車を持っていません）
例）She has two dogs. → She doesn\'t have two dogs.
例）My mother has a car. → My mother doesn\'t have a car.

× He doesn\'t has a bike. は誤り。has は have の三人称単数現在形なので、原形に戻せば have である。

■ 同じように戻る動詞
goes → go　　does → do　　studies → study
watches → watch　　teaches → teach

例）He doesn\'t study French.（彼はフランス語を勉強しません）
例）She doesn\'t watch TV after dinner.（彼女は夕食後にテレビを見ません）

■ 書いたあとの確認手順
①主語は三人称単数か → doesn\'t
②そのうしろの動詞は原形になっているか
この二つを毎回確かめる。とくに②は、書いているうちに肯定文の形（plays, has）が指に残ってしまうため、意識して見直す必要がある。

⚠ 注意：does not を短縮すると doesn\'t。does\'nt や dose\'nt と書くまちがいが多いので、つづりも正確に覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を否定文にしなさい。　Ken plays the guitar.',
        wrongAnswer: 'Ken doesn\'t plays the guitar.',
        trapExplanation: 'もとの文の plays をそのまま残してしまう。主語が三人称単数だから -s が要る、という意識が強すぎて、does がすでにその役目を果たしていることに気づかない。',
        correctAnswer: 'Ken doesn\'t play the guitar.',
        correctExplanation:
          'doesn\'t を使ったら、うしろの動詞は必ず原形に戻す。三人称単数であることは does が示しているので、動詞にも -s を付けると二重になってしまう。「does があれば動詞は原形」と一組で覚える。',
      },
      {
        question: '「私の姉はねこが好きではありません。」を英語にしなさい。',
        wrongAnswer: 'My sister don\'t like cats.',
        trapExplanation: 'don\'t のほうを先に習うので使い慣れており、主語が三人称単数であることを確かめずに書いてしまう。日本語からは主語の人称が意識されにくいことも原因である。',
        correctAnswer: 'My sister doesn\'t like cats.',
        correctExplanation:
          '主語 My sister は三人称単数なので doesn\'t を使う。don\'t を使うのは主語が I / you / we / they や複数の名詞のときである。否定文を書くときは、まず主語を見て don\'t か doesn\'t かを決め、次に動詞を原形にする、という順で進める。',
      },
    ],
  },

  {
    id: 'eigo_s058',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞の疑問文①：Do 〜? と答え方',
    description: 'Do を文の先頭に置いてたずねる形と、do を使った答え方を身につける',
    order: 558,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞の疑問文は〈Do＋主語＋動詞の原形〜?〉。',
      '答えは Yes, 主語＋do. / No, 主語＋don\'t.',
      '答えの文で be動詞を使わない（× Yes, I am.）。',
      '答えでは動詞をくり返さない（× Yes, I have.）。',
      'Do you 〜? と聞かれたら I（二人以上なら we）で答える。',
    ],
    sections: [
      {
        heading: 'Do を先頭に置く',
        body: `一般動詞の文を疑問文にするときは、文の先頭に Do を置く。be動詞のように動詞そのものを前に出すことはできない。

■ 形
Do＋主語＋動詞の原形〜?

例）You play tennis. → Do you play tennis?（あなたはテニスをしますか）
例）They live in Tokyo. → Do they live in Tokyo?（彼らは東京に住んでいますか）
例）You have any brothers? → Do you have any brothers?（兄弟はいますか）

主語のうしろの動詞はそのままの形（原形）でよい。語順は〈Do → 主語 → 動詞 → そのほか〉である。

■ be動詞を混ぜない
✗ Are you play tennis?
✗ Do you are a student?
どちらも動詞が二つある形なので誤り。一般動詞の文なら Do、be動詞の文なら be動詞を前に出す、と使い分ける。

★ ポイント：Do は「これから質問しますよ」という合図の語である。それ自体に意味はほとんどなく、日本語には訳さない。`,
        figureId: 'lf_eigoext02_058',
      },
      {
        heading: '答え方は do でそろえる',
        body: `Do 〜? でたずねられたら、答えにも do を使う。

■ 形
Yes, 主語＋do.
No, 主語＋don\'t.（do not.）

例）Do you like music? － Yes, I do. / No, I don\'t.
例）Do they play soccer? － Yes, they do. / No, they don\'t.
例）Do you and Ken walk to school? － Yes, we do. / No, we don\'t.

■ よくある誤り
✗ Do you have a pen? － Yes, I have.
動詞をくり返して答えることはできない。○ Yes, I do.

✗ Do you like dogs? － Yes, I am.
be動詞は使えない。○ Yes, I do.

■ 主語は代名詞に置きかえる
Do your parents work in Osaka? － Yes, they do.
Does 〜 の形は次のまとまりで扱うが、答えの仕組みは同じである。

⚠ 注意：たずねる文が Do で始まっていたら答えも do、Are で始まっていたら答えも be動詞。「問いの最初の語と、答えに使う語をそろえる」と覚えると混乱しない。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは音楽が好きですか。」を英語にしなさい。',
        wrongAnswer: 'Are you like music?',
        trapExplanation: '「〜ですか」と日本語が「です」で終わるので、be動詞の疑問文の形をあてはめてしまう。Are you 〜? という形を先に覚えて口になじんでいることも原因である。',
        correctAnswer: 'Do you like music?',
        correctExplanation:
          'like は一般動詞なので、疑問文は Do を先頭に置いて作る。Are you like 〜? では are と like の二つの動詞が並んでしまう。文で使う動詞が be動詞か一般動詞かを先に決めてから、疑問文の形を選ぶ。',
      },
      {
        question: 'Do you have a dog? に Yes で答えなさい。',
        wrongAnswer: 'Yes, I have.',
        trapExplanation: '問いに使われている have をそのままくり返せばよいと考えてしまう。日本語で「はい、飼っています」と動詞をくり返して答えるので、その感覚が英語にも持ちこまれる。',
        correctAnswer: 'Yes, I do.',
        correctExplanation:
          'Do 〜? でたずねられたら、答えにも do を使って Yes, I do. / No, I don\'t. とする。動詞をくり返す答え方は英語にはない。「問いの最初の語と答えの語をそろえる」と覚えると、Are 〜? には am / is / are で答えることも同時に整理できる。',
      },
    ],
  },

  {
    id: 'eigo_s059',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞の疑問文②：Does 〜? と答え方',
    description: '主語が三人称単数のときの疑問文で、動詞を原形にするきまりを確実にする',
    order: 559,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '主語が三人称単数のときは〈Does＋主語＋動詞の原形〜?〉。',
      'Does のうしろの動詞は必ず原形（× Does he plays 〜?）。',
      '答えは Yes, 主語＋does. / No, 主語＋doesn\'t.',
      'has も原形の have に戻る（Does she have a bike?）。',
      '答えの主語は代名詞にする（Does Ken 〜? → Yes, he does.）。',
    ],
    sections: [
      {
        heading: 'Does を使う疑問文',
        body: `主語が he / she / it や一人・一つの名詞のときは、Do ではなく Does で文を始める。

■ 形
Does＋主語＋動詞の原形〜?

例）He plays soccer. → Does he play soccer?（彼はサッカーをしますか）
例）She likes English. → Does she like English?（彼女は英語が好きですか）
例）Your father works here. → Does your father work here?
例）This train stops at Kyoto. → Does this train stop at Kyoto?

■ 動詞は原形に戻す
肯定文で -s の付いていた動詞は、疑問文では原形に戻る。

✗ Does he plays soccer?
○ Does he play soccer?
✗ Does she studies math?
○ Does she study math?
✗ Does he has a car?
○ Does he have a car?

理由は否定文のときと同じで、「三人称単数」という情報を Does がすでに持っているからである。

★ ポイント：Do / Does / Did のうしろの動詞は、いつでも原形。この一つの規則で、否定文も疑問文もまとめて処理できる。`,
      },
      {
        heading: '答え方',
        body: `Does 〜? には does を使って答える。

■ 形
Yes, 主語＋does.
No, 主語＋doesn\'t.

例）Does he play the piano? － Yes, he does. / No, he doesn\'t.
例）Does your sister like cats? － Yes, she does. / No, she doesn\'t.
例）Does this bus go to the museum? － Yes, it does. / No, it doesn\'t.

■ 主語は代名詞にする
Does Ken live near here? － Yes, he does.（× Yes, Ken does.）
Does that dog have a name? － Yes, it does.

■ be動詞と混ぜない
✗ Does she like cats? － Yes, she is.
○ Yes, she does.

■ 使い分けのまとめ
主語が I / you / we / they・複数 → Do 〜? → Yes, 〜 do.
主語が he / she / it・単数 → Does 〜? → Yes, 〜 does.

⚠ 注意：Does を使った疑問文を作ったあと、必ずうしろの動詞を見て -s が残っていないかを確かめる。ここは入試でもっとも多い失点の一つである。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を疑問文にしなさい。　Yuki studies Chinese.',
        wrongAnswer: 'Does Yuki studies Chinese?',
        trapExplanation: 'もとの文の studies をそのまま写してしまう。主語が三人称単数だから -s が要る、という考えが強く、Does がその役目をすでに果たしていることに気づかない。',
        correctAnswer: 'Does Yuki study Chinese?',
        correctExplanation:
          'Does を使ったら、うしろの動詞は必ず原形に戻す。studies → study である。「Do / Does のうしろは原形」という規則は、否定文（doesn\'t play）でも疑問文（Does he play?）でも同じように働く。',
      },
      {
        question: 'Does your brother like baseball? に Yes で答えなさい。',
        wrongAnswer: 'Yes, he is.',
        trapExplanation: 'Yes のあとに来るのは be動詞だという思いこみがある。Yes, I am. の形を先に覚えているため、主語を代名詞にかえるところまでは正しくできても、続く語をまちがえる。',
        correctAnswer: 'Yes, he does.',
        correctExplanation:
          'Does 〜? でたずねられたら does で答える。your brother は男性一人なので he に置きかえて Yes, he does. とする。「問いの最初の語（Do / Does / Is / Are）と、答えに使う語をそろえる」と覚えれば、この種のまちがいは起こらない。',
      },
    ],
  },

  {
    id: 'eigo_s060',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞＋do / does：What do you 〜?',
    description: '疑問詞と do / does を組み合わせた文の語順と、疑問詞が主語になる場合を学ぶ',
    order: 560,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '語順は〈疑問詞＋do / does＋主語＋動詞の原形〜?〉。',
      '疑問詞は必ず文のいちばん前。do / does はそのすぐうしろ。',
      '答えは Yes / No ではなく、たずねられた中身を答える。',
      'What time / What sport のように、疑問詞が二語になることもある。',
      '疑問詞が主語のときは do / does を使わず、〈疑問詞＋動詞（三単現）〉。Who plays the piano?',
    ],
    sections: [
      {
        heading: '四つの箱の順にならべる',
        body: `「何を〜しますか」「どこに〜しますか」のようにたずねるときは、疑問詞と do / does を組み合わせる。

■ 語順
疑問詞＋do / does＋主語＋動詞の原形〜?

例）What do you want?（あなたは何がほしいですか）
例）What does he study?（彼は何を勉強していますか）
例）Where do you live?（あなたはどこに住んでいますか）
例）When does the game start?（試合はいつ始まりますか）
例）How do you go to school?（あなたはどうやって学校へ行きますか）

作り方は二段階で考える。
①ふつうの疑問文を作る（Do you want 〜?）
②たずねたい部分を疑問詞にして先頭に出す（What do you want?）

■ 疑問詞が二語になる形
What time do you get up?（何時に起きますか）
What sport do you like?（どのスポーツが好きですか）
How many books do you have?（本を何冊持っていますか）
これらは〈What time〉〈What sport〉〈How many books〉でひとかたまりとして先頭に置く。

★ ポイント：does を使ったら、うしろの動詞は原形。What does he study? であって What does he studies? ではない。`,
        figureId: 'lf_eigoext02_060',
      },
      {
        heading: '疑問詞が主語になるとき',
        body: `「だれが〜しますか」「何が〜しますか」のように、疑問詞そのものが主語になる場合がある。このときは do / does を使わない。

■ 形
疑問詞（主語）＋動詞〜?

例）Who plays the piano in your family?（家族でだれがピアノをひきますか）
例）Who lives in that house?（あの家にはだれが住んでいますか）
例）What makes you happy?（何があなたを幸せにしますか）

who や what が主語のときは、そのまま動詞を続ける。しかも who / what は三人称単数あつかいなので、動詞には -s が付く。

✗ Who does play the piano?
○ Who plays the piano?

■ 見分け方
疑問詞のうしろに「別の主語」があるかどうかを見る。

What do you want?　→ you という主語がある → do が要る
Who wants this?　　→ 主語にあたる語がない → who 自身が主語 → do は不要

■ 答え方
Who plays the piano? － My sister does.（姉です）
この does は plays the piano のかわりをしている。

⚠ 注意：疑問詞が主語の文は上位校でよく問われる。「疑問詞のうしろに主語があるか」で判断する手順を身につけておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは日曜日に何をしますか。」を英語にしなさい。（on Sundays を使う）',
        wrongAnswer: 'What you do on Sundays?',
        trapExplanation: '疑問詞を前に出すところまではできるが、そのあとを肯定文の語順のままにしてしまう。日本語の「あなたは何を するか」の順とも合ってしまうので、まちがいに気づきにくい。',
        correctAnswer: 'What do you do on Sundays?',
        correctExplanation:
          '疑問詞のうしろも疑問文の語順を保つので、〈do＋主語＋動詞〉と続ける。この文では最初の do が疑問文を作る語、二つ目の do が「する」という意味の動詞である。二つ並ぶのが正しい形。',
      },
      {
        question: '「あなたの家族でだれがギターをひきますか。」を英語にしなさい。（in your family を使う）',
        wrongAnswer: 'Who does play the guitar in your family?',
        trapExplanation: '疑問文には do / does が要ると覚えているので、疑問詞のうしろに機械的に does を入れてしまう。who が主語そのものになっている文の形を知らないと必ず引っかかる。',
        correctAnswer: 'Who plays the guitar in your family?',
        correctExplanation:
          'who がこの文の主語なので、あらためて主語を置く必要がなく、do / does も不要である。who は三人称単数あつかいなので動詞は plays になる。「疑問詞のうしろに別の主語があるか」を見て、なければ do / does を使わない、と判断する。',
      },
    ],
  },

  // ───────────── 5. be動詞と一般動詞の混同を防ぐ（s061〜s064） ─────────────
  {
    id: 'eigo_s061',
    subject: 'eigo',
    examType: 'chugaku',
    title: '混同を防ぐ①：一文に動詞は一つ',
    description: 'be動詞と一般動詞を並べてしまう誤りの原因を知り、動詞を一つに決める練習をする',
    order: 561,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '一つの文に動詞は一つ。be動詞と一般動詞を並べることはできない。',
      '文を書いたら「動詞はどれか」を指さして一つだけか確かめる。',
      '日本語の「です・ます」に引かれて be動詞を足さない。',
      'live・belong・come・go などは一般動詞なので be動詞は不要。',
      '「〜しています」でも、習慣を表すなら現在形（I play tennis every day.）。',
    ],
    sections: [
      {
        heading: 'なぜ動詞を二つ書いてしまうのか',
        body: `英語を書くときにもっとも多い誤りが、be動詞と一般動詞を並べてしまうことである。

✗ I am like dogs.
✗ He is play baseball.
✗ We are study English.

原因は主に三つある。

■ ①日本語の「です・ます」に引かれる
「私は犬が好きです」の「です」を be動詞だと感じてしまう。しかし英語では like がすでに動詞なので、be動詞は要らない。

■ ②主語のあとには am / is / are、という手が覚えている
I am 〜 の練習をたくさんするので、主語を書いた瞬間に be動詞を書く手ぐせがついてしまう。

■ ③「〜しています」を進行形と思ってしまう
「私は毎日サッカーをしています」は、習慣を表すので現在形 I play soccer every day. でよい。今この瞬間の動作なら I am playing soccer now. と ing 形にするが、この場合も動詞の原形を並べてはいけない。

★ ポイント：文を書き終わったら、動詞に丸を付けてみる。丸が二つ付いたら、どちらかが余分である。`,
      },
      {
        heading: 'まぎらわしい動詞',
        body: `日本語では「〜です」「〜にいます」と訳すのに、英語では一般動詞を使う語がある。これらは be動詞を足したくなるので注意する。

■ live（住んでいる）
○ I live in Osaka.（私は大阪に住んでいます）
✗ I am live in Osaka.

■ belong to（〜に所属している）
○ I belong to the tennis club.（私はテニス部に入っています）
✗ I am belong to the tennis club.
※「私はテニス部員です」なら I am a member of the tennis club. と be動詞を使う。

■ have（持っている・いる）
○ I have two sisters.（私には姉妹が二人います）
✗ I am have two sisters.

■ know（知っている）
○ I know him.　✗ I am know him.

■ 逆に be動詞を使うもの
形容詞や名詞が続くときは be動詞である。
○ I am happy.（私は幸せです）
○ He is a doctor.（彼は医者です）
○ She is at home.（彼女は家にいます）

⚠ 注意：うしろに来るのが「動作を表す語」なら一般動詞だけ、「名前・様子を表す語」なら be動詞、と切り分けて考える。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は毎週日曜日に野球をします。」を英語にしなさい。',
        wrongAnswer: 'He is play baseball every Sunday.',
        trapExplanation: '主語を書いたあとに be動詞を置く手ぐせが働き、そのあとに動詞 play を続けてしまう。「彼は〜です」という日本語の形にも合ってしまうため、読み返しても違和感を持ちにくい。',
        correctAnswer: 'He plays baseball every Sunday.',
        correctExplanation:
          '一文に動詞は一つなので、play を使うなら is は要らない。さらに主語 He は三人称単数なので plays と -s を付ける。書いたあとに動詞をさがして、二つあれば余分なほうを消す、という見直しを習慣にする。',
      },
      {
        question: '「私はバスケットボール部に入っています。」を英語にしなさい。（belong to を使う）',
        wrongAnswer: 'I am belong to the basketball team.',
        trapExplanation: '「入っています」という状態を表す日本語なので、be動詞を使う文だと感じてしまう。belong が動詞であることを意識していないと、am を足したくなる。',
        correctAnswer: 'I belong to the basketball team.',
        correctExplanation:
          'belong は一般動詞なので be動詞は要らない。もし be動詞を使って言うなら I am a member of the basketball team.（私はバスケットボール部の一員です）のように、うしろに名詞を置く形にする。使う動詞を一つに決めてから文を組み立てる。',
      },
    ],
  },

  {
    id: 'eigo_s062',
    subject: 'eigo',
    examType: 'chugaku',
    title: '混同を防ぐ②：否定文は isn\'t か doesn\'t か',
    description: '否定文を作るとき、not だけでよいのか do / does が要るのかを判断できるようにする',
    order: 562,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'be動詞の文 → be動詞のうしろに not（isn\'t / aren\'t / am not）。',
      '一般動詞の文 → 動詞の前に don\'t / doesn\'t。',
      '判断の手順：もとの文の動詞が am / is / are かどうかを見る。',
      'doesn\'t のうしろの動詞は原形。',
      '× He doesn\'t a teacher.／× He isn\'t speak Japanese. の二方向の誤りに注意。',
    ],
    sections: [
      {
        heading: '判断は「もとの文の動詞」で',
        body: `否定文を作るときにやることは、たった一つの判断で決まる。「もとの文の動詞が be動詞か一般動詞か」である。

■ be動詞の文 → not をうしろに置くだけ
He is a teacher. → He is not（isn\'t）a teacher.
They are busy. → They aren\'t busy.
I am tired. → I\'m not tired.

■ 一般動詞の文 → don\'t / doesn\'t を前に置く
He speaks Japanese. → He doesn\'t speak Japanese.
They play tennis. → They don\'t play tennis.
I know him. → I don\'t know him.

■ 二方向のまちがい
①be動詞の文なのに doesn\'t を使う
✗ He doesn\'t a teacher.（動詞がなくなってしまう）
②一般動詞の文なのに isn\'t を使う
✗ He isn\'t speak Japanese.（動詞が二つになってしまう）

どちらも「動詞が何個あるか」を数えれば気づける。①は動詞がゼロ、②は動詞が二つになっている。

★ ポイント：正しい文には必ず動詞が一つある。否定文を作ったら、もう一度動詞を数える。`,
      },
      {
        heading: '練習と確認手順',
        body: `否定文にするときの手順を三段階で決めておく。

①もとの文の動詞をさがす
②それが am / is / are なら、うしろに not を入れて終わり
③それ以外（一般動詞）なら、主語を見て don\'t か doesn\'t を選び、動詞を原形にする

■ 例で確かめる
The book is interesting.
→ 動詞は is（be動詞）→ The book isn\'t interesting.

My father cooks dinner on Sundays.
→ 動詞は cooks（一般動詞）→ 主語は三人称単数 → My father doesn\'t cook dinner on Sundays.

We are in the same class.
→ 動詞は are → We aren\'t in the same class.

Ken and Mika go to the same school.
→ 動詞は go → 主語は複数 → Ken and Mika don\'t go to the same school.

■ 特に注意する動詞
have は一般動詞である。
I have a dog. → I don\'t have a dog.（○）
✗ I am not have a dog.

⚠ 注意：「〜がいます／あります」を be動詞で表している文（There is a cat 〜）の否定は There isn\'t a cat 〜 で、be動詞の規則にしたがう。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を否定文にしなさい。　My uncle is a police officer.',
        wrongAnswer: 'My uncle doesn\'t a police officer.',
        trapExplanation: '否定文といえば doesn\'t、という手順を先に思い出してしまい、もとの文の動詞を確かめない。日本語に直すと「警察官ではありません」となり、doesn\'t でも意味が通じるように感じてしまう。',
        correctAnswer: 'My uncle is not a police officer.（My uncle isn\'t a police officer.）',
        correctExplanation:
          'もとの文の動詞は is という be動詞なので、うしろに not を入れるだけでよい。doesn\'t を使うと文から動詞が消えてしまう。否定文を作ったら、動詞が一つ残っているかを必ず数える。',
      },
      {
        question: '次の文を否定文にしなさい。　Tom speaks Japanese.',
        wrongAnswer: 'Tom isn\'t speak Japanese.',
        trapExplanation: '「〜しません」を be動詞の否定文と同じ形で作ろうとしてしまう。isn\'t は使い慣れているので、動詞の種類を確かめずに手が動いてしまう。',
        correctAnswer: 'Tom doesn\'t speak Japanese.',
        correctExplanation:
          'speaks は一般動詞なので、否定には doesn\'t を動詞の前に置き、動詞を原形 speak に戻す。isn\'t speak では is と speak の二つの動詞が並んでしまう。もとの文の動詞を見てから、not か doesn\'t かを決める。',
      },
    ],
  },

  {
    id: 'eigo_s063',
    subject: 'eigo',
    examType: 'chugaku',
    title: '混同を防ぐ③：疑問文は Are you か Do you か',
    description: '疑問文を作るとき、be動詞を前に出すのか Do を借りるのかを見分ける',
    order: 563,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'be動詞の文 → be動詞を主語の前に出す（Are you 〜? / Is he 〜?）。',
      '一般動詞の文 → Do / Does を先頭に置く（Do you 〜? / Does he 〜?）。',
      '答えも同じ語でそろえる（Are 〜? → Yes, I am. ／ Do 〜? → Yes, I do.）。',
      '× Do you are 〜?／× Are you have 〜? は動詞が二つになるので誤り。',
      'have は一般動詞なので Do you have 〜? が正しい。',
    ],
    sections: [
      {
        heading: '二つの作り方を並べて見る',
        body: `疑問文の作り方は、be動詞の文と一般動詞の文でまったくちがう。並べて確かめる。

■ be動詞の文
You are a student. → Are you a student?
He is kind. → Is he kind?
They are at home. → Are they at home?
やること：be動詞を主語の前に出す。

■ 一般動詞の文
You play tennis. → Do you play tennis?
He plays tennis. → Does he play tennis?
They live here. → Do they live here?
やること：Do / Does を先頭に置き、動詞は原形にする。

■ 動詞が二つになる誤り
✗ Do you are a student?（do と are）
✗ Are you play tennis?（are と play）
✗ Are you have a pen?（are と have）

どれも動詞が二つ並んでいる。疑問文を作ったら、Do / Does をのぞいて動詞が一つかを確かめる。

★ ポイント：Do / Does は動詞の数に数えない「合図の語」である。合図の語＋動詞一つ、が正しい形。`,
      },
      {
        heading: '答え方までそろえる',
        body: `問いの最初の語と、答えに使う語をそろえるのが鉄則である。

■ Are / Is で始まる問い → be動詞で答える
Are you hungry? － Yes, I am. / No, I\'m not.
Is he your brother? － Yes, he is. / No, he isn\'t.

■ Do / Does で始まる問い → do / does で答える
Do you like music? － Yes, I do. / No, I don\'t.
Does she play the piano? － Yes, she does. / No, she doesn\'t.

■ 混ぜてはいけない
✗ Do you like music? － Yes, I am.
✗ Are you a student? － Yes, I do.

■ have に注意
「持っていますか」は一般動詞の疑問文である。
○ Do you have a pen?（ペンを持っていますか）
✗ Are you have a pen?
答えも Yes, I do. になる。

■ 「〜にいますか」は be動詞
○ Are you at home now?（今、家にいますか）
答えは Yes, I am.

⚠ 注意：日本語の訳は手がかりにならないことが多い。使う英語の動詞が be動詞か一般動詞かで機械的に決める。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは自転車を持っていますか。」を英語にしなさい。（a bike を使う）',
        wrongAnswer: 'Are you have a bike?',
        trapExplanation: 'Are you 〜? という形が口になじんでいるため、たずねる文はまず Are you で始めてしまう。have が一般動詞であることを確かめないまま、そのうしろに置いてしまう。',
        correctAnswer: 'Do you have a bike?',
        correctExplanation:
          'have は一般動詞なので、疑問文は Do を先頭に置いて作る。Are you have 〜? では are と have の二つの動詞が並んでしまう。答えも Yes, I do. / No, I don\'t. とそろえる。',
      },
      {
        question: 'Do you like sports? に No で答えなさい。',
        wrongAnswer: 'No, I\'m not.',
        trapExplanation: 'No で答える形として I\'m not をいちばんよく練習しているため、問いの最初の語を見ずに書いてしまう。会話としては通じそうに感じるのも見落としの原因である。',
        correctAnswer: 'No, I don\'t.',
        correctExplanation:
          'Do 〜? でたずねられているので、答えにも do を使って No, I don\'t. とする。I\'m not で答えるのは Are you 〜? と聞かれたときである。問いの最初の語を必ず見てから答えを書く、という手順を守る。',
      },
    ],
  },

  {
    id: 'eigo_s064',
    subject: 'eigo',
    examType: 'chugaku',
    title: '混同を防ぐ④：四つの型のまとめ',
    description: 'be動詞と一般動詞、否定文と疑問文の四つの組み合わせを一枚に整理する',
    order: 564,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '四つの型：be動詞の否定／be動詞の疑問／一般動詞の否定／一般動詞の疑問。',
      'be動詞の否定＝isn\'t・aren\'t、疑問＝Is 〜? Are 〜?。',
      '一般動詞の否定＝don\'t・doesn\'t、疑問＝Do 〜? Does 〜?。',
      '形容詞（sleepy・hungry）は be動詞、動作を表す語は一般動詞。',
      '「〜がいます・持っています」は have（一般動詞）、「〜です・〜にいます」は be動詞。',
    ],
    sections: [
      {
        heading: '四つの型を一枚に',
        body: `ここまで学んだ形を、二つの軸（be動詞か一般動詞か／否定か疑問か）で整理する。

■ be動詞の文
肯定　He is a student.
否定　He is not（isn\'t）a student.
疑問　Is he a student? － Yes, he is. / No, he isn\'t.

■ 一般動詞の文
肯定　He plays tennis.
否定　He does not（doesn\'t）play tennis.
疑問　Does he play tennis? － Yes, he does. / No, he doesn\'t.

■ 決め方の順序
①この文で使う動詞は何か
②それが am / is / are なら be動詞の規則、それ以外なら一般動詞の規則
③一般動詞なら、主語を見て do か does かを決め、動詞を原形にする

この順に考えれば、どんな文でも迷わない。日本語の訳から入ると、「です・ます」に引かれて必ずまちがえる。

★ ポイント：まず英語の動詞を決める。動詞が決まれば、否定文も疑問文も自動的に決まる。`,
        figureId: 'lf_eigoext02_064',
      },
      {
        heading: 'まぎらわしい日本語',
        body: `日本語からは判断できない例を集めて確かめる。

■ 「私はねむいです」
sleepy は形容詞 → be動詞
○ I am sleepy.　✗ I sleep.（これは「私は眠る」）

■ 「私は兄が二人います」
「います」でも所有を表す → have
○ I have two brothers.　✗ I am two brothers.

■ 「彼は大阪に住んでいます」
live は一般動詞
○ He lives in Osaka.　✗ He is live in Osaka.

■ 「彼は大阪にいます」
場所を表す → be動詞
○ He is in Osaka.

■ 「私はサッカーが好きです」
like は一般動詞
○ I like soccer.　✗ I am like soccer.

■ 「私はサッカー選手です」
名詞が続く → be動詞
○ I am a soccer player.

⚠ 注意：同じ「〜います」でも、〈場所〉が続けば be動詞、〈持っているもの〉が続けば have になる。うしろに何が来るかを見て決める。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は今日、とてもねむいです。」を英語にしなさい。（sleepy／very／today を使う）',
        wrongAnswer: 'I sleep very today.',
        trapExplanation: 'sleep（眠る）と sleepy（ねむい）が形も意味も近いので、動詞のほうを選んでしまう。動詞を使えば be動詞は要らないと考え、文としてはそろっているように見えてしまう。',
        correctAnswer: 'I am very sleepy today.',
        correctExplanation:
          'sleepy は「ねむい」という状態を表す形容詞なので、be動詞で主語と結ぶ。I sleep は「私は眠る」という動作の意味になり、日本語とずれてしまう。うしろに来る語が形容詞なら be動詞、と決めて選ぶ。',
      },
      {
        question: '「私には妹が二人います。」を英語にしなさい。',
        wrongAnswer: 'I am two sisters.',
        trapExplanation: '「います」という日本語を「存在」ととらえ、be動詞を使う文だと考えてしまう。しかし I am two sisters. は「私は二人の妹です」という意味になり、まったく通じない。',
        correctAnswer: 'I have two sisters.',
        correctExplanation:
          '家族が何人いるかを言うときは have（持っている・いる）を使う。be動詞は主語と「＝」で結ぶ語なので、I ＝ two sisters となってしまい意味が通らない。「〜がいます」は have、「〜です」は be動詞、と分けて覚える。',
      },
    ],
  },
  // ───────────── 6. 第1文型 SV・第2文型 SVC（s065〜s068） ─────────────
  {
    id: 'eigo_s065',
    subject: 'eigo',
    examType: 'chugaku',
    title: '文の要素と五つの文型',
    description: 'S・V・O・C という文の部品と、修飾語（M）との区別をつかむ',
    order: 565,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '文の要素は S（主語）・V（動詞）・O（目的語）・C（補語）の四つ。',
      '修飾語（M）は文型に数えない。前置詞から始まるかたまり・時を表す語句など。',
      '五つの文型：SV／SVC／SVO／SVOO／SVOC。',
      'C は主語や目的語とイコールになる語。O はイコールにならない。',
      '文型を答える問題では、まず修飾語を（　）でくくって消す。',
    ],
    sections: [
      {
        heading: '文の四つの部品',
        body: `英語の文は、次の四つの部品（要素）を組み合わせてできている。

■ S（主語）＝「〜は・〜が」にあたる語
例）Ken runs fast. の Ken

■ V（動詞）＝「〜する・〜である」にあたる語
例）Ken runs fast. の runs

■ O（目的語）＝「〜を・〜に」にあたる語
例）I like music. の music

■ C（補語）＝主語や目的語がどんなものかを説明し、イコールで結ばれる語
例）He is a doctor. の a doctor（He ＝ a doctor）

■ M（修飾語）＝上の四つ以外のかざりの語句
例）in the park（公園で）／every day（毎日）／very（とても）／fast（速く）
修飾語は文型を決めるときには数えない。取りのぞいても文が成り立つのが特徴である。

★ ポイント：文型を答えるときは、まず前置詞（in・on・at・with・to・for など）から始まるかたまりと、時を表す語句を（　）でくくって消す。残った骨組みが文型である。`,
        figureId: 'lf_eigoext02_065',
      },
      {
        heading: '五つの文型',
        body: `残った骨組みの組み合わせ方は、五種類しかない。

■ 第1文型　SV
例）Birds fly.（鳥が飛ぶ）
例）I go to school.（to school は M）

■ 第2文型　SVC（S＝C）
例）He is a teacher.（He ＝ a teacher）
例）She looks happy.（She ＝ happy）

■ 第3文型　SVO（S≠O）
例）I like dogs.（I ≠ dogs）
例）He plays the piano.

■ 第4文型　SVOO（人に・ものを）
例）He gave me a book.（me ＝ 人、a book ＝ もの）

■ 第5文型　SVOC（O＝C）
例）We call him Ken.（him ＝ Ken）
例）The news made me happy.（me ＝ happy）

■ 見分けの鍵は「イコールかどうか」
C が出てくる文型（SVC・SVOC）では、必ずイコールの関係がある。O が二つ並ぶ SVOO では、二つの O はイコールにならない。

⚠ 注意：文型を答える問題で修飾語を数えてしまうと、SVO を SVOO と答えるようなまちがいが起こる。まず修飾語を消す、という作業を必ず先に行う。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。　I play tennis in the park.',
        wrongAnswer: '第4文型（SVOO）',
        trapExplanation: 'play のうしろに tennis と in the park の二つのまとまりが見えるので、目的語が二つある第4文型だと考えてしまう。修飾語を先に消す作業をしていないために起こる。',
        correctAnswer: '第3文型（SVO）',
        correctExplanation:
          'in the park は前置詞 in から始まる修飾語（M）なので、文型には数えない。これを消すと I（S）play（V）tennis（O）が残り、第3文型になる。文型の問題では、前置詞から始まるかたまりを最初に（　）でくくる。',
      },
      {
        question: '次の文の主語（S）を答えなさい。　Every morning my mother makes breakfast.',
        wrongAnswer: 'Every morning',
        trapExplanation: '主語は文のいちばん前に来るものだと覚えているので、先頭にある Every morning をそのまま主語だと考えてしまう。時を表す語句が前に置かれることがあると知らないと引っかかる。',
        correctAnswer: 'my mother',
        correctExplanation:
          'Every morning は「毎朝」という時を表す修飾語で、文の前に置かれているだけである。「だれが作るのか」を考えれば主語は my mother だと分かる。主語は「動詞の動作をする人・もの」であって、位置だけで決めてはいけない。',
      },
    ],
  },

  {
    id: 'eigo_s066',
    subject: 'eigo',
    examType: 'chugaku',
    title: '第1文型 SV：動詞だけで意味が完成する文',
    description: '目的語も補語も要らない文の形と、うしろに続く修飾語の見分け方を学ぶ',
    order: 566,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '第1文型は〈S＋V〉。目的語も補語もない。',
      'うしろに語句が続いても、修飾語であれば第1文型のまま。',
      'go / come / run / walk / live / swim / sit / stand などが代表的。',
      'I go to school. は to school が修飾語なので SV。',
      '「〜を」と訳せても、前置詞が入っていれば目的語ではない。',
    ],
    sections: [
      {
        heading: '動詞だけで意味が通る',
        body: `第1文型は、主語と動詞だけで意味が完成する文である。

■ 形
S＋V

例）Birds fly.（鳥が飛ぶ）
例）The baby cried.（赤ちゃんが泣いた）
例）He runs.（彼は走る）

これだけでも文として成り立つ。「何を」も「どんなだ」も要らない。

■ うしろに修飾語が付いても第1文型
実際の文では、うしろに場所や時を表す語句が付くことがほとんどである。しかしそれは修飾語なので、文型は SV のままである。

例）I go to school.（S＝I、V＝go、to school は M）
例）He lives in Kyoto.（in Kyoto は M）
例）We walked in the park yesterday.（in the park と yesterday が M）
例）She swims very fast.（very fast は M）

■ 代表的な動詞
go（行く）／come（来る）／run（走る）／walk（歩く）／swim（泳ぐ）／live（住む）／sit（すわる）／stand（立つ）／sleep（眠る）／arrive（着く）／happen（起こる）

★ ポイント：第1文型かどうかは「動詞のうしろに、前置詞なしの名詞があるか」で見分ける。なければ第1文型である。`,
      },
      {
        heading: '「〜を」に引かれない',
        body: `日本語に訳すと「〜を」となるのに、英語では前置詞が要る場合がある。このとき前置詞から始まるかたまりは修飾語なので、目的語ではない。

例）He runs in the park.（彼は公園を走る）
「公園を」と訳すが、英語では in the park という修飾語である。
✗ He runs the park.

例）We walked along the river.（私たちは川ぞいを歩いた）
例）The bird flew over the house.（鳥は家の上を飛んだ）

日本語の「を」だけで目的語を判断してはいけない。英語の形（前置詞があるかないか）で判断する。

■ 逆に前置詞が要らない動詞もある
例）I entered the room.（私は部屋に入った）
「部屋に」と訳すが、enter は前置詞なしで目的語をとる。これは第3文型である。

例）We reached the station.（駅に着いた）
※ arrive は arrive at the station と前置詞が要る（第1文型）。

⚠ 注意：訳ではなく、英語の形を覚える。go to／arrive at／listen to は前置詞が要り、enter／reach／discuss は前置詞なしで目的語をとる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。　My father goes to work by train.',
        wrongAnswer: '第3文型（SVO）',
        trapExplanation: 'goes のうしろに to work という語句が続くので、それを目的語だと考えてしまう。「仕事へ行く」と訳せるので、work が「何を」にあたるように感じてしまう。',
        correctAnswer: '第1文型（SV）',
        correctExplanation:
          'to work も by train も前置詞から始まる修飾語なので、文型には数えない。残るのは My father（S）goes（V）だけなので第1文型である。前置詞が付いている語句は目的語になれない、と覚えておく。',
      },
      {
        question: '「彼は毎朝、公園を走ります。」を英語にしなさい。（the park／every morning を使う）',
        wrongAnswer: 'He runs the park every morning.',
        trapExplanation: '日本語の「公園を」の「を」を目的語のしるしだと考え、前置詞なしで the park を置いてしまう。日本語の助詞と英語の目的語を一対一で対応させているのが原因。',
        correctAnswer: 'He runs in the park every morning.',
        correctExplanation:
          'run は「走る」という動作だけで意味が完成する動詞で、走る場所は in / along などの前置詞を使って表す。日本語の「を」に引かれず、英語ではどの前置詞を使うかで覚える。この文は第1文型である。',
      },
    ],
  },

  {
    id: 'eigo_s067',
    subject: 'eigo',
    examType: 'chugaku',
    title: '第2文型 SVC：主語とイコールになる語',
    description: '補語（C）の見分け方と、S＝C という関係の確かめ方を身につける',
    order: 567,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '第2文型は〈S＋V＋C〉。S＝C の関係が成り立つ。',
      'C になるのは名詞と形容詞。副詞は C になれない。',
      'be動詞の文はほとんどが第2文型（He is a doctor. / She is kind.）。',
      'become・look・get・feel・sound・taste・smell も SVC を作る。',
      'S＝C かどうかを、実際に「＝」を書いて確かめる。',
    ],
    sections: [
      {
        heading: 'S＝C の関係',
        body: `第2文型は、動詞のうしろに主語を説明する語（補語 C）が来る文である。S と C はイコールの関係になる。

■ 形
S＋V＋C（S＝C）

例）He is a doctor.（He ＝ a doctor）
例）She is kind.（She ＝ kind）
例）My father is a teacher.（My father ＝ a teacher）
例）This book is interesting.（This book ＝ interesting）

■ C になれるのは名詞と形容詞
名詞　a doctor / a teacher / my friend
形容詞　kind / happy / interesting / young

✗ 副詞は C になれない
He is well. のように well（副詞）を使うと意味が変わる（「体調がよい」の意味では使えるが、「上手だ」の意味にはならない）。第2文型の C には形容詞を置く。

■ 確かめ方
文を書いたら、S と C の間に「＝」を書いてみる。意味が通れば第2文型である。

He is a doctor. → He ＝ a doctor（○）
I like dogs. → I ＝ dogs（✗ 意味が通らない → 第3文型）

★ ポイント：この「＝を書いてみる」作業が、第2文型と第3文型を見分けるいちばん確実な方法である。`,
        figureId: 'lf_eigoext02_067',
      },
      {
        heading: 'be動詞以外の SVC',
        body: `be動詞以外にも、S＝C の関係を作る動詞がある。

■ become（〜になる）
例）He became a doctor.（彼は医者になった）
例）She will become famous.

■ look（〜に見える）
例）You look tired.（あなたはつかれて見える）
例）He looks happy.

■ get（〜になる）
例）It is getting dark.（暗くなってきた）
例）He got angry.（彼は怒った）

■ feel（〜と感じる）／sound（〜に聞こえる）／taste（〜の味がする）／smell（〜のにおいがする）
例）I feel sick.（気分が悪い）
例）That sounds good.（それはよさそうだ）
例）This soup tastes salty.（このスープは塩からい）

これらの動詞のうしろには形容詞を置く。副詞ではないので注意する。

■ look と look like
うしろに名詞を置くときは like が要る。
例）He looks young.（形容詞）
例）He looks like a student.（名詞 → like が必要）

⚠ 注意：You look happily. は誤り。happily は「幸せそうに」という副詞である。正しくは You look happy.（あなたは幸せそうに見える）。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。　My sister looks happily today.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: '日本語で「幸せそうに見える」と「〜に」を付けて訳すので、副詞の happily がふさわしいと感じてしまう。look＝見える、という訳し方が副詞を呼びこんでしまう。',
        correctAnswer: 'My sister looks happy today.',
        correctExplanation:
          'look はうしろに補語（C）をとる動詞で、C になるのは名詞か形容詞である。happily は副詞なので C にはなれない。My sister ＝ happy というイコールの関係を作るのだから、形容詞の happy を置く。',
      },
      {
        question: '次の文の文型を答えなさい。　She became a famous singer.',
        wrongAnswer: '第3文型（SVO）',
        trapExplanation: 'became のうしろに a famous singer という名詞のかたまりがあるので、目的語だと考えてしまう。名詞が来たら O、という覚え方をしていると必ず引っかかる。',
        correctAnswer: '第2文型（SVC）',
        correctExplanation:
          'She ＝ a famous singer というイコールの関係が成り立つので、a famous singer は補語（C）である。名詞であっても、主語とイコールになるなら C になる。「＝を書いて意味が通るか」で判断する。',
      },
    ],
  },

  {
    id: 'eigo_s068',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'SVC をつくる動詞：become・look・sound など',
    description: '感覚を表す動詞のうしろに形容詞を置くきまりと、like の有無を整理する',
    order: 568,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '感覚を表す動詞：look（見える）・sound（聞こえる）・taste（味がする）・smell（においがする）・feel（感じる）。',
      'これらのうしろには形容詞を置く（× smells deliciously）。',
      'うしろに名詞を置くときは like を入れる（look like a doctor）。',
      'become / get / turn は「〜になる」という変化を表す。',
      'This soup smells good. の good を well にしない。',
    ],
    sections: [
      {
        heading: '感覚を表す動詞＋形容詞',
        body: `五感（見る・聞く・味わう・においをかぐ・感じる）に関する動詞は、うしろに形容詞を置いて第2文型を作る。

■ look（〜に見える）
例）You look tired.（つかれて見える）
例）The cake looks delicious.（そのケーキはおいしそうに見える）

■ sound（〜に聞こえる）
例）That sounds interesting.（それはおもしろそうだ）
例）Your idea sounds good.

■ taste（〜の味がする）
例）This soup tastes salty.（このスープは塩からい）

■ smell（〜のにおいがする）
例）These flowers smell sweet.（この花はあまいにおいがする）

■ feel（〜と感じる）
例）I feel sleepy.（ねむい）
例）This cloth feels soft.（この布はやわらかい手ざわりだ）

★ ポイント：日本語では「おいしそうに」「あまく」と副詞のように訳すが、英語では形容詞を置く。× tastes deliciously ではなく ○ tastes delicious。`,
      },
      {
        heading: 'like が要るとき・要らないとき',
        body: `これらの動詞のうしろに名詞を置きたいときは、like（〜のように）を入れる。

■ 形容詞のとき → like は不要
例）He looks young.（彼は若く見える）
例）It sounds strange.（それは変に聞こえる）

■ 名詞のとき → like が必要
例）He looks like a doctor.（彼は医者のように見える）
例）It sounds like a good idea.（それはよい考えのように聞こえる）
例）This tastes like chicken.（これはとり肉のような味がする）

✗ He looks like tired.（tired は形容詞なので like は不要）
✗ He looks a doctor.（名詞なので like が必要）

■ 「〜になる」を表す動詞
become（〜になる）：例）He became a pilot. / She became famous.
get（〜になる）：例）It got cold.（寒くなった）／ He got angry.
turn（色などが〜になる）：例）The leaves turn red in fall.（葉が秋に赤くなる）

become は名詞も形容詞もうしろに置けるが、get は形容詞を置くのがふつうである。

⚠ 注意：good（形容詞）と well（副詞）を混同しない。This soup smells good.（○）／ This soup smells well.（✗）。ただし He plays tennis well.（上手にテニスをする）は一般動詞を修飾するので well が正しい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。　This soup smells deliciously.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: '「おいしそうなにおいがする」と日本語で「〜そうに」と訳すため、副詞の形がふさわしいと感じてしまう。動詞を説明する語は副詞、という規則を機械的にあてはめている。',
        correctAnswer: 'This soup smells delicious.（または smells good.）',
        correctExplanation:
          'smell は第2文型をつくる動詞で、うしろには主語を説明する形容詞が来る。This soup ＝ delicious という関係である。副詞は動詞の様子（どのように）を説明する語なので、ここには置けない。',
      },
      {
        question: '次の文の誤りを直しなさい。　My brother looks like tired today.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: 'look like ＝「〜のように見える」という熟語として丸ごと覚えているため、うしろが形容詞でも like を入れてしまう。日本語の訳がどちらも「〜のように見える」になるのも原因である。',
        correctAnswer: 'My brother looks tired today.',
        correctExplanation:
          'like が必要なのは、うしろに名詞を置くときだけである。tired は形容詞なので like は要らない。名詞なら He looks like a teacher.、形容詞なら He looks tired.、と使い分ける。',
      },
    ],
  },

  // ───────────── 7. 第3文型 SVO・目的語（s069〜s072） ─────────────
  {
    id: 'eigo_s069',
    subject: 'eigo',
    examType: 'chugaku',
    title: '第3文型 SVO：「〜を」にあたる目的語',
    description: '目的語のはたらきと、S≠O という関係を第2文型と対比して確かめる',
    order: 569,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '第3文型は〈S＋V＋O〉。O は動詞の動作を受けるもの。',
      'S＝O にはならない（I like dogs. で I ≠ dogs）。',
      'O になるのは名詞・代名詞（目的格）・不定詞・動名詞など。',
      '動詞のすぐうしろに前置詞なしで名詞が来ていれば O。',
      '英語で書くいちばん多い形なので、語順を体にしみこませる。',
    ],
    sections: [
      {
        heading: '目的語とは何か',
        body: `第3文型は、動詞の動作が及ぶ相手（目的語 O）が置かれる文である。英語の文でもっともよく使われる形である。

■ 形
S＋V＋O（S≠O）

例）I like dogs.（私は犬が好きです）
例）He plays the piano.（彼はピアノをひきます）
例）We study English.（私たちは英語を勉強します）
例）She has a nice bag.（彼女はすてきなかばんを持っています）
例）Tom knows my sister.（トムは私の姉を知っています）

■ 第2文型とのちがい
第2文型　He is a doctor.（He ＝ a doctor）
第3文型　He knows a doctor.（He ≠ a doctor）

どちらも動詞のうしろに名詞が来ているが、イコールになるかどうかがちがう。「＝を書いてみて意味が通るか」で見分ける。

■ 前置詞があれば O ではない
例）I look at the picture.（at があるので the picture は O ではない）
例）I see the picture.（前置詞なし → the picture は O）

★ ポイント：動詞のすぐうしろに前置詞なしで名詞が来ていて、しかも主語とイコールにならなければ、それが目的語である。`,
        figureId: 'lf_eigoext02_069',
      },
      {
        heading: '目的語になるもの',
        body: `目的語の位置には、名詞のほかにもいろいろな形が来る。

■ 名詞
例）I want a new bike.

■ 代名詞（目的格）
例）I know him.（× I know he.）
例）She helps us every day.

■ 〈to＋動詞の原形〉＝「〜すること」
例）I want to play tennis.（私はテニスをしたい）
例）She likes to read books.（彼女は本を読むのが好きだ）

■ 〈動詞の ing 形〉＝「〜すること」
例）He enjoys playing soccer.（彼はサッカーをするのを楽しむ）
例）I finished doing my homework.

「〜すること」を表すかたまりも、まとめて一つの目的語と考える。文型としては SVO である。

⚠ 注意：want のうしろは to＋原形、enjoy のうしろは ing 形と決まっている。× I want playing tennis. や × He enjoys to play soccer. は誤り。中学受験でも上位校ではここまで問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。　My brother knows she very well.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: '「彼女」という日本語には形の変化がないので、she のまま置いてしまう。主語の位置で使う she を「彼女」の唯一の形だと思いこんでいることが原因である。',
        correctAnswer: 'My brother knows her very well.',
        correctExplanation:
          '動詞のうしろ（目的語の位置）に来る代名詞は目的格になる。she → her、he → him、they → them、I → me、we → us。「動詞のうしろに来たら形がかわる」と確かめる手順を必ず入れる。',
      },
      {
        question: '「私は音楽室に入ります。」を英語にしなさい。（the music room を使う）',
        wrongAnswer: 'I enter into the music room.',
        trapExplanation: '日本語の「〜に入る」の「に」につられて、前置詞 into を入れてしまう。日本語の助詞と英語の前置詞を一対一で対応させようとするのが原因である。',
        correctAnswer: 'I enter the music room.',
        correctExplanation:
          'enter は前置詞なしで目的語をとる動詞なので、into は要らない。同じ仲間に reach（〜に着く）、visit（〜を訪れる）がある。逆に arrive は arrive at 〜、listen は listen to 〜 と前置詞が要る。動詞ごとに形で覚える。',
      },
    ],
  },

  {
    id: 'eigo_s070',
    subject: 'eigo',
    examType: 'chugaku',
    title: '目的語になる代名詞：目的格の形',
    description: '代名詞が主語のときと目的語のときで形が変わることを整理する',
    order: 570,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '主格→目的格：I→me、you→you、he→him、she→her、it→it、we→us、they→them。',
      '動詞のうしろ、前置詞のうしろでは目的格を使う。',
      'with me / for us / to him のように、前置詞のあとも目的格。',
      'you と it は主格と目的格が同じ形。',
      '「私の」を表す my / our などとは別の形なので混同しない。',
    ],
    sections: [
      {
        heading: '形が変わる場所',
        body: `代名詞は、文の中でどの位置に置かれるかによって形が変わる。

■ 主格（主語になる形）
I / you / he / she / it / we / they

■ 目的格（目的語になる形）
me / you / him / her / it / us / them

■ 目的格を使う場所は二つ
①動詞のうしろ（目的語）
例）I like him.（私は彼が好きです）
例）She helps us.（彼女は私たちを助けてくれます）
例）Do you know them?（彼らを知っていますか）

②前置詞のうしろ
例）Come with me.（私といっしょに来て）
例）This present is for her.（このプレゼントは彼女のためのものです）
例）Look at it.（それを見て）
例）Between you and me（あなたと私の間で）

■ 同じ形のもの
you と it は、主格でも目的格でも形が変わらない。

例）You know me. / I know you.
例）It is easy. / I like it.

★ ポイント：主語なら主格、動詞や前置詞のうしろなら目的格。「置かれた場所」で決まる。`,
      },
      {
        heading: '「〜の」を表す形と区別する',
        body: `代名詞にはもう一つ「〜の」を表す形（所有格）があり、三つを混同しないことが大切である。

■ 三つの形
私　　I（私は）／my（私の）／me（私を・私に）
あなた　you／your／you
彼　　he／his／him
彼女　she／her／her
それ　it／its／it
私たち　we／our／us
彼ら　they／their／them

■ 使い分けの例
例）I like her.（私は彼女が好きです）＝目的格
例）This is her bag.（これは彼女のかばんです）＝所有格
her は目的格と所有格が同じ形なので、うしろに名詞があるかどうかで見分ける。

例）He is my friend.（所有格 my ＋ 名詞 friend）
例）He knows me.（目的格 me、うしろに名詞はない）

■ よくある誤り
✗ Please help I.　　○ Please help me.
✗ This is a picture of we.　○ This is a picture of us.
✗ Give it to she.　　○ Give it to her.

⚠ 注意：前置詞（of / to / for / with / at）のうしろは必ず目的格。ここは書き取り問題で頻出である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。　Please come to the party with I.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: '「私と」という日本語をそのまま with I にしてしまう。I ＝ 私、という覚え方しかしていないと、前置詞のうしろで形が変わることに気づけない。',
        correctAnswer: 'Please come to the party with me.',
        correctExplanation:
          '前置詞（with / to / for / of / at など）のうしろに来る代名詞は目的格になるので、I ではなく me を使う。同じく for us、to him、of them となる。「前置詞のうしろは目的格」と一つの規則で覚える。',
      },
      {
        question: '次の文の誤りを直しなさい。　I like tennis. My brother likes it, too. He plays it with he friends.',
        wrongAnswer: 'He plays it with he friends.',
        trapExplanation: '前置詞のうしろだから目的格、と覚えた直後に、うしろに名詞 friends があることを見落として him や he を置いてしまう。ここで必要なのは「彼の」を表す所有格である。',
        correctAnswer: 'He plays it with his friends.',
        correctExplanation:
          'friends という名詞が続いているので、必要なのは「彼の」を表す所有格 his である。前置詞のうしろがすぐ代名詞なら目的格（with him）、うしろに名詞が続くなら所有格（with his friends）と、うしろを見て判断する。',
      },
    ],
  },

  {
    id: 'eigo_s071',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自動詞と他動詞：前置詞が要るか要らないか',
    description: '目的語を直接とる動詞と、前置詞を必要とする動詞を区別して覚える',
    order: 571,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '他動詞＝目的語を直接とる動詞（前置詞なし）。自動詞＝目的語をとらない動詞。',
      '前置詞が要るもの：listen to／look at／arrive at／wait for／go to。',
      '前置詞が要らないもの：enter／reach／visit／discuss／marry。',
      '日本語の助詞（を・に）から判断してはいけない。',
      '同じ動詞が自動詞にも他動詞にもなることがある（run など）。',
    ],
    sections: [
      {
        heading: '二つの種類',
        body: `動詞は、目的語を直接とれるかどうかで二つに分かれる。

■ 他動詞＝目的語を直接とる（前置詞なし）
例）I like music.／He knows my name.／We study English.

■ 自動詞＝目的語をとらない（あとに続けるなら前置詞が要る）
例）I go to school.／He arrived at the station.／We walked in the park.

■ 前置詞が必要な代表例
listen to 〜（〜を聞く）
例）I listen to music every day.（× I listen music）

look at 〜（〜を見る）
例）Look at that bird.（× Look that bird）

arrive at / in 〜（〜に着く）
例）We arrived at the airport.

wait for 〜（〜を待つ）
例）I waited for him for an hour.

go to 〜（〜へ行く）
例）She goes to school by bike.

★ ポイント：日本語では「音楽を聞く」「鳥を見る」と「を」が付くのに、英語では前置詞が要る。日本語の助詞は手がかりにならない。`,
      },
      {
        heading: '前置詞が要らない動詞',
        body: `逆に、日本語では「〜に」と訳すのに、英語では前置詞なしで目的語をとる動詞がある。

■ enter（〜に入る）
例）He entered the room.（× entered into the room）

■ reach（〜に着く）
例）We reached the top of the mountain.（× reached to）

■ visit（〜を訪れる）
例）I visited my grandmother.（× visited to）

■ discuss（〜について話し合う）
例）We discussed the problem.（× discussed about）

■ marry（〜と結婚する）
例）He married her.（× married with）

これらは中学受験の上位校でも問われることがある。「前置詞を入れたくなるが入れない動詞」としてまとめて覚える。

■ 同じ動詞が両方になることも
run（走る＝自動詞）：He runs fast.
run（経営する＝他動詞）：He runs a restaurant.（彼はレストランを経営している）

■ よく似た組み合わせ
listen to（意識して聞く）／hear（自然に聞こえる、前置詞なし）
例）I listened to the radio. / I heard a strange sound.
look at（意識して見る）／see（自然に見える、前置詞なし）
例）Look at the board. / I can see the sea from my room.

⚠ 注意：listen・look は前置詞が要り、hear・see は要らない。二組をセットで覚えると混同しない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。　I listen music every morning.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: '「音楽を聞く」と日本語では「を」が付くので、目的語をそのまま置けば足りると考えてしまう。同じ「聞く」でも hear は前置詞が要らないため、いっそう混乱しやすい。',
        correctAnswer: 'I listen to music every morning.',
        correctExplanation:
          'listen は自動詞なので、うしろに「何を」を続けるには前置詞 to が要る。同じ仲間に look at、wait for、arrive at がある。一方 hear と see は他動詞なので前置詞は不要（I hear a sound.）。二組を対にして覚える。',
      },
      {
        question: '次の文の誤りを直しなさい。　We arrived the station at seven.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: 'reach（〜に着く）が前置詞なしで使えることを覚えていると、同じ意味の arrive も同じように使えると考えてしまう。日本語の訳が同じなので区別しにくい。',
        correctAnswer: 'We arrived at the station at seven.',
        correctExplanation:
          'arrive は自動詞なので、場所を続けるときは at（せまい場所）や in（広い場所）が要る。同じ意味でも reach は他動詞で We reached the station. と前置詞なしになる。訳ではなく動詞ごとの形で覚える。',
      },
    ],
  },

  {
    id: 'eigo_s072',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'SVC と SVO の見分け方',
    description: '同じ動詞が二つの文型をつくる場合を、イコールの関係で判断する',
    order: 572,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '見分けの鍵はただ一つ、S＝あとの語 が成り立つかどうか。',
      '成り立てば SVC、成り立たなければ SVO。',
      'get・feel・look・turn は、どちらの文型もつくる。',
      'He got angry.（SVC）／He got a letter.（SVO）',
      '訳し方ではなく、イコールの関係で判断する。',
    ],
    sections: [
      {
        heading: '「＝」を書いて確かめる',
        body: `第2文型（SVC）と第3文型（SVO）は、どちらも〈主語＋動詞＋語句〉という同じ並びに見える。ちがいはただ一つ、主語とうしろの語がイコールになるかどうかである。

■ 手順
①動詞のうしろの語を見つける
②主語との間に「＝」を書いてみる
③意味が通れば SVC、通らなければ SVO

例）He is a doctor.
He ＝ a doctor（○）→ SVC

例）He knows a doctor.
He ＝ a doctor（✗ 彼は医者そのものではない）→ SVO

例）She became a nurse.
She ＝ a nurse（○）→ SVC

例）She met a nurse.
She ＝ a nurse（✗）→ SVO

★ ポイント：うしろに来るのが名詞か形容詞かでは決まらない。名詞でもイコールなら C になる。必ず「＝」を書いて確かめる。`,
      },
      {
        heading: '両方の文型をつくる動詞',
        body: `同じ動詞が、使い方によって SVC にも SVO にもなる。

■ get
He got angry.（彼は怒った）→ He ＝ angry → SVC
He got a letter.（彼は手紙を受け取った）→ He ≠ a letter → SVO

■ feel
I feel sick.（気分が悪い）→ I ＝ sick → SVC
I feel a cold wind.（冷たい風を感じる）→ I ≠ a cold wind → SVO

■ look
He looks young.（若く見える）→ SVC
He looked at the picture.（絵を見た）→ at があるので O ではなく、文型としては SV

■ turn
The leaves turn red.（葉が赤くなる）→ SVC
He turned the key.（かぎを回した）→ SVO

■ run
He runs fast.（速く走る）→ SV
He runs a shop.（店を経営する）→ SVO

⚠ 注意：動詞の意味を一つだけ覚えていると、文型の判断をまちがえる。文全体を読んで、主語とうしろの語がイコールかどうかを毎回確かめる習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。　My father got angry yesterday.',
        wrongAnswer: '第3文型（SVO）',
        trapExplanation: 'get は「〜を得る」という他動詞として覚えているので、うしろの語を自動的に目的語だと考えてしまう。「怒った」という訳からは、イコールの関係が意識されにくい。',
        correctAnswer: '第2文型（SVC）',
        correctExplanation:
          'My father ＝ angry というイコールの関係が成り立つので、angry は補語（C）である。get は「〜になる」の意味では SVC をつくる。He got a letter. のように主語とイコールにならない語が続けば SVO になる。',
      },
      {
        question: '次の文の文型を答えなさい。　I felt a cold wind on my face.',
        wrongAnswer: '第2文型（SVC）',
        trapExplanation: 'feel は I feel sick. のように第2文型で使う動詞だと覚えているので、うしろの語をつねに補語だと考えてしまう。感覚を表す動詞＝SVC という思いこみが原因である。',
        correctAnswer: '第3文型（SVO）',
        correctExplanation:
          'I ＝ a cold wind とはならないので、a cold wind は目的語（O）である。on my face は修飾語なので数えない。同じ動詞でも、うしろの語と主語がイコールになるかどうかで文型が変わる。必ず「＝」を書いて確かめる。',
      },
    ],
  },
  // ───────────── 8. 第4文型 SVOO と書きかえ（s073〜s076） ─────────────
  {
    id: 'eigo_s073',
    subject: 'eigo',
    examType: 'chugaku',
    title: '第4文型 SVOO：「人に」「ものを」の順',
    description: '目的語を二つとる文の語順と、二つの O の関係を確かめる',
    order: 573,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '第4文型は〈S＋V＋O1（人）＋O2（もの）〉。「人に」「ものを」の順。',
      '二つの O はイコールにならない（me ≠ a book）。',
      '代表的な動詞：give・tell・show・teach・send・buy・make・cook・ask。',
      '順番を入れかえると意味が通らなくなる（× He gave a book me.）。',
      '人が代名詞のときも、その位置は変わらない（give me a book）。',
    ],
    sections: [
      {
        heading: '目的語が二つある文',
        body: `動詞のうしろに「だれに」「何を」の二つを続ける文を第4文型という。

■ 形
S＋V＋O1（人）＋O2（もの）

例）He gave me a book.（彼は私に本をくれた）
例）She teaches us English.（彼女は私たちに英語を教える）
例）My father bought me a bike.（父は私に自転車を買ってくれた）
例）Please show me your notebook.（ノートを見せてください）
例）I sent her a birthday card.（私は彼女に誕生日カードを送った）

■ 順番は「人 → もの」
英語では、先に「だれに」、あとに「何を」を置く。

✗ He gave a book me.
○ He gave me a book.

日本語では「私に本を」も「本を私に」も言えるが、英語ではこの語順が決まっている。

■ 二つの O はイコールにならない
me ≠ a book である。ここが第5文型（O＝C）との大きなちがいになる。

★ ポイント：第4文型は「〜に…を」と二つの助詞が出てくる文だ、と日本語から見当をつけ、英語では〈人→もの〉の順に置く。`,
        figureId: 'lf_eigoext02_073',
      },
      {
        heading: 'SVOO をつくる動詞',
        body: `第4文型が作れる動詞は限られている。よく出るものをまとめて覚える。

■ 「与える」仲間
give（与える）／send（送る）／show（見せる）／teach（教える）／tell（話す）／lend（貸す）／pass（手わたす）／write（書き送る）

例）I\'ll show you my album.（アルバムを見せましょう）
例）Please pass me the salt.（塩を取ってください）
例）Tell me the truth.（本当のことを話して）

■ 「作る・手に入れる」仲間
buy（買う）／make（作る）／cook（料理する）／get（取ってくる）／find（見つけてやる）

例）My mother made me a cake.（母は私にケーキを作ってくれた）
例）He cooked us dinner.（彼は私たちに夕食を作ってくれた）

■ ask（たずねる）
例）May I ask you a question?（質問してもよいですか）

■ 使えない動詞に注意
say は SVOO を作れない。
✗ He said me the truth.
○ He told me the truth.（tell を使う）
○ He said to me, "Come here."（say は to が要る）

⚠ 注意：say と tell の使い分けは頻出である。「人に」を直接続けられるのは tell、say は say to 〜 の形になる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は私にすてきなプレゼントをくれました。」を英語にしなさい。（a nice present を使う）',
        wrongAnswer: 'He gave a nice present me.',
        trapExplanation: '日本語の「すてきなプレゼントを 私に」という順でも自然に言えるため、英語でも入れかえられると考えてしまう。「何を」を先に思いうかべてしまうのも原因である。',
        correctAnswer: 'He gave me a nice present.',
        correctExplanation:
          '第4文型は〈動詞＋人＋もの〉の順が決まっている。もし「もの」を先に置きたいときは前置詞が必要で、He gave a nice present to me. としなければならない。前置詞なしで並べるときは必ず人が先である。',
      },
      {
        question: '次の文の誤りを直しなさい。　My grandmother said me an interesting story.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: 'say も tell も「言う・話す」と訳すので、どちらでも同じように使えると考えてしまう。日本語の訳が同じであることが、そのまま誤りの原因になっている。',
        correctAnswer: 'My grandmother told me an interesting story.',
        correctExplanation:
          'say は〈人＋もの〉の形をとれない動詞なので、「人に…を話す」と言うときは tell を使う。say を使うなら She said to me, "..." のように to が要る。tell me / tell us と、人を直接続けられるのは tell だと覚える。',
      },
    ],
  },

  {
    id: 'eigo_s074',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'SVOO の書きかえ①：to を使う動詞',
    description: 'give型の動詞を〈もの＋to＋人〉の形に書きかえる手順を身につける',
    order: 574,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '〈V＋人＋もの〉→〈V＋もの＋to＋人〉に書きかえられる。',
      'to を使う動詞：give・tell・show・teach・send・lend・pass・write。',
      '書きかえると第4文型（SVOO）から第3文型（SVO）になる。',
      '「相手にわたす・届ける」意味の動詞は to をとる、と考えるとよい。',
      '「もの」が it などの代名詞のときは、to を使う形にする（give it to me）。',
    ],
    sections: [
      {
        heading: '二つの言い方',
        body: `第4文型の文は、前置詞を使って言いかえることができる。give の仲間は to を使う。

■ 書きかえの形
S＋V＋人＋もの
→ S＋V＋もの＋to＋人

例）He gave me a book.
→ He gave a book to me.（彼は私に本をくれた）

例）She showed us her album.
→ She showed her album to us.

例）I sent him an e-mail.
→ I sent an e-mail to him.

例）Mr. Sato teaches us English.
→ Mr. Sato teaches English to us.

例）Please pass me the salt.
→ Please pass the salt to me.

■ to を使う動詞
give（与える）／tell（話す）／show（見せる）／teach（教える）／send（送る）／lend（貸す）／pass（手わたす）／write（書き送る）／sell（売る）

いずれも「相手にわたす・届ける」という意味を持つ。届く先を示すのが to である。

★ ポイント：書きかえると目的語は一つになるので、文型は第4文型（SVOO）から第3文型（SVO）に変わる。to me の部分は修飾語になる。`,
        figureId: 'lf_eigoext02_074',
      },
      {
        heading: '書きかえの手順と注意',
        body: `■ 手順
①〈人〉と〈もの〉を見つける
②〈もの〉を動詞のすぐうしろに移す
③〈人〉の前に to を付けて、いちばんうしろに置く

He gave me a book.
　　　　　人  もの
→ He gave a book to me.

■ 人が代名詞でも同じ
例）I told her the news. → I told the news to her.
her はそのままの形（目的格）で使う。

■ 「もの」が代名詞のとき
「もの」が it / them のような代名詞のときは、前置詞を使う形にするのがふつうである。

例）He gave it to me.（彼はそれを私にくれた）
△ He gave me it.（ふつうこの言い方はしない）

これは、代名詞は聞き手がすでに知っているものを指すので、文の中で目立たない位置に置きたいからである。

■ 意味は同じでも、伝わり方は少しちがう
He gave me a book.（だれにあげたかに重点）
He gave a book to me.（何をあげたかに重点）
入試ではどちらも正解になるが、書きかえよと指定されたら指示どおりの形にする。

⚠ 注意：to を for にしてはいけない。give / tell / show / teach / send はすべて to である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を、ほぼ同じ意味になるように書きかえなさい。　My aunt sent me a nice present.',
        wrongAnswer: 'My aunt sent a nice present for me.',
        trapExplanation: '「私のために送ってくれた」と考えると for がふさわしく感じられる。for が「〜のために」という親切さを表すことを知っているために、かえって選んでしまう。',
        correctAnswer: 'My aunt sent a nice present to me.',
        correctExplanation:
          'send は「相手に届ける」意味の動詞なので、書きかえには to を使う。to をとるのは give・tell・show・teach・send・lend・pass などである。for をとるのは buy・make・cook のような「作ってあげる」仲間で、別のまとまりで扱う。',
      },
      {
        question: '「彼はそれを私にくれました。」を英語にしなさい。（it を使う）',
        wrongAnswer: 'He gave me it.',
        trapExplanation: '〈give＋人＋もの〉の形を覚えているので、ものが代名詞でもそのまま当てはめてしまう。文法の形だけを見れば正しそうに見えるので、まちがいだと気づきにくい。',
        correctAnswer: 'He gave it to me.',
        correctExplanation:
          '「もの」が it や them のような代名詞のときは、〈V＋もの＋to＋人〉の形にするのがふつうである。He gave me it. は英語として不自然になる。代名詞が出てきたら to を使う形、と覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s075',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'SVOO の書きかえ②：for を使う動詞',
    description: 'buy型の動詞が for をとることを、to型との対比で確実にする',
    order: 575,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'for を使う動詞：buy・make・cook・get・find・choose・sing。',
      '「相手のために作る・手に入れる」意味の動詞は for をとる。',
      '「相手にわたす・届ける」意味の動詞は to をとる（give型）。',
      '書きかえの形は〈V＋もの＋for＋人〉。',
      'to型か for型かは動詞ごとに覚える。訳し方では決まらない。',
    ],
    sections: [
      {
        heading: 'for をとる動詞',
        body: `第4文型の書きかえで for を使う動詞がある。「相手のために作る・手に入れる」意味の仲間である。

■ 書きかえの形
S＋V＋人＋もの
→ S＋V＋もの＋for＋人

例）My mother made me a cake.
→ My mother made a cake for me.（母は私にケーキを作ってくれた）

例）He bought his sister a doll.
→ He bought a doll for his sister.

例）She cooked us dinner.
→ She cooked dinner for us.

例）Will you get me a glass of water?
→ Will you get a glass of water for me?

■ for を使う動詞
buy（買う）／make（作る）／cook（料理する）／get（取ってくる）／find（見つけてやる）／choose（選ぶ）／sing（歌ってやる）／play（演奏してやる）

■ to と for のちがい
to　… 相手にわたす・届く先を示す（give / send / tell / show / teach）
for … 相手のために何かをする（buy / make / cook / get）

give の場合、相手がその場にいなければわたせない。一方 buy や make は、相手がいなくてもできる。この差が to と for の使い分けにつながっている。

★ ポイント：「わたす系は to、作る系は for」と分けて覚え、動詞ごとにどちらかを暗記する。`,
        figureId: 'lf_eigoext02_075',
      },
      {
        heading: '覚え方とまぎらわしい例',
        body: `■ 動詞の分類表
to をとる　give / send / show / teach / tell / lend / pass / write / sell
for をとる　buy / make / cook / get / find / choose / sing

数の少ない for 型（buy・make・cook・get・find）を丸ごと覚え、残りは to、と決めてしまうのが効率がよい。

■ まぎらわしいもの
①make
「作ってあげる」は for。
例）She made me a doll. → She made a doll for me.
※ make には第5文型の使い方（make me happy）もあるので混同しない。

②get
「取ってきてあげる」は for。
例）Get me some water. → Get some water for me.

③ask は of を使う
例）He asked me a question. → He asked a question of me.
ask だけは to でも for でもないので、注意が必要である。入試では「ask は特別」とだけ覚えておけばよい。

⚠ 注意：書きかえの問題では、動詞を見た瞬間に to か for かを決められるようにしておく。訳から考えると「〜のために」がどちらにも当てはまってしまい、判断できない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を、ほぼ同じ意味になるように書きかえなさい。　My father bought me a new bike.',
        wrongAnswer: 'My father bought a new bike to me.',
        trapExplanation: 'give の書きかえで to を使う練習を先に多くするので、書きかえといえば to だと手が覚えてしまう。「私に買ってくれた」という訳からも、届け先を表す to がふさわしく感じられる。',
        correctAnswer: 'My father bought a new bike for me.',
        correctExplanation:
          'buy は「相手のために買う」意味なので for をとる。for 型は buy・make・cook・get・find が中心で、数が少ないのでまとめて覚えるとよい。それ以外の give・send・show・teach・tell はすべて to である。',
      },
      {
        question: '次の文を、ほぼ同じ意味になるように書きかえなさい。　Ms. Green teaches us English.',
        wrongAnswer: 'Ms. Green teaches English for us.',
        trapExplanation: '「私たちのために教えてくれる」と考えると for が自然に思える。for 型を覚えた直後は、今度はすべてを for にしてしまうという逆の誤りが起こりやすい。',
        correctAnswer: 'Ms. Green teaches English to us.',
        correctExplanation:
          'teach は「相手に知識をわたす」意味の動詞なので to をとる。give・send・show・tell と同じ仲間である。書きかえの前に、その動詞が to 型か for 型かを思い出す、という手順を必ずはさむ。',
      },
    ],
  },

  {
    id: 'eigo_s076',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'SVOO の否定文・疑問文と、たずね方',
    description: '第4文型の文を否定・疑問にする形と、What / Who でたずねる形を練習する',
    order: 576,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '否定文・疑問文の作り方は、ふつうの一般動詞の文と同じ。',
      'Does he give you 〜? のように、does のうしろの動詞は原形。',
      '「何を」をたずねるときは What does he give you? の語順。',
      '「だれに」をたずねるときは Who does he give it to? のように to が文末に残る。',
      'give / show / tell は、人が代名詞でもその位置は変わらない。',
    ],
    sections: [
      {
        heading: '否定文と疑問文',
        body: `第4文型でも、否定文・疑問文の作り方は変わらない。一般動詞の文と同じ規則にしたがう。

■ 否定文
例）He gives me a present. → He doesn\'t give me a present.
例）They tell us the truth. → They don\'t tell us the truth.

doesn\'t / don\'t のうしろは原形なので、gives → give に戻る。

■ 疑問文
例）He gives you a present. → Does he give you a present?
　　－ Yes, he does. / No, he doesn\'t.
例）They teach you math. → Do they teach you math?

■ 人の位置は変わらない
疑問文にしても〈動詞＋人＋もの〉の順は変わらない。

○ Does your mother make you lunch?
✗ Does your mother make lunch you?

■ 命令文
例）Please show me your ticket.（切符を見せてください）
例）Don\'t tell him my secret.（彼に私の秘密を言わないで）

★ ポイント：文型が変わっても、否定文・疑問文の作り方の規則は変わらない。動詞が一般動詞なら do / does を使う、という土台は同じである。`,
      },
      {
        heading: '疑問詞でたずねる',
        body: `第4文型の一部をたずねる文も作れる。

■ 「何を」をたずねる（もの＝O2 をたずねる）
He gives you a present. の a present をたずねる。
→ What does he give you?（彼はあなたに何をくれますか）
答え）He gives me a present.

■ 「だれに」をたずねる（人＝O1 をたずねる）
書きかえた形をもとにして、前置詞を文の終わりに残す言い方が使われる。
→ Who does he give it to?（彼はそれをだれにあげますか）
答え）He gives it to me.

■ 「だれが」をたずねる
Who gives you a present?（だれがあなたにプレゼントをくれますか）
who が主語なので do / does は使わず、動詞に -s を付ける。

■ よく出る形
What do you call this in English?（これを英語で何と言いますか）
※ これは第5文型（call＋O＋C）の疑問文で、次のまとまりで扱う。

⚠ 注意：What does he give you? の does のうしろは原形 give である。gives と書いてしまう誤りが非常に多いので、書いたあとに必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を疑問文にしなさい。　Your mother makes you lunch every day.',
        wrongAnswer: 'Does your mother makes you lunch every day?',
        trapExplanation: 'もとの文の makes をそのまま写してしまう。目的語が二つあって文が長いため、動詞を原形に戻すという基本の確認がぬけ落ちやすい。',
        correctAnswer: 'Does your mother make you lunch every day?',
        correctExplanation:
          'Does を使ったら、うしろの動詞は必ず原形に戻す（makes → make）。目的語が二つある文でも、否定文・疑問文の作り方は一般動詞の文とまったく同じである。文が長いときほど、動詞の形を最後に確かめる。',
      },
      {
        question: '「彼はあなたに何をくれますか。」を英語にしなさい。',
        wrongAnswer: 'What does he gives you?',
        trapExplanation: '主語 he が三人称単数であることが目に入るため、動詞に -s を付けてしまう。疑問詞が文の先頭にあると、does の存在が意識から外れやすいのも原因である。',
        correctAnswer: 'What does he give you?',
        correctExplanation:
          '疑問詞が付いても〈does＋主語＋動詞の原形〉という並びは変わらないので、give のままでよい。三人称単数であることは does がすでに示している。「do / does のうしろは原形」という規則をここでも使う。',
      },
    ],
  },

  // ───────────── 9. 第5文型 SVOC（s077〜s080） ─────────────
  {
    id: 'eigo_s077',
    subject: 'eigo',
    examType: 'chugaku',
    title: '第5文型 SVOC：目的語とイコールになる語',
    description: '目的語のあとに、その目的語を説明する補語が来る文の形をつかむ',
    order: 577,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '第5文型は〈S＋V＋O＋C〉。O＝C の関係が成り立つ。',
      'C になるのは名詞と形容詞。副詞は C になれない。',
      '代表的な動詞：call・name・make・keep・find・leave。',
      '語順は〈O → C〉。入れかえると意味が変わる。',
      '第4文型（O1≠O2）とのちがいは、イコールになるかどうか。',
    ],
    sections: [
      {
        heading: 'O＝C の関係',
        body: `第5文型は、目的語のうしろに「その目的語がどうであるか」を説明する語（補語 C）が来る文である。

■ 形
S＋V＋O＋C（O＝C）

例）We call him Ken.（私たちは彼をケンと呼ぶ）
　　him ＝ Ken

例）The news made me happy.（その知らせは私を幸せにした）
　　me ＝ happy

例）Please keep the door open.（ドアを開けたままにしておいて）
　　the door ＝ open

例）I found the book interesting.（その本はおもしろいと分かった）
　　the book ＝ interesting

■ 第2文型との関係
第2文型は S＝C、第5文型は O＝C である。イコールになる相手がちがうだけで、C のはたらきは同じである。

第2文型　He is happy.（He ＝ happy）
第5文型　The news made him happy.（him ＝ happy）

■ C になれるもの
名詞（Ken / our leader / a doctor）
形容詞（happy / clean / open / interesting）
副詞は C になれない。

★ ポイント：「O＝C」を書いてみて意味が通れば第5文型である。第4文型では二つの O がイコールにならないので、ここで区別できる。`,
        figureId: 'lf_eigoext02_077',
      },
      {
        heading: '語順は入れかえられない',
        body: `第5文型では、O と C の順番が決まっている。入れかえると意味が変わってしまう。

例）We call him Ken.（彼をケンと呼ぶ）
　　We call Ken him.（ケンを「彼」と呼ぶ → 意味が通らない）

例）They named the baby Mika.（赤ちゃんをミカと名づけた）
　　They named Mika the baby.（✗）

■ O に代名詞が来るとき
O の位置なので目的格を使う。

例）We call her Emi.（× We call she Emi.）
例）The song makes them happy.（× The song makes they happy.）

■ C の位置には形容詞
✗ The news made me happily.
○ The news made me happy.
happily は副詞なので C になれない。

■ よく使う表現
Keep the room clean.（部屋をきれいにしておきなさい）
Don\'t leave the window open.（窓を開けたままにしないで）
His words made me sad.（彼のことばは私を悲しませた）

⚠ 注意：第5文型を作れる動詞は限られている。call・name・make・keep・find・leave・elect などを覚えておけば、中学受験では十分である。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは彼をトムと呼びます。」を英語にしなさい。',
        wrongAnswer: 'We call Tom him.',
        trapExplanation: '日本語の「彼を トムと」という順が意識にあっても、名前のほうが具体的なので先に置きたくなってしまう。O と C の順番が決まっていることを知らないと入れかえてしまう。',
        correctAnswer: 'We call him Tom.',
        correctExplanation:
          '第5文型は〈V＋O＋C〉の順で、「だれを」が先、「何と」があとになる。We call Tom him. では「トムを彼と呼ぶ」という意味不明の文になる。O ＝ C の関係で、左が呼ばれる相手、右がその呼び名である。',
      },
      {
        question: '次の文の誤りを直しなさい。　The good news made us happily.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: '「私たちを幸せにした」と日本語で「〜に」と訳すので、副詞の形がふさわしく感じられる。動詞のうしろだから副詞、という思いこみが働いている。',
        correctAnswer: 'The good news made us happy.',
        correctExplanation:
          'C の位置に来るのは名詞か形容詞で、副詞は入れない。us ＝ happy というイコールの関係を作るので、形容詞の happy が正しい。happily は「幸せそうに」と動作の様子を表す語なので、ここには置けない。',
      },
    ],
  },

  {
    id: 'eigo_s078',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'SVOC①：call・name 型（〜を…と呼ぶ）',
    description: '呼び名や名前を表す第5文型と、それをたずねる疑問文を身につける',
    order: 578,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'call＋O＋C＝「O を C と呼ぶ」。name＋O＋C＝「O を C と名づける」。',
      'C には名前や呼び名（名詞）が入る。',
      '「英語で何と言いますか」は What do you call 〜 in English?',
      'How ではなく What を使う（× How do you call this?）。',
      '受け身で He is called Ken. という形もよく出る。',
    ],
    sections: [
      {
        heading: 'call と name',
        body: `第5文型の中でも、呼び名や名前を表す形はとくによく出る。

■ call＋O＋C（O を C と呼ぶ）
例）We call him Ken.（私たちは彼をケンと呼びます）
例）My friends call me Yu.（友達は私をユウと呼びます）
例）People call this flower a sunflower.（人々はこの花をひまわりと呼びます）

■ name＋O＋C（O を C と名づける）
例）They named the baby Sakura.（彼らは赤ちゃんをさくらと名づけました）
例）We named our dog Shiro.（私たちは犬をシロと名づけました）

■ C には名前が入る
call や name の C は名詞である。人名や呼び名なので大文字で書き始めることが多い。

■ 受け身の形
「〜と呼ばれている」と言うときは be動詞＋called の形になる。

例）He is called Ken.（彼はケンと呼ばれています）
例）This tower is called Tsutenkaku.（この塔は通天閣と呼ばれています）

★ ポイント：〈call＋人＋呼び名〉の順を、We call him Ken. の一文で丸ごと覚えてしまうとよい。`,
      },
      {
        heading: '「英語で何と言いますか」',
        body: `第5文型をたずねる形で、入試に非常によく出るのが次の文である。

■ 形
What do you call 〜 in English?（〜は英語で何と言いますか）

例）What do you call this flower in English?
　－ We call it a sunflower.（ひまわりと言います）

例）What do you call this in Japanese?
　－ We call it obi.

■ How を使わない
✗ How do you call this in English?
○ What do you call this in English?

日本語の「どう言いますか」につられて How を使ってしまうが、たずねているのは「呼び名（名前そのもの）」なので What を使う。How は「どのように・どんな方法で」をたずねる語である。

■ 答え方
We call it 〜. / It is called 〜. のどちらでもよい。
例）－ It is called a sunflower.

■ 似た形
What is this called in English?（これは英語で何と呼ばれますか）
受け身を使った言い方で、意味は同じである。

⚠ 注意：日本語では「なんて呼ぶの」「どう呼ぶの」のどちらでも言えるが、英語では What しか使えない。ここは書きかえ・選択問題の定番である。`,
      },
    ],
    trapExamples: [
      {
        question: '「この鳥は英語で何と言いますか。」を英語にしなさい。（this bird／in English を使う）',
        wrongAnswer: 'How do you call this bird in English?',
        trapExplanation: '日本語の「どう言いますか」「どう呼びますか」という言い方につられて、「どのように」を表す How を選んでしまう。日本語としてはどちらも自然に言えるのが原因である。',
        correctAnswer: 'What do you call this bird in English?',
        correctExplanation:
          'たずねているのは「呼び名そのもの」なので、名前をたずねる What を使う。How は方法や様子をたずねる語で、呼び名をたずねる文には使えない。〈What do you call ＋ もの ＋ in English?〉の形で丸ごと覚える。',
      },
      {
        question: '「彼らは彼女をエミと呼んでいます。」を英語にしなさい。',
        wrongAnswer: 'They call she Emi.',
        trapExplanation: '「彼女」という日本語から she を選んでしまう。第5文型の O の位置であることを意識していないと、主格のまま置いてしまう。',
        correctAnswer: 'They call her Emi.',
        correctExplanation:
          'call のうしろは目的語（O）の位置なので、代名詞は目的格の her になる。O＝C の関係で her ＝ Emi である。動詞のうしろに来る代名詞は形が変わる、という規則は文型が変わっても同じように働く。',
      },
    ],
  },

  {
    id: 'eigo_s079',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'SVOC②：make・keep・find 型',
    description: '「O を C にする・C のままにしておく」を表す文と、make の二つの用法を区別する',
    order: 579,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'make＋O＋C＝「O を C にする」。The news made me happy.',
      'keep＋O＋C＝「O を C のままにしておく」。Keep the room clean.',
      'find＋O＋C＝「O が C だと分かる」。I found the book easy.',
      'C には形容詞が入ることが多い。副詞は入れない。',
      'make には SVOO（作ってあげる）と SVOC（〜にする）の二つがある。',
    ],
    sections: [
      {
        heading: '三つの動詞の使い方',
        body: `■ make＋O＋C（O を C にする）
例）The news made me happy.（その知らせは私を幸せにした）
例）Music makes me sleepy.（音楽は私をねむくさせる）
例）His words made her sad.（彼のことばは彼女を悲しませた）
例）They made him the captain.（彼らは彼をキャプテンにした）

C には形容詞（happy / sad / sleepy）も名詞（the captain）も入る。

■ keep＋O＋C（O を C のままにしておく）
例）Keep the door closed.（ドアを閉めておきなさい）
例）She keeps her room clean.（彼女は部屋をきれいにしている）
例）Keep the milk cold.（牛乳を冷たいままにしておいて）

■ find＋O＋C（O が C だと分かる）
例）I found the book interesting.（その本はおもしろいと分かった）
例）We found the question easy.（その問題はやさしいと分かった）

■ leave＋O＋C（O を C のままにしておく）
例）Don\'t leave the window open.（窓を開けたままにしないで）

★ ポイント：どの動詞でも、O と C の間に「＝」が入る。me ＝ happy、her room ＝ clean、the book ＝ interesting。`,
      },
      {
        heading: 'make の二つの用法',
        body: `make は第4文型と第5文型の両方を作るので、区別が必要である。

■ 第4文型（SVOO）＝「人に ものを 作ってあげる」
例）My mother made me a cake.
　　me（人）≠ a cake（もの）
　　書きかえ）My mother made a cake for me.

■ 第5文型（SVOC）＝「O を C にする」
例）The song made me happy.
　　me ＝ happy
　　書きかえはできない。

■ 見分け方
うしろの二つの語がイコールになるかどうかを見る。

made me a cake　→ me ＝ a cake?（✗）→ 第4文型
made me happy　→ me ＝ happy?（○）→ 第5文型
made him the captain → him ＝ the captain?（○）→ 第5文型

C が名詞のときは第4文型と見分けにくいので、必ず「＝」を書いて確かめる。

■ C の位置に副詞を置かない
✗ She keeps her room cleanly.
○ She keeps her room clean.
cleanly は「きれいに（動作の様子）」を表す副詞なので、C にはなれない。

⚠ 注意：make・keep・find のうしろに二つの語が並んだら、まずイコールかどうかを確かめる。これだけで第4文型と第5文型を正しく分けられる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。　My sister always keeps her desk cleanly.',
        wrongAnswer: 'そのままで正しい',
        trapExplanation: '「きれいにしておく」と日本語で「〜に」と訳すので、副詞の cleanly がふさわしく感じられる。動詞のうしろに置く語は副詞、という覚え方をしていると必ず引っかかる。',
        correctAnswer: 'My sister always keeps her desk clean.',
        correctExplanation:
          'keep＋O＋C の C には形容詞が入る。her desk ＝ clean というイコールの関係を作るので、形容詞の clean が正しい。cleanly は「きれいに（掃除する）」のように動作の様子を表す副詞で、C にはなれない。',
      },
      {
        question: '次の文の文型を答えなさい。　My mother made me happy.',
        wrongAnswer: '第4文型（SVOO）',
        trapExplanation: 'make＋人＋〜 の形を見て、My mother made me a cake.（作ってくれた）と同じ第4文型だと考えてしまう。make ＝「作る」という訳だけを覚えているのが原因である。',
        correctAnswer: '第5文型（SVOC）',
        correctExplanation:
          'me ＝ happy というイコールの関係が成り立つので第5文型である。第4文型なら me ≠ a cake のようにイコールにならない。make のうしろに二つの語が並んだら、必ず「＝」を書いて確かめる。',
      },
    ],
  },

  {
    id: 'eigo_s080',
    subject: 'eigo',
    examType: 'chugaku',
    title: '文型の総まとめ：SVOO と SVOC の見分け',
    description: '五つの文型を一つの手順で判別できるようにして、この単元を仕上げる',
    order: 580,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '手順①：修飾語（前置詞から始まるかたまり・時の語句）を消す。',
      '手順②：残った要素の数を数える（二つ＝SV、三つ＝SVC か SVO、四つ＝SVOO か SVOC）。',
      '手順③：イコールになるかどうかで最終判断する。',
      'S＝C なら SVC、O＝C なら SVOC。イコールにならなければ SVO・SVOO。',
      'give・buy・send は SVOO、call・make・keep は SVOC を作りやすい。',
    ],
    sections: [
      {
        heading: '三段階の判別手順',
        body: `文型を答える問題は、次の三段階で必ず解ける。

■ 手順①　修飾語を消す
前置詞（in / on / at / to / for / with / of）から始まるかたまり、時を表す語句（every day / yesterday）、様子を表す副詞（very / fast / always）を（　）でくくって消す。

例）My father gave me a watch on my birthday.
→（on my birthday）を消す
→ My father gave me a watch.

■ 手順②　残った要素を数える
主語＋動詞のあとに、いくつ語のかたまりが残っているかを数える。
0個 → 第1文型（SV）
1個 → 第2文型か第3文型
2個 → 第4文型か第5文型

■ 手順③　イコールで判断する
1個のとき　S＝それ なら SVC、ちがえば SVO
2個のとき　前＝後ろ なら SVOC、ちがえば SVOO

My father gave me a watch. → me ＝ a watch?（✗）→ SVOO
We call him Ken. → him ＝ Ken?（○）→ SVOC

★ ポイント：この三段階を機械的に実行すれば、どんな文でも文型を決められる。訳して考えると必ずまちがえる。`,
      },
      {
        heading: '五つの文型の総整理',
        body: `■ 第1文型　SV
例）Birds fly.／I go to school.（to school は M）
動詞のうしろに前置詞なしの名詞がない。

■ 第2文型　SVC（S＝C）
例）He is a doctor.／She looks happy.／He became a teacher.
be動詞、become、look、feel、sound、taste、smell、get、turn。

■ 第3文型　SVO（S≠O）
例）I like dogs.／He plays the piano.／She entered the room.
いちばん多い形。

■ 第4文型　SVOO（O1≠O2）
例）He gave me a book.／She made me a cake.
書きかえ）to（give / send / show / teach / tell）／for（buy / make / cook / get）

■ 第5文型　SVOC（O＝C）
例）We call him Ken.／The news made me happy.／Keep the room clean.
call、name、make、keep、find、leave。

■ 動詞から見当をつける
give・send・show・teach・buy・make・cook が出たら SVOO の可能性が高い。
call・name・keep・find・leave が出たら SVOC の可能性が高い。
make はどちらにもなるので、必ずイコールを確かめる。

⚠ 注意：文型を答える問題では、まず修飾語を消す作業を省かないこと。ここを飛ばすと、SVO を SVOO と答えるようなまちがいが起こる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の文型を答えなさい。　The students made him their leader.',
        wrongAnswer: '第4文型（SVOO）',
        trapExplanation: 'make のうしろに him と their leader という二つの名詞のかたまりが並んでいるので、「彼に指導者を作ってあげた」と読んで第4文型だと考えてしまう。C が名詞のときはとくに見分けにくい。',
        correctAnswer: '第5文型（SVOC）',
        correctExplanation:
          'him ＝ their leader というイコールの関係が成り立つので第5文型である。「彼らは彼を自分たちのリーダーにした」という意味になる。第4文型なら made him a cake のように二つの語がイコールにならない。必ず「＝」を書いて確かめる。',
      },
      {
        question: '次の文の文型を答えなさい。　My aunt sent me a beautiful card last week.',
        wrongAnswer: '第5文型（SVOC）',
        trapExplanation: '動詞のうしろに二つの語が並んでいることだけを見て、第5文型だと決めてしまう。四つの要素があれば SVOC、という覚え方をしていると、イコールの確認をとばしてしまう。',
        correctAnswer: '第4文型（SVOO）',
        correctExplanation:
          'last week は時を表す修飾語なので消す。残った me と a beautiful card は、me ＝ a beautiful card とはならないので第4文型である。書きかえると My aunt sent a beautiful card to me. となり、send が to 型であることも確かめられる。',
      },
    ],
  },
];
