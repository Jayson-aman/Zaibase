import { EikenQuestion } from './eiken_questions';

export const eikenQuestions3kyuReadingX3: EikenQuestion[] = [
  // ── NOTICES / 掲示・お知らせ (001-020) ─────────────────────────────
  {
    id: 'eiken_3kyu_rea3_001',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nWEEKEND COOKING CLASS\nLearn to make Italian food!\nDate: Sunday, June 7\nTime: 1:00 p.m. - 3:00 p.m.\nPlace: City Kitchen Room\nCost: 500 yen (You must bring an apron.)\nPlease sign up at the front desk by June 5.\n\nQuestion: What must people bring to the class?',
    choices: [
      { key: 'A', text: 'Their own food.' },
      { key: 'B', text: 'An apron.' },
      { key: 'C', text: '500 plates.' },
      { key: 'D', text: 'A cookbook.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「You must bring an apron（エプロンを持ってこなければならない）」とあります。must bring ~（~を持参しなければならない）が持ち物を表します。500 yenは参加費で持ち物ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: You must bring an apron.\n○正解の根拠: 持ち物＝an apron\n×ひっかけ: 500 yenは参加費で持ち物ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_002',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nWEEKEND COOKING CLASS\nLearn to make Italian food!\nDate: Sunday, June 7\nTime: 1:00 p.m. - 3:00 p.m.\nPlace: City Kitchen Room\nCost: 500 yen (You must bring an apron.)\nPlease sign up at the front desk by June 5.\n\nQuestion: What should people do by June 5?',
    choices: [
      { key: 'A', text: 'Pay 500 yen online.' },
      { key: 'B', text: 'Cook Italian food at home.' },
      { key: 'C', text: 'Sign up at the front desk.' },
      { key: 'D', text: 'Bring their friends.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Please sign up at the front desk by June 5（6月5日までに受付で申し込んでください）」とあります。sign up（申し込む）、by ~（~までに）が期限を表します。オンライン支払いや自宅料理の指示はありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Please sign up at the front desk by June 5.\n○正解の根拠: 6月5日までにすること＝受付で申し込む\n×ひっかけ: オンライン支払いは書かれていない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_003',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nNEW BAKERY OPENING!\nSunny Bread will open on Friday, April 10.\nFrom 8:00 a.m. to 7:00 p.m.\nOn the first three days, all bread is 20% off.\nEvery customer will also get a free cookie.\nWe are next to Green Station.\n\nQuestion: What can customers get for free during the first three days?',
    choices: [
      { key: 'A', text: 'A cup of coffee.' },
      { key: 'B', text: 'A cookie.' },
      { key: 'C', text: 'A bag of flour.' },
      { key: 'D', text: 'A cake.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Every customer will also get a free cookie（すべてのお客さんが無料のクッキーをもらえる）」とあります。free（無料の）がもらえる物を示します。20% offはパンの割引で、無料の物ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Every customer will also get a free cookie.\n○正解の根拠: 無料でもらえる物＝a cookie\n×ひっかけ: 20% offは割引で無料ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_004',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nNEW BAKERY OPENING!\nSunny Bread will open on Friday, April 10.\nFrom 8:00 a.m. to 7:00 p.m.\nOn the first three days, all bread is 20% off.\nEvery customer will also get a free cookie.\nWe are next to Green Station.\n\nQuestion: Where is Sunny Bread?',
    choices: [
      { key: 'A', text: 'Inside Green Station.' },
      { key: 'B', text: 'In front of a school.' },
      { key: 'C', text: 'Next to Green Station.' },
      { key: 'D', text: 'Near a park.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「We are next to Green Station（グリーン駅の隣にあります）」とあります。next to ~（~の隣）が場所を表します。駅の中や学校の前とは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: We are next to Green Station.\n○正解の根拠: 場所＝駅の隣\n×ひっかけ: inside（駅の中）ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_005',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nMUSEUM NIGHT TOUR\nSaturday, October 24\nThe science museum will stay open until 9:00 p.m.\nA special tour of the space room starts at 7:30 p.m.\nOnly 20 people can join the tour.\nTickets are 300 yen and can be bought at the door.\n\nQuestion: What time does the special tour start?',
    choices: [
      { key: 'A', text: 'At 7:30 p.m.' },
      { key: 'B', text: 'At 9:00 p.m.' },
      { key: 'C', text: 'At 6:00 p.m.' },
      { key: 'D', text: 'At 8:00 p.m.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「A special tour of the space room starts at 7:30 p.m.（宇宙の部屋の特別ツアーは午後7時30分に始まる）」とあります。9:00 p.m.は博物館が閉まる時刻で、ツアーの開始時刻ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: A special tour ... starts at 7:30 p.m.\n○正解の根拠: ツアー開始＝7:30 p.m.\n×ひっかけ: 9:00 p.m.は閉館時刻\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_006',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nMUSEUM NIGHT TOUR\nSaturday, October 24\nThe science museum will stay open until 9:00 p.m.\nA special tour of the space room starts at 7:30 p.m.\nOnly 20 people can join the tour.\nTickets are 300 yen and can be bought at the door.\n\nQuestion: How many people can join the tour?',
    choices: [
      { key: 'A', text: 'Up to 30 people.' },
      { key: 'B', text: 'Up to 20 people.' },
      { key: 'C', text: 'Up to 24 people.' },
      { key: 'D', text: 'Any number of people.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Only 20 people can join the tour（20人だけがツアーに参加できる）」とあります。Only 20 people（20人だけ）が人数の上限です。24はカレンダーの日付で人数ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Only 20 people can join the tour.\n○正解の根拠: 参加人数＝20人まで\n×ひっかけ: 24はOctober 24の日付\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_007',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nTO ALL STUDENTS\nThe school gym will be cleaned next week.\nYou cannot use the gym from Monday to Wednesday.\nP.E. classes will be held in the school yard.\nThe gym will open again on Thursday.\nSorry for the trouble.\n\nQuestion: Where will P.E. classes be held while the gym is closed?',
    choices: [
      { key: 'A', text: 'In the classroom.' },
      { key: 'B', text: 'In the school yard.' },
      { key: 'C', text: 'At the city gym.' },
      { key: 'D', text: 'In the library.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「P.E. classes will be held in the school yard（体育の授業は校庭で行われる）」とあります。be held（行われる）と場所を結びつけます。教室や図書館とは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: P.E. classes will be held in the school yard.\n○正解の根拠: 体育の場所＝校庭\n×ひっかけ: 教室・図書館は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_008',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nTO ALL STUDENTS\nThe school gym will be cleaned next week.\nYou cannot use the gym from Monday to Wednesday.\nP.E. classes will be held in the school yard.\nThe gym will open again on Thursday.\nSorry for the trouble.\n\nQuestion: When can students use the gym again?',
    choices: [
      { key: 'A', text: 'On Monday.' },
      { key: 'B', text: 'On Tuesday.' },
      { key: 'C', text: 'On Thursday.' },
      { key: 'D', text: 'On Friday.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「The gym will open again on Thursday（体育館は木曜日に再び開く）」とあります。open again（再び開く）が使える日を示します。月曜から水曜は使えません。\n【図解】読み取りのポイント\n★本文の該当箇所: The gym will open again on Thursday.\n○正解の根拠: 再び使える日＝Thursday\n×ひっかけ: Monday〜Wednesdayは使えない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_009',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nGUITAR CLUB WANTS YOU!\nDo you like music? Come and join us!\nWe practice every Tuesday and Friday after school.\nYou do not need your own guitar. We will lend you one.\nCome to Music Room 2 to watch us first.\n\nQuestion: What does the notice say about guitars?',
    choices: [
      { key: 'A', text: 'Students must buy a new guitar.' },
      { key: 'B', text: 'The club will lend a guitar to students.' },
      { key: 'C', text: 'Students must bring their own guitar.' },
      { key: 'D', text: 'The club sells old guitars.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「You do not need your own guitar. We will lend you one（自分のギターは必要ない。私たちが貸します）」とあります。lend（貸す）がポイントです。買う・持ってくる必要はありません。\n【図解】読み取りのポイント\n★本文の該当箇所: We will lend you one.\n○正解の根拠: クラブがギターを貸す\n×ひっかけ: 「buy」「bring your own」は否定されている\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_010',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nGUITAR CLUB WANTS YOU!\nDo you like music? Come and join us!\nWe practice every Tuesday and Friday after school.\nYou do not need your own guitar. We will lend you one.\nCome to Music Room 2 to watch us first.\n\nQuestion: When does the guitar club practice?',
    choices: [
      { key: 'A', text: 'On Monday and Wednesday.' },
      { key: 'B', text: 'On Tuesday and Friday.' },
      { key: 'C', text: 'Every day after school.' },
      { key: 'D', text: 'Only on weekends.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「We practice every Tuesday and Friday after school（毎週火曜日と金曜日の放課後に練習する）」とあります。曜日をそのまま読み取ります。毎日や週末とは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: We practice every Tuesday and Friday.\n○正解の根拠: 練習日＝火曜と金曜\n×ひっかけ: 「every day」「weekends」は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_011',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nBEACH CLEANING DAY\nLet\'s make our beach clean!\nSunday, August 2, from 8:00 a.m.\nMeet at the North Beach parking lot.\nWe will give you gloves and bags.\nAfter cleaning, everyone can enjoy free watermelon.\n\nQuestion: What will the volunteers receive for cleaning?',
    choices: [
      { key: 'A', text: 'Gloves and bags.' },
      { key: 'B', text: 'Money.' },
      { key: 'C', text: 'A T-shirt.' },
      { key: 'D', text: 'A map of the beach.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「We will give you gloves and bags（手袋と袋をお渡しします）」とあります。give you ~（~を渡す）が配られる物を示します。お金やTシャツは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: We will give you gloves and bags.\n○正解の根拠: 配られる物＝手袋と袋\n×ひっかけ: watermelonは掃除後の楽しみで配布物とは別\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_012',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nBEACH CLEANING DAY\nLet\'s make our beach clean!\nSunday, August 2, from 8:00 a.m.\nMeet at the North Beach parking lot.\nWe will give you gloves and bags.\nAfter cleaning, everyone can enjoy free watermelon.\n\nQuestion: Where should people meet?',
    choices: [
      { key: 'A', text: 'At the station.' },
      { key: 'B', text: 'At the North Beach parking lot.' },
      { key: 'C', text: 'At the city hall.' },
      { key: 'D', text: 'At the school gate.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Meet at the North Beach parking lot（ノースビーチの駐車場に集合してください）」とあります。Meet at ~（~に集合）が集合場所です。駅や市役所とは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: Meet at the North Beach parking lot.\n○正解の根拠: 集合場所＝ノースビーチの駐車場\n×ひっかけ: 駅・市役所は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_013',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSPRING FLOWER FESTIVAL\nCentral Park\nApril 18 and 19\nSee more than 100 kinds of flowers!\nThere will be a flower photo contest.\nSend your best photo to the park office by April 25.\nThe winner will get a camera.\n\nQuestion: What will the winner of the photo contest get?',
    choices: [
      { key: 'A', text: 'Free flowers.' },
      { key: 'B', text: 'A camera.' },
      { key: 'C', text: 'A ticket to the park.' },
      { key: 'D', text: 'A book about flowers.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The winner will get a camera（優勝者はカメラをもらえる）」とあります。winner（優勝者）がもらえる物を読み取ります。花や本ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: The winner will get a camera.\n○正解の根拠: 賞品＝カメラ\n×ひっかけ: 花や本は賞品ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_014',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSPRING FLOWER FESTIVAL\nCentral Park\nApril 18 and 19\nSee more than 100 kinds of flowers!\nThere will be a flower photo contest.\nSend your best photo to the park office by April 25.\nThe winner will get a camera.\n\nQuestion: By when must people send their photos?',
    choices: [
      { key: 'A', text: 'By April 18.' },
      { key: 'B', text: 'By April 19.' },
      { key: 'C', text: 'By April 25.' },
      { key: 'D', text: 'By May 1.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Send your best photo to the park office by April 25（4月25日までに一番良い写真を公園事務所に送ってください）」とあります。by April 25が締め切りです。18日と19日は祭りの開催日です。\n【図解】読み取りのポイント\n★本文の該当箇所: Send your best photo ... by April 25.\n○正解の根拠: 締め切り＝4月25日\n×ひっかけ: 18・19日は祭りの日で締め切りではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_015',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nLIBRARY NEWS\nStarting in May, the library will be open one hour longer.\nThe new closing time will be 8:00 p.m. on weekdays.\nOn weekends, the library will still close at 5:00 p.m.\nYou can now borrow up to ten books at a time.\n\nQuestion: What is the new closing time on weekdays?',
    choices: [
      { key: 'A', text: '5:00 p.m.' },
      { key: 'B', text: '7:00 p.m.' },
      { key: 'C', text: '8:00 p.m.' },
      { key: 'D', text: '9:00 p.m.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「The new closing time will be 8:00 p.m. on weekdays（平日の新しい閉館時刻は午後8時になる）」とあります。5:00 p.m.は週末の閉館時刻です。平日と週末を読み分けましょう。\n【図解】読み取りのポイント\n★本文の該当箇所: The new closing time will be 8:00 p.m. on weekdays.\n○正解の根拠: 平日の閉館＝8:00 p.m.\n×ひっかけ: 5:00 p.m.は週末の閉館時刻\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_016',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nLIBRARY NEWS\nStarting in May, the library will be open one hour longer.\nThe new closing time will be 8:00 p.m. on weekdays.\nOn weekends, the library will still close at 5:00 p.m.\nYou can now borrow up to ten books at a time.\n\nQuestion: How many books can people borrow at one time now?',
    choices: [
      { key: 'A', text: 'Up to five books.' },
      { key: 'B', text: 'Up to eight books.' },
      { key: 'C', text: 'Up to ten books.' },
      { key: 'D', text: 'Up to twenty books.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「You can now borrow up to ten books at a time（一度に10冊まで借りられるようになった）」とあります。up to ten（10冊まで）が上限です。ほかの数字は書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: You can now borrow up to ten books at a time.\n○正解の根拠: 貸出上限＝10冊\n×ひっかけ: 5・8・20は書かれていない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_017',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSCHOOL BUS CHANGE\nFrom next Monday, the morning bus will leave five minutes earlier.\nThe new time is 7:45 a.m., not 7:50 a.m.\nPlease come to the bus stop by 7:40 a.m.\nThe afternoon bus time will not change.\n\nQuestion: What is the new time for the morning bus?',
    choices: [
      { key: 'A', text: '7:40 a.m.' },
      { key: 'B', text: '7:45 a.m.' },
      { key: 'C', text: '7:50 a.m.' },
      { key: 'D', text: '8:00 a.m.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The new time is 7:45 a.m., not 7:50 a.m.（新しい時刻は7時50分ではなく7時45分）」とあります。7:40は集合してほしい時刻、7:50は古い時刻です。\n【図解】読み取りのポイント\n★本文の該当箇所: The new time is 7:45 a.m.\n○正解の根拠: 新しいバスの時刻＝7:45\n×ひっかけ: 7:40は集合時刻、7:50は古い時刻\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_018',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSCHOOL BUS CHANGE\nFrom next Monday, the morning bus will leave five minutes earlier.\nThe new time is 7:45 a.m., not 7:50 a.m.\nPlease come to the bus stop by 7:40 a.m.\nThe afternoon bus time will not change.\n\nQuestion: What does the notice say about the afternoon bus?',
    choices: [
      { key: 'A', text: 'It will leave earlier.' },
      { key: 'B', text: 'It will leave later.' },
      { key: 'C', text: 'Its time will not change.' },
      { key: 'D', text: 'It will stop running.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「The afternoon bus time will not change（午後のバスの時刻は変わらない）」とあります。not change（変わらない）がポイントです。早くなる・遅くなるとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: The afternoon bus time will not change.\n○正解の根拠: 午後のバス＝時刻は変わらない\n×ひっかけ: 変更されるのは朝のバスだけ\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_019',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nZOO NEWS: BABY ELEPHANT\nA baby elephant was born last month.\nYou can see it in the Elephant House every day.\nThe best time to watch is 11:00 a.m., when it drinks milk.\nPlease do not give any food to the baby.\n\nQuestion: What is the best time to watch the baby elephant?',
    choices: [
      { key: 'A', text: 'At 9:00 a.m.' },
      { key: 'B', text: 'At 11:00 a.m.' },
      { key: 'C', text: 'At 1:00 p.m.' },
      { key: 'D', text: 'At 3:00 p.m.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The best time to watch is 11:00 a.m., when it drinks milk（見るのに一番良い時間はミルクを飲む午前11時）」とあります。The best time（一番良い時間）が答えです。ほかの時刻は書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: The best time to watch is 11:00 a.m.\n○正解の根拠: 一番良い時間＝11:00 a.m.\n×ひっかけ: 他の時刻は本文にない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_020',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nZOO NEWS: BABY ELEPHANT\nA baby elephant was born last month.\nYou can see it in the Elephant House every day.\nThe best time to watch is 11:00 a.m., when it drinks milk.\nPlease do not give any food to the baby.\n\nQuestion: What must visitors not do?',
    choices: [
      { key: 'A', text: 'Take photos of the baby.' },
      { key: 'B', text: 'Give food to the baby.' },
      { key: 'C', text: 'Enter the Elephant House.' },
      { key: 'D', text: 'Watch the baby in the morning.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Please do not give any food to the baby（赤ちゃんに食べ物を与えないでください）」とあります。do not give（与えないで）が禁止事項です。写真や入場は禁止されていません。\n【図解】読み取りのポイント\n★本文の該当箇所: Please do not give any food to the baby.\n○正解の根拠: 禁止＝赤ちゃんに食べ物を与えること\n×ひっかけ: 写真や入場は禁止されていない\n→結論: 答えはB',
    difficulty: 'standard',
  },

  // ── E-MAILS / Eメール (021-040) ─────────────────────────────────
  {
    id: 'eiken_3kyu_rea3_021',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Lucy Baker\nTo: Aunt Karen\nSubject: Thank you\n\nDear Aunt Karen,\nThank you for the birthday present. The red backpack is really nice! I used it for the first time yesterday when I went hiking with my dad. It is big enough to carry my lunch and water. I will visit you next month and show it to you.\nLove,\nLucy\n\nQuestion: What did Aunt Karen give Lucy?",
    choices: [
      { key: 'A', text: 'A red backpack.' },
      { key: 'B', text: 'A pair of hiking boots.' },
      { key: 'C', text: 'A water bottle.' },
      { key: 'D', text: 'A lunch box.' },
    ],
    correctKey: 'A',
    explanation:
      'メールに「Thank you for the birthday present. The red backpack is really nice!（誕生日プレゼントをありがとう。赤いリュックはとても素敵）」とあります。プレゼントは赤いリュックです。水筒や弁当箱ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: The red backpack is really nice!\n○正解の根拠: もらったプレゼント＝赤いリュック\n×ひっかけ: 水や弁当はリュックに入れる物\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_022',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Lucy Baker\nTo: Aunt Karen\nSubject: Thank you\n\nDear Aunt Karen,\nThank you for the birthday present. The red backpack is really nice! I used it for the first time yesterday when I went hiking with my dad. It is big enough to carry my lunch and water. I will visit you next month and show it to you.\nLove,\nLucy\n\nQuestion: What did Lucy do yesterday?",
    choices: [
      { key: 'A', text: 'She bought a new bag.' },
      { key: 'B', text: 'She went hiking with her father.' },
      { key: 'C', text: 'She visited her aunt.' },
      { key: 'D', text: 'She had a birthday party.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I used it for the first time yesterday when I went hiking with my dad（昨日、父とハイキングに行ったときに初めて使った）」とあります。昨日したことはハイキングです。おばを訪ねるのは来月です。\n【図解】読み取りのポイント\n★本文の該当箇所: yesterday when I went hiking with my dad\n○正解の根拠: 昨日＝父とハイキング\n×ひっかけ: おばを訪ねるのは来月\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_023',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Tom Wilson\nTo: Mr. Green\nSubject: Math homework\n\nDear Mr. Green,\nI am sorry, but I do not understand question 5 on page 20. I tried it many times, but my answer is always different from the one in the book. Could you please explain it to me before class tomorrow? I can come to the teachers' room at 8:15 a.m.\nThank you,\nTom\n\nQuestion: Why is Tom writing to Mr. Green?",
    choices: [
      { key: 'A', text: 'He wants to change his class.' },
      { key: 'B', text: 'He cannot understand a math question.' },
      { key: 'C', text: 'He lost his textbook.' },
      { key: 'D', text: 'He will be late for school.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I do not understand question 5 on page 20（20ページの5番の問題が分からない）」とあります。数学の問題が分からないので説明を頼んでいます。教科書をなくした話や遅刻の話ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: I do not understand question 5 on page 20.\n○正解の根拠: メールの目的＝数学の問題が分からない\n×ひっかけ: 教科書紛失や遅刻は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_024',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Tom Wilson\nTo: Mr. Green\nSubject: Math homework\n\nDear Mr. Green,\nI am sorry, but I do not understand question 5 on page 20. I tried it many times, but my answer is always different from the one in the book. Could you please explain it to me before class tomorrow? I can come to the teachers' room at 8:15 a.m.\nThank you,\nTom\n\nQuestion: When can Tom come to the teachers' room?",
    choices: [
      { key: 'A', text: 'At 8:15 a.m.' },
      { key: 'B', text: 'At 9:00 a.m.' },
      { key: 'C', text: 'After class.' },
      { key: 'D', text: 'During lunch.' },
    ],
    correctKey: 'A',
    explanation:
      'メールに「I can come to the teachers\' room at 8:15 a.m.（8時15分に職員室へ行ける）」とあります。時刻をそのまま読み取ります。授業後や昼休みとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: I can come to the teachers\' room at 8:15 a.m.\n○正解の根拠: 行ける時刻＝8:15 a.m.\n×ひっかけ: after classやlunchは書かれていない\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_025',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Nina Cook\nTo: Grandma\nSubject: Summer camp\n\nHi Grandma,\nNext week I will go to a summer camp in the mountains for three days. We will climb a mountain, cook curry, and sleep in tents. I am a little scared of sleeping outside, but my friend Mia will be there too. I will call you when I get home.\nNina\n\nQuestion: How long will Nina stay at the camp?",
    choices: [
      { key: 'A', text: 'One day.' },
      { key: 'B', text: 'Two days.' },
      { key: 'C', text: 'Three days.' },
      { key: 'D', text: 'One week.' },
    ],
    correctKey: 'C',
    explanation:
      'メールに「I will go to a summer camp in the mountains for three days（3日間、山のサマーキャンプに行く）」とあります。for three days（3日間）が期間です。next weekはいつ行くかで、期間ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: a summer camp in the mountains for three days\n○正解の根拠: 滞在期間＝3日間\n×ひっかけ: next weekは開始時期で期間ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_026',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Nina Cook\nTo: Grandma\nSubject: Summer camp\n\nHi Grandma,\nNext week I will go to a summer camp in the mountains for three days. We will climb a mountain, cook curry, and sleep in tents. I am a little scared of sleeping outside, but my friend Mia will be there too. I will call you when I get home.\nNina\n\nQuestion: What is Nina a little scared of?",
    choices: [
      { key: 'A', text: 'Climbing a mountain.' },
      { key: 'B', text: 'Cooking curry.' },
      { key: 'C', text: 'Sleeping outside.' },
      { key: 'D', text: 'Meeting new friends.' },
    ],
    correctKey: 'C',
    explanation:
      'メールに「I am a little scared of sleeping outside（外で寝るのが少し怖い）」とあります。be scared of ~（~が怖い）が答えです。山登りやカレー作りは怖いとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: I am a little scared of sleeping outside.\n○正解の根拠: 怖いこと＝外で寝ること\n×ひっかけ: 山登りやカレーは怖いとは書かれていない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_027',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Sam Park\nTo: Kevin Lee\nSubject: Lost umbrella\n\nHi Kevin,\nI think I left my umbrella at your house on Sunday. It is blue and has a white star on it. Could you check for me? If you find it, please bring it to school on Monday. If you can't find it, that's okay. It is an old one.\nSam\n\nQuestion: What color is Sam's umbrella?",
    choices: [
      { key: 'A', text: 'Blue with a white star.' },
      { key: 'B', text: 'White with a blue star.' },
      { key: 'C', text: 'Red with a white star.' },
      { key: 'D', text: 'Black with a blue star.' },
    ],
    correctKey: 'A',
    explanation:
      'メールに「It is blue and has a white star on it（青くて白い星がついている）」とあります。色と模様をそのまま読み取ります。白地に青い星ではなく、青地に白い星です。\n【図解】読み取りのポイント\n★本文の該当箇所: It is blue and has a white star on it.\n○正解の根拠: 傘＝青地に白い星\n×ひっかけ: 色と星の組み合わせを逆にしない\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_028',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Sam Park\nTo: Kevin Lee\nSubject: Lost umbrella\n\nHi Kevin,\nI think I left my umbrella at your house on Sunday. It is blue and has a white star on it. Could you check for me? If you find it, please bring it to school on Monday. If you can't find it, that's okay. It is an old one.\nSam\n\nQuestion: What does Sam ask Kevin to do if he finds the umbrella?",
    choices: [
      { key: 'A', text: 'Throw it away.' },
      { key: 'B', text: 'Bring it to school on Monday.' },
      { key: 'C', text: 'Send it by mail.' },
      { key: 'D', text: 'Keep it at his house.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「If you find it, please bring it to school on Monday（もし見つけたら月曜日に学校へ持ってきて）」とあります。If you find it（見つけたら）の後が頼み事です。捨てる・郵送するとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: please bring it to school on Monday\n○正解の根拠: 頼み事＝月曜に学校へ持ってくる\n×ひっかけ: 捨てる・郵送は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_029',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Emma Scott\nTo: Jack Scott\nSubject: Science project\n\nHi Jack,\nOur science project is due on Friday. We still need to make the poster and buy some paper. Can you buy blue and green paper after school today? I will draw the pictures at home tonight. Let's finish the poster at my house tomorrow afternoon.\nEmma\n\nQuestion: What does Emma ask Jack to buy?",
    choices: [
      { key: 'A', text: 'A poster.' },
      { key: 'B', text: 'Blue and green paper.' },
      { key: 'C', text: 'Some pens.' },
      { key: 'D', text: 'A science book.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「Can you buy blue and green paper after school today?（今日の放課後に青と緑の紙を買ってくれる?）」とあります。buy ~（~を買う）の後の物が答えです。ポスターは作る物で買う物ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Can you buy blue and green paper\n○正解の根拠: 買う物＝青と緑の紙\n×ひっかけ: posterは作る物で買う物ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_030',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Emma Scott\nTo: Jack Scott\nSubject: Science project\n\nHi Jack,\nOur science project is due on Friday. We still need to make the poster and buy some paper. Can you buy blue and green paper after school today? I will draw the pictures at home tonight. Let's finish the poster at my house tomorrow afternoon.\nEmma\n\nQuestion: Where will they finish the poster?",
    choices: [
      { key: 'A', text: 'At school.' },
      { key: 'B', text: "At Jack's house." },
      { key: 'C', text: "At Emma's house." },
      { key: 'D', text: 'At the library.' },
    ],
    correctKey: 'C',
    explanation:
      'メール差出人はEmmaで「Let\'s finish the poster at my house tomorrow afternoon（明日の午後、私の家でポスターを仕上げよう）」とあります。my house＝Emmaの家です。学校や図書館ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: finish the poster at my house\n○正解の根拠: my house＝差出人Emmaの家\n×ひっかけ: Jackの家や学校ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_031',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Coach Adams\nTo: Soccer team members\nSubject: Practice change\n\nHello everyone,\nThe weather report says it will rain hard this Saturday. So we will not practice on the field. Instead, we will meet in the gym at 10:00 a.m. and watch a video of a famous soccer game. Please bring a notebook to write down what you learn.\nCoach Adams\n\nQuestion: Why did the coach change the plan?",
    choices: [
      { key: 'A', text: 'The field is being cleaned.' },
      { key: 'B', text: 'It will rain hard on Saturday.' },
      { key: 'C', text: 'The team has a game.' },
      { key: 'D', text: 'The gym is closed.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「it will rain hard this Saturday. So we will not practice on the field（土曜日は激しく雨が降るので、グラウンドで練習しない）」とあります。So（だから）の前が理由で、雨が原因です。\n【図解】読み取りのポイント\n★本文の該当箇所: it will rain hard this Saturday. So we will not practice\n○正解の根拠: 変更の理由＝激しい雨\n×ひっかけ: 掃除や試合は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_032',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Coach Adams\nTo: Soccer team members\nSubject: Practice change\n\nHello everyone,\nThe weather report says it will rain hard this Saturday. So we will not practice on the field. Instead, we will meet in the gym at 10:00 a.m. and watch a video of a famous soccer game. Please bring a notebook to write down what you learn.\nCoach Adams\n\nQuestion: What should the members bring?",
    choices: [
      { key: 'A', text: 'A soccer ball.' },
      { key: 'B', text: 'A notebook.' },
      { key: 'C', text: 'An umbrella.' },
      { key: 'D', text: 'Their lunch.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「Please bring a notebook to write down what you learn（学んだことを書くためにノートを持ってきて）」とあります。bring ~（~を持ってくる）の後の物が答えです。ボールや傘ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Please bring a notebook\n○正解の根拠: 持ち物＝ノート\n×ひっかけ: ボール・傘は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_033',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Grandpa Joe\nTo: Ben\nSubject: Fishing trip\n\nHi Ben,\nWould you like to go fishing with me next Sunday? We can go to the river near my house. I will get up at 5:00 a.m. because fish are easy to catch early in the morning. Don't worry, you can sleep in the car. I have two fishing rods, so you don't need to bring one.\nGrandpa Joe\n\nQuestion: Why does Grandpa Joe want to leave early in the morning?",
    choices: [
      { key: 'A', text: 'The river is far away.' },
      { key: 'B', text: 'Fish are easy to catch in the morning.' },
      { key: 'C', text: 'The weather is nice in the morning.' },
      { key: 'D', text: 'Ben has school later.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「fish are easy to catch early in the morning（魚は朝早くに釣りやすい）」とあります。becauseの後ろが早起きの理由です。川が遠いや天気の話ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: fish are easy to catch early in the morning\n○正解の根拠: 早起きの理由＝朝は魚が釣りやすい\n×ひっかけ: 距離や天気は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_034',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Grandpa Joe\nTo: Ben\nSubject: Fishing trip\n\nHi Ben,\nWould you like to go fishing with me next Sunday? We can go to the river near my house. I will get up at 5:00 a.m. because fish are easy to catch early in the morning. Don't worry, you can sleep in the car. I have two fishing rods, so you don't need to bring one.\nGrandpa Joe\n\nQuestion: What does Grandpa Joe say about fishing rods?",
    choices: [
      { key: 'A', text: 'Ben must buy a new one.' },
      { key: 'B', text: 'Ben does not need to bring one.' },
      { key: 'C', text: 'They will rent them at the river.' },
      { key: 'D', text: 'Ben should borrow one from a friend.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I have two fishing rods, so you don\'t need to bring one（釣りざおは2本あるから、持ってこなくていい）」とあります。don\'t need to bring（持ってこなくていい）がポイントです。買う・借りるとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: you don\'t need to bring one\n○正解の根拠: 釣りざお＝持ってこなくてよい\n×ひっかけ: 買う・借りるは書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_035',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Mika Tanaka\nTo: Sophie Miller\nSubject: My new town\n\nHi Sophie,\nMy family moved to a new town last week. At first, I was sad because I missed my old friends. But my new neighbor, Ann, is very kind. She goes to the same school as me, and we walk together every morning. Now I feel much better. Please come and visit me during your next holiday!\nMika\n\nQuestion: Why was Mika sad at first?",
    choices: [
      { key: 'A', text: 'Her new house was small.' },
      { key: 'B', text: 'She missed her old friends.' },
      { key: 'C', text: 'She could not find her school.' },
      { key: 'D', text: 'The new town was too cold.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「At first, I was sad because I missed my old friends（最初は昔の友達が恋しくて悲しかった）」とあります。becauseの後ろが理由です。家の大きさや寒さの話ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: I was sad because I missed my old friends\n○正解の根拠: 悲しかった理由＝昔の友達が恋しかった\n×ひっかけ: 家や気候の話ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_036',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Mika Tanaka\nTo: Sophie Miller\nSubject: My new town\n\nHi Sophie,\nMy family moved to a new town last week. At first, I was sad because I missed my old friends. But my new neighbor, Ann, is very kind. She goes to the same school as me, and we walk together every morning. Now I feel much better. Please come and visit me during your next holiday!\nMika\n\nQuestion: Who is Ann?",
    choices: [
      { key: 'A', text: "Mika's sister." },
      { key: 'B', text: "Mika's teacher." },
      { key: 'C', text: "Mika's new neighbor." },
      { key: 'D', text: "Mika's old friend." },
    ],
    correctKey: 'C',
    explanation:
      'メールに「my new neighbor, Ann, is very kind（新しい隣人のアンはとても親切）」とあります。Annは新しい隣人です。姉や先生ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: my new neighbor, Ann, is very kind\n○正解の根拠: Ann＝新しい隣人\n×ひっかけ: 姉や先生ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_037',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Daniel Reed\nTo: Uncle Mark\nSubject: Piano concert\n\nDear Uncle Mark,\nI will play the piano at a concert on Sunday, July 26. It starts at 2:00 p.m. at the City Music Hall. I have been practicing a song by Beethoven for two months. I am a little nervous, but I want you to come and listen. Mom will save a seat for you.\nDaniel\n\nQuestion: What will Daniel do on July 26?",
    choices: [
      { key: 'A', text: 'Play the piano at a concert.' },
      { key: 'B', text: 'Visit his uncle.' },
      { key: 'C', text: 'Buy a new piano.' },
      { key: 'D', text: 'Take a piano lesson.' },
    ],
    correctKey: 'A',
    explanation:
      'メールに「I will play the piano at a concert on Sunday, July 26（7月26日日曜日のコンサートでピアノを弾く）」とあります。7月26日にすることはピアノ演奏です。おじを訪ねるのではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: I will play the piano at a concert on Sunday, July 26\n○正解の根拠: 7月26日＝コンサートでピアノ演奏\n×ひっかけ: おじを訪ねる・ピアノ購入ではない\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_038',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Daniel Reed\nTo: Uncle Mark\nSubject: Piano concert\n\nDear Uncle Mark,\nI will play the piano at a concert on Sunday, July 26. It starts at 2:00 p.m. at the City Music Hall. I have been practicing a song by Beethoven for two months. I am a little nervous, but I want you to come and listen. Mom will save a seat for you.\nDaniel\n\nQuestion: How long has Daniel been practicing the song?",
    choices: [
      { key: 'A', text: 'For two weeks.' },
      { key: 'B', text: 'For two months.' },
      { key: 'C', text: 'For two years.' },
      { key: 'D', text: 'For two days.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I have been practicing a song by Beethoven for two months（2か月間ベートーベンの曲を練習している）」とあります。for two months（2か月間）が期間です。週や年ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: practicing a song by Beethoven for two months\n○正解の根拠: 練習期間＝2か月\n×ひっかけ: weeks・years・daysではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_039',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Ryan Foster\nTo: Grandma Rose\nSubject: My new pet\n\nHi Grandma,\nGuess what! We got a new pet last weekend. It is a small rabbit with white and brown fur. We named him Coco. He likes to eat carrots and jump around the garden. My little sister was afraid of him at first, but now she loves him. Please come and see Coco soon!\nRyan\n\nQuestion: What kind of pet did Ryan's family get?",
    choices: [
      { key: 'A', text: 'A cat.' },
      { key: 'B', text: 'A dog.' },
      { key: 'C', text: 'A rabbit.' },
      { key: 'D', text: 'A bird.' },
    ],
    correctKey: 'C',
    explanation:
      'メールに「It is a small rabbit with white and brown fur（白と茶色の毛の小さなウサギ）」とあります。ペットはウサギです。猫や犬ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: It is a small rabbit\n○正解の根拠: 新しいペット＝ウサギ\n×ひっかけ: 猫・犬・鳥ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_040',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the e-mail and answer the question.\n\nFrom: Ryan Foster\nTo: Grandma Rose\nSubject: My new pet\n\nHi Grandma,\nGuess what! We got a new pet last weekend. It is a small rabbit with white and brown fur. We named him Coco. He likes to eat carrots and jump around the garden. My little sister was afraid of him at first, but now she loves him. Please come and see Coco soon!\nRyan\n\nQuestion: How does Ryan's sister feel about Coco now?",
    choices: [
      { key: 'A', text: 'She is still afraid of him.' },
      { key: 'B', text: 'She loves him.' },
      { key: 'C', text: 'She does not like him.' },
      { key: 'D', text: 'She wants to give him away.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「My little sister was afraid of him at first, but now she loves him（妹は最初は怖がっていたが、今は大好き）」とあります。but now（でも今は）の後が現在の気持ちで、大好きです。\n【図解】読み取りのポイント\n★本文の該当箇所: but now she loves him\n○正解の根拠: 今の気持ち＝大好き\n×ひっかけ: afraidは「最初は」の気持ち\n→結論: 答えはB',
    difficulty: 'standard',
  },

  // ── PASSAGES / 説明文 (041-060) ────────────────────────────────
  {
    id: 'eiken_3kyu_rea3_041',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nKenta is a junior high school student. Last spring, his grandmother gave him some tomato plants. At first, he did not know how to grow them, so he read a book about gardening. He watered the plants every day and put them in a sunny place. In summer, he got many red tomatoes. He was very happy and made a salad for his family.\n\nQuestion: Who gave Kenta the tomato plants?',
    choices: [
      { key: 'A', text: 'His mother.' },
      { key: 'B', text: 'His teacher.' },
      { key: 'C', text: 'His grandmother.' },
      { key: 'D', text: 'His friend.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「his grandmother gave him some tomato plants（祖母がトマトの苗をくれた）」とあります。苗をくれたのは祖母です。母や先生ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: his grandmother gave him some tomato plants\n○正解の根拠: 苗をくれた人＝祖母\n×ひっかけ: 母・先生・友達ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_042',
    level: '3kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nKenta is a junior high school student. Last spring, his grandmother gave him some tomato plants. At first, he did not know how to grow them, so he read a book about gardening. He watered the plants every day and put them in a sunny place. In summer, he got many red tomatoes. He was very happy and made a salad for his family.\n\nQuestion: What did Kenta do when he did not know how to grow the plants?',
    choices: [
      { key: 'A', text: 'He asked his grandmother.' },
      { key: 'B', text: 'He read a book about gardening.' },
      { key: 'C', text: 'He searched on the internet.' },
      { key: 'D', text: 'He stopped growing them.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「he did not know how to grow them, so he read a book about gardening（育て方が分からなかったので、園芸の本を読んだ）」とあります。soの後ろがした行動です。祖母に聞いたやネット検索とは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: so he read a book about gardening\n○正解の根拠: 分からないときにしたこと＝本を読んだ\n×ひっかけ: 祖母に聞く・ネット検索は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_043',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nLast summer, Aya visited Australia for two weeks. She stayed with a host family in a small town. Every morning, she helped the family feed their sheep. She was surprised because there were more sheep than people in the town. On the last day, the family took her to a beautiful beach. Aya says she wants to go back someday.\n\nQuestion: What did Aya do every morning in Australia?",
    choices: [
      { key: 'A', text: 'She went to the beach.' },
      { key: 'B', text: 'She helped feed the sheep.' },
      { key: 'C', text: 'She studied English.' },
      { key: 'D', text: 'She cooked breakfast.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Every morning, she helped the family feed their sheep（毎朝、家族が羊にえさをやるのを手伝った）」とあります。Every morning（毎朝）の行動です。ビーチに行ったのは最終日です。\n【図解】読み取りのポイント\n★本文の該当箇所: Every morning, she helped the family feed their sheep\n○正解の根拠: 毎朝の行動＝羊のえさやりの手伝い\n×ひっかけ: ビーチは最終日\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_044',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nLast summer, Aya visited Australia for two weeks. She stayed with a host family in a small town. Every morning, she helped the family feed their sheep. She was surprised because there were more sheep than people in the town. On the last day, the family took her to a beautiful beach. Aya says she wants to go back someday.\n\nQuestion: Why was Aya surprised?",
    choices: [
      { key: 'A', text: 'The town was very big.' },
      { key: 'B', text: 'There were more sheep than people.' },
      { key: 'C', text: 'The beach was very cold.' },
      { key: 'D', text: 'The family had many children.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「She was surprised because there were more sheep than people in the town（町には人より羊のほうが多くて驚いた）」とあります。becauseの後ろが驚いた理由です。町が大きいやビーチの話ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: there were more sheep than people in the town\n○正解の根拠: 驚いた理由＝人より羊が多い\n×ひっかけ: 町の大きさやビーチではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_045',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nEvery year in July, the small town of Riverdale holds a lantern festival. Long ago, people made paper lanterns and put them on the river to remember old family members. Today, thousands of people come to watch the lanterns float on the water at night. Many food stands are also open. The festival has become famous all over the country.\n\nQuestion: When is the lantern festival held?",
    choices: [
      { key: 'A', text: 'In May.' },
      { key: 'B', text: 'In July.' },
      { key: 'C', text: 'In September.' },
      { key: 'D', text: 'In December.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Every year in July, the small town of Riverdale holds a lantern festival（毎年7月にリバーデールでランタン祭りが開かれる）」とあります。in July（7月に）が開催時期です。他の月ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Every year in July ... holds a lantern festival\n○正解の根拠: 開催時期＝7月\n×ひっかけ: 他の月は書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_046',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nEvery year in July, the small town of Riverdale holds a lantern festival. Long ago, people made paper lanterns and put them on the river to remember old family members. Today, thousands of people come to watch the lanterns float on the water at night. Many food stands are also open. The festival has become famous all over the country.\n\nQuestion: Why did people long ago put lanterns on the river?",
    choices: [
      { key: 'A', text: 'To catch fish at night.' },
      { key: 'B', text: 'To sell them to visitors.' },
      { key: 'C', text: 'To remember old family members.' },
      { key: 'D', text: 'To light the way home.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「people made paper lanterns and put them on the river to remember old family members（亡くなった家族を思い出すために川にランタンを流した）」とあります。to remember ~（~を思い出すために）が目的です。魚を捕るためではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: to remember old family members\n○正解の根拠: 昔の目的＝亡くなった家族をしのぶため\n×ひっかけ: 魚捕り・販売ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_047',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nMs. Carter is an animal doctor. When she was a child, she found a bird with a broken wing in her garden. She took care of it until it could fly again. That experience made her want to help animals. She studied hard for many years and became a vet. Now she helps sick dogs and cats every day at her small hospital.\n\nQuestion: What did Ms. Carter find in her garden as a child?",
    choices: [
      { key: 'A', text: 'A cat.' },
      { key: 'B', text: 'A bird with a broken wing.' },
      { key: 'C', text: 'A small dog.' },
      { key: 'D', text: 'A rabbit.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「she found a bird with a broken wing in her garden（庭で羽の折れた鳥を見つけた）」とあります。子どものときに見つけたのは鳥です。猫や犬ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: she found a bird with a broken wing\n○正解の根拠: 見つけた動物＝羽の折れた鳥\n×ひっかけ: 猫・犬・ウサギではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_048',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nMs. Carter is an animal doctor. When she was a child, she found a bird with a broken wing in her garden. She took care of it until it could fly again. That experience made her want to help animals. She studied hard for many years and became a vet. Now she helps sick dogs and cats every day at her small hospital.\n\nQuestion: What made Ms. Carter want to help animals?",
    choices: [
      { key: 'A', text: 'A TV show about animals.' },
      { key: 'B', text: 'Her parents\' advice.' },
      { key: 'C', text: 'Taking care of the bird.' },
      { key: 'D', text: 'A book about doctors.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「She took care of it until it could fly again. That experience made her want to help animals（鳥の世話をした。その経験が動物を助けたい気持ちにさせた）」とあります。That experience＝鳥の世話です。テレビや本ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: That experience made her want to help animals\n○正解の根拠: きっかけ＝鳥の世話の経験\n×ひっかけ: テレビ・本・両親の助言ではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_049',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nLast month, Takumi's class went to a farm to learn about food. The farmer showed them how to milk a cow. It was harder than Takumi thought. After that, they picked strawberries and ate them. The strawberries were sweeter than the ones at the store. Takumi learned that farmers work very hard to grow good food.\n\nQuestion: What did the farmer show the students how to do?",
    choices: [
      { key: 'A', text: 'How to plant rice.' },
      { key: 'B', text: 'How to milk a cow.' },
      { key: 'C', text: 'How to feed chickens.' },
      { key: 'D', text: 'How to drive a tractor.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「The farmer showed them how to milk a cow（農家の人が牛の乳のしぼり方を見せてくれた）」とあります。how to milk a cow（牛の乳しぼり）が答えです。米や鶏の話ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: The farmer showed them how to milk a cow\n○正解の根拠: 教わったこと＝牛の乳しぼり\n×ひっかけ: 米・鶏・トラクターではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_050',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nLast month, Takumi's class went to a farm to learn about food. The farmer showed them how to milk a cow. It was harder than Takumi thought. After that, they picked strawberries and ate them. The strawberries were sweeter than the ones at the store. Takumi learned that farmers work very hard to grow good food.\n\nQuestion: What did Takumi think about the strawberries?",
    choices: [
      { key: 'A', text: 'They were too small.' },
      { key: 'B', text: 'They were sweeter than store ones.' },
      { key: 'C', text: 'They were not fresh.' },
      { key: 'D', text: 'They were expensive.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「The strawberries were sweeter than the ones at the store（イチゴは店のものより甘かった）」とあります。sweeter than ~（~より甘い）が感想です。小さい・高いとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: The strawberries were sweeter than the ones at the store\n○正解の根拠: イチゴの感想＝店のより甘い\n×ひっかけ: 小さい・高いは書かれていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_051',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nA new student named Leo came to Yuki's class from Canada. On his first day, he could not speak much Japanese, so he looked nervous. Yuki wanted to help him, so she talked to him in English. They found out that they both like soccer. After school, they played soccer together. Now Leo and Yuki are good friends.\n\nQuestion: Where did Leo come from?",
    choices: [
      { key: 'A', text: 'America.' },
      { key: 'B', text: 'Australia.' },
      { key: 'C', text: 'Canada.' },
      { key: 'D', text: 'England.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「A new student named Leo came to Yuki\'s class from Canada（レオという新入生がカナダからユキのクラスに来た）」とあります。from Canada（カナダから）が出身地です。アメリカやイギリスではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: came to Yuki\'s class from Canada\n○正解の根拠: 出身＝カナダ\n×ひっかけ: アメリカ・オーストラリアではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_052',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nA new student named Leo came to Yuki's class from Canada. On his first day, he could not speak much Japanese, so he looked nervous. Yuki wanted to help him, so she talked to him in English. They found out that they both like soccer. After school, they played soccer together. Now Leo and Yuki are good friends.\n\nQuestion: What do Leo and Yuki both like?",
    choices: [
      { key: 'A', text: 'Music.' },
      { key: 'B', text: 'Soccer.' },
      { key: 'C', text: 'Reading.' },
      { key: 'D', text: 'Cooking.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「They found out that they both like soccer（二人ともサッカーが好きだと分かった）」とあります。both like soccer（二人ともサッカーが好き）が共通点です。音楽や料理ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: they both like soccer\n○正解の根拠: 共通の好きなもの＝サッカー\n×ひっかけ: 音楽・読書・料理ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_053',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nHana started learning taiko, a Japanese drum, two years ago. At first, her arms got tired quickly, and she could not keep the beat. But she practiced every weekend. Last week, she played in a big concert in front of many people. Her parents came to watch and were very proud of her. Hana felt happy that she did not give up.\n\nQuestion: What did Hana start learning two years ago?",
    choices: [
      { key: 'A', text: 'The piano.' },
      { key: 'B', text: 'The taiko drum.' },
      { key: 'C', text: 'The guitar.' },
      { key: 'D', text: 'Dancing.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Hana started learning taiko, a Japanese drum, two years ago（ハナは2年前に和太鼓を習い始めた）」とあります。taiko（和太鼓）が答えです。ピアノやギターではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Hana started learning taiko, a Japanese drum\n○正解の根拠: 習い始めたもの＝和太鼓\n×ひっかけ: ピアノ・ギター・ダンスではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_054',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nHana started learning taiko, a Japanese drum, two years ago. At first, her arms got tired quickly, and she could not keep the beat. But she practiced every weekend. Last week, she played in a big concert in front of many people. Her parents came to watch and were very proud of her. Hana felt happy that she did not give up.\n\nQuestion: How did Hana feel after the concert?",
    choices: [
      { key: 'A', text: 'She felt bored.' },
      { key: 'B', text: 'She felt tired and sad.' },
      { key: 'C', text: 'She felt happy that she did not give up.' },
      { key: 'D', text: 'She felt angry with her parents.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「Hana felt happy that she did not give up（あきらめなくてよかったと嬉しく感じた）」とあります。felt happy（嬉しく感じた）が気持ちです。退屈や怒りではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Hana felt happy that she did not give up\n○正解の根拠: 気持ち＝あきらめず嬉しかった\n×ひっかけ: 退屈・悲しい・怒りではない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_055',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nMr. Brown is a bus driver in a small city. He drives the same route every day and knows many of the people who ride his bus. One rainy day, an old woman left her bag on the bus. Mr. Brown kept it safe and gave it back to her the next morning. The woman was very thankful and gave him a box of cookies.\n\nQuestion: What did the old woman leave on the bus?",
    choices: [
      { key: 'A', text: 'Her umbrella.' },
      { key: 'B', text: 'Her bag.' },
      { key: 'C', text: 'Her hat.' },
      { key: 'D', text: 'Her phone.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「an old woman left her bag on the bus（年配の女性がバスにかばんを置き忘れた）」とあります。left her bag（かばんを置き忘れた）が答えです。傘や帽子ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: an old woman left her bag on the bus\n○正解の根拠: 置き忘れた物＝かばん\n×ひっかけ: 傘・帽子・電話ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_056',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nMr. Brown is a bus driver in a small city. He drives the same route every day and knows many of the people who ride his bus. One rainy day, an old woman left her bag on the bus. Mr. Brown kept it safe and gave it back to her the next morning. The woman was very thankful and gave him a box of cookies.\n\nQuestion: What did the woman give Mr. Brown?",
    choices: [
      { key: 'A', text: 'Some money.' },
      { key: 'B', text: 'A box of cookies.' },
      { key: 'C', text: 'A new bag.' },
      { key: 'D', text: 'A letter.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「The woman was very thankful and gave him a box of cookies（女性はとても感謝して、クッキーの箱を渡した）」とあります。gave him a box of cookies（クッキーの箱を渡した）が答えです。お金や手紙ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: gave him a box of cookies\n○正解の根拠: お礼＝クッキーの箱\n×ひっかけ: お金・手紙ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_057',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nSora loves stars. On clear nights, he goes to the roof of his house and looks at the sky through a small telescope. His father gave it to him for his tenth birthday. Sora writes down the names of the stars he finds in a notebook. He wants to be a scientist who studies space when he grows up.\n\nQuestion: How does Sora look at the stars?",
    choices: [
      { key: 'A', text: 'With his eyes only.' },
      { key: 'B', text: 'Through a small telescope.' },
      { key: 'C', text: 'On a computer.' },
      { key: 'D', text: 'At a science museum.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「looks at the sky through a small telescope（小さな望遠鏡で空を見る）」とあります。through a small telescope（望遠鏡で）が方法です。目だけやパソコンではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: looks at the sky through a small telescope\n○正解の根拠: 見る方法＝小さな望遠鏡\n×ひっかけ: 目だけ・パソコンではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_058',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nSora loves stars. On clear nights, he goes to the roof of his house and looks at the sky through a small telescope. His father gave it to him for his tenth birthday. Sora writes down the names of the stars he finds in a notebook. He wants to be a scientist who studies space when he grows up.\n\nQuestion: What does Sora want to be in the future?",
    choices: [
      { key: 'A', text: 'A teacher.' },
      { key: 'B', text: 'A scientist who studies space.' },
      { key: 'C', text: 'A pilot.' },
      { key: 'D', text: 'A writer.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「He wants to be a scientist who studies space when he grows up（大人になったら宇宙を研究する科学者になりたい）」とあります。scientist who studies space（宇宙を研究する科学者）が将来の夢です。先生やパイロットではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: He wants to be a scientist who studies space\n○正解の根拠: 将来の夢＝宇宙を研究する科学者\n×ひっかけ: 先生・パイロット・作家ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_059',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nEmily works at a small flower shop. Every Friday, some flowers become too old to sell. Instead of throwing them away, Emily takes them to a nearby hospital. She gives them to the patients to make their rooms brighter. The patients are always happy to see the flowers. Emily feels good that she can help people in this way.\n\nQuestion: What does Emily do with the old flowers on Fridays?",
    choices: [
      { key: 'A', text: 'She sells them cheaply.' },
      { key: 'B', text: 'She throws them away.' },
      { key: 'C', text: 'She takes them to a hospital.' },
      { key: 'D', text: 'She keeps them at home.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「Instead of throwing them away, Emily takes them to a nearby hospital（捨てる代わりに、近くの病院へ持っていく）」とあります。Instead of throwing them away（捨てる代わりに）がポイントで、病院へ持っていきます。捨てるのではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Emily takes them to a nearby hospital\n○正解の根拠: 古い花＝病院へ持っていく\n×ひっかけ: throw awayはInstead ofで否定\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_3kyu_rea3_060',
    level: '3kyu',
    category: 'reading',
    question:
      "Read the passage and answer the question.\n\nEmily works at a small flower shop. Every Friday, some flowers become too old to sell. Instead of throwing them away, Emily takes them to a nearby hospital. She gives them to the patients to make their rooms brighter. The patients are always happy to see the flowers. Emily feels good that she can help people in this way.\n\nQuestion: Why does Emily give the flowers to the patients?",
    choices: [
      { key: 'A', text: 'To make their rooms brighter.' },
      { key: 'B', text: 'To sell more flowers.' },
      { key: 'C', text: 'To learn their names.' },
      { key: 'D', text: 'To get more money.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「She gives them to the patients to make their rooms brighter（部屋を明るくするために患者に花を渡す）」とあります。to make their rooms brighter（部屋を明るくするために）が目的です。花を売るためやお金のためではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: to make their rooms brighter\n○正解の根拠: 花を渡す目的＝部屋を明るくするため\n×ひっかけ: 販売・お金のためではない\n→結論: 答えはA',
    difficulty: 'standard',
  },
];
