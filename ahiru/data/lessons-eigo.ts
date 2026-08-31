import type { Lesson } from './lesson-types';
import { eigoExt01Lessons } from './lessons-eigo-ext01';
import { eigoExt02Lessons } from './lessons-eigo-ext02';
import { eigoExt03Lessons } from './lessons-eigo-ext03';
import { eigoExt04Lessons } from './lessons-eigo-ext04';
import { eigoExt05Lessons } from './lessons-eigo-ext05';
import { eigoExt06Lessons } from './lessons-eigo-ext06';
import { eigoExt07Lessons } from './lessons-eigo-ext07';
import { eigoExt08Lessons } from './lessons-eigo-ext08';
import { eigoExt09Lessons } from './lessons-eigo-ext09';
import { eigoExt10Lessons } from './lessons-eigo-ext10';
import { eigoExt11Lessons } from './lessons-eigo-ext11';
import { eigoExt12Lessons } from './lessons-eigo-ext12';
import { lessonsNew20E4Eigo } from './lessons-new20-e4-eigo';
import { lessonsNew20E5Eigo } from './lessons-new20-e5-eigo';
import { lessonsNew20E6Eigo } from './lessons-new20-e6-eigo';

// 既存の総論レッスン（order 1〜22）。450セッションの拡張ユニットは
// lessons-eigo-ext01〜ext12（order 501〜950）にあり、下でまとめて結合する。
const eigoOverviewLessons: Lesson[] = [
  {
    id: 'eigo_01_bunpo_kihon',
    subject: 'eigo',
    title: '英語の基本文型と時制の完全マスター',
    description: '入試の核心！5文型と時制のルールを体系的に学ぶ',
    keyPoints: [
      `5文型：SV／SVC（S＝C）／SVO／SVOO（人＋物）／SVOC（O＝C）。動詞の後ろの語で見分ける`,
      `be動詞は現在 am(I)／is(3人称単数)／are(you・複数)、過去 was／were。一般動詞は三単現で-s/-es（go→goes, have→has）`,
      `過去形の不規則変化は「原形・過去形・過去分詞」をセットで暗記（go-went-gone / see-saw-seen 等）`,
      `未来は will＋原形（その場の意志・予測）と be going to＋原形（前から決めた予定・根拠ある予測）`,
      `現在完了 have/has＋過去分詞：継続 for/since、完了 just/already/yet、経験 ever/never/once。yesterday・〜agoなど過去の一点とは併用不可`,
      `受動態は be動詞＋過去分詞（＋by〜）。be interested in／be known for／be made of／be covered with など前置詞セットで暗記`,
      `仮定法過去 If＋過去形（be動詞はwere）, 主語＋would/could/might＋原形。仮定法過去完了 If＋had＋過去分詞`,
    ],
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
    keyPoints: [
      `可算名詞は複数形-s/-es・a/anがつく。不可算名詞（water/money/information/advice/news/homework）はa/an・複数形にできない`,
      `many＋可算、much＋不可算、a lot ofは両方OK。few/a few＋可算、little/a little＋不可算`,
      `someは肯定文と勧誘・依頼、anyは否定文・疑問文で使う`,
      `a/anは初出「1つの」、theは既出・特定・世界に1つ（the sun/the moon）。a/anは発音で選ぶ（an hour, a university）`,
      `人称代名詞の格：主格I／所有格my（名詞の前）／目的格me／所有代名詞mine（名詞の代わり）`,
      `one/another/the other/others/the others の使い分け。全2つなら one と the other`,
      `再帰代名詞 -self/-selves。by oneself は「ひとりで・独力で」`,
    ],
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
    keyPoints: [
      `本文を読む前に設問・選択肢を先読みし、どこに答えがあるか予測する`,
      `各段落の最初の文（topic sentence）に要点がある。時間がなければ各段落の頭を読む`,
      `However/But＝逆接（後ろに主張）、Therefore/So＝結論、For example＝具体例、In addition＝追加`,
      `知らない単語は文脈・言い換え・接頭辞接尾辞で推測（un-/re-/pre-、-tion/-ful/-less/-ly）`,
      `内容一致は選択肢のキーワードを本文で探し、言い換え（visited＝went to 等）と主語・時・場所のすり替えに注意`,
      `指示語（it/they/this）は直前1〜2文から探し、代入して意味が通るか確認`,
      `Whyの答えはBecause〜。疑問詞に対応した内容を主語＋動詞の完全な文で答え、質問の時制に合わせる`,
    ],
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
    keyPoints: [
      `英語の基本語順は S＋V＋O＋場所＋時間。動詞は主語のすぐ後ろに置く`,
      `否定文：be動詞＋not／do(does/did)＋not＋原形／助動詞＋not＋原形`,
      `疑問文：Do/Does/Did＋主語＋原形、疑問詞＋do/does/did＋主語＋原形`,
      `間接疑問文は「疑問詞＋主語＋動詞」の普通の語順（I know where she lives.）`,
      `並び替え頻出構文：There is/are〜、It takes 〜 to…、It is 〜 for 人 to…`,
      `自由英作文は序論(I think〜)→本論(First/For example)→結論(In conclusion)の三段構成`,
      `三単現のs・過去形・冠詞・文頭大文字・文末ピリオドのミスを最後に必ず点検`,
    ],
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
    keyPoints: [
      `不定詞（to＋原形）の3用法：名詞的「〜すること」／形容詞的「〜すべき」／副詞的「〜するために」`,
      `too 〜 to…「〜すぎて…できない」、〜 enough to…「…するのに十分〜だ」`,
      `動名詞（-ing）「〜すること」。enjoy/finish/stop/mindは動名詞、want/hope/decideは不定詞を目的語にとる`,
      `関係代名詞 who(人)/which(もの)/that/whose で名詞を後ろから修飾。目的格は省略できる`,
      `接続詞＋主語＋動詞で副詞節をつくる（when/if/because/although）。時・条件の副詞節は未来でも現在形`,
      `so 〜 that…「とても〜なので…」、It seems that〜「〜のようだ」などの重要構文`,
      `比較の複合表現：not as 〜 as…、the＋比較級, the＋比較級、比較級 and 比較級`,
    ],
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
    keyPoints: [
      `リスニングは放送が始まる前に設問・選択肢・イラストに目を通しておく`,
      `会話の決まり文句：May I help you? / How about 〜? / Why don't we 〜? / Shall I 〜?`,
      `依頼 Could you 〜?、許可 May I 〜?、提案 Let's 〜／Shall we 〜? を場面で使い分ける`,
      `電話・買い物・道案内など場面別の定型応答を覚える`,
      `数字・時刻・曜日・値段は聞き取りで狙われるので即座に理解できるようにする`,
      `頻出熟語（look forward to / be good at / take care of / get to 等）をセットで暗記`,
    ],
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
    keyPoints: [
      `アルファベット大文字26・小文字26を正しく書く。b/d・p/q の向き、n/h の高さに注意`,
      `フォニックス：aは/æ/(apple)などの基本音。母音字＋子音字＋e で母音がアルファベット読みになる（cake, bike, home）`,
      `ローマ字ヘボン式：し＝shi、ち＝chi、つ＝tsu、ふ＝fu、じ＝ji（パスポート・駅名はヘボン式）`,
      `訓令式（si/ti/tu）とヘボン式（shi/chi/tsu）の違いを区別する`,
      `文頭・固有名詞・I（私は）は必ず大文字で書く`,
      `母音字は a, i, u, e, o の5つ。それ以外は子音字`,
    ],
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
    keyPoints: [
      `be動詞は am(I)／is(3人称単数)／are(you・複数)。「〜です・〜にいる（ある）」を表す`,
      `一般動詞は動作「〜する」。三人称単数現在は-s/-esをつける（plays, watches, has, goes）`,
      `否定文：be動詞＋not／don't(doesn't)＋動詞の原形`,
      `疑問文：Is/Are＋主語〜?／Do(Does)＋主語＋動詞の原形〜?`,
      `1つの文にbe動詞と一般動詞を両方は入れない（× I am play soccer.）`,
      `答え方：Yes, I am.／No, I'm not.／Yes, I do.／No, I don't.`,
    ],
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
    keyPoints: [
      `疑問詞：what(何)／who(誰)／where(どこ)／when(いつ)／which(どちら)／whose(誰の)／why(なぜ)／how(どう)`,
      `語順は「疑問詞＋do/does/did＋主語＋原形」または「疑問詞＋be動詞＋主語」`,
      `how many＋可算名詞複数(数)、how much(量・値段)、how old(年齢)、how long(長さ・期間)`,
      `why の答えは Because 〜。疑問詞で始まる疑問文には Yes/No で答えない`,
      `whose＝誰の（所有）、which＝どちら（選択）`,
      `how＝手段・方法・状態（How do you go? / How are you?）`,
    ],
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
    keyPoints: [
      `can＋動詞の原形「〜できる」。否定 can't/cannot、疑問 Can you 〜?`,
      `can は許可（Can/May I 〜?）・依頼（Can/Could you 〜?）の意味にもなる`,
      `命令文は動詞の原形で始める。否定命令は Don't＋原形、ていねいには please を添える`,
      `Let's＋動詞の原形「〜しよう」`,
      `will「〜だろう・するつもり」、must「〜しなければならない」、should「〜すべき」、may「〜してよい・かもしれない」`,
      `助動詞の後は必ず動詞の原形（× can plays）。must は have to で書きかえられる`,
    ],
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
    keyPoints: [
      `あいさつ：Good morning/afternoon/evening、How are you?→I'm fine, thank you.`,
      `自己紹介：My name is 〜.／I'm from 〜.／Nice to meet you.`,
      `基数（one, two…）と序数（first, second, third…）。日付には序数を使う`,
      `曜日 Sunday〜Saturday、月 January〜December。曜日名・月名は必ず大文字で始める`,
      `時刻は It's＋数字。What time is it?→It's seven (o'clock).`,
      `数字：13〜19は-teen、20/30…は-ty、序数は 21st・22nd・23rd のように作る`,
    ],
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
  {
    id: 'eigo_12_zenchishi',
    subject: 'eigo',
    title: '前置詞の使い分け完全マスター（in/on/at/for/during 等）',
    description: '小さいけど得点源！場所・時間・関係を表す前置詞を体系整理',
    keyPoints: [
      `場所：at（点・狭い場所）／in（広い空間の中）／on（面に接している）。in the box・on the desk・at the station`,
      `時刻・時：at＋時刻（at seven）／on＋曜日・日付（on Monday）／in＋月・季節・年（in April）`,
      `期間：for＋数字（for three years）／during＋特定の期間（during summer vacation）`,
      `期限：by＋期限（〜までに、完了）／until＋期限（〜まで、継続）。この区別は入試最頻出`,
      `移動：to（〜へ）／from（〜から）／into（〜の中へ）／out of（〜の外へ）／through（〜を通り抜けて）`,
      `前置詞とセットで覚える熟語：be famous for／be afraid of／depend on／listen to／look for／arrive at(in)`,
      `群前置詞：because of／in spite of／according to／thanks to（あとに名詞・動名詞を続ける）`,
    ],
    order: 12,
    examType: 'chugaku',
    studyPeriod: '小5前半',
    sections: [
      {
        heading: '1. 場所を表す前置詞（in / on / at / under / near など）',
        body: `前置詞は名詞の前に置いて「場所・時・関係」を表す小さな単語だが、入試では空所補充・並び替え・英作文のあらゆる場面で問われる最重要分野の一つ。

■ in・on・at の基本イメージ
・in：広がりのある空間の「中」にある
例）in the box（箱の中に）／ in Tokyo（東京の中に）／ in the water（水の中に）
・on：面に「接している」
例）on the desk（机の上に、接している）／ on the wall（壁に、貼りついて）／ on the ceiling（天井に）
・at：地図上の「点」として特定の場所を指す
例）at the station（駅というポイントで）／ at the door（ドアのところで）／ at home（家で）

★ ポイント：on は必ずしも「上」ではなく「接触」を表す。壁のポスターも on the wall、天井の電球も on the ceiling。

■ 位置関係を表す前置詞
under（〜の下に）／ over・above（〜の上に、離れて）／ below（〜より下に）
next to・beside（〜の隣に）／ near・close to（〜の近くに）
in front of（〜の前に）／ behind（〜の後ろに）
between A and B（AとBの間に：2つのものの間）
among（〜の間に：3つ以上・大勢の中に）

例）The cat is under the table.（猫はテーブルの下にいる）
例）My house is between the park and the school.（私の家は公園と学校の間にある）
例）She is popular among students.（彼女は生徒たちの間で人気がある）

⚠ 注意：between（2者の間）と among（3者以上の間）の使い分けは並び替え・空所補充の定番。

■ 建物・乗り物の中にいることを表す前置詞
in a car / in a taxi（狭い乗り物の中：入って座る）
on a bus / on a train / on a plane（広く移動できる乗り物：乗って歩ける）
例）I read a book on the train.（電車の中で本を読む）
例）She got into the car.（彼女は車に乗り込んだ）
★ ポイント：狭い乗り物（car/taxi）は in、広い乗り物（bus/train/plane/ship）は on。`,
      },
      {
        heading: '2. 時を表す前置詞（at / on / in / for / during）',
        body: `時を表す前置詞は「範囲の広さ」で使い分けるとわかりやすい。狭い範囲から広い範囲の順に整理しよう。

■ at・on・in の使い分け（時刻・曜日・月）
・at ＋ 時刻・時の一点：at seven（7時に）／ at noon（正午に）／ at night（夜に）
・on ＋ 曜日・日付・特定の日：on Monday（月曜日に）／ on May 5th（5月5日に）／ on my birthday（誕生日に）
・in ＋ 月・季節・年・世紀などの広い期間：in April（4月に）／ in summer（夏に）／ in 2026（2026年に）

★ 覚え方：「点＝at」「曜日・日付＝on」「月・季節・年＝in」の3段階。狭いものから広いものへ。

■ for と during（期間を表す前置詞）
・for ＋ 数字を含む期間：「〜の間（数字ではっきり示せる期間）」
例）I have lived here for ten years.（10年間ここに住んでいる）
例）We waited for two hours.（2時間待った）
・during ＋ 特定の期間（名詞）：「〜の間（いつの期間かを名詞で示す）」
例）I went to Kyoto during the summer vacation.（夏休みの間に京都に行った）
例）She fell asleep during the movie.（映画の間に眠ってしまった）
⚠ 注意：during のあとは「数字」ではなく「特定の名詞（期間を表す言葉）」がくる。
× during two hours（×）→ ○ for two hours（○）

■ by と until（期限を表す前置詞・最重要の区別）
・by ＋ 期限：「〜までに」（その時までに動作が完了する）
例）Please finish this work by Friday.（金曜日までにこの仕事を終えてください）
→ 金曜日までのどこかで「終わる」という一回きりの動作。
・until（till）＋ 期限：「〜まで（ずっと）」（その時まで動作・状態が継続する）
例）I will wait here until five.（5時までここで待つ）
→ 5時まで「待つ」という状態がずっと続く。

⚠ 入試最頻出の見分け方：動詞が「完了する動作（finish/return/submit）」なら by、「継続する状態（wait/stay/sleep）」なら until。
例）Submit your homework by Monday.（月曜までに提出＝完了）
例）She stayed at her aunt's house until Monday.（月曜まで滞在＝継続）

■ その他の時の前置詞
・before（〜の前に）／ after（〜の後に）
・since（〜以来、起点）：I have known him since 2020.
・within（〜以内に）：Please reply within a week.（1週間以内に返信してください）`,
      },
      {
        heading: '3. 方向・移動を表す前置詞',
        body: `動きのある動詞（go/come/run/walkなど）と一緒に使われる前置詞は、動きの方向をイメージすると覚えやすい。

■ 基本の方向前置詞
・to（〜へ、到達点）：I go to school.（学校へ行く）
・from（〜から、出発点）：I am from Japan.（私は日本出身だ）
・into（〜の中へ）：She went into the room.（彼女は部屋に入った）
・out of（〜の外へ）：He came out of the house.（彼は家から出てきた）
例）A cat jumped out of the box.（猫は箱から飛び出した）

■ 通過・経由を表す前置詞
・through（〜を通り抜けて）：We walked through the forest.（森を通り抜けて歩いた）
・along（〜に沿って）：They walked along the river.（川に沿って歩いた）
・across（〜を横切って）：She ran across the street.（彼女は通りを走って渡った）
・past（〜のそばを通り過ぎて）：He walked past the school.（彼は学校を通り過ぎて歩いた）

■ 方向を表す前置詞
・toward(s)（〜の方向へ、到達を含意しない）：He walked toward the station.（駅の方へ歩いた）
・for（〜行きの、目的地）：This train is for Osaka.（この電車は大阪行きだ）
・up（〜を上へ）／ down（〜を下へ）：She went up the stairs.（階段を上った）

■ 手段・道具を表す前置詞
・by ＋ 交通手段（無冠詞）：by bus / by train / by car / by bike
例）I go to school by bike.（自転車で学校に行く）
⚠ 注意：歩く場合は on foot（前置詞byは使わない）。
・with ＋ 道具：write with a pen（ペンで書く）
・by ＋ 動名詞：「〜することによって」
例）You can improve your English by reading a lot.（たくさん読むことで英語が上達する）

■ 前置詞＋関係の意味（〜について・〜のために）
・about（〜について）：talk about the weather
・for（〜のために）：This is a present for you.
・with（〜と一緒に、〜を持って）：I went there with my mother.
・without（〜なしで）：He can't live without his phone.`,
      },
      {
        heading: '4. 前置詞とセットで覚える重要熟語',
        body: `動詞・形容詞と特定の前置詞が結びついた「セット表現」は、丸ごと覚えることが最も効率的。入試で穴埋め問題として頻出する。

■ be動詞＋形容詞＋前置詞
・be famous for 〜：〜で有名だ（Kyoto is famous for its temples.）
・be afraid of 〜：〜を恐れる（She is afraid of dogs.）
・be interested in 〜：〜に興味がある（I'm interested in science.）
・be good at 〜：〜が得意だ（He is good at soccer.）
・be different from 〜：〜と異なる（This is different from that.）
・be full of 〜：〜でいっぱいだ（The box is full of toys.）
・be proud of 〜：〜を誇りに思う（She is proud of her son.）
・be tired of 〜：〜に飽きる（I'm tired of waiting.）
・be surprised at 〜：〜に驚く（He was surprised at the news.）
・be similar to 〜：〜に似ている（This bag is similar to mine.）

■ 動詞＋前置詞のセット
・depend on 〜：〜次第だ・〜に頼る（It depends on the weather.）
・listen to 〜：〜を聞く（Listen to me carefully.）
・look for 〜：〜を探す（I'm looking for my key.）
・wait for 〜：〜を待つ（We waited for the bus.）
・arrive at（狭い場所）／ arrive in（広い場所）：arrive at the station / arrive in Japan
・laugh at 〜：〜を笑う（Don't laugh at him.）
・agree with 〜（人の意見に）：I agree with you.
・belong to 〜：〜に所属する（This bike belongs to me.）
・take care of 〜：〜の世話をする（She takes care of the baby.）
・consist of 〜：〜から成る（The team consists of ten players.）

■ 名詞＋前置詞のセット
・a member of 〜：〜の一員（a member of the club）
・the number of 〜：〜の数（the number of students）
・a cause of 〜：〜の原因

⚠ 入試の罠：似た意味でも前置詞が違う組み合わせが頻出。
・talk to（一方的に話す）／ talk with（対話する）
・different from（〜と違う）※ ×different than（アメリカ英語ではthanも使われるが正式にはfrom）
・good at（得意）／ good for（〜に良い、体に良い）：Vegetables are good for you.`,
      },
      {
        heading: '5. 入試例題（前置詞）',
        body: `以下の問題で前置詞の使い分けを確認しよう。

【問題1】（　）に適切な前置詞を入れなさい。
Please finish your report (   ) next Monday.

【解答】by
【解説】「終える」という完了の動作なので、期限を表す by を使う。until を使うと「月曜日までずっと終える状態が続く」という不自然な意味になってしまう。

【問題2】（　）内から適切な語を選びなさい。
My birthday is (   ) May 5th.
a) at  b) on  c) in  d) for

【解答】b) on
【解説】特定の日付には on を使う。at は時刻、in は月・季節・年に使う。

【問題3】次の文の（　）に適切な前置詞を入れなさい。
Kyoto is famous (   ) its beautiful temples.

【解答】for
【解説】be famous for 〜「〜で有名だ」はセットで覚える重要熟語。

【問題4】（　）内から適切な語を選びなさい。
The cat is popular (   ) students in our school. (between / among)

【解答】among
【解説】studentsのように3人以上の集団の中でのことを言うときは among を使う。2者の間なら between。

★ 入試対策ポイント：
■ 場所：狭い点は at、面は on、空間の中は in
■ 時：狭い時刻は at、曜日・日付は on、月・季節・年は in
■ 期限の by（〜までに完了）と継続の until（〜までずっと）を混同しない
■ be famous for / be afraid of / depend on など熟語は前置詞ごとセットで暗記する`,
      },
      {
        heading: '★ MAXレベル：紛らわしい前置詞の精密使い分けと群前置詞',
        body: `■ beside と besides の違い（スペルが似ていて要注意）
・beside（前置詞）：〜のそばに（位置）
例）She sat beside me.（彼女は私のそばに座った）
・besides（前置詞・副詞）：〜に加えて（追加）
例）Besides English, she can speak French.（英語に加えてフランス語も話せる）

■ during と for の応用比較、by と until の総復習
・during は「特定の期間の中のある時点・全体」、for は「継続時間の長さ」を強調する。
例）It rained during the night.（夜の間に雨が降った＝夜のどこかで）
例）It rained for five hours.（5時間雨が降った＝継続時間）
・by と until を同じ文で比べる
例）I will be here until six.（6時までここにいる＝ずっといる、継続）
例）I will finish it by six.（6時までに終える＝6時までのどこかで完了）

■ 群前置詞（2語以上で1つの前置詞のはたらきをする表現）
・because of ＋ 名詞：〜が原因で
例）The game was cancelled because of the rain.（雨のため試合は中止になった）
・in spite of ＋ 名詞：〜にもかかわらず
例）In spite of the rain, they played soccer.（雨にもかかわらずサッカーをした）
・thanks to ＋ 名詞：〜のおかげで
例）Thanks to your help, I finished it easily.（あなたの助けのおかげで簡単に終えられた）
・according to ＋ 名詞：〜によれば
例）According to the weather report, it will snow tomorrow.（天気予報によると明日は雪だ）
・instead of ＋ 名詞／動名詞：〜の代わりに
例）She had salad instead of rice.（ご飯の代わりにサラダを食べた）
・in front of（〜の前に）／ on top of（〜の上に）／ next to（〜の隣に）

⚠ 入試の罠：because（接続詞、あとに主語＋動詞）と because of（前置詞、あとに名詞）を混同しない。
例）Because it rained, the game was cancelled.（接続詞＋文）
例）Because of the rain, the game was cancelled.（前置詞＋名詞）
同様に、although（接続詞）と in spite of / despite（前置詞）も同じ関係。

■ 前置詞＋関係代名詞（上級構文）
前置詞は関係代名詞の前に移動することがある（ややフォーマルな言い方）。
例）the house that I live in ＝ the house in which I live（私が住んでいる家）
★ 中学レベルでは「後置」の形（住んでいる家＝the house I live in）が基本だが、難関校では「前置」の形も出題される。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_13_hikaku',
    subject: 'eigo',
    title: '比較級・最上級で程度を表す',
    description: '「もっと〜」「いちばん〜」を正確に作る！比較表現の総まとめ',
    keyPoints: [
      `比較級は形容詞・副詞に-erをつける（tall→taller）か、前にmoreを置く（beautiful→more beautiful）`,
      `最上級は-estをつける（tall→tallest）かmostを置く（beautiful→most beautiful）。原則theをつける`,
      `1音節の語は-er/-est、3音節以上はmore/most。2音節語は語によって異なる（-yで終わる語は-ier/-iest）`,
      `不規則変化：good/well→better→best、bad→worse→worst、many/much→more→most、little→less→least`,
      `A is 比較級 than B「AはBより〜」。A is the 最上級 of/in 〜「Aは〜の中でいちばん〜」`,
      `原級の比較：as ＋ 原級 ＋ as「〜と同じくらい」、not as 〜 as「〜ほど〜ではない」`,
      `比較級を強める語：much/far/a lot（ずっと）。最上級を強める語：by far（断然）`,
    ],
    order: 13,
    examType: 'chugaku',
    studyPeriod: '小5前半',
    sections: [
      {
        heading: '1. 比較級・最上級の作り方',
        body: `「AはBより〜だ」「Aがいちばん〜だ」という比較の表現は、形容詞・副詞の形を変えて作る。まずは基本の作り方のルールを整理しよう。

■ 語尾に-er / -estをつけるパターン（原則：1音節の短い語）
・そのまま-er / -est：tall → taller → tallest（背が高い）
　small → smaller → smallest／ long → longer → longest
・eで終わる語は-r / -stのみ：large → larger → largest／ nice → nicer → nicest
・「短母音＋子音字」で終わる語は子音字を重ねる：big → bigger → biggest／ hot → hotter → hottest
・「子音字＋y」で終わる語はyをiに変える：easy → easier → easiest／ happy → happier → happiest

■ more / mostをつけるパターン（原則：2音節以上の長い語）
beautiful → more beautiful → most beautiful（美しい）
famous → more famous → most famous（有名な）
difficult → more difficult → most difficult（難しい）
important → more important → most important（重要な）
carefully → more carefully → most carefully（副詞：注意深く）

■ 音節数で迷ったときの目安
・1音節（母音のかたまりが1つ）：tall, big, long, fast → -er/-est
・3音節以上：beautiful, important, interesting → more/most
・2音節：語によって異なる。-y/-er/-ow/-leで終わる語は-er/-estが多い（happy→happier、clever→cleverer）。それ以外はmore/mostが多い（modern→more modern）
★ 迷ったら辞書で確認する習慣をつけよう。中学レベルでは代表的な語の形を覚えてしまうのが確実。

■ 不規則変化（丸暗記が必要な重要語）
good / well（良い・上手に）→ better → best
bad（悪い）→ worse → worst
many / much（多い）→ more → most
little（少ない）→ less → least
far（遠い）→ farther/further → farthest/furthest
★ ポイント：good と well はどちらも比較級・最上級が better/best になる。`,
      },
      {
        heading: '2. 比較級の文（A is 比較級 than B）',
        body: `2つのものを比べて「AはBより〜だ」と言うときの文の形を確認しよう。

■ 比較級の基本文
A ＋ be動詞 ＋ 比較級 ＋ than ＋ B
例）Tom is taller than Ken.（トムはケンより背が高い）
例）This book is more interesting than that one.（この本はあの本より面白い）
例）I get up earlier than my brother.（私は弟より早く起きる）※副詞の比較

■ 比較級を強調する語（「ずっと〜」）
much / far / a lot ＋ 比較級：とても・ずっと〜
例）This bag is much heavier than that one.（このかばんはあのかばんよりずっと重い）
例）She runs a lot faster than me.（彼女は私よりずっと速く走る）
⚠ 注意：veryは比較級を修飾しない。× very taller（×）→ ○ much taller（○）

■ 「少し〜」を表す語
a little ＋ 比較級：少し〜
例）This one is a little cheaper than that one.（これはあれより少し安い）

■ どんどん〜になる（比較級 and 比較級）
「比較級 and 比較級」で「ますます〜」という意味を表す。
例）It's getting colder and colder.（ますます寒くなっている）
例）More and more people use smartphones.（ますます多くの人がスマートフォンを使う）
⚠ 注意：more/mostを使う語はmore and moreの形にする（× interestinger and interestinger）

■ the ＋ 比較級, the ＋ 比較級（〜すればするほど…）
例）The more you practice, the better you play.（練習すればするほど上手になる）
例）The harder he studied, the higher his score became.（一生懸命勉強すればするほど点数が上がった）

■ 疑問文でたずねる比較
Which is 比較級, A or B?（AとBではどちらが〜ですか）
例）Which is bigger, Japan or the U.K.?（日本とイギリスではどちらが大きいですか）— Japan is bigger.`,
      },
      {
        heading: '3. 最上級の文（A is the 最上級 of/in 〜）',
        body: `3つ以上のものを比べて「Aがいちばん〜だ」と言うときの表現。

■ 最上級の基本文
A ＋ be動詞 ＋ the ＋ 最上級 ＋ of/in 〜
例）Tom is the tallest in his class.（トムはクラスでいちばん背が高い）
例）This is the most interesting book of all.（これは全部の中でいちばん面白い本だ）
★ ポイント：最上級には原則 the をつける（副詞の最上級ではtheを省略することもある）。

■ of と in の使い分け
・of ＋ 複数を表す語（数・all）：of the three（3つの中で）、of all students（全生徒の中で）
　例）This is the biggest of the three cakes.（3つのケーキの中でいちばん大きい）
・in ＋ 場所・集団を表す単数の語（class/school/family/Japan）：in my class、in Japan
　例）She is the youngest in her family.（彼女は家族の中でいちばん年下だ）
⚠ 注意：of と in を混同しやすい。「複数のグループ（3人/all）」→ of、「1つの場所・組織」→ in と覚える。

■ 最上級を強調する表現
by far ＋ the 最上級：断然いちばん〜
例）She is by far the best singer in our school.（彼女は学校で断然いちばん上手な歌手だ）
one of the 最上級 ＋ 複数名詞：最も〜な〜のひとつ
例）Mt. Fuji is one of the most famous mountains in Japan.（富士山は日本で最も有名な山のひとつだ）
⚠ 注意：one of のあとの名詞は必ず複数形にする。× one of the most famous mountain（×）

■ 副詞の最上級（the を省略することがある）
例）He runs fastest in his class.（彼はクラスでいちばん速く走る）※ the を省略してもよい
例）Who studies hardest in this class?（このクラスでだれがいちばん熱心に勉強しますか）

■ 疑問詞 What/Who ＋ 最上級
What is the longest river in the world?（世界でいちばん長い川は何ですか）— It's the Nile.
Who is the most popular singer in Japan?（日本でいちばん人気の歌手はだれですか）`,
      },
      {
        heading: '4. 原級の比較（as 〜 as）',
        body: `「同じくらい〜」「〜ほど〜ではない」という、比較級・最上級を使わない比較の形も重要。

■ as ＋ 原級 ＋ as ...（…と同じくらい〜だ）
形容詞・副詞は元の形（原級）のまま使う。
例）Tom is as tall as Ken.（トムはケンと同じくらいの背の高さだ）
例）She can run as fast as her brother.（彼女は兄と同じくらい速く走れる）
⚠ 注意：as と as の間には比較級ではなく原級（元の形）を入れる。× as taller as（×）

■ not as 〜 as ...（…ほど〜ではない）
例）This book is not as difficult as that one.（この本はあの本ほど難しくない）
= That one is more difficult than this book.（あの本のほうがこの本より難しい）
例）I don't run as fast as my sister.（私は姉ほど速く走れない）
★ ポイント：not as A as B ＝ B is 比較級 than A（言いかえが可能）。not so 〜 as という形もある（意味は同じ）。

■ 倍数表現との組み合わせ（発展）
・twice as 〜 as：…の2倍〜だ
例）This bag is twice as heavy as that one.（このかばんはあのかばんの2倍重い）
・three times as 〜 as：…の3倍〜だ
例）This building is three times as tall as that one.（この建物はあの建物の3倍の高さだ）

■ as 〜 as possible（できるだけ〜）／ as 〜 as 主語 can（〜できるだけ）
例）Please come as soon as possible.（できるだけ早く来てください）
= Please come as soon as you can.
★ このパターンは英作文でも頻出。丸ごと覚えておこう。

■ 比較の言いかえ（同じ意味を複数の形で表す・入試頻出）
①Tom is taller than Ken.
②Ken is shorter than Tom.
③Tom is not as short as Ken. ／ Ken is not as tall as Tom.
★ 1つの事実を「比較級」と「not as 〜 as」の両方で表現できることを理解しておくと、書きかえ問題に強くなる。`,
      },
      {
        heading: '5. 入試例題（比較級・最上級）',
        body: `以下の問題で比較表現の理解を確認しよう。

【問題1】（　）内の語を適切な形に変えなさい。
This question is (difficult) than that one.

【解答】more difficult
【解説】difficultは3音節以上の語なのでmoreをつける。× difficulter とはしない。

【問題2】次の文を最上級の文に書きかえなさい。
Ken is taller than any other student in his class.

【解答】Ken is the tallest student in his class.
【解説】「他のどの〜より背が高い」＝「いちばん背が高い」という書きかえパターン。any other のあとの名詞は単数形になる点にも注意。

【問題3】（　）に適切な語を入れなさい。
This movie is not as (   ) as that one.（この映画はあの映画ほど面白くない）

【解答】interesting
【解説】as と as の間には形容詞の原級（元の形）を入れる。比較級（more interesting）にはしない。

【問題4】（　）内から適切な語を選びなさい。
This is one of the (biggest / bigger) cities (of / in) Japan.

【解答】biggest / in
【解説】「one of the 最上級 ＋ 複数名詞」の形。cities は複数形。Japanのような1つの場所・国には in を使う。

★ 入試対策ポイント：
■ 1音節→-er/-est、3音節以上→more/most、2音節は語によって異なる
■ of ＋ 複数（3つ以上・all）、in ＋ 単数の場所・集団
■ as 〜 as の間は原級（元の形）を使う
■ not as A as B ＝ B is 比較級 than A（書きかえ頻出）`,
      },
      {
        heading: '★ MAXレベル：比較の応用表現と紛らわしい語',
        body: `■ 「他のどの〜よりも〜」構文（最上級の言いかえ・入試頻出）
比較級を使って最上級と同じ意味を表す構文は、書きかえ問題の定番。
①最上級：Tom is the tallest boy in his class.
②比較級＋any other：Tom is taller than any other boy in his class.（クラスの他のどの少年よりも背が高い）
③比較級＋all the other：Tom is taller than all the other boys in his class.（他のすべての少年たちよりも背が高い）
⚠ 注意：②の any other のあとの名詞は単数形（boy）、③の all the other のあとは複数形（boys）。

■ elder / eldest と older / oldest
・elder / eldest：主に家族間の「年上・年長」を表すフォーマルな語（限定用法のみ、比較のasやthanは使わない）
例）my elder brother（私の兄）／ the eldest son（長男）
・older / oldest：一般的な「年上・古い」を表す（家族にも物にも使える）
例）He is older than me.（彼は私より年上だ）
★ 入試では基本的にolder/oldestを使えば問題ない。elder/eldestは限定的な使い方として知っておく程度でよい。

■ farther と further の使い分け
・farther：物理的な距離が「もっと遠い」
例）My house is farther from the station than yours.（私の家は駅からあなたの家より遠い）
・further：程度・話の内容が「さらなる」（距離以外）
例）I need further information.（さらなる情報が必要だ）
⚠ 入試では距離ならfarther、それ以外（詳しさ・程度）ならfurtherと覚えておくと安全。

■ later / latter、last / latest の紛らわしいペア
・later（あとで、時間的にあと）／ latter（後者の）
　例）I'll call you later.（あとで電話するね）／ the latter half（後半）
・last（最後の・この前の）／ latest（最新の）
　例）the last train（最終電車）／ the latest news（最新のニュース）

■ 比較を使った婉曲表現（大人っぽい丁寧な言い方・上級）
・I'd rather ＋ 動詞の原形：どちらかと言えば〜したい
例）I'd rather stay home today.（今日はどちらかと言えば家にいたい）
・prefer A to B：BよりAのほうを好む
例）I prefer tea to coffee.（コーヒーより紅茶のほうが好きだ）
★ prefer A to B の to は前置詞なので、あとに動詞がくるときは動名詞（-ing）にする。
例）I prefer reading to watching TV.（テレビを見るより読書が好きだ）`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_14_there_is_are',
    subject: 'eigo',
    title: 'There is/are構文と存在・所在表現',
    description: '「〜がある・いる」を正確に表現する頻出構文を完全マスター',
    keyPoints: [
      `There is ＋ 単数名詞／There are ＋ 複数名詞「〜がある・いる」。主語は名詞、thereは意味を持たない`,
      `否定文 There isn't/aren't 〜、疑問文 Is/Are there 〜? — Yes, there is/are. No, there isn't/aren't.`,
      `過去形 There was/were 〜。未来 There will be 〜`,
      `There is/are のあとの名詞は「初めて話題に出す不特定のもの」。特定のもの（the/my/his等）には使わない`,
      `How many 〜 are there in ...?で数をたずねる。答えはThere is/are ＋ 数`,
      `There is/are ＋ 名詞 ＋ 場所を表す語句（in/on/near等）が基本の並び`,
      `似た意味のhave構文との違い：所有はhave、単なる存在はthere is/are`,
    ],
    order: 14,
    examType: 'chugaku',
    studyPeriod: '小4',
    sections: [
      {
        heading: '1. There is/are の基本の形',
        body: `「〜がある」「〜がいる」と、あるものの存在を伝えるときに使う特別な構文がThere is/are構文。日本語につられて主語をまちがえやすいので、形をしっかり覚えよう。

■ There is/are の基本形
There is ＋ 単数名詞 ＋ 場所（〜に…がある／いる）
There are ＋ 複数名詞 ＋ 場所（〜に…がある／いる）
例）There is a cat on the sofa.（ソファの上に猫が1匹いる）
例）There are three books on the desk.（机の上に本が3冊ある）
★ 最重要ポイント：thereは「そこに」という意味を持たない、形だけの主語（形式主語）。本当の主語は is/are のあとの名詞。だからis/areはあとの名詞の単数・複数に合わせる。

■ なぜThereなのに意味の「そこ」ではないのか
There is/are構文の there は「導入のthere」と呼ばれ、日本語には訳さない。実際の場所は文の最後（in the box, on the desk など）に置かれる。
例）There is a park near my house.（私の家の近くに公園がある）
→ There自体は訳さず、near my house（私の家の近くに）が本当の場所情報。

■ 単数・複数の判断（is か are か）
名詞が2つ以上並ぶときは、いちばん近い名詞に合わせるのが基本ルール。
例）There is a pen and two notebooks on the desk.（近いpenが単数なのでis）
例）There are two notebooks and a pen on the desk.（近いnotebooksが複数なのでare）
★ ただし文法的には最初の名詞に合わせるという考え方もあるため、入試では「is/are どちらでも自然な例文」を使うことが多い。

■ There is/are のあとに来る名詞の種類
・不可算名詞にも使える（単数扱い）
例）There is some water in the bottle.（ボトルの中に水がある）
・someやa lot ofなど数量表現とも組み合わせられる
例）There are a lot of students in the gym.（体育館にたくさんの生徒がいる）`,
      },
      {
        heading: '2. There is/are の否定文・疑問文',
        body: `There is/are構文もbe動詞の文なので、否定文・疑問文の作り方はbe動詞と同じルールに従う。

■ 否定文：is/areのあとにnotを置く
There is not（isn't）＋ 単数名詞 〜
There are not（aren't）＋ 複数名詞 〜
例）There isn't a bank near here.（この近くに銀行はない）
例）There aren't any students in the classroom.（教室にはひとりも生徒がいない）
★ ポイント：否定文の中では、someではなくanyを使う（There aren't any 〜）。

■ 疑問文：is/areを文の最初に出す
Is there ＋ 単数名詞 〜?
Are there ＋ 複数名詞 〜?
例）Is there a hospital near your house?（あなたの家の近くに病院はありますか）
— Yes, there is. ／ No, there isn't.
例）Are there any parks in this town?（この町に公園はありますか）
— Yes, there are. ／ No, there aren't.
★ ポイント：答えるときも there を使う（Yes, it is. ではなく Yes, there is.）。

■ 疑問文の中のsome→any
肯定文ではsomeを使う場面でも、疑問文・否定文ではanyに変わる。
例）There are some apples in the fridge.（肯定：冷蔵庫にリンゴがいくつかある）
→ Are there any apples in the fridge?（疑問：冷蔵庫にリンゴはありますか）
→ There aren't any apples in the fridge.（否定：冷蔵庫にリンゴはひとつもない）

■ There is/areが使えない場合（特定のものには使わない）
There is/are構文は「初めて話題に出す、不特定のもの」に使う。すでに話題に出た特定のもの（the〜、my〜など）には使わない。
× There is my bag on the chair.（×）
○ My bag is on the chair.（○ 特定のものは主語にして be動詞で表す）
⚠ 注意：この使い分けは英作文・並び替え問題で頻出。「a/an/someがつくもの→There is/are」「the/my/hisなど特定→ふつうのbe動詞文」と覚える。`,
      },
      {
        heading: '3. There was/were（過去形）と数をたずねる表現',
        body: `There is/are構文は過去形・未来形にもすることができる。時制を変えるときはbe動詞の部分だけを変化させる。

■ There was/wereの形（過去）
There was ＋ 単数名詞 〜（〜があった／いた）
There were ＋ 複数名詞 〜（〜があった／いた）
例）There was a big tree in front of my house.（私の家の前に大きな木があった）
例）There were many people at the festival.（お祭りにはたくさんの人がいた）

■ There was/wereの否定文・疑問文
There wasn't/weren't 〜（〜はなかった）
Was/Were there 〜?（〜はありましたか）— Yes, there was/were. ／ No, there wasn't/weren't.
例）Was there a library in your town before?（あなたの町に前は図書館がありましたか）

■ There will be（未来）
形：There will be ＋ 名詞 〜（〜があるだろう）
例）There will be a big event next month.（来月大きなイベントがあるだろう）
疑問文：Will there be 〜? — Yes, there will. ／ No, there won't.

■ How many 〜 are there in ...?（数をたずねる重要構文）
「〜はいくつありますか／何人いますか」とたずねるときの決まった形。
形：How many ＋ 複数名詞 ＋ are there ＋ 場所 ?
例）How many students are there in your class?（あなたのクラスに生徒は何人いますか）
— There are thirty (students) (in my class).
例）How many books are there on the shelf?（棚に本は何冊ありますか）
— There are twenty.
★ ポイント：How manyのあとの名詞は複数形。文末はareがthereの前に来る疑問文の語順（are there）。

■ 過去の数をたずねる場合
How many people were there at the party?（パーティーには何人いましたか）
— There were about fifty people.
★ 時制（is/are/was/were）を問いと答えでそろえることを忘れずに。`,
      },
      {
        heading: '4. There is/are構文とhave構文の使い分け',
        body: `「〜がある」という日本語は、英語では「There is/are」と「have」の2通りで表現できる場合がある。意味の違いを正しく理解しよう。

■ There is/are：単なる存在（〜が存在する）
場所を主語にしない、客観的な存在を伝える表現。
例）There is a park near my house.（私の家の近くに公園がある）
例）There are four seasons in Japan.（日本には四季がある）

■ have：所有・所属（〜を持っている）
主語（人やもの）が「持っている」という関係を表す。
例）I have a bike.（私は自転車を持っている）
例）This house has three bedrooms.（この家には3つの寝室がある）
★ ポイント：have構文では「持ち主」が主語になる。There is/are構文では場所が文末に来て、存在するものが主語（is/areのあと）になる。

■ 同じ内容を2通りで言いかえる練習（入試頻出）
①There are three rooms in this house.（この家には3つの部屋がある）
②This house has three rooms.（この家は3つの部屋を持っている）
→ ①は「部屋の存在」に焦点、②は「家という主語」に焦点を当てた言い方。どちらも同じ状況を表せる。

■ There is/are ＋ 人（存在を表す場合）
人の存在を表すときにもThere is/areは使える。ただし特定の人（Tom等の固有名詞）には使わない。
例）There is a woman at the door.（ドアのところに女の人がいる）
× There is Tom in the room.（×固有名詞には使わない）
○ Tom is in the room.（○）

■ There is/are ＋ something/nothing/anything（不定代名詞との組み合わせ）
例）There is something wrong with this computer.（このパソコンはどこかおかしい）
例）There is nothing in the box.（箱の中には何もない）
★ something/nothingを修飾する形容詞は後ろに置く（something wrong、nothing specialの語順）点に注意。`,
      },
      {
        heading: '5. 入試例題（There is/are構文）',
        body: `以下の問題でThere is/are構文の理解を確認しよう。

【問題1】（　）内から適切な語を選びなさい。
There (   ) a lot of books on the shelf.
a) is  b) are

【解答】b) are
【解説】主語（books）が複数なのでareを使う。There is/areのあとの名詞の数に合わせるのが原則。

【問題2】次の文を否定文にしなさい。
There are some students in the library.

【解答】There aren't any students in the library.
【解説】否定文ではsomeがanyに変わる。areにnotをつけてaren'tにする。

【問題3】次の文を疑問文にして、Yesで答えなさい。
There is a post office near the station.

【解答】Is there a post office near the station? — Yes, there is.
【解説】isを文頭に出す。答えにも there is を使う。

【問題4】次の日本語を英語にしなさい。
「あなたのクラスには何人の生徒がいますか。」

【解答例】How many students are there in your class?
【解説】How many ＋ 複数名詞 ＋ are there ＋ 場所、の決まった語順。studentsを忘れずに複数形にする。

【問題5】まちがいを直しなさい。
There is my pen on the table.

【解答】My pen is on the table.
【解説】「my（特定のもの）」にはThere is/are構文を使わない。特定のものは主語にしてふつうのbe動詞文にする。

★ 入試対策ポイント：
■ There is/areのあとの名詞の数（単数/複数）でis/areを決める
■ 疑問文・否定文ではsome→anyに変わる
■ How many 〜 are there in...?で数をたずねる
■ 特定のもの（the/my/his等）にはThere is/areを使わない`,
      },
      {
        heading: '★ MAXレベル：There構文の応用表現',
        body: `■ There seems/appears to be 〜（〜があるようだ）
There is/are構文にseem/appearを組み合わせた発展形。「〜があるようだ・見えるようだ」という推量を表す。
例）There seems to be a mistake in this sentence.（この文には間違いがあるようだ）
例）There appeared to be no one in the house.（その家には誰もいないようだった）
★ ポイント：There is/are の is/are の部分が「seems/appears to be」に置きかわる形。

■ There used to be 〜（以前は〜があった、今はない）
過去にあったが今はない、という対比を表す重要表現。
例）There used to be a big tree here.（ここには昔大きな木があった＝今はない）
例）There used to be a small shop on this corner.（この角には昔小さな店があった）
⚠ 注意：There was 〜（単に過去にあった）と There used to be 〜（今はないという対比の含み）のニュアンスの違いに注意。

■ There is no 〜ing（〜することはできない）※慣用表現
「There is no ＋ 動名詞」で「〜することは不可能だ」という意味になる、やや発展的な表現。
例）There is no telling what will happen.（何が起こるかわからない）
例）There is no denying that he is smart.（彼が賢いことは否定できない）

■ Here is/are 〜（ここに〜がある）との比較
There is/are と似た形でHere is/areがある。「ここに〜がある」と相手に何かを差し出す・紹介するときに使う。
例）Here is your ticket.（はい、あなたのチケットです）
例）Here are the results of the test.（これがテストの結果です）
★ ポイント：Here is/are のあとの名詞は「特定のもの」でもよい（Thereとの違い）。相手に手渡す・示すニュアンスが強い。

■ 存在文の倒置（副詞句が前に出る発展形）
場所を表す副詞句を文頭に出し、動詞と主語を倒置させる文もある（There is/are構文と似た効果）。
例）On the hill stands an old castle.（丘の上に古いお城が立っている）
= There is an old castle on the hill.
★ この倒置は説明文・物語文でよく使われる、やや文学的な表現。読解で出会うことがある。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_15_shinkoukei',
    subject: 'eigo',
    title: '現在進行形・過去進行形の総合演習',
    description: '「〜している最中」を表す進行形を、時制・作文・会話すべての角度から固める',
    keyPoints: [
      `現在進行形：am/is/are ＋ -ing「今〜しているところだ」。過去進行形：was/were ＋ -ing「〜していたところだった」`,
      `-ingの作り方：そのまま＋ing、eをとって＋ing（make→making）、短母音+子音字は重ねて＋ing（run→running）`,
      `状態動詞（like/know/have=持つ/want/love等）は原則進行形にしない`,
      `否定文はbe動詞＋not＋-ing、疑問文はbe動詞を主語の前に出す`,
      `whenは「〜したとき（一点）」、whileは「〜している間（継続）」。過去進行形とセットでよく使われる`,
      `現在進行形は近い未来の予定を表すこともある（I'm leaving tomorrow.）`,
      `just/right nowは現在進行形、at that timeやwhen〜は過去進行形のサインワード`,
    ],
    order: 15,
    examType: 'chugaku',
    studyPeriod: '小4',
    sections: [
      {
        heading: '1. 現在進行形の形と意味',
        body: `現在進行形は「今まさに〜しているところだ」という、一時的に進行中の動作を表す形。ふつうの現在形（習慣）との違いをはっきり区別しよう。

■ 現在進行形の基本形
主語 ＋ am/is/are ＋ 動詞の-ing形 ＋ 〜
例）I am studying English now.（私は今英語を勉強しているところだ）
例）She is cooking dinner.（彼女は夕食を作っているところだ）
例）They are playing soccer in the park.（彼らは公園でサッカーをしているところだ）

■ 現在形（習慣）と現在進行形（一時的な動作）の違い
・現在形：いつもすること・習慣・事実
例）I play tennis every Sunday.（毎週日曜にテニスをする＝習慣）
・現在進行形：今ちょうどしていること
例）I am playing tennis now.（今ちょうどテニスをしている＝一時的）
⚠ 注意：現在形と現在進行形はよく一緒に出題され、「usually/every day→現在形」「now/right now→現在進行形」という目印を見分ける問題が多い。

■ -ing形の作り方（つづりの変化ルール）
①ふつうはそのまま-ingをつける：play→playing／study→studying／read→reading
②eで終わる語はeをとって-ing：make→making／write→writing／come→coming
③「短母音＋子音字」で終わる語は子音字を重ねて-ing：run→running／swim→swimming／sit→sitting／stop→stopping
④ieで終わる語はieをyに変えて-ing：die→dying／lie→lying／tie→tying
★ ポイント：②と③を混同しやすい。make(eで終わる)→making、run(短い母音+子音字1つ)→running、と語の形をよく見て判断する。

■ 現在進行形の疑問文・否定文
・疑問文：Am/Is/Are ＋ 主語 ＋ -ing 〜?
例）Is she watching TV?（彼女はテレビを見ているところですか）— Yes, she is. ／ No, she isn't.
・否定文：主語 ＋ am/is/are ＋ not ＋ -ing 〜
例）I am not sleeping.（私は寝ていない）
例）They are not studying now.（彼らは今勉強していない）`,
      },
      {
        heading: '2. 進行形にしない動詞（状態動詞）',
        body: `一般動詞には「動作」を表すものと「状態・気持ち」を表すものがあり、後者（状態動詞）は原則として進行形にしない。入試で頻出のひっかけポイント。

■ 状態動詞の代表例（進行形にしない）
・気持ちを表す動詞：like（好き）／ love（大好き）／ want（欲しい）／ hope（望む）／ hate（嫌い）
・知覚・認識を表す動詞：know（知っている）／ understand（理解している）／ believe（信じている）／ remember（覚えている）
・所有を表す動詞：have（持っている）／ own（所有している）／ belong to（〜に属する）
・見た目・感覚を表す動詞：look（〜に見える）／ sound（〜に聞こえる）／ seem（〜のようだ）

× I am liking this song.（×）
○ I like this song.（○ 「好き」という状態は進行形にしない）
× She is knowing the answer.（×）
○ She knows the answer.（○）

■ 動作動詞と状態動詞、両方の意味を持つ動詞（発展）
一部の動詞は「動作」の意味では進行形にできる。
・have：「持っている」（状態、進行形不可）／「食べる・過ごす」（動作、進行形可）
例）I have a car.（車を持っている＝状態）
例）I am having lunch now.（今昼食を食べているところだ＝動作）
・think：「〜と思う」（状態、進行形不可）／「考え中だ」（動作、進行形可）
例）I think it's true.（それは本当だと思う＝意見・状態）
例）I am thinking about my future.（将来について考えているところだ＝思考の動作）
・see：「見える」（状態、進行形不可）／「（人に）会う」（動作、進行形可）
例）I see a bird.（鳥が見える＝視覚）
例）I am seeing my dentist this afternoon.（今日の午後、歯医者に会う予定だ）

■ なぜ状態動詞は進行形にしないのか
進行形は「途中で始まって途中で終わる、一時的な動作」を表す形。like/know/haveのような「継続的な心の状態・持続する関係」には「途中」という概念がなじまないため、進行形にしない。

⚠ 入試の罠：知らない単語が動詞として出てきたとき、進行形の空所で「状態動詞かどうか」を判断させる問題がよく出る。like/want/know/haveは特に頻出。`,
      },
      {
        heading: '3. 過去進行形（was/were + -ing）',
        body: `過去進行形は「（過去のある時点で）〜していたところだった」という意味を表す。単なる過去形（〜した）との違いを意識しよう。

■ 過去進行形の基本形
主語 ＋ was/were ＋ -ing ＋ 〜
例）I was watching TV then.（そのとき私はテレビを見ていた）
例）They were playing soccer at that time.（そのとき彼らはサッカーをしていた）
★ am/is → was、are → were と、be動詞を過去形に変えるだけでよい。

■ 過去形と過去進行形の違い
・過去形：完結した動作（〜した）
例）I watched TV yesterday.（昨日テレビを見た＝見終わった）
・過去進行形：ある時点で進行中だった動作（〜していた）
例）I was watching TV when he came.（彼が来たとき、私はテレビを見ていた＝まだ途中だった）

■ whenとwhileを使った過去進行形の重要構文（入試最頻出）
「〜していたとき、…した」という「進行中の動作」と「その途中に起きた一瞬の出来事」を組み合わせる構文。
形：主語A＋was/were＋-ing＋when＋主語B＋過去形（一般動詞の過去形）
例）I was sleeping when the phone rang.（電話が鳴ったとき、私は眠っていた）
例）She was cooking when I came home.（私が帰宅したとき、彼女は料理をしていた）
★ ポイント：when以降（一瞬の出来事）は過去形、主節（進行中だった長い動作）は過去進行形にする。

■ whileを使った過去進行形どうしの組み合わせ
whileは「〜している間」という継続を表すので、両方の節が過去進行形になることが多い。
例）While I was studying, my brother was playing video games.（私が勉強している間、弟はテレビゲームをしていた）

■ 過去進行形の疑問文・否定文
・疑問文：Was/Were ＋ 主語 ＋ -ing 〜?
例）Were you sleeping at ten last night?（昨夜10時、あなたは寝ていましたか）
・否定文：主語 ＋ was/were ＋ not ＋ -ing
例）I was not（wasn't）studying then.（そのとき私は勉強していなかった）`,
      },
      {
        heading: '4. 進行形の応用（近い未来・時を表す語句）',
        body: `進行形は「今している最中」だけでなく、いくつかの応用的な使い方がある。ここを押さえると表現の幅が広がる。

■ 現在進行形で近い未来の予定を表す（重要な応用）
「be going to」と同じように、すでに決まっている近い未来の予定を現在進行形で表すことがある。
例）I am leaving for Tokyo tomorrow.（私は明日東京に出発する予定だ）
例）She is coming to the party tonight.（彼女は今夜パーティーに来る予定だ）
★ ポイント：go/come/leave/arriveなど「移動」を表す動詞でよく使われる。tomorrow/tonight/next weekなど未来を表す語と一緒に使われることが多い。

■ 現在進行形とセットで使われる時を表す語
now（今）／ right now（ちょうど今）／ at the moment（今のところ）／ at present（現在）
例）What are you doing right now?（あなたは今ちょうど何をしていますか）

■ 過去進行形とセットで使われる時を表す語
then（そのとき）／ at that time（そのとき）／ at ＋ 時刻（〜時に）／ when 〜（〜したとき）
例）What were you doing at seven yesterday?（昨日の7時、あなたは何をしていましたか）
— I was having dinner.（夕食を食べていた）

■ 常に〜しているという不満・非難を表す進行形（発展）
alwaysなど頻度を表す語と現在進行形を組み合わせると、「いつも〜してばかりいる」という不満・驚きのニュアンスを表せる。
例）He is always losing his umbrella.（彼はいつも傘をなくしてばかりいる）
★ ポイント：ふつうのalways＋現在形（習慣・客観的事実）とは違い、alwaysが進行形と組み合わさると「困った様子・呆れ」を表す。中学英語では発展知識として押さえておく。

■ 進行形の疑問詞疑問文
What/Where/Who ＋ be動詞 ＋ 主語 ＋ -ing?
例）What are you doing?（何をしているの）— I'm doing my homework.
例）Where were you going?（どこに行くところだったの）— I was going to the library.`,
      },
      {
        heading: '5. 入試例題（進行形）',
        body: `以下の問題で進行形の理解を確認しよう。

【問題1】（　）内から適切な語を選びなさい。
I ( am liking / like ) this song very much.

【解答】like
【解説】likeは状態動詞なので進行形にしない。「好き」という継続的な気持ちを表すときは現在形を使う。

【問題2】次の動詞を-ing形にしなさい。
① run　② make　③ study

【解答】① running　② making　③ studying
【解説】①短母音＋子音字なので子音字を重ねる ②eで終わる語はeをとる ③そのまま-ingをつける。

【問題3】（　）内から適切な語を選びなさい。
I ( was watching / watched ) TV when my father came home.

【解答】was watching
【解説】「父が帰宅したとき（一瞬の出来事＝過去形came）」の途中で進行していた動作なので、過去進行形を使う。

【問題4】次の文を疑問文にしなさい。
She was studying math at nine last night.

【解答】Was she studying math at nine last night?
【解説】be動詞（was）を主語の前に出すだけでよい。

【問題5】次の日本語を英語にしなさい。
「私が電話をかけたとき、彼は宿題をしていた。」

【解答例】He was doing his homework when I called him.
【解説】「〜していた（継続）」→ 過去進行形、「電話をかけた（一瞬の動作）」→ 過去形。when以降を過去形にすることを忘れずに。

★ 入試対策ポイント：
■ 状態動詞（like/know/have=持つ/want）は進行形にしない
■ -ing形のつづり変化（子音字を重ねる／eをとる）を正確に
■ when＋過去形（一瞬）と過去進行形（継続中）の組み合わせが最頻出パターン
■ 現在進行形は近い未来の予定を表すこともある`,
      },
      {
        heading: '★ MAXレベル：進行形の完了形との組み合わせと受動態',
        body: `■ 現在完了進行形（have/has been -ing）※発展文法
「（ずっと）〜し続けている」という、継続用法の現在完了をさらに強調した形。動作動詞で使われることが多い。
例）I have been studying English for three hours.（私は3時間ずっと英語を勉強し続けている）
例）It has been raining since this morning.（今朝からずっと雨が降り続いている）
★ ポイント：現在完了（have studied）は「継続の結果、今の状態」に焦点、現在完了進行形（have been studying）は「ずっと動作が続いていること」そのものに焦点がある。

■ 過去完了進行形（had been -ing）※発展文法
過去のある時点までずっと続いていた動作を表す。
例）She had been waiting for two hours when the bus finally came.（バスがついに来たとき、彼女は2時間ずっと待ち続けていた）

■ 進行形の受動態（be being + 過去分詞）※発展文法
「〜されているところだ」という、進行中の受け身を表す形。
例）The bridge is being built now.（その橋は今建設されているところだ）
例）My car was being repaired when I called the garage.（整備工場に電話したとき、私の車はちょうど修理されているところだった）
★ ポイント：ふつうの受動態（is built＝建てられている、状態）と進行形の受動態（is being built＝今まさに建てられている最中）の違いを区別する。

■ 未来進行形（will be -ing）※発展文法
「（未来の）その時には〜しているだろう」という、未来のある時点で進行中の動作を予測する表現。
例）This time tomorrow, I will be flying to Osaka.（明日の今頃、私は大阪に向かって飛行機に乗っているだろう）

■ 進行形が使えない場面のまとめ（総整理）
①状態動詞（like/know/have=持つ/want/believe）
②不変の真理・確定した事実（The earth goes around the sun.）
③一瞬で終わる動作（find/lose/break など、点のような動作は「〜し続けている」という感覚と合わないため進行形にしにくい）
★ ただし文脈によっては、動作動詞的に使われる場合もあるため、丸暗記だけでなく文の意味から判断する練習も大切。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_16_eiken_hyogen',
    subject: 'eigo',
    title: '英検5級〜3級レベルの重要表現とスピーキング',
    description: '英検頻出の実用表現をまとめて攻略！中学入試の会話問題にも直結',
    keyPoints: [
      `英検5級：あいさつ・時間割・買い物など日常表現、be動詞・一般動詞の基本文`,
      `英検4級：過去形・未来形・比較・不定詞・動名詞の基礎、Eメール形式の読解`,
      `英検3級：受動態・現在完了・関係代名詞・間接疑問文などやや高度な文法`,
      `二次試験（面接）頻出表現：Please describe A.／What do you think of 〜?／How about you?`,
      `Eメール・手紙特有の書き出し・結びの表現：Thank you for your e-mail.／I'm looking forward to hearing from you.`,
      `英検のライティングは意見→理由2つ→結論の型に沿って書くと高得点`,
      `イラスト問題（何をしているか説明）は現在進行形が中心：One boy is running.`,
    ],
    order: 16,
    examType: 'chugaku',
    studyPeriod: '小5後半',
    sections: [
      {
        heading: '1. 英検5級レベルの重要表現',
        body: `英検5級は英語学習の入り口で、日常生活の基本表現が中心。中学受験の英語入試でもこのレベルの表現は前提知識として問われる。

■ 自己紹介・日常のやりとり
・What's your name? — My name is 〜.（お名前は？—私の名前は〜です）
・How old are you? — I'm 〜 years old.（何歳？—〜歳です）
・Where are you from? — I'm from 〜.（出身は？—〜出身です）
・What time is it? — It's 〜 o'clock.（何時？—〜時です）

■ 学校生活の表現
・What subject do you like? — I like 〜.（何の教科が好き？—〜が好きです）
・I have four classes today.（今日は4時間授業がある）
・It's time for lunch.（お昼の時間です）

■ 買い物・値段の表現
・How much is this? — It's 〜 yen.（これはいくら？—〜円です）
・I'll take this one.（これをください）
・Can I try this on?（試着してもいいですか）

■ 時間割・曜日の表現
・What do you have on Mondays?（月曜日は何がありますか）
・We have P.E. on Tuesdays.（火曜日には体育がある）
★ P.E.（Physical Education：体育）のように教科の略称も英検5級で出題される。

■ 天気・季節の会話
・How's the weather today? — It's sunny (rainy/cloudy/snowy).（今日の天気は？—晴れ(雨/くもり/雪)です）
・What season do you like? — I like spring because I can see cherry blossoms.（どの季節が好き？—桜が見られるから春が好き）

★ ポイント：5級は「聞かれたことに素直に答える」練習が中心。定型のQ&Aを声に出して覚えると得点が安定する。`,
      },
      {
        heading: '2. 英検4級レベルの重要表現',
        body: `英検4級では過去形・未来形・比較・不定詞など、中学1〜2年で習う文法を使った少し複雑な表現が加わる。

■ 過去の出来事を話す表現
・What did you do last weekend? — I went to the zoo.（先週末何をした？—動物園に行った）
・I was busy yesterday.（昨日は忙しかった）
・Did you enjoy the trip? — Yes, I did. / No, I didn't.（旅行は楽しかった？—はい／いいえ）

■ 未来の予定を話す表現
・What are you going to do this weekend?（今週末何をする予定？）
・I'm going to visit my grandmother.（祖母を訪ねる予定だ）
・I will call you later.（あとで電話するね）

■ 比較を使った会話
・Which do you like better, dogs or cats?（犬と猫、どちらが好き？）
・This is the biggest cake in the shop.（これは店でいちばん大きいケーキだ）

■ 依頼・提案の表現（4級頻出）
・Could you help me with my homework?（宿題を手伝ってもらえますか）
・Why don't we go to the park?（公園に行きませんか）
・Let's have lunch together.（一緒に昼食を食べましょう）

■ Eメール形式の読解問題でよく使う表現
英検3級・4級では「Eメールを読んで答える」問題形式がある。頻出のフレーズを覚えておく。
・Thank you for your e-mail.（メールをありがとう）
・I'm writing to tell you about 〜.（〜についてお知らせするために書いています）
・I'm looking forward to seeing you.（会えるのを楽しみにしています）
・Please write back soon.（早めに返信してください）
・Best wishes, / Sincerely,（結びの言葉：敬具にあたる表現）

★ ポイント：Eメール文は「用件→詳細→締めのあいさつ」という決まった構成をとることが多い。構成のパターンを知っていると内容が予測しやすくなる。`,
      },
      {
        heading: '3. 英検3級レベルの重要表現',
        body: `英検3級では受動態・現在完了・関係代名詞・間接疑問文など、中学3年レベルの文法を使った複雑な表現が問われる。難関中学の英語入試でもこのレベルの読解・作文が出題される。

■ 受動態を使った表現
・This temple was built about 500 years ago.（この寺は約500年前に建てられた）
・English is spoken in many countries.（英語は多くの国で話されている）

■ 現在完了を使った表現
・I have never been to Okinawa.（私は一度も沖縄に行ったことがない）
・Have you finished your homework yet?（もう宿題は終わりましたか）
・I have lived in this town for ten years.（この町に10年間住んでいる）

■ 関係代名詞を使った表現
・The book that I bought yesterday is very interesting.（昨日買った本はとても面白い）
・I have a friend who can speak three languages.（3か国語を話せる友達がいる）

■ 間接疑問文を使った表現
・Do you know what time the train leaves?（電車が何時に出るか知っていますか）
・I'm not sure how to get to the museum.（博物館への行き方がよくわからない）

■ 意見・提案を述べる表現（3級ライティング頻出）
・I think (that) 〜 because 〜.（〜だと思う、なぜなら〜だから）
・In my opinion, 〜.（私の意見では〜）
・It is important for us to 〜.（私たちが〜することは重要だ）
・I agree/disagree with this idea.（この意見に賛成/反対だ）

■ 電話・道案内・買い物での応用会話
・May I speak to Mr. Smith, please?（スミス先生をお願いできますか）
・Could you tell me how to get to the station?（駅への行き方を教えていただけますか）
・Excuse me, but is this seat taken?（すみません、この席は空いていますか）

★ ポイント：3級レベルは「複数の文法を組み合わせて長い文を作る」練習が中心。中学受験の記述式英作文にも直結する。`,
      },
      {
        heading: '4. 面接（スピーキング）とライティングの型',
        body: `英検の二次試験（面接）やライティング問題には、決まった「型」がある。型を知っていれば初見の問題にも対応できる。

■ 面接（スピーキング）でよく聞かれる質問パターン
・Please describe the picture.（絵の内容を説明してください）
　→ One boy is reading a book. A girl is playing the piano.（現在進行形で描写するのが基本）
・What do you usually do on weekends?（週末は普段何をしますか）
　→ I usually 〜.（現在形で習慣を答える）
・Do you like 〜? Why or why not?（〜は好きですか。その理由は？）
　→ Yes, I do. I like it because 〜.（理由をbecauseで続ける）
・What do you think of 〜?（〜についてどう思いますか）
　→ I think 〜.（意見を述べる）

■ イラスト描写問題のコツ（現在進行形が中心）
面接のイラスト問題では、絵の中の人物が「今何をしているか」を説明する。
例）A man is walking his dog.（男性が犬を散歩させている）
例）Two girls are talking near the bench.（2人の女の子がベンチの近くで話している）
★ ポイント：現在の状態や1回きりの動作を描写するので、be動詞＋-ingの現在進行形を使うのが基本。

■ ライティング（意見文）の型
英検のライティングは「意見→理由2つ→結論」の3段構成が基本の型。
①I think (that) 〜.（意見を述べる）
②First, 〜. Second, 〜.（理由を2つ挙げる）
③For example, 〜.（具体例があるとより説得力が増す）
④結論を繰り返す、またはIn conclusion, 〜.でまとめる（省略可の級もある）

例）Question: Do you like studying English?
Answer: I think studying English is important. First, I can talk with people from other countries. Second, I can enjoy watching English movies without subtitles. For these reasons, I like studying English.

■ 単語数・時間配分の目安
・英検5級：Eメール返信・単語補充が中心、時間はゆったり
・英検4級：短い意見文（25語程度）
・英検3級：意見文（25〜35語程度）、理由は2つ挙げるのが基本

★ 型を覚えておけば、どんなお題が出ても「意見→理由→（具体例）→結論」の流れに当てはめて書ける。`,
      },
      {
        heading: '5. 練習問題（英検スタイル）',
        body: `英検スタイルの問題形式で理解を確認しよう。

【問題1】次の会話の（　　）に入る最も適切な文を選びなさい。（5級レベル）
A: What time is it now?
B: (　　)

a) It's Monday.
b) It's sunny.
c) It's seven thirty.
d) It's my favorite.

【解答】c)
【解説】「今何時ですか」という時刻をたずねる質問には、時刻で答える。

【問題2】次のEメールの一部を読んで、下線部の意味に最も近いものを選びなさい。（4級レベル）
"I'm looking forward to seeing you next month."
a) 私はあなたに会うのが心配だ
b) 私はあなたに会うのを楽しみにしている
c) 私はあなたにもう会った
d) 私はあなたに会えない

【解答】b)
【解説】look forward to -ing「〜を楽しみにする」の重要熟語。

【問題3】面接のイラスト描写問題として、次の状況を英語で説明しなさい。
「1人の男の子が公園でボールを蹴っている。」

【解答例】A boy is kicking a ball in the park.
【解説】絵の中の「今行われている動作」なので現在進行形（is kicking）を使う。

【問題4】次の意見文の（　）に入る適切なつなぎ言葉を答えなさい。（3級ライティング）
I like reading books. (   ), I can learn new things. (   ), I can relax while reading.

【解答】First / Second
【解説】理由を2つ挙げるライティングの型。First〜Second〜の順番で理由を並べる。

★ まとめ：
■ 5級は日常会話の即答練習、4級はEメール・過去未来・比較の応用
■ 3級は受動態・現在完了・関係代名詞を使った複雑な文
■ 面接のイラスト描写は現在進行形が基本
■ ライティングは「意見→理由2つ→結論」の型で書く`,
      },
      {
        heading: '★ MAXレベル：準2級レベルへの橋渡しと語彙戦略',
        body: `■ 準2級レベルで求められる語彙・文法への橋渡し
難関中学の英語入試や、英検準2級（高校レベル）へのステップとして、以下のような表現も知っておくとよい。
・It is said that 〜.（〜と言われている）
例）It is said that this custom is very old.（この習慣はとても古いと言われている）
・Not only A but also B（AだけでなくBも）
例）She is not only kind but also smart.（彼女は親切なだけでなく賢い）
・as long as 〜（〜する限りは）
例）You can stay here as long as you like.（好きなだけここにいてよい）

■ 単語を「カテゴリー」で覚える戦略（英検・入試共通で効率的）
英検の語彙問題は「テーマごとにまとまった単語」が出やすい。カテゴリー学習が効果的。
・環境：environment, pollution, recycle, resource
・健康：health, exercise, diet, medicine
・技術：technology, invention, device, application
・国際：culture, custom, tradition, overseas

■ ライティング・面接で「理由が思いつかない」ときの型（実戦テクニック）
理由を思いつかないときは、以下の3パターンのどれかに当てはめると書きやすい。
①時間・お金の節約になる（It saves time/money.）
②健康・環境に良い（It is good for our health/the environment.）
③新しいことを学べる・視野が広がる（I can learn new things.）
★ このパターンを知っておくと、初見のお題でも「型に当てはめて理由を作る」ことができる。

■ 英検と中学入試英語の関係
中学入試で英語を課す学校の多くは「英検3級〜準2級程度」を出題の目安としている。英検の過去問演習は、そのまま中学入試英語の対策になる。
★ ポイント：英検の級を取得すること自体が、面接で「英語力の証明」として評価される学校もある（英検資格による加点・優遇措置）。志望校の入試要項を早めに確認しておこう。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_17_gojun_ouyou',
    subject: 'eigo',
    title: '英文の語順の応用（強調構文・倒置・省略）',
    description: '並び替え問題で差がつく！ふつうの語順から外れる特殊構文を攻略',
    keyPoints: [
      `否定語（never/little/hardly等）が文頭に出ると主語と（助）動詞が倒置する（Never have I seen 〜）`,
      `場所・方向を表す副詞句が文頭に出ると倒置することがある（Here comes the bus.）`,
      `It is 〜 that ...の強調構文：It とthatの間に強調したい語句を入れる`,
      `so/neither＋（助）動詞＋主語「〜もそうだ／〜もそうではない」の倒置`,
      `等位接続詞でつながれた文では、共通する主語・動詞・助動詞を省略できる`,
      `andの前にコンマを打つ場合とbutで対比を作る場合の語順パターンを区別する`,
      `疑問文の語順を使わない感嘆文（What/How〜!）は倒置とセットで整序問題に出やすい`,
    ],
    order: 17,
    examType: 'chugaku',
    studyPeriod: '小6後半・直前',
    sections: [
      {
        heading: '1. 強調構文（It is 〜 that ...）',
        body: `文の中の特定の語句を強く伝えたいとき、英語には「It is 〜 that ...」という特別な構文がある。並び替え問題・書きかえ問題で頻出。

■ 強調構文の基本の形
It is（was）＋ 強調したい語句 ＋ that ＋ 残りの部分
例）Tom broke the window yesterday.（トムが昨日窓を割った）
→ It was Tom that broke the window yesterday.（窓を割ったのはトムだった＝Tomを強調）
→ It was the window that Tom broke yesterday.（トムが割ったのは窓だった＝the windowを強調）
→ It was yesterday that Tom broke the window.（トムが窓を割ったのは昨日だった＝yesterdayを強調）

■ 強調構文の作り方の手順
①強調したい語句を見つける
②It is（過去の文なら was）を文頭に置く
③強調したい語句を続ける
④that以降に残りの部分を置く（強調した語句だけ抜けた形になる）

■ 強調構文で強調できる語句
主語・目的語・時や場所を表す語句など、名詞的・副詞的な要素は強調できる。
★ 注意：動詞そのものは強調構文で直接強調できない（そのかわりdo/does/didを使って動詞を強調する方法がある：I did finish my homework.のように）。

■ It is 〜 who ...（人を強調するとき）
強調する語句が「人」の場合、thatの代わりにwhoを使うこともできる（thatも可）。
例）It was Ken who（that）called me last night.（昨夜私に電話したのはケンだった）

■ 強調構文と形式主語のitとの見分け方
形式主語のIt（It is important to study.のような文）と強調構文のItを混同しないよう注意。
見分け方：強調構文はIt is/was 〜 that の「〜」の部分を消しても、残りの文（that以降）が意味の通る完全な文になる。
例）It was Tom that broke the window. → Tom broke the window.（意味が通る＝強調構文）
例）It is important to study English. → 「important to study English」だけでは主語が欠けた文にならない（形式主語構文）。`,
      },
      {
        heading: '2. 否定語による倒置（Never have I seen 〜）',
        body: `否定的な意味を持つ語句（never/little/hardlyなど）を強調のために文頭に置くと、あとの主語と（助）動詞の順番が入れかわる（倒置）。難関校の並び替え問題で頻出。

■ 倒置の基本ルール
否定語句を文頭に置くと、疑問文と同じ語順（助動詞＋主語）になる。
例）I have never seen such a beautiful sunset.（ふつうの語順）
→ Never have I seen such a beautiful sunset.（否定語Neverを強調で前に出し、倒置）

■ 倒置を起こす代表的な否定語句
・never（決して〜ない）
例）Never have I been so happy.（これほど幸せだったことは一度もない）
・little（ほとんど〜ない）
例）Little did she know that he was lying.（彼が嘘をついているとは彼女はほとんど知らなかった）
・hardly / rarely / seldom（めったに〜ない）
例）Rarely does he make a mistake.（彼はめったに間違えない）
・not until 〜（〜して初めて）
例）Not until I met her did I understand true kindness.（彼女に出会って初めて本当の優しさを理解した）

■ 倒置が起きるときの動詞の形の作り方（一般動詞の場合）
一般動詞の文を倒置するときは、疑問文と同じようにdo/does/didを使う。
例）She rarely goes out at night.（ふつうの語順）
→ Rarely does she go out at night.（rarelyを前に出し、doesを使って倒置）
★ ポイント：be動詞や助動詞（have/canなど）がある文はそれをそのまま前に出す。一般動詞のみの文はdo/does/didを補う。

■ 倒置が中学英語で問われる場面
中学レベルでは「読解の中で出てきた倒置文を正しく理解できるか」が中心。並び替え・作文で自分から倒置文を作らせる問題は難関校のみでまれに出題される程度。まずは読んで意味がわかることを目標にしよう。`,
      },
      {
        heading: '3. so/neitherを使った同意の倒置とHere/There構文',
        body: `会話でよく使う「〜もそうです」「〜もそうではありません」という同意の表現にも、特別な語順（倒置）がある。

■ So ＋（助）動詞 ＋ 主語（〜もそうです：肯定文への同意）
相手の肯定文に対して「私もそうだ」と同意するときに使う。
例）A: I like soccer. B: So do I.（サッカーが好きです。—私もです。）
例）A: She can swim well. B: So can I.（彼女は上手に泳げます。—私もです。）
★ ポイント：前の文の動詞に応じてdo/does/did/am/is/are/can等を使い分け、主語を続ける。

■ Neither ＋（助）動詞 ＋ 主語（〜もそうではありません：否定文への同意）
相手の否定文に対して「私もそうではない」と同意するときに使う。
例）A: I don't like natto. B: Neither do I.（納豆が好きではありません。—私もです（好きではない）。）
例）A: He isn't busy today. B: Neither is she.（彼は今日忙しくありません。—彼女もそうです（忙しくない）。）
⚠ 注意：Neitherを使う文自体が否定の意味を持つので、動詞は否定形にしない（× Neither don't I.は誤り）。

■ Here/Thereで始まる文の倒置（相手の注意を引く表現）
「ほら、〜が来た」「あそこに〜がある」というとき、Here/Thereを文頭に置いて動詞と主語を倒置させることがある。
例）Here comes the bus!（ほら、バスが来た！）
例）There goes my train!（あ、電車が行ってしまう！）
★ ポイント：主語が名詞（the bus, my train）のときは倒置するが、主語が代名詞（it, he等）のときは倒置しない。
例）Here it comes!（それが来た！）※代名詞のときは倒置しない語順

■ 練習：会話での同意表現の使い分け
A: I have already finished my homework.
B: So have I.（私も終えました）
A: I can't speak French.
B: Neither can I.（私も話せません）
★ 会話文読解・面接練習でも頻出の重要パターン。`,
      },
      {
        heading: '4. 省略構文と接続詞による語順パターン',
        body: `英語では、繰り返しを避けるために共通する部分（主語・動詞・助動詞）を省略することがよくある。この省略のルールを知っていると並び替え・読解がぐっと楽になる。

■ 等位接続詞（and/but/or）による共通要素の省略
同じ主語・動詞が繰り返されるとき、2つ目以降を省略できる。
例）I like tennis, and I like soccer, too.
→ I like tennis and soccer.（重複する I like を省略）
例）She can sing well, and she can dance well, too.
→ She can sing and dance well.（重複する she can を省略）

■ 比較文での省略（as 〜 as / than のあとの省略）
比較の文では、比較対象の重複部分がよく省略される。
例）Tom is taller than Ken is tall.（もとの完全な文）
→ Tom is taller than Ken (is).（重複するtallを省略、isも省略可）

■ 従属節での主語＋be動詞の省略（分詞構文的な省略）
接続詞（when/while/if/although等）の後ろで、主節と主語が同じ場合、「主語＋be動詞」が省略されることがある。
例）When I was young, I lived in Osaka.
→ When young, I lived in Osaka.（When I wasが省略され、youngだけが残る）
例）While walking to school, I met my teacher.
→ While I was walking to school, I met my teacher.（Iwasが省略され、walkingが残る）
⚠ 注意：この省略は主節と従属節の主語が同じときだけ可能。

■ 不定詞・動名詞の意味上の主語の省略
文の主語と同じ場合、to不定詞・動名詞の「〜する人」は省略される。
例）I want to go there.（私が行きたい＝Iとto goの主語が同じなので明示しない）
例）Playing soccer is fun for me.（私にとってサッカーをすることが楽しい）

■ 会話での省略（口語表現）
・(Do you) Want some coffee?（コーヒーいる？）※カジュアルな会話でDo you等が省略されることがある
・(I) See you.（またね）
★ 読解・リスニングでは省略された部分を補って理解する練習が大切。`,
      },
      {
        heading: '5. 入試例題（強調構文・倒置・省略）',
        body: `以下の問題で応用的な語順の理解を確認しよう。

【問題1】次の文の下線部を強調する文に書きかえなさい。
Ken found the key under the sofa.（下線部：Ken）

【解答】It was Ken that（who）found the key under the sofa.
【解説】強調したい語句（Ken）をIt was 〜 thatではさむ。人を強調するのでwhoも使える。

【問題2】次の会話の（　）に適切な語を入れなさい。
A: I have never been to Australia.
B: (   ) have I.

【解答】Neither
【解説】相手の否定文（never been）に対して「私も〜ない」と同意するので、Neitherを使った倒置表現。

【問題3】次の並び替え問題を完成させなさい。（1語不足）
（seen / never / I / such / beautiful / a / view / have）

【解答】Never have I seen such a beautiful view.
【解説】否定語Neverを文頭に出すと、あとは疑問文と同じ語順（助動詞have＋主語I）になる。

【問題4】次の2つの文を1つにまとめなさい。
She can sing well. She can dance well.

【解答例】She can sing and dance well.
【解説】共通する主語（she）と助動詞（can）を省略し、動詞をandでつなぐ。

★ 入試対策ポイント：
■ 強調構文：It is/was 〜 that ...の「〜」を消しても文が成立するかで見分ける
■ 否定語（never/little/hardly）が文頭→倒置（助動詞＋主語）
■ So/Neither＋（助）動詞＋主語で「〜もそうです／そうではない」
■ 等位接続詞・比較文・従属節では共通部分が省略されることが多い`,
      },
      {
        heading: '★ MAXレベル：仮定法の倒置と強調のdo',
        body: `■ 仮定法のIfの省略と倒置（発展）
仮定法の文でIfを省略すると、あとの主語と（助）動詞が倒置する、というやや高度な書きかえパターン。難関校の読解で出会うことがある。
・If I were you, I would not do that.
→ Were I you, I would not do that.（Ifを省略し、wereを主語の前に倒置）
・If it should rain tomorrow, we will cancel the picnic.
→ Should it rain tomorrow, we will cancel the picnic.（Ifを省略し、shouldを前に倒置）
・If I had known the truth, I would have told you.
→ Had I known the truth, I would have told you.（Ifを省略し、hadを前に倒置）
★ ポイント：この倒置形はフォーマルな文章（説明文・契約書・古い物語文など）でよく使われる。中学英語では「読んで理解できる」ことが目標。

■ 動詞を強調するdo/does/did（強調のdo）
「本当に〜する」と動詞そのものを強調したいときは、動詞の前にdo/does/didを置く（肯定文なのにdoを使う特殊な形）。
例）I do like this song.（私は本当にこの歌が好きだ）
例）She does study hard.（彼女は本当に一生懸命勉強する）
例）He did finish his homework.（彼は本当に宿題を終えたのだ）
★ ポイント：このdoのあとの動詞は必ず原形（三単現のsをつけない）。didのあとも原形。

■ 感嘆文の倒置しない語順（改めて整理）
感嘆文（What/How〜!）は疑問文のような形をしているが、実際には倒置しない（ふつうの文の語順のまま）という点で、他の倒置構文と対照的。
例）What a beautiful flower this is!（これはなんて美しい花なんだろう）※ thisが動詞isの前
⚠ 注意：疑問文と混同して「What a beautiful flower is this!」としないよう気をつける。並び替え問題での頻出のひっかけ。

■ 譲歩を表すas（形容詞・副詞を強調する倒置）※超発展
「〜ではあるが」という譲歩を表すとき、形容詞・副詞をasの前に出す倒置がある。
例）Tired as she was, she kept working.（疲れてはいたが、彼女は働き続けた）
= Though she was tired, she kept working.
★ 超難関校の読解にまれに登場する形。存在だけ知っておけば十分。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_18_e_nikki_sakubun',
    subject: 'eigo',
    title: '絵日記・自由英作文の書き方（時系列描写）',
    description: '絵を見て・体験を思い出して書く！入試頻出の描写型英作文を攻略',
    keyPoints: [
      `絵日記は過去形が基本。1日の出来事を時系列（first→then→after that→finally）で並べる`,
      `複数のイラストが並ぶ問題は「登場人物が何をしているか」を1コマずつ現在形/過去形で説明する`,
      `時間の順序を示す語：first/at first、then/next、after that、finally/in the end`,
      `感想は最後にI was happy/tired/surprisedなど気持ちの形容詞でしめくくる`,
      `語数指定がある場合は「出来事の説明」を増減して調整し、主語・動詞は削らない`,
      `複数コマ描写では主語がコマごとに変わることが多いので、指示語（he/she/they）を正しく使い分ける`,
      `絵日記・体験文の定番テーマ：週末の出来事、遠足・運動会、家族との時間、季節の行事`,
    ],
    order: 18,
    examType: 'chugaku',
    studyPeriod: '小5後半',
    sections: [
      {
        heading: '1. 絵日記（picture diary）の基本構成',
        body: `絵日記は「1枚または数枚の絵を見て、その日の出来事を英語で説明する」形式の英作文で、中学入試の英語表現問題として頻出。自由英作文（意見文）とは異なり、事実・出来事を時系列で描写する力が問われる。

■ 絵日記の基本の流れ
①いつ・どこでの出来事かを示す（時・場所の設定）
②起きた出来事を時間の順番で説明する
③最後に感想（気持ち）でしめくくる

■ 絵日記でよく使う時制
出来事は基本的に「過去形」で書く（すでに起きたことを説明するため）。
例）Last Sunday, I went to the zoo with my family.（この前の日曜日、家族と動物園に行った）
例）We saw many animals there.（そこでたくさんの動物を見た）
例）I was very happy.（とても嬉しかった）
★ ポイント：「絵日記＝過去形」「今している最中の描写（面接のイラスト説明）＝現在進行形」という区別を意識する。

■ 書き出しの決まり文句
・Last Sunday, / Yesterday, / This morning,（この前の日曜日は／昨日は／今朝は）
・I went to 〜 with 〜.（〜と一緒に〜へ行った）
・It was a sunny day.（晴れた日だった）※天気の説明から始めるのも自然

■ 絵日記の例（1枚の絵から）
【絵の内容】家族でピクニックに行き、お弁当を食べている様子
【英作文例】
Last Saturday, I went to the park with my family. We had a picnic there. My mother made rice balls, and they were delicious. We ate lunch under a big tree. It was a fun day.

★ ポイント：「誰が・どこで・何をしたか」を具体的に書くと絵日記らしい自然な文章になる。`,
      },
      {
        heading: '2. 複数のイラストを時系列でつなげる書き方',
        body: `入試の英作文では、3〜4コマのイラストが並んでいて、それぞれの場面を順番に説明させる形式がよく出題される。時間の順序を示す語（linking words）を使いこなすことがカギ。

■ 時間の順序を示す語（重要・丸暗記）
・First, / At first,（まず・最初は）
・Then, / Next,（それから・次に）
・After that,（その後）
・Finally, / In the end,（最後に・ついに）
★ この4つの語をこの順番で使うと、自然な時系列の文章になる。

■ 複数コマの絵日記の例
【4コマの内容】①朝起きる ②朝食を食べる ③学校へ行く ④友達と勉強する
【英作文例】
First, I woke up at seven. Then, I had breakfast with my family. After that, I went to school by bike. Finally, I studied math with my friends.

★ ポイント：First/Then/After that/Finallyを使うことで、絵を見なくても順番がわかる文章になる。

■ 場面ごとに主語が変わる場合の描写
イラストの中に複数の登場人物がいて、それぞれ違う動作をしている場合は、主語ごとに文を分ける。
【絵の内容】男の子はサッカーをしていて、女の子は本を読んでいる
例）One boy is playing soccer. A girl is reading a book near him.
★ ポイント：「1人目はA、もう1人はB」という描写にはone 〜, another（the other）〜の表現も使える（既習の代名詞の知識を応用）。

■ せりふ（吹き出し）がある絵の描写
イラストに吹き出しでせりふが書かれている場合は、間接話法（〜と言った）または直接引用で描写する。
例）He said, "I'm hungry."（彼は「お腹が空いた」と言った）
例）He said that he was hungry.（彼はお腹が空いたと言った）※時制の一致に注意`,
      },
      {
        heading: '3. 感想・気持ちを表す表現とまとめ方',
        body: `絵日記・体験文の最後には、出来事に対する感想（気持ち）を書くと、より自然で完成度の高い文章になる。感情を表す形容詞をストックしておこう。

■ 気持ちを表す形容詞（絵日記の結びに使える）
happy（嬉しい）／ excited（わくわくした）／ surprised（驚いた）／ tired（疲れた）
nervous（緊張した）／ glad（嬉しい）／ sad（悲しい）／ proud（誇らしい）

■ 感想文の作り方（I was 〜.のパターン）
例）I was very happy because I could see my favorite animal.（大好きな動物を見られてとても嬉しかった）
例）I was tired, but it was a great day.（疲れたけど、素晴らしい一日だった）
★ ポイント：「感情の形容詞＋because〜（理由）」の組み合わせが定番。

■ 「〜したいと思った」という感想の発展表現
体験を通して感じたことを、未来への思いとして書く発展パターン。
例）I want to go there again.（また行きたいと思った）
例）I hope to see them again someday.（いつかまた会えたらいいなと思う）

■ 絵日記全体の完成例（時系列＋感想）
【設定】遠足で水族館に行った一日
Last Friday, our class went to the aquarium. First, we watched a dolphin show. It was amazing. Then, we had lunch together in the park. After that, we looked at many kinds of fish. Finally, we came back to school by bus. I was very tired, but I had a wonderful time.

★ この例のように「時系列の描写（First〜Finally）」＋「感想（I was tired, but I had a wonderful time.）」の組み合わせが絵日記・体験文の完成形。

■ 語数調整のコツ
・語数が足りないとき：それぞれの場面に形容詞・理由を1つ足す（It was fun. → It was really fun because I love animals.）
・語数が多すぎるとき：修飾語（とても・本当に等）を削る、文をシンプルにする
⚠ 注意：主語・動詞・時制などの骨組みは削らない。削るのは修飾語や具体的すぎる説明から。`,
      },
      {
        heading: '4. 定番テーマ別の表現ストック',
        body: `絵日記・体験作文でよく出るテーマごとに、使える表現をあらかじめストックしておくと本番で困らない。

■ 遠足・社会科見学
・go on a school trip（遠足に行く）／ visit a museum（博物館を訪れる）
・take pictures（写真を撮る）／ learn about 〜（〜について学ぶ）
例）We went on a school trip to Kyoto. We visited an old temple and took a lot of pictures.

■ 運動会・体育祭
・have a sports day（運動会がある）／ run a relay race（リレーで走る）
・practice hard（一生懸命練習する）／ win / lose the game（試合に勝つ／負ける）
例）We had a sports day last month. I ran in the relay race, and our team won.

■ 家族との時間
・spend time with my family（家族と時間を過ごす）／ cook dinner together（一緒に夕食を作る）
・go shopping（買い物に行く）／ watch a movie at home（家で映画を見る）
例）Last weekend, I spent time with my family. We cooked curry together and watched a movie.

■ 季節の行事（お正月・七夕・夏祭りなど）
・celebrate New Year's Day（お正月を祝う）／ make a wish on Tanabata（七夕に願い事をする）
・enjoy fireworks（花火を楽しむ）／ wear a yukata（浴衣を着る）
例）On Tanabata, I wrote my wish on a piece of paper and hung it on a bamboo tree.

■ 誕生日・記念日
・have a birthday party（誕生日パーティーをする）／ blow out the candles（ろうそくを吹き消す）
・get a present from 〜（〜からプレゼントをもらう）
例）It was my birthday yesterday. My friends came to my house, and we had a party.

★ ポイント：これらの「動詞＋名詞」のセット表現をテーマごとに5〜10個ストックしておくと、どんな絵日記のお題にもすぐ対応できる。`,
      },
      {
        heading: '5. 入試例題（絵日記・体験作文）',
        body: `以下の問題で絵日記・体験作文の書き方を確認しよう。

【問題1】次の4つの出来事を、時間の順序を表す語を使って1つの文章にまとめなさい。
①7時に起きた ②朝食を食べた ③学校に行った ④友達とサッカーをした

【解答例】First, I got up at seven. Then, I had breakfast. After that, I went to school. Finally, I played soccer with my friends.
【解説】First/Then/After that/Finallyの順で出来事をつなぐ。すべて過去形にそろえる。

【問題2】次の絵の内容を英語で説明しなさい。
【絵の内容】女の子が図書館で本を読んでいる（現在進行形で描写）

【解答例】A girl is reading a book in the library.
【解説】面接のイラスト描写と同じく、今行われている動作は現在進行形で描写する。

【問題3】次の日本語を参考に、感想を含めた1文を英語で書きなさい。
「動物園に行けてとても嬉しかった。」

【解答例】I was very happy that I could go to the zoo.（またはbecause I could go to the zoo.）
【解説】happy＋that/because〜で理由を続ける感想文の型。

【問題4】次の絵日記の下線部の誤りを直しなさい。
Yesterday, I go to the park and play with my dog.

【解答】Yesterday, I went to the park and played with my dog.
【解説】Yesterday（過去を表す語）があるので、動詞は過去形（went, played）にする。

★ 入試対策ポイント：
■ 絵日記は過去形が基本、面接のイラスト描写は現在進行形が基本
■ First/Then/After that/Finallyで時系列を明確にする
■ 最後に感情の形容詞＋becauseで感想をしめくくる
■ テーマ別の定番表現をストックしておくと本番で困らない`,
      },
      {
        heading: '★ MAXレベル：物語文形式の描写と会話を含む作文',
        body: `■ 物語文（ストーリー）形式の英作文
より高度な絵日記・作文問題では、単なる出来事の羅列ではなく「物語（ストーリー）」として起承転結を意識した構成が求められることがある。
①導入（Introduction）：いつ・どこで・誰が
②展開（Development）：何が起きたか（複数の出来事）
③山場（Climax）：いちばん印象的な出来事・困ったこと
④結び（Conclusion）：どうなったか・感想

例）
One day, I went hiking with my family. (導入)
We walked up the mountain for two hours. (展開)
Suddenly, it started to rain heavily, and we got lost. (山場)
Finally, a kind man showed us the way, and we got home safely. I will never forget that day. (結び)

★ ポイント：Suddenly（突然）、However（しかし）などの語を使うと、単調な出来事の羅列から「物語らしい展開」に変わる。

■ 会話（せりふ）を含む作文のテクニック
物語調の作文にせりふを入れると生き生きとした文章になる。直接話法（引用符）と間接話法（伝達）の両方を使い分けられると表現の幅が広がる。
例）"Let's go home," my mother said.（「帰りましょう」と母は言った）
例）My mother said that we should go home.（母は帰るべきだと言った）

■ 五感を使った描写（発展的な表現技法）
単に「楽しかった」だけでなく、見た目・音・味などの感覚を描写に加えると、文章の完成度が上がる。
・視覚：I saw a beautiful sunset.（美しい夕日を見た）
・聴覚：I heard birds singing.（鳥のさえずりが聞こえた）
・味覚：The cake tasted delicious.（ケーキはおいしい味がした）
★ 難関校の記述式英作文では、単純な事実の羅列よりも「具体的な描写」がある答案のほうが高評価を得やすい。

■ 締めくくりの発展表現（後日談・教訓を加える）
・That experience taught me the importance of 〜.（その経験は私に〜の大切さを教えてくれた）
・Since then, I have loved 〜.（それ以来、私は〜が大好きだ）
これらの表現は難関校の自由英作文で高得点を狙う際の仕上げとして使える。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_19_kaiwabun_dokkai',
    subject: 'eigo',
    title: '会話文読解（電話・買い物・道案内の長文対話）',
    description: '複数ターンの会話文を正確に読み解く！中学入試頻出の対話読解を攻略',
    keyPoints: [
      `会話文読解は「誰が話しているか（話者）」を常に整理しながら読む`,
      `空所補充問題は、空所の前後の発言との「かみ合い」（質問と答えの対応）を確認する`,
      `場面（電話・買い物・道案内・レストラン）ごとに登場する決まり文句を予測しながら読む`,
      `会話中の指示語（it/that/one）が何を指すかは直前の発言から探す`,
      `複数空所がある問題は、確実にわかる空所から埋めて選択肢を絞り込む（消去法）`,
      `会話の最後の発言に、話の結論や次の行動が書かれていることが多い`,
      `イラスト・図表付きの会話文では、会話の内容と絵・表の情報を照合する問題が出やすい`,
    ],
    order: 19,
    examType: 'chugaku',
    studyPeriod: '小6前半',
    sections: [
      {
        heading: '1. 会話文読解の基本の読み方',
        body: `会話文読解は、AさんとBさんなど複数の話者が交互に話す形式の長文を読み、内容一致や空所補充に答える問題形式。1人の書き手による説明文とは異なる読み方のコツがある。

■ 話者を整理しながら読む
会話文では「誰が何を言ったか」を混同しないことが最重要。読みながら、話者ごとに簡単なメモ（A：〜と言った、B：〜と聞いた）を取る習慣をつけよう。

例）
A: Have you finished your homework?
B: Not yet. I'm still working on it.
A: Do you need any help?
B: Yes, please. Can you check my math problems?
→ A（宿題を聞く人）、B（まだ終わっていない人）と役割を整理して読む。

■ 質問と答えの「かみ合い」を確認する
会話は「質問→答え」「提案→反応」のペアで進む。前の発言の種類（疑問文か、依頼か、意見か）を確認し、次の発言がそれにふさわしい内容になっているかチェックする。
・疑問文のあとには、その疑問詞・内容に対応する答えが来る
・依頼（Can you 〜?）のあとには、承諾か断りの返事が来る
・意見（I think 〜）のあとには、賛成か反対の反応が来る

■ 会話の展開パターン（典型的な流れ）
①あいさつ・切り出し
②本題（質問・依頼・提案）
③応答・やりとりの往復
④結論・次の行動の確認
⑤締めのあいさつ
★ ポイント：長い会話文でも、この基本パターンに当てはめて読むと展開が予測しやすくなる。

■ 会話文特有の口語表現に慣れる
説明文にはあまり出てこない口語的な表現（相づち・つなぎ言葉）も会話文読解では重要。
・Well, .../ Actually, ... / You know, ...（ええと・実は・ほら）
・I see. / That's too bad. / Sounds good.（なるほど・それは残念・いいね）
これらは意味内容というより「会話のリズム」を作る言葉なので、設問の答えには直接関係しないことが多い。`,
      },
      {
        heading: '2. 電話の会話文読解',
        body: `電話での会話には特有の決まり文句があり、これを知っていると場面がすぐにイメージできる。

■ 電話会話の典型的な流れと表現
①電話を受ける：Hello, this is 〜 speaking.（もしもし、〜です）
②取り次ぎを頼む：May I speak to Mr. Green, please?（グリーン先生をお願いできますか）
③本人が出る：Speaking.（私です）
④不在の応答：I'm sorry, he is out now.（すみません、今外出しています）
⑤伝言：Can I take a message? / Can I leave a message?（伝言を承りましょうか／お伝えいただけますか）
⑥かけ直し：Could you ask him to call me back?（折り返し電話するよう伝えていただけますか）

■ 電話会話文の読解例
Tom: Hello, this is Tom. May I speak to Emma?
Mother: I'm sorry, Tom. She's not home now. She's at the library.
Tom: I see. Could you tell her to call me when she gets home?
Mother: Sure, I will.

【設問例】Why isn't Emma at home?（なぜエマは家にいないのですか）
【解答】She is at the library.（図書館にいるから）
★ ポイント：「不在の理由」は必ず本文中に明示されている。会話の流れの中で自然に答えが出てくる。

■ 電話会話で問われやすい設問パターン
・待ち合わせの時間・場所（What time will they meet? / Where will they meet?）
・伝言の内容（What does Tom want Emma to do?）
・電話の目的（Why did Tom call Emma?）

⚠ 注意：電話の会話では「相手が今どこにいるか」「何を頼まれたか」という情報が設問の中心になることが多い。読みながらこれらの情報にマークをつける習慣をつけよう。`,
      },
      {
        heading: '3. 買い物・道案内の会話文読解',
        body: `買い物と道案内は入試の会話文読解で最も頻出する2大場面。決まった展開パターンを覚えておくと圧倒的に読みやすくなる。

■ 買い物の会話の典型的な流れ
①声かけ：May I help you?（いらっしゃいませ）
②探し物：I'm looking for a birthday present for my brother.（弟への誕生日プレゼントを探しています）
③提案：How about this T-shirt? It's very popular.（このTシャツはいかがですか。とても人気です）
④値段の確認：How much is it? — It's 2,000 yen.
⑤試着・検討：Can I try it on? / Do you have a bigger size?
⑥決定：I'll take it. / I'll think about it.（これにします／考えておきます）

■ 買い物会話文の読解例
Clerk: May I help you?
Customer: Yes, I'm looking for shoes for my son.
Clerk: How about these? They're very popular among children.
Customer: They look nice. How much are they?
Clerk: They're 3,000 yen.
Customer: OK, I'll take them.

【設問例】What did the customer buy?（客は何を買いましたか）
【解答】Shoes for his/her son.（息子のための靴）
★ ポイント：買い物の会話では「何を」「誰のために」「いくらで」買ったかが設問の定番。

■ 道案内の会話の典型的な流れ
①声かけ：Excuse me. Could you tell me the way to the museum?（すみません、博物館への道を教えてもらえますか）
②道順の説明：Go straight for two blocks, and turn right at the corner.（2区画まっすぐ進んで、角を右に曲がってください）
③目印：You'll see it on your left, next to the post office.（左手に、郵便局の隣に見えます）
④時間・距離：It's about a ten-minute walk from here.（ここから歩いて約10分です）
⑤お礼：Thank you very much. — You're welcome.

■ 道案内会話文の設問パターン
・道順を図示させる問題（地図上に経路を書く）
・目印になる建物を選ぶ問題（次にどの角を曲がるか）
・所要時間・距離を答える問題

★ ポイント：道案内はleft/right/straight/turn/blockなど方向を表す語を正確に聞き分ける（読み取る）ことが得点のカギ。地図が併記されている場合は、会話を読みながら実際に指でなぞって確認するとよい。`,
      },
      {
        heading: '4. 複数空所補充・整序問題の解き方',
        body: `会話文読解では、複数の空所に適切な文を選んで入れる形式（対話文完成問題）がよく出題される。効率よく解くための手順を身につけよう。

■ 複数空所問題の解き方の手順
①まず選択肢をすべて目を通し、それぞれの発言の「種類」（質問・承諾・断り・提案など）を把握する
②文脈から確実にわかる空所から埋める（すべて悩まず、簡単なものから）
③埋まった空所の前後から、残りの空所も絞り込んでいく（消去法）
④最後に会話全体を通して読み、自然な流れになっているか確認する

■ 例題形式（4つの空所を4つの選択肢から選ぶ）
A: Excuse me. ( 1 )
B: Sure. What do you need?
A: ( 2 )
B: They're on the second floor, next to the bookstore.
A: ( 3 )
B: You're welcome. Have a nice day.

選択肢：
a) Thank you very much.
b) Could you help me?
c) Where can I find children's shoes?
d) I'll take these, please.

【解答】(1) b (2) c (3) a
【解説】(1)は「手伝ってもらえますか」という声かけ→Sureという承諾に自然につながる。(2)は「靴はどこにありますか」という質問→「2階です」という場所の答えに対応。(3)は最後のお礼→You're welcome.への応答として自然。

★ ポイント：それぞれの空所を「独立した1文」として考えず、前後との「対応関係」で判断する。

■ 選択肢に含まれる紛らわしい罠
・場面には合っているが、直前の発言とかみ合わない選択肢（内容はそれっぽいが、疑問文に疑問文で返す等、応答としてズレている）
・本文中の単語を使っているが、意味的に逆の内容になっている選択肢
⚠ 注意：「それらしい」選択肢に飛びつかず、直前の発言と論理的につながるかを必ず確認する。

■ 会話文の並び替え問題（文の順番を並べ替える）
バラバラになった会話を正しい順番に並べる問題もある。あいさつ→本題→結論という基本の流れと、代名詞（it/that）が指すものが先に出てくる必要がある、という手がかりを使って解く。`,
      },
      {
        heading: '5. 入試例題（会話文読解総合）',
        body: `以下の会話文を読んで、問いに答えなさい。

【会話文】
Waiter: Are you ready to order?
Kate: Yes. I'd like a hamburger and a small salad, please.
Waiter: Would you like anything to drink?
Kate: Yes, I'll have orange juice.
Waiter: Would you like some ice cream for dessert?
Kate: No, thank you. I'm on a diet.
Waiter: All right. That will be 1,200 yen.
Kate: Here you are.

【問題1】What did Kate order?（ケイトは何を注文しましたか。すべて答えなさい）
【解答】A hamburger, a small salad, and orange juice.
【解説】注文の場面で出てきた食べ物・飲み物をすべて拾う。デザート（ice cream）は断っているので含めない。

【問題2】Why didn't Kate order ice cream?（なぜケイトはアイスクリームを注文しなかったのですか）
【解答】Because she is on a diet.（ダイエット中だから）
【解説】"I'm on a diet."が理由に対応する。

【問題3】How much did Kate pay?（ケイトはいくら払いましたか）
【解答】1,200 yen.
【解説】"That will be 1,200 yen."が金額の答え。

【問題4】次の文が入る最も適切な位置を選びなさい。
"Would you like anything to drink?"
すでに本文中にあるが、これと似た構造の設問として「本文中のどの発言が、次の発言の理由になっているか」を問う問題にも応用できる。

★ 入試対策ポイント：
■ 話者を整理し、質問と答えの対応を確認しながら読む
■ 電話・買い物・道案内はそれぞれ決まった展開パターンがある
■ 複数空所問題は確実な空所から埋め、消去法で絞り込む
■ 会話の最後には結論・次の行動が来ることが多い`,
      },
      {
        heading: '★ MAXレベル：長い対話文とEメール・SNS形式の読解',
        body: `■ 3人以上が登場する会話文（応用パターン）
難関校では、3人以上の登場人物がいる会話文が出題されることがある。誰が誰に向かって話しているかを正確に把握することがより重要になる。
例）
Tom: Emma, do you know where Ken is?
Emma: I think he's in the library. Why?
Tom: I need to ask him about the homework.
Emma: You can text him. He always checks his phone.
★ ポイント：3人になると「TomがEmmaに聞く」「EmmaがKenについて答える」というように、話題の中心人物（Ken）と話者（Tom・Emma）が別人になる場合がある。混同しないよう、名前に印をつけながら読む。

■ Eメール・チャット（SNS）形式の読解
近年の入試では、電話や対面会話だけでなく「Eメールのやりとり」「メッセージアプリの会話」形式の読解も増えている。
・件名（Subject）・宛先（To/From）・日付から、まず概要を把握する
・Eメールは手紙よりカジュアルな書き出し・結びが使われることが多い
　書き出し：Hi Tom, / Hello Emma,
　結び：See you soon. / Take care. / Best, （名前）
・チャット形式は、短い文の応答が連続する（電話に近い読み方が有効）

■ 複数の文書を組み合わせた問題（ポスター＋会話文など）
「イベントのポスター」や「時刻表」といった別の資料と会話文を組み合わせ、両方の情報を照合させる問題も難関校では出題される。
解法のポイント：
①まず資料（ポスター・表）のタイトル・数字を確認する
②会話文中で資料に言及している箇所を探す（"According to the poster..." 等）
③会話の内容と資料の情報にズレがないか照合する

■ 話者の感情・態度を読み取る問題（発展）
「Aの発言から、Aはどんな気持ちだと考えられるか」という、感情を推測させる設問も上級レベルで出題される。
・驚き：Really? / Are you serious? / I can't believe it!
・喜び：That's great! / Awesome!
・心配：Are you OK? / That sounds worrying.
・不満：That's not fair. / I'm not happy about that.
★ ポイント：感嘆符（!）や口語的な相づちの語から、話者の感情のトーンを読み取る練習をしておくと、上級の読解問題にも対応できる。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_20_tansuu_fukusuu',
    subject: 'eigo',
    title: '単数・複数の応用とつづり変化・集合名詞',
    description: '複数形のつづりルールと、間違えやすい数の一致を総整理',
    keyPoints: [
      `複数形の基本：語尾-s。s/x/ch/shで終わる語は-es、子音字+yはyをiにして-es、fやfeで終わる語はvesに変える`,
      `不規則複数形：child→children、man→men、foot→feet、単複同形：sheep/fish/deer`,
      `集合名詞：family/team/classなど、全体として単数扱いにも個々の成員として複数扱いにもなる`,
      `a number of＋複数名詞は「多くの〜」で複数扱い、the number of＋複数名詞は「〜の数」で単数扱い`,
      `複合名詞の複数形は主要な名詞部分にsをつける（passers-by ではなく通常はgirlfriendsのように末尾でよいが例外に注意）`,
      `固有名詞の複数扱い（United States等）や学問名（math, news）は単数扱いの不可算名詞として扱う`,
      `everyone/everybody/someone等は単数扱い、その代名詞での受け方（they）は近年広く許容される`,
    ],
    order: 20,
    examType: 'chugaku',
    studyPeriod: '小5後半',
    sections: [
      {
        heading: '1. 複数形の作り方（つづりの変化ルール）',
        body: `名詞を複数形にするときのつづりの変化には、いくつかのパターンがある。ルールを整理して確実に書けるようにしよう。

■ 基本パターン：そのまま-sをつける
book → books／ pen → pens／ dog → dogs／ apple → apples

■ -s, -x, -ch, -sh, -oで終わる語：-esをつける
bus → buses／ box → boxes／ watch → watches／ dish → dishes
tomato → tomatoes／ potato → potatoes
⚠ 注意：ピアノ・写真など外来語系の-oで終わる語は例外的に-sのみ：piano→pianos／ photo→photos／ radio→radios

■ 「子音字＋y」で終わる語：yをiに変えて-esをつける
city → cities／ story → stories／ baby → babies／ country → countries
⚠ 注意：「母音字＋y」で終わる語はそのまま-sをつける（yは変えない）：boy → boys／ day → days／ toy → toys

■ -f, -feで終わる語：fをvに変えて-esをつける（一部例外あり）
leaf → leaves／ knife → knives／ life → lives／ wife → wives／ shelf → shelves
⚠ 注意：例外もある（そのまま-sをつける語）：roof → roofs／ belief → beliefs

■ 発音のルール（-s/-esの読み方・発展）
・無声音（p, t, k, f）のあとは「ス」：cats [s]／ books [s]
・有声音・母音のあとは「ズ」：dogs [z]／ pens [z]
・s/x/ch/sh/zで終わる語のあとは「イズ」：buses [iz]／ watches [iz]
★ 発音のルールはリスニング・発音問題で問われることがある。目で見て覚えるだけでなく、声に出して確認しよう。`,
      },
      {
        heading: '2. 不規則複数形と単複同形',
        body: `複数形の中には、上記のルールに当てはまらない「不規則な変化」をする語がある。頻出のものをまとめて覚えよう。

■ 不規則複数形（形がまったく変わる語）
child（子ども）→ children
man（男性）→ men／ woman（女性）→ women
foot（足）→ feet／ tooth（歯）→ teeth
mouse（ねずみ）→ mice
person（人）→ people（peopleは元々「人々」という意味で使われることが多い）
⚠ 注意：women の発音は「ウィミン」で、単数形womanの発音（ウーマン）と大きく異なる点に注意。

■ 単数形と複数形が同じ形の語（単複同形）
sheep（羊）→ sheep／ deer（鹿）→ deer／ fish（魚）→ fish（種類を強調するときはfishes）
Japanese（日本人）→ Japanese／ Chinese（中国人）→ Chinese
series（シリーズ）→ series／ species（種）→ species
例）I have two sheep.（羊を2匹飼っている）※sheepsとしない
例）There are many Japanese in this city.（この街には多くの日本人がいる）

■ 常に複数形で使う名詞（対になっているもの）
scissors（はさみ）／ glasses（眼鏡）／ pants／ trousers（ズボン）／ shoes（靴）
これらは「1つ」を表すときも複数形のまま使い、数えるときはa pair of 〜を使う。
例）I need a pair of scissors.（はさみが1つ必要だ）
例）These shoes are too small.（この靴は小さすぎる）※このshoesは常に複数扱い

■ お金・単位を表す語の複数形の注意点
・数字＋hundred/thousand/millionは複数でもsをつけない（数を表す形容詞として使うとき）
例）two hundred students（200人の生徒）※ × two hundreds students
・ただし「of」を使って漠然とした数を表すときはhundreds of/thousands ofとsをつける
例）hundreds of people（何百人もの人々）`,
      },
      {
        heading: '3. 集合名詞と数の一致（is/are・単数複数の判断）',
        body: `集合名詞（家族・チーム・クラスなど、複数の人の集まりを表す名詞）は、状況によって単数扱いにも複数扱いにもなる。この判断は入試でよく問われる。

■ 集合名詞とは
family（家族）／ team（チーム）／ class（クラス）／ group（グループ）／ audience（観客）／ staff（職員）

■ 単数扱い（全体を1つのまとまりとして見るとき）
集合体を「1つの単位」として捉えるときは単数扱い（is/wasを使う）。
例）My family is large.（私の家族は大人数だ＝家族という1つの単位）
例）Our team is the strongest in the league.（私たちのチームはリーグでいちばん強い）

■ 複数扱い（構成する個々のメンバーに注目するとき）
集合体の中の「個々の人々」に注目するときは複数扱い（are/wereを使う）。
例）My family are all early risers.（私の家族はみんな早起きだ＝家族の1人1人に注目）
例）The team are wearing different color uniforms.（チームのメンバーはそれぞれ違う色のユニフォームを着ている）
★ ポイント：日本の中学英語では単数扱い（is）を基本として教えることが多いが、文脈で複数扱いになることも知っておくと読解で困らない。

■ a number of と the number of の区別（最重要の紛らわしいペア）
・a number of ＋ 複数名詞：「多くの〜」（数量表現、意味上many に近い）→ 複数扱い（are）
例）A number of students are absent today.（今日は多くの生徒が休んでいる）
・the number of ＋ 複数名詞：「〜の数」（数そのものを主語にしている）→ 単数扱い（is）
例）The number of students in this school is increasing.（この学校の生徒数は増加している）
⚠ 注意：a number of とthe number ofは見た目が似ているが、動詞の単数・複数がまったく逆になる。入試最頻出のひっかけ。

■ everyone/everybody/someone/somebody/each（単数扱い）
these + 単数動詞、後で受ける代名詞はhe/she/theyのいずれも使われる。
例）Everyone in this class likes music.（このクラスのみんなが音楽を好きだ）※動詞はlikes（単数扱い）
例）Everybody has to bring his or her（their）own lunch.（全員が自分の昼食を持ってこなければならない）`,
      },
      {
        heading: '4. 複合名詞・不可算名詞・固有名詞の数の扱い',
        body: `複数形にするときに迷いやすい、複合名詞・不可算名詞・固有名詞のパターンを整理しよう。

■ 複合名詞の複数形（2つ以上の語が組み合わさった名詞）
基本的には最後の名詞部分にsをつける。
例）birthday party → birthday parties／ football player → football players
ただし、意味の中心となる名詞が最後に来ない場合は、その語にsをつける（中学レベルでは頻度は低いが読解で出会うことがある）。
例）passer-by（通行人）→ passers-by（中心語はpasser）

■ 学問名・病名・ゲーム名の不可算名詞扱い（-sで終わるが単数扱い）
一見複数形に見えるが、実際は単数扱いの不可算名詞がある。
例）math（mathematics）is my favorite subject.（数学は私の好きな教科だ）
例）news is not always true.（ニュースが常に真実とは限らない）
例）physics（物理学）／ economics（経済学）はすべて単数扱い

■ 固有名詞の単数・複数扱い
・国名で複数形に見えるが単数扱いのもの：the United States is 〜（アメリカ合衆国は〜）
・複数のTom（同じ名前の人が複数）を表すとき：There are two Toms in my class.（クラスに2人のトムがいる）※固有名詞でも複数の人を指すときは複数形にできる

■ 不可算名詞を「数える」ときの単位（重要熟語）
不可算名詞は直接複数形にできないが、単位を表す語をつけて数えることができる。
・a piece of paper／ a sheet of paper（紙1枚）
・a glass of water（コップ1杯の水）／ a cup of tea（カップ1杯のお茶）
・a piece of advice／ a piece of information（助言・情報1つ）
・a loaf of bread（パン1斤）
複数にするときは単位のほうを複数形にする：two glasses of water、three pieces of paper

■ 練習：不可算名詞の数え方チェック
× two informations（×）→ ○ two pieces of information（○）
× a furniture（×）→ ○ a piece of furniture（○）※furniture（家具）も不可算名詞`,
      },
      {
        heading: '5. 入試例題（単数・複数の総合）',
        body: `以下の問題で単数・複数の理解を確認しよう。

【問題1】次の名詞を複数形にしなさい。
① city　② knife　③ sheep　④ child

【解答】① cities　② knives　③ sheep　④ children
【解説】①子音字+yはyをiにして-es ②fをvに変えて-es ③単複同形（変化なし）④不規則変化。

【問題2】（　）内から適切な語を選びなさい。
A number of students (   ) absent today.
a) is  b) are

【解答】b) are
【解説】a number of ＋複数名詞は「多くの〜」という意味で複数扱い。

【問題3】（　）内から適切な語を選びなさい。
The number of foreign visitors (   ) increasing every year.
a) is  b) are

【解答】a) is
【解説】the number of 〜は「〜の数」という単数の概念を表すので単数扱い。

【問題4】まちがいを直しなさい。
Can you give me some informations?

【解答】Can you give me some information?（またはa piece of information）
【解説】informationは不可算名詞なのでsをつけない。

【問題5】次の日本語を英語にしなさい。
「私にコップ1杯の水をください。」

【解答例】Please give me a glass of water.
【解説】不可算名詞waterを数えるときは単位（a glass of）を使う。

★ 入試対策ポイント：
■ 複数形のつづり変化（-es/y→ies/f→ves）を正確に覚える
■ a number of（複数扱い）とthe number of（単数扱い）を混同しない
■ math/news/physicsなど-sで終わる不可算名詞は単数扱い
■ 不可算名詞は単位（piece/glass/cup）をつけて数える`,
      },
      {
        heading: '★ MAXレベル：数の一致の発展パターン',
        body: `■ 「時間・距離・金額」のまとまりを1つの単位として扱う数の一致
複数形の名詞でも、1つのまとまり（金額・時間・距離）として捉えるときは単数扱いになる、という発展的なルールがある。
例）Ten thousand yen is not enough for this trip.（1万円ではこの旅行には足りない＝金額全体を1つの単位として）
例）Five years is a long time to wait.（5年は待つには長い時間だ＝期間全体を1つの単位として）
⚠ 注意：「10,000円」「5年」という数字は複数形の名詞（yen/years）だが、「ひとまとまりの量・期間」として捉えるときは動詞を単数形（is）にする。

■ Both A and B（複数扱い）とEither A or B / Neither A nor B（近い方に一致）
・both A and B ＋ 複数扱い（and でつながるので常に複数の意味）
例）Both Tom and Ken are good at soccer.（トムとケンはどちらもサッカーが得意だ）
・either A or B / neither A nor B ＋ 動詞はBに一致させる（Bに近い方）
例）Either you or I am wrong.（あなたか私のどちらかが間違っている）※ Iに近いのでam
例）Neither he nor his friends were there.（彼も彼の友達もそこにいなかった）※friendsに近いのでwere
★ ポイント：「近接一致の原則」と呼ばれるルール。Bのほうの数（単数・複数）に動詞を合わせる。

■ each of / one of ＋ 複数名詞（単数扱いになる）
「〜のうちの1つ・それぞれ」という意味のとき、全体の名詞が複数でも動詞は単数になる。
例）Each of the students has his own locker.（生徒それぞれが自分のロッカーを持っている）
例）One of my friends is from Canada.（私の友達の1人はカナダ出身だ）
⚠ 注意：of のあとの名詞（students, friends）につられて動詞を複数にしないよう注意。主語はEach/Oneであり、単数扱い。

■ many a + 単数名詞（文語的・発展知識）
manyのあとに a/an＋単数名詞を続け、動詞も単数にするという、やや古風で文学的な表現がある。
例）Many a student has made this mistake.（多くの生徒がこの間違いをしたことがある）
= Many students have made this mistake.（意味は同じ、こちらが一般的な言い方）
★ 中学レベルでは知識として知っておく程度でよいが、難関校の読解・長文で出会うことがある。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_21_setsuzokushi',
    subject: 'eigo',
    title: '等位接続詞と相関接続詞（and/but/or/so, both A and B等）',
    description: '文と文、語と語をつなぐ接続詞の正しい使い方を総整理',
    keyPoints: [
      `等位接続詞 and（追加）／but（逆接）／or（選択）／so（結果）は対等な文・語句をつなぐ`,
      `命令文, and 〜「そうすれば」、命令文, or 〜「さもないと」`,
      `both A and B「AとBの両方」は複数扱い。either A or B「AかBのどちらか」は動詞をBに合わせる`,
      `neither A nor B「AもBも〜ない」も動詞はBに合わせる。not only A but also B「AだけでなくBも」`,
      `等位接続詞でつながれた語句は文法的に同じ形（品詞・時制）をそろえる（並列の原則）`,
      `コンマの使い方：3つ以上を並べるときはA, B, and Cのようにコンマとandを併用`,
      `so（結果、口語的）とtherefore（結果、フォーマル）、but（逆接、口語的）とhowever（逆接、フォーマル）の違い`,
    ],
    order: 21,
    examType: 'chugaku',
    studyPeriod: '小5後半',
    sections: [
      {
        heading: '1. 等位接続詞 and / but / or / so の基本',
        body: `接続詞には大きく「等位接続詞」と「従属接続詞」の2種類がある。ここでは文法的に対等な語句・文をつなぐ「等位接続詞」を整理する。

■ and（そして・〜と）：追加・並列
語句どうし、文どうしを対等につなぐ。
例）I like dogs and cats.（犬と猫が好きだ）※語句をつなぐ
例）I did my homework, and I watched TV.（宿題をして、そしてテレビを見た）※文をつなぐ
★ ポイント：3つ以上並べるときは、最後の2つの前にandを置き、コンマで区切る：A, B, and C
例）I have a pen, a notebook, and an eraser.（ペンとノートと消しゴムを持っている）

■ but（しかし）：逆接・対比
前の内容と反対・対照的な内容をつなぐ。
例）I like soccer, but I don't like baseball.（サッカーは好きだが、野球は好きではない）
例）She is small, but she is very strong.（彼女は小柄だが、とても力強い）

■ or（または・〜か…）：選択
2つ以上の選択肢を示す。
例）Which do you like, tea or coffee?（紅茶とコーヒー、どちらが好きですか）
例）Hurry up, or you will miss the train.（急ぎなさい、さもないと電車に乗り遅れますよ）※命令文＋or

■ so（だから・それで）：結果
前の内容の結果・結論を示す。
例）It was raining, so I took an umbrella.（雨が降っていたので、傘を持って行った）
例）I was very tired, so I went to bed early.（とても疲れていたので、早く寝た）

■ 命令文と組み合わせる and / or（重要構文の再確認）
・命令文, and 〜：「〜しなさい、そうすれば…」（良い結果）
例）Study hard, and you will pass the exam.（一生懸命勉強しなさい、そうすれば試験に合格するだろう）
・命令文, or 〜：「〜しなさい、さもないと…」（悪い結果）
例）Get up now, or you will be late.（今起きなさい、さもないと遅刻するよ）
⚠ 注意：andとorを取り違えると意味がまったく逆になる。文脈から「良い結果か悪い結果か」を判断する。`,
      },
      {
        heading: '2. 相関接続詞 both A and B / either A or B / neither A nor B',
        body: `2つの語句をペアで使う「相関接続詞（correlative conjunctions）」は、それぞれ意味と動詞の一致のルールが異なるため、正確に区別する必要がある。

■ both A and B（AとBの両方）
2つとも含む、という意味。動詞は常に複数扱い。
例）Both Tom and Ken are good at math.（トムとケンはどちらも数学が得意だ）
例）I like both dogs and cats.（犬と猫の両方が好きだ）

■ either A or B（AかBのどちらか）
2つのうちどちらか一方、という意味。動詞はBに一致させる（近接一致）。
例）Either you or I am wrong.（あなたか私のどちらかが間違っている）
例）Either Tom or his sisters are coming to the party.（トムか彼の姉妹たちのどちらかがパーティーに来る）
★ ポイント：eitherだけで「（2つのうち）どちらか」という意味の形容詞・代名詞としても使われる（Either plan is fine.）。

■ neither A nor B（AもBも〜ない）
両方とも否定する、という意味。動詞はBに一致させる。
例）Neither Tom nor Ken likes vegetables.（トムもケンも野菜が好きではない）
例）Neither my brother nor I am good at cooking.（兄も私も料理が得意ではない）
⚠ 注意：neither A nor B自体がすでに否定の意味を持つので、動詞をさらに否定形（doesn't/isn't）にしない。
× Neither Tom nor Ken doesn't like vegetables.（×二重否定になってしまう）

■ not only A but also B（AだけでなくBも）
Bを特に強調する表現。動詞はBに一致させる。
例）Not only Tom but also his sisters are coming.（トムだけでなく彼の姉妹たちも来る）
例）She is not only kind but also smart.（彼女は親切なだけでなく賢い）
★ B not only A（Bも、Aだけでなく）と入れ替えた同義表現：B as well as A
例）His sisters as well as Tom are coming.（トムだけでなく彼の姉妹たちも来る）※こちらは動詞をB（先に来る語）に一致させる

■ 相関接続詞の動詞の一致まとめ
| 相関接続詞 | 意味 | 動詞の一致 |
|---|---|---|
| both A and B | AとB両方 | 常に複数 |
| either A or B | AかBどちらか | Bに一致 |
| neither A nor B | AもBも〜ない | Bに一致 |
| not only A but also B | AだけでなくBも | Bに一致 |`,
      },
      {
        heading: '3. 等位接続詞と並列の原則（品詞・時制をそろえる）',
        body: `等位接続詞（and/but/or）でつながれる語句は、文法的に「同じ種類・同じ形」でなければならない、という重要なルールがある（並列の原則）。

■ 品詞をそろえる
名詞と名詞、形容詞と形容詞、動詞と動詞のように、同じ種類の語句をつなぐ。
○ I like swimming and running.（動名詞どうし）
× I like swimming and to run.（動名詞と不定詞が混在→不自然）
○ She is kind and smart.（形容詞どうし）

■ 動詞の時制をそろえる
過去の話をしているときは、andでつながれた動詞もすべて過去形にする。
例）I went to the park and played soccer.（公園に行ってサッカーをした）※went・playedどちらも過去形
× I went to the park and play soccer.（×時制がそろっていない）

■ 不定詞の並列（重複するtoの省略）
不定詞を複数並べるときは、2つ目以降のtoを省略できる。
例）I want to read books and (to) study English.（本を読んで、英語を勉強したい）
★ ポイント：文法的には省略しても正しいが、意味を明確にしたいときはtoを繰り返してもよい。

■ 比較・対句表現での並列
比較の文でも、比較する2つの要素は同じ形にそろえる。
○ Playing tennis is more fun than watching TV.（動名詞どうしの比較）
× Playing tennis is more fun than to watch TV.（×形がそろっていない）

■ 3つ以上並べるときのコンマの使い方（オックスフォードコンマ）
3つ以上の語句を並べるときは、最後の2つの前にandを置き、その前にもコンマを打つのが標準的（特にアメリカ英語）。
例）I bought apples, oranges, and bananas.（リンゴとオレンジとバナナを買った）
★ 最後のコンマ（バナナの前）は「オックスフォードコンマ」と呼ばれ、省略される場合もあるが、入試では両方の形を正解として扱うことが多い。`,
      },
      {
        heading: '4. 会話的な接続詞とフォーマルな言いかえ',
        body: `英語には「話し言葉でよく使う接続詞」と「書き言葉・フォーマルな場面で使う言いかえ表現」がある。両方を知っておくと読解の幅が広がる。

■ so（口語） と therefore（フォーマル）：結果
・so：日常会話でよく使う「だから」
例）It was cold, so I wore a coat.（寒かったので、コートを着た）
・therefore：説明文やスピーチで使うフォーマルな「したがって」
例）The road was closed. Therefore, we had to take another route.（道路が閉鎖されていた。したがって、別の道を通らなければならなかった）
★ ポイント：thereforeは文頭に置かれ、コンマで区切ることが多い（接続副詞と呼ばれる）。

■ but（口語） と however（フォーマル）：逆接
・but：文と文をandのように直接つなぐ（接続詞）
例）I like cats, but I don't like dogs.
・however：独立した文の最初に置いて前の文とのつながりを示す（接続副詞）
例）I like cats. However, I don't like dogs.
⚠ 注意：howeverはbutと違い、文法的には2つの文をコンマだけでつなぐことができない（howeverの前にピリオドかセミコロンが必要）。
× I like cats, however I don't like dogs.（口語ではよく見るが正式には誤りとされる）
○ I like cats. However, I don't like dogs.（○）

■ その他の口語・フォーマルの言いかえペア
・and so（口語：それで）／ as a result（フォーマル：結果として）
・also（口語：また）／ in addition, moreover, furthermore（フォーマル：さらに）
・because（口語：〜だから、接続詞）／ due to, owing to（フォーマル：〜のため、前置詞＋名詞）

■ 接続副詞（however/therefore/moreover等）の位置の自由さ
接続副詞は文中のいろいろな位置に置くことができる（接続詞ほど位置が固定されていない）。
例）However, she didn't give up.
例）She, however, didn't give up.
例）She didn't give up, however.
★ 読解では、howeverが文の途中に出てきても「逆接の合図」であることに気づけるようにしておこう。`,
      },
      {
        heading: '5. 入試例題（等位接続詞・相関接続詞）',
        body: `以下の問題で接続詞の理解を確認しよう。

【問題1】（　）内から適切な語を選びなさい。
Both Tom and Ken (   ) good at soccer.
a) is  b) are

【解答】b) are
【解説】both A and Bは常に複数扱い。

【問題2】（　）内から適切な語を選びなさい。
Either you or he (   ) responsible for this.
a) am  b) is  c) are

【解答】b) is
【解説】either A or Bは動詞をBに一致させる。heは三人称単数なのでis。

【問題3】次の文の（　）に適切な接続詞を入れなさい。
Hurry up, (   ) you will miss the bus.

【解答】or
【解説】「急ぎなさい、さもないと」という悪い結果を表すのでor。andを使うと意味が逆になってしまう。

【問題4】次の文を、not only 〜 but alsoを使って書きかえなさい。
She is kind. She is smart, too.

【解答】She is not only kind but also smart.
【解説】「AだけでなくBも」の構文にまとめる。

【問題5】まちがいを直しなさい。
Neither Tom nor Ken doesn't like vegetables.

【解答】Neither Tom nor Ken likes vegetables.
【解説】neither A nor Bですでに否定の意味を持つので、動詞をさらに否定形にしない（二重否定を避ける）。

★ 入試対策ポイント：
■ both A and Bは複数扱い、either/neitherはBに動詞を一致させる
■ 命令文, and〜（そうすれば）／ 命令文, or〜（さもないと）を混同しない
■ andでつなぐ語句は品詞・時制をそろえる（並列の原則）
■ however/thereforeは接続副詞、文法的な使い方がbut/soとは異なる`,
      },
      {
        heading: '★ MAXレベル：接続詞の省略と発展的な相関表現',
        body: `■ that節を導くandの発展用法（発展知識）
まれに、andが「そして」以上の意味（結果・条件）を持つことがある。
例）Study hard, and you will succeed.（一生懸命勉強しなさい、そうすれば成功する）
= If you study hard, you will succeed.（もし一生懸命勉強すれば）
★ 命令文, and〜の構文は、実質的に「If you 〜, ...」という条件文の言いかえになっていることを理解しておくと、複雑な読解にも対応できる。

■ not A but B（AではなくB）
not only 〜 but alsoと似ているが、こちらは「Aを完全に否定してBに置きかえる」という意味。
例）He is not a teacher but a doctor.（彼は先生ではなく医者だ）
例）It was not luck but hard work that made her succeed.（彼女を成功させたのは運ではなく努力だった）※強調構文との組み合わせ

■ so that 〜（〜するために：目的）とso 〜 that ...（とても〜なので…：結果）の区別
似た形だが意味がまったく異なるので、入試で頻出の区別ポイント。
・so that ＋ S ＋ can/will/may 〜：「〜するために」（目的）
例）I studied hard so that I could pass the exam.（合格するために一生懸命勉強した）
・so ＋ 形容詞/副詞 ＋ that ...：「とても〜なので…」（結果）
例）I was so tired that I fell asleep.（とても疲れていたので眠ってしまった）
⚠ 注意：so thatの前に形容詞・副詞があるかどうかで判断する。

■ whether A or B（AかBか）／ whether ... or not（〜かどうか）
or と組み合わさる従属接続詞的な表現で、名詞節を作る。
例）I don't know whether he will come or not.（彼が来るかどうかわからない）
例）Whether we win or lose, we will do our best.（勝つか負けるかにかかわらず、全力を尽くす）
★ ポイント：whether A or Bは「選択の不確かさ」を表す名詞節・副詞節を作る、やや発展的な構文。難関校の読解・英作文で使われることがある。

■ 接続詞が省略される口語表現（that の省略）
think/say/know などのあとのthat（〜ということ）は、口語ではよく省略される。
例）I think (that) he is right.（彼は正しいと思う）
★ すでに他単元でも触れたが、接続詞の単元としても「thatは省略可能な接続詞」として整理しておくとよい。`,
        maxOnly: true,
      },
    ],
  },
  {
    id: 'eigo_22_kantanbun',
    subject: 'eigo',
    title: '感嘆文・付加疑問文・否定疑問文の会話表現',
    description: '気持ちを込めた特殊な文の形を総整理！会話文・リスニングの得点源',
    keyPoints: [
      `感嘆文：What＋a/an＋形容詞＋名詞＋主語＋動詞！／ How＋形容詞（副詞）＋主語＋動詞！`,
      `感嘆文は疑問文のように見えるが倒置しない（ふつうの文の語順のまま）`,
      `付加疑問文：肯定文には否定の付加疑問、否定文には肯定の付加疑問を文末につける`,
      `付加疑問文は前の文の動詞（be動詞/do・does/助動詞）を使い、主語は代名詞にする`,
      `否定疑問文（Isn't it 〜? / Don't you 〜?）への答え方：内容が肯定ならYes、否定ならNo（日本語の「はい・いいえ」と逆になることがある）`,
      `Yes/No疑問文と疑問詞疑問文、感嘆文の3つの文の型を語順で見分ける`,
      `会話でよく使う感嘆の相づち：What a surprise! / How nice! / That's amazing!`,
    ],
    order: 22,
    examType: 'chugaku',
    studyPeriod: '小6後半・直前',
    sections: [
      {
        heading: '1. 感嘆文（What と How）の作り方',
        body: `「なんて〜なんだろう！」と驚き・感動を強く表す文を感嘆文という。WhatまたはHowを使って作るが、それぞれ文の形が異なるので正確に区別しよう。

■ What を使う感嘆文（名詞を強調）
形：What ＋ a/an（＋形容詞）＋ 名詞 ＋ 主語 ＋ 動詞！
例）What a nice day it is!（なんていい天気なんだろう！）
例）What a beautiful flower this is!（これはなんて美しい花なんだろう！）
例）What an interesting book this is!（これはなんて面白い本なんだろう！）
★ ポイント：名詞が単数のときはa/anを忘れずにつける。名詞が複数形・不可算名詞のときはa/anをつけない。
例）What beautiful flowers these are!（これらはなんて美しい花なんだろう！）※複数形なのでaなし
例）What nice weather it is!（なんていい天気なんだろう！）※weatherは不可算名詞なのでaなし

■ How を使う感嘆文（形容詞・副詞を強調）
形：How ＋ 形容詞（副詞）＋ 主語 ＋ 動詞！
例）How beautiful this flower is!（この花はなんて美しいんだろう！）
例）How fast he runs!（彼はなんて速く走るんだろう！）
例）How kind you are!（あなたはなんて親切なんだろう！）
★ ポイント：Howのあとには名詞を置かない（形容詞・副詞のみ）。名詞がある場合はWhatを使う、という使い分けが最大のポイント。

■ WhatとHowの使い分けまとめ
・名詞を強調したい（〜という○○）→ What ＋（a/an）＋ 形容詞 ＋ 名詞
・形容詞・副詞だけを強調したい → How ＋ 形容詞/副詞
例）What a kind boy he is!（彼はなんて親切な少年なんだろう！）※ boyという名詞がある→What
例）How kind he is!（彼はなんて親切なんだろう！）※ 名詞がない→How

■ 感嘆文の主語＋動詞の省略（会話でよく使われる形）
会話ではしばしば「主語＋動詞」を省略し、Whatや Howの部分だけで感嘆を表す。
例）What a surprise!（なんて驚きだ！）
例）How nice!（なんて素敵！）
例）How kind of you!（ご親切に！）※ how kind of 人で「〜してくれるとは親切だ」という決まった表現`,
      },
      {
        heading: '2. 感嘆文の語順の注意点（倒置しない）',
        body: `感嘆文は疑問文と似た「What/How」で始まる形をしているが、疑問文とは違い、主語と動詞の語順を入れかえない（倒置しない）という点が最重要のポイント。

■ 感嘆文と疑問文の語順の違い（比較）
・疑問文：What is this?（これは何ですか）→ be動詞（is）が主語（this）の前
・感嘆文：What a nice pen this is!（これはなんて素敵なペンなんだろう！）→ 主語（this）のあとに動詞（is）
⚠ 注意：感嘆文で疑問文のように倒置してしまうミスが非常に多い。
× What a nice pen is this!（×）
○ What a nice pen this is!（○）

■ 「主語＋動詞」の並び方を確認する練習
感嘆文を作るときは、まず「ふつうの文（主語＋動詞）」を考えてから、強調したい語句をWhat/Howとともに前に出す、という手順で作ると間違えにくい。
①ふつうの文：This is a very nice pen.（これはとても素敵なペンだ）
②強調したい語句（a very nice pen）をWhatとともに前に出す：What a nice pen this is!
★ ふつうの文の主語・動詞の順番（this is）はそのまま保たれることを意識する。

■ How を使う感嘆文の同様の注意点
①ふつうの文：He runs very fast.（彼はとても速く走る）
②強調したい語句（fast）をHowとともに前に出す：How fast he runs!
⚠ 注意：ここでも疑問文のような倒置（How fast does he run!）にしないよう気をつける。

■ 感嘆文の書きかえ問題（入試頻出パターン）
veryを使ったふつうの文を感嘆文に書きかえる問題がよく出る。
例）This is a very interesting story.
→ What an interesting story this is!（Whatを使う書きかえ）
例）She sings very well.
→ How well she sings!（Howを使う書きかえ）
★ 手順：①veryを取り除く ②残りの形容詞・副詞の種類でWhat（名詞あり）かHow（名詞なし）かを判断する ③文頭に出して感嘆符（!）で終える`,
      },
      {
        heading: '3. 付加疑問文（〜だよね？と確認する）',
        body: `文の最後に短い疑問をつけて、相手に確認したり同意を求めたりする表現を付加疑問文という。会話でよく使われ、リスニング・会話文読解でも頻出。

■ 付加疑問文の基本ルール
①前の文が肯定文なら、付加疑問は否定形にする
②前の文が否定文なら、付加疑問は肯定形にする
③前の文の動詞（be動詞・do/does/did・助動詞）を使う
④主語は必ず代名詞にする

■ be動詞の文の付加疑問
例）You are a student, aren't you?（あなたは生徒ですよね？）
例）She isn't busy, is she?（彼女は忙しくないですよね？）
例）It was cold yesterday, wasn't it?（昨日は寒かったですよね？）

■ 一般動詞の文の付加疑問
例）He plays soccer, doesn't he?（彼はサッカーをしますよね？）
例）They don't like natto, do they?（彼らは納豆が好きではないですよね？）
例）You went to the party, didn't you?（あなたはパーティーに行きましたよね？）

■ 助動詞の文の付加疑問
例）She can swim, can't she?（彼女は泳げますよね？）
例）You will come, won't you?（あなたは来ますよね？）
例）We should hurry, shouldn't we?（急いだほうがいいですよね？）

■ 特殊な付加疑問文（形が変わるもの）
・I am 〜, aren't I?（私は〜ですよね？）※ am notではなくaren'tを使う特別な形
例）I'm right, aren't I?（私は正しいですよね？）
・Let's 〜, shall we?（〜しましょう、いいですよね？）
例）Let's go, shall we?（行きましょう、いいですよね？）
・命令文, will you?（〜してくれる？）
例）Open the door, will you?（ドアを開けてくれる？）

■ 付加疑問文への答え方
付加疑問文は「たずねている内容」に対してYes/Noで答える（前の文が否定でも、答えは事実に合わせる）。
例）You don't like coffee, do you? — No, I don't.（コーヒーが好きじゃないですよね？—はい、好きじゃないです）
例）You don't like coffee, do you? — Yes, I do.（コーヒーが好きじゃないですよね？—いいえ、好きです）
★ ポイント：日本語の「はい・いいえ」につられず、答えの内容（好き＝Yes、嫌い＝No）で機械的に判断する。`,
      },
      {
        heading: '4. 否定疑問文（〜ではないのですか？）と答え方',
        body: `Isn't it 〜? / Don't you 〜? のように、not を含む疑問文を否定疑問文という。答え方が日本語の感覚と逆になることがあるため、特に注意が必要な分野。

■ 否定疑問文の作り方
be動詞・助動詞・do/does/didの短縮形（isn't/don't/doesn't/didn't等）を主語の前に置く。
例）Isn't this your bag?（これはあなたのかばんではないのですか）
例）Don't you like vegetables?（あなたは野菜が好きではないのですか）
例）Didn't she come to the party?（彼女はパーティーに来なかったのですか）

■ 否定疑問文への答え方（最重要ルール）
英語では、答えの「内容」が肯定ならYes、否定ならNoで答える。日本語の「はい・いいえ」の感覚とズレることが多いので注意。

例）Don't you like coffee?（コーヒーは好きではないのですか）
— Yes, I do.（いいえ、好きです）※内容が「好き」なのでYes
— No, I don't.（はい、好きではありません）※内容が「好きではない」のでNo

★ 日本語では「はい、好きではありません」「いいえ、好きです」のように、否定の質問に対して逆の言い方をするが、英語ではあくまで「答えの内容」に忠実にYes/Noを選ぶ。

■ 否定疑問文が使われる場面（ニュアンス）
・確認・驚き：Isn't it cold today?（今日は寒くないですか＝寒いと思っている）
・勧誘・提案：Won't you have some tea?（お茶を飲みませんか＝勧誘のニュアンス）
・軽い非難・意外感：Didn't you know that?（それを知らなかったのですか＝知っていると思っていた）

■ 否定疑問文と付加疑問文の違い
・否定疑問文：文全体がnotを含む疑問文（Isn't this...?）
・付加疑問文：肯定・否定の文のあとに短い疑問をつける（This is..., isn't it?）
★ 意味は似ているが、形が異なる。否定疑問文は「文全体の形」、付加疑問文は「文末に追加する形」という違いを区別しておく。`,
      },
      {
        heading: '5. 入試例題（感嘆文・付加疑問文・否定疑問文）',
        body: `以下の問題で特殊な文の形の理解を確認しよう。

【問題1】次の文を感嘆文に書きかえなさい。
This is a very difficult question.

【解答】What a difficult question this is!
【解説】nameがある（question）のでWhatを使う。veryを取り、「a difficult question」をWhatとともに前に出し、あとはthis isの語順のまま。

【問題2】次の文を感嘆文に書きかえなさい。
She sings very beautifully.

【解答】How beautifully she sings!
【解説】名詞がなく副詞（beautifully）だけを強調するのでHowを使う。

【問題3】（　）に適切な付加疑問を入れなさい。
You have finished your homework, (   )?

【解答】haven't you
【解説】現在完了の文（have finished）の付加疑問はhaven't youになる。肯定文なので否定形の付加疑問。

【問題4】次の否定疑問文に、事実（好き）に合わせて答えなさい。
Don't you like math? （数学は好き）

【解答】Yes, I do.
【解説】内容が「好き」なのでYesで答える。日本語の「いいえ、好きです」につられて Noと答えないよう注意。

【問題5】まちがいを直しなさい。
What a nice pen is this!

【解答】What a nice pen this is!
【解説】感嘆文は疑問文のように倒置しない。主語（this）のあとに動詞（is）を置く。

★ 入試対策ポイント：
■ 名詞があればWhat、なければHowを使う感嘆文
■ 感嘆文は倒置しない（主語＋動詞のふつうの語順）
■ 付加疑問文は前の文と逆（肯定→否定、否定→肯定）、主語は代名詞
■ 否定疑問文の答えは「日本語のはい・いいえ」ではなく「内容」で機械的にYes/Noを選ぶ`,
      },
      {
        heading: '★ MAXレベル：会話でよく使う感嘆表現と発展的な確認表現',
        body: `■ 会話でとっさに使える感嘆の相づち表現（暗記推奨）
文法的な感嘆文以外にも、会話でよく使われる決まった感嘆の相づちがある。
・What a surprise!（なんて驚きだ！）
・How nice! / How wonderful! / How amazing!（なんて素敵/素晴らしい/すごい！）
・That's amazing! / That's incredible!（それはすごい！信じられない！）
・No way!（うそでしょう！/まさか！）※驚きを表すくだけた表現
・I can't believe it!（信じられない！）
★ これらは面接・スピーキングテストで感情豊かに応答する際にも役立つ。

■ 付加疑問文のイントネーションによる意味の違い（発展的な音声知識）
付加疑問文は、文末を上げ調子で読むか下げ調子で読むかで意味・ニュアンスが変わる。
・下げ調子（確認・同意を求める、答えがほぼわかっている）：You are a student, aren't you？（↘）
・上げ調子（本当に知りたい・確信がない）：You are a student, aren't you？（↗）
★ 中学レベルでは知識として知っておく程度でよいが、リスニング問題で「話者がどれくらい確信しているか」を判断する手がかりになる。

■ 否定疑問文のさらなる応用：Why don't you 〜?（〜したらどうですか＝提案）
Why don't you 〜?は形は否定疑問文だが、意味は「〜してはどうですか」という提案・勧誘になる特殊な用法。
例）Why don't you take a break?（休憩をとったらどうですか）
例）Why don't we eat out tonight?（今夜は外食しませんか）※Why don't we 〜はLet's 〜とほぼ同じ意味
⚠ 注意：Why don't you 〜?を文字通り「なぜあなたは〜しないのですか」と誤訳しないよう注意。提案の決まり文句として覚える。

■ so/neitherの倒置と付加疑問文の混同に注意（総復習）
別単元で学んだ「So do I. / Neither do I.」の同意表現と、この単元の付加疑問文は形が似ているが役割が異なる。
・付加疑問文：自分の発言の最後に確認をつける（You like tea, don't you?）
・So/Neitherの倒置：相手の発言に「私も」と応じる（A: I like tea. B: So do I.）
★ どちらも「主語＋動詞」の倒置的な語順を含むため混同しやすいが、「自分の文の末尾に付けるか」「相手への応答か」で区別するとよい。`,
        maxOnly: true,
      },
    ],
  },
];

export const eigoLessons: Lesson[] = [
  ...eigoOverviewLessons,
  ...eigoExt01Lessons,
  ...eigoExt02Lessons,
  ...eigoExt03Lessons,
  ...eigoExt04Lessons,
  ...eigoExt05Lessons,
  ...eigoExt06Lessons,
  ...eigoExt07Lessons,
  ...eigoExt08Lessons,
  ...eigoExt09Lessons,
  ...eigoExt10Lessons,
  ...eigoExt11Lessons,
  ...eigoExt12Lessons,
  ...lessonsNew20E4Eigo,
  ...lessonsNew20E5Eigo,
  ...lessonsNew20E6Eigo,
];
