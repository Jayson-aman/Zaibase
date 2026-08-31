import type { Lesson } from './lesson-types';
import { kokoEigoExt01Lessons } from './lessons-koko-eigo-ext01';
import { kokoEigoExt02Lessons } from './lessons-koko-eigo-ext02';
import { kokoEigoExt03Lessons } from './lessons-koko-eigo-ext03';
import { kokoEigoExt04Lessons } from './lessons-koko-eigo-ext04';
import { kokoEigoExt05Lessons } from './lessons-koko-eigo-ext05';
import { kokoEigoExt06Lessons } from './lessons-koko-eigo-ext06';
import { kokoEigoExt07Lessons } from './lessons-koko-eigo-ext07';
import { kokoEigoExt08Lessons } from './lessons-koko-eigo-ext08';
import { kokoEigoExt09Lessons } from './lessons-koko-eigo-ext09';
import { kokoEigoExt10Lessons } from './lessons-koko-eigo-ext10';
import { kokoEigoExt11Lessons } from './lessons-koko-eigo-ext11';
import { kokoEigoExt12Lessons } from './lessons-koko-eigo-ext12';
import { lessonsNew20J1Eigo } from './lessons-new20-j1-eigo';
import { lessonsNew20J2Eigo } from './lessons-new20-j2-eigo';
import { lessonsNew20J3Eigo } from './lessons-new20-j3-eigo';

// 既存の総論レッスン（order 1〜22）。450セッションの拡張ユニットは
// lessons-koko-eigo-ext01〜ext12（order 501〜950）にあり、下でまとめて結合する。
const kokoEigoOverviewLessons: Lesson[] = [
  {
    id: 'koko_eigo_01_tense',
    subject: 'eigo',
    examType: 'koko',
    order: 1,
    studyPeriod: '中1',
    title: '時制・助動詞・受動態',
    description: '時制の使い分けをマスターして英語の骨格を掴む',
    keyPoints: [
      `現在形＝習慣・普遍的事実（三単現のs）、過去形＝完結した過去。過去の疑問・否定は did＋原形`,
      `will（その場の意志・予測）と be going to（前からの予定・根拠ある予測）。時・条件の副詞節は未来でも現在形`,
      `現在完了 have/has＋過去分詞：完了(just/already/yet)／経験(ever/never)／継続(for/since)`,
      `have been to（経験・行ったことがある）と have gone to（結果・行ってしまった）の区別。現在完了進行形 have been -ing`,
      `受動態 be動詞＋過去分詞（＋by〜）。be covered with／be known for／be made of・from`,
      `助動詞の否定：must not（禁止）≠ don't have to（不必要）`,
      `助動詞＋have＋過去分詞：must have〜（したに違いない）／should have〜（すべきだった）／can't have〜（したはずがない）`,
    ],
    sections: [
      {
        heading: '1. 基本時制（現在形・過去形・未来形）',
        level: 'kiso',
        body: `■ 現在形の使い方
現在形は「習慣・繰り返す動作」と「普遍的な事実・真理」を表す。

  例）I study English every day.（習慣）
      The earth goes around the sun.（事実）

★ポイント：三単現のs（主語が3人称単数で現在形のとき動詞に s/es をつける）
  He plays soccer. / She watches TV. / It has a long tail.
  ⚠注意：does not（doesn't）を使うときは動詞を原形に戻す。
  He doesn't play soccer.（× doesn't plays は誤り）

■ 過去形の使い方
過去形は「特定の過去の時点に完結した動作・状態」を表す。

規則変化（-ed）: play→played / study→studied / stop→stopped
不規則変化20語（入試頻出）:
  be→was/were     have→had      do→did       go→went
  come→came       see→saw       take→took    make→made
  give→gave       get→got       know→knew    think→thought
  say→said        tell→told     write→wrote  read→read
  run→ran         buy→bought    bring→brought eat→ate

⚠注意：過去形の疑問文・否定文は did を使い、動詞は原形に戻す。
  Did you go to school? / I didn't go to school.

■ 未来を表す表現：will vs. be going to の違い

+------------------+-------------------------------+------------------------------+
| 表現             | ニュアンス                    | 例文                         |
+------------------+-------------------------------+------------------------------+
| will + 原形      | その場での意志・予測          | I will help you.             |
| be going to + 原形| 前から決めていた計画・根拠ある予測| I am going to study tonight. |
+------------------+-------------------------------+------------------------------+

★ポイント：時・条件を表す副詞節（when/if/after/before/until）では未来のことでも現在形を使う。
  I will call you when I arrive.（× when I will arrive は誤り）

■ 時制の一致
主節が過去形のとき、従属節の動詞も過去形にする（直接話法→間接話法のとき特に注意）。
  She said, "I am happy." → She said that she was happy.
  ⚠注意：「普遍的事実・ことわざ」は時制の一致を受けない。
  He said that the earth goes around the sun.（goes のまま）`,
      },
      {
        heading: '2. 現在完了形（have + 過去分詞）',
        level: 'oyo',
        body: `■ 現在完了形の3用法
現在完了形（have/has + 過去分詞）は「過去の出来事が現在と結びついている」ことを表す。

+----------+--------------------+----------------------+------------------------+
| 用法     | キーワード         | 訳し方               | 例文                   |
+----------+--------------------+----------------------+------------------------+
| 完了     | just/already/yet   | もう〜した・まだ〜ない | I have just finished.  |
| 経験     | ever/never/once    | 〜したことがある     | Have you ever been?    |
| 継続     | for/since          | ずっと〜している     | I have lived here for  |
|          |                    |                      | 5 years.               |
+----------+--------------------+----------------------+------------------------+

★ポイント：for と since の使い分け
  for + 期間（for 3 years / for a long time）
  since + 起点（since 2020 / since I was a child）

■ 現在完了形と過去形の違い
過去形：特定の過去の時点（yesterday / last year / in 2020 など具体的な時を示す語と共に）
現在完了形：「今」に結びついている（具体的な過去の時を示す語とは共存しない）

  ⚠注意：× I have visited Kyoto last year.（誤り）
  〇 I visited Kyoto last year.（過去形）
  〇 I have visited Kyoto before.（経験）

■ 現在完了進行形（have been + -ing）
「過去から今まで継続して〜し続けている」という動作の継続を強調する。
  I have been studying English for two hours.
  （2時間ずっと英語を勉強し続けている）

★ポイント：継続用法との違い
  I have lived here for 5 years.（状態の継続）
  I have been running for 30 minutes.（動作の継続中）

⚠注意：have been to（行ったことがある・経験）vs. have gone to（行ってしまった・結果）
  She has been to Paris.（パリに行ったことがある→今ここにいる）
  She has gone to Paris.（パリに行ってしまった→今ここにいない）`,
      },
      {
        heading: '3. 受動態（be動詞 + 過去分詞）',
        level: 'oyo',
        body: `■ 受動態の基本形
「〜される・〜られる」という意味で、動作を受ける側を主語にした文。
  形：be動詞 + 過去分詞（+ by + 動作主）

■ 能動態→受動態の変換手順5ステップ
  ① 能動態の目的語を主語にする
  ② be動詞を適切な時制で入れる
  ③ 動詞を過去分詞にする
  ④ 元の主語を「by +人」で後ろに置く（省略可）
  ⑤ 他の語句はそのまま

  例）Ken wrote this letter.（能動態）
      This letter was written by Ken.（受動態）

■ by 以外の前置詞を使う受動態（入試頻出）
  be covered with 〜（〜で覆われている）
  be filled with 〜（〜で満たされている）
  be made of 〜（〜でできている：材料が見える）
  be made from 〜（〜でできている：材料が見えない）
  be known to 〜（〜に知られている）
  be known for 〜（〜で有名だ）
  be surprised at 〜（〜に驚く）
  be interested in 〜（〜に興味がある）
  be pleased with 〜（〜に満足する）

★ポイント：by を省略するケース
  動作主が不明・一般的な人・重要でない場合は by 以下を省略する。
  English is spoken in many countries.（by people は省略）

■ 疑問文・否定文の受動態
  疑問文：be動詞を主語の前に出す
    Was this book written by him?
  否定文：be動詞の後に not を置く
    This book was not written by him.

■ 現在完了受動態（have been + 過去分詞）
  The bridge has been built recently.（その橋は最近建設された）
  ⚠注意：have + been + 過去分詞 の語順を間違えないこと。`,
      },
      {
        heading: '4. 助動詞（can/may/must/should）と入試問題例',
        level: 'nyushi',
        body: `■ 主要助動詞の意味一覧

+----------+---------------------+---------------------------+
| 助動詞   | 肯定の意味          | 注意点                    |
+----------+---------------------+---------------------------+
| can      | できる・あり得る    | could（過去・丁寧）       |
| may      | かもしれない・よい  | might（可能性が低め）     |
| must     | しなければならない  | have to でも同じ意味      |
| should   | すべきだ・はずだ   | ought to とほぼ同義       |
| will     | するだろう・する意志| would（過去・丁寧）       |
+----------+---------------------+---------------------------+

■ 否定形の意味の違い（入試最重要）
  can't / cannot：〜できない・〜のはずがない
  may not：〜でないかもしれない（不確か）
  must not / mustn't：〜してはいけない（禁止）
  don't have to：〜しなくてよい（不必要）

  ⚠注意：must not（禁止）と don't have to（不必要）は意味が全く違う！
  You must not enter.（入ってはいけない）
  You don't have to enter.（入らなくてもよい）

■ 助動詞 + 完了形（入試頻出の高度パターン）
  must have + 過去分詞：〜したに違いない
    He must have been tired.（彼は疲れていたに違いない）
  can't have + 過去分詞：〜したはずがない
    She can't have said that.（彼女がそう言ったはずがない）
  should have + 過去分詞：〜すべきだったのに（しなかった）
    I should have studied harder.（もっと勉強すべきだった）
  may have + 過去分詞：〜したかもしれない
    He may have forgotten.（彼は忘れたかもしれない）

★ポイント：助動詞の後は必ず動詞の原形
  ⚠注意：× He can plays soccer.（誤り）→ He can play soccer.

📝入試問題例

【問1】日本語に合うように（　）に適切な語を入れなさい。
「あなたはここに駐車してはいけません。」
You (　　) (　　) park here.
→ 答え：must not

【問2】次の英文の意味として最も適切なものを選びなさい。
"You don't have to finish it today."
① 今日それを終わらせてはいけない
② 今日それを終わらせなくてもよい
③ 今日必ずそれを終わらせなければならない
→ 答え：②

【問3】（　）に入る最も適切なものを選びなさい。
She looks pale. She (　　) sick last night.
① must be  ② must have been  ③ should be  ④ may be
→ 答え：② must have been（昨夜病気だったに違いない）`,
      },
    ],
  },

  {
    id: 'koko_eigo_02_comparison',
    subject: 'eigo',
    examType: 'koko',
    order: 2,
    studyPeriod: '中1',
    title: '比較表現・関係詞',
    description: '比較と関係詞を使いこなして複雑な英文を読み書きする',
    keyPoints: [
      `原級 as 〜 as、比較級 -er/more 〜 than、最上級 the -est/most。not as 〜 as「〜ほど…でない」`,
      `不規則変化：good/well-better-best、bad-worse-worst、many/much-more-most、little-less-least`,
      `倍数 twice as 〜 as、the＋比較級, the＋比較級「〜すればするほど…」`,
      `最上級の書きかえ：No other＋単数名詞〜as…as／比較級＋than any other＋単数名詞`,
      `関係代名詞：主格 who/which、目的格 who(m)/which/that（省略可）、所有格 whose`,
      `先行詞に最上級・序数・all/every/no・不定代名詞がつくと that を使う。what は先行詞を含む（〜こと・もの）`,
      `関係副詞 where/when/why/how。非制限用法（, which）では that は使えない`,
    ],
    sections: [
      {
        heading: '1. 比較の3段階（原級・比較級・最上級）',
        level: 'kiso',
        body: `■ 比較の基本形
英語では3つの段階で比較を表す。

+--------+----------------+------------------+------------------------------+
| 段階   | 形             | 使い方           | 例文                         |
+--------+----------------+------------------+------------------------------+
| 原級   | 形容詞原形     | as ... as        | as tall as Ken               |
| 比較級 | -er / more+形  | 比較級 + than    | taller than Ken              |
| 最上級 | -est / most+形 | the + 最上級     | the tallest in the class     |
+--------+----------------+------------------+------------------------------+

■ 比較級・最上級の作り方
短い語（1〜2音節）: -er / -est をつける
  tall → taller → tallest
  nice → nicer → nicest（語尾 e は 1 つだけ）
  big → bigger → biggest（子音字を重ねる）
  easy → easier → easiest（y→i に変える）

長い語（3音節以上）: more / most を前につける
  beautiful → more beautiful → most beautiful
  interesting → more interesting → most interesting

■ 不規則変化（入試必須暗記）
+--------+------------+-------------+
| 原級   | 比較級     | 最上級      |
+--------+------------+-------------+
| good   | better     | best        |
| well   | better     | best        |
| bad    | worse      | worst       |
| many   | more       | most        |
| much   | more       | most        |
| little | less       | least       |
| few    | fewer      | fewest      |
+--------+------------+-------------+

★ポイント：as...as 構文の否定
  not as... as = 「〜ほど...でない」
  Ken is not as tall as Mike.（ケンはマイクほど背が高くない）
  → Mike is taller than Ken. と言い換え可能

⚠注意：比較の対象は同じ種類のものにする
  My bag is bigger than Tom's.（Tomの鞄と比べる）
  × My bag is bigger than Tom.（Tomの鞄ではなくTom自身になる）`,
      },
      {
        heading: '2. 比較の重要構文',
        level: 'oyo',
        body: `■ 倍数表現（入試頻出）
  twice as ... as（2倍の〜）
  three times as ... as（3倍の〜）
  half as ... as（半分の〜）

  例）This box is twice as large as that one.
      （この箱はあの箱の2倍の大きさだ）

■ the + 比較級, the + 比較級
「〜すればするほど、ますます...」という意味を表す重要構文。
  The harder you study, the better your English will become.
  （一生懸命勉強すればするほど、英語が上手くなる）
  The older he gets, the wiser he becomes.
  （年を取れば取るほど、賢くなる）

★ポイント：「the + 比較級 + 主語 + 動詞」の語順に注意。

■ 比較級を使って最上級を表す表現（書き換えの入試頻出）

①「No other + 単数名詞 + 動詞 + as ... as + 主語」
  Mt. Fuji is the highest mountain in Japan.
  → No other mountain in Japan is as high as Mt. Fuji.

②「比較級 + than any other + 単数名詞」
  Mt. Fuji is higher than any other mountain in Japan.

★ポイント：この2つと最上級は同じ意味。書き換え問題で頻出。

■ prefer A to B（BよりAが好き）
  I prefer tea to coffee.（コーヒーより紅茶が好きだ）
  I prefer reading to watching TV.（テレビを見るより読書が好きだ）
  ⚠注意：prefer to +原形（〜する方を好む）と混同しないこと。
    I prefer to read.（読書の方が好きだ）

■ その他の重要比較表現
  比較級 + and + 比較級：だんだん〜になる
    It is getting warmer and warmer.（だんだん暖かくなっている）
  比較級 + than expected：予想より〜だ
    The test was harder than I expected.`,
      },
      {
        heading: '3. 関係代名詞（who/which/that/what）',
        level: 'oyo',
        body: `■ 関係代名詞の役割と格変化
関係代名詞は「名詞（先行詞）を後ろから修飾する節」を導く。

+----------+--------+---------+--------+
| 先行詞   | 主格   | 目的格  | 所有格 |
+----------+--------+---------+--------+
| 人       | who    | whom    | whose  |
| 人以外   | which  | which   | whose  |
| 人・物   | that   | that    | （なし）|
| 先行詞なし| what  | what    | （なし）|
+----------+--------+---------+--------+

■ 各用法の例文
主格（関係代名詞が節の中で主語）:
  The boy who is playing soccer is Ken.
  I have a dog which has big ears.

目的格（関係代名詞が節の中で目的語）:
  The book (which/that) I bought is interesting.
  → 目的格の関係代名詞は省略できる

所有格（〜の）:
  I know a girl whose father is a doctor.

■ that のみを使う場合（入試重要）
  ① 先行詞が最上級・序数（first/second等）のとき
    This is the best movie that I have ever seen.
  ② 先行詞に all/every/no/any が含まれるとき
    Everything that he says is true.
  ③ 先行詞が〈人＋物〉のとき
    I saw a man and his dog that were walking in the park.
  ④ 先行詞が不定代名詞（something/anything等）のとき
    Is there anything that I can do for you?

■ what の特別用法
what は先行詞を含む関係代名詞で「〜こと・〜もの」の意味。
  What he said surprised me.（彼が言ったことが私を驚かせた）
  = The thing that he said surprised me.

★ポイント：what は先行詞を持たない。前に先行詞がある場合は which/that を使う。
⚠注意：× the thing what he said（誤り）`,
      },
      {
        heading: '4. 関係副詞と非制限用法',
        level: 'nyushi',
        body: `■ 関係副詞の種類と使い方
関係副詞は「先行詞＋前置詞＋which」を1語で表す。

+----------+-----------+--------------------+--------------------------------+
| 関係副詞 | 先行詞    | 言い換え           | 例文                           |
+----------+-----------+--------------------+--------------------------------+
| where    | 場所      | at/in/on + which   | the city where I was born      |
| when     | 時        | at/in/on + which   | the day when we met            |
| why      | reason    | for which          | the reason why he left         |
| how      | （way）   | in which           | This is how I study.           |
+----------+-----------+--------------------+--------------------------------+

★ポイント：the way と how は一緒に使わない
  ⚠注意：× the way how I study（誤り）
  〇 the way I study / the way in which I study / how I study

■ 非制限用法（コンマ + which）
コンマを置いた関係代名詞節は「補足説明」を行う。前の文全体や名詞を補足説明する。
  制限用法（コンマなし）：先行詞を限定する
    I have a brother who lives in Tokyo.（東京に住んでいる兄がいる＝他にも兄がいる可能性）
  非制限用法（コンマあり）：先行詞について補足説明
    I have a brother, who lives in Tokyo.（兄は（1人だけで）、東京に住んでいる）

非制限用法は文全体を先行詞にすることができる。
  He passed the exam, which made his mother happy.
  （彼は試験に合格した、そのことが母を喜ばせた）

⚠注意：非制限用法では that は使えない。必ず which/who を使う。

📝入試問題例

【問1】（　）に最も適切な関係代名詞を入れなさい。
This is the most beautiful picture (　　) I have ever seen.
→ 答え：that（最上級が先行詞のとき）

【問2】日本語に合うように語句を並べ替えなさい。
「これが私が英語を勉強する方法です。」
( how / is / study / I / This / English ).
→ 答え：This is how I study English.

【問3】2文を関係副詞を使って1文にしなさい。
I remember the day. We first met on that day.
→ 答え：I remember the day when we first met.

【問4】次の文を日本語に訳しなさい。
She gave me a present, which I liked very much.
→ 答え：彼女はプレゼントをくれた、そしてそれが私はとても気に入った。`,
      },
    ],
  },

  {
    id: 'koko_eigo_03_infinitive',
    subject: 'eigo',
    examType: 'koko',
    order: 3,
    studyPeriod: '中2',
    title: '不定詞・動名詞・分詞',
    description: '不定詞・動名詞・分詞の使い方を体系的にマスターする',
    keyPoints: [
      `to不定詞の3用法：名詞的「〜すること」／形容詞的「〜すべき」／副詞的「〜するために・〜して」`,
      `疑問詞＋to不定詞（how to〜, what to〜, where to〜）`,
      `動名詞のみを目的語 enjoy/finish/stop/mind/avoid/give up、不定詞のみ want/hope/decide/plan/promise`,
      `remember/forget/try/stop は -ing と to で意味が変わる（remember -ing＝したことを覚えている／to＝忘れずに〜する）`,
      `分詞の形容詞用法：現在分詞（〜している）・過去分詞（〜された）。1語は名詞の前、2語以上は後ろから修飾`,
      `感情動詞は物・事→現在分詞(exciting)、人→過去分詞(excited)`,
      `分詞構文：接続詞と主語を省き動詞を-ingに。Having＋過去分詞は主節より前の出来事`,
    ],
    sections: [
      {
        heading: '1. to不定詞の3用法',
        level: 'kiso',
        body: `■ to不定詞の基本（to + 動詞の原形）
to不定詞には「名詞的用法」「形容詞的用法」「副詞的用法」の3つがある。

■ 名詞的用法（〜すること）
文中で名詞と同じ働きをする。主語・目的語・補語になる。
  To study English is important.（英語を勉強することは大切だ）
  I want to visit Kyoto.（京都を訪れたい）
  My dream is to become a doctor.（私の夢は医者になることだ）

■ 形容詞的用法（〜するための・〜すべき）
直前の名詞を後ろから修飾する。
  I have a lot of homework to do.（やるべき宿題がたくさんある）
  She needs something to drink.（彼女は飲むものが必要だ）
  ★ポイント：something/anything/nothing などは後ろから修飾する。

■ 副詞的用法（〜するために / 〜して）
① 目的（〜するために）：
  I went to the library to study.（勉強するために図書館に行った）
② 原因・理由（〜して、〜するとは）：
  I am glad to meet you.（会えてうれしい）
  He must be kind to help her.（彼女を助けるとは彼は親切に違いない）

■ 疑問詞 + to不定詞
「どのように〜すべきか」などを表す名詞句として使われる。
  how to + 動詞（どのように〜するか・〜の仕方）
  what to + 動詞（何を〜すべきか）
  where to + 動詞（どこで/どこへ〜すべきか）
  when to + 動詞（いつ〜すべきか）
  which to + 動詞（どちらを〜すべきか）

  例）Please tell me how to get to the station.
      I don't know what to do next.

■ 独立不定詞（慣用表現）
  to tell the truth（正直に言うと）
  to be honest（正直に言えば）
  to be sure（確かに）
  to begin with（まず第一に）
  so to speak（いわば）
  needless to say（言うまでもなく）`,
      },
      {
        heading: '2. 動名詞の用法と使い分け',
        level: 'oyo',
        body: `■ 動名詞の基本（動詞の原形 + -ing）
動名詞は動詞の -ing 形で「〜すること」の意味を持ち、名詞として機能する。

■ 動名詞を目的語にとる動詞（入試必須暗記10語）
  enjoy（楽しむ）: I enjoy reading books.
  finish（終える）: She finished cleaning her room.
  stop（やめる）: He stopped smoking.
  mind（気にする）: Do you mind opening the window?
  avoid（避ける）: Avoid eating too much.
  give up（あきらめる）: Don't give up trying.
  practice（練習する）: She practices singing every day.
  consider（考える）: I'm considering moving to Tokyo.
  suggest（提案する）: He suggested going out.
  keep（続ける）: Keep studying hard.

■ to不定詞のみを目的語にとる動詞（入試必須暗記10語）
  want（望む）: I want to go home.
  hope（望む）: She hopes to be a doctor.
  wish（願う）: I wish to see him again.
  decide（決める）: He decided to leave.
  plan（計画する）: We plan to travel.
  promise（約束する）: I promise to come back.
  refuse（断る）: She refused to answer.
  agree（同意する）: They agreed to help.
  expect（期待する）: I expect to win.
  fail（失敗する）: He failed to pass the exam.

■ 動名詞・to不定詞の両方をとるが意味が変わる動詞（入試最重要）

+----------+-------------------+---------------------+
| 動詞     | + -ing            | + to不定詞          |
+----------+-------------------+---------------------+
| remember | 〜したことを覚えている | 〜することを覚えておく |
| forget   | 〜したことを忘れる  | 〜することを忘れる  |
| try      | 試しに〜してみる   | 〜しようとする      |
| stop     | 〜することをやめる | 〜するために止まる  |
+----------+-------------------+---------------------+

例）
  I remember meeting her.（彼女に会ったことを覚えている）
  Remember to meet her.（彼女に会うのを忘れないようにしてね）
  I forgot posting the letter.（手紙を投函したことを忘れた）
  I forgot to post the letter.（手紙を投函することを忘れた）
  She tried opening the window.（試しに窓を開けてみた）
  She tried to open the window.（窓を開けようとした）

⚠注意：stop は to不定詞と組み合わせると「〜するために立ち止まる」という副詞的用法になる。
  He stopped to talk to me.（私に話しかけるために立ち止まった）
  He stopped talking to me.（私に話しかけるのをやめた）`,
      },
      {
        heading: '3. 現在分詞・過去分詞の形容詞的用法',
        level: 'oyo',
        body: `■ 分詞の形容詞的用法
分詞（現在分詞 -ing / 過去分詞 -ed）が名詞を修飾する。

■ 前置修飾（分詞が名詞の前）
  a sleeping baby（眠っている赤ちゃん）：現在分詞
  a broken window（割れた窓）：過去分詞
  a running water（流れる水）：現在分詞

★ポイント：修飾する語句が1語のときは名詞の前、2語以上のときは名詞の後ろ。

■ 後置修飾（分詞が名詞の後ろ）
  The girl playing the piano is my sister.（ピアノを弾いている女の子）
  The car made in Japan is very good.（日本で作られた車）

■ 感情動詞の現在分詞と過去分詞の違い（入試最重要）
感情を表す動詞では、人が「感じる」側は過去分詞、物・事が「感じさせる」側は現在分詞。

+----------------+---------------------------+---------------------------+
| 動詞           | 現在分詞（〜させる）      | 過去分詞（〜した感じの）  |
+----------------+---------------------------+---------------------------+
| excite（興奮）  | exciting（興奮させる）    | excited（興奮した）       |
| bore（退屈）    | boring（退屈させる）      | bored（退屈した）         |
| surprise（驚き）| surprising（驚かせる）   | surprised（驚いた）       |
| tire（疲れ）    | tiring（疲れさせる）      | tired（疲れた）           |
| interest（興味）| interesting（面白い）    | interested（興味を持った）|
+----------------+---------------------------+---------------------------+

例）
  The movie was exciting.（その映画は（私を）興奮させた→面白かった）
  I was excited about the movie.（私はその映画にワクワクした）

⚠注意：「面白い映画」は an exciting movie、「興奮した私」は excited me。

■ SVOCにおける分詞（知覚動詞・使役動詞）
知覚動詞（see/hear/feel/watch/notice）+ O + 現在分詞：〜が...しているのを見る/聞く
  I saw her dancing on the stage.（彼女がステージで踊っているのを見た）
  I heard him playing the guitar.（彼がギターを弾いているのを聞いた）

知覚動詞 + O + 過去分詞：〜が...されるのを見る/聞く
  I heard my name called.（私の名前が呼ばれるのを聞いた）`,
      },
      {
        heading: '4. 分詞構文と重要表現',
        level: 'nyushi',
        body: `■ 分詞構文とは
副詞節（接続詞を含む節）を分詞を使って短くした表現。主に書き言葉に使われる。

■ 分詞構文の作り方4ステップ
① 接続詞を省略する
② 副詞節の主語が主節と同じなら省略する
③ 副詞節の動詞を -ing 形（現在分詞）にする
④ 否定は Not を -ing の前に置く

例）
  Because I was tired, I went to bed early.
  →（① Because 省略）（② I 省略）（③ was → Being）
  → Being tired, I went to bed early.
  → さらに Being は省略可 → Tired, I went to bed early.

■ 接続詞を使った言い換え
分詞構文は文脈によって様々な意味を持つ。
  Walking along the street, I met Tom.
  → When/While I was walking along the street, I met Tom.（時）

  Turning to the right, you will see the hospital.
  → If you turn to the right, you will see the hospital.（条件）

  Being sick, she didn't go to school.
  → Because/As she was sick, she didn't go to school.（理由）

■ 慣用的分詞構文（独立分詞構文）
主節の主語と一致しないが慣用的に使われる表現。
  generally speaking（一般的に言えば）
  strictly speaking（厳密に言えば）
  speaking of 〜（〜と言えば）
  judging from 〜（〜から判断すると）
  considering 〜（〜を考えると）
  provided/providing（that）〜（もし〜ならば）
  given 〜（〜を考慮すると）

★ポイント：完了分詞構文（Having + 過去分詞）
主節の動詞より前に起きたことを表す。
  Having finished my homework, I watched TV.
  （宿題を終えた後、テレビを見た）

📝入試問題例

【問1】日本語に合うように（　）内の語を正しい形にしなさい。
「窓の近くに座っている少女は私の友達です。」
The girl (sit) near the window is my friend.
→ 答え：sitting

【問2】2文を分詞構文を使って1文にしなさい。
When I arrived at the station, I found the train had already left.
→ 答え：Arriving at the station, I found the train had already left.

【問3】（　）に最も適切なものを選びなさい。
( ) from the top of the mountain, the city looked beautiful.
① Seen  ② Seeing  ③ To see  ④ See
→ 答え：① Seen（受動の分詞構文）

【問4】次の文の誤りを正しく書き直しなさい。
The news was very surprised.
→ 答え：The news was very surprising.（ニュース自体が驚かせる側）`,
      },
    ],
  },

  {
    id: 'koko_eigo_04_reading',
    subject: 'eigo',
    examType: 'koko',
    order: 4,
    studyPeriod: '中2',
    title: '長文読解戦略',
    description: '長文を素早く正確に読んで設問に対応する戦略',
    keyPoints: [
      `スキミングで全体把握（見出し・各段落の第1文）、スキャニングで数字・固有名詞を探す`,
      `設問を先読みしてキーワードを把握してから本文を読む`,
      `内容一致：all/always/never/only の極端な選択肢、言い換え、本文にない内容(Not mentioned)に注意`,
      `指示語 it/they/this は直前1〜2文を代入して確認`,
      `空欄補充は前後の接続詞・論理関係で判断（however＝逆接、therefore＝結論、for example＝具体例）`,
      `ジャンル別に読む（論説文＝主張と根拠、物語文＝心情の変化、会話文＝話者と流れ）`,
      `わからない語は接頭辞・接尾辞と文脈で推測し、1語に固執せず先へ進む`,
    ],
    sections: [
      {
        heading: '1. スキャニング・スキミングの技術',
        level: 'kiso',
        body: `■ スキミング（Skimming）とは
文章全体を素早く読んで「大まかな内容・テーマ・流れ」を把握する技術。
試験では最初にスキミングして文章の「地図」を頭に入れることが重要。

スキミングの具体的方法：
  ① タイトルと小見出しを見る（図表・グラフのキャプションも）
  ② 各段落の第1文（トピックセンテンス）を読む
  ③ 各段落の最終文も確認する（まとめ・転換が多い）
  ④ 特徴的なキーワード（繰り返し出る語）に注目する

★ポイント：段落の最初と最後の文には要点が詰まっている。
  中間の文は「根拠・例・説明」であることが多いため、まず前後を読む習慣をつける。

■ スキャニング（Scanning）とは
文章の中から「特定の情報（数字・固有名詞・年代）」を素早く探し出す技術。
設問に「いつ・どこで・誰が・どのくらい」などを聞いているときに使う。

スキャニングの具体的方法：
  ① 設問のキーワードを先に把握する
  ② 文章の中でそのキーワード・類義語が出てくる箇所だけを探す
  ③ 数字・固有名詞（大文字で始まる語）は目立つので見つけやすい

■ 設問を先読みする理由と方法
入試の長文読解では、本文を読む前に設問を先読みするのが非常に効果的。

  方法：
  ① 設問の選択肢は読みすぎない（時間の無駄になることもある）
  ② 設問のキーワードだけを抽出しておく
  ③ 「何が問われているか」を把握してから本文を読む

  例）設問に「Why did Tom leave the room?」とあれば、
      本文中の「Tom left the room because...」の部分を重点的に読める。

⚠注意：スキミングとスキャニングはどちらか一方だけではなく、組み合わせて使うことが重要。
  まずスキミングで全体把握 → 設問を確認 → スキャニングで根拠となる箇所を特定。`,
      },
      {
        heading: '2. 設問パターン別解法',
        level: 'oyo',
        body: `■ 設問パターンと解法フローチャート

入試の長文設問は大きく4つのパターンに分類できる。

+------------------+--------------------------------+-------------------------+
| 設問タイプ       | 問われること                   | 解法のポイント          |
+------------------+--------------------------------+-------------------------+
| 内容一致         | True/False/本文に書いてあるか  | 選択肢の語句を本文で探す |
| 語彙推測         | 下線語の意味                   | 前後の文脈から推測      |
| 指示語           | it/this/that/they の内容       | 直前の名詞・文を確認    |
| 空欄補充         | 文脈に合う語句・文             | 前後の接続詞・論理関係  |
+------------------+--------------------------------+-------------------------+

■ 内容一致問題（True/False/Not mentioned）
最も出題が多いパターン。注意点：
  ① 「本文に書いていないこと」（Not mentioned）は不正解
  ② 選択肢の語句が本文にあっても、意味がずれていれば不正解
  ③ all/always/never/only などの極端な語句は不正解になりやすい
  ④ 本文の言い換え（paraphrase）に注意

⚠注意：選択肢が「正しい」「本文通り」でも、聞かれていることに答えていなければ不正解。

■ 語彙問題（文脈から推測）
知らない単語でも前後から意味を推測できる。
  ① 逆接（but/however）の後は前文と反対の意味
  ② 言い換え（that is/in other words）の後は同じ内容
  ③ 例示（for example）の後は前の語句の具体例
  ④ because/since/so の前後の論理関係を活用する

■ 指示語問題（it/this/that/they の内容）
  解法：指示語の直前（多くは直前の1〜2文）に答えがある。
  it → 単数の名詞
  they/them → 複数の名詞
  this/that → 前の節・文全体を指すこともある

  手順：指示語を発見 → 直前の文を読む → 代入してみる → 意味が通るか確認

■ 空欄補充問題
  接続詞の意味を理解することが最重要：
  however（しかし）→ 前後が逆の関係
  therefore/so（だから）→ 前が理由、後が結論
  for example（例えば）→ 後ろが具体例
  in addition/moreover（さらに）→ 追加情報
  in contrast/on the other hand（一方で）→ 対比`,
      },
      {
        heading: '3. 文章ジャンル別の読み方',
        level: 'oyo',
        body: `■ 論説文（説明文・意見文）の読み方
構造：問題提起 → 主張・意見 → 根拠・理由・例 → まとめ・結論

  読み方のポイント：
  ① 筆者の主張はどこか？（I think that.../It is important that...）
  ② 根拠として何が挙げられているか？（For example/First.../Second...）
  ③ 結論はどうか？（In conclusion.../Therefore.../As a result...）
  ④ 逆接の接続詞（but/however/although）の後は特に重要

★ポイント：論説文は「一般→特殊（具体例）→まとめ」の流れが多い。
  段落ごとに「これは何を言っている段落か」を一言でまとめながら読む。

■ 物語文の読み方
  読み方のポイント：
  ① 登場人物は誰か（代名詞の対応を追う）
  ② 時間・場所の変化（when/one day/suddenly 等）を追う
  ③ 登場人物の心情の変化に注目
  ④ 最後の場面では主人公がどう感じているか

★ポイント：物語文は心情や場面の変化を問う設問が多い。
  感情を表す語（happy/sad/surprised/worried 等）と動作の組み合わせに注意。

■ 会話文の読み方
  読み方のポイント：
  ① 誰が誰に話しているかを常に意識する
  ② 空欄前後の話の流れを把握する
  ③ 質問には応答が、提案には承諾/断りが続くパターンが多い
  ④ コロン（:）の後の発言が重要情報になる

■ Eメール・手紙文の読み方
  読み方のポイント：
  ① 差出人・受取人・件名（Subject）を確認
  ② 送った目的（お礼/依頼/質問/報告）を最初に把握
  ③ 「〜してください」「〜してほしい」の依頼に注目
  ④ 日程・場所・条件などの具体的情報を正確に読み取る

⚠注意：複数のEメールが連続する問題では、メールを送る順番（時系列）に注意。
  返信メールでは前のメールの内容を受けて話が展開する。`,
      },
      {
        heading: '4. 長文読解の時間配分と入試問題例',
        level: 'nyushi',
        body: `■ 入試本番での時間配分の目安
高校受験英語の試験時間は50〜60分程度（都道府県により異なる）。

  おおよその目安（60分の場合）：
  語彙・文法問題（大問1〜2）：15分
  長文読解（大問3〜4）：35分
    → 1つの長文に 15〜18分が目安
  見直し：10分

★ポイント：長文は全文精読せず、設問に必要な箇所を重点的に読む。
  わからなくても次の問題へ進む勇気が必要。

■ わからない単語が出た時の対処法
  ① 前後の文脈から推測する（最重要）
  ② 接頭辞・接尾辞から推測する
    un-（否定）: unhappy, unfair
    re-（再び）: return, review, rebuild
    -ful（〜に満ちた）: beautiful, helpful
    -less（〜のない）: useless, careless
  ③ 知っている単語と似ていないか確認する
  ④ どうしてもわからなければ飛ばして次へ（1語に固執しない）

■ 消去法の使い方
  ① 明らかに本文と矛盾する選択肢を消す
  ② 本文に書いていない内容（Not mentioned）を消す
  ③ 部分的に正しくても全体が正しくないものを消す
  ④ 残った中から最も本文の内容に合うものを選ぶ

📝入試問題例

次の英文を読んで、設問に答えなさい。

Many people in Japan use smartphones every day. A recent study shows that Japanese high school students spend an average of four hours a day on their phones. Some students use them for studying, but many others spend most of their time on social media.

Teachers and parents are worried about this situation. They say that too much time on smartphones can make it difficult to focus on studying and can also affect sleep. However, some experts point out that smartphones can also be useful tools for learning when used correctly.

【問1】本文の内容と合っているものを選びなさい。
① 高校生は1日平均4時間スマートフォンを勉強に使っている。
② 教師や親はスマートフォンの使用時間を心配している。
③ 専門家は全員スマートフォンを否定している。
→ 答え：②（①は「勉強に」が誤り。③は「some experts」で一部だけ）

【問2】下線部 "this situation" が指す内容を日本語で説明しなさい。
→ 答え：日本の高校生が1日平均4時間スマートフォンに費やしており、多くがSNSに時間を使っている状況。

【問3】本文の内容から、スマートフォンについてどのような意見が対立しているか、日本語でまとめなさい。
→ 答え：集中力低下や睡眠への悪影響を心配する教師・親の意見と、正しく使えば学習ツールになり得るという専門家の意見が対立している。`,
      },
    ],
  },

  {
    id: 'koko_eigo_05_writing',
    subject: 'eigo',
    examType: 'koko',
    order: 5,
    studyPeriod: '中3秋〜直前',
    title: '英作文・会話表現',
    description: '英作文を体系的に書けるようにする実践的な書き方',
    keyPoints: [
      `5文型 SV／SVC(S＝C)／SVO／SVOO／SVOC(O＝C)を英作文の土台にする`,
      `日本語を英語の発想に直す（省略された主語を補い、動詞は主語の直後に置く）`,
      `頻出構文：There is/are〜、It takes 〜 to…、It is … to〜、I want you to〜`,
      `意見文は三段構成（I think→First/For example→In conclusion）で理由を2〜3個`,
      `接続詞 however/therefore/for example/in addition/on the other hand を使い分ける`,
      `会話定型：Why don't we〜?／Shall I〜?／How about -ing?、承諾 Sounds good、断り I'm afraid I can't`,
      `語数制限では省略形(I'm/don't)も1語と数え、指定語数を守る`,
    ],
    sections: [
      {
        heading: '1. 英語の基本文型（5文型）',
        level: 'kiso',
        body: `■ 5文型の定義と例文
英語の全ての文はこの5つのパターンのいずれかに当てはまる。

+------+----------+-------------------+------------------------------------+
| 文型 | 構造     | 意味              | 例文                               |
+------+----------+-------------------+------------------------------------+
| SV   | 主語+動詞 | 〜は...する       | Birds fly.                         |
| SVC  | S+V+補語  | 〜は...だ/になる  | He is kind. / She became a teacher.|
| SVO  | S+V+目的語| 〜は...を...する  | I like music.                      |
| SVOO | S+V+O+O  | 〜は(人)に(物)を渡す| He gave me a book.               |
| SVOC | S+V+O+C  | 〜を...の状態にする| They call him Ken.                |
+------+----------+-------------------+------------------------------------+

★ポイント：補語（C）は主語や目的語の性質・状態を表す。
  SVC では S = C（He is kind. → He = kind）
  SVOC では O = C（They call him Ken. → him = Ken）

■ 日本語→英語変換の基本原則

① 主語を決める（日本語は主語が省略されることが多い）
  「今日は雨が降っています」→ It is raining today.（天気は It を使う）
  「英語を話されますか？」→ Do you speak English?

② 時制を決める
  過去の話 → 過去形（was/were/動詞の過去形）
  今の状態 → 現在形または現在進行形
  未来の予定 → will または be going to

③ 語順は英語式（動詞は主語のすぐ後ろ）
  日本語：私は　毎日　図書館で　本を　読む。
  英語順：I / read / books / in the library / every day.

■ よく使う基本構文
  There is/are 〜（〜がある・いる）
    There is a cat on the roof.
  It takes 〜 to...（...するのに〜かかる）
    It takes 30 minutes to walk to school.
  It is ... to〜（〜することは...だ）
    It is important to study every day.
  I want you to〜（あなたに〜してほしい）
    I want you to come with me.`,
      },
      {
        heading: '2. 条件英作文のコツ',
        level: 'oyo',
        body: `■ 条件英作文とは
「指定された語句を使って」「語数制限内で」英文を書く問題。
高校受験では最も出題頻度が高い英作文のパターン。

■ 指定語句使用問題の解き方
  ① 指定された語句を確認する（動詞の原形？現在形？）
  ② 指定語句が文中でどの役割を果たすか考える（主語・動詞・目的語）
  ③ その語句を中心に文を組み立てる
  ④ 語数を数える（a/the/is/are も1語としてカウント）

例）「visit」「last summer」を使って「私は去年の夏京都を訪れました。」
  → I visited Kyoto last summer.（visitをed形にする点に注意）

■ 日本語を英語に直しやすい形にリライトする技術
日本語をそのまま英語にしようとすると難しい場合が多い。
まず日本語を「英語の発想」に変換してから英訳する。

  「友達と話すのが好きです。」
  → 直訳困難 → 「私は友達と話すことを楽しむ」
  → I enjoy talking with my friends.

  「彼女は歌が上手です。」
  → 「彼女は上手に歌うことができる」
  → She can sing well.

■ 頻出構文（英作文で使える万能パターン）
  主張を述べる：
    I think (that) 〜.（私は〜と思います）
    I believe (that) 〜.（私は〜と信じます）
    In my opinion, 〜.（私の意見では〜）

  理由を述べる：
    Because 〜.（なぜなら〜）
    The reason is that 〜.（理由は〜です）
    This is because 〜.（これは〜だからです）

  例を挙げる：
    For example, 〜.（例えば〜）
    For instance, 〜.（例えば〜）

  重要性を述べる：
    It is important to 〜.（〜することが重要です）
    It is necessary for us to 〜.（私たちが〜することが必要です）
    We should 〜.（私たちは〜すべきです）

⚠注意：語数制限がある場合、省略形（I'm/don't）は1語としてカウント。
  指定語数より少なくても多くても減点になる場合があるため注意。`,
      },
      {
        heading: '3. 自由英作文（意見文・体験文）',
        level: 'oyo',
        body: `■ 意見文の3段構成
自由英作文では「自分の意見を根拠と共に述べる」能力が問われる。
3段構成で書くと論理的にまとめやすい。

  第1段落（意見・主張）：
    I think (that) students should use smartphones in school.
    I agree with the idea that...
    I do not think that...

  第2段落（理由・根拠・例）：
    First, （一つ目の理由）.
    Second, （二つ目の理由）.
    For example, （具体例）.
    Also, / In addition, （追加情報）.

  第3段落（まとめ・結論）：
    For these reasons, I think that...
    Therefore, I believe that...
    In conclusion, ...

★ポイント：理由は2〜3つ挙げるのが理想。具体例があるとさらに説得力が増す。

■ 体験文の書き方（過去の体験を述べる）
  「〜という経験があります。そのとき〜しました。それ以来〜です。」
  のパターンで書くと組み立てやすい。

  I have an experience of 〜.
  When I was a child, I 〜.
  This experience taught me that 〜.
  Since then, I have been 〜.

■ グラフ・絵説明の定型表現
入試では資料・グラフを読み取って英語で説明する問題も出る。

  The graph shows (that) 〜.（グラフは〜を示している）
  According to the graph, 〜.（グラフによると〜）
  The number of 〜 increased/decreased.（〜の数が増えた/減った）
  The percentage of 〜 is about 〜%.（〜の割合は約〜%）
  About half of 〜.（約半数の〜）
  Most of 〜.（〜の大部分）
  Compared to 〜, ...（〜と比べると…）

⚠注意：グラフの数値は正確に読み取る。「approximately（約）」「nearly（ほぼ）」
  などを使って正確でない数値であることを示すことも重要。`,
      },
      {
        heading: '4. 頻出接続詞・会話表現と入試問題例',
        level: 'nyushi',
        body: `■ 英作文で使える接続詞一覧

+--------------------+----------------------------+----------------------------------+
| 接続詞             | 意味                       | 使用例                           |
+--------------------+----------------------------+----------------------------------+
| however            | しかしながら               | I like sports. However, I...     |
| therefore          | したがって・だから         | I was tired. Therefore, I...     |
| for example        | 例えば                     | I like fruits. For example, ...  |
| in addition        | さらに・加えて             | In addition, we need to...       |
| moreover           | さらにまた                 | Moreover, the result shows...    |
| on the other hand  | 一方で・他方では           | On the other hand, some...       |
| in contrast        | 対照的に                   | In contrast, young people...     |
| as a result        | 結果として                 | As a result, the project...      |
| in conclusion      | 結論として                 | In conclusion, I think...        |
| although/though    | 〜にもかかわらず           | Although it was hard, I...       |
+--------------------+----------------------------+----------------------------------+

■ 会話の定型表現（入試最重要）

【提案・誘い】
  Why don't we 〜?（〜しませんか？）
  Shall I 〜?（私が〜しましょうか？）
  Shall we 〜?（一緒に〜しませんか？）
  How about 〜ing?（〜するのはどうですか？）
  Would you like to 〜?（〜しませんか？）
  Let's 〜.（〜しましょう）

【同意・承諾】
  I agree.（同意します）
  That's right.（その通りです）
  Sounds good!（いいですね！）
  That's a good idea.（それはいい考えですね）
  Sure! / Of course! / Certainly!（もちろん）

【断り・不同意】
  I'm afraid I can't.（残念ながらできません）
  I'm sorry, but 〜.（申し訳ないが〜）
  I don't think so.（そうは思いません）
  I disagree with 〜.（〜に同意しません）

【確認・聞き返し】
  Could you say that again?（もう一度言っていただけますか？）
  What do you mean by 〜?（〜とはどういう意味ですか？）
  I beg your pardon?（なんとおっしゃいましたか？）

📝入試問題例

【問1】次の会話の（　）に入る最も自然な表現を選びなさい。
A: Would you like to join our club?
B: (　　　)  I'd love to.
① I'm afraid I can't.  ② That sounds great!
③ I disagree.         ④ Let's go home.
→ 答え：②（後ろに「I'd love to」とあるので賛成している文脈）

【問2】次の状況で、あなたが言う英語を1文で書きなさい。
「友達にカバンを持つのを手伝ってほしいとお願いするとき。」
→ 答え例：Could you help me carry my bag? / Would you help me with my bag?

【問3】自由英作文：次のテーマについて30〜40語で英文を書きなさい。
「中学生がスマートフォンを学校に持ってくることに賛成か反対か」
→ 答え例：
I think students should be allowed to bring smartphones to school. First, they can use them to look up information quickly. Also, they can contact their parents in an emergency. For these reasons, I agree with using smartphones at school.（約40語）`,
      },
    ],
  },

  {
    id: 'koko_eigo_06_vocab',
    subject: 'eigo',
    examType: 'koko',
    order: 6,
    studyPeriod: '中3秋〜直前',
    title: '語彙・熟語・前置詞・会話表現',
    description: '高校受験に必要な語彙・熟語・前置詞を効率よく覚える',
    keyPoints: [
      `分野別の頻出語を暗記（environment/pollution/recycle、community/culture/tradition/volunteer）`,
      `語形変化を4形セットで覚える（nation/national/nationally/nationality、success/successful/succeed）`,
      `フレーズ動詞：look after(世話)／look for(探す)／look forward to／get along with／give up／make friends with`,
      `look forward to の to は前置詞→後ろは-ing（× to see ○ to seeing）`,
      `時の前置詞 at(時刻)／on(曜日・日付)／in(月・年・季節)、by(期限)と until(継続)の区別`,
      `前置詞は核心イメージで（at＝点、on＝接触・面、in＝空間の中）`,
    ],
    sections: [
      {
        heading: '1. 高校受験頻出単語（カテゴリ別）',
        level: 'kiso',
        body: `■ 学校・勉強系（入試最重要10語）
  subject（科目）→ My favorite subject is math.
  exam / examination（試験）→ I passed the exam.
  graduate（卒業する）→ He will graduate next spring.
  university / college（大学）→ She goes to university.
  lesson（授業・レッスン）→ I have an English lesson today.
  homework（宿題）→ I did my homework.
  dictionary（辞書）→ Use a dictionary to look up words.
  library（図書館）→ I often study in the library.
  textbook（教科書）→ Open your textbook to page 10.
  club（クラブ・部活）→ I belong to the soccer club.

■ 自然・環境系（入試頻出10語）
  environment（環境）→ We must protect the environment.
  pollution（汚染）→ Air pollution is a serious problem.
  recycle（リサイクルする）→ Please recycle paper and plastic.
  energy（エネルギー）→ We need to save energy.
  forest（森林）→ Many animals live in the forest.
  climate（気候）→ Climate change is a global issue.
  natural（自然の）→ Natural disasters can be very dangerous.
  reduce（減らす）→ We should reduce waste.
  resource（資源）→ Natural resources are limited.
  protect（保護する）→ It's important to protect wildlife.

■ 社会・生活系（入試頻出10語）
  community（地域社会）→ I want to help my community.
  culture（文化）→ Japan has a rich culture.
  tradition（伝統）→ This is an old Japanese tradition.
  volunteer（ボランティア）→ She does volunteer work.
  respect（尊重する・尊敬）→ We should respect each other.
  global（世界的な）→ This is a global problem.
  communicate（交流する）→ It's important to communicate well.
  international（国際的な）→ She works for an international company.
  peace（平和）→ Everyone wants peace in the world.
  society（社会）→ Technology changes our society.

■ 品詞と語形変化（入試で変形問題に出る）
語形変化のパターンを覚えると語彙が一気に増える。

  nation（名詞）/ national（形容詞）/ nationally（副詞）/ nationality（名詞）
  help（動詞・名詞）/ helpful（形容詞）/ helpfully（副詞）/ helpless（形容詞）
  success（名詞）/ successful（形容詞）/ successfully（副詞）/ succeed（動詞）
  beauty（名詞）/ beautiful（形容詞）/ beautifully（副詞）/ beautify（動詞）
  danger（名詞）/ dangerous（形容詞）/ dangerously（副詞）

★ポイント：名詞・形容詞・副詞・動詞の4形をセットで覚えると効率的。
⚠注意：副詞は -ly をつけるものが多いが、fast・hard・early など形容詞と同形のものもある。`,
      },
      {
        heading: '2. 動詞句・熟語（フレーズ動詞）',
        level: 'oyo',
        body: `■ look 系フレーズ動詞
  look at 〜（〜を見る）
    Look at that beautiful sunset!
  look for 〜（〜を探す）
    I'm looking for my keys.
  look after 〜（〜の世話をする）
    Can you look after my dog?
  look up 〜（〜を調べる）
    Look up the word in the dictionary.
  look forward to 〜（〜を楽しみにする）
    I'm looking forward to the trip.（to の後は名詞・動名詞）
  look like 〜（〜のように見える）
    It looks like rain.

■ make 系フレーズ動詞
  make up（化粧をする・作り上げる・仲直りする）
    She made up with her friend after the argument.
  make out（理解する・見分ける）
    I can't make out what he said.
  make up for 〜（〜を補う・取り戻す）
    He worked hard to make up for lost time.
  make friends with 〜（〜と友達になる）
    I made friends with a student from Canada.

■ get 系フレーズ動詞
  get up（起き上がる・起床する）
    I get up at 6 every morning.
  get along with 〜（〜とうまくやっていく）
    She gets along with everyone.
  get rid of 〜（〜を取り除く・捨てる）
    We need to get rid of old habits.
  get to 〜（〜に到着する）
    I got to the station at 8 o'clock.

■ give 系フレーズ動詞
  give up（あきらめる）
    Don't give up! Keep trying.
  give away（無料で配る・秘密を漏らす）
    He gave away his old books.
  give back（返す）
    Please give back the book when you finish.
  give in（降参する・提出する）
    She finally gave in and agreed with him.

★ポイント：フレーズ動詞は「動詞＋前置詞/副詞」のセットで意味が変わる。
  look（見る）+ after（後ろ）= look after（世話をする）
  このように、パーツの意味と組み合わせのイメージでまとめて覚える。

⚠注意：look forward to の to は前置詞。後ろに動詞が来るときは -ing 形にする。
  × I look forward to see you.
  〇 I look forward to seeing you.`,
      },
      {
        heading: '3. 前置詞の核心イメージ',
        level: 'oyo',
        body: `■ 前置詞はイメージで覚える
前置詞は「核心となるイメージ」を持っており、そこから様々な意味が派生する。

■ 主要前置詞のイメージと用法

  in（空間の中・時間の幅）
    場所：in the room（部屋の中）/ in Japan（日本に）
    期間：in the morning（午前中に）/ in 2025（2025年に）
    状態：in English（英語で）/ in trouble（困って）

  on（表面への接触・特定の日）
    接触：on the table（テーブルの上）/ on the wall（壁に）
    曜日：on Monday（月曜日に）/ on my birthday（誕生日に）

  at（点・具体的な場所・時刻）
    場所：at the station（駅に）/ at home（家に）
    時刻：at 3 o'clock（3時に）/ at noon（正午に）

  by（手段・期限・近く）
    手段：by bus（バスで）/ by hand（手で）
    期限：by Monday（月曜日までに）
    近く：by the window（窓のそば）

■ 時を表す前置詞の使い分け（入試重要）
  at（時刻・特定の時点）: at 8:00 / at noon / at night
  on（曜日・特定の日付）: on Monday / on July 4th
  in（月・年・季節）: in July / in 2025 / in spring
  by（〜までに・期限）: by Friday / by the end of the month
  until/till（〜まで（ずっと）・継続）: until 5 o'clock / until Monday

  ⚠注意：by と until の違い
  by（期限・完了）：I will finish it by Monday.（月曜までに終わらせる）
  until（継続）：I studied until midnight.（夜中まで勉強し続けた）

■ with / for / of / from / to / about のイメージ

  with（伴う・道具）: with my friend / cut with a knife
  for（目的・対象・期間）: for me / for 3 years / wait for the bus
  of（所属・数量・内容）: a glass of water / a friend of mine
  from（起点・原因）: from Tokyo / made from grapes
  to（方向・目的・関係）: go to school / kind to others
  about（話題・おおよそ）: talk about 〜 / about 20 people

■ 前置詞の覚え方のコツ（ASCII イメージ図）

  at   on   in
   .    -   [  ]

  at は「点」（一点集中）
  on は「線や面に接触」（乗っている）
  in は「空間の内側」（囲まれている）

★ポイント：前置詞は暗記より「イメージ」で理解する方が長く記憶に残る。
  使用頻度の高い熟語も前置詞のイメージと合わせて覚えると定着しやすい。`,
      },
      {
        heading: '4. 入試頻出イディオム・慣用表現',
        level: 'nyushi',
        body: `■ 高校受験頻出イディオム20選（+例文）
これらは入試で「意味を選ぶ」「空欄に入れる」問題として頻出。

  1. be good at 〜（〜が得意だ）
     She is good at drawing pictures.
  2. be afraid of 〜（〜を恐れる・〜が怖い）
     He is afraid of dogs.
  3. be interested in 〜（〜に興味がある）
     I am interested in Japanese history.
  4. take care of 〜（〜の世話をする・〜に気をつける）
     Please take care of yourself.
  5. look forward to 〜（〜を楽しみにする）
     I look forward to meeting you.（to の後は動名詞）
  6. be proud of 〜（〜を誇りに思う）
     She is proud of her son.
  7. be famous for 〜（〜で有名だ）
     Kyoto is famous for its temples.
  8. be different from 〜（〜とは異なる）
     Japanese culture is different from American culture.
  9. be similar to 〜（〜と似ている）
     This bag is similar to mine.
  10. agree with 〜（〜に同意する）
      I agree with your opinion.
  11. thank A for B（BのことでAに感謝する）
      Thank you for your help.
  12. ask A for B（AにBを求める）
      He asked her for advice.
  13. wait for 〜（〜を待つ）
      I waited for the bus for 30 minutes.
  14. belong to 〜（〜に属する・〜の一員だ）
      I belong to the basketball team.
  15. depend on 〜（〜に依存する・〜次第だ）
      It depends on the weather.
  16. give up 〜（〜をあきらめる）
      Don't give up your dream.
  17. find out 〜（〜を見つける・判明する）
      I found out the truth.
  18. go on 〜ing（〜し続ける）
      She went on talking for an hour.
  19. run out of 〜（〜がなくなる）
      We ran out of time.
  20. as soon as 〜（〜するとすぐに）
      Call me as soon as you arrive.

■ 覚え方のコツ
  ① 例文ごとセットで覚える（意味だけ覚えない）
  ② 音読して口に出す（耳と口で覚える）
  ③ 入試問題を解いて実際に使う
  ④ カテゴリ別（be + 形容詞 + 前置詞のセット）でまとめる

📝入試問題例

【問1】（　）に最も適切なものを入れなさい。
She is good (　　) playing the piano.
① at  ② in  ③ for  ④ with
→ 答え：① at

【問2】日本語に合うように語句を並べ替えなさい。
「彼は自分の国を誇りに思っています。」
( of / his / is / He / proud / country ).
→ 答え：He is proud of his country.

【問3】（　）に入る最も適切な語を書きなさい。
I am looking forward to (　　) you again.
→ 答え：seeing（look forward to の後は動名詞）

【問4】次の文の意味として最も適切なものを選びなさい。
"We ran out of time."
① 私たちは時間内に走り終えた。
② 私たちは時間がなくなった。
③ 私たちは時間を節約した。
④ 私たちは時間通りに走った。
→ 答え：②`,
      },
    ],
  },

  {
    id: 'koko_eigo_07_subjunctive',
    subject: 'eigo',
    examType: 'koko',
    order: 7,
    studyPeriod: '中3秋〜直前',
    title: '仮定法・間接疑問・話法',
    description: '仮定法・間接疑問・話法の切り替えで難関入試の複雑な文に対応する',
    keyPoints: [
      `仮定法過去 If＋過去形（be動詞はwere）, 主語＋would/could/might＋原形＝現在の事実に反する仮定`,
      `仮定法過去完了 If＋had＋過去分詞, 主語＋would/could have＋過去分詞＝過去の事実に反する仮定`,
      `I wish＋仮定法「〜ならいいのに／だったらよかったのに」、as if＋仮定法「まるで〜のように」`,
      `間接疑問文は「疑問詞＋主語＋動詞」の平叙文の語順（I don't know where he is.）`,
      `話法の転換：直接→間接で代名詞・時制・時や場所の副詞を変える（say→that節、命令文は tell 人 to〜）`,
      `If it were not for〜「〜がなければ」、仮定法の倒置（Were I…／Had I…）`,
    ],
    sections: [
      {
        heading: '1. 仮定法過去（現在の事実に反する仮定）',
        level: 'oyo',
        body: `■ 仮定法とは
「もし〜だったら…なのに」と、現実と反対のことや実現しそうにないことを表す言い方。
学習指導要領の改訂で仮定法が中学範囲に入り、高校入試（特に難関校）で頻出になった。

■ 仮定法過去の形（現在の事実に反する仮定）
  If + 主語 + 動詞の過去形 〜, 主語 + would/could/might + 動詞の原形 …
  「もし（今）〜なら、…だろうに」

  例）If I had enough money, I would buy a new bike.
      （もし十分なお金があれば、新しい自転車を買うのに）
      → 現実：お金がないから買えない

★ポイント：形は「過去形」だが、意味は「現在」のこと。ここが最重要。
  現在の事実に反する仮定 → 動詞は1つ前の時制（過去形）にずらす。

■ be動詞は原則 were を使う
仮定法では主語が I / he / she / it でも were を使うのが原則（会話では was も可）。
  If I were you, I would study harder.
  （もし私があなたなら、もっと一生懸命勉強するのに）
  ⚠注意：この "If I were you, …" は「私だったら〜する」というアドバイスの定番表現。

■ 主節の助動詞の使い分け
  would（〜するだろうに）：単純な推量・意志
  could（〜できるのに）：可能・能力
  might（〜かもしれないのに）：低い可能性

  例）If it were sunny, we could play outside.
      （もし晴れていたら、外で遊べるのに）

■ 直説法（普通の条件文）との違い（入試最重要の対比）
  直説法（あり得る条件）：If it rains tomorrow, I will stay home.
    → 明日雨が降る可能性は十分ある。動詞は現在形。
  仮定法（あり得ない・反する仮定）：If I were a bird, I would fly to you.
    → 私は鳥ではない（あり得ない）。動詞は過去形。

⚠注意：時・条件の副詞節では未来のことも現在形（第1章参照）。
  仮定法と混同しないこと。「実現可能か・事実に反するか」で見分ける。`,
      },
      {
        heading: '2. I wish・as if と仮定法過去完了',
        level: 'oyo',
        body: `■ I wish + 仮定法過去（〜だったらなあ）
現在の事実に反する願望を表す。
  I wish + 主語 + 動詞の過去形（were/could など）
  「（今）〜であればなあ／〜できればなあ」

  例）I wish I could speak English well.
      （英語が上手に話せたらなあ）→ 現実：うまく話せない
      I wish I were taller.
      （背が高ければなあ）→ 現実：背が高くない

★ポイント：I hope（実現可能な願望）と I wish（実現しない願望）の違い。
  I hope you will pass the exam.（合格するといいね：あり得る）
  I wish I were a doctor.（医者だったらなあ：現実は違う）

■ as if / as though + 仮定法（まるで〜であるかのように）
  He talks as if he knew everything.
  （彼はまるで何でも知っているかのように話す）→ 実際は知らない

■ 仮定法過去完了（過去の事実に反する仮定）
「（あの時）もし〜だったら、…だっただろうに」と、過去の事実と反対のことを表す。
  If + 主語 + had + 過去分詞 〜, 主語 + would/could/might + have + 過去分詞 …

  例）If I had studied harder, I would have passed the exam.
      （もっと勉強していたら、試験に合格していたのに）
      → 現実：勉強せず、合格しなかった

+----------------+----------------------------+----------------------------+
| 種類           | if節（条件）               | 主節（結論）               |
+----------------+----------------------------+----------------------------+
| 仮定法過去     | 過去形（were 等）          | would/could + 原形         |
| 仮定法過去完了 | had + 過去分詞             | would/could + have + 過去分詞|
+----------------+----------------------------+----------------------------+

■ if を使わない仮定表現
  Without your help, I couldn't have finished it.
  （あなたの助けがなければ、終えられなかっただろう）
  = If it had not been for your help, …
  With a little more time, I could do better.
  （もう少し時間があれば、もっとうまくできるのに）

⚠注意：仮定法過去完了の主節は "would have + 過去分詞"。
  × would passed × would have pass などの語順・形のミスに注意。`,
      },
      {
        heading: '3. 間接疑問文（疑問詞の後は肯定文の語順）',
        level: 'oyo',
        body: `■ 間接疑問文とは
疑問文が文の一部（目的語など）に組み込まれた形。
  例）Where does he live?（彼はどこに住んでいますか）＝独立した疑問文
      I don't know where he lives.（彼がどこに住んでいるか知らない）＝間接疑問

■ 最重要ルール：疑問詞の後ろは「肯定文の語順」に戻す
直接疑問文では〈疑問詞＋do/does/did＋主語＋動詞〉だが、
間接疑問文では〈疑問詞＋主語＋動詞〉の語順になり、do/does/did は消える。

  Where does he live?     → I know where he lives.
  What time is it?        → Do you know what time it is?
  When did she come?      → Tell me when she came.

★ポイント：三単現の s や過去形は動詞側に残る。
  Where does he live? の does は消えるが、live → lives と s が復活する。
  ⚠注意：× I know where does he live.（誤り。do/does/did を残さない）

■ Yes/No 疑問文の間接疑問（if / whether を使う）
疑問詞がない疑問文を組み込むときは if または whether（〜かどうか）を使う。
  Is he busy? → I don't know if he is busy.
  Did she call? → Tell me whether she called (or not).

  ★ポイント：whether は "whether or not" の形や、文頭・to不定詞の前でも使える。
    if は主に動詞の目的語の位置でのみ使う。

■ 間接疑問を導く主な表現
  I don't know 〜（〜を知らない）
  Do you know 〜?（〜を知っていますか）
  Tell me 〜（〜を教えて）
  I'm not sure 〜（〜か確信がない）
  Can you tell me 〜?（〜を教えてもらえますか）

■ 疑問詞が主語の場合（語順はそのまま）
疑問詞自体が主語のときは、もともと〈疑問詞＋動詞〉なので語順は変わらない。
  Who broke the window? → Do you know who broke the window?
  What happened? → Tell me what happened.

■ 丁寧な依頼としての間接疑問（会話頻出）
  Could you tell me how I can get to the station?
  （駅への行き方を教えていただけますか）
  Do you know where the restroom is?
  （お手洗いがどこにあるかご存知ですか）`,
      },
      {
        heading: '4. 話法の転換と入試問題例',
        level: 'nyushi',
        body: `■ 直接話法と間接話法
  直接話法：発言をそのまま "…" で引用する。
    He said, "I am tired."
  間接話法：発言を that 節などに直して伝える。
    He said (that) he was tired.

■ 平叙文の話法転換4ステップ
  ① コンマと引用符 " " を取り、that でつなぐ（that は省略可）
  ② 代名詞を話し手の立場に合わせて変える（I → he など）
  ③ 時制の一致：伝達動詞が過去なら、被伝達部の動詞も1つ過去にずらす
  ④ 副詞・指示語を変える（下の対応表）

+-------------+---------------+   +-------------+---------------+
| 直接話法    | 間接話法      |   | 直接話法    | 間接話法      |
+-------------+---------------+   +-------------+---------------+
| now         | then          |   | today       | that day      |
| ago         | before        |   | tomorrow    | the next day  |
| this        | that          |   | yesterday   | the day before|
| here        | there         |   | tonight     | that night    |
+-------------+---------------+   +-------------+---------------+

  例）She said, "I will meet you here tomorrow."
      → She said that she would meet me there the next day.

■ 疑問文の話法転換
伝達動詞を ask に変え、間接疑問（疑問詞＋主語＋動詞）の語順にする。
  疑問詞あり：He said to me, "Where do you live?"
    → He asked me where I lived.
  Yes/No：She said to me, "Are you busy?"
    → She asked me if I was busy.

■ 命令文の話法転換
伝達動詞を tell（命令）／ask（依頼）に変え、to不定詞を使う。
  She said to me, "Open the door."
    → She told me to open the door.
  否定命令は not to 〜：
  He said, "Don't be late." → He told me not to be late.

📝入試問題例

【問1】日本語に合うように（　）に適語を入れなさい。
「もし私が鳥なら、あなたのところへ飛んでいくのに。」
If I (　　) a bird, I (　　) fly to you.
→ 答え：were / would

【問2】次の2文をほぼ同じ意味にしなさい。
I'm sorry I can't play the piano well.
= I (　　) I (　　) play the piano well.
→ 答え：wish / could

【問3】間接疑問文に書き換えなさい。
Where does she come from? （Do you know で始める）
→ 答え：Do you know where she comes from?

【問4】次の文を間接話法に直しなさい。
He said to me, "I visited Kyoto yesterday."
→ 答え：He told me that he had visited Kyoto the day before.

【問5】（　）に入る最も適切なものを選びなさい。
If I had left home earlier, I (　　) the train.
① catch  ② will catch  ③ would have caught  ④ have caught
→ 答え：③（過去の事実に反する仮定＝仮定法過去完了）`,
      },
    ],
  },

  {
    id: 'koko_eigo_08_conjunction',
    subject: 'eigo',
    examType: 'koko',
    order: 8,
    studyPeriod: '中2',
    title: '接続詞と文構造',
    description: '接続詞と文構造を理解して複雑な文を正確に読み書きする',
    keyPoints: [
      `等位接続詞 and/but/or/so、相関接続詞 both A and B／either A or B／not only A but also B／neither A nor B`,
      `従属接続詞：時(when/while/until)／条件(if/unless)／理由(because/since/as)／譲歩(though/although)`,
      `that節は名詞節「〜ということ」。so＋形容詞/副詞＋that…「とても〜なので…」、such＋(a)＋名詞＋that`,
      `時・条件を表す副詞節では未来のことでも現在形を使う`,
      `重文（等位接続詞で結ぶ）と複文（従属節を含む）を見分け、主節と従属節を把握する`,
      `not only A but also B が主語のときは動詞をB（後ろ）に一致させる`,
    ],
    sections: [
      {
        heading: '1. 等位接続詞と相関接続詞',
        level: 'kiso',
        body: `■ 等位接続詞（対等なものをつなぐ）
語と語、句と句、節と節を対等な関係で結ぶ接続詞。

+--------+----------------+------------------------------------+
| 接続詞 | 意味           | 例文                               |
+--------+----------------+------------------------------------+
| and    | そして・〜と   | Tom and I are friends.             |
| but    | しかし         | It's small but useful.             |
| or     | または         | Tea or coffee?                     |
| so     | だから         | I was tired, so I went to bed.     |
| for    | というのは     | He stayed home, for he was sick.   |
+--------+----------------+------------------------------------+

★ポイント：and / but / or は前後で「同じ品詞・同じ形」をつなぐ（並列の一致）。
  I like reading books and playing games.（動名詞＋動名詞で揃える）
  ⚠注意：× I like reading books and to play games.（形が不揃いで誤り）

■ 命令文 + and / or（入試頻出）
  命令文, and 〜（…しなさい、そうすれば〜）
    Hurry up, and you'll catch the bus.（急げば間に合う）
  命令文, or 〜（…しなさい、さもないと〜）
    Hurry up, or you'll miss the bus.（急がないと乗り遅れる）

★ポイント：and＝「そうすれば（良い結果）」、or＝「さもないと（悪い結果）」。
  If you hurry up, you'll catch the bus. と書き換えられる。

■ 相関接続詞（ペアで使う接続詞）
  both A and B（AとBの両方）→ 動詞は複数扱い
    Both Ken and Tom are kind.
  not only A but also B（AだけでなくBも）
    She is not only smart but also kind.
  either A or B（AかBのどちらか）→ 動詞はBに一致
    Either you or I am wrong.
  neither A nor B（AもBも〜ない）→ 動詞はBに一致
    Neither he nor I was there.
  not A but B（AではなくB）
    He is not a teacher but a doctor.

⚠注意：主語に相関接続詞が来ると動詞の数の一致がややこしい。
  both A and B は常に複数。either/neither/not only … but も基本はBに合わせる。`,
      },
      {
        heading: '2. 従属接続詞（時・条件・理由・譲歩）',
        level: 'oyo',
        body: `■ 従属接続詞とは
主節に対して従属節（副詞節）を導く接続詞。「いつ・なぜ・もし・〜だけれど」などを表す。

■ 時を表す接続詞
  when（〜するとき）: When I got home, my mother was cooking.
  while（〜する間）: While I was reading, he was sleeping.
  before（〜する前に）/ after（〜した後に）
  as soon as（〜するとすぐに）: As soon as she saw me, she smiled.
  until / till（〜するまで（ずっと））: Wait here until I come back.
  since（〜して以来）: It has been raining since I got up.

★ポイント：時・条件を表す副詞節の中では未来のことも現在形（第1章の復習）。
  I will call you when I get there.（× when I will get there）

■ 条件を表す接続詞
  if（もし〜なら）: If you are free, let's go out.
  unless（〜でない限り・〜しなければ）: You'll fail unless you study.
    ★ unless = if … not。Unless it rains（＝If it doesn't rain）
  as long as（〜する限り・〜さえすれば）: You can stay as long as you are quiet.

■ 理由を表す接続詞
  because（〜だから）: I stayed home because I was sick.
  since（〜だから）: Since it was late, we went home.
  as（〜なので）: As it was raining, we canceled the trip.

  ⚠注意：because は「新情報の理由（相手が知らない理由）」、
    since / as は「既知・当然の理由」を述べるときに使う傾向がある。
    Why 〜? への答えは必ず because を使う（Since で答えない）。

■ 譲歩を表す接続詞
  although / though（〜だけれども）
    Although it was cold, he went out without a coat.
  even if（たとえ〜でも）
    Even if it rains, we will go.
  even though（〜であるにもかかわらず・事実）
    Even though he was tired, he kept working.

★ポイント：日本語につられて but を重ねない。
  ⚠注意：× Although it was cold, but he went out.（although と but の重複は誤り）
  〇 Although it was cold, he went out. / It was cold, but he went out.`,
      },
      {
        heading: '3. that 節・so〜that・such〜that',
        level: 'oyo',
        body: `■ 名詞節を導く that（〜ということ）
that 節は「〜ということ」という意味のカタマリ（名詞節）を作り、
動詞の目的語・主語・補語になる。

  目的語：I think that he is honest.（彼は正直だと思う）
  主語：That he passed the exam is true.（彼が合格したことは本当だ）
    → 形式主語 It を使うのが普通：It is true that he passed the exam.
  補語：The problem is that we have no time.

★ポイント：think / know / believe / hope / say などの後の that は省略できる。
  I think (that) he is right.

■ so + 形容詞/副詞 + that …（とても〜なので…）
  He is so kind that everyone likes him.
  （彼はとても親切なので、みんなに好かれる）
  I was so tired that I couldn't walk.
  （とても疲れていたので歩けなかった）

■ such + (a/an) + 形容詞 + 名詞 + that …
so と意味は同じだが、後ろに「名詞」が来るときは such を使う。
  It was such a beautiful day that we went for a walk.
  （とても良い天気だったので散歩に出かけた）

+------------------------+-------------------------------+
| so  + 形容詞・副詞     | so tired / so kindly          |
| such + (a) 形容詞+名詞 | such a nice day / such kind men|
+------------------------+-------------------------------+

★ポイント：so … that は「too … to 〜」で書き換えられる場合がある。
  He is so young that he can't drive.
  = He is too young to drive.（運転するには若すぎる）

■ so that 〜 can / will（〜するために・目的）
  He studies hard so that he can pass the exam.
  （合格できるように一生懸命勉強する）
  = He studies hard in order to pass the exam.
  = He studies hard to pass the exam.

⚠注意：〈so + 形容詞 + that〉（結果・程度）と〈so that + can/will〉（目的）を混同しないこと。
  形容詞や副詞が so の直後にあれば「程度・結果」、なければ「目的」。`,
      },
      {
        heading: '4. 重文・複文と文の構造把握（入試問題例）',
        level: 'nyushi',
        body: `■ 単文・重文・複文の区別
文の構造を意識すると長文読解の精度が上がる。

  単文（Simple）：主語＋動詞の組が1つ。
    I like music.
  重文（Compound）：等位接続詞（and/but/or/so）で対等な節を並べる。
    I like music, and my sister likes sports.
  複文（Complex）：従属接続詞・関係詞で主節＋従属節を作る。
    I know that he is honest.（that節は主節の一部）
    When it rains, I stay home.

★ポイント：長文では1文の中で「主節はどれか」を見抜くことが重要。
  従属節（when / if / because / that / who … など）を［　］でくくると、
  残りが主節になり、文の骨格（主語・動詞）が見えてくる。

■ 節の見つけ方（構造分析の手順）
  ① 接続詞・関係詞（that/when/because/who/which…）に印をつける
  ② その節がどこで終わるか（次の動詞や句読点）を見極める
  ③ 従属節を［　］でくくり、主節の S・V を確定する
  ④ 主節の意味を先につかみ、従属節で補足する

  例）［When I was walking in the park,］ I saw a dog ［which was very big.］
    骨格：I saw a dog（私は犬を見た）
    ＋ いつ：公園を歩いていたとき ＋ どんな犬：とても大きい犬

■ 接続詞と前置詞の混同に注意（入試頻出）
  because（接続詞）＋ 主語＋動詞：because it was cold
  because of（前置詞句）＋ 名詞：because of the cold
  though（接続詞）＋ 主語＋動詞：though he is young
  despite / in spite of（前置詞）＋ 名詞：in spite of the rain
  while（接続詞）＋ 主語＋動詞：while I was young
  during（前置詞）＋ 名詞：during the vacation

⚠注意：接続詞の後ろは〈主語＋動詞〉、前置詞の後ろは〈名詞・動名詞〉。
  × because of it was cold（誤り）／ 〇 because it was cold

📝入試問題例

【問1】ほぼ同じ意味になるように（　）に適語を入れなさい。
Study hard, or you will fail the exam.
= (　　) you (　　) study hard, you will fail the exam.
→ 答え：If / don't（unless you study hard も可）

【問2】2文を1文にしなさい。
He was very busy. He couldn't take a rest.（so … that を使って）
→ 答え：He was so busy that he couldn't take a rest.

【問3】（　）に入る最も適切なものを選びなさい。
(　　) it was raining hard, they continued the game.
① Because  ② Although  ③ If  ④ So
→ 答え：② Although（譲歩）

【問4】次の文を because of を使って書き換えなさい。
We stayed home because it was very cold.
→ 答え：We stayed home because of the very cold weather.（because of の後は名詞）`,
      },
    ],
  },

  {
    id: 'koko_eigo_09_noun_article',
    subject: 'eigo',
    examType: 'koko',
    order: 9,
    studyPeriod: '中1',
    title: '名詞・冠詞・代名詞',
    description: '名詞・冠詞・代名詞の使い分けで細かな減点を防ぐ',
    keyPoints: [
      `不可算名詞（water/information/advice/furniture）はa/an・複数形不可。数えるには a piece of〜`,
      `many/(a) few＋可算名詞、much/(a) little＋不可算名詞`,
      `冠詞 a/an（初出・1つの）、the（特定・世界に1つ・楽器）。無冠詞（食事・スポーツ・by＋交通手段）`,
      `代名詞の格：主格／所有格（名詞の前）／目的格／所有代名詞（名詞の代わり）、再帰代名詞 -self`,
      `it（特定のもの）と one（不特定の同種のもの）、another/other/the other/others の使い分け`,
      `形式主語 it（It is … to〜／that〜）、there is/are 構文`,
    ],
    sections: [
      {
        heading: '1. 可算名詞・不可算名詞と数量表現',
        level: 'kiso',
        body: `■ 可算名詞と不可算名詞
  可算名詞（数えられる）：a book / two books のように a(n) がつき複数形になる。
  不可算名詞（数えられない）：a や複数形にならない。単数扱い（動詞は is）。

■ 主な不可算名詞（入試で狙われる）
  液体・物質：water, milk, tea, coffee, bread, paper, money
  抽象概念：information, news, advice, homework, work, music, peace
  総称・集合：furniture, baggage/luggage

  ⚠注意：これらは a をつけず、複数形にもしない。
  × an information × two advices × many homeworks（すべて誤り）
  〇 a piece of information / some advice / a lot of homework

■ 不可算名詞を数える「単位表現」
  a glass of water（コップ1杯の水）
  a cup of coffee（カップ1杯のコーヒー）
  a piece of paper / advice / information（1枚の紙／1つの助言／情報）
  a slice of bread（1切れのパン）
  two glasses of milk（牛乳2杯）← 単位語 glass を複数形にする

■ 数量を表す形容詞（可算・不可算で使い分け）

+------------------+----------------+------------------+
| 意味             | 可算名詞に     | 不可算名詞に     |
+------------------+----------------+------------------+
| たくさんの       | many           | much             |
| 少しある（肯定） | a few          | a little         |
| ほとんどない     | few            | little           |
| たくさん（両方） | a lot of / lots of / plenty of   |
+------------------+----------------+------------------+

  例）many books / much water / a few friends / a little time
  ★ポイント：much は肯定文ではやや不自然で、疑問文・否定文でよく使う。
    肯定文の「たくさん」は a lot of が万能（可算・不可算どちらもOK）。

  ⚠注意：a few（少しはある・肯定的）と few（ほとんどない・否定的）の差。
    I have a few friends.（友達が数人いる）
    I have few friends.（友達がほとんどいない）`,
      },
      {
        heading: '2. 冠詞 a / an / the の使い分け',
        level: 'oyo',
        body: `■ 不定冠詞 a / an（不特定の1つ）
初めて話題に出す・不特定の「1つの」可算名詞単数の前につける。
  a：子音の「音」で始まる語の前（a book, a university ← ユ[j]の音）
  an：母音の「音」で始まる語の前（an apple, an hour ← h は無音）

  ⚠注意：つづりではなく「発音」で決める。
    a university（ユニバーシティ）／ an hour（アワー）／ an honest man

■ 定冠詞 the（特定の・お互いに分かっている）
  ① 一度出た名詞を再び指すとき
    I have a dog. The dog is white.（2回目は the）
  ② 状況から特定できるとき（この世に1つ・その場で分かる）
    Please open the window.（その部屋の窓）
  ③ 唯一のもの：the sun, the moon, the earth, the sky
  ④ 最上級・序数の前：the tallest, the first
  ⑤ 楽器を演奏する：play the piano / the guitar

■ 冠詞をつけない場合（無冠詞）
  ① スポーツ：play soccer / play tennis（← 楽器の the と対比）
  ② 食事：have breakfast / lunch / dinner
  ③ 交通・通信手段（by 〜）：by bus / by train / by e-mail
  ④ 教科・言語：study math / speak English
  ⑤ go to school / go to bed（本来の目的で使う建物・行為）

★ポイント：go to school（勉強しに行く）と go to the school（建物に用事で行く）の違い。
  My son goes to school.（通学している）
  I went to the school to meet the teacher.（学校という建物へ行った）

■ by + 交通手段は無冠詞
  I go to school by bus.（× by a bus）
  ⚠注意：ただし on foot（徒歩で）は by を使わない特別表現。`,
      },
      {
        heading: '3. 代名詞（人称・所有・再帰・it/one）',
        level: 'oyo',
        body: `■ 人称代名詞の格変化表（必ず暗記）

+--------+--------+--------+----------+-----------+
| 人称   | 主格   | 所有格 | 目的格   | 所有代名詞|
+--------+--------+--------+----------+-----------+
| 私     | I      | my     | me       | mine      |
| あなた | you    | your   | you      | yours     |
| 彼     | he     | his    | him      | his       |
| 彼女   | she    | her    | her      | hers      |
| それ   | it     | its    | it       | ―         |
| 私たち | we     | our    | us       | ours      |
| 彼ら   | they   | their  | them     | theirs    |
+--------+--------+--------+----------+-----------+

  ⚠注意：its（それの・所有格）と it's（it is / it has の短縮）を混同しない。
    The dog wagged its tail.（所有格）／ It's raining.（it is）

■ 所有代名詞（〜のもの）
  This is my book. = This book is mine.
  a friend of mine（私の友達の一人）← 二重所有格

■ 再帰代名詞（〜自身）
  myself / yourself / himself / herself / itself /
  ourselves / yourselves / themselves

  ① 目的語が主語と同じとき：I hurt myself.（自分を傷つけた）
  ② 強調：I did it myself.（自分自身でやった）
  ③ 慣用表現：by oneself（一人で）／ enjoy oneself（楽しむ）／
     help oneself to 〜（〜を自由に取って食べる）／ for oneself（独力で）

■ 指示代名詞 it / one / that の使い分け（入試頻出）
  it：前に出た「その物そのもの（特定）」
    I lost my pen. I found it under the desk.（なくしたそのペン）
  one：前に出た名詞と「同種の別の物（不特定）」
    This pen is broken. I need a new one.（別の新しいペン）
  that / those：前の名詞の繰り返しを避ける（比較文で頻出）
    The population of Tokyo is larger than that of Osaka.
    （東京の人口は大阪のそれ（人口）より多い）

★ポイント：every / each / another は単数扱い。
  Each student has a book.（× have）／ Every country has its own flag.

⚠注意：both / all / some / most などの数の一致にも注意。
  Both of them are kind.（both は複数扱い）`,
      },
      {
        heading: '4. 形式主語 it・there 構文と入試問題例',
        level: 'nyushi',
        body: `■ 形式主語の it（本当の主語を後ろに置く）
to不定詞や that 節が主語だと頭が重いので、it を仮に置いて後ろに回す。
  It is important to study every day.
   └仮主語     └────真の主語────┘
  It is difficult for me to answer this question.
   （for me ＝ to不定詞の意味上の主語）

★ポイント：It … for 人 to 〜（人が〜するのは…だ）は最頻出。
  It is easy for him to swim.（彼が泳ぐのは簡単だ）
  ⚠注意：人の性質を表す形容詞（kind/nice/foolish 等）は for でなく of。
    It is kind of you to help me.（助けてくれるとはあなたは親切だ）

■ 時間・天候・距離・明暗を表す it（非人称の it）
主語がない日本語を英語にするとき、形式的に it を主語に置く。
  時刻：It is three o'clock.
  曜日：It is Monday today.
  天候：It is raining. / It was sunny yesterday.
  距離：It is two kilometers from here to the station.
  明暗：It gets dark early in winter.

■ There is / are 構文（〜がある・いる）
「（不特定の）ものが存在する」ことを表す。be動詞は後ろの名詞に一致。
  There is a book on the desk.（単数→ is）
  There are some books on the desk.（複数→ are）
  過去：There was / There were 〜

  ⚠注意：the / my / this など「特定」を表す語がついた名詞は There 構文に使わない。
    × There is my book on the desk.
    〇 My book is on the desk.

★ポイント：There 構文の疑問文・否定文
  Is there a park near here?（近くに公園はありますか）
  There isn't any water in the bottle.（水が全然ない）
  How many students are there in your class?（何人いますか）

📝入試問題例

【問1】（　）に much か many の適切な方を入れなさい。
I don't have (　　) money, so I can't buy it.
→ 答え：much（money は不可算）

【問2】下線部を1語の代名詞にしなさい。
This bag is too small. I want a bigger ( 　 ).
→ 答え：one（同種の別の物）

【問3】ほぼ同じ意味にしなさい。
To learn a foreign language is not easy.
= (　　) is not easy (　　) learn a foreign language.
→ 答え：It / to（形式主語）

【問4】（　）に適語を入れなさい。
The weather in Okinawa is warmer than (　　) in Hokkaido.
→ 答え：that（the weather の繰り返しを避ける）

【問5】次の文の誤りを正しなさい。
There is my two pens on the table.
→ 答え：My two pens are on the table.（特定＋複数なので There 構文は不可）`,
      },
    ],
  },

  {
    id: 'koko_eigo_10_sentence_types',
    subject: 'eigo',
    examType: 'koko',
    order: 10,
    studyPeriod: '中1',
    title: '文の種類（疑問文・命令文・感嘆文）',
    description: '疑問文・命令文・感嘆文・付加疑問など文の形を完全整理する',
    keyPoints: [
      `疑問文：be動詞は主語の前へ、一般動詞は do/does/did＋主語＋原形、疑問詞は文頭。間接疑問は平叙文の語順`,
      `命令文は動詞の原形で始める。否定は Don't＋原形、Let's＋原形「〜しよう」`,
      `感嘆文 What(＋a/an)＋形容詞＋名詞！／How＋形容詞・副詞！`,
      `付加疑問：肯定文→否定の付加(, isn't it?)、否定文→肯定の付加(, do you?)`,
      `否定疑問文の答えは中身で判断（する＝Yes、しない＝No）で、日本語の「はい/いいえ」と逆になる`,
      `選択疑問文 A or B は Yes/No で答えず、どちらかを答える`,
    ],
    sections: [
      {
        heading: '1. 疑問文の作り方（be動詞・一般動詞・疑問詞）',
        level: 'kiso',
        body: `■ 疑問文の基本ルール
  be動詞の文：be動詞を主語の前に出す。
    You are a student. → Are you a student?
  一般動詞の文：do/does/did を文頭に置き、動詞は原形に戻す。
    You play tennis. → Do you play tennis?
    She plays tennis. → Does she play tennis?（plays → play）
    He went there. → Did he go there?（went → go）

★ポイント：助動詞（can/will/must 等）がある文は、その助動詞を前に出す。
  He can swim. → Can he swim?

■ 疑問詞（WH語）で始まる疑問文
情報を尋ねる疑問文は〈疑問詞 ＋ 疑問文の語順〉。答えは Yes/No でなく具体的に。

+--------+-------------+---------------------------------+
| 疑問詞 | 尋ねる内容  | 例文                            |
+--------+-------------+---------------------------------+
| what   | 何          | What is this?                   |
| who    | 誰          | Who is that man?                |
| whose  | 誰の        | Whose bag is this?              |
| which  | どれ・どちら| Which do you like, tea or coffee?|
| when   | いつ        | When did you come?              |
| where  | どこ        | Where do you live?              |
| why    | なぜ        | Why are you late?               |
| how    | どのように  | How do you go to school?        |
+--------+-------------+---------------------------------+

■ 疑問詞が主語になる疑問文（do/does を使わない）
who / what / which が主語のときは〈疑問詞＋動詞〉で、do/does/did は不要。
  Who broke the window?（誰が窓を割ったの）← × Who did break …
  What happened?（何が起きたの）

■ how を使った重要表現（数量・程度）
  How many + 複数名詞（いくつ）: How many books do you have?
  How much（いくら・どのくらい）: How much is this? / How much water?
  How long（どのくらいの長さ・期間）: How long is the bridge?
  How old（何歳）: How old are you?
  How far（どのくらい遠い）: How far is it to the station?
  How often（どのくらいの頻度）: How often do you play tennis?

★ポイント：How many の後は「複数名詞」、How much の後は「不可算名詞」。
  ⚠注意：× How many money（誤り）→ How much money`,
      },
      {
        heading: '2. 命令文・感嘆文',
        level: 'kiso',
        body: `■ 命令文（〜しなさい）
主語 You を省略し、動詞の原形で始める。
  Open the door.（ドアを開けなさい）
  Be quiet.（静かにしなさい）← be動詞の命令文は Be で始める

■ 否定の命令文（〜してはいけない）
  Don't + 動詞の原形。
  Don't run here.（ここで走ってはいけない）
  Don't be afraid.（怖がらないで）

■ 丁寧な命令・依頼
  Please をつける：Please sit down. / Sit down, please.
  Let's + 原形（〜しましょう）：Let's play soccer.
    → 否定は Let's not 〜（〜するのはやめよう）

★ポイント：Let me / Let him など〈Let ＋ 目的語 ＋ 原形〉は「〜させる」（使役）。
  Let me help you.（手伝わせてください）

■ 感嘆文（なんて〜だろう！）
驚き・感動を表す。What と How の2種類があり、後ろに来る品詞で使い分ける。

  What ＋ (a/an) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞!
    What a beautiful flower this is!（なんて美しい花だろう）
    What kind people they are!（複数名詞なので a はつかない）

  How ＋ 形容詞/副詞 ＋ 主語 ＋ 動詞!
    How beautiful this flower is!（なんて美しいのだろう）
    How fast he runs!（なんて速く走るのだろう）

+------------------------------+-------------------------------+
| 後ろに「名詞」がある → What  | What a big dog!               |
| 後ろが「形容詞/副詞」→ How   | How big this dog is!          |
+------------------------------+-------------------------------+

★ポイント：主語＋動詞は省略されることも多い。
  What a surprise! / How wonderful!

⚠注意：What と How の選び方は「名詞があるかどうか」で判断。
  × How a beautiful flower!（名詞 flower があるので What）
  〇 What a beautiful flower!`,
      },
      {
        heading: '3. 付加疑問文・否定疑問文・選択疑問文',
        level: 'oyo',
        body: `■ 付加疑問文（〜だよね？）
文末につけて「確認・同意」を求める。「肯定文→否定の付加」「否定文→肯定の付加」。
  You are a student, aren't you?（あなたは学生ですよね）
  He can't swim, can he?（彼は泳げませんよね）
  She likes music, doesn't she?（一般動詞は do/does/did を使う）
  Tom went home, didn't he?

★ポイント：付加疑問文の作り方3ステップ
  ① 本文の（助）動詞を使う（be動詞→be動詞、一般動詞→do/does/did、助動詞→その助動詞）
  ② 肯定⇔否定を逆にする
  ③ 主語を代名詞にする（Tom → he、the books → they）

■ 命令文・Let's の付加疑問（特別な形）
  命令文 → , will you?（〜してくれる？）
    Open the window, will you?
  Let's 〜 → , shall we?（〜しましょうよ）
    Let's go, shall we?

■ 否定疑問文（〜ではないの？）
be動詞や助動詞の否定短縮形で始める。驚き・確認のニュアンス。
  Don't you like it?（それが好きじゃないの？）
  Aren't you tired?（疲れていないの？）

★ポイント：否定疑問文への Yes/No の答え方は日本語と逆になるので超注意。
  Don't you like coffee?（コーヒー好きじゃないの？）
  ― Yes, I do.（いいえ、好きです）← 好きなら必ず Yes
  ― No, I don't.（はい、好きではありません）← 好きでないなら必ず No

  ⚠注意：英語は「答えの中身が肯定なら Yes、否定なら No」。質問の形は関係ない。

■ 選択疑問文（AですかBですか）
or で選択肢を示す疑問文。Yes/No では答えない。文末は下げ調子。
  Which do you like, tea or coffee? ― I like tea.
  Is this a pen or a pencil? ― It's a pen.

■ 間接疑問との複合（会話頭出）
  Could you tell me whether he is coming or not?
  （彼が来るかどうか教えてもらえますか）`,
      },
      {
        heading: '4. 応答・会話定型と入試問題例',
        level: 'nyushi',
        body: `■ 疑問文への正しい応答パターン
  be動詞：Are you 〜? → Yes, I am. / No, I'm not.
  一般動詞：Does he 〜? → Yes, he does. / No, he doesn't.
  助動詞：Can she 〜? → Yes, she can. / No, she can't.
  疑問詞：Yes/No で答えず、具体的に答える。
    What time is it? ― It's ten o'clock.

■ 提案・依頼への応答（会話問題頻出）
  Shall I 〜?（〜しましょうか）― Yes, please. / No, thank you.
  Shall we 〜?（一緒に〜しましょうか）― Yes, let's. / Sounds good.
  Will/Would you 〜?（〜してくれますか）― Sure. / Of course. / I'm sorry, I can't.
  May I 〜?（〜してもいいですか）― Sure. / Go ahead. / I'm afraid you can't.

■ 電話・買い物などの定型表現
  電話：May I speak to Ken? / Speaking.（私です）/ Hold on, please.（お待ちを）
  買い物：May I help you? / I'm just looking.（見ているだけです）/
         How much is it? / I'll take it.（それを買います）
  道案内：How can I get to 〜? / Go straight and turn left at the corner.

★ポイント：会話の空所補充は「直後の応答」から逆算するのがコツ。
  空所の後に "Sure, here you are."（はい、どうぞ）があれば、
  空所は「物を求める依頼（Can I borrow …? など）」だと分かる。

📝入試問題例

【問1】付加疑問文を完成させなさい。
You didn't call me last night, (　　) (　　)?
→ 答え：did you（否定文には肯定の付加疑問）

【問2】適切な感嘆文にしなさい。
This is a very interesting book.（What で始める）
→ 答え：What an interesting book this is!

【問3】次の質問に、あなたがコーヒー好きだと仮定して答えなさい。
Don't you like coffee?
→ 答え：Yes, I do.（好きなら Yes）

【問4】（　）に入る最も適切なものを選びなさい。
A: (　　) is the weather in London?
B: It's cloudy and cold.
① What  ② How  ③ Which  ④ Where
→ 答え：② How（天候・様子を尋ねる How）

【問5】日本語に合うように語を並べ替えなさい。
「窓を開けてくれませんか。」
( you / open / will / the window / , )?
→ 答え：Open the window, will you?（命令文＋付加疑問）`,
      },
    ],
  },

  {
    id: 'koko_eigo_11_pronunciation',
    subject: 'eigo',
    examType: 'koko',
    order: 11,
    studyPeriod: '中3秋〜直前',
    title: '発音・アクセント・リスニング対策',
    description: '発音・アクセント問題とリスニングを得点源にするための対策',
    keyPoints: [
      `発音問題は下線部の母音・子音の音が同じか異なるかを判別（-edの発音/t//d//id/、-s/-esの/s//z//iz/）`,
      `アクセントは -tion/-sion/-ic の直前の音節、-ee/-eer は語尾に強勢が来る傾向`,
      `音の変化を知る：連結（リンキング）・脱落・同化、機能語の弱形`,
      `リスニングは放送前に設問・選択肢・イラストに目を通す`,
      `数字・時刻・固有名詞・値段の聞き取りに注意する`,
      `品詞でアクセントが変わる語（récord 名詞／recórd 動詞、présent／presént）`,
    ],
    sections: [
      {
        heading: '1. 発音問題（下線部の音が同じ／異なる）',
        level: 'kiso',
        body: `■ 発音問題の出題形式
「下線部の発音が他と異なるものを選ぶ」形式が多い。
つづりが同じでも音が違う組み合わせを覚えておくのがカギ。

■ ea のつづりの発音（頻出）
  [iː]（イー）: eat, sea, meat, teacher, please, read（現在形）
  [e]（エ）: bread, head, breakfast, ready, weather, sweater
  [eɪ]（エイ）: great, break, steak
  ⚠注意：read は現在形 [iː]、過去形 read は [e]（レッド）と読む。

■ ou / ow のつづりの発音
  [aʊ]（アウ）: house, mouth, cloud, town, now, how
  [ʌ]（ア）: country, young, enough, touch, cousin, double
  [oʊ]（オウ）: know, snow, low, own, though
  [uː]（ウー）: group, soup, you

■ oo のつづりの発音
  [uː]（長いウー）: food, moon, school, room, cool
  [ʊ]（短いウ）: book, look, good, foot, cook, wood
  例外 [ʌ]: blood, flood（ブラッド、フラッド）

■ 語尾 -ed の発音3パターン（規則動詞の過去形）
+------------------+------------------------------+---------------------------+
| 直前の音         | -ed の発音                   | 例                        |
+------------------+------------------------------+---------------------------+
| [t] [d] の音     | [id]（イド）                 | wanted, needed, visited   |
| 無声音（k,p,s等）| [t]（トゥ）                   | worked, stopped, watched  |
| 有声音・母音     | [d]（ドゥ）                   | played, called, opened    |
+------------------+------------------------------+---------------------------+

★ポイント：wanted/needed のように「t/d の音」で終わる動詞だけ [id]（音節が増える）。
  それ以外は無声音なら [t]、有声音・母音なら [d]。

■ 語尾 -s / -es の発音3パターン（複数形・三単現）
  [iz]（イズ）: 語尾が s,z,sh,ch,ge の音 → buses, watches, boxes, uses
  [s]（ス）: 無声音 → books, cups, cats
  [z]（ズ）: 有声音・母音 → dogs, boys, plays

⚠注意：発音問題は「つづり」でなく「音」で判断する。
  cook の oo は [ʊ]、school の oo は [uː] のようにつづりが同じでも音が違う。`,
      },
      {
        heading: '2. アクセント（強勢）の位置',
        level: 'oyo',
        body: `■ アクセント問題の出題形式
「最も強く読む音節（第1アクセント）の位置が他と異なる語を選ぶ」形式。
規則を知っていれば知らない単語でも推測できる。

■ 2音節語の傾向
  名詞・形容詞は「前（第1音節）」を強く読む傾向。
    PRES-ent（名詞：贈り物）, HAP-py, MOUN-tain, DOC-tor
  動詞は「後ろ（第2音節）」を強く読む傾向。
    pre-SENT（動詞：提示する）, be-GIN, for-GET, a-GREE

  ★同じつづりで品詞により強勢が動く語（入試頻出）
    RE-cord（名詞：記録）／ re-CORD（動詞：記録する）
    PRO-gress（名詞）／ pro-GRESS（動詞）
    IN-crease（名詞）／ in-CREASE（動詞）

■ 語尾で強勢の位置が決まるパターン
  -tion / -sion → 直前の音節を強く読む
    in-for-MA-tion, ques-TION, de-CI-sion, tele-VI-sion
  -ic / -ical → 直前の音節を強く読む
    e-co-NOM-ic, sci-en-TIF-ic, his-TOR-i-cal, e-LEC-tric
  -ity → 直前の音節を強く読む
    a-BIL-i-ty, ac-TIV-i-ty, com-MU-ni-ty
  -ese / -ee / -eer / -oo → その語尾自体を強く読む
    Jap-a-NESE, engi-NEER, bam-BOO, after-NOON

■ 日本語の発音につられやすい注意語（カタカナと違う）
  ca-LEN-dar（カレンダー）／ vol-un-TEER（ボランティア）／
  al-CO-hol（アルコール）／ e-LEV-a-tor（エレベーター）／
  in-ter-VIEW（インタビュー）／ ba-NAN-a（バナナ）／
  ca-FE-te-ri-a（カフェテリア）／ com-PU-ter（コンピューター）

★ポイント：まず語尾（-tion, -ic, -ity など）を見て規則が使えるか確認する。
  規則語尾がなければ、名詞・形容詞は前寄り、動詞は後ろ寄りと当たりをつける。`,
      },
      {
        heading: '3. リスニングで狙われる音の変化',
        level: 'oyo',
        body: `■ リスニングが「聞き取れない」理由
単語1つ1つは知っていても、文になると音がつながったり消えたりして
聞こえ方が変わる。この「音の変化」を知ることが聞き取りの第一歩。

■ 連結（リンキング）：子音＋母音がつながる
  前の語の語尾の子音と、次の語の頭の母音がつながって1語のように聞こえる。
  an apple → ア「ナ」ップル
  Stand up. → スタン「ダ」ップ
  Not at all. → ナ「ラ」ロー

■ 脱落（リダクション）：音が消える・弱まる
  語尾の [t][d][p][k] などの破裂音は、次が子音だと聞こえにくくなる。
  good boy → グッ(ド)ボーイ／ next time → ネクス(ト)タイム
  文中の h はよく脱落：Tell him. → テリム

■ 同化：隣り合う音が影響し合って別の音になる
  Did you 〜? → ディジュー／ Would you 〜? → ウジュー
  meet you → ミーチュー／ this year → ディシヤー

■ 弱形：機能語（前置詞・冠詞・助動詞）は弱く速く読まれる
  can, at, for, to, and, of, a, the などは弱く発音される。
  a cup of tea → ア カッ「パ」ティー（of が「ア」に弱化）
  ★ポイント：強く読まれる語（内容語：名詞・動詞・形容詞）に集中して聞くと
    文の意味がつかめる。弱い機能語は全部聞き取ろうとしなくてよい。

■ 数字・時刻の聞き分け（頻出）
  -teen（13〜19）と -ty（20〜90）の区別に注意。
  thirteen [サーティーン：後ろにアクセント] ／ thirty [サーティ：前にアクセント]
  fifteen ／ fifty、nineteen ／ ninety も同様。
  ⚠注意：アクセントの位置と語尾の音（-n が付くか）で聞き分ける。`,
      },
      {
        heading: '4. リスニング設問の解き方と練習法',
        level: 'nyushi',
        body: `■ リスニング試験の典型的な設問タイプ
  ① 絵・グラフ選択：説明を聞いて合う絵や表を選ぶ
  ② 応答選択：発言に対する自然な応答を選ぶ
  ③ 対話＋問い：短い会話を聞いて内容の質問に答える
  ④ 長め英文＋問い：スピーチやアナウンスを聞いて答える
  ⑤ 書き取り・要約：聞いた内容を英語や日本語で書く

■ 放送前の「先読み」で差がつく
  ① 選択肢や絵を放送が始まる前に見ておく
  ② 選択肢の違い（時刻・場所・人物・数）に印をつけ、
     「何を聞き取ればよいか」を絞る
  ③ 疑問詞（When/Where/Who/Why/How）を設問で確認しておく

★ポイント：選択肢を先読みすると「聞くべき情報」が事前に分かり、
  放送を1回で正確に聞き取れる。

■ メモの取り方
  ① 全文書き取ろうとしない（間に合わない）
  ② キーワードだけ短く：数字・曜日・場所・人名・したこと
  ③ 記号・矢印を活用：↑上がる ↓下がる ×否定 →変化

■ 応答問題のコツ
  疑問文の「疑問詞」を聞き取れれば応答が絞れる。
    When 〜? → 時（at seven, tomorrow など）を答える選択肢
    How much 〜? → 値段・量を答える選択肢
    Why 〜? → Because 〜 で始まる選択肢
  提案（Shall we 〜? / Why don't we 〜?）には Yes, let's. / Sounds good. など。

■ 家庭でできる練習法
  ① シャドーイング：音声を追いかけて声に出す（0.5秒遅れで真似る）
  ② ディクテーション：短い文を聞いて書き取る（聞けない箇所が弱点）
  ③ オーバーラッピング：スクリプトを見ながら音声に重ねて音読
  ④ 毎日少しずつ（1日10分でも）英語の音に触れる習慣をつける

⚠注意：リスニングは直前の詰め込みが効きにくい分野。
  毎日「英語の音」に触れて耳を慣らすことが最大の対策。

📝入試問題例（発音・アクセント）

【問1】下線部の発音が他と異なるものを選びなさい。
① br(ea)d  ② h(ea)d  ③ t(ea)cher  ④ w(ea)ther
→ 答え：③（teacher は [iː]、他は [e]）

【問2】最も強く読む音節の位置が他と異なる語を選びなさい。
① vol-un-teer  ② after-noon  ③ Jap-a-nese  ④ beau-ti-ful
→ 答え：④（beautiful は第1音節、他は最後の音節を強く読む）

【問3】下線部 -ed の発音が他と異なるものを選びなさい。
① want(ed)  ② play(ed)  ③ call(ed)  ④ open(ed)
→ 答え：①（wanted は [id]、他は [d]）

【問4】次の対話の応答として最も適切なものを選びなさい。（放送文想定）
"How long does it take to get to the station?"
① About ten minutes.  ② It's over there.  ③ By bus.  ④ At three.
→ 答え：①（How long＝所要時間を尋ねている）`,
      },
    ],
  },

  {
    id: 'koko_eigo_12_perfect_advanced',
    subject: 'eigo',
    examType: 'koko',
    order: 12,
    title: '現在完了・過去完了の発展と時制の一致',
    description: '過去完了形と時制の一致のルールを理解し、複雑な時間関係を正確に表現する',
    keyPoints: [
      `過去完了 had＋過去分詞は「過去のある時点までに完了・経験・継続していたこと」（大過去）を表す`,
      `現在完了は「今まで」、過去完了は「（過去の）あの時まで」という基準点の違いで使い分ける`,
      `before/after/by the time/when など時の基準点を示す語と過去完了は相性がよい`,
      `時制の一致の基本：主節が過去形のとき、従属節の動詞も1つ前の時制にずらす`,
      `時制の一致の例外：普遍の真理・ことわざ・現在も変わらぬ習慣は現在形のまま`,
      `had＋過去分詞は仮定法過去完了と同形なので、if節の有無・文脈で見分ける`,
      `過去完了進行形 had been -ing は「過去のある時点まで動作が継続していた」ことを強調する`,
    ],
    sections: [
      {
        heading: '1. 過去完了形の基本（大過去の考え方）',
        level: 'kiso',
        body: `■ 過去完了形とは
過去完了形（had ＋ 過去分詞）は「過去のある時点よりも、さらに前に起きたこと」を表す。
基準となる過去の時点があり、それ「より前」の出来事を表すときに使う（これを「大過去」と呼ぶ）。

  例）When I arrived at the station, the train had already left.
      （私が駅に着いたとき、電車はすでに出発していた）
      → 基準点：私が駅に着いた（過去）
      → それより前：電車が出発した（大過去＝過去完了）

★ポイント：時間の流れをイメージすると分かりやすい。
  had 出発した ―――――― 私が到着した（過去形）―――――― 今
  　　（過去完了）              （過去形）

■ 過去完了の3用法（現在完了と同じ枠組みで理解する）
  完了・結果：The train had already left when I got there.
    （私がそこに着いたときには、電車はすでに出発していた）
  経験：I had never seen snow before I visited Hokkaido.
    （北海道を訪れる前は、雪を見たことがなかった）
  継続：She had lived in Osaka for ten years before she moved to Tokyo.
    （東京に引っ越す前、彼女は10年間大阪に住んでいた）

■ 基準点を示す語句（過去完了と相性がよい表現）
  before（〜する前に）: I had finished my homework before dinner.
  after（〜した後に）: After I had cleaned my room, I went out.
  by the time（〜するまでには）: By the time he came, we had eaten all the cake.
  when（〜したとき）: When she woke up, it had already stopped raining.

⚠注意：before / after を使う場合、前後関係が接続詞自体で明確なので、
  現在では過去形で代用されることも多い（I had finished before dinner. → I finished before dinner.）。
  ただし入試では過去完了の形そのものを問う問題が多いので、正しく作れるようにしておく。`,
      },
      {
        heading: '2. 現在完了・過去完了・単純過去の使い分け',
        level: 'oyo',
        body: `■ 3つの時制の基準点の違い
  単純過去：基準点なし。「過去のある時点で起きたこと」をただ述べる。
  現在完了：基準点は「現在」。「今までに」起きたこと。
  過去完了：基準点は「過去のある時点」。「その時までに」起きたこと。

+------------+------------------+---------------------------------------+
| 時制       | 基準点           | 例文                                    |
+------------+------------------+---------------------------------------+
| 単純過去   | なし（過去の一点）| I visited Kyoto last year.             |
| 現在完了   | 現在             | I have visited Kyoto three times.      |
| 過去完了   | 過去のある時点   | I had visited Kyoto twice before I     |
|            |                  | moved to Tokyo.                        |
+------------+------------------+---------------------------------------+

■ 具体例で比較する
  She has lost her key. （彼女は鍵をなくした＝今も見つかっていない：現在完了）
  She lost her key yesterday. （昨日鍵をなくした＝単なる過去の事実：単純過去）
  She had lost her key when she got home.
  （家に着いたとき、鍵をすでになくしていた＝家に着く前の時点で完了：過去完了）

★ポイント：文中に「2つの過去の出来事」が出てくるときは、
  時間的に「先に起きた方」を過去完了、「後に起きた方」を単純過去にする。

  例）I lost the ticket that I had bought yesterday.
      （私は昨日買ったチケットをなくした）
      → 買った（先）＝ had bought、なくした（後）＝ lost

⚠注意：単に「時間の前後関係」がなく、2つの動作がほぼ同時・並列の場合は
  両方とも単純過去でよい（無理に過去完了にしない）。
  I opened the door and turned on the light.（同時的な連続動作）`,
      },
      {
        heading: '3. 時制の一致のルールと例外',
        level: 'oyo',
        body: `■ 時制の一致とは
主節（伝える側）の動詞が過去形のとき、従属節（伝えられる内容）の動詞も
「1つ前の時制」にずらすというルール。間接話法・that節などで重要。

  主節が現在形：I think that he is busy.（彼が忙しいと思う）
  主節が過去形：I thought that he was busy.（彼が忙しいと思った）
  　　　　　　　　　　　is → was（現在形→過去形）

+----------------+----------------------+
| 元の時制       | 一致後の時制        |
+----------------+----------------------+
| 現在形         | 過去形               |
| 現在完了形     | 過去完了形           |
| 過去形         | 過去完了形           |
| will           | would                |
| can            | could                |
+----------------+----------------------+

  例）She said, "I have finished my homework."
      → She said that she had finished her homework.
      He said, "I will call you tomorrow."
      → He said that he would call me the next day.

■ 時制の一致を受けない場合（入試最重要の例外）
  ① 普遍的な真理・科学的事実：常に現在形のまま
    The teacher said that the earth goes around the sun.
    （地球が太陽の周りを回ることは常に真実なので goes のまま）
  ② 現在も変わらない習慣・事実
    She said that she plays tennis every Sunday.（今も続く習慣なら現在形も可）
  ③ ことわざ・格言
    He said that honesty is the best policy.

★ポイント：「今も変わらず真実かどうか」で判断する。
  過去に一度だけ成立した事実（過去のその時点の状態）は過去形に一致させるが、
  時代を超えて変わらない真理は現在形のままでよい。

⚠注意：時制の一致は「主節が過去形のとき」だけ発生する。
  主節が現在形（I think / I know など）のときは、そのままの時制でよい。`,
      },
      {
        heading: '4. 過去完了進行形と仮定法との見分け方',
        level: 'oyo',
        body: `■ 過去完了進行形（had been + -ing）
「過去のある時点まで、動作がずっと継続していた」ことを強調するときに使う。
現在完了進行形（have been -ing）の「過去バージョン」と考えるとよい。

  現在完了進行形：I have been studying for two hours.（今まで2時間ずっと勉強している）
  過去完了進行形：I had been studying for two hours when she called.
    （彼女が電話してきたとき、私はすでに2時間ずっと勉強していた）

  例）It had been raining for a week before the flood happened.
      （洪水が起きる前、1週間ずっと雨が降り続いていた）

★ポイント：過去完了進行形は「動作の継続」を強調し、
  過去完了（単純形）は「完了・結果」に重点があることが多い。
  He had worked there for ten years.（10年間そこで働いていた＝継続の事実）
  He had been working all day, so he was very tired.（一日中働き続けていたので疲れていた＝動作の継続を強調）

■ had + 過去分詞の2つの顔（過去完了 vs. 仮定法過去完了）
had ＋ 過去分詞は「過去完了」と「仮定法過去完了（If節）」の両方で使われる同じ形。
文脈と if の有無で見分ける。

  過去完了（事実）：He had finished his work before I arrived.
    （彼は私が着く前に仕事を終えていた＝実際にあったこと）
  仮定法過去完了（反実仮想）：If he had finished his work, he could have gone home.
    （もし仕事を終えていたら、家に帰れたのに＝実際は終えていない）

★ポイント：if があれば仮定法、if がなく単に時間の前後関係を述べていれば過去完了。
  ⚠注意：wish や as if の後の had + 過去分詞も仮定法（過去の事実に反する願望）。
    I wish I had studied harder.（もっと勉強していればなあ＝実際はしなかった）

■ 時制の一致と仮定法の複合問題（入試上位校頻出）
  He told me that he had lived in London for five years.
  （彼はロンドンに5年間住んでいたと私に言った）
  → 伝達動詞 told（過去）に一致して had lived（過去完了）になっている。
  これは「時制の一致」であって仮定法ではない点に注意。`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】（　）に適切な形を入れなさい。
When I got to the theater, the movie (already / start).
→ 答え：had already started

【問2】日本語に合うように英文を完成させなさい。
「彼女が来る前に、私はすでに宿題を終えていた。」
I (　　) (　　) my homework before she came.
→ 答え：had finished

【問3】次の文を間接話法に直しなさい。
He said, "I have lost my wallet."
→ 答え：He said that he had lost his wallet.

【問4】（　）に入る最も適切なものを選びなさい。
Our teacher told us that light (　　) faster than sound.
① traveled  ② travels  ③ had traveled  ④ would travel
→ 答え：② travels（普遍の科学的事実は時制の一致を受けない）

【問5】2つの文を、時間の前後関係が分かるように1文にしなさい。
Ken lost the pen. His father had given it to him.
→ 答え：Ken lost the pen that his father had given him.
（あげた方が先＝過去完了、なくした方が後＝単純過去）

【問6】（　）に入る最も適切なものを選びなさい。
By the time we arrived, the concert (　　) already (　　).
① has / begun  ② had / begun  ③ have / begun  ④ will / begin
→ 答え：② had / begun（by the timeは過去完了と共起しやすい）`,
      },
    ],
  },

  {
    id: 'koko_eigo_13_participial_advanced',
    subject: 'eigo',
    examType: 'koko',
    order: 13,
    title: '分詞構文の発展',
    description: '分詞構文の完了形・受動態・独立分詞構文まで踏み込んで読み書きに使えるようにする',
    keyPoints: [
      `分詞構文の基本の復習：接続詞・主語を省き動詞を-ingに（Being/Havingは省略可）`,
      `完了形の分詞構文 Having＋過去分詞は、主節よりも前の時点の出来事を表す`,
      `受動態の分詞構文（Being＋過去分詞、Havingbeen＋過去分詞）は Being を省略できる`,
      `否定の分詞構文は Not/Never を分詞の直前に置く`,
      `独立分詞構文：従属節と主節の主語が異なるとき、分詞の前に主語を残す`,
      `with＋名詞＋分詞（付帯状況）：「〜を…しながら／〜が…の状態で」`,
      `慣用的独立分詞構文（generally speaking等）は主語が一致しなくても使う`,
    ],
    sections: [
      {
        heading: '1. 分詞構文の復習と基本の作り方',
        level: 'kiso',
        body: `■ 分詞構文とは（復習）
副詞節（接続詞＋主語＋動詞）を分詞（-ing/過去分詞）で書き換えた簡潔な表現。
書き言葉・入試の並べ替え問題で頻出。

■ 作り方の4ステップ（復習）
  ① 接続詞を省略する
  ② 主節と主語が同じなら省略する
  ③ 動詞を -ing 形にする
  ④ 否定は Not/Never を分詞の直前に置く

  例）Because she didn't know the way, she asked a police officer.
    → ① Because省略 ② she省略 ③ didn't know→Not knowing
    → Not knowing the way, she asked a police officer.
    （道を知らなかったので、彼女は警察官に尋ねた）

★ポイント：分詞構文の意味は文脈で判断する（時・理由・条件・付帯状況・譲歩）。
  Living near the station, I can walk to school.
  （駅の近くに住んでいるので、学校まで歩ける）→ 理由
  Turning left, you will find the shop.
  （左に曲がれば、その店が見つかる）→ 条件

■ 接続詞を残す分詞構文（意味を明確にしたいとき）
意味があいまいになりやすい場合、接続詞を残したまま分詞構文にすることもある。
  While walking in the park, I met an old friend.
  （公園を歩いている間に、旧友に会った）
  Before leaving the house, please turn off the lights.
  （家を出る前に、電気を消してください）

⚠注意：分詞構文は「主節の主語と従属節の主語が同じ」ときにしか
  主語を省略できない。異なる場合は次の独立分詞構文で扱う。`,
      },
      {
        heading: '2. 完了形・受動態の分詞構文',
        level: 'oyo',
        body: `■ 完了形の分詞構文（Having ＋ 過去分詞）
主節の動詞よりも「前の時点」で起きたことを表すときに使う
（過去完了形を分詞構文にした形と考えるとよい）。

  例）Having finished my homework, I went out to play.
      （宿題を終えたので、私は遊びに出かけた）
      = After I had finished my homework, I went out to play.

★ポイント：主節と同時（あるいはその後）の出来事なら単純形（-ing）、
  主節より前の出来事なら完了形（Having＋過去分詞）を使う。

  同時：Seeing the teacher, the students stood up.
    （先生を見て、生徒たちは立ち上がった＝ほぼ同時）
  前：Having seen the movie before, I knew the ending.
    （以前その映画を見たことがあったので、結末を知っていた＝見た方が先）

■ 受動態の分詞構文（Being／Havingbeen ＋ 過去分詞）
元の文が受動態のとき、分詞構文にすると Being／Having been で始まるが、
これらはしばしば省略される。

  例）Being written in easy English, this book is popular with beginners.
      → Written in easy English, this book is popular with beginners.
      （やさしい英語で書かれているので、この本は初心者に人気がある）
      = As it is written in easy English, ...

  完了受動態：Having been raised in Kyoto, she knows the city well.
    → 過去分詞から始まる場合、Having been は省略されることが多いが、
      意味は「〜され（てい）たので」という受動＋完了。

★ポイント：分詞構文の先頭が過去分詞（-ed/不規則形）から始まっていたら、
  「Being/Having been が省略された受動態の分詞構文」だと判断する。

⚠注意：現在分詞（-ing）で始まる分詞構文と、過去分詞から始まる分詞構文を混同しない。
  Surprised at the news, she couldn't speak.（驚かされた＝受動＝過去分詞）
  Surprising everyone, he won the race.（驚かせた＝能動＝現在分詞）`,
      },
      {
        heading: '3. 独立分詞構文（主語が主節と異なる場合）',
        level: 'oyo',
        body: `■ 独立分詞構文とは
分詞構文の主語が主節の主語と異なるとき、分詞の前にその主語を残す。
これを「独立分詞構文」と呼ぶ。

  例）Because it was raining, we stayed home.
    → ① Because省略 ② 主語が異なるので it を残す ③ was→being
    → It being rainy, we stayed home.（あまり一般的でないため書き言葉限定）

  より自然な入試頻出パターン：
    As the sun had set, we went back to the hotel.
    → The sun having set, we went back to the hotel.
    （日が沈んでしまったので、私たちはホテルに戻った）

★ポイント：独立分詞構文は硬い書き言葉に多く、会話ではあまり使われない。
  入試では「読解で出会う」ことの方が「作文で書く」ことより多い。

■ with ＋ 名詞 ＋ 分詞（付帯状況構文）
「〜を…した状態で／〜が…しながら」という付帯状況を表す、独立分詞構文に近い重要構文。
  with ＋ 名詞 ＋ 現在分詞（〜が…している状態で）
  with ＋ 名詞 ＋ 過去分詞（〜が…された状態で）

  例）He was standing with his arms crossed.
      （彼は腕を組んだ状態で立っていた）
      She was reading a book with the TV on.
      （テレビをつけたまま本を読んでいた）
      Don't speak with your mouth full.
      （口を食べ物でいっぱいにしたまま話さないで）

★ポイント：名詞と分詞の間には「主語と動詞」のような能動・受動の関係がある。
  his arms crossed（腕は組まれる側→過去分詞）
  the TV on（on は形容詞・副詞なので分詞ではないが同じ構文で使われる）

⚠注意：with の後の名詞と分詞の能動・受動の関係を正しく判断する。
  with his eyes closed（目を閉じた状態で＝閉じられる→過去分詞）
  with his dog running beside him（犬が走っている状態で＝走る→現在分詞）`,
      },
      {
        heading: '4. 慣用的独立分詞構文と否定の分詞構文',
        level: 'oyo',
        body: `■ 慣用的独立分詞構文（主語が一致しなくても使う決まり文句）
以下は主節の主語と分詞の意味上の主語が一致していなくても、
慣用的にそのまま使われる表現。入試の会話文・論説文で頻出。

  generally speaking（一般的に言えば）
    Generally speaking, Japanese people are polite.
  frankly speaking（率直に言えば）
    Frankly speaking, I don't like this plan.
  strictly speaking（厳密に言えば）
    Strictly speaking, a tomato is a fruit.
  judging from 〜（〜から判断すると）
    Judging from the sky, it will rain soon.
  considering 〜（〜を考慮すると）
    Considering his age, he runs very fast.
  speaking of 〜（〜と言えば）
    Speaking of Kyoto, have you ever been there?

★ポイント：これらは「話し手（一般論としての誰か）」が意味上の主語であり、
  文法的に厳密な独立分詞構文ではなく、決まり文句として覚える。

■ 否定の分詞構文の作り方（復習と発展）
否定語 Not/Never は分詞の直前に置く。

  例）Because he didn't have money, he couldn't buy the book.
    → Not having money, he couldn't buy the book.
    （お金を持っていなかったので、その本を買えなかった）

  完了形の否定：
    Not having finished his homework, he couldn't watch TV.
    （宿題を終えていなかったので、テレビを見られなかった）

⚠注意：Not を分詞の後ろに置くミスが多いので注意。
  × Having not finished（誤りとされることが多い）
  〇 Not having finished（Not は分詞の前）

■ 分詞構文の書き換え問題の解法手順
  ① 分詞構文の主語が誰か（主節と同じか）を確認する
  ② 分詞の形（-ing か過去分詞か）から能動・受動を判断する
  ③ 単純形か完了形（Having+過去分詞）かで時間関係を判断する
  ④ 文脈から接続詞（時・理由・条件・付帯状況）を補って訳す`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】次の文を分詞構文に書き換えなさい。
Because I had never seen the movie before, I didn't know the story.
→ 答え：Never having seen the movie before, I didn't know the story.

【問2】（　）に最も適切なものを選びなさい。
( ) in a hurry, she left her umbrella at the station.
① Being  ② Been  ③ Have  ④ To be
→ 答え：① Being（Being in a hurry＝急いでいたので）

【問3】次の文の意味として最も適切な日本語を選びなさい。
"With his eyes closed, he listened to the music."
① 目を開けて音楽を聴いた
② 目を閉じて音楽を聴いた
③ 音楽を聴きながら目を閉じようとした
→ 答え：②

【問4】日本語に合うように英文を完成させなさい。
「厳密に言えば、彼の答えは間違っている。」
(　　) speaking, his answer is wrong.
→ 答え：Strictly

【問5】次の2文をほぼ同じ意味の1文にしなさい（分詞構文を使って）。
As it was written in simple English, the book was easy to read.
→ 答え：Written in simple English, the book was easy to read.

【問6】次の文の誤りを正しく直しなさい。
Having not eaten breakfast, I felt very hungry.
→ 答え：Not having eaten breakfast, I felt very hungry.（Notは分詞の前）`,
      },
    ],
  },

  {
    id: 'koko_eigo_14_indirect_question_advanced',
    subject: 'eigo',
    examType: 'koko',
    order: 14,
    title: '間接疑問文・話法の応用発展',
    description: '複雑な間接疑問文と話法の応用パターンを使いこなし、難関校の並べ替え・書き換えに対応する',
    keyPoints: [
      `間接疑問文が think/believe/guess/supposeの目的語になるとき、疑問詞は文頭に出る（Do you think＋疑問詞〜?）`,
      `二重目的語をとる動詞＋間接疑問（ask me where〜、tell me why〜）の語順`,
      `疑問詞＋to不定詞と間接疑問文の書き換え（how to〜＝how I should〜）`,
      `依頼・提案の間接的表現（Could you tell me〜? / I was wondering if〜）は丁寧さのレベルが上がる`,
      `話法の転換で命令文・依頼文・感嘆文・平叙文が混在する複合問題の解法`,
      `時や場所を表す指示語（here/now/thisなど）は話法転換で規則的に変化する`,
      `伝達動詞の使い分け：say/tell/ask/adviseなどは目的語の有無・形が異なる`,
    ],
    sections: [
      {
        heading: '1. think型動詞と間接疑問文の語順（最重要パターン）',
        level: 'oyo',
        body: `■ 疑問詞が think/believe/guess/suppose の目的語になるとき
通常の間接疑問文は〈疑問詞＋主語＋動詞〉の語順だが、
do you think / do you believe などが間に入るときは、疑問詞が文頭に出る特殊な語順になる。

  誤りやすい例：
    × Do you know where does he live?
    〇 Do you know where he lives?（通常の間接疑問：疑問詞の後は肯定文語順）

  think型の特殊な語順：
    × Do you know what do you think he is doing?
    〇 What do you think he is doing?
    （彼が何をしていると思いますか）
    → 疑問詞 What が文頭に出て、think の疑問文がそのまま続く

★ポイント：know型（普通の間接疑問）と think型（疑問詞が前に出る）を区別する。
  know型：Do you know where he lives?（where以下は肯定文の語順）
  think型：Where do you think he lives?（whereが文頭、doyouthinkは疑問文語順）

  他の think型動詞：believe, guess, suppose, imagine
    Who do you suppose will win the game?
    （誰が試合に勝つと思いますか）
    How long do you think the trip will take?
    （旅行はどのくらいかかると思いますか）

⚠注意：疑問詞が主語のときは Who do you think will win のように
  do you think の後に動詞（will win）が続き、doesなどは不要。`,
      },
      {
        heading: '2. 二重目的語をとる動詞＋間接疑問文',
        level: 'oyo',
        body: `■ ask/tell/show me＋間接疑問（SVOO型）
ask や tell のように「人＋もの」の2つの目的語をとる動詞の後にも、
間接疑問文（疑問詞＋主語＋動詞）を目的語として続けることができる。

  例）Please tell me where the station is.
      （駅がどこにあるか教えてください）
      I asked him what time the train would leave.
      （私は彼に電車が何時に出るか尋ねた）
      Can you show me how this machine works?
      （この機械の使い方を見せてもらえますか）

★ポイント：ask/tell の直後は必ず「人」（目的語）が来て、
  その後に間接疑問（疑問詞＋主語＋動詞）が続く。

  ⚠注意：want to know なども同じパターンで使われる。
    I want to know why she was absent yesterday.

■ whether/if を使った依頼・確認表現（会話頻出）
  I wonder if 〜（〜かなと思う・丁寧な疑問）
    I wonder if you could help me.（手伝っていただけないかと思うのですが）
  I'm not sure whether 〜（〜かどうか自信がない）
    I'm not sure whether he will come.
  Could you tell me whether 〜 or not?（〜かどうか教えていただけますか）
    Could you tell me whether the shop is open or not?

★ポイント：I wonder if 〜は「〜してもらえますか」という
  非常に丁寧な依頼表現として会話文・作文問題で頻出。

■ 疑問詞＋to不定詞と間接疑問文の書き換え
  How should I get to the station? ＝ How to get to the station?
  I don't know what I should do. ＝ I don't know what to do.
  Please tell me when I should start. ＝ Please tell me when to start.

  ⚠注意：主語が話し手・聞き手と一致しないと to不定詞に書き換えられない。
    I don't know what he should do.（× what to do には書き換え不可。主語がheのため）`,
      },
      {
        heading: '3. 丁寧な依頼表現と会話での間接疑問',
        level: 'oyo',
        body: `■ 丁寧さのレベルによる依頼表現の使い分け
直接的な疑問文よりも、間接疑問文を使った依頼の方が丁寧に聞こえる。

+---------------------------+--------------------------------------+
| 直接的（ややカジュアル）  | 間接的・丁寧                          |
+---------------------------+--------------------------------------+
| Where is the station?     | Could you tell me where the station   |
|                            | is?                                   |
| What time does it start?  | Do you know what time it starts?      |
| Can you help me?          | I was wondering if you could help me.|
+---------------------------+--------------------------------------+

★ポイント：丁寧な依頼表現ほど文が長くなり、間接疑問（語順が変わらない）を使う。
  面接・道案内・電話など、フォーマルな場面の会話文で頻出。

■ 感嘆文・平叙文を含む複合話法の転換
話法の転換問題では、平叙文・疑問文・命令文・感嘆文が混在することがある。
それぞれの転換ルールを組み合わせて解く。

  He said, "What a beautiful sunset it is!"
  → He said that it was a very beautiful sunset.
  （感嘆文は間接話法では what/how を保持せず、that節＋veryなどで表すことが多い）

  She said to me, "Can you help me carry this bag?"
  → She asked me if I could help her carry the bag.
  （依頼の疑問文はif/whetherを使った間接疑問に変換）

■ 混合問題の解き方（手順）
  ① 発言が平叙文・疑問文・命令文のどれかを判断する
  ② それぞれのルール（4章参照）を適用する
  ③ 代名詞・時制・場所や時の副詞を書き換える
  ④ 疑問文なら伝達動詞を ask に、命令文なら tell/ask に変える`,
      },
      {
        heading: '4. 伝達動詞の使い分けと副詞の変化の総整理',
        level: 'oyo',
        body: `■ 伝達動詞の形の違い（入試で狙われるポイント）
  say（言う）：say (that) 〜／say to 人, "..."（sayの直後に人は来ない）
    × He said me that he was tired.（誤り）
    〇 He said to me that he was tired. / He told me that he was tired.
  tell（伝える）：tell 人 (that) 〜、tell 人 to 〜（tellの直後は必ず人）
  ask（尋ねる・頼む）：ask 人 疑問詞〜、ask 人 to 〜（依頼）
  advise（助言する）：advise 人 to 〜
  suggest（提案する）：suggest (that) 〜（人を直接目的語にしない点に注意）
    × He suggested me to go.（誤り）
    〇 He suggested that I (should) go. / He suggested going.

■ 話法転換での時・場所を表す語の変化（総整理表）
+-------------+-----------------+  +-------------+------------------+
| 直接話法    | 間接話法        |  | 直接話法    | 間接話法         |
+-------------+-----------------+  +-------------+------------------+
| now         | then            |  | this week   | that week        |
| today       | that day        |  | next week   | the following    |
| yesterday   | the day before  |  |             | week             |
| tomorrow    | the next day    |  | last week   | the week before  |
| here        | there           |  | this        | that             |
+-------------+-----------------+  +-------------+------------------+

★ポイント：これらの変化は「発言した時点」と「伝える時点」がずれることに由来する。
  実際の入試では、文脈上ずれがない場合（同じ日に伝える場合など）は
  today のままでも許容されることがあるが、基本ルールとして上表を覚えておく。

⚠注意：話法の転換は「代名詞」「時制」「時・場所の副詞」の3つを
  同時にチェックする必要がある。1つでも見落とすと不正解になりやすい。`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】（　）に最も適切なものを選びなさい。
( ) do you think she bought at the store?
① What  ② Do you know what  ③ What does  ④ You think what
→ 答え：① What（think型は疑問詞が文頭に出て、doyouthinkが続く）

【問2】日本語に合うように英文を完成させなさい。
「彼がどこの出身か教えてもらえますか。」
Could you tell me (　　) (　　) (　　) from?
→ 答え：where he is（Could you tell me where he is from?）

【問3】ほぼ同じ意味になるように書き換えなさい。
I don't know how I should solve this problem.
= I don't know how (　　) (　　) this problem.
→ 答え：to solve

【問4】次の文を間接話法に直しなさい。
She said to me, "Will you come to the party tomorrow?"
→ 答え：She asked me if I would come to the party the next day.

【問5】（　）に入る最も適切なものを選びなさい。
He (　　) me that I should study harder.
① said  ② told  ③ talked  ④ spoke
→ 答え：② told（tellの直後は人）

【問6】並べ替えなさい。
( wonder / help / I / you / if / could / me ) with this bag.
→ 答え：I wonder if you could help me with this bag.`,
      },
    ],
  },

  {
    id: 'koko_eigo_15_free_writing',
    subject: 'eigo',
    examType: 'koko',
    order: 15,
    title: '自由英作文の減点されない書き方',
    description: '自由英作文で満点を狙うための構成・採点基準・減点回避のテクニックを身につける',
    keyPoints: [
      `自由英作文の採点基準は主に「内容（設問への対応）」「構成」「語彙・文法の正確さ」の3つ`,
      `テーマ型・意見型・データ型（グラフ/イラスト）の3タイプごとに書き方の型がある`,
      `1文を短く・シンプルな文型（SV/SVC/SVO）中心にすると文法ミスが減る`,
      `自信のない複雑な構文（仮定法・関係詞の多用）は避け、確実に正しい文で書く`,
      `語数指定は必ず守り、指定範囲の8〜9割以上を目安に書く`,
      `減点されやすいミス：三単現のs抜け、時制の不統一、可算/不可算の誤り、スペルミス`,
      `書き終えたら見直しの5チェック（主語と動詞の一致・時制・スペル・語数・設問への対応）を行う`,
    ],
    sections: [
      {
        heading: '1. 自由英作文の採点基準を理解する',
        level: 'kiso',
        body: `■ 自由英作文はどこで採点されているか
自由英作文（あるテーマについて自分の意見や体験を英語で書く問題）は、
主に次の3つの観点で採点される。

  ① 内容（設問に正しく答えているか）
    設問で聞かれていることに対して、的確に答えているか。
    賛成/反対を問われているのに理由を書かないなどは大きく減点される。
  ② 構成（論理的に組み立てられているか）
    意見→理由→具体例→まとめ、の流れがあるか。
  ③ 語彙・文法の正確さ（減点方式のことが多い）
    スペルミス・文法ミス・時制の誤りなどが1つずつ減点される。

★ポイント：「難しい表現を使って1つ間違える」より
  「簡単な表現を使って全て正確に書く」方が高得点になりやすい。
  自由英作文は「正確さ」を最優先し、その上で内容の充実度を上げる。

■ 満点を狙うより「大きく減点されない」ことを優先する
  ・分からない単語を無理に使わない（知っている単語で言い換える）
  ・自信のない文法事項（仮定法・分詞構文など）を無理に使わない
  ・1文を長くしすぎない（主語と動詞の対応がずれやすくなる）

⚠注意：内容が独創的でも、文法ミスが多ければ得点は伸びない。
  逆に、内容がシンプルでも正確な英文であれば高得点が狙える。`,
      },
      {
        heading: '2. 出題タイプ別の書き方（意見型・体験型・データ型）',
        level: 'oyo',
        body: `■ 意見型（賛成/反対、自分の考えを述べる）
「〜についてどう思うか」「賛成か反対か」を問うタイプ。

  型：
  ① I think (that) 〜. / I agree/disagree with 〜.（意見の表明）
  ② There are two reasons. First, 〜. Second, 〜.（理由を2つ）
  ③ For example, 〜.（具体例を1つ入れると説得力が増す）
  ④ For these reasons, I think 〜.（まとめ）

  例）Do you think students should have smartphones at school?
  → I think students should be allowed to have smartphones at school.
    First, they can use them to check information quickly.
    Second, they can contact their family in case of an emergency.
    For these reasons, I agree with this idea.

■ 体験型（自分の経験・思い出について書く）
  型：
  ① When I was 〜, I 〜.（いつ・何をしたか）
  ② I felt 〜 because 〜.（そのときの気持ちと理由）
  ③ Since then, I have 〜. / This experience taught me 〜.（その後・学んだこと）

  例）Tell us about a memorable experience.
  → When I was twelve, I visited Okinawa with my family.
    I was very surprised to see the beautiful sea for the first time.
    Since then, I have wanted to learn more about the ocean.

■ データ型（グラフ・表・イラストの説明）
  型：
  ① The graph/picture shows (that) 〜.（資料が何を示すか）
  ② According to the graph, 〜.（具体的な数値・変化）
  ③ From this, we can see that 〜.（そこから分かること・意見）

  例）The graph shows the number of foreign tourists in Japan.
    According to the graph, the number increased sharply after 2020.
    From this, I think Japan is becoming more popular among tourists.

★ポイント：どのタイプでも「型」に沿って書くと、
  内容の抜け漏れがなくなり、構成の減点を防げる。`,
      },
      {
        heading: '3. 文法ミスを減らす書き方のテクニック',
        level: 'oyo',
        body: `■ シンプルな文型を選ぶ
自由英作文では、複雑な構文を使うほど文法ミスのリスクが上がる。
基本の文型（SV/SVC/SVO/SVOO/SVOC）を組み合わせて書けば十分に得点できる。

  避けた方が安全な構文（自信がなければ使わない）：
    仮定法（If I were 〜）、分詞構文（Being tired, 〜）、
    複雑な関係詞の入れ子（the book which the boy who 〜 wrote）

  代わりに使える安全な表現：
    I think that 〜. / I want to 〜. / It is important to 〜.
    〜, so 〜. / 〜 because 〜.（1つの接続詞でつなぐシンプルな重文・複文）

■ 一文を短くする（1文1メッセージ）
長い1文を書こうとすると、主語と動詞の対応がずれやすくなる。
「1つの文には1つの言いたいこと」を意識して短く区切る。

  ✗ 減点されやすい例（長すぎて主語と動詞がずれている）：
    I think that smartphones is useful because we can use it for study and also communicate with friends and it help us in emergency.
  ✓ 改善例：
    I think smartphones are useful. We can use them for studying.
    We can also use them to contact friends and family in an emergency.

■ 減点されやすいミスのチェックリスト
  ① 三単現のs抜け：He like music.（× like → 〇 likes）
  ② 時制の不統一：I go there yesterday.（× go → 〇 went）
  ③ 可算・不可算の誤り：many informations（× → much information）
  ④ 冠詞の抜け・誤り：I have dog.（× → I have a dog.）
  ⑤ スペルミス：becuase（× → because）、recieve（× → receive）
  ⑥ 主語と動詞の一致：Everyone are happy.（× are → 〇 is）

★ポイント：見直しの際は「1文ずつ主語と動詞を指差し確認」すると
  三単現のs抜けや一致のミスに気づきやすい。`,
      },
      {
        heading: '4. 語数指定の守り方と使える万能フレーズ集',
        level: 'oyo',
        body: `■ 語数指定を守るコツ
「30語以上」「40〜50語程度」などの指定は必ず守る。
短すぎても長すぎても減点されることが多い。

  ① 書く前に「型」に沿って何を書くか箇条書きでメモする
  ② 大体の語数配分を決める（意見10語＋理由20語＋まとめ10語 等）
  ③ 書き終えたら実際に単語数を数える（I'm/don'tなどの短縮形も1語）
  ④ 指定の8〜9割以上を目安にし、少なすぎる場合は具体例を追加する

★ポイント：語数が足りないときは「For example, 〜」で具体例を1つ足すのが
  最も自然に語数を増やせるテクニック。

■ どんなテーマにも使える万能フレーズ集
  意見の導入：
    I think (that) 〜. / In my opinion, 〜. / I believe (that) 〜.
  理由を並べる：
    There are two reasons for this. / First, 〜. Second, 〜.
  具体例を出す：
    For example, 〜. / For instance, 〜.
  追加情報：
    Also, 〜. / In addition, 〜. / Moreover, 〜.
  まとめ：
    For these reasons, 〜. / In conclusion, 〜. / That is why I think 〜.

■ よく使う便利な単語・表現（抽象的なテーマで使いやすい）
  useful（役に立つ）、important（重要な）、necessary（必要な）
  helpful（助けになる）、convenient（便利な）、improve（向上させる）
  communicate with 〜（〜と意思疎通する）、save time/money（時間・お金を節約する）

⚠注意：日本語の直訳が難しい表現は避け、
  自分が確実に使える単語・構文に言い換えて書く（パラフレーズの発想）。`,
      },
      {
        heading: '5. 入試問題例（模範解答つき）',
        level: 'nyushi',
        body: `📝入試問題例

【問題】次のテーマについて、あなたの意見を理由とともに30〜40語の英語で書きなさい。
「中学生は毎日部活動をするべきだと思いますか。」

【減点されやすい解答例】
I think students should do club activities. Because it is good for health and make friend and it is fun too much so I like it very much every day.
→ 問題点：becauseで文を始める書き方、make friendsのsの抜け、
  too muchの誤用、内容が理由になっていない部分がある。

【模範解答例（約35語）】
I think students should do club activities every day. First, it helps them stay healthy. Second, they can make good friends through club activities. For these reasons, I agree with this idea.

★ポイント：模範解答は「シンプルな文の積み重ね」でできている。
  難しい単語や構文を使わなくても、正確に書けば高得点が狙える。

【問1】次の英作文の下線部の誤りを直しなさい。
"I have a lot of homeworks every day, so I am always busy."
→ 答え：homeworks → homework（不可算名詞は複数形にしない）

【問2】次の日本語を、指定された語数（15語程度）の英語にしなさい。
「私は将来、外国で働きたいです。なぜなら色々な文化を学べるからです。」
→ 答え例：I want to work in a foreign country in the future because I can learn about different cultures.`,
      },
    ],
  },

  {
    id: 'koko_eigo_16_functional_scenes',
    subject: 'eigo',
    examType: 'koko',
    order: 16,
    title: 'リスニング頻出表現（道案内・電話・買い物）',
    description: '道案内・電話・買い物・レストランなど場面別の定型表現をリスニングと会話文対策として身につける',
    keyPoints: [
      `道案内：go straight/turn left(right)/on your left(right)/It's next to〜/You can't miss it`,
      `電話：May[Can] I speak to〜?／Who's calling, please?／Hold on, please／He's out now`,
      `買い物：May I help you?／I'm just looking, thank you／How much is it?／I'll take it`,
      `レストラン：Are you ready to order?／I'd like〜／For here or to go?／Could we have the bill?`,
      `場所・道順を表す前置詞句（on your right、across from、between A and B、around the corner）`,
      `リスニングでは場面が変われば頻出語彙も変わるため、場面ごとにセットで覚える`,
      `聞き取れなくても場面から予測できる語（駅なら platform、店なら price など）に注目する`,
    ],
    sections: [
      {
        heading: '1. 道案内の定型表現',
        level: 'kiso',
        body: `■ 道を尋ねる表現
  Excuse me. How can I get to the station?（すみません、駅へはどう行けばいいですか）
  Could you tell me the way to the museum?（美術館への道を教えていただけますか）
  Is there a post office near here?（この近くに郵便局はありますか）
  Excuse me, where am I on this map?（すみません、地図上で私は今どこにいますか）

■ 道を教える表現（動作の指示）
  Go straight (ahead / along this street).（まっすぐ行ってください）
  Turn left/right at the corner.（角を左に／右に曲がってください）
  Go straight for two blocks.（2区画分まっすぐ進んでください）
  Cross the bridge/street.（橋・道を渡ってください）
  Walk until you see the park.（公園が見えるまで歩いてください）

■ 場所を説明する表現
  It's on your left/right.（あなたの左手/右手にあります）
  It's next to the bank.（銀行の隣にあります）
  It's across from the library.（図書館の向かいにあります）
  It's between the flower shop and the bakery.（花屋とパン屋の間にあります）
  It's around the corner.（角を曲がったところにあります）
  You can't miss it.（すぐに分かりますよ＝目印になるので見逃さない）

★ポイント：道案内の会話文は「地図・イラストを見て答える」形式が多い。
  放送を聞きながら地図上に矢印や印をつけると正解しやすい。

⚠注意：turn left（左に曲がる）と on your left（あなたの左手に＝位置）を混同しない。`,
      },
      {
        heading: '2. 電話での定型表現',
        level: 'oyo',
        body: `■ 電話をかける・取り次いでもらう
  Hello, this is Ken (speaking).（もしもし、ケンです）
  May[Can] I speak to Mr. Smith, please?（スミスさんをお願いできますか）
  Is Emily there?（エミリーはいますか）

■ 電話に出る・取り次ぐ
  Speaking.（私です＝本人が電話に出た応答）
  Who's calling, please?（どちら様でしょうか）
  Hold on, please. / Just a moment, please.（少々お待ちください）
  I'll put you through.（おつなぎします）

■ 不在・伝言
  I'm sorry, he's out now.（申し訳ありませんが、彼は今外出しています）
  He's not available right now.（彼は今電話に出られません）
  Can I take a message?（伝言を承りましょうか）
  Could you tell him to call me back?（彼に折り返し電話するよう伝えていただけますか）
  I'll call back later.（後でかけ直します）

■ その他の電話表現
  Can you hear me?（聞こえますか）
  Sorry, could you speak more slowly?（すみません、もう少しゆっくり話していただけますか）
  You have the wrong number.（電話番号をお間違えです）

★ポイント：電話の会話文は「誰が誰に何を伝えたいか」を整理しながら聞く。
  伝言メモ（メッセージ）を書き取らせる問題では、
  日時・用件・折り返しの要不要をメモすると正解しやすい。

⚠注意：Who's calling, please? に対しては名前で答える（This is Ken. など）。
  Speaking. は「自分が呼ばれている本人である」ことを示す特別な応答。`,
      },
      {
        heading: '3. 買い物・レストランでの定型表現',
        level: 'oyo',
        body: `■ 買い物の定型表現
  May[Can] I help you?（いらっしゃいませ／何かお探しですか）
  I'm just looking, thank you.（見ているだけです、ありがとう）
  I'm looking for a birthday present for my mother.（母への誕生日プレゼントを探しています）
  Do you have this in a smaller size?（これのもっと小さいサイズはありますか）
  Can I try this on?（試着してもいいですか）
  How much is it[this]?（これはいくらですか）
  That will be 2,000 yen.（2,000円になります）
  I'll take it.（それを買います）
  Do you accept credit cards?（クレジットカードは使えますか）

■ レストランの定型表現
  A table for two, please.（2名でお願いします）
  Are you ready to order?（ご注文はお決まりですか）
  I'd like the set meal, please.（セットメニューをお願いします）
  What would you recommend?（おすすめは何ですか）
  For here or to go?（こちらでお召し上がりですか、お持ち帰りですか）
  Could we have the bill[check], please?（お会計をお願いできますか）
  Anything else?（他にご注文はございますか）

★ポイント：買い物・レストランの会話は「数量・値段・サイズ・注文品目」が
  聞き取りのポイントになりやすい。数字は特に注意して聞く。

⚠注意：How much（値段を尋ねる）とHow many（数を尋ねる）を混同しない。
  How much is this shirt? / How many shirts do you have?`,
      },
      {
        heading: '4. その他の場面別表現（病院・図書館・学校行事）',
        level: 'oyo',
        body: `■ 病院・薬局での表現
  What's wrong with you? / What seems to be the problem?（どうされましたか）
  I have a headache/stomachache/fever.（頭痛/腹痛/熱があります）
  How long have you had this pain?（この痛みはいつからですか＝現在完了の継続用法）
  You should take this medicine three times a day.（この薬を1日3回飲んでください）
  Get well soon.（お大事に）

■ 図書館での表現
  Could I borrow this book?（この本を借りられますか）
  How long can I keep it?（どのくらいの期間借りられますか）
  You can keep it for two weeks.（2週間借りられます）
  I'd like to return this book.（この本を返却したいのですが）
  It's overdue. There is a late fee.（返却期限が過ぎています。延滞料金があります）

■ 学校行事・招待の表現
  Would you like to come to my birthday party?（誕生日パーティーに来ませんか）
  What time should I arrive?（何時に着けばいいですか）
  What should I bring?（何を持っていけばいいですか）
  I'm sorry, I can't make it.（すみません、行けません）
  I'm looking forward to seeing you there.（そこでお会いできるのを楽しみにしています）

★ポイント：どの場面でも「依頼・提案→応答（承諾/断り）」の流れが基本パターン。
  応答の内容（Yes/No、理由）を正確に聞き取れば設問に対応できる。

⚠注意：場面が変わっても基本の会話パターン（挨拶→用件→応答→締めくくり）は共通。
  場面特有の語彙（病院ならmedicine/fever、図書館ならborrow/overdue）を重点的に覚える。`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】次の対話の（　）に入る最も適切なものを選びなさい。
A: Excuse me. How can I get to the city library?
B: Go straight and turn left at the second corner. (　　)
① You can't miss it.  ② I'm just looking.  ③ Speaking.  ④ For here or to go?
→ 答え：①

【問2】次の対話が成立するように並べ替えなさい。
A: May I speak to Ms. Green, please?
B: ( is / moment / a / just / please ).
→ 答え：Just a moment, please.

【問3】次の対話の応答として最も適切なものを選びなさい。
A: How much is this T-shirt?
① It's over there.  ② It's 1,500 yen.  ③ I'm looking for a shirt.  ④ It's cotton.
→ 答え：②

【問4】次の対話の意味として最も適切な日本語を選びなさい。
"Are you ready to order?" "Not yet. Could you give us a few more minutes?"
① もう注文はお決まりですか／まだです。もう少し時間をいただけますか
② お会計はお決まりですか／もう払いました
③ お手洗いはどこですか／あちらです
→ 答え：①

【問5】次の対話の（　）に最も適切なものを選びなさい。
A: I have a stomachache.
B: (　　)
① That's a good idea.  ② You should see a doctor.  ③ For here or to go?  ④ Speaking.
→ 答え：②`,
      },
    ],
  },

  {
    id: 'koko_eigo_17_eiken_expressions',
    subject: 'eigo',
    examType: 'koko',
    order: 17,
    title: '英検3級〜準2級レベルの重要構文',
    description: '英検レベルの重要構文・イディオムを習得し、難関校の空所補充・語法問題に対応する',
    keyPoints: [
      `used to＋原形「以前は〜だった／〜したものだ」と be/get used to -ing「〜に慣れている」を区別`,
      `had better＋原形「〜すべきだ（強い忠告）」、would rather＋原形「むしろ〜したい」`,
      `cannot help -ing／cannot help but＋原形「〜せずにはいられない」`,
      `It is said that S+V.／S is said to〜「〜と言われている」の書き換え`,
      `not so much A as B「AというよりむしろB」、no more than/not more than、no less than/not less than`,
      `may well「〜するのももっともだ」、might as well「〜した方がましだ」`,
      `so far「今のところ」、as far as I know「私の知る限り」、no longer「もはや〜ない」`,
    ],
    sections: [
      {
        heading: '1. used to / be used to の使い分け（最頻出の混同ポイント）',
        level: 'kiso',
        body: `■ used to ＋ 動詞の原形（以前は〜だった・〜したものだ）
過去の習慣・状態で「今はもう違う」ことを表す。

  例）I used to play soccer every day.
      （以前は毎日サッカーをしていた＝今はしていない）
      There used to be a big tree here.
      （以前ここに大きな木があった＝今はない）

★ポイント：used to は「過去の習慣・状態」を表し、現在との対比を含む。
  would も過去の習慣を表せるが、would は「動作の繰り返し」のみで、
  状態（be動詞を使うような文）には使えない。
    I would visit my grandmother every summer.（動作の繰り返しでOK）
    × I would be a shy boy.（状態にはwouldは使えない。used toを使う）

■ be/get used to ＋ 名詞・動名詞（〜に慣れている・慣れる）
「used to」の後に -ing や名詞が来ると全く別の意味になる（入試最重要の混同ポイント）。

  be used to -ing / 名詞：〜に慣れている（状態）
    He is used to living in Japan.（彼は日本に住むことに慣れている）
  get used to -ing / 名詞：〜に慣れる（変化）
    I will get used to this new school soon.（すぐにこの新しい学校に慣れるだろう）

+------------------------+----------------------------+
| 形                     | 意味                       |
+------------------------+----------------------------+
| used to + 原形         | 以前は〜だった（過去の習慣）|
| be used to + -ing/名詞 | 〜に慣れている             |
| get used to + -ing/名詞| 〜に慣れる                 |
+------------------------+----------------------------+

⚠注意：この3つは形が似ているため入試で頻繁に混同を狙われる。
  toの後が「原形」か「-ing/名詞」かを必ず確認する。`,
      },
      {
        heading: '2. had better・would rather・cannot help など重要構文',
        level: 'oyo',
        body: `■ had better ＋ 原形（〜すべきだ・〜した方がいい：強い忠告）
should より強いニュアンスで、「そうしないとまずいことになる」という警告を含む。
  You had better see a doctor.（医者に診てもらった方がいい）
  You had better not be late.（遅れない方がいい）← 否定は had better not

  ⚠注意：had better は目上の人には失礼になることがあるため、
  相手によっては should の方が無難。

■ would rather ＋ 原形（むしろ〜したい）
  I would rather stay home than go out.
  （出かけるよりむしろ家にいたい）
  would rather A than B（BよりむしろA）の形で使うことが多い。

■ cannot help -ing / cannot help but ＋ 原形（〜せずにはいられない）
  I couldn't help laughing at the joke.
  （その冗談に笑わずにはいられなかった）
  = I couldn't help but laugh at the joke.

★ポイント：cannot help -ing の help は「避ける」という意味で使われている
  （「手伝えない」ではない）。

■ may well ／ might as well（似ているが意味が違う重要ペア）
  may well ＋ 原形：〜するのももっともだ（当然だ）
    You may well be surprised at the news.
    （その知らせに驚くのももっともだ）
  might as well ＋ 原形：〜した方がまし（他に良い選択肢がない消極的な提案）
    We might as well go home now.（もう家に帰った方がましだ）

⚠注意：may well（当然だ）と might as well（〜する方がましだ）を混同しやすい。
  意味が全く異なるので、文脈で判断する。`,
      },
      {
        heading: '3. It is said that の書き換えと比較の重要構文',
        level: 'oyo',
        body: `■ It is said that S + V. ＝ S is said to 〜.（〜と言われている）
「一般に〜と言われている」という伝聞を表す2つの言い方。

  例）It is said that this temple is very old.
      = This temple is said to be very old.
      （このお寺はとても古いと言われている）

  過去のことを表す場合は、to have + 過去分詞を使う（時制のずれに注意）。
    It is said that he was rich when he was young.
    = He is said to have been rich when he was young.
    （彼は若い頃裕福だったと言われている）

★ポイント：It is said that の後の時制と、is said to の後の不定詞の形
  （to＋原形 or to have＋過去分詞）が一致しているか確認する。
  同じ他の表現：It is believed that〜／It is known that〜も同じパターン。

■ not so much A as B（AというよりむしろB）
  He is not so much a teacher as a friend.
  （彼は先生というよりむしろ友達だ）
  = He is more a friend than a teacher.

■ no more than / not more than、no less than / not less than
  no more than 10（たった10（少ないという気持ち））
  not more than 10（10を超えない＝多くても10：客観的な上限）
  no less than 10（10もの（多いという気持ち））
  not less than 10（10を下回らない＝少なくとも10：客観的な下限）

  例）He has no more than 100 yen.（たった100円しか持っていない）
      He has not more than 100 yen.（多くても100円しか持っていない）
      She has no less than 100 books.（100冊もの本を持っている）

⚠注意：no〜（主観的な少なさ/多さの強調）と not〜（客観的な数値の範囲）の
  ニュアンスの違いを意識する。難関校で頻出。`,
      },
      {
        heading: '4. 時間・程度を表す重要イディオム',
        level: 'oyo',
        body: `■ so far（今のところ・これまでのところ）
  So far, everything has gone well.（今のところ、すべて順調だ）
  ★現在完了形と一緒に使われることが多い。

■ as far as I know（私の知る限り）
  As far as I know, he is still in Japan.（私の知る限り、彼はまだ日本にいる）
  ★as far as は「範囲」、as long as は「条件・期間」を表す点に注意。
    As long as you study hard, you will pass.（一生懸命勉強する限り、合格するだろう）

■ no longer（もはや〜ない）
  He is no longer a child.（彼はもはや子供ではない）
  = He is not a child any longer[anymore].
  ★no longer は be動詞・助動詞の後に置くことが多い。

■ not〜any more / not〜any longer（もう〜ない：no longerの書き換え）
  She doesn't live here anymore.（彼女はもうここに住んでいない）

■ in case（〜する場合に備えて）
  Take an umbrella in case it rains.（雨が降る場合に備えて傘を持っていきなさい）
  ⚠注意：in case は「〜するかもしれないから念のため」という意味で、
  if（もし〜なら）とは意味が異なる。

■ provided/providing (that)（もし〜ならば：条件を強く限定）
  You can go out, provided that you finish your homework.
  （宿題を終えるという条件で、外出してもよい）

★ポイント：これらのイディオムは英検の語彙問題・高校入試の空所補充で
  そのまま出題されることが多い。例文ごと音読して覚える。`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】（　）に最も適切なものを選びなさい。
I am not used to (　　) in front of many people.
① speak  ② speaking  ③ spoke  ④ speaks
→ 答え：② speaking（be used to のtoは前置詞）

【問2】ほぼ同じ意味になるように書き換えなさい。
It is said that this town is famous for its hot springs.
= This town (　　) (　　) (　　) famous for its hot springs.
→ 答え：is said to be

【問3】（　）に入る最も適切なものを選びなさい。
You (　　) not be late for the meeting, or the boss will be angry.
① had better  ② would rather  ③ used to  ④ may well
→ 答え：① had better（otherwise angryという警告なのでhad better）

【問4】次の文の意味として最も適切なものを選びなさい。
"He has no more than 500 yen."
① 彼は500円しか持っていない
② 彼は少なくとも500円持っている
③ 彼は500円以上持っている
→ 答え：①

【問5】（　）に適語を入れなさい。
As (　　) as I know, she has never been abroad.
→ 答え：far

【問6】次の2文を、ほぼ同じ意味の1文にしなさい。
I couldn't stop myself from crying when I heard the news.
= I (　　) (　　) crying when I heard the news.
→ 答え：couldn't help`,
      },
    ],
  },

  {
    id: 'koko_eigo_18_question_types',
    subject: 'eigo',
    examType: 'koko',
    order: 18,
    title: '長文の設問タイプ別攻略（内容一致・空所補充）',
    description: '内容一致問題と空所補充問題を設問タイプごとに深掘りし、得点力を上げる',
    keyPoints: [
      `内容一致問題は「本文の言い換え（パラフレーズ）」を見抜くことが最大のカギ`,
      `内容一致の誤答パターン：数値のすり替え、因果の逆転、一部だけ正しい選択肢、Not mentioned`,
      `空所補充（1文選択型）は前後の指示語・接続詞・話の流れから文脈を特定する`,
      `空所補充（語句選択型）は空所の前後の文法的な形（品詞・時制）にも注目する`,
      `段落ごとの要旨（トピックセンテンス）をメモしながら読むと該当箇所を探しやすい`,
      `選択肢を先に全て読まず、本文の該当箇所を先に絞ってから選択肢と照合する`,
      `消去法：本文と矛盾する選択肢→本文にない内容の選択肢→紛らわしい選択肢の順に消す`,
    ],
    sections: [
      {
        heading: '1. 内容一致問題の誤答パターンを見抜く',
        level: 'oyo',
        body: `■ 内容一致問題でよくある「ひっかけ」のパターン
入試の内容一致問題は、本文と一見似ているが微妙に違う選択肢が並ぶ。
代表的な誤答パターンを知っておくと選択のスピードと精度が上がる。

  ① 数値のすり替え
    本文：about 30% of students　→ 誤答：40% of students
  ② 因果関係の逆転
    本文：A because of B　→ 誤答：B because of A（原因と結果が逆）
  ③ 一部だけ正しい（部分的真実）
    本文の一部分だけを取り出し、全体としては誤りの選択肢を作る
  ④ 断定しすぎ（言い過ぎ）
    本文：some students think〜　→ 誤答：all students think〜
  ⑤ Not mentioned（本文に書かれていない）
    本文にない情報を、もっともらしく作った選択肢

★ポイント：all/always/never/only/every などの「極端な語」を含む選択肢は
  本文の実際のニュアンスとずれていることが多いので特に注意して照合する。

■ パラフレーズ（言い換え）を見抜く
選択肢は本文の単語をそのまま使わず、同じ意味の別の語句で書かれることが多い。

  本文：Many people were surprised at the result.
  選択肢：The result was unexpected for a lot of people.
  （surprised at → unexpected、many people → a lot of people）

★ポイント：単語が一致しているかではなく「意味が一致しているか」で判断する。
  本文中のキーワードの同義語・言い換え表現に敏感になることが重要。`,
      },
      {
        heading: '2. 空所補充（1文選択型）の解き方',
        level: 'oyo',
        body: `■ 1文選択型の空所補充とは
文章中の空欄に「最も適切な1文」を選択肢から選ぶ形式。
段落のつながり（論理関係）を把握することが最重要。

■ 解法の手順
  ① 空所の直前・直後の文を丁寧に読む
  ② 空所の前後に指示語（it/this/that/they）があれば、それが指す内容を確認する
  ③ 選択肢の中の指示語・接続詞が、前後の文とかみ合うか確認する
  ④ 話の流れ（具体例→まとめ、原因→結果など）に矛盾しない文を選ぶ

  例）...Many people enjoy reading books on rainy days. [　　] For example, they can relax at home without worrying about the weather.
  → 空所の後に For example とあるので、空所には「本を読む利点の一般的な内容」が入る。
    正解の選択肢はその一般論を述べたものになる。

★ポイント：選択肢の「文頭の語」（However/For example/In addition/Also など）が
  大きなヒントになる。前後の文との論理関係と矛盾しないかを必ず確認する。

■ 空所補充で見るべき「つながりの手がかり」
  代名詞：前の文の名詞と数・性が一致しているか（it/they/this/these）
  時制：前後の文の時制と自然につながるか
  話題の一貫性：段落全体のテーマから外れていないか

⚠注意：選択肢が単独では正しい英文でも、
  前後の文とのつながりが不自然であれば不正解になる。`,
      },
      {
        heading: '3. 空所補充（語句選択型）の解き方',
        level: 'oyo',
        body: `■ 語句選択型の空所補充とは
1〜数語の空所に、文法的・意味的に合う語句を選ぶ形式。
文法知識と語彙知識の両方が必要になる。

■ 解法の手順
  ① 空所の前後の品詞・形を確認する（動詞の形・前置詞の有無など）
  ② 空所を含む文だけでなく、前後の文の意味とのつながりを確認する
  ③ 接続詞・副詞（however/therefore/so/because等）が空所なら、
    論理関係（逆接・因果・並列）で判断する
  ④ 選択肢を全て空所に当てはめて意味が通るか確認する

  例）Ken practiced soccer very hard. (　　), he could not join the team.
  ① However  ② Therefore  ③ For example  ④ In addition
  → 空所の前後は「熱心に練習した」と「チームに入れなかった」で逆の内容
  → 答え：① However（逆接）

■ 文法的な形に注目するタイプ
  She is looking forward to (　　) you again.
  ① see  ② seeing  ③ saw  ④ seen
  → look forward to のtoは前置詞なので、後ろは動名詞
  → 答え：② seeing

★ポイント：語句選択型は「意味」と「文法」の両方からアプローチできる。
  文法的に1つに絞れる場合は、まず文法的な形（品詞・活用）から確認すると速い。

⚠注意：接続副詞（however/therefore等）は文中のどこに置かれても
  意味は変わらないが、位置によってコンマの打ち方が変わる点にも注意。`,
      },
      {
        heading: '4. 段落要旨メモと消去法の実践テクニック',
        level: 'oyo',
        body: `■ 段落要旨メモの取り方
長文を読みながら、各段落の余白に「一言でその段落の要旨」をメモしておくと、
設問で「どの段落に書かれているか」を素早く探せるようになる。

  例）
  第1段落：スマホ利用時間の調査結果（データ）
  第2段落：教師・親の心配（悪影響）
  第3段落：専門家の意見（学習ツールとしての可能性）

  設問「専門家はどう考えているか」→ 第3段落を見ればよいと即座に分かる。

★ポイント：段落メモは日本語で数語程度でよい。完璧な要約を作る必要はなく、
  「どこに何が書いてあるか」の索引として使う。

■ 消去法の実践手順（内容一致問題）
  ① まず「本文に明確に反する」選択肢を消す（最も見つけやすい）
  ② 次に「本文に書かれていない（Not mentioned）」選択肢を消す
  ③ 残った選択肢の中で「一部だけ正しい・言い過ぎ」の選択肢を消す
  ④ 最後に残った選択肢を本文と正確に照合して確定する

■ 時間配分の目安（内容一致・空所補充を含む大問）
  ① 設問に軽く目を通す（1分）
  ② 段落メモを取りながら本文を読む（5〜7分）
  ③ 設問を解く（消去法を使いながら、5〜7分）
  ④ 見直し（1〜2分）

⚠注意：全ての選択肢を本文と一字一句照合しようとすると時間が足りなくなる。
  明らかにおかしい選択肢から素早く消していく「引き算の発想」が重要。`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

次の英文を読んで、設問に答えなさい。

Studying abroad has become more popular among Japanese high school students in recent years. According to a survey, about 20% of high school students are interested in studying in another country. [　　A　　] Some students want to improve their language skills, while others hope to experience different cultures. However, there are also challenges, such as high costs and homesickness. Despite these difficulties, many students who have studied abroad say that it was a valuable experience for their future.

【問1】空所Aに入る最も適切な文を選びなさい。
① However, most of them are not interested in it at all.
② There are several reasons why they want to do so.
③ For this reason, no one wants to study abroad.
→ 答え：②（直後にSome students...whileothers...と理由が続くため）

【問2】本文の内容と合っているものを選びなさい。
① About 20% of high school students have already studied abroad.
② Studying abroad has no problems at all.
③ Some students who studied abroad found it valuable for their future.
→ 答え：③（①は「興味がある」であり「すでに留学した」ではない。②は課題があると書かれている）

【問3】本文の内容から、留学の課題として挙げられているものを2つ日本語で書きなさい。
→ 答え：費用が高いこと、ホームシックになること`,
      },
    ],
  },

  {
    id: 'koko_eigo_19_dialogue_reading',
    subject: 'eigo',
    examType: 'koko',
    order: 19,
    title: '対話文読解の攻略',
    description: '対話文特有の話の流れ・談話標識・空所補充問題への対応力を鍛える',
    keyPoints: [
      `対話文は「質問→応答」「提案→承諾/断り」「依頼→返答」の3大パターンで進む`,
      `話者を記号（A/B）だけでなく発言内容から役割（店員/客、先生/生徒など）を把握する`,
      `談話標識：By the way(ところで)/Speaking of which(それと言えば)/Anyway(とにかく)`,
      `空所の発言選択は「直後の発言」から逆算して考えるのが最も確実`,
      `話題転換・相槌・聞き返しの表現は内容一致に直接関係しないことが多いが流れの把握に必須`,
      `長い対話文では話題が変わるポイント（but/actually/well など）に印をつけて読む`,
      `イラスト付き対話文はイラストの情報（値段・時刻・場所）と対話の内容を照合する`,
    ],
    sections: [
      {
        heading: '1. 対話文の基本パターンと話者の把握',
        level: 'oyo',
        body: `■ 対話文が進む3つの基本パターン
入試の対話文はほぼ次の3パターンの組み合わせでできている。

  ① 質問→応答
    A: What time does the museum open?
    B: It opens at nine.
  ② 提案→承諾/断り
    A: Why don't we go to the new café after school?
    B: Sounds good! / I'm sorry, I have club activities today.
  ③ 依頼→返答
    A: Could you help me with my homework?
    B: Sure, no problem. / I'm afraid I'm busy right now.

★ポイント：どのパターンかを見抜けば、応答の選択肢を絞りやすくなる。
  質問には具体的な答えが、提案には賛成/断りが、依頼には承諾/断りが続く。

■ 話者の役割を発言内容から把握する
対話文にはA・Bとしか書かれていないことが多いが、
発言内容から「誰が誰に何を話しているか」（店員と客、先生と生徒など）を推測する。

  例）A: May I help you? B: Yes, I'm looking for a birthday present.
  → Aは店員、Bは客だと分かる（May I help you?は接客の定型句）

★ポイント：役割が分かると、その後の展開（店員なら商品を勧める、
  客なら値段や条件を聞くなど）が予測しやすくなる。`,
      },
      {
        heading: '2. 談話標識（つなぎ言葉）の役割',
        level: 'oyo',
        body: `■ 話題を転換・展開する表現
対話文には「会話ならでは」のつなぎ言葉（談話標識）が頻繁に使われる。
これらは会話の流れを示す重要な合図になる。

  By the way,（ところで）→ 話題を変える合図
    By the way, have you finished your homework?
  Speaking of which,（それと言えば）→ 直前の話題に関連した新しい話
    Speaking of which, I saw Tom at the library yesterday.
  Anyway,（とにかく／それはさておき）→ 話をまとめる・元に戻す
    Anyway, let's talk about the plan for tomorrow.
  Actually,（実は）→ 意外な事実・訂正を伝える
    Actually, I've never been to Kyoto.
  Well,（ええと／そうですね）→ 考え中・少し間を置く
    Well, let me think about it.

★ポイント：By the way や Actually の後には、
  それまでの話題とは違う新しい情報が来ることが多い。
  設問でその後の内容を問われることが多いので注意して読む。

■ 相槌・聞き返しの表現（内容理解の助けになる）
  I see. / I understand.（なるほど）
  Really? / Are you serious?（本当に？）
  What do you mean?（どういう意味ですか）
  Sorry, could you say that again?（すみません、もう一度言っていただけますか）

⚠注意：これらの相槌表現自体が設問で問われることは少ないが、
  「話者が驚いている／納得していない」など心情を読み取るヒントになる。`,
      },
      {
        heading: '3. 空所補充（発言選択型）の解き方',
        level: 'oyo',
        body: `■ 対話文特有の空所補充のコツ
対話文の空所補充問題は、長文の空所補充と違い
「次の発言」から逆算して考えるのが最も効果的。

■ 解法の手順
  ① 空所の直前の発言を確認する（何を言っているか）
  ② 空所の直後の発言を確認する（それにどう応答しているか）
  ③ 直後の発言と自然につながる内容を選択肢から選ぶ
  ④ 選択肢の文末表現（疑問文/提案/断りなど）が直後の応答と矛盾しないか確認

  例）A: Would you like some more coffee?
      B: (　　)
      A: OK, I'll bring you some tea instead.
  → Aの2つ目の発言「代わりに紅茶を持ってきます」から、
    Bは「コーヒーを断った」と分かる。
  → 答え：No, thank you. I don't really like coffee.

★ポイント：「直後の発言に矛盾しない」という視点が最大の決め手。
  選択肢だけを見て自然に思えても、直後との整合性がなければ不正解。

■ 選択肢に共通するパターンから逆算する
選択肢が全て似た構造（例：全て Yes/No で始まる）の場合は、
質問の種類（Yes/No疑問文か疑問詞疑問文か）を先に確認する。

  疑問詞疑問文には Yes/No で答える選択肢は基本的に不正解になる。
    Where did you buy that bag? に対し No, I didn't. は不成立。`,
      },
      {
        heading: '4. イラスト・メモ付き対話文の読み方',
        level: 'oyo',
        body: `■ イラスト・表と対話文を照合する問題
値段表・時刻表・メニュー・地図などのイラストと合わせて出題される対話文は、
「対話の内容とイラストの情報を突き合わせる」ことが求められる。

■ 解法のポイント
  ① 対話文を読む前にイラスト・表の情報（項目・数値）をざっと確認する
  ② 対話中に出てくる数値・固有名詞に印をつけながら読む
  ③ 「変更・訂正」の発言（Actually.../ I changed my mind...）に特に注意する
     → イラストの当初の情報と、対話の中で変わった情報が異なることが多い

  例）（メニュー：Aセット500円、Bセット700円）
  A: I'll have the A set.
  B: Actually, could I change it to the B set instead?
  → 最終的な注文はBセット（700円）である点に注意。
    「最初に言った内容」ではなく「最終的にどうなったか」を問う設問が多い。

★ポイント：対話文は時間の流れとともに内容が変化することが多い。
  「結局どうなったか（最終結果）」を問う設問では、
  対話の最後の部分に正解の根拠があることが多い。

⚠注意：メモ・伝言問題では、対話に出てきた情報の一部だけがメモに反映される
  形式もあるため、「メモに書くべき情報は何か」を意識して読む。`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

次の対話文を読んで、設問に答えなさい。

A: Hi, Emily. Are you free this Saturday?
B: I think so. Why?
A: There's a new movie starting this weekend. Do you want to go with me?
B: That sounds fun! What time does it start?
A: There are two showings, one at 2 p.m. and another at 5 p.m.
B: Let's go to the later one. I have a piano lesson in the morning.
A: OK, then let's meet at the theater at 4:45.
B: Sounds good. See you then!

【問1】BはAのその日の予定として、朝に何をしていますか。
→ 答え：ピアノのレッスン

【問2】2人はどちらの回の映画を見に行くことにしましたか。
→ 答え：午後5時の回

【問3】（　）に入る最も適切なものを選びなさい。
A: OK, then let's meet at the theater at 4:45.
B: (　　)
① I'm just looking.  ② Sounds good. See you then!  ③ Speaking.  ④ Not yet.
→ 答え：②

【問4】この対話の内容と合っているものを選びなさい。
① Emily has no plans on Saturday morning.
② They decided to watch the movie at 2 p.m.
③ They will meet at the theater before the movie starts.
→ 答え：③`,
      },
    ],
  },

  {
    id: 'koko_eigo_20_translation_patterns',
    subject: 'eigo',
    examType: 'koko',
    order: 20,
    title: '和文英訳の頻出パターン',
    description: '和文英訳で頻出する日本語特有の言い回しを英語らしい発想に変換する技術を身につける',
    keyPoints: [
      `無生物主語構文：「〜のおかげで」「〜によって」を主語にする（This medicine will make you feel better.）`,
      `二重否定は肯定的な意味になる（ThereisnooneWhodoesnotknow〜＝みんな知っている）を訳し分ける`,
      `部分否定 not always/not all「いつも〜とは限らない／全てが〜なわけではない」`,
      `「〜させる」の訳し分け：使役動詞make/have/let、getto〜、help＋原形`,
      `「〜してもらう」「〜される」の受動的表現をhave/get＋O＋過去分詞で表す`,
      `日本語の「〜ので」「〜けれど」を接続詞1つで表し、becausebutの二重使用を避ける`,
      `数量・程度の日本語（〜くらい、〜ほど、〜割）を英語の比較・分数表現に対応させる`,
    ],
    sections: [
      {
        heading: '1. 無生物主語構文（日本語にない発想）',
        level: 'oyo',
        body: `■ 無生物主語構文とは
日本語では「人」を主語にする文でも、英語では「もの・こと」を主語にする方が
自然な場合が多い。これを無生物主語構文と呼ぶ。

  日本語：「この薬を飲めば、気分がよくなります。」
  直訳困難：If you take this medicine, you will feel better.（これも可）
  無生物主語：This medicine will make you feel better.
  （この薬はあなたを気分よくさせるだろう）

  日本語：「その知らせを聞いて、彼女は驚いた。」
  無生物主語：The news surprised her.（その知らせが彼女を驚かせた）

  日本語：「事故のせいで、私たちは遅れた。」
  無生物主語：The accident made us late.

■ よく使う無生物主語構文のパターン
  〜のおかげで…できる：〜 enable(s) 人 to 〜／〜 help(s) 人 (to) 〜
    This map will help you find the way.（この地図が道を見つける助けになる）
  〜によって…になる：〜 make(s) 人/物 〜
    Hard work made him successful.（努力が彼を成功させた）
  〜のため…できない：〜 prevent(s)/keep(s) 人 from -ing
    The heavy rain prevented us from going out.
    （大雨のため、私たちは外出できなかった）

★ポイント：「人が主語」の発想から抜け出し、「原因・理由」を主語にすると
  シンプルで英語らしい1文にまとまることが多い。

⚠注意：無生物主語構文は自由英作文では無理に使う必要はないが、
  和文英訳（与えられた日本語を訳す問題）では頻出パターンなので理解しておく。`,
      },
      {
        heading: '2. 否定表現の訳し分け（二重否定・部分否定）',
        level: 'oyo',
        body: `■ 二重否定（否定を2回使って肯定の意味にする）
「〜しない人はいない」＝「みんな〜する」という意味になる表現。

  There is no one who doesn't know his name.
  （彼の名前を知らない人はいない＝みんなが知っている）
  Nothing is impossible.（不可能なことは何もない＝何でも可能だ）

★ポイント：二重否定は強い肯定を表す修辞的な表現。
  和文英訳では「〜ない…はない」という日本語を見たら二重否定を疑う。

■ 部分否定（全部ではなく一部を否定する）
not all / not always / not every などは「全てではない」という意味になり、
「全て〜ない」という全否定とは全く違う意味になる。

  Not all students like studying.
  （すべての生徒が勉強好きというわけではない＝一部は好き）
  ⚠全否定との違い：No students like studying.（生徒は誰も勉強が好きではない）

  She is not always busy.（彼女はいつも忙しいわけではない＝時々暇）
  ⚠全否定：She is never busy.（彼女は決して忙しくない）

+------------------+----------------------------------+
| 表現             | 意味                             |
+------------------+----------------------------------+
| not all/every〜  | 全てが〜というわけではない（部分否定）|
| no/none/never〜  | 全く〜ない（全否定）              |
+------------------------------------------------------+

★ポイント：日本語の「みんなが〜というわけではない」を見たら
  not all / not every で部分否定を作ることを思い出す。

⚠注意：not all の位置に注意。主語につけるか、動詞の前につけるかで
  意味が変わらないよう、not all + 名詞の形を基本形として覚える。`,
      },
      {
        heading: '3. 「〜させる」「〜してもらう」の訳し分け',
        level: 'oyo',
        body: `■ 使役動詞の使い分け（make/have/let/get）
日本語の「〜させる」は文脈によって英語では異なる動詞を使う。

  make ＋ O ＋ 原形：（強制的に）〜させる
    My mother made me clean my room.（母は私に部屋を掃除させた＝強制）
  have ＋ O ＋ 原形：（当然のこととして）〜してもらう・させる
    I had my brother carry the bag.（弟に鞄を運んでもらった）
  let ＋ O ＋ 原形：（許可して）〜させてあげる
    My father let me use his car.（父は私に車を使わせてくれた＝許可）
  get ＋ O ＋ to不定詞：（説得して）〜させる
    She got her son to clean his room.（彼女は息子を説得して部屋を掃除させた）

★ポイント：「強制のmake」「許可のlet」「依頼・説得のget」の
  ニュアンスの違いを日本語の文脈から判断する。

■ 「〜してもらう」「〜される」の受動的表現（have/get + O + 過去分詞）
「（人に頼んで）〜してもらう」「（被害として）〜される」は
have/get ＋ 目的語 ＋ 過去分詞の形で表す。

  I had my hair cut yesterday.（昨日髪を切ってもらった）
  I got my bike fixed at the shop.（店で自転車を直してもらった）
  She had her bag stolen on the train.（電車でバッグを盗まれた＝被害）

★ポイント：目的語と過去分詞の間には「されるもの」の関係がある。
  my hair（切られる）→ cut、my bike（直される）→ fixed

⚠注意：have/get + O + 原形（誰かにさせる）と
  have/get + O + 過去分詞（〜される・してもらう）の形の違いに注意。
  I had him fix my bike.（彼に直させた／彼に直してもらった：人が主語で原形）
  I had my bike fixed.（自転車を直してもらった：ものが目的語で過去分詞）`,
      },
      {
        heading: '4. 接続詞の重複回避と数量・程度表現',
        level: 'oyo',
        body: `■ 「〜ので」「〜けれど」は接続詞を1つだけ使う
日本語では「〜だが、しかし…」のように接続詞的表現を重ねることがあるが、
英語では because と so、although と but を同じ文で重ねて使わない。

  ⚠注意：× Because it was raining, so we stayed home.（誤り：becauseとsoの重複）
  〇 Because it was raining, we stayed home.
  〇 It was raining, so we stayed home.

  ⚠注意：× Although he was tired, but he kept working.（誤り）
  〇 Although he was tired, he kept working.
  〇 He was tired, but he kept working.

★ポイント：日本語の「〜だから、それで」につられて2つ接続詞を使わないよう注意する。
  和文英訳では「1文に1つの接続詞（または等位接続詞）」が原則。

■ 数量・程度を表す日本語の英訳パターン
  「〜の半分」：half of 〜　　例）half of the students
  「〜の3分の1」：a[one] third of 〜
  「〜割」：〜 out of ten／〜 percent
    「7割の生徒が」→ seven out of ten students / 70 percent of students
  「〜くらい」：about 〜／around 〜
  「〜ほど…ない」：not as … as 〜（比較の章を参照）
  「〜倍」：〜 times as … as（twice as tall as など）

  例）About 70% of the students agreed with the idea.
      （生徒の約7割がその考えに賛成した）

★ポイント：日本語特有の分数・割合表現を英語の決まった型
  （X out of Y, X percent of, a [fraction] of）に落とし込む練習をしておく。

⚠注意：「〜人に1人」は one in 〜 という特別な言い方をすることも多い。
  One in three people has this experience.（3人に1人がこの経験を持つ）`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】次の日本語を英語にしなさい。
「この写真を見ると、私は子供の頃を思い出す。」
→ 答え例：This picture reminds me of my childhood.（無生物主語構文）

【問2】次の日本語を英語にしなさい。
「すべての生徒がその意見に賛成したわけではない。」
→ 答え例：Not all the students agreed with the opinion.

【問3】次の日本語を英語にしなさい。
「母は私に毎日30分ピアノを練習させる。」
→ 答え例：My mother makes me practice the piano for thirty minutes every day.

【問4】次の日本語を英語にしなさい。
「私は駅で財布を盗まれた。」
→ 答え例：I had my wallet stolen at the station.

【問5】次の英文の誤りを正しく直しなさい。
"Because I was busy, so I couldn't call you."
→ 答え：Because I was busy, I couldn't call you.（becauseとsoの重複を解消）

【問6】次の日本語を英語にしなさい。
「クラスの生徒の約4割がその映画を見たことがある。」
→ 答え例：About 40 percent of the students in my class have seen the movie.`,
      },
    ],
  },

  {
    id: 'koko_eigo_21_passive_advanced',
    subject: 'eigo',
    examType: 'koko',
    order: 21,
    title: '受動態の発展（群動詞・SVOO・知覚使役動詞）',
    description: '受動態の基本を超えて、群動詞・SVOO文型・知覚使役動詞の受動態まで正確に使いこなす',
    keyPoints: [
      `群動詞（take care of型）の受動態は動詞句をひとまとまりにしてbe動詞＋過去分詞にする`,
      `SVOO文型の受動態は目的語が2つあるため、どちらを主語にするかで2通りの受動態ができる`,
      `SVOC文型の受動態はO＝Cの関係を保ったまま、Cをbe動詞の後に残す`,
      `知覚動詞・使役動詞のSVOC（原形不定詞）を受動態にすると原形にtoが必要になる`,
      `助動詞を含む受動態 can/will/must be＋過去分詞、進行形の受動態 is being＋過去分詞`,
      `疑問文の受動態と否定の受動態の作り方（be動詞の位置に注意）`,
      `動作主が不明・重要でないときはby以下を省略する（人が主語の能動態に書き換えられないときに受動態を使う）`,
    ],
    sections: [
      {
        heading: '1. 群動詞（フレーズ動詞）の受動態',
        level: 'oyo',
        body: `■ 群動詞の受動態とは
「動詞＋前置詞／動詞＋副詞＋前置詞」のようなまとまり（群動詞）は、
受動態にするときも1つの動詞のように扱い、ひとまとまりのまま be動詞＋過去分詞にする。

  能動態：Everyone looks up to him.（みんなが彼を尊敬している）
  受動態：He is looked up to by everyone.
  （lookupto全体をひとまとまりとして受動態にする）

■ 受動態でよく使われる群動詞（入試頻出）
  take care of（〜の世話をする）
    → The baby was taken care of by her grandmother.
  laugh at（〜を笑う）
    → He was laughed at by his classmates.
  speak to（〜に話しかける）
    → She was spoken to by a stranger.
  look after（〜の世話をする）
    → The garden is looked after by Mr. Smith.
  put off（〜を延期する）
    → The meeting was put off until next week.
  bring up（〜を育てる）
    → He was brought up in a small town.

★ポイント：群動詞の受動態を作るときは、群動詞を分解せず
  「1つの動詞」として捉えることが最重要。前置詞を落とさないよう注意。

⚠注意：× He is looked by everyone up to.（誤り：前置詞の位置を動かしてはいけない）
  〇 He is looked up to by everyone.（群動詞のまとまりを崩さない）`,
      },
      {
        heading: '2. SVOO文型・SVOC文型の受動態',
        level: 'oyo',
        body: `■ SVOO（人＋物の2つの目的語）の受動態
give/tell/show/teach/send のように「人に物を〜する」動詞は目的語が2つあるため、
どちらを主語にするかで2種類の受動態ができる。

  能動態：My grandmother gave me this watch.
  （祖母は私にこの時計をくれた）

  「人」を主語にする受動態：
    I was given this watch by my grandmother.
    （私は祖母にこの時計を与えられた）
  「物」を主語にする受動態：
    This watch was given to me by my grandmother.
    （この時計は祖母によって私に与えられた）← toが必要になる点に注意

★ポイント：「物」を主語にするときは、元の文で使われていた前置詞
  （to/for）を正しく補う必要がある。
    give/show/tell/send → to を使う：This letter was sent to me.
    buy/make/cook → for を使う：A cake was made for her by him.

■ SVOC（O＝C）の受動態
call/name/make/keep/find などSVOCをとる動詞の受動態は、
補語（C）をそのままbe動詞の後ろに残す。

  能動態：We call him Ken.（私たちは彼をケンと呼ぶ）
  受動態：He is called Ken (by us).（彼はケンと呼ばれている）

  能動態：The news made her happy.（その知らせは彼女を幸せにした）
  受動態：She was made happy by the news.（彼女はその知らせで幸せにされた）

  能動態：They named the baby Emma.
  受動態：The baby was named Emma (by them).

★ポイント：SVOCの受動態では「O＝C」の関係（him＝Ken、her＝happy）が
  そのままS＝Cとして保たれる。Cの位置・形は変わらない。`,
      },
      {
        heading: '3. 知覚動詞・使役動詞（SVOC：原形不定詞）の受動態',
        level: 'oyo',
        body: `■ 知覚動詞のSVOC（O＋原形）を受動態にするとtoが必要になる
see/hear/feel などの知覚動詞は能動態では原形不定詞（動詞の原形）を使うが、
受動態にするとその原形の前に to が必要になる（入試最重要の変化点）。

  能動態：I saw him enter the room.（彼が部屋に入るのを見た）
  受動態：He was seen to enter the room (by me).
  （原形 enter に to がつき、to enter になる）

  能動態：They heard her sing a song.
  受動態：She was heard to sing a song (by them).

★ポイント：能動態では原形、受動態では to不定詞に変わる、というルールを覚える。
  ⚠注意：進行中の動作を表す -ing 形はそのまま使われることが多い。
    I saw him crossing the street. → He was seen crossing the street.
    （原形の場合のみtoが必要で、-ing形はそのまま）

■ 使役動詞 make のSVOC（O＋原形）も同様にtoが必要になる
使役動詞のうち make だけは受動態にすると to が必要になる
（have と let は受動態そのものがほとんど使われない）。

  能動態：His mother made him clean his room.
  受動態：He was made to clean his room (by his mother).
  （原形cleanにtoがつき、to cleanになる）

★ポイント：make ＋ O ＋ 原形 → be made to ＋ 原形（能動⇔受動でtoが出現）
  ⚠注意：let の受動態は英語として不自然になるため、
  入試ではほとんど出題されない（allow などに言い換えられることが多い）。
    He was allowed to use the computer.（≒letの受動態の代わりに使う表現）`,
      },
      {
        heading: '4. 助動詞・進行形を含む受動態と疑問文・否定文',
        level: 'oyo',
        body: `■ 助動詞を含む受動態（can/will/must be ＋ 過去分詞）
助動詞のある文を受動態にするときは〈助動詞＋be＋過去分詞〉の形になる。

  能動態：You must finish this work by tomorrow.
  受動態：This work must be finished by tomorrow.

  能動態：They will build a new library next year.
  受動態：A new library will be built next year.

  能動態：Everyone can see the mountain from here.
  受動態：The mountain can be seen from here.

★ポイント：助動詞の後ろは常に動詞の原形なので、be動詞も原形の be になる。
  ⚠注意：× This work must finished.（誤り：beが抜けている）

■ 進行形の受動態（is/are/was/were being ＋ 過去分詞）
「今〜されている最中だ」ということを表す。

  能動態：They are building a new bridge now.
  受動態：A new bridge is being built now.
  （その橋は今建設されている最中だ）

  過去進行形の受動態：
    The room was being cleaned when I arrived.
    （私が着いたとき、部屋は掃除されている最中だった）

■ 疑問文・否定文の受動態（復習と発展）
  疑問文：be動詞（または助動詞）を主語の前に出す。
    Was this bridge built in 1990? / Can this book be found in the library?
  否定文：be動詞（助動詞）の直後に not を置く。
    This bridge was not built in 1990. / This work cannot be finished today.

⚠注意：受動態の疑問文でdo/doesを使わないように注意（be動詞・助動詞を使う）。
  × Does this bridge built in 1990?（誤り）`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】次の文を受動態にしなさい。
Everyone in the class laughs at his jokes.
→ 答え：His jokes are laughed at by everyone in the class.

【問2】次の文を、下線部の語を主語にして受動態にしなさい。
My father bought me a new bike.（meを主語に）
→ 答え：I was bought a new bike by my father.

【問3】（　）に最も適切な形を入れなさい。
He was seen (　　) the building around noon.
① enter  ② to enter  ③ entering  ④ entered
→ 答え：② to enter（知覚動詞の受動態は to不定詞になる。※③も文脈により可だが原形からの書き換えでは②が基本）

【問4】次の文を受動態にしなさい。
His teacher made him rewrite the report.
→ 答え：He was made to rewrite the report by his teacher.

【問5】次の文を受動態にしなさい。
They are repairing the road now.
→ 答え：The road is being repaired now.

【問6】（　）に入る最も適切なものを選びなさい。
This letter (　　) be sent to him by tomorrow.
① must  ② must to  ③ has to be  ④ is must
→ 答え：①（助動詞＋be＋過去分詞）`,
      },
    ],
  },

  {
    id: 'koko_eigo_22_verb_patterns',
    subject: 'eigo',
    examType: 'koko',
    order: 22,
    title: '動詞の語法（SVOC・SVOOの応用）',
    description: '紛らわしい自動詞・他動詞と、SVOO・SVOCをとる動詞の語法を正確に整理する',
    keyPoints: [
      `自動詞と他動詞が紛らわしい動詞：rise(自)/raise(他)、lie(自)/lay(他)、rise/arise`,
      `say/tell/talk/speakは目的語のとり方が異なる（tellの直後は人、say/talk/speakは前置詞が必要な場合あり）`,
      `SVOO⇔SVO+to/forの書き換え：give/show/teach型はto、buy/make/cook型はfor`,
      `SVOCをとる代表的な動詞：call/name/make/keep/find/leave/paint/elect`,
      `keep/leave＋O＋現在分詞・形容詞（状態を保つ・そのままにする）`,
      `borrow/lend/rentの使い分け（借りる方向・お金がからむかどうか）`,
      `look/see/watchの違い（意図的に見るか、視界に入るか、動くものを注視するか）`,
    ],
    sections: [
      {
        heading: '1. 紛らわしい自動詞・他動詞',
        level: 'oyo',
        body: `■ rise（自動詞）と raise（他動詞）
  rise（自動詞：上がる、上昇する）：目的語をとらない
    The sun rises in the east.（太陽は東から昇る）
    Prices have risen recently.（最近物価が上がった）
  raise（他動詞：〜を上げる）：目的語が必要
    Please raise your hand.（手を挙げてください）
    The company raised the prices.（その会社は価格を上げた）

■ lie（自動詞：横になる）と lay（他動詞：〜を横たえる、置く）
  lie - lay - lain（自動詞：横になる・存在する）
    He lay on the bed and closed his eyes.（彼はベッドに横になり目を閉じた）
    ⚠注意：lie（横になる）の過去形は lay。lie（嘘をつく）の過去形は lied なので混同注意。
  lay - laid - laid（他動詞：〜を横たえる・置く）
    She laid the baby on the bed.（彼女は赤ちゃんをベッドに寝かせた）

■ sit（自動詞：座る）と seat（他動詞：〜を座らせる）
  I sat on the chair.（私は椅子に座った）
  Please be seated. / The usher seated us near the front.
  （前の方の席にご案内しました＝座らせた）

★ポイント：自動詞は「主語自身が動作をする」、他動詞は「他のものに〜させる」
  という視点で整理すると覚えやすい。rise（自ら上がる）／raise（何かを上げる）

⚠注意：これらは形が似ているため、空所補充・並べ替え問題で頻出。
  目的語（名詞）が後ろにあるかどうかで自動詞・他動詞を判断する。`,
      },
      {
        heading: '2. say/tell/talk/speakの使い分け',
        level: 'oyo',
        body: `■ say（〜と言う）：発言の内容を目的語にとる
  He said (that) he was tired.（彼は疲れていると言った）
  He said nothing.（彼は何も言わなかった）
  ⚠注意：sayの直後に「人」を置けない。
    × He said me that 〜（誤り）→ He said to me that 〜、または He told me that 〜

■ tell（〜に伝える）：直後に「人」が必要
  He told me that he was tired.（彼は私に疲れていると言った）
  He told me the truth.（彼は私に真実を告げた）
  He told me to wait here.（彼は私にここで待つように言った）

■ talk（話す）・speak（話す）：自動詞的に使われることが多い
  talk to/with 人（人と話す）：カジュアルな会話
    I talked with my friend for an hour.
  speak to 人（人に話しかける）：ややフォーマル、一方的な発言にも使う
    Can I speak to Mr. Brown?（ブラウンさんとお話しできますか）
  speak + 言語（〜語を話す）：目的語に直接言語がくる
    She speaks three languages.（彼女は3か国語を話す）

+--------+------------------+-----------------------------------+
| 動詞   | 直後にくる形     | 例                                 |
+--------+------------------+-------------------------------------+
| say    | (that)節・内容   | say (that) 〜 / say nothing        |
| tell   | 人 (+内容/to〜)  | tell 人 (that) 〜 / tell 人 to〜   |
| talk   | to/with 人       | talk to[with] 人 about 〜          |
| speak  | to 人 / 言語     | speak to 人 / speak English        |
+--------+------------------+-------------------------------------+

★ポイント：4つの動詞の「直後に何が来るか」の型を表で整理して覚える。`,
      },
      {
        heading: '3. SVOO⇔SVO＋to/forの書き換え',
        level: 'oyo',
        body: `■ SVOOをSVO＋前置詞に書き換える2つのグループ
「人に物を〜する」というSVOO文型は、物を先に置き
前置詞（to または for）を使ってSVOの形に書き換えられる。

■ to を使うグループ（相手に「渡る・伝わる」イメージの動詞）
  give/show/teach/tell/send/lend/pass/write
    He gave me a present. → He gave a present to me.
    She teaches us English. → She teaches English to us.
    I'll send you the photos. → I'll send the photos to you.

■ for を使うグループ（相手の「ために」何かをするイメージの動詞）
  buy/make/cook/get/find/choose
    My father bought me a bike. → My father bought a bike for me.
    She made him a cake. → She made a cake for him.
    I'll find you a good seat. → I'll find a good seat for you.

★ポイント：to のグループは「その物が実際に相手に届く・伝わる」動詞、
  for のグループは「相手のために（代わりに）行う」動詞、というイメージで区別する。

⚠注意：ask は for を使う特別な動詞（人に対して物・ことを求める）。
  I asked him a favor. → I asked a favor of him.（askはtoでもforでもなくof）

■ 代名詞を目的語にとるときの語順の制約
SVOOの「人」が代名詞（it/them等）のときは、SVO＋前置詞の形しか使えない。
  × Give me it.（不自然） → 〇 Give it to me.
  ⚠注意：物が代名詞になる場合は前置詞を使った形にするのが基本ルール。`,
      },
      {
        heading: '4. SVOCをとる重要動詞とkeep/leaveの語法',
        level: 'oyo',
        body: `■ SVOC（O＝Cの関係）をとる代表的な動詞
  call ＋ O ＋ C（OをCと呼ぶ）：We call the dog Pochi.
  name ＋ O ＋ C（OをCと名づける）：They named the boy John.
  make ＋ O ＋ C（OをCにする）：The news made him sad.
  keep ＋ O ＋ C（OをCのままにしておく）：Keep the door open.
  find ＋ O ＋ C（OがCだと分かる）：I found the book interesting.
  leave ＋ O ＋ C（OをCのままにする・放置する）：Don't leave the window open.
  paint ＋ O ＋ C（OをC色に塗る）：She painted the wall white.
  elect ＋ O ＋ C（OをCに選ぶ）：They elected him captain.

★ポイント：どの動詞も「O＝C」という等式関係が成り立つ。
  We call the dog Pochi. → the dog = Pochi
  I found the book interesting. → the book = interesting

■ keep/leave ＋ O ＋ 現在分詞・過去分詞（状態の維持・放置）
Cの位置に分詞（-ing/過去分詞）が来ることもある。

  keep ＋ O ＋ -ing（Oを〜させ続ける）
    The rain kept us waiting for an hour.（雨のため私たちは1時間待たされ続けた）
  leave ＋ O ＋ 過去分詞（Oを〜されたままにする）
    He left the door locked.（彼はドアに鍵をかけたままにした）
  leave ＋ O ＋ -ing（Oが〜している状態のままにする）
    She left the engine running.（彼女はエンジンをかけたままにした）

⚠注意：分詞の形（現在分詞か過去分詞か）は、Oとの能動・受動の関係で決まる。
  the door（鍵をかけられる側→過去分詞locked）
  the engine（動いている側→現在分詞running）

■ borrow/lend/rentの使い分け
  borrow（無料で借りる、持ち運べる物）：I borrowed a book from the library.
  lend（貸す）：Can you lend me your pen?
  rent（有料で借りる・貸す、主に不動産や乗り物）：We rented a car for the trip.
  ⚠注意：使う・使わせてもらう場所が固定されているもの（電話・トイレ等）は
  borrow ではなく use を使う：May I use your phone?（× borrow your phone）`,
      },
      {
        heading: '5. 入試問題例',
        level: 'nyushi',
        body: `📝入試問題例

【問1】（　）に適切な形を選びなさい。
The number of tourists has (　　) sharply this year.
① rose  ② risen  ③ raised  ④ raise
→ 答え：② risen（riseの過去分詞、自動詞なので受動態にしない）

【問2】次の文を書き換えなさい（forを使って）。
My mother made me a nice lunch.
→ 答え：My mother made a nice lunch for me.

【問3】（　）に最も適切なものを選びなさい。
Please (　　) me the way to the museum.
① say  ② talk  ③ tell  ④ speak
→ 答え：③ tell（直後に人が来るのはtell）

【問4】次の文の（　）に適切な語を入れなさい。
I found the movie very (　　).（面白かった、という意味に）
→ 答え：interesting（findのSVOC：O=Cの関係）

【問5】次の文の意味として最も適切なものを選びなさい。
"She left the light on when she went out."
① 彼女は電気をつけたまま出かけた
② 彼女は電気を消してから出かけた
③ 彼女は電気をつけ忘れた
→ 答え：①

【問6】（　）に適切な語を選びなさい。
Could you (　　) me your dictionary for a moment?
① borrow  ② lend  ③ rent  ④ use
→ 答え：② lend（貸してもらう＝lend、主語がcould youなので相手に貸してほしい）`,
      },
    ],
  },
];

export const kokoEigoLessons: Lesson[] = [
  ...kokoEigoOverviewLessons,
  ...kokoEigoExt01Lessons,
  ...kokoEigoExt02Lessons,
  ...kokoEigoExt03Lessons,
  ...kokoEigoExt04Lessons,
  ...kokoEigoExt05Lessons,
  ...kokoEigoExt06Lessons,
  ...kokoEigoExt07Lessons,
  ...kokoEigoExt08Lessons,
  ...kokoEigoExt09Lessons,
  ...kokoEigoExt10Lessons,
  ...kokoEigoExt11Lessons,
  ...kokoEigoExt12Lessons,
  ...lessonsNew20J1Eigo,
  ...lessonsNew20J2Eigo,
  ...lessonsNew20J3Eigo,
];
