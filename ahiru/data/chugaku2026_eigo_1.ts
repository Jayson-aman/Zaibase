import type { Question } from './questions';

export const chugaku2026Eigo1: Question[] = [
  // ============================================================
  // Q001–Q010: 基礎（difficulty: 'basic'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_001',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切なbe動詞を入れなさい。

① I (　) a student.
② She (　) happy.
③ We (　) friends.`,
    answer: '① am　② is　③ are',
    hint: '主語がI→am、3人称単数→is、複数→areを使う。',
    explanation:
      '【何を聞かれているか】\nbe動詞（am/is/are）を、主語に合わせて空欄に入れる問題。\n\n【なぜ主語によってbe動詞が変わるのか】\nbe動詞は、主語の人称・数によって形が変わるという決まりがある。\n\n【ポイント1】主語Iを確認する\n主語がIのときはam。\n\n【ポイント2】三人称単数を確認する\n主語が三人称単数（She, He, Itや名前など1人・1つ）のときはis。\n\n【ポイント3】複数を確認する\n主語が複数（We, They, 名詞の複数形など）のときはare。\n\n【答え】\n① am　② is　③ are\n\n【確かめ】\n①I→am、②She→is、③We→areが、それぞれ主語と正しく対応しているか確認する。\n\n【よくあるまちがい】\n"I is a student."のように、amとisを混同してしまうミス。主語がIのときは必ずam。\n\n【ここが絶対】\n「I am、You are、He/She/It is、We/You/They are」の対応を、声に出してセットで覚える。',
    pitfall: 'I is a student.のようにamとisを混同しないこと。主語がIのときは必ずam。',
    memoryTip: '「I am、You are、He/She/It is、We/You/They are」の順で声に出して覚える。',
  },
  {
    id: 'chugaku2026_eigo_002',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を否定文にしなさい。

① I am busy. → I (　) busy.
② He is a teacher. → He (　) a teacher.`,
    answer: "① am not　② is not (isn't)",
    hint: 'be動詞の否定文はbe動詞のすぐ後ろにnotを置く。',
    explanation:
      '【何を聞かれているか】\nbe動詞を使った2つの文を否定文にする問題。\n\n【なぜbe動詞の直後にnotを置くのか】\nbe動詞の否定文は、be動詞の直後にnotを置くだけで作れるという決まりがある。一般動詞のようにdo/doesは使わない。\n\n【ポイント1】否定文の作り方を確認する\nbe動詞＋not。①"I am not busy."、②"He is not (isn\'t) a teacher."\n\n【ポイント2】am notの短縮形を確認する\namとnotをつなげた短縮形（amn\'t）は存在せず、"I\'m not"という別の短縮形を使う。\n\n【ポイント3】isn\'t/aren\'tの短縮形を確認する\nis notはisn\'t、are notはaren\'tと短縮できる。\n\n【答え】\n① am not　② is not (isn\'t)\n\n【確かめ】\nbe動詞の直後にnotが置かれていて、do/doesが使われていないことを確認する。\n\n【よくあるまちがい】\n"I don\'t am busy."のように、do notを使ってしまうミス。be動詞の否定文にはdo/doesは不要。\n\n【ここが絶対】\n「be動詞＋not」でOK。一般動詞の否定文（do/does not）とは作り方が違うことをセットで覚える。',
    pitfall: "I don't am busy.のようにdon'tを使わない。be動詞の否定文にdoは不要。",
    memoryTip: '「be動詞+not」でOK。一般動詞と違ってdo/doesは使わない。',
  },
  {
    id: 'chugaku2026_eigo_003',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）内の動詞を正しい形にしなさい。

① She (play) tennis every Sunday.
② My father (work) at a hospital.
③ I (like) dogs.`,
    answer: '① plays　② works　③ like',
    hint: '主語が3人称単数（she, my fatherなど）で現在の文のときは動詞に-s/-esをつける。',
    explanation: `【出題意図】一般動詞の現在形における3人称単数現在（3単現）のsを問う。【解説】主語が3人称単数（he, she, it、または1人の人名など）で現在の習慣を表すとき、動詞の語尾に-s（またはes）をつける。①She plays、②My father works。③主語IはIなので3単現のsはつけない→like。【注意点】3単現のsは「主語が3人称・単数・現在形」の3つがそろったときだけつく。過去形や主語がIやweのときはつけない。【関連知識】語尾がo, s, sh, ch, xで終わる動詞はesをつける（go→goes, wash→washes）。`,
    pitfall: 'I likesのようにIに3単現のsをつけない。主語Iは3人称単数ではない。',
    memoryTip: '「3人称・単数・現在（3・単・現）」の3条件がそろったときだけsをつける。',
  },
  {
    id: 'chugaku2026_eigo_004',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を疑問文に書き換えなさい。

① You like music. → (　) you like music?
② She plays the piano. → (　) she play the piano?`,
    answer: '① Do　② Does',
    hint: '主語が3人称単数のときはDoes、それ以外はDoを使う。動詞は原形に戻す。',
    explanation:
      '【何を聞かれているか】\n一般動詞の文を、Do/Doesを使った疑問文に書き換える問題。\n\n【なぜDoとDoesを使い分けるのか】\n主語が三人称単数のときはDoes、それ以外（I/you/we/theyなど）のときはDoを使うという決まりがある。\n\n【ポイント1】①主語Youを確認する\nYouは三人称単数ではないので、Doを使う。"Do you like music?"。\n\n【ポイント2】②主語Sheを確認する\nSheは三人称単数なので、Doesを使う。"Does she play the piano?"。\n\n【ポイント3】動詞が原形に戻ることを確認する\nDoesを使ったときは、動詞から3単現のsを取り、原形に戻す（plays→play）。\n\n【答え】\n① Do　② Does\n\n【確かめ】\n②で"Does she play"のように、playからsが取れて原形になっているか確認する。\n\n【よくあるまちがい】\n"Does she plays the piano?"のように、Doesとplaysの両方に三人称単数の印をつけてしまうミス。\n\n【ここが絶対】\n「Do/Doesが前に出たら動詞は原形に戻る」というルールをセットで覚える。',
    pitfall: 'Does she plays the piano?のようにDoesとplaysを両方につけない。sは一度だけ。',
    memoryTip: '「Do/Doesが前に出たら動詞は原形に戻る」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_005',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を否定文にしなさい。

① I play soccer. → I (　) (　) soccer.
② He likes cats. → He (　) (　) cats.`,
    answer: "① do not (don't) play　② does not (doesn't) like",
    hint: '一般動詞の否定文はdo not / does notを動詞の前に置き、動詞は原形にする。',
    explanation: `【出題意図】一般動詞の否定文の作り方を問う。【解説】一般動詞の否定文はdon't（do not）またはdoesn't（does not）を動詞の前に置く。①主語I→don't play。②主語He（3人称単数）→doesn't like（likesのsが取れる）。【注意点】doesn'tを使ったときは動詞は原形に戻す。He doesn't likesとはしない。【関連知識】be動詞の否定文（be+not）とは形が異なるので混同しないよう注意。`,
    pitfall: "He doesn't likes cats.は誤り。doesn'tの後は動詞の原形。",
    memoryTip: "「don't/doesn'tの後ろは必ず動詞の原形」と唱えて覚える。",
  },
  {
    id: 'chugaku2026_eigo_006',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な疑問詞を入れなさい。

① (　) is this? — It's a pen.
② (　) is that boy? — He is Tom.`,
    answer: '① What　② Who',
    hint: 'ものを尋ねるときはWhat、人を尋ねるときはWho。',
    explanation: `【出題意図】疑問詞What（もの・こと）とWho（人）の基本的な使い分けを問う。【解説】①答えがIt's a pen.（もの）なのでWhatを使う。②答えがHe is Tom.（人）なのでWhoを使う。【注意点】疑問詞は文の一番前に置く。答え方から逆に疑問詞を判断する練習をするとよい。【関連知識】What is this?（これは何ですか）、Who is that?（あの人は誰ですか）はどちらも会話の基本表現。`,
    pitfall: "Who is this? — It's a pen.のように、ものについてWhoを使わない。",
    memoryTip: '「もの→What、人→Who」とシンプルに覚える。',
  },
  {
    id: 'chugaku2026_eigo_007',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の名詞を複数形にしなさい。

① book →(　)
② box →(　)
③ city →(　)
④ child →(　)`,
    answer: '① books　② boxes　③ cities　④ children',
    hint: '通常は-s、s/x/ch/sh語尾は-es、子音+yはyをiに変えてes、不規則変化もある。',
    explanation:
      '【何を聞かれているか】\nbook・box・city・childという4つの名詞を、正しい複数形にする問題。\n\n【なぜ複数形の作り方が単語ごとに違うのか】\n名詞の語尾の形によって、複数形の作り方（-s、-es、yをiに変えてes、不規則変化）が決まっている。\n\n【ポイント1】通常の複数形を確認する\nbook→books（そのまま-s）。\n\n【ポイント2】語尾がs/x/ch/shの複数形を確認する\nbox→boxes（-esをつける）。\n\n【ポイント3】子音字+yと不規則変化を確認する\ncity→cities（yをiに変えて-es）、child→children（不規則変化）。\n\n【答え】\n① books　② boxes　③ cities　④ children\n\n【確かめ】\n③のcityがcitysではなくcitiesになっていること、④のchildがchildrenという不規則な形になっていることを確認する。\n\n【よくあるまちがい】\n"citys"のように、子音字+yで終わる単語にそのまま-sをつけてしまうミス。\n\n【ここが絶対】\n「s/x/ch/sh→es」「子音+y→iに変えてes」「不規則は丸暗記」という3パターンで名詞の複数形を整理する。',
    pitfall: 'citysとするのは誤り。子音+yはyをiに変える。',
    memoryTip: '「s/x/ch/sh→es」「子音+y→iに変えてes」「不規則は丸暗記」の3パターンで整理。',
  },
  {
    id: 'chugaku2026_eigo_008',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の英語が表す曜日・月を日本語で答えなさい。

① Wednesday
② Saturday
③ April
④ September`,
    answer: '① 水曜日　② 土曜日　③ 4月　④ 9月',
    hint: '曜日はSunday(日)から始まり7つ、月はJanuary(1月)から始まり12個ある。',
    explanation:
      '【何を聞かれているか】\nWednesday・Saturday・April・Septemberという英語が表す曜日・月を日本語で答える問題。\n\n【なぜ曜日・月を正確に覚える必要があるのか】\n曜日（Sunday〜Saturdayの7つ）と月（January〜Decemberの12個）は、それぞれ決まった順番で並んでおり、日常会話や日付表現で頻繁に使われる基本語彙。\n\n【ポイント1】曜日を確認する\nWednesday＝水曜日、Saturday＝土曜日。\n\n【ポイント2】月を確認する\nApril＝4月、September＝9月。\n\n【ポイント3】大文字のルールを確認する\n曜日・月の最初の文字は必ず大文字にする。\n\n【答え】\n① 水曜日　② 土曜日　③ 4月　④ 9月\n\n【確かめ】\nそれぞれの単語が曜日・月のどちらに属し、日本語で何を指すか正しく対応しているか確認する。\n\n【よくあるまちがい】\n曜日・月の頭文字を小文字で書いてしまうミス（april→April）。\n\n【ここが絶対】\n曜日はSun-Mon-Tue-Wed-Thu-Fri-Satの順、月はJanuaryから始まりDecemberまでの12か月という順番をセットで覚える。',
    pitfall: '曜日・月の頭文字を小文字で書かないよう注意（april→April）。',
    memoryTip: '曜日はSun-Mon-Tue-Wed-Thu-Fri-Satの順で歌のように覚えると忘れにくい。',
  },
  {
    id: 'chugaku2026_eigo_009',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を選びなさい。

① (　) is my bag.（近くにある1つのかばんを指して）
  ア. This　イ. These
② (　) are my shoes.（近くにある靴を指して）
  ア. This　イ. These
③ (　) is a mountain over there.（遠くにある1つの山を指して）
  ア. That　イ. Those`,
    answer: '① ア(This)　② イ(These)　③ ア(That)',
    hint: '近い・単数→This、近い・複数→These、遠い・単数→That、遠い・複数→Those。',
    explanation: `【出題意図】指示代名詞This/These/That/Thoseの使い分けを問う。【解説】近くのものを指すとき、単数はThis、複数はThese。遠くのものを指すとき、単数はThat、複数はThose。①近くの1つのかばん→This。②近くの複数の靴→These。③遠くの1つの山→That。【注意点】This/Thatに続くbe動詞はis、These/Thoseに続くbe動詞はare。【関連知識】These are my shoes.のshoesはもともと2つで1組のため常に複数形で使う（他の例：glasses, pants）。`,
    pitfall: 'This are my shoes.のようにThisとareを組み合わせない。単数・複数とbe動詞を一致させる。',
    memoryTip: '「近い・遠い」×「単数・複数」の4マスで整理すると覚えやすい。',
  },
  {
    id: 'chugaku2026_eigo_010',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の日本語に合うように（　）に適切な語を入れなさい。

① 開けなさい。（ドアを）
  (　) the door.
② 静かにしなさい。
  (　) quiet.
③ ここで走ってはいけません。
  (　) run here.`,
    answer: "① Open　② Be　③ Don't",
    hint: '命令文は動詞の原形（またはBe+形容詞）で始める。禁止はDon\'tを使う。',
    explanation: `【出題意図】命令文の基本形（肯定・be動詞・否定）を問う。【解説】①「開けなさい」は動詞の原形Openで文を始める。②「静かにしなさい」はbe動詞を使う命令文なのでBe quiet.となる。③「〜してはいけません」という禁止はDon't+動詞の原形で表す。【注意点】命令文では主語Youを省略する。pleaseをつけると丁寧な言い方になる。【関連知識】Let's〜.（〜しましょう）は「一緒に〜しよう」と誘う表現で、命令文の仲間として覚えておくとよい。`,
    pitfall: 'Opens the door.のように動詞に-sをつけない。命令文の動詞は必ず原形。',
    memoryTip: "「動詞の原形で始める」「be動詞のときはBe」「禁止はDon't」の3パターンを覚える。",
  },

  // ============================================================
  // Q011–Q027: 標準（difficulty: 'standard'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_011',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な形を入れなさい。（　）内は動詞の原形。

① I (　) (　) TV now. (watch)
② She (　) (　) a letter now. (write)`,
    answer: '① am watching　② is writing',
    hint: '現在進行形はbe動詞+動詞のing形。writeのようにeで終わる動詞はeを取ってing。',
    explanation: `【出題意図】現在進行形（be動詞+動詞-ing）の作り方を問う。【解説】①主語I→am watching（watch+ing）。②主語She→is writing。writeはeで終わる動詞なのでeを取ってingをつける(write→writing)。【注意点】ing形の作り方には、そのままing（watch→watching）、eを取ってing（write→writing）、最後の文字を重ねてing（run→running）の3パターンがある。【関連知識】現在進行形は「今まさに行っている動作」を表す。know, like, wantなどの状態動詞は基本的に進行形にしない。`,
    pitfall: 'writeingとつづらないこと。eを取ってwritingとする。',
    memoryTip: 'ing形3パターン：①そのままing②eを取ってing③最後の文字を重ねてing。',
  },
  {
    id: 'chugaku2026_eigo_012',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を（　）内の指示にしたがって書き換えなさい。

① She is cooking dinner. （疑問文に）
② They are playing soccer. （否定文に）`,
    answer: "① Is she cooking dinner?　② They are not (aren't) playing soccer.",
    hint: '進行形の疑問文はbe動詞を主語の前に出す。否定文はbe動詞の後にnotを置く。',
    explanation: `【出題意図】現在進行形の疑問文・否定文の作り方を問う。【解説】①be動詞isを主語sheの前に出してIs she cooking dinner?とする。②be動詞areの後ろにnotを置いてThey are not (aren't) playing soccer.とする。【注意点】進行形の疑問文・否定文はbe動詞を使うので、be動詞の疑問文・否定文と同じルールが使える（do/doesは使わない）。【関連知識】答え方：Yes, she is. / No, she isn't.のようにbe動詞で答える。`,
    pitfall: 'Does she is cooking dinner?のようにdoesを付け加えない。進行形はbe動詞だけで疑問文にする。',
    memoryTip: '進行形の疑問文・否定文は「be動詞を動かすだけ」でdo/doesは登場しない。',
  },
  {
    id: 'chugaku2026_eigo_013',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の動詞を過去形にしなさい。

① play →(　)
② study →(　)
③ stop →(　)`,
    answer: '① played　② studied　③ stopped',
    hint: '通常は-ed、子音+yはyをiに変えてed、短母音+子音1字は子音を重ねてed。',
    explanation:
      '【何を聞かれているか】\nplay・study・stopという3つの動詞を、正しい過去形にする問題。\n\n【なぜ過去形の作り方が動詞ごとに違うのか】\n動詞の語尾の形によって、過去形の作り方（そのまま-ed、yをiに変えてed、子音を重ねてed）が決まっている。\n\n【ポイント1】通常の過去形を確認する\nplay→played（そのまま-ed）。\n\n【ポイント2】子音字+yの過去形を確認する\nstudy→studied（yをiに変えて-ed）。\n\n【ポイント3】短母音+子音1字の過去形を確認する\nstop→stopped（最後の子音を重ねて-ed）。\n\n【答え】\n① played　② studied　③ stopped\n\n【確かめ】\n①のplayが母音+yで終わるためそのまま-edがついていること、③のstopが子音を重ねてstoppedになっていることを確認する。\n\n【よくあるまちがい】\nplayedを"plaied"と書いてしまうミス。母音字+yで終わる動詞はyをiに変えず、そのまま-edをつける。\n\n【ここが絶対】\n「そのままed」「子音+y→ied」「短母音+子音字1つ→子音を重ねてed」という3パターンで過去形を整理する。',
    pitfall: 'playedをplaiedと書かない。母音+yはそのまま-edをつける。',
    memoryTip: '「そのままed」「子音+y→ied」「短母音+子音字1つ→子音を重ねてed」の3パターン。',
  },
  {
    id: 'chugaku2026_eigo_014',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の動詞を過去形にしなさい。

① go →(　)
② have →(　)
③ see →(　)
④ eat →(　)`,
    answer: '① went　② had　③ saw　④ ate',
    hint: '不規則動詞は形が大きく変わるので1つずつ覚える必要がある。',
    explanation:
      '【何を聞かれているか】\ngo・have・see・eatという4つの不規則動詞を、正しい過去形にする問題。\n\n【なぜ-edをつけずに形が変わるのか】\nこれらの動詞は不規則動詞で、-edをつける規則変化ではなく、それぞれ特別な形に変化するため、1つずつ覚える必要がある。\n\n【ポイント1】goとhaveの過去形を確認する\ngo→went、have→had。\n\n【ポイント2】seeとeatの過去形を確認する\nsee→saw、eat→ate。\n\n【ポイント3】不規則動詞のグループを確認する\ncome→came、make→made、get→got、take→took、do→didも同じように不規則変化する頻出動詞。\n\n【答え】\n① went　② had　③ saw　④ ate\n\n【確かめ】\nそれぞれの過去形が、-edをつけた規則変化になっていないことを確認する。\n\n【よくあるまちがい】\n"goed"や"eated"のように-edをつけてしまうミス。不規則動詞には規則がなく、それぞれ暗記する必要がある。\n\n【ここが絶対】\n「go-went-gone」のように、不規則動詞の過去形・過去分詞形をセットで声に出して覚える。',
    pitfall: 'goedやeatedのように-edをつけないこと。不規則動詞には規則がない。',
    memoryTip: '「go-went-gone」のように過去形・過去分詞形をセットで声に出して覚える。',
  },
  {
    id: 'chugaku2026_eigo_015',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を疑問文にしなさい。

You watched the movie yesterday.
→ (　) you (　) the movie yesterday?`,
    answer: 'Did you watch the movie yesterday?',
    hint: '過去形の疑問文はDidを文頭に置き、動詞は原形に戻す。',
    explanation:
      '【何を聞かれているか】\n"You watched the movie yesterday."という文を疑問文にする問題。\n\n【なぜDidを文頭に置くのか】\n過去の疑問文は、文頭にDidを置き、動詞を原形に戻すという決まった形を取る。\n\n【ポイント1】過去の疑問文の公式を確認する\nDid＋主語＋動詞の原形〜?\n\n【ポイント2】動詞を原形に戻すことを確認する\nwatchedはDidがすでに過去を表しているので、原形watchに戻す。\n\n【ポイント3】文を組み立てる\n"Did you watch the movie yesterday?"＝「あなたは昨日その映画を見ましたか」。\n\n【答え】\nDid you watch the movie yesterday?\n\n【確かめ】\nDidの後ろの動詞がwatch（原形）になっていて、watched（過去形）になっていないことを確認する。\n\n【よくあるまちがい】\n"Did you watched the movie?"のように、Didと過去形の両方を使ってしまうミス。Didを使ったら動詞は必ず原形にする。\n\n【ここが絶対】\n「Didが出たら動詞は原形」と唱えて、過去の疑問文の形をセットで覚える。',
    pitfall: 'Did you watched the movie?のようにDidと過去形を両方使わない。',
    memoryTip: '「Didが出たら動詞は原形」と唱えて覚える。',
  },
  {
    id: 'chugaku2026_eigo_016',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の文を否定文にしなさい。

She went to school yesterday.
→ She (　) (　) to school yesterday.`,
    answer: "did not (didn't) go",
    hint: "過去形の否定文はdidn'tを動詞の前に置き、動詞は原形にする。",
    explanation:
      '【何を聞かれているか】\n"She went to school yesterday."という文を否定文にする問題。\n\n【なぜdidn\'tの後ろで動詞を原形に戻すのか】\n過去の否定文はdidn\'t（did not）を動詞の前に置き、過去を表す働きはdidn\'tが担うので、動詞は原形に戻すという決まりがある。\n\n【ポイント1】過去の否定文の公式を確認する\n主語＋did not（didn\'t）＋動詞の原形〜。\n\n【ポイント2】wentを原形goに戻すことを確認する\n"She didn\'t go to school yesterday."のように、wentをgoに戻す。\n\n【ポイント3】be動詞の否定文との違いを確認する\nbe動詞の過去の否定文はwasn\'t/weren\'tを使い、didn\'tは使わない。\n\n【答え】\ndid not (didn\'t) go\n\n【確かめ】\n"didn\'t"の後ろが原形goになっていて、went（過去形）になっていないことを確認する。\n\n【よくあるまちがい】\n"She didn\'t went to school."のように、didn\'tと過去形の両方を使ってしまうミス。\n\n【ここが絶対】\n「didn\'tの後ろは動詞の原形」と、don\'t/doesn\'tと同じルールで覚える。',
    pitfall: "She didn't went to school.は誤り。didn'tの後は原形go。",
    memoryTip: "「didn'tの後ろは動詞の原形」とdon't/doesn'tと同じルールで覚える。",
  },
  {
    id: 'chugaku2026_eigo_017',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な疑問詞を入れなさい。

① (　) do you live? — I live in Tokyo.
② (　) is your birthday? — It's May 3rd.
③ (　) did you cry? — Because I lost my dog.
④ (　) do you go to school? — By bus.`,
    answer: '① Where　② When　③ Why　④ How',
    hint: '場所→Where、時→When、理由→Why、方法・手段→How。',
    explanation: `【出題意図】基本疑問詞（Where/When/Why/How）の使い分けを問う。【解説】①答えがin Tokyo（場所）なのでWhere。②答えがMay 3rd（日付・時）なのでWhen。③答えがBecause〜（理由）なのでWhy。④答えがBy bus（手段）なのでHow。【注意点】Whyに対する答えはBecause〜（なぜなら）で始めることが多い。【関連知識】Howには他にもHow old（年齢）、How many（数）、How much（量・値段）などの応用表現がある。`,
    pitfall: '手段を尋ねるのにWhatを使わない。手段・方法はHowを使う。',
    memoryTip: '「場所→Where、時→When、理由→Why、方法→How」と語呂で覚える。',
  },
  {
    id: 'chugaku2026_eigo_018',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

(　) pen is this? — It's Ken's pen.`,
    answer: 'Whose',
    hint: '「誰の」と持ち主を尋ねるときはWhose+名詞を使う。',
    explanation: `【出題意図】疑問詞Whose（誰の）の使い方を問う。【解説】持ち主を尋ねるときはWhose+名詞の形にする。Whose pen is this?（これは誰のペンですか）。答えはIt's Ken's pen.（それはケンのペンです）のように「人の名前+'s」で表す。【注意点】WhoseとWho's（Who isの短縮形）は発音が同じだが意味が違うので混同しないこと。【関連知識】所有を表す表現：This pen is Ken's.（このペンはケンのものです）のようにKen'sだけで「ケンのもの」という意味にもなる。`,
    pitfall: 'Who pen is this?のようにWhoseの代わりにWhoを使わない。',
    memoryTip: "Whose=「誰の」+名詞、Who's=Who is（「誰が〜ですか」）と発音は同じだが区別して覚える。",
  },
  {
    id: 'chugaku2026_eigo_019',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

(　) do you like better, tea or coffee? — I like tea better.`,
    answer: 'Which',
    hint: '2つのうちどちらかを選ばせるときはWhichを使う。',
    explanation:
      '【何を聞かれているか】\n"(　) do you like better, tea or coffee?"の空欄に入る、正しい疑問詞を答える問題。\n\n【なぜWhichを使うのか】\n"tea or coffee"のように、2つ（またはいくつか）の中から選ばせるときは、選ぶ範囲が決まっている疑問詞Whichを使う。\n\n【ポイント1】"Which do you like better, A or B?"の形を確認する\n「AとBどちらが好きですか」という2択をたずねる決まった表現。\n\n【ポイント2】whatとの違いを確認する\nWhatは範囲を限定せずに広く尋ねるとき、Whichは選択肢が決まっているときに使う。\n\n【ポイント3】答え方を確認する\n"I like tea better."（お茶の方が好きです）のように、betterを使って答える。\n\n【答え】\nWhich\n\n【確かめ】\n"A or B"という選択肢が示されていることから、Whichが正しく選ばれているか確認する。\n\n【よくあるまちがい】\n"What do you like better, tea or coffee?"のようにWhatを使ってしまうミス。選択肢が示されているのでWhichが適切。\n\n【ここが絶対】\n"A or B"と選択肢が示されていたらWhichを選ぶサインだと覚えておく。',
    pitfall: 'What do you like better, tea or coffee?のようにWhatを使うと不自然。選択肢が示されているのでWhichが適切。',
    memoryTip: '「A or B」と選択肢が示されていたらWhichを選ぶサイン。',
  },
  {
    id: 'chugaku2026_eigo_020',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① I (　) swim very well.（私はとても上手に泳ぐことができる）
② (　) you help me?（手伝ってもらえますか）`,
    answer: '① can　② Can',
    hint: '「〜できる」はcan+動詞の原形。依頼するときもCan you〜?を使う。',
    explanation: `【出題意図】助動詞canの基本的な使い方（能力・依頼）を問う。【解説】①「泳ぐことができる」という能力を表すのでcan swim。②「手伝ってもらえますか」という依頼を表すのでCan you help me?。canの後ろは必ず動詞の原形。【注意点】canは主語が何であっても形が変わらない（3単現のsはつけない：He can swims.は誤り）。【関連知識】Could you〜?はCan you〜?よりも丁寧な依頼表現。`,
    pitfall: 'He can swims very well.のようにcanの後の動詞に-sをつけない。',
    memoryTip: '「can/could/will/mustなどの助動詞の後ろは必ず動詞の原形」とまとめて覚える。',
  },
  {
    id: 'chugaku2026_eigo_021',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な前置詞を入れなさい。

① My birthday is (　) July.
② I get up (　) seven o'clock.
③ We have a school festival (　) October 10th.`,
    answer: '① in　② at　③ on',
    hint: '月→in、時刻→at、日付→on。',
    explanation:
      '【何を聞かれているか】\n月・時刻・日付という3つの異なる時の表現に、正しい前置詞（in/at/on）を入れる問題。\n\n【なぜin/at/onを使い分けるのか】\n時を表す前置詞は、対象の範囲の広さによって使い分ける。月・年（広い）はin、時刻（点）はat、日付（1日）はonを使う。\n\n【ポイント1】①月を確認する\n"My birthday is in July."（月にはinを使う）。\n\n【ポイント2】②時刻を確認する\n"I get up at seven o\'clock."（時刻にはatを使う）。\n\n【ポイント3】③日付を確認する\n"We have a school festival on October 10th."（日付にはonを使う）。\n\n【答え】\n① in　② at　③ on\n\n【確かめ】\n月にin、時刻にat、日付にonがそれぞれ正しく使われているか確認する。\n\n【よくあるまちがい】\n"at July"や"on seven"のように、組み合わせを間違えてしまうミス。\n\n【ここが絶対】\n「年月→in、日付・曜日→on、時刻→at」という前置詞の使い分けをセットで暗記する。',
    pitfall: 'at Julyやon sevenのように組み合わせを間違えないこと。月→in、時刻→atを固定して覚える。',
    memoryTip: '「年月→in、日付・曜日→on、時刻→at」とセットで暗記する。',
  },
  {
    id: 'chugaku2026_eigo_022',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な前置詞を入れなさい。

① The cat is (　) the box.（箱の中に）
② The book is (　) the desk.（机の上に）
③ There is a picture (　) the wall.（壁に）`,
    answer: '① in　② on　③ on',
    hint: '中→in、接している面の上→on。',
    explanation: `【出題意図】場所を表す前置詞in/onの基本的な使い分けを問う。【解説】①箱の「中」にいるのでin the box。②机の「上」（接している）にあるのでon the desk。③壁に「貼りついている」状態なのでon the wall。【注意点】onは「上に接している」という意味なので、壁や天井のように必ずしも水平でない面でも使える。【関連知識】under（下に）、near（近くに）、between（の間に）、in front of（の前に）なども合わせて覚える。`,
    pitfall: 'There is a picture in the wall.は誤り。壁に接しているのでonを使う。',
    memoryTip: '「in=中、on=接している面の上」というイメージで覚える。',
  },
  {
    id: 'chugaku2026_eigo_023',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れなさい。

① (　) a park near my house.
② (　) two dogs in the yard.`,
    answer: '① There is　② There are',
    hint: '直後の名詞が単数→There is、複数→There are。',
    explanation:
      '【何を聞かれているか】\nThere is/are構文を、後ろに続く名詞の数に合わせて完成させる問題。\n\n【なぜ後ろの名詞で使い分けるのか】\nThere is/are構文のbe動詞は、後ろに続く名詞（実質的な主語）の数に合わせて選ぶという決まりがある。\n\n【ポイント1】①単数を確認する\n"a park"（1つの公園）は単数なのでThere is。\n\n【ポイント2】②複数を確認する\n"two dogs"（2匹の犬）は複数なのでThere are。\n\n【ポイント3】"There is/are〜"の意味を確認する\n「〜がある/いる」と存在を表すときに使う構文。\n\n【答え】\n① There is　② There are\n\n【確かめ】\n①の後ろがa park（単数）、②の後ろがtwo dogs（複数）になっていることを確認する。\n\n【よくあるまちがい】\n名詞の数とbe動詞を一致させ忘れ、"There are a park〜"のようにしてしまうミス。\n\n【ここが絶対】\n「be動詞は後ろの名詞に合わせる」というThere is/are構文の基本ルールを覚える。',
    pitfall: 'There are a park near my house.のように名詞の数とbe動詞を一致させ忘れない。',
    memoryTip: '「be動詞は後ろの名詞に合わせる」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_024',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の形容詞を比較級にしなさい。

① tall →(　)
② big →(　)
③ interesting →(　)`,
    answer: '① taller　② bigger　③ more interesting',
    hint: '短い語は-er、長い語（3音節以上など）はmoreをつける。',
    explanation:
      '【何を聞かれているか】\ntall・big・interestingという3つの形容詞を、正しい比較級にする問題。\n\n【なぜ比較級の作り方が形容詞ごとに違うのか】\n形容詞の音節の長さによって、比較級の作り方（-erをつける、moreを前に置く）が決まっている。\n\n【ポイント1】短い形容詞tallを確認する\ntall→taller（そのまま-erをつける）。\n\n【ポイント2】短母音+子音のbigを確認する\nbig→bigger（子音を重ねて-er）。\n\n【ポイント3】長い形容詞interestingを確認する\ninteresting→more interesting（moreを前につける）。\n\n【答え】\n① taller　② bigger　③ more interesting\n\n【確かめ】\n③のinterestingにmoreがついていて、-erがついていないことを確認する。\n\n【よくあるまちがい】\n"more taller"のように、比較級を二重に使ってしまうミス。\n\n【ここが絶対】\n「短い語→er」「長い語→more」という比較級の使い分けをリズムで覚える。',
    pitfall: 'more tallerのように比較級を二重に使わない。',
    memoryTip: '「短い語→er」「長い語→more」の使い分けをリズムで覚える。',
  },
  {
    id: 'chugaku2026_eigo_025',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の形容詞を最上級にしなさい。（theをつけて答えること）

① old →(　)
② easy →(　)
③ popular →(　)`,
    answer: '① the oldest　② the easiest　③ the most popular',
    hint: '短い語は-est、子音+yはyをiに変えてest、長い語はmostをつける。',
    explanation:
      '【何を聞かれているか】\nold・easy・popularという3つの形容詞を、theをつけて正しい最上級にする問題。\n\n【なぜ最上級の作り方が形容詞ごとに違うのか】\n形容詞の音節の長さや語尾の形によって、最上級の作り方（-estをつける、yをiに変えてest、mostを前に置く）が決まっている。\n\n【ポイント1】短い形容詞oldを確認する\nold→the oldest（そのまま-estをつける）。\n\n【ポイント2】子音字+yのeasyを確認する\neasy→the easiest（yをiに変えて-est）。\n\n【ポイント3】長い形容詞popularを確認する\npopular→the most popular（mostを前につける）。\n\n【答え】\n① the oldest　② the easiest　③ the most popular\n\n【確かめ】\nすべての最上級にtheがついていることを確認する。\n\n【よくあるまちがい】\n"easyest"のように、yをiに変えずにそのまま-estをつけてしまうミス。\n\n【ここが絶対】\n最上級には必ずtheをつけるというルールを、-est型とmost型の使い分けとセットで覚える。',
    pitfall: 'easyestとつづらない。yをiに変えてiestとする。',
    memoryTip: '「最上級には必ずtheをつける」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_026',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の数字を英語の序数（〜番目）で書きなさい。

① 1番目 →(　)
② 2番目 →(　)
③ 3番目 →(　)
④ 5番目 →(　)`,
    answer: '① first　② second　③ third　④ fifth',
    hint: '1〜3番目は不規則、他は基本的に数字+th。',
    explanation:
      '【何を聞かれているか】\n1番目・2番目・3番目・5番目を、英語の序数（〜番目）で書く問題。\n\n【なぜ1〜3番目が不規則なのか】\n序数（順番を表す言い方）は基本的に基数（数字）+thで作るが、1・2・3番目だけは歴史的に不規則な形（first, second, third）が使われている。\n\n【ポイント1】不規則な3つを確認する\n1番目first、2番目second、3番目thirdは特別な形。\n\n【ポイント2】5番目のつづり変化を確認する\n5番目はfive→fifthのように、veをfに変えてthをつける。\n\n【ポイント3】他のつづり変化にも注意する\n9番目ninth、12番目twelfthなど、基数+thの形からつづりが変わるものがある。\n\n【答え】\n① first　② second　③ third　④ fifth\n\n【確かめ】\n1〜3番目が不規則な形になっていること、5番目がfifthという正しいつづりになっていることを確認する。\n\n【よくあるまちがい】\n「3番目」を"threeth"のように、規則通りに作ってしまうミス。\n\n【ここが絶対】\nfirst・second・thirdの3つだけ特別に覚え、あとは基本的にthをつける（つづり変化に注意）と整理する。',
    pitfall: '「3番目」をthirdでなくthreethのように書かない。',
    memoryTip: 'first・second・thirdの3つだけ特別に覚え、あとは基本的にth（つづり変化に注意）。',
  },
  {
    id: 'chugaku2026_eigo_027',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の時刻を英語で表しなさい。

① 3時 →(　) o'clock
② 7時半 →seven (　)`,
    answer: '① three　② thirty',
    hint: '「〜時」はnumber+o\'clock、「〜時半」はnumber+thirty。',
    explanation: `【出題意図】時刻の基本的な英語表現を問う。【解説】①「3時」はちょうどの時刻を表すのでthree o'clock。②「7時半」はseven thirty（またはhalf past seven）。【注意点】o'clockは「ちょうど〜時」のときだけ使い、分がある場合（seven thirtyなど）にはo'clockをつけない。【関連知識】時刻の尋ね方：What time is it?（今何時ですか）、「〜時15分前」はa quarter to〜、「〜時15分」はa quarter past〜。`,
    pitfall: "seven thirty o'clockのように分がある時刻にo'clockをつけない。",
    memoryTip: "「o'clockはちょうどの時刻専用」と覚える。",
  },

  // ============================================================
  // Q028–Q060: 発展（difficulty: 'advanced'）
  // ============================================================
  {
    id: 'chugaku2026_eigo_028',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形を入れなさい。（　）内は動詞の原形。

① I (　) (　) TV when my mother came home. (watch)
② They (　) (　) soccer at that time. (play)`,
    answer: '① was watching　② were playing',
    hint: '過去進行形はwas/were+動詞のing形。',
    explanation:
      '【何を聞かれているか】\nwatch・playという動詞を、過去進行形の形に変える問題。\n\n【なぜ過去進行形を使うのか】\n"when my mother came home"（母が帰宅したとき）のような、過去のある時点で進行中だった動作を表すときは、過去進行形（was/were＋動詞のing形）を使う。\n\n【ポイント1】過去進行形の公式を確認する\n主語＋was/were＋動詞のing形。\n\n【ポイント2】①主語Iを確認する\nIに対応するbe動詞の過去形はwas。"was watching"。\n\n【ポイント3】②主語Theyを確認する\nTheyに対応するbe動詞の過去形はwere。"were playing"。\n\n【答え】\n① was watching　② were playing\n\n【確かめ】\n①がwas＋ing、②がwere＋ingという正しい過去進行形になっているか確認する。\n\n【よくあるまちがい】\n"I is watching"のように、be動詞を現在形にしてしまうミス。過去の話なのでwas/wereを使う。\n\n【ここが絶対】\n過去進行形（was/were+ing）は、現在進行形（am/is/are+ing）の過去版として覚える。',
    pitfall: 'I is watchingのようにbe動詞を現在形にしない。過去の話なのでwas/wereを使う。',
    memoryTip: '「過去進行形=was/were+ing」と現在進行形(am/is/are+ing)の過去版として覚える。',
  },
  {
    id: 'chugaku2026_eigo_029',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように（　）に適切な語を入れなさい。

私は将来医者になりたい。
I (　) (　) be a doctor in the future.`,
    answer: 'want to',
    hint: '「〜したい」はwant to+動詞の原形。',
    explanation:
      '【何を聞かれているか】\n「私は将来医者になりたい。」という日本語に合うように、"I (　) (　) be a doctor in the future."の空欄を埋める問題。\n\n【なぜwant toを使うのか】\n「〜したい」という願望は、want to＋動詞の原形という決まった形で表す。\n\n【ポイント1】"want to＋動詞の原形"の形を確認する\nwant to＋動詞の原形＝「〜したい」。\n\n【ポイント2】toの後ろが原形であることを確認する\ntoの後ろは必ず動詞の原形（be）を使う。\n\n【ポイント3】三人称単数のときの形を確認する\n主語が三人称単数のときは"wants to"になる（He wants to be a doctor.）。\n\n【答え】\nwant to\n\n【確かめ】\n"I want to be a doctor in the future."が「私は将来医者になりたい」という意味の正しい文になっているか確認する。\n\n【よくあるまちがい】\n"want to being"のように、toの後ろをing形にしてしまうミス。toの後ろは動詞の原形。\n\n【ここが絶対】\n"want to＋原形"＝「〜したい」という形をセットで暗記する。',
    pitfall: 'I want to being a doctor.のようにingにしない。toの後ろは動詞の原形。',
    memoryTip: '「want to+原形」＝「〜したい」とセットで暗記する。',
  },
  {
    id: 'chugaku2026_eigo_030',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形を入れなさい。（　）内は動詞の原形。

I like (　) books. (read)`,
    answer: 'reading（またはto read）',
    hint: 'like+動詞のing形、またはlike to+動詞の原形はどちらも「〜するのが好き」という意味。',
    explanation:
      '【何を聞かれているか】\n"I like (　) books."の空欄に、readを適切な形にして入れる問題。\n\n【なぜ動名詞または不定詞を使うのか】\nlikeは、動名詞（-ing形）と不定詞（to＋動詞の原形）のどちらを目的語に取ってもほぼ同じ意味になる、両方使える動詞のグループに属している。\n\n【ポイント1】likeの後ろの形を確認する\nlike＋動名詞、またはlike＋不定詞、どちらも「〜するのが好き」という意味になる。\n\n【ポイント2】原形だけは使えないことを確認する\n"I like read books."のように、動詞の原形だけを置くことはできない。\n\n【ポイント3】文を組み立てる\n"I like reading books."または"I like to read books."＝「私は本を読むのが好きだ」。\n\n【答え】\nreading（またはto read）\n\n【確かめ】\n"like"の後ろが"reading"（動名詞）または"to read"（不定詞）のどちらかになっていることを確認する。\n\n【よくあるまちがい】\n"I like read books."のように、動詞の原形だけを置いてしまうミス。ing形かto＋原形にする必要がある。\n\n【ここが絶対】\n「likeの後は-ingかto+原形、どちらもOK」という、likeの特別な性質をセットで覚える。',
    pitfall: 'I like read books.のように動詞の原形だけを置かない。ing形かto+原形にする。',
    memoryTip: '「likeの後は-ingかto+原形、どちらもOK」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_031',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① (　) (　) books do you have? — I have ten books.
② (　) (　) is this bag? — It's 2,000 yen.`,
    answer: '① How many　② How much',
    hint: '数えられる名詞の数を聞くときはHow many、値段や量を聞くときはHow much。',
    explanation: `【出題意図】How many（数）とHow much（値段・量）の使い分けを問う。【解説】①数えられる名詞booksの数を尋ねるのでHow many books。②値段を尋ねるのでHow much is this bag?。【注意点】How manyの後ろには複数形の名詞（books）が続く。How muchは値段のほか、数えられない名詞（water, timeなど）の量を尋ねるときにも使う。【関連知識】How much water do you drink every day?（数えられない名詞の量）もHow muchを使う典型例。`,
    pitfall: 'How many is this bag?のように値段にHow manyを使わない。値段はHow much。',
    memoryTip: '「数えられる→How many、値段・量→How much」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_032',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な接続詞を入れなさい。

① I like dogs (　) cats.（私は犬も猫も好きだ）
② I was tired, (　) I did my homework.（疲れていたが宿題をした）
③ Hurry up, (　) you will be late.（急ぎなさい、さもないと遅れますよ）`,
    answer: '① and　② but　③ or',
    hint: 'and=そして、but=しかし、or=さもないと（命令文+or）。',
    explanation: `【出題意図】基本的な等位接続詞and/but/orの使い分けを問う。【解説】①「犬も猫も好き」という並列→and。②「疲れていたが宿題をした」という逆接→but。③「命令文+or」＝「〜しなさい、さもないと〜」という意味になる。【注意点】「命令文+and」は「〜しなさい、そうすれば〜」という逆の意味になるので混同しない。【関連知識】because（なぜなら）、when（〜のとき）などの接続詞も合わせて整理しておく。`,
    pitfall: 'Hurry up, and you will be late.とすると意味が逆になってしまう（「急げば遅れる」となり不自然）。',
    memoryTip: '「命令文+or=さもないと」「命令文+and=そうすれば」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_033',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な接続詞を入れなさい。

① I stayed home (　) it was raining.（雨が降っていたので家にいた）
② I was watching TV (　) the phone rang.（電話が鳴ったときテレビを見ていた）`,
    answer: '① because　② when',
    hint: 'because=理由、when=時。',
    explanation: `【出題意図】従属接続詞because（理由）とwhen（時）の使い分けを問う。【解説】①「雨が降っていたので」という理由を表すのでbecause。②「電話が鳴ったとき」という時を表すのでwhen。【注意点】because以下は「理由」を表す節、when以下は「時」を表す節になる。文の前半・後半どちらに置いても意味は変わらない（Because it was raining, I stayed home.も可）。【関連知識】while（〜する間に）、if（もし〜なら）、though（〜だけれども）も同じ仲間の接続詞。`,
    pitfall: 'I stayed home when it was raining.にすると「雨が降っていたときに家にいた」と単なる時の説明になり、理由のニュアンスが弱くなる。',
    memoryTip: '「because=理由（なぜなら）、when=時（〜のとき）」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_034',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な代名詞を入れなさい。

① This is (　) bag.（これは私のかばんです）
② I know (　). She is my friend.（彼女を知っている）
③ Please give it to (　).（それを彼らに渡してください）`,
    answer: '① my　② her　③ them',
    hint: '所有格（〜の）my/her、目的格（〜を/に）her/them。',
    explanation:
      '【何を聞かれているか】\n所有格・目的格の代名詞を、文脈に合わせて選ぶ問題。\n\n【なぜ主格・所有格・目的格を使い分けるのか】\n代名詞は、文の中での役割（主語か、所有を表すか、目的語か）によって形が変わるという決まりがある。\n\n【ポイント1】①所有格を確認する\n「私の」という所有格→"my bag"。\n\n【ポイント2】②③目的格を確認する\n「彼女を」という目的格→"know her"、「彼らに」という目的格→"to them"。\n\n【ポイント3】主格・所有格・目的格の対応を確認する\nI-my-me、he-his-him、she-her-her、they-their-them。\n\n【答え】\n① my　② her　③ them\n\n【確かめ】\n①が所有格、②③が目的格として正しく使われているか確認する。\n\n【よくあるまちがい】\n"I know she."のように、目的語の位置に主格を使ってしまうミス。\n\n【ここが絶対】\n「主格→所有格→目的格」の順に「I-my-me」のように声に出して覚える。',
    pitfall: 'I know she.のように目的語の位置に主格を使わない。',
    memoryTip: '「主格→所有格→目的格」の順に「I-my-me」のように声に出して唱えて覚える。',
  },
  {
    id: 'chugaku2026_eigo_035',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ do / you / what / like / sports ]?`,
    answer: 'What sports do you like?',
    hint: 'What+名詞（sports）を文頭に置き、その後ろに疑問文の語順(do you like)を続ける。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、「どんなスポーツが好きですか」という英文を完成させる問題。\n\n【なぜWhat sportsをひとまとまりにして文頭に置くのか】\n「どんなスポーツ」という具体的な内容をたずねるときは、疑問詞What＋名詞sportsをひとまとまりにして文頭に置き、その後ろに疑問文の語順（do you like）を続ける。\n\n【ポイント1】"What＋名詞"の形を確認する\nWhat sports（どんなスポーツ）が1つのかたまりとして文頭に来る。\n\n【ポイント2】疑問文の語順を確認する\nWhat sportsの後ろは、一般動詞の疑問文の語順（do you like）が続く。\n\n【ポイント3】同じパターンの表現を確認する\nWhat time（何時に）、What color（何色）、What subject（何の教科）も同じパターン。\n\n【答え】\nWhat sports do you like?\n\n【確かめ】\n"What sports"の後ろが"do you like"という疑問文の語順になっているか確認する。\n\n【よくあるまちがい】\n"Do you like what sports?"のように、疑問詞を文の途中に置いてしまうミス。\n\n【ここが絶対】\n「疑問詞＋名詞」はセットで文の一番前に置くと覚える。',
    pitfall: 'Do you like what sports?のように疑問詞を文の途中に置かない。',
    memoryTip: '「疑問詞+名詞」はセットで文の一番前に置くと覚える。',
  },
  {
    id: 'chugaku2026_eigo_036',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ is / your / when / birthday ]?`,
    answer: 'When is your birthday?',
    hint: '疑問詞Whenを文頭に置き、be動詞isを主語your birthdayの前に出す。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、「あなたの誕生日はいつですか」という英文を完成させる問題。\n\n【なぜbe動詞を主語の前に出すのか】\nbe動詞を使った疑問詞疑問文は、疑問詞を文頭に置き、その後ろでbe動詞を主語の前に出すという決まった語順を取る。\n\n【ポイント1】疑問詞Whenを確認する\n「いつ」をたずねる疑問詞Whenを文頭に置く。\n\n【ポイント2】be動詞の疑問文の語順を確認する\nbe動詞isを主語（your birthday）の前に出す。\n\n【ポイント3】doやdoesが不要であることを確認する\nbe動詞の疑問文はbe動詞を移動するだけでよく、do/doesは使わない。\n\n【答え】\nWhen is your birthday?\n\n【確かめ】\nWhenの後ろが"is your birthday"という、be動詞＋主語の語順になっているか確認する。\n\n【よくあるまちがい】\n"When your birthday is?"のように、語順を崩してしまうミス。\n\n【ここが絶対】\n「疑問詞＋be動詞＋主語」の順番を声に出して確認する。他の疑問詞（Where, Who, What）でも同じ語順になる。',
    pitfall: 'When your birthday is?のように語順を崩さない。be動詞を主語の前に出す。',
    memoryTip: '「疑問詞+be動詞+主語」の順番を声に出して確認する。',
  },
  {
    id: 'chugaku2026_eigo_037',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ to / every / goes / school / she / day ].`,
    answer: 'She goes to school every day.',
    hint: '主語+動詞+場所（to school）+頻度を表す語句（every day）の順。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、「彼女は毎日学校に行きます」という英文を完成させる問題。\n\n【なぜ「主語→動詞→場所→時」の順にするのか】\n英語の基本語順は「主語＋動詞＋（目的語）＋場所＋時」で、場所と時の両方がある場合は「場所→時」の順に置く。\n\n【ポイント1】主語と動詞を確認する\n主語She、動詞goes（三単現のs）。\n\n【ポイント2】場所と時を確認する\n場所"to school"、時（頻度）"every day"の順に並べる。\n\n【ポイント3】三単現のsを確認する\n主語sheに対して、動詞はgoesと三単現のsをつける。\n\n【答え】\nShe goes to school every day.\n\n【確かめ】\n"to school"（場所）が"every day"（時）より先に置かれているか確認する。\n\n【よくあるまちがい】\n"She goes every day to school."のように、場所と時の順序を逆にしてしまうミス。\n\n【ここが絶対】\n「主語→動詞→場所→時」という英語の基本語順をセットで覚える。',
    pitfall: 'She goes every day to school.のように場所と時の順序を逆にしない。',
    memoryTip: '「主語→動詞→場所→時」の順番を英語の基本文型として覚える。',
  },
  {
    id: 'chugaku2026_eigo_038',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: Hello. This is Mike. (　)
B: Sorry, she's out now.

ア. May I speak to Emily, please?
イ. What is your name?
ウ. How are you?`,
    answer: 'ア. May I speak to Emily, please?',
    hint: '電話でエミリーと話したいときの定型表現を選ぶ。',
    explanation: `【出題意図】電話での基本的な会話表現を問う。【解説】BがSorry, she's out now.（すみません、彼女は今外出しています）と答えているので、Aはエミリーと話したいと伝えたはず。May I speak to Emily, please?（エミリーさんをお願いできますか）が最も自然。【注意点】電話の会話では「〜とお話しできますか」という定型表現May I speak to 〜, please?がよく使われる。【関連知識】電話に出るときの表現：Speaking.（私です）、Hold on, please.（少々お待ちください）。`,
    pitfall: 'イ・ウは電話の流れに合わない。返答（she\'s out now）から逆算して文脈を確認する。',
    memoryTip: '「May I speak to 〜, please?」を電話の決まり文句として丸ごと覚える。',
  },
  {
    id: 'chugaku2026_eigo_039',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: Excuse me. (　)
B: Sure. Go straight and turn left at the corner.

ア. How is the weather?
イ. Could you tell me the way to the station?
ウ. What time is it now?`,
    answer: 'イ. Could you tell me the way to the station?',
    hint: '道案内をしてくれる返答（Go straight and turn left）につながる質問を選ぶ。',
    explanation: `【出題意図】道案内の場面での定型表現を問う。【解説】BがGo straight and turn left at the corner.（まっすぐ行って角を左に曲がってください）と道順を説明しているので、Aは道を尋ねたはず。Could you tell me the way to the station?（駅までの道を教えていただけますか）が最も自然。【注意点】Excuse me.は見知らぬ人に話しかけるときの定型表現。【関連知識】道案内の表現：Go straight.（まっすぐ行く）、Turn right/left.（右/左に曲がる）、It's on your right.（右手にあります）。`,
    pitfall: 'ア・ウは道案内の返答につながらない。返答の内容から質問を逆算する。',
    memoryTip: '「Could you tell me the way to 〜?」を道を尋ねる決まり文句として覚える。',
  },
  {
    id: 'chugaku2026_eigo_040',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: (　)
B: Yes. I'm looking for a T-shirt.

ア. May I help you?
イ. How much is it?
ウ. Do you like it?`,
    answer: 'ア. May I help you?',
    hint: '店員が客に声をかける場面の定型表現を選ぶ。',
    explanation: `【出題意図】買い物の場面での店員と客の定型的なやり取りを問う。【解説】Bが「はい、Tシャツを探しています」と答えているので、Aは店員として声をかけたはず。May I help you?（いらっしゃいませ／何かお探しですか）が最も自然な導入表現。【注意点】May I help you?は店員が客に声をかける代表的な決まり文句。【関連知識】買い物の表現：I'm just looking, thank you.（見ているだけです）、Can I try this on?（試着してもいいですか）。`,
    pitfall: 'イ・ウは会話の最初の質問としては不自然。Bの返答（探し物を伝えている）から判断する。',
    memoryTip: '「May I help you?」＝店員の決まり文句として覚える。',
  },
  {
    id: 'chugaku2026_eigo_041',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な前置詞を入れなさい。

① I go to school (　) bus.（バスで学校に行く）
② She cut the paper (　) scissors.（はさみで紙を切った）
③ This present is (　) you.（これはあなたのためのプレゼントです）`,
    answer: '① by　② with　③ for',
    hint: '交通手段→by、道具→with、〜のために→for。',
    explanation: `【出題意図】前置詞by（手段）・with（道具）・for（〜のために）の使い分けを問う。【解説】①交通手段を表すのでby bus。②道具を使って何かをするのでwith scissors。③「〜のために」という目的を表すのでfor you。【注意点】交通手段のbyの後ろにはtheや冠詞をつけない（by bus, by train, by car。ただしby footではなくon footという例外もある）。【関連知識】歩いて行く場合はon footという特別な表現を使う。`,
    pitfall: 'by footとは言わない。「歩いて」はon footという決まった表現を使う。',
    memoryTip: '「交通手段→by」「道具→with」「〜のために→for」とセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_042',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように、（　）内の語を適切な位置に入れて英文を完成させなさい。

彼女はいつも朝食を食べる。
She (　) eats breakfast. (always)`,
    answer: 'She always eats breakfast.',
    hint: '頻度を表す副詞（always, usually, sometimes, neverなど）は一般動詞の前、be動詞の後ろに置く。',
    explanation:
      '【何を聞かれているか】\n「彼女はいつも朝食を食べる。」という日本語に合うように、alwaysを正しい位置に入れて英文を完成させる問題。\n\n【なぜalwaysを一般動詞の前に置くのか】\nalways（いつも）のような頻度を表す副詞は、一般動詞の文では一般動詞の前に置くという決まった位置がある。\n\n【ポイント1】頻度副詞の基本位置を確認する\n頻度副詞（always/usually/sometimes/neverなど）は一般動詞の前に置く。\n\n【ポイント2】be動詞の文との違いを確認する\nbe動詞の文では、頻度副詞はbe動詞の後ろに置く（She is always busy.）。\n\n【ポイント3】文を組み立てる\n"She always eats breakfast."＝「彼女はいつも朝食を食べる」。\n\n【答え】\nShe always eats breakfast.\n\n【確かめ】\nalwaysが一般動詞eatsの前に置かれているか確認する。\n\n【よくあるまちがい】\n"She eats always breakfast."のように、一般動詞の後ろに置いてしまうミス。\n\n【ここが絶対】\n「一般動詞の前、be動詞の後ろ」という頻度副詞の位置をセットで覚える。always＞usually＞often＞sometimes＞neverという頻度の順番もあわせて確認する。',
    pitfall: 'She eats always breakfast.のように一般動詞の後ろに置かない。一般動詞の前が基本位置。',
    memoryTip: '「一般動詞の前、be動詞の後ろ」と頻度副詞の位置をセットで覚える。',
  },
  {
    id: 'chugaku2026_eigo_043',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な形容詞を選びなさい。

① You look (　) today.（今日、あなたは幸せそうに見える）
  ア. happy　イ. happily
② That sounds (　).（それは面白そうに聞こえる）
  ア. interesting　イ. interestingly`,
    answer: '① ア(happy)　② ア(interesting)',
    hint: 'look/soundの後ろには形容詞を置く（副詞は使わない）。',
    explanation:
      '【何を聞かれているか】\nlook/soundという知覚動詞の後ろに、正しい形容詞を選ぶ問題。\n\n【なぜ副詞ではなく形容詞を使うのか】\nlook（〜に見える）、sound（〜に聞こえる）のような知覚動詞は、主語の状態・様子を説明するために、後ろに形容詞を置くという決まりがある。\n\n【ポイント1】①lookの使い方を確認する\n"You look happy."＝「あなたは幸せそうに見える」。lookの後ろは形容詞happy。\n\n【ポイント2】②soundの使い方を確認する\n"That sounds interesting."＝「それは面白そうに聞こえる」。soundの後ろも形容詞interesting。\n\n【ポイント3】同じグループの動詞を確認する\nfeel（〜と感じる）、taste（〜の味がする）、smell（〜のにおいがする）も、すべて後ろに形容詞を取る。\n\n【答え】\n① ア(happy)　② ア(interesting)\n\n【確かめ】\nhappyとinterestingがそれぞれ形容詞であり、副詞（happily/interestingly）になっていないことを確認する。\n\n【よくあるまちがい】\n"You look happily."のように副詞を置いてしまうミス。look/soundの後ろは形容詞。\n\n【ここが絶対】\n「look/sound/feel/taste/smell＋形容詞」の仲間をまとめて覚える。',
    pitfall: 'You look happily.のように副詞を置かない。look/soundの後ろは形容詞。',
    memoryTip: '「look/sound/feel/taste/smell+形容詞」の仲間をまとめて覚える。',
  },
  {
    id: 'chugaku2026_eigo_044',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ me / gave / a / book / she ].`,
    answer: 'She gave me a book.',
    hint: 'give+人+物の語順（give A B＝AにBをあげる）。',
    explanation:
      '【何を聞かれているか】\n語句を並べ替えて、「彼女は私に本をくれた」という英文を完成させる問題。\n\n【なぜ「give＋人＋物」の語順にするのか】\ngive（あげる）のような動詞は、後ろに「人」と「物」を続けて置くことができ、「give＋人＋物」＝「（人）に（物）をあげる」という語順になる。\n\n【ポイント1】give型の語順を確認する\ngive＋人（me）＋物（a book）＝「私に本をあげる」。\n\n【ポイント2】言い換えの形を確認する\n"give A to B"（BにAをあげる）の形にすると、"She gave a book to me."という言い換えもできる。\n\n【ポイント3】同じ文型を取る動詞を確認する\nshow（見せる）、tell（話す）、teach（教える）、send（送る）も、同じように「動詞＋人＋物」の形を取る。\n\n【答え】\nShe gave me a book.\n\n【確かめ】\n"gave"の後ろに"me"（人）、その後ろに"a book"（物）が続いているか確認する。\n\n【よくあるまちがい】\n"She gave a book me."のように、「人」と「物」の順序を逆にしてしまうミス。\n\n【ここが絶対】\n「give＋人＋物」の語順を「あげる相手が先、あげる物が後」と覚える。',
    pitfall: 'She gave a book me.のように「人」と「物」の順序を逆にしない。',
    memoryTip: '「give+人+物」の語順を「あげる相手が先、あげる物が後」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_045',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

I (　) (　) (　) visit my grandmother next week.`,
    answer: 'am going to',
    hint: '未来の予定を表すbe going to+動詞の原形。',
    explanation: `【出題意図】未来を表すbe going to構文を問う。【解説】「来週祖母を訪ねるつもりだ」という予定を表すのでam going to visitとなる。be going to+動詞の原形で「〜する予定だ・〜するつもりだ」という意味になる。【注意点】be動詞は主語に合わせて変える（I am going to〜、She is going to〜、They are going to〜）。【関連知識】next week、tomorrow、this weekendなど未来を表す語句と一緒によく使われる。`,
    pitfall: 'I going to visitのようにbe動詞（am）を忘れない。',
    memoryTip: '「be動詞+going to+動詞の原形」の3点セットで未来を表すと覚える。',
  },
  {
    id: 'chugaku2026_eigo_046',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

I think it (　) rain tomorrow.`,
    answer: 'will',
    hint: '未来の予測にはwill+動詞の原形を使う。',
    explanation: `【出題意図】未来を表す助動詞willを問う。【解説】「明日は雨が降ると思う」という未来の予測を表すのでwill rainとなる。will+動詞の原形で「〜だろう」という予測や、その場で決めた意志を表す。【注意点】willの後ろは必ず動詞の原形。3単現のsはつけない（It will rains.は誤り）。【関連知識】be going toは「前から決まっていた予定」、willは「その場での判断・予測」というニュアンスの違いがある。`,
    pitfall: 'It will rains tomorrow.のようにwillの後にsをつけない。',
    memoryTip: '「willの後ろは動詞の原形」とcanなどの助動詞と同じルールで覚える。',
  },
  {
    id: 'chugaku2026_eigo_047',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語句を入れなさい。

① (　) (　) is it today? — It's Monday.
② (　) (　) do you like? — I like blue.`,
    answer: '① What day　② What color',
    hint: '「何曜日」はWhat day、「何色」はWhat color。',
    explanation: `【出題意図】「疑問詞What+名詞」の組み合わせ表現を問う。【解説】①「今日は何曜日ですか」はWhat day is it today?。②「何色が好きですか」はWhat color do you like?。Whatの後ろに具体的な名詞（day, color, timeなど）を置いて、より限定した質問を作ることができる。【注意点】What day is it today?は曜日、What's the date today?は日付を尋ねる表現で意味が異なるので区別する。【関連知識】What time（何時）、What subject（何の教科）、What sport（何のスポーツ）なども同じパターン。`,
    pitfall: 'What is it today?だけだと「今日は何ですか」という意味になり曜日を尋ねる表現として不十分。dayを補う。',
    memoryTip: '「What+名詞」で質問をより具体的にできると覚える。',
  },
  {
    id: 'chugaku2026_eigo_048',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語に合うように英語で書きなさい。

5月5日`,
    answer: 'May 5th (May fifth)',
    hint: '日付は「月+序数」の順で表す。',
    explanation:
      '【何を聞かれているか】\n「5月5日」を英語で書く問題。\n\n【なぜ序数を使うのか】\n英語の日付は、「何番目の日か」を表す序数（1st, 2nd, 3rd…）を使って表すという決まりがある。\n\n【ポイント1】日付の形を確認する\n"月の名前＋序数"＝May 5th（読み方はMay fifth）。\n\n【ポイント2】5thの読み方を確認する\n5thはfive（基数）ではなくfifth（序数）と読む。\n\n【ポイント3】別の言い方を確認する\n"the 5th of May"という言い方もできる。\n\n【答え】\nMay 5th (May fifth)\n\n【確かめ】\n5thが「fifth」という序数の読み方になっていることを確認する。\n\n【よくあるまちがい】\n"May five"のように、基数のまま読んでしまうミス。日付は必ず序数で読む。\n\n【ここが絶対】\n「日付は必ず序数で読む」（1st, 2nd, 3rd, 4th…）というルールを覚える。',
    pitfall: 'May fiveと基数のまま読まない。日付は序数で読む。',
    memoryTip: '「日付は必ず序数で読む」と覚える（1st, 2nd, 3rd, 4th…）。',
  },
  {
    id: 'chugaku2026_eigo_049',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

I have two sisters and one brother. My brother is younger than me. My sisters are older than me.

質問：この人は本人を含めて何人の兄弟姉妹（自分を含む子ども）がいますか。また、自分より年上なのは兄弟姉妹の誰ですか。`,
    answer: '子どもは本人を含め4人（本人・姉2人・弟1人）。年上なのは2人の姉。',
    hint: 'two sisters（姉か妹2人）、one brother（兄か弟1人）、youngerとolderの意味を確認する。',
    explanation: `【出題意図】家族に関する基本語彙と比較級（younger/older）を使った短文の読解力を問う。【解説】本文から「姉妹が2人、兄弟が1人いる」ことがわかる。「My brother is younger than me.」（兄弟は私より年下）なので、この兄弟は弟。「My sisters are older than me.」（姉妹たちは私より年上）なので、2人とも姉であるとわかる。【注意点】英語のsister/brotherには「姉・妹」「兄・弟」の年齢による区別がなく、youngerやolderという比較級で年齢関係を判断する必要がある。【関連知識】家族語彙：parents（両親）、grandparents（祖父母）、cousin（いとこ）、aunt（おば）、uncle（おじ）。`,
    pitfall: 'sisterを常に「妹」、brotherを常に「兄」と決めつけない。年齢はyounger/olderの情報から判断する。',
    memoryTip: '「sister/brotherだけでは年齢はわからない。youngerかolderをチェックする」と覚える。',
  },
  {
    id: 'chugaku2026_eigo_050',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

I go to school at eight every morning. My first class is math, and my favorite subject is science. After school, I play basketball with my friends.

質問：この人が学校が終わった後にすることは何ですか。`,
    answer: '友達とバスケットボールをすること。',
    hint: 'After school（放課後）の後の文に注目する。',
    explanation: `【出題意図】学校生活に関する基本語彙と時間の流れを追う読解力を問う。【解説】「After school, I play basketball with my friends.」（放課後、友達とバスケットボールをする）とあるので、答えは「友達とバスケットボールをすること」。【注意点】favorite subject（一番好きな教科）とfirst class（1時間目の授業）を混同しない。1時間目はmath（算数・数学）、一番好きな教科はscience（理科）である。【関連知識】学校生活語彙：classmate（クラスメイト）、homeroom（ホームルーム）、club activity（クラブ活動）。`,
    pitfall: '「1時間目の授業」と「好きな教科」を取り違えない。本文の情報を正確に区別する。',
    memoryTip: 'After school（放課後）の後ろの文を探すと答えが見つかりやすい。',
  },
  {
    id: 'chugaku2026_eigo_051',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な英語を入れなさい。

① 犬 →(　)
② 象 →(　)
③ 黄色 →(　)
④ 紫色 →(　)`,
    answer: '① dog　② elephant　③ yellow　④ purple',
    hint: '基本的な動物・色の単語を確認する。',
    explanation:
      '【何を聞かれているか】\n犬・象・黄色・紫色を表す英単語を答える問題。\n\n【なぜこれらの単語が重要なのか】\n動物・色に関する基本語彙は、中学受験の英語入試でも頻出の、身の回りのものを表す基礎単語。\n\n【ポイント1】動物を表す単語を確認する\ndog（犬）、elephant（象）。\n\n【ポイント2】色を表す単語を確認する\nyellow（黄色）、purple（紫色）。\n\n【ポイント3】関連する語彙も確認する\ncat（猫）、rabbit（うさぎ）、lion（ライオン）のような動物や、orange（オレンジ色）、pink（ピンク色）のような色もあわせて覚える。\n\n【答え】\n① dog　② elephant　③ yellow　④ purple\n\n【確かめ】\nそれぞれの単語が、正しい動物・色を表しているか確認する。\n\n【よくあるまちがい】\npurpleとpinkのような似た色の単語を混同してしまうミス。\n\n【ここが絶対】\n動物・色ごとにグループ分けして、基本語彙をまとめて覚える。',
    pitfall: 'purpleとpink、violetを混同しないよう、それぞれの色を正確に覚える。',
    memoryTip: '単語カードを作って、動物・色ごとにグループ分けして覚えると効率的。',
  },
  {
    id: 'chugaku2026_eigo_052',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の職業を表す英語を選びなさい。

① 医者
② 教師
③ 料理人

ア. teacher　イ. doctor　ウ. cook`,
    answer: '① イ(doctor)　② ア(teacher)　③ ウ(cook)',
    hint: '基本的な職業名の単語を確認する。',
    explanation:
      '【何を聞かれているか】\n医者・教師・料理人を表す英単語を選ぶ問題。\n\n【なぜこれらの単語が重要なのか】\n職業を表す基本語彙は、「将来何になりたいか」を答える英作文でもよく使われる基礎単語。\n\n【ポイント1】doctorの意味を確認する\ndoctor＝医者。\n\n【ポイント2】teacherの意味を確認する\nteacher＝教師。\n\n【ポイント3】cookの意味を確認する\ncook＝料理人。\n\n【答え】\n① イ(doctor)　② ア(teacher)　③ ウ(cook)\n\n【確かめ】\nそれぞれの単語が正しい職業を表しているか確認する。\n\n【よくあるまちがい】\ncookとchef（シェフ）を混同してしまうミス。両方とも料理をする職業だが、単語としては別。\n\n【ここが絶対】\n"What do you want to be in the future?"（将来何になりたいか）という表現とセットで、職業の語彙を覚える。',
    pitfall: 'cookとchef（シェフ）を混同しないよう、両方の単語を知っておくとよい。',
    memoryTip: '「将来なりたい職業」を英語で言えるように、自分の夢の職業を1つ覚えておくと便利。',
  },
  {
    id: 'chugaku2026_eigo_053',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

How is the weather today? — It's (　).（今日は晴れています）`,
    answer: 'sunny',
    hint: '天気を表す形容詞（sunny, rainy, cloudy, snowyなど）を確認する。',
    explanation:
      '【何を聞かれているか】\n"How is the weather today? — It\'s (　)."の空欄に入る、天気を表す語を答える問題。\n\n【なぜItを主語にするのか】\n天気を表す文では、意味を持たない主語Itを使い、"It is＋天気を表す形容詞"という形で答える。\n\n【ポイント1】天気をたずねる表現を確認する\n"How is the weather today?"＝「今日の天気はどうですか」。\n\n【ポイント2】sunnyの意味を確認する\nsunny＝「晴れた」。\n\n【ポイント3】他の天気語彙を確認する\nrainy（雨の）、cloudy（曇りの）、snowy（雪の）、windy（風が強い）。\n\n【答え】\nsunny\n\n【確かめ】\n"It\'s sunny."が「晴れています」という天気の答えになっているか確認する。\n\n【よくあるまちがい】\n"I am sunny today."のように、人を主語にしてしまうミス。天気の話には必ずItを主語にする。\n\n【ここが絶対】\n天気の文は「It is＋天気」の形と覚え、Itを主語にする習慣をつける。',
    pitfall: 'I am sunny today.のように人を主語にしない。天気の話には必ずItを主語にする。',
    memoryTip: '天気の文は「It is+天気」の形と覚え、Itを主語にする習慣をつける。',
  },
  {
    id: 'chugaku2026_eigo_054',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に適切な語を入れなさい。

① How (　) are you? — I'm twelve years old.
② My birthday is (　) December.`,
    answer: '① old　② in',
    hint: '年齢を尋ねるHow old、月を表す前置詞in。',
    explanation:
      '【何を聞かれているか】\n年齢・誕生日の月に関する基本表現の空欄を埋める問題。\n\n【なぜHow oldとinを使うのか】\n年齢をたずねるときはHow old（何歳）という決まった疑問詞のかたまりを使い、月を表すときは前置詞inを使う。\n\n【ポイント1】①年齢をたずねる表現を確認する\n"How old are you?"＝「あなたは何歳ですか」。\n\n【ポイント2】②月を表す前置詞を確認する\n月にはinを使う（in December）。\n\n【ポイント3】誕生日をたずねる表現も確認する\n"When is your birthday?"（誕生日はいつですか）に対して、"My birthday is December 25th."のように答える。\n\n【答え】\n① old　② in\n\n【確かめ】\n"How old are you?"、"My birthday is in December."がそれぞれ自然な文になっているか確認する。\n\n【よくあるまちがい】\n"How age are you?"のように、How oldの代わりにHow ageと言ってしまうミス。\n\n【ここが絶対】\n「How old are you?」「I\'m 〜 years old.」をセットの決まり文句として覚える。',
    pitfall: 'How age are you?のようにHow oldの代わりにHow ageと言わない。',
    memoryTip: "「How old are you?」「I'm 〜 years old.」をセットの決まり文句として覚える。",
  },
  {
    id: 'chugaku2026_eigo_055',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に答えなさい。

Hi, my name is Yuki. I am eleven years old. I live in Osaka with my family. I like reading books and playing the piano. My favorite subject is English.

① What is her favorite subject?
② 彼女が好きなことを2つ日本語で答えなさい。`,
    answer: '① Her favorite subject is English.　② 本を読むこと、ピアノを弾くこと。',
    hint: '本文中のI like〜の部分に注目する。',
    explanation:
      '【何を聞かれているか】\n自己紹介の英文を読んで、好きな教科と好きなことについて答える問題。\n\n【なぜIをHer/Sheに変えて答えるのか】\n本文はユキ本人の視点（I）で書かれているが、設問は第三者の視点（her/she）でたずねているため、答えるときは代名詞をHer/Sheに変える必要がある。\n\n【ポイント1】①好きな教科を確認する\n"My favorite subject is English."から、"Her favorite subject is English."と答える。\n\n【ポイント2】②好きなことを確認する\n"I like reading books and playing the piano."から、「本を読むこと」と「ピアノを弾くこと」の2つが読み取れる。\n\n【ポイント3】自己紹介の型を確認する\n「名前→年齢→住んでいる場所→好きなこと→得意教科」という順番で書かれることが多い。\n\n【答え】\n① Her favorite subject is English.　② 本を読むこと、ピアノを弾くこと。\n\n【確かめ】\n①の答えでIがHer（所有格）に正しく変わっているか確認する。\n\n【よくあるまちがい】\n質問の主語がHe/Sheに変わっているのに、本文のままIで答えてしまうミス。\n\n【ここが絶対】\n自己紹介文の型「name→age→住んでいる場所→好きなこと→得意教科」を意識して読み、視点の転換（I→He/She）に注意する。',
    pitfall: '質問文ではsheに変えて答える必要があるのに、本文のままIで答えないよう注意する。',
    memoryTip: '自己紹介文の型「name→age→住んでいる場所→好きなこと→得意教科」を意識して読む。',
  },
  {
    id: 'chugaku2026_eigo_056',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

I get up at six thirty every morning. I have breakfast at seven. Then I go to school at eight. I usually study English and math at home in the evening.

① この人が朝食を食べるのは何時ですか。
② この人が夕方に家でしていることは何ですか。`,
    answer: '① 7時（seven／7時）　② 英語と数学（算数）の勉強。',
    hint: '時刻表現（at six thirty, at seven, at eight）とusuallyの後ろの内容に注目する。',
    explanation:
      '【何を聞かれているか】\n1日の日課についての英文を読んで、朝食の時刻と夕方にすることを日本語で答える問題。\n\n【なぜ時刻表現に印をつけながら読むのか】\n本文には複数の時刻（6時30分、7時、8時）が登場するため、それぞれの時刻がどの動作に対応しているかを正確に対応させながら読む必要がある。\n\n【ポイント1】①朝食の時刻を確認する\n"I have breakfast at seven."から、朝食は7時。\n\n【ポイント2】②夕方にすることを確認する\n"I usually study English and math at home in the evening."から、夕方は英語と数学を勉強する。\n\n【ポイント3】起床時刻と混同しないことを確認する\n"I get up at six thirty every morning."（起きるのは6時30分）は、朝食の時刻（7時）とは異なる。\n\n【答え】\n① 7時（seven／7時）　② 英語と数学（算数）の勉強。\n\n【確かめ】\n①の答えが起床時刻（6時30分）ではなく、朝食の時刻（7時）になっているか確認する。\n\n【よくあるまちがい】\n起きる時刻（6時30分）と朝食の時刻（7時）を混同してしまうミス。\n\n【ここが絶対】\n時刻を表す語句（at＋時刻）に印をつけながら読むと、複数の時刻情報を整理しやすい。',
    pitfall: '起きる時刻（6時30分）と朝食の時刻（7時）を混同しない。',
    memoryTip: '時刻を表す語句（at+時刻）に印をつけながら読むと情報を整理しやすい。',
  },
  {
    id: 'chugaku2026_eigo_057',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、質問に日本語で答えなさい。

This is a picture of my family. My father is a teacher, and my mother is a nurse. I have one younger sister. She is eight years old and likes drawing pictures.

① 父親の職業は何ですか。
② 妹について、わかることを2つ答えなさい。`,
    answer: '① 教師（teacher）。　② 8歳であること／絵を描くことが好きなこと。',
    hint: 'My father is〜、My motherの職業、She is〜の文に注目する。',
    explanation:
      '【何を聞かれているか】\n家族紹介の英文を読んで、父親の職業と妹についてわかることを答える問題。\n\n【なぜfatherとmotherの職業を取り違えないようにするのか】\n本文には"My father is a teacher, and my mother is a nurse."のように、父と母それぞれの職業が書かれており、どちらがどの職業かを正確に対応させる必要がある。\n\n【ポイント1】①父親の職業を確認する\n"My father is a teacher."から、父親は教師。\n\n【ポイント2】②妹についての情報を確認する\n"She is eight years old and likes drawing pictures."から、妹は8歳で絵を描くことが好き。\n\n【ポイント3】家族紹介の表現を確認する\n"This is a picture of my family."（これは私の家族の写真です）、"I have〜brother(s)/sister(s)."という表現が家族紹介文の定番。\n\n【答え】\n① 教師（teacher）。　② 8歳であること／絵を描くことが好きなこと。\n\n【確かめ】\n①の答えがteacher（父）であり、nurse（母）と取り違えていないか確認する。\n\n【よくあるまちがい】\n父親と母親の職業（teacher/nurse）を逆にしてしまうミス。\n\n【ここが絶対】\n誰について書かれた文か（father/mother/sister）を意識しながら、1文ずつ正確に対応させて読む。',
    pitfall: '父親と母親の職業（teacher/nurse）を逆にしないよう、本文を正確に対応させて読む。',
    memoryTip: '誰について書かれた文か（father/mother/sister）を意識しながら1文ずつ確認する。',
  },
  {
    id: 'chugaku2026_eigo_058',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ visited / last / we / Kyoto / summer ].`,
    answer: 'We visited Kyoto last summer.',
    hint: '主語we+過去形の動詞visited+場所Kyoto+時last summerの順。',
    explanation: `【出題意図】過去形の文を「主語→動詞→目的語→時」の語順で正しく並べる力を問う。【解説】「私たちはこの前の夏、京都を訪れた」はWe（主語）visited（過去形の動詞）Kyoto（目的語）last summer（時を表す語句）の順に並べる。【注意点】時を表す語句（last summer, yesterdayなど）は基本的に文の最後に置く。【関連知識】visitは他動詞なのでtoやinなどの前置詞をつけずに直接目的語（Kyoto）を続ける点にも注意（visit to Kyotoは誤り）。`,
    pitfall: 'We visited to Kyoto last summer.のようにvisitの後ろにtoを入れない。',
    memoryTip: '「主語→動詞（過去形）→目的語→時」の順番で英文を組み立てる練習をする。',
  },
  {
    id: 'chugaku2026_eigo_059',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文にしなさい。

[ you / did / where / last / go / weekend ]?`,
    answer: 'Where did you go last weekend?',
    hint: '疑問詞Whereを文頭に置き、did you goという過去の疑問文の語順を続ける。',
    explanation: `【出題意図】過去形の疑問詞疑問文の語順を問う。【解説】「先週末どこへ行きましたか」はWhere（疑問詞）did you go（過去の疑問文の語順）last weekend（時）の順に並べる。didを使うのでgoは原形のまま使う点がポイント。【注意点】Where did you went?のようにdidとwentの過去形を両方使わないこと。【関連知識】答え方の例：I went to the zoo.（動物園に行きました）のように過去形で答える。`,
    pitfall: 'Where did you went last weekend?は誤り。didを使ったら動詞は原形。',
    memoryTip: '「疑問詞+did+主語+動詞の原形」の語順を声に出して練習する。',
  },
  {
    id: 'chugaku2026_eigo_060',
    subject: 'eigo',
    examType: 'chugaku',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を参考に、自分の自己紹介文を英語で3文以上書きなさい。（名前・年齢・好きなことを含めること）

（例）名前はハナ、11歳、好きなことは絵を描くこと。`,
    answer: '（解答例）My name is Hana. I am eleven years old. I like drawing pictures.',
    hint: 'My name is〜.（名前）、I am 〜 years old.（年齢）、I like 〜.（好きなこと）の3文構成で書く。',
    explanation:
      '【何を聞かれているか】\n名前・年齢・好きなことを含めて、自分の自己紹介文を英語で3文以上書く問題。\n\n【なぜ3文構成にするのか】\n自己紹介は、「My name is〜.」（名前）、「I am〜years old.」（年齢）、「I like〜.」（好きなこと）という、それぞれ異なる基本表現を組み合わせることで、必要な情報を過不足なく伝えられる。\n\n【ポイント1】名前の文を組み立てる\n"My name is Hana."＝「私の名前はハナです」。\n\n【ポイント2】年齢の文を組み立てる\n"I am eleven years old."＝「私は11歳です」。yearsoldを忘れずにつける。\n\n【ポイント3】好きなことの文を組み立てる\n"I like drawing pictures."＝「絵を描くことが好きです」。likeの後ろの動詞はing形にする。\n\n【答え】\n（解答例）My name is Hana. I am eleven years old. I like drawing pictures.\n\n【確かめ】\n3文がそれぞれ「名前」「年齢」「好きなこと」の内容を含んでいるか確認する。\n\n【よくあるまちがい】\n"I like draw pictures."のように、動詞の原形のまま置いてしまうミス。likeの後ろはing形にする。\n\n【ここが絶対】\n「名前→年齢→好きなこと」の3点セットで自己紹介文を組み立てる型を覚える。',
    pitfall: 'I like draw pictures.のように動詞の原形のまま置かない。ing形にする。',
    memoryTip: '「名前→年齢→好きなこと」の3点セットで自己紹介文を組み立てる型を覚える。',
  },
];
