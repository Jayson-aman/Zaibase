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

{
    id: 'koko_oyo_eigo_26',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Thomas Edison is one of the most famous inventors in history. He invented the phonograph, improved the electric light bulb, and created many other devices that changed the world. However, his path to success was not easy. Edison failed thousands of times before he succeeded. When a reporter asked him how it felt to fail so many times, Edison replied, "I have not failed. I've just found 10,000 ways that won't work." This attitude shows his extraordinary perseverance. He believed that genius is one percent inspiration and ninety-nine percent perspiration. Edison worked up to eighteen hours a day in his laboratory, never giving up until he found the answer he was looking for. His life teaches us that success comes not from talent alone, but from the determination to keep trying no matter how many times we fail.`,
    question: '本文中の "perseverance" はどのような意味で使われているか。最も適切なものを選びなさい。\n\n(A) 天才的な才能\n(B) 何度失敗しても諦めずに続けること\n(C) 多くの発明品を作ること\n(D) 長時間働くこと',
    answer: '(B) 何度失敗しても諦めずに続けること',
    hint: '直前後の文脈をよく読もう。エジソンが何度失敗しても「どうしたか」を考えて！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
"perseverance"（パーサヴィアランス）は「忍耐力・粘り強さ・不屈の精神」を意味する名詞です。

本文の流れを確認しましょう：
・エジソンは何千回も失敗した
・「失敗したのではなく、うまくいかない方法を10,000通り見つけた」と答えた
・→この「あきらめない姿勢」を "perseverance" と表現している

文脈から意味を推測するポイント：
① その単語の前後で何が起きているか確認する
② 筆者がどんな態度を示しているか確認する
③ 具体例（10,000 ways that won't work）がヒントになる

関連語彙：
・persevere（動詞）：忍耐強く続ける
・persistent（形容詞）：粘り強い
・determination：決意、断固たる態度

【構文分析】
"This attitude shows his extraordinary perseverance."
→ This attitude（この態度が）/ shows（示す）/ his extraordinary perseverance（彼の並外れた忍耐力を）

【類題パターン】
「下線部の語の意味として最も適切なものを選べ」タイプは高校受験によく出る。
語彙の意味を直接知らなくても、前後の文脈・具体例・対比表現から推測する練習をしよう。

これができたら英語の実力は本物！`,
    pitfall: '(D) 「長時間働くこと」は本文に書かれているが、perseverance の意味そのものではない。具体的な行動と、それが示す「概念・態度」を区別しよう。',
    memoryTip: '"perseverance" = "per（徹底的に）+ severe（厳しい）" のイメージ。「厳しい状況を徹底的に耐える力」= 忍耐力！',
  },
  {
    id: 'koko_oyo_eigo_27',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `When I first arrived in Japan from the United States, I was surprised by how people greet each other. In America, we usually shake hands when we meet someone for the first time, and we often hug friends and family members. However, in Japan, people bow instead of shaking hands or hugging. At first, I felt a little uncomfortable because I did not know how deeply to bow or when to stop. But as I spent more time in Japan, I began to understand that bowing shows respect and politeness. I also noticed that the depth of the bow shows how much respect you are showing — a deeper bow means more respect. Now, after living in Japan for three years, I bow naturally without even thinking about it. I think learning about another culture's customs helps us understand and appreciate each other better.`,
    question: '本文の筆者について、本文の内容から推測できることとして最も適切なものはどれか。\n\n(A) 筆者は日本で生まれ育ったアメリカ人である。\n(B) 筆者はアメリカ出身で、現在は日本に住んでいる。\n(C) 筆者は日本とアメリカの両方で生まれた。\n(D) 筆者はアメリカに帰国したいと思っている。',
    answer: '(B) 筆者はアメリカ出身で、現在は日本に住んでいる。',
    hint: '「いつ日本に来たか」「今どこにいるか」を示す表現を本文から探してみよう。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
「推測できること（can be inferred）」を問う問題は、本文に直接書かれていることと、そこから論理的に導ける内容を区別することが重要です。

根拠となる表現：
① "When I first arrived in Japan from the United States" → アメリカ出身であることがわかる
② "Now, after living in Japan for three years" → 現在も日本に住んでいることがわかる

各選択肢の検討：
(A) 「日本で生まれ育った」→ 本文に矛盾（アメリカから来た）
(B) ✅ アメリカ出身・現在日本在住 → 両方とも本文から確認できる
(C) 「両方で生まれた」→ 本文に根拠なし
(D) 「帰国したい」→ 最後の文では文化理解の大切さを述べており、帰国願望は読み取れない

【構文分析】
"Now, after living in Japan for three years, I bow naturally without even thinking about it."
→ after living in Japan for three years：「日本に3年間住んだ後」（前置詞 after + 動名詞 living）
→ without even thinking：「考えることすらなく」（without + 動名詞）

【類題パターン】
"infer（推測する）" 系の問題は、本文に書かれていることをそのまま選ぶのではなく、
「書かれた内容から論理的に導ける」ことを選ぶのがポイント。

これができたら英語の実力は本物！`,
    pitfall: '本文に書いてあることを「そのまま選ぶ」のではなく、「組み合わせて推測する」のがこのタイプの問題。根拠を2つ以上本文から見つける習慣をつけよう。',
    memoryTip: 'infer（推測する）= in（中に）+ fer（運ぶ）→「本文の中の情報を組み合わせて答えを運び出す」イメージ！',
  },
  {
    id: 'koko_oyo_eigo_28',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Many people around the world choose to volunteer their time to help others. Volunteering means to give your time and energy to help people or organizations without receiving any payment. People volunteer at hospitals, schools, animal shelters, and food banks, among other places. Studies show that volunteering is not only good for the people who receive help, but also for the volunteers themselves. Volunteers often report feeling happier and more connected to their community. They also develop new skills and meet new friends. In Japan, volunteering became especially popular after the Great East Japan Earthquake in 2011, when thousands of people traveled to the affected areas to help with cleanup and recovery efforts. Today, more and more young people are choosing to volunteer both in Japan and abroad, recognizing the importance of helping others and making a positive difference in the world.`,
    question: '本文中で「無報酬で時間を提供すること」を意味する語（句）を本文中から抜き出しなさい。',
    answer: 'volunteer (their time) / to give your time and energy to help people or organizations without receiving any payment',
    hint: '「無報酬で＝お金をもらわずに」「時間を提供する」という意味の表現を本文から探そう。定義を直接説明している文に注目！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
本文の第2文に答えが直接書かれています：
"Volunteering means to give your time and energy to help people or organizations without receiving any payment."

ポイントとなる表現：
・"without receiving any payment" = 「いかなる報酬も受け取らずに」
・= 「無報酬で」という意味

この問題のポイント：
① 定義文（〜means...）に注目する
② "without ＋ 動名詞" で「〜せずに」という意味になる
③ payment = 支払い・報酬

語彙の整理：
・volunteer（動詞）：ボランティアをする、自発的に申し出る
・volunteer（名詞）：ボランティア（人）
・voluntary（形容詞）：自発的な、任意の
・payment（名詞）：支払い、報酬（= pay の名詞形）

【構文分析】
"to give your time and energy to help people or organizations without receiving any payment"
→ to give（～を提供すること）
→ your time and energy（あなたの時間とエネルギーを）
→ to help people or organizations（人々や団体を助けるために）
→ without receiving any payment（いかなる報酬も受け取らずに）

【類題パターン】
「本文中から抜き出しなさい」タイプは、
問題文（日本語）の意味→本文の英語定義 の順で対応させて探すのが基本。

これができたら英語の実力は本物！`,
    pitfall: '"volunteer" 単体だと動詞・名詞どちらにもなるので、「無報酬で時間を提供すること」という行為全体を指す表現として長めに引用できると高得点。',
    memoryTip: '"volunteer" の語源はラテン語 voluntas（意志）→「自分の意志で行う」= 無報酬・自発的。voluntaryも同語源！',
  },
  {
    id: 'koko_oyo_eigo_29',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Ocean plastic pollution has become one of the most serious environmental problems of our time. Every year, millions of tons of plastic waste enter the oceans, harming marine animals and damaging ecosystems. Sea turtles mistake plastic bags for jellyfish and eat them, while seabirds feed plastic pieces to their chicks, thinking they are food. The plastic also breaks down into tiny pieces called microplastics, which enter the food chain and eventually reach humans through the seafood we eat. Many scientists and environmentalists are working on solutions to this problem. However, the most effective solution, according to many experts, is not to clean up the plastic that is already in the ocean, but to stop the plastic from entering the ocean in the first place. This means reducing the amount of single-use plastic we produce and use, improving waste management systems, and educating the public about the importance of proper waste disposal. Only by addressing the root cause can we truly solve this problem.`,
    question: '本文の著者が提案している解決策として最も適切なものはどれか。\n\n(A) 海洋中のプラスチックをすべて回収する大規模な清掃作戦を行う。\n(B) 一回使い捨てプラスチックの削減や廃棄物管理の改善など、海洋への流入を防ぐ取り組みを行う。\n(C) 海の生き物に対してプラスチックを食べないよう教育する。\n(D) マイクロプラスチックを除去する特別なフィルターを海に設置する。',
    answer: '(B) 一回使い捨てプラスチックの削減や廃棄物管理の改善など、海洋への流入を防ぐ取り組みを行う。',
    hint: '「最も効果的な解決策は何か」を著者が直接述べている部分を探そう。"not ... but ..." という対比構造に注目！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
著者の主張は本文の後半部分に明確に述べられています：

"the most effective solution ... is not to clean up the plastic that is already in the ocean, but to stop the plastic from entering the ocean in the first place."

対比構造 "not A, but B"（AではなくB）に注目：
× 海の中のプラスチックを掃除する（= 選択肢Aの内容）
○ そもそもプラスチックが海に入るのを防ぐ

具体的な手段として本文が挙げているもの：
① reducing the amount of single-use plastic（一回使い捨てプラスチックを減らす）
② improving waste management systems（廃棄物管理システムを改善する）
③ educating the public（一般市民を教育する）

"stop + 目的語 + from + 動名詞" の構文：
"stop the plastic from entering the ocean"
→「プラスチックが海に入るのを防ぐ」

【構文分析】
"Only by addressing the root cause can we truly solve this problem."
→ Only by ～（〜することによってのみ）が文頭に来ると倒置が起きる
→ 通常語順: We can truly solve this problem only by addressing the root cause.

【類題パターン】
"not A but B"、"however" 以降、"the most important thing is..." など、
著者の主張・提案が現れるシグナル表現をつかむのが長文読解のコツ。

これができたら英語の実力は本物！`,
    pitfall: '選択肢(A)は本文中に出てくる内容だが、著者はそれを「最良の策ではない」と否定している。"not ... but ..." の対比で何を肯定し何を否定しているか見極めよう。',
    memoryTip: '"single-use plastic" = 「一回使い捨てプラスチック」。英語の環境問題語彙は入試頻出！root cause = 根本原因も重要語。',
  },
  {
    id: 'koko_oyo_eigo_30',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    passage: `Sleep is essential for students who want to do well in school. Many students think that staying up late to study is a good way to improve their grades, but research shows that this is not true. In fact, lack of sleep can have the opposite effect. [Paragraph 2] When students do not get enough sleep, their ability to concentrate and remember information decreases significantly. Studies have found that students who sleep less than seven hours a night score lower on tests and have more difficulty solving problems than those who get eight or nine hours of sleep. Furthermore, sleep deprivation affects mood and emotional control, making students more likely to feel stressed and anxious. Sleep is actually when the brain processes and stores the information learned during the day, so skipping sleep before an exam is particularly harmful. [Paragraph 3] Experts recommend that teenagers get between eight and ten hours of sleep every night. Creating a regular sleep schedule, avoiding screens before bedtime, and keeping the bedroom dark and quiet can all help improve sleep quality.`,
    question: '第2段落（Paragraph 2）で述べられている睡眠不足の影響として、本文の内容と合っているものをすべて選びなさい。\n\n(A) 集中力と記憶力が大幅に低下する。\n(B) テストの点数が高くなる。\n(C) 問題解決が難しくなる。\n(D) ストレスや不安を感じやすくなる。\n(E) 脳が情報を整理・保存する。',
    answer: '(A)、(C)、(D)',
    hint: '第2段落だけに集中しよう。睡眠不足の「悪影響」として書かれているものを選ぶ。(E)は睡眠の「利点」であることに注意！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
第2段落の内容を一つ一つ確認します：

(A) ✅「集中力と記憶力が大幅に低下する」
→ "their ability to concentrate and remember information decreases significantly" と一致

(B) ✗「テストの点数が高くなる」
→ 本文は "score lower on tests"（点数が低くなる）と反対のことを言っている

(C) ✅「問題解決が難しくなる」
→ "have more difficulty solving problems" と一致

(D) ✅「ストレスや不安を感じやすくなる」
→ "more likely to feel stressed and anxious" と一致

(E) ✗「脳が情報を整理・保存する」
→ これは睡眠不足の影響ではなく、「睡眠中に脳が行うこと（睡眠の利点）」の説明
→ 第2段落後半 "Sleep is actually when the brain processes and stores..." に書かれているが、
   これは睡眠不足の影響ではなく睡眠そのものの機能

「すべて選びなさい」タイプのポイント：
① 段落を指定している問題は、その段落だけを読む
② 「悪影響」「良い影響」などカテゴリを意識して読む
③ 正反対の内容が選択肢に紛れ込むことが多い（(B)がその例）

【構文分析】
"students who sleep less than seven hours a night score lower on tests"
→ who sleep less than seven hours a night：関係代名詞節（7時間未満しか寝ない学生は）
→ score lower on tests：テストでより低い点を取る

"making students more likely to feel stressed and anxious"
→ making + 目的語 + 形容詞 = 「〜を…な状態にする」（付帯状況の分詞構文）

【類題パターン】
「第〇段落の内容として正しいものをすべて選べ」は、
段落をきちんと分けて読み、本文と選択肢を1対1で対応させる練習が重要。

これができたら英語の実力は本物！`,
    pitfall: '(E)は本文に書かれているが「睡眠の機能・利点」であり「睡眠不足の影響」ではない。問われているカテゴリを意識して選択しよう。',
    memoryTip: '"sleep deprivation"（睡眠不足）= deprive（奪う）+ ation（名詞化）→「睡眠を奪われた状態」。入試長文の頻出トピック！',
  },
  {
    id: 'koko_oyo_eigo_31',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '条件英作文：「あなたが1日だけ有名人になれるとしたら、何をしますか？」\n\n条件：\n①仮定法（If I were ...）を使うこと\n②3文以上で書くこと\n③理由も含めること',
    answer: `If I were a famous soccer player for a day, I would visit children in hospitals and play soccer with them. I think it would make them happy and give them hope. I choose this because I believe sports have the power to cheer people up, even when they are sick.`,
    hint: '仮定法は「If + 主語 + 動詞の過去形, 主語 + would / could / might + 動詞の原形」の形！「もし〜なら…するのに」という非現実の話に使う。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
仮定法過去の基本形：
If + 主語 + 動詞の過去形（be動詞はwere）, 主語 + would + 動詞の原形

模範解答の分析：
① "If I were a famous soccer player for a day"
   → be動詞は人称に関わらず were を使う（仮定法の重要ルール）

② "I would visit children in hospitals and play soccer with them."
   → would + 動詞の原形（visit / play）

③ "I think it would make them happy and give them hope."
   → make + 目的語 + 形容詞（SVO + C）の構文：「〜を幸せにする」

④ "I choose this because I believe sports have the power to cheer people up"
   → cheer up：元気づける（句動詞）
   → have the power to + 動詞原形：〜する力を持つ

採点のポイント（実際の入試では）：
・仮定法の形が正しいか（were の使用・would の使用）
・3文以上あるか
・理由が含まれているか
・文法的に正しいか

他のテーマ例（練習用）：
"If I were a famous singer, I would hold a concert and donate all the money to charity."

【類題パターン】
仮定法を使った条件英作文は高校受験・高校内試験で頻出。
If I could fly, .../ If I had one million yen, ... なども練習しておこう。

これができたら英語の実力は本物！`,
    pitfall: 'if節の中のbe動詞は必ず "were"（was ではない）。"If I was ..." は口語では使われることもあるが、試験では were が正解。',
    memoryTip: '仮定法 = 現実ではない話！現在の話なのに「過去形」を使うのがポイント。If I were you（もし私があなたなら）は定番表現！',
  },
  {
    id: 'koko_oyo_eigo_32',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '条件英作文：「学校にスマートフォンを持ち込むことに賛成か反対か。理由を2つ挙げて英語で書きなさい。」\n\n条件：\n①賛成・反対のどちらかの立場を明確にすること\n②理由を2つ書くこと\n③4文以上で書くこと',
    answer: `I am against bringing smartphones to school. First, students might use them during class and stop concentrating on their studies. Second, some students may feel left out if they do not have the latest model, which can cause problems among classmates. For these reasons, I think smartphones should not be allowed at school.`,
    hint: '意見文は「立場表明→理由1→理由2→まとめ」の順で書くと論理的！First, ... Second, ... For these reasons, ... の型を使おう。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
意見文（Opinion Essay）の基本構成：
1. 立場表明：I am for / against ...（賛成・反対）
2. 理由1：First, ...
3. 理由2：Second, ...
4. まとめ：For these reasons, ... / Therefore, ...

模範解答の分析：
① "I am against bringing smartphones to school."
   → against + 動名詞（bringing）：〜することに反対

② "students might use them during class and stop concentrating on their studies."
   → might：〜かもしれない（可能性）
   → stop + 動名詞：〜するのをやめる（stop to 不定詞 とは違う！）
   → concentrate on：〜に集中する

③ "some students may feel left out if they do not have the latest model"
   → feel left out：仲間外れに感じる
   → which can cause problems：（それが）問題を引き起こす可能性がある（関係代名詞 which）

④ "For these reasons, I think smartphones should not be allowed at school."
   → For these reasons：これらの理由から（まとめの定番表現）
   → should not be allowed：許可されるべきではない（受動態 + should）

賛成意見の例（参考）：
"I am for bringing smartphones to school. First, students can use them to look up information quickly during class. Second, in case of an emergency, students can contact their parents immediately."

【類題パターン】
「賛否を述べて理由を2つ書く」形式は高校入試でほぼ毎年出る。
テーマ例：制服・部活動・宿題・海外旅行・ゲーム など

これができたら英語の実力は本物！`,
    pitfall: '賛成・反対を最初に明確にすること！書いた後で立場がどちらかわからなくなっている答案は減点される。最初の文で必ず "I am for/against ..." と示そう。',
    memoryTip: '意見文の魔法の型：立場→First→Second→For these reasons！これを覚えれば英作文の点数がグッと上がる！',
  },
  {
    id: 'koko_oyo_eigo_33',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '条件英作文：「環境を守るために自分ができることを3つ、英語で書きなさい。」\n\n条件：\n① "I can ..." または "I will ..." を使うこと\n②それぞれの行動に簡単な理由や説明を加えること\n③3文以上（各行動1文でも可）',
    answer: `First, I can reduce plastic waste by bringing my own bag when I go shopping. Second, I will try to save electricity by turning off the lights when I leave a room. Third, I can help protect the environment by using public transportation instead of cars, because cars produce a lot of CO2.`,
    hint: '環境関連の英語表現：reduce（減らす）/ save（節約する）/ recycle / protect（守る）/ instead of（〜の代わりに）をうまく使おう！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
環境問題に関する重要表現：
・reduce waste：ゴミを減らす
・save electricity / energy：電気・エネルギーを節約する
・use public transportation：公共交通機関を使う
・recycle：リサイクルする
・bring my own bag：マイバッグを持参する
・protect the environment：環境を守る
・produce CO2：二酸化炭素を排出する

模範解答の構文分析：
① "reduce plastic waste by bringing my own bag"
   → by + 動名詞：〜することによって（手段を表す）

② "try to save electricity by turning off the lights when I leave a room"
   → try to + 動詞原形：〜しようとする・〜に努める
   → when I leave a room：部屋を出るとき

③ "using public transportation instead of cars, because cars produce a lot of CO2"
   → instead of + 名詞/動名詞：〜の代わりに
   → because：理由を示す接続詞

採点のポイント：
・3つの行動が明確に書かれているか
・"I can / I will" が使われているか
・理由・説明が含まれているか

その他使える表現：
・"I will sort my garbage carefully."（ゴミを丁寧に分別する）
・"I can plant trees in my neighborhood."（近所に木を植える）

【類題パターン】
「〜するために自分にできることを書きなさい」は実践的な英作文問題の典型。
環境・健康・平和・地域貢献などテーマを変えて練習しよう。

これができたら英語の実力は本物！`,
    pitfall: '"by + 動名詞" の形を使うとき、by の後は必ず動名詞（-ing形）にすること。"by I bring my bag" は誤り → "by bringing my bag" が正しい。',
    memoryTip: '手段を表す "by + 動名詞" は英作文の必殺技！「〜することによって」という訳で使える万能表現！',
  },
  {
    id: 'koko_oyo_eigo_34',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '条件英作文：「あなたの将来の夢について書きなさい。理由も含めて4文以上で書くこと。」',
    answer: `My dream is to become a doctor in the future. I want to help people who are sick and make them feel better. I became interested in medicine when my grandmother was ill and I saw how hard the doctors worked to help her. I also think that being a doctor is a way to contribute to society and make the world a healthier place.`,
    hint: '「夢・理由・きっかけ・目標」の順で書くと自然な文章になる。なぜその夢を持ったか「きっかけ」を入れるとグッと深みが出るよ！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
「将来の夢」英作文の理想的な構成：
1. 夢の宣言：My dream is to become ...
2. したいこと・目標：I want to ...
3. きっかけ・動機：I became interested in ... when ...
4. 社会への貢献・まとめ：I also think that ...

模範解答の構文分析：
① "My dream is to become a doctor in the future."
   → My dream is to + 動詞原形（to 不定詞が補語）
   → in the future：将来（in が必要！）

② "I want to help people who are sick and make them feel better."
   → who are sick：病気の人々（関係代名詞 who）
   → make + 目的語 + 動詞原形：〜に…させる（使役動詞）
   → feel better：気分が良くなる（well の比較級 better）

③ "I became interested in medicine when my grandmother was ill"
   → become interested in：〜に興味を持つようになる
   → when 節でいつ・きっかけを説明

④ "being a doctor is a way to contribute to society"
   → a way to + 動詞原形：〜するための方法・手段
   → contribute to：〜に貢献する

他の夢の表現例：
・"My dream is to be a teacher / an engineer / a chef / a musician."
・"I hope to work abroad someday."
・"I would like to help develop new technology."

【類題パターン】
将来の夢・なりたい職業に関する英作文は定番中の定番。
5W1H（what, why, when, where, who, how）を意識して書くと豊かな内容になる。

これができたら英語の実力は本物！`,
    pitfall: '"in future"（英国英語）と "in the future"（米国英語）は意味が異なる。日本の入試では "in the future"（将来）を使うのが安全。',
    memoryTip: '夢を語る英作文の鉄板：My dream is to ＋動詞原形。"become" "be" "work as" "help" などの動詞と組み合わせて練習しよう！',
  },
  {
    id: 'koko_oyo_eigo_35',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '条件英作文：「外国から来た友人に日本の文化を1つ紹介しなさい。」\n\n条件：\n①具体的な文化を1つ選ぶこと\n②その文化が何かを説明すること\n③あなたがそれを好きな理由・外国人に勧める理由を書くこと\n④3文以上',
    answer: `I would like to introduce you to "Hanami," which is the Japanese tradition of viewing cherry blossoms. Every spring, people gather in parks with their family and friends to enjoy the beautiful pink flowers and have picnics together. I love Hanami because it is a time when everyone can relax and appreciate the beauty of nature, and I think you will enjoy the atmosphere too.`,
    hint: '紹介文の流れ：「何か」→「どんなものか・いつ行われるか」→「なぜ良いか・おすすめの理由」。関係代名詞 which を使うとスムーズに説明できる！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
文化紹介英作文のポイント：
・何か（名前）を最初に示す
・説明（定義・いつ・どこで・だれが）
・なぜ良いか・おすすめの理由

模範解答の構文分析：
① "I would like to introduce you to 'Hanami,' which is the Japanese tradition of viewing cherry blossoms."
   → I would like to introduce you to ～：あなたに〜を紹介したい
   → which is...：非制限用法の関係代名詞（直前の名詞を補足説明）
   → the tradition of + 動名詞：〜する伝統

② "people gather in parks with their family and friends to enjoy the beautiful pink flowers and have picnics together."
   → gather：集まる
   → to enjoy...：目的を表す to 不定詞
   → have picnics：ピクニックをする

③ "I love Hanami because it is a time when everyone can relax and appreciate the beauty of nature"
   → a time when：〜するときの時（関係副詞 when）
   → appreciate the beauty：美しさを味わう・鑑賞する

他に紹介できる日本文化：
・Matsuri（祭り）、Origami、Sushi、Onsen、Kabuki、Shodo（書道）
・"Shodo is the Japanese art of calligraphy, which uses a brush and ink to write beautiful characters."

【類題パターン】
外国人への日本文化紹介は近年の高校受験で非常に人気のあるテーマ。
祭り・食文化・伝統芸能・年中行事など幅広く英語で説明できるよう準備しよう。

これができたら英語の実力は本物！`,
    pitfall: '日本語の固有名詞（Hanami / Matsuri など）をそのまま使ってOK。ただし必ず英語で説明を加えること（外国人にわからない言葉だから）。',
    memoryTip: '"introduce A to B"（AにBを紹介する）と "introduce A to B" （AをBに紹介する）は語順に注意！"I introduce you to sushi" = あなたに寿司を紹介する。',
  },
  {
    id: 'koko_oyo_eigo_36',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語の意味になるように、[ ] 内の語句を並べ替えなさい。\n\n「彼女は彼が去るのを見た。」\n[ leave / him / saw / she ]',
    answer: 'She saw him leave.',
    hint: '知覚動詞（see / hear / feel など）の後は「目的語＋動詞の原形」！「〜が…するのを見た」は see + 人 + 動詞原形 の形。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
知覚動詞の構文：
知覚動詞（see, hear, watch, feel, notice など）+ 目的語 + 動詞の原形

She saw him leave.
→ saw（知覚動詞・過去形）+ him（目的語）+ leave（動詞の原形）
→「彼女は彼が去るのを見た」

重要なポイント：
・"to leave" ではなく "leave"（to なし！）
・leave = 去る・出発する

知覚動詞の3つのパターン：
① 動詞の原形：「〜が…する（完了した動作）」を見た
   例: I saw him cross the street.（彼が道を渡るのを見た）
② 現在分詞（〜ing）：「〜が…している（進行中の動作）」を見た
   例: I saw him crossing the street.（彼が道を渡っているのを見た）
③ 受動態：by ＋ 過去分詞（〜されるのを見た）
   例: He was seen to leave.（受動態では to が戻る！）

受動態にしたとき：
He was seen to leave by her.（to が必要になる）

【類題パターン】
知覚動詞の並べ替えは入試頻出。
"I heard someone sing." / "We felt the ground shake." なども練習しよう。

これができたら英語の実力は本物！`,
    pitfall: '知覚動詞のあとは to不定詞ではなく「原形不定詞」（to なし）！"She saw him to leave." は誤り。ただし受動態にすると to が戻る（He was seen to leave.）ことも覚えておこう。',
    memoryTip: '知覚動詞 ＋ 人 ＋ 動詞の原形 = 「〜が…するのを【感じた・見た・聞いた】」。see / hear / watch / feel / notice が代表選手！',
  },
  {
    id: 'koko_oyo_eigo_37',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語の意味になるように、[ ] 内の語句を並べ替えなさい。\n\n「音楽を聴きながら、彼は勉強した。」\n[ music / to / listening / he / studied / ]',
    answer: 'Listening to music, he studied.',
    hint: '「〜しながら」は分詞構文で表せる！主語と動詞を先に決めて、「〜しながら」の部分を分詞構文（動詞の -ing 形）で前に置く形を考えよう。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
分詞構文（付帯状況）：
「〜しながら」= 動詞の -ing 形 + , + 主節

Listening to music, he studied.
→ Listening to music：音楽を聴きながら（分詞構文）
→ he studied：彼は勉強した（主節）

分詞構文の作り方：
元の文：While he was listening to music, he studied.
① 接続詞（while）を取る
② 副詞節の主語（he）が主節の主語と同じなら省略する
③ 動詞を -ing 形にする
→ Listening to music, he studied.

分詞構文の主な意味：
① 時（〜するとき）：Walking home, I met him.
② 理由（〜なので）：Feeling tired, she went to bed.
③ 付帯状況（〜しながら）：Listening to music, he studied. ←今回
④ 条件（〜すれば）：Turning left, you will see the park.

"listen to" の注意点：
・listen to + 名詞：〜を聴く
・listen は自動詞なので to が必要（hear は他動詞なので to 不要）

【類題パターン】
"Seeing the dog, she ran away."（その犬を見て、彼女は逃げた）
"Having finished his homework, he watched TV."（宿題を終えてから、彼はテレビを見た）

これができたら英語の実力は本物！`,
    pitfall: '分詞構文は主節の主語と副詞節の主語が同じでないと使えない（独立分詞構文は別）。"Listening to music, the rain started." は誤り（雨が音楽を聴いていることになる！）。',
    memoryTip: '分詞構文 = 副詞節を「動詞の -ing 形」で短縮したもの。While/As/Because/When などの接続詞を省略して -ing 形にする！',
  },
  {
    id: 'koko_oyo_eigo_38',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語の意味になるように、[ ] 内の語句を並べ替えなさい。\n\n「私は昨日本を読んだ少女を知っている。」\n[ know / who / the girl / I / a book / read / yesterday ]',
    answer: 'I know the girl who read a book yesterday.',
    hint: '関係代名詞 who は「人」を説明するときに使う。「the girl」の後に who を置いて、その少女についての説明（read a book yesterday）を続ける！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
関係代名詞 who の構文：
先行詞（人）+ who + 動詞...

I know the girl who read a book yesterday.
→ I know the girl：私はその少女を知っている（主節）
→ who read a book yesterday：昨日本を読んだ（関係代名詞節）

文の作り方：
元の2文：
① I know the girl.（私はその少女を知っている）
② The girl read a book yesterday.（その少女は昨日本を読んだ）
→ ② の "The girl" を "who" に置き換えて ① の the girl の後に続ける
→ I know the girl [who read a book yesterday].

関係代名詞の選び方：
・先行詞が「人」→ who / that
・先行詞が「物・動物」→ which / that
・先行詞が「人・物」両方 → that（便利）

主格・目的格の違い：
① 主格（〜が）：The girl who read a book → who が read の主語
② 目的格（〜を）：The book that she read → that が read の目的語（省略可）
   例：The book (that) she read was interesting.

【類題パターン】
"The man who lives next door is a doctor."
"I have a friend who speaks three languages."
"She is the teacher who helped me the most."

これができたら英語の実力は本物！`,
    pitfall: '"which" は物・動物に使う。人に "which" を使うのは誤り（古い英語では使われたが現代では避ける）。試験では人には who / that を使おう。',
    memoryTip: '関係代名詞 who = 先行詞（人）についての追加情報を付け加える接着剤！"The girl WHO read a book" → who 以下がthe girlの説明。',
  },
  {
    id: 'koko_oyo_eigo_39',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語の意味になるように、[ ] 内の語句を並べ替えなさい。\n\n「彼がどこに住んでいるか知っていますか。」\n[ lives / do / where / you / know / he ]',
    answer: 'Do you know where he lives?',
    hint: '間接疑問文では、疑問詞の後が「主語＋動詞」の語順（疑問文の語順ではなく、普通の文の語順）になる。「where does he live?」ではなく「where he lives」！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
間接疑問文のルール：
「疑問詞 + 主語 + 動詞」（普通の文の語順）

Do you know where he lives?
→ Do you know ...?（〜を知っていますか？）が主節の疑問文
→ where he lives（彼がどこに住んでいるか）が間接疑問節

直接疑問文との比較：
× Do you know where does he live?（誤り：疑問文の語順のまま）
○ Do you know where he lives?（正しい：平叙文の語順）

直接疑問：Where does he live?（does を使い、語順が変わる）
間接疑問：I know where he lives.（does は消え、he lives の語順）

なぜ語順が変わる？
間接疑問の疑問詞節は「名詞節」として文中に埋め込まれる。
名詞節なので疑問文の語順（倒置）は必要ない。

他の間接疑問の例：
・I don't know what she is thinking.（彼女が何を考えているか知らない）
・Can you tell me when the train arrives?（電車がいつ到着するか教えてくれますか）
・I wonder why he was late.（なぜ彼が遅れたのか気になる）

【類題パターン】
間接疑問文は高校受験でほぼ必ず出題される。
do you know / can you tell me / I wonder / I'm not sure の後に間接疑問が続くパターンを練習しよう。

これができたら英語の実力は本物！`,
    pitfall: 'Do you know where does he live?（×）→ does は不要！三人称単数現在は lives になる（does は消えて動詞に -s がつく）。',
    memoryTip: '間接疑問文 = 疑問詞の後は「ふつうの文の語順（主語＋動詞）」！"where he lives"（○）"where does he live"（×）を意識してパターンを焼き付けよう！',
  },
  {
    id: 'koko_oyo_eigo_40',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の日本語の意味になるように、[ ] 内の語句を並べ替えなさい。\n\n「もし私がもっとお金を持っていれば、旅行できるのに。」\n[ travel / I / I / more / had / could / money / if ]',
    answer: 'If I had more money, I could travel.',
    hint: '仮定法過去の公式：「If + 主語 + 動詞の過去形, 主語 + could / would / might + 動詞の原形」。現実ではない「たら・れば」の話に使う！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
仮定法過去の基本形：
If + 主語 + 動詞の過去形, 主語 + would / could / might + 動詞の原形

If I had more money, I could travel.
→ If I had more money：もし私がもっとお金を持っていれば（仮定法：現実には持っていない）
→ I could travel：旅行できるのに（could = 能力・可能性の仮定法）

直説法との比較：
・直説法（事実）："I have enough money, so I can travel."（お金があるから旅行できる）
・仮定法（非現実）："If I had more money, I could travel."（お金がないので旅行できない→残念）

could の意味：
① can の過去形：〜できた（事実の過去）
② 仮定法：〜できるのに（非現実・現在の願望）

仮定法過去の他の例：
・"If I were you, I would study harder."（もし私があなたなら、もっと勉強するのに）
・"If it were sunny, we could play outside."（もし晴れていれば、外で遊べるのに）
・"If she had a car, she could drive to work."（もし車があれば、車で通勤できるのに）

仮定法過去完了（参考・発展）：
過去の事実に反する仮定：
"If I had studied harder, I could have passed the exam."
（もっと勉強していれば、試験に合格できたのに）

【類題パターン】
仮定法は高校受験から高校英語まで重要。
If I were ..., / If I could ..., / If I had ... などのパターンで多く練習しよう。

これができたら英語の実力は本物！`,
    pitfall: '"If I have more money" は直説法（条件節）で「もしお金があれば（ありうる話）」。仮定法の "If I had" は「（実際にはないが）もしあれば」という非現実の仮定。意味が違うので使い分けに注意！',
    memoryTip: '仮定法 = 「現実とは逆のif」！現在の事実とは逆→過去形を使う。「お金がない→had」「できない→could」がセット！',
  },
  {
    id: 'koko_oyo_eigo_41',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の空欄に make または do を適切な形で入れなさい。\n\n(1) I ( ) a mistake on the test.\n(2) She ( ) her homework every night.\n(3) He ( ) a speech at the ceremony.\n(4) We ( ) our best in the competition.\n(5) They ( ) a lot of noise last night.',
    answer: '(1) made (2) does (3) made (4) did (5) made',
    hint: 'make = 「作る・生み出す」というイメージ（結果が形に残るもの）。do = 「こなす・行う」というイメージ（義務・作業・活動）。どちらが合うか考えてみよう！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
make と do の使い分け：

【make = 作る・生み出す・引き起こす】
何か「新しいもの」「変化」「結果」を生み出すイメージ：
・make a mistake（間違いを犯す）
・make a speech（スピーチをする）
・make a noise（騒音を立てる）
・make a decision（決断する）
・make money（お金を稼ぐ）
・make friends（友達を作る）
・make a plan（計画を立てる）

【do = 行う・こなす・処理する】
すでにあるタスク・作業・義務を「こなす」イメージ：
・do homework（宿題をする）
・do one's best（ベストを尽くす）
・do the dishes（皿洗いをする）
・do exercise（運動をする）
・do a job（仕事をする）
・do research（研究をする）

(1) make a mistake：間違いを犯す（mistake は「引き起こされるもの」）
(2) does homework：宿題をする（homework は「こなす作業」）
(3) made a speech：スピーチをした（speech は「作り出すもの」）
(4) did our best：ベストを尽くした（best effort は「取り組む活動」）
(5) made noise：騒音を立てた（noise は「引き起こされるもの」）

【構文分析】
"make + 名詞" と "do + 名詞" はそれぞれ決まったコロケーション（語の組み合わせ）として暗記するのが効果的。

【類題パターン】
make/do の問題は英検・高校受験の語彙問題で定番。
セットでまとめて覚えよう。

これができたら英語の実力は本物！`,
    pitfall: '"do a mistake"（×）、"make homework"（×）は典型的な誤り！make と do は使えるコロケーションが決まっているので、個別に暗記することが大切。',
    memoryTip: 'make = 何か新しいものを「生み出す」（mistake, noise, friends, plan）。do = やるべき作業を「こなす」（homework, best, dishes, research）。',
  },
  {
    id: 'koko_oyo_eigo_42',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '動詞 "take" の多義性について、以下の各文の "take" の意味を日本語で答えなさい。\n\n(1) She took a photo of the mountain.\n(2) He takes a shower every morning.\n(3) I usually take the bus to school.\n(4) Please take care of yourself.\n(5) It takes about an hour to get there.',
    answer: '(1) 撮る (2) 浴びる・する (3) 乗る (4) 気をつける・世話をする (5) （時間が）かかる',
    hint: '"take" は英語の中で最も多義な動詞の一つ！それぞれの文の文脈から意味を考えよう。「（時間・費用が）かかる」「乗り物に乗る」など、日本語では全然違う意味になるよ。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
take の主な意味とコロケーション：

(1) take a photo / picture：写真を撮る
   → "take" = 「撮る」（日本語の「取る」と同じ発想）

(2) take a shower / bath：シャワーを浴びる / お風呂に入る
   → take a shower（毎回の行動）vs have a shower（英国でも使う）

(3) take a bus / train / taxi：バス・電車・タクシーに乗る
   → "ride a bus" も正しいが "take" の方が一般的

(4) take care of + 人・物：〜の世話をする・〜に気をつける
   → take care（気をつけてね）は別れ際の挨拶としても使う

(5) It takes + 時間 + to 不定詞：〜するのに（時間が）かかる
   → It takes about an hour to get there.（そこに着くのに1時間くらいかかる）
   → 非人称の it を主語に使う構文

take の他の重要な意味：
・take a break：休憩する
・take notes：ノートを取る
・take medicine：薬を飲む
・take an exam：試験を受ける
・take a look：見る（ちょっと見てみる）
・take turns：交代する
・take place：（行事が）行われる
・take off：（飛行機が）離陸する / 服を脱ぐ

【構文分析】
"It takes about an hour to get there."
→ It（形式主語）+ takes + 時間 + to + 動詞原形（真の主語）
→ to get there = そこに到着すること

【類題パターン】
take の用法は英語学習で必須。空所補充・文意に合う意味選択問題に頻出。

これができたら英語の実力は本物！`,
    pitfall: '"take a bus"（バスに乗る）と "take a bus" の take は「乗り物を利用する」の意味。"take a bath"（お風呂に入る）の take と同じ語だが意味は全然違う。コロケーションで覚えるのが鉄則！',
    memoryTip: 'take の核心は「手に取る・受け取る」！そこから「撮る（取る）」「乗る（乗り物を取る）」「かかる（時間を取る）」など意味が広がる。',
  },
  {
    id: 'koko_oyo_eigo_43',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の各文の（　）に say / tell / speak / talk のうち最も適切な語を入れなさい。（必要に応じて形を変えること）\n\n(1) She ( ) me that she was feeling sick.\n(2) He ( ) "Hello" to everyone he met.\n(3) Can you ( ) more slowly? I cannot follow you.\n(4) We ( ) about our future plans for hours.\n(5) Please ( ) the truth.',
    answer: '(1) told (2) said (3) speak (4) talked (5) tell',
    hint: 'tell = 伝える（目的語に「人」が必要）。say = 言う（言葉・内容を発する）。speak = 話す（能力・一方的に）。talk = 話し合う（双方向・会話）。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
say / tell / speak / talk の使い分け：

【say（言う）】
発言内容（言葉・セリフ）に焦点。人（目的語）は省略可。
・say + 言葉：He said "Hello."
・say that + 節：She said that she was tired.
・say to + 人 + 引用：He said to me, "I'm sorry."
× say me that...（×）→ tell me that...（○）

【tell（伝える）】
情報を人に「伝える」。必ず目的語に「人」が来る。
・tell + 人 + that節：She told me that she was sick.
・tell + 人 + to不定詞：He told me to be quiet.
・tell a story / the truth / a lie：話を語る / 真実を言う / 嘘をつく

【speak（話す）】
言語能力・公式な場での発話。双方向性は薄い。
・speak + 言語：She speaks English well.
・speak to / with + 人：Can I speak to Mr. Tanaka?（電話で）
・speak more slowly：もっとゆっくり話す

【talk（話し合う・おしゃべりする）】
双方向の会話・インフォーマルな会話。
・talk about + 話題：We talked about our plans.
・talk to / with + 人：She talked with her friend.
・talk on the phone：電話で話す

各問の解説：
(1) "told me that she was feeling sick" → tell + 人 + that節
(2) "said 'Hello' to everyone" → say + 言葉
(3) "speak more slowly" → speak = 話す能力・一方的発話
(4) "talked about our future plans" → talk about + 話題
(5) "tell the truth" → tell = 伝える（tell the truth は慣用句）

【類題パターン】
say / tell / speak / talk の使い分けは英検準2級～2級でも重要。
空所補充・語法問題で頻出。

これができたら英語の実力は本物！`,
    pitfall: '"say me"（×）と "tell me"（○）の違いは最重要。say の後に人を置くには "say to + 人" の形が必要。',
    memoryTip: 'tell = 「TELLフォン（電話）で人に伝える」イメージ → 必ず人（目的語）が必要！say = 「SAY（セリフ）を言う」イメージ → 言葉の内容にフォーカス！',
  },
  {
    id: 'koko_oyo_eigo_44',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の各文の（　）に look / see / watch のうち最も適切な語を入れなさい。（必要に応じて形を変えること）\n\n(1) ( ) at that beautiful sunset!\n(2) I ( ) a great movie last night.\n(3) I can ( ) the mountains from my window.\n(4) She ( ) the children playing in the park.\n(5) You ( ) tired today. Are you okay?',
    answer: '(1) Look (2) watched (3) see (4) watched (5) look',
    hint: 'look = 意図的に視線を向ける。see = 自然に目に入る・見える。watch = じっくり動きを追って見る。「見る」の3兄弟を区別しよう！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
look / see / watch の使い分け：

【look（見る）】
意図的に視線を向ける行為・努力。目的語なし（前置詞を伴う）。
・look at + 物：〜を見る（意識的に視線を向ける）
・look for：探す
・look up：（辞書で）調べる
・You look tired.：あなたは疲れているように見える（look + 形容詞 = 〜に見える）

【see（見える・見る）】
意識せずに自然に目に入る・見える状態。知覚・理解も含む。
・see a movie / film：映画を見る（映画は see）
・I can see the mountains.：山が見える（視覚的に入ってくる）
・I see.：なるほど（理解する）
・see a doctor：医者に診てもらう

【watch（見守る・観戦する）】
動きのあるものを注意深く見る・じっと追って見る。
・watch TV：テレビを見る
・watch a game / match：試合を観戦する
・watch the children：子どもたちを見守る
・watch one's step：足元に気をつける

各問の解説：
(1) Look at that beautiful sunset!：あの美しい夕焼けを見て！（視線を向けるよう命令）
(2) I watched a great movie last night.：映画を「じっくり見た」（watch も see も使えるが文脈で選択）
※ ただし "saw a movie" も正しい一般的な表現
(3) I can see the mountains from my window.：山が見える（自然に視界に入る）
(4) She watched the children playing.：子どもたちが遊ぶのを見守った（動きを追って観察）
(5) You look tired today.：今日疲れているように見える（look + 形容詞）

【類題パターン】
look / see / watch は英検でも入試でも定番の語法問題。
watch the news / see the doctor / look at me などのコロケーションで覚えよう。

これができたら英語の実力は本物！`,
    pitfall: '映画を「見る」は see a movie / watch a movie どちらも使えるが、テレビは "watch TV"（×see TV）、景色は "see the view"（×watch the view）という傾向がある。動きの有無・意図性で判断しよう。',
    memoryTip: 'look（努力して見る） → see（自然に見える） → watch（じっと追って見る）。「積極性の強さ」は look > watch > see のイメージ！',
  },
  {
    id: 'koko_oyo_eigo_45',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の各文の（　）に lend または borrow を適切な形で入れなさい。\n\n(1) Can you ( ) me your pen? I forgot mine.\n(2) I ( ) a book from the library yesterday.\n(3) She ( ) her umbrella to her friend.\n(4) May I ( ) your dictionary?\n(5) He ( ) money from his parents to buy a new bike.',
    answer: '(1) lend (2) borrowed (3) lent (4) borrow (5) borrowed',
    hint: 'lend = 貸す（自分が持っているものを相手に渡す方向）。borrow = 借りる（相手から自分に来る方向）。矢印の向きが逆なんだ！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
lend と borrow の違い：

【lend（貸す）】
自分 → 相手 の方向（自分のものを相手に渡す）
・lend + 人 + 物：Can you lend me your pen?（ペンを貸してくれますか）
・lend + 物 + to + 人：She lent her umbrella to her friend.
・過去形：lent（不規則変化：lend → lent → lent）

【borrow（借りる）】
相手 → 自分 の方向（相手のものを自分が受け取る）
・borrow + 物 + from + 人：I borrowed a book from the library.
・May I borrow your dictionary?（辞書を借りてもいいですか）
・過去形：borrowed（規則変化：borrow → borrowed）

日本人が混同しやすい理由：
日本語では「ペンを貸してもらえますか」も「ペンを借りてもいいですか」も
どちらも「貸し借り」の同じ状況を表すが、
英語では「動作の主体（自分か相手か）」によって lend / borrow を使い分ける。

各問の解説：
(1) Can you lend me your pen?：あなた→私（貸す方向）→ lend
(2) I borrowed a book from the library.：図書館から自分へ→ borrow
(3) She lent her umbrella to her friend.：彼女→友人（貸す方向）→ lend
(4) May I borrow your dictionary?：あなたから私へ（私が借りる）→ borrow
(5) He borrowed money from his parents.：両親から彼へ→ borrow

【類題パターン】
lend / borrow は英検3級・準2級で頻出。
rent（賃貸する）/ use（使う）との違いも覚えておこう。

これができたら英語の実力は本物！`,
    pitfall: '"Can you borrow me your pen?"（×）は典型的な誤り。borrow は「自分が借りる」ので主語は借りる側の人。「あなたのペンを貸してほしい」なら "Can you lend me your pen?"（○）。',
    memoryTip: 'lend = 「レンド（render）＝渡す」→ 貸す（自分から相手へ）。borrow = 「ボロー（hollow）＝空洞→空っぽの手を埋める」→ 借りる（相手から自分へ）。矢印の向きで覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_46',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '動詞 "run" にはさまざまな意味があります。次の各文の "run" の意味を日本語で答えなさい。\n\n(1) She runs five kilometers every morning.\n(2) He runs a small restaurant in the city.\n(3) This train runs between Tokyo and Osaka.\n(4) She is running for class president.\n(5) My nose is running because of my cold.\n(6) The movie runs for about two hours.',
    answer: '(1) 走る (2) 経営する・運営する (3) 運行する・走る (4) 立候補する (5) （鼻水が）出る・流れる (6) （上映・放送が）続く・上映時間が〜である',
    hint: '"run" の核心は「動く・流れる・続く」のイメージ！走ることから「経営（会社を動かす）」「立候補（選挙を走る）」「鼻水が流れる」など意味が広がる。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
run の多義性：

(1) run（走る）：最も基本的な意味
"She runs five kilometers every morning."（毎朝5km走る）

(2) run a business / company / restaurant（経営する・運営する）：
「会社・事業を動かす」→「経営する」
"He runs a small restaurant."（小さなレストランを経営している）

(3) run（列車・バスなどが運行する）：
乗り物が「走る」→「運行する」
"This train runs between Tokyo and Osaka."（この電車は東京と大阪の間を運行する）

(4) run for（〜に立候補する）：
選挙戦を「走る」→「立候補する」
"She is running for class president."（学級委員長に立候補している）
→ run for president / mayor / office なども使う

(5) My nose runs / is running（鼻水が出る）：
液体が「流れる」→「（鼻水が）出る」
"My nose is running."（鼻水が出ている）

(6) run for + 時間（上映・放映が〜続く）：
時間が「流れる・続く」→「上映時間が〜である」
"The movie runs for about two hours."（その映画は約2時間上映される）

その他の run の重要表現：
・run out of：〜を使い果たす
・run into：〜に偶然出会う / 〜に衝突する
・run over：（車が）〜をひく
・run away：逃げる
・in the long run：長い目で見れば

【類題パターン】
多義語の意味識別問題は高校受験の語彙問題で頻出。
get / take / run / break / keep などは特に多くの意味を持つ重要動詞。

これができたら英語の実力は本物！`,
    pitfall: '"run for" の意味は文脈次第。"run for the bus"（バスに乗るために走る）と "run for president"（大統領に立候補する）は全く異なる意味になる。',
    memoryTip: 'run の核心 = 「動く・流れる・続く」！走る→経営（動かす）→運行（動く）→立候補（選挙を走る）→鼻水（流れる）→上映（続く）。全部つながっている！',
  },
  {
    id: 'koko_oyo_eigo_47',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '動詞 "get" の意味について、次の各文の "get" の意味を日本語で答えなさい。\n\n(1) She got angry when she heard the news.\n(2) I got a letter from my friend in Australia.\n(3) We got to Tokyo at eight o\'clock.\n(4) Can you get me some water?\n(5) He got better after taking the medicine.\n(6) I don\'t get what you mean.',
    answer: '(1) 〜になる（状態変化） (2) 受け取る・もらう (3) 到着する・着く (4) 取ってくる・持ってくる (5) よくなる・回復する (6) 理解する・わかる',
    hint: '"get" は英語で最も多く使われる動詞の一つ！「（何かを）手に入れる」「（どこかに）たどり着く」「（ある状態に）なる」の3つが核心。難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
get の主な意味パターン：

【パターン1：get + 形容詞 = 〜になる（状態変化）】
"get angry / tired / sick / better / worse / dark / cold..."
→ become の口語的な表現として非常によく使われる
(1) "She got angry."（彼女は怒った）
(5) "He got better."（彼は良くなった）
→ get well（回復する）/ get sick（病気になる）も重要

【パターン2：get + 物 = 受け取る・手に入れる・もらう】
(2) "I got a letter from my friend."（友人から手紙をもらった）
→ get a present / a gift / a call / an email なども

【パターン3：get to + 場所 = 到着する】
(3) "We got to Tokyo."（東京に着いた）
→ arrive at/in の口語表現
→ "get home"（家に着く）は前置詞なし！

【パターン4：get + 人 + 物 = 〜に…を取ってくる・持ってくる】
(4) "Can you get me some water?"（水を取ってきてくれますか）
→ get + 間接目的語 + 直接目的語（第4文型）

【パターン5：get = 理解する】
(6) "I don't get what you mean."（あなたの言いたいことがわからない）
→ understand の口語表現
→ "I get it."（わかった！）は日常会話で超頻出

その他の重要な get 表現：
・get up：起きる
・get on / off：（乗り物に）乗る / 降りる
・get dressed：服を着る
・get married：結婚する
・get lost：道に迷う
・get together：集まる

【類題パターン】
get の意味識別は英検・入試で頻出。文脈から意味を推測する力を鍛えよう。

これができたら英語の実力は本物！`,
    pitfall: '"get to Tokyo"（到着する）の to は前置詞なので "get to home" とは言わない。"home" は副詞なので get home（前置詞なし）が正しい。',
    memoryTip: 'get の3大意味：①get + 形容詞 = なる ②get + 名詞 = 手に入れる ③get to + 場所 = 着く！これだけ覚えれば大抵の文は対応できる！',
  },
  {
    id: 'koko_oyo_eigo_48',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の（　）内から適切な形容詞を選んで、正しいコロケーション（語の組み合わせ）を完成させなさい。\n\n(1) ( heavy / strong / powerful ) rain\n(2) ( heavy / strong / powerful ) wind\n(3) ( heavy / strong / hard ) traffic\n(4) ( big / large / strong ) coffee\n(5) ( deep / strong / powerful ) sleep\n(6) ( big / large / great ) difference\n\n選択肢：heavy / strong / powerful / big / large / deep / great / hard',
    answer: '(1) heavy rain (2) strong wind (3) heavy traffic (4) strong coffee (5) deep sleep (6) big / great difference',
    hint: '英語のコロケーション（語の組み合わせ）は、論理的に考えるより「組み合わせとして覚える」のが大切。heavy rain（大雨）, strong wind（強風）は日本語の感覚と違うことがあるよ！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
形容詞のコロケーション（お決まりの組み合わせ）：

(1) heavy rain（大雨・激しい雨）
→ ✓ heavy rain / ✗ strong rain / ✗ powerful rain
→ heavy = 量が多い・重い（雨・交通量・荷物など「重さ・量」のイメージ）
→ 関連：heavy snow（大雪）/ heavy traffic（交通渋滞）

(2) strong wind（強風）
→ ✓ strong wind / ✗ heavy wind / ✗ powerful wind（powerfulは機械・人・論拠に使う）
→ strong = 力が強い（風・コーヒー・意見・感情など）

(3) heavy traffic（交通渋滞・交通量が多い）
→ ✓ heavy traffic / ✗ hard traffic
→ heavy = 「量が多い・度合いが強い」

(4) strong coffee（濃いコーヒー）
→ ✓ strong coffee / ✗ heavy coffee / ✗ powerful coffee
→ strong = 味・効き目が強い（strong tea / strong medicine）

(5) deep sleep（深い眠り）
→ ✓ deep sleep / ✗ strong sleep / ✗ heavy sleep
→ deep = 深い（sleep, thought, water, love, trouble）

(6) big / great difference（大きな違い）
→ ✓ big difference / ✓ great difference / ✗ large difference（large は数値的な大きさ）
→ "It makes a big/great difference."（大きな違いをもたらす）

よく使うコロケーション一覧：
・make a mistake（間違いを犯す）
・heavy drinker（大酒飲み）
・strong opinion（強い意見）
・deep breath（深呼吸）
・a close friend（親しい友人）

【類題パターン】
コロケーション問題は英検2級・準1級でも重要。
日本語に直訳して考えず、「英語のお決まり表現」として覚えるのがコツ。

これができたら英語の実力は本物！`,
    pitfall: '日本語では「強い雨」「強い交通量」と言いたくなるが、英語では heavy rain / heavy traffic が正しい。英語の形容詞のコロケーションは日本語の感覚と異なることが多い！',
    memoryTip: 'heavy = 量・重さ（heavy rain/snow/traffic）。strong = 力・濃さ（strong wind/coffee/feeling）。deep = 深さ（deep sleep/thought）。それぞれの「核心イメージ」で覚えよう！',
  },
  {
    id: 'koko_oyo_eigo_49',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の（　）に at / in / on のうち適切な前置詞を入れなさい。\n\n(1) The meeting starts ( ) 9 o\'clock.\n(2) I usually study ( ) the morning.\n(3) We have school ( ) Monday.\n(4) She was born ( ) 2008.\n(5) The party is ( ) Friday evening.\n(6) Let\'s meet ( ) noon.\n(7) He graduated ( ) spring.\n(8) What do you usually do ( ) the weekend?',
    answer: '(1) at (2) in (3) on (4) in (5) on (6) at (7) in (8) at / on',
    hint: '時間の前置詞：at（時刻・特定の瞬間）→ in（月・年・季節・朝昼夕）→ on（曜日・日付）。「狭い→広い」の順と覚えよう！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
時間を表す前置詞 at / in / on の使い方：

【at（特定の時刻・瞬間）】
「ピンポイントの時間」のイメージ
・at 9 o'clock（9時に）
・at noon（正午に）
・at midnight（真夜中に）
・at night（夜に）※例外：nightは「in the night」も使う
・at the moment（今この瞬間）
・at Christmas / at Easter（クリスマスに・イースターに）

【in（年・月・季節・時間帯）】
「広い時間の範囲」のイメージ
・in 2008（2008年に）
・in January（1月に）
・in spring / summer / fall / winter（春・夏・秋・冬に）
・in the morning / afternoon / evening（朝・午後・夕方に）
→ ただし "in the morning" に対して "at night"（not "in the night"）は例外

【on（曜日・特定の日付・特定の日の時間帯）】
「特定の一日・曜日」のイメージ
・on Monday（月曜日に）
・on March 15（3月15日に）
・on Friday evening（金曜日の夕方に）→ 曜日 + 時間帯は on
・on weekdays（平日に）

(8) at the weekend（英国英語）/ on the weekend（米国英語）どちらも可

「時間の前置詞」まとめ表：
| 前置詞 | 使う場面 | 例 |
|---|---|---|
| at | 時刻・特定の瞬間 | at 3 pm, at noon, at night |
| in | 年・月・季節・時間帯 | in 2025, in April, in the morning |
| on | 曜日・日付 | on Sunday, on July 4th |

【類題パターン】
at/in/on の使い分けは高校受験の文法問題で最も頻出の前置詞問題。
場所の at/in/on（次の問題）と合わせて完璧に覚えよう。

これができたら英語の実力は本物！`,
    pitfall: '"on Friday evening" のように「曜日 + 時間帯」が合わさると on を使う（"in the evening" が "on Friday evening" に変わる）。特殊なルールなので注意！',
    memoryTip: '時間の前置詞は「ダチョウ（at・in・on）」の順で大きくなる：at（時計の針一点）→ in（カレンダーの月・年）→ on（カレンダーの曜日・日）！',
  },
  {
    id: 'koko_oyo_eigo_50',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: '次の（　）に at / in / on のうち適切な前置詞を入れなさい。\n\n(1) I will meet you ( ) the station.\n(2) She is studying ( ) her room.\n(3) The book is ( ) the desk.\n(4) He works ( ) a large company.\n(5) There is a fly ( ) the ceiling.\n(6) We arrived ( ) the airport.\n(7) The picture is ( ) the wall.\n(8) They live ( ) Tokyo.',
    answer: '(1) at (2) in (3) on (4) at (5) on (6) at (7) on (8) in',
    hint: '場所の前置詞：at（地点・場所に「いる」）→ in（空間の中・囲まれた場所）→ on（表面に接触している）。「地点・中・上」のイメージで区別しよう！難しく感じるかもしれないけど、コツさえつかめばできる！',
    explanation: `【解説】
場所を表す前置詞 at / in / on の使い方：

【at（地点・特定の場所に位置する）】
「ピンポイントの場所」「活動の場」のイメージ
・at the station（駅に・駅で）
・at the airport（空港に）
・at school / at home / at work（学校で / 家に / 職場で）
・at the corner（角に）
・at a large company（大企業に）← 働く場所・所属先
→ 場所を「点」として捉えるとき

【in（空間の内部・範囲の中）】
「囲まれた空間の中」のイメージ
・in her room（部屋の中に）
・in Tokyo / in Japan（東京に / 日本に）← 広い地域・国・都市
・in a box（箱の中に）
・in the water（水の中に）
→ 「中に入っている」「囲まれている」とき

【on（表面に接触している）】
「面に触れている・のっている」のイメージ
・on the desk（机の上に）← 表面に接触
・on the ceiling（天井に）← 天井の面に接触（"above the ceiling" ではなく on）
・on the wall（壁に）← 壁の面に接触
・on the floor（床に）← 床の表面に
→ 「面にくっついている・のっている」とき

各問の解説：
(1) at the station：駅という「地点」に
(2) in her room：部屋という「空間の中」に
(3) on the desk：机という「表面の上」に
(4) at a large company：大企業という「場所・所属先」に
(5) on the ceiling：天井という「面」に（上下ではなく面の問題）
(6) at the airport：空港という「地点」に
(7) on the wall：壁という「面」に
(8) in Tokyo：東京という「広い地域・空間」に

【類題パターン】
場所の at/in/on は時間の at/in/on と並んで英語の最重要前置詞。
"at the bus stop"（バス停に）/ "in the car"（車の中に）/ "on the bus"（バスに乗って）などの乗り物・交通手段との使い分けも入試頻出。

これができたら英語の実力は本物！`,
    pitfall: '"on the ceiling"（天井に）は「天井の面に貼り付いている」イメージで on。"above the ceiling" は「天井の上方（外側）に」という意味になり違う。「表面に接触している」かどうかが on の判断基準！',
    memoryTip: 'at（●点）/ in（□中）/ on（━面）を図で覚えよう！駅・空港・学校は「点（at）」。部屋・都市・国は「中（in）」。机・壁・床・天井は「面（on）」。',
  },
];
