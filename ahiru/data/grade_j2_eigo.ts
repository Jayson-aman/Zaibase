import type { Question } from './questions-meta';

// 中学2年生・英語（eigo）の新規オリジナル問題50問。
// 範囲：過去形（規則・不規則動詞）／過去進行形／未来表現（will・be going to）／
//       助動詞（must・have to・should等）／不定詞（名詞的・副詞的・形容詞的用法）／
//       動名詞／比較級・最上級／接続詞（when・if・because・that）／
//       文型（SVOO・SVOCの基礎）
// すべて grade: 'j2'、examType: 'koko'。
export const gradeJ2EigoQuestions: Question[] = [
  // ============================================================
  // 過去形（規則動詞） 5問 (01-05)
  // ============================================================
  {
    id: 'grade_j2_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI (　) soccer with my friends yesterday. （わたしは昨日、友だちとサッカーをしました。）',
    answer: 'played',
    choices: ['played', 'plays', 'playing', 'play'],
    hint: '規則動詞の過去形はedをつける。',
    explanation:
      '【解説】\n規則動詞の過去形は動詞の原形にedをつけて作る。play→played。\nyesterday（昨日）があるので過去の文だとわかる。\n答え：played',
  },
  {
    id: 'grade_j2_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nShe (　) her room last Sunday. （彼女はこの前の日曜日に部屋をそうじしました。）',
    answer: 'cleaned',
    choices: ['cleaned', 'cleans', 'cleaning', 'clean'],
    hint: 'clean（そうじする）の過去形。',
    explanation:
      '【解説】\ncleanのような規則動詞はedをつけて過去形にする。clean→cleaned。\nlast Sunday（この前の日曜日）から過去の文だとわかる。\n答え：cleaned',
  },
  {
    id: 'grade_j2_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「勉強した」という意味になるように、studyを過去形にした正しいつづりはどれですか。',
    answer: 'studied',
    choices: ['studied', 'studyed', 'studies', 'studieed'],
    hint: 'yで終わる動詞は、yをiに変えてedをつける。',
    explanation:
      '【解説】\n子音字+yで終わる動詞は、yをiに変えてからedをつける。study→studi+ed→studied。\nstudiesは3人称単数現在形なので過去形ではない。\n答え：studied',
    pitfall: 'studyedのようにyをそのままにしてedをつけるミスが多いので注意。',
  },
  {
    id: 'grade_j2_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nI didn't (　) TV last night. （わたしは昨夜テレビを見ませんでした。）",
    answer: 'watch',
    choices: ['watch', 'watched', 'watches', 'watching'],
    hint: "didn'tのあとの動詞は原形にする。",
    explanation:
      "【解説】\n過去の否定文は didn't（did not）のあとに動詞の原形を続ける。過去形にしない。\nwatch→そのままの形で使う。\n答え：watch",
    pitfall:
      "didn'tのあとにwatchedと過去形のままにしてしまうミスに注意。didn'tの中にすでに過去の意味が入っている。",
  },
  {
    id: 'grade_j2_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '次の文を「〜しませんでした」という否定文に書きかえなさい。\nHe cleaned his room.',
    answer: "He didn't clean his room.",
    hint: "一般動詞の過去の否定文は didn't + 動詞の原形。",
    explanation:
      "【解説】\n過去の否定文は主語のあとに didn't を置き、動詞を原形にもどす。\ncleaned（過去形）→ clean（原形）にして didn't clean とする。\n答え：He didn't clean his room.",
  },

  // ============================================================
  // 過去形（不規則動詞） 5問 (06-10)
  // ============================================================
  {
    id: 'grade_j2_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI (　) to Kyoto last summer. （わたしは去年の夏、京都に行きました。）',
    answer: 'went',
    choices: ['went', 'goed', 'gone', 'going'],
    hint: 'goの過去形は不規則に変化する。',
    explanation:
      '【解説】\ngo（行く）の過去形は不規則動詞で went になる。edをつけるのではないので注意。\n答え：went',
    pitfall: 'goedと間違えて答えないように。goは不規則動詞。',
  },
  {
    id: 'grade_j2_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nWe (　) a great time at the party. （わたしたちはパーティーで楽しい時間を過ごしました。）',
    answer: 'had',
    choices: ['had', 'haved', 'have', 'having'],
    hint: 'haveの過去形は不規則に変化する。',
    explanation:
      '【解説】\nhave（〜を過ごす、持っている）の過去形は不規則動詞で had になる。\n答え：had',
  },
  {
    id: 'grade_j2_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nMy mother (　) a new bag last week. （母は先週、新しいかばんを買いました。）',
    answer: 'bought',
    choices: ['bought', 'buyed', 'buys', 'buying'],
    hint: 'buyの過去形は不規則に変化する。',
    explanation:
      '【解説】\nbuy（買う）の過去形は不規則動詞で bought になる。\n答え：bought',
  },
  {
    id: 'grade_j2_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nWe (　) a beautiful sunset yesterday evening. （わたしたちは昨日の夕方、美しい夕日を見ました。）',
    answer: 'saw',
    choices: ['saw', 'seed', 'seen', 'sawed'],
    hint: 'seeの過去形は不規則に変化する。',
    explanation:
      '【解説】\nsee（見る）の過去形は不規則動詞で saw になる。seenは過去分詞形で、過去形としては使わない。\n答え：saw',
    pitfall: 'seenを過去形として使ってしまうミスに注意。seenはhave/hasと組み合わせて使う過去分詞形。',
  },
  {
    id: 'grade_j2_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    passage:
      'Last Saturday, Mika went to the zoo with her family. She saw many animals and took a lot of pictures there. In the afternoon, they ate lunch at a small restaurant near the zoo. After lunch, Mika bought a T-shirt with a panda on it. She had a really great day.',
    question: '次の英文を読んで、質問に答えなさい。\n質問：What did Mika buy at the zoo?',
    answer: 'a T-shirt with a panda on it（パンダの絵が描かれたTシャツ）',
    hint: '「Mika bought」に続く部分に注目する。',
    explanation:
      '【解説】\n本文中の Mika bought a T-shirt with a panda on it. の部分に注目する。boughtはbuy（買う）の過去形。\nこの文から、ミカが動物園の帰りに買ったのは「パンダの絵が描かれたTシャツ」だとわかる。\n答え：a T-shirt with a panda on it（パンダの絵が描かれたTシャツ）',
  },

  // ============================================================
  // 過去進行形 4問 (11-14)
  // ============================================================
  {
    id: 'grade_j2_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI (　) TV when you called me. （あなたが電話をくれたとき、わたしはテレビを見ているところでした。）',
    answer: 'was watching',
    choices: ['was watching', 'watched', 'am watching', 'watching'],
    hint: '「〜しているところだった」は be動詞の過去形+動詞のing形。',
    explanation:
      '【解説】\n「〜しているところだった」という過去のある時点で進行中だった動作は、過去進行形（was/were+動詞のing形）で表す。主語がIなのでbe動詞はwasを使う。\n答え：was watching',
  },
  {
    id: 'grade_j2_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThey (　) soccer in the park at that time. （そのとき、彼らは公園でサッカーをしているところでした。）',
    answer: 'were playing',
    choices: ['were playing', 'was playing', 'played', 'are playing'],
    hint: '主語がTheyのときのbe動詞の過去形はwere。',
    explanation:
      '【解説】\n過去進行形は be動詞の過去形+動詞のing形で表す。主語がThey（3人称複数）のときのbe動詞の過去形はwere。\n答え：were playing',
    pitfall: '主語がheやsheのときはwas、theyやweのときはwereを使う。混同しないこと。',
  },
  {
    id: 'grade_j2_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の文を「〜していませんでした」という過去進行形の否定文に書きかえなさい。\nThey were studying then.',
    answer: "They weren't studying then.",
    hint: '過去進行形の否定文はbe動詞のあとにnotを置く。',
    explanation:
      "【解説】\n過去進行形の否定文は、be動詞（was/were）のあとに not を置いて表す。wereのあとにnotをつけて weren't（were not）とする。\n答え：They weren't studying then.",
  },
  {
    id: 'grade_j2_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nWhen the phone rang, I (　) dinner in the kitchen. （電話が鳴ったとき、わたしは台所で夕食を作っているところでした。）',
    answer: 'was cooking',
    choices: ['was cooking', 'cooked', 'cook', 'cooking'],
    hint: '「〜していたときに、別の動作が起きた」という文では、進行中の動作を過去進行形で表す。',
    explanation:
      '【解説】\n「〜しているときに…が起きた」という文では、「〜していた（進行中の動作）」を過去進行形、「…が起きた（一瞬の出来事）」を過去形で表すことが多い。ここでは rang（過去形）が一瞬の出来事、料理していたことが進行中の動作なので was cooking が正しい。\n答え：was cooking',
    memoryTip: 'When+過去形の文, 主語+was/were+〜ing. の形をセットで覚える。',
  },

  // ============================================================
  // 未来表現（will / be going to） 5問 (15-19)
  // ============================================================
  {
    id: 'grade_j2_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る単語はどれですか。\nI (　) call you tomorrow. （わたしは明日あなたに電話します。）',
    answer: 'will',
    choices: ['will', 'am', 'do', 'was'],
    hint: '未来のことを表す助動詞。',
    explanation:
      '【解説】\n「〜するつもりだ、〜するだろう」という未来のことは will のあとに動詞の原形を続けて表す。\n答え：will',
  },
  {
    id: 'grade_j2_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る単語はどれですか。\nWe (　) going to visit Kyoto next week. （わたしたちは来週京都を訪れる予定です。）',
    answer: 'are',
    choices: ['are', 'is', 'will', 'was'],
    hint: '主語がWeのときのbe動詞。',
    explanation:
      '【解説】\n「〜する予定だ」というすでに決まっている予定は be going to で表す。主語がWeのときのbe動詞は are。\n答え：are',
  },
  {
    id: 'grade_j2_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「彼女は来週、新しいカバンを買うつもりです。」を表す正しい英文はどれですか。',
    answer: 'She is going to buy a new bag next week.',
    choices: [
      'She is going to buy a new bag next week.',
      'She is going to buys a new bag next week.',
      'She going to buy a new bag next week.',
      'She is buy going to a new bag next week.',
    ],
    hint: 'be going toのあとの動詞は原形。',
    explanation:
      '【解説】\n「〜するつもりだ」という前から決めていた予定は be going to + 動詞の原形 で表す。主語がsheなのでbe動詞はis。\n答え：She is going to buy a new bag next week.',
  },
  {
    id: 'grade_j2_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      "次の文の（　）に入る単語はどれですか。\nIt's cold in here. I (　) close the window. （ここは寒いですね。窓を閉めます。）",
    answer: 'will',
    choices: ['will', 'am going to', 'was', 'do'],
    hint: 'その場で決めたことを言うときはwillを使う。',
    explanation:
      '【解説】\nその場で思いついてすぐに決めたことを言うときは will を使う。一方、be going to は前もって決めていた予定に使う。ここでは「今、寒いと気づいて」その場で窓を閉めることを決めているので will が正しい。\n答え：will',
    pitfall: 'will（その場での決定）とbe going to（前からの予定）の使い分けに注意。',
  },
  {
    id: 'grade_j2_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nLook at those clouds! It (　) rain soon. （あの雲を見て！もうすぐ雨が降りそうです。）',
    answer: 'is going to',
    choices: ['is going to', 'will', 'was going to', 'is will'],
    hint: '目の前の証拠から判断する予測はbe going toを使う。',
    explanation:
      '【解説】\n目の前に見えている証拠（雲）をもとにした予測は be going to を使うことが多い。ここでは黒い雲を見て「雨が降りそうだ」と予測しているので is going to が正しい。\n答え：is going to',
  },

  // ============================================================
  // 助動詞（must / have to / should） 5問 (20-24)
  // ============================================================
  {
    id: 'grade_j2_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '「あなたはここで静かにしなければなりません。」を表す正しい英文はどれですか。',
    answer: 'You must be quiet here.',
    choices: [
      'You must be quiet here.',
      'You must to be quiet here.',
      'You musts be quiet here.',
      'You must being quiet here.',
    ],
    hint: 'mustのあとの動詞は原形。toはつけない。',
    explanation:
      '【解説】\n「〜しなければならない」は助動詞 must のあとに動詞の原形を続けて表す。mustのあとに to をつけないことに注意。\n答え：You must be quiet here.',
  },
  {
    id: 'grade_j2_eigo_21',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「彼は毎朝早く起きなければなりません。」を表す正しい英文はどれですか。',
    answer: 'He has to get up early every morning.',
    choices: [
      'He has to get up early every morning.',
      'He have to get up early every morning.',
      'He has to gets up early every morning.',
      'He must to get up early every morning.',
    ],
    hint: '主語が3人称単数（he）のときはhave toではなくhas toを使う。',
    explanation:
      '【解説】\n「〜しなければならない」はhave toでも表せる。主語がhe・she・itなど3人称単数のときはhaveをhasに変えてhas toとする。has toのあとの動詞は原形。\n答え：He has to get up early every morning.',
    pitfall: '主語が3人称単数でもmustはmustsのように変化しないが、have toはhas toに変化する点に注意。',
  },
  {
    id: 'grade_j2_eigo_22',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '「あなたはもっと野菜を食べるべきです。」を表す正しい英文はどれですか。',
    answer: 'You should eat more vegetables.',
    choices: [
      'You should eat more vegetables.',
      'You should eats more vegetables.',
      'You should to eat more vegetables.',
      'You are should eat more vegetables.',
    ],
    hint: '「〜すべきだ」というアドバイスを表す助動詞。',
    explanation:
      '【解説】\n「〜すべきだ」というアドバイスは助動詞 should を使う。shouldのあとの動詞は原形で、toはつけない。\n答え：You should eat more vegetables.',
  },
  {
    id: 'grade_j2_eigo_23',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nYou (　) touch that stove. It's very hot. （そのストーブにさわってはいけません。とても熱いです。）",
    answer: 'must not',
    choices: ['must not', "don't have to", 'should', "can't"],
    hint: '「〜してはいけない」という禁止を表す言い方。',
    explanation:
      "【解説】\n「〜してはいけない」という禁止は must not（mustn't）で表す。don't have to は「〜する必要がない」という意味で、禁止の意味にはならないので注意。\n答え：must not",
    pitfall:
      "must not（してはいけない＝禁止）と don't have to（する必要がない＝不必要）の意味のちがいを混同しないこと。",
  },
  {
    id: 'grade_j2_eigo_24',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nYou (　) come to the party if you are busy. It's not necessary. （もし忙しいなら、パーティーに来る必要はありません。）",
    answer: "don't have to",
    choices: ["don't have to", 'must not', 'should', "can't"],
    hint: '「〜する必要がない」を表す言い方。',
    explanation:
      "【解説】\n「〜する必要がない」という意味はdon't have toで表す。文の最後にIt's not necessary.（それは必要ではありません）とあることから、禁止ではなく不必要の意味が入るとわかる。\n答え：don't have to",
  },

  // ============================================================
  // 不定詞（名詞的・副詞的・形容詞的用法） 6問 (25-30)
  // ============================================================
  {
    id: 'grade_j2_eigo_25',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI want (　) a doctor in the future. （わたしは将来、医者になりたいです。）',
    answer: 'to be',
    choices: ['to be', 'being', 'be', 'been'],
    hint: 'want のあとには〈to+動詞の原形〉が続く。',
    explanation:
      '【解説】\nwant to 〜（〜したい）は不定詞の名詞的用法で、want のあとに〈to+動詞の原形〉を続ける。\n答え：to be',
  },
  {
    id: 'grade_j2_eigo_26',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nShe went to the library (　) some books. （彼女は本を借りるために図書館へ行きました。）',
    answer: 'to borrow',
    choices: ['to borrow', 'borrowing', 'borrow', 'borrowed'],
    hint: '「〜するために」は不定詞の副詞的用法で表す。',
    explanation:
      '【解説】\n「〜するために」という目的を表すときは不定詞の副詞的用法〈to+動詞の原形〉を使う。\n答え：to borrow',
  },
  {
    id: 'grade_j2_eigo_27',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI have a lot of homework (　) today. （わたしは今日やるべき宿題がたくさんあります。）',
    answer: 'to do',
    choices: ['to do', 'doing', 'did', 'done'],
    hint: '名詞のすぐあとに〈to+動詞の原形〉を続けて「〜するための、〜すべき」という意味を表す。',
    explanation:
      '【解説】\n不定詞の形容詞的用法は、名詞のすぐあとに〈to+動詞の原形〉を続けて「〜するための、〜すべき」という意味を表す。ここではhomework（宿題）を後ろから修飾している。\n答え：to do',
  },
  {
    id: 'grade_j2_eigo_28',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\n(　) English every day is important for you. （毎日英語を勉強することはあなたにとって大切です。）',
    answer: 'To study',
    choices: ['To study', 'Studying', 'Study', 'Studied'],
    hint: '文の最初で主語になる不定詞は〈To+動詞の原形〉の形。大文字で始める。',
    explanation:
      '【解説】\n不定詞の名詞的用法は文の主語にもなれる。文の最初に来るので、Toの最初の文字は大文字にする。\n動名詞（Studying）を使っても似た意味を表せるが、この問題では不定詞の形を選ぶ。\n答え：To study',
  },
  {
    id: 'grade_j2_eigo_29',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI was happy (　) the good news. （わたしはその良い知らせを聞いてうれしかったです。）',
    answer: 'to hear',
    choices: ['to hear', 'hearing', 'hear', 'heard'],
    hint: '感情の原因を表す不定詞の副詞的用法。',
    explanation:
      '【解説】\nhappy などの感情を表す形容詞のあとに〈to+動詞の原形〉を続けると、「〜して（感情の原因）」という意味になる。これも不定詞の副詞的用法の1つ。\n答え：to hear',
  },
  {
    id: 'grade_j2_eigo_30',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の日本語を「It is ... for ... to ...」の形を使って英語にしなさい。\nこの本を読むことは、わたしにとって難しいです。',
    answer: 'It is difficult for me to read this book.',
    hint: '「〜することは…にとって〜だ」は It is 〜 for 人 to 〜. の形で表す。',
    explanation:
      '【解説】\n「〜することは…にとって〜だ」というときは、〈It is+形容詞+for+人+to+動詞の原形〉の形を使う。Itはあとに続く to read this book（この本を読むこと）を指す形式上の主語。\n答え：It is difficult for me to read this book.',
  },

  // ============================================================
  // 動名詞 5問 (31-35)
  // ============================================================
  {
    id: 'grade_j2_eigo_31',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI enjoy (　) tennis with my friends. （わたしは友だちとテニスをするのを楽しみます。）',
    answer: 'playing',
    choices: ['playing', 'to play', 'play', 'played'],
    hint: 'enjoyのあとには動名詞（〜ing）が続く。',
    explanation:
      '【解説】\nenjoy（〜を楽しむ）のあとには動名詞（動詞のing形）を続ける。enjoyは不定詞を目的語にとらない動詞なので注意。\n答え：playing',
    pitfall: 'enjoy to playとしないこと。enjoyのあとは必ずing形。',
  },
  {
    id: 'grade_j2_eigo_32',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nShe is good at (　) pictures. （彼女は絵を描くのが得意です。）',
    answer: 'drawing',
    choices: ['drawing', 'draw', 'to draw', 'drew'],
    hint: '前置詞atのあとには動名詞が続く。',
    explanation:
      '【解説】\n前置詞（at, in, of など）のあとに動詞を続けるときは、動名詞（〜ing）の形にする。be good at 〜ing で「〜するのが得意だ」という意味。\n答え：drawing',
  },
  {
    id: 'grade_j2_eigo_33',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\n(　) in the sea is a lot of fun. （海で泳ぐことはとても楽しいです。）',
    answer: 'Swimming',
    choices: ['Swimming', 'Swim', 'To swimming', 'Swam'],
    hint: '文の主語になる動名詞は文の最初に来て大文字で始める。',
    explanation:
      '【解説】\n動名詞（動詞のing形）は名詞と同じように文の主語になれる。文の最初に来るのでSの文字は大文字にする。\n答え：Swimming',
  },
  {
    id: 'grade_j2_eigo_34',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nHe finished (　) his homework before dinner. （彼は夕食前に宿題をやり終えました。）',
    answer: 'doing',
    choices: ['doing', 'to do', 'do', 'did'],
    hint: 'finishのあとには動名詞だけが続き、不定詞は続かない。',
    explanation:
      '【解説】\nfinish（〜し終える）のあとには動名詞（〜ing）だけを続けることができ、不定詞（to+動詞の原形）は続けられない。\n答え：doing',
    pitfall: 'finish to doとは言わない。finishのあとはing形のみ。',
  },
  {
    id: 'grade_j2_eigo_35',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '「彼は手紙を書くのをやめました。」という意味になる正しい英文はどれですか。',
    answer: 'He stopped writing a letter.',
    choices: [
      'He stopped writing a letter.',
      'He stopped to write a letter.',
      'He stopped write a letter.',
      'He stopped to writing a letter.',
    ],
    hint: 'stop+動名詞は「〜するのをやめる」、stop+to不定詞は「〜するために立ち止まる」という別の意味になる。',
    explanation:
      '【解説】\nstop+動名詞（stop writing）は「〜するのをやめる」という意味。一方、stop+to不定詞（stop to write）は「〜するために立ち止まる」という別の意味になるので注意。ここでは「手紙を書くのをやめた」なので stopped writing が正しい。\n答え：He stopped writing a letter.',
    pitfall: 'stop to writeにすると「（歩くのを）やめて手紙を書く（＝そのために立ち止まる）」という別の意味になってしまう。',
  },

  // ============================================================
  // 比較級・最上級 6問 (36-41)
  // ============================================================
  {
    id: 'grade_j2_eigo_36',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '次の文の（　）に入る正しい形はどれですか。\nTom is (　) than Ken. （トムはケンより背が高いです。）',
    answer: 'taller',
    choices: ['taller', 'more tall', 'tallest', 'tall'],
    hint: '短い形容詞の比較級はerをつける。',
    explanation:
      '【解説】\ntallのような短い（1〜2音節の）形容詞の比較級は、語尾にerをつけて作る。tall→taller。\nmore tallとは言わないので注意。\n答え：taller',
  },
  {
    id: 'grade_j2_eigo_37',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis is the (　) mountain in Japan. （これは日本でいちばん高い山です。）',
    answer: 'highest',
    choices: ['highest', 'high', 'higher', 'most high'],
    hint: '最上級は語尾にestをつけて、前にtheを置く。',
    explanation:
      '【解説】\n短い形容詞の最上級は語尾にestをつけて作り、前にtheを置く。high→highest。the highest mountain in Japanで「日本でいちばん高い山」という意味になる。\n答え：highest',
  },
  {
    id: 'grade_j2_eigo_38',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis cake is (　) than that one. （このケーキはあのケーキより良いです。）',
    answer: 'better',
    choices: ['better', 'gooder', 'best', 'more good'],
    hint: 'goodの比較級は不規則に変化する。',
    explanation:
      '【解説】\ngood（良い）の比較級は不規則に変化してbetterになる。gooderとは言わない。\ngood-better-bestの変化の形を覚えておく。\n答え：better',
    memoryTip: 'good-better-best（良い・より良い・いちばん良い）はセットで覚える。',
  },
  {
    id: 'grade_j2_eigo_39',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      "次の文の（　）に入る正しい形はどれですか。\nToday's weather is (　) than yesterday's. （今日の天気は昨日より悪いです。）",
    answer: 'worse',
    choices: ['worse', 'more bad', 'worst', 'badder'],
    hint: 'badの比較級は不規則に変化する。',
    explanation:
      '【解説】\nbad（悪い）の比較級は不規則に変化してworseになる。badder、more badとは言わない。\nbad-worse-worstの変化の形を覚えておく。\n答え：worse',
  },
  {
    id: 'grade_j2_eigo_40',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis question is (　) than that one. （この問題はあの問題より難しいです。）',
    answer: 'more difficult',
    choices: ['more difficult', 'difficulter', 'most difficult', 'difficult'],
    hint: 'difficultのようにつづりの長い形容詞の比較級はmoreを前に置く。',
    explanation:
      '【解説】\ndifficult（難しい）のようにつづりが長い（2音節以上の）形容詞は、語尾にerをつけずに、前にmoreを置いて比較級を作る。\n答え：more difficult',
    pitfall: 'difficulterのように語尾にerをつけてしまうミスに注意。長い形容詞はmoreを使う。',
  },
  {
    id: 'grade_j2_eigo_41',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '次の日本語を「as ... as」を使って英語にしなさい。\nこの本はあの本と同じくらいおもしろいです。',
    answer: 'This book is as interesting as that one.',
    hint: '「〜と同じくらい…だ」は as+形容詞+as で表す。',
    explanation:
      '【解説】\n「〜と同じくらい…だ」というときは〈as+形容詞（原級）+as〉の形を使う。形容詞は比較級や最上級の形にせず、もとの形（原級）のままにする。\n答え：This book is as interesting as that one.',
    pitfall: 'as more interesting asのように比較級にしてしまわないこと。asとasの間の形容詞は原級のまま。',
  },

  // ============================================================
  // 接続詞（when / if / because / that） 5問 (42-46)
  // ============================================================
  {
    id: 'grade_j2_eigo_42',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '次の文の（　）に入る単語はどれですか。\nI was cooking dinner (　) he came home. （彼が家に帰ってきたとき、わたしは夕食を作っていました。）',
    answer: 'when',
    choices: ['when', 'if', 'because', 'that'],
    hint: '「〜するとき」を表す接続詞。',
    explanation: '【解説】\n「〜するとき」という意味を表す接続詞は when。\n答え：when',
  },
  {
    id: 'grade_j2_eigo_43',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      "次の文の（　）に入る単語はどれですか。\nI was tired (　) I didn't sleep well last night. （昨夜よく眠れなかったので、わたしは疲れていました。）",
    answer: 'because',
    choices: ['because', 'when', 'if', 'that'],
    hint: '理由を表す接続詞。',
    explanation: '【解説】\n「〜なので」という理由を表す接続詞は because。\n答え：because',
  },
  {
    id: 'grade_j2_eigo_44',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る単語はどれですか。\n(　) it rains tomorrow, we will stay home. （もし明日雨が降ったら、わたしたちは家にいます。）',
    answer: 'If',
    choices: ['If', 'When', 'Because', 'That'],
    hint: '「もし〜なら」という条件を表す接続詞。',
    explanation:
      '【解説】\n「もし〜なら」という条件を表す接続詞はif。文の最初に来るので、大文字のIfで始める。\nif〜の文の中では、未来のことでも現在形（rains）で表すことに注意。\n答え：If',
    pitfall: 'if節の中では未来のことでもwillを使わず現在形で表す（rainsであってwill rainではない）。',
  },
  {
    id: 'grade_j2_eigo_45',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の（　）に入る単語はどれですか。\nI think (　) she is right. （わたしは彼女が正しいと思います。）',
    answer: 'that',
    choices: ['that', 'if', 'when', 'because'],
    hint: 'think のあとに続けて「〜ということ」を表す接続詞。',
    explanation:
      '【解説】\nI think that 〜.（わたしは〜だと思う）のthatは「〜ということ」という意味を表す接続詞。この意味のthatは省略されることも多いが、ここでは接続詞としてthatを選ぶ。\n答え：that',
  },
  {
    id: 'grade_j2_eigo_46',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    passage:
      'Yuki likes rainy days because she can read books at home. When it rains, she makes hot tea and sits by the window with her favorite book. If the rain stops in the afternoon, she goes for a short walk in the park near her house.',
    question: '次の英文を読んで、質問に答えなさい。\n質問：Why does Yuki like rainy days?',
    answer: 'Because she can read books at home.（家で本を読むことができるから。）',
    hint: '最初の文のbecauseのあとに理由が書かれている。',
    explanation:
      '【解説】\n最初の文 Yuki likes rainy days because she can read books at home. の because のあとに理由が書かれている。becauseは「〜なので」という理由を表す接続詞。\nよって、ユキが雨の日を好きな理由は「家で本を読むことができるから」。\n答え：Because she can read books at home.（家で本を読むことができるから。）',
  },

  // ============================================================
  // 文型（SVOO・SVOCの基礎） 4問 (47-50)
  // ============================================================
  {
    id: 'grade_j2_eigo_47',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '「わたしは彼に手紙を送りました。」を表す正しい英文はどれですか。',
    answer: 'I sent him a letter.',
    choices: [
      'I sent him a letter.',
      'I sent a letter him.',
      'I sent to him a letter.',
      'I sent him to a letter.',
    ],
    hint: '「（人）に（もの）を〜する」はSVOOの形で、動詞のすぐあとに人、その次にものを置く。',
    explanation:
      '【解説】\n「（人）に（ものを）〜する」という文は、〈主語+動詞+人+もの〉のSVOO（第4文型）の形で表せる。動詞sent（sendの過去形）のすぐあとに人（him）、その次にもの（a letter）を置く。\n答え：I sent him a letter.',
  },
  {
    id: 'grade_j2_eigo_48',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の文をtoを使って書きかえなさい。\nShe showed me the picture.',
    answer: 'She showed the picture to me.',
    hint: '〈動詞+人+もの〉の文は〈動詞+もの+to+人〉に書きかえられる。',
    explanation:
      '【解説】\nSVOO（〈動詞+人+もの〉）の文は、多くの場合〈動詞+もの+to+人〉の形に書きかえられる。showed me the picture → showed the picture to me。\n答え：She showed the picture to me.',
  },
  {
    id: 'grade_j2_eigo_49',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '次の文の文型として正しいものはどれですか。\nThe news made her happy. （その知らせは彼女を幸せにしました。）',
    answer: 'S+V+O+C',
    choices: ['S+V+O+C', 'S+V+O+O', 'S+V+O', 'S+V'],
    hint: 'her（目的語）＝happy（補語）の関係が成り立つ文型を選ぶ。',
    explanation:
      '【解説】\nThe news made her happy. では、madeのあとにher（目的語）とhappy（補語）が続いている。her＝happy（彼女＝幸せ）という関係が成り立つので、この文はS+V+O+C（第5文型）の形。\n答え：S+V+O+C',
    pitfall: 'her（人）とhappy（形容詞）の間に「＝」の関係が成り立つのがSVOCの特徴。SVOOではO＝Oの関係にはならない。',
  },
  {
    id: 'grade_j2_eigo_50',
    subject: 'eigo',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '「わたしたちはその犬をポチと呼びます。」を表す正しい英文はどれですか。',
    answer: 'We call the dog Pochi.',
    choices: [
      'We call the dog Pochi.',
      'We call Pochi the dog.',
      'We call to the dog Pochi.',
      'We call the dog to Pochi.',
    ],
    hint: '「（O）を（C）と呼ぶ」はcall+O+Cの形。',
    explanation:
      '【解説】\n「（O）を（C）と呼ぶ」はcall+目的語（O）+補語（C）のSVOCの形で表す。the dog（O）＝Pochi（C）の関係が成り立つので、動詞のあとに the dog、その次に Pochi を置く。\n答え：We call the dog Pochi.',
  },
];
