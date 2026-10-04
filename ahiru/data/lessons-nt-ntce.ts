// 時代に合わせた新傾向の単元（ntce）：中学受験の英語。
// 聞き取りの型・環境とSDGs・学校のICT・日本文化の紹介・スピーキングの型の5本。
import type { Lesson } from './lesson-types';

export const NT_NTCE_LESSONS: Lesson[] = [
  // ────────────────────────────────────────────────────
  {
    id: 'nt_ntce_01',
    subject: 'eigo',
    examType: 'chugaku',
    studyPeriod: '小6後半・直前',
    order: 30451,
    targetLevel: 'oyo',
    title: '聞き取りの型：thirteen と thirty、言い直しに気をつける',
    description: '13と30、15と50などの聞き分けと、時刻・ねだんの聞き取り、言い直しのひっかけを学ぶ',
    intro:
      'ホームの放送で「次の電車は6時15分です」と聞こえたのに、じつは6時50分だった。そんな聞きまちがいは、英語の聞き取りテストでもよく起こります。数字は、聞き取りで点を取りやすい分、まちがえると大きく失点します。聞き分けのコツと、言い直しのひっかけを身につけましょう。',
    keyPoints: [
      'thirteen（13）は後ろの teen を強く長く、thirty（30）は前の thir を強く読む',
      '14 と 40、15 と 50、19 と 90 も同じ型。fourteen には u があるが、forty には u がない',
      '時刻（six fifteen と six fifty）やねだん（fifteen dollars と fifty dollars）も、分かれ目は後ろの音の強さ',
      '曜日は Tuesday（チューズデー）と Thursday（サーズデー）の最初の音で聞き分ける',
      'Oh, sorry.／I mean ...／Wait. は言い直しの合図。あとに言った数が答えになる',
      '聞こえた数は、ことばではなく数字ですぐにメモする',
      'メモは声に出して読み、強く読む場所が聞こえた音と合うか確かめる',
    ],
    sections: [
      {
        heading: '1. 13 と 30 のちがい：強く読む場所で聞き分ける',
        level: 'oyo',
        figureId: 'xf_nt_ntce_01',
        body: `聞き取りで、いちばん聞きまちがえやすいのが、13 と 30 のような組である。書くと thirteen と thirty で、どちらも「サーティ…」と聞こえる。ちがいは、強く読む場所である。

■ 強く読む場所
　13（thirteen）：後ろの teen を強く、長く読む。「サーティーン」
　30（thirty）：前の thir を強く読み、ty は弱く短く読む。「サーティ」

■ 同じ型の数
　14 fourteen と 40 forty
　15 fifteen と 50 fifty
　16 sixteen と 60 sixty
　19 nineteen と 90 ninety

■ つづりにも気をつける
fourteen は u がある（four-teen）が、forty には u がない。ninety は e が残る。つづりが変わる数は、書き取りでも出やすい。

★ ここがポイント：-teen は **後ろを強く長く**、-ty は **前を強く、後ろは弱く短く** 読む。聞くときは、数字の最後の音が **強く長いか、弱く短いか** に耳を向ける。

⚠ 注意：13 から 19 の数は、どれも「後ろの -teen」が強い。「ティーン」が長く聞こえたら、-teen の数と考える。`,
      },
      {
        heading: '2. なぜ強く読む場所がちがうのか',
        level: 'oyo',
        body: `■ 英語は「大切なところを強く言う」ことば
日本語は、ほとんどの音を同じ強さで読む。英語は、その言葉でいちばん大切な部分を強く、長く言う。そうすると、聞き手は大切な部分を聞きのがさない。

■ なぜ teen と ty でちがうのか
teen は、「10をたした数」という意味をもつ大切な部分である。thirteen（3＋10）の中心は teen にあるので、ここを強く言って知らせる。いっぽう thirty の ty は、「10が3つ」を表すしるしにすぎない。大切なのは前の thir（3）なので、前を強く言って、ty は弱く短く言う。

■ なぜ時刻やねだんでも同じなのか
six fifteen（6時15分）と six fifty（6時50分）は、分のところが fifteen か fifty かだけがちがう。分の数字は、-teen か -ty かで強さが変わる。ねだんも同じで、fifteen dollars と fifty dollars は、後ろの音の強さで聞き分ける。

■ 曜日の聞き分け
Tuesday と Thursday は、最初の音がちがう。Tuesday は「チュー」、Thursday は「サー」と始まる。曜日は、最初の音に注目する。

★ ここがポイント：英語は **大切な部分を強く長く** 言う。teen は大切な部分なので **後ろが強く**、ty は **前が強い**。この理由がわかれば、丸暗記しなくても聞き分けられる。

⚠ 注意：強く読む場所は、文の中では少しわかりにくくなる。そのときは、前後の言葉（時刻なら o'clock や a.m. など）も手がかりにする。`,
      },
      {
        heading: '3. 時刻・ねだん・曜日の聞き取りの型',
        level: 'oyo',
        body: `■ 時刻
　It is six fifteen.　→ 6:15
　It is six fifty.　→ 6:50
分のところで、-teen か -ty かを聞き分ける。「時」と「分」の2つの数を、続けて6:15のように数字で書く。

■ ねだん
　It is fifteen dollars.　→ 15ドル
　It is fifty dollars.　→ 50ドル
ねだんは、ほかの数と取りちがえやすい。聞こえたらすぐ、数字だけをメモする。

■ 曜日
　Tuesday（火）と Thursday（木）、Saturday（土）と Sunday（日）はまぎらわしい。最初の音を聞いて、メモに書く。

■ 聞き取りの手順
①放送の前に、問題文を読んで、何を聞かれるか（時刻・ねだん・曜日）を知る。
②放送では、その数や語が出たら、すぐメモする。
③放送が終わったら、メモを見て、選択肢を選ぶ。

★ ここがポイント：聞き取りは **先に問題を読み**、聞かれることを知っておく。数は **ことばでなく数字で** 、すぐにメモする。

⚠ 注意：メモを「thirteen」と英語で書くと、時間がかかって次の放送を聞きのがす。13 のように数字で書く。`,
      },
      {
        heading: '4. 言い直しのひっかけ：さいごの数が答え',
        level: 'oyo',
        body: `■ 言い直しとは
放送では、話している人がまちがえて、すぐ言い直すことがある。入試では、これをひっかけに使う問題がよく出る。

■ 言い直しの合図
　Oh, sorry.（あ、ごめんなさい）
　I mean ...（つまり…）
　Wait.（待って）
　No, ...（いいえ、…）
これが聞こえたら、あとに言った数が、本当の答えである。

■ 例
　The concert starts at six thirty. Oh, sorry. It starts at seven thirty.
前の six thirty は言いまちがいなので、答えは 7:30 である。

■ なぜこのひっかけが出るのか
ふつうの会話では、人はよく言いまちがえて、すぐ直す。聞き取りで本当に大切なのは、数を聞き取ることではなく、最後に伝えたかった数を聞き取ることだからである。先に聞こえた数だけを書くと、まちがいになる。

★ ここがポイント：言い直しの合図が聞こえたら、**前の数に線を引き**、**あとの数を書く**。答えは **最後に言った数** である。

⚠ 注意：合図が聞こえないのに、前の数をすぐ消さないこと。合図があったときだけ、あとの数に切りかえる。`,
      },
      {
        heading: '5. 声に出して確かめる手順',
        level: 'oyo',
        body: `英語の聞き取りには、計算の検算のかわりになる「声に出して確かめる手順」がある。

■ 手順
①メモの数字を、英語で声に出して読む。（例：6:15 → six fifteen）
②-teen の数は後ろを強く、-ty の数は前を強く読んでみる。
③その読み方が、耳に残っている放送の音と同じかどうかを思い出す。
④ちがう気がしたら、もう一方の数でも読んでみて、どちらが近いかをくらべる。
⑤言い直しがあったかどうかも、思い出して確かめる。

■ なぜ声に出すのか
耳で聞いた音と、自分の口で出した音を比べると、強さのちがいがはっきりわかるからである。目で見ただけでは、どちらの数か判断できない。

■ ふだんの練習
13 と 30、14 と 40 のように、組になった数を、手をたたきながら読む。-teen は後ろで手をたたき、-ty は前で手をたたく。強さの場所が体でわかるようになる。

★ ここがポイント：メモした数は、**声に出して** 強さを確かめる。**手をたたきながら** 練習すると、-teen と -ty の強さの場所が体でわかる。

⚠ 注意：テスト中は、小さく口を動かすだけでもよい。大声で読まないように注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '放送：The bus leaves at four fifty. Oh, sorry. I mean four fifteen. バスは何時何分に出ますか。',
        wrongAnswer: '4時50分',
        trapExplanation: '先に聞こえた four fifty をメモして、そのままにしてしまう。放送の中の Oh, sorry. I mean ... は言い直しの合図で、あとに言った数が本当の答えになる。',
        correctAnswer: '4時15分',
        correctExplanation: '話した人は、four fifty と言いまちがえて、Oh, sorry. I mean four fifteen. と言い直した。答えは、あとに言った four fifteen（4:15）である。確かめとして、4:15 を声に出して読むと、fifteen は teen が強く長く聞こえる。',
      },
      {
        question: '放送：It is fifteen dollars. 「ティーン」の部分が強く長く聞こえました。ねだんはいくらですか。数字で答えなさい。',
        wrongAnswer: '50ドル',
        trapExplanation: 'fifteen と fifty を同じ音だと思って、聞きまちがえる。強く読む場所がちがうことを知らないと、取りちがえる。',
        correctAnswer: '15ドル',
        correctExplanation: '-teen は後ろを強く長く読むので、「ティーン」が強く長く聞こえたら fifteen（15）である。fifty（50）は前の fif を強く読み、ty は弱く短い。',
      },
    ],
  },
  // ────────────────────────────────────────────────────
  {
    id: 'nt_ntce_02',
    subject: 'eigo',
    examType: 'chugaku',
    studyPeriod: '小6後半・直前',
    order: 30452,
    targetLevel: 'oyo',
    title: '環境とSDGsの英文：reduce・reuse・recycle と身近な行動',
    description: '3つのRの意味、SDGsの目標、レジ袋有料化を使って、環境を守る行動を英語で言う',
    intro:
      'スーパーでレジ袋をもらわず、自分のエコバッグを持っていく。そんな行動は、英語で説明できるでしょうか。最近の入試では、環境やSDGsについての短い英文が出ることがふえています。むずかしい言葉は使わず、身近な行動を、短い文で言えるようにしましょう。',
    keyPoints: [
      'reduce は「へらす」、reuse は「くり返し使う」、recycle は「作り直す」',
      'ごみ対策は reduce が最初。出さないことがいちばん大切',
      'SDGs は2015年に国連で決まった、2030年までの17の目標',
      'Goal 12 は「つくる責任 つかう責任」、Goal 14 は「海の豊かさを守ろう」',
      '日本では2020年7月から、プラスチック製のレジ袋が有料になった',
      '自分の行動は、「行動」と「なぜよいか」の2文で言う',
      'plastic bag（レジ袋）、bottle（びん・ペットボトル）、trash（ごみ）などの語彙を覚える',
    ],
    sections: [
      {
        heading: '1. 3つのR：reduce・reuse・recycle',
        level: 'oyo',
        figureId: 'xf_nt_ntce_02',
        body: `ごみを少なくするための行動は、英語で「3つのR」と言う。

■ 3つの意味
　reduce（リデュース）：へらす。ごみになる物を、そもそも使わない、もらわない。
　reuse（リユース）：くり返し使う。すてずに、もう一度使う。
　recycle（リサイクル）：作り直す。使い終わった物をとかして、別の物にする。

■ 英文の例
　I bring my own bag.　（自分のふくろを持っていく）→ reduce
　We use old T-shirts as cloths.　（古いシャツをぞうきんにする）→ reuse
　We recycle cans and bottles.　（かんやびんを作り直す）→ recycle

■ 動詞を見れば、どのRかがわかる
文の中の動詞（bring・use・recycle）と、何をどうするかを見れば、どのRなのかがわかる。

★ ここがポイント：**reduce はへらす**、**reuse はくり返し使う**、**recycle は作り直す**。英文は、動詞を見てどのRかを見分ける。

⚠ 注意：reuse と recycle はよく取りちがえる。形を変えずにもう一度使うのが reuse、形を変えて別の物にするのが recycle である。`,
      },
      {
        heading: '2. なぜ reduce が最初なのか',
        level: 'oyo',
        body: `■ 3つには順番がある
ごみ対策では、reduce → reuse → recycle の順に大切だと考えられている。

■ なぜ reduce がいちばんなのか
ごみを出さなければ、ごみを集めたり、運んだり、処理したりする手間が、そもそも必要ないからである。出てしまったごみを後から片づけるより、出さないほうが、むだがない。

■ なぜ reuse が2番目なのか
reuse は、ごみにする前に、もう一度使う方法である。物の形を変えずに使うので、作り直すための手間や電気がかからない。

■ なぜ recycle が最後なのか
recycle は、使い終わった物を集めて運び、とかして、別の物に作り直す。この間にも、運ぶ燃料や、作り直す電気が必要になる。だから、recycle はとても大切だが、reduce や reuse ができるときは、そちらを先に考える。

■ 日本のレジ袋の話
日本では、2020年7月から、プラスチック製のレジ袋が有料になった。目的は、あたり前のようにもらっていたレジ袋が本当に必要か、考え直すきっかけにするためである。これは reduce の第一歩である。英語では、In July 2020, Japan started charging for plastic shopping bags. と言える。charge は「お金を取る」の意味である。

★ ここがポイント：ごみは **出さないことがいちばん** 。出してしまったら **くり返し使い**、それでも使えなくなったら **作り直す**。

⚠ 注意：「recycle すればごみを出しても大丈夫」という考えはまちがいである。作り直すときにも、電気や燃料を使う。`,
      },
      {
        heading: '3. SDGsの英文を読む',
        level: 'oyo',
        body: `■ SDGsとは
SDGs（エス・ディー・ジーズ）は、2015年に国連で決まった、世界共通の目標である。2030年までに達成することを目ざしていて、目標は全部で17ある。

■ ごみや海に関係の深い目標
　Goal 12：Responsible Consumption and Production（つくる責任 つかう責任）
　Goal 14：Life Below Water（海の豊かさを守ろう）
　Goal 13：Climate Action（気候変動に具体的な対策を）

■ 英文の例
　Plastic bags can hurt sea animals.　（プラスチックのふくろは、海の動物をきずつけることがある）
　We should reduce plastic trash.　（わたしたちはプラスチックごみをへらすべきだ）

should は「〜すべきだ」という意味で、あとの動詞は原形になる。

■ なぜ Goal 12 が reduce に関係するのか
「つくる責任 つかう責任」は、物をつくる人も、使う人も、むだを出さないように責任をもとう、という目標である。使う人の責任として、必要な分だけ使うことは、reduce につながる。

★ ここがポイント：SDGs は **2015年に国連で決まり**、**2030年まで**の **17の目標** である。ごみは Goal 12、海は Goal 14 に関係が深い。

⚠ 注意：should のあとには、動詞の原形が来る。We should reduce ... は正しく、We should reduces ... とは書かない。`,
      },
      {
        heading: '4. 自分の行動を2文で言う型',
        level: 'oyo',
        body: `■ 型
スピーキングや英作文では、自分の行動を、2つの文で言うと伝わりやすい。
　1文目：何をしているか（行動）
　2文目：なぜよいか（よさ）

■ 例
　I bring my own bag. It helps the sea.
　（わたしは自分のふくろを持っていきます。それは海のためになります。）

　We recycle cans. It saves resources.
　（わたしたちはかんを作り直します。それは資源を守ります。）

help は「助ける・役に立つ」、save は「守る・ためる」の意味である。

■ なぜ2文にするのか
行動だけを言っても、聞いた人は「なぜそれをするの？」と思う。2文目でよさを足せば、行動の意味まで伝わる。2文とも短くてよい。

■ 理由を述べるとき
because を使うと、1文で言える。
　I bring my own bag because it reduces plastic trash.
（プラスチックごみをへらすので、わたしは自分のふくろを持っていきます。）

★ ここがポイント：行動は **「行動」＋「なぜよいか」の2文** で言う。**短い文を2つ** 並べれば十分に伝わる。

⚠ 注意：it は、1文目の行動全体を指す。2文目の主語を it にして、動詞に三単現の s をつける（It helps ...）のを忘れない。`,
      },
      {
        heading: '5. 声に出して確かめる手順',
        level: 'oyo',
        body: `英文を書いたり話したりしたあとは、声に出して確かめる。

■ 手順
①文を、声に出して読む。つっかえた所があれば、その語を確かめる。
②1文目の動詞は何か（bring・use・recycle など）を指で押さえる。
③2文目の主語が it のとき、動詞に s がついているかを確かめる。
④reduce・reuse・recycle のどれの行動かを、日本語で言いかえてみる。
⑤長すぎる文は、2つに切って言い直す。

■ なぜ声に出すのか
目だけで見ると、s のぬけや、動詞のまちがいに気づきにくい。口に出すと、読みにくいところが、文のまちがいの手がかりになる。

■ ふだんの練習
自分がふだんしている行動を、1日に1つ、英語で言ってみる。「bag」「bottle」「trash」の3語は、いつも使えるようにしておく。

★ ここがポイント：文は **声に出して** 確かめ、**動詞** と **主語に合った s** を見直す。長い文は **2つに切る**。

⚠ 注意：知らない語は、無理に使わない。知っている語で言いかえるほうが、まちがいが少ない。`,
      },
    ],
    trapExamples: [
      {
        question: '「古いシャツをぞうきんにして、もう一度使う」ことを表す語は、reduce・reuse・recycle のどれですか。',
        wrongAnswer: 'recycle',
        trapExplanation: '「何かに作り直す」と考えて、recycle を選んでしまう。しかし、シャツをとかして別の物に作り直したわけではない。',
        correctAnswer: 'reuse',
        correctExplanation: '古いシャツの形を大きく変えず、ぞうきんとして、もう一度使っているので reuse である。recycle は、使い終わった物を、とかすなどして、材料から別の物に作り直すことである。',
      },
      {
        question: '次の英文の意味を答えなさい。We should reduce plastic trash.',
        wrongAnswer: 'わたしたちはプラスチックごみを作り直しました。',
        trapExplanation: 'reduce を、reuse や recycle と取りちがえ、should を過去の意味と考えてしまう。',
        correctAnswer: 'わたしたちはプラスチックごみをへらすべきです。',
        correctExplanation: 'reduce は「へらす」、should は「〜すべきだ」の意味で、あとの動詞は原形になる。「作り直す」は recycle である。',
      },
    ],
  },
  // ────────────────────────────────────────────────────
  {
    id: 'nt_ntce_03',
    subject: 'eigo',
    examType: 'chugaku',
    studyPeriod: '小6後半・直前',
    order: 30453,
    targetLevel: 'oyo',
    title: '学校のICTの英文：tablet・online・password を使った表現',
    description: 'タブレットやオンラインに関する語と、動詞とのセット、ルールの命令文を学ぶ',
    intro:
      '授業でタブレットを使って調べたり、遠くの人とビデオ通話で話したりする学校がふえました。英語の入試でも、こうした学校のくらしが話題になる文章が出ています。道具の名前と、いっしょに使う動詞を、セットで覚えましょう。',
    keyPoints: [
      'tablet（タブレット）・online（つながっている）・password（合言葉）・screen（画面）・camera（カメラ）・video call（ビデオ通話）',
      '道具は use、写真は take、メールは send、ファイルは open を使う',
      '日本では2019年12月にGIGAスクール構想が発表され、小・中学生に1人1台の端末を用意する考えが示された',
      'each（ひとりひとり）のあとの名詞は単数：Each student has a tablet.',
      'Don\'t ～. は「〜してはいけない」、Please ～. は「〜してください」',
      'パスワードは家のかぎと同じ。人に教えてはいけない',
      'look up は「（辞書やインターネットで）調べる」',
    ],
    sections: [
      {
        heading: '1. 学校のICTの語彙：道具と動詞をセットで',
        level: 'oyo',
        figureId: 'xf_nt_ntce_03',
        body: `ICT（アイ・シー・ティー）は、パソコンやタブレット、インターネットなど、情報や通信に関する道具や技術のことである。学校で使う道具の英語を、まず確かめよう。

■ 道具・ことばの一覧
　tablet：タブレット
　online：インターネットにつながっている
　password：合言葉（本人だけが知る文字の並び）
　screen：画面
　camera：カメラ
　video call：顔を見ながらする通話

■ いっしょに使う動詞
　use a tablet：タブレットを使う
　take a picture：写真をとる
　send an e-mail：メールを送る
　open a file：ファイルを開く
　click the button：ボタンをクリックする
　look up a word：言葉を調べる

■ 英文の例
　We use tablets in class.　（授業でタブレットを使います。）
　I take pictures of plants.　（わたしは植物の写真をとります。）

★ ここがポイント：道具の名前は **動詞とセット** で覚える。**use a tablet**、**take a picture**、**send an e-mail**、**open a file** のように、決まった動詞を使う。

⚠ 注意：「写真をとる」を、catch や get などにしない。決まった動詞は take である。`,
      },
      {
        heading: '2. なぜ動詞が決まっているのか',
        level: 'oyo',
        body: `■ なぜ tablet には use を使うのか
道具は「使う」ものなので、動詞は use になる。see は「目に入る」、look at は「目を向けて見る」で、タブレットを動かして使う意味にはならない。

■ なぜ写真は take なのか
英語では、take は「手に取る・自分のものにする」という意味がもとになっている。景色を自分のものとして切り取るので、写真は take a picture と言う。make や do は、この意味に合わないので使えない。

■ なぜメールは send、ファイルは open なのか
メールは、相手へ向けて送り出すものなので send を使う。ファイルは、とじてあるものを開いて中身を見るので open を使う。動詞は、その動作の意味に合うものが選ばれている。

■ 動詞と名詞のセットを覚えるとよいわけ
単語を1つずつ覚えると、文を作るとき、どの動詞を合わせればよいかがわからなくなる。「use a tablet」のように、セットのまま口に出して覚えると、そのまま文に使える。

■ GIGAスクール構想と英文
日本では2019年12月に、GIGAスクール構想が発表された。小学生と中学生に、1人1台の端末を用意する考えである。英語では、Each student has a tablet. と言う。each は「ひとりひとり」の意味で、あとの名詞は単数になり、動詞には三単現の s がつく。

★ ここがポイント：動詞は **その動作の意味に合うもの** が決まっている。**セットのまま覚える** と、そのまま文に使える。each のあとは **単数名詞＋has**。

⚠ 注意：each student（単数）に対しては has を使う。Each student have ... とは書かない。`,
      },
      {
        heading: '3. ルールを表す英文：Don\'t と Please',
        level: 'oyo',
        body: `■ ルールの文は命令文が中心
学校のICTのルールを英語で言うときは、命令文を使う。命令文は、主語を言わず、動詞の原形から始める。

■ 3つの型
　Don't tell your password.　（パスワードを教えてはいけません。）
　Please turn off the tablet.　（タブレットの電源を切ってください。）
　Ask a teacher first.　（まず先生に聞きましょう。）

　Don't ～.：〜してはいけない
　Please ～.：〜してください
　～ first.：まず〜しなさい

■ 例文
　Don't use the tablet during lunch.　（昼食の間はタブレットを使ってはいけません。）
　Please close the file.　（ファイルを閉じてください。）

■ なぜ Don't のあとは動詞の原形なのか
命令文は、相手に直接話しかけるので、主語（you）を言わない。主語がないので、動詞は何も変化せず、原形のままになる。

★ ここがポイント：Don't のあとは **動詞の原形**。**Please** をつけると、ていねいな言い方になる。

⚠ 注意：Don't のあとに、動詞に s をつけたり、ing をつけたりしない。Don't uses ... や Don't using ... はまちがい。`,
      },
      {
        heading: '4. なぜパスワードは教えてはいけないのか',
        level: 'oyo',
        body: `■ パスワードは家のかぎと同じ
パスワードは、自分のタブレットやアカウントを守るための、自分だけが知る合言葉である。家のかぎと同じ役目をしている。

■ なぜ友だちにも教えてはいけないのか
教えてしまうと、他の人があなたの名前でログインして、あなたのファイルを見たり、書きかえたりできてしまうからである。また、その人が悪いことをしたとき、あなたがしたと思われてしまう。

■ 英文の例
　Don't tell your password to others.　（パスワードを他の人に教えてはいけません。）
　A password is like a key.　（パスワードはかぎのようなものです。）

like は「〜のような」の意味である。

■ 困ったときは
忘れてしまったときは、1人で悩まず、先生や家の人にたずねる。英語では、Ask a teacher first. と言える。

★ ここがポイント：パスワードは **家のかぎと同じ**。**自分だけが知る** ものであり、**だれにも教えない**。

⚠ 注意：「友だちならいいだろう」と思って教えてはいけない。いっしょに使いたいときは、先生にことわる。`,
      },
      {
        heading: '5. 声に出して確かめる手順',
        level: 'oyo',
        body: `ICTの英文を書いたり話したりしたら、次の手順で声に出して確かめる。

■ 手順
①文を、はじめから声に出して読む。
②動詞と名詞が、セットで正しいか確かめる。（use a tablet か、see a tablet ではないか）
③each のあとの名詞が単数か、has になっているかを確かめる。
④命令文のとき、Don't のあとに動詞の原形が来ているか確かめる。
⑤読み終わったら、日本語で言いかえてみて、意味が合っているか確かめる。

■ なぜ声に出すのか
セットになった言い方は、口に出すと、リズムよく言えるかどうかで、正しいかがわかるからである。まちがえたセットは、つっかえて言いにくい。

■ ふだんの練習
1日に1つ、学校でしたICTの行動を、英語で言ってみる。たとえば、I used a tablet in science class.（理科の授業でタブレットを使いました。）のようにする。

★ ここがポイント：文は **声に出して読み**、**動詞と名詞のセット**、**each の単数**、**命令文の動詞の原形** の3か所を確かめる。

⚠ 注意：日本語のままに直訳すると、動詞がちがってしまうことが多い。決まったセットを覚えて使う。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしたちは授業でタブレットを使います。」を表すように、（　）に入る語を答えなさい。We（　）tablets in class.（see・use・watch から選ぶ）',
        wrongAnswer: 'see',
        trapExplanation: '「見る」ことに注目して、see を選んでしまう。しかし、タブレットは見るだけでなく、動かして使う道具である。',
        correctAnswer: 'use',
        correctExplanation: '道具を使うときの動詞は use である。see は「目に入る」、watch は「動くものをじっと見る」の意味で、タブレットを使う意味にはならない。',
      },
      {
        question: '次の英文の意味を答えなさい。Don\'t tell your password to others.',
        wrongAnswer: 'パスワードを他の人に教えなさい。',
        trapExplanation: 'tell を見て「教える」だけを読み取り、Don\'t（〜してはいけない）の意味を見落としてしまう。',
        correctAnswer: 'パスワードを他の人に教えてはいけません。',
        correctExplanation: 'Don\'t ～. は「〜してはいけない」の意味である。tell your password to others は「あなたのパスワードを他の人に教える」なので、全体で「教えてはいけません」の意味になる。',
      },
    ],
  },
  // ────────────────────────────────────────────────────
  {
    id: 'nt_ntce_04',
    subject: 'eigo',
    examType: 'chugaku',
    studyPeriod: '小6後半・直前',
    order: 30454,
    targetLevel: 'oyo',
    title: '日本の文化を英語で紹介する：festival・和食・給食',
    description: '日本の行事や食べ物を、外国の人に3つの文で紹介する型と、必要な語や言い方を学ぶ',
    intro:
      '外国から来た友だちに、「たなばたって何？」と聞かれたら、英語で答えられるでしょうか。日本のことを英語で紹介する問題は、最近の入試でも出ています。知らない人に話すつもりで、短い文を3つ重ねる型を身につけましょう。',
    keyPoints: [
      '行事の紹介は「何か」「何をする」「どう思う」の3文で言う',
      '月だけなら in July、日付まで言うなら on July 7',
      '日本語の名前は、This is called ～.（これは〜と呼ばれる）で教える',
      '知らない語は、Onigiri is a rice ball. のように、やさしい英語で言いかえる',
      '2013年12月に、和食がユネスコの無形文化遺産に登録された',
      '「いただきます」は Thank you for the food. と言うと意味が伝わる',
      'festival（祭り・行事）、fireworks（花火）、rice ball（おにぎり）、school lunch（給食）を覚える',
    ],
    sections: [
      {
        heading: '1. 行事を紹介する3つの文',
        level: 'oyo',
        figureId: 'xf_nt_ntce_04',
        body: `日本の行事を英語で紹介するとき、3つの文で言うと、聞く人にわかりやすく伝わる。

■ 3つの文
　1文目：何かを言う（名前と種類）
　2文目：何をするかを言う
　3文目：自分の気持ちを言う

■ 例：たなばた
　Tanabata is a festival. （たなばたは行事です。）
　People write wishes. （人々はねがいごとを書きます。）
　It is fun. （それは楽しいです。）

■ ほかの行事の例
　Setsubun is a spring event. People throw beans. It is exciting.
　（節分は春の行事です。人々は豆をまきます。わくわくします。）
　New Year's Day is on January 1. We eat special food. It is delicious.
　（元日は1月1日です。特別な食べ物を食べます。おいしいです。）

■ なぜ3つの文が必要なのか
外国の人は、たなばたを知らないかもしれない。1文目で「行事だ」と教え、2文目で様子を想像してもらい、3文目で気持ちを伝えれば、初めて聞く人にも伝わる。

★ ここがポイント：紹介は **「何か」→「何をする」→「どう思う」** の順で、**短い文を3つ** 並べる。

⚠ 注意：2文目の主語が people（複数）のときは、動詞に s をつけない。People write ... が正しく、People writes ... とは書かない。`,
      },
      {
        heading: '2. なぜ in と on を使い分けるのか',
        level: 'oyo',
        body: `■ 月は in、日付は on
　Tanabata is in July.　（たなばたは7月です。）
　Tanabata is on July 7.　（たなばたは7月7日です。）

■ なぜ使い分けるのか
in は「広い入れ物の中」というイメージで、1か月のように長い期間に使う。on は「表面にぴったりついている」というイメージで、1日のように、ピンポイントで決まる日に使う。だから、月だけなら in、日付まで言うなら on になる。

■ 曜日・日付の言い方
　on Sunday（日曜日に）
　on January 1（1月1日に）
　in summer（夏に）
　in 2013（2013年に）

■ 出来事には年をそえる
和食の話をするときは、年も言うと、話がはっきりする。
　Washoku became a UNESCO Intangible Cultural Heritage in 2013.
　（和食は2013年に、ユネスコの無形文化遺産になりました。）
became は become（〜になる）の過去形である。

★ ここがポイント：**月・季節・年は in**、**日付・曜日は on**。範囲が広ければ in、ピンポイントなら on と考える。

⚠ 注意：on July 7 を in July 7 としない。日付まで言うときは on である。`,
      },
      {
        heading: '3. 日本の食べ物を紹介する：called と言いかえ',
        level: 'oyo',
        body: `■ This is called ～.
日本語の名前は、外国の人には知らないことが多い。called は「と呼ばれている」という意味で、名前を教える言い方になる。
　This is called onigiri.　（これは onigiri と呼ばれています。）
　We call it onigiri.　（わたしたちはそれを onigiri と呼びます。）

■ やさしい言いかえをそえる
名前のあとに、知っている語で説明を足すと、もっとよく伝わる。
　Onigiri is a rice ball.　（おにぎりは、ごはんのボールです。）
　Miso soup is a soup with miso.　（みそ汁は、みそを入れたスープです。）
　Natto is fermented soybeans.　（なっとうは、発酵させた大豆です。）

■ なぜ called を使うのか
「This is onigiri.」だけでは、onigiri が名前なのか、食べ物の種類なのかが、相手にはわからない。「called」をつけると、名前だと伝わる。called は「呼ばれている」という受け身の形である。

■ 和食の話
2013年12月に、「和食：日本人の伝統的な食文化」が、ユネスコの無形文化遺産に登録された。英語で紹介するときは、年をそえて言う。

★ ここがポイント：**This is called ～.** で名前を教え、**やさしい英語の言いかえ** をそえる。

⚠ 注意：called の ed をつけ忘れて、This is call onigiri. としない。「呼ばれている」と受け身の意味なので、called にする。`,
      },
      {
        heading: '4. 学校の紹介：給食とあいさつ',
        level: 'oyo',
        body: `■ 給食を紹介する
日本の学校の給食は、外国の人にめずらしがられる話題である。
　In many Japanese schools, students serve school lunch.
　（日本の多くの学校では、生徒が給食を配ります。）
　We eat lunch in the classroom.
　（わたしたちは教室で昼食を食べます。）

serve は「配る・出す」の意味である。

■ 「いただきます」の伝え方
日本語の「いただきます」を、そのまま英語にする言葉はない。意味が伝わるように、気持ちを言いかえる。
　Thank you for the food.　（食べ物に感謝します。）

■ なぜ言いかえるのか
言葉は、国によって、使う場面がちがう。「いただきます」のように、意味をそのまま訳しにくい言葉は、「何のためにその言葉を言うのか」という気持ちを伝えると、通じやすくなる。

■ 3文での紹介の例
　School lunch is a Japanese school custom. Students serve the food. I like it.
　（給食は日本の学校の習慣です。生徒が配ります。わたしは好きです。）

★ ここがポイント：訳しにくい言葉は、**気持ちや意味** で言いかえる。Thank you for the food. のように、**何のために言うか** を伝える。

⚠ 注意：日本語を英語に一語ずつ置きかえようとすると、不自然になる。意味が伝わる、やさしい言い方を選ぶ。`,
      },
      {
        heading: '5. 声に出して確かめる手順',
        level: 'oyo',
        body: `日本の文化を紹介する英文を書いたり話したりしたら、声に出して確かめる。

■ 手順
①3つの文を、はじめから声に出して読む。
②1文目が「何か」、2文目が「何をする」、3文目が「どう思う」になっているか確かめる。
③月や日付の前の in・on が合っているか確かめる。
④日本語の名前に、This is called ～. や言いかえをつけたか確かめる。
⑤聞く人が、知らなくてもわかるか、考えて読み直す。

■ なぜ声に出すのか
声に出して読むと、文と文のつながりが自然かどうかがわかるからである。長すぎる文や、聞きとりにくい言葉に気づける。

■ ふだんの練習
家族に、日本の行事を1つ選んで、3つの文で紹介してみる。相手が「もっと知りたい」と言ったら、成功である。

★ ここがポイント：**3つの文**、**in と on**、**called と言いかえ** の3か所を、声に出して確かめる。

⚠ 注意：覚えた文を、すらすら言うことがゴールではない。相手に伝わることが大切である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。Tanabata is（　）July 7.（in・on・at から選ぶ）',
        wrongAnswer: 'in',
        trapExplanation: '「7月」だから in だと思ってしまう。しかし、July 7 は月ではなく、日付まで言っている。',
        correctAnswer: 'on',
        correctExplanation: '日付や曜日には on を使う。July だけなら in July、July 7 のように日付まで言うなら on July 7 である。',
      },
      {
        question: '「これはおにぎりと呼ばれています。」を表す英文として正しいものを選びなさい。（This is call onigiri. ／ This is called onigiri.）',
        wrongAnswer: 'This is call onigiri.',
        trapExplanation: '「呼ぶ」の call をそのまま使ってしまう。「呼ばれている」という受け身の意味には、call の形では合わない。',
        correctAnswer: 'This is called onigiri.',
        correctExplanation: '「呼ばれている」は、be 動詞のあとに called を置く。This is called ～. で、名前を教える言い方になる。',
      },
    ],
  },
  // ────────────────────────────────────────────────────
  {
    id: 'nt_ntce_05',
    subject: 'eigo',
    examType: 'chugaku',
    studyPeriod: '小6後半・直前',
    order: 30455,
    targetLevel: 'oyo',
    title: 'スピーキングの型：先生の質問に「答え＋ひとこと」で答える',
    description: '面接形式のスピーキングで、Yes・Noのあとにひとこと足す型と、聞き返しの言い方を学ぶ',
    intro:
      '「Do you like sports?」と聞かれて、「Yes.」とだけ答えて、そのまま黙ってしまった。そんな経験はありませんか。話す力を見る試験がふえ、短く答えるだけでなく、自分の文をひとこと足す練習が大切になっています。答えやすい型を身につけましょう。',
    keyPoints: [
      'Yes, I do. で終わらず、ひとこと足す：Yes, I do. I play soccer on Sundays.',
      '質問のはじめの語に合わせて答える：Do → do、Can → can、Are → am・are',
      'No のときは、No, I don\'t. But I like ～. のように、But でつなぐ',
      'What で聞かれたら、Yes・No ではなく、文で答える',
      'Why? と聞かれたら、Because ～. で理由を言う。理由は1つで十分',
      '聞こえなかったら、Pardon? や Could you say that again, please? と聞き返す',
      '知らない語は、I don\'t know the word. と伝え、知っている語で言いかえる',
    ],
    sections: [
      {
        heading: '1. 「答え」＋「ひとこと」の2文',
        level: 'oyo',
        figureId: 'xf_nt_ntce_05',
        body: `先生の質問に答えるときは、短く答えるだけでなく、ひとこと足すと、話がよく伝わる。

■ 例
　先生：Do you like sports?（スポーツは好きですか。）
　あなた：Yes, I do. I play soccer on Sundays.
　（はい、好きです。日曜日にサッカーをします。）

■ No のとき
　先生：Do you like dogs?（犬は好きですか。）
　あなた：No, I don't. But I like cats.
　（いいえ。でも、ねこは好きです。）

■ ひとこと足す文は、短くてよい
　I play ～.（〜をします）
　I like ～.（〜が好きです）
　I have ～.（〜を持っています）
こうした文なら、小学生がふだん使っている語で足せる。

★ ここがポイント：Yes・No のあとに **ひとこと足す**。足す文は **短く、やさしい文** でよい。

⚠ 注意：No のあとは、そのまま黙らない。No, I don't. で終わらず、But ～. で、好きなものを言うと話が続く。`,
      },
      {
        heading: '2. なぜひとこと足すのか、なぜ質問の語に合わせるのか',
        level: 'oyo',
        body: `■ なぜひとこと足すのか
Yes, I do. だけでは、「好き」ということしか伝わらない。何をするのか、どんなふうに好きなのかは、相手にはわからない。話す力を見る場面では、自分で考えた文が出せるかが大切になる。ひとこと足せば、話が広がり、聞いている人も話しやすくなる。

■ なぜ質問の語に合わせて答えるのか
英語の質問は、文のはじめの語（Do・Can・Are）が、何をたずねているかを示している。同じ語で答えると、質問にきちんと答えたことが、すぐ相手に伝わる。
　Do you like dogs?　→　Yes, I do. / No, I don't.
　Can you swim?　→　Yes, I can. / No, I can't.
　Are you from Osaka?　→　Yes, I am. / No, I'm not.

■ なぜ答えの I は変わらないのか
質問の you は、あなた（相手）のことである。答えるのは自分なので、you は I に変わる。この入れかえは、人称の変化のきまりである。

■ What や Why の質問
What で聞かれたら、Yes・No では答えられない。文で答える。
　What is your favorite food?　→　I like curry.
Why? と聞かれたら、Because ～. で理由を言う。
　Why?　→　Because it is spicy.（辛いからです。）
理由は、1つ言えれば十分である。

★ ここがポイント：質問の **はじめの語** が、答えの形を決める。**Do → do、Can → can、Are → am・are**。**What は文で、Why は Because で** 答える。

⚠ 注意：Do you ～? に Yes, I like. と答えない。質問の語（do）をそのまま使う。`,
      },
      {
        heading: '3. 質問のタイプ別の答え方',
        level: 'oyo',
        body: `■ Yes・No で答える質問
　Do you ～?　→　Yes, I do. / No, I don't.
　Can you ～?　→　Yes, I can. / No, I can't.
　Are you ～?　→　Yes, I am. / No, I'm not.
どれも、答えのあとに、ひとこと足す。

■ 文で答える質問
　What do you do on weekends?（週末は何をしますか。）
　→ I play with my friends.（友だちと遊びます。）
　What is your favorite subject?（好きな教科は何ですか。）
　→ I like science.（理科が好きです。）

■ 理由をたずねる質問
　Why do you like science?（なぜ理科が好きですか。）
　→ Because experiments are fun.（実験が楽しいからです。）
because のあとは、主語と動詞のある文を続ける。

■ 組み合わせの例（3文）
　What is your favorite food?
　I like curry. It is spicy. I eat it every week.
　（カレーが好きです。辛いです。毎週食べます。）

★ ここがポイント：質問が **Yes・No** か、**What** か、**Why** かを、まず聞き分ける。聞き分けたら、その型に合った答えを返す。

⚠ 注意：Why? の答えに、Because だけで終わらせない。Because のあとに、主語と動詞のある文を続ける。`,
      },
      {
        heading: '4. 聞こえなかったとき・言葉が出ないとき',
        level: 'oyo',
        body: `■ 聞き返す
質問が聞き取れなかったら、だまらずに聞き返してよい。
　Pardon?　（もう一度お願いします。）
　Could you say that again, please?　（もう一度言っていただけますか。）
　Could you speak more slowly, please?　（もう少しゆっくりお願いします。）

■ 言葉が出ないとき
　I don't know the word.　（その言葉がわかりません。）
そのあと、知っている語で言いかえる。たとえば、「あじさい」という語を知らなくても、It is a blue flower. と言えば伝わる。

■ なぜ聞き返してよいのか
会話は、おたがいにわかり合うために行うものだからである。聞き取れないまま、まちがえた答えをするより、聞き返して正しく答えるほうが、よい会話になる。

■ つなぎの言葉
考える時間がほしいときは、Well, ...（ええと）と言うと、だまらずに時間をかせげる。

★ ここがポイント：**聞こえなければ聞き返す**。言葉が出なければ、**知っている語で言いかえる**。だまってしまうのがいちばんよくない。

⚠ 注意：聞き返すときも、小さな声でなく、相手に聞こえる声で言う。Pardon? の最後は、少し上げて言う。`,
      },
      {
        heading: '5. 声に出して確かめる手順',
        level: 'oyo',
        body: `スピーキングは、頭で考えるだけでなく、声に出す練習で上達する。

■ 手順
①質問を1つ決めて、声に出して答えてみる。
②1文目が、質問のはじめの語に合っているか確かめる。（Do → do）
③ひとこと足す文が、短くて、言いやすいか確かめる。
④Why? と聞かれた場合の Because の文も、あわせて言ってみる。
⑤最後に、聞き返しの言葉（Pardon?）も、声に出して言ってみる。

■ なぜ声に出すのか
スピーキングのテストは、声に出さなければ点にならない。ふだんから口を動かしておくと、本番で言葉が出やすくなる。

■ ふだんの練習
家族に先生役をしてもらい、5つの質問に答える。1日1回、3分でよい。答えるたびに、必ず「ひとこと」を足すと決めておく。

★ ここがポイント：**質問の語に合わせた答え**、**ひとこと**、**Because の理由**、**聞き返し** の4つを、声に出して練習する。

⚠ 注意：覚えた文を暗記して言うだけでは、質問が変わったときに対応できない。質問を聞いて、自分で文を作る練習をする。`,
      },
    ],
    trapExamples: [
      {
        question: 'Do you like dogs? に「はい、好きです。」と答える英文を選びなさい。（Yes, I like. ／ Yes, I do.）',
        wrongAnswer: 'Yes, I like.',
        trapExplanation: '日本語の「好きです」に引きずられて、like をそのまま使ってしまう。しかし、質問のはじめの語は do である。',
        correctAnswer: 'Yes, I do.',
        correctExplanation: 'Do you ～? とたずねられたら、do を使って Yes, I do. と答える。そのあとに、I have a dog. のようにひとこと足すと、話が伝わる。',
      },
      {
        question: 'Are you from Osaka? に「はい、そうです。」と答える英文を選びなさい。（Yes, I am. ／ Yes, I do.）',
        wrongAnswer: 'Yes, I do.',
        trapExplanation: 'Yes の答えは Yes, I do. だと覚えてしまい、質問のはじめの語を見ない。',
        correctAnswer: 'Yes, I am.',
        correctExplanation: '質問が Are you ～? のときは、be 動詞で答える。I のときの be 動詞は am なので、Yes, I am. が正しい。',
      },
    ],
  },
];
