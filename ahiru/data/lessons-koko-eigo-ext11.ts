import type { Lesson } from './lesson-types';

// 高校受験 英語「会話文・リスニング・英作文」拡張ユニット（40セッション：koko_eigo_s376〜koko_eigo_s415）
// order は 876〜915。
// 構成：会話文の読解（電話・買い物・道案内・レストラン・学校）(8)／会話の定型表現と応答(5)／
//       空所補充の解き方(4)／リスニングの解き方・先読みと数字のメモ(5)／和文英訳の手順(4)／
//       語順並べかえの解き方(4)／条件英作文・語数指定と語句指定(5)／自由英作文・意見＋理由2つの型(5)
// リスニングは音声を再生できないため、すべて「スクリプトを読んで解く」形にし、
// 聞き取りの着眼点（数字・時刻・場所・否定語）を文字の上で確認できるようにしてある。
// 英作文のセッションには必ず模範解答を載せ、スペル・冠詞・三単現・時制・数の一致を検算済み。
// 自由英作文の模範解答は指定語数を実際に数え、図解（barChart）の語数配分と一致させてある。
// 図解は道案内の地図（coordinate）・時刻や順序（numberLine）・語数の配分（barChart）・
// 英作文の骨組み（polygon）に絞って付けてある（40課中19課）。
export const kokoEigoExt11Lessons: Lesson[] = [
  // ───────────── 1. 会話文の読解（s376〜s383） ─────────────
  {
    id: 'koko_eigo_s376',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文①：読む前に場面をつかむ',
    description: '会話文は「どこで・だれが・何のために」をつかめば、知らない単語があっても解ける',
    intro: '会話文の問題で、一行目からわからない単語が出てきてあせったことはありませんか。実は会話文は、どこで・だれが・何のために話しているかさえつかめば、単語が多少抜けても意味は復元できます。買い物なのか道案内なのかが決まれば、そのあとに出てくる表現はほぼ決まっているからです。',
    order: 876,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '会話文は読み始める前に「場所・人物・目的・設問」の4点を確認する。',
      '場所の手がかりは名詞に出る（menu・ticket・shelf・platform・prescription）。',
      '人物関係の手がかりは呼びかけ語に出る（Mom / Ms. Brown / sir / Excuse me）。',
      '目的は最初の2〜3行にほぼ必ず書かれている。最後まで読まないと目的がわからない会話文は入試ではまれ。',
      '知らない単語は飛ばしてよい。設問に関係する語だけ前後から意味を推測する。',
    ],
    sections: [
      {
        heading: '読む前にする4つの確認',
        body: `会話文は物語文とちがって、地の文（説明の文）がほとんどない。だれがどこで話しているのかは、セリフの中の語から自分で組み立てる必要がある。順番はいつも同じでよい。

■ ①どこで（場所）
場所を決めるのは名詞である。
例）menu / order / dessert → レストラン
例）ticket / platform / track / transfer → 駅
例）shelf / size / try it on / cash register → 店
例）homeroom / club / textbook / period → 学校
例）fever / cough / prescription → 病院

■ ②だれとだれ（人物）
呼びかけ語がいちばん強い手がかりになる。
例）Mom, / Dad, → 家族
例）Ms. Brown, / Mr. Tanaka, → 先生と生徒
例）Excuse me. / sir / ma'am → 見知らぬ人どうし（道案内・店）
例）Hi, Ken. → 友達どうし

■ ③何のために（目的）
会話には必ず「用件」がある。ふつう最初の2〜3行に出る。
例）I'm looking for a birthday present for my sister.（贈り物を探しに来た）
例）Could you tell me how to get to the museum?（行き方を聞きたい）

■ ④設問が何を聞いているか
本文より先に設問を読む。「空所に入る文」なのか「本文の内容と合うもの」なのかで、読むときに注意する場所が変わる。

★ ポイント：①〜④は本文全体を精読しなくても、冒頭の数行と設問文を見るだけでそろう。ここまでを30秒で終えてから本文を読むと、読むスピードが上がる。`,
        figureId: 'lf_kokoeigoext11_376',
      },
      {
        heading: '話し手の切りかわりを追う',
        body: `会話文でいちばん多いミスは、だれのセリフかを取りちがえることである。A と B の記号がある問題ならよいが、Ken: / Lisa: のように名前で示される問題や、記号がなく行だけが変わる問題もある。

■ 話し手を見失わないための三つの習慣
①名前・記号に○を付けながら読む。
②代名詞の指す人を確認する。会話では I ＝話している人、you ＝聞いている人に必ず切りかわる。同じ「I」でも行が変われば別人である。
③相手のセリフを受けた語を見る。
　例）A: I went to Okinawa last summer.／B: Did you? That sounds nice.
　この Did you? は「あなたは行ったのですか」であって、B が行ったのではない。

■ よくある取りちがえ
例）A: My brother is going to study in Canada next year.
　　B: Really? I want to go there someday.
「カナダに行くのはだれか」と問われて B と答えるのは誤り。行くのは A の兄（弟）で、B は「いつか行きたい」と言っているだけである。

★ ポイント：設問に人物の名前が出てきたら、その名前が本文で最初に出る行まで戻って、そこから読み直す。記憶で答えないこと。

⚠ 注意：会話文の登場人物は2人とはかぎらない。店員・親・先生が途中から加わる3人の会話もある。名前の数を最初に数えておく。`,
      },
    ],
    trapExamples: [
      {
        question:
          "次の会話で、カナダに留学するのはだれか。 A: My sister is going to study in Canada next year. B: Really? I want to study abroad someday, too.",
        wrongAnswer: 'B（会話をしている相手の方）',
        trapExplanation:
          'study abroad（留学する）という語句が B のセリフにあるので、留学するのは B だと思ってしまう。B の I want to 〜 は「したい」という願望であって、実際の予定ではない。',
        correctAnswer: 'A の姉（妹）',
        correctExplanation:
          'is going to study in Canada の主語は My sister であり、それを言っているのは A なので「A の姉（妹）」が留学する。B は too（〜も）を使って「自分もいつか留学したい」と言っているだけ。会話文では「実際に起きること」と「願望・予定」を区別して読む。',
      },
      {
        question:
          "次の会話はどこで行われているか。 A: Excuse me. Do you have this in a smaller size? B: Let me check. ... Yes, here you are. You can try it on over there.",
        wrongAnswer: '図書館',
        trapExplanation:
          'Do you have 〜? と Let me check. だけを見ると「在庫や資料を調べてもらう場面」に見えるため、図書館でも成り立ちそうに思えてしまう。',
        correctAnswer: '衣料品店（洋服の店）',
        correctExplanation:
          'size（サイズ）と try it on（試着する）は衣類に固有の表現で、図書館では使わない。場所を決めるときは、どの場面でも使える一般的な表現ではなく、その場所でしか使わない名詞・動詞句（size・try on・fitting room）を根拠にする。',
      },
    ],
  },

  {
    id: 'koko_eigo_s377',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文②：電話の会話',
    description: '電話特有の言い回し（May I speak to 〜? / Speaking. / Hold on.）を場面ごと覚える',
    intro: '英語で電話を受けたとき、「私です」を I am. と言ってしまいそうになります。ところが英語では Speaking. の一語で足ります。電話の会話は使う表現がごく限られていて、覚えてしまえば毎年の入試でそのまま得点になります。まずは「かける・つなぐ・不在」の三場面で整理しましょう。',
    order: 877,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'かける側：Hello. This is Ken (speaking). May I speak to Lisa, please?（電話では I am 〜 ではなく This is 〜）',
      '受ける側で本人：Speaking. / This is she(he). / Yes, this is Lisa.',
      'つなぐ：Just a minute, please. / Hold on, please. / I will get her.',
      '不在：She is not here right now. / She is out now. / Can I take a message?',
      '折り返し：Could you tell her to call me back? / I will call again later.',
      '間違い電話：I think you have the wrong number.',
    ],
    sections: [
      {
        heading: '電話の三場面と定型表現',
        body: `電話の会話は、①名乗る ②取りつぐ ③不在のときの対応、の三つで組み立てられている。順番も毎回同じなので、型ごと覚えてしまうのが速い。

■ ①名乗る・呼び出す
Hello. This is Ken Sato. May I speak to Lisa, please?
（もしもし、佐藤ケンです。リサさんをお願いします。）
・電話で自分を名乗るときは I am Ken. ではなく This is Ken. または Ken speaking.
・相手を呼び出すのは May I speak to 〜? / Can I speak to 〜?

■ ②取りつぐ・本人が出る
本人が出た場合：Speaking.（私です）／This is Lisa.
別の人が出た場合：Just a moment, please. / Hold on, please. / I'll get her.（呼んできます）

■ ③不在のとき
I'm sorry, but she isn't here right now.（あいにく今おりません）
She is out now. She'll be back around six.（外出中です。6時ごろ戻ります）
Can I take a message?（ご伝言を承りましょうか）→ かけた側の返事は
　Yes, please. Could you tell her to call me back?（折り返しお電話くださいとお伝えください）
　No, thank you. I'll call again later.（いえ、また後でかけ直します）

★ ポイント：Can I take a message?（伝言を預かる＝受ける側）と Can I leave a message?（伝言を残す＝かける側）は主語の立場が逆。take が受ける側、leave がかける側と覚える。`,
      },
      {
        heading: '設問でねらわれる点',
        body: `電話の会話文では、次の三種類の設問がくり返し出る。

■ ①空所に入る応答を選ぶ
A: Hello. May I speak to Ms. Green?
B: (　　)
選択肢に Speaking. / Hold on, please. / You're welcome. が並ぶ形が典型。B が Ms. Green 本人なら Speaking.、別人なら Hold on, please.。あとの行に I'll get her. や She isn't here. が続いていれば別人だとわかる。空所の直後を必ず見ること。

■ ②かけた側の目的を答える
会話の前半（用件を言う部分）に必ず書いてある。
例）I'm calling about tomorrow's practice.（明日の練習の件でお電話しました）
　about のあとが目的である。

■ ③伝言の内容を答える
数字（時刻・電話番号）が答えになることが多い。
例）Could you tell him that the meeting will start at ten thirty, not ten?
　→ not ten という言い直しに注意。答えは 10:30 である。

⚠ 注意：wrong number（間違い電話）の会話も出る。I think you have the wrong number. と言われたら、かけた側は I'm sorry. と謝る。ここで Thank you. を選ぶと誤り。

★ ポイント：電話の会話は必ず「用件 → 応答 → 確認」の順に進む。確認の行（So, you mean 〜? / Let me repeat 〜）には答えが集まるので、線を引いておく。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る応答として最も適切なものを選べ。 A: Hello. This is Ken. May I speak to Lisa? B: (　　) She is out now. Can I take a message?  ①Speaking. ②I'm sorry, she isn't here. ③You have the wrong number.",
        wrongAnswer: '① Speaking.',
        trapExplanation:
          'May I speak to Lisa? のあとの応答としてまず Speaking. を思い出してしまう。しかし空所の直後に She is out now.（彼女は今外出中です）と続いているので、電話に出たのはリサ本人ではない。',
        correctAnswer: "② I'm sorry, she isn't here.",
        correctExplanation:
          '空所補充は「空所の直後」で決まる。She is out now. Can I take a message? は不在のときの応対なので、空所にも不在を伝える文が入る。③は番号ちがいの場合の表現で、リサの所在を答えている流れに合わない。',
      },
      {
        question:
          "電話の会話で、ケンが伝言を残したい。空所に入る文を答えよ。 A: Can I take a message? B: Yes, please. (　　) I'm Ken Sato.",
        wrongAnswer: 'Can I take a message?',
        trapExplanation:
          '「伝言」といえば take a message という語句しか浮かばず、そのまま繰り返してしまう。しかし take a message は「伝言を預かる」で、電話を受けた側のセリフである。',
        correctAnswer: 'Could you tell her to call me back?（または Could you tell her that I called?）',
        correctExplanation:
          'かける側が伝言を残すときは leave a message、または具体的に Could you tell 人 to 〜?（〜するように伝えてください）を使う。take（受け取る）＝受ける側、leave（置いていく）＝かける側、と動詞の意味から立場を判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s378',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文③：買い物の会話',
    description: '店員と客のやりとりを、入店・商品探し・試着・値段・会計の順に整理する',
    intro: '店に入ったとたん May I help you? と声をかけられて、断りたいのに言葉が出てこない。そんな場面を英語で切り抜けるには、Just looking, thank you. の一言で足ります。買い物の会話は流れが決まっているので、どの段階のセリフかを見分けられれば、空所補充はほぼ確実に取れます。',
    order: 878,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '店員の第一声は May I help you? / Can I help you?（何かお探しですか）。',
      '客の返し方は二つ。探しているとき Yes, please. I am looking for 〜. ／見ているだけ No, thank you. I am just looking.',
      '試着：May I try it on? → 店員 Sure. The fitting room is over there.',
      '値段：How much is it? / How much are they?（複数形に注意）。',
      '購入を決める：I will take it. ／やめる：I will think about it.',
      '会計：Cash or card? / Here is your change.（change＝おつり）',
    ],
    sections: [
      {
        heading: '買い物の会話の五段階',
        body: `買い物の会話は次の順に進む。どの段階のセリフかがわかれば、空所に入る文は自動的に決まる。

■ ①入店
店員：May I help you? / Can I help you? / Are you looking for something?
客（探している）：Yes, please. I'm looking for a T-shirt for my brother.
客（見ているだけ）：No, thank you. I'm just looking.

■ ②商品を探す・すすめる
店員：How about this one? / We have this in blue and white.
客：Do you have this in a larger size?（大きいサイズはありますか）
　　Do you have any other colors?（ほかの色はありますか）

■ ③試着する
客：May I try it on? / Can I try this on?
店員：Sure. The fitting room is over there.
※ try on は「身につけてみる」。it・them など代名詞は try it on のように動詞と on の間に入れる（try on it は誤り）。

■ ④値段を聞く
客：How much is it? → 店員：It's fifteen dollars.
複数のものなら How much are they?
値引き・特売：It's on sale. / It's twenty percent off.

■ ⑤決める・会計
買う：I'll take it. / I'll take two, please.
やめる：It's a little expensive. I'll think about it.
会計：Cash or card? / Here's your change.（change＝おつり）

★ ポイント：I'll take it. は「それにします」であって「持って帰ってよいですか」ではない。買う意思を示す決まり文句である。`,
      },
      {
        heading: '数字と数えかたに注意する',
        body: `買い物の会話文では、値段・個数・サイズの数字が設問の答えになることが多い。読み飛ばすと失点に直結する。

■ 値段の計算が必要な問題
例）A: How much is this cap?
　　B: It's twelve dollars. But today everything is ten percent off.
「今日いくら払うか」と問われれば 12 ドルの1割引きなので 10.8 ドル。定価をそのまま答えないこと。

例）A: I'll take three notebooks.
　　B: They're two dollars each.
each（1つにつき）があるので、合計は 2×3＝6 ドル。each を見落とすと 2 ドルと答えてしまう。

■ 単数か複数か
値段をたずねる文は、品物が単数なら How much is it?、複数なら How much are they? になる。
また a pair of shoes（くつ1足）、a pair of pants（ズボン1本）は形の上では複数扱いで、These are nice. と受ける。

■ 支払いと通貨
入試では dollar と yen が中心。twelve dollars and fifty cents（12ドル50セント）のように cents が出ることもある。

⚠ 注意：change には「おつり」と「変える・交換する」の二つの意味がある。Here's your change. は「おつりです」。一方 Can I change this shirt? は「この服を交換できますか」。文の位置（名詞か動詞か）で判断する。

★ ポイント：数字が出たら、その直後の語（each / off / for two / in total）まで必ず読む。答えを分けるのは数字そのものではなく、この直後の語である。`,
      },
    ],
    trapExamples: [
      {
        question:
          "会話を読み、客が支払う金額を答えよ。 A: How much is this bag? B: It is thirty dollars, but it is twenty percent off today.",
        wrongAnswer: '30ドル',
        trapExplanation:
          'How much is this bag? の答えとして最初に出た thirty dollars をそのまま答えてしまう。but 以下の twenty percent off（2割引き）を読み飛ばしている。',
        correctAnswer: '24ドル',
        correctExplanation:
          'twenty percent off は「2割引き」。30ドルの20％は6ドルなので、30−6＝24ドルを支払う。値段の設問では but・however・today only のあとに必ず条件が付く。数字を見つけたら、そこで読むのをやめない。',
      },
      {
        question:
          '「これを試着してもいいですか」を英語にせよ。',
        wrongAnswer: 'May I try on it?',
        trapExplanation:
          'try on を一つのかたまりとして覚えているため、目的語をそのまま後ろに置いてしまう。名詞なら try on this shirt でもよいが、代名詞ではこの語順は使えない。',
        correctAnswer: 'May I try it on?',
        correctExplanation:
          'try on のように「動詞＋副詞」の組み合わせでは、目的語が it・them などの代名詞のとき、必ず動詞と副詞の間にはさむ。put it on / take it off / turn it on も同じ規則。名詞のときは try on this shirt / try this shirt on のどちらでもよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s379',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文④：道案内（基本の型）',
    description: '道をたずねる表現と、まっすぐ・曲がる・目印を英語で言い切る',
    intro: '駅前で外国の人に道をたずねられたら、何と言えばよいでしょう。実は英語の道案内は、「まっすぐ行く・曲がる・左右のどちら側にある」の三つだけで組み立てられます。地図を頭に置いて、この三つを順に並べる練習をすれば、会話文でもリスニングでも同じように解けます。',
    order: 879,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'たずねる：Could you tell me how to get to the post office? / Where is the post office?',
      'まっすぐ：Go straight (along this street) for two blocks.',
      '曲がる：Turn right(left) at the second corner. ／at the traffic light.',
      '見つかる：You will see it on your right(left). / It is on your left.',
      '位置関係：next to（となり）／across from（向かい）／between A and B（AとBの間）／at the corner of A and B',
      '所要時間：It takes about five minutes on foot(by bus).',
    ],
    sections: [
      {
        heading: 'たずねかたと答えかたの型',
        body: `道案内は、たずねる側と答える側の表現がそれぞれ決まっている。

■ たずねる
Excuse me. Could you tell me how to get to the station?（駅への行き方を教えていただけますか）
Excuse me. Where is the city library?
Is there a convenience store near here?（この近くにコンビニはありますか）
※ 見知らぬ人に話しかけるので、必ず Excuse me. から始める。Hello. や Hi. は使わない。

■ 答える（三つの部品を順に並べるだけ）
①進む：Go straight along this street.／Go down this street for two blocks.
②曲がる：Turn left at the first corner.／Turn right at the traffic light.
③見つける：You'll see it on your right.／It's on your left.／It's next to the bank.

例）Go straight for two blocks and turn right at the second corner. The post office is on your left. It's next to the bank.
（この通りを2区画まっすぐ行って、2つ目の角を右に曲がってください。郵便局は左側にあります。銀行のとなりです。）

■ わからないときの答え
I'm sorry, I'm a stranger here.（この辺は不案内です）
※ stranger は「知らない人」ではなく「その土地に不案内な人」。入試頻出。

★ ポイント：命令文（Go / Turn）で始めるのが基本。You should go 〜 や Please go 〜 でもよいが、答えの中心は動詞の原形である。`,
        figureId: 'lf_kokoeigoext11_379',
      },
      {
        heading: '位置を表す前置詞をまちがえない',
        body: `道案内の設問は「地図上のどこか」を選ばせる形が多い。位置を表す語を正確に区別できるかどうかで差がつく。

■ よく出る位置表現
next to the bank（銀行のとなり）
across from the station（駅の向かい・道をはさんで反対側）
between the bank and the hospital（銀行と病院の間）
in front of the school（学校の前）／behind the school（学校の裏）
on the corner of First Street and Green Street（1番通りとグリーン通りの角）
on your right / on your left（進行方向から見て右側・左側）

■ 区別が問われるもの
・next to（となり・くっついている）と near（近く・少し離れていてもよい）
・across from（道をはさんだ向かい）と in front of（正面・同じ側）
・on the right（右側）と to the right（右の方へ）

■ blocks の数えかた
two blocks は「交差点を2つ越える」という意味。Turn right at the second corner. も同じ地点を指すことが多い。first corner と second corner を取りちがえると、地図の答えが1つずれる。

⚠ 注意：on your left の your は「案内される人（歩いている人）」を指す。地図を上から見て左とはかぎらない。進む向きを地図に矢印で書きこんでから左右を決めること。

★ ポイント：地図問題は必ず地図に書きこむ。出発点に印、進む向きに矢印、曲がる角に○。頭の中だけで回転させようとすると必ず左右が入れかわる。`,
      },
    ],
    trapExamples: [
      {
        question:
          "案内を聞いて郵便局の場所を答えよ。 Go straight for two blocks and turn right at the second corner. The post office is on your left.",
        wrongAnswer: '2つ目の角を右に曲がって、地図の下側にある建物',
        trapExplanation:
          '地図を上から見たときの左右と、歩いている人から見た左右を同じだと思ってしまう。右に曲がったあとは進む向きが変わるので、on your left が指す方向も変わる。',
        correctAnswer: '2つ目の角を右折した先で、進行方向から見て左側にある建物',
        correctExplanation:
          'on your left は歩いている人を基準にした表現。曲がるたびに進行方向が90度変わるので、そのつど矢印を書き直して左右を判断する。地図に出発点と矢印を書きこむ習慣をつければ確実に防げる。',
      },
      {
        question: '「銀行は駅の向かいにあります」を英語にせよ。',
        wrongAnswer: 'The bank is in front of the station.',
        trapExplanation:
          '「向かい」を「前」と考えて in front of を選んでしまう。in front of は「同じ側の正面」で、道をはさんだ反対側という意味は持たない。',
        correctAnswer: 'The bank is across from the station.',
        correctExplanation:
          'across from 〜 は「〜の向かい側（道や川をはさんだ反対側）」。in front of 〜 は「〜の正面」で、駅前広場のように同じ敷地の前を指す。日本語の「前」と「向かい」の差が、そのまま前置詞の差になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s380',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文⑤：道案内（目印・所要時間・交通手段）',
    description: '目印を使った案内と、時間・交通手段をたずねる表現を組み合わせて読む',
    intro: '「2つ目の信号を左」と言われても、信号が見えなければ不安です。そこで英語の案内は、You will see a big hospital on your right. のように目印を先に示します。目印・かかる時間・乗り物。この三つが加わると案内文は一気に入試らしくなりますが、部品を知っていれば読み解けます。',
    order: 880,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '目印を示す：You will see a big park on your right. / Look for the tall building.',
      '所要時間：How long does it take? → It takes about ten minutes on foot.',
      '距離：How far is it from here? → It is about one kilometer.',
      '交通手段：by bus / by train / by bike ／ただし「徒歩で」は on foot（by walk は誤り）。',
      'バス・電車：Take the No. 5 bus and get off at the third stop. / Change trains at Osaka Station.',
      '確認：You cannot miss it.（見逃すことはありません＝すぐわかります）',
    ],
    sections: [
      {
        heading: '目印・時間・距離をたずねる',
        body: `道案内の会話が長くなるのは、目印・所要時間・交通手段が加わるからである。それぞれ決まった聞きかたと答えかたがある。

■ 目印（landmark）を使う案内
Go straight and you'll see a big hospital on your right. The library is just behind it.
（まっすぐ行くと右手に大きな病院が見えます。図書館はそのすぐ裏です。）
・you'll see 〜 は「〜が見えてきます」。案内文の途中に必ずといってよいほど入る。
・You can't miss it. は「見逃しっこないですよ＝すぐわかります」。否定の形だが安心させる表現である。

■ 所要時間
How long does it take (to get there)?（どのくらいかかりますか）
→ It takes about ten minutes on foot.（歩いて10分ほどです）
→ It takes fifteen minutes by bus.（バスで15分です）
※ 主語は it。The library takes ten minutes. とは言わない。

■ 距離
How far is it from here?（ここからどのくらいの距離ですか）
→ It's about one kilometer. / It's about a ten-minute walk.
※ a ten-minute walk はハイフンでつなぎ、minute を複数形にしない。

★ ポイント：How long（時間）と How far（距離）を混同しない。答えが minutes なら How long、kilometers なら How far。設問で「何を聞かれたか」を先に確定させる。`,
        figureId: 'lf_kokoeigoext11_380',
      },
      {
        heading: 'バス・電車の案内',
        body: `公立入試では、バスや電車の乗り換えを含む案内がよく出る。使う動詞が決まっているので、動詞ごと覚える。

■ 乗る・降りる
Take the No. 5 bus.（5番のバスに乗ってください）
Get on the bus at this stop.（このバス停で乗る）
Get off at the third stop.（3つ目のバス停で降りる）
※ get on / get off はバス・電車・飛行機。車やタクシーは get in / get out of を使う。

■ 乗り換える
Change trains at Umeda Station.（梅田駅で電車を乗り換える）
※ trains と複数形にする（乗る前の電車と乗ったあとの電車で2本だから）。
Take the Midosuji Line and transfer to the Chuo Line.

■ 時刻・本数
The next bus leaves at ten fifteen.（次のバスは10時15分発）
The bus comes every twenty minutes.（バスは20分おきに来ます）

■ 交通手段の言いかた
by bus / by train / by bike / by car（前に a や the を付けない）
ただし「徒歩で」は on foot。by walk とは言わない。
また「私の自転車で」のように限定するときは by my bike ではなく on my bike とする。

⚠ 注意：How can I get to 〜? と聞かれたら交通手段を答え、How long does it take to get to 〜? と聞かれたら時間を答える。設問の疑問詞を必ず確認すること。

★ ポイント：数字が二つ以上出てきたら（バスの番号・停留所の数・時刻）、それぞれ何の数字かを余白にメモする。No. 5 bus の 5 と third stop の 3 を取りちがえるミスが非常に多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「駅まで歩いて15分かかります」を英語にせよ。',
        wrongAnswer: 'It takes fifteen minutes by walk to the station.',
        trapExplanation:
          'by bus / by train と同じ形をあてはめて、「歩いて」も by walk と作ってしまう。walk は動詞・名詞ともに by と組み合わせて交通手段を表す用法がない。',
        correctAnswer: 'It takes fifteen minutes on foot to get to the station.（または It is a fifteen-minute walk to the station.）',
        correctExplanation:
          '「徒歩で」は on foot と決まっている（foot は単数形）。名詞を使って a fifteen-minute walk と言うこともでき、この場合 minute は複数形にせずハイフンでつなぐ。by walk・by walking はどちらも誤り。',
      },
      {
        question:
          "会話を読み、B が何番のバスに乗って、いくつ目で降りるかを答えよ。 A: How can I get to the museum? B: Take the No. 7 bus and get off at the fourth stop.",
        wrongAnswer: '4番のバスに乗り、7つ目で降りる',
        trapExplanation:
          '数字が二つ出てくると、番号と順序が入れかわって記憶される。とくにリスニングでは No. seven と fourth の順に聞こえるため、後から出た数字を先に書いてしまいやすい。',
        correctAnswer: '7番のバスに乗り、4つ目のバス停で降りる',
        correctExplanation:
          'No. 7 bus の 7 はバスの路線番号、the fourth stop の 4 は降りる停留所の順番。数字は「何の数字か」をセットでメモする（バス7／降4 のように）。序数（fourth）が付いている方が順番、No. が付いている方が番号だと形で見分けられる。',
      },
    ],
  },
  {
    id: 'koko_eigo_s381',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文⑥：レストランの会話',
    description: '席の案内から注文・食事中・会計まで、店員と客のセリフを流れで覚える',
    intro: 'レストランで Are you ready to order? と聞かれたとき、まだ決まっていなければ何と言えばよいでしょう。Not yet. の三文字で切り抜けられます。飲食店の会話は入店から会計まで進む順番が決まっていて、どの段階のセリフかがわかれば空所は迷わず埋まります。',
    order: 881,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '入店：How many (people)? → Three, please. ／This way, please.（こちらへどうぞ）',
      '注文：Are you ready to order? / May I take your order? → I will have the curry, please.',
      'まだのとき：Not yet. Could you give us a few more minutes?',
      '飲み物・追加：Anything to drink? / Would you like something to drink?',
      '食事中：How is everything? → It is delicious. ／おかわり：Can I have some more water?',
      '会計：Check, please. / Can we have the bill? ／持ち帰り：For here or to go?',
    ],
    sections: [
      {
        heading: '注文までの流れ',
        body: `レストランの会話は次の順に進む。設問の空所がどの段階にあるかを見れば、入る文はほぼ一つに絞れる。

■ ①入店・席
店員：How many people?／For how many?（何名様ですか）
客：Three, please.／A table for two, please.
店員：This way, please.（こちらへどうぞ）／Please follow me.

■ ②注文をとる
店員：Are you ready to order?／May I take your order?
客（決まっている）：Yes. I'll have the beef curry, please.／I'd like a hamburger.
客（まだ）：Not yet. Could you give us a few more minutes?
※ I'll have 〜 と I'd like 〜 が注文の中心表現。I want 〜 はぶしつけなので入試の解答には使わない。

■ ③追加でたずねる
店員：Anything to drink?／Would you like something to drink?
客：Orange juice, please.／No, thank you.
店員：How would you like your steak?（焼き加減は）→ Medium, please.
店員：Would you like anything else?（ほかに何か）→ That's all, thank you.

■ ④おすすめを聞く
客：What do you recommend?／What is today's special?
店員：Our fish is very good today.

★ ポイント：May I take your order? は「注文を承ります」で、店員のセリフ。客が使うことはない。だれのセリフかは主語（I＝店員か客か）と動詞（take／have）で決まる。`,
        figureId: 'lf_kokoeigoext11_381',
      },
      {
        heading: '食事中から会計まで',
        body: `後半は、料理が出てからの会話である。ここも表現が限られている。

■ 料理が出る・様子をたずねる
店員：Here you are.／Enjoy your meal.
店員：How is everything?（お味はいかがですか）
客：It's delicious.／Everything is fine, thank you.

■ 追加を頼む
Can I have some more water, please?
Excuse me. Could I have another fork? I dropped mine.
※ some more（もう少し）／another（もう一つ別の）。数えられるものは another、数えられないものは some more。

■ 会計
客：Check, please.／Can we have the bill, please?
店員：Cash or card?
客：I'll pay by card.／Can we pay separately?（別々に払えますか）
店員：Here's your change.（おつりです）

■ 持ち帰り
店員：For here or to go?（店内でお召し上がりですか、お持ち帰りですか）
客：To go, please.／For here, please.
食べ残しを持ち帰る：Could I have a doggy bag?／Can I take this home?

⚠ 注意：Check, please. の check は「勘定書」。「確認する」の check と同じつづりだが、レストランでは伝票の意味である。

★ ポイント：会話の設問で「客が最後に何をしたか」と問われたら、会計に関する行を探す。paid・change・card などの語が答えの手がかりになる。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る文を選べ。 Waiter: Are you ready to order? Customer: (　　) Could you give us a few more minutes?  ①Yes, I will have the pizza. ②Not yet. ③Check, please.",
        wrongAnswer: '① Yes, I will have the pizza.',
        trapExplanation:
          'Are you ready to order? という問いに対して Yes と答える形を反射的に選んでしまう。しかし空所の直後に「あと数分ください」と続くので、まだ注文が決まっていない場面である。',
        correctAnswer: '② Not yet.',
        correctExplanation:
          '空所補充は必ず直後の文と矛盾しないものを選ぶ。Could you give us a few more minutes? は「まだ決まっていない」ことを前提にした依頼なので、直前には Not yet.（まだです）が入る。③は会計のときの表現で、注文前の場面には合わない。',
      },
      {
        question: '「水をもう少しいただけますか」を英語にせよ。',
        wrongAnswer: 'Can I have another water, please?',
        trapExplanation:
          '「もう一つ」を another と覚えているため、水にもそのまま使ってしまう。another は an＋other なので、数えられる名詞にしか付けられない。',
        correctAnswer: 'Can I have some more water, please?',
        correctExplanation:
          'water は数えられない名詞なので、量を増やすときは some more を使う。数えられる名詞（fork・plate）なら another fork のように another でよい。なお a glass of water と単位を付ければ another glass of water と言うことはできる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s382',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文⑦：学校生活の会話',
    description: '授業・部活・時間割・行事など、学校を舞台にした会話の頻出表現をおさえる',
    intro: '入試の会話文でいちばん多い舞台は、実は学校です。受験生が毎日いる場所なので状況が想像しやすい一方、period（時限）や homeroom（学級活動）のような学校特有の語を知らないと足をすくわれます。時間割と放課後の予定、この二つの型を押さえておきましょう。',
    order: 882,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '時間割：first period（1時限目）／We have math in the third period.',
      '部活：I am on the soccer team. / I belong to the brass band. ／練習 We practice after school.',
      '行事：sports day（体育祭）／school festival（文化祭）／field trip（遠足・校外学習）',
      '欠席・遅刻：I was absent yesterday. / I was late for school.',
      '宿題・提出：hand in the report（提出する）／due（締め切りの）Friday',
      '誘う：Why do not we study together? → Sounds good. / Sorry, I have club activities.',
    ],
    sections: [
      {
        heading: '時間割と一日の流れ',
        body: `学校を舞台にした会話では、時刻と時限（period）が組み合わさって出る。数字の読み取りが設問になることが多い。

■ 時限・授業
We have four classes in the morning.（午前中は4時間授業です）
Math is in the third period.（数学は3時限目です）
The first class starts at eight forty.（1時間目は8時40分に始まります）
Our homeroom starts at eight thirty.（朝の学級活動は8時30分から）
※ period（時限）は class・lesson とほぼ同じ意味で使われるが、順番を言うときは period が多い。

■ 昼休み・放課後
We have lunch at twelve thirty.／Lunch break is forty-five minutes long.
School is over at three forty.（学校は3時40分に終わります）
after school（放課後）※ after the school とは言わない。

■ 教科名
math／science／social studies（社会）／Japanese／English／P.E.（体育）／music／art／home economics（家庭科）
※ 教科名には the を付けない。I like science.（○）I like the science.（×）

■ 場所
classroom／gym（体育館）／library／music room／science room（理科室）／teachers' room（職員室）／school ground(playground)（校庭）

★ ポイント：時刻は「時＋分」を続けて読む。eight forty＝8時40分、three fifteen＝3時15分。half past eight（8時半）、a quarter to nine（9時15分前＝8時45分）という言い方も出るので、to（〜前）と past（〜過ぎ）を区別しておく。`,
        figureId: 'lf_kokoeigoext11_382',
      },
      {
        heading: '部活・行事・誘いの表現',
        body: `学校の会話の後半では、放課後の予定や行事の相談が話題になる。誘う・断るのやりとりが空所補充で頻出する。

■ 部活動
I'm on the tennis team.（テニス部に入っています）※ 運動部は on the 〜 team
I'm in the brass band.／I belong to the art club.（文化部は in／belong to）
We practice three times a week.（週3回練習します）
We don't have practice today.（今日は練習がありません）

■ 行事
sports day / sports festival（体育祭）
school festival / culture festival（文化祭）
field trip（校外学習）／school trip（修学旅行）
entrance ceremony（入学式）／graduation ceremony（卒業式）
chorus contest（合唱コンクール）

■ 誘う・応じる・断る
誘う：Why don't we go to the library after school?（放課後、図書館に行かない？）
　　　How about studying together this weekend?
　　　Do you want to come with us?
応じる：Sure. / Sounds good. / That's a good idea. / I'd love to.
断る：Sorry, I can't. I have club activities today.
　　　I'd like to, but I have to help my mother.
※ 断るときは Sorry + 理由 の二段構えが基本。No. だけで終わる選択肢は入試の正解になりにくい。

⚠ 注意：Why don't we 〜? は「なぜ私たちは〜しないのか」ではなく「〜しませんか」という誘い。Why don't you 〜? は「〜したらどうですか」という提案。we と you で意味が変わる。

★ ポイント：誘いの会話では「結局、二人は何をすることにしたか」が問われる。会話の最後の3行に答えがあるので、そこは丁寧に読む。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はサッカー部に入っています」を英語にせよ。',
        wrongAnswer: 'I am in the soccer team.',
        trapExplanation:
          '「〜部に入っている」を「中にいる」と考えて in を使ってしまう。文化部（in the brass band）では in が正しいので、いっそう混同しやすい。',
        correctAnswer: 'I am on the soccer team.（または I belong to the soccer team.）',
        correctExplanation:
          'team という語を使うときは on the 〜 team が決まった形。soccer club のように club を使えば I am in the soccer club. でよい。team なら on、club・band なら in、と名詞に合わせて前置詞を決める。belong to はどちらにも使える。',
      },
      {
        question:
          "会話を読み、二人が待ち合わせる時刻を答えよ。 A: Let's meet at two thirty at the library. B: Sorry, my club activity ends at three. Can we make it half an hour later?  A: OK.",
        wrongAnswer: '2時30分',
        trapExplanation:
          '最初に出た two thirty を答えにしてしまう。会話文では最初の提案がそのまま通ることはむしろ少なく、あとで変更されるのが定番である。',
        correctAnswer: '3時',
        correctExplanation:
          'make it half an hour later は「30分遅らせる」。2時30分＋30分＝3時になる。A が OK. と受け入れているので変更が成立している。会話文の時刻問題では、Can we make it 〜? / How about 〜 instead? など変更を申し出る表現のあとを必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s383',
    subject: 'eigo',
    examType: 'koko',
    title: '会話文⑧：長い会話文の総合演習',
    description: '設問の型（内容一致・空所補充・下線部説明）ごとに、本文のどこを見るかを決める',
    intro: '会話文が20行を超えると、どこを読み直せばよいかわからなくなります。しかし設問の型は三つしかありません。内容一致・空所補充・下線部の説明。型ごとに「本文のどこに答えがあるか」は決まっているので、それを覚えれば長さは怖くなくなります。',
    order: 883,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '設問を先に読み、キーワード（人名・数字・場所）に印を付けてから本文を読む。',
      '内容一致問題は、選択肢の主語と本文の主語が一致しているかを最初に確認する。',
      '空所補充は「空所の直後」がいちばん強い手がかり。次に強いのが直前。',
      '下線部の指示語（it・that・one）は、直前の文の中の名詞句を探す。',
      '選択肢に all・always・never・only があれば、本文の言い過ぎでないか確かめる。',
      '本文にない情報を足した選択肢は、内容が正しそうでも誤り。',
    ],
    sections: [
      {
        heading: '設問の型と、答えのある場所',
        body: `長い会話文でも、設問は次の三つに分かれる。型ごとに探す場所を決めておけば、全文を読み直す必要はない。

■ ①内容一致（本文の内容と合うものを選べ）
選択肢を一つずつ本文と照合する。照合の順番は「主語 → 動詞 → 数字・時 → 修飾語」。
例）選択肢：Ken went to Kyoto with his family last summer.
　本文：I went to Kyoto with my friends last summer.
　→ 主語も動詞も時も合っているが、with my friends と with his family がちがうので誤り。
選択肢は「一語だけ入れかえて誤りにする」のが定番である。だから全部読んでから判断せず、部品ごとに照合する。

■ ②空所補充
空所の直後の一文がいちばん強い手がかり。
例）A: (　　)　B: Yes, please. I'm looking for a jacket.
　→ B が Yes, please. と答えて用件を言っているので、空所は May I help you?
直後で判断できないときは直前を見る。それでも決まらなければ、会話全体の場面（店・道案内など）で消去する。

■ ③下線部の意味・指示語
it・that・one・so が何を指すかは、原則としてその直前の文の中にある。
例）A: I lost my umbrella yesterday. B: That's too bad. → That は「傘をなくしたこと」。
※ 指すのは語ではなく、文の内容全体である場合も多い。

★ ポイント：設問を先に読むこと。人名・数字・場所などのキーワードを覚えたうえで本文に入ると、そのキーワードが出た行で自然に手が止まる。`,
      },
      {
        heading: '誤りの選択肢の作られ方',
        body: `内容一致問題の誤答は、無作為に作られているわけではない。次の四つのパターンしかないと言ってよい。

■ ①主語のすりかえ
本文で A がしたことを、選択肢では B がしたことにする。会話文でいちばん多い誤答。
例）本文：Lisa: My brother plays the guitar.／選択肢：Lisa plays the guitar.

■ ②時のすりかえ
過去にしたことを未来の予定に、予定を実現したことにする。
例）本文：I'm going to visit Nara next month.／選択肢：He visited Nara last month.

■ ③言い過ぎ（強すぎる語）
本文では some / sometimes なのに、選択肢では all / always / never / only になっている。
例）本文：I sometimes go to the library on Sundays.／選択肢：He always goes to the library on Sundays.

■ ④本文にない情報の追加
内容としてはもっともらしいが、本文のどこにも書かれていない。
例）本文にはカレーを注文したとしか書かれていないのに、選択肢は「それが好物だから注文した」と理由を足している。

⚠ 注意：「常識的に正しそう」で選ばないこと。判断の根拠は必ず本文の一行である。選んだ選択肢について「本文の何行目が根拠か」を言えなければ、まだ選んではいけない。

★ ポイント：④を見抜く合言葉は「本文に書いてあるか」。②を見抜く合言葉は「いつの話か」。この二つを毎回口の中で唱えるだけで、内容一致の正答率は大きく上がる。`,
      },
    ],
    trapExamples: [
      {
        question:
          "本文の内容と合うものを選べ。本文：Ken: I sometimes go to the city library on Sundays.  ①Ken always goes to the library on Sundays. ②Ken goes to the library on Sundays sometimes.",
        wrongAnswer: '① Ken always goes to the library on Sundays.',
        trapExplanation:
          '「日曜に図書館へ行く」という大筋が合っているので正しく見える。sometimes（ときどき）と always（いつも）の差は一語なので、読み流すと気づかない。',
        correctAnswer: '② Ken goes to the library on Sundays sometimes.',
        correctExplanation:
          '内容一致では頻度・程度を表す語（always／usually／often／sometimes／never）が入れかえの標的になる。選択肢に always・never・all・only があったら、まず本文の該当語を確認する。本文が sometimes なら always は言い過ぎで誤り。',
      },
      {
        question:
          "下線部 That is too bad. の That が指す内容を日本語で答えよ。 A: I practiced very hard, but I could not join the game because I hurt my leg. B: That is too bad.",
        wrongAnswer: '一生懸命練習したこと',
        trapExplanation:
          '直前の文の最初にある I practiced very hard を That の指す内容だと考えてしまう。しかし That is too bad. は残念な気持ちを表す返事なので、指すのは「よくないできごと」でなければならない。',
        correctAnswer: '（ケンが）足をけがして試合に出られなかったこと',
        correctExplanation:
          '指示語は「直前にあるもの」ではなく「文脈上つじつまの合うもの」を指す。That is too bad.（それはお気の毒に）という反応から、指す内容は残念なできごと、つまり but 以下の「けがで試合に出られなかったこと」だとわかる。指示語は、当てはめた後に文全体が自然に読めるかを必ず確認する。',
      },
    ],
  },

  // ───────────── 2. 会話の定型表現と応答（s384〜s388） ─────────────
  {
    id: 'koko_eigo_s384',
    subject: 'eigo',
    examType: 'koko',
    title: '定型表現①：あいさつ・紹介・別れ',
    description: '初対面・久しぶり・別れ際の決まり文句と、その正しい返し方をそろえる',
    intro: 'How are you? に対して I am fine, thank you. And you? だけを覚えていると、Not so good. と返されたときにつまずきます。あいさつは「言う側」と「返す側」がセットです。両方を組にして覚えると、空所がどちらの側にあっても迷わなくなります。',
    order: 884,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '初対面：Nice to meet you. → 返しは Nice to meet you, too.（too を落とさない）',
      '久しぶり：Long time no see. / I have not seen you for a long time.',
      '調子をたずねる：How are you doing? / How is it going? → Pretty good. / Not so good.',
      '紹介する：This is my friend Ken.（人を紹介するときも This is 〜）',
      '別れ際：See you later. / Have a nice weekend. → 返しは You too. / Thanks, you too.',
      '感謝と応答：Thank you. → You are welcome. / No problem. / My pleasure.',
    ],
    sections: [
      {
        heading: '出会いのあいさつ',
        body: `あいさつは「かけることば」と「返しことば」を必ず組にして覚える。入試の空所補充は、どちらか一方が空所になっている。

■ 初対面
A: Nice to meet you.（はじめまして）
B: Nice to meet you, too.
※ too を落とすと不自然。また二度目に会ったときは meet ではなく Nice to see you again. を使う。

■ 人を紹介する
This is my friend, Ken.（こちらは友人のケンです）
※ 人を紹介するときも He is 〜 ではなく This is 〜 で始めるのが決まり。電話で名乗るときと同じ形である。

■ 久しぶりに会う
Long time no see.（久しぶり）
I haven't seen you for a long time.
How have you been?（どうしてた？）→ I've been fine.／Pretty good.

■ 調子をたずねる
How are you?／How are you doing?／How's it going?
返事は一通りではない。
　良い：I'm fine, thank you.／Pretty good.／Great.
　ふつう：Not bad.／So-so.
　良くない：Not so good.／I have a cold.
※ 相手が Not so good. と答えたら、次は That's too bad. / What's wrong? と受ける。ここで That's good. を選ぶと誤り。

★ ポイント：あいさつの空所補充は、直後の相手の反応で決まる。相手が That's too bad. と言っていれば、空所には良くない内容が入る。`,
      },
      {
        heading: '別れ際と感謝の表現',
        body: `会話文の最後の2行には、別れのあいさつがほぼ必ず置かれる。ここが空所になることも多い。

■ 別れる
See you later.／See you tomorrow.／See you.
Take care.（気をつけて）
Have a nice weekend.／Have a good day.／Have fun.
　→ 返しは You too.／Thanks, you too.（「あなたもね」）
※ Have a nice weekend. に Thank you. とだけ返すのは不十分で、入試では You too. を含む選択肢が正解になりやすい。

Good luck (on your test).（がんばって）→ Thanks. I'll do my best.

■ 感謝
Thank you (very much).／Thanks a lot.／Thank you for helping me.
　※ Thank you for のあとは動名詞（〜ing）。Thank you for help me. は誤り。
返し：You're welcome.／No problem.／My pleasure.／Don't mention it.

■ おわび
I'm sorry.／I'm sorry for being late.（遅れてすみません）
返し：That's all right.／No problem.／Never mind.
※ Thank you. への返しと I'm sorry. への返しで No problem. は共通して使える。

⚠ 注意：Excuse me. と I'm sorry. は使い分ける。Excuse me. は話しかけるとき・人の前を通るとき（これから迷惑をかけるとき）。I'm sorry. はすでにしたことをわびるとき。

★ ポイント：別れ際の表現は、会話の内容を答える設問のヒントにもなる。Good luck on your test. とあれば、相手はこれから試験を受けるとわかる。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る応答を選べ。 A: Have a nice weekend! B: (　　)  ①Thank you. ②Thanks, you too. ③You are welcome.",
        wrongAnswer: '① Thank you.',
        trapExplanation:
          '「よい週末を」と言われたので、お礼だけを返せばよいと考えてしまう。文法的にも会話としても誤りではないが、入試ではより自然な応答が正解になる。',
        correctAnswer: '② Thanks, you too.',
        correctExplanation:
          '相手にも同じことが当てはまるあいさつ（Have a nice weekend. / Have a good day. / Enjoy your trip.）には、You too.（あなたもね）を添えて返すのが定型。③の You are welcome. は Thank you. への返しなので、この場面では使えない。',
      },
      {
        question: '「手伝ってくれてありがとう」を英語にせよ。',
        wrongAnswer: 'Thank you for help me.',
        trapExplanation:
          '日本語の「手伝ってくれて」を動詞のまま英語にしてしまう。for のあとに動詞の原形を置く形は英語には存在しない。',
        correctAnswer: 'Thank you for helping me.',
        correctExplanation:
          'for は前置詞なので、あとに動詞を続けるときは必ず動名詞（〜ing）にする。Thank you for coming. / Thank you for inviting me. も同じ形。なお Thank you for your help. のように名詞を使ってもよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s385',
    subject: 'eigo',
    examType: 'koko',
    title: '定型表現②：依頼・許可・申し出（丁寧さの段階）',
    description: 'Can / Could / Will / Would / May の使い分けと、承諾・断りの返し方',
    intro: '同じ「窓を開けてくれますか」でも、Can you 〜? と Would you 〜? では相手に与える印象がちがいます。英語の丁寧さは、実は助動詞を過去形にするだけで一段上がります。だれに何を頼む場面かを読み取り、ふさわしい高さの表現を選べるようにしましょう。',
    order: 885,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '依頼（相手にしてもらう）：Can you 〜? ＜ Will you 〜? ＜ Could you 〜? ＜ Would you 〜?',
      '許可（自分がする）：Can I 〜? ＜ Could I 〜? ＜ May I 〜?',
      '申し出（してあげる）：Shall I 〜? / Do you want me to 〜? / Would you like me to 〜?',
      '承諾：Sure. / Of course. / No problem. / Certainly. ／許可には Sure, go ahead.',
      '断り：I am sorry, but 〜 のあとに必ず理由を付ける。',
      'Would you mind 〜ing? への承諾は Not at all.（否定で答えるのが承諾）。',
    ],
    sections: [
      {
        heading: '依頼・許可・申し出の三系統',
        body: `助動詞を使った表現は、主語が you か I かで意味が変わる。まずここを分けて整理する。

■ ①依頼（相手にしてもらう）＝主語は you
Can you open the window?（窓を開けてくれる？）
Will you open the window?
Could you open the window?（開けていただけますか）
Would you open the window?
※ 過去形（could / would）を使うほど丁寧になる。過去の意味は持たない。
Would you mind opening the window?（開けていただけませんか）※ mind のあとは動名詞。

■ ②許可（自分がする）＝主語は I
Can I use your pen?（ペンを使ってもいい？）
Could I use your pen?
May I use your pen?（使わせていただけますか）※ May I 〜? がもっとも改まった言い方。

■ ③申し出（自分がしてあげる）
Shall I carry your bag?（かばんをお持ちしましょうか）
Do you want me to help you?
Would you like me to open the window?
※ Shall we 〜? は「（いっしょに）〜しませんか」で誘い。Shall I と Shall we で意味が変わる。

★ ポイント：空所補充では、返事から逆算できる。返事が Yes, please.（お願いします）なら申し出、Sure, go ahead.（どうぞ）なら許可、Sure, I will.（いいですよ）なら依頼である。`,
        figureId: 'lf_kokoeigoext11_385',
      },
      {
        heading: '承諾・断りと、まちがえやすい応答',
        body: `依頼や許可への返し方は決まっているが、一つだけ形が逆になるものがある。

■ 承諾
依頼に対して：Sure./ Of course./ No problem./ All right./ Certainly.
許可に対して：Sure, go ahead./ Of course you can.
申し出に対して：Yes, please./ Thank you. That's very kind of you.

■ 断り
I'm sorry, but I'm busy now.
I'd like to, but I have to finish my homework.
I'm afraid I can't. I have another plan.
※ 断りは「わびの一言＋理由」がセット。No, I can't. だけで終わる選択肢は入試の正解になりにくい。

■ 形が逆になるもの
Would you mind opening the window?（窓を開けるのを気にしますか＝開けていただけませんか）
　承諾：Not at all./ Of course not./ No, I don't mind.（否定が「いいですよ」）
　断り：I'm sorry, but 〜
mind は「いやだと思う」なので、「いやではない＝どうぞ」となる。Yes. と答えると「いやです」の意味になってしまう。

⚠ 注意：Shall I 〜? への答えは Yes, please. / No, thank you.。Yes, you shall. とは言わない。同じく Can I 〜? に Yes, you can. は堅すぎるので、会話では Sure. や Go ahead. が選ばれる。

★ ポイント：丁寧さの段階は「相手との距離」で選ぶ。友達なら Can you 〜?、先生や店員など目上・初対面の相手なら Could you 〜? / May I 〜?。会話文の設問では、呼びかけ語（Ms. Green / Excuse me）が段階を決める手がかりになる。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る応答を選べ。 A: Would you mind closing the door? B: (　　) It is cold today.  ①Yes, I would. ②Not at all. ③No, thank you.",
        wrongAnswer: '① Yes, I would.',
        trapExplanation:
          '「はい、閉めます」のつもりで Yes を選んでしまう。しかし mind は「いやだと思う」なので、Yes は「いやです（＝閉めたくない）」という意味になり、直後の It is cold today.（寒いですから）と矛盾する。',
        correctAnswer: '② Not at all.',
        correctExplanation:
          'Would you mind 〜ing? は「〜するのをいやだと思いますか」という問い。承諾するときは Not at all. / Of course not. / No, I do not mind. と否定で答える。断るときは I am sorry, but 〜 を使う。「否定＝承諾」という逆転を覚えておく。',
      },
      {
        question:
          "先生に「窓を開けてもよいですか」とていねいに許可を求める文を書け。",
        wrongAnswer: 'Could you open the window?',
        trapExplanation:
          'Could を使えば丁寧になると覚えているため、主語まで意識せずに you を置いてしまう。しかしこれでは「先生が開けてください」という依頼の文になり、許可を求める文にならない。',
        correctAnswer: 'May I open the window?（または Could I open the window?）',
        correctExplanation:
          '許可を求めるのは自分が行動する場面なので、主語は I。依頼（相手が行動する）は you。丁寧さの高さより先に「行動するのはだれか」で主語を決め、それから助動詞の丁寧さを選ぶ。May I 〜? がもっとも改まった許可の表現である。',
      },
    ],
  },
  {
    id: 'koko_eigo_s386',
    subject: 'eigo',
    examType: 'koko',
    title: '定型表現③：提案・勧誘とその応じ方',
    description: 'Why do not we 〜? / How about 〜ing? / Shall we 〜? を、応じ方とセットで使い分ける',
    intro: '友達を映画に誘いたいとき、Let us go. 以外の言い方をいくつ挙げられるでしょうか。英語には誘いの表現が四つ五つあり、入試ではそれらを言いかえる問題が定番です。形がちがっても意味は同じ、という関係を押さえておくと、書きかえ問題も会話文もまとめて得点になります。',
    order: 886,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '誘う：Let us 〜. / Shall we 〜? / Why do not we 〜? / How about 〜ing? / What about 〜ing?',
      'How about のあとは動名詞（How about going 〜?）。原形は置けない。',
      '提案（相手に）：Why do not you 〜?（〜したらどうですか）／You should 〜.',
      '応じる：Sure. / Sounds good. / That is a good idea. / Yes, let us.',
      '断る：I am sorry, but I cannot. ＋理由 ／I would like to, but 〜',
      'Let us 〜. への返事は Yes, let us. / No, let us not.（All right. でもよい）',
    ],
    sections: [
      {
        heading: '同じ意味の五つの誘いかた',
        body: `「いっしょに〜しませんか」は、次のどの形でも表せる。書きかえ問題で入れかえられるので、形の違いを正確に覚える。

Let's play tennis after school.
Shall we play tennis after school?
Why don't we play tennis after school?
How about playing tennis after school?
What about playing tennis after school?

■ 形の注意点
・Let's のあとは動詞の原形（Let's playing は誤り）。
・Shall we のあとも動詞の原形。
・Why don't we のあとも動詞の原形。
・How about / What about のあとは動名詞（〜ing）または名詞。about が前置詞だからである。
　例）How about some tea?（名詞でもよい）

■ 相手に提案する形（自分は加わらない）
Why don't you ask your teacher?（先生に聞いてみたらどう？）
You should see a doctor.（医者に行ったほうがいいよ）
Shall I help you?（手伝いましょうか）※ これは申し出

■ we と you のちがい
Why don't we go? → いっしょに行こう（誘い）
Why don't you go? → 君が行ったらどう（提案）
主語一語で意味が変わるので、会話文では必ず we か you かを確認する。

★ ポイント：Let's 〜, shall we? という付加疑問の形もある。Let's go, shall we? のとき、付加部分は will we? ではなく shall we? である。`,
      },
      {
        heading: '応じ方・断り方と、会話の続き',
        body: `誘いに対する返事は、承諾・保留・断りの三つに分かれる。入試の空所補充では、返事のあとの文と矛盾しないものを選ばせる。

■ 承諾
Sure./ OK./ All right./ Sounds good./ That sounds nice.
That's a good idea./ I'd love to./ Yes, let's.
※ Let's 〜. への正式な返事は Yes, let's. / No, let's not.。

■ 保留・条件つき
Well, let me check my schedule.
Can I tell you tomorrow?
It depends on the weather.（天気しだいだね）

■ 断り
I'm sorry, but I can't. I have to take care of my brother.
I'd like to, but I have a piano lesson on Saturday.
Thank you for asking, but I'm busy this weekend.
※ 断りは「わび＋理由」。理由がないと会話が続かないので、入試の正解にはならないことが多い。

■ 断られたあとの会話の続き
断られると、たいてい代案が出る。
A: How about going to the movies on Saturday?
B: I'd like to, but I have club activities on Saturday.
A: Then how about Sunday?（では日曜はどう？）
B: Sunday is fine.
※「結局いつになったか」を問う設問はこの流れの最後にある。then / instead / how about 〜 instead? は代案の合図なので印を付ける。

⚠ 注意：Sounds good. の主語は省略された It。That sounds good. とも言うが、It sounds like good. のように like を入れるのは誤り（sound のあとに形容詞を直接置く）。

★ ポイント：会話文で「二人は何をすることに決めたか」を問われたら、最後の承諾の行を探す。最初の提案ではなく、最後に Yes と言われた案が答えである。`,
      },
    ],
    trapExamples: [
      {
        question: 'Let us go fishing next Sunday. をほぼ同じ意味の How about で始まる文に書きかえよ。',
        wrongAnswer: 'How about go fishing next Sunday?',
        trapExplanation:
          'Let us のあとが動詞の原形だったので、そのまま原形を残してしまう。about が前置詞であることを意識していないために起こるミス。',
        correctAnswer: 'How about going fishing next Sunday?',
        correctExplanation:
          'How about / What about の about は前置詞なので、動詞を続けるときは必ず動名詞（〜ing）にする。Why do not we go fishing 〜? や Shall we go fishing 〜? に書きかえる場合は原形のままでよい。書きかえでは「前置詞のあとか、助動詞のあとか」で形を決める。',
      },
      {
        question:
          "会話を読み、二人が出かける曜日を答えよ。 A: How about going to the zoo on Saturday? B: I would like to, but I have club activities on Saturday. A: Then how about Sunday? B: Sunday is fine.",
        wrongAnswer: '土曜日',
        trapExplanation:
          '最初に出た Saturday が印象に残り、そのまま答えにしてしまう。B の I would like to（そうしたいのですが）を承諾だと読みちがえていることも原因である。',
        correctAnswer: '日曜日',
        correctExplanation:
          'I would like to, but 〜 は「そうしたいけれど（できない）」という断りの定型。そのあと A が Then how about Sunday? と代案を出し、B が Sunday is fine. と承諾している。会話の決定事項は最後の承諾の行にある。but と then が出たら、そこから先を必ず読む。',
      },
    ],
  },

  {
    id: 'koko_eigo_s387',
    subject: 'eigo',
    examType: 'koko',
    title: '定型表現④：聞き返し・確認・あいづち',
    description: '聞き取れなかったときの言い方と、会話をつなぐ短い応答を使い分ける',
    intro: '相手の言葉が聞き取れなかったとき、What? と返すのはぶっきらぼうです。英語では Pardon? や Could you say that again? が使われます。こうした「会話をつなぐ短い一言」は、空所補充でくり返し出題される割に対策が手薄になりがちな部分です。',
    order: 887,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '聞き返す：Pardon? / I beg your pardon? / Could you say that again? / Could you speak more slowly?',
      '意味をたずねる：What do you mean? / What does that mean? / How do you say 〜 in English?',
      '確認する：You mean 〜? / Do you mean that 〜? / Let me see. / Let me make sure.',
      'あいづち：I see. / Really? / That is right. / Me too. / So do I.',
      '共感：That is too bad.（残念なとき）／That is great.（よいとき）／同じ形容詞を選ばない。',
      '相手のことばを受ける疑問形：Did you? / Do you? / Have you?（時制と助動詞を合わせる）',
    ],
    sections: [
      {
        heading: '聞き返しと確認',
        body: `会話が成り立たないとき、英語では次のように言う。どれも決まり文句なので、そのまま覚える。

■ 聞き取れなかったとき
Pardon?／I beg your pardon?／Excuse me?（語尾を上げる）
Could you say that again, please?
Could you speak more slowly, please?
※ What? だけだと乱暴に聞こえるので、入試の正解にはならない。

■ 意味がわからないとき
What do you mean?（どういう意味ですか）
What does that word mean?（その語はどういう意味ですか）
How do you say 「もったいない」 in English?（英語で何と言いますか）
What is this called in English?（これは英語で何と呼ばれますか）

■ 確認するとき
You mean the blue one?（青い方ということですか）
Do you mean that we should meet at five?
Let me see.（ええと／確認させて）
Let me make sure. You said the meeting starts at ten, right?
※ 確認の行には数字や名前が再登場する。設問の答えが集まる場所なので線を引く。

★ ポイント：会話文で「聞き返し」が入ると、その直前の内容がもう一度言い直される。聞き取れなかった側にとっての助けであると同時に、解答者にとっては答えを二度確認できる場所になる。`,
      },
      {
        heading: 'あいづちと共感',
        body: `英語の会話は、短い応答をはさみながら進む。空所補充ではこの一言が問われる。

■ 基本のあいづち
I see.（なるほど）／Really?（そうなの？）／That's right.（そのとおり）
Sure.／Of course.／Exactly.（まさに）
Oh, no.（えっ、まさか）

■ 相手のことばをそのまま受ける疑問形
相手の文の助動詞・be動詞・時制に合わせて短く返す。
A: I went to Hokkaido last week. → B: Did you? That sounds nice.
A: I'm hungry. → B: Are you? Let's eat something.
A: I've never seen snow. → B: Haven't you?
※ 一般動詞の過去なら Did you?、be動詞の現在なら Are you?、現在完了なら Have you?。

■ 共感の表し方
よい話：That's great./ That sounds fun./ Good for you./ I'm glad to hear that.
悪い話：That's too bad./ I'm sorry to hear that./ What's wrong?/ Are you all right?

■ 「私も」の言い方
肯定文に対して：Me, too./ So do I.（一般動詞現在）／So did I.（過去）／So am I.（be動詞）
否定文に対して：Me, neither./ Neither do I.
A: I don't like natto. → B: Neither do I.（○）Me, too.（×）
※ 否定に「私も」と重ねるときは neither を使う。ここは入試頻出。

⚠ 注意：That's too bad. を、よい知らせに対して使わないこと。逆に That's great. を悪い知らせに使わないこと。空所の前の内容が良い話か悪い話かを先に判定する。

★ ポイント：あいづちの選択肢問題は、直前の文の「良い・悪い」と「時制・助動詞」の二点だけ見れば必ず絞れる。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る応答を選べ。 A: I do not like carrots. B: (　　) I never eat them.  ①Me, too. ②Neither do I. ③So do I.",
        wrongAnswer: '① Me, too.',
        trapExplanation:
          '「私も」を Me, too. と一対一で覚えているため、相手が否定文でもそのまま使ってしまう。日本語では肯定でも否定でも「私も」と言えるので、区別の必要に気づきにくい。',
        correctAnswer: '② Neither do I.',
        correctExplanation:
          '否定文に「私も（〜ない）」と重ねるときは Neither do I. または Me, neither. を使う。③の So do I. は肯定文に対する「私もそうです」なので誤り。直前の文が否定（do not / never / no）かどうかを先に確認する習慣をつける。',
      },
      {
        question:
          "空所に入る応答を選べ。 A: I visited my grandmother in Nagano last weekend. B: (　　) How was it?  ①Do you? ②Did you? ③Are you?",
        wrongAnswer: '① Do you?',
        trapExplanation:
          '「そうなの？」という日本語の感覚で、現在形の Do you? を選んでしまう。相手の文の時制に合わせるという原則が抜けている。',
        correctAnswer: '② Did you?',
        correctExplanation:
          '相手のことばを受ける短い疑問形は、相手の文の動詞の種類と時制に合わせる。I visited 〜 は一般動詞の過去なので Did you? となる。be動詞なら Are you? / Were you?、現在完了なら Have you?。直後の How was it? が過去形であることも手がかりになる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s388',
    subject: 'eigo',
    examType: 'koko',
    title: '定型表現⑤：体調・トラブル・案内所での会話',
    description: '具合が悪いとき、物をなくしたとき、案内をもとめるときの表現をそろえる',
    intro: '海外で熱が出たら、何と伝えればよいでしょう。I have a fever. の一文が言えれば診てもらえます。体調不良・落とし物・道や施設の問い合わせは、入試の会話文で毎年のように出る場面です。困った場面の言い方こそ、型で覚える価値があります。',
    order: 888,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '体調：I have a headache(a stomachache, a cold, a fever). ／I do not feel well.',
      '相手を気づかう：What is wrong? / What is the matter (with you)? / Are you all right?',
      '助言：You should go home and rest. / You had better see a doctor.',
      '落とし物：I left my bag on the train. / I lost my wallet. ／Where did you lose it?',
      '案内所：Do you have a map of the city? / What time does the museum open(close)?',
      '料金・予約：How much is the ticket? / I would like to book a room for two nights.',
    ],
    sections: [
      {
        heading: '体調をめぐる会話',
        body: `体調の会話は「症状 → 気づかい → 助言」の三段で進む。

■ 症状の言い方（have を使うのが基本）
I have a headache.（頭痛）／a stomachache（腹痛）／a toothache（歯痛）
I have a cold.（かぜ）／a fever（熱）／a cough（せき）／a sore throat（のどの痛み）
I have a pain in my back.
I don't feel well./ I feel sick.（気分が悪い）
※ I am a headache. とは言わない。症状は have で表す。

■ 気づかう
What's wrong?／What's the matter?／Are you all right?／You look pale.（顔色が悪いよ）

■ 助言する
You should go home and rest.
You had better see a doctor.（医者に行ったほうがいい）※ had better は強い忠告
Why don't you take some medicine?
Take care of yourself.／I hope you get well soon.（早くよくなりますように）

■ 病院で
店や学校とちがい、病院では次の語が出る。
doctor／nurse／medicine（薬）／take medicine（薬を飲む。drink medicine とは言わない）
prescription（処方せん）／temperature（体温）
How long have you had this pain?（いつからその痛みがありますか）

⚠ 注意：「薬を飲む」は take medicine。drink は液体をごくごく飲む動作なので使わない。

★ ポイント：症状を答える設問では、「だれが」不調なのかを確認する。My brother has a fever, so I have to take care of him. のように、話し手ではなく家族が病気という設定が多い。`,
      },
      {
        heading: '落とし物と案内所',
        body: `旅行や外出中のトラブル、施設の問い合わせも定番の場面である。

■ 落とし物・忘れ物
I lost my wallet.（財布をなくした）
I left my umbrella on the train.（電車に傘を置き忘れた）
※ lose は「なくす（どこかわからない）」、leave は「置き忘れる（場所がわかる）」。leave は場所を表す語句とセットで使う。
Where did you lose it?／When did you notice it?
Could you fill out this form?（この用紙に記入してください）
I found it! Thank you for your help.

■ 案内所・観光
Do you have a map of the city?
What time does the museum open?／What time does it close?
Is it open on Mondays?／It's closed on Mondays.
How can I get to the castle from here?
How much is the admission?（入場料はいくらですか）
Can I take pictures here?（写真をとってもいいですか）

■ ホテル・予約
I'd like to book(reserve) a room for two nights.
I have a reservation under the name of Sato.（佐藤の名前で予約しています）
What time is checkout?

■ 困ったときの万能表現
Could you help me?／I'm in trouble.／I'm lost.（道に迷いました）

★ ポイント：落とし物の会話では「何を・どこで・いつ」が三点セットで問われる。会話の中に出てくる名詞と場所と時を、聞いた順にメモしておくとよい。

⚠ 注意：I'm lost. は「道に迷っている」。I lost my way. も同じ意味だが、I'm lost my way. は誤り（be動詞と一般動詞が重なっている）。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は電車にかばんを置き忘れました」を英語にせよ。',
        wrongAnswer: 'I lost my bag on the train.',
        trapExplanation:
          '「なくした」も「置き忘れた」も日本語では近い意味なので、lose を選んでしまう。しかし lose は場所を示す語句とはなじまず、「どこでなくしたかわからない」という含みになる。',
        correctAnswer: 'I left my bag on the train.',
        correctExplanation:
          '場所を示して「〜に置き忘れる」と言うときは leave（過去形 left）を使う。lose は「紛失する」で、I lost my bag.（かばんをなくした）のように場所を伴わないのがふつう。on the train のような場所の語句があるかどうかで動詞を選ぶ。',
      },
      {
        question: '「かぜをひいたので薬を飲みました」を英語にせよ。',
        wrongAnswer: 'I had a cold, so I drank medicine.',
        trapExplanation:
          '日本語の「飲む」をそのまま drink に置きかえてしまう。drink は液体をのどに流しこむ動作を表す語で、錠剤や粉薬には使えない。',
        correctAnswer: 'I had a cold, so I took some medicine.',
        correctExplanation:
          '「薬を飲む」は take medicine と決まっている（過去形は took）。同じように「風呂に入る」は take a bath、「写真をとる」は take a picture のように、take は日本語の動詞と一対一で対応しない。動詞と名詞の組み合わせごと覚えること。',
      },
    ],
  },

  // ───────────── 3. 空所補充の解き方（s389〜s392） ─────────────
  {
    id: 'koko_eigo_s389',
    subject: 'eigo',
    examType: 'koko',
    title: '空所補充①：直後の一文で決める',
    description: '会話文の空所は、直後の応答を読めば大半が決まるという原則を身につける',
    intro: '空所補充で迷うのは、空所の前だけを見て考えているからです。会話は必ず返事とセットになっているので、答えは空所の「あと」に書かれていることが多いのです。前ではなく後ろを見る。この順番を変えるだけで、正答率は目に見えて変わります。',
    order: 889,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '空所補充は「直後 → 直前 → 場面全体」の順に手がかりを使う。',
      '直後が Yes / No なら、空所は疑問文である。',
      '直後が Yes / No で始められない答え（数・時・場所）なら、空所は疑問詞の疑問文。',
      '直後に理由（because 〜）が続くなら、空所は Why 〜? である。',
      '直後が Sure. / Of course. なら、空所は依頼・許可の文。',
      '空所に入れた文を実際に音読して、会話として自然かを確かめる。',
    ],
    sections: [
      {
        heading: '直後の応答から逆算する',
        body: `会話文の空所は、たいてい一方のセリフ全体が抜かれている。そこで、その直後の相手の返事を見れば、空所の文の種類が決まる。

■ 返事が Yes / No → 空所は Yes / No で答える疑問文
A: (　　)　B: Yes, I did. I went there last summer.
　→ 空所は Have you 〜? ではなく Did you 〜?（did で答えているから）
返事の助動詞・時制がそのまま空所の形になる。ここが最大の手がかりである。

■ 返事が Yes / No 以外の情報 → 空所は疑問詞の疑問文
B の返事が数なら How many / How much、時刻なら What time、場所なら Where、人なら Who。
例）B: About twenty minutes. → 空所は How long does it take?
例）B: It's five dollars. → 空所は How much is it?
例）B: Because I was sick. → 空所は Why were you absent?

■ 返事が Sure. / Of course. / Sorry, I can't. → 空所は依頼・許可・誘い
どれになるかは、そのあとの文で決める。
例）B: Sure. Here you are.（はい、どうぞ）→ 空所は Can I use your eraser? など、物を借りる依頼。

■ 返事が Yes, please. / No, thank you. → 空所は申し出
例）B: Yes, please.（お願いします）→ 空所は Shall I help you? / Would you like some tea?

★ ポイント：Yes, please. は申し出への返事、Yes, I do. は疑問文への返事。同じ Yes でも続く語で判断できる。`,
        figureId: 'lf_kokoeigoext11_389',
      },
      {
        heading: '直前と場面を使う',
        body: `直後だけで決まらないときは、直前の文と場面の情報を足す。

■ 直前の文を使う
A: I have to finish this report by tomorrow.
B: (　　)
C（Aの次のセリフ）: Thank you. That would help a lot.
　→ B のセリフは申し出（Shall I help you? / Do you want me to help you?）。あとの Thank you. が決め手。

■ 場面全体を使う
店の会話なら May I help you? / How much is it? / I'll take it. のどれか。
道案内なら Could you tell me how to get to 〜? / Turn right at the corner. のどれか。
場面が決まれば、選択肢のうち場面に合わないものはすぐ消せる。

■ 消去法の手順
①場面に合わない選択肢を消す（レストランの会話に道案内の文が混ざっていることがある）。
②話し手が逆の選択肢を消す（店員のセリフの位置に客のセリフが置かれている）。
③時制が合わない選択肢を消す。
残った選択肢を空所に入れ、前後3行を通して音読する。

■ 最後の確認
入れた文が、直前と直後の両方に矛盾しないかを確かめる。片方だけに合う選択肢が誤答として必ず用意されている。

⚠ 注意：長い選択肢が正解とはかぎらない。むしろ Not yet. / Speaking. / Neither do I. のような短い定型表現が答えになる問題が多い。

★ ポイント：空所補充を解いたあとは、必ずその2行を声に出さずに読み直す。会話として不自然だと感じたら、たいてい選びなおしが必要である。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る文を選べ。 A: (　　) B: Yes, I did. I finished it last night.  ①Have you finished your homework? ②Did you finish your homework? ③Are you doing your homework?",
        wrongAnswer: '① Have you finished your homework?',
        trapExplanation:
          'finished という語が選択肢①にも本文にもあるため、同じ語のある方を選んでしまう。しかし返事は Yes, I have. ではなく Yes, I did. である。',
        correctAnswer: '② Did you finish your homework?',
        correctExplanation:
          '返事の助動詞が空所の形を決める。Yes, I did. なら空所は Did you 〜?、Yes, I have. なら Have you 〜?、Yes, I am. なら Are you 〜? である。さらに last night という過去の一点を表す語句があるので、現在完了は使えない。返事の一語目と二語目を必ず見ること。',
      },
      {
        question:
          "空所に入る文を選べ。 A: (　　) B: About fifteen minutes by bus.  ①How far is it from here? ②How long does it take? ③How much is the bus?",
        wrongAnswer: '① How far is it from here?',
        trapExplanation:
          '距離をたずねる How far も交通手段の答えと結びつきやすいので選んでしまう。しかし答えは fifteen minutes という時間であって、距離ではない。',
        correctAnswer: '② How long does it take?',
        correctExplanation:
          '答えの単位を見て疑問詞を決める。minutes(hours) なら How long、kilometers(meters) なら How far、dollars(yen) なら How much、回数なら How often。答えの単位と疑問詞は一対一で対応しているので、まず単位に印を付ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s390',
    subject: 'eigo',
    examType: 'koko',
    title: '空所補充②：疑問詞を答えから決める',
    description: '答えの形（数・時・場所・理由・方法）から、入るべき疑問詞を逆算する',
    intro: '「答えを見れば疑問詞は決まる」と言われても、How が付く形が多すぎて迷います。How long・How far・How often・How many。実はこれらは、答えの単位を見れば一つに絞れます。単位と疑問詞の対応表を頭に入れてしまいましょう。',
    order: 890,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '答えが人 → Who／物・事 → What／どれ → Which／場所 → Where／時 → When。',
      '答えが理由（Because 〜） → Why／方法・手段 → How。',
      'How long＝時間の長さ・物の長さ／How far＝距離／How often＝頻度／How soon＝あとどのくらいで。',
      'How many＋数えられる名詞の複数形／How much＋数えられない名詞・値段。',
      'How old（年齢）／How tall（身長・高さ）／How high（高さ）／How heavy（重さ）。',
      'What time（何時）と When（いつ）は、答えが時刻なら What time が自然。',
    ],
    sections: [
      {
        heading: '答えの単位と疑問詞の対応',
        body: `疑問詞は、答えの「単位」で決まる。次の対応を丸ごと覚えれば、逆算は機械的にできる。

■ How のグループ（もっともよく出る）
・答えが「〜分・〜時間・〜年」の長さ → How long
　How long does it take? — About twenty minutes.
　How long have you lived here? — For five years.
・答えが「〜キロ・〜メートル」の距離 → How far
　How far is it from here to the station? — It's about two kilometers.
・答えが「週に〜回・毎日」の回数 → How often
　How often do you play tennis? — Three times a week.
・答えが「あと〜分で」 → How soon
　How soon will the bus come? — In ten minutes.
・答えが数（数えられるもの） → How many ＋複数形
　How many books do you have? — I have about fifty.
・答えが量・値段 → How much
　How much water do you need? — Two liters.
　How much is this bag? — It's thirty dollars.

■ そのほか
How old（年齢・築年数）／How tall（背の高さ）／How high（高さ・高度）／How heavy（重さ）／How wide（幅）

■ How の一語だけの場合
方法・手段・状態を聞く。
How do you go to school? — By bus.
How was the movie? — It was great.

★ ポイント：How long は「時間の長さ」と「物の長さ」の両方に使える。How long is this bridge? — It's 500 meters long. のように、答えの単位で判断する。`,
      },
      {
        heading: '取りちがえやすい組み合わせ',
        body: `疑問詞の問題で差がつくのは、意味が近いもの同士の区別である。

■ When と What time
When did you come home? — At six. / Last night. / Yesterday.
What time did you come home? — At six.
※ When は「いつ」全般（日・曜日・時期）、What time は時刻に限る。答えが時刻だけなら What time が自然だが、When でも誤りではない。逆に答えが Last Sunday. なら What time は使えない。

■ Which と What
What color do you like? — I like blue.（範囲を示さない）
Which do you like better, tea or coffee?（二つ以上の中から選ぶ）
※ 選択肢が示されていれば Which。

■ Who と Whose
Who is that girl? — She is my sister.（だれか）
Whose bag is this? — It's mine.（だれのものか）
※ 答えが mine / Ken's のような所有を表す形なら Whose。

■ Why と How come
Why were you absent yesterday? — Because I had a cold.
※ Why の答えは Because 〜 か To 〜（〜するために）。
Why did you go to the library? — To borrow some books.（目的）

■ How many と How much
数えられる名詞（books, students, apples）→ How many ＋複数形
数えられない名詞（water, money, time, homework）→ How much
※ homework・information・advice は数えられない名詞なので How much を使う。

⚠ 注意：How many times（何回）と How long（どのくらいの間）は別物。How many times have you been to Kyoto? — Three times. に対して、How long have you been in Kyoto? — For three days. である。

★ ポイント：疑問詞の空所補充では、まず答えの文に線を引き、その中の「数字＋単位」または「Because / At / In / By」を丸で囲む。囲んだ部分が疑問詞を一つに決める。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る疑問詞（句）を答えよ。 A: (　　) do you play the piano? B: Twice a week.",
        wrongAnswer: 'How long',
        trapExplanation:
          'a week という語が見えるため、期間をたずねる How long を選んでしまう。しかし答えの中心は twice（2回）という回数であって、期間ではない。',
        correctAnswer: 'How often',
        correctExplanation:
          'twice a week / three times a month / every day のように「どのくらいの頻度で」を答えているときは How often を使う。How long の答えは For two years. / About ten minutes. のように長さそのものになる。答えの中心が回数か長さかを見分ける。',
      },
      {
        question:
          "空所に入る疑問詞（句）を答えよ。 A: (　　) homework do you have today? B: I have a lot.",
        wrongAnswer: 'How many',
        trapExplanation:
          '宿題は「何個」と数えられそうに感じるため、How many を選んでしまう。日本語では「宿題が3つある」と言えることも混乱の原因になる。',
        correctAnswer: 'How much',
        correctExplanation:
          'homework は数えられない名詞なので、a homework も homeworks も使えず、量をたずねるときは How much になる。同じ仲間に information・advice・furniture・news がある。数えたいときは How many pieces of homework 〜? のように単位を補う。',
      },
    ],
  },
  {
    id: 'koko_eigo_s391',
    subject: 'eigo',
    examType: 'koko',
    title: '空所補充③：文の途中の空所（語句を入れる型）',
    description: '一文の中の空所に語句を入れる問題を、品詞と文構造から決める',
    intro: '会話文の空所は、セリフ全体が抜かれているとはかぎりません。一文の途中に（　）があり、そこに一語を入れる型もあります。この場合、意味だけで考えると迷いますが、前後の品詞を見れば入る語の種類は一つに決まります。文法の力がそのまま点になる問題です。',
    order: 891,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '空所の前後の品詞を見る。冠詞のあとは名詞、前置詞のあとは名詞か動名詞。',
      '主語のあとに空所があれば動詞。三単現の s と時制を必ず確認する。',
      'be動詞のあとの空所は、形容詞か 〜ing か過去分詞のいずれか。',
      '接続詞（when・if・because・that・although）の空所は、二文の意味関係で決める。',
      '空所に入れたあと、文全体の主語と動詞が一組そろっているかを確認する。',
      '選択肢の語形（play / plays / played / playing）がちがうときは、文法だけで解ける。',
    ],
    sections: [
      {
        heading: '品詞から入る語を決める',
        body: `一語を入れる空所補充は、意味の前に「そこにどの品詞が来るか」で絞る。前後一語ずつを見るだけでよい。

■ 冠詞・所有格のあと → 名詞
a (　) book／my (　) friend の位置なら形容詞、a (　) の直後なら名詞。
例）She is a good (　). → 名詞（student / singer など）

■ 前置詞のあと → 名詞・代名詞の目的格・動名詞
Thank you for (　) me.（helping）
I'm interested in (　) English.（studying）
He is good at (　).（swimming）

■ 主語のあと → 動詞
My brother (　) soccer every Sunday.（plays）
※ every Sunday があるので現在形、主語が三人称単数なので plays。

■ be動詞のあと → 形容詞／現在分詞／過去分詞
She is (　) in music.（interested）
They are (　) tennis now.（playing）
This letter was (　) by Ken.（written）

■ 助動詞のあと → 動詞の原形
You must (　) your room.（clean）
He will (　) here soon.（be／come）

★ ポイント：選択肢が同じ語の形ちがい（write / writes / wrote / written / writing）なら、意味を考えるまでもなく文法だけで決まる。まず時制と態（能動か受動か）を確認する。`,
      },
      {
        heading: '接続詞・つなぎの語を入れる',
        body: `二つの文をつなぐ語を入れる問題では、前後の文の意味関係を見る。

■ 意味関係と接続詞の対応
・原因と結果：because（〜だから）／so（だから）
　I stayed home because it was raining. ＝ It was raining, so I stayed home.
・逆接：but（しかし）／though・although（〜だけれども）
　He is young, but he is a good cook. ＝ Though he is young, he is a good cook.
・時：when（〜のとき）／while（〜している間に）／before・after／until（〜まで）
・条件：if（もし〜なら）
・目的：to 〜（〜するために）／so that 〜 can（〜できるように）

■ 時・条件の中では未来を現在形で表す
If it (　) tomorrow, I will stay home. → is fine（will be は誤り）
I'll call you when I (　) home. → get（will get は誤り）
これは入試最頻出のひっかけである。

■ that の省略
I think (that) he is right. の that は省略できる。空所補充で that が問われることもある。

■ 文と文をつなぐ副詞
However,（しかしながら）／Also,（また）／For example,（たとえば）／Then,（それから）
※ however は接続詞ではないので、二文をカンマだけでつなぐことはできない。

⚠ 注意：because と so は入れかえると文の順番も変わる。Because it was raining, I stayed home.（○）／It was raining because I stayed home.（意味が逆で誤り）。

★ ポイント：空所に候補を入れたら、必ず文全体を頭から読み直し、主語と動詞が一組そろっているか、時制がそろっているかを確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '空所に入る語を答えよ。 If it (　) sunny tomorrow, we will go on a picnic.',
        wrongAnswer: 'will be',
        trapExplanation:
          'tomorrow という未来を表す語があり、主節にも will があるため、if 節も未来形にしてしまう。日本語では「明日晴れたら」と未来のことを述べているので、なおさら will を入れたくなる。',
        correctAnswer: 'is',
        correctExplanation:
          '時（when・before・after・until）や条件（if・unless）を表す副詞節の中では、未来のことでも現在形で表す。したがって If it is sunny tomorrow, we will go on a picnic. となる。主節の will はそのままでよい。「if の中に will は入れない」と形で覚える。',
      },
      {
        question: '空所に入る語を答えよ。 Thank you for (　) me with my homework.',
        wrongAnswer: 'help',
        trapExplanation:
          '「手伝ってくれて」という日本語につられ、動詞の原形をそのまま置いてしまう。for が前置詞であることを見落としている。',
        correctAnswer: 'helping',
        correctExplanation:
          'for は前置詞なので、あとに動詞を続けるときは動名詞（〜ing）にする。空所の直前が前置詞（for・at・in・of・about・without）なら、入るのは名詞か動名詞に限られる。品詞から絞れば意味を考えずに決められる典型例である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s392',
    subject: 'eigo',
    examType: 'koko',
    title: '空所補充④：選択肢の消し方と最終確認',
    description: '消去法の順序を固定し、最後に必ず通し読みで検算する手順を身につける',
    intro: '空所補充で二つまで絞れたのに落とす。これは多くの受験生が経験することです。原因は、選択肢を消す順番が毎回ちがうことにあります。順番を固定してしまえば、迷ったときも同じ手順で最後まで進めます。今回はその手順を決めます。',
    order: 892,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '消去の順序を固定する：①場面 ②話し手 ③時制・助動詞 ④意味の細部。',
      '話し手が逆の選択肢（店員のセリフを客の位置に置いたもの）は必ず混ぜてある。',
      '直前だけに合う選択肢・直後だけに合う選択肢は、どちらも誤答として用意されている。',
      '選んだあと、空所を含む前後3行を通して読み、不自然さがないか確かめる。',
      '同じ語がくり返されている選択肢は、目を引くために置かれた誤答であることが多い。',
      '時間がないときは、場面に合わない選択肢を消すだけでも正答率は上がる。',
    ],
    sections: [
      {
        heading: '消去の順序を固定する',
        body: `選択肢を消す順番は、次の四段階に固定する。迷ったときほど、この順番どおりに進める。

■ ①場面で消す
道案内の会話に Check, please.、レストランの会話に Turn right at the corner. が混ざっていれば即座に消せる。場面に固有の名詞・動詞が判断材料になる。

■ ②話し手で消す
空所が客のセリフなのに、選択肢が May I help you? / May I take your order? のような店員のセリフになっている。主語（I が客か店員か）と動詞（help / take / have）で判断する。

■ ③時制・助動詞で消す
直後の返事の助動詞（Yes, I did. / Yes, I have. / Yes, I am.）と一致しない選択肢を消す。空所の前後にある時を表す語句（last night / next week / for three years）も使う。

■ ④意味の細部で消す
残った二つを比べ、直前・直後の両方に矛盾しない方を選ぶ。片方だけに合う選択肢が誤答である。

例）A: How was your weekend?　B: (　　) I went to the beach with my family.
　①It was great. ②I'm going to the beach. ③That's too bad.
　②は時制が合わない（過去を聞かれている）。③は直後の内容（楽しそう）と矛盾。よって①。

★ ポイント：②の「話し手で消す」は、実際に消える選択肢が多いわりに見落とされやすい。空所の左端にある人物記号を必ず確認してから選択肢を読む。`,
      },
      {
        heading: '最終確認としての通し読み',
        body: `選んだら終わり、ではない。最後に必ず通し読みをする。ここで見つかるミスは、慣れれば10秒で見つかる。

■ 通し読みの手順
①空所の2行前から、2行後まで読む。
②選んだ文を実際に空所に入れて読む（記号のままにしない）。
③「この会話、実際に成り立つか」を自分に問う。

■ 通し読みで見つかる典型的なミス
・返事がかみ合っていない
　A: Did you enjoy the concert?　B: Yes, I have.（× did で聞かれて have で答えている）
・同じことを二度言っている
　空所に入れた文と、その直後の文が同じ内容になっている。入試では冗長な選択肢は誤り。
・話が飛んでいる
　空所の直前の話題と、入れた文の話題がつながっていない。

■ 二つに絞れて決められないとき
「本文に書かれていること以外を足していないか」で決める。会話文の空所補充も、内容一致問題と同じで、本文の情報だけで成り立つ方が正解になる。

■ 見直しの時間配分
会話文の空所補充は1問30秒を目安にする。1分考えて決まらないときは、いったん印を付けて次に進み、本文を最後まで読んでから戻る。会話の結末を知ってから戻ると、あっさり決まることが多い。

⚠ 注意：「なんとなく自然」で選ばないこと。根拠にした一行を必ず指させるようにする。指させないうちは、まだ選んではいけない。

★ ポイント：本番で迷ったら、消去の四段階に戻る。手順を持っている受験生は、迷っても崩れない。`,
      },
    ],
    trapExamples: [
      {
        question:
          "空所に入る文を選べ（空所は客のセリフ）。 Clerk: Are you looking for something? Customer: (　　) I am looking for a birthday present for my sister.  ①May I help you? ②Yes, please. ③Here you are.",
        wrongAnswer: '① May I help you?',
        trapExplanation:
          '買い物の会話でもっともよく見る表現なので、場面に合っていると感じて選んでしまう。しかし May I help you? は店員のセリフであり、空所は客のセリフの位置にある。',
        correctAnswer: '② Yes, please.',
        correctExplanation:
          '空所がどちらの人物のセリフかを最初に確認する。Are you looking for something? という店員の問いに対し、客は Yes, please. と答えて用件を述べている。③の Here you are. は物を手渡すときの表現で、この位置には合わない。話し手で消す手順を必ず入れること。',
      },
      {
        question:
          "空所に入る文を選べ。 A: I could not sleep well last night. B: (　　) You look tired.  ①That is great. ②That is too bad. ③Congratulations.",
        wrongAnswer: '① That is great.',
        trapExplanation:
          '直後の You look tired.（疲れて見えるよ）だけを見て「相手を気づかう明るい返事」を選んでしまう。直前の I could not sleep well（よく眠れなかった）という否定の内容を読み落としている。',
        correctAnswer: '② That is too bad.',
        correctExplanation:
          '空所は直前と直後の両方に矛盾してはいけない。直前が「眠れなかった」という悪い内容なので、共感の表現は That is too bad. / I am sorry to hear that. になる。直後の You look tired. もそれと一致する。片側だけを見て選ぶと必ず誤答に導かれる。',
      },
    ],
  },

  // ───────────── 4. リスニングの解き方（s393〜s397） ─────────────
  {
    id: 'koko_eigo_s393',
    subject: 'eigo',
    examType: 'koko',
    title: 'リスニング①：先読みで勝負を決める',
    description: '放送が始まる前に設問と選択肢を読み、何を聞き取るかを決めておく',
    intro: 'リスニングは耳の勝負だと思われがちですが、実際に差がつくのは放送が始まる前の30秒です。設問と選択肢を先に読み、何が問われるかを知ってから聞けば、必要な情報だけに集中できます。ここでは音声の代わりにスクリプトを使い、その手順を目で確かめます。',
    order: 893,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '放送前に必ず設問文と選択肢を読む（先読み）。何を聞くかを決めてから聞く。',
      '選択肢の「共通部分」と「ちがう部分」に印を付ける。ちがう部分だけが答えを分ける。',
      '選択肢に数字が並んでいれば数字問題、地図なら道順問題、絵なら動作や物の問題。',
      '疑問詞（What time / Where / Why / How many）を設問文から拾い、答えの形を予想する。',
      '聞きながら書くメモは日本語でも記号でもよい。速さを優先する。',
      '一度で聞き取れなくても、二回目の放送で確認する前提で一回目は全体をつかむ。',
    ],
    sections: [
      {
        heading: '先読みの四手順',
        body: `リスニングの問題用紙には、放送が始まる前に読める情報がある。次の順で処理する。

■ ①設問文を読む
What time will they meet? なら、聞き取るのは時刻だけ。人名や場所は流してよい。
Why was Ken late? なら、because のあとを待ちかまえる。

■ ②選択肢の共通部分とちがう部分に印を付ける
ア at 3:00 at the station
イ at 3:30 at the station
ウ at 3:00 at the library
エ at 3:30 at the library
　→ 場所は station か library、時刻は 3:00 か 3:30。この二点だけを聞けばよい。
共通している語（at）は聞く必要がない。ちがっている語だけに印を付ける。

■ ③答えの形を予想する
選択肢が数字だけなら計算が必要かもしれない。選択肢が絵なら、動作を表す動詞か物を表す名詞が答えになる。

■ ④聞きながら書く準備をする
メモは日本語で構わない。「3時→3時半」「駅→図書館」のように、変更があれば矢印で書く。

★ ポイント：先読みは「全部読む」ことではない。選択肢のちがいだけを見つけるのが目的である。10秒で終わる。

■ 二回放送されるとき
一回目は全体の流れをつかみ、二回目で細部を確認する。一回目から一語一句書き取ろうとすると、かえって全体を見失う。`,
        figureId: 'lf_kokoeigoext11_393',
      },
      {
        heading: 'スクリプトで手順を確かめる',
        body: `ここでは音声の代わりにスクリプトを読み、先読みした情報がどこで回収されるかを確かめる。

【設問】When and where will Ken and Lisa meet?
【選択肢】ア At 3:00 at the station　イ At 3:30 at the station　ウ At 3:00 at the library　エ At 3:30 at the library

【スクリプト】
Ken: Lisa, let's study together tomorrow. How about meeting at the station at three?
Lisa: Well, the station is always crowded. Why don't we meet at the library instead?
Ken: OK. Then, is three o'clock all right?
Lisa: Actually, my club activity ends at three. Can we make it thirty minutes later?
Ken: Sure. See you then.

【聞き取りのポイント】
①最初に出る at the station at three は「最初の案」であって答えではない。
②instead（そのかわりに）が場所の変更の合図。→ library に決まる。
③Can we make it thirty minutes later? が時刻の変更の合図。→ 3:00＋30分＝3:30。
④最後の Sure. で二つの変更が承認されている。

【正解】エ At 3:30 at the library

■ 変更の合図になる語
instead（そのかわりに）／actually（実は）／but／how about 〜 instead?／make it 〜／change / Let's change 〜

⚠ 注意：リスニングでは「最初に聞こえた情報が答えではない」問題が非常に多い。最初の案は必ず変更されると思って、最後まで聞く。

★ ポイント：メモは上書きせず、矢印でつなぐ。「駅3:00 → 図書館 → 3:30」のように書けば、最終形が一目でわかる。`,
      },
    ],
    trapExamples: [
      {
        question:
          "スクリプトを読み、二人が待ち合わせる場所と時刻を答えよ。 Ken: How about meeting at the station at three? Lisa: Why do not we meet at the library instead? Ken: OK. Lisa: And my club ends at three. Can we make it thirty minutes later? Ken: Sure.",
        wrongAnswer: '3時に駅',
        trapExplanation:
          '最初に聞こえた at the station at three をそのまま答えにしてしまう。リスニングでは冒頭の情報が印象に残りやすく、あとの変更を聞き逃す。',
        correctAnswer: '3時30分に図書館',
        correctExplanation:
          'instead（そのかわりに）で場所が library に変わり、make it thirty minutes later で時刻が3時30分に変わっている。最後に Sure. で承認されているので、これが最終決定。instead・actually・but・make it は変更の合図なので、聞こえたらメモに矢印を書く。',
      },
      {
        question:
          "先読みの段階で、次の選択肢から「聞き取るべき点」を二つ挙げよ。 ア On Saturday by bus　イ On Saturday by train　ウ On Sunday by bus　エ On Sunday by train",
        wrongAnswer: '曜日だけ（Saturday か Sunday か）',
        trapExplanation:
          '選択肢の先頭にある語だけを見て、そこが答えを分けると思いこんでしまう。先頭が同じ組み合わせが二つずつあることに気づいていない。',
        correctAnswer: '曜日（Saturday／Sunday）と交通手段（by bus／by train）の二点',
        correctExplanation:
          '選択肢が四つで二要素が二通りずつなら、答えを分けるのは二点である。片方だけを聞き取っても選択肢は二つまでしか絞れない。先読みでは選択肢を縦に見比べ、変化しているところすべてに印を付ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s394',
    subject: 'eigo',
    examType: 'koko',
    title: 'リスニング②：数字と時刻を正確に取る',
    description: '時刻・値段・個数の聞き取りで、計算と言い直しに対応する',
    intro: 'thirteen と thirty は、音が似ているうえに意味は10以上ちがいます。リスニングで数字を落とすと、そのまま失点につながります。しかも入試の数字問題は、聞こえた数をそのまま答えにできないことがほとんどです。聞き方と、そのあとの処理を分けて練習しましょう。',
    order: 894,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '13〜19（-teen）と 30〜90（-ty）は強く読まれる位置がちがう。-teen は後ろ、-ty は前が強い。',
      '時刻は「時＋分」を続けて読む。six fifteen＝6時15分。',
      'half past six＝6時30分、a quarter to seven＝7時15分前＝6時45分。',
      '数字が聞こえたら「何の数字か」を必ず添えてメモする（バス番号か停留所番号か）。',
      '計算が必要な問題が多い：割引・合計・遅延・時差・所要時間。',
      '言い直し（not A, but B ／ I mean 〜）のあとが正しい数字。',
    ],
    sections: [
      {
        heading: '数字そのものを聞き取る',
        body: `数字の聞き取りには、音の面と処理の面がある。まず音の面から整理する。

■ -teen と -ty
thirteen（13）と thirty（30）、fourteen（14）と forty（40）、fifteen（15）と fifty（50）。
-teen は後ろの音節を強く長めに読み、-ty は前を強く読んで語尾が短い。
迷ったときは、そのあとに続く語で判断できることが多い。
例）thirteen students（13人）は「かなり少ない」、thirty students（30人）は「1クラス分」。文脈に合う方を選ぶ。

■ 時刻の言い方
six fifteen＝6時15分（時→分の順に続けて読む）
six thirty＝6時30分／half past six も6時30分
a quarter past six＝6時15分（quarter＝15分）
a quarter to seven＝7時15分前＝6時45分
※ past（過ぎ）と to（前）の区別が最重要。to が聞こえたら、時の数字から引く。

■ 値段
fifteen dollars（15ドル）／fifteen dollars fifty (cents)（15ドル50セント）
ten percent off（1割引き）

■ 日付・年号
March (the) fifth／the fifth of March（3月5日）
nineteen ninety-five（1995年）／two thousand (and) twenty-six（2026年）

★ ポイント：数字は聞こえた瞬間に必ず書く。頭の中にとどめておくと、次の文を聞いている間に消える。`,
        figureId: 'lf_kokoeigoext11_394',
      },
      {
        heading: '聞いた数字を処理する',
        body: `入試のリスニングでは、聞こえた数字がそのまま答えになることは少ない。次の処理が必要になる。

■ ①計算する
【スクリプト】The train was going to leave at seven fifteen, but it was twenty minutes late.
【問】What time did the train leave?
→ 7:15＋20分＝7:35。予定と実際を区別する。

【スクリプト】This cap is twenty dollars, but today it's ten percent off.
【問】How much will you pay?
→ 20ドルの1割引きなので18ドル。

【スクリプト】I have three brothers and two sisters.
【問】How many children are there in his family?
→ 兄弟3人＋姉妹2人＋本人1人＝6人。本人を数え忘れないこと。

■ ②言い直しに対応する
The meeting will start at ten. Oh, I'm sorry, I mean ten thirty.
→ 答えは 10:30。I mean / Actually / No, wait のあとが正しい。
Not on Monday, but on Tuesday.
→ 答えは火曜日。not A but B は「AではなくB」。

■ ③何の数字かを区別する
Take the No. 5 bus and get off at the third stop. → バス番号5、停留所3。
It takes fifteen minutes and costs three hundred yen. → 時間15分、料金300円。
メモには「バス5／降3」「15分／300円」のように単位を添える。

⚠ 注意：before / after / later / earlier / ago は数字の意味を変える。thirty minutes earlier なら引き算になる。

★ ポイント：数字問題では、聞いた数字を書いたあとに一呼吸おいて「これは答えか、計算の材料か」を判断する。材料であれば、そのまま答えの欄に書かない。`,
      },
    ],
    trapExamples: [
      {
        question:
          "スクリプトを読み、電車が実際に出発した時刻を答えよ。 The train was going to leave at seven fifteen, but it was twenty minutes late.",
        wrongAnswer: '7時15分',
        trapExplanation:
          '最初に聞こえた seven fifteen をそのまま答えにしてしまう。was going to leave（出発する予定だった）が予定を表す形であることと、but 以下の遅延に気づいていない。',
        correctAnswer: '7時35分',
        correctExplanation:
          'was going to 〜 は「〜する予定だった（が実際はちがった）」という含みを持つ。twenty minutes late（20分遅れ）なので、7:15＋20分＝7:35 が実際の出発時刻。予定の時刻と実際の時刻を分けてメモする。',
      },
      {
        question:
          "スクリプトを読み、会議が始まる時刻を答えよ。 The meeting will start at ten. Oh, I am sorry. I mean ten thirty.",
        wrongAnswer: '10時',
        trapExplanation:
          '最初にはっきり ten と言われるため、そこで答えを確定してしまう。そのあとの I mean（つまり／言いまちがえました）を単なる言いよどみだと思って聞き流している。',
        correctAnswer: '10時30分',
        correctExplanation:
          'I mean 〜 は直前の内容を訂正する合図。ほかに Actually / No, wait / not A but B も同じはたらきをする。リスニングでは訂正のあとが必ず正解になるので、これらの語が聞こえたらメモを書きかえる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s395',
    subject: 'eigo',
    examType: 'koko',
    title: 'リスニング③：地図・絵を選ぶ問題',
    description: '道順の指示を地図上でたどり、位置を表す語を正確に聞き分ける',
    intro: '地図が印刷されていて、放送を聞いて目的地を選ぶ問題。ここで大事なのは、聞きながら地図に線を引くことです。頭の中で道をたどろうとすると、右と左が必ずどこかで入れかわります。鉛筆を動かしながら聞く。これだけで正答率が変わります。',
    order: 895,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '放送前に地図の出発点（You are here）と建物の名前を確認しておく。',
      '聞きながら地図に線を引く。曲がる角には○を付ける。',
      'first corner（1つ目の角）と second corner（2つ目の角）を数えまちがえない。',
      'on your right(left) は歩いている人から見た方向。曲がるたびに向きが変わる。',
      'across from（向かい）／next to（となり）／between A and B（間）を聞き分ける。',
      '目印（you will see 〜）は途中経過の確認。目的地そのものではない。',
    ],
    sections: [
      {
        heading: '地図をたどる手順',
        body: `地図問題は、次の手順を守れば確実に取れる。逆に、手を動かさないと必ず落とす。

■ ①放送前に地図を読む
・出発点（You are here / 現在地）に印を付ける。
・建物の名前を目で追い、読み方を確認しておく（post office / bank / hospital / library / museum）。
・選択肢の記号（A〜D）が地図のどこかを把握する。

■ ②聞きながら線を引く
Go straight → 出発点から直進の線を引く。
for two blocks → 交差点を2つ数えて、そこで止める。
Turn right → 線を右に折る。折った瞬間に「今どちらを向いているか」を矢印で書く。
You'll see 〜 on your right → 途中の目印。ここでは止まらない。
It's on your left. → 進行方向の左側を見る。

■ ③向きの管理
北を上にした地図で、
　上（北）へ進んでいるとき：右折＝東（右）、左折＝西（左）
　下（南）へ進んでいるとき：右折＝西（左）、左折＝東（右）
　右（東）へ進んでいるとき：右折＝南（下）、左折＝北（上）
自分がどちらを向いているかを矢印で書いておけば、この変換を暗算しなくてすむ。

★ ポイント：曲がったら必ず矢印を書き直す。これを省略した瞬間に左右が入れかわる。`,
        figureId: 'lf_kokoeigoext11_395',
      },
      {
        heading: 'スクリプトで確かめる',
        body: `実際のスクリプトで、どこが答えを決めるかを確認する。

【スクリプト】
Excuse me. Could you tell me how to get to the post office?
Sure. Go straight along this street and turn left at the second corner. Walk for a while, and you'll see a flower shop on your right. The post office is next to the flower shop. You can't miss it.

【処理】
①Go straight along this street → 直進の線。
②turn left at the second corner → 交差点を2つ数えて左折。ここが最大の分かれ目。first corner で曲がると答えが1つずれる。
③you'll see a flower shop on your right → 途中の目印。ここは目的地ではない。
④The post office is next to the flower shop. → 花屋のとなりが答え。

【まちがえる箇所】
・second を first と取りちがえる
・turn left を turn right と取りちがえる
・花屋を答えにしてしまう（目印と目的地の混同）

■ 位置を表す語の聞き分け
next to 〜（〜のとなり、同じ側）
across from 〜（〜の向かい、道をはさむ）
between A and B（AとBの間）
in front of 〜（〜の正面）／behind 〜（〜の裏）
on the corner of A and B（AとBの角）
at the end of the street（通りの突き当たり）

⚠ 注意：You can't miss it. は「見逃しませんよ」という励ましで、位置の情報ではない。ここを聞き取ろうとして時間を使わない。

★ ポイント：目的地は最後の一文で言われることが多い。途中の目印に飛びつかず、最後まで聞いてから答える。`,
      },
    ],
    trapExamples: [
      {
        question:
          "スクリプトを読み、郵便局の場所を答えよ。 Go straight and turn left at the second corner. You will see a flower shop on your right. The post office is next to the flower shop.",
        wrongAnswer: '花屋の位置にある建物',
        trapExplanation:
          'you will see 〜 という表現が「見えてくる＝目的地」だと感じられるため、花屋を答えにしてしまう。目印と目的地の役割を区別していない。',
        correctAnswer: '花屋のとなりの建物',
        correctExplanation:
          'you will see 〜 は途中の目印を示す表現で、そのあとに必ず目的地を示す文が続く。最後の The post office is next to the flower shop. が答えを決める。地図問題では最後の一文まで聞いてから解答欄を見る。',
      },
      {
        question:
          "北を上にした地図で、南に向かって歩いている。Turn right at the traffic light. と言われたら、地図上ではどちらへ進むか。",
        wrongAnswer: '地図の右（東）へ進む',
        trapExplanation:
          '地図を見ている自分の視点で右を判断してしまう。しかし右左は歩いている人を基準にするので、南向きに歩いていれば右手は西になる。',
        correctAnswer: '地図の左（西）へ進む',
        correctExplanation:
          '南（下）を向いているとき、その人の右手は西（地図の左）になる。地図を見る自分の向きではなく、地図上の人物の向きで判断する。曲がるたびに進行方向の矢印を書き直せば、この取りちがえは防げる。',
      },
    ],
  },
  {
    id: 'koko_eigo_s396',
    subject: 'eigo',
    examType: 'koko',
    title: 'リスニング④：否定語と条件を聞き逃さない',
    description: 'not / never / no / without など、意味をひっくり返す語に注意して聞く',
    intro: '「行かなかった」と「行った」では正反対なのに、英語では not の一語しかちがいません。しかも not は弱く速く発音されるため、いちばん聞き取りにくい語でもあります。意味をひっくり返す語をあらかじめ知っておけば、その一語に集中して耳を向けられます。',
    order: 896,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '否定語：not / never / no / nothing / nobody / none / without / hardly。',
      '短縮形（don not, cannot, was not, will not, is not）は弱く速いので、動詞の直前に耳を集中させる。',
      'can（できる）と cannot（できない）の聞き分けは、文全体の意味で確認する。',
      '否定疑問文（Do not you 〜?）への Yes / No は日本語と逆になる。',
      '条件（if / unless）と譲歩（although / even though）は、結論を変えるので必ず拾う。',
      'not A but B（AではなくB）／not only A but also B（AだけでなくBも）の型を覚える。',
    ],
    sections: [
      {
        heading: '意味をひっくり返す語',
        body: `聞き取りで最も痛いミスは、肯定と否定を取りちがえることである。次の語に耳を向ける。

■ 基本の否定語
not（didn't / doesn't / can't / won't / isn't）
never（一度も〜ない）／no（少しも〜ない）
nothing（何も〜ない）／nobody・no one（だれも〜ない）／none
without（〜なしで）
hardly / seldom（ほとんど〜ない）※ 形は肯定だが意味は否定

■ 聞き取りにくい理由
否定の n't は弱く短く発音され、動詞にくっついてしまう。
　I didn't go there. の didn't は「ディドゥン」ではなく「ディドゥン(t)」と一息で読まれる。
対策は「動詞の直前」に耳を集中させること。主語のあと、動詞の前に短い音が挟まったら否定を疑う。

■ can と can't
肯定の can は弱く「クン」に近く読まれ、否定の can't はむしろ強くはっきり読まれる。
判断に迷ったら、文の続きで確かめる。
　I can't come to the party. I have to study.（あとの文が理由になっている＝否定）

■ 否定を含む会話表現
No, thank you.（結構です）／Not yet.（まだです）／Not at all.（どういたしまして／かまいません）
I don't think so.（そうは思いません）／I'm afraid not.（残念ながらちがいます）

⚠ 注意：I don't think he will come. は「彼は来ないと思う」。日本語と否定の位置がちがう。「思わない」ではなく「来ないと思う」と訳す。

★ ポイント：否定語が聞こえたらメモに大きく「×」と書く。文字で書いた否定は消えないが、記憶の中の否定は消える。`,
      },
      {
        heading: '否定疑問文と条件・譲歩',
        body: `否定がからむ表現には、日本語と答え方が逆になるものがある。

■ 否定疑問文への答え
Don't you like natto?（納豆が好きではないのですか）
　好きな場合：Yes, I do.（いいえ、好きです）
　好きでない場合：No, I don't.（はい、好きではありません）
英語では「答えの内容が肯定なら Yes、否定なら No」と決まっており、質問の形は関係しない。日本語の「はい・いいえ」と逆になるので、リスニングでは Yes / No のあとの動詞まで聞く。

Aren't you tired?（疲れていないの？）— No, I'm fine.（うん、平気だよ）

■ 条件と譲歩
If it rains tomorrow, we will not go.（もし雨なら行かない）
Unless it rains, we will go.（雨でないかぎり行く）※ unless＝if 〜 not
Although it was raining, we went out.（雨だったけれど出かけた）
Even if it rains, we will go.（たとえ雨でも行く）
これらの語は結論をひっくり返すので、聞こえたらそのあとの主節まで必ず聞く。

■ not A but B / not only A but also B
I want not tea but coffee.（紅茶ではなくコーヒーがほしい）
She can speak not only English but also French.（英語だけでなくフランス語も話せる）
※ 前者は「Aを否定してBを選ぶ」、後者は「AもBも両方」。まったく意味がちがう。

■ 部分否定
I don't know all of them.（全員を知っているわけではない）※ 全員を知らない、ではない
Not everyone likes sports.（全員がスポーツを好きなわけではない）

★ ポイント：all / every / always と not が同じ文にあれば部分否定を疑う。「全部〜ない」ではなく「全部が〜というわけではない」と読む。`,
      },
    ],
    trapExamples: [
      {
        question:
          "スクリプトを読み、ケンがパーティーに行くかどうかを答えよ。 Ken: I would like to go to the party, but I cannot. I have to take care of my sister.",
        wrongAnswer: '行く',
        trapExplanation:
          'I would like to go to the party という前半だけを聞いて、行くと判断してしまう。but のあとの I cannot は短く、聞き逃しやすい。',
        correctAnswer: '行かない（妹の世話をしなければならないため）',
        correctExplanation:
          'I would like to 〜, but I cannot. は「そうしたいができない」という断りの定型。but のあとに結論があるので、but が聞こえたらそこから先に耳を集中させる。さらに直後の I have to 〜 が理由になっていることも、行かないという判断を裏づける。',
      },
      {
        question:
          "次のやりとりで、リサはサッカーが好きかどうかを答えよ。 A: Do not you like soccer, Lisa? B: Yes, I do. I watch games every weekend.",
        wrongAnswer: '好きではない',
        trapExplanation:
          '日本語では「サッカーは好きじゃないの？」に「はい」と答えれば「好きではない」の意味になる。この感覚のまま Yes を「はい、好きではありません」と読んでしまう。',
        correctAnswer: '好きである',
        correctExplanation:
          '英語では質問の形にかかわらず、答えの内容が肯定なら Yes、否定なら No を使う。Yes, I do. は「好きです」の意味。直後の I watch games every weekend.（毎週末に試合を見る）も好きであることを裏づけている。Yes / No のあとの動詞と、続く文の内容で確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s397',
    subject: 'eigo',
    examType: 'koko',
    title: 'リスニング⑤：長い対話とスピーチの要点をとる',
    description: '長めの放送で、話題・理由・結論の三点をメモに残す',
    intro: '30秒を超える放送になると、全部を覚えておくことはできません。プロの通訳でもメモを取ります。必要なのは、話題・理由・結論の三点だけ。この三つを書く場所をあらかじめ決めておけば、長い放送も落ち着いて聞けるようになります。',
    order: 897,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '長い放送は「話題 → 理由・具体例 → 結論」の順に進む。',
      'メモは三段に分けて書く。上に話題、中に数字と理由、下に結論。',
      '接続語（first / second / also / however / so / that is why）が段落の切れ目を示す。',
      'スピーチでは最初と最後の一文に主題がある。中間は具体例なので細部は捨ててよい。',
      '設問が Why なら because / that is why のあとを、What なら名詞を待ちかまえる。',
      '答えを英語で書く問題では、放送の語句をそのまま借りてよい。',
    ],
    sections: [
      {
        heading: 'メモの取り方を決める',
        body: `長い放送では、聞きながらすべてを書くことはできない。書く場所と書く内容を先に決めておく。

■ 三段メモ
上段：話題（何の話か）— 名詞ひとつでよい。「学校祭」「留学」「ボランティア」
中段：数字・理由・具体例 — 「参加200人」「first 楽しい／second 友達」
下段：結論・話し手の意見 — 「来年も参加したい」

■ 段落の切れ目を示す語
First, / Second, / Finally,（列挙）
For example, / Such as（具体例）
However, / But / On the other hand,（転換）
So, / That's why / Therefore(以上より)（結論）
これらが聞こえたら、メモの行を変える。行を変えるだけで、あとから見返したときに構造がわかる。

■ 書く量の目安
1文につき2〜3語（日本語なら5字程度）。文で書こうとすると次を聞き逃す。
数字と固有名詞は必ず書く。形容詞や副詞は書かなくてよい。

■ スピーチ型の放送
最初の一文（導入）と最後の一文（結論）に主題がある。
例）Today I want to talk about my experience in Australia. …（具体例）… So I think studying abroad changed my life.
中間の具体例は、設問で問われた部分だけ思い出せればよい。

★ ポイント：メモは自分だけが読めればよい。日本語・記号・矢印を自由に使う。きれいに書こうとしないこと。`,
        figureId: 'lf_kokoeigoext11_397',
      },
      {
        heading: 'スクリプトで要点を取る練習',
        body: `実際のスピーチ型スクリプトで、三段メモを作ってみる。

【スクリプト】
Hello, everyone. Today I want to talk about our school festival. Last year, about five hundred people came to our school. Our class made a small restaurant. We sold curry and rice.
At first, I did not want to join the festival because I was busy with my club activities. However, my friends asked me to help them, so I decided to join.
Working with my classmates was hard, but it was a lot of fun. We talked a lot and became better friends. That is why I want to join the festival again this year.

【三段メモの例】
上段：school festival（学校祭）
中段：500人／クラス＝レストラン、カレー／最初は×（部活が忙しい）→友達に頼まれて参加
下段：また参加したい（仲よくなれたから）

【想定される設問と答えの場所】
①How many people came to the school festival last year? → 中段の数字。about five hundred（約500人）。
②Why did the speaker decide to join the festival? → However 以下。友達に頼まれたから。
③Why does the speaker want to join again? → That is why の直前。クラスメートと仲よくなれたから。

■ 設問の疑問詞と、答えの場所の対応
How many / What time → 数字を書いた行
Why → because / However / so / That is why の近く
What did 〜 do → 動詞を書いた行

⚠ 注意：At first（最初は）は「最初に」という順序ではなく、「初めのうちは（あとで変わる）」という含みを持つ。この語のあとには必ず変化がくる。

★ ポイント：That is why 〜（そういうわけで〜）の直前が理由、直後が結論。この一語を聞き取れると、理由と結論の設問が同時に解ける。`,
      },
    ],
    trapExamples: [
      {
        question:
          "スクリプトを読み、話し手が学校祭に参加した理由を答えよ。 At first, I did not want to join the festival because I was busy with my club activities. However, my friends asked me to help them, so I decided to join.",
        wrongAnswer: '部活が忙しかったから',
        trapExplanation:
          'because という語が聞こえた場所をそのまま理由として答えてしまう。しかしこの because は「参加したくなかった理由」であって、「参加した理由」ではない。',
        correctAnswer: '友達に手伝ってほしいと頼まれたから',
        correctExplanation:
          'At first（初めのうちは）と However（しかし）があるので、前半は参加しなかった理由、後半が参加した理由になる。設問が「参加した理由」なら、However 以降の my friends asked me to help them, so I decided to join が答え。because を見つけただけで答えを決めず、何の理由かを確認する。',
      },
      {
        question:
          "スクリプトを読み、昨年の来場者数を答えよ。 Last year, about five hundred people came to our school. This year, we want more than six hundred people to come.",
        wrongAnswer: '600人',
        trapExplanation:
          '数字が二つ出てくると、あとから聞こえた大きい方が印象に残る。six hundred は今年の目標であって、昨年の実績ではない。',
        correctAnswer: '約500人',
        correctExplanation:
          '数字をメモするときは、必ず「いつの数字か」を添える（昨500／今年目標600 のように）。Last year / This year / next year といった時を表す語は数字の直前か直後に必ずあるので、セットで書き取る。設問が last year を問うているかどうかも先読みで確認しておく。',
      },
    ],
  },

  // ───────────── 5. 和文英訳の手順（s398〜s401） ─────────────
  {
    id: 'koko_eigo_s398',
    subject: 'eigo',
    examType: 'koko',
    title: '和文英訳①：骨組み（主語・動詞）を先に立てる',
    description: '日本語の文からまず主語と動詞を決め、S V O M の順に組み立てる',
    intro: '「昨日、公園で弟とサッカーをしました」を英語にするとき、頭から順に訳そうとすると必ず行き詰まります。英語は主語と動詞が先、飾りは後ろだからです。日本語を読んだらまず「だれが」「どうする」を決める。この順番を固定するだけで、和文英訳は驚くほど安定します。',
    order: 898,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '手順①：日本語から「だれが（S）」「どうする（V）」を決める。',
      '手順②：目的語（O）や補語（C）を置く。',
      '手順③：修飾語（M）を後ろに置く。順序は「どのように → どこで → いつ」。',
      '日本語で省略された主語（私は・あなたは）を必ず補う。',
      '時制は日本語の文末（〜した／〜します／〜している）で判断する。',
      '書き終えたら、主語と動詞の一致・冠詞・複数形の三点を検算する。',
    ],
    sections: [
      {
        heading: '骨組みを立てる三手順',
        body: `和文英訳は、日本語を頭から訳すのではなく、部品を並べかえて組み立てる作業である。

■ 手順①：主語（S）と動詞（V）を決める
「昨日、公園で弟とサッカーをしました。」
　だれが → 私が（日本語では省略されている）→ I
　どうする → した（サッカーを）→ played
※ 日本語は主語を省くことが多い。英語は命令文以外では必ず主語が必要なので、まず補う。

■ 手順②：目的語（O）を置く
何を → サッカーを → soccer
　I played soccer.
※ スポーツ名には the を付けない（play soccer）。楽器には the を付ける（play the piano）。

■ 手順③：修飾語（M）を後ろに並べる
だれと → with my brother
どこで → in the park
いつ → yesterday
　I played soccer with my brother in the park yesterday.

■ 修飾語の順序
英語の修飾語は「どのように（様態）→ どこで（場所）→ いつ（時）」の順が原則。
例）He runs fast in the park every morning.
※ 時を表す語句は文頭に置くこともできる。Yesterday, I played soccer 〜. も正しい。

★ ポイント：日本語は「いつ・どこで」が先、英語は後ろ。この順番の逆転こそが和文英訳の要である。骨組みを先に書き、飾りを後ろに足す。`,
        figureId: 'lf_kokoeigoext11_398',
      },
      {
        heading: '主語の補い方と時制の決め方',
        body: `骨組みを立てるときに迷うのが、主語と時制である。

■ 省略された主語を補う
「明日は雨でしょう。」→ It will be rainy tomorrow.（天気の it）
「この本はおもしろいと思います。」→ I think (that) this book is interesting.
「ここでは英語が話されています。」→ English is spoken here.
「（あなたは）窓を開けてください。」→ Please open the window.（命令文は主語なし）
「（私たちの学校には）500人の生徒がいます。」→ There are five hundred students in our school.

■ 時制を決める
日本語の文末を見る。
　〜した／〜だった → 過去形
　〜する／〜です → 現在形（習慣・事実）
　〜している → 現在進行形（今この瞬間）
　〜するつもりだ／〜でしょう → will / be going to
　ずっと〜している／〜したことがある → 現在完了

■ 迷いやすい例
「私は毎日6時に起きます。」→ 習慣なので現在形。I get up at six every day.
「私は今、宿題をしています。」→ 今なので進行形。I am doing my homework now.
「私は3年間ピアノを習っています。」→ 継続なので現在完了。I have learned the piano for three years.

■ 書き終えたあとの三点検算
①主語と動詞は一致しているか（三単現の s、be動詞の am/is/are/was/were）
②名詞に a / an / the / 複数形の s は付いているか
③時制はそろっているか

⚠ 注意：日本語の「〜ている」がすべて進行形になるわけではない。「知っている」は I know、「持っている」は I have で、進行形にしない（状態を表す動詞）。

★ ポイント：主語を決めたら、その主語で必ず一度声に出さずに読む。三単現の s の書き忘れは、この一手間で大半が防げる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は3年間ずっと英語を勉強しています」を英語にせよ。',
        wrongAnswer: 'I am studying English for three years.',
        trapExplanation:
          '「〜しています」という日本語を現在進行形だと判断してしまう。しかし現在進行形は「今この瞬間の動作」を表すので、for three years（3年間）という継続の期間とは結びつかない。',
        correctAnswer: 'I have studied English for three years.（または I have been studying English for three years.）',
        correctExplanation:
          '「（ずっと）〜している」で期間を伴うときは現在完了（継続）を使う。for（〜の間）や since（〜以来）があれば現在完了の合図。日本語の「〜ている」は、今の動作（進行形）・継続（現在完了）・状態（現在形）のどれにもなるので、期間を表す語句の有無で決める。',
      },
      {
        question: '「私の弟は毎日ピアノをひきます」を英語にせよ。',
        wrongAnswer: 'My brother play piano every day.',
        trapExplanation:
          '主語が My brother（三人称単数）であることを見落として動詞に s を付け忘れ、さらに楽器名に the を付け忘れている。二つのミスが同時に起きやすい典型例。',
        correctAnswer: 'My brother plays the piano every day.',
        correctExplanation:
          '主語が三人称単数で現在の習慣を表すので、動詞は plays。また play のあとの楽器名には the を付ける（play the piano / play the guitar）。一方、スポーツ名には the を付けない（play soccer / play baseball）。書き終えたら、主語と動詞の一致・冠詞・複数形の三点を必ず見直す。',
      },
    ],
  },

  {
    id: 'koko_eigo_s399',
    subject: 'eigo',
    examType: 'koko',
    title: '和文英訳②：知っている表現に言いかえる',
    description: '難しい日本語をやさしい日本語に直してから英語にする技術',
    intro: '「彼は約束を守る人だ」を英語にしようとして、「約束を守る」の言い方が浮かばず手が止まる。こんなときは、日本語のまま考え直すのが近道です。「彼はいつも言ったことをする」なら書けるはずです。英作文は、書ける形に言いかえた人が勝ちます。',
    order: 899,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '書けない表現に出会ったら、まず「やさしい日本語」に言いかえる。',
      '言いかえの型①：一文を二文に分ける。',
      '言いかえの型②：抽象的な語を具体的な動作にする。',
      '言いかえの型③：主語を変える（人を主語にする／There is 〜 を使う）。',
      '減点されない範囲でやさしく書く。難しい語で誤るより、簡単な語で正しく書く方が高得点。',
      '知らない単語は使わない。使えば必ずつづりで減点される。',
    ],
    sections: [
      {
        heading: 'やさしい日本語に直す',
        body: `和文英訳で手が止まる原因は、英語力ではなく「日本語をそのまま訳そうとしている」ことにある。

■ 型①：一文を二文に分ける
「昨日買ったこの本はとてもおもしろい。」
　→「私は昨日この本を買った。それはとてもおもしろい。」
　I bought this book yesterday. It is very interesting.
※ 関係代名詞を使わずに書ける。二文にしても減点されない。

■ 型②：抽象的な語を具体的な動作にする
「彼は約束を守る人だ。」
　→「彼はいつも、すると言ったことをする。」
　He always does what he says.（または He always keeps his promises.）
「私は環境に関心がある。」
　→「私は環境について学びたい。」
　I want to learn about the environment.

■ 型③：主語を変える
「この町にはたくさんの公園がある。」
　→ There are many parks in this town.（人を主語にしない）
「その知らせを聞いて私はうれしかった。」
　→ I was happy to hear the news.（人を主語にする）
「日本ではたくさんの人が野球を見る。」
　→ Many people watch baseball in Japan.

■ 型④：受け身を能動に、能動を受け身に
「この写真は父によってとられた。」→ My father took this picture. でもよい。
指定がなければ、書きやすい方を選ぶ。

★ ポイント：言いかえは「意味が変わらない範囲で」行う。減点されるのは意味がずれたときであって、簡単な語を使ったときではない。`,
      },
      {
        heading: '書ける語だけで書く',
        body: `入試の和文英訳では、難しい語を使う必要はない。中学校で習った語だけで十分に書ける。

■ 難しい語を避ける言いかえ
「便利だ」→ useful（difficult な convenient を無理に使わなくてよい）
「感謝する」→ I am glad / I say thank you
「参加する」→ join（participate in は不要）
「重要だ」→ important
「〜する必要がある」→ I have to 〜 / I need to 〜
「〜が得意だ」→ I am good at 〜ing
「〜するのが好きだ」→ I like 〜ing / I like to 〜

■ つづりに自信がない語は使わない
beautiful / delicious / interesting / restaurant / vegetable などはつづりを間違えやすい。
自信がなければ nice / good / very good に置きかえる。減点は避けられる。

■ 一文を短くする
一文が長いほど、文法ミスの箇所が増える。
悪い例）I think that the book which I read yesterday was very interesting because it told me about many countries which I have never visited.
よい例）I read a book yesterday. It was very interesting. It told me about many countries.
※ 三文に分けても内容は同じ。減点される可能性は大きく下がる。

■ 「書けない」ときの最後の手段
どうしても表現が浮かばなければ、内容を少し変えてでも書く。白紙は0点だが、意味の通る英文なら部分点が付く。

⚠ 注意：辞書的な難しい語を無理に使い、つづりや語法をまちがえると、内容点も文法点も両方落とす。やさしい語で正確に書くのが最も効率がよい。

★ ポイント：「自分が書ける文の型」を10個ほど持っておく。I like 〜ing. / I want to 〜. / There is(are) 〜. / It is 〜 to 〜. / I think (that) 〜. などである。どんな課題も、この型のどれかに落としこむ。`,
      },
    ],
    trapExamples: [
      {
        question: '「昨日読んだ本はとてもおもしろかった」を、関係代名詞を使わずに英語にせよ。',
        wrongAnswer: 'I read book yesterday was very interesting.',
        trapExplanation:
          '日本語の語順のまま単語を並べてしまい、一文の中に動詞が二つ（read と was）入って文が壊れている。関係代名詞を使わないという条件に対応できていない。',
        correctAnswer: 'I read a book yesterday. It was very interesting.',
        correctExplanation:
          '一文で書けないときは二文に分ける。前の文で「本を読んだ」ことを述べ、次の文で it を主語にして感想を述べればよい。二文に分けても減点はされない。なお read の過去形はつづりが read のまま（発音だけ変わる）ことにも注意。',
      },
      {
        question: '「私は将来、外国で働きたいと思っています」を英語にせよ。',
        wrongAnswer: 'I am thinking to work in foreign in the future.',
        trapExplanation:
          '「思っています」を進行形にし、think のあとに to 不定詞を続けてしまう。また「外国」を foreign（形容詞）一語で名詞のように使っている。',
        correctAnswer: 'I want to work in a foreign country in the future.（または I want to work abroad in the future.）',
        correctExplanation:
          '「〜したいと思う」は want to 〜 一語で表せる。think を使うなら I think I want to work 〜 となるが、冗長なので不要。foreign は形容詞なので a foreign country と名詞を補うか、副詞の abroad（外国で）を使う。日本語の「思う」に引きずられないこと。',
      },
    ],
  },

  {
    id: 'koko_eigo_s400',
    subject: 'eigo',
    examType: 'koko',
    title: '和文英訳③：語順と修飾の位置',
    description: '形容詞・副詞・句をどこに置くかを、規則として身につける',
    intro: '「私は昨日、駅の近くの新しい店で買い物をしました」。この一文には、飾りが三つ入っています。英語では飾りをどこに置くかが決まっていて、置き場所をまちがえると意味が変わります。位置の規則を覚えれば、長い文も迷わず組み立てられます。',
    order: 900,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '形容詞は名詞の前（a new shop）、二語以上のかたまりは名詞の後ろ（a shop near the station）。',
      '副詞の位置：頻度（always / often / usually）は一般動詞の前、be動詞・助動詞の後ろ。',
      '動詞のあとの並びは「何を（O）→ どこで → いつ」。',
      '場所と時が並ぶときは、場所が先、時が後ろ。',
      '「とても」「本当に」（very / really）は修飾する語の直前に置く。',
      '不定詞・分詞・前置詞句など、二語以上の修飾語は必ず名詞の後ろから修飾する。',
    ],
    sections: [
      {
        heading: '飾りの置き場所',
        body: `英語の修飾語には、前から飾るものと後ろから飾るものがある。長さで決まる。

■ 一語の形容詞 → 名詞の前
a new shop（新しい店）／an interesting book／many students

■ 二語以上のかたまり → 名詞の後ろ
a shop near the station（駅の近くの店）
the boy playing tennis（テニスをしている少年）※ 現在分詞
a letter written in English（英語で書かれた手紙）※ 過去分詞
something to eat（何か食べるもの）※ 不定詞
the book that I read yesterday（私が昨日読んだ本）※ 関係代名詞
※ 日本語では全部前から飾るので、この逆転が最大のつまずきになる。

■ -thing で終わる語は必ず後ろから
something cold（何か冷たいもの）／anything interesting（何かおもしろいもの）
cold something とは言わない。

■ 副詞（頻度）の位置
一般動詞の前：I always get up at six.／He often goes to the library.
be動詞の後ろ：He is always kind.
助動詞の後ろ：I will always remember you.
※ sometimes と usually は文頭に置くこともできる。

■ 動詞のあとの並び
V → O（何を）→ 場所 → 時
例）I played soccer in the park yesterday.
例）She studied English at home last night.
場所と時が両方あるときは、必ず場所が先である。

★ ポイント：日本語は「いつ・どこで・何を・どうする」、英語は「だれが・どうする・何を・どこで・いつ」。ほぼ逆順になる。`,
        figureId: 'lf_kokoeigoext11_400',
      },
      {
        heading: '位置がずれると意味が変わる語',
        body: `副詞の中には、置く場所によって意味が変わるものがある。入試ではここが問われる。

■ only（〜だけ）
Only I ate the cake.（私だけがケーキを食べた）
I only ate the cake.（私はケーキを食べただけだ）
I ate only the cake.（私はケーキだけを食べた）
※ only は直後の語を限定する。修飾したい語の直前に置く。

■ very / really
This is a very interesting book.（形容詞の前）
He runs very fast.（副詞の前）
※ very は名詞を修飾できない。very a book は誤り。

■ enough
This box is big enough.（形容詞の後ろ）
I have enough time.（名詞の前）
※ enough は形容詞・副詞を修飾するときは後ろから、名詞を修飾するときは前から。

■ too（〜も／〜すぎる）
I like music, too.（私も／私は音楽も）文末に置く
This coffee is too hot.（熱すぎる）形容詞の前に置く

■ 頻度の副詞と否定
I don't always go there.（いつも行くとは限らない）＝部分否定
I always don't go there. とは言わない。

⚠ 注意：日本語の「〜も」は文中のどこにでも付けられるが、英語の too は文末が基本。I too like music. は不自然で、I like music, too. とする。

★ ポイント：書き終えたら、修飾語を一つずつ指さし、「これは何を飾っているか」を確認する。飾る相手のすぐ近くにあるかどうかで、位置の正しさが判定できる。`,
      },
    ],
    trapExamples: [
      {
        question: '「何か冷たい飲み物がほしい」を英語にせよ。',
        wrongAnswer: 'I want cold something to drink.',
        trapExplanation:
          '形容詞は名詞の前という原則をそのまま当てはめてしまう。日本語も「冷たい何か」と前から飾るので、違和感を持ちにくい。',
        correctAnswer: 'I want something cold to drink.',
        correctExplanation:
          'something / anything / nothing / everything を修飾する形容詞は、必ず後ろに置く。さらに不定詞 to drink もその後ろに続けるので、something → cold → to drink の順になる。something hot to eat / anything interesting も同じ形。',
      },
      {
        question: '「私は昨日、公園でテニスをしました」を英語にせよ。',
        wrongAnswer: 'I played tennis yesterday in the park.',
        trapExplanation:
          '日本語が「昨日、公園で」の順なので、その順序のまま英語に置きかえてしまう。文法的に完全な誤りではないが、英語の自然な語順ではない。',
        correctAnswer: 'I played tennis in the park yesterday.',
        correctExplanation:
          '英語では動詞のあとに「何を（O）→ どこで（場所）→ いつ（時）」の順で並べる。場所が先、時が後ろである。なお時を表す語句は文頭に出すこともでき、Yesterday I played tennis in the park. も正しい。ただし場所と時を並べるときは、必ず場所を先にする。',
      },
    ],
  },
  {
    id: 'koko_eigo_s401',
    subject: 'eigo',
    examType: 'koko',
    title: '和文英訳④：書いたあとの検算',
    description: '主語と動詞の一致・冠詞・複数形・時制・つづりを、順番に見直す',
    intro: '英作文で失う点の大半は、内容ではなく細かいミスです。三単現の s、a と the、複数形の s。どれも知っていることばかりなのに落とします。理由は、見直しの順番を決めていないからです。数学の検算と同じで、順番を決めれば見落としは激減します。',
    order: 901,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '検算の順序を固定する：①主語と動詞 ②名詞（冠詞・複数形）③時制 ④つづり ⑤大文字とピリオド。',
      '三単現の s は、主語が he / she / it / 単数名詞のときだけ付ける。',
      '数えられる名詞は、単数なら a / an / the、複数なら s が必ず要る。',
      '一文の中に動詞は原則ひとつ。二つあるなら接続詞か不定詞・動名詞が必要。',
      '文頭の大文字と文末のピリオド（疑問符）を最後に確認する。',
      '見直しは書き終えた直後ではなく、ほかの問題を解いてから戻ると発見率が上がる。',
    ],
    sections: [
      {
        heading: '五段階の検算',
        body: `英作文の見直しは、思いつくままに読み返しても効果が薄い。次の五段階を順に行う。

■ ①主語と動詞の一致
・主語が三人称単数（he / she / it / my brother / Ken）で現在の話 → 動詞に s。
　My brother plays soccer.（○）My brother play soccer.（×）
・be動詞：I am / you are / he is / they are / 過去は was, were。
・複数主語に s を付けない：My friends play soccer.（○）
※ 主語が長いとき（The boy playing tennis over there）、動詞は The boy に合わせる。

■ ②名詞のチェック
・数えられる名詞が単数 → a / an / the / my などが必要。book だけで置かない。
・数えられる名詞が複数 → s を付ける。two book は誤り。
・数えられない名詞（water, money, time, homework, information）に a も s も付けない。
・a と an：母音の音で始まる語の前は an（an apple, an hour, an old man）。

■ ③時制
・過去を表す語句（yesterday, last week, ago, then）があれば過去形。
・未来を表す語句（tomorrow, next week）があれば will / be going to。
・for / since があれば現在完了を検討する。
・一文の中で時制がそろっているか（I went to the park and play soccer. は誤り）。

■ ④つづり
自信のない語は書き直す。よくまちがえるもの：
　because / beautiful / friend / receive / restaurant / vegetable / interesting / favorite / different / important

■ ⑤形式
文頭の大文字、文末のピリオド、疑問文のクエスチョンマーク、固有名詞（Japan, Ken, Monday, English）の大文字。

★ ポイント：①〜⑤を一度に見ようとしないこと。①だけを見て全文を通す、次に②だけを見て通す。これが最も見落としが少ない。`,
      },
      {
        heading: '一文に動詞は一つ',
        body: `英作文で文が壊れる最大の原因は、一文の中に動詞が二つ入ってしまうことである。

■ 壊れた文の例
×I like music is very beautiful.
×My favorite sport is play soccer.
×I want go to America.
×He is study English every day.

■ 動詞を二つ以上使うときの正しい形
①接続詞でつなぐ
　I like music, and my sister likes sports.
　I think (that) this book is interesting.
②不定詞にする
　I want to go to America.
　I went to the park to play soccer.
③動名詞にする
　My favorite sport is playing soccer.
　I enjoy reading books.
④分詞・関係代名詞で名詞を修飾する
　The boy playing tennis is my brother.
　This is the book that I read yesterday.

■ be動詞と一般動詞を重ねない
×I am like music. → ○I like music.
×He is study English. → ○He studies English. / He is studying English.
be動詞は「＝」の意味なので、一般動詞と並べることはできない。

■ 確認の方法
書き終えた文の動詞（be動詞・一般動詞・助動詞）に丸を付ける。丸が二つ以上あれば、接続詞か to か 〜ing があるかを確かめる。なければ文が壊れている。

⚠ 注意：助動詞（can / will / must / should）のあとは必ず動詞の原形。He can plays soccer. は誤りで、He can play soccer. とする。

★ ポイント：動詞に丸を付ける習慣は、和文英訳・条件英作文・自由英作文のすべてに効く。1分で終わるうえ、大きな減点を防げる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の兄はサッカーが好きで、毎日練習しています」を英語にせよ。',
        wrongAnswer: 'My brother like soccer and practice it every day.',
        trapExplanation:
          '主語が三人称単数であることは頭では分かっていても、動詞が二つ並ぶと後ろの動詞の s を落としやすい。and でつないだ二つ目の動詞も同じ主語を受けることを意識できていない。',
        correctAnswer: 'My brother likes soccer and practices it every day.',
        correctExplanation:
          'and でつながれた二つの動詞は、どちらも主語 My brother を受ける。したがって likes と practices の両方に三単現の s が必要。見直しでは主語に線を引き、その主語が支配する動詞すべてに丸を付けて、一つずつ s を確認する。',
      },
      {
        question: '「私の好きなスポーツはサッカーをすることです」を英語にせよ。',
        wrongAnswer: 'My favorite sport is play soccer.',
        trapExplanation:
          '「サッカーをすること」を play soccer とそのまま置いてしまう。is という動詞がすでにあるのに、原形の play を並べているため、一文に動詞が二つ入っている。',
        correctAnswer: 'My favorite sport is playing soccer.（または My favorite sport is soccer.）',
        correctExplanation:
          'be動詞のあとに動作を置くときは、動名詞（playing）か不定詞（to play）にする。原形は置けない。もっと簡単に My favorite sport is soccer. としてもよい。書き終えたら動詞に丸を付け、二つ以上あれば接続詞・to・〜ing のどれかがあるかを確認する。',
      },
    ],
  },

  // ───────────── 6. 語順並べかえの解き方（s402〜s405） ─────────────
  {
    id: 'koko_eigo_s402',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ①：かたまりを作ってから並べる',
    description: '与えられた語を先に小さなかたまりにまとめ、S V O M の順に置く',
    intro: '並べかえ問題で、語を一つずつ順番に置こうとしていませんか。それでは組み合わせが多すぎて時間が足りません。プロがやるのは、まず二〜三語のかたまりを作ることです。to the station、my brother、want to go。かたまりにすれば、残るのは並べる作業だけになります。',
    order: 902,
    studyPeriod: '中3前半',
    targetLevel: 'oyo',
    keyPoints: [
      '手順①：動詞（またはbe動詞）を探して丸で囲む。文の中心が決まる。',
      '手順②：かたまりを作る（前置詞＋名詞／to＋動詞／形容詞＋名詞／助動詞＋動詞）。',
      '手順③：主語を決める。残った名詞のうち、動詞の前に置けるものを選ぶ。',
      '手順④：S V O M の順に並べ、余った語の置き場所を考える。',
      '与えられた語をすべて使い、余りが出ないことを必ず確認する。',
      '完成後は文頭の大文字と文末のピリオドまで含めて書き写す。',
    ],
    sections: [
      {
        heading: 'かたまりの作り方',
        body: `並べかえ問題は、語を一つずつ動かすと組み合わせが爆発する。先にかたまりを作ると、動かす単位が3〜4個に減る。

■ かたまりになりやすい組み合わせ
①前置詞＋名詞：in the park／to the station／with my friends／at seven／on Sunday
②to＋動詞の原形：to go／to see／to play
③助動詞＋動詞の原形：can play／will come／must finish
④be動詞＋〜ing／過去分詞：is playing／was written
⑤冠詞・所有格＋（形容詞）＋名詞：a new book／my favorite song／the tall boy
⑥決まった言い回し：how to 〜（〜のしかた）／be interested in／be able to／too 〜 to／not only 〜 but also

■ 実例
【与えられた語】(to / want / I / the / go / station / to)
①動詞：want と go。to go というかたまりを作る。
②かたまり：to the station（前置詞＋名詞）／to go（to＋原形）
③主語：I
④並べる：I ＋ want ＋ to go ＋ to the station.
【完成】I want to go to the station.
※ to が二つあることに注意。片方は不定詞の to、もう片方は前置詞の to である。

■ 動詞を先に探す理由
英語の文は動詞を中心に組み立てられている。動詞が決まれば、その前が主語、その後ろが目的語や修飾語だと自動的に決まる。

★ ポイント：かたまりを作ったら、紙の上でスラッシュを入れて区切る。I / want / to go / to the station. のように書けば、見た目でも並べ替えやすい。`,
        figureId: 'lf_kokoeigoext11_402',
      },
      {
        heading: '第4文型・第5文型のかたまり',
        body: `並べかえで差がつくのは、目的語が二つある文と、目的語のあとに補語が来る文である。

■ 第4文型（V＋人＋物）
give / show / tell / teach / send / buy / make / lend などが使われる。
He gave me a nice present.（彼は私にすてきな贈り物をくれた）
　順序は「人 → 物」。逆にすると前置詞が必要になる。
He gave a nice present to me.（to を付ければ物 → 人でもよい）
※ give / show / tell / send / teach / lend は to、buy / make / cook / get は for を使う。
　My mother made me a cake. ＝ My mother made a cake for me.

■ 第5文型（V＋目的語＋補語）
call / make / name / keep などが使われる。
We call him Ken.（私たちは彼をケンと呼ぶ）
The news made me happy.（その知らせは私を幸せにした）
Please keep the room clean.（部屋をきれいにしておいてください）
※ 目的語のあとに、その目的語を説明する語（名詞・形容詞）が続く。

■ 使役・知覚に近い形
help ＋ 人 ＋ 動詞の原形：He helped me carry the box.
want / tell / ask ＋ 人 ＋ to 不定詞：I want you to come.／She told me to wait.
※ この形は並べかえの最頻出。「人」と「to＋動詞」の順序を固定して覚える。

■ 見分け方
与えられた語に「人を表す代名詞の目的格（me / him / her / us / them）」と「物を表す名詞」が両方あれば第4文型を疑う。
「人」と「to＋動詞の原形」が両方あれば want / tell / ask 型を疑う。

⚠ 注意：give me it のように、物が代名詞のときは第4文型が使いにくい。give it to me とする。

★ ポイント：並べ終えたら、与えられた語がすべて使われているか、数を数えて確認する。余りが出たら並べ方がまちがっている。`,
      },
    ],
    trapExamples: [
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (me / to / she / wait / told)',
        wrongAnswer: 'She told to wait me.',
        trapExplanation:
          'tell のあとにすぐ to 不定詞を置いてしまう。「〜するように言う」という日本語では「言う」と「待つ」が近く感じられ、間に人が入る形を思い出せない。',
        correctAnswer: 'She told me to wait.',
        correctExplanation:
          'tell / want / ask ＋ 人 ＋ to＋動詞の原形 が決まった語順。人（me）が先で、そのあとに to wait が来る。I want you to come. / She asked me to help her. も同じ形。「だれに」を先に置くと覚える。',
      },
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (a / made / cake / mother / me / my)',
        wrongAnswer: 'My mother made me a cake for me.',
        trapExplanation:
          '第4文型（V＋人＋物）と、for を使う形を混同し、両方書いてしまう。また与えられた語に for がないことを確認していない。',
        correctAnswer: 'My mother made me a cake.',
        correctExplanation:
          'make ＋ 人 ＋ 物 の第4文型で「人に物を作ってやる」を表す。for を使うなら My mother made a cake for me. だが、今回は for が与えられていないので使えない。並べかえでは、与えられた語がすべて過不足なく使われているかを必ず数えて確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s403',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ②：疑問文・間接疑問の語順',
    description: '疑問詞で始まる文と、文の中に組みこまれた疑問文の語順を区別する',
    intro: 'Do you know where he lives? の where のあとは、なぜ he lives の順なのでしょう。does が消えているのも不思議です。文の中に入った疑問文は、疑問文の顔をやめてふつうの語順に戻ります。この切りかえができれば、並べかえの難問がひとつ解けるようになります。',
    order: 903,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    keyPoints: [
      '疑問文の語順：疑問詞 ＋ 助動詞(do/does/did/be/can/will) ＋ 主語 ＋ 動詞。',
      '間接疑問（文の中の疑問文）は「疑問詞 ＋ 主語 ＋ 動詞」の平叙文の語順に戻す。',
      '間接疑問では do / does / did が消え、その分の情報は動詞の形に移る。',
      '疑問詞が主語になる場合（Who broke 〜?）は、そのまま平叙文の語順。',
      '付加疑問は、肯定文には否定、否定文には肯定を付ける。',
      '感嘆文は How ＋ 形容詞 ＋ 主語 ＋ 動詞／What ＋ (a) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞。',
    ],
    sections: [
      {
        heading: '疑問文の基本語順',
        body: `疑問文は、疑問詞・助動詞・主語・動詞の順に並べる。この四つの箱を意識する。

■ 一般動詞の疑問文
What did you do last Sunday?（先週の日曜、何をしましたか）
　What（疑問詞）／did（助動詞）／you（主語）／do（動詞の原形）
※ did があるので、動詞は原形の do になる。did you did は誤り。

■ be動詞の疑問文
Where is your school?／When were you born?
　be動詞そのものが主語の前に出る。

■ 助動詞の疑問文
How can I get to the station?／What will you do tomorrow?

■ 疑問詞が主語のとき
Who broke this window?（だれがこの窓を割ったのですか）
　Who が主語なので、did は入れない。Who did break 〜? とはしない。
What happened yesterday?（昨日、何が起こったのですか）
※ 疑問詞のすぐあとに動詞が来ていれば、その疑問詞は主語である。

■ 疑問詞＋名詞のかたまり
What time does the movie start?
How many books do you have?
Whose bag is this?
※ 疑問詞と名詞は必ずくっついたまま文頭に出る。What does time the movie start? は誤り。

★ ポイント：並べかえで疑問符（?）が付いていたら、まず疑問詞を探して文頭に置く。次に助動詞、主語、動詞の順に埋める。箱を四つ書いてから当てはめるとまちがえない。`,
        figureId: 'lf_kokoeigoext11_403',
      },
      {
        heading: '間接疑問と付加疑問',
        body: `文の中に組みこまれた疑問文（間接疑問）は、語順がふつうの文に戻る。ここが並べかえの最頻出ポイントである。

■ 間接疑問の作り方
直接疑問：Where does he live?
　→ 文の中に入れる：I don't know where he lives.
　　①does が消える　②動詞に三単現の s が移る　③疑問詞 ＋ 主語 ＋ 動詞 の語順
直接疑問：What is this?
　→ Do you know what this is?（is が後ろに回る）
直接疑問：When did she come?
　→ I want to know when she came.（did が消え、動詞が過去形になる）

■ 間接疑問を導く動詞・表現
I don't know 〜／Do you know 〜？／Tell me 〜／I want to know 〜／I'm not sure 〜

■ よくある誤り
×Do you know where does he live?（does が残っている）
×I don't know what is this.（is が主語の前にある）
○Do you know where he lives?／○I don't know what this is.

■ 付加疑問
肯定文 → 否定の付加疑問：You are a student, aren't you?
否定文 → 肯定の付加疑問：He can't swim, can he?
一般動詞：You like music, don't you?／She went there, didn't she?
※ 主語は必ず代名詞にする（Ken is kind, isn't he?）。

■ 感嘆文
How kind she is!（何と親切なのだろう）※ How ＋ 形容詞 ＋ 主語 ＋ 動詞
What a beautiful flower this is!※ What ＋ a ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞
名詞があるかどうかで How と What を使い分ける。

⚠ 注意：間接疑問で「疑問文の語順のまま」書くのが最大のミス。文の途中に疑問詞が現れたら、そのあとは必ず「主語 ＋ 動詞」だと決めてかかる。

★ ポイント：並べかえの語群に know / tell / sure と疑問詞が同時にあれば、間接疑問だと判断してよい。do / does / did が与えられていないことも手がかりになる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (he / know / where / do / lives / you)',
        wrongAnswer: 'Do you know where does he live?',
        trapExplanation:
          '「彼がどこに住んでいるか」を疑問文だと考え、where のあとを疑問文の語順にしてしまう。しかも語群に does はないのに、頭の中で補ってしまっている。',
        correctAnswer: 'Do you know where he lives?',
        correctExplanation:
          '文の中に組みこまれた疑問（間接疑問）は「疑問詞 ＋ 主語 ＋ 動詞」の平叙文の語順になる。does は消え、その情報は動詞 lives の s に移る。語群に lives（s 付き）があり does がないことが、間接疑問だという決め手になる。',
      },
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (broke / who / window / this)',
        wrongAnswer: 'Who did break this window?',
        trapExplanation:
          '疑問文には助動詞が必要だと思いこみ、did を補ってしまう。しかし語群に did はなく、broke という過去形が与えられている。',
        correctAnswer: 'Who broke this window?',
        correctExplanation:
          '疑問詞が主語のはたらきをするときは、do / does / did を使わず、平叙文と同じ語順になる。Who broke 〜? / What happened? / Who wants some tea? がその例。疑問詞のすぐあとに動詞が置かれていれば、その疑問詞は主語だと判断する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s404',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ③：不定詞・動名詞・分詞をふくむ文',
    description: '準動詞のかたまりを見抜き、名詞の前後どちらから修飾するかを決める',
    intro: '並べかえの語群に ing の付いた語や to があると、とたんに難しく感じます。しかしこれらは「動詞から作られた飾り」なので、飾る相手さえ決まれば置き場所は自動的に決まります。飾る相手を先に探す。この一手で、準動詞の問題は解けるようになります。',
    order: 904,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      'to＋動詞の原形は、名詞（〜すること）・形容詞（〜するための）・副詞（〜するために）の三用法。',
      '名詞を後ろから飾る形：分詞（〜ing／過去分詞）・不定詞・前置詞句・関係代名詞。',
      '動名詞は主語・目的語・補語・前置詞の後ろに置ける。',
      'It is 〜 (for 人) to 〜. の形は、It を主語に置いて to 以下を後ろに回す。',
      'too 〜 to 〜（〜すぎて…できない）と 〜 enough to 〜（…するのに十分〜）は語順が固定。',
      '疑問詞＋to不定詞（how to 〜／what to 〜）は一つのかたまりとして動かす。',
    ],
    sections: [
      {
        heading: '準動詞のかたまりを作る',
        body: `並べかえで to や 〜ing が出てきたら、まずかたまりを作り、次にそのかたまりが文の中でどの役をするかを決める。

■ 不定詞の三用法
①名詞的（〜すること）：I want to play tennis.／To read books is fun.
②形容詞的（〜するための）：I have a lot of homework to do.（名詞の後ろから）
③副詞的（〜するために）：I went to the library to study.

■ 動名詞
主語：Playing tennis is fun.
目的語：I enjoy playing tennis.
補語：My hobby is playing tennis.
前置詞の後ろ：I am good at playing tennis.／Thank you for helping me.

■ 分詞（名詞を飾る）
現在分詞（〜している）：the boy playing tennis／the girl singing over there
過去分詞（〜される・された）：the letter written in English／a country called Japan
※ 一語だけなら名詞の前（a broken window／a sleeping baby）、二語以上なら名詞の後ろ。

■ 決まった形
It is important to study English.（It is 〜 to 〜）
It is difficult for me to get up early.（for 人 を to の直前に置く）
This box is too heavy to carry.（too 〜 to 〜）
He is old enough to drive a car.（〜 enough to 〜。enough は形容詞の後ろ）
I don't know how to use this machine.（疑問詞＋to）
I asked him to help me.（ask 人 to）

★ ポイント：〜ing の語を見たら、①進行形（be＋〜ing）②動名詞（〜すること）③現在分詞（〜している名詞の飾り）のどれかを判定する。語群に be動詞があれば①、なければ②か③である。`,
      },
      {
        heading: '飾る相手を決めてから置く',
        body: `準動詞の並べかえで迷うのは、置き場所である。「何を飾っているか」を先に決めれば置き場所は決まる。

■ 名詞を後ろから飾る形の並べかえ
【語群】(the / playing / boy / tennis / is / brother / my)
①動詞：is（be動詞）
②かたまり：the boy／playing tennis／my brother
③playing tennis は「テニスをしている」→ 飾る相手は the boy
④名詞の後ろに置く：the boy playing tennis
【完成】The boy playing tennis is my brother.

■ 副詞的用法の位置
「〜するために」は文末に置くのが基本だが、文頭でもよい。
I went to the park to play soccer.／To play soccer, I went to the park.

■ It is 〜 to 〜 の並べかえ
【語群】(to / it / for / is / me / difficult / early / get up)
①It is difficult まで作る。
②for me を to の前に置く。
③to get up early を最後に置く。
【完成】It is difficult for me to get up early.
※ for 人 は必ず to の直前。It is difficult to get up early for me. は不自然。

■ too 〜 to 〜 の並べかえ
This tea is too hot to drink.（熱すぎて飲めない）
※ too ＋ 形容詞 ＋ to ＋ 動詞の原形。この順序は変わらない。
書きかえ：This tea is so hot that I can't drink it.

⚠ 注意：不定詞の to のあとは必ず動詞の原形。to playing / to played は誤り。一方、前置詞の to のあとは名詞・動名詞（look forward to seeing you）。

★ ポイント：飾る相手を鉛筆で線でつないでみる。線が交差したり、遠く離れたりしていたら、置き場所がまちがっている。`,
      },
    ],
    trapExamples: [
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (early / difficult / for / it / to / me / get up / is)',
        wrongAnswer: 'It is difficult to get up early for me.',
        trapExplanation:
          '「私にとって」を文末に置いてしまう。日本語では「早起きするのは私にとって難しい」と後ろに置けるので、そのまま英語にしてしまう。',
        correctAnswer: 'It is difficult for me to get up early.',
        correctExplanation:
          'It is 〜 for 人 to … の形では、for 人 は必ず to の直前に置く。この for 人 は「to 以下の動作をする人」を示すはたらきをするため、to から離すと意味の関係が切れてしまう。It is easy for him to swim. も同じ語順。',
      },
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (is / the / brother / tennis / boy / playing / my)',
        wrongAnswer: 'The playing tennis boy is my brother.',
        trapExplanation:
          '形容詞は名詞の前という原則を当てはめ、playing tennis を the boy の前に置いてしまう。日本語が「テニスをしている少年」と前から飾るので違和感を持ちにくい。',
        correctAnswer: 'The boy playing tennis is my brother.',
        correctExplanation:
          '分詞が二語以上のかたまり（playing tennis）になっているときは、必ず名詞の後ろから飾る。前に置けるのは分詞一語のとき（a sleeping baby / a broken window）だけ。かたまりの長さで置き場所を決める。',
      },
    ],
  },

  {
    id: 'koko_eigo_s405',
    subject: 'eigo',
    examType: 'koko',
    title: '並べかえ④：関係代名詞・比較・受け身をふくむ文',
    description: '入試上位校で問われる長い並べかえを、型の暗記で確実に処理する',
    intro: '並べかえ問題の後半には、関係代名詞や比較を含む長い文が置かれます。語数が多いので難しく見えますが、実は型が決まっています。「先行詞＋関係代名詞＋動詞」「as 原級 as」「the 最上級 of/in」。この型を丸ごと覚えていれば、語数が増えても手が止まりません。',
    order: 905,
    studyPeriod: '中3夏',
    targetLevel: 'nyushi',
    keyPoints: [
      '関係代名詞：先行詞（名詞）のすぐ後ろに who / which / that を置く。',
      '主格（who / which / that ＋ 動詞）と目的格（who(m) / which / that ＋ 主語 ＋ 動詞）を区別する。',
      '目的格の関係代名詞は省略できる。語群にない場合は省略形だと考える。',
      '比較：比較級 ＋ than／as ＋ 原級 ＋ as／the ＋ 最上級 ＋ in(of)。',
      '受け身：be動詞 ＋ 過去分詞 ＋ by 〜。時制は be動詞で表す。',
      '長い並べかえほど、まずかたまりを作り、動詞の数を数えて文の骨組みを決める。',
    ],
    sections: [
      {
        heading: '関係代名詞をふくむ並べかえ',
        body: `関係代名詞の並べかえは、先行詞（説明される名詞）を先に見つければ半分終わる。

■ 主格（関係代名詞のあとに動詞が来る）
I have a friend who lives in Osaka.（大阪に住んでいる友達がいる）
This is the bus which goes to the station.
※ 関係代名詞の直後が動詞なら主格。動詞の形は先行詞に合わせる（a friend who lives / friends who live）。

■ 目的格（関係代名詞のあとに主語＋動詞が来る）
This is the book that I read yesterday.（私が昨日読んだ本）
The girl (whom) I met yesterday is Ken's sister.
※ 目的格は省略できる。語群に who / which / that がなくても、名詞のすぐあとに「主語＋動詞」が続く形なら省略された目的格である。

■ 並べかえの手順
【語群】(that / the / is / read / this / book / I / yesterday)
①動詞が二つ（is / read）→ 文が二つ分入っていると判断。
②主節：This is the book.
③関係詞節：that I read yesterday（that のあとが主語＋動詞なので目的格）
④先行詞 the book の直後に置く。
【完成】This is the book that I read yesterday.

■ 分詞・不定詞との書きかえ
the boy who is playing tennis ＝ the boy playing tennis
the letter which was written by Ken ＝ the letter written by Ken

★ ポイント：語群の中の動詞の数を数える。動詞が二つあれば、接続詞・関係代名詞・不定詞・動名詞のどれかが必ず含まれている。`,
      },
      {
        heading: '比較・受け身の型',
        body: `比較と受け身は、型そのものが答えになる。丸ごと覚えて当てはめる。

■ 比較の型
①比較級：Tom is taller than Ken.／This book is more interesting than that one.
②同等比較：Tom is as tall as Ken.（as ＋ 原級 ＋ as）
　否定：Tom is not as tall as Ken.（＝ Ken is taller than Tom.）
③最上級：Tom is the tallest in his class.／This is the most beautiful flower of all.
　※ in ＋ 場所・集団／of ＋ 複数のもの（of the five, of all）
④比較級を使った最上級の表現
　No other student in this class is taller than Tom.
　Tom is taller than any other student in this class.
⑤倍数：This box is twice as heavy as that one.

■ 受け身の型
be動詞 ＋ 過去分詞（＋ by 〜）
This letter was written by my father.
English is spoken in many countries.（by 〜 は不要なら省く）
※ 時制は be動詞で表す：is written（現在）／was written（過去）／will be written（未来）／has been written（現在完了）
※ 助動詞があれば be は原形：This book can be read in one day.

■ 受け身の疑問文・否定文
Was this picture taken by Ken?
This room is not used now.

■ 並べかえの手順
【語群】(was / by / this / written / letter / Ken)
①be動詞 was と過去分詞 written があるので受け身。
②主語は this letter。
③by Ken を最後に置く。
【完成】This letter was written by Ken.

⚠ 注意：by のあとの代名詞は目的格（by me / by him / by them）。by he は誤り。

★ ポイント：語群に by と過去分詞があれば受け身、than か as が二つあれば比較。語群を見た瞬間に型を決めれば、並べる作業は10秒で終わる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (as / Ken / is / tall / not / Tom / as)',
        wrongAnswer: 'Tom is not as taller as Ken.',
        trapExplanation:
          '「〜ほど…ない」という比較の意味から比較級を使うべきだと考え、tall を taller にしてしまう。語群には tall しかないことも見落としている。',
        correctAnswer: 'Tom is not as tall as Ken.',
        correctExplanation:
          'as 〜 as の間には必ず原級（もとの形）を置く。not as tall as で「〜ほど背が高くない」を表す。比較級を使うなら Ken is taller than Tom. となり、than が必要になる。語群に as が二つあれば原級、than があれば比較級と判断する。',
      },
      {
        question:
          '次の語を並べかえて意味の通る文にせよ。 (in / the / is / class / tallest / Tom / his)',
        wrongAnswer: 'Tom is the tallest of his class.',
        trapExplanation:
          '最上級のあとは of を使うと覚えてしまい、範囲を表す語がどんな種類かを確認していない。of the three のような形の印象が強いために起こる。',
        correctAnswer: 'Tom is the tallest in his class.',
        correctExplanation:
          '最上級のあとの範囲を示す語は、場所や集団（class, school, Japan, my family）なら in、複数のもの（the three, all, us）なら of を使う。his class は集団なので in。語群に in があれば場所・集団、of があれば複数のものだと逆に判断してもよい。',
      },
    ],
  },
  // ───────────── 7. 条件英作文（s406〜s410） ─────────────
  {
    id: 'koko_eigo_s406',
    subject: 'eigo',
    examType: 'koko',
    title: '条件英作文①：語数指定にきちんと合わせる',
    description: '25〜30語などの語数条件を満たす文の組み立て方と、語数の数え方を確認する',
    intro: '「25語以上30語以内で書きなさい」。この条件を外すと、内容がどれほどよくても大きく減点されます。ところが語数は、一文あたり何語くらいかを知っていれば設計できます。日本語で考えてから英語にするのではなく、最初から語数の枠を決めて書き始めましょう。',
    order: 906,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '中学生が書く一文は、8〜12語が目安。25〜30語なら3文が標準。',
      '語数はスペースで区切られたまとまりを1語と数える。I am や e-mail は1語、do not は2語。',
      '短縮形（I am → I am のままか I m か）は数え方が変わるので、短縮せずに書くのが安全。',
      '数字は算用数字ではなく英語のつづりで書く（ten years old）。',
      '書き終えたら必ず語数を数え、答案の欄外に控えておく。',
      '不足したら理由や具体例を一文足す。超過したら修飾語から削る。',
    ],
    sections: [
      {
        heading: '語数の設計と数え方',
        body: `語数指定のある問題は、書き始める前に「何文書くか」を決める。

■ 一文あたりの目安
中学生が正しく書ける一文は8〜12語。これを基準に文の数を決める。
　20〜25語 → 2〜3文
　25〜30語 → 3文
　30〜40語 → 3〜4文
　40〜50語 → 4文
文が長くなるほど文法ミスが増えるので、文の数を増やして一文を短く保つ方が安全である。

■ 語数の数え方
・スペースで区切られたまとまりを1語と数える。
・a / an / the / in / to / of なども1語に数える。短い語だからと飛ばさない。
・ハイフンでつないだ語は1語（e-mail、ten-minute、twenty-five）。
・don't のような短縮形は1語と数えるのが一般的だが、数え方の解釈で差が出るのを避けるため、do not と書いておけば確実に2語である。
・数字は英語のつづりで書く（3 → three）。算用数字は語数として数えにくく、指示で禁じられていることもある。

■ 数えるタイミング
書き終えてから数える。書きながら数えると内容に集中できない。
数えたら、答案用紙の欄外か下書き欄に「28語」と控えておく。見直しのときに再度数える手間が省ける。

★ ポイント：語数の条件は「以上・以内」に注意する。「25語以上30語以内」なら、24語も31語も減点対象である。28語前後をねらうと安全。`,
        figureId: 'lf_kokoeigoext11_406',
      },
      {
        heading: '模範解答と、増やし方・減らし方',
        body: `実際に語数を合わせて書いてみる。

【問題】あなたの町のよいところを、25語以上30語以内の英語で書きなさい。

【模範解答（28語）】
My town has a big park near the station. Many people run there or walk their dogs every morning. I like the park because it is always quiet.

【語数の内訳】
第1文 9語：My / town / has / a / big / park / near / the / station
第2文 10語：Many / people / run / there / or / walk / their / dogs / every / morning
第3文 9語：I / like / the / park / because / it / is / always / quiet
合計 28語（25語以上30語以内を満たす）

【文法の確認】
・has は主語 My town（三人称単数）に対応した現在形。
・a big park は数えられる名詞の単数なので冠詞 a が必要。
・Many people は複数主語なので動詞は原形 run / walk。
・their dogs は複数形。
・because 以下は「主語＋動詞」がそろっている（it is）。

■ 語数が足りないとき（増やす方法）
①理由を足す：because 〜 を付ける。
②具体例を足す：For example, 〜 を一文足す。
③自分の気持ちを足す：I like it very much. / I am happy about it.

■ 語数が多すぎるとき（減らす方法）
①修飾語を削る（very / really / a lot of / always）。
②二文を一文にまとめる（and でつなぐ）。
③具体例の文をまるごと削る。内容の中心（意見・理由）は削らない。

⚠ 注意：語数を合わせるために意味の通らない語を足すのは逆効果。内容点で減点される。足すなら理由か具体例にする。

★ ポイント：ふだんの練習で「自分の一文は平均何語か」を数えておく。その数がわかっていれば、本番で文の数を即座に決められる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「20語以上25語以内で書きなさい」という条件で、次の答案の語数を数えよ。 I like summer. I can swim in the sea with my friends. We enjoy the summer festival every year.',
        wrongAnswer: '17語（I like summer. を3語と数え、そのあとを数えまちがえた）',
        trapExplanation:
          'a / the / in / with のような短い語を無意識に飛ばして数えてしまう。また文の数だけを見て「短いから足りないだろう」と感覚で判断してしまう。',
        correctAnswer: '20語（条件を満たしている）',
        correctExplanation:
          '第1文 I / like / summer ＝3語。第2文 I / can / swim / in / the / sea / with / my / friends ＝9語。第3文 We / enjoy / the / summer / festival / every / year ＝8語。合計 3＋9＋8＝20語。冠詞や前置詞も必ず1語として数える。指を使って一語ずつ区切りながら数えるとまちがえない。',
      },
      {
        question:
          '「30語以内」という条件の問題で、35語書いてしまった。削るべき部分はどこか。',
        wrongAnswer: '結論の一文（So I think 〜）を削る',
        trapExplanation:
          '最後の文が付け足しに見えるため、そこを削ろうとしてしまう。しかし結論は採点の中心になる部分で、削ると内容点を大きく失う。',
        correctAnswer: '具体例の文、または very / really / a lot of などの修飾語を削る',
        correctExplanation:
          '削る優先順位は、①修飾語（very, really, always, a lot of）②具体例の文（For example 〜）③重複した内容、の順。意見・理由・結論という骨組みは最後まで残す。減らすときも増やすときも、骨組みには手を付けないという原則を守る。',
      },
    ],
  },

  {
    id: 'koko_eigo_s407',
    subject: 'eigo',
    examType: 'koko',
    title: '条件英作文②：指定された語句を必ず使う',
    description: '「（　）内の語を使って」という条件を満たしつつ、自然な英文にする',
    intro: '「have been to を使って書きなさい」と指定されたとき、その語句を入れることばかり考えて文が不自然になることがあります。指定語句は、使う場所が決まっています。文のどこに置くかを先に決めてから、周りをうめていく。この順番が条件英作文の鉄則です。',
    order: 907,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '指定語句は形を変えてよいか、そのまま使うかを問題文で必ず確認する。',
      '指定語句が動詞句なら、まず主語を決めてから前後をうめる。',
      '指定語句を二つ以上使う場合は、一文に無理に詰めこまず、文を分けてよい。',
      '使った指定語句には下線を引くなどの指示があれば、忘れずに従う。',
      '語形変化が許されるときは、時制と主語に合わせて活用する（have been / has been）。',
      '書き終えたら、指定語句がすべて使われているかを指さして確認する。',
    ],
    sections: [
      {
        heading: '指定語句の置き場所を先に決める',
        body: `指定語句のある条件英作文は、語句を中心に文を組み立てる。

■ 手順
①指定語句の品詞・はたらきを確認する。
②それが文のどこに来るかを決める（動詞なら述語、名詞なら主語か目的語）。
③主語を決める。
④前後をうめる。

■ 例1：have been to（〜へ行ったことがある）
①現在完了の動詞句 → 述語になる。
②主語を I にする。
③I have been to 〜 の 〜 に場所を入れる。
【模範解答】I have been to Kyoto three times. It is a beautiful city with many old temples.
※ 主語が三人称単数なら has been to に変える。My brother has been to Australia.

■ 例2：as 〜 as（〜と同じくらい）
①比較の型 → 形容詞をはさむ。
②This book is as interesting as that one.
※ as と as の間は必ず原級。

■ 例3：too 〜 to 〜（〜すぎて…できない）
This bag is too heavy for me to carry.
※ for 人 を to の前に入れることもできる。

■ 例4：名詞が指定された場合（例：environment）
名詞は主語か目的語に置く。
We should think about the environment. We can start by using our own bags.

★ ポイント：指定語句を文の途中に無理やり押しこむと、周りの語順が崩れる。語句を紙に書き、その前後に空欄を作ってからうめると安定する。`,
      },
      {
        heading: '複数の条件を同時に満たす',
        body: `入試では、語数・語句・内容の条件が同時に課される。すべてを満たさなければ得点にならない。

■ 典型的な条件の組み合わせ
「あなたの好きな季節とその理由を、because を使って20語以上で書きなさい」
　条件①好きな季節を書く　条件②理由を書く　条件③because を使う　条件④20語以上

【模範解答（21語）】
I like winter the best. I like it because I can go skiing with my family every winter in Nagano.
語数の内訳：第1文 I / like / winter / the / best ＝5語。第2文 I / like / it / because / I / can / go / skiing / with / my / family / every / winter / in / Nagano ＝16語。合計21語。
文法の確認：go skiing（スキーに行く）は go ＋ 〜ing の形。because のあとは主語＋動詞（I can go）がそろっている。

■ 条件のチェックリストを作る
書き始める前に、問題文の条件に一つずつ番号を振り、○を付けながら確認する。
①内容の条件（何について書くか）
②語数の条件
③指定語句の条件
④形式の条件（英語で・一文で・二文以内で など）

■ 条件を落とす典型例
・「理由も書きなさい」とあるのに意見だけ書いた。
・「二文で」とあるのに三文書いた。
・「主語と動詞のある文で」とあるのに単語だけ並べた。
・指定語句を使わずに同じ意味の別表現で書いた。

⚠ 注意：条件を一つでも落とすと、内容がよくても大幅に減点される。答案を書く前に問題文をもう一度読み、条件に線を引く。

★ ポイント：条件英作文は「よい英語を書く」試験ではなく「条件を満たす英語を書く」試験である。まず条件、次に正確さ、最後に自然さの順で優先する。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「have been to を使って、行ったことのある場所について書きなさい」という条件で書け。',
        wrongAnswer: 'I have gone to Kyoto three times.',
        trapExplanation:
          '「行ったことがある」を have gone to と書いてしまう。日本語では「行った」なので go を使いたくなるが、have gone to は「行ってしまって今ここにいない」という意味になる。',
        correctAnswer: 'I have been to Kyoto three times.',
        correctExplanation:
          '「〜へ行ったことがある」という経験は have been to で表す。have gone to は「行ってしまった（今はここにいない）」という結果を表すので意味が変わる。さらに問題は have been to を使うよう指定しているので、have gone to では条件そのものを満たしていない。',
      },
      {
        question:
          '「because を使って、20語以上で好きな季節と理由を書きなさい」という条件で書け。',
        wrongAnswer: 'I like winter. Because I can go skiing.',
        trapExplanation:
          'because を使ったことで満足してしまい、because から始まる文を独立させている。また語数が9語しかなく、条件を満たしていない。',
        correctAnswer:
          'I like winter the best. I like it because I can go skiing with my family every winter in Nagano.（21語）',
        correctExplanation:
          'because は接続詞なので、原則として二つの文をつなぐ形で使う。Because I can go skiing. だけでは主節がなく、文として不完全である。また語数条件も満たさない。条件は「指定語句」と「語数」の両方を同時に満たす必要があるので、書いたあとに条件を一つずつ確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s408',
    subject: 'eigo',
    examType: 'koko',
    title: '条件英作文③：絵・表・グラフを英語で説明する',
    description: '資料から読み取った事実を、そのまま英文にする手順を身につける',
    intro: '絵を見て英語で説明する問題では、想像を書く必要はありません。見えているものを、見えているとおりに書けば得点になります。むしろ余計な想像を書くと、資料と食いちがって減点されます。「何が・どこで・何をしているか」の順に書く練習をしましょう。',
    order: 908,
    studyPeriod: '中3夏',
    targetLevel: 'moshi',
    keyPoints: [
      '絵の説明は「だれ(何)が・どこで・何をしているか」の順。動作は現在進行形で書く。',
      '表・グラフの説明は「項目・数値・比較」の順。数値は正確に写す。',
      '比較を表す表現：more than / less than / the most popular / twice as many as。',
      '割合は percent（複数形にしない）。Thirty percent of the students 〜。',
      '資料にない情報は書かない。想像や意見は求められたときだけ書く。',
      '書いた数値は必ず資料と照合する。数値のミスは内容点をそのまま失う。',
    ],
    sections: [
      {
        heading: '絵を説明する',
        body: `絵の説明問題は、書く順番を決めておけば迷わない。

■ 書く順番
①主語（だれ・何が）
②動詞（何をしているか）＝ふつうは現在進行形
③場所（どこで）
④付け足し（だれと・何を使って）

【例】公園で少年が犬と走っている絵
A boy is running in the park. His dog is running with him.
※ 動作の途中を描いた絵なので現在進行形（is running）を使う。

【例】女の子が母親と料理をしている絵
A girl is cooking with her mother in the kitchen. They look happy.
※ look ＋ 形容詞（〜に見える）は絵の説明でよく使う。

■ 使いやすい表現
There is a big tree in front of the house.（〜がある）
Two boys are playing soccer.（複数主語なら are）
The girl on the left is holding a book.（左の女の子）
He is wearing a red cap.（身につけている状態は wear の進行形）

■ 注意すべき文法
・数えられる名詞の単数には a / an を付ける（a boy, an apple）。
・複数なら s を付け、be動詞は are。
・進行形は be動詞＋〜ing。is run は誤り。

⚠ 注意：絵から読み取れないこと（名前・年齢・気持ちの理由）は書かない。書けば「資料と一致しない」と判断される。

★ ポイント：絵の説明は一文8〜10語で十分。短く正確な文を並べる方が、長い一文より高く評価される。`,
      },
      {
        heading: '表・グラフを説明する',
        body: `表やグラフの問題では、数値を正確に英語にすることが求められる。

■ 数値の言い方
・人数：Thirty students like soccer.
・割合：Thirty percent of the students like soccer.
　※ percent は複数形にしない（thirty percents は誤り）。
　※ 「〜の30％」は thirty percent of 〜。of を落とさない。
・順位：Soccer is the most popular sport in this class.
　　　　Baseball is the second most popular sport.
・比較：More students like soccer than baseball.
　　　　Twice as many students like soccer as baseball.（2倍）

■ 増減の言い方（折れ線グラフ）
The number of students increased from 2020 to 2024.（増えた）
It decreased after 2022.（減った）
It did not change between 2021 and 2022.（変わらなかった）
※ The number of 〜 は単数扱い。The number of students is 〜 とする。

■ 書く順番
①全体の傾向：Soccer is the most popular sport in our class.
②具体的な数値：Twenty of the forty students chose soccer.
③比較や気づき：Only five students chose tennis.

【模範解答例（グラフ説明・24語）】
Soccer is the most popular sport in our class. Twenty students chose it. Only five students chose tennis, so soccer is much more popular.
語数の内訳：第1文 Soccer / is / the / most / popular / sport / in / our / class ＝9語。第2文 Twenty / students / chose / it ＝4語。第3文 Only / five / students / chose / tennis / so / soccer / is / much / more / popular ＝11語。合計24語。

⚠ 注意：資料の数値を写しまちがえると、英語が正しくても内容点は入らない。書いたあと、必ず資料に戻って数値を照合する。

★ ポイント：「the most popular」「more 〜 than」「percent of」の三つの型を暗記しておけば、資料説明の大半は書ける。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「クラスの30％の生徒がサッカーを好きだ」を英語にせよ。',
        wrongAnswer: 'Thirty percents of students like soccer.',
        trapExplanation:
          '「30パーセント」という複数の量なので percent にも s を付けてしまう。また「クラスの生徒」という特定の集団に the を付け忘れている。',
        correctAnswer: 'Thirty percent of the students like soccer.',
        correctExplanation:
          'percent は数詞のあとでも複数形にしない（thirty percent）。また「（このクラスの）生徒」という特定の集団を指すので the students とする。動詞は students に合わせて原形の like。数量表現は形が固定されているので、型ごと覚えるのが確実。',
      },
      {
        question:
          '公園で少年が走っている絵を説明する文を書け。',
        wrongAnswer: 'A boy run in the park.',
        trapExplanation:
          '絵の中の動作を「している」と読み取りながら、動詞を現在形の原形のまま書いてしまう。さらに主語 A boy が三人称単数であることも見落としている。',
        correctAnswer: 'A boy is running in the park.',
        correctExplanation:
          '絵に描かれた動作は「今〜している」ので現在進行形（be動詞＋〜ing）で表す。主語が A boy（三人称単数）なので be動詞は is。run は n を重ねて running とつづる。現在形で書くなら A boy runs in the park every morning. のように習慣を表す語句が必要になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s409',
    subject: 'eigo',
    examType: 'koko',
    title: '条件英作文④：対話の空所に一文を書く',
    description: '前後の流れに合う一文を、自分の言葉で作って埋める',
    intro: '選択肢がなく、自分で一文を書いて空所を埋める問題があります。自由に書けるぶん難しそうですが、実は前後がヒントを大量にくれています。直後の応答が Yes, please. なら、空所は申し出の文しかありえません。前後から逆算する力が、そのまま得点になります。',
    order: 909,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '空所の直後の応答から、書くべき文の種類（疑問文・依頼・申し出）を決める。',
      '直後が Yes / No なら Yes・No で答えられる疑問文、それ以外なら疑問詞の疑問文を書く。',
      '自分が確実に書ける表現だけで書く。難しい表現に挑戦しない。',
      '一文で足りるときは一文にとどめる（指示がなければ短い方が安全）。',
      '書いたら、直前と直後の両方につながるかを声に出さずに読んで確かめる。',
      '疑問文なら文末に「?」、平叙文なら「.」を必ず付ける。',
    ],
    sections: [
      {
        heading: '前後から書くべき文を決める',
        body: `自由記述の空所補充は、選択肢がないだけで考え方は選択問題と同じである。

■ 直後の応答から逆算する
・直後が Yes, I do. → Do you 〜? の疑問文
・直後が Yes, I did. → Did you 〜? の疑問文
・直後が Yes, please. → 申し出（Shall I 〜? / Would you like 〜?）
・直後が Sure. / Of course. → 依頼（Can you 〜? / Could you 〜?）
・直後が数字 → How many / How much / What time / How long
・直後が Because 〜 → Why 〜?
・直後が場所 → Where 〜?

■ 直前から逆算する
・直前が困りごと → 申し出（Shall I help you?）や助言（You should 〜.）
・直前が知らせ → 感想（That's great. / That's too bad.）
・直前が誘い → 承諾か断り（Sure. / I'm sorry, but I can't.）

■ 実例
A: I have a lot of bags. They are very heavy.
B: (　　)
A: Yes, please. Thank you very much.
　→ A が Yes, please. と答えているので、B は申し出。
【解答例】Shall I help you?（または Do you want me to carry one?）

A: (　　)
B: Because I had a fever.
　→ Because で答えているので Why の疑問文。
【解答例】Why were you absent yesterday?

★ ポイント：まず「疑問文か、平叙文か」を決める。次に「疑問詞が要るか」を決める。この二段階で、書くべき文の形は必ず一つに絞れる。`,
      },
      {
        heading: '書ける表現で確実に埋める',
        body: `自由記述では、正しく書けることが最優先である。凝った表現は不要である。

■ 使いやすい万能表現
疑問：Do you 〜? / Did you 〜? / Have you ever 〜? / What do you 〜? / Where did you 〜?
依頼：Can you 〜? / Could you 〜?
申し出：Shall I 〜? / Do you want me to 〜?
誘い：How about 〜ing? / Why don't we 〜?
感想：That's great. / That's too bad. / Sounds good.
意見：I think 〜. / I like 〜.

■ 書いたあとの確認
①直前とつながるか
②直後とつながるか
③主語と動詞がそろっているか
④三単現の s・時制・冠詞は正しいか
⑤文末の記号（? か .）は合っているか

■ よくある失点
・疑問文なのにピリオドで終わっている。
・時制が前後と合っていない（過去の話に現在形で答えている）。
・直後の Yes, I did. に対して Have you 〜? と書いている。
・一文で足りるのに三文書き、そのうち一文に文法ミスがある。

■ 語数の指示がある場合
「5語以上の英語で」などの指示があれば、必ず数える。Shall I help you? は4語なので、Shall I help you with them? のように語を足して条件を満たす。

⚠ 注意：空所が長い（3行分など）場合は、二文以上求められていることがある。解答欄の大きさも手がかりになる。

★ ポイント：自由記述で満点を取るコツは、冒険しないこと。中学2年生までに習った表現だけで、前後につながる文を正確に書く。`,
      },
    ],
    trapExamples: [
      {
        question:
          '空所に入る一文を書け。 A: I have a lot of bags. They are very heavy. B: (　　) A: Yes, please. Thank you very much.',
        wrongAnswer: 'Can you help me?',
        trapExplanation:
          '「手伝う」という内容は合っているが、主語が逆になっている。荷物を持っているのは A なので、B が「手伝いましょうか」と申し出る場面である。',
        correctAnswer: 'Shall I help you?（または Do you want me to carry some of them?）',
        correctExplanation:
          '直後の Yes, please.（お願いします）は申し出への返事である。依頼（Can you help me?）への返事なら Sure. / Of course. になる。返事の形から「申し出か依頼か」を判定し、それに合わせて主語を I にするか you にするかを決める。',
      },
      {
        question:
          '空所に入る一文を書け。 A: (　　) B: Yes, I did. I visited my grandmother in Nagano.',
        wrongAnswer: 'Have you visited your grandmother?',
        trapExplanation:
          '「〜したことがありますか」という現在完了の形を選んでしまう。しかし返事が Yes, I did. なので、聞かれているのは現在完了ではなく過去の疑問文である。',
        correctAnswer: 'Did you go somewhere last weekend?（または Did you do anything last weekend?）',
        correctExplanation:
          '返事の Yes, I did. は did を使う疑問文（Did you 〜?）に対する答え。Yes, I have. なら Have you 〜? である。さらに続く I visited 〜 が過去形なので、過去の出来事についてたずねる文が入る。返事の助動詞が、書くべき疑問文の形をそのまま指定している。',
      },
    ],
  },

  {
    id: 'koko_eigo_s410',
    subject: 'eigo',
    examType: 'koko',
    title: '条件英作文⑤：メール・手紙の返信を書く',
    description: '相手の質問に答える形で、決まった型に沿って返信文を書く',
    intro: '外国の友達からのメールに返事を書く問題は、公立入試の定番です。難しそうに見えますが、実は相手が質問してくれているので、書く内容は向こうが決めてくれています。相手の質問に順に答えるだけで、条件を満たす返信文ができあがります。',
    order: 910,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'メール本文にある質問文（?で終わる文）に印を付け、それに順に答える。',
      '書き出しは Thank you for your e-mail. / It was nice to hear from you.',
      '結びは I am looking forward to seeing you. / Please write to me again.',
      '相手の使った語句をそのまま借りてよい（つづりミスを防げる）。',
      '質問が二つあれば、答えも二つ書く。片方だけでは条件を満たさない。',
      '語数指定があれば必ず数える。書き出しと結びも語数に含まれる。',
    ],
    sections: [
      {
        heading: '返信の型',
        body: `メールの返信には決まった型がある。型に沿って書けば、内容を考える時間を質問への答えに使える。

■ 返信の四部構成
①書き出し（あいさつ・お礼）
　Thank you for your e-mail.／It was nice to hear from you.／Hi, Emma.
②相手の質問への答え（ここが中心。配点も大きい）
③付け足し（理由・具体例・自分からの質問）
④結び
　I am looking forward to seeing you.／Please write to me again.／See you soon.

■ 相手の質問を見つける
メール本文の中で「?」で終わる文に線を引く。ふつう1〜2個ある。
例）What do you want to do in Japan?／Where should we go together?／Can you tell me about your school?

■ 相手の語句を借りる
質問文の語句をそのまま使えば、つづりのミスを防げる。
質問：Where do you want to take me?
答え：I want to take you to Nara Park.
※ 質問の語順を平叙文に直して使う。

■ 書いてはいけないこと
・質問と関係のない自分の話だけを書く。
・日本語のあいさつをそのまま英語にする（「お世話になっております」など）。
・相手の名前をまちがえる。メール本文にあるつづりを写す。

★ ポイント：配点の中心は②である。書き出しと結びは短くまとめ、質問への答えに語数を多く使う。`,
      },
      {
        heading: '模範解答と検算',
        body: `実際に書いてみる。

【問題】オーストラリアの友達 Emma から次のメールが届いた。返信を25語以上35語以内の英語で書きなさい。
　Emma のメール：I will visit Japan next month. Where do you want to take me? I want to see something Japanese.

【模範解答（29語）】
Thank you for your e-mail. I want to take you to Nara Park. You can see many deer there. We can also visit an old temple near the park.

【語数の内訳】
第1文 5語：Thank / you / for / your / e-mail
第2文 8語：I / want / to / take / you / to / Nara / Park
第3文 6語：You / can / see / many / deer / there
第4文 10語：We / can / also / visit / an / old / temple / near / the / park
合計 5＋8＋6＋10＝29語（25語以上35語以内を満たす）

【文法の検算】
・Thank you for のあとは名詞（your e-mail）。○
・take 人 to 場所（take you to Nara Park）。○
・deer は単数も複数も同じ形。many deer が正しい（many deers は誤り）。○
・an old temple：old は母音の音で始まるので a ではなく an。○
・near the park：特定の公園を指すので the。○
・時制はすべて現在形と can で統一。○

【内容の検算】
・Emma の質問「どこに連れて行ってくれるか」に答えている。○
・「日本らしいものが見たい」という要望にも、鹿と古い寺で応えている。○

⚠ 注意：語数を数えるとき、書き出しの Thank you for your e-mail. も含める。ここを除いて数えると条件を外す。

★ ポイント：返信文は、相手の質問に答えたかどうかで大きく点が動く。書き終えたら、メール本文の「?」の文にもう一度戻り、すべてに答えているか確認する。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「Where do you want to take me?（どこに連れて行ってくれますか）」という質問への返信の一文を書け。',
        wrongAnswer: 'I want to take you Nara Park.',
        trapExplanation:
          'take の使い方を「take ＋ 人 ＋ 場所」だと思いこみ、前置詞 to を落としてしまう。日本語の「奈良公園に連れて行く」には助詞「に」があるが、英語でも to が必要である。',
        correctAnswer: 'I want to take you to Nara Park.',
        correctExplanation:
          '「人を場所へ連れて行く」は take ＋ 人 ＋ to ＋ 場所。to を落とすと文が成り立たない。同じく go to school / come to my house のように、行き先の前には to が要る（home は例外で go home）。相手の質問文にも to が使われているので、それを写せば防げる。',
      },
      {
        question:
          '「日本にはたくさんの鹿がいます」を英語にせよ。',
        wrongAnswer: 'There are many deers in Japan.',
        trapExplanation:
          '複数なので s を付けるという原則をそのまま当てはめてしまう。deer が単数と複数で形の変わらない名詞であることを知らないために起こる。',
        correctAnswer: 'There are many deer in Japan.',
        correctExplanation:
          'deer は単数形と複数形が同じ名詞。同じ仲間に sheep・fish（種類を言うときは fishes）・Japanese・Chinese がある。動詞は複数扱いなので There are となる。単複同形の名詞は数が限られているので、まとめて覚えておく。',
      },
    ],
  },
  // ───────────── 8. 自由英作文（s411〜s415） ─────────────
  {
    id: 'koko_eigo_s411',
    subject: 'eigo',
    examType: 'koko',
    title: '自由英作文①：意見＋理由2つの型',
    description: '意見・理由①・理由②・まとめの四文構成を、そのまま使える型として覚える',
    intro: '自由英作文と聞くと、何を書けばよいか分からず手が止まります。しかし入試で求められているのは独創的な意見ではなく、「意見を述べ、理由を二つ挙げる」という決まった形です。型さえ持っていれば、テーマが何であっても最初の一文はすぐ書き出せます。',
    order: 911,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '基本の型は四文：①意見 ②理由① ③理由② ④まとめ。',
      '①意見：I think (that) 〜. / I like 〜 the best. / I agree with this idea.',
      '②③理由：First, 〜. Second, 〜.（または One reason is 〜. Another reason is 〜.）',
      '④まとめ：So 〜. / For these reasons, 〜. / That is why 〜.',
      '理由は「自分が書ける英語で書けるもの」を選ぶ。立派な理由より正確な英語。',
      '型を使えば、テーマを見てから20秒で骨組みが決まる。',
    ],
    sections: [
      {
        heading: '四文の型',
        body: `自由英作文は、次の四文の型に当てはめて書く。テーマが変わっても型は変わらない。

■ ①意見（立場をはっきりさせる）
I think (that) students should read many books.
I like winter the best.
I agree with this idea.／I do not agree with this idea.
※ 最初の一文で立場を示す。「〜だと思うが〜でもある」のような曖昧な書き出しは避ける。

■ ②理由①
First, 〜.／One reason is that 〜.／The first reason is that 〜.
例）First, books teach us new words.

■ ③理由②
Second, 〜.／Another reason is that 〜.
例）Second, reading helps us think deeply.

■ ④まとめ
So 〜.／For these reasons, 〜.／That is why 〜.
例）So I read books every day.
※ まとめは①の言いかえでよい。新しい内容を足さない。

【模範解答（25語）】
I think students should read many books. First, books teach us new words. Second, reading helps us think deeply. So I read books every day.

【語数の内訳】
第1文 7語／第2文 6語／第3文 6語／第4文 6語　合計25語

【文法の確認】
・books teach us new words：teach ＋ 人 ＋ 物 の第4文型。books は複数主語なので teach（s なし）。
・reading helps us think：動名詞 reading は単数扱いなので helps。help ＋ 人 ＋ 動詞の原形（think）。
・So I read books every day.：習慣なので現在形。

★ ポイント：First, Second, So の三つの語を書いてしまえば、あとは空欄をうめるだけになる。まず接続語を紙に書く。`,
        figureId: 'lf_kokoeigoext11_411',
      },
      {
        heading: '理由の選び方',
        body: `型が決まっていても、理由が思いつかないと手が止まる。理由は「立派さ」ではなく「書けるかどうか」で選ぶ。

■ 理由を出す三つの引き出し
①自分の経験：I went to 〜./ I have 〜./ My family 〜.
②役に立つこと：It is useful when 〜./ We can 〜./ It helps us 〜.
③気持ち：It makes me happy./ I feel relaxed./ I enjoy 〜.
どのテーマでも、この三つのどれかから理由が出せる。

■ 理由を英語にできるか確かめてから決める
日本語で「多様な価値観に触れられるから」と思いついても、英語にできなければ意味がない。
　→「いろいろな国のことを知ることができる」→ We can learn about many countries. なら書ける。
理由を考える段階で、必ず英語の形まで頭に浮かべる。

■ 使いやすい理由の型
It is useful when we travel.（旅行のときに役立つ）
We can learn about other countries.（他の国について学べる）
It makes us happy.（私たちを幸せにする）
We can make many friends.（友達がたくさんできる）
It is good for our health.（健康によい）
We do not have to spend much money.（お金があまりかからない）

■ 二つの理由は別々の内容にする
First, it is fun. Second, it is enjoyable. のように同じ内容を言いかえただけでは、理由が一つとみなされる。
「役に立つ」と「楽しい」、「自分にとって」と「みんなにとって」のように、方向を変える。

⚠ 注意：理由に because を使うときは、because のあとに主語＋動詞が必要。Because fun. のような書き方は不可。

★ ポイント：練習では、一つのテーマに対して理由を三つ書き出し、その中から「もっとも簡単な英語で書けるもの」を二つ選ぶ。本番でもこの選び方をする。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「本を読むべきだと思う。理由は、新しい言葉を学べるからだ」を、自由英作文の型に沿って2文で書け。',
        wrongAnswer: 'I think students should read many books. Because we can learn new words.',
        trapExplanation:
          '理由を Because で書き始めれば理由の文になると考えてしまう。しかし because は接続詞なので、単独で文を作ることはできない。',
        correctAnswer:
          'I think students should read many books. First, we can learn new words from them.（または I think students should read many books because we can learn new words.）',
        correctExplanation:
          '理由を別の文にするなら First, / One reason is that 〜 を使い、because を使うなら前の文とつなげて一文にする。Because 〜. だけの文は主節がなく不完全な文とみなされ、減点される。自由英作文では First, Second, を使う型の方が安全である。',
      },
      {
        question:
          '自由英作文で二つの理由を書くとき、次の答案の問題点を指摘せよ。 First, it is fun. Second, it is very enjoyable.',
        wrongAnswer: '文法上の誤りはないので問題ない',
        trapExplanation:
          '英文としてはどちらも正しいので、条件を満たしていると思ってしまう。しかし「理由を二つ挙げる」という条件は、内容の異なる理由を二つ求めている。',
        correctAnswer: '二つの理由が同じ内容（楽しい）を言いかえただけで、実質的に理由が一つしかない',
        correctExplanation:
          'fun と enjoyable はほぼ同じ意味なので、理由が一つしか示されていないと判断される。二つ目は方向を変えて、First, it is fun. Second, it is good for our health.（楽しい／健康によい）のように別の観点にする。理由を書き出した段階で、二つが同じ方向を向いていないかを確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s412',
    subject: 'eigo',
    examType: 'koko',
    title: '自由英作文②：30語の設計図を作る',
    description: '30語という指定に対し、各文に何語ずつ割りふるかを先に決めて書く',
    intro: '「30語程度で書きなさい」と言われて、書き終えてから数えたら19語だった。よくある失敗です。原因は、書き始める前に配分を決めていないことにあります。四文で30語なら、一文あたり7〜8語。この設計図を先に描けば、語数はほぼ狙いどおりになります。',
    order: 912,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '30語なら四文構成で、意見8語・理由①8語・理由②8語・まとめ6語が目安。',
      '「〜語程度」は前後10％（27〜33語）が許容範囲。「〜語以内」は超えたら減点。',
      '書き始める前に、各文の語数を下書き欄にメモしておく。',
      '足りないときは理由に具体例を足す。多すぎるときは修飾語を削る。',
      '数えるのは書き終えてから。書きながら数えると内容が止まる。',
      '答案には語数を控えておき、見直しのときに再確認する。',
    ],
    sections: [
      {
        heading: '語数の設計図',
        body: `30語の自由英作文は、次のように配分すると自然に収まる。

■ 配分の目安（30語・四文構成）
①意見　　 8語
②理由①　 8語
③理由②　 8語
④まとめ　 6語
合計30語

■ 各文の型と語数
①I think students should study English every day.（8語）
　「I think ＋ 主語 ＋ should ＋ 動詞 ＋ 目的語 ＋ 時」で8語前後になる。
②First, we can learn new words more easily.（8語）
　「First, ＋ we can ＋ 動詞 ＋ 目的語 ＋ 副詞」で8語前後。
③Second, English is useful when we travel abroad.（8語）
　「Second, ＋ 主語 ＋ be動詞 ＋ 形容詞 ＋ when 節」で8語前後。
④So I study English every day.（6語）
　「So ＋ 主語 ＋ 動詞 ＋ 目的語 ＋ 時」で5〜6語。

■ 「程度」と「以内」のちがい
・「30語程度」→ 27〜33語なら問題ない。
・「30語以内」→ 31語で減点。25〜30語をねらう。
・「30語以上」→ 29語で減点。32〜35語をねらう。
指示の語尾（程度・以内・以上）に必ず線を引く。

★ ポイント：下書き欄に「8／8／8／6」と書いてから英文を書き始める。書きながら「この文はあと2語」と調整できる。`,
        figureId: 'lf_kokoeigoext11_412',
      },
      {
        heading: '模範解答と検算',
        body: `【問題】「中学生は毎日英語を勉強すべきだ」という意見について、あなたの考えを30語程度の英語で書きなさい。

【模範解答（30語）】
I think students should study English every day. First, we can learn new words more easily. Second, English is useful when we travel abroad. So I study English every day.

【語数の検算】
第1文：I / think / students / should / study / English / every / day ＝8語
第2文：First / we / can / learn / new / words / more / easily ＝8語
第3文：Second / English / is / useful / when / we / travel / abroad ＝8語
第4文：So / I / study / English / every / day ＝6語
合計 8＋8＋8＋6＝30語 ✓

【文法の検算】
・students should study：助動詞 should のあとは動詞の原形。○
・we can learn：助動詞 can のあとも原形。○
・more easily：easily は3音節なので、比較級は more を付ける。○
・English is useful：English は数えられない名詞なので冠詞なし、be動詞は is。○
・when we travel abroad：時を表す副詞節なので現在形。abroad は副詞なので to は不要（travel to abroad は誤り）。○
・So I study English every day.：習慣なので現在形、主語 I なので s は付けない。○

【内容の検算】
・意見（勉強すべき）→ 理由①（語彙が身につく）→ 理由②（旅行で役立つ）→ まとめ（だから自分もそうしている）。
・二つの理由が別の方向（学習面／実用面）を向いている。○

⚠ 注意：数えるときは、First, や Second, のような接続語も1語として数える。カンマは語数に入らない。

★ ポイント：模範解答を丸暗記するのではなく、「8語の意見文」「8語の理由文」を自分でいくつも作れるようにしておく。テーマが変われば中身だけ差しかえればよい。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「30語程度で書きなさい」という条件に対し、次の答案は条件を満たすか。 I like English. It is fun. I study it every day.',
        wrongAnswer: '内容がまとまっているので条件を満たす',
        trapExplanation:
          '三文あって内容も通じているため、条件を満たしていると感じてしまう。語数を実際に数えていないことが原因である。',
        correctAnswer: '満たさない（11語しかなく、30語程度に大きく足りない）',
        correctExplanation:
          'I / like / English ＝3語、It / is / fun ＝3語、I / study / it / every / day ＝5語で合計11語。30語程度（27〜33語）には遠く及ばない。理由を具体的にし、まとめの一文を足して語数を確保する。書き終えたら必ず数えるという手順を省かないこと。',
      },
      {
        question: '「私たちは外国へ旅行するとき英語が役に立つ」を英語にせよ。',
        wrongAnswer: 'English is useful when we will travel to abroad.',
        trapExplanation:
          '「旅行するとき」を未来のことと考えて will を入れ、さらに「外国へ」の「へ」を to と訳してしまう。abroad が副詞であることに気づいていない。',
        correctAnswer: 'English is useful when we travel abroad.',
        correctExplanation:
          '時を表す副詞節（when 〜）の中では、未来のことでも現在形で表すので will は入れない。また abroad は「外国へ」という意味の副詞なので、前置詞 to は付けない（go abroad / travel abroad）。同じ仲間に home（go home）、there（go there）がある。',
      },
    ],
  },

  {
    id: 'koko_eigo_s413',
    subject: 'eigo',
    examType: 'koko',
    title: '自由英作文③：賛成・反対を述べる',
    description: '与えられた意見に賛成か反対かを選び、根拠を示して立場を守る',
    intro: '「学校にスマートフォンを持ちこむべきか」。こうした問いには、正しい答えがあるわけではありません。採点されるのは立場の正しさではなく、立場を最後まで一貫して守れているかです。書きやすい方を選ぶ。これが賛成反対問題の最大のコツです。',
    order: 913,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '賛成：I agree with this idea. / I think so, too. ／反対：I do not agree. / I disagree.',
      '立場は「正しいと思う方」ではなく「英語で理由を書ける方」を選ぶ。',
      '一度決めた立場は最後まで変えない。途中で逆の内容を書くと大きく減点される。',
      '反対意見に触れるなら However, / But を使い、最後は自分の立場に戻す。',
      '具体例は For example, / such as で示す。一つで十分。',
      '結論はもう一度自分の立場を述べて閉じる。',
    ],
    sections: [
      {
        heading: '立場の示し方と守り方',
        body: `賛成・反対を問う問題では、まず立場を一語で示し、それを最後まで守る。

■ 立場を示す表現
賛成：I agree with this idea.／I think so, too.／I am for this idea.
反対：I do not agree with this idea.／I disagree.／I am against this idea.
※ I think it is good. / I think it is not good. でもよい。難しい語を使う必要はない。

■ 立場は書きやすさで選ぶ
「本当はどちらが正しいか」を考え始めると時間を失う。
理由を英語で二つ書けるのはどちらか、を基準に選ぶ。
たとえば「制服は必要か」なら、
　賛成側の理由：毎朝服を選ばなくてよい／同じ学校の仲間だと感じられる
　反対側の理由：自分の好きな服を着られる／夏は暑い
書ける方を選べばよい。採点で立場の優劣はつかない。

■ 一貫性を守る
×I agree with this idea. … However, I think students should not use smartphones.
　→ 最初に賛成と言いながら、最後に反対の結論になっている。これは大きな減点。
反対意見に触れるなら、必ず自分の立場に戻して終える。
　○Some people say smartphones are dangerous. However, I still think they are useful.

■ 譲歩を入れる書き方（上位校向け）
It is true that smartphones can be a problem. However, we can use them to study.
（たしかに〜だが、しかし〜）

★ ポイント：書き終えたら、第1文と最終文を見比べる。同じ立場になっていれば一貫性は保たれている。`,
      },
      {
        heading: '模範解答と検算',
        body: `【問題】「学校でスマートフォンを使ってもよい」という意見に賛成か反対か、あなたの考えを25語以上35語以内の英語で書きなさい。

【模範解答（27語）】
I agree with this idea. Using smartphones at school helps us study. For example, we can find information quickly. However, we should not use them during classes.

【語数の検算】
第1文：I / agree / with / this / idea ＝5語
第2文：Using / smartphones / at / school / helps / us / study ＝7語
第3文：For / example / we / can / find / information / quickly ＝7語
第4文：However / we / should / not / use / them / during / classes ＝8語
合計 5＋7＋7＋8＝27語（25語以上35語以内を満たす）

【文法の検算】
・Using smartphones at school は動名詞の主語で単数扱い。したがって動詞は helps。○
・help ＋ 目的語 ＋ 動詞の原形（helps us study）。to study でもよい。○
・information は数えられない名詞なので、a も s も付けない。○
・them は smartphones を受ける代名詞（複数）。○
・during は前置詞なので、あとは名詞（classes）。during we have classes は誤り。○

【一貫性の検算】
・第1文で賛成、第4文の However は「授業中は使うべきでない」という条件であって、賛成の立場を否定してはいない。○
・「使ってよいが、授業中は別」という主張が最後まで一貫している。○

⚠ 注意：However で反対意見を書くときは、それが自分の立場を打ち消していないか確認する。打ち消していれば、However 以下を条件（〜のときは除く）に書き直す。

★ ポイント：賛成・反対の問題では、第1文で立場を明示することが採点の入口になる。ここを曖昧にすると、あとの内容が良くても得点が伸びない。`,
      },
    ],
    trapExamples: [
      {
        question:
          '賛成の立場で書いた次の答案の問題点を指摘せよ。 I agree with this idea. Smartphones are useful. However, I think students should not bring smartphones to school.',
        wrongAnswer: '文法上の誤りがないので問題ない',
        trapExplanation:
          '一文ずつ見ると正しい英語なので、問題がないように見える。答案全体を通して立場が保たれているかを確認していない。',
        correctAnswer: '第1文で賛成と述べながら、最終文で反対の結論になっており、立場が一貫していない',
        correctExplanation:
          '自由英作文では立場の一貫性が採点の中心になる。However のあとに自分の立場を否定する内容を置くと、結論が反対側に移ってしまう。反対意見に触れたいときは、However, I still think they are useful. のように、最後を自分の立場に戻して閉じる。',
      },
      {
        question: '「スマートフォンを使うことは私たちの勉強に役立つ」を英語にせよ。',
        wrongAnswer: 'Using smartphones help us to study.',
        trapExplanation:
          'smartphones という複数形が動詞の直前にあるため、それを主語だと思って help に s を付けない。本当の主語は Using smartphones というかたまり全体である。',
        correctAnswer: 'Using smartphones helps us study.（または Using smartphones helps us to study.）',
        correctExplanation:
          '動名詞（Using smartphones）が主語のときは単数扱いなので、動詞は helps になる。主語が長いときは、動詞の直前の名詞ではなく、かたまりの中心（ここでは Using）に合わせる。help のあとは動詞の原形でも to 不定詞でもよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s414',
    subject: 'eigo',
    examType: 'koko',
    title: '自由英作文④：理由に具体例を足して厚くする',
    description: '抽象的な理由に自分の経験を一文添えて、説得力と語数を同時に確保する',
    intro: '「楽しいから」だけでは、理由として弱く語数も稼げません。そこに「去年、家族と長野へ行って楽しかった」と一文足すと、説得力も語数も一気に増えます。しかも自分の経験なら英語も簡単です。具体例は、自由英作文でもっとも効率のよい武器です。',
    order: 914,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '理由の直後に具体例を一文足すと、説得力と語数が同時に増える。',
      '具体例の合図：For example, 〜. / Last year, 〜. / When I was 〜,',
      '自分の経験は過去形で書く。理由の文（現在形）との時制の切りかえに注意。',
      '具体例は一つで十分。二つ以上書くと語数を圧迫する。',
      '具体例は「いつ・どこで・何をした」の三点でまとめる。',
      '経験談は事実でなくてよい。英語で正しく書けることが優先される。',
    ],
    sections: [
      {
        heading: '具体例の足し方',
        body: `理由の文は抽象的になりやすい。そこに具体例を一文添える。

■ 具体例の合図になる表現
For example, 〜.（たとえば）
Last year, I 〜.／When I was ten, I 〜.（私が10歳のとき）
I have 〜.（経験を表す現在完了）

■ 足す前と足したあと
足す前：I like winter the best. I can enjoy skiing.（10語）
足したあと：I like winter the best. In winter, I can enjoy skiing with my family. Last year, we went to Nagano and had a great time.（25語）
語数が2.5倍になり、内容も具体的になった。

【模範解答（25語）】
I like winter the best. In winter, I can enjoy skiing with my family. Last year, we went to Nagano and had a great time.

【語数の内訳】
第1文 5語／第2文 10語／第3文 10語　合計25語

【文法の検算】
・I like winter the best.：最上級で「いちばん好き」を表す言い方。○
・enjoy skiing：enjoy のあとは動名詞。enjoy to ski は誤り。○
・Last year, we went 〜 and had 〜：過去の経験なので過去形。went と had で時制がそろっている。○
・have a great time（楽しい時を過ごす）の過去形は had a great time。○

■ 時制の切りかえに注意
理由の文は現在形（一般的なこと）、具体例は過去形（自分の経験）になることが多い。
　I can enjoy skiing.（現在）→ Last year, we went to Nagano.（過去）
この切りかえを忘れて、具体例まで現在形で書いてしまう誤りが多い。

★ ポイント：具体例は「いつ・どこで・何をした」の三点だけでよい。細かく書こうとすると語数を使いすぎ、文法ミスも増える。`,
      },
      {
        heading: '書ける経験談のストックを作る',
        body: `本番でゼロから経験談を考えるのは難しい。あらかじめ、英語で正しく書ける経験談をいくつか用意しておく。

■ 用意しておきたい経験談（各2文程度）
①旅行：Last summer, I went to Okinawa with my family. We swam in the sea and ate delicious food.
②部活：I have played tennis for three years. I practice with my friends after school every day.
③読書：I read a book about animals last month. It was very interesting.
④手伝い：I cook dinner for my family every Sunday. My mother is glad to see it.
⑤勉強：I study English every night. I want to talk with people from other countries.

■ 使い回しの方法
テーマが「好きな季節」でも「将来の夢」でも「大切なこと」でも、上のストックのどれかは使える。
例）テーマ「将来の夢」→ ⑤を使い、I want to work with people from other countries. につなげる。
例）テーマ「大切にしていること」→ ②を使い、I learned that practice is important. につなげる。

■ 事実である必要はない
自由英作文は作文の試験であって、事実の確認ではない。書きやすい内容に変えてよい。ただし、あまりに現実離れした内容は内容点で不利になることがあるので、ありそうな範囲にとどめる。

■ ストックの作り方
一つのテーマにつき2文、10〜20語で書き、必ず先生や辞書で文法を確認しておく。確認済みの文なら、本番でそのまま書ける。

⚠ 注意：ストックの文をテーマに合わせずそのまま書くと、内容が問いからずれて減点される。必ず一文加えて、テーマとつなげること。

★ ポイント：本番で新しい英語を作る量を減らすほど、ミスは減る。「覚えている文＋テーマに合わせた一文」が最も安全な構成である。`,
      },
    ],
    trapExamples: [
      {
        question: '「去年、私は家族と長野へ行き、楽しい時を過ごしました」を英語にせよ。',
        wrongAnswer: 'Last year, I go to Nagano with my family and have a good time.',
        trapExplanation:
          '理由の文を現在形で書いた流れのまま、具体例まで現在形で書いてしまう。Last year という過去を表す語句があるのに、動詞の形を切りかえていない。',
        correctAnswer: 'Last year, I went to Nagano with my family and had a good time.',
        correctExplanation:
          'Last year があるので過去形にする。go の過去形は went、have の過去形は had。and でつないだ二つの動詞は、どちらも過去形にそろえる。理由（現在形）から具体例（過去形）に移るときの時制の切りかえは、自由英作文で最も多い減点箇所である。',
      },
      {
        question: '「私はスキーを楽しむことができます」を英語にせよ。',
        wrongAnswer: 'I can enjoy to ski.',
        trapExplanation:
          '「〜することを楽しむ」という日本語から、enjoy のあとに to 不定詞を続けてしまう。want to / hope to の形が頭にあるため、同じように作ってしまう。',
        correctAnswer: 'I can enjoy skiing.',
        correctExplanation:
          'enjoy は目的語に動名詞（〜ing）だけをとる動詞。enjoy to 〜 という形は存在しない。同じ仲間に finish・stop・practice・mind がある。逆に want・hope・decide・promise は to 不定詞だけをとる。動詞ごとにどちらをとるかを覚えておく。',
      },
    ],
  },

  {
    id: 'koko_eigo_s415',
    subject: 'eigo',
    examType: 'koko',
    title: '自由英作文⑤：50語の総合演習',
    description: '意見・理由2つ・具体例・まとめを50語にまとめ、最後に全項目を検算する',
    intro: '難関校では50語前後の自由英作文が課されます。語数が増えるぶん、書く内容も見直す項目も増えますが、やることは今まで積み上げてきたことの組み合わせです。型で骨組みを作り、配分で語数を合わせ、五段階で検算する。最後の総仕上げをしましょう。',
    order: 915,
    studyPeriod: '中3秋〜直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '50語なら四文構成で、意見10語・理由①13語・理由②14語・まとめ13語が目安。',
      '理由が二つとも10語を超えるときは、具体例を一文に独立させて五文構成にしてもよい。',
      'まとめは For these two reasons, 〜 のように、理由が二つあったことを示すと構成が明確になる。',
      '書き終えたら、①語数 ②立場の一貫性 ③主語と動詞 ④名詞 ⑤時制 ⑥つづり の順に検算する。',
      '見直しの時間を3分確保する。書き切って終わりにしない。',
      '難しい語より、正確に書ける語を選ぶという原則は50語でも変わらない。',
    ],
    sections: [
      {
        heading: '50語の設計と模範解答',
        body: `【問題】「すべての生徒は学校の制服を着るべきだ」という意見について、あなたの考えを50語程度の英語で書きなさい。

■ 語数の設計
①意見　　 10語
②理由①　 13語
③理由②　 14語
④まとめ　 13語
合計50語

【模範解答（50語）】
I agree that all students should wear a school uniform. First, we do not have to think about what to wear every morning. Second, a uniform makes us feel that we are members of the same school. For these two reasons, I think a school uniform is a good idea.

【語数の検算】
第1文：I / agree / that / all / students / should / wear / a / school / uniform ＝10語
第2文：First / we / do / not / have / to / think / about / what / to / wear / every / morning ＝13語
第3文：Second / a / uniform / makes / us / feel / that / we / are / members / of / the / same / school ＝14語
第4文：For / these / two / reasons / I / think / a / school / uniform / is / a / good / idea ＝13語
合計 10＋13＋14＋13＝50語 ✓

★ ポイント：50語は四文で足りる。文を増やすより、一文を12〜14語に伸ばす方が、構成が崩れにくい。`,
        figureId: 'lf_kokoeigoext11_415',
      },
      {
        heading: '六項目の最終検算',
        body: `50語の答案は、書き終えたあとの検算で点が決まる。次の六項目を順に確認する。

■ ①語数
数えて50語。「程度」なら45〜55語が許容範囲。欄外に「50」と控える。

■ ②立場の一貫性
第1文：I agree that 〜（賛成）
第4文：I think a school uniform is a good idea（賛成）
→ 一致している。○

■ ③主語と動詞の一致
・all students should wear：助動詞のあとは原形。○
・we do not have to think：主語 we に対応。○
・a uniform makes：主語が三人称単数なので makes。○
・we are members：主語 we に対応、補語も複数形 members。○
・a school uniform is：三人称単数なので is。○

■ ④名詞（冠詞・複数形）
・a school uniform：数えられる名詞の単数なので a が必要。○
・members：we（複数）が「メンバーである」ので複数形。○
・the same school：特定の学校なので the。○
・a good idea：単数なので a。○

■ ⑤時制
全文が現在形で統一されている。意見を述べる文なので現在形が正しい。○

■ ⑥つづりと形式
uniform／members／reasons／idea のつづり。文頭の大文字、文末のピリオド。First, Second, のあとのカンマ。○

■ 検算の時間配分
50語の英作文なら、書くのに10分、検算に3分を割く。検算を省くと、平均して2〜4点を失う。

⚠ 注意：what to wear（何を着るべきか）は「疑問詞＋to不定詞」のかたまり。what we should wear と書いてもよい。どちらでも正しいが、語数が変わるので設計に合わせて選ぶ。

★ ポイント：検算は六項目を順番に、それぞれ全文を通して見る。一度に全部を見ようとすると必ず見落とす。数学の見直しと同じで、順序を固定することが精度を生む。`,
      },
    ],
    trapExamples: [
      {
        question: '「制服は、私たちが同じ学校の一員だと感じさせてくれる」を英語にせよ。',
        wrongAnswer: 'A uniform makes us to feel that we are member of the same school.',
        trapExplanation:
          'make のあとに to 不定詞を続けてしまい、さらに主語が we（複数）なのに補語を member と単数のまま書いている。want 人 to 〜 の形に引きずられたミスである。',
        correctAnswer: 'A uniform makes us feel that we are members of the same school.',
        correctExplanation:
          'make ＋ 目的語 ＋ 動詞の原形（使役）が正しい形で、to は入れない。同じ形をとるのは let と have。一方 want / tell / ask は to 不定詞をとる。また we are members のように、主語が複数なら補語の名詞も複数形にする。',
      },
      {
        question:
          '「50語程度」という条件で、次の答案の語数を数え、条件を満たすか判定せよ。 I agree that all students should wear a school uniform. First, we do not have to think about what to wear every morning.',
        wrongAnswer: '2文あるので50語程度を満たしている',
        trapExplanation:
          '文が二つあり、一文が長めなので十分な量に見えてしまう。実際に数えていないため、必要な語数の半分しか書けていないことに気づかない。',
        correctAnswer: '23語しかなく、条件を満たさない（理由②とまとめの2文が不足している）',
        correctExplanation:
          '第1文10語、第2文13語で合計23語。50語程度（45〜55語）には遠く及ばない。四文構成のうち理由②とまとめが欠けているので、Second, 〜（14語程度）と For these two reasons, 〜（13語程度）を書き足す。型の四文がそろっているかを確認すれば、語数不足は自然に防げる。',
      },
    ],
  },
];
