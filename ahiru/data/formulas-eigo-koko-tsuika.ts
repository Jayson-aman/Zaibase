// ───────────────────────────────────────────────────────────────
// 高校受験 英語（公式・まとめ）追加分その2
// ───────────────────────────────────────────────────────────────
// formulas-eigo.ts（文法23項目）と formulas-eigo-koko.ts（入試の型）で
// 扱っていない切り口を足す。
//   ・設問タイプ別の解き方（適語補充・並べかえ・下線部和訳・対話文・資料の読み取り）
//   ・代名詞と数量を表す語（one/it/that、some/any、another/other、every/each/both）
//   ・動詞まわりの発展（知覚動詞、助動詞＋be、時制の一致、話法、I wish）
//   ・熟語と語い（動詞句、前置詞の熟語、まぎらわしい形容詞・副詞）
//   ・書きかえ・作文・読解・リスニングの型
//   ・つづりと発音
//
// 仮定法・関係副詞・分詞構文などの高校範囲は書かない（I wish は中学範囲）。
// label は買い切りの識別キーなので、全 formulas-*.ts で一意にすること。
// 英文には短縮形を使わず、文字列は二重引用符で書く。
// data/formulas.ts で英語の配列に連結する（配線は親が行う）。
// examType は 'koko'（高校受験）。

import type { FormulaSection } from "./formulas-types";

export const eigoKokoTsuikaFormulas: FormulaSection[] = [
  {
    title: "設問タイプ別の解き方",
    studyPeriod: "中3前半",
    examType: "koko",
    intro:
      "入試の英語は、設問の形ごとに解く順番が決まっています。順番を知っていれば、知らない文でも落ち着いて答えを絞りこめます。",
    items: [
      {
        label: "適語補充の考え方",
        locked: true,
        formula: "空所の前後を見る → 品詞 → 時制 → 主語との一致の順に絞る",
        explanation:
          "適語補充は、空所の前後にヒントが必ずあります。前が前置詞なら名詞か ing形、前が be動詞なら ing形か過去分詞というように、まず入る形を決めます。そのあとで時を表す語を見て時制を決めると、答えが1つに絞れます。",
        steps: [
          "空所の前後の語（冠詞・前置詞・be動詞・助動詞）を見る",
          "入る語の品詞（名詞・動詞・形容詞・副詞）を決める",
          "yesterday・now・for・since など時を表す語で時制を決める",
          "主語の人称と数で be動詞や三単現の s を決める",
          "決まった組み合わせ（look forward to ing）を思い出す",
          "入れた語で文全体を読み直し、意味が通るか確かめる",
        ],
        example: {
          q: "I have lived in Osaka ( ) 2015. に入る語は。",
          a: "since。2015 は「いつから」という起点の年なので since を使う。for は期間の長さ（for ten years）に使う。",
        },
        quiz: [
          {
            q: "My brother ( ) a book now. (read) の空所に入る形は。",
            a: "is reading",
            explanation:
              "now があるので「今〜している」という現在進行形になる。主語 My brother は三人称単数なので、be動詞は is を使うわけである。したがって is reading が入る。",
          },
          {
            q: "I have known him ( ) ten years. の空所に for と since のどちらが入るか。",
            a: "for",
            explanation:
              "ten years は「10年間」という期間の長さを表すので for を使う。since は「〜から」と起点を表すため、since 2010 のように年や時刻がくる。空所のあとに来る語が期間か起点かで見分ける。",
          },
          {
            q: "Thank you for ( ) me. の空所に help はどの形で入るか。",
            a: "helping",
            explanation:
              "前置詞のあとには名詞の働きをする形がくるので、動詞は ing形（動名詞）にする。to不定詞は前置詞のあとに置けない。つまり for のあとの動詞は必ず ing形になる。",
          },
        ],
        checkpoints: [
          "空所の前が前置詞なら、動詞は ing形にする",
          "for は期間の長さ、since は起点（いつから）",
          "時を表す語（now・yesterday・every day）で時制を決める",
        ],
      },
      {
        label: "並べかえ問題の手順",
        locked: true,
        formula: "主語と動詞を先に置く → かたまりを作る → 余る語を確かめる",
        explanation:
          "並べかえは、頭から順に並べようとすると迷います。先に主語と動詞を決めて文の骨組みを作り、残りの語をかたまりにして後ろに付けていくと、ほとんどの問題が同じ手順で解けます。",
        steps: [
          "日本文を読み、肯定文・疑問文・命令文のどれかを決める",
          "疑問詞があれば先頭に置く（疑問文の語順に注意）",
          "主語と動詞を決めて、骨組みを先に作る",
          "to＋動詞、冠詞＋名詞、前置詞＋名詞などのかたまりを作る",
          "1語不要な問題では、余る語を先に見つける",
          "完成した文を日本文と見くらべる",
        ],
        example: {
          q: "This / the / is / book / I / bought / yesterday を並べかえて「これは私が昨日買った本です」にしなさい。",
          a: "This is the book I bought yesterday. 主語 This と動詞 is を先に置き、book のあとに I bought yesterday を続ける（book を後ろから説明する）。",
        },
        quiz: [
          {
            q: "「あなたは何を食べたいですか」 (want / you / do / what / to / eat) を並べかえなさい。",
            a: "What do you want to eat?",
            explanation:
              "疑問詞 what が先頭にくるので What で始める。そのあとは疑問文の語順で do you want、最後に to eat をつなぐ。疑問詞のある疑問文は、疑問詞のあとが do you 〜 の形になるためである。",
          },
          {
            q: "「私はおばを訪ねるつもりです」 (going / I / am / to / visit / will) my aunt. 余る語は。",
            a: "I am going to visit / 余る語は will",
            explanation:
              "am going to は未来を表す形で、will と同時には使えない。will は助動詞で、be going to と並べると未来を表す語が重なってしまうのである。だから余る語は will になる。",
          },
          {
            q: "並べかえ問題で最初にすることは何か。",
            a: "主語と動詞を先に決める",
            explanation:
              "主語と動詞が決まると文の骨組みができ、残りの語は説明を付け足すものとして並べられるからである。順番に並べようとすると、どの語が先か迷って時間をむだにする。",
          },
        ],
        checkpoints: [
          "疑問詞は先頭、そのあとは do you 〜 の語順",
          "be going to と will は同時に使わない",
          "並べたら日本文と見くらべて意味を確かめる",
        ],
      },
      {
        label: "下線部和訳の手順",
        locked: true,
        formula: "主語と動詞を探す → 指示語を具体化 → 自然な日本語に整える",
        explanation:
          "下線部和訳は、英語の語順のまま単語をつなぐだけでは点になりません。文の骨組みをつかみ、this や it が指す内容を具体的にして、日本語として自然な順に直します。否定の意味を落とさないことも大切です。",
        steps: [
          "下線部の主語と動詞を見つける",
          "this・it・they などが指す内容を前の文から探す",
          "後ろから説明するかたまり（分詞・関係代名詞・to不定詞）を見つける",
          "そのかたまりを「〜している」「〜する」の形で名詞の前に置く",
          "not・never・too 〜 to などの否定の意味を落とさない",
          "声に出して読み、日本語として自然か確かめる",
        ],
        example: {
          q: "The book I bought yesterday was very interesting. を日本語にしなさい。",
          a: "私が昨日買った本はとてもおもしろかった。 I bought yesterday が book を後ろから説明しているので、日本語では「本」の前に置く。",
        },
        quiz: [
          {
            q: "I was too tired to walk. を日本語にしなさい。",
            a: "私はとても疲れていたので歩けなかった。",
            explanation:
              "too 〜 to は「〜すぎてできない」という意味である。文中に not がなくても否定の意味を持つため、「歩けた」と訳すと反対になってしまう。「疲れすぎて歩けなかった」と訳してもよい。",
          },
          {
            q: "She knows the girl playing the piano. を日本語にしなさい。",
            a: "彼女はピアノをひいている少女を知っている。",
            explanation:
              "playing the piano は girl を後ろから説明する現在分詞のかたまりなので、「ピアノをひいている」と訳して「少女」の前に置く。英語では後ろにあるが、日本語では説明が名詞の前にくるため語順が逆になる。",
          },
          {
            q: "下線部に this が入っているとき、訳す前にすることは何か。",
            a: "this が指す前の内容を確かめる",
            explanation:
              "this は前の文の内容を受けることが多く、そのまま「これ」と訳しても内容が伝わらない。だから前の文にもどって指している内容をつかみ、具体的な言葉で訳すと得点になる。",
          },
        ],
        checkpoints: [
          "too 〜 to は「〜すぎてできない」",
          "後ろから説明するかたまりは日本語では名詞の前に置く",
          "this・it は指す内容を確かめてから訳す",
        ],
      },
      {
        label: "対話文の空所補充の手順",
        locked: true,
        formula: "直前の発言の型（質問・依頼・感想）を見て、直後の発言とつなぐ",
        explanation:
          "対話文の空所は、前の人の発言に対する「返事」か、後ろの発言を引き出す「問いかけ」です。前後の発言の型を見ると、Yes・No で答える質問なのか、感想をたずねる質問なのかが分かり、選択肢が絞れます。",
        steps: [
          "空所の直前の発言が質問・依頼・さそい・感想のどれか見る",
          "空所の直後の発言が、返事のつづきか理由の説明か見る",
          "How や What で始まる質問には Yes・No で答えない",
          "選択肢を入れて、会話が自然につながるか読む",
          "お礼・あやまり・さそいには決まった返事がある",
          "話し手が入れかわっていることを、A と B で確かめる",
        ],
        example: {
          q: "A: Would you like some tea? B: ( ). I am thirsty. の空所に入る返事は。",
          a: "Yes, please. 直後の「のどがかわいている」が、申し出を受ける理由になっているので。",
        },
        quiz: [
          {
            q: "A: How was your trip? B: ( ) に入る返事を1つ書きなさい。",
            a: "It was great. など感想を言う文",
            explanation:
              "How was 〜? は感想や様子をたずねる質問なので、返事も感想になる。Yes や No では答えられないため、It was wonderful. のように様子を述べる文を選ぶ。",
          },
          {
            q: "A: Can I use your pen? B: ( ), here you are. に入る語を1つ書きなさい。",
            a: "Sure",
            explanation:
              "あとの here you are は物を手わたすときの言葉なので、その前は「いいですよ」という承諾になる。つまり Sure. や Of course. が入るわけである。",
          },
          {
            q: "Thank you for your help. への返事を書きなさい。",
            a: "You are welcome. など",
            explanation:
              "お礼を言われたときの決まった返事は You are welcome. である。相手の感謝を受けとめる言葉なので、Yes や Sorry を返すと会話がつながらない。",
          },
        ],
        checkpoints: [
          "How ・What の質問には Yes・No で答えない",
          "お礼には You are welcome.、さそいには Yes, please. など",
          "空所に入れたら A と B の会話として読み直す",
        ],
      },
      {
        label: "グラフ・表・メールの読み取り",
        locked: true,
        formula: "タイトルと単位を見る → 数字を比べる → 選択肢を1つずつ確かめる",
        explanation:
          "資料の問題は、英文が短くても数字の読みちがいで失点します。先にタイトルと単位を見て、何の数を表すかをつかみます。メールなら、だれがだれに何の用件で送ったかを最初に読むと、細かい設問にも答えやすくなります。",
        steps: [
          "タイトル・単位（人・％・円）・凡例を確かめる",
          "一番多い数と一番少ない数に印をつける",
          "倍・差・合計の計算が必要か設問で確かめる",
          "twice as 〜 as、the most などの比較表現に注意する",
          "メールは差出人・あて先・日付・用件を先に読む",
          "選択肢は資料の数字と1つずつ照らして消していく",
        ],
        example: {
          q: "40人のクラスで、サッカーが好きな生徒は16人、テニスが好きな生徒は8人です。サッカーはテニスの何倍ですか。",
          a: "2倍。16 ÷ 8 ＝ 2 なので、Soccer is twice as popular as tennis. と言える。",
        },
        quiz: [
          {
            q: "歩いて通学する生徒が12人、バスの生徒が6人。Walking is ( ) as popular as the bus. の空所は。",
            a: "twice",
            explanation:
              "12は6の2倍なので、倍数を表す twice を入れる。「〜倍」は as 〜 as の前に twice や three times を置くので、as の前が空所になる。3倍なら three times が入る。",
          },
          {
            q: "グラフの問題を解く前に、必ず確かめる2つは何か。",
            a: "タイトルと単位",
            explanation:
              "何の数かを表すタイトルと、人か％かを表す単位を見落とすと、数字を取りちがえるからである。同じ数字でも、単位がちがえば意味が大きく変わるため、最初に確認する。",
          },
          {
            q: "メールの問題で、最初に読み取る情報は何か。",
            a: "差出人・あて先・用件（件名）",
            explanation:
              "だれがだれに何の用件で送ったかが分かれば、本文の流れがつかめる。そのため、日時や場所などの細かい設問にも答えやすくなるからである。",
          },
        ],
        checkpoints: [
          "タイトルと単位を最初に見る",
          "「〜倍」は as 〜 as の前に twice・three times",
          "メールは差出人・用件から読む",
        ],
      },
    ],
  },
  {
    title: "代名詞と数量を表す語",
    studyPeriod: "中3前半",
    examType: "koko",
    intro:
      "one・it・that、some・any、another・the other など、小さな語の使い分けは適語補充で毎年のように出ます。何を指す語かを考える習慣をつけましょう。",
    items: [
      {
        label: "one・it・that の使い分け",
        locked: true,
        formula: "it ＝ 同じ物そのもの ／ one ＝ 同じ種類の別の物 ／ that ＝ the＋名詞のくり返し",
        explanation:
          "前に出た名詞を受けるとき、「その物そのもの」なら it、「同じ種類の別の物」なら one を使います。比べる文で the＋名詞のくり返しをさけたいときは that（複数なら those）を使います。",
        steps: [
          "前の名詞が「その物そのもの」か「同じ種類の別の物」かを考える",
          "その物そのもの → it（複数は they・them）",
          "同じ種類の別の物 → one（複数は ones）",
          "形容詞がつくときは a bigger one のように one を使う",
          "比較の文で the＋名詞をくり返す代わりに that of 〜 を使う",
          "複数の名詞をくり返すときは those of 〜 にする",
        ],
        example: {
          q: "I lost my pen, so I will buy a new ( ). の空所は。",
          a: "one。なくした my pen そのものではなく「同じ種類の別のペン」を買うので one を使う。",
        },
        quiz: [
          {
            q: "I have a dog. ( ) is very big. の空所は。",
            a: "It",
            explanation:
              "a dog そのものを指しているので it を使う。同じ種類の別の犬ではなく、いま話している犬自身のことだから、one ではなく it になる。",
          },
          {
            q: "I do not like this bag. Please show me a bigger ( ). の空所は。",
            a: "one",
            explanation:
              "見せてほしいのは、この bag ではなく同じ種類の別のかばんなので one を使う。it を入れると、この bag そのものを指すことになり意味が合わない。",
          },
          {
            q: "The climate of Japan is warmer than ( ) of Canada. の空所は。",
            a: "that",
            explanation:
              "the climate のくり返しをさけるため、that を使う。climate は単数扱いなので that になり、比べる名詞が複数なら those を使うという決まりである。",
          },
        ],
        checkpoints: [
          "it はその物そのもの、one は同じ種類の別の物",
          "形容詞がつくときは a bigger one",
          "比較で名詞をくり返さないときは that of・those of",
        ],
      },
      {
        label: "some・any・no と someone・something",
        locked: true,
        formula: "肯定文は some ／ 否定・疑問は any ／ no ＝ not any ／ -thing・-one のあとに形容詞",
        explanation:
          "some は「いくつかの」、any は否定文で「少しも」、疑問文で「いくらか」の意味です。ただし、人にすすめたりたのんだりする疑問文では、相手に Yes を期待するので some を使います。something などは形容詞を後ろに置きます。",
        steps: [
          "肯定文 → some、否定文・疑問文 → any",
          "すすめる・たのむ疑問文 → some（Would you like some tea?）",
          "no ＝ not any（I have no time. ＝ I do not have any time.）",
          "someone・anyone・everyone・something・anything は単数扱い",
          "形容詞は後ろに置く（something cold）",
          "「〜するための」は to不定詞を後ろに置く（something to drink）",
        ],
        example: {
          q: "I do not have any friends here. を no を使って書きかえなさい。",
          a: "I have no friends here. not any ＝ no なので、動詞は肯定の形にもどす。",
        },
        quiz: [
          {
            q: "「何か冷たい飲み物がほしい」 I want ( ) ( ) to drink. の空所は。",
            a: "something cold",
            explanation:
              "something のような -thing の語は、形容詞を後ろに置く決まりなので something cold の語順になる。cold something とはしない。あとに to drink をつなぐと「飲むための冷たいもの」になる。",
          },
          {
            q: "I do not have ( ) time. の空所に some と any のどちらが入るか。",
            a: "any",
            explanation:
              "否定文では any を使うので、any が入る。「少しも〜ない」という意味を作るのは any であり、some は肯定文で使う語だからである。",
          },
          {
            q: "Would you like ( ) tea? の空所は some と any のどちらか。",
            a: "some",
            explanation:
              "人にすすめる疑問文は、相手が Yes と答えることを期待しているので some を使う。疑問文だから any と決めつけると誤りになるため、すすめる・たのむ文は例外として覚える。",
          },
        ],
        checkpoints: [
          "否定文・ふつうの疑問文は any",
          "すすめる・たのむ疑問文は some",
          "something cold のように形容詞は後ろ",
        ],
      },
      {
        label: "another・the other・others の使い分け",
        locked: true,
        formula: "another ＝ もう1つ ／ the other ＝ 残りの1つ ／ others ＝ ほかのいくつか ／ the others ＝ 残り全部",
        explanation:
          "「ほかの」を表す語は、数が決まっているかどうかで使い分けます。2つあって1つを言ったあとの残りは the other、3つ以上で残り全部なら the others、残りが決まっていない「ほかの」なら others です。",
        steps: [
          "another ＝ an ＋ other。不特定の「もう1つ別の」",
          "2つのうち1つ → one、残りの1つ → the other",
          "3つ以上のうち1つ → one、残りの1つ → another",
          "残り全部（数が決まっている）→ the others",
          "残りが決まっていない「ほかの人・物」→ others",
          "other は名詞の前につく（other students）",
        ],
        example: {
          q: "I have two brothers. One is a student, and ( ) is a teacher. の空所は。",
          a: "the other。兄弟は2人と決まっていて、1人の残りは1人なので the other を使う。",
        },
        quiz: [
          {
            q: "This cup is dirty. Please give me ( ) one. の空所は。",
            a: "another",
            explanation:
              "another は an と other が合わさった語で「もう1つ別の」という意味である。one は単数なので、単数につく another が入る。数が決まっていない別の物を指すために使う。",
          },
          {
            q: "There are three apples. One is red, and ( ) are green. の空所は。",
            a: "the others",
            explanation:
              "3つのうち1つをのぞいた残りは、2つとも green で数が決まっている。残り全部を表すので、複数の the others を使う。were ではなく are なので複数扱いだと分かる。",
          },
          {
            q: "Some students like music, and ( ) like sports. の空所は。",
            a: "others",
            explanation:
              "「音楽が好きな生徒もいれば、スポーツが好きな生徒もいる」という文で、残りの生徒全員とは限らないので others を使う。some 〜, others 〜 は残りが決まっていない言い方だから、the はつけない。",
          },
        ],
        checkpoints: [
          "2つのうち残りの1つは the other",
          "残り全部は the others、決まっていない残りは others",
          "another は単数の名詞につく",
        ],
      },
      {
        label: "every・each・all・both・either・neither",
        locked: true,
        formula: "every・each は単数扱い ／ all は3つ以上 ／ both は2つとも ／ either・neither は2つのうち",
        explanation:
          "数量を表す語は、いくつを対象にするかと、単数扱いか複数扱いかで使い分けます。every は「みんな」の意味でも単数扱いなので、動詞に三単現の s がつきます。2つの場合は both・either・neither を使います。",
        steps: [
          "every ＋ 単数名詞、each ＋ 単数名詞（動詞に s がつく）",
          "all ＋ 複数名詞（3つ以上のすべて）",
          "both ＋ 複数名詞（2つとも）。複数扱い",
          "either ＝ 2つのうちどちらか、neither ＝ 2つのうちどちらも〜ない",
          "neither は否定の意味を含むので not と重ねない",
          "not ＋ either ＝ neither と書きかえられる",
        ],
        example: {
          q: "Every student ( ) a uniform. (wear) の空所は。",
          a: "wears。every は「みんな」でも単数扱いなので、三単現の s をつける。",
        },
        quiz: [
          {
            q: "Every boy in my class ( ) soccer. (like) の空所は。",
            a: "likes",
            explanation:
              "every は意味では「みんな」だが、形の上では every ＋ 単数名詞を作り、単数扱いになる。だから動詞に三単現の s がついて likes になる。",
          },
          {
            q: "「私の姉は2人とも東京に住んでいます」 ( ) of my sisters live in Tokyo. の空所は。",
            a: "Both",
            explanation:
              "2人とも、と2つの両方を言うので both を使う。live に s がないことから複数扱いだと分かる。either は2つのうちどちらか1つを表すので、この文には合わない。",
          },
          {
            q: "I do not like ( ) of the two bags. 「どちらも好きではない」の空所は。",
            a: "either",
            explanation:
              "not と一緒に使うと either は「どちらも〜ない」という意味になる。neither はそれ自体が否定の語なので、not と重ねて使うことはできない。つまり I like neither of them. と同じ内容になる。",
          },
        ],
        checkpoints: [
          "every・each は単数扱いで動詞に s",
          "2つには both・either・neither、3つ以上には all",
          "neither は not と重ねて使わない",
        ],
      },
    ],
  },
  {
    title: "動詞まわりの発展",
    studyPeriod: "中3夏",
    examType: "koko",
    intro:
      "見る・聞く動詞のあとの形、助動詞のあとの be、時制の一致、話法の書きかえは、中3の後半に習って入試で差がつく分野です。",
    items: [
      {
        label: "知覚動詞のあとの原形と ing形",
        locked: true,
        formula: "see・hear・feel・watch ＋ 人・物 ＋ 原形（全体）／ ing形（途中）",
        explanation:
          "see や hear のような感覚の動詞のあとには、「人が〜するのを」という形が続きます。動作の始めから終わりまでを見聞きしたなら原形、その最中を見聞きしたなら ing形を使います。どちらも to は入りません。",
        steps: [
          "知覚動詞：see・watch・hear・feel・notice",
          "形：知覚動詞 ＋ 人・物 ＋ 動詞",
          "動作の全体を見聞きした → 原形",
          "動作の途中を見聞きした → ing形",
          "動詞の前に to を置かない",
          "受け身になると to がつく（He was seen to enter.）が、中学では原形のほうを中心に覚える",
        ],
        example: {
          q: "I saw him ( ) the room. (enter) の空所は。",
          a: "enter。部屋に入る動作を始めから終わりまで見たので原形を使う。「入っている最中」を見たなら entering。",
        },
        quiz: [
          {
            q: "I heard the girl ( ) in the next room. (sing) 歌っている最中の声を聞いた。",
            a: "singing",
            explanation:
              "歌っている最中の声を聞いたので、進行中を表す ing形を使う。歌い終わるまで全部聞いたのであれば原形 sing になるので、意味で使い分けるわけである。",
          },
          {
            q: "I saw him ( ) the street. (cross) 渡りきるところを見た。",
            a: "cross",
            explanation:
              "道を渡り始めて渡りきるまでの全体を見たので、原形を使う。ing形は最中を表すので、全体を見たという意味にならない。",
          },
          {
            q: "知覚動詞のあとの動詞の前に to をつけるか。",
            a: "つけない",
            explanation:
              "知覚動詞のあとに来る原形は、to のつかない原形不定詞なので、I saw him to run. は誤りになる。I saw him run. が正しい形である。",
          },
        ],
        checkpoints: [
          "全体は原形、最中は ing形",
          "知覚動詞のあとに to は入れない",
          "動詞は see・hear・feel・watch など",
        ],
      },
      {
        label: "助動詞のあとの be と受け身",
        locked: true,
        formula: "助動詞 ＋ be ＋ 過去分詞（〜される）／ must be・cannot be・may be",
        explanation:
          "助動詞のあとの動詞は必ず原形です。受け身は be＋過去分詞の形なので、助動詞のあとでは be が原形の形で残り、can be seen（見られる）のようになります。must be は「〜にちがいない」という推量にも使います。",
        steps: [
          "助動詞のあとは原形（be・do・have など）",
          "受け身 → 助動詞 ＋ be ＋ 過去分詞（will be held）",
          "must be 〜 ＝ 〜にちがいない",
          "cannot be 〜 ＝ 〜のはずがない",
          "may be 〜 ＝ 〜かもしれない",
          "主語が「〜される」側かどうかで受け身かを決める",
        ],
        example: {
          q: "This room must be cleaned every day. の意味は。",
          a: "この部屋は毎日そうじされなければならない。 must ＋ be ＋ 過去分詞で「〜されなければならない」。",
        },
        quiz: [
          {
            q: "Stars can ( ) at night. 「星は夜に見られる」see の形を入れなさい。",
            a: "be seen",
            explanation:
              "星は「見られる」側なので受け身になる。助動詞 can のあとは原形なので、is ではなく be を使い、be seen となるわけである。",
          },
          {
            q: "He worked all night. He ( ) be tired. 「疲れているにちがいない」の空所は。",
            a: "must",
            explanation:
              "一晩中働いた、という理由から強く推量しているので must を使う。must には「〜しなければならない」のほかに「〜にちがいない」という意味もあるからである。",
          },
          {
            q: "That story cannot be true. の意味は。",
            a: "その話が本当のはずがない",
            explanation:
              "cannot be は「〜のはずがない」という強い否定の推量である。ここでの cannot は「能力がない」ではなく「そんなことは考えられない」という判断を表すので、「できない」と訳すと意味が合わなくなる。must be（にちがいない）の反対の意味として覚えるとよい。",
          },
        ],
        checkpoints: [
          "助動詞のあとは原形、受け身は助動詞＋be＋過去分詞",
          "must be は「〜にちがいない」",
          "cannot be は「〜のはずがない」",
        ],
      },
      {
        label: "時制の一致",
        locked: true,
        formula: "主節が過去 → that 節も過去系（will→would、can→could、is→was）",
        explanation:
          "「〜と言った」「〜と思った」のように、主になる文の動詞が過去形のとき、あとの節の動詞も過去の形にそろえます。話している時点から見た「そのときの様子」を表すためです。ただし、いつでも変わらない事実は現在形のままです。",
        steps: [
          "主節（said・thought・knew など）が過去か確かめる",
          "am・is・are → was・were",
          "do・does → did、have → had",
          "will → would、can → could、may → might",
          "変わらない事実（地球は太陽のまわりを回る）は現在形のまま",
          "現在形の主節のときは、that 節は変えない",
        ],
        example: {
          q: "I think he is kind. を I thought で始めて書きかえなさい。",
          a: "I thought he was kind. thought が過去形なので、is を was にする。",
        },
        quiz: [
          {
            q: "She said that she ( ) come. 元の言葉は I will come.",
            a: "would",
            explanation:
              "said が過去形なので、あとの will も過去形の would にそろえる。時制の一致という決まりで、「そのときから見た未来」を表すからである。",
          },
          {
            q: "I knew that he ( ) my brother. (is / was)",
            a: "was",
            explanation:
              "knew が過去形なので、that 節の is を was に変える。主節の動詞が過去なら、あとの節の時制もそれにそろえる決まりだからである。",
          },
          {
            q: "Our teacher said that the earth ( ) around the sun. (goes / went)",
            a: "goes",
            explanation:
              "地球が太陽のまわりを回ることは、いつでも変わらない事実なので現在形のままにする。主節が過去でも、不変の真理は時制を変えないので goes になる。",
          },
        ],
        checkpoints: [
          "主節が過去なら that 節も過去系にそろえる",
          "will → would、can → could",
          "いつも変わらない事実は現在形のまま",
        ],
      },
      {
        label: "直接話法と間接話法の書きかえ",
        locked: true,
        formula: "said to → told ／ 引用符をはずし that ／ 人称・時制を直す",
        explanation:
          "人の言葉をそのまま伝えるのが直接話法、言った内容を自分の言葉で伝えるのが間接話法です。書きかえでは、動詞・人称・時制の3つを順に直します。疑問文は if を使い、命令文は tell 人 to 〜 の形にします。",
        steps: [
          "said to → told（人がつくときは tell を使う）",
          "引用符をはずして that でつなぐ",
          "人称を直す（I → he・she、my → his・her）",
          "時制を一致させる（am → was、will → would）",
          "疑問文は ask ＋ 人 ＋ if ＋ 主語 ＋ 動詞（平叙文の語順）",
          "命令文は tell ＋ 人 ＋ to ＋ 原形",
        ],
        example: {
          q: "He said to me, \"I am busy.\" を間接話法にしなさい。",
          a: "He told me that he was busy. said to は told に、I は he に、am は was に直す。",
        },
        quiz: [
          {
            q: "She said to him, \"I like your bag.\" → She ( ) him that she ( ) his bag.",
            a: "told / liked",
            explanation:
              "said to は told に変わる。さらに時制の一致で like が過去形の liked になり、your は話し手から見た his に変わるため、この2語が入るわけである。",
          },
          {
            q: "Tom said to me, \"Are you hungry?\" → Tom asked me ( ) I ( ) hungry.",
            a: "if / was",
            explanation:
              "Yes・No で答える疑問文は、if を使って間接話法にする。語順は平叙文になるので I was hungry となる。are を過去形にして was に直すのは時制の一致のためである。",
          },
          {
            q: "The teacher said to us, \"Be quiet.\" → The teacher told us ( ) be quiet.",
            a: "to",
            explanation:
              "命令文は tell ＋ 人 ＋ to ＋ 原形の形で表すので、to が入る。命令の内容を「〜するように」と伝える形だからである。",
          },
        ],
        checkpoints: [
          "said to は told、疑問文は ask ＋ if",
          "命令文は tell 人 to 原形",
          "人称と時制を直すのを忘れない",
        ],
      },
      {
        label: "I wish の文（中学の範囲）",
        locked: true,
        formula: "I wish ＋ 主語 ＋ 過去形（could・were）＝ 〜ならいいのに",
        explanation:
          "今の事実とはちがうことを願うとき、I wish のあとの動詞を過去形にします。過去形にするのは「過去の話」だからではなく、現実からはなれた願いであることを示すためです。be動詞は主語にかかわらず were を使います。",
        steps: [
          "現実にはできない・ないことを願う文かを確かめる",
          "I wish ＋ 主語 ＋ 動詞の過去形",
          "can → could、will → would",
          "be動詞は were を使う（I wish I were 〜）",
          "意味は「〜だったらいいのに」",
          "実際には「〜ではない」という気持ちがこめられている",
        ],
        example: {
          q: "I wish I ( ) a bird. の空所は。",
          a: "were。人は鳥ではないという現実とちがう願いなので、be動詞は were を使う。",
        },
        quiz: [
          {
            q: "I wish I ( ) fly. (can) の空所は。",
            a: "could",
            explanation:
              "空を飛べないという現実とちがう願いなので、can を過去形の could にする。I wish のあとは過去形を使い、現実との距離を表すためである。",
          },
          {
            q: "I wish I ( ) taller. (am) の空所は。",
            a: "were",
            explanation:
              "I wish のあとでは、be動詞は主語が I でも were を使うことが多い。今は背が高くないという現実とちがう願いを表すため、am ではなく were になる。",
          },
          {
            q: "I wish I had more time. の意味は。",
            a: "もっと時間があればいいのに",
            explanation:
              "実際には時間が足りないという気持ちを表す文である。had は過去形だが、過去のことを言っているのではなく、現実とちがう願いを表すために過去形にしているからである。",
          },
        ],
        checkpoints: [
          "I wish のあとは過去形",
          "be動詞は were を使う",
          "「〜ならいいのに」＝ 実際はそうではない",
        ],
      },
    ],
  },
  {
    title: "熟語と語いの頻出項目",
    studyPeriod: "中3夏",
    examType: "koko",
    intro:
      "熟語は、意味を覚えるだけでなく、動詞や前置詞の組み合わせが変わると意味が変わることを意識すると、適語補充で間違えにくくなります。",
    items: [
      {
        label: "動詞と前置詞・副詞の組み合わせ",
        locked: true,
        formula: "look for（さがす）・look after（世話をする）・take off（ぬぐ）・put on（着る）",
        explanation:
          "動詞のあとの前置詞や副詞で、意味が大きく変わります。look は at なら「見る」、for なら「さがす」、after なら「世話をする」です。put on のように代名詞を使うときは、動詞と副詞の間に入れるものもあります。",
        steps: [
          "look at（見る）・look for（さがす）・look after（世話をする）",
          "take care of（世話をする）・take off（ぬぐ・離陸する）",
          "put on（身につける）・get up（起きる）・get on／off（乗る・降りる）",
          "turn on（つける）・turn off（消す）・give up（あきらめる）",
          "run out of（使い果たす）・wait for（待つ）・come from（〜出身）",
          "put on や turn off は、代名詞を間に入れる（put it on）",
        ],
        example: {
          q: "「私は犬の世話をします」を take を使って英語にしなさい。",
          a: "I take care of my dog. take care of ＝ 世話をする。look after my dog でも同じ意味。",
        },
        quiz: [
          {
            q: "I am ( ) ( ) my key. 「私はかぎをさがしています」の空所は。",
            a: "looking for",
            explanation:
              "look at は「見る」、look for は「さがす」で、前置詞がちがうと意味が変わる。かぎを見つけようとしているので for を使うわけである。",
          },
          {
            q: "Take ( ) your hat. 「ぼうしをぬぎなさい」の空所は。",
            a: "off",
            explanation:
              "off ははなれることを表すので、take off で「ぬぐ」になる。反対に、身につけるときは on を使うため、put on your hat は「ぼうしをかぶる」になる。",
          },
          {
            q: "Put your coat on. の coat を it に変えて書きかえなさい。",
            a: "Put it on.",
            explanation:
              "代名詞は動詞と副詞の間に置くので、Put it on. の語順になる。Put on it. とは言えない。これは it が短い語で、動詞のすぐあとに置かれる決まりだからである。",
          },
        ],
        checkpoints: [
          "look at と look for と look after の意味のちがい",
          "on は身につける、off は取りはずす",
          "put it on のように代名詞は動詞と副詞の間",
        ],
      },
      {
        label: "前置詞をともなう表現",
        locked: true,
        formula: "be interested in・be good at・be famous for・be made of／from",
        explanation:
          "形容詞や動詞とセットで使う前置詞は決まっています。意味を考えても前置詞は決まらないので、セットで覚えます。前置詞のあとに動詞を置くときは、必ず ing形にします。",
        steps: [
          "be interested in（〜に興味がある）",
          "be good at（〜が得意）・be afraid of（〜がこわい）",
          "be famous for（〜で有名）・be proud of（〜を誇りに思う）",
          "be made of（材料）・be made from（原料）",
          "be full of（〜でいっぱい）・be late for（〜におくれる）",
          "前置詞のあとに動詞がくるときは ing形にする",
        ],
        example: {
          q: "This table is made ( ) wood. の空所は。",
          a: "of。木のままの形が見て分かる材料なので of を使う。原料が変わって見た目で分からないときは from。",
        },
        quiz: [
          {
            q: "Wine is made ( ) grapes. の空所に of と from のどちらが入るか。",
            a: "from",
            explanation:
              "ぶどうはワインになると形が変わって見た目では分からない。原料が別の物に変わるときは from を使うので from が入る。",
          },
          {
            q: "He is good ( ) swimming. の空所は。",
            a: "at",
            explanation:
              "「〜が得意」は be good at 〜 で表す。前置詞のあとに動詞がくるときは ing形にするので、swimming となっているのである。",
          },
          {
            q: "Kyoto is famous ( ) its temples. の空所は。",
            a: "for",
            explanation:
              "be famous for 〜 は「〜で有名」という意味で、有名な理由や特色を for で表す。be famous as とすると「〜として有名」となり意味が変わるため、区別が必要である。",
          },
        ],
        checkpoints: [
          "of は材料、from は原料",
          "be good at のあとは ing形",
          "be famous for（〜で）と be famous as（〜として）のちがい",
        ],
      },
      {
        label: "形容詞・副詞で意味が変わる語",
        locked: true,
        formula: "hard / hardly ・ late / lately ・ a few / few ・ a little / little",
        explanation:
          "形がにている語で意味がまったく変わるものは、入試の定番です。hard は「熱心に」、hardly は「ほとんど〜ない」です。数えられる名詞には few、数えられない名詞には little を使い、a がつくと「少しはある」、つかないと「ほとんどない」になります。",
        steps: [
          "hard（熱心に・かたい・難しい）と hardly（ほとんど〜ない）",
          "late（おそく）と lately（最近）",
          "near（近くに）と nearly（ほとんど）",
          "a few ＋ 数えられる名詞（少しはある）、few（ほとんどない）",
          "a little ＋ 数えられない名詞（少しはある）、little（ほとんどない）",
          "hardly・few・little は否定の意味を含むので not と重ねない",
        ],
        example: {
          q: "He studied ( ) for the test. 「彼は試験のために熱心に勉強した」の空所は。",
          a: "hard。hardly にすると「ほとんど勉強しなかった」という反対の意味になる。",
        },
        quiz: [
          {
            q: "I could ( ) hear his voice. 「ほとんど聞こえなかった」の空所は。",
            a: "hardly",
            explanation:
              "hardly は「ほとんど〜ない」という否定の意味を含むので、not をつけなくても否定の文になる。hard と混ぜないように語尾の ly を確かめる。",
          },
          {
            q: "There is ( ) water in the bottle. 「少しはある」の空所は。",
            a: "a little",
            explanation:
              "water は数えられない名詞なので little を使い、「少しはある」という意味にするため a をつける。a がないと「ほとんどない」になってしまう。",
          },
          {
            q: "I have ( ) friends here. 「ほとんどいない」の空所は。",
            a: "few",
            explanation:
              "friends は数えられる名詞なので few を使う。「ほとんどいない」という意味は、a をつけない few で表すため、a few とすると「少しはいる」になり反対の意味になる。",
          },
        ],
        checkpoints: [
          "hard は熱心に、hardly はほとんど〜ない",
          "数えられるなら few、数えられないなら little",
          "a がつくと「少しある」、つかないと「ほとんどない」",
        ],
      },
    ],
  },
  {
    title: "書きかえ・作文・読解・リスニングの型",
    studyPeriod: "中3秋〜直前",
    examType: "koko",
    intro:
      "直前期は、新しい知識を増やすより、答え方の型を身につけることが得点に直結します。ここでは書きかえ・作文・長文・リスニングの型をまとめます。",
    items: [
      {
        label: "受け身・現在完了・未来の書きかえ",
        locked: true,
        formula: "能動 ⇔ 受け身、過去 ＋ 今も ⇔ 現在完了、will ⇔ be going to",
        explanation:
          "書きかえでは、同じ内容を別の形で表す型を覚えます。受け身は目的語を主語にして be＋過去分詞にします。「〜前から今まで」は現在完了の継続で表します。will と be going to は未来を表す同じ仲間です。",
        steps: [
          "能動態の目的語を主語にして、動詞を be＋過去分詞にする",
          "行為をした人は by ＋ 人 で最後に置く",
          "過去のある時から今もつづく → have［has］＋過去分詞（for・since）",
          "be動詞の過去分詞は been、write の過去分詞は written",
          "will ＝ be going to（主語に合わせて am・is・are）",
          "書きかえたあと、時制と主語が合っているか確かめる",
        ],
        example: {
          q: "My mother made this cake. を受け身に書きかえなさい。",
          a: "This cake was made by my mother. 過去の文なので was、make の過去分詞は made。",
        },
        quiz: [
          {
            q: "Tom came to Japan three years ago and is still here. Tom ( ) ( ) in Japan for three years.",
            a: "has been",
            explanation:
              "3年前から今もいるので、現在完了の継続を使う。主語 Tom は三人称単数なので has、be動詞の過去分詞は been になるため has been が入る。",
          },
          {
            q: "Ken wrote this letter. → This letter ( ) ( ) by Ken.",
            a: "was written",
            explanation:
              "目的語の this letter を主語にして受け身にする。もとの文が過去形なので be動詞は was、write の過去分詞は written になるからである。",
          },
          {
            q: "I will visit Kyoto tomorrow. を be going to を使って書きかえなさい。",
            a: "I am going to visit Kyoto tomorrow.",
            explanation:
              "will と be going to は、どちらも未来を表す形なので言いかえられる。主語が I なので be動詞は am になる。will のあとの動詞は原形だが、to のあとも原形のままである。",
          },
        ],
        checkpoints: [
          "受け身は be＋過去分詞、行為者は by",
          "have been と have gone のちがいに注意",
          "will ＝ be going to は主語で be動詞を変える",
        ],
      },
      {
        label: "自由英作文の型",
        locked: true,
        formula: "意見 → 理由 → 具体例（→ まとめ）の順に書く",
        explanation:
          "自由英作文は、書く順番を決めておくと迷いません。まず自分の意見をはっきり述べ、次にその理由、最後に具体例を書きます。難しい単語や複雑な文は使わず、確実に書ける英語で書くことが大切です。",
        steps: [
          "設問を読み、「どちらか選ぶ」「賛成か反対か」など聞かれていることを確かめる",
          "1文目：I think 〜. または I like 〜 better. で意見を書く",
          "2文目：because 〜 で理由を書く",
          "3文目：For example, 〜. で具体例を書く",
          "語数・文数の条件を数えて守る",
          "主語と動詞・三単現の s・つづり・ピリオドを見直す",
        ],
        example: {
          q: "Which do you like better, summer or winter? を3文で答えなさい。",
          a: "I like summer better. I can swim in the sea in summer. For example, I go to the beach with my family every year.",
        },
        quiz: [
          {
            q: "具体例を示すときに文の始めに置く表現を1つ書きなさい。",
            a: "For example,",
            explanation:
              "理由だけでは説明がぼんやりしてしまうので、For example, で具体的な例を示す。読む人がイメージしやすくなるため、For instance, でもよい。",
          },
          {
            q: "I like dogs ( ) they are friendly. の空所は。",
            a: "because",
            explanation:
              "理由を述べるときは、because でつなぐ。「犬が好き」の理由が「人なつっこいから」なので、原因と結果のつながりをつくる because が入る。",
          },
          {
            q: "3文で書く指定のとき、書く順番は。",
            a: "意見・理由・具体例（またはまとめ）",
            explanation:
              "順番を決めておくと、書く内容に迷わず時間を節約できるため。また、意見の理由と例がそろっていると、内容がよく伝わるので評価も高くなる。",
          },
        ],
        checkpoints: [
          "意見 → 理由 → 具体例の順",
          "理由は because、例は For example,",
          "語数・文数の条件を必ず守る",
        ],
      },
      {
        label: "和文英訳の頻出パターン",
        locked: true,
        formula: "日本語を「主語＋動詞」にととのえてから、決まった表現に当てはめる",
        explanation:
          "和文英訳は、日本語を直訳せず、英語で言いやすい形に言いかえます。よく出る表現は型として覚えておくと、ミスが減ります。「〜したことがある」は現在完了、「〜のしかた」は how to 〜 で表します。",
        steps: [
          "日本文の主語と動詞を決める（省略された主語を補う）",
          "〜したことがある → have＋過去分詞（have been to 〜）",
          "〜のしかた → how to 〜",
          "人に〜するように言う → tell ＋ 人 ＋ to 〜",
          "〜してもよいですか → May I 〜?、〜してくれませんか → Will you 〜?",
          "時制と三単現の s を確かめる",
        ],
        example: {
          q: "「私は英語を勉強するのが好きです」を英語にしなさい。",
          a: "I like studying English. または I like to study English.",
        },
        quiz: [
          {
            q: "「駅への行き方を教えてください」を英語にしなさい。",
            a: "Please tell me how to get to the station.",
            explanation:
              "「〜のしかた」は how to 〜 で表し、「人に物を教える」は tell 人 物 の順に並べる。「駅へ行く」は get to the station で表すので、この文になる。",
          },
          {
            q: "「私は京都に行ったことがあります」を英語にしなさい。",
            a: "I have been to Kyoto.",
            explanation:
              "経験を表す「行ったことがある」は、have been to 〜 で表す。have gone to は「行ってしまって今いない」という意味になるため、経験には使えない。",
          },
          {
            q: "「彼は私に部屋をそうじするように言った」を英語にしなさい。",
            a: "He told me to clean my room.",
            explanation:
              "「人に〜するように言う」は tell ＋ 人 ＋ to ＋ 原形で表す。said を使うと形が合わなくなるため、tell の形を使う。過去の文なので tell は told になる。",
          },
        ],
        checkpoints: [
          "難しい日本語は易しい日本語に言いかえてから訳す",
          "have been to（経験）と have gone to（行ってしまった）のちがい",
          "tell 人 to 〜、how to 〜 は型で覚える",
        ],
      },
      {
        label: "長文の段落の役割とつなぎ言葉",
        locked: true,
        formula: "話題 → 具体例・体験 → まとめ ／ However の前後は逆の内容",
        explanation:
          "長い英文は、段落ごとに役割があります。最初の段落で話題を出し、途中で具体例や体験を述べ、最後に筆者の考えをまとめる形が多いです。つなぎ言葉は、前後の関係を教えてくれる道しるべです。",
        steps: [
          "最初の段落で話題と筆者の立場をつかむ",
          "for example のあとは具体例（直前に主張がある）",
          "however・but のあとは逆の内容（筆者の言いたいことが多い）",
          "so・therefore のあとは結果",
          "first・second・finally は順序を示す",
          "I think・I believe は筆者の意見のしるし",
        ],
        example: {
          q: "段落の始めに However があるとき、その段落は前の段落とどんな関係か。",
          a: "逆の内容。However は「しかし」なので、前の段落と反対のことが書かれる。",
        },
        quiz: [
          {
            q: "For example の直前の文は、ふつうどんな内容か。",
            a: "主張やまとめの文",
            explanation:
              "具体例は、主張を分かりやすくするために出すものなので、直前には主張が書かれている。だから For example の前の文を読むと、筆者の言いたいことが分かる。",
          },
          {
            q: "However の前後の内容はどんな関係か。",
            a: "逆の内容",
            explanation:
              "however は「しかし」という意味で、前の内容に反することを後ろに続ける。そのため、筆者が本当に言いたいことは however の後ろにあることが多いのである。",
          },
          {
            q: "筆者の意見を見つける目印になる表現を1つ書きなさい。",
            a: "I think など",
            explanation:
              "I think や I believe は、筆者が自分の考えを述べる合図なので、意見を問う設問ではそのまわりの文が根拠になる。つまり、事実を述べる文と意見を述べる文を見分けるための手がかりになる。",
          },
        ],
        checkpoints: [
          "however の後ろに筆者の主張が来やすい",
          "for example の前に主張、後ろに具体例",
          "I think のある文は筆者の意見",
        ],
      },
      {
        label: "紛らわしい数字・時刻・否定の聞き分け",
        locked: true,
        formula: "thirTEEN と THIRty ／ half past・quarter to ／ but のあとが結果",
        explanation:
          "リスニングでは、似た音や言いかえで間違いやすい部分があります。数字は強く読む位置で聞き分け、時刻は past と to の意味を知っておきます。また、「〜するつもりだった、しかし」のように、途中で内容が変わる話では最後の決定を答えます。",
        steps: [
          "-teen は語尾の teen を強く読む（thirTEEN）",
          "-ty は前を強く読む（THIRty）",
          "half past six ＝ 6時30分、quarter past six ＝ 6時15分",
          "quarter to seven ＝ 6時45分（7時15分前）",
          "not・never・hardly などの否定を聞きのがさない",
          "but・however のあとに実際の結果や本当の話が来る",
        ],
        example: {
          q: "The meeting starts at a quarter to ten. 会議は何時何分に始まるか。",
          a: "9時45分。quarter to ten は「10時の15分前」という意味。",
        },
        quiz: [
          {
            q: "thirteen と thirty は、どこを強く読んで聞き分けるか。",
            a: "thirteen は後ろ、thirty は前を強く読む",
            explanation:
              "-teen は語尾の teen を強く長く読むので、後ろに強さが来る。-ty は前の音節を強く読むので、強さの位置がちがうため聞き分けられる。",
          },
          {
            q: "half past three は何時何分か。",
            a: "3時30分",
            explanation:
              "half は「半分」、past は「〜を過ぎて」なので、3時を半分過ぎた3時30分になる。past は過ぎた時間、to は前の時間を表すという意味で使い分ける。",
          },
          {
            q: "I was going to go, but it rained, so I stayed home. 実際にしたことは。",
            a: "家にいた",
            explanation:
              "「行くつもりだった」が先に聞こえても、but のあとに実際の結果が来るからである。雨が降ったので家にいた、という最後の部分が答えになる。",
          },
        ],
        checkpoints: [
          "-teen は後ろ、-ty は前を強く読む",
          "half past は30分、quarter to は15分前",
          "but のあとが実際の結果",
        ],
      },
    ],
  },
  {
    title: "つづりと発音",
    studyPeriod: "中3秋〜直前",
    examType: "koko",
    intro:
      "つづりのミスと発音の取りちがえは、あと少しで得点できる問題で失点する原因になります。きまりを知っておくと、覚える量が減ります。",
    items: [
      {
        label: "つづりをまちがえやすい語と変化のきまり",
        locked: true,
        formula: "子音字＋y は i に変えて es ／ 短母音＋子音は子音を重ねる",
        explanation:
          "語の形が変わるときのきまりを知っておくと、つづりをまちがえにくくなります。study が studies になるのは、y を i に変えて es をつけるきまりがあるからです。ing や ed がつくときは、最後の子音を重ねる場合があります。",
        steps: [
          "子音字＋y → y を i に変えて es・ed（study → studies・studied）",
          "母音字＋y はそのまま s（boy → boys）",
          "短母音＋1子音の語は子音を重ねる（stop → stopping）",
          "e で終わる語は e を取って ing（make → making）",
          "f・fe で終わる語は ves（leaf → leaves、knife → knives）",
          "まちがえやすい語：friend、beautiful、different、Wednesday、February",
        ],
        example: {
          q: "study の三単現の形と過去形を書きなさい。",
          a: "studies / studied。子音字＋y なので y を i に変えて es・ed をつける。",
        },
        quiz: [
          {
            q: "「友達」を英語で書きなさい。",
            a: "friend",
            explanation:
              "「友達」は friend。fri のあとに end（終わり）がつくと覚えると、i と e の順を取りちがえないから。",
          },
          {
            q: "begin の ing形を書きなさい。",
            a: "beginning",
            explanation:
              "begin は最後のアクセントが後ろにあり、短母音＋1子音で終わる語なので、n を重ねて ing をつける。つづりを重ねる決まりが働くため、beginning になる。",
          },
          {
            q: "city の複数形を書きなさい。",
            a: "cities",
            explanation:
              "子音字＋y で終わる語は、y を i に変えて es をつけるので cities になる。boy のように母音字＋y の語は、そのまま s をつけて boys となるため、区別が必要である。",
          },
        ],
        checkpoints: [
          "子音字＋y は i に変えて es",
          "短母音＋1子音は子音を重ねてから ing・ed",
          "friend・Wednesday・February など、まちがえやすい語は書いて覚える",
        ],
      },
      {
        label: "発音・アクセント・強勢の考え方",
        locked: true,
        formula: "-ed は [t]・[d]・[id] の3種類 ／ 強く読むのは内容を表す語",
        explanation:
          "発音問題は、きまりで解ける問題が多いです。-ed は、直前の音が息だけの音なら [t]、声を出す音なら [d]、t か d のあとなら [id] と読みます。アクセント問題は、音節ごとに区切って、強く読む位置を1つ決めます。",
        steps: [
          "-ed の直前が t・d → [id]（wanted・needed）",
          "-ed の直前が息だけの音（p・k・s・sh など）→ [t]（stopped・washed）",
          "それ以外（声を出す音）→ [d]（played・called）",
          "アクセントは音節に区切って考える（im-POR-tant）",
          "文の中では名詞・動詞・形容詞・副詞を強く読む",
          "冠詞・前置詞・代名詞・be動詞は弱く早く読む",
        ],
        example: {
          q: "played・washed・wanted のうち、-ed が [id] と読まれるのはどれか。",
          a: "wanted。直前が t なので [id] と読む。played は [d]、washed は [t]。",
        },
        quiz: [
          {
            q: "stopped の -ed の発音は。",
            a: "[t]",
            explanation:
              "stop の最後の p は息だけの音なので、-ed も息だけの [t] になる。声を出す音のあとは [d] になるので、直前の音がどちらかを見分ける。",
          },
          {
            q: "important のアクセントは、何番目の音節にあるか。",
            a: "2番目（por）",
            explanation:
              "im-POR-tant と区切ると、2番目の por を強く読む。アクセントは1語に1つだけで、強く読む音節が決まっているため、辞書やアクセント記号で確かめる。",
          },
          {
            q: "文を読むとき、強く読まれやすい語は何か。",
            a: "名詞・動詞・形容詞・副詞など内容を表す語",
            explanation:
              "意味を伝える中心の語なので強く読まれる。冠詞や前置詞は意味が軽いので、弱く早く読まれるから、聞き取りでも内容語に注意すると意味がつかみやすい。",
          },
        ],
        checkpoints: [
          "-ed は t・d のあとだけ [id]",
          "息だけの音のあとは [t]、声のある音のあとは [d]",
          "文では内容を表す語を強く読む",
        ],
      },
    ],
  },
];
