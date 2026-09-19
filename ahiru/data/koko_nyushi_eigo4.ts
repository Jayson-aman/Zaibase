import type { Question } from './questions';

export const kokoNyushiEigo4: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo4_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語(句)を選べ。  By the time we got to the gate, the plane ( ).',
    choices: ['① leaves', '② left', '③ has left', '④ had already left'],
    answer: '④ had already left',
    hint: 'ゲートに着いた時点よりもさらに前に起こった出来事を表す時制を選ぶ。',
    explanation: `【出題意図】
過去完了形（had + 過去分詞）の用法を問う問題。過去のある時点よりもさらに前に完了していた出来事を表す時制の識別が目標。

【解説】
「we got to the gate（ゲートに着いた）」は過去の基準点。飛行機が出発したのはその基準点よりもさらに前の出来事なので、過去完了形を使う。
・① leaves → 現在形（文脈に合わない）
・② left → 過去形（基準点との前後関係が示せない）
・③ has left → 現在完了形（過去の基準点には使えない）
・④ had already left → 過去完了形（✓）

日本語訳：「私たちがゲートに着いたときには、飛行機はすでに出発してしまっていた。」

【文法ポイント】
過去完了形 = had + 過去分詞
→ 過去のある時点よりもさらに前に完了・継続していたことを表す。「when」「by the time」「before」などの過去の基準点を示す語句とセットで使われる。

【入試頻出】
・When I woke up, my father had already left for work.
・She had finished her homework before dinner started.
・By the time the train arrived, we had waited for an hour.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  According to the airline rules, passengers ( ) show their passports at the gate.',
    choices: ['① may', '② should', '③ have to', '④ would'],
    answer: '③ have to',
    hint: '規則によって決められている義務を表す表現を選ぶ。',
    explanation: `【出題意図】
助動詞（may / should / have to / would）の意味の違いを問う問題。規則による外的な義務を表す表現の識別が目標。

【解説】
「According to the airline rules（航空会社の規則によると）」は、外部から決められたルールを示す語句。
・① may → 「〜してもよい」（許可）
・② should → 「〜すべきだ」（推奨・アドバイス）
・③ have to → 規則・状況による必要性「〜しなければならない」（✓）
・④ would → 過去の習慣や仮定を表す（義務の意味はない）

規則で決められている義務なので have to が最も適切。

日本語訳：「航空会社の規則によると、乗客はゲートでパスポートを提示しなければならない。」

【文法ポイント】
have to：規則・状況による外的な義務
must：話者自身の強い主観的判断による義務
should：義務より弱い推奨

【入試頻出】
・Visitors have to take off their shoes before entering the temple.
・You have to check in two hours before the flight.
・You must not take pictures inside the museum.（禁止のmust not）`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語形を選べ。  English ( ) as an official language in more than fifty countries.',
    choices: ['① speaks', '② is spoken', '③ was spoken', '④ has spoken'],
    answer: '② is spoken',
    hint: '「英語」は話す側ではなく話される側。現在の一般的な事実を表す受動態を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形を問う問題。能動態との混同を防ぐ。

【解説】
主語「English（英語）」は「話す」のではなく「話される」側なので受動態が必要。一般的・恒常的な事実を述べているので現在形を使う。
・① speaks → 能動態（主語が「英語」では意味が通らない）
・② is spoken → 受動態・現在形（✓）
・③ was spoken → 受動態・過去形（現在の一般的事実には合わない）
・④ has spoken → 現在完了形・能動態（誤り）

日本語訳：「英語は50か国以上で公用語として話されている。」

【文法ポイント】
受動態の基本形：
・現在：is/am/are + 過去分詞
・過去：was/were + 過去分詞
・現在完了：has/have been + 過去分詞

【入試頻出】
・Spanish is spoken in many countries in South America.
・This traditional dance is performed at the festival every year.
・These handmade crafts are sold to tourists from abroad.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Kyoto is ( ) tourist destination in Japan for foreign visitors.',
    choices: ['① a popular', '② more popular', '③ the most popular', '④ most popular'],
    answer: '③ the most popular',
    hint: '「日本で一番〜」という範囲の中での最上級を選ぶ。最上級には the が必要。',
    explanation: `【出題意図】
最上級の正しい形と、範囲を示す「in Japan」との組み合わせを問う問題。

【解説】
「in Japan（日本の中で）」は範囲を示す語句で、その中での「一番」を表すには最上級が必要。
・① a popular → 原級（比較の意味がない）
・② more popular → 比較級（2つを比べる場合に使う）
・③ the most popular → 最上級（✓）the が必要
・④ most popular → the が抜けている（最上級には必ず the が必要）

日本語訳：「京都は外国人観光客にとって日本で最も人気のある観光地だ。」

【文法ポイント】
最上級の作り方：
・1音節・一部の2音節語：the + 形容詞-est
・2音節以上：the most + 形容詞（popularは3音節なのでmost型）
最上級には必ず the をつける。

【入試頻出】
・This is the most famous shrine in this area.
・Mt. Fuji is the highest mountain in Japan.
・That was the most exciting festival I have ever visited.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  My family went to Okinawa ( ) the beautiful sea.',
    choices: ['① for see', '② seeing', '③ to see', '④ saw'],
    answer: '③ to see',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法を選ぶ。',
    explanation: `【出題意図】
不定詞の副詞的用法（目的：〜するために）の形を問う問題。

【解説】
「沖縄へ行った」目的が「美しい海を見るため」という文脈。目的を表すには不定詞（to + 動詞原形）を使う。
・① for see → for の後ろに動詞原形は続かない（誤った形）
・② seeing → 動名詞。目的を表す用法としては不自然
・③ to see → 不定詞・副詞的用法（✓）「〜するために」
・④ saw → 過去形。目的を表せない

日本語訳：「私の家族は美しい海を見るために沖縄へ行った。」

【文法ポイント】
不定詞の副詞的用法（目的）＝「〜するために」
主語 + 動詞 + to + 動詞原形〜

【入試頻出】
・She traveled to France to learn French cooking.
・He saved money to travel around the world.
・We got up early to catch the first train to the airport.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We enjoyed ( ) with people from many different countries at the festival.',
    choices: ['① talk', '② to talk', '③ talking', '④ talked'],
    answer: '③ talking',
    hint: 'enjoy の後ろに来る形（動名詞か不定詞か）を確認する。',
    explanation:
      '【何を聞かれているか】「We enjoyed ( ) with people from many different countries at the festival.」の空所に入る適切な形を選ぶ。\n【なぜtalkingになるのか】enjoyは動名詞（-ing）だけを目的語に取り、不定詞（to＋原形）は目的語に取らないという決まりがあるから。\n【ポイント1】①talk（原形）、②to talk（不定詞）はどちらもenjoyの後ろには使えない。\n【ポイント2】③talking（動名詞）が正解。enjoy＋動名詞の形。\n【ポイント3】④talked（過去形）は目的語の位置には使えない。動名詞のみを目的語に取る動詞にはほかにfinish、stop、mind、practice、give upなどがある。\n【答え】③ talking\n【確かめ】enjoyのあとが動詞のing形になっているかを確認する。\n【よくあるまちがい】enjoyのあとにto talkを続けてしまう。\n【ここが絶対】enjoyは動名詞のみを目的語に取る動詞として覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語(句)を選べ。  By the end of this trip, I ( ) five countries in Europe.',
    choices: ['① will visit', '② have visited', '③ will have visited', '④ visited'],
    answer: '③ will have visited',
    hint: '「この旅行が終わるまでには」という未来の時点での完了を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「By the end of this trip, I ( ) five countries in Europe.」の空所に入る適切な時制を選ぶ。\n【なぜwill have visitedになるのか】「この旅行が終わるまでには」という未来のある時点で「5か国を訪れたことになる」という完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】by the end of this trip（この旅行が終わるまでには）は未来の時点を示す目印の語句。\n【ポイント2】①will visit（単純未来）、②have visited（現在完了、未来の時点には使えない）、④visited（過去形）はどれも文脈に合わない。\n【ポイント3】③will have visited（未来完了）が正解。「この旅行が終わるまでには、私はヨーロッパの5か国を訪れたことになる」という意味。\n【答え】③ will have visited\n【確かめ】by the end of〜のような未来の時点を示す語句と、will have＋過去分詞の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】have visited（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での完了にはwill have＋過去分詞（未来完了形）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If the weather ( ) fine tomorrow, we will go sightseeing around the old town.',
    choices: ['① will be', '② is', '③ was', '④ being'],
    answer: '② is',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation:
      '【何を聞かれているか】「If the weather ( ) fine tomorrow, we will go sightseeing around the old town.」の空所に入る適切な語を選ぶ。\n【なぜisになるのか】条件を表すif節の中では、未来のことでもwillを使わず現在形を使うという決まりがあるから。\n【ポイント1】if節などの副詞節の中では、未来のことでも現在形で表す。①will beはif節の中では使えない。\n【ポイント2】③was（過去形、仮定法の意味になり文脈に合わない）、④being（動詞の形として不完全）はどちらも誤り。\n【ポイント3】②is（現在形）が正解。「もし明日天気が良ければ」という条件を表す。\n【答え】② is\n【確かめ】主節にwillが使われている（we will go sightseeing）ことと、if節が現在形（is）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwillを入れてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This castle ( ) more than four hundred years ago.',
    choices: ['① built', '② is built', '③ was built', '④ has built'],
    answer: '③ was built',
    hint: '「〜年前」という過去の一時点を示す語句とともに使う受動態の時制を選ぶ。',
    explanation: `【出題意図】
受動態の過去形を問う問題。「〜ago」という過去の一時点を表す語句との組み合わせがポイント。

【解説】
「four hundred years ago（400年前）」は過去の特定の時点を示す語句。「城」は「建てる」のではなく「建てられる」側なので受動態、かつ過去の出来事なので過去形にする。
・① built → 能動態（主語が城では意味が通らない）
・② is built → 受動態・現在形（「〜ago」と時制が合わない）
・③ was built → 受動態・過去形（✓）
・④ has built → 現在完了・能動態（誤り。かつ「〜ago」とは共起しない）

日本語訳：「この城は400年以上前に建てられた。」

【文法ポイント】
「〜ago」は明確な過去の一時点を示す語句なので、現在完了形とは一緒に使えず、過去形（受動態なら was/were + 過去分詞）を使う。

【入試頻出】
・This bridge was built in the Edo period.
・The temple was damaged by a fire many years ago.
・These old streets were designed for foreign traders long ago.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The population of this city is much ( ) than that of my hometown.',
    choices: ['① large', '② larger', '③ largest', '④ more large'],
    answer: '② larger',
    hint: '2つのものを比べるときは比較級を使う。than が手がかり。',
    explanation: `【出題意図】
比較級の正しい形を問う問題。than との組み合わせ、および「much」による比較級の強調も確認する。

【解説】
than があるので比較級が必要。large は1音節の形容詞なので -er 型で比較級を作る。
・① large → 原級（than とは使えない）
・② larger → 正しい比較級（✓）
・③ largest → 最上級（than とは使わない）
・④ more large → 誤った形（1音節の形容詞に more は使わない）

「much」は比較級を強調する語で「はるかに」という意味を加える。

日本語訳：「この街の人口は私の故郷の人口よりもはるかに多い。」

【文法ポイント】
比較級の強調表現：much / far / a lot + 比較級（「はるかに〜」）
比較級の作り方：1音節→-er、3音節以上→more＋形容詞

【入試頻出】
・This town is much smaller than the city I live in.
・Traveling by train is far more convenient than by car here.
・Her English is a lot better than it was last year.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  She wants ( ) an interpreter and help people from abroad in the future.',
    choices: ['① be', '② being', '③ to be', '④ to being'],
    answer: '③ to be',
    hint: 'want の後ろに来る不定詞の名詞的用法（〜したい）を選ぶ。',
    explanation: `【出題意図】
不定詞の名詞的用法（want to + 動詞原形）を正確に使えるかを問う問題。

【解説】
want は「〜したい」という意味で、後ろに不定詞（to + 動詞原形）を取る動詞。
・① be → 原形のみ（wantの後ろに動詞原形は直接来ない）
・② being → 動名詞（wantは動名詞を目的語に取らない）
・③ to be → 不定詞（✓）want to be〜＝〜になりたい
・④ to being → to＋動名詞（存在しない形）

日本語訳：「彼女は将来、通訳になって外国から来た人々を助けたいと思っている。」

【文法ポイント】
不定詞のみを目的語に取る動詞：want / hope / wish / decide / plan（＋to 動詞）
want to be〜：〜になりたい（職業・将来の夢を表すときに頻出）

【入試頻出】
・I want to become a tour guide.
・She hopes to study abroad next year.
・He decided to join an international volunteer program.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  During the tour, we stopped ( ) pictures of the old bridge.',
    choices: ['① take', '② taking', '③ to take', '④ took'],
    answer: '③ to take',
    hint: '「立ち止まって写真を撮った」という意味になる形を考える。stop + 動名詞との意味の違いに注意。',
    explanation: `【出題意図】
stop + 不定詞（〜するために立ち止まる）と stop + 動名詞（〜するのをやめる）の意味の違いを問う問題。

【解説】
文脈は「橋の写真を撮るために立ち止まった」という意味。stop の後ろに不定詞（to + 動詞原形）が来ると「〜するために立ち止まる」という意味になる。
・① take → 原形（このままでは使えない）
・② taking → 動名詞。stop taking pictures だと「写真を撮るのをやめた」という別の意味になり文脈に合わない
・③ to take → 不定詞（✓）stop to take = 撮るために立ち止まる
・④ took → 過去形（stop の目的語として使えない）

日本語訳：「ツアーの間、私たちは古い橋の写真を撮るために立ち止まった。」

【文法ポイント】
stop + 動名詞：〜するのをやめる（stop taking pictures＝写真を撮るのをやめる）
stop + 不定詞：〜するために立ち止まる（stop to take pictures＝写真を撮るために立ち止まる）

【入試頻出】
・He stopped to look at the map.（地図を見るために立ち止まった）
・He stopped looking at the map.（地図を見るのをやめた）
・We stopped to buy some souvenirs on the way back.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo4_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  This small town is famous ( ) its traditional summer festival.',
    choices: ['① of', '② for', '③ with', '④ about'],
    answer: '② for',
    hint: 'be famous のあとに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be famous for〜（〜で有名だ）の前置詞の用法を問う問題。

【解説】
be famous for〜は「〜で有名だ、〜のことで知られている」という意味の重要イディオム。前置詞 for が固定。
・① of → 主に be made of〜（〜でできている）などに使う
・② for → be famous for〜（✓）
・③ with → be pleased with〜（〜に満足している）などに使う
・④ about → be worried about〜（〜を心配している）などに使う

日本語訳：「この小さな町は伝統的な夏祭りで有名だ。」

【文法ポイント】
be famous for〜：〜で有名だ（理由・特徴を示す）
be famous as〜：〜として有名だ（肩書き・役割を示す）
例：He is famous as a chef.（彼はシェフとして有名だ）

【入試頻出】
・This region is famous for its hot springs.
・The city is famous for its old temples and gardens.
・She became famous as a travel writer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  The airport was full ( ) tourists carrying large suitcases.',
    choices: ['① of', '② with', '③ in', '④ for'],
    answer: '① of',
    hint: 'be full の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be full of〜（〜でいっぱいだ）の前置詞の用法を問う問題。

【解説】
be full of〜は「〜でいっぱいだ、〜で満ちている」という意味の重要イディオム。前置詞 of が固定。
・① of → be full of〜（✓）
・② with → be filled with〜（〜で満たされている）には with を使うが、full には使わない
・③ in → be full in は存在しない
・④ for → be famous for〜など別の熟語で使う前置詞

日本語訳：「空港は大きなスーツケースを持った観光客でいっぱいだった。」

【文法ポイント】
be full of〜：〜でいっぱいだ（主に人・物の量を表す）
be filled with〜：〜で満たされている（似た意味だが動詞 fill の受動態）
両方とも入試で頻出のため、前置詞の違いを正確に覚える必要がある。

【入試頻出】
・The museum was full of visitors from other countries.
・The bus was filled with students on a school trip.
・Her heart was full of excitement before the trip.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  In addition ( ) visiting museums, we tried a lot of local food during our trip.',
    choices: ['① for', '② to', '③ of', '④ with'],
    answer: '② to',
    hint: 'in addition の後ろに来る前置詞は「to」で固定されている。',
    explanation: `【出題意図】
頻出熟語 in addition to〜（〜に加えて）の前置詞の用法を問う問題。to の後ろに動名詞が来ることも確認する。

【解説】
in addition to〜は「〜に加えて」という意味の重要イディオム。前置詞 to が固定で、後ろには名詞または動名詞が続く。
・① for → in addition for は存在しない
・② to → in addition to〜（✓）
・③ of → in addition of は存在しない
・④ with → in addition with は存在しない

「visiting」は to の後ろに続く動名詞（前置詞の後ろは名詞・動名詞）。

日本語訳：「博物館を訪れることに加えて、私たちは旅行中にたくさんの地元の料理を食べてみた。」

【文法ポイント】
in addition to + 名詞／動名詞：〜に加えて
似た意味の表現：besides〜、as well as〜

【入試頻出】
・In addition to English, she can speak French and Spanish.
・In addition to sightseeing, we enjoyed shopping at the local market.
・Besides studying abroad, he traveled to many countries.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  It took me a few weeks to get used ( ) the local customs after moving abroad.',
    choices: ['① to', '② with', '③ for', '④ of'],
    answer: '① to',
    hint: 'get used のあとに来る前置詞を選ぶ。「to」の後ろは名詞または動名詞。',
    explanation: `【出題意図】
頻出熟語 get used to〜（〜に慣れる）の前置詞の用法を問う問題。不定詞の to との混同を防ぐ。

【解説】
get used to〜は「〜に慣れる」という意味の重要イディオム。この to は前置詞なので、後ろには名詞・動名詞が続く（動詞の原形は続かない）。
・① to → get used to〜（✓）
・② with → get used with は存在しない
・③ for → get used for は存在しない
・④ of → get used of は存在しない

日本語訳：「海外に引っ越した後、現地の習慣に慣れるまでに数週間かかった。」

【文法ポイント】
be used to + 名詞／動名詞：〜に慣れている（状態）
get used to + 名詞／動名詞：〜に慣れる（変化）
used to + 動詞原形：以前は〜だった（過去の習慣・状態）→ この3つの used to の違いは入試頻出。

【入試頻出】
・I am used to eating with chopsticks now.
・She got used to the cold weather in Canada.
・He used to live in a small village before moving to the city.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語(句)を選べ。  ( ) her kind help, we were able to find the hotel without getting lost.',
    choices: ['① Thanks to', '② Instead of', '③ In spite of', '④ Because'],
    answer: '① Thanks to',
    hint: '「〜のおかげで」という肯定的な原因・理由を表す表現を選ぶ。',
    explanation: `【出題意図】
熟語 thanks to〜（〜のおかげで）の用法と、意味の似た表現（instead of / in spite of）との区別を問う問題。

【解説】
文の後半が「道に迷わずホテルを見つけられた」という良い結果なので、肯定的な原因を表す thanks to が適切。
・① Thanks to → 〜のおかげで（良い結果の原因）（✓）
・② Instead of → 〜の代わりに（意味が逆転してしまう）
・③ In spite of → 〜にもかかわらず（逆接になり文脈に合わない）
・④ Because → 後ろに節（主語＋動詞）が必要で、名詞句には because of を使う（Because単独は文法的に誤り）

日本語訳：「彼女の親切な助けのおかげで、私たちは道に迷わずホテルを見つけることができた。」

【文法ポイント】
thanks to + 名詞：〜のおかげで（良い結果）
because of + 名詞：〜のために（中立的な理由）
in spite of + 名詞：〜にもかかわらず（逆接）

【入試頻出】
・Thanks to the map on my phone, I never got lost.
・Because of the heavy rain, our flight was delayed.
・In spite of the language barrier, we became good friends.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語(句)を選べ。  I tried authentic Italian pizza ( ) when I visited Rome last summer.',
    choices: ['① at first', '② first time', '③ for the first time', '④ the first time'],
    answer: '③ for the first time',
    hint: '「初めて〜した」という経験を表す定型表現を選ぶ。',
    explanation: `【出題意図】
熟語 for the first time（初めて）の正確な形を問う問題。似た表現（at first / the first time）との区別が目標。

【解説】
「初めて〜した」という経験を表す定型表現は for the first time。
・① at first → 「最初は（その後変化がある）」という意味で、経験を表す表現ではない
・② first time → the や for がなく形が不完全
・③ for the first time → 「初めて」（✓）
・④ the first time → 接続詞的に「初めて〜したとき」という意味になり（the first time I visited〜）、この文の構造には合わない

日本語訳：「私は去年の夏にローマを訪れたとき、初めて本場のイタリアのピザを食べた。」

【文法ポイント】
for the first time：初めて（動作を修飾する副詞句）
at first：最初は（後に変化・対比を伴うことが多い）
the first time + 主語 + 動詞：〜が初めて…したとき（接続詞的用法）

【入試頻出】
・She visited Kyoto for the first time last spring.
・At first, I was nervous, but I soon felt relaxed.
・The first time I ate natto, I didn't like it.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語(句)を選べ。  We decided to walk around the old town ( ) taking a taxi.',
    choices: ['① instead of', '② instead', '③ rather', '④ without of'],
    answer: '① instead of',
    hint: '「〜の代わりに」という意味を表す、後ろに名詞・動名詞を続けられる表現を選ぶ。',
    explanation: `【出題意図】
熟語 instead of〜（〜の代わりに）の用法を問う問題。副詞の instead との違いも確認する。

【解説】
instead of + 名詞／動名詞で「〜の代わりに」という意味を表す。
・① instead of → 〜の代わりに（✓）後ろに動名詞 taking が続く
・② instead → 副詞。後ろに直接名詞・動名詞は続けられない（文末や文頭で単独使用）
・③ rather → rather than〜の形なら可能だが、rather単独では意味が通らない
・④ without of → 存在しない形

日本語訳：「私たちはタクシーに乗る代わりに、旧市街を歩いて回ることにした。」

【文法ポイント】
instead of + 名詞／動名詞：〜の代わりに（前置詞句）
instead（副詞）：その代わりに（文全体を修飾）
rather than + 動詞原形／動名詞：〜よりむしろ

【入試頻出】
・She chose to travel by train instead of flying.
・I didn't have time to cook, so I ate out instead.
・He preferred walking rather than taking the bus.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語(句)を選べ。  I am really looking forward ( ) a new culture during my exchange program.',
    choices: ['① to experience', '② to experiencing', '③ experience', '④ experiencing'],
    answer: '② to experiencing',
    hint: 'look forward to〜 の to は前置詞。後ろには動名詞が続く。',
    explanation: `【出題意図】
熟語 look forward to〜ing（〜するのを楽しみにする）の形を正確に使えるかを問う問題。不定詞との混同を防ぐ最頻出ポイント。

【解説】
look forward to〜の to は前置詞であり、不定詞の to ではない。したがって後ろには動名詞（〜ing）が続く。
・① to experience → 不定詞（この to は前置詞なので動詞原形は続かない）
・② to experiencing → 前置詞 to ＋ 動名詞（✓）
・③ experience → 動詞の原形のみ（to が欠けている）
・④ experiencing → to が抜けている（look forward experiencing は不可）

日本語訳：「私は交換留学プログラムの間、新しい文化を体験するのをとても楽しみにしている。」

【文法ポイント】
look forward to + 名詞／動名詞：〜を楽しみにしている
この to は前置詞なので、不定詞（to + 動詞原形）と混同しないよう特に注意する。

【入試頻出】
・I'm looking forward to meeting my host family.
・She is looking forward to seeing the fireworks festival.
・We are looking forward to your visit next month.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo4_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The guide ( ) showed us around the temple spoke four languages.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation:
      '【何を聞かれているか】「The guide ( ) showed us around the temple spoke four languages.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞The guide（ガイド）は人で、関係代名詞節の中でshowed us around the templeの主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がThe guide（人）で、関係代名詞節内でshowedの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】関係代名詞まとめ：人（主格who、目的格whom、所有格whose）、物（主格・目的格which、所有格whose/of which）。\n【答え】① who\n【確かめ】whoのあとに動詞（showed）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This is the souvenir ( ) I bought at the night market.',
    choices: ['① who', '② which', '③ where', '④ whom'],
    answer: '② which',
    hint: '先行詞は「物（お土産）」。関係代名詞節内で bought の目的語になっている。',
    explanation:
      '【何を聞かれているか】「This is the souvenir ( ) I bought at the night market.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhichになるのか】先行詞the souvenir（お土産）は物で、関係代名詞節の中でI bought（　）の目的語の役割をしているため、先行詞が物・目的格のときに使うwhichを選ぶ必要があるから。\n【ポイント1】先行詞がthe souvenir（物）で、関係代名詞節内でI boughtの目的語になっている（目的格）。\n【ポイント2】①whoは先行詞が人、③whereは関係副詞、④whomは先行詞が人・目的格で、どれも文脈に合わない。\n【ポイント3】whichは省略も可能で、thatに置きかえることもできる：This is the souvenir (that) I bought at the night market.\n【答え】② which\n【確かめ】whichのあとにI bought（主語＋動詞）が続いている（目的語の役割）ことを確認する。\n【よくあるまちがい】先行詞が物なのにwhoを選んでしまう。\n【ここが絶対】目的格の関係代名詞は省略できる。先行詞が物ならwhich（thatはどちらにも使える）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I still remember the small village ( ) I stayed with a host family.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所（village）」。関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 where（先行詞が場所）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「the small village（小さな村）」＝場所。節内では「I stayed with a host family in the village」の前置詞 in の部分が関係副詞 where に変わった構造。
・① which → 物に使う関係代名詞（前置詞が必要：the village in which I stayed）
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞（✓）
・④ when → 時を先行詞にとる関係副詞

関係副詞 where＝前置詞＋which：the village where I stayed＝the village in which I stayed

日本語訳：「私はホームステイをしたその小さな村のことを今でも覚えている。」

【文法ポイント】
関係副詞まとめ：
・where：場所を表す先行詞（village / country / place）
・when：時を表す先行詞（year / day / time）
・why：理由を表す先行詞（reason）

【入試頻出】
・This is the town where I learned to make local dishes.
・I remember the day when I first landed in a foreign country.
・Tell me the reason why you chose this destination.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_24',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I made friends with a student ( ) parents run a restaurant in Thailand.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '④ whose',
    hint: '「その学生の両親」という所有の関係を表す関係代名詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「I made friends with a student ( ) parents run a restaurant in Thailand.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoseになるのか】関係代名詞節内のparents（両親）は先行詞a student（学生）の所有物（その学生の両親）という関係にあり、この所有の関係を表すには所有格の関係代名詞whoseを使う必要があるから。\n【ポイント1】先行詞はa student（学生）。parentsは「その学生の（＝student\'sの）両親」という所有の関係にある。\n【ポイント2】①who（主格）、②which（先行詞が物）、③whom（目的格）はどれも所有の関係を表せない。\n【ポイント3】④whose（所有格）が正解。whose parents＝その学生の両親。先行詞＋whose＋名詞＋動詞〜の形。\n【答え】④ whose\n【確かめ】whoseのあとにparents（名詞）、run（動詞）と続いているかを確認する。\n【よくあるまちがい】所有の関係なのにwhoやwhichを使ってしまう。\n【ここが絶対】whoseは先行詞（人・物）の所有格を表す関係代名詞。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_25',
    subject: 'eigo',
    question: '次の文を間接疑問文を使って1文に書き換えなさい。\n\n直接疑問文：What time does the museum open?\n「あなたはその美術館が何時に開くか知っていますか？」',
    answer: 'Do you know what time the museum opens?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、does は消える。',
    explanation:
      '【何を聞かれているか】「What time does the museum open?」（あなたはその美術館が何時に開くか知っていますか？）を間接疑問文を使って1文に書きかえる。\n【なぜdoesが消えるのか】疑問文が他の文（Do you know〜）の一部に組み込まれると、疑問文特有の助動詞doesを使わず、ふつうの文と同じ〈疑問詞＋主語＋動詞〉の語順に戻すというルールがあるから。\n【ポイント1】疑問詞What timeはそのまま使う。\n【ポイント2】疑問詞の後ろを「主語＋動詞」の平叙文語順に変える。doesは消えて、動詞に3単現のsがつく（opens）。\n【ポイント3】全体をDo you know＋間接疑問の形にする。Do you know what time the museum opens?\n【答え】Do you know what time the museum opens?\n【確かめ】doesが消えて、動詞がopenではなくopensになっているかを確認する。\n【よくあるまちがい】Do you know what time does the museum open?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の語順は〈疑問詞＋主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) I can exchange money near here?',
    choices: ['① what', '② where', '③ why', '④ who'],
    answer: '② where',
    hint: '「近くのどこで両替できるか」という場所を尋ねる間接疑問文。',
    explanation: `【出題意図】
間接疑問文で文脈に合った適切な疑問詞を選ぶ問題。疑問詞の意味の使い分けが目標。

【解説】
「Could you tell me ( ) I can exchange money near here?」＝「この近くのどこでお金を両替できるか教えていただけますか？」
場所を尋ねているので where を使う。
・① what → 「何」物・事を尋ねる
・② where → 「どこ」場所を尋ねる（✓）
・③ why → 「なぜ」理由を尋ねる
・④ who → 「誰」人を尋ねる

注意：「I can exchange money」は間接疑問文なので主語＋動詞の語順（where can I exchange のような疑問文語順にはしない）。

日本語訳：「この近くのどこでお金を両替できるか教えていただけますか？」

【文法ポイント】
間接疑問文の疑問詞の使い分け：
where（場所）/ when（時）/ why（理由）/ who（人）/ how（方法・程度）

【入試頻出】
・Could you tell me where I can catch the bus to the airport?
・Do you know where the nearest ATM is?
・Please tell me how I can get a city map.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo4_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ tell / could / me / how / you / to / the / get / station / to ）\n「駅までの行き方を教えていただけますか？」',
    answer: 'Could you tell me how to get to the station?',
    hint: '「〜の仕方」は how to + 動詞原形。全体は Could you で始まる丁寧な依頼文。',
    explanation: `【出題意図】
「how to + 動詞原形」（〜の仕方）の語順と、丁寧な依頼表現 Could you tell me〜? を組み合わせた整序問題。

【解説】
文の骨格：Could you tell me〜?（〜を教えていただけますか）
tell me の目的語として「how to get to the station（駅への行き方）」が続く。

正しい語順：
Could you tell me how to get to the station?

「how to〜」は「〜の仕方、どのように〜するか」という意味の頻出表現（疑問詞＋to不定詞）。

日本語訳：「駅までの行き方を教えていただけますか？」

【文法ポイント】
疑問詞＋to不定詞：
・how to〜：〜の仕方
・what to〜：何を〜すべきか
・where to〜：どこで〜すべきか

【入試頻出】
・Can you tell me how to use this ticket machine?
・I don't know what to say to my host family.
・She asked me where to buy a train pass.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ have / been / studying / I / abroad / since / April / from ）\n「私は4月からずっと海外で勉強しています。」',
    answer: 'I have been studying abroad since April.',
    hint: '現在完了進行形。「4月から」は起点を示すので for ではなく since を使う。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for / since の使い分けを問う問題。不要語の識別も含む。

【解説】
「4月から」は起点（starting point）を示す語句なので since を使う。for は期間を示すときに使う語句であり、この文では不要。
不要語：from（× since と from の両方は使えない。since April が正しく、from は不要）

正しい語順：
I have been studying abroad since April.
（現在完了進行形＝have been＋Ving）

日本語訳：「私は4月からずっと海外で勉強している。」

【文法ポイント】
for vs since：
・for＋期間：for six months（〜の間）
・since＋起点：since April / since last year（〜以来）

現在完了進行形の構造：have/has＋been＋動詞-ing（継続的な動作に使う）

【入試頻出】
・She has been living in Canada since last spring.
・They have been traveling together for two weeks.
・I have been learning Spanish since I moved here.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ young / travel / is / to / too / alone / she ）\n「彼女は一人で旅行するには若すぎる。」',
    answer: 'She is too young to travel alone.',
    hint: '「〜すぎて…できない」は too + 形容詞 + to + 動詞 の語順。',
    explanation:
      '【何を聞かれているか】young / travel / is / to / too / alone / she を並べ替えて「彼女は一人で旅行するには若すぎる。」という英文を作る。\n【なぜtoo youngという語順になるのか】「〜すぎて…できない」はtoo＋形容詞＋to＋動詞という決まった語順で表し、tooは形容詞の直前に置くというルールがあるから。\n【ポイント1】「〜すぎて…できない」は主語＋be＋too＋形容詞＋to＋動詞原形の形。tooは形容詞の直前に置く。\n【ポイント2】She is too young to travel alone.（彼女は一人で旅行するには若すぎる）。\n【ポイント3】enough to構文への書きかえ：She is too young to travel alone.＝She is not old enough to travel alone.（どちらも同じ意味）。\n【答え】She is too young to travel alone.\n【確かめ】tooがyoungの直前に置かれているかを確認する。\n【よくあるまちがい】too youngとenough oldを混同し、too old enoughのような誤った形にしてしまう。\n【ここが絶対】too＋形容詞＋to＋動詞は「〜すぎて…できない」という意味になる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ me / a / bought / grandmother / from / my / present / Paris ）\n「祖母は私にパリからのお土産を買ってくれた。」',
    answer: 'My grandmother bought me a present from Paris.',
    hint: '「人に物を買う」は第4文型（buy＋人＋物）の語順を使う。',
    explanation:
      '【何を聞かれているか】me / a / bought / grandmother / from / my / present / Paris を並べ替えて「祖母は私にパリからのお土産を買ってくれた。」という英文を作る。\n【なぜme a presentという語順になるのか】buy＋人＋物は「人に物を買ってあげる」という第4文型（SVOO）の形で、間接目的語（人）を直接目的語（物）より先に置くという決まりがあるから。\n【ポイント1】buy＋人＋物＝人に物を買ってあげる（第4文型）。My grandmother（S）+ bought（V）+ me（間接目的語）+ a present from Paris（直接目的語）。\n【ポイント2】語順はMy grandmother bought me a present from Paris.になる。\n【ポイント3】第3文型に書きかえるとMy grandmother bought a present from Paris for me.（forを使う）になる。同じ仲間の動詞にmake、get、cookなどがある。\n【答え】My grandmother bought me a present from Paris.\n【確かめ】me（人）がa present（物）より先に置かれているかを確認する。\n【よくあるまちがい】bought a present me fromのように、物を人より先に置いてしまう。\n【ここが絶対】buy＋人＋物の第4文型では、人（間接目的語）を先に、物（直接目的語）をあとに置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ checked / we / in / after / arriving / at / the / hotel ）\n「私たちはホテルに到着した後、チェックインをした。」',
    answer: 'We checked in after arriving at the hotel.',
    hint: '前置詞 after の後ろには動名詞（〜ing）が来る。',
    explanation:
      '【何を聞かれているか】checked / we / in / after / arriving / at / the / hotel を並べ替えて「私たちはホテルに到着した後、チェックインをした。」という英文を作る。\n【なぜafterのあとが動名詞になるのか】前置詞のあとには名詞・動名詞が来るという決まりがあり、不定詞（to＋原形）は前置詞のあとには置けないため、「〜した後で」はafter＋動名詞（〜ing）の形にする必要があるから。\n【ポイント1】前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜した後で」＝after＋動名詞（〜ing）。\n【ポイント2】We checked in after arriving at the hotel.（＝After arriving at the hotel, we checked in.と同じ意味）。\n【ポイント3】同じパターン：before＋ing（〜する前に）、without＋ing（〜せずに）。\n【答え】We checked in after arriving at the hotel.\n【確かめ】afterのあとがarrive（原形）やto arrive（不定詞）ではなくarriving（動名詞）になっているかを確認する。\n【よくあるまちがい】after to arriveのように、前置詞のあとに不定詞を置いてしまう。\n【ここが絶対】前置詞のあとに動詞を続けるときは必ず動名詞（-ing）にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ country / which / famous / the / we / visited / is / for / its / temples ）\n「私たちが訪れた国はその寺院で有名だ。」',
    answer: 'The country which we visited is famous for its temples.',
    hint: '関係代名詞 which を使って先行詞「the country」を修飾する節を作る。',
    explanation:
      '【何を聞かれているか】country / which / famous / the / we / visited / is / for / its / temples を並べ替えて「私たちが訪れた国はその寺院で有名だ。」という英文を作る。\n【なぜwhich we visitedという語順になるのか】関係代名詞whichを使って、先行詞The countryのうしろにwhich we visited（私たちが訪れた）という節を置くことで、The countryを説明できるから。\n【ポイント1】文の骨格はThe country is famous for its temples.（その国はその寺院で有名だ）。\n【ポイント2】修飾部はwhich we visited（私たちが訪れた）。ここでのwhichはvisitedの目的語（目的格）にあたる。\n【ポイント3】組み合わせるとThe country which we visited is famous for its temples.になる。＝The country (that) we visited〜（省略も可）。\n【答え】The country which we visited is famous for its temples.\n【確かめ】関係代名詞節（which we visited）が先行詞The countryの直後に置かれ、そのあとに主節の動詞is famous for〜が続いているかを確認する。\n【よくあるまちがい】関係代名詞節を先行詞から離れた位置に置いてしまう。\n【ここが絶対】関係代名詞節は必ず先行詞の直後に置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ easy / enough / for / this / to / map / is / follow / tourists ）\n「この地図は観光客が簡単にたどれるほど分かりやすい。」',
    answer: 'This map is easy enough for tourists to follow.',
    hint: '「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。',
    explanation:
      '【何を聞かれているか】easy / enough / for / this / to / map / is / follow / tourists を並べ替えて「この地図は観光客が簡単にたどれるほど分かりやすい。」という英文を作る。\n【なぜfor＋人が入るのか】「〜が…するのに十分〜だ」と、動作をする人を明示するには、〈形容詞＋enough＋for＋人＋to＋動詞原形〉という構文を使い、for＋人が不定詞の意味上の主語を示すから。\n【ポイント1】構文は主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形。\n【ポイント2】This map is easy enough for tourists to follow.（この地図は観光客が簡単にたどれるほど分かりやすい）。\n【ポイント3】反対の意味を表す〈too＋形容詞＋for＋人＋to＋動詞〉（〜すぎて…できない）とセットで覚える（例：The map is too complicated for tourists to follow.）。\n【答え】This map is easy enough for tourists to follow.\n【確かめ】for touristsがenoughとtoの間に正しく置かれているかを確認する。\n【よくあるまちがい】for touristsを文の最後に置いてしまう。\n【ここが絶対】「形容詞＋enough＋for＋人＋to＋動詞」の語順を1つのまとまりとして覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・短い長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo4_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: Would you like to try some local street food tonight? B: ( )',
    choices: ['① No, I don\'t.', '② Yes, I\'d love to.', '③ I don\'t like food.', '④ Yes, you would.'],
    answer: '② Yes, I\'d love to.',
    hint: 'Would you like to〜? は「〜しませんか」という誘いの表現。適切な受け方を選ぶ。',
    explanation:
      '【何を聞かれているか】「Would you like to try some local street food tonight?」への適切な返答を選ぶ。\n【なぜ「Yes, I\'d love to.」が正しいのか】Would you like to〜?は「〜しませんか」という丁寧な誘いの表現で、受けるときはYes, I\'d love to.という決まった返答をするから。\n【ポイント1】①No, I don\'t.はWould you like to〜?への返答としては不自然。\n【ポイント2】③I don\'t like food.は質問の内容とかみ合わない。④Yes, you would.は主語の取り違えで不自然。\n【ポイント3】②Yes, I\'d love to.が正しい。I\'d love to.はI would love to.の短縮形。断るときはI\'d love to, but〜のように言う。\n【答え】② Yes, I\'d love to.\n【確かめ】Would you like to〜?（誘い）とDo you like〜?（好み）を混同していないかを確認する。\n【よくあるまちがい】Would you like to〜?への返答をNo, I don\'t.のようにしてしまう。\n【ここが絶対】誘いへの返答はYes, I\'d love to.（受ける）／I\'d love to, but〜（断る）で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: How long does it take to get to the airport from your hotel? B: ( )',
    choices: ['① It\'s about twenty kilometers.', '② It takes about forty minutes by taxi.', '③ You should take a bus.', '④ The airport is very crowded.'],
    answer: '② It takes about forty minutes by taxi.',
    hint: 'How long does it take to〜? は「〜するのにどのくらいかかりますか」という所要時間を尋ねる表現。',
    explanation:
      '【何を聞かれているか】「How long does it take to get to the airport from your hotel?」への適切な返答を選ぶ。\n【なぜIt takes about forty minutes by taxi.が正しいのか】How long does it take to〜?は「〜するのにどのくらい時間がかかるか」を尋ねる表現で、これにはIt takes＋時間という所要時間を答える形で返す決まりがあるから。\n【ポイント1】①about twenty kilometersは距離を答えており、How far〜?への返答にあたる。\n【ポイント2】③You should take a bus.は提案であり、質問（所要時間）の答えになっていない。④The airport is very crowded.は無関係。\n【ポイント3】②It takes about forty minutes by taxi.が正しい。It takes＋時間＋to＋動詞〜＝「〜するのに〜の時間がかかる」。\n【答え】② It takes about forty minutes by taxi.\n【確かめ】質問がHow long（時間）を尋ねているのに対し、選んだ返答が時間を答えているかを確認する。\n【よくあるまちがい】How long〜?とHow far〜?を混同し、距離を答えてしまう。\n【ここが絶対】所要時間を尋ねるHow long does it take to〜?にはIt takes＋時間で答える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: I\'m going to give a speech in English tomorrow, but I\'m really nervous. B: ( ) You\'ve practiced so many times.',
    choices: ['① Don\'t worry.', '② That\'s too bad.', '③ I\'m sorry to hear that.', '④ Never mind.'],
    answer: '① Don\'t worry.',
    hint: '後に続く「You\'ve practiced so many times.（あなたは何度も練習したじゃない）」という励ましの言葉に合う返答を選ぶ。',
    explanation:
      '【何を聞かれているか】「I\'m going to give a speech in English tomorrow, but I\'m really nervous.」に対するBの返答（このあとYou\'ve practiced so many times.と続く）に合う表現を選ぶ。\n【なぜDon\'t worry.が正しいのか】Aが緊張していることを伝えており、そのあとBが「何度も練習したじゃない」と励ましているため、その前置きとしては「心配しないで」という励ましの表現が自然につながるから。\n【ポイント1】①Don\'t worry.（心配しないで）は励ましの表現で、後に続くYou\'ve practiced so many times.（何度も練習したじゃない）と自然につながる。\n【ポイント2】②That\'s too bad.と③I\'m sorry to hear that.はどちらも同情・慰めの表現で、励ましの流れには合わない。\n【ポイント3】④Never mind.（気にしないで）は軽い謝罪への返答で、この文脈には不自然。\n【答え】① Don\'t worry.\n【確かめ】選んだ返答のあとにYou\'ve practiced so many times.が自然に続くかを確認する。\n【よくあるまちがい】②That\'s too bad.のように、同情の表現を励ましの場面で使ってしまう。\n【ここが絶対】対話文の空所は、その後に続く文とのつながりを見て、共感なのか励ましなのかを判断する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: May I take a picture of this painting? B: ( ) A: Thank you very much.',
    choices: ['① Sure, go ahead.', '② No, you may not take it.', '③ I don\'t have a camera.', '④ Yes, you may go.'],
    answer: '① Sure, go ahead.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I take a picture〜?＝「写真を撮ってもいいですか？」という許可を求める丁寧な表現。
直後に「Thank you very much.（ありがとうございます）」とあるので、許可を与える返答が必要。
・① Sure, go ahead. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not take it. → 拒否の返答だが、Aが「Thank you」と言うことと矛盾する
・③ I don't have a camera. → 質問の内容とかみ合わない
・④ Yes, you may go. → go（行く）は take a picture（写真を撮る）とは関係ない

日本語訳：
A：この絵の写真を撮ってもいいですか？
B：もちろん、どうぞ。
A：ありがとうございます。

【文法ポイント】
許可を求める表現：May I〜?（最も丁寧）/ Can I〜? / Could I〜?
許可を与える表現：Sure. / Of course. / Go ahead. / No problem.

【入試頻出】
・May I sit next to you? — Sure, go ahead.
・Can I try this local dish? — Of course, please do.
・May I ask you something? — Certainly.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  I have never ( ) such delicious noodles before.',
    choices: ['① try', '② tried', '③ tries', '④ trying'],
    answer: '② tried',
    hint: '現在完了形（have/has＋過去分詞）の経験用法。try の過去分詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「I have never ( ) such delicious noodles before.」の空所に入る適切な形を選ぶ。\n【なぜtriedになるのか】neverを使った現在完了形の経験用法「一度も〜したことがない」は、have/has＋過去分詞の形にする必要があり、tryの過去分詞はtriedだから。\n【ポイント1】neverは現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形はhave/has＋過去分詞。\n【ポイント2】tryの活用：try（原形）→tried（過去形）→tried（過去分詞）。①try（原形）、③tries（3単現）はhaveのあとに使えない。\n【ポイント3】④trying（現在分詞）はhave been tryingなら現在完了進行形になるが、この文には合わない。②tried（過去分詞）が正解。\n【答え】② tried\n【確かめ】haveのあとに過去分詞triedが続いているかを確認する。\n【よくあるまちがい】have triesのように、haveのあとに3単現の現在形をそのまま続けてしまう。\n【ここが絶対】現在完了形はhave/has＋過去分詞。tryのようにyをiに変えて-edをつける動詞の活用を正確に覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  ( ) the morning of our departure, we said goodbye to our host family.',
    choices: ['① In', '② At', '③ On', '④ By'],
    answer: '③ On',
    hint: '特定の日の朝を表すときの前置詞を選ぶ。',
    explanation: `【出題意図】
時を表す前置詞（in / at / on / by）の使い分けを問う問題。「特定の日の朝」は on を使う点が最頻出のひっかけ。

【解説】
一般的な「朝」はinを使う（in the morning）が、「特定の日の朝」はonを使う（on the morning of〜）。
「our departure（私たちの出発）」という特定の出来事の朝なので on を使う。
・① In → 一般的な朝（in the morning）や月・年に使う
・② At → 時刻・特定の時点（at 7 a.m.）に使う
・③ On → 特定の日・特定の日の朝（✓）
・④ By → 期限を表す（by 8 a.m.＝8時までに）

日本語訳：「私たちが出発する日の朝、私たちはホストファミリーに別れを告げた。」

【文法ポイント】
時を表す前置詞まとめ：
・in the morning（一般的な朝）だが、on the morning of〜（特定の日の朝）
・on the day of〜、on the night of〜 も同じルール

【入試頻出】
・On the morning of the exam, I felt very nervous.
・On the day of the festival, the whole town was crowded.
・We arrived at the airport on the night of July 20th.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  Our host mother asked us ( ) our shoes before entering the house.',
    choices: ['① take off', '② to take off', '③ taking off', '④ took off'],
    answer: '② to take off',
    hint: 'ask＋人＋to do（人に〜するよう頼む）という構文。',
    explanation:
      '【何を聞かれているか】「Our host mother asked us ( ) our shoes before entering the house.」の空所に入る適切な形を選ぶ。\n【なぜto take offになるのか】「人に〜するよう頼む」はask＋人＋to doという決まった構文で表し、人のあとには必ず不定詞（to＋原形）が続くから。\n【ポイント1】ask＋人＋to do＝「人に〜するよう頼む」という重要構文。\n【ポイント2】①take off（原形のみ）、③taking off（動名詞）、④took off（過去形）はどれもask＋人のあとの形として使えない。\n【ポイント3】同じ仲間の構文：tell＋人＋to do（人に〜するよう言う）、want＋人＋to do（人に〜してほしい）、allow＋人＋to do（人が〜するのを許可する）。\n【答え】② to take off\n【確かめ】Our host mother asked us to take off our shoes.という文全体を読み、「ホストマザーは私たちに靴を脱ぐよう頼んだ」という意味になっているかを確認する。\n【よくあるまちがい】ask＋人のあとに原形をそのまま続けてしまう。\n【ここが絶対】ask＋人＋to doの形では、人のあとに必ずtoが必要。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  I found ( ) very exciting to communicate with people from different cultures.',
    choices: ['① this', '② that', '③ it', '④ what'],
    answer: '③ it',
    hint: '形式目的語 it を使った「find it + 形容詞 + to 動詞」の構文。',
    explanation:
      '【何を聞かれているか】「I found ( ) very exciting to communicate with people from different cultures.」の空所に入る適切な語を選ぶ。\n【なぜitになるのか】to communicate with people from different cultures（異なる文化の人々と交流すること）という長い内容を先に置くと文のバランスが悪くなるため、その内容を指す形式目的語itを先に置いて、本当の中身をあとに回すという英語の決まりがあるから。\n【ポイント1】this、that、whatはこの位置に置いても文法的に成立しない。\n【ポイント2】③it（形式目的語）が正解。itはto communicate with people from different culturesを指す。\n【ポイント3】形式目的語itの基本構文：find it＋形容詞＋to＋動詞〜＝「〜することを（形容詞）だと感じる」（例：I find it interesting to learn about other cultures.）。\n【答え】③ it\n【確かめ】itがto communicate with people from different culturesを指していることを確認する。\n【よくあるまちがい】thisやthatを使ってしまう。形式目的語には必ずitを使う。\n【ここが絶対】find/think/believeなどの動詞のあとで「〜することを…だと思う」を表すときは、形式目的語itを使い、本当の中身（to不定詞）は後ろに置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo4_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までにこんなに大きなお祭りを見たことがありません。」',
    answer: 'I have never seen such a big festival before.',
    hint: '「〜したことがない」は現在完了の経験用法（have never＋過去分詞）。「こんなに大きな」は such a＋形容詞＋名詞。',
    explanation:
      '【何を聞かれているか】「私は今までにこんなに大きなお祭りを見たことがありません。」を英語に訳す。\n【なぜsuch aとneverを使うのか】「こんなに大きな〜」という強調はsuch a＋形容詞＋名詞の形で表し、「〜したことがない」は現在完了形の経験用法の否定（have never＋過去分詞）で表す必要があるから。\n【ポイント1】「〜したことがない」＝have/has never＋過去分詞（現在完了・経験の否定）。\n【ポイント2】「こんなに大きなお祭り」＝such a big festival（such a＋形容詞＋名詞の語順に注意。so big a festivalという語順とは異なる）。\n【ポイント3】I have never seen such a big festival before.\n【答え】I have never seen such a big festival before.\n【確かめ】such aのあとに形容詞（big）、名詞（festival）の順で続いているかを確認する。\n【よくあるまちがい】I have never seen so big festival.のようにsuch aを使わずsoだけにしてしまう。\n【ここが絶対】such a＋形容詞＋名詞（単数名詞の前）という語順を正確に覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「彼が撮った写真を私に見せてもらえませんか？」',
    answer: 'Could you show me the photos that he took? / Could you show me the photos he took?',
    hint: '「見せてもらえませんか」は Could you show me〜?、「彼が撮った」は関係代名詞（that / which、省略も可）で修飾。',
    explanation:
      '【何を聞かれているか】「彼が撮った写真を私に見せてもらえませんか？」を英語に訳す。\n【なぜCould you〜?とthat/whichを組み合わせるのか】丁寧な依頼にはCould you〜?を使い、「彼が撮った」という説明を加えるには、the photosのうしろに関係代名詞（目的格）でtook節をつなげる必要があるから。\n【ポイント1】丁寧な依頼：Could you show me〜?＝「〜を見せていただけますか？」（show＋人＋物の第4文型）。\n【ポイント2】「彼が撮った（写真）」＝the photos that/which he took（関係代名詞・目的格、省略も可）。\n【ポイント3】組み合わせるとCould you show me the photos (that) he took?になる。\n【答え】Could you show me the photos that he took? / Could you show me the photos he took?\n【確かめ】the photosのあとにhe took（主語＋動詞）が続いており、takeの目的語がthe photosであることを確認する。\n【よくあるまちがい】Could you〜?のかわりにCan you〜?を使ってしまい、ていねいさが弱くなる。\n【ここが絶対】Could you〜?はCan you〜?の丁寧版。目的格の関係代名詞は省略できる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私がその町を訪れたとき、そこにはたくさんの外国人観光客がいました。」',
    answer: 'When I visited that town, there were many foreign tourists there. / There were many foreign tourists there when I visited that town.',
    hint: '「〜がいた」は there was/were〜 の構文。複数なので were。「〜を訪れたとき」は when I visited〜。',
    explanation: `【出題意図】
there is/are構文の過去形と、when節（〜のとき）を組み合わせた英作文。

【解説】
ポイント：
1. 「その町を訪れたとき」＝when I visited that town
2. 「〜がいた」＝there were〜（touristsは複数なのでwere）
3. 「そこには」＝there（副詞。文末に置くことが多い）

組み合わせ：
When I visited that town, there were many foreign tourists there.
または
There were many foreign tourists there when I visited that town.

注意：
× There was many tourists（× touristsは複数→were）

【文法ポイント】
there is/are構文：「〜がある/いる」
・現在：There is＋単数名詞／There are＋複数名詞
・過去：There was＋単数名詞／There were＋複数名詞

【入試頻出】
・There were a lot of visitors at the museum that day.
・When we arrived, there were already many people in line.
・There used to be a small market near the station.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私があなたなら、地元の料理を試してみるでしょう。」',
    answer: 'If I were you, I would try the local food.',
    hint: '仮定法過去（現実とは逆の仮定）：If＋主語＋were/動詞の過去形, 主語＋would＋動詞原形。I were が正しい。',
    explanation:
      '【何を聞かれているか】「もし私があなたなら、地元の料理を試してみるでしょう。」を英語に訳す。\n【なぜwereを使うのか】「もし私があなたならば」は現実とは異なる仮定（実際には私はあなたではない）なので、仮定法過去を使い、be動詞は主語に関係なくwereにするという決まりがあるから。\n【ポイント1】仮定法過去の形：If＋主語＋動詞の過去形（be動詞はwere）, 主語＋would/could/might＋動詞原形。\n【ポイント2】If I were you〜（If I was youは入試では不正解とされる）。「試してみる」＝try。\n【ポイント3】If I were you, I would try the local food.\n【答え】If I were you, I would try the local food.\n【確かめ】be動詞がwasではなくwereになっているかを確認する。\n【よくあるまちがい】If I was you, I would〜のようにwasを使ってしまう。\n【ここが絶対】仮定法過去のif節ではbe動詞は必ずwereを使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「この祭りは観光客だけでなく、地元の人々にも人気があります。」',
    answer: 'This festival is popular not only with tourists but also with local people. / This festival is popular not only among tourists but also among local people.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。「〜に人気がある」は popular with/among〜。',
    explanation:
      '【何を聞かれているか】「この祭りは観光客だけでなく、地元の人々にも人気があります。」を英語に訳す。\n【なぜnot only A but also Bを使うのか】「〜だけでなく…も」という意味は、相関接続詞not only A but also Bという決まった形で表し、「〜に人気がある」はbe popular with/among〜で表すから。\n【ポイント1】「〜だけでなく…も」＝not only A but also B。AとBは文法的に同じ形（並列）にする必要がある。\n【ポイント2】「〜に人気がある」＝be popular with〜（特定の人）またはbe popular among〜（グループの中で）。\n【ポイント3】This festival is popular not only with tourists but also with local people.\n【答え】This festival is popular not only with tourists but also with local people. / This festival is popular not only among tourists but also among local people.\n【確かめ】not only のあとと、but also のあとが同じ形（with tourists／with local people）になっているかを確認する。\n【よくあるまちがい】not only とbut alsoのあとの形をそろえず、withとamongを混ぜて使ってしまう。\n【ここが絶対】not only A but also BのAとBは文法的に同じ形にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo4_47',
    subject: 'eigo',
    passage: `Last summer, Aya stayed with a host family in Canada for three weeks. At first, she felt nervous because she could not understand every word her host parents said. However, her host family was very patient and often repeated sentences slowly. Aya also learned to cook a traditional Canadian dish with her host mother. On weekends, the family took her to a nearby lake and taught her how to canoe. By the end of her stay, Aya could have simple conversations in English without translating in her head. She realized that making mistakes was a normal part of learning a new language, and she promised to keep studying English after she returned to Japan.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① Aya はカナダに行く前から英語を完璧に話せた。', '② Aya のホストファミリーは、彼女が理解できるようゆっくり文を繰り返した。', '③ Aya はホストマザーから何も学ばなかった。', '④ Aya は日本に帰国後、英語の勉強をやめると決めた。'],
    answer: '② Aya のホストファミリーは、彼女が理解できるようゆっくり文を繰り返した。',
    hint: '本文中の "often repeated sentences slowly" という部分を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「英語を完璧に話せた」→本文には "she felt nervous because she could not understand every word"（すべての言葉を理解できず不安だった）とあるので×
② 「ゆっくり文を繰り返した」→本文に "her host family was very patient and often repeated sentences slowly"（ホストファミリーは辛抱強く、よくゆっくり文を繰り返した）とある（✓）
③ 「何も学ばなかった」→本文には "Aya also learned to cook a traditional Canadian dish with her host mother"（ホストマザーと伝統料理を作ることを学んだ）とあるので×
④ 「英語の勉強をやめる」→本文には "she promised to keep studying English"（英語を勉強し続けると約束した）とあるので×（真逆）

【文法ポイント】
内容一致問題のアプローチ：
1. 選択肢を先に読んでキーワードを把握
2. 本文で該当箇所を探す
3. 本文の語句と選択肢の語句を慎重に比較（言い換え・否定に注意）

【入試頻出】
・内容一致問題では本文にない情報や真逆の内容を含む選択肢は×
・「すべて」「〜のみ」「必ず」等の過度な表現に注意
・本文の言い換え表現に気づくことが正解への鍵`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_48',
    subject: 'eigo',
    passage: `Every October, a large international food festival is held in Yokohama. People from more than thirty countries set up stalls and sell traditional dishes from their home countries. Visitors can taste curry from India, dumplings from China, and churros from Spain, all in the same afternoon. The festival also has a stage where dancers and musicians perform traditional art from their cultures. Many visitors say that this event gives them a chance to experience different cultures without leaving the country. Last year, more than one hundred thousand people visited the festival over two days, and organizers hope even more people will join next year to enjoy this colorful celebration of world cultures.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文中の下線部 "this event" が指す内容として最も適切なものを選べ。',
    choices: ['① 横浜で毎年10月に開催される国際的な食の祭典', '② 100か国以上が参加する国際会議', '③ 世界各国の伝統舞踊だけを紹介するイベント', '④ 一年を通して行われる観光キャンペーン'],
    answer: '① 横浜で毎年10月に開催される国際的な食の祭典',
    hint: '"this event" は本文の冒頭で説明されている祭り全体を指す。',
    explanation: `【出題意図】
指示語（this event）が何を指すかを本文から特定する指示語問題。入試長文読解の頻出問題形式。

【解説】
"this event" の前には本文全体を通して "a large international food festival is held in Yokohama"（横浜で開催される大規模な国際的食の祭典）についての説明が続いている。屋台での料理の紹介、ダンス・音楽のステージなど、すべて祭り全体の内容を指しているため、"this event" はその祭り自体を指す。
→①「横浜で毎年10月に開催される国際的な食の祭典」が正解

②「100か国以上が参加する国際会議」→本文は「30か国以上」であり「会議」ではなく「食の祭典」なので×
③「伝統舞踊だけを紹介するイベント」→ステージは一部の要素にすぎず、祭り全体を表していないので×
④「一年を通して行われる観光キャンペーン」→本文には「毎年10月」とあり、一年を通してではないので×

【文法ポイント】
指示語問題のアプローチ：
1. 指示語（this / these / it / they）が出たら、それより前の内容全体を確認する
2. 段落全体をまとめている場合が多い
3. 選択肢の範囲が広すぎたり狭すぎたりしないか確認する

【入試頻出】
・「this event」「this experience」など抽象的な指示語は、それまでの話全体を指すことが多い
・指示語の直前の1文だけでなく、段落全体を見て判断する`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_49',
    subject: 'eigo',
    passage: `Table manners are very different around the world, and travelers often need to learn new customs before visiting a foreign country. In Japan, it is polite to say "itadakimasu" before eating and to hold the rice bowl in one hand. In India, many people traditionally eat with their right hand instead of using forks or spoons. In France, it is considered rude to put your hands under the table during a meal. These differences can surprise visitors, but understanding them helps people avoid embarrassing mistakes and shows respect for local culture. Experts who study cross-cultural communication say that learning about table manners is one of the easiest ways to understand a country's values and traditions.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① 日本の食事のマナーだけを詳しく説明した文章', '② 世界各国で異なる食事のマナーとその文化的な意味', '③ フォークとスプーンの正しい使い方', '④ 海外旅行での食費の節約方法'],
    answer: '② 世界各国で異なる食事のマナーとその文化的な意味',
    hint: '本文全体で日本・インド・フランスの複数の例が挙げられている点に注目する。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. 導入：食事のマナーは世界各国で大きく異なる
2. 具体例：日本（「いただきます」・茶碗の持ち方）、インド（右手で食べる）、フランス（テーブルの下に手を入れるのは失礼）
3. まとめ：この違いを理解することは文化への敬意を示すことになる
4. 専門家の見解：食事のマナーを学ぶことはその国の価値観や伝統を理解する簡単な方法の一つ

複数の国の例を挙げながら「文化によるマナーの違いとその意味」を説明しているので②が正解。

①日本だけの説明ではなく複数国の例がある（×）
③フォーク・スプーンの使い方の説明が主題ではない（×）
④食費の節約については本文に記述がない（×）

【文法ポイント】
主題問題（main topic）のアプローチ：
1. 冒頭と結論部分に注目する
2. 複数の具体例がある場合、それらに共通するテーマを考える
3. 選択肢が本文の一部（1つの国だけなど）に偏っていないか確認する

【入試頻出】
・主題問題では「本文全体を貫くテーマ」を選ぶ
・具体例が複数ある場合、1つの具体例だけを選んだ選択肢は誤答になりやすい`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo4_50',
    subject: 'eigo',
    passage: `In recent years, language exchange apps have become popular among travelers who want to learn a new language before visiting a foreign country. These apps connect users with native speakers around the world so that they can practice speaking through video calls or text messages. Many users say that talking with a real person is more helpful than only studying textbooks. Some apps also let users ask questions about local culture, such as which foods to try or how to behave politely in public places. Because of these apps, more people are able to make friends abroad even before their trip begins. However, experts remind users that apps cannot completely replace real experience, such as traveling and meeting people face to face.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っていないものを1つ選べ。',
    choices: ['① 語学交換アプリは世界中のネイティブスピーカーとユーザーをつなげる。', '② 多くの利用者は教科書だけで学ぶより実際の人と話す方が役立つと感じている。', '③ アプリは現地の文化についての質問はできない。', '④ 専門家はアプリが実際の体験を完全に代わることはできないと述べている。'],
    answer: '③ アプリは現地の文化についての質問はできない。',
    hint: '本文中の "Some apps also let users ask questions about local culture" という一文を確認する。',
    explanation:
      '【何を聞かれているか】語学交換アプリについてのパッセージを読んで、内容と合っていない選択肢を1つ選ぶ。\n【なぜ③が不一致なのか】本文には"Some apps also let users ask questions about local culture"（一部のアプリは現地の文化について質問することもできる）と書かれており、これは③「現地の文化についての質問はできない」と正反対の内容だから。\n【ポイント1】①「世界中のネイティブスピーカーとつなげる」は本文の"These apps connect users with native speakers around the world"と一致する。\n【ポイント2】②「教科書だけで学ぶより実際の人と話す方が役立つ」は本文の"talking with a real person is more helpful than only studying textbooks"と一致する。④「実際の体験を完全に代わることはできない」も本文の"apps cannot completely replace real experience"と一致する。\n【ポイント3】③は本文の記述と正反対のため不一致の選択肢。\n【答え】③ アプリは現地の文化についての質問はできない。\n【確かめ】本文の該当箇所（Some apps also let users ask questions about local culture）を読み直し、③の内容と正反対であることを確認する。\n【よくあるまちがい】本文の一部を取り出して意味を反転させた選択肢に気づかず、正しいと判断してしまう。\n【ここが絶対】「合っていないものを選べ」問題では、本文の内容を逆にした選択肢が誤答（不一致）としてよく出る。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
