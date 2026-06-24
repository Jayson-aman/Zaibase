import type { Question } from './questions';

export const kokoKankanEigo30: Question[] = [
  // ============================================================
  // Q01–Q08: 基礎（difficulty: 'basic'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_b_01',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な前置詞を選びなさい。

① I was born ( ) April 5th.
② She lives ( ) Osaka.
③ The meeting starts ( ) 9 a.m.

ア. in  イ. on  ウ. at`,
    answer: '① イ(on)　② ア(in)　③ ウ(at)',
    hint: '日付→on、都市・国→in、時刻→at。',
    explanation: `【出題意図】時・場所を表す前置詞 on/in/at の使い分けを問う。【解説】on=特定の日付・曜日、in=月・年・場所（広め）、at=時刻・特定地点。① 日付にはon、② 都市にはin、③ 時刻にはat。【注意点】「in the morning」だがat noonやat nightなど慣用的な例外に注意。【関連知識】in 2025（年）、on Monday（曜日）、at noon（正午）など時間表現もセットで覚える。`,
    pitfall: 'on April（月）は誤り。月にはinを使う（in April）。',
    memoryTip: '「A(at)=点、O(on)=面、I(in)=空間」とイメージすると覚えやすい。',
  },
  {
    id: 'koko_kankan_eigo_b_02',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を否定文・疑問文に書き換えなさい。

元の文：She can speak French.

① 否定文：She (　) speak French.
② 疑問文：(　) she speak French?`,
    answer: '① cannot (can\'t)　② Can',
    hint: 'canの否定はcannot/can\'t。疑問文はcanを文頭に出す。',
    explanation: `【出題意図】助動詞canの否定文・疑問文の作り方を問う。【解説】canの否定はcannot（短縮形can't）。疑問文はCanを主語の前に置く。doを使わない点が重要。【注意点】cannotは1語（can notは誤り）。疑問文の語尾は上昇調になる。【関連知識】他の助動詞（will/must/should）も同様に助動詞を文頭に出せばよい。`,
    pitfall: 'She does not can speak Frenchとdoを使うのは誤り。',
    memoryTip: '助動詞は「not付けるだけ、頭に出すだけ」と唱える。',
  },
  {
    id: 'koko_kankan_eigo_b_03',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に there is / there are のどちらかを入れなさい。

① (　) a cat under the table.
② (　) many students in the gym.
③ (　) no milk in the fridge.`,
    answer: '① There is　② There are　③ There is',
    hint: 'be動詞の形は直後の名詞（主語）の数で決まる。',
    explanation: `【出題意図】there is/are構文における数の一致を問う。【解説】直後の名詞が単数→there is、複数→there are。③milkは不可算名詞（数えられない）→単数扱いでthere is。【注意点】There is/are の主語はbeの後ろの名詞。「no+名詞」でも同様のルールが適用される。【関連知識】過去形はthere was/were、未来はthere will be。`,
    pitfall: 'There are milk とするのは誤り。不可算名詞は単数扱い。',
    memoryTip: '「is=1つ、are=複数」。名詞を見てから選ぶ。',
  },
  {
    id: 'koko_kankan_eigo_b_04',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文の（　）に適切な疑問詞を入れなさい。

① (　) is your birthday?　（誕生日はいつですか）
② (　) bag is this?　（これは誰のバッグですか）
③ (　) did you go last weekend?　（先週末どこへ行きましたか）`,
    answer: '① When　② Whose　③ Where',
    hint: 'いつ→When、誰の→Whose、どこ→Where。',
    explanation: `【出題意図】疑問詞（When/Whose/Where）の使い分けを問う。【解説】①時→When、②所有→Whose（後ろに名詞を続ける）、③場所→Where。Whoseは「Whose + 名詞」の形になる点が他の疑問詞と違う。【注意点】WhoseとWho'sを混同しない（Whose=誰の、Who's=Who is）。【関連知識】What（何）、Which（どれ）、Why（なぜ）、How（どのように）も合わせて整理する。`,
    pitfall: 'Who bag is this?は誤り。所有を聞くときはWhoseを使う。',
    memoryTip: 'Whose=「誰のもの」→後ろに必ず名詞が来ると覚える。',
  },
  {
    id: 'koko_kankan_eigo_b_05',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を選び、命令文を完成させなさい。

① (　) quiet in the library.　（図書館では静かにしなさい）
② (　) run in the hallway.　（廊下を走ってはいけません）
③ (　) a seat, please.　（どうぞお座りください）

ア. Be　イ. Don't　ウ. Take`,
    answer: '① ア(Be)　② イ(Don\'t)　③ ウ(Take)',
    hint: '命令文はbe動詞を含む場合Be〜、禁止はDon\'t〜、動詞の原形で始める。',
    explanation: `【出題意図】命令文の基本形（肯定・否定・be動詞）を問う。【解説】①形容詞quietを使うのでBe+形容詞の命令文。②禁止はDon't+動詞原形。③Takeは動詞原形で肯定命令。【注意点】命令文の主語（You）は省略する。pleaseを付けると丁寧になる。【関連知識】Let's〜（〜しよう）は勧誘の命令文。Never〜（絶対に〜するな）は強い禁止。`,
    pitfall: `Don't be noisyとBe quiet は同意。Don't quietは誤り（don'tの後は動詞原形）。`,
    memoryTip: 'Be+形容詞・名詞、Don\'t+動詞原形、動詞原形で始めるの3パターンを覚える。',
  },
  {
    id: 'koko_kankan_eigo_b_06',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、SVOCの文を完成させなさい。

① We call this flower (　).　（私たちはこの花をsakuraと呼ぶ）
② She made me (　).　（彼女は私を幸せにした）
③ They found the movie (　).　（彼らはその映画を退屈だと思った）

語群：boring / happy / sakura`,
    answer: '① sakura　② happy　③ boring',
    hint: 'SVOC文型：call O C（OをCと呼ぶ）、make O C（OをCにする）、find O C（OをCと思う）。',
    explanation: `【出題意図】SVOC文型（第5文型）の基本を問う。【解説】call/make/find/name/keepなどはO（目的語）とC（補語）をとる。CはOの状態・名前などを表す。①花の名前→sakura（名詞）、②感情→happy（形容詞）、③評価→boring（形容詞）。【注意点】補語Cは目的語Oを説明するので「O=C」の関係が成り立つ。【関連知識】keep O C（OをCの状態に保つ）、leave O C（OをCのままにする）も頻出SVOC動詞。`,
    pitfall: 'She made me to happy はto不定詞にしない（makeは原形不定詞をとる）。',
    memoryTip: 'O=Cの関係チェック。「私=幸せ」→happy、「映画=退屈」→boringと確認。',
  },
  {
    id: 'koko_kankan_eigo_b_07',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語に合う英文になるよう（　）に適語を入れなさい。

① 私は昨日宿題を終わらせた。
  I (　) my homework yesterday.

② 彼女は毎朝ジョギングをする。
  She (　) jogging every morning.

③ 私たちは今、昼食を食べているところだ。
  We (　) (　) lunch now.`,
    answer: '① finished　② goes　③ are eating',
    hint: '①過去形、②3単現のs、③現在進行形（be+動詞-ing）。',
    explanation: `【出題意図】動詞の時制（過去形・現在形・現在進行形）の使い分けを問う。【解説】①「昨日」→過去形 finished。②「毎朝」→習慣なので現在形。主語sheなのでgoes（3単現のs）。③「今〜しているところ」→現在進行形 are eating。【注意点】3単現のs：主語が3人称単数、時制が現在のとき動詞に-s/-esをつける。goesはgoの3単現形（go→goes）。【関連知識】現在進行形は「今まさに行われている動作」を表す。状態動詞（know/like等）は進行形にしない。`,
    pitfall: 'She go jogging は3単現のsを忘れた誤り。',
    memoryTip: '時のキーワード確認：yesterday→過去形、every〜→現在形、now→進行形。',
  },
  {
    id: 'koko_kankan_eigo_b_08',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な接続詞を入れなさい。

① I was tired, (　) I went to bed early.
  （疲れていたので早く寝た）

② (　) it rains tomorrow, we will cancel the picnic.
  （明日雨が降れば、ピクニックを中止する）

③ Study hard (　) you will fail the exam.
  （一生懸命勉強しなさい、さもないと試験に落ちる）

ア. if　イ. or　ウ. so`,
    answer: '① ウ(so)　② ア(if)　③ イ(or)',
    hint: 'so=だから、if=もし〜なら、or=さもないと（命令文+or）。',
    explanation: `【出題意図】等位接続詞・従属接続詞の使い分けを問う。【解説】①結果→so（だから）。②条件→if（もし〜なら）。③「命令文+or〜」=「〜しなさい、さもないと〜」。【注意点】「命令文+and〜」=「〜しなさい、そうすれば〜」との違いに注意（Study hard and you will pass.）。【関連知識】because（なぜなら）、but（しかし）、when（〜のとき）、though（〜だが）なども頻出接続詞。`,
    pitfall: '③をandにすると「勉強すれば合格する」となり意味が逆になる。',
    memoryTip: '命令文+or=「さもないと」、命令文+and=「そうすれば」と覚える。',
  },

  // ============================================================
  // Q09–Q18: 標準（difficulty: 'standard'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_b_09',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、不定詞の副詞的用法の文を完成させなさい。

① She went to the library (　) study.
  （彼女は勉強するために図書館へ行った）

② I was surprised (　) hear the news.
  （私はその知らせを聞いて驚いた）

③ He grew up (　) be a doctor.
  （彼は医者になるために育った→医者になった）`,
    answer: '① to　② to　③ to',
    hint: '「〜するために」「〜して（感情の原因）」「〜して（結果）」はすべてto+動詞原形。',
    explanation: `【出題意図】不定詞の副詞的用法（目的・感情の原因・結果）の3用法を問う。【解説】①目的「〜するために」→to study。②感情の原因「〜して（驚いた）」→to hear。be glad/happy/surprised/sorry to doの形。③結果「〜した結果〜になった」→grew up to be（grew upは「成長した」、結果としてbe a doctorになった）。【注意点】①と③は日本語がどちらも「〜するために」になりうるが、③は結果用法（意図がない）。【関連知識】in order to〜（〜するために）は目的の意味をより明確に示す。`,
    pitfall: '①をfor studyとするのは誤り。目的にはfor+動名詞ではなくto+動詞原形を使う。',
    memoryTip: '感情形容詞（surprised/glad/sorry）+to doの形をセットで覚える。',
  },
  {
    id: 'koko_kankan_eigo_b_10',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文の（　）に too〜to / so〜that のどちらかを使って書き換えなさい。

① The box is too heavy for me to carry.
  → The box is (　) heavy (　) I cannot carry it.

② He ran so fast that nobody could catch him.
  → He ran (　) fast for anybody (　) catch him.`,
    answer: '① so, that　② too, to',
    hint: 'too〜to=「〜すぎて…できない」、so〜that=「とても〜なので…」は書き換え可能。',
    explanation: `【出題意図】too〜to構文とso〜that構文の相互書き換えを問う。【解説】too〜to doとso〜that S can't doは同意。①too heavy for me to carry → so heavy that I cannot carry it。②so fast that nobody could catch → too fast for anybody to catch。【注意点】so〜thatのthat節の否定（cannot/couldn't）がtoo〜toに対応する。主語が変わる場合はfor+人を入れる。【関連知識】enough to〜（〜するのに十分〜だ）も頻出。He is old enough to drive.（車を運転するのに十分な年齢だ）`,
    pitfall: 'too〜that とso〜to は誤った組み合わせ。tooとso、toとthatをセットにする。',
    memoryTip: 'too〜to=「2つのtoがある」、so〜that=「sとtで始まる」と形で覚える。',
  },
  {
    id: 'koko_kankan_eigo_b_11',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な関係副詞を入れなさい。

① This is the city (　) I was born.
  （これは私が生まれた街です）

② Do you remember the day (　) we first met?
  （私たちが初めて会った日を覚えていますか）

③ Tell me the reason (　) you were late.
  （あなたが遅刻した理由を教えてください）`,
    answer: '① where　② when　③ why',
    hint: '場所→where、時→when、理由→why。先行詞の種類で関係副詞が決まる。',
    explanation: `【出題意図】関係副詞（where/when/why）の使い分けを問う。【解説】①先行詞the city（場所）→where。②先行詞the day（時）→when。③先行詞the reason（理由）→why。関係副詞は「前置詞+関係代名詞」に書き換え可能（①=in which）。【注意点】関係代名詞との混同に注意。「where I was born」→場所を修飾（先行詞が場所の名詞）。【関連知識】how（方法）も関係副詞だが先行詞the wayと一緒には使わない（the way how→どちらか一方を省く）。`,
    pitfall: 'the city which I was born はwhichの後に動詞が来るため不自然（inが必要）。',
    memoryTip: '先行詞の種類→場所=where、時=when、理由=why、方法=how（the way単独）。',
  },
  {
    id: 'koko_kankan_eigo_b_12',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、受動態の文を完成させなさい。

① English is (　) all over the world.
  （英語は世界中で話されている）

② The cake (　) (　) by my mother yesterday.
  （そのケーキは昨日母によって作られた）

③ A new library is (　) (　) in our town.
  （私たちの町に新しい図書館が建てられているところだ）`,
    answer: '① spoken　② was made　③ being built',
    hint: '①現在の受動態、②過去の受動態、③現在進行形の受動態（is being+過去分詞）。',
    explanation: `【出題意図】受動態の3つの形（現在・過去・進行形）を問う。【解説】①現在受動態：is+過去分詞(spoken)。②過去受動態：was+過去分詞(made)。③現在進行受動態：is being+過去分詞(built)。【注意点】進行形の受動態「is/are being+p.p.」は「〜されているところだ」という意味で現在進行中の受動的な動作を表す。【関連知識】現在完了の受動態：has/have been+p.p.（例：The window has been broken.）`,
    pitfall: '③をis being buildとするのは誤り。buildの過去分詞はbuiltでbuildではない。',
    memoryTip: '進行受動態=be+being+p.p.の「be動詞が2つ」の形と覚える。',
  },
  {
    id: 'koko_kankan_eigo_b_13',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文の（　）に適切な語を入れ、分詞の形容詞的用法を完成させなさい。

① The woman (　) a red hat is my aunt.
  （赤い帽子をかぶっている女性は私の叔母だ）

② Look at the leaves (　) by the wind.
  （風に揺れている葉っぱを見て）

③ I bought a book (　) in France.
  （フランスで書かれた本を買った）

語群：blown / wearing / written`,
    answer: '① wearing　② blown　③ written',
    hint: '能動的な意味→現在分詞(-ing)、受動的な意味→過去分詞(p.p.)。',
    explanation: `【出題意図】現在分詞・過去分詞の形容詞的用法（名詞の修飾）を問う。【解説】①帽子を「かぶっている」（能動）→wearing（現在分詞）。②風に「揺れている」（受動：吹かれている）→blown（過去分詞、blowの過去分詞）。③「書かれた」（受動）→written（過去分詞）。【注意点】分詞1語のときは名詞の前、2語以上のときは名詞の後に置く（後置修飾）。【関連知識】関係代名詞節との書き換え：「the woman wearing」=「the woman who is wearing」。`,
    pitfall: '②をblowingとすると「吹いている葉」となり意味が変わる。風に吹かれるのでblown。',
    memoryTip: '「〜している（自分が動く）」=ing、「〜された（他から動かされる）」=p.p.。',
  },
  {
    id: 'koko_kankan_eigo_b_14',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: I have a terrible headache.
B: (　)
A: Thanks. I'll try that.

① You should see a doctor.
② That's too bad to hear.
③ I don't have a headache.
④ Let's go to the hospital together.`,
    answer: '① You should see a doctor.',
    hint: '相手が体調不良を訴えているときの適切な返答を選ぶ。',
    explanation: `【出題意図】体調不良に関する会話での適切な応答を選ぶ問題。【解説】Aがひどい頭痛を訴え、Bの返答の後に「ありがとう、試してみる」と答えているので、Bは何か提案をしているはず。①「医者に診てもらうべきだ」→提案として最適。②「それは聞いて残念」→共感の表現だが後のA「試してみる」に続かない。③文脈に合わない。④「一緒に病院へ行こう」→可能だがAの返答「試してみる」に自然につながりにくい。【注意点】Aの最後の返答「Thanks. I'll try that.」からBが提案・アドバイスをしているとわかる。【関連知識】体調表現：I have a fever.（熱がある）、I feel dizzy.（めまいがする）、You should rest.（休むべきだ）。`,
    pitfall: '②は共感表現だが「試してみる」という返答につながらない。',
    memoryTip: 'A「Thanks. I\'ll try that.」→直前のBは提案・アドバイスと逆算する。',
  },
  {
    id: 'koko_kankan_eigo_b_15',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、比較を使った重要表現を完成させなさい。

① This bag is three times (　) (　) that one.
  （このバッグはあのバッグの3倍の大きさだ）

② The population of Tokyo is larger (　) that of Osaka.
  （東京の人口は大阪の人口より多い）

③ Mt. Everest is the (　) mountain in the world.
  （エベレストは世界で最も高い山だ）`,
    answer: '① as large as　② than　③ highest',
    hint: '①倍数表現：X times as〜as、②比較級+than、③最上級+in+場所。',
    explanation: `【出題意図】倍数表現・比較級・最上級の応用を問う。【解説】①「3倍の大きさ」→three times as large as。倍数+as+形容詞原級+as。②比較級の後はthan。③最上級+in+範囲（the world/Japan等）。【注意点】①の倍数表現：twice as〜as（2倍）、half as〜as（半分）も覚える。②thatは「that of Osaka」のように反復を避けるための代名詞（=the population of Osaka）。【関連知識】as〜as possible（できるだけ〜）も重要表現。`,
    pitfall: '①をthree times bigger thanとすると非標準。入試ではas〜asを使う形が基本。',
    memoryTip: '倍数表現：数+times as〜as。twice（2倍）はtwo timesより自然。',
  },
  {
    id: 'koko_kankan_eigo_b_16',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ to / I / what / do / know / don't ] next.
  （次に何をすればいいかわからない）

② [ the / is / who / woman / that ] standing by the door?
  （ドアのそばに立っている女性は誰ですか）

③ [ have / she / for / been / years / ten ] a nurse.
  （彼女は10年間看護師をしている）`,
    answer: `① I don't know what to do next.
② Who is the woman that is standing by the door?
③ She has been a nurse for ten years.`,
    hint: '①「疑問詞+to不定詞」、②疑問詞+is+主語+関係代名詞節、③現在完了（継続）+for+期間。',
    explanation: `【出題意図】語句整序問題。疑問詞+to不定詞・関係代名詞を含む疑問文・現在完了の継続用法の3つを問う。【解説】①「what to do」（何をすべきか）という疑問詞+不定詞の名詞句をI don't knowの目的語に置く。②「Who is the woman?」の疑問文＋「that is standing by the door」の関係代名詞節。③「has been a nurse」（現在完了）＋「for ten years」（期間）。【注意点】①は「I don't know what should I do」と疑問文の語順にしない。【関連知識】疑問詞+to do：where to go（どこへ行けばいいか）、how to cook（料理の仕方）など。`,
    pitfall: '③をshe is a nurse for ten yearsとするのは誤り。継続はhas/have beenを使う。',
    memoryTip: '期間（for〜/since〜）が見えたら現在完了の継続用法のサイン。',
  },
  {
    id: 'koko_kankan_eigo_b_17',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読み、設問に答えなさい。

Volunteering is an activity where people work without receiving money. Many people volunteer at local events, hospitals, or schools. By helping others, volunteers can learn new skills and make friends. In Japan, the number of volunteers has been increasing since the 1995 Great Hanshin Earthquake.

① What do people NOT receive when they volunteer?（英語で答えよ）
② 下線部「has been increasing」の時制は何か。
③ 本文の内容と合うものを選べ。
  ア. ボランティアは有償で働く。
  イ. ボランティアで新しいスキルが学べる。
  ウ. 日本では1995年以降ボランティア数が減少している。`,
    answer: '① They do not receive money.\n② 現在完了進行形\n③ イ',
    hint: '①本文1行目「without receiving money」、②have/has been+動詞-ingの形、③各選択肢を本文と照合する。',
    explanation: `【出題意図】短文読解（内容把握・時制把握・正誤判定）を問う。【解説】①「work without receiving money」→They do not receive money.。②has been increasing=has been+動詞-ing=現在完了進行形。過去から現在まで継続して増えている動作を表す。③ア→本文は「without receiving money（お金を受け取らない）」なので誤り。イ→「can learn new skills」と合致→正解。ウ→「has been increasing（増加している）」なので誤り。【注意点】現在完了進行形は継続中の動作を強調する。【関連知識】1995年阪神大震災後の「ボランティア元年」は日本の社会的文脈として重要。`,
    pitfall: 'ウの「減少」と本文の「増加（increasing）」を混同しない。',
    memoryTip: 'increasing（増加）⇔decreasing（減少）の対義語をセットで覚える。',
  },
  {
    id: 'koko_kankan_eigo_b_18',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切なイディオムを入れなさい。

① I need to (　) up early tomorrow.（明日早起きする必要がある）
   ア. get  イ. take  ウ. make

② She (　) care of her younger brother.（彼女は弟の面倒を見た）
   ア. took  イ. got  ウ. kept

③ Let's (　) up with a good plan.（良い計画を考え出そう）
   ア. look  イ. come  ウ. give`,
    answer: '① ア(get up)　② ア(took care)　③ イ(come up)',
    hint: 'get up=起きる、take care of=世話をする、come up with=思いつく。',
    explanation: `【出題意図】頻出イディオム（句動詞・熟語）の意味を問う。【解説】①get up=起床する。②take care of〜=〜の世話をする（過去形took）。③come up with〜=〜を思いつく・考え出す。【注意点】②はtakeが核となる動詞。give up（あきらめる）、look up（調べる）と混同しない。③look up withやgive up withは誤り。【関連知識】重要句動詞：make up（化粧する・作り話をする）、keep up with（〜についていく）、run out of（〜がなくなる）。`,
    pitfall: '②をmake care of とするのは誤り。take care of が正しい熟語。',
    memoryTip: 'take care=世話、come up with=思いつく、get up=起きる、とセットで暗記。',
  },

  // ============================================================
  // Q19–Q30: 発展（difficulty: 'advanced'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_b_19',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えなさい。

Social media has changed the way people communicate. Today, millions of people share photos, opinions, and news online every day. While social media helps people stay connected with friends and family around the world, it also has some negative effects. Studies show that spending too much time on social media can lead to feelings of loneliness and anxiety, especially among teenagers.

【設問】
① What are two effects of social media mentioned in the passage?（英語で答えよ）
② 下線部「lead to」の意味を日本語で答えよ。
③ 筆者はSNSに対して肯定的か否定的か。本文の根拠を挙げて答えよ。`,
    answer: `① Positive: It helps people stay connected with friends and family. Negative: It can cause loneliness and anxiety.
② 〜をもたらす・〜につながる
③ 両面的（中立）。「helps people stay connected」と肯定面を認めつつ「can lead to loneliness and anxiety」と否定面も述べている。`,
    hint: '①whileの前後が対比（肯定面と否定面）。②lead to=〜をもたらす。③whileの構造から筆者の立場を判断する。',
    explanation: `【出題意図】SNSをテーマにした読解で、情報の対比・語句の意味・筆者の態度を問う。【解説】①「While〜（肯定）, it also has some negative effects.」の対比構造に着目。肯定=stay connected、否定=loneliness/anxiety。②lead to=「〜につながる・引き起こす」。③whileは「〜だが一方で」という逆接。筆者は一方的な立場でなく両面を提示している。【注意点】「筆者の立場」を問われたら必ず本文の語句を根拠として引用する。【関連知識】SNS関連語彙：social media、post（投稿する）、influencer、digital well-being。`,
    pitfall: 'whileを「〜の間」という時間の意味と取り違えない。ここでは逆接の接続詞。',
    memoryTip: 'while=「〜だが一方で」の逆接用法は論説文で頻出。前後を必ず比較する。',
  },
  {
    id: 'koko_kankan_eigo_b_20',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① If I (　) more time, I would learn the piano.
  ア. have　イ. had　ウ. will have　エ. would have

② I wish I (　) taller. I'm only 155cm.
  ア. am　イ. were　ウ. will be　エ. have been

③ Without your help, I (　) this project.
  ア. can't finish　イ. couldn't have finished　ウ. didn't finish　エ. won't finish`,
    answer: '① イ(had)　② イ(were)　③ イ(couldn\'t have finished)',
    hint: '①現在の仮定→仮定法過去（過去形）。②I wish+仮定法過去。③Without〜=If it were not for〜の変形（仮定法過去完了）。',
    explanation: `【出題意図】仮定法過去・I wish・Without〜の仮定法の応用を問う。【解説】①現実に反する現在の仮定→仮定法過去（If+過去形, would+原形）。②I wish+仮定法過去：現在の望みを過去形で表す。be動詞はwereを使う。③「あなたの助けなしには」=仮定法の条件部分。過去の事実に反する仮定→couldn't have finished（仮定法過去完了の帰結節）。【注意点】③Withoutは過去の文脈（プロジェクト完了）なので仮定法過去完了を使う。【関連知識】If it had not been for〜=Without〜（過去の仮定）の書き換えも頻出。`,
    pitfall: '①にhaveを使うと直説法になり「今本当に時間がある」という意味に変わる。',
    memoryTip: '仮定法：現在の仮定=過去形、過去の仮定=had+p.p.とwouldの後ろにhave+p.p.。',
  },
  {
    id: 'koko_kankan_eigo_b_21',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① He suggested to go to the zoo.
② The news were shocking to everyone.
③ I am used to get up early every morning.
④ She is more prettier than her sister.`,
    answer: `① to go → going（suggest+動名詞）
② were → was（newsは不可算名詞・単数扱い）
③ to get up → to getting up（be used to+動名詞）
④ more prettier → prettier（比較級の二重使用は誤り）`,
    hint: 'suggest+動名詞、newsは単数、be used to+動名詞、比較級の形に注意。',
    explanation: `【出題意図】頻出文法ミス4種（動名詞・不可算名詞・be used to・比較級）を問う誤文訂正問題。【解説】①suggest/avoid/enjoy等は動名詞をとる（suggest to goは不可）。②newsは形が複数っぽいが不可算名詞で単数扱い→was。③be used to〜ing=「〜することに慣れている」→toは前置詞なので後ろは動名詞。used to+動詞原形（過去の習慣）と混同しない。④prettierはすでに比較級。moreを付けると二重比較級になり誤り。【注意点】③のbe used toは頻出ひっかけ。後ろにinfinitiveでなく動名詞。【関連知識】newsと同様に単数扱いの名詞：information、advice、furniture。`,
    pitfall: '③used to get up（過去の習慣）とbe used to getting up（習慣に慣れている）を混同しない。',
    memoryTip: 'be used to=「〜に慣れている」→toは前置詞→後ろは名詞/動名詞。',
  },
  {
    id: 'koko_kankan_eigo_b_22',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問に答えなさい。

The idea that "money cannot buy happiness" is often quoted, but researchers have found a more complex picture. Studies suggest that up to a certain income level, more money does improve well-being by covering basic needs and reducing stress. However, beyond that point, additional wealth tends to have little effect on day-to-day happiness. What seems to matter more is how people spend their money — on experiences rather than objects, and on others rather than themselves.

① 下線部「a more complex picture」とはどういうことか、日本語で答えよ。（30字以内）
② お金と幸福の関係について、筆者が述べている内容を2点日本語でまとめよ。`,
    answer: `① お金と幸福の関係は「お金で幸福は買えない」という単純な話ではなく、より複雑だということ。（40字→要約すると）ある収入水準まではお金が幸福を改善するが、それ以上は効果が薄いという複雑な関係。
② ・一定の収入水準まではお金が幸福感を高める（基本的ニーズを満たしストレスを減らすため）。・一定水準を超えると追加の富は日々の幸福にほとんど影響しない。どう使うか（体験・他者への出費）が重要。`,
    hint: '①「お金で幸福は買えない」という単純な図式より複雑な実態があることを指す。②本文の「up to〜」と「beyond that point」で対比されている2つの事実をまとめる。',
    explanation: `【出題意図】論説文の下線部説明と内容要約を組み合わせた問題。比較・対比構造の把握と情報整理能力を問う。【解説】①「a more complex picture」=単純な格言（お金で幸福は買えない）より複雑な実態。研究が示す「条件付き」の関係を指す。②対比構造：(a)一定収入まで→幸福を改善（基本的ニーズ、ストレス減少）、(b)一定収入超→追加の富はほぼ効果なし。さらに「how（どのように使うか）」が重要とまとめる。【注意点】「two points」を求められているので必ず2点を明確に分けて書く。【関連知識】幸福経済学の研究（イースタリンパラドックス等）も背景知識として関連する。`,
    pitfall: '①を「複雑な絵」と直訳しない。「複雑な実態・状況」と意訳する。',
    memoryTip: '対比のキーワード：up to（〜まで）とbeyond that point（それを超えると）で2点を整理。',
  },
  {
    id: 'koko_kankan_eigo_b_23',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（25語以上）

「もし私がもっと英語を勉強していたなら、海外の友人ともっとうまくコミュニケーションが取れたのに。これからはもっと真剣に勉強しようと思う。」`,
    answer: `（解答例）If I had studied English harder, I could have communicated with my foreign friends better. From now on, I am going to study more seriously.（27語）

（別解）If I had practiced English more, I would have been able to talk with my friends abroad more smoothly. I plan to make more effort from now on.（30語）`,
    hint: '「〜していたなら〜できたのに」→仮定法過去完了（If+had+p.p.〜, could have+p.p.）。「これからは〜しようと思う」→be going to / plan to。',
    explanation: `【出題意図】仮定法過去完了を使った和文英訳。過去の後悔と未来への決意という2文構成の英作文。【解説】「もっと勉強していたなら」→If I had studied harder（仮定法過去完了のif節）。「うまくコミュニケーションが取れたのに」→could have communicated better（帰結節）。「これからは」→from now on。「もっと真剣に勉強しようと思う」→I am going to study more seriously / I plan to study harder。【注意点】仮定法過去完了の帰結節はwould/could/might + have + p.p.。「plan to〜」と「be going to〜」はどちらも可。【関連知識】後悔の表現：I should have studied harder.（もっと勉強すべきだった）も同様の文脈で使える。`,
    pitfall: 'If I studied harderとすると現在の仮定（仮定法過去）になり、過去の後悔を表せない。',
    memoryTip: '過去の後悔→仮定法過去完了：If+had done〜, could/would have done。',
  },
  {
    id: 'koko_kankan_eigo_b_24',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句を選びなさい。

① It is important (　) us to protect the environment.
  ア. for  イ. to  ウ. of  エ. with

② It was kind (　) you to help the old lady.
  ア. for  イ. to  ウ. of  エ. by

③ It takes about two hours (　) drive to Kyoto from Osaka.
  ア. for  イ. to  ウ. of  エ. with`,
    answer: '① ア(for)　② ウ(of)　③ イ(to)',
    hint: 'It is+形容詞+for/of+人+to do。人の性質を表す形容詞（kind/nice/clever）はof、その他はfor。It takes+時間+to do。',
    explanation: `【出題意図】It is〜for/of+人+to do構文とIt takes〜to do構文を問う。【解説】①importantは人の性質ではなく状況の重要性を表す→for us。②kindは人の性質・態度を表す形容詞→of you（あなたは親切だった、という意味が込まれる）。③It takes+時間+to do=「〜するのに〜の時間がかかる」→to drive。【注意点】ofを使う形容詞：kind/nice/clever/stupid/careless/polite等（人の性質・人格評価）。forを使う形容詞：important/difficult/easy/necessary/interesting等。【関連知識】It is easy for me to solve this.とShe is kind.の両方の意味を持つ形容詞がofの基準。`,
    pitfall: 'It is difficult of us to understand はofではなくfor。difficultは人の性質ではない。',
    memoryTip: 'of=人の性質（kind/nice/clever/stupid）、for=その他の形容詞と覚える。',
  },
  {
    id: 'koko_kankan_eigo_b_25',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えなさい。

Reading books and watching videos are both popular ways to learn. Some people prefer books because they allow readers to think at their own pace and develop deeper understanding. Others prefer videos because they can explain concepts with visuals and are often more entertaining. Research suggests that combining both methods — reading for depth and videos for initial understanding — may produce the best results.

① What advantage of reading is mentioned in the passage?（英語で答えよ）
② 下線部「combining both methods」とは何と何を組み合わせることか、日本語で答えよ。
③ このエッセイで筆者が最終的に薦めているのはどのような学習法か。（日本語40字以内）`,
    answer: `① Books allow readers to think at their own pace and develop deeper understanding.
② 読書（深い理解のため）と動画視聴（最初の理解のため）を組み合わせること。
③ 読書で深く理解し、動画で最初の理解を得るという、両方の方法を組み合わせた学習法。`,
    hint: '①「Some people prefer books because〜」に注目。②combining both methods=reading for depth + videos for initial understanding。③第3文がresearch suggestsの主張。',
    explanation: `【出題意図】比較・対比構造の英文読解。情報の抽出・下線部説明・筆者の結論把握を問う。【解説】①reading利点：「think at their own pace」「develop deeper understanding」。②combining both methods=「reading for depth（深い理解のための読書）」と「videos for initial understanding（最初の理解のための動画）」。③最後の文「combining both methods...may produce the best results」が筆者の結論。【注意点】①は「Some people prefer books because〜」の because以下が理由=利点。複数要素を含むので全部答える。【関連知識】学習法に関する語彙：pace（ペース）、concept（概念）、visual（視覚的なもの）、comprehension（理解）。`,
    pitfall: '①でvideoの利点を答えないこと。「books」の利点を選択的に答える。',
    memoryTip: 'Some prefer A because〜. Others prefer B because〜. Research says combine both. この流れが論説文の典型パターン。',
  },
  {
    id: 'koko_kankan_eigo_b_26',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話文の（　①　）〜（　④　）に入る最も適切な文を選びなさい。

[On the phone]
A: Hello, could I speak to Mr. Tanaka, please?
B: (　①　)
A: My name is Sato. I'm calling about the job interview.
B: (　②　) He's currently in a meeting.
A: Oh, I see. (　③　)
B: Of course. Could you leave your phone number?
A: Sure. It's 090-1234-5678.
B: (　④　) I'll make sure he gets the message.

ア. I'm afraid he's not available right now.
イ. May I ask who's calling?
ウ. Thank you. Got it.
エ. Could I leave a message?`,
    answer: '① イ　② ア　③ エ　④ ウ',
    hint: '電話での会話の定型表現。①名前を聞く、②不在を伝える、③伝言を頼む、④番号を確認して終わる。',
    explanation: `【出題意図】電話での会話（ビジネス英語）の定型表現と文脈の流れを問う。【解説】①名前を聞く場面→「May I ask who's calling?」（イ）。②担当者不在を伝える→「I'm afraid he's not available right now.」（ア）。③伝言を頼む→「Could I leave a message?」（エ）。④番号を聞いた後の確認→「Thank you. Got it.」（ウ）。【注意点】電話英語の定型表現は入試で頻出。「I'm afraid〜」は遠回しに悪い知らせを伝える丁寧な表現。【関連知識】電話定型表現：Speaking.（私です）、Hold on please.（少しお待ちください）、I'll put you through.（おつなぎします）。`,
    pitfall: '①でアを選ぶと、まだ名前を聞く前に不在を告げることになり文脈が合わない。',
    memoryTip: '電話の流れ：①名前確認→②状況説明→③対応の提案→④確認・終了。',
  },
  {
    id: 'koko_kankan_eigo_b_27',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な関係詞を入れなさい。（whichまたはwhatのどちらかを選ぶこと）

① He gave me (　) I needed most.
  （彼は私が最も必要なものをくれた）

② He gave me something (　) I needed most.
  （彼は私が最も必要なものを何かくれた）

③ (　) surprised me most was her reaction.
  （私を最も驚かせたのは彼女の反応だった）`,
    answer: '① what　② which　③ What',
    hint: 'what=先行詞を含む関係詞（the thing which）。which=先行詞が別にある関係詞。',
    explanation: `【出題意図】関係詞whatとwhichの使い分けを問う。【解説】①先行詞がない→what（=the thing which）。「what I needed most」=「私が最も必要としたもの」で名詞節。②先行詞something（物）がある→which。③文頭でwhatが主語の名詞節になる。「What surprised me most」=「私を最も驚かせたこと」。【注意点】whatは先行詞を内包するため、前に名詞（先行詞）が来ない。whichは必ず先行詞が前にある。【関連知識】what節は名詞節として主語・目的語・補語になれる。What he said was true.（彼が言ったことは本当だった）も頻出パターン。`,
    pitfall: '①をwhich I neededとすると先行詞がなくwhichは使えない。whatを使う。',
    memoryTip: 'what=the thing which（先行詞込み）と覚えて、先行詞がないときにwhatを選ぶ。',
  },
  {
    id: 'koko_kankan_eigo_b_28',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えなさい。

[Passage]
In many countries, the school year begins in September, but Japan starts it in April. This difference has historical and cultural roots. The April start aligns with Japan's cherry blossom season, making it a time of new beginnings. However, some argue that shifting to a September start would benefit Japanese students by making it easier to study abroad or join international programs that begin in the fall.

【設問】
① When does the school year begin in Japan?
② 「April start」に関して本文が挙げている利点を日本語で述べよ。
③ 「September start」への変更を支持する意見を日本語でまとめよ。
④ 下線部「aligns with」の意味を日本語で答えよ。`,
    answer: `① It begins in April.
② 日本の桜の季節と一致し、新たな始まりの時期となる（文化的・歴史的背景がある）。
③ 海外留学や秋始まりの国際プログラムへの参加が容易になり、日本の学生にとって有益だという意見。
④ 〜と一致する・〜に沿う`,
    hint: '①本文1文目、②「aligns with〜」の前後、③「some argue that〜」の内容、④align with=一致する。',
    explanation: `【出題意図】日本の学年度開始月をテーマにした読解。情報抽出・内容把握・語句の意味を問う。【解説】①「Japan starts it in April」から答える。②April startの利点：cherry blossom season（桜の季節）、time of new beginnings（新たな始まりの時）、historical and cultural roots（歴史的・文化的背景）。③September startの主張：studying abroad（海外留学）、international programs（国際プログラム）、begin in the fall（秋開始）に合わせやすい。④align with〜=〜と一致する・〜に沿う（alignは「一列に並べる・一致させる」の動詞）。【注意点】②と③は対立する意見として本文に提示されていることを理解して整理する。【関連知識】学年度に関する語彙：school year、semester（学期）、fall semester（秋学期）、academic calendar（学事暦）。`,
    pitfall: '②でSeptember startの利点を混同しない。April startの利点のみを答える。',
    memoryTip: 'align with=「整列する」→「一致する」。政策・価値観が一致するときに使う動詞。',
  },
  {
    id: 'koko_kankan_eigo_b_29',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、英語で意見を述べなさい。（35語以上）

テーマ：「高校生が海外留学することは良いことだと思いますか、理由とともに述べなさい。」

（I think / I believe で書き始めること）`,
    answer: `（賛成例）I think studying abroad in high school is a great experience. Students can improve their English skills, learn about different cultures, and become more independent. These experiences help them grow as global citizens. （35語）

（反対例）I believe studying abroad is not always necessary for high school students. It can be expensive and stressful, and students can still learn about the world through books, online courses, and international exchange programs at home.（37語）`,
    hint: '主張→理由1・2→まとめの構成で書く。賛否どちらでも、理由が明確なら評価される。',
    explanation: `【出題意図】海外留学をテーマにした意見英作文。主張・理由・具体例・まとめの構成力と35語以上の語数条件を問う。【解説】賛成の理由例：英語力向上・異文化理解・自立心の育成・グローバル市民としての成長。反対の理由例：費用・ストレス・家族との別離・国内でも代替手段がある。どちらの立場でも、理由が具体的で論理的なら採点上評価される。【注意点】35語以上を確実に満たすために理由を2つ以上挙げる。「For example」「In addition」「Therefore」などの接続詞で文をつなぐと自然。スペルミスや主語と動詞の一致を最後に確認する。【関連知識】留学関連語彙：study abroad、exchange student、cultural differences、language barrier、global citizen。`,
    pitfall: '主張のみで理由を書かないと語数不足になる。必ず「because〜」で理由を続ける。',
    memoryTip: '英作文の鉄則：主張→理由（because）→具体例（for example）→まとめ（therefore）。',
  },
  {
    id: 'koko_kankan_eigo_b_30',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えなさい。

[Passage 1]
Technology is transforming education. In many schools, students now use tablets and laptops instead of textbooks. Online platforms allow teachers to share videos, quizzes, and assignments instantly. Supporters of educational technology argue that it makes learning more engaging and prepares students for the digital future.

[Passage 2]
However, critics point out that too much screen time can harm students' concentration and social skills. Some research suggests that handwriting helps students remember information better than typing. Teachers also worry that students may become overly dependent on technology and lose the ability to think critically without it.

[Passage 3]
The most effective approach may be to use technology as a tool rather than a replacement for traditional learning. Balancing digital and analog methods could help students gain both the technological skills needed for modern society and the deep thinking skills developed through reading and writing by hand.

【設問】
① 第1段落でtechnology supportersが主張する利点を英語で2点答えよ。
② 第2段落の批判を日本語で2点まとめよ。
③ 下線部「a tool rather than a replacement」とはどういう意味か、日本語で答えよ。
④ 第3段落の筆者の立場を80字以内の日本語で論じよ。`,
    answer: `① It makes learning more engaging. / It prepares students for the digital future.
② ・スクリーンを見る時間が増えすぎると、集中力と社会性が損なわれる可能性がある。・手書きの方がタイピングより情報を記憶しやすいという研究がある。（技術への過度な依存で批判的思考力が失われる懸念も含む）
③ 技術は従来の学習の「代わり」ではなく「道具」として使うべきだということ。
④ 筆者はデジタルとアナログのバランスをとることを最善の方法として提案している。技術は現代社会に必要なスキルを与える一方、読み書きを通じた深い思考力も必要だという立場。（78字）`,
    hint: '①Supporters argue that〜の内容を2点。②critics point out〜とresearch suggests〜を2点。③rather than=〜ではなく。④第3段落のbalancing以降が核心。',
    explanation: `【出題意図】教育と技術をテーマにした3段落の論説文読解。賛成・批判・折衷案という論説の典型構造を理解し、各段落から情報を抽出・整理・論評する最高レベルの読解問題。【解説】①第1段落：「makes learning more engaging」と「prepares students for the digital future」の2点。②第2段落：スクリーンタイムと集中力・社会性、手書きvsタイピングの記憶力研究、批判的思考力の喪失懸念の3点から2点を選ぶ。③rather than=「〜ではなく」。技術を主役（replacement）ではなく補助的役割（tool）として位置づける。④第3段落：賛成・批判どちらにも偏らず、デジタル（現代スキル）とアナログ（深い思考・手書き）のバランスを最善策とする折衷案の立場。自分の言葉を加えるとより高い評価を得られる。【注意点】④では必ず「筆者の主張の要約」に加えて「自分の意見・感想」の要素を入れること。字数（80字以内）の管理も重要。【関連知識】教育テクノロジー語彙：EdTech、digital literacy、critical thinking、screen time、handwriting、tablet/laptop。論説文の構造：問題提起（賛成）→反論（批判）→結論（折衷）は最頻出パターン。`,
    pitfall: '①でcriticsの主張を書かない。Supporters（第1段落）の主張のみを2点答える。',
    memoryTip: '3段落論説文：段落1=賛成、段落2=反対、段落3=結論（折衷・バランス）のパターンを覚える。',
  },
];
