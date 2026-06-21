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
    explanation: '最上級：形容詞の最上級は「the + 形容詞-est」または「the most + 形容詞」を使う。\nhigh → highest（1音節は-est）\n「〜の中で」は in（場所・グループ）または of（数・期間）を使う。',
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
    explanation: '現在完了形の3用法：\n①経験：Have you ever visited Kyoto?（京都を訪れたことがありますか）\n②継続：I have lived here for five years.（5年間ここに住んでいる）\n③完了：She has already finished her homework.（もう宿題を終えた）\nsinceは「〜から（起点）」、forは「〜の間（期間）」。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_grammar_05',
    subject: 'eigo',
    question: '次の（　）に適切な語を入れなさい。\n"I have ( ) been to America. I want to go there someday."',
    answer: 'never',
    hint: '「一度もない」という経験の否定を表す副詞。',
    explanation: 'never = 「一度も〜したことがない」。現在完了の経験用法で使う。\nhave never + 過去分詞 = 「〜したことが一度もない」\never（肯定）↔ never（否定）でセット。',
    difficulty: 'standard',
    choices: ['never', 'ever', 'already', 'just'],
  },
  {
    id: 'nk_eigo_grammar_06',
    subject: 'eigo',
    question: '関係代名詞「that」を使って2文を1文にしなさい。\n"I have a dog. The dog can run very fast."',
    answer: 'I have a dog that can run very fast.',
    hint: '先行詞（dog）が関係代名詞節で修飾される。',
    explanation: '関係代名詞「that」は先行詞が人・物・動物どちらでも使える。\n"a dog" + "The dog can run" → "a dog that can run very fast"\n「which」（物・動物のみ）、「who」（人のみ）も同じ構造で使える。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_grammar_07',
    subject: 'eigo',
    question: 'if節（条件文）：「もし明日雨が降れば、私は家にいます」を英語にしなさい。',
    answer: 'If it rains tomorrow, I will stay home.',
    hint: 'if節の中は現在形を使う（will は使わない）。',
    explanation: '条件のif節：if の後（条件節）は現在形を使い、主節には will を使う。\nIf + 現在形, 主語 + will + 動詞原形\n「明日」= tomorrow でも、if節内は現在形のまま。',
    difficulty: 'standard',
  },

  // ============================================================
  // 語彙・イディオム
  // ============================================================
  {
    id: 'nk_eigo_vocab_01',
    subject: 'eigo',
    question: '次のイディオムの意味を答えなさい。\n"give up"',
    answer: '諦める・断念する',
    hint: '「あきらめる」という意味の熟語。反対は keep trying（挑戦し続ける）。',
    explanation: '"give up" = 諦める\nDon\'t give up! = 諦めないで！\n他の重要イディオム：look for（探す）、take care of（世話をする）、get along with（仲良くする）',
    difficulty: 'basic',
    choices: ['諦める', '渡す', '立ち上がる', '戻る'],
  },
  {
    id: 'nk_eigo_vocab_02',
    subject: 'eigo',
    question: '次のイディオムの意味を答えなさい。\n"put off"',
    answer: '延期する・後回しにする',
    hint: '「後に回す」という意味。procrastinate とも言う。',
    explanation: '"put off" = 延期する・後回しにする\nDon\'t put off until tomorrow what you can do today.（今日できることを明日に延ばすな）→有名なことわざ。\n類義語：postpone / delay',
    difficulty: 'standard',
    choices: ['延期する', '着る', '消す', '出発する'],
  },
  {
    id: 'nk_eigo_vocab_03',
    subject: 'eigo',
    question: '次の英単語の日本語訳を答えなさい。\nenvironment / pollution / sustainable',
    answer: 'environment：環境　pollution：汚染　sustainable：持続可能な',
    hint: '現代の重要テーマ（SDGs）に関する単語。',
    explanation: 'SDGs（持続可能な開発目標）に関する重要語彙：\nenvironment（環境）、pollution（汚染）、sustainable（持続可能な）、global warming（地球温暖化）、renewable energy（再生可能エネルギー）、biodiversity（生物多様性）',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_vocab_04',
    subject: 'eigo',
    question: '次の語の反意語（反対語）を英語で答えなさい。\nbeginning / ancient / increase',
    answer: 'beginning ↔ end　ancient ↔ modern / contemporary　increase ↔ decrease',
    hint: '「始まり・古い・増える」の反対。',
    explanation: '重要な反意語ペア：\nbig ↔ small、hot ↔ cold、fast ↔ slow、beginning ↔ end、ancient ↔ modern、increase ↔ decrease、success ↔ failure（成功↔失敗）',
    difficulty: 'standard',
  },
  {
    id: 'nk_eigo_vocab_05',
    subject: 'eigo',
    question: '次の英語を日本語に訳しなさい。\n"It is important to learn from your mistakes."',
    answer: '自分の失敗から学ぶことが大切です。',
    hint: '「It is ... to ~」の形式主語構文。',
    explanation: '形式主語構文：It is + 形容詞 + to + 動詞原形\n"It" は形式的な主語で、本当の主語は to 以下。\n"to learn from your mistakes"（失敗から学ぶこと）が本当の主語。',
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
    explanation: '英文のテーマは「学生にとっての睡眠の重要性」。\nタイトルを選ぶ問題では、文章の主要なトピックをカバーし、かつ具体的すぎず一般的すぎない選択肢を選ぶ。',
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
    explanation: '代名詞が何を指すかを見つける問題は英語読解の基本。\nルール：代名詞は直前の文（または同じ文）の名詞を指すことが多い。\n"It can be found in every ocean in the world." の "It" = "plastic waste"（プラスチックごみ）。',
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
    explanation: '接続詞・副詞の選択：\n前文「運動は健康によい」→「でも（追加として）食事・睡眠も大切」\n意味的には追加（In addition / However は逆接。However は「でも」だが、ここでは「一方で（追加）」の意味）。\n実は"However" よりも"In addition（さらに）"や"Also（また）"の方が意味として自然。問題の答えは文脈次第。',
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
    explanation: '複合構文：\n①有名な都市 → a famous city\n②観光客に訪れられている → is visited by tourists（受動態）\n③世界中から → from all over the world\n④関係代名詞で繋ぐ → a famous city that is visited by tourists from all over the world',
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
    explanation: 'cook, book, foot → /ʊ/（短い「ウ」）\nschool → /uː/（長い「ウー」）\n英語の綴りと発音は一致しないことが多い。ooの発音パターンを覚える：\npool, food, moon → /uː/（長い）、good, book, wood → /ʊ/（短い）',
    difficulty: 'advanced',
    maxOnly: true,
    choices: ['cook', 'book', 'school', 'foot'],
  },
  {
    id: 'nk_eigo_pronunciation_02',
    subject: 'eigo',
    question: '次のうち、アクセント（強勢）の位置が他と異なるものを選びなさい。\nde-LI-cious / beau-TI-ful / im-POR-tant / com-PU-ter',
    answer: 'beautiful（BEA-u-ti-ful → 第1音節）',
    hint: 'beautiful は前（第1音節）にアクセント。他は第2音節。',
    explanation: 'delicious（de-LI-cious）、important（im-POR-tant）、computer（com-PU-ter）は第2音節にアクセント。\nbeautiful（BEA-u-ti-ful）は第1音節にアクセント。\nアクセント問題は入試頻出。3音節以上の語に注意。',
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
    explanation: '道案内の重要表現：\n・Go straight.（まっすぐ行ってください）\n・Turn left/right at the corner/traffic light.（角/信号で左/右に曲がって）\n・It\'s on your left/right.（左手/右手にあります）\n・You can\'t miss it.（すぐ分かります）\n・It\'s about 5 minutes from here.（ここから約5分です）',
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
    explanation: 'ビジネス・フォーマルなメールの構成：\nSubject:（件名）\nDear Mr./Ms. [苗字],（宛名）\n本文（内容）\nBest regards, / Sincerely, / Kind regards,（結び）\n自分の名前（署名）\nカジュアルな場合：Hi [名前],〜 / Cheers, / Take care,',
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
    explanation: '"Sorry"：失敗・迷惑をかけた後の謝罪。I\'m sorry I was late.（遅れてすみません）\n"Excuse me"：人に話しかける前の呼びかけ（すみません）、または通り道を通るときなど。Excuse me, could you help me?（すみません、助けていただけますか？）',
    difficulty: 'basic',
  },
  {
    id: 'nk_eigo_culture_02',
    subject: 'eigo',
    question: 'SDGs（持続可能な開発目標）に関連する重要な英語表現を5つ答えなさい。',
    answer: 'climate change（気候変動）、poverty（貧困）、equality（平等）、clean energy（クリーンエネルギー）、zero hunger（飢餓ゼロ）',
    hint: 'SDGs は 2030 年までの国連の目標 17 項目。',
    explanation: 'SDGs関連の重要英単語：\n・Goal 1: No Poverty（貧困をなくそう）\n・Goal 2: Zero Hunger（飢餓をゼロに）\n・Goal 4: Quality Education（質の高い教育をみんなに）\n・Goal 7: Affordable and Clean Energy（エネルギーをみんなに）\n・Goal 13: Climate Action（気候変動に具体的な対策を）\n入試でもSDGs・環境・国際問題の文章が増えている。',
    difficulty: 'advanced',
    maxOnly: true,
  },
  {
    id: 'nk_eigo_culture_03',
    subject: 'eigo',
    question: '次の英語の慣用句の意味を答えなさい。\n"It\'s raining cats and dogs."',
    answer: '土砂降りの雨が降っている。',
    hint: '直訳すると「猫と犬が降っている」→ 非常に激しく雨が降っている。',
    explanation: '"It\'s raining cats and dogs." = どしゃ降りの雨\n英語のイディオムは直訳しても意味が通じないものが多い。\n他の有名なイディオム：\n・"A piece of cake." = 朝飯前・とても簡単\n・"Break a leg." = 頑張って（good luck の代わりに使う）\n・"Hit the nail on the head." = 的を射る・正確に言い当てる',
    difficulty: 'standard',
  },
  {
    id: 'nk_eigo_culture_04',
    subject: 'eigo',
    question: '"interesting" と "interested" の違いを例文で説明しなさい。',
    answer: 'interesting：物・事が「面白い・興味深い」（物が主語）。interested：人が「興味を持っている」（人が主語）。例：The book is interesting.（その本は面白い）/ I am interested in science.（私は科学に興味があります）',
    hint: '-ing形は「物・事を主語」、-ed形は「人を主語」にすることが多い。',
    explanation: '感情を表す形容詞のing形とed形：\n・interesting（物が面白い）↔ interested（人が興味を持っている）\n・exciting（物・事が興奮させる）↔ excited（人がワクワクしている）\n・boring（物が退屈な）↔ bored（人が退屈している）\n・surprising（物・事が驚かせる）↔ surprised（人が驚いている）',
    difficulty: 'standard',
  },
];
