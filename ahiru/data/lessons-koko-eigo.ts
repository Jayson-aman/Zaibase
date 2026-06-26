import type { Lesson } from './lesson-types';

export const kokoEigoLessons: Lesson[] = [
  {
    id: 'koko_eigo_01_tense',
    subject: 'eigo',
    examType: 'koko',
    order: 1,
    studyPeriod: '中1',
    title: '時制・助動詞・受動態',
    description: '時制の使い分けをマスターして英語の骨格を掴む',
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
];
