import type { Question } from './questions';

export const kokoNyushiEigo6: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo6_01',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語句を選べ。\n\nWe ( ) basketball for about an hour when it began to rain heavily.\n① play  ② have played  ③ had been playing  ④ will have played`,
    answer: `③ had been playing`,
    hint: `「雨が降り始めた」という過去の時点よりも前から続いていた動作を表す時制を選ぶ。`,
    explanation:
      '【何を聞かれているか】「We ( ) basketball for about an hour when it began to rain heavily.」の空所に入る適切な時制を選ぶ。\n【なぜhad been playingになるのか】「雨が降り始めた」という過去の時点よりさらに前から「バスケをし続けていた」という継続動作を表すには、過去のある時点までの継続を表す過去完了進行形（had been＋動詞のing形）を使う必要があるから。\n【ポイント1】when it began to rain（雨が降り始めたとき）は過去の1つの時点。その時点よりも前から継続していた動作を表すには、さらに過去を示す時制が必要。\n【ポイント2】①play（現在形）、②have played（現在完了、過去の基準点には使えない）、④will have played（未来完了、過去の文脈に合わない）はどれも文脈に合わない。\n【ポイント3】③had been playing（過去完了進行形）が正解。「雨が激しく降り始めたとき、私たちは1時間ほどバスケをし続けていた」という意味になる。\n【答え】③ had been playing\n【確かめ】「for about an hour」という継続の期間を表す語句と、過去完了進行形の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】have played（現在完了形）を選んでしまう。現在完了は現在を基準にするので、過去の基準点には使えない。\n【ここが絶対】過去のある時点よりもさらに前から、その時点まで継続していた動作には過去完了進行形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_02',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nYou ( ) warm up before you start swimming, or you may hurt your muscles.\n① must  ② should  ③ can  ④ may`,
    answer: `② should`,
    hint: `「〜すべきだ」という強いアドバイス・忠告を表す助動詞を選ぶ。`,
    explanation:
      '【何を聞かれているか】「You ( ) warm up before you start swimming, or you may hurt your muscles.」の空所に入る適切な助動詞を選ぶ。\n【なぜshouldになるのか】「さもないと筋肉を痛めるかもしれない」という警告が続くことから、規則ではなくアドバイス・忠告を表すshouldが最適だから。\n【ポイント1】①must（規則的な強い義務）、③can（能力・可能性）、④may（許可・推量）はどれもこの文脈に合わない。\n【ポイント2】②should（忠告・アドバイス）が正解。「泳ぎ始める前に準備運動をすべきだ」というアドバイスを表す。\n【ポイント3】"or〜"のあとには「そうしないと〜」という結果が続く。You should〜, or you may…の形はよく使われる。\n【答え】② should\n【確かめ】文全体が「アドバイス＋そうしないとどうなるか」という構造になっているかを確認する。\n【よくあるまちがい】mustを選んでしまい、規則的な義務とアドバイスを混同する。\n【ここが絶対】should＝〜すべきだ（助言）、must／have to＝〜しなければならない（義務）と使い分ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_03',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語形を選べ。\n\nThis violin ( ) by a famous craftsman in Italy about a hundred years ago.\n① makes  ② is made  ③ was made  ④ has made`,
    answer: `③ was made`,
    hint: `「作られた」のは過去の出来事。楽器は「作る」側ではなく「作られる」側であることに注意。`,
    explanation: `【出題意図】
受動態の過去形（was/were＋過去分詞）を問う問題。時制と態の両方の判断が必要。

【解説】
主語 This violin は「作られる」側なので受動態が必要。about a hundred years ago という明確な過去の時点を示す語句があるため過去形の受動態を選ぶ。
・① makes → 能動態現在形（不可）
・② is made → 受動態現在形（過去の語句と合わない）
・③ was made → 受動態過去形（✓）
・④ has made → 能動態現在完了（主語と合わない）

日本語訳：「このバイオリンは約100年前にイタリアの有名な職人によって作られた。」

【文法ポイント】
受動態＝be動詞＋過去分詞。ago・last year・in 1990 など過去の特定の時点を示す語句がある場合は過去形の受動態を使う。

【入試頻出】
・This song was written by a young composer.
・The stadium was built in 2015.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_04',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nOf all the events in our school sports day, the relay race is ( ).\n① exciting  ② more exciting  ③ the most exciting  ④ excited`,
    answer: `③ the most exciting`,
    hint: `「すべての種目の中で」は範囲を示す表現。その中での最上級を選ぶ。`,
    explanation: `【出題意図】
3音節以上の形容詞の最上級（the most＋形容詞）を問う問題。exciting と excited（-ing形容詞と-ed形容詞）の混同を防ぐ。

【解説】
Of all the events（すべての種目の中で）は範囲を示す表現で最上級と共に使われる。exciting は3音節の形容詞なので most 型で最上級を作る。
・① exciting → 原級
・② more exciting → 比較級（of all とは合わない）
・③ the most exciting → 最上級（✓）
・④ excited → 「(人が)興奮させられる」の意味で物には使わない

日本語訳：「運動会のすべての種目の中で、リレーが一番盛り上がる。」

【文法ポイント】
-ing形容詞（exciting）は物・事が「人を興奮させる」性質を表し、-ed形容詞（excited）は人が「興奮している」状態を表す。最上級はthe most＋3音節以上の形容詞。

【入試頻出】
・This is the most interesting game I have ever watched.
・She was the most excited person in the audience.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_05',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nHe gets up at five every morning ( ) practice pitching before school.\n① for  ② so  ③ to  ④ that`,
    answer: `③ to`,
    hint: `「〜するために」という目的を表す不定詞の副詞的用法を選ぶ。`,
    explanation: `【出題意図】
不定詞の副詞的用法（目的）を問う問題。前置詞 for との混同を防ぐ。

【解説】
「毎朝5時に起きる」目的が「登校前にピッチングを練習するため」であることから、不定詞の副詞的用法（目的）を使う。
・① for → 前置詞。後ろに動詞原形は取れない
・② so → 接続詞。so that なら目的を表せるが単独では不可
・③ to → to＋動詞原形で目的を表す（✓）
・④ that → so that の形でのみ使われる

日本語訳：「彼は登校前にピッチングを練習するために毎朝5時に起きる。」

【文法ポイント】
不定詞の副詞的用法（目的）＝〜するために。so that＋主語＋can/willの形でも同じ意味を表せる。

【入試頻出】
・She practices every day to become a better dancer.
・He runs every morning to keep in shape.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_06',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nAfter she finished ( ) the piano, she went straight to bed.\n① practice  ② to practice  ③ practicing  ④ practiced`,
    answer: `③ practicing`,
    hint: `finish の後ろには動名詞のみが続くことを思い出す。`,
    explanation:
      '【何を聞かれているか】「After she finished ( ) the piano, she went straight to bed.」の空所に入る適切な形を選ぶ。\n【なぜpracticingになるのか】finishは動名詞（-ing）だけを目的語に取り、不定詞（to＋原形）は目的語に取らないという決まりがあるから。\n【ポイント1】①practice（原形）、②to practice（不定詞）はどちらもfinishの後ろには使えない。\n【ポイント2】③practicing（動名詞）が正解。finish＋動名詞の形。\n【ポイント3】④practiced（過去形）は目的語の位置には使えない。動名詞のみを目的語に取る動詞にはほかにenjoy、stop、mind、give upなどがある。\n【答え】③ practicing\n【確かめ】finishのあとが動詞のing形になっているかを確認する。\n【よくあるまちがい】finishのあとにto practiceを続けてしまう。\n【ここが絶対】finishは動名詞のみを目的語に取る動詞として覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_07',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語句を選べ。\n\nBy the time the concert starts, we ( ) for over three hours.\n① rehearse  ② will rehearse  ③ have rehearsed  ④ will have rehearsed`,
    answer: `④ will have rehearsed`,
    hint: `「コンサートが始まるまでには」という未来のある時点での完了・継続を表す時制を選ぶ。`,
    explanation:
      '【何を聞かれているか】「By the time the concert starts, we ( ) for over three hours.」の空所に入る適切な時制を選ぶ。\n【なぜwill have rehearsedになるのか】「コンサートが始まるまでには」という未来のある時点で「3時間以上リハーサルをしたことになる」という継続の完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】By the time the concert starts（コンサートが始まるまでには）は未来の時点を示す表現。\n【ポイント2】①rehearse（現在形）、②will rehearse（単純未来）、③have rehearsed（現在完了）はどれも未来の基準点に合わない。\n【ポイント3】④will have rehearsed（未来完了）が正解。by the time〜、by then、by next〜などの目印語句とセットで出やすい。\n【答え】④ will have rehearsed\n【確かめ】By the timeの節の動詞が現在形（starts）になっており、主節が未来完了（will have rehearsed）になっているかを確認する。\n【よくあるまちがい】have rehearsed（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での完了・継続にはwill have＋過去分詞（未来完了形）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_08',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nIf our team ( ) the next match, we will go to the national tournament.\n① win  ② wins  ③ will win  ④ won`,
    answer: `② wins`,
    hint: `条件を表す if 節の中では、未来のことでも現在形を使う。`,
    explanation: `【出題意図】
条件節（if節）の時制ルール（未来の内容でも現在形）を問う問題。入試最頻出文法の一つ。

【解説】
if節は時・条件を表す副詞節であり、未来のことでも現在形を使う。主語 our team は3人称単数なので3単現のsが必要。
・① win → 3単現のsが抜けている
・② wins → 3単現の現在形（✓）
・③ will win → if節内では使えない
・④ won → 過去形で仮定法的になり文脈に合わない

日本語訳：「もし私たちのチームが次の試合に勝てば、全国大会に行きます。」

【文法ポイント】
時・条件を表す副詞節（if, when, until, as soon as, beforeなど）の中では未来のことでも現在形を使う。主節では未来形を使ってよい。

【入試頻出】
・If it rains tomorrow, the game will be canceled.
・When she finishes practicing, she will call you.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_09',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nThe championship trophy ( ) to the winning team every year.\n① gives  ② is given  ③ was given  ④ has give`,
    answer: `② is given`,
    hint: `トロフィーは「与える」側ではなく「与えられる」側。毎年の習慣を表す現在形を選ぶ。`,
    explanation: `【出題意図】
受動態の現在形を問う問題。every year という習慣を示す語句との組み合わせも確認する。

【解説】
主語 The championship trophy は与えられる側なので受動態が必要。every year は習慣・繰り返しを表すので現在形の受動態を選ぶ。
・① gives → 能動態（主語と合わない）
・② is given → 受動態現在形（✓）
・③ was given → 過去形（every year と合わない）
・④ has give → 動詞の形が誤り

日本語訳：「優勝トロフィーは毎年優勝したチームに贈られる。」

【文法ポイント】
受動態＝be動詞＋過去分詞（＋by〜）。give のような第4文型で使われる動詞は、間接目的語（人）・直接目的語（物）どちらも受動態の主語にできる。

【入試頻出】
・A medal is given to each player.
・New uniforms are given to the team every season.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_10',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nMy brother can swim ( ) than any other student in his class.\n① fast  ② faster  ③ fastest  ④ more fast`,
    answer: `② faster`,
    hint: `"any other"を伴う文は比較級を使って最上級的な意味を表す。`,
    explanation: `【出題意図】
比較級＋than any other＋単数名詞 で最上級の意味を表す構文を問う問題。

【解説】
「any other＋単数名詞」を使うと、比較級で「他のどの〜よりも」という最上級的な意味になる。fast は1音節の副詞なので-er型で比較級を作る。
・① fast → 原級
・③ fastest → 最上級
・④ more fast → 誤った比較級
・② faster → 正しい比較級（✓）

日本語訳：「私の兄はクラスの他のどの生徒よりも速く泳げる。」

【文法ポイント】
比較級＋than any other＋単数名詞＝最上級と同じ意味。例：He is taller than any other boy in his class.＝He is the tallest boy in his class.

【入試頻出】
・She practices harder than any other member of the club.
・This song is more popular than any other song this year.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_11',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nMy dream is ( ) a professional soccer player someday.\n① become  ② becoming  ③ to become  ④ became`,
    answer: `③ to become`,
    hint: `is の補語として「〜になること」を表す不定詞を選ぶ。`,
    explanation: `【出題意図】
不定詞の名詞的用法（be動詞の補語になる形）を問う問題。

【解説】
My dream is ( ) の（　）には is の補語が入る。「いつかプロサッカー選手になること」という意味を表すには不定詞の名詞的用法を使う。
・① become → 原形のみは不可
・② becoming → 動名詞も文法的には補語になれるが、この文脈では to不定詞が自然で入試ではこちらが正解とされやすい
・③ to become → 不定詞（✓）
・④ became → 過去形で補語になれない

日本語訳：「私の夢はいつかプロのサッカー選手になることです。」

【文法ポイント】
不定詞の名詞的用法：主語・目的語・補語になり「〜すること」という意味を表す。My dream is to〜／My hobby is to〜などの形で頻出。

【入試頻出】
・Her goal is to win the championship.
・His wish is to join the national team.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_12',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\n( ) the drums every day has made him much better at keeping rhythm.\n① Practice  ② Practicing  ③ To practicing  ④ Practiced`,
    answer: `② Practicing`,
    hint: `文全体の主語になる部分を考える。動名詞は文の主語になれる。`,
    explanation: `【出題意図】
動名詞が文の主語になれることを問う問題。動詞の原形や過去形が主語になれない点も確認する。

【解説】
( ) the drums every day が文全体の主語で、has が述語動詞。動名詞（〜ing）は「〜すること」という意味で名詞の働きをし、文の主語になれる。
・① Practice → 原形は主語になれない
・② Practicing → 動名詞が主語（✓）
・③ To practicing → 存在しない形
・④ Practiced → 過去形・過去分詞は主語になれない

日本語訳：「毎日ドラムを練習することで、彼はリズムを取るのがずっと上手になった。」

【文法ポイント】
動名詞は「〜すること」という意味で、主語・目的語・補語になれる。Ving＋is/has/makes〜のように、動名詞から始まる文の動詞は3人称単数扱い（has, makesなど）になる。

【入試頻出】
・Playing tennis every weekend keeps her healthy.
・Singing in the chorus makes me happy.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo6_13',
    subject: 'eigo',
    question: `次の（　）内に最も適切な前置詞を選べ。\n\nMy little sister is very good ( ) drawing pictures of animals.\n① at  ② in  ③ for  ④ with`,
    answer: `① at`,
    hint: `be good at〜で「〜が得意だ」という意味の熟語。`,
    explanation: `【出題意図】
be good at〜（〜が得意だ）の前置詞を問う問題。

【解説】
be good at〜は「〜が得意だ」という意味の重要イディオムで前置詞 at が固定される。
・① at → be good at〜（✓）
・② in → be interested in〜などに使う
・③ for → be famous for〜などに使う
・④ with → be friendly with〜などに使う

日本語訳：「私の妹は動物の絵を描くのがとても得意だ。」

【文法ポイント】
be good at〜／be poor at〜（苦手）／be bad at〜（下手）。at の後ろには名詞または動名詞が続く。

【入試頻出】
・He is good at playing the guitar.
・She is poor at swimming.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_14',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nMore than fifty students will ( ) part in the marathon this weekend.\n① make  ② have  ③ take  ④ do`,
    answer: `③ take`,
    hint: `take part in〜で「〜に参加する」という熟語。`,
    explanation: `【出題意図】
重要熟語 take part in〜（〜に参加する）を問う問題。

【解説】
take part in〜は「〜に参加する」という意味のイディオムで、join とほぼ同義。
・① make → make part of という形はない
・② have → 不可
・③ take → take part in〜（✓）
・④ do → 不可

日本語訳：「今週末、50人以上の生徒がマラソンに参加する予定だ。」

【文法ポイント】
take part in〜＝join＝participate in〜。いずれも「〜に参加する」という意味を表す。

【入試頻出】
・She took part in the swimming contest last year.
・Many people join the marathon every spring.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_15',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語句を選べ。\n\nWe are all looking forward to ( ) the brass band concert next month.\n① watch  ② watching  ③ watched  ④ have watched`,
    answer: `② watching`,
    hint: `look forward to〜の to は前置詞なので、後ろには動名詞が続く。`,
    explanation: `【出題意図】
look forward to〜ing（〜を楽しみにしている）の to が前置詞であることを問う問題。不定詞の to との混同を防ぐ入試頻出ポイント。

【解説】
look forward to〜の to は不定詞の to ではなく前置詞の to なので、後ろには名詞または動名詞が続く。
・① watch → 原形は不可
・② watching → 前置詞to＋動名詞（✓）
・③ watched → 過去形は不可
・④ have watched → 前置詞の後には続かない

日本語訳：「私たちは皆、来月の吹奏楽コンサートを見るのを楽しみにしている。」

【文法ポイント】
look forward to〜ing：このtoは前置詞。似た形で be used to〜ing（〜に慣れている）も同様にtoが前置詞。

【入試頻出】
・I'm looking forward to seeing the fireworks.
・She is used to practicing outside in winter.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_16',
    subject: 'eigo',
    question: `次の（　）内に最も適切な前置詞を選べ。\n\nHe has been interested ( ) chess since he was a small child.\n① at  ② with  ③ in  ④ about`,
    answer: `③ in`,
    hint: `be interested in で「〜に興味がある」という意味。`,
    explanation:
      '【何を聞かれているか】「He has been interested ( ) chess since he was a small child.」の空所に入る適切な前置詞を選ぶ。\n【なぜinになるのか】「〜に興味がある」という意味は、be interested in〜という前置詞inが固定された決まったイディオムで表すから。\n【ポイント1】be interested in〜は「〜に興味がある」という重要イディオムで前置詞inが固定される。\n【ポイント2】①at（be good atなどに使う）、②with（be pleased withなどに使う）、④about（be worried aboutなどに使う）はどれも別のイディオムで使う前置詞。\n【ポイント3】be surprised at〜、be worried about〜、be proud of〜のように、前置詞が固定される熟語をセットで覚える。\n【答え】③ in\n【確かめ】be interested in chessで「チェスに興味がある」という意味になっているかを確認する。\n【よくあるまちがい】be interested atやbe interested withのように別の前置詞を使ってしまう。\n【ここが絶対】be interested in〜は前置詞inが固定された決まった形として覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_17',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nOur coach is very proud ( ) our team's hard work this season.\n① of  ② for  ③ to  ④ with`,
    answer: `① of`,
    hint: `be proud of〜で「〜を誇りに思う」という熟語。`,
    explanation: `【出題意図】
be proud of〜（〜を誇りに思う）の前置詞を問う問題。

【解説】
be proud of〜は「〜を誇りに思う」という意味のイディオムで前置詞 of が固定される。
・① of → be proud of〜（✓）
・② for、③ to、④ with → この熟語では使わない

日本語訳：「私たちのコーチは今シーズンのチームの頑張りをとても誇りに思っている。」

【文法ポイント】
be proud of〜／be full of〜／be made of〜／be afraid of〜など、ofを伴う熟語をまとめて覚える。

【入試頻出】
・She is proud of her singing voice.
・He is afraid of losing the final match.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_18',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nThe rules of this card game are similar ( ) those of chess.\n① with  ② to  ③ as  ④ from`,
    answer: `② to`,
    hint: `be similar to〜で「〜に似ている」という熟語。be different from〜との前置詞の違いに注意。`,
    explanation: `【出題意図】
be similar to〜（〜に似ている）の前置詞を問う問題。be different from〜との混同を防ぐ。

【解説】
be similar to〜は「〜に似ている」という意味で前置詞 to が固定される。be different from〜（〜と異なる）と混同しやすいので注意。
・① with、③ as、④ from → この熟語には使わない（fromはdifferent fromで使う）
・② to → be similar to〜（✓）

日本語訳：「このカードゲームのルールはチェスのルールに似ている。」

【文法ポイント】
be similar to〜（似ている）⇔be different from〜（異なる）。be the same as〜（〜と同じ）も合わせて覚える。

【入試頻出】
・Table tennis is similar to tennis in some ways.
・His playing style is different from his brother's.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_19',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nThe players began to ( ) up by stretching their legs before the game.\n① warm  ② heat  ③ hot  ④ turn`,
    answer: `① warm`,
    hint: `運動前の準備運動を表す句動詞を選ぶ。`,
    explanation: `【出題意図】
句動詞 warm up（準備運動をする）を問う問題。似た意味を持つ紛らわしい語との区別。

【解説】
「試合前に脚をストレッチして〜し始めた」という文脈から、運動前の準備運動を表す warm up を選ぶ。
・① warm → warm up＝準備運動をする（✓）
・② heat up → 物を温めることに使い、人の運動には使わない
・③ hot → 形容詞で動詞ではない
・④ turn up → 「現れる」という意味で文脈に合わない

日本語訳：「選手たちは試合前に脚をストレッチして準備運動を始めた。」

【文法ポイント】
warm up：準備運動をする⇔cool down：整理運動をする。運動関連の句動詞として頻出。

【入試頻出】
・Don't forget to cool down after running.
・We warmed up for ten minutes before the match.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_20',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nWhether we can win the tournament ( ) on how hard we practice this week.\n① depends  ② relies  ③ waits  ④ counts`,
    answer: `① depends`,
    hint: `depend on〜で「〜次第である、〜に左右される」という熟語。`,
    explanation: `【出題意図】
depend on〜（〜次第である、〜による）を問う問題。似た意味の動詞 rely との語法の違いにも触れる。

【解説】
depend on〜は「〜次第である」という意味で、主語が3人称単数（Whether〜という節全体）のときは depends となる。
・① depends → depend on〜（✓）
・② relies → rely on〜で似た意味を持つが、この文の選択肢としてはdependsが自然
・③ waits → 「待つ」で文脈に合わない
・④ counts → count on〜（頼りにする）で意味が異なる

日本語訳：「大会で優勝できるかどうかは、今週どれだけ一生懸命練習するかにかかっている。」

【文法ポイント】
depend on〜＝rely on〜：〜次第である、〜に頼る。Whether〜節が主語のときは3人称単数扱い。

【入試頻出】
・Success depends on daily practice.
・You can always rely on your teammates.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo6_21',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nThe boy ( ) is playing the drums over there is my classmate.\n① who  ② which  ③ whom  ④ whose`,
    answer: `① who`,
    hint: `先行詞は「人」。関係代名詞節内では主語の役割を果たしている。`,
    explanation: `【出題意図】
関係代名詞 who の主格用法を問う問題。

【解説】
先行詞 The boy（少年）は人。関係代名詞節内で is playing の主語になっているので主格の関係代名詞を使う。
・① who → 先行詞が人・主格（✓）
・② which → 物に使う
・③ whom → 人・目的格
・④ whose → 所有格

日本語訳：「あそこでドラムを叩いている少年は私のクラスメートです。」

【文法ポイント】
先行詞が人で関係代名詞節内の主語の働きをするときは who（またはthat）を使う。

【入試頻出】
・The girl who won the singing contest is very shy.
・The man who coaches our team used to be a pro player.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_22',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nThe guitar ( ) my father gave me for my birthday is very old.\n① who  ② which  ③ whom  ④ where`,
    answer: `② which`,
    hint: `先行詞は「物」で、関係代名詞節内で gave の目的語になっている。`,
    explanation: `【出題意図】
関係代名詞 which（先行詞が物・目的格）の用法を問う問題。

【解説】
先行詞 The guitar（ギター）は物。関係代名詞節内で my father gave me ( ) の（　）の位置、つまり gave の直接目的語になっている。
・① who → 人に使う
・② which → 先行詞が物・目的格（✓）
・③ whom → 人に使う
・④ where → 関係副詞

目的格の which は that に置き換え可能で省略も可能。

日本語訳：「父が誕生日にくれたギターはとても古いものだ。」

【文法ポイント】
目的格の関係代名詞は省略できる。The guitar (which/that) my father gave me〜。

【入試頻出】
・The bike (which) I bought last year broke down.
・This is the song (that) she wrote for the contest.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_23',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nThis is the gym ( ) our basketball team practices every day.\n① which  ② who  ③ where  ④ when`,
    answer: `③ where`,
    hint: `先行詞は「場所」。関係副詞を使う。`,
    explanation:
      '【何を聞かれているか】「This is the gym ( ) our basketball team practices every day.」の空所に入る適切な語を選ぶ。\n【なぜwhereになるのか】先行詞the gym（体育館）は場所を表し、関係詞節の中に前置詞（in the gym）が隠れているため、「前置詞＋which」の働きをする関係副詞whereを使う必要があるから。\n【ポイント1】先行詞the gymは場所。節の元の形はour basketball team practices in the gymで、in the gymがwhereに置きかわっている。\n【ポイント2】①which（使うなら前置詞が必要、the gym in which〜）、②who（人に使う）、④when（時を表す先行詞に使う）はどれも文脈に合わない。\n【ポイント3】③where（場所を先行詞にとる関係副詞）が正解。\n【答え】③ where\n【確かめ】whereの節の中に前置詞が抜けている（in the gymのinが不要になっている）ことを確認する。\n【よくあるまちがい】This is the gym which our basketball team practices.のように、whichを前置詞なしで使ってしまう。\n【ここが絶対】関係副詞where＝前置詞＋which。先行詞が場所のときに使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_24',
    subject: 'eigo',
    question: `次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI know a girl.\nHer voice is beautiful when she sings in the chorus.`,
    answer: `I know a girl whose voice is beautiful when she sings in the chorus.`,
    hint: `Her（彼女の）を所有格の関係代名詞 whose に変える。`,
    explanation:
      '【何を聞かれているか】「I know a girl. Her voice is beautiful when she sings in the chorus.」を関係代名詞を使って1文にする。\n【なぜwhoseを使うのか】2つ目の文のHer（彼女の）がa girl（1つ目の文の名詞）の所有を表しているため、この所有の関係を表す所有格の関係代名詞whoseに置きかえる必要があるから。\n【ポイント1】先行詞を特定する：a girl（人）。\n【ポイント2】Her（所有格）をwhoseに置きかえ、先行詞a girlの直後に置く。\n【ポイント3】I know a girl whose voice is beautiful when she sings in the chorus.（私は合唱で歌うと声が美しい女の子を知っている）。\n【答え】I know a girl whose voice is beautiful when she sings in the chorus.\n【確かめ】whoseのあとにvoice（名詞）、is（動詞）と続いているかを確認する。\n【よくあるまちがい】whoseのかわりにwhoを使ってしまう。所有の関係にはwhoseを使う。\n【ここが絶対】whoseは先行詞の所有格を表す関係代名詞。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_25',
    subject: 'eigo',
    question: `次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：What time does the badminton club start practice?\n「あなたはバドミントン部がいつ練習を始めるか知っていますか？」`,
    answer: `Do you know what time the badminton club starts practice?`,
    hint: `間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、does/doは消える。`,
    explanation:
      '【何を聞かれているか】「What time does the badminton club start practice?」（あなたはバドミントン部がいつ練習を始めるか知っていますか？）を間接疑問文に書きかえる。\n【なぜdoesが消えるのか】疑問文が他の文（Do you know〜）の一部に組み込まれると、疑問文特有の助動詞doesを使わず、ふつうの文と同じ〈疑問詞＋主語＋動詞〉の語順に戻すというルールがあるから。\n【ポイント1】疑問詞What timeはそのまま使う。\n【ポイント2】疑問詞の後ろを「主語＋動詞」の平叙文語順に変える。doesは消えて、動詞に3単現のsがつく（starts）。\n【ポイント3】全体をDo you know＋間接疑問の形にする。Do you know what time the badminton club starts practice?\n【答え】Do you know what time the badminton club starts practice?\n【確かめ】doesが消えて、動詞がstartではなくstartsになっているかを確認する。\n【よくあるまちがい】Do you know what time does the club start〜?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の語順は〈疑問詞＋主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_26',
    subject: 'eigo',
    question: `次の（　）内に最も適切な語を選べ。\n\nCould you tell me ( ) many players are needed for one volleyball team?\n① how  ② what  ③ which  ④ where`,
    answer: `① how`,
    hint: `「何人必要か」という数を尋ねる間接疑問文。how manyのセットを考える。`,
    explanation: `【出題意図】
間接疑問文の中で how many〜（数を尋ねる表現）を正しく使えるかを問う問題。

【解説】
「1チームに何人の選手が必要か」という数を尋ねる文なので how many のセットを使う。
・① how → how many players＝何人の選手（✓）
・② what → だけでは how many の意味を作れない
・③ which → 選択
・④ where → 場所を尋ねる語で文脈に合わない

日本語訳：「1つのバレーボールチームには何人の選手が必要か教えていただけますか？」

【文法ポイント】
how many＋複数名詞（数）／how much＋不可算名詞（量・値段）は間接疑問文でもセットのまま使う。

【入試頻出】
・Do you know how many members are in the brass band?
・Can you tell me how much this racket costs?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序、1問は不要語を1語混ぜる）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo6_27',
    subject: 'eigo',
    question: `次の語を並べ替えて正しい英文を作れ。\n（ tell / me / when / the / marathon / starts / can / you ）\n「マラソンがいつ始まるか教えてもらえますか？」`,
    answer: `Can you tell me when the marathon starts?`,
    hint: `間接疑問文：疑問詞（when）の後ろは主語＋動詞の語順。全体はCanで始まる疑問文。`,
    explanation:
      '【何を聞かれているか】tell / me / when / the / marathon / starts / can / you を並べ替えて「マラソンがいつ始まるか教えてもらえますか？」という英文を作る。\n【なぜthe marathon startsという語順になるのか】全体はCan you tell me〜?という疑問文だが、tell meの目的語になる部分（間接疑問）は疑問文の語順ではなく、〈疑問詞（when）＋主語＋動詞〉という平叙文の語順にする必要があるから。\n【ポイント1】全体の骨組みはCan you tell me〜?という疑問文。\n【ポイント2】tell meの目的語（間接疑問）はwhen the marathon starts（疑問文の語順ではなく平叙文語順）。\n【ポイント3】組み立てるとCan you tell me when the marathon starts?になる。\n【答え】Can you tell me when the marathon starts?\n【確かめ】whenのあとがdoes the marathon startではなくthe marathon starts（平叙文語順）になっているかを確認する。\n【よくあるまちがい】Can you tell me when does the marathon start?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の中は、疑問詞のあとを〈主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_28',
    subject: 'eigo',
    question: `次の語を並べ替えて正しい英文を作れ。（1語不要な語が含まれる）\n（ has / for / she / been / since / practicing / piano / the / three / years ）\n「彼女は3年間ずっとピアノを練習し続けている。」`,
    answer: `She has been practicing the piano for three years.`,
    hint: `「3年間ずっと〜している」は現在完了進行形。since は起点を表すときに使う。`,
    explanation: `【出題意図】
現在完了進行形（have been + Ving）の語順と、for（期間）／since（起点）の使い分けを問う問題。不要語の識別も含む。

【解説】
「3年間」は期間（duration）を表すので for を使う。since は起点に使う語句であり、この文脈には合わない。
不要語：since（× I have been practicing the piano since three years → since は不可）

正しい語順：She has been practicing the piano for three years.（現在完了進行形＝have been＋Ving）

日本語訳：「彼女は3年間ずっとピアノを練習し続けている。」

【文法ポイント】
for＋期間（for three years）／since＋起点（since 2020）。現在完了進行形の構造：have/has＋been＋動詞-ing（継続的な動作に使う）。

【入試頻出】
・She has been studying the history of this shrine for ten years.
・They have been practicing the traditional dance since spring.
・I have been collecting old festival photographs for a while.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_29',
    subject: 'eigo',
    question: `次の語を並べ替えて正しい英文を作れ。\n（ old / this / temple / enough / preserved / to / be / is ）\n「この寺は保存されるほど古い。」`,
    answer: `This temple is old enough to be preserved.`,
    hint: `「〜するのに十分〜だ」は 形容詞 + enough + to 動詞 の語順。to の後ろは受動態にもなる。`,
    explanation: `【出題意図】
「形容詞＋enough＋to動詞」の語順を問う整序問題。to の後ろが受動態（to be preserved）になる点も確認する。

【解説】
「〜するのに十分〜だ」は：主語＋be＋形容詞＋enough＋to＋動詞原形の順。「保存される」は受動態なので to be preserved となる。enoughは形容詞の後ろに置く（×enough oldは誤り）。

正しい語順：This temple is old enough to be preserved.

日本語訳：「この寺は保存されるほど古い（＝十分に古い価値がある）。」

【文法ポイント】
形容詞＋enough＋to動詞：「〜するのに十分〜だ」。toの後ろは能動態にも受動態にもなり得る：to be preserved（保存される）、to be seen（見られる）。

【入試頻出】
・This scroll is valuable enough to be displayed in a museum.
・The bridge is strong enough to be used even today.
・The story is famous enough to be known by everyone.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_30',
    subject: 'eigo',
    question: `次の語を並べ替えて正しい英文を作れ。\n（ made / the craftsmen / the villagers / beautiful lanterns ）\n「職人たちは村人たちに美しい提灯を作ってあげた。」`,
    answer: `The craftsmen made the villagers beautiful lanterns.`,
    hint: `make + 人 + 物 の語順（第4文型）を使う。`,
    explanation: `【出題意図】
第4文型（SVOO：主語＋動詞＋間接目的語＋直接目的語）の語順を問う整序問題。make の用法も確認。

【解説】
make＋人＋物＝人のために物を作る（第4文型）
・The craftsmen（S）＋made（V）＋the villagers（IO：間接目的語）＋beautiful lanterns（DO：直接目的語）

語順：The craftsmen made the villagers beautiful lanterns.

第3文型への書き換え：The craftsmen made beautiful lanterns for the villagers.（forを使う）

日本語訳：「職人たちは村人たちに美しい提灯を作ってあげた。」

【文法ポイント】
第4文型（SVOO）の動詞：
・make／buy／get／cook＋人＋物（forで書き換え可）
・give／show／tell＋人＋物（toで書き換え可）

【入試頻出】
・The elder told the children an old legend.
・She bought her grandmother a traditional fan.
・He showed us the ancient map of the castle town.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_31',
    subject: 'eigo',
    question: `次の語を並べ替えて正しい英文を作れ。\n（ after / taking / part / in / the festival / we / walked / to / the temple ）\n「祭りに参加した後、私たちは寺へ歩いて行った。」`,
    answer: `After taking part in the festival, we walked to the temple.`,
    hint: `前置詞 after の後ろには動名詞（〜ing）が来る。`,
    explanation:
      '【何を聞かれているか】after / taking / part / in / the festival / we / walked / to / the temple を並べ替えて「祭りに参加した後、私たちは寺へ歩いて行った。」という英文を作る。\n【なぜafterのあとが動名詞になるのか】前置詞のあとには名詞・動名詞が来るという決まりがあり、不定詞（to＋原形）は前置詞のあとには置けないため、「〜した後で」はafter＋動名詞（〜ing）の形にする必要があるから。\n【ポイント1】前置詞の後ろには名詞・動名詞が来る（不定詞は来ない）。「〜した後で」＝after＋動名詞（〜ing）。\n【ポイント2】take part in（参加する）が動名詞化してtaking part inになる。After taking part in the festival, we walked to the temple.\n【ポイント3】同じパターン：before＋ing（〜する前に）、without＋ing（〜せずに）。\n【答え】After taking part in the festival, we walked to the temple.\n【確かめ】afterのあとがtake（原形）やto take（不定詞）ではなくtaking（動名詞）になっているかを確認する。\n【よくあるまちがい】after to take part inのように、前置詞のあとに不定詞を置いてしまう。\n【ここが絶対】前置詞のあとに動詞を続けるときは必ず動名詞（-ing）にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_32',
    subject: 'eigo',
    question: `次の語を並べ替えて正しい英文を作れ。\n（ the woman / who / taught / us / the traditional dance / turns / eighty / this year ）\n「伝統的な踊りを教えてくれた女性は今年80歳になる。」`,
    answer: `The woman who taught us the traditional dance turns eighty this year.`,
    hint: `関係代名詞 who を使って先行詞「the woman」を修飾する節を作る。`,
    explanation:
      '【何を聞かれているか】the woman / who / taught / us / the traditional dance / turns / eighty / this year を並べ替えて「伝統的な踊りを教えてくれた女性は今年80歳になる。」という英文を作る。\n【なぜwho taughtという語順になるのか】関係代名詞whoを使って、先行詞The womanのうしろにwho taught us the traditional dance（私たちに伝統的な踊りを教えてくれた）という節を置くことで、The womanを説明できるから。\n【ポイント1】文の骨格はThe woman turns eighty this year.（その女性は今年80歳になる）。\n【ポイント2】修飾部はwho taught us the traditional dance（私たちに伝統的な踊りを教えてくれた）。ここでのwhoはtaughtの主語（主格）にあたる。\n【ポイント3】組み合わせるとThe woman who taught us the traditional dance turns eighty this year.になる。主節の動詞（turns）は関係代名詞節のあとに続く。\n【答え】The woman who taught us the traditional dance turns eighty this year.\n【確かめ】関係代名詞節（who taught us the traditional dance）が先行詞The womanの直後に置かれ、そのあとに主節の動詞turnsが続いているかを確認する。\n【よくあるまちがい】関係代名詞節を先行詞から離れた位置に置いてしまう。\n【ここが絶対】関係代名詞節は必ず先行詞の直後に置く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_33',
    subject: 'eigo',
    question: `次の語を並べ替えて正しい英文を作れ。\n（ simple / enough / this story / is / for / all children / to / understand ）\n「この物語はすべての子どもたちが理解できるほどわかりやすい。」`,
    answer: `This story is simple enough for all children to understand.`,
    hint: `「〜が…するのに十分〜だ」は 形容詞 + enough + for + 人 + to 動詞 の形。`,
    explanation:
      '【何を聞かれているか】simple / enough / this story / is / for / all children / to / understand を並べ替えて「この物語はすべての子どもたちが理解できるほどわかりやすい。」という英文を作る。\n【なぜfor＋人が入るのか】「〜が…するのに十分〜だ」と、動作をする人を明示するには、〈形容詞＋enough＋for＋人＋to＋動詞原形〉という構文を使い、for＋人が不定詞の意味上の主語を示すから。\n【ポイント1】構文は主語＋be＋形容詞＋enough＋for＋人＋to＋動詞原形。\n【ポイント2】This story is simple enough for all children to understand.（この物語はすべての子どもたちが理解できるほどわかりやすい）。\n【ポイント3】反対の意味を表す〈too＋形容詞＋for＋人＋to＋動詞〉（〜すぎて…できない）とセットで覚える。\n【答え】This story is simple enough for all children to understand.\n【確かめ】for all childrenがenoughとtoの間に正しく置かれているかを確認する。\n【よくあるまちがい】for all childrenを文の最後に置いてしまう。\n【ここが絶対】「形容詞＋enough＋for＋人＋to＋動詞」の語順を1つのまとまりとして覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 5. 空所補充（対話文・短い長文の空所を埋める）× 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo6_34',
    subject: 'eigo',
    question: `次の対話文の（　）に最も適切なものを選べ。\n\nA: Do you want to join the tennis club with me?\nB: ( ) I've always wanted to try tennis.\n① No, thank you.  ② Sure, why not?  ③ I don't think so.  ④ Never mind.`,
    answer: `② Sure, why not?`,
    hint: `直後の文「ずっとテニスをやってみたかった」と自然につながる前向きな返答を選ぶ。`,
    explanation: `【出題意図】
会話の流れから自然な応答表現を選ぶ問題。誘いに対する肯定的な返答のバリエーションを確認する。

【解説】
Bの発言の後半「I've always wanted to try tennis.（ずっとテニスをやってみたかった）」は前向きな内容。これに自然につながるのは誘いを快く受け入れる②Sure, why not?（もちろん、いいよ）。①No, thank you.は断りの表現で後半と矛盾する。③I don't think so.は否定の意見表明で不自然。④Never mind.は「気にしないで」という意味で誘いへの返答としては不自然。

日本語訳：A「私と一緒にテニス部に入らない？」B「もちろん、いいよ。ずっとテニスをやってみたかったんだ。」

【文法ポイント】
誘いを受け入れる表現：Sure, why not? / That sounds great. / I'd love to. 誘いを断る表現：I'm afraid I can't. / Sorry, I'm busy.

【入試頻出】
・A: Would you like to come to our concert? B: I'd love to!
・A: Shall we go swimming this weekend? B: Sure, that sounds fun.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_35',
    subject: 'eigo',
    question: `次の対話文の（　）に最も適切なものを選べ。\n\nA: How long have you been playing the violin?\nB: ( )\n① For about eight years.  ② At the music hall.  ③ Because I like it.  ④ With my teacher.`,
    answer: `① For about eight years.`,
    hint: `How longは期間を尋ねる疑問詞。forを使った期間の答えを選ぶ。`,
    explanation: `【出題意図】
How long（どのくらいの期間）への適切な応答を選ぶ問題。期間・場所・理由・手段の答え方の違いを確認する。

【解説】
How long have you been playing〜?は継続期間を尋ねる現在完了進行形の疑問文。これにはfor＋期間で答えるのが自然。
・① For about eight years. → 期間を答えている（✓）
・② At the music hall. → 場所（Where）への答え
・③ Because I like it. → 理由（Why）への答え
・④ With my teacher. → 「誰と」への答え

日本語訳：A「バイオリンを弾き始めてどのくらいですか？」B「8年くらいです。」

【文法ポイント】
How long〜?（期間）→for＋期間／since＋起点で答える。How often〜?（頻度）、Why〜?（理由）との疑問詞の使い分けに注意。

【入試頻出】
・A: How long have you been a member of the chess club? B: Since last April.
・A: How long does the game last? B: About two hours.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_36',
    subject: 'eigo',
    question: `次の対話文の（　）に最も適切なものを選べ。\n\nA: Excuse me, could you tell me how to get to the stadium?\nB: Sure. ( ) You'll see it on your left.\n① Go straight and turn right at the second corner.  ② I have never been there.  ③ It was built last year.  ④ I'm watching the game now.`,
    answer: `① Go straight and turn right at the second corner.`,
    hint: `道案内の依頼への応答として、具体的な道順を示す文が続く。`,
    explanation:
      '【何を聞かれているか】「Excuse me, could you tell me how to get to the stadium?」への返答（このあとYou\'ll see it on your left.と続く）に合う表現を選ぶ。\n【なぜ①が正解なのか】Sure.のあとに、Bが「左手に見えます」という結論を述べているため、その間には具体的な道順の説明が入るはずだから。\n【ポイント1】①Go straight and turn right at the second corner.は、道順の説明として自然に続く。\n【ポイント2】②「そこに行ったことがない」、③「去年建てられた」、④「今試合を見ている」はどれも道順の説明になっていない。\n【ポイント3】道案内の表現：Go straight／Turn right(left) at〜／You\'ll see it on your right(left)。\n【答え】① Go straight and turn right at the second corner.\n【確かめ】選んだ返答のあとにYou\'ll see it on your left.が自然に続くかを確認する。\n【よくあるまちがい】道順に関係のない返答を選んでしまう。\n【ここが絶対】道を尋ねる表現how to get to〜への返答には、具体的な道順の説明が続く。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_37',
    subject: 'eigo',
    question: `次の英文の（　）に最も適切な語を選べ。\n\nEvery Saturday, I go to the park to practice photography. I especially enjoy taking pictures ( ) birds flying over the lake.\n① of  ② at  ③ to  ④ by`,
    answer: `① of`,
    hint: `take a picture of〜で「〜の写真を撮る」という熟語。`,
    explanation: `【出題意図】
take a picture[pictures] of〜（〜の写真を撮る）という熟語の前置詞を問う問題。

【解説】
take pictures of〜は「〜の写真を撮る」という意味で前置詞ofが固定される。
・① of → take pictures of〜（✓）
・② at、③ to、④ by → この熟語には使わない

日本語訳：「毎週土曜日、私は写真の練習をしに公園へ行く。特に湖の上を飛ぶ鳥の写真を撮るのが好きだ。」

【文法ポイント】
take a picture of〜/take a photo of〜：〜の写真を撮る。趣味・活動を説明する文でよく使われる表現。

【入試頻出】
・She loves taking pictures of flowers in the garden.
・He took a photo of the sunset over the mountains.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_38',
    subject: 'eigo',
    question: `次の対話文の（　）に最も適切な語を選べ。\n\nA: Which do you like ( ), playing soccer or watching it on TV?\nB: I like playing it much better. Actually playing is more exciting for me.\n① good  ② better  ③ best  ④ well`,
    answer: `② better`,
    hint: `Which do you like better, A or B?で「AとBのどちらが好きか」という比較表現。`,
    explanation:
      '【何を聞かれているか】「Which do you like ( ), playing soccer or watching it on TV?」の空所に入る適切な語を選ぶ。\n【なぜbetterになるのか】2つのものを比べて「どちらが好きか」を尋ねるときは、good/wellの比較級betterを使うという決まりがあるから。\n【ポイント1】Which do you like better, A or B?は「AとBのどちらが好きか」という2者を比べる表現。\n【ポイント2】①good、④well（原級）、③best（最上級、3つ以上を比べるとき）はどれもこの2者比較には合わない。\n【ポイント3】②better（2者比較）が正解。good/wellの比較変化：good/well→better→best。\n【答え】② better\n【確かめ】playing soccerとwatching it on TVという2つのものを比べていることから、比較級betterが正しいことを確認する。\n【よくあるまちがい】3つ以上を比べるときに使うbestを、2者比較に使ってしまう。\n【ここが絶対】2者を比べるときはbetter、3つ以上を比べるときはbestを使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_39',
    subject: 'eigo',
    question: `次の対話文の（　）に最も適切なものを選べ。\n\nA: I can't play the guitar very well yet.\nB: ( ) I've only been practicing for a month.\n① So can I.  ② Neither can I.  ③ So do I.  ④ Neither do I.`,
    answer: `② Neither can I.`,
    hint: `「私も〜できない」と否定の内容に同意する表現。canを使った文への同意を考える。`,
    explanation: `【出題意図】
否定文への同意表現Neither can I.（私も〜できない）の形を問う問題。同意表現So〜/Neither〜の使い分けが目標。

【解説】
Aの発言"I can't play the guitar very well yet."は否定文でcanを使っている。これに「私もそうです」と同意するには、Neither＋助動詞＋主語の形を使う。
・① So can I. → 肯定文への同意
・③ So do I. → 肯定文かつdoはcanと合わない
・④ Neither do I. → 否定文への同意だが、動詞はdoではなくcanを使うべき文脈
・② Neither can I. → 否定文（can）への同意（✓）

日本語訳：A「まだギターがあまり上手に弾けないんだ。」B「私もだよ。まだ1ヶ月しか練習していないから。」

【文法ポイント】
肯定文への同意：So＋助動詞/be動詞＋主語（＝私も〜です）。否定文への同意：Neither＋助動詞/be動詞＋主語（＝私も〜ではありません）。使う助動詞は前の文の動詞の種類に合わせる。

【入試頻出】
・A: I like classical music. B: So do I.
・A: I don't have a piano at home. B: Neither do I.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_40',
    subject: 'eigo',
    question: `次の英文の（　）に最も適切な語を選べ。\n\nMy grandfather taught me how to fish when I was young. ( ) then, fishing has been my favorite hobby.\n① Since  ② For  ③ During  ④ At`,
    answer: `① Since`,
    hint: `「それ以来ずっと」という現在完了の継続を示す起点を表す語を選ぶ。`,
    explanation:
      '【何を聞かれているか】「My grandfather taught me how to fish when I was young. ( ) then, fishing has been my favorite hobby.」の空所に入る適切な語を選ぶ。\n【なぜSinceになるのか】has been（現在完了）という継続を表す動詞とともに「それ以来」という起点を示すには、sinceを使う必要があるから。\n【ポイント1】since then＝それ以来。現在完了（継続）の文でsince＋起点を示す語句とセットで使う。\n【ポイント2】②For（期間を表し、後ろに具体的な期間が必要でthenとは組み合わせない）、③During（後ろに期間の名詞が必要）、④At（時点は表せるが「それ以来」の意味は出せない）はどれも文脈に合わない。\n【ポイント3】①Since（since thenの形）が正解。「それ以来、釣りは私の一番好きな趣味だ」という意味になる。\n【答え】① Since\n【確かめ】has beenという現在完了の継続用法と、since thenの組み合わせがセットになっていることを確認する。\n【よくあるまちがい】期間を表すForを、起点を表すべき場所に使ってしまう。\n【ここが絶対】現在完了（継続）の文で「それ以来」を表すときはsince thenを使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_41',
    subject: 'eigo',
    question: `次の対話文の（　）に最も適切なものを選べ。\n\nA: We still have an hour before the concert starts.\nB: ( ) grab something to eat at that cafe?\n① Why don't we  ② How do we  ③ What about I  ④ Should I`,
    answer: `① Why don't we`,
    hint: `「〜しませんか」という提案の決まった表現を選ぶ。`,
    explanation: `【出題意図】
提案表現Why don't we〜?（〜しませんか）を問う問題。

【解説】
「コンサートまでまだ1時間ある」という文脈から、「あのカフェで何か食べませんか」と提案する流れが自然。Why don't we＋動詞原形?は「〜しませんか」という提案の定型表現。
・① Why don't we → 提案表現（✓）
・② How do we → この意味では使わない
・③ What about I → 主語が不自然（What about＋動名詞/名詞が正しい形）
・④ Should I → 「私は〜すべきですか」という意味で提案にはならない

日本語訳：A「コンサートが始まるまでまだ1時間あるね。」B「あのカフェで何か食べない？」

【文法ポイント】
提案の表現：Why don't we[you]〜?/Let's〜/How about〜ing?/What about〜ing?

【入試頻出】
・Why don't we practice together after school?
・How about joining the chorus club?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo6_42',
    subject: 'eigo',
    question: `次の日本語を英語にしなさい。\n\n「私は毎日30分間ピアノを練習しています。」`,
    answer: `I practice the piano for thirty minutes every day.`,
    hint: `「毎日」という習慣を表すので現在形を使う。「〜の間」はforを使う。`,
    explanation: `【出題意図】
現在形で習慣を表す文と、期間を表すfor＋時間の組み合わせを問う英作文問題。

【解説】
「毎日〜している」は習慣を表すので現在形practiceを使う（主語Iなので3単現のsは不要）。「30分間」は期間なのでfor thirty minutesとする。practice the piano（ピアノを練習する）のように楽器の前には定冠詞theを付ける。
組み立てると：I practice the piano for thirty minutes every day.

【文法ポイント】
習慣・日常の行動は現在形で表す。楽器名の前にはthe（play the piano/play the guitar）。期間はfor＋数詞＋時間の単位。

【入試頻出】
・She practices swimming for one hour every morning.
・He plays the violin for two hours every weekend.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_43',
    subject: 'eigo',
    question: `次の日本語を英語にしなさい。\n\n「あなたはこれまでにサッカーの試合を見に行ったことがありますか。」`,
    answer: `Have you ever been to a soccer game?`,
    hint: `「これまでに〜したことがありますか」は現在完了の経験用法。everの位置に注意。`,
    explanation: `【出題意図】
現在完了（経験用法）の疑問文とever（これまでに）の使い方を問う英作文問題。

【解説】
「これまでに〜したことがありますか」は現在完了の経験用法Have you ever＋過去分詞〜?で表す。「試合を見に行く」はbe動詞を使ったbeen toで「〜へ行ったことがある」という意味を作れる（have gone toは「行ってしまって今ここにいない」という意味になるため、経験にはbeenを使う）。
組み立てると：Have you ever been to a soccer game?

【文法ポイント】
現在完了の経験用法：have/has＋ever＋過去分詞〜?（疑問文）、have never＋過去分詞（否定）。been to〜（〜に行ったことがある）とgone to〜（〜に行ってしまった）の違いに注意。

【入試頻出】
・Have you ever been to a live concert?
・I have never watched a professional baseball game.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_44',
    subject: 'eigo',
    question: `次の日本語を英語にしなさい。\n\n「彼女が描いたその絵はとても美しく見えた。」`,
    answer: `The picture she painted looked very beautiful.`,
    hint: `関係代名詞を使って「彼女が描いた」で「その絵」を後ろから修飾する。lookの後には形容詞が続く。`,
    explanation:
      '【何を聞かれているか】「彼女が描いたその絵はとても美しく見えた。」を英語に訳す。\n【なぜlook＋形容詞を使うのか】「〜に見える」という意味はlook＋形容詞で表し、副詞ではなく形容詞を続けるという決まりがあるから。「彼女が描いた」という説明は、the pictureのうしろに関係代名詞（目的格）でpainted節をつなげて表す。\n【ポイント1】「彼女が描いたその絵」＝the picture (that/which) she painted（関係代名詞・目的格、省略も可）。\n【ポイント2】「〜に見えた」＝look＋形容詞の過去形looked＋beautiful。lookのあとは形容詞であって副詞（beautifully）ではない。\n【ポイント3】組み合わせるとThe picture (that) she painted looked very beautiful.になる。\n【答え】The picture she painted looked very beautiful.\n【確かめ】lookedのあとにbeautiful（形容詞）が続いており、beautifully（副詞）になっていないかを確認する。\n【よくあるまちがい】look beautifullyのように、lookのあとに副詞を続けてしまう。\n【ここが絶対】look、sound、seemなどのあとには形容詞を続ける。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_45',
    subject: 'eigo',
    question: `次の日本語を英語にしなさい。\n\n「もし明日晴れたら、私たちは公園でバドミントンをするつもりです。」`,
    answer: `If it is sunny tomorrow, we will play badminton in the park.`,
    hint: `条件を表すif節の中は未来のことでも現在形を使う。`,
    explanation:
      '【何を聞かれているか】「もし明日晴れたら、私たちは公園でバドミントンをするつもりです。」を英語に訳す。\n【なぜif節が現在形になるのか】実現可能な未来の条件を表す条件文では、if節の中は未来のことでも現在形を使い、主節でwillを使って未来を表すという決まりがあるから。\n【ポイント1】条件文の形：If＋主語＋現在形〜, 主語＋will＋動詞原形〜。if節の中では未来のことでも現在形を使う。\n【ポイント2】「もし明日晴れたら」＝If it is sunny tomorrow（現在形is）。\n【ポイント3】If it is sunny tomorrow, we will play badminton in the park.\n【答え】If it is sunny tomorrow, we will play badminton in the park.\n【確かめ】if節の動詞がis（現在形）になっており、willがisではなくplayの前についていることを確認する。\n【よくあるまちがい】if節の中にwillを入れてIf it will be sunny tomorrowとしてしまう。\n【ここが絶対】実現可能な条件を表すif節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_46',
    subject: 'eigo',
    question: `次の日本語を英語にしなさい。\n\n「私の弟は将来、有名なドラマーになりたいと思っている。」`,
    answer: `My brother wants to become a famous drummer in the future.`,
    hint: `want to〜（〜したい）という不定詞の名詞的用法を使う。`,
    explanation: `【出題意図】
want to＋動詞原形（〜したい）という不定詞の名詞的用法を用いた英作文問題。

【解説】
「〜になりたいと思っている」はwant to become〜（〜になりたい）で表す。主語My brotherは3人称単数なのでwantに3単現のsをつける。「将来」はin the futureで表す。
組み立てると：My brother wants to become a famous drummer in the future.

【文法ポイント】
want to＋動詞原形：〜したい。主語が3人称単数のときは動詞にsをつけ忘れないこと（wants）。in the future（将来）は文末に置くことが多い。

【入試頻出】
・She wants to become a professional dancer.
・He hopes to join the national swimming team someday.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題など）× 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo6_47',
    subject: 'eigo',
    passage: `Last spring, our school started a new brass band club. At first, only eight students joined, and nobody could play their instruments very well. Ms. Tanaka, our music teacher, practiced with us every day after school. She always said, "It's okay to make mistakes. Just keep trying." After six months of hard practice, we performed at the school festival. Many students and parents came to listen, and they gave us a big round of applause. Now more than thirty students want to join the club next year. I am so happy that I didn't give up when playing the trumpet was difficult for me.`,
    question: `本文の内容と一致するものを選べ。\n① The brass band club had thirty members from the beginning.\n② Ms. Tanaka told the students never to make mistakes.\n③ The club performed at the school festival after months of practice.\n④ No one wanted to join the club after the performance.`,
    answer: `③ The club performed at the school festival after months of practice.`,
    hint: `6ヶ月間の練習の後に何をしたかという文に注目する。`,
    explanation:
      '【何を聞かれているか】吹奏楽部についての長文を読んで、本文の内容と一致するものを選ぶ。\n【なぜ③が正解なのか】本文に"After six months of hard practice, we performed at the school festival."（6ヶ月の猛練習の後、学校祭で演奏した）とあり、これが③「クラブは数ヶ月の練習の後、学校祭で演奏した」と一致するから。\n【ポイント1】①「最初から30人」は誤り。本文では最初は8人しか入部しなかったと書かれている。\n【ポイント2】②「ミスをするな」は誤り。本文では田中先生が"It\'s okay to make mistakes."（ミスをしてもいい）と真逆のことを言っている。\n【ポイント3】④「発表後誰も入部したがらなかった」は誤り。本文では来年30人以上が入部を希望していると書かれている。\n【答え】③ The club performed at the school festival after months of practice.\n【確かめ】本文の該当箇所（After six months of hard practice, we performed〜）と選択肢③が一致していることを確認する。\n【よくあるまちがい】本文の一部分だけを見て、数値や内容が逆になっている選択肢を選んでしまう。\n【ここが絶対】内容一致問題では、時を表す語句（At first、After〜、Now）に注目して出来事の順序を正確に整理する。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_48',
    subject: 'eigo',
    passage: `Kenta started running three years ago because his doctor told him to get more exercise. In the beginning, he could barely run for five minutes without stopping. He decided to run a little every morning before breakfast, even on rainy days. Little by little, his body got stronger, and running became something he really enjoyed. Last month, he finished his first full marathon in under five hours. When people ask him how he did it, he always says, "I never tried to run fast. I just tried not to quit." Now Kenta is training for another marathon and hopes to help his friends start running, too.`,
    question: `本文中の "how he did it" の it が指す内容として最も適切なものを選べ。\n① start running every morning\n② finish a full marathon\n③ visit the doctor\n④ enjoy rainy days`,
    answer: `② finish a full marathon`,
    hint: `直前の文で健太が達成した出来事を確認する。`,
    explanation: `【出題意図】
指示語（it）が指す内容を文脈から正確に特定する問題。

【解説】
"how he did it"のitは、直前の文"Last month, he finished his first full marathon in under five hours."（先月、彼は初めてのフルマラソンを5時間以内で完走した）を指しており、「どうやってそれ（フルマラソン完走）を成し遂げたのか」という意味になる。①「毎朝走り始めること」は原因であり、itが指す「成し遂げたこと」ではない。③④は本文の内容と無関係。

日本語訳：「健太は3年前、医者にもっと運動するように言われて走り始めた。最初は5分も休まずに走れなかった。彼は雨の日でも毎朝朝食前に少しずつ走ることに決めた。少しずつ体が強くなり、走ることが本当に楽しいものになった。先月、彼は初めてのフルマラソンを5時間以内で完走した。どうやってそれを成し遂げたのか尋ねられると、彼はいつも『速く走ろうとしたことは一度もない。ただやめないようにしただけだ』と言う。今、健太は次のマラソンに向けて練習していて、友達も走り始める手助けをしたいと思っている。」

【文法ポイント】
指示語問題は必ず直前（まれに直後）の文・句を確認し、代入して意味が通るか確かめる。

【入試頻出】
長文中のit/this/thatが指す内容を選ぶ問題は頻出。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_49',
    subject: 'eigo',
    passage: `Many people think you need an expensive camera to take good pictures, but Mai doesn't agree. She joined her school's photography club two years ago and uses only her smartphone. Every weekend, she walks around her neighborhood and takes pictures of small things other people usually miss, like raindrops on leaves or the shadow of a bicycle. Last year, one of her photos won first prize in a city contest. Mai says, "A good picture isn't about the camera. It's about really looking at the world around you and noticing something beautiful." Her club members now spend more time looking carefully before they press the button.`,
    question: `この文章の主題として最も適切なものを選べ。\n① Expensive cameras always take the best pictures.\n② Mai won a photography contest by using a special camera.\n③ Paying close attention to the world is more important than equipment.\n④ Mai's club stopped taking pictures of small things.`,
    answer: `③ Paying close attention to the world is more important than equipment.`,
    hint: `舞の発言「良い写真はカメラではなく、周りの世界をよく見ることだ」に注目する。`,
    explanation:
      '【何を聞かれているか】写真部の舞についての長文を読んで、この文章の主題として最も適切なものを選ぶ。\n【なぜ③が正解なのか】本文は「高価なカメラがなくても、身の回りをよく観察することで良い写真が撮れる」という舞のエピソードを通して、機材よりも観察力が大切だと伝えており、これが③「世界をよく観察することは機材よりも重要だ」と一致するから。\n【ポイント1】①「高価なカメラが常に一番良い写真を撮る」は本文の主張（高価なカメラが必須ではない）と正反対。\n【ポイント2】②「特別なカメラを使って優勝した」は誤り。本文では舞はスマートフォンだけを使っていると書かれている。④「小さなものの写真をやめた」も本文と矛盾する（部員は今もよく観察してから撮っている）。\n【ポイント3】具体例（スマートフォン、雨粒、自転車の影）から共通する一般的なメッセージ（観察力の大切さ）を読み取る。\n【答え】③ Paying close attention to the world is more important than equipment.\n【確かめ】選んだ選択肢が、本文の具体例に共通する一般的なメッセージと一致しているかを確認する。\n【よくあるまちがい】本文の具体的なエピソード（優勝した、スマホを使った）だけを見て、主題を取り違えてしまう。\n【ここが絶対】主題把握問題では、具体例に共通する一般的なメッセージ（筆者の言いたいこと）を探す。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo6_50',
    subject: 'eigo',
    passage: `When Sora joined the volleyball team in April, she was the shortest player and often felt nervous during practice. Her teammates never made fun of her; instead, they taught her how to move quickly and read the ball's direction. By using her speed instead of her height, Sora became an important defensive player for the team. In the final match of the tournament, she saved three difficult balls that helped her team win. After the game, her captain told her, "You proved that size isn't everything in this sport." Sora now looks forward to every practice and hopes to become a captain herself one day.`,
    question: `本文の内容と一致するものを選べ。\n① Sora quit the volleyball team because she was too short.\n② Sora's teammates laughed at her when she joined.\n③ Sora used her speed to become a key defensive player.\n④ Sora's team lost the final match of the tournament.`,
    answer: `③ Sora used her speed to become a key defensive player.`,
    hint: `空（そら）がどのように自分の弱点を克服したかという部分に注目する。`,
    explanation: `【出題意図】
長文の内容一致問題。因果関係（身長の低さ→スピードを生かす→守備の要になる）を正確に読み取れているかを確認する。

【解説】
本文には「By using her speed instead of her height, Sora became an important defensive player for the team.（身長の代わりにスピードを生かすことで、空はチームの重要な守備選手になった）」とあり、③と一致する。①「短すぎてチームを辞めた」は本文になく誤り。②「入部したときチームメートに笑われた」は本文の"Her teammates never made fun of her"と正反対。④「決勝で負けた」は誤りで、本文では彼女がチームの勝利に貢献したと書かれている。

日本語訳：「4月にバレーボール部に入ったとき、空は一番背が低い選手で、練習中よく緊張していた。チームメートは彼女をからかうことは決してなく、代わりに素早く動く方法やボールの方向を読む方法を教えてくれた。身長の代わりにスピードを生かすことで、空はチームの重要な守備選手になった。トーナメントの決勝戦で、彼女はチームの勝利につながる3本の難しいボールを拾った。試合後、キャプテンは彼女に『このスポーツでは体の大きさがすべてじゃないって証明したね』と言った。空は今、毎回の練習が楽しみで、いつか自分がキャプテンになりたいと思っている。」

【文法ポイント】
内容一致問題は、本文の因果関係（〜によって〜になった）や比較（〜ではなく〜）の表現に注意して選択肢と照合する。

【入試頻出】
長文中のinstead of〜（〜の代わりに）、by〜ing（〜することによって）などの表現に注目した内容把握問題は頻出。`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
