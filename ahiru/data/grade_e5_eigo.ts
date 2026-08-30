import type { Question } from './questions-meta';
import type { GradeKey } from './grades';

const GRADE: GradeKey = 'e5';

// 小学5年生 英語（学年タグ e5）。中学受験の英語ではなく、通常の小5外国語活動〜
// 教科としての英語の基礎に沿った内容：曜日、月、教科の言い方、
// like / don't like（好き・きらい）、can / can't（〜できる・できない）、
// 時刻の表現、What/Where/When/Who を使った基本の疑問文、
// 簡単な現在形の文と短い英文の読み取り。
export const gradeE5EigoQuestions: Question[] = [
  // ============================================================
  // 曜日（days of the week） 6問 (01-06)
  // ============================================================
  {
    id: 'grade_e5_eigo_01',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「月曜日」を英語で言うと？',
    answer: 'Monday',
    choices: ['Monday', 'Tuesday', 'Sunday', 'Friday'],
    hint: '1週間の最初の平日。',
    explanation:
      '【解説】\n「月曜日」は英語で Monday（マンデー）。\n曜日はいつも最初の文字を大文字で書く。\n答え：Monday',
    memoryTip: '曜日の英語は文の途中でも必ず大文字で始める（例：I like Monday.）。',
  },
  {
    id: 'grade_e5_eigo_02',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「土曜日」を英語で言うと？',
    answer: 'Saturday',
    choices: ['Saturday', 'Sunday', 'Thursday', 'Wednesday'],
    hint: '週末の最初の日。',
    explanation:
      '【解説】\n「土曜日」は英語で Saturday（サタデー）。\n答え：Saturday',
  },
  {
    id: 'grade_e5_eigo_03',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Sunday は日本語で何曜日ですか。',
    answer: '日曜日',
    hint: '週末の2日目。「サン」は「太陽」の意味。',
    explanation:
      '【解説】\nSunday の sun は「太陽」という意味。\n日曜日は英語で Sunday。\n答え：日曜日',
  },
  {
    id: 'grade_e5_eigo_04',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Monday の次の日（曜日）は英語で何ですか。',
    answer: 'Tuesday',
    choices: ['Tuesday', 'Wednesday', 'Sunday', 'Saturday'],
    hint: '曜日の順番：Sunday → Monday → Tuesday → ...',
    explanation:
      '【解説】\n曜日の順番は Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday。\nMonday（月曜日）の次は Tuesday（火曜日）。\n答え：Tuesday',
  },
  {
    id: 'grade_e5_eigo_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「木曜日」を表す英語の正しいつづり（スペル）はどれですか。',
    answer: 'Thursday',
    choices: ['Thursday', 'Thusday', 'Turesday', 'Thersday'],
    hint: 'th のあとに ur が続く。',
    explanation:
      '【解説】\n「木曜日」は Thursday。t-h-u-r-s-d-a-y の順につづる。\nほかの選択肢は文字が抜けていたり、順番がまちがっている。\n答え：Thursday',
    pitfall: 'Thursday は Tuesday（火曜日）とつづりが似ているので混同しないように注意。',
  },
  {
    id: 'grade_e5_eigo_06',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nMy favorite day is (　). （わたしのいちばん好きな曜日は土曜日です。）',
    answer: 'Saturday',
    choices: ['Saturday', 'Sunday', 'Monday', 'Friday'],
    hint: '「土曜日」を表す英単語。',
    explanation:
      '【解説】\n「土曜日」は Saturday。\nMy favorite day is Saturday. で「わたしのいちばん好きな曜日は土曜日です」という文になる。\n答え：Saturday',
  },

  // ============================================================
  // 月（months） 6問 (07-12)
  // ============================================================
  {
    id: 'grade_e5_eigo_07',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「1月」を英語で言うと？',
    answer: 'January',
    choices: ['January', 'June', 'July', 'April'],
    hint: '1年の最初の月。',
    explanation:
      '【解説】\n「1月」は英語で January（ジャニュアリー）。\n月の名前も曜日と同じで最初の文字を大文字で書く。\n答え：January',
  },
  {
    id: 'grade_e5_eigo_08',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「12月」を英語で言うと？',
    answer: 'December',
    choices: ['December', 'October', 'November', 'September'],
    hint: '1年の最後の月。クリスマスがある月。',
    explanation:
      '【解説】\n「12月」は英語で December（ディセンバー）。\n答え：December',
  },
  {
    id: 'grade_e5_eigo_09',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'July は日本語で何月ですか。',
    answer: '7月',
    hint: '夏休みが始まる少し前の月。',
    explanation:
      '【解説】\nJuly は「7月」という意味。\n答え：7月',
  },
  {
    id: 'grade_e5_eigo_10',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nMy birthday is in (　). （わたしの誕生日は4月です。）',
    answer: 'April',
    choices: ['April', 'August', 'June', 'March'],
    hint: '「4月」を表す英単語。',
    explanation:
      '【解説】\n「4月」は April。\n「〜月に」というときは in を使うので、in April（4月に）となる。\n答え：April',
  },
  {
    id: 'grade_e5_eigo_11',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '9月を表す英単語はどれですか。',
    answer: 'September',
    choices: ['September', 'October', 'August', 'November'],
    hint: '夏休みが終わって新学期が始まる月。',
    explanation:
      '【解説】\n「9月」は September。\nOctober は10月、August は8月、November は11月なので注意。\n答え：September',
  },
  {
    id: 'grade_e5_eigo_12',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nMy birthday is in (　). （わたしの誕生日は5月です。）',
    answer: 'May',
    choices: ['May', 'March', 'June', 'July'],
    hint: '「5月」を表す英単語。',
    explanation:
      '【解説】\n「5月」は May。\nMy birthday is in May. で「わたしの誕生日は5月です」という文になる。\n答え：May',
  },

  // ============================================================
  // 教科の言い方（school subjects） 6問 (13-18)
  // ============================================================
  {
    id: 'grade_e5_eigo_13',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「算数」を英語で言うと？',
    answer: 'math',
    choices: ['math', 'English', 'music', 'art'],
    hint: '数を使う教科。',
    explanation:
      '【解説】\n「算数」は英語で math（マス）。mathematics を短くした言い方。\n答え：math',
  },
  {
    id: 'grade_e5_eigo_14',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「音楽」を英語で言うと？',
    answer: 'music',
    choices: ['music', 'art', 'P.E.', 'science'],
    hint: '歌を歌ったり楽器をひいたりする教科。',
    explanation:
      '【解説】\n「音楽」は英語で music（ミュージック）。\n答え：music',
  },
  {
    id: 'grade_e5_eigo_15',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: 'P.E. は日本語で何の教科ですか。',
    answer: '体育',
    hint: 'Physical Education（フィジカル・エデュケーション）を短くした言い方。',
    explanation:
      '【解説】\nP.E. は Physical Education（フィジカル・エデュケーション＝体育）を短くした言い方。\n体を動かす教科なので「体育」を表す。\n答え：体育',
  },
  {
    id: 'grade_e5_eigo_16',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「理科」を英語で言うと？',
    answer: 'science',
    choices: ['science', 'social studies', 'Japanese', 'English'],
    hint: '実験をしたり自然を調べたりする教科。',
    explanation:
      '【解説】\n「理科」は英語で science（サイエンス）。\n答え：science',
  },
  {
    id: 'grade_e5_eigo_17',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nI like (　). （わたしは国語が好きです。）',
    answer: 'Japanese',
    choices: ['Japanese', 'English', 'math', 'music'],
    hint: '英語では「国語」という教科名は無く、日本語という意味の単語を使う。',
    explanation:
      '【解説】\n英語には「国語」という教科名がないので、教科としての国語は Japanese（日本語）と言う。\nI like Japanese. で「わたしは国語が好きです」という文になる。\n答え：Japanese',
    pitfall: 'Japanese には「日本語（の教科）」と「日本人・日本の」という2つの意味があることに注意。',
  },
  {
    id: 'grade_e5_eigo_18',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「社会」を英語で言うと？',
    answer: 'social studies',
    choices: ['social studies', 'science', 'art', 'math'],
    hint: '2つの単語を組み合わせた言い方。',
    explanation:
      '【解説】\n「社会（科）」は英語で social studies（ソーシャル・スタディーズ）。\nsocial（社会の）と studies（学習）を組み合わせた言葉。\n答え：social studies',
  },

  // ============================================================
  // like / don't like（好き・きらい） 8問 (19-26)
  // ============================================================
  {
    id: 'grade_e5_eigo_19',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私はサッカーが好きです。」を英語にすると？',
    answer: 'I like soccer.',
    choices: ['I like soccer.', 'I likes soccer.', 'I like a soccer.', 'I liking soccer.'],
    hint: '主語が I（わたし）のときの like の形は変わらない。',
    explanation:
      '【解説】\n「〜が好きです」は I like 〜. で表す。\n主語が I のときは like のまま（s はつけない）。\nsoccer のようなスポーツ名には a をつけない。\n答え：I like soccer.',
  },
  {
    id: 'grade_e5_eigo_20',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私はにんじんが好きではありません。」を英語にすると？',
    answer: "I don't like carrots.",
    choices: [
      "I don't like carrots.",
      'I not like carrots.',
      "I don't likes carrots.",
      "I isn't like carrots.",
    ],
    hint: '「好きではない」は don\'t like で表す。',
    explanation:
      '【解説】\n「〜が好きではない」は I don\'t like 〜. で表す。\ndon\'t のあとの動詞 like は元の形のまま使う。\n答え：I don\'t like carrots.',
  },
  {
    id: 'grade_e5_eigo_21',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nI (　) dogs. （わたしは犬が好きです。）',
    answer: 'like',
    hint: '「好き」を表す動詞。',
    explanation:
      '【解説】\n「〜が好き」は like で表す。\nI like dogs. で「わたしは犬が好きです」という文になる。\n答え：like',
  },
  {
    id: 'grade_e5_eigo_22',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Do you like apples? に対して「はい、好きです」と答える正しい文はどれですか。',
    answer: 'Yes, I do.',
    choices: ['Yes, I do.', 'Yes, I am.', 'Yes, I like.', 'Yes, I does.'],
    hint: 'Do you 〜? には do を使って答える。',
    explanation:
      '【解説】\nDo you 〜? とたずねられたら、Yes, I do. または No, I don\'t. で答える。\n答え：Yes, I do.',
  },
  {
    id: 'grade_e5_eigo_23',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「あなたは魚が好きですか。」を英語にすると？',
    answer: 'Do you like fish?',
    hint: '「〜が好きですか」とたずねる文は Do you で始める。',
    explanation:
      '【解説】\n「〜が好きですか」とたずねるときは、文の最初に Do you を置いて Do you like 〜? の形にする。\n最後にクエスチョンマーク（？）を忘れずにつける。\n答え：Do you like fish?',
  },
  {
    id: 'grade_e5_eigo_24',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\nShe (　) like spiders. （彼女はクモが好きではありません。）',
    answer: "doesn't",
    choices: ["doesn't", "don't", "isn't", 'not'],
    hint: '主語が she（彼女）のときの「〜ではない」の言い方。',
    explanation:
      '【解説】\n主語が he や she（3人称単数）のときの否定文は doesn\'t（does not）を使う。\nShe doesn\'t like spiders. で「彼女はクモが好きではありません」という文になる。\n答え：doesn\'t',
    pitfall: '主語が I や you のときは don\'t、he・she・it のときは doesn\'t を使うのでまちがえないこと。',
  },
  {
    id: 'grade_e5_eigo_25',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nTom likes basketball. He doesn\'t like tennis.\n質問：What sport does Tom like?',
    answer: 'basketball（バスケットボール）',
    hint: '最初の文に注目する。',
    explanation:
      '【解説】\n最初の文 Tom likes basketball.（トムはバスケットボールが好きです）から、トムが好きなスポーツは basketball だとわかる。\n2つ目の文 He doesn\'t like tennis. は「テニスは好きではない」という意味。\n答え：basketball（バスケットボール）',
  },
  {
    id: 'grade_e5_eigo_26',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「好き」を意味する英単語はどれですか。',
    answer: 'like',
    choices: ['like', 'likes', 'liking', 'liked'],
    hint: '主語が I や you のときに使う形。',
    explanation:
      '【解説】\n「好き」を表す動詞の基本の形は like。\n答え：like',
  },

  // ============================================================
  // can / can't（〜できる・〜できない） 8問 (27-34)
  // ============================================================
  {
    id: 'grade_e5_eigo_27',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は泳ぐことができます。」を英語にすると？',
    answer: 'I can swim.',
    choices: ['I can swim.', 'I can swims.', 'I can to swim.', 'I swim can.'],
    hint: 'can のあとの動詞はいつも元の形。',
    explanation:
      '【解説】\n「〜することができる」は can のあとに動詞の元の形を続けて表す。\ncan のあとには to をつけないし、s もつけない。\n答え：I can swim.',
  },
  {
    id: 'grade_e5_eigo_28',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「彼は自転車に乗ることができません。」を英語にすると？',
    answer: "He can't ride a bike.",
    choices: [
      "He can't ride a bike.",
      "He not can ride a bike.",
      "He can't rides a bike.",
      "He isn't can ride a bike.",
    ],
    hint: '「〜できない」は can\'t のあとに動詞の元の形。',
    explanation:
      '【解説】\n「〜することができない」は can\'t（cannot）のあとに動詞の元の形を続ける。\nHe can\'t ride a bike. で「彼は自転車に乗ることができません」という文になる。\n答え：He can\'t ride a bike.',
  },
  {
    id: 'grade_e5_eigo_29',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\n(　) you play the piano? （あなたはピアノをひくことができますか。）',
    answer: 'Can',
    hint: '「〜できますか」とたずねる文の最初の単語。',
    explanation:
      '【解説】\n「〜することができますか」とたずねるときは、文の最初に Can を置く。\nCan you play the piano? で「あなたはピアノをひくことができますか」という文になる。\n答え：Can',
  },
  {
    id: 'grade_e5_eigo_30',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'Can you cook? に対して「いいえ、できません」と答える正しい文はどれですか。',
    answer: "No, I can't.",
    choices: ["No, I can't.", 'No, I not.', "No, I isn't.", "No, I don't."],
    hint: 'Can you 〜? には can を使って答える。',
    explanation:
      '【解説】\nCan you 〜? とたずねられたら、Yes, I can. または No, I can\'t. で答える。\n答え：No, I can\'t.',
  },
  {
    id: 'grade_e5_eigo_31',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「走る」を意味する英単語はどれですか。',
    answer: 'run',
    choices: ['run', 'walk', 'jump', 'swim'],
    hint: '速く足を動かす動作。',
    explanation:
      '【解説】\n「走る」は run。\nwalk は「歩く」、jump は「とぶ」、swim は「泳ぐ」という意味。\n答え：run',
  },
  {
    id: 'grade_e5_eigo_32',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nI can sing well. I can\'t dance well.\n質問：What can the writer do well?',
    answer: 'sing（歌うこと）',
    hint: '最初の文に注目する。',
    explanation:
      '【解説】\n最初の文 I can sing well.（わたしはじょうずに歌うことができます）から、じょうずにできることは sing（歌うこと）だとわかる。\n2つ目の文 I can\'t dance well. は「じょうずにおどることはできない」という意味。\n答え：sing（歌うこと）',
  },
  {
    id: 'grade_e5_eigo_33',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\nMy brother can (　) well. （わたしの兄はじょうずにスケートができます。）',
    answer: 'skate',
    choices: ['skate', 'skates', 'skating', 'skated'],
    hint: 'can のあとの動詞は元の形にする。',
    explanation:
      '【解説】\ncan のあとの動詞はいつも元の形（s や ing、ed をつけない形）にする。\n主語が My brother（3人称単数）でも、can のあとの動詞に s はつけない。\n答え：skate',
    pitfall: 'be動詞の文とちがい、can のあとの動詞には3人称単数の s をつけないことに注意。',
  },
  {
    id: 'grade_e5_eigo_34',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「〜することができる」を表す英語の単語はどれですか。',
    answer: 'can',
    choices: ['can', 'is', 'do', 'like'],
    hint: '動詞の前に置いて能力を表す単語。',
    explanation:
      '【解説】\n「〜することができる」という意味を動詞に付け加える単語は can。\n答え：can',
  },

  // ============================================================
  // 時刻の表現（time expressions） 6問 (35-40)
  // ============================================================
  {
    id: 'grade_e5_eigo_35',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「7時」を英語で言うと？',
    answer: "seven o'clock",
    choices: ["seven o'clock", 'seven hour', 'seven time', 'seven clock'],
    hint: '「ちょうど〜時」というときに数字のあとにつける言葉。',
    explanation:
      '【解説】\n「ちょうど〜時」というときは、数字のあとに o\'clock をつける。\n「7時」は seven o\'clock。\n答え：seven o\'clock',
  },
  {
    id: 'grade_e5_eigo_36',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: 'What time is it? への答え方として正しい文はどれですか。（3時のとき）',
    answer: "It's three o'clock.",
    choices: [
      "It's three o'clock.",
      'It is three o\'clock is.',
      'Time is three.',
      "Three o'clock is it.",
    ],
    hint: '時刻を答えるときは It\'s で始める。',
    explanation:
      '【解説】\n時刻をたずねられたら It\'s（It is）+ 時刻. の形で答える。\n答え：It\'s three o\'clock.',
  },
  {
    id: 'grade_e5_eigo_37',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「朝」を英語で言うと？',
    answer: 'morning',
    choices: ['morning', 'afternoon', 'evening', 'night'],
    hint: '1日のいちばん最初の時間帯。',
    explanation:
      '【解説】\n「朝」は英語で morning（モーニング）。\n答え：morning',
  },
  {
    id: 'grade_e5_eigo_38',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る言葉はどれですか。\nI get up at (　) every morning. （わたしは毎朝6時に起きます。）',
    answer: "six o'clock",
    choices: ["six o'clock", "six hour", "sixth o'clock", "six o'clocks"],
    hint: '「6時に」を表す言い方。',
    explanation:
      '【解説】\n「ちょうど6時」は six o\'clock。\n「〜時に」というときは at を使うので、at six o\'clock となる。\n答え：six o\'clock',
  },
  {
    id: 'grade_e5_eigo_39',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「午後」を英語で言うと？',
    answer: 'afternoon',
    choices: ['afternoon', 'morning', 'noon', 'night'],
    hint: 'お昼（noon）のあとの時間帯。',
    explanation:
      '【解説】\n「午後」は英語で afternoon（アフタヌーン）。\nafter（〜のあとに）と noon（正午）を組み合わせた言葉。\n答え：afternoon',
  },
  {
    id: 'grade_e5_eigo_40',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nSchool starts at eight o\'clock.\n質問：学校は何時に始まりますか。',
    answer: '8時（eight o\'clock）',
    hint: 'at のあとの数字に注目する。',
    explanation:
      '【解説】\nat eight o\'clock は「8時に」という意味。\nSchool starts at eight o\'clock. は「学校は8時に始まります」という文。\n答え：8時（eight o\'clock）',
  },

  // ============================================================
  // What / Where / When / Who を使った疑問文 6問 (41-46)
  // ============================================================
  {
    id: 'grade_e5_eigo_41',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「これは何ですか。」を英語にすると？',
    answer: 'What is this?',
    choices: ['What is this?', 'What this is?', 'This is what?', 'What is it this?'],
    hint: '「何」をたずねる疑問詞を文の最初に置く。',
    explanation:
      '【解説】\n「何ですか」とたずねるときは What を文の最初に置き、What is this? の形にする。\n答え：What is this?',
  },
  {
    id: 'grade_e5_eigo_42',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「あなたはどこに住んでいますか。」を英語にすると？',
    answer: 'Where do you live?',
    hint: '「どこ」をたずねる疑問詞のあとに do you を続ける。',
    explanation:
      '【解説】\n「どこに〜しますか」とたずねるときは Where のあとに do you を続けて、Where do you live? の形にする。\nlive は「住む」という意味の動詞。\n答え：Where do you live?',
  },
  {
    id: 'grade_e5_eigo_43',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\n(　) is your birthday? （あなたの誕生日はいつですか。）',
    answer: 'When',
    hint: '「いつ」をたずねる疑問詞。',
    explanation:
      '【解説】\n「いつ」とたずねるときは When を使う。\nWhen is your birthday? で「あなたの誕生日はいつですか」という文になる。\n答え：When',
  },
  {
    id: 'grade_e5_eigo_44',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「これは誰のペンですか。」を英語にすると？',
    answer: 'Whose pen is this?',
    choices: [
      'Whose pen is this?',
      'Who pen is this?',
      'Whose is this pen?',
      "Who's this pen?",
    ],
    hint: '「誰の」をたずねる疑問詞のすぐあとに名詞を続ける。',
    explanation:
      '【解説】\n「誰の〜ですか」とたずねるときは Whose のすぐあとに名詞（pen）を続けて、Whose pen is this? の形にする。\nWho（誰）と Whose（誰の）を混同しないように注意。\n答え：Whose pen is this?',
    pitfall: 'Who は「誰が」、Whose は「誰の」という意味のちがいをしっかり区別する。',
  },
  {
    id: 'grade_e5_eigo_45',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '次の文の（　）に入る単語はどれですか。\n(　) is that girl? （あの女の子は誰ですか。）',
    answer: 'Who',
    hint: '「誰」をたずねる疑問詞。',
    explanation:
      '【解説】\n「誰ですか」とたずねるときは Who を使う。\nWho is that girl? で「あの女の子は誰ですか」という文になる。\n答え：Who',
  },
  {
    id: 'grade_e5_eigo_46',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nWhere is my bag? It\'s on the desk.\n質問：バッグはどこにありますか。',
    answer: '机の上（on the desk）',
    hint: 'on the desk の意味を考える。',
    explanation:
      '【解説】\non the desk は「机の上に」という意味。\nIt\'s on the desk. は「それ（バッグ）は机の上にあります」という文。\n答え：机の上（on the desk）',
  },

  // ============================================================
  // 現在形の文・短い英文の読み取り 4問 (47-50)
  // ============================================================
  {
    id: 'grade_e5_eigo_47',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は毎日学校に行きます。」を英語にすると？',
    answer: 'I go to school every day.',
    choices: [
      'I go to school every day.',
      'I goes to school every day.',
      'I going to school every day.',
      'I am go to school every day.',
    ],
    hint: '主語が I のときの go の形は変わらない。',
    explanation:
      '【解説】\n「毎日〜します」という習慣を表す文は現在形で表す。\n主語が I のときは go のまま（s はつけない）。\nevery day は「毎日」という意味。\n答え：I go to school every day.',
  },
  {
    id: 'grade_e5_eigo_48',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「彼女は毎朝牛乳を飲みます。」を英語にすると？',
    answer: 'She drinks milk every morning.',
    choices: [
      'She drinks milk every morning.',
      'She drink milk every morning.',
      'She drinking milk every morning.',
      'She is drink milk every morning.',
    ],
    hint: '主語が she（3人称単数）のときは動詞に s をつける。',
    explanation:
      '【解説】\n主語が he・she・it（3人称単数）のときは、現在形の動詞の最後に s をつける。\ndrink → drinks となる。\nShe drinks milk every morning. で「彼女は毎朝牛乳を飲みます」という文になる。\n答え：She drinks milk every morning.',
    pitfall: '主語が I や you のときは s をつけないが、he・she・it のときだけ s をつけることに注意。',
  },
  {
    id: 'grade_e5_eigo_49',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nMy name is Ken. I am ten years old. I live in Tokyo.\n質問：Kenは何歳ですか。',
    answer: '10歳（ten years old）',
    hint: 'I am 〜 years old. の部分に注目する。',
    explanation:
      '【解説】\nI am ten years old. は「わたしは10歳です」という意味。\n答え：10歳（ten years old）',
  },
  {
    id: 'grade_e5_eigo_50',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の英文を読んで、質問に答えなさい。\nThis is my dog. Its name is Pochi. Pochi is very cute.\n質問：犬の名前は何ですか。',
    answer: 'Pochi',
    hint: 'Its name is 〜. の部分に注目する。',
    explanation:
      '【解説】\nIts name is Pochi. は「その（犬の）名前はポチです」という意味。\nIts は「それの」という意味で、犬（it）を指している。\n答え：Pochi',
  },
];
