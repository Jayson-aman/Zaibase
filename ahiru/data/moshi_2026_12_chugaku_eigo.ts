import type { Question } from './questions';

// 月例実力テスト 2026年12月号（中学受験・英語）担当A c01〜c25（文法・語い）
// 動く図解は data/figures-moshi-2026-12-eigo-c1.ts（問題IDをキーにして結線される）。
export const moshi202612ChugakuEigo: Question[] = [
  {
    id: 'moshi_2026_12_eigo_c01',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「I have ______ umbrella in my bag.」（私はかばんにかさを1本入れています。）",
    choices: ["① a", "② an", "③ two", "④ many"],
    answer: "② an",
    hint: "umbrella は、つづりの形ではなく、いちばん最初の「音」に注目しよう。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「私はかばんにかさを1本入れています」という文をつくります。

【なぜそうなるのか】
1つのものを表す名詞の前には a か an をつけます。名詞のいちばん最初の「音」が、あ・い・う・え・お に近い音（母音〈ぼいん〉）なら an、それ以外なら a を使います。「a umbrella」だと a と u の音が続いて言いにくいので、間に n を入れて言いやすくしたのが an です。

【ステップ1】
umbrella は1本のかさで、数えられる1つのものです。1つのものには a か an をつけます。

【ステップ2】
umbrella は「ア」の音で始まります。「ア」は母音の音です。母音の音の前では an を使います。

【ステップ3】
an umbrella を空所に入れて、I have an umbrella in my bag. と読みます。「かばんにかさを1本入れています」と自然な文になります。

【答え】
② an

【確かめ】
③ two や ④ many は2つ以上を表す語で、あとに umbrellas と s のついた形が来ます。umbrella（1本）には合いません。① a は「ア」のような母音の前では使いません。an だけが合います。

【よくあるまちがい】
つづりの最初の文字だけで決めてしまうことです。大事なのは文字ではなく最初の「音」です。たとえば an hour（アウアー）は h を読まないので an、a university（ユ…）は最初の音が「ユ」なので a になります。`,
    pitfall: "a か an は、つづりではなく、最初の音で決める。母音の音の前は an。",
    memoryTip: "a・i・u・e・o に近い音の前は an（an apple・an egg・an umbrella）。",
  },
  {
    id: 'moshi_2026_12_eigo_c02',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「There are three ______ on the table.」（テーブルの上に箱が3つあります。）",
    choices: ["① box", "② boxs", "③ boxes", "④ boxies"],
    answer: "③ boxes",
    hint: "three は「3つ」。2つ以上のときは名詞の形が変わるよ。box は x で終わる語だね。",
    explanation: `【何を聞かれているか】
空所に入る名詞の形を選びます。「テーブルの上に箱が3つあります」という文をつくります。

【なぜそうなるのか】
名詞が2つ以上のとき（複数〈ふくすう〉）は、ふつう名詞のおわりに s をつけます。ただし s・x・ch・sh で終わる名詞には es をつけます。box に s だけをつけると「ボックスス」のように音が重なって聞き分けにくくなるので、間に e を入れて「ボクセズ」と読めるようにしたのです。

【ステップ1】
three は「3つ」なので、名詞は2つ以上を表す複数形にします。There are ～ の are も複数のときの形です。

【ステップ2】
box は x で終わる語です。x で終わる名詞には s ではなく es をつけます。

【ステップ3】
box に es をつけて boxes にします。There are three boxes on the table. と読みます。

【答え】
③ boxes

【確かめ】
There are three boxes on the table. は「テーブルの上に箱が3つあります」で、are とも合います。① box は1つのときの形、② boxs はつづりがまちがい、④ boxies という語はありません。

【よくあるまちがい】
box にそのまま s だけをつけて boxs と書いてしまうことです。s・x・ch・sh で終わる語は es（bus→buses、watch→watches、dish→dishes）と覚えましょう。`,
    pitfall: "x・s・ch・sh で終わる名詞は、s ではなく es をつける。box → boxes。",
    memoryTip: "s・x・ch・sh で終わる語 ＋ es（buses・boxes・watches・dishes）。",
  },
  {
    id: 'moshi_2026_12_eigo_c03',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「Look! Five ______ are playing in the park.」（見て！5人の子どもたちが公園で遊んでいます。）",
    choices: ["① child", "② childs", "③ childrens", "④ children"],
    answer: "④ children",
    hint: "five は「5人」。child の複数形は、s をつけるだけではない特別な形だよ。",
    explanation: `【何を聞かれているか】
空所に入る名詞の形を選びます。「5人の子どもたちが公園で遊んでいます」という文をつくります。

【なぜそうなるのか】
名詞が2人（2つ）以上のときは、ふつう s をつけて複数形にします。ところが、昔からの特別な形をもつ名詞があり、child（子ども）の複数形は children です。ほかにも man→men、woman→women、foot→feet、tooth→teeth のように、形がかわる名詞は暗記しておく必要があります。

【ステップ1】
five は「5人」なので、名詞は複数形にします。are playing の are も複数の主語に合う形です。

【ステップ2】
child の複数形は childs ではなく、特別な形 children です。

【ステップ3】
children を空所に入れて、Five children are playing in the park. と読みます。

【答え】
④ children

【確かめ】
Five children are playing in the park. は「5人の子どもが公園で遊んでいる」で、are とも合います。children はもう複数形なので、さらに s をつけた ③ childrens はまちがいです。

【よくあるまちがい】
childs や childrens と書いてしまうことです。children だけで複数形が完成しています。`,
    pitfall: "child の複数形は children。s をつけて childs や childrens にしない。",
    memoryTip: "特別な複数形：child→children、man→men、woman→women、foot→feet、tooth→teeth。",
  },
  {
    id: 'moshi_2026_12_eigo_c04',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「My mother's brother is my ______.」（母の兄〈弟〉は私の＿＿です。）",
    choices: ["① uncle", "② aunt", "③ cousin", "④ grandfather"],
    answer: "① uncle",
    hint: "母のきょうだいで、男の人だよ。おじさんとおばさん、どちらを表す語かな？",
    explanation: `【何を聞かれているか】
母の兄（弟）を、英語で何と言うかを選びます。

【なぜそうなるのか】
家族のよび名は、「自分から見てどういう関係か」と「男か女か」で決まります。父や母のきょうだいは、男の人なら uncle（おじ）、女の人なら aunt（おば）です。いとこは cousin で、おじやおばの子どものことをいい、男女どちらにも使います。

【ステップ1】
My mother's brother は「母のきょうだいで、男の人」です。

【ステップ2】
父や母のきょうだいは、uncle か aunt のどちらかで言います。男の人は uncle、女の人は aunt です。

【ステップ3】
男の人なので uncle を選びます。My mother's brother is my uncle. となります。

【答え】
① uncle

【確かめ】
② aunt は女の人（おば）、③ cousin は「いとこ」（おじ・おばの子ども）、④ grandfather は「祖父」で、母の父のことです。母の兄（弟）に合うのは uncle だけです。

【よくあるまちがい】
cousin（いとこ）と uncle（おじ）を取りちがえることです。uncle・aunt は「親の世代」、cousin は「自分と同じ世代」と覚えましょう。`,
    pitfall: "uncle・aunt は親のきょうだい。cousin は「いとこ」で別の人。",
    memoryTip: "uncle ＝ おじ、aunt ＝ おば、cousin ＝ いとこ。",
  },
  {
    id: 'moshi_2026_12_eigo_c05',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「My brother is ______ years old.」（兄は13歳です。）",
    choices: ["① thirty", "② thirteen", "③ three", "④ thirteenth"],
    answer: "② thirteen",
    hint: "13〜19 は teen（ティーン）で終わる数。30 や 40 は ty で終わるよ。",
    explanation: `【何を聞かれているか】
「13」を英語で表す語を選びます。

【なぜそうなるのか】
13〜19 は、うしろに teen（ティーン）がついた語になります（thirteen・fourteen・fifteen…）。20・30・40…は、うしろに ty（ティ）がついた語になります（twenty・thirty・forty…）。つづりも音もにていますが、表す数が10ちがうので注意します。thirteen は後ろの「ティーン」を強く、thirty は前の「サー」を強く読みます。

【ステップ1】
13歳なので、13を表す語をさがします。

【ステップ2】
13〜19 は teen で終わり、30・40… は ty で終わります。13 は thir＋teen と覚えます。

【ステップ3】
thirteen を空所に入れて、My brother is thirteen years old. と読みます。

【答え】
② thirteen

【確かめ】
① thirty は 30、③ three は 3、④ thirteenth は「13番目」という順番の語です。「13歳」に合うのは thirteen だけです。

【よくあるまちがい】
thirteen（13）と thirty（30）を取りちがえることです。fifteen（15）と fifty（50）も同じ型なので、teen か ty かをよく見ます。`,
    pitfall: "teen は13〜19、ty は20・30・40…。thirteen と thirty は別の数。",
    memoryTip: "teen は「ティーン」を強く（13〜19）、ty は前を強く（30・40…）。",
  },
  {
    id: 'moshi_2026_12_eigo_c06',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「This is Tom's bike. ______ bike is new.」（これはトムの自転車です。彼の自転車は新しいです。）",
    choices: ["① He", "② His", "③ Him", "④ Hers"],
    answer: "② His",
    hint: "「トムの」を「彼の」と言いかえる形だよ。名詞 bike の前に置く形を選ぼう。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「トムの自転車」を2回目は「彼の自転車」と言いかえます。

【なぜそうなるのか】
「〜の」と持ち主を表す語（所有格〈しょゆうかく〉）は、名詞の前に置きます。he（彼は）の「〜の」の形は his です。he は「〜は」、his は「〜の」、him は「〜を・〜に」と、働きごとに形がちがうので、名詞 bike の前には「〜の」の形を使います。

【ステップ1】
Tom は男の人なので、言いかえる語は he の仲間です。

【ステップ2】
bike（自転車）という名詞の前なので、「〜の」を表す形を選びます。he の「〜の」は his です。

【ステップ3】
His を空所に入れて、His bike is new. と読みます。文の最初なので大文字で始めます。

【答え】
② His

【確かめ】
His bike is new.（彼の自転車は新しい）となり自然です。① He は「〜は」の形で名詞の前に置けません。③ Him は「〜を・〜に」の形です。④ Hers は「彼女のもの」で、男の人にも名詞の前にも使えません。

【よくあるまちがい】
He bike のように、「〜は」の形のまま名詞の前に置いてしまうことです。名詞の前では「〜の」の形（his・her・my・your…）を使います。`,
    pitfall: "名詞の前に置くのは「〜の」の形。he は his、she は her、I は my。",
    memoryTip: "he ー his ー him（は・の・を）。名詞の前は his。",
  },
  {
    id: 'moshi_2026_12_eigo_c07',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「Look at that girl. I know ______.」（あの女の子を見て。私は彼女を知っています。）",
    choices: ["① she", "② her", "③ hers", "④ his"],
    answer: "② her",
    hint: "know（知っている）のあとに来る形だよ。「彼女を」と言うときの形を選ぼう。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「私は彼女を知っています」という文をつくります。

【なぜそうなるのか】
動詞のあとや前置詞のあとには、「〜を・〜に」の形（目的格〈もくてきかく〉）を使います。she が「〜は」の形、her が「〜を・〜に」の形です。I know の know は動作を受ける動詞なので、そのあとには「〜を」の形が来ます。

【ステップ1】
空所の前の I know は「私は知っている」です。空所には「だれを」にあたる語が入ります。

【ステップ2】
that girl を1語で言いかえると、she の仲間です。know のあとなので「〜を」の形にします。she の「〜を」は her です。

【ステップ3】
her を空所に入れて、I know her. と読みます。「私は彼女を知っています」となります。

【答え】
② her

【確かめ】
I know her. は「私は彼女を知っています」です。① she は「〜は」の形で、動詞のあとには置けません。③ hers は「彼女のもの」という意味で、「知っている」の相手として意味が合いません。④ his は男の人に使う語です。

【よくあるまちがい】
I know she. のように、主語に使う she をそのまま動詞のあとに置いてしまうことです。動詞のあとは「〜を」の形（her・him・them・me）です。`,
    pitfall: "動詞のあとは「〜を」の形。she → her、he → him、I → me。",
    memoryTip: "she ー her ー hers（は・を〈の〉・のもの）。動詞のあとは her。",
  },
  {
    id: 'moshi_2026_12_eigo_c08',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: ______ cap is this?\n B: It's Aya's.」",
    choices: ["① Who", "② Whose", "③ When", "④ Where"],
    answer: "② Whose",
    hint: "B は「アヤのです」と、持ち主を答えているよ。持ち主をたずねる言葉は？",
    explanation: `【何を聞かれているか】
会話文の空所に入る疑問詞（ぎもんし）を選びます。

【なぜそうなるのか】
疑問詞は「何をたずねたいか」で選びます。「だれの〜」と持ち主をたずねるときは、whose の後ろに名詞を続けます（Whose cap…？）。Aさんは「だれのぼうしか」を聞き、Bさんは「アヤのです」と持ち主を答えているので、whose が合います。

【ステップ1】
B の答えは「It's Aya's.（アヤのものです）」で、持ち主を答えています。

【ステップ2】
持ち主をたずねる疑問詞は whose です。「whose ＋ 名詞」で「だれの〜」になります。

【ステップ3】
Whose を入れて、Whose cap is this? と読みます。「これはだれのぼうしですか」です。

【答え】
② Whose

【確かめ】
Whose cap is this? ― It's Aya's. は「これはだれのぼうしですか。―アヤのです」と自然に通じます。① Who は「だれ」（人）、③ When は「いつ」（時）、④ Where は「どこ」（場所）をたずねる語で、答えと合いません。

【よくあるまちがい】
Who と Whose を取りちがえることです。Who is ～?（だれですか＝人）に対して、Whose ＋ 名詞（だれの〜＝持ち主）と覚えましょう。`,
    pitfall: "Who は「だれ」、Whose は「だれの」。持ち主をたずねるのは Whose。",
    memoryTip: "Whose ＋ 名詞 ＝ 「だれの〜」。答えは It's Aya's.（〜のです）。",
  },
  {
    id: 'moshi_2026_12_eigo_c09',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: ______ are you so happy today?\n B: Because I got a good score on the test.」",
    choices: ["① Where", "② When", "③ Why", "④ Who"],
    answer: "③ Why",
    hint: "B は Because（なぜなら）で始めて答えているよ。理由をたずねる疑問詞を選ぼう。",
    explanation: `【何を聞かれているか】
会話文の空所に入る疑問詞を選びます。「どうして今日はそんなにうれしいの？」とたずねる文です。

【なぜそうなるのか】
疑問詞は、たずねたい中身で選びます。理由をたずねるときは Why（なぜ・どうして）を使い、答えるときは Because ～（なぜなら〜だから）と理由を言います。B が Because で始まっているので、A は理由をたずねたとわかります。

【ステップ1】
B の答えは Because I got a good score on the test.（テストでよい点をとったからです）で、理由を言っています。

【ステップ2】
理由をたずねる疑問詞は Why です。Why ～?（なぜ〜ですか）に Because ～ で答えます。

【ステップ3】
Why を入れて、Why are you so happy today? と読みます。「どうして今日はそんなにうれしいの？」です。

【答え】
③ Why

【確かめ】
Why are you so happy today? ― Because I got a good score on the test. は「どうしてうれしいの？―テストでよい点をとったから」と自然です。① Where は場所、② When は時、④ Who は人をたずねる語で、Because の答えにはなりません。

【よくあるまちがい】
When（いつ）や Where（どこ）と混ぜることです。Because で答える質問は Why、と結びつけて覚えましょう。`,
    pitfall: "Because で答えるのは Why の質問。Where・When・Who では Because にならない。",
    memoryTip: "Why ～?（なぜ？）― Because ～.（なぜなら〜だから）。",
  },
  {
    id: 'moshi_2026_12_eigo_c10',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な文を選びなさい。\n「A: Let's play tennis after school.\n B: ______」",
    choices: ["① Yes, let's.", "② Yes, I do.", "③ Yes, you are.", "④ No, I'm not."],
    answer: "① Yes, let's.",
    hint: "Let's ～ は「〜しましょう」とさそう文。さそわれたら、同じ言葉でこたえるよ。",
    explanation: `【何を聞かれているか】
「放課後にテニスをしましょう」とさそわれたときの、Bの答えを選びます。

【なぜそうなるのか】
Let's ～ は「〜しましょう」とさそう文です。さそいを受けるときは Yes, let's.（ええ、そうしましょう）と、さそった言葉で答えます。ことわるときは Sorry, I can't. などと言います。Do you ～? や Are you ～? の質問ではないので、do や are を使った答えは合いません。

【ステップ1】
A の文は Let's play tennis ～.（テニスをしましょう）で、さそう文です。質問ではありません。

【ステップ2】
さそう文には、「Yes, let's.」で受けるのが決まった答え方です。

【ステップ3】
① Yes, let's. を選びます。「ええ、そうしましょう」と自然につながります。

【答え】
① Yes, let's.

【確かめ】
② Yes, I do. は Do you ～?（〜しますか）への答えです。③ Yes, you are. と ④ No, I'm not. は be動詞の質問（Are you ～?）に対する言い方です。A は質問ではなくさそっているので、どれも合いません。

【よくあるまちがい】
Yes, I do. と答えてしまうことです。Do you ～? には do、Are you ～? には am、Let's ～ には let's と、さそわれた形で答えます。`,
    pitfall: "Let's ～ は質問ではない。答えは Yes, let's.（受ける）か Sorry, I can't.（ことわる）。",
    memoryTip: "Let's ～.（〜しましょう）― Yes, let's.（そうしましょう）。",
  },
  {
    id: 'moshi_2026_12_eigo_c11',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「Tom ______ to clean his room today.」（トムは今日、自分の部屋をそうじしなければなりません。）",
    choices: ["① have", "② has", "③ having", "④ is have"],
    answer: "② has",
    hint: "have to は「〜しなければならない」。主語 Tom は1人の男の人だよ。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「トムは今日、自分の部屋をそうじしなければなりません」という文です。

【なぜそうなるのか】
have to ＋ 動詞の原形 は「〜しなければならない」という意味です。主語が1人（he・she・it と言いかえられる人や物）のときは、have が has に変わります（三単現〈さんたんげん〉のきまり）。to のあとの clean は原形のまま変わりません。

【ステップ1】
「〜しなければならない」は have to ＋ 動詞の原形です。to のあとの clean は原形のままです。

【ステップ2】
主語 Tom は1人の男の人（he）です。1人の主語のときは have を has にします。

【ステップ3】
has を空所に入れて、Tom has to clean his room today. と読みます。

【答え】
② has

【確かめ】
Tom has to clean his room today. は「トムは今日、部屋をそうじしなければならない」です。① have は I・you・複数の主語のときの形、③ having は be動詞なしでは動詞として足りません、④ is have は be動詞と一般動詞を重ねるので英語ではまちがいです。

【よくあるまちがい】
主語が1人なのに have のままにすることです。I have to ～、You have to ～、He has to ～ と、主語で形を変えます。`,
    pitfall: "have to の have は、主語が1人（he・she・it）のとき has になる。to のあとは原形。",
    memoryTip: "I・You・複数 → have to ～ ／ he・she・it・1人 → has to ～。",
  },
  {
    id: 'moshi_2026_12_eigo_c12',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「We ______ at the library yesterday.」（私たちはきのう図書館にいました。）",
    choices: ["① am", "② is", "③ was", "④ were"],
    answer: "④ were",
    hint: "yesterday は「きのう」だから過去の文。主語 We は複数だよ。",
    explanation: `【何を聞かれているか】
空所に入る be動詞を選びます。「私たちはきのう図書館にいました」という文です。

【なぜそうなるのか】
be動詞の過去形は was と were の2つです。I・he・she・it や1人・1つの主語には was、you・we・they や複数の主語には were を使います。yesterday（きのう）があるので過去の文であり、主語 We は複数なので were になります。

【ステップ1】
yesterday（きのう）があるので、過去の文です。be動詞を過去形にします。

【ステップ2】
主語 We は複数です。複数の主語の be動詞の過去形は were です。

【ステップ3】
were を空所に入れて、We were at the library yesterday. と読みます。

【答え】
④ were

【確かめ】
We were at the library yesterday. は「私たちはきのう図書館にいました」で、過去の文として正しいです。① am と ② is は現在形、③ was は1人用の過去形で、複数の We には合いません。

【よくあるまちがい】
過去だと気づいても、was と were を取りちがえることです。was は I・he・she・it・1人・1つ、were は you・we・they・複数です。`,
    pitfall: "過去の be動詞は was と were。we・you・they・複数は were。",
    memoryTip: "I・he・she・it → was ／ you・we・they → were。",
  },
  {
    id: 'moshi_2026_12_eigo_c13',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「My mother ______ a cake last Sunday.」（母はこの前の日曜日にケーキをつくりました。）",
    choices: ["① make", "② makes", "③ maked", "④ made"],
    answer: "④ made",
    hint: "last Sunday は過去。make の過去形は、ed をつけるだけではない特別な形だよ。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「母はこの前の日曜日にケーキをつくりました」という文です。

【なぜそうなるのか】
過去のできごとを言うときは、動詞を過去形にします。ふつうの動詞は ed をつけますが、make → made のように、形が変わる動詞（不規則動詞）があります。maked という形はありません。日付に last Sunday があるので過去形 made を選びます。

【ステップ1】
last Sunday（この前の日曜日）は過去を表す言葉です。動詞を過去形にします。

【ステップ2】
make の過去形は maked ではなく、特別な形 made です。

【ステップ3】
made を空所に入れて、My mother made a cake last Sunday. と読みます。

【答え】
④ made

【確かめ】
My mother made a cake last Sunday. は「母はこの前の日曜日にケーキをつくった」で、過去の文として自然です。① make と ② makes は現在形で、last Sunday とは合いません。③ maked という語はありません。

【よくあるまちがい】
ed をつけて maked と書いてしまうことです。eat→ate、go→went、see→saw、buy→bought など、形が変わる動詞は1つずつ覚えておきます。`,
    pitfall: "不規則動詞は ed をつけない。make → made。",
    memoryTip: "不規則動詞：make→made、eat→ate、go→went、see→saw、buy→bought。",
  },
  {
    id: 'moshi_2026_12_eigo_c14',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: Where is the post office?\n B: It is ______ the bank and the station.」（郵便局は銀行と駅のあいだにあります。）",
    choices: ["① between", "② behind", "③ under", "④ on"],
    answer: "① between",
    hint: "「AとBのあいだ」を表す言葉は、A and B とセットで使うよ。",
    explanation: `【何を聞かれているか】
会話文の空所に入る前置詞（ぜんちし）を選びます。「郵便局は銀行と駅のあいだにあります」という文です。

【なぜそうなるのか】
between A and B は「AとBのあいだに」という意味で、2つのものにはさまれた場所を表します。ほかの前置詞は、behind（〜のうしろに）、under（〜の下に）、on（〜の上に〈接して〉）で、位置を表すしかたがちがいます。日本語の「あいだ」に合うのは between です。

【ステップ1】
B の答えは「銀行と駅のあいだ」です。2つのもの（the bank と the station）にはさまれた場所です。

【ステップ2】
「AとBのあいだに」は between A and B と言います。and とセットで覚えます。

【ステップ3】
between を入れて、It is between the bank and the station. と読みます。

【答え】
① between

【確かめ】
It is between the bank and the station. は「銀行と駅のあいだにあります」です。② behind は「うしろ」、③ under は「下」、④ on は「上」で、日本語の「あいだ」に合いません。

【よくあるまちがい】
日本語の「〜と〜」に引っぱられて、and につられた前置詞を選んでしまうことです。「あいだ」は between、場所の位置は日本語の意味に合わせて選びます。`,
    pitfall: "「AとBのあいだ」は between A and B。behind（うしろ）・under（下）と混ぜない。",
    memoryTip: "between A and B ＝ AとBのあいだ。",
  },
  {
    id: 'moshi_2026_12_eigo_c15',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「I enjoy ______ pictures.」（私は絵をかくことを楽しみます。）",
    choices: ["① draw", "② to draw", "③ drawing", "④ draws"],
    answer: "③ drawing",
    hint: "enjoy のあとに動詞を続けるときは、ing をつけた形にするきまりがあるよ。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「私は絵をかくことを楽しみます」という文です。

【なぜそうなるのか】
enjoy は「〜することを楽しむ」という意味で、あとに動詞を続けるときは ing形（動名詞〈どうめいし〉）にするきまりです。ing をつけると、動詞が「〜すること」という名詞の働きになるためです。want to ～ のように to ＋ 原形を続ける動詞とはちがいます。

【ステップ1】
「絵をかくことを楽しむ」は、enjoy のあとに「かくこと」を続けます。

【ステップ2】
enjoy のあとの動詞は ing形にします。draw に ing をつけて drawing です。

【ステップ3】
drawing を空所に入れて、I enjoy drawing pictures. と読みます。

【答え】
③ drawing

【確かめ】
I enjoy drawing pictures. は「私は絵をかくことを楽しむ」です。① draw と ④ draws は ing形ではないので、enjoy のあとには置けません。② to draw は want のあとなら使えますが、enjoy のあとでは使えません。

【よくあるまちがい】
日本語の「〜したい」「〜すること」から、to をつけて enjoy to draw と書いてしまうことです。enjoy・finish のあとは ing形、want・hope のあとは to ＋ 原形、と使い分けます。`,
    pitfall: "enjoy のあとは ing形。enjoy to ～ とは言わない。",
    memoryTip: "enjoy ～ing（〜して楽しむ）、finish ～ing（〜し終える）。",
  },
  {
    id: 'moshi_2026_12_eigo_c16',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: Do you have ______ brothers?\n B: Yes, I have two.」",
    choices: ["① any", "② a", "③ an", "④ much"],
    answer: "① any",
    hint: "brothers は複数形。「いくつか」を表す語で、疑問文で使うものを選ぼう。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「兄弟はいますか」とたずねる文です。

【なぜそうなるのか】
「いくつか（の）」を表す語は、ふつうの文では some、疑問文と否定文では any を使います。a・an は「1つの」、much は「量が多い」の意味で、数えられる複数形の名詞（brothers）には使えません。Do you have ～? は疑問文なので any を使います。

【ステップ1】
brothers は複数形で、数えられる名詞です。a や an は1つのときにしか使えません。

【ステップ2】
much は数えられない名詞（water など）に使う語なので、brothers には使えません。疑問文で「いくつか」を表すのは any です。

【ステップ3】
any を入れて、Do you have any brothers? と読みます。「兄弟はいますか」です。

【答え】
① any

【確かめ】
Do you have any brothers? ― Yes, I have two. は「兄弟はいますか。―はい、2人います」と自然です。② a と ③ an は複数形の brothers に付かず、④ much は数えられる名詞には使えません。

【よくあるまちがい】
ふつうの文のつもりで some を入れてしまうことです。疑問文・否定文では any、ふつうの文では some です（ただし、人にものをすすめる文では Would you like some tea? のように some を使います）。`,
    pitfall: "「いくつか」は、疑問文・否定文では any、ふつうの文では some。",
    memoryTip: "some（ふつうの文）／ any（疑問文・否定文）。",
  },
  {
    id: 'moshi_2026_12_eigo_c17',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「How ______ water do you drink every day?」（あなたは毎日、どれくらいの水を飲みますか。）",
    choices: ["① many", "② much", "③ some", "④ any"],
    answer: "② much",
    hint: "water は「1つ、2つ」と数えない名詞。量をたずねるときの How ＋ □ だよ。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「毎日どれくらいの水を飲みますか」と、量をたずねる文です。

【なぜそうなるのか】
「どれくらい」とたずねるとき、数えられる名詞の複数形（books・apples…）には How many、数えられない名詞（water・milk・time…）には How much を使います。water は「1つ、2つ」と数えない名詞なので、量をたずねる How much を選びます。

【ステップ1】
water は「1つ、2つ」と数えない名詞です。コップ1杯、2杯と入れ物で数えます。

【ステップ2】
数えられない名詞には How much、数えられる複数形には How many を使います。

【ステップ3】
much を入れて、How much water do you drink every day? と読みます。

【答え】
② much

【確かめ】
How much water do you drink every day? は「毎日どれくらいの水を飲みますか」です。① many は数えられる複数形（How many cups）に使います。③ some と④ any は How のあとには置けません。

【よくあるまちがい】
日本語の「どれくらい」から How many を選んでしまうことです。名詞が数えられるかどうかを先に見ます。How many ＋ 複数形 ／ How much ＋ 数えられない名詞です。`,
    pitfall: "数えられない名詞（water・milk）には How much。How many は数えられる複数形。",
    memoryTip: "How many ＋ 複数形（数）／ How much ＋ 数えられない名詞（量・ねだん）。",
  },
  {
    id: 'moshi_2026_12_eigo_c18',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「I was very sleepy, ______ I went to bed early.」（私はとてもねむかったので、早くねました。）",
    choices: ["① but", "② so", "③ or", "④ if"],
    answer: "② so",
    hint: "前半は「理由」、後半は「その結果」。理由から結果へつなぐ言葉は？",
    explanation: `【何を聞かれているか】
2つの文をつなぐ接続詞（せつぞくし）を選びます。「ねむかったので、早くねました」という文です。

【なぜそうなるのか】
接続詞は、2つの文の関係で選びます。「A、だから B」（理由→結果）のときは so、「A、しかし B」（逆の内容）のときは but、「A、または B」（どちらか）のときは or、「もし A なら B」のときは if を使います。前半の「ねむかった」が理由で、後半の「早くねた」が結果なので so です。

【ステップ1】
前半 I was very sleepy（とてもねむかった）は、あとの行動の理由です。

【ステップ2】
後半 I went to bed early（早くねた）は、その結果です。理由から結果へつなぐのは so です。

【ステップ3】
so を入れて、I was very sleepy, so I went to bed early. と読みます。

【答え】
② so

【確かめ】
I was very sleepy, so I went to bed early. は「ねむかったので、早くねた」で、理由と結果がつながります。① but は逆の内容、③ or は「または」、④ if は「もし〜なら」で、この2つの文の関係には合いません。

【よくあるまちがい】
文のつながりを読まず、but や and などを勘で選んでしまうことです。前後の文が「理由と結果」「逆の内容」「どちらか」のどれかを先に見きわめます。`,
    pitfall: "「だから」の so は、前が理由・後ろが結果。but（しかし）と取りちがえない。",
    memoryTip: "so ＝ だから（理由→結果）、but ＝ しかし、or ＝ または、if ＝ もし〜なら。",
  },
  {
    id: 'moshi_2026_12_eigo_c19',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: ______ is it from your house to the park?\n B: It is about 500 meters.」",
    choices: ["① How old", "② How far", "③ How many", "④ How much"],
    answer: "② How far",
    hint: "B は 500 meters（メートル）と答えているよ。メートルは何を表す言葉かな？",
    explanation: `【何を聞かれているか】
会話文の空所に入る How ～ の言葉を選びます。「あなたの家から公園までは、どれくらいですか」という質問です。

【なぜそうなるのか】
How は、あとに続く語と組んで意味が変わります。How far は「どれくらい遠い（きょり）」、How old は「何歳（年れい・古さ）」、How many は「いくつ（数）」、How much は「いくら（ねだん）・どれくらい（量）」です。B の答えが 500 meters（きょり）なので、きょりをたずねる How far が合います。

【ステップ1】
B の答えは about 500 meters（約500メートル）で、きょりを答えています。

【ステップ2】
きょりをたずねる言葉は How far です。far は「遠い」という意味です。

【ステップ3】
How far を入れて、How far is it from your house to the park? と読みます。

【答え】
② How far

【確かめ】
How far is it from your house to the park? ― It is about 500 meters. は「家から公園までどれくらい？―約500メートル」と自然に通じます。① How old は年れい、③ How many は数、④ How much はねだんや量で、きょりの答えには合いません。

【よくあるまちがい】
How だけを見て How much や How many を選んでしまうことです。答えが「きょり・年れい・数・ねだん」のどれかで、How ＋ ○○ の○○を決めます。`,
    pitfall: "きょりは How far、年れいは How old、数は How many、ねだんは How much。",
    memoryTip: "How far（きょり）／ How old（年れい）／ How many（数）／ How much（ねだん・量）。",
  },
  {
    id: 'moshi_2026_12_eigo_c20',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な文を選びなさい。\n「A: Would you like some tea?\n B: ______」",
    choices: ["① Yes, please.", "② Yes, I would like.", "③ Yes, I do.", "④ Yes, you would."],
    answer: "① Yes, please.",
    hint: "Would you like ～? は「〜はいかがですか」とすすめる文。ていねいにうけるときの決まった言い方があるよ。",
    explanation: `【何を聞かれているか】
「お茶はいかがですか」とすすめられたときの、Bの答えを選びます。

【なぜそうなるのか】
Would you like ～? は、ていねいに「〜はいかがですか」とすすめる文です。うけるときは Yes, please.（はい、お願いします）、ことわるときは No, thank you.（いいえ、けっこうです）と答えるのが決まった言い方です。Do you ～? の質問ではないので、Yes, I do. では答えになりません。

【ステップ1】
A の文は Would you like some tea?（お茶はいかがですか）で、飲み物をすすめる文です。

【ステップ2】
すすめられたとき、うけるなら Yes, please.、ことわるなら No, thank you. と答えます。

【ステップ3】
① Yes, please. を選びます。「はい、お願いします」と、すすめにうなずく自然な答えです。

【答え】
① Yes, please.

【確かめ】
② Yes, I would like. は、「何を」にあたる語が足りず、文が終わっていません。③ Yes, I do. は Do you ～? への答えで、Would you like ～? には合いません。④ Yes, you would. は主語が you になっていて、自分のことを答える形になっていません。

【よくあるまちがい】
Yes, I do. と答えてしまうことです。Would you like ～? は「好きですか」ではなく「いかがですか」とすすめる文なので、答えは please か thank you です。`,
    pitfall: "Would you like ～? には Yes, please. か No, thank you. で答える。Yes, I do. は使わない。",
    memoryTip: "Would you like ～?（〜はいかがですか）― Yes, please. ／ No, thank you.",
  },
  {
    id: 'moshi_2026_12_eigo_c21',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な文を選びなさい。\n「A: You look sick. What's the matter?\n B: ______」",
    choices: ["① I have a bad cold.", "② I'm fine, thank you.", "③ I'm from Japan.", "④ It's Sunday."],
    answer: "① I have a bad cold.",
    hint: "What's the matter? は「どうしたの？」。体の調子やこまりごとをたずねる言い方だよ。",
    explanation: `【何を聞かれているか】
「具合が悪そうだね。どうしたの？」とたずねられたときの、Bの答えを選びます。

【なぜそうなるのか】
What's the matter? は、様子がおかしい人に「どうしたの？」とたずねる言い方です。答えは、体の調子やこまりごとを言います。直訳の「何が問題ですか」ではなく、思いやりのひとことだと考えます。A は「具合が悪そうだ」と言っているので、B は具合の悪い理由を答えます。

【ステップ1】
A は You look sick.（具合が悪そうだね）と言ってから、What's the matter? とたずねています。

【ステップ2】
What's the matter? には、体の調子やこまりごとを答えます。

【ステップ3】
① I have a bad cold.（ひどいかぜをひいています）を選びます。A の質問にぴったり合います。

【答え】
① I have a bad cold.

【確かめ】
② I'm fine, thank you. は「元気です」で、具合が悪そうだという A の言葉と合いません。③ I'm from Japan. は出身（Where are you from? への答え）、④ It's Sunday. は曜日（What day is it? への答え）で、質問と関係がありません。

【よくあるまちがい】
What を見て「何ですか」と考え、③ や ④ のように別の質問の答えを選んでしまうことです。What's the matter? は決まった言い方なので、まるごと「どうしたの？」と覚えます。`,
    pitfall: "What's the matter? は「どうしたの？」。体の調子やこまりごとを答える。",
    memoryTip: "What's the matter? ＝ どうしたの？ ― I have a headache. ／ I have a cold.",
  },
  {
    id: 'moshi_2026_12_eigo_c22',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「Look at the dark clouds. It is going to ______ soon.」（あの黒い雲を見て。もうすぐ雨がふりそうです。）",
    choices: ["① rain", "② rains", "③ raining", "④ rained"],
    answer: "① rain",
    hint: "be going to のあとの動詞の形は、主語が何でも変わらないよ。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「もうすぐ雨がふりそうです」という文です。

【なぜそうなるのか】
be going to ＋ 動詞の原形 は、「〜するつもりだ」「〜しそうだ」という、これからのことを表します。目の前の様子（黒い雲）から「もうすぐそうなる」と言うときにも使います。主語が it でも、to のあとの動詞は s などをつけず、原形のままにします。

【ステップ1】
黒い雲を見て「もうすぐ雨がふりそうだ」と言っています。これからのことなので be going to を使います。

【ステップ2】
be going to のあとは動詞の原形です。主語が it でも、rains のように s をつけません。

【ステップ3】
rain を空所に入れて、It is going to rain soon. と読みます。

【答え】
① rain

【確かめ】
It is going to rain soon. は「もうすぐ雨がふりそうだ」です。② rains は s がついた形、③ raining は ing形、④ rained は過去形で、どれも be going to のあとには置けません。

【よくあるまちがい】
主語 it につられて rains と書いてしまうことです。be going to のあとは主語に関係なく、いつも原形です。`,
    pitfall: "be going to のあとは原形。主語が it でも rains にしない。",
    memoryTip: "be going to ＋ 動詞の原形 ＝ 〜するつもり・〜しそう。",
  },
  {
    id: 'moshi_2026_12_eigo_c23',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「Thank you for ______ me with my homework.」（宿題を手伝ってくれてありがとう。）",
    choices: ["① help", "② helps", "③ to help", "④ helping"],
    answer: "④ helping",
    hint: "for は前置詞。前置詞のあとに動詞を続けるときの形を思い出そう。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「宿題を手伝ってくれてありがとう」という文です。

【なぜそうなるのか】
Thank you for ～ は、「〜してくれてありがとう」と、ありがたい理由を言う形です。for は前置詞（名詞を後ろに置く言葉）なので、あとに動詞を続けたいときは、動詞を ing形（動名詞）にして名詞の働きをもたせます。to ＋ 原形や、原形のままでは置けません。

【ステップ1】
for は前置詞で、あとには名詞が来るきまりです。

【ステップ2】
動詞を続けたいときは、ing形にして「〜すること」という名詞の働きにします。help に ing をつけて helping です。

【ステップ3】
helping を空所に入れて、Thank you for helping me with my homework. と読みます。

【答え】
④ helping

【確かめ】
Thank you for helping me with my homework. は「宿題を手伝ってくれてありがとう」です。① help ② helps ③ to help は、for（前置詞）のあとに置けない形です。

【よくあるまちがい】
日本語の「手伝ってくれて」から原形 help や to help を選んでしまうことです。前置詞（for・at・in・of など）のあとの動詞は、必ず ing形です。`,
    pitfall: "前置詞のあとに動詞を置くときは ing形。for help や for to help とは書かない。",
    memoryTip: "前置詞 ＋ 動詞のing形（for helping・at playing・in making）。",
  },
  {
    id: 'moshi_2026_12_eigo_c24',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「私は、ピアノをひくのが得意です。」\n[ good / playing / am / I / at / the piano ]",
    answer: "I am good at playing the piano.",
    hint: "「得意だ」は be good at ～。at のあとの動詞は ing形になるよ。最初は I だね。",
    explanation: `【何を聞かれているか】
6つの語（句）をならべかえて、「私は、ピアノをひくのが得意です」という英文をつくります。

【なぜそうなるのか】
「〜が得意だ」は、be good at ～ という決まった言い方です。at は前置詞なので、あとに動詞を置くときは ing形（playing）にします。語の順は、「主語 → be動詞 → good at → ing形 → 名詞」の順です。

【ステップ1】
文の最初は大文字の I です。主語（私は）にあたり、すぐあとに be動詞 am を置きます。

【ステップ2】
「得意だ」にあたる good at を続けます。

【ステップ3】
at のあとは ing形の playing、最後に名詞 the piano を置きます。I am good at playing the piano.

【答え】
I am good at playing the piano.

【確かめ】
6つの語（句）をすべて使い、最初は大文字の I、最後はピリオドです。I am good at playing the piano. は「私はピアノをひくのが得意です」と日本語に合います。at のあとが playing なので、前置詞のあとの ing形のきまりにも合います。

【よくあるまちがい】
日本語の順（I the piano playing good at am）にそのままならべてしまうことです。英語は「主語 → be動詞 → 得意だ → すること → 何を」の順です。`,
    pitfall: "be good at ～ing（〜が得意だ）。at のあとの動詞は ing形。",
    memoryTip: "I am good at ＋ ing形 ＋ 名詞。",
  },
  {
    id: 'moshi_2026_12_eigo_c25',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な文を選びなさい。\n「A: Which do you like better, tea or coffee?\n B: ______」",
    choices: ["① I like tea better.", "② Yes, I do.", "③ I like tea very.", "④ It is tea better."],
    answer: "① I like tea better.",
    hint: "Which ～ A or B? は、2つのうちどちらかを選ぶ質問。Yes・No では答えないよ。",
    explanation: `【何を聞かれているか】
「紅茶とコーヒーでは、どちらが好きですか」とたずねられたときの、Bの答えを選びます。

【なぜそうなるのか】
Which do you like better, A or B? は、AとBの2つのうち「どちらのほうが好きか」をたずねる文です。Yes・No でこたえる質問ではないので、選んだほうを言って I like A better.（私は A のほうが好きです）と答えます。better は good や well の比べるときの形（比較級）で、「より（もっと）」の意味です。

【ステップ1】
A の質問は Which ～ tea or coffee?（紅茶とコーヒーのどちら？）で、2つのうちから選ぶ質問です。

【ステップ2】
Yes・No ではなく、選んだほうを言います。I like tea better. の形で答えます。

【ステップ3】
① I like tea better. を選びます。「私は紅茶のほうが好きです」と、質問にそのまま答えています。

【答え】
① I like tea better.

【確かめ】
② Yes, I do. は Yes・No で答える質問への答えで、Which の質問には合いません。③ I like tea very. は、very のあとに much が足りず、文として不自然です。④ It is tea better. は、「好き」という動詞がなく、文の形が合いません。

【よくあるまちがい】
Do you like ～? の質問と同じつもりで、Yes, I do. と答えてしまうことです。Which や What などの疑問詞で始まる質問は、Yes・No では答えません。`,
    pitfall: "Which ～ A or B? には Yes・No で答えない。選んだほうを言う。",
    memoryTip: "Which do you like better, A or B? ― I like A better.",
  },
];
