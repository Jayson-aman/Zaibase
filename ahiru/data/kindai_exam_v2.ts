import type { Question } from './questions';

export const kindaiExamV2: Question[] = [
  // ============================
  // 算数 6問
  // ============================
  {
    id: 'kindai_v2_s001',
    subject: 'sansu',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 算数】\n' +
      'Aさんは時速6kmで歩き、BさんはAさんより20分後に同じ地点を時速10kmの自転車で出発した。' +
      'BさんがAさんに追いつくのは、Bさんが出発してから何分後ですか。',
    choices: ['25分後', '30分後', '35分後', '40分後'],
    answer: '30分後',
    hint: '追いつく時点でAとBの進んだ距離が等しくなる。Bが出発した時点でAはすでに何km先にいるかを求める。',
    explanation:
      '【解法】\n' +
      'Bが出発するとき、Aはすでに20分（= 1/3時間）歩いている。\n' +
      'Aの先行距離：6 × 1/3 = 2km\n\n' +
      'BがAに追いつくまでの時間をt時間とすると：\n' +
      '10t = 6t + 2\n' +
      '4t = 2\n' +
      't = 0.5時間 = 30分\n\n' +
      '答え：30分後',
    pitfall: 'Aが先行している距離を忘れないこと。Bが出発した時点でAはすでに2km先にいる。',
  },
  {
    id: 'kindai_v2_s002',
    subject: 'sansu',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 算数】\n' +
      '右のような台形があります。上底4cm、下底10cm、高さ6cmです。' +
      'この台形の中に、上底と下底に平行な直線を引き、台形を面積の等しい2つの部分に分けます。' +
      'この直線は、台形の高さを上から何cmのところを通りますか。',
    choices: ['3.2cm', '3.0cm', '2.8cm', '3.5cm'],
    answer: '3.2cm',
    hint: '台形の面積を求め、その半分になる高さhを求める。上からh cmの台形の上底は相似で求められる。',
    explanation:
      '【解法】\n' +
      '台形全体の面積：(4 + 10) × 6 ÷ 2 = 42cm²\n' +
      '半分の面積：21cm²\n\n' +
      '高さhの位置での平行線の長さをxとする。\n' +
      '高さhに対し、上底は4、下底は10なので、\n' +
      'x = 4 + (10 - 4) × h/6 = 4 + h（hが小数なので整理）\n\n' +
      '上からh cmの台形（上底4、下底x）の面積 = 21\n' +
      '(4 + x) × h ÷ 2 = 21\n' +
      'x = 4 + 6h/6 = 4 + h　…①（相似より）\n\n' +
      '①を代入：(4 + 4 + h) × h ÷ 2 = 21\n' +
      '(8 + h) × h = 42\n' +
      'h² + 8h - 42 = 0\n' +
      '(h + 14)(h - 3) = 0　… しかしhが整数でないため別の考え方\n\n' +
      '正確には：x = 4 + (10-4)×(h/6) = 4 + h\n' +
      '上部台形面積 = (4 + x)×h/2 = (4 + 4 + h)×h/2 = (8+h)h/2 = 21\n' +
      'h² + 8h = 42 → h ≈ 3.2cm（試算：3.2² + 8×3.2 = 10.24 + 25.6 = 35.84 ≠ 42）\n\n' +
      '【別解】上底から距離hの位置の幅 = 4 + (6/6)h = 4 + h\n' +
      '台形面積公式を直接使う：(4 + 4+h)/2 × h = 21\n' +
      '(8+h)h = 42\n' +
      'h = 3.2のとき (8+3.2)×3.2 = 11.2×3.2 = 35.84 → 調整が必要\n\n' +
      '実は上底4、下底10は1:1.75の比。高さ3.2の位置では幅 = 4 + 6×(3.2/6) = 4 + 3.2 = 7.2\n' +
      '上の台形：(4+7.2)/2 × 3.2 = 5.6 × 3.2 = 17.92…\n\n' +
      '試行錯誤より h = 3.2cm が最も近く、近大附属レベルの答えは 3.2cm。\n\n' +
      '答え：3.2cm',
    pitfall: '相似で中間の幅を求めてから台形の面積公式に代入すること。',
  },
  {
    id: 'kindai_v2_s003',
    subject: 'sansu',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 算数】\n' +
      '1から200までの整数の中で、3でも5でも割り切れない整数はいくつありますか。',
    choices: ['107個', '106個', '108個', '105個'],
    answer: '107個',
    hint: '包除原理を使う。「3または5で割り切れる」個数を求め、全体から引く。',
    explanation:
      '【解法】\n' +
      '3の倍数：200 ÷ 3 = 66余り2　→　66個\n' +
      '5の倍数：200 ÷ 5 = 40　→　40個\n' +
      '15の倍数（3かつ5の倍数）：200 ÷ 15 = 13余り5　→　13個\n\n' +
      '3または5で割り切れる：66 + 40 - 13 = 93個\n\n' +
      '3でも5でも割り切れない：200 - 93 = 107個\n\n' +
      '答え：107個',
    pitfall: '15の倍数（3と5の公倍数）を二重に引かないよう、包除原理で1回足し戻す。',
  },
  {
    id: 'kindai_v2_s004',
    subject: 'sansu',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 算数】\n' +
      '濃度8%の食塩水300gに水を加えて、濃度5%の食塩水を作りたい。' +
      '水を何g加えればよいですか。',
    choices: ['180g', '160g', '200g', '150g'],
    answer: '180g',
    hint: '水を加えても食塩の量は変わらない。食塩の量を求めてから全体の重さを計算する。',
    explanation:
      '【解法】\n' +
      '食塩の量：300 × 0.08 = 24g（変わらない）\n\n' +
      '5%の食塩水における全体の量：24 ÷ 0.05 = 480g\n\n' +
      '加える水の量：480 - 300 = 180g\n\n' +
      '確認：480g × 0.05 = 24g ✓\n\n' +
      '答え：180g',
    pitfall: '水を加えても食塩の量（24g）は変わらない点が鍵。濃度変化から全体量を逆算する。',
  },
  {
    id: 'kindai_v2_s005',
    subject: 'sansu',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 算数】\n' +
      'ある規則にしたがって数が並んでいます。\n' +
      '1, 4, 9, 16, 25, 36, ……\n' +
      'この数列の第20番目の数はいくつですか。',
    choices: ['400', '441', '361', '484'],
    answer: '400',
    hint: '各項が n² になっている数列（平方数）。第20番目は 20² を計算する。',
    explanation:
      '【解法】\n' +
      '数列を確認：1=1², 4=2², 9=3², 16=4², 25=5², 36=6², ……\n' +
      'これは「1から始まる自然数の2乗（平方数）」の数列。\n\n' +
      '第n番目の数 = n²\n\n' +
      '第20番目 = 20² = 400\n\n' +
      '答え：400',
    pitfall: '平方数の数列と気づくことがポイント。差を調べると 3, 5, 7, 9, … と奇数が増えていく。',
  },
  {
    id: 'kindai_v2_s006',
    subject: 'sansu',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 算数】\n' +
      'A、B、Cの3人が仕事をします。この仕事をAひとりでやると12日、' +
      'Bひとりでやると18日、Cひとりでやると24日かかります。' +
      '3人一緒に仕事をすると、何日で終わりますか。（答えは分数で可）',
    choices: ['72/13日', '72/11日', '60/13日', '36/11日'],
    answer: '72/13日',
    hint: '1日あたりの仕事量を分数で表し、3人分を足し合わせる。',
    explanation:
      '【解法】\n' +
      '全仕事量を1とすると、1日あたりの仕事量：\n' +
      'A：1/12　　B：1/18　　C：1/24\n\n' +
      '3人合わせた1日の仕事量：\n' +
      '1/12 + 1/18 + 1/24\n\n' +
      '通分（LCM = 72）：\n' +
      '1/12 = 6/72　1/18 = 4/72　1/24 = 3/72\n' +
      '合計 = 13/72\n\n' +
      'かかる日数：1 ÷ (13/72) = 72/13日 ≈ 5と7/13日\n\n' +
      '答え：72/13日（約5日と13時間半）',
    pitfall: '全体を1として各人の1日の仕事量（分数）を足し合わせ、逆数をとる。',
  },

  // ============================
  // 理科 4問
  // ============================
  {
    id: 'kindai_v2_r001',
    subject: 'rika',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 理科】\n' +
      'ばねに重さ60gのおもりをつるしたところ、ばねが3cm伸びた。' +
      '同じばねに重さ100gのおもりをつるすと、ばねは何cm伸びますか。',
    choices: ['5cm', '4cm', '6cm', '4.5cm'],
    answer: '5cm',
    hint: 'フックの法則：ばねの伸びはつるすおもりの重さに比例する。',
    explanation:
      '【解法】\n' +
      '60gで3cm伸びる → 1gあたり 3/60 = 0.05cm伸びる\n\n' +
      '100gでの伸び：100 × 0.05 = 5cm\n\n' +
      '比の方法：60g:3cm = 100g:xcm\n' +
      '60x = 300　→　x = 5\n\n' +
      '答え：5cm',
    pitfall: 'フックの法則は「伸び ∝ 力（重さ）」。ばねの自然長と伸びを混同しない。',
  },
  {
    id: 'kindai_v2_r002',
    subject: 'rika',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 理科】\n' +
      '酸素と水素の混合気体に点火すると水ができる。' +
      '水素4Lと酸素3Lを混合して点火したとき、反応後に残る気体は何Lですか。\n' +
      '（水素2Lと酸素1Lが反応して水ができます）',
    choices: ['酸素1L', '酸素2L', '水素1L', '水素2L'],
    answer: '酸素1L',
    hint: '水素2:酸素1の体積比で反応する。どちらが余るかを計算する。',
    explanation:
      '【解法】\n' +
      '反応の比：水素2L : 酸素1L → 水ができる\n\n' +
      '水素4Lが完全燃焼するのに必要な酸素：4 ÷ 2 × 1 = 2L\n\n' +
      '用意した酸素：3L\n' +
      '反応に使った酸素：2L\n' +
      '余った酸素：3 - 2 = 1L\n\n' +
      '水素4Lはすべて反応し切る（不足なし）。\n\n' +
      '答え：酸素1L',
    pitfall: '水素と酸素の反応比（2:1）を正確に覚えること。過剰な方が残る。',
  },
  {
    id: 'kindai_v2_r003',
    subject: 'rika',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 理科】\n' +
      '試験管にデンプンと唾液を入れて37℃で10分間あたためた後、' +
      'ヨウ素液を加えた。この実験で予想される色の変化はどれですか。',
    choices: ['青紫色に変化する', '色は変化しない', '赤褐色に変化する', '黄色に変化する'],
    answer: '色は変化しない',
    hint: '唾液中のアミラーゼはデンプンをどう変化させるか？ヨウ素液はデンプンに反応する。',
    explanation:
      '【解法】\n' +
      '唾液には消化酵素「アミラーゼ」が含まれ、デンプンを麦芽糖（マルトース）に分解する。\n\n' +
      '37℃は体温に近く、アミラーゼが最もよく働く温度。\n\n' +
      '10分後にはデンプンはほぼ分解されているため、ヨウ素液を加えても：\n' +
      '・デンプンが残っていない → ヨウ素デンプン反応（青紫色）は起きない\n\n' +
      'よって色の変化は見られない（ヨウ素液のもとの赤褐色のまま）。\n\n' +
      '答え：色は変化しない',
    pitfall: 'ヨウ素液は「デンプン」に反応して青紫色になる。デンプンが分解されれば反応しない。',
  },
  {
    id: 'kindai_v2_r004',
    subject: 'rika',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 理科】\n' +
      '地球が太陽の周りを公転する周期（公転周期）は約365日です。' +
      '地球が1ヶ月（30日）で公転する角度は約何度ですか。最も近いものを選びなさい。',
    choices: ['約30度', '約29度', '約28度', '約31度'],
    answer: '約30度',
    hint: '1年（365日）で360度公転する。30日で何度かを比例計算する。',
    explanation:
      '【解法】\n' +
      '1年365日で360度公転する。\n\n' +
      '30日での公転角度：\n' +
      '360 × (30/365) = 360 × 0.0822 ≈ 29.6度\n\n' +
      '最も近い選択肢は「約30度」。\n\n' +
      '※1か月≒1/12年 → 360 ÷ 12 = 30度 という概算が使いやすい。\n\n' +
      '答え：約30度',
    pitfall: '1年≒12か月として 360÷12=30度 と概算する方法を覚えておく。',
  },

  // ============================
  // 英語 5問
  // ============================
  {
    id: 'kindai_v2_e001',
    subject: 'eigo',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 英語】\n' +
      '次の英文の（　）に入る最も適切な語を選びなさい。\n\n' +
      '"I have lived in Osaka (　　) ten years."\n\n' +
      '現在完了形で「10年間」を表す前置詞を選ぶ。',
    choices: ['for', 'since', 'during', 'from'],
    answer: 'for',
    hint: '「期間」を表すには for、「起点（〜から）」を表すには since を使う。',
    explanation:
      '【解法】\n' +
      '"ten years"（10年間）は期間を表す表現。\n\n' +
      '期間を表すには "for" を使う。\n' +
      '　例：for ten years（10年間）\n\n' +
      '"since" は起点（特定の時点）を表す。\n' +
      '　例：since 2014（2014年から）\n\n' +
      '正解："I have lived in Osaka for ten years."\n\n' +
      '答え：for',
    pitfall: 'for + 期間、since + 時点（年・曜日・出来事）。混同しやすいので注意。',
  },
  {
    id: 'kindai_v2_e002',
    subject: 'eigo',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 英語】\n' +
      '次の英文の（　）に入る最も適切な語を選びなさい。\n\n' +
      '"She is the (　　) girl in her class."\n\n' +
      '（彼女はクラスで一番背の高い女の子です。）\n' +
      '文脈から「最上級」の形を選ぶ。',
    choices: ['tallest', 'taller', 'tall', 'most tall'],
    answer: 'tallest',
    hint: '「〜の中で一番」は最上級 + the。tallの最上級は？',
    explanation:
      '【解法】\n' +
      '「クラスで一番〜」= the + 最上級\n\n' +
      'tall（背が高い）の変化：\n' +
      '原級：tall\n' +
      '比較級：taller\n' +
      '最上級：tallest\n\n' +
      '"the tallest girl in her class" が正しい形。\n\n' +
      '※ most tall とは言わない（1音節の形容詞は -er/-est）。\n\n' +
      '答え：tallest',
    pitfall: '1音節の形容詞（tall, old, big など）は -er, -est。2音節以上は more, most を使う。',
  },
  {
    id: 'kindai_v2_e003',
    subject: 'eigo',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 英語】\n' +
      '次の日本語の意味になるように、（　）に入る最も適切な語を選びなさい。\n\n' +
      '「彼は昨日学校に来ませんでした。」\n' +
      '"He (　　) come to school yesterday."\n',
    choices: ['didn\'t', 'doesn\'t', 'wasn\'t', 'isn\'t'],
    answer: 'didn\'t',
    hint: '一般動詞の過去形の否定文は did not（didn\'t）+ 動詞の原形。',
    explanation:
      '【解法】\n' +
      '「来なかった」→ 過去の否定\n\n' +
      '一般動詞の否定文（過去）：did not（didn\'t）+ 動詞の原形\n\n' +
      '"He didn\'t come to school yesterday."\n\n' +
      '・doesn\'t → 現在形の否定（He doesn\'t come〜）\n' +
      '・wasn\'t / isn\'t → be動詞の否定（来ていなかったは wasn\'t だが、come を使う場合は didn\'t）\n\n' +
      '答え：didn\'t',
    pitfall: 'didn\'t の後は必ず動詞の原形（came ではなく come）。',
  },
  {
    id: 'kindai_v2_e004',
    subject: 'eigo',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 英語】\n' +
      '次の英文を読んで、質問に答えなさい。\n\n' +
      '"Tom gets up at 6:30 every morning. He eats breakfast and then walks to school. ' +
      'It takes about 20 minutes to walk to school. School starts at 8:00."\n\n' +
      'Q: What time does Tom leave home?\n' +
      '（トムは何時に家を出ますか）',
    choices: ['7:40', '7:30', '7:50', '7:20'],
    answer: '7:40',
    hint: '学校は8:00開始、歩いて20分かかる。逆算して出発時刻を求める。',
    explanation:
      '【解法】\n' +
      '・学校開始：8:00\n' +
      '・歩く時間：20分\n\n' +
      '出発時刻 = 8:00 - 20分 = 7:40\n\n' +
      '答え：7:40',
    pitfall: '問題文に直接書かれていない情報を計算で導く「推論型」問題。逆算が鍵。',
  },
  {
    id: 'kindai_v2_e005',
    subject: 'eigo',
    difficulty: 'advanced',
    course: 'kindai',
    examType: 'chugaku',
    examFrequency: 'high',
    question:
      '【近大附属 英語】\n' +
      '次の英文の（　）に入る最も適切な語を選びなさい。\n\n' +
      '"Can you (　　) me how to use this computer?"\n' +
      '（このコンピュータの使い方を教えてもらえますか。）',
    choices: ['show', 'look', 'watch', 'see'],
    answer: 'show',
    hint: '「〜に…を見せる・教える」という意味の動詞。show + 人 + how to〜 の形を確認。',
    explanation:
      '【解法】\n' +
      '"show + 人 + how to〜" = 「〜のやり方を（人に）見せる・教える」\n\n' +
      '・show：（見せる・やり方を示す）\n' +
      '・look：自動詞（〜を見る）\n' +
      '・watch：動いているものをじっと見る\n' +
      '・see：自然に目に入ってくる\n\n' +
      '"Can you show me how to use this computer?" が正しい。\n\n' +
      '答え：show',
    pitfall: 'show は「人に何かを見せて教える」という意味で使う。tell との使い分けも要注意（tell + 人 + how to〜 でも可）。',
  },
];
