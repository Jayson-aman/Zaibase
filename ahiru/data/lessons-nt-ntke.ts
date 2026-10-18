// 時代に合わせた新傾向の単元（ntke）。高校受験 英語：スピーキングテスト・オンライン場面・複数の投稿の読み比べ。
import type { Lesson } from './lesson-types';

export const NT_NTKE_LESSONS: Lesson[] = [
  {
    id: 'nt_ntke_01',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 30101,
    title: 'スピーキングテスト①：音読と、図や質問への応答',
    description: '英文を読み上げるときの区切り・強弱・文末の上げ下げと、チラシなどの情報に合わせて答える型を学ぶ',
    intro: '東京都では2022年度から、公立中学校の3年生を対象にしたスピーキングテスト（ESAT-J）が行われ、タブレットに自分の声を録音して答える形になっています。英語は「書ける」だけでなく「声に出して伝わる」ことも見られる時代です。この単元では、音読と、質問への応答のコツを身につけます。',
    targetLevel: 'oyo',
    keyPoints: [
      '東京都のESAT-Jは、音読・図や質問への応答・ストーリー・意見と理由、という内容で、タブレットに録音して答える',
      '音読は、意味のかたまりごとに小さく区切って読む',
      '名詞・動詞・形容詞など、意味を運ぶ語を強く、to・the・a などは弱く短く読む',
      'Yes / No で答える疑問文は文末を上げ、what・when などの疑問詞の疑問文は文末を下げる',
      '応答は、主語と動詞のある完全な文で答える。聞かれた疑問詞に合わせて答えを選ぶ',
      '図やチラシの情報は、時刻・場所・値段に先に目をつけておく',
      'つまずいても止まらず、言い直してよい。沈黙がいちばん伝わらない',
    ],
    sections: [
      {
        heading: '1. 音読の型：区切る・強く読む・文末を上げ下げする',
        level: 'oyo',
        figureId: 'xf_nt_ntke_01',
        body: `音読は、1語ずつ同じ強さで読むのではなく、意味のかたまりごとに区切り、大事な語を強く読むものである。

■ 区切る
意味のかたまりのところで、ほんの少し間をあける。
　Do you have any plans / for this weekend?
　I want to go to the library / after school.
前置詞（for・after・to など）の前は、区切りやすい場所である。

■ 強く読む語・弱く読む語
意味を運ぶ語（名詞・動詞・形容詞・数）は強く、はっきり読む。to・the・a・of のような語は弱く、短く読む。
　I WANT to GO to the LIBRARY after SCHOOL.
大文字の語が強く読むところである。

■ 文末の上げ下げ
Yes / No で答えられる疑問文は、文末を上げて読む。
　Do you have any plans for this weekend? （↗）
what・when・where などの疑問詞で始まる疑問文は、文末を下げて読む。
　What time does the library open? （↘）

★ ここがポイント：音読は **意味のかたまりで区切り**、**意味を運ぶ語を強く** 読む。Yes / No の疑問文は **文末を上げ**、疑問詞の疑問文は **文末を下げる**。

⚠ 注意：速く読むことが得点になるのではない。聞き手に伝わる速さで、ゆっくりはっきり読むほうがよい。`,
      },
      {
        heading: '2. なぜそうなるのか：区切り・強弱・文末の上げ下げの理由',
        level: 'oyo',
        body: `■ なぜ区切るのか
聞き手は、文字ではなく音だけで聞いている。区切りがないと、どこまでが1つの意味なのかがわからなくなる。意味のかたまりごとに間をあけるのは、聞き手の頭の中で、かたまりを1つずつ片づけてもらうためである。

■ なぜ大事な語だけを強く読むのか
英語は、強い音が一定のリズムで並ぶ言葉である。意味を運ぶ語を強くし、to・the・a のような意味の軽い語を弱く短くすると、聞き手は強い語だけを拾っても、おおよその内容がわかる。もし全部の語を同じ強さで読むと、どの語が大事なのかが伝わらず、聞き取りにくくなる。

■ なぜ文末の上げ下げが変わるのか
Yes / No で答えられる疑問文は、答えが「はい」か「いいえ」の2つに限られる。文末を上げるのは、「答えをください」と相手に呼びかける合図になる。いっぽう what・when のような疑問詞の疑問文は、もう「何を知りたいか」が疑問詞で示されている。そこで文末を下げて、落ち着いてたずねる形になる。上げ下げは暗記ではなく、「答えが2つに決まっているか」で決まると考えればよい。

★ ここがポイント：区切りは **聞き手のため**、強弱は **意味を運ぶ語を目立たせるため**、文末の上げ下げは **答えの形を知らせるため** にある。

⚠ 注意：文末を上げるのは、Yes / No の疑問文だけである。疑問詞の疑問文まで上げると、聞き手には自信がなさそうに聞こえてしまう。`,
      },
      {
        heading: '3. 図やチラシの情報に合わせて答える型',
        level: 'oyo',
        body: `応答の問題では、チラシや案内などの図が出て、その内容について質問される。答えの型は決まっている。

■ 手順
①図が出たら、時刻・場所・値段の3つに先に目をつける。
②聞かれた疑問詞を聞き取る（What time→時刻、Where→場所、How much→値段）。
③図から、その疑問詞に合う情報を1つ選ぶ。
④「主語＋動詞」の完全な文にして答える。

■ 例　図：Sunday Market／場所：Green Park／時間：10:00〜15:00／値段：無料
質問：What time does the market close?
答え：It closes at three.
（15:00 は午後3時なので three で答える。It は the market のこと。）

質問：Where is the market?
答え：It is in Green Park.

■ こちらから質問する場合
図に書かれていない情報は、自分から質問する。値段がわからないなら How much is the ticket?、時間の長さなら How long is the concert? とたずねる。

★ ここがポイント：応答は、**聞かれた疑問詞に合う情報を図から1つ選び**、**主語と動詞のある文** で答える。**図に無い情報は、自分から質問** する。

⚠ 注意：How much は値段、How long は時間の長さ、How many は数をたずねる。似ているので、聞き取った瞬間に答えの種類を決めておく。`,
      },
      {
        heading: '4. 確かめ（検算）のしかた：声に出して確認する手順',
        level: 'oyo',
        body: `英語を話す練習の「検算」は、自分の声を聞き直すことである。次の手順で確かめる。

■ 音読の確かめ
①スマートフォンなどに録音して、聞き直す。
②英文に、区切る場所に斜線（/）を引き、強く読む語に下線を引く。
③斜線の位置で、本当に間があいているか、下線の語が本当に強いかを聞いて確かめる。
④疑問文なら、Yes / No の疑問文は上がっているか、疑問詞の疑問文は下がっているかを聞く。

■ 応答の確かめ
①答えに、主語と動詞が入っているか（It closes at three. なら It と closes）。
②聞かれた疑問詞と、答えの種類が合っているか（What time に時刻、Where に場所）。
③図の数字を読みまちがえていないか（15:00 → three）。
④言いまちがえても止まらず、言い直せたか。

■ 例
質問：How long does it take from the station to the museum?（駅から博物館まで、どのくらいかかりますか。）
答え：It takes ten minutes.
How long は時間の長さなので、minutes（分）で答えているか、声に出して確かめる。

★ ここがポイント：話す練習の検算は、**録音して聞き直す** こと。**斜線と下線**、そして **疑問詞と答えの種類が合っているか** を確かめる。

⚠ 注意：声に出さずに頭の中で読むだけでは、区切りも強弱もわからない。必ず口に出して確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: 'How long does it take from the station to the museum? に、It takes ten minutes. か By bus. のどちらで答えるのが正しいか。',
        wrongAnswer: 'By bus.',
        trapExplanation: 'How で始まる質問を、どれも「どうやって」と受け取ってしまう。How long の long は「長さ」を表しており、時間の長さをたずねている。',
        correctAnswer: 'It takes ten minutes.',
        correctExplanation: 'How long は「どのくらいの長さ」とたずねる。時間なら minutes（分）や hours（時間）で答える。By bus. は How do you go ...?（どうやって行きますか）への答えである。聞き取った疑問詞が How の次にどの語を持つかで、答えの種類が決まる。',
      },
      {
        question: 'Do you have any plans for this weekend? を読み上げるとき、文末は上げるか、下げるか。',
        wrongAnswer: '下げる',
        trapExplanation: 'どの疑問文も同じように、文末を下げて読んでしまう。',
        correctAnswer: '上げる',
        correctExplanation: 'Do で始まり、Yes か No で答えられる疑問文なので、文末を上げて読む。もし What are your plans for this weekend? のように疑問詞で始まる疑問文なら、文末を下げて読む。',
      },
    ],
  },
  {
    id: 'nt_ntke_02',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 30102,
    title: 'スピーキングテスト②：4コマの絵を見て、ストーリーを話す',
    description: '絵の順序に沿って、過去形と順序を表す語を使い、出来事を相手に伝わるように話す型を学ぶ',
    intro: '友だちに「昨日こんなことがあったよ」と話すとき、ふつうは起きた順番に話します。スピーキングテストでも、日常の出来事を表す絵を見て、話の流れが相手に伝わるようにストーリーを英語で話す問題が出されます。絵のとおりに、順番と時の形をそろえて話す練習をしましょう。',
    targetLevel: 'oyo',
    keyPoints: [
      '4コマの絵は、1コマにつき1〜2文で、起きた順に話す',
      '出来事を語る文は、過去形で話す（歩いた walked、見つけた found など）',
      '順序を表す語：First, / Then, / After that, / Finally, / In the end,',
      '不規則動詞をまちがえやすい：find→found、take→took、go→went、give→gave、say→said',
      '絵の人物が何を感じたかを一言そえると、話がまとまる（She was happy.）',
      '知らない単語は、知っている言葉で言いかえる（財布→a small bag for money）',
      '絵に描かれていないことを足しすぎない。見えることを、短い文で正確に言う',
    ],
    sections: [
      {
        heading: '1. ストーリーを話す型：1コマ1〜2文と順序の語',
        level: 'oyo',
        figureId: 'xf_nt_ntke_02',
        body: `4コマの絵は、起きた順に左から右へ並んでいる。1コマごとに1〜2文で説明し、つなぎの語で順番を示す。

■ 例　絵1：ミカが学校へ歩いている／絵2：道で財布を見つける／絵3：交番に持っていく／絵4：持ち主がお礼を言う
　One day, Mika was walking to school.
　First, she found a wallet on the road.
　Then, she took it to the police box.
　Finally, the owner said, "Thank you." Mika was happy.

■ 順序を表す語
　First,（まず）→ Then,（それから）→ After that,（そのあと）→ Finally,（最後に）
話の最初は、One day,（ある日）や Yesterday,（昨日）で始めると、過去の話だと聞き手に伝わる。

■ 使う時の形：過去形
walk → walked、find → found、take → took、say → said のように、動詞を過去形にして話す。

★ ここがポイント：1コマにつき **1〜2文**、順序の語で **First → Then → Finally** と並べ、動詞は **過去形** にそろえる。

⚠ 注意：絵の中の人物の名前が決まっていないときは、a boy、a girl、the woman のように、見たままを言えばよい。名前をつける必要はない。`,
      },
      {
        heading: '2. なぜそうなるのか：過去形・順序の語・不規則動詞の理由',
        level: 'oyo',
        body: `■ なぜ過去形で話すのか
ストーリーは、すでに起きた出来事を相手に伝えるものである。英語は、動詞の形で「いつの話か」を示す言葉なので、すでに終わったことは動詞を過去形にして表す。現在形のまま話すと、聞き手は「いつもしていること」なのか「今まさに起きていること」なのか、判断に迷ってしまう。

■ なぜ順序の語を入れるのか
聞き手は絵を見ていない場合もあり、音だけで話の流れを追う。First や Then があれば、「今は話のどのあたりか」が耳でわかる。同じ形の文が続くときも、順序の語が目印になって、聞き取りやすくなる。

■ なぜ不規則動詞に気をつけるのか
find や take は、-ed をつけるふつうの変え方ではなく、形そのものが変わる（find→found、take→took）。ストーリーには「見つける」「持っていく」「言う」のような動作がよく出てくるので、よく使う不規則動詞は、先に口が覚えておく必要がある。finded や taked のような言い方は、英語にはない。

■ なぜ感情を一言そえるのか
最後の絵に表情があるとき、She was happy. のように一言そえると、話に結末ができ、聞き手に「ここで話が終わった」と伝わる。

★ ここがポイント：**過去形** は「いつの話か」を示し、**順序の語** は「今どこか」を示す。**不規則動詞** は、形ごと覚えておく。

⚠ 注意：途中で過去形を言い忘れて、現在形になることがよくある。文頭の主語のあと、動詞を言う前に「過去だ」と心の中で確認する。`,
      },
      {
        heading: '3. 知らない単語を言いかえる方法と、絵の読み取り方',
        level: 'oyo',
        body: `■ 知らない単語が出たとき
絵に出てきた物の名前を知らなくても、止まらないことが大切である。知っている言葉で、説明して言いかえる。
・wallet（財布）→ a small bag for money
・umbrella（かさ）→ a thing for rain
・police box（交番）→ a small police office
聞き手に「何のことか」が伝われば、得点につながる。

■ 絵の読み取りの手順
①まず4コマ全体を見て、「だれが・どこで・何をした話か」をつかむ。
②コマごとに、「だれが」「何をした」を1つずつ決める。
③動詞を過去形にして、1コマ1〜2文にまとめる。
④最後のコマでは、結果か気持ちを一言そえる。

■ 例　絵1：男の子が公園で犬の散歩 → 絵2：犬が走って逃げる → 絵3：木の下で犬を見つける → 絵4：いっしょに家へ帰る
　One day, a boy was walking his dog in the park.
　Then, the dog ran away.
　After that, the boy found the dog under a tree.
　Finally, they went home together.

★ ここがポイント：知らない単語は **知っている言葉で言いかえて** 止まらない。話す前に **4コマの流れ** をつかみ、コマごとに **「だれが・何をした」** を決める。

⚠ 注意：ran（run の過去形）や went（go の過去形）も不規則動詞である。使う前に、形を口で言ってみて確かめる。`,
      },
      {
        heading: '4. 確かめ（検算）のしかた：声に出して4つの点を確かめる',
        level: 'oyo',
        body: `話し終わったあと、または練習で録音を聞き直すときに、次の4つを確かめる。

■ 確かめの手順
①4コマ全部について、1文以上話したか（1コマ抜けていないか）。
②動詞が、すべて過去形になっているか。聞こえた動詞を指で数えて、現在形が混ざっていないか確かめる。
③順序を表す語が、First → Then → After that → Finally の順で並んでいるか。
④最後に、結果や気持ちの一言があるか。

■ 例　次の話で確かめてみる。
　One day, Mika was walking to school. First, she found a wallet. Then, she took it to the police box. Finally, the owner said, "Thank you."
①4コマ分ある。②was walking・found・took・said はすべて過去の形。③First → Then → Finally の順。④結果の一言（お礼を言われた）がある。
語数も数えると、約30語である。

■ 声に出す確かめ
文を1つずつ区切って読み、1文が長すぎて息が続かないところは、2文に分ける。短い文をつなぐほうが、聞き手には伝わりやすい。

★ ここがポイント：話したあとは、**4コマ全部に文があるか**、**動詞がすべて過去形か**、**順序の語の並びが正しいか** を確かめる。

⚠ 注意：録音を聞くと、自分では気づかない現在形が必ず混ざっている。1回聞き直すだけで、まちがいが見つかる。`,
      },
    ],
    trapExamples: [
      {
        question: '絵3「ミカが財布を交番に持っていった」を英語で話すとき、次のうち正しいのはどちらか。（ア）Then, Mika take the wallet to the police box.　（イ）Then, Mika took the wallet to the police box.',
        wrongAnswer: '（ア）',
        trapExplanation: 'Then が付いているので話の順番は合っているが、動詞 take が原形のまま残っている。ストーリーは過去の出来事なので、過去形にしなければならない。',
        correctAnswer: '（イ）',
        correctExplanation: '主語 Mika のあとの動詞を、過去形 took にする。take は不規則動詞で、-ed をつけず、形が took に変わる。主語が3人称単数でも、過去の文では動詞に -s をつけず、過去形のままでよい。声に出して、動詞のところで「過去だ」と確かめる。',
      },
      {
        question: '「財布」という単語を知らないとき、どうするのが最もよいか。（ア）黙ってしまう　（イ）a small bag for money と言いかえる',
        wrongAnswer: '（ア）',
        trapExplanation: '単語が出てこないと、話が止まってしまい、ストーリーが先へ進まなくなる。',
        correctAnswer: '（イ）',
        correctExplanation: '言いかえて話を進めれば、聞き手には「お金を入れる小さな袋」と伝わる。スピーキングは、完全に正しい単語だけが評価されるわけではなく、伝えようとする力も見られる。止まらずに、知っている言葉で説明するのがよい。',
      },
    ],
  },
  {
    id: 'nt_ntke_03',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 30103,
    title: 'スピーキングテスト③：意見と理由を30〜40語で話す',
    description: '質問に対して、自分の意見と理由を短い文で組み立てて話す型と、言葉に詰まったときのつなぎ表現を学ぶ',
    intro: '「あなたはどう思いますか。それはなぜですか。」と、自分の考えを英語で聞かれる問題が、スピーキングテストにも、英語の記述にも増えています。正解は1つではなく、意見と、それを支える理由がそろっていることが大切です。30〜40語を目安に、短い文を組み立てる練習をしましょう。',
    targetLevel: 'oyo',
    keyPoints: [
      '意見と理由の型：①意見 → ②理由1 → ③理由2（または例） → ④もう一度意見（結び）',
      '意見は、I think ... の短い文で、最初にはっきり言う',
      '理由は、First, ... Second, ... や、because ... でつなぐ',
      '意見と理由は、同じ向きにそろえる。「よいと思う」なら、理由もよい点を言う',
      '1文を短くし、知っている簡単な単語で言う。難しい表現より、まちがえない文のほうがよい',
      '言葉に詰まったら、Well, ... や Let me think. で時間をかせぐ',
      '30〜40語は目安である。聞き手に伝わるように、ゆっくり話しても1分ほどで言い終えられる量',
    ],
    sections: [
      {
        heading: '1. 意見と理由の型：意見 → 理由1 → 理由2 → 結び',
        level: 'oyo',
        figureId: 'xf_nt_ntke_03',
        body: `意見を話すときは、次の4つの部品を、この順に並べる。

■ 型
①意見：I think ... （私は…だと思います）
②理由1：First, ... （1つ目に…）
③理由2：Second, ... （2つ目に…）
④結び：So I think ... （だから…だと思います）

■ 例　質問：Do you think students should use tablets in class?（生徒は授業でタブレットを使うべきだと思いますか。）
　I think students should use tablets in class.
　First, they can look up new words quickly.
　Second, they can keep many notes in one place.
　So I think tablets are useful for study.
全部で33語である。

■ 反対の意見でもよい
　I don't think students should use tablets in class.
　First, they may look at other things.
どちらの意見でも点数は変わらない。理由がそろっていることが大切である。

★ ここがポイント：**意見 → 理由1 → 理由2 → 結び** の順で話す。意見は **最初にはっきり**、理由は **First / Second** でつなぐ。

⚠ 注意：英語の意見は、日本語のように「ええと、私は…かな」とぼかす必要はない。短く、はっきり言うほうが伝わる。`,
      },
      {
        heading: '2. なぜそうなるのか：理由が必要な理由と、短い文で話す理由',
        level: 'oyo',
        body: `■ なぜ理由が必要なのか
意見だけでは、聞き手は「なぜそう思うのか」がわからず、納得できない。理由がそえてあれば、聞き手は「そういう考えもあるな」と、その意見を受け止められる。英語では、「意見と、それを支える理由」を述べる力が、自分の考えを伝える力として重視される。

■ なぜ最初に意見を言うのか
聞き手は、先に「何についての話か」を知ると、あとに続く理由を「この意見の理由だ」と整理しながら聞ける。意見が後ろにあると、理由を聞きながら「何の話だろう」と迷ってしまう。英語は、結論を先に言う順序を好む言葉である。

■ なぜ理由を2つ言うのか
理由が1つだけだと、短くなりすぎる。2つあれば、意見がしっかり支えられ、語数も30〜40語に近づく。理由の2つ目が思いつかないときは、例（For example, ...）でもよい。

■ なぜ簡単な単語・短い文で話すのか
スピーキングは、書く場合と違い、言い直しがむずかしい。難しい文を作ろうとして途中で止まるより、知っている簡単な語で、短い文を3〜4つ並べるほうが、まちがいが少なく、聞き手にも伝わる。

★ ここがポイント：理由は、**聞き手を納得させる** ために必要である。意見は **結論を先に**、文は **短く簡単に** 話す。

⚠ 注意：「理由」は、気持ちだけでなく、「できること」「起きること」のような事実で言うと、説得力が出る。I like it. だけで終わらせない。`,
      },
      {
        heading: '3. 意見と理由の向きをそろえる／言葉に詰まったときの表現',
        level: 'oyo',
        body: `■ 意見と理由の向きをそろえる
意見が「よい」なら、理由も「よい点」を言う。向きがちがうと、聞き手は混乱する。
　○ I think cats are better than dogs. They are quiet, so I can study at home.
　× I think cats are better than dogs. They are very noisy, so I like them.
2つ目の文は、意見（猫のほうがよい）に対して、理由が「うるさい」と悪い点になっており、つながらない。話し始める前に、意見と理由の向きをそろえてから言い始める。

■ 言葉に詰まったときのつなぎ表現
・Well, ...（ええと、…）
・Let me think.（ちょっと考えさせてください）
・That is a good question.（よい質問ですね）
・What I mean is ...（言いたいのは…です）
短いつなぎ表現を使うと、考える時間が少しかせげる。ただし、使いすぎて時間を使い切らないようにする。

■ 単語が出ないとき
知らない語は、知っている語で言いかえる。cheap（安い）が出ないなら、not expensive（高くない）と言えばよい。

★ ここがポイント：**意見と理由の向きをそろえる**。詰まったら **Well, ... / Let me think.** で時間をかせぎ、知らない語は **言いかえる**。

⚠ 注意：I don't know. で終わると、得点になりにくい。何か1つでも意見を決めて、理由をそえる。`,
      },
      {
        heading: '4. 確かめ（検算）のしかた：声に出して、語数・型・向きを確かめる',
        level: 'oyo',
        body: `話した内容は、次の手順で確かめる。練習では、録音して聞き直すか、紙に書き出して確かめる。

■ 確かめの手順
①意見の文が最初にあるか（I think ... ）。
②理由が2つ、または理由と例があるか（First, Second, because）。
③意見と理由の向きが同じか（意見がよいなら、理由もよい点か）。
④結びの文があるか（So I think ...）。
⑤語数が30〜40語ほどか。数え方は、1語ずつ指を折るか、紙に書いて数える。

■ 例　次の答えで確かめる。
　I like summer better than winter. First, I can swim in the sea. Second, summer vacation is long, so I can enjoy many things with my friends. That is why I like summer better.
①最初に意見がある。②First と Second がある。③意見は「夏がよい」、理由も「泳げる・休みが長い」と同じ向き。④結びの文がある。⑤数えると34語である。

■ 声に出して確かめる
文が長くなって息が続かないときは、文を2つに分ける。1文ずつ、はっきり言えているかを聞き直す。

★ ここがポイント：話したあとは、**意見・理由2つ・結びがそろっているか**、**向きが同じか**、**語数は30〜40語ほどか** を確かめる。

⚠ 注意：語数は、短縮形（I'm・don't）を1語と数える。ただし、練習では細かく数えすぎず、30語に届くかどうかを大まかに確かめればよい。`,
      },
    ],
    trapExamples: [
      {
        question: '"Do you like summer?" に、"Yes, I do. Because it is very hot." と答えた。意見と理由の向きはそろっているか。',
        wrongAnswer: 'そろっている。理由が付いているからよい。',
        trapExplanation: '「理由がある」ことだけを見て、その理由が意見を支えているかを確かめていない。暑いのは、夏が好きな理由としては、ふつう弱い点（悪い点）になる。',
        correctAnswer: 'そろっていない。',
        correctExplanation: '意見は「夏が好き」で、理由は「とても暑い」である。ふつう「暑い」は夏の悪い点なので、向きがそろっていない。夏が好きなら、「海で泳げる」「夏休みが長い」など、よい点を理由にする。例：Yes, I do. First, I can swim in the sea.',
      },
      {
        question: '意見を話すとき、"Well, ..." を何度も言って、すぐに内容に入らないのはよいか。',
        wrongAnswer: 'よい。考えている時間が、いくらでも取れるから。',
        trapExplanation: '時間をかせぐ表現を、たくさん使うほうがよいと考えてしまう。',
        correctAnswer: 'よくない。1回短く使い、すぐに意見を言う。',
        correctExplanation: 'つなぎ表現は、考える時間を少しかせぐためのものである。何度も使うと、決まった時間のなかで、肝心の意見と理由を話す時間が足りなくなる。1回だけ使い、すぐに I think ... と意見を言う。',
      },
    ],
  },
  {
    id: 'nt_ntke_04',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3夏',
    order: 30104,
    title: 'オンラインの場面の会話表現：Could you ...? と Would you like ...?',
    description: 'オンライン会議やチャットで使う表現と、依頼・誘いのていねいな言い方、その答え方を学ぶ',
    intro: '学校の授業や習いごとが、オンラインで行われることがふつうになりました。画面の向こうの相手に「声が聞こえません」「画面を見せてください」と英語で伝える場面は、会話文の問題にも出ます。ていねいな頼み方と誘い方の型を、オンラインの場面で身につけましょう。',
    targetLevel: 'oyo',
    keyPoints: [
      '聞こえないとき：I can\'t hear you.／マイクが切れているとき：You\'re on mute.',
      '頼む：Could you share your screen?（画面を共有してもらえますか）',
      'ゆっくり頼む：Could you speak a little more slowly?',
      '誘う：Would you like to join the online meeting?（オンライン会議に参加しませんか）',
      'ていねいさの順：Can you ...? < Will you ...? < Could you ...? < Would you ...?',
      'Could you ...? への答えは、Sure. / Of course. / Sorry, I can\'t. で、Yes, I could. とは言わない',
      'Would you like to ...? への答えは、Yes, please. / I\'d love to. / No, thank you.',
    ],
    sections: [
      {
        heading: '1. オンラインの場面で使う表現',
        level: 'oyo',
        figureId: 'xf_nt_ntke_04',
        body: `オンラインの会話では、音や画面のトラブルを伝える表現がよく使われる。場面ごとに型を覚える。

■ 音・画面のトラブルを伝える
・I can't hear you.（聞こえません）
・You're on mute.（マイクがオフになっています／mute＝消音）
・The connection is bad.（接続の調子がよくありません）
・Can you see my screen?（私の画面は見えますか）

■ 依頼する
・Could you share your screen?（画面を共有してもらえますか）
・Could you say that again?（もう一度言ってもらえますか）
・Could you speak a little more slowly?（もう少しゆっくり話してもらえますか）

■ 誘う・申し出る
・Would you like to join the online meeting?（オンライン会議に参加しませんか）
・Let me send you the link.（リンクを送らせてください）

■ 例
A: Could you share your screen?
B: Sure. One moment, please.（もちろん。少し待ってください。）

★ ここがポイント：トラブルは **I can't hear you. / You're on mute.**、頼むときは **Could you ...?**、誘うときは **Would you like to ...?** を使う。

⚠ 注意：mute（ミュート）は、「消音」を表す言葉である。You're on mute. は「あなたはマイクがオフです」という意味で、「あなたは静かです」という意味ではない。`,
      },
      {
        heading: '2. なぜそうなるのか：Could・Would が「ていねい」になる理由',
        level: 'oyo',
        body: `■ なぜ Could you ...? のほうがていねいなのか
Can you ...? は「できますか」と、相手に直接たずねる形である。Could は can の過去形だが、ここでは過去を表さず、「もしできればの話ですが」とワンクッションおく言い方になる。過去形には、「今の事実から少しきょりをおく」はたらきがあり、きょりをおくと、相手に強くおしつけない、ていねいな感じになる。

■ なぜ Would you like ...? が誘いに使えるのか
Would は will の過去形で、これも「きょりをおく」形である。Do you want ...?（ほしいですか）が、相手の気持ちをずばりとたずねるのに対して、Would you like ...? は、ひかえめに相手の気持ちをたずねる。そのため、初めて会う人や、先生・お客さんなど、目上の人にもふさわしい。

■ ていねいさの順番
Can you ...?（ふだんの友だち）< Will you ...? < Could you ...? < Would you ...?（いちばんていねい）
場面と相手に合わせて選ぶ。先生へのメールには Could you ...?、友だちには Can you ...? でよい。

■ なぜ please を足すとさらにていねいなのか
please は「お願いします」の意味を直接足す語で、頼み事であることを、はっきり示す。Could you ... , please? のように文末に足すことが多い。

★ ここがポイント：Could・Would は **過去形の「きょりをおく」はたらき** で、依頼や誘いを **ひかえめでていねい** にする。

⚠ 注意：Could you ...? は、過去の意味ではない。「あなたは…できましたか」と訳してしまうと、会話の意味がわからなくなる。`,
      },
      {
        heading: '3. 依頼・誘いへの答え方',
        level: 'oyo',
        body: `■ Could you ...? への答え
Could you ...? は「してもらえますか」という依頼なので、答えは、引き受けるか断るかである。
　引き受ける：Sure. / Of course. / No problem.
　断る：Sorry, I can't. （理由を言う）I have another meeting.
「Yes, I could.」とは言わない。Could you ...? は、能力をたずねているのではなく、頼んでいるからである。

■ Would you like to ...? への答え
誘いなので、受けるか、ことわるか。
　受ける：Yes, please. / I'd love to. / Yes, I'd love to.
　ことわる：No, thank you. / Sorry, I can't. （理由を言う）
「Yes, I would.」でも文法的には誤りではないが、会話では I'd love to. のほうが、自然でうれしい気持ちが伝わる。

■ 例
A: Would you like to join the online meeting?
B: Yes, I'd love to. What time does it start?

A: Could you open the file I sent?
B: Sure. Just a moment.

■ 空所補充問題でのヒント
空所の前の文が Could you ...? なら、後ろは Sure. か Sorry, I can't. になりやすい。前が Would you like to ...? なら、I'd love to. か No, thank you. になる。

★ ここがポイント：Could you ...? には **Sure. / Of course.**、Would you like to ...? には **Yes, please. / I'd love to.** と答える。**Yes, I could.** は誤り。

⚠ 注意：断るときも、Sorry だけで終わらず、短い理由を言うと、感じがよい。理由は I have another meeting. のように、簡単な文でよい。`,
      },
      {
        heading: '4. 確かめ（検算）のしかた：会話文の空所を声に出して確かめる',
        level: 'oyo',
        body: `会話文の空所補充では、次の手順で答えを選び、声に出して確かめる。

■ 手順
①空所の前の文が、「依頼」か「誘い」か「トラブルの報告」かを決める。
②その文に合う答えの種類を決める（依頼 → 引き受け・断り、誘い → 受ける・ことわる）。
③選択肢から、その種類の答えを選ぶ。
④選んだ文を空所に入れ、会話の全体を A と B の役で声に出して読む。意味が通れば、正解である。
⑤ていねいさが合っているか確かめる。先生への頼みに命令文（Share your screen.）は、ふさわしくない。

■ 例
A: Could you share your screen?
B: ______, one moment, please.
①は依頼。②引き受ける答え。③ Sure. を選ぶ。④ A と B で読むと、自然につながる。

■ 他の選択肢が誤りの理由を言えるか
Yes, I could. → 能力の答え方になっている。You're welcome. → お礼を言われたときの返事。No, thank you. → 誘いの断り方で、依頼への答えではない。なぜ誤りなのかを言えれば、正しい答えへの自信が深まる。

★ ここがポイント：空所補充は、**前の文の種類**（依頼・誘い）を決めて、**答えの種類** を選び、**A と B で声に出して** 読んで確かめる。

⚠ 注意：選択肢を見る前に、頭の中で自分なりの答えを考えておくと、まぎらわしい選択肢にだまされにくくなる。`,
      },
    ],
    trapExamples: [
      {
        question: 'A: Could you open the file? B: ______　に入れるのは、"Yes, I could." か "Sure." のどちらか。',
        wrongAnswer: 'Yes, I could.',
        trapExplanation: 'Could で聞かれたので、Yes, I could. と同じ形で返してしまう。Could you ...? は、能力をたずねているのではなく、頼んでいる。',
        correctAnswer: 'Sure.',
        correctExplanation: 'Could you ...? は、「…してもらえますか」というていねいな依頼である。頼まれたら、引き受けるなら Sure. / Of course.、断るなら Sorry, I can\'t. と答える。Yes, I could. は、「私はできましたよ」と能力の過去を言っているようになり、会話が成り立たない。',
      },
      {
        question: 'A: Would you like to join the online meeting? に、"Yes, I would like." と答えるのは正しいか。',
        wrongAnswer: '正しい。Would you like に合わせているから。',
        trapExplanation: 'Would you like to ...? に合わせて、答えの文でも like を使ってしまう。だが、短く答えるときの形は決まっている。',
        correctAnswer: '正しくない。Yes, I\'d love to. か Yes, please. と答える。',
        correctExplanation: '誘いを受けるときは、I\'d love to.（ぜひ）か Yes, please. が自然である。Yes, I would like. は like のあとに続く語（to ... や名詞）が足りず、文として不完全になる。なお、Yes, I would. は文法的にはまちがいではないが、会話ではあまり使わない。',
      },
    ],
  },
  {
    id: 'nt_ntke_05',
    subject: 'eigo',
    examType: 'koko',
    studyPeriod: '中3秋〜直前',
    order: 30105,
    title: '複数の投稿を読み比べる：チャット・口コミ・SNSの読み方',
    description: '複数の人の短い投稿を、人物ごとの立場に整理して読み、共通点と相違点を見つけて設問に答える方法を学ぶ',
    intro: 'クラスのチャットや、アプリの口コミでは、何人もの人が少しずつちがう意見を書きます。英語の長文でも、複数の人の投稿を読み比べる形の問題が増えています。AIアプリを使った宿題や、環境のための行動など、身近な話題で、「だれが何と言ったか」を取りちがえないための読み方を練習しましょう。',
    targetLevel: 'oyo',
    keyPoints: [
      '複数の投稿を読むときは、人物の名前と、その人の立場・行動を表に整理する',
      '設問を先に読み、who（だれが）の質問なら、主語と動詞を探す',
      'but・however のあとには、その人の本当の考えが書かれることが多い',
      'First / After that / Then などの順序の語から、「先にしたこと」と「あとにしたこと」を区別する',
      'agree（賛成する）・disagree（反対する）・too（〜も）・also（〜も）は、人どうしの関係を示す語',
      'not・never・only・all などの語は、意味を大きく変えるので、選択肢で必ず確かめる',
      '答えを選んだら、本文の根拠の一文に指をおき、人物名が合っているか確かめる',
    ],
    sections: [
      {
        heading: '1. 複数の投稿を表に整理して読む',
        level: 'oyo',
        figureId: 'xf_nt_ntke_05',
        body: `次の3人の投稿を例に、読み方を確かめる。

　Aki: I started using an AI app for English homework. It gives me hints, and then I write my own answers. It is very helpful.
　Ben: I try the problems by myself first. After that, I use the app to check my answers. I find my mistakes that way.
　Chie: Our teacher told us not to copy the app's answers. I agree, because we cannot learn if we only copy.

■ 手順
①まず設問を読む（例：Who uses the app to check answers?）。
②人物ごとに、「アプリをいつ・どう使うか」を1行でまとめる。
　Aki：先にヒントをもらう → 自分で答えを書く
　Ben：先に自分で解く → あとでアプリで確かめる
　Chie：答えを写さない。先生の注意に賛成
③設問の疑問詞と動詞に合う人物を、表から選ぶ。この例の答えは、Ben である。

★ ここがポイント：複数の投稿は、**人物ごとに立場を1行でまとめる**。設問の **who と動詞** を手がかりに、表から答えを選ぶ。

⚠ 注意：3人とも「アプリ」の話をしているので、どの人がどの使い方なのかを、取りちがえやすい。名前と使い方を、必ずセットで覚える。`,
      },
      {
        heading: '2. なぜそうなるのか：表に整理する理由と、順序の語に注目する理由',
        level: 'oyo',
        body: `■ なぜ人物ごとに表で整理するのか
複数の投稿は、1人の文章と違って、情報が人ごとに散らばっている。頭の中だけで覚えようとすると、「Aki が言ったことなのか Ben が言ったことなのか」が混ざってしまう。人物と立場を対にして書き出しておけば、設問を読んだあと、表を見るだけで答えが選べる。

■ なぜ順序の語が大切なのか
Ben は、「先に自分で解いて、あとでアプリを使う」と言っている。Aki は、「アプリでヒントをもらってから、自分で答えを書く」と言っている。どちらもアプリを使っているので、use the app の部分だけを見ると同じに見える。ちがいは、「いつ使うか」にあり、それを示すのが first・after that・then のような順序の語である。設問が「先に使う人」を聞いているなら、順序の語が答えを決める。

■ なぜ but や however のあとに注目するのか
英語では、but のあとに、書き手の本当に言いたいことが来ることが多い。「アプリは便利だ。But 答えを写してはいけない。」のように、前半は一般的な話、後半が主張という形になりやすい。

■ なぜ not・never・only に気をつけるのか
1語あるかないかで、意味が正反対になるからである。「Chie はアプリを使う」と「Chie はアプリを使わない」のちがいを、見落としやすい。

★ ここがポイント：表に整理するのは **人物と情報を取りちがえない** ため。**順序の語**・**but のあと**・**not / never** は、答えを決めるカギになる。

⚠ 注意：本文に出てきた語と同じ語が選択肢にあっても、すぐ飛びついてはいけない。人物名と動詞まで本文と合っているかを確かめる。`,
      },
      {
        heading: '3. 共通点・相違点と、選択肢の確かめ方',
        level: 'oyo',
        body: `■ 共通点・相違点を見つける
複数の投稿を比べる問題では、「2人に共通すること」や「ちがうこと」が聞かれる。
・共通点：Aki と Ben は、どちらもアプリを使っている。
・相違点：Aki は先にヒントをもらい、Ben は先に自分で解く。
共通点・相違点を示す語：both（両方とも）、also / too（〜も）、but / however（しかし）、agree（賛成する）、disagree（反対する）。

■ 選択肢を、本文と1つずつ照らす
例の問題：Which sentence is true?
（ア）Aki and Ben both use the app.
（イ）Chie uses the app to copy answers.
（ウ）Ben never uses the app.
（エ）Aki thinks the app is not helpful.
（ア）は Aki も Ben もアプリを使っているので正しい。（イ）は Chie は写してはいけないと言っているので誤り。（ウ）は Ben が使っているので never は誤り。（エ）は Aki が helpful と言っているので誤り。

■ 誤りの選択肢の特徴
・人物名を入れかえている　・never / only / all を足している　・本文と反対の評価（helpful ⇔ not helpful）

★ ここがポイント：選択肢は、**人物名・動詞・評価の語** を、本文と1つずつ照らす。**both / never / only** の語は、必ず確かめる。

⚠ 注意：「本文に書いてあることをそのまま言いかえた文」が正解になる。自分の考えで「たぶん正しい」と選ばず、根拠の一文を見つけてから選ぶ。`,
      },
      {
        heading: '4. 確かめ（検算）のしかた：根拠の一文と人物名の確認',
        level: 'oyo',
        body: `答えを選んだら、次の手順で確かめる。

■ 手順
①選んだ選択肢の根拠になる一文を、本文から探して指をおく。
②その一文を書いているのが、設問の人物と同じかを確かめる（Ben の文を Aki のものと取りちがえていないか）。
③選択肢にある not・never・only・all が、本文にもあるか確かめる。
④残りの選択肢が、それぞれどこで本文と合わないのかを、1つずつ言ってみる。

■ 例　Who tries the problems by themselves before using the app?（アプリを使う前に、自分で問題を解いてみるのはだれか。）
①根拠：Ben の I try the problems by myself first.
②この文を書いたのは Ben である。③ first（先に）がある。④ Aki は hints をもらってから自分で書くので、先に自分で解いているのではない。Chie は使う話をしていない。よって、答えは Ben である。

■ 声に出す確かめ
選んだ答えを、人物名の入った英文にして、声に出して言ってみる。
　Ben tries the problems by himself first.
意味が本文と同じかを、耳でも確かめる。

★ ここがポイント：**根拠の一文** に指をおき、**書いた人物名が合っているか** を確かめる。**他の選択肢が誤りの理由** も言えれば、確かな正解である。

⚠ 注意：同じ「先に」でも、「先にヒントをもらう（Aki）」と「先に自分で解く（Ben）」は別である。順序の語と動作を、セットで確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '本文：Aki は「アプリがヒントをくれて、そのあと自分で答えを書く」、Ben は「先に自分で解き、あとでアプリで確かめる」。Who tries the problems by themselves before using the app?',
        wrongAnswer: 'Aki',
        trapExplanation: 'Aki の I write my own answers を見て、「自分で答えを書く人」だと考えてしまう。しかし Aki は、先にアプリからヒントをもらっている。',
        correctAnswer: 'Ben',
        correctExplanation: '設問は「アプリを使う前に、自分で解く人」である。Ben は I try the problems by myself first. と、先に自分で解いている。Aki は、アプリのヒントをもらったあとで答えを書くので、順序が逆になる。「先に」という順序の語が、答えを決める。',
      },
      {
        question: '本文に「Chie: Our teacher told us not to copy the app\'s answers.」とある。Which is true? （ア）Chie copies the app\'s answers.　（イ）Chie agrees with her teacher.',
        wrongAnswer: '（ア）',
        trapExplanation: 'copy と app\'s answers の語が本文にあるので、すぐ選んでしまう。しかし not to copy なので、「写してはいけない」という意味である。',
        correctAnswer: '（イ）',
        correctExplanation: 'Chie は I agree と言っているので、先生の注意に賛成している。（ア）は not を見落とした読み方で、意味が正反対になる。本文と同じ語が選択肢にあるときほど、not や never がないかを確かめる。',
      },
    ],
  },
];
