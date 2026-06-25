import type { Question } from './questions';

export const kkEigo: Question[] = [
  {
    id: 'kk_eigo_01',
    subject: 'eigo',
    question: '受動態に書き換えよ。"People speak English all over the world."',
    answer: 'English is spoken all over the world (by people).',
    hint: '主語(English)を前に、be動詞+過去分詞。by+元の主語は省略可',
    explanation:
      '能動態S+V+O → 受動態O+be動詞+過去分詞(+by S)。speak→spoken。主語English(単数)・現在形 → is spoken。by peopleは一般的なので省略が自然。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_02',
    subject: 'eigo',
    question:
      '現在完了形で答えよ。「私は3年間ずっと英語を勉強しています（現在も継続中）」を英語で言え。',
    answer:
      'I have been studying English for three years. （または I have studied English for three years.）',
    hint: '継続を表す現在完了：have/has + 過去分詞。期間はfor、起点はsince',
    explanation:
      '現在完了（継続）：have/has+p.p.。for+期間(for three years)、since+起点(since 2021)。継続動作を強調するなら現在完了進行形(have been -ing)が自然。I have studied=3年間の学習(完了・継続)、I have been studying=今もずっと勉強中(継続強調)。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_03',
    subject: 'eigo',
    question:
      '不定詞の用法を判断せよ。①"I want to go to Tokyo." ②"I have a plan to visit Kyoto." ③"She went to the store to buy milk."',
    answer:
      '①名詞的用法（〜すること）②形容詞的用法（planを修飾：〜するための）③副詞的用法（目的：〜するために）',
    hint: '名詞的=S・O・Cになる。形容詞的=直前の名詞を修飾。副詞的=目的・原因・結果',
    explanation:
      '不定詞to+動詞原形の3用法：①名詞的=wantの目的語「東京に行くこと」②形容詞的=planを修飾「京都を訪ねるための計画」③副詞的=went to storeの目的「ミルクを買うために」。文中での役割（S・O・C・修飾語）で判断する。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_04',
    subject: 'eigo',
    question:
      '関係代名詞を使って2文を1文にせよ。"I met a student. She won the science prize."',
    answer: 'I met a student who won the science prize.',
    hint: '先行詞が人→who。先行詞が物→which/that',
    explanation:
      '関係代名詞whoは先行詞が人のとき使い、後に続く節（won the science prize）が先行詞(a student)を修飾する。she→who（同じ人物を指す）。I met a student who won...「科学賞を取った生徒に会った」。先行詞が物ならwhich/that。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_05',
    subject: 'eigo',
    question:
      '比較の文を完成させよ。①「東京は大阪よりも大きい。」②「富士山は日本で一番高い山だ。」③「彼女は彼の3倍速く走る。」',
    answer:
      '①Tokyo is larger than Osaka. ②Mt. Fuji is the highest mountain in Japan. ③She runs three times as fast as he (does).',
    hint: '比較級-er than / more+形容詞 than。最上級the -est / the most。倍数+as...as',
    explanation:
      '比較級：形容詞にerまたはmore。large→larger(1音節はer)。最上級：the+形容詞est/the most。high→highest。倍数：数+times as+原級+as（3倍速い=three times as fast as）。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_06',
    subject: 'eigo',
    question:
      '間接疑問文に書き換えよ。"Where does he live?" → "I don\'t know ___."',
    answer: "I don't know where he lives.",
    hint: '間接疑問文：疑問詞+主語+動詞（疑問文語順にしない）',
    explanation:
      "直接疑問文(Where does he live?)を他の文に組み込む場合、語順を平叙文と同じにする。Where does he live? → where he lives（does消えて3単現sが動詞につく）。I don't know + where he lives.。Do you know what time it is?なども同じ構造。",
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_07',
    subject: 'eigo',
    question:
      '次の英文を読んで問いに答えよ。"Recycling is one of the most important ways to protect our environment. When we recycle paper, glass, and plastic, we reduce the amount of waste we produce. This helps save natural resources and energy. However, recycling alone is not enough. We should also try to reduce and reuse materials before recycling them."\n問：本文の主旨を日本語で30字以内にまとめよ。また "reduce, reuse, recycle" を順番通りに日本語に訳せ。',
    answer:
      '主旨：環境を守るためにリサイクルは大切だが、まず削減・再利用を心がけることが重要。reduce=削減する、reuse=再利用する、recycle=再生利用する',
    hint: '本文最後の文が主張。reduce/reuse/recycleの順序に注目',
    explanation:
      '本文の構造：①リサイクルの重要性②リサイクルの効果③「しかし(However)」で逆接→リサイクルだけでは不十分④should also try to reduce and reuse=主張。3R：Reduce(使う量を減らす)・Reuse(繰り返し使う)・Recycle(資源として再利用)の順番が重要（削減が最優先）。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_08',
    subject: 'eigo',
    question:
      "対話文の空所を補え。A: \"Have you ever been to Kyoto?\" B: \"( ①　).\" A: \"Really? I went there last year. It was beautiful.\" B: \"I'd like to go someday. ( ②　)?\" A: \"I recommend Kinkakuji Temple.\"",
    answer:
      "①No, I haven't. （または Yes, I have.） ②What do you recommend? （または What should I visit?）",
    hint: "Have you ever been to~?はhave+過去分詞の現在完了疑問文。応答はYes/No+have/haven't",
    explanation:
      "Have you ever been to~?「〜に行ったことがありますか」→現在完了の経験。返答：Yes, I have. / No, I haven't.。②の空所：A's answer「金閣寺をおすすめします」から逆算→「何をおすすめしますか」What do you recommend?が自然。",
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_09',
    subject: 'eigo',
    question:
      '正しい語順に並べ替えよ。[ never / have / to / I / been / London ]',
    answer: 'I have never been to London.',
    hint: '現在完了：have/has + p.p.。副詞neverはhave/hasの直後',
    explanation:
      '現在完了の語順：主語+have/has(+副詞)+p.p.。neverはhaveの直後に置く。been to+場所「〜に行ったことがある」。I have never been to London.「私はロンドンに行ったことがない」(経験の否定)。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
  {
    id: 'kk_eigo_10',
    subject: 'eigo',
    question:
      '条件英作文。テーマ「あなたが将来やってみたい仕事と、その理由」について30語以上で書け。',
    answer:
      'I want to be a doctor in the future. I want to help sick people and save their lives. I am also interested in science, so I think this job suits me well.（約35語）',
    hint: 'I want to be a / I would like to work as a 〜で始める。Because/soで理由を続ける',
    explanation:
      '英作文の型：①結論(what)「〜になりたい/〜で働きたい」②理由(why)「because/so」③具体的説明。語数チェック：30語以上を意識。よく使える表現：in the future(将来), I am interested in~(〜に興味がある), I think~(〜と思う), suits me(自分に合っている)。スペル・文法を確認する。',
    difficulty: 'advanced',
    course: 'koko-kankan',
    examType: 'koko',
  },
];

export const ktEigo: Question[] = [
  {
    id: 'kt_eigo_01',
    subject: 'eigo',
    question:
      '分詞・分詞構文の問題。日本語に合うように英語の空所を補え。\n①「眠っている赤ちゃんを起こさないでください。」Don\'t wake up the baby ( ) (　　).\n②「宿題を終えてから、彼は外に出た。」( ) (　　) his homework, he went outside.',
    answer: '①sleeping ②Having finished',
    hint: '現在分詞(〜している)が名詞を修飾。分詞構文の完了形：Having+過去分詞',
    explanation:
      '①分詞による名詞修飾：sleeping baby「眠っている赤ちゃん」（現在分詞が形容詞的に使われる）。②分詞構文：主文の動詞より前の動作をHaving+p.p.で表す（完了形分詞構文）。Having finished his homework(宿題を終えてから)→he went outside。分詞構文の主語は主文の主語と同じ(he)。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_02',
    subject: 'eigo',
    question:
      '関係詞の複雑な用法。①"The city in which I was born is very famous." を "The city which I was born in" と書き換えて意味を日本語にせよ。②次の文を完成させよ。"What surprised me was ___." （彼が早く来たこと）',
    answer:
      '①私が生まれた都市はとても有名だ。(in whichは場所を示す関係詞句) ②What surprised me was that he came early.',
    hint: '前置詞+which=which+...+前置詞。Whatは先行詞を含む関係代名詞「〜すること・もの」',
    explanation:
      '①前置詞+関係代名詞：in which = where（場所を示す関係副詞と同義）。"the city where I was born"と書き換え可。②Whatは先行詞を含む関係代名詞(=the thing which)。What surprised me「私を驚かせたこと」が主語→述語はwas→補語はthat節「彼が早く来たこと」。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_03',
    subject: 'eigo',
    question:
      '仮定法過去完了の問題。「もし昨日雨が降らなかったら、私たちは野球をしていただろうに。」を英語で書け。',
    answer: 'If it had not rained yesterday, we would have played baseball.',
    hint: '仮定法過去完了：If+主語+had+p.p., 主語+would have+p.p.（過去の事実に反する仮定）',
    explanation:
      '仮定法の種類：①仮定法過去=現在の事実に反する仮定（If I were rich, I would buy it.）②仮定法過去完了=過去の事実に反する仮定（If it had not rained, we would have played.）。過去の事実：昨日実際は雨が降った。だから「降らなかったら」はhad not rained。結果もhave+p.p.（would have played）。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_04',
    subject: 'eigo',
    question:
      '高度な長文読解。"Artificial intelligence is changing many aspects of our daily lives. From voice assistants to recommendation systems, AI is everywhere. Some people worry that AI will take away jobs, while others believe it will create new opportunities. The key is how humans and AI can work together. Rather than competing, we should focus on tasks that require creativity, empathy, and human judgment—things that AI cannot easily replace."\n問：①"Rather than competing"が示す内容を日本語で説明せよ。②筆者はAIに対してどのような立場か。本文から根拠を引用して説明せよ。',
    answer:
      '①AIと人間が競争するのではなく、互いに協力・補完し合うべきだということ。②筆者はAIに対して肯定的・協調的な立場。根拠：「humans and AI can work together」「focus on tasks that require creativity...」からAIを脅威としてではなく、人間が得意なことに集中することでうまく共存できると主張。',
    hint: 'Rather than〜=〜するのではなく。筆者の立場はhowやwe shouldに現れる',
    explanation:
      '長文読解のポイント：①逆接・対比表現(while, rather than, however)の前後を注意②筆者の主張=should/key/focus onなどの表現③本文根拠引用=該当箇所を探して日本語で説明。Rather than competing(競争するより)→we should focus on(〜に集中すべき)=人間はAIが苦手な創造性・共感・判断力を活かすべきというポジティブな主張。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_05',
    subject: 'eigo',
    question:
      '高度な英作文。「スマートフォンの使用時間を制限することの賛否について、あなたの考えを60語以上で書け。理由を2つ挙げること。」',
    answer:
      'I agree that we should limit smartphone use. First, spending too much time on smartphones can harm our health, especially our eyesight and sleep. Second, it can reduce face-to-face communication with family and friends. Of course, smartphones are useful, but we need to use them wisely and set a time limit.（約60語）',
    hint: 'I agree/disagree thatで意見を示す。First, Second,で理由を2つ。反論も少し触れるとより高評価',
    explanation:
      '意見文の型：①意見(agree/disagree)②First（理由1）③Second（理由2）④反論への言及(Of course, but...)⑤まとめ。語数管理：60語を超えるよう意識。減点ポイント：スペルミス・三単現のs漏れ・時制の混乱。高評価ポイント：because/although/however等の接続詞使用・具体例・論理的構成。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_06',
    subject: 'eigo',
    question:
      "話法の転換。直接話法を間接話法に書き換えよ。\"She said to me, 'I will help you tomorrow.'\"",
    answer: 'She told me that she would help me the next day.',
    hint: 'said to → told。I→she、will→would、you→me、tomorrow→the next day',
    explanation:
      '話法転換のルール：①said to+人→told+人②I→she(話者に合わせる)③you→me(聞き手に合わせる)④時制を1つ過去にずらす(will→would)⑤時の表現変換：tomorrow→the next day, now→then, today→that day, yesterday→the day before。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_07',
    subject: 'eigo',
    question:
      '複雑な整序英作文。[ been / long / Japan / for / in / he / has / living ]',
    answer: 'He has been living in Japan for long.',
    hint: '現在完了進行形：have/has been -ing。for+期間',
    explanation:
      '現在完了進行形：S+have/has+been+-ing（今もずっと〜し続けている）。He has been living in Japan「ずっと日本に住んでいる」。for long / for a long time「長い間」。語順：S(He)+has+been+living(動詞)+in Japan(場所)+for long(期間)。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_08',
    subject: 'eigo',
    question:
      '文脈から語彙の意味を推測せよ。"The scientist was very meticulous in her work. She checked every detail twice and never made careless mistakes."\n下線部 "meticulous" の意味を文脈から推測し、日本語で答えよ。',
    answer: '細心の注意を払う・几帳面な・緻密な（細部まで注意深い）',
    hint: '後に続く説明文から意味を推測する。checked every detail, never made careless mistakes',
    explanation:
      '語彙推測の戦略：①ターゲット語の前後の文脈を読む②肯定的/否定的文脈を判断③具体的な行動（checked every detail, never made careless mistakes）から抽象的な意味を推測。meticulous=非常に細心・几帳面な（英語の語感：micro=細かい、curious=好奇心→combined: very careful about details）。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_09',
    subject: 'eigo',
    question:
      '段落整序問題。次の段落を正しい順序に並べ替えよ。\nA. "As a result, more people started using public transportation and cycling."\nB. "One city decided to introduce a new policy to reduce car traffic in the city center."\nC. "This led to cleaner air and a more pleasant urban environment."\nD. "Cars were charged a fee to enter the central area during peak hours."',
    answer: 'B → D → A → C',
    hint: '話の流れ：問題提起→具体的政策→結果→効果の順になる',
    explanation:
      '段落整序のポイント：①最初の文＝トピック導入（BのOne city decided...が話の出発点）②具体的措置（DのCars were charged...がpolicyの説明）③結果（Aのmore people started...がAs a resultで始まる=因果）④最終結論（Cのcleaner air...がThis led to=さらなる結果）。接続表現(As a result, This led to)が順序のヒント。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
  {
    id: 'kt_eigo_10',
    subject: 'eigo',
    question:
      'テーマ英作文。「外国語を学ぶことの意義について、具体的な経験や例を挙げながら70語以上で自分の考えを書け。」',
    answer:
      "Learning a foreign language is very important in today's world. First, it allows us to communicate with people from different countries and understand their cultures. For example, if you can speak English, you can make friends all over the world and get access to more information. Second, learning another language helps us understand our own language better. In conclusion, foreign language learning broadens our horizons and connects us to the world.（約80語）",
    hint: 'First/Second/In conclusionで構成。具体例(For example)を必ず入れる。allow/broaden horizons等の表現',
    explanation:
      '高得点英作文の要素：①明確な主張「Learning a foreign language is important」②理由1+例(First...For example)③理由2(Second)④まとめ(In conclusion)。高校入試で差がつく表現：allow us to do「〜することを可能にする」、broaden horizons「視野を広げる」、get access to「〜にアクセスする」、connect us to「〜と繋げる」。',
    difficulty: 'advanced',
    course: 'koko-top',
    examType: 'koko',
  },
];
