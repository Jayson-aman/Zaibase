import { EikenQuestion } from './eiken_questions';

export const eikenQuestions4kyuReadingX3: EikenQuestion[] = [
  // ── NOTICES / 掲示・お知らせ (001-020) ─────────────────────────────
  {
    id: 'eiken_4kyu_rea3_001',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSCHOOL SWIMMING POOL\nOpen: July 20 - August 25\nTime: 9:00 a.m. - 4:00 p.m.\nThe pool is closed on Mondays.\nPlease bring your own towel.\n\nQuestion: When is the pool closed?',
    choices: [
      { key: 'A', text: 'On Sundays.' },
      { key: 'B', text: 'On Mondays.' },
      { key: 'C', text: 'In the morning.' },
      { key: 'D', text: 'After August 25.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The pool is closed on Mondays（プールは月曜日は閉まっている）」とあります。closed on ~（~曜日は閉館）という表現を読み取りましょう。日曜や午前中に閉まるとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: The pool is closed on Mondays.\n○正解の根拠: 閉まる曜日＝Mondays\n×ひっかけ: Sundaysや午前中は書かれていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_002',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nLIBRARY BOOK SALE\nDate: Saturday, September 5\nPlace: Reading Room\nOld books are only 100 yen each.\nYou can buy up to five books.\n\nQuestion: How many books can one person buy?',
    choices: [
      { key: 'A', text: 'Only one book.' },
      { key: 'B', text: 'Up to three books.' },
      { key: 'C', text: 'Up to five books.' },
      { key: 'D', text: 'Any number of books.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「You can buy up to five books（5冊まで買える）」とあります。up to ~（~まで）は上限を表す表現です。100 yenは1冊の値段で、冊数の答えではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: You can buy up to five books.\n○正解の根拠: 上限＝five books\n×ひっかけ: 100 yenは値段で冊数ではない\n→結論: 答えはC',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_003',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSCIENCE MUSEUM\nSpecial Robot Show\nStart: 2:00 p.m. every day\nThe show is about 40 minutes long.\nChildren under six years old are free.\n\nQuestion: How long is the robot show?',
    choices: [
      { key: 'A', text: 'About 20 minutes.' },
      { key: 'B', text: 'About 40 minutes.' },
      { key: 'C', text: 'About one hour.' },
      { key: 'D', text: 'About two hours.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The show is about 40 minutes long（ショーは約40分間）」とあります。~ minutes long（~分間の長さ）で時間を表します。2:00 p.m.は開始時刻で、長さではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: The show is about 40 minutes long.\n○正解の根拠: 長さ＝40 minutes\n×ひっかけ: 2:00 p.m.は開始時刻\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_004',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nCOOKING CLASS FOR BEGINNERS\nWe will make pizza together!\nDate: October 10, 1:00 p.m.\nBring an apron.\nYou do not need to bring food.\n\nQuestion: What do people need to bring?',
    choices: [
      { key: 'A', text: 'Some food.' },
      { key: 'B', text: 'A pizza.' },
      { key: 'C', text: 'An apron.' },
      { key: 'D', text: 'A knife.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Bring an apron（エプロンを持ってきてください）」とあり、さらに「You do not need to bring food（食べ物は持ってこなくてよい）」とあります。持ち物はエプロンです。\n【図解】読み取りのポイント\n★本文の該当箇所: Bring an apron.\n○正解の根拠: 必要な持ち物＝apron\n×ひっかけ: food は「持ってこなくてよい」\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_005',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nCITY MARATHON\nSunday, November 3\nStart at the City Park at 8:00 a.m.\nIf it rains, the race will be next Sunday.\n\nQuestion: What will happen if it rains?',
    choices: [
      { key: 'A', text: 'The race will start at the park.' },
      { key: 'B', text: 'The race will be next Sunday.' },
      { key: 'C', text: 'The race will stop.' },
      { key: 'D', text: 'The race will start at noon.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「If it rains, the race will be next Sunday（雨なら来週の日曜日になる）」とあります。If it rains（もし雨なら）の後ろに答えがあります。中止や正午開始とは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: If it rains, the race will be next Sunday.\n○正解の根拠: 雨天時＝翌週の日曜\n×ひっかけ: 中止や時間変更は書いていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_006',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nNEW BAKERY OPEN!\nSunny Bread Shop\nOpen from July 1\nWe sell fresh bread every morning.\nThe first 20 people get a free cookie.\n\nQuestion: What do the first 20 people get?',
    choices: [
      { key: 'A', text: 'A free cookie.' },
      { key: 'B', text: 'A free cake.' },
      { key: 'C', text: 'Cheap bread.' },
      { key: 'D', text: 'A cup of coffee.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「The first 20 people get a free cookie（最初の20人は無料のクッキーをもらえる）」とあります。free（無料の）ものはcookieです。ケーキやコーヒーの話はありません。\n【図解】読み取りのポイント\n★本文の該当箇所: The first 20 people get a free cookie.\n○正解の根拠: プレゼント＝free cookie\n×ひっかけ: cakeやcoffeeは書いていない\n→結論: 答えはA',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_007',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nGUITAR LESSONS\nEvery Wednesday evening\nFor students in junior high school\nLessons are 500 yen.\nGuitars are ready, so you do not need one.\n\nQuestion: Who can join these lessons?',
    choices: [
      { key: 'A', text: 'Small children.' },
      { key: 'B', text: 'Junior high school students.' },
      { key: 'C', text: 'College students.' },
      { key: 'D', text: 'Only teachers.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「For students in junior high school（中学生向け）」とあります。For ~（~向け）で対象者がわかります。小さな子どもや大学生、先生だけとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: For students in junior high school\n○正解の根拠: 対象＝junior high school students\n×ひっかけ: 幼児や大学生は対象外\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_008',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nTO ALL STUDENTS\nThe gym floor will be cleaned this weekend.\nYou cannot use the gym on Saturday and Sunday.\nPlease use the gym again from Monday.\n\nQuestion: When can students use the gym again?',
    choices: [
      { key: 'A', text: 'On Saturday.' },
      { key: 'B', text: 'On Sunday.' },
      { key: 'C', text: 'From Monday.' },
      { key: 'D', text: 'Next month.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Please use the gym again from Monday（月曜日から再び体育館を使ってください）」とあります。土日は掃除で使えず、再開は月曜です。again（再び）に注目しましょう。\n【図解】読み取りのポイント\n★本文の該当箇所: use the gym again from Monday\n○正解の根拠: 再開＝Monday\n×ひっかけ: 土日は掃除で使用不可\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_009',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSUMMER CAMP\nDate: August 3 - August 5\nPlace: Green Lake\nWe will fish, cook, and sleep in tents.\nThe bus leaves the school at 7:30 a.m.\n\nQuestion: Where will the students sleep?',
    choices: [
      { key: 'A', text: 'In a hotel.' },
      { key: 'B', text: 'In tents.' },
      { key: 'C', text: 'At school.' },
      { key: 'D', text: 'On the bus.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「sleep in tents（テントで寝る）」とあります。キャンプでの活動は釣り・料理・テント泊です。ホテルや学校で寝るとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: sleep in tents\n○正解の根拠: 寝る場所＝tents\n×ひっかけ: hotelやschoolは書いていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_010',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nFLOWER PARK\nSpring Tulip Festival\nApril 1 - April 30\nMany colors of tulips are in the garden.\nYou can take pictures, but do not pick the flowers.\n\nQuestion: What must visitors NOT do?',
    choices: [
      { key: 'A', text: 'Take pictures.' },
      { key: 'B', text: 'Walk in the garden.' },
      { key: 'C', text: 'Pick the flowers.' },
      { key: 'D', text: 'Look at the tulips.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「do not pick the flowers（花を摘まないでください）」とあります。do not ~（~してはいけない）で禁止事項がわかります。写真を撮ることは許可されています。\n【図解】読み取りのポイント\n★本文の該当箇所: do not pick the flowers\n○正解の根拠: 禁止＝pick the flowers\n×ひっかけ: 写真撮影はOK\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_011',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nENGLISH SPEECH CONTEST\nDate: December 12\nEach speech must be under three minutes.\nWinners will get a book gift card.\nPlease tell Mr. Green if you want to join.\n\nQuestion: Who should students talk to if they want to join?',
    choices: [
      { key: 'A', text: 'Mr. Green.' },
      { key: 'B', text: 'The winners.' },
      { key: 'C', text: 'Their parents.' },
      { key: 'D', text: 'The librarian.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Please tell Mr. Green if you want to join（参加したい人はグリーン先生に伝えてください）」とあります。tell ~（~に伝える）の相手はMr. Greenです。\n【図解】読み取りのポイント\n★本文の該当箇所: Please tell Mr. Green\n○正解の根拠: 申込先＝Mr. Green\n×ひっかけ: winnersは受賞者で申込先ではない\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_012',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nZOO NEWS\nA baby lion was born last week!\nYou can see the baby lion from May 1.\nThe lion house opens at 10:00 a.m.\n\nQuestion: When can people see the baby lion?',
    choices: [
      { key: 'A', text: 'Last week.' },
      { key: 'B', text: 'From May 1.' },
      { key: 'C', text: 'At 9:00 a.m.' },
      { key: 'D', text: 'Next year.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「You can see the baby lion from May 1（5月1日から赤ちゃんライオンを見られる）」とあります。last weekは生まれた時期で、見られる日ではありません。from ~（~から）に注目しましょう。\n【図解】読み取りのポイント\n★本文の該当箇所: see the baby lion from May 1\n○正解の根拠: 観覧開始＝May 1\n×ひっかけ: last weekは誕生した時期\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_013',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSCHOOL FESTIVAL\nOur class will open a coffee shop.\nWe need people to help on the festival day.\nCome to Room 3-B after school on Friday.\n\nQuestion: What will the class do at the festival?',
    choices: [
      { key: 'A', text: 'Sing songs.' },
      { key: 'B', text: 'Open a coffee shop.' },
      { key: 'C', text: 'Sell books.' },
      { key: 'D', text: 'Show a movie.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Our class will open a coffee shop（私たちのクラスは喫茶店を開く）」とあります。文化祭でクラスがすることは喫茶店の出店です。歌や映画の話はありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Our class will open a coffee shop.\n○正解の根拠: 出し物＝coffee shop\n×ひっかけ: 歌や映画は書いていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_014',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nBUS STOP INFORMATION\nThe bus to the airport does not stop here today.\nPlease use the bus stop in front of the station.\nWe are sorry for the trouble.\n\nQuestion: Where should people wait for the airport bus today?',
    choices: [
      { key: 'A', text: 'At this bus stop.' },
      { key: 'B', text: 'At the airport.' },
      { key: 'C', text: 'In front of the station.' },
      { key: 'D', text: 'At the school gate.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Please use the bus stop in front of the station（駅前のバス停を使ってください）」とあります。今日はこのバス停に止まらないため、駅前で待ちます。\n【図解】読み取りのポイント\n★本文の該当箇所: use the bus stop in front of the station\n○正解の根拠: 待つ場所＝駅前\n×ひっかけ: このバス停は本日停車しない\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_015',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSOCCER CLUB MEMBERS\nWe will practice in the morning this week.\nMeet at the sports ground at 7:00 a.m.\nDo not forget to eat breakfast before you come.\n\nQuestion: What should members do before practice?',
    choices: [
      { key: 'A', text: 'Eat breakfast.' },
      { key: 'B', text: 'Buy a new ball.' },
      { key: 'C', text: 'Clean the ground.' },
      { key: 'D', text: 'Call the coach.' },
    ],
    correctKey: 'A',
    explanation:
      '掲示に「Do not forget to eat breakfast before you come（来る前に朝食を食べるのを忘れないで）」とあります。before you come（来る前に）にすることは朝食です。\n【図解】読み取りのポイント\n★本文の該当箇所: eat breakfast before you come\n○正解の根拠: 練習前＝朝食を食べる\n×ひっかけ: ボール購入や掃除は書いていない\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_016',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nMOUNTAIN TRAIN\nThe train to the top runs every 30 minutes.\nThe first train is at 9:00 a.m.\nThe last train down the mountain is at 5:00 p.m.\n\nQuestion: How often does the train run?',
    choices: [
      { key: 'A', text: 'Every 10 minutes.' },
      { key: 'B', text: 'Every 30 minutes.' },
      { key: 'C', text: 'Every hour.' },
      { key: 'D', text: 'Every 5 minutes.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The train to the top runs every 30 minutes（頂上行きの電車は30分ごとに運行）」とあります。every ~（~ごとに）で頻度がわかります。9:00は始発時刻です。\n【図解】読み取りのポイント\n★本文の該当箇所: runs every 30 minutes\n○正解の根拠: 頻度＝30 minutes\n×ひっかけ: 9:00は始発の時刻\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_017',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nLOST AND FOUND\nWe found a black umbrella near the school gate.\nIf it is yours, please come to the teachers’ room.\nBring it home by Friday.\n\nQuestion: What did someone find?',
    choices: [
      { key: 'A', text: 'A black bag.' },
      { key: 'B', text: 'A black umbrella.' },
      { key: 'C', text: 'A red cap.' },
      { key: 'D', text: 'A pair of shoes.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「We found a black umbrella（黒い傘を見つけた）」とあります。found（見つけた）ものは黒い傘です。かばんや帽子ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: We found a black umbrella\n○正解の根拠: 落とし物＝black umbrella\n×ひっかけ: bagやcapは書いていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_018',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nART CLASS TRIP\nWe will visit the city art museum.\nDate: June 15\nMeet at the front door at 8:45 a.m.\nThe bus will leave at 9:00 a.m. Do not be late.\n\nQuestion: What time will the bus leave?',
    choices: [
      { key: 'A', text: 'At 8:45 a.m.' },
      { key: 'B', text: 'At 9:00 a.m.' },
      { key: 'C', text: 'At 9:15 a.m.' },
      { key: 'D', text: 'At 6:15 a.m.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「The bus will leave at 9:00 a.m.（バスは9時に出発する）」とあります。8:45は集合時刻で、出発は9:00です。meet（集合）とleave（出発）の時刻を分けて読みましょう。\n【図解】読み取りのポイント\n★本文の該当箇所: The bus will leave at 9:00 a.m.\n○正解の根拠: 出発＝9:00\n×ひっかけ: 8:45は集合時刻\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_019',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nSUPERMARKET SALE\nWeekend Special!\nApples: 100 yen each\nOranges: 80 yen each\nMilk is 20 percent off on Sunday only.\n\nQuestion: When is milk cheaper?',
    choices: [
      { key: 'A', text: 'On Saturday.' },
      { key: 'B', text: 'On Sunday.' },
      { key: 'C', text: 'Every day.' },
      { key: 'D', text: 'On Monday.' },
    ],
    correctKey: 'B',
    explanation:
      '掲示に「Milk is 20 percent off on Sunday only（牛乳は日曜だけ20%引き）」とあります。on Sunday only（日曜だけ）が牛乳が安くなる日です。りんごやオレンジは値引きの曜日指定がありません。\n【図解】読み取りのポイント\n★本文の該当箇所: Milk is 20 percent off on Sunday only\n○正解の根拠: 牛乳が安い日＝Sunday\n×ひっかけ: Saturdayや毎日ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_020',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the notice and answer the question.\n\nCLEANUP DAY\nLet’s clean the river together!\nDate: Sunday, October 18\nWe will meet at the bridge at 9:00 a.m.\nGloves and bags are ready. Just bring a hat.\n\nQuestion: What should people bring?',
    choices: [
      { key: 'A', text: 'Gloves.' },
      { key: 'B', text: 'Bags.' },
      { key: 'C', text: 'A hat.' },
      { key: 'D', text: 'Lunch.' },
    ],
    correctKey: 'C',
    explanation:
      '掲示に「Gloves and bags are ready. Just bring a hat（手袋と袋は用意してある。帽子だけ持ってきて）」とあります。手袋と袋は準備済みなので、持ち物は帽子です。\n【図解】読み取りのポイント\n★本文の該当箇所: Just bring a hat.\n○正解の根拠: 持ち物＝hat\n×ひっかけ: glovesとbagsは用意済み\n→結論: 答えはC',
    difficulty: 'standard',
  },

  // ── EMAILS / Eメール (021-040) ─────────────────────────────────────
  {
    id: 'eiken_4kyu_rea3_021',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Emily\nTo: Kate\nHi Kate,\nAre you free this Saturday? I want to go to the new ice cream shop near the park. My sister says the chocolate one is really good. Can you come with me?\nEmily\n\nQuestion: What does Emily want to do on Saturday?',
    choices: [
      { key: 'A', text: 'Go to the park to play.' },
      { key: 'B', text: 'Go to a new ice cream shop.' },
      { key: 'C', text: 'Visit her sister.' },
      { key: 'D', text: 'Make chocolate at home.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I want to go to the new ice cream shop near the park（公園の近くの新しいアイスクリーム店に行きたい）」とあります。土曜にしたいことはアイス店に行くことです。\n【図解】読み取りのポイント\n★本文の該当箇所: I want to go to the new ice cream shop\n○正解の根拠: 土曜の予定＝アイス店に行く\n×ひっかけ: sisterは店を勧めた人\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_022',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Dad\nTo: Ken\nKen,\nI will come home late tonight. There is curry in the fridge. Please warm it in the microwave for dinner. Do your homework before you eat.\nDad\n\nQuestion: What should Ken do before dinner?',
    choices: [
      { key: 'A', text: 'Cook curry.' },
      { key: 'B', text: 'Go shopping.' },
      { key: 'C', text: 'Do his homework.' },
      { key: 'D', text: 'Clean the kitchen.' },
    ],
    correctKey: 'C',
    explanation:
      'メールに「Do your homework before you eat（食べる前に宿題をしなさい）」とあります。before you eat（食べる前に）することは宿題です。カレーは温めるだけで作りません。\n【図解】読み取りのポイント\n★本文の該当箇所: Do your homework before you eat.\n○正解の根拠: 夕食前＝宿題\n×ひっかけ: curryは温めるだけ\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_023',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Coach Tom\nTo: Team\nHello everyone,\nOur game on Sunday will start at 1:00 p.m., not 2:00 p.m. Please come to the field by 12:30 p.m. Wear your blue shirts.\nCoach Tom\n\nQuestion: What color shirts should the players wear?',
    choices: [
      { key: 'A', text: 'Red.' },
      { key: 'B', text: 'White.' },
      { key: 'C', text: 'Blue.' },
      { key: 'D', text: 'Green.' },
    ],
    correctKey: 'C',
    explanation:
      'メールに「Wear your blue shirts（青いシャツを着なさい）」とあります。着る色は青です。時刻の変更（1:00開始）にも注意ですが、質問は色についてです。\n【図解】読み取りのポイント\n★本文の該当箇所: Wear your blue shirts.\n○正解の根拠: 服の色＝blue\n×ひっかけ: 時刻の話は色の答えではない\n→結論: 答えはC',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_024',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Grandma\nTo: Lucy\nDear Lucy,\nThank you for the birthday card. It was very pretty. I will visit your house next month. I want to teach you how to make cookies. See you soon.\nGrandma\n\nQuestion: What does Grandma want to teach Lucy?',
    choices: [
      { key: 'A', text: 'How to make cookies.' },
      { key: 'B', text: 'How to draw a card.' },
      { key: 'C', text: 'How to play the piano.' },
      { key: 'D', text: 'How to ride a bike.' },
    ],
    correctKey: 'A',
    explanation:
      'メールに「I want to teach you how to make cookies（クッキーの作り方を教えたい）」とあります。teach ~ how to ...（~に…のやり方を教える）の内容はクッキー作りです。\n【図解】読み取りのポイント\n★本文の該当箇所: teach you how to make cookies\n○正解の根拠: 教える内容＝クッキーの作り方\n×ひっかけ: cardはお礼の対象\n→結論: 答えはA',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_025',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mika\nTo: Beth\nHi Beth,\nI can’t go to school today because I have a cold. Can you tell me our math homework? I don’t want to fall behind. Thank you.\nMika\n\nQuestion: Why can’t Mika go to school?',
    choices: [
      { key: 'A', text: 'She is on a trip.' },
      { key: 'B', text: 'She has a cold.' },
      { key: 'C', text: 'She is too busy.' },
      { key: 'D', text: 'She forgot the way.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I can’t go to school today because I have a cold（かぜをひいたので今日は学校へ行けない）」とあります。because（なぜなら）の後ろに理由があります。\n【図解】読み取りのポイント\n★本文の該当箇所: because I have a cold\n○正解の根拠: 理由＝かぜ\n×ひっかけ: 旅行や忙しさは書いていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_026',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mr. Baker\nTo: Class 2-A\nHello students,\nWe will have a test on Friday. Please study pages 20 to 30 in your textbook. You can bring a dictionary, but you cannot use your phone.\nMr. Baker\n\nQuestion: What can students bring to the test?',
    choices: [
      { key: 'A', text: 'A phone.' },
      { key: 'B', text: 'A dictionary.' },
      { key: 'C', text: 'A camera.' },
      { key: 'D', text: 'A computer.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「You can bring a dictionary, but you cannot use your phone（辞書は持ってきてよいが電話は使えない）」とあります。持ち込めるのは辞書です。\n【図解】読み取りのポイント\n★本文の該当箇所: You can bring a dictionary\n○正解の根拠: 持ち込み可＝dictionary\n×ひっかけ: phoneは使用禁止\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_027',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Sam\nTo: Uncle Joe\nDear Uncle Joe,\nThank you for the soccer ball. I use it every day after school. My friends and I play in the park. I want to be a good player like you.\nSam\n\nQuestion: What did Uncle Joe give Sam?',
    choices: [
      { key: 'A', text: 'A soccer ball.' },
      { key: 'B', text: 'A baseball glove.' },
      { key: 'C', text: 'A pair of shoes.' },
      { key: 'D', text: 'A book.' },
    ],
    correctKey: 'A',
    explanation:
      'メールに「Thank you for the soccer ball（サッカーボールをありがとう）」とあります。Thank you for ~（~をありがとう）でもらった物がわかります。\n【図解】読み取りのポイント\n★本文の該当箇所: Thank you for the soccer ball\n○正解の根拠: もらった物＝soccer ball\n×ひっかけ: gloveやshoesは書いていない\n→結論: 答えはA',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_028',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Nina\nTo: Mom\nHi Mom,\nSoccer practice will finish at 6:00 today, not 5:00. Can you pick me up at the school gate at six? I will wait near the gate.\nNina\n\nQuestion: What time will Nina finish practice today?',
    choices: [
      { key: 'A', text: 'At 5:00.' },
      { key: 'B', text: 'At 6:00.' },
      { key: 'C', text: 'At 7:00.' },
      { key: 'D', text: 'At 4:00.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「Soccer practice will finish at 6:00 today, not 5:00（今日の練習は5時ではなく6時に終わる）」とあります。not 5:00（5時ではなく）に注意し、終了は6時です。\n【図解】読み取りのポイント\n★本文の該当箇所: finish at 6:00 today, not 5:00\n○正解の根拠: 終了＝6:00\n×ひっかけ: 5:00は「~ではない」と否定\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_029',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Paul\nTo: David\nHi David,\nI’m sorry, but I can’t play tennis tomorrow. I have to visit my grandfather in the hospital. How about next Saturday? Please tell me if you are free.\nPaul\n\nQuestion: Why can’t Paul play tennis tomorrow?',
    choices: [
      { key: 'A', text: 'He is sick.' },
      { key: 'B', text: 'He will visit his grandfather.' },
      { key: 'C', text: 'It will rain.' },
      { key: 'D', text: 'He has a lot of homework.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I have to visit my grandfather in the hospital（祖父を病院に見舞わなければならない）」とあります。テニスができない理由は祖父のお見舞いです。\n【図解】読み取りのポイント\n★本文の該当箇所: I have to visit my grandfather in the hospital\n○正解の根拠: 理由＝祖父の見舞い\n×ひっかけ: 病気や雨は書いていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_030',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Aunt Sara\nTo: Mary\nDear Mary,\nI will come to Japan this summer. I want to see Mt. Fuji and eat sushi. Can you show me some good places? I will stay for two weeks.\nAunt Sara\n\nQuestion: How long will Aunt Sara stay in Japan?',
    choices: [
      { key: 'A', text: 'For two days.' },
      { key: 'B', text: 'For one week.' },
      { key: 'C', text: 'For two weeks.' },
      { key: 'D', text: 'For one month.' },
    ],
    correctKey: 'C',
    explanation:
      'メールに「I will stay for two weeks（2週間滞在する）」とあります。for ~（~の間）で期間がわかります。富士山や寿司はしたいことで、期間の答えではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: I will stay for two weeks\n○正解の根拠: 滞在期間＝2週間\n×ひっかけ: Mt. Fujiやsushiはしたいこと\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_031',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Jenny\nTo: Class members\nHi everyone,\nLet’s have a party for Ms. White. It is her last day at our school. Please bring one flower each. We will meet in Room 5 at lunchtime.\nJenny\n\nQuestion: What should each person bring?',
    choices: [
      { key: 'A', text: 'A cake.' },
      { key: 'B', text: 'One flower.' },
      { key: 'C', text: 'A card.' },
      { key: 'D', text: 'Some money.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「Please bring one flower each（一人一輪ずつ花を持ってきて）」とあります。each（それぞれ）が付くので一人一輪です。ケーキやカードではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: bring one flower each\n○正解の根拠: 持ち物＝一輪の花\n×ひっかけ: cakeやcardは書いていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_032',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Ryan\nTo: Mom\nHi Mom,\nI missed the bus, so I will walk home from the station. It takes about 20 minutes. Please don’t worry. I will be home by 5:30.\nRyan\n\nQuestion: How will Ryan get home?',
    choices: [
      { key: 'A', text: 'By bus.' },
      { key: 'B', text: 'By bike.' },
      { key: 'C', text: 'On foot.' },
      { key: 'D', text: 'By taxi.' },
    ],
    correctKey: 'C',
    explanation:
      'メールに「I will walk home from the station（駅から歩いて帰る）」とあります。walk（歩く）＝on footです。バスは乗り遅れた（missed the bus）ので使いません。\n【図解】読み取りのポイント\n★本文の該当箇所: I will walk home from the station\n○正解の根拠: 帰り方＝歩き(on foot)\n×ひっかけ: busは乗り遅れた\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_033',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Lily\nTo: Grandpa\nDear Grandpa,\nOur school has a music concert on May 20. I will play the flute. Can you come and listen? It starts at 3:00 p.m. in the school hall.\nLily\n\nQuestion: What will Lily do at the concert?',
    choices: [
      { key: 'A', text: 'Sing a song.' },
      { key: 'B', text: 'Play the flute.' },
      { key: 'C', text: 'Play the drums.' },
      { key: 'D', text: 'Dance.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I will play the flute（私はフルートを演奏する）」とあります。play the flute（フルートを吹く）がリリーのすることです。歌やダンスではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: I will play the flute\n○正解の根拠: 演奏＝フルート\n×ひっかけ: singやdanceは書いていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_034',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mr. Lee\nTo: Music Club\nHello,\nWe will not use the music room on Thursday. It is used for a meeting. Let’s practice in the gym instead. Meet there at 4:00 p.m.\nMr. Lee\n\nQuestion: Where will the club practice on Thursday?',
    choices: [
      { key: 'A', text: 'In the music room.' },
      { key: 'B', text: 'In the gym.' },
      { key: 'C', text: 'In the library.' },
      { key: 'D', text: 'In the park.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「Let’s practice in the gym instead（代わりに体育館で練習しよう）」とあります。insteadは「代わりに」の意味。木曜は音楽室が会議で使えないため体育館です。\n【図解】読み取りのポイント\n★本文の該当箇所: practice in the gym instead\n○正解の根拠: 練習場所＝gym\n×ひっかけ: music roomは会議で使用中\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_035',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Tom\nTo: Bob\nHi Bob,\nDo you want to see a movie this weekend? There is a new space movie at the mall. I heard it is very exciting. Let’s meet at the station at 10 a.m. on Sunday.\nTom\n\nQuestion: What kind of movie does Tom want to see?',
    choices: [
      { key: 'A', text: 'A space movie.' },
      { key: 'B', text: 'A love movie.' },
      { key: 'C', text: 'A dog movie.' },
      { key: 'D', text: 'A music movie.' },
    ],
    correctKey: 'A',
    explanation:
      'メールに「There is a new space movie at the mall（モールに新しい宇宙映画がある）」とあります。見たいのは宇宙映画です。恋愛や音楽の映画ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: a new space movie at the mall\n○正解の根拠: 映画の種類＝宇宙(space)\n×ひっかけ: loveやmusicは書いていない\n→結論: 答えはA',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_036',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Hana\nTo: Rachel\nHi Rachel,\nI bought two tickets for the dolphin show. It is on Saturday at the sea park. My mother will drive us there. Can you come? Please answer by tonight.\nHana\n\nQuestion: How will they go to the sea park?',
    choices: [
      { key: 'A', text: 'By train.' },
      { key: 'B', text: 'Hana’s mother will drive them.' },
      { key: 'C', text: 'By bike.' },
      { key: 'D', text: 'They will walk.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「My mother will drive us there（母が車で連れて行ってくれる）」とあります。drive（車で送る）が交通手段です。電車や自転車ではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: My mother will drive us there\n○正解の根拠: 交通手段＝母の車\n×ひっかけ: trainやbikeは書いていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_037',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: George\nTo: Mom\nHi Mom,\nI’m at the bookstore now. I found a good English dictionary, but it is 2,000 yen. I only have 1,500 yen. Can I buy it? Please text me back.\nGeorge\n\nQuestion: What is George’s problem?',
    choices: [
      { key: 'A', text: 'He cannot find the bookstore.' },
      { key: 'B', text: 'He does not have enough money.' },
      { key: 'C', text: 'The store is closed.' },
      { key: 'D', text: 'He lost his dictionary.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「it is 2,000 yen. I only have 1,500 yen（2000円だが1500円しか持っていない）」とあります。お金が足りないのが問題です。店が見つからない・閉まっているとは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: it is 2,000 yen. I only have 1,500 yen\n○正解の根拠: 問題＝お金が足りない\n×ひっかけ: 店の場所や閉店は無関係\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_038',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mr. Sato\nTo: Parents\nHello,\nOn Sports Day, please send your child to school by 8:00 a.m. If it rains, we will hold Sports Day next Tuesday. We will send a message in the morning.\nMr. Sato\n\nQuestion: What will happen if it rains on Sports Day?',
    choices: [
      { key: 'A', text: 'It will start at 8:00.' },
      { key: 'B', text: 'It will be next Tuesday.' },
      { key: 'C', text: 'It will be canceled.' },
      { key: 'D', text: 'It will be indoors.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「If it rains, we will hold Sports Day next Tuesday（雨なら来週火曜に開催する）」とあります。If it rains（もし雨なら）の後ろが答えです。中止とは書かれていません。\n【図解】読み取りのポイント\n★本文の該当箇所: If it rains, we will hold Sports Day next Tuesday\n○正解の根拠: 雨天時＝翌週火曜\n×ひっかけ: 中止(canceled)ではない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_039',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Amy\nTo: Sophie\nHi Sophie,\nI can’t find my English notebook. I think I left it in the classroom. Can you look on my desk tomorrow morning? Thank you so much.\nAmy\n\nQuestion: What does Amy ask Sophie to do?',
    choices: [
      { key: 'A', text: 'Buy a new notebook.' },
      { key: 'B', text: 'Look on her desk.' },
      { key: 'C', text: 'Call the teacher.' },
      { key: 'D', text: 'Clean the classroom.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「Can you look on my desk tomorrow morning?（明日の朝、私の机を見てくれる？）」とあります。エイミーの頼みは机を見てもらうことです。\n【図解】読み取りのポイント\n★本文の該当箇所: Can you look on my desk tomorrow morning?\n○正解の根拠: 頼み＝机を見る\n×ひっかけ: 新しいノート購入は頼んでいない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_040',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the e-mail and answer the question.\n\nFrom: Mark\nTo: Grandma\nDear Grandma,\nI won first prize in the drawing contest! My picture of the mountains will be shown at the city hall. Please come and see it next Sunday.\nMark\n\nQuestion: Why is Mark happy?',
    choices: [
      { key: 'A', text: 'He got a new bike.' },
      { key: 'B', text: 'He won first prize in a contest.' },
      { key: 'C', text: 'He met a famous artist.' },
      { key: 'D', text: 'He went to the mountains.' },
    ],
    correctKey: 'B',
    explanation:
      'メールに「I won first prize in the drawing contest!（絵のコンテストで一等賞をとった）」とあります。うれしい理由は一等賞をとったことです。山は絵の題材です。\n【図解】読み取りのポイント\n★本文の該当箇所: I won first prize in the drawing contest\n○正解の根拠: 喜びの理由＝一等賞\n×ひっかけ: mountainsは絵の題材\n→結論: 答えはB',
    difficulty: 'standard',
  },

  // ── SHORT PASSAGES / 短文パッセージ (041-060) ─────────────────────
  {
    id: 'eiken_4kyu_rea3_041',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nTaro has a dog named Choco. Every morning, Taro walks Choco in the park before school. Choco likes to run after the birds, so Taro holds the leash tightly.\n\nQuestion: When does Taro walk Choco?',
    choices: [
      { key: 'A', text: 'After school.' },
      { key: 'B', text: 'Every morning before school.' },
      { key: 'C', text: 'At night.' },
      { key: 'D', text: 'On weekends only.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Every morning, Taro walks Choco in the park before school（毎朝、学校の前に公園でチョコを散歩させる）」とあります。散歩の時間は毎朝の登校前です。\n【図解】読み取りのポイント\n★本文の該当箇所: Every morning ... before school\n○正解の根拠: 散歩＝毎朝、登校前\n×ひっかけ: after schoolや夜ではない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_042',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nMs. Green is an English teacher from Canada. She came to Japan three years ago. On weekends, she teaches a free English class for children at the community center.\n\nQuestion: What does Ms. Green do on weekends?',
    choices: [
      { key: 'A', text: 'She travels around Canada.' },
      { key: 'B', text: 'She teaches a free English class.' },
      { key: 'C', text: 'She studies Japanese.' },
      { key: 'D', text: 'She works at a store.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「On weekends, she teaches a free English class for children（週末には子ども向けの無料英語教室を教える）」とあります。週末の活動は英語教室です。\n【図解】読み取りのポイント\n★本文の該当箇所: On weekends, she teaches a free English class\n○正解の根拠: 週末＝無料の英語教室\n×ひっかけ: カナダ旅行や店の仕事は書いていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_043',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nLast Sunday, Yumi went hiking with her father. They climbed a small mountain near their town. At the top, they ate rice balls and drank warm tea. Yumi took many photos of the view.\n\nQuestion: What did Yumi and her father eat at the top?',
    choices: [
      { key: 'A', text: 'Sandwiches.' },
      { key: 'B', text: 'Rice balls.' },
      { key: 'C', text: 'Cake.' },
      { key: 'D', text: 'Noodles.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「they ate rice balls and drank warm tea（おにぎりを食べて温かいお茶を飲んだ）」とあります。山頂で食べたのはおにぎりです。\n【図解】読み取りのポイント\n★本文の該当箇所: they ate rice balls\n○正解の根拠: 食べた物＝rice balls\n×ひっかけ: sandwichesやcakeは書いていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_044',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nBilly wants to be a pilot. He reads many books about airplanes. His uncle works at an airport, and sometimes he takes Billy there. Billy loves watching the big planes take off.\n\nQuestion: What does Billy want to be?',
    choices: [
      { key: 'A', text: 'A doctor.' },
      { key: 'B', text: 'A pilot.' },
      { key: 'C', text: 'A teacher.' },
      { key: 'D', text: 'A driver.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Billy wants to be a pilot（ビリーはパイロットになりたい）」とあります。want to be ~（~になりたい）で将来の夢がわかります。おじの仕事は空港勤務です。\n【図解】読み取りのポイント\n★本文の該当箇所: Billy wants to be a pilot\n○正解の根拠: 夢＝パイロット\n×ひっかけ: 空港勤務はおじの仕事\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_045',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nThe Tanaka family moved to a new house last month. The new house has a big garden. Mr. Tanaka planted tomatoes and cucumbers. The children help him give water to the plants every evening.\n\nQuestion: What did Mr. Tanaka plant in the garden?',
    choices: [
      { key: 'A', text: 'Flowers.' },
      { key: 'B', text: 'Trees.' },
      { key: 'C', text: 'Tomatoes and cucumbers.' },
      { key: 'D', text: 'Rice.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「Mr. Tanaka planted tomatoes and cucumbers（田中さんはトマトときゅうりを植えた）」とあります。植えたのはトマトときゅうりです。\n【図解】読み取りのポイント\n★本文の該当箇所: planted tomatoes and cucumbers\n○正解の根拠: 植えた物＝トマトときゅうり\n×ひっかけ: flowersやriceは書いていない\n→結論: 答えはC',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_046',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nEmma likes to collect stamps. She has stamps from many countries. Her favorite one is a stamp from France with a picture of a cat. Her pen pal in France sent it to her.\n\nQuestion: Who sent Emma her favorite stamp?',
    choices: [
      { key: 'A', text: 'Her teacher.' },
      { key: 'B', text: 'Her pen pal in France.' },
      { key: 'C', text: 'Her brother.' },
      { key: 'D', text: 'Her mother.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Her pen pal in France sent it to her（フランスのペンフレンドが送ってくれた）」とあります。send ~ to her（~を彼女に送る）の主語がペンフレンドです。\n【図解】読み取りのポイント\n★本文の該当箇所: Her pen pal in France sent it to her\n○正解の根拠: 送り主＝フランスのペンフレンド\n×ひっかけ: 先生や兄弟は書いていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_047',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nEvery summer, Kenta visits his grandmother in Okinawa. She lives near the sea, so they swim every day. This year, Kenta learned how to catch fish. He was very happy.\n\nQuestion: What did Kenta learn this year?',
    choices: [
      { key: 'A', text: 'How to swim.' },
      { key: 'B', text: 'How to catch fish.' },
      { key: 'C', text: 'How to cook.' },
      { key: 'D', text: 'How to sail a boat.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「This year, Kenta learned how to catch fish（今年、ケンタは魚のとり方を覚えた）」とあります。今年学んだのは魚のとり方です。泳ぐことは毎日していた活動です。\n【図解】読み取りのポイント\n★本文の該当箇所: Kenta learned how to catch fish\n○正解の根拠: 今年学んだこと＝魚のとり方\n×ひっかけ: 泳ぎは以前からしていた\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_048',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nSarah is in the school brass band. She practices the trumpet after school on Tuesdays and Thursdays. Next month, the band will play at a big concert in the city hall.\n\nQuestion: What instrument does Sarah play?',
    choices: [
      { key: 'A', text: 'The violin.' },
      { key: 'B', text: 'The trumpet.' },
      { key: 'C', text: 'The piano.' },
      { key: 'D', text: 'The guitar.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「She practices the trumpet（彼女はトランペットを練習する）」とあります。演奏する楽器はトランペットです。他の楽器は本文にありません。\n【図解】読み取りのポイント\n★本文の該当箇所: She practices the trumpet\n○正解の根拠: 楽器＝trumpet\n×ひっかけ: violinやpianoは書いていない\n→結論: 答えはB',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_049',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nMr. Ford opened a small pet shop ten years ago. He sells birds, fish, and rabbits. He does not sell dogs or cats because his shop is too small. Many families visit his shop on weekends.\n\nQuestion: Why doesn’t Mr. Ford sell dogs?',
    choices: [
      { key: 'A', text: 'His shop is too small.' },
      { key: 'B', text: 'Dogs are too expensive.' },
      { key: 'C', text: 'He does not like dogs.' },
      { key: 'D', text: 'People do not want dogs.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「He does not sell dogs or cats because his shop is too small（店が小さすぎるので犬や猫は売らない）」とあります。because（なぜなら）の後ろが理由です。\n【図解】読み取りのポイント\n★本文の該当箇所: because his shop is too small\n○正解の根拠: 理由＝店が小さすぎる\n×ひっかけ: 値段や好みは書いていない\n→結論: 答えはA',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_050',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nNancy usually goes to school by bike. But today her bike is broken, so her mother took her to school by car. After school, Nancy will take the bus home.\n\nQuestion: How did Nancy go to school today?',
    choices: [
      { key: 'A', text: 'By bike.' },
      { key: 'B', text: 'By car.' },
      { key: 'C', text: 'By bus.' },
      { key: 'D', text: 'On foot.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「today her bike is broken, so her mother took her to school by car（今日は自転車が壊れたので母が車で送った）」とあります。今日は車で登校しました。ふだんは自転車です。\n【図解】読み取りのポイント\n★本文の該当箇所: her mother took her to school by car\n○正解の根拠: 今日＝車\n×ひっかけ: 自転車はふだん、バスは帰り\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_051',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nThere is a small cafe near Jack’s house. The cafe sells warm soup and fresh bread. Jack often goes there with his mother on cold days. His favorite is the pumpkin soup.\n\nQuestion: What is Jack’s favorite food at the cafe?',
    choices: [
      { key: 'A', text: 'Fresh bread.' },
      { key: 'B', text: 'Pumpkin soup.' },
      { key: 'C', text: 'Hot coffee.' },
      { key: 'D', text: 'Ice cream.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「His favorite is the pumpkin soup（彼のお気に入りはかぼちゃスープ）」とあります。favorite（お気に入り）はかぼちゃスープです。パンも売っていますがお気に入りではありません。\n【図解】読み取りのポイント\n★本文の該当箇所: His favorite is the pumpkin soup\n○正解の根拠: お気に入り＝かぼちゃスープ\n×ひっかけ: breadは売っているだけ\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_052',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nRika joined the cooking club this year. Last week, the club made curry for the first time. Rika cut the vegetables, and her friend cooked the rice. Everyone said the curry was delicious.\n\nQuestion: What did Rika do when the club made curry?',
    choices: [
      { key: 'A', text: 'She cooked the rice.' },
      { key: 'B', text: 'She cut the vegetables.' },
      { key: 'C', text: 'She washed the dishes.' },
      { key: 'D', text: 'She bought the meat.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「Rika cut the vegetables（リカは野菜を切った）」とあります。リカの仕事は野菜を切ることでした。ご飯を炊いたのは友達です。\n【図解】読み取りのポイント\n★本文の該当箇所: Rika cut the vegetables\n○正解の根拠: リカ＝野菜を切る\n×ひっかけ: ご飯は友達が炊いた\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_053',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nMr. Kim is a bookshop owner. His shop has many old and rare books. Students often come to read after school. Mr. Kim is happy because he loves talking about books with young people.\n\nQuestion: Why is Mr. Kim happy?',
    choices: [
      { key: 'A', text: 'He sells many books.' },
      { key: 'B', text: 'He loves talking about books with young people.' },
      { key: 'C', text: 'His shop is very big.' },
      { key: 'D', text: 'He gets many new books.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「he loves talking about books with young people（若い人と本の話をするのが大好き）」とあります。うれしい理由は若者との本の話です。\n【図解】読み取りのポイント\n★本文の該当箇所: he loves talking about books with young people\n○正解の根拠: 喜びの理由＝若者との本の会話\n×ひっかけ: 販売数や店の広さは無関係\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_054',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nDaniel has a part-time job at a flower shop on Saturdays. He carries the flowers and cleans the floor. He earns some money and buys books with it. He wants to save money for a trip.\n\nQuestion: What does Daniel do with the money he earns?',
    choices: [
      { key: 'A', text: 'He buys flowers.' },
      { key: 'B', text: 'He buys books.' },
      { key: 'C', text: 'He gives it to his sister.' },
      { key: 'D', text: 'He buys food.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「buys books with it（そのお金で本を買う）」とあります。稼いだお金で本を買います。旅行のためにためたいとも書かれていますが、buysの対象は本です。\n【図解】読み取りのポイント\n★本文の該当箇所: buys books with it\n○正解の根拠: お金の使い道＝本を買う\n×ひっかけ: flowersは仕事で運ぶだけ\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_055',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nThe town has a new library. It is open until 8:00 p.m., so students can study there after club activities. There is also a quiet room for reading. Many people are glad about the new library.\n\nQuestion: Until what time is the new library open?',
    choices: [
      { key: 'A', text: 'Until 5:00 p.m.' },
      { key: 'B', text: 'Until 6:00 p.m.' },
      { key: 'C', text: 'Until 8:00 p.m.' },
      { key: 'D', text: 'Until 10:00 p.m.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「It is open until 8:00 p.m.（午後8時まで開いている）」とあります。until ~（~まで）で閉館時刻がわかります。\n【図解】読み取りのポイント\n★本文の該当箇所: It is open until 8:00 p.m.\n○正解の根拠: 閉館＝8:00 p.m.\n×ひっかけ: 5:00や6:00ではない\n→結論: 答えはC',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_056',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nOn New Year’s Day, Mina’s family visits a shrine. They wish for a good year. After that, they eat special food called osechi. Mina’s favorite part is getting money from her grandparents.\n\nQuestion: What is Mina’s favorite part of New Year’s Day?',
    choices: [
      { key: 'A', text: 'Visiting the shrine.' },
      { key: 'B', text: 'Eating osechi.' },
      { key: 'C', text: 'Getting money from her grandparents.' },
      { key: 'D', text: 'Playing games.' },
    ],
    correctKey: 'C',
    explanation:
      '本文に「Mina’s favorite part is getting money from her grandparents（ミナのお気に入りは祖父母からお金をもらうこと）」とあります。favorite part（一番好きなこと）はお年玉です。\n【図解】読み取りのポイント\n★本文の該当箇所: getting money from her grandparents\n○正解の根拠: 一番好き＝お金をもらうこと\n×ひっかけ: 神社やおせちは他の行事\n→結論: 答えはC',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_057',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nAlex is good at drawing. Last week, his art teacher asked him to draw a picture for the school newspaper. Alex drew a picture of the school garden. Everyone liked it very much.\n\nQuestion: What did Alex draw?',
    choices: [
      { key: 'A', text: 'The school garden.' },
      { key: 'B', text: 'His teacher.' },
      { key: 'C', text: 'A newspaper.' },
      { key: 'D', text: 'His classmates.' },
    ],
    correctKey: 'A',
    explanation:
      '本文に「Alex drew a picture of the school garden（アレックスは学校の庭の絵を描いた）」とあります。描いたのは学校の庭です。新聞は絵を載せる場所です。\n【図解】読み取りのポイント\n★本文の該当箇所: Alex drew a picture of the school garden\n○正解の根拠: 描いた物＝学校の庭\n×ひっかけ: newspaperは掲載先\n→結論: 答えはA',
    difficulty: 'basic',
  },
  {
    id: 'eiken_4kyu_rea3_058',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nEvery winter, Ben’s family goes to the mountains to ski. Ben started skiing when he was five. Now he can ski very well. This year, he will teach his little sister how to ski.\n\nQuestion: What will Ben do this year?',
    choices: [
      { key: 'A', text: 'Learn to ski.' },
      { key: 'B', text: 'Teach his sister to ski.' },
      { key: 'C', text: 'Buy new skis.' },
      { key: 'D', text: 'Stay home.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「This year, he will teach his little sister how to ski（今年、妹にスキーの仕方を教える）」とあります。今年することは妹に教えることです。ベン自身は5歳から滑っています。\n【図解】読み取りのポイント\n★本文の該当箇所: he will teach his little sister how to ski\n○正解の根拠: 今年＝妹に教える\n×ひっかけ: ベンはもう上手に滑れる\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_059',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nYuki wanted to buy a present for her mother. She went to three shops. At the first shop, the bags were too expensive. At the second shop, she found a nice scarf and bought it.\n\nQuestion: What did Yuki buy for her mother?',
    choices: [
      { key: 'A', text: 'A bag.' },
      { key: 'B', text: 'A scarf.' },
      { key: 'C', text: 'A hat.' },
      { key: 'D', text: 'Some flowers.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「she found a nice scarf and bought it（すてきなスカーフを見つけて買った）」とあります。買ったのはスカーフです。かばんは高すぎて買いませんでした。\n【図解】読み取りのポイント\n★本文の該当箇所: she found a nice scarf and bought it\n○正解の根拠: 買った物＝scarf\n×ひっかけ: bagは高すぎて買わなかった\n→結論: 答えはB',
    difficulty: 'standard',
  },
  {
    id: 'eiken_4kyu_rea3_060',
    level: '4kyu',
    category: 'reading',
    question:
      'Read the passage and answer the question.\n\nLast Saturday, it was rainy, so Tom and his brother could not play soccer outside. Instead, they stayed home and made a model plane together. It took them three hours, but they had a lot of fun.\n\nQuestion: Why did Tom and his brother stay home?',
    choices: [
      { key: 'A', text: 'They were sick.' },
      { key: 'B', text: 'It was rainy.' },
      { key: 'C', text: 'They had homework.' },
      { key: 'D', text: 'It was too cold.' },
    ],
    correctKey: 'B',
    explanation:
      '本文に「it was rainy, so Tom and his brother could not play soccer outside（雨だったので外でサッカーができなかった）」とあります。家にいた理由は雨です。so（だから）の前が理由になります。\n【図解】読み取りのポイント\n★本文の該当箇所: it was rainy, so ... could not play soccer outside\n○正解の根拠: 理由＝雨\n×ひっかけ: 病気や寒さは書いていない\n→結論: 答えはB',
    difficulty: 'standard',
  },
];
