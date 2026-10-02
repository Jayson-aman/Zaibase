import type { Lesson } from './lesson-types';

// 中学受験 英語 ── 問題集に出るのに教科書の単元が無かった項目を補う単元（TAG=gce）。
// 同音異義語／反意語／使役・知覚の動詞／話法／比較の書きかえ／語形を直す問題／used to
// order は 20400 から連番。
export const GAP_GCE_LESSONS: Lesson[] = [
  // ───────────────────────── 1. 同音異義語 ─────────────────────────
  {
    id: 'gap_gce_01',
    subject: 'eigo',
    examType: 'chugaku',
    title: '同音異義語：音が同じでつづりがちがう語',
    description: '「see と sea」のように、読み方が同じでつづりと意味がちがう語を、文の中の働きで書き分ける',
    intro: 'I can see the sea.（私は海が見える）という文では、see と sea は読み方がまったく同じ「スィー」なのに、つづりも意味もちがいます。このように読み方が同じでつづりと意味がちがう語を、同音異義語（どうおんいぎご）といいます。耳で聞くだけでは区別できないので、書くときは文の中の働きを見て選びます。そのコツを身につけましょう。',
    order: 20400,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '同音異義語は、読み方が同じで、つづりと意味がちがう語（see と sea、to・too・two など）。',
      '耳では区別できないので、書くときは「空所の前後の語」と「その語の働き（動詞か名詞か）」で決める。',
      'their（彼らの）は後ろに名詞が続く。they\'re は they are の短縮形。それ以外の「そこに」は there。',
      'to は「〜へ・〜すること」、too は「〜も・〜すぎる」、two は数の 2。',
      'write（書く）と right（正しい・右）、know（知っている）と no（いいえ）、hear（聞こえる）と here（ここに）はよく出る組。',
      'つづりのちがいは昔の発音の名残であり、意味を目で見分けるための役にも立っている。',
      '確かめは「その語を入れて日本語に訳し、意味が通るか」「they are に置きかえられるか」。',
    ],
    sections: [
      {
        heading: '同じ音でちがう語のペアを知る',
        body: `同音異義語（どうおんいぎご）とは、読み方（発音）が同じなのに、つづりと意味がちがう語のことです。入試では、文の空所に正しいつづりの語を入れる問題や、聞こえた音から単語を書く問題で出ます。

■ 2語の組（よく出るもの）
see（見る）／sea（海）　　どちらも「スィー」
know（知っている）／no（いいえ・ない）　　どちらも「ノウ」
write（書く）／right（正しい・右）　　どちらも「ライト」
hear（聞こえる）／here（ここに）　　どちらも「ヒア」
meet（会う）／meat（肉）　　どちらも「ミート」
week（週）／weak（弱い）　　どちらも「ウィーク」
son（むすこ）／sun（太陽）　　どちらも「サン」
new（新しい）／knew（know の過去形）　　どちらも「ニュー」
hour（1時間）／our（私たちの）　　どちらも「アウア」
one（1）／won（win の過去形）　　どちらも「ワン」
wait（待つ）／weight（重さ）　　どちらも「ウェイト」
blue（青い）／blew（blow「ふく」の過去形）　　どちらも「ブルー」

■ 3語の組
to（〜へ）／too（〜も・〜すぎる）／two（2）　　どれも「トゥー」
there（そこに）／their（彼らの）／they're（they are の短縮形）　　どれも「ゼア」
buy（買う）／by（〜のそばに）／bye（さようなら）　　どれも「バイ」

例）I can see the sea from my room.（私の部屋から海が見える）
例）I know the answer.／No, I don't.（私は答えを知っている。／いいえ、知りません）

★ ここがポイント：同音異義語は**読み方が同じでつづりと意味がちがう**語である。耳では区別できないので、書くときは**文の中での働き**を見て書き分ける。`,
      },
      {
        heading: 'なぜ同じ音のちがうつづりがあるのか',
        body: `英語には、同じ音をちがうつづりで書く語がたくさんあります。なぜでしょうか。理由は二つあります。

■ ①つづりは昔の発音を残している
英語のつづりは、昔の読み方をもとに決まりました。know や write の最初の k や w は、昔は実際に読まれていた文字です。その後、読み方だけが変わって音が消え、つづりはそのまま残りました。そのため、いまの音は同じでも、つづりがちがう語がいくつも生まれました。

■ ②つづりがちがうと、目で意味を見分けられる
see と sea が同じつづりだったら、I can see the sea. は読みにくくなります。つづりがちがうおかげで、読む人は目で見て「見る」と「海」を区別できます。つづりのちがいは、意味を伝えるための目印でもあるのです。

■ だから、書くときの考え方
音から選ぶことはできません。かわりに、**その空所に入る語の役割**で選びます。空所の前後を見て、次の三つのどれが入るのかを決めてから、つづりを選びます。
①ものの名前（名詞）が入るのか
②動作（動詞）が入るのか
③数・場所・持ち主のどれかを表すのか

例）I can ( ) the ( ).
　空所1：can のあとには動作の語が来る → see（見る）
　空所2：the のあとにはものの名前が来る → sea（海）
　答え：I can see the sea.

★ ここがポイント：つづりは**昔の発音の名残**であり、意味を目で見分ける役目もある。選ぶときは音ではなく、**空所に入る語の役割**で決める。`,
      },
      {
        heading: 'まぎらわしい組の見分け方（there・their・they\'re／to・too・two）',
        body: `同音異義語の中でも、入試でとくにまちがえやすい組を整理します。

■ there・their・they're
there ＝「そこに」。There is 〜. / There are 〜. の形や、場所を表す。
　例）There is a cat under the table.（テーブルの下にねこがいる）
　例）I went there yesterday.（私はきのうそこへ行った）
their ＝「彼らの・それらの」。あとに名詞が続く。
　例）Their house is near the station.（彼らの家は駅の近くにある）
they're ＝ they are をつづめた形。
　例）They're my friends.（彼らは私の友だちだ）
見分け方：they are に置きかえて意味が通れば they're。あとに名詞が続けば their。それ以外は there。

■ to・too・two
to ＝「〜へ」「〜すること」。あとに場所（to school）か動詞（to play）が続く。
too ＝「〜も」「〜すぎる」。文の終わりや形容詞の前に置く。
　例）I like cats, too.（私もねこが好きだ）
　例）This bag is too heavy.（このかばんは重すぎる）
two ＝数の 2。
　例）I have two brothers.（私には兄弟が 2 人いる）
見分け方：数なら two。「〜も」「〜すぎる」の意味なら too。ほかは to。

■ write・right、hear・here、know・no
write は動作（書く）、right は「正しい」「右」。　例）Write your name here.（ここに名前を書きなさい）
hear は耳に聞こえる、here は場所の「ここ」。　例）I can hear a bird.／Come here.
know は動詞（知っている）、no は「いいえ」「ひとつも〜ない」。　例）I know him.／No, thank you.

★ ここがポイント：**their はあとに名詞が続く、they're は they are に置きかえられる、それ以外が there**。数なら **two**、「〜も・〜すぎる」なら **too**、ほかは **to** と決める。`,
      },
      {
        heading: '例題：空所に入る語を選ぶ',
        body: `次の（　）に入る語を選びます。まず空所の役割を決め、次に候補を当てはめて意味を確かめます。

問1　( ) cat is very cute.（Their / There / They're）
　空所のあとに cat（名詞）が続いている。「彼らの」と持ち主を表す語が入る。
　答え：Their（「彼らのねこはとてもかわいい」）

問2　I can ( ) the birds in the sky.（see / sea）
　can のあとには動作の語が入る。「鳥が見える」なので動詞。
　答え：see

問3　Ken has ( ) sisters.（to / too / two）
　sisters の前に入るのは数。「ケンには姉か妹が 2 人いる」。
　答え：two

問4　( ) in the park now.（There / Their / They're）
　they are に置きかえると They are in the park now.（彼らは今公園にいる）となり、意味が通る。
　答え：They're

問5　She wants to ( ) a letter.（write / right）
　to のあとには動詞が入る。「手紙を書きたい」。
　答え：write

問6　I ( ) the answer.（know / no）
　主語 I のあとには動詞が入る。「私は答えを知っている」。
　答え：know

★ ここがポイント：まず**空所の役割（名詞・動詞・数・持ち主）**を決め、次に**置きかえて意味が通るか**を確かめる。この順番を守ると、音に迷わなくなる。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `答えを書いたあとに、次の四つの手順で確かめます。

■ ①役割をもう一度言う
「ここには動詞が入る」「ここには数が入る」と声に出して言います。その役割と選んだ語が合っているかを見ます。
例）Ken has ( ) sisters. → 数が入る → two。to や too は数ではないので入らない。

■ ②置きかえで確かめる
they're は they are に、their は「彼らの」に置きかえてみます。
例）They're in the park. → They are in the park. ○（意味が通る）
例）They're cat is cute. → They are cat is cute. ×（文にならない）→ Their cat is cute.

■ ③日本語に訳して意味が通るか
選んだ語を入れた文を日本語にして、おかしくないかを読みます。
例）I can sea the birds. →「私は海の鳥たち」？ → 意味が通らない。see に直す。

■ ④つづりを 1 字ずつ見る
write は w から、know は k から書き始めます。昔の発音の名残で読まない文字があるので、書き落としやすいところです。
例）rite ×　→　write ○　／　now ×（意味がちがう）→ know ○

★ ここがポイント：確かめは**役割 → 置きかえ → 日本語訳 → つづり**の順に行う。特に **they are に置きかえる**方法は、there・their・they're の区別にそのまま使える。`,
      },
    ],
    trapExamples: [
      {
        question: '次の（　）に入る語を選びなさい。「( ) is a library near my house.」（Their / There）',
        wrongAnswer: 'Their',
        trapExplanation: '音は同じなので、感覚で選んでしまいやすい。Their か There かは、あとに名詞が続くかどうかで決まるのに、そこを見ていない。',
        correctAnswer: 'There',
        correctExplanation: 'is の前にあって「〜がある」という文をつくる語は there。their は「彼らの」の意味で、あとに名詞が続く（Their house）。ここでは is が続いているので There が入る。',
      },
      {
        question: '「私も公園に行きたいです。」I want to go to the park, ( ).（to / too / two）',
        wrongAnswer: 'to',
        trapExplanation: '文の中に to が何度も出てくるので、つられて to を選んでしまう。文の終わりに置く語の意味を考えていない。',
        correctAnswer: 'too',
        correctExplanation: '「〜も」を表すときは、文の終わりに too を置く。to は「〜へ」や「〜すること」の語で、文の終わりには置かない。two は数なので意味が合わない。',
      },
    ],
  },

  // ───────────────────────── 2. 反意語 ─────────────────────────
  {
    id: 'gap_gce_02',
    subject: 'eigo',
    examType: 'chugaku',
    title: '反対の意味の英語（反意語）：形容詞・動詞をペアで覚える',
    description: '反意語（はんいご）は同じ「ものさし」の両はしにあることを手がかりに、形容詞・動詞・副詞のペアを整理する',
    intro: '「hot の反対の意味の語を書きなさい」という問題は、中学入試の英語でとてもよく出ます。答えは cold ですが、では「short の反対」は何でしょうか。long と答えても tall と答えても、場合によっては正しいのです。反対の意味の語（反意語（はんいご））がどう決まるのかを知ると、ペアで覚えやすくなり、まちがいも減ります。',
    order: 20401,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '反意語は、同じ「ものさし」（温度・長さ・速さ・時刻・気持ちなど）の両はしにある語どうし。',
      '形容詞の例：hot ⇔ cold、new ⇔ old、easy ⇔ difficult、fast ⇔ slow、early ⇔ late、heavy ⇔ light。',
      '動詞の例：open ⇔ close（shut）、come ⇔ go、buy ⇔ sell、start ⇔ finish、win ⇔ lose、borrow ⇔ lend。',
      'ものさしが変わると相手も変わる：short は長さなら long、背の高さなら tall。old は物なら new、人なら young。',
      '「not ＋ 語」は反意語とはかぎらない。not hot は cold ではなく warm かもしれない。',
      '反意語は同じ品詞どうしでペアにする（形容詞には形容詞、動詞には動詞）。',
      '答えたあとは、ペアを逆に読んで元の語にもどるか、文に入れて意味が通るかを確かめる。',
    ],
    sections: [
      {
        heading: '反意語のペアを分けて覚える',
        body: `反意語（はんいご）とは、意味が反対になる語のことです。入試では、「次の語の反対の意味の語を書きなさい」「（　）に反対の意味の語を入れなさい」という形で出ます。品詞ごとに分けると覚えやすくなります。

■ 形容詞（ようすを表す語）
hot（あつい）⇔ cold（つめたい・さむい）
new（新しい）⇔ old（古い）
old（年をとった）⇔ young（わかい）
easy（やさしい）⇔ difficult（むずかしい）
happy（うれしい）⇔ sad（かなしい）
fast（速い）⇔ slow（おそい）
early（早い）⇔ late（おそい）
heavy（重い）⇔ light（軽い）
strong（強い）⇔ weak（弱い）
clean（きれいな）⇔ dirty（よごれた）
full（いっぱいの）⇔ empty（からの）
near（近い）⇔ far（遠い）

■ 動詞（動作を表す語）
open（開ける）⇔ close / shut（閉める）
come（来る）⇔ go（行く）
buy（買う）⇔ sell（売る）
start / begin（始める）⇔ finish / end（終える）
win（勝つ）⇔ lose（負ける）
borrow（借りる）⇔ lend（貸す）
push（押す）⇔ pull（引く）
remember（おぼえている）⇔ forget（わすれる）

■ その他（副詞・前置詞・名詞など）
up ⇔ down／in ⇔ out／before ⇔ after／always ⇔ never／day ⇔ night／question ⇔ answer

例）This bag is heavy, but that bag is light.（このかばんは重いが、あのかばんは軽い）

★ ここがポイント：反意語は**品詞ごと**に、**ペアにして声に出して**覚える。文の形で（This bag is heavy, but that bag is light.）覚えると、使い方も同時に身につく。`,
      },
      {
        heading: 'なぜ反対になるのか：同じものさしの両はし',
        body: `hot の反対が cold だとわかるのは、どうしてでしょうか。理由は、hot と cold が「温度」という同じものさしの両はしにあるからです。

■ ものさしで考える
温度のものさしを横に引くと、左から順に cold（つめたい）、cool（すずしい）、warm（あたたかい）、hot（あつい）と並びます。いちばん端どうしの cold と hot が反意語です。

■ 「まんなか」は反意語ではない
cool や warm は、ものさしのまんなか近くにあります。hot の反対に cool を書いたら、入試ではまちがいになります。反意語は「両はし」の語どうしです。

■ not hot は cold とはかぎらない
「あつくない（not hot）」は、cold かもしれませんが、warm や cool かもしれません。ものさしのどこかが「あつくない」にあたるだけです。だから、not ＋ 語 を反意語として使ってはいけません。

■ ものさしが変わると、相手も変わる
同じ語でも、どのものさしで使われているかで、反対の語がちがってきます。
short（長さ）⇔ long　／　short（背・高さ）⇔ tall
old（物の古さ）⇔ new　／　old（人の年）⇔ young
light（重さ）⇔ heavy　／　light（明るさ）⇔ dark
right（正しい）⇔ wrong　／　right（右）⇔ left

例）My hair is short, but my sister's hair is long.（私の髪は短いが、姉の髪は長い）
例）Ken is short, but his brother is tall.（ケンは背が低いが、兄は背が高い）

★ ここがポイント：反意語は**同じものさしの両はし**にある語どうし。**ものさしが変われば反対の語も変わる**ので、まず「何について言っているのか」を考える。`,
      },
      {
        heading: '品詞をそろえて、文の中で使う',
        body: `反意語を答えるときには、品詞をそろえます。形容詞には形容詞、動詞には動詞を答えます。

■ 品詞をそろえる
× hot ⇔ ice（ice は名詞で、品詞がちがう）
○ hot ⇔ cold（どちらも形容詞）
× buy ⇔ shop（shop は「店」「買い物をする」でペアにならない）
○ buy ⇔ sell（どちらも動詞）

■ 文の形で覚える
反意語は、向かい合う二つの文にすると記憶に残ります。
This box is heavy. / That box is light.
Open the door. / Close the door.
I came here by bus. / I went home by train.
He won the game. / She lost the game.

■ 書きかえに使う
反意語を使うと、意味を変えずに言いかえることができます。
Ken is taller than Tom. ＝ Tom is shorter than Ken.
This question is easy. ＝ This question is not difficult.
ただし、not を使う言いかえは「だいたい同じ」であり、「完全に反対」ではありません。

■ 反対ではない組に注意
learn（学ぶ）と teach（教える）、ask（たずねる）と answer（答える）は、行為が向かい合っているので問題でペアにされることがあります。ただし、短い語で聞かれたら、まず上の「ものさしの両はし」で確かめます。

★ ここがポイント：**品詞をそろえる**。反意語は文にして**向かい合わせ**で覚え、**not ＋ 語は反意語とはかぎらない**ことを忘れない。`,
      },
      {
        heading: '例題：反対の意味の語を答える',
        body: `手順は、①ものさしを考える ②同じ品詞で答える ③文に入れて読む、の三つです。

問1　hot の反対の意味の語を書きなさい。
　ものさしは温度。いちばんはしの反対側は cold。
　答え：cold

問2　heavy の反対の意味の語を書きなさい。
　ものさしは重さ。heavy（重い）の反対は light（軽い）。
　答え：light

問3　early の反対の意味の語を書きなさい。
　ものさしは時刻・時期。early（早い）の反対は late（おそい）。
　答え：late

問4　open の反対の意味の動詞を書きなさい。
　動詞なので、動詞で答える。開ける ⇔ 閉める。
　答え：close（または shut）

問5　My bag is new, but his bag is ( ).（　）に入る語を書きなさい。
　bag（物）の new の反対。物の古さのものさしなので old。
　答え：old（「私のかばんは新しいが、彼のかばんは古い」）

問6　Ken is tall, but Tom is ( ).（　）に入る語を書きなさい。
　背の高さのものさしなので、tall の反対は short。
　答え：short（「ケンは背が高いが、トムは背が低い」）

問7　The shop opens at nine and ( ) at six.（　）に入る語を書きなさい。
　opens の反対の動作。主語が the shop（3人称単数）で現在なので s をつける。
　答え：closes

★ ここがポイント：**ものさし → 品詞 → 文に入れて読む**の順で考える。問7のように、動詞の反意語は**あとの形（s・ed）も合わせる**のを忘れない。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `答えを書いたあとに、次の三つで確かめます。

■ ①逆から読んでもどるか
答えの語の反対を言ってみて、もとの語にもどるかを見ます。
例）hot → cold。cold の反対は hot。○
例）heavy → light。light の反対は heavy（重さのとき）。○
もどらなければ、ものさしがずれている疑いがあります。

■ ②品詞をそろえたか
もとの語が形容詞なら形容詞、動詞なら動詞を書いたかを見ます。
例）open → close は動詞どうし。○　／　open → door は品詞がちがう。×

■ ③文に入れて意味が通るか
My bag is new, but his bag is old.（私のかばんは新しいが、彼のかばんは古い）
「but（けれども）」でつながる前後が対比になっていれば、反対の意味の語が入っています。

■ ④ものさしが二つある語は、問題文から決める
short は、前後の語が hair や rope なら long、前後が人なら tall。light は、weight なら heavy、color や room なら dark。問題文の言葉をヒントに選びます。

★ ここがポイント：確かめは**逆から読んでもどるか**・**品詞**・**文に入れて対比になるか**の三つ。**ものさしが二つある語は問題文から決める**。`,
      },
    ],
    trapExamples: [
      {
        question: '次の（　）に入る語を選びなさい。「Tom is young, but his grandfather is ( ).」（new / old）',
        wrongAnswer: 'new',
        trapExplanation: '「old の反対は new」とだけ覚えていると、new を選んでしまう。ここでは人の年を言っているので、ものさしがちがう。',
        correctAnswer: 'old',
        correctExplanation: '人の年についての young（わかい）の反対は old（年をとった）。new は物が新しいときの反対語。「トムはわかいが、祖父は年をとっている」となる。',
      },
      {
        question: '「I am not hot.（私はあつくない）」は、必ず「I am cold.（私はさむい）」という意味になるか。',
        wrongAnswer: '必ず I am cold. という意味になる。',
        trapExplanation: '「あつくない＝さむい」と思いこんでしまうが、温度のものさしにはまんなかの warm や cool がある。',
        correctAnswer: 'ならない。warm や cool かもしれない。',
        correctExplanation: 'not hot は「あつくない」というだけで、温度が cold とはかぎらない。反意語はものさしの両はしの語（hot と cold）であり、not をつけた形とはちがう。',
      },
    ],
  },

  // ───────────────────────── 3. 使役・知覚の動詞 ─────────────────────────
  {
    id: 'gap_gce_03',
    subject: 'eigo',
    examType: 'chugaku',
    title: '使役・知覚の動詞：make・let・have と see・hear のあとの形',
    description: '「〜させる」「〜するのを見る」を表す動詞のあとに、to のつかない動詞の原形が続く形を整理する',
    intro: 'My mother made me wash the dishes.（母は私に皿を洗わせた）。「洗う」の wash には、to がついていません。「〜するように言う」の tell や「〜してほしい」の want は to がいるのに、make には要らないのはなぜでしょうか。人に何かを「させる」動詞（使役（しえき）の動詞）と、見る・聞くの動詞（知覚（ちかく）の動詞）の形を、理由といっしょに整理します。',
    order: 20402,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      '〈make／let／have ＋ 人 ＋ 動詞の原形〉で「人に〜させる」。make は強制、let は許可、have は「たのんで〜してもらう」。',
      '〈see／hear／watch／feel ＋ 人 ＋ 動詞の原形〉で「人が〜するのを見る・聞く・感じる」。',
      '原形は「最初から最後まで」、〜ing は「している最中」を表す（I saw him cross / crossing the street.）。',
      'この形の動詞のあとには to をつけず、動詞に s・ed・ing もつけない。',
      'want・tell・ask のあとは〈人 ＋ to ＋ 原形〉。to がいるかどうかが見分けのポイント。',
      'make me happy のように、あとに形容詞が来る形（SVOC）とは別。原形が来るのは「させる」の make。',
      '受け身になると to が出てくる（I was made to clean the room.）。',
    ],
    sections: [
      {
        heading: 'make・let・have で「人に〜させる」',
        body: `次の三つの動詞は、あとに〈人 ＋ 動詞の原形〉を置いて、「人に〜させる」という意味を作ります。このような動詞を使役（しえき）の動詞といいます。

■ 形：〈make／let／have ＋ 人 ＋ 動詞の原形〉
動詞の原形とは、s も ed も ing もつかない、辞書にのっている形のことです。

■ 三つの動詞のちがい
make ＝ 無理にでもさせる（強制（きょうせい））
　例）My mother made me wash the dishes.（母は私に皿を洗わせた）
let ＝ してもいいと許す（許可（きょか））
　例）My father let me use his computer.（父は私が自分のパソコンを使うのを許してくれた）
have ＝ たのんで〜してもらう・当然のこととして〜させる
　例）I had my brother carry my bag.（私は弟にかばんを運んでもらった）
　例）The teacher had us read the story aloud.（先生は私たちにその話を音読させた）

■ 動詞の形に注意
原形のままにします。人のあとの動詞に s や ed をつけてはいけません。
○ She made him laugh.（彼女は彼を笑わせた）
× She made him laughs. ／ × She made him laughed.

■ 日本語でのつかまえ方
「〜に…させる」「〜が…するのを許す」と日本語で言えるときは、この形を使います。

★ ここがポイント：**make は強制、let は許可、have は「たのんでしてもらう」**。どの動詞のあとも**〈人 ＋ 原形〉**で、to はつけない。`,
      },
      {
        heading: 'see・hear・watch で「〜するのを見る・聞く」',
        body: `見る・聞く・感じるという感覚を表す動詞（知覚（ちかく）の動詞）も、同じ形を作ります。

■ 形：〈see／hear／watch／feel ＋ 人 ＋ 動詞の原形〉
　例）I saw him cross the street.（私は彼が道を渡るのを見た）
　例）I heard her sing in the next room.（私は彼女がとなりの部屋で歌うのが聞こえた）
　例）We watched the children play soccer.（私たちは子どもたちがサッカーをするのを見ていた）
　例）I felt the house shake.（私は家がゆれるのを感じた）

■ 原形と〜ing のちがい
知覚の動詞のあとには、原形のほかに〜ing の形も置けます。
　I saw him cross the street.　　→ 渡りはじめから渡りおわるまでを見た
　I saw him crossing the street.　→ 渡っている最中を見た
原形は「ひとまとまりの動作を、最初から最後まで」、〜ing は「その動作の途中」と考えます。

■ help も同じ形
help ＋ 人 ＋ 動詞（to があってもなくてもよい）
　例）He helped me carry the box.（彼は私が箱を運ぶのを手伝ってくれた）
　　　He helped me to carry the box.（同じ意味）

★ ここがポイント：see・hear・watch・feel も**〈人 ＋ 原形〉**。**原形は「最初から最後まで」、〜ing は「している最中」**と使い分ける。`,
      },
      {
        heading: 'なぜ to がつかないのか／want・tell・ask とのちがい',
        body: `want や tell のあとには to がつくのに、make や see のあとにはつきません。なぜでしょうか。

■ to は「これから向かう」しるし
to は、もともと「〜に向かう」という意味の語です。
　I want to go.（行きたい）＝ まだ行っていない、これから行く方向へ気持ちが向かう
　He told me to wait.（待つように言った）＝ 待つことは、これからすること
want・tell・ask は、あとで行われる動作をあとに続けるので、to が必要です。

■ させる・見る・聞くは、動作が「同時」に起きる
make・let・have や see・hear では、させる（許す・見る）という動作と、人がする動作がほぼ同時に起こります。「これから向かう」必要がないので、to を置かず、動詞の原形だけを置きます。これは覚えやすくするための考え方ですが、見分けるときの助けになります。

■ 並べて整理する
〈人 ＋ to ＋ 原形〉をとる：want・tell・ask（望む・言う・たのむ）
〈人 ＋ 原形〉をとる：make・let・have・see・hear・watch・feel（させる・許す・見る・聞く）

■ make のあとに形容詞が来る形とのちがい
The news made me happy.（その知らせは私をうれしくさせた）のように、make のあとに形容詞が来る形（SVOC）もあります。あとの語が形容詞（happy）なら「〜の状態にする」、動詞の原形（laugh）なら「〜させる」です。
　The movie made me cry.（その映画は私を泣かせた）

■ 受け身になると to が出てくる
　My mother made me clean my room.
　→ I was made to clean my room.（私は部屋をそうじさせられた）
受け身では、to がつくので注意します。

★ ここがポイント：**to は「これから向かう」しるし**。want・tell・ask は to がいり、**make・let・have・see・hear は to がいらない**。ただし**受け身になると to が出る**。`,
      },
      {
        heading: '例題：形を決めて文を完成させる',
        body: `手順は、①動詞が make・let・have・see・hear のどれかを見る ②人のあとの動詞を原形にする ③意味（強制・許可・たのむ）を確かめる、の三つです。

問1　「先生は私たちに教室をそうじさせた。」
　The teacher made us ( ) the classroom.
　make ＋ 人 ＋ 原形。clean にする。cleaned や to clean ではない。
　答え：clean

問2　「母は私が犬を飼うのを許してくれた。」
　My mother ( ) me have a dog.
　「許す」なので let。後ろの have は原形のまま。
　答え：let

問3　「私は鳥が木で鳴くのが聞こえた。」
　I heard a bird ( ) in the tree.
　heard のあとは原形。鳴いている最中をとらえるなら singing も使える。
　答え：sing

問4　「私は弟にその箱を運んでもらった。」
　I ( ) my brother carry the box.
　「たのんでしてもらう」は have。過去の文なので had にする。
　答え：had

問5　次の文のまちがいを直しなさい。
　My father made me to wash his car.
　make のあとには to を置かない。
　答え：My father made me wash his car.

★ ここがポイント：**make・let・have・see・hear のあとは、〈人 ＋ 原形〉**。問5のように、**to をつけてしまうのが典型的なまちがい**である。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `答えを書いたあとに、次の四つで確かめます。

■ ①動詞はなにか
make・let・have・see・hear・watch・feel のどれかなら、〈人 ＋ 原形〉の形。want・tell・ask なら〈人 ＋ to ＋ 原形〉の形。

■ ②人のあとの動詞を見る
to・s・ed・ing がついていないか（原形か）を見ます。
例）She made him laughs. ×　→　She made him laugh. ○

■ ③意味を確かめる
・無理にでもさせた → make
・許した → let
・たのんで／当然のこととしてしてもらった → have
・見た・聞いた → see・hear・watch
例）「父は私が行くのを許した」→ let。make にすると「無理に行かせた」になり、意味が変わる。

■ ④時制は動詞のほうで表す
過去の文では、make・let・have は made・let・had にします。let は過去形も let で、形が変わらない。
例）My father let me go.（let は現在でも過去でも同じ形。前後の文で時を判断する）

★ ここがポイント：確かめは**動詞の種類 → 人のあとが原形か → 意味 → 時制**の順。**let は過去形も let**であることも覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文のまちがいを直しなさい。「Our teacher let us to go home early.」',
        wrongAnswer: 'まちがいはない（to go でよい）',
        trapExplanation: 'allow us to go（allow は to がいる）などの形と混ざってしまい、let のあとにも to をつけてしまう。',
        correctAnswer: 'Our teacher let us go home early.',
        correctExplanation: 'let のあとは〈人 ＋ 原形〉で、to はつけない。「先生は私たちが早く帰るのを許した」。',
      },
      {
        question: '次の（　）に入る形を書きなさい。「My mother told me ( ) the dishes.」（wash を適する形にする）',
        wrongAnswer: 'wash',
        trapExplanation: 'make や let の形（人のあとは原形）と同じだと思ってしまう。tell は to のいる動詞であることを見落としている。',
        correctAnswer: 'to wash',
        correctExplanation: 'tell は「言う」で、あとで行う動作をあとに続けるので〈人 ＋ to ＋ 原形〉の形になる。「母は私に皿を洗うように言った」。',
      },
    ],
  },

  // ───────────────────────── 4. 話法 ─────────────────────────
  {
    id: 'gap_gce_04',
    subject: 'eigo',
    examType: 'chugaku',
    title: '直接話法と間接話法：人のことばを伝える書きかえ',
    description: '人のことばを引用符でそのまま書く形（直接話法）を、自分のことばで伝える形（間接話法）に直す手順を学ぶ',
    intro: 'Tom said, "I am busy."（トムは「ぼくはいそがしい」と言った）。これを友だちに伝えるとき、「トムはいそがしいと言っていたよ」と言いますね。英語でも、人のことばをそのまま書く形（直接話法（ちょくせつわほう））と、自分のことばで伝える形（間接話法（かんせつわほう））があります。書きかえるときに何が、なぜ変わるのかを、順を追って学びます。',
    order: 20403,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '直接話法は引用符 "…" でことばをそのまま書く形。間接話法は that や if を使って、自分のことばで伝える形。',
      '書きかえで変わるのは、①引用符とコンマ ②代名詞（I→he など） ③動詞の時制（現在→過去） ④時や場所を表す語の四つ。',
      '時制は一つ過去にずらす：am・is→was、do→did、will→would、can→could。',
      '時・場所の語：now→then、today→that day、tomorrow→the next day、yesterday→the day before、here→there、this→that。',
      'said to ＋ 人 は told ＋ 人 に変える（said me は誤り）。',
      'yes/no の疑問文は ask ＋ 人 ＋ if ＋ 主語 ＋ 動詞。疑問詞のある疑問文は疑問詞のあとを〈主語 ＋ 動詞〉の語順にする。',
      '「地球は太陽のまわりをまわる」のような変わらない事実は、時制を変えなくてよい。',
    ],
    sections: [
      {
        heading: '人のことばを伝える二つの方法',
        body: `人が言ったことばを伝える方法は二つあります。

■ 直接話法（ちょくせつわほう）
言ったことばを、そのまま引用符 " " の中に入れて書く形です。
　Tom said, "I am busy."（トムは「ぼくはいそがしい」と言った）

■ 間接話法（かんせつわほう）
言ったことばを、伝える人のことばに直して書く形です。引用符は使わず、that でつなぎます（that は省略できます）。
　Tom said (that) he was busy.（トムはいそがしいと言った）

■ 書きかえで変わる四つのところ
①引用符とコンマをとり、that でつなぐ
②代名詞を、伝える人から見た形に変える（I → he）
③動詞の形を、一つ過去にずらす（am → was）
④時や場所を表す語を変える

■ 動詞の形の変わり方
am・is → was／are → were
do・does（一般動詞の現在形）→ 過去形（like → liked）
will → would／can → could
過去形は had ＋ 過去分詞に変わる（参考：Tom said, "I was busy." → Tom said (that) he had been busy.）

■ 時や場所を表す語
now → then（そのとき）／today → that day（その日）
tomorrow → the next day（その次の日）／yesterday → the day before（その前の日）
here → there（そこに）／this → that

★ ここがポイント：書きかえで変わるのは**代名詞・動詞の時制・時や場所の語**の三つ。動詞は**一つ過去にずらし**、said to は **told** に変える。`,
      },
      {
        heading: 'なぜ代名詞・時制・時の語が変わるのか',
        body: `「変える」と覚えるだけでなく、なぜ変わるのかを知ると、まちがえにくくなります。

■ ①代名詞が変わる理由：見ている人が変わるから
Tom said, "I am busy." の I は、ことばを言った Tom 本人のことです。ところが、このことばを伝えるわたしにとっては、Tom は he（彼）です。そこで I を he に直します。
代名詞は、いつも「伝える人から見た呼び方」にそろえます。
　"you" は、言われた相手を指す。相手が伝える自分自身なら、me になる。

■ ②時制を過去にずらす理由：言ったのは過去のことだから
Tom が言ったのは、過去のできごとです。伝えるわたしは、あとから過去の話として伝えます。そのため、中身の動詞も一つ過去にします。
　"I am busy." （言ったときは現在）→ he was busy（伝えるときから見ると過去）

■ ③時の語が変わる理由：言った日と伝える日がちがうから
「明日（tomorrow）」と言ったのは、言った日の翌日のことです。伝える日からは、もう「明日」ではないかもしれません。そこで、言った日を基準にして the next day（その次の日）と言いかえます。today → that day、yesterday → the day before も同じ考え方です。

■ ④said to が told になる理由
said to me は「私に言った」ですが、間接話法では〈told ＋ 人〉の形で相手を示すのがふつうなので、told me を使います。said me は誤りです。

■ 変えなくてよい場合
いつでも成り立つ事実は、時制を変えません。
　He said, "The earth goes around the sun."
　→ He said that the earth goes around the sun.

★ ここがポイント：代名詞は**伝える人から見た形**に、時制は**過去の話として一つ過去に**、時の語は**言った日を基準に**変える。変わらない事実は**時制を変えなくてよい**。`,
      },
      {
        heading: '疑問文と命令文の伝え方',
        body: `ふつうの文（言いきりの文）のほかに、疑問文と命令文も伝えることがあります。

■ yes/no で答える疑問文：ask ＋ 人 ＋ if ＋ 主語 ＋ 動詞
　She asked me, "Do you like music?"
　→ She asked me if I liked music.（彼女は私に音楽が好きかとたずねた）
　・伝える動詞は asked。
　・if（〜かどうか）でつなぐ。whether でもよい。
　・if のあとは、ふつうの文の語順（主語 ＋ 動詞）。Do は消える。
　・動詞は過去にずらす（like → liked）。

■ what・where などのある疑問文：疑問詞をそのまま使う
　Ken asked me, "Where do you live?"
　→ Ken asked me where I lived.（ケンは私にどこに住んでいるかとたずねた）
　・疑問詞（where）はそのまま。
　・あとは〈主語 ＋ 動詞〉の語順にして、do は消える。
　・you は、言われた相手の「私」に合わせて I にする。

■ 命令文：told／asked ＋ 人 ＋ to ＋ 原形
　He said to me, "Open the door."
　→ He told me to open the door.（彼は私にドアを開けるように言った）
　・やさしくたのむ命令文（please つき）は asked を使う。
　・否定の命令文は not to ＋ 原形。　He told me not to be late.
　くわしい形は、「目的語の形③：不定詞だけをとる動詞」で学んだ。

■ 疑問文を伝えるとき、?（クエスチョンマーク）は使わない
間接話法にした文は、文の終わりを「.」にします。

★ ここがポイント：疑問文は**疑問詞か if のあとを〈主語 ＋ 動詞〉の語順**にして、**do は消す**。命令文は **told／asked ＋ 人 ＋ to ＋ 原形**にする。`,
      },
      {
        heading: '例題：直接話法を間接話法に直す',
        body: `手順は、①伝える動詞を決める ②代名詞を直す ③時制を直す ④時や場所の語を直す ⑤疑問文は語順を直す、の順です。

問1　Tom said to me, "I will visit you tomorrow."
　①said to me → told me
　②I → he（言ったのは Tom）、you → me（言われた相手は伝えるわたし）
　③will → would
　④tomorrow → the next day
　答え：Tom told me (that) he would visit me the next day.

問2　She said, "I am busy now."
　①said はそのまま
　②I → she
　③am → was
　④now → then
　答え：She said (that) she was busy then.

問3　Ken asked me, "Where do you live?"
　①asked はそのまま
　②you → I
　③疑問詞 where のあとは〈主語 ＋ 動詞〉、do は消えて live → lived
　答え：Ken asked me where I lived.

問4　Mika said, "I like this song."
　②I → she　③like → liked　④this → that
　答え：Mika said (that) she liked that song.

問5　Yuki asked me, "Can you swim?"
　yes/no の疑問文なので if を使う。can → could、you → I。
　答え：Yuki asked me if I could swim.

★ ここがポイント：**伝える動詞 → 代名詞 → 時制 → 時の語 → 疑問文は語順**の順に直す。問3のように、**疑問詞のあとは〈主語 ＋ 動詞〉**で do は消える。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `書きかえたあとに、次の六つで確かめます。

■ ①引用符とコンマが残っていないか
" " とその前のコンマは、間接話法では使いません。

■ ②伝える動詞は合っているか
said to ＋ 人 → told ＋ 人。疑問文なら asked。said me は誤りです。

■ ③代名詞は伝える人から見た形か
I や you がそのまま残っていないかを見ます。だれが言って、だれに言ったのかを、いちど確かめます。

■ ④動詞は一つ過去にずれているか
am → was、do → did、will → would、can → could。

■ ⑤時や場所の語は変わっているか
tomorrow が残っていたら the next day に。now は then に。

■ ⑥疑問文なら、語順と ? を確かめる
where I lived のように〈疑問詞 ＋ 主語 ＋ 動詞〉。文末は「.」。
例）Ken asked me where did I live? ×　→　Ken asked me where I lived. ○

★ ここがポイント：確かめは**引用符 → 動詞 → 代名詞 → 時制 → 時の語 → 疑問文の語順**の順。特に **where did I live? のような語順**は典型的な失点になる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を間接話法に直しなさい。「Ken asked me, "Where do you live?"」',
        wrongAnswer: 'Ken asked me where did I live?',
        trapExplanation: '疑問文だから did を残して、疑問文の形のままにしてしまう。間接話法では、疑問詞のあとはふつうの文の語順になる。',
        correctAnswer: 'Ken asked me where I lived.',
        correctExplanation: '疑問詞 where のあとを〈主語 ＋ 動詞〉の語順にして do を消し、動詞を過去（lived）にする。文末は「.」にする。',
      },
      {
        question: '次の文を間接話法に直しなさい。「He said to me, "I am tired."」',
        wrongAnswer: 'He said me that he was tired.',
        trapExplanation: 'said to me の to を落として、said me のまま that をつないでしまう。said のあとには、人を直接つづけることはできない。',
        correctAnswer: 'He told me that he was tired.',
        correctExplanation: '相手を示すときは said to ではなく told を使い、〈told ＋ 人 ＋ that ＋ 文〉の形にする。am は過去の was に、I は he に変わる。',
      },
    ],
  },

  // ───────────────────────── 5. 比較の書きかえ ─────────────────────────
  {
    id: 'gap_gce_05',
    subject: 'eigo',
    examType: 'chugaku',
    title: '比較の書きかえ：同じ意味を表す三つの言い方',
    description: '「いちばん〜」の文を、than any other や No other を使って、意味を変えずに書きかえる',
    intro: 'Lake Biwa is the largest lake in Japan.（琵琶湖は日本でいちばん大きい湖だ）。この文は、Lake Biwa is larger than any other lake in Japan. とも、No other lake in Japan is as large as Lake Biwa. とも言いかえられます。入試の書きかえ問題では、この三つの言い方を行き来できるかが問われます。なぜ other が必要なのか、なぜ lake は単数形なのかを、理由から確かめましょう。',
    order: 20404,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      '最上級の文は、〈比較級 ＋ than any other ＋ 単数名詞〉と〈No other ＋ 単数名詞 ＋ is as ＋ 原級 ＋ as〉に書きかえられる。',
      'any other のあとの名詞は単数形（any other lake。lakes は誤り）。',
      'other がないと、自分自身も比べる相手にふくまれてしまうので、必ず other をつける。',
      'A is taller than B ＝ B is not as tall as A ＝ B is shorter than A。',
      '低いほうを主語にするときは、not as ～ as または反対の意味の語（shorter）を使う。',
      'A is as old as B ＝ A and B are the same age（同じ程度）。',
      '書きかえたら、数字を入れて順位が同じかどうかを確かめる。',
    ],
    sections: [
      {
        heading: '「いちばん」を三つの言い方で言う',
        body: `比較の文は、同じ意味を別の形で書くことができます。入試では、「ほぼ同じ意味になるように（　）に入る語を書きなさい」という書きかえ問題で出ます。

■ 最上級の文を三つの形で言う
① Lake Biwa is the largest lake in Japan.（最上級）
　（琵琶湖は日本でいちばん大きい湖だ）
② Lake Biwa is larger than any other lake in Japan.（比較級 ＋ than any other ＋ 単数名詞）
　（琵琶湖は日本のほかのどの湖よりも大きい）
③ No other lake in Japan is as large as Lake Biwa.（No other ＋ 単数名詞 ＋ as ～ as）
　（日本のほかのどの湖も、琵琶湖ほど大きくない）
③の形は、No other lake in Japan is larger than Lake Biwa. とも書けます。

■ 上と下を入れかえて言う
Ken is taller than Tom.（ケンはトムより背が高い）
＝ Tom is not as tall as Ken.（トムはケンほど背が高くない）
＝ Tom is shorter than Ken.（トムはケンより背が低い）

■ 同じ程度を言う
Aya is as old as Mika.（アヤはミカと同じ年だ）
＝ Aya and Mika are the same age.

★ ここがポイント：最上級は**〈比較級 ＋ than any other ＋ 単数名詞〉**と**〈No other ＋ 単数名詞 ＋ as ～ as〉**で言いかえられる。低いほうを主語にするときは、**not as ～ as か反対の意味の語**を使う。`,
      },
      {
        heading: 'なぜ any other で、なぜ単数なのか',
        body: `書きかえの形は、理由をつかむと忘れなくなります。

■ なぜ other が必要なのか
「琵琶湖は日本でいちばん大きい」は、日本のほかの湖ぜんぶより大きい、という意味です。ここで other をつけずに、
　Lake Biwa is larger than any lake in Japan.
と書くと、「日本のどの湖よりも大きい」となり、「日本の湖」の中に琵琶湖自身がふくまれてしまいます。つまり「琵琶湖は琵琶湖より大きい」という、ありえない意味になります。そこで、琵琶湖をのぞく意味の other を入れて any other lake とします。

■ なぜ単数形（lake）なのか
any は「どれか 1 つを取り出しても」という意味です。ほかの湖を 1 つずつ取り出して、琵琶湖と比べるイメージなので、あとの名詞は単数形になります。
　○ any other lake　／　× any other lakes

■ なぜ低いほうは not as ～ as になるのか
as ～ as は「同じくらい」の形です。Tom is as tall as Ken. は「トムはケンと同じくらい背が高い」という意味です。これに not をつけると、「同じくらいではない（ケンのほうが高い）」になります。そこで、低いほうの人を主語にして、
　Tom is not as tall as Ken.
と言うと、「ケンのほうが高い」ことを表せます。

■ 反対の意味の語を使う方法もある
taller の反対の意味の語は shorter です。Ken is taller than Tom. を、主語を入れかえて Tom is shorter than Ken. とすれば、同じ意味になります。

★ ここがポイント：**other がないと自分自身がふくまれてしまう**ので、any other とする。**any は「どれか 1 つ」なので単数**。**not as ～ as は「同じくらいではない」**という形である。`,
      },
      {
        heading: 'データで確かめる：書きかえの手順',
        body: `書きかえた文が正しいかどうかは、数字を入れて確かめることができます。

■ 例：3人の身長
Ken 160cm／Tom 150cm／Sam 140cm
・Ken is taller than Tom.（160 ＞ 150）
・Tom is taller than Sam.（150 ＞ 140）
・Ken is the tallest of the three.（3人の中でいちばん）
・Tom is not as tall as Ken.（150 は 160 ほど高くない）
・Sam is not as tall as Tom.（140 は 150 ほど高くない）
・Sam is the shortest of the three.（3人の中でいちばん低い）

■ 最上級の使い分け
・場所や集まりを言うときは in：in Japan、in my class
・3つ以上の人やものの中から選ぶときは of：of the three、of all

■ 書きかえの手順
①もとの文で、だれ（何）がどの順位かを数字で決める。
②主語をどちらにするかを決める。
③主語が上位なら〈比較級 ＋ than〉、下位なら〈not as ～ as〉か反対の語を使う。
④最上級を言いかえるときは、any other ＋ 単数名詞か No other ＋ 単数名詞を使う。

■ 形容詞・副詞の形をそろえる
tall → taller → the tallest／large → larger → the largest／heavy → heavier → the heaviest
as ～ as の間は、原級（もとの形）。as taller as ではない。

★ ここがポイント：書きかえは**数字で順位を決める → 主語を決める → 形を選ぶ**の順。**as ～ as の間は原級**、**最上級の言いかえは単数名詞**を忘れない。`,
      },
      {
        heading: '例題：（　）に入る語を答える',
        body: `手順は、①順位を決める ②主語を決める ③形を選ぶ、の順です。

問1　Mt. Fuji is the highest mountain in Japan.
　＝ Mt. Fuji is higher than ( ) ( ) mountain in Japan.
　「ほかのどの」は any other。mountain は単数形のまま。
　答え：any other

問2　Mt. Fuji is the highest mountain in Japan.
　＝ No ( ) mountain in Japan is higher than Mt. Fuji.
　「ほかの」は other。
　答え：other

問3　Tom is not as tall as Ken.
　＝ Ken is ( ) than Tom.
　トムはケンほど高くないので、ケンのほうが高い。
　答え：taller

問4　This bag is lighter than that bag.
　＝ That bag is ( ) ( ) light as this bag.
　あのかばんのほうが重いので、「ほど軽くない」と言う。as ～ as の間は原級の light。
　答え：not as

問5　Aya is as old as Mika.
　＝ Aya and Mika are the ( ) age.
　同じ年なので same。
　答え：same

★ ここがポイント：**any other ＋ 単数名詞**、**No other ＋ 単数名詞**、**not as ～ as**、**the same** の四つが書きかえで使う中心の形。問4のように、**主語が下位なら not as ～ as** になる。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `書きかえた文が、もとの文と同じ意味かどうかを、次の三つで確かめます。

■ ①数字を入れて、順位が変わらないか読む
Ken 160cm／Tom 150cm のとき、
　Ken is taller than Tom.（160 ＞ 150）
　Tom is not as tall as Ken.（150 は 160 ほど高くない）
どちらも「ケンのほうが高い」で同じ順位になるか、1 文ずつ数字で読み返します。

■ ②形のきまりを見る
・any other のあとは単数名詞か（any other boy ○、boys ×）
・other が入っているか（any boy は自分も入る）
・as ～ as の間は原級か（as tall as ○、as taller as ×）
・than と as をとりちがえていないか（taller than ○、taller as ×）

■ ③反対の意味の語で言いかえて確かめる
Ken is taller than Tom. ＝ Tom is shorter than Ken.
主語を入れかえて、反対の意味の語にすると同じ意味になる。これで自分の書きかえをもう一度チェックできます。

★ ここがポイント：確かめは**数字で順位を読む → 形のきまり → 反対の語での言いかえ**の三つ。**any other の other と単数形**は、とくに見落としやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '「Ken is the tallest boy in his class.」とほぼ同じ意味になるように（　）に入る語を書きなさい。Ken is taller than any ( ) ( ) in his class.',
        wrongAnswer: 'other boys',
        trapExplanation: 'ほかの男の子たちなので、複数形 boys が自然だと思ってしまう。any のあとは、ひとりずつ取り出して比べる意味なので単数になる。',
        correctAnswer: 'other boy',
        correctExplanation: 'any は「どれか 1 つ」の意味で、あとの名詞は単数形になる。any other boy が正しい。',
      },
      {
        question: '「Lake Biwa is the largest lake in Japan.」を Lake Biwa is larger than any lake in Japan. と書きかえた。まちがいを指摘しなさい。',
        wrongAnswer: 'まちがいはない（larger than で比べているから）',
        trapExplanation: '比較級の than を使っているので正しく見えるが、any lake の中に琵琶湖自身が入ってしまうことに気づかない。',
        correctAnswer: 'any のあとに other がない。Lake Biwa is larger than any other lake in Japan. にする。',
        correctExplanation: 'other がないと「琵琶湖は琵琶湖より大きい」という意味になってしまう。琵琶湖をのぞくために、any other lake と言う。',
      },
    ],
  },

  // ───────────────────────── 6. 語形を直す問題 ─────────────────────────
  {
    id: 'gap_gce_06',
    subject: 'eigo',
    examType: 'chugaku',
    title: '（　）内の語を正しい形に直す：空所の前後から形を決める',
    description: '（　）内の語を文に合う形に直す問題で、空所の前後の語と時を表す語から必要な形を決める手順を学ぶ',
    intro: '「I (go) to the library yesterday.」のように、（　）の中の語を文に合う形に直して書く問題は、中学入試の英語でとてもよく出ます。go をそのまま書いてもまちがいで、went と書かなければなりません。どの形にするかは、じつは空所のまわりにある「合図」で決まります。その合図の見つけ方を、順番に学びます。',
    order: 20405,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      '形を決める合図は、①時を表す語（yesterday・every day）②空所の直前の語（to・can・enjoy）③主語の数（he・they）の三つ。',
      '主語が三人称単数で現在の文では、動詞に s／es をつける（plays・studies）。',
      'yesterday・last 〜・ago があれば過去形（went・bought・wrote）。',
      'to・can・will・must・do/does/did のあとは原形。enjoy・finish・前置詞のあとは〜ing。',
      'have／has のあとは過去分詞。am・is・are のあとは〜ing（している）か過去分詞（される）。',
      'two・three・many のあとは複数形（women・children）。than があれば比較級、the ... of/in があれば最上級。',
      '答えが 2 語になる場合もある（to be、most interesting）。つづりの変化も確かめる。',
    ],
    sections: [
      {
        heading: '直す前に「何の形か」を決める',
        body: `（　）内の語を直す問題は、いきなり形を書かず、まず「どんな形が必要か」を決めます。決める手がかりは、空所のまわりにあります。

■ 空所の前後で形が決まる
・主語が he・she・it など単数で、現在の文 → 動詞に s／es（plays・studies）
・yesterday・last night・〜 ago がある → 過去形（went・bought）
・can・will・must・do/does/did のあと → 原形
・to のあと → 原形（want to be）
・enjoy・finish・stop・前置詞（of・about）のあと → 〜ing（enjoy talking）
・am・is・are のあと → 〜ing（している）／過去分詞（される）／形容詞
・have・has のあと → 過去分詞（has finished）
・two・three・many のあと → 複数形（women・children・boxes）
・than のある文 → 比較級（bigger）
・the ... in／of のある文 → 最上級（the biggest）

■ 2語になることもある
問題の中には「2語になる場合もあります」と書いてあるものがあります。
　I want (be) a pilot. → to be（2語）
　This is the (interesting) book of the three. → most interesting（2語）

■ 答えを書くとき
形を直して書き、もとの語は残さない。（　）の中の語そのものではなく、直した形を答えにします。

★ ここがポイント：形を決める合図は**時を表す語・直前の語・主語の数**の三つ。2語になることもあるので、**文末まで読んで**から答える。`,
      },
      {
        heading: 'なぜ形が変わるのか：英語は「合図」で形を決める',
        body: `go のままではなぜだめなのでしょうか。

■ 辞書の形のままでは使えない
英語の動詞は、辞書にのっている形（原形）だけでは、文の中で使えないことが多いのです。時（過去か現在か）、主語の数（ひとりか、複数か）、前にある語（to や can など）によって、形が変わります。

■ 三つの合図
①時の語：yesterday があれば、過去の話。go を went にする。
②直前の語：to のあとなら原形、enjoy のあとなら〜ing。
③主語の数：he・she・it なら、現在形の動詞に s をつける。

■ enjoy には〜ing、want には to がつくのはなぜか
・enjoy・finish・stop のあとは〜ing：すでに起きている、または現実にしていることを表す。
　例）I enjoyed talking with her.（彼女と話して楽しかった）
・want・hope・decide のあとは to ＋ 原形：これからすること、まだしていないことを表す。
　例）I want to be a pilot.（パイロットになりたい）
「これから」の動作には to がつく、と考えると、見分けやすくなります。

■ もう一つの合図：文の意味
am・is・are のあとが〜ing なら「している」、過去分詞なら「される」です。
　The boy is playing.（している）／ The window is broken.（こわされている）
　訳してみて、意味が合うほうを選びます。

★ ここがポイント：形は**時・直前の語・主語**で決まる。**enjoy・finish は〜ing（すでにしていること）**、**want・hope・decide は to（これからすること）**と考える。`,
      },
      {
        heading: 'つづりの変え方の確認',
        body: `形を決めたら、つづりを正しく変えます。つづりのまちがいも失点になります。

■ 三人称単数現在の s／es
play → plays／study → studies（y を i に変えて es）／watch → watches／go → goes／have → has

■ 過去形
規則動詞：play → played／study → studied／stop → stopped（p を重ねる）
不規則動詞：go → went／buy → bought／write → wrote／see → saw／eat → ate

■ 〜ing
play → playing／write → writing（e をとる）／run → running（n を重ねる）

■ 過去分詞
finish → finished／study → studied／write → written／see → seen／eat → eaten

■ 比較級と最上級
big → bigger → biggest（g を重ねる）／heavy → heavier → heaviest（y を i に）／large → larger → largest（e だけ足す）
長い語：interesting → more interesting → most interesting

■ 複数形
child → children／woman → women／box → boxes／city → cities／watch → watches

■ 注意：不規則変化は覚えるしかない
go → went → gone、write → wrote → written のように、形が大きく変わる動詞は、過去形と過去分詞を組にして覚えておきます。

★ ここがポイント：つづりは**y → i、重ねる、e をとる、es をつける**の四つの型で確かめる。**不規則動詞は過去形と過去分詞を組**で覚える。`,
      },
      {
        heading: '例題：形を直して書く',
        body: `手順は、①空所の前後と時を表す語を見る ②必要な形を決める ③つづりを確かめる、の順です。

問1　Ken (play) soccer every Sunday.
　主語は Ken（単数）で、every Sunday は習慣を表す現在の文。動詞に s をつける。
　答え：plays

問2　We saw two (woman) at the station.
　two のあとなので複数形。woman の複数形は women（不規則）。
　答え：women

問3　She (write) a letter last night.
　last night があるので過去形。write の過去形は wrote。
　答え：wrote

問4　This box is (heavy) than that one.
　than があるので比較級。heavy は y を i に変えて er をつける。
　答え：heavier

問5　I enjoyed (talk) with her.
　enjoy のあとは〜ing。talk に ing をつける。
　答え：talking

問6　I want (be) a pilot.
　want のあとは to ＋ 原形（2語）。
　答え：to be

問7　He has (finish) his homework.
　has のあとは過去分詞。finish に ed をつける。
　答え：finished

問8　This is the (interesting) book of the three.
　the ... of the three なので最上級。interesting は長い語なので most をつける（2語）。
　答え：most interesting

★ ここがポイント：**時の語・直前の語・主語の数**で形を決める。問6・問8のように**2語になる**ことも多いので、答えを書く前に文全体を読み直す。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `書いた答えを、次の五つで確かめます。

■ ①入れた形で文を声に出して読む
Ken plays soccer every Sunday. のように、できあがった文全体を読み、おかしい所がないかを確かめます。

■ ②日本語に訳して意味が合うか
「ケンは毎週日曜日にサッカーをする」と訳せれば、plays で合っています。過去の話なのに現在形、という食いちがいはここで見つかります。

■ ③合図を指でさして確認する
「yesterday があるから過去形」「enjoy のあとだから〜ing」「two のあとだから複数形」のように、どの合図でその形にしたのかを、自分に説明できるかを見ます。説明できない答えは、まちがいの可能性があります。

■ ④つづりを 1 字ずつ見る
heavier の y が i に変わっているか、running の n が重なっているか、women の o が e に変わっているか、のように、つづりの型で確かめます。

■ ⑤2語になる答えを見落としていないか
「2語になる場合もあります」と書いてある問題では、to be や most interesting のように、2語の答えがないかを見直します。

★ ここがポイント：確かめは**文を読む → 日本語訳 → 合図を説明する → つづり → 2語**の順。**合図を説明できない答えは疑う**。`,
      },
    ],
    trapExamples: [
      {
        question: '次の（　）内の語を適する形にしなさい。「I enjoyed (play) tennis with Ken.」',
        wrongAnswer: 'to play',
        trapExplanation: '「〜すること」を表すときは to ＋ 原形と覚えていて、enjoy のあとでも to をつけてしまう。enjoy は〜ing だけをあとにとる動詞である。',
        correctAnswer: 'playing',
        correctExplanation: 'enjoy・finish・stop のあとは〜ing をとる。「ケンとテニスをして楽しんだ」。want や hope などの to をとる動詞とは区別する。',
      },
      {
        question: '次の（　）内の語を適する形にしなさい。「She (go) to the library yesterday.」',
        wrongAnswer: 'goes',
        trapExplanation: '主語が She（三人称単数）なので s をつけるとだけ考え、yesterday という時の語を見落としている。',
        correctAnswer: 'went',
        correctExplanation: 'yesterday があるので過去の文。go の過去形は不規則に変わって went になる。過去形では、主語が三人称単数でも s はつかない。',
      },
    ],
  },

  // ───────────────────────── 7. used to ─────────────────────────
  {
    id: 'gap_gce_07',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'used to 〜：「以前は〜したものだ」と今とのちがい',
    description: '「以前は〜だった（今はちがう）」を表す used to の意味と形、would や be used to とのちがいを整理する',
    intro: 'I used to play soccer every weekend, but now I play tennis.（以前は毎週末サッカーをしていたが、今はテニスをしている）。この used to は、今はもうしていないことを表します。ところが I am used to getting up early. のように、同じ used to でもまったく意味のちがう形があります。「以前は〜」の used to と、まぎらわしい形のちがいを、理由とともに整理します。',
    order: 20406,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      '〈used to ＋ 動詞の原形〉は「以前は〜したものだ（習慣）」「以前は〜だった（状態）」。今はそうではない。',
      '動作にも状態にも使える（used to play、used to be、used to live）。',
      '否定・疑問は did を使い、used は use にもどる（didn\'t use to、Did you use to 〜?）。',
      '過去形（played）は「過去にした」だけ。used to は「今とはちがう」という対比がふくまれる。',
      'would も「以前は〜したものだ」を表すが、動作だけで、状態（be・live・like）には使えない。',
      '〈be動詞 ＋ used to ＋ 名詞／〜ing〉は「〜に慣れている」。まったく別の形。',
      '〈be動詞 ＋ used to ＋ 原形〉は「〜するために使われる」（受け身）。',
    ],
    sections: [
      {
        heading: 'used to の意味と形',
        body: `used to は、今とくらべて「以前はそうだった」ということを表す言い方です。

■ 形：〈used to ＋ 動詞の原形〉
used の読み方は「ユースト」です。to のあとは、動詞の原形が続きます。

■ 意味
①以前は〜したものだ（過去の習慣）
　I used to play soccer every weekend, but now I play tennis.
　（以前は毎週末サッカーをしていたが、今はテニスをしている）
②以前は〜だった（過去の状態）
　There used to be a small shop at the corner.（角には以前、小さな店があった）
　He used to be shy.（彼は以前はおとなしかった）
　She used to live in Osaka.（彼女は以前、大阪に住んでいた）
どちらも、今はそうではない、という意味をふくんでいます。

■ 否定文・疑問文
否定文や疑問文では did を使い、used は use にもどります。
　I didn't use to like fish.（私は以前は魚が好きではなかった）
　Did you use to walk to school?（あなたは以前は歩いて通学していましたか）
　— Yes, I did. / No, I didn't.

■ よく使われる語句
when I was a child（子どものころ）、years ago（何年も前に）、but now（でも今は）

★ ここがポイント：used to は**「以前は〜、でも今は〜ではない」**という対比を表す。**否定・疑問は did を使い、used は use にもどる**。`,
      },
      {
        heading: 'なぜ過去形ではなく used to なのか／would とのちがい',
        body: `「以前は〜した」なら、過去形（played）でも言えそうです。なぜ used to を使うのでしょうか。

■ 過去形は「過去にした」だけを言う
I played soccer. は、過去にサッカーをした、という事実を言うだけです。今もしているのか、やめたのかは、この文からはわかりません。

■ used to は「今とはちがう」まで伝える
I used to play soccer. と言うと、「以前はしていたが、今はしていない」という意味まで伝わります。今と過去を比べて、変化を表したいときに使います。

■ would とのちがい
would も「以前は〜したものだ」（過去の習慣）を表すことができます。
　When I was a child, I would play soccer every weekend.
　= When I was a child, I used to play soccer every weekend.
ただし would は、動作のくり返しだけに使います。状態を表す動詞（be・live・have・like）には使えません。
　○ I used to be shy.（私は以前はおとなしかった）
　× I would be shy.
　○ There used to be a shop here.（ここには以前、店があった）
　× There would be a shop here.
動作の習慣ならどちらでも言えますが、状態は used to だけです。また、would は when I was a child のように、いつのことかを示す語句といっしょに使うのがふつうです。

■ 選び方のまとめ
・動作のくり返し（習慣）→ used to でも would でもよい
・状態（be・live・like など）→ used to だけ
・今との対比をはっきり示したい → used to

★ ここがポイント：**過去形は「過去にした」だけ**、**used to は「今とはちがう」まで伝える**。**状態には would を使えない**。`,
      },
      {
        heading: 'まぎらわしい形：be used to と used to',
        body: `used to と形が似ていて、意味がまったくちがう言い方があります。

■ ①〈used to ＋ 動詞の原形〉：以前は〜したものだ
　I used to get up late.（私は以前、おそく起きていた）

■ ②〈be動詞 ＋ used to ＋ 名詞／〜ing〉：〜に慣れている
　I am used to getting up early.（私は早起きに慣れている）
　He is used to the cold weather.（彼は寒い天気に慣れている）
　この used は「慣れている」という意味の形容詞で、to は「〜に」の意味の前置詞です。前置詞のあとなので、動詞は〜ing の形になります。

■ ③〈be動詞 ＋ used to ＋ 動詞の原形〉：〜するために使われる
　This knife is used to cut bread.（このナイフはパンを切るために使われる）
　これは use（使う）の受け身で、to は「〜するために」の意味です。

■ 見分け方
1. used の前に be動詞（am・is・are・was）があるか
　なければ ① の used to（以前は〜）。
2. be動詞があるとき、to のあとが〜ing か名詞なら ② の「慣れている」
3. be動詞があるとき、to のあとが原形なら ③ の「〜するために使われる」

■ 三つを並べて確かめる
I used to get up early.（以前は早起きしていた）
I am used to getting up early.（早起きに慣れている）
A bell is used to wake people up.（ベルは人を起こすために使われる）

★ ここがポイント：**used の前に be動詞があるか**、**to のあとが原形か〜ingか**で見分ける。「以前は」「慣れている」「使われる」の三つの意味を区別する。`,
      },
      {
        heading: '例題：used to を使って文を完成させる',
        body: `手順は、①今とはちがう話か ②be動詞があるか ③to のあとは原形か〜ingか、の順です。

問1　「私は以前、毎日ここを走っていました（今は走っていません）。」
　I ( ) ( ) run here every day.
　「以前は〜」で今はしていないので used to。run は原形。
　答え：used to

問2　「このへんには以前、大きな木がありました。」
　There ( ) ( ) be a big tree around here.
　状態を表す「以前は〜があった」。would は使えないので used to。
　答え：used to

問3　「あなたは以前、歩いて通学していましたか。」
　( ) you ( ) ( ) walk to school?
　疑問文は did を使い、used は use にもどる。
　答え：Did / use to

問4　「私は早起きに慣れています。」
　I am ( ) ( ) getting up early.
　be動詞があり、あとが〜ing なので「〜に慣れている」。
　答え：used to

問5　「このナイフはパンを切るために使われる。」
　This knife is ( ) ( ) cut bread.
　be動詞があり、to のあとが原形（cut）なので「〜するために使われる」。
　答え：used to

★ ここがポイント：問1・問2・問4・問5は、**答えはどれも used to という同じ2語**だが、**意味は be動詞の有無と to のあとの形**で決まる。問3のように**疑問文では use to**。`,
      },
      {
        heading: '確かめ（検算）のしかた',
        body: `答えを書いたあとに、次の四つで確かめます。

■ ①「今とはちがう」話かを考える
「以前は〜、今は〜ない」と日本語で言えるなら、used to ＋ 原形です。
例）私は以前ここで泳いだ（今は泳がない）→ I used to swim here.

■ ②be動詞があるかを見る
be動詞（am・is・are・was・were）があれば、used to は「以前は」の意味ではありません。「慣れている」か「使われる」のどちらかです。

■ ③to のあとの形を見る
・原形 → 以前は〜した（be動詞なし）／〜するために使われる（be動詞あり）
・〜ing や名詞 → 〜に慣れている

■ ④疑問文・否定文では use to になっているか
Did you used to 〜? や didn't used to 〜 のように、did を使うのに used のままにしていないかを見ます。
例）Did you use to walk to school? ○　／　Did you used to walk to school? ×

★ ここがポイント：確かめは**「今とはちがう」か → be動詞があるか → to のあとの形 → 疑問文・否定文の use** の順。**did があるのに used のまま**は、よくあるまちがい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文のまちがいを直しなさい。「I am used to get up early.」（私は早起きに慣れています）',
        wrongAnswer: 'まちがいはない（used to のあとは原形だから）',
        trapExplanation: '「used to のあとは原形」と覚えているため、be動詞があっても get をそのまま使ってしまう。be used to のときの to は前置詞で、あとは〜ing になる。',
        correctAnswer: 'I am used to getting up early.',
        correctExplanation: '〈be動詞 ＋ used to〉は「〜に慣れている」の意味で、to は前置詞。前置詞のあとの動詞は〜ing の形にする。',
      },
      {
        question: '次の文のまちがいを直しなさい。「She would be shy when she was young.」（彼女は若いころ、おとなしかった）',
        wrongAnswer: 'まちがいはない（would も「以前は」を表すから）',
        trapExplanation: 'would も used to と同じ意味だと覚えているため、be を使った文にもそのまま使ってしまう。would は動作のくり返しにしか使えない。',
        correctAnswer: 'She used to be shy when she was young.',
        correctExplanation: 'be は状態を表す動詞なので would は使えない。状態の「以前は〜だった」は used to を使って表す。',
      },
    ],
  },
];
