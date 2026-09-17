import type { Lesson } from './lesson-types';

// 中学受験 英語「小4の土台」拡張ユニット
// （24セッション：eigo_s451〜eigo_s474、order 951〜974、すべて studyPeriod: '小4'）
// 小4の既存57単元はフォニックスの前半・be動詞・名詞・語彙にかたよっており、
// 一般動詞・前置詞・命令文・疑問詞がまるごと抜けていた。
// 構成：音と文字6／文のしくみ8／語彙と会話8／読み書き2
// 小4向けなので、むずかしい文法用語は使わず、例文で示す。
// 図解は付けていない（本文は言葉と箇条書きだけで完結するように書く）。
export const eigoExt13Lessons: Lesson[] = [
  // ── 音と文字（s451〜s456） ──
  {
    id: 'eigo_s451',
    subject: 'eigo',
    examType: 'chugaku',
    title: '音と文字①：二文字で一つの音（sh・ch・th・ph・wh）',
    description: '二つの文字が合わさって別の音になる組み合わせを覚える',
    intro:
      'アルファベットは一文字ずつ音をもっていますが、二文字が合わさると、まったくちがう音になることがあります。覚える組み合わせは5つだけです。',
    order: 951,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'sh は「シュ」に近い音。ship、fish、she。',
      'ch は「チ」に近い音。chair、lunch、cheese。',
      'th には二つの音がある。this のにごる音と、think のにごらない音。',
      'ph は f と同じ音になる。phone、elephant。',
      'wh は「ホワ」に近い音。white、what、when。',
      'ck は語の終わりで k の音になる。black、duck。',
    ],
    sections: [
      {
        heading: 'おぼえる組み合わせ',
        body: `■ sh
シュに近い音。
ship（船）／fish（魚）／she（かのじょ）／shop（店）／wash（あらう）

■ ch
チに近い音。
chair（いす）／lunch（昼食）／cheese（チーズ）／chicken（にわとり）／teacher（先生）

■ th
二つの音がある。
・にごる音：this（これ）／that（あれ）／they（かれら）／mother（お母さん）
・にごらない音：think（考える）／three（3）／month（月）／bath（ふろ）
どちらも、舌の先を上と下の歯ではさんで出す音である。

■ ph
f と同じ音になる。
phone（電話）／photo（写真）／elephant（ぞう）／alphabet（アルファベット）

■ wh
ホワに近い音。たずねる言葉の多くがこれで始まる。
what（何）／when（いつ）／where（どこ）／which（どちら）／white（白い）／why（なぜ）
※ who（だれ）だけは「フー」と読む。w の音が出ない。

■ ck
語の終わりで k の音になる。
black（黒い）／duck（あひる）／clock（時計）／rock（岩）／back（うしろ）

★ ポイント：二文字で一つの音になる組み合わせは、切りはなして読まない。sh を「エス・エイチ」ではなく、まとめて一つの音として読む。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 読む練習
次の語を、二文字のかたまりに気をつけて読む。
shop／chair／think／phone／white／clock

■ 書く練習
音を聞いて、どの組み合わせかを選ぶ。
・「シュ」の音が聞こえたら sh
・「チ」の音が聞こえたら ch
・「フ」の音でも、f のときと ph のときがある

■ まちがえやすいところ
・ch は「チ」だが、school、Christmas では「ク」の音になる
・th の二つの音は、日本語にない音なので、口の形をまねて練習する
・wh の who だけは例外

■ 語のはじめと終わり
・sh、ch は語のはじめにも終わりにも来る（ship、fish／chair、lunch）
・ck は語の終わりだけに来る（語のはじめには来ない）
・ph は語のどこにでも来る（phone、alphabet、graph）

■ おぼえ方
同じかたまりをもつ語を、3つずつ並べて書くと覚えやすい。
sh：ship、shop、fish
ch：chair、chicken、lunch
th：this、think、three

⚠ 注意：th を「ス」や「ズ」だけで覚えると、think と sink、this と ジス の区別がつかなくなる。舌を歯ではさむ、という動きをセットで覚えること。`,
      },
    ],
    trapExamples: [
      {
        question: 'who の wh は、white や what と同じ音ですか。',
        wrongAnswer: '同じ音である。どちらも wh で始まるから。',
        trapExplanation:
          '同じつづりなら同じ音だと考えてしまう。who だけは例外である。',
        correctAnswer: 'ちがう。who は「フー」と読み、w の音が出ない。',
        correctExplanation:
          'wh で始まる語の多くは white、what、when のように「ホワ」に近い音になるが、who だけは「フー」と読む。同じように whose、whole も「フ」の音で始まる。例外として一つずつ覚えておくこと。',
      },
      {
        question: 'school の ch は「チ」の音ですか。',
        wrongAnswer: 'ch なので「チ」の音である。',
        trapExplanation:
          'ch はいつも「チ」だと決めつけてしまう。語によっては「ク」の音になる。',
        correctAnswer: 'ちがう。school の ch は「ク」の音である。',
        correctExplanation:
          'ch は chair や lunch のように「チ」と読むことが多いが、school、Christmas、stomach などでは「ク」の音になる。数は多くないので、出てきたときに一つずつ覚えるとよい。',
      },
    ],
  },
  {
    id: 'eigo_s452',
    subject: 'eigo',
    examType: 'chugaku',
    title: '音と文字②：r のついた母音（ar・er・ir・or・ur）',
    description: '母音の後ろに r が来たときの、日本語にない音を身につける',
    intro:
      '母音の後ろに r が来ると、音が変わります。car、bird、turn の音は、日本語にはありません。まとまりごと覚えるのがいちばん速い方法です。',
    order: 952,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'ar は「アー」に近い音。car、park、star。',
      'or は「オー」に近い音。short、morning、fork。',
      'er、ir、ur は同じ「アー」に近い音になる。',
      'er の例：teacher、sister、water。',
      'ir の例：bird、girl、first。',
      'ur の例：turn、nurse、Thursday。',
    ],
    sections: [
      {
        heading: 'おぼえる組み合わせ',
        body: `■ ar
「アー」に近い音。口を大きく開ける。
car（車）／park（公園）／star（星）／card（カード）／farm（農場）／dark（暗い）

■ or
「オー」に近い音。
short（短い）／morning（朝）／fork（フォーク）／sport（スポーツ）／north（北）／horse（馬）

■ er・ir・ur は同じ音
三つとも、あいまいな「アー」の音になる。つづりがちがっても、音は同じである。
・er：teacher（先生）／sister（姉妹）／water（水）／winter（冬）／computer
・ir：bird（鳥）／girl（女の子）／first（一番目の）／shirt（シャツ）／thirty（30）
・ur：turn（まわる）／nurse（看護師）／Thursday（木曜日）／purple（むらさき）

同じ音なのにつづりが三通りあるので、書くときはつづりを一つずつ覚えるしかない。

■ 語の終わりの er
人を表すことが多い。
teach（教える）→ teacher（先生）
play（遊ぶ）→ player（選手）
sing（歌う）→ singer（歌手）
farm（農場）→ farmer（農場主）

■ 気をつけること
・r は日本語のラ行とはちがう音。舌を口の中で丸めるようにする
・ar と or の区別は、口の開け方でつける

★ ポイント：er・ir・ur は音が同じ。聞いただけではつづりが決まらないので、語ごとに書いて覚える。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 読む練習
car／park／short／teacher／bird／turn

■ 書く練習
同じ音の語を、つづりのグループに分けて書く。
er：teacher、sister、water
ir：bird、girl、first
ur：turn、nurse、Thursday

■ 意味とセットで覚える
・park（公園）と part（部分）
・first（一番目）と fast（速い）
・short（短い）と shot（打つこと）
つづりが似ている語は、意味もいっしょに覚えると混ざらない。

■ 数を表す語
thirteen（13）／thirty（30）／thirty-one（31）
どれも ir を使う。three（3）とつづりがちがうので注意する。

■ 曜日
Thursday（木曜日）の ur。Tuesday（火曜日）とまちがえやすい。
・Tuesday は火曜日
・Thursday は木曜日
どちらも T で始まるので、2番目の文字で見分ける。

⚠ 注意：er・ir・ur は音が同じなので、聞いて書く問題では正しいつづりを選べない。語ごとに形を覚えておくこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'bird、girl、first はどのつづりのなかまですか。',
        wrongAnswer: 'er のなかま。音が「アー」だから。',
        trapExplanation:
          '音が同じなのでつづりも同じだと考えてしまう。er・ir・ur は音が同じでつづりがちがう。',
        correctAnswer: 'ir のなかま',
        correctExplanation:
          'bird、girl、first、shirt、thirty はすべて ir を使う。teacher、sister、water は er、turn、nurse、Thursday は ur である。音は三つとも同じなので、語ごとにつづりを覚えるしかない。書いて覚えるのがいちばん確実である。',
      },
      {
        question: 'thirteen（13）と three（3）は、同じつづりの部分をもっていますか。',
        wrongAnswer: 'どちらも「サーティ」に近い音なので、同じ thr で始まり同じつづりである。',
        trapExplanation:
          '音が似ているので、つづりも同じだと思ってしまう。母音の部分がちがう。',
        correctAnswer: 'ちがう。three は ee、thirteen は ir を使う。',
        correctExplanation:
          'three は th＋r＋ee、thirteen は th＋ir＋teen である。13、30 は ir を使い、3 は ee を使う。thirteen と thirty は ir でそろっているので、この二つをセットで覚えると混ざらない。',
      },
    ],
  },
  {
    id: 'eigo_s453',
    subject: 'eigo',
    examType: 'chugaku',
    title: '音と文字③：二つの母音がならぶとき',
    description: 'oi・oy・ou・ow・au・aw などの組み合わせを音でとらえる',
    intro:
      '母音が二つならぶと、一つの音になったり、すべるような音になったりします。よく出る組み合わせを、語といっしょに覚えましょう。',
    order: 953,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'oi と oy は「オイ」に近い音。coin、boy。',
      'ou と ow は「アウ」に近い音になることがある。house、cow。',
      'ow は「オウ」に近い音になることもある。snow、window。',
      'au と aw は「オー」に近い音。autumn、saw。',
      'oo には長い音と短い音がある。food と book。',
      '同じつづりでも語によって音がちがうことがあるので、語ごとに覚える。',
    ],
    sections: [
      {
        heading: 'おぼえる組み合わせ',
        body: `■ oi・oy
「オイ」に近い音。
・oi は語の中に：coin（コイン）／point（点）／oil（油）／voice（声）
・oy は語の終わりに：boy（男の子）／toy（おもちゃ）／enjoy（楽しむ）

■ ou・ow（アウの音）
house（家）／mouse（ねずみ）／out（外へ）／about（〜について）
cow（牛）／now（今）／how（どのように）／flower（花）／town（町）

■ ow（オウの音）
同じ ow でも、別の音になることがある。
snow（雪）／window（まど）／yellow（黄色）／know（知っている）／slow（おそい）
どちらの音かは、語ごとに覚える。

■ au・aw
「オー」に近い音。
autumn（秋）／because（なぜなら）
saw（のこぎり、see の過去形）／draw（絵をかく）／straw（ストロー）

■ oo
二つの音がある。
・長い「ウー」：food（食べ物）／school（学校）／moon（月）／room（部屋）
・短い「ウ」：book（本）／look（見る）／good（よい）／foot（足）

■ ea
・長い「イー」：eat（食べる）／read（読む）／sea（海）／teacher（先生）
・短い「エ」：bread（パン）／head（頭）／ready（準備ができた）

★ ポイント：同じつづりでも二つの音があるものがある。oo と ea と ow の三つがその代表である。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 音で分ける練習
oo の長い音と短い音を、二つのグループに分けて書く。
長い：food、school、moon、room
短い：book、look、good、foot

■ 読みまちがえやすい語
・cow（牛、アウ）と snow（雪、オウ）
・read の現在形（イー）と過去形（エ）は、つづりが同じで音がちがう
・live は「住む」なら短い音、「生きている」の意味の形容詞なら長い音

■ セットで覚える語
・house と mouse（アウ）
・boy と toy（オイ）
・book と look と good（短いウ）
・snow と window と yellow（オウ）
同じ音の語をまとめて書くと、つづりも覚えやすい。

■ 日本語にすると消える音
・oi の「オイ」は日本語にもあるので覚えやすい
・au、aw の「オー」は、日本語ののばす音とは少しちがう

⚠ 注意：ow は「アウ」にも「オウ」にもなる。cow（アウ）と snow（オウ）を必ずセットで覚えて、どちらの音かを語ごとに確かめること。`,
      },
    ],
    trapExamples: [
      {
        question: 'book と food の oo は同じ音ですか。',
        wrongAnswer: '同じ oo なので、どちらも長い「ウー」の音である。',
        trapExplanation:
          '同じつづりなら同じ音だと考えてしまう。oo には長い音と短い音がある。',
        correctAnswer: 'ちがう。book は短い「ウ」、food は長い「ウー」の音である。',
        correctExplanation:
          'oo には二つの音がある。短い音は book、look、good、foot など。長い音は food、school、moon、room など。数が多くないので、それぞれのグループを3〜4語ずつ覚えておけば判断できる。',
      },
      {
        question: 'cow と snow の ow は同じ音ですか。',
        wrongAnswer: '同じ ow なので、どちらも「オウ」である。',
        trapExplanation:
          'つづりが同じなら音も同じだと思ってしまう。ow は語によって音が変わる。',
        correctAnswer: 'ちがう。cow は「アウ」、snow は「オウ」の音である。',
        correctExplanation:
          'ow には「アウ」の音（cow、now、how、town、flower）と「オウ」の音（snow、window、yellow、know、slow）がある。つづりだけでは決まらないので、語ごとに覚える。cow と snow を対にして覚えておくと、どちらの音かを思い出しやすい。',
      },
    ],
  },
  {
    id: 'eigo_s454',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数字③：順番を表す言い方と日付',
    description: '1番目・2番目という言い方を覚え、日付が言えるようにする',
    intro:
      '「1つ」と「1番目」は、英語ではちがう言い方をします。日付を言うときはこの「1番目」の形を使うので、あわせて覚えてしまいましょう。',
    order: 954,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '順番を表す言い方は、多くの場合 数字に th をつける。',
      '1番目・2番目・3番目だけは形がちがう。first、second、third。',
      '5番目は fifth、9番目は ninth、12番目は twelfth と、つづりが変わる。',
      '20番目は twentieth、30番目は thirtieth。y を ie に変えて th をつける。',
      '日付は、この順番の言い方を使う。',
      '数字で書くときは 1st、2nd、3rd、4th のように、最後の2文字をそえる。',
    ],
    sections: [
      {
        heading: '言い方をおぼえる',
        body: `■ 基本は th をつける
four → fourth（4番目）
six → sixth（6番目）
seven → seventh（7番目）
ten → tenth（10番目）
eleven → eleventh（11番目）

■ 形が変わるもの
one → first（1番目）
two → second（2番目）
three → third（3番目）
five → fifth（5番目）
eight → eighth（8番目）
nine → ninth（9番目。e が消える）
twelve → twelfth（12番目。ve が f に変わる）
twenty → twentieth（20番目。y が ie になる）
thirty → thirtieth（30番目）

■ 21番目から
一の位だけを順番の形にする。
twenty-one → twenty-first（21番目）
twenty-two → twenty-second（22番目）
twenty-three → twenty-third（23番目）
thirty-one → thirty-first（31番目）

■ 数字で書くとき
1st、2nd、3rd、4th、5th、…、11th、12th、13th、…、21st、22nd、23rd、…、31st
最後の2文字をそえる。11th、12th、13th は first、second、third の形にならないので th をつける。

■ 日付の言い方
月 → 日 の順で言う。
・May 5th（5月5日）
・July 20th（7月20日）
・January 1st（1月1日）
書くときは May 5 のように数字だけでもよいが、読むときは fifth と読む。

■ たずね方と答え方
What's the date today?（今日は何日ですか）
It's October 10th.（10月10日です）

★ ポイント：1・2・3だけ特別、あとは th。この一言で、ほとんどの数がつくれる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 言ってみる
・自分のたん生日を英語で言う
　My birthday is April 3rd.
・今日の日付を言う
　Today is June 15th.

■ 順番を使う言い方
・the first day（最初の日）
・the second floor（2階）
・the third question（3番目の問題）
順番を表す語の前には、ふつう the をつける。

■ 月の名前
January（1月）／February（2月）／March（3月）／April（4月）／May（5月）／June（6月）
July（7月）／August（8月）／September（9月）／October（10月）／November（11月）／December（12月）
月の名前は、いつも大文字で書き始める。

■ まちがえやすいところ
・ninth は nine から e が消える
・twelfth は twelve の ve が f に変わる
・twentieth は twenty の y が ie になる
・13th は thirteenth（thirteen ＋ th）

■ 曜日との組み合わせ
Sunday, May 5th（5月5日 日曜日）
曜日 → 月 → 日 の順に書くことが多い。

⚠ 注意：日本語は「5月5日」と月から言うが、日付の数字は順番の形（fifth）で読む。「ファイブ」ではなく「フィフス」と読むこと。`,
      },
    ],
    trapExamples: [
      {
        question: '9番目を英語で書きなさい。',
        wrongAnswer: 'nineth',
        trapExplanation:
          'nine にそのまま th をつけてしまった。9番目は e が消える。',
        correctAnswer: 'ninth',
        correctExplanation:
          'nine から e を取って th をつけ、ninth となる。同じように形が変わるのは、five → fifth、twelve → twelfth、twenty → twentieth である。この4つだけ特別だと覚えておけばよい。',
      },
      {
        question: '「4月21日」を英語で書きなさい。',
        wrongAnswer: 'April 21th',
        trapExplanation:
          '一の位が1なのに th をつけてしまった。21は first の形になる。',
        correctAnswer: 'April 21st',
        correctExplanation:
          '21は twenty-first なので、数字では 21st と書く。同じように 22nd（twenty-second）、23rd（twenty-third）、31st（thirty-first）となる。ただし 11th、12th、13th は例外で、th をつける。一の位だけを見て決めること。',
      },
    ],
  },
  {
    id: 'eigo_s455',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時こくの言い方',
    description: '何時何分をたずねる言い方と、答え方の型を覚える',
    intro:
      '時こくの言い方には、数字をそのまま読む言い方と、「〜分すぎ」「〜分前」という言い方があります。まずは数字をそのまま読む形から覚えましょう。',
    order: 955,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '時こくをたずねるときは What time is it?。',
      "答えは It's で始める。It's seven.（7時です）",
      "ちょうどの時こくは o'clock をつけてもよい。It's seven o'clock.",
      "何時何分は、時 → 分 の順に数字を読む。It's seven thirty.",
      '30分は half past ~、15分は a quarter past ~ とも言う。',
      '「〜時に」は at をつける。at seven（7時に）',
    ],
    sections: [
      {
        heading: '言い方をおぼえる',
        body: `■ たずね方
What time is it?（今、何時ですか）
What time is it now? と now をつけてもよい。

■ 答え方（基本）
It's で始める。
・It's seven.（7時です）
・It's seven o'clock.（7時ちょうどです）
o'clock はちょうどの時こくのときだけ使う。7時30分に o'clock はつけない。

■ 何時何分
時 → 分 の順に、数字をそのまま読む。
・It's seven thirty.（7時30分）
・It's eight fifteen.（8時15分）
・It's nine forty-five.（9時45分）
・It's ten oh five.（10時5分）
　分が1けたのときは、0を oh（オウ）と読む。

■ 別の言い方
・half past seven（7時半）
・a quarter past eight（8時15分）
・a quarter to nine（9時15分前＝8時45分）
past は「すぎ」、to は「前」。小4のうちは、まず数字をそのまま読む形を確実にする。

■ 時こくを表す文
・I get up at six.（わたしは6時に起きます）
・School starts at eight thirty.（学校は8時30分に始まります）
・Let's meet at three.（3時に会いましょう）
「〜時に」と言うときは at をつける。

■ 午前と午後
・in the morning（午前中に）
・in the afternoon（午後に）
・at night（夜に）
・a.m.（午前）／p.m.（午後）

★ ポイント：答えはいつも It's で始める。時こくの it は「それ」という意味ではなく、決まった言い方である。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 読む練習
6:00 → It's six.（It's six o'clock.）
7:15 → It's seven fifteen.
8:30 → It's eight thirty.
9:45 → It's nine forty-five.
10:05 → It's ten oh five.

■ 一日の生活を言ってみる
I get up at six thirty.（6時30分に起きます）
I have breakfast at seven.（7時に朝ごはんを食べます）
I go to school at eight.（8時に学校へ行きます）
I go to bed at nine thirty.（9時30分にねます）

■ たずね方いろいろ
・What time do you get up?（何時に起きますか）
　→ I get up at six.
・What time does the movie start?（映画は何時に始まりますか）
　→ It starts at four.

■ まちがえやすいところ
・o'clock はちょうどのときだけ
・答えの主語は it。I is ~ や This is ~ とはしない
・「〜時に」は at。in や on は使わない

■ 曜日・日付との前置詞のちがい
・時こく → at（at seven）
・曜日・日付 → on（on Monday、on May 5th）
・月・年・季節 → in（in May、in 2026、in summer）
この三つは、次の単元でもくわしく学ぶ。

⚠ 注意：7時30分を It's seven thirty o'clock. とは言わない。o'clock はちょうどの時こくだけにつける。`,
      },
      {
        heading: 'なぜ答えは It\'s で始め、なぜ o\'clock はちょうどのときだけなのか',
        body: `英語の文には必ず主語が要ります。「7時です」には「何が」にあたることばがないので、**形をそろえるための It** を主語に置きます。この It は「それ」という意味ではなく、天気や曜日を言うときと同じ決まった言い方です。I is 〜 や This is 〜 とはしません。「〜時に」に at を使うのは、時こくが時計の針が一か所を指す**点**だからで、幅のある月や季節には in、日には on を使います。

o'clock は「〜時ちょうど」という意味のことばです。だから分があるとき（seven thirty）には付けられません。分が1けたのときに 0 を oh と読む（ten oh five）のは、時こくを数字の並びとして読む決まりです。past・to の言い方は、まず数字をそのまま読む形を確実にしてから覚えます。

■ 確かめのしかた
①答えが **It's** で始まっているか。What time is it?→It's seven.
②**ちょうどのときだけ o'clock**。It's seven o'clock.／It's seven thirty.（× seven thirty o'clock）。
③時→分の順に数字を読む。分が1けたなら oh（It's ten oh five.）。
④「〜時に」は **at**（I get up at six.）。曜日・日付は on、月・年・季節は in。× I get up in seven.

★ ここがポイント：時こくの文は**主語が無いので It's で形をそろえる**。o'clock は**ちょうどのときだけ**。「〜時に」は時こくが**点**なので at。`,
      },
    ],
    trapExamples: [
      {
        question: '「8時45分です」を英語で言いなさい。',
        wrongAnswer: "It's eight forty-five o'clock.",
        trapExplanation:
          "o'clock をいつでもつけられると考えてしまう。o'clock はちょうどの時こくだけに使う。",
        correctAnswer: "It's eight forty-five.",
        correctExplanation:
          "o'clock は「ちょうど〜時」という意味なので、分があるときにはつけない。It's eight forty-five. または a quarter to nine（9時15分前）と言う。ちょうど8時なら It's eight o'clock. と言える。",
      },
      {
        question: '「わたしは7時に起きます」を英語で言いなさい。',
        wrongAnswer: 'I get up in seven.',
        trapExplanation:
          '時を表す語をすべて in だと考えてしまう。時こくには at を使う。',
        correctAnswer: 'I get up at seven.',
        correctExplanation:
          '時こくには at、曜日や日付には on、月や年や季節には in を使う。at seven（7時に）、on Monday（月曜日に）、in May（5月に）と、それぞれ対にして覚えること。',
      },
    ],
  },
  {
    id: 'eigo_s456',
    subject: 'eigo',
    examType: 'chugaku',
    title: '英語を書くときのきまり',
    description: '大文字・ピリオド・語と語の間など、書き方の決まりを覚える',
    intro:
      '英語の文には、日本語にない決まりがあります。文の最初は大文字、終わりはピリオド。数は少ないので、ここで覚えてしまえば一生使えます。',
    order: 956,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '文の最初の文字は、必ず大文字で書く。',
      '文の終わりにはピリオド（.）をつける。',
      'たずねる文の終わりにはクエスチョンマーク（?）をつける。',
      'I（わたしは）は、文のどこにあっても大文字で書く。',
      '人の名前・地名・曜日・月の名前は、いつも大文字で書き始める。',
      '語と語の間は、必ず一つ分あける。',
    ],
    sections: [
      {
        heading: '書き方のきまり',
        body: `■ 大文字で書き始めるもの
・文の最初の文字
　This is my book.
・I（わたしは）
　Tom and I are friends.（文のとちゅうでも大文字）
・人の名前
　Ken／Mary／Mr. Brown
・地名・国名
　Japan／Tokyo／America
・曜日
　Sunday／Monday／Tuesday
・月の名前
　January／February／March
・言語や国の人を表す語
　English／Japanese

日本語では曜日や月を特別に書き分けないので、忘れやすい。

■ 文の終わりの記号
・ふつうの文 → ピリオド（.）
　I like dogs.
・たずねる文 → クエスチョンマーク（?）
　Do you like dogs?
・強い気持ちを表す文 → エクスクラメーションマーク（!）
　Look!／Wow!

■ 語と語の間
必ず一つ分あける。日本語のようにつめて書かない。
誤：Ilikedogs.
正：I like dogs.

■ コンマ（,）
・三つ以上ならべるとき
　I like apples, oranges, and bananas.
・呼びかけのあと
　Hello, Ken.
・曜日と日付の間
　Sunday, May 5th

■ アポストロフィ（'）
・短くした形
　I am → I'm／is not → isn't／it is → it's
・「〜の」を表すとき
　Ken's book（ケンの本）

★ ポイント：「文の最初は大文字、終わりはピリオド」。この二つを外すと、正しく書けていても減点される。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 直してみる
誤：i like music
正：I like music.
（I を大文字に、最後にピリオド）

誤：do you play soccer
正：Do you play soccer?
（最初を大文字に、最後にクエスチョンマーク）

誤：my birthday is may 5th
正：My birthday is May 5th.
（最初と月の名前を大文字に）

■ 4本線に書くとき
・大文字は上の3本を使う
・小文字は多くが真ん中の2本の中に入る
・b、d、f、h、k、l、t は上にのびる
・g、j、p、q、y は下にのびる

■ まちがえやすい文字
・b と d（丸の向きがちがう）
・p と q
・大文字の I と小文字の l（アイとエル）
・数字の1と小文字の l

■ 見直しのしかた
書き終えたら、次の順で確かめる。
①文の最初は大文字か
②最後にピリオドかクエスチョンマークがあるか
③I は大文字か
④名前・曜日・月の名前は大文字か
⑤語と語の間はあいているか

⚠ 注意：たずねる文にピリオドをつけてしまう失点が多い。Do や What で始まる文は、クエスチョンマークで終わる。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしはケンです」を英語で正しく書きなさい。',
        wrongAnswer: 'i am ken',
        trapExplanation:
          '大文字とピリオドの決まりを両方落としている。I と人の名前は必ず大文字である。',
        correctAnswer: 'I am Ken.',
        correctExplanation:
          'I は文のどこにあっても大文字、人の名前 Ken も大文字で書き始める。そして文の終わりにはピリオドをつける。この3点を確かめる習慣をつけると、書く問題での失点がなくなる。',
      },
      {
        question: '「あなたはサッカーが好きですか」を英語で正しく書きなさい。',
        wrongAnswer: 'Do you like soccer.',
        trapExplanation:
          '文の最初は大文字にできているが、終わりの記号がちがう。たずねる文はクエスチョンマークで終わる。',
        correctAnswer: 'Do you like soccer?',
        correctExplanation:
          'Do や Does、What や Where で始まるたずねる文は、終わりにクエスチョンマーク（?）をつける。ピリオドをつけると、たずねる文であることが伝わらない。書き終えたら、文の種類と記号が合っているかを確かめること。',
      },
    ],
  },
  // ── 文のしくみ（s457〜s464） ──
  {
    id: 'eigo_s457',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞①：「〜します」の文',
    description: 'be動詞ではない動きを表す語で、ふつうの文をつくれるようにする',
    intro:
      '「わたしは学生です」は be動詞の文でした。「わたしはサッカーをします」のように、動きを表す文は別の形になります。ならべる順番は同じです。',
    order: 957,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '動きや気持ちを表す語を一般動詞という。play、like、go、eat など。',
      '文の形は 主語 → 動詞 → そのほか の順にならべる。',
      'I play soccer.（わたしはサッカーをします）',
      'be動詞（am・is・are）と一般動詞は、同じ文の中にならべない。',
      '「〜が好きです」は like を使う。I like dogs.',
      '日本語と語順がちがう。英語は「だれが → どうする → 何を」の順。',
    ],
    sections: [
      {
        heading: '文のつくり方',
        body: `■ 一般動詞とは
動きや気持ちを表す語。
play（する・遊ぶ）／like（好きだ）／go（行く）／eat（食べる）／read（読む）／study（勉強する）／have（持っている）／want（ほしい）／run（走る）／swim（泳ぐ）

■ ならべる順番
主語 → 動詞 → そのほか
・I play soccer.（わたしはサッカーをします）
・I like music.（わたしは音楽が好きです）
・You study English.（あなたは英語を勉強します）
・We eat lunch at twelve.（わたしたちは12時に昼食を食べます）

日本語は「わたしは サッカーを します」の順だが、英語は「わたしは します サッカーを」の順になる。ここが最初のつまずきどころである。

■ be動詞との区別
・be動詞（am・is・are）は「〜です」「〜がいる」を表す
　I am a student.（わたしは学生です）
・一般動詞は「〜します」を表す
　I play tennis.（わたしはテニスをします）

同じ文の中に両方を入れてはいけない。
誤：I am play tennis.
正：I play tennis.

■ よく使う文
・I like ~.（わたしは〜が好きです）
・I have ~.（わたしは〜を持っています）
・I want ~.（わたしは〜がほしいです）
・I go to ~.（わたしは〜へ行きます）
　go のあとには to をつける。go to school、go to the park

■ 主語が you、we、they のとき
形は I のときと同じ。
・You like dogs.
・We play baseball.
・They study math.

★ ポイント：英語は「だれが → どうする → 何を」。この順番を声に出しながら並べると、まちがえにくい。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 日本語から英語へ
・わたしはピアノをひきます。→ I play the piano.
　楽器には the をつける。
・わたしは犬が好きです。→ I like dogs.
　「犬が好き」は、ふつう複数形にする。
・わたしは毎日本を読みます。→ I read a book every day.

■ 「〜へ行く」
go のあとに to を入れる。
・I go to school.（学校へ行く）
・I go to the library.（図書館へ行く）
ただし home には to をつけない。
・I go home.（家へ帰る）

■ まちがえやすいところ
・be動詞と一般動詞を両方入れてしまう（I am play ~）
・語順を日本語のままにしてしまう（I soccer play）
・go to の to を落としてしまう

■ よく使う語のならび
・at school（学校で）／at home（家で）
・every day（毎日）／every morning（毎朝）
・after school（放課後に）
これらは文の終わりに置くことが多い。
・I play soccer after school.（放課後にサッカーをします）

■ 3人称のときは形が変わる
He や She が主語のときは、動詞の形が変わる。これは次の単元で学ぶ。

⚠ 注意：like のあとに来る動物や食べ物は、ふつう複数形にする。I like dog. だと「犬の肉が好き」という意味になってしまう。I like dogs. が正しい。`,
      },
      {
        heading: 'なぜ英語は「だれが→どうする→何を」の順で、なぜ am と play を並べないのか',
        body: `日本語は「わたしは サッカーを します」と、動作を最後に言います。英語は「わたしは します サッカーを」と、**だれが何をするかを先に言い、そのあとに相手を足す**ことばです。だから語順は主語→動詞→そのほか。この順を声に出しながら並べると、日本語のまま I soccer play と書く誤りが減ります。

am・is・are（be動詞）は「〜です・〜がいる」を表す語で、play・like（一般動詞）は「〜します」を表す語です。一つの文には動詞が一つなので、I am play tennis. のように両方入れると、「です」と「します」が重なって意味が通りません。「です」の文なら be動詞、「します」の文なら一般動詞と分けます。go のあとに to が要るのは、go が「行く」という動きだけを表し、「どこへ」を表す語が別に必要だからです。home は「家へ」という意味をすでに持つので to を付けません。

■ 確かめのしかた
①**だれが→どうする→何を**の順か。I play soccer.（× I soccer play.）
②文の中に動詞が一つか。× I am play tennis.→I play tennis.「です」なら be動詞、「します」なら一般動詞。
③go のあとに **to** があるか（go to school／go to the park）。home には付けない（go home）。
④楽器には the（play the piano）、好きなものは複数形（I like dogs. ／ I like dog. は犬の肉）。at school・every day・after school は文の終わりに。

★ ここがポイント：英語は**だれが何をするかを先に言う**ので、主語→動詞→そのほか。**一つの文に動詞は一つ**なので be動詞と一般動詞を並べない。go は「どこへ」の to が要る（home は不要）。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしはサッカーをします」を英語で書きなさい。',
        wrongAnswer: 'I am play soccer.',
        trapExplanation:
          'be動詞と一般動詞をならべてしまった。「〜します」の文に am は必要ない。',
        correctAnswer: 'I play soccer.',
        correctExplanation:
          'be動詞（am・is・are）は「〜です」を表す語なので、「〜します」という動きの文には使わない。同じ文の中に be動詞と一般動詞を両方入れることはできない。「です」の文なら be動詞、「します」の文なら一般動詞、と分けて考えること。',
      },
      {
        question: '「わたしは学校へ行きます」を英語で書きなさい。',
        wrongAnswer: 'I go school.',
        trapExplanation:
          'go のあとの to を落としてしまった。「〜へ」を表す語が必要である。',
        correctAnswer: 'I go to school.',
        correctExplanation:
          'go は「行く」という意味だけなので、「どこへ」を表すには to が必要である。go to school、go to the park、go to bed のように使う。ただし home は「家へ」という意味をすでにもっているので、go home と言い、to はつけない。',
      },
    ],
  },
  {
    id: 'eigo_s458',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞②：he・she のときは s がつく',
    description: '主語が1人の他人のとき、動詞の形が変わることを覚える',
    intro:
      '主語が he や she のとき、動詞のおしりに s がつきます。理由を考えるより、「he・she・it なら s」と形で覚えるのが近道です。',
    order: 958,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '主語が he、she、it、または1人・1つのものなら、動詞に s をつける。',
      'I、you、we、they のときは s をつけない。',
      's、x、ch、sh、o で終わる動詞には es をつける。go → goes、watch → watches。',
      '子音字＋y で終わる動詞は、y を i に変えて es をつける。study → studies。',
      'have だけは形が変わる。have → has。',
      '名前（Ken、my father など）1人も、he や she と同じあつかいになる。',
    ],
    sections: [
      {
        heading: '形の変え方',
        body: `■ s をつける主語
he（かれ）／she（かのじょ）／it（それ）
そして、1人・1つを表す名前やもの。
・Ken plays tennis.（ケンはテニスをします）
・My mother cooks dinner.（母は夕食を作ります）
・The dog runs fast.（その犬は速く走ります）

■ s をつけない主語
I／you／we／they、そして2人以上・2つ以上のもの。
・I play tennis.
・They play tennis.
・My friends play tennis.

■ つけ方の決まり
①ふつうは s をつける
　play → plays／like → likes／run → runs／read → reads

②s、x、ch、sh、o で終わる語は es をつける
　go → goes／do → does／watch → watches／wash → washes／teach → teaches

③子音字＋y で終わる語は、y を i に変えて es
　study → studies／try → tries／carry → carries
　※母音字＋y はそのまま s。play → plays／enjoy → enjoys

④have だけ特別
　have → has

■ 例文
・He goes to school at eight.（かれは8時に学校へ行きます）
・She studies English every day.（かのじょは毎日英語を勉強します）
・My father watches TV after dinner.（父は夕食のあとテレビを見ます）
・Ken has a dog.（ケンは犬を飼っています）

★ ポイント：「he・she・it なら s」。主語が1人か2人以上かを先に見てから、動詞を書く。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 形を変える練習
play → plays／go → goes／study → studies／have → has
watch → watches／like → likes／teach → teaches／run → runs
carry → carries／enjoy → enjoys／wash → washes／do → does

■ 主語を見分ける練習
次の主語は s がつくか、つかないか。
・my brother → つく（1人）
・my brothers → つかない（2人以上）
・Tom and Ken → つかない（2人）
・the cat → つく（1ぴき）
・you → つかない

■ まちがえやすいところ
・play は母音字＋y なので plays（playies としない）
・study は子音字＋y なので studies
・go は o で終わるので goes（gos としない）
・have は has（haves としない）

■ 見直しのしかた
文を書いたら、次の順に確かめる。
①主語は1人・1つか
②そうなら動詞に s がついているか
③s か es か、y を i に変えるかは合っているか

■ 日本語にはないきまり
日本語では「わたしはします」も「かれはします」も同じ形だが、英語では変わる。ここは英語特有のきまりなので、書くたびに確かめるくせをつける。

⚠ 注意：主語が2人以上のときに s をつけてしまう誤りが多い。My friends plays ~ ではなく My friends play ~ である。主語の数を先に確かめること。`,
      },
    ],
    trapExamples: [
      {
        question: '「かのじょは毎日英語を勉強します」を英語で書きなさい。',
        wrongAnswer: 'She studys English every day.',
        trapExplanation:
          'y をそのままにして s をつけてしまった。子音字＋y は、y を i に変えて es にする。',
        correctAnswer: 'She studies English every day.',
        correctExplanation:
          'study は d（子音字）＋y なので、y を i に変えて es をつけ studies となる。同じ形は try → tries、carry → carries。一方 play は a（母音字）＋y なので、そのまま plays となる。y の前が母音字か子音字かを見ること。',
      },
      {
        question: '「わたしの兄弟たちはサッカーをします」を英語で書きなさい。',
        wrongAnswer: 'My brothers plays soccer.',
        trapExplanation:
          '主語が1人だと思って s をつけてしまった。brothers は2人以上なので s はつけない。',
        correctAnswer: 'My brothers play soccer.',
        correctExplanation:
          '動詞に s をつけるのは、主語が1人・1つのときだけである。brothers は複数なので play のままでよい。主語のおしりに s がついているときは、動詞には s がつかない、と覚えておくと見分けやすい。',
      },
    ],
  },
  {
    id: 'eigo_s459',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞③：「〜しません」の文',
    description: "don't と doesn't の使い分けと、動詞をもとの形にもどす決まりを学ぶ",
    intro:
      '「しません」と言うときは、動詞の前に一語たすだけです。ただし、その一語のうしろでは、動詞がもとの形にもどります。ここがひっかかりやすいところです。',
    order: 959,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      "主語が I、you、we、they のときは don't を動詞の前に置く。",
      "主語が he、she、it、1人・1つのときは doesn't を置く。",
      "don't や doesn't のうしろでは、動詞はもとの形になる（s をつけない）。",
      "don't は do not、doesn't は does not を短くした形。",
      'be動詞の文では not を be動詞のうしろに置く。I am not ~.',
      "一般動詞の文に am not や isn't は使わない。",
    ],
    sections: [
      {
        heading: '文のつくり方',
        body: `■ 置く場所
動詞の前に置く。
・I don't play soccer.（わたしはサッカーをしません）
・You don't like natto.（あなたは納豆が好きではありません）
・We don't go to school on Sunday.（日曜日は学校へ行きません）
・He doesn't play soccer.（かれはサッカーをしません）
・She doesn't study math.（かのじょは数学を勉強しません）

■ どちらを使うか
・I、you、we、they → don't
・he、she、it、1人・1つ → doesn't

■ うしろの動詞はもとの形
doesn't のうしろでは、s のついた形にしない。
誤：He doesn't plays soccer.
正：He doesn't play soccer.
誤：She doesn't studies English.
正：She doesn't study English.

s は doesn't の中の does がすでに引き受けているので、動詞にはつけない。

■ be動詞の文とのちがい
be動詞の文では、be動詞のうしろに not を置く。
・I am not a student.（I'm not ~ とも書く）
・He is not a teacher.（He isn't ~）
・They are not students.（They aren't ~）

一般動詞の文に isn't を使ってはいけない。
誤：He isn't play soccer.
正：He doesn't play soccer.

■ 短くしない形
・don't ＝ do not
・doesn't ＝ does not
どちらで書いてもよいが、話すときは短くした形をよく使う。

★ ポイント：doesn't のうしろの動詞は、s なしのもとの形。s は一つの文に一回だけ、と覚える。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 文を作る練習
・わたしはピアノをひきません。→ I don't play the piano.
・かれは牛乳を飲みません。→ He doesn't drink milk.
・わたしたちはテレビを見ません。→ We don't watch TV.
・かのじょは犬を飼っていません。→ She doesn't have a dog.
　have は has にせず、そのまま have を使う。

■ 見分けの練習
次の文に入るのは don't か doesn't か。
・I （　） like carrots. → don't
・My sister （　） like carrots. → doesn't
・They （　） like carrots. → don't
・Ken （　） like carrots. → doesn't

■ まちがえやすいところ
・doesn't のうしろに s をつけてしまう
・一般動詞の文に isn't を使ってしまう
・have を has のままにしてしまう（doesn't have が正しい）

■ 答え方で使う
・Do you like dogs? → No, I don't.
・Does he play tennis? → No, he doesn't.
たずねる文の答えでも使うので、セットで覚えておく。

⚠ 注意：I'm not と I don't はちがう。I'm not a student.（学生ではありません）は be動詞の文、I don't study.（勉強しません）は一般動詞の文である。「です」の否定か「します」の否定かで使い分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「かれはテニスをしません」を英語で書きなさい。',
        wrongAnswer: "He doesn't plays tennis.",
        trapExplanation:
          "doesn't のうしろの動詞に s を残してしまった。doesn't がすでに s の役目をしている。",
        correctAnswer: "He doesn't play tennis.",
        correctExplanation:
          "doesn't の中の does が、主語が1人であることを表している。そのため、うしろの動詞はもとの形（play）にもどす。同じように He doesn't study ~、She doesn't have ~ となる。s は一つの文に一回だけ、と覚えること。",
      },
      {
        question: '「わたしは学生ではありません」を英語で書きなさい。',
        wrongAnswer: "I don't a student.",
        trapExplanation:
          "「です」の文なのに don't を使ってしまった。be動詞の文では not を be動詞のうしろに置く。",
        correctAnswer: "I am not a student.（I'm not a student.）",
        correctExplanation:
          "「〜です」の文は be動詞の文なので、am のうしろに not を置く。don't を使うのは「〜します」という一般動詞の文である。「です」の否定なら be動詞＋not、「します」の否定なら don't／doesn't、と分けて覚えること。",
      },
    ],
  },
  {
    id: 'eigo_s460',
    subject: 'eigo',
    examType: 'chugaku',
    title: '一般動詞④：「〜しますか」とたずねる文',
    description: 'Do と Does を文の先頭に置き、答え方まで型で覚える',
    intro:
      'たずねる文は、文の先頭に一語たすだけです。答え方も決まった形があるので、質問と答えをセットで覚えてしまいましょう。',
    order: 960,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '主語が I、you、we、they のときは Do を文の先頭に置く。',
      '主語が he、she、it、1人・1つのときは Does を置く。',
      'Does のうしろでは、動詞はもとの形になる（s をつけない）。',
      "答えは Yes, ~ do. / No, ~ don't. の形にする。",
      "he、she のときは Yes, he does. / No, he doesn't. になる。",
      '文の終わりにはクエスチョンマーク（?）をつける。',
    ],
    sections: [
      {
        heading: '文のつくり方',
        body: `■ たずねる文の形
Do（Does）＋主語＋動詞 ＋そのほか ?

・Do you like dogs?（あなたは犬が好きですか）
・Do they play baseball?（かれらは野球をしますか）
・Does he like dogs?（かれは犬が好きですか）
・Does your sister play the piano?（あなたのお姉さんはピアノをひきますか）

■ どちらを使うか
・I、you、we、they → Do
・he、she、it、1人・1つ → Does

■ うしろの動詞はもとの形
Does のうしろでは s をつけない。
誤：Does he likes dogs?
正：Does he like dogs?

■ 答え方
たずねる文で使った語をそのまま使って答える。
・Do you like dogs?
　→ Yes, I do.／No, I don't.
・Do they play baseball?
　→ Yes, they do.／No, they don't.
・Does he like dogs?
　→ Yes, he does.／No, he doesn't.
・Does your sister play the piano?
　→ Yes, she does.／No, she doesn't.

答えるときは、名前ではなく he、she、they などに変える。
・Does Ken like soccer? → Yes, he does.

■ be動詞の文とのちがい
be動詞の文では、be動詞を先頭に出す。
・Are you a student? → Yes, I am.／No, I'm not.
・Is he a teacher? → Yes, he is.／No, he isn't.

一般動詞の文に Are や Is を使ってはいけない。
誤：Are you like dogs?
正：Do you like dogs?

★ ポイント：質問で Do を使ったら答えも do、Does を使ったら答えも does。形をそろえる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 文を作る練習
・あなたはピアノをひきますか。→ Do you play the piano?
・かれは英語を勉強しますか。→ Does he study English?
・あなたのお母さんは料理をしますか。→ Does your mother cook?
・かれらは学校へ歩いて行きますか。→ Do they walk to school?

■ 答える練習
・Do you have a dog? → Yes, I do.／No, I don't.
・Does she play tennis? → Yes, she does.／No, she doesn't.
・Do your friends like music? → Yes, they do.／No, they don't.

■ まちがえやすいところ
・Does のうしろの動詞に s を残してしまう
・一般動詞の文に Are や Is を使ってしまう
・答えの do と does をそろえ忘れる
・クエスチョンマークを忘れる

■ 名前を代名詞に変える
答えるときは、名前を he、she、they、it に変える。
・Does Ken like soccer? → Yes, he does.
・Does Mary play the piano? → Yes, she does.
・Do Ken and Mary study English? → Yes, they do.

■ 少しくわしくたずねる
・Do you like dogs or cats?（犬とねこ、どちらが好きですか）
　この形には Yes／No では答えず、I like dogs. のように答える。

⚠ 注意：Does he likes ~? としてしまう誤りが最も多い。Does を書いた時点で、うしろの動詞はもとの形と決まっている。`,
      },
      {
        heading: 'なぜ Do のうしろは s なしで、なぜ答えの語をそろえるのか',
        body: `be動詞の文は、be動詞を先頭に出せばたずねる文になります（Are you 〜?）。一般動詞は先頭に出せないので、**「これからたずねます」という合図の語 Do を先頭に置きます**。主語が he・she・it・1人・1つのときは、その s の役目を Do が引き受けて Does になります。だから Does のうしろの動詞にはもう s は要りません。Does he likes 〜? は s が二重になっています。

答えの語をそろえるのは、答えが**質問の動詞をくり返している**からです。Do you like music? への Yes, I do. は「Yes, I (like music)」の do です。Are you 〜? への Yes, I am. は am をくり返しています。Do でたずねられたのに Yes, I am. と答えると、何をくり返しているのか分からなくなります。答えるときに名前を he・she・they に変えるのも、同じ人を二度名前で呼ばないためです。

■ 確かめのしかた
①主語が I・you・we・they→**Do**、he・she・it・1人・1つ→**Does**。
②Does のうしろの動詞が**もとの形**か。× Does she plays→Does she play。
③答えの語が質問とそろっているか。Do→do／don't、Does→does／doesn't、Are→am／are、Is→is。× Do you like music?→Yes, I am.
④答えでは名前を代名詞に（Does Ken 〜?→Yes, he does.）。文末に ? があるか。A or B? には Yes/No で答えない。

★ ここがポイント：Do／Does は**たずねる合図の語**で、Does が s の役目を引き受けるので動詞は**もとの形**。答えは**質問の語をくり返す**ので Do→do、Are→am とそろえる。`,
      },
    ],
    trapExamples: [
      {
        question: '「かのじょはピアノをひきますか」を英語で書きなさい。',
        wrongAnswer: 'Does she plays the piano?',
        trapExplanation:
          'Does を使ったのに、動詞に s を残してしまった。Does がすでに s の役目をしている。',
        correctAnswer: 'Does she play the piano?',
        correctExplanation:
          "Does を文の先頭に置いたら、うしろの動詞はもとの形（play）にする。否定文の doesn't と同じ決まりである。答えは Yes, she does. または No, she doesn't. となる。",
      },
      {
        question: '「Do you like music?」への答えとして正しいものはどれですか。',
        wrongAnswer: 'Yes, I am.',
        trapExplanation:
          'be動詞の答え方を使ってしまった。Do でたずねられたら do で答える。',
        correctAnswer: "Yes, I do.（または No, I don't.）",
        correctExplanation:
          'たずねる文で使った語と、答えで使う語をそろえる。Do → do、Does → does、Are → am／are、Is → is である。Are you a student? なら Yes, I am. が正しい。何でたずねられたかを見てから答えること。',
      },
    ],
  },
  {
    id: 'eigo_s461',
    subject: 'eigo',
    examType: 'chugaku',
    title: '命令する文・さそう文',
    description: "主語をつけずに始める文と、Let's の使い方を覚える",
    intro:
      '「立ちなさい」「見て」のような文には、主語がありません。動詞から始めるだけです。いっしょにやろうとさそうときは、前に一語つけます。',
    order: 961,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '命令する文は、主語を書かずに動詞から始める。Stand up.',
      "「〜しないで」と言うときは、動詞の前に Don't を置く。Don't run.",
      'ていねいに言うときは please をつける。Please sit down.',
      'please は文の終わりにつけてもよい。Sit down, please.',
      "「いっしょに〜しよう」は Let's ＋動詞のもとの形。Let's play soccer.",
      'be動詞の命令文は Be から始める。Be quiet.',
    ],
    sections: [
      {
        heading: '文のつくり方',
        body: `■ 命令する文
主語を書かず、動詞のもとの形から始める。
・Stand up.（立ちなさい）
・Sit down.（すわりなさい）
・Open your book.（本を開きなさい）
・Look at me.（わたしを見なさい）
・Listen carefully.（よく聞きなさい）

■ 「〜しないで」
動詞の前に Don't を置く。
・Don't run.（走らないで）
・Don't talk.（話さないで）
・Don't be late.（おくれないで）

■ ていねいに言う
please をつける。
・Please open the window.（まどを開けてください）
・Open the window, please.（同じ意味。コンマをつける）

■ be動詞の命令文
Be から始める。
・Be quiet.（静かにしなさい）
・Be careful.（気をつけて）
・Be kind to others.（人に親切にしなさい）
am・is・are ではなく、もとの形の be を使う。

■ さそう文
Let's ＋動詞のもとの形。
・Let's play soccer.（サッカーをしよう）
・Let's go to the park.（公園へ行こう）
・Let's start.（始めよう）
Let's は Let us を短くした形である。

答え方
・Yes, let's.（そうしよう）
・Sounds good.（いいね）
・Sorry, I can't.（ごめん、できない）

■ 教室でよく使う言い方
・Stand up.／Sit down.
・Open your textbook.（教科書を開いて）
・Close your book.（本を閉じて）
・Raise your hand.（手をあげて）
・Repeat after me.（あとについて言って）
・Look at the blackboard.（黒板を見て）

★ ポイント：命令する文は主語を書かない。動詞から始まっていたら、命令する文だと見分けられる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 文を作る練習
・まどを閉めなさい。→ Close the window.
・ここで遊ばないで。→ Don't play here.
・静かにしてください。→ Please be quiet.
・いっしょに歌おう。→ Let's sing together.

■ 命令する文とふつうの文のちがい
・You open the window.（あなたはまどを開けます）… ふつうの文
・Open the window.（まどを開けなさい）… 命令する文
主語があるかないかで見分ける。

■ まちがえやすいところ
・命令する文に You をつけてしまう
・be動詞の命令文で Are quiet. としてしまう（正しくは Be quiet.）
・Let's のあとに to を入れてしまう（誤：Let's to play。正：Let's play）
・Don't のあとに s のついた形を使ってしまう

■ ていねいさの順
・Open the window.（開けて）
・Please open the window.（開けてください）
・Can you open the window?（開けてもらえますか）
下にいくほどていねいになる。

■ 標識やお知らせでもよく使う
・Don't touch.（さわらないで）
・Keep out.（入らないで）
・Be quiet.（お静かに）

⚠ 注意：Let's のあとは、必ず動詞のもとの形が来る。Let's playing や Let's to play は誤りである。`,
      },
      {
        heading: 'なぜ命令する文に主語がなく、なぜ Be quiet. なのか',
        body: `命令する文は、**目の前の相手（you）に向かって言う**ので、だれに言っているかは分かりきっています。だから主語を書かず、動詞から始めます。逆に言えば、動詞から始まる文を見たら命令する文だと分かります。動詞が「もとの形」なのは、主語が無いので主語に合わせて形を変える必要がないからです。be動詞のもとの形は be なので、「静かにしなさい」は Be quiet. です。am・is・are は主語に合わせて変わった形なので、主語のない命令文では使いません。

Let's のあとに動詞のもとの形が来るのは、Let's が Let us（私たちに〜させて）を短くした形で、let のあとには動詞のもとの形を置く決まりがあるからです。Let's to play や Let's playing は誤りです。「〜しないで」は動詞の前に Don't を置き、Don't のあとも動詞のもとの形です。

■ 確かめのしかた
①命令する文に **You** を付けていないか。動詞（もとの形）から始まっているか。
②be動詞の命令文は **Be**（Be quiet.／Be careful.）。× Are quiet.
③Let's のあとが**もとの形**か。Let's play soccer.（× Let's to play、× Let's playing）。
④ていねいさ：Open the window.→Please open the window.／Open the window, please.→Can you open the window? の順にていねいになる。Don't のあとももとの形。

★ ここがポイント：命令する文は**目の前の you に言うので主語を書かず**、動詞は**もとの形**（be動詞は Be）。Let's は Let us なので、あとは**もとの形**。`,
      },
    ],
    trapExamples: [
      {
        question: '「静かにしなさい」を英語で書きなさい。',
        wrongAnswer: 'Are quiet.',
        trapExplanation:
          'be動詞をそのまま使ってしまった。命令する文では、be動詞はもとの形の Be になる。',
        correctAnswer: 'Be quiet.',
        correctExplanation:
          '命令する文では、動詞はいつももとの形を使う。be動詞のもとの形は be なので Be quiet. となる。同じように Be careful.（気をつけて）、Be kind.（親切にしなさい）となる。am・is・are は主語に合わせて変わった形なので、命令する文では使わない。',
      },
      {
        question: '「いっしょにサッカーをしよう」を英語で書きなさい。',
        wrongAnswer: "Let's playing soccer.",
        trapExplanation:
          "Let's のあとの動詞の形をまちがえた。Let's のあとは、必ずもとの形が来る。",
        correctAnswer: "Let's play soccer.",
        correctExplanation:
          "Let's は Let us を短くした形で、そのあとには動詞のもとの形が続く。Let's playing や Let's to play とはしない。同じように Let's go.、Let's start.、Let's eat lunch. となる。",
      },
    ],
  },
  {
    id: 'eigo_s462',
    subject: 'eigo',
    examType: 'chugaku',
    title: '場所を表す語：in・on・under・by・near',
    description: 'ものがどこにあるかを表す語を、位置の絵で区別する',
    intro:
      '「はこの中」「つくえの上」「いすの下」。日本語では「の」でつなぎますが、英語では場所ごとにちがう語を使います。位置で覚えましょう。',
    order: 962,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'in は「〜の中に」。in the box、in the room。',
      'on は「〜の上に（くっついて）」。on the desk、on the wall。',
      'under は「〜の下に」。under the chair。',
      'by と near は「〜のそばに」。by the window、near the station。',
      'between は「〜の間に」、in front of は「〜の前に」。',
      '場所を表す語は、名詞の前に置く。',
    ],
    sections: [
      {
        heading: '位置でおぼえる',
        body: `■ in（〜の中に）
in the box（はこの中に）／in the bag（かばんの中に）／in the room（部屋の中に）／in Japan（日本に）
・The cat is in the box.（ねこははこの中にいます）

■ on（〜の上に）
面にくっついているときに使う。
on the desk（つくえの上に）／on the wall（かべに）／on the ceiling（天じょうに）
・The book is on the desk.（本はつくえの上にあります）
かべや天じょうも、くっついているので on を使う。

■ under（〜の下に）
under the chair（いすの下に）／under the tree（木の下に）
・The ball is under the chair.（ボールはいすの下にあります）

■ by・near（〜のそばに）
by the window（まどのそばに）／near the station（駅の近くに）
by のほうが近く、near は少しはなれていてもよい。

■ そのほか
・in front of（〜の前に）：in front of the school
・behind（〜のうしろに）：behind the door
・between（〜の間に）：between the chair and the desk
・over（〜の上のほうに、はなれて）：over the table
・next to（〜のとなりに）：next to the post office

■ 文の中での使い方
・My pencil is in my pencil case.
・There is a cat under the table.（テーブルの下にねこがいます）
・Where is my bag? — It's on the chair.

★ ポイント：in は中、on はくっついた面、under は下。この三つをまず確実にする。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 言ってみる
・つくえの上に本があります。→ There is a book on the desk.
・かばんの中にペンがあります。→ There is a pen in my bag.
・いすの下にねこがいます。→ There is a cat under the chair.

■ たずね方
Where is ~?（〜はどこにありますか）
・Where is my cap? — It's on the bed.
・Where is the station? — It's near the park.

■ まちがえやすいところ
・「かべに」は on the wall（in ではない）
・「木の下に」は under the tree
・「日本に住んでいます」は I live in Japan.
・「バスに乗って」は by bus（乗り物の手段は by）

■ on のいろいろな使い方
・on the desk（つくえの上に）
・on Monday（月曜日に）
・on May 5th（5月5日に）
場所だけでなく、曜日や日付にも使う。

■ in のいろいろな使い方
・in the box（はこの中に）
・in May（5月に）
・in summer（夏に）
・in 2026（2026年に）

⚠ 注意：「つくえの上」を in the desk と書かない。in the desk だと「つくえの引き出しの中」という意味になる。表面にのっているなら on である。`,
      },
    ],
    trapExamples: [
      {
        question: '「本はつくえの上にあります」を英語で書きなさい。',
        wrongAnswer: 'The book is in the desk.',
        trapExplanation:
          'in と on を取りちがえた。in は「中に」なので、引き出しの中という意味になってしまう。',
        correctAnswer: 'The book is on the desk.',
        correctExplanation:
          'on は面にくっついていることを表すので、つくえの上にのっている場合は on を使う。in は「中に」なので、in the desk だと引き出しの中という意味になる。in は中、on はくっついた面、と絵で覚えること。',
      },
      {
        question: '「かべに絵があります」の「かべに」は、in と on のどちらですか。',
        wrongAnswer: 'in。絵はかべの中にあるように見えるから。',
        trapExplanation:
          '上にのっていないので in だと考えてしまう。on は「上」ではなく「くっついている」ことを表す。',
        correctAnswer: 'on（on the wall）',
        correctExplanation:
          'on は面にくっついていることを表す語なので、かべや天じょうにも使う。There is a picture on the wall. が正しい。「上」という日本語にとらわれず、「くっついているか」で判断すること。',
      },
    ],
  },
  {
    id: 'eigo_s463',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時を表す語：at・on・in',
    description: '時こく・曜日・月で使い分ける三つの語を、大きさの順で覚える',
    intro:
      '時を表す語は三つだけです。時こくは at、曜日と日付は on、月や季節や年は in。「せまい順に at・on・in」と覚えると忘れません。',
    order: 963,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'at は時こくに使う。at seven、at noon。',
      'on は曜日と日付に使う。on Monday、on May 5th。',
      'in は月・季節・年に使う。in May、in summer、in 2026。',
      '範囲がせまい順に at → on → in となる。',
      'in the morning（午前中に）、at night（夜に）は決まった言い方。',
      'every day、tomorrow、today には、これらの語をつけない。',
    ],
    sections: [
      {
        heading: '三つの使い分け',
        body: `■ at（時こく・一点）
・at seven（7時に）
・at eight thirty（8時30分に）
・at noon（正午に）
・at night（夜に）

■ on（曜日・日付）
・on Monday（月曜日に）
・on Sunday morning（日曜日の朝に）
・on May 5th（5月5日に）
・on my birthday（わたしのたん生日に）

■ in（月・季節・年・長い時間）
・in May（5月に）
・in summer（夏に）
・in 2026（2026年に）
・in the morning（午前中に）
・in the afternoon（午後に）

■ せまい順にならべる
at（時こく）→ on（日）→ in（月・季節・年）
指し示す時間が短いほど at、長いほど in になる。

■ 決まった言い方
・in the morning（午前中に）
・in the afternoon（午後に）
・in the evening（夕方に）
・at night（夜に）
night だけ at を使う。ここは例外として覚える。

■ 語をつけないもの
every day（毎日）／today（今日）／tomorrow（明日）／yesterday（きのう）／this morning（今朝）／next week（来週）
これらには at、on、in をつけない。
誤：in every day
正：every day

■ 例文
・I get up at six.（6時に起きます）
・I play tennis on Saturday.（土曜日にテニスをします）
・My birthday is in June.（たん生日は6月です）
・It's cold in winter.（冬は寒いです）
・I study English every day.（毎日英語を勉強します）

★ ポイント：「at は時こく、on は日、in は月から上」。三段階で覚える。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 入れてみる
・I go to bed （　） nine. → at
・We have a party （　） Sunday. → on
・It snows （　） winter. → in
・School starts （　） April. → in
・I have a piano lesson （　） Wednesday. → on
・I eat lunch （　） twelve. → at

■ 組み合わさるとき
日付と曜日がいっしょに出るときは on を使う。
・on Sunday, May 5th

朝・昼・夜でも、日付がつくと on になる。
・in the morning（朝に）
・on Monday morning（月曜日の朝に）

■ まちがえやすいところ
・at night（夜に）だけ at。in the night とはあまり言わない
・every day には何もつけない
・on time（時間どおりに）、in time（間に合って）は決まった言い方

■ 場所を表す at・on・in との関係
場所でも同じ考え方が使える。
・at the station（駅で。一点）
・on the desk（つくえの上に。面）
・in the room（部屋の中に。空間）
時でも場所でも「点 → 面 → 中」の順になっている。

⚠ 注意：日本語の「〜に」はすべて同じだが、英語では at・on・in を使い分ける。時こくか、日か、月かを先に決めてから語を選ぶこと。`,
      },
      {
        heading: 'なぜ「せまい順に at・on・in」なのか',
        body: `at・on・in は、場所を表すときの意味がそのまま時にも使われています。at は「一点で」（at the station）、on は「面に触れて」（on the desk）、in は「中に」（in the room）。時に当てはめると、時こくは時計の針が一か所を指す**点**なので at、日は一日という**面**なので on、月・季節・年は**中に入っている広い幅**なので in。だから「点→面→中」の順に at・on・in と並び、せまい順に覚えると忘れません。

night だけ at なのは、昔から夜を「活動する幅」ではなく一日の区切りの「点」のように扱ってきた習慣です。every day・today・tomorrow に前置詞を付けないのは、これらの語がそれ自体で「いつ」を表しているからです。日本語の「〜に」はどれも同じですが、英語では時こくか、日か、月かを先に決めてから語を選びます。

■ 確かめのしかた
①「〜に」の中身が**時こく（点）か、日（面）か、月から上（幅）か**を言う。at nine／on Sunday／in April。
②朝・午後・夕方は in the 〜、夜だけ at night。日が決まると on が勝つ（on Monday morning）。
③every day・today・tomorrow・yesterday・this morning・next week に前置詞を付けていないか（× in every day）。
④場所でも同じ順（at the station／on the desk／in the room）。決まった言い方（on time・in time）は形ごと覚える。

★ ここがポイント：at は**点**、on は**面**、in は**中**で、場所と同じ意味が時にも使われている。だから**時こく→日→月**の順に at・on・in。every day には付けない。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしは日曜日に公園へ行きます」の「日曜日に」に入る語はどれですか。',
        wrongAnswer: 'in（in Sunday）',
        trapExplanation:
          '時を表す語をすべて in だと考えてしまう。曜日には on を使う。',
        correctAnswer: 'on（on Sunday）',
        correctExplanation:
          '曜日と日付には on を使う。I go to the park on Sunday. が正しい。時こくなら at seven、月なら in May である。「at は時こく、on は日、in は月から上」と三段階で覚えること。',
      },
      {
        question: '「わたしは毎日英語を勉強します」の「毎日」に前置詞は必要ですか。',
        wrongAnswer: '必要である。in every day と書く。',
        trapExplanation:
          '時を表す言葉には必ず前置詞がつくと考えてしまう。every day にはつけない。',
        correctAnswer: '必要ない。I study English every day. と書く。',
        correctExplanation:
          'every day、today、tomorrow、yesterday、this morning、next week などには、at・on・in をつけない。これらの語自体がすでに「いつ」を表しているためである。I study English every day. が正しい。',
      },
    ],
  },
  {
    id: 'eigo_s464',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'たずねる言葉：what・where・when・who・how',
    description: '何を知りたいかによって、文の先頭に置く語を選べるようにする',
    intro:
      'Yes か No で答えられない質問には、先頭に「何を知りたいか」を表す語を置きます。答え方もそれぞれ決まっているので、セットで覚えましょう。',
    order: 964,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'what は「何」。What is this?、What do you have?',
      'where は「どこ」。Where is my bag?',
      'when は「いつ」。When is your birthday?',
      'who は「だれ」。Who is that boy?',
      'how は「どのように・どれくらい」。How are you?、How old are you?',
      'これらの質問には Yes / No で答えない。内容を答える。',
    ],
    sections: [
      {
        heading: 'たずね方と答え方',
        body: `■ what（何）
・What is this? — It's a pen.（これは何ですか — ペンです）
・What do you have? — I have a book.（何を持っていますか — 本です）
・What time is it? — It's three.（何時ですか — 3時です）
・What color do you like? — I like blue.（何色が好きですか — 青です）

■ where（どこ）
・Where is my bag? — It's on the chair.
・Where do you live? — I live in Tokyo.
・Where is the station? — It's near the park.

■ when（いつ）
・When is your birthday? — It's May 5th.
・When do you study? — I study after dinner.

■ who（だれ）
・Who is that boy? — He is my brother.
・Who is your teacher? — Ms. Sato is.

■ how（どのように・どれくらい）
・How are you? — I'm fine, thank you.
・How do you go to school? — By bus.
・How old are you? — I'm ten years old.
・How many books do you have? — I have five.
・How much is it? — It's 500 yen.

■ 文のならべ方
たずねる語 ＋ ふつうのたずねる文
・What do you like?（What ＋ do you like）
・Where does he live?（Where ＋ does he live）
Does を使ったら、うしろの動詞はもとの形にする。

■ 答え方
Yes／No では答えない。聞かれた内容を答える。
誤：Where do you live? — Yes, I do.
正：Where do you live? — I live in Osaka.

★ ポイント：what・where・when・who・how。この5つで、たずねたいことのほとんどがまかなえる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ たずねる語を選ぶ
・（　）is your birthday? — It's July 3rd. → When
・（　）is your father? — He is a doctor. → What（職業をたずねるとき）
・（　）do you live? — I live in Kyoto. → Where
・（　）is that girl? — She is my sister. → Who
・（　）old is your dog? — It's three years old. → How

■ how の組み合わせ
・How old（何才）
・How many（いくつ。数えられるもの）
・How much（いくら。お金や量）
・How long（どれくらい長い・長い時間）
・How tall（どれくらい高い・背）
how のあとに語をつけて、たずねる内容をくわしくする。

■ まちがえやすいところ
・Yes／No で答えてしまう
・What と Who を取りちがえる（人なら Who）
・How many のあとは複数形（How many books、How many pencils）
・Does を使ったのに、動詞に s を残してしまう

■ 答えを聞いて質問を作る練習
答え：I go to school by bike.
質問：How do you go to school?

答え：My birthday is in August.
質問：When is your birthday?

⚠ 注意：職業をたずねるときは What を使う。What is your father? は「お父さんの仕事は何ですか」という意味になる。Who is your father? は「どの人がお父さんですか」という意味である。`,
      },
      {
        heading: 'なぜたずねる語は先頭で、なぜ Yes／No で答えないのか',
        body: `what・where・when・who・how は、**知りたいことそのもの**を表す語です。英語ではいちばん知りたいことを文の先頭に置き、そのあとにふつうのたずねる文（do you like／does he live）を続けます。だから「たずねる語＋ふつうのたずねる文」の形になり、Does を使えばうしろの動詞はもとの形です。

Yes／No で答えないのは、これらの質問が「はい・いいえ」を聞いているのではなく、**中身（何・どこ・いつ・だれ・どのように）を聞いている**からです。Where do you live? に Yes, I do. と答えても、どこに住んでいるかは伝わりません。Yes／No で答えるのは Do・Are で始まる質問だけです。職業を What でたずねるのは、What が「何（をする人）か」を聞く語で、Who は「どの人か」を聞く語だからです。

■ 確かめのしかた
①知りたいことを言う：何→what、どこ→where、いつ→when、だれ→who、どのように・どれくらい→how。**先頭**に置く。
②うしろが**ふつうのたずねる文**の形か。Where does he live?（Does のあとは live）。
③答えが**中身**になっているか。Where do you live?→I live in Tokyo.（× Yes, I do.）。
④how の組み合わせ：How old／How many（＋複数形）／How much／How long／How tall。職業→What is your father?、どの人→Who。

★ ここがポイント：たずねる語は**知りたいことそのもの**なので先頭。**中身を聞いている**ので Yes／No では答えない。How many のあとは複数形、職業は What。`,
      },
    ],
    trapExamples: [
      {
        question: '「Where do you live?」への答えとして正しいものはどれですか。',
        wrongAnswer: 'Yes, I do.',
        trapExplanation:
          'たずねる文の形だけを見て Yes／No で答えてしまった。where は場所をたずねているので、内容を答える。',
        correctAnswer: 'I live in Tokyo.（場所を答える）',
        correctExplanation:
          'what、where、when、who、how で始まる質問には、Yes／No では答えられない。聞かれている内容（何・どこ・いつ・だれ・どのように）を答える。Yes／No で答えるのは、Do や Are で始まる質問である。',
      },
      {
        question: '「あなたは本を何さつ持っていますか」を英語で書きなさい。',
        wrongAnswer: 'How many book do you have?',
        trapExplanation:
          'How many のあとの名詞を単数のままにしてしまった。数をたずねるので複数形にする。',
        correctAnswer: 'How many books do you have?',
        correctExplanation:
          'How many のあとには、数えられる名詞の複数形が来る。How many books、How many pencils、How many students のようになる。数えられないもの（水、お金）の量をたずねるときは How much を使う。',
      },
    ],
  },
  // ── 語彙と会話（s465〜s472） ──
  {
    id: 'eigo_s465',
    subject: 'eigo',
    examType: 'chugaku',
    title: '語彙①：まちの中の建物と場所',
    description: 'まちにある建物の名前と、そこで何をするかをセットで覚える',
    intro:
      'まちの中の建物の名前は、道案内でも自己しょうかいでも使います。名前だけでなく、そこで何をするかもいっしょに覚えると忘れません。',
    order: 965,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'school（学校）、library（図書館）、hospital（病院）、park（公園）。',
      'station（駅）、post office（郵便局）、bank（銀行）、museum（博物館）。',
      'supermarket（スーパー）、bookstore（書店）、restaurant（レストラン）。',
      'zoo（動物園）、aquarium（水族館）、stadium（競技場）。',
      '「〜へ行く」は go to ~。「〜で」は at ~。',
      'go to bed、go home には to や at をつけない使い方がある。',
    ],
    sections: [
      {
        heading: 'まとめておぼえる',
        body: `■ 学校・勉強に関係する場所
school（学校）／classroom（教室）／library（図書館）／gym（体育館）／playground（運動場）／music room（音楽室）

■ 買い物の場所
supermarket（スーパーマーケット）／convenience store（コンビニ）／bookstore（書店）／flower shop（花屋）／bakery（パン屋）／department store（デパート）

■ 公共の場所
station（駅）／post office（郵便局）／bank（銀行）／hospital（病院）／police station（けいさつ署）／fire station（消防署）／city hall（市役所）

■ 楽しむ場所
park（公園）／zoo（動物園）／aquarium（水族館）／museum（博物館・美術館）／stadium（競技場）／restaurant（レストラン）／movie theater（映画館）

■ そこで何をするか
・I study at school.（学校で勉強します）
・I read books in the library.（図書館で本を読みます）
・I buy food at the supermarket.（スーパーで食べ物を買います）
・I see animals at the zoo.（動物園で動物を見ます）
・I take a train at the station.（駅で電車に乗ります）

■ 「〜へ行く」
go to ＋ 場所
・I go to school.（学校へ行く。to のあとに the をつけない）
・I go to the park.（公園へ行く。the をつける）
学校・教会など「そこで活動する場所」には the をつけないことが多い。

■ to をつけない言い方
・go home（家へ帰る）
・go there（そこへ行く）

★ ポイント：場所の名前と「そこで何をするか」を対にして覚えると、会話でも使えるようになる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 言ってみる
・I go to the library on Saturday.（土曜日に図書館へ行きます）
・My father works at a bank.（父は銀行で働いています）
・There is a park near my house.（家の近くに公園があります）

■ たずねる
・Where do you go on Sunday? — I go to the park.
・Where is the post office? — It's near the station.
・What do you do at the library? — I read books.

■ まちがえやすいところ
・go to school の to を落とす
・go home に to をつけてしまう（誤：go to home）
・post office は2語で書く
・movie theater、convenience store も2語

■ 二語の建物名
post office／police station／fire station／convenience store／department store／movie theater／city hall
どれも2語なので、間をあけて書く。

■ 建物の中の場所
・in the classroom（教室の中で）
・on the playground（運動場で）
・at the station（駅で）
場所の広さによって in・on・at を使い分ける。

⚠ 注意：go to home とは言わない。home は「家へ」という意味をすでにもっているので、go home と言う。同じく go there、come here も to をつけない。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしは家に帰ります」を英語で書きなさい。',
        wrongAnswer: 'I go to home.',
        trapExplanation:
          '「〜へ」をすべて to で表すと考えてしまう。home はそれ自体で「家へ」という意味をもつ。',
        correctAnswer: 'I go home.',
        correctExplanation:
          'home は「家へ」という意味をふくむ語なので、to をつけない。同じように there（そこへ）、here（ここへ）にも to をつけない。一方、go to school、go to the park のように、ふつうの場所には to が必要である。',
      },
      {
        question: '「郵便局」を英語で書きなさい。',
        wrongAnswer: 'postoffice',
        trapExplanation:
          '2語をつなげて1語にしてしまった。post office は間をあけて書く。',
        correctAnswer: 'post office',
        correctExplanation:
          'post office は2語で書く。同じように police station、fire station、convenience store、department store、movie theater も2語である。英語では語と語の間を必ずあけて書く決まりがあるので、つなげて書くと別のつづりになってしまう。',
      },
    ],
  },
  {
    id: 'eigo_s466',
    subject: 'eigo',
    examType: 'chugaku',
    title: '語彙②：スポーツと楽器',
    description: 'play の使い方と、the をつけるかどうかの決まりを覚える',
    intro:
      'スポーツも楽器も play を使いますが、一つだけちがいがあります。楽器には the をつけて、スポーツにはつけません。ここが問題でよく出ます。',
    order: 966,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'スポーツには the をつけない。play soccer、play tennis。',
      '楽器には the をつける。play the piano、play the guitar。',
      'swim（泳ぐ）、ski（スキーをする）、run（走る）は play を使わない。',
      'do judo、do karate のように do を使うものもある。',
      '「〜が得意です」は I am good at ~ と言う。',
      "「〜をしよう」は Let's play ~ と言う。",
    ],
    sections: [
      {
        heading: 'まとめておぼえる',
        body: `■ play を使うスポーツ（the をつけない）
play soccer（サッカー）／play baseball（野球）／play tennis（テニス）／play basketball（バスケットボール）／play volleyball（バレーボール）／play badminton（バドミントン）／play table tennis（たっきゅう）

■ play を使う楽器（the をつける）
play the piano（ピアノ）／play the guitar（ギター）／play the violin（バイオリン）／play the recorder（リコーダー）／play the drums（ドラム）／play the flute（フルート）

■ play を使わない運動
・swim（泳ぐ）：I swim in summer.
・run（走る）：I run every morning.
・ski（スキーをする）／skate（スケートをする）
・ride a bike（自転車に乗る）
・do judo／do karate／do kendo（日本の武道は do を使う）

■ 「〜が好きです」「得意です」
・I like soccer.（サッカーが好きです）
・I like playing the piano.（ピアノをひくのが好きです）
・I am good at tennis.（テニスが得意です）
・I can play the piano.（ピアノがひけます）

■ たずねる
・Do you play any sports? — Yes, I play soccer.
・Can you play the piano? — Yes, I can.
・What sport do you like? — I like basketball.

★ ポイント：スポーツは the なし、楽器は the あり。この一点だけを覚える。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 入れてみる
・I play （　） soccer. → 何も入れない
・I play （　） piano. → the
・I play （　） tennis. → 何も入れない
・I play （　） guitar. → the

■ 言ってみる
・I play soccer after school.（放課後にサッカーをします）
・My sister plays the violin.（姉はバイオリンをひきます）
・I swim in the pool in summer.（夏はプールで泳ぎます）
・I do karate on Saturday.（土曜日に空手をします）

■ まちがえやすいところ
・play the soccer としてしまう（the は不要）
・play piano としてしまう（the が必要）
・swim に play をつけてしまう（誤：play swimming）
・judo に play を使ってしまう（do judo が自然）

■ スポーツを見る・する
・play soccer（サッカーをする）
・watch soccer（サッカーを見る）
・a soccer game（サッカーの試合）
・a soccer player（サッカー選手）

■ 好きなスポーツを言う練習
My favorite sport is soccer.（好きなスポーツはサッカーです）
I am on the soccer team.（サッカー部に入っています）

⚠ 注意：「テレビを見る」は watch TV で、TV に the をつけない。一方「ラジオを聞く」は listen to the radio で the をつける。決まった言い方として覚えること。`,
      },
      {
        heading: 'なぜ楽器には the が付き、スポーツには付かないのか',
        body: `楽器は、**ピアノという種類の楽器そのもの**を指して「その楽器をひく」と言う習慣があり、the を付けて play the piano とします。スポーツは「サッカーという活動をする」という意味で、活動の名前には冠詞を付けません。理屈より、英語の長い習慣で決まった形なので、「楽器は the あり、スポーツは the なし」の一点で覚えます。

swim・run・ski に play を使わないのは、これらが**それ自体で「泳ぐ・走る」という動作を表す動詞**だからです。play は「ボールなどを使うスポーツをする」「楽器をひく」ときの動詞で、動作そのものが動詞になっているものには要りません。柔道や空手のような武道は do を使います。

■ 確かめのしかた
①楽器→**play the 〇〇**（play the piano／the guitar／the violin）。スポーツ→**play 〇〇**（play soccer／tennis）。× play piano、× play the soccer。
②動作そのものが動詞のもの（swim・run・ski・skate・ride a bike）には play を付けない。× play swimming。
③武道は do（do judo／do karate／do kendo）。
④「見る」は watch soccer、「サッカー選手」は a soccer player。watch TV（the なし）、listen to the radio（the あり）は決まった言い方。

★ ここがポイント：**楽器は the あり、スポーツは the なし**の一点。swim・run は**それ自体が動詞**なので play を付けず、武道は do。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしはピアノをひきます」を英語で書きなさい。',
        wrongAnswer: 'I play piano.',
        trapExplanation:
          '楽器の前の the を落としてしまった。スポーツと同じ形にしてしまいやすい。',
        correctAnswer: 'I play the piano.',
        correctExplanation:
          '楽器の前には the をつける。play the piano、play the guitar、play the violin となる。一方スポーツには the をつけず、play soccer、play tennis と言う。「楽器は the あり、スポーツは the なし」と対にして覚えること。',
      },
      {
        question: '「わたしは夏に泳ぎます」を英語で書きなさい。',
        wrongAnswer: 'I play swimming in summer.',
        trapExplanation:
          '運動はすべて play を使うと考えてしまった。swim は play を使わない。',
        correctAnswer: 'I swim in summer.',
        correctExplanation:
          'swim はそれ自体が「泳ぐ」という動詞なので、play は必要ない。同じように run（走る）、ski（スキーをする）、skate（スケートをする）も play を使わない。play を使うのは、ボールなどを使うスポーツと楽器である。',
      },
    ],
  },
  {
    id: 'eigo_s467',
    subject: 'eigo',
    examType: 'chugaku',
    title: '語彙③：季節と行事',
    description: '四つの季節と、一年の行事を英語で言えるようにする',
    intro:
      '季節と行事は、自己しょうかいや作文でよく使います。「わたしは夏が好きです。なぜなら…」と言えるようにしておきましょう。',
    order: 967,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '季節は spring（春）、summer（夏）、fall または autumn（秋）、winter（冬）。',
      '季節には in をつける。in summer（夏に）。',
      "行事：New Year's Day（元日）、Christmas（クリスマス）、sports day（運動会）。",
      "天気は It's で始める。It's sunny.（晴れています）",
      '「〜が好きです、なぜなら〜」は I like ~ because ~ と言う。',
      '季節の名前は、ふつう小文字で書き始める。',
    ],
    sections: [
      {
        heading: 'まとめておぼえる',
        body: `■ 季節
spring（春）／summer（夏）／fall（秋。autumn とも言う）／winter（冬）
・in spring（春に）／in summer（夏に）
・My favorite season is summer.（好きな季節は夏です）

季節の名前は小文字で書き始める。月の名前や曜日は大文字なので、ここがちがう。

■ 天気
sunny（晴れ）／cloudy（くもり）／rainy（雨）／snowy（雪）／windy（風が強い）／hot（暑い）／cold（寒い）／warm（あたたかい）／cool（すずしい）
・How's the weather? — It's sunny.（天気はどうですか — 晴れです）
・It's hot in summer.（夏は暑いです）

■ 一年の行事
・New Year's Day（元日）
・the Doll Festival（ひな祭り）
・the entrance ceremony（入学式）
・Children's Day（こどもの日）
・the Star Festival（七夕）
・the summer festival（夏祭り）
・sports day（運動会）
・the school trip（修学旅行）
・Halloween（ハロウィン）
・Christmas（クリスマス）
・New Year's Eve（大みそか）

行事の名前で、決まった名前になっているものは大文字で書き始める。

■ 季節と行事を結びつける
・In spring, we have the entrance ceremony.（春には入学式があります）
・In summer, we have the summer festival.（夏には夏祭りがあります）
・In fall, we have sports day.（秋には運動会があります）
・In winter, we have Christmas.（冬にはクリスマスがあります）

■ 理由を言う
I like summer because I can swim.（泳げるので夏が好きです）
because のあとに理由をつづける。

★ ポイント：季節は小文字、行事の決まった名前は大文字。書くときに気をつける。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 言ってみる
・My favorite season is winter.（好きな季節は冬です）
・I like winter because I can ski.（スキーができるので冬が好きです）
・It's cold in winter.（冬は寒いです）
・We have sports day in fall.（秋に運動会があります）

■ たずねる
・What season do you like? — I like spring.
・How's the weather today? — It's rainy.
・What do you do in summer? — I go to the sea.

■ まちがえやすいところ
・季節を大文字で書いてしまう（Summer ではなく summer）
・天気の文の主語を忘れる（It's sunny. の It が必要）
・fall と autumn はどちらでもよい

■ 季節と月
・spring：March、April、May
・summer：June、July、August
・fall：September、October、November
・winter：December、January、February

■ 作文で使える形
My favorite season is ~.
I like ~ because ~.
In ~, I ~.
この三つを組み合わせると、短い作文が書ける。

⚠ 注意：天気を言うときは、必ず It's で始める。The weather is sunny. とも言えるが、ふつうは It's sunny. と言う。主語を落として Sunny. だけにしないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「夏が好きです」の「夏」は、大文字と小文字のどちらで書き始めますか。',
        wrongAnswer: '大文字。Summer と書く。',
        trapExplanation:
          '曜日や月が大文字なので、季節も大文字だと考えてしまう。季節は小文字である。',
        correctAnswer: '小文字。summer と書く。',
        correctExplanation:
          '曜日（Monday）と月（May）は大文字で書き始めるが、季節（spring、summer、fall、winter）は小文字である。I like summer. が正しい。ただし文の最初に来るときは、文の決まりとして大文字になる。',
      },
      {
        question: '「今日は晴れです」を英語で書きなさい。',
        wrongAnswer: 'Today is sunny weather.',
        trapExplanation:
          "日本語のままの形にしてしまった。天気を言うときは It's で始める決まった言い方がある。",
        correctAnswer: "It's sunny today.",
        correctExplanation:
          "天気を言うときは It's で始める。It's sunny.、It's rainy.、It's cold. のようになる。この it は「それ」という意味ではなく、天気や時こくを言うときの決まった主語である。today は文の終わりにつける。",
      },
    ],
  },
  {
    id: 'eigo_s468',
    subject: 'eigo',
    examType: 'chugaku',
    title: '語彙④：気持ちを表す語',
    description: 'うれしい・悲しい・つかれたなどを、文の形で言えるようにする',
    intro:
      '気持ちを表す語は、be動詞といっしょに使います。I am happy. の形を覚えれば、あとは語を入れかえるだけです。',
    order: 968,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '気持ちを表す語は、be動詞（am・is・are）といっしょに使う。',
      'happy（うれしい）、sad（悲しい）、angry（おこっている）。',
      'tired（つかれた）、sleepy（ねむい）、hungry（おなかがすいた）、thirsty（のどがかわいた）。',
      'excited（わくわくしている）、surprised（おどろいた）、nervous（きんちょうしている）。',
      '程度を表すときは very や a little をつける。I am very happy.',
      '「〜して…な気持ちだ」は I am happy to ~ と言う。',
    ],
    sections: [
      {
        heading: 'まとめておぼえる',
        body: `■ 基本の気持ち
happy（うれしい）／sad（悲しい）／angry（おこっている）／fine（元気だ）／good（よい）／bad（悪い）

■ 体の感じ
tired（つかれた）／sleepy（ねむい）／hungry（おなかがすいた）／thirsty（のどがかわいた）／sick（具合が悪い）／hot（暑い）／cold（寒い）

■ 気持ちの動き
excited（わくわくしている）／surprised（おどろいた）／nervous（きんちょうしている）／scared（こわい）／bored（たいくつだ）／glad（うれしい）

■ 文の形
I am ＋ 気持ちを表す語
・I am happy.（うれしいです）
・I am hungry.（おなかがすいています）
・She is tired.（かのじょはつかれています）
・They are excited.（かれらはわくわくしています）

■ 程度をつける
・very（とても）：I am very happy.
・a little（少し）：I am a little tired.
・so（とても）：I am so happy.

■ たずねる
・How are you? — I'm fine, thank you.／I'm tired.
・Are you hungry? — Yes, I am.／No, I'm not.
・What's wrong? — I'm sick.（どうしたの — 具合が悪いんです）

■ 理由を言う
・I am happy because it's my birthday.（たん生日なのでうれしいです）
・I am tired because I played soccer.（サッカーをしたのでつかれました）

★ ポイント：気持ちの語は be動詞とセット。I happy. のように be動詞を落とさない。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 言ってみる
・I am hungry. Let's have lunch.（おなかがすきました。昼食にしましょう）
・She is sad because her dog is sick.（犬の具合が悪いので、かのじょは悲しんでいます）
・Are you sleepy? — Yes, a little.

■ 顔の様子と結びつける
・smile（ほほえむ）→ happy
・cry（泣く）→ sad
・yawn（あくびをする）→ sleepy

■ まちがえやすいところ
・be動詞を落とす（誤：I happy。正：I am happy）
・hungry と angry を見まちがえる（つづりが似ている）
・「のどがかわいた」を I want water. とだけ言ってしまう（I'm thirsty. が自然）

■ hungry と angry
・hungry（ハングリー）：おなかがすいた
・angry（アングリー）：おこっている
一文字ちがうだけなので、意味を取りちがえないよう注意する。

■ あいさつの中で使う
A: How are you?
B: I'm fine, thank you. And you?
A: I'm good, thanks.

■ 相手を気づかう言い方
・Are you OK?（だいじょうぶ？）
・That's too bad.（それは残念だね）
・I'm glad to hear that.（それを聞いてうれしいです）

⚠ 注意：気持ちを表す語は形容詞なので、一般動詞とはならべない。I am play happy. のような文にはならない。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしはおなかがすいています」を英語で書きなさい。',
        wrongAnswer: 'I hungry.',
        trapExplanation:
          'be動詞を落としてしまった。気持ちや体の感じを表す語には be動詞が必要である。',
        correctAnswer: "I am hungry.（I'm hungry.）",
        correctExplanation:
          'happy、hungry、tired などは「〜な状態だ」を表す語なので、be動詞（am・is・are）といっしょに使う。日本語では「おなかがすいた」と一語で言えるが、英語では I am hungry. と be動詞が必要である。主語に合わせて am・is・are を選ぶこと。',
      },
      {
        question: 'angry の意味は何ですか。',
        wrongAnswer: 'おなかがすいた',
        trapExplanation:
          'hungry とつづりが似ているので取りちがえた。一文字ちがうだけで意味が変わる。',
        correctAnswer: 'おこっている',
        correctExplanation:
          'angry は「おこっている」、hungry は「おなかがすいた」である。つづりは h があるかどうかだけのちがいなので、意味とセットで覚える。I am angry.（おこっています）、I am hungry.（おなかがすいています）と、例文で区別するとよい。',
      },
    ],
  },
  {
    id: 'eigo_s469',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話①：買い物',
    description: '店で使う言い方を、店員とお客のやりとりの形で覚える',
    intro:
      '買い物の会話は、聞かれることも答えることも決まっています。やりとりの形ごと覚えてしまえば、そのまま使えます。',
    order: 969,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '店員の言い方：May I help you?（いらっしゃいませ）',
      "お客の言い方：I want ~, please. / I'd like ~, please.",
      '値段をたずねるときは How much is it?',
      "答えは It's ~ yen. / It's ~ dollars.",
      '手わたすときは Here you are.（はいどうぞ）',
      "買うと決めたら I'll take it.（それをください）",
    ],
    sections: [
      {
        heading: 'やりとりの形',
        body: `■ 店に入る
店員：May I help you?（いらっしゃいませ／何かおさがしですか）
お客：Yes, please. I want a T-shirt.（はい。Tシャツがほしいです）
　　　または No, thank you. I'm just looking.（いいえ、見ているだけです）

■ ほしいものを言う
・I want a cap, please.（ぼうしがほしいです）
・I'd like a hamburger, please.（ハンバーガーをお願いします）
　I'd like は I want よりていねいな言い方。

■ 値段をたずねる
お客：How much is it?（いくらですか）
店員：It's 500 yen.（500円です）

複数のものなら
・How much are they?（それらはいくらですか）
・They are 1,000 yen.

■ 買うと決める
・I'll take it.（それをください）
・I'll take two.（2つください）

■ お金をわたす・受け取る
お客：Here you are.（はいどうぞ）
店員：Thank you. Here's your change.（ありがとうございます。おつりです）
お客：Thank you.

■ そのほかの言い方
・Do you have a bigger one?（もっと大きいのはありますか）
・Can I try it on?（試着してもいいですか）
・What color do you want?（何色がほしいですか）
・That's too expensive.（高すぎます）

■ ファストフード店で
店員：What would you like?（何になさいますか）
お客：I'd like a hamburger and a small drink, please.
店員：For here or to go?（店内でめしあがりますか、お持ち帰りですか）
お客：For here, please.

★ ポイント：How much is it? と It's ~ yen. の一往復が、買い物の会話の中心である。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 役になって言ってみる
店員：May I help you?
お客：Yes, please. I want a notebook.
店員：Here you are. It's 200 yen.
お客：Here you are.
店員：Thank you.

■ 値段の言い方
・500 yen（500円）
・1,000 yen（1000円）
・three dollars（3ドル）
yen は複数でも s をつけない。three yen ではなく、金額をそのまま言う。

■ まちがえやすいところ
・How much のあとを is にするか are にするか（1つなら is、2つ以上なら are）
・Here you are. と Here it is. はどちらも「はいどうぞ」
・「ください」を Give me ~. と言うと、ていねいでない。please をつけるか I'd like ~ を使う

■ ていねいさの順
・I want a cap.（ほしい）
・I want a cap, please.（ほしいです、お願いします）
・I'd like a cap, please.（いただきたいのですが）
下にいくほどていねいになる。

■ お礼と返事
・Thank you. — You're welcome.
・Thanks. — No problem.

⚠ 注意：Give me ~. は命令する言い方なので、店では使わない。I want ~, please. か I'd like ~, please. を使うこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「いくらですか」を英語で書きなさい。',
        wrongAnswer: 'How many is it?',
        trapExplanation:
          'How many と How much を取りちがえた。値段をたずねるときは How much を使う。',
        correctAnswer: 'How much is it?',
        correctExplanation:
          'How much は「いくら」「どれくらいの量」をたずねる言い方で、値段には必ずこちらを使う。How many は「いくつ」と数をたずねる言い方で、うしろに複数形の名詞が来る。How many books do you have? のように使う。',
      },
      {
        question: '店で「ぼうしをください」と言うとき、最もていねいな言い方はどれですか。',
        wrongAnswer: 'Give me a cap.',
        trapExplanation:
          '「ください」をそのまま英語にしてしまった。Give me ~ は命令する言い方で、店では使わない。',
        correctAnswer: "I'd like a cap, please.",
        correctExplanation:
          "Give me ~. は「よこしなさい」に近い強い言い方なので、店では使わない。I want a cap, please. でもよいが、I'd like a cap, please. のほうがていねいである。please をつけるだけでも、ずいぶんやわらかくなる。",
      },
    ],
  },
  {
    id: 'eigo_s470',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話②：道をたずねる・教える',
    description: '行き方をたずねる言い方と、道順を伝える言い方を覚える',
    intro:
      '道案内は、使う言い方が数えるほどしかありません。まっすぐ行って、曲がって、右にある。この三つで、たいていの道は説明できます。',
    order: 970,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'たずね方：Where is ~? / How can I get to ~?',
      'Go straight.（まっすぐ行ってください）',
      'Turn right.（右に曲がってください）／Turn left.（左に曲がってください）',
      "It's on your right.（右側にあります）",
      '目印を言うときは at the corner（角で）、at the second light（二つ目の信号で）。',
      "お礼は Thank you.、返事は You're welcome.",
    ],
    sections: [
      {
        heading: 'やりとりの形',
        body: `■ たずねる
・Excuse me.（すみません）
・Where is the station?（駅はどこですか）
・How can I get to the library?（図書館へはどう行けばいいですか）
・Is there a post office near here?（この近くに郵便局はありますか）

■ 道順を伝える
・Go straight.（まっすぐ行ってください）
・Go straight for two blocks.（2ブロックまっすぐ行ってください）
・Turn right at the corner.（角を右に曲がってください）
・Turn left at the second light.（二つ目の信号を左に曲がってください）
・You can see it on your right.（右側に見えます）
・It's next to the bank.（銀行のとなりです）
・It's in front of the park.（公園の前です）

■ どれくらいかかるか
・How long does it take?（どれくらいかかりますか）
・It takes about five minutes.（5分くらいです）
・It's about 300 meters from here.（ここから300メートルくらいです）

■ 交通手段
・How do you go to school? — By bus.（バスで）
・by train（電車で）／by bike（自転車で）／by car（車で）／on foot（歩いて）
by のあとには a や the をつけない。「歩いて」だけ on foot となる。

■ 会話の例
A: Excuse me. Where is the hospital?
B: Go straight for two blocks, and turn left at the corner. It's on your right.
A: Thank you very much.
B: You're welcome.

★ ポイント：Go straight、Turn right／left、It's on your right。この三つで道案内はできる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 言ってみる
・Excuse me. How can I get to the station?
・Go straight and turn right at the second corner.
・It's next to the bookstore.

■ 目印を表す語
corner（角）／traffic light（信号）／crossing（こうさ点）／bridge（橋）／bus stop（バス停）

■ 位置を表す語
・next to ~（〜のとなりに）
・in front of ~（〜の前に）
・behind ~（〜のうしろに）
・between A and B（AとBの間に）
・across from ~（〜の向かいに）

■ まちがえやすいところ
・by bus に the をつけてしまう（誤：by the bus）
・「歩いて」を by foot としてしまう（正：on foot）
・Turn に to をつけてしまう（誤：Turn to right。正：Turn right）

■ 分からないときの言い方
・I'm sorry. I don't know.（ごめんなさい、わかりません）
・I'm not from here.（この辺の者ではありません）

■ 聞き返す
・Pardon?（もう一度お願いします）
・Could you say that again?（もう一度言っていただけますか）

⚠ 注意：Turn right のあとに to は入れない。ただし「右へ行く」は go to the right と言うこともある。turn のときは to をつけない、と覚えること。`,
      },
      {
        heading: 'なぜ三つの言い方で道案内ができるのか、なぜ Turn に to が要らないのか',
        body: `道順は、どんなに複雑でも「**まっすぐ進む・曲がる・着く**」の三つの動きの組み合わせです。だから Go straight（進む）、Turn right／left at 〜（曲がる）、It's on your right／next to 〜（着く）の三つの言い方があれば、たいていの道を説明できます。目印（corner・traffic light・bridge）を at 〜 で足せば、どこで曲がるかも伝わります。

Turn right に to が要らないのは、right が「右に」という**向きを表す副詞**で、それだけで動詞 turn を説明できるからです。to を付けると「右という場所へ」となって不自然です。「歩いて」が on foot なのは、by のあとに置けるのが乗り物の名前だけで、足は乗り物ではないからです。

■ 確かめのしかた
①たずねるときは **Excuse me.** から。Where is 〜?／How can I get to 〜?／Is there a 〜 near here?
②道順を三つの動きで組み立てる：Go straight (for two blocks)→Turn right at the corner→It's on your right／next to the bank。
③× Turn to right→Turn right。× by the bus→by bus。× by foot→on foot（または I walk to school.）。
④分からないときは I'm sorry. I don't know.／I'm not from here.、聞き返すときは Pardon?／Could you say that again?

★ ここがポイント：道順は**進む・曲がる・着く**の三つの動きなので、Go straight・Turn right／left・It's on your right で説明できる。right は向きの副詞なので **Turn right（to なし）**、歩くのは **on foot**。`,
      },
    ],
    trapExamples: [
      {
        question: '「歩いて学校へ行きます」を英語で書きなさい。',
        wrongAnswer: 'I go to school by foot.',
        trapExplanation:
          '交通手段をすべて by で表すと考えてしまった。「歩いて」だけは on を使う。',
        correctAnswer: 'I go to school on foot.',
        correctExplanation:
          'by bus、by train、by bike、by car のように乗り物には by を使うが、「歩いて」は on foot と言う。また I walk to school.（歩いて学校へ行きます）と言うこともでき、こちらのほうがよく使われる。',
      },
      {
        question: '「右に曲がってください」を英語で書きなさい。',
        wrongAnswer: 'Turn to right.',
        trapExplanation:
          '「〜に」をそのまま to にしてしまった。turn のあとに to はつけない。',
        correctAnswer: 'Turn right.',
        correctExplanation:
          'Turn right.、Turn left. のように、turn のあとには to をつけない。命令する文なので主語も書かない。ていねいに言うなら Please turn right. または Turn right, please. となる。',
      },
    ],
  },
  {
    id: 'eigo_s471',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話③：自己しょうかいと友だちづくり',
    description: '名前・好きなもの・できることを、順序立てて話せるようにする',
    intro:
      '自己しょうかいは、話す順番を決めておけば、その場で考えなくてすみます。名前、好きなもの、できること。この三つで十分です。',
    order: 971,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      "名前は I'm ~. または My name is ~.",
      'I like ~.（〜が好きです）で好きなものを言う。',
      'I can ~.（〜ができます）でできることを言う。',
      'I want to be ~.（〜になりたいです）で夢を言う。',
      'Nice to meet you.（はじめまして）と言われたら Nice to meet you, too. と返す。',
      '最後に Thank you. で終える。',
    ],
    sections: [
      {
        heading: '話す順番',
        body: `■ 基本の形
①あいさつ
Hello. / Hi.
②名前
I'm Ken. / My name is Ken Sato.
③好きなもの
I like soccer. / My favorite food is curry.
④できること
I can play the piano. / I can swim fast.
⑤したいこと・夢
I want to be a teacher.
⑥しめくくり
Thank you.

■ 例
Hello. My name is Yuki.
I like music and reading books.
My favorite subject is English.
I can play the piano.
I want to be a singer.
Thank you.

■ 相手にたずねる
・What's your name? — I'm Ken.
・How old are you? — I'm ten years old.
・What sport do you like? — I like tennis.
・Where are you from? — I'm from Osaka.
・What subject do you like? — I like science.

■ はじめましてのやりとり
A: Hello. I'm Ken. Nice to meet you.
B: Hi, Ken. I'm Mary. Nice to meet you, too.
A: How are you?
B: I'm fine, thank you. And you?
A: I'm good, thanks.

■ 別れるとき
・Goodbye. / Bye. / See you.
・See you tomorrow.（また明日）
・Have a nice day.（よい一日を）

★ ポイント：名前・好きなもの・できることの三つを用意しておけば、どんな場面でも自己しょうかいができる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 自分のことを書いてみる
Hello. My name is ______.
I like ______.
My favorite ______ is ______.
I can ______.
I want to be ______.
Thank you.

空らんをうめて、声に出して読む練習をする。

■ 使える語
・favorite（お気に入りの）：My favorite color is blue.
・subject（教科）：math、science、English、Japanese、music、P.E.
・job（仕事）：teacher、doctor、nurse、vet（じゅう医）、pilot、singer、soccer player

■ まちがえやすいところ
・I'm ten years old. の years に s をつけ忘れる
・Nice to meet you. への返事で too を落とす
・「〜になりたい」を I want be ~ としてしまう（正：I want to be ~）

■ 相手の話を聞く
・Really?（ほんとう？）
・Me too.（わたしも）
・That's nice.（いいね）
・Sounds good.（よさそうだね）
あいづちを打てると、会話が続く。

■ 発表のときの気をつけかた
・大きな声で、ゆっくり話す
・相手の顔を見る
・最後に Thank you. と言う

⚠ 注意：Nice to meet you. は初めて会ったときだけに使う。二回目からは Nice to see you. または How are you? を使う。`,
      },
      {
        heading: 'なぜ話す順番を決めておくのか、なぜ too を付けるのか',
        body: `自己しょうかいは、聞く側が**名前→好きなもの→できること**の順で情報を受け取ると、相手の人物像を組み立てやすくなります。話す側も順番が決まっていれば、その場で考えずに、空らんをうめるだけで話せます。「〜になりたい」が want to be なのは、want（〜したい）のあとに動作を続けるには to＋動詞のもとの形が要り、「〜である」の動詞が be だからです。I want be は to が抜けて文になりません。

Nice to meet you. に Nice to meet you, too. と返すのは、相手が先に言った「会えてうれしい」に「**私もです**」と気持ちを重ねるからです。too（〜も）が無いと、相手の言葉をただくり返しただけになります。初めて会ったときだけに使い、二回目からは Nice to see you. か How are you? です。

■ 確かめのしかた
①**あいさつ→名前→好きなもの→できること→なりたいもの→Thank you.** の順で言えるか。
②I'm ten years old.（years に s）、I want **to** be a teacher.（to を落とさない）。
③Nice to meet you. と言われたら **Nice to meet you, too.**（コンマと too）。二回目以降は Nice to see you.
④あいづち（Really?／Me too.／That's nice.）を入れると会話が続く。発表は大きな声でゆっくり、相手の顔を見て、最後に Thank you.

★ ここがポイント：**名前→好きなもの→できること**の順は、聞く側が人物像を組み立てやすい順。want のあとは **to＋もとの形**（want to be）。Nice to meet you. には**「私も」の too** を付けて返す。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしは先生になりたいです」を英語で書きなさい。',
        wrongAnswer: 'I want be a teacher.',
        trapExplanation:
          'want のあとの to を落としてしまった。「〜したい」は want to ~ の形になる。',
        correctAnswer: 'I want to be a teacher.',
        correctExplanation:
          '「〜したい」は want to ＋ 動詞のもとの形で表す。I want to be a teacher.、I want to play soccer.、I want to go to America. のようになる。to を落とすと文として成り立たない。',
      },
      {
        question: '「Nice to meet you.」と言われたときの返事はどれですか。',
        wrongAnswer: 'Nice to meet you.',
        trapExplanation:
          '同じ言葉をそのまま返してしまった。返すときは「わたしもです」を表す too をつける。',
        correctAnswer: 'Nice to meet you, too.',
        correctExplanation:
          "相手が先に言ったのに対して返すときは、too をつけて Nice to meet you, too. と言う。コンマを忘れずに書く。同じように Thank you. — You're welcome.、See you. — See you. のように、返し方が決まっている言い方を覚えておくとよい。",
      },
    ],
  },
  {
    id: 'eigo_s472',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話④：教室で使う言い方',
    description: '先生の指示と、自分から言うお願いの形を覚える',
    intro:
      '教室で先生が使う言い方は決まっています。聞いて分かるようにしておけば、英語の授業がぐっと楽になります。',
    order: 972,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '先生の指示は命令する文の形。Open your book.',
      'Stand up.（立って）／Sit down.（すわって）',
      'Listen.（聞いて）／Repeat after me.（あとについて言って）',
      'お願いするときは Can I ~? または May I ~? を使う。',
      "分からないときは I don't know. / I don't understand.",
      'もう一度言ってほしいときは Pardon? または One more time, please.',
    ],
    sections: [
      {
        heading: 'よく使う言い方',
        body: `■ 先生の指示
・Stand up.（立ちなさい）
・Sit down.（すわりなさい）
・Open your textbook to page ten.（教科書の10ページを開きなさい）
・Close your book.（本を閉じなさい）
・Look at the blackboard.（黒板を見なさい）
・Listen carefully.（よく聞きなさい）
・Repeat after me.（あとについて言いなさい）
・Read aloud.（声に出して読みなさい）
・Write your name.（名前を書きなさい）
・Raise your hand.（手をあげなさい）
・Make pairs.（ペアになりなさい）
・Be quiet.（静かにしなさい）

■ 自分から言う
・Can I go to the bathroom?（トイレに行ってもいいですか）
・May I come in?（入ってもいいですか）
・Can you help me?（手伝ってもらえますか）
・I have a question.（質問があります）
・How do you say this in English?（これは英語で何と言いますか）
・What does this mean?（これはどういう意味ですか）
・How do you spell it?（つづりはどう書きますか）

■ 分からないとき
・I don't know.（わかりません）
・I don't understand.（理解できません）
・Pardon?（もう一度お願いします）
・One more time, please.（もう一度お願いします）
・Please speak slowly.（ゆっくり話してください）

■ 答えるとき
・Yes.／No.
・I see.（なるほど）
・OK.／All right.
・Here you are.（はいどうぞ。ものをわたすとき）

■ ほめられたとき
・Good job!（よくできました）
・Great!（すばらしい）
・Thank you. と返す。

★ ポイント：先生の指示はすべて動詞から始まる。動詞から始まっていたら「〜しなさい」だと分かる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 聞いて動く練習
Stand up. → 立つ
Sit down. → すわる
Open your book. → 本を開く
Raise your hand. → 手をあげる
体を動かしながら覚えると、忘れにくい。

■ お願いの形
・Can I ~?（〜してもいいですか。自分がすること）
・Can you ~?（〜してくれますか。相手にお願いすること）
この二つを取りちがえないようにする。
・Can I use your pen?（あなたのペンを使ってもいいですか）
・Can you open the window?（まどを開けてくれますか）

■ 答え方
・Can I ~? — Sure.／Of course.／Sorry, you can't.
・Can you ~? — Sure.／OK.／Sorry, I can't.

■ まちがえやすいところ
・Can I と Can you を取りちがえる
・Pardon? を Pardon me? と言う（どちらでも通じる）
・page ten の ten を序数にしてしまう（page ten でよい）

■ 授業で使う語
textbook（教科書）／notebook（ノート）／pencil case（筆箱）／eraser（消しゴム）／ruler（定規）／blackboard（黒板）／desk（つくえ）／chair（いす）

■ 相手を助ける言い方
・Let me help you.（手伝わせて）
・Don't worry.（心配しないで）
・Take your time.（ゆっくりでいいよ）

⚠ 注意：Can I ~? は自分がすること、Can you ~? は相手にお願いすること。主語がちがうだけで意味が大きく変わるので、言う前に確かめること。`,
      },
    ],
    trapExamples: [
      {
        question: '「まどを開けてくれますか」を英語で書きなさい。',
        wrongAnswer: 'Can I open the window?',
        trapExplanation:
          '主語を取りちがえた。これでは「わたしが開けてもいいですか」という意味になる。',
        correctAnswer: 'Can you open the window?',
        correctExplanation:
          '相手にしてもらいたいときは Can you ~? を使う。自分がしてよいかたずねるときは Can I ~? である。Can I open the window? は「わたしが開けてもいいですか」という意味になるので、意味が変わってしまう。だれがするのかを確かめてから主語を選ぶこと。',
      },
      {
        question: '先生が「Repeat after me.」と言いました。何をすればよいですか。',
        wrongAnswer: '先生の顔を見る',
        trapExplanation:
          '意味を知らないと動けない。repeat は「くり返して言う」という意味である。',
        correctAnswer: '先生のあとについて、同じことを言う',
        correctExplanation:
          'Repeat after me. は「わたしのあとについて言いなさい」という意味である。教室でよく使われる指示なので、Look at ~（〜を見なさい）、Listen（聞きなさい）、Read aloud（声に出して読みなさい）とあわせて覚えておくと、英語の授業についていきやすくなる。',
      },
    ],
  },
  // ── 読む練習（s473〜s474） ──
  {
    id: 'eigo_s473',
    subject: 'eigo',
    examType: 'chugaku',
    title: '短い英文を読む①：自己しょうかいの文',
    description: '知っている語だけの短い文を、意味をとりながら読む練習をする',
    intro:
      '単語を覚えても、文になると読めないことがあります。一語ずつ訳すのではなく、かたまりで区切って読む。これが読む力の第一歩です。',
    order: 973,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '文は「だれが」「どうする」「何を」のかたまりに区切って読む。',
      '知らない語があっても、前後から意味を考えてみる。',
      '大文字で始まる語は、人の名前や地名であることが多い。',
      'and、but、because のつなぎ言葉に印をつけると、文の流れが見える。',
      '一度で分からなくても、二回三回と読み返す。',
      '読んだあとに、日本語で内容を一言で言えるか確かめる。',
    ],
    sections: [
      {
        heading: '読んでみる',
        body: `■ 読み方の手順
①大文字で始まる語（名前・地名）に丸をつける
②主語（だれが）に線を引く
③動詞（どうする）を探す
④かたまりで区切って読む

■ 英文1
Hello. My name is Aya.
I am ten years old.
I live in Osaka.
I like dogs and cats.
I have a dog. His name is Shiro.
I play with Shiro every day.

読み取ること
・名前：Aya
・年令：10才
・住んでいるところ：大阪
・好きなもの：犬とねこ
・飼っている犬の名前：Shiro

■ 英文2
This is my friend Ken.
He is eleven years old.
He likes soccer very much.
He plays soccer after school.
He can run very fast.
He wants to be a soccer player.

読み取ること
・だれのことか：友だちのケン
・年令：11才
・好きなもの：サッカー
・いつするか：放課後
・できること：速く走れる
・夢：サッカー選手

■ 気をつけて読むところ
・He likes ~ の s は、主語が he だからついている
・He can run ~ の can は「できる」
・He wants to be ~ は「〜になりたい」

★ ポイント：一語ずつ日本語にしない。「だれが」「どうする」のかたまりで読むと、速く正確になる。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 答えてみる（英文1について）
・What is her name? — Her name is Aya.
・How old is she? — She is ten years old.
・Where does she live? — She lives in Osaka.
・Does she have a cat? — No, she doesn't. She has a dog.

■ 答えてみる（英文2について）
・What sport does Ken like? — He likes soccer.
・When does he play soccer? — He plays soccer after school.
・What does he want to be? — He wants to be a soccer player.

答えるときは、英文の言葉をそのまま使うと正確になる。

■ 知らない語があったとき
①その語を飛ばして読んでみる
②前後から意味を考える
③それでも分からなければ、あとで辞書を引く
一語で止まらないことが大切である。

■ 音読の効果
声に出して読むと、意味のかたまりが自然に分かるようになる。一日に一つ、短い文章を音読するとよい。

■ まちがえやすいところ
・he と she を取りちがえる
・likes の s を見落として、主語をまちがえる
・his（かれの）と he（かれは）を取りちがえる

⚠ 注意：問題に答えるときは、英文の中の言葉をそのまま使う。自分の知っている別の言い方に変えると、まちがいのもとになる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「He likes soccer.」の likes に s がついているのはなぜですか。',
        wrongAnswer: 'soccer が一つだけだから',
        trapExplanation:
          'うしろの語に合わせていると考えてしまう。s がつくかどうかを決めるのは主語である。',
        correctAnswer: '主語が He（1人）だから',
        correctExplanation:
          '動詞に s がつくのは、主語が he、she、it、または1人・1つのときである。うしろに来る語の数とは関係がない。I like soccer.、They like soccer. では s がつかない。文を読むときも、s を見たら主語が1人だと分かる手がかりになる。',
      },
      {
        question:
          '英文を読んでいて知らない語が出てきたとき、まず何をすればよいですか。',
        wrongAnswer: 'そこで止まって、辞書を引くまで先に進まない',
        trapExplanation:
          '一語ずつ完全に分かろうとしてしまう。読む練習では、まず全体をつかむほうが大切である。',
        correctAnswer: 'その語を飛ばして読み進め、前後から意味を考える',
        correctExplanation:
          '知らない語で止まると、文全体の流れが分からなくなる。まず飛ばして最後まで読み、前後の内容から意味を考える。それでも分からなければあとで調べる。この読み方ができると、初めて見る文章でも内容をつかめるようになる。',
      },
    ],
  },
  {
    id: 'eigo_s474',
    subject: 'eigo',
    examType: 'chugaku',
    title: '短い英文を読む②：一日の生活と手紙',
    description: '時こくや曜日が出てくる文を読み、内容を表に整理する',
    intro:
      '一日の生活を書いた文には、時こくがたくさん出てきます。何時に何をするかを表にしながら読むと、頭の中が整理されます。',
    order: 974,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '時こく（at seven）や曜日（on Sunday）に印をつけながら読む。',
      '何時に何をするかを、順に書き出して整理する。',
      'usually（たいてい）、always（いつも）、sometimes（ときどき）に注意する。',
      '手紙の文には、書き出しとむすびの決まった言い方がある。',
      'Dear ~,（〜さんへ）で始め、Your friend, ~（友だちの〜より）で終える。',
      '読み終えたら、内容を日本語で一言でまとめる。',
    ],
    sections: [
      {
        heading: '読んでみる',
        body: `■ 英文1：一日の生活
I get up at six thirty.
I have breakfast at seven.
I go to school at eight.
I study English, math, and science.
I have lunch at twelve.
I go home at four.
I do my homework after dinner.
I go to bed at nine thirty.

表に整理すると
6:30 起きる
7:00 朝ごはん
8:00 学校へ行く
12:00 昼ごはん
4:00 家へ帰る
夕食のあと 宿題
9:30 ねる

■ 英文2：週末のこと
I usually get up at seven on Sunday.
I sometimes play soccer with my friends in the park.
I always help my mother in the afternoon.
I like Sunday very much.

読み取ること
・usually（たいてい）：日曜は7時に起きる
・sometimes（ときどき）：友だちと公園でサッカー
・always（いつも）：午後は母を手伝う

■ 英文3：手紙
Dear Mary,
Hello. How are you?
I am fine. I am in the fifth grade now.
My favorite subject is music. I can play the piano.
Please write to me soon.

Your friend,
Ken

手紙の形
・Dear ~,（〜さんへ）で始める
・本文
・Your friend,（友だちの〜より）
・自分の名前

★ ポイント：時こく・曜日・always などの語に印をつけながら読むと、内容が整理される。`,
      },
      {
        heading: '練習と気をつけること',
        body: `■ 答えてみる（英文1について）
・What time does he get up? — He gets up at six thirty.
・What time does he go to bed? — He goes to bed at nine thirty.
・When does he do his homework? — After dinner.

■ 答えてみる（英文2について）
・What does he do on Sunday afternoon? — He helps his mother.
・Does he always play soccer? — No, he sometimes plays soccer.

■ ひんどを表す語
always（いつも、100パーセント）
usually（たいてい）
often（よく）
sometimes（ときどき）
never（一度も〜ない）
これらの語は、ふつう一般動詞の前に置く。
・I sometimes play tennis.
・I never eat natto.

■ 手紙で使う言い方
・Dear ~,（〜さんへ）
・How are you?（お元気ですか）
・I am fine.（元気です）
・Please write to me soon.（お返事ください）
・Your friend, ~（友だちの〜より）
・See you soon.（また近いうちに）

■ まちがえやすいところ
・always と never を取りちがえる（意味が正反対）
・ひんどを表す語を動詞のうしろに置いてしまう
・手紙の Dear のあとのコンマを忘れる

⚠ 注意：never は「一度も〜ない」という意味で、それだけで打ち消しを表す。I never don't eat ~ のように don't を重ねてはいけない。`,
      },
      {
        heading: 'なぜ表に整理しながら読み、なぜ never には don\'t を重ねないのか',
        body: `一日の生活の文には時こくが次々に出てくるので、読みながら「何時に何をするか」を表にすると、あとで What time does he get up? と聞かれたときに表を見るだけで答えられます。時こく・曜日・ひんどの語（always・usually・sometimes）に印をつけるのは、設問がそこを聞くからです。

never が「一度も〜ない」で don't を重ねないのは、never が**それ自体に打ち消しの意味を持つ語**だからです。I never don't eat 〜 と書くと打ち消しが二重になります。ひんどの語が一般動詞の前に置かれるのは、動詞の「どれくらいの頻度で」を説明する語だからで、be動詞のときはそのうしろ（I am always busy.）に置きます。always→usually→often→sometimes→never の順に少なくなります。

■ 確かめのしかた
①読みながら**時こく・曜日・ひんどの語に印**をつけ、「何時に何を」を表にする。
②ひんどの語の位置：**一般動詞の前**（I sometimes play tennis.）、**be動詞のあと**（I am always busy.）。× I play sometimes tennis。
③never は単独で打ち消し（I never eat natto.＝一度も食べない）。× I never don't eat。always（いつも）と取りちがえていないか。
④手紙の形：Dear 〇〇,（コンマ）→本文→Your friend,→自分の名前。Please write to me soon.

★ ここがポイント：時こく・ひんどの語に**印をつけて表にする**と設問にすぐ答えられる。never は**それ自体が打ち消し**なので don't を重ねず、ひんどの語は**一般動詞の前・be動詞のあと**。`,
      },
    ],
    trapExamples: [
      {
        question: '「I never eat natto.」の意味は何ですか。',
        wrongAnswer: 'わたしはいつも納豆を食べます。',
        trapExplanation:
          'never を always と取りちがえた。never は打ち消しの意味をもつ語である。',
        correctAnswer: 'わたしは一度も納豆を食べません。',
        correctExplanation:
          'never は「一度も〜ない」という意味で、それ自体が打ち消しを表す。always（いつも）とは正反対である。ひんどを表す語は always → usually → often → sometimes → never の順に少なくなる、と並べて覚えるとよい。',
      },
      {
        question: '「ときどきテニスをします」を英語で書きなさい。',
        wrongAnswer: 'I play sometimes tennis.',
        trapExplanation:
          'ひんどを表す語の置き場所をまちがえた。ふつうは一般動詞の前に置く。',
        correctAnswer: 'I sometimes play tennis.',
        correctExplanation:
          'always、usually、often、sometimes、never は、一般動詞の前に置く。I sometimes play tennis. が正しい。ただし be動詞のときは、be動詞のうしろに置く（I am always busy.）。動詞の種類によって位置が変わる点に注意する。',
      },
    ],
  },
];
