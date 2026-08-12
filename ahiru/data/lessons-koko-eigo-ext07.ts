import type { Lesson } from './lesson-types';

// 高校受験 英語「比較」拡張ユニット（35セッション：koko_eigo_s221〜koko_eigo_s255）
// order は 721〜755。
// 構成：比較級・最上級のつくり方(6)／不規則変化(3)／原級比較 as〜as(5)／
//       比較級＋than と強調(5)／最上級と in・of(4)／one of the 最上級(3)／
//       比較級を使った最上級の言いかえ(4)／比較を含む慣用表現(5)
// 図解は3者の大小関係を barChart で示し、同じデータを原級・比較級・最上級の
// 3通りで言いかえられることを見せる箇所を中心に付けてある（35課中15課）。
export const kokoEigoExt07Lessons: Lesson[] = [
  // ───────── 1. 比較級・最上級のつくり方（s221〜s226） ─────────
  {
    id: 'koko_eigo_s221',
    subject: 'eigo',
    examType: 'koko',
    title: '比較の三つの形：原級・比較級・最上級',
    description: '同じ形容詞が tall / taller / tallest と姿を変えるしくみと、それぞれが使われる文の形をつかむ',
    intro:
      '背の順で並ぶとき、「同じくらい」「あの子より高い」「一番高い」の三通りの言い方をしますよね。英語も同じで、比べ方が変わると形容詞そのものの形が変わります。tall／taller／tallest。この三つを、どんな文の形とセットで使うかまで覚えるのが比較の第一歩です。',
    order: 721,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '原級＝もとの形（tall）。as ~ as で「同じくらい」を表す。',
      '比較級＝-er の形（taller）。than とセットで「…より〜」。',
      '最上級＝-est の形（tallest）。the をつけて「いちばん〜」。',
      '比較級には the をつけない（× the taller than）。最上級には the をつける。',
      '形容詞だけでなく副詞（fast, early など）も同じように変化する。',
      '同じ内容を原級・比較級・最上級の三通りで言いかえられるようにしておく。',
    ],
    sections: [
      {
        heading: '三つの形と、それぞれの文の型',
        body: `英語では、二つ以上のものを比べるとき形容詞・副詞の形が変わる。変化のしかたは三段階である。

■ 原級（もとの形）
そのままの形。「同じくらい〜だ」というときは as と as ではさむ。
例）Ken is as tall as Tom.（ケンはトムと同じくらい背が高い）
　　This book is as easy as that one.（この本はあの本と同じくらいやさしい）

■ 比較級（-er の形）
二つを比べて「…より〜だ」というとき。あとに than（…よりも）を続ける。
例）Tom is taller than Ken.（トムはケンより背が高い）
　　My bag is heavier than yours.（私のかばんはあなたのより重い）

■ 最上級（-est の形）
三つ以上の中で「いちばん〜だ」というとき。前に the をつける。
例）Bob is the tallest of the three.（ボブは3人の中でいちばん背が高い）
　　This is the newest computer in the room.（これは部屋でいちばん新しいコンピュータだ）

★ ポイント：than が見えたら比較級、the と in／of が見えたら最上級、as にはさまれていたら原級。文の形と語形はいつもセットで動く。

⚠ 注意：比較級に the をつけてはいけない。× Tom is the taller than Ken. ○ Tom is taller than Ken.（ただし of the two がつく場合だけは例外で、これは後のセッションで扱う）`,
        figureId: 'lf_kokoeigoext07_221',
      },
      {
        heading: '同じ事実を三通りで言う',
        body: `入試では「同じ内容を別の形で書きかえなさい」という問題が必ず出る。だから最初から、一つの事実を三通りで言う練習をしておくとよい。

ケン152cm、トム160cm、ボブ168cm という事実を英語にしてみる。

①比較級で
　Tom is taller than Ken.（トムはケンより背が高い）
　Bob is taller than Tom.（ボブはトムより背が高い）

②最上級で
　Bob is the tallest of the three.（ボブが3人でいちばん背が高い）
　Ken is the shortest of the three.（ケンが3人でいちばん背が低い）

③原級（否定）で
　Ken is not as tall as Tom.（ケンはトムほど背が高くない）
　Tom is not as tall as Bob.（トムはボブほど背が高くない）

■ 三つの関係
「A is not as ~ as B.」は「B is 比較級 than A.」と同じ意味になる。not as ~ as は「〜ほど…ない」であって「〜と同じでない」ではない点に注意する。

★ ポイント：数値のわかる表やグラフが問題文に出たら、まず「だれが一番か」「だれとだれが同じか」を確認してから英文を作る。語形よりも先に、事実の整理をする。

例）Ken is 152 cm tall. Bob is 168 cm tall. → Bob is 16 centimeters taller than Ken.（差を表す語は比較級の前に置く）`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。Tom is （　） than Ken.（tall を適切な形に）',
        wrongAnswer: 'the taller',
        trapExplanation:
          '「いちばん」でなくても、比べる文にはとりあえず the が要ると思いこんでしまう。最上級で the を使う練習をした直後ほど起こりやすい。',
        correctAnswer: 'taller',
        correctExplanation:
          'than がある文は比較級。比較級に the はつけない。the がつくのは最上級（the tallest）のときである。「than があれば the なし」と対にして覚える。',
      },
      {
        question: '日本語に合う英文を選びなさい。「ケンはトムほど背が高くない」ア Ken is not as tall as Tom. イ Ken is not as taller as Tom.',
        wrongAnswer: 'イ Ken is not as taller as Tom.',
        trapExplanation:
          '「〜ほど…ない」という比べる意味があるので、比較級を使うはずだと考えてしまう。as と as の間に taller を入れてしまうミスは非常に多い。',
        correctAnswer: 'ア Ken is not as tall as Tom.',
        correctExplanation:
          'as ~ as にはさむのは必ず原級（もとの形）である。not as tall as で「〜ほど背が高くない」。これは Tom is taller than Ken. と同じ内容になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s222',
    subject: 'eigo',
    examType: 'koko',
    title: '-er / -est のつけ方①：そのまま付ける語と e で終わる語',
    description: '多くの短い語は -er / -est をそのまま付ける。e で終わる語は -r / -st だけ付けることを確認する',
    intro:
      'tall は taller、large は larger。よく見ると large には e がもともとあるので、付け足したのは r 一文字だけです。つづりのルールはたった数種類しかありませんが、入試の書きかえ問題では一文字のミスが即失点になります。まずは一番多い型から確実にしましょう。',
    order: 722,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '基本：短い語は -er / -est をそのまま付ける（tall→taller→tallest）。',
      'e で終わる語は -r / -st だけ付ける（large→larger→largest, nice→nicer→nicest）。',
      'large, nice, wide, late, fine, safe, close はすべて e 型。',
      'つづりを間違えやすい語：× largeer × niceest。e を二つ書かない。',
      '同じ語形変化は形容詞にも副詞にも起こる（late→later→latest）。',
    ],
    sections: [
      {
        heading: 'そのまま -er / -est を付ける語',
        body: `比較級・最上級のつくり方でいちばん多いのが、語尾にそのまま -er / -est を付ける型である。ふつう一音節（母音のかたまりが一つ）の短い語がこれにあたる。

例）tall － taller － tallest（背が高い）
　　short － shorter － shortest（背が低い・短い）
　　old － older － oldest（古い・年上の）
　　young － younger － youngest（若い）
　　long － longer － longest（長い）
　　high － higher － highest（高い）
　　fast － faster － fastest（速く・速い）
　　hard － harder － hardest（難しい・熱心に）
　　小さめの二音節語でも -er 型のものがある：clever － cleverer － cleverest、quiet － quieter － quietest

■ 例文で確認する
This bridge is longer than that one.（この橋はあの橋より長い）
Mt. Fuji is the highest mountain in Japan.（富士山は日本でいちばん高い山だ）
Ken runs faster than Tom.（ケンはトムより速く走る）※fast は副詞でも同じ形

★ ポイント：fast, hard, early, late は形容詞にも副詞にも使われるが、変化のしかたは同じ。副詞の最上級では the を省くこともある（Ken runs fastest in his class.）。

⚠ 注意：長さや高さの差を言うときは「差＋比較級」の順にする。
例）This bridge is 20 meters longer than that one.（この橋はあの橋より20メートル長い）`,
      },
      {
        heading: 'e で終わる語は -r / -st だけ',
        body: `語尾が e で終わる語は、すでに e があるので -er / -est をまるごと付けると e が二つ並んでしまう。そこで -r / -st だけを付ける。

例）large － larger － largest（大きい）
　　nice － nicer － nicest（すてきな）
　　wide － wider － widest（幅が広い）
　　late － later － latest（遅い・最新の）
　　fine － finer － finest（すばらしい）
　　safe － safer － safest（安全な）
　　close － closer － closest（近い）
　　simple － simpler － simplest（簡単な）

■ 例文
Box B is larger than Box A.（箱Bは箱Aより大きい）
Box C is the largest of the three.（箱Cは3つの中でいちばん大きい）
Box A is not as large as Box B.（箱Aは箱Bほど大きくない）

同じ事実を、比較級・最上級・原級の三通りで言いかえられることを、ここでも確認しておく。

⚠ 注意：つづりの誤り × largeer × largeest × niceer。e はひとつだけである。書きかえ問題では、意味が合っていてもつづりを間違えれば×になる。

★ ポイント：ここまでの二つの型（そのまま／e で終わる）で、短い形容詞のかなりの部分をカバーできる。次のセッションで、y で終わる語と子音字を重ねる語という残り二つの型を扱う。`,
        figureId: 'lf_kokoeigoext07_222',
      },
    ],
    trapExamples: [
      {
        question: 'large の最上級を書きなさい。',
        wrongAnswer: 'largeest',
        trapExplanation:
          '「最上級は -est を付ける」というルールをそのまま当てはめ、もともとある e を消さずに書いてしまう。発音が変わらないので気づきにくい。',
        correctAnswer: 'largest',
        correctExplanation:
          'e で終わる語には -st だけを付ける（large + st = largest）。同じように nice → nicest、late → latest、wide → widest。e で終わる語を見たら「-r / -st だけ」と反応できるようにする。',
      },
      {
        question: '（　）内の語を適切な形にしなさい。This road is （wide） than that one.',
        wrongAnswer: 'more wide',
        trapExplanation:
          'wide は d と e が続いて長い語に見えるため、more を付ける型だと勘ちがいする。文字数ではなく音節数で判断することを知らないと起こるミス。',
        correctAnswer: 'wider',
        correctExplanation:
          'wide は一音節の語なので -r を付けて wider にする。more を付けるのは beautiful, difficult, important のように音節が三つ以上ある長い語である。文字の見た目ではなく「音のかたまりの数」で判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s223',
    subject: 'eigo',
    examType: 'koko',
    title: '-er / -est のつけ方②：y → i と子音字を重ねる語',
    description: 'busy→busier、big→bigger など、つづりが変わる二つの型を条件つきで整理する',
    intro:
      'busy は busier、big は bigger。片方は y が i に変わり、もう片方は g が二つになります。似ているようで条件がまったく違い、条件を取りちがえると slow が slower ではなく × slowwer になってしまいます。変わる語と変わらない語の境目を、はっきりさせておきましょう。',
    order: 723,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '〈子音字＋y〉で終わる語は y を i に変えて -er / -est（busy→busier→busiest）。',
      '〈母音字＋y〉の語は y のまま（gray→grayer）。early は 子音字r＋y なので earlier。',
      '〈短母音＋子音字1つ〉で終わる語は最後の子音字を重ねる（big→bigger→biggest）。',
      '子音字を重ねるのは hot, big, sad, thin, fat など少数。slow, long, high は重ねない。',
      'y→i の型は形容詞にも副詞にも起こる（early→earlier→earliest）。',
    ],
    sections: [
      {
        heading: '〈子音字＋y〉は y を i に変える',
        body: `語尾が y で終わる語は、y の直前の文字を見る。直前が子音字（a・i・u・e・o 以外）なら、y を i に変えてから -er / -est を付ける。

例）busy － busier － busiest（忙しい）
　　easy － easier － easiest（やさしい）
　　happy － happier － happiest（幸せな）
　　early － earlier － earliest（早い・早く）
　　heavy － heavier － heaviest（重い）
　　pretty － prettier － prettiest（かわいい）
　　hungry － hungrier － hungriest（空腹の）
　　angry － angrier － angriest（怒った）
　　dirty － dirtier － dirtiest（汚い）

■ 例文
This question is easier than that one.（この問題はあの問題よりやさしい）
My mother is the busiest in my family.（母は家族でいちばん忙しい）
Ken gets up earlier than his sister.（ケンは姉より早く起きる）

■ y の直前が母音字なら変えない
gray － grayer － grayest（灰色の）
※ y の前が a なので y のまま。同じ理由で、動詞の play が played、stay が stayed になるのと同じ考え方である。

★ ポイント：この y → i の変化は、三単現（study → studies）や過去形（carry → carried）とまったく同じ条件で起こる。「子音字＋y のときだけ i に変わる」と一本化して覚えるとよい。`,
      },
      {
        heading: '〈短母音＋子音字1つ〉は子音字を重ねる',
        body: `語尾が「短く発音する母音字1つ＋子音字1つ」で終わる語は、最後の子音字を重ねてから -er / -est を付ける。

例）big － bigger － biggest（大きい）
　　hot － hotter － hottest（暑い・熱い）
　　sad － sadder － saddest（悲しい）
　　thin － thinner － thinnest（うすい・やせた）
　　fat － fatter － fattest（太った）
　　wet － wetter － wettest（ぬれた）

■ 重ねない語との違い
long（母音字が o 一つでも、子音字が ng と二つ）→ longer
high（母音字が i と gh の組み合わせで長く発音する）→ higher
slow（w の前が ow という母音のかたまり）→ slower
great（母音字が ea と二つ）→ greater
cool（母音字が oo と二つ）→ cooler

■ 例文
Today is hotter than yesterday.（今日は昨日より暑い）
August is the hottest month of the year.（8月は一年でいちばん暑い月だ）
This bag is bigger than mine.（このかばんは私のより大きい）

⚠ 注意：× hoter × biger のように重ね忘れる誤り、逆に × slowwer × longger のように重ねすぎる誤りの両方が出る。重ねるのは big / hot / sad / thin / fat / wet など、実際に出てくるのはごく少数なので、この語群だけ覚えてしまえばよい。

★ ポイント：この規則も、動詞の -ing 形（run → running、swim → swimming）と同じ条件である。別の単元と結びつけると記憶が定着しやすい。`,
      },
    ],
    trapExamples: [
      {
        question: 'early の比較級を書きなさい。',
        wrongAnswer: 'more early',
        trapExplanation:
          'early は -ly で終わるので「-ly の副詞は more を付ける」というルールを当てはめてしまう。slowly → more slowly と同じだと考えるのが原因。',
        correctAnswer: 'earlier',
        correctExplanation:
          'early は -ly で終わるが、もとから一語の短い語であって「形容詞＋ly」でできた副詞ではない。子音字 r＋y なので y を i に変えて earlier とする。同じ例外に late（→later）、fast（→faster）、hard（→harder）がある。',
      },
      {
        question: '（　）内の語を適切な形にしなさい。This river is （long） than that one.',
        wrongAnswer: 'longger',
        trapExplanation:
          'big → bigger、hot → hotter と練習した直後だと、短い語はすべて最後の文字を重ねると思いこんでしまう。',
        correctAnswer: 'longer',
        correctExplanation:
          '子音字を重ねるのは〈短母音＋子音字1つ〉で終わる語だけ。long は語尾が n と g の子音字二つなので重ねず、そのまま -er を付けて longer。great、cool、slow なども重ねない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s224',
    subject: 'eigo',
    examType: 'koko',
    title: 'more / most 型：長い語の比較級・最上級',
    description: 'beautiful, difficult, important など長い語は more / most を前に置くことを、代表語とともに覚える',
    intro:
      'beautiful に -er を付けて beautifuler とは言いません。言いにくいからです。英語には「長い語は語尾をいじらず、前に more をそえる」という方針があり、どの語がそれに当たるかは、ほぼ決まったメンバーです。頻出の語を丸ごと覚えるのが最短ルートになります。',
    order: 724,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '音節が三つ以上の長い語は more ~ / the most ~ の形にする。',
      '頻出：beautiful, difficult, important, interesting, popular, expensive, useful, famous, careful。',
      '-ly で終わる副詞は more / most 型（slowly→more slowly、carefully→more carefully）。ただし early は例外。',
      'more を付ける語に -er を重ねない（× more taller、× more easier）。',
      '最上級は the most ~。the を落とさない。',
    ],
    sections: [
      {
        heading: 'more / most を使う語',
        body: `音節（母音のかたまり）が三つ以上ある長い語は、語尾を変えず前に more（比較級）／the most（最上級）を置く。

例）beautiful － more beautiful － the most beautiful（美しい）
　　difficult － more difficult － the most difficult（難しい）
　　important － more important － the most important（重要な）
　　interesting － more interesting － the most interesting（おもしろい）
　　popular － more popular － the most popular（人気のある）
　　expensive － more expensive － the most expensive（高価な）
　　useful － more useful － the most useful（役に立つ）
　　famous － more famous － the most famous（有名な）
　　careful － more careful － the most careful（注意深い）
　　wonderful － more wonderful － the most wonderful（すばらしい）

■ 例文
Bag B is more expensive than Bag A.（かばんBはかばんAより高い）
Bag C is the most expensive of the three.（かばんCは3つの中でいちばん高い）
Bag A is not as expensive as Bag B.（かばんAはかばんBほど高くない）

★ ポイント：この三文は同じ値段の事実を三通りで表している。書きかえ問題はこの関係をそのまま問う。

⚠ 注意：more は「もっと」という副詞の意味も持つが、比較級を作るときの more は語形の一部だと考える。だから more と -er を同時に使ってはいけない。× more easier × more taller は典型的な誤りである。`,
        figureId: 'lf_kokoeigoext07_224',
      },
      {
        heading: '-ly の副詞と、判断のしかた',
        body: `形容詞に -ly を付けてできた副詞は、ほぼすべて more / most 型になる。

例）slowly － more slowly － most slowly（ゆっくり）
　　carefully － more carefully － most carefully（注意深く）
　　easily － more easily － most easily（簡単に）
　　quickly － more quickly － most quickly（すばやく）
　　beautifully － more beautifully － most beautifully（美しく）

■ 例文
Please speak more slowly.（もっとゆっくり話してください）
Ken listened to the teacher more carefully than Tom.（ケンはトムより注意深く先生の話を聞いた）

■ 例外に注意
early は -ly で終わっているが、形容詞に -ly を付けてできた語ではないので earlier / earliest となる。fast, hard, late, soon も短い語なので -er / -est 型（faster, harder, later, sooner）。

■ 副詞の最上級の the
副詞の最上級では the を省略できる。
例）Ken runs (the) fastest of the four.（ケンは4人の中でいちばん速く走る）
形容詞の最上級では the を落とさない。
例）Ken is the fastest runner in his class.

★ ポイント：迷ったら「その語を口に出して、音のかたまりが三つ以上あるか」を確かめる。in-ter-est-ing は四つなので more 型、eas-y は二つで -er 型（easier）である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適切な形にしなさい。This book is （interesting） than that one.',
        wrongAnswer: 'more interestinger',
        trapExplanation:
          '「比較級には -er を付ける」というルールと「長い語には more を付ける」というルールを両方使ってしまう。二重比較級とよばれる典型的な誤り。',
        correctAnswer: 'more interesting',
        correctExplanation:
          'more を付ける語は語尾を変えない。more interesting でひとまとまりの比較級である。逆に -er を付ける語には more を付けない（× more taller）。どちらか一方だけを使う。',
      },
      {
        question: '日本語に合うように英文を完成させなさい。「これは3枚の中でいちばん有名な絵です」This is （　） famous picture of the three.',
        wrongAnswer: 'most',
        trapExplanation:
          '「最上級は most」と覚えているため、the を書き忘れる。日本語の「いちばん」に the にあたる語がないので落としやすい。',
        correctAnswer: 'the most',
        correctExplanation:
          '形容詞の最上級には the が必要である。the most famous picture でひとまとまり。空所が一つでも the most と入れる問題は多いので、most を見たら the とセットで書く習慣をつける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s225',
    subject: 'eigo',
    examType: 'koko',
    title: '-er 型か more 型か：見分け方と要注意語',
    description: '音節数による判断の目安と、どちらの形も使う語・まぎらわしい語を整理する',
    intro:
      'useful は use-ful で二音節なのに more useful、pretty も二音節なのに prettier。二音節の語はどちらの型もあり、ここでつまずく人がとても多いところです。丸暗記に頼らずにすむ「語尾で判断する」コツを身につけて、初めて見る語にも対応できるようにしましょう。',
    order: 725,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '一音節の語はほぼ -er / -est（tall, big, long, nice）。',
      '三音節以上の語はほぼ more / most（beautiful, important, interesting）。',
      '二音節の語は分かれる。-y, -er, -le, -ow で終わる語は -er 型（easy, clever, simple, narrow）。',
      '-ful, -ous, -ing, -ed, -ive で終わる二音節語は more 型（useful, famous, boring, tired, active）。',
      'good / bad / many / little などは不規則変化で、どちらの型でもない。',
    ],
    sections: [
      {
        heading: '音節数による三段構え',
        body: `-er 型か more 型かは、原則として「音節（母音のかたまり）の数」で決まる。

■ 一音節 → -er / -est
tall, short, big, small, long, high, old, new, fast, hard, nice, large, wide, hot, cold, warm, cool, strong, weak, rich, poor, deep, dark, bright
例）This room is brighter than that one.

■ 三音節以上 → more / most
beautiful（beau-ti-ful）、important（im-por-tant）、difficult（dif-fi-cult）、interesting、expensive、popular、exciting、wonderful、dangerous
例）Soccer is more popular than tennis in this school.

■ 二音節 → 語尾で判断する
-y で終わる：easy, busy, happy, early, heavy, pretty, angry, hungry → -er 型（easier）
-er で終わる：clever → cleverer
-le で終わる：simple, gentle → simpler
-ow で終わる：narrow, shallow → narrower
これ以外の二音節語は原則 more 型：useful, famous, careful, tired, boring, active, modern, common, quiet（quiet は quieter も可）

★ ポイント：「y・er・le・ow で終わる二音節語は -er 型」と語尾で覚えると、暗記量がぐっと減る。

⚠ 注意：文字数と音節数は別物である。great は文字数5でも一音節（-er 型）。busy は文字数4でも二音節（-er 型だが y→i の変化がある）。`,
      },
      {
        heading: 'まぎらわしい語と、両方の形を持つ語',
        body: `入試でねらわれるのは、見た目と型が一致しない語である。

■ 短く見えるのに more 型
famous（fa-mous）→ more famous
useful（use-ful）→ more useful
tired（tired は一音節だが more tired が普通）→ more tired
boring → more boring
careful → more careful
※ -ing、-ed でできた形容詞は more 型と覚える。

■ 長く見えるのに -er 型
pretty（pret-ty）→ prettier
narrow（nar-row）→ narrower
simple（sim-ple）→ simpler
clever（clev-er）→ cleverer

■ どちらも使える語
quiet → quieter / more quiet
polite → politer / more polite
common → commoner / more common
入試ではどちらでも正解になることが多いが、答えを一つに絞る問題では文字数の指定を見て判断する。

■ 不規則変化はどちらでもない
good/well → better → best、bad/ill → worse → worst、many/much → more → most、little → less → least。これらは次のセッションでくわしく扱う。

★ ポイント：整序英作文で more が語群にあるかどうかを先に確認すると、どちらの型で答えるべきかがすぐわかる。語群に more がなければ -er 型で作るしかない。`,
      },
    ],
    trapExamples: [
      {
        question: 'famous の比較級を書きなさい。',
        wrongAnswer: 'famouser',
        trapExplanation:
          '文字数が短く、fa-mous と二音節しかないので -er を付ける型だと判断してしまう。語尾 -ous が more 型のサインだと知らないと必ず間違える。',
        correctAnswer: 'more famous',
        correctExplanation:
          '-ous、-ful、-ing、-ed、-ive で終わる二音節語は more 型になる。famous → more famous → the most famous。同じ仲間に useful → more useful、active → more active がある。',
      },
      {
        question: '（　）内の語を適切な形にしなさい。My sister is （pretty） than me.',
        wrongAnswer: 'more pretty',
        trapExplanation:
          'pretty は二音節あるので more 型だと考えてしまう。二音節語がすべて more 型ではないことを見落としている。',
        correctAnswer: 'prettier',
        correctExplanation:
          '-y で終わる二音節語は -er 型で、しかも子音字＋y なので y を i に変えて prettier とする。easy → easier、happy → happier、busy → busier と同じ型である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s226',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞の比較と語形変化の総合演習',
    description: '形容詞と副詞で変化のしかたが同じ語・違う語を確認し、語形変化を一通り仕上げる',
    intro:
      'He is a fast runner. と He runs fast. は、どちらも fast のままです。ところが He speaks slowly. は more slowly に変わります。形容詞か副詞かで型が変わるのか、変わらないのか。ここを整理すると、語形変化の問題はほぼ落とさなくなります。',
    order: 726,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'fast, hard, early, late, high, near は形容詞・副詞が同じ形で、変化も同じ。',
      '形容詞＋ly でできた副詞（slowly, carefully）は more / most 型。',
      '副詞の最上級では the を省略できるが、形容詞の最上級では省略しない。',
      'well（副詞）と good（形容詞）はどちらも better － best に変化する。',
      '語形変化の問題は「音節数」→「語尾」→「不規則かどうか」の順に確認すると速い。',
    ],
    sections: [
      {
        heading: '形容詞と副詞が同じ形の語',
        body: `英語には、形容詞としても副詞としても同じ形で使う語がある。これらは変化のしかたも共通である。

fast（速い／速く）－ faster － fastest
hard（難しい・かたい／熱心に）－ harder － hardest
early（早い／早く）－ earlier － earliest
late（遅い／遅く）－ later － latest
high（高い／高く）－ higher － highest
near（近い／近くに）－ nearer － nearest

■ 形容詞として
Ken is a fast runner.（ケンは速いランナーだ）
He is a hard worker.（彼は勤勉な人だ）

■ 副詞として
Ken runs fast.（ケンは速く走る）
He works hard.（彼は熱心に働く）

■ 比較の文で
Ken runs faster than Tom.（ケンはトムより速く走る）
Ken studies harder than his brother.（ケンは兄より熱心に勉強する）
The plane flew higher than the birds.（飛行機は鳥より高く飛んだ）

⚠ 注意：hardly は「ほとんど〜ない」という別の意味の副詞で、hard の副詞形ではない。
例）He hardly studies.（彼はほとんど勉強しない）※ hard「熱心に」とは正反対の意味になる。lately（最近）と late（遅く）も別語である。

★ ポイント：-ly が付くと意味が変わる語（hard／hardly、late／lately、near／nearly）は入試の定番。意味の取りちがえは長文でも失点になる。`,
      },
      {
        heading: '副詞の最上級と the、総合チェック',
        body: `副詞の最上級では the を省略してよい。形容詞の最上級では the を省略しない。

例）Ken runs (the) fastest in his class.（副詞：the はあってもなくてもよい）
　　Ken is the fastest runner in his class.（形容詞：the が必要）
　　Emi gets up (the) earliest in her family.（副詞）
　　Emi is the earliest riser in her family.（形容詞）

■ well と good
He plays the piano well.（副詞：じょうずに弾く）
He is a good pianist.（形容詞：じょうずなピアニスト）
どちらの比較級も better、最上級も best になる。
例）He plays the piano better than I do.（彼は私よりじょうずにピアノを弾く）
　　He is the best pianist in the town.（彼は町でいちばんじょうずなピアニストだ）

■ 語形変化を判断する手順
①不規則変化のリスト（good/well, bad/ill, many/much, little, far）に入っていないか。
②-ly が付いた副詞か（→ more 型）。ただし early は例外。
③音節が三つ以上か（→ more 型）。
④二音節なら語尾が y・er・le・ow か（→ -er 型）。
⑤一音節なら、e で終わるか／子音字＋y か／短母音＋子音字1つか、を確認してつづりを整える。

★ ポイント：この五段階を頭の中で流せるようになれば、初めて見る語でも正しい形を作れる。丸暗記だけに頼らないことが、上位校の語形変化問題を落とさないコツである。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適切な形にしなさい。Please speak （slowly） than before.',
        wrongAnswer: 'slowlier',
        trapExplanation:
          'early → earlier を覚えていると、-ly で終わる語はすべて y を i に変えると考えてしまう。slowly が「slow ＋ ly」でできた副詞だという意識が抜けている。',
        correctAnswer: 'more slowly',
        correctExplanation:
          '形容詞に -ly を付けてできた副詞は more / most 型になる。slowly → more slowly、carefully → more carefully、easily → more easily。early はもともと一語なので例外的に earlier となる。',
      },
      {
        question: '正しい英文を選びなさい。ア Ken is the fastest runner in his class. イ Ken is fastest runner in his class.',
        wrongAnswer: 'イ Ken is fastest runner in his class.',
        trapExplanation:
          '「副詞の最上級では the を省略できる」と習った直後に、形容詞の最上級でも the を落としてよいと拡大解釈してしまう。',
        correctAnswer: 'ア Ken is the fastest runner in his class.',
        correctExplanation:
          'the を省略できるのは副詞の最上級だけである。fastest runner の fastest は名詞 runner を修飾する形容詞なので the が必要。Ken runs (the) fastest in his class. なら副詞なので the を省いてよい。',
      },
    ],
  },

  // ───────── 2. 不規則変化（s227〜s229） ─────────
  {
    id: 'koko_eigo_s227',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則変化①：good / well － better － best と bad － worse － worst',
    description: 'もとの形からは想像できない変化をする最重要語を、使う場面ごとに区別して覚える',
    intro:
      'good の比較級を gooder と書く人はいませんが、では「私は彼より上手に泳げる」を英語でどう言うでしょうか。good なのか well なのか迷ったところで、実はどちらも better。形が同じなので、意味だけ押さえれば怖くありません。最重要の不規則変化から始めます。',
    order: 727,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'good（形容詞：よい）・well（副詞：じょうずに、健康で）→ better → best。',
      'bad（形容詞：悪い）・ill（副詞・形容詞：病気で）→ worse → worst。',
      'like A better than B（BよりAが好き）、like A the best（Aがいちばん好き）は最頻出。',
      'worse は「より悪い」、worst は「いちばん悪い」。つづりを混同しない。',
      'better / best には the を付ける場合と付けない場合がある（副詞なら省略可）。',
    ],
    sections: [
      {
        heading: 'good / well の変化と使い分け',
        body: `good と well はもとの形が違うのに、比較級・最上級はどちらも better － best になる。

good（形容詞）：よい、じょうずな
well（副詞）：じょうずに、うまく（形容詞では「健康で」）

■ 形容詞として使う場合
This camera is good.（このカメラはよい）
This camera is better than that one.（このカメラはあれよりよい）
This camera is the best of the three.（このカメラは3つの中でいちばんよい）

■ 副詞として使う場合
Ken swims well.（ケンはじょうずに泳ぐ）
Ken swims better than Tom.（ケンはトムよりじょうずに泳ぐ）
Ken swims (the) best in his class.（ケンはクラスでいちばんじょうずに泳ぐ）

■ 得点や成績を比べる文
Ken's score is better than Aya's.（ケンの点数はアヤの点数よりよい）
Mika's score is the best of the three.（ミカの点数が3人の中でいちばんよい）
Aya's score is not as good as Ken's.（アヤの点数はケンほどよくない）

★ ポイント：not as good as で原級に戻ることに注意。× not as better as とは言わない。

⚠ 注意：比べる対象は同じ種類にそろえる。× Ken's score is better than Aya.（点数と人を比べている）→ ○ better than Aya's（＝Aya's score）。所有代名詞やアポストロフィ s を使って省略する。`,
        figureId: 'lf_kokoeigoext07_227',
      },
      {
        heading: 'bad / worse / worst と like ~ better',
        body: `bad（悪い）と ill（病気で）は worse － worst に変化する。

例）The weather is bad today.（今日は天気が悪い）
　　The weather is worse than yesterday.（今日は昨日より天気が悪い）
　　This is the worst movie I have ever seen.（これは今まで見た中で最悪の映画だ）

⚠ 注意：worse と worst のつづりを取りちがえないこと。worse（より悪い）には比較級の -er に対応する e、worst（いちばん悪い）には最上級の -est に対応する st がある、と結びつけて覚えるとよい。

■ 最重要表現：like A better than B
「BよりAのほうが好きだ」
例）I like soccer better than baseball.（私は野球よりサッカーが好きだ）
　　Which do you like better, tea or coffee?（紅茶とコーヒーではどちらが好きですか）

■ like A the best
「Aがいちばん好きだ」
例）I like soccer the best of all sports.（私はすべてのスポーツの中でサッカーがいちばん好きだ）
　　What subject do you like the best?（何の教科がいちばん好きですか）
※ この best は副詞なので the を省略してもよい。

■ 答え方
Which do you like better, tea or coffee? — I like tea better (than coffee).
質問に better が入っていたら答えにも better を入れる。

★ ポイント：like ~ better / the best は日本語の「好き」につられて more を使いたくなるが、× like more とはふつう言わない。この形はそのまま暗記する。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合う英文を作りなさい。「私は数学より英語が好きです」',
        wrongAnswer: 'I like English more than math.',
        trapExplanation:
          '「〜より好き」を「more（もっと）＋好き」と直訳してしまう。日本語の語順から考えると自然に見えるだけに間違いに気づきにくい。',
        correctAnswer: 'I like English better than math.',
        correctExplanation:
          'like を比べるときは well の比較級 better を使い、like A better than B とするのが決まった形である。最上級は like A the best。教科書・入試ともにこの形で出るので、そのまま覚える。',
      },
      {
        question: '（　）に入る語を答えなさい。Ken\'s score is better than （　）.（アヤの点数より、という意味に）',
        wrongAnswer: 'Aya',
        trapExplanation:
          '日本語の「アヤより」をそのまま Aya と置いてしまう。すると「ケンの点数」と「アヤという人」を比べる文になり、比べる対象がそろわない。',
        correctAnswer: "Aya's",
        correctExplanation:
          "比べるものは同じ種類でそろえる。Ken's score（点数）と比べるのは Aya's score なので、Aya's と所有格だけを残して score を省く。同様に My bag is heavier than yours.（yours = your bag）のように所有代名詞も使う。",
      },
    ],
  },

  {
    id: 'koko_eigo_s228',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則変化②：many / much － more － most と little － less － least',
    description: '数と量を比べる語の変化を、可算・不可算の区別とあわせて確認する',
    intro:
      '本の冊数を比べるときは many、水の量を比べるときは much。もとの形は違うのに、比較級はどちらも more になります。つまり「たくさん」を比べる文では数と量の区別を気にしなくてよい一方、原級に戻すと many と much を選び直す必要が出てきます。ここが入試のねらいどころです。',
    order: 728,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'many（数）・much（量）→ more → most。どちらも比較級・最上級は同じ形。',
      'little（量が少ない）→ less → least。few（数が少ない）→ fewer → fewest。',
      'as many books as（数）／as much water as（量）と、原級では区別が必要。',
      'more は「もっと多くの」という意味の語であり、長い語に付ける more とは別のはたらき。',
      'least は「いちばん少ない」。at least（少なくとも）という熟語でもよく出る。',
    ],
    sections: [
      {
        heading: 'many / much と more / most',
        body: `many は数えられる名詞（books, students）に、much は数えられない名詞（water, money, time）に使う。しかし比較級・最上級はどちらも more － most である。

例）Ken has many books.（ケンは本をたくさん持っている）
　　Yuka has more books than Ken.（ユカはケンより多くの本を持っている）
　　Sho has the most books of the three.（ショウが3人の中でいちばん多くの本を持っている）

例）I don't have much money.（私はあまりお金を持っていない）
　　She has more money than I do.（彼女は私より多くのお金を持っている）
　　He has the most money in his family.（彼は家族でいちばんお金を持っている）

■ 原級に戻すときは区別が必要
Ken doesn't have as many books as Yuka.（数 → many）
I don't have as much money as she does.（量 → much）
× as much books as / × as many money as は誤り。

★ ポイント：more の文だけを見ていると数と量の区別を忘れる。書きかえで as ~ as に直す問題が出たら、名詞が数えられるかどうかを必ず確認する。

⚠ 注意：この more は「多くの」という意味の語で、beautiful に付ける more（語形を作るための more）とははたらきが違う。more books は「もっと多くの本」、more beautiful は「より美しい」。同じつづりでも役割が異なる。`,
        figureId: 'lf_kokoeigoext07_228',
      },
      {
        heading: 'little / less / least と few / fewer',
        body: `「少ない」を表す語も不規則に変化する。

little（量が少ない）－ less － least
few（数が少ない）－ fewer － fewest

例）I have little time.（私はほとんど時間がない）
　　I have less time than you.（私はあなたより時間が少ない）
　　He has the least money in the group.（彼はグループでいちばんお金が少ない）

例）There are few students in the room.（部屋には生徒がほとんどいない）
　　There are fewer students today than yesterday.（今日は昨日より生徒が少ない）

■ a little / a few との違い
a little（少しある）／a few（少しある）は肯定的、little／few（ほとんどない）は否定的な意味になる。a が付くかどうかで意味が反対になる。
例）I have a little money.（少しお金がある）／ I have little money.（ほとんどお金がない）

■ little のもう一つの意味
little には「小さい」という意味もあり、その場合は smaller / smallest を使うのがふつうである。less / least は「量が少ない」ときに使う。

■ 熟語
at least（少なくとも）：It takes at least two hours.（少なくとも2時間かかる）
at most（多くても）：There were at most ten people.（多くても10人だった）

★ ポイント：less の反対は more、least の反対は most。数の場合は fewer ⇔ more、fewest ⇔ most となる。表にして対で覚えると混乱しない。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。Ken doesn\'t have as （　） books as Yuka.',
        wrongAnswer: 'much',
        trapExplanation:
          '直前に more books という言い方を練習していると、books でも much を使えるように感じてしまう。more が many と much の共通形であることが混乱のもとになる。',
        correctAnswer: 'many',
        correctExplanation:
          '原級 as ~ as に戻すときは、数えられる名詞なら many、数えられない名詞なら much を選ぶ。books は数えられるので as many books as が正しい。比較級では more で共通だが、原級では区別が復活する。',
      },
      {
        question: '（　）内の語を適切な形にしなさい。There are （few） students in the gym today than yesterday.',
        wrongAnswer: 'less',
        trapExplanation:
          '「少ない」の比較級はすべて less だと思いこんでしまう。日常の英語でも less students と言うことがあるため、なおさら正しく感じられる。',
        correctAnswer: 'fewer',
        correctExplanation:
          '数えられる名詞（students）の「より少ない」は fewer を使う。less は数えられない名詞（time, money, water）に使う。入試では few → fewer、little → less の対応を問う問題が出るので、名詞の種類で判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s229',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則変化③：far, late, old の二通りの変化',
    description: 'farther / further、later / latest / last、older / elder など、意味によって形が分かれる語を整理する',
    intro:
      '「あとで」は later、「最後に」は last。もとはどちらも late です。同じ語なのに、距離の話か時間の話かで変化のしかたが分かれる語がいくつかあり、長文の中で意味を取りちがえると内容がずれてしまいます。まぎらわしい三つの語を、ここで一度に片づけましょう。',
    order: 729,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'far → farther / farthest（距離）、further / furthest（程度・さらに進んだ）。',
      'late → later / latest（時間：あとの／最新の）、latter / last（順序：後者の／最後の）。',
      'old → older / oldest（一般）、elder / eldest（家族の年上・年長。イギリス英語寄り）。',
      'the latest news は「最新のニュース」、the last news ではない。',
      '入試では later と latest、farther と further の意味の違いが問われる。',
    ],
    sections: [
      {
        heading: 'far と late の二通りの変化',
        body: `■ far（遠い・遠くに）
距離：far － farther － farthest
程度：far － further － furthest（「さらなる」「それ以上の」）

例）My house is farther from the station than yours.（私の家はあなたの家より駅から遠い）
　　Which is the farthest station from here?（ここからいちばん遠い駅はどれですか）
　　If you have any further questions, please ask me.（さらに質問があれば聞いてください）
※ 近年は距離にも further を使うことが増えているが、入試では「距離＝farther、程度＝further」と区別して覚えておけばよい。

■ late（遅い・遅く）
時間：late － later － latest（あとの／最新の）
順序：late － latter － last（後者の／最後の）

例）I will call you later.（あとで電話します）
　　This is the latest model.（これは最新型です）
　　He was the last student to leave the room.（彼は最後に部屋を出た生徒だった）
　　I like the latter better than the former.（私は前者より後者が好きだ）

⚠ 注意：the latest news は「最新のニュース」、the last news は「最後のニュース（もう続きがない）」で意味がまったく違う。同じく later（あとで）と the last（最後の）を取りちがえない。

★ ポイント：far も late も「距離・時間の直線」で考えると整理しやすい。物理的な遠さは farther、話を先へ進めるのは further。時間が先へ進むのは later、順番の終わりは last。`,
      },
      {
        heading: 'old の二通りと、不規則変化の総まとめ',
        body: `■ old（古い・年をとった）
一般：old － older － oldest
家族の年長：old － elder － eldest

例）This temple is older than that one.（この寺はあの寺より古い）
　　Ken is two years older than I am.（ケンは私より2歳年上だ）
　　My elder brother is a doctor.（私の兄は医者だ）※ older brother でもよい
　　She is the eldest of the three sisters.（彼女は3姉妹の長女だ）

⚠ 注意：elder は名詞の前でしか使えず、than と一緒には使えない。× He is elder than me. → ○ He is older than me.

■ 不規則変化の総まとめ
good / well － better － best（よい・じょうずに）
bad / ill － worse － worst（悪い・病気で）
many / much － more － most（多くの）
little － less － least（量が少ない）
few － fewer － fewest（数が少ない）
far － farther / further － farthest / furthest（遠い）
late － later / latter － latest / last（遅い）
old － older / elder － oldest / eldest（古い・年上の）

★ ポイント：この8組が中学で扱う不規則変化のすべてである。数が少ないので、声に出して三つ一組で唱えて覚えてしまうのが最も速い。

例）Ken is 15. Tom is 13. → Ken is older than Tom. / Tom is younger than Ken. / Tom is not as old as Ken. 三通りで言えるか確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。I want to know the （later / latest） news about the game.',
        wrongAnswer: 'later',
        trapExplanation:
          '「あとの情報」＝「新しい情報」と考えて later を選んでしまう。later と latest はつづりも意味も近いので取りちがえやすい。',
        correctAnswer: 'latest',
        correctExplanation:
          'latest は「最新の」という意味の最上級。later は「あとで・のちの」という比較級で、the later news とは言わない。the latest news（最新ニュース）、the latest model（最新型）は決まった言い方として覚える。',
      },
      {
        question: '正しい英文を選びなさい。ア My brother is elder than me. イ My brother is older than me.',
        wrongAnswer: 'ア My brother is elder than me.',
        trapExplanation:
          'elder brother という言い方を知っていると、「兄＝elder」なので than とも使えると考えてしまう。',
        correctAnswer: 'イ My brother is older than me.',
        correctExplanation:
          'elder は名詞の前に置く使い方（my elder brother）に限られ、than とともに使うことはできない。than を使う文では older を用いる。elder は主にイギリス英語で家族の年長を表すときに使われる。',
      },
    ],
  },

  // ───────── 3. 原級比較 as 〜 as（s230〜s234） ─────────
  {
    id: 'koko_eigo_s230',
    subject: 'eigo',
    examType: 'koko',
    title: 'as + 原級 + as：「〜と同じくらい…」',
    description: 'as ~ as の形と、はさむのは必ず原級であること、名詞をはさむ形までを身につける',
    intro:
      '身長がぴったり同じ二人を見て、日本語では「同じくらい背が高いね」と言います。英語ではこれを as tall as という形で表します。二つの as ではさむだけ。ただしはさむ語の形をまちがえる人が非常に多く、入試ではそこが必ずねらわれます。',
    order: 730,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'as + 原級 + as で「〜と同じくらい…」。はさむのは必ず原級（もとの形）。',
      '× as taller as、× as more famous as は誤り。',
      '名詞をはさむ形もある：as many books as（数）／as much water as（量）。',
      '副詞も同じように使える：Ken runs as fast as Tom.',
      '二つ目の as のあとは名詞・代名詞・〈主語＋動詞〉のどれも来られる。',
    ],
    sections: [
      {
        heading: 'as ~ as の基本形',
        body: `二つのものが同じ程度であることを表すときは、形容詞・副詞を as と as ではさむ。

■ 形容詞をはさむ
Ken is as tall as Tom.（ケンはトムと同じくらい背が高い）
This book is as interesting as that one.（この本はあの本と同じくらいおもしろい）
Today is as hot as yesterday.（今日は昨日と同じくらい暑い）

■ 副詞をはさむ
Ken runs as fast as Tom.（ケンはトムと同じくらい速く走る）
She speaks English as well as her teacher.（彼女は先生と同じくらいじょうずに英語を話す）
I got up as early as my father this morning.（今朝、私は父と同じくらい早く起きた）

⚠ 注意：はさむのは必ず原級である。比較級や最上級を入れてはいけない。
× Ken is as taller as Tom.　× This is as most interesting as that.
比較級・最上級を作る練習をしたあとは、この誤りが急に増えるので注意する。

■ 二つ目の as のあとに来るもの
①名詞・代名詞：as tall as Tom / as tall as me
②主語＋動詞：as tall as I am / as fast as he does / as well as she did
例）Ken can swim as fast as I can.（ケンは私と同じくらい速く泳げる）

★ ポイント：as ~ as は「イコール」ではなく「同じくらい」。数値がぴったり同じでなくても、ほぼ同じなら使える。逆に「ケンはトムより背が高い」を as ~ as で表すことはできない。`,
        figureId: 'lf_kokoeigoext07_230',
      },
      {
        heading: '名詞をはさむ形と、語順の注意',
        body: `「同じくらい多くの〜」のように名詞を入れる場合は、〈as ＋ many／much ＋ 名詞 ＋ as〉の語順になる。

例）I have as many books as Ken.（私はケンと同じくらい多くの本を持っている）
　　She drinks as much water as her brother.（彼女は弟と同じくらい多くの水を飲む）
　　This school has as many students as that one.（この学校はあの学校と同じくらい生徒が多い）

■ many と much の使い分け
数えられる名詞（books, students, cars）→ many
数えられない名詞（water, money, time, homework）→ much
例）I don't have as much time as you.（私はあなたほど時間がない）

■ 語順のミスに注意
× as many as books　× as books many as
正しいのは as many books as。「as ＋ many ＋ 名詞 ＋ as」と、名詞まで含めて一まとまりで覚える。

■ 〈as ＋ 形容詞 ＋ a ＋ 名詞 ＋ as〉
上位校ではこの形も出る。
例）He is as good a player as his brother.（彼は兄と同じくらいよい選手だ）
a の位置が形容詞のあとになる点が特殊である。

★ ポイント：整序英作文で as が二つ配られていたら原級比較だと判断できる。まず as と as を置いてから、間にはさむ語を決めると組み立てやすい。

例）並べかえ：( as / as / many / has / he / books / I ) → He has as many books as I.`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適切な形にしなさい。My bag is as （heavy） as yours.',
        wrongAnswer: 'heavier',
        trapExplanation:
          '「比べる文だから語形を変える」と機械的に考え、as にはさまれていることを見落として比較級にしてしまう。比較級の練習をした直後にとくに多い誤り。',
        correctAnswer: 'heavy',
        correctExplanation:
          'as ~ as にはさむのは必ず原級である。heavy をそのまま入れて as heavy as とする。語形を変えるのは than がある文（heavier than）と the がつく最上級（the heaviest）のときだけである。',
      },
      {
        question: '日本語に合うように並べかえなさい。「私はケンと同じくらいたくさんのCDを持っています」( as / CDs / as / have / many / Ken / I )',
        wrongAnswer: 'I have as many as CDs Ken.',
        trapExplanation:
          'as many as をひとかたまりの熟語だと思いこみ、名詞をそのあとに置いてしまう。as ~ as の「〜」の部分に名詞まで入ることを理解していないと起こる。',
        correctAnswer: 'I have as many CDs as Ken.',
        correctExplanation:
          '〈as ＋ many ＋ 名詞 ＋ as〉の語順にする。名詞 CDs は many の直後、二つ目の as の前に入る。同じく as much water as、as many students as も同じ語順である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s231',
    subject: 'eigo',
    examType: 'koko',
    title: 'not as ~ as：「〜ほど…でない」',
    description: '原級比較の否定形の意味を正確につかみ、「同じでない」との違いを区別する',
    intro:
      '「A は B ほど背が高くない」と言われたら、二人の背はどちらが高いでしょうか。答えは B です。ところが not as tall as を「同じ背ではない」と訳してしまうと、どちらが高いのかわからなくなります。否定の as ~ as は、上下関係までしっかり示す表現なのです。',
    order: 731,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'not as ~ as A で「Aほど〜でない」。A のほうが上だとわかる。',
      '「同じでない」という意味ではない点に注意する。',
      'not so ~ as という言い方もあり、意味は同じ（やや古い言い方）。',
      '一つ目の as を so に変えられるのは否定文のときだけ。',
      'not as many ~ as（数）／not as much ~ as（量）も同じ考え方。',
    ],
    sections: [
      {
        heading: 'not as ~ as の意味',
        body: `as ~ as を否定文にすると「〜ほど…でない」という意味になる。

例）Ken is not as tall as Bob.（ケンはボブほど背が高くない）
→ ボブのほうが背が高い。ケンのほうが低い。

例）This question is not as difficult as that one.（この問題はあの問題ほど難しくない）
→ あの問題のほうが難しい。

例）I don't have as much money as my brother.（私は兄ほどお金を持っていない）
→ 兄のほうがお金を持っている。

⚠ 注意：not as ~ as は「同じではない」ではない。「Aほどではない＝Aより下だ」という上下関係を表す。日本語の「〜ほど…ない」と同じ感覚である。
× 「ケンはボブと同じ背の高さではない」と訳すと、ケンのほうが高い可能性も残ってしまい、意味がぼやける。

■ not so ~ as
一つ目の as を so にしてもよい。意味は変わらない。
例）Ken is not so tall as Bob.
ただし現在では not as ~ as のほうが一般的である。肯定文では so を使えない（× Ken is so tall as Bob.）。

★ ポイント：文中に not as ~ as を見つけたら、すぐに「二つ目に出てくるほうが上」と読み取れるようにする。長文の内容一致問題では、この読み取り一つで正誤が決まることがある。`,
      },
      {
        heading: '数量の否定と、まぎらわしい表現',
        body: `名詞をはさむ形も否定にできる。数か量かで many と much を選び分ける。

例）Ken doesn't have as many books as Yuka.（ケンはユカほど多くの本を持っていない）
　　I don't have as much homework as you.（私はあなたほど宿題が多くない）
　　There were not as many people as last year.（去年ほど人が多くなかった）

■ 主語が三人称単数の否定文
Ken doesn't have ~ のように does を使う。× Ken don't have は誤り。
例）She doesn't run as fast as her sister.（彼女は姉ほど速く走らない）

■ 過去形の否定
例）Yesterday was not as cold as today.（昨日は今日ほど寒くなかった）
　　I couldn't answer as many questions as Ken.（私はケンほど多くの問題に答えられなかった）

■ 比べる相手の書き方
as のあとは名詞・代名詞のほか、〈主語＋助動詞・do〉でもよい。
例）He can't swim as fast as I can.（彼は私ほど速く泳げない）
　　She doesn't study as hard as he does.（彼女は彼ほど熱心に勉強しない）

★ ポイント：not as ~ as の文は、必ず比較級の文に書きかえられる。次のセッションでその手順を扱うが、まずは「どちらが上か」を毎回口に出して確認するくせをつけておくとよい。

例）This car is not as expensive as that one. → どちらが高い？ → that one（あの車）`,
      },
    ],
    trapExamples: [
      {
        question: '英文の意味として正しいものを選びなさい。Emi is not as old as Kenta. ア エミはケンタと同い年ではない イ エミはケンタより年下だ',
        wrongAnswer: 'ア エミはケンタと同い年ではない',
        trapExplanation:
          'as ~ as を「＝（イコール）」だと考え、その否定を「イコールでない」と読んでしまう。この読み方だとエミが年上の可能性も残ってしまう。',
        correctAnswer: 'イ エミはケンタより年下だ',
        correctExplanation:
          'not as ~ as A は「Aほど〜でない」で、Aのほうが上であることを表す。Emi is not as old as Kenta. は Kenta is older than Emi. と同じ内容になる。上下関係まで決まる表現である。',
      },
      {
        question: '正しい英文を選びなさい。ア This bag is so heavy as that one. イ This bag is not so heavy as that one.',
        wrongAnswer: 'ア This bag is so heavy as that one.',
        trapExplanation:
          '「not so ~ as も使える」と習ったことから、肯定文でも as を so に変えられると考えてしまう。',
        correctAnswer: 'イ This bag is not so heavy as that one.',
        correctExplanation:
          '一つ目の as を so に変えられるのは否定文のときだけである。肯定文では必ず as ~ as とする（This bag is as heavy as that one.）。so ~ as は否定文専用と覚えておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s232',
    subject: 'eigo',
    examType: 'koko',
    title: 'not as ~ as ⇔ 比較級：言いかえの手順',
    description: '原級の否定文を比較級の文に、比較級の文を原級の否定文に、主語を入れかえて書きかえる',
    intro:
      '「AはBほど重くない」と「BはAより重い」。日本語でも同じ場面を二通りで言えますね。英語の書きかえ問題は、まさにこの言いかえを試しています。コツは一つ、主語をひっくり返すこと。ここを機械的にできるようにすると、書きかえ問題が得点源になります。',
    order: 732,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'A is not as ~ as B. ＝ B is 比較級 than A.（主語が入れかわる）',
      '主語をそのままにするなら反対語を使う：A is not as big as B. ＝ A is smaller than B.',
      '書きかえのとき語形（原級⇔比較級）を必ず直す。',
      '数量の場合も同じ：A doesn\'t have as many ~ as B. ＝ B has more ~ than A.',
      '主語が変わると動詞の形（has / have、is / are）も変わることに注意。',
    ],
    sections: [
      {
        heading: '主語を入れかえて比較級にする',
        body: `原級の否定文と比較級の文は、同じ事実を別の角度から述べたものである。手順は次のとおり。

【手順】
①not as ~ as の文で、二つ目に出てくるもの（as のあと）を新しい主語にする。
②形容詞・副詞を比較級に直す。
③than のあとに、もとの主語を置く。

例）Bag A is not as heavy as Bag B.
①主語を Bag B にする ②heavy → heavier ③than Bag A
→ Bag B is heavier than Bag A.（かばんBはかばんAより重い）

例）Ken is not as tall as Bob. → Bob is taller than Ken.
例）This question is not as difficult as that one. → That question is more difficult than this one.
例）Today is not as cold as yesterday. → Yesterday was colder than today.（時制に注意）

■ 主語を変えたくないときは反対語を使う
Bag A is not as heavy as Bag B. → Bag A is lighter than Bag B.（かばんAはBより軽い）
Ken is not as tall as Bob. → Ken is shorter than Bob.
反対語のペア：big ⇔ small、long ⇔ short、heavy ⇔ light、old ⇔ new / young、easy ⇔ difficult、fast ⇔ slow、expensive ⇔ cheap

★ ポイント：問題文に「Bag B で始めて」などの指定がある場合は主語の入れかえ、「Bag A で始めて」なら反対語を使う。指定された書き出しをよく見ること。`,
        figureId: 'lf_kokoeigoext07_232',
      },
      {
        heading: '数量の書きかえと、動詞の変化',
        body: `名詞をはさむ形も同じ手順で書きかえられる。

例）Ken doesn't have as many books as Yuka.
→ Yuka has more books than Ken.（ユカはケンより多くの本を持っている）

例）I don't have as much money as my sister.
→ My sister has more money than I do.

■ 動詞の形に注意
主語が入れかわると動詞の形も変わる。
・doesn't have（否定文）→ has（三人称単数の肯定文）
・don't have → has / have（新しい主語に合わせる）
・is not → is / are / was（新しい主語と時制に合わせる）
例）These bags are not as expensive as that one. → That bag is more expensive than these bags.（are → is）

■ 三つのものを含む文の言いかえ
Bag A 2kg、Bag B 5kg、Bag C 8kg のとき、次の三通りはすべて正しい。
・Bag A is not as heavy as Bag B.（原級の否定）
・Bag B is heavier than Bag A.（比較級）
・Bag C is the heaviest of the three.（最上級）
同じデータから三通りの文を作れることが、比較の単元でいちばん問われる力である。

⚠ 注意：書きかえのときに語形を戻し忘れる誤りが多い。× Bag B is heavy than Bag A.（heavier にする）、× Bag A is not as heavier as Bag B.（heavy にする）。原級と比較級を入れ替えたら、必ず語形を確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。Ken is not as tall as Bob.（Bob で始めて）',
        wrongAnswer: 'Bob is not taller than Ken.',
        trapExplanation:
          'もとの文に not があるので、書きかえた文にも not が必要だと考えてしまう。否定の位置と意味の向きを混同している。',
        correctAnswer: 'Bob is taller than Ken.',
        correctExplanation:
          'not as ~ as は「〜ほど…でない」＝「相手のほうが上」という意味なので、主語を入れかえて比較級にすると否定の not は不要になる。Ken is not as tall as Bob.（ケンはボブほど高くない）＝ Bob is taller than Ken.（ボブのほうが高い）。',
      },
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。Yuka has more books than Ken.（Ken で始めて）',
        wrongAnswer: "Ken doesn't have as much books as Yuka.",
        trapExplanation:
          '比較級の more には many と much の区別がないため、原級に戻すときにどちらを使うか判断せず much を選んでしまう。',
        correctAnswer: "Ken doesn't have as many books as Yuka.",
        correctExplanation:
          '原級に戻すときは名詞の種類で選び直す。books は数えられる名詞なので many を使い、as many books as とする。加えて主語が Ken に変わるので doesn\'t have と三人称単数の否定形にすることも忘れない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s233',
    subject: 'eigo',
    examType: 'koko',
    title: 'as ~ as possible / as ~ as one can：「できるだけ〜」',
    description: '「できるだけ〜」の二通りの言い方と、can の時制・人称のそろえ方を身につける',
    intro:
      'メールの最後に「なるべく早くお返事ください」と書きたいとき、英語では as soon as possible と言います。頭文字を取って ASAP と略されるほどよく使う表現です。possible を使う形と can を使う形の二通りがあり、書きかえ問題では必ずセットで問われます。',
    order: 733,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'as + 原級 + as possible ＝ as + 原級 + as + 主語 + can で「できるだけ〜」。',
      '主語と時制に合わせて can / could を変える（過去の文なら could）。',
      'as soon as possible（できるだけ早く）は最頻出。',
      'as many ~ as possible（できるだけ多くの〜）の語順にも注意する。',
      'as soon as（〜するとすぐに）とは意味が違うので混同しない。',
    ],
    sections: [
      {
        heading: '二通りの「できるだけ〜」',
        body: `「できるだけ〜」は、〈as ＋ 原級 ＋ as possible〉または〈as ＋ 原級 ＋ as ＋ 主語 ＋ can〉で表す。

例）Please come as soon as possible.（できるだけ早く来てください）
　　＝ Please come as soon as you can.

例）He ran as fast as possible.（彼はできるだけ速く走った）
　　＝ He ran as fast as he could.（過去の文なので could）

例）I want to read as many books as possible.（できるだけ多くの本を読みたい）
　　＝ I want to read as many books as I can.

■ 主語と時制をそろえる
can を使う形では、主語は文全体の主語に合わせ、時制も合わせる。
・現在の文 → can　例）She studies as hard as she can.
・過去の文 → could　例）She studied as hard as she could.
⚠ 注意：× He ran as fast as he can.（過去の文なのに can のまま）は誤り。
⚠ 注意：× He ran as fast as I could.（主語がずれている）も誤り。

■ よく使う組み合わせ
as soon as possible（できるだけ早く）
as fast as possible（できるだけ速く）
as often as possible（できるだけ頻繁に）
as much as possible（できるだけ多く／たくさん）
as carefully as possible（できるだけ注意深く）

★ ポイント：possible を使う形は主語も時制も考えなくてよいので、英作文では possible のほうが安全である。ただし「can を使って書きかえよ」と指定されたら主語・時制の一致が採点対象になる。`,
      },
      {
        heading: 'as soon as との区別と、応用表現',
        body: `つづりが似ている as soon as possible（できるだけ早く）と as soon as ~（〜するとすぐに）は、意味がまったく違う。

■ as soon as possible ＝ できるだけ早く
例）I will call you as soon as possible.（できるだけ早く電話します）

■ as soon as ＋ 主語 ＋ 動詞 ＝ 〜するとすぐに（接続詞）
例）I will call you as soon as I get home.（家に着いたらすぐに電話します）
※ この形は「時を表す接続詞」なので、未来のことでも現在形で表す（× as soon as I will get home）。

■ 見分け方
as soon as のあとが possible なら「できるだけ早く」、〈主語＋動詞〉なら「〜するとすぐに」。ただし as soon as you can は「できるだけ早く」なので、can があるかどうかにも注目する。

■ その他の応用
・as ~ as possible を否定文で
例）Try not to make as many mistakes as possible. よりも、自然には Try to make as few mistakes as possible.（できるだけ少ない誤りにしなさい）を使う。
・命令文でよく使われる
例）Speak as clearly as possible.（できるだけはっきり話しなさい）
　　Write as much as you can.（できるだけたくさん書きなさい）

★ ポイント：入試では「二語で答えよ」「三語で答えよ」といった語数指定が付くことが多い。as soon as possible なら possible の一語、as soon as he can なら he can の二語、と数え方まで意識しておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。He ran as fast as possible.（can または could を使って）',
        wrongAnswer: 'He ran as fast as he can.',
        trapExplanation:
          'possible の部分をそのまま can に置きかえればよいと考え、文全体が過去形であることを見落としてしまう。',
        correctAnswer: 'He ran as fast as he could.',
        correctExplanation:
          'as ~ as possible を can の形に直すときは、文の時制に合わせる。ran（過去形）なので could を使う。主語も文の主語 He に合わせて he could とする。現在の文なら He runs as fast as he can. となる。',
      },
      {
        question: '英文の意味として正しいものを選びなさい。I will send you an email as soon as I arrive at the hotel. ア できるだけ早くメールを送ります イ ホテルに着いたらすぐメールを送ります',
        wrongAnswer: 'ア できるだけ早くメールを送ります',
        trapExplanation:
          'as soon as を見た瞬間に「できるだけ早く」と決めつけてしまう。as soon as possible の暗記が強すぎると、接続詞の as soon as を見落とす。',
        correctAnswer: 'イ ホテルに着いたらすぐメールを送ります',
        correctExplanation:
          'as soon as のあとに〈主語＋動詞〉が続く場合は「〜するとすぐに」という接続詞である。「できるだけ早く」は as soon as possible または as soon as I can のように、possible か can が続く。あとに何が来ているかで判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s234',
    subject: 'eigo',
    examType: 'koko',
    title: '倍数表現：twice as ~ as / three times as ~ as',
    description: '「〜の2倍」「〜の3倍」「〜の半分」を原級比較を使って表す形をつかむ',
    intro:
      '「兄は私の2倍の本を持っている」を英語にするとき、two times とは言いません。2倍は twice という特別な語を使います。3倍からは three times。倍数は as ~ as の前に置くという語順もふくめて、まとめて覚えてしまうのが得です。',
    order: 734,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '倍数は as ~ as の前に置く：twice as tall as、three times as large as。',
      '2倍は twice（× two times がふつう）、3倍以上は 数字 + times。',
      '半分は half as ~ as。',
      '名詞を入れるときは 倍数 + as many / much + 名詞 + as の語順。',
      '倍数表現は比較級（than）ではなく原級（as ~ as）と組み合わせるのが基本。',
    ],
    sections: [
      {
        heading: '倍数の置き場所と語形',
        body: `「〜の何倍」を表すときは、倍数を as ~ as の前に置く。

■ 倍数の言い方
2倍：twice
3倍：three times
4倍：four times
半分：half
※ 2倍を two times とは、ふつう言わない。

例）This box is twice as large as that one.（この箱はあの箱の2倍の大きさだ）
　　This river is three times as long as that one.（この川はあの川の3倍の長さだ）
　　My bag is half as heavy as yours.（私のかばんはあなたのかばんの半分の重さだ）

■ 名詞を入れる形
〈倍数 ＋ as many／much ＋ 名詞 ＋ as〉の語順になる。
例）Yuka has twice as many books as Ken.（ユカはケンの2倍の本を持っている）
　　Sho has three times as many books as Ken.（ショウはケンの3倍の本を持っている）
　　He drinks twice as much water as I do.（彼は私の2倍の水を飲む）

ケン5冊、ユカ10冊、ショウ15冊 という事実なら、10 ÷ 5 ＝ 2 で twice、15 ÷ 5 ＝ 3 で three times となる。数値を必ず割り算で確かめること。

⚠ 注意：語順のミスが多い。
× Yuka has as twice many books as Ken.
× Yuka has as many twice books as Ken.
正しくは twice as many books as Ken。倍数は必ず一つ目の as の前に置く。

★ ポイント：倍数は「as ~ as のかたまりの前に貼りつける」と覚える。twice ＋ 〔as many books as〕 のように、かたまりを崩さない。`,
        figureId: 'lf_kokoeigoext07_234',
      },
      {
        heading: '倍数の別の言い方と、入試での出方',
        body: `倍数は as ~ as 以外の形でも表せる。上位校ではこちらも出題される。

■ 〈倍数 ＋ the ＋ 名詞 ＋ of〉
例）This box is twice the size of that one.（この箱はあの箱の2倍の大きさだ）
　　This river is three times the length of that one.（この川はあの川の3倍の長さだ）
size（大きさ）、length（長さ）、height（高さ）、weight（重さ）、price（値段）、number（数）などの名詞を使う。

■ 比較級とは組み合わせない
× This box is twice larger than that one. は避ける。倍数は原級 as ~ as と組み合わせるのが原則である。

■ 「〜倍」以外の差の表し方
差が「何倍」ではなく「いくつ分」のときは、比較級の前に差を置く。
例）Ken is two years older than Tom.（ケンはトムより2歳年上だ）
　　This bridge is 20 meters longer than that one.（この橋はあの橋より20メートル長い）
「〜倍」＝原級、「〜だけ多い」＝比較級、と区別しておく。

■ 読み取りの練習
Sho has three times as many books as Ken. で、ケンが5冊なら、ショウは 5 × 3 ＝ 15冊。
Yuka has twice as many books as Ken. で、ユカが10冊なら、ケンは 10 ÷ 2 ＝ 5冊。
どちらを基準にしているかは「as のあとに来るほう」で決まる。as のあとが基準である。

★ ポイント：英文から数値を求める問題では、まず基準（as のあとの語）を丸で囲む。そのうえで、かけるのか割るのかを判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「彼は私の2倍の本を持っています」( as / books / has / he / I / many / twice / do / as )',
        wrongAnswer: 'He has as twice many books as I do.',
        trapExplanation:
          'as ~ as の中に倍数を入れると考えてしまう。「同じくらい」を表す as ~ as の内側に twice を差しこむ形は誤りである。',
        correctAnswer: 'He has twice as many books as I do.',
        correctExplanation:
          '倍数は as ~ as のかたまりの前に置く。twice ＋ as many books as ＋ I do の順である。three times as long as、half as heavy as も同じ語順になる。',
      },
      {
        question: 'Ken has 6 CDs. Yuka has three times as many CDs as Ken. ユカは何枚持っているか。',
        wrongAnswer: '2枚',
        trapExplanation:
          '「three times as many as」を見て割り算をしてしまう。どちらが基準なのかを確かめずに計算するとこうなる。',
        correctAnswer: '18枚',
        correctExplanation:
          'as のあとに来る Ken が基準である。ユカはケンの3倍なので 6 × 3 ＝ 18枚。逆に「Ken has one third as many CDs as Yuka.」なら、ユカが基準でケンはその3分の1という意味になる。基準は必ず as のあとと覚える。',
      },
    ],
  },

  // ───────── 4. 比較級 ＋ than と強調（s235〜s239） ─────────
  {
    id: 'koko_eigo_s235',
    subject: 'eigo',
    examType: 'koko',
    title: '比較級 + than の基本と、than のあとの形',
    description: 'than I / than me / than I do など、比較の相手をどう書くかを整理する',
    intro:
      '「彼は私より速く走る」を英語にすると He runs faster than I. でしょうか、than me. でしょうか。実はどちらも使われますが、テストで安全なのは than I do です。than のあとに何を置けるのかを知ると、英作文で迷わなくなります。',
    order: 735,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '比較級 + than + 比べる相手。than は「…よりも」。',
      'than のあとは、名詞／代名詞（than Tom, than me）／〈主語＋do・does・did〉／〈主語＋be動詞〉。',
      '会話では than me、書き言葉では than I am / than I do が好まれる。',
      'than のあとの動詞は、前と同じ動詞を do / does / did で受ける。',
      '比較級には the をつけない（the 比較級 of the two は例外）。',
    ],
    sections: [
      {
        heading: 'than のあとに置けるもの',
        body: `比較級の文は〈A ＋ be動詞／一般動詞 ＋ 比較級 ＋ than ＋ B〉の形になる。B（比べる相手）の書き方には何通りかある。

■ ①名詞をそのまま置く
Ken is taller than Tom.（ケンはトムより背が高い）
This book is cheaper than that one.（この本はあの本より安い）

■ ②代名詞を置く
He is older than me.（彼は私より年上だ）※ 会話でふつうに使う
He is older than I am.（同じ意味。書き言葉ではこちら）
⚠ than I だけで終わる形は古い言い方で、現在は than I am / than me が一般的である。

■ ③〈主語 ＋ do / does / did〉で受ける
一般動詞の文では、くり返しをさけて do / does / did を使う。
例）Ken runs faster than Tom does.（ケンはトムより速く走る）
　　She studies harder than I do.（彼女は私より熱心に勉強する）
　　He got up earlier than she did.（彼は彼女より早く起きた）

■ ④助動詞で受ける
例）He can swim faster than I can.（彼は私より速く泳げる）
　　She will arrive earlier than we will.

★ ポイント：than のあとの do / does / did は、前に出てきた一般動詞の代わりである。be動詞の文なら am / is / are / was / were で受ける。
例）Ken is busier than I am.（× than I do ではない）

⚠ 注意：than のあとに動詞をそのままくり返すのは不自然。× Ken runs faster than Tom runs fast.`,
      },
      {
        heading: '比較級の文でまちがえやすい点',
        body: `■ the をつけない
× Ken is the taller than Tom. → ○ Ken is taller than Tom.
比較級に the がつくのは、the 比較級 of the two（2つのうちのほう）と the 比較級, the 比較級（〜すればするほど）の二つの決まった形だけである。

■ 語形を変え忘れない
× This book is cheap than that one. → ○ cheaper than
than があるのに原級のままにする誤りは、あわてて解くと必ず出る。

■ than と then のつづり
than（…よりも）と then（そのとき・それから）は別の語である。長文でも書き分けを問われる。
例）He is taller than me.（比較）／ I was ten years old then.（そのとき）

■ 主語と動詞の一致
例）My brothers are taller than I am.（主語が複数なので are）
　　My brother is taller than I am.（単数なので is）

■ 比べるものをそろえる
例）× My bag is heavier than you. → ○ My bag is heavier than yours.（yours = your bag）
これは次の次のセッションでくわしく扱う。

★ ポイント：比較級の文を書いたら、①語形（-er / more）②than のつづり③比べる相手の形、の三点を必ず見直す。この三点を確認するだけで、英作文の失点は大きく減る。

例）並べかえ：( than / faster / can / he / I / swim / can ) → He can swim faster than I can.`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。Ken runs faster than Tom （　）.（動詞の代わりの語を入れる）',
        wrongAnswer: 'is',
        trapExplanation:
          '「than のあとには be動詞」と単純に覚えていると、一般動詞の文でも is を入れてしまう。前の動詞が何かを見ていないことが原因。',
        correctAnswer: 'does',
        correctExplanation:
          '前に出ている動詞は runs という一般動詞なので、くり返しをさけるときは does で受ける。be動詞の文（Ken is busier than Tom ___.）なら is が入る。前の動詞の種類を確かめてから選ぶ。',
      },
      {
        question: '誤りを直しなさい。My sister is the older than me.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '最上級で the を使う練習をしていると、比較級の the も自然に見えてしまう。日本語に訳しても違和感がないため気づきにくい。',
        correctAnswer: 'My sister is older than me.（the を取る）',
        correctExplanation:
          '比較級に the はつけない。the がつくのは最上級（the oldest）と、of the two を伴う特別な形（She is the older of the two.）だけである。than がある文で the を見たら、まず疑うこと。',
      },
    ],
  },

  {
    id: 'koko_eigo_s236',
    subject: 'eigo',
    examType: 'koko',
    title: '比較級の強調：much / far / a lot と、very が使えない理由',
    description: '「ずっと〜だ」を表す強調語を覚え、very との使い分けを区別する',
    intro:
      '「この町はあの町よりずっと大きい」の「ずっと」を very にすると誤りになります。very は比較級を強めることができないからです。代わりに使うのが much や far。たった一語ですが、上位校の適語選択で必ずと言っていいほど問われるポイントです。',
    order: 736,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '比較級を強めるのは much / far / a lot / even / still（「ずっと」「はるかに」）。',
      'very は比較級を強められない（× very taller）。very は原級を強める（very tall）。',
      '差が小さいときは a little / a bit（少し〜だ）を使う。',
      '最上級を強めるのは much / by far（the very ~ という形もある）。',
      'much は「much + 比較級」の語順。比較級のあとには置かない。',
    ],
    sections: [
      {
        heading: 'much / far で比較級を強める',
        body: `比較級を「ずっと」「はるかに」と強めるときは much、far、a lot を比較級の前に置く。

例）City C is much larger than City A.（C市はA市よりずっと大きい）
　　This question is much more difficult than that one.（この問題はあの問題よりずっと難しい）
　　He runs far faster than I do.（彼は私よりはるかに速く走る）
　　Today is a lot colder than yesterday.（今日は昨日よりずっと寒い）

■ 差が小さいときは a little
例）City B is a little larger than City A.（B市はA市より少し大きい）
　　I got up a little earlier than usual.（私はいつもより少し早く起きた）

■ even / still
例）This one is even better.（こちらのほうがさらによい）
　　It became still colder at night.（夜にはさらに寒くなった）

■ 語順
強調語は必ず比較級の前に置く。
× City C is larger much than City A.
○ City C is much larger than City A.
more 型の語でも同じ。○ much more expensive　× more much expensive

⚠ 注意：very は比較級を強められない。× very larger　× very more difficult
very が付くのは原級である（very large, very difficult）。「ずっと」を very と訳して当てはめる誤りが最も多い。

★ ポイント：much は「量が多い」という意味では数えられない名詞に使うが、比較級の前では「ずっと」という強調の副詞になる。同じ much でもはたらきが違うことを意識する。`,
        figureId: 'lf_kokoeigoext07_236',
      },
      {
        heading: '最上級・原級の強め方と、使い分けの整理',
        body: `■ 最上級を強める
much / by far を the の前後に置く。
例）This is much the best plan.（これがずばぬけて最良の案だ）
　　This is by far the best plan.（同じ意味。by far のほうがよく使う）
また、the very ＋ 最上級 という形もある。
例）This is the very best plan.（これこそ最良の案だ）
⚠ 注意：ここでの very は最上級の前に the とセットで置く特別な使い方で、比較級には使えない。

■ 原級を強める
very、so、really などを使う。
例）This bag is very heavy.／This bag is so heavy.
原級比較 as ~ as を強めるときは、very ではなく just や almost を使う。
例）He is just as tall as his brother.（彼は兄とちょうど同じくらいの背だ）
　　She is almost as tall as her mother.（彼女は母とほぼ同じくらいの背だ）

■ 整理表
原級 tall → very tall（とても背が高い）
比較級 taller → much taller / far taller（ずっと背が高い）
最上級 the tallest → by far the tallest（ずばぬけて背が高い）
原級比較 as tall as → just as tall as（ちょうど同じくらい）

★ ポイント：適語選択の問題では、空所の直後の語形を見る。直後が比較級なら much / far / a lot / even、原級なら very / so、the ＋ 最上級なら by far を選ぶ。語形から逆に判断できる。

例）This computer is （very / much） more useful than that one. → 直後が more useful（比較級）なので much。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。This mountain is （very / much） higher than that one.',
        wrongAnswer: 'very',
        trapExplanation:
          '日本語の「とても高い」「ずっと高い」がどちらも very で表せそうに感じてしまう。原級と比較級で強調語が違うことを知らないと必ず間違える。',
        correctAnswer: 'much',
        correctExplanation:
          'very は原級（very high）を強める語で、比較級を強めることはできない。比較級を強めるのは much / far / a lot / even である。直後が higher という比較級なので much を選ぶ。',
      },
      {
        question: '誤りを直しなさい。My bag is heavier much than yours.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '「重い・ずっと」という日本語の語順につられ、強調語を比較級のあとに置いてしまう。単語はすべて正しいので見落としやすい。',
        correctAnswer: 'My bag is much heavier than yours.',
        correctExplanation:
          '強調の much は比較級の直前に置く。much heavier than の語順が正しい。more 型の語でも much more expensive のように、much は必ず more の前に来る。',
      },
    ],
  },

  {
    id: 'koko_eigo_s237',
    subject: 'eigo',
    examType: 'koko',
    title: '差を表す語句：two years older / 20 centimeters taller',
    description: '「〜歳年上」「〜センチ高い」など、どれだけ違うかを比較級の前に置く形を身につける',
    intro:
      '「兄は私より3歳年上だ」。この「3歳」をどこに入れるか迷ったことはありませんか。英語では three years older のように、差を表す語句を比較級のすぐ前に置きます。数値をあつかう問題は入試でよく出るので、語順と単位の形をここで固めましょう。',
    order: 737,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '差は比較級の直前に置く：two years older、20 centimeters taller。',
      '単位は複数形にする（two years、20 centimeters）。1のときは単数（one year older）。',
      'much / a little も同じ位置に入る「差を表す語」の仲間。',
      '年齢差は 数字 + years older / younger than ~。',
      '差を問う問題では、二つの数値の引き算をしてから英文にする。',
    ],
    sections: [
      {
        heading: '差の語句の置き場所',
        body: `どれだけ違うかを表す語句は、比較級の直前に置く。

例）Ken is two years older than Tom.（ケンはトムより2歳年上だ）
　　This bridge is 20 meters longer than that one.（この橋はあの橋より20メートル長い）
　　My sister is five centimeters taller than I am.（姉は私より5センチ背が高い）
　　This book is 300 yen cheaper than that one.（この本はあの本より300円安い）
　　He arrived ten minutes earlier than me.（彼は私より10分早く着いた）

■ 単位は複数形
差が2以上なら複数形にする。
○ two years older　× two year older
○ 20 meters longer　× 20 meter longer
差が1なら単数形。
例）Ken is one year older than Tom.（ケンはトムより1歳年上だ）

■ much / a little も同じ位置
much taller（ずっと背が高い）、a little taller（少し背が高い）も、数値と同じ位置に入る「差を表す語」である。
例）Ken is a little taller than Tom.

■ 数値からの英作文
Ken 15歳、Tom 13歳 → 15 − 13 ＝ 2 なので、Ken is two years older than Tom.
逆から言うなら Tom is two years younger than Ken.

★ ポイント：日本語の語順「トムより2歳年上」は英語では逆順（two years older than Tom）になる。日本語のまま並べると × older two years than Tom という誤りになるので、必ず〈差 ＋ 比較級 ＋ than〉のかたまりで覚える。`,
      },
      {
        heading: '差を使った問題の解き方',
        body: `入試では、表やグラフの数値を読み取って差を英語で表す問題が出る。

■ 手順
①二つの数値を確認する。
②大きいほうを主語にするか、小さいほうを主語にするかを決める。
③引き算をして差を出す。
④〈差 ＋ 比較級 ＋ than〉の順に並べる。

例）身長：Ken 152 cm、Bob 168 cm
　差は 168 − 152 ＝ 16 cm
　→ Bob is 16 centimeters taller than Ken.
　→ Ken is 16 centimeters shorter than Bob.

例）値段：Bag A 3,000円、Bag C 15,000円
　差は 15,000 − 3,000 ＝ 12,000円
　→ Bag C is 12,000 yen more expensive than Bag A.
　→ Bag A is 12,000 yen cheaper than Bag C.

■ 倍数との違い
「12,000円高い」は差なので比較級（more expensive than）。
「5倍の値段だ」は倍数なので原級（five times as expensive as）。
15,000 ÷ 3,000 ＝ 5 なので、Bag C is five times as expensive as Bag A. とも言える。同じデータでも、差か倍かで使う形が変わる。

⚠ 注意：yen は複数形にしない（× 300 yens）。同様に単位でも percent はふつう複数形にしない。centimeter、meter、year、minute、hour などは複数形にする。

★ ポイント：数値問題は必ず計算してから英文を作る。英文だけを見て感覚で答えると、差と倍数を取りちがえて失点する。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように英文を作りなさい。「この橋はあの橋より20メートル長い」',
        wrongAnswer: 'This bridge is longer 20 meters than that one.',
        trapExplanation:
          '日本語の「あの橋より20メートル長い」の語順どおりに並べてしまう。差を表す語句が比較級の前に来るという英語独自の語順を知らないと起こる。',
        correctAnswer: 'This bridge is 20 meters longer than that one.',
        correctExplanation:
          '差を表す語句は比較級の直前に置く。〈20 meters ＋ longer ＋ than〉の順である。much taller、a little older と同じ位置だと考えるとわかりやすい。',
      },
      {
        question: '（　）に入る語を答えなさい。My brother is three （　） older than I am.（「3歳年上」の意味に）',
        wrongAnswer: 'year',
        trapExplanation:
          'year old（〜歳）という言い方につられて単数形にしてしまう。ten years old のハイフンなしの形と混同していることも原因である。',
        correctAnswer: 'years',
        correctExplanation:
          '差が2以上のときは単位を複数形にする。three years older が正しい。なお He is ten years old.（10歳です）も複数形 years である。単数になるのは a ten-year-old boy のようにハイフンでつなぐときだけである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s238',
    subject: 'eigo',
    examType: 'koko',
    title: '比べる対象をそろえる：than mine / than that of ~',
    description: '人と物、単数と複数を取りちがえずに比べるための、代名詞と that / those の使い方',
    intro:
      '「私のかばんはあなたより重い」。日本語では自然に聞こえますが、英語で My bag is heavier than you. と書くと「かばんとあなた自身」を比べる変な文になります。比べるものはそろえる。この一点を守るための道具が、所有代名詞と that / those です。',
    order: 738,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '比べる対象は同じ種類にそろえる（かばん対かばん、人口対人口）。',
      '「あなたのかばん」は yours、「私のかばん」は mine と所有代名詞で受ける。',
      '数えられる名詞のくり返しは that one / those（those ones とは言わない）。',
      '〈the + 名詞 + of A〉のくり返しは that of A（単数）／those of A（複数）。',
      '人口・面積などを比べる文で that of ~ は頻出。',
    ],
    sections: [
      {
        heading: '所有代名詞と that / those',
        body: `比較の文では、同じ種類のものどうしを比べなければならない。くり返しをさけるために次の語を使う。

■ 所有代名詞
mine（私のもの）、yours（あなたのもの）、his、hers、ours、theirs
例）My bag is heavier than yours.（私のかばんはあなたのより重い）＝ than your bag
　　Her score was better than mine.（彼女の点数は私のよりよかった）＝ than my score

■ アポストロフィ s
例）Ken's score is better than Aya's.（ケンの点数はアヤのよりよい）＝ than Aya's score

■ one / ones
数えられる名詞のくり返しには one（単数）、ones（複数）を使う。
例）This book is more interesting than that one.（この本はあの本よりおもしろい）
　　These shoes are cheaper than those.（この靴はあれより安い）
※ those ones とは言わない。

⚠ 注意：× My bag is heavier than you.（かばんと人を比べている）
　　　　○ My bag is heavier than yours.
入試ではこの誤りを直させる問題が定番である。日本語では自然なので気づきにくい。

★ ポイント：than のあとを見て「これは何と何を比べているか」を必ず声に出して確かめる。主語が物なら、than のあとも物でなければならない。`,
      },
      {
        heading: 'that of / those of の使い方',
        body: `〈the ＋ 名詞 ＋ of ～〉というかたまりをくり返すときは、名詞の部分を that（単数）／those（複数）に置きかえる。

例）The population of Tokyo is larger than that of Osaka.
　（東京の人口は大阪の人口より多い）※ that ＝ the population
例）The weather in Japan is milder than that in Canada.
　（日本の天気はカナダの天気より穏やかだ）※ that ＝ the weather
例）The prices of these books are higher than those of those magazines.
　（これらの本の値段はあれらの雑誌の値段より高い）※ those ＝ the prices（複数）

■ 単数か複数かの判断
くり返す名詞が単数（population, weather, climate, size）→ that
くり返す名詞が複数（prices, students, houses）→ those

■ 人口を比べる文の注意
人口の多い・少ないは large / small を使う。× more people ではなく large を使うのが標準である。
例）The population of Tokyo is larger than that of Osaka.（○）
　　The population of Tokyo is more than that of Osaka.（人口の「数値」を比べる言い方としては使えるが、入試では larger が求められることが多い）

■ one との違い
one は数えられる名詞のくり返し（this book → that one）。
that of は〈the ＋ 名詞 ＋ of〉の名詞部分のくり返しで、数えられない名詞にも使える。
× The population of Tokyo is larger than one of Osaka. は誤り。

★ ポイント：文の主語が The 名詞 of ~ の形になっていたら、than のあとは that of / those of になると身構える。これは高校入試の英作文・整序で頻出のパターンである。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。My bike is newer than you.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '日本語の「私の自転車はあなたより新しい」がそのまま自然に聞こえるため、自転車と人を比べていることに気づかない。',
        correctAnswer: 'My bike is newer than yours.',
        correctExplanation:
          '比べる対象は同じ種類にそろえる。主語が自転車なので、than のあとも自転車でなければならない。your bike を一語で表す所有代名詞 yours を使う。than your bike と書いてもよい。',
      },
      {
        question: '（　）に入る語を答えなさい。The population of Osaka is smaller than （　） of Tokyo.',
        wrongAnswer: 'one',
        trapExplanation:
          'くり返しをさける語といえば one だと覚えているため、that を選べない。one は数えられる名詞にしか使えないという条件を見落としている。',
        correctAnswer: 'that',
        correctExplanation:
          '〈the ＋ 名詞 ＋ of〉のくり返しは that（単数）／those（複数）を使う。ここでは the population のくり返しなので that of Tokyo とする。one が使えるのは a book → one のように数えられる名詞のときだけである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s239',
    subject: 'eigo',
    examType: 'koko',
    title: '比較の疑問文：Which is 比較級, A or B?',
    description: '二つを比べてたずねる疑問文と、その答え方の型を身につける',
    intro:
      '「紅茶とコーヒー、どちらが好き？」を英語でたずねるとき、最後に or でつなぐ形になります。Which do you like better, tea or coffee? この形は会話文の穴うめや対話文の並べかえで毎年のように出ます。質問と答えをセットで練習しておきましょう。',
    order: 739,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '二つを比べる疑問文は Which is + 比較級, A or B? の形。',
      '人をたずねるときは Who is + 比較級, A or B?',
      '好みをたずねるときは Which do you like better, A or B?',
      '三つ以上なら最上級を使い、Which ~ the 最上級? となる。',
      '答えるときは質問と同じ形（better なら better）を使って答える。',
    ],
    sections: [
      {
        heading: '二つを比べてたずねる形',
        body: `二つのもののうちどちらかをたずねるときは、文末に〈, A or B?〉を付ける。

■ Which is + 比較級, A or B?
例）Which is longer, the Shinano River or the Tone River?
　—The Shinano River is.（信濃川と利根川ではどちらが長いですか—信濃川です）
例）Which is more useful, a smartphone or a computer?
　—A smartphone is.

■ Who is + 比較級, A or B?（人をたずねる）
例）Who is taller, Ken or Tom?
　—Ken is.（ケンとトムではどちらが背が高いですか—ケンです）
例）Who runs faster, Ken or Tom?
　—Ken does.（一般動詞なので does で答える）

■ Which do you like better, A or B?
例）Which do you like better, tea or coffee?
　—I like tea better.（紅茶のほうが好きです）
例）Which do you like better, spring or fall?
　—I like fall better than spring.

★ ポイント：疑問文の中の or は「または」ではなく「AとBのどちら」を示す。イントネーションはAを上げてBを下げる。

⚠ 注意：Which is longer? のように比べる二つを示さない形でも成り立つが、入試では〈, A or B?〉まで書かせる問題が多い。コンマを忘れないこと。`,
      },
      {
        heading: '答え方と、三つ以上の場合',
        body: `■ 答え方の基本
質問で使われた動詞・形を使って答える。
・be動詞の質問 → 主語 ＋ is / are。例）Which is longer, A or B? — A is.
・一般動詞の質問 → 主語 ＋ does / do。例）Who runs faster, Ken or Tom? — Ken does.
・like ~ better の質問 → I like ~ better. で答える。

⚠ 注意：Which do you like better, tea or coffee? に対して × I like tea. とだけ答えるのは不十分とされることがある。better を残して I like tea better. と答えるほうが安全である。

■ 三つ以上をたずねるとき（最上級）
例）Which season do you like the best?（どの季節がいちばん好きですか）
　—I like summer the best.
例）Which is the highest mountain in Japan?（日本でいちばん高い山はどれですか）
　—Mt. Fuji is.
例）Who is the tallest of the three?（3人の中でだれがいちばん背が高いですか）
　—Bob is.

■ 二つか三つ以上かの見分け
「A or B」と二つだけ挙げられていれば比較級、「of the three」「in your class」など集団が示されていれば最上級である。

★ ポイント：会話文の空所補充では、答えの文（—Ken does. など）から質問の動詞を逆算できる。does があれば一般動詞の疑問文、is があれば be動詞の疑問文だと判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。Which do you like （　）, math or English?（「どちらが好きか」の意味に）',
        wrongAnswer: 'the best',
        trapExplanation:
          '「好き」といえば like ~ the best という形をよく練習するため、二つを比べる文でも最上級を入れてしまう。',
        correctAnswer: 'better',
        correctExplanation:
          'A or B と二つだけを比べているので比較級 better を使う。the best を使うのは三つ以上の中からいちばんを選ぶとき（Which subject do you like the best?）である。挙げられている数を確認してから選ぶ。',
      },
      {
        question: '質問に対する答えとして適切なものを選びなさい。Who runs faster, Ken or Tom? ア Ken is. イ Ken does.',
        wrongAnswer: 'ア Ken is.',
        trapExplanation:
          'Who is taller, Ken or Tom? — Ken is. の形を覚えていると、動詞が run に変わっても is で答えてしまう。',
        correctAnswer: 'イ Ken does.',
        correctExplanation:
          '質問の動詞が runs という一般動詞なので、答えも does で受ける。be動詞の質問（Who is taller ~?）なら Ken is. と答える。質問文の動詞の種類を見て答えを決めるのが原則である。',
      },
    ],
  },

  // ───────── 5. 最上級と in / of（s240〜s243） ─────────
  {
    id: 'koko_eigo_s240',
    subject: 'eigo',
    examType: 'koko',
    title: 'the + 最上級 と in：場所・集団の中でいちばん',
    description: '最上級の基本形と、in を使って「〜の中で」を表す場合を確認する',
    intro:
      '「クラスでいちばん背が高い」の「クラスで」は in my class。教室という場所、そして集団を表しています。最上級には必ずこの「どの範囲でいちばんか」がくっつきます。範囲を示す語を落とすと、入試では減点対象になることもあります。',
    order: 740,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '最上級は the + -est / the most ~ の形。',
      '「〜の中で」を表す語は in と of の二つ。',
      'in は場所・範囲・集団を表す単数の語につく（in Japan、in my class、in the world）。',
      '最上級の文には範囲を示す語句をつけるのがふつう。',
      '形容詞の最上級では the を省略しない。',
    ],
    sections: [
      {
        heading: '最上級の形と in の使い方',
        body: `三つ以上の中で「いちばん〜だ」というときは、〈the ＋ 最上級〉を使う。

■ 基本の形
Mt. Fuji is the highest mountain in Japan.（富士山は日本でいちばん高い山だ）
This is the newest computer in the room.（これは部屋でいちばん新しいコンピュータだ）
Ken is the tallest student in his class.（ケンはクラスでいちばん背が高い生徒だ）
This is the most beautiful park in this city.（これはこの市でいちばん美しい公園だ）

■ in を使う場合
in のあとには、場所や集団を表す単数の語が来る。
in Japan（日本で）／in the world（世界で）／in my class（私のクラスで）／in this city（この市で）／in my family（私の家族で）／in our school（私たちの学校で）／in the room（部屋で）

■ 名詞を省略する形
「いちばん〜な〔もの〕」の名詞部分は省略できる。
例）Ken is the tallest in his class.（ケンはクラスでいちばん背が高い）
　　＝ Ken is the tallest student in his class.
どちらも正しいが、名詞を残すときは the tallest student のように the を最初に置く。

★ ポイント：最上級の文は〈the ＋ 最上級 ＋ 名詞 ＋ 範囲〉の順に組み立てる。範囲の語句（in ~ / of ~）は文末に置く。

⚠ 注意：形容詞の最上級で the を落としてはいけない。× Ken is tallest student in his class. 副詞の最上級だけは the を省略できる（Ken runs (the) fastest in his class.）。`,
        figureId: 'lf_kokoeigoext07_240',
      },
      {
        heading: '最上級の文で気をつけること',
        body: `■ 主語と動詞の一致
例）This is the largest lake in Japan.（これは日本でいちばん大きい湖だ）
　　These are the oldest buildings in the town.（これらは町でいちばん古い建物だ）
主語が複数なら are、名詞も複数形になる。

■ 疑問文
例）Which is the highest mountain in Japan?（日本でいちばん高い山はどれですか）
　—Mt. Fuji is.
例）Who is the tallest in your class?（あなたのクラスでだれがいちばん背が高いですか）
　—Ken is.
例）What subject do you like the best?（何の教科がいちばん好きですか）
　—I like English the best.

■ 否定文
例）This is not the most expensive bag in the shop.（これは店でいちばん高いかばんではない）

■ 過去の文
例）It was the coldest day of the year.（それは一年でいちばん寒い日だった）
　　He was the youngest player on the team.（彼はチームでいちばん若い選手だった）

■ 範囲を示す語句の位置
文末に置くのが基本だが、〈in ~〉が長い場合も文末のままでよい。
例）Ken is the fastest runner in the history of our school.

★ ポイント：「〜の中で」にあたる語句を落とすと、何と比べているのかが伝わらない。英作文では必ず in ~ / of ~ を付ける習慣をつける。

例）並べかえ：( in / the / is / Japan / highest / Mt. Fuji / mountain ) → Mt. Fuji is the highest mountain in Japan.`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。Ken is tallest student in his class.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '副詞の最上級で the を省略できると習ったことから、形容詞の最上級でも the を落としてよいと考えてしまう。日本語に訳すと違和感がないので気づきにくい。',
        correctAnswer: 'Ken is the tallest student in his class.',
        correctExplanation:
          '名詞 student を修飾する形容詞の最上級なので the が必要である。the を省略できるのは Ken runs (the) fastest in his class. のように副詞の最上級のときだけである。',
      },
      {
        question: '（　）内の語を適切な形にしなさい。This is the （large） lake in Japan.',
        wrongAnswer: 'largeest',
        trapExplanation:
          '最上級は -est を付けると覚えているため、e で終わる語であることを忘れて e を二つ書いてしまう。the を書けた安心感でつづりの確認がおろそかになる。',
        correctAnswer: 'largest',
        correctExplanation:
          'e で終わる語には -st だけを付ける。large → largest。同じく nice → nicest、wide → widest、late → latest。最上級の文でも語形のつづりの規則はそのまま当てはまる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s241',
    subject: 'eigo',
    examType: 'koko',
    title: '最上級の of：複数を表す語の前は of',
    description: 'of the three / of all / of the four seasons など、of を使う場合を in と対比して覚える',
    intro:
      '「3人の中でいちばん」は of the three、「日本でいちばん」は in Japan。同じ「〜の中で」なのに前置詞が変わります。決め手は、あとに続く語が複数を表しているかどうか。この一点さえつかめば、of と in の選択問題は必ず取れます。',
    order: 741,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'of は複数を表す語の前につく（of the three、of all、of the four seasons）。',
      'in は場所・集団を表す単数の語の前につく（in Japan、in my class）。',
      '数字がついていたら of（of the five）、場所名なら in。',
      'of all（すべての中で）、of us all（私たち全員の中で）も頻出。',
      'my class は人の集まりだが単数の集団名なので in を使う。',
    ],
    sections: [
      {
        heading: 'of を使う場合と in を使う場合',
        body: `最上級の「〜の中で」には of と in の二つがあり、あとに来る語で使い分ける。

■ of ＋ 複数を表す語
of the three（3つ・3人の中で）
of the five（5つの中で）
of all（すべての中で）
of all the students（すべての生徒の中で）
of us all（私たち全員の中で）
of the four seasons（四季の中で）
of these books（これらの本の中で）

例）Bob is the tallest of the three.（ボブは3人の中でいちばん背が高い）
　　I like summer the best of the four seasons.（四季の中で夏がいちばん好きだ）
　　This is the most useful of all.（これがすべての中でいちばん役に立つ）

■ in ＋ 場所・集団を表す単数の語
in Japan（日本で）／in the world（世界で）／in my class（クラスで）／in my family（家族で）／in this city（この市で）／in our school（学校で）／in the group（グループで）

例）The Shinano River is the longest river in Japan.（信濃川は日本でいちばん長い川だ）
　　Ken is the tallest in his class.（ケンはクラスでいちばん背が高い）

★ ポイント：判断の手順は簡単である。あとの語が複数形か数を表していれば of、場所や集団の名前（単数）なら in。

⚠ 注意：class、family、group、team はどれも「人の集まり」だが、語としては単数なので in を使う。× of my class は誤り。人が複数いるかどうかではなく、語の形で判断する。`,
        figureId: 'lf_kokoeigoext07_241',
      },
      {
        heading: 'まぎらわしい例と、判断の練習',
        body: `■ 対比して覚える例
of the three students（3人の生徒の中で）… students が複数
in the class（クラスの中で）… class は単数の集団名
of all the students in my class（クラスのすべての生徒の中で）… of と in が両方入る形もある

例）Ken is the tallest of all the students in his class.
　（ケンはクラスのすべての生徒の中でいちばん背が高い）
of は students（複数）に、in は class（場所・集団）に対応している。

■ 判断練習
・of / in を選びなさい。
①This is the biggest lake （in） Japan. → Japan は場所 → in
②He is the youngest （of） the four. → the four は数 → of
③She is the best singer （in） our school. → our school は集団の名 → in
④Which do you like the best （of） these three? → these three は複数 → of
⑤August is the hottest month （of） the year. → the year は「一年（12か月）」を全体としてとらえるため of を使う決まり文句

■ of the year の注意
「一年でいちばん〜」は of the year という。year は単数だが、12か月の集まりと考えて of を使う慣用表現である。
例）It was the coldest day of the year.
これは覚えてしまうしかない例外である。

★ ポイント：選択問題で迷ったら、あとの語に「複数のもの」が並んでいる情景が浮かぶかどうかを考える。three students、all、these books は複数が浮かぶので of。Japan、my class は場所や枠が浮かぶので in。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に in または of を入れなさい。Ken is the tallest （　） the three.',
        wrongAnswer: 'in',
        trapExplanation:
          '「〜の中で」を in と覚えてしまい、in my class の形をそのまま当てはめてしまう。日本語の訳が同じなので区別しにくい。',
        correctAnswer: 'of',
        correctExplanation:
          'the three は「3人」という複数を表す語なので of を使う。of the three、of all、of the four seasons はすべて of。in を使うのは in Japan、in my class のように場所や集団の名前（単数）が続くときである。',
      },
      {
        question: '（　）に in または of を入れなさい。She is the best tennis player （　） her class.',
        wrongAnswer: 'of',
        trapExplanation:
          'クラスには生徒が何人もいるので複数だと考えて of を選んでしまう。実際に何人いるかで判断してしまうのが誤りのもと。',
        correctAnswer: 'in',
        correctExplanation:
          '判断するのは実際の人数ではなく語の形である。class は単数の集団名なので in を使う。of を使うのは of the students のように語そのものが複数形のときである。family、team、group も同じく in を使う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s242',
    subject: 'eigo',
    examType: 'koko',
    title: '最上級の the を使わない場合',
    description: '所有格がつくとき、副詞のとき、同一人・同一物の性質を比べるときの the の扱いを整理する',
    intro:
      '「私のいちばんの友達」は my best friend。the best friend とは言いません。所有格の my がある場所に the は入れないからです。最上級には the が必要と覚えていると、この形でつまずきます。the が消えるパターンを三つだけ押さえておきましょう。',
    order: 742,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '所有格（my, his, Ken\'s）がつくと the は使わない：my best friend。',
      '副詞の最上級では the を省略できる：Ken runs (the) fastest.',
      '同じ人・同じ物の性質を比べるときは the をつけない：This lake is deepest here.',
      'a と the は同時に使えないのと同じで、限定する語は一つだけ。',
      'the most は「いちばん多くの」以外に「非常に」の意味になることもある（most people など）。',
    ],
    sections: [
      {
        heading: '所有格がつくときと、副詞のとき',
        body: `■ ①所有格がつくと the は消える
my、your、his、her、our、their、Ken's などの所有格と the は同時に使えない。
例）He is my best friend.（彼は私のいちばんの友達だ）× my the best friend
　　This is her most famous book.（これは彼女のいちばん有名な本だ）
　　Ken's oldest brother lives in Tokyo.（ケンのいちばん上の兄は東京に住んでいる）

これは a と the を同時に使えない（× a the book）のと同じ理屈である。名詞を限定する語は一つだけ置く。

■ ②副詞の最上級では the を省略できる
例）Ken runs (the) fastest in his class.（ケンはクラスでいちばん速く走る）
　　She got up (the) earliest of the five.（彼女は5人の中でいちばん早く起きた）
　　I like summer (the) best.（夏がいちばん好きだ）
the があってもなくても正しい。ただし形容詞の最上級では省略できない。
例）Ken is the fastest runner in his class.（the が必要）

■ 見分け方
最上級の直後に名詞があれば形容詞（the が必要）。動詞を説明していれば副詞（the は省略可）。
例）He is the best player.（名詞 player → 形容詞）
　　He plays (the) best.（動詞 plays を説明 → 副詞）

★ ポイント：入試では「the を入れる／入れない」の判断そのものが問われる。空所の直後に名詞があるかどうかをまず確認する。`,
      },
      {
        heading: '同一のものの性質を比べるとき',
        body: `■ ③同じ人・同じ物について「どこが／いつが最も〜か」を言うときは the をつけない
比べているのが「他のものとの間」ではなく「同じものの中の場所や時期」である場合、the を使わない。

例）This lake is deepest here.（この湖はここがいちばん深い）
　　※他の湖と比べているのではなく、同じ湖の中の場所を比べている。
例）This flower is most beautiful in the morning.（この花は朝がいちばん美しい）
　　※他の花と比べているのではなく、同じ花の時間帯を比べている。

これに対し、他のものと比べる場合は the が必要である。
例）This lake is the deepest in Japan.（この湖は日本でいちばん深い）

■ most の別の使い方
the がつかない most には「たいていの」という意味がある。
例）Most students in this school walk to school.（この学校のたいていの生徒は歩いて通学する）
　　Most of the students in this class like music.（このクラスの生徒の大部分は音楽が好きだ）
※ most of ~ の形では of のあとに the や my などの限定語が必要である（× most of students）。

また、a most ~ は「非常に〜な」という意味になる。
例）It was a most interesting story.（それは非常に興味深い話だった）
the most interesting story（いちばん興味深い話）とは意味が違う。

★ ポイント：the の有無で意味が変わる例（most students / the most students、a most / the most）は上位校でねらわれる。the がついているかどうかを、読解でも見落とさないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。Tom is my the best friend.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '「最上級には the が必要」というルールを守ろうとするあまり、所有格 my があるところにも the を入れてしまう。',
        correctAnswer: 'Tom is my best friend.',
        correctExplanation:
          '所有格（my, your, his, Ken\'s）と the は同時に使えない。名詞を限定する語は一つだけである。my best friend、her most famous book、Ken\'s oldest brother のように、所有格があれば the は不要になる。',
      },
      {
        question: '（　）に the が必要かどうか答えなさい。Most （　） the students in this class like music.',
        wrongAnswer: 'the は不要',
        trapExplanation:
          'Most students ~ という the を使わない形を知っていると、of がある場合も the が不要だと考えてしまう。of の有無で形が変わることを見落としている。',
        correctAnswer: 'the が必要（Most of the students ~）',
        correctExplanation:
          'most students（たいていの生徒）は the なしでよいが、most of ~ の形にすると of のあとに the や my などの限定語が必要になる。× most of students は誤りで、most of the students が正しい。some of、all of なども同じ規則である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s243',
    subject: 'eigo',
    examType: 'koko',
    title: '序数＋最上級と、経験を表す最上級の文',
    description: 'the second largest などの言い方と、the 最上級 ~ that I have ever ... の形を扱う',
    intro:
      '日本でいちばん長い川は信濃川、では二番目は。こういうときに使うのが the second longest という言い方です。また「今まで見た中でいちばん」という表現も入試の定番。最上級に一言加えるだけで表せる幅がぐっと広がります。',
    order: 743,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '「〜番目に…」は the + 序数 + 最上級（the second longest river）。',
      '序数は second、third、fourth、fifth ~。the second largest city のように名詞の前に置く。',
      '「今まで〜した中でいちばん…」は the + 最上級 + 名詞 + (that) 主語 + have ever + 過去分詞。',
      'ever は「今までに」。現在完了の経験用法と組み合わせる。',
      '最上級のあとの that は関係代名詞で、省略できる。',
    ],
    sections: [
      {
        heading: '「〜番目にいちばん」の言い方',
        body: `「二番目に長い」「三番目に大きい」は、the と最上級の間に序数を入れる。

■ 形
the ＋ 序数 ＋ 最上級 ＋ 名詞
例）The Tone River is the second longest river in Japan.（利根川は日本で二番目に長い川だ）
　　Osaka is the third largest city in Japan.（大阪は日本で三番目に大きい都市だ）
　　This is the second most popular sport in our school.（これは学校で二番目に人気のあるスポーツだ）
　　※ more 型の語でも the second most ~ の順は同じ。

■ 序数
first（1番目）、second（2番目）、third（3番目）、fourth（4番目）、fifth（5番目）、sixth、seventh、eighth、ninth、tenth
⚠ 注意：つづりに注意する語 — fourth（four に th）、fifth（five ではない）、eighth（eight に h 一つ）、ninth（nine の e を落とす）、twelfth。

■ 比較級で言いかえる
The Tone River is the second longest river in Japan.
＝ Only the Shinano River is longer than the Tone River in Japan.
（日本で利根川より長いのは信濃川だけだ）
このような言いかえが読解で出ることもある。

★ ポイント：数値の表を読んで「二番目に〜なもの」を答えさせる問題は頻出である。表の並べかえをしてから序数を決めること。

⚠ 注意：× the second longest の the を落とさない。× second longest river だけでは不完全である。`,
      },
      {
        heading: '「今まで〜した中でいちばん…」',
        body: `現在完了の経験用法と最上級を組み合わせると、「今まで〜した中でいちばん…」という強い言い方になる。

■ 形
the ＋ 最上級 ＋ 名詞 ＋ (that) ＋ 主語 ＋ have / has ever ＋ 過去分詞

例）This is the most beautiful picture that I have ever seen.
　（これは私が今までに見た中でいちばん美しい絵だ）
例）He is the kindest person I have ever met.
　（彼は私が今までに会った中でいちばん親切な人だ）※ that の省略
例）That was the best movie I had ever seen.
　（あれは私がそれまでに見た中でいちばんよい映画だった）※ 過去の文なら had ever

■ ポイント
・that は関係代名詞で、省略できる。
・ever は「今までに」。疑問文や最上級のあとで使う。
・動詞は過去分詞にする（see → seen、meet → met、eat → eaten、read → read）。

■ 書きかえ
This is the most interesting book that I have ever read.
＝ I have never read such an interesting book.（こんなにおもしろい本を読んだことがない）
＝ I have never read a more interesting book than this.
このような否定文への書きかえも上位校で出る。

⚠ 注意：× the most beautiful picture that I have ever saw（過去形になっている）→ seen が正しい。現在完了なので過去分詞を使う。

★ ポイント：会話文の感想を述べる場面でよく使われる表現である。It was the best day of my life.（人生で最高の日だった）などの決まり文句とあわせて覚えておくとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように英文を完成させなさい。「これは日本で二番目に高い山です」This is the （　） mountain in Japan.',
        wrongAnswer: 'second higher',
        trapExplanation:
          '「二番目」なので一番ではない、つまり最上級ではなく比較級だと考えてしまう。序数と比較級を組み合わせる形は英語には存在しない。',
        correctAnswer: 'second highest',
        correctExplanation:
          '「〜番目に…」は〈the ＋ 序数 ＋ 最上級〉で表す。the second highest mountain が正しい。the second longest river、the third largest city も同じ形である。序数がついても最上級のままにする。',
      },
      {
        question: '（　）内の語を適切な形にしなさい。This is the best movie I have ever （see）.',
        wrongAnswer: 'saw',
        trapExplanation:
          '「今まで見た」という過去の意味に引かれて過去形にしてしまう。have があることを見落とすと必ず起こるミスである。',
        correctAnswer: 'seen',
        correctExplanation:
          'have ever のあとは現在完了なので過去分詞にする。see → saw（過去形）→ seen（過去分詞）。「今までに〜した中でいちばん」の形は〈the 最上級 ＋ 名詞 ＋ 主語 ＋ have ever ＋ 過去分詞〉と決まっている。',
      },
    ],
  },

  // ───────── 6. one of the 最上級（s244〜s246） ─────────
  {
    id: 'koko_eigo_s244',
    subject: 'eigo',
    examType: 'koko',
    title: 'one of the 最上級 + 複数名詞',
    description: '「最も〜なうちの一つ」を表す形と、名詞を複数形にする理由を理解する',
    intro:
      'エベレストは世界一高い山ですが、K2はどう説明しますか。「世界で最も高い山の一つ」と言えばぴったりです。英語では one of the highest mountains。ここで名詞が複数形になるのが最大のポイントで、単数形にすると即座に誤りになります。',
    order: 744,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'one of the + 最上級 + 複数名詞 で「最も〜なうちの一つ」。',
      '名詞は必ず複数形にする（one of the highest mountains）。',
      '「最も高い山々」というグループの中の「一つ」だから複数形になる。',
      '範囲を表す語（in the world、in Japan）を後ろに付けることが多い。',
      '訳は「最も〜な〜の一つ」または「とても〜な〜の一つ」。',
    ],
    sections: [
      {
        heading: '形と、複数形になる理由',
        body: `「最も〜なもののうちの一つ」は〈one of the ＋ 最上級 ＋ 複数名詞〉で表す。

例）K2 is one of the highest mountains in the world.
　（K2は世界で最も高い山の一つだ）
例）Kyoto is one of the oldest cities in Japan.
　（京都は日本で最も古い都市の一つだ）
例）He is one of the best players on the team.
　（彼はチームで最もよい選手の一人だ）
例）This is one of the most popular songs in Japan.
　（これは日本で最も人気のある歌の一つだ）

■ なぜ名詞が複数形になるのか
「最も高い山々」というグループを先に考え、その中の「一つ（one）」を取り出す言い方だからである。
〔the highest mountains in the world〕＝世界で最も高い山々（エベレスト、K2、カンチェンジュンガ…）
そのうちの one ＝ K2

例）Everest is the highest mountain in the world.（世界一高い山：単数）
　　K2 is one of the highest mountains in the world.（最も高い山の一つ：複数）
同じ内容でも、一位を言うか、上位のグループの一員と言うかで形が変わる。

⚠ 注意：× one of the highest mountain（単数形）は誤り。of のあとには「複数のかたまり」が来なければならない。one of my friends、one of the students も同じ理屈である。

★ ポイント：one of ~ を見たら「of のあとは複数」と反射的に確認する。最上級がなくても同じである（one of my friends、one of these books）。`,
        figureId: 'lf_kokoeigoext07_244',
      },
      {
        heading: '語順と、範囲を表す語句',
        body: `■ 語順の決まり
one ＋ of ＋ the ＋ 最上級 ＋ 複数名詞 ＋ 範囲（in ~ / of ~）
例）This is one of the most famous temples in Kyoto.
　（これは京都で最も有名な寺の一つだ）

more 型の語でも the most ~ の順は変わらない。
例）one of the most difficult questions（最も難しい問題の一つ）
例）one of the most interesting books（最もおもしろい本の一つ）

■ 範囲の語句
in the world、in Japan、in this city、on the team、of all（すべての中で）
例）She is one of the greatest singers of all time.（彼女は史上最も偉大な歌手の一人だ）

■ 「二番目に」と組み合わせる
one of the second ~ という言い方はしない。「二番目に高い山」なら the second highest mountain と単数で言う。

■ 似た形との区別
・the highest mountain in the world（世界一高い山：一つに決まる）
・one of the highest mountains in the world（世界で最も高い山の一つ：複数の候補のうち一つ）
・the second highest mountain in the world（世界で二番目に高い山：順位が決まる）
K2 は二番目に高い山なので、the second highest mountain とも one of the highest mountains とも言える。

★ ポイント：整序英作文では one / of / the / 最上級 / 複数名詞 の五つのパーツを順に置く。語群に複数形の名詞（mountains、cities、players）があれば one of の形だと見当がつく。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを直しなさい。Kyoto is one of the oldest city in Japan.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '「京都は一つの都市」なので単数形が正しいと感じてしまう。日本語の「最も古い都市の一つ」の「都市」が単数に見えることも原因である。',
        correctAnswer: 'Kyoto is one of the oldest cities in Japan.',
        correctExplanation:
          'one of ~ の of のあとは必ず複数を表す語句になる。「最も古い都市たち」というグループの中の一つ、と考えるので cities と複数形にする。one of my friends、one of the students も同じ形である。',
      },
      {
        question: '日本語に合う英文を選びなさい。「富士山は日本でいちばん高い山だ」ア Mt. Fuji is one of the highest mountains in Japan. イ Mt. Fuji is the highest mountain in Japan.',
        wrongAnswer: 'ア Mt. Fuji is one of the highest mountains in Japan.',
        trapExplanation:
          'one of the 最上級 の形を習った直後だと、最上級を使う文はすべてこの形にできると思ってしまう。しかし意味が変わることに気づいていない。',
        correctAnswer: 'イ Mt. Fuji is the highest mountain in Japan.',
        correctExplanation:
          '「いちばん高い山」と一位を断定するなら the highest mountain（単数）である。one of the highest mountains は「最も高い山の一つ」で、一位とは限らない。日本語が「いちばん」か「〜の一つ」かで形を選び分ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s245',
    subject: 'eigo',
    examType: 'koko',
    title: 'one of ~ が主語のときの動詞',
    description: '複数名詞にひきずられず、動詞を単数扱いにする判断のしかたを身につける',
    intro:
      'One of my friends （is / are） a doctor. どちらでしょうか。直前の friends が複数なので are を選びたくなりますが、正解は is です。主語はあくまで one。この「主語はどれか」を見抜く力は、比較だけでなく英文法全体の土台になります。',
    order: 745,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      'One of ~ が主語のとき、動詞は単数扱い（is / was / has / 動詞に s）。',
      '複数名詞は of のあとの修飾部分であって、主語ではない。',
      '主語の中心（核）になる語を見つけて、それに動詞を合わせる。',
      'Each of ~、Every ~ も単数扱い。',
      'Some of ~、Many of ~ は of のあとの名詞に合わせる（複数扱い）。',
    ],
    sections: [
      {
        heading: '主語の中心を見つける',
        body: `One of the students is from Canada. のような文で、動詞を単数にするか複数にするかは、主語の「中心となる語」で決まる。

■ 主語の中心は one
One of the students is from Canada.（生徒の一人はカナダ出身だ）
主語＝One（一人）、of the students はそれを説明する修飾部分。したがって is。

例）One of my friends lives in Osaka.（友達の一人は大阪に住んでいる）※ lives と s が付く
例）One of these books was written by a famous writer.（これらの本の一冊は有名な作家によって書かれた）※ was
例）One of the highest mountains in the world is K2.（世界で最も高い山の一つはK2だ）※ is

⚠ 注意：× One of my friends are a doctor. は誤り。直前の friends（複数）に引かれて are にしてしまう典型的なミスである。

■ 修飾部分を消して確かめる
主語の中心を見つけるには、of 以下をかっこでくくって消してみるとよい。
One 〔of the students〕 is from Canada. → One is from Canada. → 単数 → is
The students 〔in this class〕 are kind. → The students are kind. → 複数 → are

★ ポイント：英語の主語は「前から数えて最初の名詞のかたまりの中心」で決まる。修飾語がいくら長くても、中心の語に動詞を合わせる。この見方は関係代名詞や分詞の単元でもそのまま使える。`,
      },
      {
        heading: '単数扱い・複数扱いの語をまとめる',
        body: `■ 単数扱いになるもの
one of ~：One of the boys is my brother.
each of ~：Each of the students has a computer.（生徒はそれぞれコンピュータを持っている）
every ~：Every student in this class likes music.（every のあとは単数名詞）
either of ~：Either of the answers is correct.（どちらの答えも正しい）
neither of ~：Neither of them was there.

■ of のあとに合わせるもの
some of ~：Some of the students are from China.（複数）
　　　　　Some of the water was gone.（数えられない名詞なら単数）
most of ~：Most of my friends like sports.（複数）
all of ~：All of the books are new.（複数）／All of the money was spent.（単数）
half of ~：Half of the students were absent.

■ 練習
①One of the questions （was / were） very difficult. → 主語は One → was
②Some of the questions （was / were） very difficult. → some は questions に合わせる → were
③Each of the boys （has / have） a bike. → each → has
④Most of the water （was / were） gone. → water は数えられない → was

★ ポイント：one / each / every は単数、some / most / all / half は of のあとに合わせる、と二つのグループに分けて覚える。入試の適語選択では、of の直前の語がどちらのグループかを見ればよい。

⚠ 注意：現在形の一般動詞では s の有無で判断される。One of my friends plays the guitar.（plays に s）を、× play としないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。One of my friends （is / are） a soccer player.',
        wrongAnswer: 'are',
        trapExplanation:
          '動詞の直前にある friends が複数形なので、それに合わせて are を選んでしまう。主語の中心が one であることを見落としている。',
        correctAnswer: 'is',
        correctExplanation:
          '主語の中心は One（一人）で、of my friends はそれを説明する修飾部分にすぎない。したがって動詞は単数扱いの is になる。of 以下をかっこでくくって One 〔of my friends〕 is ~ と読むと判断しやすい。',
      },
      {
        question: '（　）に入る語を選びなさい。Some of the students （was / were） absent yesterday.',
        wrongAnswer: 'was',
        trapExplanation:
          'One of ~ は単数扱いだと覚えた直後に、of がある文はすべて単数扱いだと拡大して考えてしまう。',
        correctAnswer: 'were',
        correctExplanation:
          'some of ~ は of のあとの名詞に合わせる。students は複数なので were になる。単数扱いになるのは one of、each of、every、either of、neither of のグループである。some / most / all / half は of のあとに合わせると区別する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s246',
    subject: 'eigo',
    examType: 'koko',
    title: 'one of the 最上級 の訳し方と英作文',
    description: '自然な日本語訳と、英作文で使うときの組み立て方を練習する',
    intro:
      '「最も人気のある教科の一つ」という日本語、少し不自然に感じませんか。実は英語の one of the ~est は「とても〜なうちの一つ」というニュアンスで、日本語では「有数の」「屈指の」と訳すと自然になります。訳し方と作り方を両方おさえておきましょう。',
    order: 746,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      'one of the 最上級 は「最も〜な…の一つ」「とても〜な…の一つ」と訳す。',
      '和訳では「有数の」「屈指の」とすると自然になることがある。',
      '英作文では①one of ②the 最上級 ③複数名詞 ④範囲 の順に組み立てる。',
      '主語に使うときは動詞を単数にする。',
      '断定を避けたいときに便利な表現なので、英作文で使いやすい。',
    ],
    sections: [
      {
        heading: '訳し方と使いどころ',
        body: `one of the ＋ 最上級 ＋ 複数名詞 は、直訳すると「最も〜な…のうちの一つ」だが、日本語としてはやや硬い。文脈に応じて次のように訳し分けるとよい。

例）Kyoto is one of the most popular cities in Japan.
　直訳：京都は日本で最も人気のある都市の一つだ
　自然：京都は日本有数の人気都市だ

例）He is one of the best players in the league.
　直訳：彼はリーグで最もよい選手の一人だ
　自然：彼はリーグ屈指の名選手だ

例）This is one of the most difficult questions on the test.
　自然：これはテストの中でもとりわけ難しい問題だ

■ なぜこの表現が便利か
「いちばん」と断定すると、事実として正しいかどうかを問われる。「最も〜な一つ」なら、上位のグループに入るという控えめな言い方になり、英作文で使いやすい。
例）Soccer is the most popular sport in the world.（断定）
　　Soccer is one of the most popular sports in the world.（控えめ）

■ 読解での注意
one of the ~est を「いちばん〜だ」と読んでしまうと、内容一致問題で誤りになることがある。
例）本文：Osaka is one of the largest cities in Japan.
　　選択肢：Osaka is the largest city in Japan.（→ 本文と一致しない）
「一つ」なのか「一位」なのかを区別して読むこと。

★ ポイント：入試の内容一致では、本文の one of ~ を選択肢で the 最上級 に変えて誤りを作る手口が定番である。読むときに one of を丸で囲む習慣をつけるとよい。`,
      },
      {
        heading: '英作文での組み立て方',
        body: `■ 手順
①one of と書く
②the ＋ 最上級 を続ける
③名詞を複数形にする
④範囲（in ~ / of ~）を付ける
⑤主語なら動詞を単数にする

例）「これは私たちの学校で最も古い建物の一つです」
①This is one of
②the oldest
③buildings
④in our school
→ This is one of the oldest buildings in our school.

例）「私の友達の一人は英語をとてもじょうずに話します」
→ One of my friends speaks English very well.（speaks に s）

例）「この歌は日本で最も有名な歌の一つだ」
→ This song is one of the most famous songs in Japan.

■ よくある誤りのチェックリスト
□ 名詞を複数形にしたか（× one of the oldest building）
□ the を入れたか（× one of oldest buildings）
□ 最上級の形は正しいか（× one of the most oldest）
□ 主語のときの動詞は単数か（× One of my friends speak）
□ 範囲を表す語句を付けたか

⚠ 注意：× one of the most oldest のように、-est 型の語に most を重ねない。old は older － oldest なので the oldest が正しい。

★ ポイント：英作文で高得点を取るには、書いたあとに上のチェックリストを一つずつ確認する。とくに複数形と動詞の一致は減点されやすい二大ポイントである。`,
      },
    ],
    trapExamples: [
      {
        question: '本文の内容と一致するものを選びなさい。本文：Nara is one of the oldest cities in Japan. ア 奈良は日本でいちばん古い都市だ イ 奈良は日本で最も古い都市の一つだ',
        wrongAnswer: 'ア 奈良は日本でいちばん古い都市だ',
        trapExplanation:
          'one of を読み飛ばして the oldest city と同じ意味だと考えてしまう。読解のスピードを上げたときにとくに起こりやすい。',
        correctAnswer: 'イ 奈良は日本で最も古い都市の一つだ',
        correctExplanation:
          'one of the oldest cities は「最も古い都市のうちの一つ」で、一位だとは述べていない。一位を表すのは the oldest city in Japan（単数）である。内容一致問題ではこの差がそのまま正誤になる。',
      },
      {
        question: '日本語を英語にしなさい。「彼は私たちのチームで最もよい選手の一人だ」',
        wrongAnswer: 'He is one of the best player in our team.',
        trapExplanation:
          '「一人」という日本語に引かれて名詞を単数形にしてしまう。また team には in ではなく on を使うことも見落としやすい。',
        correctAnswer: 'He is one of the best players on our team.',
        correctExplanation:
          'one of ~ の of のあとは複数形なので players とする。またチームの一員であることを表すときは on our team を使うのが一般的である（in our team も見られるが on が標準）。複数形と前置詞の二点を確認する。',
      },
    ],
  },

  // ───────── 7. 比較級を使った最上級の言いかえ（s247〜s250） ─────────
  {
    id: 'koko_eigo_s247',
    subject: 'eigo',
    examType: 'koko',
    title: '比較級 + than any other + 単数名詞',
    description: '最上級の内容を比較級で表す代表的な形と、名詞を単数にする理由をつかむ',
    intro:
      '「東京は日本でいちばん大きい都市だ」を、最上級を使わずに言えるでしょうか。「他のどの都市よりも大きい」と言えば同じ意味になります。英語では than any other city。名詞が単数になるのが重要な点で、書きかえ問題では毎年のように出題されます。',
    order: 747,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      'A is 比較級 than any other + 単数名詞 ＝ A is the 最上級（Aがいちばん〜だ）。',
      'any other のあとの名詞は必ず単数形。',
      '「他のどの〜よりも」という意味なので、A自身は含まない（other が必要）。',
      '肯定文で使う。否定文では any other を使わない。',
      '範囲を表す語句（in Japan など）は文末に置く。',
    ],
    sections: [
      {
        heading: 'than any other の形と意味',
        body: `最上級の内容は、比較級を使って言いかえることができる。その代表が〈比較級 ＋ than any other ＋ 単数名詞〉である。

例）Tokyo is the largest city in Japan.（東京は日本でいちばん大きい都市だ）
　＝ Tokyo is larger than any other city in Japan.（東京は日本の他のどの都市よりも大きい）

例）Mt. Fuji is the highest mountain in Japan.
　＝ Mt. Fuji is higher than any other mountain in Japan.

例）He runs faster than any other student in his class.
　＝ He runs (the) fastest in his class.（彼はクラスでいちばん速く走る）

■ 名詞が単数になる理由
any は「どの一つを取っても」という意味なので、単数名詞と結びつく。「他のどの一つの都市よりも」と考える。
⚠ 注意：× than any other cities は誤り。× than other city（other だけ）も誤りである。

■ other が必要な理由
other がないと「どの都市よりも大きい」となり、東京自身も含まれてしまう。自分より自分が大きいことはありえないので、自分を除く other が必要になる。

★ ポイント：書きかえの手順は次のとおり。
①最上級の文の主語をそのまま残す。
②the 最上級 → 比較級 に直す。
③than any other ＋ 単数名詞 を続ける。
④範囲（in Japan など）はそのまま文末に置く。`,
        figureId: 'lf_kokoeigoext07_247',
      },
      {
        heading: '書きかえの練習と注意点',
        body: `■ 最上級 → 比較級
Soccer is the most popular sport in my class.
→ Soccer is more popular than any other sport in my class.
（サッカーはクラスの他のどのスポーツよりも人気がある）

Ken is the tallest student in his class.
→ Ken is taller than any other student in his class.

This is the oldest temple in this city.
→ This is older than any other temple in this city.

■ 比較級 → 最上級
The Shinano River is longer than any other river in Japan.
→ The Shinano River is the longest river in Japan.

■ 注意点
①名詞の単複：any other のあとは単数、the 最上級のあとは単数（the tallest student）。一方、one of の形では複数（one of the tallest students）になる。三つの形で名詞の形が変わることを整理しておく。
②比較級の語形を戻し忘れない：× Tokyo is large than any other city.
③範囲の語句：in Japan、in my class などは書きかえても残す。落とすと減点になる。

■ 主語が人でないとき
物や事が主語でも同じ形が使える。
例）Health is more important than anything else.（健康は他の何よりも大切だ）
※ 名詞ではなく「もの一般」を指すときは anything else（他の何か）を使う。人なら anyone else（他のだれか）。
例）He can run faster than anyone else in his school.

★ ポイント：any other ＋ 単数名詞／anything else／anyone else の三つを、対象が「特定の名詞か・物一般か・人一般か」で使い分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。Tokyo is the largest city in Japan.（than を使って）',
        wrongAnswer: 'Tokyo is larger than any other cities in Japan.',
        trapExplanation:
          '「他のどの都市よりも」という日本語が複数のイメージを持つため、名詞を複数形にしてしまう。other が複数を連想させることも原因である。',
        correctAnswer: 'Tokyo is larger than any other city in Japan.',
        correctExplanation:
          'any は「どの一つを取っても」という意味なので、あとに来る名詞は単数形にする。than any other city が正しい。同じく than any other student、than any other mountain も単数である。',
      },
      {
        question: '誤りを直しなさい。Mt. Fuji is higher than any mountain in Japan.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          'any mountain（どの山）でも意味が通じるように見えるため、other の抜けに気づかない。日本語訳「どの山よりも高い」からも違和感がない。',
        correctAnswer: 'Mt. Fuji is higher than any other mountain in Japan.',
        correctExplanation:
          'other がないと、比べる対象に富士山自身が含まれてしまい「富士山は富士山より高い」という矛盾が生じる。自分を除くために any other とする必要がある。書きかえ問題では other の有無が採点対象になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s248',
    subject: 'eigo',
    examType: 'koko',
    title: 'No other ~ is 比較級 than / as 原級 as',
    description: '否定語を主語にして最上級の内容を表す形を、二通りとも使えるようにする',
    intro:
      '「東京より大きい都市は日本にない」。これも「東京がいちばん大きい」と同じ意味ですね。英語では No other city で文を始めます。否定の語が主語になるという英語らしい発想で、日本語からはなかなか出てこない形なので、型として覚えてしまいましょう。',
    order: 748,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      'No other + 単数名詞 + is + 比較級 + than A ＝ A がいちばん〜だ。',
      'No other + 単数名詞 + is + as 原級 as A も同じ意味。',
      'No other のあとの名詞は単数、動詞も単数扱い（is / has）。',
      '文全体はすでに否定の意味を含むので、not は不要。',
      '一つの内容を最上級・than any other・No other の三通りで表せるようにする。',
    ],
    sections: [
      {
        heading: 'No other を主語にする形',
        body: `否定語 no を主語に置いて「〜より…なものはない」と表すと、結果として「Aがいちばん…だ」という意味になる。

■ 二通りの形
①No other ＋ 単数名詞 ＋ is ＋ 比較級 ＋ than A.
②No other ＋ 単数名詞 ＋ is ＋ as ＋ 原級 ＋ as A.

例）Tokyo is the largest city in Japan.
　＝ No other city in Japan is larger than Tokyo.
　＝ No other city in Japan is as large as Tokyo.
　＝ Tokyo is larger than any other city in Japan.

例）Mt. Fuji is the highest mountain in Japan.
　＝ No other mountain in Japan is higher than Mt. Fuji.
　＝ No other mountain in Japan is as high as Mt. Fuji.

■ 形の注意
・No other のあとの名詞は単数形（× No other cities）。
・動詞も単数扱いになる（is、has、runs）。
・no がすでに否定を表しているので、not を加えない。× No other city is not larger than Tokyo.
・範囲を表す語句（in Japan）は名詞の直後に置く。No other city in Japan is ~ の語順。

★ ポイント：②の as 原級 as の形では語形を原級に戻すことを忘れない。× No other city is as larger as Tokyo. は誤りである。

⚠ 注意：意味の向きに注意する。「Tokyo より大きい都市はない」＝「Tokyo がいちばん大きい」。文頭の No に引かれて「東京は大きくない」と読みちがえないこと。`,
      },
      {
        heading: '主語が人・動詞が一般動詞の場合',
        body: `■ 人が主語の場合
例）Ken is the tallest student in his class.
　＝ No other student in his class is taller than Ken.
　＝ No other student in his class is as tall as Ken.
　＝ Ken is taller than any other student in his class.

■ 一般動詞の文
例）Ken runs (the) fastest in his class.（ケンはクラスでいちばん速く走る）
　＝ No other student in his class runs faster than Ken.
　＝ No other student in his class runs as fast as Ken.
　＝ Ken runs faster than any other student in his class.
※ No other student は単数扱いなので runs と s が付く。

■ 数量の場合
例）Yuka has the most books of the three.
　＝ No other student of the three has more books than Yuka.
　＝ No other student of the three has as many books as Yuka.

■ 書きかえ手順のまとめ
①最上級の文の「範囲」から名詞を取り出す（in his class の student など）。
②No other ＋ その名詞（単数）＋ 範囲 を主語にする。
③動詞は単数扱いにする。
④比較級 ＋ than ＋ もとの主語、または as 原級 as ＋ もとの主語 を続ける。

★ ポイント：この四通り（最上級／than any other／No other ~ 比較級／No other ~ as 原級 as）はセットで問われる。一つの例文で四通りすべてを書ける状態にしておくと、どの出題形式にも対応できる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。Ken is the tallest student in his class.（No other で始めて、as を使って）',
        wrongAnswer: 'No other student in his class is as taller as Ken.',
        trapExplanation:
          '「比べる文だから比較級」と考えて、as と as の間にも比較級を入れてしまう。No other の形が二通りあることで混乱が生じている。',
        correctAnswer: 'No other student in his class is as tall as Ken.',
        correctExplanation:
          'as ~ as にはさむのは必ず原級である。tall をそのまま入れる。比較級を使うなら No other student in his class is taller than Ken. と than の形にする。as を使うか than を使うかで語形が決まる。',
      },
      {
        question: '誤りを直しなさい。No other cities in Japan is larger than Tokyo.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '「他の都市はたくさんある」というイメージから名詞を複数形にしてしまう。しかし動詞は is のままなので、主語と動詞が食い違っている。',
        correctAnswer: 'No other city in Japan is larger than Tokyo.',
        correctExplanation:
          'No other のあとの名詞は単数形にし、動詞も単数扱いにする。No other city ~ is が正しい。any other ＋ 単数名詞 と同じく、「どの一つを取っても」という考え方から単数になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s249',
    subject: 'eigo',
    examType: 'koko',
    title: 'Nothing is more ~ than / Nothing is as ~ as',
    description: '「〜ほど…なものはない」を表す形と、anything else / anyone else との関係を整理する',
    intro:
      '「健康ほど大切なものはない」。日本語でもよく使う言い回しですが、英語では Nothing is more important than health. と、否定の nothing が主語になります。物か人かで nothing と nobody を使い分ける点まで押さえれば、英作文の表現の幅が一気に広がります。',
    order: 749,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'Nothing is more ~ than A. ＝ Nothing is as ~ as A. ＝ A is the most ~.',
      '人が対象なら Nobody / No one を使う。',
      'nothing、nobody は単数扱い（is / has）。',
      'A is 比較級 than anything else / anyone else でも同じ内容を表せる。',
      '「〜ほど…なものはない」は健康・時間・家族など抽象的な語でよく使われる。',
    ],
    sections: [
      {
        heading: 'Nothing / Nobody を主語にする形',
        body: `「〜ほど…なものはない」は、否定の代名詞 nothing（物）や nobody / no one（人）を主語にして表す。

■ 物が対象
Nothing is more important than health.（健康ほど大切なものはない）
＝ Nothing is as important as health.
＝ Health is the most important thing.（健康はいちばん大切なものだ）
＝ Health is more important than anything else.（健康は他の何よりも大切だ）

例）Nothing is more precious than time.（時間ほど貴重なものはない）
　　Nothing is as difficult as this question.（この問題ほど難しいものはない）

■ 人が対象
Nobody in my class runs faster than Ken.（クラスでケンより速く走る人はいない）
＝ No one in my class runs as fast as Ken.
＝ Ken runs faster than anyone else in my class.
＝ Ken runs (the) fastest in my class.

■ 形の注意
・nothing、nobody、no one はすべて単数扱い。動詞は is / has / runs のように単数形にする。
・すでに否定を含むので not を重ねない。× Nothing is not more important than health.
・no one は二語、nobody は一語で書く。

★ ポイント：主語が「物」か「人」かで nothing と nobody を選ぶ。健康・時間・愛情などの抽象名詞と組み合わせる出題が多い。

⚠ 注意：Nothing is more important than health. を「何も健康より大切ではない」と直訳すると意味を取りちがえやすい。「健康がいちばん大切だ」と言いかえて理解する。`,
      },
      {
        heading: 'anything else / anyone else との関係',
        body: `Nothing を主語にする形は、主語を入れかえて anything else を使う形に書きかえられる。

■ 対応関係
Nothing is more important than health.（否定語が主語）
↕
Health is more important than anything else.（比べる相手が anything else）

Nobody in my class is taller than Ken.
↕
Ken is taller than anyone else in my class.

■ any other との違い
・than any other ＋ 単数名詞：比べる対象が具体的な名詞のとき
　例）Tokyo is larger than any other city in Japan.
・than anything else：比べる対象が「物一般」のとき
　例）Health is more important than anything else.
・than anyone else：比べる対象が「人一般」のとき
　例）He is kinder than anyone else in his class.
名詞を続けるかどうかで使い分ける。× than any other thing とは言わず anything else を使う。

■ 総合書きかえ（五通り）
「健康がいちばん大切だ」
①Health is the most important thing.
②Health is more important than anything else.
③Nothing is more important than health.
④Nothing is as important as health.
⑤Health is the most important thing of all.

★ ポイント：入試では「一語ずつ空所を埋めて同じ意味の文を完成させる」形式が多い。①〜④のどの形でも書けるように、一つのテーマ文で練習しておくとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。Health is the most important thing.（Nothing で始めて）',
        wrongAnswer: 'Nothing is not more important than health.',
        trapExplanation:
          '「〜なものはない」という日本語に「ない」が入っているため、英語でも not を加えたくなる。しかし nothing がすでに否定を表している。',
        correctAnswer: 'Nothing is more important than health.',
        correctExplanation:
          'nothing、nobody、no one は語そのものが否定を含むので、not を重ねると二重否定になり意味が反転する。Nothing is more important than health. で「健康ほど大切なものはない」となる。',
      },
      {
        question: '（　）に入る語を答えなさい。Ken is taller than （　） else in his class.（「他のだれよりも」の意味に）',
        wrongAnswer: 'any other',
        trapExplanation:
          'than any other ~ の形を覚えていると、else の前にもそのまま any other を入れてしまう。any other は名詞を続ける形だという条件を見落としている。',
        correctAnswer: 'anyone',
        correctExplanation:
          'else の前には anyone（人）／anything（物）を置く。than anyone else で「他のだれよりも」となる。any other は any other student のように単数名詞を続ける形なので、else とは組み合わせない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s250',
    subject: 'eigo',
    examType: 'koko',
    title: '最上級・比較級・原級の四通り言いかえ総合演習',
    description: '一つの内容を四通りで表す手順を、グラフの読み取りとあわせて仕上げる',
    intro:
      'ここまでに学んだ言いかえを一枚の表にまとめると、実は同じことを四通りで言っているだけだとわかります。入試ではこの四つのうち二つを与えて残りを書かせる形で出ます。グラフを一つ用意して、四通りすべてを書く練習をしてみましょう。',
    order: 750,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '①A is the 最上級 in / of ~. ②A is 比較級 than any other 単数名詞. ③No other 単数名詞 is 比較級 than A. ④No other 単数名詞 is as 原級 as A.',
      '②③は比較級、④は原級。語形を毎回確認する。',
      '②③④の名詞はすべて単数形。',
      '範囲を表す語句（in my class など）はどの形でも残す。',
      'グラフや表を読んで、一位のものを主語にして書き始めるとよい。',
    ],
    sections: [
      {
        heading: '四通りの型と、書き分けの手順',
        body: `同じ「Aがいちばん〜だ」という内容を、次の四通りで表せる。

【型のまとめ】
①最上級：A is the ＋ 最上級 ＋ 名詞 ＋ in / of ~.
②比較級＋any other：A is ＋ 比較級 ＋ than any other ＋ 単数名詞 ＋ in ~.
③No other＋比較級：No other ＋ 単数名詞 ＋ in ~ ＋ is ＋ 比較級 ＋ than A.
④No other＋原級：No other ＋ 単数名詞 ＋ in ~ ＋ is as ＋ 原級 ＋ as A.

【例】サッカーがクラスでいちばん人気のあるスポーツである場合
①Soccer is the most popular sport in my class.
②Soccer is more popular than any other sport in my class.
③No other sport in my class is more popular than soccer.
④No other sport in my class is as popular as soccer.

【手順】
1. グラフや表から一位のものを見つける（ここでは soccer）。
2. 使う形容詞を決める（popular）。
3. 範囲を確認する（in my class）。
4. 型に当てはめる。②③は比較級、④は原級。

★ ポイント：①では sport が単数、one of の形なら sports と複数になる。名詞の形は型ごとに決まっているので、書いたあとに必ず確認する。

⚠ 注意：③④の主語は No other ＋ 単数名詞 なので、動詞は is（単数扱い）。× No other sports in my class are ~ としない。`,
        figureId: 'lf_kokoeigoext07_250',
      },
      {
        heading: 'グラフから英文を作る練習',
        body: `【データ】あるクラス36人が好きなスポーツ：サッカー18人、野球12人、テニス6人

■ 一位について（四通り）
Soccer is the most popular sport in my class.
Soccer is more popular than any other sport in my class.
No other sport in my class is more popular than soccer.
No other sport in my class is as popular as soccer.

■ 二位・三位について
Baseball is the second most popular sport in my class.（二番目に人気）
Baseball is more popular than tennis.（比較級）
Tennis is not as popular as baseball.（原級の否定）
Tennis is the least popular of the three.（いちばん人気がない）

■ 数量で表す
Eighteen students like soccer the best.（18人がサッカーをいちばん好きだ）
Soccer has three times as many fans as tennis.（18 ÷ 6 ＝ 3 なので three times）
Twice as many students like soccer as tennis.（同じ内容を students を主語にして表す）
Six more students like soccer than baseball.（18 − 12 ＝ 6 なので six more）

■ one of ~ を使う
Baseball is one of the most popular sports in my class.（人気のあるスポーツの一つ）
※ ここでは sports と複数形になる。

★ ポイント：入試の資料読み取り問題では、グラフの数値と英文の内容が合っているかを判断させる。数値を必ず計算し、倍数（÷）と差（−）を取りちがえないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。Soccer is the most popular sport in my class.（No other で始めて、than を使って）',
        wrongAnswer: 'No other sport in my class is as popular than soccer.',
        trapExplanation:
          'as を使う形と than を使う形が頭の中で混ざり、as popular に than を続けてしまう。二通りの型を別々に覚えていないと起こる。',
        correctAnswer: 'No other sport in my class is more popular than soccer.',
        correctExplanation:
          'than を使うなら比較級 more popular にする。as を使うなら原級で as popular as とする。as ~ than という組み合わせは存在しない。指定された語（than か as か）を見て、語形を決めるのが手順である。',
      },
      {
        question: 'グラフの数値（サッカー18人・テニス6人）に合う英文を選びなさい。ア Soccer has twice as many fans as tennis. イ Soccer has three times as many fans as tennis.',
        wrongAnswer: 'ア Soccer has twice as many fans as tennis.',
        trapExplanation:
          '18 と 6 の差が12であることから何となく2倍のイメージを持ってしまう。倍数は差ではなく割り算で求めることを忘れている。',
        correctAnswer: 'イ Soccer has three times as many fans as tennis.',
        correctExplanation:
          '倍数は割り算で求める。18 ÷ 6 ＝ 3 なので three times as many ~ as が正しい。差を言うなら Twelve more students like soccer than tennis.（12人多い）となる。倍と差は必ず計算して区別する。',
      },
    ],
  },

  // ───────── 8. 比較を含む慣用表現（s251〜s255） ─────────
  {
    id: 'koko_eigo_s251',
    subject: 'eigo',
    examType: 'koko',
    title: 'the + 比較級, the + 比較級：「〜すればするほど…」',
    description: '二つの変化が連動することを表す形と、語順の組み立て方を身につける',
    intro:
      '練習すればするほどうまくなる。勉強すればするほど点が上がる。この「すればするほど」を英語では the ＋ 比較級 を二回くり返して表します。比較級なのに the が付く数少ない形で、語順に独特のくせがあります。図で変化の関係をつかんでから覚えましょう。',
    order: 751,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'the + 比較級 ~, the + 比較級 ... で「〜すればするほど…」。',
      '比較級なのに the が付く特別な形。',
      '比較級の部分を文の先頭に出すので、語順が入れかわる。',
      'The more ~, the more ... のように more 型の語もそのまま使える。',
      'The sooner, the better.（早ければ早いほどよい）のような短い決まり文句もある。',
    ],
    sections: [
      {
        heading: '形と語順の作り方',
        body: `二つのことが連動して変化するとき、〈The ＋ 比較級 ＋ 主語 ＋ 動詞 ~, the ＋ 比較級 ＋ 主語 ＋ 動詞 ...〉の形で表す。

例）The more you practice, the better you become.
　（練習すればするほど、あなたはうまくなる）
例）The higher we climbed, the colder it became.
　（高く登れば登るほど、寒くなった）
例）The older you get, the more you understand.
　（年をとればとるほど、わかることが増える）
例）The more books you read, the more you learn.
　（本を読めば読むほど、多くを学べる）

■ 語順の作り方
もとの文：You practice more. → You become better.
①それぞれの比較級を文の先頭に出す。
②前に the を付ける。
③二つをコンマでつなぐ。
→ The more you practice, the better you become.

■ 名詞がつく場合は名詞ごと前に出す
You read more books. → The more books you read, ~
× The more you read books, ~ とはしない。比較級と名詞はセットで動かす。

■ be動詞の省略
例）The sooner, the better.（早ければ早いほどよい）
　　The more, the better.（多ければ多いほどよい）
主語と be動詞を省いた短い決まり文句として使われる。

★ ポイント：この形では、比較級に必ず the が付く。比較級に the を付けないという原則の、数少ない例外である。`,
        figureId: 'lf_kokoeigoext07_251',
      },
      {
        heading: '実際の使い方と、和訳のこつ',
        body: `■ 日常でよく使う例
The more you eat, the fatter you will get.（食べれば食べるほど太る）
The harder you study, the higher your score will be.（熱心に勉強するほど点数は高くなる）
The busier he is, the happier he looks.（忙しいほど彼はうれしそうに見える）
The earlier you start, the easier it is.（早く始めるほど楽になる）

■ 未来のことでも前半は現在形
時や条件を表す部分では、未来のことでも現在形を使う。
例）The sooner you leave, the earlier you will arrive.（早く出発するほど早く着く）
前半 leave（現在形）、後半 will arrive（未来）。

■ 和訳のこつ
前半を「〜すればするほど」、後半を「ますます…」と訳す。
The more I read this book, the more interesting it becomes.
→ この本は読めば読むほどおもしろくなる。

■ 整序英作文での組み立て
語群に the が二つあり、比較級が二つあれば、この形だと判断できる。
例）( the / the / you / practice / more / better / you / become / , )
→ The more you practice, the better you become.

⚠ 注意：コンマを忘れないこと。また前半・後半どちらの the も落とさないこと。× More you practice, better you become. は誤りである。

★ ポイント：英作文でこの形を使えると、表現力の評価が上がる。まず一つ、The more you practice, the better you become. を丸ごと暗記して、単語を入れかえて応用するとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように並べかえなさい。「たくさん本を読めばそれだけ多くを学べる」( more / the / read / books / you / , / the / learn / more / you )',
        wrongAnswer: 'The more you read books, the more you learn.',
        trapExplanation:
          '「more＝もっと」と考えて more だけを前に出し、名詞 books を動詞のあとに残してしまう。日本語の語順に近いので自然に見える。',
        correctAnswer: 'The more books you read, the more you learn.',
        correctExplanation:
          '比較級が名詞を修飾している場合は、名詞ごと文の先頭に出す。more books でひとかたまりなので The more books you read となる。同じく The more money you spend, ~ のように名詞を残さない。',
      },
      {
        question: '誤りを直しなさい。The harder you will study, the better your score will be.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          '後半に will があるので前半にも未来形が必要だと考えてしまう。条件を表す部分では未来でも現在形を使うという原則を忘れている。',
        correctAnswer: 'The harder you study, the better your score will be.',
        correctExplanation:
          '前半は条件を表す部分なので、未来のことでも現在形にする。when や if の節で will を使わないのと同じ規則である。後半には will を使ってよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s252',
    subject: 'eigo',
    examType: 'koko',
    title: '比較級 and 比較級：「ますます〜」',
    description: '同じ比較級を and でつないで変化の進行を表す形を、more 型もふくめて確認する',
    intro:
      '春になると日ごとに暖かくなっていきます。この「だんだん暖かくなる」を英語では warmer and warmer と、同じ比較級を二回くり返して表します。more 型の語ではくり返し方が少し変わるので、そこだけ注意すれば使いこなせます。',
    order: 752,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '比較級 and 比較級 で「ますます〜、だんだん〜」。',
      '-er 型は warmer and warmer のように同じ語をくり返す。',
      'more 型は more and more difficult（more だけをくり返す）。',
      'get / become / grow などの変化を表す動詞と一緒に使うことが多い。',
      'more and more people（ますます多くの人々）のように名詞につくこともある。',
    ],
    sections: [
      {
        heading: '形と、二つのパターン',
        body: `同じ比較級を and でつなぐと「ますます〜」「だんだん〜」という変化を表す。

■ -er 型：同じ語をくり返す
It is getting warmer and warmer.（だんだん暖かくなっている）
The days are getting longer and longer.（日がだんだん長くなっている）
He became richer and richer.（彼はますます裕福になった）
The line got longer and longer.（列はどんどん長くなった）

■ more 型：more だけをくり返す
This question is becoming more and more difficult.（この問題はますます難しくなっている）
The city is getting more and more popular.（その市はますます人気が出ている）
× more difficult and more difficult とはしない。

■ 使う動詞
変化を表す get、become、grow などと組み合わせるのがふつうである。
例）get colder and colder（どんどん寒くなる）
　　become more and more famous（ますます有名になる）
　　grow bigger and bigger（どんどん大きくなる）

■ 名詞につける形
more and more ＋ 名詞で「ますます多くの〜」。
例）More and more people are using smartphones.（ますます多くの人がスマートフォンを使っている）
　　Fewer and fewer children play outside.（外で遊ぶ子どもがますます減っている）

★ ポイント：less and less（ますます少なく）、fewer and fewer（ますます少数の）も同じ形で使える。増える方向だけでなく減る方向にも使えることを押さえておく。`,
      },
      {
        heading: '進行形との組み合わせと、入試での出方',
        body: `■ 現在進行形とよく組み合わせる
「今まさに変化している」ことを表すため、be動詞 ＋ getting / becoming の形が多い。
例）It is getting darker and darker.（だんだん暗くなってきている）
　　The world is becoming smaller and smaller.（世界はますます小さくなっている）

■ 過去の変化
例）The rain got heavier and heavier.（雨はますます激しくなった）
　　She became more and more interested in science.（彼女はますます科学に興味を持つようになった）

■ the 比較級, the 比較級 との違い
・比較級 and 比較級 ＝ 一つのものが時間とともに変化する
　例）It is getting warmer and warmer.（気温が上がり続けている）
・the 比較級, the 比較級 ＝ 二つのことが連動して変化する
　例）The warmer it gets, the more people go out.（暖かくなるほど外出する人が増える）
どちらも「ますます」と訳せるので、形で区別する。and があるか、the が二つあるかを見る。

■ 整序英作文
語群に同じ比較級が二つと and があれば、この形である。
例）( and / warmer / is / it / getting / warmer ) → It is getting warmer and warmer.

⚠ 注意：more 型で × more and more expensive and expensive のように語を増やさない。more and more expensive が正しい形である。

★ ポイント：会話文の空所補充で「季節の変化」「人口の変化」「技術の普及」といった話題に出やすい。テーマとセットで例文を覚えておくと使いやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '日本語に合うように（　）を埋めなさい。「その問題はますます難しくなっている」The question is becoming （　）.',
        wrongAnswer: 'more difficult and more difficult',
        trapExplanation:
          '-er 型の warmer and warmer をそのまま当てはめ、more difficult というかたまりごとくり返してしまう。意味は通じるが英語としては誤り。',
        correctAnswer: 'more and more difficult',
        correctExplanation:
          'more 型の語では more だけをくり返し、形容詞は一度だけ書く。more and more difficult、more and more popular、more and more interesting が正しい形である。-er 型は colder and colder のように語全体をくり返す。',
      },
      {
        question: '意味の違いを答えなさい。ア It is getting warmer and warmer. イ The warmer it gets, the more flowers bloom.',
        wrongAnswer: 'どちらも「暖かくなるほど花が咲く」という同じ意味',
        trapExplanation:
          'どちらも「ますます」と訳せるため、二つの形を同じものだと考えてしまう。and があるか the が二つあるかを見ていない。',
        correctAnswer: 'ア「だんだん暖かくなっている」（一つの変化）／イ「暖かくなるほど多くの花が咲く」（二つの連動）',
        correctExplanation:
          '比較級 and 比較級 は一つのものが時間とともに変化することを表す。the 比較級, the 比較級 は二つのことが連動して変化することを表す。and でつながっているか、the が二つあってコンマで区切られているかで判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s253',
    subject: 'eigo',
    examType: 'koko',
    title: '数量を表す比較の決まり文句：more than / at least ほか',
    description: 'more than、less than、at least、at most、as many as などの意味と使い方を整理する',
    intro:
      '「30人以上」を英語でどう書くでしょうか。more than thirty は「30より多い」なので、厳密には30人は含みません。数値をあつかう英文では、この一語の差が読み取りの正確さを左右します。読解でも英作文でも使う数量表現をここでまとめます。',
    order: 753,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'more than 30 ＝ 30より多い、less than 30 ＝ 30より少ない。',
      'at least ＝ 少なくとも、at most ＝ 多くても。',
      'as many as 50 students ＝ 50人もの（多さを強調）。',
      'no more than ＝ たった〜しか、no less than ＝ 〜も（多さを強調）。',
      '数量表現は資料読み取り問題で正誤の決め手になるので正確に覚える。',
    ],
    sections: [
      {
        heading: '基本の数量表現',
        body: `英文で数値を扱うとき、次の表現が頻出する。

■ more than ~ ／ less than ~
more than thirty students（30人より多い生徒）
less than ten minutes（10分未満）
例）More than half of the students walk to school.（生徒の半数以上が歩いて通学する）
例）It took less than an hour.（1時間もかからなかった）
⚠ 注意：more than thirty は厳密には「30を含まない」。日本語の「30以上」（30を含む）とは範囲がずれる。読解では「〜より多い」と理解しておくと安全である。

■ at least ~ ／ at most ~
at least（少なくとも）：It takes at least two hours.（少なくとも2時間かかる）
at most（多くても）：There were at most twenty people.（多くても20人だった）

■ over ~ ／ under ~
over（〜を超えて）：over 100 people（100人を超える人々）
under（〜未満）：under ten years old（10歳未満）

■ about ~ ／ almost ~
about（およそ）：about fifty students（約50人の生徒）
almost（ほとんど）：almost all the students（ほとんどすべての生徒）

★ ポイント：資料読み取り問題では、グラフの数値と選択肢の数量表現が合っているかが問われる。「より多い」「以上」「未満」を日本語でも正確に区別しておくこと。`,
      },
      {
        heading: '多さ・少なさを強調する表現',
        body: `■ as many as ~ ／ as much as ~（〜もの）
数や量が多いことを強調する。
例）As many as fifty students joined the event.（50人もの生徒がその行事に参加した）
　　He spent as much as ten thousand yen.（彼は1万円も使った）
as many as は「同じくらい多くの」という原級比較の意味と、「〜もの」という強調の意味の二つがある。あとに数字が来ていれば強調の意味である。

■ no more than ~ ／ no less than ~
no more than ten students（たった10人しか。少なさを強調）
no less than ten students（10人もの。多さを強調）
例）I have no more than 500 yen.（500円しか持っていない）
　　He has no less than five cars.（彼は5台も車を持っている）

■ not more than ~ ／ not less than ~
not more than ten（多くても10。＝at most）
not less than ten（少なくとも10。＝at least）
no がつくと気持ち（多い・少ないと感じている）が入り、not がつくと単なる数の範囲を表す、と区別する。

■ 読解での使い方
例）The graph shows that as many as 60 percent of the students use the library every week.
　（グラフは、60パーセントもの生徒が毎週図書館を使っていることを示している）
数値そのものより、書き手が「多い」と感じているのか「少ない」と感じているのかを読み取ることが大切である。

★ ポイント：no more than / no less than は上位校で問われる。「no がついたら気持ちが入る」「more は多い、less は少ない、no がつくと逆の驚きを表す」と整理すると覚えやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '英文の意味として正しいものを選びなさい。He has no less than three dogs. ア 犬を3匹しか飼っていない イ 犬を3匹も飼っている',
        wrongAnswer: 'ア 犬を3匹しか飼っていない',
        trapExplanation:
          'no と less という否定的な語が並ぶため、「少ない」という意味だと考えてしまう。no more than と no less than を取りちがえるのは典型的な誤り。',
        correctAnswer: 'イ 犬を3匹も飼っている',
        correctExplanation:
          'no less than は「〜も」と多さを強調する表現である。少なさを表すのは no more than（たった〜しか）。「no less＝少なくない＝多い」「no more＝多くない＝少ない」と考えると意味の向きがつかめる。',
      },
      {
        question: 'グラフでは生徒30人中「18人」が電車通学である。英文として正しいものを選びなさい。ア More than half of the students come to school by train. イ Less than half of the students come to school by train.',
        wrongAnswer: 'イ Less than half of the students come to school by train.',
        trapExplanation:
          '18という数字だけを見て「半分くらい」と判断してしまう。全体が何人かを確認せずに答えると起こる誤りである。',
        correctAnswer: 'ア More than half of the students come to school by train.',
        correctExplanation:
          '全体30人の半分は15人なので、18人は半数より多い。したがって more than half が正しい。資料問題では必ず全体の数を確認し、半分の値を計算してから選択肢を判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s254',
    subject: 'eigo',
    examType: 'koko',
    title: 'the 比較級 of the two：二つのうちのほう',
    description: '比較級に the が付く特別な形と、最上級を使えない場面の判断を身につける',
    intro:
      '比較級に the は付けない、と学びました。ところが「二人のうち背が高いほう」と言うときだけは the taller となります。二つしかない中で一方に決まるので、the で特定できるという理屈です。例外は少ないので、ここで確実に押さえておきましょう。',
    order: 754,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'of the two（2つのうち）がつくと、比較級に the を付ける：the taller of the two。',
      '二つしかないので一方に決まる。だから特定を表す the が付く。',
      '二つのものに最上級は使わない（× the tallest of the two）。',
      'the former（前者）／the latter（後者）も同じ考え方の表現。',
      '「どちらの〜」は Which is + 比較級, A or B? でたずねる。',
    ],
    sections: [
      {
        heading: 'the + 比較級 + of the two',
        body: `比較級に the が付くのは、〈the ＋ 比較級, the ＋ 比較級〉の形と、この of the two の形だけである。

■ 形
the ＋ 比較級 ＋ of the two（二つのうちで〜なほう）
例）Ken is the taller of the two.（ケンは二人のうちで背が高いほうだ）
　　This is the more useful of the two.（これは二つのうちで役に立つほうだ）
　　She is the older of the two sisters.（彼女は二人姉妹の姉のほうだ）

■ なぜ the が付くのか
二つしかないところで「〜なほう」と言えば、どちらか一方に決まる。決まったものを指すので the が付く。
これに対し三つ以上の中の比較では、「〜より背が高い」と言っても相手が一人に決まらないため the は付かない。

■ 二つに最上級は使わない
× Ken is the tallest of the two.（二つに最上級は不可）
○ Ken is the taller of the two.
三つ以上なら最上級になる。
○ Ken is the tallest of the three.

■ 語順
名詞を残す形もある。
例）He is the younger brother of the two.（彼は二人のうちの弟のほうだ）
例）Which is the better of the two? — This one is.

★ ポイント：of the two、of the two sisters、of these two books のように「2」を表す語句があれば、比較級に the を付ける。数字の 2 を見つけたら比較級、3以上なら最上級、と判断する。`,
      },
      {
        heading: 'the former / the latter と、関連表現',
        body: `■ the former（前者）／the latter（後者）
二つのものを挙げたあと、先に述べたほうを the former、あとに述べたほうを the latter という。
例）I have a dog and a cat. The former is white, and the latter is black.
　（犬とねこを飼っている。前者は白く、後者は黒い）
例）I like the latter better than the former.（私は前者より後者が好きだ）

・former は「以前の」、latter は「後者の」。late の変化（later / latter）と結びつけて覚える。
・the former と the latter には必ず the が付く。

■ 二者択一の関連表現
either（どちらか一方）：You can take either of the two books.（2冊のうちどちらでも取ってよい）
both（両方）：Both of the two are good.（二つとも良い）
neither（どちらも〜ない）：Neither of the two was cheap.（二つとも安くなかった）
※ either、neither は単数扱い、both は複数扱い。

■ たずね方
Which is the taller of the two, Ken or Tom?（二人のうち背が高いのはどちらですか）
—Ken is.

■ まとめ：比較級に the が付く三つの場合
①the ＋ 比較級 ＋ of the two（二つのうちのほう）
②the ＋ 比較級, the ＋ 比較級（〜すればするほど）
③the former / the latter（前者／後者）
これ以外では比較級に the を付けない。

★ ポイント：この三つを覚えておけば、「比較級に the が付いているのはおかしい」と判断する問題にも、逆に「the を入れなければならない」問題にも対応できる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適切な形にしなさい。Ken is the （tall） of the two.',
        wrongAnswer: 'tallest',
        trapExplanation:
          'the があるので最上級だと判断してしまう。「the ＋ 最上級」というパターンが強く身についているほど起こりやすい誤り。',
        correctAnswer: 'taller',
        correctExplanation:
          '二つのものを比べるときは比較級を使う。of the two がある場合は特別に the が付いて the taller of the two となる。三つ以上なら the tallest of the three のように最上級を使う。数を確認してから語形を決める。',
      },
      {
        question: '誤りを直しなさい。I like latter better than former.',
        wrongAnswer: '誤りはない',
        trapExplanation:
          'former と latter を単語として覚えていても、the が必要だという点まで意識していない。日本語の「前者・後者」に冠詞がないので落としやすい。',
        correctAnswer: 'I like the latter better than the former.',
        correctExplanation:
          'former（前者）と latter（後者）はどちらもすでに述べた特定のものを指すので、必ず the を付ける。the former、the latter の形で覚える。like ~ better than の形とあわせて出題されることが多い。',
      },
    ],
  },

  {
    id: 'koko_eigo_s255',
    subject: 'eigo',
    examType: 'koko',
    title: '比較の総合演習：入試実戦',
    description: '書きかえ・整序・英作文・資料読み取りの四形式で、比較の単元を仕上げる',
    intro:
      'ここまで学んだ比較の形は、入試では四つの顔で出てきます。書きかえ、整序、英作文、そして資料の読み取り。どの形式でも問われるのは同じ知識です。最後にひととおり通して、自分がどこで手が止まるかを確かめておきましょう。',
    order: 755,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '書きかえ：最上級 ⇔ than any other ⇔ No other ⇔ 原級の四通りを往復できるようにする。',
      '整序：as が二つなら原級、than があれば比較級、the ＋ 最上級なら範囲の語句を最後に置く。',
      '英作文：語形（-er / more）・the の有無・比べる対象の一致の三点を必ず見直す。',
      '資料読み取り：倍数は割り算、差は引き算で確かめる。',
      '会話文：Which do you like better ~? と答え方をセットで覚える。',
    ],
    sections: [
      {
        heading: '形式別の解き方',
        body: `■ ①書きかえ問題
指定された書き出しと使う語を見て、どの型かを決める。
・than any other → 比較級 ＋ than any other ＋ 単数名詞
・No other で始まる → No other ＋ 単数名詞 ＋ is ＋ 比較級 than ／ as 原級 as
・as を使う → 原級（語形を戻す）
・one of で始まる → 複数名詞にする
例）Ken is the fastest runner in his class.
　→ Ken runs faster than any other student in his class.
　→ No other student in his class runs as fast as Ken.

■ ②整序英作文
語群の中の目印を探す。
・as が二つ → 原級比較。倍数（twice、three times）があれば as ~ as の前に置く。
・than が一つ → 比較級。much / far があれば比較級の直前。
・the が二つ ＋ 比較級が二つ → the 比較級, the 比較級。
・one / of / 複数名詞 → one of the 最上級。
例）( than / much / this / is / that / expensive / one / more ) → This is much more expensive than that one.

■ ③英作文の見直し三点
□ 語形は正しいか（-er 型か more 型か、不規則変化か）
□ the の有無は正しいか（最上級には the、比較級には付けない）
□ 比べる対象はそろっているか（than yours、than that of ~）

★ ポイント：本番では、まず問題文の指定語（than、as、No other、one of）を丸で囲む。指定語が型を決めてくれるので、そこから逆算すると迷わない。`,
      },
      {
        heading: '実戦問題で確かめる',
        body: `【問題1】次の文をほぼ同じ意味の文に書きかえなさい。
This is the most interesting book in this library.
→ This is more interesting than any other book in this library.
→ No other book in this library is as interesting as this one.

【問題2】並べかえなさい。
( as / not / is / my / heavy / bag / as / yours ) → My bag is not as heavy as yours.
（意味：私のかばんはあなたのほど重くない ＝ Your bag is heavier than mine.）

【問題3】資料読み取り
本の冊数：Ken 5冊、Yuka 10冊、Sho 15冊
・Yuka has twice as many books as Ken.（10 ÷ 5 ＝ 2）
・Sho has ten more books than Ken.（15 − 5 ＝ 10）
・Sho has the most books of the three.
・Ken doesn't have as many books as Yuka.

【問題4】英作文
「私にとって、健康は他の何よりも大切です」
→ For me, health is more important than anything else.
　（＝ Nothing is more important than health for me.）

【問題5】会話文
A: Which do you like better, summer or winter?
B: I like summer better. — Why? — Because I can swim in the sea.

⚠ 最終チェック：比較の問題で失点する原因は、①語形の戻し忘れ ②the の付け忘れ・付けすぎ ③比べる対象のずれ ④倍数と差の取りちがえ、の四つにほぼ限られる。見直しではこの四点だけを確認すればよい。

★ ポイント：比較は文法問題だけでなく、グラフ・表を使った読解でも必ず出る。数値を読み取って英文と照らし合わせる練習を、過去問で必ず積んでおくこと。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文をほぼ同じ意味の文に書きかえなさい。My bag is not as heavy as yours.（Your で始めて）',
        wrongAnswer: 'Your bag is not heavier than mine.',
        trapExplanation:
          'もとの文の not をそのまま残してしまう。主語を入れかえると意味の向きが逆になることを見落としている。',
        correctAnswer: 'Your bag is heavier than mine.',
        correctExplanation:
          'not as ~ as は「〜ほど…でない」なので、相手のほうが上である。主語を入れかえて比較級にすると Your bag is heavier than mine. となり、not は不要になる。mine は my bag のことである。',
      },
      {
        question: '数値に合う英文を選びなさい。Ken 5冊、Sho 15冊のとき ア Sho has ten times as many books as Ken. イ Sho has ten more books than Ken.',
        wrongAnswer: 'ア Sho has ten times as many books as Ken.',
        trapExplanation:
          '15 − 5 ＝ 10 という引き算の結果を、そのまま倍数の 10 として使ってしまう。差と倍数の区別ができていない。',
        correctAnswer: 'イ Sho has ten more books than Ken.',
        correctExplanation:
          '差は引き算（15 − 5 ＝ 10）で ten more books than、倍数は割り算（15 ÷ 5 ＝ 3）で three times as many books as となる。差なら比較級 ＋ than、倍数なら原級 as ~ as と、使う形も変わる。',
      },
    ],
  },
];
