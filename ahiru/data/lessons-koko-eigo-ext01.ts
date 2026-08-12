import type { Lesson } from './lesson-types';

// 高校受験 英語「発音・アクセント・語形変化・語彙」拡張ユニット（35セッション：koko_eigo_s001〜koko_eigo_s035）
// order は 501〜535。
// 構成：発音とつづりの関係(5)／アクセントの位置(4)／-s・-ed の発音(3)／
//       複数形・三単現・-ing のつづり変化(4)／不規則動詞の3変化(6)／
//       派生語・接頭辞接尾辞(5)／同意語・反意語(4)／まぎらわしい語の使い分け(4)
// 英語は図解が馴染みにくい教科なので、分類の内訳・アクセントの位置・程度の強さなど
// 図にすることで本当に理解が進む箇所にだけ付けてある（35課中15課）。
export const kokoEigoExt01Lessons: Lesson[] = [
  // ───────────────── 1. 発音とつづりの関係（s001〜s005） ─────────────────
  {
    id: 'koko_eigo_s001',
    subject: 'eigo',
    examType: 'koko',
    title: '発音とつづり①：母音字の短い音と長い音',
    description: 'cap と cape のように、語尾の e が母音字の読み方を変えるしくみをつかむ',
    intro: 'cap は「キャップ」、cape は「ケイプ」。うしろに e を一つ足しただけで、真ん中の a の読み方まで変わってしまいます。この e 自体は読まないのに、なぜ前の母音の音を変えるのでしょう。ここを知ると、初めて見る単語でも読み方をかなり正確に予想できるようになります。',
    order: 501,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '母音字（a, e, i, o, u）には「短い音」と「アルファベット読み（長い音）」の二通りがある。',
      '「母音字＋子音字」で終わる語は短い音。cat [æ]／pen [e]／sit [ɪ]／hot [ɑ]／cup [ʌ]。',
      '「母音字＋子音字＋e」の形では、母音字がアルファベット読みになり、語尾の e は読まない（マジック e）。',
      'cap→cape、hop→hope、win→wine、cut→cute、rid→ride のように、e の有無だけで意味も発音も変わる。',
      '例外：have, give, live（動詞）, come, some, love は e で終わるが母音は短い音のまま。',
    ],
    sections: [
      {
        heading: '母音字の「短い音」',
        body: `英語のつづりと発音は無関係に見えるが、実際にはかなりはっきりした規則がある。まずおさえるのは、母音字（a, e, i, o, u）が「短い音」で読まれる場合である。

■ 短い音になる形
「子音字＋母音字＋子音字」で終わる、いわゆる閉じた形の語では、母音字は短い音になる。

例）a＝[æ] cat, bag, map, hand, black
　　e＝[e] pen, bed, red, ten, desk
　　i＝[ɪ] sit, big, milk, will, fish
　　o＝[ɑ] hot, box, dog, stop, lock
　　u＝[ʌ] cup, bus, run, sun, much

日本語の「ア・エ・イ・オ・ウ」で置きかえて読んでしまいがちだが、a の [æ] は「ア」と「エ」の中間、u の [ʌ] はくちびるを丸めない短い「ア」に近い音である。cat を「キャット」、cup を「カップ」と書き分けるカタカナの差は、この二つの母音の差を反映している。

★ ポイント：入試の発音問題は「同じ母音字なのに音がちがう組」を選ばせる形が多い。まず短い音の代表語（cat, pen, sit, hot, cup）を音の見本として頭に置いておくと、比べる基準ができる。`,
      },
      {
        heading: 'マジック e：語尾の e が音を変える',
        body: `語の最後に e が付き、「母音字＋子音字＋e」の形になると、前の母音字はアルファベットの名前の読み方に変わる。そして語尾の e 自体は発音しない。これを「マジック e」と呼ぶ。

■ e の有無で変わる代表例
cap（帽子）[kæp] → cape（岬・マント）[keɪp]
hat（帽子）[hæt] → hate（憎む）[heɪt]
hop（跳ぶ）[hɑp] → hope（望む）[hoʊp]
not（〜ない）[nɑt] → note（メモ）[noʊt]
win（勝つ）[wɪn] → wine（ワイン）[waɪn]
rid（取り除く）[rɪd] → ride（乗る）[raɪd]
cut（切る）[kʌt] → cute（かわいい）[kjuːt]
tub（おけ）[tʌb] → tube（管）[tjuːb]
plan（計画）[plæn] → plane（飛行機）[pleɪn]

■ アルファベット読みの音
a＝[eɪ]／e＝[iː]／i＝[aɪ]／o＝[oʊ]／u＝[juː] または [uː]
つまり「エイ・イー・アイ・オウ・ユー」であり、アルファベットを言うときの音そのものである。make, these, time, home, use はすべてこの形にあてはまる。

⚠ 注意：この規則には有名な例外がある。have, give, live（住む）, come, some, love, none, done は e で終わるのに母音は短いままである。これは英語では語を v で終わらせない習慣があり、意味のない e を付けているためで、e が音を変えているわけではない。「love を [loʊv] と読む」といった誤りはここから生まれる。`,
      },
    ],
    trapExamples: [
      {
        question: 'cap と cape の下線部 a の発音は、同じか異なるか。',
        wrongAnswer: '同じ（どちらも [æ]）',
        trapExplanation: '語尾の e は読まないと習うため、「読まない文字なら発音に関係ない」と考えて、cape も cap と同じ音で読んでしまう。',
        correctAnswer: '異なる（cap は [æ]、cape は [eɪ]）',
        correctExplanation:
          '語尾の e は、それ自体は読まないが、前の母音字をアルファベット読みに変える働きを持つ（マジック e）。cap [kæp] に対して cape [keɪp]。hat／hate、hop／hope、win／wine も同じ関係である。「読まない e」は「仕事をしていない e」ではない。',
      },
      {
        question: 'have は「母音字＋子音字＋e」の形なので、a は [eɪ] と読む。正しいか。',
        wrongAnswer: '正しい（[heɪv] と読む）',
        trapExplanation: 'マジック e の規則を覚えたてのときに、形だけを見て機械的にあてはめてしまう。gave [geɪv] が実際にその読み方をするので、なおさら正しく見える。',
        correctAnswer: '誤り（have は [hæv]、a は短い音）',
        correctExplanation:
          '英語では語末を v で終わらせないため、have, give, live, love, come, some には意味のない e が付いている。この e はマジック e ではないので母音は短いままである。gave, five, drive のようにアルファベット読みになる語と混同しないよう、have 型の例外は語として覚えてしまうのが早い。',
      },
    ],
  },

  {
    id: 'koko_eigo_s002',
    subject: 'eigo',
    examType: 'koko',
    title: '発音とつづり②：二つ並んだ母音字の読み方',
    description: 'ea・ee・oo・ai・oa・ou・ow など、複数の読み方をもつつづりを整理する',
    intro: 'sea は「シー」、head は「ヘッド」。どちらも ea なのに音がまるでちがいます。ここで「英語は例外だらけだ」とあきらめてしまう人が多いのですが、実は読み方の種類はごく限られていて、どれになるかは語ごとに決まっています。数を絞って覚えれば、発音問題の得点源になります。',
    order: 502,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'ea は [iː]（sea, eat）が基本だが、[e]（head, bread）と [eɪ]（great, break）もある。',
      'ee はほぼ例外なく [iː]（see, week, sleep）。',
      'oo は [uː]（food, school）と [ʊ]（book, good）に分かれ、blood・flood だけ [ʌ]。',
      'ai・ay は [eɪ]（rain, day）、oa は [oʊ]（boat, road）でほぼ固定。',
      'ou・ow は [aʊ]（house, now）が基本だが、ow に [oʊ]（snow, know）、ou に [ʌ]（young, country）がある。',
    ],
    sections: [
      {
        heading: 'ea・ee・oo：三つに分かれるつづり',
        body: `母音字が二つ並ぶと、ふつうは一つの音としてまとめて読む。問題は、同じ並びでも語によって音が変わるものがあることである。入試で問われるのはほぼ次の三つに集中している。

■ ea：三通り
[iː]（もっとも多い）eat, sea, teach, easy, please, meat, speak, read（現在形）
[e]（重要）head, bread, ready, weather, heavy
[eɪ]（三語だけ覚える）great, break, steak

■ ee：ほぼ一通り
[iː] see, meet, week, sleep, three, green, feel
ee は迷う必要がほとんどない。したがって meet と meat は同じ発音になる。

■ oo：三通り
[uː]（長い）food, room, school, moon, soon, noon, too
[ʊ]（短い）book, look, good, cook, foot, wood, stood
[ʌ]（二語だけ）blood, flood

★ ポイント：ea の [e] グループと oo の [ʊ] グループは、どちらも「短く読む」仲間である。head, bread, ready, weather, heavy と、book, look, good, cook, foot を声に出して十回ずつ言い、体で覚えてしまうのが確実である。`,
        figureId: 'lf_kokoeigoext01_002',
      },
      {
        heading: 'ai・ay・oa・ou・ow',
        body: `残りのつづりは、規則性が高いものと、二通りに割れるものに分かれる。

■ 迷わないもの
ai・ay＝[eɪ] rain, train, wait, paint／day, say, play, stay
oa＝[oʊ] boat, coat, road, goat, soap
つまり ai と ay は「エイ」、oa は「オウ」と読めばほぼ正解になる。ただし said [sed] と says [sez] は例外で、これは頻出なので必ず覚える。

■ 二通りに割れるもの
ow＝[aʊ] how, now, town, down, brown, flower
　　＝[oʊ] snow, know, low, slow, window, yellow
ou＝[aʊ] house, mouse, out, about, sound, mountain
　　＝[ʌ] young, country, touch, enough, cousin
　　＝[uː] group, soup, you
　　＝[ʊ] would, could, should

■ 見分けの目安
ow は語の終わりにあるとき [oʊ] になることが多い（snow, know, low, window, yellow）。逆に語の途中や、後ろに n・d が続くときは [aʊ] になりやすい（down, town, crowd）。ただし how, now は語末でも [aʊ] なので、この二語は別に覚える。

⚠ 注意：would, could, should の ou は [ʊ]、しかも l は読まない。つづりから受ける印象と実際の音がもっとも離れている語群なので、発音問題では狙われやすい。`,
      },
    ],
    trapExamples: [
      {
        question: 'bread の下線部 ea は、sea の ea と同じ [iː] である。正しいか。',
        wrongAnswer: '正しい（どちらも [iː]）',
        trapExplanation: 'ea を [iː] と読む語（sea, eat, easy, teach）のほうが数が多いため、ea を見たらすべて [iː] だと決めつけてしまう。',
        correctAnswer: '誤り（bread は [e]、sea は [iː]）',
        correctExplanation:
          'ea が [e] になるのは head, bread, ready, weather, heavy などの一群で、数は少ないが日常語ばかりなので入試頻出である。ea には [iː]・[e]・[eɪ]（great, break, steak）の三通りがあることを、代表語ごと覚えておく。',
      },
      {
        question: 'blood の下線部 oo は、food の oo と同じ [uː] である。正しいか。',
        wrongAnswer: '正しい（どちらも [uː]）',
        trapExplanation: 'oo という並びを見ると「ウー」と長く伸ばす音だと思いこむ。カタカナの「ブラッド」を知っていても、つづりを見た瞬間にそちらが優先されてしまう。',
        correctAnswer: '誤り（blood は [ʌ]、food は [uː]）',
        correctExplanation:
          'oo は [uː]（food, school, moon）と [ʊ]（book, good, foot）に大きく分かれ、さらに blood と flood だけが [ʌ] になる。この二語は数が少ないぶん出題されやすいので、cup, bus と同じ母音だと結びつけて覚えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s003',
    subject: 'eigo',
    examType: 'koko',
    title: '発音とつづり③：子音字とその組み合わせ',
    description: 'c・g の二通りの読み方と、ch・th・gh などの組み合わせの音を区別する',
    intro: 'city は「シティ」、cat は「キャット」。同じ c なのに [s] と [k] に分かれます。でたらめに見えて、実は「c のうしろに何の文字が来るか」だけで決まっています。この一行の規則を知っているかどうかで、初めて見る単語の読みの当たり方が大きく変わります。',
    order: 503,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'c は後ろが e・i・y のとき [s]（city, ice, cycle）、それ以外は [k]（cat, cup, class）。',
      'g は後ろが e・i・y のとき [dʒ]（page, gym, change）が原則。ただし get, give, girl, begin は [g] の例外。',
      'ch は [tʃ]（chair, lunch）が基本。school, Christmas, stomach は [k]、machine は [ʃ]。',
      'th は無声の [θ]（think, three, mouth）と有声の [ð]（this, they, mother）の二種類。',
      'ph＝[f]（phone, photo）、gh は無音（night, high）か [f]（laugh, enough）。',
    ],
    sections: [
      {
        heading: 'c と g：後ろの文字で決まる',
        body: `c と g には「かたい音」と「やわらかい音」があり、どちらになるかは直後の文字だけで決まる。

■ c の規則
後ろが e・i・y → [s]（やわらかい音）
例）city, cent, cycle, ice, nice, place, face, since, decide, exercise
それ以外（a・o・u・子音字・語末）→ [k]（かたい音）
例）cat, cup, cook, come, class, clock, picture, music, doctor

■ g の規則
後ろが e・i・y → [dʒ]（やわらかい音）
例）page, age, change, orange, giant, gym, energy, message, village
それ以外 → [g]（かたい音）
例）game, go, gun, big, dog, glass, green, grow

■ g の重要な例外
get, give, girl, begin, gift, forget, together は、後ろが e・i でも [g] と読む。これらはすべて日常語で、しかも入試頻出なので、例外としてまとめて覚える。

★ ポイント：この規則があるので、動詞に -ing を付けるときのつづりの変化も説明がつく。come の e を落として coming とすれば g のうしろは i ではなく n になり、[k] の音が保たれる。つづりの規則と発音の規則はつながっている。`,
      },
      {
        heading: 'ch・th・sh・ph・gh の音',
        body: `二文字で一つの音を表す組み合わせは、数が限られているので丸ごと覚えられる。

■ ch
[tʃ] chair, church, lunch, teach, watch, children, cheap（大多数）
[k] school, Christmas, stomach, character, chorus, headache（ギリシャ語由来）
[ʃ] machine, chef（フランス語由来）

■ th（二種類の区別が最重要）
[θ]（無声・声帯を震わせない）think, three, thing, thank, month, mouth, tooth, bath, north, south, health
[ð]（有声・のどが震える）this, that, these, those, they, them, there, then, mother, father, brother, weather, other, breathe
代名詞・指示語・冠詞のような文法的な語は [ð]、内容を表す語は [θ] になりやすい、という傾向がある。

■ そのほか
sh＝[ʃ] she, fish, wash, English, shop
ph＝[f] phone, photo, elephant, alphabet
gh＝無音 night, light, high, right, though, through, daughter, eight
gh＝[f] laugh, enough, cough
wh＝[w] what, when, where, white（ただし who, whose, whole は [h]）

⚠ 注意：-tion は [ʃən]（question, information）、-sion は [ʒən]（television, decision）と [ʃən]（mission, discussion）に分かれる。s のうしろの音が有声か無声かで決まるので、音で覚えるほうが早い。`,
      },
    ],
    trapExamples: [
      {
        question: 'school の下線部 ch は、chair の ch と同じ発音である。正しいか。',
        wrongAnswer: '正しい（どちらも [tʃ]）',
        trapExplanation: 'ch を見たら「チ」の音と教わるうえ、chair・lunch・watch など [tʃ] の語が圧倒的に多いため、school も同じだと考えてしまう。',
        correctAnswer: '誤り（school は [k]、chair は [tʃ]）',
        correctExplanation:
          'ギリシャ語由来の語では ch を [k] と読む。school, Christmas, stomach, character, chorus, headache, technology がその代表で、数は少ないが入試の発音問題では必ずといってよいほど登場する。machine の [ʃ] も合わせて覚えておく。',
      },
      {
        question: 'this の th と think の th は、どちらも同じ音である。正しいか。',
        wrongAnswer: '正しい（どちらも「ス」に近い音）',
        trapExplanation: '日本語には th の音がなく、どちらもカタカナでは「ザ」「シンク」と別々に書かれるのに、英語の授業では両方まとめて「th の音」と説明されるため、一種類だと思ってしまう。',
        correctAnswer: '誤り（this は有声の [ð]、think は無声の [θ]）',
        correctExplanation:
          'のどに手をあてて発音すると、this・that・they・mother では震え（有声）、think・three・mouth・bath では震えない（無声）。this の [ð] は日本語の「ザ」ではなく、舌先を軽く歯にあてて出す音である。「the・this・that など指示や文法の語は有声」という目安が使える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s004',
    subject: 'eigo',
    examType: 'koko',
    title: '発音とつづり④：読まない文字（黙字）',
    description: 'know の k、write の w など、書くのに発音しない文字をまとめて整理する',
    intro: '「知っている」は know。この k はいったい何のためにあるのでしょう。実は昔は本当に「クノウ」と発音していて、音だけが先に消え、つづりが残りました。読まない文字は数が限られているので、パターンで覚えれば、書き取りでも発音でも落とさなくなります。',
    order: 504,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      'kn- の k は読まない：know, knife, knee, knock, knowledge。',
      'wr- の w は読まない：write, wrong, wrap。answer の w、sword の w も同じ。',
      '-mb の b は読まない：climb, comb, lamb, thumb, bomb。',
      'l を読まない語：walk, talk, half, calf, could, would, should。t を読まない語：listen, castle, often。',
      'h を読まない語：hour, honest。an hour のように冠詞が an になることが証拠になる。',
    ],
    sections: [
      {
        heading: '語頭・語末の黙字',
        body: `英語には「書くけれど読まない文字」がある。ばらばらに見えるが、実際は位置ごとにパターンが決まっている。

■ 語の初めで読まない
kn- の k：know, knife, knee, knock, knight, knowledge
wr- の w：write, wrong, wrap, wrist
gn- の g：gnome（中学範囲外）
h：hour, honest, honor（アメリカ英語では herb も）

■ 語の終わりで読まない
-mb の b：climb, comb, lamb, thumb, bomb, tomb
-mn の n：autumn, column
-gn の g：sign, foreign, design, campaign
※ ただし signal, designer のように別の音節が続くと g が復活することがある。

■ 語の途中で読まない
-stle の t：listen, castle, whistle, fasten
-lk の l：walk, talk, chalk, folk
その他の l：half, calf, could, would, should, salmon
s：island, aisle
w：answer, sword, two
d：Wednesday, handkerchief

★ ポイント：knight（騎士）と night（夜）、write（書く）と right（正しい）は、黙字のせいで発音がまったく同じになる。書き取りではどちらを書くのか文脈で判断する必要がある。`,
      },
      {
        heading: '黙字の h と冠詞 a／an',
        body: `冠詞の a と an は「つづりが母音字で始まるか」ではなく「発音が母音で始まるか」で決まる。したがって黙字の h を持つ語では an を使う。

例）an hour（一時間）／an honest man（正直な人）
逆に、母音字で始まっても発音が子音で始まる語では a を使う。
例）a university [juː]（ユニバーシティ）／a useful book [juː]／a European country [j]／a one-way street [w]

つまり a／an の選択そのものが、その語の発音を問う問題になっている。入試ではこの形で黙字の知識が試されることが多い。

■ 発音が同じになる組（同音異義語）
know ／ no
knight ／ night
write ／ right
whole ／ hole
hour ／ our
two ／ too ／ to
sword は [sɔːrd] で、w を読まないため soared と同じ音になる。

⚠ 注意：climb の b を読まないことは知っていても、過去形 climbed のつづりで b を落としてしまう誤りが多い。読まない文字も書くときには必要である。「音では消えるが字では消えない」と覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '空所に a か an のどちらを入れるか。I waited for（　）hour at the station.',
        wrongAnswer: 'a（a hour）',
        trapExplanation: 'a／an は「次の語が母音字で始まるかどうか」で決めると覚えていると、hour は h という子音字で始まるので a を選んでしまう。',
        correctAnswer: 'an（an hour）',
        correctExplanation:
          'a／an は文字ではなく発音で決まる。hour の h は読まないので、発音は [aʊər] と母音で始まり an を使う。逆に university は u で始まるが発音は [juː] と子音で始まるため a university となる。honest（an honest man）も同じ仲間である。',
      },
      {
        question: '「彼は木に登った」を英語にすると He climed the tree. でよいか。',
        wrongAnswer: 'よい（b は読まないので書かなくてよい）',
        trapExplanation: 'climb の b を発音しないことを知っているために、「読まないなら書く必要もない」と考えて、つづりからも落としてしまう。',
        correctAnswer: '誤り。正しくは He climbed the tree.',
        correctExplanation:
          '黙字は「発音しない」だけで、つづりの一部としては必要である。climb→climbed、comb→combed のように、-ed を付けても b は残る。発音は [klaɪmd] で、b は読まず -ed が [d] になる。読み方の知識と書き方の知識は別々に確認すること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s005',
    subject: 'eigo',
    examType: 'koko',
    title: '発音とつづり⑤：同つづり異発音と同音異義語',
    description: 'read の二通りの読み方や、write と right のような同じ音の語を整理する',
    intro: 'I read a book every day. と I read a book yesterday. は、字面がまったく同じなのに read の読み方が変わります。逆に write と right のように、つづりは別なのに音は同じ語もあります。音と字が一対一でない英語では、この二つのずれが入試の設問そのものになります。',
    order: 505,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      'read は現在形 [riːd]、過去形・過去分詞 [red]。つづりは変わらないので文脈で判断する。',
      'live は動詞 [lɪv]（住む）、形容詞・副詞 [laɪv]（生の）。',
      'use は動詞 [juːz]、名詞 [juːs]。close は動詞 [kloʊz]、形容詞 [kloʊs]（近い）。',
      '同音異義語の代表：write／right、sea／see、meet／meat、week／weak、son／sun、hour／our。',
      'their／there／theyʼre、its／itʼs、to／too／two は書き取りで頻出。文の意味で選ぶ。',
    ],
    sections: [
      {
        heading: '同じつづりで発音が変わる語',
        body: `つづりが同じでも、品詞や時制がちがえば発音が変わる語がある。文の中での働きを見て判断する。

■ 時制で変わる
read [riːd]（現在形）／read [red]（過去形・過去分詞）
例）I read the news every morning.（[riːd]）
　　I read the news last night.（[red]）
every morning と last night という手がかりで読み分ける。

■ 品詞で変わる
live：動詞 [lɪv]（住む）／形容詞・副詞 [laɪv]（生放送の）
　例）They live in Osaka.（[lɪv]）／a live concert（[laɪv]）
use：動詞 [juːz]（使う）／名詞 [juːs]（使用）
close：動詞 [kloʊz]（閉める）／形容詞 [kloʊs]（近い）
　例）Please close the door.（[kloʊz]）／The station is close to my house.（[kloʊs]）
excuse：動詞 [ɪkskjuːz]／名詞 [ɪkskjuːs]
wind：名詞 [wɪnd]（風）／動詞 [waɪnd]（巻く）
tear：名詞 [tɪər]（涙）／動詞 [teər]（引き裂く）

★ ポイント：語尾が s の語では「動詞は有声の [z]、名詞は無声の [s]」という傾向がある（use, excuse, house も名詞 [haʊs]／動詞 [haʊz]）。動詞のほうが濁ると覚えるとよい。`,
      },
      {
        heading: '発音が同じでつづりがちがう語（同音異義語）',
        body: `逆に、つづりがちがうのに発音がまったく同じ語もある。書き取り問題で問われるのはこちらである。

■ 中学範囲の代表例
write／right（書く／正しい・右）
sea／see（海／見る）
meet／meat（会う／肉）
week／weak（週／弱い）
son／sun（息子／太陽）
one／won（一つ／win の過去形）
know／no（知っている／いいえ）
hour／our（一時間／私たちの）
buy／by／bye（買う／〜によって／さようなら）
hear／here（聞こえる／ここに）
road／rode（道／ride の過去形）
piece／peace（一切れ／平和）
flower／flour（花／小麦粉）
eight／ate（八／eat の過去形）
whole／hole（全体の／穴）
night／knight（夜／騎士）

■ とくに書きまちがえやすい三つ
their（彼らの）／there（そこに）／theyʼre（they are）
its（それの）／itʼs（it is または it has）
to（〜へ）／too（〜も・〜すぎる）／two（二）

⚠ 注意：these are their books. のような文で there を書いてしまう誤りは非常に多い。「there は文の主語のような位置に立つ（There is 〜）」「their のあとには必ず名詞が来る」と、置かれる場所で見分けるとまちがえにくい。`,
      },
    ],
    trapExamples: [
      {
        question: 'I read an interesting book last week. の read の発音を答えなさい。',
        wrongAnswer: '[riːd]（リード）',
        trapExplanation: 'つづりが原形とまったく同じなので、変化していないように見え、現在形と同じ [riːd] で読んでしまう。過去形だと気づかないまま訳も現在形にしてしまうことがある。',
        correctAnswer: '[red]（レッド）',
        correctExplanation:
          'last week があるので、この read は過去形である。read は read-read-read とつづりが変わらない不規則動詞で、過去形・過去分詞の発音だけが [red] に変わる。色の red と同じ音になる。時を表す語句を先に探して時制を確定させてから読むこと。',
      },
      {
        question: '空所に入る語を選びなさい。（　）is a large park near my house.（their／there）',
        wrongAnswer: 'their（Their is a large park ...）',
        trapExplanation: 'their と there は発音がまったく同じなので、耳で覚えたまま書くとどちらか区別がつかない。日本語に訳しても「〜がある」に their の訳が出てこないため、判断材料を失う。',
        correctAnswer: 'there（There is a large park near my house.）',
        correctExplanation:
          'their は「彼らの」という所有を表す語で、直後に必ず名詞が来る（their books）。一方 there は「そこに・〜がある」で、There is ／ There are の形で文頭に立つ。同音異義語は、意味だけでなく「どんな語の前後に置かれるか」で見分けると確実である。',
      },
    ],
  },

  // ───────────────── 2. アクセントの位置（s006〜s009） ─────────────────
  {
    id: 'koko_eigo_s006',
    subject: 'eigo',
    examType: 'koko',
    title: 'アクセント①：強く読む位置の基本',
    description: '2音節語のアクセントの傾向と、名詞と動詞で位置が変わる語を区別する',
    intro: '日本語は音の高さで意味を分けますが、英語は「どこを強く長く読むか」で語を区別します。だから present を強く読む場所を変えると、「贈り物」から「発表する」に意味が変わってしまいます。まずは2音節の語で、強く読む位置の傾向をつかみましょう。',
    order: 506,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '英語は音節ごとに強弱があり、強く読む音節を第一アクセントという。',
      '2音節の語は第1音節にアクセントが来るものが多い（apple, water, teacher）。',
      'about, again, because, enjoy, begin など、第2音節に来る語もかたまりで覚える。',
      '同じつづりで名詞は前・動詞は後ろにアクセントが移る語がある（présent／presént）。',
      'アクセントのない音節の母音は [ə] に弱まる。about の a、teacher の er がその例。',
    ],
    sections: [
      {
        heading: '音節とアクセント',
        body: `英語の語は「音節」という母音を中心としたかたまりに分かれる。teacher は tea-cher で2音節、important は im-por-tant で3音節である。音節の数は母音の数（つづりの母音字の数ではなく、実際に発音する母音の数）で決まる。

■ 2音節語の傾向
2音節の語では、第1音節にアクセントが来るものが圧倒的に多い。とくに名詞・形容詞にその傾向が強い。
例）ápple, wáter, táble, téacher, súmmer, háppy, létter, mórning, gárden, wíndow, dóctor, fármer, músic, quéstion, óver

■ 第2音節にアクセントが来る語
動詞や、もともと接頭辞が付いた語には後ろにアクセントが来るものがある。
例）abóut, agáin, becáuse, enjóy, begín, forgét, agrée, belóng, prepáre, alóne, hotél, guitár, machíne

★ ポイント：アクセントのない音節の母音は、あいまいな [ə]（シュワー）に弱まる。about は「アバウト」ではなく [əˈbaʊt] で、最初の a はほとんど聞こえない。逆にいえば、はっきり聞こえる母音がアクセントの位置である。聞き取りでもこの原理がそのまま使える。`,
      },
      {
        heading: '名詞と動詞でアクセントが動く語',
        body: `つづりがまったく同じでも、名詞（形容詞）として使うときは前、動詞として使うときは後ろにアクセントが移る語がある。入試のアクセント問題の定番である。

■ 代表例（・の前がアクセントのある音節）
présent（贈り物・出席している）／presént（発表する・提出する）
récord（記録・レコード）／recórd（記録する・録音する）
íncrease（増加）／incréase（増える）
óbject（物・目的語）／objéct（反対する）
prógress（進歩）／progréss（進歩する）
prótest（抗議）／protést（抗議する）

例）I got a present from my aunt.（名詞・前）
　　He will present his report tomorrow.（動詞・後ろ）

■ 覚え方
「名前（名詞）は前、動く（動詞）と後ろ」と語呂で覚えると忘れにくい。英語では新しい語を作るとき、名詞は前を強く、動詞は後ろを強くする習慣があり、これはこの語群だけの偶然ではない。

⚠ 注意：desert（砂漠）[ˈdezərt] と dessert（デザート）[dɪˈzɜːrt] は別の語だが、アクセントの位置がちがううえにつづりも s の数だけの差なので、まとめて狙われる。「甘いデザートは s が二つ、アクセントも後ろ」と結びつけておく。`,
        figureId: 'lf_kokoeigoext01_006',
      },
    ],
    trapExamples: [
      {
        question: 'hotel のアクセントは第1音節（ho）にある。正しいか。',
        wrongAnswer: '正しい（HO-tel）',
        trapExplanation: '2音節の名詞は第1音節にアクセントが来ることが多いという規則を機械的にあてはめてしまう。日本語の「ホテル」も先頭を高く言うため、なおさら第1音節に感じられる。',
        correctAnswer: '誤り（ho-TÉL と第2音節）',
        correctExplanation:
          'hotel はフランス語から入った語で、第2音節にアクセントがある [hoʊˈtel]。同じく guitar（gui-TÁR）, machine（ma-CHÍNE）, police（po-LÍCE）, hotel と、後ろにアクセントが来る2音節名詞はまとまった数があるので、規則の例外として個別に覚える。',
      },
      {
        question: '次の文の present は、名詞の present と同じ位置にアクセントがある。正しいか。He will present his idea at the meeting.',
        wrongAnswer: '正しい（どちらも第1音節）',
        trapExplanation: 'つづりが同じなので発音も同じだと考えてしまう。「プレゼント」というカタカナ語の印象が強く、動詞として使われていることに気づかない。',
        correctAnswer: '誤り（この present は動詞なので presént と第2音節）',
        correctExplanation:
          'will のあとに来ているので、この present は「発表する・提出する」という動詞である。名詞の présent（贈り物）は第1音節、動詞の presént は第2音節にアクセントが移る。record, increase, object, progress も同じ仲間で、まず文中での品詞を決めてからアクセントを判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s007',
    subject: 'eigo',
    examType: 'koko',
    title: 'アクセント②：語尾で決まるアクセント（前へ引き寄せる型）',
    description: '-tion・-ic・-ity などの語尾が、直前や三つ前の音節にアクセントを引き寄せる規則',
    intro: 'information、fantastic、ability。長い単語ほどアクセントの位置に迷いますが、実は長い語のほうが規則的です。語の最後のかたまりを見るだけで、強く読む音節がほぼ決まってしまうからです。この規則は覚える量が少ないわりに、得点への効きめが大きいところです。',
    order: 507,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '-tion／-sion／-cian は、その直前の音節にアクセント（infor-MÁ-tion）。',
      '-ic／-ical のうち -ic も直前の音節（fan-TÁS-tic）。-ical は語末から三つ目（e-co-NÓM-i-cal）。',
      '-ity／-ety は語末から三つ目の音節（a-BÍL-i-ty, u-ni-VÉR-si-ty）。',
      '-ial／-ious も直前の音節（of-FÍ-cial, de-LÍ-cious）。',
      '「語末から二つ目」型と「語末から三つ目」型の二種類に整理して覚える。',
    ],
    sections: [
      {
        heading: '語末から二つ目にアクセントが来る型',
        body: `3音節以上の語では、語尾のかたまりがアクセントの位置を決める。もっとも数が多いのが「語尾のすぐ前の音節を強く読む」型である。語末から数えて二つ目の音節、と言いかえてもよい。

■ -tion／-sion／-cian
in-for-MÁ-tion, in-VÉN-tion, QUÉS-tion, dis-CÚS-sion, mu-SÍ-cian, tra-DÍ-tion, pop-u-LÁ-tion, com-mu-ni-CÁ-tion
※ question は2音節（QUES-tion）なので、-tion の直前＝第1音節になる。

■ -ic
fan-TÁS-tic, e-LÉC-tric, dra-MÁT-ic, sci-en-TÍF-ic, e-co-NÓM-ic, at-LÁN-tic, spe-CÍF-ic
※ 例外：Árabic, pólitics, cátholic は前に来る。

■ -ial／-ious／-ial
of-FÍ-cial, ma-TÉ-ri-al, de-LÍ-cious, mys-TÉ-ri-ous, am-BÍ-tious

★ ポイント：この型の語は、日本語のカタカナ語になっているものが多い。「インフォメーション」「エレクトリック」と平らに読む癖が邪魔をするので、「メ」「レ」を強く長く言う練習をしておく。`,
        figureId: 'lf_kokoeigoext01_007',
      },
      {
        heading: '語末から三つ目にアクセントが来る型',
        body: `もう一つの型は、語末から三つ目の音節を強く読むものである。語尾が -ity, -ical, -graphy, -logy などのときに起こる。

■ -ity／-ety
a-BÍL-i-ty（a-bil-i-ty の3番目から数えて…語末 ty から数えて三つ目が BIL）
u-ni-VÉR-si-ty, ac-TÍV-i-ty, pos-si-BÍL-i-ty, so-CÍ-e-ty, va-RÍ-e-ty, ma-JÓR-i-ty

■ -ical
e-co-NÓM-i-cal, po-LÍT-i-cal, MÚ-si-cal, prac-ti-cal → PRÁC-ti-cal, his-TÓR-i-cal

■ -graphy／-logy／-ology
pho-TÓG-ra-phy, ge-ÓG-ra-phy, bi-ÓL-o-gy, tech-NÓL-o-gy, psy-CHÓL-o-gy

■ 二つの型を比べる
econ-：ÉC-o-no-my（名詞は不規則）／e-co-NÓM-ic（-ic は直前）／e-co-NÓM-i-cal（-ical は三つ目）
photo-：PHÓ-to（2音節）／pho-TÓG-ra-phy（-graphy は三つ目）／pho-to-GRÁPH-ic（-ic は直前）
同じ語根でも、付く語尾によってアクセントの位置がどんどん動くことがわかる。

⚠ 注意：-ate, -ous, -al, -ive, -y, -er, -ly といった語尾は、それ自体はアクセントを引き寄せない。activity と active でアクセントの位置が異なるのは、-ity が三つ目に引き寄せるのに対し、-ive はもとの位置（ÁC-tive）をそのままにするからである。`,
      },
    ],
    trapExamples: [
      {
        question: 'economy と economic は、どちらも同じ位置にアクセントがある。正しいか。',
        wrongAnswer: '正しい（どちらも e-CÓN- の部分）',
        trapExplanation: '語のもとが同じなので、派生語になってもアクセントは動かないと思いこむ。日本語では「エコノミー」「エコノミック」とどちらも平らに読むため、ずれに気づきにくい。',
        correctAnswer: '誤り（e-CÓN-o-my と e-co-NÓM-ic で位置がちがう）',
        correctExplanation:
          '-ic はその直前の音節にアクセントを引き寄せるので、economic は e-co-NÓM-ic となる。一方 economy にはその語尾がなく、e-CÓN-o-my のままである。さらに economical は -ical のため語末から三つ目の e-co-NÓM-i-cal。同じ語根でも語尾ごとに位置を確認すること。',
      },
      {
        question: 'question は -tion で終わるので、アクセントは第2音節（tion）にある。正しいか。',
        wrongAnswer: '正しい（ques-TIÓN）',
        trapExplanation: '「-tion がアクセントを決める」という規則を、「-tion 自体を強く読む」と取りちがえてしまう。-ee や -eer のように語尾自身にアクセントが来る型と混ざるのも原因である。',
        correctAnswer: '誤り（QUÉS-tion と第1音節）',
        correctExplanation:
          '-tion はその「直前の音節」を強く読ませる語尾であって、-tion 自体は強く読まない。question は ques-tion の2音節なので、直前＝第1音節が答えになる。information（infor-MÁ-tion）も、強いのは -tion ではなく直前の MA である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s008',
    subject: 'eigo',
    examType: 'koko',
    title: 'アクセント③：語尾自身を強く読む型',
    description: '-ee・-eer・-ese・-oo など、語尾そのものにアクセントが来る語をまとめる',
    intro: 'Japan は「ジャパン」で後ろが強いのに、Japanese になると最後の -ese がいちばん強くなります。英語には「この語尾が付いたら、そこを強く読む」と決まっているグループがあり、数はごくわずかです。ここを覚えておくと、長い語でも一瞬で位置が決まります。',
    order: 508,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '-ee：employée, refugée, agrée, degrée（例外：cóffee, commíttee は語尾に来ない）。',
      '-eer：engineér, voluntéer, caréer。',
      '-ese：Japanése, Chinése, Portuguése。',
      '-oo／-oon：bambóo, shampóo, ballóon, afternóon。kangaróo も同型。',
      '-self／-selves：mysélf, himsélf, oursélves。強く読むのは -self のほう。',
    ],
    sections: [
      {
        heading: '語尾そのものにアクセントが来るグループ',
        body: `前の課で見た -tion や -ity は、語尾の前の音節を強く読ませる型だった。これに対して、語尾自身がいちばん強くなるグループがある。数が限られているので、まとめて暗記するのが早い。

■ -ee
employée（従業員）, refugée（難民）, agrée, degrée, trainée
「〜される人」を表す -ee は、対になる -er と組で覚える。emplóyer（雇う側・前が強い）／employée（雇われる側・後ろが強い）。

■ -eer
engineér（技師）, voluntéer（ボランティア）, caréer（経歴）, pionéer

■ -ese
Japanése, Chinése, Portuguése, Vietnamése
国名から作る語のうち、-ese が付くものだけがこの型になる。

■ -oo／-oon
bambóo, shampóo, ballóon, afternóon, cartóon, typhóon

■ -ique／-ade／-ain（動詞）
uníque, paráde, lemonáde, expláin, remáin, contáin

■ -self／-selves
mysélf, yoursélf, himsélf, hersélf, oursélves, themsélves

★ ポイント：「後ろが強い」ということは、その前の音節はあいまいな [ə] に弱まるということでもある。Japanese は「ジャ・パ・ニーズ」と平らではなく、[dʒæpəˈniːz] と最後だけが強く長い。`,
      },
      {
        heading: '例外と、語尾で位置が動く例',
        body: `規則には必ず例外がある。とくに -ee は例外が入試で狙われる。

■ -ee の例外
cóffee（コーヒー）… 第1音節
commíttee（委員会）… 第2音節
どちらも -ee で終わるが、語尾にアクセントは来ない。「コーヒーと委員会は例外」と一組で覚える。

■ 同じ語根で位置が動く例
Japán（ja-PÁN・第2音節）→ Japanése（jap-a-NÉSE・第3音節）
Chína（CHÍ-na・第1音節）→ Chinése（chi-NÉSE・第2音節）
emplóy（em-PLÓY・第2音節）→ employée（em-ploy-ÉE・第3音節）
volunteer は VÓL- ではなく vol-un-TÉER（第3音節）

■ アクセントに影響しない語尾
-ing, -ed, -s, -ly, -ness, -ment, -ful, -less は、付いてもアクセントの位置を動かさない。
例）interest → ÍN-ter-est ／ interesting → ÍN-ter-est-ing ／ interested → ÍN-ter-est-ed
careful → CÁRE-ful ／ carefully → CÁRE-ful-ly
develop → de-VÉL-op ／ development → de-VÉL-op-ment

⚠ 注意：interesting は「イ・ン・タ・レ・ス・ティ・ン・グ」と八つに区切って平らに読みがちだが、実際は IN- だけが強く、あとは弱い [ɪn.trɪs.tɪŋ] に近い。長い語ほど「強いのは一か所だけ」と意識する。`,
      },
    ],
    trapExamples: [
      {
        question: 'coffee は -ee で終わるので、アクセントは第2音節（fee）にある。正しいか。',
        wrongAnswer: '正しい（cof-FÉE）',
        trapExplanation: '「-ee は語尾自身が強い」という規則を覚えた直後ほど、例外を確認せずにあてはめてしまう。employee, agree, degree と同じ形に見えるので疑いにくい。',
        correctAnswer: '誤り（CÓF-fee と第1音節）',
        correctExplanation:
          'coffee と committee は -ee で終わるがアクセントが語尾に来ない例外である。coffee は CÓF-fee、committee は com-MÍT-tee。規則を覚えるときは、必ず例外もセットで覚えること。なお日本語の「コーヒー」も先頭を強く言うので、この二語に関してはカタカナが助けになる。',
      },
      {
        question: 'Japan と Japanese は同じ位置にアクセントがある。正しいか。',
        wrongAnswer: '正しい（どちらも pa の部分）',
        trapExplanation: 'もとの語の発音がそのまま残ると考えてしまう。カタカナでも「ジャパン」「ジャパニーズ」と、どちらも「ジャ」を高く言う癖があるため、位置のずれに気づかない。',
        correctAnswer: '誤り（Ja-PÁN は第2音節、Jap-a-NÉSE は第3音節）',
        correctExplanation:
          '-ese は語尾自身にアクセントを持つので、Japanese では最後の -ese がいちばん強くなる。China（CHÍ-na）→ Chinese（chi-NÉSE）も同じずれ方をする。語尾が付いて音節が増えたら、アクセントが動いていないかを毎回確認する習慣をつける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s009',
    subject: 'eigo',
    examType: 'koko',
    title: 'アクセント④：カタカナ語とのずれ',
    description: '日本語になっている外来語と英語で、強く読む位置や語形が異なる例を確認する',
    intro: '「ボランティア」「カレンダー」「ギター」。どれも日本語として通じますが、英語で同じ調子で言うと通じません。日本語は外来語を平らに、または先頭を高く読む癖があるためです。知っている語ほど油断しやすいので、ここは意識してずれを直しておく必要があります。',
    order: 509,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'volunteer は vol-un-TEER と最後が強い。日本語の「ボランティア」とはずれる。',
      'calendar は CAL-en-dar と先頭が強い。「カレンダー」の伸ばす位置に引きずられない。',
      'guitar は gui-TAR、hotel は ho-TEL、percent は per-CENT と後ろが強い。',
      'orange・energy・camera・image は先頭が強い（OR-ange, EN-er-gy, CAM-er-a, IM-age）。',
      '和製英語（コンセント、ノートパソコン、サラリーマン）は英語では通じない別の語になる。',
    ],
    sections: [
      {
        heading: 'アクセントの位置がずれる代表語',
        body: `日本語の外来語は、英語のアクセントをそのまま引き継いでいない。むしろ日本語のリズム（拍）に作りかえられている。そのため「カタカナで知っている語」ほど、アクセント問題で落としやすい。

■ 後ろが強いのに、日本語では前が強く感じられる語
volunteer（vol-un-TEER・第3音節）
guitar（gui-TAR・第2音節）
hotel（ho-TEL・第2音節）
percent（per-CENT・第2音節）
career（ca-REER・第2音節）
machine（ma-CHINE・第2音節）
police（po-LICE・第2音節）
event（e-VENT・第2音節）

■ 前が強いのに、日本語では後ろを伸ばす語
calendar（CAL-en-dar・第1音節）
orange（OR-ange・第1音節）
energy（EN-er-gy・第1音節）
camera（CAM-er-a・第1音節）
image（IM-age・第1音節）
pattern（PAT-tern・第1音節）
alcohol（AL-co-hol・第1音節）
elevator（EL-e-va-tor・第1音節）
vegetable（VEG-e-ta-ble・第1音節）
chocolate（CHOC-o-late・第1音節）

★ ポイント：日本語では「カレンダー」「オレンジ」のように長音（ー）の部分を強く感じるが、英語のアクセントは長音とは無関係である。カタカナを頭から追い出し、英語として音節に区切り直すこと。`,
        figureId: 'lf_kokoeigoext01_009',
      },
      {
        heading: '語そのものが違う「和製英語」',
        body: `アクセントだけでなく、英語として存在しない、あるいは意味がちがう語もある。英作文で使ってしまうと通じないので、正しい語を覚えておく。

■ 英語では別の語になるもの
コンセント → outlet／socket（consent は「同意」という別の語）
ノートパソコン → laptop（notebook は「ノート・帳面」）
サラリーマン → office worker／businessperson
アルバイト → part-time job（ドイツ語由来）
マンション → apartment／condominium（mansion は「大邸宅」）
ホッチキス → stapler
シャープペンシル → mechanical pencil
ガソリンスタンド → gas station
クレーム（苦情）→ complaint（claim は「主張する・要求する」）
ペットボトル → plastic bottle
フライドポテト → French fries（米）／chips（英）
テイクアウト → to go（米）／takeaway（英）

■ 意味がずれるもの
smart は「賢い」であって「やせている」ではない（やせている＝slim, thin）。
naive は英語では「世間知らず」という悪い意味になりやすい。
cunning は「ずるい」で、試験の不正行為は cheating。

⚠ 注意：入試の英作文でこれらを使うと、単なる語彙のまちがいではなく意味の通らない文になる。「日本語で通じるカタカナ語は、いったん疑う」という習慣をつけておくとよい。`,
      },
    ],
    trapExamples: [
      {
        question: 'calendar のアクセントは、伸ばして読む「ダー」の部分、つまり第3音節にある。正しいか。',
        wrongAnswer: '正しい（cal-en-DAR）',
        trapExplanation: '日本語の「カレンダー」では最後の長音がいちばん目立つため、そこが強いと感じてしまう。英語のアクセントと日本語の長音を同じものだと考えるのが原因である。',
        correctAnswer: '誤り（CAL-en-dar と第1音節）',
        correctExplanation:
          'calendar は [ˈkælɪndər] で、第1音節が強く、あとの二つは弱い [ə] に弱まる。日本語の長音（ー）は英語のアクセントとは無関係である。orange, camera, energy, chocolate も同じく先頭が強い。カタカナの印象を判断材料にしないこと。',
      },
      {
        question: '「部屋のコンセントはどこですか」を英語にすると Where is the consent in this room? でよいか。',
        wrongAnswer: 'よい（コンセント＝consent）',
        trapExplanation: 'カタカナ語がそのまま英語だと思いこんでいると、つづりだけ英語風に直して使ってしまう。consent という語が実在するため、辞書で確認しても気づきにくい。',
        correctAnswer: '誤り。正しくは Where is the outlet in this room?',
        correctExplanation:
          'consent は「同意・承諾」という意味の別の語で、電源の差込口は outlet（米）または socket（英）という。マンション（英語では大邸宅）、クレーム（claim は「主張する」）なども同じ型のまちがいである。和製英語は語そのものを置きかえて覚える必要がある。',
      },
    ],
  },

  // ───────────────── 3. -s・-ed の発音（s010〜s012） ─────────────────
  {
    id: 'koko_eigo_s010',
    subject: 'eigo',
    examType: 'koko',
    title: '語尾の発音①：-s／-es の三つの読み方',
    description: '複数形と三人称単数現在形の -s が [s]／[z]／[ɪz] に分かれる規則をつかむ',
    intro: 'cats は「キャッツ」、dogs は「ドッグズ」。同じ -s を付けただけなのに、片方は「ス」、もう片方は「ズ」になります。しかもどちらも無意識にそう読んでいるはずです。この使い分けは気まぐれではなく、-s の直前の音だけで決まります。',
    order: 510,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '-s の発音は直前の音で決まる。つづりの文字ではなく「音」で判断する。',
      '無声音 [p][t][k][f][θ] の後 → [s]（cups, cats, books, likes, stops）。',
      '有声音（母音・有声子音）の後 → [z]（dogs, boys, cars, pens, plays）。',
      '歯擦音 [s][z][ʃ][ʒ][tʃ][dʒ] の後 → [ɪz]（buses, boxes, watches, dishes, oranges）。',
      'つづりの e に惑わされない。like の語末音は [k] なので likes は [s]。',
    ],
    sections: [
      {
        heading: '三つに分かれる理由',
        body: `名詞の複数形や動詞の三人称単数現在形に付ける -s は、書くときは一種類だが、読むときは三種類に分かれる。分かれ方は、-s のすぐ前の「音」によって自動的に決まる。

■ [s] と読む場合
直前が無声音（のどが震えない音）＝[p][t][k][f][θ] のとき。
例）cups [-ps]／cats [-ts]／books [-ks]／likes [-ks]／stops [-ps]／laughs [-fs]／months [-θs]

■ [z] と読む場合
直前が有声音（のどが震える音）＝母音および [b][d][g][v][ð][m][n][ŋ][l][r] のとき。
例）dogs [-gz]／boys [-z]／cars [-z]／pens [-nz]／songs [-ŋz]／plays [-z]／rooms [-mz]／friends [-dz]／days [-z]／girls [-lz]／lives [-vz]／comes [-mz]

■ [ɪz] と読む場合
直前が歯擦音（すれる音）＝[s][z][ʃ][ʒ][tʃ][dʒ] のとき。この場合、音がぶつかって続けて言えないので、間に母音を入れて音節を一つ増やす。
例）buses／boxes [-ksɪz]／watches／dishes／oranges／classes／churches／bridges／uses

★ ポイント：なぜこうなるのかは、実際に声に出すとわかる。無声音のあとに [z] を続けようとすると言いにくく、有声音のあとに [s] を続けようとしても言いにくい。前の音に引きずられて自然にそろうだけである。理屈で覚えるより、口で確かめるほうが速い。`,
        figureId: 'lf_kokoeigoext01_010',
      },
      {
        heading: 'まちがえやすい判断',
        body: `規則そのものは単純だが、判断をあやまる原因はほぼ二つに絞られる。

■ 原因1：つづりの文字で判断してしまう
like は e で終わるが、e は読まないので語末の音は [k] である。したがって likes は [laɪks] で [s]。同様に、
　make → makes [s]（語末音 [k]）
　hope → hopes [s]（語末音 [p]）
　live → lives [z]（語末音 [v]）
　use → uses [ɪz]（語末音 [z]）
文字の e ではなく、実際に出す最後の音を見ること。

■ 原因2：-es と書いてあれば [ɪz] だと決めつける
つづりが -es でも [ɪz] にならない語がある。
　goes [goʊz]（[z]）／does [dʌz]（[z]）／potatoes [z]／tomatoes [z]
o で終わる語に付く -es は、音を足すための e ではなく、つづり上の約束にすぎない。逆に、つづりが -s でも [ɪz] になる語はない。

■ 特別な発音になる語
house [haʊs] → houses [ˈhaʊzɪz]（s が [z] に変わる）
bath [bæθ] → baths [bæðz]（θ が ð に変わる）
knife → knives、leaf → leaves のように f が v になる語は、当然 [z] で読む。

⚠ 注意：三人称単数現在形でも規則は同じである。teach → teaches [ɪz]、wash → washes [ɪz]、watch → watches [ɪz]、pass → passes [ɪz]。複数形と三単現を別々に覚える必要はない。`,
      },
    ],
    trapExamples: [
      {
        question: 'dogs と cats の下線部 s は同じ発音である。正しいか。',
        wrongAnswer: '正しい（どちらも [s]）',
        trapExplanation: '書くときはどちらも同じ s なので、読むときも同じだと考えてしまう。カタカナで「ドッグス」「キャッツ」と覚えていると、区別する意識が生まれない。',
        correctAnswer: '誤り（dogs は [z]、cats は [s]）',
        correctExplanation:
          'dog の語末音は有声の [g] なので -s も有声の [z] になる。cat の語末音は無声の [t] なので -s も無声の [s] になる。前の音が有声か無声かで自動的にそろう、というのがこの規則の中身である。声に出して、のどに手をあてると確かめられる。',
      },
      {
        question: 'like は e で終わるので、likes の -s は [ɪz] と読む。正しいか。',
        wrongAnswer: '正しい（li-ke-s で音節が増える）',
        trapExplanation: 'つづりの最後の文字だけを見て判断してしまう。「e があるから音が一つ増える」という誤った類推が、uses [ɪz] のような例で強化されてしまう。',
        correctAnswer: '誤り（likes は [laɪks] で [s]）',
        correctExplanation:
          'like の語末の e は読まないので、実際の語末音は [k]。無声音なので -s も [s] になる。同じ理由で makes [s]、hopes [s]。一方 use は語末音が [z] なので uses は [ɪz] になる。判断の材料は「つづりの最後の文字」ではなく「実際に発音する最後の音」である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s011',
    subject: 'eigo',
    examType: 'koko',
    title: '語尾の発音②：-ed の三つの読み方',
    description: '規則動詞の過去形 -ed が [t]／[d]／[ɪd] に分かれる規則を、直前の音から判断する',
    intro: 'walked は「ウォークト」、played は「プレイド」、wanted は「ウォンティッド」。同じ -ed なのに三通りに読み分けています。しかも「ウォンティッド」だけ音節が一つ増えている。増えるのは実は二つの音のあとだけで、その二つを覚えれば迷わなくなります。',
    order: 511,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '-ed の発音も直前の音で決まる。判断の順序は「まず [t][d] かどうか」。',
      '直前が [t] または [d] → [ɪd]（wanted, needed, visited, started）。音節が一つ増える。',
      'それ以外で直前が無声音 → [t]（stopped, looked, washed, watched, liked）。',
      'それ以外で直前が有声音 → [d]（played, lived, opened, called, studied）。',
      'つづりが変わっても規則は同じ。studied は語末音 [i] なので [d]。',
    ],
    sections: [
      {
        heading: '三分類と判断の手順',
        body: `規則動詞の過去形・過去分詞に付ける -ed も、-s と同じように直前の音で三通りに分かれる。ただし判断の順序を決めておくと迷わない。

■ 手順1：直前の音が [t] か [d] か
そうであれば [ɪd] と読み、音節が一つ増える。
例）wanted, needed, visited, started, ended, waited, decided, invited, painted, hated

■ 手順2：それ以外で、直前が無声音（[p][k][f][s][ʃ][tʃ]）か
そうであれば [t]。
例）stopped [-pt]／looked [-kt]／helped [-pt]／washed [-ʃt]／watched [-tʃt]／liked [-kt]／finished [-ʃt]／asked [-kt]／laughed [-ft]／passed [-st]

■ 手順3：それ以外（有声音・母音）
[d] と読む。
例）played, lived, opened, listened, called, cleaned, studied, enjoyed, moved, used, loved, arrived, answered, remembered

■ なぜ [ɪd] だけ音節が増えるのか
[t] や [d] のあとに、さらに [t] や [d] を続けようとしても、同じ場所で舌が止まるので二つの音が区別できない。そこで間に母音を入れて音節を分ける。増えるのはこの場合だけなので、「音節が増えるのは wanted・needed の型だけ」と覚えておけばよい。

★ ポイント：入試では -ed の発音が他と異なるものを選ぶ形で出る。まず [ɪd] のものを探し、なければ無声音か有声音かで分ける、という順で見ると速い。`,
        figureId: 'lf_kokoeigoext01_011',
      },
      {
        heading: 'つまずきやすいところ',
        body: `-ed の発音でまちがえる原因も、-s のときとほとんど同じである。

■ つづりの e に引かれる
liked は li-ked と二音節に見えるが、e は読まないので [laɪkt] の一音節である。同様に、
　hoped [hoʊpt]（一音節）
　used [juːzd]（一音節）
　lived [lɪvd]（一音節）
「-ed と書いてあるから母音が増える」わけではない。

■ つづりが変わった語
study → studied は y が ied に変わるが、語末の音は [i] という母音なので [d] と読む（[ˈstʌdid]）。
stop → stopped も p を重ねるだけで、語末音は [p] のままなので [t]。
つづりの変化と発音の変化は別々に考える。

■ 音は同じでも文字がちがう語
washed [wɑʃt] と wished [wɪʃt] は、どちらも [ʃt] で終わる。
sh・ch のあとは [t] であって [ɪd] ではないことに注意する。「ウォッシュド」ではなく「ウォッシュト」。

■ 形容詞になった -ed
一部の -ed は形容詞として使われるとき [ɪd] と読む。
　an old man ではなく、an aged man [ˈeɪdʒɪd]
　a naked baby [ˈneɪkɪd]
　a learned scholar [ˈlɜːrnɪd]（学識のある）
これらは高校範囲だが、難関私立では出題例がある。

⚠ 注意：不規則動詞には -ed が付かないので、この規則は関係ない。went, came, took には当てはめないこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'washed の -ed は [ɪd] と読む。正しいか。',
        wrongAnswer: '正しい（ウォッシュト ではなく ウォッシュド／ウォッシュィド）',
        trapExplanation: 'sh の音のあとにさらに子音を続けるのが言いにくく感じ、間に母音を入れてしまう。また「シュ」と「ズ」の印象から有声の [d] を選びがちでもある。',
        correctAnswer: '誤り（washed は [wɑʃt] で [t]）',
        correctExplanation:
          '[ɪd] になるのは直前が [t] か [d] のときだけである。[ʃ] は無声音なので -ed は [t] になる。同じく watched [tʃt]、finished [ʃt]、passed [st]。「音節が増えるのは wanted・needed の仲間だけ」と決めておけば、この型では迷わない。',
      },
      {
        question: 'studied は study の y が ied に変わっているので、-ed は [ɪd] と読む。正しいか。',
        wrongAnswer: '正しい（stu-di-ed の三音節）',
        trapExplanation: 'つづりが大きく変わったことで「発音も特別に変わるはずだ」と考えてしまう。i が二つ並んで見えることも、母音が増える印象を強める。',
        correctAnswer: '誤り（studied は [ˈstʌdid] で [d]）',
        correctExplanation:
          'つづりの変化と発音の規則は無関係である。studied の -ed の直前の音は [i] という母音（有声）なので、-ed は [d] になる。carried, tried, cried も同じく [d]。判断はいつでも「-ed の直前の音が [t]／[d] か、無声か、有声か」の一本で行う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s012',
    subject: 'eigo',
    examType: 'koko',
    title: '発音問題の解き方：下線部の音を比べる',
    description: '「発音が他と異なるものを選べ」という設問を、音のグループ分けで確実に解く',
    intro: '発音問題は、知らない単語が一つ混じっただけで手が止まります。けれど実際に出題される語は毎年ほとんど同じ顔ぶれで、しかも同じ音のグループで出されます。よく出る組を音ごとにまとめて頭に入れておけば、その場で考えなくても答えが見えるようになります。',
    order: 512,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      '設問は「下線部の発音が他と異なるもの」を選ぶ形が中心。まず自分の知っている語から音を確定させる。',
      '-s／-ed の下線部は、直前の音だけを見て判断する（前の二課の規則をそのまま使う）。',
      '母音の下線部は、頻出の音のグループごとに代表語で覚える。',
      'woman [ʊ] と women [ɪ]、said [e] と rain [eɪ] のように、見た目が近い語ほど狙われる。',
      '知らない語が出たら、確実に分かる語を先に分類し、残りから消去法で選ぶ。',
    ],
    sections: [
      {
        heading: '頻出の母音グループ',
        body: `発音問題で問われる母音は、事実上いくつかのグループに限られている。代表語で音を覚えておけば、その場で比べられる。

■ [ʌ]（短い「ア」）
come, some, love, month, country, young, enough, blood, touch, cousin, does, above
つづりは o・ou・oo・ove とばらばらだが音は同じ、というのがこのグループの厄介さである。

■ [uː]（長い「ウ」）
food, moon, school, room, group, soup, true, blue, do, who, June, move
■ [ʊ]（短い「ウ」）
book, good, look, foot, put, full, could, would, should, woman

■ [ɔː]（口を丸めた「オー」）
all, small, call, talk, walk, water, caught, bought, daughter, autumn, August

■ [aɪ]
like, time, high, buy, eye, right, night, sky, why, child, mind, find, climb, either（英）

■ [e]
head, bread, said, says, many, any, friend, guest, ready, weather, breakfast
つづりが ai・a・ea・ie と広がるので、まとめて音で覚える価値が高い。

■ [eɪ]
make, name, rain, day, eight, great, break, they, steak, gray, table

■ [ɜːr]（あいまいな「アー」）
bird, girl, work, world, learn, early, heard, nurse, turn, first, church, service

★ ポイント：同じつづりで音がちがう組（good／food、said／rain）と、ちがうつづりで音が同じ組（come／country、head／said）の両方が問われる。片方だけの対策では足りない。`,
      },
      {
        heading: '解く手順と、見た目が近い語の罠',
        body: `実際の設問は次のような形で出る。「次の各組のうち、下線部の発音が他の三つと異なるものを一つ選べ」。

■ 解く手順
①下線部が -s または -ed なら、直前の音だけを見る。母音を見る必要はまったくない。
②下線部が母音なら、確実に分かる語（cat, food, book など基本語）から音を決める。
③残った語を、決めた音のグループに入れられるかどうかで判断する。
④どうしても決まらないときは、「三つが同じで一つだけちがう」という条件を利用し、多数派に入る語を消していく。

■ 見た目が近いのに音がちがう組（頻出）
woman [ˈwʊmən] ／ women [ˈwɪmɪn]
　単数と複数で、o の音が [ʊ] から [ɪ] に変わる。
south [saʊθ] ／ southern [ˈsʌðərn]
　名詞と形容詞で母音が変わる。
nature [ˈneɪtʃər] ／ natural [ˈnætʃərəl]
child [tʃaɪld] ／ children [ˈtʃɪldrən]
break [breɪk] ／ breakfast [ˈbrekfəst]
know [noʊ] ／ knowledge [ˈnɑlɪdʒ]
say [seɪ] ／ says [sez] ／ said [sed]
mean [miːn] ／ meant [ment]
please [pliːz] ／ pleasant [ˈplezənt]

⚠ 注意：これらはすべて「同じ語族なのに母音が変わる」型である。もとの語の発音を知っているぶん、かえって同じだと決めつけてしまう。派生語が出たら、必ずもとの語と音を比べ直すこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'woman と women の下線部 o は、同じ発音である。正しいか。',
        wrongAnswer: '正しい（単数形と複数形だから o の音は変わらない）',
        trapExplanation: '複数形になったのは語尾の a が e に変わっただけに見えるので、前半の音は変わらないと考えてしまう。実際には変化したのは前半の母音のほうである。',
        correctAnswer: '誤り（woman は [ˈwʊmən]、women は [ˈwɪmɪn]）',
        correctExplanation:
          'つづりで変わったのは後半（a→e）だが、発音で変わるのは前半で、woman の o [ʊ] が women では [ɪ] になる。つまり「ウーマン」に対して「ウィミン」。つづりの変化と音の変化がずれている典型例で、発音問題の定番である。',
      },
      {
        question: 'said の下線部 ai は、rain の ai と同じ [eɪ] である。正しいか。',
        wrongAnswer: '正しい（ai は「エイ」と読む）',
        trapExplanation: 'ai を [eɪ] と読む規則は正しく、rain, train, wait, paint とほとんどの語が当てはまるため、said も同じだと考えてしまう。',
        correctAnswer: '誤り（said は [sed] で [e]、rain は [reɪn] で [eɪ]）',
        correctExplanation:
          'say [seɪ] の過去形 said は [sed] と短く読み、三人称単数の says も [sez] になる。この二語は ai・ay の規則から外れる重要な例外である。head, bread, many, any, friend と同じ [e] のグループに入れて覚えておくとよい。',
      },
    ],
  },

  // ───────── 4. 複数形・三単現・-ing のつづり変化（s013〜s016） ─────────
  {
    id: 'koko_eigo_s013',
    subject: 'eigo',
    examType: 'koko',
    title: '複数形①：規則変化のつづり',
    description: '-s／-es／y→ies／f→ves という四つのつくり方を、条件つきで正確に使い分ける',
    intro: 'city の複数形は cities なのに、boy は boys。どちらも y で終わっているのに変え方がちがいます。ここには「y の前が子音字か母音字か」というはっきりした条件があります。条件を丸ごと覚えずに「y は ies」とだけ覚えると、必ず boies と書いてしまいます。',
    order: 513,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '原則は語尾に -s を付けるだけ（books, pens, cats）。',
      's・x・ch・sh・o で終わる語は -es（buses, boxes, watches, dishes, potatoes）。',
      '「子音字＋y」は y を i に変えて -es（cities, countries, babies）。「母音字＋y」はそのまま -s（boys, days, keys）。',
      'f・fe で終わる語は ves（leaves, knives, lives, wives, wolves）。roofs, chiefs, safes, beliefs は例外。',
      'o で終わっても、楽器名や短縮語は -s（pianos, photos, radios）。',
    ],
    sections: [
      {
        heading: '四つのつくり方と、その条件',
        body: `名詞の複数形は、語尾の形によってつくり方が変わる。条件をあいまいに覚えると必ずまちがえるので、「何で終わるか」を毎回確認する。

■ ①原則：-s を付ける
books, pens, cats, dogs, apples, cups, desks, students

■ ②s・x・ch・sh・o で終わる語：-es を付ける
buses, glasses, boxes, foxes, watches, benches, dishes, brushes, potatoes, tomatoes, heroes
これらは -s だけでは発音しにくい（または慣習）ため e を補う。s・x・ch・sh の場合は発音も [ɪz] になる。

■ ③子音字＋y：y を i に変えて -es
cities, countries, babies, stories, families, parties, dictionaries, factories
※ 直前が母音字（a, e, i, o, u）なら、この変化は起こらない。
　boys, days, keys, toys, ways, holidays

■ ④f・fe：f を v に変えて -es
leaves, knives, lives, wives, wolves, thieves, shelves, halves
※ 例外：roofs, chiefs, safes, beliefs, cliffs（そのまま -s）

★ ポイント：③と④は「発音しやすさ」で説明できる。city の y は [i] という母音なので、そのまま s を付けると [sɪtiz] となり、i の音が二つ並んでしまう。つづりを i にそろえて es を足すことで音が安定する。`,
        figureId: 'lf_kokoeigoext01_013',
      },
      {
        heading: '例外と、まぎらわしい語',
        body: `複数形のつづりは規則が明確なぶん、例外の数も限られている。以下は入試で問われる範囲である。

■ o で終わるが -s だけの語
piano → pianos ／ photo → photos ／ radio → radios ／ kilo → kilos ／ zoo → zoos ／ studio → studios
イタリア語由来の楽器名や、短縮された語、直前が母音字の語がここに入る。逆に -es になるのは potato, tomato, hero, echo, volcano といった、日常語に定着した少数派である。

■ f・fe だが v にしない語
roof → roofs ／ chief → chiefs ／ safe → safes ／ belief → beliefs ／ cliff → cliffs ／ handkerchief → handkerchiefs

■ 語尾が -ss, -sh, -ch でも ch を [k] と読む語
stomach → stomachs（[k] の音なので -es にしない）

■ 発音の確認も同時に行う
buses [ˈbʌsɪz]／boxes [ˈbɑksɪz]／watches [ˈwɑtʃɪz]／dishes [ˈdɪʃɪz]（すべて [ɪz]）
potatoes [pəˈteɪtoʊz]／heroes [ˈhɪroʊz]（つづりは -es だが発音は [z]）

⚠ 注意：つづりの規則と発音の規則は別々である。「-es と書くから [ɪz] と読む」と結びつけると、potatoes や goes でまちがえる。つづりは語尾の文字、発音は語尾の音で決める。`,
      },
    ],
    trapExamples: [
      {
        question: 'boy の複数形を書きなさい。',
        wrongAnswer: 'boies',
        trapExplanation: '「y で終わる語は y を i に変えて es」という規則だけを覚えていると、直前が母音字か子音字かという条件を落として機械的に適用してしまう。',
        correctAnswer: 'boys',
        correctExplanation:
          'y を ies に変えるのは「子音字＋y」のときだけである。boy は o という母音字＋y なので、そのまま -s を付けて boys とする。day → days、key → keys、toy → toys も同じ。逆に city（t＋y）、baby（b＋y）、country（r＋y）は子音字＋y なので ies になる。',
      },
      {
        question: 'piano の複数形を書きなさい。',
        wrongAnswer: 'pianoes',
        trapExplanation: '「o で終わる語は -es」と覚えていると、potato → potatoes、tomato → tomatoes、hero → heroes の印象からそのまま当てはめてしまう。',
        correctAnswer: 'pianos',
        correctExplanation:
          'o で終わる語のうち -es になるのは potato, tomato, hero, echo, volcano など数が限られている。イタリア語由来の楽器名（piano, solo）や短縮語（photo, kilo）、直前が母音字の語（radio, zoo, studio）は -s だけを付ける。「-es になる o の語」を数個覚え、残りは -s と考えるほうが確実である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s014',
    subject: 'eigo',
    examType: 'koko',
    title: '複数形②：不規則変化・単複同形・数えられない名詞',
    description: 'man→men 型、sheep 型、water 型を区別し、動詞の一致まで正しく判断する',
    intro: '魚が三匹いるとき、英語では three fish。s を付けません。一方 people は s が付いていないのに複数扱いです。「s があるかどうか」と「複数かどうか」は別問題で、ここを混同すると be 動詞や動詞の形をまちがえます。',
    order: 514,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      '母音が変わる型：man→men, woman→women, foot→feet, tooth→teeth, goose→geese, mouse→mice。',
      '-en が付く型：child→children, ox→oxen。',
      '単数形と複数形が同じ語：sheep, deer, fish, Japanese, Chinese, yen。',
      'people・police は s が付かないが複数扱い。People are ～ とする。',
      'water, bread, information, advice, homework, furniture は数えられない。a piece of ～ で数える。',
    ],
    sections: [
      {
        heading: '不規則な複数形と単複同形',
        body: `複数形には -s を付けない語がある。数は多くないので、全部覚えてしまうのが早い。

■ 母音が変わる型
man → men ／ woman → women ／ foot → feet ／ tooth → teeth ／ goose → geese ／ mouse → mice
women は発音も変わり [ˈwɪmɪn] となる（発音問題の定番）。

■ -en／-ren が付く型
child → children ／ ox → oxen

■ 単数形と複数形が同じ型
sheep, deer, fish, Japanese, Chinese, yen, aircraft
例）I saw three sheep in the field.
　　There are many Japanese in this city.
※ fish は種類を区別するときだけ fishes とすることがある。

■ s が付かないのに複数扱いの語
people（人々）… People are waiting outside.
police（警察）… The police are looking for him.
どちらも「集まり」を表すため、動詞は複数形で受ける。person の複数形が people だと考えるとわかりやすい。

★ ポイント：a lot of sheep なのか a lot of sheeps なのかで迷ったら、「その語は -s を付けない仲間か」を先に決める。数えられるかどうかと、-s が付くかどうかは別の判断である。`,
        figureId: 'lf_kokoeigoext01_014',
      },
      {
        heading: '数えられない名詞と、その数え方',
        body: `英語には、そもそも一つ二つと数えない名詞がある。これらは a／an を付けず、複数形にもしない。

■ 代表例
液体・材料：water, milk, coffee, bread, meat, paper, money, rain, snow
抽象的なもの：information, advice, news, work, homework, music, time, help
まとまりでとらえるもの：furniture, baggage, luggage, equipment

■ 数えるときの言い方
a glass of water（コップ一杯の水）
two cups of coffee
a piece of paper／a piece of advice／a piece of information
a slice of bread
a sheet of paper

■ 動詞の一致
数えられない名詞は単数扱いである。
　This information is very useful.（○）
　These informations are ...（×）
news は s が付いているが単数扱いで、No news is good news.（便りのないのはよい便り）ということわざがある。

■ 日本語との差に注意
「宿題がたくさんある」は I have a lot of homework.（× many homeworks）
「助言をもらった」は I got some advice.（× an advice）
「家具を二つ買った」は I bought two pieces of furniture.

⚠ 注意：数えられない名詞には many／few ではなく much／little を使う。How much water do you need? が正しく、How many water は誤りである。数量表現とセットで覚えること。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は歯を2本なくした」を英語にしなさい。',
        wrongAnswer: 'He lost two tooths.',
        trapExplanation: '複数形は -s を付けるという原則が強く働き、不規則変化の語であることを忘れてしまう。tooth は日常語なので、かえって規則どおりに書いてしまいやすい。',
        correctAnswer: 'He lost two teeth.',
        correctExplanation:
          'tooth の複数形は teeth で、母音が変わる型である。同じ仲間に foot → feet、man → men、woman → women、goose → geese、mouse → mice がある。数はごく少ないので、この六語はまとめて暗記しておく。',
      },
      {
        question: '次の文の誤りを直しなさい。Many people is waiting for the bus.',
        wrongAnswer: '誤りはない（people に s が付いていないので単数扱い）',
        trapExplanation: '「語尾に s が付いていれば複数、なければ単数」という見た目の判断をしてしまう。people は形の上では単数に見えるため、be 動詞を is にしてしまう。',
        correctAnswer: 'Many people are waiting for the bus.',
        correctExplanation:
          'people は「人々」という複数の意味を持つ語で、s が付かなくても複数扱いになる。police も同様に The police are ～ とする。逆に news や information は s が付いていても（または量が多くても）単数扱いである。形ではなく語ごとの性質で判断すること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s015',
    subject: 'eigo',
    examType: 'koko',
    title: '三人称単数現在形のつづり',
    description: '-s／-es／y→ies の使い分けと、has・does・goes という特別な形を確認する',
    intro: '主語が he や she になったとたん、動詞にだけ s が付きます。この s は複数の s とは正反対で、「主語が一人のとき」に付くものです。付け方の規則は複数形とほぼ同じですが、has・does・goes という特別な形が三つだけあります。',
    order: 515,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '主語が三人称単数（he, she, it, my father など）で現在の文のとき、動詞に -s／-es を付ける。',
      'つづりの規則は複数形と同じ。s・x・ch・sh・o で終われば -es（passes, teaches, washes, goes）。',
      '「子音字＋y」は ies（studies, tries, carries, flies, cries）。「母音字＋y」はそのまま（plays, says, buys）。',
      '特別な形：have → has、do → does [dʌz]、go → goes [goʊz]。',
      'does／doesn’t／did を使う文では、動詞は原形に戻す（Does he play ～?）。',
    ],
    sections: [
      {
        heading: 'つづりのつくり方',
        body: `現在の文で主語が三人称単数のとき、動詞には -s か -es を付ける。つくり方は名詞の複数形とほぼ同じである。

■ ①原則：-s
plays, likes, runs, works, comes, knows, speaks, lives

■ ②s・x・ch・sh・o で終わる語：-es
passes, mixes, teaches, watches, washes, finishes, goes, does

■ ③子音字＋y：y を i に変えて -es
study → studies ／ try → tries ／ carry → carries ／ fly → flies ／ cry → cries ／ worry → worries
※ 母音字＋y はそのまま：play → plays ／ say → says ／ buy → buys ／ enjoy → enjoys

■ ④特別な形
have → has（形そのものが変わる）
do → does（つづりは -es だが発音は [dʌz]。do [duː] とは母音が変わる）
go → goes（発音は [goʊz]）
be → is

■ 発音
規則は -s の発音と同じで、直前の音で [s]／[z]／[ɪz] に分かれる。
　likes [s]／plays [z]／teaches [ɪz]／washes [ɪz]／passes [ɪz]
says だけは [sez] と特別な発音になるので注意する。

★ ポイント：三人称単数とは「I と you 以外の、一人（一つ）」のこと。my brother, that boy, this book, everyone, everything はすべて三人称単数である。everyone は「みんな」と訳すが単数扱いで、Everyone likes music. となる。`,
      },
      {
        heading: '疑問文・否定文では原形に戻す',
        body: `三単現の s でもっとも多いまちがいは、疑問文・否定文で s を残してしまうことである。

■ 疑問文
Does he play the guitar?（○）
Does he plays the guitar?（×）
does がすでに「三人称単数・現在」を表しているので、後ろの動詞は原形にする。

■ 否定文
She doesnʼt like natto.（○）
She doesnʼt likes natto.（×）

■ 過去形でも同じ
Did he go to school yesterday?（○ go は原形）
He didnʼt went home.（× → didnʼt go）

■ 助動詞のあとも原形
He can plays soccer.（×）→ He can play soccer.
She will comes tomorrow.（×）→ She will come tomorrow.

■ 三単現の s が必要かどうかの判断手順
①その文は現在の文か（過去なら不要）
②主語は三人称単数か（I, you, 複数なら不要）
③助動詞や does／didnʼt があるか（あれば原形）
この三つを順に確認すれば、迷うことはない。

⚠ 注意：主語が長いときに、直前の名詞につられる誤りが多い。The boy with two dogs runs fast. の主語は The boy（単数）なので runs が正しい。dogs に引かれて run としないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。He study English every day.',
        wrongAnswer: 'He studys English every day.',
        trapExplanation: '三単現の s が必要だと気づいても、y で終わる語のつづり変化を忘れて機械的に s だけを足してしまう。study は日常語なので、かえって確認せずに書いてしまう。',
        correctAnswer: 'He studies English every day.',
        correctExplanation:
          'study は「子音字（d）＋y」で終わるので、y を i に変えて -es を付け studies とする。try → tries、carry → carries、fly → flies も同じ。一方 play, say, buy は母音字＋y なので plays, says, buys とそのまま s を付ける。',
      },
      {
        question: '次の文の誤りを直しなさい。Does your sister plays the piano?',
        wrongAnswer: '誤りはない（主語が三人称単数だから plays でよい）',
        trapExplanation: '「主語が三人称単数なら動詞に s」という規則を強く覚えているため、疑問文で does がすでに使われていることを見落として、動詞にも s を残してしまう。',
        correctAnswer: 'Does your sister play the piano?',
        correctExplanation:
          'does が三人称単数・現在であることをすでに示しているので、後ろの動詞は原形 play に戻す。否定文の doesnʼt も同じで She doesnʼt play ～ となる。過去形の did、助動詞の can・will のあとも必ず原形にする。s は文の中で一度だけ、という意識を持つ。',
      },
    ],
  },

  {
    id: 'koko_eigo_s016',
    subject: 'eigo',
    examType: 'koko',
    title: '-ing 形と規則動詞の -ed のつづり',
    description: 'e を落とす・子音字を重ねるという二つの変化を、条件つきで正確に使い分ける',
    intro: 'run は running と n を二つ重ねるのに、visit は visiting のまま。どちらも同じように見えるのに、なぜ片方だけ重ねるのでしょう。ここには「短い母音」と「アクセントの位置」という条件があり、これを知らないと visitting と書いてしまいます。',
    order: 516,
    studyPeriod: '中1',
    targetLevel: 'oyo',
    keyPoints: [
      '原則はそのまま -ing／-ed を付ける（playing, reading, played, worked）。',
      'e で終わる語は e を取って -ing（making, coming, writing, taking, using, having）。',
      '「短母音＋子音字1つ」で終わる語は、子音字を重ねる（running, swimming, sitting, stopped, planned）。',
      '2音節以上でも、アクセントが後ろにあれば重ねる（begin → beginning）。前にあれば重ねない（visit → visiting, open → opening）。',
      '例外：see → seeing、agree → agreeing、lie → lying、die → dying。',
    ],
    sections: [
      {
        heading: '三つのつくり方',
        body: `動詞に -ing や -ed を付けるとき、つづりが変わる場合がある。変化は二種類しかないので、条件をきちんと押さえる。

■ ①そのまま付ける
playing, reading, looking, going, eating, working, studying, watching
played, worked, looked, opened, studied（y→ied は複数形と同じ規則）

■ ②語尾の e を取って付ける
make → making ／ come → coming ／ write → writing ／ take → taking ／ use → using ／ have → having ／ live → living ／ dance → dancing
-ed のほうは e が残るので、-d を足すだけになる（used, lived, danced）。

■ ③子音字を重ねて付ける
条件は「短い母音＋子音字1つ」で終わること。
run → running ／ swim → swimming ／ sit → sitting ／ get → getting ／ put → putting ／ stop → stopping ／ cut → cutting ／ plan → planning ／ begin → beginning
-ed も同じ：stopped, planned, dropped

★ ポイント：③の条件は三つそろって初めて成立する。（1）最後が子音字、（2）その前が母音字1つ、（3）さらにその前が子音字。この形を「子音・母音・子音」と呼ぶ。rain は母音字が二つ（ai）なので raining、help は子音字が二つ（lp）なので helping となる。`,
      },
      {
        heading: 'アクセントで決まる場合と、例外',
        body: `2音節以上の語では、アクセントの位置が重ねるかどうかを決める。

■ アクセントが後ろにある → 重ねる
be-GÍN → beginning ／ oc-CÚR → occurring ／ pre-FÉR → preferring ／ for-GÉT → forgetting

■ アクセントが前にある → 重ねない
VÍS-it → visiting, visited ／ ÓP-en → opening, opened ／ LÍS-ten → listening, listened ／ ÁN-swer → answering, answered ／ HÁP-pen → happening, happened
「短母音＋子音字1つ」という形は満たしていても、アクセントが前にあれば重ねない。visitting・openning は誤りである。

■ -ing の例外
see → seeing ／ agree → agreeing ／ be → being
　語尾が ee のときは e を取らない。
lie → lying ／ die → dying ／ tie → tying
　語尾が ie のときは ie を y に変えて -ing を付ける。

■ 発音との関係
子音字を重ねるのは、母音を短いまま保つためである。stop に ing をそのまま付けて stoping と書くと、マジック e と同じ形になり [stoʊpɪŋ] と読めてしまう。p を重ねることで o が短いままだと示している。つづりの規則には理由がある。

⚠ 注意：-ing 形と現在分詞・動名詞は形が同じである。つづりの規則はどちらでも共通なので、覚え直す必要はない。`,
      },
    ],
    trapExamples: [
      {
        question: 'come の -ing 形を書きなさい。',
        wrongAnswer: 'comeing',
        trapExplanation: '「-ing を付ける」という指示をそのまま実行してしまい、語尾の e を取る規則を適用し忘れる。come は最重要語なので、かえって手が先に動いてしまう。',
        correctAnswer: 'coming',
        correctExplanation:
          '語尾が e の動詞は、e を取ってから -ing を付ける。make → making、write → writing、take → taking、use → using、have → having も同じ。なお、この e は「読まない e」なので、取っても発音は変わらない（coming は [ˈkʌmɪŋ]）。ただし see → seeing のように ee で終わる語は e を取らない。',
      },
      {
        question: 'visit の過去形を書きなさい。',
        wrongAnswer: 'visitted',
        trapExplanation: '「短母音＋子音字1つで終わるなら重ねる」という規則を、1音節の語（stop, plan）と同じように機械的にあてはめてしまう。visit は形の上では条件を満たしているように見える。',
        correctAnswer: 'visited',
        correctExplanation:
          '2音節以上の語では、アクセントが後ろにあるときだけ子音字を重ねる。visit は VÍS-it と前にアクセントがあるので重ねず visited となる。open → opened、listen → listened、happen → happened も同じ。逆に begin（be-GÍN）はアクセントが後ろなので beginning と重ねる。',
      },
    ],
  },

  // ───────────────── 5. 不規則動詞の3変化（s017〜s022） ─────────────────
  {
    id: 'koko_eigo_s017',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞①：全体像と A－A－A 型',
    description: '四つの変化パターンに分けて整理し、原形・過去形・過去分詞が同じ型を覚える',
    intro: 'play → played → played のように -ed を付ければ済む動詞ばかりなら楽なのですが、よく使う動詞ほど不規則に変化します。ただし、ばらばらに見える変化も四つの型に分けられます。型ごとにまとめて覚えると、100語近い不規則動詞が一気に整理できます。',
    order: 517,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '不規則動詞は、原形・過去形・過去分詞の関係で A－A－A／A－B－A／A－B－B／A－B－C の四型に分けられる。',
      'もっとも数が多いのは A－B－B 型（buy-bought-bought など）。',
      'A－A－A 型（三つとも同じ）：cut, put, set, hit, let, shut, cost, hurt, spread。',
      'read は read-read-read でつづりは同じだが、過去形・過去分詞の発音だけ [red] になる。',
      '変化しない型でも、三人称単数現在形の s は必要（He cuts ～）。',
    ],
    sections: [
      {
        heading: '四つの型で整理する',
        body: `動詞の変化は「原形・過去形・過去分詞」の三つで一組になっている。この三つの関係で分類すると、不規則動詞は次の四型になる。

■ A－A－A 型（三つとも同じ）
cut － cut － cut ／ put － put － put ／ set － set － set
■ A－B－A 型（過去分詞が原形に戻る）
come － came － come ／ run － ran － run
■ A－B－B 型（過去形と過去分詞が同じ）
buy － bought － bought ／ make － made － made
■ A－B－C 型（三つとも異なる）
eat － ate － eaten ／ go － went － gone

中学で学ぶ不規則動詞のうち、もっとも数が多いのは A－B－B 型で、およそ半分を占める。次いで A－B－C 型が多く、A－A－A 型と A－B－A 型は合わせても二割ほどである。

■ なぜ型で覚えるのか
「buy の過去分詞は？」と一語ずつ思い出すのではなく、「buy は A－B－B だから過去形と同じ bought」と型から引き出せるようにする。とくに現在完了（have＋過去分詞）や受け身（be＋過去分詞）では、過去形と過去分詞を取りちがえた瞬間に文が壊れるため、型の意識が効いてくる。

★ ポイント：不規則動詞表は「原形→過去形→過去分詞」の順に、声に出して三つ続けて言う練習が有効である。目で見て思い出すのではなく、口が勝手に続きを言う状態を作る。`,
        figureId: 'lf_kokoeigoext01_017',
      },
      {
        heading: 'A－A－A 型を覚える',
        body: `もっとも楽に見えるが、実は文中で時制を見分けにくいという難しさがある型である。

■ 代表語（すべて同じ形のまま）
cut（切る）／put（置く）／set（置く・設定する）／hit（打つ）／let（〜させる）／shut（閉める）／cost（費用がかかる）／hurt（傷つける）／spread（広げる）／read（読む）

■ read だけは発音が変わる
read － read － read
原形は [riːd]、過去形・過去分詞は [red]。つづりが同じなので、時を表す語句や文の形で判断する。
例）I read a book every night.（[riːd]）
　　I read this book last month.（[red]）
　　I have read this book twice.（[red]）

■ 時制の見分け方
形が変わらないので、次の手がかりを使う。
①時を表す語句：yesterday, last week, ago があれば過去形。
②主語が三人称単数で s が付いていれば現在形（He cuts the paper.）。s がなければ過去形（He cut the paper.）。
③have／has のあとにあれば過去分詞。

⚠ 注意：cut が「形が変わらない動詞」だからといって、三人称単数現在形の s まで不要になるわけではない。He cuts vegetables every morning. のように s は必要である。「変化しない」のは時制による変化のことであって、主語による一致は別の話である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。I cutted my finger yesterday.',
        wrongAnswer: '誤りはない（過去形なので -ed を付ける）',
        trapExplanation: '規則動詞の作り方が身についているぶん、知らない動詞や短い動詞にも自動的に -ed を付けてしまう。cut は短くて簡単に見えるので、不規則動詞だと意識されにくい。',
        correctAnswer: 'I cut my finger yesterday.',
        correctExplanation:
          'cut は A－A－A 型の不規則動詞で、原形・過去形・過去分詞がすべて cut である。同じ仲間に put, set, hit, let, shut, cost, hurt, spread がある。過去形だと示すのは yesterday という語句のほうであり、動詞の形は変えない。',
      },
      {
        question: '次の文の誤りを直しなさい。My father cut the grass every Sunday.',
        wrongAnswer: '誤りはない（cut は形が変わらない動詞だから）',
        trapExplanation: '「cut は変化しない」と覚えたために、三人称単数現在形の s まで不要だと考えてしまう。every Sunday という現在の習慣を表す語句を見落としやすい。',
        correctAnswer: 'My father cuts the grass every Sunday.',
        correctExplanation:
          'every Sunday があるので現在の文であり、主語 My father は三人称単数なので cuts とする。A－A－A 型で変化しないのは「時制による変化」だけで、主語との一致による s は別に必要である。puts, hits, lets, costs も同じように s を付ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s018',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞②：A－B－A 型と -ought／-aught 型',
    description: 'come-came-come のように原形に戻る型と、bought・caught の仲間をまとめる',
    intro: '現在完了の文で He has came here. と書いてしまう人がとても多くいます。came は過去形で、過去分詞は come に戻るからです。「過去形と過去分詞は別物」という当たり前のことが、形が似ている動詞では急にあやしくなります。',
    order: 518,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'A－B－A 型：come-came-come、become-became-become、run-ran-run。過去分詞は原形に戻る。',
      '現在完了で has came とするのは誤り。has come が正しい。',
      '-ought 型：buy-bought、bring-brought、think-thought、fight-fought。',
      '-aught 型：catch-caught、teach-taught。つづりは au になる。',
      '発音はどちらも [ɔːt]。つづりだけが ou と au に分かれる。',
    ],
    sections: [
      {
        heading: 'A－B－A 型：過去分詞が原形に戻る',
        body: `数は少ないが、使用頻度がきわめて高い動詞ばかりなので、まちがえると目立つ型である。

■ 代表語
come － came － come（来る）
become － became － become（〜になる）
run － ran － run（走る）

■ 使い分けの確認
He came here yesterday.（過去形：yesterday がある）
He has come here three times.（過去分詞：has のあと）
She has become a doctor.（過去分詞）
I have run ten kilometers.（過去分詞）

■ 過去形と過去分詞を取りちがえると
「He has came here.」は、has のあとに過去形を置いてしまった誤りである。現在完了は必ず have／has ＋ 過去分詞であり、過去形は入れない。同じく受け身の be ＋ 過去分詞でも過去形は使えない。

■ 似ているが型がちがう語
run － ran － run（A－B－A）
begin － began － begun（A－B－C）
どちらも i／a と変化して似ているが、begin の過去分詞は begun で原形には戻らない。ここは次課で扱う i－a－u 型との境目になる。

★ ポイント：現在完了・受け身の文を作るときは、必ず「過去分詞の欄」を思い出す。原形－過去形－過去分詞の三つを声に出して並べる練習が、そのまま得点につながる。`,
      },
      {
        heading: '-ought／-aught 型',
        body: `A－B－B 型のなかで、過去形・過去分詞が [ɔːt] という同じ音になるグループである。つづりが ou と au に分かれるので、書き取りで狙われる。

■ -ought のグループ
buy － bought － bought（買う）
bring － brought － brought（持ってくる）
think － thought － thought（考える）
fight － fought － fought（戦う）
seek － sought － sought（探す・高校範囲）

■ -aught のグループ
catch － caught － caught（つかまえる）
teach － taught － taught（教える）

■ 覚え方
「教えるとつかまえるは au、それ以外は ou」と、少数派の -aught のほうを覚えるほうが効率がよい。teach と catch はどちらも語尾に ch を持つ、と結びつけてもよい。

■ 発音
bought, brought, thought, caught, taught はすべて [ɔːt]。gh は読まない。
また、これらは all, small, water, daughter, autumn と同じ [ɔː] の仲間なので、発音問題ではまとめて出題される。

■ 意味の確認
thought は「考えた」という動詞のほかに「考え・思想」という名詞にもなる（deep thought）。文中での働きを確認すること。

⚠ 注意：bring の過去形を brang としてしまう誤りが多い。sing － sang や ring － rang との類推だが、bring は brought である。「bring は音が似ていても仲間ではない」と意識しておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。He has came to Japan three times.',
        wrongAnswer: '誤りはない（come の過去形は came だから）',
        trapExplanation: '過去形の came は使い慣れているうえ、「過去のことだから came」と考えてしまう。現在完了では過去分詞が必要であることと、come の過去分詞が原形と同じ形であることの二つを同時に忘れる。',
        correctAnswer: 'He has come to Japan three times.',
        correctExplanation:
          'come は A－B－A 型で、come － came － come と変化する。has のあとには過去分詞が来るので come が正しい。become（become － became － become）、run（run － ran － run）も同じ型である。現在完了・受け身では必ず過去分詞の欄を確認する。',
      },
      {
        question: 'buy の過去形を書きなさい。',
        wrongAnswer: 'baught',
        trapExplanation: 'catch → caught、teach → taught を先に覚えていると、同じ [ɔːt] の音を持つ buy にも au のつづりを当てはめてしまう。音が同じなので、つづりだけをまちがえるという形で誤りが出る。',
        correctAnswer: 'bought',
        correctExplanation:
          '発音はどちらも [ɔːt] だが、つづりは ou と au に分かれる。ou になるのは buy － bought、bring － brought、think － thought、fight － fought。au になるのは catch － caught と teach － taught の二語だけである。少数派の au 側を先に覚えると混乱しない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s019',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞③：A－B－B 型（-t／-d に変わる仲間）',
    description: 'build-built、send-sent、feel-felt など、語尾が t や d に変わる型をまとめる',
    intro: '不規則動詞のなかで最大のグループが、過去形と過去分詞が同じになる型です。「二つ覚えれば一つで済む」ぶん負担は軽いのですが、数が多いだけに似た形が混ざります。語尾の変わり方でさらに小分けにすると、まとめて頭に入ります。',
    order: 519,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '語尾の d が t になる型：build-built、send-sent、spend-spent、lend-lent。',
      '母音が短くなって t が付く型：feel-felt、keep-kept、sleep-slept、mean-meant、leave-left。',
      '母音が変わるだけの型：meet-met、sit-sat、stand-stood、find-found、win-won。',
      'つづりが大きく変わる型：say-said、pay-paid、sell-sold、tell-told、hear-heard、make-made。',
      'find（見つける）の found と、found（設立する）－founded は別の動詞。',
    ],
    sections: [
      {
        heading: '語尾が -t になるグループ',
        body: `A－B－B 型のなかでも、語尾が t に変わるものは数が多く、まとめて覚えやすい。

■ d が t に変わるだけ
build － built － built（建てる）
send － sent － sent（送る）
spend － spent － spent（過ごす・使う）
lend － lent － lent（貸す）
bend － bent － bent（曲げる）

■ 母音が短くなって t が付く
feel － felt － felt（感じる）
keep － kept － kept（保つ）
sleep － slept － slept（眠る）
sweep － swept － swept（掃く）
mean － meant － meant（意味する）※発音 [ment]
leave － left － left（去る・残す）
lose － lost － lost（失う・負ける）※発音 [lɔːst]

■ 母音が変わるだけ
meet － met － met（会う）
sit － sat － sat（座る）
stand － stood － stood（立つ）
understand － understood － understood（理解する）
find － found － found（見つける）
win － won － won（勝つ）※発音 [wʌn]、one と同じ音
hold － held － held（持つ・開催する）
get － got － got（英）／gotten（米）

★ ポイント：mean [miːn] → meant [ment]、lose [luːz] → lost [lɔːst] のように、母音の発音が大きく変わる語がある。つづりだけでなく音も一緒に覚えること。発音問題ではこの母音の変化が出題される。`,
      },
      {
        heading: 'つづりが大きく変わるグループと、まぎらわしい語',
        body: `もとの形から離れた形になるものは、一語ずつ覚えるしかない。数は限られている。

■ 大きく変わる代表語
say － said － said（[sed] と発音）
pay － paid － paid（つづりは payed ではない）
lay － laid － laid
sell － sold － sold ／ tell － told － told
hear － heard － heard（[hɜːrd]）
make － made － made ／ have － had － had
buy － bought － bought（前課）
hang － hung － hung（掛ける）
teach － taught － taught（前課）
catch － caught － caught（前課）

■ 発音に注意する語
said [sed]（say [seɪ] とは母音がちがう）
heard [hɜːrd]（hear [hɪər] とは母音がちがう）
meant [ment]（mean [miːn] とは母音がちがう）
これらは「原形と過去形で母音がちがう」ため、発音問題の常連である。

■ 同じ形でも別の動詞
find（見つける）－ found － found
found（設立する）－ founded － founded
つづりが同じ found でも、前者は find の過去形、後者は「設立する」という別の動詞の原形である。
例）I found my key.（見つけた）
　　The school was founded in 1900.（設立された）

wind（巻く）[waɪnd] － wound － wound
wound（傷つける）[wuːnd] － wounded － wounded
これも同じ関係である。

⚠ 注意：pay の過去形を payed と書く誤りが非常に多い。play → played との混同である。pay は paid、lay は laid、say は said と、y が id に変わる仲間としてまとめて覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。I sended her an email last night.',
        wrongAnswer: '誤りはない（過去形なので -ed を付ける）',
        trapExplanation: 'send は短くて規則動詞のように見えるうえ、end → ended という規則動詞と形が近いため、そのまま -ed を付けてしまう。',
        correctAnswer: 'I sent her an email last night.',
        correctExplanation:
          'send は send － sent － sent と変化する不規則動詞で、語尾の d が t になる型である。同じ仲間に build － built、spend － spent、lend － lent、bend － bent がある。「-nd で終わる動詞は -nt になる」とまとめて覚えるとよい。',
      },
      {
        question: '次の文の found は、find（見つける）の過去形である。正しいか。The company was founded in 1950.',
        wrongAnswer: '正しい（found は find の過去形だから「見つけられた」の意味）',
        trapExplanation: 'found という形を見た瞬間に find の過去形だと判断してしまう。実際には -ed が付いた founded であり、まったく別の動詞であることに気づかない。',
        correctAnswer: '誤り（founded は found「設立する」の過去分詞）',
        correctExplanation:
          'find（見つける）は find － found － found と変化するが、found（設立する）は規則動詞で found － founded － founded と変化する。文中の形は founded なので、こちらは「設立する」のほうであり、was founded で「設立された」となる。同じ関係に wind（巻く）－ wound と wound（傷つける）－ wounded がある。',
      },
    ],
  },

  {
    id: 'koko_eigo_s020',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞④：A－B－C 型（i－a－u の仲間）',
    description: 'sing-sang-sung のように母音が i→a→u と規則的に動くグループを覚える',
    intro: 'sing – sang – sung、drink – drank – drunk。母音が i → a → u と階段のように動きます。ばらばらに覚えると混乱しますが、この音の並びに気づけば、一つ思い出せば残りも引き出せます。数も限られているので、まとめて片づけてしまいましょう。',
    order: 520,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'i → a → u と母音が動く型：sing-sang-sung、ring-rang-rung、drink-drank-drunk。',
      'swim-swam-swum、begin-began-begun、sink-sank-sunk も同じ型。',
      'run-ran-run は i を含まず、過去分詞が原形に戻る A－B－A 型なので別扱い。',
      '現在完了・受け身では u の形（過去分詞）を使う。I have swum ～。',
      'sing の名詞形は song のように、母音が変わる派生語もある。',
    ],
    sections: [
      {
        heading: 'i－a－u 型をまとめて覚える',
        body: `A－B－C 型のなかで、もっともきれいな規則性を持つのがこのグループである。母音が i → a → u と動く。

■ 代表語
sing － sang － sung（歌う）
ring － rang － rung（鳴る）
drink － drank － drunk（飲む）
swim － swam － swum（泳ぐ）
begin － began － begun（始まる）
sink － sank － sunk（沈む）
spring － sprang － sprung（跳ねる・高校範囲）

■ 使い分け
現在：I swim every Sunday.
過去：I swam in the sea last summer.
現在完了：I have swum in this river before.
受け身：The song was sung by many people.

■ 音でつかむ
sing／sang／sung を続けて言うと、「イ・ア・ア」ではなく「イ・ア・ウ」と三段に動くのがわかる。この三段の動きを口で覚えてしまえば、drink や swim にもそのまま応用できる。

■ ing で終わる形と混同しない
sing は原形からすでに -ing で終わっているが、これは進行形の -ing とは無関係である。進行形にすると singing となる。同じく ring → ringing、bring → bringing。

★ ポイント：この型は中学範囲では六語ほどしかないので、「i－a－u の六語」としてまとめて暗記してしまうのが最短である。まとめて覚えると、次に見る -en 型との区別もつけやすくなる。`,
      },
      {
        heading: '似ているが型がちがう動詞',
        body: `i－a－u 型と混同しやすい動詞がある。境目をはっきりさせておく。

■ run（A－B－A 型）
run － ran － run
過去形は ran で i－a の動きは同じだが、過去分詞は原形に戻る。runned・run－ran－run の三つ目を「run」と正しく言えるかがポイントである。
例）I have run in three marathons.（○）
　　I have ran in three marathons.（×）

■ bring（A－B－B 型）
bring － brought － brought
ring や sing と語尾が同じ -ing でも、変化はまったくちがう。brang は存在しない。

■ think（A－B－B 型）
think － thought － thought
drink や sink と語尾が -ink で同じでも、think だけは -ought 型である。

■ win（A－B－B 型）
win － won － won
swim と語形が近いが、過去形と過去分詞が同じ won [wʌn] になる。

■ 整理
語尾が同じでも型は同じとは限らない。
　-ing：sing（i-a-u）／bring（A-B-B）
　-ink：drink, sink（i-a-u）／think（A-B-B）
　-im／-in：swim（i-a-u）／win（A-B-B）／begin（i-a-u）／run（A-B-A）

⚠ 注意：sink の過去分詞は sunk だが、形容詞として「沈んだ」というときは sunken を使うことがある（a sunken ship）。中学範囲では sunk を覚えておけばよい。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。I have swam in this lake many times.',
        wrongAnswer: '誤りはない（swim の過去形は swam だから）',
        trapExplanation: '過去形の swam は見慣れているが、過去分詞の swum は日常であまり目にしないため、現在完了でも過去形を使ってしまう。i－a－u の三段目を覚えていないことが原因である。',
        correctAnswer: 'I have swum in this lake many times.',
        correctExplanation:
          'swim は swim － swam － swum と変化する。have のあとには過去分詞が来るので swum が正しい。同じ型の sing － sang － sung、drink － drank － drunk、begin － began － begun でも、現在完了では三段目の u の形を使う。',
      },
      {
        question: 'run は begin と同じ i－a－u 型なので、過去分詞は run ではなく「run の u 形」になる。正しいか。',
        wrongAnswer: '正しい（begin － began － begun と同じように変化する）',
        trapExplanation: '過去形が ran と a になるので、begin － began と同じ型に見えてしまう。語尾が -n で共通していることも、同じ仲間だという印象を強める。',
        correctAnswer: '誤り（run － ran － run で、過去分詞は原形と同じ run）',
        correctExplanation:
          'run は A－B－A 型で、過去分詞が原形に戻る。I have run ten kilometers. が正しく、I have ran とはしない。同じ A－B－A 型に come － came － come、become － became － become がある。過去形が a になるからといって、必ず u に進むわけではない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s021',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞⑤：A－B－C 型（-en が付く仲間）',
    description: 'eat-ate-eaten、write-wrote-written など、過去分詞に -en が付く型を覚える',
    intro: '過去分詞に -en が付く動詞は、現在完了と受け身で必ず必要になります。しかも take、write、speak、break といった超頻出語ばかり。ここを落とすと、長文でも英作文でも同じ場所で失点し続けます。逆にいえば、まとめて固めれば効果がすぐ出る場所です。',
    order: 521,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '過去分詞に -en／-n が付く型：eat-ate-eaten、give-gave-given、take-took-taken。',
      'o→o→o＋en の型：write-wrote-written、speak-spoke-spoken、break-broke-broken、choose-chose-chosen。',
      'ew→own の型：know-knew-known、grow-grew-grown、throw-threw-thrown、fly-flew-flown。',
      '最重要の四語：see-saw-seen、do-did-done、go-went-gone、be-was/were-been。',
      'have been to（行ったことがある）と have gone to（行ってしまった）は意味がちがう。',
    ],
    sections: [
      {
        heading: '-en が付く主な型',
        body: `過去分詞に -en または -n が付くグループは、現在完了と受け身で必ず使う。型ごとに整理する。

■ 母音が変わって -en が付く
eat － ate － eaten（食べる）
give － gave － given（与える）
take － took － taken（取る）
forget － forgot － forgotten（忘れる）
hide － hid － hidden（隠す）

■ o の形に -en が付く
write － wrote － written（書く。t を重ねる）
speak － spoke － spoken（話す）
break － broke － broken（こわす）
choose － chose － chosen（選ぶ）
steal － stole － stolen（盗む）
drive － drove － driven（運転する）
ride － rode － ridden（乗る。d を重ねる）
rise － rose － risen（のぼる）
freeze － froze － frozen（こおる）

■ ew → own の型
know － knew － known（知っている）
grow － grew － grown（育つ）
throw － threw － thrown（投げる）
fly － flew － flown（飛ぶ）
blow － blew － blown（吹く）
draw － drew － drawn（描く）

■ そのほか
fall － fell － fallen（落ちる）
wear － wore － worn（着ている）
tear － tore － torn（裂く）
show － showed － shown（見せる。過去形は規則変化）

★ ポイント：written と ridden は子音字を重ねる。writen・riden は誤りである。つづりの細部まで書いて確認すること。`,
      },
      {
        heading: '最重要の四語と、have been／have gone',
        body: `使用頻度がとくに高く、まちがえると文全体が壊れる四語を確実にする。

■ 四語の変化
see － saw － seen（見る）
do － did － done（する）
go － went － gone（行く）
be － was／were － been（である）

例）I have seen that movie twice.
　　He has done his homework.
　　She has gone to Canada.
　　I have been busy since last week.

■ have been to と have gone to
have been to ～：「〜へ行ったことがある」（経験）／「〜へ行ってきたところだ」
have gone to ～：「〜へ行ってしまった（今ここにいない）」
例）I have been to Kyoto three times.（京都へ三回行ったことがある）
　　He has gone to Kyoto.（彼は京都へ行ってしまった＝今ここにいない）
主語が I や we のときに have gone to を使うと「自分はここにいない」という奇妙な意味になるので、経験を表すときは必ず have been to を使う。

■ go の過去形 went
went はもともと wend という別の動詞の過去形が、go の過去形として使われるようになったものである。だから go とまったく似ていない。理屈で結びつけようとせず、そのまま覚える。

⚠ 注意：受け身でも過去分詞が必要である。The window was broken by the boy.（broke ではない）／This letter was written in English.（wrote ではない）。過去形と過去分詞を取りちがえると受け身が作れない。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。I have went to Osaka last year.',
        wrongAnswer: '誤りはない（go の過去形は went だから）',
        trapExplanation: 'have のあとに過去形を置いてしまう典型的な誤りである。さらに last year という過去を表す語句があるため、現在完了と過去形の使い分け自体も混乱している。',
        correctAnswer: 'I went to Osaka last year.（または I have been to Osaka.）',
        correctExplanation:
          'last year のようにはっきり過去を指す語句があるときは、現在完了ではなく過去形を使う。したがって I went to Osaka last year. が正しい。現在完了で「行ったことがある」と言いたいときは I have been to Osaka. とする。have gone to は「行ってしまって今ここにいない」の意味になるので、主語が I のときは使えない。',
      },
      {
        question: 'write の過去分詞を書きなさい。',
        wrongAnswer: 'writen',
        trapExplanation: '「-en を付ける」という規則は覚えていても、t を重ねることを忘れる。speak → spoken、break → broken では重ねないため、同じつもりで書いてしまう。',
        correctAnswer: 'written',
        correctExplanation:
          'write － wrote － written と、過去分詞では t を重ねる。同じく ride － rode － ridden、hide － hid － hidden、forget － forgot － forgotten も子音字を重ねる。これは短い母音を保つためのつづりの規則（-ing 形で running と重ねるのと同じ理屈）である。書いて確認する習慣をつける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s022',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞⑥：まぎらわしいペアの総整理',
    description: 'lie／lay、rise／raise、fall／fell など、意味も変化も似ている動詞を区別する',
    intro: '「横になる」の lie と「置く」の lay。過去形にすると lie の過去形が lay になるので、形が完全に重なってしまいます。自動詞と他動詞のちがいを押さえないと、どちらを使うか永久に決まりません。難関校が好んで出すのは、まさにこの重なりの部分です。',
    order: 522,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      'lie（横になる・自動詞）lie-lay-lain／lay（置く・他動詞）lay-laid-laid／lie（うそをつく）lie-lied-lied。',
      'rise（のぼる・自動詞）rise-rose-risen／raise（上げる・他動詞）raise-raised-raised。',
      '自動詞は目的語をとらない、他動詞は必ず目的語をとる、という形の差で見分ける。',
      'find（見つける）-found／found（設立する）-founded は別の動詞。',
      'fall（落ちる）fall-fell-fallen／feel（感じる）feel-felt-felt はつづりも意味も別。',
    ],
    sections: [
      {
        heading: 'lie と lay、rise と raise',
        body: `意味が似ているうえに変化形が重なるため、もっともまちがえやすい組である。判断の決め手は「目的語をとるかどうか」である。

■ lie と lay
lie（横になる・ある）自動詞　lie － lay － lain　-ing 形は lying
lay（置く・産む）他動詞　　　lay － laid － laid　-ing 形は laying
lie（うそをつく）自動詞　　　lie － lied － lied

例）I lie on the bed every afternoon.（横になる）
　　I lay on the bed yesterday.（横になった＝lie の過去形）
　　I laid the book on the desk.（本を置いた＝lay の過去形）
　　He lied to me.（うそをついた）

lie の過去形が lay と同じつづりになるのが混乱のもとである。文中に目的語（〜を）があるかどうかで判断する。「本を」置いたなら lay、「自分が」横になったなら lie。

■ rise と raise
rise（のぼる・上がる）自動詞　rise － rose － risen
raise（上げる・育てる）他動詞　raise － raised － raised

例）The sun rises in the east.（太陽がのぼる。目的語なし）
　　He raised his hand.（手を上げた。目的語 his hand あり）
　　Prices have risen.（物価が上がった）
　　The company raised prices.（会社が値上げした）

★ ポイント：自動詞（rise, lie）は不規則変化、他動詞（raise, lay）は規則変化に近い形（-ed／-aid）になる、という傾向がある。「自分が動くほうが不規則」と覚えるとよい。`,
        figureId: 'lf_kokoeigoext01_022',
      },
      {
        heading: 'つづりが重なる動詞・意味が近い動詞',
        body: `そのほか、入試で問われる混同しやすい組をまとめる。

■ 同じつづりだが別の動詞
find（見つける）－ found － found
found（設立する）－ founded － founded
wind（巻く）[waɪnd] － wound － wound
wound（傷つける）[wuːnd] － wounded － wounded
lie（横になる）－ lay － lain
lay（置く）－ laid － laid

■ つづりが似ている別の動詞
fall（落ちる）－ fell － fallen
feel（感じる）－ felt － felt
fill（満たす）－ filled － filled
例）Leaves fall in autumn.／I felt tired.／He filled the glass with water.

lose（失う・負ける）[luːz] － lost － lost
loose（ゆるい）は形容詞 [luːs]。動詞ではない。

hang（掛ける）－ hung － hung
hang（絞首刑にする）－ hanged － hanged（意味によって変化がちがう）

sit（座る）－ sat － sat（自動詞）
set（置く）－ set － set（他動詞）
例）Please sit down.／He set the vase on the table.

■ 発音が同じで意味が別
read の過去形 read [red] と、色の red
won（win の過去形）[wʌn] と、one [wʌn]
知っていると、リスニングや発音問題で迷わない。

⚠ 注意：これらの組は「日本語訳が似ている」ことが混乱の原因である。訳ではなく、目的語をとるかどうか、つまり文の形で覚えること。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。He rose his hand to ask a question.',
        wrongAnswer: '誤りはない（rise の過去形は rose だから）',
        trapExplanation: '「上げる」という日本語訳から rise を選んでしまう。rise の過去形 rose は形も覚えやすいため、目的語 his hand が続いていることに気づかない。',
        correctAnswer: 'He raised his hand to ask a question.',
        correctExplanation:
          'rise は「（自分が）のぼる・上がる」という自動詞で、目的語をとらない（The sun rises.）。「〜を上げる」と目的語をとるのは他動詞の raise で、raise － raised － raised と規則的に変化する。his hand という目的語があるので raised が正しい。訳ではなく、目的語の有無で判断する。',
      },
      {
        question: '「昨夜、私は9時にベッドに横になった」を英語にしなさい。',
        wrongAnswer: 'I laid on the bed at nine last night.',
        trapExplanation: 'lay という形を「横になる」と覚えていると、その過去形として laid を選んでしまう。実際には lay には「横になる（lie の過去形）」と「置く（原形）」の二つの立場があり、これを取りちがえている。',
        correctAnswer: 'I lay on the bed at nine last night.',
        correctExplanation:
          '「横になる」は自動詞の lie で、lie － lay － lain と変化する。したがって過去形は lay。一方 laid は他動詞 lay（〜を置く）の過去形なので、I laid the book on the bed.（本を置いた）のように目的語が必要になる。目的語がなければ lie の系列、あれば lay の系列と判断する。',
      },
    ],
  },

  // ───────────── 6. 派生語（接頭辞・接尾辞で品詞が変わる）（s023〜s027） ─────────────
  {
    id: 'koko_eigo_s023',
    subject: 'eigo',
    examType: 'koko',
    title: '派生語①：名詞をつくる接尾辞',
    description: '-tion／-ment／-ness／-ity／-th を使って、動詞・形容詞から名詞を作る',
    intro: '英語の語彙は、一語ずつ丸暗記するより「部品の組み合わせ」で覚えるほうがずっと効率的です。decide に -sion を付ければ decision、kind に -ness を付ければ kindness。語尾を見ただけで品詞がわかるようになると、長文で知らない語に出会っても、文の中での役割は読めるようになります。',
    order: 523,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '-tion／-sion：動詞から名詞（invent→invention、decide→decision、discuss→discussion）。',
      '-ment：動詞から名詞（move→movement、develop→development、agree→agreement）。',
      '-ness：形容詞から名詞（kind→kindness、happy→happiness、dark→darkness）。',
      '-ity／-ty：形容詞から名詞（able→ability、real→reality、safe→safety）。',
      '-th：形容詞から名詞（long→length、strong→strength、wide→width、deep→depth）。high→height は不規則。',
    ],
    sections: [
      {
        heading: '動詞から名詞をつくる',
        body: `動詞に語尾を付けて名詞にする形は、入試の語形変化問題でもっとも出題される。

■ -tion／-ation／-sion
act → action ／ invent → invention ／ inform → information ／ invite → invitation
communicate → communication ／ introduce → introduction ／ produce → production
express → expression ／ translate → translation ／ celebrate → celebration
decide → decision ／ discuss → discussion ／ conclude → conclusion ／ permit → permission

つづりの変化に注意する。
　decide → decision（de を落とすのではなく、de-ci-de の最後の de が sion になる）
　produce → production（uce → uction）
　explain → explanation（ai が a に減る）
　pronounce → pronunciation（ou が u に減る。最頻出）

■ -ment
move → movement ／ develop → development ／ agree → agreement ／ govern → government
enjoy → enjoyment ／ excite → excitement ／ improve → improvement ／ judge → judgment
-ment はもとの語のつづりをほとんど変えないので、比較的まちがえにくい。ただし government の n は落としやすい。

■ -ance／-ence
important → importance ／ different → difference ／ silent → silence ／ appear → appearance
perform → performance ／ exist → existence

★ ポイント：名詞形を答える問題では、意味だけでなくつづりの細部が採点対象になる。pronunciation, government, difference の三語はとくに落としやすいので、書いて覚えること。`,
      },
      {
        heading: '形容詞から名詞をつくる',
        body: `形容詞から名詞を作る語尾は -ness と -ity（-ty）が中心で、そこに少数の -th が加わる。

■ -ness（もっとも規則的）
kind → kindness ／ dark → darkness ／ ill → illness ／ sad → sadness ／ weak → weakness
kind → kindness のようにそのまま付けるのが基本だが、「子音字＋y」で終わる語は y を i に変える。
　happy → happiness ／ busy → business ／ lonely → loneliness

■ -ity／-ty
able → ability ／ real → reality ／ active → activity ／ popular → popularity
possible → possibility ／ safe → safety ／ cruel → cruelty ／ difficult → difficulty
able → ability では e が落ちて i になる点に注意する。

■ -th（数は少ないが頻出）
long → length ／ strong → strength ／ wide → width ／ deep → depth ／ warm → warmth ／ true → truth ／ grow → growth
long の o が e に、strong の o が e に変わるなど、母音まで変化する。つづりを一語ずつ確認すること。

■ 不規則な名詞形
high → height（[haɪt] と発音。highth ではない）
poor → poverty ／ young → youth ／ wise → wisdom ／ free → freedom
これらは規則から外れるので個別に覚える。

■ 動詞・形容詞と同形の名詞
work, study, help, change, answer, rain, snow, water は、動詞としても名詞としても同じ形で使う。「名詞形を答えよ」と言われて無理に語尾を付けないこと。

⚠ 注意：長さ・強さ・幅・深さ・高さは、まとめて出題されやすい。length, strength, width, depth, height の五語を一組で覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: 'decide の名詞形を書きなさい。',
        wrongAnswer: 'decidion',
        trapExplanation: '「-tion を付ける」という規則だけを覚えていると、もとの語のつづりをそのまま残して語尾だけを足してしまう。invention（invent＋ion）が正しく作れるぶん、同じやり方を当てはめてしまう。',
        correctAnswer: 'decision',
        correctExplanation:
          'decide は語尾の -de が -sion に置きかわって decision となる。同じく conclude → conclusion、permit → permission、discuss → discussion。-tion 型（invention, action）と -sion 型（decision, discussion）があり、d や s で終わる動詞は -sion になりやすい。もとの語のつづりが変わる語は、書いて確認する。',
      },
      {
        question: 'high の名詞形（「高さ」）を書きなさい。',
        wrongAnswer: 'highness（または highth）',
        trapExplanation: 'long → length、strong → strength と同じ型だと考えて -th を付けたり、形容詞から名詞なら -ness だという規則をあてはめてしまう。実際にはどちらでもない不規則な形である。',
        correctAnswer: 'height',
        correctExplanation:
          'high の名詞形は height で、発音も [haɪt] と特別である。長さ・強さ・幅・深さは length, strength, width, depth と -th 型になるが、高さだけは height になる。この五語は一組で問われることが多いので、height を例外として意識して覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s024',
    subject: 'eigo',
    examType: 'koko',
    title: '派生語②：人・職業を表す接尾辞',
    description: '-er／-or／-ist／-ian の使い分けと、国名から作る「〜人」の形をまとめる',
    intro: 'teach に -er を付ければ teacher。ではピアノを弾く人は pianoer でしょうか。実際は pianist です。人を表す語尾は四種類あり、どれが付くかは語ごとに決まっています。国名から作る「〜人」も同じで、まとめて整理しておく価値があります。',
    order: 524,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '-er：動詞から（teach→teacher、sing→singer、write→writer、run→runner）。',
      '-or：動詞から（act→actor、visit→visitor、invent→inventor、direct→director）。',
      '-ist：名詞から（art→artist、science→scientist、piano→pianist、novel→novelist）。',
      '-ian：名詞から（music→musician、magic→magician、library→librarian、history→historian）。',
      '国名＋-ese／-ish／-an：Japanese, English, American, Canadian, Italian。Japanese は複数形も同じ。',
    ],
    sections: [
      {
        heading: '四つの語尾の使い分け',
        body: `「〜する人」を表す語尾は四つある。どれが付くかは語ごとに決まっているので、代表例で覚える。

■ -er（動詞に付く。もっとも数が多い）
teach → teacher ／ sing → singer ／ play → player ／ write → writer ／ drive → driver
speak → speaker ／ work → worker ／ farm → farmer ／ report → reporter
つづりの変化に注意：run → runner（子音字を重ねる）／ write → writer（e を取る）

■ -or（動詞に付く。ラテン語系の語）
act → actor ／ visit → visitor ／ invent → inventor ／ direct → director
translate → translator ／ edit → editor ／ sail → sailor
doctor, professor, author も -or 型の語である。

■ -ist（名詞に付く。学問・芸術・主義）
art → artist ／ science → scientist ／ piano → pianist ／ violin → violinist
novel → novelist ／ journal → journalist ／ tour → tourist ／ special → specialist
science → scientist、piano → pianist では、もとの語の語尾が落ちる点に注意する。

■ -ian（名詞に付く。-ic や -y で終わる語が多い）
music → musician ／ magic → magician ／ library → librarian ／ history → historian
politics → politician ／ electric → electrician ／ mathematics → mathematician

★ ポイント：迷ったら「動詞なら -er／-or、名詞なら -ist／-ian」という大きな区分を思い出す。sing（動詞）→ singer、piano（名詞）→ pianist という対比で覚えるとよい。`,
      },
      {
        heading: '国名から作る「〜人」「〜語」',
        body: `国名から作る語も、語尾によって三つに分かれる。複数形の作り方まで含めて確認する。

■ -ese 型（複数形も同じ形）
Japan → Japanese ／ China → Chinese ／ Portugal → Portuguese ／ Vietnam → Vietnamese
例）There are three Japanese in this class.（× three Japaneses）

■ -an／-ian 型（複数形は -s）
America → American → Americans
Canada → Canadian → Canadians
Italy → Italian → Italians
Australia → Australian → Australians
India → Indian → Indians
Germany → German → Germans
Korea → Korean → Koreans
Brazil → Brazilian → Brazilians
Russia → Russian → Russians
Mexico → Mexican → Mexicans

■ -ish／-ch 型（人を表すときは the ＋ 形容詞、または man／woman を付ける）
England → English → an Englishman／two Englishmen
France → French → a Frenchman／two Frenchmen
Spain → Spanish → a Spaniard（Spanish は言語・形容詞）

■ 言語名
Japanese（日本語）、English（英語）、French（フランス語）、Chinese（中国語）、German（ドイツ語）、Spanish（スペイン語）、Korean（韓国語）
国名・国民・言語で形が同じものが多いので、文中での働きで判断する。

⚠ 注意：国名・国民・言語は必ず大文字で書き始める。japanese, english と小文字で書くのは誤りで、英作文で減点される。曜日・月・言語・国名は大文字、という原則を確認しておく。`,
      },
    ],
    trapExamples: [
      {
        question: 'science から「科学者」を表す語を作りなさい。',
        wrongAnswer: 'sciencist',
        trapExplanation: '「-ist を付ける」と覚えているため、もとの語をそのまま残して語尾だけを足してしまう。art → artist が正しく作れるので、同じやり方で通用すると考えてしまう。',
        correctAnswer: 'scientist',
        correctExplanation:
          'science は語尾の -ce を落として -tist を付け、scientist となる。同じくつづりが変わる例に piano → pianist、music → musician、politics → politician がある。人を表す語尾は「付けるだけ」で済まないことが多いので、一語ずつ書いて確かめる。',
      },
      {
        question: '「このクラスには日本人が三人います」を英語にしなさい。',
        wrongAnswer: 'There are three Japaneses in this class.',
        trapExplanation: '「三人」だから複数形の s が必要だと考えてしまう。Americans, Canadians のように -s が付く国民名を先に覚えていると、Japanese にも同じ規則を当てはめてしまう。',
        correctAnswer: 'There are three Japanese in this class.',
        correctExplanation:
          '-ese で終わる国民名（Japanese, Chinese, Portuguese, Vietnamese）は、単数形と複数形が同じ形である。sheep, deer, fish と同じ単複同形の仲間だと考えるとよい。一方 American, Canadian, Italian など -an 型は Americans のように -s を付ける。語尾によって扱いが変わる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s025',
    subject: 'eigo',
    examType: 'koko',
    title: '派生語③：形容詞・副詞をつくる接尾辞',
    description: '-ful／-less／-ous／-y／-al と、副詞の -ly のつくり方を整理する',
    intro: 'care に -ful を付ければ careful（注意深い）、-less を付ければ careless（不注意な）。たった一つの語尾で正反対の意味になります。さらに -ly を足せば副詞。語尾を見分けられると、選択肢のなかから正しい品詞を選ぶ問題が一気に解けるようになります。',
    order: 525,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '-ful（〜に満ちた）と -less（〜がない）は対になる：careful／careless、useful／useless。',
      '-ous：danger→dangerous、fame→famous、mystery→mysterious。',
      '-y：rain→rainy、cloud→cloudy、sun→sunny（n を重ねる）、noise→noisy。',
      '-al／-ive／-able：nation→national、act→active、enjoy→enjoyable。',
      '副詞は形容詞＋-ly。「子音字＋y」は y→i（easy→easily）、-le は le→ly（gentle→gently）。',
    ],
    sections: [
      {
        heading: '形容詞をつくる語尾',
        body: `名詞や動詞に語尾を付けて形容詞にする形は数が多いが、代表的なものは五つに絞れる。

■ -ful（〜に満ちた）
care → careful ／ use → useful ／ beauty → beautiful ／ help → helpful
hope → hopeful ／ wonder → wonderful ／ power → powerful ／ success → successful
beauty → beautiful は y が i に変わる。

■ -less（〜がない）
care → careless ／ use → useless ／ home → homeless ／ hope → hopeless
end → endless ／ meaning → meaningless
-ful と -less は対になるので、二つ同時に覚える。

■ -ous
danger → dangerous ／ fame → famous ／ humor → humorous ／ nerve → nervous
mystery → mysterious ／ vary → various ／ courage → courageous

■ -y
rain → rainy ／ cloud → cloudy ／ snow → snowy ／ wind → windy ／ sun → sunny（n を重ねる）
noise → noisy（e を取る）／ health → healthy ／ luck → lucky ／ taste → tasty

■ -al／-ive／-able／-ic
nation → national ／ nature → natural ／ tradition → traditional ／ culture → cultural
act → active ／ create → creative ／ expense → expensive ／ attract → attractive
enjoy → enjoyable ／ comfort → comfortable ／ reason → reasonable
hero → heroic ／ science → scientific ／ energy → energetic

★ ポイント：-ful と -less の対、-y の天気の語群（rainy, cloudy, snowy, windy, sunny）は、まとまりで出題される。sunny だけ n を重ねることに注意する。`,
      },
      {
        heading: '副詞をつくる -ly と、その落とし穴',
        body: `形容詞に -ly を付けると副詞になる。ただし、-ly が付いていても副詞ではない語があるので注意する。

■ 基本の作り方
careful → carefully ／ slow → slowly ／ quick → quickly ／ quiet → quietly
kind → kindly ／ sudden → suddenly ／ usual → usually ／ final → finally

■ つづりが変わる場合
「子音字＋y」→ y を i に変える：easy → easily ／ happy → happily ／ angry → angrily ／ busy → busily
「-le」→ le を ly に変える：gentle → gently ／ simple → simply ／ terrible → terribly ／ possible → possibly
「-ll」→ l を一つ足すだけ：full → fully ／ careful → carefully
true → truly（e を落とす。truely は誤り）

■ -ly が付いていても形容詞の語
friendly（親しみやすい）／ lovely（すてきな）／ lonely（さびしい）／ likely（ありそうな）
weekly（毎週の）／ daily（毎日の）／ early（早い・早く）
例）She is friendly.（○ 形容詞）／ She spoke to me in a friendly way.（friendly を副詞的に使いたいときは in a ～ way とする）

■ 形が同じで形容詞・副詞を兼ねる語
fast（速い／速く）／ hard（難しい・熱心な／熱心に）／ early（早い／早く）／ late（遅い／遅く）
high（高い／高く）／ near（近い／近くに）／ long（長い／長く）
例）He is a fast runner.（形容詞）／ He runs fast.（副詞。× fastly）

⚠ 注意：hard に -ly を付けた hardly は「ほとんど〜ない」という別の意味になる。lately は「最近」、nearly は「ほとんど」。-ly を付けると意味が変わる語があるので、機械的に付けないこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'friendly は -ly で終わっているので副詞である。正しいか。',
        wrongAnswer: '正しい（副詞なので He talked friendly. のように使う）',
        trapExplanation: '「-ly が付いたら副詞」という規則を覚えていると、語尾だけを見て判断してしまう。friendly は日常語で意味も分かるため、品詞を疑うきっかけがない。',
        correctAnswer: '誤り（friendly は形容詞）',
        correctExplanation:
          '-ly は形容詞に付いて副詞を作るが、friendly は名詞 friend に -ly が付いた形容詞である。lovely, lonely, likely, weekly, daily も同じく形容詞。副詞として言いたいときは in a friendly way のように言いかえる。「もとの語が形容詞か名詞か」を見れば区別できる。',
      },
      {
        question: 'easy の副詞形を書きなさい。',
        wrongAnswer: 'easyly',
        trapExplanation: '「形容詞に -ly を付ける」という規則をそのまま実行し、y を i に変える手順を忘れてしまう。slowly, quickly のようにつづりが変わらない例が多いため、変化に気づきにくい。',
        correctAnswer: 'easily',
        correctExplanation:
          '「子音字＋y」で終わる形容詞は、y を i に変えてから -ly を付ける。easy → easily、happy → happily、angry → angrily、busy → busily。複数形（city → cities）や三単現（study → studies）と同じ規則なので、まとめて確認しておく。gentle → gently のように -le が -ly になる型も合わせて覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s026',
    subject: 'eigo',
    examType: 'koko',
    title: '派生語④：動詞をつくる語尾と、否定を表す接頭辞',
    description: '-en／-ize と、un-／in-／im-／dis- の使い分けを、後ろの音との関係で理解する',
    intro: 'possible の反対は unpossible ではなく impossible。なぜ un- ではだめなのでしょう。実は否定の接頭辞は、後ろに続く音によって使い分けられています。「p の前は im-」というように音で決まっていると知ると、丸暗記の量がぐっと減ります。',
    order: 526,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '-en：形容詞から動詞（wide→widen、short→shorten、strong→strengthen、deep→deepen）。',
      '-ize／-ify：real→realize、apology→apologize、simple→simplify。',
      'un-：もっとも広く使える否定（unhappy, unkind, unusual, unlucky）。',
      'im- は m・p の前（impossible, impolite）、ir- は r の前（irregular）、il- は l の前（illegal）。',
      'dis-：動詞にも付く（disagree, disappear, dislike, dishonest）。',
    ],
    sections: [
      {
        heading: '動詞をつくる語尾',
        body: `形容詞や名詞から動詞を作る語尾は数が少ないので、まとめて覚えられる。

■ -en（形容詞に付いて「〜にする」）
wide → widen（広げる）／ short → shorten（短くする）／ deep → deepen（深める）
weak → weaken（弱める）／ dark → darken（暗くする）／ soft → soften（やわらげる。t は読まない）
fright → frighten（おびえさせる）／ length → lengthen（長くする）

注意すべきは strong である。strong → strengthen であって strongen ではない。いったん名詞 strength を作り、それに -en を付ける。
strong（形容詞）→ strength（名詞）→ strengthen（動詞）
同じく long → length → lengthen。

■ -ize／-ise
real → realize（気づく・実現する）／ apology → apologize（謝る）
special → specialize（専門にする）／ organ → organize（組織する）
memory → memorize（暗記する）

■ -ify
beauty → beautify（美しくする）／ simple → simplify（単純にする）／ class → classify（分類する）

■ 名詞・形容詞と同形の動詞
water（水／水をやる）、answer（答え／答える）、change（変化／変える）、work（仕事／働く）、help（助け／助ける）
語尾を付けなくてもそのまま動詞になる語も多い。「動詞形にせよ」と言われたら、まず同形でないかを確かめる。

★ ポイント：ここでの -en は形容詞の後ろに付いて動詞を作るものである。過去分詞の -en（taken, broken, written）とは働きがまったく別なので、混同しないこと。`,
      },
      {
        heading: '否定の接頭辞を音で使い分ける',
        body: `否定を表す接頭辞は、後ろに来る音によって形が変わる。丸暗記ではなく規則で覚える。

■ un-（もっとも広く使える）
happy → unhappy ／ kind → unkind ／ able → unable ／ lucky → unlucky
usual → unusual ／ known → unknown ／ fair → unfair ／ friendly → unfriendly
動詞に付くと「元に戻す」の意味：do → undo ／ lock → unlock ／ tie → untie

■ in-（ラテン語系の語に付く）
correct → incorrect ／ expensive → inexpensive ／ complete → incomplete
direct → indirect ／ dependent → independent ／ visible → invisible

■ im-（m・p の前）
possible → impossible ／ polite → impolite ／ patient → impatient ／ perfect → imperfect
possible の p、polite の p のように、くちびるを閉じる音の前では n が m に変わる。実際に in-possible と言ってみると m の音になってしまうことがわかる。

■ ir-（r の前）／ il-（l の前）
regular → irregular ／ responsible → irresponsible
legal → illegal ／ logical → illogical
どちらも、後ろの音に引きずられて n がその音に変わったものである。

■ dis-
agree → disagree ／ appear → disappear ／ like → dislike ／ honest → dishonest
cover → discover（この dis- は「取り除く」→「覆いを取る＝発見する」）
advantage → disadvantage

⚠ 注意：in- が必ず否定とは限らない。invite（招く）、increase（増える）、include（含む）の in- は「中へ」という意味で、否定ではない。語の意味から判断すること。`,
      },
    ],
    trapExamples: [
      {
        question: 'possible の反対の意味を表す語を書きなさい。',
        wrongAnswer: 'unpossible',
        trapExplanation: 'un- はもっとも広く使える否定の接頭辞なので、迷ったときに un- を選んでしまう。unhappy, unkind が正しく作れるぶん、同じやり方が通用すると考えてしまう。',
        correctAnswer: 'impossible',
        correctExplanation:
          'p や m の前では in- が im- に変わる。impossible, impolite, impatient, imperfect がその例である。r の前は ir-（irregular）、l の前は il-（illegal）となる。これは発音のしやすさによる変化で、in-possible と言おうとすると自然に im- の音になることから確かめられる。',
      },
      {
        question: 'strong から「強くする」という意味の動詞を作りなさい。',
        wrongAnswer: 'strongen',
        trapExplanation: 'wide → widen、short → shorten と同じように、形容詞にそのまま -en を付ければよいと考えてしまう。規則自体は正しいが、strong だけは間に名詞形をはさむ点を見落とす。',
        correctAnswer: 'strengthen',
        correctExplanation:
          'strong はいったん名詞 strength に変えてから -en を付け、strengthen となる。同じく long → length → lengthen。母音まで変わるので、形容詞・名詞・動詞の三つを一組で覚える（strong / strength / strengthen）。wide → width → widen のように、名詞形と動詞形の作り方が別々の語もある。',
      },
    ],
  },

  {
    id: 'koko_eigo_s027',
    subject: 'eigo',
    examType: 'koko',
    title: '派生語⑤：意味を変える接頭辞',
    description: 're-／pre-／mis-／over-／inter-／ex- など、語の意味そのものを変える接頭辞',
    intro: 'export と import は、後ろの port（運ぶ）が同じで、前の ex-（外へ）と im-（中へ）だけがちがいます。接頭辞の意味を知っていれば、初めて見る語でも見当がつきます。長文で知らない語に出会ったときに、そこで止まらずに読み進める力になります。',
    order: 527,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      're-（再び・元へ）：rebuild, rewrite, return, recycle, repeat, replace。',
      'pre-（前）：prepare, prevent, preview。mis-（誤って）：mistake, misunderstand, misuse。',
      'over-（越えて・〜しすぎる）：oversleep, overcome, overseas, overwork。',
      'inter-（間）：international, internet, interview。tele-（遠く）：telephone, television。',
      'ex-（外へ）／im-・in-（中へ）：export／import、exit／entrance。',
    ],
    sections: [
      {
        heading: '主な接頭辞と、その意味',
        body: `接頭辞は語の前に付いて意味を加える。数十個しかないので、意味の見当をつける道具として覚えておく価値が高い。

■ re-（再び・元へ）
rebuild（建て直す）／ rewrite（書き直す）／ return（戻る）／ recycle（再利用する）
repeat（くり返す）／ replace（取りかえる）／ remake（作り直す）／ review（復習する）

■ pre-（前もって）
prepare（準備する）／ prevent（防ぐ）／ preview（下見する）／ predict（予測する）

■ mis-（誤って）
mistake（まちがい）／ misunderstand（誤解する）／ misuse（誤用する）／ misread（読みちがえる）

■ over-（越えて・〜しすぎる）／ under-（下・不足）
oversleep（寝すぎる）／ overcome（打ち勝つ）／ overseas（海外へ）／ overwork（働きすぎる）
understand（理解する）／ underground（地下）／ underline（下線を引く）／ underwear（下着）

■ inter-（〜の間）
international（国際的な）／ internet（インターネット）／ interview（面接）／ interpret（通訳する）

■ tele-（遠く）
telephone（電話）／ television（テレビ）／ telescope（望遠鏡）

■ ex-（外へ）／ im-・in-（中へ）
export（輸出する）／ import（輸入する）
exit（出口）／ entrance（入口）
express（外に押し出す→表現する）／ impress（中に押し込む→印象を与える）
port は「運ぶ・港」の意味なので、ex-port は「外へ運ぶ＝輸出」、im-port は「中へ運ぶ＝輸入」となる。

■ 数を表す接頭辞
uni-（1）：uniform, unique ／ bi-（2）：bicycle ／ tri-（3）：triangle, tricycle

★ ポイント：語の中身を「接頭辞＋語根」に分けて考える癖をつけると、知らない語でも意味の方向（外か中か、前か後か、多いか少ないか）が読める。`,
      },
      {
        heading: '接頭辞が付いた語の使い方',
        body: `接頭辞が付いても、その語の品詞や変化の仕方はもとの語を引き継ぐ。ここを見落とすと、意味は合っていても文法でまちがえる。

■ 変化はもとの語と同じ
oversleep（sleep の仲間）→ overslept － overslept
understand（stand の仲間）→ understood － understood
overcome（come の仲間）→ overcame － overcome
misunderstand → misunderstood － misunderstood
rewrite（write の仲間）→ rewrote － rewritten
mistake（take の仲間）→ mistook － mistaken
不規則動詞に接頭辞が付いた語は、そのまま不規則に変化する。

■ 品詞に注意する語
overseas は副詞・形容詞である。「海外へ行く」は go overseas（× go to overseas）。
underline は動詞（下線を引く）でも名詞（下線）でも使う。
interview は名詞（面接）でも動詞（面接する）でも使う。

■ つづりで注意する語
overseas の s は必要（× oversea）。
international, interview, internet はいずれも一語として続けて書く（× inter national）。接頭辞は語の一部であって、独立した語ではない。

例文で確認する。
I overslept this morning, so I missed the train.（今朝寝坊したので電車に乗り遅れた）
She has studied overseas for two years.
Please underline the important words.

⚠ 注意：export と import は、名詞のときは前にアクセント（ÉX-port, ÍM-port）、動詞のときは後ろ（ex-PÓRT, im-PÓRT）に移る。名詞と動詞でアクセントが動く語の仲間である。`,
      },
    ],
    trapExamples: [
      {
        question: 'export は「輸入する」という意味である。正しいか。',
        wrongAnswer: '正しい（外国から品物が来ることだから）',
        trapExplanation: 'export と import はつづりが似ており、日本語でも「エクスポート」「インポート」と両方カタカナで使われるため、どちらがどちらか印象で選んでしまう。',
        correctAnswer: '誤り（export は「輸出する」）',
        correctExplanation:
          'port は「運ぶ」を表す語根で、ex- は「外へ」、im-（in-）は「中へ」を表す。したがって export は外へ運ぶ＝輸出、import は中へ運ぶ＝輸入となる。同じ ex- の仲間に exit（出口）、express（外に出す→表現する）がある。接頭辞の意味から考えれば取りちがえない。',
      },
      {
        question: '「私は今朝寝坊した」を英語にしなさい。',
        wrongAnswer: 'I was oversleep this morning.',
        trapExplanation: 'oversleep を「寝坊」という名詞のように感じてしまい、be 動詞と組み合わせてしまう。また、不規則動詞 sleep に接頭辞が付いた語であることに気づかず、過去形にもしていない。',
        correctAnswer: 'I overslept this morning.',
        correctExplanation:
          'oversleep は「寝坊する」という動詞で、sleep － slept － slept の変化をそのまま引き継ぎ oversleep － overslept － overslept となる。接頭辞が付いても、もとの動詞の品詞と変化は変わらない。understand → understood、overcome → overcame － overcome も同じ考え方である。',
      },
    ],
  },

  // ───────────────── 7. 同意語・反意語（s028〜s031） ─────────────────
  {
    id: 'koko_eigo_s028',
    subject: 'eigo',
    examType: 'koko',
    title: '反意語①：形容詞の対をつくる',
    description: 'long／short、cheap／expensive など、基本形容詞の反対語を意味ごとに整理する',
    intro: '「軽い」の反対は heavy、「明るい」の反対は dark。ところが英語ではどちらももとの語は light です。日本語では別々の言葉なので、反意語を一対一で覚えていると必ずどこかで食いちがいます。語の意味ごとに反対語を持つ、という考え方に切りかえましょう。',
    order: 528,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '基本の対：long／short、high／low、old／new、old／young、easy／difficult、cheap／expensive。',
      '一語が複数の反意語を持つことがある。light は heavy（重い）とも dark（暗い）とも対になる。',
      'hard も easy（難しい⇔やさしい）と soft（かたい⇔やわらかい）の二つの対を持つ。',
      '温度は cold／cool／warm／hot の四段階で、cold⇔hot、cool⇔warm が対になる。',
      '値段が高い・低いは expensive／cheap。high／low を使うのは price（値段）が主語のとき。',
    ],
    sections: [
      {
        heading: '基本形容詞の反意語',
        body: `形容詞の反意語は、英作文でも語彙問題でも直接問われる。まとまりで覚える。

■ 大きさ・長さ
big（large）／ small（little）
long ／ short
tall ／ short
wide ／ narrow
thick ／ thin
deep ／ shallow

■ 時間・年齢
old ／ new（物）
old ／ young（人）
early ／ late
fast（quick）／ slow

■ 状態・性質
easy ／ difficult（hard）
strong ／ weak
safe ／ dangerous
clean ／ dirty
right ／ wrong
wet ／ dry
full ／ empty
same ／ different
near ／ far
busy ／ free
quiet ／ noisy
happy ／ sad

■ 温度
hot ／ cold（強い）
warm ／ cool（おだやか）
四つを一直線に並べると cold － cool － warm － hot の順になる。対になるのは両端どうし、内側どうしである。

★ ポイント：反意語は「セットで声に出す」のがいちばん定着する。long-short, high-low, cheap-expensive と、リズムで覚えてしまう。`,
        figureId: 'lf_kokoeigoext01_028',
      },
      {
        heading: '一語が複数の反意語を持つ場合',
        body: `日本語では別の語になるものが、英語では一語にまとまっていることがある。この場合、反意語も意味ごとに変わる。

■ light の二つの意味
light（軽い）⇔ heavy（重い）
　例）This bag is light.／This bag is heavy.
light（明るい）⇔ dark（暗い）
　例）The room is light.／The room is dark.
どちらの意味で使われているかは、文脈で決まる。

■ hard の二つの意味
hard（難しい）⇔ easy
hard（かたい）⇔ soft
　例）This question is hard.（難しい）／This bread is hard.（かたい）

■ そのほか
right（正しい）⇔ wrong ／ right（右）⇔ left
fine（晴れた）⇔ cloudy, rainy ／ fine（元気な）⇔ sick
free（ひまな）⇔ busy ／ free（無料の）⇔ expensive

■ 値段の言い方に注意
「この本は高い」は This book is expensive.（○）
　This book is high.（×）
「値段が高い」と言いたいときは、主語を price にする。
　The price of this book is high.（○）
日本語では「高い」の一語で済むが、英語では expensive（物が主語）と high（値段が主語）を使い分ける。安いほうも同じで、cheap（物）／ low（値段）となる。

⚠ 注意：cheap には「安っぽい・質が悪い」という悪い意味が含まれることがある。値段が手ごろだと言いたいときは inexpensive や reasonable を使うほうが自然である。`,
      },
    ],
    trapExamples: [
      {
        question: 'light の反意語は dark である。したがって「軽い」の反意語も dark でよい。正しいか。',
        wrongAnswer: '正しい（light の反対はいつでも dark）',
        trapExplanation: '反意語を「一語につき一語」で暗記していると、その語が複数の意味を持つ場合に対応できない。light＝明るいという意味を先に覚えていると、そちらだけで判断してしまう。',
        correctAnswer: '誤り（「軽い」の反意語は heavy）',
        correctExplanation:
          'light には「軽い」と「明るい」の二つの意味があり、それぞれ heavy と dark という別の反意語を持つ。hard も「難しい⇔easy」「かたい⇔soft」の二対、right も「正しい⇔wrong」「右⇔left」の二対を持つ。反意語は意味ごとに考えること。',
      },
      {
        question: '「この自転車は値段が高い」を英語にしなさい。',
        wrongAnswer: 'This bike is high.',
        trapExplanation: '日本語の「高い」がそのまま high に置きかわると考えてしまう。値段についても身長についても「高い」と言う日本語の感覚が、そのまま英語に持ちこまれている。',
        correctAnswer: 'This bike is expensive.（または The price of this bike is high.）',
        correctExplanation:
          '物を主語にして「値段が高い」と言うときは expensive を使う。high を使えるのは price（値段）が主語のときだけで、The price is high. となる。安い場合も同じで、This bike is cheap.／The price is low. と使い分ける。日本語の一語が英語では二語に分かれる典型例である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s029',
    subject: 'eigo',
    examType: 'koko',
    title: '反意語②：動詞・名詞の対と、接頭辞による反意語',
    description: 'borrow／lend、buy／sell などの向きの対と、un-／dis- で作る反意語を整理する',
    intro: '「借りる」と「貸す」は、同じ出来事を反対側から見た言い方です。日本語では主語がなくても通じますが、英語では borrow と lend を選んだ時点で「誰から誰へ」が決まってしまいます。向きのある動詞は、まず自分がどちら側かを考える習慣をつけましょう。',
    order: 529,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '向きの対：borrow（借りる）／lend（貸す）、buy／sell、teach／learn、give／take。',
      '動作の対：come／go、open／close、push／pull、start／finish、win／lose。',
      '名詞の対：question／answer、war／peace、success／failure、cause／effect。',
      '接頭辞で作る反意語：possible／impossible、happy／unhappy、agree／disagree、appear／disappear。',
      'close は動詞 [kloʊz]（閉める）、形容詞 [kloʊs]（近い）。closed が「閉まっている」。',
    ],
    sections: [
      {
        heading: '向きのある動詞の対',
        body: `同じ出来事でも、立場が変わると使う動詞が変わる。主語が誰かを決めてから語を選ぶ。

■ borrow と lend
borrow（借りる）… 自分が受け取る側
lend（貸す）… 自分が渡す側
例）I borrowed a book from him.（彼から本を借りた）
　　He lent me a book.（彼は私に本を貸した）
どちらも同じ出来事を表しているが、主語がちがう。前置詞にも注意する。borrow ～ from ...／lend 人 物。

■ buy と sell
I bought this bike from my uncle.／My uncle sold this bike to me.

■ teach と learn
teach（教える）／ learn（学ぶ）
Mr. Sato teaches us math.／We learn math from Mr. Sato.

■ そのほかの対
give（与える）／ take（取る）
come（来る）／ go（行く）
bring（持ってくる）／ take（持っていく）
arrive（着く）／ leave（出発する）
win（勝つ）／ lose（負ける）
find（見つける）／ lose（なくす）
remember（覚えている）／ forget（忘れる）
push（押す）／ pull（引く）
open（開ける）／ close, shut（閉める）
start, begin（始める）／ finish, end（終える）
put on（着る）／ take off（脱ぐ）
turn on（つける）／ turn off（消す）
get on（乗る）／ get off（降りる）

★ ポイント：borrow／lend、buy／sell、teach／learn は、日本語だと主語を省略できるため取りちがえやすい。英作文では必ず「誰が主語か」を先に決めること。`,
      },
      {
        heading: '名詞の対と、接頭辞による反意語',
        body: `名詞にも決まった対がある。また、接頭辞を付けるだけで反意語になる語も多い。

■ 名詞の対
question ／ answer
war ／ peace
success ／ failure
cause（原因）／ effect, result（結果）
day ／ night
summer ／ winter
north ／ south ／ east ／ west
boy ／ girl ／ man ／ woman
king ／ queen ／ uncle ／ aunt ／ husband ／ wife ／ son ／ daughter
teacher ／ student ／ doctor ／ patient
entrance（入口）／ exit（出口）

■ 接頭辞で作る反意語
possible ／ impossible
happy ／ unhappy
kind ／ unkind
usual ／ unusual
correct ／ incorrect
regular ／ irregular
agree ／ disagree
appear ／ disappear
like ／ dislike
honest ／ dishonest
接頭辞の使い分けは前の課で扱ったとおり、後ろの音によって決まる。

■ close の使い分け（発音とセットで）
Please close the door.（動詞・[kloʊz]）
The shop is closed today.（形容詞化した過去分詞・「閉まっている」）
My house is close to the station.（形容詞・[kloʊs]・「近い」）
つづりは同じでも、意味・品詞・発音が三通りに分かれる。

⚠ 注意：The shop is close. と書くと「その店は近い」という意味になってしまう。「閉まっている」は closed と d が必要である。反意語の open は形容詞としてそのまま使える（The shop is open.）ため、対称になっていない点に注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は彼にペンを貸した」を英語にしなさい。',
        wrongAnswer: 'I borrowed him my pen.',
        trapExplanation: '日本語では「借りる」も「貸す」も物のやりとりを表す点で似ており、主語を意識せずに訳すと、覚えている borrow のほうを選んでしまう。前置詞も落ちてしまうことが多い。',
        correctAnswer: 'I lent him my pen.（または I lent my pen to him.）',
        correctExplanation:
          'borrow は「借りる（自分が受け取る）」、lend は「貸す（自分が渡す）」である。この文では私が渡す側なので lend を使い、過去形は lent。borrow を使うなら He borrowed my pen from me. のように主語が入れかわる。まず「誰が主語か」を決めてから動詞を選ぶ。',
      },
      {
        question: '「その店は今日は閉まっています」を英語にしなさい。',
        wrongAnswer: 'The shop is close today.',
        trapExplanation: 'open の反意語が close だと覚えているため、The shop is open. の open をそのまま close に置きかえてしまう。close が形容詞として「近い」の意味を持つことに気づかない。',
        correctAnswer: 'The shop is closed today.',
        correctExplanation:
          '「閉まっている」は過去分詞 closed を使う。close を形容詞として使うと「近い」という別の意味（発音も [kloʊs]）になり、The shop is close. は「その店は近い」となる。open は形容詞としてそのまま使えるので対称にならない、という点がこの語の落とし穴である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s030',
    subject: 'eigo',
    examType: 'koko',
    title: '同意語・言いかえ①：1語と熟語の書きかえ',
    description: 'reach＝get to、look for＝search for など、1語と熟語の対応を覚える',
    intro: '「駅に着いた」は arrive at the station でも get to the station でも reach the station でも言えます。ところが reach だけは前置詞を付けてはいけません。書きかえ問題は意味が同じかどうかだけでなく、この形のちがいまで問われます。',
    order: 530,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      'reach ＝ get to ＝ arrive at／in。reach は他動詞なので前置詞不要。',
      'look for ＝ search for、look after ＝ take care of、find out ＝ discover。',
      'take part in ＝ join ＝ participate in、put off ＝ postpone。',
      'be able to ＝ can、have to ＝ must、be going to ≒ will。',
      'a lot of ＝ many／much、right away ＝ at once ＝ immediately。',
    ],
    sections: [
      {
        heading: '1語と熟語の対応',
        body: `書きかえ問題では、同じ意味を1語で言うか熟語で言うかが問われる。代表的な組を覚える。

■ 到着する
reach ＝ get to ＝ arrive at（狭い場所）／arrive in（広い場所）
例）I reached the station at six.
　　I got to the station at six.
　　I arrived at the station at six.

■ 探す・世話をする
look for ＝ search for（探す）
look after ＝ take care of（世話をする）
例）I am looking for my key.／I am taking care of my sister.

■ 見つける・知る
find out ＝ discover（発見する）
hear from ～（〜から便りがある）
hear of ～（〜のことを聞く）

■ 参加する
take part in ＝ join ＝ participate in
例）I took part in the meeting.／I joined the meeting.

■ そのほかの頻出
put off ＝ postpone（延期する）
give up ＝ stop ～ing（やめる）
turn down ＝ refuse（断る）
come from ＝ be from（〜出身である）
get up ＝ rise（起きる）
be fond of ＝ like（好きである）
be full of ＝ be filled with（〜でいっぱいだ）
be famous for ＝ be well known for（〜で有名だ）
be interested in（興味がある）
be good at ＝ be skillful at（得意である）

★ ポイント：熟語は「動詞＋前置詞」で意味が決まる。look for（探す）と look after（世話をする）と look at（見る）は、前置詞がちがうだけで意味がまったく別になる。前置詞まで含めて一語として覚えること。`,
      },
      {
        heading: '助動詞・数量表現の言いかえと、自動詞・他動詞',
        body: `文法事項の書きかえも、同意表現の一種として出題される。

■ 助動詞の言いかえ
can ＝ be able to
must ＝ have to
will ＝ be going to（be going to は「すでに決めていること」を表す点で少し異なる）
must not（禁止）と donʼt have to（不要）は意味がちがうので注意する。
例）You must not swim here.（泳いではいけない）
　　You donʼt have to swim.（泳ぐ必要はない）

■ 数量表現
a lot of ＝ lots of ＝ many（可算）／much（不可算）
plenty of（たくさんの）
a few ＝ some（少しの・可算）
almost all ＝ most of（ほとんどの）

■ 時を表す表現
right away ＝ at once ＝ immediately（すぐに）
these days ＝ nowadays（近ごろ）
in the future（将来）
at last ＝ finally（ついに）

■ 自動詞と他動詞のちがいに注意
reach は他動詞なので前置詞をとらない。
　I reached the station.（○）／I reached to the station.（×）
arrive は自動詞なので前置詞が必要である。
　I arrived at the station.（○）／I arrived the station.（×）
同じく、discuss（他動詞）は about をとらない。
　We discussed the problem.（○）／We discussed about the problem.（×）
一方 talk は自動詞なので about が必要である。
　We talked about the problem.（○）

⚠ 注意：marry も他動詞である。「彼女と結婚した」は He married her.（× He married with her.）。日本語の「〜と」に引かれて with を入れないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。We reached to the station at seven.',
        wrongAnswer: '誤りはない（「〜に着く」だから to が必要）',
        trapExplanation: 'arrive at や get to のように前置詞をとる言い方を先に覚えていると、同じ意味の reach にも前置詞が必要だと考えてしまう。日本語の「駅に」の「に」も、to を入れたくさせる。',
        correctAnswer: 'We reached the station at seven.',
        correctExplanation:
          'reach は他動詞で、目的語を直接とる。したがって前置詞は不要である。同じ意味でも arrive は自動詞なので arrive at the station、get も get to the station と前置詞が必要になる。書きかえ問題では、意味だけでなく前置詞の有無まで変わることを意識する。',
      },
      {
        question: '次の文の誤りを直しなさい。We discussed about the problem for an hour.',
        wrongAnswer: '誤りはない（「〜について話し合う」だから about が必要）',
        trapExplanation: 'talk about、think about という形になじんでいるため、discuss にも about を付けてしまう。日本語訳が「〜について」となることが、さらに誤りを後押しする。',
        correctAnswer: 'We discussed the problem for an hour.',
        correctExplanation:
          'discuss は他動詞なので about は不要である。同じく他動詞で前置詞をとらないものに reach（〜に着く）、enter（〜に入る）、marry（〜と結婚する）、attend（〜に出席する）がある。逆に talk about、think about、listen to は自動詞なので前置詞が必要になる。動詞ごとに形で覚えること。',
      },
    ],
  },

  {
    id: 'koko_eigo_s031',
    subject: 'eigo',
    examType: 'koko',
    title: '同意語・言いかえ②：程度・頻度・確からしさ',
    description: '頻度の副詞や、fast／early、almost／most などの近い意味の語を比べる',
    intro: 'sometimes と usually、どちらがより頻繁でしょうか。日本語では「ときどき」「たいてい」と訳し分けますが、どのくらいの差なのかは曖昧です。英語の副詞は、この「どのくらい」を目盛りのように使い分けます。順番に並べて覚えると、読解での細かい判断が効くようになります。',
    order: 531,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '頻度の副詞は always → usually → often → sometimes → seldom → never の順に減る。',
      '頻度の副詞は一般動詞の前、be 動詞・助動詞の後ろに置く。',
      'fast は速度、early は時刻。「早く起きる」は get up early。',
      'almost は副詞で「ほとんど」。「ほとんどの生徒」は almost all the students か most of the students。',
      'too は「〜すぎる」で悪い意味を含む。「とても」は very。',
    ],
    sections: [
      {
        heading: '頻度と確からしさを表す語',
        body: `英語の副詞には、程度を段階的に表すものが多い。順番に並べて覚えると使い分けが正確になる。

■ 頻度（多い順）
always（いつも）→ usually（たいてい）→ often（よく）→ sometimes（ときどき）→ seldom, rarely（めったに〜ない）→ never（決して〜ない）

■ 置く位置
一般動詞の前：I always get up at six.
be 動詞の後ろ：He is always kind.
助動詞の後ろ：I will always remember you.
sometimes は文頭・文末に置くこともできる（Sometimes I walk to school.）。

■ 確からしさ
certainly, surely（確かに）→ probably（たぶん・可能性が高い）→ perhaps, maybe（もしかすると）
maybe は文頭に置くことが多い（Maybe he is right.）。may be（助動詞＋動詞）と書き分ける点に注意する。
例）Maybe he is busy.（副詞・たぶん）
　　He may be busy.（助動詞・忙しいかもしれない）

■ 程度
very（とても）／ so（とても）／ really（本当に）／ quite（かなり）／ too（〜すぎる）
too には「度をこして」という悪い意味が含まれる。
例）This tea is very hot.（とても熱い＝おいしい）
　　This tea is too hot to drink.（熱すぎて飲めない）

★ ポイント：頻度の副詞は、読解で「どのくらいの割合か」を問う設問に直結する。always と usually を取りちがえると内容一致問題を落とす。`,
        figureId: 'lf_kokoeigoext01_031',
      },
      {
        heading: 'まぎらわしい近い意味の語',
        body: `意味が近いが使い分けの決まっている語をまとめる。

■ fast ／ early
fast は速度が速いこと、early は時刻が早いことを表す。
例）He runs fast.（速く走る）
　　He gets up early.（早く起きる）
「早く起きる」を get up fast とは言えない。逆に「速く走る」を run early とも言えない。
quick は fast とほぼ同じ意味だが、形容詞として使うことが多い（a quick answer）。

■ almost ／ most
almost は副詞で、単独では名詞の前に置けない。
　almost all the students（ほとんどすべての生徒）○
　almost students ×
　most of the students（生徒の大部分）○
　most students（たいていの生徒）○
「ほとんどの〜」と言いたいときは、almost all か most を使う。

■ big ／ large ／ great
big は口語的で幅広く使える。large は数量・面積に使う（a large number of ～）。great は「偉大な・すばらしい」という評価を表す。

■ nearly ／ almost
どちらも「ほとんど」。almost のほうが「あと少しで達する」感じが強い。
例）It is almost eight.（もうすぐ8時）

■ speak ／ talk ／ say ／ tell
次の課でくわしく扱うが、speak は言語や一方向の発話、talk は会話、say は内容、tell は相手に伝える、と役割が分かれる。

⚠ 注意：「私はとても疲れて歩けなかった」は I was too tired to walk. である。very tired to walk とは言えない。too ～ to ... は「〜すぎて…できない」という決まった形なので、very に置きかえられない。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は毎朝早く起きる」を英語にしなさい。',
        wrongAnswer: 'He gets up fast every morning.',
        trapExplanation: '日本語の「早く」が fast にも early にも訳せるため、より覚えやすい fast を選んでしまう。速度と時刻という区別が日本語にはないことが原因である。',
        correctAnswer: 'He gets up early every morning.',
        correctExplanation:
          'fast は動きの速度が速いこと、early は時刻が早いことを表す。起きる時刻の話なので early が正しい。逆に「速く走る」は run fast であり、run early とは言えない。日本語の「速い・早い」の書き分けと同じ区別だと考えるとわかりやすい。',
      },
      {
        question: 'This soup is too hot. は「このスープはとても熱い」という意味である。正しいか。',
        wrongAnswer: '正しい（too＝とても）',
        trapExplanation: 'too を very と同じ「とても」だと覚えていると、程度が強いだけの表現に見えてしまう。日本語の「熱すぎる」と「とても熱い」の差が小さいことも誤解を招く。',
        correctAnswer: '誤り（「熱すぎる」という、困っている意味になる）',
        correctExplanation:
          'too は「度をこして〜すぎる」という悪い意味を含む。This soup is too hot. は「熱すぎて飲めない」という含みになる。単に「とても熱い」と言うなら This soup is very hot. とする。too ～ to ... の形（too tired to walk＝疲れすぎて歩けない）と合わせて覚えると、意味の方向がつかめる。',
      },
    ],
  },

  // ───────────── 8. まぎらわしい語の使い分け（s032〜s035） ─────────────
  {
    id: 'koko_eigo_s032',
    subject: 'eigo',
    examType: 'koko',
    title: '使い分け①：「言う」と「借りる」',
    description: 'say／tell／speak／talk と、borrow／lend／use／rent を形から区別する',
    intro: '「彼は忙しいと言った」を英語にすると、say と tell のどちらを使うのでしょう。実は日本語訳では決まりません。決めるのは「すぐ後ろに人が来るかどうか」という形です。意味ではなく形で選ぶ、という発想に切りかえると迷わなくなります。',
    order: 532,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'say は内容を言う。say to 人 that ～。直後に人を置けない。',
      'tell は人に伝える。tell 人 that ～。直後に必ず人が来る。',
      'speak は言語や一方向の発話。speak English、speak to 人。',
      'talk は会話。talk with 人、talk about 事。',
      'borrow（無料で借りて持ち去る）／rent（お金を払って借りる）／use（動かせないものをその場で使う）。',
    ],
    sections: [
      {
        heading: 'say／tell／speak／talk',
        body: `どれも「言う・話す」と訳せるが、後ろに続く形がそれぞれ決まっている。形で選ぶ。

■ say（内容を言う）
say ＋ 内容。人を直接置けないので、人を示すときは to を使う。
例）He said, “I am busy.”
　　He said that he was busy.
　　He said to me that he was busy.（○）
　　He said me that he was busy.（×）
say hello to ～（〜によろしく伝える）という決まった形もある。

■ tell（人に伝える）
tell ＋ 人 ＋ 内容。直後に必ず人が来る。
例）He told me that he was busy.（○）
　　He told that he was busy.（× 人が抜けている）
tell a lie（うそをつく）／tell the truth（本当のことを言う）／tell me the way（道を教える）
tell 人 to ～（人に〜するように言う）も重要である。

■ speak（言語・一方向に話す）
speak ＋ 言語／speak to 人
例）She speaks English very well.
　　May I speak to Mr. Brown?（電話で）

■ talk（会話をする）
talk with（to）人／talk about 事
例）I talked with my friend about the movie.

■ 見分け方のまとめ
直後に人が来る → tell
直後に内容が来る → say
言語が来る → speak
about や with が続く → talk

★ ポイント：「言った」という日本語だけを見ても選べない。英文のどの位置に何が置かれているかを見て決める。`,
      },
      {
        heading: 'borrow／lend／rent／use',
        body: `「借りる」も、何をどう借りるかによって語が変わる。

■ borrow（無料で借りて、その場から持ち去る）
例）May I borrow your bike?（自転車を借りてもいいですか）
　　I borrowed three books from the library.
borrow ～ from ...（…から〜を借りる）

■ lend（貸す）
例）Could you lend me your pen?
lend 人 物／lend 物 to 人

■ rent（お金を払って借りる・貸す）
例）We rented a car in Okinawa.（レンタカーを借りた）
　　He rents an apartment to students.（学生に部屋を貸している）

■ use（動かせないもの・その場で使うもの）
例）May I use your bathroom?（○）
　　May I borrow your bathroom?（×）
　　May I use your phone?（その場で使う電話）
トイレ・電話・机など、持ち去らないものは use を使う。

■ 判断の手順
①お金を払うか → rent
②持ち去るか → borrow
③その場で使うだけか → use

例）May I borrow your eraser?（消しゴムは持ち去るので borrow でよいが、その場で使うだけなら use でもよい）

⚠ 注意：日本語の「レンタル」は rent だが、「リース」「レンタルビデオ」など、カタカナ語の印象で選ばないこと。無料か有料か、持ち去るかどうかで判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。He said me that he would come tomorrow.',
        wrongAnswer: '誤りはない（「私に言った」だから said me でよい）',
        trapExplanation: '日本語の「私に言った」をそのまま語順に置きかえてしまう。tell の形（tell 人）と say の形が頭の中で混ざっているのが原因である。',
        correctAnswer: 'He told me that he would come tomorrow.（または He said to me that ～）',
        correctExplanation:
          'say は直後に人を置けない動詞で、人を示すときは say to me の形にする。直後に人が来るのは tell である。したがって He told me that ～ か He said to me that ～ のどちらかになる。訳ではなく、後ろに人が来るかどうかという形で選ぶこと。',
      },
      {
        question: '「お手洗いをお借りしてもいいですか」を英語にしなさい。',
        wrongAnswer: 'May I borrow your bathroom?',
        trapExplanation: '日本語の「借りる」がそのまま borrow に置きかわると考えてしまう。borrow が「持ち去って後で返す」ことを表す語だという意識がないと、この誤りに気づけない。',
        correctAnswer: 'May I use your bathroom?',
        correctExplanation:
          'borrow は借りたものをその場から持ち去る場合に使う。トイレ・電話・机のように動かせないもの、その場で使うだけのものには use を使う。有料で借りる場合は rent（rent a car）。日本語の「借りる」一語が、英語では三つに分かれている。',
      },
    ],
  },

  {
    id: 'koko_eigo_s033',
    subject: 'eigo',
    examType: 'koko',
    title: '使い分け②：数量を表す語',
    description: 'many／much、few／a few、little／a little、some／any を正確に使い分ける',
    intro: 'He has a few friends. と He has few friends. は、a があるかないかだけの差です。ところが意味は「友達が少しいる」と「友達がほとんどいない」で正反対。たった一文字で肯定と否定が入れかわるので、読解でも英作文でも見逃せません。',
    order: 533,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'many＋数えられる名詞の複数形、much＋数えられない名詞。a lot of はどちらにも使える。',
      'a few（少しある・肯定）／few（ほとんどない・否定）＋数えられる名詞。',
      'a little（少しある・肯定）／little（ほとんどない・否定）＋数えられない名詞。',
      'some は肯定文、any は否定文・疑問文。ただし勧誘や依頼の疑問文では some を使う。',
      'much は肯定文では使いにくい。ふつうは a lot of で言いかえる。',
    ],
    sections: [
      {
        heading: '数えられる名詞と数えられない名詞',
        body: `数量を表す語は、後ろの名詞が数えられるかどうかで変わる。まずこの区別を確認する。

■ many／much
many ＋ 数えられる名詞の複数形：many books, many students, many friends
much ＋ 数えられない名詞：much water, much money, much time, much homework
a lot of, lots of, plenty of ＋ どちらでも可

例）How many books do you have?
　　How much money do you have?（× How many money）

■ 肯定文の much には注意
肯定文で much を使うと硬い言い方になるため、ふつうは a lot of を使う。
　I have a lot of homework.（自然）
　I have much homework.（不自然ではないが硬い）
否定文・疑問文では much をそのまま使う。
　I donʼt have much time.

■ few／a few（数えられる名詞に）
a few ＝ 少しある（肯定的）
few ＝ ほとんどない（否定的）
例）I have a few friends in Tokyo.（東京に友達が少しいる）
　　I have few friends in Tokyo.（東京にはほとんど友達がいない）

■ little／a little（数えられない名詞に）
a little ＝ 少しある（肯定的）
little ＝ ほとんどない（否定的）
例）There is a little water in the glass.（少し水がある）
　　There is little water in the glass.（水はほとんどない）

★ ポイント：a が付くと「ある」、付かないと「ない」。この一点だけで肯定・否定がひっくり返る。読解では見落としやすいので、下線を引いて確認する習慣をつける。`,
        figureId: 'lf_kokoeigoext01_033',
      },
      {
        heading: 'some と any の使い分け',
        body: `some と any は「いくつかの・いくらかの」と訳されるが、使う場面が分かれている。

■ 原則
肯定文 → some
否定文・疑問文 → any
例）I have some questions.
　　I donʼt have any questions.
　　Do you have any questions?

■ 例外：疑問文で some を使う場合
相手に何かをすすめたり、頼んだりするときは、疑問文でも some を使う。yes の答えを期待しているためである。
例）Would you like some tea?（お茶はいかがですか）
　　Will you give me some water?（水をくれませんか）

■ any の別の意味
肯定文で any を使うと「どんな〜でも」という意味になる。
例）You can take any book you like.（好きな本をどれでも取ってよい）
　　Any student can join.（どの生徒でも参加できる）

■ not ～ any ＝ no
I donʼt have any money. ＝ I have no money.
どちらも「お金がまったくない」という意味になる。no は名詞の前に直接置く。

■ 数えられない名詞との組み合わせ
some water, any water のように、some と any は数えられない名詞にも使える。この点は many／much と異なる。

⚠ 注意：「何か食べるものはありますか」は Do you have anything to eat? だが、食事をすすめるときは Would you like something to eat? となる。something／anything も some／any と同じ使い分けをする。`,
      },
    ],
    trapExamples: [
      {
        question: 'He has few friends in this town. は「彼はこの町に友達が少しいる」という意味である。正しいか。',
        wrongAnswer: '正しい（few＝少し）',
        trapExplanation: 'few を「少し」と訳して覚えていると、a の有無が意味を変えることに気づかない。日本語の「少し」が肯定にも否定にも取れるため、訳した時点で差が消えてしまう。',
        correctAnswer: '誤り（「友達がほとんどいない」という否定的な意味）',
        correctExplanation:
          'a few は「少しある」という肯定的な意味、few は「ほとんどない」という否定的な意味である。「友達が少しいる」と言うなら He has a few friends in this town. とする。数えられない名詞では a little（少しある）と little（ほとんどない）が同じ関係になる。a の有無で意味が正反対になる。',
      },
      {
        question: '次の文の誤りを直しなさい。How many money do you need?',
        wrongAnswer: '誤りはない（「いくら必要か」と数をたずねているから many）',
        trapExplanation: '日本語では「いくら」と数量をまとめて表すため、数えられるかどうかを意識しない。金額を数字で答えることから、数えられる名詞だと感じてしまう。',
        correctAnswer: 'How much money do you need?',
        correctExplanation:
          'money は数えられない名詞なので much を使う。数えられるのは coin（硬貨）や bill（紙幣）であって、money そのものは量としてとらえる。同じく water, time, homework, information, advice も数えられない名詞で、much や a little と組み合わせる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s034',
    subject: 'eigo',
    examType: 'koko',
    title: '使い分け③：まぎらわしい前置詞',
    description: 'in／on／at、by／until、for／during、between／among を場面ごとに区別する',
    intro: '「5時までに終えなさい」と「5時まで待ちなさい」。日本語では「までに」と「まで」の一字ちがいですが、英語では by と until というまったく別の語になります。前置詞は覚える数こそ少ないものの、選びまちがえると文の意味が変わってしまいます。',
    order: 534,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '時：at＋時刻、on＋曜日・日付、in＋月・年・季節・午前午後。at night は例外。',
      'by（〜までに・期限）／until, till（〜までずっと・継続）。',
      'for＋期間の長さ（for three days）／during＋特定の期間（during the vacation）／while＋節。',
      'in＋時間で「〜後に」（in three days＝3日後に）。after three days とは意味が異なる。',
      'between（2つの間）／among（3つ以上の間）。',
    ],
    sections: [
      {
        heading: '時と場所の in／on／at',
        body: `in・on・at は、対象の大きさや性質によって使い分ける。大きいものほど in、狭い点ほど at と考えるとよい。

■ 時
at ＋ 時刻・時の一点：at seven, at noon, at night, at that time
on ＋ 曜日・日付・特定の日：on Monday, on May 5, on my birthday, on Sunday morning
in ＋ 月・年・季節・午前午後：in May, in 2026, in summer, in the morning, in the future

例外に見えるものも規則で説明できる。at night は「夜」を一点としてとらえるため。on Sunday morning は特定の日の朝なので on を使う（in the morning は一般的な朝）。

■ 場所
at ＋ 地点：at the station, at the door, at home
in ＋ 内部・広い場所：in the room, in Tokyo, in Japan
on ＋ 接触している面：on the desk, on the wall, on the second floor

例）I arrived at the station.（駅という地点）
　　I live in Osaka.（大阪という広い場所）
　　The book is on the table.（テーブルに接している）

■ 交通手段
by bus, by train, by car（by ＋ 無冠詞）
on foot（徒歩で）／in a taxi（タクシーで）
例）I go to school by bike.（× by a bike）

★ ポイント：at → on → in の順に、点から面、面から空間へと広がっていく。時も場所も同じ考え方で整理できる。`,
      },
      {
        heading: 'by と until、for と during、その他',
        body: `期限と継続、期間の長さと特定の期間は、日本語では区別しにくい。図で考えると整理できる。

■ by（〜までに）と until, till（〜までずっと）
by は「その時までのどこかで動作が完了する」ことを表す。
until は「その時まで動作や状態が続く」ことを表す。
例）Finish your homework by five.（5時までに終えなさい）
　　I will wait here until five.（5時までここで待ちます）
finish, come, return のように一瞬で終わる動作には by、wait, stay, sleep のように続く動作には until を使う。

■ for（期間の長さ）と during（特定の期間）
for ＋ 数字を含む期間：for three days, for two hours, for a week
during ＋ 特定の期間を表す名詞：during the summer vacation, during the meeting, during the war
例）I stayed in Kyoto for five days.（五日間）
　　I read many books during the vacation.（休みの間に）
while は接続詞なので、後ろには文（主語＋動詞）が来る。
例）He came while I was cooking.

■ in ＋ 時間（〜後に）
例）I will come back in three days.（3日後に戻ります）
after three days は「3日たった後で」という漠然とした言い方で、未来の予定には in を使う。

■ between と among
between ＋ 2つ：between Tokyo and Osaka／between you and me
among ＋ 3つ以上：among the students／among the trees

■ そのほか
in front of（〜の前に）／behind（〜の後ろに）
across（〜を横切って）／through（〜を通り抜けて）
with（〜と一緒に・〜を使って）／without（〜なしで）

⚠ 注意：「〜の間ずっと」の for と「〜の間に」の during を訳で区別しようとすると混乱する。後ろに来るのが「数字を含む長さ」か「特定の出来事の名前」かで決めること。`,
        figureId: 'lf_kokoeigoext01_034',
      },
    ],
    trapExamples: [
      {
        question: '「宿題を5時までに終えなさい」を英語にしなさい。',
        wrongAnswer: 'Finish your homework until five.',
        trapExplanation: '日本語の「まで」と「までに」の差が小さいため、until を選んでしまう。until のほうが日本語の「まで」に近い形で覚えられていることも原因である。',
        correctAnswer: 'Finish your homework by five.',
        correctExplanation:
          'by は「その時までのどこかで完了する」という期限を表し、until は「その時までずっと続く」という継続を表す。宿題を終える（finish）のは一瞬の動作なので by を使う。until を使うのは I will wait until five.（5時まで待つ）のように、動作や状態が続く場合である。',
      },
      {
        question: '「私は3日後に戻ります」を英語にしなさい。',
        wrongAnswer: 'I will come back after three days.',
        trapExplanation: '日本語の「後に」がそのまま after に置きかわると考えてしまう。after は「〜の後で」という意味の語なので、意味が通じるように見えるのが厄介である。',
        correctAnswer: 'I will come back in three days.',
        correctExplanation:
          '「今から〜後に」と未来のことを言うときは in ＋ 期間を使う。in three days で「3日後に」となる。after three days は「3日たってから（いつか）」という漠然とした言い方で、過去の話や条件を述べるときに使うことが多い。in には「〜の中に」のほかに「〜の経過後に」という用法があると覚えておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s035',
    subject: 'eigo',
    examType: 'koko',
    title: '使い分け④：見る・聞く・その他の紛らわしい語',
    description: 'see／look at／watch、hear／listen to、hard／hardly などを区別する',
    intro: '「見る」は see でしょうか look でしょうか watch でしょうか。日本語の一語に英語の三語が対応しているとき、決め手になるのは「意識して見ているか」「動くものか」です。この基準を持つと、辞書を引かなくても自分で選べるようになります。',
    order: 535,
    studyPeriod: '中3前半',
    targetLevel: 'nyushi',
    keyPoints: [
      'see（自然に目に入る）／look at（視線を向ける）／watch（動くものを注意して見続ける）。',
      'hear（自然に聞こえる）／listen to（意識して聞く）。',
      'wear（着ている状態）／put on（着る動作）。',
      'another（もう一つ・不特定）／the other（2つのうちの残り）／the others（残り全部）。',
      'hard（一生懸命）／hardly（ほとんど〜ない）、late（遅く）／lately（最近）と意味が変わる。',
    ],
    sections: [
      {
        heading: '見る・聞く・着る',
        body: `日本語の一語に、英語の複数の語が対応する典型例である。決め手は「意識しているかどうか」である。

■ see／look at／watch
see：自然に目に入る。意識しない。
　例）I saw Ken at the station.（駅で健を見かけた）
look at：視線を向ける。動かないものが対象になることが多い。
　例）Look at this picture.
watch：動くものを注意して見続ける。
　例）I watched a soccer game on TV.
テレビ番組は watch TV だが、映画館で映画を見るのは see a movie となる。

■ hear／listen to
hear：自然に聞こえる。
　例）I heard a strange sound.
listen to：意識して耳を傾ける。
　例）I listen to music every night.
listen は自動詞なので to が必要である（× listen music）。

■ wear／put on
wear：着ている状態。
　例）She is wearing a red coat.（赤いコートを着ている）
put on：着る動作。
　例）She put on her coat and went out.（コートを着て出かけた）
進行形にすると差がはっきりする。She is putting on her coat. は「今まさに着ているところ」である。
脱ぐ動作は take off。

■ speak／say／tell／talk
前の課で扱ったとおり、後ろに続く形で決める。

★ ポイント：これらは「意識の強さ」で並べられる。hear ＜ listen to、see ＜ look at ＜ watch。どれを選ぶか迷ったら、その人が意識して行っているかどうかを考える。`,
        figureId: 'lf_kokoeigoext01_035',
      },
      {
        heading: 'another／other と、-ly で意味が変わる語',
        body: `代名詞と副詞にも、まぎらわしい組がある。

■ another／the other／others／the others
another（an＋other）：不特定の「もう一つ・別の一つ」
　例）This cake is delicious. Iʼll have another.（もう一つ食べよう）
the other：2つのうちの「残りの一方」
　例）I have two dogs. One is white, and the other is black.
others：不特定の「ほかのいくつか」
　例）Some like tea, and others like coffee.
the others：残り全部
　例）Three students came. The others stayed home.

数が2つなら the other、3つ以上で残り全部なら the others、と数で決める。

■ -ly が付くと意味が変わる語
hard（一生懸命に・かたい）／hardly（ほとんど〜ない）
　例）He works hard.（一生懸命働く）／He hardly works.（ほとんど働かない）
late（遅く）／lately（最近）
　例）He came late.（遅れて来た）／I havenʼt seen him lately.（最近会っていない）
near（近くに）／nearly（ほとんど）
　例）He lives near here.（この近くに住んでいる）／It is nearly five.（もうすぐ5時）
high（高く）／highly（大いに）
　例）The bird flew high.（高く飛んだ）／He is highly respected.（大いに尊敬されている）
most（最も）／mostly（たいてい）

hardly, scarcely, seldom, rarely は、それ自体が否定の意味を持つ。not と一緒に使わないこと。

⚠ 注意：hardly は「一生懸命」ではない。He hardly studies. は「彼はほとんど勉強しない」であり、意味が正反対になる。読解で見落とすと内容一致問題を落とすので、-ly の付いた形を見たら意味を確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。I heard the radio carefully to catch the news.',
        wrongAnswer: '誤りはない（「ラジオを聞いた」だから heard でよい）',
        trapExplanation: '日本語の「聞く」がそのまま hear に置きかわると考えてしまう。carefully（注意して）という語があるのに、意識して聞いているかどうかを判断の材料にできていない。',
        correctAnswer: 'I listened to the radio carefully to catch the news.',
        correctExplanation:
          'hear は「自然に聞こえる」ことを表すので、carefully（注意して）とは合わない。意識して耳を傾けるときは listen to を使う。listen は自動詞なので to が必要である。見る場合も同じで、自然に目に入るなら see、視線を向けるなら look at、動くものを注視するなら watch を選ぶ。',
      },
      {
        question: '次の文の誤りを直しなさい。My brother studies hardly every day.',
        wrongAnswer: '誤りはない（hard に -ly が付いて「一生懸命に」を強めた形）',
        trapExplanation: '副詞は形容詞に -ly を付けて作ると覚えているため、hard を副詞にするには -ly が必要だと考えてしまう。hardly という語が実在するので、辞書を引かないと気づけない。',
        correctAnswer: 'My brother studies hard every day.',
        correctExplanation:
          'hard はそれ自体が「一生懸命に」という副詞としても使える語である。-ly を付けた hardly はまったく別の意味で、「ほとんど〜ない」という否定を表す。studies hardly では「ほとんど勉強しない」となり、意味が正反対になる。late／lately、near／nearly、high／highly も同じ型の組である。',
      },
    ],
  },
];
