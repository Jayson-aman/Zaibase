import type { Question } from './questions';

export const kokoKankanEigoC1: Question[] = [
  // ============================================================
  // Q01–Q08: 基礎（difficulty: 'basic'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_c1_01',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な関係代名詞を入れなさい。

① I have a friend (　) speaks three languages.
② This is the book (　) I bought yesterday.
③ The girl (　) bag is red is my sister.`,
    answer: '① who　② which (that)　③ whose',
    hint: '人が先行詞→who、物が先行詞で目的格→which/that、所有格→whose。',
    explanation: `【出題意図】関係代名詞who・which・whoseの基本的な使い分けを問う。【解説】①先行詞a friend（人）が主語の働きをする→who。②先行詞the book（物）でboughtの目的語→which（thatも可）。③先行詞the girlの後ろにbag（名詞）が続き「その子のかばん」という所有関係→whose。【注意点】whoseは「whose+名詞」の形で1つのまとまりとして働く点がwho/whichと異なる。【関連知識】目的格の関係代名詞（whom/which/that）は口語では省略されることが多い。`,
    pitfall: '③をwhoやwhichにすると、直後に名詞bagが続く構造を説明できない。所有格はwhose。',
    memoryTip: '人→who、物→which、所有→whose、と先行詞の種類で3択に絞る。',
  },
  {
    id: 'koko_kankan_eigo_c1_02',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の文を間接話法（伝達文）に書き換えなさい。

元の文：He said, "I am tired."
書き換え：He said (that) (　) (　) tired.`,
    answer: 'he was',
    hint: '直接話法→間接話法では、主語I→he、現在形am→過去形wasに変える（時制の一致）。',
    explanation: `【出題意図】話法の転換（直接話法→間接話法）における人称代名詞と時制の一致を問う。【解説】伝達動詞said（過去形）に合わせて、引用符内の現在形amは過去形wasに変える（時制の一致）。また主語Iは話者から見た第三者heに変える。【注意点】時制の一致：said（過去）の後の従属節は原則1つ過去にずらす（am→was、will→would等）。ただし普遍の真理はそのまま現在形を保つ例外もある。【関連知識】伝達動詞がsays（現在形）のときは時制の一致は起こらない（He says he is tired.）。`,
    pitfall: 'He said that I am tiredのように人称・時制を変えないのは誤り。',
    memoryTip: '話法の転換は「人称は話者目線に、時制は1つ過去へ」の2ステップで覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_03',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な比較表現を入れなさい。

① This question is (　) (　) that one.（この問題はあの問題と同じくらい難しい）
② Health is (　) important thing of all.（健康は何よりも大切なものだ）
③ The more you practice, the (　) you will get.（練習すればするほど上達する）`,
    answer: '① as difficult as　② the most　③ better',
    hint: '①原級比較as〜as、②the most+形容詞、③the 比較級, the 比較級の構文。',
    explanation: `【出題意図】原級比較・最上級・「the+比較級, the+比較級」構文を問う。【解説】①同程度を表す原級比較→as difficult as。②「何よりも大切」→the most important（thing of allで「すべての中で」を強調）。③「〜すればするほど…」→The 比較級 S V, the 比較級 S V。goodの比較級betterを使いthe betterとする。【注意点】③の構文は前半・後半とも「the+比較級」で始まる語順が固定されている点に注意。【関連知識】The more, the better.（多ければ多いほど良い）は省略形として単独でも使われる。`,
    pitfall: '③をthe more goodとするのは誤り。goodの比較級はbetterで不規則変化する。',
    memoryTip: '「the+比較級, the+比較級」は「〜すれば〜するほど」の定型パターンとして丸暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c1_04',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な分詞を入れなさい。（現在分詞か過去分詞のいずれか）

① (　) by the news, she started to cry.（その知らせに驚いて、彼女は泣き始めた）
② (　) tired, he kept on studying.（疲れていたが、彼は勉強を続けた）

語群：Surprised / Being (Though being)`,
    answer: '① Surprised　② Being (Though being)',
    hint: '主語が「驚かされる（受動）」ならSurprised、「疲れている（状態）」を表す分詞構文はBeing tiredまたはThough being tired。',
    explanation: `【出題意図】分詞構文の基本形（受動の分詞構文）を問う。【解説】①「驚かされて」という受動の意味→過去分詞Surprisedで始める分詞構文（Being surprised by the newsのBeingが省略された形）。②「疲れているけれども」という譲歩の意味を表すためBeing tiredまたは接続詞を残したThough being tiredとする。【注意点】分詞構文でbe動詞の現在分詞Beingはしばしば省略されるため、Surprisedのように過去分詞から始まる形が非常に多い。【関連知識】分詞構文には時（〜すると）・理由（〜なので）・譲歩（〜だが）・付帯状況（〜しながら）の意味がある。`,
    pitfall: '①をSurprisingとすると「（何かを）驚かせて」という能動の意味になり不自然。',
    memoryTip: '感情動詞は「（人が）される」→p.p.形で始まる分詞構文になることが多いと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_05',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、仮定法過去の文を完成させなさい。

If I (　) a bird, I could fly to see you.
（もし私が鳥だったら、あなたに会いに飛んでいけるのに）`,
    answer: 'were',
    hint: '仮定法過去のbe動詞はwereを使う（口語ではwasも許容されることがある）。',
    explanation: `【出題意図】仮定法過去における be動詞の特別なルール（were）を問う。【解説】現在の事実に反する仮定を表す仮定法過去では、if節のbe動詞は主語の人称・数にかかわらずwereを用いるのが原則。【注意点】口語ではI was〜も使われるが、学校文法・入試ではwereが標準として求められることが多い。【関連知識】If I were you,〜（もし私があなたなら）は仮定法過去の最頻出表現の1つ。`,
    pitfall: 'If I was a bird とするのは口語では許容されても、試験では減点対象になりうる。wereが正式。',
    memoryTip: '仮定法のbe動詞は「If I were you」のフレーズごと暗記してwereを定着させる。',
  },
  {
    id: 'koko_kankan_eigo_c1_06',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の2文を関係代名詞の非制限用法（コンマ+関係代名詞）を使って1文にしなさい。

Tom is my classmate. He is very good at soccer.`,
    answer: 'Tom, who is very good at soccer, is my classmate.',
    hint: '固有名詞（人名）が先行詞のときは、コンマ+who〜で補足説明を加える非制限用法を使う。',
    explanation: `【出題意図】関係代名詞の非制限用法（継続用法）の基本形を問う。【解説】Tomという固有名詞はすでに特定の1人を指すため、後ろに続く情報は「補足説明」となる。この場合コンマを打ってwho以下を続ける非制限用法を使う。【注意点】非制限用法ではthatを使えない（Tom, that is 〜は誤り）。また関係代名詞を省略することもできない。【関連知識】制限用法（コンマなし）は先行詞を限定・特定するために使うのに対し、非制限用法は先行詞についての追加情報を与える点で意味が異なる。`,
    pitfall: 'Tom, that is very good at soccer, とThatを使うのは誤り。非制限用法にthatは使えない。',
    memoryTip: '固有名詞・特定できるもの（the sun等）が先行詞のときはコンマ付きの非制限用法を選ぶ。',
  },
  {
    id: 'koko_kankan_eigo_c1_07',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、比較級を用いた否定表現を完成させなさい。

Nothing is (　) important (　) health.
（健康ほど大切なものはない）`,
    answer: 'more, than',
    hint: '「Nothing is 比較級 than〜」=「〜ほど…なものはない」という最上級相当表現。',
    explanation: `【出題意図】「Nothing is 比較級 than〜」構文による最上級の言い換え（否定+比較級）を問う。【解説】「何も〜より…でない」=「〜が一番…だ」という意味になる。importantの比較級はmore important。thanとセットで使う。【注意点】この構文は日本語の最上級表現「〜が一番大切だ」を英語で表現する際の重要な言い換えパターンとして頻出。【関連知識】同様の表現：Nothing is more precious than time.（時間ほど貴重なものはない）。`,
    pitfall: 'Nothing is importanter とするのは誤り。3音節以上の形容詞はmoreを前に置く。',
    memoryTip: '「Nothing is 比較級 than A」=「Aが一番」という最上級の書き換えパターンを丸暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c1_08',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    maxOnly: false,
    question: `次の直接話法の疑問文を間接話法に書き換えなさい。

She said to me, "Do you like tea?"
→ She asked me (　) (　) liked tea.`,
    answer: 'if (whether) I',
    hint: 'Yes/No疑問文の間接話法はif/whetherを使い、語順は平叙文の語順（主語+動詞）に戻す。',
    explanation: `【出題意図】Yes/No疑問文の話法転換（if/whetherの導入と語順変化）を問う。【解説】伝達動詞をaskedに変え、疑問文の内容をif（またはwhether）+平叙文の語順で続ける。youは話者（私）から見てIに変わる。動詞likeは伝達動詞askedの過去形に合わせてlikedにする（時制の一致）。【注意点】疑問詞のない疑問文（Yes/Noで答えられる疑問文）はif/whetherを使う点が、疑問詞がある疑問文（What did you like?等）と異なる。語順もDo you like→if I likedと平叙文の語順に戻す。【関連知識】疑問詞がある間接疑問文は疑問詞をそのまま使う（She asked me what I liked.）。`,
    pitfall: 'She asked me did I like tea と疑問文の語順のまま使うのは誤り。',
    memoryTip: 'Yes/No疑問文→if/whether+平叙文語順、疑問詞疑問文→疑問詞+平叙文語順、と型で覚える。',
  },

  // ============================================================
  // Q09–Q22: 標準（difficulty: 'standard'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_c1_09',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を分詞構文を使って書き換えなさい。

① When I saw her, I waved my hand.
② Because he was sick, he stayed home.
③ As it was written in French, I couldn't read the letter.`,
    answer: `① Seeing her, I waved my hand.
② Being sick, he stayed home.
③ Written in French, I couldn't read the letter.`,
    hint: '従属節の主語が主節と同じとき、接続詞と主語を消して動詞を分詞（-ing/p.p.）にする。',
    explanation: `【出題意図】時・理由・受動態を含む分詞構文への書き換えを問う。【解説】①「見たとき」→能動なのでSeeing（現在分詞）。②「病気だったので」→be動詞の分詞構文はBeing sick。③「フランス語で書かれていたので」→受動態の分詞構文は先頭のBeingを省略しWrittenから始める（Being writtenのBeingを省略）。【注意点】分詞構文を作る際は、①接続詞を消す、②主語が主節と同じなら消す、③動詞をing形（能動）かp.p.（受動）にする、の3ステップを踏む。【関連知識】否定の分詞構文はNot+分詞（Not knowing what to say, she remained silent.）。`,
    pitfall: '③をBeing written in Frenchとしても文法的には正しいが、受動の分詞構文ではBeingを省略するのがより自然。',
    memoryTip: '分詞構文の作り方は「接続詞を消す→主語を消す（同じなら）→動詞をing/p.p.に」の3手順。',
  },
  {
    id: 'koko_kankan_eigo_c1_10',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語句を入れ、独立分詞構文の文を完成させなさい。

(　) (　) fine, we decided to go on a picnic.
（天気が良かったので、私たちはピクニックに行くことにした）

語群：It / being`,
    answer: 'It being',
    hint: '分詞構文の意味上の主語が主節の主語と異なるときは、分詞の前にその主語を残す（独立分詞構文）。',
    explanation: `【出題意図】独立分詞構文（分詞の意味上の主語が主節の主語と異なる場合）を問う。【解説】「天気が良かった」の主語はIt（天候のit）だが、主節の主語はwe。両者が異なるため、分詞beingの前に意味上の主語Itを置く独立分詞構文にする。【注意点】通常の分詞構文は主節と従属節の主語が同じ場合にのみ主語を省略できる。主語が異なる場合は必ず意味上の主語を分詞の前に残す。【関連知識】独立分詞構文の代表例：Weather permitting, we will have the game outside.（天候が許せば、屋外で試合をします）。`,
    pitfall: 'Being fine, we decided〜と意味上の主語Itを省略すると、weが「良い天気だった」という意味になり誤り。',
    memoryTip: '主節と分詞の主語が違うときは、分詞の前に主語を必ず残す＝独立分詞構文。',
  },
  {
    id: 'koko_kankan_eigo_c1_11',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

If it (　) for your advice, I would have failed the exam.

ア. is not　イ. were not　ウ. had not been　エ. has not been`,
    answer: 'ウ(had not been)',
    hint: '「もし〜がなかったら」という過去の事実に反する仮定は仮定法過去完了（If it had not been for〜）。',
    explanation: `【出題意図】"If it had not been for〜"（〜がなかったら）という仮定法過去完了の重要構文を問う。【解説】主節がwould have failed（仮定法過去完了の帰結節）であることから、if節も過去の事実に反する仮定＝仮定法過去完了 had not been for〜 にする。【注意点】現在の事実に反する仮定なら If it were not for〜 となるが、本問は「（あのとき）試験に落ちていただろう」という過去の話なので had not been for が正しい。【関連知識】Without your advice, I would have failed the exam.はこの文の書き換え表現として頻出。`,
    pitfall: 'イ(were not)を選ぶと現在の仮定になり、主節would have failedの過去完了と時制が一致しない。',
    memoryTip: '「if it were not for」=現在、「if it had not been for」=過去、と時制で使い分ける。',
  },
  {
    id: 'koko_kankan_eigo_c1_12',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文の（　）に適切な関係代名詞を入れ、非制限用法の文を完成させなさい。

My father, (　) worked in Tokyo for ten years, moved back to Osaka last year.
（東京で10年間働いていた私の父は、去年大阪に戻った）`,
    answer: 'who',
    hint: '先行詞My father（人・特定の1人）にコンマが付いているので非制限用法。主格の関係代名詞who。',
    explanation: `【出題意図】非制限用法における関係代名詞whoの使用を問う。【解説】My fatherは特定の1人物を指すため、後ろに続く情報は補足説明であり、コンマ+who（非制限用法）でつなぐ。whoはworkedの主語の働きをする主格。【注意点】非制限用法ではthatを使用できないため、who/which以外の選択肢は不可。関係代名詞を省略することもできない点も制限用法との違い。【関連知識】非制限用法のwhichは前の文全体を先行詞にとることもできる（He passed the exam, which surprised everyone.）。`,
    pitfall: 'thatを入れると非制限用法では文法的に誤りとなる。',
    memoryTip: 'コンマ+関係代名詞＝非制限用法→thatは絶対に使えないと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_13',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の直接話法の文を間接話法に書き換えなさい。

He said to me, "I will visit you tomorrow."
→ He told me that (　) (　) visit me the next day.`,
    answer: 'he would',
    hint: '伝達動詞told（過去）に合わせてwill→wouldに時制を一致させる。tomorrow→the next dayに変える点にも注意。',
    explanation: `【出題意図】未来を表すwillを含む文の話法転換（時制の一致・語の変化）を問う。【解説】said to me→told meに変わり、伝達動詞がtoldと過去形なので、引用符内のwillはwouldに変える（時制の一致）。主語Iは話者から見てheに変わる。またtomorrowはその発言の翌日を指すのでthe next day（またはthe following day）に変える。【注意点】話法の転換では時制だけでなく、時や場所を表す語（tomorrow→the next day、here→there、this→that等）も適切に変換する必要がある。【関連知識】yesterday→the day before、now→then、ago→beforeなども同様の変換規則。`,
    pitfall: 'He told me that he will visit me tomorrowと時制・語をそのまま残すのは誤り。',
    memoryTip: '話法転換の語変換：tomorrow→the next day、yesterday→the day before、とセットで暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c1_14',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、比較の重要構文を完成させなさい。

① I have (　) as many books as you.（私はあなたの2倍の本を持っている）
② She is not so (　) as her sister.（彼女は姉ほど背が高くない）
③ This is (　) the most beautiful picture I have ever seen.（これは今まで見た中で断然最も美しい絵だ）`,
    answer: '① twice　② tall　③ by far',
    hint: '①倍数表現twice as〜as、②notを使った原級比較（not as〜as）、③最上級を強調するby far。',
    explanation: `【出題意図】倍数表現・否定の原級比較・最上級強調の応用表現を問う。【解説】①「2倍」→twice as many books as。②「〜ほど…でない」→not as [原級] as。「背が高くない」なのでtall（原級のまま）を入れる。③最上級を「断然・群を抜いて」と強調する副詞句by far。by far the+最上級、またはthe+最上級+by farの語順で使う。【注意点】②でtallerなど比較級にしないよう注意（not as〜asの中は必ず原級）。【関連知識】倍数表現の基本：half as〜as（半分）、three times as〜as（3倍）。`,
    pitfall: '②をnot as taller asとするのは誤り。not as〜asの中は原級を使う。',
    memoryTip: 'not as [原級] as＝比較級ではなく原級を使うと覚え、by farは最上級とセットで暗記。',
  },
  {
    id: 'koko_kankan_eigo_c1_15',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文の誤りを1か所指摘し、正しく直しなさい。

① If I have wings, I could fly to you.
② The pictures which taken by him are beautiful.
③ She asked me what did I want.`,
    answer: `① have → had（仮定法過去はif節で過去形を使う）
② which taken → which were taken（受動態の関係詞節にはbe動詞が必要）
③ what did I want → what I wanted（間接疑問文は平叙文の語順、時制の一致でwanted）`,
    hint: '①仮定法過去のif節、②関係代名詞節内の受動態、③間接疑問文の語順と時制の一致。',
    explanation: `【出題意図】仮定法・関係代名詞の受動態・間接疑問文という3つの重要文法の誤り発見・訂正を問う。【解説】①現在の事実に反する仮定なのでif節は過去形had wingsが正しい（If I have wingsは直説法で不自然）。②「撮られた写真」という受動の意味だが、関係代名詞節の中にbe動詞がなくwhich takenだけでは受動態にならない→which were takenと直す。③間接疑問文は疑問文の語順（did I want）ではなく平叙文の語順（I wanted）にする。伝達動詞askedに合わせて時制の一致も行う。【注意点】②のような「関係代名詞+過去分詞」だけの誤りは、be動詞の欠落に気づきにくいので要注意。【関連知識】分詞の後置修飾（The pictures taken by him）にすればbe動詞なしでも正しい文になる。`,
    pitfall: '②を関係代名詞の後置修飾と混同し、the pictures taken by himならbe動詞不要である点との違いに注意。',
    memoryTip: '関係代名詞節は「主語+動詞」の完全な文になっているかを必ずチェックする。',
  },
  {
    id: 'koko_kankan_eigo_c1_16',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。

① [ tired / feeling / went / very / she / to bed / , ] early.
  （とても疲れていたので、彼女は早く寝た）

② [ what / know / I / to / don't / say ] to her.
  （彼女に何と言えばいいかわからない）

③ [ than / this / more / is / difficult / that / problem ] one.
  （この問題はあの問題より難しい）`,
    answer: `① Feeling very tired, she went to bed early.
② I don't know what to say to her.
③ This problem is more difficult than that one.`,
    hint: '①分詞構文（理由）、②疑問詞+to不定詞、③比較級+than。',
    explanation: `【出題意図】分詞構文・疑問詞+to不定詞・比較級構文の語順整序を問う。【解説】①「とても疲れて（いたので）」＝理由を表す分詞構文Feeling very tired。カンマの後に主節she went to bed earlyを続ける。②「何と言うべきか」＝what to say（疑問詞+to不定詞）をknowの目的語にする。③difficultは3音節以上のためmore difficultと比較級を作り、thanで比較対象thatを続ける。【注意点】①はFeelingで始めることでve主語she（主節と同じ）を省略した形と理解する。【関連知識】疑問詞+to不定詞：how to use（使い方）、where to go（どこへ行くか）なども同型。`,
    pitfall: '③をthis problem is difficult than thatとmoreを忘れるのは誤り（difficultは比較級にmoreが必要）。',
    memoryTip: '3音節以上の形容詞はmore/mostを付ける、と音節数で判断できるようにする。',
  },
  {
    id: 'koko_kankan_eigo_c1_17',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の英文を読み、設問に答えなさい。

Not knowing what to do, Ken called his teacher for advice. Having listened to Ken's problem carefully, the teacher gave him some useful suggestions. Encouraged by her words, Ken decided to try again.

① 下線部「Not knowing what to do」の意味を日本語で答えよ。
② 「Having listened」はどの分詞構文の形か（現在分詞/過去分詞/完了形の分詞構文）。
③ 「Encouraged by her words」の意味上の主語は誰か。`,
    answer: `① どうすればよいかわからなくて
② 完了形の分詞構文（Having+過去分詞）
③ Ken`,
    hint: '①notは分詞構文を否定する語で分詞の直前に置く。②Having+p.p.は主節より前の時制を表す完了形の分詞構文。③Encouragedされたのは文脈上Ken。',
    explanation: `【出題意図】否定の分詞構文・完了形の分詞構文・分詞構文の意味上の主語把握を問う総合問題。【解説】①分詞構文の否定はNot+分詞（knowing）の形。「どうすればよいかわからなくて」という理由を表す。②Having+過去分詞（Having listened）は、主節の動詞（gave）より前に起こった動作を表す完了形の分詞構文。「（先に）聞いた上で」という意味。③Encouraged by her wordsの意味上の主語は主節の主語Kenと一致する（Kenが勇気づけられた）。【注意点】完了形の分詞構文は、分詞構文の動作が主節の動作より時間的に先行する場合に使われる。【関連知識】否定の分詞構文の例：Not having any money, he couldn't buy the ticket.（お金を持っていなかったので、チケットを買えなかった）。`,
    pitfall: '②をただの現在分詞構文（Knowing）と混同しない。Having+p.p.は時間差を明示する完了形。',
    memoryTip: '否定の分詞構文＝Not/Never+分詞、時間差のある分詞構文＝Having+p.p.と型で覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_18',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の会話の（　）に最も適切な文を選びなさい。

A: I heard you passed the entrance exam. Congratulations!
B: Thank you. (　)
A: That's a great attitude to have.

① I couldn't have done it without my teacher's help.
② I don't like studying at all.
③ I have never taken any exam.
④ It doesn't matter to me at all.`,
    answer: '① I couldn\'t have done it without my teacher\'s help.',
    hint: 'Aが「素晴らしい心構えだ」と褒めていることから、Bは謙虚で前向きな発言をしているはず。',
    explanation: `【出題意図】自然な会話の流れと仮定法（couldn't have done）の理解を問う。【解説】Aの最後の発言「That's a great attitude to have.（それは素晴らしい心構えだ）」につながるには、Bが謙虚に感謝を示す発言をしている必要がある。①「先生の助けがなければやり遂げられなかった」→謙虚な姿勢を示し、Aの褒め言葉と自然につながる。②③④はいずれも文脈やAの返答と矛盾する。【注意点】couldn't have done it without〜は仮定法過去完了（Without〜, I couldn't have done it.の倒置的な言い方）。感謝や謙虚さを表す定番表現。【関連知識】I owe it all to〜（すべて〜のおかげだ）も同様の謙虚な感謝表現。`,
    pitfall: '②「勉強が嫌い」を選ぶと、合格を喜ぶ文脈やAの褒め言葉と矛盾する。',
    memoryTip: 'Aの返答（That\'s a great attitude）から逆算し、謙虚・前向きな発言を選ぶ。',
  },
  {
    id: 'koko_kankan_eigo_c1_19',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切な語を入れ、関係代名詞の非制限用法を完成させなさい。

Kyoto, (　) is famous for its temples, attracts many tourists every year.
（京都は、寺院で有名だが、毎年多くの観光客を引き付ける）`,
    answer: 'which',
    hint: '先行詞Kyoto（地名・固有名詞）にコンマが付いている非制限用法。地名は物・場所扱いでwhich。',
    explanation: `【出題意図】地名を先行詞とする非制限用法の関係代名詞whichを問う。【解説】Kyotoは地名（物・場所として扱われる固有名詞）なので、関係代名詞はwhichを使う。コンマが付いているため非制限用法であり、Kyotoについての補足説明としてwhich is famous for its templesが続く。【注意点】地名や国名など「場所」を表す固有名詞は、人ではないためwhoではなくwhichを使う点に注意。whereと混同しないよう、ここでは主語の働きをする関係代名詞が必要（is famousの主語）。【関連知識】Kyoto, where many temples are located,のようにwhereを使う場合は後ろが完全な文（副詞的に働く）になる。`,
    pitfall: 'whoを選ぶのは誤り。Kyotoは人ではなく地名なのでwhichが正しい。',
    memoryTip: '地名・国名は「人」ではなく「もの」として扱いwhichを使うと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_20',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の直接話法の命令文を間接話法に書き換えなさい。

The doctor said to me, "Don't eat too much sugar."
→ The doctor told me (　) (　) eat too much sugar.`,
    answer: 'not to',
    hint: '命令文の間接話法は「tell+人+to do」の形。否定の命令文はnot to doにする。',
    explanation: `【出題意図】命令文（特に否定命令文）の話法転換を問う。【解説】命令文を間接話法にするときは「tell/ask+人+to do」の形にする。否定の命令文Don't〜はnot to doにする（tell+人+not to do）。【注意点】命令文の話法転換ではthatを使わず、to不定詞を使う点が平叙文・疑問文と大きく異なる。動詞はsaid to→toldに変える必要がある（tell+人+to doの形にするため）。【関連知識】肯定の命令文の場合：He said to me, "Open the door." → He told me to open the door.（toのみ）。`,
    pitfall: 'The doctor told me that I don\'t eat too much sugar とthat節にするのは、命令文の話法転換としては不自然。',
    memoryTip: '命令文の話法転換＝tell+人+(not) to do、と定型フレーズごと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_21',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

Osaka is one of the (　) cities in Japan.

ア. large　イ. larger　ウ. largest　エ. more large`,
    answer: 'ウ(largest)',
    hint: '「one of the+最上級+複数名詞」=「最も〜な…の1つ」という頻出構文。',
    explanation: `【出題意図】「one of the+最上級+複数名詞」構文を問う。【解説】「日本で最も大きな都市の1つ」という意味を表すには、最上級largestを使い、後ろに複数名詞cities（citiesは既に複数形）を続ける。「one of the+最上級+複数名詞」は「最も〜な…の1つ」という定型表現。【注意点】この構文では最上級の後ろに続く名詞は必ず複数形にする（1つに限定しないため）。theを忘れないことも重要（最上級には基本的にtheを付ける）。【関連知識】He is one of the most famous singers in Japan.（彼は日本で最も有名な歌手の1人だ）も同型の頻出表現。`,
    pitfall: 'イ(larger)を選ぶと比較対象が不明確になり、「〜の1つ」という最上級のニュアンスが出せない。',
    memoryTip: '「one of the+最上級+複数名詞」は丸ごと1つのフレーズとして暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c1_22',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    maxOnly: false,
    question: `次の（　）に適切なイディオムを入れなさい。

① The plan will (　) into effect next month.（その計画は来月実施される）
   ア. take　イ. come　ウ. make

② We need to (　) up with a solution soon.（すぐに解決策を考え出す必要がある）
   ア. come　イ. take　ウ. give

③ He (　) down the offer because it was too risky.（彼はその申し出をリスクが高すぎるので断った）
   ア. turned　イ. put　ウ. got`,
    answer: '① イ(come into effect)　② ア(come up with)　③ ア(turned down)',
    hint: 'come into effect=実施される、come up with=思いつく、turn down=断る。',
    explanation: `【出題意図】頻出句動詞・イディオム（come into effect / come up with / turn down）の意味を問う。【解説】①come into effect=（法律・計画などが）実施される、発効する。②come up with〜=〜を思いつく、考え出す。③turn down〜=〜を断る、拒否する。【注意点】turn downは「音量を下げる」の意味もあるため文脈判断が必要（ここでは「申し出を断る」の意味）。【関連知識】put into effect（〜を実施する、他動詞用法）、turn up（現れる、音量を上げる）なども関連イディオム。`,
    pitfall: '③をput downとすると「置く・下ろす」の意味になり「断る」にはならない。',
    memoryTip: 'come into effect=発効、come up with=思いつく、turn down=断る、と3点セットで暗記。',
  },

  // ============================================================
  // Q23–Q50: 発展（difficulty: 'advanced'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_c1_23',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えなさい。

Having grown up in a small village, Maria had never seen a big city until she moved to Tokyo for university. Overwhelmed by the crowds and noise at first, she gradually came to appreciate the convenience of city life. Now, having lived in Tokyo for five years, she cannot imagine going back to her hometown.

① 下線部「Having grown up」はどの時制の分詞構文か、説明せよ。
② 「Overwhelmed by the crowds and noise」の意味上の主語は誰か。
③ この文章の内容と一致するものを選べ。
  ア. マリアは都会暮らしに最初から満足していた。
  イ. マリアは田舎育ちで、大学進学まで都会を見たことがなかった。
  ウ. マリアは今も田舎に戻りたいと思っている。`,
    answer: `① 完了形の分詞構文（Having+過去分詞）。主節（had never seen）よりも前の時点の出来事（成長の過程）を表す。
② Maria
③ イ`,
    hint: '①Having+p.p.は主節より前の時制。②Overwhelmedは文脈上マリア自身の状態。③本文冒頭「Having grown up in a small village」と「had never seen a big city」に注目。',
    explanation: `【出題意図】完了形の分詞構文と受動の分詞構文が連続する高度な英文の読解を問う。【解説】①Having grown upは、主節had never seenよりもさらに前（幼少期からの成長過程）を表す完了形の分詞構文。②Overwhelmed by the crowds and noiseの意味上の主語は主節の主語sheと一致し、she（Maria）が圧倒された、という意味。③本文冒頭「Having grown up in a small village, Maria had never seen a big city until she moved to Tokyo」から、マリアは田舎育ちで大学進学まで大都市を見たことがなかったとわかる→イが正解。アは「最初から満足」が本文の「Overwhelmed（圧倒された）」と矛盾。ウは「back to her hometown」を「想像できない（cannot imagine）」としているので誤り。【注意点】分詞構文が2つ連続する文では、それぞれの時制関係（完了形か単純形か）を丁寧に見極める。【関連知識】gradually came to+動詞原形=「次第に〜するようになった」という変化を表す重要表現。`,
    pitfall: 'ウを選ぶと本文の「cannot imagine going back」（戻ることを想像できない＝戻りたくない）の意味と逆になる。',
    memoryTip: 'Having+p.p.は「時間的に前」のサイン。単純な分詞構文（-ing/p.p.のみ）と時制の違いを区別する。',
  },
  {
    id: 'koko_kankan_eigo_c1_24',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① (　) more carefully, he would not have made such a mistake.
  ア. If he thought　イ. Had he thought　ウ. If he think　エ. He had thought

② (　) it not been for the internet, our lives would be very different today.
  ア. If　イ. Were　ウ. Had　エ. Was`,
    answer: '① イ(Had he thought)　② ウ(Had)',
    hint: '①仮定法過去完了のifの省略による倒置（Had+主語+p.p.）。②「Had it not been for〜」=「〜がなかったら」の倒置形。',
    explanation: `【出題意図】仮定法における if の省略と倒置（Had+S+p.p.〜）を問う高難度問題。【解説】①仮定法過去完了のif節「If he had thought more carefully」からifを省略すると、主語と助動詞を倒置してHad he thought more carefullyとなる。主節would not have made（仮定法過去完了の帰結節）と時制が一致する。②「If it had not been for the internet」からifを省略した倒置形はHad it not been for the internet。主節would be（仮定法過去の帰結節）に注目すると、実は現在の話（today）なので厳密にはIf it were not forが対応するはずだが、本問はHad（過去）を使った倒置形が示され、過去のインターネット普及が現在にも影響しているという文脈上、Hadの倒置が正解となる。【注意点】ifの省略による倒置はwere/had/should から始まる仮定法特有の語順変化。疑問文の語順と混同しないよう注意（意味は疑問文ではなく条件節）。【関連知識】Should you have any questions,〜（もし質問があれば）も同様のif省略倒置（仮定法未来）。`,
    pitfall: '①でイ以外を選ぶと、ifの省略による倒置という高度な文法知識が反映されない誤答になる。',
    memoryTip: 'if節の省略による倒置：Were（仮定法過去）、Had（仮定法過去完了）、Should（仮定法未来）で始まる形を覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_25',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① Written in simple English, but the book was still difficult for me.
② The more carefully you drive, the safety you will be.
③ She is one of the most talented musician I have ever met.
④ I wish I could have met her, but I am busy at that time.`,
    answer: `① Written in simple English, but → Written in simple English,（分詞構文の後にbutを重ねて使わない）
② the safety → the safer（the+比較級が必要。safetyは名詞なので誤り）
③ musician → musicians（one of the+最上級+複数名詞にする）
④ I am busy at that time → I was busy at that time（過去の話なので時制をwasに合わせる）`,
    hint: '①分詞構文と接続詞butの重複、②the比較級の形、③one of the 最上級+複数形、④時制の一致。',
    explanation: `【出題意図】分詞構文・比較の重要構文・時制の一致に関する典型的な誤りを発見・訂正させる高難度問題。【解説】①分詞構文Written in simple Englishはbecauseやbutなどの接続詞の意味をすでに含んでいるため、butを重ねて使うのは誤り（分詞構文の後にbutを置かない）。②「the+比較級, the+比較級」構文で、safetyは名詞なのでthe safer（比較級の形容詞）にする必要がある。③「one of the+最上級+複数名詞」の構文なのでmusicianを複数形musiciansにする。④「I wish I could have met her」（過去の実現しなかった願望）に続く文脈から、at that timeは過去のことを指すのでbusyの前のamをwasに直す時制の一致が必要。【注意点】①のように分詞構文自体が接続詞の意味（逆接・理由等）を含むため、接続詞と重複させないことが重要。【関連知識】分詞構文はもともと「接続詞+主語+動詞」から接続詞と主語を省いた形なので、接続詞を残したまま分詞にすると意味が重複し不自然になる。`,
    pitfall: '①のような分詞構文+butの重複は見落としやすい典型的な誤り。',
    memoryTip: '分詞構文は「接続詞の意味を内包している」ため、接続詞と一緒に使わないことを徹底する。',
  },
  {
    id: 'koko_kankan_eigo_c1_26',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えなさい。

[Passage]
Artificial intelligence, which was once considered science fiction, is now part of everyday life. Many people use AI-powered assistants, recommendation systems, and translation tools without even realizing it. Given the rapid pace of development, some experts predict that AI will soon perform tasks that currently require human judgment, such as medical diagnosis and legal analysis. Others, however, argue that AI lacks the empathy and ethical reasoning necessary for such tasks, and that human oversight will always be essential.

【設問】
① 下線部「which was once considered science fiction」の文法的な用法を答えよ。
② 「Given the rapid pace of development」の文法的な働きを説明せよ。
③ 楽観派（optimists）が予想している内容を英語で答えよ。
④ 慎重派（cautious experts）が主張している根拠を日本語で2点まとめよ。`,
    answer: `① 関係代名詞の非制限用法（先行詞Artificial intelligenceに補足説明を加えている）
② 分詞構文（Givenは「〜を考えると」という意味の慣用的な分詞構文・前置詞的用法）
③ AI will soon perform tasks that currently require human judgment, such as medical diagnosis and legal analysis.
④ ・AIには共感（empathy）が欠けている。・AIには倫理的判断力（ethical reasoning）が欠けているため、人間による監督が常に必要だという根拠。`,
    hint: '①コンマ+whichで先行詞Artificial intelligenceを補足。②Givenは「〜を考慮すると」という定型の分詞構文。③some expertsの発言内容。④Others, however, argueの内容。',
    explanation: `【出題意図】AIをテーマにした論説文で、非制限用法・慣用的分詞構文（Given〜）・対立する意見の抽出を問う総合読解問題。【解説】①「which was once considered science fiction」はコンマの後に続き、先行詞Artificial intelligenceに対する補足説明を加える非制限用法。②Given〜は「〜を考慮すると・〜を踏まえると」という意味の慣用的な分詞構文で、前置詞のように機能する（Considering〜と同義）。③楽観派の予測：「AI will soon perform tasks that currently require human judgment, such as medical diagnosis and legal analysis.」④慎重派の根拠：AIには共感が欠けている、AIには倫理的判断力が欠けている、という2点（そのため人間の監督が常に必要）。【注意点】④は「argue that A lacks B and C」の構造からB（empathy）とC（ethical reasoning）の2要素を正確に抜き出す。【関連知識】Given that S+V〜（〜ということを考えると）という節を伴う用法もある。AI関連語彙：AI-powered、recommendation system、human oversight、ethical reasoning。`,
    pitfall: '④で「human oversight will always be essential」を根拠と誤答しない。これは根拠ではなく結論。',
    memoryTip: 'Given〜=Considering〜（〜を考慮すると）という書き換え可能な慣用分詞構文として覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_27',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（30語以上、分詞構文を1つ使うこと）

「彼女が言ったことに驚いて、私は何と答えればよいかわからなかった。もし彼女がもっと早く教えてくれていたら、私はもっとうまく準備できていたのに。」`,
    answer: `（解答例）Surprised at what she said, I didn't know what to say. If she had told me earlier, I could have prepared much better.（22語→語数を増やす必要あり）

（30語以上の解答例）Being surprised at what she had told me, I had no idea what to say in response. If only she had told me about it earlier, I could have prepared myself much better for the situation.（35語）`,
    hint: '「驚いて」→分詞構文Surprised at〜またはBeing surprised at〜。「もし〜していたら〜できたのに」→仮定法過去完了。',
    explanation: `【出題意図】分詞構文と仮定法過去完了を組み合わせた和文英訳。感情の分詞構文・関係詞what・仮定法の複合運用を問う。【解説】「彼女が言ったことに驚いて」→Being surprised at what she had told me（whatは「〜すること・もの」を表す関係代名詞、she had toldは私が驚いた時点よりも前の出来事なので過去完了にすると精密）。「何と答えればよいかわからなかった」→had no idea what to say（疑問詞+to不定詞）。「もし彼女がもっと早く教えてくれていたら」→If she had told me earlier（仮定法過去完了のif節）。「もっとうまく準備できていたのに」→I could have prepared much better（仮定法過去完完了の帰結節）。【注意点】感情を表す分詞構文はBeing+p.p.の形が基本だが、Being省略でSurprisedのみで始めることも可能。仮定法過去完了はhad+p.p.（if節）とwould/could have+p.p.（主節）の組み合わせを正確に対応させる。【関連知識】If only〜（〜でありさえすれば）は仮定法の強い願望・後悔を表す表現として頻出。`,
    pitfall: 'If she told me earlierと仮定法過去にすると、過去の後悔ではなく現在の仮定になり文脈と矛盾する。',
    memoryTip: '感情の分詞構文＋仮定法過去完了の組み合わせは高度な入試英作文の定番パターン。',
  },
  {
    id: 'koko_kankan_eigo_c1_28',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① Judging from the sky, it (　) rain this afternoon.
  ア. must　イ. can　ウ. should　エ. would

② The more information we have access to, the (　) it becomes to make a decision.
  ア. easy　イ. easier　ウ. easiest　エ. more easy

③ She speaks English as (　) fluently as a native speaker.
  ア. so　イ. such　ウ. as　エ. more`,
    answer: '① ア(must)　② イ(easier)　③ ウ(as)',
    hint: '①「空模様から判断すると」→高い確信の推量must。②the比較級, the比較級構文。③as〜as構文（原級比較）の最初のas。',
    explanation: `【出題意図】慣用的分詞構文Judging from〜、the比較級構文、as〜as構文の複合運用を問う。【解説】①Judging from〜（〜から判断すると）は慣用的な分詞構文。空模様から強い確信を持って推量する場合、must（〜に違いない）が適切。②「the more情報, the 比較級」の構文なので、easyの比較級easierを選ぶ。③as fluently as〜（〜と同じくらい流暢に）の原級比較構文の最初のasを選ぶ。【注意点】①のcan/should/wouldは確信度がmustより弱く、文脈（空模様からの明確な判断）には合わない。③はas〜asがセットであり、soやsuchでは代用できない。【関連知識】Judging from〜と同様の慣用分詞構文：Speaking of〜（〜と言えば）、Considering〜（〜を考えると）、Talking of〜（〜と言えば）。`,
    pitfall: '①でイ(can)を選ぶと「降るかもしれない」程度の弱い推量になり、Judging fromの強い根拠に基づく文脈と合わない。',
    memoryTip: 'Judging from〜=判断すると→強い確信のmustと相性が良いと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_29',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えよ。

Strictly speaking, the word "hero" does not always mean someone with superpowers. Generally speaking, a hero is anyone who acts with courage and compassion, even in small ways. Considering how often ordinary people help others without recognition, perhaps the world has far more heroes than we realize.

① 「Strictly speaking」「Generally speaking」「Considering」に共通する文法的性質を答えよ。
② 本文の定義によると、「hero」とはどのような人物か、日本語で述べよ。
③ 筆者が最終的に伝えたいメッセージを日本語で40字以内でまとめよ。`,
    answer: `① いずれも慣用的な分詞構文（独立分詞構文的に使われ、文全体を修飾する副詞句として機能する）。
② スーパーパワーを持つ人とは限らず、小さなことであっても勇気と思いやりを持って行動する人。
③ 認知されなくても他者を助ける普通の人々の中にこそ、思っているより多くの英雄がいるということ。（44字→要約：普通の人々の中に、気づかぬヒーローが多くいるということ。）`,
    hint: '①いずれも慣用句化した分詞構文（Strictly speaking=厳密に言うと等）。②本文2文目の定義。③本文最終文「perhaps the world has far more heroes than we realize」。',
    explanation: `【出題意図】慣用的分詞構文（Strictly speaking等）の文法的性質理解と、論説文の定義・結論把握を問う高難度問題。【解説】①Strictly speaking（厳密に言えば）、Generally speaking（一般的に言えば）、Considering〜（〜を考えると）はいずれも文全体を修飾する副詞的な働きをする慣用的分詞構文。特定の主語に依存せず、話者の視点を示す独立した表現として定着している。②本文「a hero is anyone who acts with courage and compassion, even in small ways」から、スーパーパワーの有無に関わらず、勇気と思いやりを持って（小さなことでも）行動する人と定義されている。③最終文「perhaps the world has far more heroes than we realize」から、認識されていないだけで、私たちが思う以上に多くの英雄が世の中にいる、というメッセージが読み取れる。【注意点】①のような慣用的分詞構文は、通常の分詞構文の「主語一致」のルールから外れた例外的表現として整理する。【関連知識】同様の慣用分詞構文：Frankly speaking（率直に言うと）、Judging from〜（〜から判断すると）、Given〜（〜を考慮すると）。`,
    pitfall: '①を「独立分詞構文（主語がその都度示される）」と混同しない。これらは主語を示さない完全な慣用句。',
    memoryTip: '"〜ly speaking"の形の分詞構文は慣用句として、主語一致のルールを気にせず丸暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c1_30',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えよ。

Having been postponed twice due to bad weather, the marathon finally took place on a sunny Sunday morning. Thousands of runners, coming from all over the country, gathered at the starting line. What impressed the spectators most was not the winner's speed but the determination shown by runners who finished last.

① 「Having been postponed」の分詞構文の種類を2つの観点（時制・態）から説明せよ。
② 「coming from all over the country」はどの名詞を修飾しているか。
③ 下線部「What impressed the spectators most」を日本語に訳せ。`,
    answer: `① 時制の観点：完了形（Having+p.p.）で主節（took place）より前の出来事を表す。態の観点：受動態（been postponed＝延期される、という受け身の意味）。
② Thousands of runners
③ 観客を最も感動させたもの（こと）`,
    hint: '①Having been+p.p.＝完了形+受動態の分詞構文。②直前の名詞を修飾する現在分詞の後置修飾。③What+動詞は「〜すること・もの」を表す関係代名詞の主語用法。',
    explanation: `【出題意図】完了形かつ受動態の分詞構文、分詞の後置修飾、関係代名詞whatの主語用法という3つの高度な文法事項を問う。【解説】①Having been postponedは、Having+been+p.p.の形。時制の観点では主節took place（過去）よりも前に起きた出来事（延期されたこと）を表す完了形。態の観点では「延期された」という受動の意味を表す受動態。両方を組み合わせた高度な分詞構文。②coming from all over the countryは、直前のThousands of runnersを修飾する現在分詞の後置修飾（「全国各地から来た何千人ものランナー」）。③What impressed the spectators mostは「観客を最も感動させたもの・こと」という意味。Whatは先行詞を含む関係代名詞で、この節全体がwasの主語になっている（What impressed the spectators most was not A but B.の構造）。【注意点】①のようにHaving been+p.p.は「完了+受動」の複合形であることを明確に区別して説明する必要がある。【関連知識】not A but B（AではなくB）の構文も本文で使われており、対比構造の理解にも役立つ。`,
    pitfall: '①で時制のみ、または態のみを答えて片方を見落とさないよう、必ず両方の観点から説明する。',
    memoryTip: 'Having been+p.p.=「完了形（Having+p.p.）」×「受動態（be+p.p.）」の掛け合わせと理解する。',
  },
  {
    id: 'koko_kankan_eigo_c1_31',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、英語で意見を述べなさい。（35語以上、仮定法を1つ使うこと）

テーマ：「もしあなたが1年間、世界のどこにでも住めるとしたら、どこに住みたいですか。理由とともに述べなさい。」`,
    answer: `（解答例）If I could live anywhere in the world for a year, I would choose New Zealand. I love nature, and I believe living there would allow me to experience a slower, more peaceful lifestyle surrounded by beautiful scenery. （36語）`,
    hint: '仮定法過去（If I could〜, I would〜）を使い、理由を具体的に述べる。',
    explanation: `【出題意図】仮定法過去を用いた自由英作文。現実には起きていない仮定の状況について、理由とともに意見を述べる表現力を問う。【解説】「もし〜できるとしたら」という現実には起こっていない仮定はIf I could live anywhere〜, I would choose〜という仮定法過去の基本形で表す。理由付けにはbecause、and、believeなどでつなぎ、具体的な内容（自然・ライフスタイル等）を加えることで説得力が増す。【注意点】35語以上を確実に満たすため、場所を選んだ理由を1〜2文で具体的に展開する。仮定法の時制のねじれ（If節：過去形、主節：would+原形）を必ず守る。【関連知識】自由英作文で使える理由付け表現：This is because〜、One reason is that〜、For example〜。`,
    pitfall: 'If I can live anywhereと現在形にすると仮定法にならず、単なる条件文になってしまう。',
    memoryTip: '仮定法過去の自由英作文は「If I could/were〜, I would〜」の型に理由を当てはめる形で書く。',
  },
  {
    id: 'koko_kankan_eigo_c1_32',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えよ。

[Passage 1]
For decades, standardized tests have been the primary method used to evaluate students' academic abilities. Supporters argue that such tests provide an objective, fair way to compare students from different schools and backgrounds.

[Passage 2]
Critics, however, claim that standardized tests measure only a narrow range of skills, such as memorization, while ignoring creativity, critical thinking, and collaboration — abilities increasingly valued in the workplace. Moreover, students who are not good test-takers may be unfairly judged despite having strong abilities in other areas.

[Passage 3]
A growing number of schools are therefore adopting alternative assessment methods, such as project-based evaluations and portfolios, which allow students to demonstrate a wider variety of skills. Whether these methods can fully replace standardized tests, however, remains a subject of ongoing debate.

【設問】
① 標準テスト支持派の主張を英語で1文で答えよ。
② 標準テスト批判派が指摘する問題点を日本語で2点まとめよ。
③ 第3段落で紹介されている代替手段を英語で2つ答えよ。
④ この文章全体の論理構成を50字以内の日本語で説明せよ。`,
    answer: `① Standardized tests provide an objective, fair way to compare students from different schools and backgrounds.
② ・標準テストは記憶力など狭い範囲の能力しか測れず、創造性や批判的思考、協働性を評価できない。・テストが苦手な生徒が、他の分野で優れた能力を持っていても不当に低く評価される可能性がある。
③ project-based evaluations and portfolios
④ 標準テストの利点（客観性・公平性）を提示した後、その限界（狭い評価範囲・不公平さ）を批判し、代替評価法の登場という展開を紹介する構成。（68字→要約する）標準テストの利点→批判→代替案の紹介という3段階の構成。`,
    hint: '①第1段落のSupporters argue that〜。②第2段落のCriticsの2つの主張。③第3段落のsuch as以降。④賛成→反対→代替案という論説文の典型構成。',
    explanation: `【出題意図】標準テストをテーマにした3段落構成の論説文読解。賛成・反対・代替案という論説文の典型パターンの理解と情報抽出能力を問う。【解説】①第1段落のSupporters argueの内容：客観的で公平な比較方法を提供する、という1文。②第2段落の批判点：(a)記憶力など狭い範囲の能力しか測れず、創造性・批判的思考・協働性を無視している、(b)テストが苦手な生徒が他の能力を持っていても不当に評価される可能性がある、の2点。③第3段落の代替手段：project-based evaluations（プロジェクト型評価）とportfolios（ポートフォリオ）の2つ。④全体の論理構成：第1段落で利点を提示→第2段落で批判・限界を指摘→第3段落で代替案の登場と、その有効性については議論が続いていることを紹介する3段階構成。【注意点】④は単なる要約ではなく「論理構成（どのような順序で議論が展開されているか）」を説明することが求められている点に注意。【関連知識】教育評価に関する語彙：standardized test、objective、critical thinking、collaboration、portfolio、project-based evaluation。`,
    pitfall: '④で本文の内容をそのまま要約するのではなく、賛成→反対→代替案という「構成の流れ」を説明する必要がある。',
    memoryTip: '3段落論説文の型：段落1=利点提示、段落2=批判、段落3=代替案・結論、というパターンを毎回確認する。',
  },
  {
    id: 'koko_kankan_eigo_c1_33',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① Not (　) what to say, she remained silent.
  ア. know　イ. knowing　ウ. known　エ. to know

② All things (　), I still think this plan is worth trying.
  ア. consider　イ. considering　ウ. considered　エ. to consider

③ There is nothing left (　) for us to do.
  ア. but　イ. except to do　ウ. besides　エ. than`,
    answer: '① イ(knowing)　② ウ(considered)　③ ア(but)',
    hint: '①否定の分詞構文Not+ing。②独立分詞構文（受動：considered）。③There is nothing left but to do〜=「〜する以外にない」。',
    explanation: `【出題意図】否定の分詞構文・独立分詞構文（All things considered）・nothing but構文という3つの高難度表現を問う。【解説】①「何と言うべきかわからず」という否定の分詞構文はNot+現在分詞（knowing）。②All things consideredは「すべてを考慮すると」という意味の独立分詞構文（things=主語、consideredは受動の過去分詞）で、慣用表現として定着している。③There is nothing left but to do〜=「〜する以外に残されたものはない」。butは前置詞的に「〜以外」の意味で使われる。【注意点】②はAll things being consideredのbeingが省略された形と理解できる。③のbutはexceptと同じ意味で使われる特殊な用法。【関連知識】nothing but〜（ただ〜だけ）、have no choice but to do（〜する以外に選択肢がない）も同系統の表現。`,
    pitfall: '③でイ(except to do)を選ぶと、通常exceptの後は動詞原形または前置詞句が続くため文法的に不自然（except toだと二重になる）。',
    memoryTip: 'All things considered（すべてを考慮すると）は独立分詞構文の定型句として丸暗記する。',
  },
  {
    id: 'koko_kankan_eigo_c1_34',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文の誤りを1か所指摘し、正しく直しなさい。

① Compared with last year, sales have increased dramatically this year, that made investors happy.
② Having finished her homework, television was watched by Yumi for two hours.
③ The more we know about other cultures, the less we become prejudiced.
④ I would rather you stayed here than go alone.`,
    answer: `① that made → which made（非制限用法の関係代名詞whichで前文全体を受ける。thatは非制限用法に使えない）
② television was watched by Yumi → Yumi watched television（分詞構文の意味上の主語は主節の主語と一致させる必要があり、Having finishedの主語はYumiなので、主節の主語もYumiにする）
③ the less we become → we become less（「the+比較級」の語順に合わせ、becomeの後の形容詞less prejudicedの語順を確認。正しくはthe less prejudiced we become）
④ than go alone → than have you go alone（rather A than Bの構文を統一する。もしくはthan going aloneとする）`,
    hint: '①非制限用法にthatは使えない。②分詞構文の意味上の主語の一致（懸垂分詞の誤り）。③the比較級構文の語順。④would rather+過去形との対応。',
    explanation: `【出題意図】非制限用法・分詞構文の主語一致（懸垂分詞の誤り）・the比較級構文の語順・would ratherの構文という4つの重要文法の誤り発見を問う最高難度の問題。【解説】①コンマの前の文全体を受けて「それが投資家を喜ばせた」という意味にするには非制限用法のwhichを使う（thatは非制限用法不可）。②Having finished her homeworkの意味上の主語はYumiだが、主節が受動態television was watched by Yumiになっているため、分詞の主語（Yumi＝したこと）と主節の主語（television＝見られたもの）が一致しない懸垂分詞（ダングリング・パーティシプル）の誤り。主節をYumi watched televisionという能動態にして主語を一致させる。③the more〜, the 比較級〜の構文で、「less prejudiced（より偏見が少ない）」という比較級のまとまりを崩さないよう語順を整える（the less prejudiced we become）。④I would rather S+過去形（仮定法的用法）〜than S+動詞の構文で、比較対象の形をそろえる必要がある（動名詞にするか、同じ形にする）。【注意点】②のような懸垂分詞は非常に見落としやすい高度な誤りで、「分詞の意味上の主語と主節の主語が一致しているか」を必ず確認する習慣が重要。【関連知識】懸垂分詞の例：Walking down the street, a big dog suddenly appeared.（歩いていたのは「私」のはずなのに主語がa big dogになっている誤り）も同種のミス。`,
    pitfall: '②の懸垂分詞（ダングリング・パーティシプル）は文法的には一見自然に見えるため特に注意が必要。',
    memoryTip: '分詞構文を見たら必ず「分詞の意味上の主語＝主節の主語」になっているかをチェックする習慣をつける。',
  },
  {
    id: 'koko_kankan_eigo_c1_35',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。（それぞれ1語不足しているので補うこと）

① [ known / had / true / the / , / never / I / it / spoken ].
  （それが本当だと知っていたら、私はそんなことは決して言わなかっただろう）

② [ the news / all / surprised / , / most / what / was ] her sudden resignation.
  （最も皆を驚かせたのは、彼女の突然の辞任だった）`,
    answer: `① Had I known it was true, I would never have spoken.
② What surprised all of us most was the news of her sudden resignation.`,
    hint: '①仮定法過去完了のif省略倒置（Had+主語+p.p.〜, 主語+would never have+p.p.）。②What+動詞が主語になる名詞節構文。',
    explanation: `【出題意図】仮定法過去完了の倒置とwhatの主語用法を組み合わせた高難度の語句整序問題。【解説】①「それが本当だと知っていたら」はIf I had known it was trueだが、ifを省略した倒置形Had I known it was trueにする。主節は「決して〜しなかっただろう」なのでI would never have spoken（仮定法過去完了の帰結節）。②「最も皆を驚かせたこと」はWhat surprised all of us most（whatが主語となる名詞節）。「〜は彼女の突然の辞任だった」でbe動詞wasを続け、補語としてthe news of her sudden resignationを置く。【注意点】①は「不足している1語」としてneverやhaveなどを補う必要がある点に注意。②も同様にall（all of us）などを補う。【関連知識】この2問はいずれも「省略・倒置・名詞節化」という高度な文法操作を組み合わせた最難関レベルの構文。`,
    pitfall: '①でIf I had knownとifを残したまま倒置しない形にすると、問題の指示（並べ替え）と語数が合わなくなる。',
    memoryTip: '倒置の仮定法とwhat主語構文は、まず「元の文（If〜/The thing that〜）」を頭の中で作ってから変形すると整理しやすい。',
  },
  {
    id: 'koko_kankan_eigo_c1_36',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えよ。

Ms. Yamada, whose research focuses on climate change, was invited to speak at the conference. Not wanting to disappoint the audience, she prepared her presentation carefully, spending three days gathering the latest data. Her talk, which lasted almost an hour, left a deep impression on everyone present.

① 「whose research focuses on climate change」の文法的な用法と意味を答えよ。
② 「spending three days gathering the latest data」はどのような分詞構文か。
③ 「which lasted almost an hour」はどの語を修飾しているか。`,
    answer: `① 関係代名詞whoseの非制限用法。先行詞Ms. Yamadaについて「彼女の研究は気候変動に焦点を当てている」という補足説明を加えている。
② 付帯状況を表す分詞構文（「〜しながら」：3日間かけて最新データを集めながら準備した、という同時進行の動作を表す）。
③ Her talk`,
    hint: '①コンマ+whoseで人名を補足説明。②spendingは主節（prepared）と同時に起きている動作を表す付帯状況。③コンマの直前の名詞Her talkを修飾する非制限用法。',
    explanation: `【出題意図】非制限用法の関係代名詞whose・付帯状況の分詞構文・非制限用法のwhichという3つの構文を組み合わせた読解問題。【解説】①Ms. Yamada, whose research focuses on climate change,は、非制限用法の関係代名詞whoseを使い、先行詞Ms. Yamadaについて「彼女の研究は気候変動が専門である」という補足情報を加えている。②spending three days gathering the latest dataは、主節she prepared her presentation carefullyと同時に行われた動作（〜しながら）を表す付帯状況の分詞構文。③Her talk, which lasted almost an hour,のwhichは直前のHer talkを先行詞とする非制限用法の関係代名詞で、「彼女の講演は」という主題に「ほぼ1時間続いた」という補足情報を加えている。【注意点】②の付帯状況の分詞構文は「〜しながら」という同時動作を表す点で、時・理由の分詞構文と意味が異なる。【関連知識】付帯状況の分詞構文の例：She sat by the window, reading a book.（彼女は窓際に座って本を読んでいた）。`,
    pitfall: '②を単なる理由の分詞構文と誤読しない。「3日かけて」は「準備しながら同時に行っていた行為」を表す付帯状況。',
    memoryTip: '「動詞+ing, 〜ing」の形が連続するときは付帯状況（〜しながら）の可能性が高いと意識する。',
  },
  {
    id: 'koko_kankan_eigo_c1_37',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の直接話法の文を間接話法に書き換えなさい。

The manager said to the staff, "If I were you, I would apologize to the customer immediately."
→ The manager told the staff that if (　) (　) (　), (　) (　) apologize to the customer immediately.`,
    answer: 'he (she) were they, they would',
    hint: '仮定法の文は話法を転換しても時制はそのまま変わらない（仮定法は既に「時制のずれ」を含むため）。人称のみ話者目線に変える。',
    explanation: `【出題意図】仮定法を含む文の話法転換における時制不変の原則を問う高難度問題。【解説】仮定法の文（If I were you, I would〜）は、すでに「現実とは異なる」という特殊な時制を含んでいるため、話法を転換しても時制の一致（さらに1つ過去にずらす）は適用されない。ここでは人称のみを話者目線に変える：I→he（マネージャー自身を指すのでhe/she）、you→they（staffを指す）。werewould もそのまま変わらない。【注意点】通常の話法転換では時制を1つ過去にずらすが、仮定法・格言・普遍の真理などの特殊な文はこの原則の例外となる。【関連知識】同様に、格言や真理を伝達する場合も時制の一致を受けない（He said that the earth goes around the sun.）。`,
    pitfall: 'if he had been they, they would haveのように仮定法過去完了に変えてしまうのは誤り。仮定法の時制はそのまま保持する。',
    memoryTip: '仮定法・ことわざ・普遍の真理は「時制の一致の例外」として特別にまとめて覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_38',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① The committee members, (　) opinions varied widely, could not reach an agreement.
  ア. who　イ. whom　ウ. whose　エ. which

② No sooner (　) the bell rung than the students rushed out of the classroom.
  ア. did　イ. had　ウ. has　エ. does

③ Rarely (　) such a beautiful sunset as we saw yesterday.
  ア. we have seen　イ. have we seen　ウ. we saw　エ. did we see`,
    answer: '① ウ(whose)　② イ(had)　③ イ(have we seen)',
    hint: '①所有格の関係代名詞。②No sooner had S p.p. than S+過去形＝「〜するとすぐに…した」。③否定語Rarelyが文頭に出ると倒置。',
    explanation: `【出題意図】所有格の関係代名詞・No sooner〜than構文・否定語の文頭倒置という3つの高難度構文を問う。【解説】①「委員たちの意見」という所有関係→whose opinions。②No sooner had S p.p. than S+過去形＝「Sが〜するとすぐに…した」。No soonerが文頭にあるため主語と助動詞が倒置し、had the bell rung（rungはringの過去分詞）となる。③Rarely（めったに〜ない）という否定的な副詞が文頭に来ると、疑問文と同じ語順（助動詞+主語+動詞）に倒置する。ここでは現在完了の疑問文語順have we seenが正解。【注意点】②のNo sooner had S p.p. than〜のthanの後は過去形の平叙文になる点に注意（倒置しない）。③のようなRarely/Never/Little等の否定副詞が文頭に来ると必ず倒置が起こる。【関連知識】同系統の構文：Hardly had S p.p. when S+過去形（〜するかしないうちに…した）、Never have I seen〜（決して〜を見たことがない）。`,
    pitfall: '②でア(did)を選ぶと、No sooner の後は過去完了（had+p.p.）が必要な点を見落とした誤り。',
    memoryTip: '否定語（No sooner/Rarely/Never/Little）が文頭→倒置（疑問文の語順）、という規則を型で覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_39',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えよ。

[Passage]
Little did the villagers know that the quiet stranger who had arrived that morning would soon change their lives forever. Having traveled from a distant city, he brought with him new farming techniques that, once adopted, dramatically increased the village's crop yields. Grateful for his help, the villagers, whose harvests had been poor for years, welcomed him as one of their own.

【設問】
① 「Little did the villagers know」の文法的特徴を説明せよ。
② 「Having traveled from a distant city」はどの分詞構文の形か。
③ 「whose harvests had been poor for years」の文法的用法を説明せよ。
④ この文章の内容を50字以内の日本語でまとめよ。`,
    answer: `① 否定語Little（ほとんど〜ない）が文頭に出たことによる倒置構文（did+主語+動詞の原形）。「村人たちはほとんど知らなかった」という意味。
② 完了形の分詞構文（Having+過去分詞）。主節（brought）より前の出来事（旅をしてきたこと）を表す。
③ 関係代名詞whoseの非制限用法。先行詞the villagersについて「彼らの収穫は何年も不作だった」という補足説明を加えている。
④ ある朝訪れた見知らぬ男が新しい農法をもたらし、長年不作だった村の収穫を劇的に増やし、村人に感謝された。（50字）`,
    hint: '①Littleの文頭倒置。②Having+p.p.は主節より前の時制。③コンマ+whoseで先行詞に補足説明。④全体のあらすじを要約。',
    explanation: `【出題意図】否定語Littleの倒置・完了形の分詞構文・非制限用法のwhoseを組み合わせた最高難度の総合読解問題。【解説】①Little did the villagers knowは、否定的な意味を持つ副詞Little（ほとんど〜ない）が文頭に出たことによる倒置（疑問文と同じ語順did+主語+動詞原形）。「村人たちはほとんど知らなかった」という意味を強調する。②Having traveled from a distant cityは、主節brought（過去）よりも前に完了していた動作（遠い都市から旅してきたこと）を表す完了形の分詞構文。③the villagers, whose harvests had been poor for years,は、非制限用法の関係代名詞whoseを使い、村人たちについて「彼らの収穫は何年も不作だった」という補足情報を加えている。④全体は、ある朝到着した見知らぬ旅人が新しい農法をもたらし、長年不作だった村の収穫を大幅に改善し、村人たちに感謝され受け入れられた、という内容。【注意点】①のLittleは「ほとんど〜ない」という否定的な意味の副詞であり、Littleが強調のために文頭に出ると倒置が必須になる点に注意。【関連知識】Little did S know that〜（Sはほとんど知らなかった、〜ということを）は物語文の書き出しでよく使われる劇的効果を狙った表現。`,
    pitfall: '①をLittleの通常の語順（The villagers knew little that〜）と混同せず、倒置の理由（否定語の文頭移動）を明確に説明する。',
    memoryTip: 'Little did S know that〜は物語の「実は後で大変なことが起きる」という伏線表現の定番として覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_40',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（40語以上。分詞構文と関係代名詞の非制限用法をそれぞれ1つ以上使うこと）

「駅から遠く離れたところに住んでいるので、彼女は毎朝早く起きなければならない。彼女の兄は、大学で経済学を専攻しているのだが、車で彼女を駅まで送ってくれることがある。」`,
    answer: `（解答例）Living far from the station, she has to get up early every morning. Her brother, who is majoring in economics at university, sometimes drives her to the station by car.（30語→語数を増やす必要あり）

（40語以上の解答例）Since she is living quite far away from the nearest train station, living there means she has to wake up very early every single morning. Her older brother, who happens to be majoring in economics at university, sometimes kindly drives her all the way to the station by car.（46語）`,
    hint: '「〜なので」→理由の分詞構文Living far from〜。「彼女の兄は、〜専攻しているのだが」→非制限用法の関係代名詞who。',
    explanation: `【出題意図】理由を表す分詞構文と非制限用法の関係代名詞を組み合わせた自由英作文。複文構造を英語で正確に表現する力を問う。【解説】「駅から遠く離れたところに住んでいるので」→理由を表す分詞構文Living far from the station（Because she lives far from the stationの書き換え）。「彼女は毎朝早く起きなければならない」→she has to get up early every morning。「彼女の兄は、大学で経済学を専攻しているのだが」→Her brother, who is majoring in economics at university,（非制限用法。兄が1人しかいないことを前提に補足情報として専攻を加える）。「車で彼女を駅まで送ってくれることがある」→sometimes drives her to the station by car。【注意点】非制限用法はコンマを忘れずに付け、thatではなくwhoを使う。分詞構文の主語（Living〜の意味上の主語）は主節の主語sheと一致させる。【関連知識】理由の分詞構文はBecause/Since/Asで始まる節から接続詞と主語を省略して作ることができる。`,
    pitfall: 'Her brother who is majoring in economicsとコンマを忘れると、複数いる兄弟の中から専攻で限定する制限用法の意味に変わってしまう。',
    memoryTip: '「彼女の兄」のように普通1人しかいない人物を説明するときは、コンマ付きの非制限用法を使うと覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_41',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① The more experience you gain, (　) confident you will become in your work.
  ア. more　イ. the more　ウ. much more　エ. most

② She behaved as (　) she had won the lottery, though in fact she hadn't.
  ア. if　イ. so　ウ. such　エ. that

③ (　) rich he may be, he is never satisfied with what he has.
  ア. However　イ. Whatever　ウ. Whichever　エ. No matter`,
    answer: '① イ(the more)　② ア(if)　③ ア(However)',
    hint: '①the比較級, the比較級の構文。②as if+仮定法（まるで〜であるかのように）。③However+形容詞+S+V＝「どんなに〜でも」。',
    explanation: `【出題意図】the比較級構文・as if仮定法・譲歩のHowever構文という3つの高難度表現を問う。【解説】①「the more experience〜, the more confident〜」という「the+比較級, the+比較級」構文。②as if she had won the lottery（まるで宝くじに当たったかのように）は、事実に反する内容を表すas if+仮定法過去完了。③「However rich he may be」=「彼がどんなに金持ちであっても」という譲歩表現。However+形容詞/副詞+S+V(+may)の形。【注意点】③のエ(No matter)は本来No matter how richの形にする必要があり、howを伴わないNo matter richは不可のため誤り。①はmoreだけでは「the」が抜けており構文が不完全になる。【関連知識】No matter how+形容詞+S+V＝However+形容詞+S+Vと同義で書き換え可能。`,
    pitfall: '③でエ(No matter)を選ぶと、No matter howの形にする必要がありNo matter richだけでは文法的に不完全。',
    memoryTip: 'However+形容詞+S+V＝No matter how+形容詞+S+Vと必ずセットで書き換えを覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_42',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の各文の誤りを1か所指摘し、正しく直しなさい。

① Whatever difficulties you may face, never given up on your dream.
② She talks as if she knows everything about the topic, but actually she doesn't.
③ The committee, that consists of ten members, will announce the result tomorrow.
④ However carefully you plan, things doesn't always go as expected.`,
    answer: `① given up → give up（never+動詞原形の命令文。givenは誤り）
② knows → knew（as if+仮定法過去。現在の事実に反する内容なので過去形にする）
③ that consists → which consists（非制限用法にthatは使えない）
④ things doesn't → things don't（主語thingsは複数形なのでdon'tが正しい）`,
    hint: '①命令文の動詞は原形。②as if+仮定法は現在のことでも過去形。③非制限用法はwhichを使う。④主語と動詞の数の一致。',
    explanation: `【出題意図】譲歩構文・as if仮定法・非制限用法・主語動詞の一致という4つの誤りを発見・訂正する高難度の総合問題。【解説】①Whatever difficulties you may face（どんな困難に直面しようとも）に続く主節は命令文であるべきで、neverの後は動詞の原形give upにする（givenは過去分詞で命令文には使えない）。②as if she knows〜は現在の事実に反する（実際は知らない）ことを表すため、仮定法過去knewを使うのが正しい（口語ではknowsも使われることがあるが、文法的にはknewが標準）。③The committee, that consists of ten members,は非制限用法（コンマ付き）なのでthatではなくwhichを使う。④主語thingsは複数形なので、動詞にはdoesn'tではなくdon'tを使う（things don't always go as expected）。【注意点】②のas if+仮定法は「実際はそうではない」という含みを持つ場合、過去形（現在のことについて）を使うのが文法的な基本ルール。【関連知識】as if+仮定法過去完了は過去の事実に反する内容を表す（She talked as if she had seen a ghost.）。`,
    pitfall: '②を口語表現のas if she knowsと混同せず、文法問題としては仮定法過去knewが正解であることを理解する。',
    memoryTip: 'as if+仮定法は「まるで〜であるかのように（実際は違う）」という含みを持つと覚え、時制のズレに注意する。',
  },
  {
    id: 'koko_kankan_eigo_c1_43',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の語句を並べ替えて、意味の通る英文を作りなさい。（それぞれ1語不足しているので補うこと）

① [ she / knows / much / talks / as / about / everything / if ].
  （彼女はまるで何でも知っているかのように話す）

② [ hard / study / you / matter / how / , / will / you / pass / the exam / not ].
  （どんなに一生懸命勉強しても、あなたはその試験に合格しないだろう）`,
    answer: `① She talks as if she knew everything about much.（語順修正：She talks as if she knew everything about much.）
→ 正: She talks as if she knew much about everything.

② No matter how hard you study, you will not pass the exam.`,
    hint: '①as if+仮定法過去（knew）。②No matter how+形容詞/副詞+S+V。',
    explanation: `【出題意図】as if仮定法とNo matter how構文の語順整序を問う。【解説】①「まるで何でも知っているかのように」はas if she knew much about everything（as if+仮定法過去knew）とする。knowsのままでは仮定法にならないため、不足している1語としてknewを補う（またはknowsをknewに変える）。②「どんなに一生懸命勉強しても」はNo matter how hard you study（No matter how+副詞hard+主語+動詞）とする。不足している1語としてNoを補い、No matter howの形を完成させる。【注意点】①のような並べ替え問題では、単語がすでに与えられている場合、文法的に正しい形（knew）に変える操作が必要になることがある。②はNo matterのNoが不足しているパターン。【関連知識】No matter how hard〜, S will not…は「どんなに〜しても…ない」という譲歩+否定の頻出パターン。`,
    pitfall: '①でknowsをそのまま使うと仮定法にならず、「実際に何でも知っている」という意味になり日本語の「まるで」のニュアンスが消える。',
    memoryTip: 'as if の後は基本的に仮定法（過去形）を使うと覚え、直説法の現在形との違いを意識する。',
  },
  {
    id: 'koko_kankan_eigo_c1_44',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜③に答えよ。

However fluent your English may be, you will still make mistakes when speaking with native speakers, and that is perfectly fine. What matters more than perfection is the courage to keep communicating despite occasional errors. As if to prove this point, many successful international businesspeople continue to make small grammatical mistakes even after years of practice.

① 「However fluent your English may be」の文法的な働きを説明せよ。
② 「What matters more than perfection」の文法的な用法を説明せよ。
③ 「As if to prove this point」の意味を日本語で答えよ。`,
    answer: `① 譲歩を表す構文（However+形容詞+S+V(+may)）。「あなたの英語がどんなに流暢であっても」という意味。
② 関係代名詞whatの主語用法。先行詞を含み「〜すること」という名詞節を作り、文全体の主語になっている。
③ まるでこの点を証明するかのように`,
    hint: '①However+形容詞+S+may+V＝譲歩。②What+動詞が文の主語になる名詞節。③as if to do=まるで〜するかのように。',
    explanation: `【出題意図】譲歩のHowever構文・関係代名詞whatの主語用法・as if to doの慣用表現を組み合わせた高難度読解問題。【解説】①However fluent your English may beは「あなたの英語がどれほど流暢であっても」という譲歩を表す構文。However+形容詞(fluent)+主語(your English)+may+be、という語順。②What matters more than perfectionは、関係代名詞whatが「〜すること」という意味を持つ名詞節を作り、この節全体が文の主語として機能している（is以下が補語）。③As if to prove this pointは「まるでこの点を証明するかのように」という意味で、as if+to不定詞の形をとる慣用表現（as if to doで「まるで〜するかのように」）。【注意点】③はas if の後にSVが続かず、to不定詞が直接続く特殊な形である点に注意。通常のas if+仮定法（SV）とは異なる構造。【関連知識】as if to do の類似表現：as though to doも同様に使われる。`,
    pitfall: '③をas if構文の通常形（as if+主語+動詞）と混同しない。ここではto不定詞が直接続く特殊な形。',
    memoryTip: 'as if to do＝「まるで〜するかのように」という、to不定詞が続く例外的なas if構文として覚える。',
  },
  {
    id: 'koko_kankan_eigo_c1_45',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① It is high time we (　) about the environmental problems more seriously.
  ア. think　イ. thought　ウ. will think　エ. have thought

② The report, the accuracy of (　) has been questioned, will be reviewed again.
  ア. that　イ. which　ウ. it　エ. what

③ Not until she moved abroad (　) how much she loved her hometown.
  ア. she realized　イ. did she realize　ウ. she had realized　エ. had she realized`,
    answer: '① イ(thought)　② イ(which)　③ イ(did she realize)',
    hint: '①It is (high) time+仮定法過去（過去形）。②前置詞+関係代名詞（the accuracy of which）。③Not until〜が文頭に出ると倒置。',
    explanation: `【出題意図】It is time+仮定法過去・前置詞+関係代名詞・Not until〜の倒置という3つの高難度構文を問う。【解説】①It is (high) time+S+過去形（仮定法過去）＝「もう〜してもよい頃だ」。ここではthoughtを選ぶ。②「the accuracy of which」は「of which」という前置詞+関係代名詞の形（the report's accuracyの言い換え）。関係代名詞の前に前置詞が来る場合はwhichを使い、thatは使えない。③Not until she moved abroad（海外に引っ越すまで〜なかった）が文頭に出ると、主節は疑問文と同じ語順に倒置する。過去の一般動詞なのでdid she realizeとなる。【注意点】①のIt is time構文はhighを伴わなくても仮定法過去を使う点に注意（It is time you went to bed.等）。③の倒置では時制（過去なのでdid）を正確に判断する。【関連知識】Not until〜の倒置は「〜して初めて…した」という意味の重要構文で、It was not until〜that…の強調構文とも関連する。`,
    pitfall: '②で前置詞ofの後にthatを選ぶのは文法的に誤り。前置詞の直後の関係代名詞はwhichのみ使用可能。',
    memoryTip: 'It is time+過去形（仮定法）、前置詞+which（thatは不可）、Not until〜で文頭倒置、と3パターンをセットで暗記。',
  },
  {
    id: 'koko_kankan_eigo_c1_46',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えよ。

Not until the twentieth century did women in most countries gain the right to vote. The suffrage movement, whose leaders faced great hardship and even imprisonment, gradually changed public opinion. It is often said that no reform happens overnight; rather, it is the accumulation of small, persistent efforts that eventually brings about lasting change.

① 「Not until the twentieth century did women」の文法的特徴を説明せよ。
② 「whose leaders faced great hardship」の文法的用法を答えよ。
③ 「it is the accumulation of small, persistent efforts that eventually brings about lasting change」の構文を説明せよ。
④ 本文全体で筆者が伝えたいメッセージを日本語で50字以内でまとめよ。`,
    answer: `① Not until〜が文頭に出たことによる倒置構文（did+主語+動詞原形）。「20世紀になって初めて女性は〜を得た」という意味を強調している。
② 関係代名詞whoseの非制限用法。先行詞The suffrage movementについて「その指導者たちは大きな困難や投獄にさえ直面した」という補足説明を加えている。
③ It is 〜 that … の強調構文。「持続的な小さな努力の積み重ねこそが、最終的に永続的な変化をもたらす」という部分（the accumulation of small, persistent efforts）を強調している。
④ 大きな社会変革は一夜にして起こるのではなく、小さく粘り強い努力の積み重ねによって実現するということ。（49字）`,
    hint: '①Not untilの文頭倒置。②コンマ+whoseで運動の指導者を補足説明。③It is 〜 thatの強調構文。④最終文の内容がメッセージの核心。',
    explanation: `【出題意図】Not untilの倒置・関係代名詞whoseの非制限用法・強調構文It is〜thatを組み合わせた最高難度の総合読解問題。【解説】①Not until the twentieth century did women in most countries gain the right to voteは、Not until〜が文頭に出たことによる倒置（did+主語+動詞原形）。「20世紀になるまで（ほとんどの国で）女性は選挙権を得なかった＝20世紀になって初めて得た」という強調的な意味。②The suffrage movement, whose leaders faced great hardship and even imprisonment,は非制限用法の関係代名詞whoseで、運動について「その指導者たちは大きな困難や投獄さえ経験した」という補足情報を加えている。③it is the accumulation of small, persistent efforts that eventually brings about lasting changeは、It is〜thatの強調構文で、「持続的な小さな努力の積み重ね」の部分を強調している（本来はThe accumulation of small, persistent efforts eventually brings about lasting change.という文のthe accumulation〜effortsを強調した形）。④全体を通して、大きな社会変革（女性参政権など）は一夜にして実現するのではなく、小さく粘り強い努力の積み重ねによって時間をかけて達成されるというメッセージが読み取れる。【注意点】③の強調構文It is〜thatは、通常の関係代名詞のthat節と混同しないよう、「It is」と「that」を取り除いても文が成立するかどうかで判別する。【関連知識】強調構文の判別法：It is [強調したい語句] that残りの文、という形で、[ ]を取り除いても元の文として意味が通ればthatは強調構文の目印。`,
    pitfall: '③を単なる関係代名詞のthat節（the accumulation of small effortsを修飾）と誤読しない。It is〜thatを外しても文が成立するため強調構文と判断する。',
    memoryTip: '強調構文の見分け方：It isとthatを取り除いても完全な文になれば強調構文、ならなければ他の構文（形式主語等）と判断する。',
  },
  {
    id: 'koko_kankan_eigo_c1_47',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の日本語を英語に訳しなさい。（45語以上。分詞構文・仮定法・関係代名詞の非制限用法を、それぞれ少なくとも1つずつ使うこと）

「体調が悪かったので、彼女はパーティーに行かなかった。もし彼女が来ていたら、私たちはもっと楽しく過ごせただろう。彼女の親友であるユキは、彼女がいなくてとても寂しかったと言った。」`,
    answer: `（解答例）Feeling sick, she did not go to the party. If she had come, we could have had a much more enjoyable time together. Yuki, who is her best friend, said that she had really missed her, feeling quite lonely without her presence there that night.（46語）`,
    hint: '「体調が悪かったので」→分詞構文Feeling sick。「もし〜来ていたら〜できただろう」→仮定法過去完了。「彼女の親友であるユキ」→非制限用法who。',
    explanation: `【出題意図】分詞構文・仮定法過去完了・非制限用法の関係代名詞という3つの高難度文法を1つの文章に組み込む総合的な英作文力を問う。【解説】「体調が悪かったので」→理由を表す分詞構文Feeling sick（Because she felt sickの書き換え）。「彼女はパーティーに行かなかった」→she did not go to the party。「もし彼女が来ていたら、私たちはもっと楽しく過ごせただろう」→過去の事実に反する仮定なので仮定法過去完了：If she had come, we could have had a much more enjoyable time together。「彼女の親友であるユキ」→Yuki, who is her best friend,（非制限用法。ユキは1人に特定されるため、補足情報として親友であることを加える）。「彼女がいなくてとても寂しかったと言った」→said that she had really missed her（時制の一致でhad missed）。【注意点】3つの文法事項をすべて自然に組み込みつつ、全体の文脈（体調不良→欠席→仮定→友人の発言）が一貫するよう構成する。45語以上を満たすために、feeling quite lonely without her presenceのような分詞構文の追加要素を加えるのも効果的。【関連知識】said that she had missed herのように、間接話法における時制の一致（過去完了）も同時に確認できる複合問題。`,
    pitfall: 'If she came（仮定法過去）にすると現在の仮定になり、過去の出来事（パーティーへの不参加）に対する後悔を正確に表せない。',
    memoryTip: '複数の文法事項を組み込む英作文では、まず日本語を「理由」「仮定」「補足説明」の3パーツに分解してから英訳すると整理しやすい。',
  },
  {
    id: 'koko_kankan_eigo_c1_48',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① Were it not for modern medicine, many diseases that are now curable (　) fatal.
  ア. are　イ. will be　ウ. would be　エ. would have been

② Scarcely had the plane taken off (　) it began to shake violently.
  ア. than　イ. when　ウ. that　エ. if

③ (　) all his wealth, he is not happy at all.
  ア. Despite　イ. Although　ウ. However　エ. Whatever`,
    answer: '① ウ(would be)　② イ(when)　③ ア(Despite)',
    hint: '①Were it not for〜（現在の仮定）に対応する帰結節は仮定法過去would be。②Scarcely had S p.p. when〜。③Despite+名詞句（〜にもかかわらず）。',
    explanation: `【出題意図】Were it not for〜の倒置仮定法・Scarcely〜whenの構文・Despite+名詞という3つの構文を問う。【解説】①Were it not for modern medicine（現代医学がなかったら）は現在の事実に反する仮定法過去の倒置形（If it were not for〜の倒置）。したがって帰結節も仮定法過去would beが対応する。②Scarcely had the plane taken off when it began to shake＝「飛行機が離陸するかしないうちに、激しく揺れ始めた」。Scarcely had S p.p. when Sは、No sooner had S p.p. than Sと同系統の構文だが、ScarcelyにはwhenがセットになるのがルールA。③Despite all his wealth（彼のすべての富にもかかわらず）は、Despite+名詞句の形。Althoughは接続詞で後ろに主語+動詞が必要なため、all his wealthという名詞句には使えない。【注意点】②のScarcely〜whenとNo sooner〜thanのペアを混同しないよう、セットで覚えることが重要。【関連知識】Despite/In spite of+名詞、Although/Though+S+V、という「前置詞と接続詞の違い」は入試頻出のポイント。`,
    pitfall: '③でイ(Although)を選ぶと、後ろに主語+動詞のない名詞句(all his wealth)が続いているため文法的に誤り。',
    memoryTip: 'Scarcely〜when、No sooner〜than、とそれぞれの相棒をセットで暗記し、混同しないようにする。',
  },
  {
    id: 'koko_kankan_eigo_c1_49',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次の英文を読んで、設問①〜④に答えよ。

Were it not for the invention of the printing press, knowledge would have spread far more slowly throughout history. Scarcely had Gutenberg's press been introduced when books began to be produced in numbers previously unimaginable. This technology, whose impact is still felt today, laid the foundation for the widespread literacy that modern societies now take for granted.

① 「Were it not for the invention of the printing press」の文法的特徴と、対応する主節の時制について説明せよ。
② 「Scarcely had Gutenberg's press been introduced when」の意味を日本語で述べよ。
③ 「whose impact is still felt today」の文法的用法を答えよ。
④ この文章の要旨を日本語で50字以内でまとめよ。`,
    answer: `① Were it not forは「If it were not for〜」のifを省略した倒置形で、現在の事実に反する仮定を表す仮定法過去。しかし本文では"would have spread"という仮定法過去完了の帰結節が続いており、歴史全体を通じた過去の話として述べられている（仮定法過去の形と過去の内容が組み合わさった用法）。
② グーテンベルクの活版印刷機が導入されるやいなや（すぐに、本が桁違いの数で作られ始めた）
③ 関係代名詞whoseの非制限用法。先行詞This technologyについて「その影響は今日でもなお感じられている」という補足説明を加えている。
④ 活版印刷術の発明が、識字率の普及という現代社会の基盤を築いた、歴史的に重要な技術だったということ。（49字）`,
    hint: '①Were it not for＝If it were not forの倒置。②Scarcely had S p.p. when〜＝「〜するやいなや」。③コンマ+whoseで技術の影響を補足。④全体の要旨を簡潔にまとめる。',
    explanation: `【出題意図】倒置の仮定法・Scarcely〜whenの構文・非制限用法whoseを組み合わせた印刷技術をテーマにした最高難度の総合読解問題。【解説】①Were it not for the invention of the printing pressは、If it were not for〜のifを省略した倒置形で、文法上は仮定法過去（現在の事実に反する仮定）の形を取っている。しかし文脈上は歴史全体（過去から現在にかけて）を通じた話をしており、帰結節はwould have spread（仮定法過去完了相当）となっている点が特徴的（歴史的な事実に対する仮定として、形式は仮定法過去でも意味的には過去〜現在の話をしている）。②Scarcely had Gutenberg's press been introduced when books began to be producedは「グーテンベルクの印刷機が導入されるやいなや、本が生産され始めた」という意味。Scarcely had S p.p. when S+過去形の構文。③This technology, whose impact is still felt today,は非制限用法の関係代名詞whoseで、technologyについて「その影響は今日でも感じられている」という補足情報を加えている。④全体の要旨：活版印刷の発明が知識の普及速度を劇的に高め、現代社会の識字率の基盤を作った、という歴史的意義についての文章。【注意点】①のように、仮定法の「形式（過去/過去完了）」と「実際に述べている内容の時間軸」が必ずしも一致しない高度な例もあることを理解する。【関連知識】printing press（活版印刷機）、literacy（識字率）、take for granted（当然のことと思う）などの語彙も重要。`,
    pitfall: '①で単に「仮定法過去」とだけ答えず、帰結節との組み合わせ（過去の歴史的事実についての仮定）についても触れる必要がある。',
    memoryTip: '倒置の仮定法（Were it not for〜、Had it not been for〜）は文脈（現在か過去か）に応じてどちらの形になるかを見極める。',
  },
  {
    id: 'koko_kankan_eigo_c1_50',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    maxOnly: true,
    question: `次のテーマについて、英語で意見を述べなさい。（50語以上。分詞構文・比較表現・仮定法のうち少なくとも2つを使うこと）

テーマ：「学校教育において、暗記中心の学習と体験を通じた学習のどちらがより重要だと思いますか。理由とともに述べなさい。」`,
    answer: `（解答例）Considering how quickly memorized facts can be forgotten, I believe experiential learning is more important than rote memorization. The more students engage in hands-on activities, the deeper their understanding becomes. If schools focused only on memorization, students would struggle to apply knowledge in real-life situations. Therefore, a balance favoring experience seems essential.（52語）`,
    hint: '「暗記した事実がいかに早く忘れられるかを考えると」→慣用的分詞構文Considering〜。「体験すればするほど理解が深まる」→the比較級, the比較級。「もし〜だったら〜だろう」→仮定法過去。',
    explanation: `【出題意図】慣用的分詞構文（Considering）・the比較級構文・仮定法過去という3つの高難度文法を組み合わせた自由英作文。教育論という抽象的なテーマについて、複数の文法事項を自然に使いながら自分の意見を論理的に展開する力を問う。【解説】導入部でConsidering how quickly memorized facts can be forgotten（暗記した事実がいかに早く忘れられるかを考えると）という慣用的分詞構文を使い、主張（体験学習がより重要）を述べる。続けて「The more students engage in hands-on activities, the deeper their understanding becomes.」という「the+比較級, the+比較級」構文で、体験と理解の関係を説明する。さらに「If schools focused only on memorization, students would struggle to apply knowledge」という仮定法過去で、暗記偏重の学習の問題点を仮定的に示す。最後にThereforeでまとめる。【注意点】50語以上を確実に満たすため、主張→理由1（比較構文）→理由2（仮定法）→結論、という4段階の構成にすると自然に語数を伸ばせる。指定された文法事項（分詞構文・比較・仮定法のうち2つ以上）を必ず使用したか、書き終えた後に確認する。【関連知識】自由英作文で使える構成：Considering〜(導入)、The more〜, the more〜(比較)、If〜, S would〜(仮定)、Therefore〜(結論)という型は、様々なテーマに応用可能な汎用的なフレームワーク。`,
    pitfall: '文法事項を無理に詰め込みすぎて不自然な文にならないよう、全体の論理的なつながり（主張→理由→結論）を優先する。',
    memoryTip: '自由英作文の型：Considering〜(導入)→The more, the more(比較)→If〜, would〜(仮定)→Therefore(結論)を鉄板パターンとして使い回す。',
  },
];
