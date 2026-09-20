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
      '【解説】\n「〜より大きい」というときは big の比較級 bigger を使う。\nbig のように短母音＋子音字で終わる語は、子音字を重ねてから er をつける（big→bigger）。\n答え：bigger',
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
      '【解説】\n「〜より小さい」は small の比較級 smaller を使う。\n比較級のあとには than（〜より）を続ける。\n答え：This dog is smaller than that dog.',
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
      '【解説】\n「いちばん高い」は high の最上級 highest を使う。最上級の前には the をつける。\n「〜の中で」というときは in Japan（日本の中で）のように in を使う。\n答え：Mt. Fuji is the highest mountain in Japan.',
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
      '【解説】\ngood（よい）の比較級は gooder ではなく better という特別な形になる。\nI feel better than yesterday. で「私は昨日より気分がいいです」という文になる。\n答え：I feel better than yesterday.',
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
      '【解説】\nfamous（有名な）のようにつづりが長い単語は、前に more を置いて比較級にする。\nfamouser という形は存在しない。\n答え：This singer is more famous than that singer.',
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
      '【解説】\nold の最上級は old に est をつけて oldest。\n「いちばん年上」は the oldest で表す。\n答え：oldest',
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
      '【解説】\n「図書館」は英語で library（ライブラリー）。\n答え：library',
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
      '【解説】\n「駅」は英語で station（ステーション）。\n答え：station',
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
      '【解説】\n「〜に曲がってください」は Turn 〜. の形で表す。\n「左に」は left、「右に」は right。\nturn のあとに to や on はつけない。\n答え：Turn left.',
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
      '【解説】\nBさんの発言 I went to the zoo with my family.（家族と動物園に行きました）から、週末に動物園へ行ったことがわかる。\n答え：動物園（the zoo）',
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
      '【解説】\nBさんの発言 I want to be a teacher.（先生になりたいです）から、将来なりたいものが先生だとわかる。\n答え：先生（a teacher）',
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
      '【解説】\nBさんの発言の最後 It\'s next to the library.（それは図書館のとなりにあります）から、郵便局の場所がわかる。\n答え：図書館のとなり（next to the library）',
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
      '【解説】\nBさんの発言 I finished it before dinner.（夕食の前にそれを終えました）から、宿題を終えたのは夕食の前だとわかる。\n答え：夕食の前（before dinner）',
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
      '【解説】\n「私は昨日、公園に行きました」という文を作る。\n主語 I のあとに過去形の動詞 went、そのあとに to the park（公園に）、最後に yesterday（昨日）を置く。\n答え：I went to the park yesterday.',
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
      '【解説】\n「私は医者になりたいです」という文を作る。\n主語 I のあとに want to be（〜になりたい）、最後に a doctor（医者）を置く。\n答え：I want to be a doctor.',
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
      '【解説】\n「これはあれより大きいです」という文を作る。\n主語 This のあとに is、そのあとに比較級 bigger、最後に than that（あれより）を置く。\n答え：This is bigger than that.',
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
      '【解説】\n「あなたは昨日、何を見ましたか」という疑問文を作る。\nWhat のあとに did you、そのあとに動詞の元の形 see、最後に yesterday を置いてクエスチョンマークをつける。\n答え：What did you see yesterday?',
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
