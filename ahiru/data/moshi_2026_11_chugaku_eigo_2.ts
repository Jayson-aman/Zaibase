import type { Question } from './questions';

// 月例実力テスト 2026年11月号（中学受験・英語）追加40問 c11〜c50。
// 小6〜中学入門レベル（中1〜中2前半相当まで）。英文はすべて自作で、文法を全問で確かめてある。
// 動く図解は data/figures-moshi-2026-11-eigo-c2.ts（問題IDをキーにして結線される）。
export const moshi202611ChugakuEigo2: Question[] = [
  {
    id: 'moshi_2026_11_eigo_c11',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「My sister ______ ten years old.」",
    choices: ["① am", "② is", "③ are", "④ be"],
    answer: "② is",
    hint: "主語 My sister は何人かな？ 1人の女の人を表すときの be動詞を思い出そう。",
    explanation: `【何を聞かれているか】
空所に入る be動詞（「〜です」を表す言葉）を選びます。「私の姉は10歳です」という文をつくります。

【なぜそうなるのか】
年れいを言うときも、「〜です」を表す be動詞を使います。be動詞は主語（しゅご）によって形が変わり、I は am、he・she・it や1人・1つは is、you や2人以上は are です。英語では、主語が1人か何人かを be動詞の形でも知らせるきまりだからです。

【ステップ1】
主語を見ます。My sister は「私の姉」で、1人の女の人です。she（彼女）と言いかえられます。

【ステップ2】
be動詞の使い分けを思い出します。1人の主語（he・she・it）のときは is です。

【ステップ3】
is を空所に入れて、My sister is ten years old. と読みます。「私の姉は10歳です」と自然な文になります。

【答え】
② is（My sister is ten years old.）

【確かめ】
am は I 専用、are は you や2人以上用、be は原形なので、ここでは使えません。is なら、1人の姉にぴったり合います。

【よくあるまちがい】
ten years（10年）という複数の語に引っぱられて are を選んでしまうことです。主語は My sister（1人）なので、年れいの部分は関係ありません。`,
    pitfall: "be動詞は主語で決める。years が複数でも、主語が1人なら is。",
    memoryTip: "1人の主語（he・she・it）＋ be動詞 ＝ is。",
  },
  {
    id: 'moshi_2026_11_eigo_c12',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「Today is Monday. Tomorrow is ______.」",
    choices: ["① Sunday", "② Tuesday", "③ Wednesday", "④ Friday"],
    answer: "② Tuesday",
    hint: "曜日の順番を、月曜日から言ってみよう。「あした」は今日の次の日だよ。",
    explanation: `【何を聞かれているか】
曜日の名前を選びます。「今日は月曜日です。あしたは＿＿＿です」という文です。

【なぜそうなるのか】
曜日は決まった順番でくり返します。月曜日（Monday）の次の日が火曜日（Tuesday）です。曜日の名前は大文字で書き始めるのもきまりです。順番を言えるようにしておけば、「きのう」「あした」の問題はすぐ解けます。

【ステップ1】
tomorrow（あした）は、今日の次の日だとたしかめます。

【ステップ2】
曜日を順に言います。Monday（月）→ Tuesday（火）→ Wednesday（水）→ Thursday（木）→ Friday（金）→ Saturday（土）→ Sunday（日）。

【ステップ3】
今日は Monday なので、次の日は Tuesday です。Tomorrow is Tuesday. になります。

【答え】
② Tuesday（あしたは火曜日）

【確かめ】
月曜日の次は火曜日です。Sunday は月曜日の前の日（きのう）、Wednesday は2日後、Friday は4日後なので、あしたではありません。

【よくあるまちがい】
Sunday（日曜日）を選ぶことです。日曜日は週の終わりですが、月曜日の「前」の日です。tomorrow は「次」の日です。`,
    pitfall: "tomorrow は「次の日」、yesterday は「前の日」。Sunday は月曜日の前。",
    memoryTip: "Mon・Tue・Wed・Thu・Fri・Sat・Sun の順にくり返す。",
  },
  {
    id: 'moshi_2026_11_eigo_c13',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「The month after June is ______.」",
    choices: ["① May", "② July", "③ August", "④ March"],
    answer: "② July",
    hint: "after は「〜のあとの」。6月のつぎの月は何月かな？",
    explanation: `【何を聞かれているか】
月の名前を選びます。「6月のつぎの月は＿＿＿です」という文です。

【なぜそうなるのか】
月も、1月から12月まで決まった順番でならんでいます。after は「〜のあとに」という意味なので、June（6月）の次の月を探します。月の名前も大文字で書き始めます。

【ステップ1】
after June は「6月のあと」という意味だとたしかめます。

【ステップ2】
月を順に言います。January（1月）…May（5月）→ June（6月）→ July（7月）→ August（8月）。

【ステップ3】
6月のつぎは7月、つまり July です。The month after June is July.

【答え】
② July（7月）

【確かめ】
July は7月で、6月のすぐ後ろです。May は6月の前、August は2か月後、March は3月で、どれも「すぐあと」ではありません。

【よくあるまちがい】
after（あと）と before（前）を取りちがえて、May を選ぶことです。after は「あと」と覚えましょう。`,
    pitfall: "after は「あと」、before は「前」。June の after は July。",
    memoryTip: "June（6月）→ July（7月）→ August（8月）。June と July はとなり同士。",
  },
  {
    id: 'moshi_2026_11_eigo_c14',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「Seven and five is ______.」",
    choices: ["① eleven", "② twelve", "③ thirteen", "④ twenty"],
    answer: "② twelve",
    hint: "まず 7＋5 を計算しよう。そのあと、その数の英語を選ぶよ。",
    explanation: `【何を聞かれているか】
計算の答えを、英語の数で選びます。7＋5 の答えは何かをたずねています。

【なぜそうなるのか】
英語の数は、11（eleven）と12（twelve）だけは特別な名前です。13（thirteen）から19までは、「〜teen」がつきます。20（twenty）は「〜ty」で、10の位の数になります。つづりが似ているので、数と英語を正しく結びつけることが大切です。

【ステップ1】
計算します。7＋5＝12 です。

【ステップ2】
12 を英語で言います。11 は eleven、12 は twelve です。

【ステップ3】
つづりを見くらべて、twelve を選びます。Seven and five is twelve.

【答え】
② twelve（12）

【確かめ】
7＋5＝12 で、12 は twelve です。eleven は11、thirteen は13、twenty は20で、どれも合いません。

【よくあるまちがい】
thirteen と twelve を取りちがえることです。13は「thir＋teen」、12は twelve で、まったく別の語です。`,
    pitfall: "12 は twelve、13 は thirteen。似ているので、数字と英語を1つずつ結びつける。",
    memoryTip: "11 eleven・12 twelve は特別。13〜19 は「〜teen」。",
  },
  {
    id: 'moshi_2026_11_eigo_c15',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "会話文の空所に入る最も適切な語（句）を選びなさい。\n「A: ______ color do you like?\n B: I like blue.」",
    choices: ["① Where", "② What", "③ Who", "④ How many"],
    answer: "② What",
    hint: "B の答えは「青」。色の名前をたずねるとき、color の前に置く疑問詞は？",
    explanation: `【何を聞かれているか】
A の質問に入る疑問詞（ぎもんし＝たずねる言葉）を選びます。

【なぜそうなるのか】
What color は「何色」という意味で、What と color をセットで使います。疑問詞は、返ってくる答えの種類で選びます。答えが「青（blue）」という色なので、「何の色か」をたずねる What が合います。

【ステップ1】
B の答えを見ます。「I like blue.」は「青が好き」で、色の名前です。

【ステップ2】
色をたずねるときは、What color（何色）という形を使います。

【ステップ3】
What color do you like? で「あなたは何色が好きですか」になります。

【答え】
② What（What color do you like?）

【確かめ】
「何色が好きですか。」「青が好きです。」と、問いと答えがつながります。Where は場所、Who は人、How many は数なので、色の答えには合いません。

【よくあるまちがい】
color という語だけ見て、疑問詞を Which などと混ぜてしまうことです。「何色」は What color と覚えましょう。`,
    pitfall: "「何色」は What color。Where（どこ）・Who（だれ）・How many（いくつ）とは別。",
    memoryTip: "What ＋ 名詞 ＝「何の〜」。What color ＝ 何色、What sport ＝ 何のスポーツ。",
  },
  {
    id: 'moshi_2026_11_eigo_c16',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「______ quiet in the library.」",
    choices: ["① Are", "② Is", "③ Be", "④ You"],
    answer: "③ Be",
    hint: "「〜しなさい」と命令する文は、主語を言わず、動詞の原形から始めるよ。be動詞の原形は？",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「図書館では静かにしなさい」という文です。

【なぜそうなるのか】
命令文（めいれいぶん）は、「あなたが〜しなさい」と相手に言う文なので、主語（you）を言わず、動詞の原形（何もつかない形）から文を始めます。「静かにする」は be quiet で、be動詞の原形は be です。am・is・are は主語がないと使えないので、命令文では be になります。

【ステップ1】
「〜しなさい」という命令文だと見ぬきます。命令文は動詞の原形で始めます。

【ステップ2】
「静かにする」は、「〜である」を表す be動詞を使って be quiet と言います。be動詞の原形は be です。

【ステップ3】
文の最初に Be を置き、Be quiet in the library. とします。

【答え】
③ Be（Be quiet in the library.）

【確かめ】
「図書館では静かにしなさい」と自然な命令文になります。Are・Is は主語が必要で、You を最初に置くと「あなたは図書館で静か」という文のかたちになり、「〜しなさい」という命令の意味になりません。

【よくあるまちがい】
Are quiet と書いてしまうことです。「Are you quiet?（あなたは静かですか）」という疑問文になってしまいます。命令文では be動詞も原形 Be にします。`,
    pitfall: "命令文の be動詞は原形の Be。Are や Is では始めない。",
    memoryTip: "命令文 ＝ 動詞の原形で始める。Be quiet.（静かに）、Open the door.（ドアをあけて）。",
  },
  {
    id: 'moshi_2026_11_eigo_c17',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「I get up ______ six o'clock.」",
    choices: ["① in", "② on", "③ at", "④ of"],
    answer: "③ at",
    hint: "時刻（〇時）を言うときに使う前置詞だよ。",
    explanation: `【何を聞かれているか】
空所に入る前置詞（ぜんちし）を選びます。「私は6時に起きます」という文です。

【なぜそうなるのか】
時を表す前置詞は、言い表すものによって使い分けます。「〇時に」のように、ある1つの時刻の点には at を使います。日付や曜日には on、月・季節・年には in を使います。時の「大きさ」で使い分けるので、まず何を表しているかを見ます。

【ステップ1】
six o'clock（6時）が、時刻であることをたしかめます。

【ステップ2】
時刻には at を使います。（曜日・日付は on、月・季節は in です。）

【ステップ3】
at を入れて、I get up at six o'clock. と読みます。

【答え】
③ at（I get up at six o'clock.）

【確かめ】
「私は6時に起きます」と自然な文です。in は月や季節、on は曜日や日付に使うので、時刻には合いません。of は「〜の」という意味で、時を表しません。

【よくあるまちがい】
いつも in を使ってしまうことです。「時刻は at」と、まず決めてしまいましょう。`,
    pitfall: "時刻には at。in は月・季節、on は曜日・日付。",
    memoryTip: "at ＝ 時刻の点（at seven）、on ＝ 日（on Monday）、in ＝ 月・季節（in May）。",
  },
  {
    id: 'moshi_2026_11_eigo_c18',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「I ______ like milk.」（私は牛乳が好きではありません。）",
    choices: ["① am not", "② don't", "③ doesn't", "④ not"],
    answer: "② don't",
    hint: "like は一般動詞。主語は I だよ。一般動詞を打ち消すときの形は？",
    explanation: `【何を聞かれているか】
「〜ではありません」という否定文（ひていぶん）をつくる語を選びます。

【なぜそうなるのか】
一般動詞（like・play など）を打ち消すときは、動詞の前に do not（短くして don't）を置きます。be動詞（am・is・are）の文は be動詞に not をつけますが、like は be動詞ではないので別のきまりです。主語が I・you・複数のときは don't、he・she・it など1人のときは doesn't を使います。

【ステップ1】
like が一般動詞（be動詞ではない）であることをたしかめます。

【ステップ2】
一般動詞の否定文は、動詞の前に don't または doesn't を置きます。主語 I は doesn't のグループではないので don't です。

【ステップ3】
I don't like milk. と書きます。「私は牛乳が好きではありません」になります。

【答え】
② don't（I don't like milk.）

【確かめ】
I don't like milk. は「牛乳が好きではない」という意味で、日本語に合います。am not は be動詞用なので like と並べられません。doesn't は I には使いません。not だけでは文になりません。

【よくあるまちがい】
I am not like milk. と書いてしまうことです。like の前に am をつけるのはまちがいです。一般動詞の否定は don't です。`,
    pitfall: "一般動詞の否定は don't（主語が1人のときは doesn't）。like の前に am not は使わない。",
    memoryTip: "一般動詞の否定 ＝ don't ＋ 動詞。be動詞の否定 ＝ be動詞 ＋ not。",
  },
  {
    id: 'moshi_2026_11_eigo_c19',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「We use ______ to cut paper.」（私たちは紙を切るために＿＿を使います。）",
    choices: ["① a pen", "② scissors", "③ a ruler", "④ an eraser"],
    answer: "② scissors",
    hint: "「cut（切る）」ための道具はどれ？ ペン・定規・消しゴムは何に使うかな？",
    explanation: `【何を聞かれているか】
身の回りの道具のうち、紙を切るために使うものを英語で選びます。

【なぜそうなるのか】
英単語は、「何をするための物か」で覚えると忘れません。cut は「切る」という意味です。紙を切る道具は、はさみ（scissors）です。scissors は2枚の刃でできているため、いつも s がついた形で使い、「a scissors」とは言いません。

【ステップ1】
cut が「切る」という意味だとたしかめます。

【ステップ2】
4つの道具を日本語にします。pen（ペン）・scissors（はさみ）・ruler（定規）・eraser（消しゴム）。

【ステップ3】
切る道具は「はさみ」、つまり scissors です。We use scissors to cut paper.

【答え】
② scissors（はさみ）

【確かめ】
「私たちは紙を切るためにはさみを使います」と自然な文です。ペンは書く、定規は線を引く・長さをはかる、消しゴムは消す道具で、切ることはできません。

【よくあるまちがい】
scissors の s を見落として a scissors と書くことです。刃が2枚あるので、はさみはいつも複数の形で使い、数えるときは a pair of scissors と言います。`,
    pitfall: "scissors は2枚の刃で1つ。いつも s がつく形（a scissors とは言わない）。",
    memoryTip: "cut（切る）→ scissors（はさみ）、write（書く）→ pen、erase（消す）→ eraser。",
  },
  {
    id: 'moshi_2026_11_eigo_c20',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "次の英文の意味として最も適切なものを選びなさい。\n「This is my bag.」",
    choices: ["① これは私のかばんです。", "② あれは私のかばんです。", "③ これはあなたのかばんです。", "④ これは私の本です。"],
    answer: "① これは私のかばんです。",
    hint: "This・my・bag の1語ずつを日本語にして、つなげてみよう。",
    explanation: `【何を聞かれているか】
英文の意味を、日本語から選びます。

【なぜそうなるのか】
英文は、1語ずつ日本語にしてからつなぐと、まちがえません。this は「これ（近くのもの）」、that は「あれ（遠くのもの）」です。my は「私の」、your は「あなたの」です。bag は「かばん」で、book（本）とはつづりも意味もちがいます。

【ステップ1】
This is ＋ ～ の形を見ます。「これは〜です」という意味です。

【ステップ2】
my bag は、my（私の）＋ bag（かばん）で「私のかばん」です。

【ステップ3】
つなげて「これは私のかばんです」と読み、選択肢をくらべます。

【答え】
① これは私のかばんです。

【確かめ】
This（これ）・my（私の）・bag（かばん）がすべて合っています。②は That（あれ）、③は your（あなたの）、④は book（本）にあたり、英文とちがいます。

【よくあるまちがい】
this と that を取りちがえることです。this は近くのもの、that は遠くのものです。`,
    pitfall: "this ＝ これ（近い）、that ＝ あれ（遠い）。my ＝ 私の、your ＝ あなたの。",
    memoryTip: "1語ずつ日本語にして、つなげて読む。",
  },
  {
    id: 'moshi_2026_11_eigo_c21',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: ______ is that boy?\n B: He is my brother.」",
    choices: ["① Who", "② What", "③ Where", "④ When"],
    answer: "① Who",
    hint: "B は「彼は私の兄（弟）です」。人について答えているよ。人をたずねる疑問詞は？",
    explanation: `【何を聞かれているか】
A の質問に入る疑問詞を選びます。「あの男の子はだれですか」という質問をつくります。

【なぜそうなるのか】
疑問詞は、答えの種類で選びます。B の答えは「He is my brother.（彼は私の兄〈弟〉です）」で、人についての答えです。人を「だれ」とたずねる疑問詞は Who です。

【ステップ1】
B の答えを見ます。「He is my brother.」は、あの男の子がどんな人かを答えています。

【ステップ2】
人をたずねる疑問詞は Who（だれ）です。What は物、Where は場所、When は時をたずねます。

【ステップ3】
Who is that boy? で「あの男の子はだれですか」になります。

【答え】
① Who（Who is that boy?）

【確かめ】
「あの男の子はだれですか。」「彼は私の兄です。」と問いと答えがつながります。What なら物の名前、Where なら場所、When なら時が答えになるので、合いません。

【よくあるまちがい】
What is that boy? としてしまうことです。What は「何」で、物の名前や職業をたずねる語です。人の名前や関係は Who でたずねます。`,
    pitfall: "人についてたずねるときは Who。What は物、Where は場所、When は時。",
    memoryTip: "Who ＝ だれ、What ＝ 何、Where ＝ どこ、When ＝ いつ。",
  },
  {
    id: 'moshi_2026_11_eigo_c22',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: How many ______ do you have?\n B: I have three.」",
    choices: ["① pen", "② pens", "③ a pen", "④ pen's"],
    answer: "② pens",
    hint: "How many は「いくつ」と数をたずねる言葉。あとに続く名詞の形はどうなるかな？",
    explanation: `【何を聞かれているか】
How many のあとに続く名詞の形を選びます。「あなたはペンを何本持っていますか」という質問です。

【なぜそうなるのか】
How many は「いくつ」と数をたずねる言葉で、あとの名詞は必ず複数形（s などがついた形）にします。「いくつ」とたずねる時点で、1つではなく2つ以上を想定しているからです。B の答えが three（3つ）であることも、複数の答えを表しています。

【ステップ1】
How many は、数をたずねる疑問詞だと思い出します。「いくつの〜」という意味です。

【ステップ2】
How many のあとの名詞は複数形にするきまりです。pen は pens にします。

【ステップ3】
How many pens do you have? と書きます。答えの I have three. とも合います。

【答え】
② pens（How many pens do you have?）

【確かめ】
3本持っているなら three pens で、複数です。pen だけでは単数、a pen は1本、pen's は「ペンの」という意味になり、数をたずねる文に合いません。

【よくあるまちがい】
How many pen と単数のままにすることです。How many のあとは複数形が必要です。`,
    pitfall: "How many ＋ 名詞の複数形（s・es）。単数形にしない。",
    memoryTip: "How many ＋ 複数名詞 ＋ do you have?（いくつ持っていますか）。",
  },
  {
    id: 'moshi_2026_11_eigo_c23',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「Yesterday I ______ soccer with my friends.」",
    choices: ["① play", "② plays", "③ played", "④ playing"],
    answer: "③ played",
    hint: "Yesterday は「きのう」。過去のことを言うとき、動詞の形はどうなるかな？",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「きのう、私は友だちとサッカーをしました」という文です。

【なぜそうなるのか】
yesterday（きのう）は過去を表す言葉なので、動詞を過去形にします。ふつうの動詞の過去形は、語の終わりに ed をつけます（play → played）。過去形は主語が何でも同じ形なので、三単現の s のような区別は要りません。

【ステップ1】
yesterday があるので、過去の話だとわかります。

【ステップ2】
過去形のつくり方を思い出します。ふつうの動詞は ed をつけます。play は y の前が母音（a）なので、そのまま ed をつけて played です。

【ステップ3】
Yesterday I played soccer with my friends. と読みます。

【答え】
③ played（Yesterday I played soccer with my friends.）

【確かめ】
「きのう、サッカーをしました」と過去の文になります。play・plays は現在形、playing は ing 形で be動詞がないと動詞として使えません。

【よくあるまちがい】
現在形の play のままにしてしまうことです。yesterday・last week・ago などの語があれば、過去形にします。`,
    pitfall: "yesterday（きのう）があれば過去形。play → played。",
    memoryTip: "過去を表す語（yesterday・last 〜・〜 ago）を見たら、動詞を過去形に。",
  },
  {
    id: 'moshi_2026_11_eigo_c24',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「We ______ to the zoo last Saturday.」",
    choices: ["① go", "② goes", "③ went", "④ gone"],
    answer: "③ went",
    hint: "last Saturday は「この前の土曜日」。go の過去形は ed をつけない特別な形だよ。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「私たちはこの前の土曜日に動物園へ行きました」という文です。

【なぜそうなるのか】
last Saturday（この前の土曜日）は過去を表すので、go を過去形にします。go のように ed をつけない動詞を不規則動詞（ふきそくどうし）といい、go は went に変わります。不規則動詞は形を1つずつ覚えるしかないので、よく出る語は覚えておきます。

【ステップ1】
last Saturday（この前の土曜日）があるので、過去の話です。

【ステップ2】
go は不規則動詞で、過去形は went です（goed とは言いません）。

【ステップ3】
We went to the zoo last Saturday. と読みます。

【答え】
③ went（We went to the zoo last Saturday.）

【確かめ】
「この前の土曜日に動物園へ行きました」と過去の文になります。go は現在形、goes は三単現、gone は完了などで使う別の形で、ここでは合いません。

【よくあるまちがい】
goed と書いてしまうことです。go のような不規則動詞に ed はつけません。`,
    pitfall: "go の過去形は went（goed ではない）。",
    memoryTip: "不規則動詞：go → went、have → had、see → saw、eat → ate。",
  },
  {
    id: 'moshi_2026_11_eigo_c25',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「She ______ come to school yesterday.」（彼女はきのう学校に来ませんでした。）",
    choices: ["① doesn't", "② didn't", "③ isn't", "④ wasn't"],
    answer: "② didn't",
    hint: "yesterday があるので過去の文。一般動詞 come を過去に打ち消すときの形は？",
    explanation: `【何を聞かれているか】
「〜しませんでした」という過去の否定文をつくる語を選びます。

【なぜそうなるのか】
一般動詞の過去の否定文は、動詞の前に did not（短く didn't）を置きます。did が過去の意味を持っているので、あとの動詞は過去形にせず原形（come）のままにします。主語が she でも、過去では doesn't は使いません。

【ステップ1】
yesterday があり、come は一般動詞なので、「一般動詞の過去の否定文」です。

【ステップ2】
過去の否定は didn't ＋ 動詞の原形です。主語が何でも didn't を使います。

【ステップ3】
She didn't come to school yesterday. と書きます。come は原形のままです。

【答え】
② didn't（She didn't come to school yesterday.）

【確かめ】
「きのう学校に来なかった」と過去の否定になります。doesn't は現在の否定、isn't と wasn't は be動詞用なので、come の前には使えません。

【よくあるまちがい】
She doesn't come と、現在の形にしてしまうことです。yesterday があるときは過去の didn't を使います。`,
    pitfall: "過去の否定は didn't ＋ 原形。主語が she でも doesn't は使わない。",
    memoryTip: "現在 don't・doesn't、過去 didn't。didn't のあとは原形。",
  },
  {
    id: 'moshi_2026_11_eigo_c26',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: Does Tom play tennis?\n B: Yes, he ______.」",
    choices: ["① is", "② do", "③ does", "④ plays"],
    answer: "③ does",
    hint: "質問の最初の語に注目しよう。答えでは、その語と同じなかまの語を使うよ。",
    explanation: `【何を聞かれているか】
答えの文に入る語を選びます。「トムはテニスをしますか。」「はい、します。」という会話です。

【なぜそうなるのか】
Do・Does で始まる質問には、Yes のあとも do・does を使って答えます。質問と同じ語をくり返す形で答えるきまりです。主語が Tom（he）の1人なので、Does に合わせて does を使います。

【ステップ1】
質問は Does Tom play ...? です。Does で始まる、一般動詞の疑問文です。

【ステップ2】
答えは Yes, he does. の形です。主語 Tom を he で言いかえ、質問の Does に合わせて does を使います。

【ステップ3】
Yes, he does. となります。（No のときは No, he doesn't. です。）

【答え】
③ does（Yes, he does.）

【確かめ】
Does ～? には does で答えます。is は be動詞の質問用、do は I・you・複数用、plays は動詞そのものなので、答えの終わりには入りません。

【よくあるまちがい】
Yes, he plays. と動詞をくり返してしまうことです。短い答えでは、do・does を使います。`,
    pitfall: "Does ～? ─ Yes, he does. 質問の Does と答えの does をそろえる。",
    memoryTip: "Do you ～? → Yes, I do. ／ Does he ～? → Yes, he does.",
  },
  {
    id: 'moshi_2026_11_eigo_c27',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「I will ______ my grandmother next week.」",
    choices: ["① visits", "② visited", "③ visit", "④ visiting"],
    answer: "③ visit",
    hint: "will のあとに続く動詞は、いつもどんな形になるかな？ will は can と同じなかまの言葉だよ。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「私は来週、祖母をたずねるつもりです」という文です。

【なぜそうなるのか】
will は「〜するつもりだ・〜だろう」と未来のことを言う助動詞です。can と同じなかまで、あとに続く動詞は主語が何でも原形（何もつかない形）を使います。will がすでに未来の意味を持っているので、動詞の形は変えません。

【ステップ1】
next week（来週）があり、will があるので、未来の文です。

【ステップ2】
will のあとの動詞は原形です。主語が I でも he でも、s も ed も ing もつけません。

【ステップ3】
I will visit my grandmother next week. と書きます。

【答え】
③ visit（I will visit my grandmother next week.）

【確かめ】
「来週、祖母をたずねるつもりです」と自然です。visits は三単現、visited は過去形、visiting は ing 形で、will のあとには置けません。

【よくあるまちがい】
will のあとに visited や visiting を置くことです。will ＋ 動詞の原形、と決めておきましょう。`,
    pitfall: "will のあとは必ず動詞の原形。s・ed・ing はつけない。",
    memoryTip: "will ＋ 動詞の原形 ＝ 未来（〜するつもり）。will と can のあとは原形。",
  },
  {
    id: 'moshi_2026_11_eigo_c28',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「My bag is ______ than your bag.」",
    choices: ["① heavy", "② heavier", "③ heaviest", "④ more heavy"],
    answer: "② heavier",
    hint: "than（〜よりも）があるときは、2つをくらべる形。heavy の語尾の y に注意しよう。",
    explanation: `【何を聞かれているか】
空所に入る形容詞の形を選びます。「私のかばんはあなたのかばんより重いです」という文です。

【なぜそうなるのか】
than（〜よりも）があるときは、2つをくらべる比較級（ひかくきゅう）を使います。短い形容詞は語の終わりに er をつけます。heavy のように「子音字＋y」で終わる語は、y を i に変えてから er をつけて heavier にします。

【ステップ1】
than があるので、2つのかばんをくらべる文です。比較級を使います。

【ステップ2】
heavy は「子音字（v）＋y」で終わる語です。y を i に変えて er をつけます。

【ステップ3】
heavy → heavier となり、My bag is heavier than your bag. と書きます。

【答え】
② heavier（My bag is heavier than your bag.）

【確かめ】
「私のかばんはあなたのより重い」と2つをくらべる文になります。heavy は原形、heaviest は「いちばん重い」（最上級）で、than とは使いません。more heavy は短い語には使いません。

【よくあるまちがい】
heavyer と書いてしまうことです。y は i に変えてから er をつけます。`,
    pitfall: "「子音字＋y」は y → i ＋ er。heavy → heavier。",
    memoryTip: "比較級 ＝ 〜er ＋ than。大きい big → bigger、早い early → earlier。",
  },
  {
    id: 'moshi_2026_11_eigo_c29',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「Mt. Fuji is the ______ mountain in Japan.」",
    choices: ["① high", "② higher", "③ highest", "④ most high"],
    answer: "③ highest",
    hint: "「日本の中でいちばん」という意味。「the」があることにも注目しよう。",
    explanation: `【何を聞かれているか】
空所に入る形容詞の形を選びます。「富士山は日本でいちばん高い山です」という文です。

【なぜそうなるのか】
「〜の中でいちばん…」と言うときは、最上級（さいじょうきゅう）を使います。短い形容詞は est をつけ、前に the を置きます。the がある文や、in Japan（日本の中で）のように範囲を表す言葉がある文は、最上級のサインです。

【ステップ1】
in Japan（日本の中で）とあり、「いちばん」の意味だとわかります。

【ステップ2】
「いちばん高い」は、high に est をつけた最上級 highest です。前には the を置きます。

【ステップ3】
the highest mountain in Japan と書きます。

【答え】
③ highest（Mt. Fuji is the highest mountain in Japan.）

【確かめ】
「日本でいちばん高い山」になります。high は原形、higher は2つをくらべる比較級です。most high とは言いません（短い語は est をつけます）。

【よくあるまちがい】
higher を選んでしまうことです。than がなく、the と in Japan があるので、2つのくらべではなく、いちばんの文です。`,
    pitfall: "the ＋ 最上級（est）＋ in ～。2つのくらべ（er ＋ than）と区別する。",
    memoryTip: "比較級 ＝ er ＋ than、最上級 ＝ the ＋ est ＋ in/of。",
  },
  {
    id: 'moshi_2026_11_eigo_c30',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「My birthday is ______ May.」",
    choices: ["① in", "② on", "③ at", "④ to"],
    answer: "① in",
    hint: "「5月に」のように、月を表すときに使う前置詞だよ。",
    explanation: `【何を聞かれているか】
空所に入る前置詞を選びます。「私の誕生日は5月です」という文です。

【なぜそうなるのか】
時を表す前置詞は、表すものの「大きさ」で使い分けます。月・季節・年のような長い時間には in、曜日や日付には on、時刻には at を使います。May（5月）は月なので、in です。

【ステップ1】
May が月の名前であることをたしかめます。

【ステップ2】
月・季節・年には in を使います。（日付・曜日は on、時刻は at）

【ステップ3】
My birthday is in May. と書きます。「5月に」になります。

【答え】
① in（My birthday is in May.）

【確かめ】
月には in を使うので、in May で「5月に」になります。on は曜日・日付（on May 5 なら正しい）、at は時刻に使うので、May だけのときは合いません。

【よくあるまちがい】
on May と書いてしまうことです。on は on May 5（5月5日）のように日付がつくときです。月だけなら in です。`,
    pitfall: "月だけなら in May、日付までつけば on May 5。",
    memoryTip: "in ＋ 月・季節・年、on ＋ 曜日・日付、at ＋ 時刻。",
  },
  {
    id: 'moshi_2026_11_eigo_c31',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「We have a test ______ Friday.」",
    choices: ["① in", "② at", "③ for", "④ on"],
    answer: "④ on",
    hint: "Friday は曜日の名前。曜日に使う前置詞は？",
    explanation: `【何を聞かれているか】
空所に入る前置詞を選びます。「私たちは金曜日にテストがあります」という文です。

【なぜそうなるのか】
曜日や日付には on を使います。in は月・季節・年、at は時刻です。曜日は「その日」という1日を指すので、on とセットで覚えるのが近道です。

【ステップ1】
Friday が曜日の名前だとたしかめます。

【ステップ2】
曜日・日付には on を使います。

【ステップ3】
We have a test on Friday. と書きます。「金曜日に」になります。

【答え】
④ on（We have a test on Friday.）

【確かめ】
曜日には on を使うので、on Friday で「金曜日に」になります。in は月・季節、at は時刻、for は「〜のために」という意味で、曜日には合いません。

【よくあるまちがい】
in Friday と書くことです。in は月や季節なので、曜日には使いません。`,
    pitfall: "曜日・日付には on（on Monday、on May 5）。",
    memoryTip: "on Sunday（日曜日に）、on Sundays（日曜日はいつも）。",
  },
  {
    id: 'moshi_2026_11_eigo_c32',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「私は毎朝、牛乳を飲みます。」\n[ milk / drink / I / every morning ]",
    answer: "I drink milk every morning.",
    hint: "日本語は「私は・毎朝・牛乳を・飲みます」の順。英語は、だれが → どうする → 何を → いつ の順だよ。",
    explanation: `【何を聞かれているか】
4つの語（句）をならべかえて、「私は毎朝、牛乳を飲みます」という英文をつくります。

【なぜそうなるのか】
英語の文は、「だれが（主語）→ どうする（動詞）→ 何を（目的語）」の順にならびます。日本語は動詞が最後ですが、英語は主語のすぐあとに動詞を置きます。「いつ」を表す every morning は、ふつう文の終わりに置きます。

【ステップ1】
文の最初は大文字の I です。これが主語（私は）です。

【ステップ2】
I のすぐあとに動詞 drink（飲む）を置きます。「私は飲みます」の形です。

【ステップ3】
「何を」にあたる milk を置き、最後に「いつ」にあたる every morning を置きます。I drink milk every morning.

【答え】
I drink milk every morning.

【確かめ】
4つの語（句）をすべて使い、最初は大文字の I、最後はピリオドです。主語 I なので drink に s はつきません。「私は毎朝牛乳を飲む」と日本語に合います。

【よくあるまちがい】
日本語の順（I every morning milk drink）にそのままならべてしまうことです。英語は動詞を主語のすぐあとに置きます。`,
    pitfall: "英語は「主語 → 動詞 → 何を → いつ」。動詞は文の最後に置かない。",
    memoryTip: "I ＋ 動詞 ＋ 名詞 ＋ 時を表す語。",
  },
  {
    id: 'moshi_2026_11_eigo_c33',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "次の日本語に合うように、語を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「あなたは犬が好きですか。」\n[ you / Do / dogs / like ]",
    answer: "Do you like dogs?",
    hint: "一般動詞 like の疑問文は、Do で始めるよ。そのあとは「主語 → 動詞」の順。",
    explanation: `【何を聞かれているか】
4つの語をならべかえて、「あなたは犬が好きですか」という疑問文をつくります。

【なぜそうなるのか】
like のような一般動詞の疑問文は、主語の前に Do（主語が he・she など1人のときは Does）を置きます。「Do ＋ 主語 ＋ 動詞の原形 ～?」の形です。文の最初に Do を置くことで、「これは質問です」と知らせます。

【ステップ1】
疑問文なので、文の最初に Do を置きます。

【ステップ2】
つぎに主語 you、そのあとに動詞 like を続けます。Do you like

【ステップ3】
最後に「何を」にあたる dogs（犬）を置き、文末に ? をつけます。

【答え】
Do you like dogs?

【確かめ】
4つの語をすべて使い、最初は大文字の Do、最後は「？」です。Do you like dogs? は「あなたは犬が好きですか」です。答えは Yes, I do. か No, I don't. になります。

【よくあるまちがい】
You do like dogs? のように、普通の文の順でならべてしまうことです。疑問文は Do を最初に置きます。`,
    pitfall: "一般動詞の疑問文は Do ＋ 主語 ＋ 動詞の原形。Do は最初。",
    memoryTip: "Do you ＋ 動詞 ～?（あなたは〜しますか）。",
  },
  {
    id: 'moshi_2026_11_eigo_c34',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語（句）を選びなさい。\n「A: ______ is this hat?\n B: It is 1,000 yen.」",
    choices: ["① How old", "② How many", "③ How much", "④ How long"],
    answer: "③ How much",
    hint: "B は「1,000円です」と答えているよ。お金（ねだん）をたずねる言い方は？",
    explanation: `【何を聞かれているか】
A の質問に入る語（句）を選びます。「この帽子はいくらですか」という質問です。

【なぜそうなるのか】
ねだんをたずねるときは How much を使います。How old は年れい、How many は数、How long は長さや時間をたずねます。How のあとの言葉で、たずねる内容が変わります。答えが「1,000円」というお金なので、How much です。

【ステップ1】
B の答えを見ます。「It is 1,000 yen.」はねだんの答えです。

【ステップ2】
4つの How ～ の意味を整理します。How old（何才）、How many（いくつ）、How much（いくら）、How long（どれくらい長い）。

【ステップ3】
ねだんは How much です。How much is this hat? になります。

【答え】
③ How much（How much is this hat?）

【確かめ】
「この帽子はいくらですか。」「1,000円です。」と、問いと答えがつながります。年れい・数・長さの質問には、「1,000円」という答えは合いません。

【よくあるまちがい】
How many を選んでしまうことです。How many は数えられるものの数をたずねます。ねだんは How much です。`,
    pitfall: "ねだんは How much。How many は数、How old は年れい。",
    memoryTip: "How much is ～?（〜はいくらですか）。",
  },
  {
    id: 'moshi_2026_11_eigo_c35',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文を読んで答えなさい。\n「A: What time is it now?\n B: It is half past nine.」\n今、何時ですか。",
    choices: ["① 8時30分", "② 9時30分", "③ 9時15分", "④ 10時30分"],
    answer: "② 9時30分",
    hint: "half は「半分」。1時間の半分は何分かな？ past は「〜をすぎて」だよ。",
    explanation: `【何を聞かれているか】
会話から、今の時刻を選びます。「It is half past nine.」の意味を考えます。

【なぜそうなるのか】
英語の時刻は、「half past ＋ 〜時」で「〜時半」を表します。half は「半分」で、1時間（60分）の半分は30分です。past は「〜をすぎて」なので、half past nine は「9時をすぎて30分」、つまり9時30分です。10時30分とまちがえやすいのは、半分すぎで「次の10時に向かう途中」と考えてしまうからです。

【ステップ1】
What time is it now? は「今、何時ですか」という質問です。答えは It is ～ です。

【ステップ2】
half past nine を分けます。half（半分＝30分）＋ past（すぎて）＋ nine（9時）。

【ステップ3】
「9時をすぎて30分」なので、9時30分です。

【答え】
② 9時30分

【確かめ】
9時から30分たったので、9時30分です。8時30分は eight thirty、9時15分は a quarter past nine、10時30分は half past ten と言います。

【よくあるまちがい】
half past nine を、10時30分（次の時刻のほう）と読んでしまうことです。past は「すぎて」なので、9時のあとです。`,
    pitfall: "half past nine ＝ 9時30分。10時30分ではない。",
    memoryTip: "nine thirty ＝ half past nine ＝ 9時30分。a quarter past nine ＝ 9時15分。",
  },
  {
    id: 'moshi_2026_11_eigo_c36',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: "[英文を読んで答えなさい]\nEmi has a small dog. Its name is Pochi. Every morning, Emi walks with Pochi in the park near her house. After school, she gives Pochi some food and water. On Sunday, they play with a ball. Pochi is very happy, and Emi loves him very much.",
    question: "エミは、いつポチといっしょに公園を歩きますか。正しいものを選びなさい。",
    choices: ["① 毎朝", "② 放課後", "③ 日曜日", "④ 毎晩"],
    answer: "① 毎朝",
    hint: "「公園を歩く（walks ... in the park）」と書いてある文を探して、その文の「いつ」を見よう。",
    explanation: `【何を聞かれているか】
英文を読んで、エミが公園を歩く時を選びます。

【なぜそうなるのか】
読解問題では、聞かれていることばを文章の中で探し、その文だけを読んで答えます。時を表す語（Every morning・After school・On Sunday）が複数出てくるので、「どの出来事」と「どの時」が結びついているかを見分けることが大切です。

【ステップ1】
聞かれているのは「公園を歩く時」です。walks ... in the park を探します。

【ステップ2】
「Every morning, Emi walks with Pochi in the park」とあります。Every morning は「毎朝」です。

【ステップ3】
他の時のことも確かめます。After school はえさと水、On Sunday はボール遊びで、歩くことではありません。

【答え】
① 毎朝

【確かめ】
本文の3つの時はそれぞれ別の出来事と結びついています。公園を歩くのは Every morning（毎朝）だけです。「毎晩」は本文に出てきません。

【よくあるまちがい】
出てくる時の語（After school・On Sunday）を、出来事と結びつけずに選んでしまうことです。「何を、いつ」をセットで読みます。`,
    pitfall: "時の語と出来事を結ぶ。walks（歩く）の文の時を探す。",
    memoryTip: "問題文のことば（walks・park）を本文から探し、その文だけを読む。",
  },
  {
    id: 'moshi_2026_11_eigo_c37',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「My brother ______ watch TV on Sundays.」（私の兄（弟）は日曜日にはテレビを見ません。）",
    choices: ["① don't", "② doesn't", "③ isn't", "④ not"],
    answer: "② doesn't",
    hint: "主語 My brother は he と言いかえられる1人の人。一般動詞 watch の否定だよ。",
    explanation: `【何を聞かれているか】
「〜しません」という否定文をつくる語を選びます。主語が1人のときの形を問う問題です。

【なぜそうなるのか】
一般動詞の否定文は、動詞の前に do not（don't）か does not（doesn't）を置きます。主語が he・she・it など1人（三人称単数）のときは doesn't、それ以外（I・you・複数）のときは don't を使います。doesn't の中に三単現の s の働きがあるので、あとの動詞は原形（watch）にします。

【ステップ1】
watch は一般動詞なので、否定は don't または doesn't を使います。

【ステップ2】
主語 My brother は he と言いかえられる1人です。1人の主語には doesn't を使います。

【ステップ3】
My brother doesn't watch TV on Sundays. と書きます。watch に es をつけず、原形のままです。

【答え】
② doesn't（My brother doesn't watch TV on Sundays.）

【確かめ】
主語が1人なので doesn't が合います。don't は I・you・複数用、isn't は be動詞用、not だけでは動詞を打ち消せません。

【よくあるまちがい】
My brother don't watch と書くことです。主語が1人なら doesn't です。また、doesn't watches と s をつけるのもまちがいです。`,
    pitfall: "主語が1人なら doesn't ＋ 動詞の原形。doesn't のあとの動詞に s はつけない。",
    memoryTip: "I・you・複数 → don't、he・she・it・1人 → doesn't。",
  },
  {
    id: 'moshi_2026_11_eigo_c38',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の日本語に合うように、語を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「あなたの誕生日はいつですか。」\n[ is / your / When / birthday ]",
    answer: "When is your birthday?",
    hint: "「いつ」とたずねる語を最初に置こう。そのあとは be動詞の疑問文の形だよ。",
    explanation: `【何を聞かれているか】
4つの語をならべかえて、「あなたの誕生日はいつですか」という疑問文をつくります。

【なぜそうなるのか】
疑問詞（When）で始まる疑問文は、「疑問詞 ＋ be動詞 ＋ 主語 ～?」の順にならびます。「いつ」とたずねたいことを文の最初に置き、そのあとに be動詞（is）、その後ろに主語（your birthday）を置きます。日本語の「あなたの誕生日は」が先にくる順とは逆になります。

【ステップ1】
「いつ」とたずねる疑問詞 When を、文の最初に置きます。

【ステップ2】
When のあとに be動詞 is を置きます。When is

【ステップ3】
最後に主語の your birthday（あなたの誕生日）を置き、文末に ? をつけます。

【答え】
When is your birthday?

【確かめ】
4つの語をすべて使い、最初は大文字の When、最後は「？」です。答えるときは My birthday is May 5.（私の誕生日は5月5日です）のように言います。

【よくあるまちがい】
When your birthday is? のように、日本語の順でならべてしまうことです。疑問文は「疑問詞 ＋ be動詞 ＋ 主語」です。`,
    pitfall: "疑問詞 ＋ be動詞 ＋ 主語。be動詞を主語の前に出す。",
    memoryTip: "When is ＋ 主語 ～?（〜はいつですか）、Where is ＋ 主語 ～?（〜はどこですか）。",
  },
  {
    id: 'moshi_2026_11_eigo_c39',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: Are you studying now?\n B: Yes, I ______.」",
    choices: ["① do", "② am", "③ are", "④ study"],
    answer: "② am",
    hint: "質問は Are you ～ing? の形。短い答えでは、主語 I に合う be動詞を使うよ。",
    explanation: `【何を聞かれているか】
答えの文に入る語を選びます。「あなたは今、勉強していますか。」「はい、しています。」という会話です。

【なぜそうなるのか】
be動詞の疑問文（Are you ～?）には、be動詞を使って答えます。質問の主語は you ですが、答える人は自分（I）のことを言うので、主語を I に変え、I に合う be動詞 am を使います。Do ～? の質問に do で答えるのと同じで、質問と同じなかまの語で答えるのがきまりです。

【ステップ1】
質問は Are you studying ～? です。be動詞（are）で始まる現在進行形の疑問文です。

【ステップ2】
答えるとき、you は I に変わります。I に合う be動詞は am です。

【ステップ3】
Yes, I am. となります。（No のときは No, I'm not. です。）

【答え】
② am（Yes, I am.）

【確かめ】
Yes, I am. は「はい、しています」と自然な答えです。do は一般動詞の質問用、are は you や複数用、study は動詞そのもので短い答えの終わりには入りません。

【よくあるまちがい】
質問の Are につられて Yes, I are. としてしまうことです。答えでは主語が I に変わるので、am にします。`,
    pitfall: "Are you ～? ─ Yes, I am.（I are とは言わない）。",
    memoryTip: "Are you ～? → Yes, I am. ／ Is he ～? → Yes, he is.",
  },
  {
    id: 'moshi_2026_11_eigo_c40',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「There ______ two cats under the table.」",
    choices: ["① is", "② am", "③ are", "④ be"],
    answer: "③ are",
    hint: "There のあとの be動詞は、あとに続く名詞（two cats）の数で決まるよ。",
    explanation: `【何を聞かれているか】
空所に入る be動詞を選びます。「テーブルの下にネコが2ひきいます」という文です。

【なぜそうなるのか】
There is ～／There are ～ は、「〜がいる・ある」と存在を表す言い方です。There のあとの be動詞は、後ろにある名詞の数で決まります。1つ・1人なら is、2つ以上なら are です。主語にあたるのは There ではなく、あとの two cats だからです。

【ステップ1】
「〜がいる」を表す There ＋ be動詞 の文だとたしかめます。

【ステップ2】
be動詞の形は、後ろの名詞で決まります。two cats（2ひき）は複数です。

【ステップ3】
複数なので are を使い、There are two cats under the table. と書きます。

【答え】
③ are（There are two cats under the table.）

【確かめ】
「テーブルの下にネコが2ひきいる」になります。is は1ひきのときの形で、two cats には合いません。am は I 用、be は原形で、ここでは使えません。

【よくあるまちがい】
There が単数のように見えて is を選ぶことです。There is ／ are の be動詞は、there ではなく、あとの名詞の数に合わせます。`,
    pitfall: "There is ＋ 1つ・1人、There are ＋ 2つ以上。",
    memoryTip: "There is a cat. ／ There are two cats.",
  },
  {
    id: 'moshi_2026_11_eigo_c41',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な語（句）を選びなさい。\n「A: Did you watch the game last night?\n B: No, I ______.」",
    choices: ["① don't", "② didn't", "③ wasn't", "④ watched not"],
    answer: "② didn't",
    hint: "質問が Did で始まっているよ。答えでも Did と同じなかまの語を使い、否定にしよう。",
    explanation: `【何を聞かれているか】
答えの文に入る語（句）を選びます。「あなたは昨夜、試合を見ましたか。」「いいえ、見ませんでした。」という会話です。

【なぜそうなるのか】
Did ～? の質問には、Yes, I did. か No, I didn't. で答えます。質問と同じ did を使い、No のときは not をつけた didn't にします。last night（昨夜）の話なので過去の形です。現在形の don't では、時が合いません。

【ステップ1】
質問は Did you watch ～? です。Did で始まる、過去の疑問文です。

【ステップ2】
No と答えるとき、過去の否定は didn't です。

【ステップ3】
No, I didn't. となります。（Yes のときは Yes, I did. です。）

【答え】
② didn't（No, I didn't.）

【確かめ】
過去の質問に過去の否定 didn't で答えるので、時がそろいます。don't は現在の否定、wasn't は be動詞用、watched not という言い方は英語にありません。

【よくあるまちがい】
No, I don't. と現在の形で答えてしまうことです。質問が過去（Did）なら、答えも過去（didn't）です。`,
    pitfall: "Did ～? ─ Yes, I did. ／ No, I didn't.（質問の時にそろえる）",
    memoryTip: "Do ～? → do・don't、Did ～? → did・didn't。",
  },
  {
    id: 'moshi_2026_11_eigo_c42',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「I play the piano ______ than my sister.」",
    choices: ["① good", "② well", "③ better", "④ best"],
    answer: "③ better",
    hint: "than（〜よりも）があるので比較級。well の比較級は、ふつうの er とはちがう形だよ。",
    explanation: `【何を聞かれているか】
空所に入る語の形を選びます。「私は姉よりじょうずにピアノをひきます」という文です。

【なぜそうなるのか】
than があるので、2人をくらべる比較級を使います。「じょうずに」は副詞 well で、well の比較級は better です。good（よい）も比較級は better ですが、「じょうずに ひく」のように動詞を説明するときは well を使うので、元の形は well です。good・well の比較級は、どちらも er ではなく better になる特別な形です。

【ステップ1】
than があるので、2人をくらべる文だとわかります。比較級が必要です。

【ステップ2】
「じょうずに」は well です。well の比較級は特別な形で、better になります。

【ステップ3】
I play the piano better than my sister. と書きます。

【答え】
③ better（I play the piano better than my sister.）

【確かめ】
「姉よりじょうずにひく」という意味になります。good・well は原形で、than の前では比較級にします。best は最上級（いちばんじょうず）で、than とは使いません。

【よくあるまちがい】
well にさらに er をつけて weller と書くことです。well と good の比較級は、どちらも better という特別な形です。`,
    pitfall: "good・well の比較級は better、最上級は best。er・est はつけない。",
    memoryTip: "good／well → better → best（特別な形）。",
  },
  {
    id: 'moshi_2026_11_eigo_c43',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「Ken is as ______ as Tom.」（ケンはトムと同じくらい背が高いです。）",
    choices: ["① tall", "② taller", "③ tallest", "④ more tall"],
    answer: "① tall",
    hint: "as ～ as の間には、形容詞の元の形（何もつかない形）を入れるよ。",
    explanation: `【何を聞かれているか】
空所に入る形容詞の形を選びます。「ケンはトムと同じくらい背が高い」という文です。

【なぜそうなるのか】
「A は B と同じくらい〜だ」は as ～ as で表します。2つの as のあいだには、形容詞の元の形（原級〈げんきゅう〉）を置きます。くらべて差がないので、er や est をつけて「〜より」「いちばん」の形にはしません。

【ステップ1】
as ～ as ＝「同じくらい〜」の形だと見ぬきます。

【ステップ2】
as と as のあいだは、形容詞の原級（元の形）です。tall のまま使います。

【ステップ3】
Ken is as tall as Tom. と書きます。

【答え】
① tall（Ken is as tall as Tom.）

【確かめ】
「ケンはトムと同じくらい背が高い」と日本語に合います。taller・tallest は差があるときの形で、as ～ as の中には入りません。more tall は、短い語には使わない形です。

【よくあるまちがい】
くらべる文だからと、as taller as と比較級にしてしまうことです。as ～ as の中は原級です。`,
    pitfall: "as ～ as のあいだは原級（er・est をつけない）。",
    memoryTip: "as ＋ 原級 ＋ as ＝ 同じくらい〜。",
  },
  {
    id: 'moshi_2026_11_eigo_c44',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    passage: "[英文を読んで答えなさい]\nTom is eleven years old. He likes sports. He plays soccer on Saturday and swims on Sunday. He cannot play baseball, but his sister can play it well. Tom wants to be a soccer player. He practices every day after dinner.",
    question: "本文の内容から、トムの姉（妹）についてわかることを選びなさい。",
    choices: ["① 野球を上手にできる。", "② サッカー選手になりたい。", "③ 日曜日に泳ぐ。", "④ 毎日、夕食のあとに練習する。"],
    answer: "① 野球を上手にできる。",
    hint: "「his sister」と書いてある部分を探そう。ほかの選択肢は、だれのことかな？",
    explanation: `【何を聞かれているか】
英文を読んで、トムの姉（妹）についてわかることを選びます。

【なぜそうなるのか】
読解では、「だれについての文か」を見分けることが大切です。he（トム）と his sister（トムの姉〈妹〉）が出てくるので、選択肢の内容が、どちらの人物のことかを1つずつ確かめます。

【ステップ1】
聞かれているのは「トムの姉（妹）」です。his sister がある文を探します。

【ステップ2】
「He cannot play baseball, but his sister can play it well.」とあります。「トムは野球ができないが、姉（妹）は上手にできる」という意味です。

【ステップ3】
他の選択肢を確かめます。サッカー選手になりたいのはトム、日曜日に泳ぐのもトム、毎日練習するのもトムです。

【答え】
① 野球を上手にできる。

【確かめ】
姉（妹）についての文は、can play it well（上手にできる）の1か所だけです。②③④はすべてトム（He）についての文です。

【よくあるまちがい】
文章に出てきた内容だけで選び、だれのことかを見分けないことです。「He」と「his sister」を区別して読みます。`,
    pitfall: "内容がある ≠ その人のこと。He（トム）と his sister を区別する。",
    memoryTip: "選択肢のことが、本文でだれについて書かれているかを確かめる。",
  },
  {
    id: 'moshi_2026_11_eigo_c45',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    passage: "[英文を読んで答えなさい]\nMs. Green is our English teacher. She comes from Canada. She came to Japan three years ago. She likes sushi, but she doesn't like natto. Her class is fun because we sing songs and play games. We like her very much.",
    question: "本文の内容に合うものを選びなさい。",
    choices: ["① グリーン先生は3年前に日本に来た。", "② グリーン先生は寿司がきらいだ。", "③ グリーン先生はアメリカ出身だ。", "④ 授業では歌もゲームもしない。"],
    answer: "① グリーン先生は3年前に日本に来た。",
    hint: "各選択肢を、本文の文と1つずつ見くらべよう。「ago」は「〜前に」だよ。",
    explanation: `【何を聞かれているか】
本文の内容に合う選択肢を、1つ選びます。

【なぜそうなるのか】
内容一致の問題は、選択肢を本文の文と1つずつ照らし合わせます。ここでは、年数（three years ago）、好ききらい（likes・doesn't like）、出身（comes from）、授業の内容（sing・play）の4点が、本文と合っているかを確かめます。1つでもちがえば、その選択肢は不正解です。

【ステップ1】
①「3年前に日本に来た」を確かめます。「She came to Japan three years ago.」とあり、一致します。

【ステップ2】
② 寿司は「She likes sushi」とあり、好きです。きらいなのは natto（納豆）なので、合いません。

【ステップ3】
③ 出身は「comes from Canada」でカナダです。④ 授業では「we sing songs and play games」とあり、歌もゲームもします。

【答え】
① グリーン先生は3年前に日本に来た。

【確かめ】
本文と合うのは①だけです。②は寿司ときらいなものが入れかわり、③は出身国がちがい、④は「しない」が逆の内容です。

【よくあるまちがい】
「sushi」「natto」だけを見て、好きときらいを入れかえて読むことです。likes と doesn't like の部分まで確かめます。`,
    pitfall: "名詞だけで判断しない。likes か doesn't like か、まで読む。",
    memoryTip: "選択肢を本文の文と1つずつ照らし合わせる。",
  },
  {
    id: 'moshi_2026_11_eigo_c46',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「ユキは日曜日に図書館へ行きます。」\n[ goes / Yuki / the library / to / on Sundays ]",
    answer: "Yuki goes to the library on Sundays.",
    hint: "主語は Yuki。動詞 goes のあとに「どこへ」、さいごに「いつ」を置こう。",
    explanation: `【何を聞かれているか】
5つの語（句）をならべかえて、「ユキは日曜日に図書館へ行きます」という英文をつくります。

【なぜそうなるのか】
英語の文は、「だれが → どうする → どこへ → いつ」の順にならぶことが多いです。ユキは1人（三人称単数）なので、go は goes の形になっています。「どこへ」を表す to the library は動詞のすぐあとに置き、「いつ」を表す on Sundays は文の終わりに置きます。

【ステップ1】
文の最初は大文字の Yuki（主語）です。つぎに動詞 goes を置きます。Yuki goes

【ステップ2】
「どこへ」にあたる to the library を続けます。go は「〜へ行く」なので、to が必要です。

【ステップ3】
最後に「いつ」にあたる on Sundays を置き、文末にピリオドをつけます。

【答え】
Yuki goes to the library on Sundays.

【確かめ】
5つの語（句）をすべて使い、最初は大文字の Yuki、最後はピリオドです。「ユキは日曜日に図書館へ行く」と日本語に合います。on Sundays は曜日に on を使うきまりです。

【よくあるまちがい】
on Sundays を文の途中（Yuki on Sundays goes ...）に入れてしまうことです。「いつ」は文の終わりに置くのがふつうです。`,
    pitfall: "主語 → 動詞 → どこへ → いつ。動詞は主語のすぐあと。",
    memoryTip: "Yuki goes to ～ on Sundays.（どこへ → いつ の順）。",
  },
  {
    id: 'moshi_2026_11_eigo_c47',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の日本語に合うように、語を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「あなたはきのう、だれに会いましたか。」\n[ did / you / Who / see / yesterday ]",
    answer: "Who did you see yesterday?",
    hint: "「だれに」という疑問詞を最初に置こう。そのあとは did ＋ 主語 ＋ 動詞の原形だよ。",
    explanation: `【何を聞かれているか】
5つの語をならべかえて、「あなたはきのう、だれに会いましたか」という過去の疑問文をつくります。

【なぜそうなるのか】
疑問詞で始まる過去の疑問文は、「疑問詞 ＋ did ＋ 主語 ＋ 動詞の原形 ～?」の順です。did が過去の意味を持っているので、see は過去形（saw）にせず原形のままにします。過去を2回言わないためです。「いつ」を表す yesterday は文の終わりに置きます。

【ステップ1】
「だれに」とたずねる Who を、文の最初に置きます。

【ステップ2】
Who のあとに did、主語 you、動詞の原形 see を置きます。Who did you see

【ステップ3】
最後に yesterday（きのう）を置き、文末に ? をつけます。

【答え】
Who did you see yesterday?

【確かめ】
5つの語をすべて使い、最初は大文字の Who、最後は「？」です。did のあとの see は原形です。答えるときは I saw Ken.（ケンに会いました）のように過去形で言います。

【よくあるまちがい】
Who did you saw と、did のあとを過去形にしてしまうことです。did があるときは、動詞は原形に戻します。`,
    pitfall: "did があるときは動詞は原形（see）。saw にしない。",
    memoryTip: "疑問詞 ＋ did ＋ 主語 ＋ 動詞の原形 ＋ 時。",
  },
  {
    id: 'moshi_2026_11_eigo_c48',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の英文の意味として最も適切なものを選びなさい。\n「I can't swim, but my brother can swim very well.」",
    choices: ["① 私は泳げませんが、兄（弟）はとても上手に泳げます。", "② 私は泳げますが、兄（弟）は泳げません。", "③ 私も兄（弟）もとても上手に泳げます。", "④ 私は泳ぎたくありませんが、兄（弟）は泳ぎたいです。"],
    answer: "① 私は泳げませんが、兄（弟）はとても上手に泳げます。",
    hint: "can't は「〜できない」。but は「しかし」。前半と後半で、できる人とできない人が入れかわるよ。",
    explanation: `【何を聞かれているか】
英文の意味を日本語から選びます。前半と後半の内容に注意します。

【なぜそうなるのか】
can't は cannot を短くした形で、「〜できない」という意味です。but は「しかし」で、前の内容とちがうことをあとに続けます。この文では、前半は「私はできない」、後半は「兄（弟）はできる」と、反対の内容を but でつないでいます。

【ステップ1】
前半「I can't swim」は、「私は泳げない」という意味です。can't ＝ できない。

【ステップ2】
but は「しかし」。ここから反対の内容が始まります。

【ステップ3】
後半「my brother can swim very well」は、「兄（弟）はとても上手に泳げる」です。つなげて①になります。

【答え】
① 私は泳げませんが、兄（弟）はとても上手に泳げます。

【確かめ】
前半（できない）と後半（できる）が、but でちゃんと反対になっています。②は前半と後半が逆、③は「私もできる」、④は want（〜したい）の意味で、本文とちがいます。

【よくあるまちがい】
can't を「できる」と読みちがえることです。n't がついたら「ない」の意味になります。`,
    pitfall: "can't ＝ できない。but のあとは反対の内容が来る。",
    memoryTip: "can ＝ できる、can't ＝ できない。but ＝ しかし。",
  },
  {
    id: 'moshi_2026_11_eigo_c49',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な文を選びなさい。\n「A: Can I use your pen?\n B: Sure. ______」",
    choices: ["① Here you are.", "② I am fine.", "③ Nice to meet you.", "④ See you tomorrow."],
    answer: "① Here you are.",
    hint: "A は「ペンを借りてもいい？」と頼んでいる。B は「いいよ」と言って、何をする場面かな？",
    explanation: `【何を聞かれているか】
会話のつづきとして自然な文を選びます。ペンを借りたいという頼みへの返事です。

【なぜそうなるのか】
会話文は、場面に合う決まった言い方を覚えておくと解けます。Can I ～?（〜してもいいですか）に Sure.（もちろん）と答えたあと、ものを手わたすときには Here you are.（はい、どうぞ）と言います。それぞれの言い方に使う場面があるので、場面で選びます。

【ステップ1】
A の Can I use your pen? は「あなたのペンを使ってもいいですか」という頼みです。

【ステップ2】
B は Sure.（もちろん）と答えています。つぎに、ペンを手わたす場面です。

【ステップ3】
ものを手わたすときの言い方は Here you are.（はい、どうぞ）です。

【答え】
① Here you are.

【確かめ】
「いいよ。はい、どうぞ。」と自然な流れです。I am fine. は「元気です」、Nice to meet you. は初対面のあいさつ、See you tomorrow. は「また明日」で、ペンを渡す場面には合いません。

【よくあるまちがい】
I am fine. を選んでしまうことです。fine は How are you? の答えです。この場面とは関係ありません。`,
    pitfall: "ものを手わたす ＝ Here you are.。あいさつの言い方と混ぜない。",
    memoryTip: "Here you are. ＝ はい、どうぞ。Thank you. ─ You're welcome.",
  },
  {
    id: 'moshi_2026_11_eigo_c50',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「I want ______ a new bike.」（私は新しい自転車がほしいです。）",
    choices: ["① have", "② to have", "③ having", "④ has"],
    answer: "② to have",
    hint: "want のあとに動詞が続くとき、間に入れる小さな語を思い出そう。",
    explanation: `【何を聞かれているか】
空所に入る形を選びます。「私は新しい自転車を持ちたい（ほしい）」という文です。

【なぜそうなるのか】
want は「〜したい」という意味で、あとに動詞を続けるときは、to ＋ 動詞の原形（have など）の形にします。want to ～ で1つのまとまりとして覚えます。want 自体は「ほしい」という気持ちを表し、to ～ で「何をしたいか」を表すしくみです。

【ステップ1】
want のあとに動詞（have）を続ける文だとたしかめます。

【ステップ2】
want のあとの動詞は、to ＋ 原形の形にします。have → to have です。

【ステップ3】
I want to have a new bike. と書きます。「新しい自転車を持ちたい」という意味です。

【答え】
② to have（I want to have a new bike.）

【確かめ】
「新しい自転車を持ちたい」と自然な文です。have だけでは want と動詞が to なしでつながり、having は ing 形、has は三単現で、want のあとには置けません。

【よくあるまちがい】
I want have と、to を落としてしまうことです。want のあとの動詞には to が必要です。`,
    pitfall: "want ＋ to ＋ 動詞の原形。to を落とさない。",
    memoryTip: "want to ～（〜したい）。I want to play soccer.（サッカーがしたい）",
  },
];
