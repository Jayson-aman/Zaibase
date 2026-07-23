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
    explanation: `【出題意図】
過去完了進行形（had been + Ving）の用法を問う問題。過去のある時点まで継続していた動作を正しく表現できるかが目標。

【解説】
「we finally left the mountain（私たちがついに山を出発した）」は過去の一時点。その時点よりもさらに前から「雪が降り続けていた」という継続動作を表すには過去完了進行形を使う。
・① snows → 現在形（文脈に合わない）
・② snowed → 過去形（継続の意味が出ない）
・③ has snowed → 現在完了形（過去の基準点には使えない）
・④ had been snowing → 過去完了進行形（✓）

日本語訳：「私たちがついに山を出発する前、3時間ずっと雪が降り続いていた。」

【文法ポイント】
過去完了進行形 = had been + 動詞-ing
→ 過去のある時点よりもさらに前から、その時点まで継続していた動作を表す。「for〜（〜の間）」とセットで出やすい。

【入試頻出】
・She had been studying for two hours when the storm started.
・They had been waiting for the bus since noon when it began to rain.
「before / when + 過去形」の主節に過去完了進行形を使うパターンを押さえよ。`,
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
    explanation: `【出題意図】
最上級の正しい形と、最上級に定冠詞 the が必要なことを問う問題。

【解説】
「of the year（1年のうちで）」は範囲を示す表現で、その中で「一番暑い」を表すには最上級が必要。
・① hot → 原級（比較なし）
・② hotter → 比較級（2つを比べる）
・③ the hottest → 最上級（✓）「一番暑い」
・④ most hot → 最上級の作り方が誤り（hot は -est 型、most は使わない）

日本語訳：「8月は日本のほとんどの地域で1年のうちで最も暑い月だ。」

【文法ポイント】
最上級の作り方：
・短い形容詞（1音節など）：-est（hot→hottest ※子音字重複に注意）
・長い形容詞：the most +形容詞
最上級には必ず the が必要。

【入試頻出】
・Winter is the coldest season in Hokkaido.
・This is the driest region in the country.
・September is often the busiest month for typhoons.`,
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
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞（enjoy）を正しく使えるかを問う問題。不定詞との区別が核心。

【解説】
enjoy は目的語に動名詞（〜ing）だけを取り、不定詞（to +原形）は取らない。
・① eat → 原形（enjoyの後ろには使えない）
・② to eat → 不定詞（enjoyの後ろには来ない）
・③ eating → 動名詞（✓）enjoy + 動名詞
・④ ate → 過去形（目的語にはなれない）

日本語訳：「毎年春、日本の多くの人々は桜の下で食事を楽しむ。」

【文法ポイント】
動名詞のみを目的語にとる動詞（入試頻出）：
enjoy（楽しむ）、finish（終える）、stop（やめる）、mind（気にする）、practice（練習する）

【入試頻出】
・We enjoyed watching the fireworks last night.
・She finished raking the fallen leaves.
・Do you mind waiting until the rain stops?`,
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
    explanation: `【出題意図】
未来完了形（will have + 過去分詞）の用法を問う問題。「未来のある時点での完了」を表す時制の識別。

【解説】
「by the end of this month（今月末までには）」は未来の時点。その時点で「梅雨が終わっていることになる」という完了を表すには未来完了形を使う。
・① will end → 単純未来（完了の意味を表せない）
・② has ended → 現在完了（未来の時点には使えない）
・③ will have ended → 未来完了（✓）
・④ ended → 過去形（文脈に合わない）

日本語訳：「今月末までには、こちらの梅雨は終わっているだろう。」

【文法ポイント】
未来完了形 = will have + 過去分詞
目印の語句：by the time〜 / by then / by next〜 / by the end of〜（未来の時点を示す）

【入試頻出】
・By tomorrow morning, the snow will have stopped.
・By next week, the leaves will have all fallen.
・By the time you arrive, the storm will have passed.`,
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
    explanation: `【出題意図】
条件節（if 節）での時制のルール「未来のことでも現在形を使う」を問う問題。入試最頻出文法の一つ。

【解説】
「If it 〜, the festival will be canceled」は条件文。英語では if 節などの副詞節の中では、未来のことであっても will を使わず現在形を使う。
・① rains → 現在形（✓）if 節内では現在形で未来を表す
・② will rain → if 節内で will は使えない（×）
・③ rained → 過去形（仮定法になってしまう）
・④ is raining → 進行形（文脈に合わない）

日本語訳：「もし明日激しく雨が降れば、屋外の祭りは中止になる。」

【文法ポイント】
時・条件を表す副詞節の中では未来のことでも現在形：
if（もし〜なら）/ when（〜するとき）/ until（〜まで）/ as soon as（〜したらすぐ）

【入試頻出】
・If the sky clears up, we will go hiking.
・When the snow melts, the flowers will bloom.
・As soon as the typhoon passes, we will start cleaning up.`,
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
    explanation: `【出題意図】
look forward to〜ing（〜するのを楽しみにする）の to が前置詞であることを問う問題。不定詞の to との混同を防ぐ入試頻出ポイント。

【解説】
look forward to〜 の to は不定詞の to ではなく前置詞の to。前置詞の後ろには動名詞（〜ing）が来る。
・① to see → to が不定詞になっており誤り
・② to seeing → 前置詞 to + 動名詞（✓）
・③ see → 原形のみでは文法的に不完全
・④ seeing → to が抜けている

日本語訳：「私は今年最初の雪が降るのを本当に楽しみにしている。」

【文法ポイント】
look forward to〜ing：〜するのを楽しみにする
同じ形の他の表現：be used to〜ing（〜に慣れている）、be good at〜ing（〜が得意）

【入試頻出】
・We are looking forward to visiting the ski resort.
・She is looking forward to seeing the autumn leaves.
・I look forward to hearing from you soon.`,
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
    explanation: `【出題意図】
熟語 be covered with〜（〜で覆われている）の用法を問う問題。似た意味の表現との区別。

【解説】
be covered with〜 は「（表面が）〜で覆われている」という状態を表すイディオム。
・① filled → be filled with〜（〜でいっぱいだ、中身が満たされている）は容器・空間に使う
・② covered → be covered with〜（✓）表面が覆われている状態
・③ full → be full of〜（〜でいっぱい）の形なら可だが with とは結びつかない
・④ made → be made of〜（〜でできている、材料）

日本語訳：「大きな嵐の後、町全体が厚い雪で覆われていた。」

【文法ポイント】
be + 過去分詞 + with/of〜 の使い分け：
・be covered with〜：〜で覆われている
・be filled with〜：〜で満たされている
・be made of〜：〜でできている（材料）
・be known for〜：〜で知られている

【入試頻出】
・The mountain top is covered with snow all year round.
・The glass was filled with rainwater.
・This area is known for its clear blue sky.`,
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
    explanation: `【出題意図】
関係代名詞の選択（who / which / whom / whose）を問う問題。先行詞が人か物か、節内の役割の識別が目標。

【解説】
先行詞は「People（人々）」= 人。関係代名詞節内で「live in snowy areas（雪の多い地域に住んでいる）」の主語の役割を果たしている。
・① who → 先行詞が人・主格（✓）
・② which → 先行詞が物や動物
・③ whom → 先行詞が人・目的格
・④ whose → 先行詞が人または物・所有格

日本語訳：「雪の多い地域に住んでいる人々は、冬に特別なタイヤをよく使う。」

【文法ポイント】
関係代名詞まとめ：
主格：who（人）/ which（物）/ that（両方）
目的格：whom（人）/ which（物）/ that（両方）
所有格：whose（人・物）

【入試頻出】
・Farmers who work in the fields watch the weather carefully.
・Animals that live in cold regions have thick fur.
・I have a friend whose house was damaged by the flood.`,
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
    explanation: `【出題意図】
関係代名詞 which（先行詞が物・目的格）の用法を問う問題。that との言い換えも理解する。

【解説】
先行詞は「the article（記事）」= 物。関係代名詞節内で I read ( )（私が読んだ）の目的語になっている。
・① who → 先行詞が人のとき
・② which → 先行詞が物・目的格（✓）I read which = それを読んだ
・③ whom → 先行詞が人・目的格
・④ where → 関係副詞（場所を表す先行詞に使う）

which は省略可（that に置き換え可）：The article (that) I read yesterday〜

日本語訳：「私が昨日読んだその記事は気候変動の影響についてだった。」

【文法ポイント】
目的格の関係代名詞は省略可能：
The book (which/that) I read was interesting.

【入試頻出】
・The report (which) she wrote was about global warming.
・The photo (that) he took shows a beautiful rainbow.
・The data (which) scientists collected surprised everyone.`,
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
    explanation: `【出題意図】
所有格の関係代名詞 whose を使って2文を1文に結合する問題。

【解説】
「I have never been to a country.」と「Its winters are extremely long and cold.」の Its は a country を指している。
この「Its（その国の）」という所有の関係を表すのが関係代名詞の所有格 whose。

変換の手順：
1. 先行詞を特定：a country（物）
2. Its（所有格）→ whose に置き換える
3. whose を先行詞 a country の直後に置く
→ I have never been to a country whose winters are extremely long and cold.

日本語訳：「私は冬がとても長くて寒い国に行ったことがない。」

【文法ポイント】
whose の使い方：先行詞（人・物）の所有格を表す。物の場合でも whose を使える点に注意。
・先行詞が物：I visited a town whose streets were covered with snow.

【入試頻出】
・She lives in a country whose climate is very dry.
・This is a region whose winters are mild.
・He studies a species whose habitat is disappearing due to warming.`,
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
    explanation: `【出題意図】
間接疑問文の語順整序問題。「疑問詞（how + 形容詞） + 主語 + 動詞」という間接疑問の語順と、全体が疑問文になることを同時に確認する。

【解説】
ポイントは2つ：
1. 全体が「Do you know〜?」という疑問文
2. know の目的語（間接疑問）は「how cold it will be tomorrow」（疑問文の語順ではなく平叙文語順）

× Do you know how cold will it be tomorrow?（誤り）
○ Do you know how cold it will be tomorrow?（正解）

語句の組み立て：
Do you know / how cold / it will be / tomorrow？

日本語訳：「明日どのくらい寒くなるか知っていますか？」

【文法ポイント】
間接疑問の語順：疑問詞（+形容詞）+ 主語 + 動詞
全体が疑問文の場合：Do/Can/Could + 主語 + 動詞 + 疑問詞 + 主語 + 動詞〜?

【入試頻出】
・Do you know how hot it will get this summer?
・Can you tell me how long the rain will continue?
・I wonder how much snow will fall tonight.`,
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
    explanation: `【出題意図】
「形容詞 + enough + to 動詞」の語順を問う整序問題。enough の位置が鍵。

【解説】
「〜するのに十分〜だ」は：主語 + be + 形容詞 + enough + to + 動詞原形
・enough は形容詞の後ろに置く（× enough thick = 誤り）
・否定文：not が be 動詞の後ろに来る
・walk on〜（〜の上を歩く）という句動詞の on を忘れずに残す

正しい語順：
The ice is not thick enough to walk on.

日本語訳：「その氷は歩くのに十分な厚さではない。」

【文法ポイント】
形容詞 + enough + to 動詞：「〜するのに十分〜だ」
too + 形容詞 + to 動詞：「〜すぎて〜できない」（enough と対で覚える）
例：The ice is too thin to walk on.（薄すぎて歩けない）

【入試頻出】
・The river is not deep enough to swim in.
・The wind was strong enough to break the umbrella.
・The snow was too soft to make a snowman.`,
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
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。bring の用法も確認。

【解説】
bring + 人 + 物 = 人に物を持ってくる（第4文型）
・The wind（S）+ brought（V）+ us（IO: 間接目的語）+ cool air（DO: 直接目的語）

語順：The wind brought us cool air.

第3文型への書き換え：The wind brought cool air to us.（to を使う）

日本語訳：「その風は私たちに涼しい空気をもたらした。」

【文法ポイント】
第4文型（SVOO）の動詞：
・give / send / show / bring / teach + 人 + 物（間接目的語が to で書き換え可）
例：The rain brought us a rainbow. = The rain brought a rainbow to us.

【入試頻出】
・The storm brought the town a lot of damage.
・Spring brings us warm sunshine and blooming flowers.
・Can you show me the weather map for tomorrow?`,
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
    explanation: `【出題意図】
前置詞 after + 動名詞 の用法と、語順整序を問う問題。

【解説】
前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。
「〜した後で」= after + 動名詞（〜ing）

正しい語順：
We will go home after watching the fireworks.
（= After watching the fireworks, we will go home.）

× after to watch（× 前置詞の後ろに不定詞は来ない）
○ after watching（✓ 前置詞 + 動名詞）

日本語訳：「花火を見た後、私たちは家に帰ります。」

【文法ポイント】
前置詞 + 動名詞 の頻出パターン：
・before + ing：〜する前に
・after + ing：〜した後で
・without + ing：〜せずに

【入試頻出】
・She left the beach before the storm arrived.
・He came home without getting wet in the rain.
・Thank you for warning us about the typhoon.`,
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
    explanation: `【出題意図】
関係代名詞 who（主格）を使った語順整序問題。先行詞と関係代名詞節の位置関係が鍵。

【解説】
文の骨格：The scientist is famous.（その科学者は有名だ）
修飾部：who studies climate（気候を研究している）

組み合わせ：
The scientist [who studies climate] is famous.

who はここでは主格（studies の主語）として使われている。主節の動詞（is）は関係代名詞節の後に続く。

日本語訳：「気候を研究しているその科学者は有名だ。」

【文法ポイント】
関係代名詞節の位置：先行詞の直後に置く。
The scientist who〜 のように、先行詞と関係代名詞節はセット。

【入試頻出】
・The woman who studies typhoons works at a university.
・The boy who collects rainwater is my classmate.
・The man who predicts the weather appears on TV every morning.`,
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
    explanation: `【出題意図】
enough to 構文に「for + 人」が加わった形の語順を問う問題。「〜が…するほど十分〜だ」という表現の完全形を問う。

【解説】
構文：主語 + be + 形容詞 + enough + for + 人 + to + 動詞原形
「for + 人」は不定詞の意味上の主語を示す。

正しい語順：
The river is shallow enough for children to cross.

日本語訳：「その川は子供が渡れるくらい浅い。」

【文法ポイント】
「形容詞 + enough + for + 人 + to + 動詞」構文：
・The ice was thick enough for us to skate on.（私たちがスケートできるくらい厚かった）

「too + 形容詞 + for + 人 + to + 動詞」との対比：
・The river is too deep for children to cross.（深すぎて子供は渡れない）

【入試頻出】
・The wind was calm enough for the boat to sail.
・The sun was warm enough for us to swim in the sea.
・The path was too icy for anyone to walk on.`,
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
    explanation: `【出題意図】
Would you like to〜?（誘い）への適切な応答を問う問題。日常会話・対話文頻出表現。

【解説】
Would you like to〜? は「〜しませんか？」という丁寧な誘いの表現。
・① No, I don't. → Would you like to〜? への否定応答としては不自然（No, thank you. や I'd love to, but〜 が自然）
・② Yes, I'd love to. → 正しい受け答え（✓）
・③ I don't like sunny. → 質問への直接的な答えになっていない
・④ Yes, I would like. → like の後ろに目的語（to や名詞）が必要

誘いへの返答：
・受ける：Yes, I'd love to. / Sure, that sounds fun.
・断る：I'd love to, but I have other plans.

日本語訳：
A：もし晴れたら、今週末ピクニックに行きませんか？
B：はい、ぜひ行きたいです。

【文法ポイント】
Would you like to〜?（誘い）vs Do you like〜?（好み）
I'd love to. は I would love to (go). の省略形。

【入試頻出】
・Would you like to see the cherry blossoms with us? — Yes, I'd love to.
・Would you like to join the stargazing event? — Sure, that sounds fun.`,
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
    explanation: `【出題意図】
「How long will 〜 last?（〜はどのくらい続きますか）」への適切な応答を問う問題。所要時間・継続時間の表現。

【解説】
How long do you think this rain will last? = 「この雨はどのくらい続くと思いますか？」継続する期間・終わる時間を答える必要がある。
・① about five kilometers away → 距離の答え（×）How far〜? への答え
・② It should stop by evening, according to the forecast. → 継続時間・終わりの見込みを答えている（✓）
・③ You should bring an umbrella. → アドバイス（質問の答えになっていない）
・④ The rain is falling very hard. → 雨の強さの説明（質問とずれる）

日本語訳：
A：この雨はどのくらい続くと思いますか？
B：予報によると夕方までにはやむはずです。

【文法ポイント】
継続時間を尋ねる表現：How long will〜last? / How long does〜continue?
should は「〜のはずだ」という推量の意味でも使われる。

【入試頻出】
・How long will the typhoon stay near Japan?
・How long does the rainy season usually last?
・It should clear up by tomorrow morning.`,
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
    explanation: `【出題意図】
現在完了形（経験用法）の形と、see の活用（see-saw-seen）を正確に使えるかを問う問題。

【解説】
never は現在完了形の経験用法で「一度も〜したことがない」を表す。
現在完了形：have/has + 過去分詞
see の活用：see（原形）→ saw（過去形）→ seen（過去分詞）

・① see → 原形（have の後ろに原形は来ない）
・② saw → 過去形（have の後ろに過去形は来ない）
・③ seen → 過去分詞（✓）have seen
・④ seeing → 現在分詞（have been seeing なら別の意味になり、この文には合わない）

日本語訳：「私はこんなに美しい虹を今まで一度も見たことがない。」

【文法ポイント】
現在完了形（経験）の目印の語句：
・ever（これまでに）：Have you ever seen a shooting star?
・never（一度も〜ない）：I have never seen snow in April.
・before（以前に）：I have seen this kind of cloud before.

不規則動詞の過去分詞（頻出）：
see-saw-seen / go-went-gone / take-took-taken / write-wrote-written

【入試頻出】
・Have you ever seen a total solar eclipse?
・I have never experienced such a hot summer.
・She has seen the northern lights twice.`,
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
    explanation: `【出題意図】
時を表す前置詞（in / at / on）の使い分けを問う問題。入試最頻出文法の一つ。

【解説】
「New Year's Day（元日）」という特定の日には on を使う。
・① in → 月・年・季節・午前/午後（in January / in 2025 / in winter）
・② at → 時刻・特定の時点（at noon / at midnight）
・③ on → 曜日・特定の日（on New Year's Day / on Christmas Day）（✓）
・④ by → 期限（by January = 1月までに）

日本語訳：「今年は元日に雪が降り始めた。」

【文法ポイント】
時を表す前置詞まとめ：
at：時刻・時点（at noon / at midnight）
on：曜日・日付・特定の日（on Monday / on my birthday / on New Year's Day）
in：月・年・季節・時間帯（in March / in 2020 / in winter）

【入試頻出】
・The first snow usually falls in December.
・The typhoon hit the coast on a Sunday morning.
・We had a heavy frost at dawn.`,
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
    explanation: `【出題意図】
「ask + 人 + to + 動詞」という第5文型（SVOC）の用法を問う問題。

【解説】
ask + 人 + to do = 「人に〜するよう頼む」という重要構文。
・① close → 原形のみ（× ask の第5文型では to が必要）
・② to close → ask + 人 + to do（✓）
・③ closing → 動名詞（ask + 人 + doing という形は存在しない）
・④ closed → 過去分詞（文法的に合わない）

日本語訳：「彼女は嵐が来る前に窓を閉めるよう私に頼んだ。」

【文法ポイント】
「動詞 + 人 + to do」の構文（依頼・使役に近い意味）：
・ask + 人 + to do：人に〜するよう頼む
・tell + 人 + to do：人に〜するよう言う
・want + 人 + to do：人に〜してほしい

【入試頻出】
・He told us to stay inside during the thunderstorm.
・My mother wants me to bring an umbrella.
・The teacher asked the students to check the weather forecast.`,
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
    explanation: `【出題意図】
形式主語 it（仮の主語）を使った構文を問う問題。I think (that) it is〜 の形が正解。

【解説】
この文は「I think [that] it is important to check the weather forecast before climbing a mountain.」という構造。
it は to check the weather forecast〜（天気予報を確認すること）を指す形式主語（仮主語）。

・① this → I think this important to〜 は文法的に成立しない
・② that → I think that important to〜 も不自然
・③ it → 形式主語の it（✓）
・④ what → 成立しない

日本語訳：「私は山に登る前に天気予報を確認することが大切だと思う。」

全体の構造：
I think [that it is important to check the weather forecast before climbing a mountain].

【文法ポイント】
形式主語（仮主語）it の構文：
It is + 形容詞 + to + 動詞〜 = 〜することは（形容詞）だ
例：It is dangerous to go outside during a typhoon.
例：It is exciting to watch the stars on a clear night.

【入試頻出】
・It is important to prepare for natural disasters.
・I think it is wise to carry a raincoat in summer.
・He found it difficult to predict the sudden weather change.`,
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
    explanation: `【出題意図】
依頼表現（Could you〜?）と関係代名詞（目的格）を組み合わせた英作文。

【解説】
2つのポイント：
1. 丁寧な依頼：Could you show me〜? = 「〜を見せていただけますか？」
   show + 人 + 物（第4文型）
2. 「彼が撮った（写真）」= the photo that/which he took（関係代名詞・目的格）
   → 目的格の関係代名詞は省略可
3. 「あの嵐の間に」= during the storm（前置詞 during + 名詞）

組み合わせ：
Could you show me the photo (that) he took during the storm?

別解：
・Could you let me see the photo he took during the storm?

日本語訳確認：「あの嵐の間に彼が撮ったその写真を見せてもらえませんか？」

【文法ポイント】
Could you〜? = Can you〜? の丁寧版
during + 名詞：「〜の間に」（whileは後ろに文が続く点と区別）
the photo (that) he took：関係代名詞（目的格）he took the photo の構造`,
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
