// eigo の「おさらい」（教科ごとに、前提になる知識を折りたたんで出す）。
// 書き方は data/review-blocks.ts の ReviewBlock と同じ。subject・exam・test を必ず書く。
// exam 省略のブロックは小学生にも出るので、中学の文法用語（現在完了・関係代名詞など）は持ちこまない。
import type { ReviewBlock } from './review-blocks';
import type { LessonSection } from './lesson-types';

const sec = (heading: string, body: string): LessonSection => ({ heading, body });

export const REVIEW_BLOCKS_EIGO: ReviewBlock[] = [
  // ───────── 中学受験・高校受験の両方に出す土台 ─────────
  {
    id: 'eigo-wordorder',
    label: '英語の語順',
    subject: 'eigo',
    test: /語順|並べかえ|並べ替え|主語と動詞|主語＋動詞|目的語/,
    section: sec(
      'おさらい：英語の語順（だれが・どうする・何を）',
      `英語は**語順で意味が決まる**ことばです。日本語は「が・を・に」で役わりが決まりますが、英語は並ぶ位置が役わりをあらわします。

■ きまり
　基本の形：主語（だれが）＋ 動詞（どうする）＋ 目的語（何を）
　日本語は動詞が最後ですが、英語は**主語のすぐあとに動詞**が来ます。
　「いつ」「どこで」をあらわすことばは、ふつう文の終わりに置きます。

■ 具体例
　私は毎日、英語を勉強します。
　　→ I study English every day.
　　　I（だれが）＋ study（どうする）＋ English（何を）＋ every day（いつ）
　彼女は公園でテニスをします。
　　→ She plays tennis in the park.
　私は犬が好きです。
　　→ I like dogs.（「好き」も動詞なので、I のすぐあとに like を置く）

■ 確かめ
　英文を作ったら、①最初に主語があるか ②そのすぐあとに動詞があるか ③「いつ・どこで」が最後にあるか、を順に見ます。

■ よくあるまちがい
　・日本語の順のまま並べる（×I English study.）→ ○I study English.
　・動詞を入れ忘れる（×She a teacher.）→ ○She is a teacher.

★ ここがポイント：まず**主語を決めて、すぐあとに動詞を置く**。何を・どこで・いつは、そのあとに続ける。`,
    ),
  },
  {
    id: 'eigo-be-general',
    label: 'be動詞と一般動詞の使い分け',
    subject: 'eigo',
    test: /be動詞|一般動詞|\b(I am|You are|He is|She is|We are|They are|It is|This is|That is)\b/,
    section: sec(
      'おさらい：be動詞と一般動詞の使い分け',
      `英語の動詞には2種類あります。「〜です」「〜にいる」をあらわす **be動詞**（am・are・is）と、「食べる」「走る」のように動作をあらわす**一般動詞**です。

■ きまり
　be動詞は主語で形が変わります。
　　I → am　／　you・we・they（複数の人やもの）→ are　／　he・she・it（1人・1つ）→ is
　一般動詞は、そのままの形で使います（主語が1人のときの s は次のおさらい）。
　1つの文に、be動詞と一般動詞を**ならべて使いません**。

■ 具体例
　私は生徒です。　　　　I am a student.（「です」→ be動詞）
　私たちは野球をします。We play baseball.（動作 → 一般動詞。are は入れない）
　彼女はいそがしいです。She is busy.（「いそがしい」は様子 → be動詞）

■ 確かめ
　文の中の動詞を数えます。be動詞か一般動詞のどちらか1つになっていれば正しい形です。

■ よくあるまちがい
　・×I am play tennis. → ○I play tennis.
　・×He are kind. → ○He is kind.（he には is）

★ ここがポイント：「〜です」は be動詞、「〜する」は一般動詞。**主語に合わせて am・are・is を選ぶ**。`,
    ),
  },
  {
    id: 'eigo-third-person',
    label: '三人称単数現在形（-s・-es）',
    subject: 'eigo',
    test: /三単現|三人称単数|3人称単数|3単現|三人称/,
    section: sec(
      'おさらい：三人称単数現在形（動詞に s がつくとき）',
      `主語が **he・she・it**、または Tom や my mother のように「1人・1つ」のとき、現在の文の一般動詞には s（または es）をつけます。

■ つけ方
　ふつうは s：play → plays、like → likes
　s・x・ch・sh・o で終わる語は es：watch → watches、wash → washes、go → goes
　子音字＋y は y を i に変えて es：study → studies（play のように、母音＋y はそのまま plays）
　have は特別：have → **has**

■ 具体例
　My brother plays soccer every day.（brother は1人 → plays）
　She studies English at night.
　He has a dog.
　I play soccer.／They play soccer.（I と複数には s をつけない）

■ 確かめ
　①主語が1人（1つ）か ②今の文か、を見ます。両方あてはまれば動詞に s です。

■ よくあるまちがい
　・×My mother like tea. → ○My mother likes tea.
　・×She haves a bag. → ○She has a bag.
　・疑問文・否定文では s をとります：×Does she plays? → ○Does she play?

★ ここがポイント：**主語が1人（1つ）で、今のことなら動詞に s・es**。have だけは has。`,
    ),
  },
  {
    id: 'eigo-plural',
    label: '名詞の複数形のつくり方',
    subject: 'eigo',
    test: /複数形|複数の名詞|不規則な複数|\b(children|women|feet|teeth|knives|leaves)\b|\b(two|three|four|five|many|some) [a-z]+s\b/,
    section: sec(
      'おさらい：名詞の複数形のつくり方',
      `名詞が2つ（2人）以上のときは、形を変えて複数形にします。

■ つくり方
　ふつうは s：book → books
　s・x・ch・sh で終わる語は es：bus → buses、box → boxes、watch → watches
　子音字＋y は y を i に変えて es：city → cities、baby → babies（boy → boys は母音＋y なのでそのまま s）
　f・fe で終わる語は ves にする語が多い：knife → knives、leaf → leaves
　不規則（形が変わる）：man → men、woman → women、child → children、foot → feet、tooth → teeth
　形が変わらない語：fish、sheep

■ 具体例
　I have two dogs.　／　She has three boxes.　／　There are five children in the park.

■ 確かめ
　two・three・many・some などの数を表すことばがあれば、そのあとの名詞は複数形です。1つのときは a や an をつけます。

■ よくあるまちがい
　・×two child → ○two children
　・×three box → ○three boxes

★ ここがポイント：**数を表すことばのあとは複数形**。形が変わる語（men・women・children・feet・teeth）は例外として覚える。`,
    ),
  },
  {
    id: 'eigo-do-does-did',
    label: '疑問文・否定文のつくり方（do／does／did）',
    subject: 'eigo',
    test: /疑問文|否定文|\b(Do|Does|Did) (you|he|she|they|we|I|it|your|the|his|her|Tom|[A-Z][a-z]+)\b|\b(don't|doesn't|didn't|do not|does not|did not)\b/,
    section: sec(
      'おさらい：疑問文・否定文のつくり方（do／does／did）',
      `一般動詞の文は、do・does・did の力を借りて、疑問文や否定文にします。

■ きまり
　疑問文：文の最初に Do（Does・Did）を置き、動詞は**原形**（s・ed のない形）にします。
　否定文：動詞の前に don't（doesn't・didn't）を置き、動詞は原形にします。
　使い分け：今の文で主語が he・she など1人（1つ）→ does ／ 今の文でそれ以外 → do ／ 過去の文 → did

■ 具体例
　You play tennis. → Do you play tennis?　／　You don't play tennis.
　She likes music. → Does she like music?　／　She doesn't like music.（likes が like にもどる）
　He went there. → Did he go there?（went が go にもどる）
　答え方：Do you play tennis? — Yes, I do. ／ No, I don't.

■ 確かめ
　Do・Does・Did のあとの動詞に s や ed がついていないかを見ます。s や ed は do・does・did のほうが引き受けています。

■ よくあるまちがい
　・×Does she likes music? → ○Does she like music?
　・be動詞の文には do を使いません：×Do you are a student? → ○Are you a student?

★ ここがポイント：**do・does・did のあとの動詞は原形**。be動詞の文には使わない。`,
    ),
  },
  {
    id: 'eigo-pronoun',
    label: '代名詞（I・my・me・mine）',
    subject: 'eigo',
    test: /代名詞|所有格|目的格|所有代名詞|\b(mine|yours|hers|ours|theirs)\b/,
    section: sec(
      'おさらい：代名詞の形（I・my・me・mine）',
      `代名詞は、名詞の代わりをすることばです。働きによって形が変わります。

■ 形の一覧（主語 → 〜の → 〜を・に → 〜のもの）
　I → my → me → mine
　you → your → you → yours
　he → his → him → his
　she → her → her → hers
　we → our → us → ours
　they → their → them → theirs
　it → its → it

■ 使い分け
　主語になる（動詞の前）→ I・he・she など
　名詞の前につく → my・your など　　動詞や前置詞のあとに来る → me・him・them など
　「〜のもの」（あとに名詞が続かない）→ mine・yours など

■ 具体例
　This is my bag.　= This bag is mine.
　I know him.　／　Please help us.　／　Look at them.　／　Her name is Mika.

■ 確かめ
　空所のすぐあとに名詞があれば my 型、動詞のあとで文が終わるなら me 型、と見分けます。

■ よくあるまちがい
　・×Me like dogs. → ○I like dogs.
　・×This is mine bag. → ○This is my bag.

★ ここがポイント：**名詞の前は my 型、動詞のあとは me 型、「〜のもの」は mine 型**。`,
    ),
  },
  {
    id: 'eigo-past',
    label: '過去形と不規則動詞',
    subject: 'eigo',
    test: /過去形|不規則動詞|過去の文|\b(went|saw|ate|took|came|bought|wrote|said|gave|ago|yesterday)\b|\blast (night|week|year|summer|month|Sunday)\b/,
    section: sec(
      'おさらい：過去形と不規則動詞',
      `過去のことをいうときは、動詞を**過去形**にします。yesterday・last week・ago などが目印です。

■ つくり方（規則動詞）
　ふつうは ed：play → played　　e で終わる語は d だけ：like → liked
　子音字＋y は y を i に変えて ed：study → studied
　短い母音＋子音は子音を重ねて ed：stop → stopped
　be動詞：am・is → was　／　are → were

■ 形が変わる動詞（不規則動詞）
　go → went、see → saw、eat → ate、take → took、come → came、make → made、buy → bought、write → wrote、say → said、give → gave、get → got、have → had、meet → met、read → read（つづりは同じで読み方が変わる）

■ 具体例
　I went to Kyoto last summer.　／　She bought a bag yesterday.
　疑問文：Did you see him? — Yes, I did.（Did のあとは原形 see にもどる）

■ 確かめ
　yesterday・ago・last 〜 などの過去を表す語があるか、動詞が過去形になっているかを見ます。

■ よくあるまちがい
　・×I goed to school. → ○I went to school.
　・×Did he went there? → ○Did he go there?

★ ここがポイント：**過去を表す語があれば過去形**。go → went などの不規則動詞は、セットで覚える。`,
    ),
  },
  {
    id: 'eigo-progressive',
    label: '進行形（be＋ing）',
    subject: 'eigo',
    test: /進行形|現在進行|過去進行|ing形|\b(am|is|are|was|were) [a-z]+ing\b/,
    section: sec(
      'おさらい：進行形（be動詞＋動詞ing）',
      `「いま〜している」「そのとき〜していた」というときは、**be動詞＋動詞ing**の形にします。

■ きまり
　今している：am・is・are ＋ ing　／　そのときしていた：was・were ＋ ing
　ing のつけ方：
　　ふつうはそのまま：play → playing
　　e で終わる語は e をとる：make → making、write → writing
　　短い母音＋子音は子音を重ねる：run → running、swim → swimming、sit → sitting

■ 具体例
　I am reading a book now.（いま読んでいる）
　They were playing soccer at that time.（そのとき、していた）
　疑問文：Is she cooking? — Yes, she is.（be動詞を前に出す）

■ 確かめ
　be動詞と ing の**両方がそろっているか**を見ます。どちらか片方だけだと進行形になりません。

■ よくあるまちがい
　・×I playing tennis. → ○I am playing tennis.
　・×He is play. → ○He is playing.
　・know・like・want のような「状態」をあらわす動詞は、ふつう進行形にしません：×I am knowing. → ○I know.

★ ここがポイント：**進行形は「be動詞＋ing」のセット**。be動詞は主語と時間（今か過去か）で選ぶ。`,
    ),
  },
  {
    id: 'eigo-future',
    label: '未来の文（will・be going to）',
    subject: 'eigo',
    test: /未来|\bwill\b|\bwon't\b|be going to|going to|\b(tomorrow|next (week|month|year|Sunday))\b/,
    section: sec(
      'おさらい：未来の文（will と be going to）',
      `これからのことは、**will ＋ 動詞の原形**、または **be going to ＋ 動詞の原形**であらわします。

■ きまり
　will：「〜するつもり・〜でしょう」。その場で決めたことや予想によく使います。
　be going to：すでに決めてある予定や、いまの様子から起こりそうなことに使います。
　どちらも**あとの動詞は原形**（s や ed をつけない）です。目印は tomorrow・next week・soon など。

■ 具体例
　I will help you.（その場で決めた「手伝うよ」）
　We are going to visit Kyoto next month.（前から決めている予定）
　It is going to rain.（くもっていて、雨が降りそう）
　否定：I will not（won't）go.　／　I am not going to go.
　疑問：Will you come? ／ Are you going to come?

■ 確かめ
　will のあと、to のあとの動詞が原形になっているか。be going to の be動詞が主語に合っているかを見ます。

■ よくあるまちがい
　・×He will goes. → ○He will go.　（主語が he でも s はつけない）
　・×She going to buy a hat. → ○She is going to buy a hat.

★ ここがポイント：**will のあとも to のあとも原形**。be going to は be動詞を忘れない。`,
    ),
  },
  {
    id: 'eigo-modal',
    label: 'can・must・should などの使い方',
    subject: 'eigo',
    test: /助動詞|\b(can|could|must|should|may|shall)\b|\b(Can|Could|May|Shall|Must|Should) (I|you|we|he|she)\b|have to|has to|don't have to/,
    section: sec(
      'おさらい：can・must・should などの使い方',
      `can・must・should などは、動詞を助けて「できる」「しなければならない」などの意味を足すことばです。

■ きまり
　can：〜できる／〜してもよい　　　must：〜しなければならない（must not は「〜してはいけない」）
　should：〜したほうがよい　　　　　may：〜してもよい／〜かもしれない
　Can you 〜?：〜してくれますか　　Could you 〜?：〜していただけますか（ていねい）
　Shall we 〜?：〜しましょうか　　　have to：〜しなければならない（must とほぼ同じ）
　これらの**あとの動詞は原形**です。主語が she でも s はつけません。

■ 具体例
　She can swim fast.　／　You must not run here.　／　You should go to bed early.
　May I use your pen? — Sure.
　注意：don't have to は「〜しなくてもよい」で、must not（禁止）とは意味がちがいます。

■ 確かめ
　can・must・should のすぐあとの動詞が、s や ed や to のついていない原形かを見ます。

■ よくあるまちがい
　・×She cans swim. → ○She can swim.
　・×He can swims. → ○He can swim.
　・×You must to go. → ○You must go.

★ ここがポイント：**can・must・should のあとは動詞の原形**。must not と don't have to の意味のちがいに注意。`,
    ),
  },
  {
    id: 'eigo-compare',
    label: '比較（-er・-est・more・most）',
    subject: 'eigo',
    test: /比較|最上級|\bthan\b|\bas [a-z]+ as\b|\b(better|best|worse|worst)\b/,
    section: sec(
      'おさらい：比較（-er・-est・more・most）',
      `2つをくらべるときは**比較級**、3つ以上の中でいちばんのときは**最上級**を使います。

■ つくり方
　短い語：tall → taller → tallest　／　large → larger → largest（e で終わる語は r・st だけ）
　　big → bigger → biggest（子音を重ねる）　／　easy → easier → easiest（y を i に変える）
　長い語（beautiful・famous・difficult・interesting など）：more beautiful → most beautiful
　不規則：good（well）→ better → best　／　bad → worse → worst　／　many（much）→ more → most

■ 使い方
　2つをくらべる：A is taller than B.（than ＝ 〜より）
　3つ以上：A is the tallest of the three.　／　the tallest in my class
　同じくらい：A is as tall as B.

■ 具体例
　Tom is taller than Ken.　／　Mt. Fuji is the highest mountain in Japan.
　This book is more interesting than that one.

■ 確かめ
　than があれば比較級、the や of・in があれば最上級になっているかを見ます。

■ よくあるまちがい
　・×more taller → ○taller（-er と more は重ねない）
　・×the most tallest → ○the tallest

★ ここがポイント：**短い語は -er・-est、長い語は more・most**。-er と more は同時に使わない。`,
    ),
  },
  {
    id: 'eigo-wh',
    label: '疑問詞（What・Where・When・Why・How）',
    subject: 'eigo',
    test: /疑問詞|\b(What|Where|When|Why|Who|Whose|Which|How) (is|are|do|does|did|can|will|was|were|many|much|old|long|tall|about)\b/,
    section: sec(
      'おさらい：疑問詞（What・Where・When・Why・How など）',
      `疑問詞は、「何」「どこ」などをたずねることばです。**文のいちばん最初**に置きます。

■ 意味
　What：何　　Where：どこ　　When：いつ　　Who：だれ　　Whose：だれの
　Which：どちら　　Why：なぜ　　How：どう・どのように
　How many 〜：いくつ（数）　How much 〜：いくら　How old 〜：何歳　How long 〜：どのくらいの長さ・時間

■ 語順
　疑問詞 ＋ 疑問文の形：What do you like?　／　Where is the station?
　疑問詞そのものが主語のときは、do・does を使いません：Who lives here?（lives に s）

■ 答え方
　What → ものを答える　　Where → 場所　　When → 時　　Why → Because 〜.（なぜなら〜）
　How many → 数

■ 具体例
　What do you want? — I want a pen.
　Why are you sad? — Because I lost my bag.

■ 確かめ
　答えが質問にかみ合っているか（Where なのに時間を答えていないか）を見ます。

■ よくあるまちがい
　・×What you want? → ○What do you want?
　・×Where you live? → ○Where do you live?

★ ここがポイント：**疑問詞は文頭、そのあとは疑問文の語順**。答えは疑問詞に合わせる。`,
    ),
  },
  {
    id: 'eigo-article',
    label: '冠詞（a・an・the）',
    subject: 'eigo',
    test: /冠詞|a と an|\ban [a-z]+|\ba\/an\b/,
    section: sec(
      'おさらい：冠詞（a・an・the）',
      `名詞の前につく a・an・the を冠詞といいます。

■ きまり
　a：数えられる名詞が**1つ**のとき。つづりでなく**最初の音**が子音（アイウエオ以外の音）なら a：a book、a university（ユの音）
　an：最初の音が母音（ア・イ・ウ・エ・オの音）のとき：an apple、an hour（h は読まないので「アワー」）
　the：話し手と聞き手がわかっている特定のもの、前に出たもの、1つしかないもの：the sun、the moon

■ つけない場合
　複数形で一般的にいうとき：I like dogs.　／　数えられない名詞：water、music
　スポーツ・教科・食事：play tennis、study math、have breakfast　／　人の名前
　楽器には the をつけます：play the piano

■ 具体例
　He is an English teacher.　／　I saw a movie. The movie was great.（2回目は the）

■ 確かめ
　名詞が1つか、最初の音は母音か子音か、前に出た名詞かを順に見ます。

■ よくあるまちがい
　・×a apple → ○an apple
　・×an university → ○a university
　・×play the tennis → ○play tennis

★ ここがポイント：**a か an かは、つづりでなく最初の「音」で決める**。スポーツには the をつけない。`,
    ),
  },
  {
    id: 'eigo-preposition',
    label: '前置詞（at・on・in など）',
    subject: 'eigo',
    test: /前置詞|\b(in|on|at) (Monday|Tuesday|Sunday|Saturday|Friday|April|May|June|July|August|summer|winter|the morning|the afternoon|night|noon|\d)|\bby (bus|train|car|bike|plane)\b|\bin, on, at\b/,
    section: sec(
      'おさらい：前置詞（at・on・in など）',
      `前置詞は、時間や場所を表す小さなことばです。つかい分けにきまりがあります。

■ 時をあらわす
　at：時刻・ある一点　at 7:30、at noon、at night
　on：曜日・日付　on Monday、on May 5
　in：月・季節・年・午前午後　in April、in summer、in 2020、in the morning
■ 場所をあらわす
　at：ある地点　at the station　／　in：中・広い場所　in the box、in Japan　／　on：ふれている　on the desk
■ ほかによく使う
　by：手段・〜までに　by bus　／　with：道具・いっしょに　with a pen　／　for：〜のために・〜の間　for two hours
　from A to B：AからBまで

■ 具体例
　I get up at 6:30.　／　We have a test on Friday.　／　It is hot in August.

■ 確かめ
　「時刻なら at、曜日・日付なら on、月・季節・年なら in」と声に出して唱えて確かめます。

■ よくあるまちがい
　・×in Monday → ○on Monday
　・×at the morning → ○in the morning
　・×by the bus → ○by bus（手段の by には the をつけない）

★ ここがポイント：**時刻は at、曜日・日付は on、月・季節・年は in**。`,
    ),
  },
  {
    id: 'eigo-composition',
    label: '並べかえ・和文英訳のコツ',
    subject: 'eigo',
    test: /並べかえ|並べ替え|和文英訳|英作文|英語にし|英訳|英語で書|を使って英文|単語を使って|日本語に合うように/,
    section: sec(
      'おさらい：並べかえ・和文英訳のコツ',
      `並べかえや和文英訳は、**順番を決めて組み立てる**と迷いません。

■ 手順
　① 日本語の主語と動詞を、英語で決める
　② 主語 → 動詞 → 目的語の順に置く
　③ 疑問詞（What・Where など）があれば文のはじめに置く
　④ 「いつ」「どこで」は最後に置く
　⑤ 時（現在・過去・未来）、主語が1人か、複数かで動詞の形を整える

■ 具体例
　私は昨日、図書館で本を読みました。
　　主語 I ／ 動詞 read（過去形も read）／ 目的語 a book ／ 場所 in the library ／ 時 yesterday
　　→ I read a book in the library yesterday.
　あなたはどこに住んでいますか。→ Where do you live?（疑問詞が先頭、そのあとは疑問文の形）

■ 確かめ
　主語と動詞があるか、三人称の s・過去形・複数形になっているか、文のはじめが大文字で、終わりにピリオド（？）があるかを見ます。

■ よくあるまちがい
　・主語を省いてしまう（日本語は主語を省きやすい）：×Am happy. → ○I am happy.
　・日本語をそのまま英語に置きかえようとして、むずかしい語で行きづまる → 知っている簡単な語で言いかえる

★ ここがポイント：**主語と動詞を最初に決める**。むずかしい語は、知っている語で言いかえる。`,
    ),
  },
  {
    id: 'eigo-idiom',
    label: '熟語（動詞＋前置詞）のかたまり',
    subject: 'eigo',
    test: /熟語|句動詞|イディオム|\blook (for|at|after|forward)\b|take care of|\bget (up|to)\b|put on|turn (on|off)|wait for|listen to|be (interested in|good at|famous for)/,
    section: sec(
      'おさらい：熟語（動詞＋前置詞）のかたまり',
      `熟語は、いくつかの語が集まって1つの意味をもつ「かたまり」です。**かたまりのまま**覚えます。

■ よく出る熟語
　look for 〜：〜をさがす　　look at 〜：〜を見る　　look after 〜：〜の世話をする
　listen to 〜：〜を聞く　　wait for 〜：〜を待つ　　take care of 〜：〜の世話をする
　get up：起きる　　go to bed：ねる　　put on 〜：〜を着る　　take off 〜：〜をぬぐ
　turn on（off）〜：〜をつける（消す）　　be good at 〜：〜が得意だ
　be interested in 〜：〜に興味がある　　be famous for 〜：〜で有名だ

■ 具体例
　I am looking for my key.　／　She takes care of her little brother.
　Please turn off the light.　／　He is good at math.

■ 覚え方
　前置詞が変わると意味が変わります（look at は「見る」、look for は「さがす」）。単語を1つずつでなく、**例文ごと**に声に出して覚えます。

■ 確かめ
　日本語で「〜を聞く」のように「を」がつくのに、英語では前置詞が必要な語（listen to）を探します。

■ よくあるまちがい
　・×listen the music → ○listen to the music
　・×wait you → ○wait for you

★ ここがポイント：**熟語は動詞と前置詞をセットで覚える**。前置詞が変わると意味も変わる。`,
    ),
  },
  {
    id: 'eigo-imperative-tag',
    label: '命令文・Let\'s・付加疑問文・感嘆文',
    subject: 'eigo',
    test: /命令文|感嘆文|付加疑問|\bLet's\b|\b(isn't|aren't|don't|doesn't|didn't|can't|won't) (it|he|she|you|they|we|I)\?|\bHow [a-z]+!|\bWhat an? [a-z]+/,
    section: sec(
      'おさらい：命令文・Let\'s・付加疑問文・感嘆文',
      `文の形がふつうと少しちがう4つの文を整理します。

■ 命令文（〜しなさい／〜してください）
　主語を書かず、動詞の原形で始めます：Open the door.　ていねいには Please をつけます。
　禁止は Don't ＋ 原形：Don't run here.　／　be動詞は Be quiet.

■ Let's ＋ 原形（〜しましょう）
　Let's play soccer.　答え方：Yes, let's.　／　No, let's not.

■ 付加疑問文（〜ですね）
　文の終わりに、確かめるひとことをつけます。
　肯定の文には否定をつける：You like tennis, don't you?
　否定の文には肯定をつける：He isn't a teacher, is he?
　be動詞の文は be動詞を、一般動詞の文は do・does・did を使います。主語は代名詞にします。

■ 感嘆文（なんと〜だ）
　How ＋ 形容詞！：How beautiful!　／　What a ＋ 形容詞 ＋ 名詞！：What a nice day!

■ 確かめ
　付加疑問は「前の文が肯定か否定か」を見て、正反対のものをつけます。

■ よくあるまちがい
　・×Let's to go. → ○Let's go.
　・×Tom is kind, isn't Tom? → ○Tom is kind, isn't he?

★ ここがポイント：**命令文・Let's のあとは動詞の原形**。付加疑問は前の文と**正反対**の形。`,
    ),
  },
  {
    id: 'eigo-conversation',
    label: '会話表現の型',
    subject: 'eigo',
    test: /会話|対話|応答|ロールプレイ|道案内|買い物|電話|Excuse me|Thank you|You're welcome|Can I help|May I help/,
    section: sec(
      'おさらい：会話表現の型',
      `会話は**「質問 → 答え」のペア**でできています。決まった言い方（型）をいくつか覚えておけば、空所に入る文が見つかります。

■ よく出る型
　あいさつ：How are you? — I'm fine, thank you. And you?
　依頼：Can you help me? — Sure. ／ Of course. ／ Sorry, I can't.
　申し出：Can I help you? — Yes, please. ／ No, thank you.
　お礼：Thank you. — You're welcome.
　道案内：Go straight.　Turn right（left）at the second corner.　It's on your left.
　買い物：How much is it? — It's 1,000 yen.　I'll take it.（これをください）
　電話：Hello, this is Ken. May I speak to Mika? — Speaking.（私です）
　さそい：How about 〜?（〜はどう？）　Why don't we 〜?（〜しませんか）

■ 解き方
　直前の発言が、Yes・No でこたえる質問か、疑問詞（What・Where など）の質問かを見ます。それに合う答えを選びます。

■ 確かめ
　選んだ文を空所に入れて、A → B → A と声に出して読み、自然につながるかを確かめます。

■ よくあるまちがい
　・同じ単語が出てくる選択肢を選んでしまう → 意味と流れで選ぶ
　・Yes・No でこたえる質問に、理由だけを答える選択肢を選ぶ

★ ここがポイント：**質問の型を見て、それに合う答えの型を選ぶ**。声に出して流れを確かめる。`,
    ),
  },

  // ───────── 中学受験（小学生）だけ ─────────
  {
    id: 'eigo-spelling-sound',
    label: 'つづりと発音のきまり',
    subject: 'eigo',
    exam: 'chugaku',
    test: /つづり|スペル|発音|読まない文字|音と文字|アクセント|リズム|聞き取り|リスニング/,
    section: sec(
      'おさらい：つづりと発音のきまり',
      `英語は、文字の名前ではなく**音**を手がかりにすると、つづりを覚えやすくなります。

■ 二文字で一つの音
　sh（シュ）：ship　／　ch（チ）：chair　／　th（舌をかむ音）：this、think　／　ph（フ）：phone

■ 読まない文字
　kn の k：knife　／　wr の w：write　／　mb の b：climb　／　gh：night　／　listen の t　／　Wednesday の d

■ つづりのきまり
　e で終わる語に ing：make → making（e をとる）
　子音字＋y は y を i にして es・ed：study → studies、studied
　短い母音＋子音は子音を重ねる：run → running、stop → stopped

■ 覚え方
　声に出しながら書く。音の区切りで切って覚える（Sep-tem-ber）。同じ音の語をグループにする（night・light・right）。

■ 確かめ
　書いたあと、音を出して読み直します。読まない文字を落としていないか、最初と最後の文字が合っているかを見ます。

■ よくあるまちがい
　・×nife → ○knife（k を落とす）
　・×lisen → ○listen
　・×frend → ○friend

★ ここがポイント：**音と文字のきまりをセットで覚える**。読まない文字は例外として目で覚える。`,
    ),
  },
  {
    id: 'eigo-number-time',
    label: '数・時刻・曜日・月の言い方',
    subject: 'eigo',
    exam: 'chugaku',
    test: /曜日|時刻|何時|序数|基数|数字|o'clock|What time|What day|\b(January|February|March|April|June|July|August|September|October|November|December|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\b|\b(first|second|third|fourth|fifth|twelfth)\b/,
    section: sec(
      'おさらい：数・時刻・曜日・月の言い方',
      `数や日づけ、時刻の言い方は、基本のきまりを覚えると楽になります。

■ 数
　1〜12：one two three four five six seven eight nine ten eleven twelve
　13〜19は語の終わりに teen：thirteen、fourteen ...　／　20・30・40：twenty、thirty、forty（forty は u がない）
　21：twenty-one のように、十の位と一の位を - でつなぐ
■ 順番（序数）
　first、second、third、fourth、fifth、ninth（e がなくなる）、twelfth、twentieth
　日づけ：May 5 は「May fifth」と読む
■ 時刻
　3:00 → It's three o'clock.　／　3:15 → three fifteen（a quarter past three）
　3:30 → three thirty（half past three）　／　3:45 → three forty-five（a quarter to four）
　たずね方：What time is it?　／　What day is it today?（曜日）　／　What's the date today?（日づけ）
■ 曜日・月
　Sunday Monday Tuesday Wednesday Thursday Friday Saturday
　January February March April May June July August September October November December
　曜日と月は、**文のとちゅうでも大文字**で始めます。

■ よくあるまちがい
　・×fourty → ○forty　　・×fiveth → ○fifth　　・×monday → ○Monday

★ ここがポイント：**曜日・月は大文字**。teen は13〜19、-ty は20, 30, 40 …と使い分ける。`,
    ),
  },
  {
    id: 'eigo-reading-basic',
    label: '英文読解の基本',
    subject: 'eigo',
    exam: 'chugaku',
    test: /読解|英文を読|指示語|本文|質問に答え|passage|\b(However|Because|because|but)\b/,
    section: sec(
      'おさらい：英文読解の基本',
      `英文を読むときは、**答えを探しながら読む**と、むだなく内容がつかめます。

■ 読み方
　① 質問を先に読んで、何を探すか決める
　② 指示語（it・they・this・that・these）は、たいてい**直前の名詞**を指す
　③ つなぎ言葉に注意：but（しかし）、so（だから）、because（なぜなら）、and（そして）、or（または）、when（〜のとき）、if（もし〜なら）
　④ 知らない単語は、前後の文から意味を想像する
　⑤ 答えは**本文に書いてあること**だけで決める

■ 具体例
　Ken has a dog. It is very big. He walks it every morning.
　　It は a dog を指す（「犬はとても大きい」と読める）。
　I was tired, so I went to bed early.　→ so の前が原因、後が結果。
　I like tennis, but I don't like soccer.　→ but は反対の内容につなぐ。

■ 確かめ
　答えの根拠になる文に線を引き、指示語は実際に名詞を当てはめて読み直します。

■ よくあるまちがい
　・it を別の人（Ken）に取りちがえる　・自分の知識で答えてしまう　・本文の一部だけ合う選択肢を選ぶ

★ ここがポイント：**根拠は本文の中から探す**。指示語は、直前の名詞を当てはめて確かめる。`,
    ),
  },

  // ───────── 高校受験（中学生）だけ ─────────
  {
    id: 'eigo-infinitive',
    label: '不定詞（to＋動詞の原形）',
    subject: 'eigo',
    exam: 'koko',
    test: /不定詞|\bto (be|do|go|have|see|read|learn|make|get|buy|help|study|write|take|eat|play|live|use|know|meet|visit)\b|too [a-z]+ to|enough to|It is [a-z]+ (for [a-z]+ )?to/,
    section: sec(
      'おさらい：不定詞（to＋動詞の原形）',
      `**to ＋ 動詞の原形**を不定詞といいます。意味によって3つの使い方があります。

■ 3つの用法
　名詞的（〜すること）：I want to play tennis.　／　To read is fun.（It is fun to read.）
　副詞的（〜するために〔目的〕・〜して〔感情〕）：I went to the library to borrow books.　／　I'm glad to see you.
　形容詞的（〜するための）：I have a lot of homework to do.（名詞の後ろから説明する）

■ よく出る形
　too 〜 to …：〜すぎて…できない　　He is too tired to walk.
　〜 enough to …：…できるほど〜だ　　She is tall enough to reach the shelf.
　It is 〜 for A to …：Aが…することは〜だ
　want（tell・ask）A to …：Aに…してほしい（Aに…するように言う・頼む）

■ 確かめ
　to のあとの動詞が原形になっているかを見ます。to のあとが名詞なら前置詞の to（go to school）で、不定詞とは別物です。

■ よくあるまちがい
　・×I want go there. → ○I want to go there.
　・×He wants to goes. → ○He wants to go.
　・×I want you go. → ○I want you to go.

★ ここがポイント：**to のあとは必ず原形**。「〜すること」「〜するために」「〜するための」の3つの意味を文脈で見分ける。`,
    ),
  },
  {
    id: 'eigo-gerund',
    label: '動名詞（ing形）',
    subject: 'eigo',
    exam: 'koko',
    test: /動名詞|\b(enjoy|enjoyed|finish|finished|mind|practice|practiced|avoid|give up) [a-z]+ing\b|\b(good|fond|afraid|interested|busy) (at|of|in) [a-z]+ing\b|\bHow about [a-z]+ing\b|\bgo [a-z]+ing\b|\bThank you for [a-z]+ing\b/i,
    section: sec(
      'おさらい：動名詞（動詞ing＝〜すること）',
      `動詞に ing をつけると「〜すること」という名詞の働きをします。これを動名詞といいます。

■ 使い方
　主語になる：Swimming is fun.　／　補語になる：My hobby is reading books.
　目的語になる：I like playing tennis.
　前置詞のあと：be good at 〜ing、Thank you for 〜ing、How about 〜ing?、before 〜ing、be interested in 〜ing

■ 動名詞だけを目的語にする動詞
　enjoy・finish・stop・mind・practice・give up・avoid（「いまやっていること」をする・やめる）
　→ I enjoyed talking with her.
■ 不定詞（to）だけの動詞
　want・hope・decide・plan・promise（「これから」のこと）
　→ He decided to study abroad.
■ どちらもとる動詞
　like・love・start・begin：like playing = like to play

■ 確かめ
　動詞が enjoy や finish の仲間なら ing、want や decide の仲間なら to、と声に出して確かめます。

■ よくあるまちがい
　・×I enjoyed to play. → ○I enjoyed playing.
　・×She wants playing tennis. → ○She wants to play tennis.
　・×Thank you for help me. → ○Thank you for helping me.

★ ここがポイント：**enjoy・finish は ing、want・decide は to**。前置詞のあとは必ず ing。`,
    ),
  },
  {
    id: 'eigo-passive',
    label: '受け身（be＋過去分詞）',
    subject: 'eigo',
    exam: 'koko',
    test: /受け身|受動態|過去分詞|\b(is|are|was|were|be|been) (made|used|written|built|spoken|called|known|loved|taken|given|seen|found|visited|invited|painted|cleaned|born|held|sold|taught|done|broken|eaten)\b/,
    section: sec(
      'おさらい：受け身（be動詞＋過去分詞）',
      `「〜される」「〜されている」をあらわす文を受け身といい、**be動詞＋過去分詞**の形にします。

■ 作り方
　能動の文：Tom broke the window.（トムが窓をこわした）
　受け身の文：The window was broken by Tom.（窓はトムにこわされた）
　① 目的語を主語にする　② 動詞を「be動詞＋過去分詞」にする（be動詞は時と主語で決める）
　③ もとの主語を by ～ で後ろに置く（わかりきっていれば省く）

■ 過去分詞の形
　規則動詞は過去形と同じ（ed）。不規則動詞：make − made − made、write − wrote − written、see − saw − seen、take − took − taken、give − gave − given、speak − spoke − spoken、build − built − built、break − broke − broken

■ 疑問文・否定文
　Is English spoken here?（be動詞を前に出す）　／　This room isn't used.

■ 具体例
　English is spoken in many countries.　／　This book was written by Natsume Soseki.

■ 確かめ
　主語が「する側」でなく「される側」か、be動詞と過去分詞がセットで入っているかを見ます。

■ よくあるまちがい
　・×was wrote → ○was written（過去形でなく過去分詞）
　・×The room is clean by him. → ○The room is cleaned by him.

★ ここがポイント：**受け身は「be動詞＋過去分詞」のセット**。過去形と過去分詞の形がちがう動詞に注意。`,
    ),
  },
  {
    id: 'eigo-perfect',
    label: '現在完了（have＋過去分詞）',
    subject: 'eigo',
    exam: 'koko',
    test: /現在完了|完了形|\b(have|has|haven't|hasn't) (just |already |never |ever |not )?(been|gone|seen|done|lived|known|finished|eaten|read|studied|visited|made|written|taken|met|had|heard|worked)\b|\bsince [A-Z0-9]|\bhow long\b/i,
    section: sec(
      'おさらい：現在完了（have／has＋過去分詞）',
      `現在完了は、**過去から今までのつながり**をあらわす形で、have（has）＋過去分詞を使います。

■ 3つの意味
　継続（ずっと〜している）：I have lived here for ten years.　／　since 2015
　経験（〜したことがある）：Have you ever been to Kyoto?　／　I have never seen it.　／　twice・many times
　完了（〜したところ・〜してしまった）：I have just finished lunch.　／　I have already done it.　／　Have you finished yet?
■ 期間の言い方
　for ＋ 期間（for two years）　／　since ＋ 起点（since 2020）　／　How long 〜?（どのくらい）

■ 過去形とのちがい
　yesterday・last year・ago・when 〜 のように、過去の一点をはっきり示す語とは**使えません**。
　×I have seen him yesterday. → ○I saw him yesterday.
■ 区別
　have been to 〜：〜へ行ったことがある　／　have gone to 〜：〜へ行ってしまった（今はここにいない）

■ 確かめ
　have（has）のあとが過去分詞か、主語が he・she なら has か、過去を示す語が入っていないかを見ます。

■ よくあるまちがい
　・×She have lived here. → ○She has lived here.
　・×I have know him. → ○I have known him.

★ ここがポイント：**現在完了は「今とつながる」話。過去の一点を示す語とは使わない**。for と since を使い分ける。`,
    ),
  },
  {
    id: 'eigo-relative',
    label: '関係代名詞（who・which・that）',
    subject: 'eigo',
    exam: 'koko',
    test: /関係代名詞|関係副詞|先行詞|\b(who|which|whose|whom) [a-z]+/,
    section: sec(
      'おさらい：関係代名詞（who・which・that）',
      `関係代名詞は、名詞のあとに説明を足すつなぎ役です。説明される名詞を**先行詞**といいます。

■ 使い分け
　先行詞が人 → who　／　物・動物 → which　／　どちらでも → that　／　「〜の」→ whose

■ 主格（関係代名詞が説明のなかの主語）
　The girl who is singing is my sister.（歌っている女の子）
■ 目的格（関係代名詞が説明のなかの目的語）
　The book (which) I bought is interesting.（私が買った本）
　目的格は**省略できます**。名詞のあとに「主語＋動詞」が続いていたら、省略された関係代名詞を思い出します。

■ 作り方（2つの文を1つにする）
　I have a friend. She lives in Osaka.
　　→ I have a friend who lives in Osaka.（She を who に変えて先行詞のあとに置く）

■ 確かめ
　先行詞が人か物かを見て who と which を選び、関係代名詞のあとの動詞が先行詞に合っているか（a friend who lives）を見ます。

■ よくあるまちがい
　・×The girl who she is singing → ○The girl who is singing（who が she の代わりなので重ねない）
　・人に which を使う（×a friend which lives → ○a friend who lives）

★ ここがポイント：**先行詞が人なら who、物なら which**。目的格は省略できる。`,
    ),
  },
  {
    id: 'eigo-conjunction',
    label: '接続詞（when・if・because など）',
    subject: 'eigo',
    exam: 'koko',
    test: /接続詞|\b(although|though|unless|until|whether|so that|as soon as|as long as)\b|\bif\b|\bbecause\b|\bwhile\b/i,
    section: sec(
      'おさらい：接続詞（when・if・because など）',
      `接続詞は、文と文をつなぐことばです。

■ 2つの種類
　対等につなぐ：and（そして）、but（しかし）、or（または）、so（だから）
　理由・時・条件などを加える：when（〜のとき）、while（〜の間に）、before・after、until、because（なぜなら）、if（もし〜なら）、though（〜だけれども）
　that：I think (that) he is kind.（〜ということ。that は省略できる）

■ 注意
　when・if などで導く「時・条件」の文では、未来のことでも**現在形**を使います。
　○I will call you when I get home.　×when I will get home
　○If it rains tomorrow, we will stay home.

■ because と so
　I was tired, so I slept.　= I slept because I was tired.
　（so は結果を、because は理由を後ろに置く）

■ though の使い方
　Although it was cold, we played outside.　（Although と but を重ねない）

■ 確かめ
　つなぐ2つの文のうち、どちらが理由（原因）でどちらが結果かを日本語にして見ます。

■ よくあるまちがい
　・×Because I was tired, so I slept. → ○Because I was tired, I slept.（because と so は重ねない）
　・×Although it was cold, but we played. → ○Although it was cold, we played.

★ ここがポイント：**when・if の文では未来のことも現在形**。because と so、although と but は重ねない。`,
    ),
  },
  {
    id: 'eigo-indirect-question',
    label: '間接疑問文',
    subject: 'eigo',
    exam: 'koko',
    test: /間接疑問|\b(know|knows|knew|tell me|tell us|wonder|wondered|ask me|asked me|asked him|asked her|understand|remember) (what|where|when|why|how|who|which|if|whether)\b/i,
    section: sec(
      'おさらい：間接疑問文（文の中に入る疑問文）',
      `疑問文が別の文の一部になると、語順が**ふつうの文（主語＋動詞）**に変わります。これを間接疑問文といいます。

■ きまり
　do・does・did がなくなり、動詞が主語に合わせて s や過去形になります。
　Where does he live?　→ I know where he lives.（does が消えて live → lives）
　What is this?　→ Tell me what this is.（is が後ろへ）
　When did she come?　→ I don't know when she came.（did が消えて came）
　Yes・No で答える疑問文は if（whether）でつなぎます。
　Is he at home?　→ I wonder if he is at home.
　疑問詞が主語のときは、そのままの形です。Who lives here?　→ I know who lives here.

■ 具体例
　Do you know what time it is?　／　I don't know why she was late.

■ 確かめ
　文の途中にある疑問詞のあとが「主語＋動詞」の順になっているか、do・does・did が残っていないかを見ます。

■ よくあるまちがい
　・×I don't know where does he live. → ○I don't know where he lives.
　・×Do you know what is this? → ○Do you know what this is?

★ ここがポイント：**疑問詞のあとは「主語＋動詞」の順**。do・does・did は消す。`,
    ),
  },
  {
    id: 'eigo-participle',
    label: '分詞（名詞を説明する ing・過去分詞）',
    subject: 'eigo',
    exam: 'koko',
    test: /分詞|後置修飾|\b(boy|girl|man|woman|dog|book|language|picture|car|house|window|letter) (running|standing|sitting|talking|playing|reading|made|written|called|spoken|named|taken|broken|built)\b/,
    section: sec(
      'おさらい：分詞（名詞を説明する ing と過去分詞）',
      `動詞の ing 形や過去分詞は、**形容詞のように名詞を説明**できます。

■ きまり
　〜している（ing）：the boy running in the park（公園を走っている少年）
　〜された（過去分詞）：a language spoken in Canada（カナダで話されている言語）、a car made in Japan
　1語だけのときは名詞の前：a sleeping baby（ねている赤ちゃん）、a broken window（割れた窓）
　ほかの語がつくときは名詞の後ろ：the girl playing the piano

■ 見分け方
　名詞が「する側」なら ing、「される側」なら過去分詞です。
　the boy who is running = the boy running（関係代名詞を使う言い方と同じ意味）

■ 感情の語
　The movie is interesting.（映画が人をおもしろがらせる → ing）
　I am interested in the movie.（人がおもしろいと感じる → ed）

■ 確かめ
　名詞に対して「〜している」と読めるか、「〜された」と読めるかを、日本語にして見ます。

■ よくあるまちがい
　・×a language speaking in Canada → ○a language spoken in Canada
　・×I was interesting in the story. → ○I was interested in the story.

★ ここがポイント：**「する」なら ing、「される」なら過去分詞**。ほかの語がつくと名詞の後ろに置く。`,
    ),
  },
  {
    id: 'eigo-patterns',
    label: '文型（SVC・SVOO・SVOC）',
    subject: 'eigo',
    exam: 'koko',
    test: /文型|SVO|SVC|\b(give|gave|show|showed|tell|told|send|sent|teach|taught) (me|him|her|us|them|you) [a-z]+|\b(make|made|call|called|keep|kept) (me|him|her|us|them) [A-Za-z]+|\b(look|looks|looked|become|became|feel|feels|sound|sounds) (happy|sad|tired|angry|great|nice|good|bad|kind)\b/,
    section: sec(
      'おさらい：文の形（SVC・SVOO・SVOC）',
      `英語の文は、動詞のあとの並びで形が決まります（S＝主語、V＝動詞、O＝目的語、C＝補語）。

■ 主な形
　SV：He runs.
　SVC（S＝C の関係）：She is happy.　／　She looks tired.　look・become・feel・sound のあとは**形容詞**
　SVO：I like music.
　SVOO（人に物を）：My friend gave me a present.　= gave a present to me
　　buy・make は for を使う：buy me a book = buy a book for me
　SVOC（O＝C の関係）：call him Ken、make me happy

■ 具体例
　The news made us sad.（us＝sad の関係）
　He showed me his pictures.

■ 確かめ
　動詞の後ろの語が主語と「＝」の関係なら C（形容詞や名詞）です。「人」「物」の順に2つの名詞が並ぶなら SVOO です。

■ よくあるまちがい
　・×She looks happily. → ○She looks happy.（look は形容詞を取る）
　・×He gave to me a book. → ○He gave me a book.
　・×The news made us to sad. → ○The news made us sad.

★ ここがポイント：**look・become・feel のあとは形容詞**。人と物が並ぶ SVOO は、物を前に出すなら to（for）を使う。`,
    ),
  },
  {
    id: 'eigo-reading-long',
    label: '長文読解の進め方',
    subject: 'eigo',
    exam: 'koko',
    test: /長文|passage|段落|要旨|筆者|本文の内容|本文|読解|内容に合う|英文を読|However|Therefore|For example/,
    section: sec(
      'おさらい：長文読解の進め方',
      `長文は、**設問を先に読んで答えを探しながら**読むと、時間内に正確に解けます。

■ 手順
　① 設問と選択肢を先に読み、何を探すか決める
　② 段落ごとに「何についての話か」をひとことでメモする
　③ 第1段落で話題、最後の段落で結論や筆者の意見をつかむ
　④ つなぎ言葉に注目する：However（しかし）、For example（たとえば）、Therefore（だから）、In fact（実は）
　⑤ this・that・it・they がさすものは直前の文から探し、実際に当てはめて読む
　⑥ 内容一致は、選択肢の語を本文で探して細かく照合する（always・all など強い語は要注意）

■ 具体例
　Many students use phones. However, ... →
　However のあとは、前と反対の内容や問題点が来ると予想できます。

■ 確かめ
　答えの根拠になる一文を本文で指でおさえ、選択肢のすべての語が本文と合っているかを見ます。

■ よくあるまちがい
　・本文にないことを、自分の常識で選んでしまう
　・選択肢の一部だけ本文と合うものを選んでしまう
　・知らない単語で止まる → 前後の文から意味を想像して先へ進む

★ ここがポイント：**根拠は必ず本文に探す**。つなぎ言葉で話の流れ（反対・例・結論）をつかむ。`,
    ),
  },
  {
    id: 'eigo-writing-opinion',
    label: '条件英作文・自由英作文の型',
    subject: 'eigo',
    exam: 'koko',
    test: /条件英作文|自由英作|your opinion|あなたの考え|理由を|語程度|語で書|語以上|\bwords\b/,
    section: sec(
      'おさらい：条件英作文・自由英作文の型',
      `自由に書く英作文は、**型に当てはめて、知っている簡単な英語で正しく書く**のが得点のコツです。

■ 型
　① 意見：I like summer better than winter.　／　I think that ...
　② 理由：because ...
　③ 具体例：For example, ...
　④ まとめ：So I ...

■ 手順
　条件（語数、書くこと、入れる語）を確認 → 主語と動詞を決める → 短い文で書く → 見直し
　語数は、ふつう don't などの短縮形を1語として数え、ピリオドなどの記号は数えません（問題の指示に従う）。

■ 具体例
　Which do you like better, summer or winter?
　→ I like summer better because I can swim in the sea. For example, I go to the beach with my friends every year.

■ 確かめ
　主語と動詞があるか、三人称の s・過去形・複数形は合っているか、スペルは確かか、語数や条件は守れているかを見ます。

■ よくあるまちがい
　・むずかしい単語や長い文を使って文法をまちがえる → 短く、知っている語で書く
　・「理由を2つ」などの条件を見落とす

★ ここがポイント：**意見 → 理由 → 例の順で、短く正確に**。条件をすべて満たしているかを最後に確かめる。`,
    ),
  },

  // ───────── 基礎の見直し（ほかのおさらいが当てはまらないとき） ─────────
  {
    id: 'eigo-base-chugaku',
    label: '基礎の見直し：英文を読む・書くときの基本',
    subject: 'eigo',
    exam: 'chugaku',
    fallback: true,
    test: /./,
    section: sec(
      'おさらい：英文を読む・書くときの基本の確かめ方',
      `どんな英語の問題でも、次の順番で確かめると、まちがいがぐっと減ります。

■ 確かめる順番
　① **主語と動詞を探す**：英文は「だれが＋どうする」。主語は文のはじめの名詞や代名詞で、動詞はそのすぐあとです。
　② be動詞か一般動詞か：「〜です」は be動詞（am・are・is）、「〜する」は一般動詞です。
　③ 動詞の形：今の話で主語が1人（he・she・Tom）なら s をつける。過去の話（yesterday・ago）なら過去形にする。
　④ 名詞の形：2つ以上なら複数形、1つなら a か an をつける。
　⑤ 語順と書き方：文のはじめは大文字、終わりにはピリオド（？）をつける。

■ 具体例
　She ( ) tennis every day.　→ 主語は She（1人）、every day は今の話 → plays
　He ( ) a student.　→ 「〜です」は be動詞、主語は He → is

■ 確かめ
　答えを入れた文を、声に出して読み、日本語にして意味が通るかを見ます。

■ よくあるまちがい
　・主語を見落とす　・動詞に s をつけ忘れる　・日本語の順のまま並べる

★ ここがポイント：**まず主語と動詞を見つける**。そのうえで、時（今か過去か）と数（1つか2つ以上か）を確かめる。`,
    ),
  },
  {
    id: 'eigo-base-koko',
    label: '基礎の見直し：英文を読む・書くときの基本',
    subject: 'eigo',
    exam: 'koko',
    fallback: true,
    test: /./,
    section: sec(
      'おさらい：英文を読む・書くときの基本の確かめ方',
      `文法問題でも読解でも英作文でも、次の順番で確かめると、まちがいが減ります。

■ 確かめる順番
　① **主語と述語動詞を探す**：文の骨組みは「主語＋動詞」。長い文は、修飾する部分（前置詞のかたまり、who や which の説明）をかっこでくくると骨組みが見えます。
　② 時のサイン：yesterday・ago（過去）、now（進行）、tomorrow（未来）、since・for（現在完了）で動詞の形を決めます。
　③ 主語の人称と数：he・she・1人の名前なら s、複数なら are・were などを選びます。
　④ 空所の前後を見る：名詞の前なら形容詞、動詞の前後なら副詞、to のあとは原形、前置詞のあとは名詞か ing です。
　⑤ 意味が通るか：選んだ語を入れて日本語に訳し、自然かを確かめます。

■ 具体例
　She ( ) in Osaka since 2015.　→ since があるので現在完了 → has lived
　I enjoyed ( ) with him.　→ enjoy のあとは ing → talking

■ 確かめ
　文全体を声に出して読み、主語と動詞が呼応しているかを確かめます。

■ よくあるまちがい
　・時のサインを見落とす　・to のあとに s や ed をつける　・主語と動詞の数が合っていない

★ ここがポイント：**骨組み（主語＋動詞）をつかんでから、時・数・前後の語を確かめる**。`,
    ),
  },
];
