import type { Question } from './questions';

// 本試験対策 2027年2月号（中学受験・英語）担当A c01〜c25：文法・語い。
// 現在完了・受け身・不定詞・動名詞・比較・付加疑問・熟語など、入試の定番とミスしやすい点の最終確認。
// 動く図解は data/figures-honshiken-2027-02-eigo-c1.ts（問題IDをキーにして結線される）。
export const honshiken202702ChugakuEigo: Question[] = [
  {
    id: 'honshiken_2027_02_eigo_c01',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「______ run in the classroom.（教室で走ってはいけません。）」",
    choices: ["① Not","② Don't","③ No","④ Doesn't"],
    answer: "② Don't",
    hint: "「〜してはいけない」と禁止するときの言い方を思い出そう。動詞 run の前に何を置く？",
    explanation: `【何を聞かれているか】
「教室で走ってはいけません」と、相手に禁止する文をつくります。

【なぜそうなるのか】
相手に「〜しなさい」と命令する文は、主語を言わずに、動詞の原形（げんけい＝s や ed のつかないもとの形）から始めます。「〜するな」と禁止するときは、その動詞の前に Don't（Do not の短縮形）を置くきまりです。やってはいけない動作は動詞でそのまま示し、前に打ち消しの語をつけるだけにして、形をそろえてあります。

【ステップ1】
文の頭に空所があり、すぐあとに run（走る）という動詞の原形が続いています。主語がないので、命令文だとわかります。

【ステップ2】
命令文を打ち消すときは Don't ＋ 動詞の原形です。Doesn't は he・she などの主語があるときの形で、主語のない命令文には使えません。Not と No は、動詞の前にそのまま置くことができません。

【ステップ3】
Don't を入れて Don't run in the classroom. と読みます。「教室で走ってはいけません」と日本語に合います。

【答え】
② Don't（Don't run in the classroom.）

【確かめ】
① Not run と ③ No run は英語として成り立ちません。④ Doesn't run は主語が必要な形です。ていねいにいうときは Please don't run in the classroom. のように please をつけます。

【よくあるまちがい】
Not run や No run のように、日本語の「〜ない」をそのまま英語にしてしまうことです。禁止は Don't ＋ 動詞の原形と、型で覚えましょう。`,
    pitfall: "Not や No を動詞の前に置かない。禁止の命令文は Don't ＋ 動詞の原形。",
    memoryTip: "「〜するな」＝ Don't ＋ 動詞の原形。主語は書かない。",
  },
  {
    id: 'honshiken_2027_02_eigo_c02',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「I can ______ a bird singing in the tree.」",
    choices: ["① here","② hear","③ her","④ hair"],
    answer: "② hear",
    hint: "「聞こえる」という意味の動詞はどれ？ 発音が同じ語とまちがえないようにしよう。",
    explanation: `【何を聞かれているか】
「木の上で鳥が歌っているのが聞こえる」という文の空所に、意味の合う語を入れます。

【なぜそうなるのか】
英語には、発音が同じ（またはよく似ている）のに、つづりと意味がちがう語があります（同音異義語〈どうおんいぎご〉）。ここでは can のあとに動詞が必要なので、「聞く・聞こえる」を意味する hear を選びます。here は「ここに」、her は「彼女の」、hair は「かみの毛」で、意味がちがいます。hear は ear（耳）をふくむ、と覚えるとつづりを区別できます。

【ステップ1】
can のあとには動詞の原形が入ります。here（ここに）は場所を表す語、her（彼女の）は代名詞、hair（かみの毛）は名詞なので、can のあとには置けません。

【ステップ2】
「鳥が歌っているのが（耳で）聞こえる」ので、「聞こえる」を表す動詞 hear（ヒア）を選びます。

【ステップ3】
I can hear a bird singing in the tree. と読みます。「私は木の上で鳥が歌っているのが聞こえます」と意味が通ります。

【答え】
② hear（I can hear a bird singing in the tree.）

【確かめ】
① here は「ここに」という意味で、動詞ではありません。③ her は後ろに名詞が必要な語です。④ hair は名詞で、can のあとに置くと文になりません。

【よくあるまちがい】
hear と here は発音がまったく同じなので、音だけで here を選んでしまうことです。意味とつづりをセットで覚えましょう。hear は ear（耳）が入っています。`,
    pitfall: "発音が同じ here と hear に注意。動詞が必要な場所なので hear。",
    memoryTip: "hear ＝ 耳（ear）で聞く。here ＝ ここ。",
  },
  {
    id: 'honshiken_2027_02_eigo_c03',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「There is ______ milk in the bottle. We can make only one cup of milk tea.」",
    choices: ["① a few","② many","③ a little","④ these"],
    answer: "③ a little",
    hint: "milk は1つ2つと数えられるかな？ 数えられないものの「少し」は何と言う？",
    explanation: `【何を聞かれているか】
「びんに牛乳が（　）ある。ミルクティーが1杯分しかつくれない」という文の空所に、「少し」を表す語を入れます。

【なぜそうなるのか】
英語の名詞には、1つ2つと数えられるもの（apple・book など）と、数えられないもの（milk・water・time など）があります。「少し」を表す語は、数えられる名詞には a few、数えられない名詞には a little と使い分けます。ものを数で言うのか、量で言うのかを、言葉の形でも区別しているのです。many や these も、数えられる名詞（複数形）といっしょに使う語です。

【ステップ1】
milk（牛乳）は液体なので、1つ2つとは数えられません。数えられない名詞（不可算名詞）です。

【ステップ2】
数えられないものの「少し」は a little です。a few は数えられるもの（a few apples）、many と these は複数形の名詞とセットで使います。

【ステップ3】
There is a little milk in the bottle. と読みます。「びんに牛乳が少しある」で、あとの「ミルクティー1杯分だけ」とも内容が合います。

【答え】
③ a little（There is a little milk in the bottle.）

【確かめ】
There is と単数の形になっているのも、milk が数えられない名詞だからです。① a few や ② many を入れると、milks のように数える形が必要になり、不自然です。

【よくあるまちがい】
日本語の「少し」だけで考えて、a few を選んでしまうことです。名詞が数えられるか、数えられないかを先に見ましょう。`,
    pitfall: "milk・water など数えられない名詞には a few を使わない。",
    memoryTip: "数えられる → a few・many／数えられない → a little・much。",
  },
  {
    id: 'honshiken_2027_02_eigo_c04',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「It's dark in this room. Please turn ______ the light.」",
    choices: ["① on","② off","③ to","④ in"],
    answer: "① on",
    hint: "暗い部屋で、電気をどうしてほしいのかな？ つける？ 消す？",
    explanation: `【何を聞かれているか】
「この部屋は暗いので、電気を（　）ください」という文に合う語を入れます。

【なぜそうなるのか】
turn は、後ろにくる語（on・off など）によって意味が変わる動詞です。turn on ～ は「（電気・テレビなど）をつける」、turn off ～ は「～を消す」です。on は「つながっている」、off は「はなれている」というイメージで、スイッチが電気につながれば電気がつき、はなれれば消える、と考えると覚えやすくなります。

【ステップ1】
前半は「この部屋は暗い」という意味です。暗いのは、電気がついていないからです。

【ステップ2】
暗いときに頼むのは、電気を「つける」ことなので turn on です。off は「消す」という反対の意味です。to や in を入れても、電気をつける意味にはなりません。

【ステップ3】
Please turn on the light. と読みます。「電気をつけてください」と、前半の「暗い」とつながります。

【答え】
① on（Please turn on the light.）

【確かめ】
② off を入れると「暗いので電気を消してください」となり、前半とつじつまが合いません。スイッチの ON と OFF を思いうかべると、取りちがえにくくなります。

【よくあるまちがい】
on と off を、なんとなくの感覚で選んでしまうことです。前半の「暗い」という状況から、つけるのか消すのかを判断しましょう。`,
    pitfall: "前半の「暗い」から、電気を「つける」のか「消す」のかを考える。on と off を取りちがえない。",
    memoryTip: "turn on ＝ つける、turn off ＝ 消す。スイッチの ON／OFF と同じ。",
  },
  {
    id: 'honshiken_2027_02_eigo_c05',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "次の日本語に合う英文を選びなさい。\n「私が留守のあいだ、うちの犬の世話をしてください。」",
    choices: ["① Please look for my dog while I'm away.","② Please look after my dog while I'm away.","③ Please look at my dog while I'm away.","④ Please look up my dog while I'm away."],
    answer: "② Please look after my dog while I'm away.",
    hint: "日本語の中心は「世話をする」。look のあとにつく語で意味が変わる熟語を思い出そう。",
    explanation: `【何を聞かれているか】
日本語の「世話をしてください」にあたる熟語を使った英文を選びます。

【なぜそうなるのか】
look は、後ろにつく語によって意味が変わります。look after ～ は「～の世話をする」、look for ～ は「～をさがす」、look at ～ は「～を見る」、look up ～ は「（辞書などで）～を調べる」です。after は「あとについて」という意味から、「あとについて面倒を見る」と覚えると忘れにくくなります。

【ステップ1】
日本語の文の中心は「うちの犬の世話をしてください」です。「世話をする」という意味の熟語（じゅくご）をさがします。

【ステップ2】
4つの熟語の意味を整理します。look for ＝ さがす、look at ＝ 見る、look up ＝ 調べる、look after ＝ 世話をする。「世話をする」にあたるのは look after です。

【ステップ3】
後半の while I'm away（私が留守のあいだ）も、「その間、犬の面倒を見てほしい」という内容に合います。

【答え】
② Please look after my dog while I'm away.

【確かめ】
① は「犬をさがしてください」、③ は「犬を見てください」、④ は「犬を調べてください」の意味になり、日本語に合いません。

【よくあるまちがい】
look と聞いて「見る」だけを思いうかべ、look at を選んでしまうことです。look は後ろの語とセットで意味が決まります。`,
    pitfall: "look ＋ 後ろの語で意味が変わる。「世話をする」は look after。",
    memoryTip: "look after ＝ あとについて面倒を見る ＝ 世話をする。look for ＝ さがす。",
  },
  {
    id: 'honshiken_2027_02_eigo_c06',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: Have you ever ______ sushi?\n B: Yes, I have. I ate it in Osaka last year.」",
    choices: ["① eat","② ate","③ eaten","④ eating"],
    answer: "③ eaten",
    hint: "Have you ever ～? は「今までに～したことがありますか」。have のあとにくる動詞の形は？",
    explanation: `【何を聞かれているか】
「今までにすしを食べたことがありますか」とたずねる文の、eat の正しい形を選びます。

【なぜそうなるのか】
Have you ever ～?（今までに～したことがありますか）は、現在完了形（have ＋ 過去分詞）で「経験」をたずねる文です。過去分詞は、動詞の3つの形（原形・過去形・過去分詞）の3番目です。eat は eat – ate – eaten と形がかわる不規則動詞なので、3番目の eaten を覚えておく必要があります。

【ステップ1】
Have you ever ～? は「今までに～したことがありますか」という意味です。have のあとには、動詞の過去分詞が入ります。

【ステップ2】
eat の3つの形は、eat（原形）– ate（過去形）– eaten（過去分詞）です。過去分詞は eaten です。

【ステップ3】
Have you ever eaten sushi? と読みます。「今までにすしを食べたことがありますか」。B の「はい、あります。去年、大阪で食べました」という返事にもつながります。

【答え】
③ eaten（Have you ever eaten sushi?）

【確かめ】
B は Yes, I have.（はい、あります）と have を使って答えています。② ate は過去のことだけを表す形で、have のあとには置けません。④ eating や ① eat も、have のあとの形としては合いません。

【よくあるまちがい】
過去の話だからと過去形の ate を入れてしまうことです。have のあとは過去形ではなく、過去分詞です。`,
    pitfall: "have ＋ 過去分詞。過去形 ate と過去分詞 eaten を区別する。",
    memoryTip: "have ＋ 過去分詞。eat – ate – eaten、see – saw – seen、go – went – gone。",
  },
  {
    id: 'honshiken_2027_02_eigo_c07',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「I have lived in Osaka ______ five years.」",
    choices: ["① since","② for","③ in","④ at"],
    answer: "② for",
    hint: "five years は「5年間」という期間の長さ。期間の長さにつける語は？",
    explanation: `【何を聞かれているか】
「私は5年間、大阪に住んでいます」という文の空所に入る語を選びます。

【なぜそうなるのか】
have ＋ 過去分詞で「ずっと～している」（継続）を表す文では、for と since を使い分けます。for ＋ 期間の長さ（for five years ＝ 5年間）、since ＋ 始まりの時点（since 2021 ＝ 2021年から）です。「どれだけの長さか」と「いつからか」は別の情報なので、言葉も分けてあるのです。

【ステップ1】
five years は「5年間」という、期間の長さを表しています。

【ステップ2】
期間の長さには for をつけます。since は since 2021 や since Monday のように、始まりの時点にだけ使います。in や at は、この形の文では使いません。

【ステップ3】
I have lived in Osaka for five years. と読みます。「私は5年間、大阪に住んでいます」と日本語に合います。

【答え】
② for（I have lived in Osaka for five years.）

【確かめ】
① since を入れるなら、since 2021 のように「いつから」を表す語が後ろに必要です。five years は「5年間」という長さなので、since は合いません。

【よくあるまちがい】
for と since を逆にしてしまうことです。「長さ → for」「始まり → since」と区別しましょう。`,
    pitfall: "「5年間」のような期間の長さは for。since はいつからかを表す。",
    memoryTip: "for ＝ 長さ（for three days）、since ＝ いつから（since Monday）。",
  },
  {
    id: 'honshiken_2027_02_eigo_c08',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「Mika is the tallest ______ the five girls.」",
    choices: ["① of","② in","③ than","④ at"],
    answer: "① of",
    hint: "最後の the five girls は「5人」という数のあるまとまりだよ。数があるときに使うのは？",
    explanation: `【何を聞かれているか】
「ミカは5人の女の子の中で、いちばん背が高い」という文の空所に入る語を選びます。

【なぜそうなるのか】
最も～だ、という最上級（the tallest など）のあとで「～の中で」と範囲を示すときは、of と in を使い分けます。of ＋ 複数の人・ものの集まり（of the five girls・of all）、in ＋ 場所や集団（in Japan・in my class）です。「複数のうちから選ぶ」か「ひとつの場所・集団の中で」かのちがいを、of と in で区別します。

【ステップ1】
the tallest は最上級で、「いちばん背が高い」という意味です。何の中でいちばんかを示す語が空所に入ります。

【ステップ2】
後ろの the five girls は「5人の女の子」で、数のある複数の人の集まりです。数のある集まりには of を使います。in は in my class のように、ひとつの場所や集団のときに使います。

【ステップ3】
Mika is the tallest of the five girls. と読みます。「ミカは5人の女の子の中でいちばん背が高い」と日本語に合います。

【答え】
① of（Mika is the tallest of the five girls.）

【確かめ】
③ than は taller than ～（～より背が高い）のように、比較級の文で使う語で、最上級の文には使いません。④ at は範囲を表す語ではありません。② in は the five girls のような数のある集まりには合いません。

【よくあるまちがい】
日本語の「～の中で」を、いつも in だと決めてしまうことです。「5人の中で」のように数があるときは of です。`,
    pitfall: "数のある複数のものには of、場所や集団には in。than は最上級に使わない。",
    memoryTip: "最上級 ＋ of ＋ 複数（of the five／of all）、最上級 ＋ in ＋ 場所・集団（in Japan／in my class）。",
  },
  {
    id: 'honshiken_2027_02_eigo_c09',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「This book ______ by many students in Japan.」",
    choices: ["① reads","② is read","③ is reading","④ read"],
    answer: "② is read",
    hint: "本は「読む」側かな、「読まれる」側かな？ 主語は This book で、あとに by（～によって）があるよ。",
    explanation: `【何を聞かれているか】
「この本は日本の多くの生徒に読まれています」という文の、read の正しい形を選びます。

【なぜそうなるのか】
主語が「動作を受ける側」のときは、受け身（うけみ）の形、be動詞 ＋ 過去分詞を使います。This book は、生徒に「読まれる」ものです。本が自分で読むわけではないので、「読む」の形ではなく「読まれる」の形になります。また、by many students（多くの生徒によって）は「だれが動作をするか」を表す言い方で、受け身の文で使います。read の変化は read – read – read で、つづりは同じですが、過去分詞の read の発音は「レッド」です。

【ステップ1】
主語の This book（この本）は、生徒が「読むもの」で、本自身が読むわけではありません。「読まれる」という受け身の意味になります。by many students も、動作をするのは生徒だと示しています。

【ステップ2】
受け身の形は be動詞 ＋ 過去分詞です。This book は1つで、今のことなので be動詞は is、read の過去分詞は read なので、is read になります。

【ステップ3】
This book is read by many students in Japan. と読みます。「この本は日本の多くの生徒に読まれています」と日本語に合います。

【答え】
② is read（This book is read by many students in Japan.）

【確かめ】
① reads だと「この本が読む」という意味になり、by many students ともつながりません。③ is reading は「読んでいる最中」を表す進行形で、「読まれる」ではありません。④ read は受け身の形（be動詞 ＋ 過去分詞）になっていません。

【よくあるまちがい】
日本語の「読まれている」を「読んでいる」と読んで、進行形の is reading を選んでしまうことです。by ～（～によって）があるときは受け身だと考え、主語が動作を受ける側かどうかを確かめましょう。`,
    pitfall: "主語が動作を受けるときは be ＋ 過去分詞。is reading（進行形）と区別する。by ～があれば受け身。",
    memoryTip: "受け身 ＝ be動詞 ＋ 過去分詞（～される）。read – read – read（過去分詞は「レッド」）。",
  },
  {
    id: 'honshiken_2027_02_eigo_c10',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「Tokyo is one of the biggest ______ in Japan.」",
    choices: ["① city","② cities","③ citys","④ city's"],
    answer: "② cities",
    hint: "one of the ～ は「～のうちの1つ」。選びだす元になるものは1つかな、いくつかな？",
    explanation: `【何を聞かれているか】
「東京は日本で最も大きい都市の1つです」という文の、city の正しい形を選びます。

【なぜそうなるのか】
one of the ＋ 最上級 ＋ 複数形の名詞 で、「最も～なうちの1つ」という意味になります。「いくつかの中の1つ」なので、選びだす元になるものはたくさんあり、名詞は複数形にします。city のように「子音字＋y」で終わる名詞は、y を i にかえて es をつけ、cities にします。

【ステップ1】
one of the biggest ～ は「いちばん大きい～たちのうちの1つ」という意味です。「～たち」なので、あとの名詞は複数形です。

【ステップ2】
city は「子音字（t）＋ y」で終わる名詞なので、y を i にかえて es をつけ、cities にします。citys のように s だけをつけるのはまちがいです。

【ステップ3】
Tokyo is one of the biggest cities in Japan. と読みます。「東京は日本で最も大きい都市の1つです」と日本語に合います。

【答え】
② cities（Tokyo is one of the biggest cities in Japan.）

【確かめ】
① city は単数形なので、one of the ～ のあとには置けません。④ city's は「都市の」という意味の形で、ここでは使えません。③ citys は存在しない形です。

【よくあるまちがい】
単数形の city をそのまま入れたり、citys と s だけをつけてしまったりすることです。「子音字＋y」は y を i にかえて es、と覚えましょう。`,
    pitfall: "one of the ～ のあとは複数形。city は cities（y を i にかえて es）。",
    memoryTip: "one of the ＋ 最上級 ＋ 複数形。子音字＋y は y を i にかえて es。",
  },
  {
    id: 'honshiken_2027_02_eigo_c11',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "次の2つの文がほぼ同じ意味になるように、空所に入る語を選びなさい。\n「Ken is older than Tom.」\n「Tom is ______ than Ken.」",
    choices: ["① older","② younger","③ youngest","④ more young"],
    answer: "② younger",
    hint: "ケンがトムより年上なら、トムはケンより……？ 反対の意味の語を使おう。",
    explanation: `【何を聞かれているか】
「ケンはトムより年上だ」を、トムを主語にして言いかえるとき、空所に入る語を選びます。

【なぜそうなるのか】
2人を比べる文は、主語と比べる相手を入れかえるとき、反対の意味の語を使うと同じ内容を言い表せます。ケンがトムより年上なら、トムはケンより年下です。young のような短い形容詞は、後ろに er をつけて比較級（younger）をつくります。more ～ は、長い語に使う形です。

【ステップ1】
もとの文は「ケンはトムより年上だ」です。この内容を、トムを主語にして言いかえます。

【ステップ2】
主語を入れかえると、「トムはケンより年下だ」となります。「年下」は young（若い）の比較級 younger です。older を入れてしまうと「トムはケンより年上」となり、意味が逆になります。

【ステップ3】
Tom is younger than Ken. と読みます。「トムはケンより年下です」。もとの文と同じ内容になります。

【答え】
② younger（Tom is younger than Ken.）

【確かめ】
ケンが年上ならトムのほうが年下なので、younger が合います。③ youngest は最上級で、than とは使いません。④ more young は、短い語 young には er をつけるので誤りです。

【よくあるまちがい】
older をそのまま入れてしまうことです。比べる順番を入れかえるときは、反対の意味の語を使います。`,
    pitfall: "主語を入れかえたら、反対の意味の語にする。短い語は -er、than とセット。",
    memoryTip: "入れかえたら反対語。短い語は -er ＋ than。",
  },
  {
    id: 'honshiken_2027_02_eigo_c12',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「My mother told me ______ my room before dinner.」",
    choices: ["① clean","② to clean","③ cleaning","④ cleaned"],
    answer: "② to clean",
    hint: "tell は「人に～するように言う」。told me のあとの形を、〈tell ＋ 人 ＋ ？〉で覚えよう。",
    explanation: `【何を聞かれているか】
「母は私に、夕食の前に部屋をそうじするように言いました」という文の、clean の形を選びます。

【なぜそうなるのか】
〈tell ＋ 人 ＋ to ＋ 動詞の原形〉で、「（人）に～するように言う」という意味です。tell・ask・want のように、人に何かをするよう言ったり頼んだりする動詞は、あとに〈人 ＋ to ＋ 動詞の原形〉を続けるきまりです。to には「その方向へ向かう」という感じがあり、言われた内容に向かって動く、と考えるとわかりやすくなります。

【ステップ1】
told me のあとに、「そうじする」という動作が必要です。〈tell ＋ 人〉のあとの形を考えます。

【ステップ2】
tell は〈tell ＋ 人 ＋ to ＋ 動詞の原形〉の型をとります。me のあとに to を置き、clean は原形のままにします。

【ステップ3】
My mother told me to clean my room before dinner. と読みます。「母は私に、夕食の前に部屋をそうじするように言いました」と日本語に合います。

【答え】
② to clean（My mother told me to clean my room before dinner.）

【確かめ】
① clean、③ cleaning、④ cleaned を入れると、told me のあとに動作の内容をつなぐ語がなく、文として成り立ちません。want・ask も同じ型で使います（I want you to help me.）。

【よくあるまちがい】
told me clean のように、to を落としてしまうことです。tell・ask・want のあとは「人 ＋ to ＋ 原形」と型で覚えましょう。`,
    pitfall: "tell ＋ 人 ＋ to ＋ 動詞の原形。to をわすれない。",
    memoryTip: "tell（ask・want）＋ 人 ＋ to ＋ 動詞の原形。",
  },
  {
    id: 'honshiken_2027_02_eigo_c13',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「It is important ______ breakfast every morning.」",
    choices: ["① eat","② to eat","③ ate","④ eats"],
    answer: "② to eat",
    hint: "It is important は「大切だ」。何が大切なのかを表すには、どんな形を使う？",
    explanation: `【何を聞かれているか】
「毎朝、朝食を食べることは大切です」という文の、eat の形を選びます。

【なぜそうなるのか】
It is ＋ 形容詞 ＋ to ＋ 動詞の原形 ～.（～することは…だ）という型があります。この It は「形だけの主語」で、本当の内容は to 以下にあります。長い内容を後ろに回して、文の頭をすっきりさせるための形です。to eat breakfast every morning で、「毎朝、朝食を食べること」というまとまりをつくります。

【ステップ1】
It is important は「（それは）大切だ」という意味です。何が大切なのかは、このあとの部分が説明します。

【ステップ2】
「～すること」を表すには、to ＋ 動詞の原形を使います。大切な内容は「毎朝、朝食を食べること」なので、to eat breakfast every morning とします。

【ステップ3】
It is important to eat breakfast every morning. と読みます。「毎朝、朝食を食べることは大切です」と日本語に合います。

【答え】
② to eat（It is important to eat breakfast every morning.）

【確かめ】
to eat 以下を前に出すと To eat breakfast every morning is important. となり、同じ意味です。① eat、③ ate、④ eats をそのまま入れると、It is important のあとが文として成り立ちません。

【よくあるまちがい】
important のあとに、動詞をそのまま置いてしまうことです。「～すること」を表すには to ＋ 原形を使います。`,
    pitfall: "It is 形容詞 to 動詞。to をおとさない。It は形だけの主語。",
    memoryTip: "It is 形容詞 to 動詞の原形。It は形だけの主語、中身は to 以下。",
  },
  {
    id: 'honshiken_2027_02_eigo_c14',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「I hope ______ it will be sunny tomorrow.」",
    choices: ["① that","② what","③ which","④ how"],
    answer: "① that",
    hint: "I hope のあとに、「～ということ」という文全体が続いているよ。文をつなぐ語は？",
    explanation: `【何を聞かれているか】
「明日は晴れるといいなと思います」という文の、文をつなぐ語を選びます。

【なぜそうなるのか】
think・hope・know・say などのあとに、「～ということ」と文を続けるときは、接続詞 that を使います（that は会話では省略もできます）。ここでは「it will be sunny tomorrow（明日は晴れる）」という文全体が、hope の内容です。what・which・how は「何・どれ・どう」とたずねる意味をもつので、この文にはあいません。

【ステップ1】
I hope のあとに、it will be sunny tomorrow という、主語と動詞のそろった文が続いています。

【ステップ2】
「～ということを」と文をつなぐ働きをするのは that です。what・which・how は、ものごとをたずねる意味が強い語なので、つなぎの語としては合いません。

【ステップ3】
I hope that it will be sunny tomorrow. と読みます。「明日は晴れるといいなと思います」と日本語に合います。

【答え】
① that（I hope that it will be sunny tomorrow.）

【確かめ】
that を省略して I hope it will be sunny tomorrow. と言っても正しい文です。② what、③ which、④ how を入れると、意味が通りません。

【よくあるまちがい】
that を「あれ」という意味だけで覚えていて、文をつなぐ働きがあることを知らないことです。`,
    pitfall: "think・hope・know のあとの「～ということ」は that。省略もできる。",
    memoryTip: "think／hope／know ＋ that ＋ 文。that は省略できる。",
  },
  {
    id: 'honshiken_2027_02_eigo_c15',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な文を選びなさい。\n「A: Will you pass me the salt?\n B: ______」",
    choices: ["① Sure. Here you are.","② Yes, it is.","③ No, I'm not.","④ Of course, you will."],
    answer: "① Sure. Here you are.",
    hint: "Will you ～? は「～してくれませんか」というお願い。お願いされたときの返事を考えよう。",
    explanation: `【何を聞かれているか】
「塩をとってくれませんか」とお願いされたときの、自然な返事を選びます。

【なぜそうなるのか】
Will you ～?（Can you ～?）は、「～してくれませんか」とお願いする言い方です。「あなたは～するつもりですか」と未来をたずねているわけではありません。お願いを引き受けるときは Sure.（いいですよ）や OK. で答え、ものを渡すときは Here you are.（はい、どうぞ）と言います。

【ステップ1】
pass me the salt は「塩を私にとって」という意味です。Will you ～? は、相手にしてほしいことを頼む文です。

【ステップ2】
お願いを引き受ける返事は Sure. や Of course. です。ものを手渡すときには Here you are. と言います。

【ステップ3】
① Sure. Here you are.（いいですよ。はい、どうぞ）が、お願いへの自然な返事です。

【答え】
① Sure. Here you are.

【確かめ】
② Yes, it is. は it is の答えで、Will you ～? への返事になりません。③ No, I'm not. は be動詞の文への返事です。④ Of course, you will. は「もちろんあなたがするでしょう」となり、意味がずれます。

【よくあるまちがい】
Will you ～? を未来の質問だと思って、Yes, I will. 型の答えだけをさがしてしまうことです。会話では、お願いの意味でよく使われます。`,
    pitfall: "Will／Can you ～? は「～してくれませんか」というお願い。",
    memoryTip: "Will／Can you ～? ＝ お願い。返事は Sure. ＋ Here you are.",
  },
  {
    id: 'honshiken_2027_02_eigo_c16',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「I was ______ tired to walk any more.」",
    choices: ["① too","② so","③ very","④ enough"],
    answer: "① too",
    hint: "「疲れすぎて、もう歩けなかった」という意味。「～すぎて…できない」の型を思い出そう。",
    explanation: `【何を聞かれているか】
「私は疲れすぎて、もう歩けませんでした」という文の空所に入る語を選びます。

【なぜそうなるのか】
too ＋ 形容詞 ＋ to ＋ 動詞の原形 で、「～すぎて…できない」という意味になります。too は「ほどよい程度をこえている」ことを表し、「できない」という否定の意味をふくみます。so や very は、このように to ～ とつなげて使うことができません（so ～ that ... の形なら使えます）。enough は「…するのに十分～だ」で、形容詞のあとに置きます。

【ステップ1】
文の意味は「疲れていて、もう歩けなかった」です。つかれの程度が、歩けないほど大きかったことを言いたい文です。

【ステップ2】
「～すぎて…できない」は too ～ to ... の型です。so tired to walk や very tired to walk の形は、英語として成り立ちません。enough は tired enough to ～（～するのに十分疲れている）のように、形容詞のあとに置くので、位置もちがいます。

【ステップ3】
I was too tired to walk any more. と読みます。「私は疲れすぎて、もう歩けませんでした」と日本語に合います。

【答え】
① too（I was too tired to walk any more.）

【確かめ】
同じ内容を so を使って書くと、I was so tired that I couldn't walk any more. となります。too ～ to ... は「できない」という否定の意味をふくむ型なので、not をつけなくても「歩けなかった」になります。

【よくあるまちがい】
so や very を入れて、「とても疲れていて歩く」のように読んでしまうことです。to ～ とつながるときは、too を使います。`,
    pitfall: "too ～ to ... は「～すぎて…できない」（not がなくても否定の意味）。so・very は to ～ とつなげられない。",
    memoryTip: "too ～ to ... ＝ ～すぎて…できない。so ～ that ... ＝ とても～なので…。",
  },
  {
    id: 'honshiken_2027_02_eigo_c17',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の2つの文がほぼ同じ意味になるように、空所に入る語を選びなさい。\n「This book is more difficult than that one.」\n「That book is ______ difficult than this one.」",
    choices: ["① more","② less","③ most","④ as"],
    answer: "② less",
    hint: "この本があの本より「むずかしい」なら、あの本はこの本より……？ more の反対の語を探そう。",
    explanation: `【何を聞かれているか】
「この本はあの本よりむずかしい」を、あの本を主語にして言いかえるとき、空所に入る語を選びます。

【なぜそうなるのか】
more ～ than ... は「…より～だ」、less ～ than ... は「…ほど～でない」という意味です。主語と比べる相手を入れかえるときは、more を less にかえると、同じ内容を言い表せます。この本のほうがむずかしいなら、あの本のほうがやさしい（むずかしさが少ない）からです。

【ステップ1】
もとの文は「この本はあの本よりむずかしい」です。これをあの本を主語にして言いかえます。

【ステップ2】
あの本は、この本より「むずかしくない」ので、less difficult than ～ を使います。more を入れると「あの本のほうがむずかしい」となり、意味が逆になります。

【ステップ3】
That book is less difficult than this one. と読みます。「あの本はこの本ほどむずかしくない」。もとの文と同じ内容です。

【答え】
② less（That book is less difficult than this one.）

【確かめ】
more だと「あの本のほうがこの本よりむずかしい」となり、もとの文と逆です。③ most は最上級（the most difficult）に使う語で、than とは組みません。④ as は as ～ as の形で使い、than とはいっしょに使いません。

【よくあるまちがい】
more をそのまま入れて、意味が逆になってしまうことです。主語を入れかえたら、more を less にかえます。`,
    pitfall: "入れかえるときは more ⇔ less。as は than といっしょに使わない。",
    memoryTip: "more ～ than の入れかえは less ～ than。less ～ than ＝ ～ほどでない。",
  },
  {
    id: 'honshiken_2027_02_eigo_c18',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「You like soccer, ______?」",
    choices: ["① don't you","② do you","③ aren't you","④ won't you"],
    answer: "① don't you",
    hint: "文の終わりに「～ですよね？」と確かめる短い疑問をつけるよ。本文は肯定文？ 否定文？",
    explanation: `【何を聞かれているか】
「あなたはサッカーが好きですよね」と相手に確かめる文の、最後の短い疑問を選びます。

【なぜそうなるのか】
文の終わりに「～ですよね」と確かめる短い疑問をつけたものを、付加疑問（ふかぎもん）といいます。本文が肯定文なら否定の形、否定文なら肯定の形をつけます。動詞は本文と同じ種類にそろえ、一般動詞の現在形なら do・does、be動詞なら be動詞を使います。「そうだと思うけれど確かめたい」ので、本文と反対の形で問い返すのです。

【ステップ1】
本文 You like soccer. は、「～ない」のつかない肯定文です。

【ステップ2】
肯定文には否定の付加疑問をつけます。like は一般動詞の現在形で、主語は you なので、否定の形は don't you です。

【ステップ3】
You like soccer, don't you? と読みます。「あなたはサッカーが好きですよね」と、相手に確かめる文になります。

【答え】
① don't you（You like soccer, don't you?）

【確かめ】
② do you? だと、肯定文のあとに肯定の形をつけることになり、ふつうの付加疑問になりません。③ aren't は be動詞の文用、④ won't は will の文用なので、like の文には合いません。

【よくあるまちがい】
本文と同じ肯定の形 do you をつけてしまうことです。付加疑問は、本文と反対の形をつけます。`,
    pitfall: "肯定文 → 否定の付加疑問、否定文 → 肯定の付加疑問。動詞の種類（do・be・will）を本文に合わせる。",
    memoryTip: "肯定文には否定、否定文には肯定の付加疑問。動詞の種類をそろえる。",
  },
  {
    id: 'honshiken_2027_02_eigo_c19',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語句を選びなさい。\n「Ken was playing video games, but he stopped ______ and went to bed.」",
    choices: ["① to play","② playing","③ play","④ played"],
    answer: "② playing",
    hint: "ケンはゲームを「していた」。そのゲームをどうしたのかな？ 「やめた」と「～するために止まった」のちがいを考えよう。",
    explanation: `【何を聞かれているか】
「ケンはテレビゲームをしていましたが、それをやめてねました」という文の、play の形を選びます。

【なぜそうなるのか】
stop のあとは、動詞ing と to ＋ 動詞で意味がかわります。stop ＋ 動詞ing は「～するのをやめる」、stop ＋ to ＋ 動詞は「～するために立ち止まる」です。ing は「すでにしている動作」を、to は「これからする目的」を表すので、動作がやめられるのか、新しく始まるのかで形が分かれます。

【ステップ1】
前半は「ケンはテレビゲームをしていた」です。ゲームをするという動作は、すでに続いていました。

【ステップ2】
すでにしている動作を「やめる」ときは stop ＋ 動詞ing です。stop to play だと「ゲームをするために立ち止まった」となり、前半の「ゲームをしていた」ことと食いちがいます。

【ステップ3】
Ken was playing video games, but he stopped playing and went to bed. と読みます。「ケンはゲームをしていましたが、やめてねました」と意味が通ります。

【答え】
② playing（Ken was playing video games, but he stopped playing and went to bed.）

【確かめ】
① to play は「ゲームをするために止まった」の意味で、すでにゲームをしていた前半と合いません。③ play と ④ played は、stop のあとの形としては成り立ちません。

【よくあるまちがい】
stop to ～ と stop ～ing を同じ意味だと思いこむことです。「やめる」のは ing、「～するために止まる」のは to です。`,
    pitfall: "stop ～ing ＝ ～するのをやめる／stop to ～ ＝ ～するために立ち止まる。",
    memoryTip: "stop ～ing ＝ ～をやめる。stop to ～ ＝ ～するために止まる。",
  },
  {
    id: 'honshiken_2027_02_eigo_c20',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「The girl ______ under the tree is my sister.」",
    choices: ["① sit","② sits","③ sitting","④ sat"],
    answer: "③ sitting",
    hint: "この文の動詞はすでに is がある。the girl に「～している」と説明を足す形は？",
    explanation: `【何を聞かれているか】
「木の下にすわっている女の子は私の妹です」という文の、sit の形を選びます。

【なぜそうなるのか】
名詞（the girl）のあとに「～している」という説明を足すときは、動詞ing（現在分詞）を名詞のうしろに置きます。〈名詞 ＋ 動詞ing ＋ 場所など〉の形です。この文にはすでに主な動詞 is があり、1つの文に主な動詞は1つなので、sits や sat のような動詞をもうひとつ入れることはできません。

【ステップ1】
文全体の動詞は is です（The girl ... is my sister）。The girl under the tree 〜 が主語のまとまりです。

【ステップ2】
主語 the girl に「木の下にすわっている」という説明を足すので、動詞ing を後ろに置きます。sit は t を重ねて sitting になります。

【ステップ3】
The girl sitting under the tree is my sister. と読みます。「木の下にすわっている女の子は私の妹です」と日本語に合います。

【答え】
③ sitting（The girl sitting under the tree is my sister.）

【確かめ】
② sits や ④ sat を入れると、1つの文に動詞が2つ並んでしまい、形がくずれます。① sit は原形で、ここには入りません。

【よくあるまちがい】
girl が1人だからと、三単現の sits を選んでしまうことです。すでに動詞 is があるので、説明を足す形の ing にします。`,
    pitfall: "名詞 ＋ 動詞ing ＝ ～している名詞。1つの文に主な動詞は1つ。",
    memoryTip: "名詞 ＋ 動詞ing ＝ ～している（名詞）。sit は sitting（t を重ねる）。",
  },
  {
    id: 'honshiken_2027_02_eigo_c21',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の英文の①〜④のうち、まちがっている部分を1つ選びなさい。\n「I ① am ② looking forward ③ to ④ see you.」",
    choices: ["① am","② looking forward","③ to","④ see"],
    answer: "④ see",
    hint: "look forward to ～ の to は、to不定詞の to とはちがうよ。このあとにくる形を考えよう。",
    explanation: `【何を聞かれているか】
「あなたに会うのを楽しみにしています」という意味の英文で、まちがっている部分を選びます。

【なぜそうなるのか】
look forward to ～ は「～を楽しみに待つ」という熟語です。この to は、to不定詞の to ではなく、前置詞の to です。前置詞のあとには名詞か動名詞（動詞ing）が来るので、see you は seeing you になります。「楽しみにしているもの」を名詞のように言う必要があるからです。

【ステップ1】
文の意味は「あなたに会うのを楽しみにしています」です。I am looking forward to ～ の形になっています。

【ステップ2】
① am は am looking（進行形）の一部で正しいです。② looking forward ③ to も、熟語として正しい形です。

【ステップ3】
to は前置詞なので、あとの動詞は ing 形にします。④ see は seeing になおして、I am looking forward to seeing you. となります。

【答え】
④ see（正しくは I am looking forward to seeing you.）

【確かめ】
①〜③ はすべて正しい形です。前置詞のあとの動詞を ing 形にする例は、Thank you for ～ing や be good at ～ing などにも見られます。

【よくあるまちがい】
to のあとだから動詞の原形、と考えてしまうことです。look forward to の to は前置詞なので、あとは名詞か動詞ing です。`,
    pitfall: "look forward to ～ の to は前置詞。あとは名詞か動詞ing。",
    memoryTip: "look forward to ＋ 名詞／動詞ing。to のあとは ing。",
  },
  {
    id: 'honshiken_2027_02_eigo_c22',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「私は京都を2回、訪れたことがあります。」\n[ visited / have / Kyoto / I / twice ]",
    answer: "I have visited Kyoto twice.",
    hint: "「～したことがある」は have ＋ 過去分詞。「2回」を表す twice は文の最後に置くよ。",
    explanation: `【何を聞かれているか】
5つの語を並べかえて、「私は京都を2回、訪れたことがあります」という英文をつくります。

【なぜそうなるのか】
「～したことがある」（経験）は、現在完了形 have ＋ 過去分詞で表します。語順は「だれが（I）→ have ＋ 過去分詞（visited）→ 何を（Kyoto）→ 何回（twice）」です。回数を表す twice（2回）は、文の最後に置くのがふつうです。visit は規則動詞なので、過去分詞は visited です。

【ステップ1】
文の最初は大文字の I です。主語 I のあとに、have を置きます。

【ステップ2】
have のあとに過去分詞 visited、そのあとに「何を」にあたる Kyoto を続けます。I have visited Kyoto

【ステップ3】
最後に「2回」にあたる twice を置き、文の終わりにピリオドをつけます。I have visited Kyoto twice.

【答え】
I have visited Kyoto twice.

【確かめ】
5つの語をすべて使っています。最初は大文字の I、最後はピリオドです。「私は京都を2回、訪れたことがあります」と日本語に合い、have のあとが過去分詞 visited になっていることも確かめられます。

【よくあるまちがい】
日本語の順（京都を → 2回 → 訪れた）にそのまま並べてしまうことです。英語は「だれが → have ＋ 過去分詞 → 何を → 何回」の順です。`,
    pitfall: "have ＋ 過去分詞。twice（2回）は文の最後。",
    memoryTip: "経験 ＝ have ＋ 過去分詞。回数（twice など）は文の最後。",
  },
  {
    id: 'honshiken_2027_02_eigo_c23',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「その本は、多くの人々に読まれています。」\n[ read / is / by / The book / many people ]",
    answer: "The book is read by many people.",
    hint: "「読まれている」は受け身。be動詞 ＋ 過去分詞のあとに、「～によって」を表す by を置くよ。",
    explanation: `【何を聞かれているか】
5つの語（句）を並べかえて、「その本は、多くの人々に読まれています」という英文をつくります。

【なぜそうなるのか】
「～される」は、受け身（be動詞 ＋ 過去分詞）で表します。「だれによって」を示したいときは、文の最後に by ＋ 人 を加えます。語順は「主語（The book）→ is → read（過去分詞）→ by many people」です。read は read – read – read と形が変わらず、つづりは同じで、発音だけが過去分詞では「レッド」になります。

【ステップ1】
文の最初は大文字の The book です。これが「読まれる」側の主語です。

【ステップ2】
主語のあとに、受け身の形 is read を置きます。The book is read

【ステップ3】
最後に「多くの人々によって」にあたる by many people を置き、ピリオドをつけます。The book is read by many people.

【答え】
The book is read by many people.

【確かめ】
5つの語（句）をすべて使い、最初は大文字の The book、最後はピリオドです。「その本は多くの人々に読まれています」と日本語に合い、is のあとが過去分詞 read になっています。

【よくあるまちがい】
The book reads のように、能動の形にしてしまうことです。「読まれる」は be ＋ 過去分詞です。また、by は「～によって」の意味で、人の前に置きます。`,
    pitfall: "受け身 ＝ be ＋ 過去分詞。「～によって」は by。",
    memoryTip: "受け身 ＝ be ＋ 過去分詞 ＋ by 人。read – read – read（過去分詞の発音はレッド）。",
  },
  {
    id: 'honshiken_2027_02_eigo_c24',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語句を選びなさい。\n「I ______ Ken yesterday, but I haven't seen Mika for a week.」",
    choices: ["① saw","② have seen","③ see","④ had seen"],
    answer: "① saw",
    hint: "yesterday（昨日）のように、過去のはっきりした時を表す語があるときの時制を思い出そう。",
    explanation: `【何を聞かれているか】
「私は昨日ケンに会いましたが、ミカには1週間会っていません」という文の、前半の動詞の形を選びます。

【なぜそうなるのか】
yesterday（昨日）・last week・～ ago のように、過去のはっきりした時を表す語があるときは、現在完了ではなく過去形を使います。現在完了は「今とつながっていること」を表す形で、「昨日」のように今から切りはなされた1点とは、いっしょに使えません。後半の haven't seen は「今まで会っていない」という今までの話なので、現在完了で正しい形です。

【ステップ1】
前半には yesterday（昨日）があります。これは、過去のはっきりした1点を表す語です。

【ステップ2】
現在完了（have seen）は、yesterday・last week・～ ago などといっしょに使えません。そのため、過去形の saw を使います。

【ステップ3】
I saw Ken yesterday, but I haven't seen Mika for a week. と読みます。前半は過去形、後半は for a week（1週間）の現在完了です。

【答え】
① saw（I saw Ken yesterday, but I haven't seen Mika for a week.）

【確かめ】
後半の haven't seen Mika for a week は「今まで1週間会っていない」で、現在完了の継続的な使い方です。前半は過去の1点なので過去形、とそれぞれ理由があります。③ see は現在形、④ had seen は過去完了で、どちらも合いません。

【よくあるまちがい】
後半の現在完了につられて、前半も have seen にしてしまうことです。yesterday があれば、その部分は過去形です。`,
    pitfall: "yesterday・last ～・～ ago があるときは過去形。現在完了とは使えない。",
    memoryTip: "yesterday／last ～／～ ago ＝ 過去形。現在完了とは使えない。",
  },
  {
    id: 'honshiken_2027_02_eigo_c25',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: Have you finished your homework yet?\n B: Yes, I have ______ finished it.」",
    choices: ["① yet","② already","③ ever","④ since"],
    answer: "② already",
    hint: "B は「はい、もう終わりました」と答えているよ。肯定文で「もう」を表す語は？",
    explanation: `【何を聞かれているか】
「宿題はもう終わりましたか」「はい、もう終わりました」という会話の、空所に入る語を選びます。

【なぜそうなるのか】
現在完了の「完了」（もう～してしまった）では、already（すでに・もう）と yet を使い分けます。already は肯定文で使い、yet は疑問文（もう～しましたか）と否定文（まだ～していません）で使います。ever は「これまでに」の意味で、経験をたずねる疑問文に使い、since は「～から」と始まりの時を表します。

【ステップ1】
A の文は疑問文なので、「もう～しましたか」の yet が使われています。B は Yes, I have ～ と答えているので、肯定文です。

【ステップ2】
肯定文で「もう・すでに」を表す語は already です。yet は肯定文には使いません。ever や since は、「もう」という意味を持ちません。

【ステップ3】
Yes, I have already finished it. と読みます。「はい、もう終わりました」と、A の質問に合う返事になります。

【答え】
② already（Yes, I have already finished it.）

【確かめ】
A の文の yet は疑問文なので正しい使い方です。B の文は肯定文なので、already にします。already は Yes, I have finished it already. のように、文の最後に置くこともできます。

【よくあるまちがい】
A の文に yet があったので、B にも yet を入れてしまうことです。肯定文では already、疑問文・否定文では yet です。`,
    pitfall: "肯定文 → already、疑問文・否定文 → yet。",
    memoryTip: "already ＝ 肯定文（もう）、yet ＝ 疑問文・否定文（もう？／まだ）。",
  },
];
