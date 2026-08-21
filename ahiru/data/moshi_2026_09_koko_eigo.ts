import type { Question } from './questions';

// 月例実力テスト 2026年9月号（高校受験・英語）
// 中3の9月時点を想定：中1・中2文法全般＋受動態・現在完了(経験・継続・完了)まで。
// 関係代名詞・分詞の後置修飾・間接疑問文・仮定法はまだ扱わない（9月時点では未習範囲のため）。
export const moshi202609KokoEigo: Question[] = [
  // ============================================================
  // 文法・語彙（基礎）: 3問
  // ============================================================
  {
    id: 'moshi_2026_09_eigo_01',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'basic',
    question: '空所に入る最も適切な語を選びなさい。 「My parents ______ very busy last weekend.」',
    choices: ['① was', '② were', '③ is', '④ are'],
    answer: '② were',
    hint: '主語 "My parents" は複数。文末の "last weekend" にも注目しよう。',
    explanation:
      '【文法のポイント】be動詞は主語と時制によって形が変わります。"My parents" は複数なので、be動詞は "are" の過去形である "were" を使います。さらに "last weekend" という過去を表す語句があるので、過去形が必要です。',
    pitfall: '"is" や "are" のような現在形を選ばないこと。文末の "last weekend" を見落とすと現在形を選んでしまいやすい。',
    memoryTip: 'be動詞の過去形：I/He/She/It → was、You/We/They(複数) → were。主語の数と時を必ずチェック！',
  },
  {
    id: 'moshi_2026_09_eigo_02',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'basic',
    question: '空所に入る最も適切な語を選びなさい。 「My brother ______ like natto, but I love it.」',
    choices: ["① doesn't", "② don't", "③ isn't", '④ not'],
    answer: "① doesn't",
    hint: '主語 "My brother" は三人称単数。一般動詞の否定文の形を思い出そう。',
    explanation:
      '【文法のポイント】一般動詞の否定文は "don\'t / doesn\'t + 動詞の原形" で作ります。主語が三人称単数（My brother）の場合は "doesn\'t" を使います。"like" はそのまま原形で使うので "doesn\'t like" が正解です。',
    pitfall: '"isn\'t" はbe動詞の否定形なので、一般動詞 "like" と一緒には使えない。一般動詞の文にbe動詞を混ぜないよう注意。',
    memoryTip: '一般動詞の否定文：主語が三単現→doesn\'t+動詞の原形、それ以外→don\'t+動詞の原形！',
  },
  {
    id: 'moshi_2026_09_eigo_03',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'basic',
    question: '空所に入る最も適切な語を選びなさい。 「This bag is ______ than that one.」',
    choices: ['① heavy', '② heavier', '③ heaviest', '④ more heavy'],
    answer: '② heavier',
    hint: '"than" があるので比較級の文だとわかる。"heavy" の比較級の作り方を確認しよう。',
    explanation:
      '【文法のポイント】"than" を伴う文は比較級を使います。"heavy" は語尾が "y" で終わる形容詞なので、"y" を "i" に変えて "-er" をつけ、"heavier" となります。',
    pitfall: '④ "more heavy" のように "more" をつけてしまう間違いが多い。"heavy" のような短い形容詞は "-er" をつける比較級を使う。',
    memoryTip: '語尾が "y" で終わる形容詞の比較級は "y→i" + "er"！ happy→happier, easy→easier も同じルール。',
  },

  // ============================================================
  // 文法・語彙（標準）: 6問（うち1問は対話読解）
  // ============================================================
  {
    id: 'moshi_2026_09_eigo_04',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語句を選びなさい。 「When my mother called me, I ______ my homework.」',
    choices: ['① do', '② did', '③ was doing', '④ am doing'],
    answer: '③ was doing',
    hint: '「母が電話をかけてきたとき」という過去のある時点で進行中だった動作を考えよう。',
    explanation:
      '【文法のポイント】過去のある時点で進行中だった動作は過去進行形 "was/were + 動詞のing形" で表します。"When my mother called me"（過去の一時点）に、私は宿題をしている最中だったので "was doing" が正解です。',
    pitfall: '② "did" を選ぶと「宿題をした（完了した動作）」という意味になり、「ちょうどしている最中だった」というニュアンスが出ない。',
    memoryTip: '"When + 過去形の文, 主語 + was/were + ~ing" は「~したとき、ちょうど…していた」という定番パターン！',
  },
  {
    id: 'moshi_2026_09_eigo_05',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語句を選びなさい。 「Look at those dark clouds! It ______ rain soon.」',
    choices: ['① will', '② is going to', '③ was going to', '④ would'],
    answer: '② is going to',
    hint: '目の前の様子（dark clouds）を見て「もうすぐ〜しそうだ」と判断する場合の未来表現は？',
    explanation:
      '【文法のポイント】"be going to" は、目の前の状況や証拠から「これから〜しそうだ」と判断できるときに使います。ここでは「暗い雲を見て」雨が降りそうだと判断しているので "is going to" が適切です。一方 "will" はその場で決めた意志や、根拠のない単純な予測に使われます。',
    pitfall: '① "will" も未来を表せるが、目の前の証拠に基づく予測には be going to の方が自然。入試でもこの使い分けはよく問われる。',
    memoryTip: '"be going to" = 目に見える根拠がある予測、"will" = その場の判断・単純な予測、と覚えよう！',
  },
  {
    id: 'moshi_2026_09_eigo_06',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語を選びなさい。 「You look very pale. You ______ see a doctor right now.」',
    choices: ['① must', '② may', '③ can', '④ will'],
    answer: '① must',
    hint: '「顔色がとても悪い」という状況から、強く勧める・必要性を伝える表現を考えよう。',
    explanation:
      '【文法のポイント】"must" は「〜しなければならない」という強い義務・必要性を表す助動詞です。顔色が悪い相手に対して「今すぐ医者に診てもらうべきだ」という強い勧めを表すには "must" が最も適切です。',
    pitfall: '② "may" は「〜してもよい」という許可の意味なので、この文脈には合わない。助動詞はそれぞれ持つ意味の違いをしっかり区別しよう。',
    memoryTip: 'must=強い義務・必要性、may=許可、can=能力・可能性。それぞれの助動詞の「気持ちの強さ」を意識しよう！',
  },
  {
    id: 'moshi_2026_09_eigo_07',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語句を選びなさい。 「My dream is ______ a vet in the future.」',
    choices: ['① become', '② becoming', '③ to become', '④ became'],
    answer: '③ to become',
    hint: '"My dream is ~" のbe動詞の補語となる部分。「〜すること」という意味を表す不定詞の形を考えよう。',
    explanation:
      '【文法のポイント】"to + 動詞の原形" は「〜すること」という意味を表す不定詞の名詞的用法です。ここでは "My dream is to become a vet" で「私の夢は獣医になることだ」という意味になり、be動詞の補語としてto不定詞が使われています。',
    pitfall: '② "becoming"（動名詞）を選ぶ間違いが多い。"dream" や "plan" など将来の目標を表す名詞の後は不定詞を使うのが一般的。',
    memoryTip: '"My dream/goal/plan is to ~" = 「私の夢/目標/計画は〜することだ」という頻出パターン！',
  },
  {
    id: 'moshi_2026_09_eigo_08',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語句を選びなさい。 「My little sister enjoys ______ pictures of flowers.」',
    choices: ['① take', '② taking', '③ to take', '④ took'],
    answer: '② taking',
    hint: '"enjoy" の後に続く動詞の形を思い出そう。',
    explanation:
      '【文法のポイント】"enjoy" は動名詞（動詞のing形）を目的語にとる動詞です。"enjoy ~ing" で「〜することを楽しむ」という意味になります。不定詞（to take）を目的語にとることはできないので注意しましょう。',
    pitfall: '③ "to take" を選ぶ間違いが多い。"enjoy, finish, stop, give up" などは動名詞のみを目的語にとる動詞としてセットで覚えよう。',
    memoryTip: '動名詞だけを目的語にとる動詞：enjoy, finish, stop, give up, mind など。まとめて覚えておくと入試で有利！',
  },
  {
    id: 'moshi_2026_09_eigo_09',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    passage: `[対話を読んで答えなさい]
Emi: Good morning, Kota. You look tired today.
Kota: Good morning, Emi. Yeah, I'm really tired. I was late for school this morning.
Emi: Oh no, what happened?
Kota: I missed the first bus, so I had to wait twenty minutes for the next one.
Emi: That's tough. Did you run to school after that?
Kota: Yes, I did. I ran all the way from the bus stop, so I'm exhausted now.
Emi: You should get some rest during lunch break.
Kota: Good idea. Thanks, Emi.`,
    question:
      'Kotaが今朝遅刻した理由として正しいものを選びなさい。\n① 朝ごはんを食べるのに時間がかかったから\n② 最初のバスに乗り遅れたから\n③ 宿題を忘れて家に取りに帰ったから\n④ 目覚まし時計が鳴らなかったから',
    answer: '②',
    hint: '"I missed the first bus, so I had to wait twenty minutes for the next one." という発言に注目しよう。',
    explanation:
      '【読解のポイント】KotaはEmiに "I missed the first bus（最初のバスに乗り遅れた）" と説明しています。そのため次のバスを20分待たなければならず、結果として学校に遅刻しました。"miss the bus" は「バスに乗り遅れる」という重要表現です。',
    pitfall: '会話文では「原因→結果」の流れを正確に追うことが大切。"so" の前後で「原因」と「結果」を取り違えないように注意しよう。',
    memoryTip: '"miss the bus/train" = 「バス/電車に乗り遅れる」。日常会話で非常によく使われる表現！',
  },

  // ============================================================
  // 文法・読解（応用）: 6問（受動態・現在完了・長文読解2題）
  // ============================================================
  {
    id: 'moshi_2026_09_eigo_10',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    question: '空所に入る最も適切な語句を選びなさい。 「This song ______ by many people around the world.」',
    choices: ['① loves', '② is loved', '③ loved', '④ was love'],
    answer: '② is loved',
    hint: '「この歌は世界中の多くの人々に愛されている」という受け身の意味を表す形を考えよう。',
    explanation:
      '【文法のポイント】受動態は "be動詞 + 過去分詞" の形で「〜される」という意味を表します。主語 "This song" は「愛する」のではなく「愛される」側なので、受動態の "is loved" が正解です。動作をする側は "by ~" で表します。',
    pitfall: '① "loves" のような能動態を選ぶと「この歌が誰かを愛している」という不自然な意味になってしまう。主語が「〜される側」かどうかを必ず確認しよう。',
    memoryTip: '受動態＝be動詞＋過去分詞。「主語は動作をされる側」というのが受動態を見分けるポイント！',
  },
  {
    id: 'moshi_2026_09_eigo_11',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    question: '空所に入る最も適切な語を選びなさい。 「My brother has ______ to Australia three times.」',
    choices: ['① go', '② went', '③ gone', '④ been'],
    answer: '④ been',
    hint: '"three times" という回数を表す語句に注目。経験を表す現在完了の決まった形は？',
    explanation:
      '【文法のポイント】現在完了の経験用法で「〜へ行ったことがある」というときは "have/has been to ~" を使います。"have gone to ~" にすると「〜へ行ってしまって今ここにいない」という意味になってしまうため、"three times"（3回）という回数を表す経験の文脈には合いません。',
    pitfall: '"have been to" と "have gone to" の違いは入試最頻出。"gone" を選ぶと「今その場所に行っていて、ここにはいない」という意味になり、回数を表す文とは矛盾する。',
    memoryTip: 'have been to ~ = 〜へ行ったことがある（経験）、have gone to ~ = 〜へ行ってしまった（今ここにいない）。セットで区別しよう！',
  },
  {
    id: 'moshi_2026_09_eigo_12',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    question: '空所に入る最も適切な語句を選びなさい。 「My grandmother ______ in this town since she was born.」',
    choices: ['① lives', '② lived', '③ has lived', '④ is living'],
    answer: '③ has lived',
    hint: '"since she was born"（生まれてからずっと）という表現に注目。過去から現在まで続いている状態を表す形は？',
    explanation:
      '【文法のポイント】"since + 過去の起点" と一緒に使われ、過去から現在まで状態がずっと続いていることを表すのは現在完了の継続用法です。"has lived" で「（生まれてから今まで）ずっと住んでいる」という意味になります。',
    pitfall: '① "lives"（現在形）を選ぶと単なる現在の習慣を表すだけで、「生まれてからずっと」という継続のニュアンスが出ない。"since" があれば現在完了を疑おう。',
    memoryTip: '"since + 過去の一時点" とセットで使われたら現在完了（継続）のサイン！"for + 期間" も同じ用法でよく使われる。',
  },
  {
    id: 'moshi_2026_09_eigo_13',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    question:
      '空所に入る最も適切な語を選びなさい。\n「A: Has Ken finished his homework yet?\nB: Yes, he has ______ finished it.」',
    choices: ['① just', '② already', '③ yet', '④ ever'],
    answer: '② already',
    hint: '"Yes" と答えているので、「もう終わらせてしまった」という完了の意味を強める語を考えよう。',
    explanation:
      '【文法のポイント】現在完了の完了用法では、肯定文で「もう（すでに）〜してしまった」というときに "already" を使います。"has already finished it" で「彼はもうそれを終わらせた」という意味になります。',
    pitfall: '③ "yet" は疑問文・否定文で使う語（「もう〜しましたか」「まだ〜していない」）。肯定文の答えには使えないので注意。',
    memoryTip: '"already"→肯定文で「もう〜した」、"yet"→疑問文・否定文で「もう/まだ」、"just"→「ちょうど〜したところ」。使う文の種類とセットで覚えよう！',
  },
  {
    id: 'moshi_2026_09_eigo_14',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    passage: `Every September, students at Green Hill Junior High School start preparing for the school festival. This year, the third-year students have decided to make a short movie about local history. They have already collected old photos from their grandparents and talked to people in the town.

"We have learned so much about our town," said one student. "We didn't know that our town had a large train station many years ago."

The movie will be shown to everyone at the festival in November.`,
    question:
      '文化祭に向けて3年生が制作しているものは何か。最も適切なものを選びなさい。\n① 演劇\n② 短い映画\n③ 合唱\n④ 絵画展',
    answer: '②',
    hint: '"the third-year students have decided to make a short movie about local history" という一文を確認しよう。',
    explanation:
      '【読解のポイント】本文には "the third-year students have decided to make a short movie about local history（3年生は地域の歴史についての短い映画を作ることに決めた）" とあります。生徒たちは祖父母から古い写真を集めたり、町の人に話を聞いたりして準備を進めています。',
    pitfall: '"movie" を見落として他の選択肢を選ばないよう、本文中の具体的な単語をしっかり探そう。',
    memoryTip: '"have decided to ~" = 「〜することに決めた」。文化祭や行事に関する文章で頻出の表現！',
  },
  {
    id: 'moshi_2026_09_eigo_15',
    maxOnly: true,
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    passage: `From: Sara
To: Yuna
Subject: New term starts!

Hi Yuna,

How was your summer vacation? Mine was great — I went to my grandparents' house in Nagano and swam in the river every day. I can't believe summer vacation is already over!

Our new English teacher, Mr. Green, is from Canada. He has taught English in Japan for three years, and his class is really fun. We had a small quiz today, and I got every question right!

By the way, are you free this Saturday? I want to study for the English test together at the library. Let me know!

Sara`,
    question:
      'このメールの内容と一致するものを選びなさい。\n① Saraは夏休みを祖父母の家で過ごした。\n② Mr. Greenはアメリカ出身だ。\n③ Saraは今日のクイズで間違えた問題があった。\n④ Saraは土曜日に映画を見に行く予定だ。',
    answer: '①',
    hint: '"I went to my grandparents\' house in Nagano" という一文を確認しよう。',
    explanation:
      '【読解のポイント】①はメール冒頭の "I went to my grandparents\' house in Nagano and swam in the river every day（祖父母の家に行って毎日川で泳いだ）" と一致します。② Mr. Greenは "from Canada（カナダ出身）" でアメリカではない。③ Saraは "I got every question right（全問正解した）" と述べている。④ Saraが誘っているのは映画ではなく図書館での勉強（"study ... at the library"）。',
    pitfall: '④「土曜日」という単語だけを見て安易に選ばないこと。何をするために誘っているのかを最後まで正確に読み取ろう。',
    memoryTip: 'Eメール問題は「誰が・いつ・どこで・何をした/する予定か」を整理しながら読むと内容一致問題が解きやすい！',
  },
];
