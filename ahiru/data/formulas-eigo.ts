import type { FormulaSection } from './formulas-types';

// ───────────────────────────────────────────────────────────────
// 英語（中学英語＝高校受験レンジ）の要点まとめ
// 「文の形」を1行で示し、やさしい説明＋作り方の流れ＋例題＋一問一答＋
// ひっかけポイントまでをセットにする。
// 中3までの範囲に限定する（仮定法・関係副詞・分詞構文などは入れない）。
// 図形は使わないので figure は持たせず、steps（作り方の流れ）で示す。
// ───────────────────────────────────────────────────────────────

export const eigoFormulas: FormulaSection[] = [
  // ================= 文の基本 =================
  {
    title: '文の基本',
    studyPeriod: '中1',
    intro: '英語は「だれが → どうする → 何を」の順で並べるのが基本です。まずは be動詞と一般動詞の区別、否定文・疑問文の作り方を体にしみこませましょう。ここができると、あとの単元はほとんど応用です。',
    items: [
      {
        label: 'be動詞と一般動詞の使い分け',
        formula: '主語 ＋ be動詞（am / is / are）＋ 名詞・形容詞　／　主語 ＋ 一般動詞 ＋ 〜',
        explanation: 'be動詞は「＝（イコール）」の役目で、「AはBです」「Aは〜な状態です」と言うときに使います。一般動詞は play・go・like のような「〜する」という動作や気持ちを表す動詞です。英語の文には動詞が1つだけなので、be動詞と一般動詞を同じ文に並べてはいけません。',
        steps: [
          '言いたいことが「AはBだ・Aは〜な状態だ」なら be動詞',
          '「Aは〜する」という動作・気持ちなら一般動詞',
          'be動詞は主語で決める：I → am、he / she / it・単数 → is、you・複数 → are',
          '一般動詞は、主語が3人称単数で今のことなら s（または es）をつける',
        ],
        example: {
          q: '「彼は毎日サッカーをします」を英語に直しなさい。',
          a: 'He plays soccer every day.（動作なので一般動詞。he なので plays）',
        },
        quiz: [
          {
            q: '「私は中学生です」を英語に直しなさい。',
            a: 'I am a junior high school student.',
            explanation: '「〜です」なので be動詞。主語が I なので am を使います。',
          },
          {
            q: 'かっこに入る語を答えなさい。She ( ) in Osaka.（彼女は大阪に住んでいます）',
            a: 'lives',
            explanation: 'live は一般動詞。主語 She は3人称単数で今のことなので s をつけて lives になります。',
          },
          {
            q: '誤りを直しなさい。He is play the piano.',
            a: 'He plays the piano.',
            explanation: 'be動詞 is と一般動詞 play が重なっています。動詞は1つだけ。動作を言いたいので is を消して plays にします。',
          },
        ],
        checkpoints: [
          'be動詞と一般動詞を同じ文に並べない（×He is play 〜）',
          '主語が3人称単数（he / she / it / 人名 / 単数名詞）で現在なら、一般動詞に s をつける',
        ],
      },
      {
        label: '否定文の作り方',
        formula: 'be動詞 ＋ not　／　do（does）＋ not ＋ 動詞の原形',
        explanation: '「〜ではない」と打ち消すとき、be動詞の文は be動詞のすぐ後ろに not を置くだけです。一般動詞の文は自分では打ち消せないので、助っ人の do / does を借りてきて do not（does not）を動詞の前に置きます。このとき、s は do ではなく does が引き受けるので、後ろの動詞は原形にもどります。',
        steps: [
          'その文が be動詞の文か一般動詞の文かを見分ける',
          'be動詞の文 → be動詞の直後に not を入れる',
          '一般動詞の文 → 主語が3人称単数なら does not、それ以外は do not を動詞の前に置く',
          '過去の文なら、be動詞は was / were not、一般動詞は did not ＋ 原形',
        ],
        example: {
          q: '「私はコーヒーが好きではありません」を英語に直しなさい。',
          a: 'I do not like coffee.（短縮形なら I don\'t like coffee.）',
        },
        quiz: [
          {
            q: '「彼女はテニスをしません」を英語に直しなさい。',
            a: 'She does not play tennis.',
            explanation: '主語が3人称単数なので does not。does が s を引き受けるので、後ろは原形 play です。',
          },
          {
            q: 'かっこに入る語を答えなさい。They are ( ) from Canada.（彼らはカナダ出身ではありません）',
            a: 'not',
            explanation: 'be動詞の文なので、are のすぐ後ろに not を置くだけです。',
          },
          {
            q: '誤りを直しなさい。She does not plays the guitar.',
            a: 'She does not play the guitar.',
            explanation:
              'She does not play the guitar. does をつけたら、後ろの動詞は必ず原形にする。主語が3人称単数であることは does がすでに表しているので、play にもう一度 s をつけると二重になってしまうからである。「s を持てるのは1か所だけ」と覚えると、does not plays のようなまちがいを防げる。',
          },
        ],
        checkpoints: [
          'does not / did not のあとの動詞は必ず原形（×does not plays）',
          'be動詞の文に do / does を持ち込まない（×I do not am 〜）',
        ],
      },
      {
        label: '疑問文の作り方と答え方',
        formula: 'Be動詞 ＋ 主語 〜?　／　Do（Does）＋ 主語 ＋ 動詞の原形 〜?',
        explanation: '「〜ですか」とたずねるときは、be動詞の文なら be動詞を文の先頭に出します。一般動詞の文は、否定文と同じように助っ人の Do / Does を先頭に借りてきて、後ろの動詞は原形にします。答えるときは、たずねられた形と同じ助動詞・be動詞を使って Yes / No で返します。',
        steps: [
          'be動詞の文 → Are you 〜? / Is he 〜? のように be動詞を先頭へ',
          '一般動詞の文 → Do / Does を先頭に置き、動詞は原形にもどす',
          '過去の文は Was / Were 〜? または Did ＋ 主語 ＋ 原形 〜?',
          '答えは Yes, I am. / No, he does not. のように、聞かれた語で返す',
        ],
        example: {
          q: '「あなたは犬を飼っていますか」を英語に直しなさい。',
          a: 'Do you have a dog?（答えは Yes, I do. / No, I do not.）',
        },
        quiz: [
          {
            q: '「彼は英語を話しますか」を英語に直しなさい。',
            a: 'Does he speak English?',
            explanation: '主語が3人称単数なので Does で始め、動詞は原形の speak にします。',
          },
          {
            q: 'Are you a student? に「はい」と答えなさい。',
            a: 'Yes, I am.',
            explanation:
              'Yes, I am. Are you 〜? は「あなたは〜ですか」と相手にたずねる文なので、答えるのは自分になり、主語は you ではなく I に変わるからである。主語が I になれば be動詞も am にそろえる。Yes, you are. としてしまうのがよくあるまちがい。',
          },
          {
            q: '誤りを直しなさい。Does she likes music?',
            a: 'Does she like music?',
            explanation:
              'Does she like music? Does を使ったら、後ろの動詞は必ず原形。3人称単数の s は Does がすでに引き受けているので、like にもつけると二重になるからである。Do / Does / Did で始まる疑問文を見たら、後ろは原形、と決めてしまってよい。',
          },
        ],
        checkpoints: [
          'Do / Does / Did のあとの動詞は原形（×Does she likes）',
          '答えるときは主語が入れかわる（you → I、your mother → she）',
        ],
      },
      {
        label: '命令文',
        locked: true,
        formula: '動詞の原形 〜.　／　Do not ＋ 動詞の原形 〜.　／　Let\'s ＋ 動詞の原形 〜.',
        explanation: '「〜しなさい」と相手に言う文では、主語の You を言わずに動詞の原形で文を始めます。「〜してはいけません」は Do not（Don\'t）を前に置きます。「〜しましょう」と さそうときは Let\'s ＋ 原形 です。ていねいにしたいときは、文の前か後ろに please をつけます。',
        steps: [
          '主語 You を取り、動詞を原形にして文頭に置く',
          '「〜するな」は Do not（Don\'t）＋ 原形',
          '「〜しましょう」は Let\'s ＋ 原形。答えは Yes, let\'s. / All right.',
          '「〜でありなさい」と状態を言うときは be動詞の原形 Be を使う',
        ],
        example: {
          q: '「この本を読みなさい」を英語に直しなさい。',
          a: 'Read this book.（ていねいに言うなら Please read this book.）',
        },
        quiz: [
          {
            q: '「ここで走ってはいけません」を英語に直しなさい。',
            a: 'Do not run here.（Don\'t run here.）',
            explanation:
              'Do not run here.（短縮した形にしてもよい）。打ち消しの命令文は Do not ＋ 動詞の原形で作る。命令文は目の前の相手に言う文なので、主語の You は言わなくても分かるから書かないのである。「〜しなさい」なら原形だけ、「〜してはいけません」なら Do not をつける。',
          },
          {
            q: '「窓を開けてください」とていねいに言いなさい。',
            a: 'Please open the window.（Open the window, please. でもよい）',
            explanation:
              'Please open the window.（Open the window, please. でもよい）。命令文はそのままだと強い言い方になるので、please を添えてやわらげる。文の前に置くときはそのまま続け、後ろに置くときはコンマをつけて , please. とするのが決まりである。',
          },
          {
            q: '誤りを直しなさい。You are kind to old people.（「お年寄りに親切にしなさい」という意味にする）',
            a: 'Be kind to old people.',
            explanation:
              'Be kind to old people. 命令文では主語を取り、動詞は原形にする。are は be動詞が変化した形なので、原形の Be にもどす必要があるからである。are のまま残すと「あなたは親切だ」という事実を述べる文になってしまい、命令にならない。',
          },
        ],
        checkpoints: [
          '命令文の be動詞は Be（×Are kind 〜、×You be kind 〜）',
          'Let\'s のあとも必ず原形（×Let\'s to go、×Let\'s going）',
        ],
      },
      {
        label: 'There is / There are',
        locked: true,
        formula: 'There is ＋ 単数の名詞 ＋ 場所　／　There are ＋ 複数の名詞 ＋ 場所',
        explanation: '「〜がある・〜がいる」と、相手が知らないものの存在を伝える言い方です。There は「そこ」という意味ではなく、文を始めるための飾りなので訳しません。is か are かは、There の後ろに来る名詞が単数か複数かで決めます。the my your など「どれのことか決まっているもの」には使わず、ふつうの文（My book is on the desk.）にします。',
        steps: [
          '後ろに来る名詞が1つなら There is、2つ以上なら There are',
          '過去なら There was / There were',
          '否定文は There is not 〜、疑問文は Is there 〜? / Are there 〜?',
          '答えは Yes, there is. / No, there are not. のように there を使って返す',
        ],
        example: {
          q: '「机の上に本が3冊あります」を英語に直しなさい。',
          a: 'There are three books on the desk.',
        },
        quiz: [
          {
            q: '「公園に大きな木があります」を英語に直しなさい。',
            a: 'There is a big tree in the park.',
            explanation:
              'There is a big tree in the park. There is / There are は「〜がある」と、相手がまだ知らないものの存在を伝える言い方。a big tree は1本なので There is を使う。be動詞の形を決めるのは There ではなく、後ろに来る名詞のほうだからである。',
          },
          {
            q: 'かっこに入る語を答えなさい。There ( ) some students in the classroom.',
            a: 'are',
            explanation:
              'are。There is / There are の be動詞は、後ろに来る名詞の数に合わせて決まるからである。students と複数なので are になる。There が主語のように見えるが、本当の主語は後ろの名詞のほう、と考えるとまちがえない。',
          },
          {
            q: '誤りを直しなさい。There are a cat under the table.',
            a: 'There is a cat under the table.',
            explanation: 'be動詞は There の後ろの名詞に合わせます。a cat は単数なので is です。',
          },
        ],
        checkpoints: [
          'is / are は後ろの名詞で決める（×There are a cat）',
          'my・the がついた特定のものには使わない（×There is my bag on the desk. → My bag is on the desk.）',
        ],
      },
    ],
  },

  // ================= 時制 =================
  {
    title: '時制（現在・過去・未来・進行形・現在完了）',
    studyPeriod: '中2',
    intro: '英語は「いつのことか」を動詞の形で表します。過去なら過去形、進行中なら be ＋ ing、今につながっているなら have ＋ 過去分詞。形と一緒に使われる目印の語（yesterday・now・since など）をセットで覚えると、入試の選択問題で迷わなくなります。',
    items: [
      {
        label: '一般動詞の過去形（規則・不規則）',
        locked: true,
        formula: '規則動詞：原形 ＋ ed　／　不規則動詞：go → went、see → saw のように形が変わる',
        explanation: '「〜した」と過去のことを言うときは動詞を過去形にします。多くの動詞は ed をつけるだけですが、よく使う動詞ほど形が変わる不規則動詞です。過去形は主語が何でも形は変わらないので、3単現の s のことは考えなくてよくなります。否定文・疑問文では did を借りてくるので、動詞は原形にもどります。',
        steps: [
          'ふつうは ed をつける（play → played）',
          'e で終わる語は d だけ（like → liked）、子音＋y は y を i に変えて ed（study → studied）',
          '短母音＋子音1つで終わる語は子音を重ねて ed（stop → stopped）',
          '不規則動詞は go → went、see → saw、take → took、buy → bought などを丸暗記する',
          '否定文・疑問文は did not ＋ 原形／Did ＋ 主語 ＋ 原形 〜?',
        ],
        example: {
          q: '「私は昨日公園へ行きました」を英語に直しなさい。',
          a: 'I went to the park yesterday.（go の過去形は went）',
        },
        quiz: [
          {
            q: '「彼女は先週その映画を見ました」を英語に直しなさい。',
            a: 'She saw the movie last week.',
            explanation:
              'She saw the movie last week. see の過去形は saw で、ed をつけない不規則動詞。last week（先週）が過去を表す目印になっているので、過去形を使うと判断できる。yesterday, last 〜, 〜 ago が出てきたら過去形、と目印で見分ける。',
          },
          {
            q: 'study の過去形を答えなさい。',
            a: 'studied',
            explanation: '子音＋y で終わるので、y を i に変えて ed をつけます。',
          },
          {
            q: '誤りを直しなさい。Did you went to school yesterday?',
            a: 'Did you go to school yesterday?',
            explanation:
              'Did you go to school yesterday? Did を使ったら、後ろの動詞は必ず原形にする。過去であることは Did がすでに表しているので、went にすると過去を二重に表すことになるからである。Do / Does / Did のあとは原形、という決まりは疑問文でも否定文でも同じ。',
          },
        ],
        checkpoints: [
          'did not / Did 〜? のあとは原形（×Did you went）',
          'yesterday・last 〜・〜 ago・then は過去形の目印',
        ],
      },
      {
        label: '未来を表す形（will / be going to）',
        locked: true,
        formula: 'will ＋ 動詞の原形　／　be going to ＋ 動詞の原形',
        explanation: 'これから先のことは will か be going to で表します。will は「〜でしょう」「〜します」とその場で決めた気持ちや予想、be going to は「〜するつもりだ」と前から決めていた予定を表します。will は助動詞なので、主語が3人称単数でも s はつかず、後ろは必ず原形です。',
        steps: [
          '予想・その場の決意 → will ＋ 原形',
          '前から決めていた予定 → am / is / are going to ＋ 原形',
          '否定は will not（won\'t）／ be動詞 ＋ not ＋ going to',
          '疑問文は Will ＋ 主語 ＋ 原形 〜? ／ Be動詞 ＋ 主語 ＋ going to 〜?',
        ],
        example: {
          q: '「明日は雨が降るでしょう」を英語に直しなさい。',
          a: 'It will rain tomorrow.（It is going to rain tomorrow. でもよい）',
        },
        quiz: [
          {
            q: '「私は来週おばを訪ねるつもりです」を英語に直しなさい。',
            a: 'I am going to visit my aunt next week.',
            explanation: '前から決めている予定なので be going to を使います。',
          },
          {
            q: 'かっこに入る語を答えなさい。He will ( ) fifteen years old next month.',
            a: 'be',
            explanation:
              'be。will のような助動詞のあとは必ず動詞の原形が来る決まりだからである。is や am や are はすべて be が変化した形なので、原形の be にもどす。will is とは絶対に言わない、と覚えておくとよい。',
          },
          {
            q: '誤りを直しなさい。I will going to buy a new bike.',
            a: 'I am going to buy a new bike.（または I will buy a new bike.）',
            explanation: 'will と be going to は同じはたらきなので、重ねて使いません。どちらか一方にします。',
          },
        ],
        checkpoints: [
          'will のあとは必ず原形（×He will is、×He wills go）',
          'will と be going to を混ぜない（×I will going to 〜）',
        ],
      },
      {
        label: '進行形（現在進行形・過去進行形）',
        locked: true,
        formula: 'am / is / are ＋ 動詞のing形（〜している）　／　was / were ＋ ing形（〜していた）',
        explanation: '「ちょうど今やっている最中」を表すのが進行形です。be動詞と ing形はセットで、どちらか一方だけでは進行形になりません。be動詞を過去形にすれば「そのとき〜していた」という過去進行形になります。know・like・have（持っている）・want のような、動作ではなく状態を表す動詞はふつう進行形にしません。',
        steps: [
          '主語に合う be動詞を選ぶ（現在は am / is / are、過去は was / were）',
          '動詞を ing形にする（ふつうは ing、e で終わる語は e を取って ing、run → running のように子音を重ねる語もある）',
          '否定文は be動詞のあとに not、疑問文は be動詞を文頭へ',
          '状態を表す動詞（know・like・have「持つ」・want）は進行形にしない',
        ],
        example: {
          q: '「彼らは今、昼食を作っています」を英語に直しなさい。',
          a: 'They are cooking lunch now.',
        },
        quiz: [
          {
            q: '「私はそのとき音楽を聞いていました」を英語に直しなさい。',
            a: 'I was listening to music then.',
            explanation: '過去進行形は was / were ＋ ing形。主語 I なので was です。',
          },
          {
            q: 'run の ing形を答えなさい。',
            a: 'running',
            explanation: '短い母音＋子音1つで終わるので、n を重ねて ing をつけます。',
          },
          {
            q: '誤りを直しなさい。I am know his name.',
            a: 'I know his name.',
            explanation: 'know は「知っている」という状態を表す動詞なので進行形にしません。また be動詞と一般動詞が重なってしまっています。',
          },
        ],
        checkpoints: [
          'be動詞を書き忘れない（×I playing tennis now.）',
          'know・like・have（持っている）・want は進行形にしない',
        ],
      },
      {
        label: '現在完了（完了・経験・継続）',
        locked: true,
        formula: 'have（has）＋ 過去分詞　／　否定 have not ＋ 過去分詞　／　疑問 Have ＋ 主語 ＋ 過去分詞 〜?',
        explanation: '現在完了は「過去のできごとが今にもつながっている」ことを表します。使い方は3つ。①完了「もう〜してしまった」（just・already・yet）②経験「〜したことがある」（ever・never・before・〜 times）③継続「ずっと〜している」（for・since）。主語が3人称単数のときは has を使います。',
        steps: [
          '完了 → just（ちょうど）・already（もう）・yet（疑問文でもう／否定文でまだ）',
          '経験 → ever（今までに）・never（一度もない）・before・once / twice / 〜 times',
          '継続 → for ＋ 期間（for three years）・since ＋ 始まった時点（since 2020）',
          '主語が3人称単数なら has ＋ 過去分詞',
          'yesterday・last 〜・〜 ago のような「はっきり過去」の語とは一緒に使えない',
        ],
        example: {
          q: '「私は3年間ずっと大阪に住んでいます」を英語に直しなさい。',
          a: 'I have lived in Osaka for three years.（継続の用法）',
        },
        quiz: [
          {
            q: '「彼女はもう宿題を終えました」を英語に直しなさい。',
            a: 'She has already finished her homework.',
            explanation: '主語が3人称単数なので has。already は have と過去分詞の間に置きます。',
          },
          {
            q: 'かっこに入る語を答えなさい。Have you ( ) been to Kyoto?（今までに京都へ行ったことがありますか）',
            a: 'ever',
            explanation:
              'ever。ever は「今までに」という意味で、経験をたずねる疑問文で使う。現在完了は完了・経験・継続の3つの意味を持つため、どの意味かを示す語を添えて区別するからである。経験なら ever / never / 回数、完了なら just / already / yet、継続なら for / since が目印になる。',
          },
          {
            q: '誤りを直しなさい。I have finished my homework yesterday.',
            a: 'I finished my homework yesterday.',
            explanation:
              'I finished my homework yesterday. yesterday のようにはっきり過去の一点を指す語は、現在完了と一緒には使えない。現在完了は「過去の出来事が今とつながっている」ことを表す形なので、過去の一点に目を向ける語とかみ合わないからである。こういうときはふつうの過去形にする。',
          },
        ],
        checkpoints: [
          'yesterday・last week・〜 ago とは一緒に使えない（そのときは過去形）',
          'have / has のあとは過去形ではなく過去分詞（×I have went 〜 → I have gone 〜）',
          'for は期間、since は始まった時点（for two years / since last year）',
        ],
      },
    ],
  },

  // ================= 助動詞 =================
  {
    title: '助動詞',
    studyPeriod: '中2',
    intro: '助動詞は動詞の前に置いて「できる」「〜すべきだ」などの気持ちを足す語です。共通ルールはただ1つ、「助動詞のあとは必ず動詞の原形」。3単現の s も過去形も、助動詞の後ろでは消えます。',
    items: [
      {
        label: 'can / will / must / should',
        locked: true,
        formula: '助動詞 ＋ 動詞の原形（主語が3人称単数でも s はつけない）',
        explanation: 'can は「〜できる・〜してもよい」、will は「〜でしょう・〜するつもりだ」、must は「〜しなければならない」、should は「〜すべきだ・〜したほうがよい」。どれも後ろは原形です。否定文は助動詞のあとに not を置き、疑問文は助動詞を文頭に出します。can の過去は could、「〜できるだろう」は will be able to と言いかえます。',
        steps: [
          '意味で助動詞を選ぶ（できる → can、しなければ → must、すべき → should）',
          '助動詞のすぐ後ろに動詞の原形を置く',
          '否定は 助動詞 ＋ not（cannot / will not / must not / should not）',
          '疑問文は 助動詞 ＋ 主語 ＋ 原形 〜?、答えも同じ助動詞で返す',
        ],
        example: {
          q: '「彼は速く泳ぐことができます」を英語に直しなさい。',
          a: 'He can swim fast.（He is able to swim fast. とも言える）',
        },
        quiz: [
          {
            q: '「あなたはもっと熱心に勉強すべきです」を英語に直しなさい。',
            a: 'You should study harder.',
            explanation:
              'You should study harder. 「〜すべきだ」は should で表す。助動詞なので後ろは原形の study になる。hard（熱心に）の比較級は harder で、「もっと」を表している。must（〜しなければならない）より弱く、助言する言い方になる。',
          },
          {
            q: 'かっこに入る語を答えなさい。You ( ) not open this door.（このドアを開けてはいけません）',
            a: 'must',
            explanation:
              'must。must not は「〜してはいけない」という強い禁止を表すからである。似た形の do not have to は「〜する必要はない」で、意味がまったく逆になるので取りちがえないこと。must not は「するな」、do not have to は「しなくてよい」。',
          },
          {
            q: '誤りを直しなさい。She can plays the violin.',
            a: 'She can play the violin.',
            explanation:
              'She can play the violin. can などの助動詞のあとは必ず動詞の原形が来るからである。主語が3人称単数でも、助動詞があれば s はつけない。can plays, will goes, must takes などはすべて同じまちがいで、助動詞を見たら後ろは原形と決めてよい。',
          },
        ],
        checkpoints: [
          '助動詞のあとは原形（×She can plays、×He will is）',
          '助動詞を2つ並べない（×He will can swim. → He will be able to swim.）',
        ],
      },
      {
        label: 'have to ／ 依頼・許可の言い方',
        locked: true,
        formula: 'have（has）to ＋ 原形＝〜しなければならない　／　do not have to ＋ 原形＝〜しなくてよい　／　May I 〜? ＝〜してもいいですか　／　Could you 〜? ＝〜してくれますか',
        explanation: 'have to は must とほぼ同じ「〜しなければならない」ですが、主語が3人称単数なら has to、過去なら had to と形が変わるのが便利なところです。気をつけたいのは打ち消したときで、must not は「してはいけない」という禁止、do not have to は「しなくてよい」という不要で、意味が正反対になります。人に何かをたのむ・許可を求めるときは May I 〜? / Can I 〜?（〜してもいいですか）、Could you 〜? / Will you 〜?（〜してくれますか）を使います。',
        steps: [
          '「〜しなければならない」→ have to、主語が3人称単数なら has to、過去は had to',
          '「〜しなくてよい」→ do（does）not have to',
          '「〜してはいけない」→ must not（意味が正反対なので注意）',
          '許可を求める → May I 〜? / Can I 〜?（答えは Sure. / Of course. / I am sorry, but 〜.）',
          '依頼する → Could you 〜? / Will you 〜?（Could のほうがていねい）',
        ],
        example: {
          q: '「窓を開けてもいいですか」を英語に直しなさい。',
          a: 'May I open the window?（答えは Sure. / Of course.）',
        },
        quiz: [
          {
            q: '「私は皿を洗わなければなりません」を英語に直しなさい。',
            a: 'I have to wash the dishes.',
            explanation:
              'I have to wash the dishes.（I must wash the dishes. でも同じ意味）。have to は「〜しなければならない」を表す言い方で、to のあとは原形が来る。must とのいちばん大きなちがいは打ち消したときで、must not は「してはいけない」という禁止、do not have to は「しなくてよい」という不要になり、意味が正反対になるからである。ここが最も問われる。',
          },
          {
            q: 'You do not have to come early. を日本語に直しなさい。',
            a: 'あなたは早く来る必要はありません。',
            explanation:
              'あなたは早く来る必要はありません。do not have to は「〜する必要はない」という意味で、禁止ではないからである。「来てはいけない」と言いたいなら You must not come early. になる。肯定文では must と have to はほぼ同じ意味なのに、打ち消すと意味が正反対になる点が最も問われる。',
          },
          {
            q: '誤りを直しなさい。She has to studies English every day.',
            a: 'She has to study English every day.',
            explanation:
              'She has to study English every day. to のあとは必ず動詞の原形が来るからである。主語が3人称単数であることは has がすでに表しているので、studies にすると s が二重になる。have to / has to のどちらでも、後ろは原形。',
          },
        ],
        checkpoints: [
          'must not（禁止）と do not have to（不要）は意味が正反対',
          'have to / has to のあとは原形（×has to studies）',
        ],
      },
    ],
  },

  // ================= 比較 =================
  {
    title: '比較',
    studyPeriod: '中2',
    intro: '2つをくらべるなら比較級、3つ以上で一番なら最上級、同じくらいなら as 〜 as。「くらべる相手」を表す than・in・of を落とさないことが得点のカギです。',
    items: [
      {
        label: '比較級・最上級',
        locked: true,
        formula: '比較級：形容詞・副詞 ＋ er ＋ than 〜　／　最上級：the ＋ 形容詞・副詞 ＋ est ＋ in（of）〜',
        explanation: '2つをくらべて「〜より…だ」と言うときは比較級に than をつけます。3つ以上の中で「いちばん…だ」と言うときは最上級にして前に the を置きます。beautiful・interesting・difficult のようなつづりの長い語は、er / est ではなく前に more / the most を置きます。',
        steps: [
          '短い語 → er / est（tall → taller → the tallest）',
          '子音＋y は y を i に変える（easy → easier → the easiest）',
          '長い語 → more / the most（famous → more famous → the most famous）',
          '比較級には than、最上級には the と in（場所・範囲）／ of（仲間の数）を忘れない',
        ],
        example: {
          q: '「この本はあの本より面白い」を英語に直しなさい。',
          a: 'This book is more interesting than that one.（interesting は長い語なので more）',
        },
        quiz: [
          {
            q: '「富士山は日本でいちばん高い山です」を英語に直しなさい。',
            a: 'Mt. Fuji is the highest mountain in Japan.',
            explanation:
              'Mt. Fuji is the highest mountain in Japan. 最上級には the をつける。「いちばん」はただ一つに決まるものなので、特定を表す the が必要になるからである。範囲を示すときは、場所や集団なら in（in Japan, in my class）、「〜の中で」と数えられるものを並べるなら of（of the five）を使う。',
          },
          {
            q: 'かっこの語を正しい形に直しなさい。He runs ( fast ) than Ken.',
            a: 'faster',
            explanation: 'than があるので比較級。fast は短い語なので faster です。',
          },
          {
            q: '誤りを直しなさい。My bag is more heavier than yours.',
            a: 'My bag is heavier than yours.',
            explanation: 'more と er を重ねてはいけません。heavy は短い語なので heavier だけにします。than を落とさないことも大切です。',
          },
        ],
        checkpoints: [
          'more と er を重ねない（×more heavier）',
          '比較級には than、最上級には the。than を書き落とすミスが非常に多い',
          '「〜の中で」は範囲なら in（in my class）、仲間の数なら of（of the five）',
        ],
      },
      {
        label: 'as 〜 as と不規則な比較変化',
        locked: true,
        formula: 'as ＋ 原級 ＋ as A ＝ Aと同じくらい〜　／　not as ＋ 原級 ＋ as A ＝ Aほど〜ない',
        explanation: '同じくらいだと言うときは as と as ではさみます。このとき中に入れるのは比較級ではなく、変化していない形（原級）です。not をつけると「Aほど〜ない」となり、比較級を使った文に書きかえられます。good / well、bad、many / much は形がまったく変わる不規則変化なので丸暗記しましょう。',
        steps: [
          '「同じくらい」→ as ＋ 原級 ＋ as（間は必ず原級）',
          '「〜ほど…ない」→ not as ＋ 原級 ＋ as',
          'good / well → better → the best、bad → worse → the worst',
          'many / much → more → the most、little → less → the least',
        ],
        example: {
          q: '「彼は私と同じくらい速く走ります」を英語に直しなさい。',
          a: 'He runs as fast as I do.',
        },
        quiz: [
          {
            q: '「この箱はあの箱ほど重くありません」を英語に直しなさい。',
            a: 'This box is not as heavy as that one.',
            explanation:
              'This box is not as heavy as that one. not as 〜 as … は「…ほど〜ではない」という意味で、比べて劣っていることを表すからである。同じ内容を比較級で言うと That box is heavier than this one.（あの箱のほうが重い）となる。どちらが重いのかを取りちがえないよう、書きかえて確かめるとよい。',
          },
          {
            q: 'good の比較級と最上級を答えなさい。',
            a: 'better, best',
            explanation:
              'better, best。er / est をつけずに形そのものが変わる不規則変化だからである。よく使う語ほど古い形が残りやすく、good もその一つ。well（じょうずに・元気で）も同じく better / best になるので、2つまとめて覚える。bad は worse / worst、many と much は more / most。',
          },
          {
            q: '誤りを直しなさい。She can swim as faster as Tom.',
            a: 'She can swim as fast as Tom.',
            explanation:
              'She can swim as fast as Tom. as と as の間には、比較級ではなくもとの形（原級）を置くからである。as 〜 as は「同じくらい」と対等であることを表す言い方なので、差を表す比較級とはかみ合わない。er や more をつけてはいけない。',
          },
        ],
        checkpoints: [
          'as 〜 as の間は原級（×as faster as）',
          'good / well → better / best、bad → worse / worst は必ず覚える',
        ],
      },
    ],
  },

  // ================= 受動態 =================
  {
    title: '受動態（受け身）',
    studyPeriod: '中3前半',
    intro: '「〜される・〜されている」は be動詞 ＋ 過去分詞。ふつうの文の目的語を主語にひっくり返した形です。動詞を過去形ではなく過去分詞にすることと、時制は be動詞で表すことがポイントです。',
    items: [
      {
        label: '受動態の作り方',
        locked: true,
        formula: '主語 ＋ be動詞 ＋ 過去分詞 ＋ by 〜（〜によって…される）',
        explanation: '「だれかが何かをする」という文の、される側を主語にしたのが受動態です。Ken wrote the letter.（ケンが手紙を書いた）→ The letter was written by Ken.（手紙はケンによって書かれた）のように、目的語を先頭に出し、動詞を be動詞 ＋ 過去分詞に変え、元の主語を by のあとに置きます。過去のことかどうかは be動詞（is / was）で表すので、過去分詞の形は変わりません。',
        steps: [
          'もとの文の目的語を、新しい文の主語にする',
          '時制と新しい主語に合わせて be動詞を選ぶ（is / am / are / was / were）',
          '動詞を過去分詞にする（write → written、make → made、take → taken）',
          'もとの主語を by のあとに置く（I → by me のように目的格にする）',
        ],
        example: {
          q: '「この部屋は毎日そうじされます」を英語に直しなさい。',
          a: 'This room is cleaned every day.',
        },
        quiz: [
          {
            q: '「その手紙はケンによって書かれました」を英語に直しなさい。',
            a: 'The letter was written by Ken.',
            explanation: '過去のことなので be動詞は was。write の過去分詞は written です。',
          },
          {
            q: 'かっこに入る語を答えなさい。English ( ) spoken in Australia.（オーストラリアでは英語が話されています）',
            a: 'is',
            explanation: '主語 English は単数で、今のことなので is を使います。',
          },
          {
            q: '誤りを直しなさい。This picture was take by my father.',
            a: 'This picture was taken by my father.',
            explanation:
              'This picture was taken by my father. 受動態は be動詞 ＋ 過去分詞で作るので、原形の take ではなく過去分詞の taken を使うからである。take → took → taken の3番目の形。不規則動詞は3つの形をひとそろいで覚えておかないと、ここでまちがえる。',
          },
        ],
        checkpoints: [
          'be動詞のあとは原形でも過去形でもなく過去分詞（×was take、×was took）',
          '時制は be動詞で表す（現在 is / are、過去 was / were）',
          'by のあとの代名詞は目的格（by me / by him / by them）',
        ],
      },
      {
        label: '受動態の否定文・疑問文と by の省略',
        locked: true,
        formula: 'be動詞 ＋ not ＋ 過去分詞　／　Be動詞 ＋ 主語 ＋ 過去分詞 〜?　／　だれがしたか分からない・言う必要がないときは by 〜 を省略',
        explanation: '受動態は be動詞の文なので、否定文は be動詞のあとに not を入れ、疑問文は be動詞を文頭に出すだけです。do / does は使いません。また by 〜 は、行った人が分からないときや言わなくても分かるときは省くのがふつうです。be covered with（〜におおわれている）、be known to（〜に知られている）、be made of / from（〜でできている）のように by 以外の前置詞を使う決まり文句もあります。',
        steps: [
          '否定文 → be動詞 ＋ not ＋ 過去分詞（is not used / was not built）',
          '疑問文 → Be動詞 ＋ 主語 ＋ 過去分詞 〜?、答えは Yes, it is. / No, it was not.',
          '疑問詞がある文は 疑問詞 ＋ be動詞 ＋ 主語 ＋ 過去分詞 〜?',
          'by 〜 は、だれがしたか不明・重要でないときは書かない',
        ],
        example: {
          q: '「この寺はいつ建てられましたか」を英語に直しなさい。',
          a: 'When was this temple built?（だれが建てたかは問題でないので by 〜 は不要）',
        },
        quiz: [
          {
            q: '「この国では英語は話されていません」を英語に直しなさい。',
            a: 'English is not spoken in this country.',
            explanation:
              'English is not spoken in this country. 受動態の否定は、be動詞のあとに not を置いて作るからである。文の中心になっている動詞は be動詞なので、does not や do not は使わない。「be動詞の文は not を be動詞の後ろに」という原則がそのまま当てはまる。',
          },
          {
            q: 'かっこに入る語を答えなさい。The mountain is covered ( ) snow.（その山は雪におおわれています）',
            a: 'with',
            explanation:
              'with。受動態では動作をした相手を by で示すのがふつうだが、be covered with のように by 以外を使う決まった言い方がいくつかあるからである。雪は山をおおう動作をした相手というより、おおっている材料にあたる、と考えると納得しやすい。be interested in, be known to, be made of なども同じ仲間。',
          },
          {
            q: '誤りを直しなさい。Was this letter wrote by Tom?',
            a: 'Was this letter written by Tom?',
            explanation:
              'Was this letter written by Tom? 受動態は be動詞 ＋ 過去分詞なので、過去形の wrote ではなく過去分詞の written を使うからである。write → wrote → written の3番目の形。過去形と過去分詞が別の形になる動詞では、ここが最も問われる。',
          },
        ],
        checkpoints: [
          '受動態の否定・疑問に do / does / did は使わない（×Does this room cleaned 〜）',
          'be covered with・be known to・be made of など、by 以外の前置詞をとる表現がある',
        ],
      },
    ],
  },

  // ================= 不定詞・動名詞 =================
  {
    title: '不定詞と動名詞',
    studyPeriod: '中2',
    intro: 'to ＋ 原形（不定詞）と 動詞のing形（動名詞）は、どちらも動詞を名詞や修飾語として使うための道具です。まず不定詞の3つの意味を見分けられるようにし、次に「to だけをとる動詞・ing だけをとる動詞」を覚えましょう。',
    items: [
      {
        label: '不定詞の3用法',
        locked: true,
        formula: 'to ＋ 動詞の原形　→　名詞的「〜すること」／形容詞的「〜するための」／副詞的「〜するために・〜して」',
        explanation: '不定詞は to のあとに原形を置くだけの形ですが、文のどこに置かれるかで意味が3つに分かれます。①名詞的用法は「〜すること」で、want や like のあとや主語になります。②形容詞的用法は名詞のすぐ後ろに置いて「〜するための」と前の名詞を説明します。③副詞的用法は「〜するために」（目的）や「〜して…だ」（感情の原因）を表します。',
        steps: [
          'to ＋ 原形のかたまりを見つける',
          '動詞の目的語や主語になっていれば名詞的用法「〜すること」',
          '直前に名詞があり、その名詞を説明していれば形容詞的用法「〜するための」',
          'それ以外で「なぜ・何のために」を表していれば副詞的用法「〜するために」',
        ],
        example: {
          q: '「私は医者になりたい」を英語に直しなさい。',
          a: 'I want to be a doctor.（want のあとなので名詞的用法）',
        },
        quiz: [
          {
            q: '「彼は何か飲むものがほしい」を英語に直しなさい。',
            a: 'He wants something to drink.',
            explanation:
              'He wants something to drink. to drink が something を後ろから説明している、形容詞的用法の不定詞。英語では、語句のまとまりで名詞を説明するときは後ろに置く決まりだからである。something cold to drink のように形容詞がつく場合も、something → cold → to drink の順になる。',
          },
          {
            q: '「私は友だちに会うために東京へ行きました」を英語に直しなさい。',
            a: 'I went to Tokyo to see my friend.',
            explanation: '「〜するために」という目的を表す副詞的用法です。',
          },
          {
            q: '誤りを直しなさい。I like to playing the piano.',
            a: 'I like to play the piano.（または I like playing the piano.）',
            explanation:
              'I like to play the piano.（または I like playing the piano.）。to のあとは必ず原形が来るので、to と ing を同時に使うことはできないからである。like は to 〜 と ing のどちらでもよい動詞なので、どちらか一方に決めて書く。',
          },
        ],
        checkpoints: [
          'to のあとは必ず原形（×to playing、×to played）',
          'something / anything を説明する不定詞は後ろに置く（something cold to drink の語順）',
        ],
      },
      {
        label: 'too 〜 to と It is 〜 for A to 〜',
        locked: true,
        formula: 'too ＋ 形容詞・副詞 ＋ to ＋ 原形 ＝ …すぎて〜できない　／　It is ＋ 形容詞 ＋ for A ＋ to ＋ 原形 ＝ Aが〜するのは…だ',
        explanation: 'too 〜 to 〜 は「あまりに…なので〜できない」という意味で、not を使っていないのに打ち消しの意味になるのが特ちょうです。so 〜 that … cannot 〜 に書きかえられます。It is 〜 to 〜 の It には意味がなく、本当の主語は to 以下です。「だれにとって」を言いたいときは to の前に for A を入れます。',
        steps: [
          '「…すぎて〜できない」→ too ＋ 形容詞 ＋ to ＋ 原形',
          '書きかえは so ＋ 形容詞 ＋ that ＋ 主語 ＋ cannot ＋ 原形',
          '「〜することは…だ」→ It is ＋ 形容詞 ＋ to ＋ 原形（It は形だけの主語）',
          '「Aにとって」を足すときは to の直前に for A を置く',
        ],
        example: {
          q: '「彼は忙しすぎて私たちを手伝えません」を英語に直しなさい。',
          a: 'He is too busy to help us.（＝He is so busy that he cannot help us.）',
        },
        quiz: [
          {
            q: '「早起きすることは私には難しい」を英語に直しなさい。',
            a: 'It is difficult for me to get up early.',
            explanation:
              'It is difficult for me to get up early. この It は形だけの主語で、本当の主語は to get up early のほうである。英語では長い主語を文の先頭に置くと読みにくいので、いったん It で受けておいて、中身をあとから示すからである。「〜にとって」は for で表す。',
          },
          {
            q: '「私はとてもつかれていて歩けませんでした」を too 〜 to 〜 を使って英語に直しなさい。',
            a: 'I was too tired to walk.',
            explanation:
              'I was too tired to walk. too は「〜すぎる」という意味で、程度をこえてしまってできない、という含みを持つからである。だから not がなくても「歩けなかった」という打ち消しの意味になる。書きかえると I was so tired that I could not walk. となる。',
          },
          {
            q: '誤りを直しなさい。It is easy of me to swim.',
            a: 'It is easy for me to swim.',
            explanation:
              'It is easy for me to swim. 「〜にとって」を表すのは for だからである。of を使うのは kind, nice, careless, foolish のように、人の性質を表す形容詞のときだけで（It is kind of you to help me.）、easy や difficult は for を使う。',
          },
        ],
        checkpoints: [
          'too 〜 to 〜 は not がなくても「〜できない」という意味',
          '「Aにとって」は for A（×of me）',
        ],
      },
      {
        label: '動名詞と不定詞の使い分け',
        locked: true,
        formula: '動詞のing形 ＝「〜すること」　／　enjoy・finish・stop は ing だけ　／　want・hope・decide は to だけ',
        explanation: '動詞のing形も「〜すること」という意味の名詞として使えます。不定詞との大きなちがいは、後ろにどちらを置けるかが動詞ごとに決まっていることです。enjoy・finish・stop・practice は ing形だけ、want・hope・decide・wish は to ＋ 原形だけをとります。like・begin・start はどちらでもかまいません。また、前置詞（at・of・about・without など）の後ろに動詞を置くときは必ず ing形にします。',
        steps: [
          'ing形だけ → enjoy / finish / stop / practice / keep',
          'to ＋ 原形だけ → want / hope / decide / wish / promise',
          'どちらでもよい → like / love / begin / start',
          '前置詞のあとは必ず ing形（good at playing、Thank you for coming）',
        ],
        example: {
          q: '「私は本を読むことを楽しみました」を英語に直しなさい。',
          a: 'I enjoyed reading books.（enjoy は ing形だけをとる）',
        },
        quiz: [
          {
            q: '「彼は話すのをやめました」を英語に直しなさい。',
            a: 'He stopped talking.',
            explanation:
              'He stopped talking. stop のあとに動名詞（ing形）を置くと「〜するのをやめる」になる。動名詞はすでにしていることを表すので、それをやめる、という意味になるからである。なお stop to talk とすると「話すために立ち止まる」という別の意味になるので、使い分けに注意する。',
          },
          {
            q: 'かっこの語を正しい形に直しなさい。She finished ( do ) her homework.',
            a: 'doing',
            explanation:
              'doing。finish のあとには動名詞（ing形）しか置けないからである。finish は「すでに始めていたことを終える」という意味なので、これからすることを表す to 不定詞とはかみ合わない。enjoy, stop, finish は ing形だけ、と3つまとめて覚える。',
          },
          {
            q: '誤りを直しなさい。I want going to America.',
            a: 'I want to go to America.',
            explanation:
              'I want to go to America. want のあとは to ＋ 原形だけで、ing形は置けないからである。want は「これからしたい」という、まだしていないことを表す動詞なので、これから先を指す to 不定詞とかみ合う。want, hope, decide は to 不定詞だけ。',
          },
        ],
        checkpoints: [
          'enjoy / finish / stop のあとは ing（×enjoy to read）',
          'want / hope / decide のあとは to ＋ 原形（×want going）',
          '前置詞のあとの動詞は必ず ing形（×good at play）',
        ],
      },
    ],
  },

  // ================= 分詞・関係代名詞 =================
  {
    title: '分詞と関係代名詞',
    studyPeriod: '中3前半',
    intro: '名詞をうしろから長く説明する方法が2つあります。動詞1語のかたまりで説明するのが分詞、主語と動詞のある文で説明するのが関係代名詞です。どちらも「名詞 ＋ 説明」の順で、日本語とは逆になります。',
    items: [
      {
        label: '分詞の後置修飾（現在分詞・過去分詞）',
        locked: true,
        formula: '名詞 ＋ 現在分詞（ing）〜 ＝「〜している名詞」　／　名詞 ＋ 過去分詞 〜 ＝「〜された名詞」',
        explanation: '動詞のing形や過去分詞は、名詞を説明する飾りとしても使えます。名詞が「している」側なら現在分詞（ing）、「される」側なら過去分詞です。分詞が2語以上のかたまりになっているときは名詞のうしろに置き、1語だけのときは名詞の前に置きます（a sleeping baby / a broken window）。',
        steps: [
          '説明される名詞が「している」のか「される」のかを考える',
          'している → ing形、される → 過去分詞を選ぶ',
          '2語以上のかたまりなら名詞のうしろに置く',
          '1語だけなら名詞の前に置く',
        ],
        example: {
          q: '「向こうで走っている男の子は私の弟です」を英語に直しなさい。',
          a: 'The boy running over there is my brother.',
        },
        quiz: [
          {
            q: '「これは100年前に建てられた家です」を英語に直しなさい。',
            a: 'This is a house built one hundred years ago.',
            explanation: '家は「建てられた」側なので過去分詞 built を使い、かたまりなので house のうしろに置きます。',
          },
          {
            q: 'かっこの語を正しい形に直しなさい。Look at the girl ( play ) the piano.',
            a: 'playing',
            explanation: '女の子が「ひいている」側なので現在分詞 playing です。',
          },
          {
            q: '誤りを直しなさい。I have a book write in English.',
            a: 'I have a book written in English.',
            explanation: '本は「書かれた」側なので、原形ではなく過去分詞 written を使います。',
          },
        ],
        checkpoints: [
          '「している」は ing、「される」は過去分詞',
          'かたまりは名詞のうしろ、1語なら名詞の前',
        ],
      },
      {
        label: '関係代名詞 who / which / that',
        locked: true,
        formula: '先行詞が人 → who（that）／ものや動物 → which（that）　／　後ろが「動詞」なら主格、「主語 ＋ 動詞」なら目的格',
        explanation: '関係代名詞は、2つの文をつないで名詞をうしろから説明するための語です。説明される名詞（先行詞）が人なら who、ものなら which、どちらにも that が使えます。関係代名詞のすぐ後ろに動詞が来ていれば主格、主語 ＋ 動詞が来ていれば目的格です。目的格の who(m) / which / that は省略できますが、主格は省略できません。',
        steps: [
          '説明したい名詞（先行詞）を決め、そのすぐ後ろに関係代名詞を置く',
          '先行詞が人なら who、ものなら which、どちらでも that',
          '後ろに動詞が続く → 主格（省略できない）',
          '後ろに主語 ＋ 動詞が続く → 目的格（省略できる）',
          '主格のときは、動詞を先行詞の数に合わせる',
        ],
        example: {
          q: '「私には東京に住んでいるおじがいます」を英語に直しなさい。',
          a: 'I have an uncle who lives in Tokyo.（主格。先行詞が単数なので lives）',
        },
        quiz: [
          {
            q: '「これは私が昨日買った本です」を英語に直しなさい。',
            a: 'This is the book which I bought yesterday.（which は省略してもよい）',
            explanation: '後ろが I bought と「主語 ＋ 動詞」なので目的格です。that でもよく、省略もできます。',
          },
          {
            q: 'かっこに入る語を答えなさい。I know a boy ( ) can speak French.',
            a: 'who',
            explanation: '先行詞 a boy は人で、後ろに動詞 can speak が続くので主格の who です。',
          },
          {
            q: '誤りを直しなさい。This is the book which I bought it yesterday.',
            a: 'This is the book which I bought yesterday.',
            explanation: '目的格の関係代名詞がすでに「その本を」の役をしているので、it を残してはいけません。',
          },
        ],
        checkpoints: [
          '目的格の関係代名詞のあとに it / him などを残さない（×which I bought it）',
          '主格のあとの動詞は先行詞の数に合わせる（a boy who lives 〜）',
          '省略できるのは目的格だけ。主格は省略できない',
        ],
      },
    ],
  },

  // ================= 接続詞・間接疑問文 =================
  {
    title: '接続詞と間接疑問文',
    studyPeriod: '中3前半',
    intro: '文と文をつなぐのが接続詞です。when・if の中では未来のことも現在形にする、疑問文を文の中に入れると語順が変わる、という2つのルールが入試の定番です。',
    items: [
      {
        label: '接続詞 that / when / if / because',
        locked: true,
        formula: 'I think that 〜（〜だと思う）／ when 〜（〜のとき）／ if 〜（もし〜なら）／ because 〜（〜だから）',
        explanation: 'that は「〜ということ」というかたまりを作り、think・know・hope などのあとでよく使われ、省略されることも多いです。when・if・because は文の前にも後ろにも置けます。前に置いたときは、区切りにコンマを入れます。大事なルールとして、when や if が作るかたまりの中では、未来のことでも will を使わず現在形にします。',
        steps: [
          '「〜ということ」→ that（省略可）',
          '「〜のとき」→ when、「もし〜なら」→ if、「〜だから」→ because',
          'かたまりを文の前に置いたら、その後ろにコンマを打つ',
          'when・if の中では未来のことも現在形で書く',
        ],
        example: {
          q: '「私は彼が正しいと思います」を英語に直しなさい。',
          a: 'I think that he is right.（that は省略して I think he is right. でもよい）',
        },
        quiz: [
          {
            q: '「私が家に帰ったとき、母は料理をしていました」を英語に直しなさい。',
            a: 'When I came home, my mother was cooking.',
            explanation: 'when のかたまりを前に置いたので、そのあとにコンマを打ちます。',
          },
          {
            q: 'かっこに入る語を答えなさい。I was late ( ) I missed the bus.（バスに乗りおくれたので遅刻しました）',
            a: 'because',
            explanation: '理由を表すので because です。Why 〜? に答えるときにも使います。',
          },
          {
            q: '誤りを直しなさい。If it will be sunny tomorrow, I will go fishing.',
            a: 'If it is sunny tomorrow, I will go fishing.',
            explanation:
              'If it is sunny tomorrow, I will go fishing. if や when が作るかたまりの中では、未来のことでも will を使わず現在形にする決まりだからである。条件や時を表すかたまりは、いつのことかを主節のほうが決めているので、重ねて未来を示す必要がない。主節のほうには will を使ってよい。',
          },
        ],
        checkpoints: [
          'when・if の中は未来でも現在形（×If it will rain 〜）',
          'かたまりを前に置いたときだけコンマを打つ',
        ],
      },
      {
        label: '間接疑問文',
        locked: true,
        formula: '疑問詞 ＋ 主語 ＋ 動詞（疑問文の語順にしない）',
        explanation: '疑問文を I know 〜 や Tell me 〜 の後ろに入れると、もう質問ではなくなるので、ふつうの文と同じ「主語 ＋ 動詞」の語順にもどします。Where does he live? が I do not know where he lives. になるように、do / does / did は消え、その代わり動詞に s をつけたり過去形にしたりします。疑問詞がない疑問文を入れるときは if / whether（〜かどうか）を使います。',
        steps: [
          '入れたい疑問文を用意する（Where does he live?）',
          '疑問詞をそのまま残し、後ろを 主語 ＋ 動詞 の順に直す',
          'do / does / did を消し、その働きを動詞の形に移す（live → lives）',
          '疑問詞がないときは if / whether（〜かどうか）でつなぐ',
          '文全体が疑問文でなければ、最後はクエスチョンマークではなくピリオド',
        ],
        example: {
          q: '「私は彼がどこに住んでいるか知りません」を英語に直しなさい。',
          a: 'I do not know where he lives.',
        },
        quiz: [
          {
            q: '「彼女が何をほしがっているか教えてください」を英語に直しなさい。',
            a: 'Please tell me what she wants.',
            explanation:
              'Please tell me what she wants. 疑問文を文の一部に組みこむと、疑問文の語順ではなく「疑問詞 ＋ 主語 ＋ 動詞」の順になるからである。What does she want? という形のまま入れてはいけない。does が消えるので、動詞に3人称単数の s をつけ忘れないこと。',
          },
          {
            q: '語を正しい順にならべなさい。( who / is / know / I / she )',
            a: 'I know who she is.',
            explanation:
              'I know who she is. 疑問詞 who のあとは she is と「主語 ＋ 動詞」の順にする。文の一部になった疑問文は、もう問いかけではなく名詞のかたまりとしてはたらくので、ふつうの語順にもどるからである。Who is she? の語順のまま入れないよう注意する。',
          },
          {
            q: '誤りを直しなさい。I do not know where does he live.',
            a: 'I do not know where he lives.',
            explanation:
              'I do not know where he lives. 文の中に入れた疑問文は、疑問文の語順にしないからである。does を消して「where ＋ he ＋ lives」の順にする。このとき does が消えるぶん、3人称単数の s は動詞のほうにつけなければならない。消し忘れと、つけ忘れの両方が起きやすい。',
          },
        ],
        checkpoints: [
          '文の中では 疑問詞 ＋ 主語 ＋ 動詞（×I know where is he）',
          'do / does / did は消えるが、その分を動詞の形で表す（lives・lived）',
        ],
      },
    ],
  },

  // ================= 会話表現 =================
  {
    title: '頻出の会話表現',
    studyPeriod: '中3秋〜直前',
    intro: 'リスニングや対話文の空所補充では、決まった言い方がそのまま出ます。場面ごとに「ひとかたまり」で覚えてしまうのがいちばんの近道です。',
    items: [
      {
        label: '場面別の決まり文句',
        locked: true,
        formula: '店：May I help you? ／ 電話：This is Ken. May I speak to Tom? ／ さそう：How about ＋ ing形? ／ 道案内：Could you tell me how to get to 〜?',
        explanation: '会話文では、場面ごとに使う表現がほぼ決まっています。店では店員が May I help you?（いらっしゃいませ）と言い、客は I am looking for 〜.（〜をさがしています）や I am just looking.（見ているだけです）と答えます。電話では自分を I ではなく This is 〜 と名乗るのが決まりです。さそう表現の How about・Thank you for のあとは前置詞の後ろなので必ず ing形になります。',
        steps: [
          '店で：May I help you? → Yes, please. I am looking for a cap. / No, thank you. I am just looking.',
          '電話で：Hello. This is Ken. May I speak to Tom? → Speaking. / Just a minute, please.',
          'さそう：Shall we go? / How about going to the movies? → That sounds good.',
          '道をたずねる：Could you tell me how to get to the station? → Go straight and turn right at the second corner.',
          '体調・あいさつ：What is wrong? / That is too bad. / Here you are.（はい、どうぞ）',
        ],
        example: {
          q: '「駅への行き方を教えていただけますか」を英語に直しなさい。',
          a: 'Could you tell me how to get to the station?',
        },
        quiz: [
          {
            q: '電話で「もしもし、ケンです。トムさんをお願いします」を英語に直しなさい。',
            a: 'Hello. This is Ken. May I speak to Tom?',
            explanation:
              'Hello. This is Ken. May I speak to Tom? 電話では I am Ken. とは言わず This is Ken. と名乗る。相手に姿が見えず、声だけが届いている場面なので、「こちらは〜です」と自分を指し示す言い方をするからである。相手を確かめるときも Are you Tom? ではなく Is this Tom? になる。',
          },
          {
            q: '「映画に行くのはどうですか」を How about を使って英語に直しなさい。',
            a: 'How about going to the movies?',
            explanation:
              'How about going to the movies? How about のあとは名詞か動名詞（ing形）を置く。about は前置詞で、前置詞のあとには名詞のはたらきをする語しか来られないからである。to go とはできない。さそいの返事は That sounds good. / Sure. などになる。',
          },
          {
            q: '誤りを直しなさい。How about to go shopping?',
            a: 'How about going shopping?',
            explanation: 'about は前置詞なので、後ろの動詞は必ず ing形にします。Thank you for coming. も同じ理由です。',
          },
        ],
        checkpoints: [
          'How about / Thank you for のあとは ing形（×How about to go）',
          '電話で名乗るときは This is 〜（×I am 〜）',
        ],
      },
    ],
  },
];
