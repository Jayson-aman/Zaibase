import type { Question } from './questions';

export const kokoNyushiEigo11: Question[] = [
  // ============================================================
  // 1. 文法（時制・助動詞・受動態・比較・不定詞・動名詞）× 12問
  // ============================================================
  {
    id: 'koko_nyushi_eigo11_01',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  By the time the fireworks started, we ( ) in line for three hours.',
    choices: ['① wait', '② waited', '③ have waited', '④ had been waiting'],
    answer: '④ had been waiting',
    hint: '「花火が始まったとき」という過去の時点より前から続いていた動作を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「By the time the fireworks started, we ( ) in line for three hours.」の空所に入る適切な時制を選ぶ。\n【なぜhad been waitingになるのか】「花火が始まった」という過去の時点よりさらに前から「列に並び続けていた」という継続動作を表すには、過去完了進行形（had been＋動詞のing形）を使う必要があるから。\n【ポイント1】the fireworks started（花火が始まった）は過去の1つの時点。その時点よりも前から継続していた動作を表すには、さらに過去を示す時制が必要。\n【ポイント2】①wait（原形）、②waited（過去形、単発の動作に見え継続の意味が弱い）、③have waited（現在完了、過去の基準点には使えない）はどれも文脈に合わない。\n【ポイント3】④had been waiting（過去完了進行形）が正解。「花火が始まったときには、私たちは3時間も列に並び続けていた」という意味になる。\n【答え】④ had been waiting\n【確かめ】「for three hours」という継続の期間を表す語句と、過去完了進行形の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】have waited（現在完了形）を選んでしまう。現在完了は現在を基準にするので、過去の基準点には使えない。\n【ここが絶対】過去のある時点よりもさらに前から、その時点まで継続していた動作には過去完了進行形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_02',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  According to Japanese tradition, visitors ( ) bow twice, clap twice, and bow once more at a Shinto shrine.',
    choices: ['① can', '② should', '③ will', '④ used to'],
    answer: '② should',
    hint: '法律ではなく「慣習・作法」として推奨される行動を表す助動詞を選ぶ。',
    explanation: `【出題意図】
助動詞の意味の違い（能力・許可 can／推奨 should／未来 will／過去の習慣 used to）を問う問題。文脈に合う「慣習としての推奨」を識別する力を測る。

【解説】
「According to Japanese tradition（日本の伝統によると）」は慣習・作法の紹介であり、絶対的な義務ではなく「〜するのが望ましい」という推奨のニュアンス。
・① can → 能力・許可（「〜できる」）で文脈に合わない
・② should → 慣習・作法としての推奨「〜するとよい」（✓）
・③ will → 単純未来（「〜するだろう」）で文脈に合わない
・④ used to → 過去の習慣（現在は行われていない含みが出るため不適切）

日本語訳：「日本の伝統によると、参拝者は神社で二礼二拍手一礼をするとよい。」

【文法ポイント】
should：義務より軽い推奨・アドバイス、慣習の紹介にも使う
must：話者の強い主観的義務
used to：過去に繰り返していたが今はしていない習慣

【入試頻出】
・Visitors should remove their shoes before entering a temple.
・You should try the local food when you travel.
・He used to visit the shrine every New Year, but he doesn't anymore.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_03',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語形を選べ。  This ancient scroll ( ) very carefully because it is over five hundred years old.',
    choices: ['① handles', '② is handled', '③ was handled', '④ has handled'],
    answer: '② is handled',
    hint: '巻物は「扱う」側ではなく「扱われる」側。現在の一般的な事実を表す受動態を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の現在形を問う問題。主語が「動作を受ける側」であることの識別が目標。

【解説】
主語「This ancient scroll（この古い巻物）」は人が「扱う」対象であり、自ら「扱う」ことはできないので受動態が必要。「because it is over five hundred years old」という現在の一般的事実に合わせて現在形にする。
・① handles → 能動態（主語が人のときに使う形で不適切）
・② is handled → 受動態・現在形（✓）
・③ was handled → 受動態・過去形（現在の一般的な扱いには合わない）
・④ has handled → 現在完了・能動態（意味が通らない）

日本語訳：「この古い巻物は500年以上前のものなので、とても慎重に扱われる。」

【文法ポイント】
受動態の基本形：is/am/are + 過去分詞（現在）、was/were + 過去分詞（過去）
物・文化財が主語のとき受動態になりやすい。

【入試頻出】
・This kimono is kept in a special box.
・These old documents are stored in the museum.
・The statue is protected by a glass case.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_04',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Kinkaku-ji is one of ( ) temples in Kyoto.',
    choices: ['① famous', '② more famous', '③ the most famous', '④ most famous'],
    answer: '③ the most famous',
    hint: '「one of ＋最上級＋複数名詞」という定型表現。最上級には the が必要。',
    explanation:
      '【何を聞かれているか】「Kinkaku-ji is one of ( ) temples in Kyoto.」の空所に入る適切な比較表現を選ぶ。\n【なぜthe most famousになるのか】「one of〜（〜のうちの1つ）」のあとには「the＋最上級＋複数名詞」という決まった形が続くから。\n【ポイント1】①famous（原級）、②more famous（比較級）はどちらもone ofと組み合わせて「最も〜な…のうちの1つ」を表せない。\n【ポイント2】③the most famous（最上級＋the）が正解。\n【ポイント3】④most famous（theが欠けている）は不完全な形。famousのような長い形容詞はmore/mostを使う。\n【答え】③ the most famous\n【確かめ】the most famousのtheが抜けていないかを確認する。\n【よくあるまちがい】④most famousのようにtheをつけ忘れてしまう。\n【ここが絶対】one of the＋最上級＋複数名詞＝「最も〜な…のうちの1つ」という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_05',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Many tourists visit Nara ( ) the ancient temples and feed the deer.',
    choices: ['① for see', '② so see', '③ to see', '④ seeing'],
    answer: '③ to see',
    hint: '「〜するために」という目的を表す不定詞の副詞的用法。',
    explanation: `【出題意図】
不定詞の副詞的用法「〜するために（目的）」を問う問題。前置詞や接続詞との混同を防ぐ。

【解説】
「奈良を訪れる」目的を表す文。「古い寺を見て、鹿にエサをやるために」は不定詞の副詞的用法（目的）で表す。
・① for see → for の後ろに動詞原形は来ない（誤り）
・② so see → so だけでは目的を表せない（so that が必要）
・③ to see → to + 動詞原形で「〜するために」（✓）
・④ seeing → 動名詞（目的の意味を表す形にはならない）

日本語訳：「多くの観光客が古い寺を見て鹿にエサをやるために奈良を訪れる。」

【文法ポイント】
不定詞の副詞的用法（目的）：主語 + 動詞 + 目的語 + to + 動詞原形〜
例：I went to the museum to learn about history.

【入試頻出】
・People come from all over the world to see this festival.
・She visited the shrine to pray for good luck.
・He studied Japanese history to understand the old capital.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_06',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The craftsman finished ( ) the lacquerware by hand, just as his ancestors had done.',
    choices: ['① paint', '② to paint', '③ painting', '④ painted'],
    answer: '③ painting',
    hint: 'finish の後ろには動名詞（〜ing）が来る。',
    explanation:
      '【何を聞かれているか】「The craftsman finished ( ) the lacquerware by hand, just as his ancestors had done.」の空所に入る適切な形を選ぶ。\n【なぜpaintingになるのか】finishは動名詞（-ing）だけを目的語に取り、不定詞（to＋原形）は目的語に取らないという決まりがあるから。\n【ポイント1】①paint（原形）、②to paint（不定詞）はどちらもfinishの後ろには使えない。\n【ポイント2】③painting（動名詞）が正解。finish＋動名詞の形。\n【ポイント3】④painted（過去形）は目的語の位置には使えない。動名詞のみを目的語に取る動詞にはほかにenjoy、stop、practice、give up、avoidなどがある。\n【答え】③ painting\n【確かめ】finishのあとが動詞のing形になっているかを確認する。\n【よくあるまちがい】finishのあとにto paintを続けてしまう。\n【ここが絶対】finishは動名詞のみを目的語に取る動詞として覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_07',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  By 2030, this shrine ( ) for exactly one thousand years.',
    choices: ['① will stand', '② will have stood', '③ has stood', '④ stood'],
    answer: '② will have stood',
    hint: '「2030年までには」という未来の時点での継続の完了を表す時制を選ぶ。',
    explanation:
      '【何を聞かれているか】「By 2030, this shrine ( ) for exactly one thousand years.」の空所に入る適切な時制を選ぶ。\n【なぜwill have stoodになるのか】「2030年までには」という未来のある時点で「ちょうど1000年間建ち続けていることになる」という継続の完了を表すには、未来完了形（will have＋過去分詞）を使う必要があるから。\n【ポイント1】By 2030（2030年までには）は未来の時点を示す表現。\n【ポイント2】①will stand（単純未来、継続の完了を表せない）、③has stood（現在完了、未来の時点には使えない）、④stood（過去形）はどれも文脈に合わない。\n【ポイント3】②will have stood（未来完了）が正解。目印はby〜、by the time〜、by thenなど。\n【答え】② will have stood\n【確かめ】By 2030という未来の時点を示す語句と、will have＋過去分詞の組み合わせがセットになっていることを確認する。\n【よくあるまちがい】has stood（現在完了）を選んでしまう。現在完了は現在を基準にするので、未来の時点には使えない。\n【ここが絶対】未来のある時点での継続の完了にはwill have＋過去分詞（未来完了形）を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_08',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  If the weather ( ) fine on the day of the festival, more people will come to see the parade.',
    choices: ['① is', '② will be', '③ was', '④ has been'],
    answer: '① is',
    hint: '条件を表す if 節の中では、未来のことでも現在形を使う。',
    explanation:
      '【何を聞かれているか】「If the weather ( ) fine on the day of the festival, more people will come to see the parade.」の空所に入る適切な語を選ぶ。\n【なぜisになるのか】条件を表すif節の中では、未来のことでもwillを使わず現在形を使うという決まりがあるから。\n【ポイント1】if節などの副詞節の中では、未来のことでも現在形で表す。②will beはif節の中では使えない。\n【ポイント2】③was（過去形、仮定法過去に見えてしまい文意に合わない）、④has been（現在完了、未来の一時点の天気には不自然）はどちらも誤り。\n【ポイント3】①is（現在形）が正解。「もし祭りの日に天気が良ければ」という条件を表す。\n【答え】① is\n【確かめ】主節にwillが使われている（more people will come）ことと、if節が現在形（is）になっていることのバランスを確認する。\n【よくあるまちがい】if節の中にもwillを入れてしまう。\n【ここが絶対】時・条件を表す副詞節の中では、未来のことでも現在形を使う。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_09',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The castle ( ) by fire during a war in the sixteenth century, and it was later rebuilt.',
    choices: ['① destroys', '② was destroyed', '③ destroyed', '④ has destroyed'],
    answer: '② was destroyed',
    hint: '城は「破壊する」側ではなく「破壊される」側。過去の出来事を表す受動態を選ぶ。',
    explanation: `【出題意図】
受動態（be動詞＋過去分詞）の過去形を問う問題。能動態との混同を防ぐ。

【解説】
主語「The castle（その城）」は「破壊する」側ではなく「破壊される」側。「during a war in the sixteenth century（16世紀の戦の間に）」という過去の出来事なので過去形の受動態を使う。
・① destroys → 能動態・現在形（主語が城では意味が通らない）
・② was destroyed → 受動態・過去形（✓）
・③ destroyed → 能動態・過去形（城が破壊「した」ことになり不自然）
・④ has destroyed → 現在完了・能動態（意味が通らない）

日本語訳：「その城は16世紀の戦の間に火事で破壊され、後に再建された。」

【文法ポイント】
受動態の過去形：was/were + 過去分詞
by〜（〜によって）で原因や行為者を示すこともできる（by fire, by an earthquake など）。

【入試頻出】
・The temple was burned down during the war.
・This bridge was built over three hundred years ago.
・Many old houses were damaged by the earthquake.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_10',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This shrine is ( ) than the one we visited yesterday.',
    choices: ['① old', '② more old', '③ older', '④ oldest'],
    answer: '③ older',
    hint: '2つのものを比べるときは比較級（-er）を使う。than が手がかり。',
    explanation: `【出題意図】
比較級の形（-er型 / more型）を正確に使えるかを問う問題。than との組み合わせも確認する。

【解説】
than があれば比較級が必要。old は1音節の形容詞なので -er 型で比較級を作る。
・① old → 原級（than とセットでは使えない）
・② more old → 誤った比較級（1音節の形容詞に more は使わない）
・③ older → 正しい比較級（✓）
・④ oldest → 最上級（than とセットでは使わない）

日本語訳：「この神社は私たちが昨日訪れた神社よりも古い。」

【文法ポイント】
比較級の形：
・1音節：-er（old→older, tall→taller）
・3音節以上・2音節の一部：more +形容詞（beautiful→more beautiful）

【入試頻出】
・This festival is older than that one.
・The new museum is bigger than the old one.
・Her kimono is more colorful than mine.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_11',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  She wants ( ) a traditional dancer when she grows up.',
    choices: ['① be', '② being', '③ to be', '④ to being'],
    answer: '③ to be',
    hint: 'want の後ろに来る不定詞の名詞的用法（〜したい）を選ぶ。',
    explanation: `【出題意図】
不定詞の名詞的用法（want to + 動詞原形）の形を正確に使えるかを問う問題。

【解説】
want は「〜したい」という意味で、後ろに不定詞（to + 動詞原形）を取る。
・① be → 原形のみ（want の後ろに動詞原形は直接来ない）
・② being → 動名詞（want は動名詞を目的語に取らない）
・③ to be → 不定詞（✓）want to be〜 = 〜になりたい
・④ to being → to + 動名詞（存在しない形）

日本語訳：「彼女は大人になったら伝統的な踊り手になりたいと思っている。」

【文法ポイント】
不定詞のみを目的語に取る動詞（want / hope / wish / decide / plan + to 動詞）
want to be〜：〜になりたい（職業や役割を表すのに頻出）

【入試頻出】
・He wants to become a festival organizer.
・She hopes to learn the traditional tea ceremony.
・They decided to join the local history club.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_12',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  ( ) folk songs at the summer festival is one of my happiest childhood memories.',
    choices: ['① Sing', '② To sing', '③ Singing', '④ Sung'],
    answer: '③ Singing',
    hint: '文全体の主語になる形を選ぶ。動名詞は主語になれる。',
    explanation: `【出題意図】
動名詞が文の主語になれることを問う問題。原形・不定詞・過去分詞との識別も含む。

【解説】
この文は「（  ）folk songs at the summer festival」全体が主語で、「is one of my happiest memories」が述語になっている。動名詞（〜ing）は主語になれる。
・① Sing → 原形（そのままでは主語になれない）
・② To sing → 不定詞も主語になれるが、文頭で使う場合は形式主語 It を使うのが一般的で、この形では不自然
・③ Singing → 動名詞（✓）文の主語として自然
・④ Sung → 過去分詞（主語にはなれない）

日本語訳：「夏祭りで民謡を歌うことは、私の子ども時代の一番幸せな思い出の一つだ。」

【文法ポイント】
動名詞は「〜すること」という意味で、主語・目的語・補語になれる。
主語として使う場合、不定詞（To sing〜）よりも動名詞（Singing〜）の方が口語的でよく使われる。

【入試頻出】
・Dancing at the festival makes me happy.
・Watching the fireworks was exciting.
・Making origami is a traditional Japanese art.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 2. 語彙・熟語・前置詞 × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo11_13',
    subject: 'eigo',
    question: '次の（　）内に最も適切な前置詞を選べ。  Kyoto is famous ( ) its beautiful shrines and traditional festivals.',
    choices: ['① of', '② for', '③ with', '④ at'],
    answer: '② for',
    hint: 'be famous の後ろに来る前置詞を選ぶ。',
    explanation: `【出題意図】
頻出熟語 be famous for〜（〜で有名だ）の前置詞の用法を問う問題。

【解説】
be famous for〜 は「〜で有名だ」という意味のイディオム。前置詞 for が固定。
・① of → be famous の後ろには使わない
・② for → be famous for〜（✓）
・③ with → be pleased with〜 などに使う
・④ at → be good at〜 などに使う

日本語訳：「京都は美しい神社や伝統的な祭りで有名だ。」

【文法ポイント】
前置詞を固定する重要熟語：
・be famous for〜：〜で有名だ
・be known for〜：〜で知られている
・be popular with〜：〜に人気がある

【入試頻出】
・Nara is famous for its ancient temples.
・This town is known for its pottery.
・The festival is popular with tourists.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_14',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Every summer, hundreds of local people ( ) part in the traditional dance parade.',
    choices: ['① make', '② have', '③ take', '④ do'],
    answer: '③ take',
    hint: 'take part in〜で「〜に参加する」という熟語。',
    explanation:
      '【何を聞かれているか】「Every summer, hundreds of local people ( ) part in the traditional dance parade.」の空所に入る適切な動詞を選ぶ。\n【なぜtakeになるのか】「〜に参加する」という意味は、動詞takeを使ったtake part in〜という決まったイディオムで表すから。\n【ポイント1】take part in〜は「〜に参加する」（＝join／participate in）という重要イディオム。\n【ポイント2】①make part in、②have part in、④do part inはどれも存在しない表現。\n【ポイント3】takeを含む頻出熟語：take place（行われる）、take care of〜（世話をする）。\n【答え】③ take\n【確かめ】take part in the traditional dance paradeで「伝統的な踊りのパレードに参加する」という意味になっているかを確認する。\n【よくあるまちがい】make part inのように、他の動詞をあてはめてしまう。\n【ここが絶対】「〜に参加する」はtake part in〜という決まった形で覚える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_15',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The children are looking forward ( ) the New Year fireworks tonight.',
    choices: ['① at', '② to', '③ for', '④ on'],
    answer: '② to',
    hint: 'look forward to〜 は「〜を楽しみにする」という意味の熟語。',
    explanation: `【出題意図】
熟語 look forward to〜（〜を楽しみにする）の前置詞 to の用法を問う問題。この to は不定詞ではなく前置詞である点が重要。

【解説】
look forward to〜 は「〜を楽しみにする」という意味のイディオム。この to は前置詞なので、後ろに動詞が来る場合は動名詞（〜ing）になる点にも注意。
・① at → 誤り
・② to → look forward to〜（✓）
・③ for → 誤り
・④ on → 誤り

日本語訳：「子どもたちは今夜の大晦日の花火を楽しみにしている。」

【文法ポイント】
look forward to + 名詞／動名詞：〜を楽しみにする
例：I am looking forward to seeing the parade.（動名詞の場合、原形 see にしない点に注意）

【入試頻出】
・We are looking forward to the summer festival.
・She is looking forward to visiting Kyoto again.
・I look forward to hearing from you.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_16',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This mountain village is known ( ) the birthplace of a famous samurai.',
    choices: ['① of', '② for', '③ as', '④ to'],
    answer: '③ as',
    hint: '「〜として知られている」という「その正体・立場」を示す表現を選ぶ。',
    explanation: `【出題意図】
be known as〜（〜として知られている）と be known for〜（〜で知られている）の使い分けを問う問題。

【解説】
be known as〜 は「〜として知られている」という「正体・肩書き」を表す表現。一方 be known for〜 は「〜という特徴・理由で知られている」を表す。
この文では「有名な侍の生まれた場所として」という「正体」を表しているので as を使う。
・① of → 誤り
・② for → 理由・特徴を表す場合に使う（この文には合わない）
・③ as → be known as〜（✓）
・④ to → be known to〜（人）に知られている、の意味で使う

日本語訳：「この山あいの村は、有名な侍の生誕地として知られている。」

【文法ポイント】
be known as〜：〜として知られている（正体・役割）
be known for〜：〜で知られている（特徴・理由）
be known to〜：〜に知られている（対象となる人）

【入試頻出】
・This town is known as a center of traditional pottery.
・The area is known for its beautiful autumn leaves.
・The story is known to many Japanese people.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_17',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This craft has been handed ( ) from generation to generation for over four hundred years.',
    choices: ['① down', '② up', '③ over', '④ off'],
    answer: '① down',
    hint: 'hand down〜 は「〜を代々伝える、受け継ぐ」という意味の句動詞。',
    explanation: `【出題意図】
句動詞 hand down〜（〜を代々伝える）の用法を問う問題。世代を超えた伝統の継承を表す表現として頻出。

【解説】
hand down〜 は「（技術・伝統・財産など）を次の世代に伝える」という意味の句動詞。「from generation to generation（世代から世代へ）」というフレーズと相性がよい。
・① down → hand down〜（✓）
・② up → hand up は「手を挙げる」のような別の意味になり不自然
・③ over → hand over〜 は「〜を引き渡す」という意味で、伝統の継承にはあまり使わない
・④ off → hand off は「（球技で）パスする」などの意味で文脈に合わない

日本語訳：「この工芸は400年以上にわたって代々受け継がれてきた。」

【文法ポイント】
hand down〜（受動態：be handed down）：伝統・技術・財産を代々伝える
from generation to generation：世代から世代へ、代々

【入試頻出】
・This recipe has been handed down in our family for generations.
・The skill was handed down from father to son.
・Many traditional stories have been handed down orally.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_18',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The tea ceremony began ( ) the middle of the afternoon, when the light was soft and warm.',
    choices: ['① at', '② on', '③ in', '④ by'],
    answer: '③ in',
    hint: '「〜の真ん中に」という意味の熟語 in the middle of〜 を思い出す。',
    explanation: `【出題意図】
熟語 in the middle of〜（〜の真ん中に、〜の途中で）の前置詞を問う問題。時刻を表す at との混同を防ぐ。

【解説】
in the middle of〜 は「〜の真ん中に」という意味の固定表現で、前置詞は必ず in を使う。単なる時刻（at 3 p.m.）とは異なり、「一定の幅を持つ時間帯や期間の中ほど」を表すときに使う。
・① at → 特定の時刻に使う（in the middle of とは組み合わせない）
・② on → 曜日・日付に使う
・③ in → in the middle of〜（✓）
・④ by → 期限を表す（〜までに）

日本語訳：「その茶会は、光が柔らかく暖かい、午後の真ん中ごろに始まった。」

【文法ポイント】
in the middle of〜：〜の真ん中に、〜の途中で
例：in the middle of the Edo period（江戸時代の半ばに）
例：in the middle of the ceremony（式の最中に）

【入試頻出】
・The festival takes place in the middle of summer.
・He arrived in the middle of the speech.
・The castle was built in the middle of the sixteenth century.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_19',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This shrine ( ) back to the eighth century, making it one of the oldest in the region.',
    choices: ['① dates', '② makes', '③ takes', '④ turns'],
    answer: '① dates',
    hint: 'date back to〜 は「（時代が）〜にさかのぼる」という意味の熟語。',
    explanation: `【出題意図】
熟語 date back to〜（〜にさかのぼる）を正確に使えるかを問う問題。歴史的な文章で頻出の表現。

【解説】
date back to〜 は「（起源・歴史が）〜の時代にまでさかのぼる」という意味のイディオム。主語には建物・伝統・習慣などがよく来る。
・① dates → date back to〜（✓）
・② makes → make back to という表現は存在しない
・③ takes → take back は「取り戻す、発言を撤回する」などの意味で文脈に合わない
・④ turns → turn back は「引き返す」という意味で文脈に合わない

日本語訳：「この神社は8世紀にまでさかのぼり、この地域で最も古いものの一つとなっている。」

【文法ポイント】
date back to〜：（起源・歴史が）〜にさかのぼる（= go back to〜）
主語は建物・祭り・習慣など、歴史を持つものが多い。

【入試頻出】
・This tradition dates back to the Heian period.
・The custom dates back hundreds of years.
・This wooden bridge dates back to the seventeenth century.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_20',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  This historical drama is ( ) on real events that happened during the war.',
    choices: ['① based', '② interested', '③ known', '④ filled'],
    answer: '① based',
    hint: '「〜に基づいている」という意味の熟語 be based on〜 を思い出す。',
    explanation: `【出題意図】
熟語 be based on〜（〜に基づいている）を正確に使えるかを問う問題。似た形の他の熟語との混同を防ぐ。

【解説】
be based on〜 は「〜に基づいている、〜を基にしている」という意味のイディオム。映画・ドラマ・小説などの内容の出典を説明するときによく使われる。
・① based → be based on〜（✓）
・② interested → be interested in〜 が正しい形（on は使わない）
・③ known → be known for〜/as〜 が正しい形（on は使わない）
・④ filled → be filled with〜 が正しい形（on は使わない）

日本語訳：「この歴史ドラマは、戦争中に実際に起こった出来事に基づいている。」

【文法ポイント】
be based on〜：〜に基づいている
似た形の熟語と前置詞をセットで覚える：
be interested in〜／be known for〜・as〜／be filled with〜

【入試頻出】
・This novel is based on a true story.
・The movie is based on an old legend.
・Her speech was based on historical records.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 3. 関係代名詞・間接疑問文 × 6問
  // ============================================================
  {
    id: 'koko_nyushi_eigo11_21',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The woman ( ) is wearing a kimono in that photo is my grandmother.',
    choices: ['① who', '② which', '③ whom', '④ whose'],
    answer: '① who',
    hint: '先行詞は「人」、関係代名詞節内での役割は「主語」。',
    explanation:
      '【何を聞かれているか】「The woman ( ) is wearing a kimono in that photo is my grandmother.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhoになるのか】先行詞The woman（女性）は人で、関係代名詞節の中でis wearing（着ている）の主語の役割をしているため、先行詞が人・主格のときに使うwhoを選ぶ必要があるから。\n【ポイント1】先行詞がThe woman（人）で、関係代名詞節内でis wearingの主語になっている（主格）。\n【ポイント2】②whichは先行詞が物や動物、③whomは先行詞が人・目的格、④whoseは所有格で、どれも文脈に合わない。\n【ポイント3】関係代名詞まとめ：人（主格who、目的格whom、所有格whose）、物（主格・目的格which、所有格whose）。\n【答え】① who\n【確かめ】whoのあとに動詞（is wearing）が続いている（主語の役割）ことを確認する。\n【よくあるまちがい】先行詞が人なのにwhichを選んでしまう。\n【ここが絶対】関係代名詞は、先行詞が人か物かと、節内での役割（主格・目的格・所有格）の両方で決まる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_22',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  The festival ( ) we saw last summer is held every August.',
    choices: ['① who', '② which', '③ whom', '④ where'],
    answer: '② which',
    hint: '先行詞は「物・行事（festival）」。関係代名詞節内で saw の目的語になっている。',
    explanation:
      '【何を聞かれているか】「The festival ( ) we saw last summer is held every August.」の空所に入る適切な関係代名詞を選ぶ。\n【なぜwhichになるのか】先行詞The festival（祭り）は物・行事で、関係代名詞節の中でwe saw（　）の目的語の役割をしているため、先行詞が物・目的格のときに使うwhichを選ぶ必要があるから。\n【ポイント1】先行詞がThe festival（物・行事）で、関係代名詞節内でwe sawの目的語になっている（目的格）。\n【ポイント2】①whoは先行詞が人、③whomは先行詞が人・目的格、④whereは関係副詞で、どれも文脈に合わない。\n【ポイント3】whichは省略も可能で、thatに置きかえることもできる：The festival (that) we saw last summer〜。\n【答え】② which\n【確かめ】whichのあとにwe saw（主語＋動詞）が続いている（目的語の役割）ことを確認する。\n【よくあるまちがい】先行詞が物・行事なのにwhoを選んでしまう。\n【ここが絶対】目的格の関係代名詞は省略できる。先行詞が物・行事ならwhich（thatはどちらにも使える）。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_23',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Kyoto is the city ( ) many old temples still stand.',
    choices: ['① which', '② who', '③ where', '④ when'],
    answer: '③ where',
    hint: '先行詞は「場所（city）」で、関係副詞を使う。',
    explanation: `【出題意図】
関係副詞 where（先行詞が場所）の用法を問う問題。関係代名詞との区別が目標。

【解説】
先行詞は「the city（都市）」= 場所。節内では「many old temples still stand in the city」の前置詞 in の部分が関係副詞 where に変わった構造。
・① which → 物に使う関係代名詞（前置詞 in が必要）
・② who → 人に使う
・③ where → 場所を先行詞にとる関係副詞（✓）
・④ when → 時を先行詞にとる関係副詞

関係副詞 where = 前置詞 + which：the city where〜 = the city in which〜

日本語訳：「京都は、多くの古い寺院が今も残っている都市です。」

【文法ポイント】
関係副詞まとめ：
・where：場所を表す先行詞（city / village / shrine）
・when：時を表す先行詞（year / period / day）
・why：理由を表す先行詞（reason）

【入試頻出】
・This is the village where the festival began.
・I remember the year when the castle was rebuilt.
・Tell me the reason why this tradition continues.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_24',
    subject: 'eigo',
    question: '次の2文を1文に書き換えなさい。（関係代名詞を使って）\n\nI visited a temple.\nIts history goes back more than a thousand years.',
    answer: 'I visited a temple whose history goes back more than a thousand years.',
    hint: '2つの文をつなぐとき、Its（その〜の）を所有格の関係代名詞 whose に変える。',
    explanation:
      '【何を聞かれているか】「I visited a temple. Its history goes back more than a thousand years.」を関係代名詞を使って1文にする。\n【なぜwhoseを使うのか】2つ目の文のIts（その〜の）がa temple（1つ目の文の名詞）の所有を表しているため、この所有の関係を表す所有格の関係代名詞whoseに置きかえる必要があるから。\n【ポイント1】先行詞を特定する：a temple（物）。\n【ポイント2】Its（所有格）をwhoseに置きかえ、先行詞a templeの直後に置く。\n【ポイント3】I visited a temple whose history goes back more than a thousand years.（私は歴史が千年以上さかのぼる寺を訪れた）。\n【答え】I visited a temple whose history goes back more than a thousand years.\n【確かめ】whoseのあとにhistory（名詞）、goes（動詞）と続いているかを確認する。\n【よくあるまちがい】先行詞が物（a temple）だからwhichを使えると考え、whichのあとにIts（所有格）を残してしまう。\n【ここが絶対】whoseは先行詞が人でも物でも、その所有格を表すのに使える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_25',
    subject: 'eigo',
    question: '次の文を間接疑問文に書き換えなさい。\n\n直接疑問文：How did people celebrate this festival long ago?\n「あなたは、昔の人々がこの祭りをどのように祝っていたか知っていますか？」',
    answer: 'Do you know how people celebrated this festival long ago?',
    hint: '間接疑問文では疑問詞の後ろが「主語＋動詞」の語順に戻り、did は消える。',
    explanation:
      '【何を聞かれているか】「How did people celebrate this festival long ago?」（あなたは、昔の人々がこの祭りをどのように祝っていたか知っていますか？）を間接疑問文に書きかえる。\n【なぜdidが消えるのか】疑問文が他の文（Do you know〜）の一部に組み込まれると、疑問文特有の助動詞didを使わず、ふつうの文と同じ〈疑問詞＋主語＋動詞〉の語順に戻すというルールがあるから。\n【ポイント1】疑問詞Howはそのまま使う。\n【ポイント2】疑問詞の後ろを「主語＋動詞」の平叙文語順に変える。didは消えて、動詞は過去形（celebrated）にする。\n【ポイント3】全体をDo you know＋間接疑問の形にする。Do you know how people celebrated this festival long ago?\n【答え】Do you know how people celebrated this festival long ago?\n【確かめ】didが消えて、動詞がcelebrateではなくcelebratedになっているかを確認する。\n【よくあるまちがい】Do you know how did people celebrate〜?のように疑問文の語順のままにしてしまう。\n【ここが絶対】間接疑問文の語順は〈疑問詞＋主語＋動詞〉の平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_26',
    subject: 'eigo',
    question: '次の（　）内に最も適切な語を選べ。  Could you tell me ( ) this festival is held every autumn?',
    choices: ['① why', '② which', '③ where', '④ who'],
    answer: '① why',
    hint: '「なぜ毎年秋に行われるのか」という理由を尋ねる間接疑問文。',
    explanation: `【出題意図】
間接疑問文で適切な疑問詞を文脈から選ぶ問題。疑問詞の意味の使い分けが目標。

【解説】
「Could you tell me ( ) this festival is held every autumn?」= 「なぜこの祭りが毎年秋に行われるのか教えてもらえますか？」
理由を尋ねているので why を使う。
・① why → 「なぜ」理由を尋ねる（✓）
・② which → 「どちら・どれ」選択を尋ねる
・③ where → 「どこ」場所を尋ねる
・④ who → 「誰が」人を尋ねる

日本語訳：「この祭りがなぜ毎年秋に行われるのか教えていただけますか？」

【文法ポイント】
間接疑問文の疑問詞の使い分け：
・why：理由　・when：時　・where：場所　・who：人　・how：方法

【入試頻出】
・Please tell me why this shrine was built here.
・I don't know when the parade will start.
・Can you tell me who made this beautiful lantern?`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 4. 並べ替え（語順整序）× 7問
  // ============================================================
  {
    id: 'koko_nyushi_eigo11_27',
    subject: 'eigo',
    question: '次の語を並べ替えて正しい英文を作れ。\n（ tell / me / when / this / festival / began / can / you ）\n「この祭りがいつ始まったか教えてくれますか？」',
    answer: 'Can you tell me when this festival began?',
    hint: '間接疑問文：疑問詞（when）の後ろは主語＋動詞の語順。全体はCanで始まる疑問文。',
    explanation:
      '【何を聞かれているか】tell / me / when / this / festival / began / can / you を並べ替えて「この祭りがいつ始まったか教えてくれますか？」という英文を作る。\n【なぜthis festival beganという語順になるのか】全体はCan you tell me〜?という疑問文だが、tell meの目的語になる部分（間接疑問）は疑問文の語順ではなく、〈疑問詞（when）＋主語＋動詞〉という平叙文の語順にする必要があるから。\n【ポイント1】全体の骨組みはCan you tell me〜?という疑問文。\n【ポイント2】tell meの目的語（間接疑問）はwhen this festival began（疑問文の語順ではなく平叙文語順）。\n【ポイント3】組み立てるとCan you tell me when this festival began?になる。\n【答え】Can you tell me when this festival began?\n【確かめ】whenのあとがdid this festival beginではなくthis festival began（平叙文語順）になっているかを確認する。\n【よくあるまちがい】Can you tell me when did this festival begin?のように疑問文の語順のままにしてしまう。\n【ここが絶対】Can/Could you tell me＋疑問詞＋主語＋動詞〜?の形は依頼表現として重要。間接疑問の部分は平叙文語順にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  // ============================================================
  // 5. 空所補充（対話文・長文） × 8問
  // ============================================================
  {
    id: 'koko_nyushi_eigo11_34',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: Have you ever seen a Noh performance? B: ( )',
    choices: ['① Yes, I have. It was fascinating.', '② Yes, I do.', '③ No, I don\'t have.', '④ Yes, I saw ever.'],
    answer: '① Yes, I have. It was fascinating.',
    hint: '現在完了形の疑問文（経験）には現在完了形で答える。',
    explanation:
      '【何を聞かれているか】「Have you ever seen a Noh performance?」への適切な返答を選ぶ。\n【なぜ①が正しいのか】Have you ever〜?は現在完了形の経験用法の疑問文で、答えも現在完了形（Yes, I have./No, I haven\'t.）で行う必要があるから。\n【ポイント1】②Yes, I do.は一般動詞の現在形の答え方で時制が合わない。③No, I don\'t have.はhaveのあとに目的語が必要な形になっており不自然（No, I haven\'t.が正しい）。\n【ポイント2】④Yes, I saw ever.はeverが疑問文・否定文で使う語であり、肯定文の答えには使わない。\n【ポイント3】①Yes, I have. It was fascinating.が正解。現在完了形で正しく答え、感想も添えている。\n【答え】① Yes, I have. It was fascinating.\n【確かめ】質問の時制（現在完了）と答えの時制が一致しているかを確認する。\n【よくあるまちがい】Have you ever〜?への返答をYes, I do.のように一般動詞の現在形にしてしまう。\n【ここが絶対】現在完了形（経験）の疑問文Have you ever〜?には、Yes, I have./No, I haven\'t.のように現在完了形で答える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_35',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。\n\nA: How long has this festival been held?\nB: ( )\n① It has been held for over three hundred years.  ② It was held yesterday.  ③ It will be held soon.  ④ It takes about two hours.',
    answer: '① It has been held for over three hundred years.',
    hint: 'How long has〜been held? は継続の期間を尋ねる現在完了形の疑問文。',
    explanation: `【出題意図】
現在完了形（継続）の疑問文 How long has〜been〜? に対する適切な応答を問う問題。

【解説】
How long has this festival been held? = 「この祭りはどのくらいの間開催されていますか（＝いつから続いていますか）」という継続の期間を尋ねる質問。答えも継続の期間で答える必要がある。
・① for over three hundred years → 継続してきた期間を答えている（✓）
・② It was held yesterday. → 過去の一時点を答えており継続の質問に合わない
・③ It will be held soon. → 未来の予定を答えており質問に合わない
・④ about two hours → 所要時間の答えであり、質問（継続期間）と噛み合わない

日本語訳：
A：この祭りはどのくらいの間開催されているのですか？
B：300年以上にわたって開催されています。

【文法ポイント】
How long has/have + 主語 + 過去分詞〜?：「どのくらいの間〜していますか」（継続）
応答：for + 期間 / since + 起点

【入試頻出】
・How long has this shrine existed? — It has existed for over a thousand years.
・How long have they practiced this dance? — They have practiced it since childhood.
・How long has your family lived here? — We have lived here for three generations.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_36',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。  A: May I take a photograph of this suit of armor? B: ( ) A: Thank you.',
    choices: ['① Of course, please do.', '② No, you may not go.', '③ I don\'t have a camera.', '④ Yes, you may go.'],
    answer: '① Of course, please do.',
    hint: 'May I〜? は許可を求める表現。自然な許可の与え方を選ぶ。',
    explanation: `【出題意図】
May I〜?（許可を求める）への適切な返答を問う問題。実用的な会話表現の習得が目標。

【解説】
May I take a photograph〜? = 「〜の写真を撮ってもいいですか？」という許可を求める丁寧な表現。
直後に「Thank you.（ありがとう）」とあるので、許可を与える返答が必要。
・① Of course, please do. → もちろん、どうぞ（✓）最も自然で丁寧な許可の表現
・② No, you may not go. → go（行く）は take a photograph（写真を撮る）と関係がなく、文脈に合わない
・③ I don't have a camera. → Aがカメラを持っている前提の質問に対して噛み合わない返答
・④ Yes, you may go. → go は不自然（許可の対象が「行くこと」になってしまう）

日本語訳：
A：この鎧の写真を撮ってもいいですか？
B：もちろん、どうぞ。
A：ありがとう。

【文法ポイント】
許可を求める表現：May I〜? / Can I〜? / Could I〜?
許可を与える表現：Of course. / Sure, go ahead. / No problem.

【入試頻出】
・May I touch this old scroll? — Of course, please do.
・Can I sit near the shrine gate? — Sure, go ahead.
・May I ask about the history of this castle? — Certainly.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_37',
    subject: 'eigo',
    question: '次の対話文の（　）に最も適切なものを選べ。\n\nA: What time does the lantern festival start tonight?\nB: ( )\n① It\'s about five kilometers away.  ② It starts at seven, right after sunset.  ③ It started last week.  ④ The lanterns are very beautiful.',
    answer: '② It starts at seven, right after sunset.',
    hint: 'What time does〜start? は開始時刻を尋ねる質問。時刻で答える。',
    explanation:
      '【何を聞かれているか】「What time does the lantern festival start tonight?」への適切な返答を選ぶ。\n【なぜ②が正しいのか】What time does〜start?は開始時刻を尋ねる表現で、これにはIt starts at＋時刻という形で答える決まりがあるから。\n【ポイント1】①about five kilometers awayは距離を答えており、How far〜?への返答にあたる。\n【ポイント2】③It started last week.は過去の出来事で、質問は「今夜」の開始時刻についてなので合わない。④The lanterns are very beautiful.は感想であり質問と噛み合わない。\n【ポイント3】②It starts at seven, right after sunset.が正しい。時刻を正しく答えている。\n【答え】② It starts at seven, right after sunset.\n【確かめ】質問がWhat time（時刻）を尋ねているのに対し、選んだ返答が時刻を答えているかを確認する。\n【よくあるまちがい】質問の内容（今夜の開始時刻）とは無関係な情報（距離や感想）を答えてしまう。\n【ここが絶対】What time does/do＋主語＋動詞〜?（開始・終了の時刻を尋ねる）には、It starts/ends at＋時刻で答える。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_38',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  This traditional festival ( ) held every year since the Edo period.',
    choices: ['① is', '② was', '③ has been', '④ had been'],
    answer: '③ has been',
    hint: '「江戸時代から」という過去から現在まで続いている状態を表す現在完了の受動態を選ぶ。',
    explanation: `【出題意図】
現在完了形の受動態（has/have been + 過去分詞）の用法を問う問題。since と組み合わせた継続表現がポイント。

【解説】
「since the Edo period（江戸時代から）」は起点を示し、そこから現在まで継続している状態を表すには現在完了形が必要。祭りは「開催する」側ではなく「開催される」側なので受動態を使う。
・① is → 現在形（継続の意味が出ない）
・② was → 過去形（現在まで続いている意味を表せない）
・③ has been → 現在完了・受動態（✓）has been held
・④ had been → 過去完了（現在の一時点より前の基準点がなく不適切）

日本語訳：「この伝統的な祭りは、江戸時代からずっと毎年開催されている。」

【文法ポイント】
現在完了形の受動態：has/have been + 過去分詞
since〜（〜以来）と相性がよい継続表現。

【入試頻出】
・This tradition has been passed down since ancient times.
・The shrine has been visited by many people since it was built.
・This song has been sung at the festival since the nineteenth century.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_39',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語を選べ。  The shrine festival takes place ( ) the first weekend of October.',
    choices: ['① in', '② at', '③ on', '④ by'],
    answer: '③ on',
    hint: '特定の日・週末には前置詞 on を使う。',
    explanation: `【出題意図】
時を表す前置詞（in / at / on）の使い分けを問う問題。曜日や特定の日に使う on を正確に選べるかが目標。

【解説】
「the first weekend of October（10月の最初の週末）」という特定の日にあたる期間には on を使う。
・① in → 月・年・季節・時間帯（in October単独ならinを使うが、ここでは特定の週末を指すのでonが適切）
・② at → 時刻・特定の時点（at noon など）
・③ on → 曜日・特定の日（on the first weekend of October）（✓）
・④ by → 期限（〜までに）

日本語訳：「その神社の祭りは10月の最初の週末に開催される。」

【文法ポイント】
時を表す前置詞まとめ：
at：時刻・時点／on：曜日・特定の日／in：月・年・季節・時間帯

【入試頻出】
・The event is held on the second Sunday of August.
・We visit the shrine on New Year's Day.
・The parade takes place on the last Saturday of the month.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_40',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  The elders asked the young volunteers ( ) the shrine gate before the ceremony.',
    choices: ['① clean', '② to clean', '③ cleaning', '④ cleaned'],
    answer: '② to clean',
    hint: 'ask + 人 + to do（人に〜するよう頼む）という構文。',
    explanation:
      '【何を聞かれているか】「The elders asked the young volunteers ( ) the shrine gate before the ceremony.」の空所に入る適切な形を選ぶ。\n【なぜto cleanになるのか】「人に〜するよう頼む」はask＋人＋to doという決まった構文で表し、人のあとには必ず不定詞（to＋原形）が続くから。\n【ポイント1】ask＋人＋to do＝「人に〜するよう頼む」という重要構文。\n【ポイント2】①clean（原形のみ）、③cleaning（動名詞）、④cleaned（過去分詞）はどれもask＋人のあとの形として使えない。\n【ポイント3】同じ仲間の構文：tell＋人＋to do（人に〜するよう言う）、want＋人＋to do（人に〜してほしい）。\n【答え】② to clean\n【確かめ】The elders asked the young volunteers to clean the shrine gate.という文全体を読み、「長老たちは若いボランティアたちに神社の門を掃除するよう頼んだ」という意味になっているかを確認する。\n【よくあるまちがい】ask＋人のあとに原形をそのまま続けてしまう。\n【ここが絶対】ask＋人＋to doの形では、人のあとに必ずtoが必要。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_41',
    subject: 'eigo',
    question: '次の英文の（　）に入る最も適切な語句を選べ。  I think ( ) important to preserve traditional festivals for future generations.',
    choices: ['① this', '② that', '③ it', '④ what'],
    answer: '③ it',
    hint: '形式主語 it を使った「it is + 形容詞 + to 動詞」の構文。',
    explanation: `【出題意図】
形式主語 it（仮の主語）を使った構文を問う問題。I think (that) it is〜 の形が正解。

【解説】
この文は「I think [that] it is important to preserve traditional festivals for future generations.」という構造。
it は to preserve traditional festivals for future generations（未来の世代のために伝統的な祭りを守ること）を指す形式主語。

・① this → I think this important to〜 は文法的に成立しない
・② that → I think that important to〜 も不自然
・③ it → 形式主語の it（✓）
・④ what → I think what important to〜 は成立しない

日本語訳：「私は、伝統的な祭りを未来の世代のために守ることは大切だと思う。」

【文法ポイント】
形式主語（仮主語）it の構文：
It is + 形容詞 + to + 動詞〜 = 〜することは（形容詞）だ

【入試頻出】
・It is necessary to protect our cultural heritage.
・I think it is meaningful to learn about local history.
・She found it interesting to study old festival customs.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 6. 日本語→英語（和文英訳・英作文）× 5問
  // ============================================================
  {
    id: 'koko_nyushi_eigo11_42',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私はこれまでに本物の茶道を体験したことがありません。」',
    answer: 'I have never experienced a real tea ceremony. / I have never taken part in a real tea ceremony.',
    hint: '「〜したことがない」は現在完了の経験用法（have never + 過去分詞）。',
    explanation: `【出題意図】
現在完了形（経験）の否定文を正確に作れるかを問う英作文問題。

【解説】
「〜したことがない」= have/has never + 過去分詞（現在完了・経験の否定）
「体験する」= experience（動詞）または take part in（参加する）

組み立て：
I have never experienced a real tea ceremony.
または
I have never taken part in a real tea ceremony.

注意：experience は動詞としても使え、「〜を経験する」という意味で他動詞なので目的語を直接取る。

【文法ポイント】
現在完了形（経験）の否定文：have/has never + 過去分詞
経験を表す動詞・表現：experience〜／take part in〜／try〜

【入試頻出】
・I have never seen a real Noh performance.
・She has never tried making origami before.
・He has never joined a traditional festival.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_43',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「祖父が語ってくれたその物語を、もう一度聞かせてもらえますか？」',
    answer: 'Could you tell me the story that my grandfather told me once more? / Could you tell me again the story my grandfather told me?',
    hint: '「聞かせてもらえますか」は Could you tell me〜?、「祖父が語ってくれた」は関係代名詞（that）で修飾。',
    explanation:
      '【何を聞かれているか】「祖父が語ってくれたその物語を、もう一度聞かせてもらえますか？」を英語に訳す。\n【なぜCould you〜?とthatを組み合わせるのか】丁寧な依頼にはCould you tell me〜?を使い、「祖父が語ってくれた」という説明を加えるには、the storyのうしろに関係代名詞（目的格）でtold節をつなげる必要があるから。\n【ポイント1】丁寧な依頼：Could you tell me〜?＝「〜を話していただけますか？」。\n【ポイント2】「祖父が語ってくれた（物語）」＝the story that/which my grandfather told me（関係代名詞・目的格、省略も可）。\n【ポイント3】組み合わせるとCould you tell me the story (that) my grandfather told me once more?になる。\n【答え】Could you tell me the story that my grandfather told me once more? / Could you tell me again the story my grandfather told me?\n【確かめ】the storyのあとにmy grandfather told me（主語＋動詞＋目的語）が続いており、tellの目的語がthe storyであることを確認する。\n【よくあるまちがい】Could you〜?のかわりにCan you〜?を使ってしまい、ていねいさが弱くなる。\n【ここが絶対】Could you〜?はCan you〜?の丁寧版。目的格の関係代名詞は省略できる。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_44',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「私が子どものころ、この村には古い城がありました。」',
    answer: 'When I was a child, there was an old castle in this village. / There was an old castle in this village when I was a child.',
    hint: '「〜があった」は there was/were〜 の構文。城は単数なので was を使う。',
    explanation: `【出題意図】
there is/are 構文の過去形と、when 節（〜のとき）を組み合わせた英作文。

【解説】
ポイント：
1. 「子どものころ」= when I was a child
2. 「〜があった」= there was〜（castle は単数なので was）
3. 「この村に」= in this village

組み合わせ：
When I was a child, there was an old castle in this village.
または
There was an old castle in this village when I was a child.

注意：
× There were an old castle（× castle は単数 → was）

【文法ポイント】
there is/are 構文：「〜がある/いる」
過去：There was + 単数名詞 / There were + 複数名詞

【入試頻出】
・There was a big gate at the entrance of the castle town.
・When I was young, there were many festivals in this area.
・There used to be an old shrine on this hill.`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_45',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「もし私が江戸時代に生きていたら、侍になりたいと思うでしょう。」',
    answer: 'If I lived in the Edo period, I would want to become a samurai. / If I lived in the Edo period, I would want to be a samurai.',
    hint: '現実にはあり得ない仮定：If + 主語 + 動詞の過去形, 主語 + would + 動詞原形。',
    explanation:
      '【何を聞かれているか】「もし私が江戸時代に生きていたら、侍になりたいと思うでしょう。」を英語に訳す。\n【なぜlivedとwouldを使うのか】「もし江戸時代に生きていたら」は現実とは異なる仮定（実際には現代に生きている）なので、仮定法過去（if節は過去形、主節はwould＋動詞原形）を使う必要があるから。\n【ポイント1】仮定法過去の形：If＋主語＋動詞の過去形〜, 主語＋would＋動詞原形。\n【ポイント2】「〜になりたいと思うだろう」＝would want to become／would want to be。\n【ポイント3】If I lived in the Edo period, I would want to become a samurai.\n【答え】If I lived in the Edo period, I would want to become a samurai. / If I lived in the Edo period, I would want to be a samurai.\n【確かめ】if節の動詞がlived（過去形）になっているか、主節がwould＋動詞原形になっているかを確認する。\n【よくあるまちがい】If I live in the Edo period, I will want to〜のように現在形のまま書いてしまう。\n【ここが絶対】現在の事実に反する仮定は仮定法過去（if節は過去形、主節はwould＋動詞原形）で表す。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_46',
    subject: 'eigo',
    question: '次の日本文を英語に訳せ。\n「この祭りは地元の人々だけでなく、海外からの観光客にも人気があります。」',
    answer: 'This festival is popular not only with local people but also with tourists from overseas. / This festival is popular not only among local people but also among foreign tourists.',
    hint: '「〜だけでなく…も」は not only A but also B の構文。「〜に人気がある」は popular with/among〜。',
    explanation:
      '【何を聞かれているか】「この祭りは地元の人々だけでなく、海外からの観光客にも人気があります。」を英語に訳す。\n【なぜnot only A but also Bを使うのか】「〜だけでなく…も」という意味は、相関接続詞not only A but also Bという決まった形で表し、「〜に人気がある」はbe popular with/among〜で表すから。\n【ポイント1】「〜だけでなく…も」＝not only A but also B。AとBは文法的に同じ形（並列）にする必要がある。\n【ポイント2】「〜に人気がある」＝be popular with〜（特定の人）またはbe popular among〜（グループの中で）。\n【ポイント3】This festival is popular not only with local people but also with tourists from overseas.\n【答え】This festival is popular not only with local people but also with tourists from overseas. / This festival is popular not only among local people but also among foreign tourists.\n【確かめ】not only のあとと、but also のあとが同じ形になっているかを確認する。\n【よくあるまちがい】not only とbut alsoのあとの形をそろえず、withとamongを混ぜて使ってしまう。\n【ここが絶対】not only A but also BのAとBは文法的に同じ形にする。',
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },

  // ============================================================
  // 7. 長文読解（内容一致・指示語・主題など）× 4問
  // ============================================================
  {
    id: 'koko_nyushi_eigo11_47',
    subject: 'eigo',
    passage: `The Gion Festival in Kyoto is one of the most famous festivals in Japan. It has a history of more than one thousand years. The festival began as a religious ceremony to stop a terrible disease that was spreading through the city. People prayed to the gods and carried tall, decorated floats through the streets. Today, these floats are called yamaboko, and some of them are so large that it takes many people to pull them. Every July, thousands of visitors come to Kyoto to see the floats and enjoy traditional music. Although the festival has changed over the centuries, its purpose of bringing people together and asking for good health remains the same.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っているものを1つ選べ。',
    choices: ['① 祇園祭は始まってからまだ100年も経っていない。', '② 祇園祭はもともと疫病を鎮めるための宗教的な行事として始まった。', '③ 山鉾と呼ばれる山車は、誰の助けもなく1人で引くことができるほど軽い。', '④ 祇園祭は江戸時代に入って初めて始まった祭りである。'],
    answer: '② 祇園祭はもともと疫病を鎮めるための宗教的な行事として始まった。',
    hint: '本文中の "The festival began as a religious ceremony to stop a terrible disease" という文を探す。',
    explanation: `【出題意図】
英文読解で内容一致問題を解く力を問う問題。細部の読み取りと選択肢との照合が目標。

【解説】
各選択肢を本文と照合する：
① 「まだ100年も経っていない」→ 本文には "more than one thousand years"（1000年以上）とあるので×
② 「疫病を鎮めるための宗教的な行事として始まった」→ 本文に "began as a religious ceremony to stop a terrible disease"（恐ろしい病気を止めるための宗教的な儀式として始まった）とある（✓）
③ 「1人で引くことができるほど軽い」→ 本文には "it takes many people to pull them"（多くの人がいないと引けない）とあるので×
④ 「江戸時代に入って初めて始まった」→ 本文には江戸時代の記述はなく、1000年以上の歴史があると書かれているので×

【文法ポイント】
内容一致問題のアプローチ：
1. 選択肢を先に読んでキーワードを把握
2. 本文で該当箇所を探す
3. 本文の語句と選択肢の語句を慎重に比較（言い換えに注意）

【入試頻出】
・本文にない情報を含む選択肢は×
・数字（100年／1000年など）は必ず本文と照合する
・「〜だけ」「〜のみ」等の過度な表現に注意`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_48',
    subject: 'eigo',
    passage: `Japanese lacquerware, called shikki, is made through a long and careful process. First, craftsmen collect sap from lacquer trees and let it dry naturally. Next, they apply many thin layers of the lacquer to a wooden base, letting each layer dry completely before adding the next one. This process can take several months or even years for a single piece. Finally, skilled artists add beautiful designs using gold or silver powder. Because these steps require great patience and skill, fewer young people are choosing to become lacquerware craftsmen today. Some workshops have started teaching classes to keep this traditional art alive for future generations.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文中の下線部 "these steps" が指す内容として最も適切なものを選べ。',
    choices: ['① 樹液を集めて自然乾燥させる作業だけ', '② 樹液集め・薄い漆の重ね塗り・金銀粉での装飾までの、漆器づくり全体の一連の工程', '③ 若者が漆器職人になることを選ばない理由', '④ 漆の木を育てるための方法'],
    answer: '② 樹液集め・薄い漆の重ね塗り・金銀粉での装飾までの、漆器づくり全体の一連の工程',
    hint: '"these steps" は直前で説明された "First〜, Next〜, Finally〜" という一連の工程全体を指す。',
    explanation: `【出題意図】
指示語（these steps）が何を指すかを本文から特定する指示語問題。入試長文読解の頻出問題形式。

【解説】
指示語の前後を確認する：
"these steps" の直前には、First（樹液を集めて乾燥させる）、Next（薄い漆を何層も塗り重ねて乾かす）、Finally（金・銀粉で装飾する）という3段階の工程が順に説明されている。
"these steps" は複数形であり、この3段階の工程全体を指す。
→ ② 「樹液集め・重ね塗り・装飾までの、漆器づくり全体の一連の工程」が正解。

① 樹液集めだけ：工程の一部に過ぎず、these steps（複数）の指す範囲より狭い（×）
③ 若者が職人にならない理由：これは these steps が「求める」結果として述べられている内容であり、these steps 自体の指す内容ではない（×）
④ 漆の木を育てる方法：本文に記述なし（×）

【文法ポイント】
指示語問題のアプローチ：
1. 指示語（this / these / it / they）が出たら直前の文脈を確認
2. these（複数）は複数の事柄・工程をまとめて指すことが多い
3. 指示語を含む文に指示内容を代入して意味が通るか確認

【入試頻出】
・「these が指すものを選べ」→ 直前の複数の要素をまとめて探す
・段落内の First / Next / Finally のような順序を示す語に注目する`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_49',
    subject: 'eigo',
    passage: `In many small towns across Japan, traditional festivals are struggling to survive because the population is getting older and younger people are moving to big cities. However, some communities have found a new way to keep their festivals alive. They have started teaching taiko drumming and traditional dance to children in local schools. Some towns have even created special events where young people design their own festival costumes. These efforts have brought new energy to old traditions. Local leaders say that when children feel proud of their hometown's culture, they are more likely to stay involved even after they grow up. Many hope this will help protect Japan's traditional festivals for many more generations.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の主題として最も適切なものを選べ。',
    choices: ['① 日本の人口減少についての統計データ', '② 地方の伝統的な祭りを次の世代へつなぐための地域の新しい取り組み', '③ 都会で働く若者の生活の大変さ', '④ 学校の音楽の授業内容についての報告'],
    answer: '② 地方の伝統的な祭りを次の世代へつなぐための地域の新しい取り組み',
    hint: '本文全体の流れ（問題提起→地域の取り組み→効果→地元指導者の考え）を把握して、何が最も中心的に述べられているかを考える。',
    explanation: `【出題意図】
長文全体を通読して主題（テーマ）を把握する力を問う問題。細部ではなく文章全体の「言いたいこと」を読み取る。

【解説】
本文の構造：
1. 問題提起：地方の伝統的な祭りが、高齢化と若者の都市流出により存続の危機にある
2. 取り組みの紹介：地域が学校で太鼓や踊りを教え、若者が衣装をデザインする特別なイベントを作った
3. 効果：新しいエネルギーが伝統にもたらされている
4. 地元指導者の考え：子どもが地元文化を誇りに思うと、大人になっても関わり続けやすい

全体を通して「地域の新しい取り組み」が中心テーマ → ②が正解

① 統計データ：本文に具体的な数値は含まれていない（×）
③ 若者の都会生活：本文に記述なし（×）
④ 学校の音楽の授業：taiko drumming の指導には触れているが、主題は音楽の授業内容そのものではない（×）

【文法ポイント】
主題問題（main topic）のアプローチ：
1. 冒頭と末尾を特に注意深く読む
2. 繰り返し登場するキーワードを見つける（→ festivals, traditions, young people, communities）
3. 選択肢が本文の一部のみに対応している場合は主題ではない

【入試頻出】
・主題問題では「一番多く書かれていること」を選ぶ
・本文の一部しか触れていない選択肢は不正解になることが多い`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
  {
    id: 'koko_nyushi_eigo11_50',
    subject: 'eigo',
    passage: `Many castles in Japan were built during a time of war, when local lords needed strong buildings to protect their land. However, most castles standing today were not used for battles. Instead, many of them were destroyed by fire, earthquakes, or war, and later rebuilt using concrete in the twentieth century. A few castles, though, still have their original wooden structures from hundreds of years ago, and these are especially valuable to historians. Today, castles attract millions of tourists every year, and local governments spend large amounts of money to preserve them. For many visitors, climbing to the top floor of a castle offers not only a beautiful view but also a chance to imagine what life was like centuries ago.`,
    question: '次の英文を読んで、問いに答えなさい。  （本文は上の passage を参照）  問：本文の内容と合っていないものを1つ選べ。',
    choices: ['① 現在残っている城の多くは、実際には戦闘で使われたことがない。', '② いくつかの城は、何百年も前の木造の建物がそのまま残っている。', '③ すべての城は、一度も建て替えられることなく現在の姿を保っている。', '④ 城は現在、多くの観光客を集めている。'],
    answer: '③ すべての城は、一度も建て替えられることなく現在の姿を保っている。',
    hint: '本文には「多くの城は火事・地震・戦争で破壊され、20世紀にコンクリートで再建された」とある。',
    explanation: `【出題意図】
「本文と合っていないものを選ぶ」という誤文識別型の読解問題。細部の読み取りと選択肢の正確な解釈が必要。

【解説】
各選択肢を本文と照合する：
① 「実際には戦闘で使われたことがない」→ 本文に "most castles standing today were not used for battles" とある（✓ 本文と一致）
② 「木造の建物がそのまま残っている」→ 本文に "A few castles... still have their original wooden structures" とある（✓ 本文と一致）
③ 「すべての城は一度も建て替えられていない」→ 本文には "many of them were destroyed... and later rebuilt using concrete in the twentieth century"（多くは破壊され、20世紀にコンクリートで再建された）とあり、明確に矛盾する（× 本文と不一致）
④ 「多くの観光客を集めている」→ 本文に "castles attract millions of tourists every year" とある（✓ 本文と一致）

正解：③

【文法ポイント】
「合っていないものを選べ」問題のアプローチ：
1. 選択肢の語句を一つずつ本文と照合
2. 「すべて」「一度も〜ない」などの断定的な表現は本文と矛盾しやすいので特に注意
3. 本文にある例外（A few castles〜）を見落とさない

【入試頻出】
・「合っていないものを選べ」では断定的な選択肢を疑う
・本文中の例外・対比（However, Instead, A few〜など）に注目する`,
    difficulty: 'advanced',
    course: 'koko-general',
    examType: 'koko',
    maxOnly: true,
  },
];
