import type { Question } from './questions';

export const kokoOyoEigo50: Question[] = [
  {
    id: 'koko_oyo_eigo_01',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の英文の（　）に入る最も適切な語句を選びなさい。\n\n"If I （　） a bird, I could fly to you."\n\n① am　② were　③ have been　④ had been',
    answer: '② were',
    hint: '現在の事実に反する仮定を表すとき、if節の動詞はどんな形になる？"I am not a bird" という現実を踏まえて考えよう。',
    explanation: `【解説】
これは「仮定法過去」の問題です。仮定法過去は、現在の事実に反することや、実現不可能なことを仮定するときに使います。

■ 仮定法過去の形
If + 主語 + 動詞の過去形, 主語 + would/could/might + 動詞の原形

■ be動詞の特別ルール
仮定法では、主語が何であっても be動詞は「were」を使います（口語では "was" も見られますが、試験では "were" が正解）。

■ 文の意味
"If I were a bird, I could fly to you."
→「もし私が鳥だったら、あなたのもとへ飛んでいけるのに。」
（実際には鳥ではないので飛べない、という含意がある）

【構文分析】
If I [were] a bird,  ← if節：動詞を過去形（were）にする
I [could fly] to you.  ← 主節：could + 動詞の原形

【類題パターン】
・"If I were you, I would study harder."（もし私があなたなら～）
・"If she were here, she could help us."（もし彼女がここにいれば～）
・助動詞の選択肢（would / could / might）にも注意！

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: 'be動詞の仮定法では主語が "I" でも必ず "were" を使う。"was" を選ばないように注意！また、④ had been は仮定法過去完了（過去の仮定）の形なので、現在の仮定には使えない。',
    memoryTip: '「仮定法過去 = 現在の夢・願望」と覚えよう。「If I were～」の "were" は呪文のように丸ごと暗記！',
  },
  {
    id: 'koko_oyo_eigo_02',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の英文の（　）に入る最も適切な語句を選びなさい。\n\n"If she （　） harder, she would have passed the exam."\n\n① studied　② has studied　③ had studied　④ would study',
    answer: '③ had studied',
    hint: '「試験に合格していただろう」というのは、過去の話。過去の事実に反する仮定を表すときのif節の形は？',
    explanation: `【解説】
これは「仮定法過去完了」の問題です。過去の事実に反することを仮定するときに使います。

■ 仮定法過去完了の形
If + 主語 + had + 過去分詞, 主語 + would/could/might + have + 過去分詞

■ 文の意味
"If she had studied harder, she would have passed the exam."
→「もし彼女がもっと一生懸命勉強していたなら、試験に合格していたでしょう。」
（実際には十分勉強しなかったので、試験に落ちた、という含意）

【構文分析】
If she [had studied] harder,  ← if節：had + 過去分詞
she [would have passed] the exam.  ← 主節：would + have + 過去分詞

■ 仮定法過去 vs 仮定法過去完了
・仮定法過去：現在の仮定　→ If I were... / I would...
・仮定法過去完了：過去の仮定　→ If I had been... / I would have...

【類題パターン】
・"If it had not rained, we could have played outside."
・"If I had known that, I would have called you."
・混合仮定法（if節が過去完了、主節が過去形）にも注意！

これができたら英語の実力は本物！`,
    pitfall: '① studied は仮定法過去（現在の仮定）、④ would study は主節の形であり、if節には使えない。文の時制（過去の話）をしっかり見極めよう。',
    memoryTip: '「仮定法過去完了 = 過去の後悔・たられば」。If節に "had + 過去分詞"、主節に "would have + 過去分詞" のセットで覚える！',
  },
  {
    id: 'koko_oyo_eigo_03',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の英文について、下線部の分詞構文の意味として最も適切なものを選びなさい。\n\n"Walking along the street, I found a wallet."\n\n① 財布を見つけながら、私は通りを歩いた。\n② 通りを歩いていると、私は財布を見つけた。\n③ 財布を見つけるために、私は通りを歩いた。\n④ 通りを歩き終えて、私は財布を見つけた。',
    answer: '② 通りを歩いていると、私は財布を見つけた。',
    hint: '分詞構文（現在分詞 -ing）は、主節と同じ主語の動作や状態を表す。この文の主語はどちらも "I" だね。どんな状況で財布を見つけたのか考えよう。',
    explanation: `【解説】
これは「分詞構文（現在分詞）」の問題です。

■ 分詞構文とは
接続詞＋主語を省略して、分詞（-ing / 過去分詞）で始める副詞句のこと。主節と主語が同じ場合に使えます。

■ 分詞構文の意味の種類
① 時（～するとき、～していると）
② 理由（～なので）
③ 条件（～すれば）
④ 付帯状況（～しながら）
⑤ 結果（～して、その結果～）

■ この文の分析
"Walking along the street" は、「通りを歩いていると（その時）」という「時」を表す分詞構文です。
元の文に戻すと：
→ While I was walking along the street, I found a wallet.

【構文分析】
Walking along the street,  ← 分詞構文（While I was walking～の省略形）
I found a wallet.  ← 主節

【類題パターン】
・"Turning left, you will see the station."（左に曲がると～）
・"Feeling tired, she went to bed early."（疲れを感じたので～）
・"Singing a song, she cooked dinner."（歌を歌いながら～）

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '④「歩き終えて」は having walked のように "having + 過去分詞" の形（完了の分詞構文）で表す。walking だけでは「完了」の意味は出ない。',
    memoryTip: '分詞構文の意味は文脈で判断！「-ing で始まる副詞句 = 何かの状況・理由・条件を伝えている」と意識するだけで読める。',
  },
  {
    id: 'koko_oyo_eigo_04',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の英文の分詞構文（下線部）を、接続詞を使った文に書き換えなさい。\n\n"Written in easy English, the book is good for beginners."\n\n書き換え後の文：（　　　　　　　　　）, the book is good for beginners.',
    answer: 'Because it is written in easy English（/ Since it is written in easy English）',
    hint: '過去分詞で始まる分詞構文は「受け身」の意味。この本が「やさしい英語で書かれている」→ それが理由で初心者に向いている、という流れを考えよう。',
    explanation: `【解説】
これは「過去分詞で始まる分詞構文」の問題です。

■ 過去分詞の分詞構文
現在分詞（-ing）で始まる分詞構文が「能動」の意味なのに対し、過去分詞（-ed など）で始まる分詞構文は「受動（受け身）」の意味を持ちます。

■ この文の分析
"Written in easy English" は「やさしい英語で書かれているので」という「理由」を表します。
元の文に戻すと：
→ Because it is written in easy English, the book is good for beginners.
（Being written in easy English の "Being" が省略された形とも解釈できる）

■ 書き換えのポイント
・主節の主語（the book）が受け身の対象 → it で受ける
・「理由」を表すので because / since を使う

【構文分析】
Written in easy English,  ← 分詞構文（Because it is written～の省略）
the book is good for beginners.  ← 主節

【類題パターン】
・"Surprised at the news, she couldn't say a word."（知らせに驚いて～）
・"Seen from the sky, the city looks beautiful."（空から見ると～）
・"Left alone, the child began to cry."（一人残されて～）

これができたら英語の実力は本物！`,
    pitfall: 'この分詞構文の主語は "the book"（それ＝本）。書き換え時に it は the book を指す。主語を人（she, he）にしないように注意！',
    memoryTip: '「過去分詞スタート = 受け身の分詞構文」！Written / Seen / Left / Surprised などが文頭に来たらこのパターン。',
  },
  {
    id: 'koko_oyo_eigo_05',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の2文を、間接疑問文を使って1文に書き換えるとき、（　）に入る適切な語順を答えなさい。\n\n"Where does he live?" / "Do you know ～?"\n\n→ Do you know （　　　　　）?',
    answer: 'where he lives',
    hint: '間接疑問文では、疑問文の語順（疑問詞 + 助動詞 + 主語）が、普通の文の語順（疑問詞 + 主語 + 動詞）に変わる。does が消えて動詞はどう変わる？',
    explanation: `【解説】
これは「間接疑問文」の語順の問題です。疑問文が他の文の中に組み込まれるとき、語順が変わることに注意が必要です。

■ 間接疑問文の語順の変化
【通常の疑問文】疑問詞 + 助動詞/be動詞 + 主語 + 動詞
　→ "Where does he live?"

【間接疑問文】疑問詞 + 主語 + 動詞（助動詞は消える）
　→ "where he lives"

■ ポイント
・do/does/did は消えて、元の動詞に三単現や過去形をつける
・"does he live" → "he lives"（does が消え、live に -s をつける）
・疑問符（？）の位置：外側の文が疑問文なら文末、そうでなければピリオド

【構文分析】
Do you know [where he lives]?
　　　　　　 ↑間接疑問（名詞節として know の目的語）

【類題パターン】
・"I don't know why she is crying."（なぜ彼女が泣いているのか知らない）
・"Can you tell me when the train leaves?"（電車はいつ出発するか教えて）
・"I wonder who broke the window."（誰が窓を割ったのだろう）

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '間違いの多い形：「where does he live」（疑問文の語順のまま）→ ✗。間接疑問文になると助動詞 does が消え、動詞に -s がつく。',
    memoryTip: '間接疑問文のコツ：「疑問文を普通の文にする」イメージ。疑問詞の後を「主語＋動詞」の順にするだけ！',
  },
  {
    id: 'koko_oyo_eigo_06',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の英文の（　）に入る適切な語句を選びなさい。\n\n"Please tell me （　）."\n\n① what time is it　② what time it is　③ what is the time　④ the time what it is',
    answer: '② what time it is',
    hint: '「～を教えてください」という文で、what time は疑問詞の働きをしている。間接疑問文の語順は？',
    explanation: `【解説】
これも「間接疑問文」の語順の問題です。"Please tell me ～." のあとに来る部分は間接疑問文（名詞節）になります。

■ 間接疑問文の語順
疑問詞（what time）+ 主語（it）+ 動詞（is）

正解：what time it is
（× what time is it → これは直接疑問文の語順）

■ なぜ③ "what is the time" は間違い？
これも直接疑問文の語順（What is the time?）になっているので、tell me の後には使えません。

■ 文全体の意味
"Please tell me what time it is."
→「今、何時か教えてください。」

【構文分析】
Please tell me [what time it is].
　　　　　　　↑間接疑問（tell me の目的語となる名詞節）

■ 比較
直接疑問文：What time is it?（今、何時ですか？）
間接疑問文：Please tell me what time it is.（今何時か教えて）

【類題パターン】
・"I'm not sure where the station is."
・"Do you know how much this costs?"
・"She asked me who that man was."

これができたら英語の実力は本物！`,
    pitfall: '①③は直接疑問文の語順（疑問詞＋動詞＋主語）のまま使っており誤り。④は "what" の使い方が不自然で文法的に成立しない。',
    memoryTip: '"tell me", "I know", "I wonder", "I\'m not sure" の後は必ず間接疑問文！「疑問詞＋主語＋動詞」の語順を反射的に作れるよう練習しよう。',
  },
  {
    id: 'koko_oyo_eigo_07',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の英文は「強調構文」です。この文を強調構文を使わない普通の文に書き換えなさい。\n\n"It was Tom that broke the window."\n\n→ （　　　　　　　　　　　　　　　　　）.',
    answer: 'Tom broke the window.',
    hint: '強調構文「It is ～ that ...」は、特定の要素を強調するための構文。"It was" と "that" を取り除いて残った部分を組み立てれば、元の文になる。',
    explanation: `【解説】
これは「強調構文（It is ～ that ...）」の問題です。

■ 強調構文の仕組み
"It is/was + 強調したい要素 + that + 残りの文"

「It was Tom that broke the window.」
→ 強調されているのは "Tom"（誰が窓を割ったかを強調）
→ "It was" と "that" を取り除く
→ Tom broke the window.（元の普通の文）

■ 強調構文の特徴
・"It is/was" で始まり、"that" が続く
・"that" の代わりに who（人の場合）や which（物の場合）が使われることもある
・"It was Tom that/who broke the window."（Tomが割った、のを強調）

■ 見分け方のコツ
"It is ～ that ..." の構文を見たとき：
① that 以下の文に「欠けている要素」があれば強調構文
② that 以下が完全な文なら「It is important that ...」などの別構文

【構文分析】
It was [Tom] that broke the window.
　　　　↑強調要素　↑この部分が元の文の主語だった

【類題パターン】
・"It was in this room that he wrote his novel."（場所の強調）
・"It was yesterday that she called me."（時の強調）
・"It is you that I want to talk to."（目的語の強調）

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '強調構文と「It is ... that」構文（形式主語構文）を混同しないこと。"It is important that we study" は形式主語構文で "It" が "that we study" を指している。強調構文では "It was [強調部分] that ..." の形。',
    memoryTip: '強調構文は「It was ～ that」を消して残る部分が元の文。消す練習を繰り返そう！',
  },
  {
    id: 'koko_oyo_eigo_08',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の英文について、（　）に入る最も適切な動詞の形を選びなさい。\n\n"It is important that we （　） the environment."\n\n① protect　② protects　③ protected　④ to protect',
    answer: '① protect',
    hint: '「It is + 形容詞 + that + 主語 + 動詞」の形で、that節の中の動詞はどんな形になる？「仮定法現在」と呼ばれるルールがあるよ。',
    explanation: `【解説】
これは「It is + 形容詞 + that」構文における「仮定法現在（should の省略）」の問題です。

■ It is + 形容詞 + that + 主語 + (should +) 動詞原形
important, necessary, essential, vital, natural, strange などの形容詞と組み合わせるとき、that節の動詞は「原形」（または should + 原形）を使います。

■ この文の分析
"It is important that we (should) protect the environment."
→「私たちが環境を守ることが重要だ。」
・we の後は protect（原形）
・② protects（三単現の -s）は間違い
・should が省略されていると考えるとわかりやすい

■ よく使う形容詞リスト
important（重要な）/ necessary（必要な）/ essential（不可欠な）
natural（当然な）/ strange（奇妙な）/ urgent（緊急の）

【構文分析】
It（形式主語） is important that we [protect] the environment.
　　　　　　　　　　　　　　　↑that節が本当の主語

【類題パターン】
・"It is necessary that she be present at the meeting."
・"It is strange that he not know the answer."
・"It is vital that everyone follow the rules."

これができたら英語の実力は本物！`,
    pitfall: '主語が "we" でも三単現の "protects" は使わない！この構文では that 節の動詞は必ず「原形」。"protected"（過去形）も不正解。',
    memoryTip: '「It is important that ～」の that 節は "should" が隠れていると思おう！should は省略できるけど、動詞は原形のまま残る。',
  },
  {
    id: 'koko_oyo_eigo_09',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の（　）に入る最も適切な関係代名詞を選びなさい。\n\n"The scientist （　） discovered this law was from Germany."\n\n① which　② whose　③ who　④ whom',
    answer: '③ who',
    hint: '先行詞（関係代名詞が指す名詞）は何？それは人？物？また、関係代名詞は関係詞節の中でどんな役割（主語・目的語など）を担っているか確認しよう。',
    explanation: `【解説】
これは「関係代名詞 who/which/that の選択」の問題です。

■ 関係代名詞の選び方
| 先行詞 | 主格（主語） | 目的格（目的語） | 所有格 |
|--------|------------|----------------|--------|
| 人     | who / that | whom / that    | whose  |
| 物・動物 | which / that | which / that | whose  |

■ この文の分析
・先行詞：The scientist（科学者）→ 人
・関係詞節内での役割：「discovered this law」の主語 → 主格
　→ who（または that）が正解

"The scientist who discovered this law was from Germany."
→「この法則を発見した科学者はドイツ出身でした。」

■ 各選択肢の検討
① which → 物・動物に使う（人には不可）
② whose → 所有格（～の）を表す
③ who → 人の主格 ✓
④ whom → 人の目的格（「～を/に」の意味）

【構文分析】
The scientist [who discovered this law] was from Germany.
　　↑先行詞　　↑関係詞節（主語の役割）

【類題パターン】
・"The girl that won the prize is my sister."（that も使える）
・"The book which I bought yesterday is interesting."（目的格 which）
・"The man whom she loves is a teacher."（目的格 whom）

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '先行詞が "The scientist"（人）なので which は使えない。また、関係詞節の中で「発見した」の主語になっているので、目的格の whom も不正解。',
    memoryTip: '関係代名詞選びの2ステップ：①先行詞が「人か物か」→ ②節内で「主語か目的語か所有か」を確認！この順番で必ず解ける。',
  },
  {
    id: 'koko_oyo_eigo_10',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の2文を、関係代名詞 whose を使って1文に書き換えなさい。\n\n"I have a friend. His father is a doctor."\n\n→ I have a friend （　　　　　　　　　　）.',
    answer: 'whose father is a doctor',
    hint: '"His" は friend の「所有」を表しているね。whose はまさに「～の」という所有を表す関係代名詞。His を whose に置き換えて、friend の後に続けよう。',
    explanation: `【解説】
これは「所有格の関係代名詞 whose」を使った文の書き換えです。

■ whose の使い方
whose は「人・物の所有格」を表す関係代名詞で、「～の」という意味。
先行詞が人でも物でも使えます。

■ 書き換えの手順
1. "I have a friend." と "His father is a doctor." をつなぐ
2. "His" は "friend" の所有を示している → whose に変える
3. "His father is a doctor" → "whose father is a doctor"
4. 先行詞 "a friend" の直後に関係詞節を置く

→ I have a friend whose father is a doctor.
（「父が医者である友人がいる」）

【構文分析】
I have a friend [whose father is a doctor].
　　　　　↑先行詞　↑whose = His（the friend's）

■ whose の注意点
・whose の後は必ず「名詞」が続く（whose + 名詞 + 動詞...）
・"of which" で代替できることもある（物が先行詞の場合）

【類題パターン】
・"The girl whose bag was stolen went to the police."
・"I know a man whose son plays for the national team."
・"She lives in a house whose roof is red."（物が先行詞）

これができたら英語の実力は本物！`,
    pitfall: '"whose" の後ろは必ず名詞！"whose is a doctor" のように動詞をすぐ続けないこと。また "who\'s" と混同しないよう注意（who\'s = who is / who has の短縮形）。',
    memoryTip: '"whose" = "his/her/its/their" の代わり！代名詞の所有格を whose に置き換えるイメージで練習しよう。',
  },
  {
    id: 'koko_oyo_eigo_11',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の（　）に入る最も適切な関係副詞を選びなさい。\n\n"This is the town （　） I was born."\n\n① which　② where　③ when　④ why',
    answer: '② where',
    hint: '先行詞は "the town"（町）。関係詞節の中を確認すると "I was born" だけで文が成立しているね。足りているのに「場所」の情報を追加したいとき、どの関係副詞を使う？',
    explanation: `【解説】
これは「関係副詞 where/when/why の使い分け」の問題です。

■ 関係副詞の選び方
| 関係副詞 | 先行詞の種類 | 意味 |
|---------|-----------|------|
| where   | 場所を表す名詞（place, town, city, country...）| ～する場所 |
| when    | 時を表す名詞（time, day, year, moment...）| ～する時 |
| why     | reason（理由）| ～する理由 |
| how     | way（方法）| ～する方法（先行詞を省略することが多い）|

■ この文の分析
・先行詞：the town（場所）
・関係詞節：I was born（主語＋動詞で完全な文）
・「場所」を表す関係副詞 → where

"This is the town where I was born."
→「ここが私の生まれた町です。」

■ 関係代名詞との違い
関係代名詞（which）を使う場合：節内に「欠けた要素」がある
→ "This is the town which I visited."（visited の後に目的語が欠けている）

関係副詞（where）を使う場合：節内が完全な文
→ "This is the town where I was born."（I was born は完全な文）

【類題パターン】
・"I remember the day when we first met."（time の when）
・"Tell me the reason why you were late."（reason の why）
・"This is the house where he lives."（場所の where）

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '① which は関係代名詞なので節内に「欠けた要素」が必要。"I was born" は完全な文なので which は使えない。節が完全かどうかを確認することが攻略の鍵！',
    memoryTip: '関係副詞か関係代名詞か迷ったら「節の中を見る」！完全な文 → 関係副詞、欠けた部分がある → 関係代名詞。',
  },
  {
    id: 'koko_oyo_eigo_12',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の2文の違いを説明した上で、（　）に of / for のどちらが入るか答えなさい。\n\nA: "It is kind （　） you to help me."\nB: "It is necessary （　） us to study English."\n\n（Aの答え：　）（Bの答え：　）',
    answer: 'A: of　B: for',
    hint: '"kind" は人の性質・性格を表す形容詞。"necessary" は行為の必要性を表す形容詞。人の性質を表すとき and 行為の必要性を表すときで、不定詞の「意味上の主語」を導く前置詞が変わるよ。',
    explanation: `【解説】
これは「不定詞の意味上の主語」における of と for の使い分けの問題です。

■ It is + 形容詞 + for/of + 人 + to do
不定詞（to do）の意味上の主語を明示するとき、形容詞の種類によって前置詞が変わります。

■ of を使う場合（人の性質・人柄を表す形容詞）
kind（親切な）/ nice（いい）/ good（良い）/ wise（賢い）
careless（不注意な）/ foolish（愚かな）/ clever（利口な）/ rude（失礼な）

→ "It is kind of you to help me."（助けてくれるとはあなたは親切ですね）
　★ of のあとの人 = 文の主語として成り立つ（You are kind.）

■ for を使う場合（行為の性質・重要性を表す形容詞）
necessary（必要な）/ important（重要な）/ difficult（難しい）/ easy（簡単な）
impossible（不可能な）/ possible（可能な）/ useful（便利な）

→ "It is necessary for us to study English."（私たちが英語を勉強することが必要だ）

【構文分析】
It is kind [of you] to help me.
（= You are kind to help me.）

It is necessary [for us] to study English.
（= It is necessary that we study English.）

【類題パターン】
・"It is foolish of him to say such a thing."（of：人の性質）
・"It is difficult for her to get up early."（for：行為の性質）

これができたら英語の実力は本物！`,
    pitfall: 'of の後の人は「You are kind」のように主語になれるかチェック！for の後の人は「We are necessary」とは言えない。この確認方法で迷わなくなる。',
    memoryTip: '「of = 人の性格を褒める・けなす形容詞」「for = それ以外の形容詞」と大まかに覚えてOK！kind / nice / wise / foolish は of 組の代表例。',
  },
  {
    id: 'koko_oyo_eigo_13',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の（　）に入る最も適切な動詞の形を選びなさい。\n\n"My mother made me （　） my room."\n\n① clean　② to clean　③ cleaning　④ cleaned',
    answer: '① clean',
    hint: '「make + 目的語 + 動詞」の形を使役動詞という。make の場合、目的語の後の動詞はどんな形になる？',
    explanation: `【解説】
これは「使役動詞 make/let/have」の問題です。

■ 使役動詞の使い方
使役動詞とは「（人に）～させる」という意味を持つ動詞です。

| 使役動詞 | 意味 | 目的語の後 |
|---------|------|----------|
| make    | （強制的に）～させる | 動詞の原形 |
| let     | （許可して）～させる | 動詞の原形 |
| have    | （頼んで）～してもらう | 動詞の原形 |

■ この文の分析
"My mother made me clean my room."
→「母は私に自分の部屋を掃除させた。」
・make + me（目的語）+ clean（原形）

■ get との違い
get も使役の意味を持ちますが、後ろは to + 動詞（to不定詞）になります。
・"My mother got me to clean my room."（get = to + 原形）

■ 受動態にすると
"I was made to clean my room by my mother."
（受動態では to + 原形 に変わる！）

【構文分析】
My mother made [me] [clean] my room.
　　↑主語　↑使役動詞　↑目的語　↑原形（補語）

【類題パターン】
・"Let me know if you need help."（let + me + 原形）
・"She had the mechanic check her car."（have + 目的語 + 原形）
・"Don't make him wait too long."（make + 目的語 + 原形）

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: 'make の後は to clean ではなく clean（原形のみ）。ただし受動態（was made to clean）や get（got me to clean）では to がつく。混同に注意！',
    memoryTip: '「make / let / have の後は原形！」これを鉄則として暗記。to がつくのは get と、受動態のときだけ。',
  },
  {
    id: 'koko_oyo_eigo_14',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の2文の意味の違いを説明し、（　）に入る適切な形を答えなさい。\n\nA: "I saw him （　） across the street."（彼が道を横断する瞬間を目撃した）　→ （　）は原形\nB: "I saw him （　） across the street."（彼が道を横断しているのをしばらく見ていた）　→ （　）は-ing形\n\nAの答え：（　）　Bの答え：（　）',
    answer: 'A: cross　B: crossing',
    hint: '知覚動詞（see/hear/feel）の後、目的語の動作が「完了・一瞬」なら原形、「進行中・継続」なら -ing 形を使う。',
    explanation: `【解説】
これは「知覚動詞 + 目的語 + 原形/-ing形」の違いの問題です。

■ 知覚動詞の使い方
see / hear / feel / watch / notice / listen to など

| 形 | 意味 | 例 |
|----|------|---|
| 原形（動詞の原形） | 動作の全体・完了を見た | I saw him cross the street.（渡るところを全部見た） |
| -ing形（現在分詞） | 動作の途中・一部を見た | I saw him crossing the street.（渡っている最中を見た） |

■ この文の分析
A: "I saw him cross across the street."
→ 彼が通りを渡り終えるところ（完了）を目撃した

B: "I saw him crossing across the street."
→ 彼が通りを渡っている途中（進行中）を見ていた

■ よく使う知覚動詞
・see（見る）/ watch（じっと見る）
・hear（聞こえる）/ listen to（～を聞く）
・feel（感じる）/ notice（気づく）

【構文分析】
I saw [him] [cross / crossing] across the street.
　　↑知覚動詞　↑目的語　↑原形 or -ing形（補語）

【類題パターン】
・"I heard someone knock / knocking at the door."
・"She felt her heart beat / beating fast."
・"We watched the children play / playing in the park."

これができたら英語の実力は本物！`,
    pitfall: '受動態にすると知覚動詞でも to がつく："He was seen to cross the street."（原形 → to + 原形）。ただし -ing 形はそのまま："He was seen crossing the street."',
    memoryTip: '「知覚動詞のあとは原形か -ing」→ 一瞬（完了）なら原形、ずっと（継続）なら -ing。映像をイメージして使い分けよう！',
  },
  {
    id: 'koko_oyo_eigo_15',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の各文の日本語訳として最も適切なものを選びなさい。\n\n"The more you practice, the better you will become."\n\n① あなたはもっと練習すれば、あなたはより良くなるだろう。\n② 練習すればするほど、あなたはより上手くなるだろう。\n③ 練習することは、あなたをよりうまくする。\n④ 練習さえすれば、あなたは最高になれる。',
    answer: '② 練習すればするほど、あなたはより上手くなるだろう。',
    hint: '「the + 比較級, the + 比較級」という構文は、比例の関係を表す特別な表現。「～すればするほど、ますます…」という意味になる。',
    explanation: `【解説】
これは「the + 比較級, the + 比較級」構文の問題です。

■ 構文の意味
"The + 比較級 + SV, the + 比較級 + SV"
→「～すればするほど、ますます...」（比例の関係）

■ この文の分析
"The more you practice, the better you will become."
→「練習すればするほど、あなたはより上手くなるだろう。」

■ 他の比較の複合表現
① no less than ＝ as many/much as（～もの、～と同じくらい）
　→ "She has no less than 100 books."（彼女は100冊もの本を持っている）

② as many as ＝（数えられる名詞に）～もの
　→ "As many as 500 people attended the event."（500人もの人が参加した）

③ no more than ＝ only（たった～しか）
　→ "I have no more than 100 yen."（私は100円しか持っていない）

④ not more than ＝ at most（多くとも）
　→ "It costs not more than 500 yen."（500円以下だ）

【構文分析】
[The more you practice], [the better you will become].
　↑前半：条件・程度　　　↑後半：結果・程度

【類題パターン】
・"The harder you study, the higher your score will be."
・"The older we get, the wiser we become."
・"The sooner, the better."（早ければ早いほどよい）

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: 'この構文は "the + 比較級" が2つセットで使われる。"more" や "better" が単体で出てきても比較の比例構文にはならない。「the がついている」ことを確認しよう。',
    memoryTip: '「The 比較級, the 比較級」= 「～ほど、ますます…」。"The more, the better."（多ければ多いほどよい）というフレーズを丸ごと覚えると使いやすい！',
  },
  {
    id: 'koko_oyo_eigo_16',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Yuki moved to Canada at the age of sixteen to study at a local high school. At first, she struggled to understand what her classmates were saying because they spoke very quickly and used a lot of slang. She also found it hard to express her own opinions clearly in English, even though she had studied the language for years in Japan. However, after a few months, she began to feel more comfortable and made several close friends.',
    question: '次の英文を読んで、問いに答えなさい。\n\nYukiが最初に難しいと感じたことは何か。本文の内容に基づいて、日本語で2点答えなさい。',
    answer: '①クラスメートが速く話し、スラング（俗語）をたくさん使うため、彼らの言っていることを理解するのが難しかった。②英語で自分の意見をはっきりと伝えることが難しかった。',
    hint: 'she struggled to... と she also found it hard to... の2か所に注目。それぞれ何が難しかったか読み取ろう。',
    explanation: `【解説】
長文読解の基本は「問われていることを本文から探す」こと。

■ 解答の根拠となる箇所
① "she struggled to understand what her classmates were saying because they spoke very quickly and used a lot of slang."
→ クラスメートが速くしゃべり、スラングを多用するため聞き取れなかった

② "she found it hard to express her own opinions clearly in English"
→ 自分の意見を英語でうまく伝えられなかった

■ 設問のポイント
・"What did she find difficult?" → 本文中の "struggled to" や "found it hard to" などの表現を探す
・「2点答えなさい」とあるので、2つの困難を両方書くこと

■ 読解テクニック
・逆接の "however"（しかし）を見つけたら、その前後で状況が変わるサイン
・"at first"（最初は）と "after a few months"（数か月後）の対比に注目

【構文分析】
She struggled [to understand what her classmates were saying]
　　　　　　　↑不定詞（何を？）　↑間接疑問文（what + SV）

She found it hard [to express her own opinions clearly].
　　　　　↑形式目的語　↑真の目的語（不定詞）

【類題パターン】
・留学・異文化理解を題材にした英文は頻出
・"struggle to / find it hard to / have difficulty (in) -ing" の表現を覚えよう

これができたら英語の実力は本物！`,
    pitfall: '「英語を長年勉強していたのに意見が伝えられなかった」（even though she had studied...）という逆説的な内容も含めて書けると高得点。even though の逆説表現に気づこう。',
    memoryTip: '長文では「最初（at first）」と「後から（after a few months）」の変化パターンが超頻出！問いに "at first" や "initially" があれば本文の冒頭近くに答えあり。',
  },
  {
    id: 'koko_oyo_eigo_17',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Environmental pollution has become one of the most serious problems facing the world today. Scientists warn that the burning of fossil fuels, such as coal and oil, releases large amounts of carbon dioxide into the atmosphere. This greenhouse gas traps heat from the sun and causes the Earth\'s temperature to rise. Although governments around the world are taking steps to reduce emissions, progress has been slow because many countries still depend heavily on fossil fuels for energy.',
    question: '次の英文を読んで、問いに答えなさい。\n\n本文で述べられている環境汚染の主な原因は何か。英語で抜き出すか、日本語で答えなさい。',
    answer: '化石燃料（石炭・石油など）の燃焼（the burning of fossil fuels, such as coal and oil）',
    hint: '「～の原因」を聞かれているので "because", "cause", "due to", "as a result of" などのキーワードの近くに答えがあることが多い。Scientists warn that の後を注意して読もう。',
    explanation: `【解説】
■ 解答の根拠
"Scientists warn that the burning of fossil fuels, such as coal and oil, releases large amounts of carbon dioxide into the atmosphere."
→ 化石燃料（石炭・石油）の燃焼が主な原因として述べられている

■ 本文の論理構造
① 問題提起：環境汚染は深刻な問題
② 原因：化石燃料の燃焼 → CO₂を大気中に放出
③ メカニズム：CO₂（温室効果ガス）が熱を閉じ込め → 地球温暖化
④ 現状：各国が排出削減に取り組んでいるが、進展は遅い

■ 重要語句の確認
・fossil fuels（化石燃料）= coal（石炭）, oil（石油）など
・releases into the atmosphere（大気中に放出する）
・greenhouse gas（温室効果ガス）
・traps heat（熱を閉じ込める）
・reduce emissions（排出量を減らす）

【構文分析】
Scientists warn [that the burning of fossil fuels releases CO₂].
　　　　　　　　↑that節（warn の目的語）

This greenhouse gas [traps heat] and [causes the Earth's temperature to rise].
　　　　　　　　　　↑2つの動詞を and でつないでいる

【類題パターン】
・「原因を述べよ」→ because / since / as / due to / owing to の近くに答え
・環境問題（pollution, global warming, deforestation）は頻出テーマ

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '「CO₂が原因」は間接的な結果であり、本文が主な原因として挙げているのは「化石燃料の燃焼」。問いに正確に答えるため、因果関係の流れを正しく追おう。',
    memoryTip: '環境問題の英文では「原因→メカニズム→影響→対策」の順で論旨が展開されることが多い。この流れを頭に入れて読むと理解しやすい！',
  },
  {
    id: 'koko_oyo_eigo_18',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Marie Curie dedicated her entire life to scientific research at a time when women were rarely accepted in academic circles. Despite facing discrimination and limited resources, she discovered two new elements — polonium and radium — and became the first person to win Nobel Prizes in two different sciences. Her perseverance serves as an inspiration not only for scientists but for anyone who has ever been told that their dreams are impossible.',
    question: '次の英文を読んで、問いに答えなさい。\n\n筆者がキュリー夫人について述べた目的として、最も適切なものを選びなさい。\n\n① 科学的発見の詳細を説明するため\n② 困難に負けず夢をあきらめない大切さを伝えるため\n③ ノーベル賞の歴史を紹介するため\n④ 女性が学術界で差別されていた歴史を批判するため',
    answer: '② 困難に負けず夢をあきらめない大切さを伝えるため',
    hint: '最後の文（Her perseverance serves as an inspiration...）が筆者の最も伝えたいメッセージ。"not only ... but ..." の後に来るメッセージに注目しよう。',
    explanation: `【解説】
■ 「筆者の意図・目的」を問う問題の解き方
筆者の主張や目的は多くの場合、文章の「最後の文（結論）」や「まとめの部分」に込められています。

■ 解答の根拠
"Her perseverance serves as an inspiration not only for scientists but for anyone who has ever been told that their dreams are impossible."
→「彼女の粘り強さは、科学者だけでなく、夢は不可能だと言われたことがある全ての人へのインスピレーションとなっている」

→ 筆者は、キュリー夫人を「困難を乗り越えた人」の象徴として描き、夢をあきらめないことの大切さを伝えようとしている。

■ 各選択肢の検討
① 発見の詳細 → polonium と radium の発見は述べられているが、それが「目的」ではない
② ✓ 困難に負けない大切さ → 最終文の主旨と一致
③ ノーベル賞の歴史 → 一言触れているだけで、目的ではない
④ 差別の批判 → "Despite facing discrimination"（差別にもかかわらず）は背景説明であり、批判が目的ではない

【構文分析】
Her perseverance serves as an inspiration
[not only for scientists]
[but for anyone who has ever been told that their dreams are impossible].

【類題パターン】
・「筆者の目的・意図」設問は、本文全体のトーンと最終文を重視する
・"serves as"（～として機能する）、"inspiration"（インスピレーション）は頻出語

これができたら英語の実力は本物！`,
    pitfall: '①の「科学的発見の詳細」は本文で触れられているが、それは「例」にすぎない。設問は「筆者の目的（purpose）」なので、本文全体が何を伝えようとしているかを考える。',
    memoryTip: '「筆者の目的」問題は最終文から読むのが近道！結論を先に確認してから本文を読むと解きやすくなる。',
  },
  {
    id: 'koko_oyo_eigo_19',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Studies suggest that teenagers who spend more than three hours a day on social media are more likely to experience feelings of anxiety and loneliness. Researchers believe this is partly because social media encourages users to compare their lives with the carefully edited highlight reels of others. While banning social media entirely is not realistic, experts suggest that setting time limits and focusing on real-life interactions can help teenagers maintain better mental health.',
    question: '次の英文を読んで、問いに答えなさい。\n\n筆者（専門家）がティーンエイジャーに勧めていることは何か。日本語で2点答えなさい。',
    answer: '①ソーシャルメディアの使用時間を制限すること。②実生活での人間関係・交流に集中すること。',
    hint: '"experts suggest that ..." の後に具体的な提案が2つ "and" でつながれている。',
    explanation: `【解説】
■ 解答の根拠
"experts suggest that setting time limits and focusing on real-life interactions can help teenagers maintain better mental health."
→ ①時間制限を設けること（setting time limits）
→ ②実生活の交流に集中すること（focusing on real-life interactions）

■ 本文の構造
・問題提起：SNS過剰利用 → 不安・孤独感
・原因分析：他者の「ハイライト」と自分を比較してしまう
・解決策（提案）：SNS禁止は現実的でない → 時間制限 + リアルな交流

■ 重要語句
・anxiety（不安）/ loneliness（孤独感）
・highlight reels（見栄えの良い場面だけを集めた投稿）
・realistic（現実的な）
・setting time limits（時間制限を設ける）
・real-life interactions（実生活での交流）
・mental health（精神的健康）

【構文分析】
experts suggest that
　[setting time limits] and [focusing on real-life interactions]
　can help teenagers [maintain better mental health].

help + 目的語 + 原形（or to + 原形）= 「～が...するのを助ける」

【類題パターン】
・「筆者が勧めること」→ suggest / recommend / advise / propose の近くに答え
・"not A, but B"（Aではなく、Bが）の構造で解決策が示されることが多い

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '「SNSを禁止すること」は "not realistic" と述べられており、専門家の提案ではない！否定されているものを答えとして選ばないよう注意。',
    memoryTip: 'SNS・テクノロジーと若者の心理は英語長文の超頻出テーマ。"social media", "mental health", "well-being" などの単語を事前に確認しておこう！',
  },
  {
    id: 'koko_oyo_eigo_20',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Every summer, the residents of the small mountain village gather to celebrate the Obon festival with music, dancing, and traditional food. Families who have moved away from the village make the long journey home to reunite with elderly relatives and pay respects to their ancestors. The festival has been held for over three centuries, and despite the rapid modernization of Japan, the villagers have made great efforts to preserve every detail of the original ceremony.',
    question: '次の英文を読んで、問いに答えなさい。\n\nこの祭りについての記述から、この地域の人々についてどのようなことが読み取れるか。最も適切なものを選びなさい。\n\n① 現代化を積極的に取り入れ、祭りの形式を新しくしている。\n② 伝統や先祖を大切にし、地域のつながりを守ろうとしている。\n③ 観光客を呼び込むために祭りを開催している。\n④ 高齢者のみが祭りに参加している。',
    answer: '② 伝統や先祖を大切にし、地域のつながりを守ろうとしている。',
    hint: '本文全体のキーワードを拾おう。"pay respects to their ancestors"（先祖を敬う）、"preserve every detail of the original ceremony"（元の儀式の細部を保存する）などが重要なヒント。',
    explanation: `【解説】
■ 「推測できること（can be inferred）」問題の解き方
本文に直接書かれていない事柄を、本文の内容から論理的に推測する問題です。

■ 解答の根拠
①先祖を敬う：
"Families ... pay respects to their ancestors."
→ 先祖を大切にしている

②地域のつながり：
"Families who have moved away ... make the long journey home to reunite with elderly relatives."
→ 遠くから帰省してでも地域とのつながりを大切にしている

③伝統の保存：
"the villagers have made great efforts to preserve every detail of the original ceremony"
→ 伝統を守ることに多大な努力をしている

■ 各選択肢の検討
① 「現代化を取り入れ形式を新しくしている」→ 逆。"despite the rapid modernization"（近代化にもかかわらず）とある
② ✓ 伝統・先祖・地域のつながりを大切に → 本文全体と一致
③ 「観光客を呼び込むため」→ 本文に記述なし
④ 「高齢者のみが参加」→ 家族全員で参加、誤り

【構文分析】
The festival has been held for over three centuries,
and despite [the rapid modernization of Japan],
the villagers have made great efforts [to preserve every detail of the original ceremony].

【類題パターン】
・「～から何が推測できるか」→ 本文の複数の情報を組み合わせて判断
・伝統文化・地域社会をテーマにした英文は頻出

これができたら英語の実力は本物！`,
    pitfall: '① 「現代化を積極的に取り入れ」は本文と逆の内容。"despite"（～にもかかわらず）という逆接の前置詞を正確に読み取ることが大切。',
    memoryTip: '「推測」問題は本文に書かれていないことを選ぶ問題ではなく、本文から「論理的に導ける」ことを選ぶ問題！本文の根拠を必ず確認しよう。',
  },
  {
    id: 'koko_oyo_eigo_21',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Space exploration has provided humanity with countless scientific discoveries, from advances in satellite technology to a deeper understanding of our solar system. However, some people question whether the enormous cost of sending humans into space is justified when there are so many urgent problems on Earth, such as poverty and climate change. Supporters of space programs argue that the technologies developed for space travel — such as water purification systems and solar panels — have greatly benefited life on Earth as well.',
    question: '次の英文を読んで、問いに答えなさい。\n\n第2段落（"However, some people question..."）の目的として最も適切なものを選びなさい。\n\n① 宇宙開発を全面的に支持する立場を示すため\n② 宇宙開発への批判的な見方を紹介するため\n③ 宇宙旅行の費用の内訳を説明するため\n④ 気候変動の原因を分析するため',
    answer: '② 宇宙開発への批判的な見方を紹介するため',
    hint: '"However, some people question whether..."（しかし、～かどうかを疑問視する人もいる）の文の働きを考えよう。前の段落と対比になっているはず。',
    explanation: `【解説】
■ 「段落の目的・役割」を問う問題の解き方
各段落が文章全体の中でどのような役割を果たしているかを把握する問題です。

■ 本文の段落構成
第1段落：宇宙探査の成果（科学的発見・技術の進歩）→ 宇宙開発の肯定的側面
第2段落："However" で始まる → 前段落への反論・批判的見方を導入
第3段落：宇宙開発支持者の反論 → 宇宙技術が地上にも貢献

■ 第2段落の主な内容
"some people question whether the enormous cost of sending humans into space is justified when there are so many urgent problems on Earth"
→ 地球の問題（貧困・気候変動）を解決せず宇宙にお金をかけることへの疑問・批判

■ 選択肢の分析
① 全面的に支持 → 逆（批判的な見方を紹介）
② ✓ 批判的な見方を紹介 → "some people question" が根拠
③ 費用の内訳 → 具体的な内訳は述べていない
④ 気候変動の原因 → 言及なし

【構文分析】
some people question [whether the enormous cost of sending humans into space is justified]
　　　　　　　　　　　↑間接疑問文（whether = ～かどうか）

when there are so many urgent problems on Earth
　↑「～であるのに」という背景・状況を表すwhen

【類題パターン】
・"However" / "On the other hand" / "Critics argue" → 反論・別視点の導入
・段落の役割：「導入」「具体例」「反論」「結論」を意識して読もう

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '「段落の目的」は段落の中に書かれている「内容」そのものではなく、その段落が文章全体の中で果たす「役割・機能」を問うもの。',
    memoryTip: '"However" が段落の最初にある → 前段落への反論・別の視点の導入！これは論説文の定番パターンなので即座に反応できるようにしよう。',
  },
  {
    id: 'koko_oyo_eigo_22',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Eating a balanced diet is essential for maintaining good health. Nutritionists recommend consuming a variety of vegetables, fruits, whole grains, and lean proteins every day. Many people find it difficult to change their eating habits, even when they know the benefits. However, small steps — such as adding one more serving of vegetables to each meal — can make a significant difference over time.',
    question: '次の英文を読んで、問いに答えなさい。\n\n本文第3文の "it" は何を指しているか。日本語で答えなさい。\n\n"Many people find it difficult to change their eating habits..."\n\n"it" が指しているのは：（　　　　　　　　　　）',
    answer: '食習慣を変えること（to change their eating habits）',
    hint: '"find it difficult to do" の "it" は形式目的語。本当の目的語はどこにある？"to" に続く部分が答えのヒントだよ。',
    explanation: `【解説】
これは「形式目的語の it」についての問題です。

■ 形式目的語の it
"find / think / make / consider + it + 形容詞 + to do / that節"
この構文では、"it" は「形式目的語（仮の目的語）」で、本当の目的語は to不定詞または that節です。

■ この文の分析
"Many people find it difficult to change their eating habits."

・it ← 形式目的語（仮の目的語）
・本当の目的語 ← "to change their eating habits"（食習慣を変えること）
・difficult ← 目的格補語

→ 直訳：「多くの人は、食習慣を変えることが難しいと気づく。」
→ 自然な訳：「食習慣を変えるのは難しいと感じる人が多い。」

■ 形式目的語 it の書き換え
"Many people find it difficult to change their eating habits."
= "Many people find changing their eating habits difficult."
= "Many people find that changing their eating habits is difficult."

【構文分析】
Many people find [it] difficult [to change their eating habits].
　　　　　　　　↑仮目的　↑補語　↑真の目的語

【類題パターン】
・"I found it interesting to read that book."
・"She thought it impossible to finish the work in one day."
・"They made it a rule to exercise every morning."

これができたら英語の実力は本物！`,
    pitfall: '形式目的語の it を「それ」と訳して前の文の何かを指していると誤解しないこと！この it は直後の to不定詞を指している。',
    memoryTip: '「find it + 形容詞 + to do」は超頻出構文！"it = to do の部分" と即座に判断できるよう何度も練習しよう。',
  },
  {
    id: 'koko_oyo_eigo_23',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Artificial intelligence is rapidly changing the way we live and work. From self-driving cars to medical diagnosis systems, AI is being used in an increasing number of fields. While AI can process vast amounts of data far more quickly than humans, it still lacks the ability to understand emotions, make ethical judgments, or think creatively in the way humans do. As AI continues to develop, society will need to carefully consider both its benefits and its limitations.',
    question: '次の英文を読んで、問いに答えなさい。\n\nこの英文の最も適切なタイトルを選びなさい。\n\n① "The Dangers of Self-Driving Cars"\n② "How AI Is Replacing Human Workers"\n③ "AI: Possibilities and Challenges in the Modern World"\n④ "Why Humans Are Better Than Machines"',
    answer: '③ "AI: Possibilities and Challenges in the Modern World"',
    hint: '本文全体が「AIの可能性（benefits）」と「限界（limitations）」の両方について述べていることを確認しよう。どのタイトルが本文全体をカバーしているか考えよう。',
    explanation: `【解説】
■ 「最適なタイトル」を選ぶ問題の解き方
タイトルは本文の「主題（main idea）」を表す必要があります。
・一部の内容だけに注目したタイトルは不正解
・本文全体をカバーしているタイトルが正解

■ 本文の主な内容
①AI が様々な分野で使われるようになっている（可能性・benefits）
②AI には感情理解・倫理的判断・創造性が欠けている（限界・limitations）
③AI の発展に伴い、社会はメリットと限界を両方考える必要がある（結論）

■ 選択肢の分析
① "The Dangers of Self-Driving Cars" → 自動運転は例として出ているだけ
② "How AI Is Replacing Human Workers" → 本文に記述なし
③ ✓ "AI: Possibilities and Challenges in the Modern World" → 可能性と課題（限界）の両方を含む
④ "Why Humans Are Better Than Machines" → 人間がAIより優れていると主張しているわけではない

■ 最終文の重要性
"society will need to carefully consider both its benefits and its limitations."
→ benefits（可能性）と limitations（限界）の「両方」を考えるという結論 → タイトル③と一致

【構文分析】
While AI can process vast amounts of data ... quickly,
it still lacks the ability [to understand emotions, make ethical judgments, or think creatively].
↑while = 「～できる一方で」（対比）

【類題パターン】
・タイトル選択 → 「本文全体を最もよく表しているか」を基準に判断
・両面（利点と欠点・賛成と反対）が述べられていればタイトルも「バランス型」を選ぶ

難しく感じるかもしれないけど、コツさえつかめばできる！`,
    pitfall: '「タイトルを選ぶ」問題では、本文の一部だけを取り上げた選択肢（①自動運転、②人間の仕事の代替）を選ばないよう注意。最終文の "both its benefits and its limitations" が鍵。',
    memoryTip: 'タイトル問題の攻略法：最初の文と最後の文を見れば主題がわかる！本文の "thesis（主張）" と "conclusion（結論）" を押さえよう。',
  },
  {
    id: 'koko_oyo_eigo_24',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Global warming is causing sea levels to rise, threatening coastal cities and island nations around the world. Extreme weather events such as typhoons, droughts, and floods have become more frequent and more destructive. Scientists agree that human activities — particularly the burning of fossil fuels — are the primary driver of these changes. To address this crisis, the writer argues that both individuals and governments must take immediate action by reducing carbon emissions and investing in renewable energy sources.',
    question: '次の英文を読んで、問いに答えなさい。\n\n筆者が推奨していることは何か。日本語で2点答えなさい。',
    answer: '①炭素排出量を削減すること。②再生可能エネルギーに投資すること。',
    hint: '"the writer argues that ... must ... by doing A and doing B" という構造に注目。"by" の後に2つの行動が "and" でつながれているよ。',
    explanation: `【解説】
■ 解答の根拠
"the writer argues that both individuals and governments must take immediate action by reducing carbon emissions and investing in renewable energy sources."

→ 推奨されている行動：
① reducing carbon emissions（炭素排出量を削減すること）
② investing in renewable energy sources（再生可能エネルギーに投資すること）

■ 本文の構造
・問題：海面上昇・極端な気象現象の深刻化
・原因：人間の活動（化石燃料の燃焼）
・解決策（筆者の提案）：個人・政府が行動する → ①②

■ 重要語句
・sea levels to rise（海面上昇）
・extreme weather events（極端な気象現象）
・primary driver（主な原因）
・take immediate action（即座に行動する）
・reducing carbon emissions（炭素排出量の削減）
・renewable energy sources（再生可能エネルギー源）

【構文分析】
the writer argues that both individuals and governments
must take immediate action
by [reducing carbon emissions] and [investing in renewable energy sources].

by + -ing = 「～することによって」（手段を表す）

【類題パターン】
・"The writer recommends / suggests / calls for ..." → 提案・推奨の表現
・地球温暖化・気候変動は最頻出テーマ。関連語彙を事前に確認しよう

これができたら英語の実力は本物！`,
    pitfall: '「個人と政府の両方が行動すべき」という点も含められると完璧な答え。"both individuals and governments" を見落とさないよう注意。',
    memoryTip: '「by + -ing」は手段を表す。「何をすることによって」行動するかを読み取るパターンは頻出。"by doing A and B" の構造に慣れよう！',
  },
  {
    id: 'koko_oyo_eigo_25',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: 'Reading printed books and reading on digital screens are two very different experiences. Studies have shown that readers tend to read more slowly and carefully when using physical books, which can lead to deeper comprehension and better retention of information. Digital screens, while offering convenience and instant access to millions of titles, often encourage a more fragmented and superficial style of reading. Although technology continues to improve, the writer concludes that physical books remain the superior choice for serious study and meaningful reading.',
    question: '次の英文を読んで、問いに答えなさい。\n\n筆者の結論として最も適切なものを選びなさい。\n\n① デジタル端末の方が読書には優れている。\n② 印刷された本とデジタル端末を組み合わせて使うべきだ。\n③ 深い理解や意味のある読書には、紙の本の方が優れている。\n④ 技術の進化によって、デジタル読書の問題は解決される。',
    answer: '③ 深い理解や意味のある読書には、紙の本の方が優れている。',
    hint: '最後の文 "the writer concludes that ..." に注目！"concludes" は「結論を出す」という意味。その後に筆者の最終的な主張がある。',
    explanation: `【解説】
■ 解答の根拠
"the writer concludes that physical books remain the superior choice for serious study and meaningful reading."
→「筆者は、紙の本が深い学習と意味のある読書においてより優れた選択肢であり続けると結論付けている。」

■ 本文の構造（比較論型）
① 紙の本：ゆっくり丁寧に読む → 深い理解・情報の保持
② デジタル端末：利便性・アクセス性 → しかし断片的・表面的な読み方になりがち
③ 結論：技術の進化にもかかわらず、深い読書には紙の本が優れている

■ 選択肢の分析
① デジタルが優れている → 逆
② 組み合わせて使うべき → 本文に記述なし
③ ✓ 紙の本が深い理解・意味のある読書に優れている → 最終文と完全に一致
④ 技術の進化で解決 → "Although technology continues to improve" は逆接。問題が解決するとは書いていない

■ キーワード
・deeper comprehension（より深い理解）
・better retention（より良い保持）
・fragmented（断片的な）
・superficial（表面的な）
・superior choice（より優れた選択）

【構文分析】
Although technology continues to improve,
the writer concludes that physical books remain [the superior choice]
[for serious study and meaningful reading].

although = 「～にもかかわらず」（逆接の接続詞）

【類題パターン】
・「筆者の結論」→ "concludes / argues / believes / maintains that ..." の後を確認
・比較・対比型の英文：A vs B の構造を整理しながら読む

難しく感じるかもしれないけど、コツさえつかめばできる！これができたら英語の実力は本物！`,
    pitfall: '④「技術の進化で問題は解決される」は本文に書かれていない。"Although technology continues to improve" の although（にもかかわらず）は逆接で、「改善されても紙の本が優れている」という意味。',
    memoryTip: '結論問題は "concludes / argues / believes / therefore / in conclusion" のキーワードを探せば一発で見つかる！最後の文に必ず目を通す習慣をつけよう。',
  },
];
