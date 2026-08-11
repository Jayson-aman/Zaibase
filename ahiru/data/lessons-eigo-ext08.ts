import type { Lesson } from './lesson-types';

// 中学受験 英語「前置詞・接続詞」拡張ユニット（35セッション：eigo_s261〜eigo_s295）
// order は 761〜795。
// 構成：時の at/on/in(4)／場所の at/on/in(4)／位置関係の前置詞(5)／方向・移動の前置詞(4)／
//       for・during・while・since・until・by(4)／その他の重要前置詞(3)／
//       等位接続詞と命令文, and 〜(3)／従属接続詞(4)／相関接続詞(4)
// 図解は「位置関係」「時間の幅」「分岐」のように、図にすることで本当に理解が進む箇所だけに
// 付けてある（lesson-figs-eigo-ext08.ts、35課中16課）。
export const eigoExt08Lessons: Lesson[] = [
  // ───────────────── 1. 時を表す at / on / in（s261〜s264） ─────────────────
  {
    id: 'eigo_s261',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時の前置詞①：at・on・in を「幅」で選ぶ',
    description: '時刻には at、日には on、月や年には in。時間の幅の大きさで前置詞が決まることを理解する',
    intro: '「7時に」「日曜日に」「4月に」——日本語はどれも「に」ですみます。ところが英語は at seven、on Sunday、in April と、三つに分かれます。えらび方の手がかりは、その時間の「はば」の大きさです。せまいほど at、広いほど in になります。',
    order: 761,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'at ＝ 時刻のように「一点」と見る時間（at seven, at noon, at night）。',
      'on ＝ 日・曜日・日付のように「一日」の時間（on Monday, on May 5）。',
      'in ＝ 月・季節・年・世紀のように「広がりのある」時間（in May, in summer, in 2026）。',
      '幅の順は at ＜ on ＜ in。せまいほど at、広いほど in と覚える。',
      'in the morning / in the afternoon / in the evening は in、at night だけ at。',
    ],
    sections: [
      {
        heading: '時間の幅で三つを選び分ける',
        body: `英語では「いつ」を表すとき、その時間をどれくらいの大きさで見ているかによって前置詞が変わる。日本語ではどれも「〜に」で済んでしまうので、ここが中学受験の英語でいちばん点差のつくところである。

■ at ＝ 一点として見る時間
時計の針が指す一瞬をイメージする。
例）at six o'clock（六時に）／at noon（正午に）／at midnight（真夜中に）／at night（夜に）／at that time（そのとき）

■ on ＝ 一日として見る時間
カレンダーの一マスをイメージする。曜日・日付・特定の日はすべて on。
例）on Monday（月曜日に）／on May 5（五月五日に）／on my birthday（私の誕生日に）／on New Year's Day（元日に）

■ in ＝ 広がりのある時間
月・季節・年・世紀のように、何日も何か月も続く長い時間は in。
例）in May（五月に）／in summer（夏に）／in 2026（二〇二六年に）／in the 21st century（二十一世紀に）

★ ポイント：at（点）→ on（一日）→ in（広がり）と、右に行くほど時間の幅が大きくなる。まず「これはどれくらいの長さの時間か」を考えれば、ほとんどの問題は解ける。`,
        figureId: 'lf_eigoext08_261',
      },
      {
        heading: '幅で決められない例外を覚える',
        body: `幅の考え方でうまくいかないものが少しだけある。数が少ないので、そのまま覚えてしまうのが早い。

■ 一日の時間帯は in だが、night だけ at
例）in the morning（朝に）／in the afternoon（午後に）／in the evening（夕方に）／at night（夜に）
「夜」も何時間もあるのに at を使う。昔の人が「夜＝暗い一点」として感じていた名残と考えて、at night だけは特別だと覚える。

■ 「〜の日の朝」は on になる
morning でも「五月五日の朝」のように日付が付くと、その日一日をさす扱いになって on に変わる。
例）on the morning of May 5（五月五日の朝に）／on a rainy morning（ある雨の朝に）

■ 食事の時間は at
例）at breakfast（朝食のときに）／at lunch／at dinner

⚠ 注意：日本語の「五月に」「五月五日に」はどちらも「に」だが、英語では in May と on May 5 で前置詞が変わる。日付が付いた瞬間に in から on へ切りかわると覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は五月五日に生まれました。」を英語にしなさい。',
        wrongAnswer: 'I was born in May 5.',
        trapExplanation: '「五月に＝in May」と習ったばかりなので、日付が付いても同じ in を使ってしまう。日本語ではどちらも「五月に」「五月五日に」と同じ「に」なので、区別する手がかりがない。',
        correctAnswer: 'I was born on May 5.',
        correctExplanation:
          '月だけなら幅が広いので in May、日付まで決まると「一日」になるので on May 5 となる。in May 5 という言い方は存在しない。「日付・曜日・特定の日はすべて on」と覚え、May 5 / Monday / my birthday / New Year\'s Day はまとめて on の仲間に入れておく。',
      },
      {
        question: '「私たちは夜に星を見ました。」の空所に入る語を答えなさい。　We saw the stars (　) night.',
        wrongAnswer: 'in',
        trapExplanation: 'in the morning・in the afternoon・in the evening を先に覚えているため、同じ仲間だと考えて in the night としてしまう。',
        correctAnswer: 'at',
        correctExplanation:
          '一日の時間帯のうち night だけは at night という形をとる。しかも the が付かない点も要注意で、at the night とは言わない。「朝・昼・夕方は in ＋ the、夜だけ at night」と、セットで声に出して覚えるのが確実である。',
      },
    ],
  },

  {
    id: 'eigo_s262',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時の前置詞②：on を使う場合を確実にする',
    description: '曜日・日付・特定の日・「〜の日の朝」など、on を使う時の表現を整理する',
    intro: '「日曜日に」は on Sunday、「4月1日に」は on April 1、「クリスマスの朝に」は on Christmas morning です。朝なのに in the morning ではなく on になります。特定の日と結びついたとたん、前置詞が on に乗りかえるのです。ここがよく問われます。',
    order: 762,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '曜日は on Monday。複数の曜日をまとめて言うときは on Mondays（毎週月曜に）。',
      '日付は on April 1 / on the first of April。',
      '特定の日は on my birthday, on Christmas Day, on New Year\'s Day。',
      '「〜曜日の朝」「〜日の朝」は in ではなく on Sunday morning / on the morning of May 5。',
      '週末は on weekends（アメリカ英語）／at the weekend（イギリス英語）。入試では on weekends を覚えておけばよい。',
    ],
    sections: [
      {
        heading: 'on を使う四つのグループ',
        body: `on を使う時の表現は、次の四つに整理できる。どれも「カレンダーの一マス＝一日」に関係している。

■ ①曜日
例）on Monday（月曜日に）／on Sunday（日曜日に）
複数形にすると「毎週〜曜日に」の意味になる。
例）I play tennis on Sundays.（私は毎週日曜日にテニスをします。）

■ ②日付
例）on May 5（五月五日に）／on the fifth of May（同じ意味の別の言い方）
アメリカ式では「月→日」の順に書き、May 5 と書いて May fifth と読む。

■ ③特定の日・記念日
例）on my birthday（私の誕生日に）／on Christmas Day（クリスマスの日に）／on New Year's Day（元日に）／on that day（その日に）／on the last day of school（学校の最終日に）

■ ④「〜の日の朝・昼・夜」
morning・afternoon・evening・night も、どの日かがはっきり決まると on になる。
例）on Sunday morning（日曜日の朝に）／on the morning of May 5（五月五日の朝に）／on a cold night（ある寒い夜に）

★ ポイント：④がいちばん出題される。「日付や曜日がくっついたら on」という一文を丸ごと覚えておく。`,
      },
      {
        heading: '同じ語でも前置詞が変わることを実感する',
        body: `同じ morning という語でも、前に付く語によって前置詞が in と on の間で行ったり来たりする。次の三つを並べて比べておく。

例）in the morning（ふつうに「朝に」）
例）on Sunday morning（日曜日の朝に）
例）on the morning of the party（パーティーの日の朝に）

一つ目は「朝という時間帯」を広く指しているので in、二つ目と三つ目は「特定の一日の朝」を指しているので on になる。「どの日か決まっているかどうか」で判断すればよい。

■ 前置詞を付けない言い方との組み合わせ
this morning（今朝）・yesterday morning（昨日の朝）・tomorrow morning（明日の朝）には前置詞を付けない。
例）I got up at six this morning.（私は今朝六時に起きました。）
　　× in this morning / × on this morning とはしない。

⚠ 注意：this・last・next・every が付いたら前置詞は消える。この規則は on にも in にも at にも共通なので、s264 でくわしく学習する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は五月五日の朝に彼に会いました。」の空所に入る語を答えなさい。　I met him (　) the morning of May 5.',
        wrongAnswer: 'in',
        trapExplanation: '「朝に＝in the morning」という形をそのまま当てはめてしまう。文が長いため、後ろに of May 5 が付いていることを見落としやすい。',
        correctAnswer: 'on',
        correctExplanation:
          'the morning of May 5 は「五月五日という一日の朝」であり、日付が決まっている。日付や曜日が結び付いた時間帯は on になるので on the morning of May 5 が正しい。うしろに of ＋ 日付、または前に曜日が付いていないかを必ず確かめてから前置詞を選ぶ。',
      },
      {
        question: '「私たちは日曜日の朝にサッカーをします。」を英語にしなさい。',
        wrongAnswer: 'We play soccer in Sunday morning.',
        trapExplanation: 'in the morning を覚えているうえに、日本語の語順「日曜日の朝に」をそのまま置きかえようとして、in を残したまま Sunday を差しこんでしまう。',
        correctAnswer: 'We play soccer on Sunday morning.',
        correctExplanation:
          'Sunday という曜日が付いているので on を使い、the も付けずに on Sunday morning とする。in the morning の the は「曜日が付くと消える」と覚えておくとよい。同じように on Monday afternoon, on Friday evening も the を入れない。',
      },
    ],
  },

  {
    id: 'eigo_s263',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時の前置詞③：in と at の残りの用法',
    description: '一日の時間帯・季節・年のほか、「〜後に」を表す in と、at を使う時刻表現を整理する',
    intro: 'in the morning とは言うのに、なぜ at night なのでしょう。朝・昼・夕方は in、夜だけ at です。理屈で説明しづらい部分ですが、決まった形として覚えるしかありません。また「3日後に」を in three days と言うのも、日本語からは出てきにくい形です。',
    order: 763,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'in the morning / in the afternoon / in the evening は the が必要。',
      'at noon（正午）・at midnight（真夜中）・at night（夜）は the を付けない。',
      'in ＋ 期間 で「今から〜後に」。in two hours ＝ 二時間後に。',
      '「〜後に」を after で表すのは過去の話のとき。未来のことは in を使う。',
      'in time（間に合って）と on time（時間どおりに）は意味がちがう。',
    ],
    sections: [
      {
        heading: '一日の時間帯を時計の上で整理する',
        body: `一日を時計の上で区切ると、どこで in と at が入れかわるのかが見えてくる。

■ in を使う時間帯（the が必要）
in the morning（朝・午前中に。だいたい夜明けから正午まで）
in the afternoon（午後に。正午から夕方まで）
in the evening（夕方・晩に。日暮れから寝るころまで）

■ at を使う時刻（the を付けない）
at noon（正午に）／at midnight（真夜中の十二時に）／at night（夜に）／at dawn（夜明けに）

■ 時刻そのもの
at seven（七時に）／at seven thirty（七時三十分に）／at about eight（八時ごろに）

例）I get up at six in the morning.（私は朝六時に起きます。）
この文のように、時刻（at six）と時間帯（in the morning）は同じ文の中で重ねて使える。英語では「せまい方を先に、広い方を後に」並べるのがふつうである。

★ ポイント：時刻・正午・真夜中・夜は at、朝・午後・夕方は in ＋ the。`,
        figureId: 'lf_eigoext08_263',
      },
      {
        heading: '「〜後に」の in と、まぎらわしい熟語',
        body: `in にはもう一つ、時間の長さと結び付いた大切な用法がある。

■ in ＋ 期間 ＝ 「今から〜後に」
例）I will be back in an hour.（私は一時間後に戻ります。）
例）He will come in ten minutes.（彼は十分後に来ます。）
この in は「一時間という時間が過ぎたところで」という意味で、未来のことに使う。

■ after ＋ 期間 は過去の話のとき
例）He came back after two hours.（彼は二時間後に戻ってきた。）
過去の出来事を語るときは after ＋ 期間が使える。「未来は in、過去は after」と対にして覚える。

■ まぎらわしい熟語
in time（間に合って）… I got to the station in time.（私は駅に間に合った。）
on time（時間どおりに）… The train left on time.（電車は時間どおりに出発した。）
in time は「ぎりぎりでも間に合った」、on time は「ぴったり定刻に」という感じのちがいがある。

⚠ 注意：「三日後に会いましょう」は See you in three days. である。after three days としないよう気をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は二時間後に戻ります。」を英語にしなさい。',
        wrongAnswer: 'I will be back after two hours.',
        trapExplanation: '日本語の「〜後に」を辞書で引くと after が出てくるため、未来の話でも after を使ってしまう。after は「〜のあとで」という意味なので、日本語だけを見ていると誤りに気づけない。',
        correctAnswer: 'I will be back in two hours.',
        correctExplanation:
          '今を出発点にして「これから二時間たったら」という未来のことを言うときは in ＋ 期間を使う。after ＋ 期間は He came back after two hours. のように、すでに起きた過去の出来事を語るときに使う。「未来は in、過去は after」と対で覚える。',
      },
      {
        question: '「私たちは正午に昼食を食べます。」の空所に入る語を答えなさい。　We have lunch (　) noon.',
        wrongAnswer: 'in',
        trapExplanation: 'in the morning・in the afternoon を先に覚えているため、昼に関係する語はすべて in だと思いこんでしまう。',
        correctAnswer: 'at',
        correctExplanation:
          'noon は「昼の十二時」という一点の時刻なので at noon となる。同じ理由で at midnight（真夜中の十二時に）も at である。「時計の針が一か所を指すものは at」と考えれば、at seven・at noon・at midnight・at night をまとめて処理できる。',
      },
    ],
  },

  {
    id: 'eigo_s264',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時の前置詞④：前置詞を付けない言い方',
    description: 'today・last week・every day など、前置詞を付けてはいけない時の表現を覚える',
    intro: '「今日、公園へ行きました」を on today と書いてしまう人がいます。today・yesterday・last week・every day には前置詞を付けません。これらの語が、もともと副詞のはたらきをしているからです。付けないことを覚える、めずらしい単元です。',
    order: 764,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'today, tomorrow, yesterday, tonight には前置詞を付けない。',
      'this・last・next・every が付いた時の言い方には前置詞を付けない（this morning, last night, next week, every day）。',
      'all day（一日中）・all night（一晩中）も前置詞なし。',
      '× in yesterday / × on last Sunday / × in every morning はすべて誤り。',
      '前置詞が要るかどうかは「頭に this・last・next・every が付いていないか」で見分ける。',
    ],
    sections: [
      {
        heading: '前置詞が消える言い方',
        body: `英語には「時を表す語なのに前置詞を付けてはいけない」グループがある。ここを知らないと、正しい前置詞を選べても余計な語を書いて減点されてしまう。

■ ①それだけで「いつ」を表す語
today（今日）／tomorrow（明日）／yesterday（昨日）／tonight（今夜）／now（今）／then（そのとき）
例）I will go there tomorrow.（私は明日そこへ行きます。）
　　× I will go there on tomorrow.

■ ②this・last・next・every が付いた形
this morning（今朝）／this year（今年）／last night（昨夜）／last Sunday（この前の日曜日）／next week（来週）／next month（来月）／every day（毎日）／every Sunday（毎週日曜日）
例）We had a party last Saturday.（私たちはこの前の土曜日にパーティーをしました。）
　　× on last Saturday

■ ③all が付いた形
all day（一日中）／all night（一晩中）／all year（一年中）
例）It rained all day.（一日中雨が降った。）

★ ポイント：this・last・next・every・all のどれかが頭に付いていたら、前置詞は書かない。この五語を呪文のように覚えておくと迷わない。`,
      },
      {
        heading: '前置詞が要る形と要らない形を並べて確かめる',
        body: `同じ Sunday でも、前に付く語によって前置詞が要ったり要らなかったりする。次の対で確認する。

前置詞が要る　… on Sunday（日曜日に）／in May（五月に）／at seven（七時に）
前置詞が要らない … last Sunday（この前の日曜日に）／next May（来年の五月に）／this morning（今朝）

例）I saw him on Sunday.（私は日曜日に彼に会いました。）
例）I saw him last Sunday.（私はこの前の日曜日に彼に会いました。）
どちらも日本語では「日曜日に」だが、last が付いた瞬間に on が消える。

■ every の付いた形は頻度を表す
例）I practice the piano every day.（私は毎日ピアノを練習します。）
例）She goes to the library every Saturday.（彼女は毎週土曜日に図書館へ行きます。）
every Saturday は on Saturdays（毎週土曜日に）と同じ意味を表す。ただし every のほうには前置詞を付けない。

⚠ 注意：英作文で日本語の「〜に」を機械的に前置詞に置きかえると、× in every morning のような誤りが生まれる。書き終えたら「this・last・next・every・all が付いていないか」を必ず見直す。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はこの前の日曜日に彼に会いました。」を英語にしなさい。',
        wrongAnswer: 'I met him on last Sunday.',
        trapExplanation: '「日曜日に＝on Sunday」という形を強く覚えているので、last が付いても on を残してしまう。日本語の「この前の日曜日に」に「に」があることも、前置詞を書きたくなる原因になる。',
        correctAnswer: 'I met him last Sunday.',
        correctExplanation:
          'last・next・this・every が付いた時の表現には前置詞を付けない。last Sunday はそれだけで副詞のはたらきをするので、on は不要である。同じように次の日曜日は next Sunday、今週の日曜日は this Sunday となり、いずれも前置詞は書かない。',
      },
      {
        question: '「私は毎朝六時に起きます。」の下線部の誤りを直しなさい。　I get up at six in every morning.',
        wrongAnswer: '誤りはない（in every morning のままでよい）',
        trapExplanation: 'in the morning という形が頭にあるため、the を every に置きかえただけの in every morning を正しい形だと感じてしまう。',
        correctAnswer: 'I get up at six every morning.',
        correctExplanation:
          'every が付いた形には前置詞を付けないので in は不要である。in the morning（朝に）と every morning（毎朝）は別の形だと区別して覚える。なお at six の at は時刻に付く前置詞なのでそのまま残す。消すのは every の前の in だけである。',
      },
    ],
  },

  // ───────────────── 2. 場所を表す at / on / in（s265〜s268） ─────────────────
  {
    id: 'eigo_s265',
    subject: 'eigo',
    examType: 'chugaku',
    title: '場所の前置詞①：at・on・in を「点・面・中」で選ぶ',
    description: '場所の at は点、on は接している面、in は内部。三つのイメージを図で区別する',
    intro: '「駅で待つ」は at the station、「かべにかかっている」は on the wall、「箱の中」は in the box。at は点、on は接している面、in は内部です。日本語の「で」「に」からは区別できないので、絵でイメージをつかむのが近道になります。',
    order: 765,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'at ＝ 地図の上の一点として見る場所（at the bus stop, at the door, at the corner）。',
      'on ＝ 何かの面にくっついている場所（on the desk, on the wall, on the floor）。',
      'in ＝ 囲まれた内部（in the box, in the room, in Osaka）。',
      'on は「上」ではなく「接している」がもとの意味。かべや天井でも on を使う。',
      '同じ場所でも見方が変われば前置詞が変わる（at the station ／ in the station）。',
    ],
    sections: [
      {
        heading: '三つの前置詞の元のイメージ',
        body: `場所を表す at・on・in も、時の前置詞と同じように「どういう見方をしているか」で決まる。日本語の「〜に」「〜で」だけを手がかりにすると必ず迷うので、イメージごと覚えてしまう。

■ at ＝ 点
広い地図の上に打った一つの印をイメージする。大きさを考えず、ただ「そこ」と指さす感じである。
例）at the bus stop（バス停で）／at the door（ドアのところで）／at the corner（角で）／at the station（駅で）

■ on ＝ 接している面
「上」と訳すことが多いが、本当の意味は「くっついている」である。だから、かべや天井でも on を使う。
例）on the desk（机の上に）／on the wall（かべに）／on the floor（ゆかに）／on the ceiling（天井に）

■ in ＝ 囲まれた内部
箱・部屋・町のように、周りを囲まれた空間の中にあるとき。
例）in the box（箱の中に）／in the room（部屋の中に）／in Osaka（大阪に）／in the water（水の中に）

★ ポイント：「上」だから on、と訳語で決めてはいけない。「くっついているか」「囲まれているか」「ただの一点か」で判断する。`,
        figureId: 'lf_eigoext08_265',
      },
      {
        heading: '同じ場所でも見方で前置詞が変わる',
        body: `英語では、同じ場所を指していても、話し手がどう見ているかで前置詞が変わることがある。

例）I met him at the station.（私は駅で彼に会いました。）
例）There is a bookstore in the station.（駅の中に本屋があります。）
一つ目は「駅という地点で」という意味なので at、二つ目は「駅の建物の内部に」という意味なので in を使う。

例）The children are playing at the park.（子どもたちは公園で遊んでいます。）
例）There are many trees in the park.（公園の中には木がたくさんあります。）
これも同じで、「待ち合わせ場所としての公園」なら at、「囲まれた空間としての公園」なら in になる。

■ 町や国は in
広い場所は当然「囲まれた空間」なので in を使う。
例）I live in Japan.（私は日本に住んでいます。）
例）She was born in Osaka.（彼女は大阪で生まれました。）

⚠ 注意：日本語で「〜で」と言うからといって、いつも at になるわけではない。「駅で買った」「駅の中で買った」のように、日本語のほうがあいまいなことも多い。英語では中にいるかどうかをはっきりさせる必要がある。`,
      },
    ],
    trapExamples: [
      {
        question: '「かべに一枚の絵がかかっています。」の空所に入る語を答えなさい。　There is a picture (　) the wall.',
        wrongAnswer: 'in',
        trapExplanation: '日本語が「かべに」なので「中に」の in を選んでしまう。また on を「上に」とだけ覚えていると、かべは上ではないので on を候補から外してしまう。',
        correctAnswer: 'on',
        correctExplanation:
          'on のもとの意味は「上」ではなく「接している」である。絵はかべの表面にくっついているので on the wall となる。同じ理由で天井のハエは a fly on the ceiling、ゆかのボールは a ball on the floor と、上下に関係なく on を使う。in the wall と言うと、かべの内部に絵が埋めこまれていることになってしまう。',
      },
      {
        question: '「彼はバス停で待っていました。」を英語にしなさい。',
        wrongAnswer: 'He was waiting in the bus stop.',
        trapExplanation: '「バス停」という建物のようなものを思いうかべ、その中で待っているつもりで in を選んでしまう。日本語の「〜で」からも in を連想しやすい。',
        correctAnswer: 'He was waiting at the bus stop.',
        correctExplanation:
          'バス停は地図の上の一点として見る場所なので at を使う。同じ仲間に at the door（ドアのところで）、at the corner（角で）、at the gate（門のところで）がある。「そこは囲まれた空間か、それとも地点か」を考えれば、in と at の区別はほとんど解決する。',
      },
    ],
  },

  {
    id: 'eigo_s266',
    subject: 'eigo',
    examType: 'chugaku',
    title: '場所の前置詞②：at と in の使い分け・home の注意',
    description: '建物と都市、arrive at と arrive in、前置詞の要らない home の使い方を身につける',
    intro: '「家にいます」を I am in my home. と言うと不自然です。英語では I am at home. と、at を使い the も my も付けません。home はとても特別な語なのです。arrive at と arrive in の使い分けもあわせて整理します。',
    order: 766,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'せまい場所や地点には at、広い場所には in（arrive at the station / arrive in Tokyo）。',
      '「〜に着く」は arrive at ／ arrive in ／ get to ／ reach（reach は前置詞不要）。',
      'at school は「学校で（勉強や活動をしている）」、in the school は「校舎の中に」。',
      'home は副詞なので go home / come home / be at home のように to や in を付けない。',
      'at home（家で）・at work（仕事中で）・at table（食事中で）は the が付かない。',
    ],
    sections: [
      {
        heading: 'せまい場所は at、広い場所は in',
        body: `at と in の境目は「その場所を一点と見るか、広がりのある空間と見るか」で決まる。とくに「〜に着く」を表す動詞と一緒に問われることが多い。

■ 到着を表す言い方
arrive at ＋ せまい場所（駅・空港・ホテル・学校）
arrive in ＋ 広い場所（国・都市）
例）We arrived at the airport at ten.（私たちは十時に空港に着きました。）
例）We arrived in London last night.（私たちは昨夜ロンドンに着きました。）

■ 同じ意味の別の言い方
get to ＋ 場所（口語的でよく使う）
例）I got to school at eight.（私は八時に学校に着きました。）
reach ＋ 場所（reach は他動詞なので前置詞を付けない）
例）We reached the top of the mountain.（私たちは山頂に着きました。）
　　× We reached to the top.

★ ポイント：arrive は自分では場所を取れないので前置詞（at / in）が必要、reach は前置詞なしで場所を取る。この対比がそのまま入試問題になる。`,
      },
      {
        heading: 'at school と in the school、そして home',
        body: `建物を表す語には、the を付けずに使うと「本来の目的で使っている」という意味になるものがある。

■ the を付けない形
at school（授業を受けている・在学している）／in bed（寝ている）／at church（礼拝している）／in hospital（入院している）
例）My brother is at school now.（兄は今学校に行っています。）

■ the を付けた形
in the school（校舎の中にいる。掃除や見学かもしれない）
例）There is a swimming pool in the school.（その学校の中にはプールがあります。）

■ home は副詞
home は「家へ・家に」という意味をそれ自身が持っているので、go / come / get の後に前置詞を付けない。
例）I go home at five.（私は五時に家に帰ります。）　× go to home
例）He came home late.（彼は遅く帰宅した。）　× came to home
ただし「家で」と状態を表すときは at home と at が付く。
例）I stayed at home yesterday.（私は昨日家にいました。）

⚠ 注意：go home は前置詞なし、be at home は前置詞あり。動きを表すか、いる場所を表すかで区別する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは昨日東京に着きました。」の下線部の誤りを直しなさい。　We arrived to Tokyo yesterday.',
        wrongAnswer: '誤りはない（arrived to Tokyo でよい）',
        trapExplanation: '「〜に」という日本語と、go to Tokyo という形の記憶が結び付いて、arrive にも to を付けてしまう。to は「〜へ向かって」という方向の語で、到着した結果を表す arrive とは組み合わない。',
        correctAnswer: 'We arrived in Tokyo yesterday.',
        correctExplanation:
          'arrive の後には at か in が来る。東京のような都市は広い空間なので in を使い、駅や空港のようなせまい地点なら arrive at the station となる。arrive to という形は存在しない。to を使いたいときは We got to Tokyo yesterday. のように get to にする。',
      },
      {
        question: '「私は今家にいます。」を英語にしなさい。',
        wrongAnswer: 'I am in home now.',
        trapExplanation: '「家の中にいる」という日本語のイメージから in を選び、さらに home をふつうの名詞だと思って前置詞を付けてしまう。',
        correctAnswer: 'I am at home now.',
        correctExplanation:
          '「家にいる」という状態は決まった言い方で at home と表す。in home という形は使わない。また go home（家へ帰る）・come home（帰宅する）のように動きを表すときは、home が副詞になるので前置詞をまったく付けない。「動くときは前置詞なし、いるときは at home」と対で覚える。',
      },
    ],
  },

  {
    id: 'eigo_s267',
    subject: 'eigo',
    examType: 'chugaku',
    title: '場所の前置詞③：on は「接している」',
    description: 'かべ・天井・階・乗り物など、on が上下に関係なく使われる場面を整理する',
    intro: '「電車の中で」を in the train と言ってしまいがちですが、ふつうは on the train です。バスも飛行機も on を使います。日本語の「中」につられて in にすると、たちまち不自然になります。on は上だけでなく「接している」というイメージだからです。',
    order: 767,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'on のもとの意味は「接している」。上でも横でも下でも、くっついていれば on。',
      'on the wall（かべに）・on the ceiling（天井に）・on the floor（ゆかに）。',
      '階は on the second floor（二階に）。in the second floor とはしない。',
      '電車・バス・飛行機・船は on、車・タクシーは in（on the train ／ in the car）。',
      'on page ten（十ページに）・on the left（左側に）・on the river（川のほとりに）も on。',
    ],
    sections: [
      {
        heading: '「上」ではなく「接している」で考える',
        body: `on を「上に」とだけ覚えていると、かべや天井の話になったとたんに選べなくなる。on の本当の意味は「面にふれている」ことである。

■ 上でなくても on
例）a picture on the wall（かべにかかっている絵）
例）a fly on the ceiling（天井にとまっているハエ）
例）a ball on the floor（ゆかにあるボール）
天井のハエは「下向きにくっついている」が、それでも接しているので on を使う。

■ 階数は on
例）My room is on the second floor.（私の部屋は二階にあります。）
建物の階は「その面の上に立っている」と考えるので on になる。in the second floor とは言わない。

■ 線や面に沿った場所
例）Osaka is on the Yodo River.（大阪は淀川のほとりにあります。）
例）The bank is on Main Street.（銀行はメインストリート沿いにあります。）
例）The answer is on page ten.（答えは十ページにあります。）
例）Turn right at the corner. The post office is on your left.（角を右に曲がってください。郵便局は左手にあります。）

★ ポイント：かべ・天井・ゆか・階・道・ページ・左右は、すべて on の仲間である。`,
        figureId: 'lf_eigoext08_267',
      },
      {
        heading: '乗り物の on と in',
        body: `乗り物に「乗っている」と言うとき、on と in が乗り物の種類で分かれる。中学入試でもよく問われる。

■ on を使う乗り物（立って歩けるくらい大きいもの）
on the train（電車で）／on the bus（バスで）／on the plane（飛行機で）／on the ship（船で）／on a bike（自転車で）／on a horse（馬に乗って）
例）I read a book on the train.（私は電車の中で本を読みました。）

■ in を使う乗り物（体を囲まれるくらい小さいもの）
in the car（車で）／in a taxi（タクシーで）
例）They were talking in the car.（彼らは車の中で話していました。）

■ 手段を表すときは by ＋ 無冠詞
「〜で行く」と交通手段を言うときは、the も a も付けずに by を使う。
例）I go to school by bus.（私はバスで学校へ行きます。）
　　× by the bus ／ × by a bus
ただし「歩いて」は on foot という決まった形で、by は使わない。

⚠ 注意：同じバスでも、「バスで通学する」は by bus、「バスの中で本を読む」は on the bus。手段か場所かで前置詞が変わる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の教室は三階にあります。」の空所に入る語を答えなさい。　My classroom is (　) the third floor.',
        wrongAnswer: 'in',
        trapExplanation: '「三階に（建物の中に）ある」と考えて in を選んでしまう。日本語の「〜階に」からは、接触のイメージがまったく浮かばない。',
        correctAnswer: 'on',
        correctExplanation:
          '階は「そのゆかの面の上にある」と考えるので on the third floor となる。in the third floor とは言わない。あわせて「一階」はアメリカ英語で the first floor、イギリス英語では the ground floor と呼ぶことも覚えておくとよい。',
      },
      {
        question: '「私は電車の中で本を読みました。」を英語にしなさい。',
        wrongAnswer: 'I read a book in the train.',
        trapExplanation: '「電車の中で」という日本語に「中」があるため、迷わず in を選んでしまう。in the car（車の中で）が正しいことも、この誤りを後押ししてしまう。',
        correctAnswer: 'I read a book on the train.',
        correctExplanation:
          '電車・バス・飛行機・船のように、中を立って歩ける大きな乗り物は on を使う。体を囲まれる小さな乗り物である車やタクシーだけが in the car / in a taxi となる。「大きい乗り物は on、小さい乗り物は in」と大きさで区別する。',
      },
    ],
  },

  {
    id: 'eigo_s268',
    subject: 'eigo',
    examType: 'chugaku',
    title: '場所の前置詞④：住所は at → on → in の入れ子',
    description: '番地は at、通りは on、市や国は in。せまい順に並べる英語の書き方を身につける',
    intro: '英語の住所は、番地・通り・市・国の順に書きます。日本語とちょうど逆で、せまいところから始まるのです。しかも前置詞も at 5 Green Street、on Green Street、in Osaka と変わります。順番と前置詞が対応していることを見ていきましょう。',
    order: 768,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '番地（一点）は at、通りは on、市・県・国は in。',
      '英語の住所はせまい方から広い方へ並べる（日本語と逆）。',
      'live in Osaka / live on Main Street / live at 3-2-1 Umeda。',
      '「大阪の梅田に」は in Umeda, Osaka の順に書く。',
      '前置詞は「その場所をどれくらいの大きさで見ているか」で決まる、という原則は場所でも同じ。',
    ],
    sections: [
      {
        heading: '三重の入れ子になった場所の言い方',
        body: `場所の at・on・in は、住所を書くときに三段重ねで現れる。せまいものから広いものへ、at → on → in と変わっていく。

■ at ＝ 番地（地図の上の一点）
例）He lives at 3-2-1 Umeda.（彼は梅田三丁目二番一号に住んでいます。）

■ on ＝ 通り（線として見る場所）
例）He lives on Main Street.（彼はメインストリートに住んでいます。）
通りは線なので「線に接している」という on の意味とぴったり合う。

■ in ＝ 市・県・国（広がりのある空間）
例）He lives in Osaka.（彼は大阪に住んでいます。）
例）He lives in Japan.（彼は日本に住んでいます。）

同じ人の住所でも、どのレベルで言うかによって前置詞が変わる。「その場所は点か、線か、広がりか」を考えれば選べる。

★ ポイント：at（番地）＜ on（通り）＜ in（市・国）。時の前置詞とまったく同じ順番なので、時と場所をセットで覚えると効率がよい。`,
        figureId: 'lf_eigoext08_268',
      },
      {
        heading: '英語の住所は日本語と逆の順に並べる',
        body: `日本語の住所は「日本、大阪府、大阪市、天王寺区…」と広い方から書くが、英語は逆にせまい方から広い方へ並べる。

例）3-2-1 Umeda, Kita-ku, Osaka, Japan
例）I live in Umeda, Osaka.（私は大阪の梅田に住んでいます。）

英作文では「大阪の梅田に」という日本語の順につられて Osaka Umeda と書いてしまいがちだが、英語では Umeda, Osaka の順になる。人の名前が「名 → 姓」の順であるのと同じ考え方で、英語は「小さい方が先」だと覚えるとよい。

■ 場所を二つ重ねるときの前置詞
広い場所を後から付け足すときは、前置詞は一つだけでよい。
例）She was born in Kobe, Hyogo.（彼女は兵庫県の神戸で生まれました。）
in を二回くり返して in Kobe in Hyogo とはしない。

■ 手紙のあて名でも同じ
封筒には名前 → 番地 → 市 → 国の順に書く。日本の住所を英語で書く練習は、英語入試の英作文でも出題されることがある。

⚠ 注意：通りの名前に付く前置詞は on である。in Main Street としない（イギリス英語では in を使うこともあるが、入試では on で覚えておく）。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼はメインストリートに住んでいます。」の空所に入る語を答えなさい。　He lives (　) Main Street.',
        wrongAnswer: 'in',
        trapExplanation: '「〜に住んでいる」は live in と覚えているため、後ろに来る語が通りでも in を選んでしまう。live in Osaka という形が強く印象に残っているのが原因である。',
        correctAnswer: 'on',
        correctExplanation:
          '通りは線として見る場所なので、線に接するという意味の on を使う。live in は Osaka・Japan のように囲まれた広がりのある場所に使い、通りには on、番地には at を使う。「番地は at、通りは on、市や国は in」と三段階で覚える。',
      },
      {
        question: '「彼は大阪の梅田に住んでいます。」を英語にしなさい。',
        wrongAnswer: 'He lives in Osaka Umeda.',
        trapExplanation: '日本語の「大阪の梅田」という語順をそのまま英語に置きかえてしまう。英語では場所をせまい方から並べる決まりがあることを知らないと必ず間違える。',
        correctAnswer: 'He lives in Umeda, Osaka.',
        correctExplanation:
          '英語の住所はせまい方から広い方へ並べるので Umeda, Osaka の順になる。前置詞は先頭に一つだけ置き、in Umeda in Osaka のようにくり返さない。日本語と順番が逆になるという点は、英作文でくり返し出題される重要事項である。',
      },
    ],
  },

  // ───────────────── 3. 位置関係の前置詞（s269〜s273） ─────────────────
  {
    id: 'eigo_s269',
    subject: 'eigo',
    examType: 'chugaku',
    title: '位置の前置詞①：under・over・above・below',
    description: '真上・真下を表す over と under、高さだけを比べる above と below を区別する',
    intro: '「橋の上を通る」と「雲の上を飛ぶ」。日本語ではどちらも「上」ですが、英語では over と above に分かれます。over は真上をおおうように、above は高さだけを比べる語です。真下の under と below も同じ関係。四つを図で見分けます。',
    order: 769,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'under ＝ 真下（おおわれている感じ）。over ＝ 真上（おおうように）。',
      'above ＝ ある高さより上（真上でなくてよい）。below ＝ ある高さより下。',
      'over には「〜を越えて」「〜以上」の意味もある（jump over, over ten years old）。',
      'under には「〜未満」の意味もある（under ten years old ＝ 十歳未満）。',
      'on は接している、over は接していない。この一点で on と over は区別できる。',
    ],
    sections: [
      {
        heading: '四つの位置を上下の図で整理する',
        body: `上下の位置を表す前置詞は四つある。「真上・真下かどうか」と「おおっているかどうか」の二点で区別する。

■ under（真下に、おおわれて）
例）The cat is under the desk.（ねこは机の下にいます。）
例）I put my bag under the chair.（私はかばんをいすの下に置きました。）

■ over（真上に、おおうように）
例）There is a bridge over the river.（川に橋がかかっています。）
例）A bird flew over my head.（鳥が私の頭上を飛んだ。）
over は「おおいかぶさる」感じなので、橋のように上に広がるものと相性がよい。

■ above（〜より上に）
真上でなくてもよく、ただ高さを比べているだけ。
例）The sun rose above the mountains.（太陽が山の上に昇った。）
例）The plane is flying above the clouds.（飛行機は雲の上を飛んでいます。）

■ below（〜より下に）
例）The temperature was below zero.（気温は零度以下でした。）
例）Write your name below the line.（線の下に名前を書きなさい。）

★ ポイント：over と under は「真上・真下」で対、above と below は「高さの比較」で対になっている。`,
        figureId: 'lf_eigoext08_269',
      },
      {
        heading: 'over と under の数の意味・on との区別',
        body: `over と under には位置以外の意味もあり、そちらも入試でよく問われる。

■ 数の「〜を越えて／〜未満」
over ten years old（十歳を越えて＝十一歳以上）
under ten years old（十歳未満＝九歳以下）
例）Children under six can enter free.（六歳未満の子どもは無料で入れます。）
「以上・以下」と訳すと数がずれることがあるので、over は「それより多い」、under は「それより少ない」と考える。

■ 「〜を越えて」の動き
例）The boy jumped over the fence.（少年はさくを飛びこえた。）
例）We walked over the bridge.（私たちは橋をわたった。）

■ on と over のちがい
on は接している、over は接していない。
例）There is a cloth on the table.（テーブルの上に布がかけてある。ふれている）
例）There is a lamp over the table.（テーブルの上にランプがつってある。ふれていない）

⚠ 注意：日本語ではどちらも「テーブルの上」と言うので、接しているかどうかを自分で判断しなければならない。「さわれるか」を考えるとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「川に橋がかかっています。」の空所に入る語を答えなさい。　There is a bridge (　) the river.',
        wrongAnswer: 'above the river',
        trapExplanation: '「川の上」という日本語から、「〜より上」を意味する above を選んでしまう。above も under も上下を表すので、どちらでもよいように見えてしまうのが落とし穴である。',
        correctAnswer: 'over the river',
        correctExplanation:
          '橋は川をおおうように真上にかかっているので over を使う。above は「単に高さが上」というだけで、おおう感じがないため橋には合わない。over ＝ おおうように真上、above ＝ 位置が高いだけ、と区別する。同じ理由で「頭上を飛ぶ」は fly over my head である。',
      },
      {
        question: '「六歳未満の子どもは無料です。」の英文として正しいものを選びなさい。　Children (　) six are free.',
        wrongAnswer: 'below six',
        trapExplanation: '「未満＝下」と考えて below を選んでしまう。below も「より下」を表すので意味は近く見えるが、年齢や数の「〜未満」には使わない。',
        correctAnswer: 'under six',
        correctExplanation:
          '年齢や数量が「〜より少ない」ことを表すのは under である。below は温度や線の位置のように、目盛りや基準線より下にあることを表すのに使う（below zero ＝ 零度以下）。「年齢・値段・数は under と over、目盛りは below と above」と使い分ける。',
      },
    ],
  },

  {
    id: 'eigo_s270',
    subject: 'eigo',
    examType: 'chugaku',
    title: '位置の前置詞②：between と among',
    description: '二つの間の between、三つ以上の中の among。前置詞の後の代名詞の形にも注意する',
    intro: '「二人の間に」は between、「大勢の中で」は among。数が二つか三つ以上かで決まります。しかも between you and me のように、前置詞のあとの代名詞は me や him という形になります。I や he とは書けません。二つの注意点を同時におさえます。',
    order: 770,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'between ＝ 二つのものの間（between A and B の形が基本）。',
      'among ＝ 三つ以上の集まりの中（among the trees, among the students）。',
      'between の後に and 以外を使うときは between the two countries のように複数形。',
      '前置詞の後の代名詞は目的格。between you and me が正しく、between you and I は誤り。',
      'among の後は必ず複数の名詞か集合を表す語（among us, among people）。',
    ],
    sections: [
      {
        heading: 'between と among の使い分け',
        body: `「〜の間に」を表す前置詞は二つあり、いくつのものにはさまれているかで使い分ける。

■ between ＝ 二つの間
例）The bank is between the post office and the school.（銀行は郵便局と学校の間にあります。）
例）There is a big difference between the two pictures.（その二枚の絵には大きなちがいがあります。）
between A and B という形で使うのがふつうで、and を使わないときは複数形の名詞を置く。
例）between the two countries（その二国の間で）

■ among ＝ 三つ以上の中
例）The house stands among the trees.（その家は木々の間に立っています。）
例）He is popular among the students.（彼は生徒たちの間で人気がある。）
among の後には必ず複数を表す語が来る。among the tree のように単数形にすることはできない。

■ 三つ以上でも between を使う場合
一つ一つをはっきり区別しているときは、三つ以上でも between を使う。
例）Japan lies between China, Korea and Russia.
中学入試では「二つなら between、三つ以上なら among」で答えて問題ない。

★ ポイント：among は「集まりの中にまぎれている」感じ、between は「二つにはさまれている」感じ。`,
        figureId: 'lf_eigoext08_270',
      },
      {
        heading: '前置詞の後は目的格',
        body: `between のところで必ず問われるのが、代名詞の形である。前置詞の後に来る代名詞は、主語の形（主格）ではなく目的語の形（目的格）にしなければならない。

主格　　I / we / he / she / they / who
目的格　me / us / him / her / them / whom

例）This is a secret between you and me.（これはあなたと私だけの秘密です。）
　　× between you and I

例）He sat between his father and me.（彼はお父さんと私の間にすわった。）
例）There is nothing between us.（私たちの間には何もない。）

■ なぜ間違えるのか
「あなたと私は」という日本語につられて you and I という形を反射的に思い出してしまうからである。you and I が正しいのは主語のときだけで、前置詞の後や動詞の目的語では you and me になる。
例）You and I are good friends.（あなたと私は仲のよい友達です。）… 主語なので I
例）He invited you and me.（彼はあなたと私を招待した。）… 目的語なので me

⚠ 注意：among us（私たちの間で）、between them（彼らの間で）のように、among や between の後もすべて目的格になる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は三人の少年の間に立っていました。」の空所に入る語を答えなさい。　He was standing (　) the three boys.',
        wrongAnswer: 'between',
        trapExplanation: '「〜の間に」という日本語から、まず思いうかぶ between を選んでしまう。日本語には二つの間か三つ以上の中かを区別する言い方がないので、意識しないと選び分けられない。',
        correctAnswer: 'among',
        correctExplanation:
          'three boys は三人＝三つ以上なので among を使う。between は二つのものにはさまれているときに使い、between the two boys のように二つを示す語と組む。「二つなら between、三つ以上なら among」と数で判断する習慣をつける。',
      },
      {
        question: '「これはあなたと私だけの秘密です。」の下線部の誤りを直しなさい。　This is a secret between you and I.',
        wrongAnswer: '誤りはない（between you and I でよい）',
        trapExplanation: 'You and I are good friends. のような文で覚えた you and I という形が耳に残っており、ていねいで正しい言い方のように感じてしまう。',
        correctAnswer: 'This is a secret between you and me.',
        correctExplanation:
          'between は前置詞なので、後ろの代名詞は目的格の me になる。you and I が使えるのは主語のときだけである。見分け方は簡単で、you and を隠して between I と読んでみればおかしいと気づける。同じ方法で He invited you and me. も確かめられる。',
      },
    ],
  },

  {
    id: 'eigo_s271',
    subject: 'eigo',
    examType: 'chugaku',
    title: '位置の前置詞③：in front of・behind・next to',
    description: '前後・となり・向かいを表す表現と、in front of と in the front of のちがいを学ぶ',
    intro: 'in front of と in the front of は、the があるかないかだけのちがいですが、意味は「〜の前に」と「〜の前方に」で別ものです。バスの外に立っているのか、バスの中の前のほうにいるのか。the 一語で場所が変わってしまいます。',
    order: 771,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'in front of ＝ 〜の前に（外側から見て前）。behind ＝ 〜の後ろに。',
      'in the front of ＝ 〜の中の前の部分に（the が入ると内部になる）。',
      'next to ＝ beside ＝ by ＝ 〜のとなりに。',
      'across from ＝ opposite ＝ 〜の向かいに（道をはさんだ反対側）。',
      'in front of は三語で一つの前置詞のはたらきをする（群前置詞）。',
    ],
    sections: [
      {
        heading: '前・後ろ・となり・向かい',
        body: `絵を見て場所を答える問題では、次の四種類がくり返し出題される。

■ in front of（〜の前に）
例）There is a car in front of the house.（家の前に車があります。）
例）He is standing in front of the door.（彼はドアの前に立っています。）
三語まとめて一つの前置詞のようにはたらくので、front の前後の語を落とさないように書く。

■ behind（〜の後ろに）
例）The boy is hiding behind the tree.（少年は木の後ろにかくれています。）
例）My house is behind the station.（私の家は駅の裏にあります。）

■ next to ／ beside ／ by（〜のとなりに）
例）She sat next to me.（彼女は私のとなりにすわりました。）
例）There is a bank beside the hospital.（病院のとなりに銀行があります。）

■ across from ／ opposite（〜の向かいに）
例）The library is across from the park.（図書館は公園の向かいにあります。）
道や広場をはさんで反対側にある、という意味である。

★ ポイント：となりは next to（横にくっついている）、向かいは across from（何かをはさんで反対側）。日本語ではどちらも「そばに」と言えてしまうので、位置を絵にして確かめる。`,
        figureId: 'lf_eigoext08_271',
      },
      {
        heading: 'in front of と in the front of のちがい',
        body: `一語 the が入るかどうかで、意味が外と内に分かれる有名な組み合わせがある。

■ in front of ＝ そのものの外側の前
例）A boy is standing in front of the bus.（少年はバスの前に立っています。）
バスの外にいて、バスの正面に立っている場面である。

■ in the front of ＝ そのものの内部の前の部分
例）A boy is sitting in the front of the bus.（少年はバスの前の方の席にすわっています。）
バスの中にいて、車内の前方にいる場面である。

同じように in the back of the bus と言えば「バスの車内の後ろの方に」となる。

■ 似た形の群前置詞
in front of（〜の前に）／in the middle of（〜の真ん中に）／at the end of（〜の終わりに）／on the side of（〜の側面に）／in the center of（〜の中心に）
例）There is a table in the middle of the room.（部屋の真ん中にテーブルがあります。）

⚠ 注意：in front of the bus と the front of the bus（バスの前部）は別物である。the が付いたら「そのものの一部分」を指していると考える。`,
      },
    ],
    trapExamples: [
      {
        question: '「少年はバスの前の方の席にすわっていました。」を英語にしなさい。',
        wrongAnswer: 'A boy was sitting in front of the bus.',
        trapExplanation: '「バスの前」という日本語だけを見て、覚えたばかりの in front of を当てはめてしまう。これだとバスの外に立っている意味になり、絵の場面とまったく合わなくなる。',
        correctAnswer: 'A boy was sitting in the front of the bus.',
        correctExplanation:
          'the が入ると「そのものの内部の前の部分」を表す。バスの車内の前方にすわっているのだから in the front of the bus が正しい。外側の正面なら in front of the bus となる。the 一語で外と内が入れかわる、という点をそのまま覚えておく。',
      },
      {
        question: '「郵便局は駅の向かいにあります。」の空所に入る表現を選びなさい。　The post office is (　) the station.',
        wrongAnswer: 'in front of',
        trapExplanation: '「駅の前にある」と言いかえられる日本語なので、in front of で通じると思ってしまう。しかし in front of は建物のすぐ正面（同じ側）を指し、道をはさんだ反対側の意味にはならない。',
        correctAnswer: 'across from',
        correctExplanation:
          '道路や広場をはさんで反対側にあるときは across from（＝opposite）を使う。in front of は「その建物のすぐ前の空間」なので、駅前広場に立っているイメージになる。地図の問題では「同じ側か、道の反対側か」を必ず確かめて選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s272',
    subject: 'eigo',
    examType: 'chugaku',
    title: '位置の前置詞④：near・by・around・along・against',
    description: '近さを表す near と by、周り・沿って・寄りかかってを表す前置詞を整理する',
    intro: 'near the station と by the station——どちらも「駅の近く」ですが、by のほうがすぐそばを表します。近さにも段階があるのです。そのほか around（まわりを）、along（沿って）、against（寄りかかって）も、動きのイメージで区別できます。',
    order: 772,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'near ＝ 近くに（少し離れていてもよい）。by ＝ すぐそばに（near より近い）。',
      'near は前置詞なので near to my school のように to を入れない。',
      'around ＝ 〜の周りに／〜のあちこちに／約〜（数の前では「約」）。',
      'along ＝ 〜に沿って（川・道・かべなど細長いものに沿って）。',
      'against ＝ 〜に寄りかかって／〜に反対して。',
    ],
    sections: [
      {
        heading: '近さを表す near と by',
        body: `「近くに」を表す語は複数あり、距離の感じ方でえらび分ける。

■ near（近くに）
例）I live near the station.（私は駅の近くに住んでいます。）
例）There is a park near my house.（私の家の近くに公園があります。）
near は前置詞なので、後ろに直接名詞を置く。near to とはしない。

■ by（すぐそばに）
例）She was sitting by the window.（彼女は窓ぎわにすわっていました。）
例）He stood by me.（彼は私のすぐそばに立っていた。）
by は near よりも近く、手が届くくらいの距離を表す。

■ 比較のことば
near は形容詞にもなり、the nearest station（いちばん近い駅）のように変化する。
例）Where is the nearest station?（いちばん近い駅はどこですか。）

■ nearby は副詞
例）There is a hospital nearby.（近くに病院があります。）
nearby は一語で「近くに」という副詞なので、後ろに名詞を置かない。

★ ポイント：near ＋ 名詞、nearby は単独で使う。この二つを混ぜて near by my house と書くのが典型的な誤りである。`,
      },
      {
        heading: 'around・along・against',
        body: `位置を表す前置詞のうち、意味が二つ以上あるものは意味の取りちがえで失点しやすい。

■ around（周りに・あちこちに・約）
例）The children sat around the fire.（子どもたちは火の周りにすわった。）
例）He traveled around the world.（彼は世界中を旅した。）
例）There were around thirty people.（三十人ほどいました。）
数の前に置かれた around は「約」の意味になる。about と同じである。

■ along（〜に沿って）
例）We walked along the river.（私たちは川に沿って歩きました。）
例）There are many shops along this street.（この通り沿いには店がたくさんあります。）
川・道・かべ・海岸のように細長いものと組み合わせて使う。

■ against（〜に寄りかかって・〜に反対して）
例）He put his bike against the wall.（彼は自転車をかべに立てかけた。）
例）I am against the plan.（私はその計画に反対です。）
物にぶつける・押しつけるイメージから、「反対する」の意味も生まれている。

⚠ 注意：around ＋ 数字は「約」。「周りに」と訳して意味の分からない文になったら、数字が来ていないかを確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は学校の近くに住んでいます。」の下線部の誤りを直しなさい。　I live near to my school.',
        wrongAnswer: '誤りはない（near to でよい）',
        trapExplanation: 'next to（〜のとなりに）や close to（〜に近い）という形を覚えているため、near にも to が必要だと考えてしまう。「近い」という意味の語はすべて to を取るように感じられるのが原因である。',
        correctAnswer: 'I live near my school.',
        correctExplanation:
          'near はそれ自体が前置詞なので、後ろに直接名詞を置く。to を入れるのは close to my school のように close を使うときである。next to は next が形容詞なので to が必要、near は前置詞なので不要、と語ごとに覚え分ける。',
      },
      {
        question: '次の英文の下線部の意味を答えなさい。　There were around thirty students in the gym.',
        wrongAnswer: '三十人の生徒たちの周りに',
        trapExplanation: 'around を「〜の周りに」とだけ覚えているため、後ろに数字が来ていても同じように訳してしまう。「三十人の周りに」と訳すと日本語として意味が通らないのに、そのまま書いてしまう受験生が多い。',
        correctAnswer: '約三十人（三十人ほど）',
        correctExplanation:
          'around の後に数字が来ると「約〜」という意味になり、about と同じはたらきをする。訳は「体育館には三十人ほどの生徒がいました。」となる。訳して意味が通らないときは、その語に別の意味がないかを疑う。about も「〜について」と「約〜」の二つの意味を持つ同じ仲間である。',
      },
    ],
  },

  {
    id: 'eigo_s273',
    subject: 'eigo',
    examType: 'chugaku',
    title: '位置の前置詞⑤：絵の描写問題を解く',
    description: 'There is / There are と位置の前置詞を組み合わせ、絵の場面を英語で説明する',
    intro: '「机の上に本が3冊あります」を英語で言えますか。There are three books on the desk. です。絵を見て場面を説明する問題では、There is / There are と位置の前置詞を組み合わせます。ここまで学んだ前置詞を、実際に使ってみる回です。',
    order: 773,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'There is ＋ 単数名詞／There are ＋ 複数名詞 ＋ 場所を表す語句、の順に並べる。',
      '場所を表す語句は文の最後に置く（There is a cat under the desk.）。',
      '名詞を後ろから説明する前置詞句は、近いものから順に並べる（in the bag on the desk）。',
      'the が付いた名詞は There is の文で主語にしない（The cat is under the desk. とする）。',
      '絵の問題では、まず「何が」「どこに」を日本語で言ってから英語に直す。',
    ],
    sections: [
      {
        heading: 'There is / There are の文で位置を説明する',
        body: `絵を見て説明する問題では、There is / There are の文がほぼ必ず登場する。

■ 基本の形
There is ＋ 単数の名詞 ＋ 場所
There are ＋ 複数の名詞 ＋ 場所
例）There is a cat under the desk.（机の下にねこが一匹います。）
例）There are two books on the chair.（いすの上に本が二冊あります。）

■ 場所は最後
日本語は「机の下にねこがいます」と場所を先に言うが、英語は「いる → 何が → どこに」の順である。語順を日本語のまま書かないように注意する。

■ the が付く名詞は There is を使わない
There is の文は「初めて話題に出すもの」を紹介する文なので、すでに話題になっているものには使わない。
例）× There is the cat under the desk.
　　○ The cat is under the desk.（そのねこは机の下にいます。）

■ 疑問文と否定文
例）Is there a park near your house?（あなたの家の近くに公園はありますか。）
　－ Yes, there is. ／ No, there is not.
例）There are not any children in the park.（公園には子どもが一人もいません。）

★ ポイント：まず単数か複数かを見て is か are を決め、次に場所の前置詞を選ぶ。この二段構えで解く。`,
        figureId: 'lf_eigoext08_273',
      },
      {
        heading: '前置詞句を重ねるときの語順',
        body: `絵の描写では「机の上のかばんの中に」のように、場所の説明が二重になることがある。英語では、説明したい名詞のすぐ後ろに、近い場所から順に置いていく。

例）A pen is in the bag on the desk.（ペンは机の上のかばんの中にあります。）
ペン → かばんの中（in the bag） → その かばんは机の上（on the desk）、という順である。日本語とは逆に、うしろから前へ読むと日本語の順になる。

例）The boy under the tree in the park is my brother.
（公園の木の下にいる少年は私の弟です。）

■ 名詞を後ろから説明する前置詞句
前置詞句は、直前の名詞を説明する。
例）the book on the desk（机の上の本）
例）the girl with long hair（長い髪の少女）
例）the man in the blue shirt（青いシャツを着た男の人）

■ 描写問題の解き方の手順
①主語になるものを決める（何について言うか）
②単数か複数かを確かめる
③場所を表す前置詞をせまい順に並べる

⚠ 注意：in the desk on the bag のように順を逆にすると、「かばんの上の机の中に」というまったく別の意味になってしまう。近い場所から書く、という原則を守る。`,
      },
    ],
    trapExamples: [
      {
        question: '「ペンは机の上のかばんの中にあります。」を英語にしなさい。',
        wrongAnswer: 'A pen is in the desk on the bag.',
        trapExplanation: '日本語の「机の上の → かばんの中に」という語順のまま英語に置きかえてしまい、名詞と前置詞の組み合わせが入れかわってしまう。前置詞だけを見ると in も on も出ているので、書いた本人は正しく訳せた気になってしまう。',
        correctAnswer: 'A pen is in the bag on the desk.',
        correctExplanation:
          '英語では、ペンにいちばん近い場所（かばんの中＝in the bag）を先に書き、そのかばんがどこにあるか（机の上＝on the desk）を後ろに続ける。日本語は逆順なので、うしろから読むと日本語の語順に一致する。前置詞句を重ねるときは「近い場所から」と覚える。',
      },
      {
        question: '「その少女は木の下のベンチにすわっています。」の空所に入る語を答えなさい。　The girl is sitting (　) the bench under the tree.',
        wrongAnswer: 'in',
        trapExplanation: '「ベンチにすわる」という日本語から「中に入る」感じを受け取り、さらに sit in a chair（ひじかけいすにすわる）という表現の記憶が混ざって in を選んでしまう。',
        correctAnswer: 'on',
        correctExplanation:
          'ベンチは平らな面なので、面に接することを表す on を使って sit on the bench となる。同じ理由で sit on the chair、sit on the floor も on である。「囲まれているか、面に接しているか」で in と on を判断する原則は、すわる場所でも変わらない。',
      },
    ],
  },

  // ───────────────── 4. 方向・移動の前置詞（s274〜s277） ─────────────────
  {
    id: 'eigo_s274',
    subject: 'eigo',
    examType: 'chugaku',
    title: '方向の前置詞①：to と for',
    description: '到達点を表す to と、向かう方向を表す for のちがいを、動詞との組み合わせで覚える',
    intro: 'I went to Osaka. は大阪に着いたことを表しますが、I left for Osaka. は大阪に向かって出発しただけで、着いたかどうかまでは言っていません。to は到達点、for は向かう方向。日本語の「〜へ」の一語では見えないちがいです。',
    order: 774,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'to ＝ 到達点（go to school, come to my house, walk to the station）。',
      'for ＝ 向かう方向（leave for Tokyo, start for school, the train for Osaka）。',
      'leave ＋ 場所 は「〜を出発する」、leave for ＋ 場所 は「〜へ向けて出発する」。',
      'home・there・here は副詞なので to を付けない（go home, go there）。',
      'give / show / send は「人に」を to、buy / make は for（give it to me / make it for me）。',
    ],
    sections: [
      {
        heading: '到達点の to、方向の for',
        body: `どちらも「〜へ」と訳すが、to は着いたところまで、for は向きだけを表す。

■ to ＝ 到達点まで含む
例）I go to school by bus.（私はバスで学校へ行きます。）
例）He walked to the station.（彼は駅まで歩いた。）
例）Please come to my house.（私の家に来てください。）

■ for ＝ 向かう方向
例）He left for Tokyo yesterday.（彼は昨日東京へ向けて出発した。）
例）This train is for Osaka.（この電車は大阪行きです。）
例）We started for the park at nine.（私たちは九時に公園へ向けて出発した。）
for の文は「向かった」と言っているだけで、着いたかどうかは言っていない。

■ leave の二つの形
leave ＋ 場所 ＝ その場所を出る
例）He left Tokyo.（彼は東京を出発した。＝東京から離れた）
leave for ＋ 場所 ＝ その場所へ向けて出発する
例）He left for Tokyo.（彼は東京へ向けて出発した。）
一語 for が入るだけで、東京が出発地から目的地に変わる。

★ ポイント：to は「矢印が刺さって止まる」、for は「矢印が向いているだけ」とイメージする。`,
        figureId: 'lf_eigoext08_274',
      },
      {
        heading: 'to を付けない語と、to と for を使う動詞',
        body: `to は「〜へ」を表す代表的な前置詞だが、付けてはいけない場合がある。

■ home・there・here は副詞
例）I go home at five.（私は五時に家へ帰ります。）　× go to home
例）Let's go there tomorrow.（明日そこへ行こう。）　× go to there
例）Come here.（ここへ来なさい。）　× come to here
これらの語は「〜へ」という意味をそれ自身が持っている。

■ 人に何かをわたす動詞
to を使う動詞 … give（与える）／show（見せる）／send（送る）／teach（教える）／tell（話す）／lend（貸す）
例）I gave a book to him.（私は彼に本をあげた。）
for を使う動詞 … buy（買う）／make（作る）／cook（料理する）／get（手に入れる）／find（見つける）
例）She made a cake for me.（彼女は私にケーキを作ってくれた。）

■ 見分け方
相手に直接手わたす感じの動詞は to、相手のために何かをしてあげる感じの動詞は for になる。give は物が相手まで届くので to、make は作った時点では相手に届いていないので for、と考えるとよい。

⚠ 注意：I gave him a book. のように「人 → 物」の語順で書くときは、to も for も使わない。前置詞が要るのは「物 → 人」の語順にしたときだけである。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は昨日早く家に帰りました。」の下線部の誤りを直しなさい。　I went to home early yesterday.',
        wrongAnswer: '誤りはない（went to home でよい）',
        trapExplanation: 'go to school・go to the park と同じ形だと考えて、home にも to を付けてしまう。「家へ」という日本語に「へ」があることも、to を書きたくなる原因になる。',
        correctAnswer: 'I went home early yesterday.',
        correctExplanation:
          'home は「家へ」という意味をそれ自身に含む副詞なので、to を付けない。同じ仲間に there（そこへ）、here（ここへ）、upstairs（上の階へ）、abroad（外国へ）がある。ただし「家で」という状態を表す at home では前置詞が必要なので、動きか状態かで区別する。',
      },
      {
        question: '「彼は大阪へ向けて出発しました。」を英語にしなさい。',
        wrongAnswer: 'He left to Osaka.',
        trapExplanation: '「〜へ」という日本語をそのまま to に置きかえてしまう。go to Osaka という形になじんでいるため、leave にも同じ to が使えると思いこむのが原因である。',
        correctAnswer: 'He left for Osaka.',
        correctExplanation:
          'leave の後に前置詞なしで場所を置くと「その場所を出る」、for を置くと「その場所へ向かう」となる。leave to という形は使わない。同じ仲間に start for（〜へ出発する）、a train for Osaka（大阪行きの電車）がある。「出発の行き先は for」と覚える。',
      },
    ],
  },

  {
    id: 'eigo_s275',
    subject: 'eigo',
    examType: 'chugaku',
    title: '方向の前置詞②：from・into・out of',
    description: '起点の from、外から中への into、中から外への out of を、対で覚える',
    intro: 'from は出発点、into は外から中へ、out of は中から外へ。He came into the room. と He went out of the room. は、ちょうど反対の動きです。in や out が場所を表すのに対し、into と out of は動きを表します。対にして覚えましょう。',
    order: 775,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'from ＝ 起点（〜から）。from A to B で「AからBまで」。',
      'into ＝ 外から中への動き（go into the room, jump into the pool）。',
      'out of ＝ 中から外への動き（come out of the room, get out of the car）。',
      'out of は二語で一つの前置詞。out from とはしない。',
      'be made from（材料が見た目で分からない）と be made of（見た目で分かる）を区別する。',
    ],
    sections: [
      {
        heading: '起点の from と、A から B まで',
        body: `from は「そこから始まる」という起点を表す。to と組み合わせて範囲を表す形が重要である。

■ from ＝ 〜から
例）I am from Osaka.（私は大阪の出身です。）
例）This letter is from my friend in Canada.（この手紙はカナダの友達からのものです。）
例）The wind is blowing from the north.（風が北から吹いています。）

■ from A to B ＝ AからBまで
場所にも時間にも使える。
例）This train goes from Tokyo to Osaka.（この電車は東京から大阪まで行きます。）
例）I study from seven to nine every evening.（私は毎晩七時から九時まで勉強します。）
例）The shop is open from Monday to Friday.（その店は月曜から金曜まで開いています。）

時間の「〜まで」には until もあるが、from とセットで使うときは to のほうがふつうである。

■ 距離を表す from
例）My school is ten minutes from here.（私の学校はここから十分のところにあります。）
例）How far is it from here to the station?（ここから駅までどのくらいありますか。）

★ ポイント：from は「出発点」、to は「到着点」。この二つで一つの線を作る。`,
      },
      {
        heading: 'into と out of は動きの向き',
        body: `in と on が「どこにあるか」を表すのに対し、into と out of は「どちらへ動くか」を表す。

■ into ＝ 外から中へ
例）He went into the room.（彼は部屋の中へ入っていった。）
例）The boy jumped into the pool.（少年はプールに飛びこんだ。）
例）Please put the milk into the glass.（牛乳をコップに入れてください。）

■ out of ＝ 中から外へ
例）She came out of the house.（彼女は家から出てきた。）
例）He got out of the car.（彼は車から降りた。）
例）Take the book out of the bag.（かばんから本を取り出しなさい。）
out of は二語で一つの前置詞のはたらきをする。out from という形は使わない。

■ 乗り物の乗り降り
get on the bus（バスに乗る）／get off the bus（バスを降りる）… 大きい乗り物
get into the car（車に乗る）／get out of the car（車から降りる）… 小さい乗り物
on と in で分けたのと同じ理由で、乗り物の大きさによって語が変わる。

⚠ 注意：into は「動き」なので、be動詞の文では使わない。× He is into the room. は誤りで、いる場所を言うなら He is in the room. とする。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女は部屋から出てきました。」の下線部の誤りを直しなさい。　She came out from the room.',
        wrongAnswer: '誤りはない（out from でよい）',
        trapExplanation: '「〜から」という日本語がそのまま from と結び付き、out と組み合わせて out from としてしまう。from が「起点」を表すのは正しいので、意味の上ではもっともらしく感じられる。',
        correctAnswer: 'She came out of the room.',
        correctExplanation:
          '「中から外へ」の動きは out of という二語で一つの前置詞として使う。out from という形は使わない。反対の「外から中へ」は into である。come out of / get out of / take out of をひとまとまりの表現として覚えておく。',
      },
      {
        question: '「この電車は東京から大阪まで行きます。」の空所に入る語を答えなさい。　This train goes from Tokyo (　) Osaka.',
        wrongAnswer: 'until',
        trapExplanation: '「〜まで」という日本語を辞書で引くと until が出てくるため、場所にも until を使ってしまう。日本語の「まで」が時間にも場所にも使えることが誤りのもとになっている。',
        correctAnswer: 'to',
        correctExplanation:
          'until（till）は時間にしか使えない前置詞で、場所の「〜まで」には to を使う。from Tokyo to Osaka（東京から大阪まで）、from seven to nine（七時から九時まで）のように、from と対で使うときは時間でも to が自然である。「until は時間専用」と覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s276',
    subject: 'eigo',
    examType: 'chugaku',
    title: '方向の前置詞③：through・across・along・over',
    description: '通り抜ける・横切る・沿って進む・越えるという移動のしかたを区別する',
    intro: '川を「わたる」は across、トンネルを「ぬける」は through、川に「そって歩く」は along、へいを「こえる」は over。日本語ではどれも移動を表す言葉ですが、英語は動きのかたちで前置詞を選びます。絵にすると区別しやすくなります。',
    order: 776,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'through ＝ 中を通り抜ける（トンネル・森・窓・ドア）。',
      'across ＝ 表面を横切る（道・川・部屋）。cross（動詞）＝ go across。',
      'along ＝ 細長いものに沿って進む（川・道・海岸）。',
      'over ＝ 越えていく（さく・山・橋）。',
      'around ＝ 回って進む（角を曲がる・世界を回る）。',
    ],
    sections: [
      {
        heading: '四つの進み方を絵で区別する',
        body: `移動を表す前置詞は、進む道すじの形で決まる。日本語ではどれも「〜を」と言ってしまうので、絵で覚えるのがいちばん確実である。

■ through ＝ 中を通り抜ける
例）The train went through a long tunnel.（電車は長いトンネルを通り抜けた。）
例）We walked through the forest.（私たちは森の中を歩いて抜けた。）
例）A bird came in through the window.（鳥が窓から入ってきた。）

■ across ＝ 表面を横切る
例）We walked across the street.（私たちは道を横断した。）
例）He swam across the river.（彼は川を泳いでわたった。）
across ＋ 名詞は、動詞 cross ＋ 名詞に書きかえられる。
例）He crossed the river.（同じ意味）

■ along ＝ 沿って進む
例）We walked along the river.（私たちは川に沿って歩いた。）
横切るのではなく、川と同じ向きに進んでいる点がちがう。

■ over ＝ 越えていく
例）The cat jumped over the wall.（ねこはへいを飛びこえた。）
例）We went over the mountain.（私たちは山を越えて行った。）

★ ポイント：through は中を、across は横に、along は沿って、over は上を越えて。四つの矢印の形をそのまま覚える。`,
        figureId: 'lf_eigoext08_276',
      },
      {
        heading: '入試でねらわれる組み合わせ',
        body: `どの前置詞と組むかが決まっている言い方があるので、まとめて覚えておく。

■ よく出る組み合わせ
go through the gate（門を通り抜ける）
look through the window（窓越しに見る）
walk across the bridge（橋をわたる）… 橋の面の上を横切るので across
swim across the river（川を泳いでわたる）
run along the beach（浜辺に沿って走る）
climb over the fence（さくをよじ登って越える）
go around the corner（角を曲がる）
travel around the world（世界中を旅する）

■ across と over の使い分け
橋のように平らな面をわたるときは across、へいや山のように高いものを越えるときは over を使う。
例）walk across the bridge（橋をわたる）
例）jump over the fence（さくを飛びこえる）

■ through の別の意味
時間について使うと「〜の間ずっと」となる。
例）It rained through the night.（一晩中雨が降った。）

⚠ 注意：日本語の「わたる」は across も over も cross も表せる。英語では「面を横切るのか、越えるのか」を必ず選ばなければならない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは道を横断しました。」の空所に入る語を答えなさい。　We walked (　) the street.',
        wrongAnswer: 'through',
        trapExplanation: '「道を通って」という日本語のイメージから through を選んでしまう。through は「中を通り抜ける」なので、道の内部を進む＝道に沿って進む意味に近くなり、横断したことにならない。',
        correctAnswer: 'across',
        correctExplanation:
          '道の一方の側からもう一方の側へ横切るときは across を使う。through はトンネル・森・窓のように「囲まれた中を抜ける」ときに使う。walk across the street は cross the street と書きかえられることも合わせて覚える。',
      },
      {
        question: '「私たちは川に沿って歩きました。」を英語にしなさい。',
        wrongAnswer: 'We walked across the river.',
        trapExplanation: '川と walk が結び付いた例文として across the river をよく見るため、「沿って」でも同じ前置詞を使ってしまう。across を「川といえばこれ」と丸暗記していると起こりやすい誤りである。',
        correctAnswer: 'We walked along the river.',
        correctExplanation:
          '川と同じ向きに、川ぎわを進むのだから along を使う。across は川を横切って向こう岸へわたるという、まったく別の動きを表す。along the street（通りに沿って）、along the beach（海岸沿いに）も同じ形である。矢印の向きが川と平行か直角かで選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s277',
    subject: 'eigo',
    examType: 'chugaku',
    title: '方向の前置詞④：up・down・past・toward',
    description: '上る・下る・通り過ぎる・〜の方へ、という動きの表現と前置詞の要否を確かめる',
    intro: '「坂をのぼる」は go up the hill、「その店を通りすぎる」は go past the shop。日本語ではどちらも「〜を」で共通していますが、英語ではそれぞれちがう前置詞が入ります。また home のように前置詞が要らない語もある。要るか要らないかも確かめます。',
    order: 777,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'up ＝ 〜を上って、down ＝ 〜を下って。前置詞なので to を付けない。',
      'past ＝ 〜を通り過ぎて（walk past the shop）。',
      'toward ＝ 〜の方へ（到達は含まない。for と似た感じ）。',
      'go up the stairs（階段を上る）／go down the street（通りを進む）。',
      'pass by ＝ そばを通り過ぎる。pass through ＝ 中を通り抜ける。',
    ],
    sections: [
      {
        heading: 'up・down・past・toward の使い方',
        body: `動きを表す前置詞のうち、日本語との対応がずれやすいものを整理する。

■ up ＝ 〜を上って／down ＝ 〜を下って
例）He went up the stairs.（彼は階段を上った。）
例）She ran down the hill.（彼女は丘をかけ下りた。）
up も down も前置詞なので、後ろに直接名詞を置く。× go up to the stairs とはしない。
なお down the street は「通りを（先の方へ）進んで」という意味で、坂を下るとは限らない。
例）Go down this street and turn left at the second corner.（この通りを進んで、二つ目の角を左に曲がりなさい。）

■ past ＝ 〜を通り過ぎて
例）I walked past the post office.（私は郵便局の前を通り過ぎた。）
例）The bus went past the school.（バスは学校の前を通り過ぎた。）
past は時刻にも使う。
例）It is ten past seven.（七時十分です。）

■ toward ＝ 〜の方へ
例）He walked toward the station.（彼は駅の方へ歩いていった。）
到着したかどうかは言っていない点で to とちがい、for に近い。

★ ポイント：up・down・past は前置詞なので、後ろに前置詞を重ねない。`,
      },
      {
        heading: '道案内の表現でまとめて確かめる',
        body: `方向の前置詞は、道案内の会話文でまとめて出題されることが多い。次の言い方をひとかたまりで覚える。

例）Go straight along this street.（この通りをまっすぐ行ってください。）
例）Turn right at the second corner.（二つ目の角を右に曲がってください。）
例）Walk past the bank.（銀行を通り過ぎてください。）
例）Cross the street at the traffic light.（信号のところで道をわたってください。）
例）The library is on your left.（図書館は左手にあります。）
例）You will see it in front of the park.（公園の前に見えますよ。）
例）It takes about five minutes on foot.（歩いて五分ほどです。）

■ 使う前置詞のまとめ
角では at（at the corner）、通りには along か down、左右には on（on your left）、目印の建物には in front of や next to を使う。

■ 気をつけたい形
go straight（まっすぐ行く）… straight は副詞なので前置詞を付けない
on foot（徒歩で）… by foot とは言わない

⚠ 注意：道案内では「通り過ぎる」を pass through と書く誤りが多い。pass through は建物などの中を通り抜ける意味になってしまう。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは郵便局の前を通り過ぎました。」を英語にしなさい。',
        wrongAnswer: 'We passed through the post office.',
        trapExplanation: '「通り過ぎる」の「通り」から through を連想してしまう。through には「通り抜ける」という意味があるので、日本語だけを見ていると自然に感じられるが、これでは郵便局の建物の中を歩いて抜けた意味になる。',
        correctAnswer: 'We walked past the post office.',
        correctExplanation:
          '建物のそばを通り過ぎるときは past を使い、walk past ／ go past ／ drive past の形にする。pass through は「中を通り抜ける」なので、トンネルや森のときに使う。なお We passed the post office. と動詞 pass を使う言い方も正しい。',
      },
      {
        question: '「彼は階段を上りました。」の下線部の誤りを直しなさい。　He went up to the stairs.',
        wrongAnswer: '誤りはない（up to the stairs でよい）',
        trapExplanation: 'go to school のように「行く」には to が要ると覚えているため、up の後にも to を付けてしまう。up to には「〜まで」という別の意味があるので、形だけ見ると正しそうに見えるのも原因である。',
        correctAnswer: 'He went up the stairs.',
        correctExplanation:
          'up は前置詞なので、後ろに直接名詞を置いて go up the stairs とする。to を入れた go up to は「〜のところまで近づく」という別の意味になる（He went up to the door. ＝ 彼はドアのところまで行った）。down も同じで、go down the street に to は入れない。',
      },
    ],
  },

  // ───────── 5. for / during / while / since / until / by（s278〜s281） ─────────
  {
    id: 'eigo_s278',
    subject: 'eigo',
    examType: 'chugaku',
    title: '期間の前置詞①：for と during',
    description: '長さを表す for と、特定の期間の名前と組む during を確実に区別する',
    intro: '「3日間」は for three days、「夏休みの間」は during the summer vacation。どちらも日本語では「間」です。えらび方は、うしろに来る語で決まります。数字で長さを言うなら for、期間の名前を言うなら during。この一点で見分けられます。',
    order: 778,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'for ＋ 期間の長さ（for three days, for a week, for two hours）。',
      'during ＋ 特定の期間の名前（during the summer vacation, during the class）。',
      'for の後には数を表す語、during の後には the が付いた語が来ることが多い。',
      '「どのくらいの間？」に答えるのが for、「いつの間に？」に答えるのが during。',
      'during は前置詞なので、後ろに文（主語＋動詞）を置けない。',
    ],
    sections: [
      {
        heading: 'for は長さ、during は期間の名前',
        body: `どちらも「〜の間」と訳すが、後ろに来る語がまったくちがう。

■ for ＋ 期間の長さ
「どのくらいの間か」を数で答える語が来る。
例）I studied for three hours.（私は三時間勉強しました。）
例）He has lived here for ten years.（彼はここに十年間住んでいます。）
例）We stayed in Kyoto for a week.（私たちは京都に一週間泊まりました。）

■ during ＋ 特定の期間の名前
「いつの間か」を表す語が来る。the や my が付いた名詞が多い。
例）I visited Hokkaido during the summer vacation.（私は夏休みの間に北海道を訪れました。）
例）He slept during the class.（彼は授業中ずっとねむっていました。）
例）It snowed a lot during the winter.（その冬はたくさん雪が降りました。）

■ 質問文で確かめる
How long did you stay?（どのくらい泊まりましたか。）→ For three days.（三日間です。）
When did you visit him?（いつ訪ねましたか。）→ During the vacation.（休みの間です。）
答え方のちがいがそのまま前置詞のちがいになっている。

★ ポイント：後ろに数字が見えたら for、the ＋ 行事や季節の名前が見えたら during。`,
        figureId: 'lf_eigoext08_278',
      },
      {
        heading: 'for のいろいろな意味',
        body: `for は期間以外にもよく使われる前置詞なので、代表的な意味をまとめて確認しておく。

■ ①〜の間（期間）
例）I waited for an hour.（私は一時間待ちました。）

■ ②〜のために（目的・利益）
例）This present is for you.（このプレゼントはあなたのためのものです。）
例）I made lunch for my brother.（私は弟のために昼食を作りました。）

■ ③〜へ向けて（行き先）
例）He left for Osaka.（彼は大阪へ向けて出発した。）

■ ④〜と引きかえに
例）I bought this book for 500 yen.（私はこの本を五百円で買いました。）

■ ⑤よく出る熟語
for example（例えば）／for the first time（初めて）／for a long time（長い間）／wait for（〜を待つ）／look for（〜をさがす）／be famous for（〜で有名だ）／thank you for（〜をありがとう）

⚠ 注意：wait for、look for のように動詞と結び付いた for は「〜を」と訳すので、期間の for と混同しないこと。前後の語を見て判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は夏休みの間に北海道へ行きました。」の空所に入る語を答えなさい。　I went to Hokkaido (　) the summer vacation.',
        wrongAnswer: 'for',
        trapExplanation: '「〜の間」という日本語から、先に習った for を選んでしまう。for も during も同じ訳になるため、日本語だけを手がかりにすると区別できない。',
        correctAnswer: 'during',
        correctExplanation:
          'the summer vacation は「夏休み」という特定の期間の名前なので during を使う。for の後には for two weeks のように長さを表す数の語が来る。「the ＋ 行事や季節の名前なら during、数字なら for」と、後ろの語で機械的に判断できるようにしておく。',
      },
      {
        question: '「私は三時間ずっとテレビを見ていました。」を英語にしなさい。',
        wrongAnswer: 'I watched TV during three hours.',
        trapExplanation: '「三時間の間ずっと」という日本語の「間」が強く感じられるため、during を選んでしまう。during を「〜の間ずっと」と訳して覚えていると、この誤りが起きやすい。',
        correctAnswer: 'I watched TV for three hours.',
        correctExplanation:
          'three hours は期間の長さを表す語なので for を使う。during three hours という形は使わない。during の後に置けるのは the class・the vacation・my stay のように「いつのことか」を表す名前だけである。数字が見えたら for、と機械的に決めてよい。',
      },
    ],
  },

  {
    id: 'eigo_s279',
    subject: 'eigo',
    examType: 'chugaku',
    title: '期間の前置詞②：since と for（現在完了とともに）',
    description: '起点を表す since と長さを表す for を、現在完了の文の中で使い分ける',
    intro: 'I have lived here for ten years. と I have lived here since 2016. — 前者は長さ、後者は始まった時点を表します。日本語ではどちらも「10年前から」と言えてしまいます。現在完了の文で必ずセットで出るので、区別を体にいれておきましょう。',
    order: 779,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'since ＋ 起点（since 2020, since last year, since I was a child）。',
      'for ＋ 長さ（for six years, for a long time）。',
      'since は現在完了（have ＋ 過去分詞）とともに使うのが原則。',
      'since は接続詞にもなり、後ろに文（主語＋動詞）を置ける（since I came to Japan）。',
      'How long ...? には For ... または Since ... で答える。',
    ],
    sections: [
      {
        heading: 'since は起点、for は長さ',
        body: `現在完了の文で「いつから」「どのくらい」を表すときの前置詞である。同じ内容を二通りに言えることが多い。

■ since ＝ 〜から（起点の一点）
例）I have lived here since 2020.（私は二〇二〇年からここに住んでいます。）
例）He has been sick since last Monday.（彼はこの前の月曜日からずっと具合が悪い。）

■ for ＝ 〜の間（長さ）
例）I have lived here for six years.（私は六年間ここに住んでいます。）
例）He has been sick for a week.（彼は一週間ずっと具合が悪い。）

同じ場面を、起点で言うか長さで言うかのちがいである。二〇二六年に立って言えば、since 2020 と for six years は同じことを表す。

■ 答え方
How long have you lived here?（どのくらいここに住んでいますか。）
　－ For six years.（六年間です。）
　－ Since 2020.（二〇二〇年からです。）

★ ポイント：since の後ろは「時の一点」、for の後ろは「時の長さ」。年号・曜日・出来事なら since、数字＋単位なら for。`,
        figureId: 'lf_eigoext08_279',
      },
      {
        heading: 'since は接続詞にもなる',
        body: `since は前置詞としても接続詞としても使える。接続詞のときは後ろに主語と動詞のある文が来る。

■ 前置詞の since（後ろは名詞）
例）I have known him since last year.（私は去年から彼を知っています。）

■ 接続詞の since（後ろは文）
例）I have known him since I was a child.（私は子どものころから彼を知っています。）
例）Ten years have passed since he came to Japan.（彼が日本に来てから十年になります。）
接続詞の since が導く文の動詞は過去形にする。since I have been a child とはしない。

■ since を使う文の時制
主となる文は現在完了、since の後ろは過去（の一点）というのが基本の組み合わせである。
例）She has been busy since she started her new job.
（彼女は新しい仕事を始めてからずっと忙しい。）

■ since の別の意味
理由を表す接続詞にもなる（＝because）。
例）Since it was raining, we stayed home.（雨が降っていたので、私たちは家にいました。）

⚠ 注意：since を使いながら現在形のままにする誤りが非常に多い。since が見えたら have ＋ 過去分詞になっているかを必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は三年間ここに住んでいます。」の下線部の誤りを直しなさい。　I have lived here since three years.',
        wrongAnswer: '誤りはない（since three years でよい）',
        trapExplanation: '「三年間ここに住んでいる」＝「三年前からここに住んでいる」と頭の中で言いかえてしまい、「〜から」の since を選んでしまう。日本語で言いかえられるので、誤りに気づきにくい。',
        correctAnswer: 'I have lived here for three years.',
        correctExplanation:
          'three years は期間の長さなので for を使う。since の後ろに置けるのは since 2023、since last year、since I was ten のような「時の一点」だけである。「三年前から」と言いたければ since three years ago と ago を付ける必要がある。',
      },
      {
        question: '「私は昨日からずっと忙しい。」を英語にしなさい。',
        wrongAnswer: 'I am busy since yesterday.',
        trapExplanation: '「今も忙しい」ので現在形でよいと考えてしまう。日本語の「〜からずっと」には動詞の形の変化がないため、時制を変える必要に気づきにくい。',
        correctAnswer: 'I have been busy since yesterday.',
        correctExplanation:
          'since は「過去のある時点から今まで続いている」ことを表すので、動詞は現在完了（have ＋ 過去分詞）にする。be動詞の過去分詞は been なので have been busy となる。「since が見えたら have ＋ 過去分詞」とセットで覚えておくと、この誤りは防げる。',
      },
    ],
  },

  {
    id: 'eigo_s280',
    subject: 'eigo',
    examType: 'chugaku',
    title: '期間の前置詞③：until と by',
    description: '動作が続く終わりを表す until と、締め切りの一点を表す by を区別する',
    intro: 'I will wait until five. は5時までずっと待つこと、I will come by five. は5時までのどこかで来ることです。日本語ではどちらも「5時まで」。動作が続くのか、期限だけを示すのか。この差を知らないと、待ちぼうけになりかねません。',
    order: 780,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'until（till）＝ 〜までずっと（動作や状態が続く）。',
      'by ＝ 〜までに（その時までに一回すればよい期限）。',
      '続く動詞（wait, stay, sleep, work）には until、一回で終わる動詞（come, finish, return）には by。',
      'until は接続詞にもなる（until he comes）。by は前置詞だけで、by the time ... の形で文を続ける。',
      '「〜までに」の by は、時と条件の副詞節と同じく未来のことでも現在形と組むことがある。',
    ],
    sections: [
      {
        heading: '線の until、点の by',
        body: `どちらも日本語では「〜まで」だが、until は終わりまで続く線、by は締め切りの点である。

■ until（till）＝ 〜までずっと
例）I will wait here until five.（私は五時までここで待ちます。）
例）He studied until midnight.（彼は真夜中まで勉強した。）
例）The shop is open until nine.（その店は九時まで開いています。）
五時になるまで、待つという動作がずっと続いている。

■ by ＝ 〜までに
例）Come here by five.（五時までにここへ来なさい。）
例）Please finish your homework by tomorrow.（明日までに宿題を終わらせてください。）
例）I will be back by seven.（私は七時までには戻ります。）
五時より前のどこかで一度来ればよく、来る動作がずっと続くわけではない。

■ 動詞で見分ける
until と組む動詞 … wait（待つ）、stay（とどまる）、sleep（ねむる）、work（働く）、be open（開いている）
by と組む動詞 … come（来る）、finish（終える）、return（返す）、arrive（着く）、send（送る）

★ ポイント：「その時までずっと続くか、それとも一回で済むか」で決める。`,
        figureId: 'lf_eigoext08_280',
      },
      {
        heading: 'until の接続詞用法と by the time',
        body: `until は前置詞にも接続詞にもなるが、by は前置詞だけである。文を続けたいときは by the time という形を使う。

■ until ＋ 名詞（前置詞）
例）Please wait until three o'clock.（三時まで待ってください。）

■ until ＋ 文（接続詞）
例）Please wait here until I come back.（私が戻るまでここで待っていてください。）
時を表す接続詞なので、未来のことでも現在形で書く（will を使わない）。

■ by the time ＋ 文
例）By the time he arrived, the game had started.（彼が着くころには試合は始まっていた。）
例）I will finish it by the time you come.（あなたが来るまでにそれを終わらせます。）
by は後ろに文を置けないので、by the time という三語の形にする。

■ not ... until 〜
「〜して初めて…する」という言い方になる。
例）I did not know the news until yesterday.（私は昨日までそのニュースを知らなかった。＝昨日初めて知った。）

⚠ 注意：by の後ろに主語＋動詞の文を置く誤り（× by he comes）が非常に多い。文を置くなら by the time he comes とする。`,
      },
    ],
    trapExamples: [
      {
        question: '「五時までにここへ来なさい。」の空所に入る語を答えなさい。　Come here (　) five.',
        wrongAnswer: 'until',
        trapExplanation: '「五時まで」という日本語がそのまま until と結び付いてしまう。「までに」と「まで」の一字のちがいが、英語では別の前置詞になることを意識していないと必ず間違える。',
        correctAnswer: 'by',
        correctExplanation:
          '「来る」は一回で終わる動作なので、締め切りを表す by を使う。until five にすると「五時までずっと来つづける」というおかしな意味になってしまう。日本語の「までに」は by、「までずっと」は until と、一字のちがいを前置詞のちがいに結び付けて覚える。',
      },
      {
        question: '「私は五時までここで待ちます。」を英語にしなさい。',
        wrongAnswer: 'I will wait here by five.',
        trapExplanation: '前の問題で「〜まで＝by」と覚えなおしてしまい、今度は続く動作にも by を使ってしまう。二つの語を行ったり来たりして混乱するのが、この単元の典型的な失点である。',
        correctAnswer: 'I will wait here until five.',
        correctExplanation:
          '「待つ」は五時になるまで続く動作なので until を使う。by five にすると「五時までのどこかで一度待つ」という意味不明の文になる。動詞が wait・stay・sleep・work のように「続く動作」なら until、come・finish・return のように「一回で終わる動作」なら by、と動詞で判断する。',
      },
    ],
  },

  {
    id: 'eigo_s281',
    subject: 'eigo',
    examType: 'chugaku',
    title: '期間の前置詞④：during と while、when との関係',
    description: '後ろに名詞が来る前置詞と、後ろに文が来る接続詞を見分ける力をつける',
    intro: '「夏休みの間に」は during the summer vacation、「私が寝ている間に」は while I was sleeping。日本語では同じ「間」でも、うしろに名詞が来るか文が来るかで語が変わります。前置詞と接続詞のちがいが、いちばんはっきり出る組み合わせです。',
    order: 781,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'during ＋ 名詞（前置詞）／while ＋ 主語＋動詞（接続詞）。',
      'while ＝ 〜している間に。長く続いている動作と組むことが多い。',
      'when ＝ 〜するとき（一時点でも期間でもよい）。',
      '前置詞か接続詞かは「後ろに主語と動詞があるか」だけで見分けられる。',
      'during my stay ＝ while I stayed のように書きかえができる。',
    ],
    sections: [
      {
        heading: '後ろに何が来るかで語を選ぶ',
        body: `同じ「〜の間に」でも、後ろに名詞が来るなら前置詞、文が来るなら接続詞を使わなければならない。これは前置詞と接続詞の学習全体でいちばん大切な区別である。

■ during ＋ 名詞（前置詞）
例）I read three books during the summer vacation.（私は夏休みの間に本を三冊読みました。）
例）Don't talk during the class.（授業中はおしゃべりをしてはいけません。）

■ while ＋ 主語＋動詞（接続詞）
例）The phone rang while I was taking a bath.（私がおふろに入っている間に電話が鳴った。）
例）While she was cooking, he cleaned the room.（彼女が料理をしている間に、彼は部屋をそうじした。）

■ 書きかえ
during my stay in Kyoto（京都に滞在している間に）
＝ while I stayed in Kyoto
名詞の形にするか、文の形にするかのちがいだけである。

■ 同じ関係にある組み合わせ
because of ＋ 名詞 ／ because ＋ 文
in spite of ＋ 名詞 ／ though ＋ 文
during ＋ 名詞 ／ while ＋ 文

★ ポイント：空所の後ろを見て、主語＋動詞があれば接続詞、名詞だけなら前置詞を選ぶ。`,
      },
      {
        heading: 'while と when のちがい',
        body: `while も when も「〜のとき」と訳せるが、時間のはばがちがう。

■ while ＝ 〜している間（続いている時間）
例）While I was walking, it began to rain.（歩いている間に、雨が降り始めた。）
while の中の動詞は進行形（be動詞＋ing）になることが多い。

■ when ＝ 〜するとき（一時点でもよい）
例）When I got home, my mother was cooking.（私が家に着いたとき、母は料理をしていた。）
when の中には、短い動作を表す動詞が来ることも多い。

■ 二つを重ねた形
例）When I visited him, he was studying.（私が彼を訪ねたとき、彼は勉強していた。）
「短い動作（訪ねた）」と「続いている動作（勉強していた）」の組み合わせでは、短い方に when、長い方に進行形を使う。

■ 未来のことは現在形
while も when も時を表す接続詞なので、未来のことでも will を使わずに現在形で書く。
例）I will read a book while I wait for the bus.（バスを待っている間、本を読みます。）

⚠ 注意：while の後ろに名詞だけを置く誤り（× while my stay）が多い。名詞なら during にする。`,
      },
    ],
    trapExamples: [
      {
        question: '「私がねている間に電話が鳴りました。」の空所に入る語を答えなさい。　The phone rang (　) I was sleeping.',
        wrongAnswer: 'during',
        trapExplanation: '「〜している間に」という日本語から during を選んでしまう。during は「〜の間」と訳せるので意味の上では合っているように見えるが、後ろに I was sleeping という文が続いている点を見落としている。',
        correctAnswer: 'while',
        correctExplanation:
          '後ろに主語（I）と動詞（was sleeping）のある文が続いているので、接続詞の while を使う。during は前置詞なので、during my sleep のように名詞しか置けない。「後ろが文なら接続詞、名詞なら前置詞」という見分け方は、because と because of、though と in spite of にもそのまま使える。',
      },
      {
        question: '「私は京都に滞在している間に、たくさんの寺を訪れました。」を英語にしなさい。',
        wrongAnswer: 'I visited many temples while my stay in Kyoto.',
        trapExplanation: '前の問題で「〜している間に＝while」と覚えたため、後ろが名詞でも while を使ってしまう。while と during を訳語だけで覚えていると、こうして逆向きの誤りが起きる。',
        correctAnswer: 'I visited many temples during my stay in Kyoto.',
        correctExplanation:
          'my stay は名詞なので、前置詞の during を使う。while にしたければ while I stayed in Kyoto のように文の形に直す必要がある。訳語ではなく「後ろの形」で選ぶ、という原則をここで徹底しておくと、以降の接続詞の学習が楽になる。',
      },
    ],
  },

  // ───────────────── 6. その他の重要前置詞（s282〜s284） ─────────────────
  {
    id: 'eigo_s282',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'その他の前置詞①：with と without',
    description: '道具・同伴・特徴を表す with と、その反対の without の使い方を身につける',
    intro: 'with は「〜といっしょに」だけの語ではありません。cut it with a knife なら道具、a girl with long hair なら特徴を表します。反対の without も同じように広く使えます。一つの前置詞が持つ意味の広がりを、場面ごとに見ていきましょう。',
    order: 782,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'with ＝ 〜と一緒に／〜を使って／〜を持っている。',
      '道具は with、交通手段や動作をする人は by（cut with a knife / by bus / by Soseki）。',
      'with は名詞を後ろから説明できる（the girl with long hair）。',
      'without ＝ 〜なしで。前置詞なので後ろの動詞は ing 形（without saying a word）。',
      'be filled with（〜でいっぱいだ）、be covered with（〜におおわれている）は熟語で覚える。',
    ],
    sections: [
      {
        heading: 'with の三つの意味',
        body: `with は使う場面が広い前置詞なので、意味を三つに分けて整理する。

■ ①〜と一緒に（同伴）
例）I went to the park with my friends.（私は友達と公園へ行きました。）
例）She lives with her grandmother.（彼女は祖母と一緒に住んでいます。）

■ ②〜を使って（道具）
例）He cut the bread with a knife.（彼はナイフでパンを切りました。）
例）Write your name with a pen.（ペンで名前を書きなさい。）
道具には with、交通手段には by を使う。この区別が入試でよく問われる。
例）I go to school by bike.（私は自転車で学校へ行きます。）… 手段なので by

■ ③〜を持っている（特徴）
名詞を後ろから説明する形で使う。
例）the girl with long hair（長い髪の少女）
例）a house with a large garden（大きな庭のある家）
例）Do you know the boy with glasses?（めがねをかけた少年を知っていますか。）

★ ポイント：「一緒に」「使って」「持っている」の三つを覚えれば、with の問題はほとんど解ける。`,
      },
      {
        heading: 'without と、with を使う熟語',
        body: `without は with の反対で「〜なしで」を表す。前置詞なので、後ろに動詞を続けたいときは ing 形（動名詞）にする。

■ without ＋ 名詞
例）I can't read without my glasses.（私はめがねなしでは読めません。）
例）He went out without an umbrella.（彼はかさを持たずに出かけた。）

■ without ＋ 動詞のing形
例）He left the room without saying a word.（彼は一言も言わずに部屋を出て行った。）
例）She went out without eating breakfast.（彼女は朝食を食べずに出かけた。）
× without say / × without to say とはしない。前置詞の後ろの動詞は必ず ing 形になる。

■ with を使う重要熟語
be filled with ...（〜でいっぱいである）
例）The box was filled with old books.（箱は古い本でいっぱいだった。）
be covered with ...（〜でおおわれている）
例）The mountain was covered with snow.（山は雪でおおわれていた。）
be pleased with ...（〜が気に入っている）
help ... with ～（…の～を手伝う）
例）He helped me with my homework.（彼は私の宿題を手伝ってくれた。）
agree with ...（〜に賛成する）

⚠ 注意：help me my homework とは言わない。手伝う内容の前には with が必要である。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼はナイフでパンを切りました。」の空所に入る語を答えなさい。　He cut the bread (　) a knife.',
        wrongAnswer: 'by',
        trapExplanation: '「〜で」という日本語が、go by bus（バスで行く）の by と結び付いてしまう。日本語の助詞「で」は手段にも道具にも使えるため、区別する手がかりが日本語には残っていない。',
        correctAnswer: 'with',
        correctExplanation:
          '手に持って使う道具には with を使う。by が使えるのは by bus・by train のような交通手段や、by Soseki（漱石によって）のような動作をする人を表すときである。「手に持てるものは with、乗り物や作った人は by」と区別して覚える。',
      },
      {
        question: '「彼は一言も言わずに部屋を出て行きました。」の下線部の誤りを直しなさい。　He left the room without say a word.',
        wrongAnswer: '誤りはない（without say でよい）',
        trapExplanation: '「言わずに」という日本語をそのまま英語にしようとして、動詞の原形をそのまま置いてしまう。without を接続詞のように感じてしまうのが原因である。',
        correctAnswer: 'He left the room without saying a word.',
        correctExplanation:
          'without は前置詞なので、後ろに動詞を置くときは ing 形（動名詞）にする。同じ理由で before eating（食べる前に）、after finishing（終えた後で）、be good at swimming（泳ぐのが得意だ）も ing 形になる。「前置詞の後ろの動詞は ing」と一つの規則として覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s283',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'その他の前置詞②：of と about',
    description: '所有・部分・材料の of と、話題や見当を表す about を整理する',
    intro: 'a picture of my father は父を写した写真、a book about dogs は犬について書かれた本です。of は「そのものの一部」、about は「〜について」。日本語ではどちらも「父の写真」「犬の本」と「の」でつなげるので、意識して使い分ける必要があります。',
    order: 783,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'of ＝ 〜の（所有・部分・材料）。the door of the room, a cup of tea。',
      'be made of ＝ 材料が見て分かる（wood, paper, glass）。be made from ＝ 見て分からない（milk, grapes）。',
      'about ＝ 〜について（話題）／約〜（数の前）。',
      '数の前の about・around は「約」。about ten minutes ＝ 十分ほど。',
      'of は「AのB」を B of A の語順で表す（日本語と逆になる）。',
    ],
    sections: [
      {
        heading: 'of の使い方と語順',
        body: `of は「〜の」と訳す前置詞で、日本語とは語順が逆になる点にまず慣れる必要がある。

■ 語順に注意
日本語「その部屋のドア」→ 英語 the door of the room
日本語「この本の題名」→ 英語 the title of this book
「A の B」は B of A の順に並ぶ。日本語の順のまま the room of the door と書くと、意味が逆になってしまう。

■ ①所有・関係
例）the name of the city（その都市の名前）
例）the end of the story（物語の終わり）
人が持ち主のときは of よりも my father's car のように所有格を使うことが多い。

■ ②部分・分量
例）a cup of tea（一杯の紅茶）／a glass of water（コップ一杯の水）／a piece of paper（一枚の紙）／a lot of books（たくさんの本）
数えられない名詞の量を表すときにも of を使う。

■ ③材料
例）This desk is made of wood.（この机は木でできています。）
例）The house is made of stone.（その家は石でできています。）

★ ポイント：of は「AのB」を後ろから説明する語。長い日本語ほど、うしろから訳すと英語の順になる。`,
      },
      {
        heading: 'be made of と be made from、そして about',
        body: `材料を表す言い方には二通りあり、見た目で材料が分かるかどうかで使い分ける。

■ be made of ＝ 材料の形が残っている
例）This chair is made of wood.（このいすは木でできています。）
木でできたいすは、見れば木だと分かる。

■ be made from ＝ 材料の形が変わっている
例）Cheese is made from milk.（チーズは牛乳から作られます。）
例）Wine is made from grapes.（ワインはぶどうから作られます。）
チーズを見ても牛乳には見えない。このように、姿が変わってしまう場合は from を使う。

■ その他の made 表現
be made in ＋ 場所（〜製である）：This car was made in Japan.
be made into ＋ 製品（〜に作りかえられる）：Milk is made into cheese.

■ about の二つの意味
①〜について（話題）
例）We talked about the movie.（私たちはその映画について話しました。）
例）This is a book about animals.（これは動物についての本です。）
②約〜（数の前）
例）It takes about ten minutes.（十分ほどかかります。）
例）There were about fifty people.（五十人ほどいました。）

⚠ 注意：「約十分間」は for about ten minutes の順に書く。about for とはしない。`,
      },
    ],
    trapExamples: [
      {
        question: '「この机は木でできています。」の空所に入る語を答えなさい。　This desk is made (　) wood.',
        wrongAnswer: 'from',
        trapExplanation: 'Cheese is made from milk. という文を先に覚えていると、材料を表すのはすべて from だと思ってしまう。日本語ではどちらも「〜でできている」「〜から作られる」と言えるので区別がつかない。',
        correctAnswer: 'of',
        correctExplanation:
          '木の机は、見れば材料が木だと分かるので be made of を使う。牛乳からできたチーズのように、見ても元の材料が分からないものは be made from を使う。「見て分かるなら of、分からないなら from」と判断する。ほかに紙・ガラス・石・鉄はふつう of の仲間である。',
      },
      {
        question: '「私は約三十分待ちました。」を英語にしなさい。',
        wrongAnswer: 'I waited about for thirty minutes.',
        trapExplanation: '「約」を先に訳したくなるため、about を for の前に置いてしまう。日本語では「約三十分」と、まず「約」を言うので、その順のまま英語に置きかえてしまうのが原因である。',
        correctAnswer: 'I waited for about thirty minutes.',
        correctExplanation:
          '前置詞 for が先に来て、その後ろに about thirty minutes（約三十分）というかたまりが続く。about は thirty minutes という数の部分だけを修飾しているので、数のすぐ前に置く。同じ形で at about seven（七時ごろに）、in about a week（一週間ほどで）も覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s284',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'その他の前置詞③：like・as と群前置詞',
    description: '「〜のように」の like と「〜として」の as、二語以上でできた前置詞を学ぶ',
    intro: 'He works like a teacher. と He works as a teacher. — 前者は「先生のように働く」で本当は先生ではなく、後者は「先生として働く」で本当に先生です。like と as で、事実かどうかが変わってしまいます。二語以上でできた前置詞もあわせて学びます。',
    order: 784,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'like ＝ 〜のように（実際はちがうが似ている）。',
      'as ＝ 〜として（実際にそうである）。work as a teacher。',
      'like は前置詞、as は前置詞にも接続詞にもなる。',
      '群前置詞：because of（〜のせいで）、thanks to（〜のおかげで）、instead of（〜の代わりに）、according to（〜によれば）、in spite of（〜にもかかわらず）。',
      'because ＋ 文／because of ＋ 名詞。形で使い分ける。',
    ],
    sections: [
      {
        heading: 'like と as のちがい',
        body: `どちらも「〜のように」と訳せるが、実際にそうなのかどうかで意味が大きく変わる。

■ like ＝ 〜のように（似ているだけ）
例）He swims like a fish.（彼は魚のように泳ぐ。）… 彼は魚ではない
例）She sings like a professional singer.（彼女はプロの歌手のように歌う。）… プロではない
例）It looks like rain.（雨が降りそうだ。）

■ as ＝ 〜として（実際にそうである）
例）He works as a teacher.（彼は先生として働いている。）… 実際に先生である
例）I used the box as a chair.（私はその箱をいすとして使った。）
例）She is famous as a pianist.（彼女はピアニストとして有名だ。）

■ 比べてみる
He worked like a doctor.（彼は医者のように働いた。）… 医者ではない
He worked as a doctor.（彼は医者として働いた。）… 医者である
一語ちがうだけで、その人の職業が変わってしまう。

■ as は接続詞にもなる
例）As I was tired, I went to bed early.（疲れていたので早く寝ました。）… 理由
例）Do as I say.（私が言うとおりにしなさい。）… 様態

★ ポイント：like は「本物ではないがそっくり」、as は「本物である」。`,
      },
      {
        heading: '二語以上でできた前置詞（群前置詞）',
        body: `二語や三語がまとまって、一つの前置詞のはたらきをするものを群前置詞という。後ろには必ず名詞（または動名詞）が来る。

■ よく出る群前置詞
because of ...（〜のせいで・〜が原因で）
例）The game was canceled because of the rain.（雨のため試合は中止になった。）
thanks to ...（〜のおかげで）
例）Thanks to your help, I finished it.（あなたの助けのおかげで終わりました。）
instead of ...（〜の代わりに）
例）I drank tea instead of coffee.（コーヒーの代わりに紅茶を飲みました。）
according to ...（〜によれば）
例）According to the news, it will snow tomorrow.（ニュースによれば明日は雪が降るそうだ。）
in spite of ...（〜にもかかわらず）
例）He went out in spite of the rain.（雨にもかかわらず彼は出かけた。）
in front of ...（〜の前に）／in the middle of ...（〜の真ん中に）／for example（例えば）

■ 前置詞か接続詞かの見分け
because of ＋ 名詞 ／ because ＋ 主語＋動詞
in spite of ＋ 名詞 ／ though ＋ 主語＋動詞

⚠ 注意：because of の後ろに文を置く誤り（× because of it was raining）が多い。文を置くなら of を取る。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は先生として働いています。」の空所に入る語を答えなさい。　He works (　) a teacher.',
        wrongAnswer: 'like',
        trapExplanation: '「〜のように」と「〜として」の区別が日本語であいまいなため、よく知っている like を選んでしまう。like a teacher と書くと「先生ではないが、先生のような働き方をしている」という別の意味になってしまう。',
        correctAnswer: 'as',
        correctExplanation:
          '実際にその職業や役割についているときは as を使う。like は「実際はちがうが似ている」ことを表す。He swims like a fish.（彼は魚のように泳ぐ）の彼が魚でないのと同じで、like を使うとその人は先生ではないことになる。実在するかどうかで選び分ける。',
      },
      {
        question: '「雨のせいで試合は中止になりました。」の下線部の誤りを直しなさい。　The game was canceled because the rain.',
        wrongAnswer: '誤りはない（because the rain でよい）',
        trapExplanation: '「〜のせいで」という日本語から because を選ぶところまでは正しいが、because が接続詞であることを意識していないため、後ろに名詞だけを置いてしまう。',
        correctAnswer: 'The game was canceled because of the rain.',
        correctExplanation:
          'because は接続詞なので、後ろには主語＋動詞のある文が必要である。the rain という名詞だけを置くなら、群前置詞の because of にしなければならない。because it rained（雨が降ったので）と書けば because のままでも正しい。「名詞なら because of、文なら because」と形で決める。',
      },
    ],
  },

  // ───────────── 7. 等位接続詞と命令文, and 〜（s285〜s287） ─────────────
  {
    id: 'eigo_s285',
    subject: 'eigo',
    examType: 'chugaku',
    title: '等位接続詞①：and・but・or・so の基本',
    description: '対等なものをつなぐ四つの接続詞と、つなぐときに形をそろえる原則を学ぶ',
    intro: 'I like apples and orange. と書くと、少しちぐはぐです。and でつなぐときは apples and oranges のように形をそろえます。等位接続詞は対等なものをつなぐ語なので、両側の形がそろっている必要があるのです。四つの語をまとめて整理します。',
    order: 785,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'and（そして）／but（しかし）／or（または）／so（だから）は対等なものをつなぐ。',
      'つなぐものは同じ形にそろえる（名詞と名詞、ing形とing形）。',
      '三つ以上を並べるときは A, B, and C の形（最後だけ and）。',
      '否定文の「〜も…も」は or を使う（I don\'t like cats or dogs.）。',
      '日本語の「〜なので、だから」につられて because と so を同じ文で二つ使わない。',
    ],
    sections: [
      {
        heading: '四つの等位接続詞',
        body: `等位接続詞は、語と語、句と句、文と文を対等な関係でつなぐ。

■ and（そして・と）
例）Tom and Ken are good friends.（トムとケンは仲のよい友達です。）
例）I got up early and went for a walk.（私は早く起きて散歩に行きました。）

■ but（しかし）
例）He is young but very strong.（彼は若いがとても力が強い。）
例）I called him, but he did not answer.（私は彼に電話したが、彼は出なかった。）

■ or（または）
例）Which do you like better, summer or winter?（夏と冬ではどちらが好きですか。）
例）You can go by bus or by train.（バスか電車で行けます。）
否定文では「〜も…も（ない）」の意味になる。
例）I don't like cats or dogs.（私はねこも犬も好きではありません。）

■ so（だから）
例）It was raining, so we stayed home.（雨が降っていたので、私たちは家にいました。）
so は結果を表し、because（理由）とちょうど逆向きの関係になる。
例）We stayed home because it was raining.（同じ内容を理由から言った文）

■ 三つ以上並べるとき
例）I bought apples, oranges, and bananas.（私はりんごとみかんとバナナを買いました。）

★ ポイント：and・but・or・so は文の先頭に置くより、二つをつなぐ位置に置くのが基本である。`,
      },
      {
        heading: 'つなぐものは形をそろえる',
        body: `等位接続詞でつなぐときは、前後を同じ種類・同じ形にそろえなければならない。これを並列といい、英作文の減点で最も多い項目の一つである。

■ 名詞と名詞
例）I like apples and oranges.（りんごとみかんが好きです。）

■ 動詞と動詞（形もそろえる）
例）He opened the door and went out.（彼はドアを開けて出て行った。）… 過去形と過去形
　　× He opened the door and go out.

■ ing形とing形
例）I like reading books and listening to music.（私は読書と音楽を聞くことが好きです。）
　　× I like reading books and to listen to music.

■ 形容詞と形容詞
例）She is kind and cheerful.（彼女は親切で明るい。）

■ to 不定詞と to 不定詞
例）I want to eat lunch and to take a rest.（昼食を食べて休みたい。）
二つ目の to は省略してもよい。

⚠ 注意：日本語の「〜ので、だから…」を英語にするとき、Because ... , so ... と両方書いてしまう誤りが非常に多い。英語では理由を because で表したら so は書かない。どちらか一方だけを使う。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は音楽を聞くことと歌うことが好きです。」の下線部の誤りを直しなさい。　I like listening to music and to sing.',
        wrongAnswer: '誤りはない（and to sing でよい）',
        trapExplanation: 'like の後には ing 形も to 不定詞もどちらも使えると習うため、一つの文の中で両方を混ぜても正しいと思ってしまう。日本語では「聞くことと歌うこと」と同じ形になっているのに、英語では形がずれていることに気づけない。',
        correctAnswer: 'I like listening to music and singing.',
        correctExplanation:
          'and でつなぐものは同じ形にそろえる。前が listening という ing 形なので、後ろも singing にする。両方を to 不定詞にして I like to listen to music and to sing. としてもよいが、ing と to をまぜてはいけない。「and・but・or の前後は同じ形」と覚える。',
      },
      {
        question: '「彼は疲れていたので、早く寝ました。」を英語にしなさい。',
        wrongAnswer: 'Because he was tired, so he went to bed early.',
        trapExplanation: '日本語の「疲れていたので、だから早く寝た」という言い方に引きずられ、because と so を両方書いてしまう。日本語では自然なので、書いた本人は誤りだと気づきにくい。',
        correctAnswer: 'Because he was tired, he went to bed early.（または He was tired, so he went to bed early.）',
        correctExplanation:
          '英語では、理由と結果を結ぶ語は一つだけでよい。because で理由を示したら so は書かず、so で結果を示したら because は書かない。二つ使うと接続詞が重なってしまい誤りになる。同じ誤りが though と but の組み合わせでも起こるので注意する。',
      },
    ],
  },

  {
    id: 'eigo_s286',
    subject: 'eigo',
    examType: 'chugaku',
    title: '等位接続詞②：命令文, and 〜／命令文, or 〜',
    description: '「そうすれば」の and と「そうしないと」の or を、条件文への書きかえとともに覚える',
    intro: 'Get up early, and you can see the sunrise.（早く起きなさい、そうすれば日の出が見られる）。Get up early, or you will be late.（早く起きなさい、さもないとおくれる）。and と or の一語で、ごほうびと警告が入れかわります。',
    order: 786,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '命令文, and ... ＝ 「〜しなさい、そうすれば…」。',
      '命令文, or ... ＝ 「〜しなさい、そうしないと…」。',
      'and の後は良い結果、or の後は悪い結果が来ることが多い。',
      'If you ... , you will ～ ／ If you don\'t ... , you will ～ に書きかえられる。',
      'and・or の後の文は未来のことなので will を使う。',
    ],
    sections: [
      {
        heading: '二つに分かれる結果',
        body: `命令文の後にコンマを打って and か or を続けると、その命令に従った場合・従わなかった場合の結果を表せる。中学入試でくり返し出題される重要表現である。

■ 命令文, and ...（〜しなさい、そうすれば…）
例）Hurry up, and you will catch the bus.（急ぎなさい、そうすればバスに間に合います。）
例）Study hard, and you will pass the exam.（一生けんめい勉強しなさい、そうすれば試験に合格します。）
例）Turn left, and you will see the post office.（左に曲がりなさい、そうすれば郵便局が見えます。）

■ 命令文, or ...（〜しなさい、そうしないと…）
例）Hurry up, or you will miss the bus.（急ぎなさい、そうしないとバスに乗り遅れます。）
例）Study hard, or you will fail the exam.（勉強しなさい、そうしないと試験に落ちます。）
例）Put on your coat, or you will catch a cold.（コートを着なさい、そうしないとかぜをひきますよ。）

■ 見分け方
and の後ろには「良い結果」、or の後ろには「悪い結果」が来ることが多い。catch the bus（間に合う）なら and、miss the bus（乗り遅れる）なら or である。

★ ポイント：命令に従った先が and の道、従わなかった先が or の道。一つの命令から二本の道が分かれると考える。`,
        figureId: 'lf_eigoext08_286',
      },
      {
        heading: 'if を使った文への書きかえ',
        body: `この形は、if を使った条件文に書きかえられる。書きかえ問題としてよく出題される。

■ and の書きかえ
Hurry up, and you will catch the bus.
＝ If you hurry up, you will catch the bus.（急げば、バスに間に合います。）

■ or の書きかえ
Hurry up, or you will miss the bus.
＝ If you do not hurry up, you will miss the bus.（急がなければ、バスに乗り遅れます。）
＝ Unless you hurry up, you will miss the bus.
or の場合は、if の文を否定にすることを忘れない。ここが書きかえ問題の急所である。

■ 結果の文は未来形
and・or の後ろの文は、これから起こることなので will を使う。
例）Get up early, and you will feel better.
　　× Get up early, and you feel better.
一方、if の文の中は未来のことでも現在形で書く（if you hurry up）。同じ文の中で形がちがう点に注意する。

■ 命令文の作り方の確認
動詞の原形で始める。ていねいにするなら please を付ける。
例）Please be quiet, or the baby will wake up.（静かにしてください、そうしないと赤ちゃんが起きてしまいます。）

⚠ 注意：or の書きかえで If you hurry up, ... と肯定のまま書くと、意味が正反対になってしまう。`,
      },
    ],
    trapExamples: [
      {
        question: '「急ぎなさい、そうしないと遅れますよ。」の空所に入る語を答えなさい。　Hurry up, (　) you will be late.',
        wrongAnswer: 'and',
        trapExplanation: '日本語の「そうしないと」を読み飛ばし、「急ぎなさい、そして…」と続けて読んでしまう。and のほうが先に習う語なので、迷ったときに選びやすいことも原因である。',
        correctAnswer: 'or',
        correctExplanation:
          '「そうしないと」なので or を使う。後ろの you will be late（遅れる）は悪い結果なので、その点からも or だと判断できる。and なら Hurry up, and you will be on time.（急げば間に合います）のように良い結果が続く。後ろが良い結果か悪い結果かで見分ける。',
      },
      {
        question: '「急ぎなさい、そうすればバスに間に合いますよ。」の下線部の誤りを直しなさい。　Hurry up, and you catch the bus.',
        wrongAnswer: '誤りはない（you catch the bus でよい）',
        trapExplanation: 'if の文の中では未来のことでも現在形を使う、という規則を覚えていると、それをこの形にも当てはめて現在形のままにしてしまう。日本語の「間に合いますよ」も現在形に見えるので気づきにくい。',
        correctAnswer: 'Hurry up, and you will catch the bus.',
        correctExplanation:
          'and・or の後ろは「これから起こる結果」を述べる部分なので、will を使った未来の文にする。現在形にしてよいのは If you hurry up, ... のように if が導く文の中だけである。同じ内容を if で書くと If you hurry up, you will catch the bus. となり、前が現在形、後ろが will になる。',
      },
    ],
  },

  {
    id: 'eigo_s287',
    subject: 'eigo',
    examType: 'chugaku',
    title: '等位接続詞③：and でつないだ主語と、選択疑問文',
    description: 'A and B が主語のときの動詞の形、選択疑問文の or、語順の決まりを確かめる',
    intro: 'Ken and Tom is my friends. と書きたくなりますが、正しくは Ken and Tom are my friends. です。and でつないだ主語は二人分なので複数あつかいになります。ただし bread and butter のように、一つのものとして扱う例外もあります。',
    order: 787,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'A and B が主語なら複数扱い（Tom and I are ...）。',
      '英語では自分を最後に置く（you and I / Tom and I）。',
      '選択疑問文（AかBか）は or を使い、Yes / No では答えない。',
      '選択疑問文は or の前を上げ調子、後ろを下げ調子で読む。',
      'not A but B ＝ AではなくB。B の側が本当に言いたいこと。',
    ],
    sections: [
      {
        heading: 'and でつないだ主語と動詞の形',
        body: `and で二つの語をつないで主語にすると、その主語は複数として扱う。

例）Tom and Ken are classmates.（トムとケンは同級生です。）
例）My father and mother are teachers.（父と母は先生です。）
例）You and I are good friends.（あなたと私は仲のよい友達です。）
一つ一つは単数でも、and でつなげば二人以上になるので be動詞は are になる。

■ 自分は最後に置く
英語では、自分をさす I や me は最後に置くのがふつうである。
例）Tom and I went to the park.（トムと私は公園へ行きました。）
　　× I and Tom went to the park.
例）He invited you and me.（彼はあなたと私を招待しました。）
主語なら I、目的語や前置詞の後なら me になる点も忘れない。

■ 一体のものは単数扱い
二つの語が結び付いて一つのものを表す場合は単数として扱う。
例）Bread and butter is my breakfast.（バターをぬったパンが私の朝食です。）
中学入試ではここまで問われることは少ないが、and でつないでも必ず複数になるとは限らないことは知っておくとよい。

★ ポイント：A and B は複数、動詞は are / were / 原形（三単現の s は付けない）。`,
      },
      {
        heading: '選択疑問文と not A but B',
        body: `or を使って「AかBか」をたずねる文を選択疑問文という。答え方が特殊なので注意する。

■ 選択疑問文
例）Which do you like better, summer or winter?（夏と冬ではどちらが好きですか。）
　－ I like summer better.（夏の方が好きです。）
例）Do you go to school by bus or by bike?（あなたはバスで学校へ行きますか、それとも自転車ですか。）
　－ I go by bike.（自転車で行きます。）
Yes や No では答えられない。必ずどちらかを選んで答える。

■ 読み方
or の前を上げて読み、最後を下げて読む。ふつうの疑問文のように最後まで上げてしまうと、意味が変わってしまう。

■ not A but B（AではなくB）
例）He is not a teacher but a doctor.（彼は先生ではなく医者です。）
例）I want not coffee but tea.（私が欲しいのはコーヒーではなく紅茶です。）
but の後ろが本当に言いたい内容である。

■ A or B が主語のときの動詞
or でつないだ主語の場合、動詞は近い方（B）に合わせる。
例）Either you or he is wrong.（あなたか彼のどちらかが間違っています。）
くわしくは相関接続詞のところで学習する。

⚠ 注意：選択疑問文で Yes, I do. と答えるのは誤り。どちらを選ぶかを答える。`,
      },
    ],
    trapExamples: [
      {
        question: '「トムと私は同級生です。」を英語にしなさい。',
        wrongAnswer: 'I and Tom is classmates.',
        trapExplanation: '日本語の「私とトムは」という言い方の順にひかれて I を先に置いてしまい、さらに直前の Tom だけを見て be動詞を is にしてしまう。二つの誤りが同時に起きやすい典型的な文である。',
        correctAnswer: 'Tom and I are classmates.',
        correctExplanation:
          '英語では自分を表す I は最後に置くので Tom and I の順にする。また Tom and I は二人なので複数扱いになり、be動詞は are になる。動詞の直前の語（I）だけを見て決めるのではなく、主語全体が何人なのかを見て決める。',
      },
      {
        question: '「あなたは夏と冬のどちらが好きですか。」の空所に入る語を答えなさい。　Which do you like better, summer (　) winter?',
        wrongAnswer: 'and',
        trapExplanation: '日本語が「夏と冬」となっているため、「と」をそのまま and に置きかえてしまう。日本語では選択でも「と」を使うので、区別する手がかりが日本語にない。',
        correctAnswer: 'or',
        correctExplanation:
          '二つのうちどちらかを選ばせる選択疑問文では or を使う。and にすると「夏と冬の両方」という意味になってしまい、どちらが好きかという問いと合わなくなる。答えるときは Yes / No ではなく I like summer better. のようにどちらかを選んで答える。',
      },
    ],
  },

  // ───────────────── 8. 従属接続詞（s288〜s291） ─────────────────
  {
    id: 'eigo_s288',
    subject: 'eigo',
    examType: 'chugaku',
    title: '従属接続詞①：時を表す when・before・after・as soon as',
    description: '時を表す副詞節では未来のことも現在形で表す、という重要な規則を身につける',
    intro: '「彼が来たら電話します」は I will call you when he comes. です。「来たら」は未来のことなのに、comes と現在形になっています。時を表す文の中では未来のことも現在形で表す、という英語独特の決まりがあるからです。まずここをおさえます。',
    order: 788,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '時を表す接続詞：when（〜のとき）／before（〜の前に）／after（〜の後で）／until（〜まで）／as soon as（〜するとすぐに）。',
      '時を表す副詞節の中では、未来のことでも will を使わず現在形で書く。',
      '接続詞の文が前に来るときはコンマで区切る（When he comes, ...）。',
      '同じ when でも「いつ〜か」を表す名詞節では will が使える。',
      '間接疑問の語順は「疑問詞＋主語＋動詞」。疑問文の語順にしない。',
    ],
    sections: [
      {
        heading: '時を表す副詞節では未来を現在形で表す',
        body: `接続詞が文と文をつなぐとき、後ろに続く文のかたまりを節という。時を表す接続詞が作る節の中では、未来のことでも will を使わずに現在形で書く、という大切な規則がある。

■ 規則の確認
例）When he comes, I will tell him.（彼が来たら、私が彼に伝えます。）
　　× When he will come, I will tell him.
例）I will wait here until she comes back.（彼女が戻るまでここで待ちます。）
例）Let's go out after the rain stops.（雨がやんだら出かけましょう。）
例）I will call you as soon as I arrive.（着いたらすぐに電話します。）

どの文も、接続詞の節の中は現在形、主となる文には will が使われている。日本語ではどちらも「〜たら」「〜します」と未来のことなので、意識しないと両方に will を書いてしまう。

■ 時を表す接続詞の仲間
when（〜のとき）／while（〜している間に）／before（〜する前に）／after（〜した後で）／until, till（〜するまで）／as soon as（〜するとすぐに）／by the time（〜するまでに）

■ コンマの位置
接続詞の節を前に置くときはコンマで区切り、後ろに置くときはコンマを打たない。
例）When I got home, my mother was cooking.
例）My mother was cooking when I got home.

★ ポイント：時を表す接続詞が見えたら、その節の中に will が入っていないかを必ず確かめる。`,
        figureId: 'lf_eigoext08_288',
      },
      {
        heading: '副詞節と名詞節を見分ける',
        body: `同じ when でも、「〜するとき」という意味なら副詞節、「いつ〜か」という意味なら名詞節になる。名詞節の中では未来のことに will を使ってよい。

■ 副詞節（〜するとき）… 現在形
例）I will go out when he comes.（彼が来たら出かけます。）
この when 以下は「いつ出かけるか」を説明しているので副詞のはたらきをしている。

■ 名詞節（いつ〜か）… will を使える
例）I don't know when he will come.（彼がいつ来るのか私は知りません。）
この when 以下は know の目的語になっているので、名詞のはたらきをしている。

■ 見分け方
接続詞の節を取りのぞいても文が成り立つなら副詞節、取りのぞくと文が成り立たないなら名詞節である。
I will go out（成り立つ）→ 副詞節
I don't know（何を知らないのか分からない）→ 名詞節

■ 間接疑問の語順
名詞節の中は疑問文の語順にしない。「疑問詞＋主語＋動詞」の順に並べる。
例）Do you know where he lives?（彼がどこに住んでいるか知っていますか。）
　　× Do you know where does he live?

⚠ 注意：if も同じように、「もし〜なら」の副詞節では現在形、「〜かどうか」の名詞節では will が使える。次の課でくわしく学習する。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼が来たら、私に教えてください。」の下線部の誤りを直しなさい。　When he will come, please tell me.',
        wrongAnswer: '誤りはない（when he will come でよい）',
        trapExplanation: '彼が来るのはこれからのことなので、当然 will が要ると考えてしまう。日本語の「来たら」も未来を指しているため、時制をそのまま置きかえると誤りになる。',
        correctAnswer: 'When he comes, please tell me.',
        correctExplanation:
          '時を表す接続詞が作る副詞節の中では、未来のことでも現在形で書く。he は三人称単数なので comes と s を付けることも忘れない。同じ規則が before、after、until、as soon as にも当てはまり、I will call you as soon as I arrive. のように現在形にする。',
      },
      {
        question: '「彼がいつ来るか知っていますか。」の下線部の誤りを直しなさい。　Do you know when will he come?',
        wrongAnswer: '誤りはない（when will he come でよい）',
        trapExplanation: 'When will he come?（彼はいつ来ますか）という疑問文の語順をそのまま文の中に入れてしまう。もとの疑問文が正しい形なので、そのまま使えるように感じてしまうのが原因である。',
        correctAnswer: 'Do you know when he will come?',
        correctExplanation:
          '疑問詞が文の中に組みこまれると、その後ろは「主語＋動詞」の順にもどる。これを間接疑問という。またこの when は「いつ来るか」という名詞のはたらきをしているので、未来のことに will を使ってよい。「語順は平叙文、時制は素直に」と覚える。',
      },
    ],
  },

  {
    id: 'eigo_s289',
    subject: 'eigo',
    examType: 'chugaku',
    title: '従属接続詞②：条件を表す if と unless',
    description: '「もし〜なら」の if と「〜しなければ」の unless、名詞節の if を区別する',
    intro: '「急がないと電車に乗りおくれるよ」は Unless you hurry, you will miss the train. と言えます。unless は「もし〜しなければ」という意味で、if not とほぼ同じはたらきです。否定の意味がすでに入っているので、not を重ねないよう注意します。',
    order: 789,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'if ＝ もし〜なら。条件を表す副詞節の中では未来のことも現在形。',
      'unless ＝ もし〜しなければ（＝ if ... not）。unless の中を否定にしない。',
      '「〜かどうか」の if は名詞節なので will を使える（I don\'t know if he will come.）。',
      'if の節が前に来るときはコンマで区切る。',
      'if I were ... のような仮定法は中学入試では原則不要。まず基本の条件文を確実にする。',
    ],
    sections: [
      {
        heading: '条件の if と、未来を現在形で表す規則',
        body: `if は「もし〜なら」と条件を表す接続詞である。時を表す接続詞と同じく、条件を表す副詞節の中では未来のことでも現在形で書く。

■ 基本の形
例）If it rains tomorrow, I will stay home.（もし明日雨が降ったら、私は家にいます。）
　　× If it will rain tomorrow, ...
例）If you are free, let's play tennis.（もしひまなら、テニスをしましょう。）
例）If you don't hurry, you will be late.（急がなければ、遅れますよ。）

■ 語順は入れかえられる
例）I will stay home if it rains tomorrow.
節を後ろに置くときはコンマを打たない。

■ unless ＝ if ... not
例）Unless you hurry, you will be late.（急がなければ、遅れますよ。）
＝ If you do not hurry, you will be late.
unless にはすでに「〜しなければ」という否定の意味が入っているので、その中の動詞をさらに否定形にしてはいけない。

■ 命令文, or 〜 との関係
Hurry up, or you will be late.
＝ If you do not hurry up, you will be late.
＝ Unless you hurry up, you will be late.
同じ内容を三通りに書ける。書きかえ問題でよく問われる。

★ ポイント：if の中は現在形、主となる文には will。unless の中は否定にしない。`,
      },
      {
        heading: '「〜かどうか」の if は別のはたらき',
        body: `if には「〜かどうか」という意味もある。このときは名詞のはたらきをする節を作るので、規則が変わる。

■ 条件の if（副詞節）… 現在形
例）I will go if he comes tomorrow.（明日彼が来るなら、私は行きます。）

■ 「〜かどうか」の if（名詞節）… will を使える
例）I don't know if he will come tomorrow.（彼が明日来るかどうか、私は知りません。）
例）I wonder if it will be sunny tomorrow.（明日晴れるかどうかと思う。）
この if は whether と言いかえられる。know や wonder、ask などの目的語になっている点が特徴である。

■ 見分け方
「もし〜なら」と訳せるなら副詞節（現在形）、「〜かどうか」と訳せるなら名詞節（will を使える）。訳してみるのが最も確実である。

■ 比べてみる
I don't know if he comes tomorrow.（彼が明日来るなら、私は知らない）… 不自然
I don't know if he will come tomorrow.（彼が明日来るかどうか知らない）… 自然
know の後ろは「知らない内容」なので、名詞節と考えるのが正しい。

⚠ 注意：「〜かどうか」の意味では unless に置きかえられない。unless はいつでも「もし〜しなければ」の意味である。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼が明日来るかどうか、私は知りません。」の下線部の誤りを直しなさい。　I don\'t know if he comes tomorrow.',
        wrongAnswer: '誤りはない（if he comes でよい）',
        trapExplanation: '「if の中では未来のことでも現在形」という規則を覚えたばかりなので、意味を考えずに機械的に現在形にしてしまう。規則を覚えた直後ほど起きやすい誤りである。',
        correctAnswer: 'I don\'t know if he will come tomorrow.',
        correctExplanation:
          'この if は「〜かどうか」の意味で、know の目的語になる名詞節を作っている。名詞節の中では未来のことに will を使ってよい。現在形にしてよいのは「もし〜なら」という条件の副詞節のときだけである。訳して「もし」が入るかどうかで判断する。',
      },
      {
        question: '「急がなければ、遅れますよ。」の下線部の誤りを直しなさい。　Unless you don\'t hurry, you will be late.',
        wrongAnswer: '誤りはない（unless you don\'t hurry でよい）',
        trapExplanation: '日本語の「急がなければ」に「ない」が入っているため、英語でも don\'t を書いてしまう。unless の意味を「もし〜なら」とだけ覚えていると、否定を自分で足したくなる。',
        correctAnswer: 'Unless you hurry, you will be late.',
        correctExplanation:
          'unless は一語で「もし〜しなければ」という意味を持つので、その中の動詞を否定形にすると二重否定になり、「急ぐなら遅れる」という逆の意味になってしまう。if を使うなら If you don\'t hurry, you will be late. と、こちらは否定形が必要である。',
      },
    ],
  },

  {
    id: 'eigo_s290',
    subject: 'eigo',
    examType: 'chugaku',
    title: '従属接続詞③：理由と譲歩の because・though',
    description: '理由を表す because と、「〜だけれども」の though を、日本語との差に注意して使う',
    intro: '「雨がふったので家にいた」を Because it rained, so I stayed home. と書くと誤りになります。日本語の「〜ので、だから」の感覚で because と so を両方使ってしまうのですが、英語ではどちらか一つです。though との使い分けもあわせて確かめます。',
    order: 790,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'because ＝ 〜なので（理由）。後ろには主語＋動詞のある文が来る。',
      'because of ＋ 名詞。形で使い分ける。',
      'though（although）＝ 〜だけれども（譲歩）。',
      'though と but を同じ文で二つ使わない。because と so も同様。',
      'Why ...? への答えは Because ... で始める（この場合だけ because で文を始めてよい）。',
    ],
    sections: [
      {
        heading: '理由を表す because と、その仲間',
        body: `理由を表す接続詞は、日本語の「〜ので」「〜から」にあたる。

■ because ＝ 〜なので
例）I stayed home because it was raining.（雨が降っていたので、私は家にいました。）
例）Because he was sick, he did not come to school.（病気だったので、彼は学校に来ませんでした。）

■ Why の答えは Because
例）Why were you late?（なぜ遅れたのですか。）
　－ Because I missed the bus.（バスに乗り遅れたからです。）
ふつう because で文を始めるのは避けるが、Why への答えのときは Because だけで文を作ってよい。

■ since ／ as も理由を表す
例）Since it was cold, we stayed inside.（寒かったので、私たちは中にいました。）
例）As I was busy, I could not call you.（忙しかったので、電話できませんでした。）
because がいちばん強く理由を示し、since と as はやや軽い言い方である。

■ so は結果
例）It was raining, so I stayed home.（雨が降っていたので、家にいました。）
because が理由の側、so が結果の側から同じことを述べている。

★ ポイント：because ＋ 文、because of ＋ 名詞。後ろの形で必ず確かめる。`,
      },
      {
        heading: '譲歩を表す though と、接続詞を重ねない原則',
        body: `though（または although）は「〜だけれども」という譲歩を表す。日本語の言い方の影響で誤りやすい形なので注意する。

■ though ＝ 〜だけれども
例）Though he is young, he is very strong.（彼は若いけれども、とても力が強い。）
例）Although it was raining, we went out.（雨が降っていたけれども、私たちは出かけました。）
though と although は意味は同じで、although のほうがややかたい言い方である。

■ 接続詞を二つ重ねない
日本語では「若いけれども、しかし強い」と言えるが、英語では though と but を同じ文で使ってはいけない。
　　× Though he is young, but he is very strong.
　　○ Though he is young, he is very strong.
　　○ He is young, but he is very strong.
同じ理由で、Because ... , so ... も誤りである。

■ in spite of ＋ 名詞
例）In spite of the rain, we went out.（雨にもかかわらず、私たちは出かけました。）
though ＋ 文 ／ in spite of ＋ 名詞、という対応は because と because of の関係と同じである。

■ 譲歩の書きかえ
Though he was tired, he kept working.
＝ He was tired, but he kept working.

⚠ 注意：「〜けれども」を英語にするとき、though と but のどちらか一方だけを使う。これは日本語との差から生まれる誤りで、入試でもねらわれやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は若いけれども、とても力が強い。」の下線部の誤りを直しなさい。　Though he is young, but he is very strong.',
        wrongAnswer: '誤りはない（though ... but ... でよい）',
        trapExplanation: '日本語の「若いけれども、しかし強い」という言い方をそのまま英語に置きかえてしまう。日本語では「けれども」と「しかし」を重ねても自然なので、誤りに気づきにくい。',
        correctAnswer: 'Though he is young, he is very strong.',
        correctExplanation:
          '英語では二つの文をつなぐ語は一つでよい。though を使ったら but は書かない。but を使いたければ He is young, but he is very strong. とする。同じ誤りが Because ... , so ... でも起こる。「接続詞は一文に一つ」と覚えておく。',
      },
      {
        question: '「雨のせいで試合は中止になりました。」の下線部の誤りを直しなさい。　The game was canceled because of it was raining.',
        wrongAnswer: '誤りはない（because of it was raining でよい）',
        trapExplanation: 'because of（〜のせいで）という熟語を覚えたばかりで、後ろに文を続けてしまう。「雨のせいで」という日本語からは because of が自然に出てくるので、形の誤りに気づけない。',
        correctAnswer: 'The game was canceled because it was raining.（または because of the rain）',
        correctExplanation:
          'because of は前置詞のはたらきをするので、後ろには名詞しか置けない。it was raining という文を置くなら of を取って because にする。名詞で書くなら because of the rain とする。「文なら because、名詞なら because of」と後ろの形で決める。',
      },
    ],
  },

  {
    id: 'eigo_s291',
    subject: 'eigo',
    examType: 'chugaku',
    title: '従属接続詞④：that 節と時制の一致',
    description: '「〜ということ」をまとめる that の使い方と、主節が過去のときの時制の一致を学ぶ',
    intro: 'I think that he is kind. の that は「〜ということ」をまとめる語で、省略できます。ところが I thought that he was kind. のように、前を過去にすると後ろも過去に変わります。日本語では「親切だと思った」と、後半をそのままにできる部分です。',
    order: 791,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'that ＝ 〜ということ。think, know, say, hope などの後ろで目的語になる。',
      'この that は省略できる（I think (that) he is right.）。',
      'be glad that ... ／ be sure that ... のように形容詞の後にも使う。',
      'so ... that 〜 ＝ とても…なので〜。',
      '主となる文が過去形なら、that 節の中も過去形にそろえる（時制の一致）。',
    ],
    sections: [
      {
        heading: 'that が作る名詞のかたまり',
        body: `接続詞の that は、後ろの文全体を「〜ということ」という一つの名詞のかたまりに変える。

■ 動詞の目的語になる that 節
例）I think that he is right.（私は彼が正しいと思います。）
例）I know that she likes music.（私は彼女が音楽が好きだと知っています。）
例）He said that he was busy.（彼は忙しいと言いました。）
この that は省略できる。
例）I think he is right.（同じ意味）

■ that 節を取る主な動詞
think（思う）／know（知っている）／say（言う）／hope（望む）／believe（信じる）／hear（聞く）／find（分かる）

■ 形容詞の後の that 節
例）I am glad that you came.（あなたが来てくれてうれしいです。）
例）I am sure that he will win.（彼はきっと勝つと思います。）
例）I am afraid that it will rain.（残念ながら雨が降りそうです。）

■ so ... that 〜（とても…なので〜）
例）He was so tired that he went to bed early.（彼はとても疲れていたので早く寝た。）
例）The book was so interesting that I read it twice.（その本はとてもおもしろかったので二回読んだ。）

★ ポイント：that の後ろには必ず「主語＋動詞」がそろった文が来る。`,
      },
      {
        heading: '時制の一致',
        body: `主となる文の動詞が過去形のとき、that 節の中の動詞も過去形にそろえる。これを時制の一致という。日本語にはない規則なので、意識して身につける必要がある。

■ 現在の文
例）He says that he is busy.（彼は忙しいと言っています。）

■ 過去の文
例）He said that he was busy.（彼は忙しいと言いました。）
日本語では「忙しいと言いました」と、後ろは現在形のように言うが、英語では was に変える。

■ そろえ方
現在形 → 過去形（is → was、like → liked）
現在完了・過去形 → 過去完了（has → had、was → had been）
will → would、can → could、may → might
例）She said that she would come.（彼女は来るつもりだと言った。）
例）I thought that he could swim.（私は彼が泳げると思っていた。）

■ 一致させない場合
変わらない事実や現在も続く習慣は現在形のままでよい。
例）He said that the earth goes around the sun.（彼は地球は太陽の周りを回っていると言った。）
中学入試ではここまで問われることは多くないが、原則として過去にそろえると考えておけばよい。

⚠ 注意：say を過去形にしたのに、that 節を現在形のまま残す誤りが非常に多い。said が見えたら that 節の動詞の形を必ず見直す。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は忙しいと言いました。」の下線部の誤りを直しなさい。　He said that he is busy.',
        wrongAnswer: '誤りはない（he is busy でよい）',
        trapExplanation: '日本語では「忙しいと言いました」と、後半を現在形のまま言うので、英語でも is のままにしてしまう。今も忙しいのだから現在形でよい、と考えてしまうのも原因である。',
        correctAnswer: 'He said that he was busy.',
        correctExplanation:
          '主となる文の動詞が said と過去形なので、that 節の中も過去形の was にそろえる。これを時制の一致という。同じように He said that he would come.（来ると言った）、She said that she could swim.（泳げると言った）のように、will は would、can は could に変える。',
      },
      {
        question: '「私は彼がどこに住んでいるか知りません。」の下線部の誤りを直しなさい。　I don\'t know where does he live.',
        wrongAnswer: '誤りはない（where does he live でよい）',
        trapExplanation: 'Where does he live?（彼はどこに住んでいますか）という疑問文をそのまま文の中に入れてしまう。もとの疑問文が正しい形なので、そのまま使えると感じてしまう。',
        correctAnswer: 'I don\'t know where he lives.',
        correctExplanation:
          '疑問詞のかたまりが文の中に入ると「疑問詞＋主語＋動詞」の順になり、does は使わない。does が消えるかわりに動詞に三単現の s が付いて lives となる点も重要である。この間接疑問は that 節と同じく名詞のはたらきをするので、know の目的語になっている。',
      },
    ],
  },

  // ───────────────── 9. 相関接続詞（s292〜s295） ─────────────────
  {
    id: 'eigo_s292',
    subject: 'eigo',
    examType: 'chugaku',
    title: '相関接続詞①：both A and B ／ not only A but also B',
    description: '「AもBも」「AだけでなくBも」を表す形と、そのときの動詞の形を学ぶ',
    intro: 'both A and B は「AもBも」という意味です。Both Ken and Tom are tall. のように、二人分なので動詞は複数の形になります。一方 not only A but also B は「AだけでなくBも」。よく似た形が続くので、意味と動詞の形をセットで覚えます。',
    order: 792,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'both A and B ＝ AもBも両方とも。主語なら複数扱い。',
      'both は必ず and とセット。both A or B とはしない。',
      'not only A but also B ＝ AだけでなくBも。',
      'not only A but also B が主語のときは、動詞は B に合わせる。',
      'not only A but also B ＝ B as well as A（AとBの順が入れかわる）。',
    ],
    sections: [
      {
        heading: 'both A and B',
        body: `二つの語をペアで使って意味を作る接続詞を相関接続詞という。まず both A and B から確認する。

■ both A and B ＝ AもBも両方とも
例）I like both English and math.（私は英語も数学も両方好きです。）
例）Both Tom and Ken are my friends.（トムもケンも私の友達です。）
例）She can play both the piano and the violin.（彼女はピアノもバイオリンも弾けます。）

■ 主語になると複数扱い
Both Tom and Ken are ... のように、両方合わせて二人以上になるので be動詞は are になる。is にしない。

■ A と B は同じ形にそろえる
例）He is both kind and clever.（彼は親切でもあり賢くもある。）… 形容詞と形容詞
例）I like both swimming and skiing.（私は水泳もスキーも好きだ。）… ing形とing形
相関接続詞でも、等位接続詞と同じく前後の形をそろえる。

■ セットの相手をまちがえない
both は必ず and と組む。both A or B とは言わない。同じように either は or、neither は nor と組む。組み合わせが決まっていることが、相関接続詞の最大の特徴である。

★ ポイント：both ... and ... は「二つとも」。主語なら動詞は複数形。`,
      },
      {
        heading: 'not only A but also B',
        body: `not only A but also B は「AだけでなくBも」という意味で、B のほうに重点がある。

■ 基本の形
例）He speaks not only English but also French.（彼は英語だけでなくフランス語も話します。）
例）She is not only kind but also cheerful.（彼女は親切なだけでなく明るくもある。）
also は省略できる。
例）He speaks not only English but French.

■ 主語のときは B に合わせる
例）Not only he but also I am a member.（彼だけでなく私もその一員です。）
動詞は近い方、つまり but also の後ろにある I に合わせるので am になる。he に合わせて is とするのは誤りである。

■ B as well as A への書きかえ
not only A but also B ＝ B as well as A
例）He speaks not only English but also French.
＝ He speaks French as well as English.
書きかえると A と B の順が入れかわる点に注意する。as well as を使うときは、動詞は前の主語（B にあたる語）に合わせる。
例）She as well as her sisters is a student.（姉妹たちだけでなく彼女も学生です。）

⚠ 注意：書きかえ問題では A と B の順が入れかわるため、そのまま同じ順で書いてしまう誤りが多い。日本語に直して確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼だけでなく私もその一員です。」の下線部の誤りを直しなさい。　Not only he but also I is a member.',
        wrongAnswer: '誤りはない（I is でよい）',
        trapExplanation: '文の先頭にある he を主語だと思いこみ、三人称単数の is を選んでしまう。日本語の「彼だけでなく私も」でも先に彼が出てくるので、そちらに引っぱられやすい。',
        correctAnswer: 'Not only he but also I am a member.',
        correctExplanation:
          'not only A but also B が主語のときは、動詞は近い方の B に合わせる。ここでは I なので am になる。同じ規則が either A or B、neither A nor B にも当てはまる。「動詞のいちばん近くにある語に合わせる」と覚えておく。',
      },
      {
        question: '「私は英語も数学も両方好きです。」の空所に入る語を答えなさい。　I like both English (　) math.',
        wrongAnswer: 'or',
        trapExplanation: '「英語も数学も」という日本語から「どちらでも」というニュアンスを感じ取り、選択の or を選んでしまう。either ... or ... という形を先に覚えていると、both にも or を使ってしまう。',
        correctAnswer: 'and',
        correctExplanation:
          'both は必ず and とセットで使い、both A and B の形になる。or と組むのは either で、either A or B（AかBかどちらか）となる。nor と組むのは neither である。「both と and」「either と or」「neither と nor」の三つの組み合わせを丸ごと覚える。',
      },
    ],
  },

  {
    id: 'eigo_s293',
    subject: 'eigo',
    examType: 'chugaku',
    title: '相関接続詞②：either A or B ／ neither A nor B',
    description: '「AかBのどちらか」「AもBも〜ない」を表す形と、否定文の「〜も」の言い方を学ぶ',
    intro: 'either A or B は「AかBのどちらか」、neither A nor B は「AもBも〜ない」。nor という見なれない語が出てきます。また「私も〜ない」と言うときは Me too. ではなく Me neither. です。否定になると「も」の言い方まで変わるのです。',
    order: 793,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'either A or B ＝ AかBのどちらか。',
      'neither A nor B ＝ AもBも〜ない（not は使わない）。',
      'neither にはすでに否定の意味があるので、二重否定にしない。',
      '肯定文の「〜も」は too、否定文の「〜も」は either。',
      'Me too.（私も）／Me neither.（私も〜ない）。',
    ],
    sections: [
      {
        heading: 'either A or B と neither A nor B',
        body: `either と neither は形が似ているが、意味は正反対である。

■ either A or B ＝ AかBのどちらか
例）You can have either tea or coffee.（紅茶かコーヒーのどちらかをどうぞ。）
例）Either you or he must go.（あなたか彼のどちらかが行かなければならない。）
例）He will come either today or tomorrow.（彼は今日か明日のどちらかに来ます。）

■ neither A nor B ＝ AもBも〜ない
例）Neither Tom nor Ken came to the party.（トムもケンもパーティーに来ませんでした。）
例）I like neither cats nor dogs.（私はねこも犬も好きではありません。）
neither にはすでに「どちらも〜ない」という否定の意味が入っているので、not を重ねて使わない。

■ 主語のときは B に合わせる
例）Either you or he is wrong.（あなたか彼のどちらかが間違っています。）
例）Neither he nor I am tired.（彼も私も疲れていません。）
どちらも動詞に近い方の語に合わせる。

■ 書きかえ
Neither Tom nor Ken came. ＝ Tom did not come, and Ken did not come.

★ ポイント：either は or、neither は nor。neither の文に not を入れてはいけない。`,
      },
      {
        heading: '「〜も」の言い方：too と either',
        body: `日本語の「私も」は、肯定文と否定文で英語の言い方が変わる。

■ 肯定文の「〜も」は too
例）I like music, too.（私も音楽が好きです。）
例）He is a student, too.（彼も学生です。）

■ 否定文の「〜も」は either
例）I don't like music, either.（私も音楽が好きではありません。）
例）He is not a student, either.（彼も学生ではありません。）
否定文で too を使うことはできない。

■ 短い受け答え
A: I like tennis.（私はテニスが好きです。）
B: Me too. ／ So do I.（私もです。）
A: I don't like tennis.（私はテニスが好きではありません。）
B: Me neither. ／ Neither do I.（私もです。）
否定に同意するときは neither を使う。

■ also の位置
also は「〜も」を表す副詞で、ふつう動詞の前（be動詞や助動詞の後）に置く。
例）He also plays the guitar.（彼はギターも弾きます。）
例）She is also a good singer.（彼女は歌もうまい。）

⚠ 注意：I don't like it too. は誤り。否定文では either にする。会話文の空所補充でよく問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私もそれが好きではありません。」の下線部の誤りを直しなさい。　I don\'t like it too.',
        wrongAnswer: '誤りはない（it too でよい）',
        trapExplanation: '「〜も」を too と覚えているため、否定文でもそのまま使ってしまう。日本語では「私も好きです」と「私も好きではありません」で「も」の形が変わらないので、区別する手がかりがない。',
        correctAnswer: 'I don\'t like it, either.',
        correctExplanation:
          '否定文で「〜も」と言うときは either を使う。too が使えるのは肯定文だけである。会話では Me neither.（私も好きではない）という言い方もよく使う。「肯定は too、否定は either」と対で覚えておくと、会話文の問題で確実に得点できる。',
      },
      {
        question: '「彼も私もその答えを知りませんでした。」の下線部の誤りを直しなさい。　Neither he nor I didn\'t know the answer.',
        wrongAnswer: '誤りはない（didn\'t know でよい）',
        trapExplanation: '日本語が「知りませんでした」と否定なので、動詞も否定形にしなければならないと考えてしまう。neither がすでに否定を表していることを見落としている。',
        correctAnswer: 'Neither he nor I knew the answer.',
        correctExplanation:
          'neither は一語で「どちらも〜ない」という否定を表すので、動詞をさらに否定形にすると二重否定になり意味が反対になってしまう。動詞は肯定形のまま knew とする。同じように I like neither cats nor dogs. も don\'t を入れない。',
      },
    ],
  },

  {
    id: 'eigo_s294',
    subject: 'eigo',
    examType: 'chugaku',
    title: '相関接続詞③：主語と動詞の一致をまとめる',
    description: 'both・either・neither・not only・as well as が主語のときの動詞の形を整理する',
    intro: 'Both Ken and Tom are 〜 と Either Ken or Tom is 〜。どちらも二人ならんでいるのに、動詞が are と is に分かれます。both は二人まとめて、either はどちらか一人だからです。ならんだ語を見て動詞を決める手順を作っておきましょう。',
    order: 794,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'both A and B ＝ 複数扱い（are / were / 原形）。',
      'either A or B ／ neither A nor B ／ not only A but also B ＝ 動詞は B に合わせる。',
      'A as well as B ＝ 動詞は A（前の語）に合わせる。',
      'as well as だけ「前の語に合わせる」ので、他と反対だと覚える。',
      '迷ったら、動詞にいちばん近い語を見る（as well as を除く）。',
    ],
    sections: [
      {
        heading: '三つのグループに分けて覚える',
        body: `相関接続詞が主語に使われたとき、動詞をどの語に合わせるかは形によって決まっている。三つに分けて整理する。

■ ①複数扱いになるもの
both A and B
例）Both Tom and Ken are my friends.（トムもケンも私の友達です。）
例）Both my father and my mother were teachers.（父も母も先生でした。）
二人以上になるので、常に複数の形を使う。

■ ②動詞に近い方（B）に合わせるもの
either A or B ／ neither A nor B ／ not only A but also B
例）Either you or he is wrong.（あなたか彼のどちらかが間違っている。）
例）Neither he nor I am late.（彼も私も遅れていない。）
例）Not only she but also they are students.（彼女だけでなく彼らも学生です。）
どれも but also や or の直後にある語を見て動詞を決める。

■ ③前の語（A）に合わせるもの
A as well as B
例）She as well as her friends is a student.（友達だけでなく彼女も学生です。）
as well as は「〜と同様に」と付け足す言い方なので、主役は前の A である。

★ ポイント：as well as だけが例外的に「前に合わせる」。それ以外は「近い方に合わせる」。`,
      },
      {
        heading: '書きかえと組み合わせて確かめる',
        body: `動詞の一致は、書きかえ問題とセットで出題されることが多い。書きかえた後に動詞の形を直し忘れる誤りに注意する。

■ not only A but also B ⇔ B as well as A
例）Not only his brothers but also he is a doctor.
（兄弟だけでなく彼も医者です。）… 動詞は近い he に合わせて is
＝ He as well as his brothers is a doctor.
（同じ意味）… 動詞は前の He に合わせて is
たまたま両方 is になっているが、語順を入れかえるときに主語がどれになるかを必ず考える。

■ 順を入れかえた場合
Not only he but also his brothers are doctors.
（彼だけでなく兄弟も医者です。）… 近い his brothers に合わせて are
このように、A と B を入れかえると動詞の形も変わることがある。

■ 手順
①どの相関接続詞かを見る
②複数扱いか、近い方か、前の語かを決める
③その語が単数か複数か、何人称かを確かめて動詞を選ぶ

■ 否定の形にも注意
neither A nor B の文では、動詞に not を入れない。
例）Neither he nor she knows the answer.（彼も彼女もその答えを知らない。）

⚠ 注意：主語が長くなると、動詞の直前の語だけを見て決めてしまいがちである。必ず主語全体の形を確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女だけでなく彼らも学生です。」の下線部の誤りを直しなさい。　Not only she but also they is students.',
        wrongAnswer: '誤りはない（they is でよい）',
        trapExplanation: '文の先頭にある she を主語だと考えて、三人称単数の is を選んでしまう。日本語も「彼女だけでなく」と先に彼女が出てくるため、そちらに引きずられやすい。',
        correctAnswer: 'Not only she but also they are students.',
        correctExplanation:
          'not only A but also B が主語のときは、動詞に近い方の B に合わせる。ここでは they なので are になり、補語も複数形の students になる。「but also の後ろの語を見て動詞を決める」と手順を固定しておけば、主語が長くなっても迷わない。',
      },
      {
        question: '「友達だけでなく彼女も学生です。」の空所に入る語を答えなさい。　She as well as her friends (　) a student.',
        wrongAnswer: 'are',
        trapExplanation: '動詞のすぐ前にある her friends が複数なので are を選んでしまう。not only A but also B で「近い方に合わせる」と覚えた直後だと、同じ規則をここにも当てはめてしまう。',
        correctAnswer: 'is',
        correctExplanation:
          'A as well as B は「Bと同様にAも」という意味で、主役は前の A である。したがって動詞は She に合わせて is になる。as well as だけが「前の語に合わせる」例外で、either or・neither nor・not only but also は「近い方に合わせる」。二つのグループに分けて覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s295',
    subject: 'eigo',
    examType: 'chugaku',
    title: '前置詞・接続詞の総合演習',
    description: '同じ語が前置詞にも接続詞にもなる場合を見分け、単元全体を入試レベルで確認する',
    intro: 'before・after・since は、前置詞にも接続詞にもなります。after school なら前置詞、after I came home なら接続詞です。うしろに名詞が来るか、主語と動詞が来るかで見分けます。単元のしめくくりとして、まぎらわしい語を入試レベルで確かめます。',
    order: 795,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '前置詞の後ろは名詞（または動名詞）、接続詞の後ろは主語＋動詞のある文。',
      'before・after・since・until・as は前置詞にも接続詞にもなる。',
      'during（前置詞）と while（接続詞）、because of（前置詞）と because（接続詞）はペアで覚える。',
      '空所補充では、まず空所の後ろの形を見る。',
      'this・last・next・every が付いた時の語には前置詞を付けない。',
    ],
    sections: [
      {
        heading: '前置詞か接続詞かを後ろの形で見分ける',
        body: `この単元の総まとめとして、いちばん大切な判断のしかたを確認する。空所補充では、空所の後ろの形を見ればほとんど決まる。

■ 前置詞の後ろ … 名詞・代名詞・動名詞
during the vacation（休みの間）／because of the rain（雨のせいで）／in spite of the rain（雨にもかかわらず）／before dinner（夕食の前に）／without saying（言わずに）

■ 接続詞の後ろ … 主語＋動詞のある文
while I was sleeping（私がねている間に）／because it rained（雨が降ったので）／though it rained（雨が降ったけれども）／before I ate dinner（夕食を食べる前に）

■ ペアで覚える組み合わせ
during ＋ 名詞 ／ while ＋ 文
because of ＋ 名詞 ／ because ＋ 文
in spite of ＋ 名詞 ／ though ＋ 文
during my stay ＝ while I stayed

■ どちらにもなる語
before・after・since・until（till）・as は、前置詞にも接続詞にもなる。
例）before dinner（前置詞）／before I had dinner（接続詞）
例）since 2020（前置詞）／since I was a child（接続詞）

★ ポイント：訳して選ぶのではなく、後ろに主語と動詞があるかどうかで選ぶ。これがいちばん速く、まちがえない。`,
      },
      {
        heading: '単元全体の総まとめ',
        body: `入試直前に確認しておきたい要点を、一覧にしておく。

■ 時の前置詞
at ＋ 時刻・noon・night ／ on ＋ 曜日・日付・特定の日 ／ in ＋ 月・季節・年・午前午後
this・last・next・every が付いたら前置詞なし
in ＋ 期間 ＝ 〜後に（未来）

■ 場所の前置詞
at ＝ 点／on ＝ 接している／in ＝ 内部
番地は at、通りは on、市や国は in
乗り物は大きければ on、小さければ in、手段なら by ＋ 無冠詞

■ 位置と方向
under と over は真下・真上、below と above は高さの比較
between は二つ、among は三つ以上
through（中を抜ける）／across（横切る）／along（沿って）／over（越える）

■ 期間
for ＋ 長さ ／ during ＋ 期間の名前 ／ since ＋ 起点（現在完了とともに）
until ＝ 〜までずっと ／ by ＝ 〜までに

■ 接続詞
時と条件の副詞節では未来のことも現在形
命令文, and ＝ そうすれば ／ 命令文, or ＝ そうしないと
both と and、either と or、neither と nor が組み合わせ
動詞は近い方に合わせる（as well as だけ前の語に合わせる）

⚠ 注意：英作文では、書き終えたら「前置詞は要るか」「後ろの形は合っているか」「時制は正しいか」を必ず見直す。`,
      },
    ],
    trapExamples: [
      {
        question: '空所に入る語を選びなさい。　(　) I was a child, I lived in Osaka.　［During / While］',
        wrongAnswer: 'During',
        trapExplanation: '「子どものころ、〜の間」という日本語から during を選んでしまう。during も「〜の間」と訳せるので意味の上では合っているように見えるが、後ろに I was a child という文が続いている点を見落としている。',
        correctAnswer: 'While',
        correctExplanation:
          '後ろに主語（I）と動詞（was）のある文が続いているので、接続詞の while を使う。during は前置詞なので during my childhood のように名詞しか置けない。空所補充では、まず後ろの形を見て「文なら接続詞、名詞なら前置詞」と決めるのが最も確実な解き方である。',
      },
      {
        question: '「私は毎朝六時に起きて学校へ行きます。」の下線部の誤りを直しなさい。　I get up at six in every morning and go to school.',
        wrongAnswer: '誤りはない（in every morning でよい）',
        trapExplanation: 'in the morning という形が頭にあるため、the を every に置きかえた in every morning を正しい形だと感じてしまう。at six の at が正しいので、文全体が正しく見えてしまうことも原因である。',
        correctAnswer: 'I get up at six every morning and go to school.',
        correctExplanation:
          'this・last・next・every が付いた時の表現には前置詞を付けないので、in は不要である。at six の at は時刻に付く前置詞なのでそのまま残す。また and でつないだ動詞は形をそろえるので、get up と go の両方を現在形にする点も確認しておく。',
      },
    ],
  },
];
