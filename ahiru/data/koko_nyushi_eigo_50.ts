import type { Question } from './questions';

export const kokoNyushiEigo50: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nShe ( ) the piano for three hours when I arrived.\n① plays  ② played  ③ has played  ④ had been playing',
    answer: '④ had been playing',
    hint: '「私が着いたとき」という過去の時点より前から続いていた動作を表す時制を選ぶ。',
    explanation: `【出題意図】
過去完了進行形（had been + Ving）の用法を問う問題。過去のある時点まで継続していた動作を表す時制の識別が目標。

【解説】
「I arrived（私が着いたとき）」は過去の時点。その時点より前（=さらに過去）から「ピアノを弾き続けていた」という継続動作を表すには、過去完了進行形 had been playing を使う。
・① plays → 現在形（文脈に合わない）
・② played → 過去形（継続の意味が出ない）
・③ has played → 現在完了形（過去の基準点には使えない）
・④ had been playing → 過去完了進行形（✓）

日本語訳：「私が着いたとき、彼女は3時間ピアノを弾き続けていた。」

【文法ポイント】
過去完了進行形 = had been + 動詞-ing
→ 過去のある時点よりもさらに前から、その時点まで継続していた動作に使う。
「for〜（〜の間）」「since〜（〜以来）」などの継続を示す表現とセットで出やすい。

【入試頻出】
・She had been waiting for an hour when the bus came.
・They had been playing soccer since noon when it started to rain.
「when＋過去形」の主節に過去完了（進行）形を使うパターンを押さえよ。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nYou ( ) finish the report by tomorrow.\n① must  ② should  ③ have to  ④ need',
    answer: '③ have to',
    hint: '「明日までに」という締め切りがある場合、最も強い義務・必要性を表す表現を選ぶ。',
    explanation: `【出題意図】
助動詞（must / should / have to / need）の意味の違いを問う問題。義務の強さとニュアンスの識別が目標。

【解説】
「by tomorrow（明日までに）」は締め切りを示し、外部からの必要性を表す文脈。
・① must → 話者の強い主観的義務「〜しなければならない」（内的義務）
・② should → 「〜すべきだ」（推奨・アドバイス）
・③ have to → 外的な状況による必要性「〜しなければならない」（外的義務）（✓）
・④ need → 動詞として使う場合「〜する必要がある」（より弱い義務）

この問題では締め切りという外部の状況が存在するので have to が最適。mustも文法的には可だが、入試では外的状況を示す文脈では have to を選ばせることが多い。

日本語訳：「あなたは明日までにレポートを仕上げなければならない。」

【文法ポイント】
must：話者の判断による強い義務（「絶対〜しなければ」）
have to：状況・規則・外部要因による義務（「〜することになっている」）
should：義務より軽い推奨（「〜した方がいい」）

【入試頻出】
・You must / have to be quiet in the library.
・過去形は must に過去形がないため had to を使う：I had to study hard.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語形を選べ。\n\nThis book ( ) by many students every year.\n① reads  ② is read  ③ was read  ④ has read',
    answer: '② is read',
    hint: '「毎年〜される」という受動態の現在形を探す。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形の正確な形を問う問題。能動態と受動態の区別も含む。

【解説】
主語は「This book（この本）」= 物。本が「読む」のではなく「読まれる」側なので受動態が必要。「every year（毎年）」は習慣・繰り返しを示すので現在形。
・① reads → 能動態・現在3単現（主語が人のとき使う）
・② is read → 受動態・現在形（✓）is + 過去分詞(read)
・③ was read → 受動態・過去形（「毎年」と合わない）
・④ has read → 現在完了形・能動態

受動態の公式：be動詞 + 過去分詞 (+ by 〜)

日本語訳：「この本は毎年多くの生徒に読まれる。」

【文法ポイント】
受動態の基本形：
・現在：is/am/are + 過去分詞
・過去：was/were + 過去分詞
・未来：will be + 過去分詞
・現在完了：has/have been + 過去分詞

【入試頻出】
・English is spoken in many countries.
・This temple was built 300 years ago.
・This song is loved by young people.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nMt. Fuji is ( ) mountain in Japan.\n① high  ② higher  ③ the highest  ④ most high',
    answer: '③ the highest',
    hint: '「日本で一番〜」は最上級。最上級の前には the が必要。',
    explanation: `【出題意図】
比較表現（原級・比較級・最上級）の使い分けと、最上級に定冠詞 the が必要なことを問う問題。

【解説】
「in Japan（日本で）」は範囲を示す表現で、その中で「一番」を表すには最上級が必要。
・① high → 原級（比較なし）
・② higher → 比較級（2つを比べる）
・③ the highest → 最上級（✓）「一番高い」
・④ most high → 最上級の作り方が誤り（high は -est 型、most は使わない）

日本語訳：「富士山は日本で最も高い山です。」

【文法ポイント】
比較級：形容詞 + -er（shorter / taller）または more + 形容詞（more beautiful）
最上級：the + 形容詞 + -est（the shortest）または the most + 形容詞（the most beautiful）
最上級には必ず the が必要！

比較級・最上級の作り方：
・1音節・2音節一部：-er / -est（tall→taller→tallest）
・2音節以上：more / most（beautiful→more beautiful→most beautiful）

【入試頻出】
・Tokyo is the largest city in Japan.
・This is the most interesting book I have ever read.
・She runs faster than anyone else in the class.（比較級で最上級の意味）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI went to the library ( ) study English.\n① for  ② so  ③ to  ④ in order',
    answer: '③ to',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法。',
    explanation: `【出題意図】
不定詞の副詞的用法「〜するために（目的）」を問う問題。前置詞 for との混同を防ぐ。

【解説】
「図書館に行った」目的を表す文。「英語を勉強するために」は不定詞の副詞的用法（目的）で表す。
・① for → 前置詞。for の後ろは名詞のみ（for studying は可だが選択肢にない形）
・② so → 接続詞「だから」（so that を使えば目的を表せるが単独では不可）
・③ to → to + 動詞原形で「〜するために」（✓）
・④ in order → in order to なら目的を表せるが、in order 単独では不完全

日本語訳：「私は英語を勉強するために図書館へ行った。」

【文法ポイント】
不定詞の3用法：
・名詞的：I want to eat pizza.（〜したい）
・形容詞的：I have something to eat.（〜するための）
・副詞的（目的）：I studied hard to pass the exam.（〜するために）
副詞的（感情の原因）：I am glad to hear that.（〜して）

【入試頻出】
・She got up early to catch the first train.
・He studied hard in order to pass the exam.（in order to ＝より書き言葉的）
・I went to the store to buy some milk.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nHe enjoyed ( ) soccer with his friends.\n① play  ② to play  ③ playing  ④ played',
    answer: '③ playing',
    hint: 'enjoy の後ろには動名詞（〜ing）が来る。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞（enjoy）を正しく使えるかを問う問題。不定詞との区別が核心。

【解説】
enjoy は目的語に動名詞（〜ing）だけを取り、不定詞（to +原形）は取らない。
・① play → 原形（enjoyの後ろには使えない）
・② to play → 不定詞（enjoyの後ろには来ない）
・③ playing → 動名詞（✓）enjoy + 動名詞
・④ played → 過去形（目的語にはなれない）

日本語訳：「彼は友達とサッカーをするのを楽しんだ。」

【文法ポイント】
動名詞のみを目的語にとる動詞（入試頻出）：
enjoy（楽しむ）、finish（終える）、stop（やめる）、mind（気にする）、give up（諦める）、practice（練習する）

不定詞のみを目的語にとる動詞：
want（望む）、hope（望む）、decide（決める）、wish（望む）

どちらも可（意味が変わるものもある）：
like / love / start / begin / continue

【入試頻出】
・She finished doing her homework.
・He stopped smoking last year.
・Do you mind opening the window?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI ( ) here for five years by next March.\n① will live  ② have lived  ③ will have lived  ④ lived',
    answer: '③ will have lived',
    hint: '「来年3月までには」という未来の時点での完了を表す時制を選ぶ。',
    explanation: `【出題意図】
未来完了形（will have + 過去分詞）の用法を問う問題。「未来のある時点での完了・継続」を表す時制の識別。

【解説】
「by next March（来年3月までには）」は未来の時点。その時点で「5年間住んでいることになる」という継続の完了を表すには未来完了形を使う。
・① will live → 単純未来（継続の完了を表せない）
・② have lived → 現在完了（未来の時点には使えない）
・③ will have lived → 未来完了（✓）
・④ lived → 過去形（文脈に合わない）

日本語訳：「来年3月までには、私はここに5年間住んでいることになる。」

【文法ポイント】
未来完了形 = will have + 過去分詞
用法：①未来のある時点での完了（by〜, when〜などと共に）
      ②未来のある時点まで継続していること

目印の語句：by the time〜 / by then / by next〜 / when〜（未来の時点を示す）

【入試頻出】
・I will have finished this work by tomorrow.
・She will have been a teacher for ten years by 2030.
・By the time you arrive, I will have cooked dinner.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nIf it ( ) tomorrow, we will cancel the picnic.\n① rains  ② will rain  ③ rained  ④ is raining',
    answer: '① rains',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation: `【出題意図】
条件節（if 節）での時制のルール「未来のことでも現在形を使う」を問う問題。入試最頻出文法の一つ。

【解説】
「If it 〜, we will cancel」は条件文（仮定法ではない直説法）。英語では if 節・when 節などの「副詞節」の中では、未来のことであっても will を使わず現在形を使う。
・① rains → 現在形（✓）if 節内では現在形で未来を表す
・② will rain → if 節内で will は使えない（×）
・③ rained → 過去形（仮定法になってしまう）
・④ is raining → 進行形（文脈に合わない）

日本語訳：「もし明日雨が降れば、私たちはピクニックを中止します。」

【文法ポイント】
時・条件を表す副詞節の中では未来のことでも現在形：
if（もし〜なら）/ when（〜するとき）/ until（〜まで）/ as soon as（〜したらすぐ）/ before（〜する前に）/ after（〜した後）

例：When he comes, I will tell him the news.（彼が来たら知らせます）
例：Wait here until she returns.（彼女が戻るまでここで待て）

【入試頻出】
・If you study hard, you will pass the exam.
・When I get home, I will call you.
・As soon as she arrives, we will start the meeting.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThis letter ( ) in French.\n① writes  ② is written  ③ was writing  ④ has write',
    answer: '② is written',
    hint: '手紙は「書かれている」状態にある。受動態の現在形を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の識別。能動態との混同を防ぐ。

【解説】
「この手紙」は書く側ではなく書かれる側なので受動態が必要。フランス語で「書かれている」という現在の状態を表すので現在形の受動態を選ぶ。
・① writes → 能動態3単現（主語が手紙では意味が通らない）
・② is written → 受動態・現在形（✓）
・③ was writing → 過去進行形・能動態（意味が通らない）
・④ has write → 形が誤り（has written なら現在完了受動態だが write は不正）

日本語訳：「この手紙はフランス語で書かれています。」

【文法ポイント】
write の変化：write → wrote → written（過去分詞）
受動態：is/am/are + 過去分詞
前置詞 in は言語・手段を表す：written in French / in English / in ink

【入試頻出】
・The book was written by a famous author.
・Japanese is spoken in Japan.
・This park is used by many people every day.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nShe is ( ) than her sister.\n① tall  ② more tall  ③ taller  ④ tallest',
    answer: '③ taller',
    hint: '2者を比べるときは比較級（-er）を使う。than が手がかり。',
    explanation: `【出題意図】
比較級の形（-er型 / more型）を正確に使えるかを問う問題。than との組み合わせも確認。

【解説】
than があれば比較級が必要。tall は1音節の形容詞なので -er 型で比較級を作る。
・① tall → 原級（than とセットでは使えない）
・② more tall → 誤った比較級（1音節の形容詞に more は使わない）
・③ taller → 正しい比較級（✓）
・④ tallest → 最上級（than とセットでは使わない）

日本語訳：「彼女は妹よりも背が高い。」

【文法ポイント】
比較級の形：
・1音節：-er（tall→taller, fast→faster, old→older）
・子音+y で終わる：y→ier（easy→easier, happy→happier）
・3音節以上・2音節でも：more +形容詞（beautiful→more beautiful）
・不規則：good→better, bad→worse, many/much→more, little→less

【入試頻出】
・He is taller than his father.
・This test is more difficult than the last one.
・She runs faster than I do / me.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI want ( ) a doctor in the future.\n① be  ② being  ③ to be  ④ to being',
    answer: '③ to be',
    hint: 'want の後ろに来る不定詞の名詞的用法（〜したい）を選ぶ。',
    explanation: `【出題意図】
不定詞の名詞的用法（want to + 動詞原形）の形を正確に使えるかを問う問題。

【解説】
want は「〜したい」という意味で、後ろに不定詞（to + 動詞原形）を取る。
・① be → 原形のみ（want の後ろに動詞原形は直接来ない）
・② being → 動名詞（want は動名詞を目的語に取らない）
・③ to be → 不定詞（✓）want to be〜 = 〜になりたい
・④ to being → to + 動名詞（存在しない形）

日本語訳：「私は将来医者になりたい。」

【文法ポイント】
不定詞のみを目的語に取る動詞（want / hope / wish / decide / plan / need + to 動詞）
want to be〜：〜になりたい（職業や状態を表すのに頻出）
· want to do：〜したい
· want + 人 + to do：人に〜してほしい

【入試頻出】
・I want to become a teacher.
・She hopes to study abroad.
・He decided to join the team.
・My parents want me to study hard.（want + 人 + to do）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nStopping ( ) is important for our health.\n① smoke  ② to smoke  ③ smoking  ④ smoked',
    answer: '③ smoking',
    hint: 'stop の後ろの目的語と文の主語になる動名詞を見分ける。',
    explanation: `【出題意図】
動名詞が主語・目的語になれることと、stop の後ろには動名詞が来ることを問う問題。

【解説】
この文は「Stopping smoking（喫煙をやめること）」が主語で、「is important」が述語の文。
・Stopping（動名詞）が文の主語
・その後ろに目的語として smoking（動名詞）が来る
・① smoke → 原形（動名詞の位置に使えない）
・② to smoke → stop to smoke = 「煙草を吸うために立ち止まる」という全く別の意味になる
・③ smoking → 動名詞（✓）stop smoking = 喫煙をやめる
・④ smoked → 過去形（動名詞の位置には使えない）

日本語訳：「喫煙をやめることは私たちの健康に大切だ。」

【文法ポイント】
stop + 動名詞：〜するのをやめる（stop smoking = 喫煙をやめる）
stop + 不定詞：〜するために立ち止まる（stop to smoke = 煙草を吸うために立ち止まる）
→ この意味の違いが入試で頻出！

【入試頻出】
・He stopped talking. （話すのをやめた）
・He stopped to talk. （話すために立ち止まった）
・Eating vegetables is good for health.（動名詞が主語）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。\n\nShe has been interested ( ) music since childhood.\n① at  ② with  ③ in  ④ about',
    answer: '③ in',
    hint: 'be interested の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be interested in〜（〜に興味がある）の前置詞の用法を問う問題。

【解説】
be interested in〜 は「〜に興味がある」という意味のイディオム。前置詞 in が固定。
・① at → be good at〜（〜が得意）に使う
・② with → be pleased with〜（〜に喜んでいる）などに使う
・③ in → be interested in〜（✓）
・④ about → be worried about〜（〜を心配している）などに使う

日本語訳：「彼女は子どものころから音楽に興味を持っている。」

【文法ポイント】
前置詞を固定する重要熟語（入試頻出）：
・be interested in〜：〜に興味がある
・be good at〜：〜が得意
・be afraid of〜：〜を恐れる
・be proud of〜：〜を誇りに思う
・be surprised at〜：〜に驚く
・be worried about〜：〜を心配する
・be made of〜：〜で作られている
・be known for〜：〜で知られている

【入試頻出】
・I am interested in science.
・She is good at playing the violin.
・He is proud of his team.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nPlease ( ) care of my dog while I am away.\n① make  ② have  ③ take  ④ give',
    answer: '③ take',
    hint: 'take care of〜 で「〜の世話をする」という熟語。',
    explanation: `【出題意図】
動詞 take を含む重要熟語 take care of〜 を正確に知っているかを問う問題。

【解説】
take care of〜 は「〜の世話をする、〜に気をつける」という重要イディオム。
・① make → make care of は存在しない
・② have → have care of は存在しない
・③ take → take care of〜（✓）
・④ give → give care of は存在しない

日本語訳：「私がいない間、私の犬の世話をしてください。」

【文法ポイント】
take を含む頻出熟語：
・take care of〜：〜の世話をする
・take a look at〜：〜を見る
・take part in〜：〜に参加する
・take place：行われる、起こる
・take off：脱ぐ、離陸する
・take turns：交代でやる

【入試頻出】
・Can you take care of my sister?
・The festival takes place every summer.
・Please take part in our event.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI am looking ( ) my glasses. Have you seen them?\n① after  ② for  ③ at  ④ into',
    answer: '② for',
    hint: 'look for〜 は「〜を探す」という意味の熟語。',
    explanation: `【出題意図】
句動詞 look + 前置詞 の使い分けを問う問題。look for / look after / look at などの区別が目標。

【解説】
「眼鏡を探している」という文脈から look for〜（〜を探す）を選ぶ。
・① after → look after〜 = 〜の世話をする
・② for → look for〜 = 〜を探す（✓）
・③ at → look at〜 = 〜を見る
・④ into → look into〜 = 〜を調べる、〜を覗き込む

日本語訳：「眼鏡を探しています。見かけましたか？」

【文法ポイント】
look の句動詞まとめ（入試最頻出）：
・look at〜：〜を見る（視線を向ける）
・look for〜：〜を探す
・look after〜：〜の世話をする（= take care of）
・look like〜：〜に似ている、〜のように見える
・look forward to〜ing：〜を楽しみにしている
・look into〜：〜を調べる

【入試頻出】
・I am looking for my keys.
・She looks after her little brother.
・I look forward to seeing you again.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nWe arrived ( ) Osaka at noon.\n① to  ② at  ③ in  ④ on',
    answer: '③ in',
    hint: 'arrive の後ろの前置詞は場所の大きさによって at か in を使い分ける。',
    explanation: `【出題意図】
arrive at / arrive in の使い分けを問う問題。場所の規模による前置詞の選択。

【解説】
arrive の後ろの前置詞：
・arrive at〜：比較的小さな場所（駅・空港・建物・特定の地点）
・arrive in〜：比較的大きな場所（都市・国・地域）
「Osaka（大阪）」は都市（大きな場所）なので arrive in を使う。
・① to → arrive to は使わない（× go to は可）
・② at → 駅・空港などの特定地点に使う
・③ in → 都市・国名の前に使う（✓）
・④ on → arrive on は使わない

日本語訳：「私たちは正午に大阪に到着した。」

【文法ポイント】
arrive in〜（大きな場所）：arrive in Tokyo / arrive in Japan
arrive at〜（小さな場所・地点）：arrive at the station / arrive at the airport / arrive at school

get to〜 も「〜に着く」の意味で使える（大きい・小さいに関わらず to）：
get to Osaka / get to the station

【入試頻出】
・We arrived in New York after a long flight.
・The train arrived at the platform on time.
・When did you get to school this morning?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_17',
    subject: 'eigo',
    question: '次の文と意味が最も近いものを選べ。\n\nShe is able to speak three languages.\n① She can speak three languages.\n② She should speak three languages.\n③ She must speak three languages.\n④ She will speak three languages.',
    answer: '① She can speak three languages.',
    hint: 'be able to = can（〜できる・能力）の言い換え。',
    explanation: `【出題意図】
be able to と助動詞 can の同義表現を問う問題。言い換え表現の識別が目標。

【解説】
be able to do は「〜することができる」という能力・可能性を表す表現で、助動詞 can と同義。
・① can speak → be able to speak と同義（✓）
・② should speak → 「〜すべきだ」（義務・推奨）→ 意味が異なる
・③ must speak → 「〜しなければならない」（強い義務）→ 意味が異なる
・④ will speak → 「〜するだろう」（未来・意志）→ 意味が異なる

日本語訳：「彼女は3つの言語を話すことができる。」

【文法ポイント】
can = be able to（〜できる）
can には過去形 could があるが、be able to は全時制で使える：
・過去：could = was/were able to
・未来：will be able to（will can とは言えない！）
・完了：have been able to

例：She will be able to drive next year.（来年は運転できるようになるだろう）

【入試頻出】
・I am able to swim.（= I can swim.）
・He was able to solve the problem.（= He could solve the problem.）
・Will you be able to come?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nHe is different ( ) his brother in personality.\n① from  ② with  ③ to  ④ than',
    answer: '① from',
    hint: 'be different から来る前置詞を選ぶ。',
    explanation: `【出題意図】
熟語 be different from〜（〜と異なる）の前置詞を問う問題。

【解説】
be different from〜 は「〜と異なる、〜とは違う」という意味のイディオム。前置詞 from が固定。
・① from → be different from〜（✓）
・② with → be different with は存在しない
・③ to → be similar to〜（〜に似ている）には to を使うが different には使わない
・④ than → 比較級の than（different は比較級ではないので than は不可）

日本語訳：「彼は性格的に兄とは異なる。」

【文法ポイント】
「同じ・異なる・似ている」の前置詞：
・be different from〜：〜と異なる
・be similar to〜：〜に似ている
・be the same as〜：〜と同じだ
・be familiar with〜：〜をよく知っている、〜に慣れている
・be familiar to〜：〜によく知られている

【入試頻出】
・This culture is different from ours.
・Her idea is similar to mine.
・That question is the same as this one.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI ( ) up early every morning to exercise.\n① wake  ② get  ③ rise  ④ stand',
    answer: '② get',
    hint: '「朝起きる」という日常動作に最もよく使われる句動詞を選ぶ。',
    explanation: `【出題意図】
句動詞 get up（起きる）の用法を問う問題。似た意味の動詞との区別。

【解説】
「朝起きる（ベッドから起き上がる）」には get up が最も一般的。
・① wake up → 「目が覚める」（眠りから覚める意味が強い。wake up early は可だが、この文では get up が最もよい）
・② get up → 「起き上がる、起床する」（✓）日常の起床行動全体を指す
・③ rise → 「上がる、昇る」（太陽が昇る/物価が上がるなど。人の起床にはやや堅い文語表現）
・④ stand up → 「立ち上がる」（座った状態から立つ）

注意：wake up も文法的には使えるが、get up の方がより自然で入試では正解とされやすい。

日本語訳：「私は運動するために毎朝早く起きる。」

【文法ポイント】
起床に関する動詞の使い分け：
・wake up：目を覚ます（睡眠から覚める瞬間）
・get up：起き上がる（ベッドから出て活動を始める）
・rise（文語・詩的）：太陽が昇るように起き上がる

【入試頻出】
・I get up at six every morning.
・The sun rises in the east.（太陽は東から昇る）
・I woke up at midnight.（夜中に目が覚めた）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe train ( ) at 8:30 every morning.\n① leaves  ② is left  ③ leave  ④ has left',
    answer: '① leaves',
    hint: '主語が3人称単数・習慣的な事実を表す現在形を選ぶ。',
    explanation: `【出題意図】
3人称単数の現在形（3単現のs）と習慣・スケジュールを表す用法を問う問題。

【解説】
「every morning（毎朝）」は習慣・ルーティンを示す語句。主語 The train は3人称単数なので動詞に s が必要。
・① leaves → 3単現（✓）leave + s = leaves。電車が「出発する」という能動態。
・② is left → 受動態（「残される」という意味になり文脈に合わない）
・③ leave → 3単現の s なし（文法的に誤り）
・④ has left → 現在完了（「出発してしまった」＝1回限りの事実。every morning と合わない）

日本語訳：「電車は毎朝8時30分に出発する。」

【文法ポイント】
3人称単数現在（3単現）：主語が he / she / it / 単数名詞のとき動詞に -s/-es をつける。
習慣・スケジュールを表す現在形は列車・バス・映画の時刻にも使う：
・The movie starts at 7 p.m.
・The shop opens at 9 a.m.

【入試頻出】
・The bus leaves at 10:00 every day.
・School starts at 8:30.
・My father gets home at 6 p.m.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe girl ( ) is singing on the stage is my cousin.\n① who  ② which  ③ whom  ④ whose',
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation: `【出題意図】
関係代名詞の選択（who / which / whom / whose）を問う問題。先行詞が人か物か、節内の役割（主格・目的格・所有格）の識別が目標。

【解説】
先行詞は「The girl（少女）」= 人。関係代名詞節内で「is singing（歌っている）」の主語の役割を果たしている。
・① who → 先行詞が人・主格（✓）
・② which → 先行詞が物や動物
・③ whom → 先行詞が人・目的格（I met whom = met の目的語）
・④ whose → 先行詞が人または物・所有格（whose bag = 〜のバッグ）

日本語訳：「舞台で歌っている少女は私のいとこです。」

【文法ポイント】
関係代名詞まとめ：
　　　　主格　　目的格　　所有格
人：　　who　　whom　　whose
物：　　which　which　　whose / of which
どちらも：that　that　　─

that は who / which の代わりに使えるが、whose や前置詞の後ろには使えない。

【入試頻出】
・The boy who won the race is my friend.（主格）
・The man whom I met was kind.（目的格）
・I have a friend whose father is a doctor.（所有格）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThis is the book ( ) I bought yesterday.\n① who  ② which  ③ whom  ④ where',
    answer: '② which',
    hint: '先行詞は「物（本）」。関係代名詞節内で bought の目的語になっている。',
    explanation: `【出題意図】
関係代名詞 which（先行詞が物・目的格）の用法を問う問題。that との言い換えも理解する。

【解説】
先行詞は「the book（本）」= 物。関係代名詞節内で I bought ( )（私が買った）の目的語になっている。
・① who → 先行詞が人のとき
・② which → 先行詞が物・目的格（✓）I bought which = that を買った
・③ whom → 先行詞が人・目的格
・④ where → 関係副詞（場所を表す先行詞に使う）

which は省略可（that に置き換え可）：This is the book (that) I bought yesterday.

日本語訳：「これは私が昨日買った本です。」

【文法ポイント】
目的格の関係代名詞は省略可能：
・The book (which/that) I read was interesting.
・The man (whom/that) I met was kind.

先行詞を修飾する形：
先行詞 + 関係代名詞 + 主語 + 動詞〜
先行詞 + 関係代名詞（目的格）+ 動詞〜（関係代名詞が目的語の場合は省略可）

【入試頻出】
・The movie (that) I watched was exciting.
・This is the song (which) she likes.
・The letter (that) she wrote was long.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI know the city ( ) she was born.\n① which  ② who  ③ where  ④ when',
    answer: '③ where',
    hint: '先行詞は「場所（city）」で、関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 where（先行詞が場所）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「the city（街）」= 場所。節内では「she was born in the city」の前置詞 in の部分が関係副詞 where に変わった構造。
・① which → 物に使う関係代名詞（前置詞 in が必要：the city in which she was born）
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞（✓）
・④ when → 時を先行詞にとる関係副詞（the day when〜、the year when〜）

関係副詞 where = 前置詞 + which：
the city where she was born = the city in which she was born

日本語訳：「私は彼女が生まれた街を知っている。」

【文法ポイント】
関係副詞まとめ：
・where：場所を表す先行詞（city / place / room / country）
・when：時を表す先行詞（day / time / year / moment）
・why：理由を表す先行詞（reason）
・how：方法（the way how は使わず the way か how の一方を省く）

【入試頻出】
・This is the town where I grew up.
・I remember the day when I first met her.
・Tell me the reason why you were late.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI have a friend.\nHis father is a famous musician.',
    answer: 'I have a friend whose father is a famous musician.',
    hint: '2つの文をつなぐとき、His（彼の）を所有格の関係代名詞 whose に変える。',
    explanation: `【出題意図】
所有格の関係代名詞 whose を使って2文を1文に結合する問題。

【解説】
「I have a friend.」と「His father is a famous musician.」の His は a friend を指している。
この「His（友達の）」という所有の関係を表すのが関係代名詞の所有格 whose。

変換の手順：
1. 先行詞を特定：a friend（人）
2. His（所有格）→ whose に置き換える
3. whose を先行詞 a friend の直後に置く
→ I have a friend whose father is a famous musician.

日本語訳：「私にはお父さんが有名なミュージシャンである友達がいる。」

【文法ポイント】
whose の使い方：先行詞（人・物）の所有格を表す
・先行詞が人：I know a girl whose name is Alice.
・先行詞が物：I bought a car whose color is red.（= a car of which the color is red）

whose 節の構造：
先行詞 + whose + 名詞 + 動詞〜

【入試頻出】
・She has a dog whose ears are very long.
・He is a writer whose books are read worldwide.
・This is the building whose roof was damaged.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_25',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：Where does she live?\n「あなたは彼女がどこに住んでいるか知っていますか？」',
    answer: 'Do you know where she lives?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、do/does は消える。',
    explanation: `【出題意図】
間接疑問文（疑問詞 + 主語 + 動詞の語順）への書き換えを問う問題。語順の変化が最大のポイント。

【解説】
直接疑問文「Where does she live?」を間接疑問文にする手順：
1. 疑問詞 Where はそのまま使う
2. 疑問詞の後ろは「主語 + 動詞」の平叙文語順に変える（疑問文の語順ではない！）
3. does は消えて、代わりに動詞に3単現の s がつく
4. 全体を「Do you know + 間接疑問」にする

× Do you know where does she live?（誤り：疑問文の語順のまま）
○ Do you know where she lives?（正解：平叙文語順）

日本語訳：「あなたは彼女がどこに住んでいるか知っていますか？」

【文法ポイント】
間接疑問文の語順：
疑問詞 + 主語 + 動詞〜（平叙文語順）

例：What time is it? → Do you know what time it is?
例：Who is that man? → I wonder who that man is.
例：Why did she cry? → I don't know why she cried.

【入試頻出】
・Do you know where he lives?
・Can you tell me what time the train leaves?
・I wonder why she was absent.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nCould you tell me ( ) the next bus comes?\n① when  ② which  ③ where  ④ how',
    answer: '① when',
    hint: '「次のバスがいつ来るか」という意味の間接疑問文。時を表す疑問詞を選ぶ。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞を文脈から選ぶ問題。疑問詞の意味の使い分けが目標。

【解説】
「Could you tell me ( ) the next bus comes?」= 「次のバスがいつ来るか教えてもらえますか？」
時刻・時点を尋ねるので when を使う。
・① when → 「いつ」時を尋ねる（✓）
・② which → 「どちらの・どれ」選択を尋ねる
・③ where → 「どこ」場所を尋ねる
・④ how → 「どのように・どうやって」方法を尋ねる

注意：the next bus comes は間接疑問文なので「主語 + 動詞」の語順（疑問文語順の when does the next bus come では組み込めない）。

日本語訳：「次のバスがいつ来るか教えていただけますか？」

【文法ポイント】
間接疑問文の疑問詞の使い分け：
・when：時（when she arrives）
・where：場所（where he lives）
・what：物・事（what she said）
・why：理由（why he was late）
・how：方法・程度（how to do it）
・which：選択（which one is better）

【入試頻出】
・Please tell me when the concert starts.
・I don't know where she went.
・Can you tell me how to get to the station?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ know / you / that / do / he / where / lives ）\n「彼がどこに住んでいるか知っていますか？」',
    answer: 'Do you know where he lives?',
    hint: '間接疑問文：疑問詞（where）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation: `【出題意図】
間接疑問文の語順整序問題。「疑問詞 + 主語 + 動詞」という間接疑問の語順と、全体が疑問文になることを同時に確認する。

【解説】
ポイントは2つ：
1. 全体が「Do you know〜?」という疑問文
2. know の目的語（間接疑問）は「where he lives」（疑問文の語順ではなく平叙文語順）

× Do you know where does he live?（誤り）
○ Do you know where he lives?（正解）

語句の組み立て：
Do you know / where / he lives？

日本語訳：「彼がどこに住んでいるか知っていますか？」

【文法ポイント】
間接疑問の語順：疑問詞 + 主語 + 動詞
全体が疑問文の場合：Do / Can / Could + 主語 + 動詞 + 疑問詞 + 主語 + 動詞〜?

【入試頻出】
・Can you tell me what time it is?
・Do you know why she was absent?
・Could you tell me how to get there?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ have / for / I / been / since / living / here / from / ten years ）\n「私はここに10年間住んでいる。」',
    answer: 'I have been living here for ten years.',
    hint: '「10年間ずっと〜している」は現在完了進行形。for（〜の間）か since（〜以来）かを判断する。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for / since の使い分けを問う問題。不要語の識別も含む。

【解説】
「10年間」は期間（duration）なので for を使う。since は起点（since 2010 / since I was a child）に使う。
不要語：from（× I have been living here from ten years → from は不可）

正しい語順：
I have been living here for ten years.
（現在完了進行形 = have been + Ving）

日本語訳：「私はここに10年間住んでいる。」

【文法ポイント】
for vs since：
・for + 期間：for ten years / for a long time / for two hours（〜の間）
・since + 起点：since 2010 / since last summer / since I was a child（〜以来）

現在完了進行形の構造：
have/has + been + 動詞-ing（継続的な動作に使う）
例：I have been studying for three hours.

【入試頻出】
・She has been working here for five years.
・They have been playing soccer since noon.
・I have known her since we were in elementary school.（状態動詞 know → 現在完了・非進行形）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / not / to / old / he / is / drive ）\n「彼は車を運転するのに十分な年齢ではない。」',
    answer: 'He is not old enough to drive.',
    hint: '「〜するのに十分〜だ」は 形容詞 + enough + to 動詞 の語順。',
    explanation: `【出題意図】
「形容詞 + enough + to 動詞」の語順を問う整序問題。enough の位置が鍵。

【解説】
「〜するのに十分〜だ」は：主語 + be + 形容詞 + enough + to + 動詞原形
・enough は形容詞の後ろに置く（× enough old = 誤り）
・否定文：not が be 動詞の後ろに来る

正しい語順：
He is not old enough to drive.

日本語訳：「彼は運転できる年齢に達していない。」

【文法ポイント】
形容詞 + enough + to 動詞：「〜するのに十分〜だ」
例：She is tall enough to reach the shelf.（棚に届くくらい背が高い）
例：He is rich enough to buy that car.（あの車を買えるほど金持ちだ）

too + 形容詞 + to 動詞：「〜すぎて〜できない」（enough と対で覚える）
例：She is too young to drive.（若すぎて運転できない）
= She is not old enough to drive.（どちらも同じ意味）

【入試頻出】
・He is strong enough to lift that box.
・She is too tired to study.
・The water is warm enough to swim in.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ made / him / mother / his / lunch / his ）\n「彼のお母さんは彼にお弁当を作ってあげた。」',
    answer: 'His mother made him his lunch.',
    hint: 'make + 人 + 物 の語順（第4文型 SVOO）を使う。',
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。make の用法も確認。

【解説】
make + 人 + 物 = 人のために物を作る（第4文型）
・His mother（S）+ made（V）+ him（IO: 間接目的語）+ his lunch（DO: 直接目的語）

語順：His mother made him his lunch.

第3文型への書き換え：His mother made his lunch for him.（for を使う）

日本語訳：「彼のお母さんは彼にお弁当を作ってあげた。」

【文法ポイント】
第4文型（SVOO）の動詞：
・give / send / show / teach / tell + 人 + 物（間接目的語が to で書き換え可）
・make / buy / get / cook + 人 + 物（間接目的語が for で書き換え可）
例：She gave me a book. = She gave a book to me.
例：He made me a cake. = He made a cake for me.

【入試頻出】
・She cooked him dinner.（= She cooked dinner for him.）
・He gave her a present.（= He gave a present to her.）
・Can you show me the way to the station?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ reading / finish / to / I / my / homework / after / will / go ）\n「私は宿題を読み終えた後、出かけます。」',
    answer: 'I will go out after finishing my homework.',
    hint: 'after の後には動名詞（〜ing）が来る。after + 動名詞 = 〜した後で。',
    explanation: `【出題意図】
前置詞 after + 動名詞 の用法と、語順整序を問う問題。

【解説】
前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。
「〜した後で」= after + 動名詞（〜ing）

正しい語順：
I will go out after finishing my homework.
（= After finishing my homework, I will go out.）

× after to finish（× 前置詞の後ろに不定詞は来ない）
○ after finishing（✓ 前置詞 + 動名詞）

日本語訳：「宿題を終えた後、私は出かけます。」

【文法ポイント】
前置詞 + 動名詞 の頻出パターン：
・before + ing：〜する前に（before leaving）
・after + ing：〜した後で（after eating）
・without + ing：〜せずに（without saying goodbye）
・for + ing：〜したことで（thank you for coming）
・in + ing：〜するにあたって（in doing so）

【入試頻出】
・He left without saying anything.
・Thank you for helping me.
・Before going to bed, brush your teeth.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ I / the / woman / saw / yesterday / is / the / who / teacher ）\n「私が昨日会った女性はその先生です。」',
    answer: 'The woman who I saw yesterday is the teacher.',
    hint: '関係代名詞 who を使って先行詞「the woman」を修飾する節を作る。',
    explanation: `【出題意図】
関係代名詞 who（目的格）を使った語順整序問題。先行詞と関係代名詞節の位置関係が鍵。

【解説】
文の骨格：The woman is the teacher.（その女性は先生だ）
修飾部：who I saw yesterday（私が昨日会った）

組み合わせ：
The woman [who I saw yesterday] is the teacher.

who はここでは目的格（saw の目的語）として使われている。
= The woman (whom / that) I saw yesterday is the teacher.（省略も可）

日本語訳：「私が昨日会った女性はその先生です。」

【文法ポイント】
関係代名詞節の位置：先行詞の直後に置く。
The woman who〜 / The book which〜 のように、先行詞と関係代名詞節はセット。
主節の動詞（is）は関係代名詞節の後に続く。

【入試頻出】
・The boy who lives next door is friendly.
・The letter that she wrote was very long.
・The man who(m) I met at the party was a doctor.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ to / easy / this / understand / enough / is / problem / for / students / all ）\n「この問題はすべての生徒が理解できるほど簡単だ。」',
    answer: 'This problem is easy enough for all students to understand.',
    hint: '「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。',
    explanation: `【出題意図】
enough to 構文に「for + 人」が加わった形の語順を問う問題。「〜が…するほど十分〜だ」という表現の完全形を問う。

【解説】
構文：主語 + be + 形容詞 + enough + for + 人 + to + 動詞原形
「for + 人」は不定詞の意味上の主語を示す。

正しい語順：
This problem is easy enough for all students to understand.

日本語訳：「この問題はすべての生徒が理解できるほど簡単だ。」

【文法ポイント】
「形容詞 + enough + for + 人 + to + 動詞」構文：
・The box is light enough for children to carry.（子どもが運べるくらい軽い）
・The question is simple enough for anyone to answer.

「too + 形容詞 + for + 人 + to + 動詞」との対比：
・The problem is too difficult for students to solve.（難しすぎて解けない）

【入試頻出】
・This movie is interesting enough for children to enjoy.
・The bag is too heavy for her to carry.
・The water is warm enough for us to swim in.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: Would you like some more tea?\nB: ( )\n\n① No, I don\'t.\n② Yes, please. Thank you.\n③ I\'d like tea.\n④ Yes, I would like.',
    answer: '② Yes, please. Thank you.',
    hint: 'Would you like〜? は「〜はいかがですか」という丁寧な申し出。適切な受け方を選ぶ。',
    explanation: `【出題意図】
Would you like〜?（申し出・勧め）への適切な応答を問う問題。日常会話・対話文頻出表現。

【解説】
Would you like〜? は「〜はいかがですか？」という丁寧な提案・申し出の表現。
・① No, I don't. → Would you like〜? への否定は No, thank you. が正しい（don't は使わない）
・② Yes, please. Thank you. → 正しい受け答え（✓）
・③ I'd like tea. → 申し出への返答としてはずれる（新たなリクエストになる）
・④ Yes, I would like. → like の後ろに目的語が必要（× I would like some. なら可）

申し出への返答：
・受ける：Yes, please. / Yes, please. Thank you.
・断る：No, thank you. / No, I'm fine, thank you.

日本語訳：
A：もう少しお茶はいかがですか？
B：はい、ぜひ。ありがとうございます。

【文法ポイント】
Would you like〜?（申し出）vs Do you like〜?（好み・趣味を尋ねる）
Would you like to〜?（〜しませんか？）：招待・誘い

【入試頻出】
・Would you like some cake? — Yes, please.
・Would you like to join us? — I'd love to.
・Can I help you? — Yes, please.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: How long does it take to get to Tokyo Station from here?\nB: ( )\n\n① It\'s about ten kilometers.\n② It takes about thirty minutes by train.\n③ You should go by bus.\n④ The station is very big.',
    answer: '② It takes about thirty minutes by train.',
    hint: 'How long does it take to〜? は「〜するのにどのくらいかかりますか」という所要時間を尋ねる表現。',
    explanation: `【出題意図】
「It takes + 時間 + to + 動詞」という所要時間を表す構文と、How long does it take to〜? への適切な応答を問う問題。

【解説】
How long does it take to〜? = 「〜するのにどのくらい時間がかかりますか？」
返答は「It takes + 時間」の形が正しい。
・① about ten kilometers → 距離を答えている（×）How far〜? への答え
・② It takes about thirty minutes by train. → 所要時間を答えている（✓）
・③ You should go by bus. → 提案（質問の答えになっていない）
・④ The station is very big. → 無関係

日本語訳：
A：ここから東京駅までどのくらいかかりますか？
B：電車で約30分かかります。

【文法ポイント】
所要時間の表現：
It takes + 時間 + to + 動詞〜
= 〜するのに〜の時間がかかる
例：It takes twenty minutes to walk to school.（学校まで歩いて20分かかる）
例：It took two hours to finish the homework.（宿題を終えるのに2時間かかった）

How long does it take to〜?：所要時間を尋ねる定型表現

【入試頻出】
・How long does it take to get to the airport?
・It takes about an hour by car.
・It took me two hours to read the book.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: I\'m going to take the English test tomorrow, but I\'m not confident.\nB: ( ) You\'ve studied really hard.\n\n① Don\'t worry.\n② That\'s too bad.\n③ I\'m sorry to hear that.\n④ Never mind.',
    answer: '① Don\'t worry.',
    hint: '後に続く「You\'ve studied really hard.（一生懸命勉強したじゃないか）」という励ましの言葉に合う返答を選ぶ。',
    explanation: `【出題意図】
励ましの表現と、会話の流れ・文脈から適切な応答を選ぶ問題。

【解説】
Aが「自信がない」と言っているのに対し、Bは「You've studied really hard.（一生懸命勉強したじゃないか）」と励ましている。前置きとして最適なのは「Don't worry.（心配しないで）」。
・① Don't worry. → 心配しないで（励まし）（✓）
・② That's too bad. → それは残念だね（共感・慰め。励ましではない）
・③ I'm sorry to hear that. → それは残念です（同情。だが後の励ましと繋がりが弱い）
・④ Never mind. → 気にしないで（軽い謝りへの返答。励ましとしては不自然）

日本語訳：
A：明日英語のテストがあるんだけど、自信がないなあ。
B：心配しないで。本当に一生懸命勉強したじゃないか。

【文法ポイント】
励まし・応援の表現：
・Don't worry. / Don't worry about it.：心配しないで
・You can do it!：あなたならできる！
・I'm sure you'll do well.：きっとうまくいくよ
・Cheer up!：元気出して！
・Good luck!：頑張って！

【入試頻出】
・Don't worry. Everything will be all right.
・Cheer up! You'll feel better soon.
・I'm sure you can pass the exam.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: May I use your dictionary?\nB: ( )\nA: Thank you.\n\n① Sure, go ahead.\n② No, you may not use it.\n③ I don\'t have a dictionary.\n④ Yes, you may go.',
    answer: '① Sure, go ahead.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I use〜? = 「〜を使ってもいいですか？」という許可を求める丁寧な表現。
直後に「Thank you.（ありがとう）」とあるので、許可を与える返答が必要。
・① Sure, go ahead. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not use it. → 文法的には正しい拒否だがAが「Thank you」と言うことと矛盾する
・③ I don't have a dictionary. → 辞書がないと言っている（状況から不自然）
・④ Yes, you may go. → go（行く）は use（使う）とは関係ない

日本語訳：
A：辞書を使ってもいいですか？
B：もちろん、どうぞ。
A：ありがとう。

【文法ポイント】
許可を求める表現：
・May I〜?：丁寧（最も礼儀正しい）
・Can I〜?：やや砕けた言い方
・Could I〜?：Can I より少し丁寧

許可を与える表現：
・Sure. / Of course. / Certainly.：もちろん
・Go ahead.：どうぞ（自由に使って）
・Yes, please.：どうぞ
・No problem.：問題ないよ

【入試頻出】
・May I sit here? — Sure, go ahead.
・Can I borrow your pen? — Of course.
・May I ask you a question? — Certainly.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nI have never ( ) sushi before.\n① eat  ② ate  ③ eaten  ④ eating',
    answer: '③ eaten',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。eat の過去分詞を選ぶ。',
    explanation: `【出題意図】
現在完了形（経験用法）の形と、eat の活用（eat-ate-eaten）を正確に使えるかを問う問題。

【解説】
never は現在完了形の経験用法で「一度も〜したことがない」を表す。
現在完了形：have/has + 過去分詞
eat の活用：eat（原形）→ ate（過去形）→ eaten（過去分詞）

・① eat → 原形（have の後ろに原形は来ない）
・② ate → 過去形（have の後ろに過去形は来ない）
・③ eaten → 過去分詞（✓）have eaten
・④ eating → 現在分詞（have been eating なら現在完了進行形だが、この文には合わない）

日本語訳：「私は一度もお寿司を食べたことがない。」

【文法ポイント】
現在完了形（経験）の目印の語句：
・ever（これまでに）：Have you ever eaten sushi?
・never（一度も〜ない）：I have never been to France.
・once / twice / 〜 times（〜回）：I have been there twice.
・before（以前に）：I have seen this movie before.

不規則動詞の過去分詞（頻出）：
eat-ate-eaten / go-went-gone / see-saw-seen / take-took-taken / write-wrote-written

【入試頻出】
・Have you ever visited Kyoto?
・I have never seen such a beautiful sunset.
・She has eaten sushi three times.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nThe concert will be held ( ) Sunday evening.\n① in  ② at  ③ on  ④ by',
    answer: '③ on',
    hint: '曜日・特定の日には前置詞 on を使う。',
    explanation: `【出題意図】
時を表す前置詞（in / at / on）の使い分けを問う問題。入試最頻出文法の一つ。

【解説】
「Sunday evening（日曜日の夕方）」という特定の日・曜日には on を使う。
・① in → 月・年・季節・午前/午後（in July / in 2025 / in the morning）
・② at → 時刻・特定の時点（at 7 p.m. / at noon / at night）
・③ on → 曜日・特定の日（on Sunday / on my birthday / on Christmas Day）（✓）
・④ by → 期限（by Friday = 金曜日までに）→ 期限を表す

「Sunday evening」は曜日＋時間帯なので on を使う（on Sunday evening）。

日本語訳：「コンサートは日曜日の夕方に開催される予定だ。」

【文法ポイント】
時を表す前置詞まとめ：
at：時刻・時点（at 3 p.m. / at noon / at night / at the weekend ※英）
on：曜日・日付・特定の日（on Monday / on July 4 / on my birthday）
in：月・年・季節・時間帯（in March / in 2020 / in summer / in the morning）

【入試頻出】
・The game starts at 3 p.m. on Saturday.
・I was born in April.
・She arrived on a rainy Monday morning.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。\n\nShe asked me ( ) the door.\n① open  ② to open  ③ opening  ④ opened',
    answer: '② to open',
    hint: 'ask + 人 + to do（人に〜するよう頼む）という構文。',
    explanation: `【出題意図】
「ask + 人 + to + 動詞」という第5文型（SVOC）の用法を問う問題。

【解説】
ask + 人 + to do = 「人に〜するよう頼む」という重要構文。
・① open → 原形のみ（× ask の第5文型では to が必要）
・② to open → ask + 人 + to do（✓）
・③ opening → 動名詞（ask + 人 + doing という形は存在しない）
・④ opened → 過去分詞（文法的に合わない）

日本語訳：「彼女は私にドアを開けるよう頼んだ。」

【文法ポイント】
「動詞 + 人 + to do」の構文（SVOC = 使役・知覚・依頼）：
・ask + 人 + to do：人に〜するよう頼む
・tell + 人 + to do：人に〜するよう言う（命令）
・want + 人 + to do：人に〜してほしい
・allow + 人 + to do：人が〜するのを許可する
・expect + 人 + to do：人が〜することを期待する

【入試頻出】
・She asked me to help her.
・He told us to be quiet.
・My parents want me to become a doctor.
・She allowed me to use her computer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。\n\nI think ( ) very important to keep our environment clean.\n① this  ② that  ③ it  ④ what',
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation: `【出題意図】
形式主語 it（仮の主語）を使った構文を問う問題。I think (that) it is〜 の形が正解。

【解説】
この文は「I think [that] it is very important to keep our environment clean.」という構造。
it は to keep our environment clean（環境を清潔に保つこと）を指す形式主語（仮主語）。

・① this → I think this very important to〜 は文法的に成立しない
・② that → I think that very important to〜 も文法的に不自然
・③ it → 形式主語の it（✓）
・④ what → I think what very important to〜 は成立しない

日本語訳：「私は環境を清潔に保つことはとても大切だと思います。」

全体の構造：
I think [that it is very important to keep our environment clean].

【文法ポイント】
形式主語（仮主語）it の構文：
It is + 形容詞 + to + 動詞〜 = 〜することは（形容詞）だ
例：It is important to study English.
例：It is difficult to solve this problem.
例：It is fun to play tennis.

I think it is〜 / I find it〜 / I feel it〜 などの文の中にも使われる。

【入試頻出】
・It is easy to make friends online.
・I think it is wrong to tell a lie.
・He found it difficult to understand the text.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までに外国へ行ったことがありません。」',
    answer: 'I have never been to a foreign country. / I have never been abroad.',
    hint: '「〜したことがない」は現在完了の経験用法（have never + 過去分詞）。「外国へ行く」は go ではなく been to を使う。',
    explanation: `【出題意図】
現在完了形（経験）の否定文と、「外国へ行ったことがある」に be to〜 を使う慣用表現を問う問題。

【解説】
「〜したことがない」= have/has never + 過去分詞（現在完了・経験の否定）
「外国へ行ったことがある/ない」= have been to a foreign country / abroad

注意：
× I have never gone to a foreign country.（gone を使うと「行ったまま戻ってこない」ニュアンス）
○ I have never been to a foreign country.（been to = 行ったことがある）

別解：I have never been abroad.（abroad = 海外に、外国へ）

日本語訳の英訳：
I have never been to a foreign country. または I have never been abroad.

【文法ポイント】
be to〜：〜に行ったことがある（経験）
go to〜 の現在完了：have gone to〜 = 行ってしまった（今ここにいない）
have been to〜：（行って帰ってきた）経験・訪問経験

abroad：副詞「海外に・外国へ」（前置詞不要）
to abroad とは言わない。

【入試頻出】
・Have you ever been to Paris?
・She has been to many countries.
・I have never traveled abroad.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「彼女が書いたその手紙を私に見せてもらえませんか？」',
    answer: 'Could you show me the letter that she wrote? / Could you show me the letter she wrote?',
    hint: '「見せてもらえませんか」は Could you show me〜?、「彼女が書いた」は関係代名詞（that / which）で修飾。',
    explanation: `【出題意図】
依頼表現（Could you〜?）と関係代名詞（目的格）を組み合わせた英作文。

【解説】
2つのポイント：
1. 丁寧な依頼：Could you show me〜? = 「〜を見せていただけますか？」
   show + 人 + 物（第4文型）
2. 「彼女が書いた（手紙）」= the letter that/which she wrote（関係代名詞・目的格）
   → 目的格の関係代名詞は省略可

組み合わせ：
Could you show me the letter (that) she wrote?

別解：
・Could you let me see the letter she wrote?
・May I see the letter that she wrote?

日本語訳確認：「彼女が書いたその手紙を私に見せてもらえませんか？」

【文法ポイント】
Could you〜? = Can you〜? の丁寧版（より礼儀正しい依頼）
show + 人 + 物：人に物を見せる（第4文型 SVOO）
the letter (that) she wrote：関係代名詞（目的格）she wrote the letter の構造

【入試頻出】
・Could you show me your passport?
・This is the picture (that) I took in Kyoto.
・He showed me the photos he had taken.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私が子どものころ、この地域には木がたくさんありました。」',
    answer: 'When I was a child, there were many trees in this area. / There were a lot of trees in this area when I was a child.',
    hint: '「〜があった」は there was/were〜 の構文。子どものころ = when I was a child / young。複数なので were。',
    explanation: `【出題意図】
there is/are 構文の過去形と、when 節（〜のとき）を組み合わせた英作文。

【解説】
ポイント：
1. 「子どものころ」= when I was a child / when I was young
2. 「〜があった」= there were〜（trees は複数なので were）
3. 「この地域に」= in this area

組み合わせ：
When I was a child, there were many trees in this area.
または
There were a lot of trees in this area when I was a child.

注意：
× There was many trees（× trees は複数 → were）
× When I was a child, there had many trees（× there had は存在しない）

【文法ポイント】
there is/are 構文：「〜がある/いる」
・現在：There is + 単数名詞 / There are + 複数名詞
・過去：There was + 単数名詞 / There were + 複数名詞
・未来：There will be + 名詞
・現在完了：There have been + 複数名詞

「子どものころ」の表現：
・when I was a child（子どもだったとき）
・when I was young（若かったとき）
・in my childhood（子ども時代に）

【入試頻出】
・There were many students in the classroom.
・When I was a child, there was a big tree in the yard.
・There have been many changes in this city.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私があなたならば、その仕事を断るでしょう。」',
    answer: 'If I were you, I would refuse that job. / If I were you, I would turn down that job.',
    hint: '仮定法過去（現実とは逆の仮定）：If + 主語 + were/動詞の過去形, 主語 + would + 動詞原形。I were が正しい（I was ではない）。',
    explanation: `【出題意図】
仮定法過去（If I were you, I would〜）の形を問う英作文。入試英作文最頻出構文の一つ。

【解説】
「もし私があなたならば」= 現実と異なる仮定（実際には私はあなたではない）→ 仮定法過去を使う

仮定法過去の形：
If + 主語 + 動詞の過去形（be動詞は were）, 主語 + would / could / might + 動詞原形

重要：If I were you〜（× If I was you は入試では不正解）
仮定法では be 動詞は人称に関わらず were を使う（口語では was も使われるが、入試では were が標準）。

「断る」= refuse / turn down（どちらも可）

完成した文：
If I were you, I would refuse that job.
= If I were you, I would turn down that job.

【文法ポイント】
仮定法過去：現在または未来の事実に反する仮定
If + 主語 + 過去形（were）, 主語 + would + 動詞原形
・If I had more time, I would study abroad.（もっと時間があれば留学するのに）
・If she were here, she would help us.（彼女がここにいれば助けてくれるのに）

【入試頻出】
・If I were you, I would apologize.
・If I had a million dollars, I would travel around the world.
・If she were taller, she could be a model.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「この映画は若者だけでなく、お年寄りにも人気があります。」',
    answer: 'This movie is popular not only with young people but also with old people. / This movie is popular not only among young people but also among elderly people.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。「〜に人気がある」は popular with/among〜。',
    explanation: `【出題意図】
相関接続詞 not only A but also B（〜だけでなく…も）の構文と、popular with/among〜 を使った英作文。

【解説】
2つのポイント：
1. 「〜だけでなく…も」= not only A but also B
2. 「〜に人気がある」= be popular with〜 または be popular among〜

組み合わせ：
This movie is popular not only with young people but also with old people.
または
This movie is popular not only among young people but also among elderly people.

「お年寄り」= old people / elderly people（より丁寧）/ senior citizens

注意：not only A but also B の A と B は文法的に同じ形（並列）である必要がある。

【文法ポイント】
相関接続詞：
・not only A but also B：AだけでなくBも
・both A and B：AもBも
・either A or B：AかBのどちらか
・neither A nor B：AもBも〜ない

popular with / popular among：
・with：特定の人（be popular with children）
・among：グループの中で（be popular among students）

【入試頻出】
・This book is popular not only with children but also with adults.
・She is loved by not only her family but also her friends.
・This song is popular among teenagers.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_47',
    subject: 'eigo',
    passage: `Many people think that learning English is difficult, but there are some easy ways to improve your skills. First, try to watch English movies or TV shows with subtitles. This can help you understand natural conversation. Second, keep a diary in English every day. Even a few sentences are fine. Writing every day helps you build your vocabulary and grammar skills. Third, try to speak with native speakers or language exchange partners. Do not be afraid to make mistakes. Mistakes are actually a great way to learn. If you continue these habits, your English will improve much faster than you think.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っているものを1つ選べ。\n① 英語の映画は字幕なしで見るべきだ。\n② 日記は毎日たくさんの文を書かなければならない。\n③ 間違いを犯すことは英語学習の良い方法の一つだ。\n④ ネイティブとのスピーキングは上級者のみにすすめられる。',
    answer: '③ 間違いを犯すことは英語学習の良い方法の一つだ。',
    hint: '本文中の "Mistakes are actually a great way to learn." という文を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「字幕なしで見るべきだ」→ 本文には "with subtitles（字幕付きで）" とあるので×
② 「たくさんの文を書かなければならない」→ 本文には "Even a few sentences are fine.（数文でも大丈夫）" とあるので×
③ 「間違いを犯すことは英語学習の良い方法」→ 本文に "Mistakes are actually a great way to learn."（間違いは実際にとても良い学び方だ）とある（✓）
④ 「上級者のみにすすめられる」→ 本文にそのような記述はなく、全体的に誰でも実践できる方法として紹介されている（×）

【文法ポイント】
内容一致問題のアプローチ：
1. 選択肢を先に読んでキーワードを把握
2. 本文で該当箇所を探す
3. 本文の語句と選択肢の語句を慎重に比較（言い換えに注意）

否定・過度な主張・本文にない情報 → 誤答パターンの典型

【入試頻出】
内容一致問題では：
・本文にない情報を含む選択肢は×
・「すべて」「〜のみ」「必ず」等の過度な表現に注意
・本文の言い換え表現に気づくことが正解への鍵`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_48',
    subject: 'eigo',
    passage: `Recycling is one of the most important things we can do to protect our planet. When we recycle paper, plastic, and glass, we save energy and reduce waste. For example, recycling one ton of paper can save 17 trees. However, many people still throw away things that could be recycled. One reason is that they do not know which items can be recycled. Another reason is that it is sometimes inconvenient. To solve these problems, local governments should make recycling easier and teach people why it is important. Each of us can make a difference if we try.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文中の下線部 "these problems" が指す内容として最も適切なものを選べ。\n① リサイクルにかかるコストと労力\n② リサイクルできるものを知らないことと、不便なこと\n③ 紙・プラスチック・ガラスのリサイクル方法\n④ エネルギーの節約と廃棄物の削減',
    answer: '② リサイクルできるものを知らないことと、不便なこと',
    hint: '"these problems" は直前に述べられた2つの理由（One reason〜, Another reason〜）を指す。',
    explanation: `【出題意図】
指示語（these problems）が何を指すかを本文から特定する指示語問題。入試長文読解の頻出問題形式。

【解説】
指示語の前後を確認する：
"these problems" の直前には：
・"One reason is that they do not know which items can be recycled."（どれがリサイクルできるか知らない）
・"Another reason is that it is sometimes inconvenient."（時に不便なこと）

この2つが「these problems」が指す内容。
→ ② 「リサイクルできるものを知らないことと、不便なこと」が正解。

① リサイクルのコスト・労力：本文に記述なし（×）
③ リサイクル方法：直接指していない（×）
④ エネルギー節約・廃棄物削減：these problems の前ではなくさらに前の話（×）

【文法ポイント】
指示語問題のアプローチ：
1. 指示語（this / these / it / they / them）が出たら直前の文を確認
2. 指示語の数（単数・複数）と性質（人・物・出来事）を確認
3. 指示語を含む文に「指示内容」を代入して意味が通るか確認

these = 複数 → 直前の2つの理由が対応

【入試頻出】
・「this / these が指すものを選べ」→ 直前の内容を探す
・「it が指すものを選べ」→ 単数名詞・前文の内容を探す
・段落の最初の this / these は前段落の内容をまとめることが多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_49',
    subject: 'eigo',
    passage: `In Japan, many elderly people live alone. This is becoming a serious social problem. Some communities have started programs to help these people. For example, volunteers visit the homes of elderly people every week to check on them. Some neighborhoods have also created community centers where people can meet and talk. These programs are helping elderly people feel less lonely and more connected to their communities. Experts say that feeling connected to others is very important for both mental and physical health. They believe that more support systems like these are needed in the future.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の主題として最も適切なものを選べ。\n① 高齢者の一人暮らしが日本で増えている数値的な報告\n② 地域社会が高齢者の孤独に対処するための取り組みとその効果\n③ ボランティア活動が日本の若者に与える影響\n④ 高齢化社会に対応するための政府の政策',
    answer: '② 地域社会が高齢者の孤独に対処するための取り組みとその効果',
    hint: '本文全体の流れ（問題提起→取り組みの紹介→効果→専門家の意見）を把握して、何が最も中心的に述べられているかを考える。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. 問題提起：日本で高齢者の一人暮らしが増え、深刻な社会問題になっている
2. 取り組みの紹介：地域がボランティア訪問・コミュニティセンターなどのプログラムを始めた
3. 効果：孤独感が減り、コミュニティとのつながりが感じられるようになっている
4. 専門家の意見：つながりは心身の健康に重要。今後もこのような支援が必要

全体を通して「地域の取り組みと効果」が中心テーマ → ②が正解

① 数値的な報告：本文に数値は含まれていない（×）
③ 若者への影響：本文に記述なし（×）
④ 政府の政策：本文にあるのは地域・コミュニティの取り組みであり、政府の政策ではない（×）

【文法ポイント】
主題問題（main topic / main idea）のアプローチ：
1. 冒頭と末尾を特に注意深く読む（主題は最初か最後に述べられることが多い）
2. 繰り返し登場するキーワードを見つける（→ elderly people, community, programs, connected）
3. 選択肢が本文の一部のみに対応している場合は主題ではない

【入試頻出】
・主題問題では「一番多く書かれていること」を選ぶ
・本文の一部しか触れていない選択肢は不正解になることが多い
・過度に具体的・数値的な選択肢は主題にならないことが多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_50',
    subject: 'eigo',
    passage: `Technology has changed the way we communicate. In the past, people wrote letters and waited for days or even weeks to receive a reply. Today, we can send messages and receive answers within seconds using smartphones and the internet. Social media platforms allow us to share our lives with friends and family around the world instantly. However, some people worry that technology is making our relationships less personal. They say that face-to-face communication is being replaced by digital messages. While technology has many benefits, it is important to balance online and offline communication to maintain strong human connections.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っていないものを1つ選べ。\n① 過去は手紙が届くまでに数日〜数週間かかることがあった。\n② スマートフォンとインターネットにより、数秒でメッセージを送受信できる。\n③ 一部の人はデジタルメッセージが対面コミュニケーションを完全に補完していると考えている。\n④ テクノロジーはコミュニケーション方法を変えた。',
    answer: '③ 一部の人はデジタルメッセージが対面コミュニケーションを完全に補完していると考えている。',
    hint: '本文では「一部の人は対面コミュニケーションがデジタルメッセージに置き換えられつつあることを心配している」と述べている。選択肢③が本文の内容と合っているか確認する。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」という誤文識別型の読解問題。細部の読み取りと選択肢の正確な解釈が必要。

【解説】
各選択肢を本文と照合する：
① 「数日〜数週間かかることがあった」→ 本文に "waited for days or even weeks" とある（✓ 本文と一致）
② 「数秒でメッセージを送受信できる」→ 本文に "receive answers within seconds" とある（✓ 本文と一致）
③ 「デジタルメッセージが対面コミュニケーションを完全に補完している」→ 本文には "face-to-face communication is being replaced by digital messages"（対面コミュニケーションが置き換えられつつある）とあり、これを「心配している」のが "some people"。「補完している」（complement）ではなく「置き換えられている」（replace）という批判的な見方を述べている。「完全に補完している」という肯定的な記述は本文にない（× 本文と不一致）
④ 「テクノロジーはコミュニケーション方法を変えた」→ 本文の冒頭 "Technology has changed the way we communicate." そのまま（✓ 本文と一致）

正解：③

【文法ポイント】
「合っていないものを選べ」問題のアプローチ：
1. 選択肢の語句を一つずつ本文と照合
2. 「言い換え」に気をつける（置き換え=replace vs 補完=complement は異なる！）
3. 本文にない情報・過度な主張・事実の歪曲を含む選択肢が正解（不一致の選択肢）

replace（置き換える）≠ complement（補完する）→ この語彙の違いが解答の鍵

【入試頻出】
・「合っていないものを選べ」では本文の語句と選択肢の語句を丁寧に比較する
・本文の否定表現と選択肢の肯定表現（またはその逆）に注意
・「完全に」「すべて」「必ず」などの強調語は誤答パターンに多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
