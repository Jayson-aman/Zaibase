import type { Question } from './questions-meta';
import type { GradeKey } from './grades';

const GRADE: GradeKey = 'e6';

// 小学6年生 英語（学年タグ e6）。中学受験で英語が課される学校を意識し、
// 小5までの基礎（曜日・月・like/can・疑問詞など）よりも一段階レベルを上げた内容：
// 過去形（規則動詞・不規則動詞）、未来表現（want to be 〜 / will 〜）、
// 比較表現（比較級・最上級の基礎）、街・道案内の語い表現、
// 短い対話文の読解、語句の並べかえ・適語補充などの基本英作文。
export const gradeE6EigoQuestions: Question[] = [
  // ============================================================
  // 過去形（規則動詞） 6問 (01-06)
  // ============================================================
  {
    id: 'grade_e6_eigo_01',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は昨日、テニスをしました。」を英語にすると？',
    answer: 'I played tennis yesterday.',
    choices: [
      'I played tennis yesterday.',
      'I play tennis yesterday.',
      'I plays tennis yesterday.',
      'I am played tennis yesterday.',
    ],
    hint: '「〜しました」という過去のことは、動詞の最後に ed をつけて表す。',
    explanation:
      '【解説】\n規則動詞の過去形は、動詞の最後に ed をつけて作る。\nplay → played。\nyesterday（昨日）があるので、過去形の文にする。\n答え：I played tennis yesterday.',
    memoryTip: '多くの動詞は最後に ed をつけるだけで過去形になる（play→played、watch→watched）。',
  },
  {
    id: 'grade_e6_eigo_02',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私たちは昨夜、テレビを見ました。」を英語にすると？',
    answer: 'We watched TV last night.',
    choices: [
      'We watched TV last night.',
      'We watch TV last night.',
      'We watchs TV last night.',
      'We are watched TV last night.',
    ],
    hint: 'watch の過去形は最後に ed をつける。',
    explanation:
      '【何を聞かれているか】\n「私たちは昨夜、テレビを見ました。」を英語にする問題。\n\n【なぜwatchedにするのか】\nwatch（見る）の過去形は、規則動詞として語尾にedをつけてwatchedになるという決まりがある。\n\n【ポイント1】watchの変化を確認する\nwatch→watched（edをつける）。\n\n【ポイント2】過去を表す語句を確認する\n"last night"（昨夜）は過去のことを表す言葉。\n\n【ポイント3】他の選択肢を消去する\nwatch（現在形）、watchs（誤ったつづり）、are watched（受動態と混同した誤り）はいずれも不適切。\n\n【答え】\nWe watched TV last night.\n\n【確かめ】\nwatchにedがついてwatchedになっているか確認する。\n\n【よくあるまちがい】\n過去を表す語句があるのに、現在形watchのままにしてしまうミス。\n\n【ここが絶対】\nlast night、yesterday等の語があれば過去形を使うと覚える。',
  },
  {
    id: 'grade_e6_eigo_03',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nI (　) English last night. （わたしは昨夜、英語を勉強しました。）',
    answer: 'studied',
    choices: ['studied', 'studyed', 'studies', 'studying'],
    hint: 'study のように子音字＋yで終わる語は、yをiに変えてedをつける。',
    explanation:
      '【何を聞かれているか】\n"I (　) English last night."（わたしは昨夜、英語を勉強しました。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜyをiに変えるのか】\nstudyのように「子音字＋y」で終わる動詞は、過去形にするときyをiに変えてからedをつけるという決まりがある。\n\n【ポイント1】studyの変化を確認する\nstudy→studied（yをiに変えてedをつける）。\n\n【ポイント2】stayやplayとの違いを確認する\nstayやplayのように「母音字＋y」で終わる語は、yをそのまま残してedをつける（stayed、played）。\n\n【ポイント3】他の選択肢を消去する\nstudyed（yを変えていない誤り）、studies（現在形）、studying（ing形）はいずれも不適切。\n\n【答え】\nstudied\n\n【確かめ】\nstudyのyがiに変わってstudiedになっているか確認する。\n\n【よくあるまちがい】\nyを変えずにstudyedとしてしまうミス。\n\n【ここが絶対】\n子音字+yで終わる語はyをiに変えてed、母音字+yで終わる語はそのままedをつけると覚える。',
    pitfall: 'stayやplayのように「母音字＋y」で終わる語は、そのままyを残してedをつける（stayed、played）ので混同しないこと。',
  },
  {
    id: 'grade_e6_eigo_04',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「彼は昨日、部屋を掃除しませんでした。」を英語にすると？',
    answer: "He didn't clean his room yesterday.",
    choices: [
      "He didn't clean his room yesterday.",
      "He didn't cleaned his room yesterday.",
      'He not cleaned his room yesterday.',
      "He doesn't clean his room yesterday.",
    ],
    hint: '過去の否定文は didn\'t のあとに動詞の元の形を続ける。',
    explanation:
      '【何を聞かれているか】\n「彼は昨日、部屋を掃除しませんでした。」を英語にする問題。\n\n【なぜcleanを原形のまま使うのか】\n過去の否定文はdidn\'t（did not）の後に動詞の元の形（原形）を続けて作るという決まりがあり、edをつけた形（cleaned）は使わない。\n\n【ポイント1】didn\'tの後の動詞の形を確認する\ndidn\'t（did not）の後は動詞の原形cleanを続ける。\n\n【ポイント2】他の選択肢を消去する\n"He didn\'t cleaned"（原形になっていない）、"He not cleaned"（notの位置が誤り）、"He doesn\'t clean"（過去の文にdoesn\'tを使う誤り）はいずれも不適切。\n\n【ポイント3】完成した文を確認する\n"He didn\'t clean his room yesterday."という型になる。\n\n【答え】\nHe didn\'t clean his room yesterday.\n\n【確かめ】\ndidn\'tの後がclean（原形）になっており、cleanedになっていないか確認する。\n\n【よくあるまちがい】\ndidn\'tの後にcleanedと過去形のままにしてしまうミス。\n\n【ここが絶対】\ndidn\'t（did not）の後ろは動詞の原形、と徹底して覚える。',
  },
  {
    id: 'grade_e6_eigo_05',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「あなたは昨夜、夕食を作りましたか。」を英語にすると？',
    answer: 'Did you cook dinner last night?',
    choices: [
      'Did you cook dinner last night?',
      'Did you cooked dinner last night?',
      'Do you cook dinner last night?',
      'Were you cook dinner last night?',
    ],
    hint: '過去の疑問文は Did で始めて、動詞は元の形にする。',
    explanation:
      '【何を聞かれているか】\n「あなたは昨夜、夕食を作りましたか。」を英語にする問題。\n\n【なぜDidの後の動詞を原形にするのか】\n過去の疑問文は文の最初にDidを置き、その後の動詞は元の形（原形）にするという決まりがあり、edをつけた形（cooked）は使わない。\n\n【ポイント1】疑問文の基本の形を確認する\nDid+主語+動詞の原形〜?。\n\n【ポイント2】cookの形を確認する\nDidの後はcook（原形）のまま使う。\n\n【ポイント3】他の選択肢を消去する\n"Did you cooked"（原形になっていない）、"Do you cook"（過去の文にDoを使う誤り）、"Were you cook"（be動詞と一般動詞を混同する誤り）はいずれも不適切。\n\n【答え】\nDid you cook dinner last night?\n\n【確かめ】\nDidの後がcook（原形）になっており、cookedになっていないか確認する。\n\n【よくあるまちがい】\nDidの後にcookedと過去形のままにしてしまうミス。\n\n【ここが絶対】\nDid+主語+動詞の原形〜?、という過去の疑問文の型でセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_06',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nWe (　) the classroom yesterday. （わたしたちは昨日、教室を掃除しました。）',
    answer: 'cleaned',
    choices: ['cleaned', 'cleans', 'cleaning', 'clean'],
    hint: 'yesterday があるので過去形にする。',
    explanation:
      '【解説】\nyesterday（昨日）があるので、動詞は過去形にする。\nclean の過去形は clean に ed をつけて cleaned。\ncleans は現在形（3人称単数）、cleaning はing形なので不適切。\n答え：cleaned',
  },

  // ============================================================
  // 過去形（不規則動詞） 8問 (07-14)
  // ============================================================
  {
    id: 'grade_e6_eigo_07',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は昨日、公園に行きました。」を英語にすると？',
    answer: 'I went to the park yesterday.',
    choices: [
      'I went to the park yesterday.',
      'I goed to the park yesterday.',
      'I going to the park yesterday.',
      'I go to the park yesterday.',
    ],
    hint: 'go の過去形は特別な形に変わる。',
    explanation:
      '【何を聞かれているか】\n「私は昨日、公園に行きました。」を英語にする問題。\n\n【なぜwentという特別な形になるのか】\ngo（行く）の過去形は、規則動詞のようにedをつけたgoedではなく、wentという特別な形（不規則動詞）に変化するという決まりがある。\n\n【ポイント1】goの変化を確認する\ngo→went（不規則動詞）。\n\n【ポイント2】goedが誤りであることを確認する\n規則動詞のようにedをつけたgoedという形は存在しない。\n\n【ポイント3】他の選択肢を消去する\ngoing（ing形）、go（原形）はいずれも過去の出来事を表せない。\n\n【答え】\nI went to the park yesterday.\n\n【確かめ】\ngoがwent（不規則な過去形）になっているか確認する。\n\n【よくあるまちがい】\ngoに規則的にedをつけてgoedとしてしまうミス。\n\n【ここが絶対】\ngo→wentはよく使う不規則動詞。goedという形は存在しないので注意する。',
    memoryTip: 'go → went はよく使う不規則動詞。goed という形は存在しないので注意。',
  },
  {
    id: 'grade_e6_eigo_08',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私たちは動物園でパンダを見ました。」を英語にすると？',
    answer: 'We saw a panda at the zoo.',
    choices: [
      'We saw a panda at the zoo.',
      'We seed a panda at the zoo.',
      'We seen a panda at the zoo.',
      'We see a panda at the zoo.',
    ],
    hint: 'see の過去形は特別な形に変わる。',
    explanation:
      '【何を聞かれているか】\n「私たちは動物園でパンダを見ました。」を英語にする問題。\n\n【なぜsawという特別な形になるのか】\nsee（見る）の過去形は、規則動詞のようにedをつけたseedではなく、sawという特別な形（不規則動詞）に変化するという決まりがある。\n\n【ポイント1】seeの変化を確認する\nsee→saw（不規則動詞）。\n\n【ポイント2】seenとの違いを確認する\nseenは過去分詞形であり、過去形としては使わない。\n\n【ポイント3】他の選択肢を消去する\nseed（誤った変化）、seen（過去分詞形）、see（現在形）はいずれも過去の文には使えない。\n\n【答え】\nWe saw a panda at the zoo.\n\n【確かめ】\nseeがsaw（不規則な過去形）になっているか確認する。\n\n【よくあるまちがい】\nseeに規則的にedをつけてseedとしてしまうミス。\n\n【ここが絶対】\nseeの変化はsee-saw-seen（原形-過去形-過去分詞形）とセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_09',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「兄は新しいゲームを買いました。」を英語にすると？',
    answer: 'My brother bought a new game.',
    choices: [
      'My brother bought a new game.',
      'My brother buyed a new game.',
      'My brother buys a new game.',
      'My brother buying a new game.',
    ],
    hint: 'buy の過去形は特別な形に変わる。',
    explanation:
      '【何を聞かれているか】\n「兄は新しいゲームを買いました。」を英語にする問題。\n\n【なぜboughtという特別な形になるのか】\nbuy（買う）の過去形は、規則動詞のようにedをつけたbuyedではなく、boughtという特別な形（不規則動詞）に変化するという決まりがある。\n\n【ポイント1】buyの変化を確認する\nbuy→bought（不規則動詞）。\n\n【ポイント2】他の選択肢を消去する\nbuyed（誤った変化）、buys（現在形）、buying（ing形）はいずれも過去の文には使えない。\n\n【ポイント3】完成した文を確認する\n"My brother bought a new game."という型になる。\n\n【答え】\nMy brother bought a new game.\n\n【確かめ】\nbuyがbought（不規則な過去形）になっているか確認する。\n\n【よくあるまちがい】\nbuyに規則的にedをつけてbuyedとしてしまうミス。\n\n【ここが絶対】\nbuyの過去形はbought、という不規則変化として個別に覚える。',
  },
  {
    id: 'grade_e6_eigo_10',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「彼女は昨日、風邪をひいていました。」を英語にすると？',
    answer: 'She had a cold yesterday.',
    choices: [
      'She had a cold yesterday.',
      'She haved a cold yesterday.',
      'She have a cold yesterday.',
      'She having a cold yesterday.',
    ],
    hint: 'have の過去形は特別な形に変わる。',
    explanation:
      '【何を聞かれているか】\n「彼女は昨日、風邪をひいていました。」を英語にする問題。\n\n【なぜhadという特別な形になるのか】\nhave（持っている）の過去形は、規則動詞のようにedをつけたhavedではなく、hadという特別な形（不規則動詞）に変化するという決まりがある。\n\n【ポイント1】haveの変化を確認する\nhave→had（不規則動詞）。\n\n【ポイント2】「風邪をひいている」の表現を確認する\n"have a cold"（風邪をひいている）が過去形になると"had a cold"になる。\n\n【ポイント3】他の選択肢を消去する\nhaved（誤った変化）、have（現在形）、having（ing形）はいずれも過去の文には使えない。\n\n【答え】\nShe had a cold yesterday.\n\n【確かめ】\nhaveがhad（不規則な過去形）になっているか確認する。\n\n【よくあるまちがい】\nhaveに規則的にedをつけてhavedとしてしまうミス。\n\n【ここが絶対】\nhaveの過去形はhad、という不規則変化として個別に覚える。',
  },
  {
    id: 'grade_e6_eigo_11',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「友だちが先週の日曜日、私の家に来ました。」を英語にすると？',
    answer: 'My friend came to my house last Sunday.',
    choices: [
      'My friend came to my house last Sunday.',
      'My friend comed to my house last Sunday.',
      'My friend come to my house last Sunday.',
      'My friend coming to my house last Sunday.',
    ],
    hint: 'come の過去形は特別な形に変わる。',
    explanation:
      '【解説】\ncome（来る）の過去形は comed ではなく came という特別な形になる。\nlast Sunday（先週の日曜日）があるので過去形にする。\n答え：My friend came to my house last Sunday.',
  },
  {
    id: 'grade_e6_eigo_12',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nMom (　) a cake yesterday. （お母さんは昨日、ケーキを作りました。）',
    answer: 'made',
    choices: ['made', 'maked', 'make', 'making'],
    hint: 'make の過去形は特別な形に変わる。',
    explanation:
      '【何を聞かれているか】\n"Mom (　) a cake yesterday."（お母さんは昨日、ケーキを作りました。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜmadeという特別な形になるのか】\nmake（作る）の過去形は、規則動詞のようにedをつけたmakedではなく、madeという特別な形（不規則動詞）に変化するという決まりがある。\n\n【ポイント1】makeの変化を確認する\nmake→made（不規則動詞）。\n\n【ポイント2】他の選択肢を消去する\nmaked（誤った変化）、make（現在形）、making（ing形）はいずれも過去の文には使えない。\n\n【ポイント3】完成した文を確認する\n"Mom made a cake yesterday."という型になる。\n\n【答え】\nmade\n\n【確かめ】\nmakeがmade（不規則な過去形）になっているか確認する。\n\n【よくあるまちがい】\nmakeに規則的にedをつけてmakedとしてしまうミス。\n\n【ここが絶対】\nmake→made、take→tookのように、母音の部分が変化する不規則動詞は多いので、1つずつ覚える必要がある。',
    pitfall: 'make → made、take → took のように、母音の部分が変化する不規則動詞は多いので、1つずつ覚える必要がある。',
  },
  {
    id: 'grade_e6_eigo_13',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は今朝、朝ごはんを食べませんでした。」を英語にすると？',
    answer: "I didn't eat breakfast this morning.",
    choices: [
      "I didn't eat breakfast this morning.",
      "I didn't ate breakfast this morning.",
      'I not ate breakfast this morning.',
      "I doesn't eat breakfast this morning.",
    ],
    hint: '不規則動詞でも、didn\'t のあとは元の形（原形）にする。',
    explanation:
      '【何を聞かれているか】\n「私は今朝、朝ごはんを食べませんでした。」を英語にする問題。\n\n【なぜdidn\'tの後は原形にするのか】\neat（食べる）は不規則動詞で過去形はateになるが、否定文ではdidn\'tの後に動詞の元の形（原形）eatを使うという決まりがあり、過去形ateをそのまま使ってはいけない。\n\n【ポイント1】eatの変化を確認する\neat→ate（不規則動詞の過去形）。\n\n【ポイント2】didn\'tの後の動詞の形を確認する\n否定文ではdidn\'tの後に原形eatを使う（ateは使わない）。\n\n【ポイント3】他の選択肢を消去する\n"I didn\'t ate"（原形になっていない）、"I not ate"（notの位置が誤り）、"I doesn\'t eat"（過去の文にdoesn\'tを使う誤り）はいずれも不適切。\n\n【答え】\nI didn\'t eat breakfast this morning.\n\n【確かめ】\ndidn\'tの後がeat（原形）になっており、ateになっていないか確認する。\n\n【よくあるまちがい】\n「didn\'t+過去形」（didn\'t ateのような形）にしてしまうミス。\n\n【ここが絶対】\ndidn\'tのあとはいつも動詞の元の形、不規則動詞であっても例外なく原形にすると覚える。',
    pitfall: '「didn\'t + 過去形」（didn\'t ate のような形）はまちがい。didn\'t のあとはいつも動詞の元の形。',
  },
  {
    id: 'grade_e6_eigo_14',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「あなたは誕生日に何をもらいましたか。」を英語にすると？',
    answer: 'What did you get for your birthday?',
    hint: '「何を〜しましたか」は What のあとに did you を続ける。',
    explanation:
      '【何を聞かれているか】\n「あなたは誕生日に何をもらいましたか。」を英語にする問題。\n\n【なぜdid you の後を原形にするのか】\n「何を〜しましたか」とたずねるときは、文の最初にWhatを置きその後にdid youを続けるが、getの過去形gotではなく、did youを使った疑問文では動詞は元の形getのままにするという決まりがある。\n\n【ポイント1】疑問文の基本の形を確認する\nWhat+did+主語+動詞の原形〜?。\n\n【ポイント2】getの形を確認する\nget（もらう）の過去形はgotだが、didを使う疑問文ではget（原形）のまま使う。\n\n【ポイント3】完成した文を確認する\n"What did you get for your birthday?"という型になる。\n\n【答え】\nWhat did you get for your birthday?\n\n【確かめ】\ndid youの後がget（原形）になっており、gotになっていないか確認する。\n\n【よくあるまちがい】\ndid youの後にgotと過去形のままにしてしまうミス。\n\n【ここが絶対】\ndid（did not含む）の後の動詞は、不規則動詞であっても必ず原形にすると覚える。',
  },

  // ============================================================
  // 未来表現（want to be 〜 / will 〜） 8問 (15-22)
  // ============================================================
  {
    id: 'grade_e6_eigo_15',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は医者になりたいです。」を英語にすると？',
    answer: 'I want to be a doctor.',
    choices: [
      'I want to be a doctor.',
      'I want be a doctor.',
      'I want to am a doctor.',
      'I am want to be a doctor.',
    ],
    hint: '「〜になりたい」は want to be 〜 で表す。',
    explanation:
      '【何を聞かれているか】\n「私は医者になりたいです。」を英語にする問題。\n\n【なぜwant toの後にbeを使うのか】\n「〜になりたい」はwant to be 〜の形で表し、want toの後のbeは元の形のまま使う（amやisにはしない）という決まりがある。\n\n【ポイント1】want toの形を確認する\nwant+to+動詞の原形。\n\n【ポイント2】be動詞の原形を確認する\n「〜になる」という意味には、be動詞の原形beを使う。\n\n【ポイント3】他の選択肢を消去する\n"want be"（toが抜けている）、"want to am"（beの代わりにamを使う誤り）、"am want to be"（不要なamが入っている）はいずれも不適切。\n\n【答え】\nI want to be a doctor.\n\n【確かめ】\nwantの後にto beが続いているか確認する。\n\n【よくあるまちがい】\nbe動詞の原形beを、amやisにしてしまうミス。\n\n【ここが絶対】\nwant to be 〜＝「〜になりたい」という型でセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_16',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私はあなたを手伝います。」を英語にすると？',
    answer: 'I will help you.',
    choices: [
      'I will help you.',
      'I will helps you.',
      'I wills help you.',
      'I will to help you.',
    ],
    hint: 'will のあとの動詞はいつも元の形。',
    explanation:
      '【何を聞かれているか】\n「私はあなたを手伝います。」を英語にする問題。\n\n【なぜwillの後を原形にするのか】\n「〜します・〜するつもりです」という未来のことは、willの後に動詞の元の形を続けて表すという決まりがあり、sもtoもつけない。\n\n【ポイント1】willの形を確認する\nwill+動詞の原形。\n\n【ポイント2】他の選択肢を消去する\n"will helps"（sをつける誤り）、"wills help"（willにsをつける誤り）、"will to help"（不要なtoをつける誤り）はいずれも不適切。\n\n【ポイント3】完成した文を確認する\n"I will help you."という型になる。\n\n【答え】\nI will help you.\n\n【確かめ】\nwillの後がhelp（原形）になっているか確認する。\n\n【よくあるまちがい】\nwillの後の動詞にsやtoをつけてしまうミス。\n\n【ここが絶対】\nwillの後には常に動詞の原形を続け、sもtoもつけないと覚える。',
  },
  {
    id: 'grade_e6_eigo_17',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\nI want to (　) a vet in the future. （わたしは将来、獣医になりたいです。）',
    answer: 'be',
    choices: ['be', 'is', 'am', 'being'],
    hint: 'want to のあとの動詞はいつも元の形。',
    explanation:
      '【何を聞かれているか】\n"I want to (　) a vet in the future."（わたしは将来、獣医になりたいです。）の空欄に入る単語を選ぶ問題。\n\n【なぜbeを使うのか】\nwant toの後の動詞はいつも元の形（原形）にするという決まりがあり、「〜になる」を表すbe動詞の原形はbeである。\n\n【ポイント1】want toの後の形を確認する\nwant to+動詞の原形。\n\n【ポイント2】be動詞の原形を確認する\nbe動詞の元の形はbe。\n\n【ポイント3】他の選択肢を消去する\nis、amはbe動詞の変化した形であり、原形ではないので不適切。\n\n【答え】\nbe\n\n【確かめ】\nwant toの後がbe（原形）になっているか確認する。\n\n【よくあるまちがい】\nbe動詞の原形beを、isやamにしてしまうミス。\n\n【ここが絶対】\nwant toの後の動詞はいつも原形にする、と覚える。',
  },
  {
    id: 'grade_e6_eigo_18',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「あなたは将来何になりたいですか。」を英語にすると？',
    answer: 'What do you want to be in the future?',
    hint: '「何になりたいですか」は What のあとに do you want to be を続ける。',
    explanation:
      '【解説】\n「何になりたいですか」とたずねるときは、文の最初に What を置き、そのあとに do you want to be を続ける。\nin the future は「将来」という意味。\n答え：What do you want to be in the future?',
  },
  {
    id: 'grade_e6_eigo_19',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「明日は雨が降らないでしょう。」を英語にすると？',
    answer: "It won't rain tomorrow.",
    choices: [
      "It won't rain tomorrow.",
      "It isn't rain tomorrow.",
      "It doesn't rain tomorrow.",
      "It won't rains tomorrow.",
    ],
    hint: '「〜しないでしょう」は won\'t（will not）のあとに動詞の元の形。',
    explanation:
      '【何を聞かれているか】\n「明日は雨が降らないでしょう。」を英語にする問題。\n\n【なぜwon\'tの後を原形にするのか】\n未来の否定文はwon\'t（will not）の後に動詞の元の形を続けて作るという決まりがある。\n\n【ポイント1】won\'tの形を確認する\nwon\'t（will not）＝willの否定形。\n\n【ポイント2】won\'tの後の動詞の形を確認する\nwon\'tの後はrain（原形）のまま使う。\n\n【ポイント3】他の選択肢を消去する\n"isn\'t rain"（be動詞と一般動詞を混同する誤り）、"doesn\'t rain"（未来の文に現在の否定を使う誤り）、"won\'t rains"（原形になっていない）はいずれも不適切。\n\n【答え】\nIt won\'t rain tomorrow.\n\n【確かめ】\nwon\'tの後がrain（原形）になっているか確認する。\n\n【よくあるまちがい】\nwon\'tの後の動詞にsをつけてしまうミス。\n\n【ここが絶対】\nwon\'t（will not）の後ろは動詞の原形、と徹底して覚える。',
  },
  {
    id: 'grade_e6_eigo_20',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\nWe (　) study English hard next year. （わたしたちは来年、英語を一生懸命勉強するつもりです。）',
    answer: 'will',
    choices: ['will', 'are', 'do', 'can'],
    hint: '「〜するつもりです」という未来の予定を表す単語。',
    explanation:
      '【何を聞かれているか】\n"We (　) study English hard next year."（わたしたちは来年、英語を一生懸命勉強するつもりです。）の空欄に入る単語を選ぶ問題。\n\n【なぜwillを使うのか】\n「〜するつもりです」という未来の予定・意志は、助動詞willで表すという決まりがある。\n\n【ポイント1】willの意味を確認する\nwill＝未来の予定・意志を表す助動詞。\n\n【ポイント2】next yearの意味を確認する\n"next year"（来年）は未来のことを表す言葉。\n\n【ポイント3】他の選択肢を消去する\nare、do、canはいずれも未来の予定・意志を表す助動詞ではない。\n\n【答え】\nwill\n\n【確かめ】\nwillの後にstudy（原形）が続いているか確認する。\n\n【よくあるまちがい】\n未来のことなのにdoやareを使ってしまうミス。\n\n【ここが絶対】\nwill+動詞の原形＝「〜するつもりだ」という未来を表す型で覚える。',
  },
  {
    id: 'grade_e6_eigo_21',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は将来、動物のお医者さん（獣医）になりたいです。」を英語にすると？',
    answer: 'I want to be a vet in the future.',
    hint: '「獣医」を表す英単語は vet。',
    explanation:
      '【何を聞かれているか】\n「私は将来、動物のお医者さん（獣医）になりたいです。」を英語にする問題。\n\n【なぜvetという単語を使うのか】\n「獣医」は英語でvet（ベット）という単語で表すという決まりがある。\n\n【ポイント1】vetの意味を確認する\nvet＝「獣医」を表す英単語。\n\n【ポイント2】「〜になりたい」の形を確認する\nwant to be 〜（〜になりたい）を使う。\n\n【ポイント3】「将来」の形を確認する\nin the future（将来）を文末に置く。\n\n【答え】\nI want to be a vet in the future.\n\n【確かめ】\nwant to beの後にa vet、その後にin the futureが続いているか確認する。\n\n【よくあるまちがい】\nvetの代わりにdoctor（医者）などの別の職業名を使ってしまうミス。\n\n【ここが絶対】\n「獣医」はvet、「〜になりたい」はwant to be、「将来」はin the futureとセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_22',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「明日は晴れるでしょう。」を英語にすると？',
    answer: 'It will be sunny tomorrow.',
    choices: [
      'It will be sunny tomorrow.',
      'It will sunny tomorrow.',
      'It is will sunny tomorrow.',
      'It will is sunny tomorrow.',
    ],
    hint: '天気を表すときは It will be 〜. の形を使う。',
    explanation:
      '【何を聞かれているか】\n「明日は晴れるでしょう。」を英語にする問題。\n\n【なぜItを主語にするのか】\n天気を表す文の主語は、特に何かを指さない形式上の主語itを使うという決まりがある。\n\n【ポイント1】天気の文の主語を確認する\n天気を表す文の主語はit。\n\n【ポイント2】will beの形を確認する\n「〜でしょう」はwill beの後に天気を表す言葉（sunny＝晴れの）を続ける。\n\n【ポイント3】他の選択肢を消去する\n"will sunny"（beが抜けている）、"is will sunny"（語順の誤り）、"will is sunny"（willの後にbe動詞isを使う誤り）はいずれも不適切。\n\n【答え】\nIt will be sunny tomorrow.\n\n【確かめ】\nwill beの後にsunnyが続いているか確認する。\n\n【よくあるまちがい】\nwill beのbeを抜かして"It will sunny tomorrow."としてしまうミス。\n\n【ここが絶対】\n天気の文はItを主語にし、will be+天気の形容詞、という型でセットで覚える。',
  },

  // ============================================================
  // 比較表現（比較級・最上級） 8問 (23-30)
  // ============================================================
  {
    id: 'grade_e6_eigo_23',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis box is (　) than that one. （この箱はあの箱より大きいです。）',
    answer: 'bigger',
    choices: ['bigger', 'biger', 'more big', 'biggest'],
    hint: 'big のように短い語は最後に er をつけて比較級にする。文字を重ねる語もある。',
    explanation:
      '【何を聞かれているか】\n"This box is (　) than that one."（この箱はあの箱より大きいです。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜgを重ねるのか】\nbigのように短母音＋子音字で終わる語は、比較級にするとき子音字を重ねてからerをつけるという決まりがある。\n\n【ポイント1】bigの変化を確認する\nbig＝短母音i＋子音字g、で終わる語。\n\n【ポイント2】比較級の作り方を確認する\nbig→bigger（gを重ねてからerをつける）。\n\n【ポイント3】他の選択肢を消去する\nbiger（重ねていない）、more big（誤った比較級の作り方）、biggest（最上級）はいずれも不適切。\n\n【答え】\nbigger\n\n【確かめ】\ngが2つ重なった正しいつづり（bigger）になっているか確認する。\n\n【よくあるまちがい】\n子音字を重ねずにbigerとしてしまうミス。\n\n【ここが絶対】\nbig→bigger、hot→hotterのように、最後の文字を1つ重ねてからerをつける単語があると覚える。',
    memoryTip: 'big→bigger、hot→hotter のように、最後の文字を1つ重ねてから er をつける単語がある。',
  },
  {
    id: 'grade_e6_eigo_24',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nTom is the (　) in his class. （トムはクラスでいちばん背が高いです。）',
    answer: 'tallest',
    choices: ['tallest', 'taller', 'more tall', 'tall'],
    hint: '「いちばん〜」というときは the をつけて最上級にする。',
    explanation:
      '【解説】\n「いちばん〜」という意味は最上級で表す。tall の最上級は tallest。\n最上級の前には the をつける。\n答え：tallest',
  },
  {
    id: 'grade_e6_eigo_25',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「この犬はあの犬より小さいです。」を英語にすると？',
    answer: 'This dog is smaller than that dog.',
    choices: [
      'This dog is smaller than that dog.',
      'This dog is small than that dog.',
      'This dog is more small than that dog.',
      'This dog is smallest than that dog.',
    ],
    hint: '「〜より小さい」は small の比較級に than を続ける。',
    explanation:
      '【何を聞かれているか】\n「この犬はあの犬より小さいです。」を英語にする問題。\n\n【なぜsmallerとthanをセットで使うのか】\n「〜より小さい」はsmallの比較級smallerを使い、比較の相手を示すためにその後にthan（〜より）を続けるという決まりがある。\n\n【ポイント1】smallの比較級を確認する\nsmall→smaller（erをつける）。\n\n【ポイント2】thanの働きを確認する\n比較級の後にthanを置き、比べる相手（that dog）を示す。\n\n【ポイント3】他の選択肢を消去する\nsmall（原級のまま）、more small（誤った比較級の作り方）、smallest（最上級）はいずれも不適切。\n\n【答え】\nThis dog is smaller than that dog.\n\n【確かめ】\nsmallerの後にthanが続いているか確認する。\n\n【よくあるまちがい】\nsmallをそのまま使い、比較級smallerに変えないミス。\n\n【ここが絶対】\n比較級+than＝「〜より…」という型でセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_26',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「富士山は日本でいちばん高い山です。」を英語にすると？',
    answer: 'Mt. Fuji is the highest mountain in Japan.',
    hint: '「いちばん高い」は high の最上級を使う。',
    explanation:
      '【何を聞かれているか】\n「富士山は日本でいちばん高い山です。」を英語にする問題。\n\n【なぜthe highestとinを使うのか】\n「いちばん高い」という最上級はhighestで表し、その前にtheをつけ、「〜の中で」という範囲を示すときはinを使うという決まりがある。\n\n【ポイント1】highの最上級を確認する\nhigh→highest（estをつける）。\n\n【ポイント2】theの位置を確認する\n最上級の前には必ずtheをつける（the highest）。\n\n【ポイント3】inの使い方を確認する\n「日本の中で」という範囲はin Japanで表す。\n\n【答え】\nMt. Fuji is the highest mountain in Japan.\n\n【確かめ】\nhighestの前にtheがついており、Japanの前にinが使われているか確認する。\n\n【よくあるまちがい】\n最上級の前のtheを忘れてしまうミス。\n\n【ここが絶対】\nthe+最上級+in/of〜＝「〜の中で最も…」という型でセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_27',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「私は昨日より気分がいいです。」を英語にすると？',
    answer: 'I feel better than yesterday.',
    choices: [
      'I feel better than yesterday.',
      'I feel gooder than yesterday.',
      'I feel more good than yesterday.',
      'I feel best than yesterday.',
    ],
    hint: 'good の比較級は特別な形に変わる。',
    explanation:
      '【何を聞かれているか】\n「私は昨日より気分がいいです。」を英語にする問題。\n\n【なぜbetterという特別な形になるのか】\ngood（よい）の比較級は、規則的にerをつけたgooderではなく、betterという特別な形（不規則な変化）になるという決まりがある。\n\n【ポイント1】goodの変化を確認する\ngood-better-best（原級-比較級-最上級）という不規則な変化。\n\n【ポイント2】gooderが誤りであることを確認する\n規則動詞のようにerをつけたgooderという形は存在しない。\n\n【ポイント3】他の選択肢を消去する\nmore good（誤った比較級の作り方）、best（最上級）はいずれも不適切。\n\n【答え】\nI feel better than yesterday.\n\n【確かめ】\ngoodがbetter（不規則な比較級）になっているか確認する。\n\n【よくあるまちがい】\ngoodに規則的にerをつけてgooderとしてしまうミス。\n\n【ここが絶対】\ngood→better→bestは不規則な変化なので、erをつける形とまちがえないように覚える。',
    pitfall: 'good → better → best は不規則な変化なので、erをつける形とまちがえないように覚える。',
  },
  {
    id: 'grade_e6_eigo_28',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\nThis is the (　) interesting book of all. （これはすべての中でいちばんおもしろい本です。）',
    answer: 'most',
    choices: ['most', 'more', 'mostly', 'much'],
    hint: 'interesting のように長い単語は最上級に most を使う。',
    explanation:
      '【解説】\ninteresting のようにつづりが長い単語は、最後に est をつけるのではなく、前に most を置いて最上級にする。\nthe most interesting で「いちばんおもしろい」という意味になる。\n答え：most',
    memoryTip: '短い単語は er / est、長い単語（3音節以上が目安）は more / most を前に置く、と覚える。',
  },
  {
    id: 'grade_e6_eigo_29',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '「この歌手はあの歌手より有名です。」を英語にすると？',
    answer: 'This singer is more famous than that singer.',
    choices: [
      'This singer is more famous than that singer.',
      'This singer is famouser than that singer.',
      'This singer is most famous than that singer.',
      'This singer is famous more than that singer.',
    ],
    hint: 'famous のように長い単語は before に more を置いて比較級にする。',
    explanation:
      '【何を聞かれているか】\n「この歌手はあの歌手より有名です。」を英語にする問題。\n\n【なぜmoreを前に置くのか】\nfamous（有名な）のようにつづりが長い単語は、語尾にerをつけずに前にmoreを置いて比較級を作るという決まりがある。\n\n【ポイント1】famousの音節の長さを確認する\nfamousは長い（複数音節の）形容詞。\n\n【ポイント2】長い形容詞の比較級の作り方を確認する\n語尾にerをつけず、moreを前に置く（more famous）。\n\n【ポイント3】他の選択肢を消去する\nfamouser（誤った変化）、most famous（最上級）、famous more（語順の誤り）はいずれも不適切。\n\n【答え】\nThis singer is more famous than that singer.\n\n【確かめ】\nfamousの前にmoreが置かれており、語尾にerがついていないか確認する。\n\n【よくあるまちがい】\nfamouserのように語尾にerをつけてしまうミス。\n\n【ここが絶対】\n長い形容詞（複数音節）の比較級はmoreを前に置くと覚える。',
  },
  {
    id: 'grade_e6_eigo_30',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nMy grandfather is the (　) person in my family. （祖父は私の家族の中でいちばん年上です。）',
    answer: 'oldest',
    choices: ['oldest', 'older', 'more old', 'old'],
    hint: 'old のように e で終わらない短い単語は est をつけて最上級にする。',
    explanation:
      '【何を聞かれているか】\n"My grandfather is the (　) person in my family."（祖父は私の家族の中でいちばん年上です。）の空欄に入る正しい形を選ぶ問題。\n\n【なぜoldestを使うのか】\noldのようにeで終わらない短い単語は、estをつけて最上級を作るという決まりがある。\n\n【ポイント1】oldの最上級を確認する\nold→oldest（estをつける）。\n\n【ポイント2】theとの組み合わせを確認する\n「いちばん年上」はthe oldestで表す。\n\n【ポイント3】他の選択肢を消去する\nolder（比較級）、more old（誤った最上級の作り方）、old（原級のまま）はいずれも不適切。\n\n【答え】\noldest\n\n【確かめ】\noldにestがついてoldestになっているか確認する。\n\n【よくあるまちがい】\n最上級をolderのように比較級と混同してしまうミス。\n\n【ここが絶対】\n短い形容詞（1音節）の最上級はestをつけ、theを前に置くと覚える。',
  },

  // ============================================================
  // 街・道案内の語い表現 6問 (31-36)
  // ============================================================
  {
    id: 'grade_e6_eigo_31',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「図書館」を英語で言うと？',
    answer: 'library',
    choices: ['library', 'hospital', 'station', 'park'],
    hint: '本を借りたり読んだりする場所。',
    explanation:
      '【何を聞かれているか】\n「図書館」を英語で何と言うかを答える問題。\n\n【なぜlibraryを選ぶのか】\n「図書館」は英語でlibrary（ライブラリー）という単語で表すという決まりがある。\n\n【ポイント1】libraryの意味を確認する\nlibrary＝本を借りたり読んだりする場所。\n\n【ポイント2】他の選択肢を消去する\nhospital（病院）、station（駅）、park（公園）はいずれも別の建物・場所を表す。\n\n【ポイント3】建物の名前をセットで確認する\n建物・施設を表す英単語は、それぞれの用途と結びつけて覚える。\n\n【答え】\nlibrary\n\n【確かめ】\n選んだ答えが「図書館」を表すlibraryになっているか確認する。\n\n【よくあるまちがい】\nlibraryとhospitalなど、つづりが長い単語同士を混同してしまうミス。\n\n【ここが絶対】\nlibrary（図書館）、hospital（病院）、station（駅）、park（公園）とセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_32',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「駅」を英語で言うと？',
    answer: 'station',
    choices: ['station', 'park', 'library', 'museum'],
    hint: '電車に乗り降りする場所。',
    explanation:
      '【何を聞かれているか】\n「駅」を英語で何と言うかを答える問題。\n\n【なぜstationを選ぶのか】\n「駅」は英語でstation（ステーション）という単語で表すという決まりがある。\n\n【ポイント1】stationの意味を確認する\nstation＝電車に乗り降りする場所。\n\n【ポイント2】他の選択肢を消去する\npark（公園）、library（図書館）、museum（博物館）はいずれも別の建物・場所を表す。\n\n【ポイント3】建物の名前をセットで確認する\n建物・施設を表す英単語は、それぞれの用途と結びつけて覚える。\n\n【答え】\nstation\n\n【確かめ】\n選んだ答えが「駅」を表すstationになっているか確認する。\n\n【よくあるまちがい】\nstationとlibraryなど、別の施設名と混同してしまうミス。\n\n【ここが絶対】\nstation（駅）、park（公園）、library（図書館）、museum（博物館）とセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_33',
    subject: 'eigo',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: GRADE,
    question: '「左に曲がってください。」を英語にすると？',
    answer: 'Turn left.',
    choices: ['Turn left.', 'Turn to left.', 'Turn on left.', 'Lefts turn.'],
    hint: '「曲がる」turn のあとに方向を表す言葉を続ける。',
    explanation:
      '【何を聞かれているか】\n「左に曲がってください。」を英語にする問題。\n\n【なぜturnの後にtoやonをつけないのか】\n「〜に曲がってください」はTurn 〜.の形で表し、方向を表す言葉（left, right）をturnの直後に直接続ける、toやonはつけないという決まりがある。\n\n【ポイント1】turnの後の形を確認する\nTurn+方向を表す語（left, right）。\n\n【ポイント2】leftの意味を確認する\n「左に」はleft、「右に」はright。\n\n【ポイント3】他の選択肢を消去する\n"Turn to left"（不要なtoが入っている）、"Turn on left"（不要なonが入っている）、"Lefts turn"（語順の誤り）はいずれも不適切。\n\n【答え】\nTurn left.\n\n【確かめ】\nTurnの直後にleftが続いており、toやonが入っていないか確認する。\n\n【よくあるまちがい】\nTurnの後にto leftのようにtoをつけてしまうミス。\n\n【ここが絶対】\n道案内のTurn left/rightは、turnの直後に方向を直接続けると覚える。',
  },
  {
    id: 'grade_e6_eigo_34',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「まっすぐ行ってください。」を英語にすると？',
    answer: 'Go straight.',
    choices: ['Go straight.', 'Go straightly.', 'Go to straight.', 'Straight go.'],
    hint: '「まっすぐに」を表す1語の副詞。',
    explanation:
      '【解説】\n「まっすぐ行ってください」は Go straight. で表す。\nstraight はこのままで「まっすぐに」という意味の副詞として使う。\n答え：Go straight.',
  },
  {
    id: 'grade_e6_eigo_35',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '「2つ目の角を右に曲がってください。」を英語にすると？',
    answer: 'Turn right at the second corner.',
    hint: '「〜番目の」を表す言葉と「角」を表す単語を組み合わせる。',
    explanation:
      '【解説】\n「2つ目の」は second、「角」は corner。\n「〜で曲がる」は turn at 〜 の形で表すので、Turn right at the second corner. となる。\n答え：Turn right at the second corner.',
  },
  {
    id: 'grade_e6_eigo_36',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\nThe library is (　) the station and the park. （図書館は駅と公園の間にあります。）',
    answer: 'between',
    choices: ['between', 'next to', 'in front of', 'near'],
    hint: '「AとBの間に」というときに使う単語。',
    explanation:
      '【解説】\n「AとBの間に」というときは between A and B の形を使う。\nnext to は「〜のとなりに」、in front of は「〜の前に」、near は「〜の近くに」という意味。\n答え：between',
    pitfall: 'between は必ず2つのものの間で使う。3つ以上の中の位置には among を使う。',
  },

  // ============================================================
  // 短い対話文の読解 6問 (37-42)
  // ============================================================
  {
    id: 'grade_e6_eigo_37',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    passage:
      'A: What did you do last weekend?\nB: I went to the zoo with my family. We saw pandas and lions.\nA: That sounds fun!',
    question: '上の対話文を読んで、質問に答えなさい。\n質問：Bさんは週末どこに行きましたか。',
    answer: '動物園（the zoo）',
    hint: 'Bさんの最初の発言に注目する。',
    explanation:
      '【何を聞かれているか】\n対話文を読み、Bさんが週末どこに行ったかを答える問題。\n\n【なぜBさんの最初の発言に注目するのか】\n「どこに行ったか」という設問の答えは、Bさんが自分の週末について話している最初の発言に直接示されている。\n\n【ポイント1】該当の発言を確認する\nBさんの発言"I went to the zoo with my family."（家族と動物園に行きました）。\n\n【ポイント2】went toの意味を確認する\nwent（goの過去形）+to+場所、で「〜へ行った」を表す。\n\n【ポイント3】答えの形を確認する\n本文の内容をそのまま使って答える。\n\n【答え】\n動物園（the zoo）\n\n【確かめ】\n答えが、Bさんの発言中の場所（動物園）と一致しているか確認する。\n\n【よくあるまちがい】\n対話文の別の部分の内容と混同してしまうミス。\n\n【ここが絶対】\n「どこに行ったか」を問う設問は、went to〜という表現を含む発言に注目する。',
  },
  {
    id: 'grade_e6_eigo_38',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    passage:
      "A: What do you want to be in the future?\nB: I want to be a teacher. I like helping children.\nA: That's a nice dream!",
    question: '上の対話文を読んで、質問に答えなさい。\n質問：Bさんは将来何になりたいと言っていますか。',
    answer: '先生（a teacher）',
    hint: 'Bさんの最初の発言に注目する。',
    explanation:
      '【何を聞かれているか】\n対話文を読み、Bさんが将来何になりたいと言っているかを答える問題。\n\n【なぜBさんの発言に注目するのか】\n「将来何になりたいか」という設問の答えは、Bさんが自分の将来の夢について話している発言に直接示されている。\n\n【ポイント1】該当の発言を確認する\nBさんの発言"I want to be a teacher."（先生になりたいです）。\n\n【ポイント2】want to beの意味を確認する\nwant to be+職業、で「〜になりたい」を表す。\n\n【ポイント3】答えの形を確認する\n本文の内容をそのまま使って答える。\n\n【答え】\n先生（a teacher）\n\n【確かめ】\n答えが、Bさんの発言中の職業（先生）と一致しているか確認する。\n\n【よくあるまちがい】\n対話文の別の部分の内容と混同してしまうミス。\n\n【ここが絶対】\n「将来何になりたいか」を問う設問は、want to be〜という表現を含む発言に注目する。',
  },
  {
    id: 'grade_e6_eigo_39',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    passage:
      "A: Look at these two bags. Which one do you like?\nB: I like the blue one. It's bigger than the red one.\nA: You're right. It's the biggest bag in the store.",
    question: '上の対話文を読んで、質問に答えなさい。\n質問：店の中でいちばん大きいバッグは何色ですか。',
    answer: '青（blue）',
    hint: '最後のAさんの発言 It\'s the biggest bag in the store. の it が何を指すか考える。',
    explanation:
      '【解説】\nBさんが I like the blue one. It\'s bigger than the red one.（青いほうが好きです。赤いバッグより大きいです）と言い、Aさんが It\'s the biggest bag in the store.（それは店でいちばん大きいバッグです）と続けている。\nこの it は blue one（青いバッグ）を指すので、いちばん大きいバッグは青。\n答え：青（blue）',
  },
  {
    id: 'grade_e6_eigo_40',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    passage:
      "A: Excuse me. Where is the post office?\nB: Go straight and turn right at the bank. It's next to the library.\nA: Thank you!",
    question: '上の対話文を読んで、質問に答えなさい。\n質問：郵便局はどこにありますか。',
    answer: '図書館のとなり（next to the library）',
    hint: 'Bさんの発言の最後の文に注目する。',
    explanation:
      '【何を聞かれているか】\n対話文を読み、郵便局がどこにあるかを答える問題。\n\n【なぜBさんの発言の最後に注目するのか】\n「どこにあるか」という設問の答えは、Bさんが場所について説明している発言の最後の一文に直接示されている。\n\n【ポイント1】該当の発言を確認する\nBさんの発言の最後"It\'s next to the library."（それは図書館のとなりにあります）。\n\n【ポイント2】next toの意味を確認する\nnext to＝「〜のとなりに」という位置を表す表現。\n\n【ポイント3】答えの形を確認する\n本文の内容をそのまま使って答える。\n\n【答え】\n図書館のとなり（next to the library）\n\n【確かめ】\n答えが、Bさんの発言中の位置（図書館のとなり）と一致しているか確認する。\n\n【よくあるまちがい】\n対話文の別の部分（違う建物の説明）と混同してしまうミス。\n\n【ここが絶対】\n「どこにあるか」を問う設問は、next to〜のような位置を表す表現を含む発言に注目する。',
  },
  {
    id: 'grade_e6_eigo_41',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    passage: 'A: Did you finish your homework?\nB: Yes, I did. I finished it before dinner.\nA: Great job!',
    question: '上の対話文を読んで、質問に答えなさい。\n質問：Bさんはいつ宿題を終えましたか。',
    answer: '夕食の前（before dinner）',
    hint: 'Bさんの2つ目の発言に注目する。',
    explanation:
      '【何を聞かれているか】\n対話文を読み、Bさんがいつ宿題を終えたかを答える問題。\n\n【なぜBさんの2つ目の発言に注目するのか】\n「いつ終えたか」という設問の答えは、Bさんが宿題について話している2つ目の発言に直接示されている。\n\n【ポイント1】該当の発言を確認する\nBさんの発言"I finished it before dinner."（夕食の前にそれを終えました）。\n\n【ポイント2】before dinnerの意味を確認する\nbefore dinner＝「夕食の前に」という時を表す表現。\n\n【ポイント3】答えの形を確認する\n本文の内容をそのまま使って答える。\n\n【答え】\n夕食の前（before dinner）\n\n【確かめ】\n答えが、Bさんの発言中の時（夕食の前）と一致しているか確認する。\n\n【よくあるまちがい】\n対話文の別の部分の内容と混同してしまうミス。\n\n【ここが絶対】\n「いつ〜したか」を問う設問は、時を表す表現（before〜, after〜等）を含む発言に注目する。',
  },
  {
    id: 'grade_e6_eigo_42',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    passage:
      'A: I visited Kyoto last month. It was beautiful.\nB: Really? I want to go there next year.\nA: You should! The temples are amazing.',
    question: '上の対話文を読んで、質問に答えなさい。\n質問：Bさんはいつ京都に行きたいと思っていますか。',
    answer: '来年（next year）',
    hint: 'Bさんの発言に注目する。過去の話をしているのはAさん。',
    explanation:
      '【解説】\nAさんは last month（先月）京都を訪れたと過去の話をしている。\nBさんは I want to go there next year.（来年そこへ行きたいです）と言っているので、Bさんが行きたいのは来年。\n過去のこと（Aさん）と未来のこと（Bさん）を混同しないように読む。\n答え：来年（next year）',
  },

  // ============================================================
  // 語句の並べかえ（英作文） 4問 (43-46)
  // ============================================================
  {
    id: 'grade_e6_eigo_43',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '（　）内の語句を正しく並べかえて、意味の通る文を作りなさい。\n（ to / I / went / the park / yesterday ）',
    answer: 'I went to the park yesterday.',
    hint: '「主語＋動詞（過去形）＋to＋場所＋いつ」の順番になる。',
    explanation:
      '【何を聞かれているか】\n語句（to / I / went / the park / yesterday）を並べかえて、「私は昨日、公園に行きました。」という英文を完成させる問題。\n\n【なぜ主語＋動詞＋to＋場所＋いつの順にするのか】\n過去の出来事を述べる文は、主語の後に過去形の動詞、その後に行き先（to+場所）、最後に時を表す語句（いつ）を置くという語順の決まりがある。\n\n【ポイント1】主語と動詞を確認する\n主語I＋過去形の動詞went。\n\n【ポイント2】to+場所の位置を確認する\nwentの後にto the park（公園に）を続ける。\n\n【ポイント3】時を表す語の位置を確認する\n文末にyesterday（昨日）を置く。\n\n【答え】\nI went to the park yesterday.\n\n【確かめ】\nI→went→to the park→yesterdayという正しい順番になっているか確認する。\n\n【よくあるまちがい】\nyesterdayを文の途中に置いてしまうミス。\n\n【ここが絶対】\n「主語+動詞(過去形)+to+場所+いつ」の型でセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_44',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question: '（　）内の語句を正しく並べかえて、意味の通る文を作りなさい。\n（ a doctor / I / to / want / be ）',
    answer: 'I want to be a doctor.',
    hint: '「主語＋want to be＋なりたいもの」の順番になる。',
    explanation:
      '【何を聞かれているか】\n語句（a doctor / I / to / want / be）を並べかえて、「私は医者になりたいです。」という英文を完成させる問題。\n\n【なぜwant to beをひとまとまりにするのか】\n「〜になりたい」という表現は、want to be（動詞want＋不定詞to be）というひとまとまりの型として文の骨組みになる。\n\n【ポイント1】主語とwant to beを確認する\n主語I＋want to be（〜になりたい）。\n\n【ポイント2】なりたいものの位置を確認する\nwant to beの後にa doctor（医者）を続ける。\n\n【ポイント3】完成した文を確認する\n"I want to be a doctor."という型になる。\n\n【答え】\nI want to be a doctor.\n\n【確かめ】\nI→want to be→a doctorという正しい順番になっているか確認する。\n\n【よくあるまちがい】\ntoの位置を誤り、"I want be to a doctor."のような語順にしてしまうミス。\n\n【ここが絶対】\nwant to be+なりたいもの＝「〜になりたい」という型でセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_45',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '（　）内の語句を正しく並べかえて、意味の通る文を作りなさい。\n（ than / this / bigger / that / is ）',
    answer: 'This is bigger than that.',
    hint: '「主語＋is＋比較級＋than＋比べる相手」の順番になる。',
    explanation:
      '【何を聞かれているか】\n語句（than / this / bigger / that / is）を並べかえて、「これはあれより大きいです。」という英文を完成させる問題。\n\n【なぜ比較級の後にthanを続けるのか】\n「〜より…だ」という比較の文は、主語＋be動詞＋比較級＋than＋比べる相手、という語順で組み立てるという決まりがある。\n\n【ポイント1】主語とbe動詞を確認する\n主語This＋be動詞is。\n\n【ポイント2】比較級とthanの位置を確認する\nisの後に比較級bigger、その後にthan that（あれより）を続ける。\n\n【ポイント3】完成した文を確認する\n"This is bigger than that."という型になる。\n\n【答え】\nThis is bigger than that.\n\n【確かめ】\nThis→is→bigger→than thatという正しい順番になっているか確認する。\n\n【よくあるまちがい】\nthanをbiggerの前に置いてしまうミス。\n\n【ここが絶対】\n「主語+is+比較級+than+比べる相手」の型でセットで覚える。',
  },
  {
    id: 'grade_e6_eigo_46',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question: '（　）内の語句を正しく並べかえて、疑問文を作りなさい。\n（ see / did / you / what / yesterday ）',
    answer: 'What did you see yesterday?',
    hint: '「What＋did you＋動詞の元の形＋いつ？」の順番になる。',
    explanation:
      '【何を聞かれているか】\n語句（see / did / you / what / yesterday）を並べかえて、「あなたは昨日、何を見ましたか。」という疑問文を完成させる問題。\n\n【なぜdid youの後を原形にするのか】\n「何を〜しましたか」とたずねる疑問文は、What＋did you＋動詞の原形、という語順で組み立て、did youがあるので動詞は原形seeのまま使う。\n\n【ポイント1】疑問詞Whatの位置を確認する\nWhatを文頭に置く。\n\n【ポイント2】did youと動詞の形を確認する\nWhatの後にdid you、その後に動詞の原形seeを続ける。\n\n【ポイント3】時を表す語の位置を確認する\n文末にyesterdayを置き、文末に？をつける。\n\n【答え】\nWhat did you see yesterday?\n\n【確かめ】\nWhat→did you→see→yesterdayという正しい順番になっているか確認する。\n\n【よくあるまちがい】\ndid youの後の動詞をsaw（過去形）にしてしまうミス。\n\n【ここが絶対】\n「What+did+主語+動詞の原形+いつ?」の型でセットで覚える。',
  },

  // ============================================================
  // 適語補充（正しい形を選ぶ） 4問 (47-50)
  // ============================================================
  {
    id: 'grade_e6_eigo_47',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nMy sister (　) her room last Sunday. （姉は先週の日曜日、部屋を掃除しました。）',
    answer: 'cleaned',
    choices: ['cleaned', 'cleans', 'cleaning', 'clean'],
    hint: 'last Sunday があるので過去形にする。',
    explanation:
      '【解説】\nlast Sunday（先週の日曜日）があるので、動詞は過去形にする。\nclean の過去形は clean に ed をつけて cleaned。\n答え：cleaned',
  },
  {
    id: 'grade_e6_eigo_48',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nThis mountain is (　) than that one. （この山はあの山より高いです。）',
    answer: 'higher',
    choices: ['higher', 'more high', 'highest', 'high'],
    hint: 'than があるので比較級にする。high は短い単語なので er をつける。',
    explanation:
      '【解説】\nthan（〜より）があるので比較級にする。\nhigh は短い単語なので、前に more をつけずに最後に er をつけて higher とする。\n答え：higher',
    pitfall: 'more high という形はまちがい。high のような短い単語は er をつけるだけでよい。',
  },
  {
    id: 'grade_e6_eigo_49',
    subject: 'eigo',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る単語はどれですか。\nWe (　) visit Kyoto next spring. （わたしたちは来年の春、京都を訪れるつもりです。）',
    answer: 'will',
    choices: ['will', 'are', 'do', 'can'],
    hint: 'next spring（来年の春）は未来のことを表す言葉。',
    explanation:
      '【解説】\nnext spring（来年の春）は未来のことを表すので、未来を表す will を使う。\nwill のあとの動詞 visit は元の形のまま。\n答え：will',
  },
  {
    id: 'grade_e6_eigo_50',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: GRADE,
    question:
      '次の文の（　）に入る正しい形はどれですか。\nShe (　) a letter to her grandmother yesterday. （彼女は昨日、祖母に手紙を書きました。）',
    answer: 'wrote',
    choices: ['wrote', 'writed', 'writes', 'writing'],
    hint: 'write の過去形は特別な形に変わる。',
    explanation:
      '【解説】\nwrite（書く）の過去形は writed ではなく wrote という特別な形になる。\nyesterday（昨日）があるので過去形にする。\n答え：wrote',
  },
];
