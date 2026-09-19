import type { Question } from './questions';

export const kokoNyushiEigo5: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  Aluminum cans ( ) into new products within about sixty days after they are collected.',
    choices: ['① turn', '② are turned', '③ turned', '④ have turned'],
    answer: '② are turned',
    hint: '缶は「変える」側ではなく「変えられる」側であることに注目する。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形を正確に使えるかを問う問題。科学的・一般的事実を表す文脈で出題した。

【解説】
主語 Aluminum cans（アルミ缶）は自分から「変える」動作をするのではなく、工場で「変えられる」側。「within about sixty days（およそ60日以内に）」という一般的な事実を表すので現在形の受動態を使う。
・① turn → 能動態・現在形（主語が缶では意味が通らない）
・② are turned → 受動態・現在形（✓）are + turned
・③ turned → 過去形（一般的事実を表す文には合わない）
・④ have turned → 現在完了・能動態（缶自身が「変えた」ことになり不自然）

日本語訳：「アルミ缶は回収されてからおよそ60日以内に新しい製品に生まれ変わる。」

【文法ポイント】
受動態の基本形：現在形は is/am/are + 過去分詞。turn は規則動詞（turn-turned-turned）。
一般的・習慣的事実を表す受動態にはよく現在形が使われる。

【入試頻出】
・Glass bottles are recycled into new bottles.
・This paper is made from recycled materials.
・Old clothes are turned into new fabric at this factory.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  According to the weather forecast, air pollution levels ( ) be very high this afternoon, so children should stay indoors.',
    choices: ['① must', '② may', '③ should', '④ will'],
    answer: '② may',
    hint: '天気予報の「〜かもしれない」という不確かな可能性を表す助動詞を選ぶ。',
    explanation: `【出題意図】
助動詞 may（〜かもしれない：可能性）の用法を、must・should・will との意味の違いから識別する問題。

【解説】
「天気予報によると」という文脈は、確実な事実ではなく「〜かもしれない」という推測を表す。
・① must → 「〜に違いない」（強い確信）。予報の弱い推測には強すぎる
・② may → 「〜かもしれない」（弱い可能性）（✓）
・③ should → 「〜のはずだ」（根拠のある予想）または「〜すべきだ」（義務）で文脈に合わない
・④ will → 単純未来（確実な予測になり、予報のニュアンスとずれる）

日本語訳：「天気予報によると、今日の午後は大気汚染のレベルがとても高くなるかもしれないので、子どもたちは屋内にいるべきだ。」

【文法ポイント】
可能性を表す助動詞の強さの順：must（ほぼ確実）＞ will（かなり確実）＞ should（根拠のある予想）＞ may/might（五分五分・弱い可能性）。

【入試頻出】
・It may rain later, so take an umbrella.
・She might be at home now.
・The bus may be late because of the traffic.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  Of all the rivers in this area, this one is ( ) polluted.',
    choices: ['① more', '② most', '③ the most', '④ much more'],
    answer: '③ the most',
    hint: '「この地域のすべての川の中で」という範囲を表す表現があるので最上級を使う。',
    explanation:
      '【何を聞かれているか】「Of all the rivers in this area, this one is ( ) polluted.」の空所に入る適切な語句を選ぶ。\n【なぜthe mostになるのか】「Of all the rivers in this area（この地域のすべての川の中で）」という範囲を示す表現があるため、その中での「一番」を表す最上級が必要で、pollutedは長い形容詞なのでthe mostを使うから。\n【ポイント1】Of all〜という範囲を示す表現は最上級のサイン。pollutedは3音節以上とみなされる語なのでmore/most型を使う。\n【ポイント2】①more（比較級、範囲を示すof allと合わない）、②most（theが抜けている）、④much more（比較級の強調で最上級ではない）はどれも誤り。\n【ポイント3】③the most（正しい最上級）が正解。最上級には必ずtheが必要。\n【答え】③ the most\n【確かめ】the mostのtheが抜けていないかを確認する。\n【よくあるまちがい】②mostのようにtheをつけ忘れてしまう。\n【ここが絶対】最上級には必ずtheをつける。長い形容詞はthe most＋形容詞、短い形容詞はthe＋形容詞-estの形にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Volunteers picked up trash along the beach ( ) protect sea animals from plastic waste.',
    choices: ['① for', '② so', '③ to', '④ in order'],
    answer: '③ to',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法を選ぶ。',
    explanation: `【出題意図】
不定詞の副詞的用法（目的）「〜するために」を問う問題。前置詞 for との混同を防ぐことが目標。

【解説】
「ボランティアがゴミを拾った」目的を表す文。「海の生き物をプラスチックごみから守るために」は不定詞の副詞的用法（目的）で表す。
・① for → 前置詞。for の後ろは名詞のみで動詞原形は直接続けられない
・② so → 接続詞「だから」（so that なら目的を表せるが単独では不可）
・③ to → to + 動詞原形で「〜するために」（✓）
・④ in order → in order to なら目的を表せるが、in order 単独では不完全

日本語訳：「ボランティアたちは、海の生き物をプラスチックごみから守るために、浜辺に沿ってゴミを拾った。」

【文法ポイント】
不定詞の副詞的用法（目的）：主語 + 動詞〜 + to + 動詞原形（〜するために）。in order to〜 はより書き言葉的で強調した目的を表す。

【入試頻出】
・She recycles bottles to reduce waste.
・He turned off the lights to save energy.
・They planted trees in order to protect the forest.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  You should avoid ( ) too much sugar if you want to keep your teeth healthy.',
    choices: ['① eat', '② to eat', '③ eating', '④ eaten'],
    answer: '③ eating',
    hint: 'avoid の後ろには動名詞（〜ing）が来る。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞（avoid）を正しく使えるかを問う問題。不定詞との区別が核心。

【解説】
avoid は「〜を避ける」という意味で、目的語に動名詞（〜ing）だけを取り、不定詞（to +原形）は取らない。
・① eat → 原形（avoid の後ろには使えない）
・② to eat → 不定詞（avoid の後ろには来ない）
・③ eating → 動名詞（✓）avoid + 動名詞
・④ eaten → 過去分詞（目的語にはなれない）

日本語訳：「歯を健康に保ちたいなら、糖分の取りすぎを避けるべきだ。」

【文法ポイント】
動名詞のみを目的語にとる動詞（入試頻出）：
avoid（避ける）、enjoy（楽しむ）、finish（終える）、stop（やめる）、mind（気にする）、practice（練習する）、give up（諦める）

【入試頻出】
・We should avoid wasting food.
・He avoided answering the question.
・Try to avoid using too much plastic.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  By the time this recycling program ends, the city ( ) more than one million plastic bottles.',
    choices: ['① will collect', '② has collected', '③ will have collected', '④ collected'],
    answer: '③ will have collected',
    hint: '「このプログラムが終わるまでには」という未来の時点での完了を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「By the time this recycling program ends, the city ( ) more than one million plastic bottles.」の空所に入る適切な時制を選ぶ。\n【なぜwill have collectedになるのか】「このプログラムが終わるまでには」という未来のある時点で「100万本以上集め終えていることになる」という完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】By the time this recycling program ends（このプログラムが終わるまでには）は未来の時点を示す表現。\n【ポイント2】①will collect（単純未来）、②has collected（現在完了、未来の時点には使えない）、④collected（過去形）はどれも文脈に合わない。\n【ポイント3】③will have collected（未来完了）が正解。目印はby the time〜、by then、by next〜、by the end of〜。\n【答え】③ will have collected\n【確かめ】By the timeの節の動詞が現在形（ends）になっており、主節が未来完了（will have collected）になっているかを確認する。\n【よくあるまちがい】has collected（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での完了にはwill have＋過去分詞（未来完了形）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If people ( ) throwing plastic into the ocean, marine life will continue to suffer.',
    choices: ['① will keep', '② keep', '③ kept', '④ keeping'],
    answer: '② keep',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation:
      '【何を聞かれているか】「If people ( ) throwing plastic into the ocean, marine life will continue to suffer.」の空所に入る適切な語を選ぶ。\n【なぜkeepになるのか】条件を表すif節の中では、未来のことでもwillを使わず現在形を使うという決まりがあるから。\n【ポイント1】if節などの副詞節の中では、未来のことでも現在形で表す。①will keepはif節の中では使えない。\n【ポイント2】③kept（過去形、仮定法になり文意が変わる）、④keeping（動詞の原形が必要な位置で分詞は使えない）はどちらも誤り。\n【ポイント3】②keep（現在形）が正解。「もし人々が海にプラスチックを捨て続ければ」という条件を表す。\n【答え】② keep\n【確かめ】主節にwillが使われている（marine life will continue）ことと、if節が現在形（keep）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwillを入れてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  This recycling center ( ) five years ago to reduce landfill waste.',
    choices: ['① builds', '② is built', '③ was built', '④ has built'],
    answer: '③ was built',
    hint: '「5年前に」という過去の一時点を表す語句と、受動態の時制に注目する。',
    explanation: `【出題意図】
受動態の過去形（was/were + 過去分詞）を正確に使えるかを問う問題。時を表す語句との一致も確認する。

【解説】
主語 This recycling center（このリサイクルセンター）は「建てる」側ではなく「建てられる」側なので受動態が必要。「five years ago（5年前に）」という過去の一時点を示す語句があるので過去形を使う。
・① builds → 能動態・現在形（主語がセンターでは不自然、時も合わない）
・② is built → 受動態・現在形（ago という過去の語句と合わない）
・③ was built → 受動態・過去形（✓）
・④ has built → 現在完了・能動態（形も時制も不適切）

日本語訳：「このリサイクルセンターは、埋め立てごみを減らすために5年前に建てられた。」

【文法ポイント】
受動態の過去形：was/were + 過去分詞。「〜ago」は過去形とセットで使う目印の語句。

【入試頻出】
・This bridge was built one hundred years ago.
・The park was cleaned by volunteers last weekend.
・A new law was passed to reduce plastic bags.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Solar power is becoming ( ) than coal in many countries now.',
    choices: ['① cheap', '② cheaper', '③ the cheapest', '④ more cheap'],
    answer: '② cheaper',
    hint: '2つのエネルギー源を比べているので比較級（-er）を使う。than が手がかり。',
    explanation: `【出題意図】
比較級の形（-er型 / more型）を正確に使えるかを問う問題。than との組み合わせも確認する。

【解説】
than があれば比較級が必要。cheap は1音節の形容詞なので -er 型で比較級を作る。
・① cheap → 原級（than とセットでは使えない）
・② cheaper → 正しい比較級（✓）
・③ the cheapest → 最上級（than とセットでは使わない）
・④ more cheap → 誤った比較級（1音節の形容詞に more は使わない）

日本語訳：「今、多くの国で太陽光発電は石炭よりも安くなりつつある。」

【文法ポイント】
比較級の形：1音節の形容詞は-er（cheap→cheaper, fast→faster）。子音+yで終わる語はy→ier（easy→easier）。3音節以上・一部の2音節はmore+形容詞（expensive→more expensive）。

【入試頻出】
・Wind energy is getting cheaper every year.
・This solution is more effective than the old one.
・Reusable bottles are better than plastic ones for the environment.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  Many young people want ( ) part in beach clean-up activities these days.',
    choices: ['① take', '② taking', '③ to take', '④ took'],
    answer: '③ to take',
    hint: 'want の後ろに来る不定詞の名詞的用法（〜したい）を選ぶ。',
    explanation: `【出題意図】
不定詞の名詞的用法（want to + 動詞原形）の形を正確に使えるかを問う問題。

【解説】
want は「〜したい」という意味で、後ろに不定詞（to + 動詞原形）を取る。「take part in〜」は「〜に参加する」という熟語。
・① take → 原形（want の後ろに動詞原形は直接来ない）
・② taking → 動名詞（want は動名詞を目的語に取らない）
・③ to take → 不定詞（✓）want to take part in〜 = 〜に参加したい
・④ took → 過去形（目的語の位置には使えない）

日本語訳：「最近、多くの若者がビーチの清掃活動に参加したいと思っている。」

【文法ポイント】
不定詞のみを目的語に取る動詞（want / hope / wish / decide / plan + to 動詞）。
take part in〜：〜に参加する（= participate in〜）

【入試頻出】
・She wants to join the recycling club.
・He hopes to protect endangered animals.
・They decided to take part in the tree-planting event.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The factory finally stopped ( ) chemical waste into the river last year.',
    choices: ['① dump', '② to dump', '③ dumping', '④ dumped'],
    answer: '③ dumping',
    hint: 'stop の後ろの目的語（〜するのをやめる）と、stop to do（〜するために立ち止まる）の違いに注意する。',
    explanation: `【出題意図】
stop + 動名詞（〜するのをやめる）と stop + 不定詞（〜するために立ち止まる）の意味の違いを問う問題。

【解説】
文脈上「工場が化学廃棄物を川に捨てるのをやめた」という意味になるので、stop + 動名詞を使う。
・① dump → 原形（動名詞の位置に使えない）
・② to dump → stop to dump = 「捨てるために立ち止まる」という別の意味になり文脈に合わない
・③ dumping → 動名詞（✓）stop dumping = 捨てるのをやめる
・④ dumped → 過去形（動名詞の位置には使えない）

日本語訳：「その工場は昨年ついに化学廃棄物を川に捨てるのをやめた。」

【文法ポイント】
stop + 動名詞：〜するのをやめる。stop + 不定詞：〜するために立ち止まる。この意味の違いが入試で頻出。

【入試頻出】
・She stopped buying plastic bottles.
・He stopped to pick up some litter on the road.
・The company stopped using harmful chemicals.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  Scientists ( ) the effects of microplastics on fish for over a decade.',
    choices: ['① study', '② have studied', '③ have been studying', '④ studied'],
    answer: '③ have been studying',
    hint: '「10年以上にわたって」という継続を表す語句から時制を判断する。',
    explanation:
      '【何を聞かれているか】「Scientists ( ) the effects of microplastics on fish for over a decade.」の空所に入る適切な時制を選ぶ。\n【なぜhave been studyingになるのか】「10年以上にわたって」という長期間続いている進行中の動作を強調するには、現在完了進行形（have been＋動詞のing形）を使う必要があるから。\n【ポイント1】for over a decade（10年以上にわたって）は継続を表す語句。\n【ポイント2】①study（現在形、継続の意味が出ない）、②have studied（現在完了形、継続の強調には弱い）、④studied（過去形、継続を表せない）はどれも文脈に合わない。\n【ポイント3】③have been studying（現在完了進行形）が正解。for〜（〜の間）、since〜（〜以来）とセットで使われることが多い。\n【答え】③ have been studying\n【確かめ】for over a decadeという継続の期間を表す語句と、have been＋Vingの組み合わせがセットになっていることを確認する。\n【よくあるまちがい】have studied（現在完了形）を選んでしまう。現在完了進行形の方が「今も続いている」ことをより強調する。\n【ここが絶対】長期間にわたって続いている進行中の動作を強調するときは現在完了進行形（have/has been＋Ving）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  Many doctors are worried ( ) the rising number of people who don\'t get enough sleep.',
    choices: ['① of', '② about', '③ with', '④ at'],
    answer: '② about',
    hint: 'be worried の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be worried about〜（〜を心配している）の前置詞の用法を問う問題。

【解説】
be worried about〜 は「〜を心配している」という意味のイディオム。前置詞 about が固定。
・① of → be afraid of〜（〜を恐れる）などに使う
・② about → be worried about〜（✓）
・③ with → be pleased with〜（〜に喜んでいる）などに使う
・④ at → be surprised at〜（〜に驚く）などに使う

日本語訳：「多くの医師は、十分な睡眠を取れない人が増えていることを心配している。」

【文法ポイント】
前置詞を固定する重要熟語（入試頻出）：be worried about〜（〜を心配する）、be afraid of〜（〜を恐れる）、be proud of〜（〜を誇りに思う）、be surprised at〜（〜に驚く）、be interested in〜（〜に興味がある）。

【入試頻出】
・She is worried about her health.
・He is afraid of losing his job.
・I am proud of my hometown's recycling program.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  She decided to ( ) up eating fast food after learning about its health risks.',
    choices: ['① give', '② take', '③ make', '④ turn'],
    answer: '① give',
    hint: 'give up〜ing で「〜するのをやめる」という熟語。',
    explanation: `【出題意図】
動詞 give を含む重要熟語 give up〜（〜をやめる）を正確に知っているかを問う問題。

【解説】
give up〜ing は「〜するのをやめる、〜を断つ」という重要イディオム。
・① give → give up〜（✓）
・② take → take up〜 は「〜を始める」という反対の意味になる
・③ make → make up は「作り上げる、仲直りする」などの意味で文脈に合わない
・④ turn → turn up は「現れる」という意味で文脈に合わない

日本語訳：「彼女はファストフードの健康リスクを知り、それを食べるのをやめることにした。」

【文法ポイント】
give up を含む頻出表現：give up smoking（喫煙をやめる）、give up hope（希望を捨てる）。反対の意味の take up〜（〜を始める）とセットで覚える。

【入試頻出】
・He gave up drinking soda every day.
・Don't give up trying to protect the environment.
・She took up jogging to stay healthy.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If we keep using resources so quickly, we will ( ) out of clean water someday.',
    choices: ['① go', '② run', '③ use', '④ get'],
    answer: '② run',
    hint: 'run out of〜 で「〜を使い果たす」という熟語。',
    explanation:
      '【何を聞かれているか】「If we keep using resources so quickly, we will ( ) out of clean water someday.」の空所に入る適切な語を選ぶ。\n【なぜrunになるのか】「〜を使い果たす、〜がなくなる」という意味は、動詞runを使ったrun out of〜という決まったイディオムで表すから。\n【ポイント1】run out of〜は「〜がなくなる、〜を使い果たす」という重要イディオム。\n【ポイント2】①go out of（「外に出る」の意味にはなるが、この熟語では使わない）、③use out of（存在しない表現）、④get out of〜（「〜から抜け出す」という別の意味）はどれも誤り。\n【ポイント3】②run（run out of〜の形）が正解。似た表現にrun short of〜（〜が不足する）がある。\n【答え】② run\n【確かめ】run out of clean waterで「きれいな水を使い果たす」という意味になっているかを確認する。\n【よくあるまちがい】go out ofとrun out ofを混同してしまう。\n【ここが絶対】「資源・時間・お金が尽きる」はrun out of〜という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This eco-friendly bag is made ( ) recycled plastic bottles.',
    choices: ['① of', '② from', '③ by', '④ with'],
    answer: '② from',
    hint: '材料が加工されて元の形が分からなくなる場合の前置詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「This eco-friendly bag is made ( ) recycled plastic bottles.」の空所に入る適切な前置詞を選ぶ。\n【なぜfromになるのか】ペットボトルが加工されて別のもの（バッグ）に変化しており、材料が見た目のまま分からなくなっているため、be made from〜（材料が変化している場合）を使う必要があるから。\n【ポイント1】be made of〜は材料が加工されても元の見た目や性質がそのまま分かる場合に使う（例：made of wood）。\n【ポイント2】be made from〜は材料が化学的・物理的に変化し、見た目が変わっている場合に使う（ペットボトル→新しいプラスチック製品）。\n【ポイント3】③by（動作主を表す）、④with（手段・道具を表す）はどちらも材料表現には使わない。②from（材料が変化している場合）が正解。\n【答え】② from\n【確かめ】recycled plastic bottlesがバッグに加工されて見た目が変わっていることから、fromが正しいことを確認する。\n【よくあるまちがい】be made of〜とbe made from〜を混同し、材料が変化しているかどうかを見分けずにofを使ってしまう。\n【ここが絶対】材料の見た目が変わらない場合はof、変わる場合はfromを使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  It is not easy to ( ) rid of bad eating habits once you are used to them.',
    choices: ['① take', '② make', '③ get', '④ do'],
    answer: '③ get',
    hint: 'get rid of〜 で「〜を取り除く」という熟語。',
    explanation: `【出題意図】
句動詞 get rid of〜（〜を取り除く、〜をなくす）を正確に知っているかを問う問題。

【解説】
get rid of〜 は「〜を取り除く、処分する」という意味の重要イディオム。
・① take → take rid of という表現は存在しない
・② make → make rid of という表現は存在しない
・③ get → get rid of〜（✓）
・④ do → do rid of という表現は存在しない

日本語訳：「一度慣れてしまうと、悪い食習慣を断ち切ることは簡単ではない。」

【文法ポイント】
get rid of〜：不要なもの・悪習慣・害虫などを取り除く際によく使われる表現。
be used to〜（〜に慣れている）と get used to〜（〜に慣れる）もセットで覚える。

【入試頻出】
・We need to get rid of plastic waste in our daily lives.
・It's hard to get rid of a habit once you have it.
・He got rid of his old car to reduce pollution.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Many children in the region suffer ( ) diseases caused by polluted water.',
    choices: ['① of', '② from', '③ with', '④ by'],
    answer: '② from',
    hint: 'suffer の後ろに来る前置詞を選ぶ。「〜が原因で苦しむ」という意味。',
    explanation: `【出題意図】
熟語 suffer from〜（〜に苦しむ、〜を患う）の前置詞を問う問題。

【解説】
suffer from〜 は「（病気などに）苦しむ、〜が原因で被害を受ける」という意味のイディオム。前置詞 from が固定。
・① of → die of〜（〜が原因で死ぬ）などには使うが suffer には使わない
・② from → suffer from〜（✓）
・③ with → deal with〜（〜に対処する）などに使う
・④ by → 動作主を表す前置詞で、この熟語には使わない

日本語訳：「この地域の多くの子どもたちが、汚染された水が原因の病気に苦しんでいる。」

【文法ポイント】
suffer from〜：病気・苦痛・被害などの原因を示す。die of / die from〜（病気・原因で死ぬ）も似た構造。

【入試頻出】
・He suffers from a serious illness.
・Many animals suffer from the loss of their habitat.
・The town suffered from a lack of clean water.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Our health greatly depends ( ) the quality of the food we eat every day.',
    choices: ['① of', '② on', '③ at', '④ in'],
    answer: '② on',
    hint: 'depend の後ろに来る前置詞を選ぶ。「〜に左右される」という意味。',
    explanation: `【出題意図】
熟語 depend on〜（〜次第である、〜に頼る）の前置詞を問う問題。

【解説】
depend on〜 は「〜に左右される、〜次第である」という意味のイディオム。前置詞 on が固定。
・① of → depend of という表現は存在しない
・② on → depend on〜（✓）
・③ at → depend at という表現は存在しない
・④ in → depend in という表現は存在しない

日本語訳：「私たちの健康は、毎日食べる食べ物の質に大きく左右される。」

【文法ポイント】
depend on〜：人・状況・条件などに頼る、左右される場合に使う頻出熟語。rely on〜（〜に頼る）も同じ前置詞を取る。

【入試頻出】
・Your success depends on how hard you try.
・Many countries depend on fossil fuels for energy.
・The plan depends on the weather.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Even small actions like turning off lights can ( ) a difference for the environment.',
    choices: ['① do', '② make', '③ have', '④ take'],
    answer: '② make',
    hint: 'make a difference で「変化をもたらす、効果がある」という熟語。',
    explanation: `【出題意図】
熟語 make a difference（変化をもたらす、効果がある）を正確に知っているかを問う問題。

【解説】
make a difference は「変化をもたらす、効果がある」という意味の重要イディオム。
・① do → do a difference という表現は存在しない
・② make → make a difference（✓）
・③ have → have a difference という表現は存在しない
・④ take → take a difference という表現は存在しない

日本語訳：「電気を消すといった小さな行動でさえ、環境にとって変化をもたらすことができる。」

【文法ポイント】
make a difference：良い影響・効果を与えるという意味で環境や社会問題について語る文章に頻出。反対の意味は make no difference（違いがない、効果がない）。

【入試頻出】
・Every little bit helps to make a difference.
・Recycling can make a big difference for our planet.
・Your effort will make no difference if you give up now.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The doctor ( ) works at this clinic gives free health checkups to elderly people every month.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation:
      '【何を聞かれているか】「The doctor ( ) works at this clinic gives free health checkups to elderly people every month.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞The doctor（医師）は人で、関係代名詞節の中でworks（働いている）の主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がThe doctor（人）で、関係代名詞節内でworksの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】関係代名詞まとめ：人・主格はwho、人・目的格はwhom、物・主格/目的格はwhich、人/物・所有格はwhose。\n【答え】① who\n【確かめ】whoのあとに動詞（works）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The plastic bag ( ) I used yesterday ended up polluting the river near my house.',
    choices: ['① who', '② which', '③ where', '④ whom'],
    answer: '② which',
    hint: '先行詞は「物（袋）」。関係代名詞節内で used の目的語になっている。',
    explanation:
      '【何を聞かれているか】「The plastic bag ( ) I used yesterday ended up polluting the river near my house.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhichになるのか】先行詞The plastic bag（プラスチック袋）は物で、関係代名詞節の中でI used（　）の目的語の役割をしているため、先行詞が物・目的格のときに使うwhichを選ぶ必要があるから。\n【ポイント1】先行詞がThe plastic bag（物）で、関係代名詞節内でI usedの目的語になっている（目的格）。\n【ポイント2】①whoは先行詞が人、③whereは関係副詞、④whomは先行詞が人・目的格で、どれも文脈に合わない。\n【ポイント3】whichは省略も可能で、thatに置きかえることもできる：The plastic bag (that) I used yesterday〜。\n【答え】② which\n【確かめ】whichのあとにI used（主語＋動詞）が続いている（目的語の役割）ことを確認する。\n【よくあるまちがい】先行詞が物なのにwhoを選んでしまう。\n【ここが絶対】目的格の関係代名詞は省略できる。先行詞が物ならwhich（thatはどちらにも使える）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I visited the factory ( ) old bottles are turned into new glass products.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所（factory）」で、関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 where（先行詞が場所）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「the factory（工場）」= 場所。節内では「old bottles are turned into new glass products in the factory」の前置詞 in の部分が関係副詞 where に変わった構造。
・① which → 物に使う関係代名詞（前置詞が必要：the factory in which〜）
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞（✓）
・④ when → 時を先行詞にとる関係副詞

日本語訳：「私は古い瓶が新しいガラス製品に生まれ変わる工場を訪れた。」

【文法ポイント】
関係副詞まとめ：where（場所：factory / center / town）、when（時：day / year / season）、why（理由：reason）。where＝前置詞＋which。

【入試頻出】
・This is the center where used clothes are collected.
・I remember the year when the recycling law started.
・Tell me the reason why plastic straws were banned.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI know a scientist.\nHer research is about ocean pollution.',
    answer: 'I know a scientist whose research is about ocean pollution.',
    hint: '2つの文をつなぐとき、Her（彼女の）を所有格の関係代名詞 whose に変える。',
    explanation:
      '【何を聞かれているか】「I know a scientist. Her research is about ocean pollution.」を関係代名詞を使って1文にする。\n【なぜwhoseを使うのか】2つ目の文のHer（彼女の）がa scientist（1つ目の文の名詞）の所有を表しているため、この所有の関係を表す所有格の関係代名詞whoseに置きかえる必要があるから。\n【ポイント1】先行詞を特定する：a scientist（人）。\n【ポイント2】Her（所有格）をwhoseに置きかえ、先行詞a scientistの直後に置く。\n【ポイント3】I know a scientist whose research is about ocean pollution.（私は、研究が海洋汚染についてである科学者を知っている）。\n【答え】I know a scientist whose research is about ocean pollution.\n【確かめ】whoseのあとにresearch（名詞）、is（動詞）と続いているかを確認する。\n【よくあるまちがい】whoseのかわりにwhoを使ってしまう。所有の関係にはwhoseを使う。\n【ここが絶対】whoseは先行詞の所有格を表す関係代名詞。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_25',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：Why does recycling matter?\n「あなたはなぜリサイクルが重要なのか知っていますか？」',
    answer: 'Do you know why recycling matters?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、do/does は消える。',
    explanation: `【出題意図】
間接疑問文（疑問詞 + 主語 + 動詞の語順）への書き換えを問う問題。語順の変化が最大のポイント。

【解説】
直接疑問文「Why does recycling matter?」を間接疑問文にする手順：
1. 疑問詞 Why はそのまま使う
2. 疑問詞の後ろは「主語 + 動詞」の平叙文語順に変える
3. does は消えて、代わりに動詞に3単現の s がつく（matter → matters）
4. 全体を「Do you know + 間接疑問」にする

× Do you know why does recycling matter?（誤り）
○ Do you know why recycling matters?（正解）

日本語訳：「あなたはなぜリサイクルが重要なのか知っていますか？」

【文法ポイント】
間接疑問文の語順：疑問詞 + 主語 + 動詞〜（平叙文語順）。

【入試頻出】
・Do you know why the ice caps are melting?
・I wonder why so many people waste food.
・Can you tell me why this river is so polluted?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) much plastic waste this factory produces every day?',
    choices: ['① what', '② how', '③ why', '④ where'],
    answer: '② how',
    hint: '「どのくらいの量のプラスチックごみ」という数量を尋ねる疑問詞を選ぶ。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞を文脈から選ぶ問題。how much〜（数量）の用法が目標。

【解説】
「Could you tell me ( ) much plastic waste this factory produces〜?」= 「この工場が毎日どのくらいのプラスチックごみを出しているか教えてもらえますか？」量を尋ねるので how を使い、how much〜 の形にする。
・① what → 「何」物・事を尋ねる（how much とセットにはならない）
・② how → how much〜「どのくらいの量の〜」（✓）
・③ why → 「なぜ」理由を尋ねる
・④ where → 「どこ」場所を尋ねる

日本語訳：「この工場は毎日どのくらいのプラスチックごみを出しているか教えていただけますか？」

【文法ポイント】
how much + 数えられない名詞：量を尋ねる（how much waste / how much water）。how many + 数えられる名詞：数を尋ねる（how many bottles）。

【入試頻出】
・Do you know how much energy this building uses?
・Can you tell me how many trees were planted last year?
・I want to know how much water we waste every day.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ know / why / do / air / you / polluted / the / is ）\n「なぜ空気が汚染されているか知っていますか？」',
    answer: 'Do you know why the air is polluted?',
    hint: '間接疑問文：疑問詞（why）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation: `【出題意図】
間接疑問文の語順整序問題。「疑問詞 + 主語 + 動詞」という間接疑問の語順と、全体が疑問文になることを同時に確認する。

【解説】
ポイントは2つ：
1. 全体が「Do you know〜?」という疑問文
2. know の目的語（間接疑問）は「why the air is polluted」（疑問文の語順ではなく平叙文語順）

× Do you know why is the air polluted?（誤り）
○ Do you know why the air is polluted?（正解）

語句の組み立て：Do you know / why / the air is polluted？

日本語訳：「なぜ空気が汚染されているか知っていますか？」

【文法ポイント】
間接疑問の語順：疑問詞 + 主語 + 動詞。全体が疑問文の場合：Do/Can/Could + 主語 + 動詞 + 疑問詞 + 主語 + 動詞〜?

【入試頻出】
・Do you know why the river smells so bad?
・Can you tell me why recycling is important?
・I want to know why this beach has so much trash.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ have / recycling / since / we / for / been / childhood / our ）\n「私たちは子どもの頃からリサイクルをしてきた。」',
    answer: 'We have been recycling since our childhood.',
    hint: '「子どもの頃から」は起点を表すので for ではなく since を使う。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for / since の使い分けを問う問題。不要語の識別も含む。

【解説】
「子どもの頃から」は起点（starting point）なので since を使う。for は期間（duration）に使う語で、この文脈には合わない。
不要語：for（× We have been recycling for our childhood. は不自然）

正しい語順：We have been recycling since our childhood.（現在完了進行形＝have been + Ving）

日本語訳：「私たちは子どもの頃からリサイクルをしてきた。」

【文法ポイント】
for vs since：for＋期間（for ten years）、since＋起点（since our childhood / since 2010）。現在完了進行形の構造：have/has + been + 動詞-ing。

【入試頻出】
・She has been growing vegetables since last spring.
・They have been saving energy for two years.
・We have been using this water tank since it was installed.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / this / clean / water / drink / to / is / not ）\n「この水は飲むのに十分きれいではない。」',
    answer: 'This water is not clean enough to drink.',
    hint: '「〜するのに十分〜だ」は 形容詞 + enough + to 動詞 の語順。',
    explanation: `【出題意図】
「形容詞 + enough + to 動詞」の語順を問う整序問題。enough の位置と否定文の作り方が鍵。

【解説】
「〜するのに十分〜だ」は：主語 + be + 形容詞 + enough + to + 動詞原形。enough は形容詞の後ろに置く（× enough clean は誤り）。否定文では not が be動詞の後ろに来る。

正しい語順：This water is not clean enough to drink.

日本語訳：「この水は飲むのに十分きれいではない。」

【文法ポイント】
形容詞 + enough + to 動詞：「〜するのに十分〜だ」。否定形にすると「〜するほど十分〜ではない」という意味になる。too + 形容詞 + to 動詞（〜すぎて〜できない）と対で覚える。

【入試頻出】
・This lake is not clean enough to swim in.
・The air here is fresh enough to breathe safely.
・The soil is not rich enough to grow vegetables.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ gave / him / the / doctor / some / advice / health ）\n「その医者は彼に健康に関するアドバイスをいくつか与えた。」',
    answer: 'The doctor gave him some health advice.',
    hint: 'give + 人 + 物 の語順（第4文型 SVOO）を使う。',
    explanation:
      '【何を聞かれているか】gave / him / the / doctor / some / advice / health を並べ替えて「その医者は彼に健康に関するアドバイスをいくつか与えた。」という英文を作る。\n【なぜhim some health adviceという語順になるのか】give＋人＋物は「人に物を与える」という第4文型（SVOO）の形で、間接目的語（人）を直接目的語（物）より先に置くという決まりがあるから。\n【ポイント1】give＋人＋物＝人に物を与える（第4文型）。The doctor（S）+ gave（V）+ him（間接目的語）+ some health advice（直接目的語）。\n【ポイント2】語順はThe doctor gave him some health advice.になる。\n【ポイント3】第3文型に書きかえるとThe doctor gave some health advice to him.（toを使う）になる。同じ仲間の動詞にsend、show、teach、tellがある。\n【答え】The doctor gave him some health advice.\n【確かめ】him（人）がsome health advice（物）より先に置かれているかを確認する。\n【よくあるまちがい】gave some health advice himのように、物を人より先に置いてしまう。\n【ここが絶対】give＋人＋物の第4文型では、人（間接目的語）を先に、物（直接目的語）をあとに置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ will / go / out / after / finishing / sorting / the / trash / I ）\n「ゴミを分別し終えた後、私は出かけます。」',
    answer: 'I will go out after finishing sorting the trash.',
    hint: 'after の後には動名詞（〜ing）が来る。after + 動名詞 = 〜した後で。',
    explanation: `【出題意図】
前置詞 after + 動名詞 の用法と、語順整序を問う問題。動名詞が2つ連続する構造（finishing sorting）にも注意する。

【解説】
前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜し終えた後で」= after + finishing + 動名詞（sorting）。finish の目的語にも動名詞が来るため finishing sorting という形になる。

正しい語順：I will go out after finishing sorting the trash.

日本語訳：「ゴミを分別し終えた後、私は出かけます。」

【文法ポイント】
前置詞 + 動名詞：after + ing（〜した後で）、before + ing（〜する前に）、without + ing（〜せずに）。finish + 動名詞（〜し終える）と組み合わせて finish + ing が二重に使われる文もある。

【入試頻出】
・She left after finishing her homework.
・He went to bed without turning off the light.
・Before throwing it away, check if it can be recycled.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ I / the / man / met / yesterday / is / who / doctor / the ）\n「私が昨日会った男性はその医者です。」',
    answer: 'The man who I met yesterday is the doctor.',
    hint: '関係代名詞 who を使って先行詞「the man」を修飾する節を作る。',
    explanation:
      '【何を聞かれているか】I / the / man / met / yesterday / is / who / doctor / the を並べ替えて「私が昨日会った男性はその医者です。」という英文を作る。\n【なぜwhoが目的格として使えるのか】whoは本来主格の関係代名詞だが、口語では目的格（whomの代わり）としてもよく使われ、先行詞The manのうしろに「who I met yesterday」という節を置いて修飾できるから。\n【ポイント1】文の骨格はThe man is the doctor.（その男性は医者だ）。\n【ポイント2】修飾部はwho I met yesterday（私が昨日会った）。ここでのwhoはmetの目的語にあたる目的格の働きをしている。\n【ポイント3】組み合わせるとThe man who I met yesterday is the doctor.になる。＝The man (whom/that) I met yesterday is the doctor.（省略も可）。\n【答え】The man who I met yesterday is the doctor.\n【確かめ】関係代名詞節（who I met yesterday）が先行詞The manの直後に置かれ、そのあとに主節の動詞is the doctorが続いているかを確認する。\n【よくあるまちがい】関係代名詞節を先行詞から離れた位置に置いてしまう。\n【ここが絶対】関係代名詞節は必ず先行詞の直後に置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ air / clean / is / enough / to / this / for / everyone / breathe ）\n「この空気はみんなが呼吸できるほどきれいだ。」',
    answer: 'This air is clean enough for everyone to breathe.',
    hint: '「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。',
    explanation:
      '【何を聞かれているか】air / clean / is / enough / to / this / for / everyone / breathe を並べ替えて「この空気はみんなが呼吸できるほどきれいだ。」という英文を作る。\n【なぜfor＋人が入るのか】「〜が…するのに十分〜だ」と、動作をする人を明示するには、〈形容詞＋enough＋for＋人＋to＋動詞原形〉という構文を使い、for＋人が不定詞の意味上の主語を示すから。\n【ポイント1】構文は主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形。\n【ポイント2】This air is clean enough for everyone to breathe.（この空気はみんなが呼吸できるほどきれいだ）。\n【ポイント3】反対の意味を表す〈too＋形容詞＋for＋人＋to＋動詞〉（〜すぎて…できない）とセットで覚える。\n【答え】This air is clean enough for everyone to breathe.\n【確かめ】for everyoneがenoughとtoの間に正しく置かれているかを確認する。\n【よくあるまちがい】for everyoneを文の最後に置いてしまう。\n【ここが絶対】「形容詞＋enough＋for＋人＋to＋動詞」の語順を1つのまとまりとして覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・短い長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: I\'ve been feeling very tired lately, and I don\'t know why.\nB: ( )\n\n① You should try to sleep earlier and eat more vegetables.\n② That sounds like a fun trip.\n③ I don\'t like doctors.\n④ You must be very happy.',
    answer: '① You should try to sleep earlier and eat more vegetables.',
    hint: '体調不良を相談されたときの、健康に関する自然なアドバイスを選ぶ。',
    explanation: `【出題意図】
体調・健康に関する相談への適切な応答を問う問題。対話文頻出の助言表現の習得が目標。

【解説】
Aは「最近ずっと疲れている」と体調について相談している。それに対する自然な返答は健康的なアドバイス。
・① You should try to sleep earlier and eat more vegetables. → 睡眠と食生活についての助言（✓）
・② That sounds like a fun trip. → 旅行の話に対する返答で文脈に合わない
・③ I don't like doctors. → 会話の流れと無関係
・④ You must be very happy. → 疲れているという話と矛盾する

日本語訳：
A：最近ずっと疲れていて、なぜだか分からないんです。
B：もっと早く寝て、野菜をたくさん食べるようにしてみたらどうですか。

【文法ポイント】
should を使った助言表現：You should + 動詞原形〜（〜した方がいい）。健康相談の対話文では生活習慣に関する助言が頻出。

【入試頻出】
・You should drink more water every day.
・You should see a doctor if you keep feeling tired.
・Try to get enough sleep every night.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: How often do you take your plastic bottles to the recycling bin? B: ( )',
    choices: ['① It\'s about two kilometers away.', '② I recycle them almost every week.', '③ I don\'t like plastic bottles.', '④ The bin is very large.'],
    answer: '② I recycle them almost every week.',
    hint: 'How often〜? は頻度を尋ねる表現。頻度で答えている選択肢を選ぶ。',
    explanation:
      '【何を聞かれているか】「How often do you take your plastic bottles to the recycling bin?」への適切な返答を選ぶ。\n【なぜI recycle them almost every week.が正しいのか】How often〜?は「どのくらいの頻度で〜するか」を尋ねる表現で、これには頻度を表す語句（every week、once a monthなど）で答える決まりがあるから。\n【ポイント1】①about two kilometers awayは距離を答えており、How far〜?への返答にあたる。\n【ポイント2】③I don\'t like plastic bottles.は好き嫌いの話で質問とずれる。④The bin is very large.は大きさの話で無関係。\n【ポイント3】②I recycle them almost every week.が正しい。頻度を答えている。\n【答え】② I recycle them almost every week.\n【確かめ】質問がHow often（頻度）を尋ねているのに対し、選んだ返答が頻度を答えているかを確認する。\n【よくあるまちがい】How often〜?とHow far〜?を混同し、距離を答えてしまう。\n【ここが絶対】頻度を尋ねるHow often〜?には、every day、once a weekのような頻度を表す語句で答える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: I really want to run in the marathon next month, but I haven\'t trained enough. B: ( ) You still have four weeks to practice.',
    choices: ['① Don\'t give up.', '② That\'s too bad.', '③ I\'m sorry to hear that.', '④ Never mind.'],
    answer: '① Don\'t give up.',
    hint: '後に続く「まだ4週間ある」という励ましの言葉に合う返答を選ぶ。',
    explanation:
      '【何を聞かれているか】「I really want to run in the marathon next month, but I haven\'t trained enough.」に対するBの返答（このあとYou still have four weeks to practice.と続く）に合う表現を選ぶ。\n【なぜDon\'t give up.が正しいのか】Aが練習不足を不安に思っていることを伝えており、そのあとBが「まだ4週間ある」と励ましているため、その前置きとしては「諦めないで」という励ましの表現が自然につながるから。\n【ポイント1】①Don\'t give up.（諦めないで）は励ましの表現で、後に続くYou still have four weeks to practice.（まだ4週間ある）と自然につながる。\n【ポイント2】②That\'s too bad.と③I\'m sorry to hear that.はどちらも同情・慰めの表現で、励ましの流れには合わない。\n【ポイント3】④Never mind.（気にしないで）は軽い謝罪への返答で、この文脈には不自然。\n【答え】① Don\'t give up.\n【確かめ】選んだ返答のあとにYou still have four weeks to practice.が自然に続くかを確認する。\n【よくあるまちがい】②That\'s too bad.のように、同情の表現を励ましの場面で使ってしまう。\n【ここが絶対】対話文の空所は、その後に続く文とのつながりを見て、共感なのか励ましなのかを判断する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: May I refill my water bottle here? B: ( ) A: Thank you.',
    choices: ['① Sure, go ahead.', '② No, you may not refill it.', '③ I don\'t have any water.', '④ Yes, you may go.'],
    answer: '① Sure, go ahead.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I refill〜? = 「〜を補充してもいいですか？」という許可を求める丁寧な表現。直後に「Thank you.（ありがとう）」とあるので、許可を与える返答が必要。
・① Sure, go ahead. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not refill it. → 拒否する返答でAの「Thank you」と矛盾する
・③ I don't have any water. → 水がないと言っており状況から不自然
・④ Yes, you may go. → go（行く）は refill（補充する）とは関係ない

日本語訳：
A：ここで水筒に水を補充してもいいですか？
B：もちろん、どうぞ。
A：ありがとう。

【文法ポイント】
許可を求める表現：May I〜?（丁寧）、Can I〜?（やや砕けた言い方）。許可を与える表現：Sure. / Of course. / Go ahead.

【入試頻出】
・May I use this reusable cup? — Sure, go ahead.
・Can I bring my own bag? — Of course.
・May I take one of these free samples? — Certainly.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  I have never ( ) such polluted air in my life.',
    choices: ['① see', '② saw', '③ seen', '④ seeing'],
    answer: '③ seen',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。see の過去分詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「I have never ( ) such polluted air in my life.」の空所に入る適切な形を選ぶ。\n【なぜseenになるのか】neverを使った現在完了形の経験用法「一度も〜したことがない」は、have/has＋過去分詞の形にする必要があり、seeの過去分詞はseenだから。\n【ポイント1】neverは現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形はhave/has＋過去分詞。\n【ポイント2】seeの活用：see（原形）→saw（過去形）→seen（過去分詞）。①see（原形）、②saw（過去形）はhaveのあとに使えない。\n【ポイント3】④seeing（現在分詞）はhave been seeingなら合うが、この文脈には不自然。③seen（過去分詞）が正解。\n【答え】③ seen\n【確かめ】haveのあとに過去分詞seenが続いているかを確認する。\n【よくあるまちがい】have sawのように、haveのあとに過去形をそのまま続けてしまう。\n【ここが絶対】現在完了形はhave/has＋過去分詞。不規則動詞の活用（see-saw-seen）を正確に覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  The city\'s clean-up event will be held ( ) the first Sunday of every month.',
    choices: ['① in', '② at', '③ on', '④ by'],
    answer: '③ on',
    hint: '曜日・特定の日には前置詞 on を使う。',
    explanation:
      '【何を聞かれているか】「The city\'s clean-up event will be held ( ) the first Sunday of every month.」の空所に入る適切な前置詞を選ぶ。\n【なぜonになるのか】the first Sunday of every month（毎月の第1日曜日）のような特定の日・曜日を表すときは、前置詞onを使うという決まりがあるから。\n【ポイント1】①in（月・年・季節・時間帯に使う）、②at（時刻・特定の時点に使う）はどちらも「特定の日」には使わない。\n【ポイント2】③on（曜日・特定の日に使う）が正解。\n【ポイント3】④by（期限「〜までに」）も文脈に合わない。時を表す前置詞まとめ：at＝時刻・時点、on＝曜日・日付、in＝月・年・季節。\n【答え】③ on\n【確かめ】the first Sunday of every monthが「特定の日」にあたることから、onが正しいことを確認する。\n【よくあるまちがい】inやatを、日付を表す前置詞として使ってしまう。\n【ここが絶対】時を表す前置詞は、atは時刻・時点、onは曜日・日付、inは月・年・季節、と使い分ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  The teacher asked the students ( ) plant a tree for Earth Day.',
    choices: ['① plant', '② to plant', '③ planting', '④ planted'],
    answer: '② to plant',
    hint: 'ask + 人 + to do（人に〜するよう頼む）という構文。',
    explanation: `【出題意図】
「ask + 人 + to + 動詞」という第5文型（SVOC）の用法を問う問題。

【解説】
ask + 人 + to do = 「人に〜するよう頼む」という重要構文。
・① plant → 原形のみ（× askの第5文型ではtoが必要）
・② to plant → ask + 人 + to do（✓）
・③ planting → 動名詞（ask + 人 + doing という形は存在しない）
・④ planted → 過去分詞（文法的に合わない）

日本語訳：「先生は生徒たちにアースデイのために木を植えるよう頼んだ。」

【文法ポイント】
「動詞 + 人 + to do」の構文（依頼・使役）：ask + 人 + to do（人に〜するよう頼む）、tell + 人 + to do（人に〜するよう言う）、want + 人 + to do（人に〜してほしい）。

【入試頻出】
・The mayor asked residents to sort their garbage carefully.
・She told her children to turn off the water while brushing their teeth.
・My teacher wants us to bring our own bags to school.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  I think ( ) necessary to reduce plastic waste as soon as possible.',
    choices: ['① this', '② that', '③ it', '④ what'],
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation:
      '【何を聞かれているか】「I think ( ) necessary to reduce plastic waste as soon as possible.」の空所に入る適切な語を選ぶ。\n【なぜitになるのか】to reduce plastic waste（プラスチックごみを減らすこと）という長い内容を先に置くと文のバランスが悪くなるため、その内容を指す形式主語itを先に置いて、本当の中身をあとに回すという英語の決まりがあるから。\n【ポイント1】this、that、whatはこの位置に置いても文法的に成立しない。\n【ポイント2】③it（形式主語）が正解。itはto reduce plastic waste as soon as possibleを指す。\n【ポイント3】形式主語itの基本構文：It is＋形容詞＋to＋動詞〜＝「〜することは（形容詞）だ」（例：It is important to reduce food waste.）。\n【答え】③ it\n【確かめ】itがto reduce plastic waste as soon as possibleを指していることを確認する。\n【よくあるまちがい】thisやthatを使ってしまう。形式主語には必ずitを使う。\n【ここが絶対】「〜することは…だ」を表すときは、形式主語itを使い、本当の中身（to不定詞）は後ろに置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までに一度もリサイクル活動に参加したことがありません。」',
    answer: 'I have never taken part in a recycling activity. / I have never participated in recycling activities.',
    hint: '「〜したことがない」は現在完了の経験用法（have never + 過去分詞）。「参加する」は take part in〜 か participate in〜。',
    explanation: `【出題意図】
現在完了形（経験）の否定文と、「参加する」を表す take part in〜 / participate in〜 を使う英作文問題。

【解説】
「今までに〜したことがない」= have/has never + 過去分詞（現在完了・経験の否定）。「参加する」= take part in〜 または participate in〜。

組み合わせ：
I have never taken part in a recycling activity.
= I have never participated in recycling activities.

注意：take の過去分詞は taken。participate は規則動詞なので participated。

【文法ポイント】
現在完了・経験の否定：have never + 過去分詞。「参加する」の同義表現：take part in〜 = participate in〜 = join〜（joinは他動詞でinを伴わない点に注意）。

【入試頻出】
・Have you ever taken part in a beach clean-up?
・I have never joined a tree-planting event.
・She has participated in many environmental projects.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「彼が集めたペットボトルを私に見せてもらえませんか？」',
    answer: 'Could you show me the plastic bottles that he collected? / Could you show me the plastic bottles he collected?',
    hint: '「見せてもらえませんか」は Could you show me〜?、「彼が集めた」は関係代名詞（that / which）で修飾。',
    explanation:
      '【何を聞かれているか】「彼が集めたペットボトルを私に見せてもらえませんか？」を英語に訳す。\n【なぜCould you〜?とthat/whichを組み合わせるのか】丁寧な依頼にはCould you〜?を使い、「彼が集めた」という説明を加えるには、the plastic bottlesのうしろに関係代名詞（目的格）でcollected節をつなげる必要があるから。\n【ポイント1】丁寧な依頼：Could you show me〜?＝「〜を見せていただけますか？」（show＋人＋物の第4文型）。\n【ポイント2】「彼が集めた（ペットボトル）」＝the plastic bottles that/which he collected（関係代名詞・目的格、省略も可）。\n【ポイント3】組み合わせるとCould you show me the plastic bottles (that) he collected?になる。\n【答え】Could you show me the plastic bottles that he collected? / Could you show me the plastic bottles he collected?\n【確かめ】the plastic bottlesのあとにhe collected（主語＋動詞）が続いており、collectの目的語がthe plastic bottlesであることを確認する。\n【よくあるまちがい】Could you〜?のかわりにCan you〜?を使ってしまい、ていねいさが弱くなる。\n【ここが絶対】Could you〜?はCan you〜?の丁寧版。目的格の関係代名詞は省略できる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「母は毎朝私に健康的な朝食を作ってくれます。」',
    answer: 'My mother makes me a healthy breakfast every morning.',
    hint: 'make + 人 + 物 の語順（第4文型 SVOO）を使う。',
    explanation: `【出題意図】
第4文型（SVOO）の動詞 make を使った英作文問題。

【解説】
「母が私に朝食を作ってくれる」= My mother makes me a healthy breakfast.（make + 人 + 物）「every morning（毎朝）」は習慣を表すので現在形を使う。

完成した文：My mother makes me a healthy breakfast every morning.
別解（第3文型）：My mother makes a healthy breakfast for me every morning.

【文法ポイント】
第4文型（SVOO）の動詞：make / buy / cook + 人 + 物（間接目的語は for で書き換え可能）。習慣的な行為は現在形で表す。

【入試頻出】
・My father cooks us dinner every Sunday.
・She buys her children fresh vegetables every week.
・My mother makes a healthy lunch for me every day.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私があなたなら、車ではなく公共交通機関を使うでしょう。」',
    answer: 'If I were you, I would use public transportation instead of a car.',
    hint: '現在の事実に反する仮定を表す仮定法過去（If + 主語 + were, 主語 + would + 動詞原形）を使う。',
    explanation: `【出題意図】
仮定法過去（If I were you, I would〜）の構文を使った英作文問題。アドバイスの定型表現。

【解説】
「もし私があなたなら」＝現実には自分はあなたではない、という事実に反する仮定なので仮定法過去を使う。If節では主語がIでもwereを使う。

構成：If I were you（もし私があなたなら）＋ I would use public transportation（公共交通機関を使うでしょう）＋ instead of a car（車の代わりに）

完成した文：If I were you, I would use public transportation instead of a car.

【文法ポイント】
仮定法過去：現在または未来の事実に反する仮定。If + 主語 + 過去形（were）, 主語 + would + 動詞原形。instead of〜：〜の代わりに。

【入試頻出】
・If I were you, I would recycle more carefully.
・If I had more time, I would join the clean-up event.
・If she were here, she would remind us to turn off the lights.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「定期的な運動は体だけでなく心にも良い。」',
    answer: 'Regular exercise is good not only for the body but also for the mind.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。',
    explanation:
      '【何を聞かれているか】「定期的な運動は体だけでなく心にも良い。」を英語に訳す。\n【なぜnot only A but also Bを使うのか】「〜だけでなく…も」という意味は、相関接続詞not only A but also Bという決まった形で表し、AとBには文法的に同じ形（この文では前置詞句for the body／for the mind）を並べる必要があるから。\n【ポイント1】「〜だけでなく…も」＝not only A but also B。\n【ポイント2】AとBの部分には同じ形（前置詞句なら前置詞句どうし）を並べる。Regular exercise is good not only for the body but also for the mind.\n【ポイント3】相関接続詞の仲間：both A and B（AもBも）、either A or B（AかBのどちらか）。\n【答え】Regular exercise is good not only for the body but also for the mind.\n【確かめ】not onlyのあとと、but alsoのあとが同じ形（for the body／for the mind）になっているかを確認する。\n【よくあるまちがい】not onlyのあとと、but alsoのあとの形をそろえず、前置詞を混ぜてしまう。\n【ここが絶対】not only A but also BのAとBは文法的に同じ形にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_47',
    subject: 'eigo',
    passage: `Every year, families in many countries throw away a large amount of food that is still good to eat. There are some simple ways to reduce this problem. First, plan your meals before you go shopping so you only buy what you need. Second, use leftovers to make new dishes instead of throwing them away. Third, learn the difference between "best before" and "use by" dates, because food is often still safe to eat after the "best before" date. If more families follow these simple steps, we can save money and protect the environment at the same time.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① 買い物の前に食事の計画を立てることは効果がない。', '② 残り物は新しい料理に使わず、すぐに捨てるべきだ。', '③ 賞味期限が過ぎても食べても安全な場合がある。', '④ この問題を解決するのは政府だけの責任である。'],
    answer: '③ 賞味期限が過ぎても食べても安全な場合がある。',
    hint: '本文中の "food is often still safe to eat after the \'best before\' date" という文を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「計画を立てることは効果がない」→ 本文は "plan your meals before you go shopping" を有効な方法として紹介しているので×
② 「残り物はすぐに捨てるべき」→ 本文には "use leftovers to make new dishes instead of throwing them away" とあり真逆なので×
③ 「賞味期限が過ぎても食べても安全な場合がある」→ 本文に "food is often still safe to eat after the 'best before' date" とある（✓）
④ 「政府だけの責任」→ 本文は各家庭の行動を呼びかけており、政府だけの責任とは書かれていないので×

【文法ポイント】
内容一致問題のアプローチ：選択肢を先に読んでキーワードを把握し、本文の該当箇所と慎重に比較する。否定・過度な主張・本文にない情報は誤答パターンの典型。

【入試頻出】
内容一致問題では、本文の言い換え表現に気づくことが正解への鍵。「best before」と「use by」の違いのような具体的事実は本文中の該当文をそのまま探す。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_48',
    subject: 'eigo',
    passage: `Plastic straws are small, but they cause a big problem for the environment. Every day, millions of straws are thrown away after just one use, and many of them end up in rivers and oceans. Sea turtles and other marine animals sometimes swallow these straws by mistake, which can hurt or even kill them. Because of this, some restaurants have stopped giving out plastic straws, and paper or metal straws are now used instead. Customers at first thought these changes were inconvenient, but many of them have gotten used to it over time. Small changes like this can protect ocean life if enough people and businesses take part.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文中の下線部 "this" が指す内容として最も適切なものを選べ。\n① レストランがプラスチックストローの提供をやめ、紙や金属のストローを使うようになったこと\n② 海の生き物が毎日大量に川や海で泳いでいること\n③ お客が最初から紙のストローを喜んで受け入れたこと\n④ プラスチックストローが1回使うごとに再利用されていること',
    answer: '① レストランがプラスチックストローの提供をやめ、紙や金属のストローを使うようになったこと',
    hint: '"this" は直前の文で述べられている内容を指す。直前の文が何を説明しているか確認する。',
    explanation:
      '【何を聞かれているか】本文中の下線部"this"が指す内容として最も適切なものを選ぶ。\n【なぜ①が正解なのか】"this"を含む文の直前に"some restaurants have stopped giving out plastic straws, and paper or metal straws are now used instead."（一部のレストランがプラスチックストローの提供をやめ、代わりに紙や金属のストローを使うようになった）とあり、"this"はこの「変化」を指しているから。\n【ポイント1】指示語の直前を確認する："Customers at first thought these changes were inconvenient, but many of them have gotten used to it over time."という文の"it"（≒this）は、直前の文で説明された変化を指す。\n【ポイント2】②海の生き物が泳ぐことは本文の主旨と無関係。③「お客が最初から喜んで受け入れた」は本文の「最初は不便だと思った」と真逆。④ストローの再利用については本文に記述がない。\n【ポイント3】"this"が指すのは①「レストランがプラスチックストローの提供をやめ、紙や金属のストローを使うようになったこと」。\n【答え】① レストランがプラスチックストローの提供をやめ、紙や金属のストローを使うようになったこと\n【確かめ】"this"を①の内容に置きかえて文を読み直し、意味が通ることを確認する。\n【よくあるまちがい】指示語の直前ではなく、離れた場所の内容から答えを探してしまう。\n【ここが絶対】指示語問題では、指示語の直前の文を確認し、代入して意味が通るかを確かめる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_49',
    subject: 'eigo',
    passage: `Many doctors now say that regular exercise is one of the best things you can do for your mental health, not just your body. When people exercise, their brains release chemicals that make them feel happier and less stressed. Studies show that people who walk or run a few times a week often sleep better and feel more confident. Exercise does not have to be difficult or expensive. Even a short walk around the neighborhood can help. Experts recommend that people try to move their bodies every day, even if it is only for a short time, because small habits can lead to big changes in how we feel.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① 運動が経済にもたらす具体的な数値的効果', '② 運動が心の健康にもたらす良い効果と、日常に取り入れる方法', '③ 医者になるために必要な運動の知識', '④ ジムで行う本格的なトレーニングの重要性'],
    answer: '② 運動が心の健康にもたらす良い効果と、日常に取り入れる方法',
    hint: '本文全体の流れ（効果の説明→科学的根拠→簡単に始める方法→専門家の助言）を把握して、何が最も中心的に述べられているかを考える。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. 主張：運動は体だけでなく心の健康にも良い
2. 根拠：運動をすると脳内物質が分泌され、幸福感やストレス軽減につながる
3. 具体例：短い散歩でも効果がある、難しくなくてよい
4. 専門家の助言：毎日体を動かす小さな習慣が大きな変化につながる

全体を通して「運動と心の健康、その取り入れ方」が中心テーマ → ②が正解

① 経済的な数値効果：本文に記述なし（×）
③ 医者になるための知識：本文の趣旨と無関係（×）
④ 本格的なジムトレーニング：本文はむしろ「難しくなくてよい」と述べている（×）

【文法ポイント】
主題問題のアプローチ：冒頭と末尾を特に注意深く読む。繰り返し登場するキーワード（exercise, mental health, feel）に注目する。

【入試頻出】
主題問題では選択肢が本文の一部のみに対応している場合は不正解になりやすい。本文全体を要約している選択肢を選ぶことが鍵。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_50',
    subject: 'eigo',
    passage: `More and more countries are switching from fossil fuels to renewable energy sources such as solar and wind power. This change brings many benefits. Renewable energy produces much less pollution than burning coal or oil, so it helps keep the air cleaner. It also does not run out, unlike fossil fuels, which took millions of years to form. However, building solar panels and wind turbines still costs a lot of money, and some people worry about the space they take up. Despite these challenges, many experts believe that renewable energy will continue to grow because it is better for both our health and the future of the planet.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っていないものを1つ選べ。',
    choices: ['① 再生可能エネルギーは化石燃料を燃やすよりも汚染が少ない。', '② 再生可能エネルギーは化石燃料と違い、なくなる心配がない。', '③ 太陽光パネルや風力タービンの建設には現在まったく費用がかからない。', '④ 多くの専門家は再生可能エネルギーが今後も増え続けると考えている。'],
    answer: '③ 太陽光パネルや風力タービンの建設には現在まったく費用がかからない。',
    hint: '本文では「太陽光パネルや風力タービンの建設にはまだ多くの費用がかかる」と述べている。',
    explanation:
      '【何を聞かれているか】再生可能エネルギーについてのパッセージを読んで、内容と合っていない選択肢を1つ選ぶ。\n【なぜ③が不一致なのか】本文には"building solar panels and wind turbines still costs a lot of money"（太陽光パネルや風力タービンの建設にはまだ多くの費用がかかる）と書かれており、これは③「まったく費用がかからない」という断定と矛盾するから。\n【ポイント1】①「化石燃料より汚染が少ない」は本文の"Renewable energy produces much less pollution than burning coal or oil"と一致する。\n【ポイント2】②「なくなる心配がない」は本文の"it also does not run out, unlike fossil fuels"と一致する。④「今後も増え続ける」も本文最後の"many experts believe that renewable energy will continue to grow"と一致する。\n【ポイント3】③は本文の「まだ多くの費用がかかる」という記述と矛盾するため、不一致の選択肢。\n【答え】③ 太陽光パネルや風力タービンの建設には現在まったく費用がかからない。\n【確かめ】本文の該当箇所（still costs a lot of money）を読み直し、③の内容と矛盾していることを確認する。\n【よくあるまちがい】「まったく〜ない」のような強調語を含む選択肢を、本文をよく読まずに正しいと判断してしまう。\n【ここが絶対】「合っていないものを選べ」問題では、「まったく」「すべて」のような強調語を含む選択肢ほど本文と丁寧に照合する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
