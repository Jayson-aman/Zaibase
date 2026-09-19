import type { Question } from './questions';

export const kokoNyushiEigo7: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo7_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  My mother ( ) dinner for two hours when I got home.',
    choices: ['① cooks', '② cooked', '③ has cooked', '④ had been cooking'],
    answer: '④ had been cooking',
    hint: '「私が帰宅したとき」より前から続いていた動作を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「My mother ( ) dinner for two hours when I got home.」の空所に入る適切な時制を選ぶ。\n【なぜhad been cookingになるのか】「私が帰宅した」という過去の時点よりさらに前から「母が夕食を作り続けていた」という継続動作を表すには、過去完了進行形（had been＋動詞のing形）を使う必要があるから。\n【ポイント1】I got home（私が帰宅した）は過去の1つの時点。その時点よりも前から継続していた動作を表すには、さらに過去を示す時制が必要。\n【ポイント2】①cooks（現在形）、②cooked（過去形、継続の意味が出ない）、③has cooked（現在完了、過去の基準点には使えない）はどれも文脈に合わない。\n【ポイント3】④had been cooking（過去完了進行形）が正解。「私が帰宅したとき、母は2時間夕食を作り続けていた」という意味になる。\n【答え】④ had been cooking\n【確かめ】「for two hours」という継続の期間を表す語句と、過去完了進行形の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】has cooked（現在完了形）を選んでしまう。現在完了は現在を基準にするので、過去の基準点には使えない。\n【ここが絶対】過去のある時点よりもさらに前から、その時点まで継続していた動作には過去完了進行形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We ( ) buy some eggs on the way home, or we won’t be able to make the cake.',
    choices: ['① must', '② should', '③ can', '④ may'],
    answer: '① must',
    hint: '「〜しなければケーキが作れない」という強い必要性を表す助動詞を選ぶ。',
    explanation:
      '【何を聞かれているか】「We ( ) buy some eggs on the way home, or we won\'t be able to make the cake.」の空所に入る適切な助動詞を選ぶ。\n【なぜmustになるのか】「さもないとケーキが作れない」という強い条件から、話者自身が強く感じている必要性を表すmustが適切だから。\n【ポイント1】②should（〜すべきだ、推奨レベルで弱すぎる）、③can（能力）、④may（許可）はどれもこの強い必要性を表せない。\n【ポイント2】①must（〜しなければならない、強い義務）が正解。\n【ポイント3】mustは話者の主観による強い義務を表す。否定文must notは「〜してはいけない」（禁止）という別の意味になる点に注意（don\'t have to「〜しなくてよい」との違いが頻出）。\n【答え】① must\n【確かめ】"or we won\'t be able to make the cake"という結果が、強い必要性（must）と自然につながっているかを確認する。\n【よくあるまちがい】mustとhave toの意味は近いが、shouldを選んでしまい、強さの違いを見落とす。\n【ここが絶対】must：話者の主観による強い義務。「〜しなければ…できない」という強い条件にはmustを使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語形を選べ。  This curry ( ) by my grandmother every Sunday.',
    choices: ['① cooks', '② is cooked', '③ was cooked', '④ has cook'],
    answer: '② is cooked',
    hint: '「毎週日曜日に〜される」という習慣を表す受動態の現在形を探す。',
    explanation: `【出題意図】
受動態の現在形を、家庭の習慣を表す文脈で問う問題。主語（物）が動作を受ける側であることの識別も含む。

【解説】
主語「This curry（このカレー）」は「作る」側ではなく「作られる」側。「every Sunday（毎週日曜日）」は習慣を示すので現在形の受動態を使う。
・① cooks → 能動態3単現（主語が人のときの形）
・② is cooked → 受動態・現在形（✓）
・③ was cooked → 受動態・過去形（every Sundayと合わない）
・④ has cook → 形が誤り

日本語訳：「このカレーは毎週日曜日に祖母によって作られる。」

【文法ポイント】
受動態の基本形：is/am/are＋過去分詞（現在）、was/were＋過去分詞（過去）。動作主を示すときは by〜を続ける。

【入試頻出】
・Breakfast is prepared by my father on weekends.
・This dish was cooked by my aunt last night.
・The table is always set by my brother before dinner.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This supermarket is ( ) than the one near the station.',
    choices: ['① cheap', '② cheaper', '③ the cheapest', '④ most cheap'],
    answer: '② cheaper',
    hint: '「〜より安い」と2つの店を比べているので比較級を使う。',
    explanation: `【出題意図】
比較級の正しい形を、買い物の場面で問う問題。than との組み合わせの理解が目標。

【解説】
「than the one near the station（駅の近くの店より）」という比較表現があるので比較級が必要。cheap は1音節の形容詞なので -er 型。
・① cheap → 原級（than とは使えない）
・② cheaper → 正しい比較級（✓）
・③ the cheapest → 最上級（than とは使わない）
・④ most cheap → 誤った作り方（1音節の語に most は使わない）

日本語訳：「このスーパーは駅の近くの店より安い。」

【文法ポイント】
1音節の形容詞は -er で比較級を作る（cheap→cheaper, big→bigger）。than の後ろには比較対象（名詞または the one）が来る。

【入試頻出】
・This shop is bigger than that one.
・My brother is older than me.
・Fresh vegetables are more expensive than frozen ones.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  My father went to the shopping mall ( ) a birthday present for my sister.',
    choices: ['① for', '② so', '③ to buy', '④ buying'],
    answer: '③ to buy',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法を選ぶ。',
    explanation: `【出題意図】
不定詞の副詞的用法（目的）を、買い物の場面で問う問題。動名詞との混同を防ぐのが狙い。

【解説】
「ショッピングモールへ行った」目的を表すには to + 動詞原形（不定詞の副詞的用法）を使う。
・① for → 前置詞。for の後ろに動詞原形は続けられない
・② so → 接続詞だけでは目的を表せない（so that なら可）
・③ to buy → 不定詞（✓）「買うために」
・④ buying → 動名詞。went to buying という形は使わない

日本語訳：「父は妹の誕生日プレゼントを買うためにショッピングモールへ行った。」

【文法ポイント】
不定詞の副詞的用法（目的）＝to＋動詞原形「〜するために」。go/come + to + 動詞原形の形が特に頻出。

【入試頻出】
・She went to the store to buy some bread.
・He came home early to help his mother.
・I got up early to make breakfast for my family.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  My little brother finished ( ) his toys before dinner.',
    choices: ['① put away', '② to put away', '③ putting away', '④ puts away'],
    answer: '③ putting away',
    hint: 'finish の後ろには動名詞（〜ing）が来る。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞 finish の用法を、家庭内の場面で問う問題。不定詞との区別が核心。

【解説】
finish は目的語に動名詞のみをとり、不定詞（to +原形）はとらない。
・① put away → 原形（finish の後ろには使えない）
・② to put away → 不定詞（finish の後ろには来ない）
・③ putting away → 動名詞（✓）finish + 動名詞
・④ puts away → 3単現の形（目的語にはなれない）

日本語訳：「弟は夕食前におもちゃを片付け終えた。」

【文法ポイント】
動名詞のみを目的語にとる動詞：finish、enjoy、stop、mind、give up、practice など。put away（片付ける）は句動詞なので putting away のように ing 化する。

【入試頻出】
・She enjoyed shopping with her mother.
・He finished washing the dishes an hour ago.
・Do you mind helping me carry these bags?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  By the time my parents come home, I ( ) all the cleaning.',
    choices: ['① will finish', '② have finished', '③ will have finished', '④ finished'],
    answer: '③ will have finished',
    hint: '「両親が帰宅するまでには」という未来の時点での完了を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「By the time my parents come home, I ( ) all the cleaning.」の空所に入る適切な時制を選ぶ。\n【なぜwill have finishedになるのか】「両親が帰宅するまでには」という未来のある時点で「掃除を終えていることになる」という完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】By the time my parents come home（両親が帰宅するまでには）は未来の時点を示す表現。\n【ポイント2】①will finish（単純未来）、②have finished（現在完了、未来の時点には使えない）、④finished（過去形）はどれも文脈に合わない。\n【ポイント3】③will have finished（未来完了）が正解。目印はby the time〜、by then、by next〜。\n【答え】③ will have finished\n【確かめ】By the timeの節の動詞が現在形（come）になっており、主節が未来完了（will have finished）になっているかを確認する。\n【よくあるまちがい】have finished（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での完了にはwill have＋過去分詞（未来完了形）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If it ( ) rain tomorrow, we will go grocery shopping in the afternoon.',
    choices: ['① doesn’t', '② won’t', '③ didn’t', '④ isn’t'],
    answer: '① doesn’t',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation:
      '【何を聞かれているか】「If it ( ) rain tomorrow, we will go grocery shopping in the afternoon.」の空所に入る適切な語を選ぶ。\n【なぜdoesn\'tになるのか】条件を表すif節の中では、未来のことでもwillを使わず現在形を使うという決まりがあり、この文は否定の条件（雨が降らなければ）なので現在形の否定doesn\'tを使う必要があるから。\n【ポイント1】if節などの副詞節の中では、未来のことでも現在形で表す。②won\'tはif節の中では使えない。\n【ポイント2】③didn\'t（過去形、仮定法過去になり文脈に合わない）、④isn\'t（be動詞でrainという動詞と一致しない）はどちらも誤り。\n【ポイント3】①doesn\'t（現在形の否定）が正解。「もし明日雨が降らなければ」という条件を表す。\n【答え】① doesn\'t\n【確かめ】主節にwillが使われている（we will go）ことと、if節が現在形の否定（doesn\'t）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwon\'tを入れてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形（否定ならdoesn\'t/don\'t）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  These vegetables ( ) grown by my grandfather in his garden.',
    choices: ['① is', '② are', '③ was', '④ has'],
    answer: '② are',
    hint: '主語 These vegetables は複数形。受動態の be動詞を主語に合わせる。',
    explanation: `【出題意図】
受動態における be動詞と主語（単数・複数）の一致を問う問題。家庭菜園という自然な場面で確認する。

【解説】
主語「These vegetables（これらの野菜）」は複数形なので、受動態の be動詞は are を使う。
・① is → 単数主語用（合わない）
・② are → 複数主語・現在形（✓）
・③ was → 過去形（時制が文意と合わない）
・④ has → 受動態には使わない形

日本語訳：「これらの野菜は祖父が庭で育てている。」

【文法ポイント】
受動態は主語の数に応じて be動詞を選ぶ：単数 is/was、複数 are/were。過去分詞（grown）自体は主語の数に関係なく変化しない。

【入試頻出】
・These cookies are baked by my mother every weekend.
・This bag was made by a local craftsman.
・Fresh eggs are sold at that small shop.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Of all my family members, my mother gets up ( ).',
    choices: ['① early', '② earlier', '③ the earliest', '④ more early'],
    answer: '③ the earliest',
    hint: '「家族の中で一番」という範囲を示す語句があるので最上級を使う。',
    explanation:
      '【何を聞かれているか】「Of all my family members, my mother gets up ( ).」の空所に入る適切な比較表現を選ぶ。\n【なぜthe earliestになるのか】「Of all my family members（家族全員の中で）」という範囲を示す表現があるため、その中での「一番」を表す最上級が必要だから。\n【ポイント1】①early（原級）、②earlier（比較級、2者比較のみ）はどちらも「一番」の意味を表せない。\n【ポイント2】③the earliest（最上級）が正解。earlyのような-yで終わる語はyをiにかえて-estをつける（early→earliest）。\n【ポイント3】④more early（誤った形）。earlyは-er/-est型の語なのでmoreは使わない。\n【答え】③ the earliest\n【確かめ】the earliestのtheが抜けていないかを確認する。\n【よくあるまちがい】④more earlyのように、-er/-est型の語にmoreをつけてしまう。\n【ここが絶対】最上級には必ずtheをつける。範囲を示すof all〜、in〜などが最上級の目印になる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I want ( ) a good cook like my mother someday.',
    choices: ['① be', '② being', '③ to be', '④ been'],
    answer: '③ to be',
    hint: 'want の後ろに来る不定詞の名詞的用法（〜したい）を選ぶ。',
    explanation: `【出題意図】
不定詞の名詞的用法（want to + 動詞原形）を、将来の夢を語る文脈で問う問題。

【解説】
want は「〜したい」という意味で、後ろに不定詞（to + 動詞原形）を取る。
・① be → 原形のみ（want の直後には使えない）
・② being → 動名詞（want は動名詞をとらない）
・③ to be → 不定詞（✓）
・④ been → 過去分詞（目的語にはなれない）

日本語訳：「私はいつか母のような料理上手になりたい。」

【文法ポイント】
want to do：〜したい（不定詞のみを目的語にとる動詞：want, hope, wish, decide, plan）。like my mother のように「〜のような」比較の表現もセットで押さえる。

【入試頻出】
・She wants to become a nurse in the future.
・I hope to travel with my family next year.
・He decided to help his father with the shopping.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  ( ) the laundry every morning is one of my daily jobs at home.',
    choices: ['① Do', '② Doing', '③ To do', '④ Did'],
    answer: '② Doing',
    hint: '文全体の主語になる部分を選ぶ。主語には動名詞が使える。',
    explanation: `【出題意図】
動名詞が文の主語になれることを、家事の場面で問う問題。動名詞と不定詞（名詞的用法）の使い分けも意識させる。

【解説】
この文は「（　）the laundry every morning」全体が主語で、「is one of my daily jobs」が述語。動名詞は文の主語になれる。
・① Do → 原形は主語になれない
・② Doing → 動名詞（✓）主語として使える
・③ To do → 不定詞も主語になれるが、文頭でこの形にすると意味が硬く不自然（To do the laundry is も文法的には可だが、日常的な習慣を述べるこの文では動名詞の方が自然で入試では動名詞が正解とされやすい）
・④ Did → 過去形は主語になれない

日本語訳：「毎朝洗濯をすることは、私の家での日課の一つだ。」

【文法ポイント】
動名詞は主語・目的語・補語になれる。文頭の動名詞は単数扱いなので、続く be動詞は is/was を使う。

【入試頻出】
・Washing the dishes after dinner is my job.
・Cleaning the house every weekend is not easy.
・Cooking for the family makes my mother happy.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo7_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  My father is very proud ( ) my sister’s cooking.',
    choices: ['① of', '② with', '③ at', '④ for'],
    answer: '① of',
    hint: 'be proud の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be proud of〜（〜を誇りに思う）の前置詞を問う問題。

【解説】
be proud of〜 は「〜を誇りに思う」という意味の固定表現。
・① of → be proud of〜（✓）
・② with → be pleased with〜（〜に満足している）に使う
・③ at → be surprised at〜（〜に驚く）などに使う
・④ for → be famous for〜（〜で有名）などに使う

日本語訳：「父は姉の料理をとても誇りに思っている。」

【文法ポイント】
前置詞を固定する重要熟語：be proud of〜／be afraid of〜／be full of〜／be made of〜／be tired of〜。いずれも「of」を伴う点で共通する。

【入試頻出】
・She is proud of her family.
・The basket is full of fresh fruit.
・This bag is made of leather.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Can you ( ) my little sister while I go grocery shopping?',
    choices: ['① look at', '② look for', '③ look after', '④ look into'],
    answer: '③ look after',
    hint: '「〜の世話をする」という意味の句動詞を選ぶ。',
    explanation: `【出題意図】
句動詞 look after〜（〜の世話をする）を、家族の場面で問う問題。look の他の句動詞との識別が目標。

【解説】
「私が買い物に行っている間」妹の面倒を見てもらうという文脈なので look after が適切。
・① look at → 〜を見る
・② look for → 〜を探す
・③ look after → 〜の世話をする（✓）
・④ look into → 〜を調べる

日本語訳：「私が食料品の買い物に行っている間、妹の面倒を見てくれる？」

【文法ポイント】
look after〜 = take care of〜（〜の世話をする）。look の句動詞は前置詞によって意味が大きく変わるため、セットで暗記する。

【入試頻出】
・She looks after her grandmother every afternoon.
・I am looking for my wallet.
・Please look into this problem.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We have ( ) out of milk, so I need to go to the store.',
    choices: ['① run', '② left', '③ taken', '④ given'],
    answer: '① run',
    hint: '「〜を使い果たす、〜がなくなる」という意味の熟語 run out of〜 を思い出す。',
    explanation: `【出題意図】
熟語 run out of〜（〜を切らす、〜がなくなる）を、日常の買い物の場面で問う問題。

【解説】
run out of〜 は「〜を使い果たす、〜が底をつく」という意味の重要イディオム。
・① run → have run out of〜（✓）現在完了形
・② left → leave out of という熟語は存在しない
・③ taken → take out of は「〜から取り出す」で意味が異なる
・④ given → give out of という熟語は存在しない

日本語訳：「牛乳を切らしてしまったので、お店に行く必要がある。」

【文法ポイント】
run out of〜：〜を使い果たす（We have run out of sugar.）。似た表現に be out of〜（〜を切らしている状態）もある：We are out of milk.

【入試頻出】
・We ran out of eggs this morning.
・My father is out of time before the store closes.
・They ran out of money during the trip.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  My mother bought a new jacket ( ) the department store yesterday.',
    choices: ['① at', '② to', '③ on', '④ into'],
    answer: '① at',
    hint: '「〜（店）で買う」というときの前置詞は、比較的特定の建物・場所に使うものを選ぶ。',
    explanation: `【出題意図】
場所を表す前置詞 at の用法を、買い物の場面で問う問題。in / on との使い分けも意識させる。

【解説】
「the department store（デパート）」は特定の建物・地点を表すため at を使う。
・① at → 特定の地点・建物（✓）
・② to → 方向を表す（buy to は不可）
・③ on → 接触・特定の日を表す（at the store には使わない）
・④ into → 内部への移動を表す動詞と共に使う（went into the store は可だが bought into は不可）

日本語訳：「母は昨日デパートで新しいジャケットを買った。」

【文法ポイント】
at＋比較的小さい・特定の地点（at the store, at the station）／in＋広い場所・内部（in the mall, in Osaka）。buy〜at…（…で〜を買う）は頻出パターン。

【入試頻出】
・I bought some bread at the bakery.
・She got new shoes at the shop near her house.
・We had lunch at a small restaurant.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_17',
    subject: 'eigo',
    question: '次の文と意味が最も近いものを選べ。  My cooking style is similar to my mother’s.',
    choices: ['① My cooking style is the same as my mother’s.', '② My cooking style is like my mother’s.', '③ My cooking style is different from my mother’s.', '④ My cooking style is better than my mother’s.'],
    answer: '② My cooking style is like my mother’s.',
    hint: 'be similar to〜 は「〜に似ている」という意味。完全に同一という意味ではない。',
    explanation:
      '【何を聞かれているか】「My cooking style is similar to my mother\'s.」と意味が最も近い文を選ぶ。\n【なぜlikeが同義になるのか】be similar to〜は「〜に似ている」という意味で、「全く同じ」ではなく、be like〜とほぼ同じ意味を表すから。\n【ポイント1】①the same as〜（〜と全く同じ）は意味が強すぎる。③different from〜（異なる）は正反対の意味。④better than〜（〜より良い）は優劣を表し、similarとは異なる。\n【ポイント2】②like〜（〜のようだ、〜に似ている）がsimilar toとほぼ同義（✓）。\n【ポイント3】be similar to〜＝be like〜。be the same as〜やbe different from〜との意味の強さの違いを区別する。\n【答え】② My cooking style is like my mother\'s.\n【確かめ】similarが「似ている」であって「全く同じ」ではないことを確認する。\n【よくあるまちがい】similarをthe sameと同じ意味だと誤解してしまう。\n【ここが絶対】be similar to〜＝be like〜（似ている）。be the same as〜（全く同じ）とは意味の強さがちがう。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I get along well ( ) my younger brother.',
    choices: ['① with', '② to', '③ for', '④ at'],
    answer: '① with',
    hint: 'get along well の後ろに来る前置詞は「〜と（一緒に）」を表すものを選ぶ。',
    explanation: `【出題意図】
熟語 get along with〜（〜とうまくやっていく）の前置詞を、兄弟関係の場面で問う問題。

【解説】
get along well with〜 は「〜とうまくやっていく、仲良くする」という意味のイディオム。
・① with → get along with〜（✓）
・② to → get along to という熟語は存在しない
・③ for → get along for も存在しない
・④ at → 前置詞の用法として合わない

日本語訳：「私は弟とうまくやっている。」

【文法ポイント】
get along (well) with〜：〜とうまくやる。人間関係を表す熟語として、家族・友人関係の文章でよく使われる。

【入試頻出】
・She gets along well with her classmates.
・Do you get along with your sister?
・My parents get along well with our neighbors.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Whether we can go on a family trip this summer ( ) on my father’s work schedule.',
    choices: ['① decides', '② depends', '③ needs', '④ spends'],
    answer: '② depends',
    hint: '「〜次第である」という意味の熟語 depend on〜 を思い出す。',
    explanation: `【出題意図】
熟語 depend on〜（〜次第である、〜に依存する）を、家族旅行の計画という場面で問う問題。

【解説】
「家族旅行に行けるかどうか」は「父の仕事のスケジュール」次第だという文脈なので depend on〜 が適切。
・① decides → decide は他動詞で「決める」という意味であり、主語（Whether節）が「決める」わけではないため不自然
・② depends → depend on〜（✓）「〜次第である」
・③ needs → 「〜を必要とする」で意味が合わない
・④ spends → 「〜を使う、費やす」で意味が合わない

日本語訳：「今年の夏に家族旅行に行けるかどうかは、父の仕事のスケジュール次第だ。」

【文法ポイント】
depend on〜：〜次第である、〜に頼る。Whether〜（〜かどうか）が主語になる場合、動詞は3人称単数扱いで -s がつく。

【入試頻出】
・Whether we eat out tonight depends on the weather.
・It depends on how much money we have.
・Children often depend on their parents.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  We left the supermarket early to be ( ) time for dinner.',
    choices: ['① in', '② on', '③ at', '④ for'],
    answer: '① in',
    hint: '「〜に間に合って」という意味の熟語 in time for〜 を思い出す。',
    explanation: `【出題意図】
熟語 in time for〜（〜に間に合って）を、買い物から帰宅する場面で問う問題。on time との違いも意識させる。

【解説】
in time for〜 は「〜に（遅れずに）間に合って」という意味。
・① in → in time for〜（✓）
・② on → on time は「時間通りに（定刻に）」という別の意味の熟語
・③ at → at time という熟語は存在しない
・④ for → for time という熟語は存在しない

日本語訳：「私たちは夕食に間に合うように早めにスーパーを出た。」

【文法ポイント】
in time for〜／to do：〜に間に合って。on time：時間通りに（定刻ぴったり）。両者は意味が異なるため入試で頻出。

【入試頻出】
・We got home in time for the news program.
・The train arrived on time.
・She hurried to be in time for the meeting.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo7_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The woman ( ) is cooking in the kitchen is my aunt.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation:
      '【何を聞かれているか】「The woman ( ) is cooking in the kitchen is my aunt.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞The woman（女性）は人で、関係代名詞節の中でis cooking（料理をしている）の主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がThe woman（人）で、関係代名詞節内でis cookingの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】主格の関係代名詞は先行詞の直後に置き、その後に動詞が続く（who is cooking）。thatで置きかえても可。\n【答え】① who\n【確かめ】whoのあとに動詞（is cooking）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The bag ( ) my mother bought at the mall was very expensive.',
    choices: ['① who', '② which', '③ whom', '④ where'],
    answer: '② which',
    hint: '先行詞は「物（バッグ）」。関係代名詞節内で bought の目的語になっている。',
    explanation:
      '【何を聞かれているか】「The bag ( ) my mother bought at the mall was very expensive.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhichになるのか】先行詞The bag（バッグ）は物で、関係代名詞節の中でmy mother bought（　）の目的語の役割をしているため、先行詞が物・目的格のときに使うwhichを選ぶ必要があるから。\n【ポイント1】先行詞がThe bag（物）で、関係代名詞節内でmy mother boughtの目的語になっている（目的格）。\n【ポイント2】①whoは先行詞が人、③whomは先行詞が人・目的格、④whereは関係副詞で、どれも文脈に合わない。\n【ポイント3】whichは省略も可能で、thatに置きかえることもできる：The bag (that) my mother bought at the mall〜。\n【答え】② which\n【確かめ】whichのあとにmy mother bought（主語＋動詞）が続いている（目的語の役割）ことを確認する。\n【よくあるまちがい】先行詞が物なのにwhoを選んでしまう。\n【ここが絶対】目的格の関係代名詞は省略できる。先行詞が物ならwhich（thatはどちらにも使える）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  I still remember the store ( ) my grandmother used to buy vegetables.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所（store）」で、関係副詞を使う。',
    explanation:
      '【何を聞かれているか】「I still remember the store ( ) my grandmother used to buy vegetables.」の空所に入る適切な語を選ぶ。\n【なぜwhereになるのか】先行詞the store（店）は場所を表し、関係詞節の中に前置詞（at the store）が隠れているため、「前置詞＋which」の働きをする関係副詞whereを使う必要があるから。\n【ポイント1】先行詞the storeは場所。節の元の形はmy grandmother used to buy vegetables at the storeで、at the storeがwhereに置きかわっている。\n【ポイント2】①which（物に使う関係代名詞で前置詞が必要）、②who（人に使う）、④when（時を先行詞にとる）はどれも文脈に合わない。\n【ポイント3】③where（場所を先行詞にとる関係副詞）が正解。\n【答え】③ where\n【確かめ】whereの節の中に前置詞が抜けている（at the storeのatが不要になっている）ことを確認する。\n【よくあるまちがい】先行詞が場所なのに、前置詞を補わずにwhichを使ってしまう。\n【ここが絶対】関係副詞where＝前置詞＋which。先行詞が場所のときに使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI have a cousin.\nHer mother runs a small bakery.',
    answer: 'I have a cousin whose mother runs a small bakery.',
    hint: '2つの文をつなぐとき、Her（彼女の）を所有格の関係代名詞 whose に変える。',
    explanation:
      '【何を聞かれているか】「I have a cousin. Her mother runs a small bakery.」を関係代名詞を使って1文にする。\n【なぜwhoseを使うのか】2つ目の文のHer（彼女の）がa cousin（1つ目の文の名詞）の所有を表しているため、この所有の関係を表す所有格の関係代名詞whoseに置きかえる必要があるから。\n【ポイント1】先行詞を特定する：a cousin（人）。\n【ポイント2】Her（所有格）をwhoseに置きかえ、先行詞a cousinの直後に置く。\n【ポイント3】I have a cousin whose mother runs a small bakery.（私にはお母さんが小さなパン屋を営んでいるいとこがいる）。\n【答え】I have a cousin whose mother runs a small bakery.\n【確かめ】whoseのあとにmother（名詞）、runs（動詞）と続いているかを確認する。\n【よくあるまちがい】whoseのかわりにwhoを使ってしまう。所有の関係にはwhoseを使う。\n【ここが絶対】whoseは先行詞の所有格を表す関係代名詞。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_25',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：What time does the supermarket close?\n「そのスーパーが何時に閉まるか知っていますか？」',
    answer: 'Do you know what time the supermarket closes?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、do/does は消える。',
    explanation:
      '【何を聞かれているか】「What time does the supermarket close?」（そのスーパーが何時に閉まるか知っていますか？）を間接疑問文に書きかえる。\n【なぜdoesが消えるのか】疑問文が他の文（Do you know〜）の一部に組み込まれると、疑問文特有の助動詞doesを使わず、ふつうの文と同じ〈疑問詞＋主語＋動詞〉の語順に戻すというルールがあるから。\n【ポイント1】疑問詞What timeはそのまま使う。\n【ポイント2】疑問詞の後ろを「主語＋動詞」の平叙文語順に変える。doesは消えて、動詞に3単現のsがつく（closes）。\n【ポイント3】全体をDo you know＋間接疑問の形にする。Do you know what time the supermarket closes?\n【答え】Do you know what time the supermarket closes?\n【確かめ】doesが消えて、動詞がcloseではなくclosesになっているかを確認する。\n【よくあるまちがい】Do you know what time does the supermarket close?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の語順は〈疑問詞＋主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) vegetables we should buy for the curry?',
    choices: ['① when', '② which', '③ where', '④ why'],
    answer: '② which',
    hint: '「どの野菜を」という選択を尋ねる間接疑問文。疑問詞の意味を考える。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞を文脈から選ぶ問題。which の「選択」の意味を理解しているかが目標。

【解説】
「Could you tell me ( ) vegetables we should buy for the curry?」＝「カレー用にどの野菜を買うべきか教えてもらえますか？」複数ある選択肢の中からどれかを尋ねているので which を使う。
・① when → 「いつ」時を尋ねる
・② which → 「どの・どちらの」選択を尋ねる（✓）which vegetables＝どの野菜
・③ where → 「どこ」場所を尋ねる
・④ why → 「なぜ」理由を尋ねる

日本語訳：「カレー用にどの野菜を買うべきか教えていただけますか？」

【文法ポイント】
which＋名詞（which vegetables, which bag）で「どの〜」という限定された選択を表す。間接疑問文でも「疑問詞＋主語＋動詞」の語順は変わらない。

【入試頻出】
・Do you know which bus goes to the shopping mall?
・Please tell me which shop sells fresh fish.
・I don't know which bag is mine.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo7_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ know / you / do / where / my / father / bought / this / table ）\n「父がこのテーブルをどこで買ったか知っていますか？」',
    answer: 'Do you know where my father bought this table?',
    hint: '間接疑問文：疑問詞（where）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation:
      '【何を聞かれているか】know / you / do / where / my / father / bought / this / table を並べ替えて「父がこのテーブルをどこで買ったか知っていますか？」という英文を作る。\n【なぜmy father boughtという語順になるのか】全体はDo you know〜?という疑問文だが、knowの目的語になる部分（間接疑問）は疑問文の語順ではなく、〈疑問詞（where）＋主語＋動詞〉という平叙文の語順にする必要があるから。\n【ポイント1】全体の骨組みはDo you know〜?という疑問文。\n【ポイント2】knowの目的語（間接疑問）はwhere my father bought this table（疑問文の語順ではなく平叙文語順）。\n【ポイント3】組み立てるとDo you know where my father bought this table?になる。\n【答え】Do you know where my father bought this table?\n【確かめ】whereのあとがdid my father buyではなくmy father bought（平叙文語順）になっているかを確認する。\n【よくあるまちがい】Do you know where did my father buy this table?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の中は、疑問詞のあとを〈主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ have / been / I / cooking / for / since / an hour / from ）\n「私は1時間ずっと料理をしている。」',
    answer: 'I have been cooking for an hour.',
    hint: '「1時間ずっと〜している」は現在完了進行形。for（〜の間）か since（〜以来）かを判断する。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for / since の使い分けを問う問題。不要語の識別も含む。

【解説】
「an hour（1時間）」は期間（duration）なので for を使う。since は起点に使う。不要語：from（× I have been cooking from an hour → from は不可）。

正しい語順：
I have been cooking for an hour.
（現在完了進行形＝have been＋Ving）

日本語訳：「私は1時間ずっと料理をしている。」

【文法ポイント】
for＋期間（for an hour, for two days）／since＋起点（since noon, since this morning）。現在完了進行形は継続している動作を強調する。

【入試頻出】
・My mother has been shopping for two hours.
・We have been waiting for the bus since noon.
・He has been washing the car since this morning.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / not / old / is / my / sister / to / go shopping alone ）\n「私の妹は一人で買い物に行くのに十分な年齢ではない。」',
    answer: 'My sister is not old enough to go shopping alone.',
    hint: '「〜するのに十分〜だ」は 形容詞＋enough＋to 動詞 の語順。',
    explanation:
      '【何を聞かれているか】enough / not / old / is / my / sister / to / go shopping alone を並べ替えて「私の妹は一人で買い物に行くのに十分な年齢ではない。」という英文を作る。\n【なぜenoughを形容詞のあとに置くのか】「〜するのに十分〜だ」は〈形容詞＋enough＋to動詞〉という決まった語順で表し、enoughは必ず形容詞のあとに置くというルールがあるから。\n【ポイント1】「〜するのに十分〜だ」は主語＋be＋形容詞＋enough＋to＋動詞原形の形。enoughは形容詞のあとに置く（enough oldは誤り）。\n【ポイント2】否定文ではnotがbe動詞のあとに来る。My sister is not old enough to go shopping alone.\n【ポイント3】反対の意味を表すtoo＋形容詞＋to動詞（〜すぎて〜できない）とセットで覚える。\n【答え】My sister is not old enough to go shopping alone.\n【確かめ】enoughがoldのあとに置かれているか（enough oldになっていないか）を確認する。\n【よくあるまちがい】enough oldのように、enoughを形容詞の前に置いてしまう。\n【ここが絶対】enoughは必ず形容詞・副詞のあとに置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ bought / a / new / me / father / bag / my ）\n「私の父は私に新しいバッグを買ってくれた。」',
    answer: 'My father bought me a new bag.',
    hint: 'buy＋人＋物 の語順（第4文型 SVOO）を使う。',
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。buy の用法も確認する。

【解説】
buy＋人＋物＝人のために物を買う（第4文型）。
・My father（S）＋bought（V）＋me（IO：間接目的語）＋a new bag（DO：直接目的語）

語順：My father bought me a new bag.

第3文型への書き換え：My father bought a new bag for me.（for を使う）

日本語訳：「私の父は私に新しいバッグを買ってくれた。」

【文法ポイント】
第4文型（SVOO）の動詞：give / send / show / teach / tell＋人＋物（to で書き換え可）／buy / make / get / cook＋人＋物（for で書き換え可）。

【入試頻出】
・My mother made me a delicious lunch.
・He gave his sister a birthday present.
・Can you get me some milk at the store?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_31',
    subject: 'eigo',
    question:
      '次の語を並べ替えて正しい英文を作れ。\n（ family / after / we / dinner / will / talk / finishing / our / with ）\n「夕食を終えた後、私たちは家族で話をするつもりだ。」',
    answer: 'We will talk with our family after finishing dinner.',
    hint: 'after の後には動名詞（〜ing）が来る。after＋動名詞＝〜した後で。',
    explanation:
      '【何を聞かれているか】family / after / we / dinner / will / talk / finishing / our / with を並べ替えて「夕食を終えた後、私たちは家族で話をするつもりだ。」という英文を作る。\n【なぜafterのあとが動名詞になるのか】前置詞のあとには名詞・動名詞が来るという決まりがあり、不定詞（to＋原形）は前置詞のあとには置けないため、「〜した後で」はafter＋動名詞（〜ing）の形にする必要があるから。\n【ポイント1】前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜した後で」＝after＋動名詞（〜ing）。\n【ポイント2】「家族で話す」はtalk with our family（talkは自動詞でwithが必要）。We will talk with our family after finishing dinner.\n【ポイント3】同じパターン：before＋ing（〜する前に）、without＋ing（〜せずに）。\n【答え】We will talk with our family after finishing dinner.\n【確かめ】talkのあとにwith（前置詞）が正しく続いているかを確認する。\n【よくあるまちがい】talkのあとのwithを抜かして、talk our familyのように直接名詞を続けてしまう。\n【ここが絶対】talkは自動詞なので「〜と話す」はtalk with/to〜という前置詞とセットで使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_32',
    subject: 'eigo',
    question:
      '次の語を並べ替えて正しい英文を作れ。\n（ the / who / is / man / next / lives / us / to / kind ）\n「私たちの隣に住んでいる男性は親切だ。」',
    answer: 'The man who lives next to us is kind.',
    hint: '関係代名詞 who を使って先行詞「the man」を修飾する節を作る。',
    explanation:
      '【何を聞かれているか】the / who / is / man / next / lives / us / to / kind を並べ替えて「私たちの隣に住んでいる男性は親切だ。」という英文を作る。\n【なぜwho livesという語順になるのか】関係代名詞whoを使って、先行詞The manのうしろにwho lives next to us（私たちの隣に住んでいる）という節を置くことで、The manを説明できるから。\n【ポイント1】文の骨格はThe man is kind.（その男性は親切だ）。\n【ポイント2】修飾部はwho lives next to us（私たちの隣に住んでいる）。ここでのwhoはlivesの主語（主格）にあたる。next to〜は「〜の隣に」という前置詞句。\n【ポイント3】組み合わせるとThe man who lives next to us is kind.になる。\n【答え】The man who lives next to us is kind.\n【確かめ】関係代名詞節（who lives next to us）が先行詞The manの直後に置かれ、そのあとに主節の動詞isが続いているかを確認する。\n【よくあるまちがい】next toの語順を逆にしてto nextとしてしまう。\n【ここが絶対】「〜の隣に」はnext to〜という決まった語順で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ this / heavy / carry / is / enough / light / for / to / my / grandmother / bag ）\n「このバッグは祖母が運べるほど軽い。」',
    answer: 'This bag is light enough for my grandmother to carry.',
    hint: '「〜が…するのに十分〜だ」は 形容詞＋enough＋for＋人＋to 動詞 の形。',
    explanation: `【出題意図】
enough to 構文に「for＋人」が加わった形の語順を問う問題。「〜が…するほど十分〜だ」という表現の完全形を問う。不要語（heavy）の識別も含む。

【解説】
構文：主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形。「for＋人」は不定詞の意味上の主語を示す。不要語：heavy（意味が light と矛盾するため使わない）。

正しい語順：
This bag is light enough for my grandmother to carry.

日本語訳：「このバッグは祖母が運べるほど軽い。」

【文法ポイント】
「形容詞＋enough＋for＋人＋to＋動詞」構文：This chair is comfortable enough for him to sit in.のように、誰にとって十分なのかを for で明示する。

【入試頻出】
・The box is small enough for a child to carry.
・This soup is warm enough for the baby to eat.
・The story is easy enough for beginners to understand.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・短い長文の空所を埋める） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo7_34',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: Excuse me, could you tell me where the milk is? B: ( ) It’s next to the eggs, in the third aisle.',
    choices: ['① Sure, no problem.', '② I have no idea what you mean.', '③ You’re welcome.', '④ I don’t like milk.'],
    answer: '① Sure, no problem.',
    hint: '道案内・場所を尋ねられたときの自然な応答を選ぶ。',
    explanation: `【出題意図】
店内で場所を尋ねる会話表現を、自然な応答の流れから選べるかを問う問題。

【解説】
Aが場所を尋ね、Bが具体的な場所（third aisle＝3番目の通路）を答えている流れなので、その前には快く応じる表現が入る。
・① Sure, no problem. → 「もちろん、いいですよ」快諾（✓）自然につながる
・② I have no idea what you mean. → 「意味がわからない」だと後半の具体的な案内と矛盾する
・③ You're welcome. → 「どういたしまして」はお礼への返答で、ここでは順番が逆
・④ I don't like milk. → 質問と無関係

日本語訳：「A：すみません、牛乳がどこにあるか教えていただけますか？　B：もちろんです。3番目の通路の、卵の隣にあります。」

【文法ポイント】
Could you tell me where〜?（間接疑問文）を使った丁寧な依頼表現。快諾の返事には Sure. / Of course. / Certainly. などが使われる。

【入試頻出】
・A: Could you help me find the bread? B: Sure, follow me.
・A: Where can I find the fruit section? B: It's over there, near the entrance.
・A: Can you tell me the price of this jacket? B: Of course, it's on the tag.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_35',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: Mom, can I help you with the cooking? B: ( ) Could you wash the vegetables for me?',
    choices: ['① No, thank you.', '② That would be great.', '③ I already finished it.', '④ Please don’t.'],
    answer: '② That would be great.',
    hint: '手伝いを申し出た子どもに対して、母親が快く受け入れて具体的な作業を頼む流れを考える。',
    explanation: `【出題意図】
家庭内での手伝いの申し出とそれへの応答という自然な会話の流れを問う問題。

【解説】
子どもが手伝いを申し出て、その後に「野菜を洗ってくれる？」と具体的な依頼が続くので、その前には歓迎する返答が必要。
・① No, thank you. → 断りの表現で、後半の依頼と矛盾する
・② That would be great. → 「それは助かるわ」快諾（✓）自然につながる
・③ I already finished it. → 「もう終わった」だと後半の依頼と矛盾する
・④ Please don't. → 「しないで」で申し出を拒否しており矛盾する

日本語訳：「A：お母さん、料理を手伝ってもいい？　B：それは助かるわ。野菜を洗ってくれる？」

【文法ポイント】
Can I help you with〜?（〜を手伝ってもいいですか）という申し出の表現。That would be great.は依頼・提案を快く受け入れる定番表現。

【入試頻出】
・A: Can I set the table? B: That would be great, thank you.
・A: Shall I carry the bags? B: That would help a lot.
・A: Do you need any help? B: Yes, please. Could you clean the table?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_36',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: This shirt looks nice, but it’s a little expensive. B: Why don’t you wait until the sale? ( ) A: That sounds like a good idea.',
    choices: ['① The store closes soon.', '② Prices are usually lower then.', '③ I already bought it.', '④ It doesn’t fit me.'],
    answer: '② Prices are usually lower then.',
    hint: 'セールを待つことを勧めた理由として自然につながる文を選ぶ。',
    explanation: `【出題意図】
買い物における提案とその理由の自然なつながりを問う空所補充問題。

【解説】
Bは「セールまで待ったらどう？」と提案しており、続く文はその理由になるはず。
・① The store closes soon. → 「店がもうすぐ閉まる」は提案と矛盾する（急いで買うべきという流れになる）
・② Prices are usually lower then. → 「そのときは大抵値段が安くなる」提案の理由として自然（✓）
・③ I already bought it. → 「もう買った」では提案と矛盾する
・④ It doesn't fit me. → 話題（サイズ）と無関係

日本語訳：「A：このシャツ素敵だけど、少し高いね。　B：セールまで待ったら？　その時なら大抵もっと安くなるよ。　A：それはいい考えだね。」

【文法ポイント】
Why don't you〜?（〜したらどう？）という提案表現。then はここでは「その時（セールの時）」という時を指す副詞。

【入試頻出】
・Why don't you buy it online? It's usually cheaper there.
・Why don't you ask the shop staff? They can help you.
・Why don't we go shopping tomorrow? The store will be less crowded then.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_37',
    subject: 'eigo',
    question: '次の短い文章の（　）に最も適切なものを選べ。  Every Saturday, my whole family goes to the farmer’s market together. My father usually carries the heavy bags, ( ) my mother chooses the freshest vegetables.',
    choices: ['① so', '② while', '③ because', '④ although'],
    answer: '② while',
    hint: '2つの動作が同時に並行して行われていることを表す接続詞を選ぶ。',
    explanation: `【出題意図】
接続詞 while（〜する一方で、〜する間）の用法を、家族の日常の一コマを通して問う問題。

【解説】
「父が重い袋を運ぶ」ことと「母が新鮮な野菜を選ぶ」ことが同時に並行して行われている文脈。
・① so → 「だから」結果を表すが、ここでは並行動作なので不自然
・② while → 「〜する一方で、〜する間」同時進行を表す（✓）
・③ because → 「なぜなら」理由を表し文意に合わない
・④ although → 「〜だけれども」逆接だが、ここでは対立関係ではない

日本語訳：「毎週土曜日、家族全員でファーマーズマーケットに行く。父はたいてい重い袋を運び、その一方で母は一番新鮮な野菜を選ぶ。」

【文法ポイント】
while：2つの動作・出来事が同時に起こることを示す接続詞。「〜する間に」（時間的並行）や「〜する一方で」（対比）の両方の意味を持つ。

【入試頻出】
・My sister sets the table while I cook dinner.
・While my mother was shopping, my father waited in the car.
・He likes vegetables, while his brother prefers meat.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_38',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: Do you know why the bakery is closed today? B: ( ) Maybe it’s a holiday.',
    choices: ['① Yes, I made it myself.', '② No, I have no idea.', '③ Sure, I’ll take it.', '④ Yes, it opens at nine.'],
    answer: '② No, I have no idea.',
    hint: '直後の「Maybe〜（たぶん〜）」という推測につながる応答を考える。',
    explanation: `【出題意図】
間接疑問文で尋ねられた質問に対する自然な応答の流れを問う問題。

【解説】
Aは「なぜパン屋が今日閉まっているか知っている？」と尋ねている。Bの返答の直後に「Maybe it's a holiday.（たぶん祝日だからだ）」という推測が続くので、Bは理由を知らないことを述べているはず。
・① Yes, I made it myself. → 質問と無関係（自分で作ったという意味）
・② No, I have no idea. → 「いいえ、わからない」（✓）その後の推測に自然につながる
・③ Sure, I'll take it. → 買い物での「それをもらいます」という意味で無関係
・④ Yes, it opens at nine. → 「開店時間」の話で、閉まっている理由の質問と矛盾する

日本語訳：「A：なぜ今日パン屋が閉まっているか知ってる？　B：いや、わからないな。たぶん祝日だからだよ。」

【文法ポイント】
Do you know why〜?（間接疑問文）に対する返答は、Yes, I do. / No, I don't.（あるいはI have no idea.）のように答える。maybe は推測を表す副詞。

【入試頻出】
・A: Do you know why the store is so crowded? B: No, I have no idea. Maybe there's a sale.
・A: Do you know when the shop reopens? B: I'm not sure. Maybe next week.
・A: Do you know where my sister went? B: No idea. Maybe she went shopping.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_39',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: I heard you are going to cook dinner for your family tonight. B: Yes, but I have never cooked curry before. ( ) A: Don’t worry. I’ll help you.',
    choices: ['① I’m a little nervous about it.', '② I cooked it many times.', '③ I don’t like curry at all.', '④ It was very delicious.'],
    answer: '① I’m a little nervous about it.',
    hint: '直後の Don’t worry.（心配しないで）という励ましにつながる発言を考える。',
    explanation: `【出題意図】
現在完了形（have never cooked）を含む会話の流れの中で、自然につながる発言を選ぶ問題。

【解説】
Bは「今までカレーを作ったことがない」と述べており、その後にAが「心配しないで、手伝うよ」と励ましている。この流れに自然につながるのは、不安な気持ちを表す発言。
・① I'm a little nervous about it. → 「少し不安だ」（✓）Don't worry.に自然につながる
・② I cooked it many times. → 「何度も作った」は直前の「作ったことがない」と矛盾する
・③ I don't like curry at all. → 「カレーが嫌い」だと、これから作る理由と矛盾する
・④ It was very delicious. → 過去の完了した出来事について述べており、これから作る文脈と合わない

日本語訳：「A：今夜家族のために夕食を作るんだってね。　B：うん、でもカレーを作ったことは一度もないんだ。ちょっと不安だな。　A：心配しないで。手伝うよ。」

【文法ポイント】
have never＋過去分詞（経験の否定）：〜したことが一度もない。nervous about〜（〜について不安な）という感情表現もセットで確認する。

【入試頻出】
・I have never traveled abroad. I'm a little nervous about it.
・She has never given a speech before, so she is worried.
・He has never used this machine, so he feels nervous.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_40',
    subject: 'eigo',
    question: '次の短い文章の（　）に最も適切なものを選べ。  My grandmother always says that the best gifts are not the most expensive ones, ( ) the ones made with the most care.',
    choices: ['① but', '② or', '③ so', '④ if'],
    answer: '① but',
    hint: '「最も高価な物ではなく、最も心のこもった物」という対比を表す接続詞を選ぶ。',
    explanation: `【出題意図】
not A but B（AではなくB）の構文を、祖母の言葉という場面で問う問題。

【解説】
「the most expensive ones（最も高価な物）」と「the ones made with the most care（最も心を込めて作られた物）」が対比されている。not A but B の構文を作る but が適切。
・① but → not A but B（AではなくB）（✓）
・② or → 選択（〜か〜）で対比構造にならない
・③ so → 「だから」で意味が合わない
・④ if → 条件を表し、この文脈では使えない

日本語訳：「私の祖母はいつも、最高の贈り物は最も高価な物ではなく、最も心を込めて作られた物だと言う。」

【文法ポイント】
not A but B：AではなくB。ones は「物」を指す代名詞で、繰り返しを避けるために gifts の代わりに使われている。

【入試頻出】
・It's not the size of the house but the love inside it that matters.
・She chose not the newest phone but the one her father gave her.
・What matters is not how much you spend but how much you care.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_41',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: These strawberries look fresh. Should we buy some? B: ( ) They’re a little expensive today, though.',
    choices: ['① Sure, let’s get some.', '② No, I have already eaten them.', '③ Yes, I sold them yesterday.', '④ Sorry, I can’t hear you.'],
    answer: '① Sure, let’s get some.',
    hint: '直後の「今日は少し高いけど」という続きに自然につながる、賛成の返答を選ぶ。',
    explanation:
      '【何を聞かれているか】「These strawberries look fresh. Should we buy some?」への返答（このあとThey\'re a little expensive today, though.と続く）に合う表現を選ぶ。\n【なぜ①が正解なのか】Aが「いちごを買おうか」と提案し、そのあと「ただ今日は少し高いけど」という但し書きが続くことから、間にはいったん賛成する返答が入るはずだから。\n【ポイント1】①Sure, let\'s get some.（いいね、買おう）は、そのあとの但し書き（少し高いけど）に自然につながる。\n【ポイント2】②「もう食べた」は買い物の提案と噛み合わない。③「昨日売った」は文脈と無関係。④「聞こえない」は会話の流れと無関係。\n【ポイント3】Should we〜?（〜しようか）という提案表現。thoughを文末に置いて「〜だけど」という軽い逆接を添える。\n【答え】① Sure, let\'s get some.\n【確かめ】選んだ返答のあとにThey\'re a little expensive today, though.が自然に続くかを確認する。\n【よくあるまちがい】提案と噛み合わない返答を選んでしまう。\n【ここが絶対】対話文の空所は、その後に続く文とのつながりを見て自然な流れになる返答を選ぶ。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文） × 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo7_42',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n\n「私は母のために夕食を作るつもりです。」',
    answer: 'I am going to cook dinner for my mother.',
    hint: '「〜するつもりだ」は be going to、「〜のために」は for を使う。',
    explanation: `【出題意図】
be going to（〜するつもりだ）と、前置詞 for（〜のために）を使った基本的な英作文力を問う問題。

【解説】
「私は〜するつもりです」は主語＋am/is/are going to＋動詞原形で表す。「母のために」は for my mother。
・I am going to cook dinner for my mother.
（will を使って I will cook dinner for my mother. でも意味は近いが、あらかじめ決めていた予定を表すなら be going to がより自然）

日本語訳の確認：「私は母のために夕食を作るつもりです。」

【文法ポイント】
be going to＋動詞原形：すでに決めている予定・意図を表す。will：その場で決めた意志や単純な未来を表す。for＋人：「〜のために」という利益・目的を表す前置詞。

【入試頻出】
・I am going to help my father with the garden this weekend.
・She is going to buy a present for her grandmother.
・We are going to visit our aunt next Sunday.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_43',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n\n「これは祖父が作ってくれた椅子です。」',
    answer: 'This is the chair my grandfather made for me.',
    hint: '関係代名詞（目的格）を使って「祖父が作った椅子」を表す。目的格の関係代名詞は省略できる。',
    explanation: `【出題意図】
目的格の関係代名詞（省略形）を使った英作文力を問う問題。「作ってくれた」という受益の意味も含める。

【解説】
「祖父が私のために作ってくれた椅子」は、先行詞 the chair の後ろに「my grandfather made for me」という節を続ける（目的格の関係代名詞は省略可能）。
This is the chair my grandfather made for me.
（＝This is the chair which/that my grandfather made for me.）

日本語訳の確認：「これは祖父が作ってくれた椅子です。」

【文法ポイント】
先行詞＋（関係代名詞省略）＋主語＋動詞〜：日常会話でよく使われる形。make＋物＋for＋人（人のために物を作る）という第3文型の形も確認する。

【入試頻出】
・This is the cake my sister made for the party.
・That is the bag my mother bought for my birthday.
・He showed me the picture his father took last summer.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_44',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n\n「私たちは新しい冷蔵庫を買うかどうかまだ決めていません。」',
    answer: 'We have not decided whether we will buy a new refrigerator yet.',
    hint: '「〜かどうか」は whether を使い、現在完了の否定形「まだ決めていない」を組み合わせる。',
    explanation:
      '【何を聞かれているか】「私たちは新しい冷蔵庫を買うかどうかまだ決めていません。」を英語に訳す。\n【なぜwhetherを使うのか】「〜かどうか」という意味は接続詞whether（またはif）で名詞節を作って表し、「まだ〜していない」は現在完了形の否定＋yetで表す必要があるから。\n【ポイント1】「まだ〜していない」＝have/has not＋過去分詞＋yet。\n【ポイント2】「〜かどうか」＝whether（またはif）で名詞節を作り、decideの目的語にする。\n【ポイント3】We have not decided whether we will buy a new refrigerator yet.（yetは文末に置くのが一般的）。\n【答え】We have not decided whether we will buy a new refrigerator yet.\n【確かめ】whetherのあとが〈主語＋動詞〉の文の形になっているかを確認する。\n【よくあるまちがい】whetherを使わずthatを使ってしまう。「〜かどうか」にはwhether（またはif）を使う。\n【ここが絶対】whether（〜かどうか）は名詞節を導く接続詞で、decide、know、wonderなどの目的語になる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_45',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n\n「この店で売られている野菜は、他の店の野菜より新鮮だ。」',
    answer: 'The vegetables sold at this store are fresher than those at other stores.',
    hint: '過去分詞の後置修飾（sold at this store）と比較級（fresher than）を組み合わせる。',
    explanation:
      '【何を聞かれているか】「この店で売られている野菜は、他の店の野菜より新鮮だ。」を英語に訳す。\n【なぜ過去分詞とthoseを使うのか】「この店で売られている野菜」は過去分詞soldを使って名詞を後ろから修飾し、「他の店の野菜」は同じ名詞the vegetablesの繰り返しを避けるためthose（複数名詞の代わり）を使う必要があるから。\n【ポイント1】過去分詞の後置修飾：名詞＋過去分詞〜（sold at this store）で「〜される名詞」を表す。The vegetables sold at this store。\n【ポイント2】比較の対象「他の店の野菜」は繰り返しを避けてthose（＝the vegetables）で表す。\n【ポイント3】The vegetables sold at this store are fresher than those at other stores.\n【答え】The vegetables sold at this store are fresher than those at other stores.\n【確かめ】thoseがthe vegetablesの代わりに使われており、名詞の繰り返しを避けていることを確認する。\n【よくあるまちがい】thoseのかわりにitやthatを使ってしまう。複数名詞の代わりにはthoseを使う。\n【ここが絶対】比較文で同じ名詞の繰り返しを避けるときは、単数名詞の代わりにthat、複数名詞の代わりにthoseを使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_46',
    subject: 'eigo',
    question: '次の日本語を英語にしなさい。\n\n「もし十分なお金があれば、家族全員に新しい服を買ってあげるのに。」',
    answer: 'If I had enough money, I would buy new clothes for all my family members.',
    hint: '現在の事実に反する仮定は「if＋過去形、主語＋would＋動詞原形」（仮定法過去）を使う。',
    explanation:
      '【何を聞かれているか】「もし十分なお金があれば、家族全員に新しい服を買ってあげるのに。」を英語に訳す。\n【なぜhadとwouldを使うのか】「もし〜ならば…なのに」という現在の事実に反する仮定（実際には十分なお金がない）を表すには、仮定法過去（if節は過去形、主節はwould＋動詞原形）を使う必要があるから。\n【ポイント1】仮定法過去の形：If＋主語＋過去形〜, 主語＋would/could＋動詞原形…。\n【ポイント2】「持っている」の現在の文はhaveだが、仮定法過去ではhadにする。\n【ポイント3】If I had enough money, I would buy new clothes for all my family members.\n【答え】If I had enough money, I would buy new clothes for all my family members.\n【確かめ】if節の動詞がhad（過去形）になっているか、主節がwould＋動詞原形になっているかを確認する。\n【よくあるまちがい】If I have enough money, I will buy〜のように現在形のまま書いてしまう。\n【ここが絶対】現在の事実に反する仮定は仮定法過去（if節は過去形、主節はwould/could＋動詞原形）で表す。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題など） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo7_47',
    subject: 'eigo',
    passage: `Every Sunday morning, my family goes to the local market together. My father always carries a big basket, and my mother chooses the freshest fruits and vegetables. My little brother likes to talk to the shop owners, and they often give him a small piece of fruit to try. My job is to carry the shopping list and check that we don't forget anything. Last Sunday, we bought so many vegetables that we could not carry them all by ourselves. A kind old man who was selling apples helped us bring the bags to our car. My mother thanked him and gave him some cookies she had baked that morning. It was a small thing, but it made all of us feel happy.`,
    question: '本文の内容と一致するものを選べ。\n① The writer’s father chooses the vegetables at the market.\n② The writer’s little brother helps carry the shopping list.\n③ An old man helped the family carry their bags.\n④ The writer’s mother did not thank the old man.',
    answer: '③ An old man helped the family carry their bags.',
    hint: '本文後半、りんごを売っていた老人がした行動に注目する。',
    explanation: `【出題意図】
長文の内容一致問題。各家族の役割分担を正確に読み取り、本文の具体的な出来事と選択肢を照合できるかを問う。

【解説】
・① → 本文では「My mother chooses the freshest fruits and vegetables」とあり、選ぶのは母。父ではないので誤り。
・② → 「My job is to carry the shopping list」とあり、買い物リストを持つのは筆者自身。弟ではないので誤り。
・③ → 「A kind old man who was selling apples helped us bring the bags to our car.」とあり、りんごを売っていた老人が袋を車まで運ぶのを手伝ったとある（✓）。
・④ → 「My mother thanked him」とあり、母はお礼を言っているので「感謝しなかった」は誤り。

日本語訳（要約）：毎週日曜の朝、家族で市場に行く。父はかごを持ち、母は新鮮な果物と野菜を選ぶ。弟は店主と話すのが好きで、筆者は買い物リストを管理する。先週は野菜を買いすぎて運べなかったところ、りんごを売る親切な老人が車まで運ぶのを手伝ってくれ、母はお礼にクッキーを渡した。

【文法ポイント】
who was selling apples は関係代名詞節で先行詞 an old man を修飾している。help＋人＋動詞原形（help us bring）の形も確認する。

【入試頻出】
長文の内容一致問題では、本文中の主語（誰が）と動作（何をした）の対応関係を1つずつ丁寧に照合することが重要。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_48',
    subject: 'eigo',
    passage: `My grandmother has lived with us since I was five years old. Every evening, she sits in the kitchen and tells me stories about her own childhood. She grew up in a small village, and her family did not have much money. She often says, "We didn't have many things, but we always had each other." When I complain about not having the newest phone or the latest shoes, she reminds me that the most important things in life cannot be bought at a store. At first, I did not really understand what she meant. But last month, when I was sick, my whole family took turns taking care of me, and I finally understood it. That kind of love is something no amount of money can buy.`,
    question: '下線部の it が指す内容として最も適切なものを選べ。\n\n「But last month, when I was sick, my whole family took turns taking care of me, and I finally understood it.」\n① what the newest phone looks like\n② why her grandmother did not have much money\n③ what her grandmother meant about important things\n④ how to take care of a sick person',
    answer: '③ what her grandmother meant about important things',
    hint: '直前の段落で祖母が繰り返し伝えていた考えは何かを確認する。',
    explanation: `【出題意図】
指示語 it が指す内容を、文脈全体から正確に読み取れるかを問う問題。長文読解で最も頻出する設問形式の一つ。

【解説】
筆者は最初、祖母の「一番大切な物はお店では買えない」という言葉の意味を理解していなかった（At first, I did not really understand what she meant）。しかし、病気になったときに家族が交代で看病してくれたことで、その意味をようやく理解した（I finally understood it）。したがって it は「祖母が言っていた大切なことの意味」を指す。
・① 新しい携帯電話の見た目 → 本文と無関係
・② 祖母がお金を持っていなかった理由 → 直接のテーマではない
・③ 祖母が「大切なこと」について言っていた意味（✓）
・④ 病人の世話の仕方 → 出来事の一部であり、it が指す内容そのものではない

日本語訳（要約）：祖母は5歳のときから一緒に暮らしている。貧しくても家族がいたという祖母の言葉の意味を、筆者は最初理解できなかったが、自分が病気になったとき家族が交代で世話をしてくれて、ようやくその意味を理解した。

【文法ポイント】
it・that などの指示語問題は、直前の文だけでなく段落全体の流れから「何を指しているか」を判断する必要がある。

【入試頻出】
指示語問題では、代名詞の直前の名詞句だけでなく、文全体・段落全体の趣旨を指すケースが多い点に注意する。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_49',
    subject: 'eigo',
    passage: `Last Saturday, my family went to a big shopping mall to buy new shoes for my little sister. She had grown so much that her old shoes no longer fit her. We looked at many stores, but the shoes were either too expensive or not the right size. Just when we were about to give up, we found a small shop at the end of the mall that we had never visited before. The shop owner was very kind and helped my sister try on several pairs. Finally, we found a pair of blue shoes that fit perfectly and were within our budget. My sister was so happy that she wore them home instead of putting them back in the box. My mother said we should remember that small shop for next time.`,
    question: '本文の内容と一致するものを選べ。\n① The family bought shoes at the first store they visited.\n② The sister’s old shoes still fit her well.\n③ The family found good shoes at a shop they had not visited before.\n④ The sister put the new shoes back in the box.',
    answer: '③ The family found good shoes at a shop they had not visited before.',
    hint: '「小さな店」に関する記述が本文のどこにあるかを探す。',
    explanation: `【出題意図】
長文の内容一致問題。時間の流れに沿った出来事を正確に整理し、選択肢と照合できるかを問う。

【解説】
・① → 本文では多くの店を見て回り、最後に「we had never visited before（今まで行ったことのない）」小さな店で見つけたとあるので、最初の店で買ったというのは誤り。
・② → 「her old shoes no longer fit her（古い靴はもう合わなくなった）」とあるので誤り。
・③ → 「a small shop at the end of the mall that we had never visited before」で良い靴を見つけたとあるので一致（✓）。
・④ → 「she wore them home instead of putting them back in the box（箱に戻す代わりに履いて帰った）」とあるので誤り。

日本語訳（要約）：先週土曜、妹の新しい靴を買いにモールへ行った。古い靴は合わなくなっていた。多くの店を回ったが値段やサイズが合わず、諦めかけたとき、今まで行ったことのない小さな店で青い靴を見つけ、妹はとても喜んでそのまま履いて帰った。

【文法ポイント】
過去完了形 had never visited は、買い物に行った過去の時点よりさらに前の経験（今まで一度も行ったことがなかった）を表している。

【入試頻出】
内容一致問題では、時間の順序（before / after）や過去完了と過去形の使い分けが正誤判定のポイントになりやすい。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo7_50',
    subject: 'eigo',
    passage: `In many families in Japan, grocery shopping used to be done almost every day. People would visit small local shops to buy just enough food for that day's meals. However, as more families started using refrigerators and cars, shopping habits began to change. Today, many families go to a large supermarket once or twice a week and buy enough food to last several days. Some people think this change has made life more convenient, since they do not need to go shopping so often. Others, however, say that they miss talking with the shop owners at small local stores, something that rarely happens at large supermarkets. Both ways of shopping have their own good points, and each family chooses the style that suits them best.`,
    question: '本文のタイトルとして最も適切なものを選べ。\n① The History of Japanese Refrigerators\n② How Shopping Habits Have Changed Over Time\n③ Why Small Shops Are Better Than Supermarkets\n④ The Best Way to Cook Japanese Food',
    answer: '② How Shopping Habits Have Changed Over Time',
    hint: '本文全体が「毎日の買い物」から「週1〜2回の買い物」への変化について述べていることに注目する。',
    explanation: `【出題意図】
長文全体の主題（タイトル）を把握する問題。部分的な情報ではなく、文章全体の流れを踏まえて選ぶ力を問う。

【解説】
本文は「以前は毎日近所の店で買い物をしていたが、冷蔵庫や車の普及により、週に1〜2回まとめて買い物をするようになった」という買い物習慣の変化について述べ、最後に「どちらの方法にも良い点がある」とまとめている。
・① 冷蔵庫の歴史 → 本文の一部（きっかけ）に過ぎず、主題ではない
・② 買い物習慣が時代とともにどう変化したか（✓）→ 本文全体の趣旨と一致
・③ 小さな店の方がスーパーより優れている → 本文は優劣をつけておらず「それぞれに良い点がある」と述べているので不適切
・④ 日本食の最良の調理法 → 本文の内容と無関係

日本語訳（要約）：日本の多くの家庭では以前、毎日のように近所の店で買い物をしていたが、冷蔵庫や車の普及により、週に1〜2回スーパーでまとめ買いする家庭が増えた。便利になったという意見もあれば、店主との会話が減ったことを惜しむ声もある。それぞれの買い物スタイルに良さがある。

【文法ポイント】
something that rarely happens at large supermarkets は関係代名詞 that を使った挿入的な説明。used to do（以前は〜したものだ）という過去の習慣を表す表現も本文冒頭で使われている。

【入試頻出】
タイトル・主題を選ぶ問題では、本文の一部の具体例ではなく、文章全体で繰り返し述べられている対比や結論を選ぶことが重要。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
