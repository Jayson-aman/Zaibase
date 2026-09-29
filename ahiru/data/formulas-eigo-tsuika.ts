import type { FormulaSection } from './formulas-types';

// ───────────────────────────────────────────────────────────────
// 英語（中学の基礎〜標準）の追加項目
// 名詞・疑問詞・前置詞・つづり規則・不規則動詞・会話でよく使う型など、
// 既存の eigo / eigo-koko と切り口が重ならないものだけを集めた。
// examType は付けない（中学受験・高校受験の両方で使う）。
// ───────────────────────────────────────────────────────────────

export const eigoTsuikaFormulas: FormulaSection[] = [
  // ================= 名詞・代名詞まわり =================
  {
    title: '名詞・代名詞まわりの基本',
    studyPeriod: '中1',
    intro: '英語は名詞の形（数・所有）と、動詞の s のつけ方でまちがえやすい教科です。ここでは「なぜその形になるのか」を先に知って、規則で覚えましょう。',
    items: [
      {
        label: '名詞の複数形のつくり方',
        locked: true,
        formula: 'ふつうは s ／ s・x・ch・sh で終わる → es ／ 子音字＋y → y を ies ／ f・fe → ves',
        explanation: '2つ以上のものを言うときは名詞のおわりを変えます。bus に s だけつけると「バスス」と発音しにくいので、es をつけて言いやすくしています。city のように子音字＋y のときは、y を i に変えて es をつけます。ただし boy のように母音字＋y のときは、そのまま s だけです。',
        steps: [
          'ふつうの名詞 → そのまま s（book → books）',
          'おわりが s・x・ch・sh → es（bus → buses、box → boxes、watch → watches、dish → dishes）',
          'おわりが 子音字＋y → y をとって ies（city → cities、baby → babies）',
          'おわりが 母音字＋y → そのまま s（boy → boys、day → days）',
          'おわりが f・fe → f・fe を ves に（knife → knives、leaf → leaves）',
          '形が変わる名詞は覚える（man → men、woman → women、child → children、foot → feet、tooth → teeth）。sheep・fish は同じ形',
        ],
        example: {
          q: '次の名詞を複数形にしなさい。(1) box (2) baby (3) knife',
          a: '(1) boxes（x で終わるので es）(2) babies（子音字 b ＋y なので ies）(3) knives（fe は ves）',
        },
        quiz: [
          {
            q: 'city の複数形を答えなさい。',
            a: 'cities',
            explanation: 'city は最後が子音字の t ＋y です。子音字＋y の名詞は、y を i に変えて es をつけるので cities になります。',
          },
          {
            q: 'watch の複数形を答えなさい。',
            a: 'watches',
            explanation: 'watch は ch で終わります。s だけつけると発音しにくいため、es をつけます。だから watches です。',
          },
          {
            q: 'child の複数形を答えなさい。',
            a: 'children',
            explanation: 'child は s をつけるふつうの規則にあてはまらない、形が変わる名詞です。そのため、children という形をそのまま覚えます。',
          },
        ],
        checkpoints: [
          '子音字＋y は ies、母音字＋y は s だけ（cities と boys のちがい）',
          'man・woman・child・foot・tooth は形が変わる。sheep・fish は形が同じ',
          '複数形の発音も s・es で変わる（books は「ス」、dogs は「ズ」、buses は「イズ」）',
        ],
      },
      {
        label: 'some・any・many・much・a lot of の使い分け',
        locked: true,
        formula: '数えられる名詞 → many ／ 数えられない名詞 → much ／ 肯定文 → some ／ 否定文・疑問文 → any ／ どちらにも a lot of',
        explanation: 'many は「数」の多さ、much は「量」の多さを表します。数えられる名詞は1つ2つと数えるので many、水や時間のように数えられないものは量ではかるので much を使います。some は「いくつか」、any は「ひとつも（ない）・いくらか（あるか）」という意味で、否定や疑問では any になります。a lot of は数にも量にも使える便利な言い方です。',
        steps: [
          'まず名詞が数えられるか（books）、数えられないか（water・time）を見分ける',
          '数えられる → many ＋ 複数形、数えられない → much ＋ そのままの形',
          '肯定文なら some、否定文・疑問文なら any',
          'ただし、ものをすすめるときやお願いする疑問文（Would you like some tea?）は some を使う',
          'どちらか迷ったら a lot of を使えば数にも量にも使える',
        ],
        example: {
          q: 'かっこに入る語を答えなさい。(1) I do not have ( ) money. (2) I have ( ) friends in Osaka.',
          a: '(1) much（money は数えられない）(2) many または a lot of（friends は数えられる複数形）。この形なら many',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。Do you have ( ) questions?（any か some）',
            a: 'any',
            explanation: 'これは疑問文なので any を使います。疑問文や否定文では「ひとつでもあるか」を聞くため any になるのが決まりです。',
          },
          {
            q: 'かっこに入る語を答えなさい。Would you like ( ) tea?（any か some）',
            a: 'some',
            explanation: '疑問文ですが、ものをすすめる言い方なので some を使います。相手が「ほしい」と答えることを期待しているためです。',
          },
          {
            q: 'かっこに入る語を答えなさい。We do not have ( ) time.（many か much）',
            a: 'much',
            explanation: 'time は数えられない名詞です。数えられない名詞の量をいうときは much を使うので、答えは much です。',
          },
        ],
        checkpoints: [
          'many ＋ 数えられる名詞の複数形、much ＋ 数えられない名詞',
          '否定文・疑問文は any、すすめる・お願いする疑問文は some',
          'a lot of は数えられても数えられなくても使える',
        ],
      },
      {
        label: 'this・that・these・those',
        locked: true,
        formula: '近く：this（1つ）・these（2つ以上）／ 遠く：that（1つ）・those（2つ以上）',
        explanation: '近くのものを指すのが this、遠くのものを指すのが that です。ものが2つ以上になると、this は these、that は those に形が変わります。あとに続く be動詞も、複数のものなら are になります。答えるときは this や that を it、these や those を they に言いかえます。',
        steps: [
          'ものが近くにあるか、遠くにあるかを見る',
          '1つなら近く this・遠く that、2つ以上なら近く these・遠く those',
          'be動詞を合わせる（This is 〜 / These are 〜）',
          '答えるときは it（1つ）・they（2つ以上）にする',
          'That is は短くして That\'s と書くこともできる',
        ],
        example: {
          q: 'What are those? と聞かれたときの答え方を書きなさい（ボールが遠くにある）。',
          a: 'They are balls.（those は複数なので they で答え、名詞も balls と複数形にする）',
        },
        quiz: [
          {
            q: 'Is this your bag? に「はい」と答える英文を書きなさい。',
            a: 'Yes, it is.',
            explanation: 'this は1つのものなので、答えるときは it に言いかえます。this のまま答えるのは誤りです。',
          },
          {
            q: 'Are these your books? に「はい」と答える英文を書きなさい。',
            a: 'Yes, they are.',
            explanation: 'these は複数のものなので、答えでは they に言いかえます。Are で聞かれたので、答えも are で返します。',
          },
          {
            q: 'かっこに入る語を答えなさい。( ) is my father over there.（向こうにいる人）',
            a: 'That',
            explanation: 'over there は「向こうに」という意味で、遠くの人を指します。遠くで1人なので that を使います。',
          },
        ],
        checkpoints: [
          'this → these、that → those と複数で形が変わる',
          '答えるときは this・that → it、these・those → they',
          '名詞も複数形にするのを忘れない（These are books.）',
        ],
      },
      {
        label: '三人称単数現在形の s と es',
        locked: true,
        formula: 'ふつう → s ／ s・x・ch・sh・o → es ／ 子音字＋y → ies ／ have → has',
        explanation: '主語が he・she・it・単数の名詞（3人称単数）で、今のことを言うとき、一般動詞に s か es をつけます。つけ方は名詞の複数形とほぼ同じ規則です。ただし have だけは haves ではなく has という特別な形です。否定文・疑問文では does が s を引き受けるので、動詞は原形にもどります。',
        steps: [
          '主語が he・she・it・単数か、動詞が現在のことかを確認する',
          'ふつうの動詞 → s（play → plays、like → likes）',
          'おわりが s・x・ch・sh・o → es（wash → washes、teach → teaches、go → goes、do → does）',
          'おわりが 子音字＋y → ies（study → studies、try → tries）',
          'おわりが 母音字＋y → s だけ（play → plays）',
          'have → has は特別な形として覚える',
        ],
        example: {
          q: '（ ）の語を正しい形にしなさい。My sister ( study ) English every day.',
          a: 'studies（主語が3人称単数で現在。study は子音字＋y なので ies）',
        },
        quiz: [
          {
            q: 'go を he が主語の現在の文で使うときの形を答えなさい。',
            a: 'goes',
            explanation: 'go は o で終わるので、s ではなく es をつけます。だから goes です。do も同じ規則で does になります。',
          },
          {
            q: 'have を she が主語の現在の文で使うときの形を答えなさい。',
            a: 'has',
            explanation: 'have は haves にならず、has という特別な形になります。規則にあてはまらない動詞なので、そのまま覚えるしかありません。',
          },
          {
            q: '誤りを直しなさい。Ken does not plays soccer.',
            a: 'Ken does not play soccer.',
            explanation: 'does not があるので、s の役目はすでに does が引き受けています。だから、あとの動詞は原形の play にもどします。',
          },
        ],
        checkpoints: [
          'go → goes、do → does、have → has、study → studies',
          'does not・Does のあとの動詞は原形（s をつけない）',
          '主語が I・you・複数のときは s をつけない',
        ],
      },
      {
        label: '「〜の」を表す \'s のつけ方',
        locked: true,
        formula: '人・名前 ＋ \'s ／ s で終わる複数 ＋ \' ／ s で終わらない複数 ＋ \'s',
        explanation: '英語では「〜の」を、名詞のうしろに \'s をつけて表します（Tom\'s bike）。すでに複数の s がついている名詞は、s をもう一度つけずに \' だけをつけます。children のように s で終わらない複数は、ふつうの名詞と同じ \'s です。「だれの」とたずねるときは whose を使います。',
        steps: [
          '「だれの〜」と持ち主を言いたいときは 持ち主 ＋ \'s ＋ 持ち物',
          '持ち主がふつうの単数 → \'s（my sister\'s book）',
          '持ち主が s で終わる複数 → \' だけ（the students\' room）',
          '持ち主が s で終わらない複数 → \'s（children\'s toys）',
          '持ち物が何か分かっているときは持ち物をはぶける（This is Tom\'s.）',
        ],
        example: {
          q: '「私の姉の自転車」を英語にしなさい。',
          a: "my sister's bike（持ち主 sister は単数なので 's）",
        },
        quiz: [
          {
            q: '「生徒たちの教室」を英語にしなさい。',
            a: "the students' classroom",
            explanation: "students はすでに複数の s がついています。s をもう一度つけないで、' だけをつけるのが決まりなので、students' になります。",
          },
          {
            q: '「子どもたちのおもちゃ」を英語にしなさい。',
            a: "children's toys",
            explanation: "children は s で終わらない複数の名詞です。そのため、ふつうの名詞と同じように 's をつけて children's にします。",
          },
          {
            q: '「これはだれのかさですか」を英語にしなさい。',
            a: 'Whose umbrella is this?',
            explanation: 'だれの持ち物かをたずねるときは whose を使い、すぐあとに持ち物の名詞を置きます。だから Whose umbrella is this? の語順になります。',
          },
        ],
        checkpoints: [
          "単数 → 's、s で終わる複数 → ' だけ、s で終わらない複数 → 's",
          'Whose ＋ 名詞 ＋ be動詞 ＋ 主語？ の語順',
          "Tom's のあとの名詞は、はぶいてもよい（This bag is Tom's.）",
        ],
      },
    ],
  },

  // ================= 疑問詞 =================
  {
    title: '疑問詞の使い分け',
    studyPeriod: '中1',
    intro: '疑問詞は「知りたいこと」によって選びます。答えの文がどんな形になるかを考えると、まちがえにくくなります。',
    items: [
      {
        label: 'who・what・which・whose の使い分け',
        locked: true,
        formula: 'who（だれ）・what（何）・which（どちら・どれ）・whose（だれの）',
        explanation: '疑問詞は、答えにほしい内容で選びます。人を聞くなら who、ものや事がらなら what です。which は「A と B のうちどちら」のように、選ぶはんいが決まっているときに使います。持ち主を聞くなら whose です。',
        steps: [
          '答えが「人」なら who',
          '答えが「もの・こと」で、選ぶはんいが決まっていなければ what',
          '選ぶはんいが決まっている（この中で・2つのうち）なら which',
          '「だれの」なら whose ＋ 名詞',
          '疑問詞は文のいちばん先頭に置き、あとは疑問文の語順（do / does ＋ 主語 ＋ 動詞）',
        ],
        example: {
          q: 'かっこに入る語を答えなさい。( ) do you like, tea or coffee? ─ I like tea.',
          a: 'Which（tea か coffee かという選ぶはんいがあるので which）',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。( ) is that boy? ─ He is my brother.',
            a: 'Who',
            explanation: '答えの He is my brother は人についての説明です。人を聞くときは who を使うので、Who is that boy? となります。',
          },
          {
            q: '「あなたは何が好きですか」を英語にしなさい。',
            a: 'What do you like?',
            explanation: 'ものを聞くので what を使います。what のあとは、疑問文の語順で do you like と続けるためです。',
          },
          {
            q: '「これはだれのペンですか」を英語にしなさい。',
            a: 'Whose pen is this?',
            explanation: '持ち主をたずねるので whose を使います。whose のあとには持ち物の名詞 pen が続くので、Whose pen is this? です。',
          },
        ],
        checkpoints: [
          'who は人、what はもの・こと、which は選ぶ、whose は持ち主',
          'Whose ＋ 名詞（Whose bag / Whose pen）を1セットで覚える',
          '疑問詞は文の先頭、そのあとは疑問文の語順',
        ],
      },
      {
        label: 'when・where・why・how の使い分け',
        locked: true,
        formula: 'when（いつ）・where（どこ）・why（なぜ）・how（どのように・どんな様子）',
        explanation: 'when は時、where は場所、why は理由、how は方法や様子を聞きます。why の答えは、Because 〜.（なぜなら〜だから）で始めるのが基本です。how は「どうやって」（方法）と「どんな調子か」（様子）の2通りの意味があります。',
        steps: [
          '答えが「時」なら when',
          '答えが「場所」なら where',
          '答えが「理由」なら why（答えは Because 〜.）',
          '答えが「方法・手段」または「調子・様子」なら how',
          '疑問詞のあとは疑問文の語順にする',
        ],
        example: {
          q: 'How do you go to school? に答えなさい（バスで通っている）。',
          a: 'I go to school by bus.（how は方法をたずねるので、手段 by bus で答える）',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。( ) do you live? ─ In Kyoto.',
            a: 'Where',
            explanation: '答えの In Kyoto は場所を表します。場所を聞くのは where なので、Where do you live? です。',
          },
          {
            q: 'かっこに入る語を答えなさい。( ) are you late? ─ Because I missed the bus.',
            a: 'Why',
            explanation: '答えが Because で始まり、理由を言っています。理由をたずねるのは why なので、Why are you late? になります。',
          },
          {
            q: 'How are you? に対する自然な答えを1つ書きなさい。',
            a: 'I am fine, thank you.',
            explanation: 'how は「どんな様子か」もたずねます。この場合は調子をたずねているので、fine や good など様子を答えるのが自然です。',
          },
        ],
        checkpoints: [
          'when は時、where は場所、why は理由、how は方法・様子',
          'why の答えは Because 〜. で始める',
          'How are you? は方法ではなく調子をたずねている',
        ],
      },
      {
        label: 'how ＋ 形容詞（How many・How much・How long など）',
        locked: true,
        formula: 'How many ＋ 複数形 ／ How much ＋ 数えられない名詞・ねだん ／ How long・old・tall・far・often',
        explanation: 'how のあとに形容詞や副詞をつけると、「どれくらい〜」と程度をたずねられます。数をたずねるのが How many、量やねだんをたずねるのが How much です。How long は長さ・期間、How often は回数（頻度）をたずねます。たずねたいことの単位を考えて選びましょう。',
        steps: [
          '何を数字で答えてほしいか考える',
          '数（個数・人数）→ How many ＋ 名詞の複数形',
          '量・ねだん → How much（How much is this pen? は「いくらですか」）',
          '長さ・期間 → How long、年れい → How old、高さ・身長 → How tall、距離 → How far、回数 → How often',
          'あとは疑問文の語順（How many books do you have?）',
        ],
        example: {
          q: '「あなたは本を何冊持っていますか」を英語にしなさい。',
          a: 'How many books do you have?（数をたずねるので How many ＋ 複数形）',
        },
        quiz: [
          {
            q: '「この本はいくらですか」を英語にしなさい。',
            a: 'How much is this book?',
            explanation: 'ねだんをたずねるときは How much を使います。「いくら」という意味なので、How much is 〜? が決まった形です。',
          },
          {
            q: '「あなたはどのくらいの頻度でテニスをしますか」を英語にしなさい。',
            a: 'How often do you play tennis?',
            explanation: '回数や頻度をたずねるのは how often です。often は「しばしば」の意味なので、その程度を聞く形になります。',
          },
          {
            q: '「駅までどのくらいの距離ですか」を英語にしなさい。',
            a: 'How far is it to the station?',
            explanation: '距離をたずねるときは how far を使います。この it は時や距離を表す文で使う、日本語にしない主語です。だから、答えの文でも It is 2 km. のように it を使います。',
          },
        ],
        checkpoints: [
          'How many ＋ 複数形（数）、How much（量・ねだん）',
          'How long（長さ・期間）、How old、How tall、How far、How often',
          'How many books のあとは複数形。How many book は誤り',
        ],
      },
      {
        label: '疑問詞が主語になる疑問文',
        locked: true,
        formula: '疑問詞（主語）＋ 動詞 〜？　（do・does・did を使わない）',
        explanation: 'Who plays tennis? のように、who や what が文の主語になるときは、疑問詞そのものが主語のはたらきをします。だから、いつもの「do を使った疑問文」ではなく、ふつうの文と同じ語順になります。who は3人称単数として扱うので、現在の動詞には s をつけます。',
        steps: [
          '「だれが〜しますか」「何が〜ですか」と、疑問詞が主語になっていないか確認する',
          '主語になっている → 疑問詞 ＋ 動詞（do・does をつけない）',
          'who・what は3人称単数あつかいなので、現在の動詞に s をつける',
          '過去の文なら動詞を過去形にする（Who broke the window?）',
          'ほかの疑問詞（who ＋ do you 〜）と区別する。you などの主語がすぐあとにあれば、do を使う',
        ],
        example: {
          q: '「だれがこの部屋を使いますか」を英語にしなさい。',
          a: 'Who uses this room?（who が主語なので do を使わず、3人称単数の s をつける）',
        },
        quiz: [
          {
            q: '誤りを直しなさい。Who does play tennis?',
            a: 'Who plays tennis?',
            explanation: 'who が主語になっているので、do や does は不要です。ふつうの文と同じように、Who plays と動詞に s をつけます。',
          },
          {
            q: '「だれがこの窓をわりましたか」を英語にしなさい。',
            a: 'Who broke this window?',
            explanation: 'who が主語で過去のことなので、did は使わず動詞を過去形の broke にします。だから、Who broke this window? です。',
          },
          {
            q: '「あなたはだれが好きですか」を英語にしなさい。',
            a: 'Who do you like?',
            explanation: 'この who は「好き」の対象で、主語は you です。主語が別にあるので、do you like と疑問文の語順にします。',
          },
        ],
        checkpoints: [
          '疑問詞が主語 → do・does・did を使わない',
          'who は3人称単数あつかい（現在なら動詞に s）',
          'Who plays 〜?（だれが）と Who do you play 〜?（だれを）のちがいに注意',
        ],
      },
      {
        label: '選択疑問文の作り方と答え方',
        locked: true,
        formula: 'Do you like A or B?　／　Which do you like, A or B?',
        explanation: '「AとBのどちらですか」とたずねる文を選択疑問文といいます。ふつうの疑問文の最後に or B をつけるだけで作れます。「はい・いいえ」ではなく、A か B のどちらかを選んで答えるのが決まりです。',
        steps: [
          'ふつうの疑問文を作る（Do you like tea?）',
          'そのうしろに A or B を続ける（Do you like tea or coffee?）',
          '答えは Yes・No を使わず、選んだ方を文で答える（I like tea.）',
          'Which を使うと、より自然に聞ける（Which do you like, tea or coffee?）',
          '3つ以上のときは、A, B, or C のように最後の前に or を置く',
        ],
        example: {
          q: 'Is he a teacher or a doctor? に対する正しい答えを選びなさい。ア Yes, he is. イ He is a doctor.',
          a: 'イ（どちらかを選ぶ質問なので、Yes・No では答えない）',
        },
        quiz: [
          {
            q: '「お茶とコーヒーではどちらが好きですか」を英語にしなさい。',
            a: 'Which do you like, tea or coffee?',
            explanation: '選ぶはんいが決まっているので which を使います。あとに tea or coffee を続けるため、Which do you like, tea or coffee? です。',
          },
          {
            q: 'Do you go to school by bus or by train? に「電車です」と答えなさい。',
            a: 'I go to school by train.',
            explanation: '選択疑問文には Yes・No では答えません。選んだ方を、文の形で答えるのが決まりなので I go to school by train. です。',
          },
          {
            q: 'かっこに入る語を答えなさい。( ) do you like better, summer or winter?',
            a: 'Which',
            explanation: 'summer か winter かという選ぶはんいが決まっています。だから、「どちら」の意味の which を使います。',
          },
        ],
        checkpoints: [
          '選択疑問文には Yes・No で答えない',
          'A or B は疑問文のおわりに置く',
          '選ぶはんいがあれば which が使える',
        ],
      },
    ],
  },

  // ================= 数・時・前置詞 =================
  {
    title: '時刻・日付・前置詞',
    studyPeriod: '中1',
    intro: '時刻や日付の言い方、at・on・in などの前置詞は、毎日の英語で必ず使います。使い分けの「わけ」をつかんでおきましょう。',
    items: [
      {
        label: '時刻・曜日・月・日付の言い方',
        locked: true,
        formula: 'What time is it? → It is 7:30.　／　What day is it? → It is Monday.　／　What is the date? → It is May 3.',
        explanation: '時刻・曜日・日付は、どれも主語に it を使います。この it は「それ」ではなく、時や日を表すときの決まった形なので、日本語にはしません。たずね方は3つです。時刻は What time、曜日は What day、日付は What is the date と、たずねたい内容で分けます。',
        steps: [
          '時刻 → What time is it?　答え It is seven thirty.（7:30。数字を2つ続けて読む）',
          '「〜時ちょうど」は o\'clock をつける（It is seven o\'clock.）',
          '「15分すぎ」は a quarter past、「30分」は half past と言える',
          '曜日 → What day is it today?　答え It is Monday.',
          '日付 → What is the date today?　答え It is May third.（日付は序数で読む）',
        ],
        example: {
          q: '「今日は何曜日ですか」と「4月1日です」を、それぞれ英語にしなさい。',
          a: 'What day is it today?　／　It is April first.（日付は first と序数で読む）',
        },
        quiz: [
          {
            q: '「今日は何曜日ですか」を英語にしなさい。',
            a: 'What day is it today?',
            explanation: '曜日をたずねるときは What day を使います。日付をたずねる What is the date? と区別するため、曜日は day と覚えます。',
          },
          {
            q: '「6時45分です」を英語にしなさい。',
            a: 'It is six forty-five.',
            explanation: '時刻は「時」「分」の順に数字を読みます。主語は時を表す it を使うので、It is six forty-five. です。',
          },
          {
            q: 'It is May 3. の May 3 の読み方を英語で書きなさい。',
            a: 'May third',
            explanation: '日付は、三日や一日ではなく「3番目の日」と考えるので序数で読みます。だから three ではなく third です。',
          },
        ],
        checkpoints: [
          '時刻・曜日・日付の主語は it（「それ」と訳さない）',
          '曜日は What day、日付は What is the date、時刻は What time',
          '日付は序数で読む（May 3 は May third）',
        ],
      },
      {
        label: '序数のつくり方（first・second・third など）',
        locked: true,
        formula: 'first・second・third ／ 4以上は th ／ five → fifth・eight → eighth・nine → ninth・twelve → twelfth・twenty → twentieth',
        explanation: '順番を表す「〜番目」のことばを序数といいます。1〜3は形が変わるので覚えるしかありません。4以上はほぼ数字に th をつけるだけですが、つづりが少し変わる語があります。五番目の fifth・十二番目の twelfth は ve が f に、九番目の ninth は e が消えます。',
        steps: [
          '1番目〜3番目：first、second、third を覚える',
          '4番目以上：数字のおわりに th をつける（fourth、sixth、seventh、tenth）',
          'つづりが変わるもの：fifth（ve → f）、eighth（t が1つ）、ninth（e が消える）、twelfth（ve → f）',
          '20、30 のように y で終わる数字：y を ie にして th（twentieth、thirtieth）',
          '21以上は、一の位だけを序数にする（twenty-first、twenty-second）',
        ],
        example: {
          q: '次の序数を英語で書きなさい。(1) 5番目 (2) 9番目 (3) 12番目',
          a: '(1) fifth (2) ninth (3) twelfth',
        },
        quiz: [
          {
            q: '「9番目」を英語で書きなさい。',
            a: 'ninth',
            explanation: 'nine に th をつけると e が消えて ninth になります。nineth と書くのは誤りなので、e が消えることを覚えます。',
          },
          {
            q: '「12番目」を英語で書きなさい。',
            a: 'twelfth',
            explanation: 'twelve の ve が f に変わって twelfth になります。five が fifth になるのと同じ規則なので、つづりに気をつけます。',
          },
          {
            q: '「5月2日」を英語で書きなさい（読み方どおりに）。',
            a: 'May second',
            explanation: '日付は序数で読みます。2日は「2番目の日」と考えるので、two ではなく second になります。',
          },
        ],
        checkpoints: [
          'first・second・third は形が変わる',
          'fifth・ninth・twelfth・eighth はつづりに注意',
          '日付は序数で読む（3月1日は March first）',
        ],
      },
      {
        label: '時を表す at・on・in',
        locked: true,
        formula: 'at ＋ 時刻・1点 ／ on ＋ 曜日・日付 ／ in ＋ 月・季節・年・朝昼晩',
        explanation: '時を表す前置詞は、時間の「長さ」の感じで選びます。at はせまい1点、on は1日ぶん、in はもっと長い期間のイメージです。at 7:00（1点）、on Monday（1日）、in April（1か月）と考えるとまちがえにくくなります。',
        steps: [
          '時刻・1点の時（at 6:30、at noon、at night）→ at',
          '曜日・特定の日（on Sunday、on May 3、on my birthday）→ on',
          '月・季節・年（in April、in summer、in 2025）→ in',
          '朝・午後・晩（in the morning / afternoon / evening）→ in',
          '曜日と朝・昼・晩が合わさると on になる（on Sunday morning）',
        ],
        example: {
          q: 'かっこに at・on・in のどれかを入れなさい。(1) ( ) 6:30 (2) ( ) Sunday (3) ( ) April',
          a: '(1) at (2) on (3) in',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。I get up ( ) six in the morning.',
            a: 'at',
            explanation: 'six は時刻で、時間の1点を表します。1点を表すときは at を使うので、答えは at です。',
          },
          {
            q: 'かっこに入る語を答えなさい。We have a party ( ) Saturday.',
            a: 'on',
            explanation: '曜日には on を使います。曜日は1日ぶんの時間なので、at や in ではなく on が決まりです。',
          },
          {
            q: 'かっこに入る語を答えなさい。It is very hot ( ) summer.',
            a: 'in',
            explanation: '季節は、月や年と同じように長い期間なので in を使います。だから in summer です。',
          },
        ],
        checkpoints: [
          'at は1点、on は1日、in は長い期間',
          '曜日 ＋ 朝・午後・晩は on（on Monday morning）',
          'the morning だけなら in（in the morning）',
        ],
      },
      {
        label: '場所を表す at・in・on・under・between など',
        locked: true,
        formula: 'at（1点）・in（中）・on（ふれて上）・under（下）・by/near（近く）・between A and B（あいだ）',
        explanation: '場所の前置詞は、ものとものの位置関係のイメージで決まります。in は「囲まれた中」、on は「ふれている」、at は「地点」をイメージします。同じ場所でも見方で in と at を使い分けます。たとえば in Osaka は「大阪という広がりの中」、at the station は「駅という地点」です。',
        steps: [
          '位置関係をイメージする（中にある？上にふれている？地点？）',
          '広い場所・囲まれた中 → in（in Japan、in the room）',
          '1つの地点・せまい場所 → at（at the station、at school）',
          'ふれて上にある → on（on the desk、on the wall）',
          'ほかの前置詞：under（下に）、by・near（近くに）、in front of（前に）、behind（後ろに）、next to（となりに）、between A and B（AとBのあいだに）',
        ],
        example: {
          q: 'かっこに入る語を答えなさい。The cat is ( ) the desk.（ねこは机の下にいる）',
          a: 'under（下にあるので under）',
        },
        quiz: [
          {
            q: '「私は大阪に住んでいます」を英語にしなさい。',
            a: 'I live in Osaka.',
            explanation: '大阪のような広い場所には in を使います。at は駅のような1つの地点で使うので、この文では in です。',
          },
          {
            q: 'かっこに入る語を答えなさい。Ken is standing ( ) Mika and Tom.（ミカとトムのあいだに）',
            a: 'between',
            explanation: '2人のあいだにいるときは between A and B を使います。「あいだ」の意味なので between です。',
          },
          {
            q: '「私たちは駅で会いました」を英語にしなさい。',
            a: 'We met at the station.',
            explanation: '駅は待ち合わせの1つの地点と考えるので at を使います。だから We met at the station. です。',
          },
        ],
        checkpoints: [
          'in は中・広い場所、at は地点、on はふれて上',
          'between は2つのあいだ（between A and B）',
          'in front of は前に、behind は後ろに',
        ],
      },
      {
        label: 'from・to・for・by・with の使い分け',
        locked: true,
        formula: 'from（出発点）・to（到着点）・for（〜のために・〜行き）・by（手段・そば）・with（いっしょに・道具）',
        explanation: '前置詞は「日本語にすると同じでも、英語では使い分ける」ものが多いです。「〜で」は、手段や乗り物なら by、道具なら with を使います。乗り物の by はあとに a や the をつけませんが、道具の with には a や the をつけます。',
        steps: [
          '始まり → from、終わり・行き先 → to（from Tokyo to Osaka）',
          '「〜のために」「〜あてに」「〜行きの」→ for（a present for you、the train for Kyoto）',
          '乗り物・手段 → by ＋ 無冠詞（by bus、by train、by e-mail）。歩いて行くは on foot',
          '道具・いっしょに → with（write with a pen、eat with chopsticks、with my friends）',
          '「誰かのそばに」も by（sit by the window）',
        ],
        example: {
          q: 'かっこに入る語を答えなさい。(1) I go to school ( ) bus. (2) I eat ( ) chopsticks.',
          a: '(1) by（乗り物）(2) with（道具）',
        },
        quiz: [
          {
            q: '「バスで」を by を使って英語にしなさい。',
            a: 'by bus',
            explanation: '乗り物を手段として言うときは by を使い、bus の前に a や the をつけません。「バスという手段で」と考えるためです。',
          },
          {
            q: '「私ははしで食べます」を英語にしなさい。',
            a: 'I eat with chopsticks.',
            explanation: 'はしは道具なので with を使います。by は手段や乗り物に使うため、道具には with が正しい選び方です。',
          },
          {
            q: '「東京から大阪まで」を英語にしなさい。',
            a: 'from Tokyo to Osaka',
            explanation: '出発点は from、到着点は to で表します。始まりから終わりまでを言うために、この2つをセットにする、という意味で from A to B の形で覚えます。',
          },
        ],
        checkpoints: [
          'by ＋ 乗り物は冠詞なし（by bus）、歩くは on foot',
          '道具は with、手段・乗り物は by',
          'from A to B、a present for you',
        ],
      },
    ],
  },

  // ================= 副詞・つづり・動詞の形 =================
  {
    title: '副詞・つづり・動詞の形',
    studyPeriod: '中2',
    intro: '英語のミスの多くは、動詞にどんな語尾をつけるかと、形容詞・副詞の使い分けです。規則を先に覚えれば、あとは例外だけを覚えればすみます。',
    items: [
      {
        label: '頻度の副詞の位置',
        locked: true,
        formula: 'always > usually > often > sometimes > never ／ be動詞のあと・一般動詞のまえ',
        explanation: '「いつも」「ときどき」のように、どれくらいの頻度かを表す副詞があります。この副詞は「be動詞のあと」「一般動詞のまえ」に置くのが決まりです。動詞を説明する語なので、動詞のすぐ近くに置くと覚えましょう。sometimes だけは文頭や文末にも置けます。',
        steps: [
          '頻度の語を知る：always（いつも）、usually（たいてい）、often（よく）、sometimes（ときどき）、never（一度も〜ない）',
          'be動詞の文 → be動詞のあとに置く（He is always kind.）',
          '一般動詞の文 → 動詞のまえに置く（I usually get up at six.）',
          'never は「〜ない」の意味を持つので、not は使わない（I never eat meat.）',
          'sometimes は文頭・文末に置いてもよい（Sometimes I walk.）',
        ],
        example: {
          q: '「私はたいてい6時に起きます」を英語にしなさい。',
          a: 'I usually get up at six.（一般動詞 get の前に usually）',
        },
        quiz: [
          {
            q: '「彼はいつも親切です」を英語にしなさい。',
            a: 'He is always kind.',
            explanation: 'is は be動詞なので、頻度の副詞 always は be動詞のあとに置きます。動詞の前ではなく、あとになる点がちがいます。',
          },
          {
            q: '誤りを直しなさい。I go often to the library.',
            a: 'I often go to the library.',
            explanation: '一般動詞の文では、頻度の副詞は動詞の前に置くのが決まりです。だから go の前に often を移します。',
          },
          {
            q: 'always・sometimes・never を、頻度の高い順に並べなさい。',
            a: 'always, sometimes, never',
            explanation: 'always は100%、sometimes は半分くらい、never は0%です。だから、この順に頻度が低くなります。',
          },
        ],
        checkpoints: [
          'be動詞のあと・一般動詞のまえ',
          'never は not と一緒に使わない',
          'always > usually > often > sometimes > never の順',
        ],
      },
      {
        label: '-ing のつけ方（つづりの規則）',
        locked: true,
        formula: 'ふつう → ing ／ e で終わる → e をとって ing ／ 短母音＋子音1つ → 子音を重ねて ing ／ ie → ying',
        explanation: '進行形や動名詞で使う ing は、動詞によってつづりが変わります。e で終わる動詞は、e を残すと「e」と「i」が続いて読みにくいので e をとります。run のように「短く読む母音＋子音字1つ」で終わる動詞は、子音字を重ねて短い母音を守ります。',
        steps: [
          'ふつうの動詞はそのまま ing（play → playing、eat → eating）',
          'おわりが e → e をとって ing（make → making、write → writing、use → using）',
          '短母音＋子音字1つ → 子音字を重ねて ing（run → running、swim → swimming、sit → sitting、stop → stopping）',
          'おわりが ie → ie を y にして ing（die → dying、lie → lying）',
          '例外：see・be のように ee やちがう形で終わるものは e を残す（see → seeing、be → being）',
        ],
        example: {
          q: '次の動詞に ing をつけなさい。(1) make (2) run (3) die',
          a: '(1) making (2) running (3) dying',
        },
        quiz: [
          {
            q: 'make に ing をつけた形を答えなさい。',
            a: 'making',
            explanation: 'make は e で終わります。e をのこして ing をつけると読みにくくなるため、e をとって making にします。',
          },
          {
            q: 'swim に ing をつけた形を答えなさい。',
            a: 'swimming',
            explanation: 'swim は「短い母音 i ＋ 子音字 m」で終わります。短い母音を守るため、m を重ねて swimming にします。',
          },
          {
            q: 'see に ing をつけた形を答えなさい。',
            a: 'seeing',
            explanation: 'see は e が2つ続いていて、e をとる規則の例外です。そのため、e をとらずにそのまま seeing にします。',
          },
        ],
        checkpoints: [
          'make → making、write → writing（e をとる）',
          'run → running、swim → swimming（子音を重ねる）',
          'see → seeing、be → being は e を残す',
        ],
      },
      {
        label: '過去形・過去分詞の ed のつけ方',
        locked: true,
        formula: 'ふつう → ed ／ e で終わる → d ／ 子音字＋y → ied ／ 短母音＋子音1つ → 子音を重ねて ed',
        explanation: '規則動詞は、過去形と過去分詞が同じ形で ed をつけて作ります。つけ方は ing のときとよく似ています。ただし e で終わる語は、すでに e があるので d だけをつけます。子音字＋y の語は、y を i に変えて ed をつけます。',
        steps: [
          'ふつうの動詞 → ed（walk → walked、play → played）',
          'おわりが e → d だけ（like → liked、use → used）',
          'おわりが 子音字＋y → y を i にして ed（study → studied、try → tried）',
          'おわりが 母音字＋y → そのまま ed（play → played、enjoy → enjoyed）',
          '短母音＋子音字1つ → 子音を重ねて ed（stop → stopped、plan → planned）',
          '規則動詞は過去形＝過去分詞。不規則動詞は別に覚える',
        ],
        example: {
          q: '次の動詞の過去形を書きなさい。(1) like (2) study (3) stop',
          a: '(1) liked (2) studied (3) stopped',
        },
        quiz: [
          {
            q: 'study の過去形を答えなさい。',
            a: 'studied',
            explanation: 'study は子音字 d ＋y で終わります。y を i に変えて ed をつけるのが決まりなので studied です。',
          },
          {
            q: 'stop の過去形を答えなさい。',
            a: 'stopped',
            explanation: 'stop は短い母音 o ＋子音字 p で終わります。短い母音を守るため、p を重ねて ed をつけて stopped にします。',
          },
          {
            q: 'play の過去形を答えなさい。',
            a: 'played',
            explanation: 'play は母音字 a ＋y で終わります。この場合は y を i に変えずに、そのまま ed をつけます。だから played です。',
          },
        ],
        checkpoints: [
          'e で終わる → d だけ（liked）',
          '子音字＋y → ied（studied）、母音字＋y → yed（played）',
          '規則動詞は過去形と過去分詞が同じ形',
        ],
      },
      {
        label: '不規則動詞の4パターン（AAA・ABA・ABB・ABC）',
        locked: true,
        formula: '原形・過去形・過去分詞 の並びで AAA（全部同じ）・ABA・ABB・ABC に分けて覚える',
        explanation: '不規則動詞は数が多いですが、変化のパターンでグループ分けすると覚えやすくなります。原形・過去形・過去分詞の3つを A・B・C で表します。AAA は3つとも同じ、ABA は原形と過去分詞が同じ、ABB は過去形と過去分詞が同じ、ABC は3つとも別の形です。',
        steps: [
          'AAA型（3つとも同じ）：cut - cut - cut、put - put - put、hit - hit - hit、let - let - let、read - read - read（発音だけ変わる）',
          'ABA型（原形＝過去分詞）：come - came - come、run - ran - run、become - became - become',
          'ABB型（過去形＝過去分詞）：buy - bought - bought、bring - brought - brought、think - thought - thought、teach - taught - taught、make - made - made、have - had - had',
          'ABC型（3つとも別）：go - went - gone、see - saw - seen、eat - ate - eaten、write - wrote - written、take - took - taken、speak - spoke - spoken',
          '過去分詞は現在完了・受動態で使うので、3つセットで覚える',
        ],
        example: {
          q: 'see の過去形と過去分詞を答えなさい。',
          a: '過去形 saw、過去分詞 seen（see - saw - seen は ABC 型）',
        },
        quiz: [
          {
            q: 'buy の過去形を答えなさい。',
            a: 'bought',
            explanation: 'buy は buy - bought - bought の ABB 型で、過去形と過去分詞が同じです。形が変わるので、そのまま覚えます。',
          },
          {
            q: 'put の過去形を答えなさい。',
            a: 'put',
            explanation: 'put は put - put - put の AAA 型で、形が3つとも同じです。だから、過去形も put のままです。',
          },
          {
            q: 'write の過去分詞を答えなさい。',
            a: 'written',
            explanation: 'write は write - wrote - written の ABC 型です。過去形の wrote とは別の形なので、written を覚えます。',
          },
        ],
        checkpoints: [
          'AAA：cut・put・hit・let・read',
          'ABA：come・run・become',
          'ABB：buy・bring・think・teach・make・have、ABC：go・see・eat・write・take・speak',
        ],
      },
      {
        label: '形容詞と副詞のちがい',
        locked: true,
        formula: '形容詞 → 名詞を説明・be動詞のあと ／ 副詞 → 動詞などを説明（形容詞 ＋ ly が多い）',
        explanation: '形容詞は名詞のようすを説明し、副詞は動詞のようすを説明します。つまり「何を説明するか」で見分けます。副詞の多くは、形容詞に ly をつけて作ります（quick → quickly）。ただし fast・early・late は形が同じで、good の副詞だけは別の形の well です。',
        steps: [
          '説明される語が名詞（またはbe動詞のあとの補語）なら形容詞',
          '説明される語が動詞なら副詞',
          '副詞は多くの場合、形容詞に ly をつける（slow → slowly、careful → carefully）',
          '子音字＋y の形容詞は y を i にして ly（happy → happily）',
          '形容詞と副詞が同じ形：fast（速い・速く）、early（早い・早く）、hard（かたい・熱心に）',
          'good（よい）の副詞は well（上手に）。goodly は使わない',
        ],
        example: {
          q: 'かっこに入る語を選びなさい。She sings ( ).（good / well）',
          a: 'well（sings という動詞を説明するので副詞の well）',
        },
        quiz: [
          {
            q: '「彼女は上手に歌います」を well を使って英語にしなさい。',
            a: 'She sings well.',
            explanation: 'sings という動詞を説明するので、副詞が必要です。good の副詞は well なので、She sings well. になります。',
          },
          {
            q: 'かっこに入る語を答えなさい。Please speak ( ).（slow をふさわしい形にして）',
            a: 'slowly',
            explanation: 'speak という動詞を説明するので、副詞にします。形容詞 slow に ly をつけるので、答えは slowly です。',
          },
          {
            q: 'かっこに入る語を答えなさい。My father runs ( ).（fast か fastly）',
            a: 'fast',
            explanation: 'fast は形容詞も副詞も同じ形です。だから、fastly という語はなく、runs を説明する副詞としても fast を使います。',
          },
        ],
        checkpoints: [
          '形容詞は名詞を、副詞は動詞を説明',
          'good の副詞は well、fast・early は形が同じ',
          '形容詞 ＋ ly が副詞の基本（happy → happily）',
        ],
      },
    ],
  },

  // ================= 会話・熟語でよく出る型 =================
  {
    title: '命令文・感嘆文・熟語',
    studyPeriod: '中2',
    intro: '入試でよく出る、決まった形のある表現を集めました。ぜんぶ「型」として覚えると、英作文でも読解でも使えます。',
    items: [
      {
        label: '命令文と and・or',
        locked: true,
        formula: '命令文, and 〜.（〜しなさい、そうすれば〜）／ 命令文, or 〜.（〜しなさい、さもないと〜）',
        explanation: '命令文のあとに and か or をつなげると、「そうすれば」「さもないと」という意味になります。and は良い結果が続くとき、or は悪い結果が続くときに使います。or のうしろは、「もし〜しなければ」という意味なので、if you do not 〜 の形で書きかえることもできます。',
        steps: [
          '命令文のあとに、コンマ（,）と and または or を置く',
          '良い結果が続く → and（そうすれば）',
          '悪い結果が続く → or（さもないと）',
          'and のあとの文は、ふつう未来を表す will を使った文になる',
          '書きかえ：命令文, or 〜 ＝ If you do not 〜, 〜',
        ],
        example: {
          q: 'Hurry up, or you will miss the train. の意味を書きなさい。',
          a: '急ぎなさい、さもないと電車に乗りおくれますよ。',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。Study hard, ( ) you will pass the exam.',
            a: 'and',
            explanation: 'あとに「試験に合格する」という良い結果が続いています。良い結果をつなぐときは and を使うので、答えは and です。',
          },
          {
            q: '「急がないと遅れますよ」を命令文を使って英語にしなさい。',
            a: 'Hurry up, or you will be late.',
            explanation: '「遅れる」は悪い結果です。悪い結果につなぐときは or を使うため、Hurry up, or you will be late. になります。',
          },
          {
            q: 'Get up now, or you will be late. を if を使って書きかえなさい。',
            a: 'If you do not get up now, you will be late.',
            explanation: 'or は「さもないと」で、「もし〜しなければ」と同じ意味です。だから if you do not 〜 の形に書きかえられます。',
          },
        ],
        checkpoints: [
          'and は良い結果、or は悪い結果',
          '命令文, or 〜 ＝ If you do not 〜, 〜',
          '命令文のあとにコンマを置く',
        ],
      },
      {
        label: '感嘆文（What と How）',
        locked: true,
        formula: 'What ＋ (a / an) ＋ 形容詞 ＋ 名詞 ＋ (主語 ＋ 動詞)! ／ How ＋ 形容詞・副詞 ＋ (主語 ＋ 動詞)!',
        explanation: '「なんて〜なのでしょう」と驚きや感動を表す文が感嘆文です。名詞があるときは what、名詞がなく形容詞・副詞だけのときは how を使います。what のうしろは「形容詞＋名詞」が続く、how のうしろは形容詞か副詞だけが続く、と見分けます。',
        steps: [
          '強調したい部分に名詞があるかを確認する',
          '名詞がある → What (a / an) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞!',
          '名詞がない（形容詞・副詞だけ）→ How ＋ 形容詞・副詞 ＋ 主語 ＋ 動詞!',
          '主語と動詞はよく省略される（What a big dog!）',
          '数えられる名詞の単数形には a か an をつける（What a nice idea!）',
        ],
        example: {
          q: '「なんて美しい花でしょう」を What と How の2通りで英語にしなさい。',
          a: 'What a beautiful flower this is! ／ How beautiful this flower is!',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。( ) a nice bag!',
            a: 'What',
            explanation: 'あとに nice bag という形容詞と名詞が続いています。名詞があるので what を使い、What a nice bag! になります。',
          },
          {
            q: 'かっこに入る語を答えなさい。( ) tall he is!',
            a: 'How',
            explanation: 'tall は形容詞だけで、名詞は続いていません。名詞がないときは how を使うので、How tall he is! です。',
          },
          {
            q: '「なんて大きい犬でしょう」を英語にしなさい。',
            a: 'What a big dog it is!',
            explanation: '犬という名詞があるので what を使います。dog は数えられる単数なので a をつけて What a big dog it is! です。',
          },
        ],
        checkpoints: [
          '名詞があれば What、なければ How',
          'What のあとは a / an ＋ 形容詞 ＋ 名詞',
          '感嘆文の終わりは ! を使う',
        ],
      },
      {
        label: '動詞＋前置詞の熟語（look at・look for など）',
        locked: true,
        formula: 'look at（見る）・look for（さがす）・look after（世話をする）・listen to（聞く）・wait for（待つ）',
        explanation: '動詞に前置詞がくっついて、1つの動詞のように使われる表現があります。日本語では「〜を」となる語でも、英語では前置詞が必要です。たとえば「〜を待つ」は wait for、「〜を聞く」は listen to のように、動詞と前置詞をセットで覚えます。',
        steps: [
          '日本語で「〜を」でも、英語で前置詞が必要な動詞があることを知る',
          'look at（〜を見る）、look for（〜をさがす）、look after（〜の世話をする）',
          'listen to（〜を聞く）、wait for（〜を待つ）、talk to（〜と話す）',
          'think about / of（〜について考える）、laugh at（〜を笑う）、ask for（〜を求める）',
          'まちがえやすい ×listen music、×wait the bus のように、前置詞をぬかさない',
        ],
        example: {
          q: '「私はバスを待っています」を英語にしなさい。',
          a: 'I am waiting for the bus.（wait は for が必要）',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。I am looking ( ) my key.（かぎをさがしている）',
            a: 'for',
            explanation: '「さがす」は look for という決まりの熟語です。look at だと「見る」の意味になってしまうので、for を使います。',
          },
          {
            q: 'かっこに入る語を答えなさい。Listen ( ) me.',
            a: 'to',
            explanation: 'listen は「聞く」ですが、あとに聞く相手を置くときは前置詞 to が必要です。listen to 〜 で1セットなので、to をぬかしてはいけません。',
          },
          {
            q: '「彼女は自分の犬の世話をします」を英語にしなさい。',
            a: 'She looks after her dog.',
            explanation: '「世話をする」は look after です。主語が she で現在の文なので、動詞 look に s をつけて looks after にします。',
          },
        ],
        checkpoints: [
          'look at（見る）・look for（さがす）・look after（世話をする）',
          'listen to、wait for は前置詞をぬかさない',
          '熟語は3人称単数の s を動詞につける（looks after）',
        ],
      },
      {
        label: '形容詞＋前置詞の組み合わせ',
        locked: true,
        formula: 'be interested in・be afraid of・be full of・be famous for・be proud of・be kind to',
        explanation: '「be動詞 ＋ 形容詞 ＋ 前置詞」で1つのまとまりとして使う表現があります。前置詞はあとに続く語との関係で決まっているので、セットで覚えるのが近道です。前置詞のあとには名詞か ing形を置きます。',
        steps: [
          'be interested in（〜に興味がある）',
          'be afraid of（〜をこわがる）、be proud of（〜を誇りに思う）',
          'be full of（〜でいっぱい）、be famous for（〜で有名）',
          'be kind to（〜に親切だ）、be different from（〜とちがう）',
          'be late for（〜におくれる）、be ready for（〜の準備ができている）',
          '前置詞のあとに動詞を置くときは ing形にする（I am interested in playing.）',
        ],
        example: {
          q: '「私は理科に興味があります」を英語にしなさい。',
          a: 'I am interested in science.',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。Japan is famous ( ) sushi.',
            a: 'for',
            explanation: '「〜で有名」は be famous for という決まりです。理由・もとになるものを表す for を使うので、for が正解です。',
          },
          {
            q: 'かっこに入る語を答えなさい。She is interested ( ) music.',
            a: 'in',
            explanation: '「〜に興味がある」は be interested in と決まっています。at や of ではなく in をセットで覚える必要があるため、まちがえやすい表現です。',
          },
          {
            q: 'かっこに入る語を答えなさい。The box is full ( ) toys.',
            a: 'of',
            explanation: '「〜でいっぱい」は be full of です。だから full のあとには of を置き、全体で1つの表現として覚えます。',
          },
        ],
        checkpoints: [
          'be interested in・be afraid of・be full of・be famous for',
          '前置詞のあとの動詞は ing形',
          'be good at 〜 ing（〜が得意）もセットで覚える',
        ],
      },
    ],
  },

  // ================= 接続詞・付加疑問 =================
  {
    title: '接続詞・付加疑問',
    studyPeriod: '中3前半',
    intro: '中3で出てくる、文をなめらかにつなぐ表現です。文の意味を考えながら、どの語がふさわしいかを選びましょう。',
    items: [
      {
        label: '付加疑問文の作り方',
        locked: true,
        formula: '肯定文, 否定の付加疑問? ／ 否定文, 肯定の付加疑問?',
        explanation: '文のおわりに短い疑問をつけて、「〜ですよね」と相手に確かめる形が付加疑問文です。ふつうの文が肯定なら、付加部分は否定、ふつうの文が否定なら、付加部分は肯定になります。本文と反対の形にして、たしかめる形になっているのです。',
        steps: [
          '前の文が肯定文か否定文かを確認する',
          'be動詞の文 → 同じ be動詞を使う（You are a student, aren\'t you? のように、be動詞を使って否定にする）',
          '一般動詞の文 → do・does・did を使う（Ken plays tennis, doesn\'t he?）',
          'can・will などの助動詞の文 → 同じ助動詞を使う（She cannot swim, can she?）',
          '主語は代名詞にして、くり返す（Ken → he、the boys → they）',
          '特別な形：Let\'s 〜, shall we?　命令文, will you?',
        ],
        example: {
          q: 'かっこに入る語を答えなさい。You like cats, ( ) ( )?',
          a: "don't you（前の文が肯定なので否定の付加疑問。一般動詞なので do を使う）",
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。Ken is not busy, ( ) ( )?',
            a: 'is he',
            explanation: 'まえの文が否定なので、付加部分は肯定にします。be動詞 is を使い、主語 Ken は he に言いかえるため is he です。',
          },
          {
            q: 'かっこに入る語を答えなさい。She plays the piano, ( ) ( )?',
            a: "doesn't she",
            explanation: 'まえの文が肯定なので、付加部分は否定です。一般動詞で主語が she なので、does を使って doesn\'t she になります。',
          },
          {
            q: 'かっこに入る語を答えなさい。Let us go to the park, ( ) ( )?（Let us は Let\'s と同じ）',
            a: 'shall we',
            explanation: 'Let\'s 〜 のあとの付加疑問は shall we? と決まっています。「〜しましょうか」と誘いをたしかめる形だからです。',
          },
        ],
        checkpoints: [
          '肯定 → 否定、否定 → 肯定',
          '主語は代名詞にする（Ken → he）',
          "Let's 〜, shall we?　命令文, will you?",
        ],
      },
      {
        label: '時を表す接続詞（before・after・while・until）',
        locked: true,
        formula: 'before（〜する前に）・after（〜したあとに）・while（〜している間に）・until（〜するまで）',
        explanation: 'これらの接続詞は、あとに「主語＋動詞」を続けて、時の関係を表します。while は「ある動作が続いている間」、until は「その状態が続いて、ある時点で終わる」ことを表します。時を表す接続詞のあとでは、未来のことでも will を使わず現在形にするのが決まりです。',
        steps: [
          '前後の出来事の順番を考える',
          '〜する前に → before、〜したあとに → after',
          '〜している間（同時に続く）→ while、〜するまで（ずっと）→ until',
          '接続詞のあとには「主語＋動詞」を置く',
          '未来のことでも、時を表す接続詞のあとは現在形（I will call you when I get home.）',
        ],
        example: {
          q: 'かっこに入る語を答えなさい。Wash your hands ( ) you eat.',
          a: 'before（食べる前に手をあらう）',
        },
        quiz: [
          {
            q: 'かっこに入る語を答えなさい。I watched TV ( ) my mother was cooking.',
            a: 'while',
            explanation: '母が料理をしている「間」に、テレビを見ていたことを表しています。動作が続いている間を表すので while です。',
          },
          {
            q: 'かっこに入る語を答えなさい。I will wait here ( ) you come back.',
            a: 'until',
            explanation: '「あなたがもどるまで」ずっと待つという意味です。ある時点まで続くことを表すので until を使います。',
          },
          {
            q: '正しい方を選びなさい。I will call you after I ( ) home.（get / will get）',
            a: 'get',
            explanation: 'after は時を表す接続詞です。時を表す接続詞のあとでは、未来のことでも will を使わず現在形にするので get です。',
          },
        ],
        checkpoints: [
          'while は間、until は〜まで',
          '時を表す接続詞のあとは未来のことでも現在形',
          '接続詞のあとは「主語＋動詞」、前置詞のあとは名詞',
        ],
      },
    ],
  },
];
