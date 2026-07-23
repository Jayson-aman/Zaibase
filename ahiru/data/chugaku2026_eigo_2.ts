import type { Question } from './questions';

export const chugaku2026Eigo2: Question[] = [
  // ============================================================
  // Q061–Q069: 基礎（difficulty: 'basic'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_061',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切なbe動詞を入れなさい。

① I (　) a student.
② She (　) happy.
③ We (　) friends.`,
    answer: `① am　② is　③ are`,
    hint: `主語がI→am、3人称単数(she/he/it)→is、複数(we/you/they)→are。`,
    explanation: `【出題意図】be動詞am/is/areの基本的な使い分けを問う。【解説】主語によってbe動詞は変わる。I→am、She(3人称単数)→is、We(複数)→are。【注意点】areはyou・we・theyや複数の主語で使う。isはhe/she/itや単数の名詞で使う。【関連知識】be動詞の過去形はwas(am/isの過去)・were(areの過去)。`,
    pitfall: `She areやWe isのように、主語とbe動詞の組み合わせを間違えない。`,
    memoryTip: `「I am、You are、He/She/It is、We/You/They are」の順番をリズムで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_062',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に do または does を入れなさい。

① (　) you like dogs?
② (　) she play tennis?
③ (　) they live in Tokyo?`,
    answer: `① Do　② Does　③ Do`,
    hint: `主語が3人称単数(she/he/it)のときはdoes、それ以外はdoを使う。`,
    explanation: `【出題意図】一般動詞の疑問文でdo/doesを使い分ける基本ルールを問う。【解説】疑問文は「Do/Does+主語+動詞の原形?」の形。主語が3人称単数(she/he/it)のときはDoes、I/you/we/theyのときはDoを使う。【注意点】Doesを使うとき、後ろの動詞は原形に戻す(plays→play)。【関連知識】否定文も同じルールでdon't/doesn'tを使い分ける。`,
    pitfall: `Does she plays tennis?のようにDoesを使ったのに動詞にsを付けたままにしない。`,
    memoryTip: `「3人称・単数(1人)だけdoesを使う」と唱えて覚える。`,
  },
  {
    id: 'chugaku2026_eigo_063',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の単語を複数形にしなさい。

① apple → (　)
② box → (　)
③ city → (　)`,
    answer: `① apples　② boxes　③ cities`,
    hint: `基本はs、s/x/ch/shで終わる語はes、子音字+yで終わる語はyをiに変えてesをつける。`,
    explanation: `【出題意図】名詞の複数形の作り方（規則変化）を問う。【解説】①appleは基本ルールでsをつけるだけ→apples。②boxはxで終わるのでesをつける→boxes。③cityは子音字+yで終わるのでyをiに変えてesをつける→cities。【注意点】母音字+yで終わる語(day, boyなど)はそのままsをつける(days, boys)。【関連知識】不規則変化の複数形も覚える:child→children、man→men、foot→feet。`,
    pitfall: `cityをcitysとしない。子音字+yで終わる語はyをiに変えてesをつける。`,
    memoryTip: `「s, x, ch, sh→es」「子音字+y→yをiにしてes」「母音字+y→そのままs」の3パターンを覚える。`,
  },
  {
    id: 'chugaku2026_eigo_064',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に this, that, these, those のいずれかを入れなさい。

① (　) is my bag.（これは私のかばんです：近くにある単数）
② (　) are her pens.（あれらは彼女のペンです：遠くにある複数）
③ (　) is your dog?（あれはあなたの犬ですか：遠くにある単数）`,
    answer: `① This　② Those　③ That`,
    hint: `近い・単数→this、近い・複数→these、遠い・単数→that、遠い・複数→those。`,
    explanation: `【出題意図】指示代名詞this/that/these/thoseの使い分けを問う。【解説】近くのものを指すときthis(単数)・these(複数)。遠くのものを指すときthat(単数)・those(複数)。①「これ」で単数→This。②「あれら」で複数→Those。③「あれ」で単数→That。【注意点】be動詞もthis/that(単数)はis、these/those(複数)はareになる。【関連知識】疑問文はIs this~?/Are these~?の形になる。`,
    pitfall: `These is her pens.のようにtheseを使ったのにisを使わない。theseはareとセットで使う。`,
    memoryTip: `「近い(this/these)・遠い(that/those)」「単数(this/that)・複数(these/those)」の2つの軸で整理する。`,
  },
  {
    id: 'chugaku2026_eigo_065',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私は自転車に乗ることができる。
  I (　) ride a bike.
② 彼は泳ぐことができない。
  He (　) (　) swim.
③ あなたはピアノを弾けますか。
  (　) you play the piano?`,
    answer: `① can　② cannot (can't)　③ Can`,
    hint: `canの肯定文はcan+動詞の原形、否定はcannot、疑問文はCanを文の最初に置く。`,
    explanation: `【出題意図】助動詞canの肯定文・否定文・疑問文の基本形を問う。【解説】①「〜できる」はcan+動詞の原形。②「〜できない」はcannot(短縮形can't)+動詞の原形。③疑問文はCanを主語の前に置く。【注意点】canの後の動詞は必ず原形(rides やswimsにしない)。【関連知識】canの過去形はcould(「〜できた」)。`,
    pitfall: `He can not swims.のように動詞にsを付けない。canの後は必ず動詞の原形。`,
    memoryTip: `「can+動詞の原形」を1つのブロックとして覚える。`,
  },
  {
    id: 'chugaku2026_eigo_066',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① A: What (　) is it today? B: It's Monday.（今日は何曜日ですか）
② A: What (　) is it now? B: It's three o'clock.（今何時ですか）
③ My birthday is (　) May.（私の誕生日は5月です）`,
    answer: `① day　② time　③ in`,
    hint: `曜日はWhat day、時刻はWhat time、月にはinを使う。`,
    explanation: `【出題意図】曜日・時刻・月を尋ねる表現と前置詞の基本を問う。【解説】①「何曜日」はWhat day (is it today)?。②「何時」はWhat time (is it now)?。③月を表す前置詞はin(in May)。【注意点】日付にはon(on May 5th)、時刻にはat(at three)を使う点は本問と区別して覚える。【関連知識】曜日はMonday〜Sunday、月はJanuary〜Decemberの綴りも正確に覚える。`,
    pitfall: `What day is it now?とWhat time is it now?を混同しない。dayは曜日、timeは時刻を尋ねる語。`,
    memoryTip: `「曜日=day、時刻=time、月=in」とセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_067',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に there is または there are を入れなさい。

① (　) a ball under the desk.
② (　) two cats in the room.
③ (　) a lot of books on the shelf.`,
    answer: `① There is　② There are　③ There are`,
    hint: `後ろの名詞が単数→there is、複数→there are。`,
    explanation: `【出題意図】there is/are構文の基本的な数の一致を問う。【解説】①a ball(単数)→There is。②two cats(複数)→There are。③a lot of books(複数)→There are。【注意点】There is/areの後ろの名詞が主語の働きをするので、名詞の数を確認してから選ぶ。【関連知識】否定文はThere is not(isn't)/are not(aren't)、疑問文はIs there~?/Are there~?の形になる。`,
    pitfall: `a lot ofは「たくさんの」という意味で、後ろの名詞の数によってis/areが決まる。booksは複数なのでare。`,
    memoryTip: `「be動詞の直後ではなく、その後ろの名詞を見る」のがコツ。`,
  },
  {
    id: 'chugaku2026_eigo_068',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な形の動詞を入れなさい。

① My father (　) to work every day.（go）
② She (　) English very well.（speak）
③ My sister (　) TV every evening.（watch）`,
    answer: `① goes　② speaks　③ watches`,
    hint: `主語が3人称単数のとき、動詞に-s/-esをつける。`,
    explanation: `【出題意図】3人称単数現在形(3単現)の動詞の形を問う。【解説】①「行く」go→goes(oで終わる動詞はesをつける)。②「話す」speak→speaks(基本はsをつける)。③「見る」watch→watches(chで終わる動詞はesをつける)。【注意点】主語が3人称単数(he/she/it、または一人の人名)のとき、動詞にs/esをつける。【関連知識】studyのように子音字+yで終わる動詞はyをiに変えてes(studies)。`,
    pitfall: `watchをwatchsとしない。sh/ch/s/x/oで終わる動詞はesをつける。`,
    memoryTip: `「3人称・単数・現在」の3条件がそろったときだけ動詞にs/esをつけると覚える。`,
  },
  {
    id: 'chugaku2026_eigo_069',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な疑問詞を入れなさい。

① (　) is that boy? — He is my brother.（あの男の子は誰ですか）
② (　) is your school? — It's near the station.（あなたの学校はどこですか）
③ (　) is your birthday? — It's June 10th.（あなたの誕生日はいつですか）`,
    answer: `① Who　② Where　③ When`,
    hint: `人→who、場所→where、時→when。`,
    explanation: `【出題意図】基本的な疑問詞who/where/whenの使い分けを問う。【解説】①「誰」を尋ねるのでWho。②「どこ」を尋ねるのでWhere。③「いつ」を尋ねるのでWhen。答えの内容(人・場所・時)から疑問詞を判断できる。【注意点】答えの文をよく読み、何を尋ねているかを確認してから疑問詞を選ぶ。【関連知識】What(何)、Why(なぜ)、How(どのように)も合わせて覚える。`,
    pitfall: `Whoの後は人を表す答え、Whereの後は場所を表す答えが来ることを必ず確認する。`,
    memoryTip: `「答えの文の中に手がかりがある」ことを意識して疑問詞を選ぶ。`,
  },

  // ============================================================
  // Q070–Q084: 標準（difficulty: 'standard'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_070',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の動詞を過去形にしなさい。

① play → (　)
② study → (　)
③ stop → (　)`,
    answer: `① played　② studied　③ stopped`,
    hint: `基本はed、子音字+yはyをiに変えてed、短母音+子音1字は子音を重ねてed。`,
    explanation: `【出題意図】規則動詞の過去形の作り方(3パターン)を問う。【解説】①playは母音字+yで終わるのでそのままedをつける→played。②studyは子音字+yで終わるのでyをiに変えてed→studied。③stopは短母音+子音1字で終わるので子音を重ねてed→stopped。【注意点】発音のルール(-edの発音がト/ド/イドの3種類)も合わせて覚えるとよい。【関連知識】eで終わる動詞はdだけをつける(like→liked)。`,
    pitfall: `stopをstopedとしない。短母音+子音1字で終わる動詞は子音を重ねてedをつける。`,
    memoryTip: `「母音字+y→ed」「子音字+y→yをiにしてed」「短母音+子音1字→子音を重ねてed」の3パターンを覚える。`,
  },
  {
    id: 'chugaku2026_eigo_071',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の動詞を過去形にしなさい。

① go → (　)
② have → (　)
③ see → (　)`,
    answer: `① went　② had　③ saw`,
    hint: `不規則動詞は変化の形をそのまま覚える必要がある。`,
    explanation: `【出題意図】頻出の不規則動詞の過去形を問う。【解説】①go(行く)の過去形はwent。②have(持つ・食べる)の過去形はhad。③see(見る)の過去形はsaw。これらはedをつけるのではなく、単語自体の形が変化する。【注意点】不規則動詞は数が多いが、よく使うものから少しずつ覚えていく。【関連知識】他の頻出不規則動詞:eat→ate、come→came、make→made、get→got、do→did。`,
    pitfall: `goed、haved、seeedのようにedをつけない。不規則動詞は形を暗記する。`,
    memoryTip: `「go-went-gone」のように3つセット(原形-過去形-過去分詞)で唱えて覚える。`,
  },
  {
    id: 'chugaku2026_eigo_072',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な形を入れなさい。

① I (　) (　) a letter now.（私は今手紙を書いているところだ）(write)
② She (　) (　) in the pool.（彼女はプールで泳いでいるところだ）(swim)
③ They (　) (　) soccer in the park.（彼らは公園でサッカーをしているところだ）(play)`,
    answer: `① am writing　② is swimming　③ are playing`,
    hint: `現在進行形はbe動詞+動詞のing形。swimのようにingにするとき子音を重ねる動詞に注意。`,
    explanation: `【出題意図】現在進行形(be動詞+ing)の作り方を問う。【解説】①主語Iなのでam、writeはeをとってing→writing。②主語sheなのでis、swimは短母音+子音1字なので子音を重ねてing→swimming。③主語theyなのでare、playはそのままing→playing。【注意点】be動詞は主語によって変える(am/is/are)。動詞のing形の作り方にも3パターンある。【関連知識】know、like、wantなどの状態を表す動詞は基本的に進行形にしない。`,
    pitfall: `swimをswiming(mが1つ)としない。短母音+子音1字で終わる動詞は子音を重ねてingをつける。`,
    memoryTip: `「be動詞+動詞のing」を1つの形として覚え、be動詞は主語で変えることを忘れない。`,
  },
  {
    id: 'chugaku2026_eigo_073',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の絵の説明に合うように（　）に適切な前置詞を入れなさい。

① The cat is (　) the box.（猫は箱の中にいる）
② The book is (　) the desk.（本は机の上にある）
③ The bag is (　) the chair.（かばんはいすの下にある）`,
    answer: `① in　② on　③ under`,
    hint: `中→in、上（接触）→on、下→under。`,
    explanation: `【出題意図】場所を表す基本の前置詞in/on/underの使い分けを問う。【解説】①「箱の中」→in the box。②「机の上」（接触している）→on the desk。③「いすの下」→under the chair。【注意点】onは「上」だけでなく面に接している状態を表す(壁にかかっている絵もon the wall)。【関連知識】場所の前置詞にはby(そばに)、near(近くに)、between(の間に)などもある。`,
    pitfall: `「上」だから全てonとは限らない。「下」を表すときはunderを使う。`,
    memoryTip: `「中(in)・上(on)・下(under)」を絵をイメージしながら覚える。`,
  },
  {
    id: 'chugaku2026_eigo_074',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: Would you like some tea?
B: (　)
A: Here you are.

① Yes, please.
② No, I don't.
③ You're welcome.
④ Nice to meet you.`,
    answer: `① Yes, please.`,
    hint: `「お茶はいかがですか」と聞かれたときの自然な返事を考える。`,
    explanation: `【出題意図】飲み物を勧められたときの基本的な会話表現を問う。【解説】「Would you like some tea?」（お茶はいかがですか）に対する自然な返答は「Yes, please.」（はい、お願いします）。その後Aが「Here you are.」（どうぞ）と続くのも自然な流れ。②はDo you like tea?への返答としては自然だがWould you like~?への返答としては不自然。③はThank youへの返答。④は初対面のあいさつ。【注意点】Would you like~?はDo you like~?とは異なり「〜はいかがですか」という勧誘・提案の表現。【関連知識】断るときはNo, thank you.と言う。`,
    pitfall: `②No, I don't.はDo you like tea?への返答であり、Would you like~?への返答としては不自然。`,
    memoryTip: `「Would you like~?」には「Yes, please.」か「No, thank you.」で答えると覚える。`,
  },
  {
    id: 'chugaku2026_eigo_075',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に形容詞の比較級を入れなさい。

① This bag is (　) than that one.（このかばんはあれより大きい）(big)
② My brother is (　) than me.（私の兄は私より背が高い）(tall)
③ This question is (　) than that one.（この問題はあれより簡単だ）(easy)`,
    answer: `① bigger　② taller　③ easier`,
    hint: `短い形容詞は最後にer、短母音+子音1字は子音を重ねてer、子音字+yで終わる語はyをiに変えてer。`,
    explanation: `【出題意図】比較級の作り方(規則変化3パターン)を問う。【解説】①bigは短母音+子音1字なので子音を重ねてer→bigger。②tallはそのままer→taller。③easyは子音字+yで終わるのでyをiに変えてer→easier。【注意点】長い形容詞(beautiful等)はmoreを前につける(more beautiful)。本問はすべて短い形容詞。【関連知識】比較級の後にはthanを置いて「〜より」を表す。`,
    pitfall: `bigをbigerとしない。短母音+子音1字で終わる語は子音を重ねる。`,
    memoryTip: `「短い形容詞+er」「短母音+子音1字は重ねる」「子音字+yはyをiに変える」の3パターンを最上級とセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_076',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に形容詞の最上級を入れなさい。

① Mt. Fuji is the (　) mountain in Japan.（富士山は日本で一番高い山だ）(high)
② She is the (　) student in her class.（彼女はクラスで一番背が高い生徒だ）(tall)
③ This is the (　) movie of all.（これは全ての中で一番おもしろい映画だ）(interesting)`,
    answer: `① highest　② tallest　③ most interesting`,
    hint: `短い形容詞はest、長い形容詞はmostを前につける。最上級の前にはtheをつける。`,
    explanation: `【出題意図】最上級の作り方(規則変化と長い形容詞のmost)を問う。【解説】①highは短い形容詞なのでest→highest。②tallも短い形容詞なのでest→tallest。③interestingは長い形容詞なのでmostを前につける→most interesting。【注意点】最上級の前には必ずtheをつける(the highest、the most interesting)。【関連知識】最上級の後にはin+場所やof+全体を続けることが多い(in Japan、of all)。`,
    pitfall: `interestingにestをつけてinterestingestとしない。長い形容詞はmostを使う。`,
    memoryTip: `「短い形容詞→est」「長い形容詞→most」、どちらも前にtheをつけるとセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_077',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ is / this / my / book ].（これは私の本です）
② [ have / a / I / dog ].（私は犬を1匹飼っている）
③ [ likes / she / music ].（彼女は音楽が好きだ）`,
    answer: `① This is my book.
② I have a dog.
③ She likes music.`,
    hint: `主語+動詞+目的語(SVO)の基本の語順を確認する。`,
    explanation: `【出題意図】英語の基本語順(主語+動詞+目的語)を問う整序問題。【解説】①「This is my book.」主語This、be動詞is、補語my book。②「I have a dog.」主語I、動詞have、目的語a dog。③「She likes music.」主語she、動詞likes(3単現のs)、目的語music。【注意点】③のように主語が3人称単数のときは動詞にsをつけ忘れない。【関連知識】英語は日本語と違い、必ず主語(誰が)を文の最初に置く。`,
    pitfall: `③をShe like music.としない。3人称単数現在なのでlikesとsをつける。`,
    memoryTip: `英語の語順は「誰が(主語)→する(動詞)→何を(目的語)」の順と覚える。`,
  },
  {
    id: 'chugaku2026_eigo_078',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ do / you / what / like ]?（あなたは何が好きですか）
② [ old / how / are / you ]?（あなたは何歳ですか）
③ [ many / how / pens / do / you / have ]?（あなたはペンを何本持っていますか）`,
    answer: `① What do you like?
② How old are you?
③ How many pens do you have?`,
    hint: `疑問詞+do/does+主語+動詞の原形の語順を確認する。How manyの後には複数名詞が続く。`,
    explanation: `【出題意図】疑問詞を使った疑問文の語順を問う整序問題。【解説】①「What do you like?」疑問詞What+do+主語you+動詞like。②「How old are you?」年齢を尋ねる決まった表現。How old+be動詞+主語。③「How many pens do you have?」数を尋ねる表現。How many+複数名詞+do+主語+動詞。【注意点】How manyの直後は必ず複数形の名詞(pens)が来る。【関連知識】How much(量・値段を尋ねる、不可算名詞に使う)との違いに注意。`,
    pitfall: `How many penのように単数形にしない。How manyの後は必ず複数形。`,
    memoryTip: `「How old(年齢)」「How many+複数名詞(数)」「How much+不可算名詞(量・値段)」をセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_079',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合う英語を選びなさい。

① 医者
② 先生
③ 消防士

ア. teacher　イ. doctor　ウ. firefighter`,
    answer: `① イ(doctor)　② ア(teacher)　③ ウ(firefighter)`,
    hint: `それぞれの職業を表す基本単語を確認する。`,
    explanation: `【出題意図】身近な職業を表す基本単語の意味を問う。【解説】①「医者」はdoctor。②「先生」はteacher。③「消防士」はfirefighter。いずれも小学校英語で学ぶ基本的な職業名。【注意点】職業を尋ねる表現「What do you want to be?」（将来何になりたいですか）とセットで覚えるとよい。【関連知識】他の職業:nurse(看護師)、police officer(警察官)、farmer(農家)、cook(料理人)。`,
    pitfall: `teacherとfirefighterのつづりを混同しない。firefighterはfire(火)+fighter(戦う人)という組み合わせ。`,
    memoryTip: `fire+fighter=火と戦う人=消防士、とパーツで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_080',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の日本語に合う英語を選びなさい。

① 理科
② 社会
③ 晴れ（の天気）

ア. sunny　イ. science　ウ. social studies`,
    answer: `① イ(science)　② ウ(social studies)　③ ア(sunny)`,
    hint: `教科名と天気を表す形容詞を区別して覚える。`,
    explanation: `【出題意図】教科名と天気の基本単語を問う。【解説】①「理科」はscience。②「社会」はsocial studies。③「晴れ」を表す形容詞はsunny(It's sunny today.)。【注意点】天気を尋ねるときはHow is the weather?またはWhat's the weather like?を使う。【関連知識】他の教科:math(算数)、Japanese(国語)、P.E.(体育)。他の天気:rainy(雨)、cloudy(くもり)、snowy(雪)。`,
    pitfall: `scienceとsocial studiesの意味を逆にしない。socialは「社会の」という意味を持つ。`,
    memoryTip: `天気の単語はほとんど-yで終わる(sunny/rainy/cloudy/snowy)とパターンで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_081',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読んで、質問に答えなさい。

Hello. My name is Kenta. I am eleven years old. I live in Osaka. I like soccer and math. I have one sister. Her name is Yuki.

① How old is Kenta?
② What does Kenta like?
③ ケンタの妹の名前は何ですか。（日本語で答えよ）`,
    answer: `① He is eleven years old.
② He likes soccer and math.
③ ユキ`,
    hint: `本文の該当箇所を探して答える。年齢はeleven、好きなものはlike以下、妹の名前は最後の文。`,
    explanation: `【出題意図】自己紹介文の基本的な読解問題。年齢・好きなもの・固有名詞の把握を問う。【解説】①「I am eleven years old.」からHe is eleven years old.と答える。②「I like soccer and math.」からHe likes soccer and math.と答える。③「Her name is Yuki.」からユキ。【注意点】質問がHe/Sheで聞かれた場合、答えの主語もそれに合わせて代名詞を使うと自然。【関連知識】自己紹介の定型表現:My name is~. I am~years old. I live in~. I like~.`,
    pitfall: `①でeleven yearsとだけ答えず、years oldまで含めて答える。`,
    memoryTip: `自己紹介文は「名前→年齢→住んでいる場所→好きなもの→家族」の順で書かれることが多い。`,
  },
  {
    id: 'chugaku2026_eigo_082',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読んで、質問に答えなさい。

I go to school by bike every day. School starts at eight thirty. My favorite subject is English. After school, I practice tennis with my friends.

① How does the writer go to school?
② What time does school start?
③ この人が放課後にすることは何ですか。（日本語で答えよ）`,
    answer: `① He/She goes to school by bike.
② It starts at eight thirty.
③ 友達とテニスを練習する。`,
    hint: `by bikeは手段、eight thirtyは時刻、after schoolの後の文に注目する。`,
    explanation: `【出題意図】学校生活を描いた短い英文の読解問題。手段・時刻・行動の把握を問う。【解説】①「I go to school by bike every day.」から「自転車で学校に行く」→goes to school by bike。②「School starts at eight thirty.」からIt starts at eight thirty.。③「After school, I practice tennis with my friends.」から「友達とテニスを練習する」。【注意点】by+乗り物(by bike/by bus/by train)は「〜で」という交通手段を表す。【関連知識】徒歩のときはon foot(by footとは言わない)という表現になる点に注意。`,
    pitfall: `交通手段を表すとき徒歩だけはby footではなくon footと言う。`,
    memoryTip: `「by+乗り物」だが「徒歩だけはon foot」と例外をセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_083',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話文を読んで、（　）に適切な文を選びなさい。

Clerk: May I help you?
Customer: Yes. (　)
Clerk: It's 500 yen.
Customer: OK, I'll take it.

① How much is this cap?
② How old is this cap?
③ Where is this cap?
④ Whose cap is this?`,
    answer: `① How much is this cap?`,
    hint: `値段を答えている(500 yen)ので、値段を尋ねる疑問文を選ぶ。`,
    explanation: `【出題意図】買い物の場面での定型的な会話表現(値段を尋ねる)を問う。【解説】店員の返答が「It's 500 yen.」（500円です）と値段を答えているので、客はHow much is this cap?（この帽子はいくらですか）と尋ねたとわかる。②年齢を尋ねる表現、③場所を尋ねる表現、④持ち主を尋ねる表現でいずれも文脈に合わない。【注意点】値段を尋ねるHow muchは不可算名詞や値段など数えられないものに使う疑問詞。【関連知識】買い物の表現:I'll take it.(それをいただきます)、Can I try it on?(試着してもいいですか)。`,
    pitfall: `How manyと混同しない。How manyは数を尋ねるときに使い、値段にはHow muchを使う。`,
    memoryTip: `値段を聞くときの決まり文句「How much is this/that~?」を丸ごと覚える。`,
  },
  {
    id: 'chugaku2026_eigo_084',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話文を読んで、（　）に適切な文を選びなさい。

A: Excuse me. (　)
B: Go straight and turn left at the corner. It's on your right.
A: Thank you very much.

① Where is the post office?
② What time is it now?
③ How are you today?
④ Who is that man?`,
    answer: `① Where is the post office?`,
    hint: `Bの返答が道順(直進して角を左に曲がる)を説明しているので、場所を尋ねる文を選ぶ。`,
    explanation: `【出題意図】道案内の場面での基本的な会話表現を問う。【解説】Bが「Go straight and turn left at the corner. It's on your right.」（まっすぐ行って角を左に曲がってください。右側にあります）と道順を説明しているので、Aは場所を尋ねたとわかる→Where is the post office?。②時刻、③調子、④人物を尋ねる文でいずれも道順の返答にはつながらない。【注意点】Excuse me.は見知らぬ人に話しかけるときの丁寧な表現。【関連知識】道案内の表現:go straight(まっすぐ進む)、turn left/right(左右に曲がる)、on your right/left(右手・左手に)。`,
    pitfall: `③How are you today?は挨拶であり、道順の返答にはつながらないため誤り。`,
    memoryTip: `道案内の会話は「Excuse me.→場所を尋ねる文→道順の説明→Thank you.」の流れで覚える。`,
  },

  // ============================================================
  // Q085–Q113: 発展（difficulty: 'advanced', maxOnly: true）
  // ============================================================
  {
    id: 'chugaku2026_eigo_085',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形を入れ、未来の文を完成させなさい。

① I (　) (　) help you.（私はあなたを手伝います）
② It (　) (　) rain tomorrow.（明日は雨が降るでしょう）
③ (　) you (　) come to the party?（あなたはパーティーに来ますか）`,
    answer: `① will help　② will rain　③ Will, come`,
    hint: `willの後は動詞の原形。疑問文はWillを主語の前に置く。`,
    explanation: `【出題意図】未来を表すwillの肯定文・疑問文の基本形を問う。【解説】①「〜します」という意志未来はwill+動詞の原形→will help。②「〜だろう」という予測の未来もwill+動詞の原形→will rain。③疑問文はWillを文頭に置き、「Will+主語+動詞の原形?」の形→Will you come。【注意点】willの後の動詞は主語に関係なく常に原形になる。【関連知識】willの否定はwill not(短縮形won't)。`,
    pitfall: `willの後にhelpsやcomesのようにsをつけない。willの後は必ず原形。`,
    memoryTip: `「will+動詞の原形」は主語が何であっても形が変わらないと覚える。`,
  },
  {
    id: 'chugaku2026_eigo_086',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形を入れなさい。

① She (　) (　) to visit her grandmother next week.（彼女は来週祖母を訪ねる予定だ）
② We (　) (　) to have a party this weekend.（私たちは今週末パーティーをする予定だ）`,
    answer: `① is going　② are going`,
    hint: `be going to〜は「〜する予定だ」という意味。be動詞は主語に合わせて変える。`,
    explanation: `【出題意図】未来の予定を表すbe going toの形を問う。【解説】be going to+動詞の原形で「〜する予定だ」という意味を表す。①主語sheはis→is going。②主語weはare→are going。be動詞の部分は主語によって変化するが、going to以下は変わらない。【注意点】be going toは事前に決まっている予定、willはその場で決めた意志という違いがある(中学英語で習う基本的な区別)。【関連知識】疑問文はbe動詞を主語の前に出す(Is she going to~?)。`,
    pitfall: `goingの後のtoを忘れない。be going+動詞の原形は誤り。`,
    memoryTip: `「be動詞+going to+動詞の原形」を1つのブロックとして覚える。`,
  },
  {
    id: 'chugaku2026_eigo_087',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語句を入れなさい。

① Students (　) wear a uniform at this school.（この学校の生徒は制服を着なければならない）
② You (　) (　) study today. It's a holiday.（今日は勉強する必要はない。休日だから）`,
    answer: `① must (have to)　② don't have to`,
    hint: `「〜しなければならない」はmust/have to、「〜する必要はない」はdon't have to。`,
    explanation: `【出題意図】義務を表すmust/have toと、不必要を表すdon't have toの違いを問う。【解説】①「〜しなければならない」はmustまたはhave toで表す→must(またはhave to) wear。②「〜する必要はない」はdon't have to+動詞の原形で表す→don't have to study。【注意点】must notは「〜してはいけない」という禁止の意味になり、don't have toの「する必要がない」とは意味が異なるので混同しない。【関連知識】mustには過去形がないため、過去の義務にはhad toを使う。`,
    pitfall: `②をmust notとすると「勉強してはいけない」という禁止の意味になり誤り。「必要がない」はdon't have to。`,
    memoryTip: `「must not=禁止(してはいけない)」「don't have to=不必要(しなくてよい)」の違いをセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_088',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① あなたはもっと勉強すべきだ。
  You (　) study more.
② 彼はそんなに心配すべきではない。
  He (　) (　) worry so much.`,
    answer: `① should　② should not (shouldn't)`,
    hint: `「〜すべきだ」はshould、「〜すべきではない」はshould not。`,
    explanation: `【出題意図】助動詞shouldの肯定文・否定文の基本形を問う。【解説】①「〜すべきだ」という助言・提案はshould+動詞の原形→should study。②「〜すべきではない」はshould not(短縮形shouldn't)+動詞の原形→should not worry。【注意点】shouldはmustより弱い義務・アドバイスを表す。【関連知識】アドバイスを求めるときはWhat should I do?(私は何をすべきですか)という表現も頻出。`,
    pitfall: `shouldの後の動詞に原形以外(worries等)を使わない。`,
    memoryTip: `「should=アドバイスのべきだ」「must=強い義務のねばならない」とニュアンスの違いを覚える。`,
  },
  {
    id: 'chugaku2026_eigo_089',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な接続詞を入れなさい。

① I like dogs (　) cats.（私は犬と猫が好きだ）
② I was tired, (　) I didn't go to bed early.（私は疲れていたが、早く寝なかった）
③ I stayed home (　) it was raining.（雨が降っていたので私は家にいた）

ア. and　イ. but　ウ. because`,
    answer: `① ア(and)　② イ(but)　③ ウ(because)`,
    hint: `並べる→and、逆の内容→but、理由→because。`,
    explanation: `【出題意図】基本的な接続詞and/but/becauseの使い分けを問う。【解説】①犬と猫を並べているのでand。②「疲れていた」のに「早く寝なかった」という逆の内容が続くのでbut。③「家にいた」理由が「雨が降っていた」ことなのでbecause。【注意点】becauseは理由を表す従属接続詞で、becauseの後には主語+動詞を含む文が続く。【関連知識】soは「だから」という結果を表す接続詞で、becauseとは逆の関係(原因→結果)を表す。`,
    pitfall: `②でandを選ぶと「疲れていて、そして早く寝なかった」という不自然な意味になる。逆接のbutが正しい。`,
    memoryTip: `「and=そして」「but=しかし」「because=なぜなら」の3語をセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_090',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に動詞を適切な形にして入れなさい。

① I like (　) in the sea.（私は海で泳ぐことが好きだ）(swim)
② She enjoys (　) books.（彼女は本を読むことを楽しむ）(read)
③ (　) the piano is fun.（ピアノを弾くことは楽しい）(play)`,
    answer: `① swimming　② reading　③ Playing`,
    hint: `like/enjoyの後や文の主語になるとき、動詞をing形（動名詞）にする。`,
    explanation: `【出題意図】動名詞(動詞のing形が名詞の働きをする形)の基本用法を問う。【解説】①like+動名詞で「〜することが好き」→swimming(短母音+子音1字なのでmを重ねる)。②enjoy+動名詞で「〜することを楽しむ」→reading。③動名詞は文の主語にもなれる→Playing the piano is fun.(ピアノを弾くことは楽しい)。【注意点】enjoyは動名詞のみをとり、to不定詞は続けられない(enjoy to readは誤り)。【関連知識】動名詞をとる動詞:enjoy、finish、stop。to不定詞をとる動詞:want、hope、decide。`,
    pitfall: `enjoy to readのようにenjoyの後にto不定詞を使わない。enjoyは動名詞のみをとる。`,
    memoryTip: `「like/enjoy+動詞のing形」とセットで覚え、動名詞は「主語にもなれる名詞」と意識する。`,
  },
  {
    id: 'chugaku2026_eigo_091',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形を入れなさい。

① I want (　) a doctor in the future.（私は将来医者になりたい）(be)
② She likes (　) books.（彼女は本を読むことが好きだ）(read)
③ We hope (　) you again.（私たちはまたあなたに会いたいと思っている）(see)`,
    answer: `① to be　② to read (readingも可)　③ to see`,
    hint: `want/hope+to不定詞。likeはto不定詞・動名詞どちらも使える。`,
    explanation: `【出題意図】to不定詞(名詞的用法)の基本形を問う。【解説】①want+to不定詞で「〜したい」→want to be。②like+to不定詞(または動名詞)で「〜することが好き」→to read(またはreading)。③hope+to不定詞で「〜したいと望む」→hope to see。【注意点】wantとhopeはto不定詞のみをとり、動名詞は続けられない(want readingは誤り)。likeはどちらも使える点が異なる。【関連知識】to不定詞の後は必ず動詞の原形が来る。`,
    pitfall: `want readingやhope seeingのように、want/hopeの後に動名詞を使わない。`,
    memoryTip: `「want/hope+to不定詞のみ」「like+to不定詞/動名詞どちらもOK」「enjoy/finish+動名詞のみ」と3グループに分けて覚える。`,
  },
  {
    id: 'chugaku2026_eigo_092',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の文を感嘆文に書き換えなさい。

① This flower is very beautiful. → (　) beautiful this flower is!
② She is a very kind girl. → (　) a kind girl she is!`,
    answer: `① How　② What`,
    hint: `形容詞・副詞だけを強調するときはHow、「a/an+形容詞+名詞」を強調するときはWhat。`,
    explanation: `【出題意図】感嘆文How〜!とWhat〜!の使い分けを問う。【解説】①「beautiful(形容詞)」だけを強調しているのでHow beautiful this flower is!。②「a kind girl(a+形容詞+名詞)」を強調しているのでWhat a kind girl she is!。【注意点】Howの後は形容詞/副詞のみ、Whatの後はa/an(+形容詞)+名詞が続く点が大きな違い。【関連知識】感嘆文の文末は主語+動詞の順(疑問文の語順にしない)。`,
    pitfall: `What beautiful this flower is!のようにWhatの後に名詞を置かず形容詞だけにしない。名詞があるかどうかでHow/Whatを判断する。`,
    memoryTip: `「名詞があればWhat、なければHow」と覚える。`,
  },
  {
    id: 'chugaku2026_eigo_093',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に How many または How much を入れなさい。

① (　) students are there in your class?（あなたのクラスには何人の生徒がいますか）
② (　) water do you drink every day?（あなたは毎日どのくらいの水を飲みますか）
③ (　) money do you have?（あなたはいくらお金を持っていますか）`,
    answer: `① How many　② How much　③ How much`,
    hint: `後ろの名詞が数えられる名詞(複数形)ならHow many、数えられない名詞ならHow much。`,
    explanation: `【出題意図】How many(数)とHow much(量・値段)の使い分けを問う。【解説】①studentsは数えられる名詞の複数形→How many。②waterは数えられない名詞(液体)→How much。③moneyも数えられない名詞→How much。【注意点】How manyの後は必ず複数形の名詞、How muchの後は単数形(不可算名詞)が来る。【関連知識】How muchは値段を尋ねるときにも使う(How much is this?)。`,
    pitfall: `How many waterやHow many moneyとしない。water/moneyは数えられない名詞なのでHow much。`,
    memoryTip: `「数えられる→How many+複数名詞」「数えられない→How much+単数名詞」と対にして覚える。`,
  },
  {
    id: 'chugaku2026_eigo_094',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な序数を入れなさい。

① January is the (　) month of the year.（1月は1年の最初の月だ）(first)
② My birthday is May (　).（私の誕生日は5月3日だ）(third)
③ She came in (　) place in the race.（彼女はレースで2位になった）(second)`,
    answer: `① first　② third　③ second`,
    hint: `序数は「〜番目」を表す。first(1番目)、second(2番目)、third(3番目)は特に不規則な形なので暗記する。`,
    explanation: `【出題意図】序数(first/second/third)の形と使い方を問う。【解説】①「最初の」はfirst。②日付を表すときは序数を使う(May third=5月3日)。③順位を表すときも序数を使う(second place=2位)。【注意点】4番目以降はfourth、fifth…のように基数にthをつけるのが基本だが、first/second/thirdだけは特別な形になる。【関連知識】日付の書き方:May 3rd(数字+thの省略形)とも書く。`,
    pitfall: `「1番目」をoneth、「2番目」をtwoth、「3番目」をthreethとしない。first/second/thirdは特別な形。`,
    memoryTip: `「1st=first、2nd=second、3rd=third」だけ特別、4th以降は基数+thと2段階で覚える。`,
  },
  {
    id: 'chugaku2026_eigo_095',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで質問に答えなさい。

I have a big family. I have two brothers and one sister. My father is a teacher, and my mother is a nurse. We all live together in a small house near the sea.

① How many brothers does the writer have?
② What is the writer's mother's job?
③ この家族はどこに住んでいますか。（日本語で答えよ）`,
    answer: `① He/She has two brothers.
② She is a nurse.
③ 海の近くの小さな家`,
    hint: `兄弟の数、母の職業、住んでいる場所をそれぞれ本文から探す。`,
    explanation: `【出題意図】家族を紹介する英文の読解問題。数・職業・場所の把握を問う。【解説】①「I have two brothers and one sister.」からHe/She has two brothers.。②「my mother is a nurse」からShe is a nurse.。③「We all live together in a small house near the sea.」から「海の近くの小さな家」。【注意点】家族構成を尋ねる質問では、brothers/sistersの数を正確に読み取る。【関連知識】家族の呼び方:father(父)、mother(母)、brother(兄弟)、sister(姉妹)、grandfather(祖父)、grandmother(祖母)。`,
    pitfall: `「two brothers and one sister」を読み間違えて、姉妹の数を兄弟の数と混同しない。`,
    memoryTip: `数字と職業名など、質問で聞かれるキーワードに印をつけながら読む練習をするとよい。`,
  },
  {
    id: 'chugaku2026_eigo_096',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで質問に答えなさい。

Our school has a sports day in October. Students run races and play tug-of-war. Parents come to watch and cheer for their children. After the sports day, we have a big lunch together.

① When does the school have a sports day?
② What do parents do on sports day?
③ 運動会の後、生徒たちは何をしますか。（日本語で答えよ）`,
    answer: `① It has a sports day in October.
② They come to watch and cheer for their children.
③ みんなで大きな昼食を一緒に食べる。`,
    hint: `時期はin October、保護者の行動はwatch and cheer、運動会後の行動は最後の文に注目。`,
    explanation: `【出題意図】学校行事(運動会)を説明する英文の読解問題。【解説】①「Our school has a sports day in October.」からIt has a sports day in October.。②「Parents come to watch and cheer for their children.」からThey come to watch and cheer for their children.。③「After the sports day, we have a big lunch together.」から「みんなで大きな昼食を一緒に食べる」。【注意点】cheer for〜は「〜を応援する」という意味。【関連知識】学校行事の語彙:sports day(運動会)、school trip(修学旅行)、chorus contest(合唱コンクール)。`,
    pitfall: `cheerを「歓声を上げる」だけと訳さず、cheer for〜で「〜を応援する」という意味になることに注意。`,
    memoryTip: `「cheer for+人」で「〜を応援する」とセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_097',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の時間割表を見て、質問に答えなさい。

| 時限 | 月曜日 | 火曜日 |
|---|---|---|
| 1 | Math | English |
| 2 | English | Science |
| 3 | Science | Math |

① What subject does he/she have first on Monday?
② How many English classes are there in this table?`,
    answer: `① He/She has math first on Monday.
② There are two English classes.`,
    hint: `表の月曜1時限目を確認する。表全体でEnglishの数を数える。`,
    explanation: `【出題意図】表を読み取り英語で答える問題。情報を正確に読み取る力を問う。【解説】①表の月曜日・1時限目はMathなので、He/She has math first on Monday.。②表全体でEnglishは月曜2時限目と火曜1時限目の2回あるので、There are two English classes.。【注意点】表の縦横（曜日と時限）を間違えずに読み取ることが重要。【関連知識】時間割の語彙:timetable、period(時限)、subject(教科)。`,
    pitfall: `月曜と火曜の列を取り違えないように、表の見出しをよく確認する。`,
    memoryTip: `表の問題は「まず何を聞かれているか(曜日か教科か数か)」を確認してから表を見る。`,
  },
  {
    id: 'chugaku2026_eigo_098',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の①〜④の文を、自然な会話になるように並べ替えなさい。

① Sure. What time shall we meet?
② Hi, Emma. Do you want to go to the park tomorrow?
③ How about 10 a.m.?
④ Hi, Tom. Sounds good.`,
    answer: `② → ④ → ① → ③`,
    hint: `誘う→応じる→時間を尋ねる→時間を提案する、の順で会話が進む。`,
    explanation: `【出題意図】自然な会話の流れを把握し文を並べ替える問題。【解説】②「Hi, Emma. Do you want to go to the park tomorrow?」で誘う→④「Hi, Tom. Sounds good.」で応じる→①「Sure. What time shall we meet?」で時間を尋ねる→③「How about 10 a.m.?」で時間を提案する、という自然な流れになる。【注意点】呼びかけ(Hi, Emma/Hi, Tom)が誰から誰への発言かを手がかりに順番を判断する。【関連知識】誘う表現:Do you want to〜?、Would you like to〜?、Shall we〜?`,
    pitfall: `①のSureが③の後に来ると、誘いに応じる前に時間の話になってしまい不自然。誘い→承諾→時間の相談という順番を意識する。`,
    memoryTip: `会話文の並べ替えは「呼びかけ(挨拶)→誘い→応答→詳細の相談」の流れを意識する。`,
  },
  {
    id: 'chugaku2026_eigo_099',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ was / it / because / stayed / home / I / raining ].（雨が降っていたので私は家にいた）
② [ tired / but / I / studied / was / I ].（私は疲れていたが勉強した）`,
    answer: `① I stayed home because it was raining.
② I was tired, but I studied.`,
    hint: `「主節, because+理由」または「理由, so+結果」の形。逆接はbutでつなぐ。`,
    explanation: `【出題意図】接続詞because/butを使った文の語順を問う整序問題。【解説】①「私は家にいた」(I stayed home)という結果の後に、「雨が降っていたので」(because it was raining)という理由を続ける。②「私は疲れていた」(I was tired)という内容の後に、逆接のbutで「しかし勉強した」(but I studied)とつなぐ。【注意点】becauseは理由を表す節を導き、becauseの後には主語+動詞の文が続く。【関連知識】理由を先に述べたい場合はBecause it was raining, I stayed home.のように文頭に置くこともできる。`,
    pitfall: `②でbutの位置を文頭に置かない。butは2つの文の間に置く接続詞。`,
    memoryTip: `because=理由の合図、but=逆の内容の合図として、後ろに続く内容を予測しながら並べる。`,
  },
  {
    id: 'chugaku2026_eigo_100',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合う単語を選びなさい。

① 静かな
② 天気
③ 着る（服を）

ア. quiet　イ. weather　ウ. wear`,
    answer: `① ア(quiet)　② イ(weather)　③ ウ(wear)`,
    hint: `quiet(静かな)とquite(かなり)、weather(天気)とwhether(〜かどうか)、wear(着る)とwhere(どこ)のつづりの違いに注意。`,
    explanation: `【出題意図】発音が似ていてつづりを間違えやすい単語の区別を問う。【解説】①「静かな」はquiet(quite「かなり」と混同しやすい)。②「天気」はweather(whether「〜かどうか」と発音が同じで混同しやすい)。③「着る」はwear(where「どこ」と発音が同じ)。【注意点】これらは発音が同じ、または似ているため、つづりと意味をセットで正確に覚える必要がある。【関連知識】同じように混同しやすい単語:hear(聞く)とhere(ここ)、write(書く)とright(正しい)。`,
    pitfall: `weatherとwhetherはどちらも発音が同じ(ウェザー)なので、文脈で意味を判断してつづりを選ぶ。`,
    memoryTip: `「wEAther=天気」はEAが天気の絵(空)を連想させると覚え、「whETHer=かどうか」と覚え分ける。`,
  },
  {
    id: 'chugaku2026_eigo_101',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の単語の反意語(意味が反対の単語)を答えなさい。

① big ⇔ (　)
② hot ⇔ (　)
③ old ⇔ (　)（「古い」の反対、「新しい」）`,
    answer: `① small　② cold　③ new`,
    hint: `それぞれの単語の意味を確認してから反対の意味を考える。`,
    explanation: `【出題意図】基本的な形容詞の反意語(対義語)を問う。【解説】①big(大きい)⇔small(小さい)。②hot(熱い)⇔cold(冷たい)。③old(古い)⇔new(新しい)。いずれも小学校〜中学英語で頻出の基本的な対義語のペア。【注意点】oldには「年をとった」という意味もあり、その場合の反意語はyoung(若い)になる点に注意(文脈で判断する)。【関連知識】他の頻出対義語:long(長い)⇔short(短い)、fast(速い)⇔slow(遅い)、easy(簡単)⇔difficult(難しい)。`,
    pitfall: `oldの反意語は文脈によってnew(新しい・物について)かyoung(若い・人について)かが変わる。`,
    memoryTip: `対義語はペアでカードのように覚えると効率的(big-small、hot-cold等)。`,
  },
  {
    id: 'chugaku2026_eigo_102',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の単語とほぼ同じ意味を表す単語を選びなさい。

① happy
② start
③ big

ア. begin　イ. large　ウ. glad`,
    answer: `① ウ(glad)　② ア(begin)　③ イ(large)`,
    hint: `happy=うれしい、start=始まる、big=大きい、それぞれの類義語を考える。`,
    explanation: `【出題意図】基本単語の類義語(同意語)を問う。【解説】①happy(うれしい)とglad(うれしい)はほぼ同じ意味。②start(始まる)とbegin(始まる)はほぼ同じ意味。③big(大きい)とlarge(大きい)はほぼ同じ意味。【注意点】類義語でも使う場面に細かい違いがある場合があるが、中学受験レベルでは「ほぼ同じ意味」として覚えておけばよい。【関連知識】他の類義語ペア:small-little(小さい)、fast-quick(速い)、happy-glad(うれしい)。`,
    pitfall: `begin/startはどちらも「始める・始まる」の意味でほぼ同じように使えることを確認する。`,
    memoryTip: `似た意味の単語をペアで覚えておくと、読解問題で言い換え表現に気づきやすくなる。`,
  },
  {
    id: 'chugaku2026_eigo_103',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで質問に答えなさい。

One day, a small dog was lost in the park. A boy named Ken found the dog. It looked hungry, so Ken gave it some food. The next day, the dog's owner came to the park and thanked Ken.

① Who found the lost dog?
② Why did Ken give the dog some food?
③ 次の日、公園で何が起こりましたか。（日本語で答えよ）`,
    answer: `① Ken found the lost dog.
② Because the dog looked hungry.
③ 犬の飼い主が公園に来て、ケンにお礼を言った。`,
    hint: `見つけた人、食べ物をあげた理由、翌日の出来事をそれぞれ本文から探す。`,
    explanation: `【出題意図】短い物語文を読み、登場人物の行動とその理由を把握する問題。【解説】①「A boy named Ken found the dog.」からKen found the lost dog.。②「It looked hungry, so Ken gave it some food.」から、犬が空腹そうに見えたことが理由→Because the dog looked hungry.。③「The next day, the dog's owner came to the park and thanked Ken.」から「犬の飼い主が公園に来て、ケンにお礼を言った」。【注意点】soは「だから」という結果を表す接続詞で、その前が理由になる。【関連知識】look+形容詞で「〜のように見える」という意味(look hungry=空腹そうに見える)。`,
    pitfall: `理由を聞かれたときは、so(だから)の前の部分に注目する。`,
    memoryTip: `「A, so B」の形は「Aだから、B」という意味なので、理由を問われたらAの部分を探す。`,
  },
  {
    id: 'chugaku2026_eigo_104',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで質問に答えなさい。

Mika wanted to make a birthday cake for her mother. She read a recipe book and bought some eggs, sugar, and flour. She practiced many times, and finally, she made a delicious cake. Her mother was very happy.

① What did Mika want to make?
② How did Mika learn to make the cake?
③ ミカのお母さんはどんな様子でしたか。（日本語で答えよ）`,
    answer: `① She wanted to make a birthday cake for her mother.
② She read a recipe book and practiced many times.
③ とても幸せそうだった（喜んでいた）。`,
    hint: `作りたかったもの、学んだ方法、お母さんの様子をそれぞれ本文から探す。`,
    explanation: `【出題意図】短い物語文を読み、目的・過程・結末を把握する問題。【解説】①「Mika wanted to make a birthday cake for her mother.」からShe wanted to make a birthday cake for her mother.。②「She read a recipe book...She practiced many times」からShe read a recipe book and practiced many times.。③「Her mother was very happy.」から「とても幸せそうだった」。【注意点】finallyは「ついに・最終的に」という意味で、努力の末に結果が出たことを表す。【関連知識】recipe(レシピ)、practice(練習する)、delicious(とてもおいしい)などの語彙も確認する。`,
    pitfall: `manyの位置(practiced many times)を「何度も練習した」と正しく訳す。`,
    memoryTip: `物語文は「目的→過程(努力)→結果」の順で書かれることが多いパターンを意識する。`,
  },
  {
    id: 'chugaku2026_eigo_105',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の手紙を読んで質問に答えなさい。

Dear Emily,

Thank you for your letter. I am happy to hear that you are coming to Japan this summer. My family and I will show you around Kyoto. Please bring warm clothes because it can be rainy in June.

See you soon,
Yumi

① What will Yumi's family do for Emily?
② Why should Emily bring warm clothes?`,
    answer: `① They will show Emily around Kyoto.
② Because it can be rainy in June.`,
    hint: `Yumiの家族がすることは「show you around」、暖かい服を持ってくる理由は「because」以降を確認する。`,
    explanation: `【出題意図】手紙形式の英文を読み、内容を正確に把握する問題。【解説】①「My family and I will show you around Kyoto.」からThey will show Emily around Kyoto.。②「Please bring warm clothes because it can be rainy in June.」から「6月は雨が降ることがあるから」→Because it can be rainy in June.。【注意点】show+人+around+場所で「(人)に(場所)を案内する」という意味。【関連知識】手紙の書き出しはDear〜,、結びはSee you soon,/Best wishes,などがよく使われる。`,
    pitfall: `rainyを「雨」とだけ訳さず、「雨が降りやすい・雨模様である」というニュアンスで理解する。`,
    memoryTip: `手紙文はDear(宛先)→本文→結びの言葉+差出人名、という決まった形を意識して読む。`,
  },
  {
    id: 'chugaku2026_eigo_106',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の掲示を読んで質問に答えなさい。

LIBRARY NOTICE
Open: Monday - Friday, 9:00 a.m. - 5:00 p.m.
Closed: Saturday, Sunday, and holidays
* Please be quiet in the library.
* You can borrow up to 5 books for two weeks.

① What time does the library close on Friday?
② How many books can you borrow?
③ 土曜日、図書館は開いていますか。（日本語で答えよ）`,
    answer: `① It closes at 5:00 p.m.
② You can borrow up to 5 books.
③ 開いていない（土曜日は休館日）。`,
    hint: `開館時間・貸出可能な冊数・休館日をそれぞれ掲示から探す。`,
    explanation: `【出題意図】掲示・案内文から必要な情報を読み取る問題。【解説】①「Open: Monday - Friday, 9:00 a.m. - 5:00 p.m.」から金曜日はIt closes at 5:00 p.m.。②「You can borrow up to 5 books for two weeks.」からYou can borrow up to 5 books.。③「Closed: Saturday, Sunday, and holidays」から土曜日は休館日→開いていない。【注意点】up to〜は「最大〜まで」という意味。【関連知識】掲示文でよく使う語彙:notice(掲示・お知らせ)、open(開いている)、closed(閉まっている)、borrow(借りる)。`,
    pitfall: `OpenとClosedの行を取り違えないよう、曜日ごとに正確に対応させて読む。`,
    memoryTip: `掲示・案内文の問題は「曜日・時間・数字」に印をつけながら読むと間違えにくい。`,
  },
  {
    id: 'chugaku2026_eigo_107',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の単語を正しい順番に並べ替えなさい。

① [ Wednesday / Monday / Tuesday ]（月曜から順に）
② [ March / January / February ]（1月から順に）`,
    answer: `① Monday, Tuesday, Wednesday
② January, February, March`,
    hint: `曜日はMonday(月)から、月はJanuary(1月)から順に並べる。`,
    explanation: `【出題意図】曜日・月の名前と正しい順番の理解を問う。【解説】①曜日の順番はMonday(月)→Tuesday(火)→Wednesday(水)。②月の順番はJanuary(1月)→February(2月)→March(3月)。【注意点】英語の曜日・月の名前はどちらも固有名詞として大文字で書き始める。【関連知識】カレンダーによってはSundayから週が始まる表記もあるが、学校の時間割等では通常Mondayから数えることが多い。`,
    pitfall: `WednesdayとTuesdayのつづりを混同しない(Wednesdayは発音とつづりが異なりやすい単語)。`,
    memoryTip: `曜日・月はいずれも頭文字を大文字にすることを忘れずに書く。`,
  },
  {
    id: 'chugaku2026_eigo_108',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英語を数字（アラビア数字）で書きなさい。

① three hundred yen
② half past seven
③ a quarter to nine`,
    answer: `① 300円
② 7時30分
③ 8時45分`,
    hint: `hundred=100、half past〜=〜時30分、a quarter to〜=〜時になる15分前(すなわち45分)。`,
    explanation: `【出題意図】値段・時刻の英語表現を数字に直す問題。【解説】①three hundred yen=300円(hundred=100)。②half past seven=7時半(7時30分)。halfは「半分」で30分を表す。③a quarter to nine=9時の15分前=8時45分。quarterは「4分の1」で15分を表し、toは「〜前」を表す。【注意点】a quarter past〜は「〜時15分」、a quarter to〜は「〜時になる15分前」で意味が逆になる点に注意。【関連知識】o'clock(ちょうど〜時)、a.m.(午前)、p.m.(午後)も合わせて確認する。`,
    pitfall: `a quarter to nineを9時15分と間違えない。toは「〜前」なので8時45分が正しい。`,
    memoryTip: `「past=過ぎ(足す)」「to=前(引く)」のイメージで時刻の計算をする。`,
  },
  {
    id: 'chugaku2026_eigo_109',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① You (　) tired today.（あなたは今日疲れているように見える）(look)
② That (　) interesting.（それはおもしろそうに聞こえる）(sound)
③ I (　) happy now.（私は今幸せだと感じる）(feel)`,
    answer: `① look　② sounds　③ feel`,
    hint: `look/sound/feel+形容詞で「〜に見える/聞こえる/感じる」という意味。主語が3人称単数のときはsをつける。`,
    explanation: `【出題意図】知覚を表す動詞look/sound/feel+形容詞の形を問う。【解説】①「You look tired.」主語Youなのでlookのまま。②「That sounds interesting.」主語Thatは3人称単数なのでsoundにsをつける→sounds。③「I feel happy.」主語Iなのでfeelのまま。【注意点】これらの動詞の後には形容詞を置く(副詞ではない)。lookの後にlikeを入れる場合は名詞が続く(look like a doctor)。【関連知識】taste(味がする)、smell(においがする)も同じグループの動詞。`,
    pitfall: `soundsのsを忘れない。主語Thatは3人称単数として扱う。`,
    memoryTip: `look/sound/feel/taste/smell+形容詞の「五感グループ」としてまとめて覚える。`,
  },
  {
    id: 'chugaku2026_eigo_110',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適語を入れなさい。

① 私はカナダを訪れたいです。（丁寧な言い方）
  I (　) (　) (　) visit Canada.
② 何か飲み物はいかがですか。
  (　) you (　) something to drink?`,
    answer: `① would like to　② Would, like`,
    hint: `I would like to〜=「〜したいです」（wantより丁寧）。Would you like〜?=「〜はいかがですか」。`,
    explanation: `【出題意図】丁寧な表現would like to/Would you like〜?を問う。【解説】①「〜したいです」を丁寧に言うときはI would like to+動詞の原形→would like to visit。②「〜はいかがですか」と相手に勧めるときはWould you like+名詞?→Would you like something to drink?。【注意点】would likeはwant toよりも丁寧な響きになるため、目上の人やフォーマルな場面でよく使われる。【関連知識】I'd like to〜(would likeの短縮形)もよく使われる。`,
    pitfall: `I would like to visitingのように、toの後を動名詞にしない。would like toの後は動詞の原形。`,
    memoryTip: `「want to=したい(普通)」「would like to=したいです(丁寧)」とセットで覚える。`,
  },
  {
    id: 'chugaku2026_eigo_111',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の電話での会話を読んで、（　）に適切な文を選びなさい。

A: Hello, this is Mike. (　)
B: Sorry, she's out now. Can I take a message?
A: Yes, please tell her I will call again later.

① May I speak to Lisa, please?
② What is your name?
③ How is the weather there?
④ Do you like pizza?`,
    answer: `① May I speak to Lisa, please?`,
    hint: `Bの返答「彼女は今外出しています」から、AがLisaに電話をつないでほしいと頼んだとわかる。`,
    explanation: `【出題意図】電話での基本的な会話表現(取り次ぎを頼む)を問う。【解説】Bが「Sorry, she's out now.」（すみません、彼女は今外出しています）と答えているので、Aは「Lisaさんはいらっしゃいますか」とLisaへの取り次ぎを頼んだとわかる→May I speak to Lisa, please?。②〜④は文脈に合わない。【注意点】May I speak to〜, please?は電話で人を呼び出すときの丁寧な決まり文句。【関連知識】電話表現:This is 〜speaking.(私は〜です)、Can I take a message?(伝言を承りましょうか)、I'll call back later.(後でかけ直します)。`,
    pitfall: `②What is your name?は自分の名前を名乗った直後には不自然な質問であり、文脈に合わない。`,
    memoryTip: `電話の決まり文句「May I speak to〜, please?」を丸ごと覚える。`,
  },
  {
    id: 'chugaku2026_eigo_112',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の質問に、あなた自身のこととして英語で答えなさい。（15語以上）

Question: What do you want to do this summer? And why?

（I want to で書き始めること）`,
    answer: `（解答例）I want to go to the sea with my family this summer. Because swimming in the sea is a lot of fun for me.（22語）

（別解）I want to read many books this summer. Because I like stories about animals and adventures.（16語）`,
    hint: `I want to+動詞の原形で「〜したい」を書き、Becauseで理由を続ける。15語以上になるよう文を工夫する。`,
    explanation: `【出題意図】自分の考えを英語でまとめる自由英作文。「したいこと」と「理由」を書く構成力を問う。【解説】まずI want to+動詞の原形で「したいこと」を明確に述べ、次にBecause〜で理由を書く。解答例では「海に行きたい、なぜなら泳ぐのが楽しいから」「本を読みたい、なぜなら動物や冒険の物語が好きだから」のように、したいことと理由を具体的に結びつけている。【注意点】語数(15語以上)を満たすため、理由の部分も具体的に書くとよい。文法ミス(3単現・時制)がないか最後に見直す。【関連知識】理由を書くときはbecause、目的を書くときはto〜(不定詞)も使える(例:to have fun with my family)。`,
    pitfall: `I want to doとだけ書いて理由を書き忘れると、設問の「why」に答えたことにならない。`,
    memoryTip: `「したいこと(I want to〜)+理由(Because〜)」の2文構成をテンプレートとして覚える。`,
  },
  {
    id: 'chugaku2026_eigo_113',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文と表を読んで質問に答えなさい。

Emi is planning a weekend with her friends. Look at the plan below.

| Day | Activity | Time |
|---|---|---|
| Saturday | Shopping | 10:00 a.m. |
| Saturday | Movie | 2:00 p.m. |
| Sunday | Picnic | 11:00 a.m. |

Emi and her friends will go shopping first, and then they will watch a movie in the afternoon. On Sunday, they are going to have a picnic in the park.

① What will Emi do at 2:00 p.m. on Saturday?
② What are they going to do on Sunday?
③ 土曜日にエミたちが最初にすることは何ですか。（日本語で答えよ）`,
    answer: `① She will watch a movie.
② They are going to have a picnic in the park.
③ 買い物（ショッピング）。`,
    hint: `表の時刻とactivityの対応を確認し、本文の説明と照らし合わせて答える。`,
    explanation: `【出題意図】表と英文をあわせて読み、時系列に沿った予定を正確に把握する問題。【解説】①表の土曜日2:00 p.m.の欄がMovieであり、本文にも「they will watch a movie in the afternoon」とあるのでShe will watch a movie.。②表の日曜日の欄がPicnicで、本文にも「they are going to have a picnic in the park」とあるのでThey are going to have a picnic in the park.。③本文「Emi and her friends will go shopping first」と表の土曜日10:00 a.m.の欄Shoppingから、最初にすることは「買い物」。【注意点】表だけでなく本文の説明も必ず両方確認し、矛盾がないかチェックする。【関連知識】will/be going toはどちらも未来の予定を表す表現として使われている。`,
    pitfall: `表だけを見て土曜日のMovieを先にすることだと誤解しないよう、本文の「first」という語に注目して順番を確認する。`,
    memoryTip: `表とセットの読解問題は「表→本文→設問」の順に照らし合わせて情報を確定させる。`,
  },
];
