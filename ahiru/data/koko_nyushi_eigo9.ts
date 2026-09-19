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
    explanation:
      '【何を聞かれているか】「The astronomer ( ) the stars for over ten years when she finally discovered the new planet.」の空所に入る適切な時制を選ぶ。\n【なぜhad been watchingになるのか】「発見した」という過去の一点よりさらに前から「星を観測し続けていた」という継続動作を表すには、過去完了進行形（had been＋動詞のing形）を使う必要があるから。\n【ポイント1】discovered（発見した）は過去の1つの時点。その時点よりも前から継続していた動作を表すには、さらに過去を示す時制が必要。\n【ポイント2】①watches（現在形）、②watched（過去形、継続の意味が弱い）、③has watched（現在完了、過去の基準点には使えない）はどれも文脈に合わない。\n【ポイント3】④had been watching（過去完了進行形）が正解。「10年以上も星を観測し続けていた」という意味になる。\n【答え】④ had been watching\n【確かめ】「for over ten years」という継続の期間を表す語句と、過去完了進行形の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】has watched（現在完了形）を選んでしまう。現在完了は現在を基準にするので、過去の基準点には使えない。\n【ここが絶対】過去のある時点よりもさらに前から、その時点まで継続していた動作には過去完了進行形を使う。',
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
    explanation:
      '【何を聞かれているか】「This is ( ) telescope that scientists have ever built.」の空所に入る適切な比較表現を選ぶ。\n【なぜthe most powerfulになるのか】「that scientists have ever built（科学者がこれまでに作った中で）」という範囲を示す表現があるため、その中での「一番」を表す最上級が必要で、powerfulは長い形容詞なのでthe mostを使うから。\n【ポイント1】①powerful（原級）、②more powerful（比較級）はどちらも「一番」の意味を表せない。\n【ポイント2】③the most powerful（最上級）が正解。\n【ポイント3】④most powerful（theが抜けている誤り）。最上級には必ずtheが必要。\n【答え】③ the most powerful\n【確かめ】the most powerfulのtheが抜けていないかを確認する。\n【よくあるまちがい】④most powerfulのようにtheをつけ忘れてしまう。\n【ここが絶対】最上級には必ずtheをつける。多音節語はthe most＋形容詞の形にする。',
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
    explanation:
      '【何を聞かれているか】「The programmer finished ( ) the new app before the deadline.」の空所に入る適切な形を選ぶ。\n【なぜtestingになるのか】finishは動名詞（-ing）だけを目的語に取り、不定詞（to＋原形）は目的語に取らないという決まりがあるから。\n【ポイント1】①test（原形）、②to test（不定詞）はどちらもfinishの後ろには使えない。\n【ポイント2】③testing（動名詞）が正解。finish＋動名詞の形。\n【ポイント3】④tested（過去形）は目的語の位置には使えない。動名詞のみを目的語に取る動詞にはほかにenjoy、stop、practice、give upなどがある。\n【答え】③ testing\n【確かめ】finishのあとが動詞のing形になっているかを確認する。\n【よくあるまちがい】finishのあとにto testを続けてしまう。\n【ここが絶対】finishは動名詞のみを目的語に取る動詞として覚える。',
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
    explanation:
      '【何を聞かれているか】「By the year 2030, scientists ( ) a cure for many diseases with the help of AI.」の空所に入る適切な時制を選ぶ。\n【なぜwill have discoveredになるのか】「2030年までには」という未来のある時点で「発見を終えていることになる」という完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】By the year 2030（2030年までには）は未来の時点を示す表現。\n【ポイント2】①will discover（単純未来）、③have discovered（現在完了、未来の時点には使えない）、④discovered（過去形）はどれも文脈に合わない。\n【ポイント3】②will have discovered（未来完了）が正解。目印はby the time〜、by then、by 2030など。\n【答え】② will have discovered\n【確かめ】By the year 2030という未来の時点を示す語句と、will have＋過去分詞の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】have discovered（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での完了にはwill have＋過去分詞（未来完了形）を使う。',
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
    explanation:
      '【何を聞かれているか】「If the rocket launch ( ) successful tomorrow, it will be a historic moment for space exploration.」の空所に入る適切な語を選ぶ。\n【なぜisになるのか】条件を表すif節の中では、未来のことでもwillを使わず現在形を使うという決まりがあるから。\n【ポイント1】if節などの副詞節の中では、未来のことでも現在形で表す。②will beはif節の中では使えない。\n【ポイント2】③was（過去形、仮定法になり文意が変わる）、④has been（現在完了、文脈に合わない）はどちらも誤り。\n【ポイント3】①is（現在形）が正解。「もし明日のロケット打ち上げが成功すれば」という条件を表す。\n【答え】① is\n【確かめ】主節にwillが使われている（it will be）ことと、if節が現在形（is）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwillを入れてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形を使う。',
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
    explanation:
      '【何を聞かれているか】「Have you ever ( ) a documentary about black holes?」の空所に入る適切な形を選ぶ。\n【なぜwatchedになるのか】Have you ever〜?は「これまでに〜したことがありますか」という現在完了の経験用法の疑問文で、have/hasのあとには過去分詞が必要だから。\n【ポイント1】①watch（原形）はhaveの後ろに来ない。\n【ポイント2】③watching（現在分詞）はhave been watchingなら別の意味になり、この文には合わない。④to watch（不定詞）も現在完了の形には合わない。\n【ポイント3】②watched（過去分詞）が正解。watchは規則動詞でwatch-watched-watchedと活用する。\n【答え】② watched\n【確かめ】haveのあとに過去分詞watchedが続いているかを確認する。\n【よくあるまちがい】haveのあとに原形をそのまま続けてしまう。\n【ここが絶対】現在完了の経験用法Have you ever〜?のあとは必ず過去分詞を使う。',
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
    explanation:
      '【何を聞かれているか】「Many students decided to ( ) part in the science fair this year.」の空所に入る適切な動詞を選ぶ。\n【なぜtakeになるのか】「〜に参加する」という意味は、動詞takeを使ったtake part in〜という決まったイディオムで表すから。\n【ポイント1】take part in〜は「〜に参加する」という重要イディオム。\n【ポイント2】①make part in、②have part in、④give part inはどれも存在しない表現。\n【ポイント3】takeを含む頻出熟語：take care of〜（世話をする）、take a look at〜（見る）、take place（行われる）。\n【答え】③ take\n【確かめ】take part in the science fairで「科学フェアに参加する」という意味になっているかを確認する。\n【よくあるまちがい】make part inのように、他の動詞をあてはめてしまう。\n【ここが絶対】「〜に参加する」はtake part in〜という決まった形で覚える。',
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
    explanation:
      '【何を聞かれているか】「The space probe finally arrived ( ) Jupiter after a six-year journey.」の空所に入る適切な前置詞を選ぶ。\n【なぜatになるのか】木星のような特定の到達地点を表すときは、arrive atという決まった形を使う必要があるから（駅・空港などの特定地点と同じ扱い）。\n【ポイント1】arrive atは特定の地点・目的地に到着することを表す（例：arrive at the station）。\n【ポイント2】①to（arrive toという形は使わない）、③in（都市や国など広い範囲に入り込む場合に使う）、④on（arrive onは使わない）はどれも誤り。\n【ポイント3】②at（到達地点を示す前置詞）が正解。arrive in〜は都市や国などの広い範囲に使う（例：arrive in Tokyo）。\n【答え】② at\n【確かめ】Jupiter（木星）が特定の到達地点として捉えられていることを確認する。\n【よくあるまちがい】arrive atとarrive inを混同してしまう。\n【ここが絶対】arrive at〜（特定の地点・目的地）、arrive in〜（広い範囲）を使い分ける。',
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
    explanation:
      '【何を聞かれているか】「Please remember to ( ) your smartphone before the meeting starts.」の空所に入る適切な句動詞を選ぶ。\n【なぜturn offになるのか】「電源を切る」という意味は、turn offという決まった句動詞で表すから。\n【ポイント1】①turn off（電源を切る）が正解。\n【ポイント2】②turn down（音量を下げる／申し出を断る）、③turn up（音量を上げる／現れる）、④turn over（ひっくり返す）はどれもこの文脈に合わない。\n【ポイント3】turnの句動詞：turn on/off（つける／消す）、turn up/down（上げる／下げる）。\n【答え】① turn off\n【確かめ】会議前にスマートフォンの「電源を切る」という文脈にturn offが合っているかを確認する。\n【よくあるまちがい】turn downとturn offを混同してしまう。\n【ここが絶対】turn on/off（電源のつける・消す）、turn up/down（音量の上げる・下げる）を区別して覚える。',
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
    explanation:
      '【何を聞かれているか】「The success of the space mission depends ( ) the accuracy of the calculations.」の空所に入る適切な前置詞を選ぶ。\n【なぜonになるのか】「〜次第である、〜に依存する」という意味は、depend on〜という前置詞onが固定された決まったイディオムで表すから。\n【ポイント1】depend on〜は「〜次第である、〜に左右される」という重要イディオムで前置詞onが固定される。\n【ポイント2】①in、②at、④ofはどれもdependのあとに続く前置詞としては存在しない組み合わせ。\n【ポイント3】似た意味の表現にrely on〜（頼る）がある。\n【答え】③ on\n【確かめ】depend on the accuracy of the calculationsで「計算の正確さにかかっている」という意味になっているかを確認する。\n【よくあるまちがい】depend inやdepend ofのように別の前置詞を使ってしまう。\n【ここが絶対】depend on〜は前置詞onが固定された決まった形として覚える。',
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
    explanation:
      '【何を聞かれているか】「The scientist ( ) works at NASA gave a lecture about black holes.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞The scientist（科学者）は人で、関係代名詞節の中でworks（働く）の主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がThe scientist（人）で、関係代名詞節内でworksの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】関係代名詞まとめ：人＝who（主格）／whom（目的格）／whose（所有格）、物＝which（主格・目的格）／whose（所有格）。\n【答え】① who\n【確かめ】whoのあとに動詞（works）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
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
    explanation:
      '【何を聞かれているか】「The smartphone ( ) I bought last year already feels outdated.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhichになるのか】先行詞The smartphone（スマートフォン）は物で、関係代名詞節の中でI bought（　）の目的語の役割をしているため、先行詞が物・目的格のときに使うwhichを選ぶ必要があるから。\n【ポイント1】先行詞がThe smartphone（物）で、関係代名詞節内でI boughtの目的語になっている（目的格）。\n【ポイント2】②whoは先行詞が人、③whomは先行詞が人・目的格、④whereは関係副詞で、どれも文脈に合わない。\n【ポイント3】whichは省略も可能で、thatに置きかえることもできる：The smartphone (that) I bought last year〜。\n【答え】① which\n【確かめ】whichのあとにI bought（主語＋動詞）が続いている（目的語の役割）ことを確認する。\n【よくあるまちがい】先行詞が物なのにwhoを選んでしまう。\n【ここが絶対】目的格の関係代名詞は省略できる。先行詞が物ならwhich（thatはどちらにも使える）。',
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
    explanation:
      '【何を聞かれているか】「I met a scientist. Her research is about renewable energy.」を関係代名詞を使って1文にする。\n【なぜwhoseを使うのか】2つ目の文のHer（彼女の）がa scientist（1つ目の文の名詞）の所有を表しているため、この所有の関係を表す所有格の関係代名詞whoseに置きかえる必要があるから。\n【ポイント1】先行詞を特定する：a scientist（人）。\n【ポイント2】Her（所有格）をwhoseに置きかえ、先行詞a scientistの直後に置く。\n【ポイント3】I met a scientist whose research is about renewable energy.（私は研究テーマが再生可能エネルギーである科学者に会った）。\n【答え】I met a scientist whose research is about renewable energy.\n【確かめ】whoseのあとにresearch（名詞）、is（動詞）と続いているかを確認する。\n【よくあるまちがい】whoseのかわりにwhoを使ってしまう。所有の関係にはwhoseを使う。\n【ここが絶対】whoseは先行詞の所有格を表す関係代名詞。',
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
    explanation:
      '【何を聞かれているか】「What time will the rocket launch?」（そのロケットが何時に打ち上げられるか知っていますか？）を間接疑問文に書きかえる。\n【なぜwillの位置が変わるのか】疑問文が他の文（Do you know〜）の一部に組み込まれると、疑問文特有の倒置ではなく、ふつうの文と同じ〈疑問詞＋主語＋動詞〉の語順に戻すというルールがあるから。\n【ポイント1】疑問詞What timeはそのまま使う。\n【ポイント2】疑問詞の後ろを「主語＋動詞」の平叙文語順に変える。the rocket will launchという順にする。\n【ポイント3】全体をDo you know＋間接疑問の形にする。Do you know what time the rocket will launch?\n【答え】Do you know what time the rocket will launch?\n【確かめ】what timeのあとがwill the rocket launchではなくthe rocket will launch（平叙文語順）になっているかを確認する。\n【よくあるまちがい】Do you know what time will the rocket launch?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の語順は〈疑問詞＋主語＋動詞〉の平叙文語順にする。',
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
    explanation:
      '【何を聞かれているか】know / you / do / how / this / works / robot を並べ替えて「このロボットがどのように動くか知っていますか？」という英文を作る。\n【なぜthis robot worksという語順になるのか】全体はDo you know〜?という疑問文だが、knowの目的語になる部分（間接疑問）は疑問文の語順ではなく、〈疑問詞（how）＋主語＋動詞〉という平叙文の語順にする必要があるから。\n【ポイント1】全体の骨組みはDo you know〜?という疑問文。\n【ポイント2】knowの目的語（間接疑問）はhow this robot works（疑問文の語順ではなく平叙文語順）。\n【ポイント3】組み立てるとDo you know how this robot works?になる。\n【答え】Do you know how this robot works?\n【確かめ】howのあとがdoes this robot workではなくthis robot works（平叙文語順）になっているかを確認する。\n【よくあるまちがい】Do you know how does this robot work?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の中は、疑問詞のあとを〈主語＋動詞〉の平叙文語順にする。',
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
    explanation:
      '【何を聞かれているか】enough / drone / to / carry / light / this / is を並べ替えて「このドローンは持ち運べるほど軽い。」という英文を作る。\n【なぜenoughを形容詞のあとに置くのか】「〜するのに十分〜だ」は〈形容詞＋enough＋to動詞〉という決まった語順で表し、enoughは必ず形容詞のあとに置くというルールがあるから。\n【ポイント1】「〜するのに十分〜だ」は主語＋be＋形容詞＋enough＋to＋動詞原形の形。enoughは形容詞のあとに置く（enough lightは誤り）。\n【ポイント2】This drone is light enough to carry.（このドローンは持ち運べるほど軽い）。\n【ポイント3】反対の意味を表すtoo＋形容詞＋to動詞（〜すぎて〜できない）とセットで覚える。\n【答え】This drone is light enough to carry.\n【確かめ】enoughがlightのあとに置かれているか（enough lightになっていないか）を確認する。\n【よくあるまちがい】enough lightのように、enoughを形容詞の前に置いてしまう。\n【ここが絶対】enoughは必ず形容詞・副詞のあとに置く。',
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
    explanation:
      '【何を聞かれているか】the / gave / engineers / robot / new / commands / the を並べ替えて「技術者たちはそのロボットに新しい命令を与えた。」という英文を作る。\n【なぜthe robot new commandsという語順になるのか】give＋対象＋物は「対象に物を与える」という第4文型（SVOO）の形で、間接目的語を直接目的語より先に置くという決まりがあるから。\n【ポイント1】give＋対象＋物＝対象に物を与える（第4文型）。The engineers（S）+ gave（V）+ the robot（間接目的語）+ new commands（直接目的語）。\n【ポイント2】語順はThe engineers gave the robot new commands.になる。\n【ポイント3】第3文型に書きかえるとThe engineers gave new commands to the robot.（toを使う）になる。\n【答え】The engineers gave the robot new commands.\n【確かめ】the robot（対象）がnew commands（物）より先に置かれているかを確認する。\n【よくあるまちがい】gave new commands the robotのように、物を対象より先に置いてしまう。\n【ここが絶対】give＋対象＋物の第4文型では、対象（間接目的語）を先に、物（直接目的語）をあとに置く。',
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
    explanation:
      '【何を聞かれているか】tested / engineers / it / carefully / before / launching / the / satellite を並べ替えて「衛星を打ち上げる前に、技術者たちはそれを注意深く検査した。」という英文を作る。\n【なぜbeforeのあとが動名詞になるのか】前置詞のあとには名詞・動名詞が来るという決まりがあり、不定詞（to＋原形）は前置詞のあとには置けないため、「〜する前に」はbefore＋動名詞（〜ing）の形にする必要があるから。\n【ポイント1】前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜する前に」＝before＋動名詞（〜ing）。\n【ポイント2】Engineers tested it carefully before launching the satellite.（＝Before launching the satellite, engineers tested it carefully.と同じ意味）。\n【ポイント3】同じパターン：after＋ing（〜した後で）、without＋ing（〜せずに）。\n【答え】Engineers tested it carefully before launching the satellite.\n【確かめ】beforeのあとがlaunch（原形）やto launch（不定詞）ではなくlaunching（動名詞）になっているかを確認する。\n【よくあるまちがい】before to launchのように、前置詞のあとに不定詞を置いてしまう。\n【ここが絶対】前置詞のあとに動詞を続けるときは必ず動名詞（-ing）にする。',
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
    explanation:
      '【何を聞かれているか】the / who / I / met / scientist / conference / at / the / is / famous を並べ替えて「私が学会で会った科学者は有名です。」という英文を作る。\n【なぜwhoが目的格として使えるのか】whoは本来主格の関係代名詞だが、口語では目的格（whomの代わり）としてもよく使われ、先行詞The scientistのうしろに「who I met at the conference」という節を置いて修飾できるから。\n【ポイント1】文の骨格はThe scientist is famous.（その科学者は有名だ）。\n【ポイント2】修飾部はwho I met at the conference（私が学会で会った）。ここでのwhoはmetの目的語にあたる目的格の働きをしている。\n【ポイント3】組み合わせるとThe scientist who I met at the conference is famous.になる。＝The scientist (whom/that) I met at the conference is famous.（省略も可）。\n【答え】The scientist who I met at the conference is famous.\n【確かめ】関係代名詞節（who I met at the conference）が先行詞The scientistの直後に置かれ、そのあとに主節の動詞is famousが続いているかを確認する。\n【よくあるまちがい】関係代名詞節を先行詞から離れた位置に置いてしまう。\n【ここが絶対】関係代名詞節は必ず先行詞の直後に置く。',
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
    explanation:
      '【何を聞かれているか】simple / this / for / experiment / enough / beginners / to / try / is を並べ替えて「この実験は初心者が挑戦できるほど簡単だ。」という英文を作る。\n【なぜfor＋人が入るのか】「〜が…するのに十分〜だ」と、動作をする人を明示するには、〈形容詞＋enough＋for＋人＋to＋動詞原形〉という構文を使い、for＋人が不定詞の意味上の主語を示すから。\n【ポイント1】構文は主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形。\n【ポイント2】This experiment is simple enough for beginners to try.（この実験は初心者が挑戦できるほど簡単だ）。\n【ポイント3】反対の意味を表す〈too＋形容詞＋for＋人＋to＋動詞〉（〜すぎて…できない）とセットで覚える（例：The theory is too difficult for students to understand.）。\n【答え】This experiment is simple enough for beginners to try.\n【確かめ】for beginnersがenoughとtoの間に正しく置かれているかを確認する。\n【よくあるまちがい】for beginnersを文の最後に置いてしまう。\n【ここが絶対】「形容詞＋enough＋for＋人＋to＋動詞」の語順を1つのまとまりとして覚える。',
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
    explanation:
      '【何を聞かれているか】「Could you help me set up this telescope?」への適切な返答を選ぶ。\n【なぜ「Sure, no problem.」が正しいのか】Could you〜?は「〜していただけますか」という丁寧な依頼表現で、快く引き受けるときはSure, no problem.のような自然な返答をするから。\n【ポイント1】②No, I don\'t.はCould you〜?への返答として文法的に不自然。\n【ポイント2】③I\'d like a telescope.は依頼への返答としてはずれる（新たな要望になる）。④Yes, I would like.はlikeのあとに目的語が必要で不自然。\n【ポイント3】①Sure, no problem.が正しい。依頼を受けるときはSure. / Of course. / No problem.のような表現を使う。\n【答え】① Sure, no problem.\n【確かめ】Could you〜?への返答として自然な形になっているかを確認する。\n【よくあるまちがい】依頼と噛み合わない返答を選んでしまう。\n【ここが絶対】依頼への返答はSure. / Of course. / No problem.（受ける）、I\'m sorry, I can\'t.（断る）で覚える。',
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
    explanation:
      '【何を聞かれているか】「How long does it take to charge this electric car?」への適切な返答を選ぶ。\n【なぜIt takes about thirty minutes with a fast charger.が正しいのか】How long does it take to〜?は「〜するのにどのくらい時間がかかるか」を尋ねる表現で、これにはIt takes＋時間という所要時間を答える形で返す決まりがあるから。\n【ポイント1】①about 300 kilometersは距離を答えており、How far〜?への返答にあたる。\n【ポイント2】③You should charge it at night.は提案であり、質問（所要時間）の答えになっていない。④The car is very expensive.は無関係。\n【ポイント3】②It takes about thirty minutes with a fast charger.が正しい。所要時間を答えている。\n【答え】② It takes about thirty minutes with a fast charger.\n【確かめ】質問がHow long（時間）を尋ねているのに対し、選んだ返答が時間を答えているかを確認する。\n【よくあるまちがい】How long〜?とHow far〜?を混同し、距離を答えてしまう。\n【ここが絶対】所要時間を尋ねるHow long does it take to〜?にはIt takes＋時間で答える。',
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
    explanation:
      '【何を聞かれているか】「I\'m going to present my science project tomorrow, but I\'m really nervous.」に対するBの返答（このあとYou\'ve prepared so well.と続く）に合う表現を選ぶ。\n【なぜDon\'t worry.が正しいのか】Aが発表への不安を伝えており、そのあとBが「よく準備したじゃないか」と励ましているため、その前置きとしては「心配しないで」という励ましの表現が自然につながるから。\n【ポイント1】①Don\'t worry.（心配しないで）は励ましの表現で、後に続くYou\'ve prepared so well.（よく準備したじゃないか）と自然につながる。\n【ポイント2】②That\'s too bad.と③I\'m sorry to hear that.はどちらも同情・慰めの表現で、励ましの流れには合わない。\n【ポイント3】④Never mind.（気にしないで）は軽い謝罪への返答で、この文脈には不自然。\n【答え】① Don\'t worry.\n【確かめ】選んだ返答のあとにYou\'ve prepared so well.が自然に続くかを確認する。\n【よくあるまちがい】②That\'s too bad.のように、同情の表現を励ましの場面で使ってしまう。\n【ここが絶対】対話文の空所は、その後に続く文とのつながりを見て、共感なのか励ましなのかを判断する。',
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
    explanation:
      '【何を聞かれているか】「I have never ( ) such an advanced robot before.」の空所に入る適切な形を選ぶ。\n【なぜseenになるのか】neverを使った現在完了形の経験用法「一度も〜したことがない」は、have/has＋過去分詞の形にする必要があり、seeの過去分詞はseenだから。\n【ポイント1】neverは現在完了形の経験用法で「一度も〜したことがない」を表す。現在完了形はhave/has＋過去分詞。\n【ポイント2】seeの活用：see（原形）→saw（過去形）→seen（過去分詞）。①see（原形）、②saw（過去形）はhaveのあとに使えない。\n【ポイント3】④seeing（現在分詞）はhave been seeingなら別の意味になり、この文には合わない。③seen（過去分詞）が正解。\n【答え】③ seen\n【確かめ】haveのあとに過去分詞seenが続いているかを確認する。\n【よくあるまちがい】have sawのように、haveのあとに過去形をそのまま続けてしまう。\n【ここが絶対】現在完了形はhave/has＋過去分詞。不規則動詞の活用（see-saw-seen）を正確に覚える。',
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
    explanation:
      '【何を聞かれているか】「The new smartphone will be released ( ) April 15th.」の空所に入る適切な前置詞を選ぶ。\n【なぜonになるのか】April 15th（4月15日）のような特定の日付を表すときは、前置詞onを使うという決まりがあるから。\n【ポイント1】①in（月・年・季節・時間帯に使う）、②at（時刻・特定の時点に使う）はどちらも「特定の日付」には使わない。\n【ポイント2】③on（曜日・日付・特定の日に使う）が正解。\n【ポイント3】④by（期限「〜までに」）は意味が異なる。時を表す前置詞まとめ：at＝時刻、on＝曜日・日付、in＝月・年・季節。\n【答え】③ on\n【確かめ】April 15thが「特定の日付」にあたることから、onが正しいことを確認する。\n【よくあるまちがい】inやatを、日付を表す前置詞として使ってしまう。\n【ここが絶対】時を表す前置詞は、atは時刻・時点、onは曜日・日付、inは月・年・季節、と使い分ける。',
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
    explanation:
      '【何を聞かれているか】「The teacher asked the students ( ) their laptops before the experiment began.」の空所に入る適切な形を選ぶ。\n【なぜto turn offになるのか】「人に〜するよう頼む」はask＋人＋to doという決まった構文で表し、人のあとには必ず不定詞（to＋原形）が続くから。\n【ポイント1】ask＋人＋to do＝「人に〜するよう頼む」という重要構文。\n【ポイント2】①turn off（原形のみ）、③turning off（動名詞）、④turned off（過去分詞）はどれもask＋人のあとの形として使えない。\n【ポイント3】同じ仲間の構文：tell＋人＋to do（人に〜するよう言う）、want＋人＋to do（人に〜してほしい）、allow＋人＋to do（人が〜するのを許可する）。\n【答え】② to turn off\n【確かめ】The teacher asked the students to turn off their laptops.という文全体を読み、「先生は生徒たちにノートパソコンの電源を切るよう頼んだ」という意味になっているかを確認する。\n【よくあるまちがい】ask＋人のあとに原形をそのまま続けてしまう。\n【ここが絶対】ask＋人＋to doの形では、人のあとに必ずtoが必要。',
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
    explanation:
      '【何を聞かれているか】「I think ( ) essential to test new technology carefully before releasing it to the public.」の空所に入る適切な語を選ぶ。\n【なぜitになるのか】to test new technology carefully（新しい技術を注意深くテストすること）という長い内容を先に置くと文のバランスが悪くなるため、その内容を指す形式主語itを先に置いて、本当の中身をあとに回すという英語の決まりがあるから。\n【ポイント1】this、that、whatはこの位置に置いても文法的に成立しない。\n【ポイント2】③it（形式主語）が正解。itはto test new technology carefully before releasing it to the publicを指す。\n【ポイント3】形式主語itの基本構文：It is＋形容詞＋to＋動詞〜＝「〜することは（形容詞）だ」（例：It is important to protect personal data.）。\n【答え】③ it\n【確かめ】itがto test new technology carefully〜を指していることを確認する。\n【よくあるまちがい】thisやthatを使ってしまう。形式主語には必ずitを使う。\n【ここが絶対】「〜することは…だ」を表すときは、形式主語itを使い、本当の中身（to不定詞）は後ろに置く。',
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
    explanation:
      '【何を聞かれているか】「私は今までにロボットに会ったことがありません。」を英語に訳す。\n【なぜnever met a robotになるのか】「〜したことがない」という現在完了形の経験用法の否定は、have/has never＋過去分詞の形で表す必要があり、meetの過去分詞はmetだから。\n【ポイント1】「〜したことがない」＝have/has never＋過去分詞（現在完了・経験の否定）。\n【ポイント2】meetの活用：meet-met-met（原形・過去形・過去分詞が同じ形の不規則動詞）。\n【ポイント3】I have never met a robot before.（beforeは文末に添えて経験を強調する語で、なくても文法的に正しいが入れるとより自然）。\n【答え】I have never met a robot before.\n【確かめ】haveのあとにmet（過去分詞）が続いているかを確認する。\n【よくあるまちがい】meetをmeetedのように誤って規則動詞化してしまう。\n【ここが絶対】現在完了形（経験）の否定はhave/has＋never＋過去分詞。meet-met-metのように原形・過去形・過去分詞が同じ形の不規則動詞に注意する。',
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
    explanation:
      '【何を聞かれているか】「彼が発明した機械を私に見せてもらえませんか？」を英語に訳す。\n【なぜCould you〜?とthat/whichを組み合わせるのか】丁寧な依頼にはCould you〜?を使い、「彼が発明した」という説明を加えるには、the machineのうしろに関係代名詞（目的格）でinvented節をつなげる必要があるから。\n【ポイント1】丁寧な依頼：Could you show me〜?＝「〜を見せていただけますか？」（show＋人＋物の第4文型）。\n【ポイント2】「彼が発明した（機械）」＝the machine that/which he invented（関係代名詞・目的格、省略も可）。\n【ポイント3】組み合わせるとCould you show me the machine (that) he invented?になる。\n【答え】Could you show me the machine that he invented? / Could you show me the machine he invented?\n【確かめ】the machineのあとにhe invented（主語＋動詞）が続いており、inventの目的語がthe machineであることを確認する。\n【よくあるまちがい】Could you〜?のかわりにCan you〜?を使ってしまい、ていねいさが弱くなる。\n【ここが絶対】Could you〜?はCan you〜?の丁寧版。目的格の関係代名詞は省略できる。',
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
    explanation:
      '【何を聞かれているか】「もし私がその科学者なら、その実験をもう一度行うでしょう。」を英語に訳す。\n【なぜwereを使うのか】「もし私がその科学者ならば」は現実とは異なる仮定（実際には私はその科学者ではない）なので、仮定法過去を使い、be動詞は主語に関係なくwereにするという決まりがあるから。\n【ポイント1】仮定法過去の形：If＋主語＋動詞の過去形（be動詞はwere）, 主語＋would＋動詞原形。\n【ポイント2】If I were that scientist〜（If I was〜は入試では不正解になりやすい）。\n【ポイント3】If I were that scientist, I would do the experiment again.\n【答え】If I were that scientist, I would do the experiment again.\n【確かめ】be動詞がwasではなくwereになっているかを確認する。\n【よくあるまちがい】If I was that scientist, I would〜のようにwasを使ってしまう。\n【ここが絶対】仮定法過去のif節ではbe動詞は必ずwereを使う。',
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
    explanation:
      '【何を聞かれているか】「この発明は大人だけでなく、子どもにも人気があります。」を英語に訳す。\n【なぜnot only A but also Bを使うのか】「〜だけでなく…も」という意味は、相関接続詞not only A but also Bという決まった形で表し、「〜に人気がある」はbe popular with/among〜で表すから。\n【ポイント1】「〜だけでなく…も」＝not only A but also B。AとBは文法的に同じ形（並列）にする必要がある。\n【ポイント2】「〜に人気がある」＝be popular with〜（特定の人）またはbe popular among〜（グループの中で）。\n【ポイント3】This invention is popular not only with adults but also with children.\n【答え】This invention is popular not only with adults but also with children. / This invention is popular not only among adults but also among children.\n【確かめ】not only のあとと、but also のあとが同じ形（with adults／with children）になっているかを確認する。\n【よくあるまちがい】not only とbut alsoのあとの形をそろえず、withとamongを混ぜて使ってしまう。\n【ここが絶対】not only A but also BのAとBは文法的に同じ形にする。',
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
    explanation:
      '【何を聞かれているか】本文中の下線部"This finding"が指す内容として最も適切なものを選ぶ。\n【なぜ②が正解なのか】"This finding"の直前に"scientists found minerals that usually form in water"（科学者たちは通常水の中で形成される鉱物を発見した）とあり、"This finding"はこの発見を指しているから。\n【ポイント1】指示語の直前を確認する：科学者が水の中で形成される鉱物を発見したという出来事が直前に書かれている。\n【ポイント2】①ロケットの新しい設計は本文に記述がない。③カメラは道具として言及されているだけでfindingの内容ではない。④サンプルを持ち帰る計画はThis findingよりも後に出てくる別の話題。\n【ポイント3】"This finding"が指すのは②「火星に水が存在した可能性を示す鉱物の発見」。\n【答え】② 火星に水が存在した可能性を示す鉱物の発見\n【確かめ】"This finding"を②の内容に置きかえて文を読み直し、意味が通ることを確認する。\n【よくあるまちがい】指示語の直前ではなく、離れた場所の内容から答えを探してしまう。\n【ここが絶対】指示語問題では、指示語の直前の文を確認し、代入して意味が通るかを確かめる。',
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
