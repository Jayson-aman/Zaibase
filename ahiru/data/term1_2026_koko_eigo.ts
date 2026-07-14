import type { Question } from './questions';

export const term1_2026KokoEigo: Question[] = [
  // ============================================================
  // Q001–Q012: 基礎（difficulty: 'basic'）— 中1 be動詞・一般動詞・疑問詞・現在進行形
  // ============================================================
  {
    id: 'term1_2026_koko_eigo_001',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切なbe動詞を入れなさい。

① I (　) a junior high school student.
② She (　) my classmate.
③ We (　) good friends.`,
    answer: '① am　② is　③ are',
    hint: '主語によってbe動詞を使い分ける。I→am、3人称単数（She等）→is、複数（We等）→are。',
    explanation: `【出題意図】be動詞（am/is/are）を主語に応じて正しく使い分けられるかを問う基本問題。【解説】①主語がI（私）のときはamを使う。②主語She（彼女）は3人称単数なのでis。③主語We（私たち）は複数なのでare。be動詞は主語の人称・数によって形が変わる。【注意点】areをisにする、amをisにするなど、主語とbe動詞の対応を間違えないようにする。特にWeやYouを複数として正しく判断する。【関連知識】be動詞の基本対応：I→am、You/We/They（複数）→are、He/She/It（3人称単数）→is。`,
    pitfall: '③のWeをisと組み合わせないこと。Weは複数なのでare。',
    memoryTip: 'I am, You are, He/She/It is, We/You/They are、と口ずさんで覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_002',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の対話が成り立つように（　）に適切な語を入れなさい。

A: (　) you free this afternoon?
B: Yes, I (　).（はい、暇です）`,
    answer: '① Are　② am',
    hint: 'be動詞の疑問文はbe動詞を主語の前に出す。Areで聞かれたらamで答える。',
    explanation: `【出題意図】be動詞の疑問文の作り方と、それに対する応答の仕方を問う。【解説】「あなたは暇ですか」とAreで尋ねているので、Areを主語youの前に置く。答えるBは自分（I）について答えるので、Yes, I am.と答える。【注意点】Are you〜?と聞かれた場合、答えるときはYes, I am. / No, I'm not.のようにIを主語にして答える（youのままにしない）。【関連知識】be動詞の疑問文：Am I〜? / Are you〜? / Is he/she/it〜? / Are we/you/they〜?と主語に応じて使い分ける。`,
    pitfall: '応答をYes, you are.としないこと。答えるときは自分（I）を主語にする。',
    memoryTip: '聞かれた主語がyouなら、答えはIで返す（Are you〜?→Yes, I am.）。',
  },
  {
    id: 'term1_2026_koko_eigo_003',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を否定文に書き換えなさい。

① He is a soccer fan.
② They are from Osaka.`,
    answer: `① He is not (isn't) a soccer fan.
② They are not (aren't) from Osaka.`,
    hint: 'be動詞の否定文はbe動詞の直後にnotを置く。',
    explanation: `【出題意図】be動詞の否定文（be+not）の作り方を問う基本問題。【解説】①「彼はサッカーファンではない」→isの直後にnotを置きis not（短縮形isn't）。②「彼らは大阪出身ではない」→areの直後にnotを置きare not（短縮形aren't）。be動詞の否定文はbe動詞の位置を変えず、直後にnotを加えるだけでよい。【注意点】一般動詞の否定文（don't/doesn't+動詞原形）と混同しないこと。be動詞の文にdon'tは使わない。【関連知識】be動詞の否定の短縮形：isn't、aren't。am notには短縮形がなく、I'm notを使う。`,
    pitfall: "①をHe don't is a soccer fan.のようにdon'tを使わないこと。be動詞の否定はbe+notのみ。",
    memoryTip: 'be動詞の否定はbe動詞のすぐ後ろにnotを置くだけ、と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_004',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）内の動詞を適切な形にしなさい。

① My father (work) at a hospital.（父は病院で働いています）
② My sister (study) English every day.（姉は毎日英語を勉強します）
③ Ken (go) to school by bike.（健は自転車で学校に行きます）`,
    answer: '① works　② studies　③ goes',
    hint: '主語が3人称単数（He/She/It等）で現在の文なら、動詞の語尾にs/esを付ける。',
    explanation: `【出題意図】一般動詞の3人称単数現在形（3単現のs）の作り方を問う基本問題。【解説】①主語My father（3人称単数）なのでworkにsを付けてworks。②語尾が子音字+yのstudyはyをiに変えてesを付けstudies。③語尾がoのgoはesを付けてgoes。【注意点】3単現のsのつけ方は、原則sを付けるだけだが、study→studies、go→goes、watch→watchesなど語尾によって変化のルールが異なる。【関連知識】3単現の3つのパターン：①そのままs（work→works）②子音字+y→yをiに変えてes（study→studies）③s/x/ch/sh/o+es（watch→watches、go→goes）。`,
    pitfall: '②をstudysとしないこと。子音字+yの語はyをiに変えてesを付ける。',
    memoryTip: '主語が「1人だけ・1つだけ（3人称単数）」の現在の文には動詞にsが付くと覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_005',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ play / you / do / tennis ] on Sundays?
  （あなたは日曜日にテニスをしますか）

② [ does / play / he / the piano ]?
  （彼はピアノを弾きますか）`,
    answer: `① Do you play tennis on Sundays?
② Does he play the piano?`,
    hint: '一般動詞の疑問文は「Do/Does+主語+動詞の原形〜?」の語順。',
    explanation: `【出題意図】一般動詞の疑問文（Do/Does+主語+動詞原形）の語順を問う基本問題。【解説】①主語youは3人称単数ではないのでDoを使い、Do you play tennis on Sundays?となる。②主語he（3人称単数）のときはDoesを使い、動詞は原形playに戻す（Does he plays〜とはしない）。【注意点】Doesを使う疑問文では、動詞に3単現のsを付けない（sはDoesの中にすでに含まれていると考える）。【関連知識】答え方はYes, I do. / No, I don't.（①）、Yes, he does. / No, he doesn't.（②）となる。`,
    pitfall: '②をDoes he plays the piano?としないこと。Doesを使ったら動詞は原形に戻す。',
    memoryTip: 'Do/Doesを使ったら、動詞は必ず原形（sなし）にすると覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_006',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を否定文に書き換えなさい。

① I like natto.
② He plays the guitar every weekend.`,
    answer: `① I don't like natto.
② He doesn't play the guitar every weekend.`,
    hint: '一般動詞の否定文はdo not/does notを動詞の前に置き、動詞は原形にする。',
    explanation: `【出題意図】一般動詞の否定文（don't/doesn't+動詞原形）の作り方を問う。【解説】①主語Iはdon'tを使い、I don't like natto.。②主語He（3人称単数）はdoesn'tを使い、動詞playは原形のままplayにする（doesn't plays としない）。【注意点】doesn'tを使う否定文では、動詞の3単現のsを取って原形に戻すのを忘れないこと。【関連知識】be動詞の否定（is not/are not）と一般動詞の否定（don't/doesn't+原形）の違いをしっかり区別する。`,
    pitfall: '②をHe doesn\'t plays the guitar.としないこと。doesn\'tの後は動詞の原形。',
    memoryTip: 'doesn\'tを使ったら動詞のsを取る、don\'tを使ったら動詞はそのまま原形、と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_007',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の会話の（　）に適切な疑問詞を選びなさい。

A: (　) is this in English?
B: It's a pencil case.

ア. What　イ. Who　ウ. Where`,
    answer: 'ア(What)',
    hint: '「これは英語で何ですか」と物の名前を尋ねる疑問詞はWhat。',
    explanation: `【出題意図】疑問詞What（何）の基本用法を問う。【解説】Bが「It's a pencil case.（これは筆箱です）」と物の名前を答えているので、Aは「これは何ですか」とものの名前を尋ねている。物を尋ねる疑問詞はWhat。Whoは人、Whereは場所を尋ねる疑問詞なので合わない。【注意点】What is this in English?は「これは英語で何と言いますか」という単語を尋ねる定番表現。【関連知識】疑問詞の基本：What（何）、Who（誰）、Where（どこ）、When（いつ）、Why（なぜ）、How（どのように）。`,
    pitfall: 'Whoを選ぶと「これは誰ですか」という意味になり、答えのpencil caseと矛盾する。',
    memoryTip: 'What is this?＝「これは何ですか」の定番表現として丸ごと覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_008',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な疑問詞を入れなさい。

① (　) is that tall boy? — He is my brother.（あの背の高い男の子は誰ですか）
② (　) bag is this? — It's mine.（これは誰のかばんですか）`,
    answer: '① Who　② Whose',
    hint: '人物そのものを尋ねる→Who、「誰の〜」と所有者を尋ねる→Whose+名詞。',
    explanation: `【出題意図】人を尋ねる疑問詞Whoと、所有者を尋ねる疑問詞Whoseの使い分けを問う。【解説】①「あの背の高い男の子は誰ですか」と人物そのものを尋ねているのでWho。②「これは誰のかばんですか」と「誰の〜」の形で所有者を尋ねているのでWhose+名詞（Whose bag）。【注意点】WhoとWhoseは似ているが、Whoは「誰か」そのもの、Whoseは「誰の〜」と後ろに名詞を伴う点が異なる。【関連知識】Whoseは所有者を答える文でmine（私のもの）、his（彼のもの）などの所有代名詞で答えることが多い。`,
    pitfall: '②をWhoにしないこと。Who bagとは言えず、「誰の」の意味にはWhoseが必要。',
    memoryTip: 'Whose＋名詞＝「誰の〜」、Whoは単独で「誰」と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_009',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な疑問詞を入れなさい。

① (　) do you have lunch? — At noon.（あなたはいつ昼食を食べますか）
② (　) is your bag? — It's under the desk.（あなたのかばんはどこにありますか）`,
    answer: '① When　② Where',
    hint: '時を尋ねる→When、場所を尋ねる→Where。答えの内容（At noon／under the desk）から判断する。',
    explanation: `【出題意図】時を尋ねるWhenと場所を尋ねるWhereの使い分けを問う。【解説】①答えが「At noon.（正午に）」という時を表すのでWhen（いつ）が適切。②答えが「under the desk（机の下に）」という場所を表すのでWhere（どこ）が適切。【注意点】疑問詞は必ず答えの内容と対応させて選ぶこと。時を答えているのにWhereを選ぶといった誤りに注意する。【関連知識】When→時（時間・曜日・季節など）、Where→場所（建物・方角・位置など）を答える。`,
    pitfall: '①をWhereにすると、At noon（時）という答えと噛み合わなくなる。',
    memoryTip: '答えの内容（時か場所か）から逆算して疑問詞を選ぶ習慣をつける。',
  },
  {
    id: 'term1_2026_koko_eigo_010',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① (　) books do you have?（あなたは本を何冊持っていますか）
② (　) money do you need?（あなたはお金がいくら必要ですか）`,
    answer: '① How many　② How much',
    hint: '数えられる名詞（books）にはHow many、数えられない名詞（money）にはHow much。',
    explanation: `【出題意図】数を尋ねるHow manyと、量を尋ねるHow muchの使い分けを問う。【解説】①booksは数えられる名詞（可算名詞）で複数形なのでHow many booksとなる。②moneyは数えられない名詞（不可算名詞）なのでHow much moneyとなる。【注意点】How many+複数名詞、How much+不可算名詞（単数扱い）というセットで覚える。moneyやwaterなどの不可算名詞にHow manyを使わないこと。【関連知識】How much〜?は値段を尋ねる用法（How much is this?＝これはいくらですか）としても頻出。`,
    pitfall: '②をHow many moneyとしないこと。moneyは不可算名詞なのでHow much。',
    memoryTip: '数えられる→How many+複数形、数えられない→How much、と名詞の種類で判断する。',
  },
  {
    id: 'term1_2026_koko_eigo_011',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）内の動詞を適切な形にしなさい。

① My brother (watch) TV now.（兄は今テレビを見ています）
② (　) you (do) your homework now? — Yes, I am.（あなたは今宿題をしていますか）`,
    answer: '① is watching　② Are, doing',
    hint: '現在進行形は「be動詞+動詞のing形」。「今」を表すnowが目印。',
    explanation: `【出題意図】現在進行形（be動詞+動詞のing形）の肯定文・疑問文の形を問う。【解説】①「今テレビを見ている」という進行中の動作なので、主語My brother（3人称単数）に合わせis watchingとする。②疑問文はbe動詞（Are）を主語youの前に出し、動詞はdoing（doのing形）にする。答えもYes, I am.と進行形の形で答える。【注意点】現在進行形の疑問文はbe動詞を主語の前に移動させ、一般動詞の疑問文のようにDo/Doesを使わない点に注意。【関連知識】現在進行形は「（今まさに）〜している最中だ」という一時的な動作を表す。`,
    pitfall: '②をDo you doingとしないこと。進行形の疑問文はDo/Doesではなくbe動詞を使う。',
    memoryTip: '現在進行形＝be動詞+動詞ing、疑問文はbe動詞を主語の前に出すだけと覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_012',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文の誤りを1か所指摘し、正しく直しなさい。

① I am knowing your sister very well.
② She is having two dogs at home.`,
    answer: `① am knowing → know（状態動詞knowは進行形にしない）
② is having → has（所有を表すhaveは進行形にしない）`,
    hint: 'know（知っている）やhave（持っている、所有）のような状態動詞は原則、進行形にしない。',
    explanation: `【出題意図】状態動詞（know、have、like、want等）は原則として進行形にしないという基本ルールを問う誤文訂正問題。【解説】①know（知っている）は「知っている状態」を表す状態動詞なので、進行形ではなく現在形knowを使う。②have（持っている、所有する）も所有の状態を表す状態動詞なので現在形hasを使う（3人称単数のためhasになる点にも注意）。【注意点】haveは「食べる」「過ごす」など動作の意味で使うときは進行形にできる（例：I am having lunch.＝食事をしている最中）が、「持っている」という所有の意味では進行形にしない。【関連知識】状態動詞の例：know, like, want, love, have（所有）, understand, believe。動作動詞の例：run, eat, study, watch。`,
    pitfall: '②のhaveを「食べる」の意味と混同しないこと。ここでは「（犬を）飼っている」という所有の意味。',
    memoryTip: '「今、変化なく続く状態」を表す動詞（know/have所有/like等）はing形にしないと覚える。',
  },

  // ============================================================
  // Q013–Q036: 標準（difficulty: 'standard'）— 中2 過去形・未来形・助動詞・比較
  // ============================================================
  {
    id: 'term1_2026_koko_eigo_013',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切なbe動詞の過去形を入れなさい。

① I (　) busy yesterday.（私は昨日忙しかった）
② They (　) at the park last Sunday.（彼らはこの前の日曜日、公園にいた）
③ It (　) sunny this morning.（今朝は晴れていた）`,
    answer: '① was　② were　③ was',
    hint: 'be動詞の過去形はwas（I/He/She/It等）とwere（You/We/They等）の2種類のみ。',
    explanation: `【出題意図】be動詞の過去形（was/were）の使い分けを問う。【解説】①主語I（単数）はwas。②主語They（複数）はwere。③主語It（単数）はwas。be動詞の過去形は現在形（am/is/are）と違い、was（単数）とwere（複数）の2種類だけになる。【注意点】amとisの過去形はどちらもwasになる点に注意（areの過去形がwere）。【関連知識】be動詞過去の疑問文はWas/Wereを主語の前に、否定文はwas not（wasn't）/were not（weren't）にする。`,
    pitfall: '②をwasにしないこと。Theyは複数なので過去形もwere。',
    memoryTip: 'am/is→was、are→were、と現在形からの対応で覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_014',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）内の動詞を過去形にしなさい。

① I (play) tennis with my friend yesterday.
② She (study) math for two hours last night.
③ We (stop) at the convenience store on the way home.`,
    answer: '① played　② studied　③ stopped',
    hint: '規則動詞の過去形は原則-edを付ける。子音字+yはyをiに変えてed、短母音+子音字1字は子音字を重ねてed。',
    explanation: `【出題意図】規則動詞の過去形（-ed）の作り方（基本形・y→ied・子音字重複）を問う。【解説】①playはそのままedを付けplayed。②語尾が子音字+yのstudyはyをiに変えてedを付けstudied。③stopは「短母音+子音字1字」で終わるので子音字pを重ねてstoppedとする。【注意点】stopのような1音節でアクセントのある短母音+子音字で終わる語は、子音字を重ねてから-edを付ける（例：plan→planned、stop→stopped）。【関連知識】規則動詞の-ed発音は[t]/[d]/[id]の3パターンがあり、played[d]、stopped[t]、wanted[id]のように発音も異なる。`,
    pitfall: '③をstopedとしないこと。子音字を重ねずにedを付けるのは誤り。',
    memoryTip: '基本はed、子音字+y→ied、短母音+子音字1つ→子音字を重ねてed、と3パターンを覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_015',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）内の動詞を過去形にしなさい。

① I (go) to Kyoto last month.
② She (see) a famous actor at the airport.
③ We (have) a great time at the festival.
④ He (buy) a new bike yesterday.`,
    answer: '① went　② saw　③ had　④ bought',
    hint: 'go, see, have, buyはすべて不規則動詞。それぞれの過去形を暗記しておく必要がある。',
    explanation: `【出題意図】頻出不規則動詞（go/see/have/buy）の過去形を正しく書けるかを問う。【解説】①go（行く）の過去形はwent。②see（見る）の過去形はsaw。③have（持つ・過ごす）の過去形はhad。④buy（買う）の過去形はbought。不規則動詞は-edを付けるルールが通用しないため、1語ずつ暗記する必要がある。【注意点】goed、seed、haved、buyedのように規則動詞のルールを当てはめないこと。【関連知識】中学校で必修の不規則動詞：go-went-gone、see-saw-seen、have-had-had、buy-bought-boughtなど、原形-過去形-過去分詞形をセットで覚えるとよい。`,
    pitfall: '①をgoedとしないこと。goは不規則動詞でwentという特別な形になる。',
    memoryTip: '不規則動詞は文単位・語呂合わせで繰り返し声に出して覚えるのが効果的。',
  },
  {
    id: 'term1_2026_koko_eigo_016',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を疑問文に書き換えなさい。

① You visited Nara last summer.
② She cooked dinner for her family.`,
    answer: `① Did you visit Nara last summer?
② Did she cook dinner for her family?`,
    hint: '一般動詞の過去の疑問文は「Did+主語+動詞の原形〜?」の語順。',
    explanation: `【出題意図】一般動詞過去形の疑問文（Did+主語+動詞原形）の作り方を問う。【解説】①visitedをDidと組み合わせるときは動詞を原形visitに戻し、Didを主語youの前に置く。②同様にcookedをcookに戻し、Didを主語sheの前に置く。【注意点】Didを使った疑問文では、主語が3人称単数（②のShe）であっても動詞は原形のままにする（cooksやcookedにしない）。【関連知識】答え方はYes, I did. / No, I didn't.のように、didを使って答える。`,
    pitfall: '②をDid she cooked〜としないこと。Didを使ったら動詞は原形に戻す。',
    memoryTip: 'Didを使ったら動詞は原形（過去形にもsも付けない）と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_017',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を否定文に書き換えなさい。

① I finished my homework before dinner.
② He came to school by bus this morning.`,
    answer: `① I didn't finish my homework before dinner.
② He didn't come to school by bus this morning.`,
    hint: `一般動詞過去の否定文は「主語+didn't+動詞の原形〜」の形。`,
    explanation: `【出題意図】一般動詞過去形の否定文（didn't+動詞原形）の作り方を問う。【解説】①finishedをdidn'tと組み合わせるときは動詞を原形finishに戻す。②同様にcameを原形comeに戻す（不規則動詞でも原形に戻すルールは同じ）。【注意点】不規則動詞（came等）であっても、didn'tを使う否定文では必ず原形に戻す点に注意する。【関連知識】didn't＝did not。didn't+動詞原形は、主語が何であっても形が変わらない（3単現のsも付かない）。`,
    pitfall: '②をdidn\'t camedのように過去形のまま使わないこと。didn\'tの後は必ず原形。',
    memoryTip: 'didn\'t（did not）の後ろは動詞の原形、と徹底して覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_018',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）内の動詞を適切な形にしなさい。

① I (read) a book when my mother called me.（母が電話をくれたとき、私は本を読んでいた）
② What (　) you (do) at seven last night?（昨夜7時、あなたは何をしていましたか）`,
    answer: '① was reading　② were, doing',
    hint: '過去のある時点で進行中だった動作は過去進行形（was/were+動詞ing）で表す。',
    explanation: `【出題意図】過去進行形（was/were+動詞のing形）の肯定文・疑問文の形を問う。【解説】①「母が電話をくれた（過去の一時点）とき、本を読んでいる最中だった」という意味なので過去進行形was readingを使う。②「昨夜7時に何をしていたか」という過去の一時点での動作を尋ねる疑問文なので、Whatの後にwere you doingと過去進行形の疑問文の形を続ける。【注意点】過去進行形は「過去のある時点で進行中だった動作」を表す。whenやat that timeなど、特定の過去の一時点を示す語句と相性がよい。【関連知識】過去形（〜した）と過去進行形（〜していた、していた最中）の違いを場面で使い分ける。`,
    pitfall: '①をI read a bookのまま（過去形のみ）にしないこと。「読んでいる最中」を表すには進行形が必要。',
    memoryTip: '過去進行形＝was/were+動詞ing＝「そのときまさに〜していた」とイメージする。',
  },
  {
    id: 'term1_2026_koko_eigo_019',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私は将来、医者になるでしょう。
  I (　) (　) a doctor in the future.
② 手伝ってくれますか。（その場での依頼）
  (　) you help me?`,
    answer: '① will be　② Will',
    hint: '「〜だろう」という単純な未来の予測・その場での判断はwillを使う。',
    explanation: `【出題意図】未来を表すwillの基本用法（予測・その場での依頼や決定）を問う。【解説】①「将来〜になるだろう」という単純な未来の予測はwill+動詞原形（will be）で表す。②「手伝ってくれますか」というその場での依頼はWill you〜?を使う。【注意点】willは「あらかじめ決まっていない、その場で決める・予測する」未来に使うのが基本。【関連知識】Will you〜?は依頼（〜してくれますか）の意味でもよく使われ、Can you〜?よりもやや丁寧な響きを持つ。`,
    pitfall: '①をI am doctorのように未来を表さない形にしないこと。in the future（将来）にはwillが必要。',
    memoryTip: 'will+動詞原形＝「（その場で決めた・予測する）〜だろう、〜するつもりだ」と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_020',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私たちは来月、京都を訪れる予定だ。（前もって決まっている予定）
  We (　) (　) (　) visit Kyoto next month.
② 空が曇っている。雨が降りそうだ。（目の前の証拠に基づく予測）
  Look at the sky. It (　) (　) (　) rain.`,
    answer: '① are going to　② is going to',
    hint: 'be going toは「前もって決まっている予定」や「目に見える根拠に基づく予測」を表す。',
    explanation: `【出題意図】be going toの基本用法（既に決まっている予定・根拠のある予測）を問う。【解説】①「来月訪れる予定」という前もって決まっている計画にはbe going toを使う（主語Weに合わせてare going to）。②「空を見て（曇っているという根拠から）雨が降りそう」という、目の前の証拠に基づく予測にもbe going toを使う（主語Itに合わせてis going to）。【注意点】willは「その場での決定・単純な予測」、be going toは「あらかじめ決まっている予定・根拠のある予測」という使い分けが基本。【関連知識】be going toの疑問文はbe動詞を主語の前に出す（Are you going to〜?）。`,
    pitfall: '②をwill rainにしても文法的には誤りではないが、Look at the sky（目に見える根拠）がある文脈ではbe going toがより自然。',
    memoryTip: 'be going to＝「もう決まっている予定」「目に見える証拠からの予測」とセットでイメージする。',
  },
  {
    id: 'term1_2026_koko_eigo_021',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文の誤りを1か所指摘し、正しく直しなさい。

① A: The phone is ringing. B: OK, I am going to answer it.
② I have already decided. I am going to study abroad next year.`,
    answer: `① I am going to answer it → I will answer it（その場での決定はwillを使う）
② 誤りなし（前もって決めた予定はbe going toで正しい）`,
    hint: '「今その場で決めた」ことはwill、「以前から決めていた予定」はbe going to。',
    explanation: `【出題意図】willとbe going toの使い分け（その場の決定か、既に決まっている予定か）を問う誤文訂正問題。【解説】①電話が鳴ったのを聞いて「今その場で」電話に出ることを決めているので、その場での決定を表すwill（I will answer it.）が適切。be going toは前もって決めていた予定に使うため、この場面には合わない。②「すでに決めている」と明言されている予定なので、be going toが正しく使われている。【注意点】will＝その場の思いつき・決定、be going to＝前もって計画していたこと、という区別を会話の流れから判断する。【関連知識】I think it will〜.のような単純な推測にもwillがよく使われる。`,
    pitfall: '①をそのままbe going toにしないこと。電話が鳴った瞬間の判断はwillで表すのが自然。',
    memoryTip: '「今決めた」→will、「前から決めていた」→be going to、と場面で判断する。',
  },
  {
    id: 'term1_2026_koko_eigo_022',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① My little brother (　) swim very well.（弟はとても上手に泳ぐことができる）
② (　) I use your pen?（あなたのペンを使ってもいいですか）`,
    answer: '① can　② Can',
    hint: 'canは「〜できる」という能力、「〜してもよい」という許可の両方を表せる。',
    explanation: `【出題意図】助動詞canの基本用法（能力・許可）を問う。【解説】①「上手に泳ぐことができる」という能力を表すのでcan swim。②「使ってもいいですか」という許可を求める疑問文なのでCan I use〜?。【注意点】canの後の動詞は必ず原形になる（3人称単数でもswimsにしない）。【関連知識】canの疑問文Can you〜?は「〜してくれますか」という依頼の意味でもよく使われる。許可を求めるcanよりmayの方がやや丁寧な表現。`,
    pitfall: '①をcan swimsとしないこと。canの後は必ず動詞の原形。',
    memoryTip: 'can＝能力（〜できる）と許可（〜してもよい）の2つの意味をセットで覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_023',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私たちは校則を守らなければならない。
  We (　) follow the school rules.
② 彼女は毎朝早く起きなければならない。（3人称単数）
  She (　) (　) get up early every morning.`,
    answer: '① must　② has to',
    hint: '主語がheやsheなど3人称単数のとき、have toはhas toになる。',
    explanation: `【出題意図】「〜しなければならない」を表すmustとhave to（3人称単数はhas to）を問う。【解説】①主語Weに対してmust follow（守らなければならない）。②主語She（3人称単数）に対してはhave toではなくhas toを使う（has to get up）。【注意点】mustは話し手の主観的な義務、have to/has toは規則や状況による客観的な必要性を表すという違いがあるが、中学英語では「どちらも〜しなければならない」とほぼ同じ意味で扱われることが多い。【関連知識】have toの過去形はhad to、未来形はwill have toとなり、mustには過去形・未来形がないため、その代わりにhad to/will have toを使う。`,
    pitfall: '②をhave toとしないこと。主語Sheは3人称単数なのでhas toにする。',
    memoryTip: 'have toはhe/she/itが主語のときhas toに変わる、と3単現のルールと同じ感覚で覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_024',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 教室で騒いではいけません。
  You (　) (　) make noise in the classroom.
② 今日は宿題をする必要はありません。
  You (　) (　) (　) do your homework today.`,
    answer: '① must not (mustn\'t)　② don\'t have to (don\'t need to)',
    hint: 'must not＝「〜してはいけない」（禁止）、don\'t have to＝「〜する必要はない」（不必要）と意味が異なる。',
    explanation: `【出題意図】must notとdon't have toの意味の違い（禁止か不必要か）を問う頻出の重要ポイント。【解説】①「騒いではいけない」は禁止を表すのでmust not（mustn't）。②「宿題をする必要はない」は不必要を表すのでdon't have to。この2つは形が似ているが意味が大きく異なるため注意が必要。【注意点】must not＝「してはいけない（強い禁止）」、don't have to＝「しなくてもよい（必要がない、してもしなくてもどちらでもよい）」と正反対に近いニュアンスを持つ点が最重要。【関連知識】don't need to〜もdon't have toとほぼ同じ意味で使われる。`,
    pitfall: '②をmust notにしないこと。「する必要がない」であって「してはいけない」わけではない。',
    memoryTip: 'must not＝しちゃダメ（禁止）、don\'t have to＝しなくてOK（不要）、と意味を対比して覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_025',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① あなたはもっと野菜を食べるべきだ。
  You (　) eat more vegetables.
② 彼はそんなに厳しくすべきではない。
  He (　) (　) be so strict.`,
    answer: '① should　② should not (shouldn\'t)',
    hint: 'shouldは「〜すべきだ」というアドバイス・助言を表す助動詞。',
    explanation: `【出題意図】助言・提案を表す助動詞shouldの肯定・否定の形を問う。【解説】①「もっと野菜を食べるべきだ」というアドバイスにはshouldを使う。②「そんなに厳しくすべきではない」という否定のアドバイスにはshould not（shouldn't）を使う。【注意点】shouldはmustよりも弱いニュアンスで、「（義務ではないが）〜した方がよい」という助言・提案を表す。【関連知識】had betterも「〜した方がよい」という意味だが、shouldよりも強い忠告・警告のニュアンスを持つ（had better notで「〜しない方がよい」）。`,
    pitfall: '②をnot shouldのように語順を逆にしないこと。should notの順番を守る。',
    memoryTip: 'should＝「〜すべきだ」という助言、mustより柔らかい響きだと覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_026',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① (　) I open the window?（窓を開けてもよろしいですか）— Sure, go ahead.
② She (　) be tired after the long trip.（彼女は長旅の後で疲れているかもしれない）`,
    answer: '① May　② may',
    hint: 'mayは「〜してもよい」という丁寧な許可、「〜かもしれない」という推量の両方を表す。',
    explanation: `【出題意図】助動詞mayの2つの用法（許可・推量）を問う。【解説】①「窓を開けてもよろしいですか」という丁寧な許可を求める表現でMay I〜?を使う（canよりも丁寧）。②「疲れているかもしれない」という推量を表すのでmay be tiredとなる。【注意点】May I〜?はCan I〜?よりも改まった・丁寧な許可の求め方。推量のmayは「50%程度の可能性」を表し、mustの推量用法（〜にちがいない、確信度が高い）よりも確信度が低い。【関連知識】might はmayよりもさらに控えめ・不確かな推量を表す（may/mightはほぼ同じ意味で使われることも多い）。`,
    pitfall: '②をmustにすると「〜にちがいない」という強い確信になり、推量の弱いニュアンスと異なる。',
    memoryTip: 'may＝「〜してもよい（許可）」「〜かもしれない（弱い推量）」の2つの意味を覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_027',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 少し手伝っていただけますか。（丁寧な依頼）
  (　) you help me a little?
② 私が子どもの頃、この歌を歌うことができた。
  I (　) sing this song when I was a child.`,
    answer: '① Could　② could',
    hint: 'Could you〜?はCan you〜?よりも丁寧な依頼。couldはcanの過去形で「〜できた」という過去の能力も表す。',
    explanation: `【出題意図】丁寧な依頼を表すCould you〜?と、canの過去形としてのcould（過去の能力）を問う。【解説】①「手伝っていただけますか」という丁寧な依頼はCould you〜?（Can you〜?よりも丁寧）。②「子どもの頃に歌うことができた」という過去の能力を表すのでcould sing（canの過去形）。【注意点】couldはcanの過去形としての用法（過去の能力）と、現在の丁寧な依頼を表す用法の2つがある点に注意。【関連知識】丁寧さの度合い：Can you〜? < Could you〜? < Would you〜?の順に丁寧になっていく。`,
    pitfall: '②をcanのままにしないこと。過去の文（when I was a child）なのでcouldにする。',
    memoryTip: 'Could you〜?＝丁寧な依頼、could＝canの過去形（〜できた）と2つの用法を区別する。',
  },
  {
    id: 'term1_2026_koko_eigo_028',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）内の語を適切な形にしなさい。

① This bag is (heavy) than that one.
② This question is (difficult) than the last one.
③ My brother is (tall) than me.`,
    answer: '① heavier　② more difficult　③ taller',
    hint: '短い語（1音節・一部の2音節）は語尾に-erを付け、長い語（比較的長い2音節以上）はmoreを前に置く。',
    explanation: `【出題意図】比較級の作り方（-erを付ける語とmoreを前に置く語の判別）を問う。【解説】①heavyは語尾がy→yをiに変えてerを付けheavier。②difficultは音節が多い長い語なのでmore difficultとする。③tallは短い語なのでerを付けtaller。【注意点】difficultやbeautiful、importantなど長い語（原則3音節以上や、-fulなどの語尾）はmoreを前に置く。tallやbigなど短い語は語尾に-erを付ける。【関連知識】big→bigger（子音字を重ねる）、happy→happier（y→i+er）など、語尾の形によって比較級の作り方が変わる点も併せて確認する。`,
    pitfall: '②をmore difficulterのように二重比較にしないこと。長い語はmoreのみを付け、erは付けない。',
    memoryTip: '短い語→er、長い語→more、迷ったら「発音しやすいか」で判断する。',
  },
  {
    id: 'term1_2026_koko_eigo_029',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）内の語を適切な形にしなさい。

① Mt. Fuji is the (high) mountain in Japan.
② This is the (interesting) story of all.
③ He is the (popular) student in our class.`,
    answer: '① highest　② most interesting　③ most popular',
    hint: '短い語は語尾に-estを付け、長い語はmostを前に置く。最上級の前にはtheを付ける。',
    explanation: `【出題意図】最上級の作り方（-estを付ける語とmostを前に置く語の判別）と、theを付ける点を問う。【解説】①highは短い語なのでhighestとし、the highest mountain。②interestingは長い語なのでmost interestingとする。③popularも比較的長い語なのでmost popularとする。【注意点】最上級には原則theを付ける（the highest、the most interesting）。長い語にmostest やestを両方付ける二重最上級にしないこと。【関連知識】in Japan（〜の中で）、of all（すべての中で）のように、最上級の後には範囲を表す語句（in/of〜）が続くことが多い。`,
    pitfall: '②をmost interestingestのように二重にしないこと。長い語はmostのみ付ける。',
    memoryTip: '最上級には必ずtheを付ける（the+est/the most+形容詞）と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_030',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私の兄は父と同じくらい背が高い。
  My brother is (　) (　) (　) my father.
② このカバンはあのカバンほど高くない。
  This bag is not (　) (　) (　) that one.`,
    answer: '① as tall as　② as expensive as',
    hint: '「AはBと同じくらい〜」＝as+形容詞の原級+as、「Aは~ほど…ない」＝not as+原級+as。',
    explanation: `【出題意図】原級を使った比較表現（as〜as、not as〜as）を問う。【解説】①「AはBと同じくらい背が高い」＝A is as tall as B.の形。形容詞は比較級・最上級にせず原級（tall）のまま使う点がポイント。②「AはBほど〜ない」＝A is not as+原級+as B.で、expensiveも原級のまま使う。【注意点】as〜asの間に入れる形容詞は必ず原級（変化させない元の形）にする。比較級（taller等）を入れないこと。【関連知識】not as〜as＝not so〜asと言い換えることもできる（同じ意味）。`,
    pitfall: '①をas taller asのように比較級にしないこと。as〜asの間は原級。',
    memoryTip: 'as〜as＝「イコール」のイメージ、間の形容詞は変化させず原級のまま使う。',
  },
  {
    id: 'term1_2026_koko_eigo_031',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）内の語を適切な形にしなさい。

① I like summer (well) than winter.（私は冬より夏が好きだ）
② This movie is (bad) than that one.（この映画はあの映画より悪い）
③ She has (many) books than I do.（彼女は私より多くの本を持っている）`,
    answer: '① better　② worse　③ more',
    hint: 'good/well→better→best、bad→worse→worst、many/much→more→mostという不規則変化を覚える。',
    explanation: `【出題意図】不規則に変化する比較級（good/well、bad、many/much）を問う。【解説】①「好きだ」を強める副詞wellの比較級はbetter（good/wellはどちらもbetter-bestに変化）。②badの比較級はworse。③manyの比較級はmore。【注意点】これらは-erを付けるルールが通用しない不規則変化の代表例なので、goodやwellと混同せずそれぞれ暗記する。【関連知識】good/well-better-best、bad/ill-worse-worst、many/much-more-most、little-less-leastは中学英語の最重要不規則変化。`,
    pitfall: '②をbadderとしないこと。badの比較級はworseという全く違う形になる。',
    memoryTip: 'good/well→better→best、bad→worse→worst、many/much→more→mostと丸ごと暗唱する。',
  },
  {
    id: 'term1_2026_koko_eigo_032',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文とほぼ同じ意味になるように（　）に適語を入れなさい。

Mt. Fuji is the highest mountain in Japan.
→ Mt. Fuji is (　) (　) (　) highest mountains in Japan.
（富士山は日本で最も高い山の一つだ）`,
    answer: 'one of the',
    hint: '「最も〜な…の一つ」＝one of the+最上級+複数名詞。',
    explanation: `【出題意図】「one of the+最上級+複数名詞」という最上級の重要書き換え表現を問う。【解説】「富士山は日本で一番高い山だ」を「富士山は日本で最も高い山の一つだ」という意味に変える場合、one of the+最上級+複数名詞（one of the highest mountains）の形にする。最上級の後の名詞は必ず複数形にする点がポイント。【注意点】one of the highest mountainのように名詞を単数形のままにしないこと。「〜の一つ」なので後ろの名詞群は複数存在することが前提。【関連知識】one of the+最上級+複数名詞は「最も〜なものの一つ」という意味で、英作文や読解で非常によく使われる表現。`,
    pitfall: '後ろの名詞をmountainのまま単数形にしないこと。one of the の後は複数形にする。',
    memoryTip: 'one of the+最上級+複数名詞＝「最も〜な…の中の一つ」と丸ごとフレーズで覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_033',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話文を読み、設問に答えなさい。

A: What did you do during the vacation?
B: I visited my grandparents in Nagano. We went hiking and enjoyed the fresh air.
A: Sounds fun! Are you going to visit them again this summer?
B: Yes, I am. I'm going to stay there for a week.

① Bはどこへ行き、何をしたか。（日本語で答えよ）
② Bはこの夏、何をする予定か。（英語で答えよ）`,
    answer: `① 長野の祖父母を訪ね、ハイキングをして新鮮な空気を楽しんだ。
② He (She) is going to stay at his (her) grandparents' house in Nagano for a week.`,
    hint: '①Bの1つ目の発言、②Bの最後の発言「I\'m going to stay there for a week.」に注目。',
    explanation: `【出題意図】休暇中の出来事を話す会話文で、過去形（visited/went/enjoyed）とbe going to（未来の予定）を読み分ける問題。【解説】①Bの最初の発言「I visited my grandparents in Nagano. We went hiking and enjoyed the fresh air.」から、長野の祖父母を訪ね、ハイキングをして新鮮な空気を楽しんだとわかる。②Bの最後の発言「I'm going to stay there for a week.」から、今年の夏も1週間滞在する予定だとわかる。【注意点】過去の出来事（visited, went, enjoyed）と、これからの予定（am going to stay）を時制で正しく区別する。【関連知識】Sounds fun!は「楽しそうですね」という相づちの定型表現。`,
    pitfall: '②を過去形で答えないこと。設問は「この夏の予定」なので未来を表す形で答える。',
    memoryTip: '過去の話（〜した）と、これからの予定（〜するつもり）を動詞の形の違いで見分ける。',
  },
  {
    id: 'term1_2026_koko_eigo_034',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読み、設問に答えなさい。

Students at our school must wear their school uniform. They must not use their smartphones during class, but they can use them during lunch break. Students who forget their homework should tell their teacher before class starts.

① 生徒が授業中にしてはいけないことは何か。（日本語で答えよ）
② 生徒がお昼休みにしてもよいことは何か。（英語で答えよ）`,
    answer: `① 授業中にスマートフォンを使うこと。
② They can use their smartphones during lunch break.`,
    hint: '①must notの文、②canの文に注目する。',
    explanation: `【出題意図】学校生活のルールを説明する文章の中で、must not（禁止）とcan（許可）の意味を正しく読み取る問題。【解説】①「They must not use their smartphones during class」から、授業中にスマートフォンを使ってはいけないとわかる。②「they can use them during lunch break」から、お昼休みにはスマートフォンを使ってもよいとわかる。【注意点】must（着用の義務）、must not（禁止）、can（許可）、should（助言）と、複数の助動詞が使われているので、それぞれの意味を正確に対応させて読む。【関連知識】校則・ルールの説明にはmust/must not/can/shouldがセットでよく使われる。`,
    pitfall: '①でmustとmust notの意味を取り違えないこと。mustは義務、must notは禁止で正反対の意味。',
    memoryTip: 'must＝しなければならない、must not＝してはいけない、can＝してもよい、と対応させて覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_035',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ as / this / that / big / not / bag / is ] one.
  （このかばんはあのかばんほど大きくない）

② [ the / is / most / this / of / difficult / question ] all.
  （この問題はすべての中で最も難しい）`,
    answer: `① This bag is not as big as that one.
② This question is the most difficult of all.`,
    hint: '①not as+原級+as、②the most+形容詞+of all。',
    explanation: `【出題意図】not as〜asの原級比較と、最上級+of allの語順整序を問う。【解説】①「This bag is not as big as that one.」＝not as+原級（big）+as+比較対象（that one）。②「This question is the most difficult of all.」＝the most+形容詞（difficult）+of all（すべての中で）。【注意点】①はbiggerのような比較級にせず、原級bigのままas〜asの間に入れる。②はdifficultの前にmostを置き、theを忘れない。【関連知識】of allは「すべての中で」という最上級の範囲を示す表現で、in+場所（in Japan等）と使い分ける。`,
    pitfall: '①をnot as bigger asのように比較級にしないこと。as〜asの間は原級。',
    memoryTip: 'not as+原級+as＝「〜ほど…ない」、the most+形容詞+of all＝「すべての中で最も〜」と型で覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_036',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文の誤りを1か所指摘し、正しく直しなさい。

① I am going to visited my aunt next weekend.
② She must not to run in the hallway.
③ This question is difficulter than the last one.
④ He can plays the piano very well.`,
    answer: `① visited → visit（be going toの後は動詞の原形）
② must not to run → must not run（助動詞mustの後にtoは不要）
③ difficulter → more difficult（長い語はmoreを付ける）
④ can plays → can play（canの後は動詞の原形）`,
    hint: 'be going to／助動詞（must, can等）の後は動詞の原形。difficultのような長い語はmoreを使う。',
    explanation: `【出題意図】be going to・助動詞の後の動詞の形、比較級の作り方という頻出誤りをまとめて問う総合誤文訂正問題。【解説】①be going toの後は動詞の原形visitにする（visitedやvisitingにしない）。②助動詞mustの後は動詞の原形をそのまま続け、toを入れない（must to runは誤り）。③difficultは長い語なのでmore difficultとし、-erを付けたdifficulterという形は存在しない。④助動詞canの後は動詞の原形playにする（plays、playingにしない）。【注意点】助動詞（can/must/will/should等）とbe going toは、後ろに続く動詞を必ず原形にするという共通ルールがある。【関連知識】この「助動詞の後は原形」というルールは、英文法全体を通して非常に重要な基礎ルールなので、繰り返し確認しておく。`,
    pitfall: '②のようにmust to doとしてしまう誤りは非常に多いので特に注意する。',
    memoryTip: '助動詞・be going toの後は必ず動詞の原形（to不要、s不要、ing不要）と徹底暗記する。',
  },

  // ============================================================
  // Q037–Q060: 発展（difficulty: 'advanced'）— 中3 現在完了形・受動態・不定詞の応用
  // ============================================================
  {
    id: 'term1_2026_koko_eigo_037',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① I (　) (　) in this town for ten years.（私は10年間この町に住んでいる）
② She (　) (　) busy since this morning.（彼女は今朝からずっと忙しい）`,
    answer: '① have lived　② has been',
    hint: '「継続」を表す現在完了は have/has+過去分詞。forは期間、sinceは起点を表す。',
    explanation: `【出題意図】現在完了の継続用法（have/has+過去分詞+for/since）を問う。【解説】①「10年間住んでいる」という過去から現在まで続く状態はhave lived（liveの過去分詞lived）。forの後は期間（ten years）が続く。②「今朝からずっと忙しい」という状態の継続はhas been（beの過去分詞been、主語sheに合わせhas）。sinceの後は起点（this morning）が続く。【注意点】forの後には期間の長さ、sinceの後には起点となる時点が続くという違いを区別する。【関連知識】現在完了の継続は「（過去のある時点から）ずっと〜している」という意味で、状態動詞（live, know, beなど）とよく使われる。`,
    pitfall: '②をhas beenではなくis busy sinceのようにしないこと。sinceを使う継続文には現在完了が必要。',
    memoryTip: 'for+期間（〜の間）、since+起点（〜以来）とセットで覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_038',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① I have (　) this movie three times.（私はこの映画を3回見たことがある）
② Have you (　) visited Okinawa? — Yes, once.（沖縄を訪れたことがありますか）`,
    answer: '① seen　② ever',
    hint: '「経験」を表す現在完了は have/has+過去分詞。回数（three times）、ever（今までに）とよく使われる。',
    explanation: `【出題意図】現在完了の経験用法（have/has+過去分詞）と、回数・everを使った表現を問う。【解説】①「3回見たことがある」という経験はhave seen（seeの過去分詞seen）＋回数（three times）で表す。②「今までに訪れたことがありますか」という経験を尋ねる疑問文にはeverを使う（Have you ever+過去分詞〜?）。【注意点】経験用法では、~timesのような回数やever（今までに）、never（一度も〜ない）、before（以前に）などの副詞（句）がよく使われる。【関連知識】答え方の例：Yes, I have. / No, I never have. / Yes, once（一度あります）。`,
    pitfall: '①をsawとしないこと。現在完了の文なのでhaveの後は過去分詞seenを使う。',
    memoryTip: '経験用法のキーワード：ever、never、before、~times（回数）を目印にする。',
  },
  {
    id: 'term1_2026_koko_eigo_039',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① I have (　) (　) my homework.（私はちょうど宿題を終えたところだ）
② She has (　) left home.（彼女はすでに家を出た）
③ Have you cleaned your room (　)?（もう部屋を掃除しましたか）`,
    answer: '① just finished　② already　③ yet',
    hint: '「完了・結果」を表す現在完了はjust（ちょうど）、already（すでに）、yet（もう／まだ）とよく使われる。',
    explanation: `【出題意図】現在完了の完了・結果用法（have/has+過去分詞）と、just/already/yetの使い分けを問う。【解説】①「ちょうど終えたところだ」＝have just finished（justは「ちょうど」の意味でhaveと過去分詞の間に置く）。②「すでに家を出た」＝has already left（alreadyもhaveと過去分詞の間に置くのが基本）。③「もう掃除しましたか」＝疑問文の文末にyetを置く（yetは疑問文で「もう」、否定文で「まだ」の意味）。【注意点】alreadyは肯定文、yetは主に疑問文・否定文で使われる（否定文では「まだ〜ない」）。【関連知識】現在完了の完了用法は「（過去の動作が完了して）今〜という結果になっている」ことを表す。`,
    pitfall: '③をalreadyにしないこと。疑問文で「もう〜しましたか」と尋ねる場合はyetを使う。',
    memoryTip: 'just/already＝have/hasと過去分詞の間、yet＝疑問文・否定文の文末、と位置で覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_040',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ you / eaten / have / ever / natto ]?
  （あなたは今までに納豆を食べたことがありますか）

② [ finished / has / she / yet / not ] her report.
  （彼女はまだレポートを終えていない）`,
    answer: `① Have you ever eaten natto?
② She has not finished her report yet.`,
    hint: `①現在完了の疑問文はHave/Has+主語+過去分詞〜?、②否定文はhas not（hasn't）+過去分詞、文末にyet。`,
    explanation: `【出題意図】現在完了の疑問文（経験）と否定文（完了）の語順を問う整序問題。【解説】①「Have you ever eaten natto?」＝Have+主語you+ever+過去分詞eatenの語順。everは過去分詞の直前に置く。②「She has not finished her report yet.」＝has not（hasn't）+過去分詞finished、文末にyet（まだ）を置く。【注意点】現在完了の疑問文はHave/Hasを主語の前に出すだけで、一般動詞のようにDo/Didを使わない。【関連知識】現在完了の疑問文・否定文はいずれもhave/hasの位置と過去分詞の形がポイントになる。`,
    pitfall: '②のyetを文の途中に置かないこと。否定文のyetは基本的に文末に置く。',
    memoryTip: '現在完了の疑問文・否定文は、be動詞と同じ感覚でhave/hasを動かすと覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_041',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私はまだその手紙を読んでいない。
  I (　) (　) (　) the letter yet.
② 彼らは一度もハワイに行ったことがない。
  They (　) (　) been to Hawaii.`,
    answer: '① have not read　② have never',
    hint: '「まだ〜ない」＝have/has not+過去分詞+yet、「一度も〜ない」＝have/has never+過去分詞。',
    explanation: `【出題意図】現在完了の否定文（未完了・経験の否定）の作り方を問う。【解説】①「まだその手紙を読んでいない」＝have not read the letter yet（readは原形・過去形・過去分詞すべて同じ形readなので注意）。②「一度もハワイに行ったことがない」＝have never been to Hawaii（neverはnotよりも強い「一度も〜ない」を表し、have/hasの直後に置く）。【注意点】readは発音が変わるが綴りは同じ（原形[riːd]、過去分詞[red]）。neverを使う否定文ではnotを重ねて使わない（have never not のようにしない）。【関連知識】never＝not everと考えると意味がつかみやすい。`,
    pitfall: '②をhave not neverのように二重否定にしないこと。neverだけで十分に否定の意味を表す。',
    memoryTip: 'not+yet＝「まだ〜ない」、never＝「一度も〜ない」と2つの否定パターンを区別する。',
  },
  {
    id: 'term1_2026_koko_eigo_042',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を選びなさい。

① My father has (　) to Canada, so he isn't here now.（父はカナダに行ってしまって、今ここにいない）
② I have (　) to Canada twice.（私はカナダに2回行ったことがある）

ア. been　イ. gone`,
    answer: '① イ(gone)　② ア(been)',
    hint: 'have gone to＝「行ってしまって今ここにいない」（結果）、have been to＝「行ったことがある」（経験）。',
    explanation: `【出題意図】have gone toとhave been toの意味の違い（結果用法と経験用法）を問う頻出の重要ポイント。【解説】①「カナダに行ってしまって、今ここにいない」という結果を表すのでhas gone to（主語が3人称単数のfatherなのでhas）。②「2回行ったことがある」という経験を表すのでhave been to（twiceという回数と相性がよい）。【注意点】have gone toは主語がその場からいなくなっていることを意味するため、話している本人（I）について使うと矛盾する（I have gone to〜とは基本的に言わない）。【関連知識】have been toは「行ったことがある（経験）」「行ってきたところだ（完了、往復してきた）」の2つの意味で使われる。`,
    pitfall: '②をhave gone toにしないこと。自分（I）についてgoneを使うと「今ここにいない」という矛盾が生じる。',
    memoryTip: 'gone＝「行ってしまった（不在）」、been＝「行ったことがある（経験）」と区別して覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_043',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）内の動詞を適切な形にしなさい。

① It (rain) since this morning.（今朝からずっと雨が降り続いている）
② I (study) English for two hours before you called me.（あなたが電話をくれる前、私は2時間ずっと英語を勉強していた）`,
    answer: '① has been raining　② had been studying',
    hint: '「動作の継続」は現在完了進行形（have/has been+動詞ing）、過去のある時点までの継続は過去完了進行形（had been+動詞ing）。',
    explanation: `【出題意図】現在完了進行形（have/has been+動詞ing）と、その発展形である過去完了進行形（had been+動詞ing）を問う発展問題。【解説】①「今朝からずっと雨が降り続いている」という動作の継続はhas been raining（rainは動作動詞なので進行形にできる）。②「電話をくれる前まで2時間ずっと勉強していた」という過去のある時点までの動作の継続は過去完了進行形had been studyingを使う。【注意点】現在完了の継続用法は、状態動詞（live, know等）はhave/has+過去分詞、動作動詞（rain, study等）はhave/has been+動詞ingを使うのが基本。【関連知識】過去完了進行形は高校レベルの発展内容だが、中3の教科書でも紹介されることがある「〜までずっと…していた」という表現。`,
    pitfall: '①をhas rainedとしても間違いではないが、「降り続いている」という継続の強調にはhas been rainingがより適切。',
    memoryTip: '動作の継続を強調したいときはbeen+動詞ing（進行形）を使うと覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_044',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）内の動詞を適切な形にしなさい。

① This song (love) by many young people.（この歌は多くの若者に愛されている）
② These cookies (make) by my grandmother every year.（これらのクッキーは毎年祖母によって作られる）`,
    answer: '① is loved　② are made',
    hint: '受動態は「be動詞+過去分詞」。主語が単数か複数かでbe動詞を使い分ける。',
    explanation: `【出題意図】受動態の基本形（be動詞+過去分詞）を問う。【解説】①主語This song（単数）に合わせis loved（loveの過去分詞loved）とする。②主語These cookies（複数）に合わせare made（makeの過去分詞made）とする。【注意点】受動態はbe動詞を主語の人称・数・時制に合わせて変化させ、動詞は必ず過去分詞にする。makeのような不規則動詞は過去分詞形（made）を正しく覚えておく必要がある。【関連知識】受動態は「主語が〜される」という意味で、能動態（This song is loved by many young people.←Many young people love this song.）から書き換えられる。`,
    pitfall: '②をmakedとしないこと。makeは不規則動詞で過去分詞はmade。',
    memoryTip: '受動態＝be動詞+過去分詞＝「〜される」という意味と形をセットで覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_045',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の文を疑問文に書き換えなさい。

① This car was made in Japan.
② These pictures were taken by a famous photographer.`,
    answer: `① Was this car made in Japan?
② Were these pictures taken by a famous photographer?`,
    hint: '受動態の疑問文はbe動詞を主語の前に出す（be動詞+主語+過去分詞〜?）。',
    explanation: `【出題意図】受動態の疑問文（be動詞+主語+過去分詞）の語順を問う。【解説】①This car was made in Japan.のwasを主語の前に出し、Was this car made in Japan?とする。②These pictures were takenのwereを主語の前に出し、Were these pictures taken by a famous photographer?とする。【注意点】受動態の疑問文はbe動詞の疑問文と同じ作り方（be動詞を前に出すだけ）で、Do/Didは使わない。【関連知識】答え方はYes, it was. / No, it wasn't.（①）のように、be動詞を使って答える。`,
    pitfall: '②をDid these pictures taken〜?のようにDidを使わないこと。受動態の疑問文はbe動詞を使う。',
    memoryTip: '受動態の疑問文はbe動詞の疑問文と同じ作り方（be動詞を主語の前に出すだけ）と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_046',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の文を否定文に書き換えなさい。

① English is spoken in this country.
② This bridge was built 100 years ago.`,
    answer: `① English is not (isn't) spoken in this country.
② This bridge was not (wasn't) built 100 years ago.`,
    hint: '受動態の否定文はbe動詞の直後にnotを置く（be動詞+not+過去分詞）。',
    explanation: `【出題意図】受動態の否定文（be動詞+not+過去分詞）の作り方を問う。【解説】①isの直後にnotを置きis not spoken（isn't spoken）とする。②wasの直後にnotを置きwas not built（wasn't built）とする。【注意点】受動態の否定文もbe動詞の否定文と同じ作り方で、be動詞の直後にnotを置くだけでよい。don'tやdidn'tを使って動詞を原形に戻す必要はない。【関連知識】受動態の否定文・疑問文はいずれも、be動詞の文法（be動詞の位置を変える・notを直後に置く）がそのまま当てはまる。`,
    pitfall: '②をdidn\'t buildのように一般動詞の否定文の形にしないこと。受動態はbe動詞の否定の形を使う。',
    memoryTip: '受動態の否定＝be動詞+not+過去分詞、能動態の否定（一般動詞）とは作り方が異なると意識する。',
  },
  {
    id: 'term1_2026_koko_eigo_047',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な前置詞を入れなさい。

① I am interested (　) Japanese history.（私は日本の歴史に興味がある）
② The mountain is covered (　) snow.（その山は雪で覆われている）
③ This table is made (　) wood.（このテーブルは木でできている）`,
    answer: '① in　② with　③ of',
    hint: '受動態にはbyだけでなく、慣用的にin/with/ofなどの前置詞を使うものがある。',
    explanation: `【出題意図】受動態でbyを使わずin/with/ofなどの前置詞を使う慣用表現を問う。【解説】①be interested in〜＝「〜に興味がある」。②be covered with〜＝「〜で覆われている」。③be made of〜＝「（材料が見た目でわかる）〜でできている」。【注意点】これらは受動態の意味は持つが、動作主を表すbyではなく、慣用的に決まった前置詞を使う点に注意する。be made of（材料が目で見てわかるもの：木、紙等）とbe made from（材料が化学変化などで見た目が変わるもの：ワイン←ぶどう等）の違いも発展的に確認する。【関連知識】その他の例：be known for〜（〜で知られている）、be filled with〜（〜で満たされている）、be pleased with〜（〜に満足している）。`,
    pitfall: '③をmade fromにしないこと。木の見た目がそのまま残るテーブルにはmade ofを使う。',
    memoryTip: 'be interested in、be covered with、be made ofは慣用表現としてセットで丸暗記する。',
  },
  {
    id: 'term1_2026_koko_eigo_048',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

この城は300年前に建てられ、今でも多くの観光客に訪れられている。
This castle (　) (　) 300 years ago, and it (　) still (　) by many tourists.`,
    answer: '① was built　② is visited',
    hint: '「建てられた」は過去の受動態（was+過去分詞）、「訪れられている」は現在の受動態（is+過去分詞）。',
    explanation: `【出題意図】異なる時制の受動態（過去の受動態と現在の受動態）を1つの文の中で正しく使い分ける複合問題。【解説】「300年前に建てられた」は過去の一回限りの出来事なので過去の受動態was built。「今でも訪れられている」は現在の継続的な状態なので現在の受動態is visited。【注意点】ago（〜前に）は過去を表す語なので過去形・過去の受動態と結びつき、still（今でも）は現在の状態と結びつく。時を表す語句から時制を判断する。【関連知識】受動態はbe動詞の時制（is/was/will be等）を変えることで、現在・過去・未来のいずれの意味も表せる。`,
    pitfall: '②をwas visitedにしないこと。still（今でも）は現在の状態を表すので現在形の受動態を使う。',
    memoryTip: 'agoは過去、stillは現在、と時を表す語句からbe動詞の時制を判断する。',
  },
  {
    id: 'term1_2026_koko_eigo_049',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 英語を勉強することは私にとって大切だ。
  (　) English is important for me.
② 私の夢は医者になることだ。
  My dream is (　) (　) a doctor.`,
    answer: '① To study (Studying)　② to become',
    hint: '不定詞の名詞的用法（〜すること）は文の主語やbe動詞の補語になれる。',
    explanation: `【出題意図】不定詞の名詞的用法（〜すること）を、文の主語や補語の位置で使えるかを問う。【解説】①「英語を勉強することは」という文の主語にはTo study English（またはStudying English、動名詞も可）を置く。②「私の夢は医者になることだ」というbe動詞の補語にはto become a doctor（不定詞の名詞的用法）を置く。【注意点】不定詞の名詞的用法は「to+動詞の原形」で「〜すること」という意味を表し、文の主語・目的語・補語のいずれにもなれる。【関連知識】主語の位置では動名詞（studying）も使えるが、補語の位置（My dream is〜）では不定詞to becomeを使うのが一般的（動名詞becomingも文法的には可能）。`,
    pitfall: '②をbecameのように定形動詞にしないこと。be動詞の後は「to+動詞原形」の不定詞を置く。',
    memoryTip: '不定詞の名詞的用法＝「to+動詞原形」＝「〜すること」と直訳して文の中に当てはめる。',
  },
  {
    id: 'term1_2026_koko_eigo_050',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私には今日やるべき宿題がたくさんある。
  I have a lot of homework (　) (　) today.
② 何か飲むものをください。
  Please give me something (　) (　).`,
    answer: '① to do　② to drink',
    hint: '不定詞の形容詞的用法（〜するための、〜すべき）は直前の名詞を修飾する。',
    explanation: `【出題意図】不定詞の形容詞的用法（名詞+to+動詞原形）を問う。【解説】①「やるべき宿題」＝homework to do（不定詞が直前の名詞homeworkを修飾）。②「飲むもの」＝something to drink（不定詞が直前の代名詞somethingを修飾）。【注意点】不定詞の形容詞的用法は必ず修飾する名詞・代名詞の直後に置く。前置詞が必要な動詞（sit onなど）の場合は、to sit on a chairのように前置詞を残す点にも注意（例：a chair to sit on）。【関連知識】something/anything/nothingなどの不定代名詞は、形容詞と不定詞の両方が付くとき「something+形容詞+to+動詞」の語順になる（例：something cold to drink＝何か冷たい飲み物）。`,
    pitfall: '①をhomework doing のように動名詞にしないこと。「〜すべき」という意味には不定詞を使う。',
    memoryTip: '不定詞の形容詞的用法＝直前の名詞を「〜するための、〜すべき」と説明すると覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_051',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私は宿題をするために図書館に行った。
  I went to the library (　) (　) my homework.
② 彼はその知らせを聞いて驚いた。
  He was surprised (　) (　) the news.`,
    answer: '① to do　② to hear',
    hint: '不定詞の副詞的用法は「〜するために」（目的）、「〜して」（感情の原因）を表す。',
    explanation: `【出題意図】不定詞の副詞的用法（目的・感情の原因）を問う。【解説】①「宿題をするために」という目的を表すto do my homework。②「知らせを聞いて（驚いた）」という感情（surprised）の原因を表すto hear the news。【注意点】副詞的用法は動詞や形容詞を修飾し、「目的（〜するために）」と「感情の原因（〜して、〜したので）」の2つの意味が代表的。【関連知識】感情を表す形容詞（happy, glad, sad, surprised等）+to+動詞は「〜して（感情の理由）」という意味の頻出パターン。`,
    pitfall: '②をto hearingのように動名詞にしないこと。感情の原因を表す不定詞はto+動詞原形。',
    memoryTip: '感情を表す形容詞（glad/happy/surprised等）+to do＝「〜して（嬉しい・驚いた等）」と型で覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_052',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ me / wants / to / help / her / mother ] with the dishes.
  （母は私にお皿洗いを手伝ってほしいと思っている）

② [ told / study / me / to / the teacher / harder ].
  （先生は私にもっと一生懸命勉強するように言った）`,
    answer: `① My mother wants me to help her with the dishes.
② The teacher told me to study harder.`,
    hint: '「want/tell+人+to do」＝「人に〜してほしい／するように言う」の形。',
    explanation: `【出題意図】want/tell+O+to doという「動詞+人+不定詞」の重要構文の語順を問う。【解説】①「My mother wants me to help her with the dishes.」＝want+O（me）+to do（help）。「母は私に手伝ってほしいと思っている」という意味。②「The teacher told me to study harder.」＝tell+O（me）+to do（study）。「先生は私に〜するように言った」という意味。【注意点】want/tellの後には「人＋to+動詞原形」の順番が続く。人を先に置き、その人が「〜すること」を望む・言うという構造を意識する。【関連知識】同じ構造を取る動詞：ask+O+to do（人に〜するように頼む）、would like+O+to do（人に〜してほしいと思う）。`,
    pitfall: '②をtold to study meのように語順を崩さないこと。tell+人+to doの順番を守る。',
    memoryTip: 'want/tell/ask+人+to do＝「人に〜してほしい・するように言う・頼む」と3つセットで覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_053',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① この本を1日で読み終えることは私には難しい。
  (　) (　) difficult for me to finish this book in a day.
② 生徒たちが自分で考えることは大切だ。
  (　) (　) important for students to think for themselves.`,
    answer: '① It is　② It is',
    hint: '「(人)にとって〜することは…だ」＝It is+形容詞+for+人+to do。真主語（to do以下）を後ろに置き、Itを形式主語として文頭に置く。',
    explanation: `【出題意図】「It is+形容詞+for+人+to do」という形式主語構文を問う。【解説】①「この本を1日で読み終えることは私には難しい」＝It is difficult for me to finish this book in a day.。不定詞句（to finish以下）が意味上の主語だが、それを後ろに置き、形式的にItを主語にする。②「生徒たちが自分で考えることは大切だ」＝It is important for students to think for themselves.。【注意点】to do以下の動作をする人（意味上の主語）はfor+人で表す。for meやfor studentsを忘れないこと。【関連知識】for themselves＝「自分自身で」という再帰代名詞を使った表現も重要。`,
    pitfall: 'To finish this book in a day is difficult for me.も文法的には可能だが、It is 〜 for A to doの形式主語構文がより一般的で自然。',
    memoryTip: 'It is+形容詞+for+人+to do＝「（人）が〜することは…だ」と型ごと暗記する。',
  },
  {
    id: 'term1_2026_koko_eigo_054',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① この問題は難しすぎて私には解けない。
  This question is (　) (　) for me (　) (　).
② 彼女は疲れすぎていてそれ以上歩けなかった。
  She was (　) (　) (　) walk any more.`,
    answer: '① too, difficult, to, solve　② too, tired, to',
    hint: '「too+形容詞+for+人+to do」＝「〜すぎて（人が）…できない」。',
    explanation: `【出題意図】too〜to do構文（too+形容詞+for+人+to do）を問う。【解説】①「難しすぎて私には解けない」＝too difficult for me to solve。too+形容詞（difficult）+for+人（me）+to+動詞（solve）の順。②「疲れすぎて歩けなかった」＝too tired to walk。この文では動作をする人（she）がすでに主語なので、for+人を省略できる。【注意点】too〜to doは「〜すぎて…できない」という否定的な意味を持つ（notを使わなくても否定の意味になる点に注意）。【関連知識】too〜to doは「so〜that+主語+can't」で書き換えられる（例：This question is so difficult that I can't solve it.）。`,
    pitfall: '①でfor meを抜かさないこと。「誰が」解けないのかを明示するfor+人が必要。',
    memoryTip: 'too+形容詞+(for+人)+to do＝「〜すぎて（人が）…できない」と否定の意味を含む点に注意する。',
  },
  {
    id: 'term1_2026_koko_eigo_055',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

このプールは子どもたちが泳ぐのに十分安全だ。
This pool is (　) (　) (　) children to swim in.`,
    answer: 'safe enough for',
    hint: '「〜するのに十分…だ」＝形容詞+enough+for+人+to do。enoughは形容詞の後ろに置く。',
    explanation: `【出題意図】〜enough to do構文（形容詞+enough+for+人+to do）を問う。【解説】「子どもたちが泳ぐのに十分安全だ」＝safe enough for children to swim in。形容詞safeの後ろにenoughを置き、その後にfor+人（children）+to+動詞（swim）を続ける。【注意点】enoughは形容詞・副詞の前ではなく後ろに置く点がtoo（too+形容詞の前に置く）との大きな違い。swim inのinはpoolに対応する前置詞（プールの中で泳ぐ）なので忘れずに残す。【関連知識】too〜to do（〜すぎて…できない：否定的）と〜enough to do（〜するのに十分…だ：肯定的）は意味が対照的な構文としてセットで覚える。`,
    pitfall: 'enoughを形容詞の前（enough safe）に置かないこと。enoughは形容詞・副詞の後ろに置く。',
    memoryTip: '形容詞+enough+to do＝「〜するのに十分…だ」、enoughは後ろ置きと覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_056',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① I don't know (　) (　) use this machine.（私はこの機械の使い方がわかりません）
② Please tell me (　) (　) buy for the party.（パーティーのために何を買えばよいか教えてください）
③ Do you know (　) (　) go for lunch?（昼食にどこへ行けばよいか知っていますか）`,
    answer: '① how to　② what to　③ where to',
    hint: '「疑問詞+to+動詞原形」で「〜すべきか」という意味の名詞句を作る。',
    explanation: `【出題意図】「疑問詞+to不定詞」（how to / what to / where to）の基本形を問う。【解説】①「使い方がわからない」＝don't know how to use（どうやって使うべきかがわからない）。②「何を買えばよいか」＝what to buy。③「どこへ行けばよいか」＝where to go。いずれも「疑問詞+to+動詞原形」で名詞句を作り、know/tellの目的語になっている。【注意点】疑問詞+to doは「疑問詞+主語+should+動詞原形」とほぼ同じ意味を表す（例：how to use=how I should use）。【関連知識】when to do（いつ〜すべきか）、which to do（どちらを〜すべきか）も同じグループの重要表現。`,
    pitfall: '①をwhat to useにしないこと。「使い方」という意味にはhow to useを使う。',
    memoryTip: '疑問詞+to do＝「疑問詞+すべきか」と意味から逆算して当てはめる。',
  },
  {
    id: 'term1_2026_koko_eigo_057',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読み、設問①〜③に答えなさい。

This old bridge was built more than 100 years ago. It has been used by local people for a long time, and it is still loved as a symbol of the town. However, it has not been repaired since last year's typhoon, so it may be closed to traffic soon.

① 下線部「it is still loved as a symbol of the town」を日本語に訳しなさい。
② この橋が最近修理されていない理由は何か。（日本語で答えよ）
③ 本文の内容と合うものを選べ。
  ア. この橋は建設されて間もない。
  イ. この橋は台風の後、修理されていない。
  ウ. この橋はもう使われていない。`,
    answer: `① それは今でも町のシンボルとして愛されている。
② 昨年の台風の被害を受けてから修理されていないため。
③ イ`,
    hint: `①受動態is lovedの訳、②has not been repaired since last year's typhoonに注目、③本文全体の内容と照合。`,
    explanation: `【出題意図】現在完了の受動態（has been used/has not been repaired）を含む読解問題で、受動態の訳と内容把握を問う。【解説】①「it is still loved as a symbol of the town」＝「それ（橋）は今でも町のシンボルとして愛されている」と受動態のまま自然な日本語に訳す。②「it has not been repaired since last year's typhoon」から、昨年の台風以来修理されていないことが理由だとわかる。③本文には「it has not been repaired since last year's typhoon」とあり、これに合致するのはイ。アは「建てられて100年以上」という記述と矛盾し、ウは「今でも使われている（has been used）」という記述と矛盾する。【注意点】has been used、is loved、has not been repairedとすべて受動態で書かれているので、それぞれ「〜される、〜されている」という意味で正確に読み取る。【関連知識】現在完了の受動態（have/has been+過去分詞）は「（過去から現在まで）〜され続けている」という意味を表す。`,
    pitfall: '③でウを選ばないこと。it has been used（今でも使われている）とあり、「もう使われていない」は誤り。',
    memoryTip: '現在完了の受動態＝have/has been+過去分詞＝「ずっと〜されている／されてきた」と覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_058',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読み、設問①・②に答えなさい。

My grandfather taught me how to make traditional Japanese sweets when I was a child. It was too difficult for me to make them well at first, but I practiced hard enough to make a perfect one by the time I was twelve. Now I want to teach other children to enjoy this tradition.

① 下線部「taught me how to make traditional Japanese sweets」を日本語に訳しなさい。
② 筆者が12歳までにできるようになったことは何か。（英語で答えよ）`,
    answer: `① （祖父は）私に伝統的な和菓子の作り方を教えてくれた。
② He (She) practiced hard enough to make a perfect Japanese sweet by the time he (she) was twelve.`,
    hint: '①teach+人+how to do（人に〜の仕方を教える）、②本文の「practiced hard enough to make a perfect one by the time I was twelve」に注目。',
    explanation: `【出題意図】疑問詞+to不定詞（how to make）、too〜to do、〜enough to doという不定詞の応用表現を組み合わせた読解問題。【解説】①「taught me how to make traditional Japanese sweets」＝teach+人+how to do（人に〜の仕方を教える）の構造で、「私に伝統的な和菓子の作り方を教えてくれた」と訳す。②「I practiced hard enough to make a perfect one by the time I was twelve」から、12歳までに完璧な和菓子を作れるくらい一生懸命練習したとわかる。【注意点】本文にはtoo difficult for me to make（難しすぎて作れなかった）と practiced hard enough to make（十分に練習して作れるようになった）という対照的な不定詞構文が使われており、時間の経過による変化を正確に読み取る。【関連知識】by the time〜（〜するまでには）は期限を表す接続詞で、完了のニュアンスを持つ文とよく使われる。`,
    pitfall: '②を「最初はうまく作れなかった」という前半の内容で答えないこと。設問は「12歳までにできるようになったこと」を問うている。',
    memoryTip: 'too〜to do（〜すぎてできない）と〜enough to do（十分〜で…できる）の対比構造を意識して読む。',
  },
  {
    id: 'term1_2026_koko_eigo_059',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の文の誤りを1か所指摘し、正しく直しなさい。

① I have been never to Australia.
② This letter was write by my grandmother.
③ It is important for students studying every day.
④ She was too busy to attends the meeting.`,
    answer: `① have been never → have never been（neverはhave/hasの直後に置く）
② was write → was written（受動態はbe動詞+過去分詞）
③ studying → to study（It is 形容詞 for 人 to doの形にする）
④ attends → attend（too〜to doのtoの後は動詞の原形）`,
    hint: 'neverの位置、受動態の過去分詞、形式主語It is〜for〜to do、too〜to doの後の動詞原形、をそれぞれ確認する。',
    explanation: `【出題意図】現在完了・受動態・不定詞の応用に関する頻出誤りを総合的に問う誤文訂正問題。【解説】①neverはhave/hasのすぐ後ろに置くのでhave never been（have been neverは語順の誤り）。②受動態はbe動詞+過去分詞なので、writeの過去分詞writtenを使いwas written。③「学生が毎日勉強することは大切だ」という意味にするにはIt is important for students to study every day（形式主語構文で不定詞to studyを使う）とする。④too〜to doのtoの後は動詞の原形なので、attendsではなくattend。【注意点】どの誤りも「動詞の形（過去分詞・原形）」または「語順（neverの位置）」に関するもので、現在完了・受動態・不定詞の基本ルールに立ち返って確認する。【関連知識】これらは中3範囲の総合的な文法知識を問う定期テスト頻出の誤文訂正パターン。`,
    pitfall: '③をfor students studyingのままにしないこと。It is 形容詞 for 人 to doの型を思い出す。',
    memoryTip: 'never→have/hasの直後、受動態→過去分詞、too〜to do→動詞は原形、と型ごとに整理して覚える。',
  },
  {
    id: 'term1_2026_koko_eigo_060',
    subject: 'eigo',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ has / been / this / used / school / for / building ] over fifty years.
  （この校舎は50年以上使われてきた）

② [ too / it / for / difficult / was / me / understand / to ] the lecture.
  （その講義は私には理解するのが難しすぎた）

③ [ me / tell / could / you / how / get / to ] to the museum?
  （博物館への行き方を教えていただけますか）`,
    answer: `① This school building has been used for over fifty years.
② It was too difficult for me to understand the lecture.
③ Could you tell me how to get to the museum?`,
    hint: '①現在完了の受動態（has been+過去分詞）、②形式主語It+too〜for〜to do、③Could you tell me+疑問詞+to不定詞。',
    explanation: `【出題意図】現在完了の受動態、too〜to do構文、疑問詞+to不定詞という中3範囲の重要文法を組み合わせた総合的な語順整序問題。【解説】①「This school building has been used for over fifty years.」＝has been used（現在完了の受動態）+for+期間（over fifty years）。②「It was too difficult for me to understand the lecture.」＝形式主語It+was too difficult+for me（意味上の主語）+to understand（不定詞）。③「Could you tell me how to get to the museum?」＝Could you tell me+how to get to〜（疑問詞+to不定詞の名詞句）という丁寧な依頼表現。【注意点】①はfor over fifty years（期間）という現在完了とセットで使われる表現に注意する。②はforをbyと間違えないこと（forは「〜にとって」という意味上の主語を導く）。【関連知識】これら3つの構文（現在完了の受動態、too〜to do、疑問詞+to do）はいずれも中3の1学期期末テストで頻出の総合文法項目。`,
    pitfall: '②のforをtoやbyにしないこと。「〜にとって」という意味上の主語を表すのはforのみ。',
    memoryTip: '現在完了の受動態＝has/have been+過去分詞、too〜for〜to do、疑問詞+to doの3型を仕上げとして総復習する。',
  },
];
