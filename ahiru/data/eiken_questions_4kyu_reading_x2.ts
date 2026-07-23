import { EikenQuestion } from './eiken_questions';

export const eikenQuestions4kyuReadingX2: EikenQuestion[] = [
  {
    id: 'eiken_4kyu_rea2_001',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nGreen Park Library\nSpecial Book Sale!\nDate: Saturday, May 10\nTime: 9:00 a.m. - 4:00 p.m.\nAll used books are only 100 yen.\nPlease bring your own bag.\n--------------\n\nQuestion: How much is one used book?',
    choices: [
      { key: 'A', text: '10 yen.' },
      { key: 'B', text: '100 yen.' },
      { key: 'C', text: '400 yen.' },
      { key: 'D', text: '500 yen.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「All used books are only 100 yen（中古の本はすべてたった100円）」とあります。9:00や4:00は時間、5月10日は日付なので値段ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: All used books are only 100 yen\n○正解の根拠: only 100 yen が本の値段を示している\n×ひっかけ: 9:00・4:00・May 10 は時間や日付で値段ではない\n→結論。値段を問う設問は yen や price の語を探す。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_002',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSwimming Pool CLOSED\nThe school pool will be closed from July 1 to July 5.\nWe are cleaning the water.\nThe pool will open again on July 6.\n--------------\n\nQuestion: When will the pool open again?',
    choices: [
      { key: 'A', text: 'On July 1.' },
      { key: 'B', text: 'On July 5.' },
      { key: 'C', text: 'On July 6.' },
      { key: 'D', text: 'On July 10.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「The pool will open again on July 6（プールは7月6日にまた開く）」とあります。7月1日〜5日は閉まっている期間なので誤りです。\n【図解】読み取りのポイント\n★本文の該当箇所: The pool will open again on July 6\n○正解の根拠: open again = また開く 日にちは July 6\n×ひっかけ: July 1〜5 は closed（閉館）の期間\n→結論。open と closed の日付を分けて読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_003',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Emma\nTo: Sophie\nDate: April 3\nSubject: Movie\n\nHi Sophie,\nDo you want to see a movie this Sunday? It starts at 2:00 p.m. Let's meet in front of the station at 1:30. See you!\nEmma\n\nQuestion: Where will Emma and Sophie meet?",
    choices: [
      { key: 'A', text: 'At the movie theater.' },
      { key: 'B', text: 'In front of the station.' },
      { key: 'C', text: "At Emma's house." },
      { key: 'D', text: 'In the park.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「Let\'s meet in front of the station（駅の前で会おう）」とあります。映画館ではなく、待ち合わせ場所は駅前です。\n【図解】読み取りのポイント\n★本文の該当箇所: Let\'s meet in front of the station at 1:30\n○正解の根拠: meet（会う）の場所が in front of the station\n×ひっかけ: movie は見る対象で待ち合わせ場所ではない\n→結論。Where の設問は meet や at のあとの場所を探す。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_004',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Grandma\nTo: Ken\nDate: December 20\nSubject: Present\n\nDear Ken,\nHappy birthday! I will send you a soccer ball. I hope you like it. Please come to my house this winter.\nLove, Grandma\n\nQuestion: What will Grandma send to Ken?",
    choices: [
      { key: 'A', text: 'A book.' },
      { key: 'B', text: 'A soccer ball.' },
      { key: 'C', text: 'A cake.' },
      { key: 'D', text: 'A bike.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「I will send you a soccer ball（サッカーボールを送るね）」とあります。本や自転車は出てきません。\n【図解】読み取りのポイント\n★本文の該当箇所: I will send you a soccer ball\n○正解の根拠: send（送る）ものが a soccer ball\n×ひっかけ: birthday や house があるが送る物ではない\n→結論。send の目的語（送る物）に注目する。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_005',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Music Concert\nPlace: The gym\nDate: Friday, October 18\nTime: 3:30 p.m.\nOur brass band will play five songs.\nEveryone is welcome!\n--------------\n\nQuestion: Where will the concert be held?',
    choices: [
      { key: 'A', text: 'In the gym.' },
      { key: 'B', text: 'In the library.' },
      { key: 'C', text: 'In the music room.' },
      { key: 'D', text: 'In the park.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Place: The gym（場所：体育館）」とあります。音楽会だからといって音楽室ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Place: The gym\n○正解の根拠: Place（場所）の項目が The gym\n×ひっかけ: 音楽会=music room と思い込ませる\n→結論。掲示は Place や Where の項目を直接読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_006',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nMika has a dog and two cats. The dog's name is Coco. Every morning, Mika walks Coco in the park before breakfast. The cats stay at home and sleep.\n\nQuestion: What does Mika do every morning?",
    choices: [
      { key: 'A', text: 'She walks her dog.' },
      { key: 'B', text: 'She feeds the cats.' },
      { key: 'C', text: 'She cooks breakfast.' },
      { key: 'D', text: 'She goes to school.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「Every morning, Mika walks Coco in the park（毎朝ミカはココを公園で散歩させる）」とあります。Cocoは犬の名前です。\n【図解】読み取りのポイント\n★本文の該当箇所: Every morning, Mika walks Coco in the park\n○正解の根拠: Coco は the dog の名前 → 犬を散歩させる\n×ひっかけ: cats は sleep するだけ、breakfast は「前」の時点\n→結論。名前が何を指すか（Coco=dog）を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_007',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nCooking Class for Beginners\nMake pizza and salad!\nDate: Sunday, June 8\nTime: 10:00 a.m. - 12:00 p.m.\nFee: 500 yen\nPlease bring an apron.\n--------------\n\nQuestion: What should you bring to the class?',
    choices: [
      { key: 'A', text: 'A pizza.' },
      { key: 'B', text: 'An apron.' },
      { key: 'C', text: 'A knife.' },
      { key: 'D', text: '500 pizzas.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Please bring an apron（エプロンを持ってきてください）」とあります。ピザは作るもので、持参する物ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Please bring an apron\n○正解の根拠: bring（持参する）ものが an apron\n×ひっかけ: pizza は class で作る料理、500 は fee（料金）\n→結論。bring / Please のあとの語が持参物。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_008',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Tom\nTo: Jack\nDate: August 15\nSubject: Homework\n\nHi Jack,\nI can't do question 5 in our math homework. Can you help me? Please call me after dinner tonight. Thanks!\nTom\n\nQuestion: What does Tom want Jack to do?",
    choices: [
      { key: 'A', text: 'Cook dinner.' },
      { key: 'B', text: 'Call him after dinner.' },
      { key: 'C', text: 'Come to his house.' },
      { key: 'D', text: 'Do science homework.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「Please call me after dinner tonight（今夜、夕食後に電話して）」とあります。トムは数学の宿題で困っており、電話してほしいと頼んでいます。\n【図解】読み取りのポイント\n★本文の該当箇所: Please call me after dinner tonight\n○正解の根拠: 頼み事は Please のあとの call me\n×ひっかけ: dinner はあるが「料理して」とは言っていない、宿題は math\n→結論。依頼は Please / Can you のあとを読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_009',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nCity Zoo\nNew Baby Panda!\nCome and see our new baby panda.\nOpen: 9:00 a.m. - 5:00 p.m.\nClosed on Mondays.\nAdults: 600 yen  Children: 300 yen\n--------------\n\nQuestion: How much does a child pay?',
    choices: [
      { key: 'A', text: '300 yen.' },
      { key: 'B', text: '600 yen.' },
      { key: 'C', text: '900 yen.' },
      { key: 'D', text: 'Free.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Children: 300 yen（子ども：300円）」とあります。600円は大人の料金なので誤りです。\n【図解】読み取りのポイント\n★本文の該当箇所: Adults: 600 yen  Children: 300 yen\n○正解の根拠: Children（子ども）の料金は 300 yen\n×ひっかけ: 600 yen は Adults（大人）の料金\n→結論。Adults と Children の料金を取り違えない。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_010',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nDaisuke likes reading books. He goes to the library every Saturday. Last Saturday, he borrowed three books about space. He wants to be a scientist in the future.\n\nQuestion: What kind of books did Daisuke borrow?",
    choices: [
      { key: 'A', text: 'Books about animals.' },
      { key: 'B', text: 'Books about space.' },
      { key: 'C', text: 'Books about sports.' },
      { key: 'D', text: 'Books about cooking.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「he borrowed three books about space（宇宙についての本を3冊借りた）」とあります。動物やスポーツの本ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: he borrowed three books about space\n○正解の根拠: borrowed（借りた）本の種類が about space\n×ひっかけ: scientist（科学者）から動物などを連想させる\n→結論。about のあとの名詞がテーマ。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_011',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Cleaning Day\nWe will clean the school garden together.\nDate: Saturday, September 6\nRain date: Sunday, September 7\nPlease wear old clothes and bring gloves.\n--------------\n\nQuestion: What will students do on this day?',
    choices: [
      { key: 'A', text: 'Clean the school garden.' },
      { key: 'B', text: 'Plant new trees.' },
      { key: 'C', text: 'Have a sports day.' },
      { key: 'D', text: 'Wash the windows.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「We will clean the school garden together（学校の庭をみんなで掃除する）」とあります。木を植える・窓を洗うとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: We will clean the school garden together\n○正解の根拠: clean the school garden がその日の活動\n×ひっかけ: garden から plant trees を連想させる\n→結論。will のあとの動詞（clean）が活動内容。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_012',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Lucy\nTo: Beth\nDate: February 2\nSubject: My weekend\n\nHi Beth,\nLast weekend I went camping with my family. We made a fire and cooked curry. It rained on Sunday, so we came home early. It was still fun!\nLucy\n\nQuestion: Why did Lucy's family come home early?",
    choices: [
      { key: 'A', text: 'They were tired.' },
      { key: 'B', text: 'It rained.' },
      { key: 'C', text: 'They had no food.' },
      { key: 'D', text: 'It was too hot.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「It rained on Sunday, so we came home early（日曜に雨が降ったので早く帰った）」とあります。soの前が理由です。\n【図解】読み取りのポイント\n★本文の該当箇所: It rained on Sunday, so we came home early\n○正解の根拠: so（だから）の前 It rained が理由\n×ひっかけ: fire や curry はしたことで理由ではない\n→結論。Why の答えは so / because の近くにある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_013',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nLost and Found\nA blue umbrella was found in the school hallway.\nIf it is yours, please come to the teachers\' room.\nDate found: March 12\n--------------\n\nQuestion: What was found?',
    choices: [
      { key: 'A', text: 'A blue umbrella.' },
      { key: 'B', text: 'A red bag.' },
      { key: 'C', text: 'A black pen.' },
      { key: 'D', text: 'A white cap.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「A blue umbrella was found（青いかさが見つかった）」とあります。色と物をよく確認しましょう。\n【図解】読み取りのポイント\n★本文の該当箇所: A blue umbrella was found in the school hallway\n○正解の根拠: found（見つかった）ものが a blue umbrella\n×ひっかけ: 他の色・物は本文に出てこない\n→結論。was found の主語が「見つかった物」。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_014',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nAkira plays baseball on the school team. He practices every day after school. On weekends, his team has games. Akira's dream is to become a professional baseball player.\n\nQuestion: When does Akira's team have games?",
    choices: [
      { key: 'A', text: 'After school.' },
      { key: 'B', text: 'On weekends.' },
      { key: 'C', text: 'Every morning.' },
      { key: 'D', text: 'During lunch.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「On weekends, his team has games（週末にチームは試合がある）」とあります。after schoolは練習の時間です。\n【図解】読み取りのポイント\n★本文の該当箇所: On weekends, his team has games\n○正解の根拠: games（試合）の時が On weekends\n×ひっかけ: after school は practice（練習）の時間\n→結論。練習と試合の時間帯を区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_015',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nEnglish Club Members Wanted!\nWe talk in English and watch movies.\nWe meet in Room 203 every Thursday.\nTime: 4:00 p.m. - 5:00 p.m.\nCome and join us!\n--------------\n\nQuestion: What day does the English Club meet?',
    choices: [
      { key: 'A', text: 'Monday.' },
      { key: 'B', text: 'Wednesday.' },
      { key: 'C', text: 'Thursday.' },
      { key: 'D', text: 'Friday.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「We meet in Room 203 every Thursday（毎週木曜に203号室で集まる）」とあります。203は部屋番号なので曜日と混同しないよう注意。\n【図解】読み取りのポイント\n★本文の該当箇所: We meet in Room 203 every Thursday\n○正解の根拠: every Thursday が集まる曜日\n×ひっかけ: Room 203 の数字は部屋番号\n→結論。What day の答えは曜日名（〜day）を探す。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_016',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Dad\nTo: Nana\nDate: November 4\nSubject: Shopping\n\nHi Nana,\nCan you go to the supermarket? We need milk, eggs, and bread. Here is 1,000 yen on the table. Thank you!\nDad\n\nQuestion: What does Dad want Nana to buy?",
    choices: [
      { key: 'A', text: 'Milk, eggs, and bread.' },
      { key: 'B', text: 'Meat and fish.' },
      { key: 'C', text: 'Fruit and juice.' },
      { key: 'D', text: 'Rice and tea.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「We need milk, eggs, and bread（牛乳、卵、パンが必要）」とあります。1,000円は買い物のお金です。\n【図解】読み取りのポイント\n★本文の該当箇所: We need milk, eggs, and bread\n○正解の根拠: need（必要）な物が買う物リスト\n×ひっかけ: 1,000 yen はお金で買う物ではない\n→結論。buy の内容は need のリストで確認。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_017',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSummer Festival\nDate: Saturday, July 26\nTime: 5:00 p.m. - 9:00 p.m.\nPlace: City Park\nEnjoy games, food, and fireworks at 8:30 p.m.\n--------------\n\nQuestion: What time do the fireworks start?',
    choices: [
      { key: 'A', text: '5:00 p.m.' },
      { key: 'B', text: '8:30 p.m.' },
      { key: 'C', text: '9:00 p.m.' },
      { key: 'D', text: '7:26 p.m.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「fireworks at 8:30 p.m.（花火は午後8時30分）」とあります。5:00は開始、9:00は終了時間です。\n【図解】読み取りのポイント\n★本文の該当箇所: fireworks at 8:30 p.m.\n○正解の根拠: fireworks（花火）の時間が 8:30 p.m.\n×ひっかけ: 5:00〜9:00 はお祭り全体の時間\n→結論。特定の物の時間は、その語の直後の時刻を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_018',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nEmily is from Australia. She came to Japan last year. Now she studies Japanese at a junior high school. Her favorite Japanese food is tempura. She wants to visit Kyoto next spring.\n\nQuestion: What is Emily's favorite Japanese food?",
    choices: [
      { key: 'A', text: 'Sushi.' },
      { key: 'B', text: 'Ramen.' },
      { key: 'C', text: 'Tempura.' },
      { key: 'D', text: 'Udon.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「Her favorite Japanese food is tempura（好きな和食は天ぷら）」とあります。他の食べ物は出てきません。\n【図解】読み取りのポイント\n★本文の該当箇所: Her favorite Japanese food is tempura\n○正解の根拠: favorite（一番好き）な食べ物が tempura\n×ひっかけ: 和食の例として他の料理を連想させる\n→結論。favorite のあとの語をそのまま答える。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_019',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nBus Schedule Change\nFrom Monday, the morning bus will leave at 7:15, not 7:30.\nPlease come to the bus stop early.\nThe afternoon bus does not change.\n--------------\n\nQuestion: What time will the morning bus leave from Monday?',
    choices: [
      { key: 'A', text: 'At 7:00.' },
      { key: 'B', text: 'At 7:15.' },
      { key: 'C', text: 'At 7:30.' },
      { key: 'D', text: 'At 8:15.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「the morning bus will leave at 7:15, not 7:30（朝のバスは7時30分ではなく7時15分に出る）」とあります。7:30は古い時間です。\n【図解】読み取りのポイント\n★本文の該当箇所: leave at 7:15, not 7:30\n○正解の根拠: 新しい出発時刻は 7:15\n×ひっかけ: 7:30 は「not」がついた古い時刻\n→結論。not のついた時刻は「もう使わない」時刻。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_020',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Rina\nTo: Aunt Yumi\nDate: May 20\nSubject: Thank you\n\nDear Aunt Yumi,\nThank you for the birthday card and the pretty pen. I use the pen every day at school. Please come to my house this summer.\nRina\n\nQuestion: What did Aunt Yumi give Rina?",
    choices: [
      { key: 'A', text: 'A card and a pen.' },
      { key: 'B', text: 'A book and a bag.' },
      { key: 'C', text: 'A cake and flowers.' },
      { key: 'D', text: 'A pen and a watch.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「Thank you for the birthday card and the pretty pen（バースデーカードときれいなペンをありがとう）」とあります。もらった物はカードとペンです。\n【図解】読み取りのポイント\n★本文の該当箇所: Thank you for the birthday card and the pretty pen\n○正解の根拠: Thank you for のあとが「もらった物」\n×ひっかけ: watch など本文にない物を混ぜた選択肢\n→結論。お礼メールは Thank you for のあとを読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_021',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Sports Day\nDate: Sunday, October 5\nIf it rains, we will hold it on October 12.\nPlease bring a hat, a towel, and water.\n--------------\n\nQuestion: What will happen if it rains on October 5?',
    choices: [
      { key: 'A', text: 'Sports Day will be canceled.' },
      { key: 'B', text: 'Sports Day will move to October 12.' },
      { key: 'C', text: 'Sports Day will start early.' },
      { key: 'D', text: 'Sports Day will be indoors.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「If it rains, we will hold it on October 12（雨なら10月12日に行う）」とあります。中止ではなく延期です。\n【図解】読み取りのポイント\n★本文の該当箇所: If it rains, we will hold it on October 12\n○正解の根拠: 雨天時は October 12 に move（延期）\n×ひっかけ: canceled（中止）とは書かれていない\n→結論。If it rains のあとに雨の日の対応が書いてある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_022',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nKenta went to the beach with his friends last Sunday. They swam in the sea and played volleyball. In the afternoon, they ate ice cream. Kenta took many pictures of the sea.\n\nQuestion: What did Kenta do in the afternoon?",
    choices: [
      { key: 'A', text: 'He swam in the sea.' },
      { key: 'B', text: 'He played volleyball.' },
      { key: 'C', text: 'He ate ice cream.' },
      { key: 'D', text: 'He went home.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「In the afternoon, they ate ice cream（午後にアイスを食べた）」とあります。泳ぎやバレーはその前のことです。\n【図解】読み取りのポイント\n★本文の該当箇所: In the afternoon, they ate ice cream\n○正解の根拠: In the afternoon のあとの行動が ate ice cream\n×ひっかけ: swim・volleyball は午後より前の行動\n→結論。時を表す語（In the afternoon）で行動を区切る。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_023',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nArt Exhibition\nStudents\' paintings are on the second floor.\nDate: June 1 - June 7\nTime: 10:00 a.m. - 4:00 p.m.\nDo not touch the paintings.\n--------------\n\nQuestion: Where are the paintings?',
    choices: [
      { key: 'A', text: 'On the first floor.' },
      { key: 'B', text: 'On the second floor.' },
      { key: 'C', text: 'On the third floor.' },
      { key: 'D', text: 'In the garden.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Students\' paintings are on the second floor（生徒の絵は2階にある）」とあります。日付や時間は場所ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Students\' paintings are on the second floor\n○正解の根拠: 絵の場所が on the second floor\n×ひっかけ: June 1 や 10:00 は日付・時間\n→結論。Where は on the / in the のあとの場所を探す。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_024',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Sam\nTo: Mike\nDate: September 9\nSubject: Party\n\nHi Mike,\nWe are having a party for our teacher, Mr. Brown. It is next Friday at 4:00 p.m. in the music room. Can you bring some cookies? Thanks!\nSam\n\nQuestion: Who is the party for?",
    choices: [
      { key: 'A', text: 'Sam.' },
      { key: 'B', text: 'Mike.' },
      { key: 'C', text: 'Mr. Brown.' },
      { key: 'D', text: "Sam's mother." },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「a party for our teacher, Mr. Brown（先生のブラウン先生のためのパーティー）」とあります。SamとMikeはパーティーを開く側です。\n【図解】読み取りのポイント\n★本文の該当箇所: a party for our teacher, Mr. Brown\n○正解の根拠: party for のあとが「誰のため」= Mr. Brown\n×ひっかけ: Sam は送り主、Mike は受け取り手\n→結論。for のあとの人物が対象。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_025',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nSaki's family has a small farm. They grow rice and vegetables. In summer, Saki helps her father pick tomatoes. She likes eating fresh tomatoes with salt.\n\nQuestion: What does Saki help her father do in summer?",
    choices: [
      { key: 'A', text: 'Cook dinner.' },
      { key: 'B', text: 'Pick tomatoes.' },
      { key: 'C', text: 'Feed the cows.' },
      { key: 'D', text: 'Sell rice.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Saki helps her father pick tomatoes（サキは父がトマトを摘むのを手伝う）」とあります。米も作っていますが夏に手伝うのはトマト摘みです。\n【図解】読み取りのポイント\n★本文の該当箇所: Saki helps her father pick tomatoes\n○正解の根拠: helps ... pick tomatoes が手伝う内容\n×ひっかけ: rice は grow するが手伝う内容ではない\n→結論。help のあとの動詞（pick）が手伝う中身。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_026',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nLibrary Rules\n1. Please be quiet.\n2. Do not eat or drink.\n3. You can borrow five books for two weeks.\n--------------\n\nQuestion: How many books can you borrow?',
    choices: [
      { key: 'A', text: 'Two books.' },
      { key: 'B', text: 'Three books.' },
      { key: 'C', text: 'Five books.' },
      { key: 'D', text: 'Ten books.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「You can borrow five books for two weeks（5冊を2週間借りられる）」とあります。twoは期間（週）で冊数ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: You can borrow five books for two weeks\n○正解の根拠: 借りられる冊数は five books\n×ひっかけ: two weeks の two は期間の数字\n→結論。How many books は books の直前の数を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_027',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Kate\nTo: Nancy\nDate: April 18\nSubject: Tennis\n\nHi Nancy,\nDo you want to play tennis with me tomorrow? I will be at the city court from 10 a.m. My brother will come too. It will be fun!\nKate\n\nQuestion: Who will come with Kate tomorrow?",
    choices: [
      { key: 'A', text: 'Her brother.' },
      { key: 'B', text: 'Her sister.' },
      { key: 'C', text: 'Her mother.' },
      { key: 'D', text: 'Her teacher.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「My brother will come too（弟／兄も来る）」とあります。妹や母ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: My brother will come too\n○正解の根拠: come too（一緒に来る）人が My brother\n×ひっかけ: 家族の他の人は本文に出てこない\n→結論。will come の主語（brother）が同行者。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_028',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nPiano Concert at the Hall\nDate: Saturday, November 22\nTime: 2:00 p.m.\nTickets: 800 yen\nBuy tickets at the front door.\n--------------\n\nQuestion: Where can you buy tickets?',
    choices: [
      { key: 'A', text: 'On the internet.' },
      { key: 'B', text: 'At the front door.' },
      { key: 'C', text: 'At the station.' },
      { key: 'D', text: 'At school.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Buy tickets at the front door（チケットは正面玄関で買う）」とあります。ネットや駅では買えません。\n【図解】読み取りのポイント\n★本文の該当箇所: Buy tickets at the front door\n○正解の根拠: buy の場所が at the front door\n×ひっかけ: internet や station は本文にない\n→結論。「どこで」は buy / at のあとの場所。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_029',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nJohn has a part-time job at a flower shop. He works there on Saturdays. He waters the flowers and helps customers. He earns money to buy a new guitar.\n\nQuestion: Why does John work at the flower shop?",
    choices: [
      { key: 'A', text: 'To buy a new guitar.' },
      { key: 'B', text: 'To meet new friends.' },
      { key: 'C', text: 'To learn about flowers.' },
      { key: 'D', text: 'To help his mother.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「He earns money to buy a new guitar（新しいギターを買うためにお金を稼ぐ）」とあります。to buy 〜が働く理由です。\n【図解】読み取りのポイント\n★本文の該当箇所: He earns money to buy a new guitar\n○正解の根拠: to buy a new guitar が目的（理由）\n×ひっかけ: flowers に関わるが「花を学ぶため」ではない\n→結論。Why は to（〜のために）のあとを読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_030',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Trip\nWe will go to the science museum.\nDate: Thursday, May 15\nMeet at school at 8:00 a.m.\nBring your lunch and 500 yen.\n--------------\n\nQuestion: Where will the students go?',
    choices: [
      { key: 'A', text: 'To the zoo.' },
      { key: 'B', text: 'To the science museum.' },
      { key: 'C', text: 'To the beach.' },
      { key: 'D', text: 'To the mountains.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「We will go to the science museum（科学館に行く）」とあります。動物園や海ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: We will go to the science museum\n○正解の根拠: go to のあとが行き先 = science museum\n×ひっかけ: 他の行き先は本文に出てこない\n→結論。Where will 〜 go は go to のあとを読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_031',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Anna\nTo: Grandpa\nDate: July 7\nSubject: Visit\n\nDear Grandpa,\nI will visit you next month. I want to go fishing with you again. Can we go to the river near your house? I can't wait!\nAnna\n\nQuestion: What does Anna want to do with Grandpa?",
    choices: [
      { key: 'A', text: 'Go fishing.' },
      { key: 'B', text: 'Play tennis.' },
      { key: 'C', text: 'Watch TV.' },
      { key: 'D', text: 'Cook dinner.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「I want to go fishing with you again（またあなたと釣りに行きたい）」とあります。川はその釣りをする場所です。\n【図解】読み取りのポイント\n★本文の該当箇所: I want to go fishing with you again\n○正解の根拠: want to のあとの go fishing がしたいこと\n×ひっかけ: river はある但し「したいこと」は fishing\n→結論。したいことは want to のあとの動詞。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_032',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nAquarium Show Times\nDolphin Show: 11:00 a.m. and 2:00 p.m.\nSeal Show: 1:00 p.m.\nPlease sit down before the show starts.\n--------------\n\nQuestion: What time is the seal show?',
    choices: [
      { key: 'A', text: '11:00 a.m.' },
      { key: 'B', text: '1:00 p.m.' },
      { key: 'C', text: '2:00 p.m.' },
      { key: 'D', text: '3:00 p.m.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Seal Show: 1:00 p.m.（アザラシショー：午後1時）」とあります。11:00と2:00はイルカショーの時間です。\n【図解】読み取りのポイント\n★本文の該当箇所: Seal Show: 1:00 p.m.\n○正解の根拠: Seal Show の時間が 1:00 p.m.\n×ひっかけ: 11:00・2:00 は Dolphin Show の時間\n→結論。どのショーの時間か、名前と時刻の対応を見る。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_033',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nMr. Tanaka is a music teacher. He teaches the guitar at a school on weekdays. On Sundays, he plays in a band at a small cafe. Many people come to listen to him.\n\nQuestion: What does Mr. Tanaka do on Sundays?",
    choices: [
      { key: 'A', text: 'He teaches guitar at school.' },
      { key: 'B', text: 'He plays in a band at a cafe.' },
      { key: 'C', text: 'He stays at home.' },
      { key: 'D', text: 'He goes shopping.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「On Sundays, he plays in a band at a small cafe（日曜はカフェでバンド演奏する）」とあります。学校で教えるのは平日です。\n【図解】読み取りのポイント\n★本文の該当箇所: On Sundays, he plays in a band at a small cafe\n○正解の根拠: On Sundays のあとの行動が band 演奏\n×ひっかけ: teaches guitar は weekdays（平日）\n→結論。曜日ごとの行動を分けて読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_034',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Cafeteria\nToday\'s Special\nCurry and rice ... 400 yen\nHamburger ... 350 yen\nOrange juice ... 100 yen\n--------------\n\nQuestion: How much is the hamburger?',
    choices: [
      { key: 'A', text: '100 yen.' },
      { key: 'B', text: '350 yen.' },
      { key: 'C', text: '400 yen.' },
      { key: 'D', text: '450 yen.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Hamburger ... 350 yen（ハンバーガー…350円）」とあります。400円はカレーライスの値段です。\n【図解】読み取りのポイント\n★本文の該当箇所: Hamburger ... 350 yen\n○正解の根拠: Hamburger の右の値段が 350 yen\n×ひっかけ: 400 yen は Curry and rice の値段\n→結論。メニュー表は品名と値段の対応を横に読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_035',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Ben\nTo: Chris\nDate: October 30\nSubject: Soccer game\n\nHi Chris,\nOur soccer game is this Saturday, but I have a cold. I can't play. Can you tell the coach for me? I'm sorry.\nBen\n\nQuestion: Why can't Ben play in the game?",
    choices: [
      { key: 'A', text: 'He has a cold.' },
      { key: 'B', text: 'He is busy.' },
      { key: 'C', text: 'He is on a trip.' },
      { key: 'D', text: 'He has homework.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「I have a cold. I can\'t play（風邪をひいたのでプレーできない）」とあります。理由は風邪です。\n【図解】読み取りのポイント\n★本文の該当箇所: I have a cold. I can\'t play\n○正解の根拠: can\'t play の直前 have a cold が理由\n×ひっかけ: busy や trip は本文にない\n→結論。Why can\'t は can\'t の近くの理由文を読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_036',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nWelcome to Green Camp!\nDay 1: Hiking in the mountains\nDay 2: Making a campfire and singing\nDay 3: Fishing in the lake\nHave a great time!\n--------------\n\nQuestion: What will campers do on Day 3?',
    choices: [
      { key: 'A', text: 'Go hiking.' },
      { key: 'B', text: 'Make a campfire.' },
      { key: 'C', text: 'Go fishing.' },
      { key: 'D', text: 'Sing songs.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Day 3: Fishing in the lake（3日目：湖で釣り）」とあります。ハイキングは1日目、キャンプファイヤーは2日目です。\n【図解】読み取りのポイント\n★本文の該当箇所: Day 3: Fishing in the lake\n○正解の根拠: Day 3 の予定が Fishing\n×ひっかけ: hiking は Day 1、campfire は Day 2\n→結論。日程表は Day の番号と内容を合わせて読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_037',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nYuki wants to be a nurse. Every Saturday, she visits an old people's home as a volunteer. She talks with the people there and reads books to them. They are very happy to see her.\n\nQuestion: What does Yuki do at the old people's home?",
    choices: [
      { key: 'A', text: 'She cooks meals.' },
      { key: 'B', text: 'She cleans rooms.' },
      { key: 'C', text: 'She talks and reads to people.' },
      { key: 'D', text: 'She sells flowers.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「She talks with the people there and reads books to them（そこの人と話し、本を読んであげる）」とあります。料理や掃除ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: She talks with the people ... and reads books to them\n○正解の根拠: talk と read が施設での活動\n×ひっかけ: nurse（看護師）から料理・掃除を連想させる\n→結論。動詞（talk, read）で活動を特定する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_038',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nBike Parking Rules\nPlease park your bike in the blue area.\nDo not park in front of the gate.\nLock your bike.\n--------------\n\nQuestion: Where should you park your bike?',
    choices: [
      { key: 'A', text: 'In front of the gate.' },
      { key: 'B', text: 'In the blue area.' },
      { key: 'C', text: 'On the road.' },
      { key: 'D', text: 'Near the door.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Please park your bike in the blue area（青いエリアに駐輪してください）」とあります。門の前は駐輪禁止です。\n【図解】読み取りのポイント\n★本文の該当箇所: Please park your bike in the blue area\n○正解の根拠: park の場所が in the blue area\n×ひっかけ: in front of the gate は Do not park（禁止）\n→結論。Please と Do not を読み分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_039',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Olivia\nTo: Grace\nDate: March 25\nSubject: Book\n\nHi Grace,\nThank you for lending me your book. I finished reading it. It was very interesting. Can I give it back to you tomorrow at school?\nOlivia\n\nQuestion: What does Olivia want to do tomorrow?",
    choices: [
      { key: 'A', text: 'Borrow a book.' },
      { key: 'B', text: 'Give back the book.' },
      { key: 'C', text: 'Buy a new book.' },
      { key: 'D', text: 'Read the book again.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「Can I give it back to you tomorrow at school?（明日学校で返してもいい？）」とあります。itはその本を指します。\n【図解】読み取りのポイント\n★本文の該当箇所: Can I give it back to you tomorrow at school?\n○正解の根拠: give it back = 返す tomorrow の行動\n×ひっかけ: 借りたのは過去、buy は本文にない\n→結論。tomorrow の行動は give back（返す）。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_040',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nMovie Night at School\nWe will watch a movie about animals.\nDate: Friday, December 5\nTime: 6:00 p.m.\nPlace: The gym\nFree popcorn for everyone!\n--------------\n\nQuestion: What is the movie about?',
    choices: [
      { key: 'A', text: 'Animals.' },
      { key: 'B', text: 'Sports.' },
      { key: 'C', text: 'Space.' },
      { key: 'D', text: 'Music.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「a movie about animals（動物についての映画）」とあります。ポップコーンは無料の食べ物です。\n【図解】読み取りのポイント\n★本文の該当箇所: We will watch a movie about animals\n○正解の根拠: movie about のあとが内容 = animals\n×ひっかけ: popcorn などは映画の内容ではない\n→結論。about のあとの語がテーマ。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_041',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nHiroshi is a junior high school student. He gets up at six every day. Before school, he practices the piano for thirty minutes. He wants to play well at the school concert.\n\nQuestion: What does Hiroshi do before school?",
    choices: [
      { key: 'A', text: 'He practices the piano.' },
      { key: 'B', text: 'He watches TV.' },
      { key: 'C', text: 'He walks his dog.' },
      { key: 'D', text: 'He reads the newspaper.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「Before school, he practices the piano for thirty minutes（登校前に30分ピアノを練習する）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: Before school, he practices the piano for thirty minutes\n○正解の根拠: Before school のあとの行動が practice the piano\n×ひっかけ: get up at six はあるがそれは起床時刻\n→結論。Before school のあとの動作を読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_042',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Farm Volunteers\nHelp us grow potatoes!\nDate: Saturday, April 12\nMeet at the school farm at 9:00 a.m.\nWear boots and bring a small shovel.\n--------------\n\nQuestion: What will the volunteers grow?',
    choices: [
      { key: 'A', text: 'Potatoes.' },
      { key: 'B', text: 'Rice.' },
      { key: 'C', text: 'Flowers.' },
      { key: 'D', text: 'Carrots.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Help us grow potatoes!（じゃがいもを育てるのを手伝って）」とあります。米や花ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Help us grow potatoes!\n○正解の根拠: grow のあとが育てる作物 = potatoes\n×ひっかけ: boots や shovel は道具で作物ではない\n→結論。grow のあとの名詞が育てる物。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_043',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Mom\nTo: Taro\nDate: June 3\nSubject: Dinner\n\nHi Taro,\nI will come home late tonight. There is curry in the fridge. Please warm it up for dinner. Don't forget to do your homework!\nMom\n\nQuestion: What should Taro eat for dinner?",
    choices: [
      { key: 'A', text: 'Curry.' },
      { key: 'B', text: 'Pizza.' },
      { key: 'C', text: 'Rice balls.' },
      { key: 'D', text: 'Soup.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「There is curry in the fridge. Please warm it up for dinner（冷蔵庫にカレーがある。温めて夕食に）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: There is curry in the fridge. Please warm it up for dinner\n○正解の根拠: 夕食に温めて食べる物が curry\n×ひっかけ: homework の話はあるが食事ではない\n→結論。for dinner の対象を探す。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_044',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nStudy Room Open!\nThe study room is open after school.\nMonday to Friday: 3:30 p.m. - 6:00 p.m.\nIt is closed on weekends.\nTeachers are here to help you.\n--------------\n\nQuestion: When is the study room closed?',
    choices: [
      { key: 'A', text: 'On weekdays.' },
      { key: 'B', text: 'On weekends.' },
      { key: 'C', text: 'In the morning only.' },
      { key: 'D', text: 'Every day.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「It is closed on weekends（週末は閉まっている）」とあります。月〜金は開いています。\n【図解】読み取りのポイント\n★本文の該当箇所: It is closed on weekends\n○正解の根拠: closed（閉まる）のは on weekends\n×ひっかけ: Monday to Friday は open の日\n→結論。open と closed の日を取り違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_045',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nLast summer, the Sato family traveled to Okinawa. They stayed there for five days. They enjoyed swimming and eating fresh fish. Mika, the daughter, liked the beautiful blue sea the best.\n\nQuestion: How many days did the Sato family stay in Okinawa?",
    choices: [
      { key: 'A', text: 'Three days.' },
      { key: 'B', text: 'Four days.' },
      { key: 'C', text: 'Five days.' },
      { key: 'D', text: 'Seven days.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「They stayed there for five days（そこに5日間滞在した）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: They stayed there for five days\n○正解の根拠: 滞在日数は for five days\n×ひっかけ: 他の数は本文に出てこない\n→結論。How many days は for 〜 days を探す。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_046',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Bake Sale\nWe will sell cookies and cakes.\nDate: Sunday, May 24\nPlace: In front of the school gate\nThe money will help sick children.\n--------------\n\nQuestion: What will the money be used for?',
    choices: [
      { key: 'A', text: 'To buy new desks.' },
      { key: 'B', text: 'To help sick children.' },
      { key: 'C', text: 'To make a garden.' },
      { key: 'D', text: 'To buy books.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The money will help sick children（お金は病気の子どもたちを助ける）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: The money will help sick children\n○正解の根拠: money will help のあとが使い道 = sick children\n×ひっかけ: cookies・cakes は売る物で使い道ではない\n→結論。お金の使い道は help / for のあとを読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_047',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Peter\nTo: David\nDate: January 10\nSubject: Snow\n\nHi David,\nIt snowed a lot last night! Let's make a snowman in the park this afternoon. Wear warm clothes and gloves. I'll bring a carrot for the nose!\nPeter\n\nQuestion: What does Peter want to make?",
    choices: [
      { key: 'A', text: 'A snowman.' },
      { key: 'B', text: 'A cake.' },
      { key: 'C', text: 'A sled.' },
      { key: 'D', text: 'A house.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「Let\'s make a snowman in the park（公園で雪だるまを作ろう）」とあります。にんじんはその鼻用です。\n【図解】読み取りのポイント\n★本文の該当箇所: Let\'s make a snowman in the park this afternoon\n○正解の根拠: make のあとが作る物 = a snowman\n×ひっかけ: carrot は nose 用の材料\n→結論。make のあとの名詞が作る物。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_048',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nRyo likes drawing pictures. His art teacher, Ms. Green, is very kind. Last week, Ms. Green put Ryo's picture on the classroom wall. Ryo was very happy.\n\nQuestion: Why was Ryo happy last week?",
    choices: [
      { key: 'A', text: 'He got a new pen.' },
      { key: 'B', text: 'His picture was on the wall.' },
      { key: 'C', text: 'He won a prize.' },
      { key: 'D', text: 'He met a new friend.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Ms. Green put Ryo\'s picture on the classroom wall. Ryo was very happy（先生がリョウの絵を壁に貼り、リョウは喜んだ）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: put Ryo\'s picture on the classroom wall. Ryo was very happy\n○正解の根拠: happy の直前の出来事が絵を壁に貼ったこと\n×ひっかけ: prize（賞）や pen は本文にない\n→結論。happy の前の文が喜んだ理由。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_049',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nGuitar Lessons\nLearn to play the guitar!\nEvery Tuesday and Friday\nTime: 5:00 p.m. - 6:00 p.m.\nPlace: Music Room B\nBring your own guitar.\n--------------\n\nQuestion: How long is each lesson?',
    choices: [
      { key: 'A', text: 'Thirty minutes.' },
      { key: 'B', text: 'One hour.' },
      { key: 'C', text: 'Two hours.' },
      { key: 'D', text: 'Three hours.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Time: 5:00 p.m. - 6:00 p.m.」とあり、5時から6時までなので1時間です。\n【図解】読み取りのポイント\n★本文の該当箇所: Time: 5:00 p.m. - 6:00 p.m.\n○正解の根拠: 5:00〜6:00 = one hour（1時間）\n×ひっかけ: 曜日が2つあるが1回の長さは時間差で計算\n→結論。How long は開始と終了の差を計算する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_050',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Ellie\nTo: Sara\nDate: August 22\nSubject: Zoo\n\nHi Sara,\nI went to the zoo with my family yesterday. The baby elephant was so cute! My little brother liked the lions the best. Let's go together next time!\nEllie\n\nQuestion: Which animal did Ellie's little brother like the best?",
    choices: [
      { key: 'A', text: 'The elephant.' },
      { key: 'B', text: 'The lions.' },
      { key: 'C', text: 'The monkeys.' },
      { key: 'D', text: 'The pandas.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「My little brother liked the lions the best（弟はライオンが一番好きだった）」とあります。ゾウが好きなのは書き手のエリーです。\n【図解】読み取りのポイント\n★本文の該当箇所: My little brother liked the lions the best\n○正解の根拠: brother が好きなのは the lions\n×ひっかけ: elephant を好きなのは Ellie 自身\n→結論。誰が好きかを主語で区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_051',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nMountain Hiking Event\nDate: Sunday, September 21\nMeet at the station at 8:00 a.m.\nThe hike takes about three hours.\nPlease bring water and snacks.\n--------------\n\nQuestion: How long does the hike take?',
    choices: [
      { key: 'A', text: 'About one hour.' },
      { key: 'B', text: 'About two hours.' },
      { key: 'C', text: 'About three hours.' },
      { key: 'D', text: 'About eight hours.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「The hike takes about three hours（ハイキングは約3時間かかる）」とあります。8:00は集合時刻です。\n【図解】読み取りのポイント\n★本文の該当箇所: The hike takes about three hours\n○正解の根拠: takes about three hours が所要時間\n×ひっかけ: 8:00 a.m. は集合（meet）の時刻\n→結論。How long は take（かかる）のあとを読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_052',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nNaomi has a pen friend in France. Her name is Claire. They write e-mails to each other in English. Naomi wants to visit Claire in France someday and see the Eiffel Tower.\n\nQuestion: Where does Naomi's pen friend live?",
    choices: [
      { key: 'A', text: 'In America.' },
      { key: 'B', text: 'In France.' },
      { key: 'C', text: 'In Japan.' },
      { key: 'D', text: 'In Australia.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Naomi has a pen friend in France（ナオミにはフランスに文通友達がいる）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: Naomi has a pen friend in France\n○正解の根拠: pen friend の居場所が in France\n×ひっかけ: English で書くが英語圏に住むとは限らない\n→結論。in のあとの国名が居住地。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_053',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Store Hours\nOpen: Monday to Friday\nMorning: 8:00 a.m. - 8:20 a.m.\nLunch: 12:30 p.m. - 1:00 p.m.\nWe sell notebooks, pens, and erasers.\n--------------\n\nQuestion: What does the school store sell?',
    choices: [
      { key: 'A', text: 'Food and drinks.' },
      { key: 'B', text: 'Notebooks, pens, and erasers.' },
      { key: 'C', text: 'Books and CDs.' },
      { key: 'D', text: 'Clothes and shoes.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「We sell notebooks, pens, and erasers（ノート、ペン、消しゴムを売る）」とあります。食べ物や服ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: We sell notebooks, pens, and erasers\n○正解の根拠: sell のあとが売っている物\n×ひっかけ: store から食べ物・服を連想させる\n→結論。sell のあとの名詞リストを読む。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_054',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Coach Lee\nTo: Team members\nDate: October 1\nSubject: Practice\n\nHello everyone,\nTomorrow's practice will start at 4:00 p.m., not 3:30. Please come to the gym on time. Bring your indoor shoes.\nCoach Lee\n\nQuestion: What time will practice start tomorrow?",
    choices: [
      { key: 'A', text: 'At 3:00.' },
      { key: 'B', text: 'At 3:30.' },
      { key: 'C', text: 'At 4:00.' },
      { key: 'D', text: 'At 4:30.' },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「practice will start at 4:00 p.m., not 3:30（練習は3時30分ではなく4時に始まる）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: practice will start at 4:00 p.m., not 3:30\n○正解の根拠: 新しい開始時刻は 4:00\n×ひっかけ: 3:30 は not のついた古い時刻\n→結論。not のあとの時刻は使わない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_055',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nKazu likes trains very much. On holidays, he goes to the station and takes pictures of trains. He has a big album of train photos. His favorite train is the Shinkansen.\n\nQuestion: What is Kazu's favorite train?",
    choices: [
      { key: 'A', text: 'The local train.' },
      { key: 'B', text: 'The Shinkansen.' },
      { key: 'C', text: 'The night train.' },
      { key: 'D', text: 'The old steam train.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「His favorite train is the Shinkansen（好きな電車は新幹線）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: His favorite train is the Shinkansen\n○正解の根拠: favorite train が the Shinkansen\n×ひっかけ: album や station はあるが好きな電車ではない\n→結論。favorite のあとの語を答える。',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea2_056',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nFlower Garden Volunteers\nWe will plant flowers in the school garden.\nDate: Saturday, April 5\nTime: 1:00 p.m.\nIf you want to join, please tell Ms. Ito by April 3.\n--------------\n\nQuestion: Who should you tell if you want to join?',
    choices: [
      { key: 'A', text: 'Ms. Ito.' },
      { key: 'B', text: 'Mr. Sato.' },
      { key: 'C', text: 'The principal.' },
      { key: 'D', text: 'Your parents.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「please tell Ms. Ito by April 3（4月3日までに伊藤先生に伝えて）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: please tell Ms. Ito by April 3\n○正解の根拠: tell のあとの人 = Ms. Ito\n×ひっかけ: 他の人名は本文に出てこない\n→結論。Who should you tell は tell のあとの人名。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_057',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Amy\nTo: Lisa\nDate: July 15\nSubject: Summer plan\n\nHi Lisa,\nSchool will finish next week. In summer, I will go to my grandmother's house in the countryside. I will help her in the rice field. What are your plans?\nAmy\n\nQuestion: What will Amy do in summer?",
    choices: [
      { key: 'A', text: 'Go to summer school.' },
      { key: 'B', text: 'Visit her grandmother.' },
      { key: 'C', text: 'Travel abroad.' },
      { key: 'D', text: 'Work at a shop.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「I will go to my grandmother\'s house in the countryside（田舎の祖母の家に行く）」とあります。田んぼの手伝いもそこで行います。\n【図解】読み取りのポイント\n★本文の該当箇所: I will go to my grandmother\'s house in the countryside\n○正解の根拠: 夏の予定が祖母の家を訪ねること\n×ひっかけ: summer school や abroad は本文にない\n→結論。will のあとの行動が夏の予定。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_058',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nRules for the School Pool\n1. Take a shower before you swim.\n2. Do not run near the pool.\n3. Do not swim after eating.\n--------------\n\nQuestion: What must you do before you swim?',
    choices: [
      { key: 'A', text: 'Take a shower.' },
      { key: 'B', text: 'Run to the pool.' },
      { key: 'C', text: 'Eat lunch.' },
      { key: 'D', text: 'Wear shoes.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Take a shower before you swim（泳ぐ前にシャワーを浴びる）」とあります。走ることは禁止です。\n【図解】読み取りのポイント\n★本文の該当箇所: Take a shower before you swim\n○正解の根拠: before you swim にすべきことが Take a shower\n×ひっかけ: run は Do not（禁止）の行動\n→結論。すべきこと（命令文）と禁止（Do not）を区別。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_059',
    level: '4kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nMr. Kato works at a hospital. He is a doctor for children. He is very busy, but he likes his job. On his day off, he plays golf with his friends to relax.\n\nQuestion: What does Mr. Kato do on his day off?",
    choices: [
      { key: 'A', text: 'He works at the hospital.' },
      { key: 'B', text: 'He plays golf.' },
      { key: 'C', text: 'He studies medicine.' },
      { key: 'D', text: 'He visits patients.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「On his day off, he plays golf with his friends（休みの日は友達とゴルフをする）」とあります。病院で働くのは普段のことです。\n【図解】読み取りのポイント\n★本文の該当箇所: On his day off, he plays golf with his friends\n○正解の根拠: day off（休日）の行動が plays golf\n×ひっかけ: 病院の仕事は普段のことで休日ではない\n→結論。day off のあとの行動を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea2_060',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nWelcome to City Aquarium\nOpen: 9:30 a.m. - 6:00 p.m.\nGift shop closes at 5:30 p.m.\nPlease do not use a flash to take pictures.\n--------------\n\nQuestion: What time does the gift shop close?',
    choices: [
      { key: 'A', text: 'At 5:30 p.m.' },
      { key: 'B', text: 'At 6:00 p.m.' },
      { key: 'C', text: 'At 9:30 a.m.' },
      { key: 'D', text: 'At 6:30 p.m.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Gift shop closes at 5:30 p.m.（ギフトショップは午後5時30分に閉まる）」とあります。6:00は水族館全体の閉館時間です。\n【図解】読み取りのポイント\n★本文の該当箇所: Gift shop closes at 5:30 p.m.\n○正解の根拠: gift shop の閉店時刻が 5:30 p.m.\n×ひっかけ: 6:00 p.m. は水族館全体の閉館時刻\n→結論。どの施設の時間か、主語と時刻を対応させる。',
    difficulty: 'standard',
  },
];
