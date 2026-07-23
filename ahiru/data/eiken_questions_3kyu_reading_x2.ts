import { EikenQuestion } from './eiken_questions';

export const eikenQuestions3kyuReadingX2: EikenQuestion[] = [
  {
    id: 'eiken_3kyu_rea2_001',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSunny Hill Zoo\nNew Baby Elephant!\nCome and see our new baby elephant, Momo.\nMomo was born on March 3.\nYou can watch her eat at 11:00 a.m. every day.\nSpecial photo time: 2:00 p.m. on weekends only.\n--------------\n\nQuestion: When can visitors take special photos of Momo?',
    choices: [
      { key: 'A', text: 'At 2:00 p.m. on weekends.' },
      { key: 'B', text: 'At 11:00 a.m. every day.' },
      { key: 'C', text: 'On March 3 only.' },
      { key: 'D', text: 'At any time.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Special photo time: 2:00 p.m. on weekends only（特別な写真の時間は週末の午後2時のみ）」とあります。11:00は食事を見られる時間で、写真の時間ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Special photo time: 2:00 p.m. on weekends only\n○正解の根拠: photo（写真）の時間は週末の2:00 p.m.\n×ひっかけ: 11:00 a.m. は eat（食事）を見る時間\n→結論。設問の photo と本文の Special photo time を結びつける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_002',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nCity Sports Center\nSwimming Lessons for Beginners\nEvery Tuesday and Thursday\n5:00 p.m. - 6:00 p.m.\nCost: 3,000 yen for one month\nPlease bring a towel and swimming cap.\nStudents under 10 must come with a parent.\n--------------\n\nQuestion: What must young children under 10 do?',
    choices: [
      { key: 'A', text: 'Pay 5,000 yen.' },
      { key: 'B', text: 'Bring their own food.' },
      { key: 'C', text: 'Come with a parent.' },
      { key: 'D', text: 'Come on Mondays.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Students under 10 must come with a parent（10歳未満の生徒は親と一緒に来なければならない）」とあります。料金は3,000円、持ち物はタオルと水泳帽です。\n【図解】読み取りのポイント\n★本文の該当箇所: Students under 10 must come with a parent\n○正解の根拠: under 10（10歳未満）は親同伴が必要\n×ひっかけ: 3,000 yen が料金で 5,000 yen ではない\n→結論。must のあとに「しなければならないこと」が書かれる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_003',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Library News\nThe library will have new opening hours from next Monday.\nOld hours: 9:00 a.m. - 4:00 p.m.\nNew hours: 9:00 a.m. - 6:00 p.m.\nYou can now borrow up to five books at one time.\n--------------\n\nQuestion: What is the change about the library?',
    choices: [
      { key: 'A', text: 'It will close earlier.' },
      { key: 'B', text: 'It will open only on Mondays.' },
      { key: 'C', text: 'It will move to a new building.' },
      { key: 'D', text: 'It will stay open two hours longer.' },
    ],
    correctKey: 'D',
    explanation:
      '古い時間は4:00まで、新しい時間は6:00までなので、閉まる時間が2時間遅くなります。つまり2時間長く開くということです。\n【図解】読み取りのポイント\n★本文の該当箇所: Old hours ... 4:00 p.m. / New hours ... 6:00 p.m.\n○正解の根拠: 4:00→6:00 で2時間長く開館する\n×ひっかけ: earlier（早く閉まる）は逆の意味\n→結論。Old と New を比べて変化の方向をつかむ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_004',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nWelcome to Green Valley Camp!\nMorning: Hiking in the mountains\nAfternoon: Cooking outdoor lunch\nEvening: Singing around the campfire\nIf it rains, hiking will change to indoor games.\n--------------\n\nQuestion: What will happen if it rains?',
    choices: [
      { key: 'A', text: 'The camp will be closed.' },
      { key: 'B', text: 'The campfire will start earlier.' },
      { key: 'C', text: 'Lunch will not be served.' },
      { key: 'D', text: 'Hiking will change to indoor games.' },
    ],
    correctKey: 'D',
    explanation:
      '掲示に「If it rains, hiking will change to indoor games（雨が降ったら、ハイキングは屋内ゲームに変わる）」とあります。キャンプが閉まるわけではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: If it rains, hiking will change to indoor games\n○正解の根拠: rain のときの変更内容が indoor games\n×ひっかけ: closed や no lunch は本文に書かれていない\n→結論。If it rains の直後に「雨のときどうなるか」がある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_005',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nStudent Art Contest\nDraw a picture about "My Town."\nSend your picture to the office by June 15.\nWinners will be shown on the school website.\nThe best picture will win a 5,000-yen book ticket.\n--------------\n\nQuestion: What is the theme of the art contest?',
    choices: [
      { key: 'A', text: 'My Family.' },
      { key: 'B', text: 'My School.' },
      { key: 'C', text: 'My Town.' },
      { key: 'D', text: 'My Dream.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Draw a picture about "My Town."（「私の町」について絵を描く）」とあります。これがコンテストのテーマです。\n【図解】読み取りのポイント\n★本文の該当箇所: Draw a picture about "My Town."\n○正解の根拠: about のあとの My Town がテーマ\n×ひっかけ: Family や School は本文にない\n→結論。theme（テーマ）は about のあとの語句を探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_006',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nBus Tour to the Old Castle\nDate: Sunday, October 12\nThe bus leaves the station at 8:00 a.m.\nWe will come back at 5:00 p.m.\nLunch is not included, so please bring your own.\nDo not forget your camera!\n--------------\n\nQuestion: What should people bring on the tour?',
    choices: [
      { key: 'A', text: 'Their own lunch.' },
      { key: 'B', text: 'A blanket.' },
      { key: 'C', text: 'A ticket for the castle.' },
      { key: 'D', text: 'Some money for the bus.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Lunch is not included, so please bring your own（昼食は含まれないので自分の物を持ってきてください）」とあります。カメラも忘れないようにとありますが、選択肢にはありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Lunch is not included, so please bring your own\n○正解の根拠: not included → 自分で持参する必要がある\n×ひっかけ: ticket や money は本文に書かれていない\n→結論。bring（持ってくる）の目的語を本文から探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_007',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Festival Volunteers Needed\nWe need students to help at the school festival.\nJobs: selling tickets, cleaning, and guiding visitors.\nMeeting: October 5 after school in Room 201\nIf you want to help, tell your teacher by October 3.\n--------------\n\nQuestion: What should students do if they want to help?',
    choices: [
      { key: 'A', text: 'Go to Room 201 on October 3.' },
      { key: 'B', text: 'Clean the classroom every day.' },
      { key: 'C', text: 'Buy a festival ticket.' },
      { key: 'D', text: 'Tell their teacher by October 3.' },
    ],
    correctKey: 'D',
    explanation:
      '掲示に「If you want to help, tell your teacher by October 3（手伝いたいなら10月3日までに先生に伝える）」とあります。10月5日は会議の日です。\n【図解】読み取りのポイント\n★本文の該当箇所: tell your teacher by October 3\n○正解の根拠: 手伝いたい人がすべきことは「先生に伝える」\n×ひっかけ: October 5 は Meeting の日で申し込みの締め切りではない\n→結論。want to ... の条件のあとの行動を読み取る。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_008',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nRiverside Farmers Market\nFresh vegetables and fruits every Saturday morning.\nOpen: 7:00 a.m. - 11:00 a.m.\nThis week we also have fresh bread from Baker Tom.\nBring your own bag to get a 10% discount.\n--------------\n\nQuestion: How can shoppers get a discount?',
    choices: [
      { key: 'A', text: 'By coming before 7:00 a.m.' },
      { key: 'B', text: 'By buying bread.' },
      { key: 'C', text: 'By bringing their own bag.' },
      { key: 'D', text: 'By paying with cash.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Bring your own bag to get a 10% discount（自分の袋を持ってくれば10%割引がもらえる）」とあります。パンは今週の新商品ですが割引の条件ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Bring your own bag to get a 10% discount\n○正解の根拠: discount（割引）の条件は「自分の袋を持参」\n×ひっかけ: bread や cash は割引条件ではない\n→結論。discount の前後にある条件（to get〜）を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_009',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nMusic Club Concert\nOur club will hold a concert in the school gym.\nDate: December 18, 6:00 p.m.\nTickets are free, but you need to get one at the office.\nOnly 200 tickets are ready, so please hurry.\n--------------\n\nQuestion: What do people need to do to come to the concert?',
    choices: [
      { key: 'A', text: 'Pay 200 yen.' },
      { key: 'B', text: 'Bring their own chair.' },
      { key: 'C', text: 'Join the music club.' },
      { key: 'D', text: 'Get a free ticket at the office.' },
    ],
    correctKey: 'D',
    explanation:
      '掲示に「Tickets are free, but you need to get one at the office（チケットは無料だが事務室でもらう必要がある）」とあります。200はチケットの枚数で料金ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Tickets are free, but you need to get one at the office\n○正解の根拠: free（無料）でも office でチケットを取る必要がある\n×ひっかけ: 200 は tickets の枚数で料金ではない\n→結論。but のあとに「それでも必要なこと」が書かれる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_010',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nNo Bikes Here!\nPlease do not leave your bike in front of the store.\nBikes here make it hard for people to walk.\nYou can use the free bike parking behind the building.\nThank you for your help.\n--------------\n\nQuestion: Where can people leave their bikes?',
    choices: [
      { key: 'A', text: 'In front of the store.' },
      { key: 'B', text: 'On the road.' },
      { key: 'C', text: 'Behind the building.' },
      { key: 'D', text: 'Inside the store.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「You can use the free bike parking behind the building（建物の裏にある無料の駐輪場を使える）」とあります。店の前は置いてはいけない場所です。\n【図解】読み取りのポイント\n★本文の該当箇所: the free bike parking behind the building\n○正解の根拠: 自転車を置ける場所は behind the building\n×ひっかけ: in front of the store は do not leave の場所\n→結論。can use と do not leave の場所を区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_011',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSummer English Camp\nStudents can practice English with teachers from Australia.\nDate: August 1 - August 3 (three days)\nPlace: Lakeside Youth Center\nYou will stay one night at the center.\nPlease sign up by July 20.\n--------------\n\nQuestion: How long is the English camp?',
    choices: [
      { key: 'A', text: 'One day.' },
      { key: 'B', text: 'Two days.' },
      { key: 'C', text: 'Three days.' },
      { key: 'D', text: 'One week.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「August 1 - August 3 (three days)（8月1日から3日まで、3日間）」とあります。宿泊は1泊ですが、期間は3日間です。\n【図解】読み取りのポイント\n★本文の該当箇所: August 1 - August 3 (three days)\n○正解の根拠: (three days) がキャンプの日数\n×ひっかけ: one night（1泊）は泊まる回数で日数ではない\n→結論。How long は日数を示す語や () の説明を探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_012',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nLost and Found\nA black umbrella was found in the science room.\nIt was found on Friday afternoon.\nIf it is yours, please come to the teachers\' room.\nWe will keep it until the end of this month.\n--------------\n\nQuestion: Where was the umbrella found?',
    choices: [
      { key: 'A', text: 'In the science room.' },
      { key: 'B', text: 'In the teachers\' room.' },
      { key: 'C', text: 'In the gym.' },
      { key: 'D', text: 'On the school bus.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「A black umbrella was found in the science room（黒い傘が理科室で見つかった）」とあります。職員室は取りに来る場所です。\n【図解】読み取りのポイント\n★本文の該当箇所: A black umbrella was found in the science room\n○正解の根拠: found in ... のあとが見つかった場所\n×ひっかけ: teachers\' room は取りに行く場所で発見場所ではない\n→結論。found と come to の場所を混同しない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_013',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nCooking Class for Parents and Children\nLet\'s make pizza together!\nDate: Sunday, November 9\nTime: 10:00 a.m. - 12:00 p.m.\nEach family must pay 1,500 yen for the food.\nPlease wear an apron.\n--------------\n\nQuestion: What will people make in this class?',
    choices: [
      { key: 'A', text: 'Pizza.' },
      { key: 'B', text: 'Cakes.' },
      { key: 'C', text: 'Soup.' },
      { key: 'D', text: 'Bread.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Let\'s make pizza together!（一緒にピザを作ろう）」とあります。これが料理教室で作るものです。\n【図解】読み取りのポイント\n★本文の該当箇所: Let\'s make pizza together!\n○正解の根拠: make のあとの pizza が作るもの\n×ひっかけ: cake や bread は本文にない\n→結論。make のあとの名詞が「作る物」。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_014',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nWinter Ski Trip\nThe school will go to Snow Mountain.\nWe will leave school at 6:00 a.m. on January 20.\nYou need warm clothes and gloves.\nSki lessons are free for all students this year.\n--------------\n\nQuestion: What is free this year?',
    choices: [
      { key: 'A', text: 'The bus.' },
      { key: 'B', text: 'Warm clothes.' },
      { key: 'C', text: 'Ski lessons.' },
      { key: 'D', text: 'Lunch.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Ski lessons are free for all students this year（今年はスキーレッスンが全生徒無料）」とあります。暖かい服と手袋は必要な持ち物です。\n【図解】読み取りのポイント\n★本文の該当箇所: Ski lessons are free for all students this year\n○正解の根拠: free（無料）なのは ski lessons\n×ひっかけ: warm clothes は必要な持ち物で無料の対象ではない\n→結論。free の直前にある名詞を探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_015',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nBook Club Meeting\nThis month\'s book is "The Blue Sea."\nPlease read it before the meeting.\nDate: Wednesday, February 4, after lunch\nPlace: Room 105\nWe will talk about our favorite characters.\n--------------\n\nQuestion: What should members do before the meeting?',
    choices: [
      { key: 'A', text: 'Buy a new book.' },
      { key: 'B', text: 'Read "The Blue Sea."' },
      { key: 'C', text: 'Draw a picture of the sea.' },
      { key: 'D', text: 'Write a report.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Please read it before the meeting（会議の前にそれを読んでください）」とあり、it は "The Blue Sea" を指します。\n【図解】読み取りのポイント\n★本文の該当箇所: Please read it before the meeting\n○正解の根拠: it = "The Blue Sea" を読むのが事前の準備\n×ひっかけ: report や picture は本文にない活動\n→結論。before the meeting の前後で「事前にすること」を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_016',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Marathon\nAll third-year students will run 5 kilometers.\nDate: March 6 (If it rains, March 8)\nStart time: 9:30 a.m.\nPlease eat breakfast and drink water before you run.\n--------------\n\nQuestion: What will happen if it rains on March 6?',
    choices: [
      { key: 'A', text: 'The marathon will be at 9:30 p.m.' },
      { key: 'B', text: 'The marathon will be canceled.' },
      { key: 'C', text: 'Students will run 8 kilometers.' },
      { key: 'D', text: 'The marathon will move to March 8.' },
    ],
    correctKey: 'D',
    explanation:
      '掲示に「Date: March 6 (If it rains, March 8)（3月6日、雨なら3月8日）」とあります。中止ではなく日付が変わります。\n【図解】読み取りのポイント\n★本文の該当箇所: March 6 (If it rains, March 8)\n○正解の根拠: 雨天のときは March 8 に延期\n×ひっかけ: canceled（中止）ではなく日付変更\n→結論。() 内の If it rains の条件をよく読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_017',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nNew Café at Central Station\nSunrise Café is now open on the second floor.\nMorning set (coffee and toast): 500 yen until 10:00 a.m.\nAfter 10:00 a.m., the same set is 700 yen.\nFree Wi-Fi is ready for all guests.\n--------------\n\nQuestion: How much is the morning set before 10:00 a.m.?',
    choices: [
      { key: 'A', text: '500 yen.' },
      { key: 'B', text: '700 yen.' },
      { key: 'C', text: '200 yen.' },
      { key: 'D', text: '1,000 yen.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Morning set ... 500 yen until 10:00 a.m.（10時までモーニングセットは500円）」とあります。10時以降は700円になります。\n【図解】読み取りのポイント\n★本文の該当箇所: Morning set ... 500 yen until 10:00 a.m.\n○正解の根拠: 10時前は 500 yen\n×ひっかけ: 700 yen は After 10:00 a.m. の値段\n→結論。時間の条件（until / after）で値段が変わる点に注意。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_018',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nClass Trip to the Science Museum\nWe will visit the Science Museum on May 22.\nMeet at the school gate at 8:15 a.m.\nThe train leaves at 8:40 a.m.\nDo not be late, or you will miss the train.\n--------------\n\nQuestion: What time should students meet at the school gate?',
    choices: [
      { key: 'A', text: 'At 8:00 a.m.' },
      { key: 'B', text: 'At 9:00 a.m.' },
      { key: 'C', text: 'At 8:40 a.m.' },
      { key: 'D', text: 'At 8:15 a.m.' },
    ],
    correctKey: 'D',
    explanation:
      '掲示に「Meet at the school gate at 8:15 a.m.（8時15分に校門に集合）」とあります。8:40は電車の出発時刻です。\n【図解】読み取りのポイント\n★本文の該当箇所: Meet at the school gate at 8:15 a.m.\n○正解の根拠: meet（集合）の時刻は 8:15\n×ひっかけ: 8:40 は train leaves（電車の出発）の時刻\n→結論。meet と leaves の時刻を分けて読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_019',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nPlease Help the Animal Shelter\nWe are looking for old towels and blankets for our dogs and cats.\nYou can bring them to the front desk any day.\nWe also need people to walk the dogs on weekends.\nThank you very much!\n--------------\n\nQuestion: What does the animal shelter need on weekends?',
    choices: [
      { key: 'A', text: 'People to walk the dogs.' },
      { key: 'B', text: 'New toys.' },
      { key: 'C', text: 'Money for food.' },
      { key: 'D', text: 'A new building.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「We also need people to walk the dogs on weekends（週末に犬を散歩させる人も必要）」とあります。タオルや毛布はいつでも持ち込めます。\n【図解】読み取りのポイント\n★本文の該当箇所: need people to walk the dogs on weekends\n○正解の根拠: 週末に必要なのは犬を散歩させる人\n×ひっかけ: towels は寄付品で週末限定ではない\n→結論。on weekends の条件に合う内容を選ぶ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_020',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\n--- NOTICE ---\nSchool Garden Project\nStudents will grow tomatoes and flowers this spring.\nWe will plant the seeds on April 10.\nEveryone must water the plants after school.\nWe will eat the tomatoes at the summer party.\n--------------\n\nQuestion: When will the students plant the seeds?',
    choices: [
      { key: 'A', text: 'On April 10.' },
      { key: 'B', text: 'In summer.' },
      { key: 'C', text: 'Every morning.' },
      { key: 'D', text: 'At the party.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「We will plant the seeds on April 10（4月10日に種をまく）」とあります。夏はトマトを食べる時期です。\n【図解】読み取りのポイント\n★本文の該当箇所: We will plant the seeds on April 10\n○正解の根拠: plant the seeds（種まき）の日は April 10\n×ひっかけ: summer は eat the tomatoes の時期\n→結論。plant と eat の時期を区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_021',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Lucy\nTo: Nana\nDate: June 5\nSubject: Weekend plan\n\nHi Nana,\nAre you free this Saturday? My family is going to the beach. My mother said you can come, too. We will leave my house at 9:00 a.m. Please bring a hat because it will be hot. Tell me by Thursday if you can come.\nYour friend, Lucy\n\nQuestion: Why does Lucy tell Nana to bring a hat?',
    choices: [
      { key: 'A', text: 'Because it will rain.' },
      { key: 'B', text: 'Because it will be hot.' },
      { key: 'C', text: 'Because it is a rule.' },
      { key: 'D', text: 'Because the beach is far.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「Please bring a hat because it will be hot（暑くなるので帽子を持ってきて）」とあります。理由は「暑いから」です。\n【図解】読み取りのポイント\n★本文の該当箇所: bring a hat because it will be hot\n○正解の根拠: because のあとに理由 it will be hot\n×ひっかけ: rain は本文にない\n→結論。Why の設問は because のあとを読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_022',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Tom\nTo: Grandpa\nDate: September 12\nSubject: Thank you\n\nDear Grandpa,\nThank you for the new bike. I rode it to school today. My friends said it looks really cool. I will visit you next month and show you how fast I can ride. See you soon!\nTom\n\nQuestion: What did Grandpa give to Tom?',
    choices: [
      { key: 'A', text: 'A new bike.' },
      { key: 'B', text: 'A new bag.' },
      { key: 'C', text: 'Some money.' },
      { key: 'D', text: 'A book.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「Thank you for the new bike（新しい自転車をありがとう）」とあります。トムは祖父から自転車をもらいました。\n【図解】読み取りのポイント\n★本文の該当箇所: Thank you for the new bike\n○正解の根拠: Thank you for のあとがもらった物\n×ひっかけ: money や book は本文にない\n→結論。Thank you for 〜 でお礼の対象＝もらった物がわかる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_023',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mr. Baker\nTo: Class 3-A\nDate: October 1\nSubject: Homework\n\nHello everyone,\nFor next week, please write a short story in English. It should be about a hero. Your story must be at least ten sentences long. Bring it to class next Monday. Have fun writing!\nMr. Baker\n\nQuestion: What is the homework about?',
    choices: [
      { key: 'A', text: 'Drawing a hero.' },
      { key: 'B', text: 'Making a poster.' },
      { key: 'C', text: 'Reading ten books.' },
      { key: 'D', text: 'Writing a story about a hero.' },
    ],
    correctKey: 'D',
    explanation:
      'Eメールに「please write a short story in English. It should be about a hero（英語で短い物語を書く。ヒーローについて）」とあります。宿題はヒーローの物語を書くことです。\n【図解】読み取りのポイント\n★本文の該当箇所: write a short story ... about a hero\n○正解の根拠: write（書く）と a hero が宿題の内容\n×ひっかけ: drawing（描く）や reading（読む）ではない\n→結論。動詞（write）と話題（about a hero）を合わせて読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_024',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Kate\nTo: David\nDate: November 3\nSubject: Sorry\n\nHi David,\nI\'m sorry, but I can\'t come to your party on Saturday. I have a bad cold and need to rest at home. I hope you have a great time. I will give you your present next week at school. Get better soon means a lot to me!\nKate\n\nQuestion: Why can\'t Kate go to the party?',
    choices: [
      { key: 'A', text: 'She has too much homework.' },
      { key: 'B', text: 'She has a bad cold.' },
      { key: 'C', text: 'She is going on a trip.' },
      { key: 'D', text: 'She forgot the date.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「I have a bad cold and need to rest at home（ひどい風邪をひいて家で休む必要がある）」とあります。だからパーティーに行けません。\n【図解】読み取りのポイント\n★本文の該当箇所: I have a bad cold and need to rest at home\n○正解の根拠: can\'t come の理由が bad cold\n×ひっかけ: homework や trip は本文にない\n→結論。can\'t のあとにある理由の文を探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_025',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Aunt Mary\nTo: Sophie\nDate: December 8\nSubject: Visit\n\nDear Sophie,\nI will come to Japan next month. I want to see cherry blossoms, but they are not out in January. So I will come again in April instead. In January, let\'s go to a hot spring together. I can\'t wait!\nAunt Mary\n\nQuestion: When will Aunt Mary come to see cherry blossoms?',
    choices: [
      { key: 'A', text: 'In January.' },
      { key: 'B', text: 'In February.' },
      { key: 'C', text: 'In April.' },
      { key: 'D', text: 'In December.' },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「they are not out in January. So I will come again in April（1月には桜が咲いていないので、4月にまた来る）」とあります。桜を見に来るのは4月です。\n【図解】読み取りのポイント\n★本文の該当箇所: come again in April\n○正解の根拠: cherry blossoms を見るのは April\n×ひっかけ: January は hot spring（温泉）に行く月\n→結論。「桜のため」の月と「温泉のため」の月を分ける。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_026',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Coach Lee\nTo: Soccer team\nDate: April 15\nSubject: Practice change\n\nHi team,\nOur ground is wet after the rain, so we cannot use it tomorrow. Instead, we will meet in the gym at 4:00 p.m. and practice passing. Please wear indoor shoes. Don\'t forget your water bottle.\nCoach Lee\n\nQuestion: Why will the team practice in the gym?',
    choices: [
      { key: 'A', text: 'The ground is wet.' },
      { key: 'B', text: 'The gym is bigger.' },
      { key: 'C', text: 'They have a game.' },
      { key: 'D', text: 'It is too cold outside.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「Our ground is wet after the rain, so we cannot use it（雨の後でグラウンドがぬれているので使えない）」とあります。そのため体育館で練習します。\n【図解】読み取りのポイント\n★本文の該当箇所: Our ground is wet ... so we cannot use it\n○正解の根拠: 体育館を使う理由は「グラウンドがぬれている」\n×ひっかけ: bigger や cold は本文にない\n→結論。so の前にある理由を読み取る。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_027',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Ben\nTo: Emma\nDate: July 7\nSubject: Summer homework\n\nHi Emma,\nHow is your summer? I finished my math homework, but the science report is really hard. Can you help me with it? Are you free this Friday afternoon? We can study at the city library together. Please write back.\nBen\n\nQuestion: What does Ben want Emma to help him with?',
    choices: [
      { key: 'A', text: 'His math homework.' },
      { key: 'B', text: 'His art project.' },
      { key: 'C', text: 'His English essay.' },
      { key: 'D', text: 'His science report.' },
    ],
    correctKey: 'D',
    explanation:
      'Eメールに「the science report is really hard. Can you help me with it?（理科のレポートがとても難しい。手伝ってくれる？）」とあります。数学はもう終わっています。\n【図解】読み取りのポイント\n★本文の該当箇所: the science report is really hard. Can you help me\n○正解の根拠: help me の対象は science report\n×ひっかけ: math homework は finished（終わった）\n→結論。help me with の直前の話題を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_028',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Grandma\nTo: Rina\nDate: August 25\nSubject: Recipe\n\nDear Rina,\nYou asked me how to make my cookies. First, mix butter and sugar. Then add flour and eggs. Bake them for 15 minutes. The most important thing is to add a little salt. It makes the cookies taste better!\nGrandma\n\nQuestion: What does Grandma say is the most important thing?',
    choices: [
      { key: 'A', text: 'To use a lot of sugar.' },
      { key: 'B', text: 'To bake for 30 minutes.' },
      { key: 'C', text: 'To add a little salt.' },
      { key: 'D', text: 'To use fresh eggs.' },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「The most important thing is to add a little salt（一番大切なのは少し塩を加えること）」とあります。焼く時間は15分です。\n【図解】読み取りのポイント\n★本文の該当箇所: The most important thing is to add a little salt\n○正解の根拠: most important（一番大切）なのは塩を加えること\n×ひっかけ: 30 minutes は誤り(本文は15分)\n→結論。most important thing の直後に答えがある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_029',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mika\nTo: Host family\nDate: February 18\nSubject: My arrival\n\nDear Mr. and Mrs. Smith,\nThank you for having me. My plane will land at 3:00 p.m. on March 5. My flight number is JL201. I have long black hair and I will wear a red jacket. I am so excited to meet you!\nMika\n\nQuestion: How can the Smiths know Mika at the airport?',
    choices: [
      { key: 'A', text: 'She will hold a sign.' },
      { key: 'B', text: 'She will wear a red jacket.' },
      { key: 'C', text: 'She will carry a blue bag.' },
      { key: 'D', text: 'She will call them.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「I will wear a red jacket（赤いジャケットを着る）」とあります。これで空港でミカを見分けられます。\n【図解】読み取りのポイント\n★本文の該当箇所: I will wear a red jacket\n○正解の根拠: 見分ける目印は「赤いジャケット」\n×ひっかけ: sign や blue bag は本文にない\n→結論。wear（身につける）物が目印になる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_030',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Jack\nTo: Uncle Sam\nDate: May 30\nSubject: My news\n\nDear Uncle Sam,\nGuess what? I won first prize in the school speech contest! My speech was about my dream to become a doctor. Mom and Dad were very happy. I practiced every night for two weeks. Thank you for your help last month.\nJack\n\nQuestion: What was Jack\'s speech about?',
    choices: [
      { key: 'A', text: 'His favorite sport.' },
      { key: 'B', text: 'His school trip.' },
      { key: 'C', text: 'His dream to become a doctor.' },
      { key: 'D', text: 'His pet dog.' },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「My speech was about my dream to become a doctor（私のスピーチは医者になる夢についてだった）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: My speech was about my dream to become a doctor\n○正解の根拠: speech was about のあとが話題\n×ひっかけ: sport や pet は本文にない\n→結論。was about のあとにスピーチの内容がある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_031',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Nina\nTo: Class members\nDate: June 20\nSubject: Farewell party\n\nHi everyone,\nOur teacher, Ms. Green, will go back to Canada next month. Let\'s have a party for her! We will meet in Room 302 after school on June 27. Please bring a small gift or a letter. I will bring a big cake. Let\'s make it special!\nNina\n\nQuestion: Why are the students having a party?',
    choices: [
      { key: 'A', text: 'Ms. Green is having a birthday.' },
      { key: 'B', text: 'They won a contest.' },
      { key: 'C', text: 'The school year is ending.' },
      { key: 'D', text: 'Ms. Green will go back to Canada.' },
    ],
    correctKey: 'D',
    explanation:
      'Eメールに「Our teacher, Ms. Green, will go back to Canada next month. Let\'s have a party for her!（グリーン先生が来月カナダに帰るので、彼女のためにパーティーをしよう）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: Ms. Green, will go back to Canada ... Let\'s have a party\n○正解の根拠: パーティーの理由は先生の帰国\n×ひっかけ: birthday や contest は本文にない\n→結論。Let\'s have a party の前の文に理由がある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_032',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Paul\nTo: Amy\nDate: July 14\nSubject: Lost cat\n\nHi Amy,\nMy cat, Milk, ran away yesterday. She is white with a black tail. She likes to hide in gardens. If you see her near your house, please call me at once. I am really worried. Thank you for your help.\nPaul\n\nQuestion: What does Paul ask Amy to do?',
    choices: [
      { key: 'A', text: 'Feed his cat.' },
      { key: 'B', text: 'Call him if she sees the cat.' },
      { key: 'C', text: 'Buy a new cat.' },
      { key: 'D', text: 'Look after his garden.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「If you see her near your house, please call me at once（もし家の近くで見かけたら、すぐに電話して）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: If you see her ... please call me at once\n○正解の根拠: 頼みごとは「見かけたら電話する」こと\n×ひっかけ: feed や buy は本文にない\n→結論。please のあとに「してほしいこと」が書かれる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_033',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Olivia\nTo: Liam\nDate: September 2\nSubject: Book return\n\nHi Liam,\nDo you remember the book you borrowed from me in July? It is my sister\'s favorite book, and she wants to read it again. Could you bring it to school tomorrow? I\'m sorry to ask, but she really needs it. Thanks!\nOlivia\n\nQuestion: Whose book does Olivia want back?',
    choices: [
      { key: 'A', text: 'Her own book.' },
      { key: 'B', text: 'Her sister\'s book.' },
      { key: 'C', text: 'Liam\'s book.' },
      { key: 'D', text: 'The library\'s book.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「It is my sister\'s favorite book, and she wants to read it again（それは姉のお気に入りの本で、また読みたがっている）」とあります。返してほしいのは姉の本です。\n【図解】読み取りのポイント\n★本文の該当箇所: It is my sister\'s favorite book\n○正解の根拠: 本の持ち主は my sister（姉／妹）\n×ひっかけ: Olivia 自身や図書館の本ではない\n→結論。所有を表す \'s（sister\'s）で持ち主を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_034',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mr. Tanaka\nTo: Students\nDate: October 10\nSubject: Field trip\n\nHello students,\nOn the field trip, we will first visit the fire station. Then we will have lunch in the park. In the afternoon, we will go to the museum. Please remember that the fire station does not allow cameras inside.\nMr. Tanaka\n\nQuestion: Where will the students go first?',
    choices: [
      { key: 'A', text: 'The park.' },
      { key: 'B', text: 'The museum.' },
      { key: 'C', text: 'The fire station.' },
      { key: 'D', text: 'The zoo.' },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「we will first visit the fire station（まず消防署を訪れる）」とあります。公園は昼食、博物館は午後です。\n【図解】読み取りのポイント\n★本文の該当箇所: we will first visit the fire station\n○正解の根拠: first（最初に）行くのは fire station\n×ひっかけ: park は lunch、museum は afternoon の場所\n→結論。first / then / afternoon の順序語で並びを整理する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_035',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Sara\nTo: Grandma\nDate: November 20\nSubject: School play\n\nDear Grandma,\nNext month, my class will do a school play. I will play the part of a queen. I have many lines to remember, so I practice every day. The play is on December 15. Can you come and watch? I really hope you can.\nSara\n\nQuestion: What part will Sara play in the school play?',
    choices: [
      { key: 'A', text: 'A queen.' },
      { key: 'B', text: 'A princess.' },
      { key: 'C', text: 'A witch.' },
      { key: 'D', text: 'A teacher.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「I will play the part of a queen（私は女王の役をする）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: I will play the part of a queen\n○正解の根拠: play the part of のあとが役柄で queen\n×ひっかけ: princess や witch は本文にない\n→結論。play the part of 〜 で「〜の役」を表す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_036',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Daniel\nTo: Chris\nDate: December 1\nSubject: Snow!\n\nHi Chris,\nIt snowed a lot last night, so my train did not run this morning. I had to walk to school for 40 minutes! My shoes got very wet. I hope the trains work again tomorrow. How did you get to school today?\nDaniel\n\nQuestion: Why did Daniel walk to school?',
    choices: [
      { key: 'A', text: 'He missed the bus.' },
      { key: 'B', text: 'His train did not run.' },
      { key: 'C', text: 'He wanted to exercise.' },
      { key: 'D', text: 'His bike was broken.' },
    ],
    correctKey: 'B',
    explanation:
      'Eメールに「my train did not run this morning. I had to walk to school（今朝電車が動かなかったので学校まで歩かなければならなかった）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: my train did not run this morning. I had to walk\n○正解の根拠: 歩いた理由は「電車が動かなかった」\n×ひっかけ: bus や bike は本文にない\n→結論。had to walk の前にある原因の文を探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_037',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Emily\nTo: Book Store\nDate: January 9\nSubject: Question about a book\n\nHello,\nI am looking for a cookbook called "Easy Meals." Do you have it in your store? If you do, how much is it? Also, do you open on Sundays? I would like to visit this weekend. Thank you for your help.\nEmily\n\nQuestion: What does Emily want to buy?',
    choices: [
      { key: 'A', text: 'A cookbook.' },
      { key: 'B', text: 'A dictionary.' },
      { key: 'C', text: 'A magazine.' },
      { key: 'D', text: 'A comic book.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「I am looking for a cookbook called "Easy Meals."（「イージー・ミールズ」という料理本を探している）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: I am looking for a cookbook called "Easy Meals."\n○正解の根拠: looking for のあとが探している物 cookbook\n×ひっかけ: dictionary や magazine は本文にない\n→結論。looking for 〜 で「探している物」がわかる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_038',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Hana\nTo: Judy\nDate: March 22\nSubject: New pet\n\nHi Judy,\nWe got a new pet last weekend! It is not a dog or a cat. It is a small rabbit with brown ears. His name is Cocoa. He eats carrots and loves to jump around the room. Come to my house and see him soon!\nHana\n\nQuestion: What kind of pet did Hana get?',
    choices: [
      { key: 'A', text: 'A dog.' },
      { key: 'B', text: 'A cat.' },
      { key: 'C', text: 'A rabbit.' },
      { key: 'D', text: 'A bird.' },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「It is a small rabbit with brown ears（茶色い耳の小さなウサギ）」とあります。犬や猫ではないとはっきり書かれています。\n【図解】読み取りのポイント\n★本文の該当箇所: It is not a dog or a cat. It is a small rabbit\n○正解の根拠: not a dog or a cat のあとで rabbit と明示\n×ひっかけ: dog・cat は「〜ではない」と否定されている\n→結論。not A ... It is B の形で B が正解。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_039',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mr. Wilson\nTo: Parents\nDate: April 28\nSubject: Sports Day\n\nDear Parents,\nOur Sports Day will be held on May 18. It starts at 9:00 a.m. and ends at 3:00 p.m. Parents can watch from the seats near the gate. Please do not park your cars in front of the school. Use the parking lot at the park.\nMr. Wilson\n\nQuestion: Where should parents park their cars?',
    choices: [
      { key: 'A', text: 'In front of the school.' },
      { key: 'B', text: 'Near the gate.' },
      { key: 'C', text: 'At the park parking lot.' },
      { key: 'D', text: 'On the street.' },
    ],
    correctKey: 'C',
    explanation:
      'Eメールに「Use the parking lot at the park（公園の駐車場を使ってください）」とあります。学校の前は駐車禁止です。\n【図解】読み取りのポイント\n★本文の該当箇所: Use the parking lot at the park\n○正解の根拠: 駐車場所は「公園の駐車場」\n×ひっかけ: in front of the school は do not park の場所\n×ひっかけ: near the gate は観覧の座席\n→結論。do not park と Use の場所を区別する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_040',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Ryan\nTo: Grandma\nDate: June 11\nSubject: Camp report\n\nDear Grandma,\nI just came home from summer camp. My favorite part was fishing in the river. I caught three fish! We also made a fire and cooked them. It was the best meal ever. I want to go there again next year.\nRyan\n\nQuestion: What was Ryan\'s favorite part of the camp?',
    choices: [
      { key: 'A', text: 'Fishing in the river.' },
      { key: 'B', text: 'Climbing a mountain.' },
      { key: 'C', text: 'Singing songs.' },
      { key: 'D', text: 'Sleeping in a tent.' },
    ],
    correctKey: 'A',
    explanation:
      'Eメールに「My favorite part was fishing in the river（一番好きだったのは川での魚釣り）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: My favorite part was fishing in the river\n○正解の根拠: favorite part（お気に入り）は fishing\n×ひっかけ: climbing や singing は本文にない\n→結論。favorite part was のあとに答えがある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_041',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nKumi is a junior high school student. She loves music and plays the violin. Every morning, she practices for one hour before school. Her dream is to play in a big concert someday. Last month, she joined a school orchestra and made many new friends who also love music.\n\nQuestion: What does Kumi do every morning?',
    choices: [
      { key: 'A', text: 'She reads books.' },
      { key: 'B', text: 'She practices the violin.' },
      { key: 'C', text: 'She goes running.' },
      { key: 'D', text: 'She helps her mother.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Every morning, she practices for one hour before school（毎朝、学校の前に1時間練習する）」とあり、久美はバイオリンを練習しています。\n【図解】読み取りのポイント\n★本文の該当箇所: Every morning, she practices for one hour\n○正解の根拠: plays the violin と合わせて毎朝の練習はバイオリン\n×ひっかけ: reading や running は本文にない\n→結論。Every morning の文で毎朝の行動を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_042',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nTom moved to a new town last spring. At first, he was lonely because he had no friends. One day, a boy named Ken talked to him at the bus stop. They found out they both liked soccer. Now they play soccer together every weekend and are good friends.\n\nQuestion: How did Tom and Ken become friends?',
    choices: [
      { key: 'A', text: 'They were in the same class.' },
      { key: 'B', text: 'Ken talked to Tom at the bus stop.' },
      { key: 'C', text: 'They met at a soccer club.' },
      { key: 'D', text: 'Their mothers knew each other.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「a boy named Ken talked to him at the bus stop（ケンという少年がバス停でトムに話しかけた）」とあり、これがきっかけです。\n【図解】読み取りのポイント\n★本文の該当箇所: a boy named Ken talked to him at the bus stop\n○正解の根拠: 友達になったきっかけはバス停での会話\n×ひっかけ: same class や soccer club は本文にない\n→結論。出来事の順番から「きっかけ」を読み取る。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_043',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nMany people in Japan enjoy hanami in spring. Hanami means looking at cherry blossoms. People sit under the trees and eat lunch with family or friends. The flowers are only beautiful for about one week, so people try to enjoy them quickly before they fall.\n\nQuestion: Why do people enjoy hanami quickly?',
    choices: [
      { key: 'A', text: 'Because the parks close early.' },
      { key: 'B', text: 'Because the trees are far away.' },
      { key: 'C', text: 'Because it is too cold.' },
      { key: 'D', text: 'Because the flowers last only about a week.' },
    ],
    correctKey: 'D',
    explanation:
      '本文に「The flowers are only beautiful for about one week, so people try to enjoy them quickly（花は約1週間しか美しくないので、人々は早く楽しもうとする）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: only beautiful for about one week, so ... quickly\n○正解の根拠: 早く楽しむ理由は「花が1週間ほどしかもたない」\n×ひっかけ: cold や parks close は本文にない\n→結論。so の前にある理由を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_044',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nEmma likes to help her grandmother. Her grandmother lives alone near the sea. Every Sunday, Emma visits her and they cook dinner together. Emma\'s grandmother teaches her old family recipes. Emma wants to remember them and cook the same dishes for her own children someday.\n\nQuestion: What do Emma and her grandmother do every Sunday?',
    choices: [
      { key: 'A', text: 'They go shopping.' },
      { key: 'B', text: 'They watch TV.' },
      { key: 'C', text: 'They walk on the beach.' },
      { key: 'D', text: 'They cook dinner together.' },
    ],
    correctKey: 'D',
    explanation:
      '本文に「Every Sunday, Emma visits her and they cook dinner together（毎週日曜日、エマは祖母を訪ねて一緒に夕食を作る）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: Every Sunday ... they cook dinner together\n○正解の根拠: 毎週日曜の活動は「一緒に夕食を作る」\n×ひっかけ: shopping や beach は本文にない\n→結論。Every Sunday の文で日曜の行動を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_045',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nDavid is interested in space. When he was seven, his father took him to a science museum. There, he saw a big model of the moon. Since that day, David has read many books about stars and planets. He hopes to become an astronaut and travel to space one day.\n\nQuestion: What started David\'s interest in space?',
    choices: [
      { key: 'A', text: 'A TV program.' },
      { key: 'B', text: 'A visit to a science museum.' },
      { key: 'C', text: 'A school lesson.' },
      { key: 'D', text: 'A gift from his friend.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「his father took him to a science museum. There, he saw a big model of the moon. Since that day, David has read many books about stars（父が科学博物館に連れて行き、大きな月の模型を見た。その日以来、星の本をたくさん読んでいる）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: took him to a science museum ... Since that day\n○正解の根拠: 宇宙への興味のきっかけは博物館訪問\n×ひっかけ: TV や school lesson は本文にない\n→結論。Since that day の前の出来事がきっかけ。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_046',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nSakura works at a flower shop. She started working there two years ago. At first, she did not know the names of many flowers. Now she can tell customers about all kinds of flowers. She enjoys helping people choose flowers for birthdays and other special days.\n\nQuestion: What did Sakura not know at first?',
    choices: [
      { key: 'A', text: 'How to use the cash register.' },
      { key: 'B', text: 'How to talk to customers.' },
      { key: 'C', text: 'Where the shop was.' },
      { key: 'D', text: 'The names of many flowers.' },
    ],
    correctKey: 'D',
    explanation:
      '本文に「At first, she did not know the names of many flowers（最初は多くの花の名前を知らなかった）」とあります。今は説明できます。\n【図解】読み取りのポイント\n★本文の該当箇所: At first, she did not know the names of many flowers\n○正解の根拠: 最初に知らなかったのは「花の名前」\n×ひっかけ: cash register や shop の場所は本文にない\n→結論。At first のあとに「最初はできなかったこと」がある。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_047',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nIn many schools in Japan, students clean their classrooms themselves. They use brooms and cloths to clean the floors and windows. Some foreign students are surprised at this. But many people think it is good because students learn to take care of their own school.\n\nQuestion: Why do some foreign students feel surprised?',
    choices: [
      { key: 'A', text: 'Because Japanese schools are very big.' },
      { key: 'B', text: 'Because classes start early.' },
      { key: 'C', text: 'Because there are many windows.' },
      { key: 'D', text: 'Because students clean their own classrooms.' },
    ],
    correctKey: 'D',
    explanation:
      '本文に「students clean their classrooms themselves ... Some foreign students are surprised at this（生徒が自分で教室を掃除することに外国人の生徒は驚く）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: students clean their classrooms themselves ... are surprised at this\n○正解の根拠: this は「生徒が自分で掃除すること」を指す\n×ひっかけ: 学校の大きさや窓の数は驚きの理由ではない\n→結論。this が指す直前の内容を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_048',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nMr. Brown is an English teacher, but he also loves cooking. On weekends, he makes bread at home. He gives some of his bread to his neighbors. They are always happy to get it. Mr. Brown says making bread helps him relax after a busy week.\n\nQuestion: Why does Mr. Brown make bread?',
    choices: [
      { key: 'A', text: 'To sell it at a shop.' },
      { key: 'B', text: 'To help him relax.' },
      { key: 'C', text: 'To win a contest.' },
      { key: 'D', text: 'To teach a cooking class.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「making bread helps him relax after a busy week（パン作りは忙しい一週間の後リラックスするのに役立つ）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: making bread helps him relax after a busy week\n○正解の根拠: パンを作る理由は「リラックスするため」\n×ひっかけ: sell や contest は本文にない\n→結論。helps him 〜 に「目的・効果」が示される。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_049',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nLast summer, Yuki went to Okinawa with her family. The sea was very clear and blue. She saw many colorful fish while swimming. On the last day, she found a beautiful shell on the beach. She brought it home and put it on her desk to remember the trip.\n\nQuestion: What did Yuki bring home from Okinawa?',
    choices: [
      { key: 'A', text: 'A beautiful shell.' },
      { key: 'B', text: 'A colorful fish.' },
      { key: 'C', text: 'Some sand.' },
      { key: 'D', text: 'A photo book.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「she found a beautiful shell on the beach. She brought it home（浜辺で美しい貝を見つけて家に持ち帰った）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: she found a beautiful shell ... She brought it home\n○正解の根拠: 持ち帰ったもの it は a beautiful shell\n×ひっかけ: colorful fish は swimming 中に見たもの\n→結論。brought home の目的語 it が指す物を追う。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_050',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nKenta is on the school baseball team. He is not the best player, but he never gives up. He practices harder than anyone else. Last week, in an important game, he hit the winning point. His teammates were very happy and lifted him up in the air.\n\nQuestion: What did Kenta do in the important game last week?',
    choices: [
      { key: 'A', text: 'He was the pitcher.' },
      { key: 'B', text: 'He hit the winning point.' },
      { key: 'C', text: 'He hurt his leg.' },
      { key: 'D', text: 'He did not play.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「in an important game, he hit the winning point（大事な試合で、彼が決勝点を打った）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: in an important game, he hit the winning point\n○正解の根拠: 試合でしたことは「決勝点を打った」\n×ひっかけ: pitcher や hurt his leg は本文にない\n→結論。game の文で「何をしたか」を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_051',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nRecycling is important for the earth. In Nana\'s town, people must put paper, cans, and plastic in different bags. The town collects paper on Mondays and cans on Thursdays. At first, Nana\'s family found this hard, but now they are used to it and think it is a good idea.\n\nQuestion: When does the town collect cans?',
    choices: [
      { key: 'A', text: 'On Mondays.' },
      { key: 'B', text: 'On Wednesdays.' },
      { key: 'C', text: 'On Thursdays.' },
      { key: 'D', text: 'On Sundays.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「The town collects paper on Mondays and cans on Thursdays（町は月曜に紙、木曜に缶を集める）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: collects paper on Mondays and cans on Thursdays\n○正解の根拠: cans（缶）の収集日は Thursdays\n×ひっかけ: Mondays は paper（紙）の収集日\n→結論。品目ごとの曜日を取り違えない。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_052',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nLisa wanted to learn how to swim. She was afraid of water at first. Her older brother took her to the pool every Saturday and taught her slowly. After three months, Lisa could swim 25 meters. She was very proud of herself and thanked her brother.\n\nQuestion: Who taught Lisa how to swim?',
    choices: [
      { key: 'A', text: 'Her mother.' },
      { key: 'B', text: 'Her teacher.' },
      { key: 'C', text: 'Her older brother.' },
      { key: 'D', text: 'Her friend.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「Her older brother took her to the pool every Saturday and taught her slowly（兄が毎週土曜にプールへ連れて行き、ゆっくり教えた）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: Her older brother ... taught her slowly\n○正解の根拠: 泳ぎを教えたのは older brother（兄）\n×ひっかけ: mother や teacher は本文にない\n→結論。taught（教えた）の主語を探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_053',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nThe town of Greenfield has a special festival every autumn. People make big lanterns from paper and carry them through the streets at night. The lanterns are many colors and very beautiful. Visitors come from other cities just to see this festival. It has a history of over 100 years.\n\nQuestion: What do people carry through the streets at the festival?',
    choices: [
      { key: 'A', text: 'Big paper lanterns.' },
      { key: 'B', text: 'Large flags.' },
      { key: 'C', text: 'Colorful umbrellas.' },
      { key: 'D', text: 'Small boats.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「People make big lanterns from paper and carry them through the streets（人々は紙で大きなちょうちんを作り、通りを運ぶ）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: make big lanterns from paper and carry them\n○正解の根拠: 運ぶのは big paper lanterns（紙のちょうちん）\n×ひっかけ: flags や umbrellas は本文にない\n→結論。carry の目的語 them が指す物を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_054',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nAkira\'s family runs a small ramen shop. After school, Akira sometimes helps his parents by washing dishes. Many customers come because the soup is delicious. Akira wants to learn how to make the soup, but his father says the secret is only taught when Akira becomes twenty.\n\nQuestion: When will Akira learn the secret of the soup?',
    choices: [
      { key: 'A', text: 'After he graduates.' },
      { key: 'B', text: 'When he becomes twenty.' },
      { key: 'C', text: 'Next year.' },
      { key: 'D', text: 'When the shop closes.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「the secret is only taught when Akira becomes twenty（秘密はアキラが20歳になったときにだけ教えられる）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: the secret is only taught when Akira becomes twenty\n○正解の根拠: スープの秘密を学ぶのは「20歳になったとき」\n×ひっかけ: graduate や next year は本文にない\n→結論。when 〜 の時を表す部分を読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_055',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nMina joined a volunteer group in her city. Every month, the group cleans the river near the station. They pick up cans, bottles, and plastic bags. After cleaning, the river looks much nicer. Mina feels happy because she can help make her town beautiful.\n\nQuestion: What does Mina\'s group do every month?',
    choices: [
      { key: 'A', text: 'They clean the river.' },
      { key: 'B', text: 'They plant trees.' },
      { key: 'C', text: 'They teach children.' },
      { key: 'D', text: 'They sell flowers.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「Every month, the group cleans the river near the station（毎月、グループは駅の近くの川を掃除する）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: Every month, the group cleans the river\n○正解の根拠: 毎月の活動は「川の掃除」\n×ひっかけ: plant trees や teach children は本文にない\n→結論。Every month の文で定期的な活動を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_056',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nHiro likes taking photos. He always carries a small camera. Last month, he took a photo of a bird flying over a lake. The photo was so beautiful that his teacher put it on the wall of the classroom. Now Hiro wants to enter a photo contest next year.\n\nQuestion: What did Hiro\'s teacher do with his photo?',
    choices: [
      { key: 'A', text: 'She sold it.' },
      { key: 'B', text: 'She kept it in her desk.' },
      { key: 'C', text: 'She sent it to his parents.' },
      { key: 'D', text: 'She put it on the classroom wall.' },
    ],
    correctKey: 'D',
    explanation:
      '本文に「his teacher put it on the wall of the classroom（先生がそれを教室の壁に貼った）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: his teacher put it on the wall of the classroom\n○正解の根拠: 先生がしたことは「写真を教室の壁に貼る」\n×ひっかけ: sold や sent は本文にない\n→結論。put it on 〜 で「どこに置いた／貼ったか」がわかる。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_057',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nJenny is from Canada, but she is studying in Japan now. She lives with a host family. At first, using chopsticks was very difficult for her. Her host mother taught her how to use them. Now Jenny can eat rice and even small beans with chopsticks very well.\n\nQuestion: What was difficult for Jenny at first?',
    choices: [
      { key: 'A', text: 'Speaking Japanese.' },
      { key: 'B', text: 'Using chopsticks.' },
      { key: 'C', text: 'Riding the train.' },
      { key: 'D', text: 'Making friends.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「At first, using chopsticks was very difficult for her（最初、箸を使うのは彼女にとってとても難しかった）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: At first, using chopsticks was very difficult for her\n○正解の根拠: 最初に難しかったのは「箸を使うこと」\n×ひっかけ: Japanese や train は本文にない\n→結論。At first ... difficult の文で困難だったことを読む。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_058',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nThe city built a new library last year. It is bigger than the old one and has a special room for children. On weekends, volunteers read stories to young children there. Many families visit the library, and the children\'s room is always full of happy voices.\n\nQuestion: What is special about the new library?',
    choices: [
      { key: 'A', text: 'It has a swimming pool.' },
      { key: 'B', text: 'It has a coffee shop.' },
      { key: 'C', text: 'It is open all night.' },
      { key: 'D', text: 'It has a special room for children.' },
    ],
    correctKey: 'D',
    explanation:
      '本文に「has a special room for children（子ども用の特別な部屋がある）」とあります。週末にはボランティアが読み聞かせをします。\n【図解】読み取りのポイント\n★本文の該当箇所: has a special room for children\n○正解の根拠: 新しい図書館の特徴は「子ども用の部屋」\n×ひっかけ: swimming pool や coffee shop は本文にない\n→結論。special のあとにある特徴を探す。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_059',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nTaro likes insects very much. He often goes to the forest to look for them. One summer day, he found a rare beetle and kept it in a box. He watched it every day and wrote notes about what it ate. Later, he made a report and shared it with his class.\n\nQuestion: What did Taro do with the rare beetle?',
    choices: [
      { key: 'A', text: 'He sold it to a shop.' },
      { key: 'B', text: 'He gave it to his friend.' },
      { key: 'C', text: 'He watched it and wrote notes.' },
      { key: 'D', text: 'He let it go at once.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「He watched it every day and wrote notes about what it ate（彼は毎日それを観察し、何を食べるか記録をとった）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: He watched it every day and wrote notes\n○正解の根拠: カブトムシにしたことは「観察して記録をとる」\n×ひっかけ: sold や gave は本文にない\n→結論。動詞（watched, wrote）で行動を確認する。',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea2_060',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nMs. Kato is a doctor at a small hospital in the mountains. There are not many doctors there, so she is very busy. But she loves her job because she can help the people in her town. Many people know her well and always say hello when they see her.\n\nQuestion: Why does Ms. Kato love her job?',
    choices: [
      { key: 'A', text: 'Because she earns a lot of money.' },
      { key: 'B', text: 'Because she can help the people in her town.' },
      { key: 'C', text: 'Because the hospital is very big.' },
      { key: 'D', text: 'Because she has a lot of free time.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「she loves her job because she can help the people in her town（町の人々を助けられるので仕事が好き）」とあります。\n【図解】読み取りのポイント\n★本文の該当箇所: she loves her job because she can help the people in her town\n○正解の根拠: 仕事が好きな理由は「町の人を助けられる」\n×ひっかけ: money や free time は本文にない（むしろ very busy）\n→結論。loves ... because のあとに理由がある。',
    difficulty: 'standard',
  },
];
