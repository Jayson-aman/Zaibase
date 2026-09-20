import type { Question } from './questions';

// 日能研・中学受験レベル 英語問題集
// 文法・読解・英作文・語彙・長文

export const nichinokenEigo: Question[] = [

  // ============================================================
  // 基本文法（比較・受動態・不定詞）
  // ============================================================
  {
    id: 'nk_eigo_grammar_01',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n「この山は日本で最も高い山です。」',
    answer: 'This mountain is the highest mountain in Japan.',
    hint: '「最も〜」は最上級（-est / most）を使う。tall→tallest、high→highest',
    explanation:
      '【何を聞かれているか】\n「この山は日本で最も高い山です。」という日本語を英語にする問題。\n\n【なぜthe highestという最上級を使うのか】\n「〜の中で最も…だ」という、3つ以上のものの中で一番であることを表すときは、最上級（the＋形容詞-est）を使う。\n\n【ポイント1】最上級の公式を確認する\nthe＋形容詞の最上級＋in/of〜（〜の中で）。\n\n【ポイント2】highの最上級を確認する\nhighのような1音節の短い形容詞は、語尾に-estをつけて最上級を作る（high→highest）。\n\n【ポイント3】"in Japan"の使い方を確認する\n場所やグループを表すときはin、数や期間を表すときはofを使う。\n\n【答え】\nThis mountain is the highest mountain in Japan.\n\n【確かめ】\n"the highest"の前にtheがついていること、"in Japan"が範囲を表していることを確認する。\n\n【よくあるまちがい】\n最上級にtheをつけ忘れてしまうミス。最上級には基本的にtheをつける。\n\n【ここが絶対】\n最上級は「the＋形容詞-est（またはthe most＋形容詞）＋in/of〜」という形をセットで覚える。',
    difficulty: 'standard',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_grammar_02',
    subject: 'eigo',
    question: '次の文を受動態（受け身）に書き換えなさい。\n"Tom wrote this letter."',
    answer: 'This letter was written by Tom.',
    hint: '受動態：主語 + be動詞 + 過去分詞 + by + 行為者',
    explanation: '受動態のつくり方：\n①目的語（this letter）を主語に\n②be動詞（過去なのでwas）+ 過去分詞（written）\n③元の主語を「by + ...」で後ろにつける\nwrite → wrote → written（不規則変化）',
    difficulty: 'standard',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_grammar_03',
    subject: 'eigo',
    question: '「〜するために」という目的を表す英語の形を答えなさい。また、例文を作りなさい。',
    answer: '不定詞「to + 動詞の原形」を使う。例：I study hard to pass the exam.（試験に合格するために一生懸命勉強します）',
    hint: 'to の後ろは必ず動詞の原形。',
    explanation: '不定詞の目的用法：「〜するために」＝ to + 動詞の原形\n・I went to the store to buy milk.（牛乳を買うためにお店に行った）\n・She practices every day to become a doctor.（医者になるために毎日練習する）\n「in order to」でも同じ意味。',
    difficulty: 'standard',
  },
  {
    id: 'nk_eigo_grammar_04',
    subject: 'eigo',
    question: '現在完了形（have/has + 過去分詞）の3つの用法を答えなさい。',
    answer: '①経験「〜したことがある」（ever/never） ②継続「ずっと〜している」（for/since） ③完了「〜してしまった」（already/just/yet）',
    hint: '「経験・継続・完了」の3つ。キーワードの副詞をセットで覚えよう。',
    explanation:
      '【何を聞かれているか】\n現在完了形（have/has＋過去分詞）の3つの用法を答える問題。\n\n【なぜ現在完了に3つの用法があるのか】\n現在完了は「過去の出来事が今とどうつながっているか」を表す時制で、そのつながり方の違いによって、経験・継続・完了という3つの意味に分かれる。\n\n【ポイント1】経験用法を確認する\n「〜したことがある」という意味で、ever（今までに）・never（一度も〜ない）とセットで使われる。例：Have you ever visited Kyoto?\n\n【ポイント2】継続用法を確認する\n「ずっと〜している」という意味で、for（期間）・since（起点）とセットで使われる。例：I have lived here for five years.\n\n【ポイント3】完了用法を確認する\n「〜してしまった」という意味で、already（すでに）・just（ちょうど）・yet（まだ・もう）とセットで使われる。例：She has already finished her homework.\n\n【答え】\n①経験「〜したことがある」（ever/never） ②継続「ずっと〜している」（for/since） ③完了「〜してしまった」（already/just/yet）\n\n【確かめ】\nそれぞれの用法が、決まったキーワードの副詞（ever/never、for/since、already/just/yet）とセットで使われていることを確認する。\n\n【よくあるまちがい】\n経験用法のneverと完了用法のyetを混同してしまうミス。それぞれの用法に対応するキーワードをセットで覚えることで区別できる。\n\n【ここが絶対】\n現在完了の3用法（経験・継続・完了）を、それぞれのキーワードの副詞とセットで覚える。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_grammar_05',
    subject: 'eigo',
    question: '次の（　）に適切な語を入れなさい。\n"I have ( ) been to America. I want to go there someday."',
    answer: 'never',
    hint: '「一度もない」という経験の否定を表す副詞。',
    explanation:
      '【何を聞かれているか】\n"I have ( ) been to America. I want to go there someday."の空欄に入る、正しい語を選ぶ問題。\n\n【なぜneverが正解なのか】\n2文目の"I want to go there someday."（いつか行きたい）という内容から、1文目は「まだ行ったことがない」という経験の否定を表していると判断できる。\n\n【ポイント1】neverの意味を確認する\nnever＝「一度も〜したことがない」。現在完了の経験用法で使う否定の副詞。\n\n【ポイント2】"have never＋過去分詞"の形を確認する\nhave never been to〜＝「〜に一度も行ったことがない」。\n\n【ポイント3】他の選択肢を消去する\never（肯定文・疑問文で使う）、already・just（完了用法で使う）は、いずれもこの文脈（まだ行ったことがない＋いつか行きたい）には合わない。\n\n【答え】\nnever\n\n【確かめ】\n"I have never been to America."（アメリカに一度も行ったことがない）と"I want to go there someday."（いつか行きたい）が、矛盾なくつながっていることを確認する。\n\n【よくあるまちがい】\neverとneverを混同してしまうミス。everは疑問文・肯定文で「今までに」、neverは「一度も〜ない」という否定の意味を持つ。\n\n【ここが絶対】\never（肯定）↔never（否定）という対応をセットで覚える。',
    difficulty: 'standard',
    choices: ['never', 'ever', 'already', 'just'],
  },
  {
    id: 'nk_eigo_grammar_06',
    subject: 'eigo',
    question: '関係代名詞「that」を使って2文を1文にしなさい。\n"I have a dog. The dog can run very fast."',
    answer: 'I have a dog that can run very fast.',
    hint: '先行詞（dog）が関係代名詞節で修飾される。',
    explanation:
      '【何を聞かれているか】\n関係代名詞thatを使って、"I have a dog."と"The dog can run very fast."という2文を1文にする問題。\n\n【なぜthatを使うのか】\nthatは、先行詞が人・物・動物のどれであっても使える便利な関係代名詞で、今回は先行詞a dog（動物）を説明する節をつなげる。\n\n【ポイント1】共通する語を確認する\n2つの文に共通する"a dog"（＝The dog）を、関係代名詞に置き換える。\n\n【ポイント2】文をつなげる手順を確認する\n"The dog can run very fast."の"The dog"をthatに変え、"a dog"の直後に続ける。\n\n【ポイント3】whichやwhoとの関係を確認する\nthatの代わりに、動物にはwhich、人にはwhoも同じ構造で使える。\n\n【答え】\nI have a dog that can run very fast.\n\n【確かめ】\n"that"の後ろが"can run very fast"という、主語が欠けた文になっているか確認する。\n\n【よくあるまちがい】\n先行詞a dogを2回使ってしまい、"I have a dog that the dog can run fast."のような重複した文にしてしまうミス。関係代名詞は繰り返しの部分を置き換えるためのもの。\n\n【ここが絶対】\n関係代名詞that（人・物・動物すべてに使える）を使って、2つの文を1つにまとめる手順をセットで覚える。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_grammar_07',
    subject: 'eigo',
    question: 'if節（条件文）：「もし明日雨が降れば、私は家にいます」を英語にしなさい。',
    answer: 'If it rains tomorrow, I will stay home.',
    hint: 'if節の中は現在形を使う（will は使わない）。',
    explanation:
      '【何を聞かれているか】\n「もし明日雨が降れば、私は家にいます」という日本語を英語にする問題。\n\n【なぜif節の中で現在形を使うのか】\n英語では、if（もし〜なら）で始まる条件節の中では、たとえ未来のことを表していても現在形を使うという決まりがある。\n\n【ポイント1】条件文の公式を確認する\nIf＋主語＋現在形〜, 主語＋will＋動詞の原形〜。\n\n【ポイント2】if節を組み立てる\n「もし明日雨が降れば」は"If it rains tomorrow"。tomorrow（未来のこと）でも動詞は現在形rainsを使う。\n\n【ポイント3】主節を組み立てる\n「私は家にいます」は"I will stay home"。主節ではwillを使う。\n\n【答え】\nIf it rains tomorrow, I will stay home.\n\n【確かめ】\nif節の動詞が現在形（rains）になっていて、willが使われていないことを確認する。\n\n【よくあるまちがい】\n"If it will rain tomorrow..."のように、if節の中でもwillを使ってしまうミス。未来のことでも、if節の中は現在形にするのがルール。\n\n【ここが絶対】\n条件を表すif節の中はwillを使わず現在形にする。「もし明日雨が降れば→If it rains tomorrow」とセットで覚える。',
    difficulty: 'standard',
  },

  // ============================================================
  // 語彙・イディオム
  // ============================================================
  {
    id: 'nk_eigo_vocab_01',
    subject: 'eigo',
    question: '次のイディオムの意味を答えなさい。\n"give up"',
    answer: '諦める',
    hint: '「あきらめる」という意味の熟語。反対は keep trying（挑戦し続ける）。',
    explanation:
      '【何を聞かれているか】\n"give up"というイディオムの意味を答える問題。\n\n【なぜ「諦める」という意味になるのか】\n"give up"は「（続けることを）やめて手放す」というニュアンスから、「諦める」という意味を表す決まった熟語。\n\n【ポイント1】give upの意味と使い方を確認する\n"Don\'t give up!"＝「諦めないで！」。励ましの表現としてよく使われる。\n\n【ポイント2】他の選択肢を確認する\n「渡す」「立ち上がる」「戻る」はいずれもgive upとは異なる意味の熟語（give、stand up、go backなど）。\n\n【ポイント3】他の重要イディオムもあわせて確認する\nlook for（探す）、take care of（世話をする）、get along with（仲良くする）。\n\n【答え】\n諦める\n\n【確かめ】\n"Don\'t give up!"が「諦めないで！」という励ましの意味になっていることを確認する。\n\n【よくあるまちがい】\ngive upを文字通り「（何かを）渡す」という意味だと誤解してしまうミス。give upは1つのまとまりで「諦める」という意味を表す熟語。\n\n【ここが絶対】\ngive up＝諦める、という熟語をセットで覚える。反対の意味を表すkeep trying（挑戦し続ける）ともあわせて覚えておくとよい。',
    difficulty: 'basic',
    choices: ['諦める', '渡す', '立ち上がる', '戻る'],
  },
  {
    id: 'nk_eigo_vocab_02',
    subject: 'eigo',
    question: '次のイディオムの意味を答えなさい。\n"put off"',
    answer: '延期する',
    hint: '「後に回す」という意味。procrastinate とも言う。',
    explanation:
      '【何を聞かれているか】\n"put off"というイディオムの意味を答える問題。\n\n【なぜ「延期する」という意味になるのか】\n"put off"は「（予定を）先に置く」というニュアンスから、「延期する・後回しにする」という意味を表す決まった熟語。\n\n【ポイント1】put offの意味と使い方を確認する\n"Don\'t put off until tomorrow what you can do today."（今日できることを明日に延ばすな）という有名なことわざがある。\n\n【ポイント2】他の選択肢を確認する\n「着る」「消す」「出発する」はいずれもput offとは異なる意味の熟語（put on、put out、set outなど）。\n\n【ポイント3】類義語を確認する\npostpone、delayも「延期する」という同じ意味を表す。\n\n【答え】\n延期する\n\n【確かめ】\n"put off"が「延期する・後回しにする」という意味になっていることを確認する。\n\n【よくあるまちがい】\nput offを、似た形のput on（着る）やput out（消す）と混同してしまうミス。offの部分が「離れる・後にずらす」というイメージを表す。\n\n【ここが絶対】\nput off＝延期する・後回しにする、という熟語をpostpone・delayという類義語とあわせて覚える。',
    difficulty: 'standard',
    choices: ['延期する', '着る', '消す', '出発する'],
  },
  {
    id: 'nk_eigo_vocab_03',
    subject: 'eigo',
    question: '次の英単語の日本語訳を答えなさい。\nenvironment / pollution / sustainable',
    answer: 'environment：環境　pollution：汚染　sustainable：持続可能な',
    hint: '現代の重要テーマ（SDGs）に関する単語。',
    explanation:
      '【何を聞かれているか】\nenvironment・pollution・sustainableという3つの英単語の日本語訳を答える問題。\n\n【なぜこれらの単語が重要なのか】\nenvironment（環境）、pollution（汚染）、sustainable（持続可能な）は、SDGs（持続可能な開発目標）に関する英文で頻出する重要語彙。\n\n【ポイント1】environmentの意味を確認する\nenvironment＝環境。\n\n【ポイント2】pollutionの意味を確認する\npollution＝汚染。air pollution（大気汚染）、water pollution（水質汚染）のように使う。\n\n【ポイント3】sustainableの意味を確認する\nsustainable＝持続可能な。sustainable development（持続可能な開発）のように使う。\n\n【答え】\nenvironment：環境　pollution：汚染　sustainable：持続可能な\n\n【確かめ】\nそれぞれの単語を、global warming（地球温暖化）、renewable energy（再生可能エネルギー）のような関連語とあわせて意味を確認する。\n\n【よくあるまちがい】\nsustainableを「持続する」のような動詞的な意味だと誤解してしまうミス。sustainableは「持続可能な」という形容詞。\n\n【ここが絶対】\nenvironment・pollution・sustainableは、SDGsに関する英文で頻出する重要語彙としてセットで覚える。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_vocab_04',
    subject: 'eigo',
    question: '次の語の反意語（反対語）を英語で答えなさい。\nbeginning / ancient / increase',
    answer: 'beginning ↔ end　ancient ↔ modern / contemporary　increase ↔ decrease',
    hint: '「始まり・古い・増える」の反対。',
    explanation:
      '【何を聞かれているか】\nbeginning・ancient・increaseという3つの語の反意語を英語で答える問題。\n\n【なぜ反意語をセットで覚えるのか】\n反意語はペアで覚えることで、片方を見ればもう片方も思い出せるようになり、語彙を効率よく増やせる。\n\n【ポイント1】beginningの反意語を確認する\nbeginning（始まり）↔end（終わり）。\n\n【ポイント2】ancientの反意語を確認する\nancient（古代の）↔modern/contemporary（現代の）。\n\n【ポイント3】increaseの反意語を確認する\nincrease（増える）↔decrease（減る）。\n\n【答え】\nbeginning ↔ end　ancient ↔ modern / contemporary　increase ↔ decrease\n\n【確かめ】\nそれぞれの語のペアが、意味的に正反対の関係になっているか確認する。\n\n【よくあるまちがい】\nancientの反意語をoldのような「古さ」と関係する語にしてしまうミス。ancientの反意語は時代を表すmodern（現代の）。\n\n【ここが絶対】\nbeginning⇔end、ancient⇔modern、increase⇔decreaseという反意語のペアを、big⇔small、success⇔failureなどとあわせてセットで覚える。',
    difficulty: 'standard',
  },
  {
    id: 'nk_eigo_vocab_05',
    subject: 'eigo',
    question: '次の英語を日本語に訳しなさい。\n"It is important to learn from your mistakes."',
    answer: '自分の失敗から学ぶことが大切です。',
    hint: '「It is ... to ~」の形式主語構文。',
    explanation:
      '【何を聞かれているか】\n"It is important to learn from your mistakes."という英語を日本語に訳す問題。\n\n【なぜItが「それ」と訳されないのか】\nこのItは形式的な主語（形式主語）で、実際の内容を指すものではないため、日本語に訳すときは特に訳出しない。\n\n【ポイント1】形式主語構文の形を確認する\n"It is＋形容詞＋to＋動詞の原形"＝「〜することは…だ」。\n\n【ポイント2】本当の主語を確認する\n"to learn from your mistakes"（自分の失敗から学ぶこと）が、この文の本当の主語。\n\n【ポイント3】訳し方を確認する\nItを訳さず、"to learn from your mistakes is important"と同じ内容として、「自分の失敗から学ぶことが大切です」と訳す。\n\n【答え】\n自分の失敗から学ぶことが大切です。\n\n【確かめ】\n"to learn from your mistakes"が「自分の失敗から学ぶこと」という意味で訳されているか確認する。\n\n【よくあるまちがい】\nItを「それは」と訳してしまうミス。形式主語のItは、実際には意味を持たないので訳さない。\n\n【ここが絶対】\n"It is＋形容詞＋to＋動詞の原形"は形式主語構文で、to以下が本当の主語。Itは訳さないことをセットで覚える。',
    difficulty: 'standard',
  },

  // ============================================================
  // 長文読解（入試レベル）
  // ============================================================
  {
    id: 'nk_eigo_reading_01',
    subject: 'eigo',
    question: '次の英文の内容と合うものを選びなさい。\n"In Japan, people take off their shoes before entering a house. This is a custom that has been practiced for hundreds of years. It helps keep the inside of the house clean."\n\nQuestion: Why do people in Japan take off their shoes?',
    answer: 'To keep the inside of the house clean.',
    hint: '最後の文に答えが書いてある。"It helps keep..." の It は何を指すか？',
    explanation: '本文の最後の文 "It helps keep the inside of the house clean." の "It" は「靴を脱ぐ習慣」を指す。靴を脱ぐ理由は「家の中を清潔に保つため」。\n受験英語では本文の最後の文、または because/so that/in order to などのキーワードに答えが多い。',
    difficulty: 'standard',
    choices: [
      'To keep the inside of the house clean.',
      'Because shoes are expensive.',
      'To follow a modern rule.',
      'Because the floor is cold.',
    ],
    passage: 'In Japan, people take off their shoes before entering a house. This is a custom that has been practiced for hundreds of years. It helps keep the inside of the house clean.',
  },
  {
    id: 'nk_eigo_reading_02',
    subject: 'eigo',
    question: '次の英文を読んで、タイトルとして最も適切なものを選びなさい。',
    answer: 'The Importance of Sleep for Students',
    hint: '文章全体のテーマ（何について書いているか）を考えよう。',
    explanation:
      '【何を聞かれているか】\n英文を読んで、タイトルとして最も適切なものを選ぶ問題。\n\n【なぜ具体的すぎず一般的すぎない選択肢を選ぶのか】\nタイトルは文章全体のテーマを表すものなので、一部の情報だけをカバーする具体的すぎる選択肢や、内容と無関係な一般的すぎる選択肢は選ばない。\n\n【ポイント1】文章全体のテーマを確認する\n本文のテーマは「学生にとっての睡眠の重要性」。\n\n【ポイント2】選択肢を照合する\n"The Importance of Sleep for Students"（学生にとっての睡眠の重要性）が、このテーマを正確に表している。\n\n【ポイント3】他の選択肢を消去する\n"How to Study at Night"（夜の勉強法）、"Why Students Feel Tired"（なぜ疲れるか）、"A Good Morning Routine"（良い朝の習慣）は、いずれも本文の一部分や、テーマとずれた内容。\n\n【答え】\nThe Importance of Sleep for Students\n\n【確かめ】\n選んだタイトルが、本文全体の主要なトピック（睡眠の重要性）を過不足なくカバーしているか確認する。\n\n【よくあるまちがい】\n本文中の一部の話題（勉強法や朝の習慣など）を、そのままタイトルだと勘違いしてしまうミス。タイトルは文章全体を貫くテーマを表す。\n\n【ここが絶対】\nタイトル選択問題は、文章の主要なトピックをカバーしつつ、具体的すぎず一般的すぎない選択肢を選ぶ。',
    difficulty: 'standard',
    choices: [
      'The Importance of Sleep for Students',
      'How to Study at Night',
      'Why Students Feel Tired',
      'A Good Morning Routine',
    ],
    passage: 'Many students do not get enough sleep. Research shows that sleeping less than 8 hours a night can make it harder to concentrate and remember information. Students who sleep well tend to perform better on tests. Therefore, getting enough sleep is just as important as studying hard.',
  },
  {
    id: 'nk_eigo_reading_03',
    subject: 'eigo',
    question: '下線部の "it" が指すものを本文から抜き出して日本語で答えなさい。',
    answer: 'プラスチックごみ（plastic waste / plastic trash）',
    hint: '代名詞は必ず前に出てきた名詞を指す。直前の文に注目。',
    explanation:
      '【何を聞かれているか】\n下線部の"it"が指すものを、本文から抜き出して日本語で答える問題。\n\n【なぜ直前の文を確認するのか】\n代名詞（it/they/heなど）は、直前の文（または同じ文の中）に出てきた名詞を指すことが多いため、指示語問題では直前の文をまず確認する。\n\n【ポイント1】代名詞の基本ルールを確認する\nitのような代名詞は、同じ内容を繰り返さずに済ませるために、直前に出てきた名詞を指す。\n\n【ポイント2】該当する文を確認する\n"It can be found in every ocean in the world."（それは世界中のあらゆる海で見つかる）という文のItが、直前に述べられていた"plastic waste"（プラスチックごみ）を指している。\n\n【ポイント3】答え方を確認する\n指示語が指す内容を、本文中の具体的な名詞（plastic waste）で答える。\n\n【答え】\nプラスチックごみ（plastic waste / plastic trash）\n\n【確かめ】\n"It"の位置に"plastic waste"を当てはめて文を読み直し、「プラスチックごみは世界中のあらゆる海で見つかる」という意味が通ることを確認する。\n\n【よくあるまちがい】\nitが指す内容を、遠く離れた文や無関係な名詞から探してしまうミス。まずは直前の文を確認するのが基本の手順。\n\n【ここが絶対】\n代名詞問題は「直前の文（または同じ文）の名詞」を指すという基本ルールに従って、該当する名詞を探す。',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Plastic waste is a serious global problem. It can be found in every ocean in the world. Many animals, such as sea turtles and birds, eat it by mistake and get sick or die. We need to reduce the amount of plastic we use every day.',
  },
  {
    id: 'nk_eigo_reading_04',
    subject: 'eigo',
    question: '次の本文の空欄（　）に最もふさわしい語を選びなさい。\n"Regular exercise is good for your health. ( ), you should also eat balanced meals and get enough sleep."',
    answer: 'However',
    hint: '前の文と後の文の関係は「逆接・追加・結果」のどれ？',
    explanation:
      '【何を聞かれているか】\n"Regular exercise is good for your health. ( ), you should also eat balanced meals and get enough sleep."の空欄に入る、最も適切な語を選ぶ問題。\n\n【なぜHoweverが正解なのか】\n1文目「運動は健康に良い」だけでは十分ではなく、「（それだけに頼らず）バランスの良い食事や十分な睡眠も必要だ」という注意を付け加えるとき、英語では単なる追加（In addition）ではなく、"However"を使って「大切な注意点」として示すことがよくある。\n\n【ポイント1】前後の文の関係を確認する\n1文目は運動の良さを述べ、2文目は運動だけでは足りない（他の要素も必要）と述べている。「運動は良いが、それだけではない」という、軽い注意・限定のニュアンスがある。\n\n【ポイント2】"In addition"を選ばない理由を確認する\n2文目にはすでに"should also eat"（食事も）という"also"（〜も）が入っているため、"In addition"（さらに）を重ねると意味が二重になってしまう。Howeverならこの重複が起きない。\n\n【ポイント3】BecauseとAlthoughを消去する\nBecauseは理由を導く語で、2文目が1文目の理由になっていないので合わない。Althoughは譲歩の接続詞で、単独の文の先頭に置いて次の文とつなぐ使い方はできない。\n\n【答え】\nHowever\n\n【確かめ】\n"However, you should also eat balanced meals and get enough sleep."が、「運動は良いが、それだけに頼らず食事や睡眠も大切だ」という注意喚起として自然に読めることを確認する。\n\n【よくあるまちがい】\n"also"が2文目にすでにあることに気づかず、"In addition"を選んで意味を重複させてしまうミス。\n\n【ここが絶対】\nHoweverは「反対」だけでなく、「大切な注意点を付け加える」場面でも使われることを覚えておく。すでにalsoがある文にIn additionを重ねると意味が二重になることにも注意する。',
    difficulty: 'advanced',
    maxOnly: true,
    choices: ['However', 'Because', 'Although', 'In addition'],
  },

  // ============================================================
  // 英作文（日本語→英語）
  // ============================================================
  {
    id: 'nk_eigo_sakubun_01',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n「私は将来、医者になりたいです。なぜなら、人々の助けになりたいからです。」',
    answer: 'I want to be a doctor in the future. Because I want to help people. (または I want to become a doctor in the future because I want to help people.)',
    hint: 'want to + 動詞原形 = 〜したい。in the future = 将来。',
    explanation: '将来の夢を表す英語：\n・I want to be / become + 職業名 = 〜になりたい\n・in the future = 将来\n・because + 理由 = なぜなら〜だから\nよく出る職業：doctor（医者）、teacher（先生）、engineer（エンジニア）、nurse（看護師）、vet（獣医）',
    difficulty: 'standard',
  },
  {
    id: 'nk_eigo_sakubun_02',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n「もし私が鳥だったら、世界中を飛び回るでしょう。」',
    answer: 'If I were a bird, I would fly around the world.',
    hint: '仮定法過去：If + 過去形, 主語 + would + 動詞原形。be動詞は were を使う。',
    explanation: '仮定法過去（現実でない仮定）：\nIf I were + 名詞/形容詞, 主語 + would + 動詞原形\n・「もし〜だったら」= If + 過去形（be動詞は were）\n・「〜するだろう」= would + 動詞原形\n実際には鳥ではないので仮定法を使う。現在形のif節（条件節）と区別する。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_sakubun_03',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n「京都は世界中の観光客に訪れられている有名な都市です。」',
    answer: 'Kyoto is a famous city that is visited by tourists from all over the world.',
    hint: '関係代名詞（that）と受動態（is visited by）を組み合わせる。',
    explanation:
      '【何を聞かれているか】\n「京都は世界中の観光客に訪れられている有名な都市です。」という日本語を英語にする問題。\n\n【なぜ関係代名詞と受動態を組み合わせるのか】\n「訪れられている」という受け身の内容を、「有名な都市」という名詞を説明する形で表したいときは、関係代名詞（that）で節をつなぎ、その節の中を受動態（is visited by〜）にする。\n\n【ポイント1】各部分を組み立てる\n「有名な都市」→a famous city、「観光客に訪れられている」→is visited by tourists（受動態）、「世界中から」→from all over the world。\n\n【ポイント2】関係代名詞でつなぐ\n"a famous city"を先行詞にして、"that is visited by tourists from all over the world"という節でつなげる。\n\n【ポイント3】文全体を組み立てる\n"Kyoto is a famous city that is visited by tourists from all over the world."\n\n【答え】\nKyoto is a famous city that is visited by tourists from all over the world.\n\n【確かめ】\n"that"の後ろが"is visited by〜"という受動態の形になっていて、a famous cityを正しく説明しているか確認する。\n\n【よくあるまちがい】\n受動態にせず、"that tourists visit"（能動態）にしてしまうミス。日本語の「訪れられている」という受け身の意味を、英語でも受動態で表す必要がある。\n\n【ここが絶対】\n関係代名詞（that/which/who）と受動態（be動詞＋過去分詞）を組み合わせて、より複雑な内容を1つの名詞にまとめて説明する構文を練習する。',
    difficulty: 'advanced',
    maxOnly: true,
  },

  // ============================================================
  // 発音・アクセント・リスニング対策
  // ============================================================
  {
    id: 'nk_eigo_pronunciation_01',
    subject: 'eigo',
    question: '次のうち、下線部の発音が他と異なるものを選びなさい。\ncook / book / school / foot',
    answer: 'school',
    hint: 'school の oo は「ウー」、他の oo は「ウ」（短い）',
    explanation:
      '【何を聞かれているか】\ncook・book・school・footのうち、下線部の発音が他と異なるものを選ぶ問題。\n\n【なぜschoolだけ発音が違うのか】\n英語の綴りと発音は必ずしも一致せず、同じ"oo"という綴りでも、単語によって長い「ウー」の音と短い「ウ」の音の2種類の発音がある。\n\n【ポイント1】短い「ウ」の音のグループを確認する\ncook・book・foot（＋wood, goodなど）は/ʊ/（短い「ウ」）と発音する。\n\n【ポイント2】長い「ウー」の音のグループを確認する\nschool（＋pool, food, moonなど）は/uː/（長い「ウー」）と発音する。\n\n【ポイント3】発音のグループを単語ごとに覚える\n同じ綴り"oo"でも、単語ごとにどちらのグループに属するかを覚えておく必要がある。\n\n【答え】\nschool\n\n【確かめ】\ncook・book・footが短い「ウ」、schoolだけが長い「ウー」であることを、発音記号（/ʊ/と/uː/）で確認する。\n\n【よくあるまちがい】\n綴りが同じ"oo"だから発音も同じだと思い込んでしまうミス。英語の綴りと発音は必ずしも一致しない。\n\n【ここが絶対】\n"oo"の発音は、短い「ウ」（cook, book, foot, wood, good）と長い「ウー」（school, pool, food, moon）の2グループがあり、単語ごとに覚える必要がある。',
    difficulty: 'advanced',
    maxOnly: true,
    choices: ['cook', 'book', 'school', 'foot'],
  },
  {
    id: 'nk_eigo_pronunciation_02',
    subject: 'eigo',
    question: '次のうち、アクセント（強勢）の位置が他と異なるものを選びなさい。\nde-LI-cious / beau-TI-ful / im-POR-tant / com-PU-ter',
    answer: 'beautiful',
    hint: 'beautiful は前（第1音節）にアクセント。他は第2音節。',
    explanation:
      '【何を聞かれているか】\ndelicious・beautiful・important・computerのうち、アクセント（強勢）の位置が他と異なるものを選ぶ問題。\n\n【なぜbeautifulだけアクセントの位置が違うのか】\ndelicious・important・computerはいずれも第2音節にアクセントがあるが、beautifulだけは第1音節にアクセントがある。\n\n【ポイント1】第2音節にアクセントがある語を確認する\nde-LI-cious、im-POR-tant、com-PU-terは、いずれも2番目の音節を強く読む。\n\n【ポイント2】beautifulのアクセントを確認する\nbeautifulはBEA-u-ti-fulのように、最初の音節にアクセントがある。\n\n【ポイント3】3音節以上の語のアクセントに注意することを確認する\n3音節以上の単語は、アクセントの位置が語によって異なるため、入試でもよく問われる。\n\n【答え】\nbeautiful\n\n【確かめ】\ndelicious・important・computerがすべて2番目の音節にアクセントがあり、beautifulだけが1番目の音節にアクセントがあることを確認する。\n\n【よくあるまちがい】\nアクセントの位置を意識せず、綴りの長さだけで判断してしまうミス。単語ごとにアクセントの位置を実際に発音して確認する必要がある。\n\n【ここが絶対】\n3音節以上の単語はアクセントの位置が語によって異なるため、単語ごとに正確な位置を覚える。',
    difficulty: 'advanced',
    maxOnly: true,
    choices: ['delicious', 'beautiful', 'important', 'computer'],
  },

  // ============================================================
  // 会話文・メール
  // ============================================================
  {
    id: 'nk_eigo_dialog_01',
    subject: 'eigo',
    question: '次の会話の（　）に最もふさわしい文を選びなさい。\nA: "Excuse me, could you tell me the way to the station?"\nB: "（　）"\nA: "Thank you very much."',
    answer: 'Sure. Go straight and turn left at the traffic light.',
    hint: '道案内の表現：go straight（まっすぐ行く）、turn left/right（左右に曲がる）、at the traffic light（信号で）',
    explanation:
      '【何を聞かれているか】\n道をたずねる会話の空欄に、最も適切な返答を選ぶ問題。\n\n【なぜ道案内の表現に注目するのか】\n"Could you tell me the way to the station?"（駅までの道を教えてもらえますか）という依頼に対しては、具体的な道案内の表現で答えるのが自然な流れになる。\n\n【ポイント1】道案内の基本表現を確認する\n"Go straight."（まっすぐ行く）、"Turn left/right at〜."（〜で左/右に曲がる）。\n\n【ポイント2】選んだ選択肢の内容を確認する\n"Sure. Go straight and turn left at the traffic light."が、依頼に対して具体的な道順を答えている。\n\n【ポイント3】他の選択肢を消去する\n「知りません、私も迷っています」「はい、元気です」「すみません、急いでいます」は、いずれも道案内の依頼に対する自然な返答ではない。\n\n【答え】\nSure. Go straight and turn left at the traffic light.\n\n【確かめ】\n選んだ返答が、Aの"Thank you very much."（ありがとうございます）という反応につながる、具体的な道案内になっているか確認する。\n\n【よくあるまちがい】\n"Yes, I\'m fine, thank you."のように、How are you?への返答と混同してしまうミス。会話の文脈（道をたずねる場面）を確認して答える。\n\n【ここが絶対】\n道案内の会話表現（Go straight／Turn left/right at〜／It\'s on your left/right．など）をセットで覚えておく。',
    difficulty: 'standard',
    choices: [
      'Sure. Go straight and turn left at the traffic light.',
      'I don\'t know. I\'m lost too.',
      'Yes, I\'m fine, thank you.',
      'Sorry, I\'m in a hurry.',
    ],
  },
  {
    id: 'nk_eigo_dialog_02',
    subject: 'eigo',
    question: 'Eメールの書き方について、「件名・宛名・本文・結び・署名」を英語でどう書くか説明しなさい。',
    answer: '件名：Subject: ... 宛名：Dear [名前], / Hello [名前], 本文：内容を書く 結び：Best regards, / Sincerely, / Thank you, 署名：自分の名前',
    hint: 'Dear は「〜様へ」という意味の丁寧な書き出し。',
    explanation:
      '【何を聞かれているか】\nEメールの「件名・宛名・本文・結び・署名」を英語でどう書くかを説明する問題。\n\n【なぜ英語のメールに決まった構成があるのか】\n英語のフォーマルなメールには、日本語のメールと同じように、件名・宛名・本文・結びの言葉・署名という決まった構成があり、それぞれに定型表現がある。\n\n【ポイント1】件名と宛名を確認する\n件名は"Subject:"の後に書く。宛名は"Dear [名前],"（フォーマル）や"Hello [名前],"（ややくだけた形）を使う。\n\n【ポイント2】結びの言葉を確認する\n"Best regards,"／"Sincerely,"／"Thank you,"のような結びの言葉を本文の後に置く。\n\n【ポイント3】カジュアルな場合との違いを確認する\n親しい相手には"Hi [名前],"という宛名や、"Cheers,"／"Take care,"という結びを使うこともある。\n\n【答え】\n件名：Subject: ... 宛名：Dear [名前], / Hello [名前], 本文：内容を書く 結び：Best regards, / Sincerely, / Thank you, 署名：自分の名前\n\n【確かめ】\nそれぞれの要素（件名・宛名・本文・結び・署名）が、実際のメールのどの位置に来るかを確認する。\n\n【よくあるまちがい】\nフォーマルな場面でDear（丁寧な宛名）の代わりにHi（くだけた宛名）を使ってしまうミス。相手との関係性に応じて宛名や結びの言葉を使い分ける。\n\n【ここが絶対】\n英語のメールは「件名→宛名→本文→結び→署名」という決まった構成で書き、フォーマル・カジュアルで表現を使い分ける。',
    difficulty: 'standard',
  },

  // ============================================================
  // 英語の表現・文化
  // ============================================================
  {
    id: 'nk_eigo_culture_01',
    subject: 'eigo',
    question: '英語で "I\'m sorry." と "Excuse me." の使い分けを答えなさい。',
    answer: 'I\'m sorry：謝罪（相手に迷惑をかけた後）。Excuse me：謝罪・呼びかけ（相手の注意を引く前、または軽い謝罪）。',
    hint: '「ごめんなさい（謝罪）」と「すみません（呼びかけ）」の違い。',
    explanation:
      '【何を聞かれているか】\n"I\'m sorry."と"Excuse me."の使い分けを答える問題。\n\n【なぜ2つの表現を使い分けるのか】\n"I\'m sorry."は「すでに迷惑をかけたことへの謝罪」、"Excuse me."は「これから相手の注意を引くときの声かけ、または軽い謝罪」という、使う場面の違いがある。\n\n【ポイント1】"I\'m sorry."の使い方を確認する\n失敗や迷惑をかけた後の謝罪に使う。例："I\'m sorry I was late."（遅れてすみません）。\n\n【ポイント2】"Excuse me."の使い方を確認する\n人に話しかける前の呼びかけや、人の前を通るときなどに使う。例："Excuse me, could you help me?"（すみません、助けていただけますか）。\n\n【ポイント3】タイミングの違いを確認する\nI\'m sorryは出来事の後、Excuse meは行動の前（または軽い謝罪として）というタイミングの違いがある。\n\n【答え】\nI\'m sorry：謝罪（相手に迷惑をかけた後）。Excuse me：謝罪・呼びかけ（相手の注意を引く前、または軽い謝罪）。\n\n【確かめ】\n"I\'m sorry I was late."（すでに遅れたことへの謝罪）と"Excuse me, could you help me?"（これから話しかける前の呼びかけ）の違いを確認する。\n\n【よくあるまちがい】\n2つを同じ「すみません」という意味だと考え、場面を区別せずに使ってしまうミス。\n\n【ここが絶対】\nI\'m sorry（すでに起きたことへの謝罪）とExcuse me（これからの呼びかけ・軽い謝罪）という、タイミングの違いをセットで覚える。',
    difficulty: 'basic',
  },
  {
    id: 'nk_eigo_culture_02',
    subject: 'eigo',
    question: 'SDGs（持続可能な開発目標）に関連する重要な英語表現を5つ答えなさい。',
    answer: 'climate change（気候変動）、poverty（貧困）、equality（平等）、clean energy（クリーンエネルギー）、zero hunger（飢餓ゼロ）',
    hint: 'SDGs は 2030 年までの国連の目標 17 項目。',
    explanation:
      '【何を聞かれているか】\nSDGs（持続可能な開発目標）に関連する重要な英語表現を5つ答える問題。\n\n【なぜSDGsの英語表現が重要なのか】\nSDGsは2030年までの国連の17項目の目標で、環境・貧困・教育などをテーマにした英文が入試でも増えているため、関連語彙を覚えておくことが読解に役立つ。\n\n【ポイント1】貧困・飢餓に関する語を確認する\npoverty（貧困）、zero hunger（飢餓ゼロ）。\n\n【ポイント2】平等・エネルギーに関する語を確認する\nequality（平等）、clean energy（クリーンエネルギー）。\n\n【ポイント3】気候変動に関する語を確認する\nclimate change（気候変動）。SDGsの目標13（Climate Action、気候変動に具体的な対策を）に対応する。\n\n【答え】\nclimate change（気候変動）、poverty（貧困）、equality（平等）、clean energy（クリーンエネルギー）、zero hunger（飢餓ゼロ）\n\n【確かめ】\nそれぞれの語が、実際のSDGsの目標（No Poverty、Zero Hunger、Climate Actionなど）に対応していることを確認する。\n\n【よくあるまちがい】\nSDGsの語彙を個別にばらばらに覚えて、実際の目標とのつながりを意識しないミス。目標名と関連語彙をセットで覚えると理解が深まる。\n\n【ここが絶対】\nSDGs関連の重要語彙（climate change、poverty、equality、clean energy、zero hungerなど）は、実際の17の目標と結びつけて覚える。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_culture_03',
    subject: 'eigo',
    question: '次の英語の慣用句の意味を答えなさい。\n"It\'s raining cats and dogs."',
    answer: '土砂降りの雨が降っている。',
    hint: '直訳すると「猫と犬が降っている」→ 非常に激しく雨が降っている。',
    explanation:
      '【何を聞かれているか】\n"It\'s raining cats and dogs."という英語の慣用句の意味を答える問題。\n\n【なぜ直訳では意味が通じないのか】\nイディオム（慣用句）は、単語を1つずつ直訳しても本来の意味にならないことが多く、決まり文句として全体の意味を覚える必要がある。\n\n【ポイント1】"It\'s raining cats and dogs."の意味を確認する\n直訳すると「猫と犬が降っている」だが、実際の意味は「土砂降りの雨が降っている」。\n\n【ポイント2】他の有名なイディオムを確認する\n"A piece of cake."（朝飯前・とても簡単）、"Break a leg."（頑張って）、"Hit the nail on the head."（的を射る）。\n\n【ポイント3】イディオムの覚え方を確認する\n単語を分解して意味を推測するのではなく、決まり文句として全体をひとまとまりで覚える。\n\n【答え】\n土砂降りの雨が降っている。\n\n【確かめ】\n"It\'s raining cats and dogs."が、天気（激しい雨）を表す表現であることを確認する。\n\n【よくあるまちがい】\nイディオムを単語ごとに直訳して、「猫と犬が空から降ってくる」のような文字通りの意味だと誤解してしまうミス。\n\n【ここが絶対】\n英語のイディオムは、単語を分解せず決まり文句として全体の意味をセットで覚える。',
    difficulty: 'standard',
  },
  {
    id: 'nk_eigo_culture_04',
    subject: 'eigo',
    question: '"interesting" と "interested" の違いを例文で説明しなさい。',
    answer: 'interesting：物・事が「面白い・興味深い」（物が主語）。interested：人が「興味を持っている」（人が主語）。例：The book is interesting.（その本は面白い）/ I am interested in science.（私は科学に興味があります）',
    hint: '-ing形は「物・事を主語」、-ed形は「人を主語」にすることが多い。',
    explanation:
      '【何を聞かれているか】\n"interesting"と"interested"の違いを例文で説明する問題。\n\n【なぜ-ing形と-ed形で意味が変わるのか】\n感情を表す形容詞は、-ing形が「（物・事が人に）その感情を起こさせる」、-ed形が「（人が）その感情を持っている」という、主語が物か人かで使い分けるという決まりがある。\n\n【ポイント1】interestingの使い方を確認する\n主語が物・事のとき使う。"The book is interesting."（その本は面白い）。\n\n【ポイント2】interestedの使い方を確認する\n主語が人のとき使う。"I am interested in science."（私は科学に興味がある）。\n\n【ポイント3】同じパターンの語を確認する\nexciting/excited（興奮させる/興奮している）、boring/bored（退屈な/退屈している）、surprising/surprised（驚かせる/驚いている）も同じパターン。\n\n【答え】\ninteresting：物・事が「面白い・興味深い」（物が主語）。interested：人が「興味を持っている」（人が主語）。例：The book is interesting.（その本は面白い）/ I am interested in science.（私は科学に興味があります）\n\n【確かめ】\n"The book is interesting."（本＝物が主語）と"I am interested in science."（私＝人が主語）で、それぞれ-ing形・-ed形が使い分けられているか確認する。\n\n【よくあるまちがい】\n"I am interesting in science."のように、人が主語のときに-ing形を使ってしまうミス。人が主語のときは-ed形（interested）を使う。\n\n【ここが絶対】\n-ing形（物・事が主語）と-ed形（人が主語）という使い分けを、exciting/excited、boring/boredなどとあわせてセットで覚える。',
    difficulty: 'standard',
  },
];
