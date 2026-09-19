import type { Question } from './questions';

export const kokoNyushiEigo10: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  The volunteers ( ) food to homeless people for over ten years.',
    choices: ['① serve', '② served', '③ have served', '④ have been serving'],
    answer: '④ have been serving',
    hint: '「10年以上ずっと〜している」という継続を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「The volunteers ( ) food to homeless people for over ten years.」の空所に入る適切な時制を選ぶ。\n【なぜhave been servingになるのか】「10年以上ずっと」という、今も続いている動作の継続を強調するには、現在完了進行形（have been＋動詞のing形）を使う必要があるから。\n【ポイント1】for over ten years（10年以上にわたって）は継続を表す語句。\n【ポイント2】①serve（現在形、継続の強調がない）、②served（過去形、今も続くニュアンスが出ない）、③have served（現在完了形、継続の強調が弱い）はどれも文脈に合わない。\n【ポイント3】④have been serving（現在完了進行形）が正解。for〜、since〜とセットで頻出。\n【答え】④ have been serving\n【確かめ】for over ten yearsという継続の期間を表す語句と、have been＋Vingの組み合わせがセットになっていることを確認する。\n【よくあるまちがい】have served（現在完了形）を選んでしまう。現在完了進行形の方が「今も続いている」ことをより強調する。\n【ここが絶対】過去から現在まで続く動作の継続を強調するときは現在完了進行形（have/has been＋Ving）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We ( ) help our neighbors when they are in trouble.',
    choices: ['① must not', '② should', '③ can\'t', '④ won\'t'],
    answer: '② should',
    hint: '「困っているときは助けるべきだ」という一般的な義務・道徳的な推奨を表す助動詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「We ( ) help our neighbors when they are in trouble.」の空所に入る適切な助動詞を選ぶ。\n【なぜshouldになるのか】近所の人が困っているときの一般的なアドバイス・道徳的な責任を表すには、should（〜すべきだ）が最も自然だから。\n【ポイント1】①must not（〜してはいけない、逆の意味）、③can\'t（〜できない）、④won\'t（〜しないだろう）はどれも文脈に合わない。\n【ポイント2】②should（道徳的な推奨・アドバイス）が正解。\n【ポイント3】should＝道徳的義務・アドバイス、must＝強い義務・規則、ought toはshouldとほぼ同義でやや書き言葉的。\n【答え】② should\n【確かめ】文全体が「困っている人への一般的なアドバイス」という内容になっているかを確認する。\n【よくあるまちがい】mustを選んでしまい、規則的な義務と道徳的なアドバイスを混同する。\n【ここが絶対】should＝〜すべきだ（道徳的な推奨・アドバイス）、must／have to＝〜しなければならない（強い義務）と使い分ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  This community center ( ) by local volunteers five years ago.',
    choices: ['① built', '② was built', '③ has built', '④ is building'],
    answer: '② was built',
    hint: '「地域センターが建てられた」という過去の受動態を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の過去形を正確に使えるかを問う問題。

【解説】
主語This community centerは「建てる」側ではなく「建てられる」側。「five years ago」は明確な過去を示すので過去形の受動態was builtが適切。
・① built → 能動態過去形（主語と動詞の関係が逆）
・② was built → 受動態・過去形（✓）
・③ has built → 現在完了・能動態（agoと合わない）
・④ is building → 現在進行形・能動態（意味が通らない）

日本語訳：「この地域センターは5年前に地元のボランティアによって建てられた。」

【文法ポイント】
受動態過去形＝was/were＋過去分詞。by〜で動作主を示す。

【入試頻出】
・The park was cleaned by students last weekend.
・This bridge was built by volunteers in 2019.
・The old library was repaired by the town.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  More people are joining volunteer activities ( ) five years ago.',
    choices: ['① as', '② than', '③ that', '④ so'],
    answer: '② than',
    hint: '比較級 more people の後に続く語を考える。',
    explanation: `【出題意図】
比較級moreとセットで使うthanの用法を問う問題。

【解説】
More people（比較級）がある文ではthanで比較対象を示す。「5年前と比べて」という意味。
・① as → 原級比較（as many as など）に使う
・② than → 比較級とセットで使う（✓）
・③ that → 関係代名詞・接続詞（比較には不要）
・④ so → 接続詞（意味が通らない）

日本語訳：「5年前よりも多くの人がボランティア活動に参加している。」

【文法ポイント】
比較級＋than〜＝〜より…。more＋名詞＋thanで数量の比較も可能。

【入試頻出】
・More students are interested in social issues than before.
・Fewer people throw away plastic bottles than ten years ago.
・This town has more volunteers than that one.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  They held a charity event ( ) money for children in need.',
    choices: ['① raise', '② raising', '③ to raise', '④ raised'],
    answer: '③ to raise',
    hint: '「お金を集めるために」という目的を表す不定詞を選ぶ。',
    explanation: `【出題意図】
不定詞の副詞的用法（目的）を問う問題。

【解説】
「チャリティーイベントを開いた」目的が「お金を集めるため」。不定詞to＋動詞原形で目的を表す。
・① raise → 原形単独（目的を表せない）
・② raising → 動名詞（目的の副詞用法にはならない）
・③ to raise → 不定詞・副詞的用法（✓）
・④ raised → 過去分詞（意味が通らない）

日本語訳：「彼らは支援を必要とする子どもたちのためにお金を集めるためにチャリティーイベントを開いた。」

【文法ポイント】
不定詞の副詞的用法（目的）＝「〜するために」。in order to〜も同義でより明確。

【入試頻出】
・We collected clothes to help refugees.
・She volunteers every weekend to support elderly people.
・The city built a shelter to protect people from disasters.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We should avoid ( ) too much food, because many people around the world don\'t have enough to eat.',
    choices: ['① waste', '② to waste', '③ wasting', '④ wasted'],
    answer: '③ wasting',
    hint: 'avoidの後ろに来る動詞の形（動名詞）を選ぶ。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞avoidの用法を問う問題。

【解説】
avoid＋動名詞＝「〜するのを避ける」。avoidは不定詞を目的語に取らない。
・① waste → 原形（avoidの後には使えない）
・② to waste → 不定詞（avoidは不定詞をとらない）
・③ wasting → 動名詞（✓）
・④ wasted → 過去形（目的語になれない）

日本語訳：「世界中の多くの人が十分な食べ物を持っていないのだから、私たちは食べ物を無駄にしすぎるのを避けるべきだ。」

【文法ポイント】
動名詞のみを目的語にとる動詞：avoid, enjoy, finish, stop, mind, give up, practice。

【入試頻出】
・We should avoid throwing away useful things.
・He finished helping the elderly woman with her bags.
・They practice sorting garbage every day at school.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  By the end of this year, this NPO ( ) more than one thousand families.',
    choices: ['① will help', '② has helped', '③ will have helped', '④ helped'],
    answer: '③ will have helped',
    hint: '「今年の終わりまでには」という未来の時点での完了を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「By the end of this year, this NPO ( ) more than one thousand families.」の空所に入る適切な時制を選ぶ。\n【なぜwill have helpedになるのか】「今年の終わりまでには」という未来のある時点で「1000家族以上を助けたことになる」という完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】By the end of this year（今年の終わりまでには）は未来の時点を示す表現。\n【ポイント2】①will help（単純未来）、②has helped（現在完了、未来の時点には使えない）、④helped（過去形）はどれも文脈に合わない。\n【ポイント3】③will have helped（未来完了）が正解。目印はby the time〜、by then、by 2030など。\n【答え】③ will have helped\n【確かめ】By the end of this yearという未来の時点を示す語句と、will have＋過去分詞の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】has helped（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での完了にはwill have＋過去分詞（未来完了形）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If we ( ) more about local problems, we can find better ways to solve them.',
    choices: ['① will learn', '② learn', '③ learned', '④ have learned'],
    answer: '② learn',
    hint: '条件を表すif節の中では、未来のことでも現在形を使う。',
    explanation:
      '【何を聞かれているか】「If we ( ) more about local problems, we can find better ways to solve them.」の空所に入る適切な語を選ぶ。\n【なぜlearnになるのか】条件を表すif節の中では、未来のことでもwillを使わず現在形を使うという決まりがあるから。\n【ポイント1】if節などの副詞節の中では、未来のことでも現在形で表す。①will learnはif節の中では使えない。\n【ポイント2】③learned（過去形、仮定法になり文意がずれる）、④have learned（現在完了、この文脈では不要）はどちらも誤り。\n【ポイント3】②learn（現在形）が正解。「私たちが地域の問題についてもっと学べば」という条件を表す。\n【答え】② learn\n【確かめ】主節にcan（可能性）が使われていることと、if節が現在形（learn）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwillを入れてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  There ( ) be an empty lot here, but now it is a community garden.',
    choices: ['① used to', '② is used to', '③ was used to', '④ has used to'],
    answer: '① used to',
    hint: '「以前は〜だった（今は違う）」という過去の状態を表す表現を選ぶ。',
    explanation:
      '【何を聞かれているか】「There ( ) be an empty lot here, but now it is a community garden.」の空所に入る適切な表現を選ぶ。\n【なぜused toになるのか】「以前は〜だった（今は違う）」という過去の状態と現在の対比を表すには、used to＋動詞原形という決まった形を使う必要があるから。\n【ポイント1】used to＋動詞原形は「以前は〜だった」という過去の状態・習慣を表す（形は変化しない）。\n【ポイント2】②is used to（「〜に慣れている」という別の意味になる）、③was used to（誤った形）、④has used to（存在しない形）はどれも誤り。\n【ポイント3】①used to（過去の状態・習慣）が正解。There used to be〜で「以前は〜があった」という意味になる。\n【答え】① used to\n【確かめ】「今はコミュニティガーデンになっている」というbut nowの部分と、「以前は空き地だった」という対比になっているかを確認する。\n【よくあるまちがい】used to（過去の状態）とbe used to〜ing（〜に慣れている）を混同してしまう。\n【ここが絶対】used to＋動詞原形＝以前は〜だった（今は違う）。be used to＋動名詞＝〜に慣れている、と区別する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The number of volunteers this year is ( ) large as last year\'s.',
    choices: ['① so', '② very', '③ as', '④ much'],
    answer: '③ as',
    hint: '「〜と同じくらい…」という原級比較 as＋形容詞＋as の形を考える。',
    explanation:
      '【何を聞かれているか】「The number of volunteers this year is ( ) large as last year\'s.」の空所に入る適切な語を選ぶ。\n【なぜasになるのか】「今年のボランティアの数は昨年と同じくらい多い」という2つを同等に比べる表現は、as＋形容詞＋as〜という決まった形で表すから。\n【ポイント1】①so（通常so〜thatの形で使う）、②very（単独の強調でas構文にならない）、④much（比較級の強調で原級には使わない）はどれも誤り。\n【ポイント2】③as（同等比較as〜as）が正解。\n【ポイント3】as＋形容詞/副詞＋as〜＝〜と同じくらい…。否定文not as/so〜as＝〜ほど…でない。\n【答え】③ as\n【確かめ】文末にas last year\'s（＝as last year\'s number）という比較対象が続いていることを確認する。\n【よくあるまちがい】soやveryをasの代わりに使ってしまう。\n【ここが絶対】「〜と同じくらい…」という同等比較はas＋形容詞/副詞＋as〜の形で表す。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  He was ( ) enough to give up his weekend to help clean the river.',
    choices: ['① kind', '② kindly', '③ kindness', '④ more kind'],
    answer: '① kind',
    hint: 'enoughの前には形容詞の原級が来る。',
    explanation: `【出題意図】
形容詞＋enough＋to構文における品詞の正確な使い方を問う問題。

【解説】
enoughの前には形容詞の原級を置く（副詞や名詞は不可）。「親切にも週末を返上した」という文脈。
・② kindly → 副詞（この位置には使えない）
・③ kindness → 名詞（enoughの位置に合わない）
・④ more kind → 比較級（enough構文には原級を使う）
・① kind → 形容詞の原級（✓）

日本語訳：「彼は親切にも、川の掃除を手伝うために週末を返上した。」

【文法ポイント】
形容詞＋enough＋to〜＝「〜するほど十分…だ」。enoughは必ず形容詞・副詞の後ろに置く。

【入試頻出】
・She was brave enough to speak up about the problem.
・The volunteers were strong enough to carry heavy boxes.
・He was generous enough to donate all his savings.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The teacher had the students ( ) donations for the flood victims.',
    choices: ['① collect', '② to collect', '③ collecting', '④ collected'],
    answer: '① collect',
    hint: 'have＋人＋動詞原形で「人に〜させる」という使役表現。',
    explanation: `【出題意図】
使役動詞have（have＋人＋動詞原形）の用法を問う問題。

【解説】
have＋人＋動詞原形＝「人に〜させる、〜してもらう」。教師が生徒に募金を集めさせた、という使役の意味。
・② to collect → haveの使役構文では原形を使うため不可
・③ collecting → 進行のニュアンスを強調する場合に使われることもあるが基本形ではない
・④ collected → 「集められた募金を持たせる」の意味になり不自然
・① collect → 使役動詞haveの正しい形（✓）

日本語訳：「先生は生徒たちに洪水の被災者のための募金を集めさせた。」

【文法ポイント】
使役動詞have/make/let＋人＋動詞原形。have＝依頼・指示、make＝強制、let＝許可のニュアンス。

【入試頻出】
・She had her son deliver the food to the shelter.
・The manager made the staff volunteer for the event.
・Our teacher let us choose which charity to support.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Many students decided to take ( ) in the beach cleanup last Sunday.',
    choices: ['① part', '② care', '③ place', '④ turns'],
    answer: '① part',
    hint: 'take part in〜で「〜に参加する」という熟語。',
    explanation:
      '【何を聞かれているか】「Many students decided to take ( ) in the beach cleanup last Sunday.」の空所に入る適切な語を選ぶ。\n【なぜpartになるのか】「〜に参加する」という意味は、take part in〜という決まったイディオムで表すから。\n【ポイント1】take part in〜は「〜に参加する」というjoinとほぼ同義の重要イディオム。\n【ポイント2】②care（take care of〜「〜の世話をする」）、③place（take place「行われる」でinを伴わない）、④turns（take turns「交代でする」）はどれも別のイディオム。\n【ポイント3】①part（take part in〜）が正解。\n【答え】① part\n【確かめ】take part in the beach cleanupで「ビーチの清掃活動に参加する」という意味になっているかを確認する。\n【よくあるまちがい】take part inとtake place（inを伴わない）を混同してしまう。\n【ここが絶対】「〜に参加する」はtake part in〜という決まった形で覚える。inを忘れないこと。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We need to be more ( ) of the problems that homeless people face every day.',
    choices: ['① aware', '② afraid', '③ ashamed', '④ ready'],
    answer: '① aware',
    hint: 'be aware of〜で「〜に気づいている、〜を意識している」という熟語。',
    explanation:
      '【何を聞かれているか】「We need to be more ( ) of the problems that homeless people face every day.」の空所に入る適切な語を選ぶ。\n【なぜawareになるのか】「〜を意識している、〜に気づいている」という意味は、be aware of〜という決まったイディオムで表すから。\n【ポイント1】be aware of〜は「〜を意識している、〜に気づいている」という重要イディオム。\n【ポイント2】②afraid（be afraid of〜「〜を恐れる」）、③ashamed（be ashamed of〜「〜を恥じる」）、④ready（be ready for〜「〜の準備ができている」、forを使う）はどれも別のイディオム。\n【ポイント3】①aware（be aware of〜）が正解。\n【答え】① aware\n【確かめ】be aware of the problemsで「問題を意識している」という意味になっているかを確認する。\n【よくあるまちがい】be aware ofとbe afraid ofを混同してしまう。\n【ここが絶対】be aware of〜＝〜に気づいている、意識している。似た形のbe afraid of／be proud ofと区別する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This charity provides food and clothes for families ( ) need.',
    choices: ['① in', '② on', '③ at', '④ for'],
    answer: '① in',
    hint: 'in need で「困っている、困窮している」という定型表現。',
    explanation:
      '【何を聞かれているか】「This charity provides food and clothes for families ( ) need.」の空所に入る適切な前置詞を選ぶ。\n【なぜinになるのか】「困っている、必要としている」という意味は、in needという決まった定型表現で表すから。\n【ポイント1】in needは「困っている、必要としている」という意味。families in needで「困窮している家族」を表す。\n【ポイント2】②on、③at、④forはどれもneedと組み合わせて使われない前置詞。\n【ポイント3】①in（in need）が正解。people in needで「困っている人々」という頻出表現になる。\n【答え】① in\n【確かめ】families in needが「困窮している家族」という意味になっているかを確認する。\n【よくあるまちがい】inを別の前置詞に置きかえてしまう。\n【ここが絶対】in need（of〜）＝（〜を）必要としている、困っている、という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  The shelter ( ) blankets during the cold winter, so volunteers collected more.',
    choices: ['① ran out of', '② ran into', '③ ran away', '④ ran over'],
    answer: '① ran out of',
    hint: 'run out of〜で「〜を使い果たす」という熟語。',
    explanation: `【出題意図】
句動詞run out of〜（〜を使い果たす、〜がなくなる）を問う問題。

【解説】
run out of〜＝「〜を使い果たす、〜が尽きる」。避難所の毛布が足りなくなったという文脈。
・② ran into → 「〜に偶然出会う、〜に衝突する」
・③ ran away → 「逃げる」
・④ ran over → 「（車で）ひく」
・① ran out of → 正解（✓）

日本語訳：「その避難所は寒い冬の間に毛布を使い果たしたので、ボランティアがもっと集めた。」

【文法ポイント】
run out of〜＝資源・物が尽きる。似た表現にbe out of〜（〜が切れている、状態を表す）がある。

【入試頻出】
・They ran out of water after the disaster.
・The town is running out of space for new housing.
・We are out of food for the shelter tonight.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Even a small act of kindness can make a ( ) in someone\'s life.',
    choices: ['① difference', '② decision', '③ direction', '④ distance'],
    answer: '① difference',
    hint: 'make a difference で「変化をもたらす、役に立つ」という熟語。',
    explanation:
      '【何を聞かれているか】「Even a small act of kindness can make a ( ) in someone\'s life.」の空所に入る適切な語を選ぶ。\n【なぜdifferenceになるのか】「変化をもたらす、大きな影響を与える」という意味は、make a differenceという決まったイディオムで表すから。\n【ポイント1】make a differenceは「変化をもたらす、大きな影響を与える」という重要イディオム。\n【ポイント2】②decision（make a decision「決断する」）、③direction、④distanceはどれも熟語として成立しない。\n【ポイント3】①difference（make a difference）が正解。\n【答え】① difference\n【確かめ】make a difference in someone\'s lifeで「誰かの人生に変化をもたらす」という意味になっているかを確認する。\n【よくあるまちがい】make a decisionと混同してdecisionを選んでしまう。\n【ここが絶対】make a difference（to/in〜）＝〜に良い影響を与える、という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  All of us are ( ) for keeping our town clean and safe.',
    choices: ['① responsible', '② possible', '③ available', '④ suitable'],
    answer: '① responsible',
    hint: 'be responsible for〜で「〜に対して責任がある」という熟語。',
    explanation:
      '【何を聞かれているか】「All of us are ( ) for keeping our town clean and safe.」の空所に入る適切な語を選ぶ。\n【なぜresponsibleになるのか】「〜に対して責任がある」という意味は、be responsible for〜という決まったイディオムで表すから。\n【ポイント1】be responsible for〜は「〜に対して責任がある」という重要イディオム。\n【ポイント2】②possible（「可能な」）、③available（「利用可能な」）、④suitable（「適した」）はどれもこの文脈に合わない。\n【ポイント3】①responsible（be responsible for〜）が正解。forのあとには名詞または動名詞が続く。\n【答え】① responsible\n【確かめ】be responsible for keeping our town clean and safeで「町を清潔で安全に保つ責任がある」という意味になっているかを確認する。\n【よくあるまちがい】responsibleとpossibleのスペルや意味を混同してしまう。\n【ここが絶対】be responsible for〜＝〜の責任を負う、という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。  This small town ( ) volunteers to keep the library open.',
    choices: ['① depends on', '② depends for', '③ relies at', '④ counts about'],
    answer: '① depends on',
    hint: 'depend on〜で「〜に頼る、〜次第である」という熟語。',
    explanation: `【出題意図】
熟語depend on〜（〜に頼る）の前置詞の正確な使用を問う問題。

【解説】
depend on〜＝「〜に頼る、〜に依存する」。rely on〜もほぼ同義で使われる。
・② depends for → 存在しない形
・③ relies at → atではなくonが正しい
・④ counts about → count onが正しい形
・① depends on → 正解（✓）

日本語訳：「この小さな町は図書館を開け続けるためにボランティアに頼っている。」

【文法ポイント】
depend on〜＝rely on〜＝count on〜（すべて「〜に頼る」）。前置詞はいずれもon。

【入試頻出】
・Many small communities depend on volunteers.
・You can always depend on your neighbors in this town.
・The project relies on donations from local people.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  It is time for us to take ( ) to solve the problem of poverty in our city.',
    choices: ['① action', '② act', '③ activity', '④ actor'],
    answer: '① action',
    hint: 'take action で「行動を起こす」という熟語。',
    explanation: `【出題意図】
熟語take action（行動を起こす）の正しい語形を問う問題。

【解説】
take action＝「行動を起こす」。actは動詞、activityは「活動」、actorは「俳優」で、いずれも熟語として不適切。
・① action → 名詞として正しい形（✓）

日本語訳：「私たちの街の貧困問題を解決するために、私たちが行動を起こす時だ。」

【文法ポイント】
take action＝行動を起こす。似た形にtake steps（措置を講じる）、take measures（対策を取る）がある。

【入試頻出】
・The government must take action to help homeless people.
・We decided to take action instead of just talking.
・It's time to take steps to reduce poverty.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The man ( ) started this volunteer group is my uncle.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」で、関係詞節内で主語の役割をしている。',
    explanation:
      '【何を聞かれているか】「The man ( ) started this volunteer group is my uncle.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞The man（男性）は人で、関係代名詞節の中でstarted（始めた）の主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がThe man（人）で、関係代名詞節内でstartedの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】関係代名詞の主格：人ならwho、物ならwhich、どちらもthatで代用可。\n【答え】① who\n【確かめ】whoのあとに動詞（started）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The old clothes ( ) we collected were sent to families in need.',
    choices: ['① who', '② which', '③ whose', '④ where'],
    answer: '② which',
    hint: '先行詞は「物」で、関係詞節内で目的格として使われている。',
    explanation: `【出題意図】
関係代名詞which（先行詞が物・目的格）の用法を問う問題。

【解説】
先行詞the old clothes（物）。関係詞節内でwe collected（私たちが集めた）の目的語になっている。
・① who → 先行詞が人
・③ whose → 所有格
・④ where → 関係副詞（場所）
・② which → 正解（✓）。thatに置き換え可能、目的格なので省略も可。

日本語訳：「私たちが集めた古着は、困っている家族に送られた。」

【文法ポイント】
目的格の関係代名詞（which/that）は省略可能。The clothes (which/that) we collected〜。

【入試頻出】
・The food (that) we donated helped many families.
・This is the bag which she gave to the shelter.
・The books (which) students brought were given to the library.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We supported a family ( ) house was destroyed by the flood.',
    choices: ['① who', '② which', '③ whose', '④ whom'],
    answer: '③ whose',
    hint: '「その家族の家が」という所有の関係を表す関係代名詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「We supported a family ( ) house was destroyed by the flood.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoseになるのか】関係代名詞節内のhouse（家）は先行詞a family（家族）の所有物（＝their house）という関係にあり、この所有の関係を表すには所有格の関係代名詞whoseを使う必要があるから。\n【ポイント1】先行詞はa family（家族）。houseは「その家族の（＝family\'sの）家」という所有の関係にある。\n【ポイント2】①who（主格）、②which（主格・目的格）、④whom（目的格）はどれも所有の関係を表せない。\n【ポイント3】③whose（所有格）が正解。whose節は先行詞＋whose＋名詞＋動詞〜の形で「〜の（名詞）が…」を表す。先行詞は人でも物でも使える。\n【答え】③ whose\n【確かめ】whoseのあとにhouse（名詞）、was（動詞）と続いているかを確認する。\n【よくあるまちがい】所有の関係なのにwhoやwhichを使ってしまう。\n【ここが絶対】whoseは先行詞（人・物）の所有格を表す関係代名詞。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_24',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This is the shelter ( ) many homeless people can stay for free.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所」。関係副詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「This is the shelter ( ) many homeless people can stay for free.」の空所に入る適切な語を選ぶ。\n【なぜwhereになるのか】先行詞the shelter（避難所）は場所を表し、関係詞節の中に前置詞（in the shelter）が隠れているため、「前置詞＋which」の働きをする関係副詞whereを使う必要があるから。\n【ポイント1】先行詞the shelterは場所。節の元の形はmany homeless people can stay in the shelter for freeで、in the shelterがwhereに置きかわっている。\n【ポイント2】①which（前置詞が必要、the shelter in which〜）、②who（人に使う）、④when（時に使う）はどれも文脈に合わない。\n【ポイント3】③where（場所を先行詞にとる関係副詞）が正解。\n【答え】③ where\n【確かめ】whereの節の中に前置詞が抜けている（in the shelterのinが不要になっている）ことを確認する。\n【よくあるまちがい】先行詞が場所なのに、前置詞を補わずにwhichを使ってしまう。\n【ここが絶対】関係副詞where＝前置詞＋which。先行詞が場所のときに使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_25',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Do you know ( ) caused so many people to lose their homes?',
    choices: ['① what', '② which', '③ how', '④ whose'],
    answer: '① what',
    hint: '「何が原因だったのか」を尋ねる間接疑問文。疑問詞が主語の役割も果たす。',
    explanation:
      '【何を聞かれているか】「Do you know ( ) caused so many people to lose their homes?」の空所に入る適切な語を選ぶ。\n【なぜwhatになるのか】「何が〜を引き起こしたか」を尋ねるとき、疑問詞whatがcausedの主語を兼ねる特殊な間接疑問文になるため、疑問詞＋動詞という語順がそのまま使えるから。\n【ポイント1】この文では疑問詞whatがcausedの主語を兼ねている。疑問詞が主語の場合、語順の入れ替えは不要。\n【ポイント2】②which（「どちら」を尋ねる）、③how（「どのように」を尋ねる）、④whose（「誰の」を尋ねる）はどれも文脈に合わない。\n【ポイント3】①what（Do you know what caused〜？＝「何が〜を引き起こしたか知っていますか」）が正解。\n【答え】① what\n【確かめ】whatのあとに動詞causedが直接続いている（主語の入れ替えがない）ことを確認する。\n【よくあるまちがい】疑問詞が主語の場合にも、通常の間接疑問文と同じように主語と動詞を探して並べ替えようとしてしまう。\n【ここが絶対】間接疑問文で疑問詞が主語の場合は、疑問詞＋動詞〜とそのままの語順になる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) the next volunteer meeting will be held?',
    choices: ['① what', '② when', '③ whom', '④ which'],
    answer: '② when',
    hint: '「次のボランティア会議がいつ開かれるか」を尋ねる間接疑問文。',
    explanation:
      '【何を聞かれているか】「Could you tell me ( ) the next volunteer meeting will be held?」の空所に入る適切な疑問詞を選ぶ。\n【なぜwhenになるのか】「次の会議がいつ開かれるか」という時を尋ねる文脈なので、時を尋ねる疑問詞whenを使う必要があるから。\n【ポイント1】①what（何）、③whom（誰を）、④which（どちら）はどれもこの文脈（時を尋ねる）に合わない。\n【ポイント2】②when（いつ）が正解。\n【ポイント3】節内はthe next volunteer meeting will be held（平叙文語順）であることにも注意する。\n【答え】② when\n【確かめ】whenのあとが〈主語＋動詞〉の平叙文語順になっているかを確認する。\n【よくあるまちがい】時を尋ねる文脈なのにwhatを選んでしまう。\n【ここが絶対】間接疑問文＝疑問詞＋主語＋動詞（平叙文語順）。文脈に合った疑問詞を選ぶ。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ has / for / she / been / working / three years / this NPO / at ）\n「彼女はこのNPOで3年間働き続けている。」',
    answer: 'She has been working at this NPO for three years.',
    hint: '現在完了進行形（have/has been＋Ving）の語順。forは期間を表す。',
    explanation:
      '【何を聞かれているか】has / for / she / been / working / three years / this NPO / at を並べ替えて「彼女はこのNPOで3年間働き続けている。」という英文を作る。\n【なぜhas been workingという語順になるのか】「今も続けて働いている」という継続を表すには現在完了進行形（has been＋動詞のing形）を使い、そのあとに場所、最後に期間を表すforの句を置くという英語の語順があるから。\n【ポイント1】現在完了進行形＝has been＋Ving。\n【ポイント2】主語She＋has been working＋場所（at this NPO）＋期間（for three years）という順で並べる。\n【ポイント3】She has been working at this NPO for three years.\n【答え】She has been working at this NPO for three years.\n【確かめ】has been workingの語順（has→been→-ing）が正しく並んでいるかを確認する。\n【よくあるまちがい】forの期間の句を場所の句より先に置いてしまう。\n【ここが絶対】現在完了進行形は必ずhave/has→been→動詞のingの順番で並べ、場所・期間などの修飾語はそのあとに続ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ so / were / that / the donations / large / they / helped / many families ）\n「その寄付はとても多かったので、多くの家族を助けることができた。」',
    answer: 'The donations were so large that they helped many families.',
    hint: 'so＋形容詞＋that〜「とても〜なので…」の構文。',
    explanation: `【出題意図】
so〜that…構文（結果を表す）の語順を問う整序問題。

【解説】
so＋形容詞（large）＋that＋主語＋動詞〜＝「とても〜なので…」。

正しい語順：The donations were so large that they helped many families.

日本語訳：「その寄付はとても多かったので、多くの家族を助けることができた。」

【文法ポイント】
so＋形容詞/副詞＋that＋主語＋動詞＝結果を表す構文。such＋a/an＋形容詞＋名詞＋that〜と混同しないこと。

【入試頻出】
・The storm was so strong that many houses were damaged.
・She worked so hard that everyone respected her.
・The need was so great that the town asked for more volunteers.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ who / lives / next door / the woman / often / needs / our help ）\n「隣に住むその女性は、しばしば私たちの助けを必要としている。」',
    answer: 'The woman who lives next door often needs our help.',
    hint: '関係代名詞whoの節（who lives next door）が先行詞the womanを修飾する。',
    explanation:
      '【何を聞かれているか】who / lives / next door / the woman / often / needs / our help を並べ替えて「隣に住むその女性は、しばしば私たちの助けを必要としている。」という英文を作る。\n【なぜwho livesという語順になるのか】関係代名詞whoを使って、先行詞the womanのうしろにwho lives next door（隣に住んでいる）という節を置くことで、the womanを説明できるから。\n【ポイント1】文の骨格はThe woman needs our help.（その女性は私たちの助けを必要としている）。\n【ポイント2】修飾部はwho lives next door（隣に住んでいる）。関係詞節は先行詞the womanの直後に置く。\n【ポイント3】often（しばしば）のような頻度の副詞は一般動詞needsの前に置く。The woman who lives next door often needs our help.\n【答え】The woman who lives next door often needs our help.\n【確かめ】oftenが一般動詞needsの直前に置かれているかを確認する。\n【よくあるまちがい】oftenを文末やneedsのあとに置いてしまう。\n【ここが絶対】関係代名詞節は先行詞のすぐ後ろに置く。頻度の副詞は一般動詞の前に置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ was / by / this festival / local volunteers / organized / last month ）\n「このお祭りは先月、地元のボランティアによって開催された。」',
    answer: 'This festival was organized by local volunteers last month.',
    hint: '受動態（be動詞＋過去分詞＋by〜）の語順。',
    explanation: `【出題意図】
受動態の基本語順（主語＋be＋過去分詞＋by＋動作主）を問う整序問題。

【解説】
This festival（主語・物）は「開催する」側ではなく「開催される」側なので受動態を使う。was organized by local volunteersという語順。

正しい語順：This festival was organized by local volunteers last month.

日本語訳：「このお祭りは先月、地元のボランティアによって開催された。」

【文法ポイント】
受動態＝be動詞＋過去分詞。動作主を示すときはby〜を最後に置く。last monthのような時を表す語句は文末が基本。

【入試頻出】
・This shelter was built by volunteers ten years ago.
・The event was planned by students last year.
・Many old clothes were collected by the community last week.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / to / was / the box / light / for / carry / children / it ）\n「その箱は子どもたちが運べるくらい軽かった。」',
    answer: 'The box was light enough for children to carry it.',
    hint: '形容詞＋enough＋for＋人＋to＋動詞 の語順。',
    explanation:
      '【何を聞かれているか】enough / to / was / the box / light / for / carry / children / it を並べ替えて「その箱は子どもたちが運べるくらい軽かった。」という英文を作る。\n【なぜfor＋人が入るのか】「〜が…するのに十分〜だ」と、動作をする人を明示するには、〈形容詞＋enough＋for＋人＋to＋動詞原形〉という構文を使い、for＋人が不定詞の意味上の主語を示すから。\n【ポイント1】構文は主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形＋目的語。\n【ポイント2】The box was light enough for children to carry it.（その箱は子どもたちが運べるくらい軽かった）。\n【ポイント3】反対の意味を表す〈too＋形容詞＋for＋人＋to＋動詞〉（〜すぎて…できない）とセットで覚える。\n【答え】The box was light enough for children to carry it.\n【確かめ】for childrenがenoughとtoの間に正しく置かれているかを確認する。\n【よくあるまちがい】carryのあとのit（the boxを指す代名詞）を落としてしまう。\n【ここが絶対】「形容詞＋enough＋for＋人＋to＋動詞」の語順を1つのまとまりとして覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ know / why / you / do / many / homeless / people / are / there / is ）\n「なぜホームレスの人が多いのか知っていますか？」',
    answer: 'Do you know why there are many homeless people?',
    hint: '間接疑問文。there are〜「〜がいる」という構文と組み合わせる。不要な語が1つ混じっている。',
    explanation: `【出題意図】
間接疑問文とthere is/are構文を組み合わせた整序問題。不要語の識別も含む。

【解説】
全体は疑問文Do you know〜?。間接疑問部分はwhy there are many homeless people（なぜホームレスの人々が多いのか）という平叙文語順。

不要語：is（there areがすでにあるのでisは不要）

正しい語順：Do you know why there are many homeless people?

日本語訳：「なぜホームレスの人が多いのか知っていますか？」

【文法ポイント】
間接疑問文＝疑問詞＋主語＋動詞。there is/areを間接疑問に組み込む場合もthere are（many homeless people）のまま平叙文語順にする。

【入試頻出】
・Do you know why there are so many empty houses here?
・I wonder why there is no shelter in this area.
・Can you tell me why there are fewer volunteers this year?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ who / the number / this year / of volunteers / joined / than / last year\'s / is / larger ）\n「今年参加したボランティアの数は、去年の数より多い。」',
    answer: 'The number of volunteers who joined this year is larger than last year\'s.',
    hint: '関係代名詞who節（who joined this year）が主語the number of volunteersを修飾し、比較級is largerが続く。',
    explanation:
      '【何を聞かれているか】who / the number / this year / of volunteers / joined / than / last year\'s / is / larger を並べ替えて「今年参加したボランティアの数は、去年の数より多い。」という英文を作る。\n【なぜwho joinedという語順になるのか】関係代名詞whoを使って、先行詞volunteersのうしろにwho joined this year（今年参加した）という節を置き、そのあとに比較級is larger than〜を続ける必要があるから。\n【ポイント1】文の骨格はThe number of volunteers is larger than last year\'s.（ボランティアの数は去年より多い）。\n【ポイント2】修飾部はwho joined this year（今年参加した）で、先行詞volunteersを修飾する。\n【ポイント3】last year\'sはlast year\'s number（去年の数）の省略形。the number of〜（〜の数）は単数扱いでisを使う。\n【答え】The number of volunteers who joined this year is larger than last year\'s.\n【確かめ】the number of〜が単数扱いでis largerとなっているかを確認する。\n【よくあるまちがい】the number of〜（数）とa number of〜（たくさんの〜、複数扱い）を混同してしまう。\n【ここが絶対】the number of〜は単数扱い（is/wasを使う）。a number of〜（たくさんの〜）は複数扱いと区別する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・短い長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: We\'re looking for volunteers to help clean the river this Saturday. Would you like to join us? B: ( )',
    choices: ['① Sure, I\'d love to.', '② No, I don\'t.', '③ I have already cleaned it.', '④ Yes, I did.'],
    answer: '① Sure, I\'d love to.',
    hint: 'Would you like to〜?（勧誘・誘い）への自然な受け方を選ぶ。',
    explanation:
      '【何を聞かれているか】「We\'re looking for volunteers to help clean the river this Saturday. Would you like to join us?」への適切な返答を選ぶ。\n【なぜ「Sure, I\'d love to.」が正しいのか】Would you like to join us?は「一緒にやりませんか」という丁寧な誘いの表現で、受けるときはSure, I\'d love to.のような自然な返答をするから。\n【ポイント1】②No, I don\'t.は誘いの断りとしては文法的に不自然（No, thank you.などを使う）。\n【ポイント2】③I have already cleaned it.は時制が合わない（まだ行われていない活動）。④Yes, I did.は質問と噛み合わない。\n【ポイント3】①Sure, I\'d love to.が最も自然な受け答え。\n【答え】① Sure, I\'d love to.\n【確かめ】Would you like to〜?への肯定応答として自然な形になっているかを確認する。\n【よくあるまちがい】まだ行われていない活動なのに、過去形の返答（already cleaned）を選んでしまう。\n【ここが絶対】Would you like to〜?への返答：受けるときはSure, I\'d love to./I\'d be happy to.、断るときはI\'m sorry, I can\'t this time.',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: Excuse me, could you tell me how to get to the animal shelter? B: ( ) Then turn left, and you\'ll see it on your right.',
    choices: ['① Go straight for two blocks.', '② I have never been there.', '③ It\'s a very kind shelter.', '④ You should ask someone else.'],
    answer: '① Go straight for two blocks.',
    hint: '道案内の文脈。後に続く「それから左に曲がって」に自然につながる文を選ぶ。',
    explanation: `【出題意図】
道案内表現の文脈把握を問う問題。文と文のつながりを考える力が試される。

【解説】
後半に"Then turn left（それから左に曲がって）"とあるので、その前には最初の道案内（直進の指示）が来るのが自然。
・② 行ったことがないという返答は道案内と矛盾
・③ 施設の評判の話で文脈に合わない
・④ 「他の人に聞いて」では道案内にならない
・① Go straight for two blocks. → 正解（✓）

日本語訳：
A：すみません、動物保護施設への行き方を教えていただけますか？
B：2区画まっすぐ進んでください。それから左に曲がると、右手に見えます。

【文法ポイント】
道案内表現：Go straight（まっすぐ進む）、turn left/right（左/右に曲がる）、on your right/left（右手/左手に）。

【入試頻出】
・Go straight and turn right at the second corner.
・Could you tell me the way to the community center?
・It's just around the corner.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: I want to donate some books, but I don\'t have a car to carry them. B: ( ) I can drive you to the collection center.',
    choices: ['① Don\'t worry about that.', '② That\'s too bad for you.', '③ I\'m afraid I can\'t help.', '④ You should buy a car.'],
    answer: '① Don\'t worry about that.',
    hint: '後に続く「車で送ってあげるよ」という申し出につながる返答を選ぶ。',
    explanation: `【出題意図】
問題の解決策を提示する前置きとして自然な表現を選ぶ問題。

【解説】
Bは後半で「車で送ってあげる」と解決策を提示している。その前置きとして「心配しないで」が自然につながる。
・② 同情するだけで解決につながらない
・③ 「手伝えない」は後半の申し出と矛盾する
・④ 話の流れに合わない
・① Don't worry about that. → 正解（✓）

日本語訳：
A：本を寄付したいのですが、運ぶ車がありません。
B：それは心配しないで。回収センターまで車で送ってあげるよ。

【文法ポイント】
問題解決の申し出の前置き表現：Don't worry./No problem./Leave it to me.

【入試頻出】
・Don't worry about the cost. We'll cover it.
・No problem, I can help you carry those boxes.
・Leave it to me. I'll take care of it.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。  A: You look tired. Can I carry that box of donations for you? B: ( )',
    choices: ['① That\'s very kind of you. Thank you.', '② No, I never carry boxes.', '③ I don\'t like donations.', '④ Yes, you must carry it.'],
    answer: '① That\'s very kind of you. Thank you.',
    hint: 'Can I〜?（申し出）への自然な受け方を選ぶ。',
    explanation:
      '【何を聞かれているか】「You look tired. Can I carry that box of donations for you?」への適切な返答を選ぶ。\n【なぜ「That\'s very kind of you. Thank you.」が正しいのか】Can I carry that box for you?は「持ってあげましょうか」という申し出の表現で、感謝を込めて受け入れる返答が自然だから。\n【ポイント1】②「箱は絶対運ばない」、③「寄付が好きではない」はどちらも文脈と無関係。\n【ポイント2】④Yes, you must carry it.は命令のような不自然な表現。\n【ポイント3】①That\'s very kind of you. Thank you.が正解。申し出への応答として自然。\n【答え】① That\'s very kind of you. Thank you.\n【確かめ】Can I〜?（申し出）に対する感謝の返答として自然な形になっているかを確認する。\n【よくあるまちがい】申し出に対して命令文のような返答をしてしまう。\n【ここが絶対】申し出への応答：That\'s very kind of you./Thank you, I\'d appreciate that.（受ける）、That\'s okay, I can manage, thank you.（断る）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  Our town has ( ) many changes since the volunteer group started working here.',
    choices: ['① see', '② saw', '③ seen', '④ seeing'],
    answer: '③ seen',
    hint: '現在完了形（have/has＋過去分詞）。seeの過去分詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「Our town has ( ) many changes since the volunteer group started working here.」の空所に入る適切な形を選ぶ。\n【なぜseenになるのか】hasのあとには過去分詞が続く現在完了形にする必要があり、seeの過去分詞はseenだから。sinceは現在完了形とセットで使われる典型的な語。\n【ポイント1】has＋過去分詞＝現在完了形。①see（原形）、②saw（過去形）はhasのあとに使えない。\n【ポイント2】④seeing（現在分詞）もhasの後には使えない。③seen（過去分詞）が正解。\n【ポイント3】seeの活用：see（原形）→saw（過去形）→seen（過去分詞）。\n【答え】③ seen\n【確かめ】hasのあとに過去分詞seenが続いているかを確認する。\n【よくあるまちがい】has sawのように、hasのあとに過去形をそのまま続けてしまう。\n【ここが絶対】現在完了形（経験・継続）はhave/has＋過去分詞。sinceは「〜以来」という起点を表す。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  The volunteer meeting will be held ( ) the community center this Saturday.',
    choices: ['① in', '② at', '③ on', '④ to'],
    answer: '② at',
    hint: '特定の建物・地点を表す前置詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「The volunteer meeting will be held ( ) the community center this Saturday.」の空所に入る適切な前置詞を選ぶ。\n【なぜatになるのか】the community center（特定の建物・地点）を表すときは、前置詞atを使うという決まりがあるから。\n【ポイント1】①in（広い空間の内側に使う）、③on（面・特定の日に使う）、④to（方向を表す）はどれもこの文脈に合わない。\n【ポイント2】②at（特定の地点に使う）が正解。\n【ポイント3】場所の前置詞：at＝特定の地点（at the station）、in＝広い空間の中（in the city）、on＝面に接する場所（on the street）。\n【答え】② at\n【確かめ】the community centerが「特定の地点」として捉えられていることを確認する。\n【よくあるまちがい】the community centerを広い空間だと考えてinを使ってしまう。\n【ここが絶対】at＝特定の地点、in＝広い空間の中、on＝面に接する場所、と使い分ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  Every year, our school ( ) old textbooks to students who cannot afford new ones.',
    choices: ['① borrows', '② donates', '③ sells', '④ rents'],
    answer: '② donates',
    hint: '「〜を寄付する」という意味の動詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「Every year, our school ( ) old textbooks to students who cannot afford new ones.」の空所に入る適切な動詞を選ぶ。\n【なぜdonatesになるのか】「新しい教科書を買う余裕のない生徒に古い教科書を渡す」という文脈から、「寄付する」という意味のdonateが最も適切だから。\n【ポイント1】①borrows（借りる）、③sells（売る、affordと矛盾する）、④rents（賃貸する）はどれもこの文脈に合わない。\n【ポイント2】②donates（寄付する）が正解。\n【ポイント3】donate〜to…＝…に〜を寄付する。名詞形はdonation（寄付）。\n【答え】② donates\n【確かめ】「教科書を買う余裕のない生徒」という文脈にdonate（寄付する）が合っているかを確認する。\n【よくあるまちがい】sellsを選んでしまい、「買う余裕がない」という文脈と矛盾してしまう。\n【ここが絶対】donate〜to…＝…に〜を寄付する、という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  Many elderly people live alone in this area. ( ), a group of students visits them once a week to talk and help with small tasks.',
    choices: ['① As a result', '② However', '③ For example', '④ Instead'],
    answer: '① As a result',
    hint: '前文の内容（高齢者が一人暮らしをしている）を受けて、その結果として行われている取り組みを表すつなぎ言葉を選ぶ。',
    explanation: `【出題意図】
文と文をつなぐ副詞（as a result / however / for example / instead）の使い分けを問う問題。

【解説】
前文「多くの高齢者がこの地域で一人暮らしをしている」という状況を受けて、後文は「学生たちが週に一度訪問する」という対応策・結果を述べている。
・② However → 逆接（前後で対立する内容が必要）
・③ For example → 具体例を示す語（前文に対する例ではない）
・④ Instead → 「代わりに」（合わない）
・① As a result → 結果・つながりを示す（✓）

日本語訳：「この地域では多くの高齢者が一人暮らしをしている。その結果として、学生のグループが週に一度、彼らと話したり簡単な作業を手伝ったりするために訪問している。」

【文法ポイント】
文をつなぐ副詞（接続副詞）：as a result（その結果）、however（しかし）、for example（例えば）、in addition（さらに）、therefore（それゆえ）。文脈から論理関係を判断する。

【入試頻出】
・The town has few young workers. As a result, volunteers play an important role.
・Some people cannot cook for themselves. As a result, local groups deliver meals to them.
・This area lacks public transportation. As a result, elderly residents often feel isolated.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までにボランティア活動に参加したことが一度もありません。」',
    answer: 'I have never taken part in volunteer activities. / I have never participated in any volunteer activities.',
    hint: '「〜したことが一度もない」は現在完了の経験用法（have never＋過去分詞）。「参加する」はtake part in / participate in。',
    explanation:
      '【何を聞かれているか】「私は今までにボランティア活動に参加したことが一度もありません。」を英語に訳す。\n【なぜhave never taken part inになるのか】「今までに〜したことがない」は現在完了形の経験用法の否定have never＋過去分詞で表し、「参加する」はtake part in（またはparticipate in）という決まった表現を使う必要があるから。\n【ポイント1】「今までに〜したことがない」＝have never＋過去分詞。\n【ポイント2】「ボランティア活動に参加する」＝take part in volunteer activities／participate in volunteer activities。\n【ポイント3】I have never taken part in volunteer activities.（takeの過去分詞はtaken）。\n【答え】I have never taken part in volunteer activities. / I have never participated in any volunteer activities.\n【確かめ】haveのあとにtaken（過去分詞）が続いているかを確認する。\n【よくあるまちがい】takeの過去分詞をtakedのように誤って規則動詞化してしまう。\n【ここが絶対】have never＋過去分詞＝一度も〜したことがない。take part in＝participate in（どちらも「参加する」）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私が去年会ったその女性は、今この施設で働いています。」',
    answer: 'The woman I met last year is working at this facility now. / The woman who(m) I met last year is working at this facility now.',
    hint: '「私が去年会った」は関係代名詞（目的格）で修飾。目的格の関係代名詞は省略可能。',
    explanation:
      '【何を聞かれているか】「私が去年会ったその女性は、今この施設で働いています。」を英語に訳す。\n【なぜ関係代名詞と現在進行形を組み合わせるのか】「私が去年会った」という説明はthe womanのうしろに関係代名詞（目的格）でmet節をつなげて表し、「今〜している」は現在進行形is workingで表す必要があるから。\n【ポイント1】「その女性」the womanを「私が去年会った」（that/whom I met last year）という節が修飾する。目的格の関係代名詞は省略可能。\n【ポイント2】「今〜している」は現在進行形is/am/are＋Vingで表す。\n【ポイント3】The woman (whom/that) I met last year is working at this facility now.\n【答え】The woman I met last year is working at this facility now. / The woman who(m) I met last year is working at this facility now.\n【確かめ】the womanのあとにI met（主語＋動詞）が続いており、meetの目的語がthe womanであることを確認する。\n【よくあるまちがい】is workingのかわりにworksを使ってしまい、「今まさに」という意味が弱くなる。\n【ここが絶対】目的格の関係代名詞は省略できる。現在進行形は「今まさに〜している」動作を表す。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「その老人ホームは多くのボランティアによって支えられています。」',
    answer: 'That nursing home is supported by many volunteers.',
    hint: '「支えられている」は受動態（is supported by〜）。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞＋by〜）を使った英作文。

【解説】
「老人ホームが支えられている」は受動態で表す。「支える」＝support。「〜によって」＝by〜。

完成した文：That nursing home is supported by many volunteers.

日本語訳確認：「その老人ホームは多くのボランティアによって支えられています。」

【文法ポイント】
受動態＝be動詞＋過去分詞。動作主を示すときはby〜を使う。現在の継続的な状態を表すのでbe動詞は現在形。

【入試頻出】
・This shelter is run by a small group of volunteers.
・The festival is supported by local businesses.
・This project is funded by donations from citizens.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「このプログラムはお年寄りだけでなく、子どもたちも支援しています。」',
    answer: 'This program supports not only elderly people but also children.',
    hint: '「〜だけでなく…も」はnot only A but also Bの構文。',
    explanation:
      '【何を聞かれているか】「このプログラムはお年寄りだけでなく、子どもたちも支援しています。」を英語に訳す。\n【なぜnot only A but also Bを使うのか】「〜だけでなく…も」という意味は、相関接続詞not only A but also Bという決まった形で表し、AとBには同じ形（この文では名詞句）を並べる必要があるから。\n【ポイント1】「お年寄りだけでなく子どもたちも」＝not only elderly people but also children。\n【ポイント2】This program supports not only elderly people but also children.\n【ポイント3】AとBは文法的に同じ形（名詞句）で並べる。動詞の後にA、Bがくる場合は両方とも目的語として同じ形にする。\n【答え】This program supports not only elderly people but also children.\n【確かめ】not onlyのあとと、but alsoのあとがどちらも名詞句になっているかを確認する。\n【よくあるまちがい】not onlyとbut alsoのあとの形をそろえず、別の品詞を混ぜてしまう。\n【ここが絶対】not only A but also BのAとBは文法的に同じ形にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私たち全員がゴミを減らせば、この街はもっときれいになるでしょう。」',
    answer: 'If all of us reduce our garbage, this city will become cleaner. / If we all reduce the amount of garbage, this city will be cleaner.',
    hint: '条件を表すif節では、未来のことでも現在形を使う。「もっときれいになる」は比較級。',
    explanation:
      '【何を聞かれているか】「もし私たち全員がゴミを減らせば、この街はもっときれいになるでしょう。」を英語に訳す。\n【なぜif節が現在形になるのか】実現可能な未来の条件を表す条件文では、if節の中は未来のことでも現在形を使い、主節でwillを使って未来を表すという決まりがあるから。\n【ポイント1】if節の中では未来のことも現在形で表す（willを使わない）。「ゴミを減らす」＝reduce garbage/waste。\n【ポイント2】「もっときれいになる」＝become cleaner（cleanの比較級cleaner）。\n【ポイント3】If all of us reduce our garbage, this city will become cleaner.\n【答え】If all of us reduce our garbage, this city will become cleaner. / If we all reduce the amount of garbage, this city will be cleaner.\n【確かめ】if節の動詞がreduce（現在形）になっており、willがreduceではなくbecomeの前についていることを確認する。\n【よくあるまちがい】if節の中にwillを入れてIf all of us will reduce our garbageとしてしまう。\n【ここが絶対】実現可能な条件を表すif節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo10_47',
    subject: 'eigo',
    passage: `In many cities, a large amount of food is thrown away every day, even though many people do not have enough to eat. Food banks are organizations that collect extra food from stores, restaurants, and farms and give it to families in need. Volunteers spend hours sorting and packing food so that it can be delivered quickly. Some schools have also started their own small food banks for students whose families are struggling. By reducing food waste and sharing what we have, communities can support each other and make sure that fewer people go hungry.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① 食品は店やレストランからのみ集められる。', '② フードバンクはボランティアが食品を分類し梱包することで支えられている。', '③ 学校は生徒の家庭にフードバンクの利用を禁止している。', '④ 食品ロスと貧困の問題には関係がない。'],
    answer: '② フードバンクはボランティアが食品を分類し梱包することで支えられている。',
    hint: '本文中の "Volunteers spend hours sorting and packing food" という一文に注目する。',
    explanation: `【出題意図】
長文読解の内容一致問題。本文の細部情報と選択肢を正確に照合する力を問う。

【解説】
① 「店やレストランからのみ」→本文には"from stores, restaurants, and farms"とあり、farms（農場）も含まれるため「のみ」は誤り（×）
② 「ボランティアが食品を分類し梱包する」→本文"Volunteers spend hours sorting and packing food"と一致（✓）
③ 「フードバンクの利用を禁止」→本文には逆に"some schools have also started their own small food banks"とあり、禁止ではなく実施している（×）
④ 「関係がない」→本文全体が食品ロスと貧困（飢え）の関係を述べているため矛盾（×）

【文法ポイント】
内容一致問題では「のみ」「すべて」「禁止」など断定的な語に注意し、本文の情報と細かく照合する。

【入試頻出】
・本文にない情報を含む選択肢は誤り。
・「〜だけ」「必ず」という限定的な表現は本文と食い違うことが多い。
・具体的な動詞（sorting, packing など）が使われている箇所は設問の根拠になりやすい。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_48',
    subject: 'eigo',
    passage: `After the earthquake, many houses in the small town were badly damaged. Volunteers from all over the country came to help clear debris, repair roofs, and rebuild homes. Local residents were grateful for this support, but they also wanted to take an active role themselves. They organized their own teams to plan the rebuilding process and to decide which buildings should be fixed first. This combination of outside help and local leadership allowed the town to recover faster than expected. Experts say that this is a good model for other communities facing similar disasters.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文中の下線部 "this" が指す内容として最も適切なものを選べ。',
    choices: ['① 地震で家が壊れたこと', '② 外部からの支援と地元住民のリーダーシップの組み合わせ', '③ 専門家が町を訪れたこと', '④ ボランティアが屋根を修理したこと'],
    answer: '② 外部からの支援と地元住民のリーダーシップの組み合わせ',
    hint: '"this" の直前の文 "This combination of outside help and local leadership" を確認する。',
    explanation:
      '【何を聞かれているか】本文中の下線部"this"が指す内容として最も適切なものを選ぶ。\n【なぜ②が正解なのか】下線部を含む文の直前に"This combination of outside help and local leadership allowed the town to recover faster"とあり、"this"はこの「外部からの支援と地元のリーダーシップの組み合わせ」を指しているから。\n【ポイント1】指示語の直前の文を確認する：外部からの支援と地元のリーダーシップの組み合わせが町の早い復興を可能にしたと書かれている。\n【ポイント2】①「地震で家が壊れたこと」はthisの直前の話題ではない。③「専門家が町を訪れたこと」は本文に記述がない。④「屋根を修理したこと」は支援内容の一部にすぎず、thisが指す全体ではない。\n【ポイント3】"this"が指すのは②「外部からの支援と地元住民のリーダーシップの組み合わせ」。\n【答え】② 外部からの支援と地元住民のリーダーシップの組み合わせ\n【確かめ】"this"を②の内容に置きかえて文を読み直し、意味が通ることを確認する。\n【よくあるまちがい】thisの直前の文の一部（屋根の修理など）だけを見て、combination（組み合わせ）という全体をとらえ損ねてしまう。\n【ここが絶対】「combination of A and B」のような複合的な内容を一語のthisでまとめることがあるので、直前の文全体を確認する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_49',
    subject: 'eigo',
    passage: `Many high schools now encourage students to visit nursing homes as part of their volunteer activities. At first, some students feel nervous about talking with elderly residents they do not know. However, after a few visits, most students say they enjoy listening to the residents' stories about the past. The elderly residents, in turn, often say that these visits make their days brighter and give them a chance to share their experiences with younger generations. Teachers believe that these exchanges help students develop empathy while giving elderly people a sense of connection to the community.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① 高校生が老人ホームを訪問することで両者に生まれる良い影響', '② 老人ホームの職員不足についての報告', '③ 高齢者の孤独に関する統計データ', '④ 学校の授業でのボランティア活動の評価方法'],
    answer: '① 高校生が老人ホームを訪問することで両者に生まれる良い影響',
    hint: '本文全体が学生と高齢者の双方にとっての効果（共感の育成、地域とのつながり）を述べていることに注目する。',
    explanation: `【出題意図】
長文全体の主題（main idea）を把握する問題。細部ではなく文章全体の中心テーマを読み取る力を試す。

【解説】
本文の流れ：①高校が老人ホーム訪問を推奨→②最初は緊張するが徐々に楽しめるようになる→③高齢者側も訪問を喜ぶ→④先生は学生の共感力育成と高齢者のつながりの両方に良い影響があると考える。
① が本文全体の中心テーマと一致（✓）
② 「職員不足の報告」→本文に記述なし（×）
③ 「統計データ」→本文に数値データはない（×）
④ 「評価方法」→本文にそのような記述はない（×）

【文法ポイント】
主題問題では冒頭と結論部分に注目し、繰り返し出てくるキーワード（students, elderly residents, empathy, connection）を手がかりにする。

【入試頻出】
・主題は本文の一部だけでなく全体に関わる内容であることが多い。
・最後の文（teachers believe〜）に全体のまとめが書かれることが多い。
・具体的すぎる選択肢や本文にない情報を含む選択肢は主題として不適切。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo10_50',
    subject: 'eigo',
    passage: `Every Friday evening, a group of volunteers gathers at a local church to cook and serve a hot meal for people who are homeless. The volunteers include students, office workers, and retired teachers who all give up their evening for this activity. The meal service began five years ago with only a handful of volunteers, but now more than thirty people help each week. Some homeless visitors say that the meal is not just about food, but also about being treated with kindness and respect. The organizers hope to expand the service to other neighborhoods in the near future.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っていないものを1つ選べ。',
    choices: ['① この食事提供活動は毎週金曜日の夜に行われている。', '② ボランティアには学生、会社員、退職した教師が含まれる。', '③ この活動は始まってから一度も規模が変わっていない。', '④ 主催者は他の地域にもこの活動を広げたいと考えている。'],
    answer: '③ この活動は始まってから一度も規模が変わっていない。',
    hint: '本文には "began five years ago with only a handful of volunteers, but now more than thirty people help" とあり、規模の変化が述べられている。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」誤文識別型の読解問題。数量・変化に関する記述を正確に読み取る力を問う。

【解説】
① 「毎週金曜日の夜」→本文"Every Friday evening"と一致（✓）
② 「学生、会社員、退職した教師」→本文"students, office workers, and retired teachers"と一致（✓）
③ 「一度も規模が変わっていない」→本文には"began...with only a handful of volunteers, but now more than thirty people help"とあり、少人数から30人以上へと規模が大きく変化したことが述べられているため、この選択肢は本文と矛盾する（× 不一致）
④ 「他の地域に広げたい」→本文"hope to expand the service to other neighborhoods"と一致（✓）

正解：③

【文法ポイント】
「合っていないものを選べ」問題では、数・時間・変化を表す語句（a handful of, more than, began, now）を正確に比較する。

【入試頻出】
・数量表現の変化（from A to B / began small but grew）は誤答選択肢に使われやすい。
・「一度も〜ない」「変わっていない」という断定的な選択肢は本文の変化を示す記述と矛盾することが多い。
・本文の時間軸（過去→現在）を正しく追うことが正解の鍵。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
