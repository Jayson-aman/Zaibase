import type { Question } from './questions-meta';
import type { GradeKey } from './grades';

const GRADE: GradeKey = 'j3';

// 中学3年 英語（高校受験対策・最終学年）。
// 単元: 受動態／現在完了形（継続・経験・完了/結果）／現在完了進行形／
// 分詞の形容詞的用法／関係代名詞（who/which/whose）／間接疑問文／
// 仮定法の基礎／英作文の基礎（条件英作文）／長文読解（内容一致・文脈把握・語句の言い換え）。
// 全問 grade: 'j3'、examType: 'koko'。
export const gradeJ3EigoQuestions: Question[] = [
  // ==================== 受動態（Passive Voice） ====================
  {
    id: 'grade_j3_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'basic',
    question: '「このパンはあの店で作られています。」を英語にすると？',
    answer: 'This bread is made at that store.',
    choices: [
      'This bread is made at that store.',
      'This bread makes at that store.',
      'This bread is making at that store.',
      'This bread was make at that store.',
    ],
    hint: '受動態の基本形は「be動詞＋過去分詞」。makeの過去分詞はmade。',
    explanation:
      '受動態は「be動詞＋過去分詞」で表す。主語のThis bread（このパン）は「作る」側ではなく「作られる」側なので受動態にする。makeの過去分詞はmade。現在の習慣的な事実なのでbe動詞は現在形isを使う。\n答え：This bread is made at that store.',
    memoryTip: '受動態の公式：be動詞＋過去分詞（＋by〜）。「〜される」という日本語に注目する。',
  },
  {
    id: 'grade_j3_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nThis letter (　) by Natsume Soseki in 1900.',
    answer: 'was written',
    choices: ['was written', 'wrote', 'is written', 'has written'],
    hint: '「in 1900」という過去の年号があるので、過去の受動態を選ぶ。',
    explanation:
      '「in 1900」という具体的な過去の年号があるので、時制は過去でなければならない。主語This letter（この手紙）は「書かれる」側なので受動態が必要。よって「was＋過去分詞（written）」が正解。isは現在形なので過去の年号と合わず、has writtenは能動態の現在完了で意味も文法も合わない。\n答え：was written（この手紙は1900年に夏目漱石によって書かれた。）',
    pitfall: '受動態の時制はbe動詞の形で決まる。過去の出来事にはwas/wereを使う。',
  },
  {
    id: 'grade_j3_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の英文を日本語にしなさい。\nThe window was broken by the strong wind last night.',
    answer: 'その窓は昨夜の強風によって割られた。',
    hint: 'be動詞の過去形＋過去分詞＋by〜で「〜によって…された」という意味になる。',
    explanation:
      '【何を聞かれているか】\n"The window was broken by the strong wind last night."を日本語にする問題。\n\n【なぜwas brokenが「割られた」という意味になるのか】\n"was broken"は、be動詞の過去形とbreakの過去分詞brokenを組み合わせた受動態の過去形で、「割られた」という受け身の意味を表す。\n\n【ポイント1】受動態の構造を確認する\nwas broken＝be動詞の過去形was＋過去分詞broken。\n\n【ポイント2】by〜の意味を確認する\n"by the strong wind"は「強風によって」という動作主を表す。\n\n【ポイント3】時を表す語を確認する\n"last night"（昨夜）が出来事の起きた時を表す。\n\n【答え】\nその窓は昨夜の強風によって割られた。\n\n【確かめ】\n訳に「割られた」という受け身の意味と「強風によって」という動作主の両方が含まれているか確認する。\n\n【よくあるまちがい】\nwas brokenを能動態のように「壊した」と訳してしまうミス。\n\n【ここが絶対】\nbe動詞の過去形+過去分詞+by〜＝「〜によって…された」という受動態の型で覚える。',
  },
  {
    id: 'grade_j3_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '次の（　）に入る最も適切なものを選びなさい。\nThis problem must (　) carefully.',
    answer: 'be solved',
    choices: ['be solved', 'solve', 'solved', 'being solved'],
    hint: '助動詞のあとの受動態は「助動詞＋be＋過去分詞」の形になる。',
    explanation:
      '助動詞（must, can, should など）のあとに受動態を続けるときは「助動詞＋be＋過去分詞」の形にする。mustのあとは動詞の原形が続くので、受動態の原形であるbe solvedが正解。solveだけだと能動態で意味が変わり、solvedだけではbe動詞がなく文法的に不完全。\n答え：be solved（この問題は注意深く解決されなければならない。）',
    pitfall: '助動詞の後ろの動詞はいつも原形。受動態でもbeの原形を使い、be動詞をwasやisにしない。',
  },
  {
    id: 'grade_j3_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '次の能動態の文を受動態の文に書きかえなさい。\nA famous chef cooked this dish.',
    answer: 'This dish was cooked by a famous chef.',
    hint: '能動態の目的語（this dish）を主語にし、動詞を「be動詞の過去形＋過去分詞」にする。動作主の前にはbyを置く。',
    explanation:
      '【何を聞かれているか】\n"A famous chef cooked this dish."を受動態の文に書きかえる問題。\n\n【なぜ3つの手順で書きかえるのか】\n能動態を受動態に書きかえるときは、目的語を主語にする・動詞をbe動詞+過去分詞にする・元の主語をbyで文末に移す、という3つの手順を順番に行う必要がある。\n\n【ポイント1】目的語を主語にすることを確認する\n能動態の目的語this dishを、受動態の主語にする。\n\n【ポイント2】動詞の形を確認する\ncooked（過去形）→was cooked（be動詞の過去形＋過去分詞）。\n\n【ポイント3】動作主の示し方を確認する\n元の主語a famous chefは、文末に"by 〜"の形で示す。\n\n【答え】\nThis dish was cooked by a famous chef.（この料理は有名なシェフによって作られた。）\n\n【確かめ】\n主語がThis dishになっており、動詞がwas cooked（be動詞の過去形＋過去分詞）になっているか確認する。\n\n【よくあるまちがい】\n動詞をcookedのままにして、be動詞を加え忘れるミス。\n\n【ここが絶対】\n能動態→受動態の書きかえ手順：①目的語を主語に②動詞をbe＋過去分詞に③元の主語にbyをつけて文末へ、という3ステップで覚える。',
    memoryTip: '能動態→受動態の書きかえ手順：①目的語を主語に②動詞をbe＋過去分詞に③元の主語にbyをつけて文末へ。',
  },

  // ==================== 現在完了形（継続） ====================
  {
    id: 'grade_j3_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'basic',
    question: '次の（　）に入る最も適切なものを選びなさい。\nI (　) lived in Osaka for ten years.',
    answer: 'have',
    choices: ['have', 'has', 'had', 'am'],
    hint: '主語がIのときの現在完了形の形を考える。',
    explanation:
      '「for ten years（10年間）」という継続の期間を表す語句があるので、現在完了形（have/has＋過去分詞）を使う。主語がIのときはhaveを使う。\n答え：have（私は10年間大阪に住んでいます。）',
  },
  {
    id: 'grade_j3_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\n(　) you known each other for a long time?',
    answer: 'Have',
    choices: ['Have', 'Has', 'Did', 'Do'],
    hint: '現在完了形の疑問文はHave/Hasを主語の前に置く。',
    explanation:
      '現在完了形の疑問文は「Have/Has＋主語＋過去分詞〜?」の形になる。主語がyouなのでHaveを使う。knownはknow（知っている）の過去分詞。\n答え：Have（あなたたちは長い間お互いを知っていますか。）',
  },
  {
    id: 'grade_j3_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '次の日本語を英語にしなさい。\n「彼は生まれたときからずっとこの町に住んでいます。」',
    answer: 'He has lived in this town since he was born.',
    hint: '「〜以来ずっと」はsinceを使う。sinceのあとには過去の一時点を表す文が続く。',
    explanation:
      '【何を聞かれているか】\n「彼は生まれたときからずっとこの町に住んでいます。」を英語にする問題。\n\n【なぜsinceの後に過去形の文を続けるのか】\n「〜以来ずっと」という起点を表すときはsinceを使い、sinceの後には過去の一時点を表す文（過去形）を続けるという決まりがある。\n\n【ポイント1】継続を表す現在完了の形を確認する\n「ずっと〜している」はhas lived（現在完了形）で表す。\n\n【ポイント2】sinceの後の形を確認する\nsinceの後には過去形の文（he was born）を続ける。\n\n【ポイント3】forとの違いを確認する\nforは期間の長さ、sinceは起点を表すという違いがある。\n\n【答え】\nHe has lived in this town since he was born.\n\n【確かめ】\nsinceの後がhe was born（過去形の文）になっているか確認する。\n\n【よくあるまちがい】\nforとsinceを混同し、forの後に過去の一時点（he was born）を続けてしまうミス。\n\n【ここが絶対】\nforは「〜の間」（期間）、sinceは「〜以来」（起点）と、意味の違いをはっきり区別する。',
    pitfall: 'forは「〜の間」（期間）、sinceは「〜以来」（起点）。混同しないこと。',
  },

  // ==================== 現在完了形（経験） ====================
  {
    id: 'grade_j3_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'basic',
    question: '次の（　）に入る最も適切なものを選びなさい。\nI (　) never been to Kyoto.',
    answer: 'have',
    choices: ['have', 'has', 'had', 'was'],
    hint: '「〜に行ったことがない」は現在完了形の経験用法。',
    explanation:
      '「行ったことがない」という経験は現在完了形（have/has been to〜）で表す。主語がIなのでhaveを使う。neverは「一度も〜ない」という意味でhaveとbeenの間に置く。\n答え：have（私は一度も京都に行ったことがありません。）',
  },
  {
    id: 'grade_j3_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nHave you ever (　) natto?',
    answer: 'eaten',
    choices: ['eaten', 'ate', 'eat', 'eating'],
    hint: 'haveのあとには動詞の過去分詞が続く。eatの過去分詞は不規則変化。',
    explanation:
      '現在完了形は「have/has＋過去分詞」の形。eatの過去分詞はeaten（eat–ate–eaten）という不規則変化。everは「今までに」という意味で経験をたずねるときによく使う。\n答え：eaten（あなたは今までに納豆を食べたことがありますか。）',
    pitfall: 'eat–ate–eatenのように、過去形と過去分詞の形が異なる不規則動詞に注意する。',
  },
  {
    id: 'grade_j3_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '次の日本語を英語にしなさい。\n「私は今までに3回富士山に登ったことがあります。」',
    answer: 'I have climbed Mt. Fuji three times.',
    hint: '「〜回」という回数はthree timesのように文末に置くことが多い。',
    explanation:
      '【何を聞かれているか】\n「私は今までに3回富士山に登ったことがあります。」を英語にする問題。\n\n【なぜ回数を文末に置くのか】\n「〜したことがある」という経験は現在完了形で表し、回数を表す語句（three times）は文の最後に置くのが自然な語順である。\n\n【ポイント1】経験を表す現在完了の形を確認する\n「〜したことがある」はhave climbed（現在完了形）で表す。\n\n【ポイント2】climbの過去分詞を確認する\nclimbは規則動詞で、過去分詞はclimbed。\n\n【ポイント3】回数の位置を確認する\n"three times"（3回）は文末に置く。\n\n【答え】\nI have climbed Mt. Fuji three times.\n\n【確かめ】\nthree timesが文末に置かれているか確認する。\n\n【よくあるまちがい】\nclimbedをclimbのまま使い、haveを付け忘れて現在完了の形を崩してしまうミス。\n\n【ここが絶対】\n経験を表す現在完了＝have/has+過去分詞、回数（〜times）は文末に置くと覚える。',
  },

  // ==================== 現在完了形（完了・結果） ====================
  {
    id: 'grade_j3_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'basic',
    question: '次の（　）に入る最も適切なものを選びなさい。\nShe (　) just finished her homework.',
    answer: 'has',
    choices: ['has', 'have', 'had', 'was'],
    hint: '主語がSheのときの現在完了形の形を考える。',
    explanation:
      '【何を聞かれているか】\n"She (　) just finished her homework."の空欄に入る最も適切な語を選ぶ問題。\n\n【なぜhasを使うのか】\n「ちょうど〜したところだ」という完了は現在完了形（have/has just＋過去分詞）で表し、主語がShe（3人称単数）のときはhasを使うという決まりがある。\n\n【ポイント1】完了を表す現在完了の形を確認する\nhave/has just+過去分詞＝「ちょうど〜したところだ」。\n\n【ポイント2】主語との対応を確認する\n主語Sheは3人称単数なので、hasを使う。\n\n【ポイント3】他の選択肢を消去する\nhave（複数・I・you用）、had（過去完了用）、was（be動詞）はいずれも不適切。\n\n【答え】\nhas（彼女はちょうど宿題を終えたところです。）\n\n【確かめ】\n主語Sheに対応するhasが選ばれ、haveと混同していないか確認する。\n\n【よくあるまちがい】\n主語の人称・数を確認せずhaveを選んでしまうミス。\n\n【ここが絶対】\n現在完了はhave/has+過去分詞、主語が3人称単数のときはhasを使うと覚える。',
  },
  {
    id: 'grade_j3_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の英文の意味として最も適切なものを選びなさい。\nThe train has already left.',
    answer: '電車はすでに出発してしまった。',
    choices: [
      '電車はすでに出発してしまった。',
      '電車はまだ出発していない。',
      '電車はこれから出発する予定だ。',
      '電車は出発する予定だったが、しなかった。',
    ],
    hint: '現在完了形の完了・結果用法は「〜してしまった（今はその状態だ）」という意味を表す。',
    explanation:
      'has left は現在完了形（完了・結果用法）で「出発してしまった」という意味。alreadyは「すでに」という意味で完了を強調する語。この文は「電車はすでに出発済みで、今はもうここにいない」という結果を表している。\n答え：電車はすでに出発してしまった。',
  },
  {
    id: 'grade_j3_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nI haven\'t finished my report (　).',
    answer: 'yet',
    choices: ['yet', 'already', 'just', 'ever'],
    hint: '否定文で「まだ〜していない」というときに文末で使う語。',
    explanation:
      '否定文で「まだ〜していない」というときはyetを文末に使う（haven\'t finished 〜 yet）。alreadyは肯定文で「すでに」、justは肯定文で「ちょうど」、everは疑問文で「今までに」を表すため、この否定文には合わない。\n答え：yet（私はまだレポートを終えていません。）',
    pitfall: 'already（肯定文で「すでに」）とyet（否定文で「まだ」・疑問文で「もう」）の使い分けに注意。',
  },

  // ==================== 現在完了進行形 ====================
  {
    id: 'grade_j3_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nIt (　) raining since this morning.',
    answer: 'has been',
    choices: ['has been', 'have been', 'was', 'is'],
    hint: '「今朝からずっと〜し続けている」という動作の継続は現在完了進行形で表す。主語Itは単数。',
    explanation:
      '「今朝からずっと（雨が）降り続けている」という、過去に始まって今も続いている動作は現在完了進行形（has/have been＋動詞のing形）で表す。主語のItは3人称単数なのでhas beenを使う。\n答え：has been（今朝からずっと雨が降っています。）',
    memoryTip: '現在完了進行形の公式：have/has been＋動詞のing形。「ずっと〜し続けている」という動作の継続を表す。',
  },
  {
    id: 'grade_j3_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の日本語を英語にしなさい。\n「彼女は2時間ずっとピアノを練習しています。」',
    answer: 'She has been practicing the piano for two hours.',
    hint: '動作が今も続いていることを強調するときは現在完了進行形（have/has been＋ing）を使う。',
    explanation:
      '「ずっと〜し続けている」という動作の継続を強調するときは現在完了進行形（has/have been＋動詞のing形）を使う。主語がShe（3人称単数）なのでhas beenを使い、practiceにingをつけてpracticingとする。\n答え：She has been practicing the piano for two hours.',
  },
  {
    id: 'grade_j3_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question:
      '次の（A）（B）に入る最も適切な組み合わせを選びなさい。\nA: You look very tired. (A) you (B) all night?\nB: Yes, I have a test tomorrow.',
    answer: 'Have / been studying',
    choices: ['Have / been studying', 'Do / study', 'Are / studying', 'Did / study'],
    hint: '「一晩中ずっと勉強し続けていたから今疲れている」という、過去から今まで続く動作を表す疑問文の形を考える。',
    explanation:
      '「今疲れて見える」のは「一晩中ずっと勉強し続けていた」ことが原因だと考えられるので、過去から現在まで続く動作を表す現在完了進行形の疑問文（Have/Has＋主語＋been＋動詞のing形〜?）を使う。主語がyouなのでHaveを使い、studyにbeen studyingの形を続ける。\n答え：Have / been studying（あなたは一晩中ずっと勉強していたのですか。）',
    pitfall: '現在完了進行形の疑問文はHave/Has＋主語＋been＋ing形。beenを落とさないように注意する。',
  },

  // ==================== 分詞の形容詞的用法 ====================
  {
    id: 'grade_j3_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'basic',
    question: '次の（　）に入る最も適切なものを選びなさい。\nLook at the (　) window.',
    answer: 'broken',
    choices: ['broken', 'break', 'breaking', 'broke'],
    hint: '「割られた（＝割れている）窓」という受け身の意味を表す語を選ぶ。',
    explanation:
      '【何を聞かれているか】\n"Look at the (　) window."の空欄に入る最も適切な語を選ぶ問題。\n\n【なぜ過去分詞brokenを使うのか】\n「割られた（＝割れている）窓」という受け身の意味は、breakの過去分詞brokenを名詞windowの前に置いて表すという決まりがある。\n\n【ポイント1】過去分詞の働きを確認する\n過去分詞は「〜された・〜されている」という受け身・完了の意味を名詞に加える。\n\n【ポイント2】brokenの位置を確認する\nbrokenをwindowの前に置く。\n\n【ポイント3】他の選択肢を消去する\nbreak（原形）、breaking（現在分詞、能動的な意味）、broke（過去形）はいずれも「割られた」という受け身の意味を名詞の前で表せない。\n\n【答え】\nbroken（あの割れた窓を見て。）\n\n【確かめ】\n選んだ答えが過去分詞broken（受け身の意味）であり、breaking（能動的な意味）と混同していないか確認する。\n\n【よくあるまちがい】\nbrokenの代わりにbreaking（現在分詞）を選んでしまうミス。\n\n【ここが絶対】\n過去分詞が名詞の前に置かれるときは「〜された・〜されている」という受け身の意味になると覚える。',
    memoryTip: '過去分詞が名詞の前に置かれるときは「〜された・〜されている」という受け身の意味になる。',
  },
  {
    id: 'grade_j3_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nThe boy (　) under the tree is my brother.',
    answer: 'sleeping',
    choices: ['sleeping', 'slept', 'sleeps', 'sleep'],
    hint: '「木の下で眠っている少年」という進行中の動作を表す分詞を選ぶ。',
    explanation:
      '「〜している…」という能動・進行の意味を名詞に加えるときは現在分詞（動詞のing形）を使う。sleeping under the treeがThe boyを後ろから修飾し、「木の下で眠っている少年」という意味になる。\n答え：sleeping（木の下で眠っている少年は私の弟です。）',
    pitfall: '現在分詞（〜ing）は「〜している」という能動の意味、過去分詞（〜ed）は「〜される・された」という受け身の意味。',
  },
  {
    id: 'grade_j3_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の日本語を英語にしなさい。\n「公園で走っている女の子は私の妹です。」',
    answer: 'The girl running in the park is my sister.',
    hint: '「走っている女の子」は現在分詞（running）を使って名詞を後ろから修飾する。',
    explanation:
      '【何を聞かれているか】\n「公園で走っている女の子は私の妹です。」を英語にする問題。\n\n【なぜrunningが名詞の後ろに置かれるのか】\n「〜している…」という能動・進行の意味は現在分詞（running）で表すが、分詞が単独の一語ではなく語句（in the park）をともなうときは、名詞の後ろに置くのが基本の語順である。\n\n【ポイント1】現在分詞の意味を確認する\nrunning＝「走っている」という能動・進行の意味。\n\n【ポイント2】語句をともなう分詞の位置を確認する\nrunning in the park（公園で走っている）というかたまりが、後ろからThe girlを修飾する。\n\n【ポイント3】完成した文を確認する\n"The girl running in the park is my sister."という型になる。\n\n【答え】\nThe girl running in the park is my sister.\n\n【確かめ】\nrunning in the parkがThe girlの直後に置かれ、後ろから修飾する形になっているか確認する。\n\n【よくあるまちがい】\nrunningをThe girlの前に置いてしまうミス（語句をともなう分詞は名詞の後ろに置く）。\n\n【ここが絶対】\n分詞が単独の一語なら名詞の前、語句をともなうときは名詞の後ろに置くと覚える。',
  },
  {
    id: 'grade_j3_eigo_21',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '次の（　）に入る最も適切なものを選びなさい。\nI received a letter (　) in English.',
    answer: 'written',
    choices: ['written', 'writing', 'wrote', 'write'],
    hint: '「英語で書かれた手紙」という受け身の意味を表す分詞を選ぶ。',
    explanation:
      '「〜された…」という受け身の意味を名詞に加えるときは過去分詞を使う。writtenはwriteの過去分詞で、written in Englishのまとまりが後ろからa letterを修飾し、「英語で書かれた手紙」という意味になる。\n答え：written（私は英語で書かれた手紙を受け取りました。）',
  },

  // ==================== 関係代名詞（who / which / whose） ====================
  {
    id: 'grade_j3_eigo_22',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'basic',
    question: '次の（　）に入る最も適切なものを選びなさい。\nI have a friend (　) lives in Canada.',
    answer: 'who',
    choices: ['who', 'which', 'whose', 'what'],
    hint: '先行詞が「人」で、あとに動詞（lives）が続く＝主格の関係代名詞を選ぶ。',
    explanation:
      '先行詞a friend（友達）は「人」なので、人を表す関係代名詞whoを使う。whoのあとに動詞（lives）が続いているので主格の関係代名詞。whichは物、whoseは所有格、whatは先行詞を必要としないので誤り。\n答え：who（私にはカナダに住んでいる友達がいます。）',
  },
  {
    id: 'grade_j3_eigo_23',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nThis is the book (　) I bought yesterday.',
    answer: 'which',
    choices: ['which', 'who', 'whose', 'what'],
    hint: '先行詞が「物」で、あとに〈主語＋動詞〉が続く＝目的格の関係代名詞を選ぶ。',
    explanation:
      '先行詞the book（本）は「物」なので、物を表す関係代名詞whichを使う。whichのあとにI boughtという〈主語＋動詞〉が続いているので目的格の関係代名詞。whoは人、whoseは所有格、whatは先行詞を必要としないので誤り。\n答え：which（これは私が昨日買った本です。）',
    pitfall: '関係代名詞は先行詞が人ならwho、物ならwhich、所有を表すならwhoseを使う。',
  },
  {
    id: 'grade_j3_eigo_24',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question:
      '次の2つの文を、関係代名詞を使って1つの文にしなさい。\nI know the woman. She is wearing a red hat.',
    answer: 'I know the woman who is wearing a red hat.',
    hint: '2つ目の文のSheをwhoに置きかえて、1つ目の文のthe womanの後ろにつなげる。',
    explanation:
      '2つの文に共通するthe woman（＝She）に注目する。2つ目の文の主語SheをwhoにかえてI know the womanの後ろに続けることで、「赤い帽子をかぶっている女性」という意味の1つの文になる。先行詞the womanは人なのでwhoを使う。\n答え：I know the woman who is wearing a red hat.',
  },
  {
    id: 'grade_j3_eigo_25',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '次の（　）に入る最も適切なものを選びなさい。\nThis is the house (　) roof is blue.',
    answer: 'whose',
    choices: ['whose', 'which', 'who', 'that'],
    hint: '「その家の屋根」＝家とroof（屋根）の所有関係を表す関係代名詞を選ぶ。',
    explanation:
      '【何を聞かれているか】\n"This is the house (　) roof is blue."の空欄に入る最も適切な関係代名詞を選ぶ問題。\n\n【なぜwhoseを使うのか】\nthe house（家）とroof（屋根）の間には「家の屋根」という所有の関係があり、先行詞と後ろの名詞の間に所有関係があるときは所有格の関係代名詞whoseを使う。\n\n【ポイント1】所有の関係を確認する\n「家」と「（その家の）屋根」という所有関係。\n\n【ポイント2】whoseの後の形を確認する\nwhoseの後には名詞（roof）がそのまま続く（冠詞はつかない）。\n\n【ポイント3】他の選択肢を消去する\nwhich・who・thatはいずれも所有格ではなく、主格・目的格の関係代名詞なので、この文脈には合わない。\n\n【答え】\nwhose（これは屋根が青い家です。）\n\n【確かめ】\nwhoseの後にroof（名詞）が直接続いているか確認する。\n\n【よくあるまちがい】\n所有関係があるのにwhichを選んでしまうミス。\n\n【ここが絶対】\nwhoseは「〜の」という所有を表し、あとに冠詞なしで名詞が続くと覚える。',
    memoryTip: 'whoseは「〜の」という所有を表し、あとに冠詞なしで名詞が続く。',
  },

  // ==================== 間接疑問文 ====================
  {
    id: 'grade_j3_eigo_26',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'basic',
    question: '次の（　）に入る最も適切なものを選びなさい。\nDo you know (　) time it is?',
    answer: 'what',
    choices: ['what', 'which', 'whose', 'how'],
    hint: '「何時か」とたずねる疑問詞と、疑問文が文の中に組みこまれたときの語順に注意する。',
    explanation:
      '【何を聞かれているか】\n"Do you know (　) time it is?"の空欄に入る最も適切な語を選ぶ問題。\n\n【なぜwhatを使うのか】\n「何時ですか」はふつうWhat time is it?だが、この文のように別の文の中に組みこまれる（間接疑問文になる）ときも、疑問詞にはwhatを使う。\n\n【ポイント1】もとの疑問文を確認する\n"What time is it?"（何時ですか）。\n\n【ポイント2】間接疑問文の語順を確認する\n別の文の中に組みこまれると、語順が〈疑問詞＋主語＋動詞〉（what time it is）に変わる。\n\n【ポイント3】他の選択肢を消去する\nwhich・whose・howはいずれも「何時か」をたずねる疑問詞として合わない。\n\n【答え】\nwhat（あなたは今何時か知っていますか。）\n\n【確かめ】\nwhatの後がtime it is（普通の文の語順）になっているか確認する。\n\n【よくあるまちがい】\nis itのような疑問文の語順のまま組みこんでしまうミス。\n\n【ここが絶対】\n間接疑問文では、is itのような疑問文の語順ではなく、it isのように普通の文の語順になると覚える。',
    pitfall: '間接疑問文では、is it のような疑問文の語順ではなく、it isのように普通の文の語順になる。',
  },
  {
    id: 'grade_j3_eigo_27',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question:
      '次の疑問文を、"I don\'t know" に続く間接疑問文に書きかえなさい。\nWhere does she live?',
    answer: "I don't know where she lives.",
    hint: '間接疑問文にするとdoesが消え、動詞は主語にあわせた形（lives）にもどる。',
    explanation:
      '【何を聞かれているか】\n"Where does she live?"を、"I don\'t know"に続く間接疑問文に書きかえる問題。\n\n【なぜdoesが消えるのか】\n疑問文を別の文に組みこんで間接疑問文にするときは、〈疑問詞＋主語＋動詞〉の語順にするため、doesは消え、動詞は主語にあわせた形（3人称単数現在形）にもどる。\n\n【ポイント1】もとの疑問文の語順を確認する\n"does she live"（疑問文の語順）。\n\n【ポイント2】間接疑問文の語順を確認する\n"where she lives"＝疑問詞where＋主語she＋動詞lives（3単現に戻す）。\n\n【ポイント3】完成した文を確認する\n"I don\'t know where she lives."という型になる。\n\n【答え】\nI don\'t know where she lives.\n\n【確かめ】\ndoesが消え、動詞がlives（3単現）になっているか確認する。\n\n【よくあるまちがい】\n"I don\'t know where does she live?"のように、doesを残したまま組み込んでしまうミス。\n\n【ここが絶対】\n間接疑問文ではdo/does/didは消え、動詞がもとの時制・人称にあわせた形にもどると覚える。',
    pitfall: '間接疑問文では do/does/did は消え、動詞がもとの時制・人称にあわせた形にもどる。',
  },
  {
    id: 'grade_j3_eigo_28',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nI wonder (　) he will come to the party.',
    answer: 'if',
    choices: ['if', 'what', 'who', 'that'],
    hint: '「彼が来るかどうか」というYes/Noでたずねる内容を間接疑問文にするときに使う語。',
    explanation:
      '「〜かどうか」というYes/Noで答えられる内容を間接疑問文にするときはif（またはwhether）を使う。I wonder if 〜 で「〜かどうかと思う」という意味になる。what/whoは具体的な疑問詞が必要な文脈ではないので合わない。\n答え：if（彼がパーティーに来るかどうか私は思っています。）',
  },
  {
    id: 'grade_j3_eigo_29',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '「彼女がなぜ怒っているのか分かりません。」の英訳として最も適切なものを選びなさい。',
    answer: "I don't know why she is angry.",
    choices: [
      "I don't know why she is angry.",
      "I don't know why is she angry.",
      "I don't know why she angry is.",
      "I don't know why does she angry.",
    ],
    hint: '間接疑問文の語順は〈疑問詞＋主語＋動詞〉。ふつうの疑問文の語順（is she）にしないこと。',
    explanation:
      '【何を聞かれているか】\n「彼女がなぜ怒っているのか分かりません。」の英訳として最も適切なものを選ぶ問題。\n\n【なぜ間接疑問文の語順にするのか】\n間接疑問文はknowなどの動詞の目的語として疑問詞節が入る形で、語順は〈疑問詞＋主語＋動詞〉になり、ふつうの疑問文の語順（is she）にはしない。\n\n【ポイント1】間接疑問文の語順を確認する\n"why she is angry"＝疑問詞why＋主語she＋動詞is（普通の文の語順）。\n\n【ポイント2】doesを加えないことを確認する\nbe動詞を使った文にdoesを加えるのは誤り。\n\n【ポイント3】他の選択肢を消去する\n"why is she angry"（倒置している）、"why she angry is"（語順が崩れている）、"why does she angry"（be動詞の文にdoesを使う誤り）はいずれも不適切。\n\n【答え】\nI don\'t know why she is angry.\n\n【確かめ】\nwhyの後がshe is angry（倒置しない普通の語順）になっているか確認する。\n\n【よくあるまちがい】\nwhyの後を疑問文の語順（is she angry）のままにしてしまうミス。\n\n【ここが絶対】\n間接疑問文＝「疑問詞+主語+動詞」の通常の語順、倒置しないと覚える。',
  },

  // ==================== 仮定法の基礎 ====================
  {
    id: 'grade_j3_eigo_30',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    question: '次の（　）に入る最も適切なものを選びなさい。\nIf I (　) a bird, I could fly to you.',
    answer: 'were',
    choices: ['were', 'was', 'am', 'be'],
    hint: '現実とは異なることを仮定するとき（仮定法過去）は、be動詞は主語に関係なくwereを使うことが多い。',
    explanation:
      '【何を聞かれているか】\n"If I (　) a bird, I could fly to you."の空欄に入る最も適切な語を選ぶ問題。\n\n【なぜwereを使うのか】\n「もし私が鳥だったら」という現実にはありえない仮定（仮定法過去）では、be動詞は主語がIやhe/sheのように単数でもwereを使うのが基本というルールがある。\n\n【ポイント1】仮定法過去の形を確認する\nIf+主語+were〜, 主語+could+動詞の原形〜。\n\n【ポイント2】主語Iでもwereになることを確認する\n仮定法過去のbe動詞は、主語が単数（I）であってもwereを使う。\n\n【ポイント3】他の選択肢を消去する\nwas（通常の過去形）、am（現在形）、be（原形）はいずれも仮定法過去のif節には合わない。\n\n【答え】\nwere（もし私が鳥だったら、あなたのところへ飛んでいけるのに。）\n\n【確かめ】\nif節がwereで始まり、主節がcould+原形（could fly）になっているか確認する。\n\n【よくあるまちがい】\n主語Iに合わせてwasを選んでしまうミス。\n\n【ここが絶対】\n仮定法過去のbe動詞は主語に関わらずwereを使う（If I were〜／If he were〜）と覚える。',
    memoryTip: '仮定法過去のbe動詞は主語に関わらずwereを使う（If I were 〜 / If he were 〜）。',
  },
  {
    id: 'grade_j3_eigo_31',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question:
      '次の（　）に入る最も適切なものを選びなさい。\nI wish I (　) more time to finish this project.',
    answer: 'had',
    choices: ['had', 'have', 'has', 'will have'],
    hint: '「I wish＋主語＋動詞の過去形」で、現在の事実に反する願望を表す。',
    explanation:
      '"I wish＋主語＋動詞の過去形"は「（実際にはそうではないが）〜だったらいいのに」という現在の事実に反する願望を表す仮定法。実際には十分な時間がないので、hadという過去形を使う。\n答え：had（このプロジェクトを終わらせる時間がもっとあればいいのに。）',
    pitfall: 'I wish のあとの動詞は過去形にする。現在の願望でも動詞は過去形になることに注意。',
  },
  {
    id: 'grade_j3_eigo_32',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    question: '次の日本語を英語にしなさい。\n「もし彼が忙しくなければ、私たちと一緒に来られるのに。」',
    answer: 'If he were not busy, he could come with us.',
    hint: '現実とは異なる仮定（仮定法過去）：if節はwere not、主節はcouldを使う。',
    explanation:
      '【何を聞かれているか】\n「もし彼が忙しくなければ、私たちと一緒に来られるのに。」を英語にする問題。\n\n【なぜwere notとcouldを使うのか】\n「実際は忙しいが、もし忙しくなければ」という現実に反する仮定は仮定法過去で表し、if節ではbe動詞をwere notにし、主節では助動詞の過去形could（〜できるのに）を使うという決まりがある。\n\n【ポイント1】if節の形を確認する\nif節のbe動詞は、主語がheでもwere notにする。\n\n【ポイント2】主節の形を確認する\n主節は"could+動詞の原形"（could come）にする。\n\n【ポイント3】完成した文を確認する\n"If he were not busy, he could come with us."という型になる。\n\n【答え】\nIf he were not busy, he could come with us.\n\n【確かめ】\nif節がwere not（主語heでもwere）、主節がcould+原形（could come）になっているか確認する。\n\n【よくあるまちがい】\n主語heに合わせてwasn\'tを使ってしまうミス。\n\n【ここが絶対】\n仮定法過去＝If+主語+were(not), 主語+could/would+動詞の原形、と型で覚える。',
  },

  // ==================== 英作文の基礎（条件英作文） ====================
  {
    id: 'grade_j3_eigo_33',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    isWritten: true,
    question:
      '次の指示に従って英作文をしなさい。\nテーマ：あなたが今までに経験した中で一番印象に残っている出来事について、現在完了形を必ず1つ以上使って2文以上の英語で書きなさい。',
    answer:
      'I have never forgotten my trip to Okinawa. I went there with my family two summers ago, and I have wanted to go back ever since.',
    hint: '「〜したことがある（経験）」「〜して以来ずっと（継続）」のように現在完了形を使う場面を考える。',
    explanation:
      '【何を聞かれているか】\n今までに経験した中で一番印象に残っている出来事について、現在完了形を1つ以上使って2文以上の英語で書く問題。\n\n【なぜ現在完了形を使う場面を考えるのか】\n「〜したことがある（経験）」「〜して以来ずっと（継続）」のように、過去の出来事が現在にもつながりを持つ内容を表すときに現在完了形を使う。\n\n【ポイント1】経験を表す現在完了を確認する\n"I have never forgotten my trip to Okinawa."（経験・現在までの状態）。\n\n【ポイント2】継続を表す現在完了を確認する\n"I have wanted to go back ever since."（それ以来ずっと〜し続けている）。\n\n【ポイント3】確認すべき3つの観点を確認する\n①現在完了形を正しく使えているか、②具体的な出来事が書けているか、③英文が2つ以上あるか。\n\n【答え】\nI have never forgotten my trip to Okinawa. I went there with my family two summers ago, and I have wanted to go back ever since.\n\n【確かめ】\n自分の解答が、現在完了形（have/has+過去分詞）を少なくとも1つ含んでいるか確認する。\n\n【よくあるまちがい】\n出来事をすべて単純過去形だけで書いてしまい、現在完了形を1つも使わないミス。\n\n【ここが絶対】\n現在完了形は「経験」「継続」「完了・結果」のいずれかの意味で使う、と用法を意識して書く。',
    rubricPoints: [
      '現在完了形（have/has＋過去分詞）を少なくとも1つ正しく使えている',
      '具体的な出来事の内容が書かれている',
      '2文以上の英文になっている',
      '主語と動詞が対応するなど、文法的に正しい英文になっている',
    ],
  },
  {
    id: 'grade_j3_eigo_34',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    isWritten: true,
    question:
      '次の日本語を、受動態を使って英語にしなさい。\n「この寺は800年前に建てられました。そして今でも多くの観光客に訪れられています。」',
    answer: 'This temple was built 800 years ago. It is still visited by many tourists today.',
    hint: '1文目は過去の受動態（was built）、2文目は現在の受動態（is visited）を使う。',
    explanation:
      '模範解答：This temple was built 800 years ago. It is still visited by many tourists today.\n1文目は「800年前に建てられた」という過去の出来事なので過去の受動態（was built）を使う。2文目は「今でも訪れられている」という現在の状態なので現在の受動態（is visited）を使う。自分の解答が①過去の受動態、②現在の受動態をそれぞれ正しく使えているか確認しよう。',
    rubricPoints: [
      '1文目で過去の受動態（was/were＋過去分詞）が正しく使われている',
      '2文目で現在の受動態（is/are＋過去分詞）が正しく使われている',
      '2文構成になっている',
      '日本語の指示内容（建てられた時期・今も訪れられていること）が正しく反映されている',
    ],
  },
  {
    id: 'grade_j3_eigo_35',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    isWritten: true,
    question:
      '次の条件に従って、5文以上の英文でスピーチ原稿を書きなさい。\n条件：①中学校生活で一番心に残っている先生について書くこと　②関係代名詞（who/which/thatなど）を1つ以上使うこと　③現在完了形を1つ以上使うこと',
    answer:
      'I want to talk about a teacher who has influenced me the most. Her name is Ms. Tanaka, and she teaches English. She is a teacher who always encourages her students to try new things. I have learned a lot from her class since I was a first-year student. I have never forgotten the advice she gave me before my first speech contest. Thanks to her, I have become more confident about speaking English.',
    hint: '「〜する先生（関係代名詞）」「これまで〜してきた（現在完了形）」という表現を組み合わせて構成を考える。',
    explanation:
      '【何を聞かれているか】\n中学校生活で一番心に残っている先生について、関係代名詞と現在完了形をそれぞれ1つ以上使って5文以上の英語でスピーチ原稿を書く問題。\n\n【なぜ関係代名詞と現在完了形を組み合わせるのか】\n「〜する先生（関係代名詞）」で先生を説明し、「これまで〜してきた（現在完了形）」でその先生から受けた影響の積み重ねを表すことで、条件をすべて満たしながら内容の濃いスピーチになる。\n\n【ポイント1】関係代名詞の使用箇所を確認する\n"a teacher who has influenced me the most"、"a teacher who always encourages her students"のようにwhoを使う。\n\n【ポイント2】現在完了形の使用箇所を確認する\n"I have learned a lot"、"I have never forgotten"、"I have become more confident"のように複数箇所で使う。\n\n【ポイント3】確認すべき4つの観点を確認する\n①関係代名詞、②現在完了形をそれぞれ正しく使えているか、③先生についての具体的な内容があるか、④5文以上になっているか。\n\n【答え】\nI want to talk about a teacher who has influenced me the most. Her name is Ms. Tanaka, and she teaches English. She is a teacher who always encourages her students to try new things. I have learned a lot from her class since I was a first-year student. I have never forgotten the advice she gave me before my first speech contest. Thanks to her, I have become more confident about speaking English.\n\n【確かめ】\n自分の解答に、関係代名詞（who/which/that）と現在完了形（have/has+過去分詞）の両方が含まれているか確認する。\n\n【よくあるまちがい】\n条件の1つ（関係代名詞または現在完了形）だけを満たし、もう1つを書き忘れるミス。\n\n【ここが絶対】\n複数の文法条件が課される英作文では、書く前にどの文でどの条件を満たすかを決めてから書き始める。',
    rubricPoints: [
      '関係代名詞（who/which/thatなど）を少なくとも1つ正しく使えている',
      '現在完了形を少なくとも1つ正しく使えている',
      '先生について具体的な内容が書かれている',
      '5文以上の英文になっている',
    ],
  },

  // ==================== 長文読解① 福祉ロボットの展示会 ====================
  {
    id: 'grade_j3_eigo_36',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    passage:
      'Last month, our school held a special event called Science Discovery Day. Students who were interested in technology could visit a robot exhibition organized by a local university. I have always been interested in robots, so I decided to join.\nAt the exhibition, I saw a robot that had been designed to help elderly people with daily tasks. The robot, which was covered in soft white material, could carry small objects and even have simple conversations. A researcher explained that the robot has been tested in nursing homes for over a year, and many residents have said that it makes their lives easier.\nI was especially surprised to learn that the robot\'s voice had been recorded by a professional actor to sound warm and friendly. After the demonstration, I asked the researcher a question: I wanted to know how much the robot cost to build. She told me that the cost had not been decided yet because the robot was still being improved.\nThis experience has changed the way I think about technology. I used to believe that robots were cold and mechanical, but now I understand that they can be designed with real care for the people who use them.',
    question: '本文の内容と一致するものを選びなさい。\nHow long has the robot been tested in nursing homes, according to the passage?',
    answer: 'For over a year.',
    choices: ['For over a year.', 'For six months.', 'For two years.', 'For a week.'],
    hint: '"A researcher explained that the robot has been tested in nursing homes for..." の部分に注目する。',
    explanation:
      '【何を聞かれているか】\n本文を読み、そのロボットがどのくらいの期間介護施設でテストされているかを答える問題。\n\n【なぜ現在完了形has been testedに注目するのか】\n現在完了形has been testedは、過去に始まり今も続いている状態（テストされ続けていること）を表しており、その継続期間が本文に明示されている。\n\n【ポイント1】該当の一文を確認する\n本文に"the robot has been tested in nursing homes for over a year"（そのロボットは1年以上介護施設でテストされている）とある。\n\n【ポイント2】for over a yearの意味を確認する\n"for over a year"＝「1年以上」という継続期間を表す。\n\n【ポイント3】他の選択肢を消去する\n6か月、2年、1週間はいずれも本文の記述と一致しない。\n\n【答え】\nFor over a year.\n\n【確かめ】\n答えが本文中の具体的な期間（over a year）と一致しているか確認する。\n\n【よくあるまちがい】\n本文中の別の数字と混同してしまうミス。\n\n【ここが絶対】\n「どのくらいの期間か」を問う設問は、本文中のfor+期間という表現をそのまま探す。',
  },
  {
    id: 'grade_j3_eigo_37',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    passage:
      'Last month, our school held a special event called Science Discovery Day. Students who were interested in technology could visit a robot exhibition organized by a local university. I have always been interested in robots, so I decided to join.\nAt the exhibition, I saw a robot that had been designed to help elderly people with daily tasks. The robot, which was covered in soft white material, could carry small objects and even have simple conversations. A researcher explained that the robot has been tested in nursing homes for over a year, and many residents have said that it makes their lives easier.\nI was especially surprised to learn that the robot\'s voice had been recorded by a professional actor to sound warm and friendly. After the demonstration, I asked the researcher a question: I wanted to know how much the robot cost to build. She told me that the cost had not been decided yet because the robot was still being improved.\nThis experience has changed the way I think about technology. I used to believe that robots were cold and mechanical, but now I understand that they can be designed with real care for the people who use them.',
    question:
      '本文中の "The robot, which was covered in soft white material, could carry small objects..." について、which が指しているものを日本語で答えなさい。',
    answer: 'ロボット（the robot）',
    hint: 'カンマではさまれた関係代名詞節（非制限用法）は、直前の名詞について補足説明を加える。',
    explanation:
      '【何を聞かれているか】\n"The robot, which was covered in soft white material, could carry small objects..."の中で、whichが何を指しているかを答える問題。\n\n【なぜ非制限用法のwhichが直前の名詞を指すのか】\nwhichはカンマではさまれた関係代名詞節（非制限用法）を作っており、この用法のwhichは文全体ではなく、直前の名詞（先行詞）について補足説明を加える働きをする。\n\n【ポイント1】非制限用法の形を確認する\nカンマ＋which〜、という形で補足説明を加える。\n\n【ポイント2】whichが指すものを確認する\n直前の名詞The robot（ロボット）を指す。\n\n【ポイント3】補足説明の内容を確認する\n「柔らかい白い素材で覆われている」という、ロボットについての追加情報。\n\n【答え】\nロボット（the robot）\n\n【確かめ】\n答えが、whichの直前にある名詞（the robot）になっているか確認する。\n\n【よくあるまちがい】\nwhichが文全体や、離れた位置にある別の名詞を指していると誤解してしまうミス。\n\n【ここが絶対】\nカンマではさまれた関係代名詞節（非制限用法）は、直前の名詞について補足説明を加えると覚える。',
  },
  {
    id: 'grade_j3_eigo_38',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'Last month, our school held a special event called Science Discovery Day. Students who were interested in technology could visit a robot exhibition organized by a local university. I have always been interested in robots, so I decided to join.\nAt the exhibition, I saw a robot that had been designed to help elderly people with daily tasks. The robot, which was covered in soft white material, could carry small objects and even have simple conversations. A researcher explained that the robot has been tested in nursing homes for over a year, and many residents have said that it makes their lives easier.\nI was especially surprised to learn that the robot\'s voice had been recorded by a professional actor to sound warm and friendly. After the demonstration, I asked the researcher a question: I wanted to know how much the robot cost to build. She told me that the cost had not been decided yet because the robot was still being improved.\nThis experience has changed the way I think about technology. I used to believe that robots were cold and mechanical, but now I understand that they can be designed with real care for the people who use them.',
    question:
      'According to the passage, why couldn\'t the researcher tell the writer the exact cost of the robot?',
    answer: 'Because the robot was still being improved and the cost had not been decided yet.',
    choices: [
      'Because the robot was still being improved and the cost had not been decided yet.',
      'Because the cost was a company secret.',
      'Because the writer did not ask the question clearly.',
      'Because the researcher did not know the answer in English.',
    ],
    hint: '"She told me that the cost had not been decided yet because..." の部分に注目する。',
    explanation:
      '本文の最後から2つ目の文に "the cost had not been decided yet because the robot was still being improved"（ロボットがまだ改良中だったので、費用はまだ決まっていなかった）とある。was still being improvedは受動態の進行形で「まだ改良され続けている」という意味。\n答え：Because the robot was still being improved and the cost had not been decided yet.',
  },

  // ==================== 長文読解② 食品ロス問題 ====================
  {
    id: 'grade_j3_eigo_39',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    passage:
      'Every year, huge amounts of food are thrown away around the world, even though millions of people do not have enough to eat. This problem is called food waste, and it has become a serious issue that affects both the environment and the economy.\nFood waste happens for many reasons. In supermarkets, fruits and vegetables that look slightly damaged are often removed from shelves because customers usually choose perfect-looking products. At home, food that has been kept in the refrigerator for too long is thrown away because people forget about it. In restaurants, large portions that cannot be finished by customers are also wasted.\nTo solve this problem, some countries have started new programs. In France, supermarkets are now required by law to donate unsold food to charities instead of throwing it away. In Japan, some apps have been created that connect stores with customers who want to buy food that is close to its expiration date at a lower price.\nExperts say that reducing food waste is one of the easiest ways for ordinary people to help the environment. By planning meals carefully and buying only what we need, we can all make a small but important difference.',
    question:
      '本文によると、フランスのスーパーマーケットは法律によってどうすることが義務付けられていますか。日本語で答えなさい。',
    answer: '売れ残った食品を捨てるのではなく、チャリティー団体に寄付すること。',
    hint: '"In France, supermarkets are now required by law to..." の部分に注目する。',
    explanation:
      '本文に "supermarkets are now required by law to donate unsold food to charities instead of throwing it away"（スーパーマーケットは、売れ残った食品を捨てるのではなくチャリティーに寄付することが法律で義務付けられている）とある。are requiredは受動態で「義務付けられている」という意味。\n答え：売れ残った食品を捨てるのではなく、チャリティー団体に寄付すること。',
  },
  {
    id: 'grade_j3_eigo_40',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    passage:
      'Every year, huge amounts of food are thrown away around the world, even though millions of people do not have enough to eat. This problem is called food waste, and it has become a serious issue that affects both the environment and the economy.\nFood waste happens for many reasons. In supermarkets, fruits and vegetables that look slightly damaged are often removed from shelves because customers usually choose perfect-looking products. At home, food that has been kept in the refrigerator for too long is thrown away because people forget about it. In restaurants, large portions that cannot be finished by customers are also wasted.\nTo solve this problem, some countries have started new programs. In France, supermarkets are now required by law to donate unsold food to charities instead of throwing it away. In Japan, some apps have been created that connect stores with customers who want to buy food that is close to its expiration date at a lower price.\nExperts say that reducing food waste is one of the easiest ways for ordinary people to help the environment. By planning meals carefully and buying only what we need, we can all make a small but important difference.',
    question:
      '本文中の "food that is close to its expiration date" とはどのような食品ですか。日本語で説明しなさい。',
    answer: '賞味期限（消費期限）が近づいている食品。',
    hint: 'close to 〜 は「〜に近い」、expiration date は「期限」という意味。',
    explanation:
      'close to its expiration date は「その（食品の）期限に近い」という意味で、「賞味期限（消費期限）が近づいている」ことを表す。日本のアプリが、そのような食品を安く買いたい客と店をつなげているという文脈である。\n答え：賞味期限（消費期限）が近づいている食品。',
  },
  {
    id: 'grade_j3_eigo_41',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'Every year, huge amounts of food are thrown away around the world, even though millions of people do not have enough to eat. This problem is called food waste, and it has become a serious issue that affects both the environment and the economy.\nFood waste happens for many reasons. In supermarkets, fruits and vegetables that look slightly damaged are often removed from shelves because customers usually choose perfect-looking products. At home, food that has been kept in the refrigerator for too long is thrown away because people forget about it. In restaurants, large portions that cannot be finished by customers are also wasted.\nTo solve this problem, some countries have started new programs. In France, supermarkets are now required by law to donate unsold food to charities instead of throwing it away. In Japan, some apps have been created that connect stores with customers who want to buy food that is close to its expiration date at a lower price.\nExperts say that reducing food waste is one of the easiest ways for ordinary people to help the environment. By planning meals carefully and buying only what we need, we can all make a small but important difference.',
    question: '本文の最後の段落で、専門家が挙げている「一般の人にもできること」として最も適切なものを選びなさい。',
    answer: 'Plan meals carefully and buy only what is needed.',
    choices: [
      'Plan meals carefully and buy only what is needed.',
      'Buy more food to support local farmers.',
      'Only buy vegetables that look slightly damaged.',
      'Eat at restaurants less often than before.',
    ],
    hint: '最後の文 "By planning meals carefully and buying only what we need..." に注目する。',
    explanation:
      '【何を聞かれているか】\n本文の最後の段落で、専門家が挙げている「一般の人にもできること」として最も適切なものを選ぶ問題。\n\n【なぜ最後の文に注目するのか】\n「一般の人にもできること」という設問の答えは、本文の最後の一文に直接述べられている。\n\n【ポイント1】該当の一文を確認する\n"By planning meals carefully and buying only what we need, we can all make a small but important difference."（食事を注意深く計画し、必要な分だけを買うことで、小さいが重要な違いを生み出せる）。\n\n【ポイント2】内容を整理する\n「食事を計画的に考え、必要な分だけ買う」という具体的な行動。\n\n【ポイント3】他の選択肢を消去する\n「地元農家を支えるためにもっと買う」「少し傷んだ野菜だけを買う」「外食を減らす」はいずれも本文で述べられていない、または本文の主張と異なる内容。\n\n【答え】\nPlan meals carefully and buy only what is needed.\n\n【確かめ】\n選んだ答えが、本文最後の「計画的に考え、必要な分だけ買う」という内容と一致しているか確認する。\n\n【よくあるまちがい】\n本文に出てこない一般論（地元農家を支える等）を正解だと誤解してしまうミス。\n\n【ここが絶対】\n「一般の人にもできること」を問う設問は、本文の結論部分（多くは最後の段落）に注目する。',
  },

  // ==================== 長文読解③ おばあちゃんの指輪 ====================
  {
    id: 'grade_j3_eigo_42',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    passage:
      'When Mai got home from school, she noticed that her grandmother\'s ring, which had been passed down for three generations, was missing from the jewelry box. She had never lost anything so important before, and she did not know what to do.\nMai called her older brother, Ken, and explained the situation. "Have you seen Grandma\'s ring anywhere?" she asked. Ken thought for a moment and then remembered that their grandmother, who often visited on weekends, had borrowed the ring the previous Sunday to show it to a friend.\nMai immediately called her grandmother\'s house. Her grandmother answered and said, "Oh, I\'m so sorry! I\'ve had it in my bag since Sunday. I completely forgot to bring it back." She promised to return it that evening.\nWhen her grandmother arrived, she handed Mai a small box. Inside was the ring, safe and shining as always. "I\'m glad it wasn\'t lost," Mai said, feeling relieved. "Next time, please tell me where you\'re taking it." Her grandmother laughed and agreed, promising to be more careful in the future.',
    question: '本文の内容と一致するものを選びなさい。\nWho had borrowed the ring before it went missing?',
    answer: "Mai's grandmother",
    choices: ["Mai's grandmother", 'Ken', "Mai's friend", 'A jewelry store clerk'],
    hint: '"their grandmother... had borrowed the ring the previous Sunday" の部分に注目する。',
    explanation:
      '本文に "their grandmother, who often visited on weekends, had borrowed the ring the previous Sunday to show it to a friend"（週末によく訪ねてくる祖母が、前の日曜日に友達に見せるために指輪を借りていた）とある。関係代名詞whoの節（who often visited on weekends）は、their grandmotherについての補足説明。\n答え：Mai\'s grandmother',
  },
  {
    id: 'grade_j3_eigo_43',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'When Mai got home from school, she noticed that her grandmother\'s ring, which had been passed down for three generations, was missing from the jewelry box. She had never lost anything so important before, and she did not know what to do.\nMai called her older brother, Ken, and explained the situation. "Have you seen Grandma\'s ring anywhere?" she asked. Ken thought for a moment and then remembered that their grandmother, who often visited on weekends, had borrowed the ring the previous Sunday to show it to a friend.\nMai immediately called her grandmother\'s house. Her grandmother answered and said, "Oh, I\'m so sorry! I\'ve had it in my bag since Sunday. I completely forgot to bring it back." She promised to return it that evening.\nWhen her grandmother arrived, she handed Mai a small box. Inside was the ring, safe and shining as always. "I\'m glad it wasn\'t lost," Mai said, feeling relieved. "Next time, please tell me where you\'re taking it." Her grandmother laughed and agreed, promising to be more careful in the future.',
    question:
      '本文中の "her grandmother\'s ring, which had been passed down for three generations" の which が指しているものを日本語で答えなさい。',
    answer: '祖母の指輪（her grandmother\'s ring）',
    hint: 'カンマではさまれた関係代名詞節は、直前の名詞について補足説明を加える。',
    explanation:
      'whichはカンマではさまれた関係代名詞節（非制限用法）を作り、直前の名詞her grandmother\'s ring（祖母の指輪）について「3世代にわたって受け継がれてきた」という補足説明を加えている。had been passed downは過去完了の受動態で、「（それより前の時点までに）受け継がれてきていた」という意味。\n答え：祖母の指輪（her grandmother\'s ring）',
  },
  {
    id: 'grade_j3_eigo_44',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'When Mai got home from school, she noticed that her grandmother\'s ring, which had been passed down for three generations, was missing from the jewelry box. She had never lost anything so important before, and she did not know what to do.\nMai called her older brother, Ken, and explained the situation. "Have you seen Grandma\'s ring anywhere?" she asked. Ken thought for a moment and then remembered that their grandmother, who often visited on weekends, had borrowed the ring the previous Sunday to show it to a friend.\nMai immediately called her grandmother\'s house. Her grandmother answered and said, "Oh, I\'m so sorry! I\'ve had it in my bag since Sunday. I completely forgot to bring it back." She promised to return it that evening.\nWhen her grandmother arrived, she handed Mai a small box. Inside was the ring, safe and shining as always. "I\'m glad it wasn\'t lost," Mai said, feeling relieved. "Next time, please tell me where you\'re taking it." Her grandmother laughed and agreed, promising to be more careful in the future.',
    question: 'Why did Ken think their grandmother might know where the ring was?',
    answer: 'Because she had borrowed it the previous Sunday to show it to a friend.',
    choices: [
      'Because she had borrowed it the previous Sunday to show it to a friend.',
      'Because she had bought a new ring for herself.',
      'Because Mai had told him that their grandmother took it.',
      'Because their grandmother worked at a jewelry store.',
    ],
    hint: 'Kenが思い出した内容の部分（"remembered that..."以降）に注目する。',
    explanation:
      '本文に "remembered that their grandmother... had borrowed the ring the previous Sunday to show it to a friend"（祖母が前の日曜日に友達に見せるために指輪を借りていたことを思い出した）とある。過去完了had borrowedは、Kenが思い出した過去の時点（指輪がなくなったことに気づいた時点）よりもさらに前の出来事を表している。\n答え：Because she had borrowed it the previous Sunday to show it to a friend.',
  },

  // ==================== 長文読解④ 高校生が開発したアプリ ====================
  {
    id: 'grade_j3_eigo_45',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    passage:
      'A group of high school students in Fukuoka has developed a smartphone app that helps people reduce their use of plastic bottles. The idea came from a school project about environmental problems.\nOne of the students, Yuki, explained how the idea started. "We had been discussing what kind of problem we could solve for months," she said, "and then one of our teachers asked us how many plastic bottles we throw away every day. We were shocked when we found the answer."\nThe app, which is called EcoDrop, shows users the nearest places where they can refill a reusable water bottle for free. It has already been downloaded more than ten thousand times since it was released last spring. The team says they have been working with several cafes and stations to add more refill locations to the app.\nWhen asked what she has learned from this project, Yuki said that working together with her teammates taught her that even students can create something that is used by many people. The team hopes that the app will eventually be used across the country.',
    question: 'What does the app EcoDrop show its users?',
    answer: 'The nearest places to refill a reusable water bottle for free.',
    choices: [
      'The nearest places to refill a reusable water bottle for free.',
      'The nearest supermarkets that sell bottled water.',
      'The number of plastic bottles thrown away each day in Japan.',
      'The cheapest cafes near their school.',
    ],
    hint: '"The app... shows users the nearest places where they can refill a reusable water bottle for free." の部分に注目する。',
    explanation:
      '【何を聞かれているか】\nアプリEcoDropが利用者に何を示すかを答える問題。\n\n【なぜ関係副詞whereの節に注目するのか】\n本文の該当箇所には関係副詞whereの節（where they can refill〜）があり、これがplaces（場所）について具体的に説明している。\n\n【ポイント1】該当の一文を確認する\n本文に"shows users the nearest places where they can refill a reusable water bottle for free"（利用者に、無料でマイボトルに水を補充できる最寄りの場所を示す）とある。\n\n【ポイント2】whereの節の働きを確認する\n"where they can refill a reusable water bottle for free"がplacesを修飾し、どんな場所かを説明している。\n\n【ポイント3】他の選択肢を消去する\n「ボトル入りの水を売るスーパー」「1日に捨てられるペットボトルの数」「学校の近くの安いカフェ」はいずれも本文の内容と異なる。\n\n【答え】\nThe nearest places to refill a reusable water bottle for free.\n\n【確かめ】\n答えが「無料でマイボトルに水を補充できる場所」という本文の内容と一致しているか確認する。\n\n【よくあるまちがい】\n本文に出てこない別の情報（ペットボトルの廃棄数等）を答えてしまうミス。\n\n【ここが絶対】\nアプリの機能を問う設問は、shows/tells usersなどの直後に続く具体的な内容に注目する。',
  },
  {
    id: 'grade_j3_eigo_46',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'A group of high school students in Fukuoka has developed a smartphone app that helps people reduce their use of plastic bottles. The idea came from a school project about environmental problems.\nOne of the students, Yuki, explained how the idea started. "We had been discussing what kind of problem we could solve for months," she said, "and then one of our teachers asked us how many plastic bottles we throw away every day. We were shocked when we found the answer."\nThe app, which is called EcoDrop, shows users the nearest places where they can refill a reusable water bottle for free. It has already been downloaded more than ten thousand times since it was released last spring. The team says they have been working with several cafes and stations to add more refill locations to the app.\nWhen asked what she has learned from this project, Yuki said that working together with her teammates taught her that even students can create something that is used by many people. The team hopes that the app will eventually be used across the country.',
    question:
      '本文中の "We had been discussing what kind of problem we could solve for months" で過去完了進行形が使われている理由として最も適切なものを選びなさい。',
    answer: '彼らの話し合いが、話者が説明している過去のある時点よりも前から続いていたことを示すため',
    choices: [
      '彼らの話し合いが、話者が説明している過去のある時点よりも前から続いていたことを示すため',
      'これから話し合いを始める予定であることを表すため',
      '話し合いが一度きりで終わったことを表すため',
      '現在も話し合いが続いていることを表すため',
    ],
    hint: 'had been discussingは「had been＋ing形」＝過去完了進行形。基準となる過去の時点よりもさらに前から続く動作を表す。',
    explanation:
      'had been discussingは過去完了進行形（had been＋動詞のing形）。文の続きにある「そして先生が質問した（then one of our teachers asked us）」という過去の出来事よりも前から、「何カ月もの間ずっと話し合いを続けていた」ということを表している。過去のある基準時点よりもさらに前から継続していた動作を示す用法。\n答え：彼らの話し合いが、話者が説明している過去のある時点よりも前から続いていたことを示すため',
  },
  {
    id: 'grade_j3_eigo_47',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'A group of high school students in Fukuoka has developed a smartphone app that helps people reduce their use of plastic bottles. The idea came from a school project about environmental problems.\nOne of the students, Yuki, explained how the idea started. "We had been discussing what kind of problem we could solve for months," she said, "and then one of our teachers asked us how many plastic bottles we throw away every day. We were shocked when we found the answer."\nThe app, which is called EcoDrop, shows users the nearest places where they can refill a reusable water bottle for free. It has already been downloaded more than ten thousand times since it was released last spring. The team says they have been working with several cafes and stations to add more refill locations to the app.\nWhen asked what she has learned from this project, Yuki said that working together with her teammates taught her that even students can create something that is used by many people. The team hopes that the app will eventually be used across the country.',
    question: 'How many times had the app been downloaded, according to the passage?',
    answer: 'More than ten thousand times.',
    choices: [
      'More than ten thousand times.',
      'More than one thousand times.',
      'More than one million times.',
      'Exactly ten thousand times.',
    ],
    hint: '"It has already been downloaded more than ten thousand times since it was released last spring." の部分に注目する。',
    explanation:
      '【何を聞かれているか】\n本文によると、そのアプリが何回ダウンロードされたかを答える問題。\n\n【なぜ現在完了形の受動態has been downloadedに注目するのか】\n現在完了形の受動態has been downloadedは、過去のリリース時から現在までの結果（ダウンロードされた回数の累計）を表しており、その具体的な回数が本文に明示されている。\n\n【ポイント1】該当の一文を確認する\n本文に"It has already been downloaded more than ten thousand times since it was released last spring."（去年の春にリリースされて以来、すでに1万回以上ダウンロードされている）とある。\n\n【ポイント2】more than ten thousand timesの意味を確認する\n「1万回以上」という累計のダウンロード回数を表す。\n\n【ポイント3】他の選択肢を消去する\n1千回以上、100万回以上、ちょうど1万回はいずれも本文の記述と一致しない。\n\n【答え】\nMore than ten thousand times.\n\n【確かめ】\n答えが本文中の具体的な回数（more than ten thousand times）と一致しているか確認する。\n\n【よくあるまちがい】\n「ちょうど1万回」のように、以上（more than）というニュアンスを見落としてしまうミス。\n\n【ここが絶対】\n「何回〜されたか」を問う設問は、現在完了形の受動態を含む一文に注目し、more thanなどの語も正確に読み取る。',
  },

  // ==================== 長文読解⑤ 宿題をめぐる意見文 ====================
  {
    id: 'grade_j3_eigo_48',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'standard',
    passage:
      'Imagine a world without homework. Would students learn better, or would they simply forget what they studied in class? This question has been debated by teachers and parents for many years.\nSome people argue that if schools stopped giving homework, students would have more time to rest, play sports, and spend time with their families. They believe that stress caused by too much homework can actually make it harder for students to concentrate and enjoy learning.\nOn the other hand, many teachers say that homework gives students a chance to practice what they have learned and helps them build good study habits. If students never reviewed their lessons at home, they say, most students would quickly forget the material that had been taught in class.\nA middle ground has been suggested by some education experts: instead of giving a large amount of homework every night, teachers could assign shorter, more meaningful tasks that connect to students\' interests. If this approach were used more widely, they argue, students might enjoy studying more without losing the benefits of practice.\nIn the end, there may be no perfect answer. What matters most is finding a balance that helps each student learn effectively while also protecting their time to rest and grow.',
    question: '本文中で、宿題に反対する人々が主張している理由を日本語で説明しなさい。',
    answer:
      '宿題が多すぎることによるストレスが、生徒の集中力や学習を楽しむ気持ちをかえって損なう可能性があるから。',
    hint: '"They believe that stress caused by too much homework can actually make it harder for students to concentrate and enjoy learning." の部分に注目する。',
    explanation:
      '本文に "stress caused by too much homework can actually make it harder for students to concentrate and enjoy learning"（宿題が多すぎることによるストレスが、生徒の集中力や学習を楽しむことをかえって難しくする）とある。causedは過去分詞でstressを後ろから修飾し、「宿題が多すぎることによって引き起こされるストレス」という意味を表している。\n答え：宿題が多すぎることによるストレスが、生徒の集中力や学習を楽しむ気持ちをかえって損なう可能性があるから。',
  },
  {
    id: 'grade_j3_eigo_49',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'Imagine a world without homework. Would students learn better, or would they simply forget what they studied in class? This question has been debated by teachers and parents for many years.\nSome people argue that if schools stopped giving homework, students would have more time to rest, play sports, and spend time with their families. They believe that stress caused by too much homework can actually make it harder for students to concentrate and enjoy learning.\nOn the other hand, many teachers say that homework gives students a chance to practice what they have learned and helps them build good study habits. If students never reviewed their lessons at home, they say, most students would quickly forget the material that had been taught in class.\nA middle ground has been suggested by some education experts: instead of giving a large amount of homework every night, teachers could assign shorter, more meaningful tasks that connect to students\' interests. If this approach were used more widely, they argue, students might enjoy studying more without losing the benefits of practice.\nIn the end, there may be no perfect answer. What matters most is finding a balance that helps each student learn effectively while also protecting their time to rest and grow.',
    question:
      '本文中の "If this approach were used more widely, they argue, students might enjoy studying more" で were が使われている理由として最も適切なものを選びなさい。',
    answer: '現実とは異なる仮定を表す仮定法過去のため、主語に関わらずwereを使うから',
    choices: [
      '現実とは異なる仮定を表す仮定法過去のため、主語に関わらずwereを使うから',
      '主語のthis approachが複数だから',
      '過去に実際にあった出来事を表しているから',
      '受動態の過去形だから',
    ],
    hint: '「もしこのやり方がもっと広く使われれば」という、まだ実現していない仮定を表す文であることに注目する。',
    explanation:
      'この文は「（実際にはまだ広く使われていないが）もしこのやり方がもっと広く使われたら」という、現実とは異なる・まだ実現していない仮定を表す仮定法過去。仮定法過去では、be動詞は主語がthis approachのように単数（3人称単数）でもwereを使うのが基本のルール。\n答え：現実とは異なる仮定を表す仮定法過去のため、主語に関わらずwereを使うから',
  },
  {
    id: 'grade_j3_eigo_50',
    subject: 'eigo',
    examType: 'koko',
    grade: GRADE,
    difficulty: 'advanced',
    passage:
      'Imagine a world without homework. Would students learn better, or would they simply forget what they studied in class? This question has been debated by teachers and parents for many years.\nSome people argue that if schools stopped giving homework, students would have more time to rest, play sports, and spend time with their families. They believe that stress caused by too much homework can actually make it harder for students to concentrate and enjoy learning.\nOn the other hand, many teachers say that homework gives students a chance to practice what they have learned and helps them build good study habits. If students never reviewed their lessons at home, they say, most students would quickly forget the material that had been taught in class.\nA middle ground has been suggested by some education experts: instead of giving a large amount of homework every night, teachers could assign shorter, more meaningful tasks that connect to students\' interests. If this approach were used more widely, they argue, students might enjoy studying more without losing the benefits of practice.\nIn the end, there may be no perfect answer. What matters most is finding a balance that helps each student learn effectively while also protecting their time to rest and grow.',
    question: '教育の専門家たちが提案している「中間の道（a middle ground）」とはどのようなものですか。日本語で説明しなさい。',
    answer:
      '毎晩大量の宿題を出す代わりに、生徒の興味に関連した、より短く意味のある課題を出すという考え方。',
    hint: '"instead of giving a large amount of homework every night, teachers could assign shorter, more meaningful tasks that connect to students\' interests." の部分に注目する。',
    explanation:
      '【何を聞かれているか】\n教育の専門家たちが提案している「中間の道（a middle ground）」がどのようなものかを日本語で説明する問題。\n\n【なぜ「代わりに」という表現に注目するのか】\n本文には"instead of〜（〜する代わりに）"という表現があり、これが「今までのやり方」と「新しい提案」を対比させる形で、中間の道の具体的な内容を示している。\n\n【ポイント1】該当の一文を確認する\n本文に"instead of giving a large amount of homework every night, teachers could assign shorter, more meaningful tasks that connect to students\' interests"（毎晩大量の宿題を出す代わりに、生徒の興味に関連した、より短く意味のある課題を出すことができる）とある。\n\n【ポイント2】対比の内容を整理する\n「毎晩大量の宿題」（今までのやり方）と「短く意味のある課題」（新しい提案）の対比。\n\n【ポイント3】that節の働きを確認する\n"that connect to students\' interests"は関係代名詞thatの節で、tasksを後ろから修飾している。\n\n【答え】\n毎晩大量の宿題を出す代わりに、生徒の興味に関連した、より短く意味のある課題を出すという考え方。\n\n【確かめ】\n答えに「大量の宿題をやめる」ことと「短く意味のある課題を出す」ことの両方が含まれているか確認する。\n\n【よくあるまちがい】\n「宿題をなくす」という極端な内容に誤解してしまうミス（宿題自体はなくならず、量と質が変わる）。\n\n【ここが絶対】\n「中間の道」を問う設問は、2つの極端な立場を対比させたinstead of〜のような表現に注目する。',
  },
];
