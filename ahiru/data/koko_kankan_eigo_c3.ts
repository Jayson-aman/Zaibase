import type { Question } from './questions';

export const kokoKankanEigoC3: Question[] = [
  // ============================================================
  // Q01–Q08: 基礎（difficulty: 'basic'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_c3_01',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: Did you finish the science report?
B: (　)
A: Me too. Let's ask the teacher for one more day.

ア. Yes, I handed it in yesterday.
イ. No, not yet. I still need to write the conclusion.
ウ. I don't have science class today.
エ. She already checked my report.`,
    answer: 'イ(No, not yet. I still need to write the conclusion.)',
    hint: 'Aの最後の発言「Me too（私も）」に注目し、Bも終わっていない状況を選ぶ。',
    explanation: `【出題意図】学校生活（課題・レポート）に関する会話の流れを把握する問題。【解説】Aが最後に「Me too. Let's ask the teacher for one more day.（私も。先生にもう1日お願いしよう）」と言っているので、Bも報告書が終わっていないとわかる。イ「まだです、結論を書く必要があります」が唯一この流れに合う。ア・エは「終わった」という内容で矛盾し、ウは話がかみ合わない。【注意点】「Me too」は直前の発言に同意する表現なので、直前の内容が「終わっていない」でなければならない。【関連知識】not yet（まだ〜ない）、hand in（提出する）、conclusion（結論）は学校英語の頻出語彙。`,
    pitfall: 'アを選ぶと「終わった」内容になり、後のMe too（私も終わっていない）と矛盾する。',
    memoryTip: '「Me too」の後には直前の発言と同じ内容が続くと考えて逆算する。',
  },
  {
    id: 'koko_kankan_eigo_c3_02',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を選びなさい。

① Our school festival was (　) an exciting event that we still talk about it.（私たちの学園祭は、今でも話題になるほどわくわくする行事だった）
② There were (　) many food stalls in the schoolyard.（校庭にはとても多くの屋台があった）
③ I had (　) fun that I want to join again next year.（とても楽しかったので来年もまた参加したい）

ア. so　イ. very　ウ. such`,
    answer: '① ウ(such)　② ア(so)　③ ウ(such)',
    hint: 'such+a/an+形容詞+名詞、such+（無冠詞の）名詞、so+形容詞（+that）の違いを確認する。',
    explanation: `【出題意図】such とso の使い分け（後ろに名詞を伴うかどうか）を問う。【解説】①後ろに「an+形容詞+名詞」（an exciting event）が続くのでsuch（soやveryは a/an+形容詞+名詞の直前には置けない）。②後ろは形容詞many単独＋名詞stallsだが、manyは数量形容詞でso many+名詞の形が定着表現なのでso。③funは裸の名詞（不可算名詞）なので、such+名詞の形でsuch funとする（so funは形容詞ではない名詞funには使えない）。【注意点】such a/an+形容詞+名詞、such+（無冠詞の）名詞、so+形容詞（+名詞なし）が基本ルール。so many/so muchは例外的に名詞を伴う定着表現。【関連知識】such a nice day、so difficult a question（倒置的表現）なども発展的に押さえる。`,
    pitfall: '②をsuch many とするのは誤り。so many/so muchは決まった言い方。③をso funとするのも誤り。funは名詞なのでsuch funが正しい。',
    memoryTip: 'such+a(n)+形容詞+名詞／such+裸の名詞、so+形容詞、ただしso many/so muchは例外と覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_03',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ you / to / are / going / what / do ] this summer?
  （この夏、あなたは何をするつもりですか）

② [ homework / my / I / finished / have / not ] yet.
  （私はまだ宿題を終えていない）`,
    answer: `① What are you going to do this summer?
② I have not finished my homework yet.`,
    hint: '①be going to（〜するつもりだ）の疑問文、②現在完了の否定文＋yet。',
    explanation: `【出題意図】未来表現（be going to）の疑問文と現在完了の否定文の語順を問う。【解説】①「What+be動詞+主語+going to+動詞原形」の語順。疑問詞Whatを文頭に置く。②現在完了の否定文はhave/has+not+過去分詞。「yet」は否定文の文末で「まだ」の意味。【注意点】①のare you going toの語順を崩さない。②not yetは「まだ〜ない」、already yetは肯定文で使う点との違いに注意。【関連知識】be going toは「すでに決まっている予定」、willは「その場での決定」に使い分ける。`,
    pitfall: '②をI have finished my homework not yetとするのは語順の誤り。notはhaveの直後。',
    memoryTip: '現在完了の否定：have/has + not + 過去分詞、文末にyetを置く。',
  },
  {
    id: 'koko_kankan_eigo_c3_04',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の各組の文がほぼ同じ意味になるように（　）に適語を入れなさい。

① My brother is younger than me.
  I am (　) (　) my brother.

② Ken runs faster than any other student in his class.
  Ken runs the (　) in his class.`,
    answer: '① older than　② fastest',
    hint: '①比較の主語を入れ替えると反対の意味の形容詞を使う。②「他のどの〜より…」は最上級と同意。',
    explanation: `【出題意図】比較級の書き換え（主語の入れ替え）と、「比較級+than any other」と最上級の同意表現を問う。【解説】①「弟は私より年下」→「私は弟より年上」に書き換えるのでyounger→olderに変え、比較の対象を入れ替える。②「他のどの生徒よりも速く走る」は「クラスで一番速く走る」と同意→最上級fastest。【注意点】①は形容詞そのものを反対語に変える点が最大のポイント（than以下の語順も入れ替わる）。【関連知識】比較級+than any other+単数名詞＝最上級と同意という書き換えパターンは頻出。`,
    pitfall: '①をI am younger than my brotherのままにするのは誤り（意味が変わってしまう）。',
    memoryTip: '主語を入れ替える書き換えでは、形容詞も反対語に変えることを忘れない。',
  },
  {
    id: 'koko_kankan_eigo_c3_05',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① I have (　) to Kyoto twice.（私は京都に2回行ったことがある）
② Have you ever (　) natto before?（今までに納豆を食べたことがありますか）
③ She has never (　) abroad.（彼女は一度も海外へ行ったことがない）

語群：been / eaten / gone`,
    answer: '① been　② eaten　③ been',
    hint: '「行ったことがある」経験用法はhave been to、eatの過去分詞はeaten。',
    explanation: `【出題意図】現在完了（経験用法）でのbeenとgoneの使い分け、動詞の過去分詞形を問う。【解説】①③「〜へ行ったことがある」という経験はhave been to〜を使う（have goneは「行ってしまって今ここにいない」という意味になるため経験用法には使えない）。②eatの過去分詞はeaten。【注意点】have gone toは「行ってしまい、今は不在」を表すので、経験を尋ねる文脈ではbeenを使うのが原則。【関連知識】経験用法でよく使う副詞：ever、never、before、once/twice/〜times。`,
    pitfall: '①③をhave/has goneとすると「行ってしまっていない」という意味になり経験を表せない。',
    memoryTip: '経験の「行ったことがある」はbeen、「行ってしまった（不在）」はgoneと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_06',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文の誤りを1か所指摘し、正しく直しなさい。

① I am interesting in Japanese history.
② This news made me exciting.
③ The movie was very boring, so I felt bored.`,
    answer: `① interesting → interested（人が「興味を持つ」はinterested）
② exciting → excited（人が「興奮する」はexcited）
③ 誤りなし（bored/boringの使い分けが正しい）`,
    hint: '感情を表す分詞形容詞は、人が主語→p.p.（-ed）、物・事が主語→-ing。',
    explanation: `【出題意図】感情を表す分詞形容詞（-ing形と-ed形）の使い分けを問う誤文訂正問題。【解説】①「私が興味を持っている」→人が主語なのでinterested。②「そのニュースが私を興奮させた」で目的語meが「興奮させられる」側なのでexcited。③「映画がとても退屈だった（物が主語）」→boring、「私は退屈に感じた（人が主語）」→bored、と両方正しく使い分けられている。【注意点】-ing形は「（人や物に）〜させる性質を持つ」、-ed形は「（感情を）〜させられた」状態を表す。【関連知識】tired/tiring、surprised/surprising、bored/boringなど感情動詞の分詞形容詞は入試最頻出。`,
    pitfall: '①をI am interesting（私はおもしろい人間だ）と読むと文意がずれることに注意。',
    memoryTip: '主語が人→ed形（感じる側）、主語が物・事→ing形（させる側）と覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_07',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① Could you tell me (　) to get to the station?（駅への行き方を教えていただけますか）
② I don't know (　) to say to her.（彼女に何と言えばいいのかわかりません）
③ Please tell me (　) time to leave home.（何時に家を出ればいいか教えてください）`,
    answer: '① how　② what　③ what',
    hint: '疑問詞+to不定詞の形。「行き方」→how to、「何を言うか」→what to、「何時に」→what time to。',
    explanation: `【出題意図】「疑問詞+to不定詞」の基本形（how to / what to / what time to）を問う。【解説】①「どうやって〜するか」→how to get。②「何を言うか」→what to say。③「何時に〜するか」→what time to leave。すべて「疑問詞+to+動詞原形」で名詞句を作り、tell/knowの目的語になる。【注意点】疑問詞+to doは「疑問詞+主語+should+動詞原形」とほぼ同意（例：what to say=what I should say）。【関連知識】where to go（どこへ行くべきか）、which to choose（どちらを選ぶべきか）もセットで押さえる。`,
    pitfall: '①をwhat to getとすると「何を得るか」になり、道案内の文脈に合わない。',
    memoryTip: '疑問詞+to do=「疑問詞+すべきか」と覚えて意味から逆算する。',
  },
  {
    id: 'koko_kankan_eigo_c3_08',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私は友達に手伝ってもらった。
  I (　) my friend (　) me.
② 母は私に部屋を掃除させた。
  My mother (　) me (　) my room.

語群：had / clean / helped / help`,
    answer: '① had, help　② had, clean',
    hint: '「have+人+動詞原形」＝人に〜してもらう／させる（使役動詞）。',
    explanation: `【出題意図】使役動詞haveの用法（have+O+動詞原形）を問う。【解説】①「友達に手伝ってもらった」→had my friend help me（have+人+動詞原形＝〜してもらう）。②「母は私に部屋を掃除させた」→had me clean my room（have+人+動詞原形＝〜させる）。どちらもhaveの後は動詞原形（原形不定詞）を使う点が共通。【注意点】makeは「強制的に〜させる」、haveは「頼んで〜してもらう／当然のこととして〜させる」、letは「〜させてあげる（許可）」とニュアンスが異なる。【関連知識】get+人+to doも同様の意味を表すが、こちらはto不定詞を使う（get my friend to help me）。`,
    pitfall: '②をhad me to cleanとするのは誤り。使役のhaveの後はto不定詞ではなく動詞原形。',
    memoryTip: 'have/make/let+O+動詞原形（原形不定詞）とget+O+to doをセットで区別する。',
  },

  // ============================================================
  // Q09–Q22: 標準（difficulty: 'standard'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_c3_09',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: Have you decided which club to join?
B: Not yet. I'm interested in both the brass band and the tennis club.
A: (　)
B: That's a good idea. I'll ask them tomorrow.

ア. Why don't you ask some members about both clubs?
イ. I already joined the brass band.
ウ. You should quit the tennis club.
エ. I don't think clubs are important.`,
    answer: 'ア(Why don\'t you ask some members about both clubs?)',
    hint: 'Bの返答「That\'s a good idea（それはいい考えだ）」に自然につながる提案を選ぶ。',
    explanation: `【出題意図】部活動選びという学校生活の話題での会話文脈の把握を問う。【解説】Bが迷っている状況で、Aの発言の後にBが「That's a good idea. I'll ask them tomorrow.（いい考えだね、明日聞いてみる）」と答えているので、Aは何かを尋ねることを提案したはず。ア「両方の部の部員に聞いてみたら？」がWhy don't you〜?（〜してはどうですか）という提案表現でぴったり合う。【注意点】Why don't you〜?は「〜してはどうですか」という提案の定型表現。イ・ウ・エはいずれも後続のBの発言と矛盾する。【関連知識】提案表現：Why don't you〜? / How about〜ing? / You should〜。`,
    pitfall: 'イを選ぶと「もう入部した」ことになり、Bの「明日聞いてみる」という発言と矛盾する。',
    memoryTip: 'Why don\'t you〜?＝提案。後ろの返答が賛同（good idea）なら提案文が入ると判断する。',
  },
  {
    id: 'koko_kankan_eigo_c3_10',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、分詞構文を完成させなさい。

① (　) tired from club activities, she went to bed early.
  （部活動で疲れていたので、彼女は早く寝た）

② (　) in simple English, the story is easy to read.
  （簡単な英語で書かれているので、その物語は読みやすい）

③ Not (　) what to say, I kept silent.
  （何を言えばいいかわからなかったので、私は黙っていた）`,
    answer: '① Being　② Written　③ knowing',
    hint: '①受動的な状態（be tired）の分詞構文はBeing。②受動の意味はp.p.で始める。③否定はNot+分詞。',
    explanation: `【出題意図】分詞構文（能動・受動・否定）の基本形を問う。【解説】①「疲れていたので」＝Because she was tired→Beingを補って分詞構文にする（Being tired）。②「書かれているので」＝受動の意味なのでBeingを省略した形（Written in simple English）。③「わからなかったので」＝Because I did not know→分詞構文の否定はNot+doing（Not knowing）。【注意点】受動態の分詞構文はBeing+p.p.のBeingが省略されてp.p.のみで始まることが多い（②のWritten）。【関連知識】分詞構文の意味は「時・理由・条件・付帯状況」など文脈で判断する。`,
    pitfall: '③をNot knew what to sayとするのは誤り。分詞構文の否定はNot+doing（原形ではなくing形）。',
    memoryTip: '分詞構文の否定は必ずNotを分詞の直前に置く（Not+doing/done）。',
  },
  {
    id: 'koko_kankan_eigo_c3_11',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ is / more / important / than / health ] money.
  （健康はお金より大切だ）

② [ how / know / to / I / use / don't ] this new tablet.
  （私はこの新しいタブレットの使い方がわからない）

③ [ was / so / the / that / test / difficult ] many students failed it.
  （そのテストはとても難しかったので多くの生徒が落ちた）`,
    answer: `① Health is more important than money.
② I don't know how to use this new tablet.
③ The test was so difficult that many students failed it.`,
    hint: '①比較級+than、②疑問詞+to不定詞、③so〜that構文。',
    explanation: `【出題意図】比較級・疑問詞+to不定詞・so〜that構文の語順整序を問う。【解説】①「Health is more important than money」＝比較級の基本語順（主語+be動詞+比較級+than+比較対象）。②「how to use」＝「〜の使い方」という疑問詞+to不定詞の名詞句。③「so+形容詞+that+S+V」＝「とても〜なので…」。【注意点】①はmore importantを分離しない（importantより先にmoreを置く）。③はso difficult thatのようにsoとthatをセットで扱う。【関連知識】タブレット・ICT機器は現代の学校生活で頻出のテーマ語彙。`,
    pitfall: '③をthe test was difficult so thatとすると語順が誤り。soは形容詞の直前に置く。',
    memoryTip: 'so+形容詞+that+結果、too+形容詞+to do+目的、の形を混同しないよう区別する。',
  },
  {
    id: 'koko_kankan_eigo_c3_12',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な関係代名詞を入れなさい。省略できる場合は「省略可」と書きなさい。

① The book (　) is on the desk belongs to my sister.
  （机の上にある本は私の姉のものだ）

② The girl (　) I met at the library was very kind.
  （図書館で会った女の子はとても親切だった）

③ This is the school (　) my father graduated from.
  （これは私の父が卒業した学校だ）`,
    answer: '① which (that)　② who(m) (that) 省略可　③ which (that) 省略可',
    hint: '①主格（先行詞は物）、②目的格（先行詞は人）、③目的格（先行詞は物、前置詞fromが残る）。',
    explanation: `【出題意図】関係代名詞の格（主格・目的格）と先行詞の種類（人・物）による使い分け、省略可否を問う。【解説】①先行詞the book（物）が主語の働き→主格which(that)。主格は省略不可。②先行詞the girl（人）が目的語の働き→目的格who(m)(that)。目的格は省略可能。③先行詞the school（物）で「graduated from the school」のfromが後ろに残った形→目的格which(that)。省略可能。【注意点】主格の関係代名詞は動詞の前に置かれ省略できない。目的格は動詞・前置詞の目的語になり省略できる。【関連知識】前置詞+関係代名詞（from which）にまとめる書き換えも重要（This is the school from which my father graduated.）。`,
    pitfall: '①を省略可とするのは誤り。主格の関係代名詞は省略できない。',
    memoryTip: '主格＝省略不可、目的格＝省略可、と役割で判断する。',
  },
  {
    id: 'koko_kankan_eigo_c3_13',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読み、設問に答えなさい。

Many schools in Japan have started to allow students to use smartphones for learning. Teachers use apps to share materials, and students can look up words or check schedules easily. However, some parents worry that smartphones may distract students from studying. Schools are now creating rules about when and how devices can be used.

① Why do some parents worry about smartphones at school?（英語で答えよ）
② 下線部「distract」の意味を日本語で答えよ。
③ 本文の内容と合うものを選べ。
  ア. すべての学校がスマートフォンの使用を禁止している。
  イ. 学校はスマートフォン使用のルールを作り始めている。
  ウ. 生徒はスマートフォンを勉強に使うことを禁じられている。`,
    answer: `① Because smartphones may distract students from studying.
② 〜の気を散らす・〜の集中をそらす
③ イ`,
    hint: '①本文3文目「some parents worry that〜」、②distract=気をそらす、③本文最終文に注目。',
    explanation: `【出題意図】学校でのスマートフォン利用をテーマにした短文読解（理由・語彙・内容一致）を問う。【解説】①「some parents worry that smartphones may distract students from studying」から理由を抜き出す。②distract=「（注意・集中を）そらす、妨げる」。③本文最終文「Schools are now creating rules about when and how devices can be used.」と合致するのはイ。アは「すべて禁止」という記述がなく誤り、ウは本文の内容（学習に活用している）と矛盾する。【注意点】「否定・禁止」を表す選択肢は本文に明確な根拠がない限り選ばない。【関連知識】ICT教育語彙：device（端末）、app（アプリ）、schedule（予定）、rule（規則）。`,
    pitfall: 'アを選ぶと「すべての学校で禁止」という誤った一般化になる。本文は一部の学校の話。',
    memoryTip: 'distract=dis（離れて）+tract（引く）→「注意を引き離す」とイメージして覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_14',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切なイディオムを入れなさい。

① Our team should (　) each other to win the game.（私たちのチームは試合に勝つためにお互いを助け合うべきだ）
   ア. take off  イ. count on  ウ. give up

② I need to (　) my mistake before the teacher notices.（先生が気づく前に間違いを直す必要がある）
   ア. put off  イ. work out  ウ. correct

③ She decided to (　) the debate club after watching the tournament.（彼女は大会を見た後、ディベート部に入ることに決めた）
   ア. join  イ. leave  ウ. skip`,
    answer: '① イ(count on)　② ウ(correct)　③ ア(join)',
    hint: 'count on=頼りにする、correct=訂正する、join=参加する・入部する。',
    explanation: `【出題意図】学校生活・部活動に関する頻出動詞・イディオムの意味を問う。【解説】①count on〜=「〜を頼りにする、当てにする」。rely on〜も同意表現。②correct=「（間違いを）訂正する」。fix a mistakeとも言い換え可能。③join=「（部活・クラブに）参加する、入る」。【注意点】take off（脱ぐ・離陸する）、give up（あきらめる）、put off（延期する）、work out（うまくいく・運動する）、leave（去る・辞める）、skip（欠席する・飛ばす）などの意味も混同しないよう区別する。【関連知識】部活動関連の頻出表現：join a club（入部する）、quit a club（退部する）、take part in〜（〜に参加する）。`,
    pitfall: '①をrely onと混同してtake offを選ばないこと。take offは全く異なる意味。',
    memoryTip: 'count on=カウント（数える）→「数に入れて頼る」とイメージすると覚えやすい。',
  },
  {
    id: 'koko_kankan_eigo_c3_15',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文の誤りを1か所指摘し、正しく直しなさい。

① I look forward to hear from you soon.
② She is used to studying late at night, so she doesn't feel tired.
③ Neither of the students were absent yesterday.`,
    answer: `① to hear → to hearing（look forward to+動名詞）
② 誤りなし（be used to+動名詞が正しく使われている）
③ were → was（Neither of〜は単数扱い）`,
    hint: 'look forward to+動名詞、Neither of+複数名詞は単数扱いで動詞は単数形。',
    explanation: `【出題意図】頻出誤文訂正パターン（look forward to+動名詞、Neither ofの数の一致）を問う。【解説】①look forward to〜のtoは前置詞なので後ろは動名詞（hearing）。to不定詞と混同しやすい頻出ポイント。②be used to+動名詞（〜することに慣れている）が正しく使われており誤りなし。③Neither of the studentsは意味上「どちらの生徒も〜ない」で単数扱い→be動詞はwas。【注意点】①のlook forward toは「楽しみにする」という意味の頻出表現で、toの後は必ず動名詞。③Neither/Eitherは単数扱いが原則（口語ではwereも使われるが文法問題ではwasが正解）。【関連知識】be committed to、be dedicated to、be opposed toなども同様にtoの後は動名詞。`,
    pitfall: '①をto不定詞のままにしないこと。look forward toのtoは前置詞。',
    memoryTip: 'look forward to+ing、be used to+ing、object to+ingの「to=前置詞」グループを覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_16',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、間接疑問文を完成させなさい。

① Do you know (　) this word means?（この単語が何を意味するか知っていますか）
② I wonder (　) will win the speech contest.（誰がスピーチコンテストで優勝するのだろう）
③ Please tell me (　) the club activity (　) start.（部活動がいつ始まるか教えてください）`,
    answer: '① what　② who　③ when, will (does)',
    hint: '間接疑問文は「疑問詞+主語+動詞」の語順になる（疑問文の倒置をしない）。',
    explanation: `【出題意図】間接疑問文の語順（疑問詞+主語+動詞、疑問文の倒置をしない）を問う。【解説】①「What does this word mean?」→間接疑問ではwhat this word meansの語順（doは消える）。②「Who will win〜?」のwhoが主語の場合は間接疑問でも語順が変わらない（who will win）。③「When will the club activity start?」→間接疑問ではwhen the club activity will startの語順。【注意点】疑問詞が主語の場合（②）は普通の疑問文と間接疑問文で語順が変わらない点に注意。①③は疑問詞が主語でないため、主語+動詞の平叙文の語順に戻す。【関連知識】間接疑問文はknow/wonder/tell/askなどの動詞の目的語としてよく使われる。`,
    pitfall: '①をwhat does this word meanのままにするのは誤り。間接疑問ではdoesを使わない。',
    memoryTip: '間接疑問文は「疑問詞の後は普通の文の語順（主語+動詞）」と覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_17',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話文を読み、設問に答えなさい。

A: Our English speech contest is next Friday. Are you ready?
B: Not really. I've written my script, but I haven't practiced enough.
A: Why don't we practice together after school?
B: That sounds great. Thanks for the offer.

① Aの提案は何か。（日本語で答えよ）
② Bが今困っていることは何か。（英語で答えよ）`,
    answer: `① 放課後に一緒に練習しようという提案。
② She (He) hasn't practiced her (his) speech script enough.`,
    hint: '①Why don\'t we〜?の内容、②Bの2番目の発言「I haven\'t practiced enough」に注目。',
    explanation: `【出題意図】スピーチコンテストという学校行事を題材にした会話文の内容把握を問う。【解説】①「Why don't we practice together after school?」＝「放課後一緒に練習しない？」という提案。②Bは「I've written my script, but I haven't practiced enough.」と述べており、原稿は書いたが練習が足りていないことが悩みだとわかる。【注意点】Why don't we〜?は「〜しませんか」という一緒に行動する提案の定型表現（Why don't you〜?は相手への提案）。【関連知識】speech contest関連語彙：script（原稿）、practice（練習する）、offer（申し出）。`,
    pitfall: '②を「原稿を書いていない」と答えるのは誤り。原稿は書き終えている（練習不足が問題）。',
    memoryTip: 'Why don\'t we〜?=「一緒に〜しよう」、Why don\'t you〜?=「あなたが〜したら」と主語で区別する。',
  },
  {
    id: 'koko_kankan_eigo_c3_18',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、付加疑問文を完成させなさい。

① You are a member of the art club, (　) (　)?
② She doesn't like natto, (　) (　)?
③ Let's go to the library, (　) (　)?`,
    answer: '① aren\'t you　② does she　③ shall we',
    hint: '肯定文→否定の付加疑問、否定文→肯定の付加疑問、Let\'s〜→shall we?',
    explanation: `【出題意図】付加疑問文の作り方（肯定⇄否定の反転、Let'sの特別ルール）を問う。【解説】①肯定文（You are〜）→否定の付加疑問（aren't you?）。②否定文（She doesn't like〜）→肯定の付加疑問（does she?）。③Let's〜（勧誘文）の付加疑問は特別にshall we?を使う。【注意点】付加疑問文は前の文が肯定なら否定形、否定なら肯定形を後ろに付ける。動詞の種類（be動詞・一般動詞・助動詞）に応じてdo/does/did/be動詞/助動詞を使い分ける。【関連知識】命令文の付加疑問はwill you?（例：Close the door, will you?）。`,
    pitfall: '③をdo weとするのは誤り。Let\'s〜の付加疑問は必ずshall we。',
    memoryTip: '肯定→否定、否定→肯定の反転ルールと、Let\'s→shall we?の例外を覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_19',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合う英文になるよう（　）に適語を入れなさい。

① 私たちの学校では毎年文化祭が開催される。
  The school festival (　) held every year at our school.

② 私はこの前の日曜日、ずっと勉強していた。
  I (　) studying all day last Sunday.

③ この問題は生徒たちにとって解くのが難しい。
  This problem is difficult for students (　) (　).`,
    answer: '① is　② was　③ to solve',
    hint: '①受動態、②過去進行形、③形容詞+for+人+to do。',
    explanation: `【出題意図】受動態・過去進行形・形容詞+for+人+to doの複合的な文法運用を問う。【解説】①「開催される」＝受動態is held。②「ずっと勉強していた」＝過去のある時点で継続していた動作なので過去進行形was studying（be動詞+動詞-ing）。③「解くのが難しい」＝difficult for students to solve（形容詞+for+人+to do）。【注意点】②は「be動詞+動詞-ing」の過去進行形の形をそのまま当てはめる。【関連知識】文化祭（school festival）、体育祭（sports festival）は学校行事の頻出語彙。`,
    pitfall: '③をdifficult for students solving とすると誤り。for+人の後はto不定詞。',
    memoryTip: '形容詞（easy/difficult/important等）+for+人+to do の型を暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c3_20',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語（句）を選びなさい。

① I have known her (　) we were in elementary school.
  ア. for　イ. since　ウ. when

② By the time the meeting starts, I (　) my presentation.
  ア. will finish　イ. finish　ウ. will have finished

③ The number of students who use e-books (　) increasing.
  ア. is　イ. are　ウ. have been`,
    answer: '① イ(since)　② ウ(will have finished)　③ ア(is)',
    hint: '①起点を表すsince、②未来完了、③the number of〜は単数扱い。',
    explanation: `【出題意図】since/forの使い分け、未来完了、the number of〜の数の一致を問う複合問題。【解説】①「小学生の頃から」という起点（we were in elementary school＝過去の一時点）を表すのでsince。forは期間の長さ（for five years等）に使う。②「会議が始まるまでに発表を終えているだろう」＝未来のある時点までに完了している動作なので未来完了will have finished。③「the number of〜（〜の数）」は単数扱いでbe動詞はis。「a number of〜（多くの〜）」は複数扱いという違いに注意。【注意点】the number of と a number ofの区別は頻出の引っかけ。【関連知識】by the time〜（〜するまでには）は未来完了・過去完了と相性がよい接続詞。`,
    pitfall: '③をare としないこと。a number of（多くの）と the number of（〜の数）を混同しない。',
    memoryTip: 'the number of=単数、a number of=複数、と冠詞の違いで判別する。',
  },
  {
    id: 'koko_kankan_eigo_c3_21',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読み、設問に答えなさい。

Reducing plastic waste has become an important topic at schools. Some students have started bringing their own water bottles instead of buying plastic ones. Teachers also encourage students to bring reusable bags for school events. These small actions can make a big difference over time.

① What are two examples of actions students take to reduce plastic waste?（英語で答えよ）
② 下線部「make a big difference」の意味を日本語で答えよ。`,
    answer: `① Bringing their own water bottles instead of buying plastic ones, and bringing reusable bags for school events.
② 大きな違いを生む・大きな効果をもたらす`,
    hint: '①本文2文目・3文目、②make a differenceは「変化・効果を生む」という意味の熟語。',
    explanation: `【出題意図】環境問題（プラスチックごみ削減）をテーマにした読解問題。情報抽出と熟語の意味把握を問う。【解説】①本文2文目「bringing their own water bottles instead of buying plastic ones」と3文目「bring reusable bags for school events」の2つの行動を答える。②make a difference=「違いを生む、効果をもたらす」。a bigが付くことで「大きな効果」を意味する。【注意点】①は「2つ」を明確に分けて答えることが求められている。【関連知識】環境語彙：reduce（減らす）、reusable（再利用可能な）、plastic waste（プラスチックごみ）、sustainability（持続可能性）。`,
    pitfall: '①で1つだけ答えて終わらないこと。設問で「two examples」と明示されている。',
    memoryTip: 'make a difference=「差を作る」→「効果・変化をもたらす」と直訳から意味を導く。',
  },
  {
    id: 'koko_kankan_eigo_c3_22',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ the / student / that / spoke ] first was very nervous.
  （最初に話した生徒はとても緊張していた）

② [ me / could / you / tell / where ] the gym is?
  （体育館がどこにあるか教えていただけますか）`,
    answer: `① The student that spoke first was very nervous.
② Could you tell me where the gym is?`,
    hint: '①関係代名詞thatを使った文構造、②Could you tell me+間接疑問文（語順注意）。',
    explanation: `【出題意図】関係代名詞thatの主格用法と、Could you tell me+間接疑問文の語順を問う。【解説】①「The student that spoke first」＝「最初に話した生徒」。thatは主格の関係代名詞で先行詞the studentを修飾。②「Could you tell me where the gym is?」＝丁寧な依頼表現+間接疑問文（where+主語+be動詞の語順）。【注意点】②をCould you tell me where is the gym?としないこと。間接疑問文は疑問文の倒置をしない。【関連知識】依頼の丁寧表現：Could you tell me〜? / Would you mind telling me〜?も類似表現として押さえる。`,
    pitfall: '②をwhere is the gymの語順のままにすると間接疑問文の語順ミスになる。',
    memoryTip: '間接疑問文＝「疑問詞+主語+動詞」、普通の疑問文の倒置をしないと徹底する。',
  },

  // ============================================================
  // Q23–Q50: 発展（difficulty: 'advanced'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_c3_23',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えなさい。

Many high schools in Japan have introduced tablet devices for every student. Supporters say tablets make lessons more interactive, allow students to access materials instantly, and reduce the amount of paper used. Critics, however, argue that constant screen exposure may harm students' eyesight and that some students use tablets for games instead of studying during class.

① What are two benefits of tablets mentioned by supporters?（英語で答えよ）
② 批判者が挙げている懸念点を日本語で2点まとめよ。
③ 下線部「constant screen exposure」の意味を日本語で答えよ。`,
    answer: `① They make lessons more interactive, and they allow students to access materials instantly. (also reduce paper use)
② ・画面を常に見続けることで視力に悪影響を及ぼす可能性がある。・一部の生徒が授業中に勉強ではなくゲームにタブレットを使ってしまう。
③ 常に画面を見続けること（継続的な画面への露出）`,
    hint: '①supporters say〜以下の3点から2点を選ぶ、②critics argue〜以下、③constant=絶え間ない、exposure=さらされること。',
    explanation: `【出題意図】タブレット教育をテーマにした賛否両論の読解問題。情報抽出・語句の意味把握を問う。【解説】①supportersの主張：「make lessons more interactive」「allow students to access materials instantly」「reduce the amount of paper used」の中から2点を選んで答える。②criticsの懸念：「screen exposureが視力に悪影響」「一部の生徒が授業中にゲームに使う」の2点。③constant（絶え間ない）+screen exposure（画面にさらされること）＝「継続的に画面を見続けること」。【注意点】however（しかし）の前後で賛成・反対の立場が分かれる典型的な論説構造。【関連知識】eyesight（視力）、interactive（双方向の）は教育ICT関連の頻出語彙。`,
    pitfall: '①でcriticsの内容を混ぜて答えないこと。設問は「supporters」の利点のみを問うている。',
    memoryTip: 'however の前後で「賛成派の主張」と「批判派の主張」が対比される構造を意識する。',
  },
  {
    id: 'koko_kankan_eigo_c3_24',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① (　) hard she tried, she couldn't solve the last question.
  ア. However　イ. Whatever　ウ. Whenever　エ. Whichever

② (　) you may say, I will join the debate club.
  ア. However　イ. Whatever　ウ. Whoever　エ. Wherever

③ (　) finishes the marathon first will get a medal.
  ア. However　イ. Whatever　ウ. Whoever　エ. Wherever`,
    answer: '① ア(However)　② イ(Whatever)　③ ウ(Whoever)',
    hint: '①However+形容詞/副詞+S+V（どんなに〜でも）、②Whatever=何を〜しようとも、③Whoever=〜する人は誰でも。',
    explanation: `【出題意図】複合関係詞（However/Whatever/Whoever等）の使い分けを問う。【解説】①「どんなに一生懸命努力しても」＝However+形容詞/副詞+S+V（=no matter how）。hardは副詞でtriedを修飾。②「あなたが何と言おうとも」＝Whatever+S+V（=no matter what）。③「マラソンを最初に終える人は誰でも」＝Whoever（=anyone who）が文の主語になる名詞節を作る。【注意点】Howeverは後ろに形容詞・副詞を伴う点がWhatever/Whoeverと構造上異なる。③のWhoeverは名詞節を作り文全体の主語になっている。【関連知識】Whichever（どちらを〜しても）、Wherever（どこで〜しても）も同グループの複合関係詞。`,
    pitfall: '①をWhateverとすると後ろのhard（副詞）の説明が不自然になる。Howeverは形容詞・副詞を伴う。',
    memoryTip: 'However+形容詞/副詞、Whatever/Whoever/Wherever+主語+動詞、と構造の違いで覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_25',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① Not only she is smart but also kind.
② The higher we climbed, the cold it became.
③ It was not until I moved abroad that I realized how important my family is.
④ Almost of the students agreed with the new school rule.`,
    answer: `① Not only she is smart → Not only is she smart（倒置が必要）
② the cold → the colder（比較級の形にする）
③ 誤りなし（It is not until〜that…の強調構文が正しく使われている）
④ Almost of → Almost all of / Most of（almostは副詞で名詞を直接修飾できない）`,
    hint: '①Not only〜で始まる文は倒置、②the+比較級, the+比較級の構文、④almostは副詞で単独でof句を修飾できない。',
    explanation: `【出題意図】倒置構文・比較級構文・強調構文・almostの用法という4つの発展文法項目を問う誤文訂正。【解説】①Not onlyが文頭に来ると疑問文と同じ語順の倒置が起こる（Not only is she smart）。②「the+比較級, the+比較級」構文なので、the coldではなくthe colderにする必要がある。③「It is not until A that B」＝「Aして初めてBだ」の強調構文が正しく使われており誤りなし。④almostは副詞で、名詞句を直接修飾できない。「Almost all of the students」または「Most of the students」に直す。【注意点】④はalmost everyone/almost all+名詞のように「almost+限定詞+名詞」の形にする必要がある点が最頻出の誤り。【関連知識】not only A but also B（AだけでなくBも）、the 比較級 the 比較級（〜すればするほど…）はいずれも入試最頻出構文。`,
    pitfall: '④でalmost studentsやalmost of studentsのようにalmostを名詞に直接つけないこと。',
    memoryTip: 'almostは副詞→名詞を直接修飾できない、almost all/most+名詞にする、と覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_26',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えなさい。

Artificial intelligence (AI) is increasingly used in schools to help students learn at their own pace. AI-based programs can analyze a student's weaknesses and recommend exercises tailored to their needs. Proponents believe this personalized approach could close the achievement gap between students. Skeptics, on the other hand, worry that over-reliance on AI might reduce students' ability to think independently and that data privacy could become a serious issue.

① 下線部「close the achievement gap」とはどういうことか、日本語で答えよ。
② 懐疑論者（Skeptics）が挙げている懸念を2点、日本語でまとめよ。
③ 本文全体の構成として最も適切なものを選べ。
  ア. 賛成意見のみを述べている。
  イ. 反対意見のみを述べている。
  ウ. 賛成意見と反対意見の両方を提示している。`,
    answer: `① AIを活用した個別最適化学習によって、生徒間の学力格差を縮めること。
② ・AIへの過度な依存によって、生徒が自分で考える力（自立的思考力）が低下する恐れがある。・生徒の個人データのプライバシーが深刻な問題になる可能性がある。
③ ウ`,
    hint: '①achievement gap=学力格差、close=縮める、②Skeptics worry that〜以下、③Proponents/Skepticsの対比構造。',
    explanation: `【出題意図】AI教育をテーマにした賛否対比の論説文読解。下線部説明・懸念点の抽出・論説構造の把握を問う最高レベルの問題。【解説】①「close the achievement gap」＝「学力格差を縮める」。AIによる個別学習が生徒間の学力差を埋めるという文脈。②Skepticsの懸念：「over-reliance on AI might reduce students' ability to think independently（AIへの過度な依存で自立的思考力が低下）」と「data privacy could become a serious issue（データプライバシーの問題）」の2点。③Proponents believe〜とSkeptics worry〜の対比構造から、賛成・反対両方を提示するウが正解。【注意点】「achievement gap」は教育格差問題の重要語彙で、closeは「縮める・埋める」という動詞的用法。【関連知識】personalized learning（個別最適化学習）、data privacy（データプライバシー）はAI教育の頻出テーマ語彙。`,
    pitfall: '③をアやイと判断しないこと。ProponentsとSkepticsの両方の意見が提示されている。',
    memoryTip: 'Proponents（賛成派）⇔Skeptics（懐疑派・反対派）の対義語ペアを覚えておく。',
  },
  {
    id: 'koko_kankan_eigo_c3_27',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（25語以上）

「もし私が生徒会長だったら、もっと多くの生徒の意見を聞く仕組みを作るだろう。学校生活をより良くするために、私たち一人ひとりが行動を起こすべきだと思う。」`,
    answer: `（解答例）If I were the student council president, I would create a system to listen to more students' opinions. I believe each of us should take action to make our school life better.（32語）

（別解）If I were the president of the student council, I would make a way for more students to share their opinions. I think we should all try to improve our school life.（33語）`,
    hint: '「もし〜だったら〜だろう」→仮定法過去（If+主語+were/過去形, would+動詞原形）。「〜すべきだと思う」→I believe/think+that節。',
    explanation: `【出題意図】仮定法過去を使った和文英訳と、意見を述べる文の複合英作文。【解説】「もし生徒会長だったら」→現在の事実に反する仮定なので仮定法過去：If I were the student council president（be動詞は主語に関わらずwere）。「〜仕組みを作るだろう」→would create a system to〜。「〜べきだと思う」→I believe/think (that) we should〜。【注意点】仮定法過去のif節ではbe動詞は人称に関係なくwereを使うのが原則（口語ではwasも使われるが、書き言葉ではwereが標準）。【関連知識】生徒会（student council）、意見を聞く（listen to opinions）は学校生活の英作文で頻出のテーマ語彙。`,
    pitfall: '「If I am the president」と直説法にすると、現在の事実に反する仮定を正しく表せない。',
    memoryTip: '仮定法過去のif節はbe動詞を必ずwereにする（I were / she were）と徹底暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c3_28',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① The teacher insisted that every student (　) the rule.
  ア. follows　イ. follow　ウ. followed　エ. will follow

② It is essential that the report (　) submitted by Friday.
  ア. is　イ. be　ウ. was　エ. will be

③ I would rather you (　) tell anyone about this.
  ア. don't　イ. didn't　ウ. won't　エ. not`,
    answer: '① イ(follow)　② イ(be)　③ イ(didn\'t)',
    hint: '①②要求・必要を表す動詞・形容詞に続くthat節は原形（仮定法現在）。③would rather+S+過去形=〜してほしくない。',
    explanation: `【出題意図】要求・提案・必要を表す動詞（insist）・形容詞（essential）に続くthat節の仮定法現在（原形）と、would rather構文を問う発展文法。【解説】①insist that+S+動詞の原形（仮定法現在）。「〜すべきだと要求する」という意味の際、that節の動詞は原形になる（followの原形はfollow自体）。②essential/necessary/important等の形容詞+that+S+動詞原形（be）。「報告書が提出されるべきだ」の受動の原形はbe submitted。③would rather+S+過去形=「〜しないでほしい」という現在の願望。過去形didn'tを使う点が仮定法的な用法。【注意点】①②はイギリス英語ではshould+動詞原形を使うことも多いが、アメリカ英語では原形（仮定法現在）が標準。【関連知識】suggest/demand/require/recommend+that+S+動詞原形も同じグループの重要動詞。`,
    pitfall: '①をfollowsやfollowedにしないこと。insist that以下は要求のthat節で原形が入る。',
    memoryTip: 'insist/suggest/demand+that+S+原形、would rather+S+過去形、と型で覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_29',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えなさい。

[Passage]
Uniforms have long been a standard part of school life in Japan. Supporters argue that uniforms create a sense of equality among students, regardless of their family's income, and reduce the time and stress of choosing clothes every morning. On the other hand, opponents claim that uniforms limit students' self-expression and that strict dress codes can be uncomfortable, especially in extreme weather. Recently, some schools have begun allowing students to choose between uniforms and casual clothes, aiming to balance tradition with individual freedom.

① 制服に賛成する立場の理由を英語で2点答えよ。
② 制服に反対する立場の理由を日本語で2点まとめよ。
③ 下線部「regardless of」の意味を日本語で答えよ。
④ 最近の学校の動きについて、本文の内容を50字以内の日本語でまとめよ。`,
    answer: `① Uniforms create a sense of equality among students regardless of their family's income, and they reduce the time and stress of choosing clothes every morning.
② ・制服は生徒の自己表現を制限してしまう。・厳しい服装規定が、特に厳しい気候の際に不快になることがある。
③ 〜に関係なく
④ 伝統と個人の自由のバランスを取るため、制服と私服のどちらかを選べるようにする学校が出てきている。（47字）`,
    hint: '①Supporters argue that〜以下、②opponents claim that〜以下、③regardless of=〜にかかわらず、④最終文に注目。',
    explanation: `【出題意図】学校制服をテーマにした賛否対比の論説文読解。情報抽出・語彙・要約力を総合的に問う最高難度の問題。【解説】①賛成理由：「create a sense of equality among students regardless of their family's income（家庭の収入に関係なく平等感を生む）」と「reduce the time and stress of choosing clothes（服選びの時間とストレスを減らす）」の2点。②反対理由：「limit students' self-expression（自己表現を制限する）」と「strict dress codes can be uncomfortable, especially in extreme weather（厳しい服装規定が極端な気候で不快になりうる）」の2点。③regardless of=「〜に関わらず」。④最終文「some schools have begun allowing students to choose between uniforms and casual clothes, aiming to balance tradition with individual freedom」を50字以内で要約する。【注意点】④は「伝統」と「個人の自由」のバランスという本文のキーワードを必ず盛り込む。【関連知識】equality（平等）、self-expression（自己表現）、dress code（服装規定）は社会的テーマの頻出語彙。`,
    pitfall: '②で賛成理由を混ぜて答えないこと。opponents（反対派）の理由のみを問われている。',
    memoryTip: 'regardless of=re（強調）+gard（見る）+less（〜なしに）→「見ることなく＝関係なく」と語源から覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_30',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、英語で意見を述べなさい。（35語以上）

テーマ：「学校でスマートフォンの使用を許可すべきだと思いますか。理由とともに述べなさい。」

（I think / I believe で書き始めること）`,
    answer: `（賛成例）I think schools should allow students to use smartphones. Students can quickly look up information, communicate with teachers about schedule changes, and use educational apps. If schools set clear rules about when to use them, smartphones can support learning effectively.（38語）

（反対例）I believe schools should not allow smartphones during class. Many students would use them for games or social media instead of studying. Without smartphones, students can focus better on lessons and communicate with classmates face to face.（36語）`,
    hint: '主張→理由1・2→まとめの構成で書く。ルール設定などの条件を付けると説得力が増す。',
    explanation: `【出題意図】学校でのスマートフォン使用をテーマにした意見英作文。主張・理由・具体例・まとめの構成力と35語以上の語数条件を問う。【解説】賛成の理由例：情報検索の迅速さ・先生との連絡・教育アプリの活用・明確なルール設定による効果的な学習支援。反対の理由例：授業中のゲームやSNS利用への懸念・集中力低下・対面コミュニケーションの重要性。どちらの立場でも理由が具体的で論理的なら評価される。【注意点】35語以上を確実に満たすために理由を2つ以上挙げ、「If〜」や「Without〜」などの条件節を使うと説得力が増す。【関連知識】educational app（教育アプリ）、social media（SNS）、face to face（対面で）は頻出関連語彙。`,
    pitfall: '理由を1つしか挙げないと語数不足・説得力不足になりやすい。必ず2点以上の理由を書く。',
    memoryTip: '英作文の型：主張→理由1→理由2→条件・まとめ、の順で35語を安定して確保する。',
  },
  {
    id: 'koko_kankan_eigo_c3_31',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話文の（　①　）〜（　④　）に入る最も適切な文を選びなさい。

[At a school trip planning meeting]
A: We need to decide our destination for the school trip. Any ideas?
B: (　①　) Kyoto has a lot of historical sites we can visit.
A: (　②　) But some students want to visit somewhere with more modern attractions.
C: (　③　)
A: That's a great compromise. Let's put it to a vote.
C: (　④　) I'll prepare the proposal for tomorrow.

ア. How about combining both? We could visit Kyoto in the morning and Osaka in the afternoon.
イ. Sounds good.
ウ. That makes sense.
エ. I think Kyoto would be a great choice.`,
    answer: '① エ　② ウ　③ ア　④ イ',
    hint: '①提案、②相手の意見への同意しつつ反論の前振り、③折衷案の提示、④賛同して締める。',
    explanation: `【出題意図】学校行事（修学旅行）の企画会議という文脈での会話の流れと妥協案の提示パターンを問う。【解説】①「Kyoto has a lot of historical sites」に自然につながる提案→「I think Kyoto would be a great choice.」（エ）。②「But some students want〜」と逆接が続くので、直前は一旦同意する表現→「That makes sense.」（ウ）。③「A great compromise」と評価されているので、折衷案を提示する文→「How about combining both?〜」（ア）。④最後にCが同意して締めくくる→「Sounds good.」（イ）。【注意点】compromise（妥協案・折衷案）という単語がヒントとして機能している。【関連知識】会議での意見表現：How about〜ing?（〜するのはどうか）、That makes sense.（それは筋が通っている）、Sounds good.（いいですね）。`,
    pitfall: '②でアを先に選んでしまうと、Aの発言「But some students want〜」との論理的なつながりが崩れる。',
    memoryTip: 'compromise（妥協案）という語から、その直前に折衷案を提示する文が入ると逆算する。',
  },
  {
    id: 'koko_kankan_eigo_c3_32',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。（強調構文を使うこと）

① It was Emi (　) won the speech contest last year, not Yuki.
  （去年スピーチコンテストで優勝したのはユキではなくエミだった）

② It is not until we lose something (　) we realize its true value.
  （何かを失って初めて、私たちはその本当の価値に気づく）`,
    answer: '① who (that)　② that',
    hint: 'It is/was+強調したい語句+who/that+残りの文、の強調構文。',
    explanation: `【出題意図】強調構文（It is/was〜that/who…）の形を問う。【解説】①「It was Emi who won〜」＝Emiを強調する強調構文。人を強調する場合はwhoも使えるが、thatでも可。②「It is not until we lose something that we realize〜」＝「〜して初めて…」という頻出の強調構文パターン（not until〜が強調される）。【注意点】①のような人を強調する強調構文ではwho/thatどちらも使用可能。②は「It is not until A that B」の形をセットで覚える必要がある。【関連知識】強調構文は元の文（Emi won the speech contest.）からEmiを取り出し「It is/was Emi that/who+残りの文」の形にすると理解しやすい。`,
    pitfall: '①をwhichにするのは誤り。先行詞が人（Emi）の場合はwho（またはthat）を使う。',
    memoryTip: 'It is not until A that B=「Aして初めてB」という決まり文句として丸ごと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_33',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① I remember to visit Kyoto with my family when I was a child.
② She stopped to eat sweets because she wanted to lose weight.
③ Don't forget locking the door when you leave the classroom.`,
    answer: `① to visit → visiting（remember+動名詞＝過去の記憶）
② to eat → eating（stop+動名詞＝〜するのをやめる）
③ locking → to lock（forget+to不定詞＝これからすべきことを忘れる）`,
    hint: 'remember/forget/stopは、後ろがto不定詞か動名詞かで意味が変わる動詞。',
    explanation: `【出題意図】remember/forget/stopなど、to不定詞と動名詞で意味が変わる動詞の使い分けを問う誤文訂正。【解説】①「子どもの頃、家族と京都を訪れたことを覚えている」＝過去の記憶なのでremember+動名詞（visiting）。remember to doは「これからすべきことを覚えている」という未来志向の意味になり文意に合わない。②「甘い物を食べるのをやめた」＝stop+動名詞（eating）で「〜するのをやめる」。stop to doは「〜するために立ち止まる」という別の意味になる。③「教室を出るときに鍵を閉め忘れないで」＝これからの行為を忘れないという意味なのでforget+to不定詞（to lock）。forget+動名詞は「〜したことを忘れる」という過去志向の意味になり文意に合わない。【注意点】remember/forget/stopは「to不定詞＝これから」「動名詞＝すでにした・している」という共通ルールで整理できる。【関連知識】try to do（〜しようと努力する）とtry doing（試しに〜してみる）も同様の使い分けパターン。`,
    pitfall: '③をlocking のままにしないこと。forget+動名詞は過去のことを忘れる意味になり文意が変わる。',
    memoryTip: 'remember/forget/stop：to不定詞=これから、動名詞=すでに・過去、と時間軸で整理する。',
  },
  {
    id: 'koko_kankan_eigo_c3_34',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えなさい。

[Passage]
Japan's declining birthrate has led to a decrease in the number of children, and as a result, many schools in rural areas are being closed or merged with other schools. Some educators argue that smaller schools allow teachers to give more individual attention to each student. Others believe that merging schools gives students more opportunities to interact with a larger and more diverse group of peers, which can better prepare them for society.

① Why are many schools in rural areas being closed or merged?（英語で答えよ）
② 小規模校を支持する意見の理由を日本語で答えよ。
③ 学校統合を支持する意見の理由を日本語で答えよ。`,
    answer: `① Because Japan's declining birthrate has led to a decrease in the number of children.
② 教師が生徒一人ひとりにより個別の注意を向けることができるから。
③ より大きく多様な仲間と交流する機会が増え、社会に出る準備がより良くできるようになるから。`,
    hint: '①本文1文目、②Some educators argue that〜、③Others believe that〜以下。',
    explanation: `【出題意図】少子化と学校統廃合という社会問題をテーマにした読解問題。原因把握と対立する2つの意見の抽出を問う。【解説】①「Japan's declining birthrate has led to a decrease in the number of children」が原因。②「smaller schools allow teachers to give more individual attention to each student」＝小規模校の利点。③「merging schools gives students more opportunities to interact with a larger and more diverse group of peers, which can better prepare them for society」＝統合の利点。【注意点】SomeとOthersで対立する2つの立場が提示される典型的な論説構造。【関連知識】declining birthrate（少子化）、merge（合併する）、individual attention（個別の配慮）は社会問題の頻出語彙。`,
    pitfall: '②と③を取り違えないこと。②は小規模校（Some educators）、③は統合（Others）の意見。',
    memoryTip: 'Some argue that A. Others believe that B. という対立構造は、必ずSomeとOthersを分けて整理する。',
  },
  {
    id: 'koko_kankan_eigo_c3_35',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① (　) all the effort she put into the project, it still failed.
  ア. Despite　イ. Although　ウ. Because　エ. Since

② The exam was cancelled, (　) came as a relief to many students.
  ア. that　イ. which　ウ. what　エ. it

③ (　) as it was, the plan attracted many students.
  ア. Strange　イ. Strangely　ウ. Because strange　エ. It strange`,
    answer: '① ア(Despite)　② イ(which)　③ ア(Strange)',
    hint: '①Despite+名詞句、②前の文全体を受ける関係代名詞which、③「〜ではあるが」の倒置構文（形容詞+as+S+V）。',
    explanation: `【出題意図】Despite+名詞、前文全体を受けるwhich、譲歩の倒置構文（形容詞+as+S+V）という発展的な構文を問う。【解説】①Despite（〜にもかかわらず）は前置詞で後ろに名詞句（all the effort）が続く。Althoughは接続詞で後ろにS+Vが必要なため、名詞句には使えない。②前の文全体（The exam was cancelled）を先行詞として受ける関係代名詞はwhich（thatは前の文全体を受けられない）。③「Strange as it was（それは奇妙なことだったが）」＝形容詞+as+S+V の譲歩構文。これはAs strange as it wasやThough it was strangeと同意。【注意点】③の構文はas though/as ifと混同しないよう注意。「形容詞+as+主語+動詞」で「〜ではあるが」という譲歩を表す倒置的表現。【関連知識】Despite/In spite of+名詞、Although/Though+S+V、という前置詞と接続詞の区別は最頻出の文法ポイント。`,
    pitfall: '①でAlthoughを選ぶと後ろに名詞句しかないため文法的に不成立になる。',
    memoryTip: 'Despite/In spite of=前置詞+名詞、Although/Though=接続詞+S+V、と品詞で区別する。',
  },
  {
    id: 'koko_kankan_eigo_c3_36',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ the harder / becomes / study / the more / you / interesting / the subject ].
  （勉強すればするほど、その科目はより面白くなる）

② [ what / matters / most / is / not / how / long / you / study / but / how / you / study ].
  （重要なのは、どれだけ長く勉強するかではなく、どのように勉強するかだ）`,
    answer: `① The harder you study, the more interesting the subject becomes.
② What matters most is not how long you study but how you study.`,
    hint: '①the+比較級, the+比較級構文、②not A but B構文と名詞節What matters mostが主語。',
    explanation: `【出題意図】「the+比較級, the+比較級」構文と、「not A but B」＋名詞節主語の複合的な語順整序を問う最高難度の問題。【解説】①「The harder you study, the more interesting the subject becomes.」＝「勉強すればするほど」the harder you study、「その科目はより面白くなる」the more interesting the subject becomes。②「What matters most is not how long you study but how you study.」＝「What matters most（最も重要なことは）」が主語の名詞節、be動詞の後に「not A but B」（AではなくB）の形でhow long you study（どれだけ長く）とhow you study（どのように）を対比させる。【注意点】①は「the+比較級」の部分を文頭に必ず2つ並べる語順。②はnot A but Bの語順を崩さない。【関連知識】What matters is〜（重要なのは〜だ）は評論文でよく使われる主語構文。`,
    pitfall: '②でnotとbutの位置を逆にしたり、howとhow longを入れ替えたりしないよう注意する。',
    memoryTip: '「the+比較級, the+比較級」は必ず対で使う。not A but B は「AではなくB」の順序を固定して覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_37',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えなさい。

[Passage 1]
Club activities, or "bukatsu," play a central role in Japanese school life. Many students spend hours after school and on weekends practicing sports or arts. Supporters say bukatsu teaches teamwork, discipline, and perseverance, qualities valued highly in Japanese society.

[Passage 2]
However, critics argue that the heavy time commitment required by bukatsu can interfere with students' academic studies and rest. Some teachers, who often serve as unpaid coaches, also report feeling overworked. In recent years, several schools have started to set limits on practice hours to address these concerns.

[Passage 3]
Finding the right balance between the benefits of club activities and the well-being of both students and teachers remains an ongoing challenge for Japanese schools.

【設問】
① 第1段落で述べられているbukatsuの利点を英語で2点答えよ。
② 第2段落の批判点を日本語で2点まとめよ。
③ 一部の学校がとった対応策は何か。（英語で答えよ）
④ 第3段落が示す本文全体の結論を60字以内の日本語でまとめよ。`,
    answer: `① Bukatsu teaches teamwork and discipline (and perseverance).
② ・部活動にかかる時間の負担が大きく、生徒の学業や休息に支障をきたす可能性がある。・無給で顧問を務める教師の中に、働き過ぎだと感じている人がいる。
③ Several schools have started to set limits on practice hours.
④ 部活動の利点と、生徒・教師双方の心身の健康とのバランスをどう取るかが、日本の学校にとって今も続く課題である。（54字）`,
    hint: '①Supporters say bukatsu teaches〜、②critics argue that〜とteachers report〜、③本文最終文、④第3段落全体の要旨。',
    explanation: `【出題意図】部活動（bukatsu）をテーマにした3段落構成の論説文読解。賛否両論と結論という論説の典型構造を理解し、情報を整理・要約する高難度の総合問題。【解説】①「bukatsu teaches teamwork, discipline, and perseverance」から2点（teamwork, discipline/perseverance）。②「the heavy time commitment...can interfere with students' academic studies and rest」と「teachers...report feeling overworked」の2点。③「several schools have started to set limits on practice hours」。④第3段落「Finding the right balance between the benefits of club activities and the well-being of both students and teachers remains an ongoing challenge」を60字以内で要約する。【注意点】④は「利点」と「生徒・教師の健康」のバランスというキーワードを必ず含める。【関連知識】perseverance（忍耐力）、unpaid coach（無給の顧問）、well-being（心身の健康）は社会的トピックの重要語彙。`,
    pitfall: '②で第2段落の批判点を答える際、生徒側の負担と教師側の負担の両方に触れる必要がある。',
    memoryTip: '3段落構成：段落1=利点、段落2=問題点、段落3=バランス・結論、というパターンを押さえる。',
  },
  {
    id: 'koko_kankan_eigo_c3_38',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。（仮定法を使うこと）

① If it (　) not for your advice, I would have given up studying English.
  （あなたの助言がなかったら、私は英語の勉強をあきらめていただろう）

② (　) I in your position, I would ask the teacher for help immediately.
  （もし私があなたの立場だったら、すぐに先生に助けを求めるだろう）

③ I acted (　) if nothing had happened, though I was very nervous.
  （とても緊張していたが、私は何事もなかったかのように振る舞った）`,
    answer: '① were (had been)　② Were　③ as',
    hint: '①If it were not for〜／had it not been for〜、②Ifの省略による倒置、③as if+仮定法過去完了。',
    explanation: `【出題意図】仮定法の発展表現（If it were not for、Ifの省略による倒置、as if構文）を問う。【解説】①「If it were not for your advice」は現在の仮定だが、文全体は「would have given up」と過去の仮定法過去完了の帰結節になっているため、「If it had not been for」がより厳密だが、①では空欄1つのためwereまたはhad beenのいずれかを入れる形（過去の話なのでhad beenがより正確、werebでも許容）。②Ifを省略した倒置形：Were I in your position（=If I were in your position）。③「〜であったかのように」＝as if+仮定法。ここでは「何事もなかったかのように」という過去の事実に反する内容なのでas if+過去完了（had happened）が使われている。【注意点】①はIf it were not for〜（現在）とIf it had not been for〜（過去）の区別が入試での頻出ポイント。ここでは文脈が過去（studying Englishをあきらめていただろう、という過去の話）なのでhad not been forがより正確だが、had beenも許容。②Were+S+〜は倒置によるifの省略形。【関連知識】as if/as though+仮定法過去（現在の事実に反する）、as if+仮定法過去完了（過去の事実に反する）の使い分けも重要。`,
    pitfall: '②をIf I were の語順のままにしないこと。設問はIfを省略した倒置形を要求している。',
    memoryTip: 'If の省略→倒置（Were/Had/Should+S+〜）というパターンをセットで覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_39',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① The number of foreign tourists visiting Japan have increased rapidly these years.
② One of the biggest challenge facing Japanese schools is the shortage of teachers.
③ This is one of the most difficult problem I have ever faced.`,
    answer: `① have increased → has increased（The number of〜は単数扱い）
② challenge → challenges（one of the+複数名詞）
③ problem → problems（one of the+最上級+複数名詞）`,
    hint: 'The number of〜は単数扱いで動詞も単数形。one of the+最上級/形容詞+複数名詞、の形に注意。',
    explanation: `【出題意図】the number of〜の数の一致、one of the+複数名詞という頻出誤りパターンを問う誤文訂正。【解説】①「The number of foreign tourists（外国人観光客の数）」は単数扱いなので、動詞はhas increasedにする必要がある。②③「one of the+最上級（または形容詞）+複数名詞」という形が正しく、challengeやproblemは複数形challenges/problemsにする必要がある（「〜の1つ」なので、母集団は複数でなければならない）。【注意点】the number of〜（〜の数）は単数扱い、a number of〜（多くの〜）は複数扱いという対比を必ず押さえる。one of the+複数名詞は「その中の1つ」という意味なので、名詞は必ず複数形になる。【関連知識】one of my friends、one of the best books I have ever readなど、「one of the+最上級+複数名詞+(that) S have ever+過去分詞」は入試最頻出の構文パターン。`,
    pitfall: '②③でchallenge/problemを単数のままにしないこと。one of the+複数名詞が原則。',
    memoryTip: 'one of the+複数名詞は「大勢の中の1人・1つ」という意味なので必ず複数形にする。',
  },
  {
    id: 'koko_kankan_eigo_c3_40',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問に答えなさい。

Climate change is affecting school life in unexpected ways. Extremely hot summers have led some schools to shorten outdoor activities such as sports festivals and cancel long-distance running events. Schools have also begun installing air conditioners in gymnasiums, which were traditionally not climate-controlled, to keep students safe during heat waves.

① 気候変動が学校生活に与えている具体的な影響を日本語で2点まとめよ。
② 下線部「climate-controlled」の意味を日本語で答えよ。`,
    answer: `① ・猛暑のため、運動会などの屋外活動が短縮されたり、長距離走の行事が中止されたりしている。・熱波から生徒を守るため、これまで空調がなかった体育館にエアコンを設置する学校が出てきている。
② 空調管理された・温度調節された`,
    hint: '①本文2文目・3文目、②climate-controlled=climate（気候・室温）+controlled（管理された）。',
    explanation: `【出題意図】気候変動と学校生活という時事的テーマの読解問題。情報抽出・複合語の意味把握を問う。【解説】①本文2文目「Extremely hot summers have led some schools to shorten outdoor activities such as sports festivals and cancel long-distance running events.」と3文目「Schools have also begun installing air conditioners in gymnasiums...to keep students safe during heat waves.」の2点をまとめる。②climate-controlled=「気候（室温）が管理されている」＝空調完備の。【注意点】「2点」を明確に分けて答えることが求められている。【関連知識】climate change（気候変動）、heat wave（熱波）、outdoor activity（屋外活動）は時事英語で頻出のテーマ語彙。`,
    pitfall: '①で1点のみ答えて終わらないこと。本文には明確に2つの影響が述べられている。',
    memoryTip: 'climate-controlled=「気候（温度）がコントロールされている」→空調完備、と複合語を分解して理解する。',
  },
  {
    id: 'koko_kankan_eigo_c3_41',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ can't / help / feeling / I / nervous ] before the entrance exam.
  （入試の前、緊張せずにはいられない）

② [ far / as / know / as / I ], the schedule hasn't changed.
  （私が知る限り、予定は変わっていない）

③ [ there / no / of / is / point / worrying ] about things you cannot control.
  （自分でどうにもできないことを心配しても仕方がない）`,
    answer: `① I can't help feeling nervous
② As far as I know
③ There is no point of worrying`,
    hint: '①can\'t help+動名詞（〜せずにはいられない）、②as far as I know（私が知る限り）、③There is no point of/in+動名詞。',
    explanation: `【出題意図】can't help+動名詞、as far as I know、There is no point in/of+動名詞という頻出定型表現の語順整序を問う。【解説】①「can't help+動名詞」＝「〜せずにはいられない」（can't help but+原形も同意で使われる）。②「as far as I know」＝「私が知る限りでは」という頻出の慣用表現。③「There is no point in/of+動名詞」＝「〜しても意味がない・仕方がない」。【注意点】①のcan't helpの後は必ず動名詞（feeling）が続く（can't help to feelは誤り）。②asとfarの語順を崩さない。③point in doingの方が一般的だが、point of doingも用いられる。【関連知識】can't help but+動詞原形（=can't help+動名詞）、it's no use+動名詞（〜しても無駄だ）も類似の重要表現。`,
    pitfall: '①をI can\'t help to feelとしないこと。can\'t helpの後は動名詞。',
    memoryTip: 'can\'t help+ing＝我慢できない、as far as I know＝知る限り、と定型表現ごと丸暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c3_42',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話文を読み、設問に答えなさい。

A: I heard our school is going to introduce a new grading system next year.
B: Really? What's different about it?
A: Instead of just letter grades, teachers will also write detailed comments on each student's strengths and areas to improve.
B: That sounds helpful, but it must take teachers a lot more time to write, right?
A: Exactly. Some teachers are worried about the extra workload, but the school board says it will help students understand their progress better.

① 新しい成績評価制度の内容を英語で説明せよ。
② Bが指摘している懸念点は何か。（日本語で答えよ）
③ 学校側（school board）が主張する新制度のメリットは何か。（英語で答えよ）`,
    answer: `① Teachers will write detailed comments on each student's strengths and areas to improve, in addition to letter grades.
② 教師が詳細なコメントを書くのに、より多くの時間がかかってしまうという懸念。
③ It will help students understand their progress better.`,
    hint: '①Aの3番目の発言、②Bの発言「it must take teachers a lot more time」、③Aの最後の発言後半。',
    explanation: `【出題意図】学校の成績評価制度の変更をテーマにした会話文読解。制度内容・懸念・メリットの3点を整理する問題。【解説】①「teachers will also write detailed comments on each student's strengths and areas to improve」に加え「Instead of just letter grades」から、文字による評価に加えて詳細なコメントを書く制度だとわかる。②Bの「it must take teachers a lot more time to write」＝教師の負担増加への懸念。③「the school board says it will help students understand their progress better」＝生徒が自分の成長をよりよく理解できるようになる、というメリット。【注意点】①は「letter gradesに加えて」という点を明確に含める必要がある。【関連知識】grading system（成績評価制度）、workload（仕事量・負担）は教育制度に関する頻出語彙。`,
    pitfall: '①でletter gradesを完全になくす制度だと誤解しないこと。「加えて」コメントを書く制度。',
    memoryTip: 'Instead of just A, also B＝「Aだけでなく、Bも」という追加のニュアンスを正しく読み取る。',
  },
  {
    id: 'koko_kankan_eigo_c3_43',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① Hardly (　) the exam started when the fire alarm went off.
  ア. had　イ. has　ウ. did　エ. was

② No sooner (　) she finished her homework than her friend called her.
  ア. had　イ. has　ウ. did　エ. was

③ Never (　) I seen such a beautiful sunset before.
  ア. had　イ. have　ウ. did　エ. was`,
    answer: '① ア(had)　② ア(had)　③ イ(have)',
    hint: 'Hardly had+S+p.p.+when〜、No sooner had+S+p.p.+than〜、Never have+S+p.p.（否定語の倒置）。',
    explanation: `【出題意図】否定語（Hardly/No sooner/Never）を文頭に置いたときの倒置構文を問う。【解説】①②「Hardly had S p.p. when〜」「No sooner had S p.p. than〜」＝「〜するとすぐに…した」という頻出の倒置構文。どちらも過去完了（had+p.p.）を使い、Hardly/No soonerの直後は倒置（had+主語）になる。③「Never have I seen〜」＝現在完了の否定語倒置。Neverが文頭に来たことでhave+主語+p.p.の倒置形になる。文脈上「これまで見たことがない」という現在完了の経験用法なのでhaveを使う（時制の指定がhad〜beforeでないため現在完了）。【注意点】①②はwhen/thanとセットで覚える（Hardly〜when、No sooner〜than）。③はhad(過去完了)ではなくhave(現在完了)を使う点に注意（文全体が現在完了の経験を表しているため）。【関連知識】否定語による倒置：Little did I know that〜（〜だとは知らなかった）、Not only did〜も同グループの重要構文。`,
    pitfall: '③をhadにしないこと。文脈が現在完了（seen...before）なのでhaveが正しい。',
    memoryTip: 'Hardly〜when、No sooner〜than、をセットの熟語として覚え、否定語倒置は疑問文と同じ語順になると意識する。',
  },
  {
    id: 'koko_kankan_eigo_c3_44',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えなさい。

Peer pressure among teenagers can influence decisions ranging from fashion choices to academic effort. While some forms of peer pressure encourage positive behavior, such as studying harder because friends are doing so, other forms can lead to negative outcomes, such as skipping class or engaging in risky behavior. Experts suggest that building students' self-confidence and critical thinking skills can help them resist negative peer pressure while still benefiting from positive social influences.

① 下線部「Peer pressure」が生徒に与えるポジティブな影響を英語で答えよ。
② ネガティブな影響の例を日本語で1つ答えよ。
③ 専門家（Experts）が提案している対策を日本語で答えよ。`,
    answer: `① It can encourage positive behavior, such as studying harder because friends are doing so.
② 授業をサボったり、危険な行動に及んだりすること。
③ 生徒の自己肯定感（自信）と批判的思考力を育てることで、良い社会的影響は受け入れつつ、悪い同調圧力には抵抗できるようにすること。`,
    hint: '①While以下前半、②such as skipping class or engaging in risky behavior、③Experts suggest that以下。',
    explanation: `【出題意図】ピア・プレッシャー（同調圧力）という思春期心理をテーマにした読解問題。対比構造と対策の把握を問う。【解説】①「some forms of peer pressure encourage positive behavior, such as studying harder because friends are doing so」＝友人が勉強しているから自分も頑張るというポジティブな影響。②「skipping class or engaging in risky behavior（授業をサボる、危険な行動をする）」がネガティブな例。③「building students' self-confidence and critical thinking skills can help them resist negative peer pressure while still benefiting from positive social influences」＝自己肯定感と批判的思考力を育てることで、良い影響は受けつつ悪い同調圧力に抵抗する力をつける、という対策。【注意点】Whileは「〜だが一方で」という対比の接続詞として機能している。【関連知識】peer pressure（同調圧力）、self-confidence（自己肯定感）、critical thinking（批判的思考）は心理・教育系読解の頻出語彙。`,
    pitfall: '②を「勉強を頑張る」というポジティブな例と混同しないこと。ネガティブな例を問われている。',
    memoryTip: 'While A, B の構造では、Aが譲歩（一部は良い面）、Bが対比される内容（悪い面）と整理する。',
  },
  {
    id: 'koko_kankan_eigo_c3_45',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（25語以上）

「私たちの学校には、生徒がお互いに助け合う文化がある。この伝統を守り続けることが、より良い学校生活につながると私は信じている。」`,
    answer: `（解答例）Our school has a culture in which students help each other. I believe that keeping this tradition alive will lead to a better school life for all of us.（28語）

（別解）Our school has a strong tradition of students supporting one another, and I am convinced that continuing this custom will make our school life better for everyone.（27語）`,
    hint: '「〜する文化」→a culture in which〜/a culture of〜ing、「〜につながると信じている」→I believe (that)〜will lead to〜。',
    explanation: `【出題意図】関係代名詞・動名詞を用いた文化・伝統の説明と、意見を述べる文の複合英作文。【解説】「お互いに助け合う文化」→a culture in which students help each other（関係代名詞whichを用いた表現）、またはa culture of students helping/supporting each other（動名詞を用いた表現）。「この伝統を守り続けることが〜につながる」→keeping this tradition alive will lead to〜（動名詞句が主語）。「〜と信じている」→I believe (that)〜。【注意点】「help each other」「support one another」はどちらも「お互いに助け合う」という意味で使える。keep〜aliveは「〜を存続させる」という重要表現。【関連知識】lead to〜（〜につながる）、tradition/custom（伝統・慣習）は学校文化に関する英作文で頻出の語彙。`,
    pitfall: '「文化がある」をthere is a cultureとするより、Our school has a cultureとする方が自然な英語になる。',
    memoryTip: 'keep〜alive＝「〜を生かし続ける」→「（伝統を）守り続ける」という比喩表現として覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_46',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① The committee is composed (　) representatives from each class.
  ア. of　イ. with　ウ. for　エ. by

② She was so absorbed (　) her novel that she didn't notice the bell ring.
  ア. in　イ. on　ウ. with　エ. at

③ The results of the survey were consistent (　) our expectations.
  ア. of　イ. to　ウ. with　エ. for`,
    answer: '① ア(of)　② ア(in)　③ ウ(with)',
    hint: 'be composed of=〜から構成される、be absorbed in=〜に夢中である、be consistent with=〜と一致する。',
    explanation: `【出題意図】前置詞を伴う頻出熟語（be composed of / be absorbed in / be consistent with）を問う。【解説】①be composed of〜=「〜から構成されている」（=consist of〜）。②be absorbed in〜=「〜に夢中になっている、没頭している」。③be consistent with〜=「〜と一致している、矛盾しない」。【注意点】前置詞を伴う熟語は動詞・形容詞ごとに決まった前置詞があるため、意味と一緒にセットで覚える必要がある。②のabsorbedはinを取る点が特に間違えやすい。【関連知識】be composed of（構成される）と類似のbe made up of（構成される）、be concerned with/about（関係している・心配している）も頻出。`,
    pitfall: '②でabsorbed onやabsorbed atとしないこと。be absorbed inが正しい組み合わせ。',
    memoryTip: 'be composed of（構成）、be absorbed in（没頭）、be consistent with（一致）と前置詞をセットで暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c3_47',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① Despite of the heavy rain, the sports day was held as scheduled.
② The more students participate in volunteer activities, more confident they become.
③ I suggested him that he should study abroad for a year.`,
    answer: `① Despite of → Despite（Despiteは前置詞でofを伴わない）
② more confident → the more confident（the+比較級, the+比較級構文）
③ suggested him that → suggested to him that（suggestは人を直接目的語にとらない）`,
    hint: '①Despiteは単独で前置詞（in spite ofと混同しない）、②the+比較級, the+比較級、③suggest+to+人+that節。',
    explanation: `【出題意図】前置詞Despiteの用法、the+比較級構文、suggest+人の語法という3つの頻出誤りを問う誤文訂正問題。【解説】①Despiteはそれ自体が前置詞で、Despite of〜とはしない（In spite of〜と混同しやすい）。②「the+比較級, the+比較級」構文なので、後半もthe more confidentとthe を付ける必要がある。③suggestは「suggest+人+that節」のように人を直接目的語にとれない動詞。「suggest to+人+that節」または「suggest that+人+動詞原形」の形にする必要がある。【注意点】①はDespite（前置詞、ofなし）とIn spite of（群前置詞、ofあり）の違いが最頻出の誤り。③はsuggest/explain/proposeなど「人に説明する」動詞グループはto+人の形をとる（SVOOの形をとらない）点に注意。【関連知識】explain（説明する）、propose（提案する）、announce（発表する）もsuggestと同様にto+人の形をとる動詞。`,
    pitfall: '③をsuggested him to study abroadのように直接目的語にしないこと。suggestはto+人の形をとる。',
    memoryTip: 'Despite=前置詞単独（ofなし）、explain/suggest/propose+to+人、とグループごとに整理して覚える。',
  },
  {
    id: 'koko_kankan_eigo_c3_48',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えなさい。

[Passage 1]
Remote learning became widespread during the pandemic, and even after schools reopened, some students continued to take certain classes online. Supporters say online classes offer flexibility, allowing students to learn at their own pace and review recorded lessons whenever they need to.

[Passage 2]
Critics, however, point out that online learning can make it harder for students to stay motivated and to build relationships with classmates. Teachers also find it more difficult to notice when a student is struggling without face-to-face interaction.

[Passage 3]
Many educators now suggest a hybrid model, combining in-person and online classes, as a way to capture the benefits of both approaches while minimizing their drawbacks.

【設問】
① オンライン授業の利点を英語で2点答えよ。
② オンライン授業の課題を日本語で2点まとめよ。
③ 下線部「hybrid model」とはどのような学習モデルか、日本語で説明せよ。
④ 第3段落の内容を踏まえ、多くの教育者が最終的にどのような考えに至っているか、60字以内の日本語でまとめよ。`,
    answer: `① Online classes allow students to learn at their own pace, and to review recorded lessons whenever they need to.
② ・生徒が学習意欲を保ちにくく、クラスメートとの人間関係を築きにくくなる。・対面での交流がないため、教師が生徒の困りごとに気づきにくくなる。
③ 対面授業とオンライン授業を組み合わせた学習モデル。
④ 対面とオンラインを組み合わせたハイブリッド型の授業を導入し、両方の利点を生かしつつ欠点を最小限に抑えるべきだという考え。（59字）`,
    hint: '①Supporters say online classes offer〜、②critics point out that〜とteachers find it〜、③combining in-person and online classes、④第3段落全体の要旨。',
    explanation: `【出題意図】オンライン教育をテーマにした3段落構成の論説文読解。賛否対比とハイブリッド型という結論の把握を総合的に問う最高難度の問題。【解説】①「allowing students to learn at their own pace and review recorded lessons whenever they need to」から2点。②「harder for students to stay motivated and to build relationships with classmates」と「teachers...find it more difficult to notice when a student is struggling」の2点。③hybrid model=「in-person（対面）とonline（オンライン）を組み合わせた学習モデル」。④第3段落「Many educators now suggest a hybrid model...as a way to capture the benefits of both approaches while minimizing their drawbacks」を60字以内でまとめる。【注意点】④は「両方の利点を生かし、欠点を最小限にする」というキーワードを必ず含める。【関連知識】remote learning（遠隔学習）、hybrid model（ハイブリッド型）、drawback（欠点）はオンライン教育の頻出語彙。`,
    pitfall: '②で生徒側の課題（意欲・人間関係）と教師側の課題（気づきにくさ）の両方に触れる必要がある。',
    memoryTip: '3段落論説文の型：段落1=利点、段落2=課題、段落3=折衷案（ハイブリッド）という構造を毎回想定して読む。',
  },
  {
    id: 'koko_kankan_eigo_c3_49',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、英語で意見を述べなさい。（35語以上）

テーマ：「中学・高校での探究学習（inquiry-based learning）は、従来の講義形式の授業より効果的だと思いますか。理由とともに述べなさい。」

（I think / I believe で書き始めること）`,
    answer: `（賛成例）I think inquiry-based learning is more effective than traditional lectures. Students research topics themselves, ask questions, and develop critical thinking skills. This active process helps them remember information better and prepares them for real-world problem solving.（36語）

（反対例）I believe traditional lectures are still important along with inquiry-based learning. Lectures allow teachers to explain complex ideas clearly and efficiently, while inquiry-based learning can take more time. Combining both methods would help students learn most effectively.（36語）`,
    hint: '探究学習の利点（主体性・批判的思考・実践力）と講義形式の利点（効率的な知識伝達）を対比しながら理由を述べる。',
    explanation: `【出題意図】探究学習（inquiry-based learning）と従来の講義形式の比較をテーマにした意見英作文。理由の具体性と語数条件（35語以上）を問う。【解説】賛成の理由例：生徒が自ら調べ、質問し、批判的思考力を養う能動的なプロセス・記憶の定着・実社会での問題解決力の育成。反対（併用）の理由例：講義は複雑な内容を効率的に説明できる・探究学習は時間がかかる・両方を組み合わせることが最も効果的。どちらの立場でも具体的な理由を2つ以上挙げれば評価される。【注意点】「inquiry-based learning」という専門用語をそのまま使い、意味を誤解しないよう「生徒主体の学び」という前提で理由を展開する。【関連知識】critical thinking（批判的思考力）、active learning（能動的学習）、real-world problem solving（実社会での問題解決）は探究学習関連の頻出語彙。`,
    pitfall: '専門用語（inquiry-based learning）の意味を誤解し、単なる自習と混同して理由を書かないよう注意する。',
    memoryTip: '比較テーマの英作文は「A is more effective than B because〜」の型で理由を2つ並べると書きやすい。',
  },
  {
    id: 'koko_kankan_eigo_c3_50',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① Scarcely (　) the teacher entered the room when all the students stood up.
  ア. had　イ. did　ウ. was　エ. has

② So great (　) the pressure that many students felt anxious before the final exams.
  ア. was　イ. is　ウ. did　エ. were

③ Only after reviewing her mistakes carefully (　) she understand why she had failed the test.
  ア. did　イ. she did　ウ. had　エ. she had`,
    answer: '① ア(had)　② ア(was)　③ ア(did)',
    hint: '①Scarcely had+S+p.p.+when〜（過去完了）、②So+形容詞+be動詞+主語+that〜の倒置、③Only after〜の後は倒置（did+主語）。',
    explanation: `【出題意図】否定的副詞語句（Scarcely/So+形容詞/Only after）を文頭に置いたときの倒置構文を、応用的な文脈で問う最高難度の問題。【解説】①「Scarcely had the teacher entered the room when〜」＝「先生が入るか入らないかのうちに〜」というHardly/Scarcely〜whenと同じ倒置パターン（過去完了had+p.p.）。②「So great was the pressure that〜」＝「プレッシャーがとても大きかったので〜」というSo+形容詞+be動詞+主語+thatの倒置構文（元の文はThe pressure was so great that〜）。③「Only after reviewing her mistakes carefully did she understand〜」＝Only after〜という限定を表す副詞句が文頭に来ると、主節が疑問文と同じ語順に倒置される（did+she+understand）。【注意点】③はOnly after〜（副詞句）が文頭に来ることで、主節の一般動詞understoodがdid+動詞原形の倒置形になる点が最大のポイント。【関連知識】Only when/Only by/Only in this wayなど「Only+副詞（句）」が文頭に来ると必ず主節が倒置される、という共通ルールを押さえる。`,
    pitfall: '③でOnly after の後の倒置を忘れ、she understoodのままにしないこと。',
    memoryTip: 'Only+副詞（句）が文頭→主節倒置、So+形容詞が文頭→be動詞+主語の倒置、と否定・限定語のルールをまとめて覚える。',
  },
];
