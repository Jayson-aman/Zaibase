import type { Question } from './questions-meta';
import type { GradeKey } from './grades';

const GRADE: GradeKey = 'j1';

// 中学1年生 英語（学年タグ j1、examType: koko＝高校受験トラック）。
// be動詞・一般動詞の現在形、疑問文・否定文、代名詞、三人称単数現在形（-s）、
// 現在進行形、命令文、助動詞can、疑問詞（what/who/when/where/why/how）、
// 基本的な前置詞、短い英文の読解、という中1英語の標準文法範囲を扱う。
export const gradeJ1EigoQuestions: Question[] = [
  // ============================================================
  // be動詞の現在形（肯定・否定・疑問） 6問 (01-06)
  // ============================================================
  {
    id: 'grade_j1_eigo_01',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nI (　) a student.',
    answer: 'am',
    choices: ['am', 'is', 'are', 'be'],
    hint: '主語がI（わたし）のときのbe動詞。',
    explanation:
      '【解説】\n主語がI（わたし）のときのbe動詞はam。\nI am a student. で「わたしは学生です」という文になる。\n答え：am',
  },
  {
    id: 'grade_j1_eigo_02',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '「彼女は先生です。」を英語にすると？',
    answer: 'She is a teacher.',
    choices: [
      'She is a teacher.',
      'She am a teacher.',
      'She are a teacher.',
      'She a teacher.',
    ],
    hint: '主語がShe（彼女）のときのbe動詞。',
    explanation:
      '【解説】\n主語がhe・she・it（3人称単数）のときのbe動詞はis。\nShe is a teacher. で「彼女は先生です」という文になる。\n答え：She is a teacher.',
  },
  {
    id: 'grade_j1_eigo_03',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「私たちは忙しくありません。」を英語にすると？',
    answer: 'We are not busy.',
    choices: [
      'We are not busy.',
      'We not are busy.',
      "We isn't busy.",
      "We don't busy.",
    ],
    hint: 'be動詞の否定文は、be動詞のすぐあとにnotを置く。',
    explanation:
      "【解説】\nbe動詞の否定文は、be動詞のすぐあとにnotを置く。\nareの否定はare not（短縮形aren't）。\nWe are not busy. で「私たちは忙しくありません」という文になる。\n答え：We are not busy.",
  },
  {
    id: 'grade_j1_eigo_04',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたは日本出身ですか。」を英語にすると？',
    answer: 'Are you from Japan?',
    choices: [
      'Are you from Japan?',
      'Do you from Japan?',
      'You are from Japan?',
      'Is you from Japan?',
    ],
    hint: 'be動詞の疑問文は、be動詞を主語の前に出す。',
    explanation:
      '【解説】\nbe動詞の疑問文は、be動詞を主語の前に出してAre you 〜?の形にする。\nfrom Japanは「日本出身の」という意味。\n答え：Are you from Japan?',
  },
  {
    id: 'grade_j1_eigo_05',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nThey (　) my friends. （彼らはわたしの友だちです。）',
    answer: 'are',
    choices: ['are', 'is', 'am', 'be'],
    hint: '主語が複数のときのbe動詞。',
    explanation:
      '【解説】\n主語が複数（they, we, youなど）のときのbe動詞はare。\nThey are my friends. で「彼らはわたしの友だちです」という文になる。\n答え：are',
  },
  {
    id: 'grade_j1_eigo_06',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: 'Is he a doctor? に対して「いいえ、ちがいます」と答える正しい文はどれですか。',
    answer: "No, he isn't.",
    choices: ["No, he isn't.", "No, he don't.", 'No, he not.', "No, he doesn't."],
    hint: 'be動詞の疑問文にはbe動詞を使って答える。',
    explanation:
      "【解説】\nIs he 〜? とbe動詞でたずねられたら、Yes, he is. またはNo, he isn't. のようにbe動詞を使って答える。\n答え：No, he isn't.",
  },

  // ============================================================
  // 一般動詞の現在形（肯定・否定・疑問） 6問 (07-12)
  // ============================================================
  {
    id: 'grade_j1_eigo_07',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '「私は毎日サッカーをします。」を英語にすると？',
    answer: 'I play soccer every day.',
    choices: [
      'I play soccer every day.',
      'I plays soccer every day.',
      'I am play soccer every day.',
      'I playing soccer every day.',
    ],
    hint: '主語がIのときの一般動詞の形は変わらない。',
    explanation:
      '【解説】\n「〜します」という一般動詞の文で、主語がIのときは動詞をそのままの形（原形）で使う。\nevery dayは「毎日」という意味。\n答え：I play soccer every day.',
  },
  {
    id: 'grade_j1_eigo_08',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question:
      '次の文の（　）に入る語はどれですか。\nWe (　) English every day. （私たちは毎日英語を勉強します。）',
    answer: 'study',
    choices: ['study', 'studies', 'studying', 'studied'],
    hint: '主語がWeのときの一般動詞の形。',
    explanation:
      '【解説】\n主語がwe（わたしたち）のときの一般動詞は原形のまま使う。\n「勉強する」はstudy。\n答え：study',
  },
  {
    id: 'grade_j1_eigo_09',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「私はネコを飼っていません。」を英語にすると？',
    answer: "I don't have a cat.",
    choices: [
      "I don't have a cat.",
      'I not have a cat.',
      "I doesn't have a cat.",
      'I am not have a cat.',
    ],
    hint: "一般動詞の否定文は動詞の前にdon'tを置く。",
    explanation:
      "【解説】\n一般動詞の否定文は、主語がI・you・複数のとき動詞の前にdon'tを置く。\nあとの動詞haveは原形のまま使う。\n答え：I don't have a cat.",
  },
  {
    id: 'grade_j1_eigo_10',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたは朝食を食べますか。」を英語にすると？',
    answer: 'Do you eat breakfast?',
    choices: [
      'Do you eat breakfast?',
      'Are you eat breakfast?',
      'You eat breakfast?',
      'Does you eat breakfast?',
    ],
    hint: '一般動詞の疑問文は文の最初にDoを置く。',
    explanation:
      '【解説】\n一般動詞の疑問文は、主語がyouのとき文の最初にDoを置いてDo you 〜?の形にする。\n答え：Do you eat breakfast?',
  },
  {
    id: 'grade_j1_eigo_11',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: 'Do you like tea? に対して「いいえ、好きではありません」と答える正しい文はどれですか。',
    answer: "No, I don't.",
    choices: ["No, I don't.", "No, I amn't.", "No, I isn't.", 'No, I not.'],
    hint: 'Do you 〜?にはdoを使って答える。',
    explanation:
      "【解説】\nDo you 〜? とたずねられたら、Yes, I do. またはNo, I don't. のようにdoを使って答える。\n答え：No, I don't.",
  },
  {
    id: 'grade_j1_eigo_12',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「彼らは公園で走ります。」を英語にすると？',
    answer: 'They run in the park.',
    choices: [
      'They run in the park.',
      'They runs in the park.',
      'They running in the park.',
      'They are run in the park.',
    ],
    hint: '主語がtheyのときの一般動詞の形と、場所を表す前置詞。',
    explanation:
      '【解説】\n主語がthey（複数）のときの一般動詞は原形のまま。\n「〜の中で」という場所は前置詞inで表す。\n答え：They run in the park.',
  },

  // ============================================================
  // 代名詞 5問 (13-17)
  // ============================================================
  {
    id: 'grade_j1_eigo_13',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nThis is (　) pen. （これは彼女のペンです。）',
    answer: 'her',
    choices: ['her', 'she', 'hers', 'herself'],
    hint: '「彼女の」という意味を表す代名詞。',
    explanation:
      '【解説】\n名詞（pen）の前に置いて「彼女の」という意味を表す代名詞はher。\nshe（彼女は）やhers（彼女のもの）と混同しないように注意。\n答え：her',
  },
  {
    id: 'grade_j1_eigo_14',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question:
      "次の文の（　）に入る語はどれですか。\nThat is (　) bag. It's very big. （あれは彼のかばんです。とても大きいです。）",
    answer: 'his',
    choices: ['his', 'he', 'him', "he's"],
    hint: '「彼の」という意味を表す代名詞。',
    explanation:
      '【解説】\n名詞（bag）の前に置いて「彼の」という意味を表す代名詞はhis。\nhisは「彼のもの」という意味でも使うが、ここでは名詞の前にあるので「彼の」の意味。\n答え：his',
  },
  {
    id: 'grade_j1_eigo_15',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「あれは私のものです。」を英語にすると？',
    answer: 'That is mine.',
    choices: ['That is mine.', 'That is my.', 'That is me.', 'That is I.'],
    hint: '「私のもの」という意味を表す代名詞。',
    explanation:
      '【解説】\n「私のもの」という意味を表す代名詞はmine。\nmyは「私の」という意味であとに名詞が必要なので、ここでは使えない。\n答え：That is mine.',
  },
  {
    id: 'grade_j1_eigo_16',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: 'Tom and I are friends. のTom and Iを1つの代名詞で言いかえると、どれになりますか。',
    answer: 'We',
    choices: ['We', 'They', 'You', 'It'],
    hint: '自分をふくむ複数の人を指す代名詞。',
    explanation:
      '【解説】\n自分（I）をふくむ複数の人を指す代名詞はwe（わたしたちは）。\nTom and Iは「トムとわたし」なので、We are friends. と言いかえられる。\n答え：We',
  },
  {
    id: 'grade_j1_eigo_17',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question:
      '次の文の（　）に入る語はどれですか。\nLook at that dog. (　) is very cute. （あの犬を見て。それはとてもかわいいです。）',
    answer: 'It',
    choices: ['It', 'He', 'She', 'They'],
    hint: '動物や物を指す代名詞。',
    explanation:
      '【解説】\n動物や物を指すときは代名詞itを使う。\n前の文のthat dog（あの犬）を指してIt is very cute.と言う。\n答え：It',
  },

  // ============================================================
  // 三人称単数現在形（-s） 6問 (18-23)
  // ============================================================
  {
    id: 'grade_j1_eigo_18',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '「彼はギターを弾きます。」を英語にすると？',
    answer: 'He plays the guitar.',
    choices: [
      'He plays the guitar.',
      'He play the guitar.',
      'He playing the guitar.',
      'He is play the guitar.',
    ],
    hint: '主語がheのときの一般動詞にはsをつける。',
    explanation:
      '【解説】\n主語がhe・she・it（3人称単数）のときは、現在形の一般動詞の最後にsをつける。\nplay→plays。\n答え：He plays the guitar.',
  },
  {
    id: 'grade_j1_eigo_19',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question:
      '次の文の（　）に入る語はどれですか。\nMy mother (　) breakfast every morning. （わたしの母は毎朝朝食を作ります。）',
    answer: 'cooks',
    choices: ['cooks', 'cook', 'cooking', 'to cook'],
    hint: '主語がMy mother（3人称単数）のときの動詞の形。',
    explanation:
      '【解説】\n主語がMy mother（彼女＝3人称単数）のときは動詞の最後にsをつける。\ncook→cooks。\n答え：cooks',
  },
  {
    id: 'grade_j1_eigo_20',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「彼女は魚を食べません。」を英語にすると？',
    answer: "She doesn't eat fish.",
    choices: [
      "She doesn't eat fish.",
      "She don't eat fish.",
      "She doesn't eats fish.",
      'She not eats fish.',
    ],
    hint: "主語が3人称単数の否定文はdoesn'tを使う。",
    explanation:
      "【解説】\n主語がhe・she・it（3人称単数）のときの一般動詞の否定文は、doesn't（does not）を動詞の前に置く。\ndoesn'tのあとの動詞は原形（eat）に戻すのでsはつけない。\n答え：She doesn't eat fish.",
  },
  {
    id: 'grade_j1_eigo_21',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question: '「トムは英語を話しますか。」を英語にすると？',
    answer: 'Does Tom speak English?',
    choices: [
      'Does Tom speak English?',
      'Do Tom speak English?',
      'Does Tom speaks English?',
      'Is Tom speak English?',
    ],
    hint: '主語が3人称単数の疑問文はDoesを使い、動詞は原形に戻す。',
    explanation:
      '【解説】\n主語がTom（3人称単数）のときの一般動詞の疑問文は、文の最初にDoesを置く。\nDoesがあるので、あとのspeakにはsをつけず原形のまま使う。\n答え：Does Tom speak English?',
    pitfall:
      'Doesを使ったら動詞にsをつけない、Doを使ったら動詞にもsをつけない、という2つのルールを混同しないこと。',
  },
  {
    id: 'grade_j1_eigo_22',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nShe (　) every day. （彼女は毎日勉強します。）',
    answer: 'studies',
    choices: ['studies', 'studys', 'studyes', "study's"],
    hint: '子音字＋yで終わる動詞は、yをiに変えてesをつける。',
    explanation:
      '【解説】\nstudy（勉強する）のように子音字＋yで終わる動詞は、3人称単数現在形にするときyをiに変えてesをつける。\nstudy→studies。\n答え：studies',
    memoryTip:
      '子音字＋y→yをiに変えてes（study→studies, try→tries）。母音字＋yのときはそのままs（play→plays）。',
  },
  {
    id: 'grade_j1_eigo_23',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question: '「彼はいつもバスで学校に行きます。」を英語にすると？',
    answer: 'He always goes to school by bus.',
    choices: [
      'He always goes to school by bus.',
      'He always go to school by bus.',
      'He goes always to school by bus.',
      'He always going to school by bus.',
    ],
    hint: 'goのように-oで終わる動詞にはesをつける。alwaysの位置にも注意。',
    explanation:
      '【解説】\ngo（行く）のようにo・s・x・ch・shで終わる動詞は、3人称単数現在形にするときesをつける。go→goes。\nalwaysのような頻度を表す語は、be動詞・助動詞のあとか一般動詞の前に置く。\n答え：He always goes to school by bus.',
    pitfall: 'alwaysをHe goes always...のように動詞のあとに置かないこと。',
  },

  // ============================================================
  // 現在進行形 6問 (24-29)
  // ============================================================
  {
    id: 'grade_j1_eigo_24',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '「私は今、テレビを見ています。」を英語にすると？',
    answer: 'I am watching TV now.',
    choices: [
      'I am watching TV now.',
      'I watch TV now.',
      'I watching TV now.',
      'I am watch TV now.',
    ],
    hint: '現在進行形はbe動詞＋動詞のing形。',
    explanation:
      '【解説】\n「今〜しています」という現在進行形は〈be動詞＋動詞のing形〉で表す。\n主語がIのときのbe動詞はam。watch→watching。\n答え：I am watching TV now.',
  },
  {
    id: 'grade_j1_eigo_25',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語句はどれですか。\nShe (　) a letter now. （彼女は今、手紙を書いています。）',
    answer: 'is writing',
    choices: ['is writing', 'writes', 'write', 'is write'],
    hint: '主語がSheのときの現在進行形の形。',
    explanation:
      '【解説】\n主語がshe（3人称単数）のときのbe動詞はis。\n「書く」write→ing形はwriting（eをとってing）。\nis writingとなる。\n答え：is writing',
  },
  {
    id: 'grade_j1_eigo_26',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「彼らは今、勉強していません。」を英語にすると？',
    answer: 'They are not studying now.',
    choices: [
      'They are not studying now.',
      "They don't studying now.",
      'They are not study now.',
      'They not are studying now.',
    ],
    hint: '現在進行形の否定文はbe動詞のあとにnotを置く。',
    explanation:
      '【解説】\n現在進行形の否定文は、be動詞のあとにnotを置く。\n〈be動詞＋not＋動詞のing形〉の形。\n答え：They are not studying now.',
  },
  {
    id: 'grade_j1_eigo_27',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたは今、走っていますか。」を英語にすると？',
    answer: 'Are you running now?',
    choices: [
      'Are you running now?',
      'Do you running now?',
      'Are you run now?',
      'You are running now?',
    ],
    hint: '現在進行形の疑問文はbe動詞を主語の前に出す。',
    explanation:
      '【解説】\n現在進行形の疑問文は、be動詞を主語の前に出す。\n〈Be動詞＋主語＋動詞のing形〜?〉の形。\n答え：Are you running now?',
  },
  {
    id: 'grade_j1_eigo_28',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nHe is (　) now. （彼は今、走っています。）',
    answer: 'running',
    choices: ['running', 'runing', 'runeing', 'runnning'],
    hint: '短母音＋子音字で終わる動詞は、子音字を重ねてingをつける。',
    explanation:
      '【解説】\nrun（走る）のように〈短い母音字＋子音字〉で終わる動詞は、ing形にするとき子音字を重ねてingをつける。\nrun→running（nを重ねる）。\n答え：running',
    memoryTip:
      'run→running、swim→swimming、sit→sittingのように、最後の文字を重ねてからingをつける動詞に注意。',
  },
  {
    id: 'grade_j1_eigo_29',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: 'Is he swimming now? に対して「はい、泳いでいます」と答える正しい文はどれですか。',
    answer: 'Yes, he is.',
    choices: ['Yes, he is.', 'Yes, he does.', 'Yes, he swims.', 'Yes, he do.'],
    hint: '現在進行形の疑問文にはbe動詞を使って答える。',
    explanation:
      "【解説】\nIs he 〜ing? とたずねられたら、Yes, he is. またはNo, he isn't. のようにbe動詞を使って答える。\n答え：Yes, he is.",
  },

  // ============================================================
  // 命令文 4問 (30-33)
  // ============================================================
  {
    id: 'grade_j1_eigo_30',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '「立ちなさい。」を英語にすると？',
    answer: 'Stand up.',
    choices: ['Stand up.', 'You stand up.', 'Standing up.', 'You are stand up.'],
    hint: '命令文は主語を省略して動詞の原形で始める。',
    explanation:
      '【解説】\n「〜しなさい」という命令文は、主語（you）を省略して動詞の原形で文を始める。\n答え：Stand up.',
  },
  {
    id: 'grade_j1_eigo_31',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「ここで走ってはいけません。」を英語にすると？',
    answer: "Don't run here.",
    choices: [
      "Don't run here.",
      "You don't run here.",
      'Not run here.',
      "Doesn't run here.",
    ],
    hint: "「〜してはいけません」はDon'tで文を始める。",
    explanation:
      "【解説】\n「〜してはいけません」という否定の命令文は、文の最初にDon'tを置き、あとに動詞の原形を続ける。\n答え：Don't run here.",
  },
  {
    id: 'grade_j1_eigo_32',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「静かにしてください。」を英語にすると？',
    answer: 'Please be quiet.',
    choices: [
      'Please be quiet.',
      'Please are quiet.',
      'Please is quiet.',
      'Please being quiet.',
    ],
    hint: 'be動詞の命令文はbeを使う。',
    explanation:
      '【解説】\nbe動詞を使った命令文は、amやisやareではなく原形のbeを使う。\nPlease be quiet. で「静かにしてください」というていねいな命令文になる。\n答え：Please be quiet.',
    pitfall: '命令文でbe動詞を使うときは必ずbeの形にする。areやisをそのまま使わないこと。',
  },
  {
    id: 'grade_j1_eigo_33',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question: '命令文として正しい英文はどれですか。（「窓を閉めなさい」という意味）',
    answer: 'Close the window.',
    choices: [
      'Close the window.',
      'You close the window.',
      'Closes the window.',
      'Closing the window.',
    ],
    hint: '命令文は主語を省略し、動詞は原形。',
    explanation:
      '【解説】\n命令文は主語（you）を省略し、動詞は原形（sやingをつけない形）で文を始める。\n答え：Close the window.',
  },

  // ============================================================
  // 助動詞can 5問 (34-38)
  // ============================================================
  {
    id: 'grade_j1_eigo_34',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '「私はピアノを弾くことができます。」を英語にすると？',
    answer: 'I can play the piano.',
    choices: [
      'I can play the piano.',
      'I can plays the piano.',
      'I can to play the piano.',
      'I am can play the piano.',
    ],
    hint: 'canのあとの動詞はいつも原形。',
    explanation:
      '【解説】\n「〜することができる」はcanのあとに動詞の原形を続けて表す。\ncanのあとにはtoをつけず、sもつけない。\n答え：I can play the piano.',
  },
  {
    id: 'grade_j1_eigo_35',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nHe (　) speak French. （彼はフランス語を話すことができません。）',
    answer: "can't",
    choices: ["can't", "doesn't", "isn't", 'not'],
    hint: 'canの否定形。',
    explanation:
      "【解説】\n「〜することができない」はcan't（cannot）のあとに動詞の原形を続けて表す。\n答え：can't",
  },
  {
    id: 'grade_j1_eigo_36',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたは自転車に乗れますか。」を英語にすると？',
    answer: 'Can you ride a bike?',
    choices: [
      'Can you ride a bike?',
      'Do you can ride a bike?',
      'Are you can ride a bike?',
      'You can ride a bike?',
    ],
    hint: 'canの疑問文はcanを主語の前に出す。',
    explanation:
      '【解説】\ncanを使った疑問文は、文の最初にCanを置いてCan you 〜?の形にする。\n答え：Can you ride a bike?',
  },
  {
    id: 'grade_j1_eigo_37',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: 'Can she cook well? に対して「いいえ、できません」と答える正しい文はどれですか。',
    answer: "No, she can't.",
    choices: ["No, she can't.", "No, she doesn't.", "No, she isn't.", 'No, she not.'],
    hint: 'Can 〜?にはcanを使って答える。',
    explanation:
      "【解説】\nCan 〜? とたずねられたら、Yes, 〜 can. またはNo, 〜 can't. のようにcanを使って答える。\n答え：No, she can't.",
  },
  {
    id: 'grade_j1_eigo_38',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question:
      '次の文の（　）に入る語はどれですか。\nMy sister can (　) very fast. （わたしの姉はとても速く走ることができます。）',
    answer: 'run',
    choices: ['run', 'runs', 'running', 'ran'],
    hint: '主語が3人称単数でもcanのあとの動詞は原形のまま。',
    explanation:
      '【解説】\n主語がMy sister（3人称単数）であっても、canのあとの動詞はいつも原形。3人称単数のsはつけない。\n答え：run',
    pitfall: 'be動詞の文とちがい、canのあとの動詞には3人称単数のsをつけないことに注意。',
  },

  // ============================================================
  // 疑問詞（what/who/when/where/why/how） 6問 (39-44)
  // ============================================================
  {
    id: 'grade_j1_eigo_39',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたは何のスポーツが好きですか。」を英語にすると？',
    answer: 'What sport do you like?',
    choices: [
      'What sport do you like?',
      'What sport you like?',
      'Do you like what sport?',
      'What sport are you like?',
    ],
    hint: '「何の〜」はWhatのすぐあとに名詞を続ける。',
    explanation:
      '【解説】\n「何の〜が好きですか」とたずねるときは、Whatのすぐあとに名詞（sport）を続け、そのあとにdo you like?を続ける。\n答え：What sport do you like?',
  },
  {
    id: 'grade_j1_eigo_40',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\n(　) has this book? （誰がこの本を持っていますか。）',
    answer: 'Who',
    choices: ['Who', 'Whose', 'What', 'Which'],
    hint: '「誰が」とたずねる疑問詞。',
    explanation:
      '【解説】\n「誰が〜しますか」と主語をたずねるときはWhoを使う。\nWhoが主語になるときは、動詞に3人称単数のsをつける（has）。\n答え：Who',
  },
  {
    id: 'grade_j1_eigo_41',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたはいつ晩ご飯を食べますか。」を英語にすると？',
    answer: 'When do you eat dinner?',
    choices: [
      'When do you eat dinner?',
      'When you eat dinner?',
      'You eat dinner when?',
      'When are you eat dinner?',
    ],
    hint: '「いつ」をたずねる疑問詞のあとに疑問文の形を続ける。',
    explanation:
      '【解説】\n「いつ〜しますか」とたずねるときはWhenのあとにdo you 〜?の疑問文の形を続ける。\n答え：When do you eat dinner?',
  },
  {
    id: 'grade_j1_eigo_42',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '「図書館はどこにありますか。」を英語にすると？',
    answer: 'Where is the library?',
    choices: [
      'Where is the library?',
      'Where the library is?',
      'The library is where?',
      'Where does the library?',
    ],
    hint: '「どこ」をたずねる疑問詞のあとにbe動詞の疑問文の形を続ける。',
    explanation:
      '【解説】\n「どこに〜がありますか」とたずねるときはWhereのあとにbe動詞の疑問文の形（is the library）を続ける。\n答え：Where is the library?',
  },
  {
    id: 'grade_j1_eigo_43',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたはなぜ英語を勉強するのですか。」を英語にすると？',
    answer: 'Why do you study English?',
    hint: '「なぜ」をたずねる疑問詞のあとに疑問文の形を続ける。',
    explanation:
      '【解説】\n「なぜ〜するのですか」と理由をたずねるときはWhyのあとにdo you 〜?の疑問文の形を続ける。\n答えるときはBecause 〜.（なぜなら〜だから）で理由を言う。\n答え：Why do you study English?',
  },
  {
    id: 'grade_j1_eigo_44',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    question: '「あなたはどうやって学校に行きますか。」を英語にすると？',
    answer: 'How do you go to school?',
    hint: '「どうやって」をたずねる疑問詞のあとに疑問文の形を続ける。',
    explanation:
      '【解説】\n「どうやって〜しますか」と方法をたずねるときはHowのあとにdo you 〜?の疑問文の形を続ける。\n答え：How do you go to school?',
  },

  // ============================================================
  // 基本的な前置詞 3問 (45-47)
  // ============================================================
  {
    id: 'grade_j1_eigo_45',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nThe cat is (　) the box. （ネコは箱の中にいます。）',
    answer: 'in',
    choices: ['in', 'on', 'at', 'to'],
    hint: '「〜の中に」を表す前置詞。',
    explanation:
      '【解説】\n「〜の中に」という位置は前置詞inで表す。\nThe cat is in the box. で「ネコは箱の中にいます」という文になる。\n答え：in',
  },
  {
    id: 'grade_j1_eigo_46',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nThe book is (　) the table. （その本はテーブルの上にあります。）',
    answer: 'on',
    choices: ['on', 'in', 'at', 'under'],
    hint: '「〜の上に」を表す前置詞。',
    explanation:
      '【解説】\n「（表面に接して）〜の上に」という位置は前置詞onで表す。\nThe book is on the table. で「その本はテーブルの上にあります」という文になる。\n答え：on',
    pitfall: 'inは「〜の中に」、onは「〜の上に（接触して）」、atは「〜の地点で」と使い分ける。',
  },
  {
    id: 'grade_j1_eigo_47',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    question: '次の文の（　）に入る語はどれですか。\nSchool starts (　) 8:30. （学校は8時30分に始まります。）',
    answer: 'at',
    choices: ['at', 'in', 'on', 'to'],
    hint: '時刻を表すときに使う前置詞。',
    explanation:
      '【解説】\n「〜時に」という時刻を表すときは前置詞atを使う。\nSchool starts at 8:30. で「学校は8時30分に始まります」という文になる。\n答え：at',
  },

  // ============================================================
  // 短い英文の読解 3問 (48-50)
  // ============================================================
  {
    id: 'grade_j1_eigo_48',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    passage:
      'My name is Yuki. I am twelve years old. I live in Osaka with my family. I like tennis very much.',
    question: '次の英文を読んで、質問に答えなさい。\n質問：Where does Yuki live?',
    answer: 'Osaka（大阪）',
    hint: 'I live in 〜.の部分に注目する。',
    explanation:
      '【解説】\nI live in Osaka with my family. は「わたしは家族といっしょに大阪に住んでいます」という意味。\nliveは「住む」という一般動詞。\n答え：Osaka（大阪）',
  },
  {
    id: 'grade_j1_eigo_49',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'koko',
    grade: GRADE,
    passage:
      'This is Mike. He is from Canada. He is a new student in our class. He can speak Japanese a little.',
    question: '次の英文を読んで、質問に答えなさい。\n質問：Mikeはどこの出身ですか。',
    answer: 'カナダ（Canada）',
    hint: 'He is from 〜.の部分に注目する。',
    explanation:
      '【解説】\nHe is from Canada. は「彼はカナダ出身です」という意味。\n〈be動詞＋from＋場所〉で出身地を表す。\n答え：カナダ（Canada）',
  },
  {
    id: 'grade_j1_eigo_50',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    grade: GRADE,
    passage:
      'Look at this picture. My sister is cooking in the kitchen now. My father is reading a newspaper. I am doing my homework.',
    question: '次の英文を読んで、質問に答えなさい。\n質問：妹（sister）は今、何をしていますか。',
    answer: '料理をしている（cooking / is cooking）',
    hint: 'My sister is 〜ing now.の部分に注目する。',
    explanation:
      '【解説】\nMy sister is cooking in the kitchen now. は「わたしの妹は今、台所で料理をしています」という意味。\n現在進行形〈be動詞＋動詞のing形〉で「今〜している最中だ」という動作を表す。\n答え：料理をしている（cooking / is cooking）',
  },
];
