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
      '【何を聞かれているか】\nI (　) a student. の空らんに入るbe動詞を選びます。「わたしは学生です」という文にします。\n\n【be動詞とは何をする語か】\nbe動詞は「AはBです」と、主語とそのあとの語をイコールで結ぶはたらきをします。I ＝ a student（わたし＝学生）というつながりを作るのがbe動詞です。\n日本語の「です」にあたると考えるとわかりやすいのですが、日本語とちがって、英語のbe動詞は主語によって形が変わります。ここが中1英語の最初の関門です。\n\n【be動詞の使い分け】\nam　……　主語がI のときだけ\nis　……　主語が he / she / it や、1人・1つのもの（3人称単数）のとき\nare　……　主語が you のとき、および we / they など2人以上・2つ以上のとき\n\n【ステップ1】主語を確かめる。\n文の先頭は I（わたしは）。\n\n【ステップ2】表にあてはめる。\n主語がIなのだから、be動詞はam。\n\n【ステップ3】文を組み立てて意味を確かめる。\nI am a student.　わたしは学生です。\n\n【答え】am\n\n【ほかの選択肢がなぜだめか】\nis　……　主語がhe / she / itのときの形。Iには使いません。\nare　……　主語がyouや複数のときの形。\nbe　……　これはam / is / areのもとの形（原形）です。原形のbeをそのまま使えるのは、命令文（Be quiet.）や、canなどの助動詞のあと（can be）のときだけで、ふつうの文の動詞としては使えません。\n\n【よくあるまちがい】\n・a を書き忘れて I am student. としてしまう。studentは数えられる名詞なので、1人なら必ず a が必要です。\n・amはIとセットの形なので、I are や I is という組み合わせは英語には存在しません。「I にはam」と、この1組だけは丸ごと覚えてしまいましょう。',
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
      '【何を聞かれているか】\n「彼女は先生です。」を英語にする問題。\n\n【なぜisを使うのか】\n主語がhe・she・it（3人称単数）のときのbe動詞はisになるという決まりがある。\n\n【ポイント1】主語の種類を確認する\n主語Sheは3人称単数。\n\n【ポイント2】be動詞の対応を確認する\n3人称単数にはis、複数やyouにはare、Iにはamを使う。\n\n【ポイント3】完成した文を確認する\n"She is a teacher."＝「彼女は先生です」。\n\n【答え】\nShe is a teacher.\n\n【確かめ】\n主語Sheに対応するisが選ばれ、am・areと混同していないか確認する。\n\n【よくあるまちがい】\n主語の人称を確認せずareやamを選んでしまうミス。\n\n【ここが絶対】\nI→am、He/She/It（三人称単数）→is、You/複数→areという対応で覚える。',
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
      '【何を聞かれているか】\n「私たちは忙しくありません。」を英語にする問題。\n\n【なぜbe動詞の直後にnotを置くのか】\nbe動詞の否定文は、be動詞の位置を変えず、直後にnotを加えるだけで作れるという決まりがある。\n\n【ポイント1】主語の種類を確認する\n主語Weは複数。\n\n【ポイント2】be動詞と否定文の形を確認する\n複数の主語にはareを使い、areの否定はare not（短縮形aren\'t）。\n\n【ポイント3】完成した文を確認する\n"We are not busy."＝「私たちは忙しくありません」。\n\n【答え】\nWe are not busy.\n\n【確かめ】\nareの直後にnotが置かれているか確認する。\n\n【よくあるまちがい】\n"We isn\'t busy."のように、複数の主語にisn\'tを使ってしまうミス。\n\n【ここが絶対】\nbe動詞の否定はbe動詞のすぐ後ろにnotを置くだけ、と覚える。',
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
      '【何を聞かれているか】\n"They (　) my friends."（彼らはわたしの友だちです。）の空欄に入る語を選ぶ問題。\n\n【なぜareを使うのか】\n主語が複数（they, we, youなど）のときのbe動詞はareになるという決まりがある。\n\n【ポイント1】主語の種類を確認する\n主語Theyは複数。\n\n【ポイント2】be動詞の対応を確認する\n複数の主語にはareを使う。\n\n【ポイント3】他の選択肢を消去する\nis（三人称単数用）、am（I用）、be（原形）はいずれも複数の主語Theyには使わない。\n\n【答え】\nare\n\n【確かめ】\n主語Theyに対応するareが選ばれ、is・amと混同していないか確認する。\n\n【よくあるまちがい】\n主語の人称・数を確認せずisを選んでしまうミス。\n\n【ここが絶対】\nI→am、He/She/It（三人称単数）→is、You/複数→areという対応で覚える。',
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
      '【何を聞かれているか】\n"Is he a doctor?"に対して「いいえ、ちがいます」と答える正しい文を選ぶ問題。\n\n【なぜbe動詞を使って答えるのか】\nbe動詞の疑問文（Is he〜?）には、be動詞を使って答えるという決まりがある。\n\n【ポイント1】疑問文の形を確認する\n"Is he a doctor?"＝be動詞isを使った疑問文。\n\n【ポイント2】答え方の形を確認する\nYes, he is. またはNo, he isn\'t.のように、be動詞を使って答える。\n\n【ポイント3】他の選択肢を消去する\ndon\'t、doesn\'t（一般動詞用）を使った答えは、be動詞の疑問文には合わない。\n\n【答え】\nNo, he isn\'t.\n\n【確かめ】\n答えがbe動詞isn\'t（isn\'tはis notの短縮形）を使った形になっているか確認する。\n\n【よくあるまちがい】\nbe動詞の疑問文に、一般動詞の否定（don\'t, doesn\'t）で答えてしまうミス。\n\n【ここが絶対】\nbe動詞の疑問文にはbe動詞、一般動詞の疑問文にはdo/doesを使って答えると覚える。',
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
      '【何を聞かれているか】\nWe (　) English every day.（私たちは毎日英語を勉強します。）の空らんに入る動詞の形を選びます。\n\n【一般動詞の形は主語で決まる】\nstudy（勉強する）のように、動作や状態を表す動詞を一般動詞といいます。現在のことを言うとき、一般動詞の形は主語によって2通りに分かれます。\n主語が he / she / it など3人称単数のとき　……　語の最後に s や es をつける（studies）\nそれ以外（I / you / we / they など）のとき　……　原形のまま（study）\nここの主語は we（わたしたち）で複数なので、sのつかない原形をそのまま使います。\n\n【ステップ1】主語を確かめる。\nWe は「わたしたち」で2人以上。3人称単数ではない。\n\n【ステップ2】sをつけるかどうかを決める。\n3人称単数ではないので、sはつけない。原形のまま。\n\n【ステップ3】あてはめて意味を確かめる。\nWe study English every day.　わたしたちは毎日英語を勉強します。\n\n【答え】study\n\n【ほかの選択肢がなぜだめか】\nstudies　……　主語がhe / she / itなど3人称単数のときの形です。She studies English. なら正しい文になります。\nstudying　……　ing形。現在進行形で使う形なので、前にbe動詞が必要です。We are studying なら成り立ちます。\nstudied　……　過去形。「勉強しました」という意味になり、every day（毎日）という今の習慣を表す語と合いません。\n\n【よくあるまちがい】\n・be動詞と一般動詞を1つの文に2つ並べて、We are study English. としてしまう。1つの文に動詞は1つが原則です。be動詞を使うなら、そのあとはing形にします。\n・every day（毎日）は2語で書きます。everyday と1語でつなげると「毎日の」という別の意味の語になります。',
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
      '【何を聞かれているか】\n「私はネコを飼っていません。」を英語にします。一般動詞の否定文の作り方がためされています。\n\n【なぜ動詞の前に助けが必要なのか】\nbe動詞の文では、notをbe動詞のうしろに置くだけで否定文になります（I am not busy.）。\nところが一般動詞（have, play, likeなど）は、うしろにnotをつけるだけでは否定文になりません。そこで do という助っ人の語を借りてきて、その do に not をくっつけ、動詞の前に置きます。これが do not、ちぢめて don\'t です。\n大事なのは、doが「否定するはたらき」を引き受けたので、そのあとの動詞は何もしない原形にもどる、ということです。\n\n【ステップ1】主語を確かめて、doとdoesを選ぶ。\n主語はI。3人称単数ではないので do の方を使う。→ don\'t\n\n【ステップ2】don\'t を動詞の前に置く。\nI don\'t have …\n\n【ステップ3】動詞は原形のまま。「飼っている」は have で表す。\nI don\'t have a cat.\n\n【答え】I don\'t have a cat.\n\n【ほかの選択肢がなぜだめか】\nI not have a cat.　……　notだけでは一般動詞を否定できません。do の助けが必要です。\nI doesn\'t have a cat.　……　doesn\'t は主語がhe / she / itなど3人称単数のときの形。I には使いません。\nI am not have a cat.　……　be動詞と一般動詞が1つの文に2つ入ってしまっています。\n\n【よくあるまちがい】\n・don\'t のあとの動詞にsをつけて He doesn\'t has … のようにしてしまう。don\'t / doesn\'t のあとは必ず原形です。\n・「飼う」を辞書で引いて keep を使いたくなりますが、ペットを飼っている、という言い方はふつう have を使います。',
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
      '【何を聞かれているか】\n「あなたは朝食を食べますか。」を英語にします。一般動詞の疑問文の作り方がためされています。\n\n【なぜDoを文の先頭に置くのか】\nbe動詞の文は、be動詞を主語の前に出すだけで疑問文になります（You are busy. → Are you busy?）。\nしかし一般動詞は、動詞そのものを前に出すことができません（Eat you breakfast? とは言えません）。そこで否定文のときと同じように do という助っ人を借りてきて、その do を文の先頭に置きます。\nつまり、be動詞のときはbe動詞自身が前に出て、一般動詞のときは代わりに do が前に出る、という役割分担です。そして do が疑問のはたらきを引き受けるので、あとの動詞は原形のままです。\n\n【ステップ1】主語を確かめて、DoとDoesを選ぶ。\n主語はyou。3人称単数ではないので Do を使う。\n\n【ステップ2】Do を文の先頭に置き、〈Do ＋ 主語 ＋ 動詞の原形 〜?〉の順にならべる。\nDo you eat …?\n\n【ステップ3】残りを続けて、文の終わりにクエスチョンマークをつける。\nDo you eat breakfast?\n\n【答え】Do you eat breakfast?\n\n【答え方もセットで覚える】\nYes, I do. / No, I don\'t. と、たずねられた do を使って答えます。\n\n【ほかの選択肢がなぜだめか】\nAre you eat breakfast?　……　be動詞と一般動詞が2つ入っています。\nYou eat breakfast?　……　語順がふつうの文のままです。話し言葉では通じますが、書き言葉としては正しくありません。\nDoes you eat breakfast?　……　Does は主語が3人称単数のときの形。you には Do を使います。\n\n【よくあるまちがい】\n・Do you eats 〜? としてしまう。Do があるので動詞は原形です。\n・breakfast に the や a をつけてしまう。食事の名前（breakfast, lunch, dinner）にはふつう何もつけません。',
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
      '【何を聞かれているか】\nDo you like tea? に「いいえ、好きではありません」と答える文を選びます。答え方のきまりがためされています。\n\n【なぜdoで答えるのか】\n英語の答え方には、はっきりした決まりがあります。たずねられたときに使われた語を、そのまま使って答える、という決まりです。\nDo 〜? と do でたずねられたら、do で答える。\nAre 〜? と be動詞でたずねられたら、be動詞で答える。\nCan 〜? と can でたずねられたら、can で答える。\nこの決まりを知っていれば、答えの形はいつでも自分で作れます。今回は Do you 〜? なので、答えにも do を使います。\n\n【ステップ1】たずねている語を見つける。\n文の先頭は Do。だから答えにも do を使う。\n\n【ステップ2】主語を決める。\nyou（あなたは）とたずねられているので、答えるのは自分。主語は I。\n\n【ステップ3】否定なので、do に not をつけてちぢめる。\ndo not → don\'t\n\n【ステップ4】〈No, ＋ 主語 ＋ don\'t.〉の形にならべる。\nNo, I don\'t.\n\n【答え】No, I don\'t.\n\n【「はい」のときは】\nYes, I do. となります。こちらは短くしません。do not をちぢめた don\'t はありますが、do をちぢめた形はないからです。\n\n【ほかの選択肢がなぜだめか】\nNo, I amn\'t.　……　amn\'t という語は英語にありません。am not はちぢめない、と覚えます。\nNo, I isn\'t.　……　isは主語がhe / she / itのときの形で、Iには使いません。しかもDoでたずねられているのでbe動詞では答えません。\nNo, I not.　……　notだけでは否定になりません。do の助けが必要です。\n\n【よくあるまちがい】\n・No, I don\'t like. のように動詞まで書いてしまう。短く答えるときは、動詞から先は省くのがふつうです。\n・No, I do. と、notを入れ忘れてしまう。これでは「はい」の意味になってしまいます。',
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
      '【何を聞かれているか】\n「彼らは公園で走ります。」を英語にします。動詞の形と、場所を表す前置詞の2つがためされています。\n\n【2つのきまりを順に確かめる】\n1つ目は動詞の形です。主語が they（彼らは）で複数なので、3人称単数のsはつきません。原形のまま run を使います。sがつくのは主語が he / she / it など1人・1つのときだけです。\n2つ目は場所の言い方です。公園という、まわりを囲まれた広がりのある場所の中にいる、というときは前置詞 in を使います。in はもともと「〜の中に」という意味で、空間の内側にいることを表します。\n\n【ステップ1】主語を確かめる。\nThey は複数なので、動詞にsはつけない。→ run\n\n【ステップ2】場所を表す語を選ぶ。\n公園の中で、なので in the park。\n\n【ステップ3】〈主語 ＋ 動詞 ＋ 場所〉の順にならべる。\nThey run in the park.\n\n【答え】They run in the park.\n\n【ほかの選択肢がなぜだめか】\nThey runs in the park.　……　sがつくのは主語が3人称単数のときだけです。theyは複数なのでつきません。\nThey running in the park.　……　ing形だけでは文になりません。前にbe動詞が必要で、They are running なら「今走っている最中だ」という現在進行形になります。\nThey are run in the park.　……　be動詞と一般動詞の原形が並んでいて、文の形がこわれています。\n\n【よくあるまちがい】\n・the を落として in park としてしまう。どの公園かがおたがいにわかっているときは the をつけます。\n・at the park と書いてしまう。at は地点として点でとらえる言い方で、まちがいとまでは言えませんが、公園の中を走っている場面では in が自然です。',
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
      '【何を聞かれているか】\nThis is (　) pen.（これは彼女のペンです。）の空らんに入る代名詞を選びます。\n\n【代名詞は形によって役わりがちがう】\n「彼女」を表す語は、文の中でのはたらきによって4つに変わります。\nshe　……　「彼女は」　文の主語になる形\nher　……　「彼女の」　名詞の前に置いて、持ち主を表す形\nher　……　「彼女を・彼女に」　動詞や前置詞のあとに来る形\nhers　……　「彼女のもの」　これ1語で「彼女の〜」という中身まで表す形\n今回は空らんのすぐうしろに pen という名詞があります。名詞の前に置いて持ち主を表す形が必要なので、her を選びます。\n\n【ステップ1】空らんのうしろを見る。\nうしろは pen。名詞である。\n\n【ステップ2】名詞の前に置ける形をさがす。\n持ち主を表す形（〜の）が入るとわかる。「彼女の」は her。\n\n【ステップ3】あてはめて意味を確かめる。\nThis is her pen.　これは彼女のペンです。\n\n【答え】her\n\n【ほかの選択肢がなぜだめか】\nshe　……　「彼女は」という主語の形。名詞の前には置けません。\nhers　……　「彼女のもの」。この1語で pen の意味までふくんでいるので、うしろに名詞は置けません。This is hers. なら正しい文になります。\nherself　……　「彼女自身」という意味の語で、ここには合いません。\n\n【見分け方のコツ】\nうしろに名詞があれば「〜の」の形（my / your / his / her / our / their）。\nうしろに何もなくて文が終わるなら「〜のもの」の形（mine / yours / his / hers / ours / theirs）。\nこの1点だけで、ほとんどの問題は解けます。\n\n【よくあるまちがい】\n・her pen と hers が同じ意味だと気づかずに使い分けられない。This is her pen. ＝ This is hers. で、どちらも同じことを言っています。\n・his は「彼の」と「彼のもの」の両方に使えて形が変わりません。herのように区別がないので、his だけ別あつかいと覚えておきましょう。',
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
      '【何を聞かれているか】\n「あれは私のものです。」を英語にします。「私の」と「私のもの」のちがいがためされています。\n\n【myとmineのちがい】\nmy は「私の」で、すぐうしろに名詞を必要とします。my pen（私のペン）のように、必ず何かとセットで使います。\nmine は「私のもの」で、この1語の中にすでに「〜のもの」という中身までふくまれています。だからうしろに名詞をつけません。\n日本語で考えると、「私の」だけでは文が終わりませんが、「私のもの」なら文が終わります。英語もまったく同じ感覚です。\n\n【ステップ1】日本語をよく見る。\n「私のものです」と言い切っていて、そのあとに名詞が続いていない。\n\n【ステップ2】うしろに名詞がいらない形を選ぶ。\n「〜のもの」を1語で表す形は mine。\n\n【ステップ3】〈That is 〜.〉にあてはめる。\nThat is mine.\n\n【答え】That is mine.\n\n【ほかの選択肢がなぜだめか】\nThat is my.　……　my はうしろに名詞が必要です。That is my pen. なら正しい文になります。\nThat is me.　……　me は「私を・私に」という形です。That is me. は写真を指して「これが私です」と言うときには使えますが、持ち主を表す言い方ではありません。\nThat is I.　……　I は主語にしか使えない形です。\n\n【セットで覚える組み合わせ】\nmy → mine　　your → yours　　his → his　　her → hers　　our → ours　　their → theirs\nhis だけは「彼の」も「彼のもの」も同じ形です。\n\n【よくあるまちがい】\n・mine に s をつけて mines と書いてしまう。mine に複数形はありません。\n・「私のもの」なのに my\'s のようにアポストロフィとsをつけてしまう。人の名前には Tom\'s のようにつけますが、代名詞にはつけません。',
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
      '【何を聞かれているか】\nLook at that dog. (　) is very cute.（あの犬を見て。それはとてもかわいいです。）の空らんに入る代名詞を選びます。\n\n【itは何を指す語か】\n英語では、一度出てきた名詞をくり返さず、代名詞に置きかえます。そのとき、指すものによって使う語が変わります。\nhe　……　男の人ひとり\nshe　……　女の人ひとり\nit　……　人以外のもの、動物、できごと\nthey　……　2つ以上、2人以上\nここで指しているのは前の文の that dog（あの犬）。1ぴきの動物なので it を使います。文の主語の位置なので、大文字で It と書き始めます。\n\n【ステップ1】空らんが何を指しているかをさがす。\n前の文の that dog（あの犬）を指している。\n\n【ステップ2】それが人か、人以外かを見る。\n犬は動物なので、人以外。→ it\n\n【ステップ3】1ぴきか複数かを見る。\nthat dog は1ぴきなので単数。they ではない。\n\n【ステップ4】文のはじめなので大文字にする。\nIt is very cute.\n\n【答え】It\n\n【ほかの選択肢がなぜだめか】\nHe / She　……　人を指す語です。ただし、飼っているペットのように名前を知っていて家族のように思っている動物には、he / she を使うこともあります。この文のように、通りすがりに見かけた犬には it が自然です。\nThey　……　2ひき以上を指す語。that dog は1ぴきです。\n\n【よくあるまちがい】\n・itを「それ」という日本語だけで覚えてしまい、天気や時刻を表す It is sunny. / It is seven o\'clock. のような使い方でつまずく。この it は何かを指してはおらず、英語の文には主語が必要なので置かれているだけです。\n・cute の前の very を忘れる。very は「とても」という意味で、形容詞を強める語です。',
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
      '【何を聞かれているか】\n「彼はギターを弾きます。」を英語にします。3人称単数現在のsがためされています。\n\n【3人称単数現在のsとは何か】\n人称とは、話し手（1人称＝I, we）、聞き手（2人称＝you）、それ以外（3人称＝he, she, it, Tom, my mother など）の区別のことです。\n主語が3人称で、しかも1人・1つ（単数）で、しかも今のことを言う（現在）とき、このときだけ一般動詞の最後に s をつけます。3つの条件がそろったときだけなので、3人称単数現在のsと呼ばれます。\n意味は変わりません。ただ、主語の形に動詞を合わせる、という英語の決まりです。\n\n【ステップ1】主語を確かめる。\nHe は3人称、1人、そして今のことなので、3つの条件がそろう。\n\n【ステップ2】動詞にsをつける。\nplay → plays\n\n【ステップ3】文をならべる。\nHe plays the guitar.\n\n【答え】He plays the guitar.\n\n【なぜguitarにtheがつくのか】\n楽器を演奏するというときは、その楽器の名前の前に the をつけるのがふつうです。play the piano、play the violin のように覚えます。いっぽうスポーツをするというときは the をつけません（play soccer, play tennis）。\n\n【ほかの選択肢がなぜだめか】\nHe play the guitar.　……　主語が3人称単数なのにsがありません。\nHe playing the guitar.　……　ing形だけでは文になりません。前にbe動詞が必要です。\nHe is play the guitar.　……　be動詞と一般動詞の原形が並んでいて、文の形がこわれています。\n\n【よくあるまちがい】\n・複数の主語にもsをつけて They plays としてしまう。sがつくのは単数のときだけです。主語にsがついたら動詞にはつかない、と覚えると混同しにくくなります。\n・過去のことなのにsをつけてしまう。3人称単数のsは現在形のときだけの決まりです。',
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
      '【何を聞かれているか】\nMy mother (　) breakfast every morning.（わたしの母は毎朝朝食を作ります。）の空らんに入る動詞の形を選びます。\n\n【主語が長いときの見分け方】\n3人称単数現在のsをつけるかどうかは、主語が「he / she / it に置きかえられる1人・1つ」かどうかで決まります。\nここの主語は My mother。2語ありますが、指しているのは母ひとりです。she に置きかえられるので、3人称単数です。だから動詞に s をつけます。\n主語が長くて迷ったら、「これは he か she か it に言いかえられるか」と考えるのがいちばん確実な見分け方です。My father → he、This book → it、Tom and I → we（複数なのでsなし）というように判断できます。\n\n【ステップ1】主語をひとかたまりで見る。\nMy mother ＝ she に置きかえられる。3人称単数。\n\n【ステップ2】時を確かめる。\nevery morning（毎朝）とあるので、くり返している今の習慣。現在形を使う。\n\n【ステップ3】動詞にsをつける。\ncook → cooks\n\n【ステップ4】あてはめる。\nMy mother cooks breakfast every morning.\n\n【答え】cooks\n\n【ほかの選択肢がなぜだめか】\ncook　……　原形。主語が3人称単数なのでsが必要です。\ncooking　……　ing形。前にbe動詞がないと文になりません。\nto cook　……　to のついた形はここでは動詞のはたらきをしません。\n\n【よくあるまちがい】\n・主語の最後の語だけを見て、mother が単数だと気づかず原形にしてしまう。主語はどこからどこまでかを、まずはっきりさせましょう。\n・every morning を「毎朝」ではなく「今朝」と読みちがえる。今朝なら this morning で、過去形を使うことが多くなります。every がつくとくり返しの習慣を表し、現在形になります。',
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
      'sをつける場所は1か所だけ。ふつうの文（Tom speaks English.）では動詞にsをつけるが、疑問文・否定文ではDoesの方がsを引き受けるので、動詞は原形speakに戻す。Does Tom speaks 〜? のようにsが2つになるのがいちばん多いまちがい。',
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
      '【何を聞かれているか】\n"She (　) every day."（彼女は毎日勉強します。）の空欄に入る語を選ぶ問題。\n\n【なぜyをiに変えてesをつけるのか】\nstudyのように子音字＋yで終わる動詞は、3人称単数現在形にするときyをiに変えてesをつけるという決まりがある。\n\n【ポイント1】主語の種類を確認する\n主語Sheは3人称単数。\n\n【ポイント2】studyの変化を確認する\nstudy→studies（yをiに変えてesをつける）。\n\n【ポイント3】他の選択肢を消去する\nstudys（yをそのまま残す誤り）、studyes（間違った変化）、study\'s（アポストロフィを使う誤り）はいずれも不適切。\n\n【答え】\nstudies\n\n【確かめ】\nstudyがstudiesに正しく変化しているか（yがiに変わっているか）確認する。\n\n【よくあるまちがい】\nstudyにそのままsをつけてstudysとしてしまうミス。\n\n【ここが絶対】\n子音字+y→yをiに変えてes（study→studies, try→tries）。母音字+yのときはそのままs（play→plays）と覚える。',
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
      '【何を聞かれているか】\n「彼はいつもバスで学校に行きます。」を英語にする問題。\n\n【なぜgoにesをつけるのか】\ngoのようにo・s・x・ch・shで終わる動詞は、3人称単数現在形にするときesをつけるという決まりがある。\n\n【ポイント1】goの変化を確認する\ngo→goes（3人称単数現在形）。\n\n【ポイント2】alwaysの位置を確認する\nalwaysのような頻度を表す語は、be動詞・助動詞のあとか一般動詞の前に置く。\n\n【ポイント3】完成した文を確認する\n"He always goes to school by bus."＝「彼はいつもバスで学校に行きます」。\n\n【答え】\nHe always goes to school by bus.\n\n【確かめ】\nalwaysがgoesの前に置かれており、動詞の後ろに置かれていないか確認する。\n\n【よくあるまちがい】\nalwaysを"He goes always..."のように動詞の後に置いてしまうミス。\n\n【ここが絶対】\n頻度を表す語（always等）は一般動詞の前に置く、goのようなo・s・x・ch・shで終わる動詞はesをつけると覚える。',
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
      '【何を聞かれているか】\n「私は今、テレビを見ています。」を英語にする問題。\n\n【なぜbe動詞+ing形を使うのか】\n「今〜しています」という現在進行形は、be動詞＋動詞のing形という組み合わせで表すという決まりがある。\n\n【ポイント1】主語Iのbe動詞を確認する\n主語がIのときのbe動詞はam。\n\n【ポイント2】動詞のing形を確認する\nwatch→watching。\n\n【ポイント3】完成した文を確認する\n"I am watching TV now."＝「私は今、テレビを見ています」。\n\n【答え】\nI am watching TV now.\n\n【確かめ】\nbe動詞am（主語Iに対応）と、動詞のing形watchingの両方が使われているか確認する。\n\n【よくあるまちがい】\nbe動詞を抜かして"I watching TV now."としてしまうミス。\n\n【ここが絶対】\n現在進行形＝be動詞+動詞のing形、という型でセットで覚える。',
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
      '【何を聞かれているか】\n"She (　) a letter now."（彼女は今、手紙を書いています。）の空欄に入る語句を選ぶ問題。\n\n【なぜis writingを使うのか】\n「今〜しています」という現在進行形は、主語Sheに対応するbe動詞isと、動詞のing形writingを組み合わせて表す。\n\n【ポイント1】主語Sheのbe動詞を確認する\n主語がshe（3人称単数）のときのbe動詞はis。\n\n【ポイント2】writeのing形を確認する\nwrite→writing（eをとってingをつける）。\n\n【ポイント3】他の選択肢を消去する\nwrites（現在形）、write（原形）、is write（動詞がing形になっていない）はいずれも不適切。\n\n【答え】\nis writing\n\n【確かめ】\nbe動詞isと、writeのing形writingの両方が正しく使われているか確認する。\n\n【よくあるまちがい】\nwriteのeを消さずにwriteingとしてしまうミス。\n\n【ここが絶対】\neで終わる動詞は、eをとってからingをつける（write→writing）と覚える。',
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
      '【何を聞かれているか】\n「彼らは今、勉強していません。」を英語にします。現在進行形の否定文の作り方がためされています。\n\n【現在進行形とその否定文】\n現在進行形は〈be動詞 ＋ 動詞のing形〉で、「今ちょうど〜している最中だ」という動作の途中を表します。\nこの形の否定文は、とても簡単です。be動詞のうしろに not を置くだけ。一般動詞のときのように don\'t を借りてくる必要はありません。\nなぜなら、現在進行形の文では be動詞が文の中心の動詞になっているからです。be動詞の文は not をうしろに置けば否定になる、というもとの決まりがそのまま使えます。\n\n【ステップ1】主語に合うbe動詞を選ぶ。\nThey は複数なので are。\n\n【ステップ2】be動詞のうしろに not を置く。\nThey are not …\n\n【ステップ3】動詞をing形にして続ける。\nstudy → studying\nThey are not studying …\n\n【ステップ4】now（今）を最後に置く。\nThey are not studying now.\n\n【答え】They are not studying now.\n\n【ちぢめた形】\nare not は aren\'t とちぢめられます。They aren\'t studying now. も同じ意味で正解です。\n\n【ほかの選択肢がなぜだめか】\nThey don\'t studying now.　……　don\'t は一般動詞の否定に使う形で、そのあとは原形が来ます。ing形とは組み合わせません。\nThey are not study now.　……　進行形なのに動詞が原形のままです。ing形が必要です。\nThey not are studying now.　……　notの位置がまちがっています。notはbe動詞のうしろです。\n\n【よくあるまちがい】\n・ふつうの現在形と進行形を混同する。They don\'t study. は「（習慣として）勉強しない」、They are not studying. は「今この瞬間は勉強していない」。表す時間のはばがちがいます。\n・know（知っている）、like（好きだ）、have（持っている）のように、動作ではなく状態を表す動詞は、ふつう進行形にしません。',
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
      '【何を聞かれているか】\n「あなたは今、走っていますか。」を英語にします。現在進行形の疑問文の作り方がためされています。\n\n【なぜbe動詞を前に出すのか】\n現在進行形の文〈be動詞 ＋ ing形〉では、be動詞が文の中心の動詞です。\nそして英語では、be動詞の文を疑問文にするときは、be動詞を主語の前に出す、という決まりがあります。この決まりがそのまま使えるので、be動詞を先頭に出せば疑問文になります。\nDo や Does を借りてくる必要はありません。借りてくるのは、be動詞がいない一般動詞の文のときだけです。\n\n【ステップ1】まずふつうの文を組み立てる。\nYou are running now.\n\n【ステップ2】be動詞を主語の前に出す。\nAre you running now\n\n【ステップ3】文の終わりにクエスチョンマークをつける。\nAre you running now?\n\n【答え】Are you running now?\n\n【答え方もセットで覚える】\nYes, I am. / No, I am not.（No, I\'m not.）\nbe動詞でたずねられたので、be動詞で答えます。\n\n【runのing形に注意】\nrun は最後の n を重ねて running とします。〈短い母音 ＋ 子音字1つ〉で終わる動詞は、子音字を重ねてからingをつける、という決まりです。swim → swimming、sit → sitting も同じ仲間です。\n\n【ほかの選択肢がなぜだめか】\nDo you running now?　……　be動詞がある文なので、Doを借りてくる必要はありません。\nAre you run now?　……　進行形なのに動詞が原形のままです。\nYou are running now?　……　語順がふつうの文のままです。\n\n【よくあるまちがい】\n・ing形にするとき n を重ねず runing と書いてしまう。つづりのミスがいちばん出やすいところです。\n・答えるときに Yes, I do. としてしまう。Are 〜? と聞かれたら am / are / is で答えます。',
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
      '【何を聞かれているか】\n"He is (　) now."（彼は今、走っています。）の空欄に入る語を選ぶ問題。\n\n【なぜnを重ねるのか】\nrun（走る）のように〈短い母音字＋子音字〉で終わる動詞は、ing形にするとき子音字を重ねてingをつけるという決まりがある。\n\n【ポイント1】runの形を確認する\nrun＝短い母音字u＋子音字n、で終わる動詞。\n\n【ポイント2】ing形の作り方を確認する\nrun→running（nを重ねてからingをつける）。\n\n【ポイント3】他の選択肢を消去する\nruning（重ねていない）、runeing（不要なeが入っている）、runnning（nを重ねすぎている）はいずれも誤り。\n\n【答え】\nrunning\n\n【確かめ】\nnが2つ重なった正しいつづり（running）になっているか確認する。\n\n【よくあるまちがい】\n子音字を重ねずにruningとしてしまうミス。\n\n【ここが絶対】\nrun→running、swim→swimming、sit→sittingのように、最後の文字を重ねてからingをつける動詞に注意する。',
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
      '【何を聞かれているか】\n"Is he swimming now?"に対して「はい、泳いでいます」と答える正しい文を選ぶ問題。\n\n【なぜbe動詞を使って答えるのか】\n現在進行形の疑問文（Is he〜ing?）には、be動詞を使って答えるという決まりがある。\n\n【ポイント1】疑問文の形を確認する\n"Is he swimming now?"＝be動詞isを使った現在進行形の疑問文。\n\n【ポイント2】答え方の形を確認する\nYes, he is. またはNo, he isn\'t.のように、be動詞を使って答える。\n\n【ポイント3】他の選択肢を消去する\ndoes、swims、doを使った答えは、一般動詞の疑問文への答え方であり、be動詞の疑問文には合わない。\n\n【答え】\nYes, he is.\n\n【確かめ】\n答えがbe動詞is（doesやdoではない）を使った形になっているか確認する。\n\n【よくあるまちがい】\n現在進行形の疑問文に、一般動詞の答え方（Yes, he does.）を使ってしまうミス。\n\n【ここが絶対】\nbe動詞の疑問文（進行形を含む）にはbe動詞、一般動詞の疑問文にはdo/doesを使って答えると覚える。',
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
      '【何を聞かれているか】\n「立ちなさい。」を英語にします。命令文の作り方がためされています。\n\n【命令文はなぜ主語がないのか】\n「〜しなさい」と言うとき、その相手は目の前にいるあなた（you）に決まっています。言わなくてもわかりきっているので、主語のyouを省いてしまう、というのが英語のやり方です。\n主語がなくなると、文は動詞から始まることになります。そして主語がないのだから、動詞を主語に合わせる必要もありません。だから動詞はいつでも原形です。\nまとめると、命令文は〈動詞の原形 〜.〉というとても単純な形になります。\n\n【ステップ1】ふつうの文を思いうかべる。\nYou stand up.（あなたは立ちます。）\n\n【ステップ2】主語のYouを省く。\nStand up.\n\n【ステップ3】動詞が原形であることを確かめる。\nstand は原形のまま。sもingもつけない。\n\n【答え】Stand up.\n\n【ていねいに言いたいとき】\nPlease stand up. / Stand up, please. のように please をつけます。文の最後につけるときは、前にコンマを打ちます。\n\n【ほかの選択肢がなぜだめか】\nYou stand up.　……　主語がついているので、命令ではなく「あなたは立ちます」という説明の文になります。\nStanding up.　……　ing形だけでは文になりません。\nYou are stand up.　……　be動詞と動詞の原形が並んでいて、文の形がこわれています。\n\n【よくあるまちがい】\n・be動詞の命令文でつまずく。「静かにしなさい」は You are quiet. から You を取って Be quiet. となります。are ではなく、原形の be を使うところが要注意です。\n・up を落として Stand. とだけ書いてしまう。stand up でひとまとまりの「立ち上がる」という意味です。',
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
      '【何を聞かれているか】\n「ここで走ってはいけません。」を英語にします。否定の命令文の作り方がためされています。\n\n【なぜDon\'tを先頭に置くのか】\n命令文は主語のyouを省いて動詞の原形で始めます。これを「〜するな」という禁止の言い方に変えるには、文の先頭に Don\'t を置くだけです。\nこの Don\'t はもともと do not がちぢまったもので、一般動詞を否定するときの助っ人です。命令文には主語がないので、do は形を変えようがなく、いつでも Don\'t のままになります。\nつまり、主語が誰であっても Doesn\'t にはなりません。ここが、ふつうの否定文とちがう点です。\n\n【ステップ1】まずふつうの命令文を作る。\nRun here.（ここで走りなさい。）\n\n【ステップ2】先頭にDon\'tを置く。\nDon\'t run here.\n\n【ステップ3】動詞が原形であることを確かめる。\nDon\'t のあとは必ず原形。run のまま。\n\n【答え】Don\'t run here.\n\n【もっと強い言い方】\n公共の場のはり紙などでは、No running. のように〈No ＋ ing形〉で禁止を表すこともあります。\n\n【ほかの選択肢がなぜだめか】\nYou don\'t run here.　……　主語がついているので、「あなたはここでは走りません」という説明の文になります。禁止にはなりません。\nNot run here.　……　notだけでは否定の命令にできません。\nDoesn\'t run here.　……　命令文に主語はないので、Doesn\'t を使う場面がそもそもありません。\n\n【よくあるまちがい】\n・Don\'t のあとの動詞にsやingをつけてしまう。Don\'t running here. は誤りです。必ず原形です。\n・ていねいに言うときの位置をまちがえる。Please don\'t run here. のように、please は Don\'t の前に置きます。',
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
      '【何を聞かれているか】\n「静かにしてください。」を英語にする問題。\n\n【なぜbeを使うのか】\nbe動詞を使った命令文は、amやisやareではなく、原形のbeを使うという決まりがある。\n\n【ポイント1】命令文の基本の形を確認する\n命令文は動詞の原形で文を始める。\n\n【ポイント2】be動詞の命令文を確認する\nbe動詞の命令文では、amやisやareではなく原形beを使う。\n\n【ポイント3】完成した文を確認する\n"Please be quiet."＝「静かにしてください」というていねいな命令文になる。\n\n【答え】\nPlease be quiet.\n\n【確かめ】\nareやisではなく、原形beが使われているか確認する。\n\n【よくあるまちがい】\n"Please are quiet."のように、be動詞をareやisのまま使ってしまうミス。\n\n【ここが絶対】\n命令文でbe動詞を使うときは必ずbeの形にする、と覚える。',
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
      '【何を聞かれているか】\n「窓を閉めなさい」という意味の命令文として、正しい英文を選びます。\n\n【命令文の見分け方】\n命令文には2つの特ちょうがあります。\n1つ目は、主語（you）が書かれていないこと。\n2つ目は、動詞が原形であること。つまり、sもingもtoもついていない、辞書に出ている形そのままだということ。\nこの2つを両方みたす選択肢は1つしかありません。順に見ていけば必ず選べます。\n\n【ステップ1】主語があるものを外す。\nYou close the window. には主語 You がある。これは説明の文なので外す。\n\n【ステップ2】動詞が原形でないものを外す。\nCloses the window. は s がついている。原形ではないので外す。\nClosing the window. は ing がついている。原形ではないので外す。\n\n【ステップ3】残ったものを確かめる。\nClose the window. は主語がなく、動詞は原形の close。命令文の条件をみたしている。\n\n【答え】Close the window.\n\n【なぜwindowにtheがつくのか】\nその場にいる2人のあいだで「どの窓か」がわかりきっているからです。目の前の1つに決まっているものには the をつけます。\n\n【よくあるまちがい】\n・Closes のように s をつけてしまう。命令文には主語がないので、主語に動詞を合わせる必要がありません。だから原形です。\n・命令文はきつい言い方だと思いこんでしまう。実際には Have a nice day.（よい一日を）、Come in.（お入りください）のように、あいさつやさそいにも広く使われます。\n・Let\'s 〜 と混同する。Let\'s close the window. は「（いっしょに）窓を閉めよう」というさそいの言い方で、命令ではありません。',
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
      '【何を聞かれているか】\n「私はピアノを弾くことができます。」を英語にします。助動詞canの使い方がためされています。\n\n【助動詞canのはたらき】\ncan は「〜することができる」という能力や可能を表す語です。動詞そのものではなく、動詞に意味をつけ加えて助ける語なので、助動詞と呼ばれます。\n助動詞にはいくつか大事な決まりがあります。\n1つ目　うしろの動詞は必ず原形。sもingもつけない。\n2つ目　うしろに to をつけない。\n3つ目　主語が何であっても can の形は変わらない。\nこの3つを守るだけで、canの文はほとんど正しく書けます。\n\n【ステップ1】〈主語 ＋ can ＋ 動詞の原形〉の形を思いうかべる。\nI can …\n\n【ステップ2】動詞を原形のまま続ける。\nplay（弾く）を原形のまま置く。\nI can play …\n\n【ステップ3】楽器名の前に the をつけて続ける。\nI can play the piano.\n\n【答え】I can play the piano.\n\n【ほかの選択肢がなぜだめか】\nI can plays the piano.　……　canのあとにsはつきません。\nI can to play the piano.　……　canのあとに to はつけません。to が必要なのは want to play のような言い方のときです。\nI am can play the piano.　……　be動詞と助動詞を並べることはできません。1つの文に動詞のはたらきをする語は1つです。\n\n【よくあるまちがい】\n・主語が3人称単数のときに cans としてしまう。He cans play. は誤りで、He can play. が正しい形です。助動詞は主語で形を変えません。\n・be able to と混同する。中1の段階では can だけを確実に使えるようにしておけば十分です。',
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
      '【何を聞かれているか】\nHe (　) speak French.（彼はフランス語を話すことができません。）の空らんに入る語を選びます。\n\n【日本語をよく読んで、何を否定しているかを見きわめる】\n日本語は「話すことができません」です。これは「話さない」ではなく、「話す能力がない」ということ。つまり否定しているのは can の部分です。\nだから can に not をつけた形、can\'t（cannot）を使います。\nここで doesn\'t を選ぶと「彼はフランス語を話しません」という別の意味になってしまいます。文としては正しく成り立ちますが、日本語の意味と合いません。選択肢の中には、こうして「英語としては正しいが意味が合わない」ものがまぎれこみます。日本語を最後までていねいに読むことが大事です。\n\n【ステップ1】日本語のどこを否定しているかを確かめる。\n「〜することができません」なので、否定するのは can。\n\n【ステップ2】canの否定形を作る。\ncan not → cannot → ちぢめて can\'t\n\n【ステップ3】うしろの動詞を原形のまま続ける。\nHe can\'t speak French.\n\n【答え】can\'t\n\n【can\'tの書き方の注意】\nbe動詞の is not → isn\'t のように1語ずつ離して書くのがふつうですが、can の場合だけは can not とは書かず、cannot と1語にするか can\'t とちぢめるのが決まりです。\n\n【ほかの選択肢がなぜだめか】\ndoesn\'t　……　「話しません」という意味になり、「できません」にはなりません。\nisn\'t　……　be動詞の否定形。うしろに動詞の原形 speak を続けることはできません。\nnot　……　not だけでは一般動詞や助動詞を否定できません。\n\n【よくあるまちがい】\n・can\'t のあとの動詞にsをつけて He can\'t speaks としてしまう。助動詞のあとは必ず原形です。\n・French の頭文字を小文字で書いてしまう。言語名・国名は必ず大文字で書き始めます。',
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
      '【何を聞かれているか】\n「あなたは自転車に乗れますか。」を英語にします。canの疑問文の作り方がためされています。\n\n【なぜcanを前に出すのか】\n英語の疑問文の作り方には、大きく2つのパターンしかありません。\n1つは、文の中に be動詞 や can のような「前に出せる語」があるとき。そのときはその語を主語の前に出すだけで疑問文になります。\nもう1つは、そういう語がない一般動詞だけの文のとき。そのときだけ Do や Does を借りてきます。\nこの文には can があるので、can をそのまま先頭に出せば疑問文になります。Do を借りてくる必要はありません。\n\n【ステップ1】まずふつうの文を組み立てる。\nYou can ride a bike.\n\n【ステップ2】canを主語の前に出す。\nCan you ride a bike\n\n【ステップ3】クエスチョンマークをつける。\nCan you ride a bike?\n\n【答え】Can you ride a bike?\n\n【答え方もセットで覚える】\nYes, I can. / No, I can\'t.\ncan でたずねられたので、can で答えます。\n\n【canのもうひとつの使い方】\nCan you 〜? は「〜できますか」のほかに、「〜してくれませんか」とお願いする言い方にもなります。Can you help me? は「手伝ってくれますか」という意味です。\n\n【ほかの選択肢がなぜだめか】\nDo you can ride a bike?　……　can があるので Do を借りる必要はありません。1つの文に、前に出す語が2つあることになってしまいます。\nAre you can ride a bike?　……　be動詞と助動詞は並べられません。\nYou can ride a bike?　……　語順がふつうの文のままです。\n\n【よくあるまちがい】\n・canのあとの動詞にsやingをつけてしまう。Can you riding 〜? は誤りです。\n・a を落として ride bike としてしまう。bike は数えられる名詞なので a が必要です。',
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
      '【何を聞かれているか】\nCan she cook well? に「いいえ、できません」と答える文を選びます。\n\n【答え方の大原則をもう一度】\n英語では、たずねられたときに使われた語で答える、という決まりがあります。\nCan 〜? とたずねられたら can で答える。\nDo 〜? とたずねられたら do で答える。\nAre 〜? とたずねられたら be動詞で答える。\nこの原則さえ守れば、答えの形は自分で作れます。今回は文の先頭が Can なので、答えにも can を使います。\n\n【ステップ1】たずねている語を見つける。\n文の先頭は Can。だから答えにも can を使う。\n\n【ステップ2】主語をそろえる。\nたずねられているのは she。答えの主語もそのまま she。\n\n【ステップ3】否定なので can の否定形にする。\ncannot → can\'t\n\n【ステップ4】〈No, ＋ 主語 ＋ can\'t.〉の形にならべる。\nNo, she can\'t.\n\n【答え】No, she can\'t.\n\n【「はい」のときは】\nYes, she can. となります。\n\n【ほかの選択肢がなぜだめか】\nNo, she doesn\'t.　……　do でたずねられていないので、do では答えません。Does she cook well? と聞かれたときの答え方です。\nNo, she isn\'t.　……　be動詞でたずねられていないので、be動詞では答えません。\nNo, she not.　……　not だけでは否定になりません。\n\n【よくあるまちがい】\n・主語を変えてしまい、No, I can\'t. と答えてしまう。she についてたずねられたのだから、答えの主語も she です。\n・No, she can\'t cook. のように動詞まで書いてしまう。短く答えるときは、動詞から先は省くのがふつうです。\n・well（じょうずに）を good と取りちがえる。動詞のようすを説明するときは well を使います。',
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
      '【何を聞かれているか】\nMy sister can (　) very fast.（わたしの姉はとても速く走ることができます。）の空らんに入る動詞の形を選びます。\n\n【主語が3人称単数でも、canのあとは原形】\nふつうの現在の文では、主語が3人称単数なら動詞に s をつけます。My sister runs very fast. のようにです。\nところが can があると話が変わります。助動詞 can のあとの動詞は、主語が何であってもいつも原形です。s をつけません。\nなぜかというと、主語に合わせて形を変える役目は、文の中の最初の動詞1つだけが引き受けるからです。can がその役目を引き受けている。ただし can は主語が変わっても形が変わらない語なので、結果として文のどこにも s が現れません。\nこれは Does のときと同じ考え方です。Does Tom speak English? でも、Does が役目を引き受けているので speak は原形でした。\n\n【ステップ1】空らんの前を見る。\nすぐ前に can がある。助動詞のあとだとわかる。\n\n【ステップ2】助動詞のあとの決まりを思い出す。\n助動詞のあとは必ず原形。sもingもtoもつけない。\n\n【ステップ3】原形を選ぶ。\nrun\n\n【ステップ4】あてはめて確かめる。\nMy sister can run very fast.\n\n【答え】run\n\n【ほかの選択肢がなぜだめか】\nruns　……　3人称単数のsがついた形。can のあとには使いません。\nrunning　……　ing形。be動詞のあとでしか使えません。\nran　……　過去形。can のあとには原形が来ます。\n\n【sisterについて】\n英語の sister は、姉と妹を区別せずにどちらも表します。brother も同じで、兄と弟を区別しません。どうしても区別して言いたいときは、older sister（姉）、younger sister（妹）のように言い分けます。\n\n【よくあるまちがい】\n・主語につられて runs を選んでしまう。空らんのすぐ前に can があるかどうかを、先に確かめるくせをつけましょう。\n・fast と early を取りちがえる。fast は速さ、early は時刻の早さを表します。',
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
      '【何を聞かれているか】\n「あなたは何のスポーツが好きですか。」を英語にする問題。\n\n【なぜWhatの後に名詞を続けるのか】\n「何の〜が好きですか」とたずねるときは、疑問詞Whatのすぐ後に名詞（sport）を続けて、1つのかたまりとして文頭に置くという決まりがある。\n\n【ポイント1】"What+名詞"の形を確認する\nWhat sport（何のスポーツ）が1つのかたまりとして文頭に来る。\n\n【ポイント2】後ろの語順を確認する\nWhat sportの後ろに、do you likeという疑問文の語順を続ける。\n\n【ポイント3】他の選択肢を消去する\n"What sport you like?"（doが抜けている）、"Do you like what sport?"（語順が誤り）、"What sport are you like?"（be動詞を誤って使っている）はいずれも不適切。\n\n【答え】\nWhat sport do you like?\n\n【確かめ】\n"What sport"の後ろが"do you like"という語順になっているか確認する。\n\n【よくあるまちがい】\nWhatとsportの間に他の語を入れてしまい、かたまりを崩してしまうミス。\n\n【ここが絶対】\n「What+名詞+do you+動詞の原形〜?」の型で、名詞を疑問詞のすぐ後ろに置くと覚える。',
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
      '【何を聞かれているか】\n(　) has this book?（誰がこの本を持っていますか。）の空らんに入る疑問詞を選びます。\n\n【疑問詞の使い分け】\nWho　……　誰（人をたずねる）\nWhose　……　誰の・誰のもの（持ち主をたずねる）\nWhat　……　何（物や事をたずねる）\nWhich　……　どちら（決まった選たくしの中から選ばせる）\n日本語が「誰が」なので、人をたずねる Who を選びます。\n\n【この問題のいちばん大事なところ】\nふつうの疑問文は〈疑問詞 ＋ do / does ＋ 主語 ＋ 動詞〜?〉という形をとります。What do you like? のようにです。\nところが、たずねているものがその文の主語そのものであるときは、do も does も使いません。疑問詞がそのまま主語の位置に立ち、あとはふつうの文の語順で続けます。\nこの文の Who はまさに主語です。だから Who do 〜? ではなく、Who has 〜? となります。\nそして Who は「1人の誰か」として3人称単数あつかいなので、動詞には3人称単数のsがつきます。have にsがついた形が has です。\n\n【ステップ1】日本語からたずねているものを決める。\n「誰が」なので人。→ Who\n\n【ステップ2】たずねているものが主語かどうかを見る。\n「誰が持っているか」なので、たずねているのは主語。do / does は使わない。\n\n【ステップ3】語順を確かめる。\n〈Who ＋ 動詞 〜?〉のまま。Who has this book?\n\n【答え】Who\n\n【答え方】\nTom does. のように〈主語 ＋ does.〉で答えるのがふつうです。\n\n【ほかの選択肢がなぜだめか】\nWhose　……　「誰の」。Whose book is this?（これは誰の本ですか）のように使います。\nWhat　……　物や事をたずねる語で、人にはふつう使いません。\nWhich　……　「どちら」。えらぶ相手が示されていないので合いません。\n\n【よくあるまちがい】\n・Who does have this book? としてしまう。Who が主語のときは does を使いません。\n・has を have にしてしまう。Who は3人称単数あつかいなので has です。',
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
      '【何を聞かれているか】\n「あなたはいつ晩ご飯を食べますか。」を英語にします。疑問詞を使った疑問文の語順がためされています。\n\n【疑問詞のある疑問文の作り方】\n作り方は2段階です。\n第1段階　まず、疑問詞を使わない疑問文を作る。\n第2段階　その先頭に疑問詞をくっつける。\nこの順でやれば、語順で迷うことがありません。ここでは「あなたは晩ご飯を食べますか」という疑問文を先に作り、そのあたまに When をのせます。\n\n【ステップ1】ふつうの文を思いうかべる。\nYou eat dinner.\n\n【ステップ2】一般動詞の疑問文にする。主語がyouなのでDoを先頭に置く。\nDo you eat dinner?\n\n【ステップ3】その先頭に疑問詞Whenを置く。\nWhen do you eat dinner?\n\n【答え】When do you eat dinner?\n\n【答え方】\nYes / No では答えません。「いつ」とたずねられているので、時を答えます。\nAt seven.（7時に）のように答えるのがふつうです。\n疑問詞のある疑問文に Yes / No で答えない、というのは中1で必ず身につけたい決まりです。\n\n【ほかの選択肢がなぜだめか】\nWhen you eat dinner?　……　do がありません。疑問文の形になっていません。\nYou eat dinner when?　……　疑問詞は文の先頭に置きます。\nWhen are you eat dinner?　……　be動詞と一般動詞が2つ入っています。\n\n【よくあるまちがい】\n・do のあとの動詞にsをつけてしまう。Do があるので原形です。\n・dinner に the をつけてしまう。食事の名前にはふつう何もつけません。\n・When と What time を混同する。When はばくぜんと時をたずね、What time は時刻をはっきりたずねます。どちらでもよい場面が多いのですが、時刻を聞きたいときは What time の方がはっきりします。',
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
      '【何を聞かれているか】\n「図書館はどこにありますか。」を英語にする問題。\n\n【なぜWhereの後にbe動詞の疑問文を続けるのか】\n「どこに〜がありますか」とたずねるときは、疑問詞Whereの後に、be動詞の疑問文の形（is the library）を続けるという決まりがある。\n\n【ポイント1】be動詞の疑問文の形を確認する\n"is the library"＝be動詞is＋主語the libraryという疑問文の語順。\n\n【ポイント2】Whereの位置を確認する\nWhereを文頭に置き、その後にis the libraryを続ける。\n\n【ポイント3】他の選択肢を消去する\n"Where the library is?"（倒置していない）、"The library is where?"（Whereが文末にある）、"Where does the library?"（一般動詞用のdoesを誤って使っている）はいずれも不適切。\n\n【答え】\nWhere is the library?\n\n【確かめ】\nWhereの後がis the library（倒置された疑問文の語順）になっているか確認する。\n\n【よくあるまちがい】\nWhereの後を倒置せず、"Where the library is?"のようにしてしまうミス。\n\n【ここが絶対】\n場所をたずねるWhereの疑問文は、Where+be動詞の疑問文、という型で覚える。',
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
      '【何を聞かれているか】\n「あなたはどうやって学校に行きますか。」を英語にします。疑問詞Howを使った疑問文です。\n\n【Howは何をたずねる語か】\nHow は方法や手段、つまり「どうやって」をたずねる疑問詞です。この文では、歩きか、自転車か、バスか、という行き方をたずねています。\nHow にはほかにも使い方があります。\nHow are you?　……　ようすをたずねる（元気ですか）\nHow many 〜?　……　数をたずねる（いくつ）\nHow much 〜?　……　値段や量をたずねる（いくら）\nHow old 〜?　……　年れいをたずねる（何さい）\nHow long 〜?　……　長さや期間をたずねる（どのくらい）\nうしろにつく語によって、たずねる中身が変わるのがHowの特ちょうです。\n\n【ステップ1】ふつうの文を思いうかべる。\nYou go to school.\n\n【ステップ2】一般動詞の疑問文にする。主語がyouなのでDoを先頭に置く。\nDo you go to school?\n\n【ステップ3】その先頭に疑問詞Howを置く。\nHow do you go to school?\n\n【答え】How do you go to school?\n\n【答え方】\n手段を答えます。By bus.（バスで） / I walk.（歩きます） のように言います。\n〈by ＋ 乗り物〉で手段を表すときは、乗り物の前に a や the をつけません。by bus、by train、by bike のように書きます。ただし「歩いて」だけは by ではなく on foot と言います。\n\n【なぜschoolにtheがつかないのか】\ngo to school は「勉強しに学校へ通う」という、本来の目的のための行き来を表します。このときは建物そのものを指していないので the をつけません。建物としての学校へ行く（たとえば保護者が見学に行く）場合は go to the school となります。\n\n【よくあるまちがい】\n・How を Why と取りちがえる。Why は理由を、How は方法をたずねます。\n・go to のtoを落としてしまう。go のあとに場所が来るときは to が必要です。ただし home、there、here の前には to をつけません（go home が正しい形です）。',
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
      '【何を聞かれているか】\nThe cat is (　) the box.（ネコは箱の中にいます。）の空らんに入る前置詞を選びます。\n\n【場所を表す前置詞の使い分け】\nin　……　〜の中に　囲まれた空間の内側にあることを表す\non　……　〜の上に　面にくっついていることを表す\nat　……　〜のところに　広がりを考えず、1つの点として場所を示す\nunder　……　〜の下に\n日本語が「箱の中に」なので、囲まれた内側を表す in を選びます。\n\n【inのイメージをつかむ】\nin は「何かに囲まれている」というイメージです。箱の中、部屋の中、水の中、日本の中。どれも、まわりに何かがあって、その内側にいます。\nこのイメージは場所だけでなく、時を表すときにも使えます。in April（4月に）、in 2026（2026年に）のように、月や年という大きなひとまとまりの中にすっぽり入っている感じです。in のイメージを1つつかんでおけば、場所と時の両方に使えるようになります。\n\n【ステップ1】日本語のどの部分が場所を表しているかを見る。\n「箱の中に」が場所。\n\n【ステップ2】囲まれているか、面にのっているかを考える。\n箱の中なので囲まれている。→ in\n\n【ステップ3】あてはめて確かめる。\nThe cat is in the box.\n\n【答え】in\n\n【ほかの選択肢がなぜだめか】\non　……　面にくっついている状態。The cat is on the box. なら「ネコは箱の上にのっています」という別の意味になります。\nat　……　場所を点として示す語。箱のような入れ物の中身を表すのには使いません。\nto　……　「〜へ」という方向を表す語。be動詞といっしょに場所を表す使い方はしません。\n\n【よくあるまちがい】\n・onを「〜の上に」とだけ覚えてしまう。on はあくまで「面にくっついている」ことを表すので、かべにかかった絵も on the wall、天じょうのハエも on the ceiling です。上下は関係ありません。\n・the を落として in box としてしまう。どの箱かがわかっているので the が必要です。',
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
      '【何を聞かれているか】\n"The book is (　) the table."（その本はテーブルの上にあります。）の空欄に入る語を選ぶ問題。\n\n【なぜonを使うのか】\n「（表面に接して）〜の上に」という位置関係は、前置詞onで表すという決まりがある。\n\n【ポイント1】onの意味を確認する\non＝「〜の上に（接触して）」という位置関係を表す。\n\n【ポイント2】他の前置詞との違いを確認する\nin＝「〜の中に」、at＝「（地点）で」というように、それぞれ表す位置関係が異なる。\n\n【ポイント3】文全体の意味を確認する\n"The book is on the table."＝「その本はテーブルの上にあります」。\n\n【答え】\non\n\n【確かめ】\n選んだ前置詞が「テーブルの上に接して」という意味に合っているか確認する。\n\n【よくあるまちがい】\ninやatを選んで「中に」「地点で」という異なる意味にしてしまうミス。\n\n【ここが絶対】\nin＝中、on＝上（接触）、at＝地点、under＝下、と位置関係のイメージで前置詞を区別する。',
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
      '【何を聞かれているか】\nSchool starts (　) 8:30.（学校は8時30分に始まります。）の空らんに入る前置詞を選びます。\n\n【時を表す前置詞は、範囲のせまい順に覚える】\nat　……　時刻　8:30 のように、1つの点として指せるとき\non　……　日づけ・曜日　on Monday、on May 5 のように、1日という区切りがあるとき\nin　……　月・年・季節　in April、in 2026、in summer のように、大きなひとまとまりのとき\nat → on → in の順に、表す時間のはばが広くなっていきます。この順番ごと覚えてしまうと使い分けに迷いません。\n今回は 8:30 という時刻なので、いちばんせまい at を使います。\n\n【なぜ時刻にatを使うのか】\nat はもともと「点」を表す語です。場所でも at the station（駅で）のように、広がりを考えず1つの地点として指すときに使います。\n時刻も、時間という線の上の1つの点です。だから同じ at を使う、と考えるとすっきり覚えられます。\n\n【ステップ1】空らんのうしろが何を表しているかを見る。\n8:30 は時刻。\n\n【ステップ2】時刻に使う前置詞を選ぶ。\n時刻は点なので at。\n\n【ステップ3】あてはめて確かめる。\nSchool starts at 8:30.\n\n【答え】at\n\n【ほかの選択肢がなぜだめか】\nin　……　月・年・季節のような大きなまとまりに使います。時刻には使いません。\non　……　日づけや曜日に使います。時刻には使いません。\nto　……　方向を表す語で、時を表す使い方はここではしません。\n\n【例外もセットで覚える】\nat night（夜に）だけは at を使います。in the morning（朝に）、in the afternoon（午後に）、in the evening（夕方に）は in なのに、night だけ at。ここは理くつぬきで覚えてしまいましょう。\n\n【よくあるまちがい】\n・8:30 の読み方を知らずにつまずく。eight thirty と読みます。\n・School に the をつけてしまう。ここでの school は建物ではなく学校という仕組みを指しているので、何もつけません。',
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
      '【何を聞かれているか】\n短い英文を読んで、Mikeがどこの出身かを日本語で答えます。\n\n【読解のこつ】\n長く読む必要はありません。聞かれていることを表す言い方が、本文のどこにあるかをさがすのが読解の基本です。\n出身地をたずねられているので、出身を表す言い方をさがします。英語では〈be動詞 ＋ from ＋ 場所〉で「〜の出身である」を表します。だから本文の中から from をさがせば、答えはすぐそこにあります。\n\n【ステップ1】本文を1文ずつ、意味をつかむ。\nThis is Mike.　こちらはマイクです。\nHe is from Canada.　彼はカナダ出身です。\nHe is a new student in our class.　彼は私たちのクラスの新しい生徒です。\nHe can speak Japanese a little.　彼は日本語を少し話すことができます。\n\n【ステップ2】聞かれていることに対応する文を見つける。\n出身を表す from があるのは2文目。He is from Canada.\n\n【ステップ3】答えを書く。\nCanada は日本語でカナダ。\n\n【答え】カナダ（Canada）\n\n【from の使い方】\nbe動詞のあとに from を続けると、「〜から来た」つまり出身を表します。\nI am from Japan.　私は日本の出身です。\nWhere are you from?　あなたはどこの出身ですか。\nこの2つはあいさつでよく使うので、そのまま覚えてしまいましょう。\n\n【本文のほかの見どころ】\nThis is 〜. は、人を紹介するときの言い方です。「これは」ではなく「こちらは」と訳します。\na little は「少し」という意味で、動詞のようすを説明するために文の最後に置かれています。\ncan speak となっていて、speak に s がついていません。助動詞 can のあとは主語が何であっても原形、という決まりのとおりです。\n\n【よくあるまちがい】\n・This is Mike. を「これはマイクです」と訳してしまう。人を指すときは「こちらは」とします。\n・国名を小文字で書いてしまう。Canada も Japan も、必ず大文字で書き始めます。',
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
