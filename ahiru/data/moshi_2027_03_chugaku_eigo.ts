import type { Question } from './questions';

// 月例実力テスト 2026年3月号（中学受験・英語）
// 小6〜中学入門レベル。be動詞・一般動詞（三単現）・can・疑問詞・過去形・進行形・比較（中1〜中2前半相当）まで。
// 動く図解は data/figures-moshi-2027-03-eigo.ts（問題IDをキーにして結線される）。
export const moshi202703ChugakuEigo: Question[] = [
  // ============================================================
  // 基礎: 4問
  // ============================================================
  {
    id: 'moshi_2027_03_eigo_c01',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: '空所に入る最も適切な語を選びなさい。\n「Ken and Mike ______ good friends.」',
    choices: ['① am', '② is', '③ are', '④ be'],
    answer: '③ are',
    hint: '主語は「ケンとマイク」の何人分かな？ 2人以上のときに使うbe動詞を思い出そう。',
    explanation: `【何を聞かれているか】
空所に入る be動詞（「〜です」を表す言葉）を選ぶ問題です。「ケンとマイクはよい友だちです」という文をつくります。

【なぜそうなるのか】
be動詞は、主語（しゅご＝文の「だれが・何が」にあたる語）によって形が変わります。I のときは am、he・she・it や1人・1つのときは is、you や2人以上（複数）のときは are を使います。英語では、主語が「1つか、いくつか」を be動詞の形でも知らせるきまりになっているためです。

【ステップ1】主語を見つける
主語は「Ken and Mike」です。

【ステップ2】何人かを数える
Ken（1人）と Mike（1人）を and でつないでいるので、あわせて2人です。2人以上は複数です。

【ステップ3】be動詞を決める
複数の主語は they（彼ら）と言いかえられます。they のときの be動詞は are です。

【答え】
③ are（Ken and Mike are good friends.）

【確かめ】
「ケンとマイクはよい友だちです」となり、自然な文です。is にすると1人用の形なので、2人の主語に合いません。am は I 専用、be は原形なので、ここでは使えません。

【よくあるまちがい】
Mike のすぐ前後だけを見て、1人だと思って is を選んでしまうことです。and でつないだ主語は、全部あわせた人数で考えます。`,
    pitfall: '「Mike」だけを見て is を選ばない。and でつないだ2人は複数なので are を使う。',
    memoryTip: 'A and B ＝ 複数 ＝ are。they に言いかえてから be動詞を決めよう。',
  },
  {
    id: 'moshi_2027_03_eigo_c02',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: '空所に入る最も適切な語（句）を選びなさい。\n「My father ______ to work by bike every day.」',
    choices: ['① go', '② goes', '③ going', '④ is go'],
    answer: '② goes',
    hint: 'every day は「毎日」。主語 My father は、he と言いかえられる1人の人だよ。',
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「私の父は毎日、自転車で仕事に行きます」という文です。

【なぜそうなるのか】
every day（毎日）は、いつもしている習慣を表す言葉なので、現在形の文です。主語 My father は「1人の男の人」で、he と言いかえられる三人称単数（さんにんしょう・たんすう）です。三人称単数の主語のときは、現在形の動詞に s か es をつけるきまりがあります（三単現〈さんたんげん〉の s）。これは、主語が「自分と相手以外の1人」であることを動詞の形でも知らせるためです。go は o で終わる動詞なので es をつけて goes になります。

【ステップ1】主語を見る
My father ＝ he と同じ、1人の男の人です。

【ステップ2】時を見る
every day があるので、いつもの習慣＝現在形です。

【ステップ3】動詞の形を決める
go に es をつけて goes にします。

【答え】
② goes（My father goes to work by bike every day.）

【確かめ】
「私の父は毎日、自転車で仕事に行く」という意味になり、自然です。① go は s が足りず、主語が1人なのに合いません。③ going は ing だけで、be動詞（is など）が無いので動詞として足りません。④ is go は be動詞と一般動詞をいっしょに使うことになり、英語ではまちがいです。

【よくあるまちがい】
主語が1人なのに go のままにしてしまうことです。s のつけかたは、ふつうは s、o・s・x・ch・sh で終わる語は es（goes・watches）、子音字＋y は y を i に変えて es（studies）です。`,
    pitfall: '主語が1人（he・she・it と同じ）のときは、動詞に s か es をつける。go は goes。',
    memoryTip: '1人の主語＋現在形 → 動詞に s・es。go → goes、watch → watches、study → studies。',
  },
  {
    id: 'moshi_2027_03_eigo_c03',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: '次の英文の意味として最も適切なものを選びなさい。\n「I can play the piano.」',
    choices: [
      '① 私はピアノをひくことができます。',
      '② 私はピアノをひきたいです。',
      '③ 私はピアノをひいています。',
      '④ 私はピアノをひきました。',
    ],
    answer: '① 私はピアノをひくことができます。',
    hint: 'can のあとに動詞が続く形に注目しよう。can はどんな意味を足す言葉かな？',
    explanation: `【何を聞かれているか】
英文「I can play the piano.」の意味を日本語から選ぶ問題です。

【なぜそうなるのか】
can は、動詞の前に置いて「〜できる」という意味を足す言葉（助動詞〈じょどうし〉）です。can のあとの動詞は、いつも原形（play のような、何もつかない形）を使います。can が動詞に「できる」という力の意味を足す役目をしているので、play 自体は形を変えません。

【ステップ1】文の形を見る
I（私は）＋ can（できる）＋ play（ひく）＋ the piano（ピアノを）。

【ステップ2】それぞれの意味を日本語にする
「私は ピアノを ひく ことが できる」となります。

【ステップ3】ほかの選択肢と見くらべる
「ひきたい」は want to play、「ひいている」は am playing、「ひきました」は played と書きます。この文にはそのどれもありません。

【答え】
① 私はピアノをひくことができます。

【確かめ】
can ＋ play の形を日本語にすると「ひくことができる」で、① と同じです。

【よくあるまちがい】
can を「〜できた」（過去）と読んでしまうことです。can は「いまできる」です。過去の「できた」は could という別の形になります。`,
    pitfall: 'can は「いまできる」。「ひきたい」「ひいている」「ひいた」と混ぜて読まない。',
    memoryTip: 'can ＋ 動詞の原形 ＝ 「〜できる」。',
  },
  {
    id: 'moshi_2027_03_eigo_c04',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: '会話文の空所に入る最も適切な語を選びなさい。\n「A: ______ do you live?\n B: I live in Osaka.」',
    choices: ['① Who', '② What', '③ When', '④ Where'],
    answer: '④ Where',
    hint: 'B の答えは「大阪に」。何についての答えになっているかな？',
    explanation: `【何を聞かれているか】
A の質問に入る、疑問詞（ぎもんし＝たずねる言葉）を選びます。

【なぜそうなるのか】
疑問詞は、たずねたい内容によって使い分けます。Who は「だれ」、What は「何」、When は「いつ」、Where は「どこ」です。質問の言葉は、返ってくる答えの種類と必ずつながっているので、まず答えが何を言っているかを見れば、疑問詞が決まります。

【ステップ1】答えを見る
B は「I live in Osaka.」と答えています。in Osaka は「大阪に」で、場所を表しています。

【ステップ2】疑問詞を決める
場所をたずねる疑問詞は Where（どこ）です。

【ステップ3】文の形を見る
Where ＋ do ＋ you ＋ live? の形で、「あなたはどこに住んでいますか」となります。

【答え】
④ Where

【確かめ】
「どこに住んでいますか。」「大阪に住んでいます。」と、問いと答えがつながります。Who なら人の名前、What ならもの、When なら時（いつ）が答えになるので、合いません。

【よくあるまちがい】
When（いつ）と Where（どこ）は、どちらも w で始まって形がにています。答えが「時」なら When、「場所」なら Where と、答えのほうから決めましょう。`,
    pitfall: 'When（いつ）と Where（どこ）をまちがえやすい。答えが場所か時かで決める。',
    memoryTip: 'Who＝だれ、What＝何、When＝いつ、Where＝どこ。答えの種類で選ぶ。',
  },

  // ============================================================
  // 標準: 4問
  // ============================================================
  {
    id: 'moshi_2027_03_eigo_c05',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question:
      '次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「あなたは先週の日曜日に何をしましたか。」\n[ did / you / What / last Sunday / do ]',
    answer: 'What did you do last Sunday?',
    hint: '「何を」とたずねる言葉は文のいちばん前。did のあとの動詞は、どんな形になるかな？',
    explanation: `【何を聞かれているか】
5つの語（句）をならべかえて、「あなたは先週の日曜日に何をしましたか」という過去の疑問文をつくります。

【なぜそうなるのか】
「何を」とたずねる疑問詞 What は、文のいちばん前に置きます。つぎに、過去の疑問文の形「did ＋ 主語 ＋ 動詞の原形」を続けます。did の中にすでに「過去」の意味が入っているため、あとの動詞は過去形にせず原形（do）にします。過去を2回言わないためです。時を表す last Sunday は、文の終わりに置きます。

【ステップ1】疑問詞を先頭に
What を文の最初に置きます。

【ステップ2】過去の疑問文の形を作る
What の次に did、その次に主語 you、そのあとに動詞の原形 do を置きます。What did you do

【ステップ3】時を表す語を最後に
last Sunday（先週の日曜日）を文末に置きます。

【答え】
What did you do last Sunday?

【確かめ】
5つの語（句）をすべて使っています。文頭の What は大文字、文末は「？」です。did のあとの do は原形です。答えるときは「I played soccer.」のように、過去形で答えます。

【よくあるまちがい】
did のあとの動詞を過去形にして、What did you did と書いてしまうことです。did がある文では、動詞は原形に戻します。`,
    pitfall: 'did がある疑問文では、動詞は原形（do）。did you did のように過去を2回言わない。',
    memoryTip: '疑問詞 ＋ did ＋ 主語 ＋ 動詞の原形。',
  },
  {
    id: 'moshi_2027_03_eigo_c06',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: '会話文の空所に入る最も適切な語（句）を選びなさい。\n「A: What is Aya doing now?\n B: She ______ a book in her room.」',
    choices: ['① reads', '② is reading', '③ read', '④ was reading'],
    answer: '② is reading',
    hint: 'A の質問の is doing と now に注目しよう。「いま、している最中」を表す形は？',
    explanation: `【何を聞かれているか】
B の答えの文に入る動詞の形を選びます。「アヤはいま何をしていますか。」「彼女は自分の部屋で本を読んでいます。」という会話です。

【なぜそうなるのか】
「いま〜している」という、その場で進んでいる動作は、現在進行形「be動詞 ＋ 動詞の ing 形」で表します。ing が「進んでいる最中」を表し、be動詞が「いまの話」であることと、主語が何人かを表します。A の質問が is doing（している）と now（いま）を使っているので、答えも同じ形にそろえます。

【ステップ1】質問の形を見る
What is Aya doing now? は現在進行形の疑問文です。

【ステップ2】主語に合う be動詞を決める
主語 She は1人なので is です。

【ステップ3】動詞を ing 形にする
read に ing をつけて reading にします。She is reading a book.

【答え】
② is reading

【確かめ】
「彼女は本を読んでいる最中」で、質問の「いま何をしていますか」に合います。① reads は「ふだん読む」という習慣です。③ read は過去形で「読んだ」になります。④ was reading は「読んでいた」で、過去の話になり now と合いません。

【よくあるまちがい】
reads を選んでしまうことです。now（いま）という言葉があるときは、「いま、している最中」の is reading を使います。`,
    pitfall: 'now（いま）があるときは、ふだんの習慣（reads）ではなく、している最中（is reading）。',
    memoryTip: 'be動詞（am・is・are）＋動詞の ing ＝「〜している」。',
  },
  {
    id: 'moshi_2027_03_eigo_c07',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    passage: `[会話を読んで答えなさい]
Mika: What time do you get up, Ken?
Ken: I get up at six thirty. How about you?
Mika: I get up at seven. Then I walk to school with my sister.`,
    question: 'ミカは何時に起きますか。正しいものを選びなさい。',
    choices: ['① 6時', '② 6時30分', '③ 7時', '④ 7時30分'],
    answer: '③ 7時',
    hint: 'ミカ（Mika）自身が言ったことばを探そう。ケン（Ken）の答えと取りちがえないように。',
    explanation: `【何を聞かれているか】
会話を読んで、ミカが起きる時刻を選ぶ問題です。

【なぜそうなるのか】
会話文では、だれが何を言ったかをはっきり分けて読むことが大切です。名前（Mika・Ken）が行のはじめに書いてあるので、そこを手がかりにします。数字がいくつも出てくるときほど、発言した人を取りちがえやすくなります。

【ステップ1】ミカの質問を見る
ミカは「何時に起きるの？」とケンにたずねています。

【ステップ2】ケンの答えを見る
ケンは「I get up at six thirty.（6時30分に起きる）」と答えています。これはケンの時刻です。

【ステップ3】ミカ自身の答えを見る
ケンの「あなたは？（How about you?）」に、ミカは「I get up at seven.」と答えています。seven は7です。

【答え】
③ 7時

【確かめ】
「Then I walk to school with my sister.（そのあと妹と歩いて学校へ行く）」は起きたあとの話で、時刻とは関係ありません。6時30分はケンの時刻なので ② は合いません。

【よくあるまちがい】
最初に出てきた数字（six thirty）を、ミカの答えだと思ってしまうことです。How about you? はケンがミカにたずね返した言葉なので、そのあとのミカの発言を読みます。`,
    pitfall: '最初に出てくる six thirty はケンの時刻。ミカの発言（I get up at seven.）を読む。',
    memoryTip: '会話文は「だれの発言か」に印をつけて読む。How about you? は「あなたは？」。',
  },
  {
    id: 'moshi_2027_03_eigo_c08',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: '空所に入る最も適切な語を選びなさい。\n「In my class, soccer is ______ popular than baseball.」',
    choices: ['① more', '② most', '③ much', '④ as'],
    answer: '① more',
    hint: 'than があるので、2つをくらべる文だね。popular のような長い語の比較級はどう作るかな？',
    explanation: `【何を聞かれているか】
「私のクラスでは、サッカーは野球より人気があります」という文の、空所に入る語を選びます。

【なぜそうなるのか】
than（〜より）があるときは、2つのものをくらべる文なので、形容詞を比較級（ひかくきゅう）にします。比較級の作り方は2通りです。tall → taller のような短い語は er をつけます。popular のような長い語（音のかたまりが3つ以上）は、er をつけると言いにくくなるので、前に more を置いて more popular とします。

【ステップ1】than に気づく
than があるので、サッカーと野球の2つをくらべる文です。

【ステップ2】語の長さを見る
popular は pop・u・lar と3つの音に分かれる長い語です。

【ステップ3】more をつける
長い語は「more ＋ 元の形」にします。more popular than 〜 で「〜より人気がある」となります。

【答え】
① more

【確かめ】
soccer is more popular than baseball で、「サッカーは野球より人気がある」と自然な意味になります。② most は「いちばん」の形（最上級）で、the がつくのがふつうです。③ much は popular を強める語で、比較級のかわりにはなりません。④ as は as popular as の形のときに使います。

【よくあるまちがい】
popularer のように、長い語に er をつけてしまうことです。長い語は more を前に置きます。`,
    pitfall: '長い語（popular など）に er をつけない。more ＋ 元の形 ＋ than にする。',
    memoryTip: '短い語は er、長い語は more。どちらも than とセット。',
  },

  // ============================================================
  // 応用: 2問
  // ============================================================
  {
    id: 'moshi_2027_03_eigo_c09',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: '次の英文の意味として最も適切なものを選びなさい。\n「When I called Yuki, she was taking a bath.」',
    choices: [
      '① 私がユキに電話したとき、彼女はおふろに入っていました。',
      '② ユキが私に電話したとき、私はおふろに入っていました。',
      '③ 私がユキに電話したとき、彼女はおふろに入りました。',
      '④ 私が電話すると、ユキはおふろに入るところでした。',
    ],
    answer: '① 私がユキに電話したとき、彼女はおふろに入っていました。',
    hint: '「だれがだれに電話した」のか、そして was taking は「過去のどんな動作」かを分けて読もう。',
    explanation: `【何を聞かれているか】
英文を、主語や時の形を正しく読んで、日本語にした文を選ぶ問題です。

【なぜそうなるのか】
When ～, … は「～したとき、…」という意味です。When のあとの called は過去形で「電話した」。コンマのあとの was taking は過去進行形（was ＋ ing）で、「過去のその時、している最中だった」を表します。英語は動詞の形で、「電話した」という一瞬の出来事と、「おふろに入っていた」という続いている動作とを区別します。

【ステップ1】前半を読む
When I called Yuki は「私がユキに電話したとき」。I が電話をかけた人、Yuki が相手です。

【ステップ2】後半の主語を読む
she は Yuki のことです。つまり、おふろに入っていたのはユキです。

【ステップ3】後半の動詞の形を読む
was taking a bath は「おふろに入っていた」。was ＋ ing なので、入った瞬間ではなく、入っている最中です。

【答え】
① 私がユキに電話したとき、彼女はおふろに入っていました。

【確かめ】
「私が電話した → そのときユキは入浴中だった」という流れで、英文と合います。② は電話をかけた人が逆です。③ は「入りました」と動作が終わった意味になり、was taking の最中の意味が出ません。④ は「入るところ」で、これから入る意味になり、ing とは合いません。

【よくあるまちがい】
I called Yuki の I と she を同じ人だと思ってしまうことです。I は電話をかけた人、she はユキです。`,
    pitfall: 'was ＋ ing は「している最中」。「した」「するところ」とは別。I と she も取りちがえない。',
    memoryTip: 'When ～（過去形）, 主語 was・were ＋ ing ＝「～したとき、…していた」。',
  },
  {
    id: 'moshi_2027_03_eigo_c10',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question:
      '次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「あなたは京都にどのくらいの間いましたか。」\n[ did / stay / How / in Kyoto / long / you ]',
    answer: 'How long did you stay in Kyoto?',
    hint: '「どのくらい長く」は2語で1セット。そのあとに、過去の疑問文の形が続くよ。',
    explanation: `【何を聞かれているか】
6つの語（句）をならべかえて、「あなたは京都にどのくらいの間いましたか」という文をつくります。

【なぜそうなるのか】
「どのくらいの間」と期間をたずねるときは、How long という2語で1つの疑問詞のようにはたらきます。How は「どれくらい」、long は「長く」で、あわせて「どれくらい長く」の意味です。疑問詞のかたまりは文の先頭に置き、そのあとに過去の疑問文の形「did ＋ 主語 ＋ 動詞の原形」を続けます。did に過去の意味が入っているので、stay は stayed にせず原形のままです。

【ステップ1】疑問詞のかたまりを先頭に
How long を文のいちばん前に置きます。

【ステップ2】過去の疑問文の形を続ける
did ＋ you ＋ stay の順に並べます。How long did you stay

【ステップ3】場所を最後に置く
in Kyoto（京都に）を文末に置きます。

【答え】
How long did you stay in Kyoto?

【確かめ】
6つの語（句）をすべて使っています。答えるときは「I stayed in Kyoto for three days.（3日間いました）」のように for ＋ 期間で答えるので、期間をたずねる How long に合います。

【よくあるまちがい】
How と long を離して、How did you stay long と並べてしまうことです。How long はいつもくっついて1セットです。How many（数）・How old（年れい）・How much（ねだん）も同じ形です。`,
    pitfall: 'How long は2語で1セット。離さない。did のあとの stay は原形。',
    memoryTip: 'How long ＋ did ＋ 主語 ＋ 動詞の原形 ＝「どのくらい〜しましたか」。',
  },
];
