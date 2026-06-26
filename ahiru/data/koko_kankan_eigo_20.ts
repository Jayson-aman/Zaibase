import type { Question } from './questions';

export const kokoKankanEigo20: Question[] = [
  // ============================================================
  // Q01–Q05: 基礎（difficulty: 'basic'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    question: `次の（　）内に最も適切な語を選べ。

A: "Have you ever ( ) to Kyoto?"
B: "Yes, I went there last summer."

① go  ② went  ③ gone  ④ goes`,
    answer: '③ gone',
    hint: '「Have you ever ___?」は現在完了形の疑問文。ever の後ろは過去分詞が入る。',
    explanation: `【出題意図】
現在完了形（経験用法）における過去分詞の選択を問う問題。「Have/Has + 主語 + 過去分詞」という現在完了の疑問文の基本形を理解しているかが問われる。

【解説】
「Have you ever ___?」は「〜したことがありますか」という経験を尋ねる現在完了の疑問文。この形では動詞は必ず過去分詞を使う。go の過去形は went、過去分詞は gone。
・① go → 動詞原形（Have you go? は文法的に誤り）
・② went → 過去形（have/has の後ろには使えない）
・③ gone → 過去分詞（✓）Have you ever gone to Kyoto?
・④ goes → 3人称単数現在形（have の後ろには使えない）
Bの返答「I went there last summer」は過去形であり、経験の内容を過去形で補足している点も確認しよう。

【注意点】
have/has の後ろには「動詞原形」ではなく必ず「過去分詞」を置く。go–went–gone のような不規則変化動詞の三形変化を確実に覚えておくこと。「went」は過去形なので現在完了には使えない。

【関連知識】
現在完了の4用法：①経験（ever, never, once, twice）②継続（for, since）③完了（already, just, yet）④結果（now, still）。経験用法の頻出表現：「Have you ever been to〜?」（beenはgoの過去分詞としても使われる）も覚えておこう。`,
  },
  {
    id: 'koko_kankan_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    question: `次の（　）内に適切な語を選び、英文を完成させなさい。

① I enjoy ( swim / swimming ) in the sea every summer.
② She wants ( to visit / visiting ) Paris someday.
③ He stopped ( to talk / talking ) when the teacher entered.`,
    answer: '① swimming　② to visit　③ talking',
    hint: 'enjoy / stop の後ろは動名詞（-ing）。want の後ろは不定詞（to + 原形）。stop to do は「〜するために立ち止まる」、stop doing は「〜するのをやめる」。',
    explanation: `【出題意図】
不定詞（to + 動詞原形）と動名詞（動詞-ing）の使い分けを問う問題。動詞によって後ろに来る形が決まることを理解しているかが試される。

【解説】
①「enjoy + 動名詞」がルール。enjoy to swim とは言えない。enjoy, finish, mind, avoid, give up などは動名詞のみをとる動詞。
②「want + 不定詞」がルール。want, hope, wish, decide, plan, refuse などは不定詞のみをとる動詞。
③「stop + 動名詞」=「〜することをやめる」。先生が入ってきたので「話すのをやめた」。「stop + 不定詞」=「〜するために立ち止まる」（例：He stopped to buy a drink = 飲み物を買うために立ち止まった）。

【注意点】
動名詞のみ：enjoy / finish / mind / avoid / give up / stop（〜するのをやめる）。不定詞のみ：want / hope / wish / decide / plan / refuse。両方OK（意味が変わる）：remember / forget / try / stop。特にstopは意味が大きく変わるので注意。

【関連知識】
like / love / hate / prefer は不定詞・動名詞どちらもOK（意味はほぼ同じ）。remember to do「（これから）忘れずに〜する」/ remember doing「（過去に）〜したことを覚えている」も頻出パターン。関関同立附属高では特に③のようなstopの使い分け問題がよく出る。`,
  },
  {
    id: 'koko_kankan_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    question: `次の（　）に who / which / that のうち最も適切なものを入れなさい。（複数の答えがある場合はすべて答えよ）

① The girl (　) is singing on the stage is my sister.
② I lost the bag (　) my mother gave me.
③ This is the book (　) changed my life.`,
    answer: '① who / that　② which / that　③ which / that',
    hint: '先行詞が「人」→ who または that。先行詞が「物・動物」→ which または that。',
    explanation: `【出題意図】
関係代名詞 who / which / that の使い分けを問う問題。先行詞（関係代名詞が修飾する名詞）が人か物かを見分ける力が試される。

【解説】
①先行詞は「the girl（人）」→ who または that が使える。who が文法上最も自然。
②先行詞は「the bag（物）」→ which または that が使える。②は目的格の関係代名詞（省略も可能）。
③先行詞は「the book（物）」→ which または that が使える。③も主格の関係代名詞。
that はほぼ万能に使えるが、カンマ（非制限用法）の後ろには使えない（→ thatではなくwhich/who）。

【注意点】
who は人のみ。which は物・動物のみ。that は人にも物にも使えるが、制限用法（カンマなし）に限られる。目的格の関係代名詞（〜を/〜に）は省略できる：「the bag my mother gave me」でもOK。先行詞の直後に関係代名詞を置くルールも重要。

【関連知識】
関係代名詞の格：主格（〜が）→ who/which/that、目的格（〜を/〜に）→ whom/which/that（省略可）、所有格（〜の）→ whose。関大一高・立命館高では「非制限用法（, which）」も出題される。The book, which I bought yesterday, was interesting.（コンマの後はwhichのみ）`,
  },
  {
    id: 'koko_kankan_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    question: `次の（　）に適切な語を入れ、比較の文を完成させなさい。

① Mt. Fuji is the (　) mountain in Japan.
   （富士山は日本で最も高い山だ）

② Osaka is (　) exciting (　) Tokyo.
   （大阪は東京と同じくらいわくわくする）

③ A bus is (　) expensive (　) a taxi.
   （バスはタクシーより安い）`,
    answer: '① highest　② as, as　③ less, than',
    hint: '①最上級は the + 形容詞-est（または the most）。②同等比較は as〜as。③「より安い」はless + 形容詞 + than。',
    explanation: `【出題意図】
比較表現（同等比較 as〜as・比較級 more〜than / less〜than・最上級 the〜est / the most）の使い分けを問う問題。3つの比較形を一度に整理できる良問。

【解説】
①「最も高い」→最上級。high → higher → highest。最上級には必ず the をつける。in Japan（場所）または of all mountains（グループ）とセットで使う。
②「同じくらい〜」→ as + 形容詞（原級）+ as の形。exciting はそのまま（変化しない）。
③「タクシーより安い」→ expensive の反対を比較級で表す。more expensive の反対は less expensive + than。または cheap → cheaper than も可。

【注意点】
最上級の the を忘れるミスが多い。②の as〜as は最初の as を省略できない（× so exciting as）。③のless〜than（〜より少ない程度で）は日本語の「〜より安い」に対応するが、入試ではcheaper thanのシンプルな形の方が多い。

【関連知識】
比較級の不規則変化：good→better→best、bad→worse→worst、many/much→more→most、little→less→least。「3つ以上のものを比べるとき最上級、2つを比べるとき比較級」という原則も押さえておこう。関関同立附属高では最上級+in/of の使い分けも頻出。`,
  },
  {
    id: 'koko_kankan_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'basic',
    question: `次の能動態の文を受動態に書き換えなさい。

① Someone stole my bicycle yesterday.
   （昨日、誰かが私の自転車を盗んだ）

② Many people read this magazine.
   （多くの人々がこの雑誌を読む）

③ They will finish the project next week.
   （彼らは来週そのプロジェクトを終わらせるだろう）`,
    answer: '① My bicycle was stolen (by someone) yesterday.\n② This magazine is read by many people.\n③ The project will be finished (by them) next week.',
    hint: '受動態の公式：O + be動詞（時制に合わせる）+ 過去分詞（+ by + 元の主語）。③ will の受動態は will be + 過去分詞。',
    explanation: `【出題意図】
受動態（be動詞 + 過去分詞）の基礎と、時制（過去・現在・未来）に合わせたbe動詞の変化を問う問題。能動態から受動態へ書き換える手順を理解しているかを試す。

【解説】
受動態の手順：①目的語Oを主語に移す②be動詞を時制に合わせる③動詞を過去分詞に変える④元の主語はby〜で表す（省略可）。
①stole（過去形）→ was stolen（be動詞過去形 + steal の過去分詞 stolen）。by someone は一般的な主語なので省略可。
②read（現在形）→ is read（be動詞現在形 + read の過去分詞 read ※同じ形）。
③will finish → will be finished（will be + 過去分詞）。

【注意点】
受動態のbe動詞は主語の人称と時制で変わる：現在はis/am/are、過去はwas/were、未来はwill beとなる。②のreadは原形・過去形・過去分詞がすべて同じ形（read）なので混乱しやすい。by + 行為者が「一般人」や「不特定」のときは省略するのが自然。

【関連知識】
受動態の各時制まとめ：現在完了の受動態 has/have been + p.p.（例：The room has been cleaned.）、進行形の受動態 is/was being + p.p.（例：The bridge is being built.）も関関同立附属高レベルでは出題される。`,
  },

  // ============================================================
  // Q06–Q10: 応用（difficulty: 'standard'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    question: `次の（　）内に最も適切な語句を入れ、間接疑問文を完成させなさい。

① I don't know (　　　　　) she lives.
   （彼女がどこに住んでいるか知らない）

② Tell me (　　　　　) he will come.
   （彼が来るかどうか教えてください）

③ Do you know (　　　　　) train leaves first?
   （どの電車が先に出発するか知っていますか）`,
    answer: '① where she lives　② whether / if he will come　③ which',
    hint: '間接疑問文は「疑問詞 + 主語 + 動詞」の語順。Yes/No疑問の間接疑問はwhether/ifを使う。',
    explanation: `【出題意図】
間接疑問文（疑問詞節・whether/if節）の語順と形を問う問題。「疑問文の語順」と「名詞節の語順」が混同されやすい重要文法項目。

【解説】
間接疑問文では、疑問文の語順（Does she live → does she live）ではなく、普通の文の語順（she lives）に戻す。
①where she lives（× where does she live は疑問文の語順なのでNG）。
②Yes/No疑問（Come or not?）の間接疑問には whether または if を使う。if の方が口語的。
③「どの〜が」には which + 名詞の形を使う。which train leaves first の語順に注意。

【注意点】
最も多いミスは間接疑問文に疑問文の語順（do/does/did + 主語）を使ってしまうこと。「I know where does she live.」は誤り。必ず「疑問詞 + 主語 + 動詞（普通の文の語順）」にすること。whether と if の違い：whether は文頭にも使えるが if は文頭には使いにくい。

【関連知識】
間接疑問文は名詞節として動詞の目的語・補語・主語になる。「〜かどうか」を主語にするときはwhetherのみ（Whether he comes is uncertain.）。「疑問詞 + to不定詞」も同じ意味で使える：I don't know where to go.（どこへ行けばいいかわからない）`,
  },
  {
    id: 'koko_kankan_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    question: `次の2文の意味の違いを説明し、（　）に適切な動詞の形を入れなさい。

A: When I called her, she (　) (　) dinner.
  （私が電話したとき、彼女は夕食を食べているところだった）

B: She (　) (　) tennis since this morning.
  （彼女は今朝からずっとテニスをし続けている）

動詞：eat（A）/ play（B）`,
    answer: 'A: was eating（過去進行形）　B: has been playing（現在完了進行形）',
    hint: 'A は過去のある時点での進行中の動作（過去進行形）。B は過去に始まり今も継続中の動作（現在完了進行形）。',
    explanation: `【出題意図】
過去進行形（was/were + -ing）と現在完了進行形（have/has been + -ing）の意味と用法の違いを問う問題。日本語訳ではどちらも「〜していた/している」と表されるため、混同しやすい重要項目。

【解説】
A：「電話したとき（過去）」→ その過去の時点で進行していた動作 → 過去進行形 was eating。「When I called（過去）+ was eating（過去進行形）」がセット。
B：「今朝から（since this morning）ずっと〜し続けている（今も継続中）」→ 現在完了進行形 has been playing。since + 起点のキーワードに着目。

【注意点】
過去進行形は過去の一時点での動作のみを表し、現在との関係はない。現在完了進行形は「過去に始まって今も続いている動作」を表す。「since + 起点」「for + 期間」は現在完了（進行）形のサイン。when + 過去形は過去進行形のサイン。

【関連知識】
現在完了進行形 = have/has been + 動詞-ing。「I have been waiting for two hours.（2時間ずっと待っている）」「How long have you been studying?（どれくらいずっと勉強しているの？）」などが頻出。状態動詞（know, like, have等）は進行形にできないので注意。`,
  },
  {
    id: 'koko_kankan_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    question: `次の（　）に適切な語句を入れ、仮定法の文を完成させなさい。

① If I (　) a bird, I (　) fly to you.
   （もし私が鳥なら、あなたのところへ飛んでいくのに）

② If I (　) enough money, I (　) buy that car.
   （もし十分なお金があれば、あの車を買うのに）

③ I wish I (　) speak English fluently.
   （流暢に英語が話せればいいのに）`,
    answer: '① were, would　② had, would　③ could',
    hint: '仮定法過去：If + 主語 + 動詞の過去形〜, 主語 + would/could/might + 動詞原形。be動詞は主語に関係なく were を使う。',
    explanation: `【出題意図】
仮定法過去（現実に反することを仮定する表現）の正しい形を問う問題。直説法（現実の話）と仮定法（仮想の話）の使い分けが理解できているか試される。

【解説】
仮定法過去の公式：If + S + 動詞の過去形〜, S + would/could/might + 動詞原形。①be動詞は主語に関係なく were（I were, he were, she were）。「If I were a bird」は仮定法の定番表現。②「have → had」（過去形）、帰結節は「would buy」。③I wish + 仮定法過去：現在の実現困難な望みを表す。「could speak」（speak の前に could が必要）。

【注意点】
現代英語では「If I was」も使われるが、入試では「If I were」が正解とされる。仮定法では時制を1つ過去にずらす（現在の仮定 → 過去形を使う）。帰結節のwould/could/mightは過去形だが意味は「現在の仮定」を表す。「I wish」の後ろも仮定法と同じ過去形にする。

【関連知識】
仮定法過去完了（過去の事実と反対のことを仮定）：If + S + had + p.p.〜, S + would have + p.p.。「If I had studied harder, I would have passed the exam.（もっと勉強していたら合格していたのに）」。関関同立附属高では仮定法過去がメイン出題、最難関では仮定法過去完了も出る。`,
  },
  {
    id: 'koko_kankan_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    question: `次の英文を読んで、設問に答えなさい。

Japan has many traditional cultures that attract people from all over the world. One of the most famous is the tea ceremony, called "sado" in Japanese. In a tea ceremony, people prepare and drink green tea in a special way. Every movement is important and must be done carefully. The ceremony teaches people about respect, peace, and beauty.

Another well-known tradition is "origami," the art of paper folding. By folding a single sheet of paper, people can make birds, flowers, and even complex animals. Today, origami has spread to many countries and is used in math and science education as well.

【設問】
① What does the tea ceremony teach people about?（英語で答えよ）
② What can people make with origami?（日本語で答えよ）
③ 下線部「has spread」の時制を答え、その意味を説明せよ。`,
    answer: '① It teaches people about respect, peace, and beauty.\n② 鳥、花、複雑な動物など（折り紙で1枚の紙を折ることで作れるもの）\n③ 現在完了形（経験・結果）。「世界中に広まった（今もその状態が続いている）」という完了・結果の意味を表している。',
    hint: '①「tea ceremony teaches〜」の部分を探す。②「By folding〜, people can make〜」の部分を探す。③ have/has + 過去分詞の形から時制を判断する。',
    explanation: `【出題意図】
日本の伝統文化をテーマにした英文読解問題。内容把握（本文から情報を取り出す力）と時制の知識（現在完了形の意味）を同時に問う。関関同立附属高の読解問題の典型的な形式。

【解説】
①本文第1段落最後「The ceremony teaches people about respect, peace, and beauty」をそのまま引用または言い換えて答える。設問がWhat does 〜 teach?なのでIt teaches + about以下を答える。②本文第2段落「people can make birds, flowers, and even complex animals」を日本語で言い換える。③「has spread」= has（have の3単現）+ spread（spread の過去分詞）。現在完了形（完了・結果用法）。「今日までに世界中に広まった、そして今もその影響が続いている」という現在と結びついた過去の動作を表す。

【注意点】
英語で答える設問では文の形（主語 + 動詞）で答えること。「Respect, peace, and beauty.」のような断片的な答えは減点される場合がある。日本語で答える設問では過不足なく、本文の内容を正確に伝えること。「has spread」のspreadは原形・過去形・過去分詞がすべて同じ形（spread）なので注意。

【関連知識】
現在完了の4用法：経験（〜したことがある）・継続（ずっと〜している）・完了（〜したところだ）・結果（〜してしまった）。読解問題では本文の構造（段落ごとのテーマ）を把握してから設問を解くのが効率的。また、伝統文化系のテーマは関関同立附属高で頻出のため、sado / origami / kabuki / ikebana などの語彙も覚えておくとよい。`,
  },
  {
    id: 'koko_kankan_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'standard',
    question: `次の語句を正しい順序に並べ替えて、意味の通る英文を作りなさい。（文頭の語も小文字で示す）

① [ the / that / know / you / do / man ] is standing over there?
   （あそこに立っているあの男性を知っていますか）

② [ to / was / I / happy / hear ] the news.
   （私はその知らせを聞いて嬉しかった）

③ [ the / is / she / speak / able / to ] three languages.
   （彼女は3つの言語を話すことができる）`,
    answer: '① Do you know the man that is standing over there?\n② I was happy to hear the news.\n③ She is able to speak three languages.',
    hint: '①「知っていますか」→ Do you know〜? 後ろに「あそこに立っている男性」を関係代名詞でつなぐ。②「聞いて嬉しかった」→ be happy to + 動詞原形（感情の原因を表す不定詞）。③「話すことができる」→ be able to + 動詞原形。',
    explanation: `【出題意図】
語句整序問題（並べ替え）。①関係代名詞を使った名詞修飾、②感情を表す不定詞の副詞的用法、③be able to の構造という、3つの異なる文法項目を一問でまとめて問う。

【解説】
①まず疑問文の形「Do you know〜?」を作る。次に「the man」の後ろに関係代名詞「that」を使い、「is standing over there（あそこに立っている）」をつなぐ。
②「I was happy」（感情）+ 「to hear」（その感情の原因を表す不定詞の副詞的用法）+ 「the news」。be + 形容詞 + to 不定詞「〜して…だ」の形。
③「be able to + 動詞原形」= can と同じ意味。主語がshe（3単現）なのでis、動詞は原形のspeakをthenの後ろに置く。

【注意点】
整序問題では「どの語とどの語がセットになるか」を先に考えるのがコツ。①では「the man + that」、②では「happy + to hear」、③では「is able to + speak」というセットを見抜く。また、整序後に文の意味が日本語訳と合っているか必ず確認すること。

【関連知識】
be happy/glad/surprised/sorry to do〜「〜して嬉しい/驚いた/申し訳ない」は感情の原因を表す不定詞の典型表現。be able to = can（より丁寧・フォーマル）。未来形では will be able to を使う（can の未来形はない）。整序問題は関関同立附属高で必出の問題形式。`,
  },

  // ============================================================
  // Q11–Q15: 模試（difficulty: 'advanced'）
  // ============================================================
  {
    id: 'koko_kankan_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の英文を読んで、設問①〜④に答えなさい。

Environmental problems are becoming more serious around the world. One of the biggest challenges is global warming. Scientists say that the Earth's temperature has risen by about 1°C over the past century. This change is mainly caused by greenhouse gases, such as carbon dioxide (CO₂), which are released when people burn fossil fuels like coal, oil, and gas.

Another serious problem is plastic pollution. Every year, millions of tons of plastic waste enter the ocean, harming fish, birds, and other sea animals. Some scientists warn that by 2050, there could be more plastic in the ocean than fish.

To solve these problems, individuals, companies, and governments must work together. Small actions, like using reusable bags and reducing energy use, can make a difference.

【設問】
① What mainly causes global warming?（英語で答えよ）
② What happens when plastic waste enters the ocean?（英語で答えよ）
③ 下線部「have risen」を日本語に訳せ。
④ 本文の内容に合うものをすべて選べ。
　ア. 地球の気温は過去100年で約1℃上昇した。
　イ. プラスチック汚染は魚にだけ影響を与える。
　ウ. 2050年には海の魚よりプラスチックが多くなる可能性がある。
　エ. 環境問題は個人の努力では解決できない。`,
    answer: '① Greenhouse gases (such as CO₂), which are released when people burn fossil fuels, mainly cause global warming.\n② It harms fish, birds, and other sea animals.\n③ 上昇している（上がってきた）\n④ ア、ウ',
    hint: '①第1段落「This change is mainly caused by〜」に注目。②第2段落「harming〜」の部分。③have risen = 現在完了形（結果）。④各選択肢を本文と照合する。',
    explanation: `【出題意図】
環境問題をテーマにした150語程度の英文読解問題。内容把握（情報の特定・照合）、現在完了形の訳、選択肢の正誤判定という、模擬試験形式の総合的な読解力を問う。

【解説】
①受動態「is caused by〜」を能動態で言い換える。「Greenhouse gases mainly cause global warming」または本文の表現を活用して答える。②「harming fish, birds, and other sea animals」が答えの根拠。主語をItに変えて完全な文で答える。③「has risen」= 現在完了（結果）「上昇した（そして今もその状態）」。「約1℃上昇している」と訳すと自然。④ア○（第1段落"risen by about 1°C over the past century"）、イ×（魚だけでなく鳥や他の海の生き物にも影響）、ウ○（"could be more plastic than fish"）、エ×（"individuals, companies, and governments must work together"と個人の努力も重要と述べている）。

【注意点】
英語で答える設問は必ず完全な文（主語+動詞）で答えること。選択肢問題では「〜のみ」「〜だけ」などの限定表現に注意。イは「fish, birds, and other sea animals」すべてに影響するので誤り。エは本文と逆の内容なので誤り。

【関連知識】
環境問題の重要語彙：global warming（地球温暖化）、greenhouse gas（温室効果ガス）、fossil fuel（化石燃料）、carbon dioxide（二酸化炭素）、plastic pollution（プラスチック汚染）、renewable energy（再生可能エネルギー）。これらは関大一高・近大附属高の長文でも頻出のテーマ。`,
  },
  {
    id: 'koko_kankan_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の会話文の（　）に最も適切な文をア〜エから選びなさい。

A: Excuse me. Could you tell me how to get to the nearest convenience store?
B: Sure! (　①　)
A: About ten minutes? That's a bit far. Is there any other way?
B: (　②　) It's only about three minutes from here.
A: Oh, that's great! Thank you so much.
B: (　③　) Have a nice day!

①　ア. It's been a long time since I was there.
　　イ. It's about ten minutes on foot.
　　ウ. I used to go there every day.
　　エ. I'm not sure what time it opens.

②　ア. Yes, there is one on the other side of the street.
　　イ. No, I don't think so.
　　ウ. You should have come earlier.
　　エ. It's too bad you missed it.

③　ア. I hope you're not in a hurry.
　　イ. You're welcome!
　　ウ. That's a difficult question.
　　エ. Good luck with your studies.`,
    answer: '① イ　② ア　③ イ',
    hint: '①「10分？遠いね」というAの反応から、Bが所要時間を答えていることがわかる。②「3分しかかからない別の店がある」という流れ。③感謝への返答として最もふさわしいもの。',
    explanation: `【出題意図】
道案内の会話文から、文脈に合う適切な応答を選ぶ問題。会話の流れ（前後の発言との整合性）を正確に読み取る力を問う。会話文補充は関関同立附属高で必出の問題形式。

【解説】
①Aの次の発言「About ten minutes?」から、BはAに「10分かかる」と伝えていると推測できる。正解はイ「徒歩で約10分です」。アは「行ったのは久しぶり」、ウは「毎日行っていた」、エは「何時に開くかわからない」で文脈に合わない。②「Is there any other way?（別の方法は？）」というAの質問への返答として、「ア. 道の反対側に別の店がある」が最適。その後の「3分しかかからない」に続く。③Aの「Thank you so much」への返答なので、「You're welcome!（どういたしまして）」が正解。他の選択肢は文脈にそぐわない。

【注意点】
会話文補充問題では「前の発言」と「後の発言」の両方から手がかりを探すこと。Aの次の台詞「About ten minutes?」のように、相手の発言を繰り返す表現は「直前にBが同じ内容を言った」ことを示す強いヒント。感謝への返答は「You're welcome / Not at all / My pleasure」などの定番表現を覚えておく。

【関連知識】
道案内の頻出表現：go straight（まっすぐ進む）、turn right/left（右/左に曲がる）、on your right/left（右手/左手に）、you can't miss it（すぐわかりますよ）、It takes about 〜 minutes（約〜分かかります）。会話の流れを表す表現：Sure!（もちろん）、That's a bit far.（少し遠いですね）、That's great!（それはいいですね）。`,
  },
  {
    id: 'koko_kankan_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の（　）に最も適切な語句をア〜エから選びなさい。

① Can you (　) my bag while I'm in the restroom?
　ア. look for　イ. look at　ウ. look after　エ. look up

② She finally (　) smoking after ten years.
　ア. gave up　イ. gave in　ウ. gave away　エ. gave out

③ Don't (　) the meeting. It's very important.
　ア. put on　イ. put out　ウ. put off　エ. put up

④ He (　) a new word in the dictionary.
　ア. looked for　イ. looked up　ウ. looked after　エ. looked into`,
    answer: '① ウ（look after）　② ア（gave up）　③ ウ（put off）　④ イ（looked up）',
    hint: '①トイレ中に「〜を頼む」→ 世話をする。②10年後にタバコを「〜した」→ やめた。③「重要な会議を〜しないで」→ 延期する。④辞書で「〜した」→ 調べた。',
    explanation: `【出題意図】
句動詞（phrasal verb）の意味の正確な理解を問う問題。look / give / put を使った頻出句動詞の意味の違いを文脈から判断する力が試される。

【解説】
①look after = 〜の世話をする・面倒を見る。バッグを「見守る/管理してもらう」という意味。look for=探す、look at=見る、look up=調べる。②give up = あきらめる・やめる。「喫煙をやめた」という文脈に最適。give in=屈する、give away=配る・漏らす、give out=配布する・力が尽きる。③put off = 延期する・先延ばしにする。「会議を延期しないで」。put on=着る・かける、put out=消す、put up=張り出す・我慢する。④look up = 辞書で調べる。「辞書で新しい単語を調べた」。

【注意点】
句動詞は前置詞・副詞の違いで意味が大きく変わるため、セットで暗記することが重要。特にlook / give / put は1語の動詞に見えても後ろに続く語で意味が変わる。文脈（何を・誰に・どんな状況で）から意味を判断する練習も重要。

【関連知識】
その他の重要句動詞：run out of（〜がなくなる）、take care of（〜の世話をする）、get along with（〜とうまくやっていく）、figure out（〜を解決する・理解する）、come up with（〜を思いつく）、break down（故障する）、turn up/down（音量を上げる/下げる）。関関同立附属高では4〜6問の句動詞問題が頻出。`,
  },
  {
    id: 'koko_kankan_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の日本語を英語に訳しなさい。（20語程度）

「私が子どものころ、母はよく私に『失敗を恐れるな。失敗から学ぶことができる』と言っていた。今でもその言葉を大切にしている。」`,
    answer: `（解答例）When I was a child, my mother often told me, "Don't be afraid of failure. You can learn from it." I still treasure those words today.

（別解）When I was young, my mother used to say to me, "Don't fear failure. We can learn from our mistakes." I still keep her words in my heart.`,
    hint: `「よく〜していた」→ used to / would / often + 過去形。「言っていた」→ told me / said to me。「大切にしている」→ treasure / keep ... in my heart / value。失敗を恐れるな → Don't be afraid of failure / Don't fear failure。`,
    explanation: `【出題意図】
日本語から英語への翻訳（和文英訳）問題。過去の習慣表現・直接話法・現在の継続した感情・名詞を「大切にする」という抽象表現を英語で表現する総合的な英作文力を問う。

【解説】
「子どものころ」→ When I was a child / When I was young。「よく〜と言っていた」→「過去の習慣」なのでused to say / would say / often said のいずれかを使う。「失敗を恐れるな」→ Don't be afraid of failure / Don't fear failure（命令文の否定形）。「失敗から学ぶ」→ learn from failure / learn from mistakes。「今でも大切にしている」→ I still treasure / I still value / I keep ... in my heart（現在形で継続を表す）。

【注意点】
和文英訳では日本語を直訳しようとするより「英語らしい表現を選ぶ」ことが重要。「大切にしている」をそのまま「make it important」などとしないで、treasure / value / cherish / keep in heart などの慣用的な表現を使う。「母がよく言っていた言葉」を直接引用（クォーテーション）で表すと自然になる。

【関連知識】
過去の習慣の表現：used to + 動詞原形（現在はしていないことを示唆）/ would + 動詞原形（ある状況下での習慣） / often + 過去形（頻度を表す）。英作文で使える「大切にする」表現：treasure, value, cherish, hold dear, keep...in one's heart。関関同立附属高の英作文では「20語以上」の条件が多く、接続詞や副詞を使って語数を調整する練習が必要。`,
  },
  {
    id: 'koko_kankan_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の各文には文法的な誤りが1か所ある。誤りを含む部分を指摘し、正しく直しなさい。

① She has worked here since five years.
② I am interesting in Japanese history.
③ He is the most tallest player on the team.
④ If I will have more time, I would study abroad.
⑤ The book which I borrowed it from the library was very interesting.`,
    answer: '① since → for　② interesting → interested　③ most tallest → tallest（the most を削除）　④ will have → had　⑤ borrowed it → borrowed（it を削除）',
    hint: '①期間にはfor、起点にはsince。②感情を「感じる側」は -ed 形。③最上級の二重使用は不可。④仮定法ではif節に will を使わない。⑤関係代名詞節の中で目的語を重複させない。',
    explanation: `【出題意図】
文法的な誤り指摘問題（誤文訂正）。高校受験で最も頻出の文法ミス5種類（継続のfor/since、感情形容詞の-ed/-ing、最上級の形、仮定法のif節、関係代名詞節の重複）を一問に集約した総合問題。

【解説】
①「5年間」は期間なのでfor（since = 起点「〜以来」/ for = 期間「〜の間」）。「since five years」は誤り。②「〜に興味がある」= be interested in。interestingは「（物が）人を面白くさせる」という意味の能動的な形容詞。「人が感じる側」はinterested。③「the most tallest」はthemost（最上級）+tallest（最上級）の二重最上級で誤り。正しくはthe tallestのみ。④仮定法のif節にwillは使えない。仮定法過去はIf + S + 過去形。will have → had にする。⑤関係代名詞 which が目的語の役割をしているので、節内のit（目的語の重複）は不要。「the book which I borrowed from the library」が正しい。

【注意点】
誤文訂正では「ひとつだけ誤りがある」という前提で全体を確認すること。②のinteresting/interestedの混同は日本人に特に多いミス。「物・事 → -ing（〜させる）」「人 → -ed（〜させられる）」の区別（excited/exciting、bored/boring、surprised/surprisingなど）を徹底しよう。

【関連知識】
感情形容詞のペア（重要）：excited/exciting、bored/boring、surprised/surprising、tired/tiring、interested/interesting、disappointed/disappointing、satisfied/satisfying。どれも「人→-ed」「物・状況→-ing」のルールが共通。関関同立附属高では誤文訂正で感情形容詞が頻出。`,
  },

  // ============================================================
  // Q16–Q20: 入試（difficulty: 'advanced'）
  // 関大一高・関学高・同志社高・立命館高・近大附属高・明大明治高レベル
  // ============================================================
  {
    id: 'koko_kankan_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の英文を読んで、設問①〜④に答えなさい。

Artificial intelligence, or AI, is changing the way we live and work. In recent years, AI has been used in many fields, from medicine to education. For example, AI can now help doctors analyze medical images more accurately than ever before. In schools, AI-powered programs can create personalized learning plans for each student, helping those who struggle and challenging those who excel.

However, not everyone is happy about the rise of AI. Some people worry that AI will take away jobs that humans currently do. Others are concerned about privacy, as AI systems often collect large amounts of personal data. There are also ethical questions about whether AI should be allowed to make important decisions, such as who gets a loan or who is hired for a job.

Despite these concerns, many experts believe that AI will ultimately benefit humanity if it is developed and used responsibly. They argue that instead of replacing humans, AI will work alongside us, taking care of routine tasks so that people can focus on more creative and meaningful work.

【設問】
① In what fields is AI currently being used?（本文から2つ具体例を挙げよ）
② What are two concerns people have about AI?（英語で答えよ）
③ 下線部「will work alongside us」とはどういう意味か、日本語で説明せよ。
④ 筆者のAIに対する立場を、本文の根拠を示しながら日本語で説明せよ。（60字以内）`,
    answer: '① Medicine (helping doctors analyze medical images) and education (creating personalized learning plans).\n② （例）Some people worry that AI will take away jobs. Others are concerned about privacy and the collection of personal data.\n③ 人間と並んで・協力しながら働く（人間を置き換えるのではなく、AIが人間の隣に立って共同作業をする）という意味。\n④ 筆者は条件付きで肯定的。「責任ある形で開発・使用されれば、AIは最終的に人類に恩恵をもたらす」と述べており、人間の創造的な仕事を支援する立場をとる。（57字）',
    hint: '①第1段落にmedicine（医療）とeducation（教育）の具体例がある。②第2段落「Some people worry〜」「Others are concerned〜」に注目。③alongside = 〜の横に・並んで。④第3段落のDespit〜の部分に筆者の見解が集約されている。',
    explanation: `【出題意図】
AIと未来社会をテーマにした200語程度の論説文読解問題。情報の抽出・英語での記述・語句の意味説明・筆者の主張の把握という、記述を含む4問の総合的な読解力と表現力を問う。関大一高・同志社高レベルの入試形式。

【解説】
①「In many fields, from medicine to education」とあり、具体例として医療（医師が医療画像を分析する支援）と教育（個別学習プランの作成）が挙げられている。②第2段落の「Some people worry that AI will take away jobs」と「Others are concerned about privacy」の2点が主な懸念。③alongside = 「〜の隣に・並んで」。「work alongside us」は「私たちと並んで働く」つまり「人間とAIが協力して働く」という意味。人間を「置き換える」のではなく「補完する」という関係。④筆者は「Despite these concerns（これらの懸念にもかかわらず）」と逆接で転換し、「AI will ultimately benefit humanity if it is developed and used responsibly（責任を持って開発・使用されれば最終的に人類に恩恵をもたらす）」と条件付き肯定の立場をとっている。

【注意点】
④のような「筆者の主張」を問う問題では必ず本文の根拠（引用・言い換え）を含めて答えること。「筆者はAIを肯定的に見ている」だけでは不十分。「〜という根拠のもと〜と主張している」という形で説明する。字数制限がある場合は要点を絞って簡潔にまとめる。

【関連知識】
AI関連の重要語彙：artificial intelligence（人工知能）、machine learning（機械学習）、algorithm（アルゴリズム）、data privacy（データプライバシー）、automation（自動化）、ethical（倫理的な）。論説文の構造：問題提起→具体例→反論→筆者の主張という流れを把握することで、内容が素早く理解できる。`,
  },
  {
    id: 'koko_kankan_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の英文を読んで、設問①②に答えなさい。

Sleep is one of the most important things for our health, but many young people today do not get enough of it. Teenagers need about eight to ten hours of sleep each night, but studies show that many get only six hours or less. This lack of sleep can cause serious problems, including difficulty concentrating in school, mood changes, and even physical health issues.

One reason for this is the use of smartphones before bedtime. The blue light from screens can prevent the brain from producing melatonin, a hormone that helps us sleep. Another reason is homework and club activities, which often keep students busy until late at night.

Experts suggest that to improve sleep, teenagers should avoid using phones at least one hour before bed and try to go to sleep at the same time every night. Getting regular exercise during the day also helps.

【設問】
① このエッセイに最もふさわしいタイトルをア〜エから選べ。
　ア. The Dangers of Smartphones for Young People
　イ. Why Teenagers Are Not Getting Enough Sleep
　ウ. How Exercise Can Improve Your Health
　エ. The Benefits of Getting Eight Hours of Sleep

② 本文の内容を英語で40語程度に要約しなさい。`,
    answer: '① イ（Why Teenagers Are Not Getting Enough Sleep）\n② （解答例）Many teenagers today sleep only six hours, much less than the recommended eight to ten hours. This is mainly due to smartphone use and busy schedules. To improve sleep, experts suggest avoiding phones before bed and going to sleep at a regular time.',
    hint: '①全段落にわたるテーマは「10代の若者が十分な睡眠を取れていない理由と対策」。②要約は「問題→原因→解決策」の3点を40語でまとめる。',
    explanation: `【出題意図】
英文要約とタイトル選択を組み合わせた問題。全体のテーマを一文で表すタイトル選択能力と、長い本文を40語程度に圧縮する要約力（情報の取捨選択・自分の言葉での言い換え）を問う。立命館高・関学高レベルの問題形式。

【解説】
①本文は3段落すべてが「10代の睡眠不足（問題）・原因・解決策」について書かれている。ア「スマートフォンの危険性」は原因の1つにすぎず範囲が狭い。ウ「運動」は最後の1文のみ。エ「8時間睡眠の利点」は本文の主旨ではない。イ「なぜ10代は十分な睡眠が取れないのか」が全体を最もよく表している。②要約のポイント：問題（睡眠不足・6時間以下）＋原因（スマートフォンの青色光・忙しいスケジュール）＋解決策（就寝1時間前のスマホ禁止・規則正しい就寝時刻）の3つを簡潔にまとめる。全体を通したテーマを1文目に置くと読みやすい。

【注意点】
要約では本文の表現をそのままコピーするのではなく、自分の言葉で言い換える（パラフレーズ）ことが重要。ただし語彙が不安な場合は本文の重要語をそのまま使ってもよい。40語の目安：4〜5文程度。文と文の間の接続（This is because / As a result / To solve this problem）を使うと文章が自然につながる。

【関連知識】
タイトル選択問題のコツ：①全段落を貫くテーマを選ぶ（特定の段落だけを表すタイトルは誤り）②肯定的すぎるタイトル・否定的すぎるタイトルは要注意。要約の型：「問題文（What）+ 原因（Why）+ 解決策（How）」。睡眠関連の語彙：melatonin（メラトニン）、concentrate（集中する）、recommend（推薦する）、bedtime（就寝時刻）。`,
  },
  {
    id: 'koko_kankan_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の会話文を読んで、（　①　）〜（　④　）に入る最も適切な文をア〜クから選びなさい。（同じ選択肢は2度使えない）

[At school, during lunch break]
Kenji: Hey Yumi, did you see the announcement? There's going to be a school trip to Kyoto next month.
Yumi: Really? (　①　) I've always wanted to go there.
Kenji: Me too! (　②　) Do you know if we need to pay for everything ourselves?
Yumi: I'm not sure. (　③　) But I heard we'll need to bring some extra money for souvenirs and personal expenses.
Kenji: That makes sense. (　④　) What do you think we should do on the free time?
Yumi: I'd love to visit Kinkakuji and maybe try some traditional Kyoto cuisine!

ア. That sounds exciting!
イ. I think most of the cost is covered by the school.
ウ. I can't believe we're going abroad.
エ. It's my first time going to Kyoto.
オ. I don't want to go at all.
カ. We should probably check the notice board for details.
キ. I've been there many times already.
ク. That's disappointing news.`,
    answer: '① ア　② エ　③ イまたはカ　④ カまたはイ（③④はイとカの順序入れ替えでも可）',
    hint: '①「京都に行きたかった」という発言の前に来る反応。②「費用を自分で払う必要があるか」という話題への導入。③費用についての情報。④「空き時間に何をするか」という次の話題への橋渡し。',
    explanation: `【出題意図】
学校行事（修学旅行）についての会話文から、文脈に合う応答を選ぶ問題。会話の自然な流れ・登場人物の感情・話題の展開を正確に読み取る力を問う。リスニング代替問題としても機能する、会話の論理的な流れを把握する問題。

【解説】
①ゆみが「ずっと京都に行きたかった」と述べているので、その前の反応は「わくわくする・楽しそう」など肯定的な表現が来る。ア「楽しそう！」が最適。ウ「海外に行くとは信じられない」は京都なのでNG。ク「残念なお知らせだ」は文脈に反する。②「費用を自分で払うか知ってる？」という質問の前に来る文。エ「京都に行くのは初めて」が自然な流れ（初めてだから費用も気になる）。③費用についての情報→ イ「ほとんどの費用は学校が負担する」、またはカ「掲示板で詳細を確認した方がいい」。どちらも文脈に合うため、③④でイとカの順序が入れ替わってもよい。④「空き時間に何をするか」という次の話題への転換にカ（掲示板確認を提案）またはイが入る。

【注意点】
会話文選択では選択肢を読む前に会話全体の流れを把握することが大切。NG選択肢の見極めが重要：ウ（京都は国内なので abroad は誤り）、オ（肯定的な会話の流れに合わない）、キ（ケンジが「京都に初めて行きたい」と述べているのと矛盾）。1つ選んだら「前後の発言との整合性」を必ず確認する。

【関連知識】
会話の流れを作る表現：Really?（本当に？）= 相手の発言への驚き・関心。That makes sense.（それは理にかなっている・なるほど）= 納得の表現。I'm not sure.（はっきりはわからないけど）= 不確かな情報を伝える前置き。I'd love to〜（ぜひ〜したい）= 強い希望の表現。これらは実際の会話でも頻繁に使われる表現。`,
  },
  {
    id: 'koko_kankan_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次のテーマについて、あなた自身の意見を英語で述べなさい。（30語以上）

テーマ：「中学生は毎日スマートフォンを使うべきか、それとも使用を制限すべきか。あなたの考えを理由とともに述べなさい。」

（解答用紙には「I think」または「I believe」で書き始めること）`,
    answer: `（解答例1 – 制限すべき立場）
I think junior high school students should limit their smartphone use. Using smartphones too much can cause sleep problems and make it hard to focus on studying. Students should spend more time on hobbies and face-to-face conversations instead. A limit of one hour per day seems reasonable.（53語）

（解答例2 – 自由に使うべき立場）
I believe students should be free to use smartphones every day. Smartphones help us learn new things, communicate with friends, and stay safe when we are away from home. However, we should also be responsible and avoid using them during class or late at night.（47語）`,
    hint: '「I think / I believe + 主張」の後に「Because / because / This is because」で理由をつなぐ。具体的な理由を1〜2つ挙げて、最後にまとめの文を書くと30語以上になりやすい。',
    explanation: `【出題意図】
自分の意見を英語で論理的に述べる英作文問題（意見型）。主張・理由・具体例・まとめという意見文の構成力と、30語以上という語数条件を満たす表現力を同時に問う。近大附属高・関大一高の英作文形式。

【解説】
意見型英作文の基本構成：①主張（I think/believe〜）→②理由（because / This is because〜）→③具体例（For example / For instance〜）→④まとめ（Therefore / So〜）。「制限すべき」の理由例：睡眠不足・集中力低下・依存症リスク・対面コミュニケーション不足。「自由に使うべき」の理由例：学習ツール・緊急時の安全確保・友人とのコミュニケーション・グローバルな情報収集。どちらの立場でも「理由が明確かつ具体的」であれば評価される。

【注意点】
意見文では「I think that〜」「In my opinion,〜」「From my point of view,〜」などで主張を明確にする。理由は「because〜」「since〜」で接続。語数を稼ぐために「However,〜（しかしながら）」「On the other hand,〜（一方で）」などの接続詞を活用する。スペルミス・主語と動詞の一致・時制の一貫性に注意。日本語で先に考えてから英語に訳す手順も有効。

【関連知識】
意見文で使える表現：In addition（さらに）/ Moreover（その上）/ For example（例えば）/ As a result（その結果）/ Therefore（したがって）/ I believe that〜 is important because〜（〜は〜なので大切だと思う）。関関同立附属高の英作文では30〜50語が標準。採点基準は①内容の明確さ②文法の正確さ③語数の3点が主。`,
  },
  {
    id: 'koko_kankan_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: `次の英文を読んで、設問①〜④に答えなさい。（最高難度：記述含む）

[Passage 1]
The concept of "slow living" has gained popularity in recent years as a reaction to the fast-paced modern lifestyle. Supporters of slow living argue that by slowing down and focusing on what truly matters — family, health, nature, and community — people can lead more fulfilling and meaningful lives. This movement encourages people to cook their own food, spend time in nature, and disconnect from digital devices.

[Passage 2]
Critics of slow living, however, point out that it is a luxury that not everyone can afford. People who work long hours for low wages cannot simply choose to "slow down." Furthermore, technological progress and a faster pace of life have brought enormous benefits to humanity, including better healthcare, global communication, and rising living standards. To reject these advances in the name of simplicity may be idealistic and impractical.

[Passage 3]
Perhaps the answer lies somewhere in between. Rather than fully embracing or rejecting either lifestyle, individuals might benefit from consciously choosing which aspects of modern life to adopt and which to slow down. A balanced approach — using technology wisely while making time for rest and connection — may offer the most sustainable path forward.

【設問】
① slow living（スロー・リビング）とはどのような考え方か、日本語で説明せよ。（40字以内）

② 第2段落でslow livingへの批判として挙げられている点を、英語で2点まとめよ。

③ 下線部「it is a luxury that not everyone can afford」とはどういう意味か、日本語で答えよ。

④ 筆者が第3段落で主張していることを、あなた自身の言葉を加えながら日本語で論じよ。（80字以内）`,
    answer: `① 現代の速いペースの生活への反動として、家族・健康・自然・コミュニティに焦点を当て、ゆっくりと充実した生き方をしようとする考え方。（39字）

② （例）
・It is a luxury that not everyone can afford — low-wage workers cannot choose to slow down.
・Technological progress and a faster pace of life have brought important benefits such as better healthcare and global communication.

③ スロー・リビングはすべての人が選べる贅沢ではない（低賃金で長時間働く人にはそのような選択肢がない）という意味。

④ 筆者はスロー・リビングの完全な採用でも拒否でもなく、現代の技術を賢く活用しながら休息や人とのつながりにも時間を作るバランスのとれたアプローチが最も持続可能だと主張している。個人がどの側面を選ぶか意識的に決めることが重要だと思う。（79字）`,
    hint: '①第1段落のslow livingの説明をまとめる。②第2段落「Critics〜」の内容から2点を抜き出す。③afford = （費用・時間・労力を）〜する余裕がある。④第3段落全体の主旨をつかみ、自分の言葉を加えて論じる。',
    explanation: `【出題意図】
スロー・リビングをテーマにした複数段落の論説文読解問題。概念の説明・批判論点の抽出・語句の意味解説・筆者の主張への自己見解付与という、高度な読解力・思考力・表現力をすべて問う最高難度の入試問題。関大一高・同志社高・立命館高の入試レベル。

【解説】
①第1段落：slow living = 速いペースの現代生活への反動として、真に重要なもの（家族・健康・自然・コミュニティ）に焦点を当て、充実した生活を送ろうとする考え方。自炊・自然体験・デジタルデバイスから離れることを推奨。②第2段落の批判：(a)低賃金・長時間労働者には「スローダウン」を選ぶ余裕がなく、すべての人が選べる贅沢ではない。(b)技術の進歩と速いペースの生活は医療・グローバルコミュニケーション・生活水準向上など人類に巨大な恩恵をもたらしており、単純さの名のもとに否定するのは理想的すぎて非現実的。③afford = 〜する余裕がある・〜を買う余裕がある。「not everyone can afford it」=「すべての人がそれを選べるわけではない（余裕がない人もいる）」。④第3段落：二者択一ではなく、現代の側面のどれを採用しどれをスローダウンするか意識的に選択する中間的・バランスのとれたアプローチを提案。「using technology wisely while making time for rest and connection」が核心。自分の意見を加える際は「私も〜と思う」「特に〜の点が重要だと考える」などを使う。

【注意点】
④では必ず「筆者の主張の要約」＋「自分の言葉・見解」の両方を含めること。「筆者はバランスが大事と言っている」だけでは不十分。「私自身も〜という経験から〜と感じる」「特に〜の部分に共感する/共感できない」などを加えて論じる。80字以内に収めるには不要な説明を削り、核心だけを残す練習が必要。

【関連知識】
論説文の読み方のコツ：各段落の役割を把握する（①問題提起・賛成側→②反対側・批判→③結論・統合）。論説文でよく使われる表現：however（しかしながら）/ furthermore（さらに）/ perhaps（おそらく）/ rather than〜（〜よりも）/ consciously（意識的に）/ sustainable（持続可能な）。関関同立附属高の最高難度問題では「筆者の立場を踏まえた自己意見の記述」が出題されるため、日頃から「賛成・反対・折衷案」の3パターンで意見を述べる練習が必要。`,
  },
];
