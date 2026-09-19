import type { Question } from './questions';

export const kokoNyushiEigo50: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  She ( ) the piano for three hours when I arrived.',
    choices: ['① plays', '② played', '③ has played', '④ had been playing'],
    answer: '④ had been playing',
    hint: '「私が着いたとき」という過去の時点より前から続いていた動作を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「She ( ) the piano for three hours when I arrived.」の空所に入る適切な時制を選ぶ。\n【なぜ過去完了進行形になるのか】「私が着いたとき」という過去の時点よりさらに前から「ピアノを弾き続けていた」という継続動作を表すには、過去のある時点までの継続を表す過去完了進行形（had been＋動詞のing形）を使う必要があるから。\n【ポイント1】I arrived（私が着いたとき）は過去の1つの時点。その時点よりも前から継続していた動作を表すには、さらに過去を示す時制が必要。\n【ポイント2】①plays（現在形）、②played（過去形、継続の意味が出ない）、③has played（現在完了形、過去の基準点には使えない）はどれも文脈に合わない。\n【ポイント3】④had been playing（過去完了進行形）が正解。「私が着いたとき、彼女は3時間ピアノを弾き続けていた」という意味になる。\n【答え】④ had been playing\n【確かめ】「when＋過去形」の文で、主節に過去完了（進行）形が使われる典型パターンであることを確認する。\n【よくあるまちがい】has played（現在完了形）を選んでしまう。現在完了は「現在」を基準にするので、過去の基準点（I arrived）には使えない。\n【ここが絶対】過去のある時点よりもさらに前から、その時点まで継続していた動作には過去完了進行形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  You ( ) finish the report by tomorrow.',
    choices: ['① must', '② should', '③ have to', '④ need'],
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
    question: '次の（　）内に最も適切な語形を選べ。  This book ( ) by many students every year.',
    choices: ['① reads', '② is read', '③ was read', '④ has read'],
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
    question: '次の（　）内に最も適切な語を選べ。  Mt. Fuji is ( ) mountain in Japan.',
    choices: ['① high', '② higher', '③ the highest', '④ most high'],
    answer: '③ the highest',
    hint: '「日本で一番〜」は最上級。最上級の前には the が必要。',
    explanation:
      '【何を聞かれているか】「Mt. Fuji is ( ) mountain in Japan.」の空所に入る適切な比較表現を選ぶ。\n【なぜthe highestになるのか】「in Japan（日本で）」という範囲の中で「一番〜」を表すには最上級を使い、最上級には必ずtheをつけるという決まりがあるから。\n【ポイント1】①high（原級、比較なし）、②higher（比較級、2つを比べるとき使う）はどちらも「一番」の意味を表せない。\n【ポイント2】③the highest（最上級）が正解。「一番高い」という意味になる。\n【ポイント3】④most high（最上級の作り方の誤り）。highは-est型の形容詞なのでmostは使わない。比較級・最上級の作り方：1・2音節の一部は-er/-est、2音節以上はmore/most。\n【答え】③ the highest\n【確かめ】the highestのtheが抜けていないかを確認する。最上級には必ずtheが必要。\n【よくあるまちがい】④most highのように、-est型の形容詞にmostをつけてしまう。\n【ここが絶対】最上級には必ずtheが必要。形容詞の音節の長さによって-est型かmost型かが決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I went to the library ( ) study English.',
    choices: ['① for', '② so', '③ to', '④ in order'],
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
    question: '次の（　）内に最も適切な語を選べ。  He enjoyed ( ) soccer with his friends.',
    choices: ['① play', '② to play', '③ playing', '④ played'],
    answer: '③ playing',
    hint: 'enjoy の後ろには動名詞（〜ing）が来る。',
    explanation:
      '【何を聞かれているか】「He enjoyed ( ) soccer with his friends.」の空所に入る適切な形を選ぶ。\n【なぜplayingになるのか】enjoyは動名詞（-ing）だけを目的語に取り、不定詞（to＋原形）は目的語に取らないという決まりがあるから。\n【ポイント1】①play（原形）、②to play（不定詞）はどちらもenjoyの後ろには使えない。\n【ポイント2】③playing（動名詞）が正解。enjoy＋動名詞の形。\n【ポイント3】④played（過去形）は目的語の位置には使えない。動名詞のみを目的語に取る動詞にはほかにfinish、stop、mind、give up、practiceなどがある。\n【答え】③ playing\n【確かめ】enjoyのあとが動詞のing形になっているかを確認する。\n【よくあるまちがい】enjoyのあとにto playを続けてしまう。enjoyは不定詞を取らない。\n【ここが絶対】enjoyは動名詞のみを目的語に取る動詞として覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I ( ) here for five years by next March.',
    choices: ['① will live', '② have lived', '③ will have lived', '④ lived'],
    answer: '③ will have lived',
    hint: '「来年3月までには」という未来の時点での完了を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「I ( ) here for five years by next March.」の空所に入る適切な時制を選ぶ。\n【なぜwill have livedになるのか】「来年3月までには」という未来のある時点で「5年間住んでいることになる」という継続の完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】by next March（来年3月までには）は未来の時点を示す目印の語句。\n【ポイント2】①will live（単純未来）、②have lived（現在完了、未来の時点には使えない）、④lived（過去形）はどれも文脈に合わない。\n【ポイント3】③will have lived（未来完了）が正解。「来年3月までには、私はここに5年間住んでいることになる」という意味。\n【答え】③ will have lived\n【確かめ】by next Marchのような未来の時点を示す語句と、will have＋過去分詞の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】have lived（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点（by next March）には使えない。\n【ここが絶対】未来のある時点での完了・継続にはwill have＋過去分詞（未来完了形）を使う。目印はby〜、by the time〜、when〜など。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If it ( ) tomorrow, we will cancel the picnic.',
    choices: ['① rains', '② will rain', '③ rained', '④ is raining'],
    answer: '① rains',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation:
      '【何を聞かれているか】「If it ( ) tomorrow, we will cancel the picnic.」の空所に入る適切な語を選ぶ。\n【なぜrainsになるのか】条件を表すif節の中では、未来のことであってもwillを使わず現在形を使うという決まりがあるから。\n【ポイント1】if節・when節などの副詞節の中では、未来のことでも現在形で表す。②will rainはif節の中では使えない。\n【ポイント2】③rained（過去形）は仮定法になってしまい、④is raining（進行形）は文脈に合わない。①rains（現在形）が正解。\n【ポイント3】同じルールが使われる接続詞：when（〜するとき）、until（〜まで）、as soon as（〜したらすぐ）、before（〜する前に）、after（〜した後）。\n【答え】① rains\n【確かめ】主節にwillが使われている（we will cancel）ことと、if節が現在形（rains）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwillを入れてIf it will rain tomorrowとしてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This letter ( ) in French.',
    choices: ['① writes', '② is written', '③ was writing', '④ has write'],
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
    question: '次の（　）内に最も適切な語を選べ。  She is ( ) than her sister.',
    choices: ['① tall', '② more tall', '③ taller', '④ tallest'],
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
    question: '次の（　）内に最も適切な語を選べ。  I want ( ) a doctor in the future.',
    choices: ['① be', '② being', '③ to be', '④ to being'],
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
    question: '次の（　）内に最も適切な語を選べ。  Stopping ( ) is important for our health.',
    choices: ['① smoke', '② to smoke', '③ smoking', '④ smoked'],
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
    question: '次の（　）内に最も適切な前置詞を選べ。  She has been interested ( ) music since childhood.',
    choices: ['① at', '② with', '③ in', '④ about'],
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
    question: '次の（　）内に最も適切な語を選べ。  Please ( ) care of my dog while I am away.',
    choices: ['① make', '② have', '③ take', '④ give'],
    answer: '③ take',
    hint: 'take care of〜 で「〜の世話をする」という熟語。',
    explanation:
      '【何を聞かれているか】「Please ( ) care of my dog while I am away.」の空所に入る適切な動詞を選ぶ。\n【なぜtakeになるのか】「〜の世話をする」という意味は、動詞takeを使ったtake care of〜という決まったイディオムで表すから。\n【ポイント1】take care of〜は「〜の世話をする、〜に気をつける」という重要イディオム。\n【ポイント2】①make care of、②have care of、④give care ofはどれも存在しない表現。\n【ポイント3】takeを含む頻出熟語：take a look at〜（〜を見る）、take part in〜（〜に参加する）、take place（行われる）、take off（脱ぐ、離陸する）。\n【答え】③ take\n【確かめ】take care of my dogで「私の犬の世話をする」という意味になっているかを確認する。\n【よくあるまちがい】make care ofのように、他の動詞をあてはめてしまう。\n【ここが絶対】「〜の世話をする」はtake care of〜という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I am looking ( ) my glasses. Have you seen them?',
    choices: ['① after', '② for', '③ at', '④ into'],
    answer: '② for',
    hint: 'look for〜 は「〜を探す」という意味の熟語。',
    explanation:
      '【何を聞かれているか】「I am looking ( ) my glasses. Have you seen them?」の空所に入る適切な前置詞を選ぶ。\n【なぜforになるのか】「〜を探す」という意味を表すには、動詞lookのあとに前置詞forをつけたlook for〜という句動詞を使う必要があるから。\n【ポイント1】「眼鏡を探している」という文脈から、look for〜（〜を探す）を選ぶ。\n【ポイント2】①look after〜は「〜の世話をする」、③look at〜は「〜を見る」、④look into〜は「〜を調べる」で、どれも文脈に合わない。\n【ポイント3】lookの句動詞まとめ：look like〜（〜に似ている）、look forward to〜ing（〜を楽しみにしている）。\n【答え】② for\n【確かめ】look forを「〜を探す」という意味で文に当てはめ、文全体の意味が通ることを確認する。\n【よくあるまちがい】look at（見る）とlook for（探す）を混同してしまう。\n【ここが絶対】look＋前置詞の句動詞は、前置詞ごとに意味が決まっているのでセットで覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We arrived ( ) Osaka at noon.',
    choices: ['① to', '② at', '③ in', '④ on'],
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
    question: '次の文と意味が最も近いものを選べ。  She is able to speak three languages.',
    choices: ['① She can speak three languages.', '② She should speak three languages.', '③ She must speak three languages.', '④ She will speak three languages.'],
    answer: '① She can speak three languages.',
    hint: 'be able to = can（〜できる・能力）の言い換え。',
    explanation:
      '【何を聞かれているか】「She is able to speak three languages.」と意味が最も近い文を選ぶ。\n【なぜcanが同義になるのか】be able to doは「〜することができる」という能力・可能性を表す表現で、助動詞canとほぼ同じ意味になるから。\n【ポイント1】①can speak→be able to speakと同義。②should speak（〜すべきだ）、③must speak（〜しなければならない）、④will speak（〜するだろう）はどれも意味がちがう。\n【ポイント2】can＝be able to（〜できる）。canには過去形couldがあるが、be able toはすべての時制で使える。過去：was/were able to、未来：will be able to（will canとは言えない）。\n【ポイント3】完了形ではhave been able toを使う。\n【答え】① She can speak three languages.\n【確かめ】他の選択肢（should、must、will）がそれぞれ「べき」「ねばならない」「だろう」という別の意味を表していることを見直す。\n【よくあるまちがい】未来のbe able toをwill canのように誤って表現してしまう。\n【ここが絶対】can＝be able to。ただしwill canとは言えず、will be able toを使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  He is different ( ) his brother in personality.',
    choices: ['① from', '② with', '③ to', '④ than'],
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
    question: '次の（　）内に最も適切な語を選べ。  I ( ) up early every morning to exercise.',
    choices: ['① wake', '② get', '③ rise', '④ stand'],
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
    question: '次の（　）内に最も適切な語を選べ。  The train ( ) at 8:30 every morning.',
    choices: ['① leaves', '② is left', '③ leave', '④ has left'],
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
    question: '次の（　）内に最も適切な語を選べ。  The girl ( ) is singing on the stage is my cousin.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation:
      '【何を聞かれているか】「The girl ( ) is singing on the stage is my cousin.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞The girl（少女）は人で、関係代名詞節の中でis singing（歌っている）の主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がThe girl（人）で、関係代名詞節内でis singingの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】関係代名詞のまとめ：人（主格who、目的格whom、所有格whose）、物（主格・目的格which、所有格whose/of which）。thatはwho/whichの代わりに使えるが、whoseや前置詞の後ろには使えない。\n【答え】① who\n【確かめ】whoのあとに動詞（is singing）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This is the book ( ) I bought yesterday.',
    choices: ['① who', '② which', '③ whom', '④ where'],
    answer: '② which',
    hint: '先行詞は「物（本）」。関係代名詞節内で bought の目的語になっている。',
    explanation:
      '【何を聞かれているか】「This is the book ( ) I bought yesterday.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhichになるのか】先行詞the book（本）は物で、関係代名詞節の中でI bought（　）の目的語の役割をしているため、先行詞が物・目的格のときに使うwhichを選ぶ必要があるから。\n【ポイント1】先行詞がthe book（物）で、関係代名詞節内でI boughtの目的語になっている（目的格）。\n【ポイント2】①whoは先行詞が人、③whomは先行詞が人・目的格、④whereは関係副詞で、どれも文脈に合わない。\n【ポイント3】whichは省略も可能で、thatに置きかえることもできる：This is the book (that) I bought yesterday.\n【答え】② which\n【確かめ】whichのあとにI bought（主語＋動詞）が続いている（目的語の役割）ことを確認する。\n【よくあるまちがい】先行詞が物なのにwhoを選んでしまう。\n【ここが絶対】目的格の関係代名詞は省略できる。先行詞が物ならwhich、人ならwhom（thatはどちらにも使える）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I know the city ( ) she was born.',
    choices: ['① which', '② who', '③ where', '④ when'],
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
    explanation:
      '【何を聞かれているか】「I have a friend. His father is a famous musician.」を関係代名詞を使って1文にする。\n【なぜwhoseを使うのか】2つ目の文のHis（彼の）がa friend（1つ目の文の名詞）の所有を表しているため、この所有の関係を表す所有格の関係代名詞whoseに置きかえる必要があるから。\n【ポイント1】先行詞を特定する：a friend（人）。\n【ポイント2】His（所有格）をwhoseに置きかえ、先行詞a friendの直後に置く。\n【ポイント3】I have a friend whose father is a famous musician.（私にはお父さんが有名なミュージシャンである友達がいる）。whose節の構造は「先行詞＋whose＋名詞＋動詞〜」。\n【答え】I have a friend whose father is a famous musician.\n【確かめ】whoseのあとにfather（名詞）、is（動詞）と続いているかを確認する。\n【よくあるまちがい】whoseのかわりにwhoを使ってしまう。所有の関係にはwhoseを使う。\n【ここが絶対】whoseは先行詞（人・物どちらも可）の所有格を表す関係代名詞。',
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
    explanation:
      '【何を聞かれているか】「Where does she live?」（あなたは彼女がどこに住んでいるか知っていますか？）を間接疑問文に書きかえる。\n【なぜdoesが消えるのか】疑問文が他の文（Do you know〜）の一部に組み込まれると、疑問文特有の助動詞doesを使わず、ふつうの文と同じ〈疑問詞＋主語＋動詞〉の語順に戻すというルールがあるから。\n【ポイント1】疑問詞Whereはそのまま使う。\n【ポイント2】疑問詞の後ろを「主語＋動詞」の平叙文語順に変える。doesは消えて、代わりに動詞に3単現のsがつく（lives）。\n【ポイント3】全体をDo you know＋間接疑問の形にする。Do you know where she lives?\n【答え】Do you know where she lives?\n【確かめ】doesが消えて、動詞がliveではなくlivesになっているかを確認する。\n【よくあるまちがい】Do you know where does she live?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の語順は〈疑問詞＋主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) the next bus comes?',
    choices: ['① when', '② which', '③ where', '④ how'],
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
    question:
      '次の語を並べ替えて正しい英文を作れ。\n（ know / you / do / he / where / lives ）\n「彼がどこに住んでいるか知っていますか？」',
    answer: 'Do you know where he lives?',
    hint: '間接疑問文：疑問詞（where）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation:
      '【何を聞かれているか】know / you / do / he / where / lives を並べ替えて「彼がどこに住んでいるか知っていますか？」という英文を作る。\n【なぜこの語順になるのか】全体はDo you know〜?という疑問文だが、knowの目的語になる部分（間接疑問）は疑問文の語順ではなく、〈疑問詞＋主語＋動詞〉という平叙文の語順にする必要があるから。\n【ポイント1】全体の骨組みはDo you know〜?という疑問文。\n【ポイント2】knowの目的語（間接疑問）はwhere he lives（疑問文の語順ではなく平叙文語順）。\n【ポイント3】組み立てるとDo you know where he lives?になる。\n【答え】Do you know where he lives?\n【確かめ】whereのあとがdoes he liveではなくhe lives（平叙文語順）になっているかを確認する。\n【よくあるまちがい】Do you know where does he live?のように疑問文の語順のままにしてしまう。\n【ここが絶対】全体が疑問文でも、中に組み込まれた間接疑問の部分は平叙文の語順にする。',
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
    explanation:
      '【何を聞かれているか】enough / not / to / old / he / is / drive を並べ替えて「彼は車を運転するのに十分な年齢ではない。」という英文を作る。\n【なぜenoughを形容詞のあとに置くのか】「〜するのに十分〜だ」は〈形容詞＋enough＋to動詞〉という決まった語順で表し、enoughは必ず形容詞のあとに置くというルールがあるから。\n【ポイント1】「〜するのに十分〜だ」は主語＋be＋形容詞＋enough＋to＋動詞原形の形。enoughは形容詞のあとに置く（enough oldは誤り）。\n【ポイント2】否定文ではnotがbe動詞のあとに来る。He is not old enough to drive.\n【ポイント3】反対の意味を表すtoo＋形容詞＋to動詞（〜すぎて〜できない）とセットで覚える（例：She is too young to drive.＝She is not old enough to drive.と同じ意味）。\n【答え】He is not old enough to drive.\n【確かめ】enoughがoldのあとに置かれているか（enough oldになっていないか）を確認する。\n【よくあるまちがい】enough oldのように、enoughを形容詞の前に置いてしまう。\n【ここが絶対】enoughは必ず形容詞・副詞のあとに置く。',
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
    question:
      '次の語を並べ替えて正しい英文を作れ。\n（ I / will / go / out / after / finishing / my / homework ）\n「私は宿題を終えた後、出かけます。」',
    answer: 'I will go out after finishing my homework.',
    hint: 'after の後には動名詞（〜ing）が来る。after + 動名詞 = 〜した後で。',
    explanation:
      '【何を聞かれているか】I / will / go / out / after / finishing / my / homework を並べ替えて「私は宿題を終えた後、出かけます。」という英文を作る。\n【なぜafterのあとが動名詞になるのか】前置詞のあとには名詞・動名詞が来るという決まりがあり、不定詞（to＋原形）は前置詞のあとには置けないため、「〜した後で」はafter＋動名詞（〜ing）の形にする必要があるから。\n【ポイント1】前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜した後で」＝after＋動名詞（〜ing）。\n【ポイント2】I will go out after finishing my homework.（＝After finishing my homework, I will go out.と同じ意味）。\n【ポイント3】同じパターン：before＋ing（〜する前に）、without＋ing（〜せずに）、for＋ing（〜したことで）。\n【答え】I will go out after finishing my homework.\n【確かめ】afterのあとがfinish（原形）やto finish（不定詞）ではなくfinishing（動名詞）になっているかを確認する。\n【よくあるまちがい】after to finishのように、前置詞のあとに不定詞を置いてしまう。\n【ここが絶対】前置詞のあとに動詞を続けるときは必ず動名詞（-ing）にする。',
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
    explanation:
      '【何を聞かれているか】I / the / woman / saw / yesterday / is / the / who / teacher を並べ替えて「私が昨日会った女性はその先生です。」という英文を作る。\n【なぜwhoが目的格として使えるのか】whoは本来主格の関係代名詞だが、口語では目的格（whomの代わり）としてもよく使われ、先行詞The womanのうしろに「who I saw yesterday」という節を置いて修飾できるから。\n【ポイント1】文の骨格はThe woman is the teacher.（その女性は先生だ）。\n【ポイント2】修飾部はwho I saw yesterday（私が昨日会った）。ここでのwhoはsawの目的語にあたる目的格の働きをしている。\n【ポイント3】組み合わせるとThe woman who I saw yesterday is the teacher.になる。＝The woman (whom/that) I saw yesterday is the teacher.（省略も可）。\n【答え】The woman who I saw yesterday is the teacher.\n【確かめ】関係代名詞節（who I saw yesterday）が先行詞The womanの直後に置かれ、そのあとに主節の動詞is the teacherが続いているかを確認する。\n【よくあるまちがい】関係代名詞節を先行詞から離れた位置に置いてしまう。\n【ここが絶対】関係代名詞節は必ず先行詞の直後に置く。',
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
    explanation:
      '【何を聞かれているか】to / easy / this / understand / enough / is / problem / for / students / all を並べ替えて「この問題はすべての生徒が理解できるほど簡単だ。」という英文を作る。\n【なぜfor＋人が入るのか】「〜が…するのに十分〜だ」と、動作をする人を明示するには、〈形容詞＋enough＋for＋人＋to＋動詞原形〉という構文を使い、for＋人が不定詞の意味上の主語を示すから。\n【ポイント1】構文は主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形。\n【ポイント2】This problem is easy enough for all students to understand.（この問題はすべての生徒が理解できるほど簡単だ）。\n【ポイント3】反対の意味を表す〈too＋形容詞＋for＋人＋to＋動詞〉（〜すぎて…できない）とセットで覚える（例：The problem is too difficult for students to solve.）。\n【答え】This problem is easy enough for all students to understand.\n【確かめ】for all studentsがenoughとtoの間に正しく置かれているかを確認する。\n【よくあるまちがい】for all studentsを文の最後に置いてしまい、enough to understand for all studentsのような不自然な語順にしてしまう。\n【ここが絶対】「形容詞＋enough＋for＋人＋to＋動詞」の語順を1つのまとまりとして覚える。',
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
    question: '次の対話の（　）に最も適切な文を選べ。  A: Would you like some more tea? B: ( )',
    choices: ['① No, I don\'t.', '② Yes, please. Thank you.', '③ I\'d like tea.', '④ Yes, I would like.'],
    answer: '② Yes, please. Thank you.',
    hint: 'Would you like〜? は「〜はいかがですか」という丁寧な申し出。適切な受け方を選ぶ。',
    explanation:
      '【何を聞かれているか】「Would you like some more tea?」に対する適切な返答を選ぶ。\n【なぜ「Yes, please. Thank you.」が正しいのか】Would you like〜?は「〜はいかがですか」という丁寧な申し出の表現で、受けるときはYes, please.、断るときはNo, thank you.という決まった返答をするから。\n【ポイント1】①No, I don\'t.はWould you like〜?への返答としては不自然（否定にはNo, thank you.を使う）。\n【ポイント2】③I\'d like tea.は申し出への返答としてはずれており、新たなリクエストのように聞こえる。④Yes, I would like.はlikeのあとに目的語が必要。\n【ポイント3】②Yes, please. Thank you.が正しい受け答え。申し出を断るときはNo, thank you.を使う。\n【答え】② Yes, please. Thank you.\n【確かめ】Would you like〜?（申し出）とDo you like〜?（好みをたずねる）を混同していないかを確認する。\n【よくあるまちがい】Would you like〜?への否定をNo, I don\'t.にしてしまう。\n【ここが絶対】申し出への返答はYes, please.（受ける）／No, thank you.（断る）で覚える。',
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
    explanation:
      '【何を聞かれているか】「How long does it take to get to Tokyo Station from here?」への適切な返答を選ぶ。\n【なぜIt takes about thirty minutes by train.が正しいのか】How long does it take to〜?は「〜するのにどのくらい時間がかかるか」を尋ねる表現で、これにはIt takes＋時間という所要時間を答える形で返す決まりがあるから。\n【ポイント1】①about ten kilometersは距離を答えており、How far〜?への返答にあたる。\n【ポイント2】③You should go by bus.は提案であり、質問（所要時間）の答えになっていない。④The station is very big.は無関係。\n【ポイント3】②It takes about thirty minutes by train.が正しい。It takes＋時間＋to＋動詞〜＝「〜するのに〜の時間がかかる」。\n【答え】② It takes about thirty minutes by train.\n【確かめ】質問がHow long（時間）を尋ねているのに対し、選んだ返答が時間を答えているかを確認する。\n【よくあるまちがい】How long〜?とHow far〜?を混同し、距離を答えてしまう。\n【ここが絶対】所要時間を尋ねるHow long does it take to〜?にはIt takes＋時間で答える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: I\'m going to take the English test tomorrow, but I\'m not confident. B: ( ) You\'ve studied really hard.',
    choices: ['① Don\'t worry.', '② That\'s too bad.', '③ I\'m sorry to hear that.', '④ Never mind.'],
    answer: '① Don\'t worry.',
    hint: '後に続く「You\'ve studied really hard.（一生懸命勉強したじゃないか）」という励ましの言葉に合う返答を選ぶ。',
    explanation:
      '【何を聞かれているか】「I\'m going to take the English test tomorrow, but I\'m not confident.」に対するBの返答（このあとYou\'ve studied really hard.と続く）に合う表現を選ぶ。\n【なぜDon\'t worry.が正しいのか】Aが不安を口にしていることに対し、Bはそのあと「一生懸命勉強したじゃないか」と励ましているため、その前置きとしては「心配しないで」という励ましの表現が自然につながるから。\n【ポイント1】①Don\'t worry.（心配しないで）は励ましの表現で、後に続くYou\'ve studied really hard.（一生懸命勉強したじゃないか）と自然につながる。\n【ポイント2】②That\'s too bad.（それは残念だね）と③I\'m sorry to hear that.（それは残念です）はどちらも同情・慰めの表現で、励ましの流れには合わない。\n【ポイント3】④Never mind.（気にしないで）は軽い謝罪への返答で、この文脈には不自然。\n【答え】① Don\'t worry.\n【確かめ】選んだ返答のあとにYou\'ve studied really hard.が自然に続くかを確認する。\n【よくあるまちがい】②That\'s too bad.のように、同情の表現を励ましの場面で使ってしまう。\n【ここが絶対】対話文の空所は、その後に続く文とのつながりを見て、共感なのか励ましなのかを判断する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: May I use your dictionary? B: ( ) A: Thank you.',
    choices: ['① Sure, go ahead.', '② No, you may not use it.', '③ I don\'t have a dictionary.', '④ Yes, you may go.'],
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
    question: '次の英文の（　）に入る最も適切な語を選べ。  I have never ( ) sushi before.',
    choices: ['① eat', '② ate', '③ eaten', '④ eating'],
    answer: '③ eaten',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。eat の過去分詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「I have never ( ) sushi before.」の空所に入る適切な形を選ぶ。\n【なぜeatenになるのか】neverを使った現在完了形の経験用法「一度も〜したことがない」は、have/has＋過去分詞の形にする必要があり、eatの過去分詞はeatenだから。\n【ポイント1】neverは現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形はhave/has＋過去分詞。\n【ポイント2】eatの活用：eat（原形）→ate（過去形）→eaten（過去分詞）。①eat（原形）、②ate（過去形）はhaveのあとに使えない。\n【ポイント3】④eating（現在分詞）はhave been eatingなら現在完了進行形になるが、この文には合わない。③eaten（過去分詞）が正解。\n【答え】③ eaten\n【確かめ】haveのあとに過去分詞eatenが続いているかを確認する。\n【よくあるまちがい】have ateのように、haveのあとに過去形をそのまま続けてしまう。\n【ここが絶対】現在完了形はhave/has＋過去分詞。不規則動詞の活用（eat-ate-eaten）を正確に覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  The concert will be held ( ) Sunday evening.',
    choices: ['① in', '② at', '③ on', '④ by'],
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
    question: '次の英文の（　）に入る最も適切な語句を選べ。  She asked me ( ) the door.',
    choices: ['① open', '② to open', '③ opening', '④ opened'],
    answer: '② to open',
    hint: 'ask + 人 + to do（人に〜するよう頼む）という構文。',
    explanation:
      '【何を聞かれているか】「She asked me ( ) the door.」の空所に入る適切な形を選ぶ。\n【なぜto openになるのか】「人に〜するよう頼む」はask＋人＋to doという決まった構文で表し、人のあとには必ず不定詞（to＋原形）が続くから。\n【ポイント1】ask＋人＋to do＝「人に〜するよう頼む」という重要構文。\n【ポイント2】①open（原形のみ）、③opening（動名詞）、④opened（過去分詞）はどれもask＋人のあとの形として使えない。\n【ポイント3】同じ仲間の構文：tell＋人＋to do（人に〜するよう言う）、want＋人＋to do（人に〜してほしい）、allow＋人＋to do（人が〜するのを許可する）。\n【答え】② to open\n【確かめ】She asked me to open the door.という文全体を読み、「彼女は私にドアを開けるよう頼んだ」という意味になっているかを確認する。\n【よくあるまちがい】ask＋人のあとに原形をそのまま続けてしまう。\n【ここが絶対】ask＋人＋to doの形では、人のあとに必ずtoが必要。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  I think ( ) very important to keep our environment clean.',
    choices: ['① this', '② that', '③ it', '④ what'],
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation:
      '【何を聞かれているか】「I think ( ) very important to keep our environment clean.」の空所に入る適切な語を選ぶ。\n【なぜitになるのか】to keep our environment clean（環境を清潔に保つこと）という長い内容を先に置くと文のバランスが悪くなるため、その内容を指す形式主語itを先に置いて、本当の中身をあとに回すという英語の決まりがあるから。\n【ポイント1】this、that、whatはこの位置に置いても文法的に成立しない。\n【ポイント2】③it（形式主語）が正解。itはto keep our environment cleanを指す。この文はthink＋it＋（is）＋形容詞＋to不定詞という形（あるいはI think that it is very important to〜のthatが省略された形）と理解できる。\n【ポイント3】形式主語itの基本構文：It is＋形容詞＋to＋動詞〜＝「〜することは（形容詞）だ」（例：It is important to study English.）。\n【答え】③ it\n【確かめ】itがto keep our environment cleanを指していることを確認する。\n【よくあるまちがい】thisやthatを使ってしまう。形式主語には必ずitを使う。\n【ここが絶対】「〜することは…だ」を表すときは、形式主語itを使い、本当の中身（to不定詞）は後ろに置く。',
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
    explanation:
      '【何を聞かれているか】「私は今までに外国へ行ったことがありません。」を英語に訳す。\n【なぜbeenを使うのか】「〜に行ったことがある（ない）」という経験を表すときは、goではなくbe動詞の過去分詞been toを使うのが決まりで、have goneを使うと「行ってしまって今はいない」という別の意味になってしまうから。\n【ポイント1】「〜したことがない」＝have/has never＋過去分詞（現在完了・経験の否定）。\n【ポイント2】「外国へ行ったことがある（ない）」＝have been to a foreign country / abroad。have gone to a foreign country（行ってしまった）とは意味が異なる。\n【ポイント3】abroadは副詞「海外に・外国へ」で前置詞は不要（to abroadとは言わない）。\n【答え】I have never been to a foreign country. / I have never been abroad.\n【確かめ】beenが使われている（goneになっていない）ことを確認する。\n【よくあるまちがい】I have never gone to a foreign country.としてしまう。goneは「行ってしまって今ここにいない」という意味になる。\n【ここが絶対】「〜に行ったことがある」という経験はhave been to〜で表す。',
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
    explanation:
      '【何を聞かれているか】「彼女が書いたその手紙を私に見せてもらえませんか？」を英語に訳す。\n【なぜCould you〜?とthat/whichを組み合わせるのか】丁寧な依頼にはCould you〜?を使い、「彼女が書いた」という説明を加えるには、the letterのうしろに関係代名詞（目的格）でwrote節をつなげる必要があるから。\n【ポイント1】丁寧な依頼：Could you show me〜?＝「〜を見せていただけますか？」。show＋人＋物（第4文型）。\n【ポイント2】「彼女が書いた（手紙）」＝the letter that/which she wrote（関係代名詞・目的格）。目的格の関係代名詞は省略も可能。\n【ポイント3】組み合わせるとCould you show me the letter (that) she wrote?になる。\n【答え】Could you show me the letter that she wrote? / Could you show me the letter she wrote?\n【確かめ】the letterのあとにshe wrote（主語＋動詞）が続いており、writeの目的語がthe letterであることを確認する。\n【よくあるまちがい】Could you〜?のかわりにCan you〜?を使ってしまい、ていねいさが弱くなる（誤りではないが、より丁寧なのはCould you〜?）。\n【ここが絶対】Could you〜?はCan you〜?の丁寧版。目的格の関係代名詞は省略できる。',
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
    explanation:
      '【何を聞かれているか】「もし私があなたならば、その仕事を断るでしょう。」を英語に訳す。\n【なぜwereを使うのか】「もし私があなたならば」は現実とは異なる仮定（実際には私はあなたではない）なので、仮定法過去を使い、be動詞は主語に関係なくwereにするという決まりがあるから。\n【ポイント1】仮定法過去の形：If＋主語＋動詞の過去形（be動詞はwere）, 主語＋would/could/might＋動詞原形。\n【ポイント2】If I were you〜（If I was youは入試では不正解とされる）。仮定法では人称に関わらずwereを使う。\n【ポイント3】「断る」＝refuseまたはturn down。If I were you, I would refuse that job.\n【答え】If I were you, I would refuse that job. / If I were you, I would turn down that job.\n【確かめ】be動詞がwasではなくwereになっているかを確認する。\n【よくあるまちがい】If I was you, I would refuse that job.のようにwasを使ってしまう。\n【ここが絶対】仮定法過去のif節ではbe動詞は必ずwereを使う。',
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
    explanation:
      '【何を聞かれているか】「この映画は若者だけでなく、お年寄りにも人気があります。」を英語に訳す。\n【なぜnot only A but also Bを使うのか】「〜だけでなく…も」という意味は、相関接続詞not only A but also Bという決まった形で表し、「〜に人気がある」はbe popular with/among〜で表すから。\n【ポイント1】「〜だけでなく…も」＝not only A but also B。AとBは文法的に同じ形（並列）にする必要がある。\n【ポイント2】「〜に人気がある」＝be popular with〜（特定の人）またはbe popular among〜（グループの中で）。\n【ポイント3】組み合わせるとThis movie is popular not only with young people but also with old people.になる。「お年寄り」はold people／elderly people（より丁寧）。\n【答え】This movie is popular not only with young people but also with old people. / This movie is popular not only among young people but also among elderly people.\n【確かめ】not only のあとと、but also のあとが同じ形（with young people／with old people）になっているかを確認する。\n【よくあるまちがい】not only とbut alsoのあとの形をそろえず、withとamongを混ぜて使ってしまう。\n【ここが絶対】not only A but also BのAとBは文法的に同じ形にする。',
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
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① 英語の映画は字幕なしで見るべきだ。', '② 日記は毎日たくさんの文を書かなければならない。', '③ 間違いを犯すことは英語学習の良い方法の一つだ。', '④ ネイティブとのスピーキングは上級者のみにすすめられる。'],
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
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文中の下線部 "these problems" が指す内容として最も適切なものを選べ。',
    choices: ['① リサイクルにかかるコストと労力', '② リサイクルできるものを知らないことと、不便なこと', '③ 紙・プラスチック・ガラスのリサイクル方法', '④ エネルギーの節約と廃棄物の削減'],
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
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① 高齢者の一人暮らしが日本で増えている数値的な報告', '② 地域社会が高齢者の孤独に対処するための取り組みとその効果', '③ ボランティア活動が日本の若者に与える影響', '④ 高齢化社会に対応するための政府の政策'],
    answer: '② 地域社会が高齢者の孤独に対処するための取り組みとその効果',
    hint: '本文全体の流れ（問題提起→取り組みの紹介→効果→専門家の意見）を把握して、何が最も中心的に述べられているかを考える。',
    explanation:
      '【何を聞かれているか】長文を読んで、本文の主題として最も適切なものを選ぶ。\n【なぜ②が正解なのか】長文全体を通読すると「問題提起（高齢者の孤独）→地域の取り組みの紹介→効果→専門家の意見」という流れで一貫して「地域社会の取り組みとその効果」が述べられており、これが文章全体の中心テーマになっているから。\n【ポイント1】本文の構造を確認する：①問題提起（高齢者の一人暮らしの増加）②取り組みの紹介（ボランティア訪問・コミュニティセンター）③効果（孤独感の減少）④専門家の意見（つながりの重要性）。\n【ポイント2】①「数値的な報告」は本文に数値の記述がなく不適切。③「若者への影響」、④「政府の政策」も本文に記述がなく、一部にしか関係しない内容。\n【ポイント3】全体を通して中心にあるのは「地域の取り組みとその効果」なので②が正解。\n【答え】② 地域社会が高齢者の孤独に対処するための取り組みとその効果\n【確かめ】選んだ選択肢が、本文の一部だけでなく全体を通して繰り返し述べられている内容と一致しているかを確認する。\n【よくあるまちがい】本文の一部にしか書かれていない具体的な内容（数値や若者への影響など）を主題だと誤解してしまう。\n【ここが絶対】主題問題は「本文の一部」ではなく「文章全体を通して繰り返し述べられていること」を選ぶ。',
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
