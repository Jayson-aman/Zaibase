import type { Question } from './questions';

export const kokoKankanEigoC2: Question[] = [
  // ============================================================
  // Q01–Q08: 基礎（difficulty: 'basic'）— 短い長文の内容一致・基本英作文
  // ============================================================
  {
    id: 'koko_kankan_eigo_c2_01',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    passage: `Ken got a new cat last month. Its name is Momo. Momo is white and very small. Every morning, Ken gives Momo some food before he goes to school. When Ken comes home, Momo always runs to the door to welcome him. On weekends, Ken plays with Momo in the garden. Ken's mother said, "Momo makes our family happier." Ken really loves his new pet and takes good care of her every day.`,
    question: `上の英文を読んで、内容と合っているものを1つ選びなさい。

① Momoは黒くて大きい。
② Kenは学校に行く前にMomoに餌をあげる。
③ Momoは庭に出るのが嫌いだ。
④ Kenの母はMomoを好きではない。`,
    answer: `② Kenは学校に行く前にMomoに餌をあげる。`,
    hint: `本文2文目「Every morning, Ken gives Momo some food before he goes to school.」に注目する。`,
    explanation: `【出題意図】短い日常英文を読み、細部の情報（時系列・動作の順序）を正確に読み取れるかを問う基礎的な内容一致問題。【解説】①本文には「white and very small」とあり黒くて大きいは誤り。②「gives Momo some food before he goes to school」と一致し正解。③「plays with Momo in the garden」と楽しんでいる様子が書かれており誤り。④「makes our family happier」とあり、母がMomoを好きではないというのは本文と矛盾する。【注意点】before（〜する前に）の位置を正確に読み取ることが重要。「学校に行く前に餌をあげる」であり「学校から帰ってから」ではない。【関連知識】welcome（出迎える）、take care of〜（〜の世話をする）は日常生活を描く英文で頻出の表現。`,
    pitfall: `④のように本文に直接書かれていない否定的な内容を安易に選ばない。本文にははっきり「makes our family happier」と書かれている。`,
    memoryTip: `内容一致問題は「本文中の同じ意味の表現」を探して、言い換え（paraphrase）に気づくことが得点のカギ。`,
  },
  {
    id: 'koko_kankan_eigo_c2_02',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    passage: `Last Friday, Amy's class went to the zoo for a school trip. They saw many animals, such as elephants, lions, and pandas. Amy liked the panda the best because it looked very cute while eating bamboo. After lunch, the students wrote reports about the animals they saw. Amy's teacher said the trip helped students learn about nature. Amy was tired but happy at the end of the day.`,
    question: `上の英文を読んで、内容と合っているものを1つ選びなさい。

① Amyのクラスは月曜日に動物園へ行った。
② Amyはパンダが一番好きだった。
③ 生徒たちは何も書かなかった。
④ Amyは一日の終わりにとても悲しかった。`,
    answer: `② Amyはパンダが一番好きだった。`,
    hint: `本文3文目「Amy liked the panda the best」を探す。`,
    explanation: `【出題意図】曜日・感想・行動の3点を本文と照合する基礎的な内容一致問題。【解説】①本文は「Last Friday」なので月曜日は誤り。②「Amy liked the panda the best because it looked very cute」と一致し正解。③「the students wrote reports about the animals」とあり、何も書かなかったは誤り。④最後は「tired but happy」であり、悲しかったのではない。【注意点】「tired but happy」のようにbutで気持ちが二つ並ぶ表現は、両方とも本文の事実として押さえる。【関連知識】school trip（校外学習）、report（レポート・報告書）は学校生活を描く英文の定番語彙。`,
    pitfall: `④の「tired」だけを見て悲しいと早合点しない。「tired but happy」は疲れたが幸せだったという意味。`,
    memoryTip: `曜日・時を表す語（Last Friday等）は選択肢のひっかけによく使われるので必ず本文と照合する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_03',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    passage: `Making a sandwich is easy. First, put some butter on two slices of bread. Next, add lettuce, tomato, and ham between the slices. Then, cut the sandwich in half. Finally, put it on a plate and enjoy your meal. This simple recipe takes only about five minutes, so it is perfect for a quick breakfast.`,
    question: `上の英文を読んで、内容と合っているものを1つ選びなさい。

① バターを塗るのは最後の工程である。
② サンドイッチを作るのに約5分かかる。
③ レタスやトマトは使わない。
④ 作るのに1時間以上かかる。`,
    answer: `② サンドイッチを作るのに約5分かかる。`,
    hint: `本文最後の文「This simple recipe takes only about five minutes」に注目する。`,
    explanation: `【出題意図】手順を示す英文（First, Next, Then, Finally）を正確に読み、所要時間などの数値情報を読み取る基礎問題。【解説】①バターを塗るのは「First」なので最初の工程であり誤り。②「takes only about five minutes」と一致し正解。③「add lettuce, tomato, and ham」とあり使われている。④5分としか書かれておらず1時間以上は誤り。【注意点】First/Next/Then/Finallyは手順を示す接続表現。順序を問う問題では必ずこれらの語に印をつけて読む。【関連知識】cut 〜 in half（〜を半分に切る）、slice（薄切り）も料理の英文で頻出する表現。`,
    pitfall: `①のようにFirstとFinallyを逆に覚えないよう、手順語の位置を必ず本文で確認する。`,
    memoryTip: `First→Next→Then→Finallyの順序語を線でつなぎながら読むと手順が整理しやすい。`,
  },
  {
    id: 'koko_kankan_eigo_c2_04',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    passage: `Many children in Japan help with housework to get some allowance from their parents. For example, some children clean their rooms, wash the dishes, or take out the garbage. A survey shows that about 60 percent of elementary school students receive an allowance every month. Parents believe that doing housework teaches children to be responsible.`,
    question: `上の英文を読んで、内容と合っているものを1つ選びなさい。

① 日本の子どもは誰もお小遣いをもらっていない。
② 約60パーセントの小学生が毎月お小遣いをもらっている。
③ 親は家事が子どもの教育に役立たないと考えている。
④ 家事をすると必ずお小遣いが減る。`,
    answer: `② 約60パーセントの小学生が毎月お小遣いをもらっている。`,
    hint: `「A survey shows that about 60 percent of elementary school students receive an allowance every month.」に注目する。`,
    explanation: `【出題意図】調査データを含む説明文から数値情報を正確に読み取る基礎問題。【解説】①本文は多くの子どもが手伝いをしてお小遣いをもらうと述べており誤り。②本文の数値と一致し正解。③「Parents believe that doing housework teaches children to be responsible.」とあり、教育に役立つと考えているため誤り。④そのような記述は本文にない。【注意点】「about 60 percent」のようにaboutが付く数値は「およそ」の意味であり、正確な60.0%という意味ではない点に注意。【関連知識】allowance（お小遣い）、responsible（責任感のある）はこのテーマで頻出の語彙。`,
    pitfall: `③のように本文の主張（役立つ）を逆の意味（役立たない）にすり替えた選択肢に注意する。`,
    memoryTip: `survey shows that〜（調査によると〜）の後ろには必ず具体的な数値情報が続くと意識して読む。`,
  },
  {
    id: 'koko_kankan_eigo_c2_05',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

私は毎日6時に起きます。`,
    answer: `I get up at six every day.`,
    hint: `「起きる」=get up、「毎日」=every day。現在の習慣なので現在形（3単現ならs）を使う。`,
    explanation: `【出題意図】現在形を使った基本的な和文英訳（日常の習慣）を問う。【解説】「毎日〜する」は習慣を表すので現在形を使う。主語Iなのでget（3単現のsは不要）。時刻はat six、習慣を表す副詞句every dayは文末に置くのが自然。【注意点】wake upは「目が覚める」、get upは「起き上がる・起床する」で意味が少し異なる。ここでは「起床する」なのでget upが適切。【関連知識】at + 時刻（at six）、every + 期間（every day/every morning）は時を表す前置詞句としてセットで覚える。`,
    pitfall: `I wake up at sixとしても大きな減点にはならないが、get upの方がより自然で標準的。`,
    memoryTip: `習慣＝現在形、「起きる」＝get up、時刻の前にはatを置くと覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_06',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

彼女は昨日図書館で本を読みました。`,
    answer: `She read a book in the library yesterday.`,
    hint: `「昨日」があるので過去形。readの過去形はread（発音は[rɛd]に変わるがつづりは同じ）。`,
    explanation: `【出題意図】不規則動詞readの過去形を使った基本的な過去時制の英作文を問う。【解説】「昨日〜した」は過去の一回の出来事なので過去形を使う。readは原形・過去形・過去分詞形すべて同じつづりread（発音のみ変化）という不規則動詞。「図書館で」はin the library、時を表すyesterdayは文末に置く。【注意点】readの過去形をreadedとするのは誤り（不規則動詞）。発音は原形が[riːd]、過去形が[rɛd]と変わる点も要確認。【関連知識】不規則動詞：read-read-read、put-put-put、cut-cut-cutのように3形が同じ動詞のグループも覚えておく。`,
    pitfall: `She reads a book in the library yesterdayのように現在形のままにしない。yesterdayがあれば必ず過去形。`,
    memoryTip: `read-read-readは「見た目は同じでも発音が変わる」不規則動詞の代表例として覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_07',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

あなたは犬を飼っていますか。`,
    answer: `Do you have a dog?`,
    hint: `一般動詞haveの疑問文はDo you+動詞の原形〜?の形。`,
    explanation: `【出題意図】一般動詞の疑問文（Do you〜?）の基本形を問う。【解説】「飼っている」はhaveを使う。一般動詞の疑問文は主語の前にDoを置き、動詞は原形のままにする（havesのようにしない）。文末には疑問符を付ける。【注意点】be動詞の疑問文（Are you〜?）と混同しない。一般動詞haveにはbe動詞を使わない。【関連知識】「犬を飼っている」はkeep a dogより一般的にはhave a dogが自然。Do you have any pets?（何かペットを飼っていますか）も類似表現。`,
    pitfall: `Are you have a dog?のようにbe動詞と一般動詞を混ぜて使わない。`,
    memoryTip: `一般動詞の疑問文は「Do/Does＋主語＋動詞の原形」の順と唱えて覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_08',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

今日はとても暑いです。`,
    answer: `It is very hot today.`,
    hint: `天候・気温を表す文の主語はItを使う。「とても暑い」はvery hot。`,
    explanation: `【出題意図】天候・気温を表す英文における非人称のitの使い方を問う。【解説】天気・気温・時刻・明暗などを表す英文では、意味を持たない主語itを使う。「暑い」はhot、程度を強めるveryを形容詞の前に置く。「今日は」はtodayで、文末に置くのが自然。【注意点】This is very hot todayのようにThisを使うのは誤り（Thisは何か具体的なものを指す代名詞であり、天候を表す非人称のitとは異なる）。【関連知識】It is rainy today.（今日は雨だ）、It is 3 o'clock now.（今3時だ）など、非人称のitは天候・時刻の表現で幅広く使われる。`,
    pitfall: `Today is very hot.は文法的には可能だが、天候表現の定番はIt is 〜.の形。`,
    memoryTip: `天気・時刻・気温の文の主語は「意味のないIt」と覚えておく。`,
  },

  // ============================================================
  // Q09–Q22: 標準（difficulty: 'standard'）— 長文読解・和文英訳・自由英作文
  // ============================================================
  {
    id: 'koko_kankan_eigo_c2_09',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `Green Hill Junior High School started a new recycling program last spring. Students collect plastic bottles, cans, and paper in different bins around the school. Once a week, a group of student volunteers sorts the collected items and takes them to a recycling center in the town. Since the program began, the amount of garbage from the school has decreased by almost 30 percent. The principal said that the program not only helps the environment but also teaches students the importance of teamwork. Some students hope that other schools in the area will start similar programs soon.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 学校から出るゴミの量はプログラム開始後どうなったか、日本語で答えよ。
② 本文の内容と合うものを選べ。
  ア．生徒たちは毎日ゴミを分別している。
  イ．このプログラムは環境保護だけでなくチームワークの大切さも教えている。
  ウ．校長はこのプログラムに反対している。`,
    answer: `① 学校から出るゴミの量が約30パーセント減少した。
② イ`,
    hint: `①「the amount of garbage from the school has decreased by almost 30 percent」に注目。②「not only helps the environment but also teaches students the importance of teamwork」に注目。`,
    explanation: `【出題意図】学校のリサイクル活動を題材に、数値情報の読み取りと内容一致の判断力を問う。【解説】①「has decreased by almost 30 percent」から「約30パーセント減少した」と分かる。②ア「毎日」ではなく「Once a week（週に1回）」なので誤り。イ「not only A but also B（AだけでなくBも）」の構文通り、環境保護とチームワークの両方を教えると本文にあり正解。ウ校長は肯定的な発言をしており誤り。【注意点】not only A but also Bは「Aだけでなく Bも」という強調表現で、内容一致問題では頻出のキーフレーズ。【関連知識】decrease（減少する）⇔increase（増加する）、volunteer（ボランティア）もこのテーマで重要な語彙。`,
    pitfall: `アのように「once a week」を「every day」に言い換えたひっかけ選択肢に注意する。`,
    memoryTip: `not only A but also B＝「AだけでなくBも」の構文は、内容一致問題で複数の利点をまとめて問う際によく使われる。`,
  },
  {
    id: 'koko_kankan_eigo_c2_10',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `Emma is an exchange student from Australia. She has been studying at a high school in Kyoto for six months. At first, she found it difficult to understand Japanese lessons and make friends because of the language barrier. However, she practiced Japanese every day and joined the tea ceremony club, which helped her talk with more classmates. Now, Emma can have simple conversations in Japanese and has made many friends. She says that trying new things, even when they are scary, is the best way to grow. Emma plans to stay in Japan for one more year to improve her Japanese further.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① Why was it difficult for Emma to make friends at first?（英語で答えよ）
② Emmaはこれからあとどれくらい日本に滞在する予定か、日本語で答えよ。
③ 本文からわかるEmmaの考え方を日本語で説明せよ。`,
    answer: `① Because of the language barrier.
② あと1年間。
③ 怖くても新しいことに挑戦することが、成長するための最良の方法だという考え方。`,
    hint: `①本文2文目「because of the language barrier」に注目。②最終文「for one more year」。③「trying new things, even when they are scary, is the best way to grow」を日本語にする。`,
    explanation: `【出題意図】留学生の体験談を通して、理由を表すbecause of、期間表現、筆者（登場人物）の考え方を読み取る力を問う。【解説】①「found it difficult... because of the language barrier」から「言語の壁のため」と分かる。②最終文「plans to stay in Japan for one more year」より「あと1年間」。③「trying new things, even when they are scary, is the best way to grow」がEmmaの考え方の核心。【注意点】becauseの後ろは節（主語＋動詞）、because ofの後ろは名詞（句）が続く点に注意。ここではbecause of the language barrier（名詞句）。【関連知識】exchange student（交換留学生）、language barrier（言語の壁）は留学をテーマにした英文で頻出。`,
    pitfall: `②を「6か月」と答えないよう注意する。「studying for six months」はこれまでの期間で、設問はこれからの期間（one more year）を聞いている。`,
    memoryTip: `even when〜（〜のときでも）は譲歩を表す表現で、「困難でも挑戦する」という前向きな主張とセットで使われることが多い。`,
  },
  {
    id: 'koko_kankan_eigo_c2_11',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `This summer, the city library held a reading event for elementary and junior high school students. Each participant chose five books to read during the summer vacation and wrote a short report about each one. At the end of the event, the library gave certificates to students who finished all five reports. More than 300 students joined the event this year, which was almost twice as many as last year. The librarian said that the event was successful because it encouraged children to enjoy reading rather than just finishing homework.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 今年の参加者数は去年と比べてどうだったか、日本語で答えよ。
② 修了証がもらえるのはどのような生徒か、日本語で答えよ。
③ 図書館員がこのイベントを成功と考える理由を日本語で述べよ。`,
    answer: `① 今年は300人以上が参加し、去年のほぼ2倍だった。
② 5冊すべての本についてレポートを書き終えた生徒。
③ 宿題を終わらせるためだけでなく、読書そのものを楽しむよう子どもたちに促すことができたから。`,
    hint: `①「More than 300 students joined... almost twice as many as last year」。②「gave certificates to students who finished all five reports」。③「encouraged children to enjoy reading rather than just finishing homework」。`,
    explanation: `【出題意図】数値の比較表現（twice as many as〜）と目的・理由を表す英文を正確に読み取る力を問う。【解説】①「almost twice as many as last year」＝去年のほぼ2倍。②関係代名詞who以下「finished all five reports」が証書をもらう条件。③「rather than just finishing homework」＝単に宿題を終わらせるためだけでなく、というrather thanの対比表現がポイント。【注意点】twice as many as〜は「〜の2倍の数」という倍数表現で、twice as much as〜（量）と区別する。【関連知識】certificate（修了証・証明書）、encourage 人 to do（人に〜するよう促す）も頻出表現。`,
    pitfall: `③を「宿題を終わらせるため」とだけ答えると不十分。rather than以下の対比（読書を楽しむこと）まで含めて答える必要がある。`,
    memoryTip: `A rather than B＝「BよりむしろA」。対比の中心はAであることを意識して読む。`,
  },
  {
    id: 'koko_kankan_eigo_c2_12',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `Students at Minami Junior High School have been practicing hard for the sports day, which will be held next Saturday. Every class is preparing a dance performance and a relay race team. This year, the students decided to make their own flags to cheer for their classmates. Ms. Sato, the P.E. teacher, said that sports day is not only about winning but also about supporting each other. Some students who are not good at sports still enjoy cheering loudly for their teammates. The school hopes that this event will bring the students closer together before summer vacation.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 今年、生徒たちが新しく決めたことは何か、日本語で答えよ。
② 佐藤先生が考える運動会の意義を日本語でまとめよ。
③ 本文の内容と合うものを選べ。
  ア．運動が苦手な生徒は運動会に参加しない。
  イ．運動が苦手な生徒も応援を楽しんでいる。
  ウ．運動会は夏休みの後に行われる。`,
    answer: `① 生徒たちを応援するための自作の旗を作ること。
② 運動会は勝つことだけでなく、互いに支え合うことにも意義がある。
③ イ`,
    hint: `①「the students decided to make their own flags to cheer for their classmates」。②「sports day is not only about winning but also about supporting each other」。③「Some students who are not good at sports still enjoy cheering loudly」。`,
    explanation: `【出題意図】学校行事に関する英文で、決定事項・教師の考え・内容一致を総合的に問う。【解説】①「make their own flags to cheer for their classmates」が新しい取り組み。②not only A but also B（勝つことだけでなく支え合うことも）が意義。③ア「参加しない」ではなく「still enjoy cheering（応援を楽しんでいる）」なので誤り、イが正しい、ウ「before summer vacation（夏休みの前）」なので誤り。【注意点】stillは「それでも・依然として」という意味で、逆接的なニュアンスを持つ副詞。運動が苦手でも楽しんでいる、という対比を示す。【関連知識】relay race（リレー）、cheer for〜（〜を応援する）は運動会・体育祭をテーマにした英文の定番語彙。`,
    pitfall: `ウのようにbefore（前）とafter（後）を逆にしたひっかけ選択肢に注意する。`,
    memoryTip: `still＋動詞は「それでも〜する」という逆接的な強調。文脈が反転する合図として読む。`,
  },
  {
    id: 'koko_kankan_eigo_c2_13',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `Washoku, traditional Japanese cuisine, has become popular around the world in recent years. In 2013, UNESCO added washoku to its list of Intangible Cultural Heritage. Washoku is known for using fresh, seasonal ingredients and for its beautiful presentation. Many people overseas enjoy dishes such as sushi, tempura, and miso soup. However, some experts worry that the number of young Japanese people who can cook traditional dishes is decreasing, because fast food and convenience stores are more popular among them. To keep washoku alive, some schools have begun teaching students how to cook traditional Japanese meals.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 和食が2013年にユネスコによってどのように認定されたか、日本語で答えよ。
② 専門家が心配していることを日本語で述べよ。
③ その心配に対して、学校はどのような取り組みを始めたか、英語で答えよ。`,
    answer: `① 無形文化遺産のリストに登録された。
② 若い日本人で伝統料理を作れる人の数が減っていること。
③ Some schools have begun teaching students how to cook traditional Japanese meals.`,
    hint: `①「UNESCO added washoku to its list of Intangible Cultural Heritage」。②「the number of young Japanese people who can cook traditional dishes is decreasing」。③最終文をそのまま抜き出す。`,
    explanation: `【出題意図】文化・社会的な話題を扱う説明文で、事実（歴史的認定）・懸念（社会問題）・対策の3段構成を読み取る力を問う。【解説】①「added washoku to its list of Intangible Cultural Heritage」＝無形文化遺産リストに追加された。②「the number of... is decreasing」＝伝統料理を作れる若者の数が減少していること。③最終文がその対策で、学校で伝統料理の作り方を教え始めたという内容。【注意点】becauseの前後の因果関係（減少の原因＝ファストフードやコンビニの人気）も合わせて理解しておくと記述問題で役立つ。【関連知識】Intangible Cultural Heritage（無形文化遺産）、seasonal ingredients（旬の食材）は和食関連の英文で頻出。`,
    pitfall: `②で「和食が世界的に人気」という肯定的な内容と、専門家の懸念（否定的な内容）を混同しない。`,
    memoryTip: `however（しかし）の後ろには、それまでの流れと反対の内容（ここでは懸念）が続くと意識して読む。`,
  },
  {
    id: 'koko_kankan_eigo_c2_14',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `A survey of 200 high school students asked how they came to school. Sixty percent of the students said they came by bicycle, thirty percent came by bus, and the rest walked. Students who rode bicycles said it was faster and cheaper than taking the bus. However, some students mentioned that riding in the rain was difficult. The school is now thinking about building a larger roof over the bicycle parking area to solve this problem.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 徒歩で通学する生徒は全体の何パーセントか、計算して日本語で答えよ。
② 自転車通学の生徒が挙げている利点を2つ、日本語で答えよ。
③ 学校が検討している解決策を英語で答えよ。`,
    answer: `① 10パーセント（60％＋30％＝90％なので、残りの10％）。
② 通学がより速く、バスより安いこと。
③ The school is thinking about building a larger roof over the bicycle parking area.`,
    hint: `①60％＋30％を100％から引く。②「it was faster and cheaper than taking the bus」。③最終文をそのまま抜き出す。`,
    explanation: `【出題意図】アンケート調査の数値情報を計算しながら読み取り、利点・課題・対策を整理する力を問う。【解説】①「the rest」＝残り。60％+30％=90％なので、残りは10％。②「faster and cheaper than taking the bus」＝バスより速くて安い、の2点。③「building a larger roof over the bicycle parking area」＝駐輪場の屋根を大きくすること。【注意点】the rest（残り）は文脈上「100％からそれまでの割合を引いたもの」を指す。数値問題では必ず合計が100になるかを確認する。【関連知識】比較級fasterとcheaperがandで並列されている点にも注目（形容詞の並列比較）。`,
    pitfall: `②で理由を1つしか答えない不十分な解答にしない。「速い」「安い」の2点を両方答える。`,
    memoryTip: `the rest＝「それ以外の残り」。数値問題では100から他の割合を引けば求められる。`,
  },
  {
    id: 'koko_kankan_eigo_c2_15',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `In science class, students grew bean plants under different conditions to study how light affects growth. One group put their plants near a window, and another group kept their plants in a dark closet. After two weeks, the plants near the window were taller and had green leaves, while the plants in the closet were pale and weak. The teacher explained that plants need sunlight to make their own food through a process called photosynthesis. The students recorded their results in a notebook and presented their findings to the class.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 窓際で育てた植物と、暗い戸棚で育てた植物にはそれぞれどのような違いが見られたか、日本語で答えよ。
② 下線部「photosynthesis」とは植物が何をするために必要な働きか、日本語で答えよ。
③ 生徒たちが実験の後に行ったことを英語で2つ答えよ。`,
    answer: `① 窓際の植物は背が高く葉が緑色だったが、戸棚の植物は色が薄く弱々しかった。
② 植物が自分自身の栄養（食べ物）を作るために必要な働き。
③ They recorded their results in a notebook, and they presented their findings to the class.`,
    hint: `①「the plants near the window were taller and had green leaves, while the plants in the closet were pale and weak」。②「plants need sunlight to make their own food through a process called photosynthesis」。③最終文の2つの動作をそのまま使う。`,
    explanation: `【出題意図】理科の実験を題材にした説明文で、対比構造（whileを使った比較）と専門用語の意味把握を問う。【解説】①whileは「一方で」という対比の接続詞。窓際＝背が高く緑の葉、戸棚＝色が薄く弱い、という対照的な結果を読み取る。②photosynthesis（光合成）は「植物が太陽光を使って自分の栄養を作る働き」と説明されている。③最終文「recorded their results」「presented their findings」の2つの動作。【注意点】whileには「〜する間」という時間の意味と「一方で」という対比の意味があるが、ここでは対比の意味。【関連知識】photosynthesis（光合成）、findings（研究結果・調査結果）は理科系の英文で重要語彙。`,
    pitfall: `②を「光合成という言葉の意味」ではなく、必ず「何のための働きか」という機能面まで説明する。`,
    memoryTip: `while＝対比のときは「一方で」、時間のときは「〜する間」。文の前後の内容が対照的かどうかで判断する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_16',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    passage: `Hi Rina,

I'm going to have a birthday party at my house next Sunday at 3 p.m. I would be happy if you could come. My mother is going to make a chocolate cake, and we can play some games together. Please let me know by Friday if you can join us.

See you soon,
Yuki`,
    question: `上のメールを読んで、次の設問に答えなさい。

① 誕生日パーティーはいつ、どこで行われるか、日本語で答えよ。
② Yukiの母親は何を作る予定か、英語で答えよ。
③ Rinaはいつまでに返事をする必要があるか、日本語で答えよ。`,
    answer: `① 次の日曜日の午後3時に、Yukiの家で行われる。
② Yuki's mother is going to make a chocolate cake.
③ 金曜日までに。`,
    hint: `①「a birthday party at my house next Sunday at 3 p.m.」。②「My mother is going to make a chocolate cake」。③「Please let me know by Friday」。`,
    explanation: `【出題意図】メール形式の実用的な英文から、日時・行動主体・期限といった具体的情報を正確に抽出する力を問う。【解説】①「at my house next Sunday at 3 p.m.」＝次の日曜日の午後3時、Yukiの家。②「My mother is going to make a chocolate cake」がそのまま答え。③「let me know by Friday」のbyは「〜までに」という期限を表す前置詞。【注意点】by Friday（金曜日までに、期限）とuntil Friday（金曜日までずっと、継続）の違いに注意。ここでは期限を表すbyが正しい。【関連知識】メール英文の定型表現：I would be happy if you could〜（〜していただけたら嬉しいです）、let me know（教えてください）は実用英語で頻出。`,
    pitfall: `③をby Fridayの意味を取り違えて「金曜日以降」としない。byは「〜までに」という期限を表す。`,
    memoryTip: `by＝期限（〜までに）、until＝継続（〜までずっと）と対比させて覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_17',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

すみません、遅れてしまって。今度はもっと早く来るつもりです。`,
    answer: `I'm sorry for being late. I will come earlier next time.`,
    hint: `「〜してすみません」はsorry for+動名詞。「今度は」はnext time、「もっと早く」は比較級earlier。`,
    explanation: `【出題意図】謝罪表現（be sorry for+動名詞）と未来の意志（willまたはbe going to）を組み合わせた2文構成の英作文を問う。【解説】「遅れてしまってすみません」はI'm sorry for being late.（sorry for+動名詞）。「今度はもっと早く来るつもりです」はI will come earlier next time.（比較級earlierを使う）。【注意点】I'm sorry to be lateも可能だが、be sorry for〜ing（すでに起きたことへの謝罪）の方がここでは自然。比較級のearlierはearlyの比較級で不規則変化ではなく-yをiに変えてerを付ける形。【関連知識】I'm sorry for being late.の代わりにI apologize for being late.（よりフォーマル）も使える。`,
    pitfall: `earlierをmore earlyとしない。1音節・2音節でyで終わる形容詞・副詞は比較級を-erで作るのが原則。`,
    memoryTip: `sorry for+動名詞＝すでに起きたことへの謝罪、sorry to+動詞原形＝これから起きることへの謝罪、と使い分ける。`,
  },
  {
    id: 'koko_kankan_eigo_c2_18',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

今度の夏祭りに一緒に行きませんか。とても楽しいイベントです。`,
    answer: `Would you like to go to the summer festival together? It is a very exciting event.`,
    hint: `丁寧な誘い方はWould you like to〜?。「一緒に」はtogether。「とても楽しい」はvery exciting/very fun。`,
    explanation: `【出題意図】丁寧な勧誘表現（Would you like to〜?）と、感想を述べる文（It is〜）を組み合わせた英作文を問う。【解説】「〜しませんか」という丁寧な誘いはWould you like to〜?（Do you want to〜?よりも丁寧）。「今度の夏祭り」はthe summer festival（this comingを補ってもよい）。「とても楽しいイベントです」はIt is a very exciting event.。excitingは「（人を）わくわくさせる」という意味の現在分詞形容詞。【注意点】excited（わくわくしている、人の気持ち）とexciting（わくわくさせる、物事の性質）を混同しない。イベント自体を説明するのでexciting。【関連知識】Would you like to〜?、Why don't we〜?、How about〜ing?はいずれも「〜しませんか」という勧誘表現。`,
    pitfall: `It is a very excited eventとしない。イベントの性質を表すのでexciting（現在分詞）を使う。`,
    memoryTip: `-ing＝物事の性質（人をわくわくさせる）、-ed＝人の感情（わくわくしている）と対で覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_19',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

私は昨日から頭が痛いので、今日は学校を休むつもりです。`,
    answer: `I have had a headache since yesterday, so I will stay home from school today.`,
    hint: `「昨日から〜している」は現在完了（have had）+since。「学校を休む」はstay home from school。`,
    explanation: `【出題意図】現在完了（継続用法）と接続詞soを使った因果関係の英作文を問う。【解説】「昨日から頭が痛い」は過去から現在まで痛みが続いているので現在完了継続：I have had a headache since yesterday.（have/has+過去分詞、sinceは起点を表す）。「だから今日は学校を休むつもりだ」はso（だから）でつなぎ、未来の意志willを使う。「学校を休む」はstay home from school / be absent from school。【注意点】since（〜以来、起点）とfor（〜の間、期間）を混同しない。ここでは「昨日」という特定の起点なのでsinceが正しい。【関連知識】have a headache（頭痛がする）、be absent from〜（〜を欠席する）も体調・欠席に関する頻出表現。`,
    pitfall: `since yesterdayをfor yesterdayとしない。sinceは起点（〜以来）、forは期間（〜の間）を表す。`,
    memoryTip: `since+起点（過去のある時点）、for+期間（〜の間）と対にして覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_20',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語を英語に訳しなさい。

もしあなたが忙しくなければ、明日私を手伝ってくれませんか。`,
    answer: `If you are not busy, could you help me tomorrow?`,
    hint: `条件を表すif節は現在形。丁寧な依頼はCould you〜?。`,
    explanation: `【出題意図】条件を表すif節（現実的な条件・単純未来の代用としての現在形）と丁寧な依頼表現（Could you〜?）を組み合わせた英作文を問う。【解説】「もし〜でなければ」は現実的にありうる条件なのでif節は現在形：If you are not busy。「手伝ってくれませんか」という丁寧な依頼はCould you help me〜?（Can you〜?よりも丁寧）。「明日」はtomorrowで文末に置く。【注意点】ここでは仮定法ではなく、単純な条件文（if+現在形, 助動詞+動詞原形）を使う点に注意。「忙しくないなら本当に手伝ってほしい」という現実的な依頼なので仮定法過去（If you were not busy）ではない。【関連知識】Could you〜?、Would you mind〜ing?、I was wondering if you could〜もすべて丁寧な依頼表現。`,
    pitfall: `If you were not busyと仮定法にしてしまうと「実際には忙しいだろう」という含みが強くなり、単純な依頼の文脈にはやや不自然。`,
    memoryTip: `現実的にありうる条件＝if+現在形、実現しにくい仮定＝if+過去形（仮定法）と区別する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_21',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `あなたの好きな季節とその理由を、25語以上の英語で書きなさい。`,
    answer: `（解答例）I like summer the best. I can swim in the sea and enjoy fireworks with my family. Also, summer vacation is long, so I can travel to many places with my friends.（32語）`,
    hint: `「主張（好きな季節）→理由1→理由2」の構成で書く。soやalsoでつなぐと自然。`,
    explanation: `【出題意図】好きな季節とその理由を25語以上でまとめる自由英作文。主張と具体的な理由を論理的につなげる構成力を問う。【解説】まず好きな季節を明示し（I like summer the best.）、その後に理由を2つ挙げる（泳げる・花火が楽しめる、夏休みが長い）。also（また）やso（だから）を使って文をつなぐと自然な流れになる。【注意点】語数条件（25語以上）を満たすために理由を最低2つは挙げる。単に「好きだから」だけでは語数も内容も不十分。スペルミスや3単現のs、複数形の欠落がないか最後に見直す。【関連知識】季節・行事に関する語彙：fireworks（花火）、cherry blossoms（桜）、autumn leaves（紅葉）、snowman（雪だるま）なども理由付けに使える。`,
    pitfall: `I like summer because it is hot.のように理由が1つだけで語数が不足しないよう、複数の具体的理由を用意する。`,
    memoryTip: `自由英作文の型：主張→理由1→理由2→（まとめ）の順で書くと、語数も内容もそろえやすい。`,
  },
  {
    id: 'koko_kankan_eigo_c2_22',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `部活動に入ることの良い点について、25語以上の英語で書きなさい。`,
    answer: `（解答例）Joining a club has many good points. First, students can make new friends who share the same interests. Second, they can learn teamwork and improve their skills through daily practice.（29語）`,
    hint: `「主張→First〜→Second〜」の構成で理由を整理して書く。`,
    explanation: `【出題意図】部活動の利点について、First/Secondを用いて理由を整理しながら述べる自由英作文。論理的な構成力と基本文法の正確さを問う。【解説】まず主張（部活動には良い点が多い）を述べ、First（友達ができる）、Second（チームワークを学べる・技術が向上する）と理由を2つ整理して並べる。【注意点】First, Second（第一に、第二に）のような順序を示す語を使うと採点者に構成が伝わりやすい。25語以上の条件を満たすため、理由をできるだけ具体的に（例：through daily practiceなど）書く。【関連知識】club activities（部活動）、teamwork（チームワーク）、improve one's skills（技術を向上させる）はこのテーマで頻出の語彙・表現。`,
    pitfall: `Joining a club is good.だけで終わらせず、必ず具体的な理由を2つ以上加えて語数を満たす。`,
    memoryTip: `First, 〜. Second, 〜.の形は、理由を2つ挙げる自由英作文で最も使いやすい定番の構成。`,
  },

  // ============================================================
  // Q23–Q50: 発展（difficulty: 'advanced'）— 長文読解・和文英訳・自由英作文（本試験レベル）
  // ============================================================
  {
    id: 'koko_kankan_eigo_c2_23',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Artificial intelligence (AI) is changing the way people work. In some industries, AI can now perform tasks that used to require human workers, such as answering customer questions or checking data for errors. Some experts warn that this could lead to job losses in certain fields. However, others argue that AI will also create new kinds of jobs that do not exist yet, such as workers who design and manage AI systems. Rather than replacing humans completely, AI may end up working alongside people, handling repetitive tasks so that humans can focus on creative and complex work.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① AIが人間に代わって行えるようになった仕事の例を英語で2つ答えよ。
② 下線部「Rather than replacing humans completely」の意味を日本語で答えよ。
③ 本文全体を通して筆者が伝えたい考えを80字以内の日本語でまとめよ。`,
    answer: `① Answering customer questions and checking data for errors.
② 人間を完全に置き換えるのではなく
③ AIは仕事を完全に奪うのではなく、単純作業を代わりに行うことで、人間がより創造的で複雑な仕事に集中できるよう、人間と共に働く存在になる可能性が高いという考え。（77字）`,
    hint: `①「such as answering customer questions or checking data for errors」。②rather than=〜ではなく。③最終文「AI may end up working alongside people, handling repetitive tasks so that humans can focus on creative and complex work.」が結論。`,
    explanation: `【出題意図】AIと雇用というテーマの論説文で、具体例の抽出・比較表現（rather than）の理解・筆者の主張の要約という3段階の読解力を問う。【解説】①第1文後半の具体例をそのまま抜き出す。②rather than〜completely＝「完全に〜するのではなく」という比較・対比の表現。③本文は「job losses（懸念）」と「new kinds of jobs（期待）」の両方を提示した上で、最終文で「AIは人間と共存し、単純作業を担うことで人間が創造的な仕事に集中できる」という折衷的な結論を述べている。【注意点】rather than A, Bの構文はA（否定される内容）とB（実際に主張される内容）が対比される。ここではreplacing humans completely（A）とworking alongside people（B）が対比されている。【関連知識】AI関連語彙：artificial intelligence、repetitive task（反復作業）、alongside（〜と並んで）は現代の論説文で頻出。`,
    pitfall: `③でjob losses（懸念）だけ、あるいはnew jobs（期待）だけを書かず、両方を踏まえた上での結論（共存・分担）まで含めてまとめる。`,
    memoryTip: `賛成・反対の両論を紹介した後、最終文でバランスの取れた結論を述べる構成は論説文の典型パターン。`,
  },
  {
    id: 'koko_kankan_eigo_c2_24',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Every year, millions of tons of plastic waste end up in the ocean, harming marine animals and damaging ecosystems. Much of this waste breaks down into tiny pieces called microplastics, which are now found in fish, salt, and even drinking water. Scientists are still studying how microplastics affect human health, but many are concerned about the long-term risks. Some countries have already banned single-use plastic items such as straws and bags, while others are investing in biodegradable materials as alternatives. Experts agree that solving this problem will require cooperation among governments, companies, and individual consumers.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① マイクロプラスチックはどのようなものの中に見つかっているか、英語で2つ以上答えよ。
② 下線部「biodegradable materials」とはどのようなものだと考えられるか、日本語で説明せよ。
③ この問題を解決するために必要だと専門家が述べていることを日本語で答えよ。`,
    answer: `① Fish, salt, and drinking water.
② プラスチックの代わりに使える、自然に分解される（環境に優しい）素材。
③ 政府・企業・個々の消費者が協力すること。`,
    hint: `①「found in fish, salt, and even drinking water」。②bio-（生物の）+degradable（分解できる）という語構成から推測する。③最終文「will require cooperation among governments, companies, and individual consumers」。`,
    explanation: `【出題意図】海洋プラスチック問題という時事的テーマの論説文で、具体例の抽出・未知語の意味推測・解決策の理解を問う。【解説】①「found in fish, salt, and even drinking water」から3つの具体例を抜き出せる。②biodegradableはbio（生物）+degrade（分解する）+able（できる）という構成から「自然に分解できる」という意味を推測できる。プラスチックの代替素材として紹介されている。③最終文「cooperation among governments, companies, and individual consumers」＝政府・企業・消費者個人の協力。【注意点】未知語の意味を推測する問題では、語の構成（接頭辞・接尾辞）と前後の文脈（プラスチックの代替として使われる）の両方を手がかりにする。【関連知識】microplastics（マイクロプラスチック）、single-use plastic（使い捨てプラスチック）、ecosystem（生態系）は環境問題の英文で頻出語彙。`,
    pitfall: `③を「政府だけ」「企業だけ」のように一部の主体のみ答えない。governments, companies, individual consumersの3者すべてを含める。`,
    memoryTip: `bio-（生物）+de-（下へ、離れて）+grade（段階・分解）＋able（できる）と分解して未知語の意味を推測する練習をする。`,
  },
  {
    id: 'koko_kankan_eigo_c2_25',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Japan has traditionally relied heavily on imported fossil fuels for its energy needs, but this dependence has raised concerns about energy security and environmental impact. In recent years, the government has been promoting renewable energy sources, especially solar and wind power, as alternatives. Solar panels are now common on the roofs of houses and public buildings, and several large offshore wind farms have been built along the coast. Despite this progress, renewable energy still accounts for a relatively small percentage of Japan's total energy supply, partly because of high costs and limited land for large-scale solar farms. Experts believe that continued investment and technological innovation will be necessary for Japan to increase its use of clean energy.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 日本が化石燃料への依存によってどのような懸念を抱えてきたか、日本語で答えよ。
② 再生可能エネルギーの普及が進んでいない理由を、本文に基づいて日本語で2点答えよ。
③ 専門家は日本のクリーンエネルギー利用を増やすために何が必要だと考えているか、英語で答えよ。`,
    answer: `① エネルギー安全保障と環境への影響についての懸念。
② ・コストが高いこと。・大規模な太陽光発電所を建設するための土地が限られていること。
③ Continued investment and technological innovation.`,
    hint: `①「this dependence has raised concerns about energy security and environmental impact」。②「partly because of high costs and limited land for large-scale solar farms」。③最終文をそのまま抜き出す。`,
    explanation: `【出題意図】日本のエネルギー政策という社会的テーマの論説文で、懸念・課題・解決に必要な要素を段階的に整理して読み取る力を問う。【解説】①「concerns about energy security and environmental impact」＝エネルギー安全保障と環境影響への懸念。②「high costs」と「limited land for large-scale solar farms」の2点。③「continued investment and technological innovation」＝継続的な投資と技術革新。【注意点】partly because of〜（一部は〜が理由で）は、原因が複数あることを示す表現。1つだけでなく全ての理由を拾う必要がある。【関連知識】fossil fuels（化石燃料）、renewable energy（再生可能エネルギー）、offshore wind farm（洋上風力発電所）はエネルギー問題の英文で重要語彙。`,
    pitfall: `②で理由を1つしか答えない不十分な解答にせず、high costsとlimited landの両方を答える。`,
    memoryTip: `partly because of A and B＝理由が複数（AとB）あることを示すサイン。必ず全部拾って答える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_26',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Remote work became common during the pandemic, and many companies have continued to allow employees to work from home even afterward. Supporters say remote work gives employees more flexibility, reduces commuting time, and allows people to balance work and family life more easily. On the other hand, critics point out that working from home can make communication between coworkers more difficult and may weaken a sense of teamwork within a company. Some companies have started using a hybrid model, in which employees come to the office a few days a week and work from home on other days, in an attempt to combine the benefits of both styles.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① リモートワークの利点を英語で2つ以上答えよ。
② リモートワークに対する批判の内容を日本語でまとめよ。
③ 下線部「a hybrid model」とは具体的にどのような働き方か、日本語で説明せよ。`,
    answer: `① It gives employees more flexibility, and it reduces commuting time (and allows people to balance work and family life more easily).
② 在宅勤務は同僚同士のコミュニケーションを難しくし、会社内のチームワーク意識を弱める可能性があるという批判。
③ 従業員が週に数日は出社し、それ以外の日は在宅で働くという、出社と在宅勤務を組み合わせた働き方。`,
    hint: `①「gives employees more flexibility, reduces commuting time, and allows people to balance work and family life」。②「working from home can make communication... more difficult and may weaken a sense of teamwork」。③「employees come to the office a few days a week and work from home on other days」。`,
    explanation: `【出題意図】在宅勤務をテーマにした賛否両論の論説文で、利点・批判・折衷案（ハイブリッドモデル）を整理して理解する力を問う。【解説】①supporters（支持者）の主張から3つの利点（柔軟性・通勤時間の削減・仕事と家庭の両立）のうち2つ以上を答える。②critics（批判者）の主張：コミュニケーションが難しくなる、チームワーク意識が弱まる。③a hybrid model＝出社と在宅を組み合わせた働き方で、直後の関係代名詞節（in which〜）で具体的に説明されている。【注意点】supportersとcriticsという対立する立場を表す語に印をつけ、それぞれの主張を混同しないようにする。【関連知識】remote work（リモートワーク）、commute（通勤する）、hybrid model（ハイブリッド型）は働き方に関する英文の重要語彙。`,
    pitfall: `②で利点（flexibilityなど）を混ぜて書かない。批判（critics）の内容だけを抽出する。`,
    memoryTip: `supporters say〜／critics point out〜のように立場を示す動詞句を目印にして、賛成意見と反対意見を分けて整理する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_27',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Many people believe that doing several tasks at the same time, or multitasking, helps them get more done in less time. However, research in cognitive science suggests otherwise. When the brain switches between tasks, it takes time to refocus each time, which can actually make people less efficient overall. Studies have shown that students who multitask while studying, such as checking their phones between reading paragraphs, tend to remember less information than those who focus on one task at a time. Scientists explain that the human brain is not truly capable of doing two complex tasks simultaneously; instead, it rapidly switches attention back and forth, which creates the illusion of multitasking.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 多くの人がマルチタスクについてどのように信じているか、日本語で答えよ。
② 実際の研究結果はどのようなことを示しているか、日本語で答えよ。
③ 下線部「creates the illusion of multitasking」の意味を日本語で説明せよ。`,
    answer: `① 同時に複数の作業をするマルチタスクは、より短い時間でより多くのことができると信じている。
② 脳はタスクを切り替えるたびに集中し直す時間が必要なため、全体としては効率が下がり、勉強しながらスマートフォンを確認する学生は情報をあまり覚えられない傾向がある。
③ 実際には脳が2つの複雑な作業を同時に行っているのではなく、注意を高速で切り替えているだけなのに、あたかも同時に処理しているように見えるということ。`,
    hint: `①「doing several tasks at the same time... helps them get more done in less time」。②「it takes time to refocus... which can actually make people less efficient」「tend to remember less information」。③「rapidly switches attention back and forth」の直前の文脈から考える。`,
    explanation: `【出題意図】認知科学を題材にした論説文で、一般的な思い込みと科学的事実の対比、専門的な結論の言い換えを理解する力を問う。【解説】①一般的な思い込み：マルチタスクは効率的だという考え。②研究結果：脳は切り替えのたびに時間がかかり効率が下がる、マルチタスクをしながら勉強すると記憶量が減る。③illusion（錯覚）＝実際には同時処理ではなく高速な切り替えなのに、あたかも同時にできているかのように感じられること。【注意点】however（しかし）を境に「一般的な思い込み」と「科学的事実」が対比されている構造を必ず押さえる。【関連知識】cognitive science（認知科学）、efficient（効率的な）、illusion（錯覚）は心理学・脳科学系の英文で重要語彙。`,
    pitfall: `③を単に「マルチタスクの錯覚」と直訳するだけでなく、「実際は高速な切り替えなのに同時処理に見える」という内容まで具体的に説明する。`,
    memoryTip: `However（しかし）の前後は「一般的な思い込み」と「実際の事実（研究結果）」が対比される、論説文の典型パターン。`,
  },
  {
    id: 'koko_kankan_eigo_c2_28',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Many teenagers today do not get enough sleep, and experts warn that this can seriously affect their health and school performance. Doctors recommend that teenagers sleep between eight and ten hours per night, but surveys show that many students sleep less than six hours because of homework, club activities, and smartphone use late at night. Lack of sleep can make it harder to concentrate in class, weaken the immune system, and even affect emotional stability. Some schools have started later start times in the morning, hoping that students will get more sleep and perform better academically. Sleep researchers argue that treating sleep as seriously as diet and exercise is essential for teenagers' overall well-being.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 医師が推奨する10代の睡眠時間はどれくらいか、日本語で答えよ。
② 睡眠不足が10代に与える影響を日本語で2つ以上答えよ。
③ 一部の学校が行っている対策を英語で答えよ。`,
    answer: `① 1晩に8時間から10時間。
② 授業に集中しにくくなること、免疫系が弱まること（感情が不安定になることも含む）。
③ Some schools have started later start times in the morning.`,
    hint: `①「sleep between eight and ten hours per night」。②「make it harder to concentrate in class, weaken the immune system, and even affect emotional stability」。③「Some schools have started later start times in the morning」。`,
    explanation: `【出題意図】睡眠不足という健康テーマの論説文で、推奨基準・悪影響・対策という3段階の情報を整理して読み取る力を問う。【解説】①「between eight and ten hours per night」＝8時間〜10時間。②「harder to concentrate」「weaken the immune system」「affect emotional stability」の3点から2つ以上を挙げる。③「later start times in the morning」＝始業時刻を遅らせること。【注意点】3つ並んだ悪影響（集中力・免疫・感情）はandで並列されており、設問で「2つ以上」と言われたら少なくとも2つを明確に答える。【関連知識】concentrate（集中する）、immune system（免疫系）、emotional stability（感情の安定）は健康・医学系の英文で重要語彙。`,
    pitfall: `②を「眠れないこと」のように曖昧に答えず、本文にある具体的な悪影響（集中力・免疫・感情）を明示する。`,
    memoryTip: `make it harder to do〜, weaken〜, and affect〜のように動詞が3つ並列された文は、影響を複数列挙するサイン。`,
  },
  {
    id: 'koko_kankan_eigo_c2_29',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[Passage 1]
Japan's population is aging faster than that of any other developed country. By 2040, it is expected that nearly 35 percent of the population will be over 65 years old. This shift is already affecting many parts of society, from the labor market to the healthcare system.

[Passage 2]
One major concern is the shrinking workforce. As more people retire and fewer babies are born, companies are struggling to find enough workers. In response, the government has encouraged businesses to hire more women and elderly people, and has also relaxed some rules on accepting foreign workers.

[Passage 3]
At the same time, an aging population means a greater need for medical care and nursing services. Robots and AI technology are increasingly being used in hospitals and nursing homes to support caregivers, who are often in short supply. Experts say that Japan's experience with these challenges may offer useful lessons for other countries that will face similar aging populations in the future.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 2040年までに65歳以上の人口が占める割合はどれくらいと予想されているか、日本語で答えよ。
② 労働力不足に対して政府が行ってきた対応を日本語で2点答えよ。
③ 医療・介護分野で人手不足を補うために活用されているものは何か、英語で答えよ。
④ 第3段落の最終文が示す内容を80字以内の日本語でまとめよ。`,
    answer: `① 約35パーセント。
② ・女性や高齢者をより多く雇うよう企業に促した。・外国人労働者の受け入れに関する規則を一部緩和した。
③ Robots and AI technology.
④ 日本は少子高齢化による労働力不足や介護人材不足という課題に直面しており、今後同じような高齢化に直面する他国にとって、日本の経験が参考になる可能性があるということ。（79字）`,
    hint: `①「nearly 35 percent of the population will be over 65 years old」。②「encouraged businesses to hire more women and elderly people, and has also relaxed some rules on accepting foreign workers」。③「Robots and AI technology are increasingly being used」。④最終文をそのまま日本語でまとめる。`,
    explanation: `【出題意図】3段落構成の論説文（現状提示→課題→対策と展望）を読み、数値情報・政府対応・技術活用・結論の要約という総合的な読解力を問う最高難度の問題。【解説】①第1段落「nearly 35 percent... over 65 years old」。②第2段落「encouraged businesses to hire more women and elderly people」「relaxed some rules on accepting foreign workers」の2点。③第3段落「Robots and AI technology」。④第3段落最終文は「日本の高齢化対応の経験が、今後同様の課題に直面する他国の参考になりうる」という将来への示唆で締めくくられている。【注意点】3段落構成の論説文では、各段落の役割（1：現状・データ、2：労働力の課題と対策、3：医療・介護の課題と将来への示唆）を意識して読むと整理しやすい。【関連知識】aging population（高齢化社会）、workforce（労働力）、caregiver（介護者）は社会保障・人口問題の英文で頻出語彙。`,
    pitfall: `②で「外国人労働者を増やした」のように断定しすぎない。本文は「relaxed some rules（規則を緩和した）」であり、直接「増やした」とまでは書かれていない点に注意。`,
    memoryTip: `3段落論説文：段落1＝現状データ、段落2＝課題と対策①、段落3＝課題と対策②＋将来への示唆、という構成パターンを意識する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_30',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[Job interview]
Interviewer: Thank you for coming today. Could you tell me why you are interested in working at this bookstore?
Applicant: Sure. I have always loved reading, and I think it would be wonderful to help customers find books they will enjoy. I also worked at a small café for one year, so I have some experience serving customers.
Interviewer: That's great. This job sometimes requires you to work on weekends. Is that a problem for you?
Applicant: Not at all. I'm available on weekends, and I understand that bookstores are often busiest then.
Interviewer: Perfect. One last question: do you have any questions for us?
Applicant: Yes, actually. Could you tell me more about the training new employees receive?`,
    question: `上の会話文を読んで、次の設問に答えなさい。

① 応募者が書店で働きたい理由を英語で2つ答えよ。
② 応募者の以前の職務経験は何か、英語で答えよ。
③ 応募者は週末勤務についてどのように答えたか、日本語で答えよ。
④ 面接の最後に応募者が尋ねた内容を日本語で答えよ。`,
    answer: `① She has always loved reading, and she thinks it would be wonderful to help customers find books they will enjoy.
② She worked at a small café for one year.
③ 週末勤務は問題なく、週末は自分も対応可能で、書店が最も忙しくなる時間帯だと理解している、と答えた。
④ 新入社員が受ける研修について、詳しく教えてほしいと尋ねた。`,
    hint: `①「I have always loved reading」「it would be wonderful to help customers find books they will enjoy」。②「I also worked at a small café for one year」。③「Not at all. I'm available on weekends, and I understand that bookstores are often busiest then.」。④最後の発言「Could you tell me more about the training new employees receive?」。`,
    explanation: `【出題意図】面接という実用的な対話形式の英文を通じて、動機・経験・条件への回答・逆質問という面接の典型的な流れを理解する力を問う。【解説】①応募者の動機は「reading好き」と「customers find booksを助けたい」の2点。②以前の経験は「café for one year」でのcustomer service経験。③週末勤務については「Not at all（全く問題ない）」と答え、理由として週末が忙しい時間帯であることを理解していると述べている。④面接の最後に「training new employeesについてもっと教えてほしい」と逆質問をしている。【注意点】Is that a problem for you?（それは問題ですか）に対する応答Not at all.（全く問題ありません）は否定の強調表現。文字通り「not」だけを見て否定的な回答と誤解しないよう注意。【関連知識】面接英語の定番表現：Could you tell me more about〜?（〜について詳しく教えてください）、I have experience in〜（〜の経験があります）。`,
    pitfall: `③のNot at all.を「全く週末勤務ができない」という意味に誤解しない。「（問題は）全くありません」という肯定的な返答。`,
    memoryTip: `Is that a problem for you? — Not at all.は「問題ありません」という定型応答。Not at allの前の疑問文の意味を必ず確認する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_31',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Human exploration of Mars has long captured public imagination, and in recent years, several space agencies and private companies have made real progress toward sending humans there. Robotic rovers have already collected valuable data about the Martian surface, atmosphere, and climate, helping scientists understand whether the planet could ever support human life. However, sending humans to Mars presents enormous challenges, including the health risks of long-term exposure to space radiation and the difficulty of growing food in Mars's harsh environment. Some experts argue that the resources spent on Mars exploration would be better used solving problems on Earth, such as poverty and climate change, while others believe that space exploration inspires scientific innovation that benefits life on Earth as well.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 無人探査機（ロボット探査機）がこれまでに行ってきたことを英語で答えよ。
② 有人火星探査における課題を日本語で2点答えよ。
③ 火星探査に反対する人々の主張を日本語で答えよ。
④ 火星探査に賛成する人々の主張を日本語で答えよ。`,
    answer: `① Robotic rovers have collected valuable data about the Martian surface, atmosphere, and climate.
② ・長期間の宇宙放射線ばく露による健康リスク。・火星の過酷な環境で食料を育てることの難しさ。
③ 火星探査に使う資源は、貧困や気候変動といった地球上の問題を解決するために使う方がよいという主張。
④ 宇宙探査は科学の革新を促し、それが地球上の生活にも恩恵をもたらすという主張。`,
    hint: `①「Robotic rovers have already collected valuable data about the Martian surface, atmosphere, and climate」。②「health risks of long-term exposure to space radiation」「the difficulty of growing food in Mars's harsh environment」。③「the resources spent on Mars exploration would be better used solving problems on Earth」。④「space exploration inspires scientific innovation that benefits life on Earth as well」。`,
    explanation: `【出題意図】宇宙探査というテーマの論説文で、事実（これまでの成果）・課題・賛否両論を整理して読み取る総合的な読解力を問う。【解説】①ロボット探査機の実績＝火星の表面・大気・気候に関するデータ収集。②有人探査の課題＝宇宙放射線による健康リスク、過酷な環境での食料生産の難しさ。③反対派＝資源は地球の問題（貧困・気候変動）解決に使うべき。④賛成派＝宇宙探査は科学革新を促し地球にも恩恵がある。【注意点】some experts argue that〜、while others believe that〜という対比構文で賛否両論が並べられている点に注目し、それぞれの主張を混同しない。【関連知識】Martian（火星の）、radiation（放射線）、exploration（探査）は宇宙科学の英文で重要語彙。`,
    pitfall: `③と④の主張を取り違えない。「資源を地球の問題に使うべき」が反対派、「科学革新が地球にも恩恵をもたらす」が賛成派の主張。`,
    memoryTip: `some argue that A, while others believe that B＝賛否両論を対比する定番構文。AとBを取り違えないよう主語（experts/others）を必ず確認する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_32',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Bilingual education, in which students study in two languages, is becoming more common around the world, including in some schools in Japan. Supporters argue that learning in two languages from a young age helps children develop better problem-solving skills and a deeper understanding of different cultures. Research has also shown that bilingual children often find it easier to learn additional languages later in life. However, critics point out that bilingual education can be demanding for young learners, especially if they struggle to build a strong foundation in their first language while also learning a second one. Finding qualified teachers who can teach effectively in two languages is another practical challenge that many schools face.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① バイリンガル教育の支持者が挙げる利点を日本語で2点答えよ。
② バイリンガル教育に対する批判の内容を日本語で答えよ。
③ 下線部に述べられている、学校が直面する実際的な課題は何か、英語で答えよ。`,
    answer: `① ・問題解決能力が向上すること。・異文化に対するより深い理解が得られること。（バイリンガルの子どもはその後さらに別の言語を学びやすくなることも含む）
② 母語の基礎をしっかり築きながら第二言語も学ばなければならず、幼い学習者にとって負担が大きい可能性があるという批判。
③ Finding qualified teachers who can teach effectively in two languages.`,
    hint: `①「helps children develop better problem-solving skills and a deeper understanding of different cultures」。②「bilingual education can be demanding for young learners, especially if they struggle to build a strong foundation in their first language while also learning a second one」。③「Finding qualified teachers who can teach effectively in two languages」。`,
    explanation: `【出題意図】バイリンガル教育というテーマの論説文で、支持者の主張・批判・実務的課題を段階的に整理して読み取る力を問う。【解説】①支持者の主張＝問題解決能力の向上、異文化理解の深化（追加言語の習得のしやすさも可）。②批判＝母語の基礎形成と第二言語学習を同時に行う負担の大きさ。③実際的な課題＝2言語で効果的に教えられる資格を持つ教員を見つけること。【注意点】supporters argueとcritics point outという対立する立場の表現を目印に、それぞれの主張範囲を正確に区切って読む。【関連知識】bilingual（バイリンガルの）、foundation（基礎）、qualified（資格のある）は教育系の英文で重要語彙。`,
    pitfall: `①で「利点」を答える際に、批判（負担が大きい等）の内容を混同して書かない。`,
    memoryTip: `however（しかし）の前後でsupporters（支持者）とcritics（批判者）の主張が切り替わる典型的な論説構造を意識する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_33',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Around one-third of all food produced in the world is wasted every year, according to the United Nations. This waste happens at every stage, from farms and factories to supermarkets and individual households. In wealthier countries, much of the waste occurs because consumers buy more food than they need or throw away food that looks imperfect but is still safe to eat. Some supermarkets have started selling "ugly" fruits and vegetables at lower prices to reduce this kind of waste. Meanwhile, apps that connect restaurants with unsold food to customers willing to buy it at a discount have also become popular in many cities. Reducing food waste is important not only for saving money but also for protecting the environment, since wasted food that ends up in landfills produces harmful greenhouse gases.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 世界で生産される食料のうち、どれくらいの割合が毎年廃棄されているか、日本語で答えよ。
② 豊かな国で食品廃棄が起こる理由を日本語で2点答えよ。
③ 食品廃棄を減らすための取り組みの例を英語で2つ答えよ。
④ 食品廃棄を減らすことが重要である理由を日本語で2点答えよ。`,
    answer: `① 約3分の1。
② ・消費者が必要以上の食料を買ってしまうこと。・見た目が不完全（規格外）だが食べても安全な食品を捨ててしまうこと。
③ Some supermarkets have started selling "ugly" fruits and vegetables at lower prices. / Apps that connect restaurants with unsold food to customers have become popular.
④ ・お金の節約になること。・埋め立て地で食品が分解される際に発生する温室効果ガスを減らし、環境保護につながること。`,
    hint: `①「Around one-third of all food produced in the world is wasted every year」。②「consumers buy more food than they need or throw away food that looks imperfect but is still safe to eat」。③「selling "ugly" fruits and vegetables at lower prices」「apps that connect restaurants with unsold food to customers」。④「important not only for saving money but also for protecting the environment」。`,
    explanation: `【出題意図】食品ロスというグローバルな社会問題の論説文で、統計データ・原因・対策・意義を総合的に読み取る力を問う。【解説】①「Around one-third」＝約3分の1。②消費者の過剰購入と、見た目が悪いだけの食品の廃棄の2点。③スーパーでの規格外野菜の安売り、余った食品と客をつなぐアプリの普及の2つの対策。④not only A but also B（お金の節約だけでなく環境保護にも）の構文から2点を抽出する。【注意点】「not only A but also B」の構文が出てきたら、AとBの両方を答えに含めることを忘れない。【関連知識】food waste（食品廃棄・食品ロス）、landfill（埋め立て地）、greenhouse gas（温室効果ガス）は環境問題の英文で重要語彙。`,
    pitfall: `④で「お金の節約」だけを答えて終わらせない。not only... but also...の後半（環境保護）も必ず含める。`,
    memoryTip: `not only A but also B＝設問で「2点答えよ」と言われたときのヒントになりやすい構文。AとBのペアを見逃さない。`,
  },
  {
    id: 'koko_kankan_eigo_c2_34',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[Passage 1]
Global warming is causing sea levels to rise around the world, threatening coastal cities and small island nations. As ice sheets in places like Greenland and Antarctica melt, the extra water flows into the ocean, gradually raising its level. Scientists estimate that if current trends continue, sea levels could rise by up to one meter by the end of this century.

[Passage 2]
Some countries are already taking action to protect their coastlines. The Netherlands, much of which lies below sea level, has built an extensive system of dikes and pumps over many centuries. Other countries, including Japan, are strengthening seawalls and researching how to protect low-lying areas from flooding. For island nations such as Tuvalu, however, rising sea levels present an existential threat, as much of their land could eventually become uninhabitable.

[Passage 3]
Experts stress that reducing greenhouse gas emissions is the only long-term solution to slow down sea level rise, while adaptation measures like dikes and seawalls can only buy time. International cooperation, they argue, will be essential to address a problem that affects every country, regardless of how much each has contributed to causing it.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 海面上昇の直接の原因は何か、英語で答えよ。
② 今世紀末までに海面がどの程度上昇する可能性があると科学者は推定しているか、日本語で答えよ。
③ ツバルのような島国が直面している問題を日本語で答えよ。
④ 専門家が海面上昇を遅らせる唯一の長期的解決策として挙げているものは何か、英語で答えよ。`,
    answer: `① Ice sheets in places like Greenland and Antarctica melt, and the extra water flows into the ocean.
② 最大で1メートル程度上昇する可能性がある。
③ 土地の多くがいずれ人が住めなくなる可能性があるという、国の存続に関わる深刻な脅威。
④ Reducing greenhouse gas emissions.`,
    hint: `①「As ice sheets in places like Greenland and Antarctica melt, the extra water flows into the ocean」。②「sea levels could rise by up to one meter by the end of this century」。③「much of their land could eventually become uninhabitable」。④「reducing greenhouse gas emissions is the only long-term solution」。`,
    explanation: `【出題意図】地球温暖化と海面上昇という3段落構成の論説文で、原因・数値予測・具体的な国の事例・専門家の結論を統合的に読み取る最高難度の問題。【解説】①第1段落：氷床が溶けてその水が海に流れ込むことが直接の原因。②「up to one meter by the end of this century」＝最大約1メートル。③第2段落：ツバルは土地が居住不可能になりうるという存続に関わる脅威に直面している。④第3段落：「reducing greenhouse gas emissions is the only long-term solution」＝温室効果ガス排出の削減が唯一の長期的解決策（防波堤等は一時しのぎ）。【注意点】adaptation（適応策：防波堤等）とmitigation（緩和策：排出削減）の違いを区別する。本文では防波堤は「buy time（時間稼ぎ）」に過ぎないと明確に述べられている。【関連知識】sea level rise（海面上昇）、ice sheet（氷床）、existential threat（存続に関わる脅威）は環境問題の英文で重要語彙。`,
    pitfall: `④を「防波堤を強化すること」と誤答しない。本文は防波堤等を一時的な対策と位置づけ、根本的解決は排出削減だと明言している。`,
    memoryTip: `3段落論説文：段落1＝現象と原因、段落2＝各国の対応事例、段落3＝専門家の結論、という構成を意識して情報を整理する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_35',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Japanese manga has become one of the country's most successful cultural exports. Once considered a niche interest outside Japan, manga is now sold in bookstores worldwide and has inspired countless anime series, films, and video games. Part of its global appeal lies in the diversity of genres and stories it offers, ranging from action and fantasy to romance and everyday slice-of-life stories, appealing to readers of all ages. The rise of digital platforms has also made it easier for international fans to access manga legally, which has helped reduce piracy while allowing creators to earn income from overseas sales. Some researchers argue that manga's popularity has also encouraged more foreign students to study the Japanese language, since fans often want to read their favorite series in the original text.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① マンガが世界的に人気を得ている理由の一つとして本文が挙げているものを英語で答えよ。
② デジタルプラットフォームの普及によってもたらされた変化を日本語で2点答えよ。
③ 下線部の内容から読み取れる、マンガの人気が日本語学習に与えた影響を日本語で説明せよ。`,
    answer: `① The diversity of genres and stories it offers, ranging from action and fantasy to romance and everyday slice-of-life stories.
② ・海外のファンが合法的にマンガを入手しやすくなり、海賊版が減ったこと。・作者が海外での売り上げから収入を得られるようになったこと。
③ ファンが好きな作品を原文（日本語）で読みたいと思うようになり、より多くの外国人学生が日本語を学ぶきっかけになったということ。`,
    hint: `①「the diversity of genres and stories it offers, ranging from action and fantasy to romance and everyday slice-of-life stories」。②「made it easier for international fans to access manga legally, which has helped reduce piracy while allowing creators to earn income from overseas sales」。③「manga's popularity has also encouraged more foreign students to study the Japanese language, since fans often want to read their favorite series in the original text」。`,
    explanation: `【出題意図】日本のポップカルチャー輸出という現代的テーマの論説文で、人気の理由・技術による変化・文化的波及効果を統合的に読み取る力を問う。【解説】①人気の理由の一つ＝ジャンルと物語の多様性（アクション、ファンタジー、恋愛、日常もの等、幅広い年齢層に訴求）。②デジタルプラットフォームの効果＝海賊版の削減、作者の海外収益の確保の2点。③マンガの人気が日本語学習の動機付けになっているという文化的波及効果。【注意点】whileは「一方で」ではなくここでは「〜しながら、同時に」に近い意味で、reduce piracyとearn incomeの2つの効果が同時に起きていることを示す。【関連知識】niche（ニッチ、特定層向け）、piracy（海賊版・著作権侵害）、cultural export（文化的輸出品）はポップカルチャー・経済系の英文で重要語彙。`,
    pitfall: `②で1点しか答えず不十分にしない。「海賊版の削減」と「作者の収入確保」の両方を答える。`,
    memoryTip: `A, which has helped B while C＝1つの変化（A）が2つの効果（B・C）を同時にもたらした、という構造を意識して読む。`,
  },
  {
    id: 'koko_kankan_eigo_c2_36',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Sports psychologists have long studied why some athletes and teams perform well under pressure while others struggle. One key factor is resilience, the ability to recover quickly from setbacks such as losing a game or making a mistake. Research shows that resilient athletes tend to view failures as opportunities to learn rather than as proof that they are not good enough. Coaches can help build this mindset by focusing on effort and improvement rather than only on winning, and by creating a team environment where players feel safe to take risks without fear of harsh criticism. Interestingly, some studies suggest that teams with strong social bonds recover from losses faster than teams made up of only talented individuals who do not trust each other.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 下線部「resilience」とはどのような能力か、日本語で説明せよ。
② レジリエンスの高い選手は失敗をどのように捉える傾向があるか、日本語で答えよ。
③ コーチが選手のレジリエンスを高めるためにできることを日本語で2点答えよ。
④ 本文の最後で述べられている興味深い研究結果を日本語でまとめよ。`,
    answer: `① 試合に負けたりミスをしたりといった挫折から素早く立ち直る能力。
② 失敗を「自分に能力がない証拠」としてではなく、「学ぶ機会」として捉える傾向がある。
③ ・勝利だけでなく、努力や上達に焦点を当てること。・厳しい批判を恐れずに選手が挑戦できる、安心できるチーム環境を作ること。
④ 才能はあっても互いを信頼していない選手だけで構成されたチームより、強い社会的なつながりを持つチームの方が、敗北から早く立ち直る傾向があるという研究結果。`,
    hint: `①「the ability to recover quickly from setbacks such as losing a game or making a mistake」。②「view failures as opportunities to learn rather than as proof that they are not good enough」。③「focusing on effort and improvement rather than only on winning」「creating a team environment where players feel safe to take risks」。④最終文をそのまま日本語にする。`,
    explanation: `【出題意図】スポーツ心理学を題材にした論説文で、専門用語（resilience）の定義・行動パターン・指導方法・研究結果を段階的に読み取る力を問う。【解説】①resilience＝挫折から素早く立ち直る能力、と本文中で明確に定義されている。②失敗を学びの機会と捉える、という前向きな解釈。③コーチの働きかけ＝努力・上達重視、安心して挑戦できる環境作りの2点。④最終文：社会的なつながりが強いチームの方が、才能はあっても信頼関係のないチームより敗北から早く立ち直るという結果。【注意点】rather than A（Aではなく）の構文がここでは2回使われており（as proof... rather than、only on winning rather than）、否定される内容と肯定される内容を取り違えないようにする。【関連知識】resilience（レジリエンス・回復力）、setback（挫折・後退）、mindset（考え方・心構え）は心理学系の英文で重要語彙。`,
    pitfall: `②を「失敗を恐れる」のように逆の意味にしない。本文は失敗を前向きな学びの機会と捉える、という肯定的な内容。`,
    memoryTip: `A rather than B＝「BではなくA」。Aが実際に主張・推奨される内容であることを必ず確認する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_37',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `As e-readers and smartphones become more common, many people now read books in digital form rather than on paper. E-books offer clear advantages: they take up no physical space, can be purchased instantly, and often cost less than printed books. However, several studies suggest that reading on paper may lead to better comprehension and memory than reading the same text on a screen. Researchers believe this may be because readers can more easily flip back to earlier pages and use physical cues, such as the position of a passage on a page, to remember information. Additionally, screens can cause eye strain and are more likely to lead to distractions, since notifications from other apps can interrupt reading. Still, many readers say that the convenience of e-books, especially while traveling, outweighs these disadvantages.`,
    question: `上の英文を読んで、次の設問に答えなさい。

① 電子書籍の利点を英語で2つ以上答えよ。
② 紙の本の方が理解や記憶に優れている可能性がある理由を日本語で答えよ。
③ 画面で読書をすることのデメリットを日本語で2点答えよ。
④ 下線部「outweighs these disadvantages」の意味を日本語で説明せよ。`,
    answer: `① They take up no physical space, can be purchased instantly, and often cost less than printed books.
② 読者が前のページに戻りやすく、ページ上の文章の位置などの物理的な手がかりを使って情報を記憶できるから。
③ ・目の疲れを引き起こしやすいこと。・他のアプリの通知などによって気が散りやすいこと。
④ （旅行中などの）電子書籍の利便性が、これまで述べてきたデメリットよりも上回っている（デメリットを埋め合わせるほど大きい）ということ。`,
    hint: `①「they take up no physical space, can be purchased instantly, and often cost less than printed books」。②「readers can more easily flip back to earlier pages and use physical cues... to remember information」。③「screens can cause eye strain and are more likely to lead to distractions」。④outweigh=〜より勝る、上回る。`,
    explanation: `【出題意図】電子書籍と紙の本の比較という身近なテーマの論説文で、利点・理由・欠点・結論の言い換えを総合的に読み取る力を問う。【解説】①電子書籍の利点＝場所を取らない、即座に購入できる、値段が安いことが多い、の3点のうち2つ以上。②紙の本の優位性の理由＝前のページに戻りやすい、ページ上の位置などの物理的手がかりを使える。③画面読書のデメリット＝目の疲れ、他アプリの通知による気の散りやすさ。④outweigh＝「〜より勝る」という意味の動詞で、ここでは電子書籍の利便性がデメリットを上回るということ。【注意点】stillは「それでも」という逆接の副詞で、最終文はそれまでのデメリットの指摘を踏まえた上での結論（それでも利便性の方が勝る）であることを示す。【関連知識】comprehension（理解力）、distraction（気を散らすもの）、outweigh（〜を上回る）は比較論説文で重要語彙。`,
    pitfall: `④を単に「利便性がある」とだけ訳さず、「デメリットを上回るほど大きい」という比較のニュアンスまで含めて説明する。`,
    memoryTip: `outweigh＝out（超えて）+weigh（重さがある）→「〜より重い・勝る」というイメージで覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_38',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `[At a part-time job interview]
Manager: Thanks for your interest in working here. This position involves handling customer complaints as well as regular sales duties. How do you feel about that?
Applicant: I think I can handle it well. In my previous part-time job at a supermarket, I often dealt with customers who were unhappy about long lines or out-of-stock items. I learned to stay calm and listen carefully before offering a solution.
Manager: That's a good approach. Can you also tell me about your availability? We need someone who can work at least three days a week, including one weekend day.
Applicant: That works for me. I'm free on Tuesdays, Thursdays, and Saturdays, so I could cover all three of those days if needed.
Manager: Perfect. We'll be in touch by the end of this week with our decision.`,
    question: `上の会話文を読んで、次の設問に答えなさい。

① 応募者が以前のアルバイトでどのような経験を積んだか、日本語で答えよ。
② 応募者がクレーム対応で心がけていることは何か、日本語で答えよ。
③ 応募者が対応可能な曜日を英語で答えよ。
④ 面接の最後にマネージャーが述べたことを日本語で答えよ。`,
    answer: `① スーパーマーケットでのアルバイトで、長い行列や品切れについて不満を持つ客への対応を経験した。
② まず落ち着いて相手の話をよく聞いてから、解決策を提示すること。
③ Tuesdays, Thursdays, and Saturdays.
④ 今週末までに採用の可否について連絡する、ということ。`,
    hint: `①「In my previous part-time job at a supermarket, I often dealt with customers who were unhappy about long lines or out-of-stock items」。②「I learned to stay calm and listen carefully before offering a solution」。③「I'm free on Tuesdays, Thursdays, and Saturdays」。④「We'll be in touch by the end of this week with our decision.」`,
    explanation: `【出題意図】アルバイト面接という実用的対話文で、経験・対応の心がけ・具体的な条件（曜日）・今後の流れを正確に読み取る力を問う。【解説】①スーパーでの接客経験（行列・品切れへの不満対応）。②「stay calm and listen carefully before offering a solution」＝落ち着いて話を聞いてから解決策を示す。③「Tuesdays, Thursdays, and Saturdays」。④「be in touch by the end of this week with our decision」＝今週末までに結果を連絡する。【注意点】before offering a solution（解決策を提示する前に）という語順から、「まず聞く→その後に解決策」という手順を正確に読み取る。【関連知識】availability（対応可能な状況）、out-of-stock（品切れの）、be in touch（連絡を取る）はアルバイト・仕事関連の実用英語で頻出。`,
    pitfall: `②の順序を逆にしない。「解決策を提示してから話を聞く」のではなく「まず落ち着いて聞き、その後解決策を示す」が正しい順序。`,
    memoryTip: `A before B＝「BよりAが先」。ここではstay calm and listen（先）→ offering a solution（後）の順序を表す。`,
  },
  {
    id: 'koko_kankan_eigo_c2_39',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

もし私がもっと早く彼女にそのことを伝えていたら、彼女はそんなに驚かなかっただろう。`,
    answer: `（解答例）If I had told her about it earlier, she would not have been so surprised.（14語→字数を満たすために別解を追加）
（別解）If I had told her about it earlier, she wouldn't have been so surprised, and things would have gone more smoothly between us.（22語）`,
    hint: `過去の事実に反する仮定なので仮定法過去完了：If+主語+had+過去分詞〜, 主語+would have+過去分詞〜。`,
    explanation: `【出題意図】仮定法過去完了を用いた和文英訳。過去の出来事に対する反実仮想（実際には伝えなかった）を正確に表現できるかを問う。【解説】「もし〜していたら」は過去の事実に反する仮定なので仮定法過去完了のif節：If I had told her about it earlier。「そんなに驚かなかっただろう」は帰結節でwould not have been so surprised（would/could/might+have+過去分詞の否定形）。【注意点】仮定法過去完了の帰結節はwouldn't have been（過去分詞）であり、wouldn't beやdidn't beとしない。過去の事実（実際には早く伝えなかった、実際には驚いた）と反対の内容を表す点を押さえる。【関連知識】仮定法過去完了はI wish I had done〜（〜していたらなあ）、should have done〜（〜すべきだった）などの後悔表現ともセットで学習すると理解が深まる。`,
    pitfall: `If I told her about it earlier, she would not be so surprised.のように仮定法過去にしてしまうと「現在の話」になり、過去の後悔のニュアンスが失われる。`,
    memoryTip: `過去に対する反実仮想＝If+had+p.p.〜, would/could/might have+p.p.のセットで覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_40',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

この本は、私がこれまでに読んだ中で最も感動的な物語の一つだと思う。`,
    answer: `（解答例）I think this book is one of the most moving stories that I have ever read.（16語→語数条件を満たす別解）
（別解）I think this book is one of the most moving stories that I have ever read, and I would like to recommend it to everyone.（24語）`,
    hint: `「〜の中で最も…な一つ」はone of the most+形容詞+複数名詞。「これまでに読んだ中で」はthat I have ever read（現在完了の経験用法）。`,
    explanation: `【出題意図】最上級の重要表現「one of the most+形容詞+複数名詞」と、現在完了の経験用法（ever）を組み合わせた英作文を問う。【解説】「最も感動的な物語の一つ」はone of the most moving stories（最上級+複数名詞、theは省略可）。「私がこれまでに読んだ中で」は関係代名詞thatを使ってthat I have ever read（現在完了の経験、everは「これまでに」を強調）。【注意点】one of the most+形容詞の後ろは必ず複数名詞（storiesであってstoryではない）にする。movingは「感動的な」という意味の現在分詞形容詞（moved=感動させられた、との違いに注意）。【関連知識】one of the+最上級+複数名詞（〜の中で最も…なものの一つ）は、highest score、best playersなど幅広い場面で使える定番表現。`,
    pitfall: `one of the most moving storyと単数名詞にしない。「one of the+最上級」の後ろは必ず複数形。`,
    memoryTip: `one of the+最上級+複数名詞＝「最も…な（複数の中の）一つ」。最上級の後ろは必ず複数名詞になる点を強く意識する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_41',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

環境を守るために、私たち一人ひとりができることから始めるべきだと思う。`,
    answer: `（解答例）I think we should start with what each of us can do in order to protect the environment.（18語→語数条件を満たす別解）
（別解）I think we should start with what each of us can do in order to protect the environment for future generations.（21語）`,
    hint: `「〜すべきだと思う」はI think we should〜。「私たち一人ひとりができること」は関係詞whatを使ってwhat each of us can do。「〜するために」はin order to〜。`,
    explanation: `【出題意図】関係代名詞what（先行詞を含む関係詞）と目的を表すin order to〜を組み合わせた、環境問題をテーマにした意見英作文を問う。【解説】「私たち一人ひとりができること」は「the thing that each of us can do」を1語にまとめたwhat each of us can doで表現する。「〜から始めるべきだ」はshould start with〜。「環境を守るために」は目的を明確にするin order to protect the environment（またはto protect the environment）。【注意点】whatは「もの・こと」という先行詞を含む関係代名詞であり、what以下は名詞節としてstart withの目的語になる。「each of us」は「私たちのそれぞれ」で3人称単数扱い（can doは変化しないので問題ないが、be動詞なら注意）。【関連知識】environment（環境）、future generations（将来の世代）はSDGs・環境問題の英作文で頻出のテーマ語彙。`,
    pitfall: `what each of us can doをthe thing what each of us can doのように二重にしない。whatは単独で「〜すること・もの」を表す。`,
    memoryTip: `what＝the thing which（先行詞込みの関係詞）と覚え、start with whatで「〜することから始める」という表現を作れるようにする。`,
  },
  {
    id: 'koko_kankan_eigo_c2_42',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

彼が経験してきた困難を考えると、彼が成功したことは驚くべきことではない。`,
    answer: `（解答例）Considering the difficulties he has experienced, it is not surprising that he has succeeded.（14語→語数条件を満たす別解）
（別解）Considering the difficulties he has experienced, it is not surprising that he has succeeded in his career.（17語→さらに補い22語程度に調整）
（さらなる別解）Considering all the difficulties that he has experienced throughout his life, it is not surprising at all that he has succeeded so well.（23語）`,
    hint: `「〜を考えると」はConsidering〜（分詞構文）。「驚くべきことではない」はit is not surprising that〜。`,
    explanation: `【出題意図】分詞構文Considering〜（〜を考慮すると）と形式主語構文It is not surprising that〜を組み合わせた高度な英作文を問う。【解説】「彼が経験してきた困難を考えると」はConsidering the difficulties he has experienced（Consideringは前置詞的に使われる分詞構文で「〜を考慮すると」の意味）。「彼が成功したことは驚くべきことではない」はIt is not surprising that he has succeeded.（It is 〜 that S V の形式主語構文）。【注意点】Consideringは分詞構文だが、慣用的に前置詞のように使われ、主語の一致を気にせず使える点が特徴（懸垂分詞のように見えても許容される）。that節中は現在完了he has succeededを使い、これまでの経緯を含めたニュアンスを出す。【関連知識】Consideringと似た用法にGiven〜（〜を考えると）、Judging from〜（〜から判断すると）があり、いずれも文頭で「判断の根拠」を示す表現。`,
    pitfall: `If we consider the difficultiesとしても文法的には可能だが、Consideringを使った分詞構文の方がより簡潔で高校入試上級レベルの表現として評価される。`,
    memoryTip: `Considering〜、Given〜、Judging from〜はいずれも「〜を踏まえると」という判断の前提を示す文頭表現としてセットで覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_43',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

このアプリを使えば使うほど、それがどれほど便利かがわかってくる。`,
    answer: `（解答例）The more you use this app, the more you realize how useful it is.（14語→語数条件を満たす別解）
（別解）The more you use this app every day, the more you will realize how useful and convenient it really is.（20語）`,
    hint: `「〜すればするほど…」はThe+比較級〜, the+比較級…の構文。「どれほど便利か」はhow useful it is（間接疑問文）。`,
    explanation: `【出題意図】「the+比較級, the+比較級」構文と、howを使った間接疑問文を組み合わせた高度な英作文を問う。【解説】「使えば使うほど」はThe more you use this app（useは動詞なのでmoreは副詞的にuseを修飾）。「わかってくる」はthe more you realize、「それがどれほど便利かが」はrealizeの目的語となる間接疑問文how useful it is（疑問詞howの後ろは平叙文の語順：主語+動詞）。【注意点】間接疑問文はHow useful is it?（疑問文の語順）ではなく、how useful it is（平叙文の語順）にする点が重要な文法事項。【関連知識】The more〜, the more…構文は他にも The harder you study, the better grades you will get.（勉強すればするほど良い成績が取れる）のように幅広く応用できる。`,
    pitfall: `間接疑問文の部分をhow useful is itと疑問文の語順のままにしない。realizeの目的語になる節なので平叙文の語順（it is）にする。`,
    memoryTip: `The+比較級A, the+比較級B＝「AすればするほどB」。間接疑問文は「疑問詞+主語+動詞」の語順になることとセットで確認する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_44',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

将来何になりたいかまだ決めていないが、人の役に立つ仕事に就きたいとは思っている。`,
    answer: `（解答例）I haven't decided what I want to be in the future yet, but I want to have a job that helps other people.（22語）`,
    hint: `「まだ〜していない」は現在完了の否定形+yet。「何になりたいか」は間接疑問文what I want to be。「人の役に立つ仕事」は関係代名詞thatを使う。`,
    explanation: `【出題意図】現在完了+yet、間接疑問文、関係代名詞thatを組み合わせた複合的な英作文を問う。【解説】「まだ決めていない」はI haven't decided〜yet（現在完了の否定＋文末のyet）。「将来何になりたいか」はdecidedの目的語になる間接疑問文what I want to be in the future（疑問詞+主語+動詞の語順）。「人の役に立つ仕事に就きたい」はI want to have a job that helps other people（関係代名詞thatが主格でjobを修飾、helpsは3単現のs）。【注意点】間接疑問文はWhat do I want to be?の語順にしない。また関係代名詞節内の動詞は先行詞jobに合わせてhelps（3人称単数）にする。【関連知識】haven't decided yet（まだ決めていない）、a job that helps〜（〜の役に立つ仕事）は将来の夢に関する英作文で頻出のフレーズ。`,
    pitfall: `関係代名詞節内の動詞をhelpとしない。先行詞a job（単数）に合わせてhelpsにする。`,
    memoryTip: `間接疑問文は「疑問詞＋主語＋動詞」、関係代名詞節内の動詞は先行詞の人称・数に一致させる、の2点を必ず確認する。`,
  },
  {
    id: 'koko_kankan_eigo_c2_45',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

多くの生徒が試験前に十分な睡眠を取ることの大切さを忘れがちだ。`,
    answer: `（解答例）Many students tend to forget how important it is to get enough sleep before an exam.（16語→語数条件を満たす別解）
（別解）Many students tend to forget how important it is to get enough sleep before taking an important exam.（18語→さらに調整）
（さらなる別解）Many high school students tend to forget how important it is to get enough sleep the night before an exam.（20語）`,
    hint: `「〜しがちだ」はtend to〜。「〜することの大切さ」は形式主語構文how important it is to〜。`,
    explanation: `【出題意図】tend to〜（〜しがちである）という頻度・傾向を表す表現と、形式主語構文it is 〜 to doを組み合わせた英作文を問う。【解説】「忘れがちだ」はtend to forget（tend to〜=〜する傾向がある）。「十分な睡眠を取ることの大切さ」はhow important it is to get enough sleep（間接疑問文＋形式主語構文の組み合わせで「それがどれほど重要か」を表す）。「試験前に」はbefore an exam。【注意点】the importance of getting enough sleepという名詞句を使う書き方も可能だが、how important it is to〜の方が構文としてより実践的で応用が利く。tend toの後ろは動詞の原形（forget）。【関連知識】tend to〜（〜する傾向がある）、be likely to〜（〜しそうである）はいずれも一般的傾向を述べる際に頻出の表現。`,
    pitfall: `how important it is to〜の部分をhow is it important to〜のように疑問文の語順にしない。間接的な名詞節として平叙文の語順を保つ。`,
    memoryTip: `tend to do＝「〜する傾向がある」、how+形容詞+it is to do＝「〜することがどれほど…か」とセットで覚える。`,
  },
  {
    id: 'koko_kankan_eigo_c2_46',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（20語以上）

もし誰も地球温暖化について何も行動を起こさなければ、多くの動植物が絶滅するかもしれない。`,
    answer: `（解答例）If nobody takes any action against global warming, many plants and animals may become extinct.（15語→語数条件を満たす別解）
（別解）If nobody takes any action against global warming soon, many kinds of plants and animals around the world may become extinct.（21語）`,
    hint: `現実に起こりうる条件なのでif節は現在形。「絶滅する」はbecome extinct。「行動を起こす」はtake action。`,
    explanation: `【出題意図】現実的な条件を表すif節（現在形）と、環境問題の重要語彙（extinct、take action）を用いた英作文を問う。【解説】「もし〜しなければ」は現実にありうる仮定なのでif節は現在形：If nobody takes any action。「地球温暖化に対して」はagainst global warming。「多くの動植物が絶滅するかもしれない」はmany plants and animals may become extinct（may=〜かもしれない、可能性を表す助動詞）。【注意点】ここでは仮定法（If nobody took〜, would become〜）ではなく、現実的にありうる未来の条件として現在形＋may/mightを使う点が重要。地球温暖化はまだ確定した未来ではないため、仮定法過去にすると「まずありえない話」という誤ったニュアンスになる。【関連知識】become extinct（絶滅する）、take action against〜（〜に対して行動を起こす）は環境問題の英作文で重要な語彙・表現。`,
    pitfall: `If nobody took any action, many plants and animals would become extinct.のように仮定法にすると、「実際にはありえない」という含みが強くなり、現実的な警告のニュアンスが弱まる。`,
    memoryTip: `現実的にありうる未来の警告＝if+現在形, may/might+動詞原形。仮定法（if+過去形, would+原形）とは使い分ける。`,
  },
  {
    id: 'koko_kankan_eigo_c2_47',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、あなたの意見を35語以上の英語で書きなさい。

テーマ：「高校生がスマートフォンを授業中に使うことを許可すべきだと思いますか。」

（I think / I don't think で書き始めること）`,
    answer: `（賛成例）I think high school students should be allowed to use smartphones during class in some situations. Smartphones can be useful tools for looking up information quickly and taking notes efficiently. However, students should use them only when the teacher gives permission, so that they do not get distracted from studying.（46語）

（反対例）I don't think high school students should be allowed to use smartphones during class. Many students would probably use them to check social media or play games instead of listening to the teacher. Furthermore, it could be difficult for teachers to control how each student is using their phone during a lesson.（49語）`,
    hint: `主張→理由1→理由2（または譲歩＋補足）の構成で書く。However/Furthermoreなどの接続語で論理をつなぐ。`,
    explanation: `【出題意図】授業中のスマートフォン使用の是非について、35語以上で主張と理由を論理的にまとめる意見英作文を問う。【解説】賛成の理由例：情報検索やメモに便利、ただし教師の許可がある場合に限定するという条件付き賛成の立場。反対の理由例：SNSやゲームに気を取られる可能性、教師が使用状況を管理しにくいこと。いずれの立場でも、however/furthermoreのような論理接続語を使うと文章の流れが明確になる。【注意点】35語以上を確実に満たすため、理由を1つだけでなく、条件や補足（howeverの後の内容等）まで加えて具体性を持たせる。主語と動詞の一致（studentsは複数、smartphoneの単数/複数）にも注意する。【関連知識】スマートフォン・教育関連語彙：distract（気を散らす）、permission（許可）、efficiently（効率的に）は意見英作文で使いやすい語彙。`,
    pitfall: `I think smartphones are useful.のように理由が漠然としたまま終わらせず、「いつ・どのように使うべきか」といった具体的な条件まで踏み込んで書くと説得力が増す。`,
    memoryTip: `意見英作文の型：主張（I think/I don't think）→理由→However/Furthermoreで補足・条件、という3段構成を基本にする。`,
  },
  {
    id: 'koko_kankan_eigo_c2_48',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、あなたの意見を35語以上の英語で書きなさい。

テーマ：「学校で制服を着ることに賛成ですか、反対ですか。」

（I agree / I disagree で書き始めること）`,
    answer: `（賛成例）I agree that students should wear school uniforms. Uniforms make it easier for students to focus on studying instead of worrying about fashion every morning. In addition, uniforms create a sense of equality among students, regardless of their family's financial situation.（41語）

（反対例）I disagree that students should be required to wear school uniforms. Students should be free to express their own personality through the clothes they choose to wear. Moreover, uniforms can be expensive for families, and students may feel uncomfortable in clothes that do not fit them well.（46語）`,
    hint: `賛成の理由：勉強への集中、経済的平等。反対の理由：個性の表現、経済的負担。In additionやMoreoverでつなぐ。`,
    explanation: `【出題意図】学校制服の是非という定番テーマで、35語以上の意見英作文を通じて主張・理由・補足を論理的に展開する力を問う。【解説】賛成の理由例：ファッションを気にせず勉強に集中できる、家庭の経済状況にかかわらず平等感が生まれる。反対の理由例：服装を通じた個性の表現の自由、制服の費用負担、体に合わない服の不快感。in addition（さらに）、moreover（その上）は理由を追加する際の定番の接続語。【注意点】語数条件を満たすため、理由を最低でも2点挙げる。文法面ではshould be allowed to〜/should be required to〜のような受動態表現も使えるようにしておく。【関連知識】uniform（制服）、equality（平等）、personality（個性）は学校生活の意見英作文で頻出のテーマ語彙。`,
    pitfall: `理由を1つだけ（例：「かわいいから」等の主観的な理由のみ）で終わらせず、社会的・経済的観点も含めて具体性を持たせる。`,
    memoryTip: `In addition / Moreover / Furthermoreはいずれも「さらに」と理由を追加する際の同義的な接続語として使い分けられる。`,
  },
  {
    id: 'koko_kankan_eigo_c2_49',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、あなたの意見を35語以上の英語で書きなさい。

テーマ：「中学生や高校生がアルバイトをすることに賛成ですか、反対ですか。」

（I agree / I disagree で書き始めること）`,
    answer: `（賛成例）I agree that high school students should be allowed to have part-time jobs. Working part-time helps students learn how to manage their time and money responsibly. It also gives them a chance to experience the real world outside of school before they graduate.（42語）

（反対例）I disagree that junior high and high school students should work part-time jobs. Their main responsibility at this stage of life is to focus on their studies. If students spend too much time working, they may become too tired to concentrate on schoolwork and lose sleep.（44語）`,
    hint: `賛成：時間管理・お金の管理、社会経験。反対：本分は勉強、疲労による学業への悪影響。`,
    explanation: `【出題意図】学生のアルバイトの是非という身近なテーマで、35語以上の理由付きの意見英作文を作成する力を問う。【解説】賛成の理由例：時間とお金の管理を学べる、社会経験を積める。反対の理由例：学業が本分である、働きすぎて集中力や睡眠に悪影響が出る可能性。いずれの立場も「their main responsibility」「real world experience」のような具体的な語句を使うと説得力が増す。【注意点】If節を使う場合はif+現在形（If students spend too much time）とし、条件文の基本形を守る。語数条件（35語以上）を満たすため、理由を2つ以上、または理由＋具体的な影響まで書く。【関連知識】part-time job（アルバイト）、manage time and money（時間とお金を管理する）、concentrate on〜（〜に集中する）はこのテーマで頻出の表現。`,
    pitfall: `賛成・反対どちらの立場でも、単に「楽しいから」「大変だから」のような感想だけで終わらせず、学業や将来への影響という観点まで触れると評価が高くなる。`,
    memoryTip: `意見英作文では、自分の立場に加えて「学業（studies）」との関係にどう触れるかが、学生生活をテーマにした問題で高評価を得るポイントになりやすい。`,
  },
  {
    id: 'koko_kankan_eigo_c2_50',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、あなたの意見を35語以上の英語で書きなさい。

テーマ：「競争（competition）は生徒の成長にとって良いものだと思いますか。」

（I think / I don't think で書き始めること）`,
    answer: `（賛成例）I think competition is good for students' growth. When students compete with each other, they often try harder to improve their skills than they would on their own. Moreover, competition can teach students how to accept both success and failure, which is an important life skill.（44語）

（反対例）I don't think competition is always good for students' growth. Too much competition can create unnecessary stress and make students who are not as skilled feel discouraged. Instead, schools should focus more on cooperation, helping students support each other and grow together as a team.（43語）`,
    hint: `賛成：努力の促進、成功と失敗を受け入れる力。反対：過度なストレス、協力の重要性。`,
    explanation: `【出題意図】競争と協力という対立するテーマについて、35語以上で自分の立場と理由を論理的に展開する意見英作文を問う。【解説】賛成の理由例：競争によって一人でやるよりも努力するようになる、成功と失敗を受け入れる力が身につく。反対の理由例：過度な競争は不必要なストレスを生み、苦手な生徒を落胆させる可能性がある、協力を重視すべきという主張。moreover/insteadのような接続語を使って理由や代案を明確に示す。【注意点】「competition is good」と単純に述べるだけでなく、「for students' growth（生徒の成長にとって）」という設問の観点に沿った理由を書くことが重要。反対の立場ではinstead（その代わりに）を使って代案（cooperation）を提示すると説得力が増す。【関連知識】competition（競争）、cooperation（協力）、discouraged（落胆した）は学校生活・教育をテーマにした意見英作文で頻出の対立語彙。`,
    pitfall: `賛成・反対のどちらの立場でも、設問のテーマ「生徒の成長」という観点からずれた理由（例：単に楽しいから）だけで終わらせない。`,
    memoryTip: `対立するテーマ（競争 vs 協力）の意見英作文では、instead（その代わりに）を使って自分が支持しない側の代案を示すと、文章の説得力が高まる。`,
  },
];
