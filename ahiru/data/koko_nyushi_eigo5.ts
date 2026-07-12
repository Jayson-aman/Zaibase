import type { Question } from './questions';

export const kokoNyushiEigo5: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo5_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nAluminum cans ( ) into new products within about sixty days after they are collected.\n① turn  ② are turned  ③ turned  ④ have turned',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nAccording to the weather forecast, air pollution levels ( ) be very high this afternoon, so children should stay indoors.\n① must  ② may  ③ should  ④ will',
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
    question: '次の（　）内に最も適切な語句を選べ。\n\nOf all the rivers in this area, this one is ( ) polluted.\n① more  ② most  ③ the most  ④ much more',
    answer: '③ the most',
    hint: '「この地域のすべての川の中で」という範囲を表す表現があるので最上級を使う。',
    explanation: `【出題意図】
最上級の形（the most + 形容詞）を正確に使えるかを問う問題。定冠詞 the の必要性がポイント。

【解説】
「Of all the rivers in this area（この地域のすべての川の中で）」は範囲を示す表現で、その中での「一番」を表すには最上級が必要。polluted は3音節以上とみなされる語で more/most 型を使う。
・① more → 比較級（2つを比べる表現。範囲を示す of all と合わない）
・② most → 最上級だが the が抜けている（最上級には必ず the が必要）
・③ the most → 正しい最上級（✓）
・④ much more → 比較級を強調する形（最上級ではない）

日本語訳：「この地域のすべての川の中で、この川が一番汚染されている。」

【文法ポイント】
最上級には必ず the をつける：the + most + 形容詞、または the + 形容詞-est。
「of all〜」「in〜」などの範囲を示す語句は最上級のサイン。

【入試頻出】
・This is the most important lesson we learned about the environment.
・Of all the students, she studies the hardest.
・This is the cleanest beach in the country.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nVolunteers picked up trash along the beach ( ) protect sea animals from plastic waste.\n① for  ② so  ③ to  ④ in order',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nYou should avoid ( ) too much sugar if you want to keep your teeth healthy.\n① eat  ② to eat  ③ eating  ④ eaten',
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
    question: '次の（　）内に最も適切な語句を選べ。\n\nBy the time this recycling program ends, the city ( ) more than one million plastic bottles.\n① will collect  ② has collected  ③ will have collected  ④ collected',
    answer: '③ will have collected',
    hint: '「このプログラムが終わるまでには」という未来の時点での完了を表す時制を選ぶ。',
    explanation: `【出題意図】
未来完了形（will have + 過去分詞）の用法を問う問題。「未来のある時点での完了」を表す時制の識別。

【解説】
「By the time this recycling program ends（このプログラムが終わるまでには）」は未来の時点を示す。その時点までに「100万本以上のペットボトルを集め終えていることになる」という完了を表すには未来完了形を使う。
・① will collect → 単純未来（完了の意味を表せない）
・② has collected → 現在完了（未来の時点には使えない）
・③ will have collected → 未来完了（✓）
・④ collected → 過去形（文脈に合わない）

日本語訳：「このリサイクル計画が終わるまでには、この市は100万本以上のペットボトルを回収し終えていることになる。」

【文法ポイント】
未来完了形＝will have + 過去分詞。目印の語句：by the time〜 / by then / by next〜 / by the end of〜。

【入試頻出】
・By next year, we will have planted a thousand trees.
・She will have finished the project by Friday.
・By the time you get home, I will have cleaned the house.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nIf people ( ) throwing plastic into the ocean, marine life will continue to suffer.\n① will keep  ② keep  ③ kept  ④ keeping',
    answer: '② keep',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation: `【出題意図】
条件節（if 節）での時制のルール「未来のことでも現在形を使う」を問う問題。入試最頻出文法の一つ。

【解説】
「If people 〜, marine life will continue」は条件文。英語では if 節などの副詞節の中では、未来のことであっても will を使わず現在形を使う。
・① will keep → if 節内で will は使えない（×）
・② keep → 現在形（✓）if 節内では現在形で未来を表す
・③ kept → 過去形（仮定法になり文意が変わる）
・④ keeping → 動詞の原形が必要な位置で分詞は使えない

日本語訳：「もし人々が海にプラスチックを捨て続ければ、海の生き物は苦しみ続けるだろう。」

【文法ポイント】
時・条件を表す副詞節の中では未来のことでも現在形：if（もし〜なら）/ when（〜するとき）/ until（〜まで）/ as soon as（〜したらすぐ）。

【入試頻出】
・If we reduce plastic waste, the ocean will become cleaner.
・When people recycle more, less garbage will go to landfills.
・As soon as the rain stops, we will start the clean-up.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nThis recycling center ( ) five years ago to reduce landfill waste.\n① builds  ② is built  ③ was built  ④ has built',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nSolar power is becoming ( ) than coal in many countries now.\n① cheap  ② cheaper  ③ the cheapest  ④ more cheap',
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
    question: '次の（　）内に最も適切な語句を選べ。\n\nMany young people want ( ) part in beach clean-up activities these days.\n① take  ② taking  ③ to take  ④ took',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nThe factory finally stopped ( ) chemical waste into the river last year.\n① dump  ② to dump  ③ dumping  ④ dumped',
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
    question: '次の（　）内に最も適切な語句を選べ。\n\nScientists ( ) the effects of microplastics on fish for over a decade.\n① study  ② have studied  ③ have been studying  ④ studied',
    answer: '③ have been studying',
    hint: '「10年以上にわたって」という継続を表す語句から時制を判断する。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の用法を問う問題。長期にわたる継続的な動作を表す時制の識別が目標。

【解説】
「for over a decade（10年以上にわたって）」は継続を表す語句。過去から現在まで「研究し続けている」という進行中の継続動作を表すには現在完了進行形を使う。
・① study → 現在形（継続の意味が出ない）
・② have studied → 現在完了形（動作の完了・経験の意味が強く、継続の強調には弱い）
・③ have been studying → 現在完了進行形（✓）
・④ studied → 過去形（継続を表せない）

日本語訳：「科学者たちは10年以上にわたってマイクロプラスチックが魚に与える影響を研究し続けている。」

【文法ポイント】
現在完了進行形＝have/has been + 動詞-ing。「for〜（〜の間）」「since〜（〜以来）」とセットで使われることが多い。

【入試頻出】
・We have been working on this environmental project for three years.
・She has been collecting data since last spring.
・They have been trying to reduce food waste for a long time.`,
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
    question: '次の（　）内に最も適切な前置詞を選べ。\n\nMany doctors are worried ( ) the rising number of people who don\'t get enough sleep.\n① of  ② about  ③ with  ④ at',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nShe decided to ( ) up eating fast food after learning about its health risks.\n① give  ② take  ③ make  ④ turn',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nIf we keep using resources so quickly, we will ( ) out of clean water someday.\n① go  ② run  ③ use  ④ get',
    answer: '② run',
    hint: 'run out of〜 で「〜を使い果たす」という熟語。',
    explanation: `【出題意図】
句動詞 run out of〜（〜を使い果たす、〜が尽きる）を正確に知っているかを問う問題。

【解説】
run out of〜 は「〜がなくなる、〜を使い果たす」という重要イディオム。
・① go → go out of は「外に出る」の意味にはなるが、この熟語では使わない
・② run → run out of〜（✓）
・③ use → use out of という表現は存在しない
・④ get → get out of〜 は「〜から抜け出す」という別の意味

日本語訳：「もし私たちがこのままの速さで資源を使い続ければ、いつかきれいな水を使い果たしてしまうだろう。」

【文法ポイント】
run out of〜：資源・時間・お金などが尽きることを表す頻出表現。
似た表現：run short of〜（〜が不足する）

【入試頻出】
・We are running out of time to solve this problem.
・The world may run out of fossil fuels in the future.
・Don't run out of patience when recycling takes extra effort.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThis eco-friendly bag is made ( ) recycled plastic bottles.\n① of  ② from  ③ by  ④ with',
    answer: '② from',
    hint: '材料が加工されて元の形が分からなくなる場合の前置詞を選ぶ。',
    explanation: `【出題意図】
be made of〜 と be made from〜 の使い分けを問う問題。材料が「見た目のまま」か「変化しているか」がポイント。

【解説】
be made of〜：材料が加工されても元の見た目や性質がそのまま分かる場合（例：made of wood）。
be made from〜：材料が化学的・物理的に変化し、見た目が変わっている場合（ペットボトル→新しいプラスチック製品）。
・① of → 材料が変化していない場合に使う
・② from → 材料が加工されて別のものに変化している場合（✓）
・③ by → 動作主を表す（受動態のby〜）で材料には使わない
・④ with → 手段・道具を表す前置詞で材料表現には不適切

日本語訳：「このエコバッグはリサイクルされたペットボトルから作られている。」

【文法ポイント】
be made of〜（見た目が変わらない材料）、be made from〜（見た目が変わる材料）、be made by〜（作った人・会社）。

【入試頻出】
・This chair is made of wood.
・Paper is made from trees.
・This product was made by a local company.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nIt is not easy to ( ) rid of bad eating habits once you are used to them.\n① take  ② make  ③ get  ④ do',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nMany children in the region suffer ( ) diseases caused by polluted water.\n① of  ② from  ③ with  ④ by',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nOur health greatly depends ( ) the quality of the food we eat every day.\n① of  ② on  ③ at  ④ in',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nEven small actions like turning off lights can ( ) a difference for the environment.\n① do  ② make  ③ have  ④ take',
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
    question: '次の（　）内に最も適切な語を選べ。\n\nThe doctor ( ) works at this clinic gives free health checkups to elderly people every month.\n① who  ② which  ③ whom  ④ whose',
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation: `【出題意図】
関係代名詞の選択（who / which / whom / whose）を問う問題。先行詞が人か物か、節内の役割の識別が目標。

【解説】
先行詞は「The doctor（医師）」= 人。関係代名詞節内で「works（働いている）」の主語の役割を果たしている。
・① who → 先行詞が人・主格（✓）
・② which → 先行詞が物や動物
・③ whom → 先行詞が人・目的格
・④ whose → 先行詞が人または物・所有格

日本語訳：「この診療所で働く医師は、毎月お年寄りに無料の健康診断を行っている。」

【文法ポイント】
関係代名詞まとめ：人・主格はwho、人・目的格はwhom、物・主格/目的格はwhich、人/物・所有格はwhose。that はwho/whichの代わりに使えるがwhoseの代わりにはならない。

【入試頻出】
・The nurse who helped me was very kind.
・The scientist who studies climate change gave a speech.
・The volunteer whose idea started the project is my neighbor.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe plastic bag ( ) I used yesterday ended up polluting the river near my house.\n① who  ② which  ③ where  ④ whom',
    answer: '② which',
    hint: '先行詞は「物（袋）」。関係代名詞節内で used の目的語になっている。',
    explanation: `【出題意図】
関係代名詞 which（先行詞が物・目的格）の用法を問う問題。that との言い換えも理解する。

【解説】
先行詞は「The plastic bag（プラスチック袋）」= 物。関係代名詞節内で I used ( )（私が使った）の目的語になっている。
・① who → 先行詞が人のとき使う
・② which → 先行詞が物・目的格（✓）I used which = それを使った
・③ where → 関係副詞（場所を表す先行詞に使う）
・④ whom → 先行詞が人・目的格

which は省略可（thatに置き換え可）：The plastic bag (that) I used yesterday〜

日本語訳：「私が昨日使ったプラスチック袋は、結局家の近くの川を汚染することになった。」

【文法ポイント】
目的格の関係代名詞は省略可能。先行詞＋関係代名詞（目的格）＋主語＋動詞〜という構造を確認する。

【入試頻出】
・The bottle (which) she threw away was still full.
・The straw (that) I used is not recyclable.
・The trash (which) they collected filled ten bags.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI visited the factory ( ) old bottles are turned into new glass products.\n① which  ② who  ③ where  ④ when',
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
    explanation: `【出題意図】
所有格の関係代名詞 whose を使って2文を1文に結合する問題。

【解説】
「I know a scientist.」と「Her research is about ocean pollution.」の Her は a scientist を指している。この「Her（その科学者の）」という所有の関係を表すのが関係代名詞の所有格 whose。

変換の手順：
1. 先行詞を特定：a scientist（人）
2. Her（所有格）→ whose に置き換える
3. whose を先行詞 a scientist の直後に置く
→ I know a scientist whose research is about ocean pollution.

日本語訳：「私は、研究が海洋汚染についてである科学者を知っている。」

【文法ポイント】
whose の使い方：先行詞（人・物）の所有格を表す。先行詞＋whose＋名詞＋動詞〜という構造。

【入試頻出】
・He is a teacher whose classes are very popular.
・I met a family whose house runs entirely on solar power.
・This is the company whose products are all made of recycled materials.`,
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
    question: '次の（　）内に最も適切な語を選べ。\n\nCould you tell me ( ) much plastic waste this factory produces every day?\n① what  ② how  ③ why  ④ where',
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
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。give の用法を確認する。

【解説】
give + 人 + 物 = 人に物を与える（第4文型）。
The doctor（S）+ gave（V）+ him（IO: 間接目的語）+ some health advice（DO: 直接目的語）

語順：The doctor gave him some health advice.
第3文型への書き換え：The doctor gave some health advice to him.（to を使う）

日本語訳：「その医者は彼に健康に関するアドバイスをいくつか与えた。」

【文法ポイント】
第4文型（SVOO）の動詞：give / send / show / teach / tell + 人 + 物（間接目的語が to で書き換え可）。

【入試頻出】
・The teacher gave us some advice about recycling.
・She showed him a chart about air pollution.
・He told the students some facts about climate change.`,
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
    explanation: `【出題意図】
関係代名詞 who（目的格）を使った語順整序問題。先行詞と関係代名詞節の位置関係が鍵。

【解説】
文の骨格：The man is the doctor.（その男性は医者だ）
修飾部：who I met yesterday（私が昨日会った）

組み合わせ：The man [who I met yesterday] is the doctor.
who はここでは目的格（met の目的語）として使われている。= The man (whom/that) I met yesterday is the doctor.（省略も可）

日本語訳：「私が昨日会った男性はその医者です。」

【文法ポイント】
関係代名詞節の位置：先行詞の直後に置く。主節の動詞（is）は関係代名詞節の後に続く。

【入試頻出】
・The woman who spoke at the seminar is an environmental scientist.
・The boy who collected the most cans won a prize.
・The man whom I saw at the recycling center works there.`,
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
    explanation: `【出題意図】
enough to 構文に「for + 人」が加わった形の語順を問う問題。「〜が…するほど十分〜だ」という表現の完全形を問う。

【解説】
構文：主語 + be + 形容詞 + enough + for + 人 + to + 動詞原形。「for + 人」は不定詞の意味上の主語を示す。

正しい語順：This air is clean enough for everyone to breathe.

日本語訳：「この空気はみんなが呼吸できるほどきれいだ。」

【文法ポイント】
「形容詞 + enough + for + 人 + to + 動詞」構文：The water is safe enough for children to drink.（子どもが飲めるくらい安全だ）のように使う。「too + 形容詞 + for + 人 + to + 動詞」との対比も確認する。

【入試頻出】
・The lake is clean enough for people to swim in.
・This area is safe enough for animals to live in.
・The soil is not rich enough for these plants to grow.`,
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
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: How often do you take your plastic bottles to the recycling bin?\nB: ( )\n\n① It\'s about two kilometers away.\n② I recycle them almost every week.\n③ I don\'t like plastic bottles.\n④ The bin is very large.',
    answer: '② I recycle them almost every week.',
    hint: 'How often〜? は頻度を尋ねる表現。頻度で答えている選択肢を選ぶ。',
    explanation: `【出題意図】
How often〜?（頻度を尋ねる表現）への適切な応答を問う問題。

【解説】
How often do you〜? は「どのくらいの頻度で〜しますか？」という頻度を尋ねる表現。返答には頻度を表す語句（every week / once a month など）が必要。
・① about two kilometers away → 距離を答えている（× How far〜? への答え）
・② I recycle them almost every week. → 頻度を答えている（✓）
・③ I don't like plastic bottles. → 好き嫌いの話で質問とずれる
・④ The bin is very large. → 大きさの話で質問と無関係

日本語訳：
A：どのくらいの頻度でペットボトルをリサイクルボックスに持って行きますか？
B：ほぼ毎週リサイクルに出しています。

【文法ポイント】
How often〜?（頻度）と How far〜?（距離）、How long〜?（時間・長さ）を区別する。頻度の答え方：every day / once a week / twice a month など。

【入試頻出】
・How often do you exercise? — I exercise three times a week.
・How often does the recycling truck come? — It comes every Tuesday.
・How far is it to the recycling center? — It's about one kilometer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: I really want to run in the marathon next month, but I haven\'t trained enough.\nB: ( ) You still have four weeks to practice.\n\n① Don\'t give up.\n② That\'s too bad.\n③ I\'m sorry to hear that.\n④ Never mind.',
    answer: '① Don\'t give up.',
    hint: '後に続く「まだ4週間ある」という励ましの言葉に合う返答を選ぶ。',
    explanation: `【出題意図】
励ましの表現と、会話の流れ・文脈から適切な応答を選ぶ問題。

【解説】
Aは「マラソンに出たいが練習が足りない」と不安を口にしている。Bは「まだ4週間ある」と励ましている。前置きとして最適なのは「Don't give up.（諦めないで）」。
・① Don't give up. → 諦めないで（励まし）（✓）
・② That's too bad. → それは残念だね（同情。励ましではない）
・③ I'm sorry to hear that. → それは残念です（同情。後の励ましと繋がりが弱い）
・④ Never mind. → 気にしないで（軽い謝りへの返答で不自然）

日本語訳：
A：来月のマラソンに本当に出たいんだけど、練習が足りていないんだ。
B：諦めないで。まだ練習する時間が4週間あるよ。

【文法ポイント】
励まし・応援の表現：Don't give up.（諦めないで）、You can do it!（あなたならできる）、I'm sure you'll do well.（きっとうまくいくよ）。

【入試頻出】
・Don't give up on your dream.
・Cheer up! You still have time.
・I'm sure you can finish the race.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: May I refill my water bottle here?\nB: ( )\nA: Thank you.\n\n① Sure, go ahead.\n② No, you may not refill it.\n③ I don\'t have any water.\n④ Yes, you may go.',
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
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nI have never ( ) such polluted air in my life.\n① see  ② saw  ③ seen  ④ seeing',
    answer: '③ seen',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。see の過去分詞を選ぶ。',
    explanation: `【出題意図】
現在完了形（経験用法）の形と、see の活用（see-saw-seen）を正確に使えるかを問う問題。

【解説】
never は現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形：have/has + 過去分詞。see の活用：see（原形）→ saw（過去形）→ seen（過去分詞）。
・① see → 原形（have の後ろに原形は来ない）
・② saw → 過去形（have の後ろに過去形は来ない）
・③ seen → 過去分詞（✓）have seen
・④ seeing → 現在分詞（have been seeing なら合うが、この文脈には不自然）

日本語訳：「私はこれまでの人生で、これほど汚染された空気を見たことがない。」

【文法ポイント】
現在完了形（経験）の目印の語句：ever（これまでに）、never（一度も〜ない）、before（以前に）。不規則動詞の過去分詞：see-saw-seen、go-went-gone、take-took-taken。

【入試頻出】
・Have you ever seen such a beautiful sunset over a clean beach?
・I have never seen so much litter on this street before.
・She has never seen a river this polluted.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nThe city\'s clean-up event will be held ( ) the first Sunday of every month.\n① in  ② at  ③ on  ④ by',
    answer: '③ on',
    hint: '曜日・特定の日には前置詞 on を使う。',
    explanation: `【出題意図】
時を表す前置詞（in / at / on）の使い分けを問う問題。入試最頻出文法の一つ。

【解説】
「the first Sunday of every month（毎月の第1日曜日）」という特定の日・曜日には on を使う。
・① in → 月・年・季節・午前/午後に使う（in July / in the morning）
・② at → 時刻・特定の時点に使う（at 7 p.m.）
・③ on → 曜日・特定の日に使う（✓）
・④ by → 期限を表す（by Friday = 金曜日までに）

日本語訳：「この街の清掃イベントは毎月第1日曜日に開催される。」

【文法ポイント】
時を表す前置詞まとめ：at（時刻・時点）、on（曜日・日付・特定の日）、in（月・年・季節・時間帯）。

【入試頻出】
・The recycling truck comes on Mondays and Thursdays.
・The festival is held on the third Saturday of March.
・We clean the park on the last day of every month.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。\n\nThe teacher asked the students ( ) plant a tree for Earth Day.\n① plant  ② to plant  ③ planting  ④ planted',
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
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nI think ( ) necessary to reduce plastic waste as soon as possible.\n① this  ② that  ③ it  ④ what',
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation: `【出題意図】
形式主語 it（仮の主語）を使った構文を問う問題。I think (that) it is〜 の形が正解。

【解説】
この文は「I think [that] it is necessary to reduce plastic waste as soon as possible.」という構造。it は to reduce plastic waste（プラスチックごみを減らすこと）を指す形式主語（仮主語）。
・① this → I think this necessary to〜 は文法的に成立しない
・② that → I think that necessary to〜 も不自然
・③ it → 形式主語の it（✓）
・④ what → I think what necessary to〜 は成立しない

日本語訳：「私はできるだけ早くプラスチックごみを減らすことが必要だと思う。」

【文法ポイント】
形式主語（仮主語）it の構文：It is + 形容詞 + to + 動詞〜 = 〜することは（形容詞）だ。I think it is〜 のような文の中でも使われる。

【入試頻出】
・It is important to reduce food waste.
・I think it is difficult to change people's habits quickly.
・She found it hard to give up plastic bags completely.`,
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
    explanation: `【出題意図】
依頼表現（Could you〜?）と関係代名詞（目的格）を組み合わせた英作文。

【解説】
2つのポイント：
1. 丁寧な依頼：Could you show me〜? = 「〜を見せていただけますか？」show + 人 + 物（第4文型）
2. 「彼が集めた（ペットボトル）」= the plastic bottles that/which he collected（関係代名詞・目的格）→省略可

組み合わせ：Could you show me the plastic bottles (that) he collected?

別解：Could you let me see the plastic bottles he collected?

【文法ポイント】
Could you〜? = Can you〜? の丁寧版。show + 人 + 物：人に物を見せる（第4文型 SVOO）。目的格の関係代名詞は省略可能。

【入試頻出】
・Could you show me the report you wrote about pollution?
・Can you show me the box he used for recycling?
・Could you let me see the plan you made for the clean-up day?`,
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
    explanation: `【出題意図】
相関接続詞 not only A but also B（〜だけでなく…も）の構文を使った英作文問題。

【解説】
「〜だけでなく…も」= not only A but also B。この文では A = for the body、B = for the mind という前置詞句が並列されている。

完成した文：Regular exercise is good not only for the body but also for the mind.

注意：not only A but also B の A と B は文法的に同じ形（並列）にする必要がある。

【文法ポイント】
相関接続詞：not only A but also B（AだけでなくBも）、both A and B（AもBも）、either A or B（AかBのどちらか）。

【入試頻出】
・Walking every day is good not only for your health but also for your mood.
・This program helps not only the environment but also local communities.
・Eating vegetables is important not only for children but also for adults.`,
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
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っているものを1つ選べ。\n① 買い物の前に食事の計画を立てることは効果がない。\n② 残り物は新しい料理に使わず、すぐに捨てるべきだ。\n③ 賞味期限が過ぎても食べても安全な場合がある。\n④ この問題を解決するのは政府だけの責任である。',
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
    explanation: `【出題意図】
指示語（this）が何を指すかを本文から特定する指示語問題。入試長文読解の頻出問題形式。

【解説】
指示語の直前を確認する："Customers at first thought these changes were inconvenient, but many of them have gotten used to it over time."（客は最初これらの変化を不便だと思ったが、多くの人は次第に慣れた）の直前の文は "some restaurants have stopped giving out plastic straws, and paper or metal straws are now used instead."（一部のレストランがプラスチックストローの提供をやめ、代わりに紙や金属のストローを使うようになった）。
→ "this" が指すのはこの「変化（changes）」＝①。

② 海の生き物が泳ぐこと：本文の主旨と無関係（×）
③ お客が最初から喜んで受け入れた：本文には「最初は不便だと思った」とあり真逆（×）
④ ストローが再利用されている：本文にそのような記述はない（×）

【文法ポイント】
指示語問題のアプローチ：指示語（this / these / it / they）が出たら直前の文を確認し、指示語の数（単数・複数）と性質を確認する。

【入試頻出】
「this が指すものを選べ」問題では、直前の1〜2文をよく読み、選択肢を代入して意味が通るか確認することが正解への近道。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo5_49',
    subject: 'eigo',
    passage: `Many doctors now say that regular exercise is one of the best things you can do for your mental health, not just your body. When people exercise, their brains release chemicals that make them feel happier and less stressed. Studies show that people who walk or run a few times a week often sleep better and feel more confident. Exercise does not have to be difficult or expensive. Even a short walk around the neighborhood can help. Experts recommend that people try to move their bodies every day, even if it is only for a short time, because small habits can lead to big changes in how we feel.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の主題として最も適切なものを選べ。\n① 運動が経済にもたらす具体的な数値的効果\n② 運動が心の健康にもたらす良い効果と、日常に取り入れる方法\n③ 医者になるために必要な運動の知識\n④ ジムで行う本格的なトレーニングの重要性',
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
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っていないものを1つ選べ。\n① 再生可能エネルギーは化石燃料を燃やすよりも汚染が少ない。\n② 再生可能エネルギーは化石燃料と違い、なくなる心配がない。\n③ 太陽光パネルや風力タービンの建設には現在まったく費用がかからない。\n④ 多くの専門家は再生可能エネルギーが今後も増え続けると考えている。',
    answer: '③ 太陽光パネルや風力タービンの建設には現在まったく費用がかからない。',
    hint: '本文では「太陽光パネルや風力タービンの建設にはまだ多くの費用がかかる」と述べている。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」という誤文識別型の読解問題。細部の読み取りと選択肢の正確な解釈が必要。

【解説】
各選択肢を本文と照合する：
① 「化石燃料を燃やすよりも汚染が少ない」→ 本文に "Renewable energy produces much less pollution than burning coal or oil" とある（✓ 本文と一致）
② 「なくなる心配がない」→ 本文に "it also does not run out, unlike fossil fuels" とある（✓ 本文と一致）
③ 「まったく費用がかからない」→ 本文には "building solar panels and wind turbines still costs a lot of money" とあり、多くの費用がかかると述べている（× 本文と不一致）
④ 「今後も増え続けると考えている」→ 本文の最後に "many experts believe that renewable energy will continue to grow" とある（✓ 本文と一致）

正解：③

【文法ポイント】
「合っていないものを選べ」問題のアプローチ：選択肢の語句を一つずつ本文と照合する。「まったく〜ない」「すべて」などの強調語は誤答パターンに多い。

【入試頻出】
本文の否定表現（still costs a lot of money）と選択肢の逆の内容（costs nothing）を見抜く力が問われる。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
