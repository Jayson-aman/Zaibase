import type { Lesson } from './lesson-types';

export const eigoLessons: Lesson[] = [
  {
    id: 'eigo_01_bunpo_kihon',
    subject: 'eigo',
    title: '英語の基本文型と時制の完全マスター',
    description: '入試の核心！5文型と時制のルールを体系的に学ぶ',
    order: 1,
    sections: [
      {
        heading: '1. 5文型の理解',
        body: `英語の文はすべて「5つの文型」に分類できる。これを理解すると、どんな長い文でも構造が見えてくる。

■ 第1文型 SV（主語＋動詞）
主語が何かをするだけの最もシンプルな形。
例）He runs.（彼は走る）
例）The sun rises.（太陽が昇る）
例）Birds fly in the sky.（鳥たちは空を飛ぶ）
★ ポイント：修飾語（in the sky など）はあっても文型には含めない。

■ 第2文型 SVC（主語＋動詞＋補語）
「S＝C（主語と補語がイコール）」になる形。be動詞や「〜になる・〜のように見える」という動詞が使われる。
例）She is kind.（彼女は親切だ ※she＝kind）
例）He became a doctor.（彼は医者になった）
例）The food smells good.（その食べ物はいいにおいがする）
★ ポイント：動詞の後ろが「形容詞」か「名詞」なら補語（C）になる。

■ 第3文型 SVO（主語＋動詞＋目的語）
「Sが〜をVする」という形。目的語は動詞が表す動作の対象。
例）I love you.（私はあなたを愛している）
例）She reads books every day.（彼女は毎日本を読む）
例）We play soccer after school.（私たちは放課後サッカーをする）
⚠ 注意：「目的語」は名詞（人・もの）のみ。形容詞は目的語にならない。

■ 第4文型 SVOO（主語＋動詞＋目的語①＋目的語②）
「SがO①にO②をVする」という形。目的語が2つある。
例）He gave me a book.（彼は私に本をくれた ※me＝目的語①、a book＝目的語②）
例）My mother made me lunch.（母は私に昼食を作ってくれた）
例）She told us the news.（彼女は私たちにニュースを教えてくれた）
★ ポイント：第4文型は「give＋人＋もの」の形に変換できる動詞で使われる（give/show/teach/tell/buy/make/send）。

■ 第5文型 SVOC（主語＋動詞＋目的語＋補語）
「SがOをCにする・CとVする」という形。O＝Cの関係が成り立つ。
例）She made me happy.（彼女は私を幸せにした ※me＝happy）
例）We call him Ken.（私たちは彼をケンと呼ぶ）
例）They found the test easy.（彼らはそのテストが簡単だとわかった）

■ 文型の見分け方まとめ
①動詞の後ろに何もない → SV（第1文型）
②動詞の後ろが「形容詞か名詞」でS＝C → SVC（第2文型）
③動詞の後ろに「名詞ひとつ」 → SVO（第3文型）
④動詞の後ろに「名詞＋名詞」 → SVOO（第4文型）
⑤動詞の後ろに「名詞＋形容詞or名詞」でO＝C → SVOC（第5文型）
⚠ 注意：第3文型と第4文型・第5文型の区別が入試で最も問われる。「O＝C」かどうかを確認しよう。`,
      },
      {
        heading: '2. 現在形・過去形・未来形',
        body: `■ be動詞の活用
現在形：am（I）／is（he/she/it）／are（you/we/they）
過去形：was（I/he/she/it）／were（you/we/they）
例）I am a student. → I was a student.
例）She is happy. → She was happy.

■ 一般動詞の現在形
・三人称単数（he/she/it）が主語のとき → 動詞に-sまたは-esをつける
・それ以外（I/you/we/they）→ 原形のまま
例）I play tennis. / He plays tennis.
例）She watches TV every night. （watch → watches）
⚠ 注意：go→goes / do→does / have→has など不規則なものも覚える。

■ 一般動詞の過去形（規則変化）
■ -ed をつけるパターン：
・そのまま＋ed：play→played / want→wanted / help→helped
・eで終わる語＋d：like→liked / live→lived / use→used
・子音字＋y→yをiに変えて＋ed：study→studied / try→tried / carry→carried
・短母音＋子音字→子音字を重ねて＋ed：stop→stopped / plan→planned / drop→dropped

■ 不規則変化動詞（重要50語）
go→went / come→came / see→saw / do→did / have→had / make→made
get→got / give→gave / take→took / know→knew / think→thought
write→wrote / read→read（発音はred）/ run→ran / eat→ate
buy→bought / bring→brought / teach→taught / catch→caught
find→found / feel→felt / keep→kept / leave→left / meet→met
say→said / speak→spoke / stand→stood / swim→swam / wear→wore
begin→began / break→broke / choose→chose / drive→drove / fall→fell
forget→forgot / grow→grew / hold→held / hurt→hurt / mean→meant
put→put / send→sent / sit→sat / sleep→slept / tell→told
win→won / lose→lost / understand→understood / become→became / hear→heard

★ ポイント：入試では原形・過去形・過去分詞の3つをセットで覚える。

■ 未来形：will vs be going to
・will＋原形：その場で決めたこと・予測・意志
例）I will help you. / It will rain tomorrow.
・be going to＋原形：前から決めていた計画・目に見えてわかる予測
例）I am going to study abroad next year.（前から決めていた）
例）Look at those clouds. It's going to rain.（今にも降りそう）
⚠ 注意：入試では「will」「be going to」どちらも「〜するつもりだ」と訳せるが、文脈で使い分ける。`,
      },
      {
        heading: '3. 進行形と完了形',
        body: `■ 現在進行形（is/are + -ing）
「今ちょうど〜しているところだ」という意味。一時的な動作を表す。
形：am/is/are ＋ 動詞のing形
例）I am studying English now.（私は今英語を勉強しているところだ）
例）She is running in the park.（彼女は公園を走っているところだ）

■ -ing形の作り方
・そのまま＋ing：play→playing / run→running（語末の子音を重ねる）
・eで終わる語はeをとって＋ing：make→making / write→writing
・ie→yに変えて＋ing：die→dying / lie→lying

■ 過去進行形（was/were + -ing）
「〜していたところだった」という過去のある時点での動作。
例）I was sleeping when he called.（彼が電話したとき、私は眠っていた）
例）They were playing soccer at 3 p.m.（午後3時に彼らはサッカーをしていた）

■ 現在完了形（have/has ＋ 過去分詞）の3用法
①経験用法「〜したことがある」：ever/never/before/once/twice などと一緒に使う
例）I have visited Tokyo twice.（私は東京を2回訪れたことがある）
例）Have you ever eaten sushi?（あなたはすし食べたことがありますか）
例）She has never been abroad.（彼女は一度も外国に行ったことがない）

②継続用法「（ずっと）〜している」：since/for と一緒に使う
例）I have lived here for five years.（私は5年間ここに住んでいる）
例）She has been sick since last Monday.（彼女は先週の月曜日からずっと病気だ）
★ ポイント：for は「期間」（for three days）、since は「起点」（since 2020）。

③完了用法「〜してしまった・〜したところだ」：already/yet/just などと一緒に使う
例）I have already finished my homework.（私はもう宿題を終えた）
例）Have you eaten lunch yet?（もう昼食を食べましたか）
例）She has just come home.（彼女はちょうど帰宅したところだ）

⚠ 注意：現在完了形は「過去の一点を示す言葉（yesterday/last year/〜ago）」とは一緒に使えない。
×I have visited Tokyo last year.
○I visited Tokyo last year.（過去形を使う）`,
      },
      {
        heading: '4. 受動態（受け身）',
        body: `受動態とは「〜される・〜された」という意味を表す形。能動態（主語が動作をする）と受動態（主語が動作をされる）の使い分けが入試でよく問われる。

■ 受動態の基本形
be動詞 ＋ 過去分詞（＋ by 〜）
例）This book is read by many people.（この本は多くの人に読まれている）
例）This cake was made by my mother.（このケーキは母によって作られた）

■ 能動態 → 受動態への変換ルール
①能動態の目的語（O）を受動態の主語にする
②動詞をbe動詞＋過去分詞に変える
③能動態の主語は「by ＋ 主語（目的格）」で文末に置く
例）Ken painted this picture.（能動）
→ This picture was painted by Ken.（受動）

例）They speak English in Australia.（能動）
→ English is spoken in Australia by them.（受動）※by themは省略可

■ 時制ごとの受動態の形
・現在形：is/are ＋ 過去分詞
例）This room is cleaned every day.
・過去形：was/were ＋ 過去分詞
例）The window was broken yesterday.
・現在完了：have/has been ＋ 過去分詞
例）The letter has been written.
・助動詞：助動詞 ＋ be ＋ 過去分詞
例）This work must be done today.

■ by 以外の前置詞を使う受動態（重要熟語）
・be known to 〜：〜に知られている
例）He is known to everyone in town.
・be known for 〜：〜で有名だ
例）Kyoto is known for its beautiful temples.
・be interested in 〜：〜に興味がある
例）I am interested in science.
・be surprised at 〜：〜に驚く
例）She was surprised at the news.
・be made from 〜：〜から作られる（原料が変化）
例）Wine is made from grapes.
・be made of 〜：〜から作られる（材料が変化しない）
例）This desk is made of wood.
・be covered with 〜：〜で覆われている
例）The mountain is covered with snow.
⚠ 注意：前置詞のセットは丸ごと覚える。入試では前置詞の選択問題が頻出。`,
      },
      {
        heading: '5. 入試例題（時制・受動態）',
        body: `以下の問題を解いて、時制と受動態の理解を確認しよう。

【問題1】（　）内から適切な語を選び、文を完成させなさい。
I ( have visited / visited / was visiting ) this museum three times.

【解答】have visited
【解説】three times（3回）は「経験」を表す現在完了形のサインワード。yesterday などの過去の一点を示す語がないため、現在完了形を使う。

【問題2】次の文を受動態に書き換えなさい。
Tom made this chair.

【解答】This chair was made by Tom.
【解説】① this chair（目的語）を主語にする ② made → was made（過去の受動態）③ Tom → by Tom で文末に。

【問題3】（　）に適切な前置詞を入れなさい。
She is interested (    ) playing the piano.

【解答】in
【解説】be interested in 〜は「〜に興味がある」という重要熟語。後ろに動詞が来る場合は動名詞（-ing形）にする。
例）be interested in swimming / be interested in cooking

★ 入試対策ポイント：
■ 時制のキーワードを覚える：already/yet/just/ever/never/for/since→現在完了、yesterday/last year/ago→過去形
■ 受動態の前置詞セットは丸暗記：be known for / be interested in / be surprised at / be made of / be made from
■ 能動態→受動態の変換は手順を守って確実に行う`,
      },
      {
        heading: '★ MAXレベル：複合時制と仮定法',
        body: `■ 時制の一致（sequence of tenses）
主節が過去形のとき、従属節（that節など）の動詞も過去形（または過去完了形）に変える。これを「時制の一致」という。

例）I think (that) he is busy.（現在形→現在形）
→ I thought (that) he was busy.（過去形→過去形）

例）She says (that) she will come.（現在→未来）
→ She said (that) she would come.（過去→would）

⚠ 注意：「不変の真理」や「習慣的事実」は時制の一致を受けない。
例）He said (that) the earth goes around the sun.（地球は太陽の周りを回る＝不変の真理）

■ 仮定法過去（現在の事実と反対のことを仮定する）
形：If ＋ S ＋ 過去形（be動詞はwere）, S ＋ would/could/might ＋ 原形
意味：「もし〜ならば、…するのになぁ」（現実はそうではない）
例）If I were a bird, I could fly freely.
（もし私が鳥なら、自由に飛べるのになぁ→実際は人間）
例）If I had more money, I would buy that car.
（もしお金がもっとあれば、あの車を買うのになぁ→実際はお金がない）

★ ポイント：仮定法ではI/he/she など人称に関係なくbe動詞はwereを使う。
（口語ではwasも使われるが、入試ではwereが正式）

■ 仮定法過去完了（過去の事実と反対のことを仮定する）
形：If ＋ S ＋ had ＋ 過去分詞, S ＋ would/could/might ＋ have ＋ 過去分詞
意味：「もし〜していたならば、…していたのになぁ」（過去の後悔・反実仮想）
例）If I had studied harder, I would have passed the exam.
（もし一生懸命勉強していたら、試験に合格できたのになぁ→実際は不合格）
例）If she had left earlier, she could have caught the train.
（もっと早く出発していたら、電車に乗れたのになぁ）

■ 仮定法とI wishの組み合わせ（入試頻出）
I wish ＋ 仮定法過去：「〜だったらいいのになぁ」（現在の事実への願望）
例）I wish I were taller.（背がもっと高ければいいのになぁ）
I wish ＋ 仮定法過去完了：「〜だったらよかったのになぁ」（過去への後悔）
例）I wish I had studied harder.（もっと勉強しておけばよかったなぁ）

⚠ 入試の罠：仮定法は「形（過去形・過去完了形）が使われているのに現在や過去のことを言っている」という見た目との矛盾がポイント。文脈で見抜く練習をしよう。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_02_meishi_daimeishi',
    subject: 'eigo',
    title: '名詞・代名詞・冠詞の完全理解',
    description: '細かいがよく出る！冠詞と代名詞の使い分けをマスター',
    order: 2,
    sections: [
      {
        heading: '1. 可算名詞と不可算名詞',
        body: `名詞は「数えられる名詞（可算名詞）」と「数えられない名詞（不可算名詞）」に分かれる。この区別が冠詞・数量表現の使い方に直結するため、入試で頻出。

■ 可算名詞（countable noun）
・1つ・2つと数えられるもの
例）book（本）/ apple（リンゴ）/ cat（猫）/ student（生徒）/ chair（いす）
・単数形にはa/anをつける、複数形は語尾に-sまたは-esをつける
例）a book → two books / an apple → five apples

■ 不可算名詞（uncountable noun）
・数えられないもの（液体・素材・抽象概念・まとまりとして扱うもの）
例）water（水）/ milk（牛乳）/ rice（米）/ money（お金）/ information（情報）
　　music（音楽）/ news（ニュース）/ advice（助言）/ homework（宿題）
⚠ 注意：news・information・advice・homeworkはよく「複数のように見えるがsをつけない」不可算名詞の代表例。
×two informations　○two pieces of information
×a news　　　　　 ○a piece of news

■ 数量表現の使い分け
・many ＋ 可算名詞の複数形：多くの〜（数えられるもの）
例）many books / many students
・much ＋ 不可算名詞：多くの〜（数えられないもの）
例）much water / much money
・a lot of / lots of ＋ 可算・不可算どちらも可：多くの〜
例）a lot of books / a lot of water
・few ＋ 可算名詞：ほとんど〜ない（否定的ニュアンス）
例）few students came to the party.（ほとんど生徒が来なかった）
・a few ＋ 可算名詞：少しある（肯定的ニュアンス）
例）I have a few friends in Tokyo.（東京に少し友達がいる）
・little ＋ 不可算名詞：ほとんど〜ない
例）He has little money.（彼はほとんどお金がない）
・a little ＋ 不可算名詞：少しある
例）I have a little time now.（今少し時間がある）

■ someとanyの違い
・some：肯定文と「依頼・勧誘の疑問文」に使う
例）I have some books.（肯定）/ Would you like some coffee?（勧誘）
・any：否定文と疑問文に使う
例）Do you have any questions?（疑問）/ I don't have any money.（否定）
★ ポイント：Shall I give you some help? のように申し出のときはsomeを使う。`,
      },
      {
        heading: '2. 冠詞（a/an/the）の使い方',
        body: `冠詞は英語の中でも特に日本人が苦手とする分野。ルールを整理して確実に得点しよう。

■ a（an）の使い方
・初めて話題に出てくる名詞（初出）につける
例）I have a dog.（私は犬を飼っている→初めて出てきた）
・「1つの」という意味で使う
例）Give me a pencil.（1本鉛筆をください）
・aは子音始まりの語の前、anは母音（a/i/u/e/o）始まりの語の前
例）a book / a cat / a university（ユニバーシティ→発音はyu→子音扱い）
例）an apple / an hour（アワー→hは発音しない→母音扱い）
⚠ 注意：スペルではなく「発音」で判断する。

■ the の使い方
・2回目以降に登場する名詞（既出・特定）につける
例）I have a dog. The dog is very cute.（最初はa、2回目からtheになる）
・文脈から特定できるもの
例）Please close the door.（その場にあるドアが特定されている）
・世界に1つしかないもの
例）the sun / the moon / the earth / the sky
・方角・海洋・川・山脈・諸島などの固有名詞
例）the Pacific Ocean / the Nile / the Alps / the Philippines
・楽器を演奏するとき
例）I play the piano. / She plays the violin.
・序数詞（1番目・2番目…）の前
例）the first / the second

■ 冠詞が不要な場合
・固有名詞（人名・国名・都市名）：Japan / Tokyo / Tom（× the Japan）
・スポーツ・遊び：I play soccer.（× play the soccer）
・食事：We have lunch at noon.（× the lunch）
・交通手段：by bus / by train / by car
・抽象名詞・物質名詞（一般的な意味で使うとき）：I love music. / Time is money.

★ ポイントまとめ：
・初出 → a/an
・2回目以降・特定 → the
・世界に1つ・固有名詞的扱い → the
・スポーツ・食事・固有名詞 → 冠詞不要`,
      },
      {
        heading: '3. 人称代名詞と格変化',
        body: `人称代名詞は文の中での役割（格）によって形が変わる。入試では空欄補充で格を選ぶ問題が頻出。

■ 格変化一覧表
| 人称 | 主格（〜は/が） | 所有格（〜の） | 目的格（〜を/に） | 所有代名詞（〜のもの） |
|------|---------|---------|---------|---------|
| 1人称単数 | I | my | me | mine |
| 2人称単数 | you | your | you | yours |
| 3人称単数（男） | he | his | him | his |
| 3人称単数（女） | she | her | her | hers |
| 3人称単数（もの） | it | its | it | ― |
| 1人称複数 | we | our | us | ours |
| 2人称複数 | you | your | you | yours |
| 3人称複数 | they | their | them | theirs |

■ 格の使い方
・主格：動詞の主語になる → He is my brother.
・所有格：名詞の前に置く → This is my bag.
・目的格：動詞や前置詞の後ろに置く → She loves him. / This is for us.
・所有代名詞：名詞の代わりになる → This bag is mine.（= my bag）

例）This is ( my / mine ) book. → my（後ろに名詞bookがあるから所有格）
例）This book is ( my / mine ). → mine（後ろに名詞がないから所有代名詞）

■ 再帰代名詞（-self / -selves）
myself / yourself / himself / herself / itself / ourselves / yourselves / themselves
①再帰用法：動詞の動作が主語自身に戻る場合
例）He hurt himself.（彼は自分自身を傷つけた）
例）She looked at herself in the mirror.（彼女は鏡で自分を見た）
②強調用法：主語・目的語を強調する（省略しても文意は変わらない）
例）I myself cooked this dish.（私自身がこの料理を作った）
例）She did the work herself.（彼女はその仕事を自分でした）

⚠ 注意：by oneself は「ひとりで・独力で」という熟語。
例）She lives by herself.（彼女はひとりで暮らしている）`,
      },
      {
        heading: '4. 指示代名詞・不定代名詞',
        body: `■ 指示代名詞
・this（これ）/ that（あれ）→ 単数
・these（これら）/ those（あれら）→ 複数
・近いものにはthis/these、遠いものにはthat/thoseを使う
例）This is my pen. / That is her bag.
例）These are my books. / Those are her shoes.

★ that/those が「前出の名詞の繰り返しを避ける」ときに使われる用法
例）The climate of Osaka is warmer than that of Sapporo.
（that = the climate のくり返しを避けている）

■ one / ones（前出の名詞の代用）
同じ種類のものを指すが、特定ではない（不特定の名詞を代用）
・one → 単数の可算名詞の代用
・ones → 複数の可算名詞の代用
例）I need a pen. Do you have one?（one＝ a pen の代用、特定のものではない）
例）I like the red ones better than the blue ones.（ones＝flowers等の複数名詞）
⚠ 注意：it は特定のものを指す（= the pen）、one は不特定（= a pen）

■ other / another / others / the others の使い分け
4つの使い分けは入試で最も問われるポイントのひとつ。

・another：「もう一つ（の）」→ 不特定の1つ（可算名詞単数の前）
例）I'd like another cup of tea.（もう1杯お茶をください）

・other ＋ 名詞：「他の〜」→ 特定されていない複数
例）Do you have any other questions?（他に質問はありますか）

・others（= other + 複数名詞の代わり）：「他の人々・他のもの」→ 不特定の複数
例）Some students like math, and others like English.（ある生徒は数学が好きで、他の人々は英語が好き）

・the others：「残りすべて」→ 全体から一部を除いた残り全員・全部
例）I have three pens. One is red, and the others are blue.（1本は赤で、残りの2本はすべて青だ）

★ 覚え方：全部で3つの場合 → one / another / the other（残りの1つ）
　　　　　全部で4つ以上の場合 → one / some / the others（残り全部）`,
      },
      {
        heading: '5. 入試例題',
        body: `以下の問題を解いて、名詞・代名詞・冠詞の理解を確認しよう。

【問題1】（　）内から正しいものを選びなさい。
My father gave me ( a / the / × ) useful advice about my future.

【解答】×（冠詞なし）
【解説】adviceは不可算名詞なのでa/anはつけられない。また初出・特定でもないのでtheも不要。「some useful advice」「a piece of advice」なら正しい。

【問題2】（　）に適切な代名詞を入れなさい。
That is not my umbrella. Mine is black. Where is (    )?

a) you   b) your   c) yours   d) yourself

【解答】c) yours
【解説】「あなたのものはどこですか」という文。後ろに名詞がなく、所有代名詞（yours）を使う。yourは後ろに名詞が必要。

【問題3】（　）に適切な語を選びなさい。
I have two cats. One is white, and (    ) is black.

a) other   b) another   c) the other   d) the others

【解答】c) the other
【解説】全部で2匹のとき、1匹を「one」で示したら、残りの1匹は「the other」（残りのもう一方）。「the others」は残り全部（3つ以上の残り）。

★ 入試対策ポイント：
■ 不可算名詞（information/advice/news/homework）にはa/anをつけない
■ 所有格（my）は名詞の前に、所有代名詞（mine）は名詞の代わりに
■ one/another/the other/others/the othersの使い分けは図で整理して覚える`,
      },
      {
        heading: '★ MAXレベル：複数形の例外と数量表現の精密使い分け',
        body: `■ 不規則複数形（重要語一覧）
・child → children（子ども）
・man → men（男性） / woman → women（女性）
・foot → feet（足）/ tooth → teeth（歯）/ goose → geese（ガチョウ）
・mouse → mice（ネズミ） / louse → lice（シラミ）
・ox → oxen（雄牛）
・単複同形（単数と複数が同じ形）
　sheep → sheep / fish → fish / deer → deer / series → series / species → species
⚠ 注意：「fish」は個々の魚を指す場合はfishes（複数種の魚）ともなる。

■ 常に複数形で使われる名詞（s がないと意味が変わる）
・scissors（はさみ）/ glasses（眼鏡）/ pants（ズボン）/ stairs（階段）
・これらは「a pair of 〜」で数える
例）a pair of scissors / two pairs of glasses

■ 数量表現の精密な使い分け
・a few ≒「少しある」（肯定的）／few ≒「ほとんどない」（否定的）
例）I have a few friends here.（少し友達がいる → 良かった）
例）I have few friends here.（ほとんど友達がいない → 寂しい）

・quite a few ＝「かなり多くの」（可算名詞、肯定的）
例）Quite a few people attended the meeting.（かなり多くの人が参加した）
⚠ 注意：「quite a few」は「ほんの少し」ではなく「かなり多く」という意味。見た目に騙されないこと。

■ every / each / both / neither の使い方
・every ＋ 単数名詞：「すべての〜」全体をひとまとまりとして見る
例）Every student in our class studies hard.（動詞は単数形のstudies）
・each ＋ 単数名詞：「それぞれの〜」個々を強調
例）Each child has their own room.（動詞はhas）
・both ＋ 複数名詞：「両方の〜」（2つの対象）
例）Both students passed the exam.（動詞はpassed）
・neither ＋ 単数名詞：「どちらも〜ない」（2つのうちどちらも否定）
例）Neither student passed the exam.（どちらの生徒も合格しなかった）
・either ＋ 単数名詞：「どちらか一方の〜」
例）Either plan is fine.（どちらの計画でもいい）

⚠ 入試の罠：every/each/either/neither のあとの動詞は単数扱い。both のあとは複数扱い。
×Every students are... → ○Every student is...
×Both student is... → ○Both students are...`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_03_dokkai',
    subject: 'eigo',
    title: '長文読解の攻略技術',
    description: '入試英語の配点No.1！長文を速く正確に読む',
    order: 3,
    sections: [
      {
        heading: '1. 長文読解の基本戦略',
        body: `入試英語の長文読解は配点が最も高く、ここで差がつく。闇雲に最初から読み始めるのではなく、戦略的なアプローチが必要だ。

■ 先読みの手順（最重要）
①まず設問（問い）と選択肢をすべて読む
②どこに答えが書いてあるかを予測する
③本文を読みながら答えを探す

例）「第3段落の内容に合うものを選べ」という設問があれば、第3段落を重点的に読む。
先読みを習慣にするだけで読解の速度と正確さが格段に上がる。

■ 段落ごとの中心文（topic sentence）の見つけ方
英語の文章は「各段落の最初の文（またはまとめの最後の文）が中心文（topic sentence）」になる論理構造が基本。
・最初の文：その段落で何を言うかを予告する
・中間の文：具体例・理由・補足説明
・最後の文：まとめ・次の段落へのつなぎ

★ ポイント：topic sentenceを読むだけで段落の内容がわかる。時間が足りないときはtopic sentenceだけ読んで問いに答えることもできる。

■ 接続詞による論理構造の把握
接続詞・接続副詞は文章の「流れのサイン」。読み方が変わるポイントで必ず止まって確認する。

・However（しかし）→ 前の内容と逆のことが来る（重要な反転ポイント）
例）I like cats. However, I'm allergic to them.

・Therefore / So（だから・したがって）→ 前の内容の結論が来る
例）He studied hard. Therefore, he passed the exam.

・For example / For instance（たとえば）→ 前の内容の具体例が来る
例）Many animals hibernate. For example, bears sleep through winter.

・In addition / Also / Furthermore（さらに・加えて）→ 同じ方向の内容が追加される

・Although / Though / Even though（〜だけれども）→ 逆接のかたまりを作る

⚠ 注意：Howeverが出てきたら前後の内容が逆になる。設問で「筆者の主張はどれか」と聞かれたときはHoweverの後ろに答えがあることが多い。`,
      },
      {
        heading: '2. 語彙から文意を推測する方法',
        body: `知らない単語が出てきても諦めない。文脈と語の成り立ちから意味を推測できる。

■ 文脈（前後の文）からの推測
知らない単語があっても、その前後の文から意味を絞り込む。

例）The scientist made a remarkable discovery. Her finding surprised everyone in the world.
→ "discovery" が何かわからなくても "Her finding surprised everyone" から「発見・発見したもの」と推測できる。

■ 逆接・言い換えを使った推測
・However・but・on the other hand の後ろは反対の意味
例）He was very frugal; however, his brother was lavish.
→ frugal と lavish が逆の意味とわかる。brotherが「贅沢な」人なら frugal は「倹約的な」。

・or・that is・in other words の後ろは言い換え（同義語）
例）She was loquacious, or talkative, at the party.
→ loquacious = talkative（おしゃべりな）とわかる。

■ 接頭語（prefix）の意味
・un- / in- / im- / dis- ：否定・反対
例）unhappy（不幸な）/ impossible（不可能な）/ disagree（反対する）
・re- ：再び
例）replay（再び演じる）/ reuse（再利用する）/ return（戻る）
・pre- ：前もって
例）preview（試写）/ prepare（準備する）/ predict（予測する）
・mis- ：誤って
例）mistake（誤り）/ misunderstand（誤解する）

■ 接尾語（suffix）の意味
・-tion / -sion：名詞（動作・状態）
例）education（教育）/ decision（決定）/ information（情報）
・-ment：名詞（結果・状態）
例）improvement（向上）/ movement（運動）/ excitement（興奮）
・-ness：名詞（性質・状態）
例）happiness（幸福）/ kindness（親切）/ darkness（暗さ）
・-ful：形容詞（〜に満ちた）
例）beautiful / helpful / colorful / careful
・-less：形容詞（〜がない）
例）careless（不注意な）/ homeless（家のない）/ useless（役に立たない）
・-ly：副詞（〜の方法で）
例）quickly / carefully / suddenly / fortunately

★ ポイント：接頭語・接尾語がわかると初見の単語でも品詞と大まかな意味が推測できる。`,
      },
      {
        heading: '3. 設問タイプ別の解法',
        body: `長文読解の設問にはいくつかのパターンがある。それぞれの解き方を覚えておくと確実に正解できる。

■ 内容一致（T/F型・選択型）の解法
「本文の内容と合うものはどれか」「正しいものを選べ」という問い。
手順：
①選択肢の中のキーワードを本文の中で探す
②選択肢の文と本文の対応箇所を一語一語比較する
③言い換えに注意：同じ意味でも別の単語・表現が使われることがある

例）選択肢：Tom visited Paris last year.
　　本文：Tom went to France in 2023.
→ visited＝went to、Paris＝France（Parisはフランスの都市）、last year＝in 2023、と対応している。

⚠ 注意：「少し内容が変えてある誤り選択肢」に気をつける。主語・動作・時間・場所のどれか一つが違うことが多い。
例）本文：She gave him a book. → 誤り選択肢：He gave her a book.（主語と目的語が逆）

■ 空所補充（linking word）の解法
「（　　）に入る最も適切な語句を選べ」という問い。
手順：
①空所の前後の文の論理関係を確認する（逆接？追加？理由？）
②その関係に合う接続語を選ぶ

・逆接：However / But / Although / Nevertheless
・追加：In addition / Also / Furthermore / Moreover
・理由：Because / Since / Therefore / As a result
・例示：For example / For instance

■ 表題選択問題（タイトル・テーマ）の解法
「この文章のタイトルとして最も適切なものはどれか」という問い。
手順：
①各段落のtopic sentenceを読む
②最後の段落（まとめの段落）を特に重視する
③広すぎず狭すぎない、本文全体をカバーするものを選ぶ

⚠ 注意：一部の段落の内容しか反映していない選択肢は不正解。本文全体のテーマを選ぶ。

■ 指示語問題（itやtheyが指すものを答える）
「下線部のitが指すものは何か」という問い。
手順：
①itやtheyより前の文から探す（通常1〜2文前にある）
②見つかったら代入して意味が通るか確認する

例）I saw a dog. It was barking loudly. → It = a dog`,
      },
      {
        heading: '4. 記述問題（日本語・英語で答える）',
        body: `記述問題は自分の言葉で答えるタイプで、差がつきやすい問題。形式とコツを覚えておく。

■ 英語で答える場合
・必ず「主語＋動詞」を含めた完全な文で答える
・質問文の語を使って答える（使い回しOK）
・疑問詞で始まる質問→その疑問詞に対応した内容を答える

例）Why did he go to the library?（なぜ彼は図書館に行ったのか）
→ Because he wanted to study English.（英語を勉強したかったから）

例）What did she find in the box?（彼女は箱の中で何を見つけたか）
→ She found an old photo.（古い写真を見つけた）

★ ポイント：
・Whoで聞かれたら「人」を答える
・Whereで聞かれたら「場所」を答える
・Whenで聞かれたら「時間・時期」を答える
・Howで聞かれたら「方法・状態」を答える
・Why は Because〜で答える（必ずBecauseから始める）

■ 日本語で答える場合
・本文の対応箇所を見つけて、その日本語訳を基本にする
・補足が必要な場合は文脈から補う
・「〜について」「〜という理由で」などをつけて自然な日本語にする
・字数制限がある場合：超えないことが原則、不足しすぎても減点

■ 字数制限に合わせたまとめ方
・長めに書いたものを削る方向で調整する
・「なぜなら〜だから」など理由の部分で字数を調整
・「〜ということ」などの体言止めを避け、「〜だから」「〜している」で終わる文にする

⚠ 注意：英語で答えるとき、質問が過去形ならば答えも過去形にする。
例）Did she go to school? → Yes, she did. / No, she didn't.
例）Where does he live? → He lives in Osaka.（現在形で聞かれたら現在形で）`,
      },
      {
        heading: '5. 入試例題（読解）',
        body: `以下の英文を読んで、問いに答えなさい。

【英文】
Every year, millions of people around the world try to learn a new language. Some do it for work, and others do it for travel or personal interest. However, many people give up before they can speak the language well. One reason is that they try to study too much grammar at the beginning. Instead, language experts suggest that listening and speaking should come first.

Children learn their first language not by studying textbooks, but by listening to people around them and trying to speak. In the same way, adult learners can improve their language skills by watching movies, listening to music, and having conversations with native speakers.

Of course, grammar is also important. But it is more effective to learn grammar rules naturally, through real examples, than to memorize every rule from a book. The most successful language learners enjoy the process of learning, not just the goal of becoming fluent.

【問題1】なぜ多くの人が新しい言語を習得する前に諦めてしまうのか、日本語で説明しなさい。（20字程度）

【解答例】最初から文法を勉強しすぎてしまうから。

【解説】第1段落の"One reason is that they try to study too much grammar at the beginning."に対応。

【問題2】下線部の "In the same way" は何と同じ方法を指すか。日本語で答えなさい。

【解答例】周りの人の話を聞いて、話そうとすること。

【解説】直前の "listening to people around them and trying to speak" が指す内容。

【問題3】この文章のタイトルとして最も適切なものはどれか。
a) The Importance of Grammar in Language Learning
b) How to Become Fluent in a Week
c) Effective Ways to Learn a New Language
d) Why Children Are Better Language Learners

【解答】c)
【解説】文章全体が「言語学習の効果的な方法」について述べている。a)は一側面のみ、b)・d)は本文に合わない。`,
      },
      {
        heading: '★ MAXレベル：論説文・グラフ付き読解',
        body: `■ グラフ・図表と組み合わせた読解問題
近年の入試では「グラフや表の読み取り」と「英文読解」を組み合わせた問題が増えている。

解法のポイント：
①まずグラフの「タイトル・縦軸・横軸・単位」を確認する
②本文中にグラフに言及している箇所を探す（"According to the chart..." / "As shown in the graph..."）
③本文とグラフの数値・傾向を照合する

よく使われるグラフ表現：
・increase / rise / go up：増加する
・decrease / fall / drop / go down：減少する
・remain stable / stay the same：変わらない
・reach a peak / reach the highest point：最高値に達する
・roughly / approximately：おおよそ〜
例）The number of users increased by about 30% in 2023.

⚠ 注意：グラフの数値と本文の記述が食い違っているのが「誤りの選択肢」として使われることがある。必ず両方を照合する。

■ 複数の文章を比較する形式
英語で「AとBの2つの文章を読んで答える」という形式。

解法のポイント：
①両方の文章を読んでから設問を見る
②「AもBも述べていること」「Aだけが述べていること」「Bだけが述べていること」を整理する
③「どちらの意見に賛成か・その理由」という記述問題が出ることがある

■ 日英の論理展開の違い（重要な背景知識）
・英語の文章：「結論・主張→理由・根拠→具体例」の順（演繹型）
　最初の段落に「この文章で言いたいこと」がある（topic sentenceファースト）
・日本語の文章：「背景→詳細→結論」の順（帰納型）
　最後に結論が来ることが多い

この違いを知っておくと、英語の長文を読むスピードが大幅に上がる。最初の段落・各段落の最初の文を特に重視して読む習慣をつけよう。

★ 入試で問われる背景知識テーマ（頻出分野）
■ 環境問題：global warming / climate change / carbon dioxide / recycle
■ 国際理解：multicultural society / diversity / exchange student
■ テクノロジー：artificial intelligence / SNS / online shopping / digital divide
■ 健康・福祉：mental health / volunteer / elderly people / medical care
これらのテーマに関する英単語を事前に覚えておくと長文が圧倒的に読みやすくなる。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_04_eibun',
    subject: 'eigo',
    title: '英作文・英文並び替えの攻略',
    description: '配点が高い英作文を自信を持って書けるようにする',
    order: 4,
    sections: [
      {
        heading: '1. 英文の基本語順',
        body: `英語と日本語は語順が大きく異なる。英語では「誰が→何をする→何を（誰に）→どこで→いつ」という基本の語順がある。

■ 日本語と英語の語順の違い
日本語：私は　昨日　図書館で　英語を　勉強した。
英語：I studied English at the library yesterday.
→ 英語では動詞（studied）が早い位置に来る。

■ 基本語順のルール
S（主語）+ V（動詞）+ O（目的語）+ 場所 + 時間
例）I eat lunch at school every day.（私は毎日学校で昼食を食べる）
例）She studied math in her room last night.（彼女は昨夜自分の部屋で数学を勉強した）
★ ポイント：「場所」より「時間」を後ろに置くのが自然な英語。

■ 修飾語の位置
・形容詞は名詞の前に置く（日本語と同じ）
例）a beautiful flower（美しい花）/ an interesting book（面白い本）
・副詞の位置（動詞の前・文の最後）
例）She always studies hard.（alwaysは一般動詞の前）
例）She is always kind.（be動詞の後ろ）
頻度副詞の語順：always / usually / often / sometimes / rarely / never
　→ 一般動詞の前、be動詞の後ろ

■ 否定文の作り方
・be動詞：be動詞 ＋ not
例）She is not busy. / I was not tired.
・一般動詞：do/does/did ＋ not ＋ 原形
例）I do not like math. / She does not play tennis. / He did not go there.
・助動詞：助動詞 ＋ not ＋ 原形
例）I cannot swim. / She should not eat too much.
⚠ 注意：三単現では「does not」を使い、動詞は原形に戻る。
× She doesn't likes cats. → ○ She doesn't like cats.

■ 疑問文の語順
・be動詞：be動詞 ＋ 主語
例）Is she happy? / Were they at home?
・一般動詞：Do/Does/Did ＋ 主語 ＋ 動詞の原形
例）Do you like music? / Does he play soccer? / Did she come here?
・疑問詞がある場合：疑問詞 ＋ do/does/did ＋ 主語 ＋ 原形
例）Where do you live? / What did she say?`,
      },
      {
        heading: '2. 並び替え問題の解き方',
        body: `並び替え問題は「正しい英語の語順を知っているか」を問う問題。手順に従えば確実に解ける。

■ 並び替えの手順
①まず「動詞」を探す（時制・形に注意）
②動詞に合う「主語」を特定する
③目的語・補語・修飾語を配置する
④全体を読んで意味が通るか確認する

■ 疑問文の語順（要注意）
疑問文では語順が変わるため特に注意。

Do/Does/Did ＋ 主語 ＋ 動詞の原形 ～?
例）（you / do / music / like）→ Do you like music?

疑問詞を使う場合：疑問詞 ＋ do/does/did ＋ 主語 ＋ 原形
例）（does / where / she / live）→ Where does she live?

WH疑問文でbe動詞を使う場合：疑問詞 ＋ be動詞 ＋ 主語
例）（is / who / that / man）→ Who is that man?

■ 間接疑問文（疑問文が別の文に組み込まれた形）
間接疑問文では疑問文の語順（倒置）を使わず、「疑問詞＋主語＋動詞」の普通の語順になる。

・直接疑問文：Where does she live?
・間接疑問文：I don't know where she lives.（語順が普通の文と同じ）

例）Do you know what time it is?（今何時か知っていますか？）
例）I wonder why he was late.（なぜ彼が遅刻したのか不思議だ）
⚠ 注意：間接疑問文の中では疑問文の語順にしない。これが入試で最もよく出る落とし穴。

■ 並び替え問題の頻出パターン
・There is/are 〜：「〜がある」
例）There are many students in the classroom.
・It takes 〜 to：「〜するのに…かかる」
例）It takes an hour to go to school by bus.
・It is 〜 for 人 to：「人が〜することは…だ」
例）It is important for us to study English.
★ ポイント：これらのパターンはかたまりで覚えてしまうと並び替えが楽になる。`,
      },
      {
        heading: '3. 条件英作文（日本語から英訳）',
        body: `「次の日本語を英語にしなさい」という条件英作文は指定された語数や条件の中で英文を作る問題。

■ 日→英の変換手順
①日本語の意味を確認する
②英語の主語と動詞を決める（どの文型になるかも考える）
③適切な時制・語形を選ぶ（過去・現在・未来・進行形・完了形）
④修飾語（場所・時間）を加える
⑤語数をカウントし、指定に合わせる

例）「私は先週、友達と映画を見た。」→ I watched a movie with my friend last week.

■ 省略できる情報と省略できない情報
・省略できない：主語（私は）・動詞（〜した）・目的語（映画を）
・調整できる：修飾語（先週・友達と）は字数に合わせて省略可

例）「できるだけ早く」→ as soon as possible（省略せず使う重要表現）
例）「何年もの間」→ for many years / for years

■ よく使えるパターン表現（丸ごと覚える）
■ 意見を言う：I think (that)～ / In my opinion, ～
例）I think that English is very important.

■ 重要性を述べる：It is important/necessary to ～
例）It is important to sleep enough every night.

■ 経験を述べる：I have never ～ / I have always ～ / I've been to ～
例）I have never been to Hokkaido.

■ したいことを述べる：I want to ～ / I would like to ～
例）I want to travel around the world in the future.

■ 比較：A is more ～ than B / I prefer A to B
例）Summer is hotter than winter in Japan.

⚠ 注意：英作文で「絶対に避けるミス」
・三単現のsを忘れる（She likes, He plays）
・過去形を間違える（go→went, see→saw）
・文末のピリオドを忘れる
・大文字で始まるのを忘れる`,
      },
      {
        heading: '4. 自由英作文（意見・体験を書く）',
        body: `「あなたの意見を英語で書きなさい」という自由英作文は、構成（ストラクチャー）を守ることが高得点のカギ。

■ 三段構成（基本フォーマット）
①序論（Introduction）：意見・立場を述べる
②本論（Body）：理由・具体例を書く
③結論（Conclusion）：意見をまとめる

■ 序論で使える表現
・I think (that)～ because ～（〜だと思う、なぜなら〜だから）
例）I think that studying abroad is a good experience because you can learn about different cultures.

・In my opinion, ～（私の意見では）
例）In my opinion, it is very important to keep the environment clean.

■ 本論で使える表現（具体例・理由）
・First, / First of all,（まず）
例）First, I can meet many people from different countries.

・Second, / Also, / In addition,（次に・また・加えて）
例）Also, I can improve my English skills by speaking with native speakers.

・For example, / For instance,（たとえば）
例）For example, many students who study abroad say they become more independent.

■ 結論で使える表現
・In conclusion, / To sum up,（まとめると）
例）In conclusion, I think studying abroad is a wonderful opportunity for students.

・That is why I believe ～（そういうわけで私は〜と考える）
例）That is why I believe that everyone should try to learn a foreign language.

■ つなぎ言葉（Linking Words）一覧
・追加：Also / In addition / Furthermore / Moreover（さらに）
・逆接：However / On the other hand / But（しかし・一方で）
・理由：Because / Since / As（〜だから）
・結果：Therefore / So / As a result（だから・その結果）
・例示：For example / For instance（たとえば）

★ 60語程度の英作文の目安：
序論2文（15語程度）＋本論3〜4文（30語程度）＋結論2文（15語程度）＝計60語前後`,
      },
      {
        heading: '5. 入試例題（英作文）',
        body: `以下の問題を解いて、英作文の技術を確認しよう。

【問題1】次の語句を並び替えて、正しい英文を作りなさい。（1語不要）
（know / I / she / where / don't / lives / does）

【解答】I don't know where she lives.（"does" が不要）
【解説】間接疑問文では「疑問詞＋主語＋動詞」の語順になる。"where does she live"（疑問文の語順）ではなく"where she lives"（普通の語順）にする。三単現のsをlivesに忘れずにつける。

【問題2】次の日本語を英語にしなさい。（6語以上で答えること）
「私は将来、英語の先生になりたいと思っています。」

【解答例】I want to be an English teacher in the future.（9語）
【別解】I hope to become an English teacher when I grow up.（10語）
【解説】「〜になりたい」= want to be / hope to become。「将来」= in the future / when I grow up。「英語の先生」= an English teacher（冠詞anを忘れない）。

【問題3】次のテーマについて、60語程度の英語で自分の意見を書きなさい。
「スマートフォンは子どもにとって良いものか、悪いものか？」

【解答例】
I think that smartphones are useful for children. First, they can learn many things by searching the internet. For example, I often use my phone to look up new words when I study English. However, we should not use smartphones too much. In conclusion, if children use them wisely, smartphones are a helpful tool.（約60語）
【ポイント】First→For example→However→In conclusionの流れで論理的に展開している。`,
      },
      {
        heading: '★ MAXレベル：複雑な構文と論理的英文',
        body: `■ 関係代名詞（who / which / that / whose）
関係代名詞は「2つの文をつなぐ接着剤」。後ろから前の名詞を修飾する。

・who：先行詞が「人」の場合
例）I know a man. He speaks five languages.
→ I know a man who speaks five languages.（5ヶ国語を話す男性を知っている）

・which：先行詞が「もの・動物」の場合
例）I read a book. It was very interesting.
→ I read a book which was very interesting.（とても面白い本を読んだ）

・that：人・ものどちらにも使える（who/whichの代わり）
例）She is the girl that I met yesterday.

・whose：先行詞の「所有」を表す（〜の）
例）I have a friend whose father is a doctor.（父が医者の友達がいる）

■ 関係代名詞の省略
目的格の関係代名詞（who(m)/which/that）は省略できる。
例）This is the book (that) I bought yesterday.（昨日買った本）
例）She is the girl (who) I met at the party.（パーティで会った女の子）

■ 分詞構文（上級文法）
現在分詞（-ing）または過去分詞を使って副詞節を短縮する表現。
・能動・進行の意味：〜しながら、〜して
例）Walking along the river, I found a beautiful flower.（川に沿って歩いていると〜）
・完了・受動の意味：〜された、〜してしまって
例）Having finished my homework, I played video games.（宿題を終えて〜）
⚠ 注意：分詞の意味上の主語は主節の主語と一致する必要がある。

■ 比較の複合表現
・not as ～ as ...：...ほど〜ではない
例）This book is not as difficult as that one.（この本はあの本ほど難しくない）
・the ＋ 比較級, the ＋ 比較級：〜すればするほど〜だ
例）The harder you study, the better your grades will be.（一生懸命勉強すればするほど成績が上がる）
・比較級 ＋ and ＋ 比較級：ますます〜
例）It's getting hotter and hotter.（ますます暑くなっている）
例）More and more people use smartphones.（ますます多くの人がスマートフォンを使っている）

★ 入試でよく問われる複雑な構文パターン
■ It seems that ～：〜のようだ
例）It seems that he is busy.（彼は忙しそうだ）
■ so ～ that ...:とても〜なので...だ
例）She was so tired that she fell asleep at once.`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_05_bunpo_oyo',
    subject: 'eigo',
    title: '不定詞・動名詞・関係詞・接続詞の応用',
    description: '中学英語の集大成！複雑な文を作る文法を完全習得',
    order: 5,
    sections: [
      {
        heading: '1. 不定詞（to＋原形）の3用法',
        body: `不定詞は中学英語の中でも最も多用される文法で、入試では毎年必ず出題される。3つの用法を確実に区別しよう。

■ ①名詞的用法：「〜すること」
文の主語・目的語・補語になる。
例）To study English is important.（英語を勉強することは大切だ）→ 主語
例）I want to become a doctor.（私は医者になりたい）→ 目的語
例）My dream is to travel the world.（私の夢は世界を旅することだ）→ 補語
★ ポイント："It is ～ to ..." の形もよく使われる。
例）It is fun to play tennis.（テニスをすることは楽しい）

■ ②形容詞的用法：「〜するための・〜すべき」
前の名詞を後ろから修飾する。
例）I need a book to read.（読むための本が必要だ ※book を修飾）
例）I have a lot of things to do.（すべき事がたくさんある）
例）Please give me something to eat.（何か食べるものをください）
★ ポイント：「名詞 ＋ to ＋ 原形」のかたまりで後ろから名詞を修飾する。

■ ③副詞的用法：「〜するために・〜して」
動詞・形容詞・文全体を修飾する。
例）I go to school to study.（勉強するために学校に行く）→ 目的
例）I am happy to see you.（あなたに会えて嬉しい）→ 感情の原因
例）He grew up to be a scientist.（彼は成長して科学者になった）→ 結果

■ 3用法の見分け方
①文の主語・目的語・補語になっている → 名詞的用法
②前に名詞があり、その名詞を修飾している → 形容詞的用法
③動詞や形容詞を修飾している（目的・原因・結果）→ 副詞的用法

■ too ～ to 構文・enough to 構文（頻出）
・too ～ to 原形：「〜すぎて…できない」
例）This box is too heavy to carry.（この箱は重すぎて運べない）
例）He is too young to drive a car.（彼は若すぎて車を運転できない）
・形容詞/副詞 ＋ enough to 原形：「〜するのに十分〜だ」
例）She is tall enough to reach the shelf.（彼女は棚に届くのに十分な高さだ）
例）I don't have enough money to buy that bag.（あのバッグを買うのに十分なお金がない）`,
      },
      {
        heading: '2. 動名詞（-ing形）の用法',
        body: `動名詞は動詞にingをつけて名詞として使う形。不定詞（to＋原形）と混同しやすいため、使い分けを完全にマスターしよう。

■ 動名詞の基本用法
・主語になる：「〜すること」
例）Swimming is fun.（水泳は楽しい）
・目的語になる：「〜すること」
例）I enjoy reading books.（私は本を読むことが好きだ）
・前置詞の後ろに来る：「〜すること」
例）Thank you for helping me.（手伝ってくれてありがとう）
例）I'm good at playing the piano.（私はピアノが得意だ）

■ 動名詞を目的語にとる動詞（不定詞は使えない）
丸ごと覚える！入試最頻出。
・enjoy（楽しむ）：I enjoy playing video games.
・finish（終える）：She finished doing her homework.
・mind（気にする）：Do you mind opening the window?
・avoid（避ける）：He avoids eating junk food.
・give up（やめる）：Don't give up trying.
・stop（やめる）：She stopped talking.（talking をやめた）
★ 覚え方：「エンジョイ・フィニッシュ・マインド・アボイド・ギブアップ」

■ 不定詞を目的語にとる動詞（動名詞は使えない）
・want（〜したい）：I want to go abroad.
・hope（〜を望む）：She hopes to become a singer.
・decide（〜を決める）：He decided to study harder.
・plan（〜を計画する）：We plan to visit Nara.
・expect（〜を期待する）：I expect to see you soon.
・promise（〜を約束する）：She promised to call me.

■ 意味が変わる動詞（最重要・入試頻出）
同じ動詞でも、後ろに動名詞か不定詞かで意味が変わる。
・remember ＋ -ing：（過去に）〜したことを覚えている
例）I remember meeting her before.（以前彼女に会ったことを覚えている）
・remember ＋ to 原形：（これから）〜することを忘れずに
例）Remember to call me tonight.（今夜私に電話することを忘れずに）

・forget ＋ -ing：〜したことを忘れる（過去のこと）
例）I'll never forget visiting Kyoto.（京都を訪れたことを決して忘れない）
・forget ＋ to 原形：〜することを忘れる（未来のこと）
例）I forgot to turn off the light.（電気を消すのを忘れた）

・try ＋ -ing：試しに〜してみる
例）Try eating this cake.（このケーキを試しに食べてみて）
・try ＋ to 原形：〜しようとする（しようとするが難しい）
例）He tried to open the door.（彼はドアを開けようとした）`,
      },
      {
        heading: '3. 関係代名詞（who/which/that）',
        body: `関係代名詞は「2つの文を1つにつなぐ」ための文法。後ろから前の名詞（先行詞）を説明する。

■ 主格の関係代名詞（関係代名詞が節の主語になる）
先行詞が「人」→ who、「もの・動物」→ which、どちらも → that

例）I have a friend. She speaks French.
→ I have a friend who speaks French.（フランス語を話す友達がいる）

例）This is the book. It changed my life.
→ This is the book which/that changed my life.（私の人生を変えた本だ）

■ 目的格の関係代名詞（関係代名詞が節の目的語になる）
先行詞が「人」→ who(m)、「もの・動物」→ which、どちらも → that
※目的格の関係代名詞は省略できる

例）She is the teacher. I respect her most.
→ She is the teacher who(m) I respect most.
→ She is the teacher I respect most.（省略形）

例）Is this the book? You were talking about it.
→ Is this the book which/that you were talking about?

■ 所有格の関係代名詞 whose（〜の）
先行詞が人・ものどちらでも使える。

例）I have a friend. His father is a doctor.
→ I have a friend whose father is a doctor.（父が医者の友達がいる）

⚠ 注意：whose の後ろは「名詞」が来る。"whose ＋ 名詞"のかたまりで使う。

■ 関係代名詞の省略
目的格（who(m)/which/that）は省略できる。
例）This is the movie (that) I watched yesterday.（昨日見た映画だ）
主格（who/which/that）は省略できない。
例）I have a dog that is very friendly.（省略不可）

■ 非制限用法（コンマ＋which）
コンマの後のwhichは、前の節全体や名詞に補足説明を加える。
例）He passed the exam, which surprised everyone.（彼は試験に合格した、そのことはみんなを驚かせた）
★ ポイント：「, which」の形で前の文全体を受ける。このwhichはthatに変えられない。`,
      },
      {
        heading: '4. 接続詞と副詞節',
        body: `接続詞は「文と文をつなぐ言葉」。副詞節を作る接続詞は意味と時制のルールが入試で問われる。

■ 時を表す接続詞
・when：〜するとき
例）When I was young, I lived in Osaka.（幼い頃、私は大阪に住んでいた）
・while：〜している間
例）She listened to music while she was studying.（勉強している間、音楽を聴いた）
・before：〜する前に
例）Wash your hands before you eat.（食べる前に手を洗いなさい）
・after：〜した後に
例）She went to bed after she finished her homework.（宿題を終えた後に寝た）
・since：〜してから（ずっと）
例）I have lived here since I was born.（生まれてからずっとここに住んでいる）
・until/till：〜するまで（ずっと）
例）Wait here until I come back.（私が戻るまでここで待って）

■ 条件を表す接続詞
・if：もし〜なら
例）If it rains, I will stay home.（雨が降ったら、家にいます）
・unless：〜でない限り（if not の意味）
例）I won't go unless it stops raining.（雨がやまない限り行かない）

■ 理由を表す接続詞
・because：〜なので（理由を強く主張）
例）I was late because the train was delayed.
・since/as：〜なので（理由を軽く述べる）
例）Since it was cold, I wore a jacket.

■ 譲歩を表す接続詞
・although / though / even though：〜だけれども
例）Although she was tired, she continued to work.（疲れていたが、働き続けた）
例）Even though it was raining, we played tennis.（雨が降っていたが、テニスをした）
⚠ 注意：although/though/even though は but と一緒に使わない。
× Although she was tired, but she continued.（×）
○ Although she was tired, she continued.（○）

■ 時制のルール（副詞節では未来でも現在形）
時・条件を表す副詞節では、未来のことでも現在形を使う。
例）If it is sunny tomorrow, I will go swimming.（明日晴れたら、泳ぎに行く）
× If it will be sunny tomorrow, I will go...（×）
例）When she comes, please tell me.（彼女が来たら教えて）
× When she will come...（×）
⚠ 注意：これは入試で最も問われる時制の落とし穴の一つ。`,
      },
      {
        heading: '5. 入試例題（文法・構文）',
        body: `以下の問題を解いて、不定詞・動名詞・関係詞・接続詞の理解を確認しよう。

【問題1】（　）内から適切な語を選びなさい。
She finished ( to write / writing ) her report.

【解答】writing
【解説】finish は後ろに動名詞（-ing形）をとる動詞。"finish to write" とは言えない。同様に：enjoy / avoid / give up / mind も動名詞のみ。

【問題2】次の文の（　）に適切な関係代名詞を入れなさい。
This is the camera (　　) I bought in Osaka.

【解答】that（または which）
【解説】先行詞は "the camera"（もの）→ which か that を使う。この関係代名詞は目的格（bought の目的語の代わり）なので省略することもできる。

【問題3】（　）内から適切な語を選びなさい。
I will go to the park (　　) it stops raining.

a) after   b) until   c) because   d) although

【解答】a) after
【解説】「雨がやんだ後に公園に行く」という文脈。after「〜した後に」が正しい。until は「〜するまで（ずっと）」なので"I will stay home until it stops raining"のような否定・継続の文に使う。

★ 入試対策ポイント：
■ 動名詞のみの動詞：enjoy/finish/mind/avoid/give up
■ 不定詞のみの動詞：want/hope/decide/plan/expect/promise
■ 意味が変わる動詞：remember/forget/try（-ing vs to）
■ 時・条件の副詞節：未来でも現在形を使う
■ 関係代名詞：先行詞が人→who、もの→which、どちらも→that`,
      },
      {
        heading: '★ MAXレベル：仮定法・話法・複雑な関係詞',
        body: `■ 仮定法（if節の応用）
仮定法は「現実とは違う仮定」を表す文法。現在の事実と反対のことを言うには「過去形」を使う。

・仮定法過去：現在の反実仮想
形：If ＋ S ＋ 過去形（be動詞は were）, S ＋ would/could/might ＋ 原形
例）If I were a bird, I could fly.（もし鳥なら、飛べるのになぁ→実際は人間）
例）If I had more money, I would buy that car.（お金があれば買うのに）

・I wish ＋ 仮定法：「〜だったらいいのになぁ」
例）I wish I could swim.（泳げたらいいのになぁ）
例）I wish I were taller.（もっと背が高ければいいのになぁ）

■ 話法（直接話法 → 間接話法）
人が言ったことを「別の人に伝える」ときの変換ルール。
直接話法："I am busy," he said.（彼は「忙しい」と言った）
間接話法：He said (that) he was busy.（彼は忙しいと言った）

変換のルール：
①that節の中の動詞は時制の一致を受ける（主節が過去→従属節も過去）
②人称代名詞（I→he/she、you→I/he）を変える
③時・場所を表す語も変わる：now→then / today→that day / here→there

例）She said, "I will come tomorrow."
→ She said (that) she would come the next day.

例）He said to me, "Do you live here?"
→ He asked me if I lived there.（Yes/No疑問文 → if/whether節に）

■ 関係副詞（where/when/why/how）
関係副詞は場所・時・理由・方法を表す副詞節を作る。
・where：場所を表す先行詞のとき
例）This is the house where I was born.（私が生まれた家だ）
・when：時を表す先行詞のとき
例）I remember the day when we first met.（初めて会った日を覚えている）
・why：reason が先行詞のとき
例）I don't know the reason why she was angry.（なぜ彼女が怒っていたかわからない）
・how：「方法」を表す（先行詞なしで使う）
例）This is how she learned English.（これが彼女が英語を学んだ方法だ）

⚠ 注意：関係副詞の後ろは「完全な文（主語と動詞がそろっている文）」が来る。関係代名詞の後ろは「不完全な文（主語か目的語が欠けている文）」が来る。これが見分けのポイント。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_06_listening_speaking',
    subject: 'eigo',
    title: 'リスニング対策と英語表現の幅を広げる',
    description: '入試リスニング・会話表現・語彙強化の総まとめ',
    order: 6,
    sections: [
      {
        heading: '1. リスニングの基本戦略',
        body: `リスニングは「準備」が命。放送が始まる前に何をするかで得点が大きく変わる。

■ 放送前の準備（先読み）
①問題用紙が配られたら、すぐに設問と選択肢を全て読む
②設問の種類（何を聞いているか）を確認する
　→「いつ」→ 時間・日付に注目する
　→「どこ」→ 場所名に注目する
　→「誰が」→ 人名・立場に注目する
　→「何を」→ 目的語・行動に注目する
③放送で流れやすいキーワードを予測してマーク

■ 聞きながらのメモ術
・数字（電話番号・時間・金額・日付）は必ずメモする
例）"The train leaves at 8:45."→「8:45」とメモ
・固有名詞（人名・地名・店名）もメモする
・会話の流れをつかむ（誰が話しているか・何について話しているか）

★ ポイント：全ての単語を理解しようとしない。重要な情報（数字・固有名詞・動詞）に集中する。

■ 聞き取れなかった部分の補完方法
・前後の文脈から推測する
・選択肢と照合する（「これはないはず」という消去法）
・会話の最後の発言に答えがあることが多い

■ 入試リスニングで問われやすい場面
①電話での会話（時間・待ち合わせ場所・メッセージ）
②店での会話（値段・商品・数量）
③道案内（left/right/straight/turn/across from）
④学校・日常生活の会話（予定・行動・感想）
⑤インタビュー・放送（アナウンス・ニュース）

■ リスニング頻出表現
・I beg your pardon? / Pardon?（もう一度おっしゃっていただけますか）
・Could you speak more slowly?（もっとゆっくり話してください）
・I see. / I understand.（なるほど・わかりました）
・Hold on, please.（少々お待ちください）
・Speaking.（電話で「私です」と答えるとき）`,
      },
      {
        heading: '2. 会話表現・決まり文句',
        body: `入試の会話問題では「決まり文句」を知っているかどうかで差がつく。場面ごとにパターンを覚えよう。

■ 申し出（Offer）の表現
・Shall I help you?（手伝いましょうか？）
・Shall I carry your bag?（バッグを持ちましょうか？）
・Would you like me to open the window?（窓を開けましょうか？）
→ 返答：Yes, please.（はい、お願いします）/ No, thank you. I'm fine.（結構です）

■ 依頼（Request）の表現
・Could you help me?（手伝ってもらえますか？）
・Would you open the door, please?（ドアを開けていただけますか？）
・Would you mind closing the window?（窓を閉めてもらえますか？）
→ Would you mind -ing? の返答に注意：
　 肯定（いいよ）→ Of course not. / Not at all. / Certainly.（否定で答える！）
　 断る → I'm sorry, but I'm busy now.
⚠ 注意：Would you mind -ing? は「〜してもらえますか？」という依頼。Notで答えると「はい（いいよ）」になる。入試でここを間違える人が多い。

■ 提案（Suggestion）の表現
・Why don't we go to the library?（図書館に行きませんか？）
・How about eating out tonight?（今夜外食しませんか？）
・Let's play tennis after school.（放課後テニスをしよう）
→ 返答：Sounds good. / That's a great idea.（いいですね）

■ 断り方（Refusing）の表現
・I'm sorry, but I can't.（すみませんが、できません）
・I'd love to, but I have a piano lesson.（行きたいけれど、ピアノのレッスンがあります）
・Maybe next time.（また今度）

■ 感謝と返答
・Thank you (very much) / Thanks a lot. → You're welcome. / Not at all. / My pleasure.
■ 謝罪と返答
・I'm sorry. / I apologize. → That's okay. / Don't worry about it. / No problem.
■ 場所を聞く・教える
・Excuse me. Could you tell me the way to the station?（駅への道を教えてもらえますか）
・Go straight and turn left at the first corner.（まっすぐ行って最初の角を左に曲がる）
・It's on your right.（右手にあります）`,
      },
      {
        heading: '3. 頻出英語表現のパターン',
        body: `会話や作文で使える「パターン表現」は丸ごと覚えると即使える。入試頻出のものを厳選した。

■ 時間・期間を表す表現
・It takes ＋ 時間 ＋ to 〜：〜するのに…かかる
例）It takes about an hour to get to the airport.（空港まで約1時間かかる）
例）It took me two hours to finish the test.（テストを終えるのに2時間かかった）

■ 人にとっての難しさ・重要さを表す表現
・It is ＋ 形容詞 ＋ for 人 ＋ to 〜：人が〜することは…だ
例）It is important for us to protect the environment.（環境を守ることは私たちにとって重要だ）
例）It is difficult for me to speak English fluently.（流暢に英語を話すことは私には難しい）
例）It is easy for children to use smartphones.（子どもがスマートフォンを使うことは簡単だ）

■ 経験・状態を表す現在完了形の表現
・have been to 〜：〜へ行ったことがある
例）I have been to Australia twice.（私はオーストラリアに2回行ったことがある）
⚠ 注意：have gone to〜は「行ってしまった（今はここにいない）」という意味。
例）She has gone to France.（彼女はフランスに行ってしまった→今はここにいない）

■ 楽しみにする・興味を持つ表現
・look forward to -ing：〜を楽しみにしている（to のあとは動名詞）
例）I'm looking forward to seeing you again.（またあなたに会うのを楽しみにしている）
例）She is looking forward to the summer vacation.（夏休みを楽しみにしている）
⚠ 注意：to の後ろが動詞なら-ing形（動名詞）にする！「to ＋ 原形」（不定詞）ではない。

■ その他の重要パターン
・be used to -ing：〜することに慣れている
例）I'm used to getting up early.（早起きに慣れている）
・be afraid of -ing：〜することを恐れる
例）She is afraid of speaking in public.（人前で話すことが怖い）
・spend ＋ 時間 ＋ -ing：〜するのに時間を使う
例）He spent two hours doing his homework.（宿題に2時間使った）
・have difficulty -ing：〜することが難しい・苦手だ
例）I have difficulty understanding English jokes.（英語のジョークを理解するのが難しい）`,
      },
      {
        heading: '4. 入試頻出単語・熟語500',
        body: `入試に頻出するカテゴリ別の重要語彙と熟語をまとめた。毎日少しずつ覚えよう。

■ 自然・環境（Nature & Environment）
environment（環境）/ nature（自然）/ climate（気候）/ weather（天気）
forest（森）/ ocean（海）/ river（川）/ mountain（山）/ island（島）
pollution（汚染）/ recycle（リサイクルする）/ energy（エネルギー）
protect（守る）/ destroy（破壊する）/ global warming（地球温暖化）

■ 社会・生活（Society & Daily Life）
culture（文化）/ tradition（伝統）/ community（地域社会）/ society（社会）
volunteer（ボランティア）/ hospital（病院）/ school（学校）/ factory（工場）
technology（技術）/ transportation（交通）/ communication（コミュニケーション）
population（人口）/ education（教育）/ government（政府）

■ 感情・性格（Emotions & Character）
happy / sad / angry / surprised / excited / tired / bored / nervous
kind（親切な）/ honest（正直な）/ brave（勇敢な）/ patient（忍耐強い）
curious（好奇心のある）/ creative（創造的な）/ confident（自信のある）

■ 動作（Actions & Verbs）
improve（上達する）/ achieve（達成する）/ succeed（成功する）/ fail（失敗する）
realize（気づく）/ understand（理解する）/ communicate（伝える）
develop（発達する）/ contribute（貢献する）/ influence（影響を与える）
solve（解決する）/ discover（発見する）/ create（作る）/ support（支援する）

■ よく出る熟語（Phrasal Verbs & Idioms）
・be good at 〜：〜が得意だ
例）She is good at playing the guitar.
・be interested in 〜：〜に興味がある
例）He is interested in history.
・take care of 〜：〜の世話をする
例）She takes care of her grandmother.
・look up 〜：〜を調べる
例）Look up the word in the dictionary.
・give up：〜をあきらめる
例）Don't give up your dream.
・put on：〜を着る / take off：〜を脱ぐ
・find out：〜を見つける・明らかにする
・turn on：〜をつける / turn off：〜を消す
・come true：（夢が）実現する
例）My dream came true.
・in fact：実は・実際に
・at first：最初は
・all of a sudden：突然
・as soon as possible：できるだけ早く`,
      },
      {
        heading: '5. 入試例題（リスニング型・会話文）',
        body: `以下の問題は「会話文の空所補充」と「場面別応答選択」のリスニング型演習。声に出して読んで練習しよう。

【会話文の空所補充：問題1〜3】

【問題1】次の会話の（　　）に入る最も適切な文を選びなさい。
A: Excuse me. Could you tell me the way to the library?
B: (　　)
A: Thank you very much.

a) Yes, I'm sorry.
b) Sure. Go straight and turn left at the second corner.
c) I don't have a library card.
d) The library is my favorite place.

【解答】b)
【解説】道を尋ねられたときの返答。Go straight / turn left などの道案内の表現が正しい答え。

【問題2】次の会話の（　　）に入る最も適切な文を選びなさい。
A: Would you mind helping me with this bag?
B: (　　)

a) Yes, I do.
b) Not at all. Let me help you.
c) I don't mind asking you.
d) Yes, please.

【解答】b)
【解説】Would you mind -ing? は「〜してもらえますか？」という依頼。承諾するときは "Not at all." または "Of course not." で答える。"Yes"は「はい、気にします（断る）」の意味になるので注意。

【問題3】次の会話の（　　）に入る最も適切な文を選びなさい。
A: I'm sorry I'm late. I missed the bus.
B: (　　)
A: Thank you. I'll be more careful next time.

a) That's a good idea!
b) Don't worry about it. It happens.
c) I'm sorry to hear that.
d) How long did it take?

【解答】b)
【解説】謝罪に対する返答。"Don't worry about it." / "That's okay." / "No problem." が自然な応答。Aが「次は気をつけます」と言っているので、受け入れてもらったことがわかる。

★ まとめ：よく問われる会話パターン
■ 道案内：Go straight / turn right/left / on your right/left / across from
■ 依頼への応答：Of course. / Certainly. / I'm sorry, but I can't.
■ 提案への応答：Sounds good. / That's a great idea. / I'd love to, but...
■ 謝罪への応答：That's okay. / No problem. / Don't worry.`,
      },
      {
        heading: '★ MAXレベル：語彙の深掘りと文化的背景',
        body: `■ 同義語・類義語の細かい違い
入試では「同じような意味でもニュアンスが違う語の選択」が問われる。

・big / large / huge / enormous（大きい）
　big：日常的・口語的（a big problem / a big house）
　large：少しフォーマル・量・規模（a large country / a large amount）
　huge：非常に大きい（a huge building / a huge success）
　enormous：圧倒的に大きい・量が非常に多い（enormous pressure / enormous wealth）

・smart / clever / intelligent / wise（賢い）
　smart：頭の回転が速い・スタイリッシュ（a smart student）
　clever：巧みな・機転が利く（a clever trick）
　intelligent：知能が高い・論理的（an intelligent person）
　wise：経験から来る賢さ・判断力がある（a wise decision）

・say / tell / speak / talk（話す）
　say：〜と言う（内容を直接引用・報告：She said "Hello."）
　tell：（人に）〜を告げる（tell ＋ 人：Tell me your name.）
　speak：（言語や聴衆に向けて）話す（speak English / speak to the class）
　talk：会話する・雑談する（talk with friends / talk about the trip）

■ 語源から覚える語彙（etymology）
語源を知ると、初見の単語でも意味が推測できる。

・rupt ＝「壊れる・破裂する」
　interrupt（邪魔する＝inter（間に）＋ rupt）
　disrupt（混乱させる＝dis（分離）＋ rupt）
　erupt（噴火する＝e（外へ）＋ rupt）
　bankrupt（倒産した＝bank ＋ rupt）

・port ＝「運ぶ」
　transport（輸送する）/ import（輸入する）/ export（輸出する）/ report（報告する）
　portable（持ち運べる）/ support（支える）

・dict ＝「言う」
　dictionary（辞書）/ predict（予測する）/ contradict（矛盾する）
　indicate（示す）/ dedicate（捧げる）

■ 英語圏の文化・習慣（入試背景知識問題）
入試では英語圏の文化的慣習を問う長文が出る。知識として押さえておこう。

・Thanks giving（感謝祭）：11月の第4木曜日、アメリカの伝統的な祝日。七面鳥を食べる。
・Halloween（ハロウィン）：10月31日。子どもが仮装して "Trick or treat!" と言ってお菓子をもらう。
・Christmas（クリスマス）：12月25日。プレゼントを交換する習慣。サンタクロース（Santa Claus）。
・チップ（Tipping）：アメリカではレストランでの飲食後に15〜20%のチップを払う習慣がある。
・呼びかけ方（Addressing）：英語圏では先生をファーストネームで呼ぶ文化がある（"Mr./Ms. ＋ 苗字"の場合も）。日本の「先生」に直接相当する英語はない。
・Small talk（世間話）：英語圏では初対面での挨拶に天気の話題がよく使われる（"Lovely weather today!"）。

⚠ 注意：これらの文化背景は「英文を読む文脈」として機能する。内容一致問題や空所補充の解釈に役立つ。`,
        maxOnly: true,
      },
    ],
  },
];
