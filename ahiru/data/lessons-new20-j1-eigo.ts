import type { Lesson } from './lesson-types';

export const lessonsNew20J1Eigo: Lesson[] = [
  {
    id: 'new20_j1_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    title: '曜日と月の言い方',
    description: 'Sunday〜Saturday、January〜December のつづりと、曜日・月をたずねる言い方を身につける',
    intro: '「今日は何曜日？」「誕生日は何月？」――日常でいちばんよく使う話題なのに、曜日と月の名前は数が多くつづりも独特で、意外と正確に書けない人が多い。ここで一気に整理して、迷わず使える形にしておこう。',
    order: 7580,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '曜日・月の名前は文の途中でも必ず大文字で書き始める（× monday, ○ Monday）。',
      '曜日：Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday。',
      '月：January, February, March, April, May, June, July, August, September, October, November, December。',
      '「何曜日ですか」は What day is it today? で、答えは It is（It\'s）＋曜日。',
      '「何月ですか」は What month is it? で、答えは It is（It\'s）＋月。',
      '曜日・月の短縮形（Mon., Tue., Jan., Feb. など）はカレンダーや表でよく使われる。',
    ],
    sections: [
      {
        heading: '曜日：つづりと発音の要注意ポイント',
        body: `曜日は7つとも文の途中でも大文字で書き始める。これは国名や人名と同じ「固有名詞」の仲間だからである。

■ 7つの曜日
Sunday（日）・Monday（月）・Tuesday（火）・Wednesday（水）・Thursday（木）・Friday（金）・Saturday（土）

■ つづりでまちがえやすい語
Wednesday：真ん中の d は発音しない（「ウェンズデイ」のように読む）。d を忘れて Wensday と書くまちがいも多いので注意。
Tuesday：Tues- の部分を Tues と書き、Thursday の Thurs- と混同しないこと。
Saturday：Satur- の部分に a が2つ入る（Saterday ではない）。

■ たずね方と答え方
What day is it today?（今日は何曜日ですか）
　— It's Monday.（月曜日です）
What day of the week is it?（同じ意味でより丁寧な聞き方）
曜日を答えるときの主語は it。天候や日付を答えるときと同じ「訳さない it」である。

■ 前置詞の基本
曜日には on を使う（on Monday）。くわしい使い分けは「時の前置詞」の単元で扱う。

★ ポイント：Tuesday・Wednesday・Thursday の3つは特に発音とつづりのずれが大きい。音読しながら書く練習をすると定着しやすい。`,
      },
      {
        heading: '月：つづりの型と略し方',
        body: `月の名前は12個あるが、多くは -ary か -ber で終わるグループに分けると覚えやすい。

■ 12の月
January（1月）・February（2月）・March（3月）・April（4月）・May（5月）・June（6月）・July（7月）・August（8月）・September（9月）・October（10月）・November（11月）・December（12月）

■ グループで覚える
-ary で終わる：January, February
-ber で終わる：September, October, November, December（9〜12月がまとまってこの形になる）
1文字だけの月：May（唯一3文字で、短縮形もそのまま May）

■ つづりでまちがえやすい語
February：真ん中の r を忘れて Febuary と書いてしまう人が非常に多い。Feb-ru-ary と区切って発音しながら書く。
August：Agust ではなく Au- で始まる。
December：Desember ではなく De- で始まる（c であって s ではない）。

■ たずね方と答え方
What month is it?（今、何月ですか）— It's May.（5月です）
What month were you born in?（何月生まれですか）— I was born in April.

■ 短縮形（表やカレンダーで使う）
Jan., Feb., Mar., Apr., Jun., Jul., Aug., Sep., Oct., Nov., Dec.（May, June, July は短くしないことも多い）

⚠ 注意：曜日も月も、名詞の前に a や the を付けない。× a Monday, × the May とは言わず、そのまま Monday, May と使う（特定の「あの月曜日」を指す場合を除く）。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。My birthday is in march.',
        wrongAnswer: 'My birthday is in march.（誤りなしと判断する）',
        trapExplanation: '曜日や月は「ふつうの名詞」だと思いこみ、文の途中では小文字のままでよいと考えてしまう。',
        correctAnswer: 'My birthday is in March.',
        correctExplanation: '曜日・月の名前は固有名詞にあたるため、文のどの位置にあっても必ず大文字で書き始める。国名（Japan）や人名（Ken）と同じルールだと覚えておくと忘れにくい。',
      },
      {
        question: '「2月」を英語でつづりなさい。',
        wrongAnswer: 'Febuary',
        trapExplanation: '発音のとおりに書こうとすると、2つ目の r が聞き取りにくいため抜け落ちてしまう。',
        correctAnswer: 'February',
        correctExplanation: 'February は Feb-ru-ary と3つに区切って発音しながらつづりを確認するとよい。r が2か所（Feb"r"uary）にあることを意識して書く練習をしておくと、テストで確実に得点できる。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    title: '日付の言い方とたずね方',
    description: '"What\'s the date today?" への答え方と、序数を使った日付の読み上げ方を練習する',
    intro: 'カレンダーには "5/5" と数字だけで書いてあっても、それを声に出して読むときは「メイ・ザ・フィフス」のように序数を使う。日付は数字ではなく序数で読む――この一点を知っているかどうかで、英作文や会話の自然さが大きく変わる。',
    order: 7581,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '日付をたずねる文は What\'s the date today? または What day of the month is it today?。',
      "答え方は It's＋月＋序数。（It's May 5th. ／ It's the 5th of May.）",
      '日付の「5th」は書くときは数字＋th などでよいが、読むときは必ず the fifth と序数で読む。',
      '「5月5日に」と言うときは前置詞 on を使う（on May 5th）。',
      '西暦は2桁ずつ区切って読む（2026 → twenty twenty-six）。',
      '手紙や日記の日付は「月＋日＋西暦」の順に書くのがふつう（May 5, 2026）。',
    ],
    sections: [
      {
        heading: '日付のたずね方と答え方',
        body: `「今日は何日ですか」とたずねる文は決まった形があるので、そのまま覚えてしまう。

■ たずね方
What's the date today?（今日は何日ですか）
What's today's date?（同じ意味）
What day of the month is it today?（同じ意味・やや丁寧）

■ 答え方
It's May 5th.（5月5日です）
Today is May 5th.（同じ意味）
It's the 5th of May.（イギリス式に近い言い方。of を使って「月」を後ろに回す）

■ 「何曜日か」との違い
What day is it today?（曜日をたずねる）と What's the date today?（日付をたずねる）は形が似ているため混同しやすい。day だけなら曜日、date が入っていれば日付、と語で区別する。
　— What day is it today? — It's Monday.
　— What's the date today? — It's May 5th.

■ 特定の日をたずねる表現
When is your birthday?（誕生日はいつですか）— My birthday is May 5th. ／ It's on May 5th.
「いつ」と広くたずねる when は、曜日・日付・時刻のどれで答えてもよい万能の疑問詞である。

★ ポイント：day（曜日）・date（日付）・when（いつ）は、たずねている内容の広さが違う。day と date を混同しないよう、意味を意識して使い分ける。`,
      },
      {
        heading: '序数で日付を読む',
        body: `数字の日付（1, 2, 3…）は、声に出すときは必ず序数（1st, 2nd, 3rd, 4th…）で読む。この変換ができないと、書けても正しく音読・発音できない。

■ 基本の読み方
May 1st → the first of May（「メイ・ファースト」と読む）
May 2nd → the second of May
May 3rd → the third of May
May 5th → the fifth of May
May 10th → the tenth of May

■ 20以降の言い方
月の日付は31日まであるので、20台・30台の序数も必要になる。
20th → twentieth
21st → twenty-first
23rd → twenty-third
30th → thirtieth
31st → thirty-first
（つづりの細かいルールは「序数の形とつづり」の単元でくわしく扱う）

■ 前置詞 on との組み合わせ
「〜日に」と言うときは on を使う。
例）We have a school trip on May 20th.（5月20日に修学旅行がある）
例）My birthday is on June 3rd.（誕生日は6月3日だ）

■ 西暦の読み方
西暦は下2桁ずつ区切って読むのが基本。
2026 → twenty twenty-six
2005 → two thousand five（2000〜2009年台は例外的にこう読む）
1998 → nineteen ninety-eight

⚠ 注意：日付を数字だけで書くとき（May 5）でも、声に出すときは必ず the fifth と序数の音で読む。「メイ・ファイブ」と基数のまま読むのはよくある誤りである。`,
      },
    ],
    trapExamples: [
      {
        question: '"5月5日です" を英語で音読するときの正しい読み方を選びなさい。（May five / May fifth）',
        wrongAnswer: 'May five',
        trapExplanation: '書かれている数字がそのまま "5" なので、基数のまま five と読んでしまう。',
        correctAnswer: 'May fifth',
        correctExplanation: '日付は書き方が数字（May 5）でも、声に出すときは必ず序数で読む。書き言葉と読み方が一致しない代表例なので、日付を見たら頭の中で自動的に序数に変換する習慣をつける。',
      },
      {
        question: '「今日は何曜日ですか」を英語で言いなさい。',
        wrongAnswer: "What's the date today?",
        trapExplanation: '「日にちをたずねる文」と「曜日をたずねる文」の形が似ているため、date の文を丸暗記していると反射的にこちらを使ってしまう。',
        correctAnswer: 'What day is it today?',
        correctExplanation: '曜日をたずねるときは day、日付をたずねるときは date を使う。両方セットで覚え、日本語の問いが「曜日」か「日にち」かを確認してから文を選ぶとよい。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    title: '時刻の言い方とたずね方',
    description: '"What time is it?" への答え方、o\'clock・half・quarter・a.m./p.m. の使い方を練習する',
    intro: '駅の時計を見て「今何時？」と聞かれたら、日本語ならそのまま「3時15分」と言えばよいが、英語では時刻の言い方にいくつかの型がある。o\'clock、half、quarter――型を知っていれば、どんな時刻もすぐに言えるようになる。',
    order: 7582,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '時刻をたずねる文は What time is it? で、答えは It is（It\'s）＋時刻。',
      "「ちょうど〜時」は数字＋o'clock（It's three o'clock.）。分がある場合は o'clock を付けない。",
      '「〜時半」は half past ＋時（half past three＝3時半）。数字だけで three thirty と言ってもよい。',
      '「〜時15分前・過ぎ」は a quarter to ／ a quarter past ＋時。',
      '「午前・午後」を明示するときは a.m. / p.m. を数字のうしろに付ける。',
      '時刻を答える主語は it（訳さない it）。',
    ],
    sections: [
      {
        heading: '基本の時刻表現',
        body: `時刻をたずねる文と、基本の答え方をまず固める。

■ たずね方
What time is it?（今何時ですか）
What time is it now?（同じ意味）
Do you have the time?（会話でよく使う、やや丁寧な聞き方）

■ ちょうどの時刻：数字＋o'clock
例）It's three o'clock.（3時です）
例）It's seven o'clock now.（今、7時です）
o'clock は「ちょうど」という意味を含むので、分がある時刻には付けない。× It's three thirty o'clock. は誤り。

■ 分がある時刻：時＋分をそのまま数字で言う
例）It's three fifteen.（3時15分です）
例）It's seven forty-five.（7時45分です）
これがいちばんシンプルで、日常会話でもっともよく使われる言い方である。

■ 「〜時半」：half past ＋時、または時＋thirty
例）It's half past three.（3時半です）＝ It's three thirty.
half past のあとに来るのは「これから迎える時刻」ではなく「今の時」であることに注意（3時半なら past three で、four ではない）。

★ ポイント：時刻を答えるときの主語はつねに it。天候・日付と同じ「訳さない it」の仲間である。`,
      },
      {
        heading: '「〜分前・過ぎ」と午前・午後の言い方',
        body: `分きざみの言い方に加えて、「15分前」「15分過ぎ」を表す型も覚えておくと、ネイティブらしい時刻表現ができるようになる。

■ a quarter（15分）を使った言い方
a quarter past ＋時：「〜時15分過ぎ」
　例）It's a quarter past nine.（9時15分です）＝ It's nine fifteen.
a quarter to ＋時：「〜時15分前」＝次の時刻の15分前
　例）It's a quarter to nine.（8時45分です）＝ It's eight forty-five.
quarter は「4分の1」の意味で、1時間（60分）の4分の1＝15分を表す。

■ 「〜分前」の一般形：数字＋分＋to＋時
a quarter to だけでなく、任意の分数でも to を使って「〜分前」を表せる。
　例）It's ten to eight.（8時10分前＝7時50分）
　例）It's five to twelve.（12時5分前＝11時55分）

■ 午前・午後の表し方
数字のうしろに a.m.（午前）／p.m.（午後）を付ける。
　例）School starts at eight thirty a.m.（学校は午前8時30分に始まる）
　例）The store closes at nine p.m.（その店は午後9時に閉まる）
時刻を「seven o'clock」のように言葉で言うときは、morning（朝）・afternoon（午後）・evening（夕方）を添えて午前・午後を表すことも多い。
　例）I get up at six in the morning.（朝6時に起きる）

⚠ 注意：a.m. / p.m. は数字の時刻（8:30 a.m.）に付けるのが基本で、o'clock と一緒には使わない。× eight o'clock a.m. とは言わない。`,
      },
    ],
    trapExamples: [
      {
        question: '「3時30分です」を英語にしなさい。',
        wrongAnswer: "It's three thirty o'clock.",
        trapExplanation: '「〜時」にはいつも o\'clock を付けるものだと思いこみ、分がある時刻にまで機械的に付けてしまう。',
        correctAnswer: "It's three thirty. （または It's half past three.）",
        correctExplanation: "o'clock は「ちょうど〜時」というときにだけ使う語で、分の数字が付く場合は使わない。three thirty または half past three のどちらかで表す。",
      },
      {
        question: '「8時45分です」を quarter を使って英語にしなさい。',
        wrongAnswer: "It's a quarter past nine.",
        trapExplanation: '「8時台の話だから nine ではなく eight のはず」と考えず、日本語の「45分」という数字の大きさだけを見て、次の時刻（nine）に past を付けてしまう。',
        correctAnswer: "It's a quarter to nine.",
        correctExplanation: '45分は「次の時刻まであと15分」の状態なので、past（過ぎ）ではなく to（〜前）を使い、次に来る時刻 nine を続ける。past は「その時刻を過ぎて何分」、to は「次の時刻まであと何分」と考えると迷わない。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    title: '天気と気温を表す it の文',
    description: 'It is sunny. のように「訳さない it」を主語にして、天気・気温をたずねたり答えたりする表現を身につける',
    intro: '「今日は晴れだ」を英語にするとき、「今日」を主語にしようとして迷った経験はないだろうか。英語では天気の文の主語はいつも it に決まっている。この it は「それ」という意味を持たない、天気の話をするための決まった置き物のような主語である。',
    order: 7583,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '天気を言う文の主語はつねに it。この it は「それ」とは訳さない。',
      '「晴れ」sunny、「雨」rainy、「くもり」cloudy、「雪」snowy、「風が強い」windy はどれも形容詞。',
      "天気をたずねる文は How's the weather? または What's the weather like?。",
      "気温は It's ＋数字＋ degrees（Celsius／Fahrenheit）で表す。",
      '「暑い・寒い・暖かい・涼しい」は hot / cold / warm / cool。天気そのものではなく気温の感覚を表す。',
      "It's raining. のように be動詞＋ing で「今、雨が降っている」という進行中の天気も表せる。",
    ],
    sections: [
      {
        heading: '天気を表す it の文',
        body: `天気を伝える文はどれも「It is ＋天気を表す形容詞」の形になる。主語を weather や today にしないことが最大のポイントである。

■ 基本の形：It is（It's）＋形容詞
例）It's sunny today.（今日は晴れだ）
例）It's rainy in Tokyo.（東京は雨だ）
例）It's cloudy this morning.（今朝はくもりだ）
例）It's snowy in Hokkaido.（北海道は雪だ）
例）It's windy on the beach.（浜辺は風が強い）

■ 「〜している最中」を表す進行形の天気
例）It's raining now.（今、雨が降っている）
例）It was snowing when I woke up.（起きたとき雪が降っていた）
sunny や cloudy は状態そのものを表す形容詞なので進行形にしないが、rain（雨が降る）や snow（雪が降る）は動詞としても使え、そのときは進行形にできる。

■ たずね方
How's the weather today?（今日の天気はどうですか）
What's the weather like in Osaka?（大阪の天気はどんな感じですか）
— It's sunny and warm.（晴れて暖かいです）

★ ポイント：天気の文の主語 it は、前の文の何かを指しているわけではない。英語の文には必ず主語が必要なので、話題がない天気の話にも形式的に it を立てている、と理解しておく。`,
      },
      {
        heading: '気温を表す表現と、天気・気温のちがい',
        body: `「天気」（晴れ・雨・くもり）と「気温」（暑い・寒い）は別の情報である。日本語ではまとめて「今日は暑くて晴れている」のように言えるが、英語でもこの2つを並べて言うことができる。

■ 気温を数字で言う：It's ＋数字＋ degrees
例）It's 30 degrees today.（今日は30度だ）
例）It's below zero this morning.（今朝は氷点下だ）
気温の単位には Celsius（摂氏）と Fahrenheit（華氏）があり、日本では主に Celsius を使う。degrees Celsius と続けて言うこともある。

■ 気温を感覚で言う：hot / cold / warm / cool
hot（暑い）・cold（寒い）・warm（暖かい）・cool（涼しい）は、天気そのものではなく「体で感じる温度」を表す形容詞である。
例）It's hot and sunny today.（今日は暑くて晴れている）
例）It's cold and windy in winter.（冬は寒くて風が強い）
このように sunny/rainy のグループと hot/cold のグループを and でつなげば、天気と気温を1文でまとめて言える。

■ 天気をたずねる会話の型
A: How's the weather in London?
B: It's cloudy and cool.
A: What's the temperature there?
B: It's about 15 degrees.

⚠ 注意：気温をたずねるときは weather ではなく temperature（気温）という語を使う。What's the weather? と What's the temperature? は別の質問なので、聞かれている内容に合わせて答える。`,
      },
    ],
    trapExamples: [
      {
        question: '「今日は晴れです」を英語にしなさい。',
        wrongAnswer: 'Today is sunny.',
        trapExplanation: '日本語の「今日は」につられて today を主語にしてしまう。文法的に誤りとまでは言えないが、天気の文の基本形からは外れており、入試では減点対象になりやすい。',
        correctAnswer: "It's sunny today.",
        correctExplanation: '天気の文は主語を it に固定し、today のような時を表す語は文末に置くのが基本の型。sunny・rainy・cloudy などの形容詞を使うときは、この型をそのまま覚えて使う。',
      },
      {
        question: "「It's raining now.」の it の意味を答えなさい。",
        wrongAnswer: '「それ」という意味で、前に出てきた何かを指している。',
        trapExplanation: '代名詞 it は必ず何かを指すものだと思いこみ、天気の it も同じ働きだと考えてしまう。',
        correctAnswer: '特に何も指さない、天気の文に決まって使われる形式的な主語。',
        correctExplanation: '天気・時刻・日付・距離を表す文の it は、英語の文に主語が必要だから形の上で置かれているだけで、何かを指しているわけではない。日本語には対応する語がないため訳さないのが自然である。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    title: '数字の読み方①：基数と値段の言い方',
    description: '1から大きな数までの読み方と、How much is this? への値段の答え方を練習する',
    intro: '13（thirteen）と30（thirty）、14（fourteen）と40（forty）――発音もつづりもよく似ているのに意味はまるで違う数字が英語にはたくさんある。買い物や日付、値段など生活のあらゆる場面で数字は使うので、ここでしっかり読み方の型を固めておこう。',
    order: 7584,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '13〜19は -teen、20・30・40…は -ty で終わる。発音・アクセントの位置が異なる。',
      '21以降は十の位と一の位をハイフンでつなぐ（twenty-one, thirty-five）。',
      'hundred（百）・thousand（千）は、直前に数字が付くとき複数形の s を付けない（three hundred, not three hundreds）。',
      '「合計で」という意味を出すときだけ hundreds of 〜（何百もの〜）のように複数形＋ of を使う。',
      "値段をたずねる文は How much is this? で、答えは It's ＋金額。",
      '値段が複数ある場合は How much are these? のように are を使う。',
    ],
    sections: [
      {
        heading: '数字の読み方：まぎらわしい -teen と -ty',
        body: `13から19までの -teen の仲間と、20・30・40…の -ty の仲間は、つづりが似ているうえに発音のアクセント（強く読む位置）が逆になるため、聞き分け・言い分けの両方でまちがえやすい。

■ -teen の仲間（13〜19）：うしろにアクセント
thirteen（13）・fourteen（14）・fifteen（15）・sixteen（16）・seventeen（17）・eighteen（18）・nineteen（19）
このグループは語尾の -teen を強く長く読む。

■ -ty の仲間（20・30・40…）：前にアクセント
twenty（20）・thirty（30）・forty（40）・fifty（50）・sixty（60）・seventy（70）・eighty（80）・ninety（90）
このグループは語の前半を強く短く読む。40は fourty ではなく forty（u が入らない）というつづりの違いにも注意。

■ 21以降の作り方：十の位－一の位
21以降は「-ty の数」と「1〜9」をハイフンでつないで作る。
例）twenty-one（21）・thirty-five（35）・forty-nine（49）・ninety-nine（99）

■ 発音の練習法
thirteen と thirty、fourteen と forty のペアを、アクセントの位置を意識しながら声に出して比べる練習が効果的である。リスニング問題でも頻出のポイントである。

⚠ 注意：13〜19の -teen グループと20以降の -ty グループは、日本語の音では区別しにくいので、必ず英語の音のリズムで覚え直すこと。`,
      },
      {
        heading: '百・千の言い方と、値段のたずね方',
        body: `大きな数を作るときは hundred（百）・thousand（千）を使うが、これらは数字が直前に付くと複数形にしない、という特別なルールがある。

■ hundred / thousand の使い方
例）one hundred（100）・three hundred（300）・five hundred（500）
例）one thousand（1000）・two thousand（2000）
数字＋hundred／thousand のときは s を付けない。× three hundreds としない。

■ hundred and 〜：百のうしろに端数を続ける
例）three hundred and fifty（350）
例）five hundred and twenty-one（521）
イギリス式では and を入れるのがふつうで、アメリカ式では省略することもある。

■ 「何百もの」というときだけ複数形＋of
例）hundreds of people（何百人もの人々）
例）thousands of stars（何千もの星）
この場合は具体的な数字ではなく「たくさん」という意味なので、hundred / thousand が複数形になり、あとに of を付ける。

■ 値段のたずね方と答え方
How much is this bag?（このかばんはいくらですか）— It's 3,000 yen.
How much are these shoes?（この靴はいくらですか）— They're 8,000 yen.
1つのものには is、2つ以上（対になっているもの・複数のもの）には are を使う。答えるときも It's／They're を主語に合わせて選ぶ。

★ ポイント：値段の文は「数えられない金額」として is で受けるのが基本だが、shoes・glasses のように形が複数扱いの名詞は are・they で受ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「300人」を英語にしなさい。',
        wrongAnswer: 'three hundreds people',
        trapExplanation: '「たくさん」を表すときに複数形にする hundreds という形を思い出し、具体的な数字が付く場合にも同じように s を付けてしまう。',
        correctAnswer: 'three hundred people',
        correctExplanation: '数字がすぐ前に付くときの hundred / thousand は複数形にしない。s が付くのは hundreds of people（何百人もの人）のように、具体的な数字を示さず「たくさん」という意味で使うときだけである。',
      },
      {
        question: '"13" と "30" を正しく聞き分けるポイントを説明しなさい。',
        wrongAnswer: 'つづりが違うので、聞けばすぐわかる。',
        trapExplanation: 'つづりの違いだけに注目し、発音上どこを強く読むかという聞き分けのポイントを意識していない。',
        correctAnswer: '13（thirteen）はうしろの -teen を強く長く、30（thirty）は前の thir- を強く読む。アクセントの位置の違いで聞き分ける。',
        correctExplanation: '-teen の仲間はうしろにアクセントがあり teen の部分がはっきり長く聞こえるのに対し、-ty の仲間は前にアクセントがあり語尾が短く弱く聞こえる。リスニング問題ではこの違いが正解を分ける決め手になることが多い。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    title: '数字の読み方②：序数の形とつづり',
    description: 'first・second・third から thirty-first までの序数のつづりと、日付・順位での使い方を身につける',
    intro: '「1番目」「2番目」を表す序数は、日付を読んだり、順位を言ったり、建物の階数を言ったりと、実は基数（one, two, three…）と同じくらいよく使う。first・second・third の3つだけ形が大きく変わり、あとは規則的――この構造をつかめば一気に覚えられる。',
    order: 7585,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '1〜3番目は特別な形：first（1st）・second（2nd）・third（3rd）。',
      '4番目以降は基数に -th を付けるのが基本：fourth, fifth, sixth…',
      'つづりが変化する語に注意：five→fifth、eight→eighth、nine→ninth、twelve→twelfth。',
      '20・30などの -ty で終わる数は、y を i に変えて -eth：twenty→twentieth、thirty→thirtieth。',
      '21以降の複合語は最後の数だけ序数にする：twenty-first、thirty-second。',
      '序数は日付（May 5th）・階数（the third floor）・順位（the first prize）などで使う。',
    ],
    sections: [
      {
        heading: '序数の基本の形',
        body: `序数（1番目・2番目…を表す語）は、1〜3だけ特別な形をとり、4以降は規則的に作れる。

■ 特別な形（1〜3）
1st: first　2nd: second　3rd: third
この3つは基数（one, two, three）とはまったく違う形なので、そのまま丸ごと覚えるしかない。

■ 規則的な形（4〜19）：基数＋th
4th: fourth　6th: sixth　7th: seventh　10th: tenth　11th: eleventh　13th: thirteenth
基本は基数の語尾に th を付けるだけだが、つづりが変化するものが4つある。
・five → fif＋th → fifth（ve が f に変わる）
・eight → eigh＋th → eighth（t が1つになる、e を重ねない）
・nine → nin＋th → ninth（e が落ちる）
・twelve → twelf＋th → twelfth（ve が f に変わる）

■ -ty の数（20・30…）：y を i に変えて -eth
20th: twentieth　30th: thirtieth　40th: fortieth　50th: fiftieth
y で終わる語に -eth を付けるときは、y を i に変えるという、形容詞の比較級（happy→happier）と似たルールが働く。

★ ポイント：4以降は「th を足すだけ」が基本方針だが、5・8・9・12だけ例外的につづりが変わることを意識して覚える。`,
      },
      {
        heading: '複合語の序数と、序数の使いどころ',
        body: `21以降のように2語以上をハイフンでつなぐ数の場合、序数にするのは最後の数だけである。

■ 複合語の序数
21st: twenty-first（twenty はそのまま、first だけ序数）
32nd: thirty-second
43rd: forty-third
99th: ninety-ninth
31st: thirty-first
「十の位はそのまま、一の位だけ序数の形にする」というルールを覚えておけば、31から99までのどんな数にも対応できる。

■ 序数が使われる場面
①日付：May 5th（5月5日）、on the 21st of June（6月21日に）
②階数：the third floor（3階）、live on the tenth floor（10階に住む）
③順位・順番：the first prize（1等賞）、for the first time（初めて）、the second question（2番目の問題）
④学年・回数：first grade（1年生）、the fifth lesson（第5課）

■ 序数の前には the が付くことが多い
序数は「決まった1つのもの」を指すことが多いため、the と一緒に使うのが基本である。
例）Ken finished first.（ケンは1着だった）※スポーツの順位のように the を付けない場合もある
例）the first day of school（学校の初日）
例）This is my third time to visit Kyoto.（これで京都を訪れるのは3回目だ）

⚠ 注意：序数を数字＋th の記号で書くとき（1st, 2nd, 3rd, 4th）、th の前の数字が4以降ならどれも th、1・2・3は st／nd／rd と特別な記号を使うことを忘れないようにする。`,
      },
    ],
    trapExamples: [
      {
        question: '「5番目」を英語のつづりで書きなさい。',
        wrongAnswer: 'fiveth',
        trapExplanation: '4以降は基数にそのまま th を足せばよいというルールだけを覚えていて、five が例外的につづりを変えることを知らない。',
        correctAnswer: 'fifth',
        correctExplanation: 'five は th を付けるときに ve を f に変え、さらに e を1つ省いて fifth となる。eight→eighth、nine→ninth、twelve→twelfth も同じように変化するので、5・8・9・12の4つはセットで例外として覚える。',
      },
      {
        question: '「21番目」を英語のつづりで書きなさい。',
        wrongAnswer: 'twentyfirst',
        trapExplanation: '複合語のつなぎ方を忘れ、ハイフンを入れずに続けて書いてしまう。また twenty 自体を序数にしてしまう誤りもよくある。',
        correctAnswer: 'twenty-first',
        correctExplanation: '21以降の複合語の序数は、十の位（twenty）はそのままの形にして、一の位（first）だけを序数にし、間をハイフンでつなぐ。twenty-first, thirty-second のように、最後の数だけ序数化する規則を徹底する。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    title: '疑問詞 which：二つ以上から選ぶ疑問文',
    description: 'what との違いを意識しながら、限られた選択肢の中から選ばせる which の使い方を身につける',
    intro: '「どっちが好き？」と聞くとき、日本語では相手にいくつ選択肢があるかを気にせず言えるが、英語では話す前に選択肢の数を意識する必要がある。決まった数の中から選ばせるなら which、無限の中から自由に答えさせるなら what――この使い分けが今回のテーマである。',
    order: 7586,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'which は「（限られた選択肢の中から）どれ・どちら」をたずねる疑問詞。',
      'which のあとに名詞を続けると「どの〜」という意味になる（Which bag is yours?）。',
      'A or B を文末に付けて、比べる相手を明示することが多い（Which do you like, tea or coffee?）。',
      'what は「何」を自由に答えさせるのに対し、which は選択肢が決まっているときに使う。',
      'Which of the 〜 で「〜のうちのどれ」という意味になる（Which of the three do you want?）。',
      '答えるときは選んだものをそのまま言えばよい（— I like coffee. ／ — The blue one.）。',
    ],
    sections: [
      {
        heading: 'which の基本の形と使い方',
        body: `which は「決まった数の中からどれか」をたずねる疑問詞である。使い方は2通りある。

■ ①代名詞として使う：Which is 〜?（どちらが〜ですか）
例）Which is your bag, this one or that one?（このかばんとあのかばん、どちらがあなたのですか）
例）Which do you want, coffee or tea?（コーヒーと紅茶、どちらがほしいですか）
このように、文末に or でつないだ2つ（またはそれ以上）の選択肢を置くのが典型的な形である。

■ ②形容詞として使う：Which ＋名詞（どの〜）
例）Which bag is yours?（どのかばんがあなたのですか）
例）Which train should I take?（どの電車に乗ればいいですか）
which のすぐあとに名詞を続けると「どの〜」という意味になり、what と同じように名詞を修飾できる。

■ what との違い
What do you want to drink?（何が飲みたいですか）――選択肢を示さず自由に答えさせる。
Which do you want, juice or water?（ジュースと水、どちらがほしいですか）――示した2つから選ばせる。
話し手が具体的な候補を思い浮かべているかどうかで which と what を使い分ける。

★ ポイント：目の前に選べるものが実際に見えている・限られている場面（メニュー、色違いの品物など）では which、答えが無数に考えられる場面では what、と覚えるとよい。`,
      },
      {
        heading: 'Which of 〜 と答え方',
        body: `3つ以上の中から選ばせるときや、集団の中から選ばせるときは、Which of the 〜 という形をよく使う。

■ Which of the 〜?（〜のうちのどれ）
例）Which of the three bags is yours?（3つのかばんのうち、どれがあなたのですか）
例）Which of these pictures do you like best?（これらの絵の中でどれがいちばん好きですか）
of のあとには「the ＋複数名詞」や「these／those ＋複数名詞」が続く。

■ 答え方
選んだものをそのまま答えるのが基本。
　Which do you like, this one or that one? — I like this one.
　Which of the three do you want? — I want the red one.
one は「同じ種類のもの」を指す代名詞で、前に出た名詞（bag, pen など）の代わりに使うと答えが簡潔になる。

■ 会話でよく使う言い回し
Which is which?（どっちがどっちですか＝見分けがつかないとき）
It doesn't matter which.（どちらでもかまいません）

⚠ 注意：選択肢を示さずに「どれがほしい？」と聞くつもりで which を使うと、相手は「何を基準に選べばいいのか」と迷ってしまう。which を使うときは、A or B のように比べる対象をはっきりさせるのが原則である。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは何が食べたいですか（自由に）」を英語にしなさい。',
        wrongAnswer: 'Which do you want to eat?',
        trapExplanation: '「〜がほしい」という日本語だけを見て、疑問詞の使い分けを考えずに前回学んだ形をそのまま使ってしまう。',
        correctAnswer: 'What do you want to eat?',
        correctExplanation: '選択肢を示さず自由に答えさせる場合は what を使う。目の前に決まった候補がある場合（Which do you want, pizza or pasta?）だけ which を使う、という区別を徹底する。',
      },
      {
        question: '「このペンとあのペン、どちらがあなたのですか」を英語にしなさい。',
        wrongAnswer: 'What is yours, this pen or that pen?',
        trapExplanation: '「どちら」という日本語を反射的に what に結びつけてしまい、2つの中から選ばせる文脈であることを見落としている。',
        correctAnswer: 'Which is yours, this pen or that pen?',
        correctExplanation: '文末に this pen or that pen という具体的な2つの選択肢が示されているので、which を使うのが正しい。or で選択肢が並んでいるかどうかは which を選ぶ強い手がかりになる。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    title: '疑問詞 whose：持ち主をたずねる疑問文',
    description: '「これはだれの〜ですか」をたずねる whose の使い方と、まぎらわしい who\'s との違いを整理する',
    intro: "落とし物のかさを見つけたとき、「これはだれのかさ？」と聞きたい。この「だれの」にあたる英語が whose である。発音がまったく同じ who's（who is の短縮形）と混同しやすいので、意味の違いをはっきりさせておこう。",
    order: 7587,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'whose は「だれの〜」と持ち主をたずねる疑問詞。',
      'whose のあとに名詞を続けると「だれの〜」という意味になる（Whose bag is this?）。',
      'whose 単独でも「だれのもの」という意味で使える（Whose is this?）。',
      "答えるときは「所有格＋名詞」または「所有代名詞」で答える（— It's Ken's. ／ — It's mine.）。",
      "whose と who's（=who is）は発音が同じだが意味も働きもまったく違うので、文脈とつづりで区別する。",
      'whose は疑問詞としてだけでなく、関係代名詞としても使われる（発展学習）。',
    ],
    sections: [
      {
        heading: 'whose の基本の形',
        body: `whose は「だれの」という意味の疑問詞で、名詞の前に置いて使うのが基本の形である。

■ Whose ＋名詞 〜?（だれの〜ですか）
例）Whose bag is this?（これはだれのかばんですか）— It's Ken's.（ケンのです）
例）Whose umbrella is that?（あれはだれのかさですか）— It's mine.（私のです）
例）Whose books are these?（これらはだれの本ですか）— They're Emi's.（エミのです）
名詞が単数か複数かによって is / are を使い分ける点は、ふつうの be動詞の疑問文と同じである。

■ Whose だけで使う場合（名詞を省略する形）
すでに何を指しているかが明らかなときは、whose のあとの名詞を省略できる。
例）Whose is this?（これはだれのですか）— It's mine.
例）A: I found a pen. B: Whose is it?（ペンを見つけたよ／だれのだろう）
この場合の whose は、疑問代名詞として単独で「だれのもの」という意味を表している。

■ 答え方：所有格 or 所有代名詞
「〜のもの」と答えるには2通りの形がある。
①人名＋'s：It's Ken's.（ケンのです）
②所有代名詞：mine, yours, his, hers, ours, theirs
　例）Whose pen is this? — It's hers.（彼女のです）

★ ポイント：whose の疑問文には Yes / No で答えず、「持ち主が誰か」を答える。他の疑問詞の疑問文と同じ原則である。`,
      },
      {
        heading: 'whose と who\'s の区別',
        body: `whose と who's（who is または who has の短縮形）はまったく同じ発音（フーズ）をするが、意味も文法上の働きもまったく別の語である。書くときに混同すると誤りになる。

■ whose：疑問詞「だれの」。あとに名詞（または省略）が続く
例）Whose phone is this?（これはだれの携帯電話ですか）

■ who's：who is／who has の短縮形。あとに名詞は続かない
例）Who's that boy?（あの男の子はだれですか）＝ Who is that boy?
例）Who's finished the homework?（だれが宿題を終えましたか）＝ Who has finished the homework?

■ 見分け方のこつ
文を書くときは「省略をもとに戻して意味が通るか」を確認する。
　Whose phone is this? → Who is phone is this?（意味が通らない）→ whose が正しい
　Who's that boy? → Who is that boy?（意味が通る）→ who's が正しい
名詞（phone, bag, book など）が whose のすぐあとに続いていれば whose、be動詞や過去分詞が続いていれば who's、と覚えておくと選びやすい。

■ 会話での使い分け練習
Whose turn is it?（だれの番ですか）
Who's coming to the party?（だれがパーティーに来ますか）

⚠ 注意：スペリング問題や並べかえ問題で whose と who's はよく引っかけとして出題される。発音记号だけを頼りに書くと必ずどちらかを取り違えるので、「持ち主をたずねているか」「who is／who has の短縮か」を意味で判断する習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: "（ ）is that girl over there? に適切な語を入れなさい。（Whose / Who's）",
        wrongAnswer: 'Whose is that girl over there?',
        trapExplanation: '発音が同じであるため、どちらを書いても正しいだろうと考え、見た目が疑問詞らしい whose を選んでしまう。',
        correctAnswer: "Who's is that girl over there? ではなく Who's that girl over there?（Who is that girl over there?）",
        correctExplanation: 'この文は「あの女の子はだれですか」という意味で、持ち主をたずねているわけではないので who is の短縮形 who\'s を使う。whose を使うのは Whose bag is that? のように、あとに名詞（持ち物）が続くときだけである。',
      },
      {
        question: '「これはだれのノートですか」を英語にしなさい。',
        wrongAnswer: "Who's notebook is this?",
        trapExplanation: "「だれの」という日本語につられて who's を使ってしまうが、これは who is の短縮形であり、名詞（notebook）を修飾する働きは持たない。",
        correctAnswer: 'Whose notebook is this?',
        correctExplanation: '名詞 notebook の前に置いて「だれの〜」という意味を作れるのは疑問詞 whose だけである。who\'s（=who is）のあとに名詞を直接続けることはできない、という点を必ず区別して覚える。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    title: '疑問詞の総整理：who・what・which・whose の使い分け',
    description: '「だれ」「何」「どれ」「だれの」をたずねる4つの疑問詞を1つの表にして、見分け方を仕上げる',
    intro: 'who・what・which・whose はどれも日本語にすると「だれ」「何」「どれ」「だれの」と似たような響きになるため、英作文のときにどれを選べばいいか迷いやすい。ここまで学んだ知識を1つにまとめ、見分け方の最終チェックをしよう。',
    order: 7588,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'who：人をたずねる「だれ」。主語にも目的語にもなる。',
      'what：物やことがらをたずねる「何」。選択肢を示さない自由な問い。',
      'which：限られた選択肢からたずねる「どれ・どちら」。A or B と組み合わせやすい。',
      'whose：持ち主をたずねる「だれの」。あとに名詞が続くか、単独で使う。',
      '4つとも疑問詞なので、答えるときは Yes / No ではなく聞かれた中身を答える。',
      'which と what はどちらも名詞の前に置けるが、意味（選択肢の有無）で使い分ける。',
    ],
    sections: [
      {
        heading: '4つの疑問詞を1つの表で比べる',
        body: `4つの疑問詞は、たずねる対象と使い方によって整理できる。

■ who（だれ）――人をたずねる
例）Who is that man?（あの男の人はだれですか）
例）Who broke the window?（だれが窓を割りましたか）※主語になる場合は語順そのまま
who は「人」だけをたずね、物には使わない。

■ what（何）――物・ことがらを自由にたずねる
例）What is this?（これは何ですか）
例）What do you want for your birthday?（誕生日に何がほしいですか）
what は選択肢を示さず、答えの範囲を限定しない。名詞の前に置くと「何の〜」（What sport do you like?）という意味にもなる。

■ which（どれ・どちら）――限られた選択肢からたずねる
例）Which do you like, dogs or cats?（犬とねこ、どちらが好きですか）
例）Which bag is yours?（どのかばんがあなたのですか）
話し手の頭の中にすでに候補がある、または文の中に or で候補が示されているときに使う。

■ whose（だれの）――持ち主をたずねる
例）Whose pen is this?（これはだれのペンですか）
例）Whose is this?（これはだれのですか）
whose だけが「持ち主」という所有の関係をたずねる特別な役割を持つ。

★ ポイント：4つとも「人か物か」「選択肢があるかないか」「持ち主をたずねているか」という3つの軸で整理すると混同しなくなる。`,
      },
      {
        heading: '見分け方のチェックリストと実戦練習',
        body: `日本語の問題文から英文を作るときは、次の順番でチェックすると迷わない。

■ チェックの手順
①「だれの〜」（所有）を聞いているか → whose
②「だれ」（人そのもの）を聞いているか → who
③選択肢が示されている、または限られているか → which
④それ以外（自由に答えさせる物・こと） → what

■ 実戦練習（日本語→疑問詞の選び方）
「これはだれのくつですか」→ 持ち主 → Whose shoes are these?
「あなたのお姉さんはだれですか」→ 人 → Who is your sister?
「テニスとサッカー、どちらが好きですか」→ 限られた2択 → Which do you like, tennis or soccer?
「休みの日は何をしますか」→ 自由な答え → What do you do on your day off?

■ 4つに共通する注意点
①疑問詞は必ず文の先頭に置く。
②疑問詞のあとは（主語をたずねる場合を除き）疑問文の語順を保つ。
③Yes / No では答えない。聞かれた中身をそのまま答える。

■ よくある混同パターンのまとめ
what と which：選択肢の有無で判断。
who と whose：「人そのもの」か「持ち主」かで判断。
which と whose：「選ぶ」のか「持ち主を聞く」のかで判断（Which bag do you want? と Whose bag is this? は別の質問）。

⚠ 注意：4つの疑問詞はどれも「あとに名詞を置ける」という共通点があるため（who を除く）、名詞が付いているかどうかだけで判断せず、必ず「何をたずねているか」という意味で選ぶこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたはどの色が好きですか（青・赤・黄色の3色から）」を英語にしなさい。',
        wrongAnswer: 'What color do you like?',
        trapExplanation: '「何色」という日本語をそのまま what に結びつけてしまい、実際には3色という限られた選択肢から選ばせる場面であることを見落としている。',
        correctAnswer: 'Which color do you like, blue, red, or yellow?',
        correctExplanation: '候補がすでに3つに限定されているので which を使う。what color も文法的には作れるが、候補を示さず自由にたずねる場合に使うのが自然で、候補がはっきりしている今回の場面では which がより適切である。',
      },
      {
        question: '「これはだれの自転車ですか」と「あの自転車に乗っているのはだれですか」を正しく訳し分けなさい。',
        wrongAnswer: '両方とも Who is this bike? / Who is riding that bike? のように who を使う。',
        trapExplanation: '「だれ」という日本語の響きに引っぱられ、持ち主をたずねる文にも who を使ってしまう。',
        correctAnswer: 'Whose bike is this?／Who is riding that bike?',
        correctExplanation: '「だれの自転車か」は持ち主をたずねているので whose、「だれが乗っているか」は人そのものをたずねているので who を使う。日本語の「だれ」という音だけで判断せず、たずねている中身（持ち主か人か）を確認する。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    title: '場所の前置詞①：in・on・at の基本区別',
    description: '「囲まれた空間」「接している面」「1つの点」というイメージで in・on・at を使い分ける',
    intro: '「in the box」「on the desk」「at the door」――日本語ではどれも「〜に」で済ませられるのに、英語では場所によって前置詞を使い分けなければならない。これは意味を丸暗記するのではなく、「空間・面・点」という3つのイメージで理解すると、どんな場所にも応用できるようになる。',
    order: 7589,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'in：「囲まれた空間の中」を表す（in the box, in the room, in Tokyo, in Japan）。',
      'on：「面に接している」を表す（on the desk, on the wall, on the ceiling）。',
      'at：「地図上の1つの点」として場所をとらえる（at the door, at the station, at school）。',
      '広い場所（国・都市）は in、狭い1点として意識する場所は at、という感覚の違いがある。',
      '同じ場所でも、話し手のとらえ方によって前置詞が変わることがある（in the park／at the park）。',
      'live（住む）、study（勉強する）などの動詞のあとにも、この in / on / at の区別がそのまま使われる。',
    ],
    sections: [
      {
        heading: 'in：囲まれた空間の中',
        body: `in は「三次元の空間に囲まれている」というイメージを持つ前置詞である。箱の中身のように、周りを何かで囲まれている場所に使う。

■ 身近な物の中
例）There is a pen in the box.（箱の中にペンがある）
例）She is in the kitchen.（彼女は台所にいる）
例）My key is in my bag.（かぎはかばんの中にある）

■ 広い場所（国・都市・地域）
in は国や都市のように、広がりのある面積を持つ場所にも使う。
例）I live in Osaka.（私は大阪に住んでいる）
例）Tokyo is in Japan.（東京は日本にある）
例）There are many parks in this city.（この市にはたくさんの公園がある）

■ 覚え方のイメージ
in を使う場所は「外側の枠があり、その中に入っている」と想像するとよい。箱、部屋、建物、市、国――どれも境界線で囲まれた空間として意識されている。

★ ポイント：in は空間の広さに関係なく、「囲まれている」という感覚で選ぶ前置詞である。狭い箱にも、広い国にも同じ in が使われるのはこのためである。`,
      },
      {
        heading: 'on：面に接している／at：1つの点',
        body: `on と at は in とは違い、空間の中ではなく「面」または「点」という別のイメージを持つ。

■ on：面に接触している
on は「表面にくっついている」という意味を持つ。上に乗っている場合も、壁のように横向きの面にくっついている場合も on を使う。
例）There is a book on the desk.（机の上に本がある）
例）There is a picture on the wall.（壁に絵がかかっている）
例）Don't sit on the grass.（芝生の上に座らないで）
壁の絵は「壁の中」ではなく「壁の面にくっついている」と考えるので in ではなく on になる。

■ at：地図上の1つの点
at は場所を「広がり」としてではなく「1つの点」としてとらえるときに使う。駅・バス停・入り口のように、待ち合わせ場所として意識される地点によく使われる。
例）Let's meet at the station.（駅で会いましょう）
例）Turn left at the corner.（角を左に曲がって）
例）I'll wait for you at the door.（ドアのところで待っています）

■ at school のような特別な使い方
school, home, work は「そこで何をしているか」に意識が向くとき at を使うことが多い。
例）I'm at school now.（今、学校にいます＝授業中という状況を含む）
例）She is at home today.（彼女は今日、家にいます）

⚠ 注意：同じ「公園」でも、公園という広い空間の中にいることを言いたければ in the park、待ち合わせ場所として1つの地点を示したければ at the park、というように話し手の意識で前置詞が変わることがある。丸暗記だけでなく、イメージで理解しておくと応用がきく。`,
      },
    ],
    trapExamples: [
      {
        question: '「壁に地図がかかっている」を英語にしなさい。',
        wrongAnswer: 'There is a map in the wall.',
        trapExplanation: '「壁」という言葉から、壁の中に何かが入っているようなイメージを持ち、in を選んでしまう。',
        correctAnswer: 'There is a map on the wall.',
        correctExplanation: '地図は壁の中に入っているのではなく、壁の面にくっついているので on を使う。天井の照明（on the ceiling）や床の絨毯（on the floor）も同じように「面に接している」と考えて on を使う。',
      },
      {
        question: '「駅で会いましょう」を英語にしなさい。',
        wrongAnswer: "Let's meet in the station.",
        trapExplanation: '駅という建物の中にいる場面を想像し、囲まれた空間を表す in を選んでしまう。',
        correctAnswer: "Let's meet at the station.",
        correctExplanation: '待ち合わせ場所としての「駅」は、建物の内部というより地図上の1つの目印（点）としてとらえるので at を使う。「駅の建物の中の特定の場所」を具体的に示す場合（in the station building など）は in が使われることもあるが、待ち合わせ表現の基本は at the station である。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    title: '場所の前置詞②：under・near・between・next to・in front of・behind',
    description: '物の位置関係を細かく説明する前置詞句を、There is / are の文とあわせて練習する',
    intro: 'ねこがテーブルの下にいるのか、上にいるのか、それとも横にいるのか――位置関係を正確に伝えるには in や on だけでは足りない。ここでは「下・近く・間・となり・前・後ろ」を表す前置詞（句）をまとめて身につけ、There is / are の文と組み合わせて使えるようにしよう。',
    order: 7590,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'under：「〜の下に」（真下、覆われている位置関係）。',
      'near／by：「〜の近くに」。by のほうがより近い距離を表すことが多い。',
      'between A and B：「AとBの間に」。2つのものにはさまれている位置。',
      'among：「（3つ以上）の間に」。between は2つ、among は3つ以上で使い分ける。',
      'next to／beside：「〜のとなりに」。',
      'in front of：「〜の前に」／behind：「〜の後ろに」。この2つは対になる前置詞句。',
    ],
    sections: [
      {
        heading: '上下・近く・前後を表す前置詞',
        body: `位置関係を表す語の多くは、対になるペアで覚えると効率がよい。

■ under（〜の下に）
例）The cat is under the table.（ねこはテーブルの下にいる）
例）There is a ball under the chair.（いすの下にボールがある）
under は「真下」または「覆われた位置」を表す。反対の意味を持つのが over（〜の真上に、〜を越えて）である。

■ in front of（〜の前に）と behind（〜の後ろに）
例）There is a tree in front of the house.（家の前に木がある）
例）The park is behind the school.（公園は学校の後ろにある）
in front of は3語で1つの前置詞のように働く。behind は1語で「後ろ」を表す。

■ near と by（〜の近くに）
例）I live near the station.（私は駅の近くに住んでいる）
例）She was sitting by the window.（彼女は窓のそばに座っていた）
near は「近い」という広めの距離を表し、by はさらに接近した「すぐそば」という距離感を持つことが多い。

★ ポイント：これらの語はすべて「2つのものの位置関係」を説明する。「何が」「どこと比べて」どの位置にあるのかを、日本語の語順のまま英語に置きかえようとせず、前置詞句をひとかたまりとして覚えて使う。`,
      },
      {
        heading: 'between・among・next to と、There is / are との組み合わせ',
        body: `複数のものの間の位置関係を表す語と、隣接を表す語を整理する。

■ between A and B（AとBの間に）
例）The bank is between the post office and the park.（銀行は郵便局と公園の間にある）
between はもともと「2つのものの間」に使う語である。

■ among（3つ以上の間に）
例）Ken is among the students in the classroom.（ケンは教室の生徒たちの中にいる）
between が2者間であるのに対し、among は3つ以上の集団の「中」を表す。

■ next to／beside（〜のとなりに）
例）My house is next to the library.（私の家は図書館のとなりにある）
例）Sit beside me.（私のとなりに座って）
next to と beside はほぼ同じ意味で使われる。

■ There is / are と組み合わせた文
これらの前置詞句は、There is / are の文とよく組み合わさって「〜がある・いる」という位置説明の文を作る。
例）There is a cat under the table.（テーブルの下にねこがいる）
例）There are some flowers between the two trees.（2本の木の間に花がある）
例）There is a big park near my house.（私の家の近くに大きな公園がある）
There is / are の文では、文末に場所を表す前置詞句を置くのが基本の語順である。

⚠ 注意：between と among を「2つ」か「3つ以上」かで機械的に区別するのが基本だが、間にはさまれる対象が具体的な2つのグループ（国と国、チームとチームなど）であれば、数が多くても between を使うことがある（between the two teams など）。まずは基本の使い分けから確実に覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「ねこはいすの下にいます」を英語にしなさい。',
        wrongAnswer: 'The cat is in the chair.',
        trapExplanation: '「いすのところに」という大まかなイメージだけで in を選んでしまい、「下に」という具体的な位置関係を表す語を思い出せていない。',
        correctAnswer: 'The cat is under the chair.',
        correctExplanation: '「下に」という位置関係を正確に表すには under を使う必要がある。in はあくまで「囲まれた空間の中」を表す語であり、位置の上下関係までは表せない。位置を表す語（under, on, in front of, behind など）はそれぞれ意味が異なるので、日本語の意味に対応する語を正確に選ぶ。',
      },
      {
        question: '「彼らのクラスの生徒たちの中で（30人ほどの中で）」を英語にしなさい。',
        wrongAnswer: 'between the students in their class',
        trapExplanation: 'between を「〜の間に」という意味だけで覚えていて、対象が2つのときにしか使えないというルールを忘れてしまう。',
        correctAnswer: 'among the students in their class',
        correctExplanation: '生徒30人のような3つ以上の集団の中を表すときは among を使う。between は文字どおり2つのものにはさまれた位置を表す語なので、対象の数を確認してから between と among を使い分ける。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    title: '時の前置詞：in・on・at で表す「いつ」',
    description: '「年・月・季節」は in、「日・曜日」は on、「時刻」は at――時を表す前置詞の使い分けを身につける',
    intro: '場所を表す in・on・at には「空間・面・点」というイメージがあった。実は時を表すときも同じ3つの前置詞を、範囲の大きさに応じて使い分ける。長い期間には in、特定の1日には on、ピンポイントの時刻には at――範囲が狭くなるほど前置詞も変わっていく様子を、順番につかんでいこう。',
    order: 7591,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'in：年・月・季節・世紀など、幅のある期間に使う（in 2026, in April, in summer）。',
      'on：特定の日・曜日・日付に使う（on Monday, on May 5th, on my birthday）。',
      'at：時刻や、night・noon・midnight のような一瞬の時点に使う（at seven, at night, at noon）。',
      '「朝・午後・夕方」には in（in the morning）だが、night だけは例外的に at night。',
      '曜日に「朝・午後」を付けるときは on を使う（on Monday morning）。',
      'this, next, last, every の直前には前置詞を付けない（this Monday, next week など）。',
    ],
    sections: [
      {
        heading: 'in と on：長い期間と特定の日',
        body: `時を表す in は、年・月・季節のような「幅のある期間」に使う。on はそれよりも狭い、特定の1日に使う。

■ in：年・月・季節・世紀
例）I was born in 2011.（私は2011年に生まれた）
例）We have a school festival in October.（10月に文化祭がある）
例）It's very hot in summer.（夏はとても暑い）
例）This building was built in the 20th century.（この建物は20世紀に建てられた）
どれも「その期間のどこかで」という幅のある時を表している。

■ on：特定の日・曜日・日付
例）I have soccer practice on Monday.（月曜日にサッカーの練習がある）
例）My birthday is on May 5th.（誕生日は5月5日だ）
例）We don't have school on Sundays.（日曜日は学校がない）
曜日を複数形にすると「毎週日曜日は」という習慣の意味になることもある。

■ 「朝・午後・夕方」は in、でも曜日と組み合わせると on
in the morning（朝に）・in the afternoon（午後に）・in the evening（夕方に）は単独では in を使うが、曜日と組み合わせるときは on に変わる。
例）I get up early in the morning.（朝早く起きる）
例）I have math on Monday morning.（月曜日の朝に数学がある）

★ ポイント：範囲の大きさで前置詞が決まる。年・月・季節のような「大きな枠」は in、曜日・日付のような「1日単位」は on と覚えると迷いにくい。`,
      },
      {
        heading: 'at：時刻とピンポイントの時点／前置詞を付けない例外',
        body: `at は場所のときと同じく「1つの点」を表す前置詞で、時に使うと「ある1つの時刻・瞬間」を意味する。

■ at：時刻
例）School starts at eight thirty.（学校は8時30分に始まる）
例）I go to bed at eleven.（私は11時に寝る）
時計の針が指す1点として時刻をとらえるので at を使う。

■ at：night・noon・midnight などの例外的な語
「朝・午後・夕方」は in を使うのに対し、night（夜）だけは例外的に at を使う。
例）It's very quiet at night.（夜はとても静かだ）
例）We had lunch at noon.（正午に昼食を食べた）
例）She woke up at midnight.（彼女は真夜中に目を覚ました）
night が例外なのは、「夜」を1日の中の幅のある時間帯としてではなく、1つの時点（暗くなる瞬間）としてとらえる感覚があるためだと考えるとよい。

■ 前置詞を付けない場合：this / next / last / every
this, next, last, every が時を表す語の前に付くときは、in / on / at を付けない。
例）I'll see you next week.（× in next week とはしない）
例）We went to Kyoto last summer.（× in last summer とはしない）
例）I get up early every morning.（× in every morning とはしない）
this, next, last, every はすでに「いつのことか」を限定する働きを持っているため、前置詞が不要になる。

⚠ 注意：at night は決まった言い方として覚えるしかない例外である。in the morning／in the afternoon／in the evening との並びで覚えると、night だけ形が違うことに気づきやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は夜に読書をします」を英語にしなさい。',
        wrongAnswer: 'I read books in night.',
        trapExplanation: '「朝・午後・夕方」はすべて in を使うと覚えているため、同じ仲間だと思って night にも in を付けてしまう。',
        correctAnswer: 'I read books at night.',
        correctExplanation: 'morning／afternoon／evening は in を使うが、night だけは例外的に at を使う。「in the morning, in the afternoon, in the evening, but at night」とセットで音読して、night だけ違うことを体に覚えさせるとよい。',
      },
      {
        question: '「来週、京都に行きます」を英語にしなさい。',
        wrongAnswer: "I'll go to Kyoto in next week.",
        trapExplanation: '「週」という期間を表す語には in を付けるものだと機械的に考え、next の前にも前置詞を入れてしまう。',
        correctAnswer: "I'll go to Kyoto next week.",
        correctExplanation: 'next, last, this, every が時を表す語の前に付くときは、前置詞（in / on / at）を付けない。next week, last month, this year, every day のように、前置詞なしでそのまま使うのが正しい形である。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    title: '方向を表す前置詞：to・from・into・out of・up・down・across',
    description: '「行き先」「出発点」「中へ・外へ」「上へ・下へ」など、動きの方向を表す前置詞を身につける',
    intro: '「学校へ行く」「家から来る」「部屋に入る」――日本語では動詞（行く・来る・入る）が動きの方向まで表してくれるが、英語では動詞だけでは方向が伝わりにくく、前置詞の助けが必要になることが多い。ここでは動きの方向を表す代表的な前置詞をまとめて練習する。',
    order: 7592,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'to：「〜へ（行き先・到達点）」を表す（go to school, come to Japan）。',
      'from：「〜から（出発点・出身）」を表す（come from Japan, from Monday to Friday）。',
      'into：「〜の中へ」動いていくことを表す（get into the car, jump into the pool）。',
      'out of：「〜の外へ」動いていくことを表す（get out of the car, take a book out of the bag）。',
      'up／down：「上へ／下へ」の移動（walk up the hill, run down the stairs）。',
      'across：「〜を横切って」（walk across the street, swim across the river）。',
      '乗り物によって get in／get out（車など小さな乗り物）と get on／get off（バス・電車など大きな乗り物）を使い分ける。',
    ],
    sections: [
      {
        heading: 'to と from：行き先と出発点',
        body: `to と from は、動きの「向かう先」と「出てきた場所」を表す、もっとも基本的な方向の前置詞である。

■ to：行き先・到達点
例）I go to school every day.（私は毎日学校へ行く）
例）Please come to my house.（私の家に来てください）
例）She walked to the station.（彼女は駅まで歩いた）
「〜へ」「〜まで」を表す動詞（go, come, walk, run など）とセットで使われることが多い。

■ from：出発点・出身
例）I come from Japan.（私は日本の出身です）＝ I'm from Japan.
例）The train from Osaka arrived late.（大阪からの電車は遅れて到着した）
例）This letter is from my grandmother.（この手紙は祖母からです）
from は場所だけでなく、人・時間の起点にも使う。

■ from A to B（AからBまで）
例）The store is open from nine to six.（その店は9時から6時まで開いている）
例）We walked from the station to the park.（駅から公園まで歩いた）
from と to をセットで使うと、始まりと終わりをはっきり示せる。

★ ポイント：to は「向かう先」、from は「出てきた場所」。矢印の向きをイメージすると迷わない。`,
      },
      {
        heading: 'into・out of・up・down・across と、乗り物に乗る表現',
        body: `into と out of は「中へ・外へ」という動きを、up と down は「上へ・下へ」という動きを表す。

■ into（〜の中へ）と out of（〜の外へ）
例）The cat jumped into the box.（ねこは箱の中に飛び込んだ）
例）He got into the car.（彼は車に乗り込んだ）
例）She took her phone out of her bag.（彼女はかばんから携帯電話を取り出した）
in（中にいる状態）と into（中へ動いていく過程）の違いに注意する。into は「動き」を含む前置詞である。

■ up（上へ）と down（下へ）
例）We walked up the hill.（丘を上まで歩いた）
例）The cat ran down the tree.（ねこは木を下りて走った）
例）Go up the stairs and turn left.（階段を上がって左に曲がって）

■ across（〜を横切って）
例）Be careful when you cross the street. There is a lot of traffic across the road.（道を渡るときは気をつけて。道路の向こうは交通量が多い）
例）They swam across the river.（彼らは川を泳いで渡った）

■ 乗り物に乗る・降りる表現
小さな乗り物（車・タクシー）には get in／get out of、大きな乗り物（バス・電車・飛行機・自転車）には get on／get off を使う、という区別がある。
例）Get in the car.（車に乗って）／ Get out of the car.（車から降りて）
例）Get on the bus.（バスに乗って）／ Get off the train at the next stop.（次の駅で電車を降りて）

⚠ 注意：get in／get on の使い分けは「その乗り物の中で立って歩けるかどうか」で覚えるとわかりやすい。車のように狭く座ったまま乗るものは in／out、バスや電車のように中を歩けるものは on／off を使う。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は車から降りた」を英語にしなさい。',
        wrongAnswer: 'He got off the car.',
        trapExplanation: 'バスや電車で使う get off の形をそのまま車にも当てはめてしまい、乗り物の種類によって前置詞が変わることを意識していない。',
        correctAnswer: 'He got out of the car.',
        correctExplanation: '車・タクシーのように狭く座って乗る乗り物には get in／get out of を使い、バス・電車・飛行機のように中を歩ける乗り物には get on／get off を使う。乗り物の大きさ・構造で使い分けるという基準を覚えておく。',
      },
      {
        question: '「ねこが箱の中にいる」と「ねこが箱の中に飛び込んだ」を正しく訳し分けなさい。',
        wrongAnswer: '両方とも The cat is in the box. のように in を使う。',
        trapExplanation: '「中に」という日本語だけを見て、状態（いる）と動き（飛び込む）の違いを区別せず、同じ前置詞を当ててしまう。',
        correctAnswer: 'The cat is in the box.／The cat jumped into the box.',
        correctExplanation: 'in はすでに中にいる「状態」を表すのに対し、into は外から中へ動いていく「過程・動き」を表す。jump, run, go のような動きを表す動詞と組み合わせるときは into を使う場面が多いことを意識する。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    title: '自己紹介の基本表現：I\'m 〜. / My name is 〜. / Nice to meet you.',
    description: '初対面のあいさつから名前・出身・好きなものを伝えるまでの、自己紹介の型を身につける',
    intro: "新学期のクラス替えや、留学生との交流会――自己紹介は英語を学ぶ中でいちばん早く「本当に使う」場面がやってくるテーマである。I'm 〜. と My name is 〜. の使い分け、あいさつの返し方まで、実際に声に出して使える形で身につけよう。",
    order: 7593,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      "名前を名乗るときは I'm ＋名前. または My name is ＋名前.。",
      '「はじめまして」は Nice to meet you.、返すときは Nice to meet you, too.。',
      "相手の名前をたずねるときは What's your name?。",
      "自己紹介では be動詞の文（I'm ...）と一般動詞の文（I like ..., I have ...）を組み合わせて使う。",
      '「〜が好きです」は I like 〜.、「〜を持っています」は I have 〜. で表す。',
      '別れのあいさつには See you. / Goodbye. / Take care. などがある。',
    ],
    sections: [
      {
        heading: '名前を名乗り、あいさつする',
        body: `自己紹介の第一歩は、名前を名乗ることとあいさつを交わすことである。決まった型があるので、そのまま声に出して覚えてしまうとよい。

■ 名前を名乗る2つの形
①I'm ＋名前.（私は〜です）
　例）Hi, I'm Ken.（こんにちは、私はケンです）
②My name is ＋名前.（私の名前は〜です）
　例）My name is Ken Tanaka.（私の名前は田中ケンです）
どちらも同じ意味で使えるが、My name is 〜 のほうがやや改まった場面（スピーチの最初など）でよく使われる。

■ はじめましてのあいさつ
Nice to meet you.（はじめまして）
これは初めて会った人にだけ使うあいさつである。2回目以降に会うときは Nice to see you again. のように言う。
答えるときは Nice to meet you, too.（こちらこそ、はじめまして）のように too を付けて返す。

■ 相手の名前をたずねる
What's your name?（お名前は何ですか）
— I'm Emi. Nice to meet you.

■ 会話の流れの例
A: Hi! I'm Ken. What's your name?
B: Hi, Ken. I'm Emi. Nice to meet you.
A: Nice to meet you, too.

★ ポイント：Nice to meet you. の too を忘れると「はじめまして」を2回言っているだけになり不自然に聞こえる。初対面のあいさつはセットで覚える。`,
      },
      {
        heading: '自分のことを伝える表現と別れのあいさつ',
        body: `名前を名乗ったあとは、出身・好きなもの・持っているものなどを伝えて自己紹介を広げていく。

■ 出身を伝える
I'm from Japan.（私は日本出身です）
I'm from Osaka.（私は大阪出身です）
be動詞の文で「〜出身だ」と表せる（くわしくは「出身地・国籍をたずねる表現」の単元で扱う）。

■ 好きなもの・持っているものを伝える
一般動詞を使って自己紹介を続けることが多い。
例）I like soccer.（私はサッカーが好きです）
例）I like music and English.（私は音楽と英語が好きです）
例）I have two brothers.（私には兄弟が2人います）
例）I'm a student at Midori Junior High School.（私はみどり中学校の生徒です）
be動詞の文（I'm 〜.）と一般動詞の文（I like 〜. / I have 〜.）を組み合わせて、自分の情報を何文か続けるのが自己紹介の基本の型である。

■ 別れのあいさつ
自己紹介の最後には別れのあいさつを添える。
See you.（またね）
See you later.（また後で）
Goodbye. / Bye.（さようなら）
Take care.（気をつけて）

■ 自己紹介のミニスピーチ例
Hello, everyone. I'm Ken. I'm from Osaka. I like soccer and music. I have one brother. Nice to meet you all!

⚠ 注意：My name is Ken. と言ったあとに、もう一度 I'm Ken. と繰り返す必要はない。同じ情報を2つの言い方で二重に言うと不自然になるので、名前を名乗る文はどちらか一方を選んで使う。`,
      },
    ],
    trapExamples: [
      {
        question: '初めて会った人へのあいさつに対する返事として正しいものを選びなさい。（Nice to meet you. / Nice to meet you too.）',
        wrongAnswer: 'Nice to meet you.',
        trapExplanation: '相手が言った言葉をそのまま返せばよいと考え、too を付け忘れてしまう。',
        correctAnswer: 'Nice to meet you, too.',
        correctExplanation: '相手から Nice to meet you. と言われたときの返事には too を付けるのが自然な会話のマナーである。too がないと、まるで相手の言葉が耳に入っていないかのように、単に同じセリフを繰り返しているだけに聞こえてしまう。',
      },
      {
        question: '「私の名前はケンです」を、日本語の語順に近づけて英語にしなさい。',
        wrongAnswer: 'I am name Ken.',
        trapExplanation: '「私は」「名前」「ケンです」という日本語の語順をそのまま英語の単語に置きかえようとしてしまう。',
        correctAnswer: 'My name is Ken.',
        correctExplanation: '「私の名前は」は My name（所有格＋名詞）でひとまとまりの主語になり、そのあとに is を続ける。日本語の助詞をそのまま英語の単語に対応させようとすると、この文のように主語のまとまりを崩してしまうことが多いので注意する。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    title: '家族を紹介する表現：This is my 〜. / I have a brother and a sister.',
    description: '写真を見せながら家族を紹介する This is my 〜. の文と、have を使って人数を伝える文を身につける',
    intro: '家族写真を見せながら「これは私の父です」と紹介する場面は、自己紹介の次によく出てくる会話の定番である。This is my 〜. と I have 〜. という2つの型を覚えれば、家族の顔ぶれから人数まで、ひとつのまとまった話として伝えられるようになる。',
    order: 7594,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '目の前の人や写真の中の人を紹介するときは This is my 〜.（こちらは私の〜です）。',
      '複数の人を紹介するときは These are my 〜.（こちらは私の〜たちです）。',
      '兄弟姉妹の人数は I have ＋数＋brother(s)／sister(s). で伝える。',
      '家族を表す語：father, mother, parents（両親）, brother, sister, grandfather, grandmother。',
      '兄と弟、姉と妹を区別したいときは older／younger を付ける（an older brother＝兄）。',
      'a／an は初めて話題に出す1人の人物に付け、2回目以降は he／she などの代名詞に置きかえる。',
    ],
    sections: [
      {
        heading: '家族を紹介する This is my 〜. の文',
        body: `写真や実際にその場にいる人を指しながら紹介するときは This is（複数なら These are）を使う。

■ This is my 〜.（こちらは私の〜です）
例）This is my father.（こちらは私の父です）
例）This is my mother. She is a teacher.（こちらは私の母です。彼女は教師です）
This is で紹介したあとに、続けて He is 〜. / She is 〜. でその人物の職業や性格などを説明することが多い。

■ These are my 〜.（こちらは私の〜たちです）
複数の人物をまとめて紹介するときは These are を使う。
例）These are my grandparents.（こちらは私の祖父母です）
例）These are my sisters. They are twins.（こちらは私の姉妹です。双子です）

■ 家族を表す基本の語
father（父）・mother（母）・parents（両親、2人まとめて）・brother（兄・弟）・sister（姉・妹）・grandfather（祖父）・grandmother（祖母）・grandparents（祖父母）
英語の brother, sister には「兄・弟」「姉・妹」の区別がなく、どちらも同じ語を使う。年上・年下を示したいときだけ older／younger を付ける。
例）I have an older brother and a younger sister.（兄と妹がいます）

★ ポイント：This is my 〜. で紹介したあとは、必ず he／she の代名詞に切りかえて説明を続ける。my father を何度も繰り返すと不自然な文になる。`,
      },
      {
        heading: '兄弟姉妹の人数を伝える have の文',
        body: `「兄弟が何人いるか」を伝えるときは、be動詞ではなく一般動詞 have（have/has）を使う。

■ I have ＋数＋兄弟姉妹.
例）I have one brother.（兄弟が1人います）
例）I have two sisters.（姉妹が2人います）
例）I have a brother and a sister.（兄弟が1人、姉妹が1人います）
「いる」という日本語につられて be動詞（I am ...）を使わないように注意する。「持っている」＝「家族としている」という考え方で have を使う。

■ 一人っ子の言い方
I don't have any brothers or sisters.（私には兄弟姉妹がいません）
I'm an only child.（私は一人っ子です）
どちらも同じ内容を伝える表現として使われる。

■ たずね方
Do you have any brothers or sisters?（兄弟姉妹はいますか）
— Yes, I have one brother. ／ No, I don't. I'm an only child.
any は疑問文・否定文で使う「いくらかの」という意味の語で、数をたずねる／否定する場面でよく使われる。

■ 会話の流れの例
A: Do you have any brothers or sisters?
B: Yes, I have an older brother. He's a high school student.
A: Really? This is my sister. She's ten years old.

⚠ 注意：「兄弟が2人います」という文で、名詞の複数形を忘れる誤りが多い。I have two brother. ではなく、two のあとの名詞は必ず複数形にして I have two brothers. とする。`,
      },
    ],
    trapExamples: [
      {
        question: '「私には妹が1人います」を英語にしなさい。',
        wrongAnswer: 'I am a sister.',
        trapExplanation: '「〜がいます」という日本語の「います」を be動詞に結びつけてしまい、have を使うべき場面で am を使ってしまう。',
        correctAnswer: 'I have a sister.',
        correctExplanation: '家族の存在を伝える文は「持っている」の have を使う。be動詞を使うと「私は妹（という存在）です」という意味になってしまい、まったく別の文になる。「兄弟姉妹がいる」＝have という結びつきをセットで覚える。',
      },
      {
        question: '「私には兄が2人います」を英語にしなさい。',
        wrongAnswer: 'I have two brother.',
        trapExplanation: '数を表す two を書いた時点で満足してしまい、そのあとに続く名詞を複数形にすることを忘れてしまう。',
        correctAnswer: 'I have two brothers.',
        correctExplanation: '数字が2以上のときは、そのあとの名詞を必ず複数形にする。two, three のような数詞を見たら、反射的に名詞の語尾に s が必要かどうかを確認する習慣をつける。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    title: '出身地・国籍をたずねる表現：Where are you from?',
    description: '出身地をたずねる Where are you from? と、国名・国籍を表す語の使い分けを身につける',
    intro: '国際交流会や留学生との会話で、まず聞かれるのが「どこの出身ですか」という質問である。Where are you from? への答え方と、国名（Japan）・国籍を表す形容詞（Japanese）の違いを整理して、自信を持って自己紹介できるようにしよう。',
    order: 7595,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      "出身をたずねる文は Where are you from? で、答えは I'm from ＋国・都市名.。",
      '「〜出身だ」は be動詞＋from で表す（be動詞の文であり、一般動詞 come を使うときは I come from 〜.）。',
      '国名（Japan, America）と国籍を表す形容詞（Japanese, American）はつづりも使い方も異なる。',
      '国名・国籍を表す語は曜日・月と同じく、文の途中でも必ず大文字で書き始める。',
      '「〜語」を表す語（Japanese, English, Chinese）は、国籍の形容詞と同じ形であることが多い。',
      "「国籍は何ですか」は What's your nationality? でもたずねられる。",
    ],
    sections: [
      {
        heading: '出身をたずねる・答える表現',
        body: `出身地をたずねる文には、決まった型が2つある。

■ たずね方
Where are you from?（あなたはどこの出身ですか）
Where do you come from?（同じ意味。come という一般動詞を使った言い方）

■ 答え方：I'm from 〜. または I come from 〜.
例）I'm from Japan.（私は日本出身です）
例）I'm from Osaka, Japan.（私は日本の大阪出身です）
例）I come from Canada.（私はカナダ出身です）
be動詞を使う I'm from 〜. のほうが会話ではよく使われる。come を使う場合は一般動詞の文になるので、I'm come from 〜. のように be動詞と一般動詞を両方使ってしまう誤りに注意する。

■ 都市と国を一緒に言うとき
「〜市の、〜国出身です」と言うときは、狭い場所（都市）を先に、広い場所（国）を後に言う。
例）I'm from Kyoto, Japan.（私は日本の京都出身です）
これは日付を「日→月→年」の順で細かい方から言うのと似た感覚である。

■ 会話の流れの例
A: Where are you from?
B: I'm from Sydney, Australia. How about you?
A: I'm from Osaka, Japan.

★ ポイント：I'm from 〜. の from を忘れて I'm Japan. と言ってしまう誤りが非常に多い。「〜出身だ」には必ず from が必要だと意識しておく。`,
      },
      {
        heading: '国名と国籍を表す語の使い分け',
        body: `国について話すときは、「国名」「国籍を表す形容詞」「〜語」の3つの形を区別する必要がある。多くの国はこの3つが同じ形をしている場合が多いが、混同すると意味の通じない文になる。

■ 国名（場所そのもの）
Japan（日本）・America／the U.S.（アメリカ）・China（中国）・Canada（カナダ）・Australia（オーストラリア）
I'm from Japan. のように from のあとに置くのは国名である。

■ 国籍を表す形容詞（〜人の、〜の）
Japanese（日本の・日本人の）・American（アメリカの・アメリカ人の）・Chinese（中国の・中国人の）
I'm Japanese.（私は日本人です）のように be動詞のあとに置いて「〜人だ」と言うときは、この形容詞を使う。
例）She is American.（彼女はアメリカ人です）
例）He is a Chinese student.（彼は中国人の生徒です）

■ 「〜語」を表す語
多くの場合、国籍の形容詞と同じ形が「〜語」にもなる。
例）I study Japanese and English.（私は国語と英語を勉強する）
例）Do you speak Chinese?（あなたは中国語を話しますか）

■ 大文字のルール
国名・国籍・言語を表す語は、曜日・月と同じくすべて固有名詞なので、文のどの位置でも大文字で書き始める。
× i am japanese. → ○ I am Japanese.

⚠ 注意：Japan（国名・名詞）と Japanese（国籍・言語・形容詞）を混同して I'm from Japanese. や I'm Japan. のように言ってしまう誤りが非常に多い。「from のあとは国名」「be動詞のあとで人を説明するときは形容詞（-ese, -an など）」という型で区別する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は日本出身です」を英語にしなさい。',
        wrongAnswer: "I'm from Japanese.",
        trapExplanation: '「日本」を表す語として、より頻繁に耳にする Japanese をそのまま使ってしまい、from のあとには国名（Japan）を置くというルールを意識していない。',
        correctAnswer: "I'm from Japan.",
        correctExplanation: "from のあとには「場所」を表す国名がくる。Japanese は「日本人の」「日本語」を表す形容詞・名詞であり、場所そのものを指す語ではない。I'm from Japan.（出身地）と I'm Japanese.（国籍）を、意味の違いとあわせて区別して覚える。",
      },
      {
        question: '「彼はアメリカ人です」を英語にしなさい。',
        wrongAnswer: 'He is America.',
        trapExplanation: '「アメリカ」という国名をそのまま be動詞のあとに置いてしまい、「〜人だ」というときには形容詞の形（American）が必要であることを見落としている。',
        correctAnswer: 'He is American.',
        correctExplanation: '「〜人だ」と人を説明する文では、国名（America）ではなく国籍を表す形容詞（American）を使う。He is America. は「彼はアメリカという国だ」という意味の通じない文になってしまうので、必ず -an, -ese などの形容詞形を使う。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    title: '学校生活の語彙と文：教科・時間割・部活動の言い方',
    description: '好きな教科をたずねる表現と、have を使った時間割の言い方、部活動を伝える表現を身につける',
    intro: '「好きな教科は何？」「何部に入っているの？」――学校生活は中学1年生にとっていちばん身近な話題であり、英語の授業でも会話文の定番テーマになる。教科名の語彙から時間割・部活動の伝え方まで、ここでまとめて練習しておこう。',
    order: 7596,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '好きな教科をたずねる文は What subject do you like?、答えは I like ＋教科.。',
      '主な教科：math, English, Japanese, science, social studies, music, art, P.E.（体育）。',
      '「〜曜日に…の授業がある」は have を使う（I have math on Monday.）。',
      "部活動に入っていることを言うときは I'm in the 〜 club. または I belong to the 〜 club.。",
      '「得意だ」は be good at 〜、「苦手だ」は be poor at ／ not good at 〜 で表す。',
      '「何時間目」は period を使う（in the first period＝1時間目に）。',
    ],
    sections: [
      {
        heading: '教科の語彙と、好きな教科をたずねる表現',
        body: `学校でよく使う教科名は、be動詞・一般動詞の文とあわせて覚えるとすぐに使えるようになる。

■ 主な教科名
math（数学）・English（英語）・Japanese（国語）・science（理科）・social studies（社会）・music（音楽）・art（美術）・P.E.（体育、physical education の略）・home economics（家庭科）・moral education（道徳）
教科名の中で English と Japanese は、国籍を表す形容詞と同じ形であることに注意（大文字で書く）。

■ 好きな教科をたずねる・答える
What subject do you like?（好きな教科は何ですか）
What's your favorite subject?（同じ意味、favorite「お気に入りの」を使う言い方）
— I like math the best.（数学がいちばん好きです）
— My favorite subject is science.（私の好きな教科は理科です）

■ 得意・苦手を伝える
be good at 〜（〜が得意だ）／ be poor at・not good at 〜（〜が苦手だ）
例）I'm good at math.（私は数学が得意です）
例）I'm not good at English.（私は英語が苦手です）
at のあとには教科名や動名詞（-ing形）が続く。
例）I'm good at singing.（私は歌うのが得意です）

★ ポイント：at のあとに教科・スポーツなどの名詞、または -ing 形の動名詞を続けられる、という形をセットで覚えておくと応用がきく。`,
      },
      {
        heading: '時間割と部活動を伝える表現',
        body: `「何曜日に何の授業があるか」「何部に入っているか」を伝える表現も、学校生活の会話でよく使われる。

■ have を使った時間割の言い方
「〜曜日に…の授業がある」というときは have を使う。
例）I have math on Monday.（月曜日に数学の授業がある）
例）We have five classes today.（今日は授業が5時間ある）
例）What do you have on Tuesday?（火曜日は何の授業がありますか）— I have English and science.

■ 何時間目かを表す period
例）We have P.E. in the third period.（3時間目に体育がある）
例）Math is in the first period.（数学は1時間目だ）
period は「時間割上の1コマ」を表す語で、first period（1時間目）のように序数と組み合わせて使う。

■ 部活動を伝える表現
I'm in the 〜 club.（〜部に入っています）
I belong to the 〜 club.（同じ意味、ややかたい言い方）
例）I'm in the tennis club.（テニス部に入っています）
例）She belongs to the brass band club.（彼女は吹奏楽部に入っています）
主な部活動：baseball club, soccer club, basketball club, tennis club, brass band club, art club, drama club

■ 部活の活動をたずねる
What club are you in?（何部に入っていますか）
How many times a week do you have practice?（週に何回練習がありますか）

⚠ 注意：「〜部に入っています」を I am 〜 club. のように club の前に in を忘れて言ってしまう誤りが多い。club という「場所・グループ」に入っている、というイメージで前置詞 in を必ず入れる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は美術部に入っています」を英語にしなさい。',
        wrongAnswer: 'I am art club.',
        trapExplanation: '「〜部に入る」という日本語の「入る」の部分を訳し忘れ、be動詞だけで名詞（art club）を直接つなげてしまう。',
        correctAnswer: 'I am in the art club.',
        correctExplanation: "「〜部に入っている」は「〜部というグループの中にいる」という意味なので、前置詞 in が必要である。I'm in the 〜 club. の形をそのまま型として覚え、club の前には the を付けることも忘れないようにする。",
      },
      {
        question: '「私は歌うのが得意です」を英語にしなさい。',
        wrongAnswer: 'I am good at sing.',
        trapExplanation: '「得意だ」＝be good at という形は覚えていても、at のあとに動詞を続けるときは原形ではなく -ing 形にする必要があることを忘れてしまう。',
        correctAnswer: 'I am good at singing.',
        correctExplanation: '前置詞 at のあとに動詞を続けるときは、必ず -ing 形（動名詞）にする。前置詞のうしろに動詞の原形をそのまま置くことはできない、という英語のルールがここでも当てはまる。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    title: '一日の生活を説明する表現：曜日・時刻を使った日課',
    description: '起床から就寝までの一日の流れを、現在形と時刻・曜日の表現を組み合わせて説明する練習をする',
    intro: '「毎日何時に起きるの？」――一日の生活を英語で説明するには、これまで学んだ現在形・時刻の言い方・時の前置詞をひとつの文章にまとめる力が必要になる。ここでは朝から夜までの日課を、実際に使える文章の形で組み立てる練習をしよう。',
    order: 7597,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '毎日くり返す習慣は現在形で表す（get up, have breakfast, go to school など）。',
      '時刻を添えるときは at ＋時刻を動詞のあとに置く（I get up at six.）。',
      '「場所→時」の順に情報を並べるのが英語の基本語順（I go to school at eight., not at eight to school）。',
      'usually（たいてい）・sometimes（ときどき）などの頻度の副詞を使うと、日課の説明がより自然になる。',
      '一日の流れは and, then, after that などでつないで文章にする。',
      '「〜時から〜時まで」は from ＋時刻＋to ＋時刻で表す。',
    ],
    sections: [
      {
        heading: '一日の行動を表す動詞と、時刻の付け方',
        body: `一日の行動は決まった動詞のグループで表せる。まずはよく使う動詞と時刻の組み合わせ方を固める。

■ 一日の行動を表す基本の動詞
get up（起きる）・wash my face（顔を洗う）・have breakfast（朝食を食べる）・leave home（家を出る）・go to school（学校へ行く）・have lunch（昼食を食べる）・come home（帰宅する）・do my homework（宿題をする）・take a bath（お風呂に入る）・go to bed（寝る）
これらはすべて習慣を表すので、主語が I のときはそのままの形、he／she のときは三人称単数の -s を付ける。

■ 時刻の付け方：動詞のあとに at ＋時刻
例）I get up at six thirty.（私は6時30分に起きる）
例）He goes to bed at ten.（彼は10時に寝る）
例）We have dinner at seven.（私たちは7時に夕食を食べる）

■ 語順の原則：場所→時
場所を表す語句と時を表す語句が両方あるときは、場所を先に、時をあとに置くのが基本の語順である。
例）I go to school at eight.（○）
例）× I go at eight to school.（×：時が先に来てしまっている）
「動詞＋場所＋時」の順を型として覚えておくと、複雑な文でも語順をまちがえない。

★ ポイント：一日の行動を表す動詞は数が多いので、朝→昼→夜の順にグループ分けして覚えると整理しやすい。`,
      },
      {
        heading: '頻度の副詞と、日課をつなげて説明する',
        body: `1文だけでなく、一日の流れをいくつかの文でつなげて説明できるようになると、スピーキング・ライティングの両方で力を発揮する。

■ 頻度の副詞を添える
usually（たいてい）・sometimes（ときどき）・always（いつも）・often（よく）などを動詞の前に置くと、習慣の度合いを表せる。
例）I usually get up at six.（私はたいてい6時に起きる）
例）I sometimes study after dinner.（私はときどき夕食後に勉強する）

■ from A to B（AからBまで）
例）I study from seven to eight every night.（私は毎晩7時から8時まで勉強する）
例）School is from eight thirty to three thirty.（学校は8時30分から3時30分までだ）

■ and, then, after that でつなぐ
一日の流れを順に説明するときは、and（そして）、then（それから）、after that（そのあとで）を使って文をつなげる。
例）I get up at six, and then I wash my face. After that, I have breakfast at seven.（6時に起きて、それから顔を洗う。そのあと7時に朝食を食べる）

■ 一日の日課をまとめた例文
I usually get up at six thirty. I have breakfast at seven and leave home at eight. I have six classes at school. After school, I have club activities until five. I do my homework from seven to eight, and I go to bed at ten thirty.

⚠ 注意：時刻や曜日を並べる文では、「いつも同じ動詞の形（現在形）を使う」という点を忘れないこと。一日の説明の途中で過去形が混ざってしまう誤りがよく見られるので、習慣を説明している間は現在形で統一する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は8時に学校へ行きます」を英語にしなさい。',
        wrongAnswer: 'I go at eight to school.',
        trapExplanation: '日本語の「8時に学校へ」という語順（時→場所）をそのまま英語の語順に当てはめてしまう。',
        correctAnswer: 'I go to school at eight.',
        correctExplanation: '英語では場所を表す語句を先に、時を表す語句をあとに置くのが基本の語順である。日本語と英語で「時」と「場所」の並び順が逆になることが多いので、英作文のときは特に注意して並べかえる。',
      },
      {
        question: '「彼はたいてい7時に朝食を食べます」を英語にしなさい。',
        wrongAnswer: 'He usually has breakfast at seven o\'clock every day.（正しいと判断してそのまま使う）',
        trapExplanation: '一見正しく見えるが、usually（たいてい）と every day（毎日）は意味が重複しており、同じ文の中で両方使うと不自然になることに気づいていない。',
        correctAnswer: 'He usually has breakfast at seven.',
        correctExplanation: 'usually はすでに「習慣的に、たいてい」という頻度を含んでいるので、every day を重ねて付ける必要はない。頻度の副詞と every day のような頻度を表す語句は、どちらか一方だけを使うのが自然な英語である。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    title: '季節と学校行事の語彙：四季と行事を英語で言う',
    description: '四季の名前と、季節・行事に使う前置詞、学校行事を伝える表現をまとめて練習する',
    intro: '運動会・文化祭・修学旅行――日本の学校行事を英語で説明しようとすると、季節の言い方や行事名の語彙が意外と出てこないものである。四季の名前と学校行事の言い方をセットで整理し、季節をテーマにした自己紹介や日記が書けるようにしよう。',
    order: 7598,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '四季：spring（春）・summer（夏）・fall／autumn（秋）・winter（冬）。',
      '「〜の季節に」は in を使う（in spring, in summer）。',
      '「いちばん好きな季節」をたずねる文は What season do you like the best?。',
      '主な学校行事：sports day（運動会）、school trip（修学旅行）、school festival（文化祭）、chorus contest（合唱コンクール）。',
      '「〜月に〜がある」は We have ＋行事＋in ＋月. の形で表す。',
      'fall はアメリカ英語、autumn はイギリス英語で、どちらも「秋」を表す。',
    ],
    sections: [
      {
        heading: '四季の言い方と、季節についての文',
        body: `四季の名前は日常会話や日記でひんぱんに使われる基本語彙である。

■ 四季
spring（春）・summer（夏）・fall（秋、主にアメリカ英語）・autumn（秋、主にイギリス英語）・winter（冬）
日本の教科書では fall と autumn のどちらも紹介されることが多いが、意味は同じなのでどちらを使ってもよい。

■ 「〜の季節に」：in を使う
例）Cherry blossoms bloom in spring.（桜は春に咲く）
例）It's very hot in summer in Japan.（日本では夏はとても暑い）
例）We have a lot of rain in June.（6月には雨がたくさん降る）
季節にも「時の前置詞」で学んだ in がそのまま使われる（幅のある期間だから in）。

■ 好きな季節をたずねる・答える
What season do you like the best?（いちばん好きな季節は何ですか）
— I like fall the best because the weather is nice.（天気がいいので秋がいちばん好きです）
because（〜なので）を使うと、理由を添えて答えられるようになる。

■ 季節に関する語彙
cherry blossoms（桜）・rainy season（梅雨）・fireworks（花火）・leaves change color（紅葉する）・snow（雪）
これらの語を使うと、日本らしい季節の話題を英語で説明できるようになる。

★ ポイント：季節・行事に使う前置詞は「時の前置詞」の単元で学んだ in がそのまま使える。範囲の広さで前置詞が決まる、という考え方をここでも思い出す。`,
      },
      {
        heading: '学校行事の語彙と、行事を伝える表現',
        body: `学校行事は季節と結びつけて説明されることが多いので、あわせて覚えておくと会話や作文で使いやすい。

■ 主な学校行事
sports day（運動会）・school trip（修学旅行）・school festival（文化祭）・chorus contest（合唱コンクール）・entrance ceremony（入学式）・graduation ceremony（卒業式）・summer vacation（夏休み）・winter vacation（冬休み）

■ 「〜月に〜がある」：We have ＋行事＋in ＋月
例）We have sports day in October.（10月に運動会がある）
例）We have a school trip in June.（6月に修学旅行がある）
例）Our school festival is in September.（私たちの学校の文化祭は9月にある）
行事を主語にして be動詞で表す文と、We have 〜 で表す文のどちらも使われる。

■ 行事についての感想を伝える
例）I'm looking forward to the school trip.（修学旅行を楽しみにしている）
例）Sports day was a lot of fun.（運動会はとても楽しかった）
be looking forward to 〜（〜を楽しみにする）の to のあとには名詞または動名詞（-ing形）を置く。

■ 四季と行事をつなげた説明の例
In Japan, we have four seasons. In spring, we have an entrance ceremony. In summer, we have summer vacation. In fall, we have sports day and a school festival. In winter, we have a chorus contest and winter vacation.

⚠ 注意：be looking forward to のあとに動詞を続けるときは、to 不定詞（to go など）ではなく -ing 形にする。to はここでは前置詞として働いているため、前置詞のうしろは動名詞になるという「前置詞のうしろは -ing」の原則がここでも当てはまる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は夏休みを楽しみにしています」を英語にしなさい。',
        wrongAnswer: "I'm looking forward to have summer vacation.",
        trapExplanation: 'to のあとに動詞を続けるときは to 不定詞の形（原形）にすると思いこみ、be looking forward to の to が前置詞であることを見落としてしまう。',
        correctAnswer: "I'm looking forward to having summer vacation.（またはI'm looking forward to summer vacation. のように名詞のみでもよい）",
        correctExplanation: 'be looking forward to の to は前置詞なので、あとに動詞を続けるときは -ing 形（動名詞）にする。I want to 〜 のような to 不定詞の to と、この to は形が同じでも働きが違うので混同しないよう注意する。',
      },
      {
        question: '「9月に文化祭があります」を英語にしなさい。',
        wrongAnswer: 'We have a school festival on September.',
        trapExplanation: '特定の1日を表すときに使う on を、月のような幅のある期間にも使ってしまう。',
        correctAnswer: 'We have a school festival in September.',
        correctExplanation: '月は年・季節と同じ「幅のある期間」なので in を使う。特定の日付・曜日には on、月・季節・年には in、という「時の前置詞」の使い分けをここでも当てはめて考える。',
      },
    ],
  },

  {
    id: 'new20_j1_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    title: '前置詞の総合演習：場所と時間の前置詞まとめ',
    description: 'in・on・at を中心に、場所と時間の前置詞をまとめて整理し、まぎらわしい表現を最終チェックする',
    intro: 'ここまで場所と時を表す前置詞を単元ごとに学んできた。最後に in・on・at を中心とした前置詞をひとつの表にまとめ、場所と時間で共通する考え方・異なる考え方を整理して、入試レベルの問題にも対応できる形に仕上げよう。',
    order: 7599,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '場所の in・on・at と時の in・on・at は「範囲の広さ」という共通の考え方でつながっている。',
      '場所：in（空間の中）・on（面の上）・at（1つの点）。',
      '時：in（年・月・季節）・on（曜日・日付）・at（時刻・night）。',
      'at the corner（角のところで）・on the corner（角の上に建っている）のように、同じ場所でも意味の違いで前置詞が変わることがある。',
      'in bed（寝ている状態）・on the bed（ベッドの上に、物として）のように、状態を表す決まり文句には特別な前置詞が使われることがある。',
      'this, next, last, every の前には in / on / at を付けない。',
    ],
    sections: [
      {
        heading: '場所と時間の前置詞をひとつの表で整理する',
        body: `場所を表す in・on・at と、時を表す in・on・at は、実はまったく同じ「範囲の広さ」の考え方でつながっている。

■ in：広い空間・広い期間
場所：in Japan, in Osaka, in the box（囲まれた空間）
時間：in 2026, in April, in summer（幅のある期間）
→ どちらも「広がりのある枠の中」というイメージで共通している。

■ on：接している面・特定の1日
場所：on the desk, on the wall（面に接している）
時間：on Monday, on May 5th（カレンダー上の1マス＝面のイメージ）
→ カレンダーの1日を「日付という面の上」ととらえると、場所の on と同じ発想でつながる。

■ at：1つの点・1つの時刻
場所：at the station, at the door（地図上の1点）
時間：at seven, at noon（時計の針が指す1点）
→ どちらも「これ以上分けられない、ピンポイントの点」という共通イメージを持つ。

★ ポイント：in・on・at を場所と時間でバラバラに覚えるのではなく、「空間・面・点」という1つの物差しで両方をまとめて理解すると、どちらの文でも迷わず選べるようになる。`,
      },
      {
        heading: 'まぎらわしい前置詞の最終チェック',
        body: `最後に、入試や定期テストで狙われやすい、似た形でも意味が変わる前置詞表現をまとめて確認する。

■ at the corner と on the corner
at the corner：角のところで（1つの地点として）
　例）Turn left at the corner.（角を左に曲がって）
on the corner：角に（建物などが接して建っている）
　例）There is a bookstore on the corner.（角に本屋がある）

■ in bed と on the bed
in bed：ベッドで寝ている状態（「就寝中」という意味を含む）
　例）My brother is still in bed.（弟はまだ寝ている）
on the bed：ベッドの上に（物が置かれている状態）
　例）There is a cat on the bed.（ベッドの上にねこがいる）

■ in time と on time
in time：（何かに）間に合って
　例）We got to the station in time for the train.（電車に間に合うように駅に着いた）
on time：時間どおりに
　例）The train arrived on time.（電車は時間どおりに到着した）

■ 前置詞を付けない語のおさらい
this, next, last, every が時を表す語の前に付くときは前置詞なし。
　例）this morning／next Sunday／last year／every day

■ 総合練習の視点
問題を解くときは、①場所か時間か、②広い範囲か特定の1日か1点か、③this/next/last/everyが付いていないか、の3点を順に確認すると、in・on・at の選択でほぼ迷わなくなる。

⚠ 注意：in time と on time は日本語にするとどちらも「間に合う・時間どおり」のように感じられ混同しやすいが、in time は「ぎりぎり間に合う」、on time は「予定どおりの時刻に」という違いがある。セットで例文ごと覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「弟はまだ寝ています」を英語にしなさい。',
        wrongAnswer: 'My brother is still on the bed.',
        trapExplanation: '「ベッドに」という日本語のイメージから、面の上にいることを表す on を選んでしまい、in bed という決まり文句を知らない。',
        correctAnswer: 'My brother is still in bed.',
        correctExplanation: '「寝ている状態」を表す決まり文句は in bed である。on the bed は「ベッドという面の上に物や人が乗っている」ことを表すだけで、就寝中という意味は含まない。in bed はそのまま熟語として覚える。',
      },
      {
        question: '「その電車は時間どおりに到着した」を英語にしなさい。',
        wrongAnswer: 'The train arrived in time.',
        trapExplanation: '「時間に関する熟語」ということだけを覚えていて、in time と on time の意味の違い（ぎりぎり間に合う／予定どおり）を区別せずに使ってしまう。',
        correctAnswer: 'The train arrived on time.',
        correctExplanation: '「予定どおりの時刻に」という意味を表すのは on time である。in time は「（遅れずに）何かに間に合って」という意味で、We arrived in time for the movie.（映画に間に合うように着いた）のように使う。2つの熟語は意味が異なるので、対比させて覚える。',
      },
    ],
  },
];
