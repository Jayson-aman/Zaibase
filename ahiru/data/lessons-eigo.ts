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
  {
    id: 'eigo_07_alphabet_phonics',
    subject: 'eigo',
    title: 'アルファベット・フォニックス・ローマ字',
    description: '英語のいちばん最初！文字・音・ローマ字の基礎を固める',
    order: 7,
    sections: [
      {
        heading: '1. アルファベットの大文字と小文字',
        body: `英語はアルファベット26文字ですべての単語を作る。まずは大文字（Capital letter）と小文字（Small letter）をセットで覚えよう。

■ アルファベット26文字（大文字→小文字）
A a ／ B b ／ C c ／ D d ／ E e ／ F f ／ G g
H h ／ I i ／ J j ／ K k ／ L l ／ M m ／ N n
O o ／ P p ／ Q q ／ R r ／ S s ／ T t ／ U u
V v ／ W w ／ X x ／ Y y ／ Z z

■ 母音（vowel）と子音（consonant）
・母音は5つ：a・i・u・e・o
・それ以外の21文字はすべて子音
★ ポイント：この「母音」を知っていると、a と an の使い分け（母音の前は an）などのルールがわかる。

■ 大文字を使う場所（入試でも問われる基本ルール）
①文のいちばん最初の文字
　例）This is a pen.（Tを大文字に）
②人の名前・地名・国名（固有名詞）の最初の文字
　例）Tom ／ Japan ／ Osaka ／ Mt. Fuji
③I（私は）はいつでも大文字
　例）Yes, I am. ／ Tom and I are friends.
④曜日・月の名前の最初の文字
　例）Monday ／ April ／ Sunday
⑤言語・国民を表す語
　例）English ／ Japanese

⚠ 注意：文の途中でも I はいつも大文字。i と小文字で書くのは間違い。

■ まちがえやすい形の文字
・b と d（左右が逆）
・p と q（上下・左右が逆）
・小文字の a と o、n と h の高さのちがい
★ 4本線のノートを使うとき、b・d・h・k・l・t は上の段まで、g・j・p・q・y は下の段まで伸ばす、と覚えると形がそろう。`,
      },
      {
        heading: '2. フォニックス（文字と音のルール）',
        body: `フォニックス（Phonics）とは「文字と音の関係のルール」のこと。これを知ると、はじめて見る単語もローマ字読みではなく英語の音で読めるようになる。

■ 子音の基本の音（アルファベット読みとちがう「音」）
b →「ブ」 ／ c →「ク」 ／ d →「ドゥ」 ／ f →「フ」
g →「グ」 ／ h →「ハ」 ／ j →「ヂュ」 ／ k →「ク」
l →「ル」 ／ m →「ム」 ／ n →「ンヌ」 ／ p →「プ」
r →「ゥル」 ／ s →「ス」 ／ t →「トゥ」 ／ v →「ヴ」
w →「ゥ」 ／ y →「ィ」 ／ z →「ズ」
★ ポイント：名前の読み方（ビー・シー…）と、単語の中での音（ブ・ク…）はちがう。フォニックスでは「音」のほうを使う。

■ 母音の短い音（短母音）
a →「ア」（cat キャット）
i →「イ」（sit スィット）
u →「ア」（cup カップ）
e →「エ」（pen ペン）
o →「オ」（box ボックス）

■ 3文字の単語を音でつなげて読む練習
c-a-t → ク・ア・トゥ → cat（ねこ）
d-o-g → ドゥ・オ・グ → dog（いぬ）
b-i-g → ブ・イ・グ → big（大きい）
r-u-n → ゥル・ア・ンヌ → run（走る）
★ ポイント：1文字ずつの音をなめらかにつなげると単語の発音になる。

■ 単語の最後に e がつくと母音が「名前読み」になる（マジックe）
・cap（キャップ・ぼうし）→ cape（ケイプ・岬）　a が「エイ」に
・kit（キット）→ kite（カイト・たこ）　i が「アイ」に
・not（ノット）→ note（ノウト・メモ）　o が「オウ」に
・cut（カット）→ cute（キュート・かわいい）　u が「ユー」に
⚠ 注意：最後の e 自体は読まない（発音しない）。前の母音を「アルファベットの名前の音」に変える役目。

■ 2文字で1つの音になるもの（重要）
sh →「シュ」（ship 船）／ ch →「チ」（chair いす）
th →「ス／ズ」（think 考える ／ this これ）
ph →「フ」（phone 電話）／ ck →「ク」（duck あひる）
★ フォニックスを知っていると、つづり（スペル）を覚えるのもぐんと楽になる。`,
      },
      {
        heading: '3. ローマ字（訓令式とヘボン式）',
        body: `ローマ字は「日本語をアルファベットで書く」ためのもの。英語そのものではないが、名前や地名を書くときに必要で、小学校でも学ぶ。

■ ローマ字の基本（母音＋子音の組み合わせ）
・母音：a（あ）・i（い）・u（う）・e（え）・o（お）
・子音＋母音で1音：ka き→ki く→ku け→ke こ→ko
例）さくら → sakura ／ ねこ → neko ／ とけい → tokei

■ 五十音のローマ字（訓令式）
か行 ka ki ku ke ko ／ さ行 sa si su se so
た行 ta ti tu te to ／ な行 na ni nu ne no
は行 ha hi hu he ho ／ ま行 ma mi mu me mo
や行 ya (i) yu (e) yo ／ ら行 ra ri ru re ro
わ行 wa (o) ／ ん n

■ 訓令式とヘボン式のちがい（重要）
学校のテストは「訓令式」が基本だが、パスポートや駅名などの実生活では「ヘボン式」が使われる。ちがう部分だけ覚えよう。
| 音 | 訓令式 | ヘボン式 |
|----|--------|----------|
| し | si | shi |
| ち | ti | chi |
| つ | tu | tsu |
| ふ | hu | fu |
| じ | zi | ji |
| しゃ | sya | sha |
| ちゃ | tya | cha |
例）ふじさん → 訓令式 huzisan ／ ヘボン式 Fujisan

■ のばす音・つまる音・「ん」の書き方
・のばす音（長音）：訓令式は母音の上に「＾」（ô）、ヘボン式はのばさず書くか o を重ねる
　例）おおさか → Osaka ／ とうきょう → Tokyo（ヘボン式では長音記号を省くことが多い）
・つまる音（促音「っ」）：次の子音を重ねる
　例）きっぷ → kippu ／ がっこう → gakkou（gakkô）
・はねる音「ん」：n で書く。ただし b・p・m の前は m にすることがある（ヘボン式）
　例）しんぶん → shinbun ／ ぐんま → Gunma（Gumma）

⚠ 注意：人名・地名は最初の文字を大文字にする。
例）Tanaka Taro ／ Nihon（Japan）／ Kyoto`,
      },
      {
        heading: '4. 単語を正しく書くための基本ルール',
        body: `英語を書くときには、日本語にはない「書き方のきまり」がいくつもある。ここでミスをなくそう。

■ 単語と単語の間はスペースを空ける
英語は単語ごとに区切って書く。くっつけて書いてはいけない。
○ I am a student.
× Iamastudent.

■ 文の終わりには符号（ピリオド・クエスチョンマーク）をつける
・ふつうの文（肯定文・否定文）→ ピリオド「.」
　例）I like dogs.
・質問の文（疑問文）→ クエスチョンマーク「?」
　例）Do you like dogs?
・強い気持ちの文（感嘆文など）→ エクスクラメーションマーク「!」
　例）What a nice day!

■ コンマ（,）の使い方
・ものを並べるとき（3つ以上）
　例）I have a pen, a book, and a ruler.
・呼びかけや返事のあと
　例）Yes, I do. ／ Hi, Tom.

■ 短縮形（アポストロフィ ' を使う）
話し言葉やくだけた文でよく使う。
・I am → I'm ／ You are → You're ／ He is → He's
・is not → isn't ／ are not → aren't ／ do not → don't
・does not → doesn't ／ cannot → can't ／ will not → won't
例）I'm a student. ／ She isn't busy. ／ I don't know.
★ ポイント：短縮形の「'」は省いた文字の場所に置く（is not → isn'tのo が消える）。

■ 名前や 's（アポストロフィ エス）で「〜の」を表す
・人やものの持ち主を表すとき、名前のあとに 's をつける
　例）Tom's book（トムの本）／ my mother's car（母の車）
　例）the dog's name（その犬の名前）

⚠ よくあるミスまとめ
・文の最初を小文字で書く → ×（大文字にする）
・I を i と書く → ×
・ピリオドやクエスチョンマークを忘れる → 減点されやすい
・単語をくっつけて書く → ×`,
      },
      {
        heading: '5. 練習問題（文字・音・ローマ字）',
        body: `これまで学んだことを問題で確認しよう。

【問題1】次の単語の最初の文字は、a と an のどちらがつくか答えなさい。
① (   ) apple　② (   ) book　③ (   ) orange　④ (   ) cat

【解答】① an　② a　③ an　④ a
【解説】母音（a・i・u・e・o）で始まる語には an、子音で始まる語には a をつける。apple・orange は母音で始まるので an。

【問題2】次のローマ字（ヘボン式）を日本語（ひらがな）に直しなさい。
① Fujisan　② Tokyo　③ shashin

【解答】① ふじさん　② とうきょう　③ しゃしん
【解説】ヘボン式では し＝shi、ふ＝fu、しゃ＝sha。読みにくいときは子音＋母音に区切って考える（sha-shin）。

【問題3】次の文をただしく書き直しなさい。（大文字・スペース・符号に注意）
iamtom

【解答】I am Tom.
【解説】①文の最初 I は大文字　②単語の間はスペース　③人の名前 Tom は大文字　④文の終わりにピリオド。

【問題4】次の語を短縮形に直しなさい。
① I am　② is not　③ do not

【解答】① I'm　② isn't　③ don't
【解説】アポストロフィ「'」は消した文字の場所に入れる。

★ まとめ
■ 大文字を使う場所：文頭・名前・地名・曜日/月・I
■ フォニックス：文字は「名前」と「音」の2つの読み方がある
■ ローマ字：学校は訓令式、実生活はヘボン式（shi/chi/tsu/fu…）
■ 書き方：単語の間はスペース、文末に符号、I はいつも大文字`,
      },
      {
        heading: '★ MAXレベル：発音記号と特殊なつづり',
        body: `■ 発音記号（辞書に書いてある記号）
辞書で単語を引くと [ ] の中に発音記号が書いてある。読めると正しい発音がわかる。
・[i:] 長い「イー」：see [si:] ／ eat [i:t]
・[i] 短い「イ」：sit [sit] ／ big [big]
・[æ] 口を大きく開けた「ア」：cat [kæt] ／ apple [æpl]
・[ə] あいまいな「ア」（シュワー）：about [əbáut] ／ banana [bənǽnə]
・[θ] 舌を歯で軽くはさむ「ス」：think ／ [ð] 濁った「ズ」：this
★ ポイント：[ˈ] や [´] はアクセント（強く読む場所）を表す。英語はアクセントの位置がとても大切。

■ サイレントレター（読まないつづり）
英語には「書くのに読まない文字」がある。丸ごと覚える。
・k を読まない：know（ノウ）／ knife（ナイフ）／ knee（ニー）
・b を読まない：comb（コウム・くし）／ climb（クライム・登る）
・w を読まない：write（ライト・書く）／ wrong（ロング・まちがい）
・h を読まない：hour（アワー・時間）／ honest（オネスト・正直な）
・gh を読まない：night（ナイト）／ light（ライト）／ high（ハイ）

■ 同じつづりでも読み方が変わる例
・ea →「イー」（eat, sea, tea）だが「エ」（bread パン, head 頭）のこともある
・ou →「アウ」（house, out）だが「ウー」（you, group）のことも
・oo →「ウー」（moon, food）だが短い「ウ」（book, good）のことも
⚠ 注意：英語のつづりと発音は例外が多い。フォニックスは「基本の読み方」であって、100%ではない。よく出る例外は個別に覚える。

■ アクセントの位置で意味・品詞が変わる語（上級）
同じつづりでも、強く読む場所で品詞が変わる単語がある。
・présent（名詞・形容詞「贈り物・現在の」）／ presént（動詞「贈る・発表する」）
・récord（名詞「記録」）／ recórd（動詞「記録する」）
・óbject（名詞「物・目的」）／ objéct（動詞「反対する」）
★ 高校英語や難関中学の発音問題で問われる。「名詞は前、動詞は後ろにアクセント」というパターンが多い。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_08_be_ippan_doushi',
    subject: 'eigo',
    title: 'be動詞と一般動詞の基礎',
    description: '英文づくりの土台！2種類の動詞と肯定・否定・疑問を完全マスター',
    order: 8,
    sections: [
      {
        heading: '1. be動詞（am / is / are）の使い方',
        body: `英語の動詞には大きく2種類ある。「be動詞」と「一般動詞」だ。まずは be動詞から学ぼう。

■ be動詞とは
be動詞は「〜です・〜にいる／ある」という意味を表す動詞。主語（〜は）によって形が変わる。

■ be動詞の使い分け（現在形）
| 主語 | be動詞 | 例文 |
|------|--------|------|
| I（私は） | am | I am a student.（私は生徒です） |
| you（あなたは） | are | You are kind.（あなたは親切です） |
| he / she / it（彼・彼女・それは） | is | He is my friend.（彼は私の友達です） |
| we / you / they（私たち・あなたたち・彼らは） | are | They are teachers.（彼らは先生です） |

★ 覚え方：「I は am」「he/she/it は is」「you と複数は are」。

■ be動詞の2つの意味
①「〜です・〜だ」（主語＝あとの語）
　例）I am Tom.（私はトムです）→ I ＝ Tom
　例）This is a book.（これは本です）→ This ＝ a book
②「〜にいる・〜にある」（場所を表す）
　例）I am in the classroom.（私は教室にいます）
　例）Your bag is on the desk.（あなたのかばんは机の上にあります）

■ 短縮形（話し言葉でよく使う）
I am → I'm ／ You are → You're ／ He is → He's
She is → She's ／ It is → It's ／ We are → We're ／ They are → They're
例）I'm from Osaka.（私は大阪出身です）

⚠ 注意：be動詞の文には一般動詞（play・like など）を入れない。
× I am play tennis.（×）
○ I play tennis.（一般動詞の文）
○ I am a tennis player.（be動詞の文）`,
      },
      {
        heading: '2. 一般動詞の使い方と三人称単数のs',
        body: `一般動詞は「動作や状態」を表す動詞。be動詞（am/is/are）以外の動詞はすべて一般動詞だ。

■ 一般動詞の例
play（〜をする）／ like（〜が好き）／ have（持っている）／ go（行く）
study（勉強する）／ run（走る）／ eat（食べる）／ read（読む）／ live（住む）

■ 一般動詞の肯定文（ふつうの文）
主語 ＋ 一般動詞 ＋ 〜
例）I play soccer.（私はサッカーをする）
例）You like music.（あなたは音楽が好きだ）
例）We study English.（私たちは英語を勉強する）

■ 三人称単数のs（重要ルール）
主語が he / she / it や1人の人・1つのもの（三人称単数）のとき、一般動詞の最後に s または es をつける。
例）I play tennis. → He plays tennis.
例）They like dogs. → She likes dogs.

■ 三人称単数とは
・一人称：I（私）／ we（私たち）
・二人称：you（あなた・あなたたち）
・三人称：それ以外すべて（he, she, it, Tom, my mother, the cat, this book など）
★ ポイント：「私」でも「あなた」でもない、1人・1つの何かが三人称単数。

■ s / es のつけ方
・ふつうは s：play → plays ／ like → likes ／ run → runs
・s, o, x, ch, sh で終わる語は es：go → goes ／ watch → watches ／ wash → washes
・「子音＋y」で終わる語は y を i に変えて es：study → studies ／ cry → cries
・特別な形：have → has

例）My father goes to work by train.（父は電車で仕事に行く）
例）She studies math every day.（彼女は毎日数学を勉強する）
例）Tom has a dog.（トムは犬を飼っている）

⚠ 注意：主語が複数（they, we, my parents など）のときは s をつけない。
× They likes soccer.（×）
○ They like soccer.（○）`,
      },
      {
        heading: '3. 否定文の作り方（〜でない・〜しない）',
        body: `「〜ではない」「〜しない」という否定文の作り方は、be動詞と一般動詞でまったく違う。ここを区別するのが最重要。

■ be動詞の否定文：be動詞のあとに not を置く
形：主語 ＋ am / is / are ＋ not ＋ 〜
例）I am not a teacher.（私は先生ではありません）
例）She is not busy.（彼女は忙しくありません）
例）They are not students.（彼らは生徒ではありません）
★ 短縮形：is not → isn't ／ are not → aren't（am not に短縮形はない）
例）He isn't at home. ／ We aren't ready.

■ 一般動詞の否定文：動詞の前に do not / does not を置く
形：主語 ＋ do not（does not）＋ 動詞の原形 ＋ 〜
・主語が I / you / we / they → do not（don't）
・主語が he / she / it（三人称単数）→ does not（doesn't）
例）I do not like natto.（私は納豆が好きではない）
例）She does not play the piano.（彼女はピアノを弾かない）

■ 最重要ポイント：does not のあとの動詞は原形に戻す
三人称単数でも、does not を使うときは動詞の s を取って原形にする。
× She does not likes tennis.（×）
○ She does not like tennis.（○ likes → like）
★ 理由：s の意味は does がすでに引き受けているので、動詞は原形でよい。

■ 短縮形
do not → don't ／ does not → doesn't
例）I don't have a smartphone.（私はスマホを持っていない）
例）My brother doesn't eat vegetables.（弟は野菜を食べない）

⚠ まちがえやすいポイント
・be動詞の文なのに do を使う → ×
　× I don't be busy. → ○ I'm not busy.
・一般動詞の文なのに not だけ → ×
　× I not like it. → ○ I don't like it.`,
      },
      {
        heading: '4. 疑問文の作り方と答え方',
        body: `「〜ですか？」「〜しますか？」とたずねる疑問文も、be動詞と一般動詞で作り方が違う。

■ be動詞の疑問文：be動詞を文の先頭に出す
形：Am / Is / Are ＋ 主語 ＋ 〜 ?
例）You are a student. → Are you a student?（あなたは生徒ですか）
例）He is your brother. → Is he your brother?（彼はあなたの兄ですか）

答え方（Yes / No で答える）
・Yes, 主語 ＋ be動詞. ／ No, 主語 ＋ be動詞 ＋ not.
例）Are you a student? → Yes, I am. ／ No, I am not.（No, I'm not.）
例）Is he busy? → Yes, he is. ／ No, he isn't.
★ ポイント：答えの主語は代名詞にする（Tom → he、your mother → she）。

■ 一般動詞の疑問文：Do / Does を文の先頭に置く
形：Do（Does）＋ 主語 ＋ 動詞の原形 ＋ 〜 ?
・主語が I / you / we / they → Do
・主語が he / she / it（三人称単数）→ Does
例）You play tennis. → Do you play tennis?（テニスをしますか）
例）She likes music. → Does she like music?（音楽が好きですか）

■ 最重要ポイント：Does の疑問文でも動詞は原形
× Does she likes music?（×）
○ Does she like music?（○ likes → like）
★ 否定文の does not と同じで、s は does が引き受ける。

答え方
・Yes, 主語 ＋ do / does. ／ No, 主語 ＋ don't / doesn't.
例）Do you like dogs? → Yes, I do. ／ No, I don't.
例）Does he play soccer? → Yes, he does. ／ No, he doesn't.

⚠ まちがえやすいポイント
・答えるときの動詞を間違える
　Are you 〜? → Yes, I am.（be動詞で答える）
　Do you 〜? → Yes, I do.（do で答える）
　この2つを混同しないこと！`,
      },
      {
        heading: '5. be動詞と一般動詞の使い分け・練習問題',
        body: `be動詞と一般動詞を正しく区別できるかが、英文法の第一関門。問題で確認しよう。

■ 使い分けのまとめ表
|  | be動詞（am/is/are） | 一般動詞（play/like等） |
|--|------|------|
| 意味 | 〜です・いる/ある | 動作・状態 |
| 否定文 | be動詞＋not | do/does not＋原形 |
| 疑問文 | be動詞を前へ | Do/Doesを前へ＋原形 |
| 答え | Yes, I am. | Yes, I do. |

【問題1】（　）に am / is / are のどれかを入れなさい。
① I (   ) a soccer fan.　② She (   ) very kind.　③ They (   ) my classmates.

【解答】① am　② is　③ are
【解説】I → am、she（三人称単数）→ is、they（複数）→ are。

【問題2】次の文を否定文にしなさい。
① He plays the guitar.　② I am hungry.

【解答】① He does not play the guitar.（doesn't play）　② I am not hungry.（I'm not hungry.）
【解説】①一般動詞の文 → does not ＋ 原形（plays → play）。②be動詞の文 → be動詞のあとに not。

【問題3】次の文を疑問文にして、Yes で答えなさい。
① You like English.　② Ms. Tanaka is a teacher.

【解答】① Do you like English? — Yes, I do.　② Is Ms. Tanaka a teacher? — Yes, she is.
【解説】①一般動詞 → Do を前に。答えは do。②be動詞 → is を前に。答えは be動詞。Ms. Tanaka は she で受ける。

【問題4】まちがいを直しなさい。
Does your sister likes music?

【解答】Does your sister like music?
【解説】Does の疑問文では動詞を原形にする（likes → like）。

★ 入試・テスト対策ポイント
■ まず「be動詞の文か一般動詞の文か」を見分ける
■ 否定文・疑問文は種類ごとにルールが違う
■ does / doesn't のあとの動詞は必ず原形
■ 答えの動詞は質問に合わせる（Are→am、Do→do）`,
      },
      {
        heading: '★ MAXレベル：三単現のsと状態動詞・命令文への発展',
        body: `■ 三人称単数のs（三単現）を落とさないための総整理
三単現の s は「主語が三人称・単数・現在形」の3つがそろったときだけつく。1つでも欠けたらつかない。
・過去形にはつかない：He played tennis.（s ではなく ed）
・does / doesn't のあとはつかない：He doesn't play.（原形）
・助動詞（can など）のあとはつかない：He can play.（原形）
★ ポイント：「三・単・現」の3拍子がそろったときだけ s、と唱えて確認する。

■ 動作動詞と状態動詞（進行形にできない動詞）
一般動詞には「動作」を表すものと「状態・気持ち」を表すものがある。
・動作動詞：play, run, eat, study（進行形 -ing にできる）
・状態動詞：like, love, know, have（持つ）, want, need（原則、進行形にしない）
× I am liking this song.（×）
○ I like this song.（○）
⚠ 注意：have は「持っている」のときは状態動詞（進行形不可）だが、「食べる・過ごす」の意味なら動作動詞になり進行形にできる。
　例）I am having lunch.（昼食を食べているところだ）○

■ There is / There are（〜がある・いる）の構文
be動詞を使った特別な形。「（場所に）〜がある／いる」を表す。
・単数のもの → There is ＋ 単数名詞
　例）There is a book on the desk.（机の上に本がある）
・複数のもの → There are ＋ 複数名詞
　例）There are three cats in the garden.（庭に3匹の猫がいる）
・否定：There is not（isn't）／ 疑問：Is there 〜?
　例）Is there a station near here? — Yes, there is.
⚠ 注意：the my your など「特定のもの」は There is 構文で使わない。
　× There is my bag on the desk. → ○ My bag is on the desk.

■ 命令文への発展（主語 you を省いた形）
一般動詞の文から主語 you を取り、動詞の原形で始めると命令文になる。
・You open the window. → Open the window.（窓を開けなさい）
・be動詞の命令文は Be で始める：Be quiet.（静かにしなさい）／ Be kind.（親切にしなさい）
★ ポイント：命令文は動詞の原形で始まる、という点で「Do/Does の疑問文」「否定文の原形」とルールがつながっている。原形の感覚をここで完成させよう。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_09_gimonshi',
    subject: 'eigo',
    title: '疑問詞（what/who/where/when/how など）で質問する',
    description: '5W1Hを使いこなす！具体的にたずねる疑問文の作り方',
    order: 9,
    sections: [
      {
        heading: '1. 疑問詞とは・what と who',
        body: `「はい・いいえ」で答えられない、具体的な内容をたずねる質問には「疑問詞」を使う。日本語の「なに・だれ・どこ・いつ・どうやって」にあたる言葉だ。

■ おもな疑問詞（5W1H）
・what（なに）／ who（だれ）／ where（どこ）
・when（いつ）／ why（なぜ）／ how（どうやって・どのくらい）
・which（どちら・どれ）／ whose（だれの）

■ 疑問詞を使った疑問文の基本の形
疑問詞 ＋ ふつうの疑問文（do/does/is/are… ＋ 主語 ＋ 〜）?
★ ポイント：疑問詞は「文のいちばん最初」に置く。そのあとは Yes/No 疑問文と同じ語順。

■ what（なに）の使い方
・単独で「何」：What is this?（これは何ですか）— It is a pen.
・一般動詞と：What do you want?（何がほしいですか）— I want a new bag.
・「何の〜」と名詞をつける：What sport do you like?（何のスポーツが好きですか）
　例）What time is it?（何時ですか）／ What color do you like?（何色が好きですか）

■ who（だれ）の使い方
・who が主語のとき（だれが〜する）→ 疑問詞のあとにすぐ動詞。三単現の s をつける。
　例）Who plays the piano?（だれがピアノを弾きますか）— Tom does.
・who が主語でないとき → ふつうの疑問文の語順
　例）Who is that girl?（あの女の子はだれですか）— She is my sister.
　例）Who do you like?（だれが好きですか）

⚠ 注意：疑問詞の疑問文には Yes / No で答えない。たずねられた「中身」を答える。
　× Where do you live? — Yes, I do.（×）
　○ Where do you live? — I live in Osaka.（○）`,
      },
      {
        heading: '2. where（どこ）と when（いつ）',
        body: `場所をたずねる where、時をたずねる when は日常会話でも入試でも超頻出。

■ where（どこ・どこで・どこに）
形：Where ＋ do/does/is/are ＋ 主語 ＋ 〜 ?
例）Where do you live?（どこに住んでいますか）— I live in Tokyo.
例）Where is my pen?（私のペンはどこですか）— It is on the desk.
例）Where does she study?（彼女はどこで勉強しますか）— She studies in her room.
★ 答え方：場所を表す語（in 〜, on 〜, at 〜, here, there）で答える。

■ 場所を表す前置詞とセットで覚える
・in（〜の中に）：in the box ／ in Osaka
・on（〜の上に）：on the table
・under（〜の下に）：under the chair
・near（〜の近くに）：near the station
・by（〜のそばに）：by the window

■ when（いつ）
形：When ＋ do/does/is/are ＋ 主語 ＋ 〜 ?
例）When do you play tennis?（いつテニスをしますか）— On Sundays.
例）When is your birthday?（誕生日はいつですか）— It is May 5th.
例）When does the movie start?（映画はいつ始まりますか）— At seven.
★ 答え方：時を表す語（on Monday, in summer, at seven, tomorrow など）で答える。

■ 時を表す前置詞の使い分け（重要）
・at ＋ 時刻：at seven（7時に）／ at noon（正午に）
・on ＋ 曜日・日付：on Sunday ／ on May 5th
・in ＋ 月・季節・年：in April ／ in summer ／ in 2026
⚠ 注意：「時刻＝at」「曜日/日＝on」「月/季節/年＝in」の3段階で覚える。範囲が広いほど in、せまい一点ほど at。`,
      },
      {
        heading: '3. how の使い方（数・量・年齢・程度）',
        body: `how は「どうやって（方法）」だけでなく、「how ＋ 形容詞／副詞」でいろいろな程度をたずねる、とても便利な疑問詞。

■ how 単独（方法・状態・様子）
・方法「どうやって」：How do you go to school?（どうやって学校へ行きますか）— By bus.
・状態「どんな具合」：How are you?（元気ですか）— I'm fine, thank you.
・感想「どうですか」：How is the weather?（天気はどうですか）— It's sunny.

■ how many（いくつ／何人）＋ 数えられる名詞の複数形
例）How many books do you have?（本を何冊持っていますか）— I have ten (books).
例）How many students are there in your class?（クラスに何人生徒がいますか）— Thirty.
★ ポイント：how many のあとの名詞は必ず複数形（books, students）。

■ how much（いくら／どれくらい）
①値段をたずねる：How much is this bag?（このかばんはいくらですか）— It's 2,000 yen.
②数えられない量：How much water do you need?（水はどれくらい必要ですか）
★ ポイント：数えられる → how many、数えられない（水・お金など）→ how much。

■ how old（何歳・築何年）
例）How old are you?（何歳ですか）— I'm twelve (years old).
例）How old is this temple?（この寺は築何年ですか）

■ how long / how tall / how far など
・how long（どのくらい長い・長さ／期間）：How long is this river?
・how tall（どのくらい高い・身長）：How tall are you? — I'm 150 cm.
・how far（どのくらい遠い・距離）：How far is it from here to the station?
・how often（どのくらいの頻度で）：How often do you play tennis? — Twice a week.
★ 覚え方：「how ＋ 形容詞」で「どのくらい〜？」とたずねる、が共通ルール。`,
      },
      {
        heading: '4. why・which・whose と答え方',
        body: `残りの疑問詞 why（なぜ）・which（どちら）・whose（だれの）を覚えれば、疑問詞はすべてそろう。

■ why（なぜ）と答え方
形：Why ＋ do/does/is/are ＋ 主語 ＋ 〜 ?
例）Why do you like English?（なぜ英語が好きですか）
答え方は2通り：
①Because ＋ 主語 ＋ 動詞（〜だから）
　例）Because it is fun.（楽しいからです）
②To ＋ 動詞の原形（〜するためです）
　例）Why do you study hard? — To be a doctor.（医者になるためです）
★ ポイント：why の答えは Because または To 〜 で始めるのが基本。

■ which（どちら・どれ）
2つ以上の中から選ぶときに使う。
・Which is your bag, this one or that one?（あなたのかばんはどちら、これそれともあれ）
・Which ＋ 名詞：Which season do you like?（どの季節が好きですか）
★ ポイント：「A それとも B」と選択肢があるときは、what より which を使う。

■ whose（だれの）
持ち主をたずねる。「whose ＋ 名詞」または whose 単独。
例）Whose pen is this?（これはだれのペンですか）— It's mine.（私のです）
例）Whose is this bike?（この自転車はだれのですか）— It's Tom's.
★ 答え方：mine（私の）／ yours（あなたの）／ Tom's（トムの）など所有を表す語。

■ 疑問詞のまとめ表
| 疑問詞 | 意味 | 答えの例 |
|--------|------|----------|
| what | なに | It's a pen. |
| who | だれ | She is my sister. |
| where | どこ | In Osaka. |
| when | いつ | On Sunday. |
| why | なぜ | Because it's fun. |
| how | どうやって/どのくらい | By bus. / I'm fine. |
| which | どちら | This one. |
| whose | だれの | It's mine. |

⚠ 注意：疑問詞疑問文には Yes/No で答えず、たずねられた内容を答える。これが最重要ルール。`,
      },
      {
        heading: '5. 練習問題（疑問詞）',
        body: `疑問詞を正しく使えるか、問題で確認しよう。

【問題1】答えの文に合うように、（　）に適切な疑問詞を入れなさい。
① (   ) do you live? — I live in Kyoto.
② (   ) is your birthday? — It's April 10th.
③ (   ) many pencils do you have? — I have five.

【解答】① Where　② When　③ How
【解説】①場所を答えている → Where　②日付を答えている → When　③数を答えている → How many の How。

【問題2】次の日本語を英語にしなさい。
「あなたはなぜ早く起きるのですか。」

【解答例】Why do you get up early?
【解説】疑問詞 Why ＋ 一般動詞の疑問文（do you get up）＋ early。答えるときは Because 〜 か To 〜。

【問題3】下線部をたずねる疑問文を作りなさい。
This is Tom's bag.（下線部：Tom's）

【解答】Whose bag is this?
【解説】「だれの」持ち物かをたずねる → Whose。whose bag のかたまりを文頭に置き、is this? を続ける。

【問題4】（　）に which か what を入れなさい。
(   ) do you like better, tea or coffee?

【解答】Which
【解説】「tea それとも coffee」と2つの選択肢から選ぶので which を使う。選択肢があるときは what ではなく which。

★ 入試・テスト対策ポイント
■ 疑問詞は文の最初に置き、あとは Yes/No 疑問文と同じ語順
■ how ＋ 形容詞（many/much/old/long/tall/far/often）で程度をたずねる
■ why の答えは Because 〜／To 〜
■ 選択肢があるときは which
■ 疑問詞疑問文に Yes/No で答えない`,
      },
      {
        heading: '★ MAXレベル：間接疑問文・付加疑問・疑問詞＋to',
        body: `■ 間接疑問文（疑問文が文の中に入る形）
疑問文が別の文の一部になると、語順が「疑問詞 ＋ 主語 ＋ 動詞」（ふつうの文の語順）に変わる。do/does/did は使わない。
・直接疑問：Where does she live?
・間接疑問：I don't know where she lives.（彼女がどこに住んでいるか知らない）
例）Do you know what time it is?（今何時か知っていますか）
例）Tell me why you were late.（なぜ遅れたのか教えて）
⚠ 注意：間接疑問文の中では
　①疑問文の語順（倒置）にしない
　②do/does/did を使わず、動詞に三単現の s や過去形をつける
　× I don't know where does she live. → ○ I don't know where she lives.
★ 入試で最も差がつく落とし穴。「文の中の疑問文はふつうの語順」と覚える。

■ 付加疑問文（〜だよね？と念を押す）
文の最後に「短い疑問」をつけて確認する。前が肯定なら後ろは否定、前が否定なら後ろは肯定にする。
・You are a student, aren't you?（あなたは生徒だよね）
・He plays tennis, doesn't he?（彼はテニスをするよね）
・She doesn't like natto, does she?（彼女は納豆が好きじゃないよね）
★ ポイント：前の文の動詞（be動詞／do・does／助動詞）を使い、肯定と否定を逆にして主語を代名詞にする。

■ 疑問詞 ＋ to 不定詞（〜すべきか）
疑問詞と to ＋ 動詞の原形を組み合わせると、便利な名詞のかたまりになる。
・what to do（何をすべきか）：I don't know what to do.（何をすべきかわからない）
・how to 〜（〜のしかた）：Please tell me how to use this.（使い方を教えて）
・where to go（どこへ行くべきか）：We decided where to go.（どこへ行くか決めた）
・when to start（いつ始めるべきか）
例）Do you know how to get to the station?（駅への行き方を知っていますか）
★ ポイント：「how to swim（泳ぎ方）」のように、疑問詞＋to＋原形で「〜する方法・〜すべきか」を表す。会話・作文で非常に役立つ。

■ How come 〜?（なぜ〜なの？）
why のくだけた言い方。ただし語順がふつうの文（主語＋動詞）になる点に注意。
例）How come you are so happy?（どうしてそんなに嬉しいの）
⚠ why なら Why are you so happy? と倒置するが、How come のあとは倒置しない。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_10_can_meirei',
    subject: 'eigo',
    title: 'can・命令文・助動詞の基礎',
    description: '「できる」「〜しなさい」「〜しよう」を表す表現をマスター',
    order: 10,
    sections: [
      {
        heading: '1. can の使い方（能力・可能）',
        body: `can は「〜できる」という意味を表す言葉。動詞を助ける働きをするので「助動詞（じょどうし）」と呼ばれる。

■ can の基本の形
主語 ＋ can ＋ 動詞の原形 ＋ 〜
例）I can swim.（私は泳げる）
例）She can speak English.（彼女は英語が話せる）
例）Birds can fly.（鳥は飛べる）
★ 最重要ポイント：can のあとの動詞は、主語が he/she でも必ず「原形」。三単現の s をつけない。
× She can speaks English.（×）
○ She can speak English.（○）

■ なぜ原形になるのか
can などの助動詞は「動詞を助ける」役目。時制や人称の情報は助動詞がもつので、あとの動詞は変化しない原形のまま。これは will・must・should など他の助動詞にも共通するルール。

■ can の否定文（〜できない）
can のあとに not をつける。can not は1語で cannot、短縮形は can't。
例）I cannot（can't）ride a bike.（私は自転車に乗れない）
例）He can't cook.（彼は料理ができない）

■ can の疑問文（〜できますか）
can を文の最初に出す。
形：Can ＋ 主語 ＋ 動詞の原形 〜 ?
例）Can you play the guitar?（ギターを弾けますか）
答え方：Yes, 主語 ＋ can. ／ No, 主語 ＋ can't.
例）Can you swim? — Yes, I can. ／ No, I can't.

■ be able to（can とほぼ同じ意味）
can は「be able to（〜することができる）」で言いかえられる。
例）I can swim. = I am able to swim.
★ ポイント：未来（will）や完了形など、can が使えない場面では be able to を使う。
例）I will be able to swim soon.（もうすぐ泳げるようになる）※will can とは言えない`,
      },
      {
        heading: '2. can のいろいろな意味（許可・依頼）',
        body: `can は「能力（〜できる）」以外にも、会話でよく使う意味がある。場面ごとに覚えよう。

■ 許可「〜してもよい」（Can I 〜?）
自分がしてよいか相手にたずねる。
例）Can I open the window?（窓を開けてもいいですか）
例）Can I use your pen?（あなたのペンを使ってもいいですか）
答え方：Sure. / Of course. / OK.（いいですよ）／ Sorry, you can't.（だめです）

■ 依頼「〜してくれますか」（Can you 〜?）
相手に何かをたのむ。
例）Can you help me?（手伝ってくれますか）
例）Can you pass me the salt?（塩を取ってくれますか）
答え方：Sure. / OK. / All right.（いいですよ）／ Sorry, I can't.（ごめん、できません）

■ よりていねいな言い方（Could you / May I）
・Could you 〜?：Can you より丁寧な依頼「〜していただけますか」
　例）Could you tell me the way to the station?（駅への道を教えていただけますか）
・May I 〜?：Can I より丁寧な許可「〜してもよろしいですか」
　例）May I come in?（入ってもよろしいですか）
★ ポイント：Could / May は目上の人やお店などでの丁寧な表現。中身は can とほぼ同じ。

■ 「〜できた」（過去の could）
can の過去形は could。「〜できた」を表す。
例）I could swim when I was five.（5歳のとき泳げた）
否定：couldn't（〜できなかった）
例）I couldn't sleep last night.（昨夜は眠れなかった）

⚠ 注意：Can I / Can you の答えでは can で答えない。
　Can you help me? — Sure.（○）／ Yes, I can.（能力を答える感じで少し不自然）
　依頼・許可には Sure. / Of course. / Sorry. などで応じるのが自然。`,
      },
      {
        heading: '3. 命令文（〜しなさい・〜してください）',
        body: `「〜しなさい」「〜してください」と相手に指示・お願いする文を命令文という。作り方はとてもシンプル。

■ 命令文の基本：主語 you を省き、動詞の原形で始める
・You open the door. → Open the door.（ドアを開けなさい）
・You are quiet. → Be quiet.（静かにしなさい）
★ ポイント：ふつうの文の主語 You を取るだけ。be動詞の命令文は Be で始める。

■ ていねいにする please
文の最初か最後に please をつけると「〜してください」と丁寧になる。
例）Please sit down. ／ Sit down, please.（すわってください）
★ 文末につけるときは前にコンマ「,」を入れる。

■ 否定の命令文「〜してはいけない」（Don't 〜）
動詞の原形の前に Don't（Do not）を置く。
例）Don't run here.（ここで走ってはいけません）
例）Don't be late.（遅れてはいけません）※be動詞でも Don't be
例）Don't worry.（心配しないで）

■ Let's 〜（〜しよう）：さそいかけの文
Let's（Let us の短縮）＋ 動詞の原形 で「（いっしょに）〜しよう」と提案する。
例）Let's play soccer.（サッカーをしよう）
例）Let's go to the library.（図書館へ行こう）
答え方：Yes, let's.（そうしよう）／ Sounds good.（いいね）／ Sorry, I can't.（ごめん、無理）

■ 命令文 ＋ and / or（重要構文）
・命令文, and 〜：「〜しなさい、そうすれば…」
　例）Get up early, and you can catch the train.（早く起きなさい、そうすれば電車に乗れる）
・命令文, or 〜：「〜しなさい、さもないと…」
　例）Hurry up, or you will be late.（急ぎなさい、さもないと遅れるよ）
★ ポイント：and は「そうすれば（良い結果）」、or は「さもないと（悪い結果）」。入試頻出。

⚠ 注意：命令文には主語がない。動詞は必ず原形で始める。三単現の s も過去形もつけない。`,
      },
      {
        heading: '4. その他の助動詞（will / must / should / may）',
        body: `can 以外にも、動詞に意味を加える助動詞がある。どれも「助動詞 ＋ 動詞の原形」の形は共通。

■ will（〜するつもりだ・〜だろう）：未来を表す
例）I will study hard.（一生懸命勉強するつもりだ）
例）It will rain tomorrow.（明日は雨が降るだろう）
否定：will not（won't）
例）I won't give up.（あきらめない）
疑問：Will you 〜?（〜してくれますか／〜するつもりですか）
例）Will you help me? — Sure.

■ must（〜しなければならない・〜にちがいない）
①義務「〜しなければならない」
　例）You must do your homework.（宿題をしなければならない）
②推量「〜にちがいない」
　例）He must be tired.（彼は疲れているにちがいない）
否定 must not（mustn't）は「〜してはいけない」（強い禁止）
　例）You must not run here.（ここで走ってはいけない）

■ have to（〜しなければならない）：must とほぼ同じ意味
・主語が三人称単数のときは has to
　例）She has to go now.（彼女はもう行かなければならない）
・否定 don't have to は「〜しなくてよい」（不必要）※must not と意味が違う！
　例）You don't have to hurry.（急がなくてよい）
⚠ 注意：must not「〜してはいけない（禁止）」と don't have to「〜しなくてよい（不要）」は正反対。入試頻出の区別。

■ should（〜すべきだ・〜したほうがよい）
例）You should see a doctor.（医者に行ったほうがよい）
例）We should protect nature.（自然を守るべきだ）

■ may（〜してもよい・〜かもしれない）
①許可「〜してもよい」：You may go home.（帰ってもよい）
②推量「〜かもしれない」：It may rain.（雨が降るかもしれない）

★ 助動詞の共通ルールまとめ
①助動詞のあとの動詞は必ず原形（三単現の s なし）
②助動詞は2つ並べられない（× will can → ○ will be able to）
③否定は助動詞 ＋ not、疑問は助動詞を前に出す`,
      },
      {
        heading: '5. 練習問題（can・命令文・助動詞）',
        body: `助動詞と命令文の理解を問題で確認しよう。

【問題1】（　）内から正しいものを選びなさい。
She can ( plays / play / played ) the violin.

【解答】play
【解説】助動詞 can のあとの動詞は必ず原形。主語が she でも plays にしない。

【問題2】次の文を否定文にしなさい。
① You can enter this room.　② Run in the classroom.（命令文）

【解答】① You cannot（can't）enter this room.　② Don't run in the classroom.
【解説】①can の否定は cannot／can't。②命令文の否定は Don't ＋ 原形。

【問題3】次の日本語を英語にしなさい。
「急ぎなさい、さもないとバスに乗り遅れますよ。」

【解答例】Hurry up, or you will miss the bus.
【解説】「命令文, or 〜」で「〜しなさい、さもないと…」。and（そうすれば）と or（さもないと）を混同しないこと。

【問題4】意味の違いに注意して日本語にしなさい。
① You must not swim here.　② You don't have to swim here.

【解答】① ここで泳いではいけない。（禁止）　② ここで泳ぐ必要はない。（不要）
【解説】must not は強い禁止、don't have to は「しなくてよい」。正反対の意味なので要注意。

★ 入試・テスト対策ポイント
■ 助動詞（can/will/must/should/may）のあとは必ず動詞の原形
■ 命令文は原形で始める。否定は Don't、勧誘は Let's
■ 「命令文, and」＝そうすれば／「命令文, or」＝さもないと
■ must not（禁止）と don't have to（不要）は正反対
■ can = be able to、must = have to で言いかえられる`,
      },
      {
        heading: '★ MAXレベル：助動詞の書きかえと過去・未来での表現',
        body: `■ 助動詞は時制で言いかえが必要（原則2語並べられない）
助動詞どうしは並べられないため、未来や完了では「be able to / have to」を使う。
・can → 未来：will be able to（〜できるようになる）
　例）I will be able to drive a car next year.
・must → 未来：will have to（〜しなければならないだろう）
　例）You will have to wait.（待たなければならないだろう）
・must → 過去：had to（〜しなければならなかった）
　例）I had to walk home yesterday.（昨日は歩いて帰らなければならなかった）
⚠ 注意：must には過去形がないので、過去は had to を使う。

■ 助動詞を使ったていねいな依頼・申し出の使い分け
・Will you 〜? … 依頼（〜してくれる？）ややカジュアル
・Would you 〜? … Will you より丁寧
・Can you 〜? … 依頼（〜できる？）
・Could you 〜? … Can you より丁寧
・Shall I 〜? … 申し出（〜しましょうか）
　例）Shall I carry your bag?（かばんを持ちましょうか）— Yes, please.
・Shall we 〜? … 勧誘（いっしょに〜しましょうか）＝ Let's 〜
　例）Shall we dance?（踊りましょうか）

■ had better（〜したほうがよい／しないと困る）
should より強い忠告。「そうしないとまずい」というニュアンス。
例）You had better see a doctor.（医者に行ったほうがいい）
否定：had better not（〜しないほうがよい）
例）You had better not eat too much.（食べすぎないほうがいい）
⚠ 注意：had better のあとも動詞は原形。not の位置は had better の直後（had better not）。

■ 助動詞 ＋ have ＋ 過去分詞（過去への推量・後悔）※発展
・must have 過去分詞：〜したにちがいない
　例）He must have missed the train.（電車に乗り遅れたにちがいない）
・should have 過去分詞：〜すべきだったのに（後悔）
　例）I should have studied harder.（もっと勉強すべきだった）
・may / might have 過去分詞：〜したかもしれない
　例）She may have forgotten it.（忘れたのかもしれない）
★ ポイント：これらは「今から見て過去のこと」を推量・後悔する上級表現。難関校・高校英語で頻出。

■ Let's 〜 の付加疑問と応答
・Let's go, shall we?（行きましょうよ、ね？）… Let's の付加疑問は shall we?
・命令文の付加疑問は will you?：Open the door, will you?（ドアを開けてくれる？）
これらは「疑問詞・付加疑問」と「命令・勧誘」の知識を組み合わせた総合問題として出やすい。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_11_aisatsu_kaiwa',
    subject: 'eigo',
    title: 'あいさつ・自己紹介・数・曜日・時間の会話表現',
    description: '英語で話す第一歩！日常の決まり文句と数・時・曜日を身につける',
    order: 11,
    sections: [
      {
        heading: '1. あいさつと別れの表現',
        body: `英語のコミュニケーションはあいさつから始まる。場面や時間帯に合ったあいさつを覚えよう。

■ 時間帯によるあいさつ
・Good morning.（おはよう）… 朝
・Good afternoon.（こんにちは）… 昼
・Good evening.（こんばんは）… 夜
・Hello. / Hi.（やあ・こんにちは）… いつでも使える
★ ポイント：Good night.（おやすみ）は「別れ・寝るとき」に使う。夜のあいさつ（会ったとき）は Good evening。

■ 調子をたずねる・答える
・How are you?（元気ですか）
　答え：I'm fine, thank you. And you?（元気です、ありがとう。あなたは？）
　　　　Pretty good. / Not bad. / So-so.（まあまあ）
・How are you doing? / How's it going?（調子どう？）… くだけた言い方

■ はじめて会ったときのあいさつ
・Nice to meet you.（はじめまして）
　答え：Nice to meet you, too.（こちらこそ）
★ ポイント：2回目以降は Nice to see you.（また会えてうれしい）を使う。meet は「初対面」、see は「再会」。

■ 別れのあいさつ
・Goodbye. / Bye.（さようなら）
・See you. / See you later.（またね）／ See you tomorrow.（また明日）
・Take care.（気をつけてね）
・Have a nice day.（よい一日を）
　答え：You too.（あなたもね）

■ お礼・あやまり・返事
・Thank you (very much). / Thanks.（ありがとう）→ You're welcome.（どういたしまして）
・I'm sorry. / Excuse me.（ごめんなさい／すみません）→ That's OK. / No problem.（大丈夫）
⚠ 注意：Excuse me. は「呼びかけ・軽い失礼」（すみません＝話しかけるとき）、I'm sorry. は「あやまる」（ごめんなさい）。場面で使い分ける。`,
      },
      {
        heading: '2. 自己紹介の表現',
        body: `自己紹介は名前・出身・好きなもの・できることなどを英語で言えるようにしよう。スピーキングテストでも定番。

■ 名前を言う
・My name is Tom. / I'm Tom.（私の名前はトムです）
・Please call me Ken.（ケンと呼んでください）
・たずねる：What's your name?（お名前は）— My name is 〜.

■ 出身・住んでいる場所
・I'm from Osaka.（大阪出身です）
・I live in Tokyo.（東京に住んでいます）
・たずねる：Where are you from? — I'm from Japan.

■ 年齢・学年
・I'm twelve (years old).（12歳です）
・I'm a sixth grader. / I'm in the sixth grade.（6年生です）
・たずねる：How old are you? — I'm twelve.

■ 好きなもの・得意なこと
・I like soccer. / My favorite sport is soccer.（サッカーが好きです）
・I'm good at math.（数学が得意です）
・I can play the piano.（ピアノが弾けます）
・たずねる：What subject do you like? — I like English.

■ 家族やペット
・I have a brother and a sister.（兄と妹がいます）
・I have a dog. Its name is Pochi.（犬を飼っています。名前はポチです）

■ 自己紹介の例（つなげてみよう）
Hello. My name is Yuki. I'm from Kyoto. I'm eleven years old. I like reading books, and I'm good at English. I have a cat. Nice to meet you.
★ ポイント：「あいさつ→名前→出身→年齢→好きなこと→ペット→しめのあいさつ」の順で並べると自然な自己紹介になる。`,
      },
      {
        heading: '3. 数の言い方（基数・序数）',
        body: `数は日付・時間・値段・電話番号などあらゆる場面で使う。基数（ふつうの数）と序数（順番）をセットで覚えよう。

■ 基数（ものの数を表す数）1〜20
one, two, three, four, five, six, seven, eight, nine, ten,
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty
⚠ 注意：13〜19は「-teen」、つづりに注意（thirteen, fifteen, eighteen は特別な形）。

■ 何十・大きな数
・twenty(20), thirty(30), forty(40 ※uなし), fifty(50), sixty(60), seventy(70), eighty(80), ninety(90)
・21以上はハイフンでつなぐ：21 → twenty-one ／ 35 → thirty-five
・100 → one hundred ／ 1,000 → one thousand ／ 10,000 → ten thousand
例）235 → two hundred (and) thirty-five
★ ポイント：hundred・thousand は複数でも s をつけない（two hundred、× two hundreds）。

■ 序数（順番・〜番目を表す数）
first(1st), second(2nd), third(3rd), fourth(4th), fifth(5th),
sixth(6th), seventh(7th), eighth(8th), ninth(9th ※eなし), tenth(10th),
eleventh, twelfth(12th), … twentieth(20th), twenty-first(21st)
★ ポイント：1st, 2nd, 3rd は特別な形。それ以外は基本「-th」。5番目 fifth、9番目 ninth、12番目 twelfth はつづりに注意。

■ 序数を使う場面
・日付：May 5th（5月5日）／ the third of April（4月3日）
・順番：the first floor（1階）／ the second question（2問目）
・「〜回目」：the first time（初めて）

■ 電話番号・年号の読み方
・電話番号は数字を1つずつ読む：090-1234-5678 → zero nine zero, one two three four, …
・年号は2けたずつ：1999 → nineteen ninety-nine ／ 2026 → twenty twenty-six
⚠ 注意：0 は「オー」または「ゼロ」と読む。`,
      },
      {
        heading: '4. 曜日・月・日付の言い方',
        body: `曜日・月・日付は会話でも入試でも頻出。つづりと大文字ルールに注意して覚えよう。

■ 曜日（Days of the week）※最初は大文字
Sunday（日）, Monday（月）, Tuesday（火）, Wednesday（水）,
Thursday（木）, Friday（金）, Saturday（土）
⚠ 注意：Wednesday（d を読まない）、Tuesday・Thursday のつづりに注意。
・「〜曜日に」は on を使う：on Monday（月曜日に）／ on Sundays（毎週日曜に）
・たずねる：What day is it today? — It's Friday.（今日は何曜日？— 金曜日）

■ 月（Months）※最初は大文字
January（1月）, February（2月）, March（3月）, April（4月）,
May（5月）, June（6月）, July（7月）, August（8月）,
September（9月）, October（10月）, November（11月）, December（12月）
・「〜月に」は in を使う：in April（4月に）／ in December
⚠ 注意：February のつづり（r が2つ）、August の発音（オーガスト）に注意。

■ 日付の言い方
・月 ＋ 序数：May 5th（5月5日）／ July 20th
・読むときは序数（fifth, twentieth）で読む：May fifth
・「〜日に」は on：on May 5th
・たずねる：What's the date today? — It's June 10th.（今日は何日？— 6月10日）

■ 日付を書く順番（アメリカ式とイギリス式）
・アメリカ式：月→日→年　例）April 3, 2026 ／ 4/3/2026
・イギリス式：日→月→年　例）3 April 2026 ／ 3/4/2026
★ ポイント：4/3 がアメリカでは4月3日、イギリスでは3月4日を指す。入試ではアメリカ式が基本。

■ 季節（Seasons）
spring（春）, summer（夏）, fall / autumn（秋）, winter（冬）
・「〜（季節）に」は in：in summer（夏に）
例）I like winter because I can ski.（スキーができるので冬が好きだ）`,
      },
      {
        heading: '5. 時間の言い方と練習問題',
        body: `時刻のたずね方・答え方を覚えれば、日常会話とリスニングでぐっと有利になる。

■ 時刻のたずね方
・What time is it (now)?（今何時ですか）
・Do you have the time?（今何時ですか）※ていねいな言い方
・What time do you 〜?（何時に〜しますか）
　例）What time do you get up? — At six.（6時に起きます）

■ 時刻の答え方
①「時＋分」をそのまま並べる（かんたん）
　7:15 → It's seven fifteen. ／ 8:30 → It's eight thirty.
②past（過ぎ）と to（前）を使う言い方
　・7:15 → It's fifteen past seven.（7時15分過ぎ）
　・7:45 → It's fifteen to eight.（8時15分前）
　・7:30 → It's half past seven.（7時半）
　・7:00ちょうど → It's seven o'clock.
★ ポイント：past は「〜分過ぎ」、to は「〜分前（次の時刻まで）」。half は30分、quarter は15分。

■ 午前・午後
・a.m.（午前）／ p.m.（午後）
　例）It's 9 a.m.（午前9時）／ It's 3 p.m.（午後3時）
・in the morning（午前中に）／ in the afternoon（午後に）／ in the evening（夕方に）／ at night（夜に）
・at noon（正午に）／ at midnight（真夜中に）

【問題1】次の時刻を英語で言いなさい（2通り）。
6:30

【解答】It's six thirty. ／ It's half past six.
【解説】そのまま読む言い方と past を使う言い方の両方ができるとよい。30分は half。

【問題2】（　）に at / on / in のどれかを入れなさい。
① I get up (   ) seven.　② My birthday is (   ) May.　③ We have no school (   ) Sunday.

【解答】① at　② in　③ on
【解説】時刻は at、月は in、曜日は on。「点＝at、範囲が広い＝in、曜日/日付＝on」で覚える。

【問題3】次の日本語を英語にしなさい。
「今日は何曜日ですか。」

【解答】What day is it today?
【解説】曜日をたずねる決まった言い方。日付をたずねるなら What's the date today?。

★ まとめ
■ あいさつは時間帯・初対面/再会で使い分ける
■ 自己紹介は「名前→出身→年齢→好き→ペット」の順
■ 序数の 1st/2nd/3rd/5th/9th/12th は特別な形
■ 時の前置詞：時刻 at ／ 曜日・日付 on ／ 月・季節・年 in
■ 時刻は「そのまま読む」と「past / to」の2通り`,
      },
      {
        heading: '★ MAXレベル：場面別の会話表現とていねいさ',
        body: `■ 買い物での会話（店員と客）
・店員：May I help you?（いらっしゃいませ／お手伝いしましょうか）
・客：I'm just looking, thank you.（見ているだけです）／ I'm looking for a T-shirt.（Tシャツを探しています）
・値段：How much is it? — It's 1,500 yen.
・試着：Can I try it on?（試着してもいいですか）
・決める：I'll take it.（これをください）／ Here you are.（はいどうぞ）
★ ポイント：May I help you? は店・道案内など「手伝いの申し出」の決まり文句。

■ 電話での会話
・Hello, this is Tom.（もしもし、トムです）※電話では I am ではなく this is を使う
・May I speak to Ken?（ケンをお願いできますか）
・Speaking.（私です）※本人が出たとき
・Hold on, please. / Just a moment, please.（少々お待ちください）
・Can I take a message?（伝言をうかがいましょうか）／ Can I leave a message?（伝言をお願いできますか）
⚠ 注意：電話では自分を this is 〜、相手を you ではなく you のままだが、名乗りは this is。I am Tom とは言わない。

■ レストラン・食事での会話
・注文をとる：Are you ready to order?（ご注文はお決まりですか）
・注文する：I'd like a hamburger, please.（ハンバーガーをお願いします）※I'd like = I would like（ていねいな I want）
・すすめる：Would you like some more?（もう少しいかがですか）— Yes, please. / No, thank you.
・会計：Check, please. / Can I have the bill?（お会計をお願いします）
★ ポイント：I'd like 〜／Would you like 〜? は want より丁寧。接客・おもてなしの定番表現。

■ 道案内の会話
・たずねる：Excuse me. How can I get to the station?（駅へはどう行けばいいですか）
・答える：Go straight and turn right at the second corner. It's on your left.
・距離・時間：It's about five minutes' walk.（歩いて5分くらいです）
・お礼：Thank you. — You're welcome.

■ ていねいさの段階（同じ内容でも表現で印象が変わる）
| カジュアル | ふつう | ていねい |
|----|----|----|
| Open the window. | Can you open the window? | Could you open the window? |
| I want water. | I'd like water. | I'd like some water, please. |
| What? | Pardon? | I beg your pardon? |
★ 入試のリスニング・会話問題では、場面（店・電話・食事・道案内）と、ていねいさのレベルを聞き分ける力が問われる。決まり文句をかたまりで覚えておくと即得点につながる。`,
        maxOnly: true,
      },
    ],
  },
];
