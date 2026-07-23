import type { Question } from './questions';

export const kokoNyushiEigo9: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo9_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The astronomer ( ) the stars for over ten years when she finally discovered the new planet.',
    choices: ['① watches', '② watched', '③ has watched', '④ had been watching'],
    answer: '④ had been watching',
    hint: '「発見した」という過去の一点よりもさらに前から続いていた動作を表す時制を選ぶ。',
    explanation: `【出題意図】
過去完了進行形（had been + Ving）の用法を問う問題。過去の基準点よりも前から継続していた動作を識別できるかが目標。

【解説】
「discovered（発見した）」は過去の一点。その一点よりもさらに前の時点から「星を観測し続けていた」という継続動作を表すには過去完了進行形を使う。
・① watches → 現在形（文脈に合わない）
・② watched → 過去形（継続の意味が弱い）
・③ has watched → 現在完了形（過去の基準点には使えない）
・④ had been watching → 過去完了進行形（✓）

日本語訳：「その天文学者は、ついに新しい惑星を発見したとき、10年以上も星を観測し続けていた。」

【文法ポイント】
過去完了進行形＝had been + 動詞-ing。過去のある時点よりもさらに前から、その時点まで継続していた動作に使う。「for〜」「since〜」など継続を示す語句とセットで出やすい。

【入試頻出】
・He had been studying physics for five years when he entered university.
・They had been developing the software since the project began.
・「過去の一点＋when節」の後に過去完了（進行）形が来るパターンを押さえよ。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Astronauts ( ) wear special suits when they walk outside the space station because there is no air.',
    choices: ['① can', '② should', '③ have to', '④ need'],
    answer: '③ have to',
    hint: '「空気がないから」という外的な状況による必要性を表す表現を選ぶ。',
    explanation: `【出題意図】
助動詞（can / should / have to / need）の意味の違いを問う問題。外的状況による必要性を表す表現の識別が目標。

【解説】
「because there is no air（空気がないから）」は外部の状況が理由。外的な必要性を表すには have to が最適。
・① can → 能力・可能性「〜できる」
・② should → 推奨「〜すべきだ」
・③ have to → 状況による必要性「〜しなければならない」（✓）
・④ need → 動詞として使う場合、肯定文では to needed（need to wear）が必要で、単独の need では不自然

日本語訳：「宇宙飛行士は宇宙ステーションの外を歩くとき、空気がないので特別なスーツを着なければならない。」

【文法ポイント】
have to：外部の規則・状況による義務。must：話者の主観的な強い義務。need は肯定文では通常 need to do の形をとる。

【入試頻出】
・You have to wear a helmet when you ride a bike.
・Scientists have to follow strict safety rules in the laboratory.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  New data ( ) from the Mars rover to scientists on Earth every day.',
    choices: ['① sends', '② is sent', '③ was sent', '④ has send'],
    answer: '② is sent',
    hint: '主語（data）は「送る」側ではなく「送られる」側。受動態の現在形を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形の正確な形を問う問題。能動態との区別も含む。

【解説】
主語は「New data（新しいデータ）」＝送られる側。データが自分で「送る」のではなく「送られる」ので受動態が必要。「every day（毎日）」は習慣を示すので現在形。
・① sends → 能動態（主語がデータでは不自然）
・② is sent → 受動態・現在形（✓）
・③ was sent → 受動態・過去形（every day と合わない）
・④ has send → 形が誤り

日本語訳：「新しいデータは毎日、火星探査車から地球の科学者たちに送られる。」

【文法ポイント】
受動態の基本形：現在＝is/am/are + 過去分詞。send の変化：send-sent-sent。

【入試頻出】
・Photos are sent from the satellite every hour.
・This information is collected by many sensors.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This is ( ) telescope that scientists have ever built.',
    choices: ['① powerful', '② more powerful', '③ the most powerful', '④ most powerful'],
    answer: '③ the most powerful',
    hint: '「これまでに作られた中で一番〜」は最上級。最上級には the が必要。',
    explanation: `【出題意図】
最上級の形と、最上級には定冠詞 the が必要なことを問う問題。

【解説】
「that scientists have ever built（科学者がこれまでに作った中で）」は範囲を示し、その中での「一番」を表すには最上級が必要。
・① powerful → 原級（比較なし）
・② more powerful → 比較級（2つの比較）
・③ the most powerful → 最上級（✓）
・④ most powerful → the が抜けている（誤り）

日本語訳：「これは科学者たちがこれまでに作った中で最も強力な望遠鏡だ。」

【文法ポイント】
最上級：the + most + 形容詞（多音節語）または the + 形容詞 + est（短い語）。最上級には必ず the が必要。

【入試頻出】
・This is the fastest computer in the world.
・That is the smallest robot I have ever seen.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Engineers designed the rover ( ) rocks and soil on Mars.',
    choices: ['① for collect', '② collecting', '③ to collect', '④ collected'],
    answer: '③ to collect',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法。',
    explanation: `【出題意図】
不定詞の副詞的用法「〜するために（目的）」を問う問題。

【解説】
「探査車を設計した」目的を表す文。「岩石や土壌を集めるために」は不定詞の副詞的用法で表す。
・① for collect → for の後ろに動詞原形は来ない
・② collecting → 動名詞（目的の意味を作れない）
・③ to collect → 不定詞（✓）
・④ collected → 過去分詞（目的を表せない）

日本語訳：「技術者たちは、火星の岩石や土壌を集めるために探査車を設計した。」

【文法ポイント】
不定詞の副詞的用法（目的）：動詞 + 目的語 + to + 動詞原形。「〜するために」の意味を作る。

【入試頻出】
・Scientists sent a probe to study the surface of Venus.
・They built a satellite to observe the ozone layer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The programmer finished ( ) the new app before the deadline.',
    choices: ['① test', '② to test', '③ testing', '④ tested'],
    answer: '③ testing',
    hint: 'finish の後ろには動名詞（〜ing）が来る。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞（finish）を正しく使えるかを問う問題。

【解説】
finish は目的語に動名詞（〜ing）のみを取り、不定詞は取らない。
・① test → 原形（finishの後ろには使えない）
・② to test → 不定詞（finishの後ろには来ない）
・③ testing → 動名詞（✓）finish + 動名詞
・④ tested → 過去形（目的語にはなれない）

日本語訳：「そのプログラマーは締め切り前に新しいアプリのテストを終えた。」

【文法ポイント】
動名詞のみを目的語にとる動詞（入試頻出）：finish（終える）、enjoy（楽しむ）、stop（やめる）、practice（練習する）、give up（諦める）。

【入試頻出】
・She finished writing the code last night.
・He gave up fixing the broken drone.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  By the year 2030, scientists ( ) a cure for many diseases with the help of AI.',
    choices: ['① will discover', '② will have discovered', '③ have discovered', '④ discovered'],
    answer: '② will have discovered',
    hint: '「2030年までには」という未来の時点での完了を表す時制を選ぶ。',
    explanation: `【出題意図】
未来完了形（will have + 過去分詞）の用法を問う問題。未来のある時点での完了を表す時制の識別。

【解説】
「By the year 2030（2030年までには）」は未来の時点。その時点までに「発見を終えていることになる」という未来完了を表す。
・① will discover → 単純未来（完了の意味がない）
・② will have discovered → 未来完了（✓）
・③ have discovered → 現在完了（未来の時点には使えない）
・④ discovered → 過去形（文脈に合わない）

日本語訳：「2030年までには、科学者たちはAIの助けを借りて多くの病気の治療法を発見しているだろう。」

【文法ポイント】
未来完了形＝will have + 過去分詞。目印の語句：by the time〜／by then／by 2030 など未来の時点を示す語。

【入試頻出】
・By next year, they will have completed the new space station module.
・She will have finished her research by the time she graduates.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If the rocket launch ( ) successful tomorrow, it will be a historic moment for space exploration.',
    choices: ['① is', '② will be', '③ was', '④ has been'],
    answer: '① is',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation: `【出題意図】
条件節（if 節）での時制のルール「未来のことでも現在形を使う」を問う問題。入試最頻出文法の一つ。

【解説】
「If the rocket launch 〜, it will be」は条件文。時・条件を表す副詞節の中では、未来のことでも will を使わず現在形を使う。
・① is → 現在形（✓）if 節内では現在形で未来を表す
・② will be → if 節内で will は使えない
・③ was → 過去形（仮定法になり文意が変わる）
・④ has been → 現在完了（文脈に合わない）

日本語訳：「もし明日のロケット打ち上げが成功すれば、それは宇宙探査にとって歴史的な瞬間になるだろう。」

【文法ポイント】
時・条件を表す副詞節の中では未来のことでも現在形：if／when／until／as soon as／before／after。

【入試頻出】
・If the experiment succeeds, we will publish the results.
・When the satellite reaches orbit, it will start sending data.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  Solar panels ( ) regularly to keep them working efficiently.',
    choices: ['① should clean', '② should be cleaned', '③ should cleaning', '④ should be clean'],
    answer: '② should be cleaned',
    hint: '「太陽光パネル」は掃除する側ではなく「掃除される」側。助動詞＋受動態の形を選ぶ。',
    explanation: `【出題意図】
助動詞＋受動態（should be + 過去分詞）の形を問う問題。

【解説】
主語「Solar panels」は掃除される側なので受動態が必要。助動詞の後ろに受動態を続ける場合は should be + 過去分詞の形になる。
・① should clean → 能動態（パネルが「掃除する」になり不自然）
・② should be cleaned → 助動詞＋受動態（✓）
・③ should cleaning → 助動詞の後ろは動詞原形が必要（誤り）
・④ should be clean → clean は形容詞になり「きれいであるべき」で動作を表さない

日本語訳：「太陽光パネルは効率よく働き続けるために、定期的に掃除されるべきだ。」

【文法ポイント】
助動詞＋受動態＝助動詞 + be + 過去分詞。should be cleaned、must be repaired、can be recycled など。

【入試頻出】
・This machine must be checked every month.
・Broken parts should be replaced immediately.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  A smartphone today is much ( ) than the huge computers used in the 1960s.',
    choices: ['① powerful', '② more powerful', '③ most powerful', '④ as powerful'],
    answer: '② more powerful',
    hint: 'than があるので比較級を選ぶ。powerful は多音節語なので more を使う。',
    explanation: `【出題意図】
比較級の形（more型）を正確に使えるかを問う問題。than との組み合わせも確認。

【解説】
than があれば比較級が必要。powerful は3音節の形容詞なので more 型で比較級を作る。
・① powerful → 原級（than とセットでは使えない）
・② more powerful → 正しい比較級（✓）
・③ most powerful → 最上級（than とセットでは使わない）
・④ as powerful → as〜as の形なら可だが than とは共存しない

日本語訳：「今日のスマートフォンは、1960年代に使われていた巨大なコンピューターよりもずっと高性能だ。」

【文法ポイント】
比較級の作り方：1〜2音節は-er、多音節は more + 形容詞。much は比較級を強調する語（much more powerful）。

【入試頻出】
・This new battery is more efficient than the old one.
・Electric cars are becoming more popular than before.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Have you ever ( ) a documentary about black holes?',
    choices: ['① watch', '② watched', '③ watching', '④ to watch'],
    answer: '② watched',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。watch の過去分詞を選ぶ。',
    explanation: `【出題意図】
現在完了形（経験用法）の形と、ever（これまでに）を使った疑問文の作り方を問う問題。

【解説】
Have you ever ( )? は「これまでに〜したことがありますか」という現在完了の経験用法。過去分詞が必要。
・① watch → 原形（have の後ろに原形は来ない）
・② watched → 過去分詞（✓）watch-watched-watched（規則動詞）
・③ watching → 現在分詞（have been watching なら別の意味）
・④ to watch → 不定詞（現在完了の形には合わない）

日本語訳：「これまでにブラックホールについてのドキュメンタリーを見たことがありますか？」

【文法ポイント】
現在完了（経験）の目印：ever（これまでに）、never（一度も〜ない）、before（以前に）、〜times（〜回）。

【入試頻出】
・Have you ever used a 3D printer?
・She has never seen a real rocket launch.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  ( ) renewable energy such as solar and wind power is important for protecting our planet.',
    choices: ['① Use', '② To using', '③ Using', '④ Used'],
    answer: '③ Using',
    hint: '文全体の主語になる動名詞を選ぶ。',
    explanation: `【出題意図】
動名詞が文の主語になれることを問う問題。

【解説】
この文は「( ) renewable energy〜」の部分全体が主語で、「is important」が述語。文の主語には名詞または動名詞が来る。
・① Use → 動詞の原形は主語になれない
・② To using → 存在しない形
・③ Using → 動名詞（✓）文の主語として機能する
・④ Used → 過去分詞（主語になれない）

日本語訳：「太陽光や風力のような再生可能エネルギーを使うことは、私たちの地球を守るために大切だ。」

【文法ポイント】
動名詞が主語になる文：Using〜/ Doing〜/ Reading〜 + is/are〜。不定詞（To use〜）も同様に主語になれる。

【入試頻出】
・Reducing plastic waste is good for the environment.
・Recycling old electronics helps save natural resources.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo9_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  Ever since she was young, she has been interested ( ) robotics.',
    choices: ['① at', '② with', '③ in', '④ about'],
    answer: '③ in',
    hint: 'be interested の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be interested in〜（〜に興味がある）の前置詞の用法を問う問題。

【解説】
be interested in〜 は「〜に興味がある」という意味のイディオムで、前置詞 in が固定。
・① at → be good at〜 に使う
・② with → be pleased with〜 などに使う
・③ in → be interested in〜（✓）
・④ about → be worried about〜 などに使う

日本語訳：「彼女は幼いころからずっとロボット工学に興味を持っている。」

【文法ポイント】
前置詞を固定する重要熟語：be interested in〜／be good at〜／be famous for〜／be afraid of〜／be surprised at〜。

【入試頻出】
・He has been interested in space since he was a child.
・She is good at programming.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Many students decided to ( ) part in the science fair this year.',
    choices: ['① make', '② have', '③ take', '④ give'],
    answer: '③ take',
    hint: 'take part in〜 で「〜に参加する」という熟語。',
    explanation: `【出題意図】
動詞 take を含む重要熟語 take part in〜 を正確に知っているかを問う問題。

【解説】
take part in〜 は「〜に参加する」という重要イディオム。
・① make → make part in は存在しない
・② have → have part in は存在しない
・③ take → take part in〜（✓）
・④ give → give part in は存在しない

日本語訳：「今年、多くの生徒が科学フェアに参加することに決めた。」

【文法ポイント】
take を含む頻出熟語：take part in〜（参加する）、take care of〜（世話をする）、take a look at〜（見る）、take place（行われる）。

【入試頻出】
・Our class will take part in the robot contest.
・The presentation takes place next Friday.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Scientists are looking ( ) new ways to store solar energy efficiently.',
    choices: ['① after', '② for', '③ at', '④ into'],
    answer: '② for',
    hint: 'look for〜 は「〜を探す」という意味の熟語。',
    explanation: `【出題意図】
句動詞 look + 前置詞 の使い分けを問う問題。look for / look into などの区別が目標。

【解説】
「新しい方法を探している」という文脈から look for〜（〜を探す）を選ぶ。
・① after → look after〜＝〜の世話をする
・② for → look for〜＝〜を探す（✓）
・③ at → look at〜＝〜を見る
・④ into → look into〜＝〜を調べる（すでにある問題を詳しく調査するときに使う）

日本語訳：「科学者たちは太陽エネルギーを効率的に蓄えるための新しい方法を探している。」

【文法ポイント】
look の句動詞：look for〜（探す）、look into〜（調べる）、look after〜（世話をする）、look like〜（似ている）。

【入試頻出】
・Researchers are looking for a solution to climate change.
・The team will look into the cause of the system error.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The space probe finally arrived ( ) Jupiter after a six-year journey.',
    choices: ['① to', '② at', '③ in', '④ on'],
    answer: '② at',
    hint: '惑星のような到達地点には arrive at を使う。',
    explanation: `【出題意図】
arrive at の用法を問う問題。到達点としての場所を示す前置詞の選択。

【解説】
arrive の後ろの前置詞は場所の捉え方によって使い分ける。惑星や目的地点として捉える場合は arrive at を使う（駅・空港などの特定地点と同じ扱い）。
・① to → arrive to という形は使わない
・② at → 到達地点を示す前置詞（✓）
・③ in → 都市や国など広い範囲に入り込む場合に使う
・④ on → arrive on は使わない

日本語訳：「その探査機は6年間の旅の末、ついに木星に到着した。」

【文法ポイント】
arrive at〜（特定の地点・目的地）：arrive at the station / arrive at Mars。arrive in〜（広い範囲）：arrive in Tokyo。

【入試頻出】
・The rover arrived at the landing site safely.
・We arrived at the airport two hours early.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Alexander Graham Bell ( ) the telephone in 1876.',
    choices: ['① discovered', '② invented', '③ found', '④ created'],
    answer: '② invented',
    hint: '「もともと存在しなかった新しいものを作り出す」場合に使う動詞を選ぶ。',
    explanation: `【出題意図】
invent と discover の意味の違いを問う語彙問題。似た意味に見える動詞の使い分けが目標。

【解説】
invent は「それまで存在しなかった新しいものを作り出す」（発明する）という意味。discover は「すでに存在していたが知られていなかったものを見つける」（発見する）という意味。電話はベルが新しく作り出した機械なので invent が正しい。
・① discovered → 新しい惑星や法則の「発見」に使う
・② invented → 新しい機械や技術の「発明」（✓）
・③ found → find（見つける）の過去形。日常的な「発見」に使うが学術的な発明には不自然
・④ created → 「創造する」やや広い意味だが invent ほど定着した語ではない

日本語訳：「アレクサンダー・グラハム・ベルは1876年に電話を発明した。」

【文法ポイント】
invent（発明する：電話・電球など新しいもの）／discover（発見する：新しい惑星・法則など既存のもの）の区別は入試の語彙問題で頻出。

【入試頻出】
・Thomas Edison invented the light bulb.
・Scientists discovered a new element last year.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Marie Curie is known ( ) her discovery of radium.',
    choices: ['① for', '② as', '③ by', '④ with'],
    answer: '① for',
    hint: '「〜で知られている」という業績を表す前置詞を選ぶ。',
    explanation: `【出題意図】
be known for〜（〜で知られている）と be known as〜（〜として知られている）の区別を問う問題。

【解説】
be known for〜 は「〜（業績・特徴）で知られている」、be known as〜 は「〜（肩書き・呼び名）として知られている」という違いがある。ここでは「ラジウムの発見」という業績なので for を使う。
・① for → 業績・理由（✓）
・② as → 肩書き・役割（known as a scientist）
・③ by → be known by〜（〜によって知られる、あまり一般的でない）
・④ with → be known for に with は使わない

日本語訳：「マリー・キュリーはラジウムの発見で知られている。」

【文法ポイント】
be known for〜（業績・理由）／be known as〜（肩書き）／be famous for〜（同義でよく使う）。

【入試頻出】
・This scientist is known for his research on gravity.
・She is known as a leading expert in AI.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  Please remember to ( ) your smartphone before the meeting starts.',
    choices: ['① turn off', '② turn down', '③ turn up', '④ turn over'],
    answer: '① turn off',
    hint: '会議前に電源を「切る」という意味の句動詞を選ぶ。',
    explanation: `【出題意図】
turn を使った句動詞の使い分けを問う問題。turn off / turn down / turn up / turn over の意味の違いが目標。

【解説】
「会議が始まる前にスマートフォンの電源を切る」という文脈から turn off（電源を切る）を選ぶ。
・① turn off → 電源を切る（✓）
・② turn down → 音量を下げる／申し出を断る
・③ turn up → 音量を上げる／現れる
・④ turn over → ひっくり返す

日本語訳：「会議が始まる前に、スマートフォンの電源を切ることを忘れないでください。」

【文法ポイント】
turn の句動詞：turn on/off（つける／消す）、turn up/down（上げる／下げる）、turn over（ひっくり返す）。

【入試頻出】
・Please turn off the computer before you leave the lab.
・Can you turn down the volume of the speaker?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The success of the space mission depends ( ) the accuracy of the calculations.',
    choices: ['① in', '② at', '③ on', '④ of'],
    answer: '③ on',
    hint: 'depend の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
熟語 depend on〜（〜次第である、〜に依存する）の前置詞を問う問題。

【解説】
depend on〜 は「〜次第である、〜に左右される」という重要イディオム。前置詞 on が固定。
・① in → depend in は存在しない
・② at → depend at は存在しない
・③ on → depend on〜（✓）
・④ of → depend of は存在しない

日本語訳：「その宇宙ミッションの成功は、計算の正確さにかかっている。」

【文法ポイント】
depend on〜（〜次第である）：rely on〜（頼る）も類似の意味で使われる。

【入試頻出】
・Whether the launch succeeds depends on the weather.
・You can always depend on this software.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo9_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The scientist ( ) works at NASA gave a lecture about black holes.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation: `【出題意図】
関係代名詞の選択（who / which / whom / whose）を問う問題。先行詞が人か物か、節内の役割の識別が目標。

【解説】
先行詞は「The scientist（科学者）」＝人。関係代名詞節内で「works（働く）」の主語の役割を果たしている。
・① who → 先行詞が人・主格（✓）
・② which → 先行詞が物や動物
・③ whom → 先行詞が人・目的格
・④ whose → 先行詞が人または物・所有格

日本語訳：「NASAで働くその科学者はブラックホールについての講演を行った。」

【文法ポイント】
関係代名詞まとめ：人＝who（主格）／whom（目的格）／whose（所有格）。物＝which（主格・目的格）／whose（所有格）。

【入試頻出】
・The engineer who designed this robot is very famous.
・I know a researcher who studies deep-sea creatures.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The smartphone ( ) I bought last year already feels outdated.',
    choices: ['① which', '② who', '③ whom', '④ where'],
    answer: '① which',
    hint: '先行詞は「物（スマートフォン）」。関係代名詞節内で bought の目的語になっている。',
    explanation: `【出題意図】
関係代名詞 which（先行詞が物・目的格）の用法を問う問題。that との言い換えも理解する。

【解説】
先行詞は「The smartphone（スマートフォン）」＝物。関係代名詞節内で I bought ( )（私が買った）の目的語になっている。
・① which → 先行詞が物・目的格（✓）
・② who → 先行詞が人のとき
・③ whom → 先行詞が人・目的格
・④ where → 関係副詞（場所を表す先行詞に使う）

which は省略可（that に置き換え可）：The smartphone (that) I bought last year〜

日本語訳：「私が去年買ったスマートフォンは、もう時代遅れに感じられる。」

【文法ポイント】
目的格の関係代名詞は省略可能：The device (which/that) I ordered was delivered yesterday.

【入試頻出】
・The laptop (which) she uses is very old.
・The app (that) I downloaded doesn't work well.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I visited the laboratory ( ) the new vaccine was developed.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所（laboratory）」で、関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 where（先行詞が場所）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「the laboratory（研究所）」＝場所。節内では「the new vaccine was developed in the laboratory」の前置詞 in の部分が関係副詞 where に変わった構造。
・① which → 物に使う関係代名詞（前置詞が必要になる）
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞（✓）
・④ when → 時を先行詞にとる関係副詞

日本語訳：「私は新しいワクチンが開発された研究所を訪れた。」

【文法ポイント】
関係副詞まとめ：where（場所）、when（時）、why（理由）。where＝前置詞＋which に相当。

【入試頻出】
・This is the factory where the robots are made.
・I remember the year when the internet became popular.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI met a scientist.\nHer research is about renewable energy.',
    answer: 'I met a scientist whose research is about renewable energy.',
    hint: '2つの文をつなぐとき、Her（彼女の）を所有格の関係代名詞 whose に変える。',
    explanation: `【出題意図】
所有格の関係代名詞 whose を使って2文を1文に結合する問題。

【解説】
「I met a scientist.」と「Her research is about renewable energy.」の Her は a scientist を指している。この「Her（その科学者の）」という所有の関係を表すのが関係代名詞の所有格 whose。

変換の手順：
1. 先行詞を特定：a scientist（人）
2. Her（所有格）→ whose に置き換える
3. whose を先行詞 a scientist の直後に置く
→ I met a scientist whose research is about renewable energy.

日本語訳：「私は研究テーマが再生可能エネルギーである科学者に会った。」

【文法ポイント】
whose の使い方：先行詞（人・物）の所有格を表す。whose 節の構造＝先行詞 + whose + 名詞 + 動詞〜。

【入試頻出】
・I know an engineer whose invention won an award.
・This is the company whose products are used worldwide.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_25',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：What time will the rocket launch?\n「そのロケットが何時に打ち上げられるか知っていますか？」',
    answer: 'Do you know what time the rocket will launch?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻る。',
    explanation: `【出題意図】
間接疑問文（疑問詞 + 主語 + 動詞の語順）への書き換えを問う問題。語順の変化が最大のポイント。

【解説】
直接疑問文「What time will the rocket launch?」を間接疑問文にする手順：
1. 疑問詞 What time はそのまま使う
2. 疑問詞の後ろは「主語 + 動詞」の平叙文語順に変える（疑問文の語順に戻さない）
3. 全体を「Do you know + 間接疑問」にする

× Do you know what time will the rocket launch?（誤り：疑問文の語順のまま）
○ Do you know what time the rocket will launch?（正解：平叙文語順）

日本語訳：「そのロケットが何時に打ち上げられるか知っていますか？」

【文法ポイント】
間接疑問文の語順：疑問詞 + 主語 + 動詞〜（平叙文語順）。

【入試頻出】
・Do you know when the satellite will be launched?
・Can you tell me how this machine works?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) this machine works?',
    choices: ['① what', '② how', '③ where', '④ why'],
    answer: '② how',
    hint: '「この機械がどのように動くか」という方法を尋ねる間接疑問文。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞を文脈から選ぶ問題。疑問詞の意味の使い分けが目標。

【解説】
「Could you tell me ( ) this machine works?」＝「この機械がどのように動くか教えてもらえますか？」機械の動作の仕組み・方法を尋ねるので how を使う。
・① what → 「何」物・事を尋ねる
・② how → 「どのように」方法を尋ねる（✓）
・③ where → 「どこ」場所を尋ねる
・④ why → 「なぜ」理由を尋ねる

日本語訳：「この機械がどのように動くのか教えていただけますか？」

【文法ポイント】
間接疑問文の疑問詞の使い分け：how（方法）、what（物・事）、where（場所）、why（理由）、when（時）。

【入試頻出】
・Please tell me how this app works.
・I don't know how the AI makes its decisions.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo9_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ know / you / do / how / this / works / robot ）\n「このロボットがどのように動くか知っていますか？」',
    answer: 'Do you know how this robot works?',
    hint: '間接疑問文：疑問詞（how）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation: `【出題意図】
間接疑問文の語順整序問題。「疑問詞 + 主語 + 動詞」という間接疑問の語順と、全体が疑問文になることを同時に確認する。

【解説】
ポイントは2つ：
1. 全体が「Do you know〜?」という疑問文
2. know の目的語（間接疑問）は「how this robot works」（疑問文の語順ではなく平叙文語順）

× Do you know how does this robot work?（誤り）
○ Do you know how this robot works?（正解）

日本語訳：「このロボットがどのように動くか知っていますか？」

【文法ポイント】
間接疑問の語順：疑問詞 + 主語 + 動詞。全体が疑問文の場合：Do/Can/Could + 主語 + 動詞 + 疑問詞 + 主語 + 動詞〜?

【入試頻出】
・Do you know how this app works?
・Can you tell me why the system stopped?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ the / company / this / developing / since / has / been / robot / for / three years ）\n「この会社は3年間、そのロボットを開発し続けている。」',
    answer: 'This company has been developing the robot for three years.',
    hint: '「3年間ずっと〜している」は現在完了進行形。for（〜の間）か since（〜以来）かを判断する。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for / since の使い分けを問う問題。不要語の識別も含む。

【解説】
「3年間」は期間（duration）なので for を使う。since は起点（since 2020 など）に使うため、この文脈では不要。
不要語：since（× for three years と since three years は共存しない）

正しい語順：
This company has been developing the robot for three years.
（現在完了進行形＝have been + Ving）

日本語訳：「この会社は3年間、そのロボットを開発し続けている。」

【文法ポイント】
for + 期間（for three years）／since + 起点（since 2020）。現在完了進行形の構造：have/has + been + 動詞-ing。

【入試頻出】
・She has been researching AI for two years.
・They have been testing the engine since last month.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / drone / to / carry / light / this / is ）\n「このドローンは持ち運べるほど軽い。」',
    answer: 'This drone is light enough to carry.',
    hint: '「〜するのに十分〜だ」は 形容詞 + enough + to 動詞 の語順。',
    explanation: `【出題意図】
「形容詞 + enough + to 動詞」の語順を問う整序問題。enough の位置が鍵。

【解説】
「〜するのに十分〜だ」は：主語 + be + 形容詞 + enough + to + 動詞原形。enough は形容詞の後ろに置く（× enough light は誤り）。

正しい語順：
This drone is light enough to carry.

日本語訳：「このドローンは持ち運べるほど軽い。」

【文法ポイント】
形容詞 + enough + to 動詞：「〜するのに十分〜だ」。
例：The box is small enough to fit in the bag.（かばんに入るくらい小さい）

too + 形容詞 + to 動詞：「〜すぎて〜できない」（enough と対で覚える）

【入試頻出】
・This tablet is thin enough to carry easily.
・The signal is strong enough to reach the station.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ the / gave / engineers / robot / new / commands / the ）\n「技術者たちはそのロボットに新しい命令を与えた。」',
    answer: 'The engineers gave the robot new commands.',
    hint: 'give + 人（物）+ 物 の語順（第4文型 SVOO）を使う。',
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。give の用法も確認。

【解説】
give + 対象（ロボット）+ 物（命令）＝対象に物を与える（第4文型）。
・The engineers（S）+ gave（V）+ the robot（IO：間接目的語）+ new commands（DO：直接目的語）

語順：The engineers gave the robot new commands.

第3文型への書き換え：The engineers gave new commands to the robot.（to を使う）

日本語訳：「技術者たちはそのロボットに新しい命令を与えた。」

【文法ポイント】
第4文型（SVOO）の動詞：give / send / show / teach + 人 + 物（to で書き換え可）。

【入試頻出】
・The teacher showed the students a new experiment.
・She sent her colleague the data file.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ tested / engineers / it / carefully / before / launching / the / satellite ）\n「衛星を打ち上げる前に、技術者たちはそれを注意深く検査した。」',
    answer: 'Engineers tested it carefully before launching the satellite.',
    hint: 'before の後には動名詞（〜ing）が来る。before + 動名詞＝〜する前に。',
    explanation: `【出題意図】
前置詞 before + 動名詞 の用法と、語順整序を問う問題。

【解説】
前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜する前に」＝before + 動名詞（〜ing）。

正しい語順：
Engineers tested it carefully before launching the satellite.
（＝Before launching the satellite, engineers tested it carefully.）

× before to launch（前置詞の後ろに不定詞は来ない）
○ before launching（✓ 前置詞 + 動名詞）

日本語訳：「衛星を打ち上げる前に、技術者たちはそれを注意深く検査した。」

【文法ポイント】
前置詞 + 動名詞の頻出パターン：before + ing（〜する前に）、after + ing（〜した後で）、without + ing（〜せずに）。

【入試頻出】
・She checked the data before submitting the report.
・He left the lab without turning off the computer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ the / who / I / met / scientist / conference / at / the / is / famous ）\n「私が学会で会った科学者は有名です。」',
    answer: 'The scientist who I met at the conference is famous.',
    hint: '関係代名詞 who を使って先行詞「the scientist」を修飾する節を作る。',
    explanation: `【出題意図】
関係代名詞 who（目的格）を使った語順整序問題。先行詞と関係代名詞節の位置関係が鍵。

【解説】
文の骨格：The scientist is famous.（その科学者は有名だ）
修飾部：who I met at the conference（私が学会で会った）

組み合わせ：
The scientist [who I met at the conference] is famous.

who はここでは目的格（met の目的語）として使われている。
＝The scientist (whom/that) I met at the conference is famous.（省略も可）

日本語訳：「私が学会で会った科学者は有名です。」

【文法ポイント】
関係代名詞節の位置：先行詞の直後に置く。主節の動詞（is）は関係代名詞節の後に続く。

【入試頻出】
・The engineer who(m) I interviewed works at a robotics company.
・The researcher who wrote this paper is well known.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ simple / this / for / experiment / enough / beginners / to / try / is ）\n「この実験は初心者が挑戦できるほど簡単だ。」',
    answer: 'This experiment is simple enough for beginners to try.',
    hint: '「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。',
    explanation: `【出題意図】
enough to 構文に「for + 人」が加わった形の語順を問う問題。「〜が…するほど十分〜だ」という表現の完全形を問う。

【解説】
構文：主語 + be + 形容詞 + enough + for + 人 + to + 動詞原形。「for + 人」は不定詞の意味上の主語を示す。

正しい語順：
This experiment is simple enough for beginners to try.

日本語訳：「この実験は初心者が挑戦できるほど簡単だ。」

【文法ポイント】
「形容詞 + enough + for + 人 + to + 動詞」構文：
・This app is easy enough for children to use.（子どもが使えるほど簡単だ）

「too + 形容詞 + for + 人 + to + 動詞」との対比：
・The theory is too difficult for students to understand.（難しすぎて理解できない）

【入試頻出】
・This device is simple enough for anyone to operate.
・The instructions are clear enough for beginners to follow.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・短い長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo9_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: Could you help me set up this telescope? B: ( )',
    choices: ['① Sure, no problem.', '② No, I don\'t.', '③ I\'d like a telescope.', '④ Yes, I would like.'],
    answer: '① Sure, no problem.',
    hint: 'Could you〜? は丁寧な依頼表現。自然な引き受け方を選ぶ。',
    explanation: `【出題意図】
Could you〜?（丁寧な依頼）への適切な応答を問う問題。日常会話・対話文頻出表現。

【解説】
Could you〜? は「〜していただけますか」という丁寧な依頼表現。
・① Sure, no problem. → 快く引き受ける自然な返答（✓）
・② No, I don't. → Could you〜? への返答として文法的に不自然
・③ I'd like a telescope. → 依頼への返答としてはずれる（新たな要望になる）
・④ Yes, I would like. → like の後ろに目的語が必要で不自然

日本語訳：
A：この望遠鏡を組み立てるのを手伝ってもらえますか？
B：もちろん、いいですよ。

【文法ポイント】
依頼への返答：受ける（Sure. / Of course. / No problem.）、断る（I'm sorry, I can't.）。

【入試頻出】
・Could you check my code? — Sure, no problem.
・Can you help me carry this box? — Of course.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: How long does it take to charge this electric car?\nB: ( )\n\n① It\'s about 300 kilometers.\n② It takes about thirty minutes with a fast charger.\n③ You should charge it at night.\n④ The car is very expensive.',
    answer: '② It takes about thirty minutes with a fast charger.',
    hint: 'How long does it take to〜? は所要時間を尋ねる表現。',
    explanation: `【出題意図】
「It takes + 時間 + to + 動詞」という所要時間を表す構文と、How long does it take to〜? への適切な応答を問う問題。

【解説】
How long does it take to〜?＝「〜するのにどのくらい時間がかかりますか？」返答は「It takes + 時間」の形が正しい。
・① about 300 kilometers → 距離を答えている（How far〜? への答え）
・② It takes about thirty minutes with a fast charger. → 所要時間を答えている（✓）
・③ You should charge it at night. → 提案（質問の答えになっていない）
・④ The car is very expensive. → 無関係

日本語訳：
A：この電気自動車を充電するのにどれくらい時間がかかりますか？
B：急速充電器を使えば約30分かかります。

【文法ポイント】
所要時間の表現：It takes + 時間 + to + 動詞〜＝〜するのに〜の時間がかかる。

【入試頻出】
・How long does it take to charge your phone?
・It takes about two hours to fully charge the battery.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: I\'m going to present my science project tomorrow, but I\'m really nervous. B: ( ) You\'ve prepared so well.',
    choices: ['① Don\'t worry.', '② That\'s too bad.', '③ I\'m sorry to hear that.', '④ Never mind.'],
    answer: '① Don\'t worry.',
    hint: '後に続く「You\'ve prepared so well.（よく準備したじゃないか）」という励ましの言葉に合う返答を選ぶ。',
    explanation: `【出題意図】
励ましの表現と、会話の流れ・文脈から適切な応答を選ぶ問題。

【解説】
Aが「緊張している」と言っているのに対し、Bは「You've prepared so well.（よく準備したじゃないか）」と励ましている。前置きとして最適なのは「Don't worry.（心配しないで）」。
・① Don't worry. → 心配しないで（励まし）（✓）
・② That's too bad. → それは残念だね（共感・慰め。励ましではない）
・③ I'm sorry to hear that. → それは残念です（同情。後の励ましと繋がりが弱い）
・④ Never mind. → 気にしないで（軽い謝罪への返答。励ましとしては不自然）

日本語訳：
A：明日、理科の自由研究を発表するんだけど、本当に緊張しているんだ。
B：心配しないで。あなたはよく準備したじゃないか。

【文法ポイント】
励まし・応援の表現：Don't worry. / You can do it! / I'm sure you'll do well.

【入試頻出】
・Don't worry. Everything will be fine.
・I'm sure your presentation will go well.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: May I use the computer in the lab? B: ( ) A: Thank you.',
    choices: ['① Sure, go ahead.', '② No, you may not use it.', '③ I don\'t have a computer.', '④ Yes, you may go.'],
    answer: '① Sure, go ahead.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I use〜?＝「〜を使ってもいいですか？」という許可を求める丁寧な表現。直後に「Thank you.」とあるので、許可を与える返答が必要。
・① Sure, go ahead. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not use it. → 文法的には正しい拒否だがAの「Thank you」と矛盾する
・③ I don't have a computer. → 状況から不自然
・④ Yes, you may go. → go（行く）は use（使う）とは関係ない

日本語訳：
A：研究室のコンピューターを使ってもいいですか？
B：もちろん、どうぞ。
A：ありがとう。

【文法ポイント】
許可を求める表現：May I〜?（丁寧）、Can I〜?（やや砕けた言い方）。許可を与える表現：Sure. / Go ahead. / Of course.

【入試頻出】
・May I borrow this equipment? — Sure, go ahead.
・Can I sit here? — Of course.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  I have never ( ) such an advanced robot before.',
    choices: ['① see', '② saw', '③ seen', '④ seeing'],
    answer: '③ seen',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。see の過去分詞を選ぶ。',
    explanation: `【出題意図】
現在完了形（経験用法）の形と、see の活用（see-saw-seen）を正確に使えるかを問う問題。

【解説】
never は現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形＝have/has + 過去分詞。see の活用：see（原形）→ saw（過去形）→ seen（過去分詞）。
・① see → 原形（have の後ろに原形は来ない）
・② saw → 過去形（have の後ろに過去形は来ない）
・③ seen → 過去分詞（✓）have seen
・④ seeing → 現在分詞（have been seeing なら別の意味）

日本語訳：「私はこれほど高性能なロボットを一度も見たことがない。」

【文法ポイント】
現在完了形（経験）の目印の語句：ever、never、before、〜times。不規則動詞の過去分詞：see-saw-seen / take-took-taken / write-wrote-written。

【入試頻出】
・I have never seen such a fast computer.
・Have you ever seen a real rocket launch?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  The new smartphone will be released ( ) April 15th.',
    choices: ['① in', '② at', '③ on', '④ by'],
    answer: '③ on',
    hint: '特定の日付には前置詞 on を使う。',
    explanation: `【出題意図】
時を表す前置詞（in / at / on）の使い分けを問う問題。入試最頻出文法の一つ。

【解説】
「April 15th（4月15日）」という特定の日付には on を使う。
・① in → 月・年・季節・時間帯（in April / in 2026）
・② at → 時刻・特定の時点（at noon / at 9 a.m.）
・③ on → 曜日・日付・特定の日（on April 15th）（✓）
・④ by → 期限（by April 15th＝4月15日までに）→ 意味が異なる

日本語訳：「その新しいスマートフォンは4月15日に発売される予定だ。」

【文法ポイント】
時を表す前置詞まとめ：at（時刻）、on（曜日・日付）、in（月・年・季節・時間帯）。

【入試頻出】
・The event will be held on May 3rd.
・The rocket is scheduled to launch on Monday morning.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  The teacher asked the students ( ) their laptops before the experiment began.',
    choices: ['① turn off', '② to turn off', '③ turning off', '④ turned off'],
    answer: '② to turn off',
    hint: 'ask + 人 + to do（人に〜するよう頼む）という構文。',
    explanation: `【出題意図】
「ask + 人 + to + 動詞」という第5文型（SVOC）の用法を問う問題。

【解説】
ask + 人 + to do＝「人に〜するよう頼む」という重要構文。
・① turn off → 原形のみ（ask の第5文型では to が必要）
・② to turn off → ask + 人 + to do（✓）
・③ turning off → 動名詞（ask + 人 + doing という形は存在しない）
・④ turned off → 過去分詞（文法的に合わない）

日本語訳：「先生は実験が始まる前に、生徒たちにノートパソコンの電源を切るよう頼んだ。」

【文法ポイント】
「動詞 + 人 + to do」の構文：ask（頼む）、tell（言う）、want（〜してほしい）、allow（許可する）。

【入試頻出】
・She asked me to help with the experiment.
・The scientist told the students to be careful with the chemicals.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  I think ( ) essential to test new technology carefully before releasing it to the public.',
    choices: ['① this', '② that', '③ it', '④ what'],
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation: `【出題意図】
形式主語 it（仮の主語）を使った構文を問う問題。I think (that) it is〜 の形が正解。

【解説】
この文は「I think [that] it is essential to test new technology〜」という構造。it は to test new technology carefully（新しい技術を注意深くテストすること）を指す形式主語。
・① this → I think this essential to〜 は文法的に成立しない
・② that → I think that essential to〜 も不自然
・③ it → 形式主語の it（✓）
・④ what → I think what essential to〜 は成立しない

日本語訳：「新しい技術を一般公開する前に注意深くテストすることは不可欠だと私は思う。」

【文法ポイント】
形式主語（仮主語）it の構文：It is + 形容詞 + to + 動詞〜＝〜することは（形容詞）だ。

【入試頻出】
・I think it is important to protect personal data.
・He found it difficult to fix the broken drone.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo9_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までにロボットに会ったことがありません。」',
    answer: 'I have never met a robot before.',
    hint: '「〜したことがない」は現在完了の経験用法（have never + 過去分詞）。',
    explanation: `【出題意図】
現在完了形（経験）の否定文を正確に作れるかを問う英作文問題。

【解説】
「〜したことがない」＝have/has never + 過去分詞（現在完了・経験の否定）。meet の活用：meet-met-met。

完成した文：
I have never met a robot before.

「before（以前に）」は文末に添えて経験を強調する語で、なくても文法的には正しいが、入試では入れるとより自然。

日本語訳の確認：「私は今までにロボットに会ったことがありません。」

【文法ポイント】
現在完了形（経験）の否定：have/has + never + 過去分詞。meet-met-met のように原形・過去形・過去分詞が同じ形の不規則動詞に注意。

【入試頻出】
・I have never used this kind of software before.
・She has never seen a robot like this.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「彼が発明した機械を私に見せてもらえませんか？」',
    answer: 'Could you show me the machine that he invented? / Could you show me the machine he invented?',
    hint: '「見せてもらえませんか」は Could you show me〜?、「彼が発明した」は関係代名詞（that / which）で修飾。',
    explanation: `【出題意図】
依頼表現（Could you〜?）と関係代名詞（目的格）を組み合わせた英作文。

【解説】
2つのポイント：
1. 丁寧な依頼：Could you show me〜?＝「〜を見せていただけますか？」show + 人 + 物（第4文型）
2. 「彼が発明した（機械）」＝the machine that/which he invented（関係代名詞・目的格、省略可）

組み合わせ：
Could you show me the machine (that) he invented?

別解：Could you let me see the machine he invented?

日本語訳確認：「彼が発明した機械を私に見せてもらえませんか？」

【文法ポイント】
Could you〜?＝Can you〜? の丁寧版。the machine (that) he invented＝he invented the machine の構造。

【入試頻出】
・Could you show me the app you created?
・This is the device (that) she designed for the science fair.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私が子どものころ、この街にはスマートフォンを持っている人はほとんどいませんでした。」',
    answer: 'When I was a child, there were few people who had smartphones in this town. / There were few people who had smartphones in this town when I was a child.',
    hint: '「〜がいた」は there was/were〜 の構文。「ほとんどいない」は few people。',
    explanation: `【出題意図】
there is/are 構文の過去形と、few（ほとんど〜ない）、関係代名詞 who を組み合わせた英作文。

【解説】
ポイント：
1. 「子どものころ」＝when I was a child
2. 「〜がいた」＝there were〜（people は複数なので were）
3. 「ほとんどいない」＝few people（数えられる名詞の「ほとんどない」）
4. 「スマートフォンを持っている人」＝people who had smartphones（関係代名詞）

組み合わせ：
When I was a child, there were few people who had smartphones in this town.

注意：× There was few people（× people は複数→were）

【文法ポイント】
few＋可算名詞（ほとんど〜ない）／a few＋可算名詞（少しはある）。there is/are 構文の過去形＝there was/were。

【入試頻出】
・There were few students who could use a computer at that time.
・A few people already had mobile phones in the 1990s.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私がその科学者なら、その実験をもう一度行うでしょう。」',
    answer: 'If I were that scientist, I would do the experiment again.',
    hint: '仮定法過去（現実とは逆の仮定）：If + 主語 + were/動詞の過去形, 主語 + would + 動詞原形。',
    explanation: `【出題意図】
仮定法過去（If I were〜, I would〜）の形を問う英作文。入試英作文最頻出構文の一つ。

【解説】
「もし私がその科学者なら」＝現実と異なる仮定（実際には私はその科学者ではない）→仮定法過去を使う。

仮定法過去の形：
If + 主語 + 動詞の過去形（be動詞は were）, 主語 + would + 動詞原形

重要：If I were that scientist〜（× If I was〜 は入試では不正解になりやすい）
仮定法では be 動詞は人称に関わらず were を使う。

完成した文：
If I were that scientist, I would do the experiment again.

【文法ポイント】
仮定法過去：現在の事実に反する仮定。If + 主語 + were, 主語 + would + 動詞原形。

【入試頻出】
・If I were an engineer, I would design safer robots.
・If she had more data, she could finish the research faster.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「この発明は大人だけでなく、子どもにも人気があります。」',
    answer: 'This invention is popular not only with adults but also with children. / This invention is popular not only among adults but also among children.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。「〜に人気がある」は popular with/among〜。',
    explanation: `【出題意図】
相関接続詞 not only A but also B（〜だけでなく…も）の構文と、popular with/among〜 を使った英作文。

【解説】
2つのポイント：
1. 「〜だけでなく…も」＝not only A but also B
2. 「〜に人気がある」＝be popular with〜 または be popular among〜

組み合わせ：
This invention is popular not only with adults but also with children.

注意：not only A but also B の A と B は文法的に同じ形（並列）である必要がある。

【文法ポイント】
相関接続詞：not only A but also B（AだけでなくBも）、both A and B（AもBも）。popular with（特定の人）／popular among（グループの中で）。

【入試頻出】
・This robot is loved not only by children but also by adults.
・The app is useful not only for students but also for teachers.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo9_47',
    subject: 'eigo',
    passage: `More and more schools around the world are now teaching children how to code. Learning to program helps students understand logical thinking and problem solving. It also prepares them for future jobs, because many industries now need workers who understand computer technology. Some people worry that coding is too difficult for young children, but simple programming languages, such as those used to make games or control small robots, are designed especially for beginners. Teachers say that children who learn to code often become more confident and creative. In addition, coding can be combined with other subjects, such as art or music, to make learning more interesting. Experts believe that basic computer skills will soon be as important as reading and writing.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① すべての生徒がプログラミングを難しいと感じている。', '② 簡単なプログラミング言語は初心者のために作られている。', '③ プログラミング教育は美術や音楽と組み合わせることはできない。', '④ 専門家はコンピューターの基礎知識が不要になると考えている。'],
    answer: '② 簡単なプログラミング言語は初心者のために作られている。',
    hint: '本文中の "simple programming languages...are designed especially for beginners." という文を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「すべての生徒が難しいと感じている」→ 本文には「Some people worry（一部の人が心配している）」とあり、全員ではないので×
② 「簡単なプログラミング言語は初心者のために作られている」→ 本文の "simple programming languages...are designed especially for beginners" と一致（✓）
③ 「美術や音楽と組み合わせることはできない」→ 本文には "coding can be combined with other subjects, such as art or music" とあり真逆なので×
④ 「専門家は基礎知識が不要になると考えている」→ 本文には "basic computer skills will soon be as important as reading and writing"（読み書きと同じくらい重要になる）とあり真逆なので×

【文法ポイント】
内容一致問題のアプローチ：選択肢を先に読んでキーワードを把握し、本文の該当箇所と慎重に比較する。否定・過度な主張は誤答パターンの典型。

【入試頻出】
・「すべて」「〜しかない」等の断定的な選択肢は本文の一部の記述と食い違うことが多い。
・本文の言い換え表現（simple→easy 等）に気づくことが正解への鍵。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_48',
    subject: 'eigo',
    passage: `In 2021, a robotic rover landed on Mars to search for signs of ancient life. The rover carries many instruments, including cameras and a device that can collect rock samples. After exploring the surface for several months, scientists found minerals that usually form in water. This finding excited many researchers because it suggested that Mars may have had rivers or lakes billions of years ago. Some scientists believe this could mean that microscopic life once existed on the planet. However, more research is needed before anyone can be certain. NASA plans to send another mission to bring the rock samples back to Earth so that they can be studied more carefully in laboratories.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文中の下線部 "This finding" が指す内容として最も適切なものを選べ。',
    choices: ['① ロケットの新しい設計', '② 火星に水が存在した可能性を示す鉱物の発見', '③ ロボットのカメラの性能', '④ 地球にサンプルを持ち帰る計画'],
    answer: '② 火星に水が存在した可能性を示す鉱物の発見',
    hint: '"This finding" は直前の文「scientists found minerals that usually form in water」を指す。',
    explanation: `【出題意図】
指示語（This finding）が何を指すかを本文から特定する指示語問題。入試長文読解の頻出問題形式。

【解説】
指示語の前後を確認する：
"This finding" の直前には："scientists found minerals that usually form in water"（科学者たちは通常水の中で形成される鉱物を発見した）とある。
→ ②「火星に水が存在した可能性を示す鉱物の発見」が正解。

① ロケットの新しい設計：本文に記述なし（×）
③ ロボットのカメラの性能：カメラは道具として言及されているだけで、finding の内容ではない（×）
④ サンプルを持ち帰る計画：This finding よりも後に出てくる別の話題（×）

【文法ポイント】
指示語問題のアプローチ：this/these/it/they が出たら直前の文を確認し、単数・複数、内容の性質を照合する。

【入試頻出】
・「this/these が指すものを選べ」→直前の内容を探す。
・段落の途中の this は直前の1文の内容をまとめることが多い。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_49',
    subject: 'eigo',
    passage: `Artificial intelligence, or AI, is now part of our everyday lives, even when we do not notice it. When you ask your phone for directions, when a website suggests products you might like, or when your email filters out spam, AI is working behind the scenes. AI systems learn from large amounts of data and improve their performance over time. Many companies are using AI to make services faster and more convenient for customers. At the same time, some experts warn that we should be careful about how AI collects and uses personal information. They believe that clear rules are necessary to protect people's privacy while still allowing technology to develop. Understanding both the benefits and the risks of AI will become increasingly important for everyone in the future.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① AIが個人情報を盗む具体的な事件の報告', '② 日常生活に浸透するAIの利便性と、その利用に伴う課題', '③ AIを開発する特定の企業の歴史', '④ スマートフォンの新機能の技術的な仕組み'],
    answer: '② 日常生活に浸透するAIの利便性と、その利用に伴う課題',
    hint: '本文全体の流れ（AIの身近な例→便利さ→専門家の懸念→今後の重要性）を把握して、何が最も中心的に述べられているかを考える。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. 導入：AIは気づかないうちに日常生活の一部になっている（電話の道案内、おすすめ商品、スパムフィルターなど）
2. 利便性：多くの企業がサービスを速く便利にするためにAIを使っている
3. 懸念：一部の専門家は個人情報の扱いについて注意が必要だと警告している
4. 結論：AIの利点とリスクの両方を理解することが今後ますます重要になる

全体を通して「AIの便利さと課題（両面）」が中心テーマ→②が正解

① 具体的な事件の報告：本文にそのような事例の記述はない（×）
③ 特定の企業の歴史：本文にはない（×）
④ 技術的な仕組み：スマートフォンの例は一部に過ぎない（×）

【文法ポイント】
主題問題のアプローチ：冒頭と末尾を特に注意深く読む。繰り返し登場するキーワード（AI, data, privacy）を見つける。

【入試頻出】
・主題問題では文章全体を貫くテーマを選ぶ。一部の具体例のみに対応する選択肢は不正解になりやすい。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo9_50',
    subject: 'eigo',
    passage: `Space around Earth is becoming crowded with objects called space debris. This includes broken satellites, pieces of old rockets, and other equipment left behind after missions. Even a small piece of debris can seriously damage a working satellite or a spacecraft because it travels extremely fast. Scientists are now developing new technologies to track this debris and, in some cases, remove it from orbit. Some companies are designing special satellites that can capture debris using nets or robotic arms. International cooperation is also important because debris created by one country can threaten satellites owned by another. Experts agree that if nothing is done, the problem will only get worse as more satellites are launched every year.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っていないものを1つ選べ。',
    choices: ['① 宇宙ゴミには壊れた人工衛星や古いロケットの破片が含まれる。', '② 小さな宇宙ゴミでも稼働中の衛星に深刻な損害を与える可能性がある。', '③ 宇宙ゴミの除去は一つの国だけで完結する問題であり、国際協力は不要である。', '④ 網やロボットアームを使って宇宙ゴミを捕獲する衛星を開発している企業がある。'],
    answer: '③ 宇宙ゴミの除去は一つの国だけで完結する問題であり、国際協力は不要である。',
    hint: '本文では "International cooperation is also important" と述べられている点に注目する。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」という誤文識別型の読解問題。細部の読み取りと選択肢の正確な解釈が必要。

【解説】
各選択肢を本文と照合する：
① 「壊れた人工衛星や古いロケットの破片が含まれる」→本文の "broken satellites, pieces of old rockets" と一致（✓ 本文と一致）
② 「小さな宇宙ゴミでも深刻な損害を与える可能性がある」→本文の "Even a small piece of debris can seriously damage a working satellite" と一致（✓ 本文と一致）
③ 「国際協力は不要である」→本文には "International cooperation is also important because debris created by one country can threaten satellites owned by another."（一国が作ったゴミが他国の衛星を脅かすため国際協力が重要）とあり、真逆の内容（× 本文と不一致）
④ 「網やロボットアームを使って宇宙ゴミを捕獲する衛星を開発している企業がある」→本文の "Some companies are designing special satellites that can capture debris using nets or robotic arms." と一致（✓ 本文と一致）

正解：③

【文法ポイント】
「合っていないものを選べ」問題のアプローチ：選択肢の語句を一つずつ本文と照合し、本文の否定表現と選択肢の肯定表現（またはその逆）に注意する。

【入試頻出】
・「不要である」「完結する」など本文の主張と正反対の断定を含む選択肢は誤答（不一致）になりやすい。
・「国際協力」のようなキーワードが本文中でどのように評価されているかを確認することが鍵。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
