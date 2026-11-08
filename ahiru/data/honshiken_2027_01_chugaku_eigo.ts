import type { Question } from './questions';

// 月例実力テスト 2027年1月号（中学受験・英語）担当A c01〜c25（文法・語い）
// 動く図解は data/figures-honshiken-2027-01-eigo-c1.ts（問題IDをキーにして結線される）。
export const honshiken202701ChugakuEigo: Question[] = [
  {
    id: 'honshiken_2027_01_eigo_c01',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「February is the ______ month of the year.」（2月は1年の2番目の月です。）",
    choices: ["① first", "② second", "③ two", "④ twice"],
    answer: "② second",
    hint: "「〜番目」と順番をいうときは、数（one・two）ではなく、順番の言い方を使うよ。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「2月は1年の2番目の月です」という文をつくります。

【なぜそうなるのか】
「1番目・2番目・3番目…」と順番を表す言い方を序数（じょすう）といい、the をつけて使います。one・two は数を表す語で、順番には使いません。1番目から3番目までは first・second・third という特別な形で、4番目からは four に th をつけた fourth のように作ります。

【ステップ1】
1年は January（1月）、February（2月）、March（3月）…の順です。February は2番目の月です。

【ステップ2】
「2番目」は序数で second です。two は「2つ」と数をいうだけで、「2番目」の意味にはなりません。

【ステップ3】
second を入れて、February is the second month of the year. と読みます。「2月は1年の2番目の月です」と日本語に合います。

【答え】
② second

【確かめ】
1月から数えると February は2番目なので second で合っています。① first は1番目で January のこと、③ two は数、④ twice は「2回」という回数の語で、the のあとに置いて「〜番目」の意味にはなりません。

【よくあるまちがい】
two を使って the two month としてしまうことです。順番は序数（first・second・third）、数は two・three と使い分けます。third（3番目）は three と形がちがうので注意しましょう。`,
    pitfall: "「〜番目」は序数。2番目は second（two ではない）。",
    memoryTip: "序数：first（1）・second（2）・third（3）・fourth（4）…。形が大きく変わるのは1〜3番目。",
  },
  {
    id: 'honshiken_2027_01_eigo_c02',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語を選びなさい。\n「The opposite of 'easy' is ______.」（easy の反対の意味の語は＿＿です。）",
    choices: ["① simple", "② quick", "③ difficult", "④ small"],
    answer: "③ difficult",
    hint: "easy は「かんたんな」。反対の意味（反意語〈はんいご〉）の語をえらぼう。",
    explanation: `【何を聞かれているか】
easy（かんたんな）と反対の意味の語を選びます。

【なぜそうなるのか】
反対の意味をもつ語をセットで覚えておくと、選択問題でも読解でも意味を取りちがえにくくなります。easy の反対は「むずかしい」の difficult です（hard も同じ意味）。simple（単純な）は easy に近い仲間の語で、反対ではありません。

【ステップ1】
easy は「かんたんな」という意味です。まず意味を日本語で確かめます。

【ステップ2】
「かんたん」の反対は「むずかしい」です。選択肢のなかで「むずかしい」を表す語は difficult です。

【ステップ3】
ほかの選択肢の意味も確かめます。simple は「単純な・かんたんな」で easy に近く、quick は「速い」、small は「小さい」で、反対の意味にはなりません。

【答え】
③ difficult

【確かめ】
The test is easy.（テストはかんたんです）の easy を difficult にすると The test is difficult.（テストはむずかしいです）となり、意味が反対になります。

【よくあるまちがい】
simple を選んでしまうことです。simple は easy の仲間（似た意味）で、反対ではありません。「似ている」と「反対」を区別しましょう。`,
    pitfall: "easy の反対は difficult（hard）。simple は easy に近い仲間の語。",
    memoryTip: "反対語セット：easy ⇔ difficult（hard）、early ⇔ late、cheap ⇔ expensive、open ⇔ close。",
  },
  {
    id: 'honshiken_2027_01_eigo_c03',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「______ late for school tomorrow.」（あした、学校におくれてはいけません。）",
    choices: ["① Not be", "② No be", "③ Don't be", "④ Be not"],
    answer: "③ Don't be",
    hint: "「〜してはいけません」と相手にいう文（命令文）の否定だよ。be動詞の命令文でも Don't を使う。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。「あした、学校におくれてはいけません」という禁止の文をつくります。

【なぜそうなるのか】
命令文は、主語をつけず動詞の原形（もとの形）で始めます。「〜してはいけない」と禁止するときは、Don't ＋ 動詞の原形にします。be動詞（am・are・is）の原形は be です。だから「おくれてはいけない」は Don't be late となります。

【ステップ1】
「おくれてはいけません」は、相手への禁止です。命令文にします。

【ステップ2】
禁止は Don't ＋ 動詞の原形。be動詞の原形は be なので Don't be の形になります。

【ステップ3】
Don't be late for school tomorrow. と読みます。「あした学校におくれてはいけません」と日本語に合います。

【答え】
③ Don't be

【確かめ】
② Not be・③ No be・④ Be not は、どれも禁止の命令文として正しい形ではありません。Don't be だけが正しい形です。

【よくあるまちがい】
Don't are や Don't is のように、am・are・is のまま使ってしまうことです。命令文では be動詞も必ず原形の be にします。`,
    pitfall: "禁止は Don't ＋ 原形。be動詞は Don't be。",
    memoryTip: "禁止：Don't ＋ 原形（Don't run. Don't be shy. Don't be late.）。",
  },
  {
    id: 'honshiken_2027_01_eigo_c04',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: ______ we go to the park after lunch?\n B: Yes, let's.」",
    choices: ["① Do", "② Are", "③ Shall", "④ Is"],
    answer: "③ Shall",
    hint: "Bの返事は Yes, let's.（そうしましょう）。さそう文には、どんな言い方があったかな。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。Aは「昼ごはんのあとで公園に行きましょうか」と相手をさそっています。

【なぜそうなるのか】
Shall we ～?「（いっしょに）〜しましょうか」は、相手をさそう決まった言い方で、返事は Yes, let's.（そうしましょう）や No, let's not.（やめておきましょう）です。Do we ～? は「私たちは〜しますか」と事実をたずねる文なので、返事は Yes, we do. になり、さそいの意味にはなりません。

【ステップ1】
Bの返事は Yes, let's. です。let's は「〜しましょう」で、さそいに答えるときの言葉ですから、Aの文はさそいの文のはずです。

【ステップ2】
「〜しましょうか」は Shall we ＋ 動詞の原形で表します。go は原形なので、そのまま続けられます。

【ステップ3】
Shall we go to the park after lunch? と読みます。「昼ごはんのあとで公園に行きましょうか」となり、返事とも合います。

【答え】
③ Shall

【確かめ】
Do we go ～? なら返事は Yes, we do. になります。Are・Is は go の前に置けません。Shall だけが Yes, let's. につながります。

【よくあるまちがい】
Let's と Shall we を重ねて Shall let's ～ としてしまうことです。さそいは Let's go. か Shall we go? のどちらか1つです。`,
    pitfall: "さそうときは Shall we ＋ 原形。返事は Yes, let's.",
    memoryTip: "さそう：Let's ～./Shall we ～? 返事：Yes, let's./OK./Sure.",
  },
  {
    id: 'honshiken_2027_01_eigo_c05',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「I went to the shop ______ some bread.」（私はパンを買うために店に行きました。）",
    choices: ["① buy", "② bought", "③ to buy", "④ buying"],
    answer: "③ to buy",
    hint: "「〜するために」と目的をいうときの形を思い出そう。went という動詞がすでにあるよ。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。「パンを買うために店に行きました」の、「買うために」にあたる部分です。

【なぜそうなるのか】
「〜するために」と目的を表すときは、to ＋ 動詞の原形（to不定詞）を使います。「何をしに店に行ったのか」を、あとから説明する働きです。went という動詞がすでに文にあるので、もう1つの動詞は to をつけて、形を変えない原形のまま置きます。

【ステップ1】
I went to the shop で「私は店に行きました」という文は完成しています。動詞 went がすでにあります。

【ステップ2】
「パンを買うために」は目的です。目的は to ＋ 動詞の原形で表すので、buy の前に to をつけます。

【ステップ3】
to buy を入れて、I went to the shop to buy some bread. と読みます。「パンを買うために店に行きました」となります。

【答え】
③ to buy

【確かめ】
① buy ② bought ④ buying は、went のあとに動詞が2つ並んでしまいます。目的の意味を表せるのは to buy だけです。

【よくあるまちがい】
「買うために」を for buy や for buying としてしまうことです。動詞で目的を表すときは to ＋ 原形で、for のあとには名詞（for lunch）が来ます。`,
    pitfall: "目的「〜するために」は to ＋ 動詞の原形。",
    memoryTip: "目的：to ＋ 原形（to buy・to see・to study）。",
  },
  {
    id: 'honshiken_2027_01_eigo_c06',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「Ken doesn't eat natto at all. He ______ eats natto.」（ケンはなっとうをまったく食べません。彼はなっとうを食べることが＿＿ありません。）",
    choices: ["① always", "② often", "③ never", "④ sometimes"],
    answer: "③ never",
    hint: "「どのくらいの回数か」を表す語（頻度）。「まったく〜ない」は、いちばん少ない回数だよ。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「まったく食べません」という意味に合う、回数を表す語です。

【なぜそうなるのか】
always（いつも）・usually（ふつう）・often（よく）・sometimes（ときどき）・never（けっして〜ない）は、「どのくらいの回数か」を表す語（頻度〈ひんど〉をあらわす副詞）です。回数の多い順に always → usually → often → sometimes → never と並びます。ふつう一般動詞の前に置きます。never は、それ自体に「〜ない」の意味があります。

【ステップ1】
1文目の doesn't eat natto at all は「なっとうをまったく食べない」です。回数はゼロです。

【ステップ2】
回数がゼロを表す語は never（けっして〜ない）です。always は100％、often は多い、sometimes は半分くらいの回数です。

【ステップ3】
never を入れて、He never eats natto. と読みます。eats の前に置くのが決まりです。

【答え】
③ never

【確かめ】
He never eats natto. は「彼はなっとうをけっして食べない」で、1文目の「まったく食べません」と同じ意味です。always・often・sometimes では、食べることになってしまい、1文目と矛盾します。

【よくあるまちがい】
never に not を重ねて He doesn't never eat と書くことです。never だけで「〜ない」の意味なので、doesn't は不要です。`,
    pitfall: "never は「けっして〜ない」。not といっしょに使わない。",
    memoryTip: "回数：always 100％ ＞ usually ＞ often ＞ sometimes ＞ never 0％。",
  },
  {
    id: 'honshiken_2027_01_eigo_c07',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な語を選びなさい。\n「A: Is this your bag?\n B: Yes, it's ______.」",
    choices: ["① my", "② me", "③ I", "④ mine"],
    answer: "④ mine",
    hint: "空所のあとに名詞（bag など）が続いていないね。名詞なしで「私のもの」と言える形はどれかな。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。Bは「はい、それは私のものです」と答えます。

【なぜそうなるのか】
「私の」は my で、あとに必ず名詞が必要です（my bag）。いっぽう「私のもの」は mine という1語で、「私のかばん」の意味までふくみます。名詞がうしろに続かないときは、mine・yours・his・hers のような「〜のもの」の形を使います。

【ステップ1】
空所のあとには何もありません。名詞を言わずに「私のもの」と言える語が入ります。

【ステップ2】
my はあとに名詞が必要で、me は「私を・私に」、I は「私は」の意味です。名詞なしで「私のもの」と言えるのは mine です。

【ステップ3】
mine を入れて、Yes, it's mine. と読みます。「はい、それは私のものです」となります。

【答え】
④ mine

【確かめ】
it's mine は it is my bag と同じ意味です。① my は名詞が続かないと文が終わらず、② me と③ I は「私のもの」の意味になりません。

【よくあるまちがい】
it's my と答えて、名詞を言わないまま終えてしまうことです。my のあとには必ず名詞が必要で、名詞を言わないなら mine を使います。`,
    pitfall: "名詞が続かないときは mine（私のもの）。my のあとには名詞が必要。",
    memoryTip: "my bag ＝ mine、your bag ＝ yours、his bag ＝ his、her bag ＝ hers。",
  },
  {
    id: 'honshiken_2027_01_eigo_c08',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「If it rains tomorrow, we ______ stay home.」（もしあした雨がふったら、私たちは家にいます。）",
    choices: ["① are", "② were", "③ have", "④ will"],
    answer: "④ will",
    hint: "if ～ は「もし〜なら」。その結果として、これから先のことを言う文だよ。stay は原形になっているね。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「もしあした雨がふったら、家にいます」という、未来のことをいう文です。

【なぜそうなるのか】
if ～（もし〜なら）の部分は、あしたのことでも rains と現在形で書きます。そして、その結果「家にいるつもりだ」という未来のことをいう後半に、will ＋ 動詞の原形を使います。will のあとの動詞は、s も ing もつけない原形です。

【ステップ1】
If it rains tomorrow は「もしあした雨がふったら」です。tomorrow（あした）のことですが、if のなかは rains と現在形になっています。

【ステップ2】
後半は「家にいる」という、これからの結果です。未来のことは、主語のあとに will ＋ 動詞の原形を置いて表します。

【ステップ3】
stay は原形なので、前には will が入ります。we will stay home. と読みます。

【答え】
④ will

【確かめ】
① are ② were ③ have は、あとに原形の stay をそのままつなげることができません。will だけが「〜するつもりだ」の意味で原形 stay につながります。

【よくあるまちがい】
if のなかまで will をつけて If it will rain としてしまうことです。「もし〜なら」の部分は、未来のことでも現在形で書きます。`,
    pitfall: "if のなかは現在形、結果の文に will ＋ 原形。",
    memoryTip: "If ＋ 主語 ＋ 現在形, 主語 ＋ will ＋ 原形.",
  },
  {
    id: 'honshiken_2027_01_eigo_c09',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「I'm ______ my key. I can't find it.」（私はかぎをさがしています。見つかりません。）",
    choices: ["① looking at", "② looking after", "③ looking like", "④ looking for"],
    answer: "④ looking for",
    hint: "「見つからない」ので、どうしているところかな。look のあとの小さな語で意味が変わるよ。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。「かぎをさがしています。見つかりません」という意味の文です。

【なぜそうなるのか】
look は、あとにつく小さな語（前置詞）で意味が変わります。look for ～ は「〜をさがす」、look at ～ は「〜を見る」、look after ～ は「〜の世話をする」、look like ～ は「〜に似ている」です。「見つからない」ので、さがしている最中だとわかります。

【ステップ1】
2文目に I can't find it.（見つかりません）とあります。かぎをさがしている場面です。

【ステップ2】
「〜をさがす」は look for ～ です。at・after・like では意味がちがいます。

【ステップ3】
I'm looking for my key. と読みます。I'm は I am の短い形で、am looking と進行形になっています。

【答え】
④ looking for

【確かめ】
① look at は「見る」なので、見つからないという2文目と合いません。② look after は「世話をする」、③ look like は「似ている」で、かぎに使うのはおかしな意味になります。

【よくあるまちがい】
look を「見る」だけで覚えて、looking at を選んでしまうことです。look のあとの語もセットで覚えましょう。`,
    pitfall: "look for ＝ さがす、look at ＝ 見る、look after ＝ 世話をする。",
    memoryTip: "look の仲間：look for（さがす）・look at（見る）・look after（世話をする）・look like（似ている）。",
  },
  {
    id: 'honshiken_2027_01_eigo_c10',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「私の父は毎朝、新聞を読みます。」\n[ reads / My / every / a newspaper / father / morning ]",
    answer: "My father reads a newspaper every morning.",
    hint: "英語の語順は「だれが → する → 何を → いつ」。「毎朝」は文の最後に置くよ。reads の s は父が1人だから。",
    explanation: `【何を聞かれているか】
6つの語（句）を並べかえて、「私の父は毎朝、新聞を読みます」という英文をつくります。

【なぜそうなるのか】
英語の文は、「だれが（主語）→ どうする（動詞）→ 何を（目的語）」の順に並べ、「いつ」を表す語（every morning など）は文の最後に置くのがふつうです。主語が father のような1人（3人称単数）で現在のことをいうときは、動詞に s をつけて reads にします。

【ステップ1】
文の最初は大文字の My です。「私の」のあとに名詞 father を続けて、主語 My father をつくります。

【ステップ2】
主語のあとに動詞 reads、そのあとに「何を」にあたる a newspaper を置きます。

【ステップ3】
最後に「毎朝」にあたる every morning を置きます。My father reads a newspaper every morning.

【答え】
My father reads a newspaper every morning.

【確かめ】
6つの語（句）をすべて使い、最初は大文字の My、最後はピリオドです。「私の父は毎朝新聞を読みます」と日本語に合っています。主語が father なので reads と s がついていることも合っています。

【よくあるまちがい】
日本語の順（毎朝 → 新聞を → 読む）にそのまま並べてしまうことです。英語は「だれが → する → 何を → いつ」の順です。また、reads の s を落とさないようにしましょう。`,
    pitfall: "英語の語順は「主語 → 動詞 → 何を → いつ」。every morning は文の最後。",
    memoryTip: "主語 ＋ 動詞 ＋ 目的語 ＋ 時（My father reads a newspaper every morning.）。",
  },
  {
    id: 'honshiken_2027_01_eigo_c11',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "次の英文を読んで、今、何時かを選びなさい。\nMika says, \"It is twenty to eight.\"",
    choices: ["① 7:20", "② 8:20", "③ 7:40", "④ 8:40"],
    answer: "③ 7:40",
    hint: "to は「〜前」の意味。twenty to eight は、8時の何分前かな。",
    explanation: `【何を聞かれているか】
Mika は It is twenty to eight. と言っています。それが何時何分にあたるかを選びます。

【なぜそうなるのか】
時刻の言い方では、○分 past ～ は「～時○分すぎ」、○分 to ～ は「～時まであと○分」という意味です。past は「すぎた」、to は「〜に向かって（あと〜）」と覚えます。だから twenty to eight は「8時まであと20分」、つまり7時40分です。

【ステップ1】
twenty は「20」、to は「〜前」、eight は「8」です。つまり「8時の20分前」という意味になります。

【ステップ2】
8時の20分前は、8時から20分もどった時刻です。8:00 − 20分 ＝ 7:40 です。

【ステップ3】
twenty to eight ＝ 7:40 です。8:20 と読みまちがえないように注意しましょう。

【答え】
③ 7:40

【確かめ】
7:40 から20分たつと8:00 になり、「8時まであと20分」と合います。8:20 は twenty past eight、8:40 は twenty to nine、7:20 は twenty past seven です。

【よくあるまちがい】
to を「すぎ」と取りちがえて8:20 を選んでしまうことです。past ＝ すぎ、to ＝ 前、と区別しましょう。`,
    pitfall: "○分 to 〜 ＝ 〜時の○分前。past は「すぎ」、to は「前」。",
    memoryTip: "past ＝ すぎ、to ＝ 前（ten past two ＝ 2:10、ten to two ＝ 1:50）。",
  },
  {
    id: 'honshiken_2027_01_eigo_c12',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "会話文の空所に入る最も適切な文を選びなさい。\n「A: How was your trip to Kyoto?\n B: ______」",
    choices: ["① It is by train.", "② Yes, I did.", "③ I will go there.", "④ It was great."],
    answer: "④ It was great.",
    hint: "How was ～? は「〜はどうでしたか」と、感想やようすをたずねる文だよ。",
    explanation: `【何を聞かれているか】
Aは「京都への旅行はどうでしたか」とたずねています。それに合う答えを選びます。

【なぜそうなるのか】
How was ～? は「〜はどうでしたか」と、ようすや感想をたずねる文です。すでに終わったことなので、答えも was を使って It was great.（すばらしかったです）のように感想をいいます。「どうやって」と手段をたずねる文は How did you go ～? で、これとは別です。

【ステップ1】
Aの文は How was your trip ～? です。was があるので、終わった旅行の感想をたずねています。

【ステップ2】
答えは、感想を言う文になります。It was ＋ great（すばらしい）・fun（楽しい）などの形です。

【ステップ3】
選択肢のなかで感想を言っているのは It was great. だけです。

【答え】
④ It was great.

【確かめ】
① It is by train.（電車です）は手段、② Yes, I did. は Yes・No でこたえる質問への返事、③ I will go there.（そこへ行くつもりです）は未来の話で、どれも「どうでしたか」の答えにはなりません。

【よくあるまちがい】
How を見て、「どうやって」の意味だと思い込み、It is by train. を選んでしまうことです。How was ～? は感想、How do you go ～? や How did you go ～? は手段です。`,
    pitfall: "How was ～? は感想をたずねる。答えは It was great./fun.",
    memoryTip: "How was ～? → It was great./It was fun./It was boring.",
  },
  {
    id: 'honshiken_2027_01_eigo_c13',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な語（句）を選びなさい。\n「A: ______ does it take to get to the station from your house?\n B: About ten minutes.」",
    choices: ["① How far", "② How often", "③ How many", "④ How long"],
    answer: "④ How long",
    hint: "Bは「約10分」と答えているね。かかる時間をたずねるときの言い方はどれかな。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。Aは「あなたの家から駅まで、どのくらいかかりますか」とたずねています。

【なぜそうなるのか】
How long ～? は、時間の長さをたずねる言い方で、How long does it take ～?「どのくらい（時間が）かかりますか」の形でよく使います。答えは It takes ～.（〜かかります）の形です。How far は距離、How often は回数、How many は数をたずねます。

【ステップ1】
Bの答えは About ten minutes.（約10分）です。「時間の長さ」で答えているので、Aは時間をたずねています。

【ステップ2】
時間の長さをたずねるのは How long です。How far は「どのくらい遠いか（きょり）」、How often は「どのくらいの回数か」、How many は「いくつか」をたずねます。

【ステップ3】
How long does it take to get to the station from your house? と読みます。take は「（時間が）かかる」の意味です。

【答え】
④ How long

【確かめ】
答えの ten minutes は時間の長さです。How far なら「2 kilometers」、How often なら「twice a week」、How many なら「three」のように答えるはずなので、合いません。

【よくあるまちがい】
How far と How long を取りちがえることです。「距離（遠さ）」は How far、「時間の長さ」は How long です。does it take があれば How long と覚えましょう。`,
    pitfall: "時間のかかり方は How long。距離は How far。",
    memoryTip: "How long ～ take？＝かかる時間／How far？＝きょり／How often？＝回数／How many？＝数。",
  },
  {
    id: 'honshiken_2027_01_eigo_c14',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "次の4つの語のうち、ほかの3つと仲間がちがう語を1つ選びなさい。",
    choices: ["① apple", "② carrot", "③ orange", "④ banana"],
    answer: "② carrot",
    hint: "4つとも食べ物だね。くだものと野菜に分けてみよう。",
    explanation: `【何を聞かれているか】
4つの語のうち、仲間がちがう語を選びます。

【なぜそうなるのか】
仲間分けの問題では、まず4つの語の意味を日本語にして、同じグループに入るものを探します。apple（りんご）・orange（オレンジ）・banana（バナナ）は果物（fruit〈フルーツ〉）、carrot（にんじん）は野菜（vegetable〈ベジタブル〉）です。

【ステップ1】
4つの語の意味を確かめます。apple はりんご、carrot はにんじん、orange はオレンジ、banana はバナナです。

【ステップ2】
くだものと野菜に分けます。りんご・オレンジ・バナナは木や草になる実で、くだものです。

【ステップ3】
carrot（にんじん）だけが野菜です。仲間がちがうのは carrot です。

【答え】
② carrot

【確かめ】
3つはデザートに食べられるくだもので、carrot だけが料理に使う野菜です。仲間分けでも、carrot だけが別グループになっています。

【よくあるまちがい】
4つとも「食べ物」だから全部同じ仲間だと思ってしまうことです。「くだもの」と「野菜」のように、もっと細かく分けて考えましょう。`,
    pitfall: "仲間分けは、意味を日本語にして細かく分ける。carrot は野菜。",
    memoryTip: "fruit：apple・orange・banana・grape／vegetable：carrot・potato・onion・tomato。",
  },
  {
    id: 'honshiken_2027_01_eigo_c15',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「I ______ this T-shirt at the shop last week.」（私は先週、その店でこのTシャツを買いました。）",
    choices: ["① buy", "② buys", "③ bought", "④ buying"],
    answer: "③ bought",
    hint: "last week（先週）は過去のこと。buy は、ed をつけるだけでは過去形にならない特別な動詞だよ。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「先週、Tシャツを買いました」という過去の文です。

【なぜそうなるのか】
last week（先週）・yesterday（きのう）などがあるときは、動詞を過去形にします。多くの動詞は ed をつけて過去形にしますが、buy のように、形がまったく変わる動詞があります（不規則動詞）。buy の過去形は bought です。これは暗記しておく必要があります。

【ステップ1】
last week（先週）があるので、過去の文です。動詞は過去形にします。

【ステップ2】
buy は ed をつけて buyed とはなりません。不規則に変わって bought になります。

【ステップ3】
bought を入れて、I bought this T-shirt at the shop last week. と読みます。

【答え】
③ bought

【確かめ】
buy・buys は現在の形、buying は ing形で、どれも last week（過去）と合いません。bought だけが過去形です。

【よくあるまちがい】
buyed と書いてしまうことです。不規則動詞は ed をつけません（buy → bought、go → went、see → saw）。`,
    pitfall: "buy の過去形は bought。ed をつけて buyed にしない。",
    memoryTip: "不規則動詞：buy → bought、see → saw、eat → ate、write → wrote、give → gave。",
  },
  {
    id: 'honshiken_2027_01_eigo_c16',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「I don't have ______ time today.」（私は今日、あまり時間がありません。）",
    choices: ["① many", "② much", "③ a few", "④ few"],
    answer: "② much",
    hint: "time（時間）は数えられない名詞。数えられない名詞には、どの「たくさん」を使うかな。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「あまり時間がありません」という否定の文です。

【なぜそうなるのか】
「たくさんの」は、数えられる名詞（複数形）には many、数えられない名詞には much を使います。time（時間）・water（水）・money（お金）は1つ、2つと数えられないので much を使います。much と many は、ふつう否定文や疑問文で使い、「あまり〜ない」「たくさん〜」の意味になります。

【ステップ1】
time（時間）は、1つ・2つと数えられない名詞です。

【ステップ2】
数えられない名詞には much を使います。many は数えられる名詞（books・students など）に使います。

【ステップ3】
much を入れて、I don't have much time today. と読みます。「あまり時間がない」という意味です。

【答え】
② much

【確かめ】
a few と few は数えられる名詞に使う語で、time には合いません。many も数えられる名詞用です。much だけが time に合います。

【よくあるまちがい】
「たくさん」を何にでも many と言ってしまうことです。数えられるなら many、数えられないなら much と使い分けます。`,
    pitfall: "数えられない名詞（time・water）には much。数えられる名詞には many。",
    memoryTip: "many ＋ 複数形（many books）／much ＋ 数えられない名詞（much water）。",
  },
  {
    id: 'honshiken_2027_01_eigo_c17',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    question: "空所に入る最も適切な語を選びなさい。\n「Ken's mother ______ a lot of books about cooking.」（ケンのお母さんは料理についての本をたくさん持っています。）",
    choices: ["① have", "② haves", "③ has", "④ having"],
    answer: "③ has",
    hint: "主語は Ken's mother（1人の女の人）。現在の文で、have の形が変わるよ。",
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「ケンのお母さんは本をたくさん持っています」という現在の文です。

【なぜそうなるのか】
主語が I・you 以外の1人（1つ）のとき（3人称単数）、現在の文では動詞の形が変わります。ふつうは s をつけますが、have だけは特別で has になります（haves とはなりません）。Ken's mother は「ケンのお母さん」という1人なので、has を使います。

【ステップ1】
主語は Ken's mother で、1人の人です（3人称単数）。文は現在のことをいっています。

【ステップ2】
現在の文で、主語が3人称単数のとき、動詞は形が変わります。have の形は特別で has になります。

【ステップ3】
has を入れて、Ken's mother has a lot of books about cooking. と読みます。

【答え】
③ has

【確かめ】
① have は I・you・複数の主語に使う形です。② haves という語はありません。④ having は ing形なので、単独では使えません。has だけが合います。

【よくあるまちがい】
3人称単数だから s をつけて haves と書いてしまうことです。have は特別で has です。ほかにも go → goes、study → studies のように変わる語があります。`,
    pitfall: "have の3人称単数・現在は has（haves ではない）。",
    memoryTip: "3人称単数・現在：have → has、go → goes、study → studies、watch → watches。",
  },
  {
    id: 'honshiken_2027_01_eigo_c18',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「My dream is ______ a pilot.」（私のゆめは、パイロットになることです。）",
    choices: ["① to be", "② be", "③ am", "④ is"],
    answer: "① to be",
    hint: "「〜すること」を表すとき、動詞の前につける小さな語は何だったかな。is はすでに文にあるね。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。「私のゆめは、パイロットになることです」という文です。

【なぜそうなるのか】
動詞の前に to をつけると、「〜すること」という意味のまとまり（to不定詞）になります。My dream is の is のあとに、「何か」を表す部分が必要で、それを to ＋ 動詞の原形で作ります。この文では「パイロットになること」なので、to be a pilot です。

【ステップ1】
My dream is で「私のゆめは〜です」という文が始まっています。is のあとに「ゆめの中身」が入ります。

【ステップ2】
「パイロットになること」は、動詞を使った内容です。「〜すること」は to ＋ 動詞の原形で表します。「なる」は be です。

【ステップ3】
to be を入れて、My dream is to be a pilot. と読みます。

【答え】
① to be

【確かめ】
② be のままでは「〜すること」の形になりません。③ am と ④ is は、すでにある is と動詞が2つ並んでしまいます。to be だけが「パイロットになること」にふさわしい形です。

【よくあるまちがい】
My dream is be a pilot. と、to を落としてしまうことです。「〜すること」を言いたいときは、必ず動詞の前に to をつけます。`,
    pitfall: "「〜すること」は to ＋ 動詞の原形。My dream is to be ～.",
    memoryTip: "夢をいう：My dream is to be a ～./I want to be a ～.",
  },
  {
    id: 'honshiken_2027_01_eigo_c19',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「I want something cold ______.」（私は何か冷たい飲み物がほしいです。）",
    choices: ["① drinking", "② drank", "③ drinks", "④ to drink"],
    answer: "④ to drink",
    hint: "something（何か）のあとに、「どんなことをするためのもの」かを説明する形が来るよ。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。「何か冷たい飲み物がほしい」の、「飲む（ための）」にあたる部分です。

【なぜそうなるのか】
something（何か）のあとに「to ＋ 動詞の原形」を置くと、「〜するための何か」という意味になります（something to drink ＝ 飲むための何か ＝ 飲み物）。cold のような「どんな」をいう語は something のすぐ後ろに置き、そのあとに to ＋ 動詞を続けるので、something cold to drink の順になります。

【ステップ1】
I want something cold で「冷たい何かがほしい」です。何に使うものかを、あとにつけ足します。

【ステップ2】
「飲むための」は to ＋ 動詞の原形で表します。「飲む」は drink なので to drink です。

【ステップ3】
to drink を入れて、I want something cold to drink. と読みます。「何か冷たい飲み物がほしい」となります。

【答え】
④ to drink

【確かめ】
drinking・drank・drinks は、want という動詞がすでにあるため、そのままつなげることができません。something のあとで「〜するための」を表せるのは to drink です。

【よくあるまちがい】
something to cold drink のように、順番をまちがえることです。something のすぐあとに cold などの語、そのあとに to ＋ 動詞を置きます。`,
    pitfall: "something ＋ 形の語 ＋ to ＋ 原形（something cold to drink）。",
    memoryTip: "something to eat（食べ物）、something hot to drink（温かい飲み物）。",
  },
  {
    id: 'honshiken_2027_01_eigo_c20',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "会話文の空所に入る最も適切な語（句）を選びなさい。\n「A: ______ do you go to the library?\n B: Twice a month.」",
    choices: ["① How long", "② How far", "③ How often", "④ How many"],
    answer: "③ How often",
    hint: "Bは「月に2回」と答えているね。回数をたずねるときの言い方はどれかな。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。Aは「どのくらいの回数（頻度）で図書館に行きますか」とたずねています。

【なぜそうなるのか】
How often ～? は、「どのくらいの回数・間かくで〜しますか」と頻度（ひんど）をたずねる言い方です。答えは once a week（週に1回）・twice a month（月に2回）・three times a day（1日に3回）のように、回数を言います。回数の言い方は once（1回）・twice（2回）・three times（3回）〜です。

【ステップ1】
Bの答えは Twice a month.（月に2回）です。回数で答えているので、Aは回数をたずねています。

【ステップ2】
回数をたずねるのは How often です。How long は時間の長さ、How far はきょり、How many は数をたずねます。

【ステップ3】
How often do you go to the library? と読みます。「どのくらいの回数で図書館に行きますか」となります。

【答え】
③ How often

【確かめ】
答えの twice a month は回数です。How long なら「10 minutes」、How far なら「2 kilometers」、How many なら「three」のように答えるので、合いません。

【よくあるまちがい】
How often と How many を混同することです。How many は「いくつ（数）」、How often は「何回（頻度）」です。three times は「3回」、three は「3つ」です。`,
    pitfall: "回数・頻度は How often。答えは once・twice・〜 times。",
    memoryTip: "1回 once・2回 twice・3回から three times。How often ～? → Twice a week.",
  },
  {
    id: 'honshiken_2027_01_eigo_c21',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の4つの英文のうち、文法的に正しいものを1つ選びなさい。",
    choices: ["① Tom don't play the guitar.", "② Does she likes dogs?", "③ I can't to swim.", "④ My brother doesn't have a bike."],
    answer: "④ My brother doesn't have a bike.",
    hint: "don't・doesn't・does・can't のあとの動詞の形に注目しよう。どの形になるのかな。",
    explanation: `【何を聞かれているか】
4つの英文のなかから、文法的にまちがいのない文を1つ選びます。

【なぜそうなるのか】
否定文や疑問文をつくる don't・doesn't・does、そして can't のあとの動詞は、s も to もつかない原形になります。主語が3人称単数のとき、否定文は doesn't ＋ 原形、疑問文は Does ＋ 主語 ＋ 原形です。動詞の s は、doesn't や does がすでに受け持つので、動詞には s をつけません。

【ステップ1】
① Tom don't play ～：主語 Tom は3人称単数なので、don't ではなく doesn't を使います。まちがいです。

【ステップ2】
② Does she likes ～?：Does のあとの動詞は原形です。likes ではなく like にします。③ I can't to swim：can't のあとには to をつけません。can't swim が正しい形です。

【ステップ3】
④ My brother doesn't have a bike.：主語は3人称単数で doesn't、あとの have は原形です。これだけが正しい文です。

【答え】
④ My brother doesn't have a bike.

【確かめ】
④の My brother doesn't have a bike.（兄（弟）は自転車を持っていません）は、doesn't のあとが原形 have で、文法のきまりに合っています。①〜③は、それぞれ don't・likes・to のところがまちがいです。

【よくあるまちがい】
doesn't や does のあとの動詞にも s をつけてしまうことです。s は doesn't・does が受け持つので、動詞は原形にします。`,
    pitfall: "doesn't・does・can't のあとの動詞は原形。s も to もつけない。",
    memoryTip: "Tom doesn't play ～./Does she like ～?/I can't swim.",
  },
  {
    id: 'honshiken_2027_01_eigo_c22',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の日本語に合うように、語（句）を並べかえて英文をつくりなさい。（文の最初の語は大文字で始めてあります。）\n「あなたはこの夏、どこへ行くつもりですか。」\n[ go / Where / are / this / you / to / summer / going ]",
    answer: "Where are you going to go this summer?",
    hint: "「どこへ」は文のいちばん最初。そのあとは「〜するつもりですか」の疑問文の形になるよ。",
    explanation: `【何を聞かれているか】
8つの語を並べかえて、「あなたはこの夏、どこへ行くつもりですか」という疑問文をつくります。

【なぜそうなるのか】
「〜するつもりです」は be going to ＋ 動詞の原形で表します。「どこへ」とたずねる疑問文では、Where を文の最初に置き、そのあとを疑問文の順（be動詞 → 主語 → going to ＋ 原形）にします。つまり Where ＋ are ＋ you ＋ going to ＋ go の順で、「いつ」を表す this summer は最後です。

【ステップ1】
文の最初は Where です。「どこへ」とたずねる語は、疑問文では文のいちばん最初に置きます。

【ステップ2】
Where のあとは、疑問文の順にします。be動詞 are、主語 you、そして going to ＋ 動詞の原形 go を続けます。Where are you going to go

【ステップ3】
最後に「この夏」にあたる this summer を置き、文の終わりに ? をつけます。Where are you going to go this summer?

【答え】
Where are you going to go this summer?

【確かめ】
8つの語をすべて使っています。最初は大文字の Where、最後はクエスチョンマークです。「あなたはこの夏どこへ行くつもりですか」と日本語に合い、are のあとに主語 you が来る疑問文の順にもなっています。

【よくあるまちがい】
you are going のように、ふつうの文の順にそのまま並べてしまうことです。疑問文では be動詞 are を主語 you の前に出します。また、going to go の to のあとは原形 go です。`,
    pitfall: "Where ＋ be動詞 ＋ 主語 ＋ going to ＋ 原形。疑問文では be動詞が前に出る。",
    memoryTip: "予定をたずねる：Where are you going to go? / What are you going to do?",
  },
  {
    id: 'honshiken_2027_01_eigo_c23',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語（句）を選びなさい。\n「You ______ get up early tomorrow. It is a holiday.」（あしたは早く起きる必要はありません。休日です。）",
    choices: ["① must", "② have to", "③ must not", "④ don't have to"],
    answer: "④ don't have to",
    hint: "2文目の It is a holiday.（休日です）から、早く起きることがどうなのかを考えよう。",
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。「あしたは休日なので、早く起きる必要はありません」という意味にします。

【なぜそうなるのか】
have to は「〜しなければならない」、その否定の don't have to は「〜する必要はない」という意味です。must not は「〜してはいけない」という強い禁止で、意味がまったくちがいます。「しなくてもよい」と「してはいけない」を取りちがえないことが大切です。

【ステップ1】
2文目の It is a holiday.（休日です）から、早く起きなくてもよいことがわかります。

【ステップ2】
「〜する必要はない」は don't have to ＋ 動詞の原形です。must と have to は「〜しなければならない」で、意味が反対になります。

【ステップ3】
don't have to を入れて、You don't have to get up early tomorrow. と読みます。

【答え】
④ don't have to

【確かめ】
① must と ② have to は「早く起きなければならない」、③ must not は「早く起きてはいけない」です。どれも「休日だから」という理由と合いません。don't have to だけが「起きる必要はない」で、つながります。

【よくあるまちがい】
don't have to を must not と同じ意味だと思ってしまうことです。don't have to は「しなくてもよい」、must not は「してはいけない」で、まったくちがう意味です。`,
    pitfall: "don't have to ＝ しなくてよい。must not ＝ してはいけない。",
    memoryTip: "have to ＝ しなければならない／don't have to ＝ しなくてよい／must not ＝ してはいけない。",
  },
  {
    id: 'honshiken_2027_01_eigo_c24',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "空所に入る最も適切な語を選びなさい。\n「Aya sings very ______. She is a great singer.」（アヤはとても上手に歌います。彼女はすばらしい歌手です。）",
    choices: ["① good", "② best", "③ well", "④ better"],
    answer: "③ well",
    hint: "sings（歌う）という動詞を説明する語を入れるよ。どう歌うのか、を表す語はどれかな。",
    explanation: `【何を聞かれているか】
空所に入る語を選びます。「とても上手に歌います」の、「上手に」にあたる語です。

【なぜそうなるのか】
動詞（どうする）を説明する語は、副詞です。good は「よい」という形容詞で、名詞（a good singer）や be動詞のあと（She is good.）で使います。動詞 sings を説明して「上手に」というときは、副詞の well を使います。good と well は、使う場所がちがいます。

【ステップ1】
空所の前の sings は「歌う」という動詞です。「どのように歌うか」を説明する語が入ります。

【ステップ2】
動詞を説明するのは副詞です。good は形容詞なので、動詞 sings を説明できません。「上手に」の副詞は well です。

【ステップ3】
well を入れて、Aya sings very well. と読みます。very は「とても」で、well を強めています。

【答え】
③ well

【確かめ】
② best と ④ better は good や well を変えた形（最上級・比較級）で、「とても」の very のあとには使えません。① good は形容詞なので sings に合いません。well だけが動詞 sings を説明できます。

【よくあるまちがい】
good と well を取りちがえることです。名詞を説明するなら good（a good singer）、動詞を説明するなら well（sings well）。`,
    pitfall: "動詞を説明するのは well。good は名詞や be動詞のあとで使う。",
    memoryTip: "She is a good singer. ＝ She sings well.（good → 名詞に、well → 動詞に）",
  },
  {
    id: 'honshiken_2027_01_eigo_c25',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    question: "次の会話が自然な流れになるように、①〜③を並べかえたものを選びなさい。\nA: Hi, Ken.\nB: Hi, Mika.\nA: ［　1　］\nB: ［　2　］\nA: ［　3　］\n① Yes, I do. I play it every Sunday.\n② Do you like tennis?\n③ Great! Let's play together next Sunday.",
    choices: ["① ① → ② → ③", "② ② → ③ → ①", "③ ③ → ② → ①", "④ ② → ① → ③"],
    answer: "④ ② → ① → ③",
    hint: "「たずねる文」と「答える文」の組を見つけよう。さそいの文は、話がもり上がったあとに来るよ。",
    explanation: `【何を聞かれているか】
3つの文を並べかえて、AとBの自然な会話にします。

【なぜそうなるのか】
会話の順番は、「たずねる文 → 答える文 → それに反応する文」の流れで考えます。② Do you like tennis? は質問で、① Yes, I do. は、その質問に Yes で答える文です。③ Great! Let's play together ～. は、相手の答えを受けて「いっしょにやろう」とさそう文なので、いちばん最後です。

【ステップ1】
あいさつのあと、Aが話題を出します。② Do you like tennis?（テニスは好きですか）が、話題を切り出す質問です。

【ステップ2】
Bは、その質問に答えます。Do you ～? にこたえる Yes, I do. で始まる ① が2番目です。

【ステップ3】
最後に、Bの答え（毎週日曜日にする）を受けて、Aが ③ Great! Let's play together ～. とさそいます。順番は ② → ① → ③ です。

【答え】
④ ② → ① → ③

【確かめ】
A: Do you like tennis? B: Yes, I do. I play it every Sunday. A: Great! Let's play together next Sunday. と通して読むと、質問・答え・さそいと自然につながります。

【よくあるまちがい】
さそいの ③ を先に置いてしまうことです。Let's ～ は相手の気持ちや答えを聞いたあとに言うのが自然です。Yes, I do. は質問の直後です。`,
    pitfall: "質問 → 答え（Yes, I do.）→ それを受けたさそい（Let's ～）の順。",
    memoryTip: "会話並べかえは「質問と答えの組」を先に見つけ、さそいは最後に置く。",
  },
];
