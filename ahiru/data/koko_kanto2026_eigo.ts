import type { Question } from './questions';

export const kokoKanto2026Eigo: Question[] = [
  // ============================================================
  // Q001–Q005: 基礎（difficulty: 'basic'）／course: 'koko-hibiya'
  // ============================================================
  {
    id: 'koko_kanto2026_eigo_001',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に最も適切な語を選びなさい。

If it (　) tomorrow, we will cancel the picnic.

ア. rains　イ. will rain　ウ. rained　エ. is rain`,
    answer: 'ア(rains)',
    hint: '条件を表すif節の中では、未来のことでも動詞は現在形を使う。',
    explanation: `【出題意図】条件を表すif節（時・条件の副詞節）における時制の基本ルールを問う。【解説】「明日雨が降ったら」は未来の出来事だが、時・条件を表す副詞節の中では未来のことも現在形で表す。したがってwill rainではなくrainsを使う。【注意点】主節（we will cancel the picnic）には未来を表すwillを使うが、if節の中ではwillを使わない点が最大のポイント。【関連知識】when、before、after、as soon asなど時を表す接続詞に導かれる副詞節も同様に、未来のことでも現在形で表す。`,
    pitfall: 'if節の中にwill rainを入れてしまうミスが非常に多い。if節では未来でも現在形を使うと徹底する。',
    memoryTip: '時・条件の副詞節（if, when, before, after等）の中は「現在形が未来を表す」と覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_002',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文の下線部「postpone」と最も意味が近い語を選びなさい。

The committee decided to postpone the meeting until next week.

ア. cancel　イ. delay　ウ. attend　エ. announce`,
    answer: 'イ(delay)',
    hint: 'postpone=「延期する」、delayも「遅らせる・延期する」という意味。',
    explanation: `【出題意図】頻出動詞postponeの同意語を問う語彙問題。【解説】postpone=「（予定などを）延期する」という意味で、delay（遅らせる・延期する）とほぼ同意。committee（委員会）がmeeting（会議）を来週まで延期したという文脈。【注意点】cancel（中止する）は「行わないことにする」という意味でpostponeとは異なる（延期は「別の日に行う」ことを意味する）。【関連知識】postpone=put off（延期する）という言い換えも重要。反意語はhold（予定通り開催する）。`,
    pitfall: 'cancelを選んでしまうと「中止」になり、「延期」（別の日に実施）という意味とずれてしまう。',
    memoryTip: 'postpone=post（後に）+pone（置く）→「後に置く」＝延期すると語源から覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_003',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

彼はクラスで一番背が高い生徒だ。
He is the (　) student in his class.`,
    answer: 'tallest',
    hint: '最上級はthe+形容詞のest形（または、the most+形容詞）で表す。',
    explanation: `【出題意図】最上級の基本形（the+形容詞のest形）を問う。【解説】「一番背が高い」＝最上級tallest。tallのような1音節の形容詞はest形をつけて最上級を作る。【注意点】the most tallとしないこと。1音節の短い形容詞はmostを使わずest形にする。【関連知識】比較級・最上級の作り方：1音節・一部の2音節形容詞はer/est、それ以外の長い形容詞はmore/mostを使う。`,
    pitfall: 'the most tallとするのは誤り。tallは1音節の形容詞なのでest形が正しい。',
    memoryTip: '短い形容詞（1音節）はer/est、長い形容詞（2音節以上）はmore/mostと語の長さで判断する。',
  },
  {
    id: 'koko_kanto2026_eigo_004',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な前置詞を入れなさい。

She is good (　) playing the piano.`,
    answer: 'at',
    hint: 'be good at 〜ing=「〜が得意だ」という定型表現。',
    explanation: `【出題意図】be good at〜（〜が得意だ）という前置詞atを使った定型表現を問う。【解説】「be good at + 名詞／動名詞」で「〜が得意だ」という意味を表す。ここではplaying the piano（ピアノを弾くこと）という動名詞句が続く。【注意点】be good for〜（〜のためになる）と混同しないこと。be good atは能力・得意分野、be good forは効果・利益を表す。【関連知識】be poor at〜／be bad at〜（〜が苦手だ）はbe good atの反意表現として合わせて覚える。`,
    pitfall: 'be good for playingとしないこと。forは「効果・利益」を表し、意味が異なる。',
    memoryTip: 'be good at=「〜の点で（at）優れている」→「得意」というイメージで覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_005',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に最も適切な語句を選びなさい。

I (　) my homework already, so I can go out now.

ア. finish　イ. finished　ウ. have finished　エ. finishing`,
    answer: 'ウ(have finished)',
    hint: 'alreadyは現在完了（完了用法）とよく一緒に使われる副詞。',
    explanation: `【出題意図】現在完了（完了用法）とalreadyの結びつきを問う基本問題。【解説】already（すでに）は現在完了の完了用法と相性がよい副詞で、「すでに宿題を終えた（その結果、今外出できる）」という現在への結果・影響を表すのでhave finishedが適切。【注意点】finishedのみ（過去形）だと過去の一時点の動作を述べるだけで、「だから今外出できる」という現在との関連が弱くなる。【関連知識】already/yet/justは現在完了の完了用法でよく使われる副詞（alreadyは肯定文、yetは疑問文・否定文が基本）。`,
    pitfall: 'finishedを選ぶと単なる過去の事実になり、「今外出できる」という現在の状況とのつながりが弱まる。',
    memoryTip: 'already＋現在完了＝「すでに〜し終えた（今の状況に影響）」とセットで覚える。',
  },

  // ============================================================
  // Q006–Q011: 標準（difficulty: 'standard'）／course: 'koko-hibiya'
  // ============================================================
  {
    id: 'koko_kanto2026_eigo_006',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な関係代名詞を入れなさい。

The scientist (　) theory changed how we understand the universe was awarded the Nobel Prize.
（その理論が宇宙の理解の仕方を変えた科学者は、ノーベル賞を受賞した）`,
    answer: 'whose',
    hint: '「その科学者の理論」という所有の関係を表す関係代名詞。',
    explanation: `【出題意図】所有格の関係代名詞whoseの用法を問う。【解説】「The scientist's theory changed〜」の所有格'sをwhoseに置き換えて先行詞the scientistの直後に置いた形。whoseは「先行詞+関係代名詞+名詞」の語順で「〜の…」という所有関係を表す。【注意点】whoseの後には必ず名詞（ここではtheory）が続く。which theoryやwho theoryのようにはできない。【関連知識】whoseは先行詞が人でも物でも使える唯一の所有格の関係代名詞（The house whose roof is red...のように物にも使用可）。`,
    pitfall: 'whoやwhichを入れると、後ろのtheoryとのつながりが不自然になる。所有関係を表すにはwhoseが必要。',
    memoryTip: 'whose+名詞=「〜の…」という所有のつながりを表すと覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_007',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を、tellを使った間接話法に書き換え、（　）に適語を入れなさい。

The teacher said to us, "Submit your essays by Friday."
→ The teacher told us (　) (　) our essays by Friday.`,
    answer: 'to submit',
    hint: '命令文の間接話法はtell+人+to+動詞の原形。',
    explanation: `【出題意図】命令文の間接話法（tell+人+to do）への書き換えを問う。【解説】直接話法の命令文"Submit your essays by Friday."を間接話法にすると、tell+人（us）+to+動詞の原形（to submit）という形になる。【注意点】命令文を間接話法にする際は、sayではなくtellを使い、動詞は「to+原形」にする（that節は使わない）。否定の命令文の場合はnot to doになる点も合わせて押さえる。【関連知識】ask+人+to do（〜するよう頼む）、order+人+to do（〜するよう命じる）も同じ構造の頻出表現。`,
    pitfall: 'told us that we submitのようにthat節を使うのは、命令文の間接話法としては不自然。to doの形が基本。',
    memoryTip: '命令文の間接話法＝tell/ask/order+人+to do、否定はnot to doと覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_008',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に最も適切な語句を選びなさい。

The engineers had to (　) a new solution when the original design failed.

ア. give up　イ. come up with　ウ. look down on　エ. take after`,
    answer: 'イ(come up with)',
    hint: 'come up with=「（考え・解決策などを）思いつく」。',
    explanation: `【出題意図】頻出イディオムcome up withの意味を問う。【解説】come up with〜=「〜を思いつく、考え出す」という意味。「最初の設計が失敗したとき、技術者たちは新しい解決策を考え出さなければならなかった」という文脈に合う。【注意点】give up（あきらめる）、look down on（見下す）、take after（〜に似ている、主に外見・性格が親に似る）はいずれも文脈に合わない。【関連知識】come up with=think of（思いつく）とほぼ同意。come across〜（〜に偶然出会う）と形が似ているので混同しないよう注意。`,
    pitfall: 'give upを選ぶと「あきらめた」という正反対の意味になってしまう。',
    memoryTip: 'come up with=「（アイデアが）上がってきて、それと共にいる」→「思いつく」とイメージする。',
  },
  {
    id: 'koko_kanto2026_eigo_009',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

彼女はスマートフォンの画面を修理してもらった。
She (　) her smartphone screen (　).

（haveとrepairを適切な形にして使うこと）`,
    answer: 'had, repaired',
    hint: '「have+目的語+過去分詞」＝「〜を…してもらう／される」（使役受動）。',
    explanation: `【出題意図】使役動詞haveを使った受動的な意味（have+O+過去分詞）を問う。【解説】「画面を修理してもらった」は、画面自体が「修理される」側なので、have+目的語+過去分詞の形を使う。haveを過去形hadにし、repairは過去分詞repairedにする。【注意点】have+O+動詞原形（〜してもらう・させる）と混同しないこと。ここでは目的語（screen）が「される」側なので過去分詞を使う。【関連知識】get+O+過去分詞も同じ意味で使える（She got her smartphone screen repaired.）。`,
    pitfall: 'had her smartphone screen repairのように原形にするのは誤り。目的語が「される」側の場合は過去分詞。',
    memoryTip: 'have+O+動詞原形＝Oに〜させる（能動的）、have+O+過去分詞＝Oを〜される・してもらう（受動的）と区別する。',
  },
  {
    id: 'koko_kanto2026_eigo_010',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読み、設問に答えなさい。

Our school's robotics team has been preparing for the national competition for six months. Building a working robot is not easy; the team faced several setbacks, including a motor that kept overheating and software that crashed during practice runs. Despite these difficulties, the members stayed late after school almost every day, testing and fixing the robot again and again. Their teacher says that the process of solving problems together has taught the students more than winning ever could.

① Why did the robotics team face difficulties?（英語で答えよ）
② 下線部「setbacks」の意味を日本語で答えよ。
③ 本文の内容と合うものを選べ。
　ア. チームは一度も問題に直面しなかった。
　イ. チームはモーターの過熱やソフトウェアの不具合に直面した。
　ウ. 先生は勝つことが最も重要だと考えている。`,
    answer: `① Because a motor kept overheating and the software crashed during practice runs.
② 一時的な後退・つまずき（困難・障害）
③ イ`,
    hint: '①本文2文目「a motor that kept overheating and software that crashed」に注目。②setback=「後退・障害」。③本文全体の内容を確認。',
    explanation: `【出題意図】ロボット部の活動を題材にした読解問題。理由の説明・語彙・内容一致を問う。【解説】①本文2文目「the team faced several setbacks, including a motor that kept overheating and software that crashed during practice runs」から理由を抜き出す。②setback=「（進行を妨げる）後退、つまずき、障害」。③本文2文目の内容と一致するイが正解。アは「一度も問題に直面しなかった」で本文と矛盾し、ウは最終文「the process of solving problems together has taught the students more than winning ever could」（勝つこと以上に学んだ）と矛盾する。【注意点】最終文のwinning ever couldは「勝つことが教えてくれたであろう以上に」という比較表現で、勝利よりも過程を重視する内容になっている。【関連知識】overheat（過熱する）、crash（（プログラムなどが）異常終了する）はテクノロジー関連の頻出語彙。`,
    pitfall: 'ウを選んでしまうと、本文最終文の「勝つことより過程が大切」という主旨と正反対になる。',
    memoryTip: 'despite these difficulties（これらの困難にもかかわらず）の後には「それでも努力した」という展開が続くと予測する。',
  },
  {
    id: 'koko_kanto2026_eigo_011',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-hibiya',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

[ so / novel / interesting / was / the / that ] I couldn't put it down.
（その小説はとても面白かったので、私は読むのをやめられなかった）`,
    answer: `The novel was so interesting that I couldn't put it down.`,
    hint: 'so+形容詞+that+S+V「とても〜なので…」の構文。',
    explanation: `【出題意図】so〜that…構文の語順整序を問う。【解説】「The novel was so interesting that」＝「主語+be動詞+so+形容詞+that」の基本語順。soとthatをセットにし、形容詞interestingをsoの直後に置く。【注意点】The novel was interesting so thatのように語順を変えないこと。soは形容詞の直前に置く。【関連知識】put downは「（本などを）下に置く」という意味の句動詞で、couldn't put it downは「（面白くて）本を置くことができなかった」という慣用的表現。`,
    pitfall: 'so the novel was interesting thatのように主語とso以下の順番を逆にしないこと。',
    memoryTip: 'so+形容詞+that=「とても〜なので」、形容詞の前にsoを置くと覚える。',
  },

  // ============================================================
  // Q012–Q014: 標準（difficulty: 'standard'）／course: 'koko-waseda'
  // ============================================================
  {
    id: 'koko_kanto2026_eigo_012',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に最も適切な語句を選びなさい。

The committee will (　) the final decision until all opinions have been heard.

ア. put off　イ. take off　ウ. give away　エ. bring up`,
    answer: 'ア(put off)',
    hint: 'put off=「延期する」という意味の句動詞。',
    explanation: `【出題意図】頻出句動詞put offの意味を問う。【解説】put off〜=「〜を延期する」（=postpone）。「すべての意見が聞かれるまで最終決定を延期する」という文脈に合う。【注意点】take off（脱ぐ・離陸する）、give away（（無料で）与える・秘密をばらす）、bring up（育てる・話題を持ち出す）はいずれも文脈に合わない。【関連知識】put off=postpone=delay（すべて「延期する」の同意語）とまとめて覚える。`,
    pitfall: 'bring upを選ぶと「話題として持ち出す」という意味になり、「延期する」とは異なる。',
    memoryTip: 'put off=「（予定を）脇に置いておく」→「延期する」とイメージする。',
  },
  {
    id: 'koko_kanto2026_eigo_013',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

そろそろ本当のことを話す時間だ。
It is (　) you (　) the truth.`,
    answer: 'time, told',
    hint: '「It is (high/about) time+S+過去形」＝「そろそろ〜する時間だ」という仮定法的表現。',
    explanation: `【出題意図】「It is time+S+過去形」という仮定法的な定型表現を問う。【解説】「そろそろ〜すべき時間だ」は、実際にはまだ行われていないことを暗示する仮定法的なニュアンスを持ち、It is time+主語+動詞の過去形（ここではtold）という形を取る。【注意点】It is time to do（不定詞）やIt is time for+人+to doという形もあるが、本問のようにS+Vの節が続く場合は動詞を過去形にする点がポイント。【関連知識】It is high time〜／It is about time〜も同じ意味・用法で使われる強調形。`,
    pitfall: 'It is time you tell the truthのように現在形にするのは誤り。この構文では過去形を使う。',
    memoryTip: 'It is (high) time+S+過去形＝「そろそろ〜すべき時だ（仮定法過去）」とセットで覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_014',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読み、設問に答えなさい。

Last year, Aya spent three months studying in Canada as an exchange student. At first, she found it hard to follow fast conversations in English, and she often felt left out during group discussions. Over time, however, she began asking classmates to repeat or explain things she didn't understand. This simple habit helped her both improve her English and make new friends. Aya says that being willing to ask for help was the most important lesson she learned abroad.

① What did Aya find difficult at first?（英語で答えよ）
② 下線部「left out」の意味を日本語で答えよ。`,
    answer: `① She found it hard to follow fast conversations in English (and she often felt left out during group discussions).
② 仲間外れにされて、疎外されて`,
    hint: '①本文2文目、②left out=「除け者にされる、仲間に入れてもらえない」。',
    explanation: `【出題意図】留学経験を題材にした読解問題。困難な点の把握と語彙の意味理解を問う。【解説】①本文2文目「she found it hard to follow fast conversations in English, and she often felt left out during group discussions」から抜き出す。②feel left out=「仲間外れにされていると感じる、疎外感を感じる」という意味の頻出表現。【注意点】本文全体は「最初は苦労したが、質問する習慣によって改善した」という展開なので、①の答えは「最初の段階」の困難に限定して答える。【関連知識】exchange student（交換留学生）、feel left out（仲間外れに感じる）は留学・国際交流をテーマにした英文の頻出語彙。`,
    pitfall: '①で後半の「質問する習慣で改善した」という内容まで含めて答えないこと。設問は「最初に困難だったこと」を聞いている。',
    memoryTip: 'leave A out=「Aを外に置いていく」→「Aを除け者にする」、left outはその受け身の形と覚える。',
  },

  // ============================================================
  // Q015–Q022: 発展（difficulty: 'advanced'）／course: 'koko-waseda'
  // ============================================================
  {
    id: 'koko_kanto2026_eigo_015',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

Not until she reached home (　) that she had left her umbrella on the train.

ア. she realized　イ. did she realize　ウ. she did realize　エ. had she realized`,
    answer: 'イ(did she realize)',
    hint: '否定の副詞句Not untilが文頭に来ると、後ろの主節は疑問文と同じ倒置の語順になる。',
    explanation: `【出題意図】否定的な意味を持つ副詞句（Not until〜）が文頭に出た場合の倒置構文を問う。【解説】Not until she reached home（家に着くまでは〜なかった）という否定的な副詞節が文頭に置かれているため、後ろの主節は疑問文と同じ「did+主語+動詞の原形」の倒置語順になる。したがってdid she realizeが正しい。【注意点】通常の語順（she realized）のままにしないこと。Not until、Never、Little、Only afterなど否定・限定の意味を持つ語句が文頭に来ると倒置が起こる。【関連知識】Not until A+did/was+S+V＝「Aして初めて〜した」という強調表現。It is not until A that S V（強調構文）とほぼ同意。`,
    pitfall: '倒置をせずshe realizedのままにする誤りが非常に多い。文頭のNot untilに反応して倒置の形を作る。',
    memoryTip: '否定語（Not, Never, Little等）が文頭→倒置（疑問文と同じ語順）が起こると覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_016',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の文を、itを用いた強調構文に書き換え、（　）に適語を入れなさい。

My grandfather built this house in 1965.
（下線部「in 1965」を強調すること）

It was (　) that my grandfather built this house.`,
    answer: 'in 1965',
    hint: 'It is/was+強調したい語句+that+残りの文、という強調構文の形。',
    explanation: `【出題意図】it is/was〜that…の強調構文を用いた書き換えを問う。【解説】強調したい語句（in 1965）を"It was"と"that"の間に置き、残りの部分（my grandfather built this house）をthat以下に続ける。【注意点】強調構文はIt is/was+強調したい要素+that+残りの文という形が基本で、時を表す副詞句もこの構文で強調できる。【関連知識】人（my grandfather）を強調する場合はIt was my grandfather that built this house in 1965.のようになる。強調構文は主語・目的語・副詞（句）を強調できるが、動詞句は強調できない。`,
    pitfall: 'It was my grandfather thatのように人を強調してしまうと、強調したい要素（in 1965）とずれてしまう。',
    memoryTip: 'It is/was+強調したい語句+that+残りの文、という「サンドイッチ」構造で覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_017',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適語を入れ、分詞構文（独立分詞構文）を完成させなさい。

(　) being fine, we decided to go hiking.
（天気が良かったので、私たちはハイキングに行くことにした）`,
    answer: 'The weather',
    hint: '分詞構文の意味上の主語が主節の主語と異なる場合、その主語を分詞の前に置く（独立分詞構文）。',
    explanation: `【出題意図】独立分詞構文（意味上の主語が主節と異なる分詞構文）を問う発展文法。【解説】「天気が良かったので」の主語はthe weatherであり、主節の主語we（私たち）とは異なる。このように分詞の意味上の主語が主節の主語と一致しない場合、分詞の前にその意味上の主語（The weather）を明示する必要がある（独立分詞構文）。【注意点】通常の分詞構文は主節と主語が同じ場合にのみ主語を省略できる。主語が異なる場合は省略せず、分詞の直前に置く。【関連知識】It being rainy, the game was canceled.（雨だったので試合は中止になった）も同じ独立分詞構文の例。`,
    pitfall: '主語を省略してBeing fine, we decided to go hiking.としてしまうと、まるで「私たちの体調が良かったので」という意味に誤解されてしまう。',
    memoryTip: '分詞の意味上の主語が主節と異なるときは、省略せずに分詞の前に置く（独立分詞構文）と覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_018',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

あの時、彼のアドバイスに従っていればよかったのに。
I wish I (　) (　) his advice at that time.`,
    answer: 'had followed',
    hint: '過去の事実に反する願望はI wish+主語+had+過去分詞（仮定法過去完了）で表す。',
    explanation: `【出題意図】仮定法過去完了を用いたI wish構文（過去の後悔）を問う。【解説】「あの時〜していればよかった」という過去の事実に反する後悔・願望は、I wish+主語+had+過去分詞（仮定法過去完了）で表す。ここではfollowの過去分詞followedを使いhad followedとする。【注意点】I wish I followed（過去形のみ）にすると、現在の事実に反する願望（例：今〜すればいいのに）を表すことになり、過去の後悔を表すにはhad+過去分詞が必要。【関連知識】I wish+仮定法過去（現在の願望）とI wish+仮定法過去完了（過去の後悔）の違いは頻出のポイント。`,
    pitfall: 'I wish I followed his adviceとすると、時制がずれて過去の後悔を正しく表せない。',
    memoryTip: 'I wish+had+過去分詞＝「（あの時）〜していればよかったのに」という過去の後悔を表すと覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_019',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語を選びなさい。

Her success was not so much a matter of talent (　) hard work.

ア. as　イ. than　ウ. but　エ. so`,
    answer: 'ア(as)',
    hint: 'not so much A as B＝「AというよりむしろB」という相関表現。',
    explanation: `【出題意図】not so much A as B（AというよりむしろB）という相関構文を問う発展語法。【解説】not so much A as Bは「Aというよりむしろ B」という意味の重要構文で、ここでは「彼女の成功は才能の問題というより、むしろ努力の問題だった」という意味になる。asを補う。【注意点】not so much A as Bのasは比較のasであり、thanやbutに置き換えることはできない。【関連知識】not so much A as B=B rather than A（AというよりむしろB）と言い換えられる。同様の構文にnot A but B（AではなくB）もあるが、意味・構造が異なるので混同しないよう注意。`,
    pitfall: 'thanを選んでしまう誤りが多いが、not so much A as Bは比較級構文ではなくasを使う決まった相関表現。',
    memoryTip: 'not so much A as B＝「Aほど多くBではない」→「AというよりむしろB」と直訳から意味を導く。',
  },
  {
    id: 'koko_kanto2026_eigo_020',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Machine translation has improved dramatically over the past decade, mainly because of advances in artificial intelligence. Modern apps can now convert spoken words into another language almost instantly, which helps travelers communicate with people who speak a different language. Some teachers, however, worry that students who depend too much on these tools may never develop their own language skills. Learning a foreign language, they argue, requires more than understanding individual words; it also involves understanding culture, tone, and context, things that machines still struggle to capture perfectly. For this reason, many teachers now encourage students to treat translation apps as a supplement to their studies rather than a replacement for them.`,
    question: `次の英文を読み、設問①〜③に答えなさい。

① 本文によると、機械翻訳の進歩を支えている主な要因は何か。日本語で答えよ。
② 一部の教師が懸念していることを日本語でまとめよ。
③ 本文の内容と合うものを選べ。
　ア. すべての教師が翻訳アプリの使用を禁止すべきだと考えている。
　イ. 翻訳アプリは学習を補うものとして活用すべきだと考える教師が多い。
　ウ. 機械はすでに文化やトーンを完璧に理解できるようになった。`,
    answer: `① 人工知能（AI）の進歩。
② 翻訳アプリに頼りすぎると、生徒が自分自身の語学力を伸ばせなくなるのではないかという懸念。
③ イ`,
    hint: '①本文1文目、②本文3文目「Some teachers, however, worry that〜」、③本文最終文に注目。',
    explanation: `【出題意図】機械翻訳とAIをテーマにした論説文読解。要因把握・懸念点の抽出・内容一致を問う最高レベルの問題。【解説】①本文1文目「Machine translation has improved dramatically over the past decade, mainly because of advances in artificial intelligence.」からAIの進歩が主な要因だとわかる。②本文3文目「Some teachers, however, worry that students who depend too much on these tools may never develop their own language skills.」から、翻訳アプリへの依存が語学力の発達を妨げるという懸念を読み取る。③本文最終文「many teachers now encourage students to treat translation apps as a supplement to their studies rather than a replacement for them」と一致するのはイ。アは「すべての教師が禁止すべき」という記述はなく誤り、ウは「things that machines still struggle to capture perfectly」（機械がまだ完璧に捉えられないもの）と矛盾する。【注意点】howeverの前後で「翻訳アプリの利便性」と「教師の懸念」が対比される論説構造に注意する。【関連知識】supplement（補うもの）⇔replacement（代替するもの）の対比は論説文で頻出のキーワード。`,
    pitfall: '③でウを選ばないこと。本文は「機械はまだ文化やトーンを完璧に捉えられない」と明記しており正反対の内容。',
    memoryTip: 'however の前後で「利点」と「懸念点」が対比される構造を意識して読む。',
  },
  {
    id: 'koko_kanto2026_eigo_021',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① Rarely I have seen such a beautiful sunset.
② If she had studied harder, she would pass the exam.
③ Hardly had the train left the station when it began to rain.
④ It is essential that every member attends the meeting.`,
    answer: `① Rarely I have seen → Rarely have I seen（否定的頻度を表す副詞が文頭に来ると倒置が起こる）
② would pass → would have passed（仮定法過去完了：if節がhad+過去分詞のとき、主節もwould have+過去分詞にする）
③ 誤りなし（Hardly had+S+過去分詞+when...という倒置構文が正しく使われている）
④ attends → attend（essential等の必要を表す形容詞に続くthat節の動詞は原形（仮定法現在）を使う）`,
    hint: '①Rarely等の否定的頻度の副詞が文頭→倒置、②if節がhad+過去分詞→主節はwould have+過去分詞、③Hardly〜whenの倒置は正しい形、④essential that+S+原形（仮定法現在）。',
    explanation: `【出題意図】倒置構文（Rarely, Hardly〜when）・仮定法過去完了・仮定法現在（essential that）という3つの発展文法項目を問う誤文訂正。【解説】①Rarely（めったに〜ない）のような否定的頻度を表す副詞が文頭に来ると、後ろの主節は疑問文と同じ「助動詞+主語+動詞」の倒置語順になるため、Rarely have I seenが正しい。②If節がIf+主語+had+過去分詞（仮定法過去完了）の形なので、主節もwould have+過去分詞にする必要があり、would have passedが正しい。③Hardly had+主語+過去分詞+when+S+過去形（「〜するとすぐに…した」）という倒置構文が正しく使われており誤りなし。④essential（必要不可欠だ）のような要求・必要を表す形容詞に続くthat節の動詞は、主語の人称・数に関わらず原形を使う（仮定法現在）ため、attendsではなくattendが正しい。【注意点】①③はいずれも否定的な意味を持つ副詞（句）が文頭に出た場合の倒置というテーマで共通しているが、③はすでに正しく倒置されている点を見抜く必要がある。【関連知識】Rarely/Seldom/Never/Little/Hardly〜whenなどの倒置構文と、insist/suggest/essential/necessary等に続く仮定法現在は、いずれも最難関私立高校で頻出の発展文法。`,
    pitfall: '③をHardly the train had leftのように倒置を崩して「誤り」と判断しないこと。この文はすでに正しい倒置形になっている。',
    memoryTip: '否定的副詞（Rarely, Never, Hardly, Little等）が文頭→倒置、要求・必要の形容詞+that節→原形、と項目ごとに整理して覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_022',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-waseda',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（30語以上）

「もし私が学校の校則を変える権限を持っていたら、生徒たちがもっと自由に意見を言える仕組みを作るだろう。学校生活をより良くするために、大人と生徒がお互いの意見に耳を傾けることが大切だと思う。」`,
    answer: `（解答例）If I had the authority to change our school rules, I would create a system that allows students to express their opinions more freely. I think it is important for adults and students to listen to each other's opinions in order to make our school life better.（41語）

（別解）If I had the power to change the school rules, I would make a system in which students could share their ideas more freely. I believe that adults and students should listen to each other to improve our school life together.（37語）`,
    hint: '「もし〜権限を持っていたら〜だろう」→仮定法過去（If+主語+had+名詞, would+動詞原形）。「〜することが大切だと思う」→I think it is important for+人+to do。',
    explanation: `【出題意図】仮定法過去（If I had the authority...）を用いた和文英訳と、it is important for A to doの構文を組み合わせた総合英作文。【解説】「もし権限を持っていたら」→現在の事実に反する仮定なので仮定法過去：If I had the authority to change our school rules（had+名詞で「持っていたら」を表す）。「仕組みを作るだろう」→would create a system that allows〜（関係代名詞thatを使って仕組みの内容を説明）。「〜することが大切だと思う」→I think it is important for adults and students to listen to each other's opinions（形式主語it+for+人+to do）。【注意点】仮定法過去のif節はIf I have the authorityのように直説法にしないこと。現在の事実に反する仮定はhad+名詞（または動詞の過去形）を使う。【関連知識】authority（権限）、express opinions（意見を表明する）、listen to each other（お互いの意見に耳を傾ける）は学校生活の意見文で頻出のテーマ語彙。`,
    pitfall: 'If I have the authorityと直説法にすると、現在の事実に反する仮定のニュアンスが失われる。',
    memoryTip: '仮定法過去のif節はhad+名詞／動詞の過去形を使い、主節はwould/could/might+動詞原形にすると徹底暗記する。',
  },

  // ============================================================
  // Q023–Q033: 発展（difficulty: 'advanced'）／course: 'koko-kankan'
  // ============================================================
  {
    id: 'koko_kanto2026_eigo_023',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Last spring, our school installed solar panels on the roof of the main building. At first, some students doubted that the panels would make any real difference, since electricity bills are influenced by many factors. After six months, however, the school's energy report showed a noticeable drop in the amount of electricity purchased from the power company. Encouraged by these results, the student council started a campaign to turn off lights and computers whenever a classroom is empty. Teachers say that this project has done more than save money; it has also taught students that small, consistent actions can lead to meaningful environmental change over time.`,
    question: `次の英文を読み、設問①〜③に答えなさい。

① 太陽光パネル設置後、学校のエネルギー報告書にはどのような変化が見られたか。日本語で答えよ。
② 生徒会（student council）が始めたキャンペーンの内容を日本語で答えよ。
③ 本文から読み取れる筆者の主張として最も適切なものを選べ。
　ア. 太陽光パネルの設置だけで環境問題はすべて解決する。
　イ. 小さな継続的な行動が、時間をかけて意味のある環境変化につながる。
　ウ. 生徒会の活動は電気料金の節約には全く役立たなかった。`,
    answer: `① 電力会社から購入する電気の量が目に見えて減少した。
② 教室に誰もいないときは電気やコンピューターを消すよう呼びかけるキャンペーン。
③ イ`,
    hint: '①本文3文目「the school\'s energy report showed a noticeable drop〜」、②本文4文目、③本文最終文に注目。',
    explanation: `【出題意図】学校での太陽光パネル導入と環境活動をテーマにした読解問題。情報抽出と筆者の主張の把握を問う。【解説】①本文3文目「the school's energy report showed a noticeable drop in the amount of electricity purchased from the power company」から、電力購入量が目に見えて減ったことがわかる。②本文4文目「the student council started a campaign to turn off lights and computers whenever a classroom is empty」から、教室が空のときに電気類を消すキャンペーンだとわかる。③本文最終文「small, consistent actions can lead to meaningful environmental change over time」と一致するのはイ。アは「すべて解決する」という言い切りが本文になく誤り、ウは本文の「this project has done more than save money」（お金の節約以上の効果があった、すなわち節約自体はできている）と矛盾する。【注意点】"has done more than save money"は「お金を節約する以上のことをした」という意味であり、「お金を節約していない」という意味ではない点に注意。【関連知識】noticeable（目立った、著しい）、consistent（一貫した、継続的な）は環境・データ関連の読解で頻出の語彙。`,
    pitfall: '③のウを選んでしまうと、"more than save money"の意味を「お金の節約はしていない」と誤読することになる。',
    memoryTip: 'do more than A＝「Aする以上のことをする」＝Aはできた上で、さらにそれ以上の効果があるという意味だと覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_024',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語を選びなさい。

I don't often agree with him, but he (　) make a good point this time.

ア. do　イ. does　ウ. did　エ. done`,
    answer: 'イ(does)',
    hint: '一般動詞を強調するときはdo/does/didを動詞の原形の前に置く（強調のdo）。',
    explanation: `【出題意図】一般動詞を強調する「強調のdo」の用法を問う。【解説】「今回は本当に良い指摘をした」と一般動詞makeを強調するとき、主語がhe（三人称単数）で時制が現在なので、doesを動詞の原形（make）の前に置く。強調のdo/does/didの後は必ず動詞の原形になる。【注意点】主語がheなのでdoではなくdoesを使う点、また強調した後の動詞は原形（makesではなくmake）にする点がポイント。【関連知識】強調のdoは日本語の「本当に」「確かに」に相当するニュアンスを加える。過去の文ではdid+動詞の原形（例：She did call me yesterday.＝彼女は確かに昨日電話をくれた）となる。`,
    pitfall: 'does makesのように動詞をそのままの形にしてしまう誤りが多い。強調のdoes/didの後は必ず動詞の原形。',
    memoryTip: '強調のdo/does/did+動詞の原形＝「本当に〜する」と覚える。主語・時制に応じてdo/does/didを使い分ける。',
  },
  {
    id: 'koko_kanto2026_eigo_025',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① The new policy will (　) effect from next April.
　ア. take　イ. make　ウ. do　エ. put

② Our proposal was turned (　) by the board without much discussion.
　ア. off　イ. down　ウ. up　エ. over

③ You should not (　) conclusions before hearing both sides of the story.
　ア. jump to　イ. run into　ウ. look into　エ. take to`,
    answer: '① ア(take)　② イ(down)　③ ア(jump to)',
    hint: '①take effect=「効力を発する」、②turn down=「（提案などを）拒否する」、③jump to conclusions=「早合点する」。',
    explanation: `【出題意図】ビジネス・議論の場面で使われる頻出イディオム（take effect / turn down / jump to conclusions）を問う。【解説】①take effect=「（法律・政策などが）効力を発する、施行される」。「新しい方針は来年4月から施行される」という文脈に合う。②turn down〜=「（提案・申し出などを）拒否する」。「私たちの提案はあまり議論もされずに理事会に拒否された」という文脈。③jump to conclusions=「（十分な根拠がないまま）早合点する、結論に飛びつく」。「両方の言い分を聞く前に結論に飛びつくべきではない」という文脈。【注意点】②のturn downは「（音量などを）下げる」という意味もあるが、ここでは「拒否する」の意味。③はjump intoではなくjump toが正しい形。【関連知識】take place（起こる、開催される）、turn up（現れる）、come to conclusions（結論に達する）なども合わせて押さえておきたい類似表現。`,
    pitfall: '③をrun intoにしてしまうと「（人に）偶然出会う、（問題に）ぶつかる」という意味になり文脈に合わない。',
    memoryTip: 'take effect（効力発生）、turn down（拒否）、jump to conclusions（早合点）をセットフレーズとして丸ごと覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_026',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① Scarcely had we arrived at the airport than our flight was announced as delayed.
② Were I you, I would accept the offer immediately.
③ The more carefully you plan a project, the more likely it is succeed.
④ No sooner had the concert began than the audience started cheering.`,
    answer: `① than → when（Scarcely had+S+過去分詞+when〜「〜するとすぐに…した」）
② 誤りなし（仮定法過去の倒置形Were I youが正しく使われている）
③ it is succeed → it is to succeed（the more〜, the more likely it is to do構文）
④ began → begun（No sooner had+S+過去分詞のhad構文なので、beginの過去分詞begunにする）`,
    hint: '①Scarcely〜whenの組み合わせ、②Were I you=If I were you、③the more likely it is to do、④No sooner had+S+過去分詞。',
    explanation: `【出題意図】倒置構文（Scarcely〜when、No sooner〜than）・仮定法の倒置（Were I you）・比較構文（the more〜, the more likely）という発展文法を総合的に問う誤文訂正。【解説】①Scarcely（ほとんど〜ない）はwhenとセットで使う（Scarcely had A happened when B happened.＝「Aするとすぐに（ほとんど間を置かずに）Bが起こった」）。thanはNo sooner〜thanとセットになる語なので混同しないよう注意し、ここではwhenに直す。②Were I you＝If I were youを倒置した仮定法過去の形で、正しく使われている。③「〜すればするほど、それだけ成功しやすくなる」は、the+比較級, the+比較級の構文の中にlikely+to doの構造が組み込まれた形で、it is likely to succeed（成功しそうだ）が正しいので、it is succeedをit is to succeedに直す。④No sooner had the concert(had)+過去分詞という構文なので、beginの過去分詞begunを使う必要がある（beganは過去形であり過去分詞ではない）。【注意点】①③④はいずれも「特定の語とセットで使われる構文」を正確に覚えているかがポイントで、②のように一見難しく見えても実際は正しい文もあるため、慎重に判断する必要がある。【関連知識】Scarcely/Hardly〜when、No sooner〜thanはいずれも「〜するとすぐに…した」を表す倒置構文の代表例で、セットの語（when/than）を混同しないことが最頻出の注意点。`,
    pitfall: '①でthanのままにしてしまう、または④でNo sooner〜thanのthanをwhenに変えてしまうなど、2つの構文（Scarcely〜when／No sooner〜than）を混同しやすい。',
    memoryTip: 'Scarcely/Hardly＋when、No sooner＋than、とセットの語を対で暗記する（決して逆にしない）。',
  },
  {
    id: 'koko_kanto2026_eigo_027',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

[ was / it / novel / this / that / won ] the prize last year.
（去年その賞を受賞したのは、まさにこの小説だった）`,
    answer: `It was this novel that won the prize last year.`,
    hint: 'It is/was+強調したい語句+that+残りの文、という強調構文。',
    explanation: `【出題意図】it is/was〜that…の強調構文を用いた語順整序を問う。【解説】「It was this novel that won the prize last year.」＝主語this novelを強調する強調構文。It was+強調したい語句（this novel）+that+残りの文（won the prize last year）という基本語順に組み立てる。【注意点】this novelを主語として強調しているため、that以下にはwonという動詞がそのまま続く（三人称単数のsは付けない、過去形のまま）。【関連知識】強調構文It is/was+A+that…は、Aが主語・目的語・副詞（句）のいずれであっても使える万能構文。`,
    pitfall: 'It was that this novel wonのように語順を崩さないこと。It was+強調要素+thatの順を守る。',
    memoryTip: 'It is/was+強調したい語句+that+残りの文、という「サンドイッチ構造」で組み立てる。',
  },
  {
    id: 'koko_kanto2026_eigo_028',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `As more companies expand into overseas markets, the ability to communicate across cultures has become an essential skill. A gesture or expression that seems perfectly polite in one country can be considered rude in another, and even a simple silence during a conversation can be interpreted in completely different ways depending on cultural background. Business schools have therefore started to offer courses that focus not on language alone but on cultural awareness, encouraging students to ask questions rather than assume that their own customs are universal. Experts say that this kind of awareness will only become more important as remote work makes it common for people from different countries to collaborate without ever meeting in person.`,
    question: `次の英文を読み、設問①〜③に答えなさい。

① 下線部「cultural awareness」とはどういうことか、日本語で説明せよ。
② 本文によると、リモートワークの普及は今後どのような影響をもたらすと考えられているか。日本語で答えよ。
③ 本文の内容と合うものを選べ。
　ア. どの国でも礼儀正しいとされる行動は共通している。
　イ. ビジネススクールは語学教育のみに焦点を当てるべきだと主張している。
　ウ. 自国の習慣を当然のものと思わず、質問することが推奨されている。`,
    answer: `① 言語だけでなく、国や文化によって礼儀やコミュニケーションの捉え方が異なることを理解し、自分の文化・習慣を当然のものとは思わない意識・姿勢のこと。
② 実際に会うことなく異なる国の人々が協働することが一般的になるにつれて、文化的な意識の重要性がさらに高まると考えられている。
③ ウ`,
    hint: '①本文3文目「cultural awareness, encouraging students to ask questions rather than assume that their own customs are universal」、②本文最終文、③本文3文目に注目。',
    explanation: `【出題意図】グローバル化と異文化コミュニケーションをテーマにした論説文読解。下線部説明・将来予測の理解・内容一致を問う最高レベルの問題。【解説】①cultural awareness（文化的な意識）は、本文3文目の文脈から「自分の習慣を当然と思わず、質問する姿勢」を含む概念だと読み取れる。②本文最終文「this kind of awareness will only become more important as remote work makes it common for people from different countries to collaborate without ever meeting in person」から、リモートワークの普及により文化的意識の重要性がさらに高まると予測されている。③本文3文目「encouraging students to ask questions rather than assume that their own customs are universal」と一致するのはウ。アは本文2文目（同じ行動が国によって礼儀正しいか失礼かが異なる）と矛盾し、イは「language aloneではなくcultural awarenessにも焦点」とあるため「語学教育のみ」は誤り。【注意点】not A alone but also B（Aだけでなく Bも）のような構造を正確に読み取る必要がある。【関連知識】assume（当然だと思い込む）、universal（普遍的な、万国共通の）は異文化理解をテーマにした英文の頻出語彙。`,
    pitfall: 'イを選んでしまうと、本文が「語学だけでなく文化的意識にも焦点を当てている」という部分を見落とすことになる。',
    memoryTip: 'not A alone but (also) B＝「Aだけでなく Bも」という構造を意識して、本文が何と何の両方を扱っているか整理する。',
  },
  {
    id: 'koko_kanto2026_eigo_029',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

If I had taken the earlier train, I (　) at the meeting right now instead of stuck in traffic.

ア. would be　イ. would have been　ウ. will be　エ. had been`,
    answer: 'ア(would be)',
    hint: 'if節が過去の事実に反する仮定（had+過去分詞）でも、主節が現在の結果を表す場合は「混合仮定法」でwould+動詞の原形を使う。',
    explanation: `【出題意図】混合仮定法（過去の条件が現在の結果に影響する場合）を問う発展文法。【解説】if節「If I had taken the earlier train」は過去の事実に反する仮定（仮定法過去完了）だが、主節は"right now"（今）という現在の時点を表しているため、主節にはwould+動詞の原形（would be）を使う「混合仮定法」が適切。「もしもっと早い電車に乗っていたら、（その結果として）今頃渋滞で立ち往生する代わりに会議に出ているだろう」という意味になる。【注意点】would have been（仮定法過去完了の通常形）を選ばないこと。主節にright nowという現在を示す語句がある場合は、would+動詞の原形を使う。【関連知識】混合仮定法は、if節と主節で時制がずれる仮定法の応用パターンで、if節＝過去、主節＝現在という組み合わせが最も頻出。`,
    pitfall: 'would have beenを選ぶと「（あの時）会議に出ていただろう」という過去の結果になり、"right now"という現在を表す語句と矛盾する。',
    memoryTip: 'if節が過去、主節が現在の結果を表すときは、主節をwould+動詞の原形にする（混合仮定法）と覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_030',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の①〜③の下線部と最も意味が近い語をそれぞれ選びなさい。

① The professor's argument was quite ambiguous, so many students misunderstood it.
　ア. clear　イ. unclear　ウ. convincing　エ. brief

② Despite the setback, the team remained optimistic about their chances of winning.
　ア. hopeful　イ. doubtful　ウ. indifferent　エ. anxious

③ The government's new policy was widely criticized as inconsistent with its earlier promises.
　ア. matching　イ. unrelated to　ウ. not in agreement with　エ. similar to`,
    answer: '① イ(unclear)　② ア(hopeful)　③ ウ(not in agreement with)',
    hint: '①ambiguous=「あいまいな」、②optimistic=「楽観的な」、③inconsistent with=「〜と矛盾する、一致しない」。',
    explanation: `【出題意図】論説文で頻出の抽象的な形容詞（ambiguous, optimistic, inconsistent）の語彙力を問う同意語選択問題。【解説】①ambiguous=「あいまいな、複数の解釈ができる」という意味でunclear（不明瞭な）に近い。「教授の主張はかなりあいまいだったので、多くの学生が誤解した」という文脈。②optimistic=「楽観的な」という意味でhopeful（希望に満ちた）に近い。「挫折にもかかわらず、チームは勝利の可能性について楽観的なままだった」という文脈。③inconsistent with〜=「〜と矛盾する、一致しない」という意味でnot in agreement with〜に近い。「政府の新しい政策は、以前の約束と矛盾するとして広く批判された」という文脈。【注意点】①convincing（説得力のある）はambiguousの逆に近い意味になるので注意。②pessimistic（悲観的な）と混同しないこと。③consistent with（〜と一致する）とinconsistent with（〜と矛盾する）は接頭辞in-の有無で意味が正反対になる。【関連知識】ambiguous⇔clear、optimistic⇔pessimistic、consistent⇔inconsistentという対義語のペアも合わせて整理して覚える。`,
    pitfall: '③でmatchingやsimilar toを選ぶと、inconsistent with（矛盾する）とは正反対の意味になってしまう。',
    memoryTip: 'in-/un-/dis-などの否定の接頭辞が付くと意味が反転することを意識し、consistent⇔inconsistentのペアで覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_031',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Facial recognition technology is now used at airports, in shops, and even at school entrances, allowing machines to identify individuals within seconds. Supporters argue that the technology makes daily life more convenient and can improve safety by quickly identifying people who are not permitted to enter a building. Critics, however, point out that such systems often collect and store personal data without people being fully aware of it, raising serious questions about privacy. Several countries have begun drafting laws that require companies to explain clearly how the collected data will be used and to obtain consent before storing an individual's image, reflecting a growing recognition that convenience should not come at the expense of personal privacy.`,
    question: `次の英文を読み、設問①〜③に答えなさい。

① 顔認証技術の支持者（Supporters）が挙げている利点を2点、日本語でまとめよ。
② 批判者（Critics）が指摘している問題点は何か、日本語で答えよ。
③ 本文最終文が示している考え方として最も適切なものを選べ。
　ア. 便利さのためであれば、個人のプライバシーが多少犠牲になってもやむを得ない。
　イ. 便利さを理由にプライバシーが軽視されるべきではない。
　ウ. 顔認証技術は今後、法律で完全に禁止されるべきだ。`,
    answer: `① ・日常生活をより便利にする。・許可されていない人物を素早く識別することで安全性を高められる。
② 個人データが本人に十分知らされないまま収集・保存されることが多く、プライバシーに関する深刻な問題を引き起こしている。
③ イ`,
    hint: '①本文2文目、②本文3文目「Critics, however, point out that〜」、③本文最終文の「convenience should not come at the expense of personal privacy」に注目。',
    explanation: `【出題意図】顔認証技術とプライバシーをテーマにした賛否対比の論説文読解。利点・問題点の抽出と結論の把握を問う最高レベルの問題。【解説】①本文2文目「the technology makes daily life more convenient and can improve safety by quickly identifying people who are not permitted to enter a building」から2点をまとめる。②本文3文目「such systems often collect and store personal data without people being fully aware of it, raising serious questions about privacy」から、本人が知らないままデータが集められる点が問題だとわかる。③本文最終文「reflecting a growing recognition that convenience should not come at the expense of personal privacy」＝「便利さのためにプライバシーが犠牲にされるべきではないという認識が広がっている」という内容と一致するのはイ。【注意点】"come at the expense of〜"は「〜を犠牲にして成り立つ」という意味の重要イディオムで、この部分の理解が③の正答を導く鍵になる。【関連知識】facial recognition（顔認証）、consent（同意）、at the expense of〜（〜を犠牲にして）はAI・プライバシーをテーマにした英文の頻出語彙。`,
    pitfall: '③でアを選んでしまうと、本文最終文の"should not come at the expense of"（犠牲にされるべきではない）という否定表現を読み違えたことになる。',
    memoryTip: 'at the expense of〜＝「〜を犠牲にして」、should not come at the expense of〜＝「〜を犠牲にすべきではない」とセットで覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_032',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（35語以上）

「テクノロジーが便利になればなるほど、私たちは実際に人と顔を合わせて話すことの大切さを忘れがちだと思う。もし私が学校のルールを一つ変えられるとしたら、生徒が休み時間にスマートフォンを使わず友達と話す時間を作るだろう。」`,
    answer: `（解答例）I think that the more convenient technology becomes, the more we tend to forget the importance of talking to people face to face. If I could change one school rule, I would create a time when students talk with their friends without using smartphones during break time.（46語）

（別解）The more convenient technology gets, the easier it is for us to forget how important it is to talk with people in person, I believe. If I were allowed to change just one school rule, I would make a rule that encourages students to spend break time talking with friends instead of using their smartphones.（52語）`,
    hint: '「〜すればするほど…」→the+比較級, the+比較級構文。「もし〜変えられるとしたら」→仮定法過去（If I could change〜, I would〜）。',
    explanation: `【出題意図】the+比較級, the+比較級構文と仮定法過去を組み合わせた高難度の英作文。【解説】「テクノロジーが便利になればなるほど、〜を忘れがちだ」→the more convenient technology becomes, the more we tend to forget〜という「the+比較級, the+比較級」の構文で表す。「もし私が〜変えられるとしたら」→現在の事実に反する仮定なので仮定法過去：If I could change one school rule, I would create〜。【注意点】「the+比較級, the+比較級」構文は、前半・後半とも比較級を文頭に置く倒置的な語順になる点に注意（technology becomes more convenientのような通常の語順にしない）。【関連知識】face to face（顔を合わせて、対面で）、in person（直接会って）は「対面でのコミュニケーション」を表す頻出表現。`,
    pitfall: 'If I can change one school ruleのように直説法にすると、仮定法過去が表す「実際には変えられない」というニュアンスが失われる。',
    memoryTip: 'the+比較級+S+V, the+比較級+S+V＝「〜すればするほど、ますます…」という構文をワンセットで覚える。',
  },
  {
    id: 'koko_kanto2026_eigo_033',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

Little (　) that her decision would change the course of the entire project.

ア. she knew　イ. did she know　ウ. she did know　エ. had she known`,
    answer: 'イ(did she know)',
    hint: '否定的な意味を持つLittleが文頭に来ると、後ろは疑問文と同じ倒置の語順になる。',
    explanation: `【出題意図】否定的な意味を持つ副詞Littleが文頭に出た場合の倒置構文を問う、本セット最終の総合問題。【解説】Little（ほとんど〜ない）は、それ自体に否定的な意味を含む副詞で、文頭に置かれると「Little+did/does/do+主語+動詞の原形」という倒置の語順になる。ここでは過去の文脈なのでdid she knowが正しい。「彼女の決断がプロジェクト全体の行く末を変えることになるとは、彼女はほとんど知らなかった（＝夢にも思わなかった）」という意味。【注意点】she knewのような通常語順にしないこと。Littleのように否定的な意味を持つ副詞（Never, Rarely, Seldom, Hardly, Little等）が文頭に来る場合は必ず倒置が起こる。【関連知識】Little did+主語+動詞の原形は「〜とは夢にも思わなかった」という意味で物語や新聞記事の書き出しによく使われる表現。had she knownは仮定法過去完了の倒置形であり、本問のような単純過去の事実を述べる文脈には合わない。`,
    pitfall: 'had she knownを選ぶと仮定法（もし知っていたら）の意味になってしまい、実際に起きた事実を述べる本文の意味とずれる。',
    memoryTip: 'Little/Never/Rarely/Hardly等の否定的副詞が文頭→倒置（did/does/do+S+原形）と、本セット全体を通じて繰り返し出てきた「倒置」のルールを最終確認する。',
  },
];
