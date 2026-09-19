import type { Question } from './questions';

export const kokoNyushiEigo2: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo2_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  It ( ) for three hours before we finally left the mountain.',
    choices: ['① snows', '② snowed', '③ has snowed', '④ had been snowing'],
    answer: '④ had been snowing',
    hint: '「山を出発した」という過去の時点より前から続いていた動作を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「It ( ) for three hours before we finally left the mountain.」の空所に入る適切な時制を選ぶ。\n【なぜ過去完了進行形になるのか】「私たちが山を出発した」という過去の時点よりさらに前から「雪が降り続いていた」という継続動作を表すには、過去のある時点までの継続を表す過去完了進行形（had been＋動詞のing形）を使う必要があるから。\n【ポイント1】we finally left the mountain（私たちがついに山を出発した）は過去の1つの時点。その時点よりも前から継続していた動作を表すには、さらに過去を示す時制が必要。\n【ポイント2】①snows（現在形）、②snowed（過去形、継続の意味が出ない）、③has snowed（現在完了形、過去の基準点には使えない）はどれも文脈に合わない。\n【ポイント3】④had been snowing（過去完了進行形）が正解。「私たちがついに山を出発する前、3時間ずっと雪が降り続いていた」という意味になる。\n【答え】④ had been snowing\n【確かめ】「for三時間」という継続の期間を表す語句と、過去完了進行形の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】has snowed（現在完了形）を選んでしまう。現在完了は現在を基準にするので、過去の基準点（we left the mountain）には使えない。\n【ここが絶対】過去のある時点よりもさらに前から、その時点まで継続していた動作には過去完了進行形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The weather forecast says it ( ) rain this afternoon, so take an umbrella just in case.',
    choices: ['① must', '② may', '③ can', '④ need'],
    answer: '② may',
    hint: '「〜かもしれない」という不確実な可能性を表す助動詞を選ぶ。',
    explanation: `【出題意図】
助動詞 may（推量・可能性）の用法を問う問題。must（強い確信）・can（能力・可能性）との違いを識別する。

【解説】
天気予報の内容は「〜するかもしれない」という不確実な予測。このような弱い可能性を表すには may を使う。
・① must → 「〜に違いない」という強い確信（根拠が強いときに使う）
・② may → 「〜かもしれない」という不確実な可能性（✓）
・③ can → 一般的な可能性・能力を表すが、この文脈では不自然
・④ need → 「〜する必要がある」（義務）で意味が異なる

日本語訳：「天気予報によると午後は雨が降るかもしれないので、念のため傘を持っていきなさい。」

【文法ポイント】
推量を表す助動詞の強さ：
must（ほぼ確実）＞ will（〜だろう）＞ may/might（〜かもしれない、五分五分以下）
「just in case（念のため）」は不確実な状況で使われる表現。

【入試頻出】
・It may snow tonight, so drive carefully.
・She may be at home now.
・The typhoon might change its course.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語形を選べ。  A name ( ) to each typhoon by international weather organizations every year.',
    choices: ['① gives', '② is given', '③ gave', '④ has give'],
    answer: '② is given',
    hint: '「名前」は与える側ではなく与えられる側。受動態の現在形を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形の正確な形を問う問題。能動態との区別も含む。

【解説】
主語は「A name（名前）」= 物。名前は「与える」のではなく「与えられる」側なので受動態が必要。「every year（毎年）」は習慣的な事実を示すので現在形。
・① gives → 能動態3単現（主語が人・組織のとき使う形）
・② is given → 受動態・現在形（✓）is + 過去分詞(given)
・③ gave → 能動態・過去形
・④ has give → 形が誤り（has been given なら現在完了受動態）

日本語訳：「毎年、国際的な気象機関によって台風一つ一つに名前がつけられる。」

【文法ポイント】
受動態の基本形：現在は is/am/are + 過去分詞、過去は was/were + 過去分詞。
give の変化：give → gave → given（過去分詞）

【入試頻出】
・This river is called the Tone River.
・Rice is grown in this area with the help of rain and sunshine.
・Warnings are sent to residents before a typhoon arrives.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  August is ( ) month of the year in most parts of Japan.',
    choices: ['① hot', '② hotter', '③ the hottest', '④ most hot'],
    answer: '③ the hottest',
    hint: '「1年で一番〜」は最上級。最上級の前には the が必要。',
    explanation:
      '【何を聞かれているか】「August is ( ) month of the year in most parts of Japan.」の空所に入る適切な比較表現を選ぶ。\n【なぜthe hottestになるのか】「of the year（1年のうちで）」という範囲の中で「一番暑い」を表すには最上級を使い、最上級には必ずtheをつける必要があるから。\n【ポイント1】①hot（原級）、②hotter（比較級）はどちらも「一番」の意味を表せない。\n【ポイント2】③the hottest（最上級）が正解。「一番暑い」という意味になる。\n【ポイント3】④most hot（最上級の作り方の誤り）。hotは-est型の形容詞（子音字を重ねてhottest）なのでmostは使わない。\n【答え】③ the hottest\n【確かめ】the hottestのtheが抜けていないかを確認する。\n【よくあるまちがい】④most hotのように、-est型の形容詞にmostをつけてしまう。\n【ここが絶対】最上級には必ずtheが必要。短い形容詞は-est型、長い形容詞はmost型になる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We got up very early ( ) the sunrise from the top of the hill.',
    choices: ['① for', '② so', '③ to', '④ in order'],
    answer: '③ to',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法。',
    explanation: `【出題意図】
不定詞の副詞的用法「〜するために（目的）」を問う問題。前置詞 for との混同を防ぐ。

【解説】
「早起きした」目的を表す文。「日の出を見るために」は不定詞の副詞的用法（目的）で表す。
・① for → 前置詞。for の後ろは名詞のみ（for watching なら可だが選択肢にない形）
・② so → 接続詞「だから」（so that なら目的を表せるが単独では不可）
・③ to → to + 動詞原形で「〜するために」（✓）
・④ in order → in order to なら目的を表せるが、in order 単独では不完全

日本語訳：「私たちは丘の頂上から日の出を見るためにとても早く起きた。」

【文法ポイント】
不定詞の副詞的用法（目的）：主語 + 動詞 + to + 動詞原形〜
in order to〜 は同じ意味だがより書き言葉的。

【入試頻出】
・She stayed up late to watch the meteor shower.
・He ran to the beach to see the rainbow.
・They went camping to enjoy the stars.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Every spring, many people in Japan enjoy ( ) under the cherry blossoms.',
    choices: ['① eat', '② to eat', '③ eating', '④ ate'],
    answer: '③ eating',
    hint: 'enjoy の後ろには動名詞（〜ing）が来る。',
    explanation:
      '【何を聞かれているか】「Every spring, many people in Japan enjoy ( ) under the cherry blossoms.」の空所に入る適切な形を選ぶ。\n【なぜeatingになるのか】enjoyは動名詞（-ing）だけを目的語に取り、不定詞（to＋原形）は目的語に取らないという決まりがあるから。\n【ポイント1】①eat（原形）、②to eat（不定詞）はどちらもenjoyの後ろには使えない。\n【ポイント2】③eating（動名詞）が正解。enjoy＋動名詞の形。\n【ポイント3】④ate（過去形）は目的語の位置には使えない。動名詞のみを目的語に取る動詞にはほかにfinish、stop、mind、practiceなどがある。\n【答え】③ eating\n【確かめ】enjoyのあとが動詞のing形になっているかを確認する。\n【よくあるまちがい】enjoyのあとにto eatを続けてしまう。\n【ここが絶対】enjoyは動名詞のみを目的語に取る動詞として覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  By the end of this month, the rainy season ( ) here.',
    choices: ['① will end', '② has ended', '③ will have ended', '④ ended'],
    answer: '③ will have ended',
    hint: '「今月末までには」という未来の時点での完了を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「By the end of this month, the rainy season ( ) here.」の空所に入る適切な時制を選ぶ。\n【なぜwill have endedになるのか】「今月末までには」という未来のある時点で「梅雨が終わっていることになる」という完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】by the end of this month（今月末までには）は未来の時点を示す目印の語句。\n【ポイント2】①will end（単純未来）、②has ended（現在完了、未来の時点には使えない）、④ended（過去形）はどれも文脈に合わない。\n【ポイント3】③will have ended（未来完了）が正解。「今月末までには、こちらの梅雨は終わっているだろう」という意味。\n【答え】③ will have ended\n【確かめ】by the end of〜のような未来の時点を示す語句と、will have＋過去分詞の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】has ended（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での完了にはwill have＋過去分詞（未来完了形）を使う。目印はby the time〜、by then、by the end of〜など。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If it ( ) heavily tomorrow, the outdoor festival will be canceled.',
    choices: ['① rains', '② will rain', '③ rained', '④ is raining'],
    answer: '① rains',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation:
      '【何を聞かれているか】「If it ( ) heavily tomorrow, the outdoor festival will be canceled.」の空所に入る適切な語を選ぶ。\n【なぜrainsになるのか】条件を表すif節の中では、未来のことでもwillを使わず現在形を使うという決まりがあるから。\n【ポイント1】if節などの副詞節の中では、未来のことでも現在形で表す。②will rainはif節の中では使えない。\n【ポイント2】③rained（過去形）は仮定法になってしまい、④is raining（進行形）は文脈に合わない。①rains（現在形）が正解。\n【ポイント3】同じルールが使われる接続詞：when（〜するとき）、until（〜まで）、as soon as（〜したらすぐ）。\n【答え】① rains\n【確かめ】主節にwillが使われている（the festival will be canceled）ことと、if節が現在形（rains）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwillを入れてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This old wooden bridge ( ) by a big flood twenty years ago.',
    choices: ['① destroys', '② was destroyed', '③ destroyed', '④ has destroy'],
    answer: '② was destroyed',
    hint: '橋は「壊す」側ではなく「壊される」側。過去の出来事なので過去形の受動態を選ぶ。',
    explanation: `【出題意図】
受動態の過去形を正確に使えるかを問う問題。能動態との混同を防ぐ。

【解説】
「この橋」は洪水によって「壊される」側なので受動態が必要。「twenty years ago（20年前）」という具体的な過去の一時点を示す語句があるので過去形を使う。
・① destroys → 能動態3単現（主語が橋では意味が通らない）
・② was destroyed → 受動態・過去形（✓）
・③ destroyed → 能動態・過去形（意味が通らない）
・④ has destroy → 形が誤り

日本語訳：「この古い木の橋は20年前の大きな洪水で壊された。」

【文法ポイント】
受動態の過去形：was/were + 過去分詞
by〜（〜によって）で動作主を示す。
destroy の変化：destroy → destroyed → destroyed（規則動詞）

【入試頻出】
・Many houses were damaged by the earthquake and the typhoon.
・The crops were ruined by the long drought.
・The old tree was blown down by the strong wind.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This winter is ( ) than last winter, according to the weather experts.',
    choices: ['① cold', '② more cold', '③ colder', '④ coldest'],
    answer: '③ colder',
    hint: '2つの冬を比べるときは比較級（-er）を使う。than が手がかり。',
    explanation: `【出題意図】
比較級の形（-er型）を正確に使えるかを問う問題。than との組み合わせも確認。

【解説】
than があれば比較級が必要。cold は1音節の形容詞なので -er 型で比較級を作る。
・① cold → 原級（than とセットでは使えない）
・② more cold → 誤った比較級（1音節の形容詞に more は使わない）
・③ colder → 正しい比較級（✓）
・④ coldest → 最上級（than とセットでは使わない）

日本語訳：「気象専門家によると、今年の冬は去年の冬よりも寒い。」

【文法ポイント】
比較級の形：
・1音節：-er（cold→colder, warm→warmer）
・3音節以上：more +形容詞（beautiful→more beautiful）

【入試頻出】
・This summer is hotter than last summer.
・The typhoon this year was stronger than the one last year.
・Autumn leaves are more colorful in the mountains than in the city.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I want ( ) the northern lights in Iceland someday.',
    choices: ['① see', '② seeing', '③ to see', '④ seen'],
    answer: '③ to see',
    hint: 'want の後ろに来る不定詞の名詞的用法（〜したい）を選ぶ。',
    explanation: `【出題意図】
不定詞の名詞的用法（want to + 動詞原形）の形を正確に使えるかを問う問題。

【解説】
want は「〜したい」という意味で、後ろに不定詞（to + 動詞原形）を取る。
・① see → 原形のみ（want の後ろに動詞原形は直接来ない）
・② seeing → 動名詞（want は動名詞を目的語に取らない）
・③ to see → 不定詞（✓）want to see〜 = 〜を見たい
・④ seen → 過去分詞（そのままでは使えない）

日本語訳：「私はいつかアイスランドでオーロラを見たい。」

【文法ポイント】
不定詞のみを目的語に取る動詞（want / hope / wish / decide / plan + to 動詞）

【入試頻出】
・She hopes to visit a snowy country next winter.
・He decided to plant more trees in his garden.
・They plan to study the effects of climate change.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  People all over the world should stop ( ) down forests to fight climate change.',
    choices: ['① cut', '② to cut', '③ cutting', '④ cuts'],
    answer: '③ cutting',
    hint: 'stop の後ろに来る動名詞（〜するのをやめる）を選ぶ。',
    explanation: `【出題意図】
stop + 動名詞（〜するのをやめる）の用法を問う問題。stop + 不定詞との意味の違いも確認。

【解説】
stop + 動名詞：「〜するのをやめる」という意味。この文では「森林を伐採するのをやめるべきだ」という意味になる。
・① cut → 原形（stop の目的語の位置に使えない）
・② to cut → stop to cut なら「切るために立ち止まる」という別の意味になってしまう
・③ cutting → 動名詞（✓）stop cutting = 伐採をやめる
・④ cuts → 3単現の形（目的語にはなれない）

日本語訳：「気候変動と闘うために、世界中の人々は森林の伐採をやめるべきだ。」

【文法ポイント】
stop + 動名詞：〜するのをやめる
stop + 不定詞：〜するために立ち止まる（意味が全く異なるので注意）

【入試頻出】
・We should stop wasting water during a drought.
・He stopped driving to reduce air pollution.（伐採をやめる文脈と対比して確認）
・Protecting forests is important for our future.（動名詞が主語になる例）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo2_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  Many small children are afraid ( ) thunder and lightning.',
    choices: ['① in', '② of', '③ with', '④ about'],
    answer: '② of',
    hint: 'be afraid の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be afraid of〜（〜を恐れる）の前置詞の用法を問う問題。

【解説】
be afraid of〜 は「〜を恐れる、〜が怖い」という意味のイディオム。前置詞 of が固定。
・① in → be interested in〜（〜に興味がある）に使う
・② of → be afraid of〜（✓）
・③ with → 別の熟語で使われる前置詞
・④ about → be worried about〜（〜を心配している）などに使う

日本語訳：「多くの幼い子どもたちは雷や稲光を恐れている。」

【文法ポイント】
前置詞を固定する重要熟語：
be afraid of〜：〜を恐れる
be worried about〜：〜を心配する
be surprised at〜：〜に驚く
be proud of〜：〜を誇りに思う

【入試頻出】
・She is afraid of strong winds.
・Don't be afraid of making mistakes.
・He was surprised at the sudden hailstorm.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I am really looking forward ( ) the first snow of the year.',
    choices: ['① to see', '② to seeing', '③ see', '④ seeing'],
    answer: '② to seeing',
    hint: 'look forward to のあとの to は前置詞なので、後ろには動名詞が来る。',
    explanation:
      '【何を聞かれているか】「I am really looking forward ( ) the first snow of the year.」の空所に入る適切な形を選ぶ。\n【なぜto seeingになるのか】look forward to〜のtoは不定詞のtoではなく前置詞のtoで、前置詞のあとには動名詞（-ing）が続くという決まりがあるから。\n【ポイント1】look forward to〜のtoは前置詞。前置詞のあとには動名詞（-ing）が来る。\n【ポイント2】①to see（toが不定詞になっている）、③see（原形のみ）、④seeing（toが抜けている）はどれも誤り。\n【ポイント3】②to seeing（前置詞to＋動名詞）が正解。同じ形の表現にbe used to〜ing（〜に慣れている）、be good at〜ing（〜が得意）がある。\n【答え】② to seeing\n【確かめ】look forward toのtoが不定詞ではなく前置詞であることを、あとに動名詞が続いていることから確認する。\n【よくあるまちがい】toを不定詞だと思い込み、あとに動詞の原形（see）を続けてしまう。\n【ここが絶対】look forward to〜ingは、toが前置詞であることに注意し、あとは必ず動名詞にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  The outdoor concert was canceled ( ) the sudden heavy rain.',
    choices: ['① because', '② due to', '③ so', '④ although'],
    answer: '② due to',
    hint: '後ろに名詞（句）が続く原因・理由を表す前置詞句を選ぶ。',
    explanation: `【出題意図】
原因・理由を表す due to〜（前置詞句）と because（接続詞）の使い分けを問う問題。

【解説】
because の後ろには「主語＋動詞」の文が必要だが、due to の後ろには名詞（句）が続く。この文では the sudden heavy rain という名詞句が続いているので due to が正しい。
・① because → 後ろに文が必要（because it rained suddenly なら可）
・② due to → 前置詞句、後ろに名詞（✓）
・③ so → 「だから」（結果を導く接続詞で、原因を示さない）
・④ although → 「〜だけれども」（逆接で意味が異なる）

日本語訳：「その屋外コンサートは突然の激しい雨のため中止になった。」

【文法ポイント】
原因・理由の表現：
・because + 文
・because of / due to + 名詞（句）

【入試頻出】
・The trip was delayed because of the typhoon.
・Many trains stopped due to the heavy snow.
・We stayed home because it was raining hard.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The weather forecaster said the rain would ( ) snow as the temperature dropped tonight.',
    choices: ['① turn into', '② turn on', '③ turn off', '④ turn up'],
    answer: '① turn into',
    hint: '「〜に変わる」という意味の句動詞を選ぶ。',
    explanation: `【出題意図】
句動詞 turn into〜（〜に変わる）の用法を問う問題。似た形の句動詞との識別。

【解説】
turn into〜 は「（形や状態が）〜に変化する」という意味。この文では「雨が雪に変わる」という変化を表す。
・① turn into → 〜に変わる（✓）
・② turn on → （電源などを）つける
・③ turn off → （電源などを）消す
・④ turn up → 音量を上げる、現れる

日本語訳：「気象予報士は、今夜気温が下がるにつれて雨は雪に変わるだろうと言った。」

【文法ポイント】
turn を使った句動詞：
・turn into〜：〜に変わる（状態・形の変化）
・turn out（to be）〜：〜だと判明する
・turn on/off：スイッチを入れる/切る

【入試頻出】
・The light rain gradually turned into a heavy storm.
・Water turns into ice below zero degrees.
・The clear sky suddenly turned into dark clouds.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  After the big storm, the whole town was ( ) with thick snow.',
    choices: ['① filled', '② covered', '③ full', '④ made'],
    answer: '② covered',
    hint: 'be covered with〜（〜で覆われている）という表現を選ぶ。',
    explanation:
      '【何を聞かれているか】「After the big storm, the whole town was ( ) with thick snow.」の空所に入る適切な語を選ぶ。\n【なぜcoveredになるのか】「（表面が）〜で覆われている」という状態を表すには、be covered with〜という決まったイディオムを使う必要があるから。\n【ポイント1】be covered with〜は「表面が〜で覆われている」状態を表す。\n【ポイント2】①filledはbe filled with〜（〜で満たされている、容器・空間に使う）、③fullはbe full of〜（withとは結びつかない）、④madeはbe made of〜（〜でできている）で、どれも文脈に合わない。\n【ポイント3】be＋過去分詞＋with/of〜の使い分け：be covered with〜（覆われている）、be filled with〜（満たされている）、be made of〜（材料）、be known for〜（〜で知られている）。\n【答え】② covered\n【確かめ】townの表面が雪で「覆われている」という状態を表すのにcoveredが適していることを確認する。\n【よくあるまちがい】be filled with〜と混同してfilledを選んでしまう。\n【ここが絶対】be covered with〜（覆われている）とbe filled with〜（満たされている）は意味がちがうので使い分ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This region is famous ( ) its beautiful autumn leaves.',
    choices: ['① of', '② for', '③ with', '④ at'],
    answer: '② for',
    hint: 'be famous の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
熟語 be famous for〜（〜で有名だ）の前置詞を問う問題。

【解説】
be famous for〜 は「〜で有名だ、〜で知られている」という意味のイディオム。前置詞 for が固定。
・① of → be famous の前置詞としては使わない
・② for → be famous for〜（✓）
・③ with → be famous with は存在しない
・④ at → be good at〜（〜が得意）などに使う

日本語訳：「この地域は美しい紅葉で有名だ。」

【文法ポイント】
be famous for〜：〜で有名だ（理由・特徴）
be known for〜：〜で知られている（ほぼ同義）
be famous as〜：〜として有名だ（職業・役割）

【入試頻出】
・Kyoto is famous for its beautiful autumn leaves.
・This lake is known for its clear water.
・He is famous as a weather forecaster.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  It took me a long time to get used ( ) the cold and dry weather here.',
    choices: ['① for', '② with', '③ to', '④ at'],
    answer: '③ to',
    hint: 'get used の後ろに来る前置詞を選ぶ（前置詞のあとは動名詞が続く形）。',
    explanation: `【出題意図】
熟語 get used to〜（〜に慣れる）の前置詞を問う問題。この to も前置詞であることが重要。

【解説】
get used to〜 は「〜に慣れる」という意味のイディオム。to は不定詞ではなく前置詞なので、後ろに名詞や動名詞が続く。
・① for → get used for は存在しない
・② with → get used with は存在しない
・③ to → get used to〜（✓）
・④ at → get used at は存在しない

日本語訳：「私がここの寒くて乾燥した天候に慣れるまでには長い時間がかかった。」

【文法ポイント】
get used to〜 / be used to〜：〜に慣れる（to は前置詞）
get used to doing：〜することに慣れる
※used to do（かつて〜したものだ）と形が似ているが意味が異なるので注意。

【入試頻出】
・She got used to living in a snowy country.
・I am used to waking up early even in winter.
・He is not used to such humid summers.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  During the long drought, the village ( ) drinking water.',
    choices: ['① ran out of', '② ran into', '③ ran away', '④ ran over'],
    answer: '① ran out of',
    hint: '「〜を使い果たす、〜が尽きる」という意味の句動詞を選ぶ。',
    explanation: `【出題意図】
句動詞 run out of〜（〜を使い果たす）の用法を問う問題。似た形の run 系句動詞との識別。

【解説】
run out of〜 は「（持っていたものが）尽きる、なくなる」という意味。干ばつで水が不足する状況にぴったり合う。
・① ran out of → 〜を使い果たした（✓）
・② ran into → 〜に偶然出会う、〜にぶつかる
・③ ran away → 逃げた
・④ ran over → （車などで）〜をひいた

日本語訳：「長い干ばつの間、その村は飲み水を使い果たした。」

【文法ポイント】
run を使った句動詞：
・run out of〜：〜を使い果たす、〜が尽きる
・run into〜：偶然出会う
・run away：逃げる

【入試頻出】
・We ran out of food during the flood.
・Farmers ran out of water to grow their crops.
・The town almost ran out of electricity during the heat wave.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo2_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  People ( ) live in snowy areas often use special tires in winter.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation:
      '【何を聞かれているか】「People ( ) live in snowy areas often use special tires in winter.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞People（人々）は人で、関係代名詞節の中でlive in snowy areas（雪の多い地域に住んでいる）の主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がPeople（人）で、関係代名詞節内でliveの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】関係代名詞まとめ：主格who（人）/which（物）/that（両方）、目的格whom（人）/which（物）/that（両方）、所有格whose（人・物）。\n【答え】① who\n【確かめ】whoのあとに動詞（live）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The article ( ) I read yesterday was about the effects of climate change.',
    choices: ['① who', '② which', '③ whom', '④ where'],
    answer: '② which',
    hint: '先行詞は「物（記事）」。関係代名詞節内で read の目的語になっている。',
    explanation:
      '【何を聞かれているか】「The article ( ) I read yesterday was about the effects of climate change.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhichになるのか】先行詞the article（記事）は物で、関係代名詞節の中でI read（　）の目的語の役割をしているため、先行詞が物・目的格のときに使うwhichを選ぶ必要があるから。\n【ポイント1】先行詞がthe article（物）で、関係代名詞節内でI readの目的語になっている（目的格）。\n【ポイント2】①whoは先行詞が人、③whomは先行詞が人・目的格、④whereは関係副詞で、どれも文脈に合わない。\n【ポイント3】whichは省略も可能で、thatに置きかえることもできる：The article (that) I read yesterday〜。\n【答え】② which\n【確かめ】whichのあとにI read（主語＋動詞）が続いている（目的語の役割）ことを確認する。\n【よくあるまちがい】先行詞が物なのにwhoを選んでしまう。\n【ここが絶対】目的格の関係代名詞は省略できる。先行詞が物ならwhich（thatはどちらにも使える）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I want to visit a country ( ) it snows almost all year round.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所（country）」で、関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 where（先行詞が場所）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「a country（国）」= 場所。節内では「it snows in the country」の前置詞 in の部分が関係副詞 where に変わった構造。
・① which → 物に使う関係代名詞（前置詞 in が必要：a country in which it snows）
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞（✓）
・④ when → 時を先行詞にとる関係副詞

関係副詞 where = 前置詞 + which：
a country where it snows = a country in which it snows

日本語訳：「私はほぼ一年中雪が降る国を訪れたい。」

【文法ポイント】
関係副詞まとめ：
・where：場所を表す先行詞（country / town / place）
・when：時を表す先行詞（day / season / year）
・why：理由を表す先行詞（reason）

【入試頻出】
・This is the town where the flood happened.
・I remember the year when the big typhoon hit.
・Tell me the reason why the sky turned orange.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI have never been to a country.\nIts winters are extremely long and cold.',
    answer: 'I have never been to a country whose winters are extremely long and cold.',
    hint: '2つの文をつなぐとき、Its（その国の）を所有格の関係代名詞 whose に変える。',
    explanation:
      '【何を聞かれているか】「I have never been to a country. Its winters are extremely long and cold.」を関係代名詞を使って1文にする。\n【なぜwhoseを使うのか】2つ目の文のIts（その国の）がa country（1つ目の文の名詞）の所有を表しているため、この所有の関係を表す所有格の関係代名詞whoseに置きかえる必要があるから。\n【ポイント1】先行詞を特定する：a country（物）。物の場合でもwhoseを使える点に注意。\n【ポイント2】Its（所有格）をwhoseに置きかえ、先行詞a countryの直後に置く。\n【ポイント3】I have never been to a country whose winters are extremely long and cold.（私は冬がとても長くて寒い国に行ったことがない）。\n【答え】I have never been to a country whose winters are extremely long and cold.\n【確かめ】whoseのあとにwinters（名詞）、are（動詞）と続いているかを確認する。\n【よくあるまちがい】先行詞が物（a country）だからwhichを使えると考え、whichのあとにIts（所有格）を残してしまう。\n【ここが絶対】whoseは先行詞が人でも物でも、その所有格を表すのに使える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_25',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) it usually starts snowing in this area?',
    choices: ['① what', '② when', '③ where', '④ why'],
    answer: '② when',
    hint: '「いつ雪が降り始めるか」という間接疑問文。時を尋ねる疑問詞を選ぶ。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞を文脈から選ぶ問題。疑問詞の意味の使い分けが目標。

【解説】
「Could you tell me ( ) it usually starts snowing〜?」= 「いつこの地域で雪が降り始めるか教えてもらえますか？」時期を尋ねているので when を使う。
・① what → 「何」物・事を尋ねる
・② when → 「いつ」時を尋ねる（✓）
・③ where → 「どこ」場所を尋ねる
・④ why → 「なぜ」理由を尋ねる

注意：it usually starts snowing は間接疑問文なので「主語＋動詞」の語順（疑問文語順の does it usually start では組み込めない）。

日本語訳：「この地域でいつ雪が降り始めるか教えていただけますか？」

【文法ポイント】
間接疑問文の疑問詞の使い分け：
・when：時、where：場所、why：理由、how：方法・程度

【入試頻出】
・Please tell me when the rainy season begins.
・I don't know where the storm is heading.
・Can you tell me how cold it gets in winter here?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_26',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：Why did the temperature drop so suddenly?\n「あなたはなぜ気温が急に下がったのか知っていますか？」',
    answer: 'Do you know why the temperature dropped so suddenly?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、did は消えて動詞が過去形になる。',
    explanation: `【出題意図】
間接疑問文（疑問詞 + 主語 + 動詞の語順）への書き換えを問う問題。語順の変化と時制の一致が最大のポイント。

【解説】
直接疑問文「Why did the temperature drop so suddenly?」を間接疑問文にする手順：
1. 疑問詞 Why はそのまま使う
2. 疑問詞の後ろは「主語 + 動詞」の平叙文語順に変える
3. did は消えて、動詞は過去形（dropped）に戻す
4. 全体を「Do you know + 間接疑問」にする

× Do you know why did the temperature drop so suddenly?（誤り）
○ Do you know why the temperature dropped so suddenly?（正解）

日本語訳：「あなたはなぜ気温が急に下がったのか知っていますか？」

【文法ポイント】
間接疑問文の語順：疑問詞 + 主語 + 動詞〜（平叙文語順）
過去の疑問文（did）を組み込む場合は、動詞を過去形に戻す。

【入試頻出】
・Do you know why the sky turned red at sunset?
・I wonder why it rained so heavily last night.
・Can you tell me why the leaves changed color so early this year?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo2_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ know / you / do / how / it / will / cold / be / tomorrow ）\n「明日どのくらい寒くなるか知っていますか？」',
    answer: 'Do you know how cold it will be tomorrow?',
    hint: '間接疑問文：疑問詞（how cold）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation:
      '【何を聞かれているか】know / you / do / how / it / will / cold / be / tomorrow を並べ替えて「明日どのくらい寒くなるか知っていますか？」という英文を作る。\n【なぜit will beという語順になるのか】全体はDo you know〜?という疑問文だが、knowの目的語になる部分（間接疑問）は疑問文の語順ではなく、〈疑問詞（how cold）＋主語＋動詞〉という平叙文の語順にする必要があるから。\n【ポイント1】全体の骨組みはDo you know〜?という疑問文。\n【ポイント2】knowの目的語（間接疑問）はhow cold it will be tomorrow（疑問文の語順ではなく平叙文語順）。\n【ポイント3】組み立てるとDo you know how cold it will be tomorrow?になる。\n【答え】Do you know how cold it will be tomorrow?\n【確かめ】how coldのあとがwill it beではなくit will be（平叙文語順）になっているかを確認する。\n【よくあるまちがい】Do you know how cold will it be tomorrow?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の中は、疑問詞（＋形容詞）のあとを〈主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ has / been / raining / it / since / this / morning / from ）\n「今朝からずっと雨が降り続いている。」',
    answer: 'It has been raining since this morning.',
    hint: '「今朝からずっと〜している」は現在完了進行形。since（〜以来）と from のどちらが正しいか判断する。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、since の使い方を問う問題。不要語の識別も含む。

【解説】
「this morning（今朝）」という起点を示すには since を使う。from は「〜から」という意味だが、この文脈の継続表現には使わない。
不要語：from（× It has been raining from this morning. は不自然）

正しい語順：
It has been raining since this morning.
（現在完了進行形 = have been + Ving）

日本語訳：「今朝からずっと雨が降り続いている。」

【文法ポイント】
since + 起点：since this morning / since last week / since 2020（〜以来）
現在完了進行形の構造：have/has + been + 動詞-ing（継続的な動作に使う）

【入試頻出】
・The wind has been blowing hard since last night.
・It has been snowing since noon.
・They have been waiting for the storm to pass since this afternoon.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / not / the / ice / is / thick / to / walk on ）\n「その氷は歩くのに十分な厚さではない。」',
    answer: 'The ice is not thick enough to walk on.',
    hint: '「〜するのに十分〜だ」は 形容詞 + enough + to 動詞 の語順。',
    explanation:
      '【何を聞かれているか】enough / not / the / ice / is / thick / to / walk on を並べ替えて「その氷は歩くのに十分な厚さではない。」という英文を作る。\n【なぜenoughを形容詞のあとに置くのか】「〜するのに十分〜だ」は〈形容詞＋enough＋to動詞〉という決まった語順で表し、enoughは必ず形容詞のあとに置くというルールがあるから。\n【ポイント1】「〜するのに十分〜だ」は主語＋be＋形容詞＋enough＋to＋動詞原形の形。enoughは形容詞のあとに置く（enough thickは誤り）。\n【ポイント2】否定文ではnotがbe動詞のあとに来る。The ice is not thick enough to walk on.\n【ポイント3】walk on〜（〜の上を歩く）という句動詞のonを忘れずに残す。反対の意味を表すtoo＋形容詞＋to動詞（〜すぎて〜できない）とセットで覚える。\n【答え】The ice is not thick enough to walk on.\n【確かめ】enoughがthickのあとに置かれているか、walk onのonが抜けていないかを確認する。\n【よくあるまちがい】walk onのonを忘れてwalkだけにしてしまう。\n【ここが絶対】enoughは必ず形容詞のあとに置く。句動詞の前置詞（walk onのonなど）を忘れずに残す。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ us / the / wind / brought / cool / air ）\n「その風は私たちに涼しい空気をもたらした。」',
    answer: 'The wind brought us cool air.',
    hint: 'bring + 人 + 物 の語順（第4文型 SVOO）を使う。',
    explanation:
      '【何を聞かれているか】us / the / wind / brought / cool / air を並べ替えて「その風は私たちに涼しい空気をもたらした。」という英文を作る。\n【なぜus cool airという語順になるのか】bring＋人＋物は「人に物を持ってくる」という第4文型（SVOO）の形で、間接目的語（人）を直接目的語（物）より先に置くという決まりがあるから。\n【ポイント1】bring＋人＋物＝人に物を持ってくる（第4文型）。The wind（S）+ brought（V）+ us（間接目的語）+ cool air（直接目的語）。\n【ポイント2】語順はThe wind brought us cool air.になる。\n【ポイント3】第3文型に書きかえるとThe wind brought cool air to us.（toを使う）になる。同じ仲間の動詞にgive、send、show、teachなどがある。\n【答え】The wind brought us cool air.\n【確かめ】us（人）がcool air（物）より先に置かれているかを確認する。\n【よくあるまちがい】brought cool air usのように、物を人より先に置いてしまう。\n【ここが絶対】bring＋人＋物の第4文型では、人（間接目的語）を先に、物（直接目的語）をあとに置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ home / will / we / go / after / watching / the fireworks ）\n「花火を見た後、私たちは家に帰ります。」',
    answer: 'We will go home after watching the fireworks.',
    hint: '前置詞 after の後には動名詞（〜ing）が来る。',
    explanation:
      '【何を聞かれているか】home / will / we / go / after / watching / the fireworks を並べ替えて「花火を見た後、私たちは家に帰ります。」という英文を作る。\n【なぜafterのあとが動名詞になるのか】前置詞のあとには名詞・動名詞が来るという決まりがあり、不定詞（to＋原形）は前置詞のあとには置けないため、「〜した後で」はafter＋動名詞（〜ing）の形にする必要があるから。\n【ポイント1】前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜した後で」＝after＋動名詞（〜ing）。\n【ポイント2】We will go home after watching the fireworks.（＝After watching the fireworks, we will go home.と同じ意味）。\n【ポイント3】同じパターン：before＋ing（〜する前に）、without＋ing（〜せずに）。\n【答え】We will go home after watching the fireworks.\n【確かめ】afterのあとがwatch（原形）やto watch（不定詞）ではなくwatching（動名詞）になっているかを確認する。\n【よくあるまちがい】after to watchのように、前置詞のあとに不定詞を置いてしまう。\n【ここが絶対】前置詞のあとに動詞を続けるときは必ず動名詞（-ing）にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ who / the scientist / climate / studies / is / famous ）\n「気候を研究しているその科学者は有名だ。」',
    answer: 'The scientist who studies climate is famous.',
    hint: '関係代名詞 who を使って先行詞「the scientist」を修飾する節を作る。',
    explanation:
      '【何を聞かれているか】who / the scientist / climate / studies / is / famous を並べ替えて「気候を研究しているその科学者は有名だ。」という英文を作る。\n【なぜwho studiesという語順になるのか】関係代名詞whoを使って、先行詞The scientistのうしろにwho studies climate（気候を研究している）という節を置くことで、The scientistを説明できるから。\n【ポイント1】文の骨格はThe scientist is famous.（その科学者は有名だ）。\n【ポイント2】修飾部はwho studies climate（気候を研究している）。ここでのwhoはstudiesの主語（主格）にあたる。\n【ポイント3】組み合わせるとThe scientist who studies climate is famous.になる。主節の動詞（is）は関係代名詞節のあとに続く。\n【答え】The scientist who studies climate is famous.\n【確かめ】関係代名詞節（who studies climate）が先行詞The scientistの直後に置かれ、そのあとに主節の動詞isが続いているかを確認する。\n【よくあるまちがい】関係代名詞節を先行詞から離れた位置に置いてしまう。\n【ここが絶対】関係代名詞節は必ず先行詞の直後に置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ shallow / the river / enough / is / for / children / to / cross ）\n「その川は子供が渡れるくらい浅い。」',
    answer: 'The river is shallow enough for children to cross.',
    hint: '「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。',
    explanation:
      '【何を聞かれているか】shallow / the river / enough / is / for / children / to / cross を並べ替えて「その川は子供が渡れるくらい浅い。」という英文を作る。\n【なぜfor＋人が入るのか】「〜が…するのに十分〜だ」と、動作をする人を明示するには、〈形容詞＋enough＋for＋人＋to＋動詞原形〉という構文を使い、for＋人が不定詞の意味上の主語を示すから。\n【ポイント1】構文は主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形。\n【ポイント2】The river is shallow enough for children to cross.（その川は子供が渡れるくらい浅い）。\n【ポイント3】反対の意味を表す〈too＋形容詞＋for＋人＋to＋動詞〉（〜すぎて…できない）とセットで覚える（例：The river is too deep for children to cross.）。\n【答え】The river is shallow enough for children to cross.\n【確かめ】for childrenがenoughとtoの間に正しく置かれているかを確認する。\n【よくあるまちがい】for childrenを文の最後に置いてしまう。\n【ここが絶対】「形容詞＋enough＋for＋人＋to＋動詞」の語順を1つのまとまりとして覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo2_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: Would you like to go on a picnic this weekend if it is sunny? B: ( )',
    choices: ['① No, I don\'t.', '② Yes, I\'d love to.', '③ I don\'t like sunny.', '④ Yes, I would like.'],
    answer: '② Yes, I\'d love to.',
    hint: 'Would you like to〜? は「〜しませんか」という誘いの表現。適切な受け方を選ぶ。',
    explanation:
      '【何を聞かれているか】「Would you like to go on a picnic this weekend if it is sunny?」への適切な返答を選ぶ。\n【なぜ「Yes, I\'d love to.」が正しいのか】Would you like to〜?は「〜しませんか」という丁寧な誘いの表現で、受けるときはYes, I\'d love to.、断るときはI\'d love to, but〜という決まった返答をするから。\n【ポイント1】①No, I don\'t.はWould you like to〜?への返答としては不自然。\n【ポイント2】③I don\'t like sunny.は質問への直接的な答えになっていない。④Yes, I would like.はlikeのあとに目的語が必要。\n【ポイント3】②Yes, I\'d love to.が正しい受け答え。I\'d love to.はI would love to (go).の省略形。\n【答え】② Yes, I\'d love to.\n【確かめ】Would you like to〜?（誘い）とDo you like〜?（好み）を混同していないかを確認する。\n【よくあるまちがい】Would you like to〜?への返答をNo, I don\'t.のようにしてしまう。\n【ここが絶対】誘いへの返答はYes, I\'d love to.（受ける）／I\'d love to, but〜（断る）で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: How long do you think this rain will last?\nB: ( )\n\n① It\'s about five kilometers away.\n② It should stop by evening, according to the forecast.\n③ You should bring an umbrella.\n④ The rain is falling very hard.',
    answer: '② It should stop by evening, according to the forecast.',
    hint: 'How long〜last? は「どのくらい続くか」という継続時間を尋ねる表現。',
    explanation:
      '【何を聞かれているか】「How long do you think this rain will last?」への適切な返答を選ぶ。\n【なぜ②が正しいのか】How long〜last?は「〜はどのくらい続くか」という継続時間を尋ねる表現で、これには継続する期間や終わる見込みを答える必要があるから。\n【ポイント1】①about five kilometers awayは距離を答えており、How far〜?への返答にあたる。\n【ポイント2】③You should bring an umbrella.はアドバイスであり、質問（継続時間）の答えになっていない。④The rain is falling very hard.は雨の強さの説明で質問とずれる。\n【ポイント3】②It should stop by evening, according to the forecast.が正しい。継続時間・終わりの見込みを答えている。shouldは「〜のはずだ」という推量の意味でも使われる。\n【答え】② It should stop by evening, according to the forecast.\n【確かめ】質問がHow long（継続時間）を尋ねているのに対し、選んだ返答が継続時間や終わりの見込みを答えているかを確認する。\n【よくあるまちがい】How long〜?とHow far〜?を混同し、距離を答えてしまう。\n【ここが絶対】継続時間を尋ねるHow long will〜last?には、続く期間や終わる見込みで答える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: I\'m worried the typhoon will ruin our school trip tomorrow. B: ( ) The forecast says it will pass by tonight.',
    choices: ['① Don\'t worry.', '② That\'s too bad.', '③ I\'m sorry to hear that.', '④ Never mind.'],
    answer: '① Don\'t worry.',
    hint: '後に続く「The forecast says it will pass by tonight.（予報では今夜には通り過ぎるそうです）」という励ましの言葉に合う返答を選ぶ。',
    explanation: `【出題意図】
励ましの表現と、会話の流れ・文脈から適切な応答を選ぶ問題。

【解説】
Aが「台風が明日の修学旅行を台無しにするのではと心配している」のに対し、Bは「予報では今夜には通り過ぎる」と安心させている。前置きとして最適なのは「Don't worry.（心配しないで）」。
・① Don't worry. → 心配しないで（励まし）（✓）
・② That's too bad. → それは残念だね（後の安心させる内容と矛盾する）
・③ I'm sorry to hear that. → それは残念です（同情。後の励ましと繋がりが弱い）
・④ Never mind. → 気にしないで（軽い謝りへの返答。励ましとしては不自然）

日本語訳：
A：台風が明日の修学旅行を台無しにしないか心配だよ。
B：心配しないで。予報では今夜には通り過ぎるそうだよ。

【文法ポイント】
励まし・安心させる表現：
・Don't worry. / Don't worry about it.：心配しないで
・Everything will be fine.：きっと大丈夫だよ

【入試頻出】
・Don't worry. The storm is getting weaker.
・I'm sure the weather will be perfect for the festival.
・Cheer up! We can still enjoy the trip indoors.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: May I open the window? It\'s getting hot in here. B: ( ) A: Thank you.',
    choices: ['① Sure, go ahead.', '② No, you may not open it.', '③ I don\'t have a window.', '④ Yes, you may go.'],
    answer: '① Sure, go ahead.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I open〜? = 「〜を開けてもいいですか？」という許可を求める丁寧な表現。
直後に「Thank you.（ありがとう）」とあるので、許可を与える返答が必要。
・① Sure, go ahead. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not open it. → 文法的には正しい拒否だがAが「Thank you」と言うことと矛盾する
・③ I don't have a window. → 状況から不自然
・④ Yes, you may go. → go（行く）は open（開ける）とは関係ない

日本語訳：
A：窓を開けてもいいですか？ここ、暑くなってきました。
B：もちろん、どうぞ。
A：ありがとう。

【文法ポイント】
許可を求める表現：May I〜?（最も丁寧）/ Can I〜? / Could I〜?
許可を与える表現：Sure. / Of course. / Go ahead.

【入試頻出】
・May I close the curtain? It's too sunny. — Sure, go ahead.
・Can I turn on the fan? — Of course.
・May I take a photo of the rainbow? — Certainly.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  I have never ( ) such a beautiful rainbow before.',
    choices: ['① see', '② saw', '③ seen', '④ seeing'],
    answer: '③ seen',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。see の過去分詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「I have never ( ) such a beautiful rainbow before.」の空所に入る適切な形を選ぶ。\n【なぜseenになるのか】neverを使った現在完了形の経験用法「一度も〜したことがない」は、have/has＋過去分詞の形にする必要があり、seeの過去分詞はseenだから。\n【ポイント1】neverは現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形はhave/has＋過去分詞。\n【ポイント2】seeの活用：see（原形）→saw（過去形）→seen（過去分詞）。①see（原形）、②saw（過去形）はhaveのあとに使えない。\n【ポイント3】④seeing（現在分詞）はhave been seeingなら別の意味になり、この文には合わない。③seen（過去分詞）が正解。\n【答え】③ seen\n【確かめ】haveのあとに過去分詞seenが続いているかを確認する。\n【よくあるまちがい】have sawのように、haveのあとに過去形をそのまま続けてしまう。\n【ここが絶対】現在完了形はhave/has＋過去分詞。不規則動詞の活用（see-saw-seen）を正確に覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  It started snowing ( ) New Year\'s Day this year.',
    choices: ['① in', '② at', '③ on', '④ by'],
    answer: '③ on',
    hint: '特定の日には前置詞 on を使う。',
    explanation:
      '【何を聞かれているか】「It started snowing ( ) New Year\'s Day this year.」の空所に入る適切な前置詞を選ぶ。\n【なぜonになるのか】New Year\'s Day（元日）のような特定の日を表すときは、前置詞onを使うという決まりがあるから。\n【ポイント1】①in（月・年・季節・時間帯に使う）、②at（時刻・特定の時点に使う）はどちらも「特定の日」には使わない。\n【ポイント2】③on（曜日・特定の日に使う）が正解。on New Year\'s Day、on Christmas Dayのように使う。\n【ポイント3】④by（期限「〜までに」）も文脈に合わない。時を表す前置詞まとめ：at＝時刻・時点、on＝曜日・日付、in＝月・年・季節。\n【答え】③ on\n【確かめ】New Year\'s Dayが「特定の日」にあたることから、onが正しいことを確認する。\n【よくあるまちがい】inやatを、日付を表す前置詞として使ってしまう。\n【ここが絶対】時を表す前置詞は、atは時刻・時点、onは曜日・日付、inは月・年・季節、と使い分ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  She asked me ( ) the windows before the storm arrived.',
    choices: ['① close', '② to close', '③ closing', '④ closed'],
    answer: '② to close',
    hint: 'ask + 人 + to do（人に〜するよう頼む）という構文。',
    explanation:
      '【何を聞かれているか】「She asked me ( ) the windows before the storm arrived.」の空所に入る適切な形を選ぶ。\n【なぜto closeになるのか】「人に〜するよう頼む」はask＋人＋to doという決まった構文で表し、人のあとには必ず不定詞（to＋原形）が続くから。\n【ポイント1】ask＋人＋to do＝「人に〜するよう頼む」という重要構文。\n【ポイント2】①close（原形のみ）、③closing（動名詞）、④closed（過去分詞）はどれもask＋人のあとの形として使えない。\n【ポイント3】同じ仲間の構文：tell＋人＋to do（人に〜するよう言う）、want＋人＋to do（人に〜してほしい）。\n【答え】② to close\n【確かめ】She asked me to close the windows.という文全体を読み、「彼女は私に窓を閉めるよう頼んだ」という意味になっているかを確認する。\n【よくあるまちがい】ask＋人のあとに原形をそのまま続けてしまう。\n【ここが絶対】ask＋人＋to doの形では、人のあとに必ずtoが必要。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  I think ( ) important to check the weather forecast before climbing a mountain.',
    choices: ['① this', '② that', '③ it', '④ what'],
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation:
      '【何を聞かれているか】「I think ( ) important to check the weather forecast before climbing a mountain.」の空所に入る適切な語を選ぶ。\n【なぜitになるのか】to check the weather forecast〜（天気予報を確認すること）という長い内容を先に置くと文のバランスが悪くなるため、その内容を指す形式主語itを先に置いて、本当の中身をあとに回すという英語の決まりがあるから。\n【ポイント1】this、that、whatはこの位置に置いても文法的に成立しない。\n【ポイント2】③it（形式主語）が正解。itはto check the weather forecast before climbing a mountainを指す。\n【ポイント3】形式主語itの基本構文：It is＋形容詞＋to＋動詞〜＝「〜することは（形容詞）だ」（例：It is important to prepare for natural disasters.）。\n【答え】③ it\n【確かめ】itがto check the weather forecast〜を指していることを確認する。\n【よくあるまちがい】thisやthatを使ってしまう。形式主語には必ずitを使う。\n【ここが絶対】「〜することは…だ」を表すときは、形式主語itを使い、本当の中身（to不定詞）は後ろに置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo2_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までにこんなに大雪を見たことがありません。」',
    answer: 'I have never seen such heavy snow before.',
    hint: '「〜したことがない」は現在完了の経験用法（have never + 過去分詞）。「こんなに大雪」は such heavy snow で表す。',
    explanation: `【出題意図】
現在完了形（経験）の否定文と、such + 形容詞 + 名詞（こんなに〜な…）の構文を組み合わせた英作文。

【解説】
「〜したことがない」= have/has never + 過去分詞（現在完了・経験の否定）
「こんなに大雪」= such heavy snow（such + 形容詞 + 名詞）

組み合わせ：
I have never seen such heavy snow before.

注意：such は a/an の前に置く点にも注意（such a big storm のように単数可算名詞の場合）。snow は不可算名詞なので a は不要。

日本語訳の英訳：
I have never seen such heavy snow before.

【文法ポイント】
such + (a/an) + 形容詞 + 名詞：「こんなに〜な…」
現在完了（経験）：have/has + never + 過去分詞 + before

【入試頻出】
・I have never experienced such a strong typhoon.
・She has never seen such a clear night sky.
・We have never had such a hot summer before.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「あの嵐の間に彼が撮ったその写真を見せてもらえませんか？」',
    answer: 'Could you show me the photo that he took during the storm? / Could you show me the photo he took during the storm?',
    hint: '「見せてもらえませんか」は Could you show me〜?、「彼が撮った」は関係代名詞（that / which）で修飾。',
    explanation:
      '【何を聞かれているか】「あの嵐の間に彼が撮ったその写真を見せてもらえませんか？」を英語に訳す。\n【なぜCould you〜?とthat/whichを組み合わせるのか】丁寧な依頼にはCould you〜?を使い、「彼が撮った」という説明を加えるには、the photoのうしろに関係代名詞（目的格）でtook節をつなげる必要があるから。\n【ポイント1】丁寧な依頼：Could you show me〜?＝「〜を見せていただけますか？」。show＋人＋物（第4文型）。\n【ポイント2】「彼が撮った（写真）」＝the photo that/which he took（関係代名詞・目的格）。目的格の関係代名詞は省略も可能。\n【ポイント3】「あの嵐の間に」＝during the storm（前置詞during＋名詞）。組み合わせるとCould you show me the photo (that) he took during the storm?になる。\n【答え】Could you show me the photo that he took during the storm? / Could you show me the photo he took during the storm?\n【確かめ】the photoのあとにhe took（主語＋動詞）が続いており、takeの目的語がthe photoであることを確認する。\n【よくあるまちがい】duringのかわりにwhile（あとに文が続く語）を使ってしまう。duringのあとは名詞。\n【ここが絶対】during＋名詞、while＋文、という使い分けを覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「太陽があまりにも眩しくて、私は目を開けていられない。」',
    answer: 'The sun is too bright for me to keep my eyes open. / The sun is so bright that I can\'t keep my eyes open.',
    hint: '「あまりにも〜すぎて…できない」は too〜to構文、または so〜that構文で表す。',
    explanation: `【出題意図】
too〜to構文（あまりにも〜すぎて…できない）と、so〜that構文への言い換えを問う英作文問題。

【解説】
「あまりにも〜すぎて…できない」の2つの表し方：
1. too + 形容詞 + for + 人 + to + 動詞：The sun is too bright for me to keep my eyes open.
2. so + 形容詞 + that + 主語 + can't + 動詞：The sun is so bright that I can't keep my eyes open.

どちらも同じ意味を表す重要な書き換えパターン。「目を開けていられない」= keep my eyes open（keep + O + C の第5文型）で表現する。

日本語訳確認：「太陽があまりにも眩しくて、私は目を開けていられない。」

【文法ポイント】
too + 形容詞 + for + 人 + to do = so + 形容詞 + that + 主語 + can't do
keep + O + 形容詞：Oを〜の状態に保つ（例：keep the door open）

【入試頻出】
・The wind was too strong for us to open the umbrella.
・The snow was so deep that we couldn't walk any farther.
・It was too cold for the children to play outside.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし今日晴れていたら、私たちは海に行くのに。」',
    answer: 'If it were sunny today, we would go to the beach.',
    hint: '現実とは異なる仮定（実際は晴れていない）を表す仮定法過去。be動詞は主語に関わらず were を使う。',
    explanation: `【出題意図】
仮定法過去（現在の事実に反する仮定）を使った英作文問題。If節のbe動詞にwereを使う点が最大のポイント。

【解説】
「もし今日晴れていたら〜のに」は、実際には晴れていない（雨や曇り）という現在の事実に反する仮定。このようなときは仮定法過去を使う。
形：If + 主語 + 過去形（were）, 主語 + would + 動詞原形

「晴れている」= be sunny（形容詞）なので、If節では be動詞の過去形を使うが、仮定法では主語が何であってもwereを使うのが原則。

完成した文：
If it were sunny today, we would go to the beach.

日本語訳確認：「もし今日晴れていたら、私たちは海に行くのに。」（実際は晴れていない）

【文法ポイント】
仮定法過去：現在または未来の事実に反する仮定
If + 主語 + 過去形（were）, 主語 + would + 動詞原形
・If it were not raining, we could have the picnic outside.
・If I lived in a warmer country, I would not need a winter coat.

【入試頻出】
・If the sky were clear, we could see the stars tonight.
・If it snowed here, the children would be very happy.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「この祭りは夏だけでなく、秋にも人気があります。」',
    answer: 'This festival is popular not only in summer but also in autumn.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。',
    explanation: `【出題意図】
相関接続詞 not only A but also B（〜だけでなく…も）の構文を使った英作文。

【解説】
「〜だけでなく…も」= not only A but also B
A と B の部分には文法的に同じ形（この文では前置詞句 in summer / in autumn）が並列される必要がある。

組み合わせ：
This festival is popular not only in summer but also in autumn.

注意：not only A but also B の A と B は品詞・形をそろえること（前置詞句なら前置詞句同士など）。

日本語訳確認：「この祭りは夏だけでなく、秋にも人気があります。」

【文法ポイント】
相関接続詞：
・not only A but also B：AだけでなくBも
・both A and B：AもBも
・either A or B：AかBのどちらか

【入試頻出】
・This flower blooms not only in spring but also in early summer.
・The typhoon affected not only the coast but also the mountain areas.
・Autumn leaves are loved not only in Japan but also around the world.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo2_47',
    subject: 'eigo',
    passage: `Weather forecasting has changed a lot over the past hundred years. In the past, people looked at the sky, felt the wind, and used their experience to guess the weather. Today, scientists use satellites, computers, and complex models to predict rain, snow, and typhoons days in advance. These forecasts help farmers decide when to plant crops, help airlines plan safe flights, and help cities prepare for storms. However, weather can still be difficult to predict perfectly, especially for sudden changes like local thunderstorms. Even with modern technology, experts say that weather forecasting will never be 100 percent accurate, because nature is too complex to fully understand.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① 現代の天気予報は100パーセント正確だ。', '② 昔の人は空や風の様子から経験的に天気を予測していた。', '③ 天気予報は農家には役立たない。', '④ 突然の雷雨は現代の技術で完全に予測できる。'],
    answer: '② 昔の人は空や風の様子から経験的に天気を予測していた。',
    hint: '本文の "In the past, people looked at the sky, felt the wind, and used their experience to guess the weather." という部分を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「現代の天気予報は100パーセント正確だ」→ 本文には "weather forecasting will never be 100 percent accurate（天気予報は決して100パーセント正確にはならない）" とあるので×
② 「昔の人は空や風の様子から経験的に天気を予測していた」→ 本文の "people looked at the sky, felt the wind, and used their experience to guess the weather" と一致する（✓）
③ 「天気予報は農家には役立たない」→ 本文には "help farmers decide when to plant crops（種をまく時期を決めるのに役立つ）" とあり反対の内容（×）
④ 「突然の雷雨は現代の技術で完全に予測できる」→ 本文には "difficult to predict perfectly, especially for sudden changes like local thunderstorms" とあり反対の内容（×）

【文法ポイント】
内容一致問題のアプローチ：
1. 選択肢を先に読んでキーワードを把握
2. 本文で該当箇所を探す
3. 本文の語句と選択肢の語句を慎重に比較（言い換えに注意）

【入試頻出】
・本文にない情報を含む選択肢は×
・「必ず」「完全に」「100パーセント」等の断定的な表現に注意
・本文の言い換え表現に気づくことが正解への鍵`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_48',
    subject: 'eigo',
    passage: `Japan is known around the world for having four distinct seasons, each with its own charm. In spring, cherry blossoms bloom across the country, and many people enjoy hanami parties under the pink flowers. Summer brings hot and humid days, along with lively festivals and fireworks. In autumn, the mountains turn red and yellow as the leaves change color, attracting many visitors who want to see this beautiful sight. Winter covers much of the country in snow, especially in the north, where people enjoy skiing and hot springs. These seasonal changes affect not only daily life but also traditional food, clothing, and events throughout the year.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文中の下線部 "this beautiful sight" が指す内容として最も適切なものを選べ。',
    choices: ['① 桜が咲く様子', '② 山々の紅葉', '③ 雪が降る様子', '④ 花火大会の様子'],
    answer: '② 山々の紅葉',
    hint: '"this beautiful sight" の直前の文で述べられている、山の様子を確認する。',
    explanation: `【出題意図】
指示語（this beautiful sight）が何を指すかを本文から特定する指示語問題。入試長文読解の頻出問題形式。

【解説】
指示語の直前を確認する：
"In autumn, the mountains turn red and yellow as the leaves change color, attracting many visitors who want to see this beautiful sight."
この文の中で "this beautiful sight" は、直前で説明されている「山が赤や黄色に色づく（紅葉する）様子」を指している。

① 桜が咲く様子：春の話題であり、この文の直前の内容ではない（×）
② 山々の紅葉：直前の文の内容と一致する（✓）
③ 雪が降る様子：冬の話題で、別の文で述べられている（×）
④ 花火大会の様子：夏の話題で、別の文で述べられている（×）

【文法ポイント】
指示語問題のアプローチ：
1. 指示語（this / these / it）が出たら直前の文を確認
2. 指示語を含む文に「指示内容」を代入して意味が通るか確認

【入試頻出】
・「this が指すものを選べ」→ 直前の内容（多くは直前の文全体や一部）を探す
・指示語の前の文の主語・動詞・目的語のどこを指しているかを丁寧に見極める`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_49',
    subject: 'eigo',
    passage: `For centuries, cherry blossoms in Japan have bloomed around the same time each spring, and people have used this timing to plan festivals and events. In recent years, however, records show that cherry blossoms are blooming earlier than they used to. Scientists believe this change is closely connected to rising temperatures caused by climate change. Similar changes have been observed in other countries, where plants bloom earlier and animals change their behavior according to shifting seasons. These small changes may seem unimportant at first, but they can affect farming, ecosystems, and even the timing of traditional festivals. Researchers continue to study these patterns to understand how climate change is reshaping the natural world.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① 桜祭りの長い歴史', '② 気候変動が自然界のタイミングに与える影響', '③ 日本の伝統行事の一覧', '④ 動物の行動を研究する具体的な方法'],
    answer: '② 気候変動が自然界のタイミングに与える影響',
    hint: '本文全体の流れ（過去の様子→近年の変化→原因→他国の例→影響→今後の研究）を把握して、何が最も中心的に述べられているかを考える。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. これまで：桜は毎年同じ時期に咲き、それに合わせて行事が計画されてきた
2. 変化：近年、桜が以前より早く咲くようになっている
3. 原因：気候変動による気温上昇と関係があると科学者は考えている
4. 他国の例：他の国でも植物や動物の行動に同様の変化が見られる
5. 影響と今後：農業や生態系、伝統行事に影響しうるため研究が続けられている

全体を通して「気候変動が自然界のタイミングに与える影響」が中心テーマ → ②が正解

① 桜祭りの長い歴史：本文の一部（導入）にすぎない（×）
③ 伝統行事の一覧：本文には具体的な一覧はない（×）
④ 動物の行動の研究方法：本文には研究方法の詳細な記述はない（×）

【文法ポイント】
主題問題（main topic）のアプローチ：
1. 冒頭と末尾を特に注意深く読む
2. 繰り返し登場するキーワードを見つける（climate change, earlier, timing など）

【入試頻出】
・主題問題では「一番多く書かれていること」を選ぶ
・本文の一部しか触れていない選択肢は不正解になることが多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo2_50',
    subject: 'eigo',
    passage: `Typhoons visit Japan almost every year, especially between August and October, bringing strong winds and heavy rain. Because of this, many schools and communities hold disaster drills to prepare students and residents for emergencies. During a typhoon, people are advised to stay indoors, avoid going near rivers or the coast, and keep emergency supplies such as water, food, and flashlights ready. Some schools even close early or cancel classes when a typhoon is expected to be especially dangerous. While technology now allows forecasters to track typhoons accurately, being prepared in advance is still the best way to stay safe. Communities that practice these safety habits tend to suffer less damage when a typhoon actually arrives.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っていないものを1つ選べ。',
    choices: ['① 台風は主に8月から10月にかけて日本を訪れることが多い。', '② 台風の際は川や海岸に近づくべきではないとされている。', '③ 台風の接近が予想されても学校が休みになることはない。', '④ 事前に備えている地域は被害が少ない傾向にある。'],
    answer: '③ 台風の接近が予想されても学校が休みになることはない。',
    hint: '本文中の "Some schools even close early or cancel classes when a typhoon is expected to be especially dangerous." という部分と選択肢③を比較する。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」という誤文識別型の読解問題。細部の読み取りと選択肢の正確な解釈が必要。

【解説】
各選択肢を本文と照合する：
① 「8月から10月にかけて日本を訪れることが多い」→ 本文に "especially between August and October" とある（✓ 本文と一致）
② 「川や海岸に近づくべきではない」→ 本文に "avoid going near rivers or the coast" とある（✓ 本文と一致）
③ 「学校が休みになることはない」→ 本文には "Some schools even close early or cancel classes when a typhoon is expected to be especially dangerous.（特に危険が予想されるときは早めに下校させたり休校にしたりする学校もある）" とあり、本文の内容と矛盾する（× 本文と不一致）
④ 「事前に備えている地域は被害が少ない傾向にある」→ 本文の最後の文 "Communities that practice these safety habits tend to suffer less damage" と一致する（✓ 本文と一致）

正解：③

【文法ポイント】
「合っていないものを選べ」問題のアプローチ：
1. 選択肢の語句を一つずつ本文と照合
2. 本文の否定表現（never, not）と選択肢の肯定表現（またはその逆）に注意

【入試頻出】
・「合っていないものを選べ」では本文の語句と選択肢の語句を丁寧に比較する
・「〜することはない」のような断定的な選択肢は誤答になりやすい`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
