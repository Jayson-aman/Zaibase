import type { Question } from './questions';

export const kokoNyushiEigo3: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo3_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語句を選べ。\n\nOur badminton club ( ) practicing for the tournament since April.\n① is  ② was  ③ has been  ④ will be',
    answer: '③ has been',
    hint: '「4月からずっと」という継続を表す現在完了進行形を作る助動詞を選ぶ。',
    explanation: `【出題意図】
現在完了進行形（have/has been + Ving）の助動詞部分を問う問題。継続を示す since との組み合わせを見抜けるかが目標。

【解説】
「since April（4月から）」は継続の起点を示す表現。文末の practicing（Ving）と組み合わせて「ずっと練習し続けている」という継続を表すには、has been + Ving（現在完了進行形）が必要。
・① is → is practicing なら現在進行形だが、since と結びつかない
・② was → 過去進行形。過去の一時点の動作を表すのみ
・③ has been → has been practicing（✓）現在完了進行形
・④ will be → will be practicing なら未来進行形。since と合わない

日本語訳：「私たちのバドミントン部は4月から大会に向けて練習し続けている。」

【文法ポイント】
現在完了進行形 = have/has been + 動詞-ing
→ 過去に始まり現在も続いている動作を強調する。
sinceは「起点」、forは「期間」を表し、どちらも現在完了（進行）形の目印になる。

【入試頻出】
・The tennis team has been training hard since last month.
・She has been practicing the violin for two hours.
・They have been waiting for the bus since noon.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nYou ( ) bring your recorder to music class tomorrow; the teacher told us this morning.\n① must  ② should  ③ may  ④ can',
    answer: '① must',
    hint: '「先生に言われた」という強い義務・指示のニュアンスに合う助動詞を選ぶ。',
    explanation: `【出題意図】
助動詞（must / should / may / can）の意味の違いを、文脈（先生からの明確な指示）から判断させる問題。

【解説】
「the teacher told us this morning（今朝先生に言われた）」という根拠があるため、単なる推奨ではなく「必ず〜しなければならない」という強い義務を表す must が適切。
・① must → 話者の強い義務・確信「必ず〜しなければならない」（✓）
・② should → 「〜した方がよい」（アドバイス。義務ほど強くない）
・③ may → 「〜してもよい」（許可）
・④ can → 「〜できる」（能力・可能性）

日本語訳：「明日の音楽の授業にはリコーダーを持って来なければならない。先生が今朝そう言っていた。」

【文法ポイント】
must：話者・状況からの強い義務（「絶対に〜しなければ」）
should：推奨・アドバイス（「〜した方がいい」）
過去の指示や規則を根拠に「必ず〜」と述べるときは must がよく使われる。

【入試頻出】
・We must wear our uniforms at school.
・You should practice more before the contest.
・Students must hand in their homework by Friday.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語形を選べ。\n\nThe school festival ( ) by the student council every October.\n① holds  ② is held  ③ was held  ④ has held',
    answer: '② is held',
    hint: '文化祭は「開催する」側ではなく「開催される」側。習慣的な事実を表す時制を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形と能動態の混同を防ぐ問題。習慣を表す every を伴う文での時制選択も確認する。

【解説】
主語 The school festival（文化祭）は「開催する」のではなく「開催される」側なので受動態が必要。「every October（毎年10月に）」は習慣を示すので現在形にする。
・① holds → 能動態3単現（主語が「開催する」側になり不自然）
・② is held → 受動態・現在形（✓）is + held（hold の過去分詞）
・③ was held → 受動態・過去形（毎年の習慣と合わない）
・④ has held → 現在完了・能動態（意味が通らない）

日本語訳：「学校祭は毎年10月に生徒会によって開催される。」

【文法ポイント】
受動態の基本形：be動詞 + 過去分詞（+ by〜）
hold の活用：hold → held → held
習慣的な事実は現在形（受動態でも同様）で表す。

【入試頻出】
・The sports day is held every June.
・This event is organized by the volunteer club.
・The chorus contest is held in the gym every winter.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nOf all the members in the brass band, Aya practices ( ).\n① hard  ② harder  ③ the hardest  ④ more hard',
    answer: '③ the hardest',
    hint: '「全員の中で」という範囲を示す表現があるときは最上級を使う。',
    explanation: `【出題意図】
副詞の最上級の形と、範囲を示す「of all〜」との組み合わせを問う問題。

【解説】
「Of all the members（全部員の中で）」という範囲を示す語句があるので最上級を使う。hard は1音節の副詞なので -est 型で最上級を作る。
・① hard → 原級（比較なし）
・② harder → 比較級（2者の比較に使う。3人以上の中で「一番」には使わない）
・③ the hardest → 副詞の最上級（✓）
・④ more hard → 誤り。1音節の語には more をつけない

日本語訳：「吹奏楽部の全部員の中で、彩が一番熱心に練習している。」

【文法ポイント】
副詞の最上級にも the をつけるのが一般的（省略されることもあるが入試では the を選ばせる問題が多い）。
「of all〜」「in the class」「among〜」などは最上級のサイン。

【入試頻出】
・She sings the best in our choir.
・Of all the runners, he ran the fastest.
・Ken studies the hardest among the students.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nShe was too shy ( ) to the new students in her class.\n① talking  ② talked  ③ to talk  ④ talk',
    answer: '③ to talk',
    hint: '「too + 形容詞 + to + 動詞」で「〜すぎて…できない」という意味になる。',
    explanation: `【出題意図】
「too + 形容詞 + to + 動詞原形」構文（不定詞の副詞的用法）を問う問題。

【解説】
「too shy to talk」で「恥ずかしがりすぎて話せない」という意味になる。この構文は too の後ろに形容詞、その後に to + 動詞原形を置く。
・① talking → 動名詞（この構文では使えない）
・② talked → 過去形（動詞原形が必要な位置）
・③ to talk → 不定詞（✓）too〜to構文
・④ talk → 原形のみ（to が抜けている）

日本語訳：「彼女は恥ずかしがりすぎて、クラスの新しい生徒たちに話しかけられなかった。」

【文法ポイント】
too + 形容詞/副詞 + to + 動詞原形：〜すぎて…できない
= so + 形容詞/副詞 + that + 主語 + can't〜 に書き換え可能
例：She was so shy that she couldn't talk to the new students.

【入試頻出】
・He was too tired to join the practice.
・The bag is too heavy to carry.
・She was too nervous to speak in front of everyone.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nOur teacher suggested ( ) a farewell party for the graduating seniors.\n① have  ② to have  ③ having  ④ had',
    answer: '③ having',
    hint: 'suggest の後ろには動名詞が来る（不定詞は不可）。',
    explanation: `【出題意図】
動名詞のみを目的語にとる動詞 suggest の用法を問う問題。不定詞との混同を防ぐ。

【解説】
suggest（提案する）は目的語に動名詞（〜ing）のみをとり、不定詞（to + 動詞）は取らない。
・① have → 原形（suggestの後ろに直接は来ない）
・② to have → 不定詞（suggestの後ろには使えない）
・③ having → 動名詞（✓）suggest + 動名詞
・④ had → 過去形（目的語にはなれない）

日本語訳：「私たちの先生は、卒業する3年生のためにお別れ会を開くことを提案した。」

【文法ポイント】
動名詞のみを目的語にとる動詞（入試頻出）：
enjoy, finish, stop, mind, give up, practice, suggest, avoid
suggest は「suggest that + 主語 + (should) + 動詞原形」の形でも表せる。

【入試頻出】
・He suggested going to the library together.
・She avoided talking about the test result.
・The captain suggested practicing every morning.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nBy the time the new term starts, we ( ) our new classroom.\n① will clean  ② have cleaned  ③ will have cleaned  ④ cleaned',
    answer: '③ will have cleaned',
    hint: '「新学期が始まるまでには」という未来のある時点での完了を表す時制を選ぶ。',
    explanation: `【出題意図】
未来完了形（will have + 過去分詞）の用法を問う問題。「by the time〜」という未来の基準点を読み取れるかが鍵。

【解説】
「By the time the new term starts（新学期が始まるまでには）」は未来のある時点を示す表現。その時点までに「掃除を終えていることになる」という完了を表すには未来完了形を使う。
・① will clean → 単純未来（完了のニュアンスがない）
・② have cleaned → 現在完了（未来の基準点には使えない）
・③ will have cleaned → 未来完了（✓）
・④ cleaned → 過去形（文脈に合わない）

日本語訳：「新学期が始まるまでには、私たちは新しい教室の掃除を終えているだろう。」

【文法ポイント】
未来完了形 = will have + 過去分詞
目印：by the time〜, by then, by next〜, when〜（未来の基準点を示す語句）
「by the time + 主語 + 動詞（現在形）」の副詞節内は現在形を使うことにも注意。

【入試頻出】
・By the time you get home, I will have finished cooking.
・She will have lived here for ten years by next spring.
・By next week, we will have practiced the song many times.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nIf it ( ) rainy on sports day, we will hold the events in the gym.\n① is  ② will be  ③ was  ④ has been',
    answer: '① is',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation: `【出題意図】
条件節（if 節）での時制のルール「未来のことでも現在形を使う」を、学校行事の場面で問う問題。

【解説】
「if 節、we will hold〜」という条件文の構造。時・条件を表す副詞節（if節）の中では、未来のことでも will を使わず現在形を使う。
・① is → 現在形（✓）if 節内では現在形で未来を表す
・② will be → if 節内でwillは使えない（×）
・③ was → 過去形（仮定法や過去の話になってしまう）
・④ has been → 現在完了（文脈に合わない）

日本語訳：「もし運動会の日に雨が降れば、私たちは体育館で種目を行います。」

【文法ポイント】
時・条件を表す副詞節の中では未来のことでも現在形：
if（もし〜なら）/ when（〜するとき）/ before（〜する前に）/ as soon as（〜したらすぐ）

【入試頻出】
・If it rains tomorrow, the game will be canceled.
・When the bell rings, please come back to the classroom.
・As soon as club activities end, I will go home.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThese uniforms ( ) by the soccer team for the next championship.\n① wear  ② are worn  ③ were wearing  ④ have worn',
    answer: '② are worn',
    hint: 'ユニフォームは「着る」側ではなく「着られる」側。受動態の現在形を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の識別。能動態との混同を防ぐ問題。

【解説】
主語 These uniforms（このユニフォーム）は着る側ではなく「着られる」側なので受動態が必要。次の選手権で「着用される（予定・習慣）」という意味なので現在形の受動態を使う。
・① wear → 能動態（主語が物になっており不自然）
・② are worn → 受動態・現在形（✓）
・③ were wearing → 過去進行形・能動態（意味が通らない）
・④ have worn → 現在完了・能動態（意味が通らない）

日本語訳：「このユニフォームは次の選手権でサッカー部によって着用される。」

【文法ポイント】
wear の活用：wear → wore → worn（過去分詞）
受動態：is/am/are + 過去分詞
複数主語には are を使う。

【入試頻出】
・New jerseys are worn by the basketball team this year.
・This song is sung by the chorus club every year.
・These trophies are displayed in the school entrance.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThis year\'s cultural festival was ( ) than last year\'s.\n① exciting  ② excite  ③ more exciting  ④ most exciting',
    answer: '③ more exciting',
    hint: '2つの文化祭を比べているので、than とセットで使う比較級を選ぶ。exciting は2音節以上の語。',
    explanation: `【出題意図】
2音節以上の形容詞（exciting）の比較級の作り方（more + 形容詞）を問う問題。

【解説】
than があるので比較級が必要。exciting は3音節の形容詞なので -er ではなく more をつけて比較級を作る。
・① exciting → 原級（than とは結びつかない）
・② excite → 動詞の原形（形容詞ではない）
・③ more exciting → 正しい比較級（✓）
・④ most exciting → 最上級（than とセットでは使わない）

日本語訳：「今年の文化祭は去年の文化祭よりも盛り上がった。」

【文法ポイント】
比較級の形：
・1音節・一部2音節：-er（tall→taller）
・3音節以上・-ing/-ful等で終わる2音節：more + 形容詞（exciting→more exciting, careful→more careful）

【入試頻出】
・This year's chorus contest was more impressive than last year's.
・The new gym is more comfortable than the old one.
・Her speech was more interesting than his.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nOur homeroom teacher always encourages us ( ) new things.\n① try  ② trying  ③ to try  ④ tried',
    answer: '③ to try',
    hint: 'encourage + 人 + to do（人に〜するよう励ます）という構文。',
    explanation: `【出題意図】
「encourage + 人 + to + 動詞」という第5文型（SVOC）の用法を問う問題。

【解説】
encourage + 人 + to do = 「人に〜するよう励ます・勧める」という重要構文。
・① try → 原形のみ（encourageの第5文型ではtoが必要）
・② trying → 動名詞（encourage + 人 + doingという形は存在しない）
・③ to try → encourage + 人 + to do（✓）
・④ tried → 過去形（文法的に合わない）

日本語訳：「私たちの担任の先生はいつも私たちに新しいことに挑戦するよう励ましてくれる。」

【文法ポイント】
「動詞 + 人 + to do」の構文：
・encourage + 人 + to do：人に〜するよう励ます
・ask + 人 + to do：人に〜するよう頼む
・tell + 人 + to do：人に〜するよう言う
・want + 人 + to do：人に〜してほしい

【入試頻出】
・She encouraged her teammates to keep practicing.
・The coach told the players to run faster.
・My friend encouraged me to join the drama club.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\n( ) the classroom every day makes us feel proud of our school.\n① Clean  ② Cleans  ③ Cleaning  ④ Cleaned',
    answer: '③ Cleaning',
    hint: '文の主語になる形。動詞のままでは主語になれない。',
    explanation: `【出題意図】
動名詞が文の主語になれることを問う問題。動詞の原形との混同を防ぐ。

【解説】
文の主語がないため、動詞をそのまま置くことはできない。「毎日教室を掃除すること」という行為全体を主語にするには動名詞（〜ing）を使う。
・① Clean → 動詞の原形（主語になれない）
・② Cleans → 3単現の形（主語になれない）
・③ Cleaning → 動名詞（✓）主語として使える
・④ Cleaned → 過去形／過去分詞（主語になれない）

日本語訳：「毎日教室を掃除することは、私たちに学校を誇りに思わせてくれる。」

【文法ポイント】
動名詞は文の主語・目的語・補語になれる：
・主語：Reading books is fun.
・目的語：I enjoy reading books.
・補語：My hobby is reading books.
主語になった動名詞は単数扱いなので、動詞は3単現の形（makes）になる点にも注意。

【入試頻出】
・Playing sports every day is good for our health.
・Helping each other is important in club activities.
・Speaking in front of many people is difficult for her.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo3_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nOur class is going to take ( ) in the chorus contest next month.\n① place  ② part  ③ care  ④ turns',
    answer: '② part',
    hint: 'take part in〜 で「〜に参加する」という熟語になる。',
    explanation: `【出題意図】
take を含む重要熟語 take part in〜（〜に参加する）を正確に知っているかを問う問題。

【解説】
take part in〜 は「〜に参加する」という意味の頻出イディオム。
・① place → take place（行われる・起こる）は主語が「行事」のときに使う表現
・② part → take part in〜（✓）
・③ care → take care of〜（〜の世話をする）
・④ turns → take turns（交代でする）

日本語訳：「私たちのクラスは来月の合唱コンクールに参加する予定だ。」

【文法ポイント】
take を含む頻出熟語：
・take part in〜：〜に参加する
・take place：行われる、起こる
・take care of〜：〜の世話をする
・take turns：交代でやる

【入試頻出】
・Many students take part in the marathon event.
・The school festival takes place every autumn.
・We took turns cleaning the classroom.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI\'m really looking forward ( ) the school trip to Kyoto next week.\n① for  ② at  ③ to  ④ on',
    answer: '③ to',
    hint: 'look forward to〜ing は「〜するのを楽しみにする」という熟語。',
    explanation: `【出題意図】
熟語 look forward to〜（〜を楽しみにする）の前置詞 to を問う問題。to の後ろに動詞が続く場合は動名詞になる点も確認する。

【解説】
look forward to〜 は「〜を楽しみにする」という意味の重要イディオム。ここでの to は不定詞の to ではなく前置詞なので、後ろに動詞が来る場合は動名詞（〜ing）になる。
・① for → look for〜（探す）に使う
・② at → look at〜（見る）に使う
・③ to → look forward to〜（✓）
・④ on → look on〜（見物する、頼る）などに使う

日本語訳：「私は来週の京都への修学旅行を本当に楽しみにしている。」

【文法ポイント】
look forward to + 名詞／動名詞：〜を楽しみにする
× look forward to visit（原形は不可）
○ look forward to visiting（動名詞）

【入試頻出】
・I am looking forward to seeing you again.
・She is looking forward to the club's summer camp.
・We look forward to hearing from you soon.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nMy best friend always ( ) me up when I feel sad about club matches.\n① makes  ② cheers  ③ takes  ④ gives',
    answer: '② cheers',
    hint: 'cheer up〜（〜を励ます）という句動詞を選ぶ。',
    explanation: `【出題意図】
句動詞 cheer up〜（〜を元気づける）の用法を問う問題。似た形の動詞との区別が目標。

【解説】
「気持ちが落ち込んでいるときに元気づける」という意味を表すのは cheer up〜。
・① makes → make up〜は「〜を作り上げる、埋め合わせる」などの意味で文脈に合わない
・② cheers → cheer up〜（✓）「〜を元気づける」
・③ takes → 該当する熟語なし
・④ gives → 該当する熟語なし

日本語訳：「私の親友は、私が部活の試合のことで悲しい気持ちになっているといつも励ましてくれる。」

【文法ポイント】
cheer up〜：〜を元気づける、励ます
Cheer up!：（単独で）元気出して！
似た表現：encourage（励ます）、comfort（慰める）

【入試頻出】
・Her kind words cheered me up.
・Cheer up! You did your best.
・The team members cheered up their captain after the loss.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nOur volleyball team is famous ( ) its teamwork.\n① with  ② for  ③ of  ④ about',
    answer: '② for',
    hint: 'be famous for〜 で「〜で有名だ」という意味になる。',
    explanation: `【出題意図】
熟語 be famous for〜（〜で有名だ）の前置詞を問う問題。

【解説】
be famous for〜 は「〜（理由・特徴）で有名だ」という意味の重要イディオム。前置詞 for が固定。
・① with → be popular with〜（〜に人気がある）に使う
・② for → be famous for〜（✓）
・③ of → be proud of〜（〜を誇りに思う）などに使う
・④ about → be worried about〜（〜を心配する）などに使う

日本語訳：「私たちのバレーボール部はチームワークで有名だ。」

【文法ポイント】
be famous for〜：〜で有名だ（理由）
be famous as〜：〜として有名だ（立場・役割）
例：He is famous as a coach.（コーチとして有名）

【入試頻出】
・This town is famous for its cherry blossoms.
・Our brass band is famous for winning the national contest.
・She is famous as a talented pianist.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_17',
    subject: 'eigo',
    question: '次の文と意味が最も近いものを選べ。\n\nOur teacher told us to keep working hard until the end of the tournament.\n① Our teacher wanted us to keep working hard until the end of the tournament.\n② Our teacher forgot to keep working hard until the end of the tournament.\n③ Our teacher was able to keep working hard until the end of the tournament.\n④ Our teacher decided to keep working hard until the end of the tournament.',
    answer: '① Our teacher wanted us to keep working hard until the end of the tournament.',
    hint: 'tell + 人 + to do は「人に〜するように言う」＝人にそうしてほしいという意味に近い。',
    explanation: `【出題意図】
「tell + 人 + to do」と「want + 人 + to do」の意味的な近さを問う言い換え問題。

【解説】
「told us to keep working hard」= 「私たちに努力し続けるように言った」。これは「私たちにそうしてほしかった」という意味に近い。
・① wanted us to〜 → 「私たちに〜してほしかった」（✓ 意味が近い）
・② forgot to〜 → 「〜するのを忘れた」（主語自身の行動。意味が異なる）
・③ was able to〜 → 「〜することができた」（主語自身の能力。意味が異なる）
・④ decided to〜 → 「〜することに決めた」（主語自身の決定。意味が異なる）

日本語訳：「先生は私たちに大会が終わるまで頑張り続けるように言った。」

【文法ポイント】
tell + 人 + to do：人に〜するように言う（指示・命令）
want + 人 + to do：人に〜してほしい（願望）
どちらも「人に何かをさせたい」というニュアンスを共有するため言い換えに使われやすい。

【入試頻出】
・She told him to practice every day.（= She wanted him to practice every day.）
・The coach told us to run five laps.
・My parents want me to join a sports club.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe new student is still not used ( ) the rules of our tennis club.\n① to  ② with  ③ for  ④ at',
    answer: '① to',
    hint: 'be used to〜 で「〜に慣れている」という意味になる前置詞。',
    explanation: `【出題意図】
熟語 be used to〜（〜に慣れている）の前置詞 to を問う問題。助動詞 used to（かつて〜した）との区別も含む。

【解説】
be used to〜 は「〜に慣れている」という意味で、to の後ろには名詞または動名詞が来る（動詞原形は来ない）。
・① to → be used to〜（✓）
・② with → 該当なし
・③ for → 該当なし
・④ at → 該当なし

日本語訳：「その新入部員はまだ私たちのテニス部のルールに慣れていない。」

【文法ポイント】
be used to + 名詞／動名詞：〜に慣れている
used to + 動詞原形：かつて〜した（過去の習慣・状態、現在との対比）
この2つの used to は形が似ているが意味が全く異なるので要注意。

【入試頻出】
・I am used to getting up early for morning practice.
・She used to play tennis when she was young.（かつて〜した）
・He is not used to speaking in front of many people.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nWe need to ( ) up with a good plan for the school festival.\n① come  ② go  ③ get  ④ put',
    answer: '① come',
    hint: 'come up with〜 で「〜を思いつく」という意味の熟語。',
    explanation: `【出題意図】
句動詞 come up with〜（〜を思いつく）の用法を問う問題。

【解説】
come up with〜 は「（アイデアや計画を）思いつく」という意味の重要イディオム。
・① come → come up with〜（✓）
・② go → 該当する熟語なし
・③ get → get up（起きる）は別の意味の熟語
・④ put → put on（着る）などは別の意味

日本語訳：「私たちは学校祭のためによい計画を思いつく必要がある。」

【文法ポイント】
come up with〜：（考え・計画・解決策を）思いつく
似た表現：think of〜（〜を思いつく）
例：Can you think of a better idea?

【入試頻出】
・She came up with a great idea for the class project.
・The committee came up with a new rule for the sports day.
・We need to come up with a solution to this problem.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe brass band practices ( ) 4 p.m. to 6 p.m. every weekday.\n① since  ② from  ③ at  ④ during',
    answer: '② from',
    hint: '「〜から…まで」という期間を示す表現 from A to B を選ぶ。',
    explanation: `【出題意図】
期間を表す前置詞 from A to B の用法を問う問題。似た意味を持つ since / during との区別が目標。

【解説】
「4時から6時まで」という開始から終了までの期間を表すには from A to B を使う。
・① since → 「〜以来」（現在完了と共に使う起点。to とセットでは使わない）
・② from → from A to B（✓）「AからBまで」
・③ at → 特定の時刻を表す（範囲は表せない）
・④ during → during + 名詞（期間全体を通して。from〜to〜のペアとしては使わない）

日本語訳：「吹奏楽部は平日毎日午後4時から6時まで練習する。」

【文法ポイント】
from A to B：AからBまで（時間・場所どちらにも使う）
during + 名詞：〜の間ずっと（例：during the summer vacation）
since + 起点：〜以来（現在完了形と共に使う）

【入試頻出】
・The library is open from 9 a.m. to 5 p.m.
・We practiced soccer during the summer vacation.
・She has lived in this town since 2015.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo3_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe boy ( ) is running the fastest on the track team is my classmate.\n① who  ② which  ③ whom  ④ whose',
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation: `【出題意図】
関係代名詞の選択（who / which / whom / whose）を問う問題。先行詞が人であることと節内での主格の役割の識別が目標。

【解説】
先行詞は「The boy（少年）」= 人。関係代名詞節内で「is running（走っている）」の主語の役割を果たしている。
・① who → 先行詞が人・主格（✓）
・② which → 先行詞が物や動物
・③ whom → 先行詞が人・目的格
・④ whose → 先行詞が人または物・所有格

日本語訳：「陸上部で一番速く走っている少年は私のクラスメートです。」

【文法ポイント】
関係代名詞まとめ：
　　　　主格　　目的格　　所有格
人：　　who　　whom　　whose
物：　　which　which　　whose
that は who / which の代わりに使えるが所有格・前置詞の後ろでは使えない。

【入試頻出】
・The girl who plays the piano well is in the music club.
・The student who won first prize was very happy.
・I have a friend who is good at basketball.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nThe song ( ) our chorus club sang at the contest was written by a famous composer.\n① who  ② which  ③ whom  ④ where',
    answer: '② which',
    hint: '先行詞は「物（歌）」。関係代名詞節内で sang の目的語になっている。',
    explanation: `【出題意図】
関係代名詞 which（先行詞が物・目的格）の用法を問う問題。that との言い換えも理解する。

【解説】
先行詞は「The song（歌）」= 物。関係代名詞節内で our chorus club sang ( )（合唱部が歌った）の目的語になっている。
・① who → 先行詞が人のとき
・② which → 先行詞が物・目的格（✓）
・③ whom → 先行詞が人・目的格
・④ where → 関係副詞（場所を表す先行詞に使う）

which は省略可能（that に置き換え可）：The song (that) our chorus club sang〜

日本語訳：「私たちの合唱部がコンクールで歌った歌は有名な作曲家によって書かれたものだ。」

【文法ポイント】
目的格の関係代名詞は省略可能：
・The song (which/that) we sang was beautiful.
先行詞 + 関係代名詞（目的格）+ 主語 + 動詞〜という語順になる。

【入試頻出】
・The picture (which) our art club painted won an award.
・The story (that) she wrote impressed everyone.
・This is the ball (which) our baseball team used last year.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nI still remember the day ( ) our team won the championship for the first time.\n① which  ② who  ③ where  ④ when',
    answer: '④ when',
    hint: '先行詞は「時（day）」で、時を表す関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 when（先行詞が時）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「the day（日）」= 時を表す語。節内では「our team won the championship on that day」の前置詞 on の部分が関係副詞 when に変わった構造。
・① which → 物に使う関係代名詞
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞
・④ when → 時を先行詞にとる関係副詞（✓）

日本語訳：「私は今でも私たちのチームが初めて優勝した日のことを覚えている。」

【文法ポイント】
関係副詞まとめ：
・when：時を表す先行詞（day / time / year / moment）
・where：場所を表す先行詞（city / place / room）
・why：理由を表す先行詞（reason）

【入試頻出】
・I'll never forget the moment when we scored the winning goal.
・This is the year when our club was founded.
・Do you remember the day when we first met?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI have a classmate.\nHer sister is the captain of the swimming team.',
    answer: 'I have a classmate whose sister is the captain of the swimming team.',
    hint: '2つの文をつなぐとき、Her（彼女の）を所有格の関係代名詞 whose に変える。',
    explanation: `【出題意図】
所有格の関係代名詞 whose を使って2文を1文に結合する問題。

【解説】
「I have a classmate.」と「Her sister is the captain of the swimming team.」の Her は a classmate を指している。この「Her（クラスメートの）」という所有の関係を表すのが関係代名詞の所有格 whose。

変換の手順：
1. 先行詞を特定：a classmate（人）
2. Her（所有格）→ whose に置き換える
3. whose を先行詞 a classmate の直後に置く
→ I have a classmate whose sister is the captain of the swimming team.

日本語訳：「私には妹が水泳部のキャプテンであるクラスメートがいる。」

【文法ポイント】
whose の使い方：先行詞（人・物）の所有格を表す
・先行詞が人：I know a boy whose father is a P.E. teacher.
・先行詞が物：This is the club whose members practice every day.

【入試頻出】
・She has a friend whose brother plays in the baseball club.
・He is a student whose grades are always excellent.
・This is the team whose uniform is blue and white.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_25',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：What time does the club activity start?\n「あなたは部活が何時に始まるか知っていますか？」',
    answer: 'Do you know what time the club activity starts?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、do/does は消える。',
    explanation: `【出題意図】
間接疑問文（疑問詞 + 主語 + 動詞の語順）への書き換えを問う問題。語順の変化が最大のポイント。

【解説】
直接疑問文「What time does the club activity start?」を間接疑問文にする手順：
1. 疑問詞 what time はそのまま使う
2. 疑問詞の後ろは「主語 + 動詞」の平叙文語順に変える
3. does は消えて、動詞に3単現の s がつく
4. 全体を「Do you know + 間接疑問」にする

× Do you know what time does the club activity start?（誤り）
○ Do you know what time the club activity starts?（正解）

日本語訳：「あなたは部活が何時に始まるか知っていますか？」

【文法ポイント】
間接疑問文の語順：疑問詞 + 主語 + 動詞〜（平叙文語順）
例：Where does she practice? → Do you know where she practices?
例：Who is that coach? → I wonder who that coach is.

【入試頻出】
・Do you know when the tournament will be held?
・Can you tell me where the club activity takes place?
・I wonder why the practice was canceled today.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。\n\nCould you tell me ( ) the drama club is going to perform this year?\n① when  ② which play  ③ where  ④ how',
    answer: '② which play',
    hint: '「今年どの劇を上演するか」という意味の間接疑問文。選択を尋ねる疑問詞を選ぶ。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞（句）を文脈から選ぶ問題。疑問詞の意味の使い分けが目標。

【解説】
「Could you tell me ( ) the drama club is going to perform this year?」= 「演劇部が今年どの劇を上演するのか教えてもらえますか？」
複数ある劇の中から「どれ」を選ぶかを尋ねるので which play（どの劇）を使う。
・① when → 「いつ」時を尋ねる
・② which play → 「どの劇」選択を尋ねる（✓）
・③ where → 「どこ」場所を尋ねる
・④ how → 「どのように」方法を尋ねる

注意：is going to perform は間接疑問文なので「主語 + 動詞」の語順のまま。

日本語訳：「演劇部が今年どの劇を上演するのか教えていただけますか？」

【文法ポイント】
間接疑問文の疑問詞（句）の使い分け：
・when：時、where：場所、why：理由、how：方法
・which + 名詞：複数の中からの選択（which play, which song など）

【入試頻出】
・Please tell me which song the choir will sing next.
・I don't know which club she is going to join.
・Can you tell me which team won the game?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo3_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ know / you / do / which / club / she / joined ）\n「彼女がどの部活に入ったか知っていますか？」',
    answer: 'Do you know which club she joined?',
    hint: '間接疑問文：疑問詞（which club）の後ろは主語＋動詞の語順。全体は疑問文なので Do で始める。',
    explanation: `【出題意図】
間接疑問文の語順整序問題。「疑問詞（句）+ 主語 + 動詞」という間接疑問の語順と、全体が疑問文になることを確認する。

【解説】
ポイントは2つ：
1. 全体が「Do you know〜?」という疑問文
2. know の目的語（間接疑問）は「which club she joined」（平叙文語順）

× Do you know which club did she join?（誤り）
○ Do you know which club she joined?（正解）

語句の組み立て：
Do you know / which club / she joined？

日本語訳：「彼女がどの部活に入ったか知っていますか？」

【文法ポイント】
間接疑問の語順：疑問詞（句）+ 主語 + 動詞
全体が疑問文の場合：Do/Can/Could + 主語 + 動詞 + 疑問詞 + 主語 + 動詞〜?

【入試頻出】
・Do you know which team will win the game?
・Can you tell me which player scored the goal?
・I want to know which club is the most popular.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_28',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ have / for / we / been / since / practicing / this song / two weeks / from ）\n「私たちはこの歌を2週間ずっと練習している。」',
    answer: 'We have been practicing this song for two weeks.',
    hint: '「2週間ずっと〜している」は現在完了進行形。for（〜の間）か since（〜以来）かを判断する。',
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for / since の使い分けを問う問題。不要語の識別も含む。

【解説】
「2週間」は期間（duration）なので for を使う。since は起点（since April など）に使う。
不要語：from（× we have been practicing this song from two weeks → from は不可）

正しい語順：
We have been practicing this song for two weeks.
（現在完了進行形 = have been + Ving）

日本語訳：「私たちはこの歌を2週間ずっと練習している。」

【文法ポイント】
for vs since：
・for + 期間：for two weeks / for a month（〜の間）
・since + 起点：since April / since last week（〜以来）

現在完了進行形の構造：have/has + been + 動詞-ing

【入試頻出】
・She has been playing the flute for three years.
・They have been rehearsing for the concert since last Monday.
・I have been running every morning for a month.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_29',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ enough / not / to / good / he / is / play / in the match ）\n「彼はその試合で出場するほど上手ではない。」',
    answer: 'He is not good enough to play in the match.',
    hint: '「〜するのに十分〜だ」は 形容詞 + enough + to 動詞 の語順。',
    explanation: `【出題意図】
「形容詞 + enough + to 動詞」の語順を問う整序問題。enough の位置が鍵。

【解説】
「〜するのに十分〜だ」は：主語 + be + 形容詞 + enough + to + 動詞原形
・enough は形容詞の後ろに置く（× enough good は誤り）
・否定文：not が be 動詞の後ろに来る

正しい語順：
He is not good enough to play in the match.

日本語訳：「彼はその試合に出場できるほど上手ではない。」

【文法ポイント】
形容詞 + enough + to 動詞：「〜するのに十分〜だ」
例：She is fast enough to run in the relay.（リレーで走れるほど速い）

too + 形容詞 + to 動詞：「〜すぎて〜できない」（enough と対で覚える）
例：He is too weak to lift the box.（弱すぎて箱を持ち上げられない）

【入試頻出】
・She is skilled enough to join the varsity team.
・He is not tall enough to reach the net.
・They practiced hard enough to win the tournament.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_30',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ bought / captain / us / drinks / the / cold ）\n「キャプテンは私たちに冷たい飲み物を買ってくれた。」',
    answer: 'The captain bought us cold drinks.',
    hint: 'buy + 人 + 物 の語順（第4文型 SVOO）を使う。',
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。buy の用法も確認。

【解説】
buy + 人 + 物 = 人のために物を買う（第4文型）
・The captain（S）+ bought（V）+ us（IO: 間接目的語）+ cold drinks（DO: 直接目的語）

語順：The captain bought us cold drinks.

第3文型への書き換え：The captain bought cold drinks for us.（for を使う）

日本語訳：「キャプテンは私たちに冷たい飲み物を買ってくれた。」

【文法ポイント】
第4文型（SVOO）の動詞：
・give / send / show / teach / tell + 人 + 物（to で書き換え可）
・buy / make / get / cook + 人 + 物（for で書き換え可）
例：She bought him a new racket. = She bought a new racket for him.

【入試頻出】
・Our coach bought us new balls for practice.
・She made her teammates a cake for the celebration.
・Can you get me a towel?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_31',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ without / left / the gym / anyone / he / telling ）\n「彼は誰にも言わずに体育館を出た。」',
    answer: 'He left the gym without telling anyone.',
    hint: 'without の後には動名詞（〜ing）が来る。without + 動名詞 = 〜せずに。',
    explanation: `【出題意図】
前置詞 without + 動名詞 の用法と、語順整序を問う問題。

【解説】
前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。
「〜せずに」= without + 動名詞（〜ing）

正しい語順：
He left the gym without telling anyone.

× without to tell（× 前置詞の後ろに不定詞は来ない）
○ without telling（✓ 前置詞 + 動名詞）

日本語訳：「彼は誰にも言わずに体育館を出た。」

【文法ポイント】
前置詞 + 動名詞 の頻出パターン：
・without + ing：〜せずに（without saying anything）
・before + ing：〜する前に（before starting practice）
・after + ing：〜した後で（after finishing the game）
・for + ing：〜したことで（thank you for helping）

【入試頻出】
・She left the classroom without saying goodbye.
・He scored the goal without looking at the goalkeeper.
・Thank you for supporting our team.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_32',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ the / girl / I / at / met / is / lunch / captain / who / the ）\n「私が昼食のときに会った女の子はキャプテンです。」',
    answer: 'The girl who I met at lunch is the captain.',
    hint: '関係代名詞 who を使って先行詞「the girl」を修飾する節を作る。',
    explanation: `【出題意図】
関係代名詞 who（目的格）を使った語順整序問題。先行詞と関係代名詞節の位置関係が鍵。

【解説】
文の骨格：The girl is the captain.（その女の子はキャプテンだ）
修飾部：who I met at lunch（私が昼食のときに会った）

組み合わせ：
The girl [who I met at lunch] is the captain.

who はここでは目的格（met の目的語）として使われている。
= The girl (whom / that) I met at lunch is the captain.（省略も可）

日本語訳：「私が昼食のときに会った女の子はキャプテンです。」

【文法ポイント】
関係代名詞節の位置：先行詞の直後に置く。
The girl who〜 / The boy that〜 のように、先行詞と関係代名詞節はセット。
主節の動詞（is）は関係代名詞節の後に続く。

【入試頻出】
・The boy who sits next to me plays in the tennis club.
・The teacher who I respect the most is our coach.
・The player who scored the goal was very happy.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_33',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ to / easy / this / follow / enough / is / dance / for / members / new ）\n「この振り付けは新しい部員が覚えるのに十分簡単だ。」',
    answer: 'This dance is easy enough for new members to follow.',
    hint: '「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。',
    explanation: `【出題意図】
enough to 構文に「for + 人」が加わった形の語順を問う問題。「〜が…するほど十分〜だ」という表現の完全形を問う。

【解説】
構文：主語 + be + 形容詞 + enough + for + 人 + to + 動詞原形
「for + 人」は不定詞の意味上の主語を示す。

正しい語順：
This dance is easy enough for new members to follow.

日本語訳：「この振り付けは新しい部員が覚えるのに十分簡単だ。」

【文法ポイント】
「形容詞 + enough + for + 人 + to + 動詞」構文：
例：The song is simple enough for beginners to sing.（初心者が歌えるくらい簡単だ）
「too + 形容詞 + for + 人 + to + 動詞」構文との対比：
例：The choreography is too difficult for beginners to learn.（難しすぎて初心者は覚えられない）

【入試頻出】
・This rule is clear enough for everyone to understand.
・The court is big enough for both teams to practice.
・The story is short enough for us to read in one class.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo3_34',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: Would you like to join our art club this year?\nB: ( )\n\n① No, I don\'t.\n② Yes, I\'d love to.\n③ I like art.\n④ Yes, I would like.',
    answer: '② Yes, I\'d love to.',
    hint: 'Would you like to〜? は「〜しませんか」という誘いの表現。適切な受け方を選ぶ。',
    explanation: `【出題意図】
Would you like to〜?（勧誘・誘い）への適切な応答を問う問題。日常会話・対話文頻出表現。

【解説】
Would you like to〜? は「〜しませんか？」という丁寧な誘い・勧誘の表現。
・① No, I don't. → 文法的にも不自然な断り方（Would you like to〜? には No, I don't. で答えない）
・② Yes, I'd love to. → 正しい受け答え（✓）「ぜひそうしたいです」
・③ I like art. → 誘いへの直接の返答としてはずれる
・④ Yes, I would like. → like の後ろに目的語やto do が必要

誘いへの返答：
・受ける：Yes, I'd love to. / Sure, I'd like to.
・断る：I'm sorry, I can't. / I'd love to, but I'm busy.

日本語訳：
A：今年、私たちの美術部に入りませんか？
B：はい、ぜひ入りたいです。

【文法ポイント】
Would you like to〜?（誘い）vs Do you like〜?（好み・趣味を尋ねる）
I'd love to. は「ぜひそうしたい」という前向きな返事の定型表現。

【入試頻出】
・Would you like to come to our practice? — Yes, I'd love to.
・Would you like to try out for the team? — Sure, I'd like to.
・Can you join us tomorrow? — I'd love to, but I have a piano lesson.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_35',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: How long does it take to get to the gym from the classroom?\nB: ( )\n\n① It\'s about two hundred meters.\n② It takes about five minutes on foot.\n③ You should hurry up.\n④ The gym is very large.',
    answer: '② It takes about five minutes on foot.',
    hint: 'How long does it take to〜? は「〜するのにどのくらいかかりますか」という所要時間を尋ねる表現。',
    explanation: `【出題意図】
「It takes + 時間 + to + 動詞」という所要時間を表す構文と、How long does it take to〜? への適切な応答を問う問題。

【解説】
How long does it take to〜? = 「〜するのにどのくらい時間がかかりますか？」
返答は「It takes + 時間」の形が正しい。
・① about two hundred meters → 距離を答えている（×）How far〜? への答え
・② It takes about five minutes on foot. → 所要時間を答えている（✓）
・③ You should hurry up. → 提案（質問の答えになっていない）
・④ The gym is very large. → 無関係

日本語訳：
A：教室から体育館までどのくらいかかりますか？
B：歩いて約5分かかります。

【文法ポイント】
所要時間の表現：
It takes + 時間 + to + 動詞〜 = 〜するのに〜の時間がかかる
例：It takes ten minutes to walk to the gym.
on foot：歩いて（= by walking）

【入試頻出】
・How long does it take to get to the stadium?
・It takes about twenty minutes by bike.
・It took us an hour to set up the tent.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_36',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: I lost the relay race today, and I feel terrible.\nB: ( ) You gave it your best shot.\n\n① Don\'t worry.\n② That\'s too bad.\n③ I\'m sorry to hear that.\n④ Never mind.',
    answer: '① Don\'t worry.',
    hint: '後に続く「You gave it your best shot.（全力を尽くしたじゃないか）」という励ましの言葉に合う返答を選ぶ。',
    explanation: `【出題意図】
励ましの表現と、会話の流れ・文脈から適切な応答を選ぶ問題。

【解説】
Aが「リレーで負けて落ち込んでいる」と言っているのに対し、Bは「You gave it your best shot.（全力を尽くしたじゃないか）」と励ましている。前置きとして最適なのは「Don't worry.（心配しないで）」。
・① Don't worry. → 心配しないで（励まし）（✓）
・② That's too bad. → それは残念だね（共感・慰め。励ましではない）
・③ I'm sorry to hear that. → それは残念です（同情。だが後の励ましと繋がりが弱い）
・④ Never mind. → 気にしないで（軽い謝りへの返答。励ましとしては不自然）

日本語訳：
A：今日リレーで負けてしまって、すごく落ち込んでいるんだ。
B：心配しないで。全力を尽くしたじゃない。

【文法ポイント】
励まし・応援の表現：
・Don't worry. / Don't worry about it.：心配しないで
・You did your best.：あなたは全力を尽くした
・Cheer up!：元気出して！
・You'll do better next time.：次はもっとうまくいくよ

【入試頻出】
・Don't worry. You'll do better next time.
・Cheer up! The next game is coming soon.
・I'm sure you'll win the next match.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_37',
    subject: 'eigo',
    question: '次の対話の（　）に最も適切な文を選べ。\n\nA: May I use the club room to practice my speech?\nB: ( )\nA: Thank you very much.\n\n① Sure, go ahead.\n② No, you may not use it.\n③ I don\'t have a club room.\n④ Yes, you may go.',
    answer: '① Sure, go ahead.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I use〜? = 「〜を使ってもいいですか？」という許可を求める丁寧な表現。
直後に「Thank you very much.（ありがとうございます）」とあるので、許可を与える返答が必要。
・① Sure, go ahead. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not use it. → 文法的には正しい拒否だがAが「Thank you」と言うことと矛盾する
・③ I don't have a club room. → 部室がないと言っている（状況から不自然）
・④ Yes, you may go. → go（行く）は use（使う）とは関係ない

日本語訳：
A：スピーチの練習をするために部室を使ってもいいですか？
B：もちろん、どうぞ。
A：どうもありがとうございます。

【文法ポイント】
許可を求める表現：
・May I〜?：丁寧（最も礼儀正しい）
・Can I〜?：やや砕けた言い方

許可を与える表現：
・Sure. / Of course. / Certainly.：もちろん
・Go ahead.：どうぞ（自由に使って）

【入試頻出】
・May I borrow this microphone? — Sure, go ahead.
・Can I use the computer room after school? — Of course.
・May I ask a question? — Certainly.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nI have never ( ) such a difficult piece on the piano before.\n① play  ② played  ③ playing  ④ playing',
    answer: '② played',
    hint: '現在完了形（have/has + 過去分詞）の経験用法。play の過去分詞を選ぶ。',
    explanation: `【出題意図】
現在完了形（経験用法）の形と、play の活用（play-played-played）を正確に使えるかを問う問題。

【解説】
never は現在完了形の経験用法で「一度も〜したことがない」を表す。
現在完了形：have/has + 過去分詞
play の活用：play（原形）→ played（過去形）→ played（過去分詞）

・① play → 原形（have の後ろに原形は来ない）
・② played → 過去分詞（✓）have played
・③ playing → 現在分詞（この文脈には合わない）
・④ playing → 同上（選択肢重複）

日本語訳：「私はピアノでこんなに難しい曲を今まで一度も弾いたことがない。」

【文法ポイント】
現在完了形（経験）の目印の語句：
・ever（これまでに）：Have you ever played this piece?
・never（一度も〜ない）：I have never seen such a big stage.
・before（以前に）：I have played this song before.

規則動詞の過去分詞は過去形と同じ形（-ed）になる：play-played-played, practice-practiced-practiced

【入試頻出】
・Have you ever performed on such a big stage?
・I have never watched such an exciting match.
・She has practiced this piece many times.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。\n\nThe entrance ceremony will be held ( ) April 8th this year.\n① in  ② at  ③ on  ④ by',
    answer: '③ on',
    hint: '特定の日付には前置詞 on を使う。',
    explanation: `【出題意図】
時を表す前置詞（in / at / on）の使い分けを問う問題。入試最頻出文法の一つ。

【解説】
「April 8th（4月8日）」という特定の日付には on を使う。
・① in → 月・年・季節（in April / in 2026）
・② at → 時刻・特定の時点（at 9 a.m.）
・③ on → 曜日・特定の日・日付（on April 8th）（✓）
・④ by → 期限（by Friday = 金曜日までに）

「April 8th」だけなら in April も使えるが、日付まで特定されているので on を使う。

日本語訳：「入学式は今年4月8日に行われる予定だ。」

【文法ポイント】
時を表す前置詞まとめ：
at：時刻・時点（at noon）
on：曜日・日付・特定の日（on Monday / on April 8th / on my birthday）
in：月・年・季節・時間帯（in April / in 2026 / in spring）

【入試頻出】
・The graduation ceremony is held on March 1st.
・The sports day will take place on a sunny day in October.
・We have a school trip in June.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。\n\nOur coach allowed us ( ) home early after the long practice.\n① go  ② to go  ③ going  ④ went',
    answer: '② to go',
    hint: 'allow + 人 + to do（人が〜するのを許可する）という構文。',
    explanation: `【出題意図】
「allow + 人 + to + 動詞」という第5文型（SVOC）の用法を問う問題。

【解説】
allow + 人 + to do = 「人が〜するのを許可する」という重要構文。
・① go → 原形のみ（allowの第5文型ではtoが必要）
・② to go → allow + 人 + to do（✓）
・③ going → 動名詞（allow + 人 + doingという形は存在しない）
・④ went → 過去形（文法的に合わない）

日本語訳：「私たちのコーチは長い練習の後、私たちが早く家に帰るのを許可してくれた。」

【文法ポイント】
「動詞 + 人 + to do」の構文（第5文型 SVOC）：
・allow + 人 + to do：人が〜するのを許可する
・ask + 人 + to do：人に〜するよう頼む
・want + 人 + to do：人に〜してほしい
・expect + 人 + to do：人が〜することを期待する

【入試頻出】
・The teacher allowed us to leave early.
・My parents allowed me to join the ski club.
・The coach expects us to arrive on time.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。\n\nI think ( ) important for club members to support each other.\n① this  ② that  ③ it  ④ what',
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation: `【出題意図】
形式主語 it（仮の主語）を使った構文を問う問題。I think (that) it is〜 の形が正解。

【解説】
この文は「I think [that] it is important for club members to support each other.」という構造。
it は to support each other（お互いを支えること）を指す形式主語（仮主語）。

・① this → I think this important to〜 は文法的に成立しない
・② that → I think that important to〜 も文法的に不自然
・③ it → 形式主語の it（✓）
・④ what → I think what important to〜 は成立しない

日本語訳：「私は部員がお互いを支え合うことは大切だと思う。」

全体の構造：
I think [that it is important for club members to support each other].

【文法ポイント】
形式主語（仮主語）it の構文：
It is + 形容詞 + to + 動詞〜 = 〜することは（形容詞）だ
例：It is important to practice every day.
「for + 人」は不定詞の意味上の主語を示す。

【入試頻出】
・It is fun to play sports with good friends.
・I think it is necessary for us to keep trying.
・He found it exciting to compete in the final match.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo3_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私は今までにこんなに素晴らしい合唱を聞いたことがありません。」',
    answer: 'I have never heard such a wonderful chorus. / I have never heard such a wonderful chorus before.',
    hint: '「〜したことがない」は現在完了の経験用法（have never + 過去分詞）。「こんなに素晴らしい〜」は such a wonderful〜。',
    explanation: `【出題意図】
現在完了形（経験）の否定文と、such a + 形容詞 + 名詞（こんなに〜な…）という強調表現を問う問題。

【解説】
「〜したことがない」= have/has never + 過去分詞（現在完了・経験の否定）
「こんなに素晴らしい合唱」= such a wonderful chorus

hear の活用：hear-heard-heard

完成した文：
I have never heard such a wonderful chorus.
または文末に before を加えてもよい：I have never heard such a wonderful chorus before.

日本語訳の英訳：
I have never heard such a wonderful chorus.

【文法ポイント】
such a/an + 形容詞 + 名詞：こんなに〜な…
例：such a beautiful song, such an exciting match
現在完了（経験）の否定：have never + 過去分詞

【入試頻出】
・I have never seen such a moving performance.
・She has never played such a difficult piece.
・We have never had such a close game.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「彼女が撮ったその写真を私に見せてもらえませんか？」',
    answer: 'Could you show me the picture that she took? / Could you show me the picture she took?',
    hint: '「見せてもらえませんか」は Could you show me〜?、「彼女が撮った」は関係代名詞（that / which）で修飾。',
    explanation: `【出題意図】
依頼表現（Could you〜?）と関係代名詞（目的格）を組み合わせた英作文。

【解説】
2つのポイント：
1. 丁寧な依頼：Could you show me〜? = 「〜を見せていただけますか？」
   show + 人 + 物（第4文型）
2. 「彼女が撮った（写真）」= the picture that/which she took（関係代名詞・目的格）
   → 目的格の関係代名詞は省略可能

組み合わせ：
Could you show me the picture (that) she took?

別解：
・Could you let me see the picture she took?
・May I see the picture that she took?

日本語訳確認：「彼女が撮ったその写真を私に見せてもらえませんか？」

【文法ポイント】
Could you〜? = Can you〜? の丁寧版（より礼儀正しい依頼）
show + 人 + 物：人に物を見せる（第4文型 SVOO）
the picture (that) she took：関係代名詞（目的格）she took the picture の構造

【入試頻出】
・Could you show me the video you recorded?
・This is the trophy (that) our team won last year.
・He showed me the photos he had taken during the trip.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私が中学生だったころ、この学校にはテニス部がありませんでした。」',
    answer: 'When I was a junior high school student, there was no tennis club in this school. / There was no tennis club in this school when I was a junior high school student.',
    hint: '「〜がなかった」は there was not / there was no〜。中学生のころ = when I was a junior high school student。',
    explanation: `【出題意図】
there is/are 構文の過去の否定形と、when 節（〜のとき）を組み合わせた英作文。

【解説】
ポイント：
1. 「中学生だったころ」= when I was a junior high school student
2. 「〜がなかった」= there was no〜 / there was not any〜（tennis club は単数扱い）
3. 「この学校に」= in this school

組み合わせ：
When I was a junior high school student, there was no tennis club in this school.
または
There was no tennis club in this school when I was a junior high school student.

注意：
× there was not tennis club（× no か any が必要）
○ there was no tennis club / there wasn't any tennis club

【文法ポイント】
there is/are 構文：「〜がある/いる」
・過去の否定：there was no + 単数名詞 / there were no + 複数名詞
・there was not any〜 も同じ意味で使える

【入試頻出】
・There was no swimming pool at our school ten years ago.
・When I was small, there were no smartphones in my house.
・There wasn't any club activity on Sundays before.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私があなたなら、部長にもっと早く相談するでしょう。」',
    answer: 'If I were you, I would talk to the club captain sooner. / If I were you, I would consult the club captain sooner.',
    hint: '仮定法過去（現実とは逆の仮定）：If + 主語 + were/動詞の過去形, 主語 + would + 動詞原形。I were が正しい（I was ではない）。',
    explanation: `【出題意図】
仮定法過去（If I were you, I would〜）の形を問う英作文。入試英作文最頻出構文の一つ。

【解説】
「もし私があなたならば」= 現実と異なる仮定（実際には私はあなたではない）→ 仮定法過去を使う

仮定法過去の形：
If + 主語 + 動詞の過去形（be動詞は were）, 主語 + would/could/might + 動詞原形

重要：If I were you〜（× If I was you は入試では不正解）
仮定法では be 動詞は人称に関わらず were を使う。

「相談する」= talk to〜 / consult〜（どちらも可）
「もっと早く」= sooner

完成した文：
If I were you, I would talk to the club captain sooner.
= If I were you, I would consult the club captain sooner.

【文法ポイント】
仮定法過去：現在または未来の事実に反する仮定
If + 主語 + 過去形（were）, 主語 + would + 動詞原形
・If I had more free time, I would practice every day.
・If she were the captain, she would change the schedule.

【入試頻出】
・If I were you, I would apologize to the team.
・If I had a chance, I would join the drama club.
・If he were faster, he could be on the relay team.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「この部活は初心者だけでなく、経験者にも人気があります。」',
    answer: 'This club is popular not only with beginners but also with experienced students. / This club is popular not only among beginners but also among experienced students.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。「〜に人気がある」は popular with/among〜。',
    explanation: `【出題意図】
相関接続詞 not only A but also B（〜だけでなく…も）の構文と、popular with/among〜 を使った英作文。

【解説】
2つのポイント：
1. 「〜だけでなく…も」= not only A but also B
2. 「〜に人気がある」= be popular with〜 または be popular among〜

組み合わせ：
This club is popular not only with beginners but also with experienced students.
または
This club is popular not only among beginners but also among experienced students.

「経験者」= experienced students / experienced members

注意：not only A but also B の A と B は文法的に同じ形（並列）である必要がある。

【文法ポイント】
相関接続詞：
・not only A but also B：AだけでなくBも
・both A and B：AもBも
・either A or B：AかBのどちらか

popular with / popular among：
・with：特定の人（be popular with beginners）
・among：グループの中で（be popular among students）

【入試頻出】
・This sport is popular not only with boys but also with girls.
・She is respected not only by her teammates but also by her rivals.
・This song is popular among high school students.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題） × 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo3_47',
    subject: 'eigo',
    passage: `Many students think that joining a club is only about winning games or contests, but there are other important things to learn. First, working with teammates teaches you how to communicate well with different kinds of people. Second, practicing regularly helps you learn patience and discipline, even when you do not see quick results. Third, supporting each other during difficult times builds strong friendships that can last for many years. Of course, winning is exciting, but the friendships and skills you gain through club activities are often more valuable than any trophy. That is why teachers often say that club activities are as important as classroom lessons.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っているものを1つ選べ。\n① 部活動の目的は試合や大会に勝つことだけだ。\n② チームメートと協力することはコミュニケーション能力を育てる。\n③ 練習の結果はすぐに出ることが多い。\n④ 友情よりトロフィーの方が価値があると本文は述べている。',
    answer: '② チームメートと協力することはコミュニケーション能力を育てる。',
    hint: '本文中の "working with teammates teaches you how to communicate well" という文を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「勝つことだけが目的」→ 本文冒頭で "not only about winning" と否定されている（×）
② 「チームメートとの協力がコミュニケーション能力を育てる」→ 本文に "working with teammates teaches you how to communicate well with different kinds of people." とある（✓）
③ 「結果はすぐに出ることが多い」→ 本文には "even when you do not see quick results（すぐに結果が見えなくても）" とあり逆の内容（×）
④ 「友情よりトロフィーの方が価値がある」→ 本文には "friendships and skills〜are often more valuable than any trophy" と逆の内容が書かれている（×）

【文法ポイント】
内容一致問題のアプローチ：
1. 選択肢を先に読んでキーワードを把握
2. 本文で該当箇所を探す
3. 本文の語句と選択肢の語句を慎重に比較（言い換え・否定に注意）

【入試頻出】
内容一致問題では：
・本文の否定表現を見落とさない
・比較表現（more valuable than〜）の方向を正確に読み取る
・本文の言い換え表現に気づくことが正解への鍵`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_48',
    subject: 'eigo',
    passage: `Last spring, a new student named Emi joined our badminton club. At first, she did not know anyone and looked nervous during practice. However, some of the older members noticed this and started talking to her every day. They also invited her to eat lunch with them. After a few weeks, Emi began to smile more and practice with confidence. She later said, "I was so worried about making friends, but everyone here was kind to me from the beginning." This experience taught the whole club an important lesson: small acts of kindness can make a huge difference to someone who feels alone.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文中の下線部 "This experience" が指す内容として最も適切なものを選べ。\n① 恵美が部活で優勝した経験\n② 恵美がバドミントンの技術を上達させた経験\n③ 上級部員たちが恵美に親切に接し、彼女が変わっていった経験\n④ 恵美が新しい学校に転校した経験',
    answer: '③ 上級部員たちが恵美に親切に接し、彼女が変わっていった経験',
    hint: '"This experience" は直前までに描かれてきた、恵美と部員たちのやり取り全体を指す。',
    explanation: `【出題意図】
指示語（This experience）が何を指すかを本文全体の流れから特定する指示語問題。段落全体を要約する力が問われる。

【解説】
指示語の前までの内容を確認する：
・新入部員の恵美が最初は緊張していた
・上級部員が毎日話しかけ、昼食に誘った
・数週間後、恵美は自信を持って練習できるようになった
・恵美は「みんなが親切にしてくれた」と語った

これら一連の出来事全体が「This experience（この経験）」が指す内容。
→ ③ 「上級部員たちが恵美に親切に接し、彼女が変わっていった経験」が正解。

① 優勝の話は本文に記述なし（×）
② 技術の上達については触れていない（×）
④ 転校の話ではなく、新入部員としての参加（×）

【文法ポイント】
指示語問題のアプローチ：
1. 指示語（this / these / it）が段落の最後や結論部分にある場合、段落全体の内容を指すことが多い
2. 「小さな親切が大きな違いを生む」という結論と対応する内容を選ぶ

【入試頻出】
・段落末尾の this experience / this story は、その段落全体の出来事を指すことが多い
・「教訓・結論」の直前にある this は、それまでの出来事全体をまとめている`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_49',
    subject: 'eigo',
    passage: `Many schools in Japan have started to change the way club activities are managed. In the past, teachers often supervised club practice every day, even on weekends. This caused many teachers to feel extremely tired, and some students felt too much pressure to win. Recently, some schools have begun to introduce outside coaches who are professionals in their sport. These coaches can teach students more effective skills, while teachers get more time to rest and prepare for classes. Students also say that they enjoy practice more when they can focus on both learning and having fun, instead of only trying to win.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の主題として最も適切なものを選べ。\n① 日本の学校の部活動における外部コーチ導入の背景と効果\n② 日本の教員の労働時間に関する統計データ\n③ 生徒がスポーツで勝つことの重要性\n④ 週末に部活動を行うことの是非についての法律\n',
    answer: '① 日本の学校の部活動における外部コーチ導入の背景と効果',
    hint: '本文全体の流れ（問題提起→変化の紹介→効果→生徒の感想）を把握して、何が最も中心的に述べられているかを考える。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. 問題提起：これまで教員が毎日・週末も部活を監督し、負担が大きかった
2. 変化の紹介：一部の学校がプロの外部コーチを導入し始めた
3. 効果：生徒はより効果的な指導を受けられ、教員は休息や授業準備の時間を得られる
4. 生徒の感想：勝つことだけでなく学びと楽しさを両立できるようになった

全体を通して「外部コーチ導入の背景と効果」が中心テーマ → ①が正解

② 統計データ：本文に数値データは含まれていない（×）
③ 勝つことの重要性：本文はむしろ勝つことだけを重視しない方向を述べている（×）
④ 法律の話：本文に法律についての記述はない（×）

【文法ポイント】
主題問題（main topic / main idea）のアプローチ：
1. 冒頭と末尾を特に注意深く読む
2. 繰り返し登場するキーワードを見つける（→ club activities, outside coaches, teachers, students）
3. 選択肢が本文の一部のみに対応している場合は主題ではない

【入試頻出】
・主題問題では「一番多く書かれていること」を選ぶ
・本文の一部しか触れていない選択肢は不正解になることが多い
・過度に具体的・専門的な選択肢は主題にならないことが多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo3_50',
    subject: 'eigo',
    passage: `Yuta and Kenji had been best friends since elementary school, and they both joined the soccer club when they entered high school. However, in their second year, only Yuta was chosen for the starting lineup, while Kenji had to stay on the bench. At first, Kenji felt jealous and started to avoid talking to Yuta. Yuta noticed the change and felt worried about their friendship. One day, Yuta asked Kenji directly, "Are you upset with me?" Kenji was surprised but finally admitted his feelings. After they talked honestly, they understood each other better and decided to support each other no matter who was in the starting lineup. Their friendship became even stronger than before.`,
    question: '次の英文を読んで、問いに答えなさい。\n\n（本文は上の passage を参照）\n\n問：本文の内容と合っていないものを1つ選べ。\n① ユウタとケンジは小学校からの親友である。\n② 2年生のとき、ケンジがスタメンに選ばれ、ユウタはベンチだった。\n③ ケンジは最初、嫉妬してユウタを避けていた。\n④ 2人は正直に話し合った後、以前より強い友情を築いた。',
    answer: '② 2年生のとき、ケンジがスタメンに選ばれ、ユウタはベンチだった。',
    hint: '本文では「ユウタだけがスタメンに選ばれ、ケンジはベンチに残った」と述べている。選択肢②が本文の内容と合っているか確認する。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」という誤文識別型の読解問題。細部の読み取りと選択肢の正確な解釈が必要。

【解説】
各選択肢を本文と照合する：
① 「小学校からの親友」→ 本文に "had been best friends since elementary school" とある（✓ 本文と一致）
② 「ケンジがスタメンに選ばれ、ユウタはベンチだった」→ 本文には "only Yuta was chosen for the starting lineup, while Kenji had to stay on the bench"（ユウタだけがスタメンに選ばれ、ケンジはベンチに残った）とあり、選手が逆になっている（× 本文と不一致）
③ 「ケンジは最初、嫉妬してユウタを避けていた」→ 本文に "Kenji felt jealous and started to avoid talking to Yuta" とある（✓ 本文と一致）
④ 「正直に話し合った後、以前より強い友情を築いた」→ 本文に "Their friendship became even stronger than before." とある（✓ 本文と一致）

正解：②

【文法ポイント】
「合っていないものを選べ」問題のアプローチ：
1. 選択肢の語句を一つずつ本文と照合
2. 主語と目的語が入れ替わっている選択肢に注意（今回のように人物名が逆になっているパターン）
3. 本文にない情報・事実の歪曲を含む選択肢が正解（不一致の選択肢）

【入試頻出】
・「合っていないものを選べ」では登場人物の役割が入れ替わっていないか特に注意する
・本文の否定表現と選択肢の肯定表現（またはその逆）に注意
・感情の変化（jealous → understood each other better）の流れを正確に追う`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
