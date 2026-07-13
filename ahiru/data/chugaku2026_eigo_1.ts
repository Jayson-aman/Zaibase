import type { Question } from './questions';

export const chugaku2026Eigo1: Question[] = [
  // ============================================================
  // Q001–Q010: 基礎（difficulty: 'basic'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_001',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切なbe動詞を入れなさい。

① I (　) a student.
② She (　) happy.
③ We (　) friends.`,
    answer: '① am　② is　③ are',
    hint: '主語がI→am、3人称単数→is、複数→areを使う。',
    explanation: `【出題意図】be動詞（am/is/are）の主語による使い分けの基礎を問う。【解説】主語がIのときはam、主語が3人称単数（she, he, itや名前など1人・1つ）のときはis、主語が複数（we, they, 名詞の複数形など）のときはareを使う。①I→am、②She→is、③We→are。【注意点】be動詞は主語の人称・数によって形が変わる。人称代名詞と主語の関係を必ず確認する。【関連知識】I am→I'm、She is→She's、We are→We'reのように短縮形もよく使われる。`,
    pitfall: 'I is a student.のようにamとisを混同しないこと。主語がIのときは必ずam。',
    memoryTip: '「I am、You are、He/She/It is、We/You/They are」の順で声に出して覚える。',
  },
  {
    id: 'chugaku2026_eigo_002',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を否定文にしなさい。

① I am busy. → I (　) busy.
② He is a teacher. → He (　) a teacher.`,
    answer: "① am not　② is not (isn't)",
    hint: 'be動詞の否定文はbe動詞のすぐ後ろにnotを置く。',
    explanation: `【出題意図】be動詞の否定文の作り方を問う。【解説】be動詞の否定文は、be動詞の直後にnotを置くだけでよい。①I am not busy.、②He is not (isn't) a teacher.【注意点】amの短縮形にam notの短縮形はない（×amn't）。isn'tやaren'tは短縮できる。【関連知識】疑問文にするときはbe動詞を主語の前に出す（Is he a teacher?）。`,
    pitfall: "I don't am busy.のようにdon'tを使わない。be動詞の否定文にdoは不要。",
    memoryTip: '「be動詞+not」でOK。一般動詞と違ってdo/doesは使わない。',
  },
  {
    id: 'chugaku2026_eigo_003',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）内の動詞を正しい形にしなさい。

① She (play) tennis every Sunday.
② My father (work) at a hospital.
③ I (like) dogs.`,
    answer: '① plays　② works　③ like',
    hint: '主語が3人称単数（she, my fatherなど）で現在の文のときは動詞に-s/-esをつける。',
    explanation: `【出題意図】一般動詞の現在形における3人称単数現在（3単現）のsを問う。【解説】主語が3人称単数（he, she, it、または1人の人名など）で現在の習慣を表すとき、動詞の語尾に-s（またはes）をつける。①She plays、②My father works。③主語IはIなので3単現のsはつけない→like。【注意点】3単現のsは「主語が3人称・単数・現在形」の3つがそろったときだけつく。過去形や主語がIやweのときはつけない。【関連知識】語尾がo, s, sh, ch, xで終わる動詞はesをつける（go→goes, wash→washes）。`,
    pitfall: 'I likesのようにIに3単現のsをつけない。主語Iは3人称単数ではない。',
    memoryTip: '「3人称・単数・現在（3・単・現）」の3条件がそろったときだけsをつける。',
  },
  {
    id: 'chugaku2026_eigo_004',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を疑問文に書き換えなさい。

① You like music. → (　) you like music?
② She plays the piano. → (　) she play the piano?`,
    answer: '① Do　② Does',
    hint: '主語が3人称単数のときはDoes、それ以外はDoを使う。動詞は原形に戻す。',
    explanation: `【出題意図】一般動詞の疑問文の作り方（Do/Doesの使い分け）を問う。【解説】疑問文は文頭にDo（またはDoes）を置き、動詞を原形に戻す。①主語You（3人称単数でない）→Do you like music?。②主語She（3人称単数）→Does she play the piano?（playsのsが取れてplayになる）。【注意点】Doesを使ったときは動詞から3単現のsを取り、原形にする。Does she plays〜とはしない。【関連知識】答え方はYes, I do. / No, I don't.やYes, she does. / No, she doesn't.となる。`,
    pitfall: 'Does she plays the piano?のようにDoesとplaysを両方につけない。sは一度だけ。',
    memoryTip: '「Do/Doesが前に出たら動詞は原形に戻る」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_005',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を否定文にしなさい。

① I play soccer. → I (　) (　) soccer.
② He likes cats. → He (　) (　) cats.`,
    answer: "① do not (don't) play　② does not (doesn't) like",
    hint: '一般動詞の否定文はdo not / does notを動詞の前に置き、動詞は原形にする。',
    explanation: `【出題意図】一般動詞の否定文の作り方を問う。【解説】一般動詞の否定文はdon't（do not）またはdoesn't（does not）を動詞の前に置く。①主語I→don't play。②主語He（3人称単数）→doesn't like（likesのsが取れる）。【注意点】doesn'tを使ったときは動詞は原形に戻す。He doesn't likesとはしない。【関連知識】be動詞の否定文（be+not）とは形が異なるので混同しないよう注意。`,
    pitfall: "He doesn't likes cats.は誤り。doesn'tの後は動詞の原形。",
    memoryTip: "「don't/doesn'tの後ろは必ず動詞の原形」と唱えて覚える。",
  },
  {
    id: 'chugaku2026_eigo_006',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な疑問詞を入れなさい。

① (　) is this? — It's a pen.
② (　) is that boy? — He is Tom.`,
    answer: '① What　② Who',
    hint: 'ものを尋ねるときはWhat、人を尋ねるときはWho。',
    explanation: `【出題意図】疑問詞What（もの・こと）とWho（人）の基本的な使い分けを問う。【解説】①答えがIt's a pen.（もの）なのでWhatを使う。②答えがHe is Tom.（人）なのでWhoを使う。【注意点】疑問詞は文の一番前に置く。答え方から逆に疑問詞を判断する練習をするとよい。【関連知識】What is this?（これは何ですか）、Who is that?（あの人は誰ですか）はどちらも会話の基本表現。`,
    pitfall: "Who is this? — It's a pen.のように、ものについてWhoを使わない。",
    memoryTip: '「もの→What、人→Who」とシンプルに覚える。',
  },
  {
    id: 'chugaku2026_eigo_007',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の名詞を複数形にしなさい。

① book →(　)
② box →(　)
③ city →(　)
④ child →(　)`,
    answer: '① books　② boxes　③ cities　④ children',
    hint: '通常は-s、s/x/ch/sh語尾は-es、子音+yはyをiに変えてes、不規則変化もある。',
    explanation: `【出題意図】名詞の複数形の作り方（規則変化・不規則変化）を問う。【解説】①通常の名詞はそのまま-sをつける→books。②語尾がxの単語は-esをつける→boxes。③子音字+yで終わる単語はyをiに変えて-esをつける→cities。④childは不規則変化でchildren。【注意点】母音字+yで終わる場合（day→days）はそのまま-sをつける。childのような不規則変化名詞は個別に覚える必要がある。【関連知識】不規則変化の例：man→men、woman→women、foot→feet、mouse→mice。`,
    pitfall: 'citysとするのは誤り。子音+yはyをiに変える。',
    memoryTip: '「s/x/ch/sh→es」「子音+y→iに変えてes」「不規則は丸暗記」の3パターンで整理。',
  },
  {
    id: 'chugaku2026_eigo_008',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の英語が表す曜日・月を日本語で答えなさい。

① Wednesday
② Saturday
③ April
④ September`,
    answer: '① 水曜日　② 土曜日　③ 4月　④ 9月',
    hint: '曜日はSunday(日)から始まり7つ、月はJanuary(1月)から始まり12個ある。',
    explanation: `【出題意図】曜日・月を表す基本語彙を問う。【解説】①Wednesday=水曜日。②Saturday=土曜日。③April=4月。④September=9月。曜日はSunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturdayの順、月はJanuaryから始まりDecemberまでの12か月。【注意点】曜日・月の最初の文字は必ず大文字にする（英語のルール）。【関連知識】曜日を尋ねる表現：What day is it today?、月を尋ねる表現：What month is it?`,
    pitfall: '曜日・月の頭文字を小文字で書かないよう注意（april→April）。',
    memoryTip: '曜日はSun-Mon-Tue-Wed-Thu-Fri-Satの順で歌のように覚えると忘れにくい。',
  },
  {
    id: 'chugaku2026_eigo_009',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を選びなさい。

① (　) is my bag.（近くにある1つのかばんを指して）
  ア. This　イ. These
② (　) are my shoes.（近くにある靴を指して）
  ア. This　イ. These
③ (　) is a mountain over there.（遠くにある1つの山を指して）
  ア. That　イ. Those`,
    answer: '① ア(This)　② イ(These)　③ ア(That)',
    hint: '近い・単数→This、近い・複数→These、遠い・単数→That、遠い・複数→Those。',
    explanation: `【出題意図】指示代名詞This/These/That/Thoseの使い分けを問う。【解説】近くのものを指すとき、単数はThis、複数はThese。遠くのものを指すとき、単数はThat、複数はThose。①近くの1つのかばん→This。②近くの複数の靴→These。③遠くの1つの山→That。【注意点】This/Thatに続くbe動詞はis、These/Thoseに続くbe動詞はare。【関連知識】These are my shoes.のshoesはもともと2つで1組のため常に複数形で使う（他の例：glasses, pants）。`,
    pitfall: 'This are my shoes.のようにThisとareを組み合わせない。単数・複数とbe動詞を一致させる。',
    memoryTip: '「近い・遠い」×「単数・複数」の4マスで整理すると覚えやすい。',
  },
  {
    id: 'chugaku2026_eigo_010',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適切な語を入れなさい。

① 開けなさい。（ドアを）
  (　) the door.
② 静かにしなさい。
  (　) quiet.
③ ここで走ってはいけません。
  (　) run here.`,
    answer: "① Open　② Be　③ Don't",
    hint: '命令文は動詞の原形（またはBe+形容詞）で始める。禁止はDon\'tを使う。',
    explanation: `【出題意図】命令文の基本形（肯定・be動詞・否定）を問う。【解説】①「開けなさい」は動詞の原形Openで文を始める。②「静かにしなさい」はbe動詞を使う命令文なのでBe quiet.となる。③「〜してはいけません」という禁止はDon't+動詞の原形で表す。【注意点】命令文では主語Youを省略する。pleaseをつけると丁寧な言い方になる。【関連知識】Let's〜.（〜しましょう）は「一緒に〜しよう」と誘う表現で、命令文の仲間として覚えておくとよい。`,
    pitfall: 'Opens the door.のように動詞に-sをつけない。命令文の動詞は必ず原形。',
    memoryTip: "「動詞の原形で始める」「be動詞のときはBe」「禁止はDon't」の3パターンを覚える。",
  },

  // ============================================================
  // Q011–Q027: 標準（difficulty: 'standard'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_011',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な形を入れなさい。（　）内は動詞の原形。

① I (　) (　) TV now. (watch)
② She (　) (　) a letter now. (write)`,
    answer: '① am watching　② is writing',
    hint: '現在進行形はbe動詞+動詞のing形。writeのようにeで終わる動詞はeを取ってing。',
    explanation: `【出題意図】現在進行形（be動詞+動詞-ing）の作り方を問う。【解説】①主語I→am watching（watch+ing）。②主語She→is writing。writeはeで終わる動詞なのでeを取ってingをつける(write→writing)。【注意点】ing形の作り方には、そのままing（watch→watching）、eを取ってing（write→writing）、最後の文字を重ねてing（run→running）の3パターンがある。【関連知識】現在進行形は「今まさに行っている動作」を表す。know, like, wantなどの状態動詞は基本的に進行形にしない。`,
    pitfall: 'writeingとつづらないこと。eを取ってwritingとする。',
    memoryTip: 'ing形3パターン：①そのままing②eを取ってing③最後の文字を重ねてing。',
  },
  {
    id: 'chugaku2026_eigo_012',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を（　）内の指示にしたがって書き換えなさい。

① She is cooking dinner. （疑問文に）
② They are playing soccer. （否定文に）`,
    answer: "① Is she cooking dinner?　② They are not (aren't) playing soccer.",
    hint: '進行形の疑問文はbe動詞を主語の前に出す。否定文はbe動詞の後にnotを置く。',
    explanation: `【出題意図】現在進行形の疑問文・否定文の作り方を問う。【解説】①be動詞isを主語sheの前に出してIs she cooking dinner?とする。②be動詞areの後ろにnotを置いてThey are not (aren't) playing soccer.とする。【注意点】進行形の疑問文・否定文はbe動詞を使うので、be動詞の疑問文・否定文と同じルールが使える（do/doesは使わない）。【関連知識】答え方：Yes, she is. / No, she isn't.のようにbe動詞で答える。`,
    pitfall: 'Does she is cooking dinner?のようにdoesを付け加えない。進行形はbe動詞だけで疑問文にする。',
    memoryTip: '進行形の疑問文・否定文は「be動詞を動かすだけ」でdo/doesは登場しない。',
  },
  {
    id: 'chugaku2026_eigo_013',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の動詞を過去形にしなさい。

① play →(　)
② study →(　)
③ stop →(　)`,
    answer: '① played　② studied　③ stopped',
    hint: '通常は-ed、子音+yはyをiに変えてed、短母音+子音1字は子音を重ねてed。',
    explanation: `【出題意図】規則動詞の過去形の作り方（3パターン）を問う。【解説】①通常はそのまま-edをつける→played。②子音字+yで終わる動詞はyをiに変えて-edをつける→studied。③短母音+子音1字で終わる動詞は最後の子音を重ねて-edをつける→stopped。【注意点】母音字+yで終わる動詞（play, enjoyなど）はそのまま-edでよい（yをiに変えない）。【関連知識】-edの発音は動詞の語尾の音によって[t][d][id]の3通りに変化する。`,
    pitfall: 'playedをplaiedと書かない。母音+yはそのまま-edをつける。',
    memoryTip: '「そのままed」「子音+y→ied」「短母音+子音字1つ→子音を重ねてed」の3パターン。',
  },
  {
    id: 'chugaku2026_eigo_014',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の動詞を過去形にしなさい。

① go →(　)
② have →(　)
③ see →(　)
④ eat →(　)`,
    answer: '① went　② had　③ saw　④ ate',
    hint: '不規則動詞は形が大きく変わるので1つずつ覚える必要がある。',
    explanation: `【出題意図】頻出の不規則動詞の過去形を問う。【解説】①go(行く)の過去形はwent。②have(持つ・食べる)の過去形はhad。③see(見る)の過去形はsaw。④eat(食べる)の過去形はate。これらは-edをつけるルールが通用しない不規則動詞。【注意点】不規則動詞は数が多いが、中学受験・中学英語で頻出のものから優先して覚えることが大切。【関連知識】その他の頻出不規則動詞：come→came、make→made、get→got、take→took、do→did。`,
    pitfall: 'goedやeatedのように-edをつけないこと。不規則動詞には規則がない。',
    memoryTip: '「go-went-gone」のように過去形・過去分詞形をセットで声に出して覚える。',
  },
  {
    id: 'chugaku2026_eigo_015',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を疑問文にしなさい。

You watched the movie yesterday.
→ (　) you (　) the movie yesterday?`,
    answer: 'Did you watch the movie yesterday?',
    hint: '過去形の疑問文はDidを文頭に置き、動詞は原形に戻す。',
    explanation: `【出題意図】一般動詞の過去形疑問文の作り方を問う。【解説】過去の疑問文は文頭にDidを置き、動詞watchedを原形watchに戻す。Did you watch the movie yesterday?となる。【注意点】Didを使ったら動詞は必ず原形にする。Did you watched〜としない。【関連知識】答え方：Yes, I did. / No, I didn't.のようにdidで答える。`,
    pitfall: 'Did you watched the movie?のようにDidと過去形を両方使わない。',
    memoryTip: '「Didが出たら動詞は原形」と唱えて覚える。',
  },
  {
    id: 'chugaku2026_eigo_016',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を否定文にしなさい。

She went to school yesterday.
→ She (　) (　) to school yesterday.`,
    answer: "did not (didn't) go",
    hint: "過去形の否定文はdidn'tを動詞の前に置き、動詞は原形にする。",
    explanation: `【出題意図】一般動詞の過去形否定文の作り方を問う。【解説】過去の否定文はdidn't（did not）を動詞の前に置き、動詞wentを原形goに戻す。She didn't go to school yesterday.となる。【注意点】didn'tを使ったら動詞は必ず原形に戻す。She didn't wentとはしない。【関連知識】be動詞の過去の否定文はwasn't/weren'tを使い、didn'tは使わない点に注意。`,
    pitfall: "She didn't went to school.は誤り。didn'tの後は原形go。",
    memoryTip: "「didn'tの後ろは動詞の原形」とdon't/doesn'tと同じルールで覚える。",
  },
  {
    id: 'chugaku2026_eigo_017',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な疑問詞を入れなさい。

① (　) do you live? — I live in Tokyo.
② (　) is your birthday? — It's May 3rd.
③ (　) did you cry? — Because I lost my dog.
④ (　) do you go to school? — By bus.`,
    answer: '① Where　② When　③ Why　④ How',
    hint: '場所→Where、時→When、理由→Why、方法・手段→How。',
    explanation: `【出題意図】基本疑問詞（Where/When/Why/How）の使い分けを問う。【解説】①答えがin Tokyo（場所）なのでWhere。②答えがMay 3rd（日付・時）なのでWhen。③答えがBecause〜（理由）なのでWhy。④答えがBy bus（手段）なのでHow。【注意点】Whyに対する答えはBecause〜（なぜなら）で始めることが多い。【関連知識】Howには他にもHow old（年齢）、How many（数）、How much（量・値段）などの応用表現がある。`,
    pitfall: '手段を尋ねるのにWhatを使わない。手段・方法はHowを使う。',
    memoryTip: '「場所→Where、時→When、理由→Why、方法→How」と語呂で覚える。',
  },
  {
    id: 'chugaku2026_eigo_018',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

(　) pen is this? — It's Ken's pen.`,
    answer: 'Whose',
    hint: '「誰の」と持ち主を尋ねるときはWhose+名詞を使う。',
    explanation: `【出題意図】疑問詞Whose（誰の）の使い方を問う。【解説】持ち主を尋ねるときはWhose+名詞の形にする。Whose pen is this?（これは誰のペンですか）。答えはIt's Ken's pen.（それはケンのペンです）のように「人の名前+'s」で表す。【注意点】WhoseとWho's（Who isの短縮形）は発音が同じだが意味が違うので混同しないこと。【関連知識】所有を表す表現：This pen is Ken's.（このペンはケンのものです）のようにKen'sだけで「ケンのもの」という意味にもなる。`,
    pitfall: 'Who pen is this?のようにWhoseの代わりにWhoを使わない。',
    memoryTip: "Whose=「誰の」+名詞、Who's=Who is（「誰が〜ですか」）と発音は同じだが区別して覚える。",
  },
  {
    id: 'chugaku2026_eigo_019',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

(　) do you like better, tea or coffee? — I like tea better.`,
    answer: 'Which',
    hint: '2つのうちどちらかを選ばせるときはWhichを使う。',
    explanation: `【出題意図】疑問詞Which（どちら・どれ）の使い方を問う。【解説】2つ（またはいくつか）の中から選ぶときはWhichを使う。Which do you like better, A or B?（AとBどちらが好きですか）は頻出表現。【注意点】Whatは範囲を限定せずに広く尋ねるとき、Whichは選択肢が決まっているときに使う違いがある。【関連知識】Which do you like better, A or B?に対してI like A better.（Aの方が好きです）と答える形もセットで覚える。`,
    pitfall: 'What do you like better, tea or coffee?のようにWhatを使うと不自然。選択肢が示されているのでWhichが適切。',
    memoryTip: '「A or B」と選択肢が示されていたらWhichを選ぶサイン。',
  },
  {
    id: 'chugaku2026_eigo_020',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① I (　) swim very well.（私はとても上手に泳ぐことができる）
② (　) you help me?（手伝ってもらえますか）`,
    answer: '① can　② Can',
    hint: '「〜できる」はcan+動詞の原形。依頼するときもCan you〜?を使う。',
    explanation: `【出題意図】助動詞canの基本的な使い方（能力・依頼）を問う。【解説】①「泳ぐことができる」という能力を表すのでcan swim。②「手伝ってもらえますか」という依頼を表すのでCan you help me?。canの後ろは必ず動詞の原形。【注意点】canは主語が何であっても形が変わらない（3単現のsはつけない：He can swims.は誤り）。【関連知識】Could you〜?はCan you〜?よりも丁寧な依頼表現。`,
    pitfall: 'He can swims very well.のようにcanの後の動詞に-sをつけない。',
    memoryTip: '「can/could/will/mustなどの助動詞の後ろは必ず動詞の原形」とまとめて覚える。',
  },
  {
    id: 'chugaku2026_eigo_021',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な前置詞を入れなさい。

① My birthday is (　) July.
② I get up (　) seven o'clock.
③ We have a school festival (　) October 10th.`,
    answer: '① in　② at　③ on',
    hint: '月→in、時刻→at、日付→on。',
    explanation: `【出題意図】時を表す前置詞in/at/onの基本的な使い分けを問う。【解説】①月（July）にはinを使う。②時刻（seven o'clock）にはatを使う。③日付（October 10th）にはonを使う。【注意点】年（in 2026）や季節（in summer）にもinを使う。時の一点を表すat noon、at nightなどの慣用表現もある。【関連知識】on Monday（曜日）、on my birthday（特定の日）もonを使う仲間。`,
    pitfall: 'at Julyやon sevenのように組み合わせを間違えないこと。月→in、時刻→atを固定して覚える。',
    memoryTip: '「年月→in、日付・曜日→on、時刻→at」とセットで暗記する。',
  },
  {
    id: 'chugaku2026_eigo_022',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な前置詞を入れなさい。

① The cat is (　) the box.（箱の中に）
② The book is (　) the desk.（机の上に）
③ There is a picture (　) the wall.（壁に）`,
    answer: '① in　② on　③ on',
    hint: '中→in、接している面の上→on。',
    explanation: `【出題意図】場所を表す前置詞in/onの基本的な使い分けを問う。【解説】①箱の「中」にいるのでin the box。②机の「上」（接している）にあるのでon the desk。③壁に「貼りついている」状態なのでon the wall。【注意点】onは「上に接している」という意味なので、壁や天井のように必ずしも水平でない面でも使える。【関連知識】under（下に）、near（近くに）、between（の間に）、in front of（の前に）なども合わせて覚える。`,
    pitfall: 'There is a picture in the wall.は誤り。壁に接しているのでonを使う。',
    memoryTip: '「in=中、on=接している面の上」というイメージで覚える。',
  },
  {
    id: 'chugaku2026_eigo_023',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① (　) a park near my house.
② (　) two dogs in the yard.`,
    answer: '① There is　② There are',
    hint: '直後の名詞が単数→There is、複数→There are。',
    explanation: `【出題意図】There is/are構文の基本を問う。【解説】①後ろの名詞a park（単数）→There is。②後ろの名詞two dogs（複数）→There are。「〜がある/いる」と存在を表すときに使う構文。【注意点】There is/areの主語は動詞の後ろに来る名詞である点に注意。【関連知識】否定文はThere isn't/aren't〜、疑問文はIs there〜?/Are there〜?となる。`,
    pitfall: 'There are a park near my house.のように名詞の数とbe動詞を一致させ忘れない。',
    memoryTip: '「be動詞は後ろの名詞に合わせる」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_024',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の形容詞を比較級にしなさい。

① tall →(　)
② big →(　)
③ interesting →(　)`,
    answer: '① taller　② bigger　③ more interesting',
    hint: '短い語は-er、長い語（3音節以上など）はmoreをつける。',
    explanation: `【出題意図】比較級の作り方（-er型とmore型）を問う。【解説】①短い形容詞tallはそのまま-erをつける→taller。②短母音+子音1字で終わるbigは子音を重ねて-erをつける→bigger。③つづりの長い形容詞interestingはmoreを前につける→more interesting。【注意点】長い形容詞に-erをつけたり(interestinger)、moreとerを両方使ったり(more taller)しないよう注意。【関連知識】不規則な比較級：good→better、bad→worse、many/much→more。`,
    pitfall: 'more tallerのように比較級を二重に使わない。',
    memoryTip: '「短い語→er」「長い語→more」の使い分けをリズムで覚える。',
  },
  {
    id: 'chugaku2026_eigo_025',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の形容詞を最上級にしなさい。（theをつけて答えること）

① old →(　)
② easy →(　)
③ popular →(　)`,
    answer: '① the oldest　② the easiest　③ the most popular',
    hint: '短い語は-est、子音+yはyをiに変えてest、長い語はmostをつける。',
    explanation: `【出題意図】最上級の作り方（-est型とmost型）を問う。【解説】①短い形容詞oldはそのまま-estをつける→the oldest。②子音字+yで終わるeasyはyをiに変えて-estをつける→the easiest。③つづりの長い形容詞popularはmostを前につける→the most popular。【注意点】最上級には基本的にtheをつける。【関連知識】不規則な最上級：good→the best、bad→the worst、many/much→the most。`,
    pitfall: 'easyestとつづらない。yをiに変えてiestとする。',
    memoryTip: '「最上級には必ずtheをつける」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_026',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の数字を英語の序数（〜番目）で書きなさい。

① 1番目 →(　)
② 2番目 →(　)
③ 3番目 →(　)
④ 5番目 →(　)`,
    answer: '① first　② second　③ third　④ fifth',
    hint: '1〜3番目は不規則、他は基本的に数字+th。',
    explanation: `【出題意図】序数（順番を表す言い方）の基本を問う。【解説】1番目first、2番目second、3番目thirdは不規則に変化する。5番目fifthのように、多くの序数はfive→fifthのようにveをfに変えてthをつけるなど、基数と少しつづりが変わるものもある。【注意点】4番目以降は基本的に基数+thだが、5th(fifth)、9th(ninth)、12th(twelfth)などつづりが変わるものに注意。【関連知識】日付を言うときは序数を使う（May 3rd=May third）。`,
    pitfall: '「3番目」をthirdでなくthreethのように書かない。',
    memoryTip: 'first・second・thirdの3つだけ特別に覚え、あとは基本的にth（つづり変化に注意）。',
  },
  {
    id: 'chugaku2026_eigo_027',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の時刻を英語で表しなさい。

① 3時 →(　) o'clock
② 7時半 →seven (　)`,
    answer: '① three　② thirty',
    hint: '「〜時」はnumber+o\'clock、「〜時半」はnumber+thirty。',
    explanation: `【出題意図】時刻の基本的な英語表現を問う。【解説】①「3時」はちょうどの時刻を表すのでthree o'clock。②「7時半」はseven thirty（またはhalf past seven）。【注意点】o'clockは「ちょうど〜時」のときだけ使い、分がある場合（seven thirtyなど）にはo'clockをつけない。【関連知識】時刻の尋ね方：What time is it?（今何時ですか）、「〜時15分前」はa quarter to〜、「〜時15分」はa quarter past〜。`,
    pitfall: "seven thirty o'clockのように分がある時刻にo'clockをつけない。",
    memoryTip: "「o'clockはちょうどの時刻専用」と覚える。",
  },

  // ============================================================
  // Q028–Q060: 発展（difficulty: 'advanced'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_028',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形を入れなさい。（　）内は動詞の原形。

① I (　) (　) TV when my mother came home. (watch)
② They (　) (　) soccer at that time. (play)`,
    answer: '① was watching　② were playing',
    hint: '過去進行形はwas/were+動詞のing形。',
    explanation: `【出題意図】過去進行形（was/were+ing）の基本を問う。【解説】①主語I→was watching（過去のある時点で〜していた）。②主語They→were playing。過去進行形は「過去のある時点で進行中だった動作」を表す。【注意点】whenやat that timeなど「過去のある時点」を示す語と一緒によく使われる。【関連知識】I was watching TV when my mother came home.のように「〜していたときに、…した」という組み合わせは頻出パターン。`,
    pitfall: 'I is watchingのようにbe動詞を現在形にしない。過去の話なのでwas/wereを使う。',
    memoryTip: '「過去進行形=was/were+ing」と現在進行形(am/is/are+ing)の過去版として覚える。',
  },
  {
    id: 'chugaku2026_eigo_029',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適切な語を入れなさい。

私は将来医者になりたい。
I (　) (　) be a doctor in the future.`,
    answer: 'want to',
    hint: '「〜したい」はwant to+動詞の原形。',
    explanation: `【出題意図】want to+動詞原形（〜したい）の表現を問う。【解説】「〜したい」はwant to+動詞の原形で表す。I want to be a doctor in the future.（私は将来医者になりたい）。【注意点】want to doの後ろは必ず動詞の原形。want to becomingのようにingにしない。【関連知識】3人称単数のときはwants toになる（He wants to be a doctor.）。`,
    pitfall: 'I want to being a doctor.のようにingにしない。toの後ろは動詞の原形。',
    memoryTip: '「want to+原形」＝「〜したい」とセットで暗記する。',
  },
  {
    id: 'chugaku2026_eigo_030',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形を入れなさい。（　）内は動詞の原形。

I like (　) books. (read)`,
    answer: 'reading（またはto read）',
    hint: 'like+動詞のing形、またはlike to+動詞の原形はどちらも「〜するのが好き」という意味。',
    explanation: `【出題意図】like+動名詞（-ing）／like to+動詞原形の表現を問う。【解説】「〜するのが好き」はlike -ing（動名詞）またはlike to+動詞の原形のどちらでも表せる。I like reading books. / I like to read books.（私は本を読むのが好きです）。【注意点】likeの後ろに動詞の原形だけを置くことはできない（I like read booksは誤り）。【関連知識】enjoy（楽しむ）、finish（終える）は動名詞のみをとる動詞（enjoy reading, finish reading）。likeやstartはどちらの形も可。`,
    pitfall: 'I like read books.のように動詞の原形だけを置かない。ing形かto+原形にする。',
    memoryTip: '「likeの後は-ingかto+原形、どちらもOK」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_031',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① (　) (　) books do you have? — I have ten books.
② (　) (　) is this bag? — It's 2,000 yen.`,
    answer: '① How many　② How much',
    hint: '数えられる名詞の数を聞くときはHow many、値段や量を聞くときはHow much。',
    explanation: `【出題意図】How many（数）とHow much（値段・量）の使い分けを問う。【解説】①数えられる名詞booksの数を尋ねるのでHow many books。②値段を尋ねるのでHow much is this bag?。【注意点】How manyの後ろには複数形の名詞（books）が続く。How muchは値段のほか、数えられない名詞（water, timeなど）の量を尋ねるときにも使う。【関連知識】How much water do you drink every day?（数えられない名詞の量）もHow muchを使う典型例。`,
    pitfall: 'How many is this bag?のように値段にHow manyを使わない。値段はHow much。',
    memoryTip: '「数えられる→How many、値段・量→How much」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_032',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な接続詞を入れなさい。

① I like dogs (　) cats.（私は犬も猫も好きだ）
② I was tired, (　) I did my homework.（疲れていたが宿題をした）
③ Hurry up, (　) you will be late.（急ぎなさい、さもないと遅れますよ）`,
    answer: '① and　② but　③ or',
    hint: 'and=そして、but=しかし、or=さもないと（命令文+or）。',
    explanation: `【出題意図】基本的な等位接続詞and/but/orの使い分けを問う。【解説】①「犬も猫も好き」という並列→and。②「疲れていたが宿題をした」という逆接→but。③「命令文+or」＝「〜しなさい、さもないと〜」という意味になる。【注意点】「命令文+and」は「〜しなさい、そうすれば〜」という逆の意味になるので混同しない。【関連知識】because（なぜなら）、when（〜のとき）などの接続詞も合わせて整理しておく。`,
    pitfall: 'Hurry up, and you will be late.とすると意味が逆になってしまう（「急げば遅れる」となり不自然）。',
    memoryTip: '「命令文+or=さもないと」「命令文+and=そうすれば」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_033',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な接続詞を入れなさい。

① I stayed home (　) it was raining.（雨が降っていたので家にいた）
② I was watching TV (　) the phone rang.（電話が鳴ったときテレビを見ていた）`,
    answer: '① because　② when',
    hint: 'because=理由、when=時。',
    explanation: `【出題意図】従属接続詞because（理由）とwhen（時）の使い分けを問う。【解説】①「雨が降っていたので」という理由を表すのでbecause。②「電話が鳴ったとき」という時を表すのでwhen。【注意点】because以下は「理由」を表す節、when以下は「時」を表す節になる。文の前半・後半どちらに置いても意味は変わらない（Because it was raining, I stayed home.も可）。【関連知識】while（〜する間に）、if（もし〜なら）、though（〜だけれども）も同じ仲間の接続詞。`,
    pitfall: 'I stayed home when it was raining.にすると「雨が降っていたときに家にいた」と単なる時の説明になり、理由のニュアンスが弱くなる。',
    memoryTip: '「because=理由（なぜなら）、when=時（〜のとき）」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_034',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な代名詞を入れなさい。

① This is (　) bag.（これは私のかばんです）
② I know (　). She is my friend.（彼女を知っている）
③ Please give it to (　).（それを彼らに渡してください）`,
    answer: '① my　② her　③ them',
    hint: '所有格（〜の）my/her、目的格（〜を/に）her/them。',
    explanation: `【出題意図】代名詞の所有格・目的格の使い分けを問う。【解説】①「私の」という所有格→my bag。②「彼女を」という目的格→know her。③「彼らに」という目的格→to them。【注意点】主格（I, she, they）・所有格（my, her, their）・目的格（me, her, them）の形を区別して覚える必要がある。【関連知識】主格・所有格・目的格の対応：I-my-me、he-his-him、she-her-her、they-their-them。`,
    pitfall: 'I know she.のように目的語の位置に主格を使わない。',
    memoryTip: '「主格→所有格→目的格」の順に「I-my-me」のように声に出して唱えて覚える。',
  },
  {
    id: 'chugaku2026_eigo_035',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ do / you / what / like / sports ]?`,
    answer: 'What sports do you like?',
    hint: 'What+名詞（sports）を文頭に置き、その後ろに疑問文の語順(do you like)を続ける。',
    explanation: `【出題意図】「疑問詞+名詞」の疑問文の語順を問う。【解説】「どんなスポーツが好きですか」はWhat sports（どんなスポーツ）を文頭にまとめ、その後ろにdo you likeという一般動詞の疑問文の語順を続ける。【注意点】What sportsのように疑問詞と名詞をひとまとまりにして文頭に置く点に注意。【関連知識】What time（何時に）、What color（何色）、What subject（何の教科）なども同じパターン。`,
    pitfall: 'Do you like what sports?のように疑問詞を文の途中に置かない。',
    memoryTip: '「疑問詞+名詞」はセットで文の一番前に置くと覚える。',
  },
  {
    id: 'chugaku2026_eigo_036',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ is / your / when / birthday ]?`,
    answer: 'When is your birthday?',
    hint: '疑問詞Whenを文頭に置き、be動詞isを主語your birthdayの前に出す。',
    explanation: `【出題意図】be動詞を使った疑問詞疑問文の語順を問う。【解説】「あなたの誕生日はいつですか」はWhen（いつ）を文頭に置き、be動詞isを主語your birthdayの前に出してWhen is your birthday?とする。【注意点】be動詞の疑問文は主語の前にbe動詞を出すだけでよい（doやdoesは不要）。【関連知識】Whereやwho、whatなど他の疑問詞を使うときも同じ語順（疑問詞+be動詞+主語）になる。`,
    pitfall: 'When your birthday is?のように語順を崩さない。be動詞を主語の前に出す。',
    memoryTip: '「疑問詞+be動詞+主語」の順番を声に出して確認する。',
  },
  {
    id: 'chugaku2026_eigo_037',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ to / every / goes / school / she / day ].`,
    answer: 'She goes to school every day.',
    hint: '主語+動詞+場所（to school）+頻度を表す語句（every day）の順。',
    explanation: `【出題意図】英語の基本的な語順（主語→動詞→場所→時）を問う。【解説】英語は「主語＋動詞＋（目的語）＋場所＋時」の順が基本。She（主語）goes（動詞、3単現のs）to school（場所）every day（頻度）の順に並べる。【注意点】主語sheに対して動詞はgoesと3単現のsを忘れないこと。【関連知識】場所と時の副詞（句）がどちらもある場合、通常「場所→時」の順に置く。`,
    pitfall: 'She goes every day to school.のように場所と時の順序を逆にしない。',
    memoryTip: '「主語→動詞→場所→時」の順番を英語の基本文型として覚える。',
  },
  {
    id: 'chugaku2026_eigo_038',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: Hello. This is Mike. (　)
B: Sorry, she's out now.

ア. May I speak to Emily, please?
イ. What is your name?
ウ. How are you?`,
    answer: 'ア. May I speak to Emily, please?',
    hint: '電話でエミリーと話したいときの定型表現を選ぶ。',
    explanation: `【出題意図】電話での基本的な会話表現を問う。【解説】BがSorry, she's out now.（すみません、彼女は今外出しています）と答えているので、Aはエミリーと話したいと伝えたはず。May I speak to Emily, please?（エミリーさんをお願いできますか）が最も自然。【注意点】電話の会話では「〜とお話しできますか」という定型表現May I speak to 〜, please?がよく使われる。【関連知識】電話に出るときの表現：Speaking.（私です）、Hold on, please.（少々お待ちください）。`,
    pitfall: 'イ・ウは電話の流れに合わない。返答（she\'s out now）から逆算して文脈を確認する。',
    memoryTip: '「May I speak to 〜, please?」を電話の決まり文句として丸ごと覚える。',
  },
  {
    id: 'chugaku2026_eigo_039',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: Excuse me. (　)
B: Sure. Go straight and turn left at the corner.

ア. How is the weather?
イ. Could you tell me the way to the station?
ウ. What time is it now?`,
    answer: 'イ. Could you tell me the way to the station?',
    hint: '道案内をしてくれる返答（Go straight and turn left）につながる質問を選ぶ。',
    explanation: `【出題意図】道案内の場面での定型表現を問う。【解説】BがGo straight and turn left at the corner.（まっすぐ行って角を左に曲がってください）と道順を説明しているので、Aは道を尋ねたはず。Could you tell me the way to the station?（駅までの道を教えていただけますか）が最も自然。【注意点】Excuse me.は見知らぬ人に話しかけるときの定型表現。【関連知識】道案内の表現：Go straight.（まっすぐ行く）、Turn right/left.（右/左に曲がる）、It's on your right.（右手にあります）。`,
    pitfall: 'ア・ウは道案内の返答につながらない。返答の内容から質問を逆算する。',
    memoryTip: '「Could you tell me the way to 〜?」を道を尋ねる決まり文句として覚える。',
  },
  {
    id: 'chugaku2026_eigo_040',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: (　)
B: Yes. I'm looking for a T-shirt.

ア. May I help you?
イ. How much is it?
ウ. Do you like it?`,
    answer: 'ア. May I help you?',
    hint: '店員が客に声をかける場面の定型表現を選ぶ。',
    explanation: `【出題意図】買い物の場面での店員と客の定型的なやり取りを問う。【解説】Bが「はい、Tシャツを探しています」と答えているので、Aは店員として声をかけたはず。May I help you?（いらっしゃいませ／何かお探しですか）が最も自然な導入表現。【注意点】May I help you?は店員が客に声をかける代表的な決まり文句。【関連知識】買い物の表現：I'm just looking, thank you.（見ているだけです）、Can I try this on?（試着してもいいですか）。`,
    pitfall: 'イ・ウは会話の最初の質問としては不自然。Bの返答（探し物を伝えている）から判断する。',
    memoryTip: '「May I help you?」＝店員の決まり文句として覚える。',
  },
  {
    id: 'chugaku2026_eigo_041',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な前置詞を入れなさい。

① I go to school (　) bus.（バスで学校に行く）
② She cut the paper (　) scissors.（はさみで紙を切った）
③ This present is (　) you.（これはあなたのためのプレゼントです）`,
    answer: '① by　② with　③ for',
    hint: '交通手段→by、道具→with、〜のために→for。',
    explanation: `【出題意図】前置詞by（手段）・with（道具）・for（〜のために）の使い分けを問う。【解説】①交通手段を表すのでby bus。②道具を使って何かをするのでwith scissors。③「〜のために」という目的を表すのでfor you。【注意点】交通手段のbyの後ろにはtheや冠詞をつけない（by bus, by train, by car。ただしby footではなくon footという例外もある）。【関連知識】歩いて行く場合はon footという特別な表現を使う。`,
    pitfall: 'by footとは言わない。「歩いて」はon footという決まった表現を使う。',
    memoryTip: '「交通手段→by」「道具→with」「〜のために→for」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_042',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように、（　）内の語を適切な位置に入れて英文を完成させなさい。

彼女はいつも朝食を食べる。
She (　) eats breakfast. (always)`,
    answer: 'She always eats breakfast.',
    hint: '頻度を表す副詞（always, usually, sometimes, neverなど）は一般動詞の前、be動詞の後ろに置く。',
    explanation: `【出題意図】頻度副詞（always/usually/sometimes/neverなど）の位置を問う。【解説】頻度副詞は一般動詞の前に置くのが基本ルール。She always eats breakfast.となる。【注意点】be動詞の文では頻度副詞はbe動詞の後ろに置く（She is always busy.）。この違いを混同しないこと。【関連知識】頻度が高い順：always（いつも）＞usually（たいてい）＞often（よく）＞sometimes（時々）＞never（決して〜ない）。`,
    pitfall: 'She eats always breakfast.のように一般動詞の後ろに置かない。一般動詞の前が基本位置。',
    memoryTip: '「一般動詞の前、be動詞の後ろ」と頻度副詞の位置をセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_043',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形容詞を選びなさい。

① You look (　) today.（今日、あなたは幸せそうに見える）
  ア. happy　イ. happily
② That sounds (　).（それは面白そうに聞こえる）
  ア. interesting　イ. interestingly`,
    answer: '① ア(happy)　② ア(interesting)',
    hint: 'look/soundの後ろには形容詞を置く（副詞は使わない）。',
    explanation: `【出題意図】知覚動詞look/sound+形容詞の形を問う。【解説】look（〜に見える）、sound（〜に聞こえる）の後ろには形容詞を置く。①You look happy.（幸せそうに見える）。②That sounds interesting.（それは面白そうに聞こえる）。【注意点】副詞（happily/interestingly）を置くのは誤り。主語の状態・様子を説明するのは形容詞の役割。【関連知識】同じ仲間の動詞：feel（〜と感じる）、taste（〜の味がする）、smell（〜のにおいがする）もすべて後ろに形容詞をとる。`,
    pitfall: 'You look happily.のように副詞を置かない。look/soundの後ろは形容詞。',
    memoryTip: '「look/sound/feel/taste/smell+形容詞」の仲間をまとめて覚える。',
  },
  {
    id: 'chugaku2026_eigo_044',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ me / gave / a / book / she ].`,
    answer: 'She gave me a book.',
    hint: 'give+人+物の語順（give A B＝AにBをあげる）。',
    explanation: `【出題意図】give型動詞（人+物を続けて置く文型）の語順を問う。【解説】「彼女は私に本をくれた」はShe gave me a book.の語順になる。giveの後ろに「人（me）」→「物（a book）」の順に置く。【注意点】give A to B（BにAをあげる）という言い換えも可能：She gave a book to me.この場合は物→toが必要になる。【関連知識】同じ文型をとる動詞：show（見せる）、tell（話す）、teach（教える）、send（送る）、buy（買う。ただしbuyはfor B）。`,
    pitfall: 'She gave a book me.のように「人」と「物」の順序を逆にしない。',
    memoryTip: '「give+人+物」の語順を「あげる相手が先、あげる物が後」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_045',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

I (　) (　) (　) visit my grandmother next week.`,
    answer: 'am going to',
    hint: '未来の予定を表すbe going to+動詞の原形。',
    explanation: `【出題意図】未来を表すbe going to構文を問う。【解説】「来週祖母を訪ねるつもりだ」という予定を表すのでam going to visitとなる。be going to+動詞の原形で「〜する予定だ・〜するつもりだ」という意味になる。【注意点】be動詞は主語に合わせて変える（I am going to〜、She is going to〜、They are going to〜）。【関連知識】next week、tomorrow、this weekendなど未来を表す語句と一緒によく使われる。`,
    pitfall: 'I going to visitのようにbe動詞（am）を忘れない。',
    memoryTip: '「be動詞+going to+動詞の原形」の3点セットで未来を表すと覚える。',
  },
  {
    id: 'chugaku2026_eigo_046',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

I think it (　) rain tomorrow.`,
    answer: 'will',
    hint: '未来の予測にはwill+動詞の原形を使う。',
    explanation: `【出題意図】未来を表す助動詞willを問う。【解説】「明日は雨が降ると思う」という未来の予測を表すのでwill rainとなる。will+動詞の原形で「〜だろう」という予測や、その場で決めた意志を表す。【注意点】willの後ろは必ず動詞の原形。3単現のsはつけない（It will rains.は誤り）。【関連知識】be going toは「前から決まっていた予定」、willは「その場での判断・予測」というニュアンスの違いがある。`,
    pitfall: 'It will rains tomorrow.のようにwillの後にsをつけない。',
    memoryTip: '「willの後ろは動詞の原形」とcanなどの助動詞と同じルールで覚える。',
  },
  {
    id: 'chugaku2026_eigo_047',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語句を入れなさい。

① (　) (　) is it today? — It's Monday.
② (　) (　) do you like? — I like blue.`,
    answer: '① What day　② What color',
    hint: '「何曜日」はWhat day、「何色」はWhat color。',
    explanation: `【出題意図】「疑問詞What+名詞」の組み合わせ表現を問う。【解説】①「今日は何曜日ですか」はWhat day is it today?。②「何色が好きですか」はWhat color do you like?。Whatの後ろに具体的な名詞（day, color, timeなど）を置いて、より限定した質問を作ることができる。【注意点】What day is it today?は曜日、What's the date today?は日付を尋ねる表現で意味が異なるので区別する。【関連知識】What time（何時）、What subject（何の教科）、What sport（何のスポーツ）なども同じパターン。`,
    pitfall: 'What is it today?だけだと「今日は何ですか」という意味になり曜日を尋ねる表現として不十分。dayを補う。',
    memoryTip: '「What+名詞」で質問をより具体的にできると覚える。',
  },
  {
    id: 'chugaku2026_eigo_048',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように英語で書きなさい。

5月5日`,
    answer: 'May 5th (May fifth)',
    hint: '日付は「月+序数」の順で表す。',
    explanation: `【出題意図】日付の英語表現（月+序数）を問う。【解説】日付は「月の名前+序数（数字にthをつけた形、または英単語）」で表す。5月5日はMay 5th（May fifthと読む）。【注意点】5thはfifthと読む（数字の5をそのままfiveと読まない）点に注意。【関連知識】日付の書き方は他にthe 5th of Mayという言い方もある。誕生日を尋ねる表現：When is your birthday?`,
    pitfall: 'May fiveと基数のまま読まない。日付は序数で読む。',
    memoryTip: '「日付は必ず序数で読む」と覚える（1st, 2nd, 3rd, 4th…）。',
  },
  {
    id: 'chugaku2026_eigo_049',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

I have two sisters and one brother. My brother is younger than me. My sisters are older than me.

質問：この人は本人を含めて何人の兄弟姉妹（自分を含む子ども）がいますか。また、自分より年上なのは兄弟姉妹の誰ですか。`,
    answer: '子どもは本人を含め4人（本人・姉2人・弟1人）。年上なのは2人の姉。',
    hint: 'two sisters（姉か妹2人）、one brother（兄か弟1人）、youngerとolderの意味を確認する。',
    explanation: `【出題意図】家族に関する基本語彙と比較級（younger/older）を使った短文の読解力を問う。【解説】本文から「姉妹が2人、兄弟が1人いる」ことがわかる。「My brother is younger than me.」（兄弟は私より年下）なので、この兄弟は弟。「My sisters are older than me.」（姉妹たちは私より年上）なので、2人とも姉であるとわかる。【注意点】英語のsister/brotherには「姉・妹」「兄・弟」の年齢による区別がなく、youngerやolderという比較級で年齢関係を判断する必要がある。【関連知識】家族語彙：parents（両親）、grandparents（祖父母）、cousin（いとこ）、aunt（おば）、uncle（おじ）。`,
    pitfall: 'sisterを常に「妹」、brotherを常に「兄」と決めつけない。年齢はyounger/olderの情報から判断する。',
    memoryTip: '「sister/brotherだけでは年齢はわからない。youngerかolderをチェックする」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_050',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

I go to school at eight every morning. My first class is math, and my favorite subject is science. After school, I play basketball with my friends.

質問：この人が学校が終わった後にすることは何ですか。`,
    answer: '友達とバスケットボールをすること。',
    hint: 'After school（放課後）の後の文に注目する。',
    explanation: `【出題意図】学校生活に関する基本語彙と時間の流れを追う読解力を問う。【解説】「After school, I play basketball with my friends.」（放課後、友達とバスケットボールをする）とあるので、答えは「友達とバスケットボールをすること」。【注意点】favorite subject（一番好きな教科）とfirst class（1時間目の授業）を混同しない。1時間目はmath（算数・数学）、一番好きな教科はscience（理科）である。【関連知識】学校生活語彙：classmate（クラスメイト）、homeroom（ホームルーム）、club activity（クラブ活動）。`,
    pitfall: '「1時間目の授業」と「好きな教科」を取り違えない。本文の情報を正確に区別する。',
    memoryTip: 'After school（放課後）の後ろの文を探すと答えが見つかりやすい。',
  },
  {
    id: 'chugaku2026_eigo_051',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な英語を入れなさい。

① 犬 →(　)
② 象 →(　)
③ 黄色 →(　)
④ 紫色 →(　)`,
    answer: '① dog　② elephant　③ yellow　④ purple',
    hint: '基本的な動物・色の単語を確認する。',
    explanation: `【出題意図】動物・色に関する基本語彙を問う。【解説】①dog=犬。②elephant=象。③yellow=黄色。④purple=紫色。中学受験の英語入試では基本的な身の回りの単語（動物・色・食べ物など）が頻出。【注意点】elephantのようなつづりが長い単語は繰り返し書いて覚えることが大切。【関連知識】その他の動物語彙：cat（猫）、rabbit（うさぎ）、lion（ライオン）、monkey（猿）。色語彙：orange（オレンジ色）、pink（ピンク色）、brown（茶色）。`,
    pitfall: 'purpleとpink、violetを混同しないよう、それぞれの色を正確に覚える。',
    memoryTip: '単語カードを作って、動物・色ごとにグループ分けして覚えると効率的。',
  },
  {
    id: 'chugaku2026_eigo_052',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の職業を表す英語を選びなさい。

① 医者
② 教師
③ 料理人

ア. teacher　イ. doctor　ウ. cook`,
    answer: '① イ(doctor)　② ア(teacher)　③ ウ(cook)',
    hint: '基本的な職業名の単語を確認する。',
    explanation: `【出題意図】職業を表す基本語彙を問う。【解説】①doctor=医者。②teacher=教師。③cook=料理人。「将来何になりたいか」を答える英作文でもよく使われる基本単語。【注意点】職業を尋ねる表現：What do you want to be in the future?（将来何になりたいですか）に対してI want to be a doctor.のように答える。【関連知識】その他の職業語彙：nurse（看護師）、police officer（警察官）、firefighter（消防士）、farmer（農家）。`,
    pitfall: 'cookとchef（シェフ）を混同しないよう、両方の単語を知っておくとよい。',
    memoryTip: '「将来なりたい職業」を英語で言えるように、自分の夢の職業を1つ覚えておくと便利。',
  },
  {
    id: 'chugaku2026_eigo_053',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

How is the weather today? — It's (　).（今日は晴れています）`,
    answer: 'sunny',
    hint: '天気を表す形容詞（sunny, rainy, cloudy, snowyなど）を確認する。',
    explanation: `【出題意図】天気を表す基本語彙・表現を問う。【解説】天気を尋ねる表現How is the weather today?（今日の天気はどうですか）に対して、It's sunny.（晴れています）のようにIt is+天気の形容詞で答える。【注意点】天気の主語は必ずIt（天気のit）を使う。I am sunnyのように人を主語にしない。【関連知識】その他の天気語彙：rainy（雨の）、cloudy（曇りの）、snowy（雪の）、windy（風が強い）、hot（暑い）、cold（寒い）。`,
    pitfall: 'I am sunny today.のように人を主語にしない。天気の話には必ずItを主語にする。',
    memoryTip: '天気の文は「It is+天気」の形と覚え、Itを主語にする習慣をつける。',
  },
  {
    id: 'chugaku2026_eigo_054',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① How (　) are you? — I'm twelve years old.
② My birthday is (　) December.`,
    answer: '① old　② in',
    hint: '年齢を尋ねるHow old、月を表す前置詞in。',
    explanation: `【出題意図】年齢・誕生日に関する基本表現を問う。【解説】①年齢を尋ねる表現はHow old are you?（あなたは何歳ですか）。②誕生日の月を答えるときはin+月名（in December）。【注意点】年齢を答えるときはI'm twelve years old.のようにyears oldをつける（省略してI'm twelve.だけでもよい）。【関連知識】誕生日を尋ねる表現：When is your birthday?（あなたの誕生日はいつですか）に対してMy birthday is December 25th.のように答える。`,
    pitfall: 'How age are you?のようにHow oldの代わりにHow ageと言わない。',
    memoryTip: "「How old are you?」「I'm 〜 years old.」をセットの決まり文句として覚える。",
  },
  {
    id: 'chugaku2026_eigo_055',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に答えなさい。

Hi, my name is Yuki. I am eleven years old. I live in Osaka with my family. I like reading books and playing the piano. My favorite subject is English.

① What is her favorite subject?
② 彼女が好きなことを2つ日本語で答えなさい。`,
    answer: '① Her favorite subject is English.　② 本を読むこと、ピアノを弾くこと。',
    hint: '本文中のI like〜の部分に注目する。',
    explanation: `【出題意図】自己紹介文の基本語彙・構文の読解力を問う。【解説】①「My favorite subject is English.」からHer favorite subject is English.と答える。②「I like reading books and playing the piano.」から「本を読むこと」と「ピアノを弾くこと」の2つが読み取れる。【注意点】質問の主語がI（本人）からHe/Sheに変わる点に注意して答える。【関連知識】自己紹介の基本表現：My name is 〜.、I am 〜 years old.、I live in 〜.、I like 〜ing.`,
    pitfall: '質問文ではsheに変えて答える必要があるのに、本文のままIで答えないよう注意する。',
    memoryTip: '自己紹介文の型「name→age→住んでいる場所→好きなこと→得意教科」を意識して読む。',
  },
  {
    id: 'chugaku2026_eigo_056',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

I get up at six thirty every morning. I have breakfast at seven. Then I go to school at eight. I usually study English and math at home in the evening.

① この人が朝食を食べるのは何時ですか。
② この人が夕方に家でしていることは何ですか。`,
    answer: '① 7時（seven／7時）　② 英語と数学（算数）の勉強。',
    hint: '時刻表現（at six thirty, at seven, at eight）とusuallyの後ろの内容に注目する。',
    explanation: `【出題意図】日課を説明する文章の時系列の読み取りを問う。【解説】①「I have breakfast at seven.」から朝食は7時。②「I usually study English and math at home in the evening.」から夕方は英語と数学を勉強するとわかる。【注意点】get up（起きる）、have breakfast（朝食を食べる）、go to school（学校に行く）という一連の動作の順序と時刻を正確に対応させて読む。【関連知識】日課を表す語彙：wake up（目が覚める）、take a bath（お風呂に入る）、go to bed（寝る）。`,
    pitfall: '起きる時刻（6時30分）と朝食の時刻（7時）を混同しない。',
    memoryTip: '時刻を表す語句（at+時刻）に印をつけながら読むと情報を整理しやすい。',
  },
  {
    id: 'chugaku2026_eigo_057',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

This is a picture of my family. My father is a teacher, and my mother is a nurse. I have one younger sister. She is eight years old and likes drawing pictures.

① 父親の職業は何ですか。
② 妹について、わかることを2つ答えなさい。`,
    answer: '① 教師（teacher）。　② 8歳であること／絵を描くことが好きなこと。',
    hint: 'My father is〜、My motherの職業、She is〜の文に注目する。',
    explanation: `【出題意図】家族紹介文から職業・年齢・好みなどの情報を正確に読み取る力を問う。【解説】①「My father is a teacher」から父親は教師。②「She is eight years old and likes drawing pictures.」から妹は8歳で、絵を描くことが好きだとわかる。【注意点】fatherとmotherの職業を取り違えないこと（父は教師、母は看護師）。【関連知識】家族紹介の表現：This is a picture of my family.（これは私の家族の写真です）、I have 〜 brother(s)/sister(s).`,
    pitfall: '父親と母親の職業（teacher/nurse）を逆にしないよう、本文を正確に対応させて読む。',
    memoryTip: '誰について書かれた文か（father/mother/sister）を意識しながら1文ずつ確認する。',
  },
  {
    id: 'chugaku2026_eigo_058',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ visited / last / we / Kyoto / summer ].`,
    answer: 'We visited Kyoto last summer.',
    hint: '主語we+過去形の動詞visited+場所Kyoto+時last summerの順。',
    explanation: `【出題意図】過去形の文を「主語→動詞→目的語→時」の語順で正しく並べる力を問う。【解説】「私たちはこの前の夏、京都を訪れた」はWe（主語）visited（過去形の動詞）Kyoto（目的語）last summer（時を表す語句）の順に並べる。【注意点】時を表す語句（last summer, yesterdayなど）は基本的に文の最後に置く。【関連知識】visitは他動詞なのでtoやinなどの前置詞をつけずに直接目的語（Kyoto）を続ける点にも注意（visit to Kyotoは誤り）。`,
    pitfall: 'We visited to Kyoto last summer.のようにvisitの後ろにtoを入れない。',
    memoryTip: '「主語→動詞（過去形）→目的語→時」の順番で英文を組み立てる練習をする。',
  },
  {
    id: 'chugaku2026_eigo_059',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ you / did / where / last / go / weekend ]?`,
    answer: 'Where did you go last weekend?',
    hint: '疑問詞Whereを文頭に置き、did you goという過去の疑問文の語順を続ける。',
    explanation: `【出題意図】過去形の疑問詞疑問文の語順を問う。【解説】「先週末どこへ行きましたか」はWhere（疑問詞）did you go（過去の疑問文の語順）last weekend（時）の順に並べる。didを使うのでgoは原形のまま使う点がポイント。【注意点】Where did you went?のようにdidとwentの過去形を両方使わないこと。【関連知識】答え方の例：I went to the zoo.（動物園に行きました）のように過去形で答える。`,
    pitfall: 'Where did you went last weekend?は誤り。didを使ったら動詞は原形。',
    memoryTip: '「疑問詞+did+主語+動詞の原形」の語順を声に出して練習する。',
  },
  {
    id: 'chugaku2026_eigo_060',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を参考に、自分の自己紹介文を英語で3文以上書きなさい。（名前・年齢・好きなことを含めること）

（例）名前はハナ、11歳、好きなことは絵を描くこと。`,
    answer: '（解答例）My name is Hana. I am eleven years old. I like drawing pictures.',
    hint: 'My name is〜.（名前）、I am 〜 years old.（年齢）、I like 〜.（好きなこと）の3文構成で書く。',
    explanation: `【出題意図】自己紹介の基本表現（名前・年齢・好きなこと）を使った英作文力を問う。【解説】自己紹介は「My name is 〜.」（名前）「I am 〜 years old.」（年齢）「I like 〜.」（好きなこと）の3文で基本的な内容を伝えられる。解答例：My name is Hana. I am eleven years old. I like drawing pictures.（私の名前はハナです。11歳です。絵を描くことが好きです。）【注意点】I likeの後ろに動詞を続けるときはing形にする（drawing）。年齢はyears oldを忘れずにつける。【関連知識】自己紹介をさらに広げる表現：I live in 〜.（〜に住んでいる）、My favorite subject is 〜.（好きな教科は〜）、I want to be a 〜.（将来〜になりたい）。`,
    pitfall: 'I like draw pictures.のように動詞の原形のまま置かない。ing形にする。',
    memoryTip: '「名前→年齢→好きなこと」の3点セットで自己紹介文を組み立てる型を覚える。',
  },
];
