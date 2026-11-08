// 月例実力テスト 2027年1月号（英語・中学受験）担当A c01〜c25 の動く図解。キーは問題ID。
// 流れは「問題を見る → なぜ（ルール）→ ステップ → 答え → 確かめ → よくあるまちがい」。座標は 320×240。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, show, fresh } from './diagram-kit';

type Col = 'main' | 'blue' | 'green' | 'red' | 'purple' | 'gray';
const FL: Record<Col, string> = { main: FILL.warm, blue: FILL.blue, green: FILL.green, red: FILL.red, purple: FILL.purple, gray: FILL.gray };
const b = (x: number, y: number, w: number, h: number, text: string, col: Col = 'main', size = 12): DiagramElement => bx(x, y, w, h, text, C[col], FL[col], size);
const a = (x1: number, y1: number, x2: number, y2: number, col: Col = 'main'): DiagramElement => ar(x1, y1, x2, y2, C[col]);
const t = (x: number, y: number, text: string, col: Col | 'ink' = 'ink', size = 12, anchor: 'start' | 'middle' | 'end' = 'middle', bold = false): DiagramElement =>
  lb(x, y, text, size, col === 'ink' ? C.ink : C[col], anchor, bold);
/** 1枚のスライド（画面をまっさらにして描く） */
const sl = (note: string, els: DiagramElement[]) => ({ note, add: fresh(...els) });

const fc01 = show([
  sl("【問題を見る】空所に入る語を選びます。「2月は1年の2番目の月です」という文をつくります。", [
    b(14.7,26,111.7,28,"February is the","blue",11),
    b(131.4,26,38.0,28,"＿＿","red",11),
    b(174.4,26,130.8,28,"month of the year.","gray",11),
    b(14,164,292,34,"「2番目」の言い方は？",'gray',14),
  ]),
  sl("【なぜ？】「1番目・2番目・3番目…」と順番を表す言い方を序数（じょすう）といい、the をつけて使います。one・two は数を表す語で、順番には使いません。1番目から3番目までは first・second・third という特別な形で、4番目からは four に th をつけた fourth のように作ります。", [
    b(14,18,292,28,"数：one・two・three …","blue",13),
    b(14,52,292,28,"順番：first・second・third …","green",13),
    b(14,86,292,28,"順番には the をつける","purple",13),
    b(14,164,292,34,"2番目は second",'gray',14),
  ]),
  sl("【ステップ1】1年は January（1月）、February（2月）、March（3月）…の順です。February は2番目の月です。", [
    b(14,18,292,28,"1月 → 2月 → 3月 …","blue",13),
    b(14,52,292,28,"February は2番目の月","green",13),
    b(14,164,292,34,"2番目は second",'gray',14),
  ]),
  sl("【ステップ2】「2番目」は序数で second です。two は「2つ」と数をいうだけで、「2番目」の意味にはなりません。", [
    b(14,18,292,28,"2番目 ＝ second","green",13),
    b(14,52,292,28,"two は数をいうだけ","red",13),
    b(14,164,292,34,"2番目は second",'gray',14),
  ]),
  sl("【ステップ3】second を入れて、February is the second month of the year. と読みます。「2月は1年の2番目の月です」と日本語に合います。", [
    b(14,18,292,28,"February is the second","green",13),
    b(14,52,292,28,"month of the year.","green",13),
    b(14,164,292,34,"2番目は second",'gray',14),
  ]),
  sl("【答え】② second", [
    b(17.9,26,103.0,28,"February is the","blue",10),
    b(125.9,26,50.8,28,"second","green",10),
    b(181.7,26,120.4,28,"month of the year.","gray",10),
    b(14,164,292,34,"second",'gray',14),
  ]),
  sl("【確かめ】1月から数えると February は2番目なので second で合っています。① first は1番目で January のこと、③ two は数、④ twice は「2回」という回数の語で、the のあとに置いて「〜番目」の意味にはなりません。", [
    t(160,24,"① first（1番目）は January","red",11,'middle'),
    t(160,54,"③ two（数）では順番にならない","red",11,'middle'),
    t(160,84,"④ twice（2回）は回数","red",11,'middle'),
    t(160,114,"② second  ○",'green',13,'middle',true),
    b(14,164,292,34,"2番目は second",'gray',14),
  ]),
  sl("【よくあるまちがい】two を使って the two month としてしまうことです。順番は序数（first・second・third）、数は two・three と使い分けます。third（3番目）は three と形がちがうので注意しましょう。", [
    b(14,24,292,28,"the two month（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"the second month（○）",'green',13),
    b(14,164,292,34,"順番は first・second・third",'gray',14),
  ]),
], "2番目は second");

const fc02 = show([
  sl("【問題を見る】easy（かんたんな）と反対の意味の語を選びます。", [
    b(44.3,26,129.1,28,"The opposite of","blue",13),
    b(178.4,26,61.2,28,"'easy'","gray",13),
    b(244.6,26,31.1,28,"is","blue",13),
    b(139.0,64,42.0,28,"＿＿","red",13),
    b(14,164,292,34,"easy の反対の語は？",'gray',14),
  ]),
  sl("【なぜ？】反対の意味をもつ語をセットで覚えておくと、選択問題でも読解でも意味を取りちがえにくくなります。easy の反対は「むずかしい」の difficult です（hard も同じ意味）。simple（単純な）は easy に近い仲間の語で、反対ではありません。", [
    b(14,18,292,28,"easy ＝ かんたんな","blue",13),
    b(14,52,292,28,"反対 ＝ むずかしい","green",13),
    b(14,86,292,28,"似た意味の語とは別もの","purple",13),
    b(14,164,292,34,"easy ⇔ difficult",'gray',14),
  ]),
  sl("【ステップ1】easy は「かんたんな」という意味です。まず意味を日本語で確かめます。", [
    b(14,18,292,28,"easy ＝ かんたんな","blue",13),
    b(14,164,292,34,"easy ⇔ difficult",'gray',14),
  ]),
  sl("【ステップ2】「かんたん」の反対は「むずかしい」です。選択肢のなかで「むずかしい」を表す語は difficult です。", [
    b(14,18,292,28,"かんたん ⇔ むずかしい","green",13),
    b(14,52,292,28,"むずかしい ＝ difficult","green",13),
    b(14,164,292,34,"easy ⇔ difficult",'gray',14),
  ]),
  sl("【ステップ3】ほかの選択肢の意味も確かめます。simple は「単純な・かんたんな」で easy に近く、quick は「速い」、small は「小さい」で、反対の意味にはなりません。", [
    b(14,18,292,28,"simple ＝ 単純な（仲間）","red",13),
    b(14,52,292,28,"quick ＝ 速い  small ＝ 小さい","red",13),
    b(14,164,292,34,"easy ⇔ difficult",'gray',14),
  ]),
  sl("【答え】③ difficult", [
    b(12.7,26,169.1,28,"The opposite of 'easy'","blue",12),
    b(186.8,26,29.9,28,"is","blue",12),
    b(221.7,26,85.6,28,"difficult.","green",12),
    b(14,164,292,34,"difficult",'gray',14),
  ]),
  sl("【確かめ】The test is easy.（テストはかんたんです）の easy を difficult にすると The test is difficult.（テストはむずかしいです）となり、意味が反対になります。", [
    t(160,24,"easy test ＝ かんたんなテスト","blue",11,'middle'),
    t(160,54,"difficult test ＝ むずかしいテスト","green",11,'middle'),
    t(160,84,"意味が反対になった  ○",'green',13,'middle',true),
    b(14,164,292,34,"easy ⇔ difficult",'gray',14),
  ]),
  sl("【よくあるまちがい】simple を選んでしまうことです。simple は easy の仲間（似た意味）で、反対ではありません。「似ている」と「反対」を区別しましょう。", [
    b(14,24,292,28,"simple（×）仲間の語",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"difficult（○）反対の語",'green',13),
    b(14,164,292,34,"似ている語と反対の語を区別",'gray',14),
  ]),
], "easy ⇔ difficult");

const fc03 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。「あした、学校におくれてはいけません」という禁止の文をつくります。", [
    b(113.4,26,42.0,28,"＿＿","red",13),
    b(160.4,26,46.2,28,"late","blue",13),
    b(76.6,64,166.8,28,"for school tomorrow.","gray",13),
    b(14,164,292,34,"禁止の言い方は？",'gray',14),
  ]),
  sl("【なぜ？】命令文は、主語をつけず動詞の原形（もとの形）で始めます。「〜してはいけない」と禁止するときは、Don't ＋ 動詞の原形にします。be動詞（am・are・is）の原形は be です。だから「おくれてはいけない」は Don't be late となります。", [
    b(14,18,292,28,"命令文 ＝ 動詞の原形で始める","blue",13),
    b(14,52,292,28,"禁止 ＝ Don't ＋ 原形","green",13),
    b(14,86,292,28,"be動詞の原形 ＝ be","purple",13),
    b(14,164,292,34,"Don't be ～",'gray',14),
  ]),
  sl("【ステップ1】「おくれてはいけません」は、相手への禁止です。命令文にします。", [
    b(14,18,292,28,"「おくれてはいけない」","blue",13),
    b(14,52,292,28,"→ 相手への禁止","green",13),
    b(14,164,292,34,"Don't be ～",'gray',14),
  ]),
  sl("【ステップ2】禁止は Don't ＋ 動詞の原形。be動詞の原形は be なので Don't be の形になります。", [
    b(14,18,292,28,"Don't ＋ 原形","green",13),
    b(14,52,292,28,"be動詞の原形は be","blue",13),
    b(14,164,292,34,"Don't be ～",'gray',14),
  ]),
  sl("【ステップ3】Don't be late for school tomorrow. と読みます。「あした学校におくれてはいけません」と日本語に合います。", [
    b(14,18,292,28,"Don't be late","green",13),
    b(14,52,292,28,"for school tomorrow.","green",13),
    b(14,164,292,34,"Don't be ～",'gray',14),
  ]),
  sl("【答え】③ Don't be", [
    b(96.3,26,76.3,28,"Don't be","green",13),
    b(177.6,26,46.2,28,"late","blue",13),
    b(76.6,64,166.8,28,"for school tomorrow.","gray",13),
    b(14,164,292,34,"Don't be",'gray',14),
  ]),
  sl("【確かめ】② Not be・③ No be・④ Be not は、どれも禁止の命令文として正しい形ではありません。Don't be だけが正しい形です。", [
    t(160,24,"② Not be  → 形がまちがい","red",11,'middle'),
    t(160,54,"③ No be  → 形がまちがい","red",11,'middle'),
    t(160,84,"④ Be not  → 禁止の形ではない","red",11,'middle'),
    t(160,114,"① Don't be  ○",'green',13,'middle',true),
    b(14,164,292,34,"Don't be ～",'gray',14),
  ]),
  sl("【よくあるまちがい】Don't are や Don't is のように、am・are・is のまま使ってしまうことです。命令文では be動詞も必ず原形の be にします。", [
    b(14,24,292,28,"Don't are late（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"Don't be late（○）",'green',13),
    b(14,164,292,34,"命令文は be のまま",'gray',14),
  ]),
], "Don't be ～");

const fc04 = show([
  sl("【問題を見る】空所に入る語を選びます。Aは「昼ごはんのあとで公園に行きましょうか」と相手をさそっています。", [
    b(46.4,26,31.1,28,"A:","gray",13),
    b(82.5,26,42.0,28,"＿＿","red",13),
    b(129.5,26,144.2,28,"we go to the park","blue",13),
    b(106.8,64,106.5,28,"after lunch?","gray",13),
    b(99.2,102,121.6,28,"B: Yes, let's.","green",13),
    b(14,164,292,34,"返事は「そうしましょう」",'gray',14),
  ]),
  sl("【なぜ？】Shall we ～?「（いっしょに）〜しましょうか」は、相手をさそう決まった言い方で、返事は Yes, let's.（そうしましょう）や No, let's not.（やめておきましょう）です。Do we ～? は「私たちは〜しますか」と事実をたずねる文なので、返事は Yes, we do. になり、さそいの意味にはなりません。", [
    b(14,18,292,28,"Yes, let's. ＝ そうしましょう","blue",13),
    b(14,52,292,28,"→ さそう文に答えている","green",13),
    b(14,86,292,28,"さそう ＝ Shall we ＋ 原形","purple",13),
    b(14,164,292,34,"Shall we ～?",'gray',14),
  ]),
  sl("【ステップ1】Bの返事は Yes, let's. です。let's は「〜しましょう」で、さそいに答えるときの言葉ですから、Aの文はさそいの文のはずです。", [
    b(14,18,292,28,"返事 Yes, let's.","blue",13),
    b(14,52,292,28,"→ Aはさそっている","green",13),
    b(14,164,292,34,"Shall we ～?",'gray',14),
  ]),
  sl("【ステップ2】「〜しましょうか」は Shall we ＋ 動詞の原形で表します。go は原形なので、そのまま続けられます。", [
    b(14,18,292,28,"「〜しましょうか」","blue",13),
    b(14,52,292,28,"＝ Shall we ＋ 原形","green",13),
    b(14,164,292,34,"Shall we ～?",'gray',14),
  ]),
  sl("【ステップ3】Shall we go to the park after lunch? と読みます。「昼ごはんのあとで公園に行きましょうか」となり、返事とも合います。", [
    b(14,18,292,28,"Shall we go to the park","green",13),
    b(14,52,292,28,"after lunch?","green",13),
    b(14,164,292,34,"Shall we ～?",'gray',14),
  ]),
  sl("【答え】③ Shall", [
    b(40.5,26,31.1,28,"A:","gray",13),
    b(76.6,26,53.7,28,"Shall","green",13),
    b(135.3,26,144.2,28,"we go to the park","blue",13),
    b(106.8,64,106.5,28,"after lunch?","gray",13),
    b(99.2,102,121.6,28,"B: Yes, let's.","green",13),
    b(14,164,292,34,"Shall",'gray',14),
  ]),
  sl("【確かめ】Do we go ～? なら返事は Yes, we do. になります。Are・Is は go の前に置けません。Shall だけが Yes, let's. につながります。", [
    t(160,24,"Do we go ～?  返事は Yes, we do.","red",11,'middle'),
    t(160,54,"Are we go ～?  go の前に置けない","red",11,'middle'),
    t(160,84,"Is we go ～?  形がまちがい","red",11,'middle'),
    t(160,114,"Shall we go ～?  ○",'green',13,'middle',true),
    b(14,164,292,34,"Shall we ～?",'gray',14),
  ]),
  sl("【よくあるまちがい】Let's と Shall we を重ねて Shall let's ～ としてしまうことです。さそいは Let's go. か Shall we go? のどちらか1つです。", [
    b(14,24,292,28,"Shall let's go（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"Shall we go（○）",'green',13),
    b(14,164,292,34,"さそいは Shall we か Let's",'gray',14),
  ]),
], "Shall we ～?");

const fc05 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。「パンを買うために店に行きました」の、「買うために」にあたる部分です。", [
    b(60.6,26,151.7,28,"I went to the shop","blue",13),
    b(217.4,26,42.0,28,"＿＿","red",13),
    b(110.5,64,98.9,28,"some bread.","gray",13),
    b(14,164,292,34,"「買うために」の形は？",'gray',14),
  ]),
  sl("【なぜ？】「〜するために」と目的を表すときは、to ＋ 動詞の原形（to不定詞）を使います。「何をしに店に行ったのか」を、あとから説明する働きです。went という動詞がすでに文にあるので、もう1つの動詞は to をつけて、形を変えない原形のまま置きます。", [
    b(14,18,292,28,"went ＝ すでにある動詞","blue",13),
    b(14,52,292,28,"目的「〜するために」","green",13),
    b(14,86,292,28,"＝ to ＋ 動詞の原形","purple",13),
    b(14,164,292,34,"目的は to ＋ 原形",'gray',14),
  ]),
  sl("【ステップ1】I went to the shop で「私は店に行きました」という文は完成しています。動詞 went がすでにあります。", [
    b(14,18,292,28,"I went to the shop","blue",13),
    b(14,52,292,28,"→ 動詞 went がある","green",13),
    b(14,164,292,34,"目的は to ＋ 原形",'gray',14),
  ]),
  sl("【ステップ2】「パンを買うために」は目的です。目的は to ＋ 動詞の原形で表すので、buy の前に to をつけます。", [
    b(14,18,292,28,"目的は to ＋ 原形","green",13),
    b(14,52,292,28,"to ＋ buy","green",13),
    b(14,164,292,34,"目的は to ＋ 原形",'gray',14),
  ]),
  sl("【ステップ3】to buy を入れて、I went to the shop to buy some bread. と読みます。「パンを買うために店に行きました」となります。", [
    b(14,18,292,28,"I went to the shop","blue",13),
    b(14,52,292,28,"to buy some bread.","green",13),
    b(14,164,292,34,"目的は to ＋ 原形",'gray',14),
  ]),
  sl("【答え】③ to buy", [
    b(51.0,26,151.7,28,"I went to the shop","blue",13),
    b(207.7,26,61.2,28,"to buy","green",13),
    b(110.5,64,98.9,28,"some bread.","gray",13),
    b(14,164,292,34,"to buy",'gray',14),
  ]),
  sl("【確かめ】① buy ② bought ④ buying は、went のあとに動詞が2つ並んでしまいます。目的の意味を表せるのは to buy だけです。", [
    t(160,24,"① buy  → 動詞が2つ並ぶ","red",11,'middle'),
    t(160,54,"② bought  → 動詞が2つ並ぶ","red",11,'middle'),
    t(160,84,"④ buying  → 目的にならない","red",11,'middle'),
    t(160,114,"③ to buy  ○",'green',13,'middle',true),
    b(14,164,292,34,"目的は to ＋ 原形",'gray',14),
  ]),
  sl("【よくあるまちがい】「買うために」を for buy や for buying としてしまうことです。動詞で目的を表すときは to ＋ 原形で、for のあとには名詞（for lunch）が来ます。", [
    b(14,24,292,28,"for buy bread（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"to buy bread（○）",'green',13),
    b(14,164,292,34,"動詞で目的 → to ＋ 原形",'gray',14),
  ]),
], "目的は to ＋ 原形");

const fc06 = show([
  sl("【問題を見る】空所に入る語を選びます。「まったく食べません」という意味に合う、回数を表す語です。", [
    b(35.9,26,174.3,28,"Ken doesn't eat natto","blue",13),
    b(215.3,26,68.8,28,"at all.","gray",13),
    b(69.0,64,31.1,28,"He","blue",13),
    b(105.1,64,42.0,28,"＿＿","red",13),
    b(152.1,64,98.9,28,"eats natto.","blue",13),
    b(14,164,292,34,"食べる回数は？",'gray',14),
  ]),
  sl("【なぜ？】always（いつも）・usually（ふつう）・often（よく）・sometimes（ときどき）・never（けっして〜ない）は、「どのくらいの回数か」を表す語（頻度〈ひんど〉をあらわす副詞）です。回数の多い順に always → usually → often → sometimes → never と並びます。ふつう一般動詞の前に置きます。never は、それ自体に「〜ない」の意味があります。", [
    b(14,18,292,28,"always ＞ often ＞ sometimes","blue",13),
    b(14,52,292,28,"回数ゼロ ＝ never","green",13),
    b(14,86,292,28,"never だけで「〜ない」","purple",13),
    b(14,164,292,34,"never ＝ けっして〜ない",'gray',14),
  ]),
  sl("【ステップ1】1文目の doesn't eat natto at all は「なっとうをまったく食べない」です。回数はゼロです。", [
    b(14,18,292,28,"at all ＝ まったく〜ない","blue",13),
    b(14,52,292,28,"→ 回数はゼロ","green",13),
    b(14,164,292,34,"never ＝ けっして〜ない",'gray',14),
  ]),
  sl("【ステップ2】回数がゼロを表す語は never（けっして〜ない）です。always は100％、often は多い、sometimes は半分くらいの回数です。", [
    b(14,18,292,28,"ゼロ ＝ never","green",13),
    b(14,52,292,28,"always ＝ いつも（100％）","red",13),
    b(14,164,292,34,"never ＝ けっして〜ない",'gray',14),
  ]),
  sl("【ステップ3】never を入れて、He never eats natto. と読みます。eats の前に置くのが決まりです。", [
    b(14,18,292,28,"He never eats natto.","green",13),
    b(14,52,292,28,"eats の前に置く","blue",13),
    b(14,164,292,34,"never ＝ けっして〜ない",'gray',14),
  ]),
  sl("【答え】③ never", [
    b(35.9,26,174.3,28,"Ken doesn't eat natto","blue",13),
    b(215.3,26,68.8,28,"at all.","gray",13),
    b(63.1,64,31.1,28,"He","blue",13),
    b(99.2,64,53.7,28,"never","green",13),
    b(157.9,64,98.9,28,"eats natto.","blue",13),
    b(14,164,292,34,"never",'gray',14),
  ]),
  sl("【確かめ】He never eats natto. は「彼はなっとうをけっして食べない」で、1文目の「まったく食べません」と同じ意味です。always・often・sometimes では、食べることになってしまい、1文目と矛盾します。", [
    t(160,24,"① always → いつも食べる","red",11,'middle'),
    t(160,54,"② often → よく食べる","red",11,'middle'),
    t(160,84,"④ sometimes → ときどき食べる","red",11,'middle'),
    t(160,114,"③ never ＝ まったくない  ○",'green',13,'middle',true),
    b(14,164,292,34,"never ＝ けっして〜ない",'gray',14),
  ]),
  sl("【よくあるまちがい】never に not を重ねて He doesn't never eat と書くことです。never だけで「〜ない」の意味なので、doesn't は不要です。", [
    b(14,24,292,28,"doesn't never eat（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"never eats（○）",'green',13),
    b(14,164,292,34,"never に not は重ねない",'gray',14),
  ]),
], "never ＝ けっして〜ない");

const fc07 = show([
  sl("【問題を見る】空所に入る語を選びます。Bは「はい、それは私のものです」と答えます。", [
    b(76.6,26,166.8,28,"A: Is this your bag?","gray",13),
    b(83.3,64,106.5,28,"B: Yes, it's","blue",13),
    b(194.7,64,42.0,28,"＿＿","red",13),
    b(14,164,292,34,"「私のもの」の形は？",'gray',14),
  ]),
  sl("【なぜ？】「私の」は my で、あとに必ず名詞が必要です（my bag）。いっぽう「私のもの」は mine という1語で、「私のかばん」の意味までふくみます。名詞がうしろに続かないときは、mine・yours・his・hers のような「〜のもの」の形を使います。", [
    b(14,18,292,28,"my ＋ 名詞（my bag）","blue",13),
    b(14,52,292,28,"名詞なし ＝ mine","green",13),
    b(14,86,292,28,"mine ＝ my bag の意味","purple",13),
    b(14,164,292,34,"mine ＝ 私のもの",'gray',14),
  ]),
  sl("【ステップ1】空所のあとには何もありません。名詞を言わずに「私のもの」と言える語が入ります。", [
    b(14,18,292,28,"空所のあとは何もない","blue",13),
    b(14,52,292,28,"→ 名詞を言わない形","green",13),
    b(14,164,292,34,"mine ＝ 私のもの",'gray',14),
  ]),
  sl("【ステップ2】my はあとに名詞が必要で、me は「私を・私に」、I は「私は」の意味です。名詞なしで「私のもの」と言えるのは mine です。", [
    b(14,18,292,28,"my → 名詞が必要","red",13),
    b(14,52,292,28,"mine → 名詞なしで OK","green",13),
    b(14,164,292,34,"mine ＝ 私のもの",'gray',14),
  ]),
  sl("【ステップ3】mine を入れて、Yes, it's mine. と読みます。「はい、それは私のものです」となります。", [
    b(14,18,292,28,"Yes, it's mine.","green",13),
    b(14,52,292,28,"＝ it's my bag","blue",13),
    b(14,164,292,34,"mine ＝ 私のもの",'gray',14),
  ]),
  sl("【答え】④ mine", [
    b(76.6,26,166.8,28,"A: Is this your bag?","gray",13),
    b(77.4,64,106.5,28,"B: Yes, it's","blue",13),
    b(188.9,64,53.7,28,"mine.","green",13),
    b(14,164,292,34,"mine",'gray',14),
  ]),
  sl("【確かめ】it's mine は it is my bag と同じ意味です。① my は名詞が続かないと文が終わらず、② me と③ I は「私のもの」の意味になりません。", [
    t(160,24,"① my → あとに名詞が必要","red",11,'middle'),
    t(160,54,"② me → 「私を・私に」","red",11,'middle'),
    t(160,84,"③ I → 「私は」","red",11,'middle'),
    t(160,114,"④ mine ＝ 私のもの  ○",'green',13,'middle',true),
    b(14,164,292,34,"mine ＝ 私のもの",'gray',14),
  ]),
  sl("【よくあるまちがい】it's my と答えて、名詞を言わないまま終えてしまうことです。my のあとには必ず名詞が必要で、名詞を言わないなら mine を使います。", [
    b(14,24,292,28,"it's my.（×）名詞がない",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"it's mine.（○）",'green',13),
    b(14,164,292,34,"名詞なしなら mine",'gray',14),
  ]),
], "mine ＝ 私のもの");

const fc08 = show([
  sl("【問題を見る】空所に入る語を選びます。「もしあした雨がふったら、家にいます」という、未来のことをいう文です。", [
    b(72.8,26,174.3,28,"If it rains tomorrow,","blue",13),
    b(72.8,64,31.1,28,"we","blue",13),
    b(108.8,64,42.0,28,"＿＿","red",13),
    b(155.8,64,91.4,28,"stay home.","blue",13),
    b(14,164,292,34,"未来の結果を表す語は？",'gray',14),
  ]),
  sl("【なぜ？】if ～（もし〜なら）の部分は、あしたのことでも rains と現在形で書きます。そして、その結果「家にいるつもりだ」という未来のことをいう後半に、will ＋ 動詞の原形を使います。will のあとの動詞は、s も ing もつけない原形です。", [
    b(14,18,292,28,"if のなか ＝ 現在形（rains）","blue",13),
    b(14,52,292,28,"結果の文 ＝ will ＋ 原形","green",13),
    b(14,86,292,28,"will のあとは s も ing もなし","purple",13),
    b(14,164,292,34,"if のなかは現在形",'gray',14),
  ]),
  sl("【ステップ1】If it rains tomorrow は「もしあした雨がふったら」です。tomorrow（あした）のことですが、if のなかは rains と現在形になっています。", [
    b(14,18,292,28,"If it rains","blue",13),
    b(14,52,292,28,"→ if のなかは現在形","green",13),
    b(14,164,292,34,"if のなかは現在形",'gray',14),
  ]),
  sl("【ステップ2】後半は「家にいる」という、これからの結果です。未来のことは、主語のあとに will ＋ 動詞の原形を置いて表します。", [
    b(14,18,292,28,"後半は これからの結果","blue",13),
    b(14,52,292,28,"→ will ＋ 原形","green",13),
    b(14,164,292,34,"if のなかは現在形",'gray',14),
  ]),
  sl("【ステップ3】stay は原形なので、前には will が入ります。we will stay home. と読みます。", [
    b(14,18,292,28,"we will stay home.","green",13),
    b(14,52,292,28,"stay は原形","blue",13),
    b(14,164,292,34,"if のなかは現在形",'gray',14),
  ]),
  sl("【答え】④ will", [
    b(72.8,26,174.3,28,"If it rains tomorrow,","blue",13),
    b(70.7,64,31.1,28,"we","blue",13),
    b(106.8,64,46.2,28,"will","green",13),
    b(157.9,64,91.4,28,"stay home.","blue",13),
    b(14,164,292,34,"will",'gray',14),
  ]),
  sl("【確かめ】① are ② were ③ have は、あとに原形の stay をそのままつなげることができません。will だけが「〜するつもりだ」の意味で原形 stay につながります。", [
    t(160,24,"① are  → 原形 stay につながらない","red",11,'middle'),
    t(160,54,"② were  → 原形 stay につながらない","red",11,'middle'),
    t(160,84,"③ have  → 原形 stay につながらない","red",11,'middle'),
    t(160,114,"④ will ＋ stay  ○",'green',13,'middle',true),
    b(14,164,292,34,"if のなかは現在形",'gray',14),
  ]),
  sl("【よくあるまちがい】if のなかまで will をつけて If it will rain としてしまうことです。「もし〜なら」の部分は、未来のことでも現在形で書きます。", [
    b(14,24,292,28,"If it will rain（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"If it rains（○）",'green',13),
    b(14,164,292,34,"if のなかには will を入れない",'gray',14),
  ]),
], "if のなかは現在形");

const fc09 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。「かぎをさがしています。見つかりません」という意味の文です。", [
    b(80.3,26,38.6,28,"I'm","blue",13),
    b(123.9,26,42.0,28,"＿＿","red",13),
    b(170.9,26,68.8,28,"my key.","blue",13),
    b(91.7,64,136.6,28,"I can't find it.","gray",13),
    b(14,164,292,34,"かぎをどうしている？",'gray',14),
  ]),
  sl("【なぜ？】look は、あとにつく小さな語（前置詞）で意味が変わります。look for ～ は「〜をさがす」、look at ～ は「〜を見る」、look after ～ は「〜の世話をする」、look like ～ は「〜に似ている」です。「見つからない」ので、さがしている最中だとわかります。", [
    b(14,18,292,28,"look for ＝ さがす","blue",13),
    b(14,52,292,28,"look at ＝ 見る","green",13),
    b(14,86,292,28,"look after ＝ 世話をする","purple",13),
    b(14,164,292,34,"look for ＝ さがす",'gray',14),
  ]),
  sl("【ステップ1】2文目に I can't find it.（見つかりません）とあります。かぎをさがしている場面です。", [
    b(14,18,292,28,"I can't find it.","blue",13),
    b(14,52,292,28,"→ かぎをさがしている","green",13),
    b(14,164,292,34,"look for ＝ さがす",'gray',14),
  ]),
  sl("【ステップ2】「〜をさがす」は look for ～ です。at・after・like では意味がちがいます。", [
    b(14,18,292,28,"さがす ＝ look for","green",13),
    b(14,52,292,28,"at・after・like は意味がちがう","red",13),
    b(14,164,292,34,"look for ＝ さがす",'gray',14),
  ]),
  sl("【ステップ3】I'm looking for my key. と読みます。I'm は I am の短い形で、am looking と進行形になっています。", [
    b(14,18,292,28,"I'm looking for my key.","green",13),
    b(14,52,292,28,"am ＋ looking（進行形）","blue",13),
    b(14,164,292,34,"look for ＝ さがす",'gray',14),
  ]),
  sl("【答え】④ looking for", [
    b(51.8,26,38.6,28,"I'm","blue",13),
    b(95.5,26,98.9,28,"looking for","green",13),
    b(199.4,26,68.8,28,"my key.","blue",13),
    b(91.7,64,136.6,28,"I can't find it.","gray",13),
    b(14,164,292,34,"looking for",'gray',14),
  ]),
  sl("【確かめ】① look at は「見る」なので、見つからないという2文目と合いません。② look after は「世話をする」、③ look like は「似ている」で、かぎに使うのはおかしな意味になります。", [
    t(160,24,"① looking at  → 見ている（見つからない？）","red",11,'middle'),
    t(160,54,"② looking after  → 世話をする","red",11,'middle'),
    t(160,84,"③ looking like  → 似ている","red",11,'middle'),
    t(160,114,"④ looking for ＝ さがす  ○",'green',13,'middle',true),
    b(14,164,292,34,"look for ＝ さがす",'gray',14),
  ]),
  sl("【よくあるまちがい】look を「見る」だけで覚えて、looking at を選んでしまうことです。look のあとの語もセットで覚えましょう。", [
    b(14,24,292,28,"looking at my key（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"looking for my key（○）",'green',13),
    b(14,164,292,34,"look の後ろの語も大切",'gray',14),
  ]),
], "look for ＝ さがす");

const fc10 = show([
  sl("【問題を見る】6つの語（句）を並べかえて、「私の父は毎朝、新聞を読みます」という英文をつくります。", [
    b(85.8,26,53.7,28,"reads","gray",13),
    b(144.5,26,31.1,28,"My","gray",13),
    b(180.5,26,53.7,28,"every","gray",13),
    b(40.5,64,98.9,28,"a newspaper","gray",13),
    b(144.5,64,61.2,28,"father","gray",13),
    b(210.7,64,68.8,28,"morning","gray",13),
    b(14,164,292,34,"6つの語（句）をならべかえる",'gray',14),
  ]),
  sl("【なぜ？】英語の文は、「だれが（主語）→ どうする（動詞）→ 何を（目的語）」の順に並べ、「いつ」を表す語（every morning など）は文の最後に置くのがふつうです。主語が father のような1人（3人称単数）で現在のことをいうときは、動詞に s をつけて reads にします。", [
    b(14,18,292,28,"だれが ＝ My father","blue",13),
    b(14,52,292,28,"する ＝ reads（s をつける）","green",13),
    b(14,86,292,28,"何を ＝ a newspaper／いつ ＝ 最後","purple",13),
    b(14,164,292,34,"だれが・する・何を・いつ",'gray',14),
  ]),
  sl("【ステップ1】文の最初は大文字の My です。「私の」のあとに名詞 father を続けて、主語 My father をつくります。", [
    b(14,18,292,28,"My","blue",13),
    b(14,52,292,28,"father","blue",13),
    b(14,164,292,34,"だれが・する・何を・いつ",'gray',14),
  ]),
  sl("【ステップ2】主語のあとに動詞 reads、そのあとに「何を」にあたる a newspaper を置きます。", [
    b(14,18,292,28,"My father","blue",13),
    b(14,52,292,28,"reads","green",13),
    b(14,86,292,28,"a newspaper","purple",13),
    b(14,164,292,34,"だれが・する・何を・いつ",'gray',14),
  ]),
  sl("【ステップ3】最後に「毎朝」にあたる every morning を置きます。My father reads a newspaper every morning.", [
    b(14,18,292,28,"My father reads a newspaper","green",13),
    b(14,52,292,28,"every morning.","red",13),
    b(14,164,292,34,"だれが・する・何を・いつ",'gray',14),
  ]),
  sl("【答え】My father reads a newspaper every morning.", [
    b(95.5,26,129.1,28,"My father reads","green",13),
    b(54.0,64,212.0,28,"a newspaper every morning.","green",13),
    b(14,164,292,34,"My father reads a newspaper every morning.",'gray',11),
  ]),
  sl("【確かめ】6つの語（句）をすべて使い、最初は大文字の My、最後はピリオドです。「私の父は毎朝新聞を読みます」と日本語に合っています。主語が father なので reads と s がついていることも合っています。", [
    t(160,24,"6つの語（句）を すべて使った","blue",11,'middle'),
    t(160,54,"最初は大文字・最後はピリオド","blue",11,'middle'),
    t(160,84,"father に合わせて reads  ○",'green',13,'middle',true),
    b(14,164,292,34,"だれが・する・何を・いつ",'gray',14),
  ]),
  sl("【よくあるまちがい】日本語の順（毎朝 → 新聞を → 読む）にそのまま並べてしまうことです。英語は「だれが → する → 何を → いつ」の順です。また、reads の s を落とさないようにしましょう。", [
    b(14,24,292,28,"every morning a newspaper reads（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"reads a newspaper every morning（○）",'green',13),
    b(14,164,292,34,"日本語の順にしない",'gray',14),
  ]),
], "だれが・する・何を・いつ");

const fc11 = show([
  sl("【問題を見る】Mika は It is twenty to eight. と言っています。それが何時何分にあたるかを選びます。", [
    b(62.3,26,53.7,28,"It is","blue",13),
    b(121.0,26,136.6,28,"twenty to eight.","red",13),
    b(119.5,64,81.0,28,"何時何分？","gray",13),
    b(14,164,292,34,"to は「前」の意味",'gray',14),
  ]),
  sl("【なぜ？】時刻の言い方では、○分 past ～ は「～時○分すぎ」、○分 to ～ は「～時まであと○分」という意味です。past は「すぎた」、to は「〜に向かって（あと〜）」と覚えます。だから twenty to eight は「8時まであと20分」、つまり7時40分です。", [
    b(14,18,292,28,"○分 past 〜 ＝ 〜時○分すぎ","blue",13),
    b(14,52,292,28,"○分 to 〜 ＝ 〜時の○分前","green",13),
    b(14,86,292,28,"past ＝ すぎ ／ to ＝ 前","purple",13),
    b(14,164,292,34,"○分 to 〜 ＝ 〜時の○分前",'gray',14),
  ]),
  sl("【ステップ1】twenty は「20」、to は「〜前」、eight は「8」です。つまり「8時の20分前」という意味になります。", [
    b(14,18,292,28,"twenty ＝ 20分","blue",13),
    b(14,52,292,28,"to ＝ 前","green",13),
    b(14,86,292,28,"eight ＝ 8時","blue",13),
    b(14,164,292,34,"○分 to 〜 ＝ 〜時の○分前",'gray',14),
  ]),
  sl("【ステップ2】8時の20分前は、8時から20分もどった時刻です。8:00 − 20分 ＝ 7:40 です。", [
    b(14,18,292,28,"8:00 の20分前","green",13),
    b(14,52,292,28,"8:00 − 20分 ＝ 7:40","red",13),
    b(14,164,292,34,"○分 to 〜 ＝ 〜時の○分前",'gray',14),
  ]),
  sl("【ステップ3】twenty to eight ＝ 7:40 です。8:20 と読みまちがえないように注意しましょう。", [
    b(14,18,292,28,"twenty to eight","blue",13),
    b(14,52,292,28,"＝ 7:40","green",13),
    b(14,164,292,34,"○分 to 〜 ＝ 〜時の○分前",'gray',14),
  ]),
  sl("【答え】③ 7:40", [
    b(52.9,26,129.1,28,"twenty to eight","blue",13),
    b(187.0,26,29.0,28,"＝","gray",13),
    b(221.0,26,46.2,28,"7:40","green",13),
    b(14,164,292,34,"7:40",'gray',14),
  ]),
  sl("【確かめ】7:40 から20分たつと8:00 になり、「8時まであと20分」と合います。8:20 は twenty past eight、8:40 は twenty to nine、7:20 は twenty past seven です。", [
    t(160,24,"7:40 ＋ 20分 ＝ 8:00","blue",11,'middle'),
    t(160,54,"8:00 まであと20分と合う","blue",11,'middle'),
    t(160,84,"8:20 は twenty past eight","red",11,'middle'),
    t(160,114,"③ 7:40  ○",'green',13,'middle',true),
    b(14,164,292,34,"○分 to 〜 ＝ 〜時の○分前",'gray',14),
  ]),
  sl("【よくあるまちがい】to を「すぎ」と取りちがえて8:20 を選んでしまうことです。past ＝ すぎ、to ＝ 前、と区別しましょう。", [
    b(14,24,292,28,"twenty to eight ＝ 8:20（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"twenty to eight ＝ 7:40（○）",'green',13),
    b(14,164,292,34,"to ＝ 前、past ＝ すぎ",'gray',14),
  ]),
], "○分 to 〜 ＝ 〜時の○分前");

const fc12 = show([
  sl("【問題を見る】Aは「京都への旅行はどうでしたか」とたずねています。それに合う答えを選びます。", [
    b(76.6,26,166.8,28,"A: How was your trip","blue",13),
    b(118.1,64,83.9,28,"to Kyoto?","blue",13),
    b(127.7,102,64.6,28,"B: ＿＿","red",13),
    b(14,164,292,34,"「どうでしたか」の答えは？",'gray',14),
  ]),
  sl("【なぜ？】How was ～? は「〜はどうでしたか」と、ようすや感想をたずねる文です。すでに終わったことなので、答えも was を使って It was great.（すばらしかったです）のように感想をいいます。「どうやって」と手段をたずねる文は How did you go ～? で、これとは別です。", [
    b(14,18,292,28,"How was ～? ＝ 感想をたずねる","blue",13),
    b(14,52,292,28,"終わったこと → It was ～.","green",13),
    b(14,86,292,28,"手段は How did you go?","purple",13),
    b(14,164,292,34,"How was ～? → It was ～.",'gray',14),
  ]),
  sl("【ステップ1】Aの文は How was your trip ～? です。was があるので、終わった旅行の感想をたずねています。", [
    b(14,18,292,28,"How was your trip ～?","blue",13),
    b(14,52,292,28,"→ 終わった旅行の感想","green",13),
    b(14,164,292,34,"How was ～? → It was ～.",'gray',14),
  ]),
  sl("【ステップ2】答えは、感想を言う文になります。It was ＋ great（すばらしい）・fun（楽しい）などの形です。", [
    b(14,18,292,28,"答え ＝ It was ＋ 感想","green",13),
    b(14,52,292,28,"great・fun など","blue",13),
    b(14,164,292,34,"How was ～? → It was ～.",'gray',14),
  ]),
  sl("【ステップ3】選択肢のなかで感想を言っているのは It was great. だけです。", [
    b(14,18,292,28,"感想を言う文は","blue",13),
    b(14,52,292,28,"It was great. だけ","green",13),
    b(14,164,292,34,"How was ～? → It was ～.",'gray',14),
  ]),
  sl("【答え】④ It was great.", [
    b(76.6,26,166.8,28,"A: How was your trip","blue",13),
    b(118.1,64,83.9,28,"to Kyoto?","blue",13),
    b(91.7,102,136.6,28,"B: It was great.","green",13),
    b(14,164,292,34,"It was great.",'gray',14),
  ]),
  sl("【確かめ】① It is by train.（電車です）は手段、② Yes, I did. は Yes・No でこたえる質問への返事、③ I will go there.（そこへ行くつもりです）は未来の話で、どれも「どうでしたか」の答えにはなりません。", [
    t(160,24,"① It is by train. → 手段","red",11,'middle'),
    t(160,54,"② Yes, I did. → Yes/No の返事","red",11,'middle'),
    t(160,84,"③ I will go there. → 未来の話","red",11,'middle'),
    t(160,114,"④ It was great. ＝ 感想  ○",'green',13,'middle',true),
    b(14,164,292,34,"How was ～? → It was ～.",'gray',14),
  ]),
  sl("【よくあるまちがい】How を見て、「どうやって」の意味だと思い込み、It is by train. を選んでしまうことです。How was ～? は感想、How do you go ～? や How did you go ～? は手段です。", [
    b(14,24,292,28,"It is by train.（×）手段",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"It was great.（○）感想",'green',13),
    b(14,164,292,34,"How was ～? は感想",'gray',14),
  ]),
], "How was ～? → It was ～.");

const fc13 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。Aは「あなたの家から駅まで、どのくらいかかりますか」とたずねています。", [
    b(65.2,26,31.1,28,"A:","gray",13),
    b(101.3,26,42.0,28,"＿＿","red",13),
    b(148.3,26,106.5,28,"does it take","blue",13),
    b(69.1,64,181.9,28,"to get to the station?","blue",13),
    b(72.8,102,174.3,28,"B: About ten minutes.","green",13),
    b(14,164,292,34,"答えは「時間の長さ」",'gray',14),
  ]),
  sl("【なぜ？】How long ～? は、時間の長さをたずねる言い方で、How long does it take ～?「どのくらい（時間が）かかりますか」の形でよく使います。答えは It takes ～.（〜かかります）の形です。How far は距離、How often は回数、How many は数をたずねます。", [
    b(14,18,292,28,"How long ＝ 時間の長さ","blue",13),
    b(14,52,292,28,"How far ＝ きょり","green",13),
    b(14,86,292,28,"How often ＝ 回数／How many ＝ 数","purple",13),
    b(14,164,292,34,"かかる時間は How long",'gray',14),
  ]),
  sl("【ステップ1】Bの答えは About ten minutes.（約10分）です。「時間の長さ」で答えているので、Aは時間をたずねています。", [
    b(14,18,292,28,"答え ＝ about ten minutes","blue",13),
    b(14,52,292,28,"→ 時間をたずねる","green",13),
    b(14,164,292,34,"かかる時間は How long",'gray',14),
  ]),
  sl("【ステップ2】時間の長さをたずねるのは How long です。How far は「どのくらい遠いか（きょり）」、How often は「どのくらいの回数か」、How many は「いくつか」をたずねます。", [
    b(14,18,292,28,"時間 ＝ How long","green",13),
    b(14,52,292,28,"きょりは How far","red",13),
    b(14,164,292,34,"かかる時間は How long",'gray',14),
  ]),
  sl("【ステップ3】How long does it take to get to the station from your house? と読みます。take は「（時間が）かかる」の意味です。", [
    b(14,18,292,28,"How long does it take","green",13),
    b(14,52,292,28,"to get to the station?","blue",13),
    b(14,164,292,34,"かかる時間は How long",'gray',14),
  ]),
  sl("【答え】④ How long", [
    b(48.1,26,31.1,28,"A:","gray",13),
    b(84.1,26,76.3,28,"How long","green",13),
    b(165.5,26,106.5,28,"does it take","blue",13),
    b(69.1,64,181.9,28,"to get to the station?","blue",13),
    b(72.8,102,174.3,28,"B: About ten minutes.","green",13),
    b(14,164,292,34,"How long",'gray',14),
  ]),
  sl("【確かめ】答えの ten minutes は時間の長さです。How far なら「2 kilometers」、How often なら「twice a week」、How many なら「three」のように答えるはずなので、合いません。", [
    t(160,24,"How far → 「2 kilometers」と答える","red",11,'middle'),
    t(160,54,"How often → 「twice a week」と答える","red",11,'middle'),
    t(160,84,"How many → 「three」と答える","red",11,'middle'),
    t(160,114,"How long → 「ten minutes」  ○",'green',13,'middle',true),
    b(14,164,292,34,"かかる時間は How long",'gray',14),
  ]),
  sl("【よくあるまちがい】How far と How long を取りちがえることです。「距離（遠さ）」は How far、「時間の長さ」は How long です。does it take があれば How long と覚えましょう。", [
    b(14,24,292,28,"How far does it take（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"How long does it take（○）",'green',13),
    b(14,164,292,34,"takeがあれば How long",'gray',14),
  ]),
], "かかる時間は How long");

const fc14 = show([
  sl("【問題を見る】4つの語のうち、仲間がちがう語を選びます。", [
    b(100.0,26,53.7,28,"apple","blue",13),
    b(158.7,26,61.2,28,"carrot","blue",13),
    b(96.3,64,61.2,28,"orange","blue",13),
    b(162.5,64,61.2,28,"banana","blue",13),
    b(14,164,292,34,"仲間がちがう語は？",'gray',14),
  ]),
  sl("【なぜ？】仲間分けの問題では、まず4つの語の意味を日本語にして、同じグループに入るものを探します。apple（りんご）・orange（オレンジ）・banana（バナナ）は果物（fruit〈フルーツ〉）、carrot（にんじん）は野菜（vegetable〈ベジタブル〉）です。", [
    b(14,18,292,28,"apple ＝ りんご","blue",13),
    b(14,52,292,28,"orange ＝ オレンジ ／ banana ＝ バナナ","blue",13),
    b(14,86,292,28,"carrot ＝ にんじん","green",13),
    b(14,164,292,34,"fruit と vegetable",'gray',14),
  ]),
  sl("【ステップ1】4つの語の意味を確かめます。apple はりんご、carrot はにんじん、orange はオレンジ、banana はバナナです。", [
    b(14,18,292,28,"apple ＝ りんご  carrot ＝ にんじん","blue",13),
    b(14,52,292,28,"orange ＝ オレンジ  banana ＝ バナナ","blue",13),
    b(14,164,292,34,"fruit と vegetable",'gray',14),
  ]),
  sl("【ステップ2】くだものと野菜に分けます。りんご・オレンジ・バナナは木や草になる実で、くだものです。", [
    b(14,18,292,28,"くだもの：apple・orange・banana","green",13),
    b(14,52,292,28,"野菜：carrot","red",13),
    b(14,164,292,34,"fruit と vegetable",'gray',14),
  ]),
  sl("【ステップ3】carrot（にんじん）だけが野菜です。仲間がちがうのは carrot です。", [
    b(14,18,292,28,"1つだけ野菜 → carrot","green",13),
    b(14,164,292,34,"fruit と vegetable",'gray',14),
  ]),
  sl("【答え】② carrot", [
    b(66.9,26,53.7,28,"apple","green",13),
    b(125.6,26,61.2,28,"orange","green",13),
    b(191.8,26,61.2,28,"banana","green",13),
    b(129.4,64,61.2,28,"carrot","red",13),
    b(14,164,292,34,"carrot",'gray',14),
  ]),
  sl("【確かめ】3つはデザートに食べられるくだもので、carrot だけが料理に使う野菜です。仲間分けでも、carrot だけが別グループになっています。", [
    t(160,24,"apple・orange・banana ＝ くだもの","green",11,'middle'),
    t(160,54,"carrot ＝ 野菜","red",11,'middle'),
    t(160,84,"② carrot だけが別グループ  ○",'green',13,'middle',true),
    b(14,164,292,34,"fruit と vegetable",'gray',14),
  ]),
  sl("【よくあるまちがい】4つとも「食べ物」だから全部同じ仲間だと思ってしまうことです。「くだもの」と「野菜」のように、もっと細かく分けて考えましょう。", [
    b(14,24,292,28,"全部食べ物だから同じ（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"くだものと野菜に分ける（○）",'green',13),
    b(14,164,292,34,"もっと細かく分ける",'gray',14),
  ]),
], "fruit と vegetable");

const fc15 = show([
  sl("【問題を見る】空所に入る動詞の形を選びます。「先週、Tシャツを買いました」という過去の文です。", [
    b(69.0,26,23.5,28,"I","blue",13),
    b(97.5,26,42.0,28,"＿＿","red",13),
    b(144.5,26,106.5,28,"this T-shirt","blue",13),
    b(69.1,64,181.9,28,"at the shop last week.","gray",13),
    b(14,164,292,34,"last week ＝ 過去",'gray',14),
  ]),
  sl("【なぜ？】last week（先週）・yesterday（きのう）などがあるときは、動詞を過去形にします。多くの動詞は ed をつけて過去形にしますが、buy のように、形がまったく変わる動詞があります（不規則動詞）。buy の過去形は bought です。これは暗記しておく必要があります。", [
    b(14,18,292,28,"last week ＝ 過去の文","blue",13),
    b(14,52,292,28,"ふつう ＝ ed をつける","green",13),
    b(14,86,292,28,"不規則 ＝ 形が変わる（buy → bought）","purple",13),
    b(14,164,292,34,"buy の過去形は bought",'gray',14),
  ]),
  sl("【ステップ1】last week（先週）があるので、過去の文です。動詞は過去形にします。", [
    b(14,18,292,28,"last week（先週）","blue",13),
    b(14,52,292,28,"→ 動詞は過去形","green",13),
    b(14,164,292,34,"buy の過去形は bought",'gray',14),
  ]),
  sl("【ステップ2】buy は ed をつけて buyed とはなりません。不規則に変わって bought になります。", [
    b(14,18,292,28,"buy → buyed（×）","red",13),
    b(14,52,292,28,"buy → bought（○）","green",13),
    b(14,164,292,34,"buy の過去形は bought",'gray',14),
  ]),
  sl("【ステップ3】bought を入れて、I bought this T-shirt at the shop last week. と読みます。", [
    b(14,18,292,28,"I bought this T-shirt","green",13),
    b(14,52,292,28,"at the shop last week.","gray",13),
    b(14,164,292,34,"buy の過去形は bought",'gray',14),
  ]),
  sl("【答え】③ bought", [
    b(59.4,26,23.5,28,"I","blue",13),
    b(87.9,26,61.2,28,"bought","green",13),
    b(154.2,26,106.5,28,"this T-shirt","blue",13),
    b(69.1,64,181.9,28,"at the shop last week.","gray",13),
    b(14,164,292,34,"bought",'gray',14),
  ]),
  sl("【確かめ】buy・buys は現在の形、buying は ing形で、どれも last week（過去）と合いません。bought だけが過去形です。", [
    t(160,24,"① buy  → 現在の形","red",11,'middle'),
    t(160,54,"② buys  → 現在の形","red",11,'middle'),
    t(160,84,"④ buying  → ing形","red",11,'middle'),
    t(160,114,"③ bought ＝ 過去形  ○",'green',13,'middle',true),
    b(14,164,292,34,"buy の過去形は bought",'gray',14),
  ]),
  sl("【よくあるまちがい】buyed と書いてしまうことです。不規則動詞は ed をつけません（buy → bought、go → went、see → saw）。", [
    b(14,24,292,28,"I buyed this T-shirt（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"I bought this T-shirt（○）",'green',13),
    b(14,164,292,34,"不規則動詞は暗記",'gray',14),
  ]),
], "buy の過去形は bought");

const fc16 = show([
  sl("【問題を見る】空所に入る語を選びます。「あまり時間がありません」という否定の文です。", [
    b(31.3,26,106.5,28,"I don't have","blue",13),
    b(142.8,26,42.0,28,"＿＿","red",13),
    b(189.8,26,98.9,28,"time today.","blue",13),
    b(14,164,292,34,"time は数えられる？",'gray',14),
  ]),
  sl("【なぜ？】「たくさんの」は、数えられる名詞（複数形）には many、数えられない名詞には much を使います。time（時間）・water（水）・money（お金）は1つ、2つと数えられないので much を使います。much と many は、ふつう否定文や疑問文で使い、「あまり〜ない」「たくさん〜」の意味になります。", [
    b(14,18,292,28,"数えられる名詞 ＋ many","blue",13),
    b(14,52,292,28,"数えられない名詞 ＋ much","green",13),
    b(14,86,292,28,"time・water・money は much","purple",13),
    b(14,164,292,34,"数えられない名詞は much",'gray',14),
  ]),
  sl("【ステップ1】time（時間）は、1つ・2つと数えられない名詞です。", [
    b(14,18,292,28,"time ＝ 数えられない","blue",13),
    b(14,52,292,28,"1つ・2つと数えない","gray",13),
    b(14,164,292,34,"数えられない名詞は much",'gray',14),
  ]),
  sl("【ステップ2】数えられない名詞には much を使います。many は数えられる名詞（books・students など）に使います。", [
    b(14,18,292,28,"数えられない ＋ much","green",13),
    b(14,52,292,28,"many は books など用","red",13),
    b(14,164,292,34,"数えられない名詞は much",'gray',14),
  ]),
  sl("【ステップ3】much を入れて、I don't have much time today. と読みます。「あまり時間がない」という意味です。", [
    b(14,18,292,28,"I don't have much time","green",13),
    b(14,52,292,28,"today.","gray",13),
    b(14,164,292,34,"数えられない名詞は much",'gray',14),
  ]),
  sl("【答え】② much", [
    b(29.2,26,106.5,28,"I don't have","blue",13),
    b(140.7,26,46.2,28,"much","green",13),
    b(191.8,26,98.9,28,"time today.","blue",13),
    b(14,164,292,34,"much",'gray',14),
  ]),
  sl("【確かめ】a few と few は数えられる名詞に使う語で、time には合いません。many も数えられる名詞用です。much だけが time に合います。", [
    t(160,24,"① many → 数えられる名詞用","red",11,'middle'),
    t(160,54,"③ a few → 数えられる名詞用","red",11,'middle'),
    t(160,84,"④ few → 数えられる名詞用","red",11,'middle'),
    t(160,114,"② much → time に合う  ○",'green',13,'middle',true),
    b(14,164,292,34,"数えられない名詞は much",'gray',14),
  ]),
  sl("【よくあるまちがい】「たくさん」を何にでも many と言ってしまうことです。数えられるなら many、数えられないなら much と使い分けます。", [
    b(14,24,292,28,"many time（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"much time（○）",'green',13),
    b(14,164,292,34,"数えられるかどうかで決める",'gray',14),
  ]),
], "数えられない名詞は much");

const fc17 = show([
  sl("【問題を見る】空所に入る動詞の形を選びます。「ケンのお母さんは本をたくさん持っています」という現在の文です。", [
    b(83.3,26,106.5,28,"Ken's mother","blue",13),
    b(194.7,26,42.0,28,"＿＿","red",13),
    b(42.7,64,234.7,28,"a lot of books about cooking.","gray",13),
    b(14,164,292,34,"主語は1人の女の人",'gray',14),
  ]),
  sl("【なぜ？】主語が I・you 以外の1人（1つ）のとき（3人称単数）、現在の文では動詞の形が変わります。ふつうは s をつけますが、have だけは特別で has になります（haves とはなりません）。Ken's mother は「ケンのお母さん」という1人なので、has を使います。", [
    b(14,18,292,28,"主語が1人（3人称単数）","blue",13),
    b(14,52,292,28,"現在の文 → 動詞が変わる","green",13),
    b(14,86,292,28,"have → has（特別）","purple",13),
    b(14,164,292,34,"have → has",'gray',14),
  ]),
  sl("【ステップ1】主語は Ken's mother で、1人の人です（3人称単数）。文は現在のことをいっています。", [
    b(14,18,292,28,"Ken's mother ＝ 1人","blue",13),
    b(14,52,292,28,"現在の文","gray",13),
    b(14,164,292,34,"have → has",'gray',14),
  ]),
  sl("【ステップ2】現在の文で、主語が3人称単数のとき、動詞は形が変わります。have の形は特別で has になります。", [
    b(14,18,292,28,"have → has","green",13),
    b(14,52,292,28,"haves（×）","red",13),
    b(14,164,292,34,"have → has",'gray',14),
  ]),
  sl("【ステップ3】has を入れて、Ken's mother has a lot of books about cooking. と読みます。", [
    b(14,18,292,28,"Ken's mother has","green",13),
    b(14,52,292,28,"a lot of books.","gray",13),
    b(14,164,292,34,"have → has",'gray',14),
  ]),
  sl("【答え】③ has", [
    b(85.0,26,106.5,28,"Ken's mother","blue",13),
    b(196.4,26,38.6,28,"has","green",13),
    b(42.7,64,234.7,28,"a lot of books about cooking.","gray",13),
    b(14,164,292,34,"has",'gray',14),
  ]),
  sl("【確かめ】① have は I・you・複数の主語に使う形です。② haves という語はありません。④ having は ing形なので、単独では使えません。has だけが合います。", [
    t(160,24,"① have → I・you・複数の主語用","red",11,'middle'),
    t(160,54,"② haves → そんな語はない","red",11,'middle'),
    t(160,84,"④ having → ing形","red",11,'middle'),
    t(160,114,"③ has ＝ 3人称単数  ○",'green',13,'middle',true),
    b(14,164,292,34,"have → has",'gray',14),
  ]),
  sl("【よくあるまちがい】3人称単数だから s をつけて haves と書いてしまうことです。have は特別で has です。ほかにも go → goes、study → studies のように変わる語があります。", [
    b(14,24,292,28,"Ken's mother haves（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"Ken's mother has（○）",'green',13),
    b(14,164,292,34,"have だけは has",'gray',14),
  ]),
], "have → has");

const fc18 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。「私のゆめは、パイロットになることです」という文です。", [
    b(46.4,26,98.9,28,"My dream is","blue",13),
    b(150.3,26,42.0,28,"＿＿","red",13),
    b(197.3,26,76.3,28,"a pilot.","blue",13),
    b(14,164,292,34,"「なること」の形は？",'gray',14),
  ]),
  sl("【なぜ？】動詞の前に to をつけると、「〜すること」という意味のまとまり（to不定詞）になります。My dream is の is のあとに、「何か」を表す部分が必要で、それを to ＋ 動詞の原形で作ります。この文では「パイロットになること」なので、to be a pilot です。", [
    b(14,18,292,28,"「〜すること」","blue",13),
    b(14,52,292,28,"＝ to ＋ 動詞の原形","green",13),
    b(14,86,292,28,"is のあとに「ゆめの中身」","purple",13),
    b(14,164,292,34,"to ＋ 原形 ＝ 〜すること",'gray',14),
  ]),
  sl("【ステップ1】My dream is で「私のゆめは〜です」という文が始まっています。is のあとに「ゆめの中身」が入ります。", [
    b(14,18,292,28,"My dream is ～","blue",13),
    b(14,52,292,28,"→ ゆめの中身が入る","green",13),
    b(14,164,292,34,"to ＋ 原形 ＝ 〜すること",'gray',14),
  ]),
  sl("【ステップ2】「パイロットになること」は、動詞を使った内容です。「〜すること」は to ＋ 動詞の原形で表します。「なる」は be です。", [
    b(14,18,292,28,"「なること」","blue",13),
    b(14,52,292,28,"＝ to ＋ be","green",13),
    b(14,164,292,34,"to ＋ 原形 ＝ 〜すること",'gray',14),
  ]),
  sl("【ステップ3】to be を入れて、My dream is to be a pilot. と読みます。", [
    b(14,18,292,28,"My dream is to be","green",13),
    b(14,52,292,28,"a pilot.","blue",13),
    b(14,164,292,34,"to ＋ 原形 ＝ 〜すること",'gray',14),
  ]),
  sl("【答え】① to be", [
    b(40.5,26,98.9,28,"My dream is","blue",13),
    b(144.5,26,53.7,28,"to be","green",13),
    b(203.2,26,76.3,28,"a pilot.","blue",13),
    b(14,164,292,34,"to be",'gray',14),
  ]),
  sl("【確かめ】② be のままでは「〜すること」の形になりません。③ am と ④ is は、すでにある is と動詞が2つ並んでしまいます。to be だけが「パイロットになること」にふさわしい形です。", [
    t(160,24,"② be → to がなくて形が不完全","red",11,'middle'),
    t(160,54,"③ am → is と動詞が2つ並ぶ","red",11,'middle'),
    t(160,84,"④ is → is と動詞が2つ並ぶ","red",11,'middle'),
    t(160,114,"① to be  ○",'green',13,'middle',true),
    b(14,164,292,34,"to ＋ 原形 ＝ 〜すること",'gray',14),
  ]),
  sl("【よくあるまちがい】My dream is be a pilot. と、to を落としてしまうことです。「〜すること」を言いたいときは、必ず動詞の前に to をつけます。", [
    b(14,24,292,28,"My dream is be a pilot（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"My dream is to be a pilot（○）",'green',13),
    b(14,164,292,34,"to を落とさない",'gray',14),
  ]),
], "to ＋ 原形 ＝ 〜すること");

const fc19 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。「何か冷たい飲み物がほしい」の、「飲む（ための）」にあたる部分です。", [
    b(49.3,26,174.3,28,"I want something cold","blue",13),
    b(228.7,26,42.0,28,"＿＿","red",13),
    b(14,164,292,34,"「飲むための」の形は？",'gray',14),
  ]),
  sl("【なぜ？】something（何か）のあとに「to ＋ 動詞の原形」を置くと、「〜するための何か」という意味になります（something to drink ＝ 飲むための何か ＝ 飲み物）。cold のような「どんな」をいう語は something のすぐ後ろに置き、そのあとに to ＋ 動詞を続けるので、something cold to drink の順になります。", [
    b(14,18,292,28,"something ＋ to ＋ 原形","blue",13),
    b(14,52,292,28,"＝「〜するための何か」","green",13),
    b(14,86,292,28,"cold は something の直後","purple",13),
    b(14,164,292,34,"something to drink",'gray',14),
  ]),
  sl("【ステップ1】I want something cold で「冷たい何かがほしい」です。何に使うものかを、あとにつけ足します。", [
    b(14,18,292,28,"I want something cold","blue",13),
    b(14,52,292,28,"→ 何に使う？","green",13),
    b(14,164,292,34,"something to drink",'gray',14),
  ]),
  sl("【ステップ2】「飲むための」は to ＋ 動詞の原形で表します。「飲む」は drink なので to drink です。", [
    b(14,18,292,28,"「飲むための」","blue",13),
    b(14,52,292,28,"＝ to ＋ drink","green",13),
    b(14,164,292,34,"something to drink",'gray',14),
  ]),
  sl("【ステップ3】to drink を入れて、I want something cold to drink. と読みます。「何か冷たい飲み物がほしい」となります。", [
    b(14,18,292,28,"something cold","blue",13),
    b(14,52,292,28,"to drink","green",13),
    b(14,164,292,34,"something to drink",'gray',14),
  ]),
  sl("【答え】④ to drink", [
    b(28.4,26,174.3,28,"I want something cold","blue",13),
    b(207.7,26,83.9,28,"to drink.","green",13),
    b(14,164,292,34,"to drink",'gray',14),
  ]),
  sl("【確かめ】drinking・drank・drinks は、want という動詞がすでにあるため、そのままつなげることができません。something のあとで「〜するための」を表せるのは to drink です。", [
    t(160,24,"① drinking → want とつながらない","red",11,'middle'),
    t(160,54,"② drank → 過去形でおかしい","red",11,'middle'),
    t(160,84,"③ drinks → 形がまちがい","red",11,'middle'),
    t(160,114,"④ to drink ＝ 飲むための  ○",'green',13,'middle',true),
    b(14,164,292,34,"something to drink",'gray',14),
  ]),
  sl("【よくあるまちがい】something to cold drink のように、順番をまちがえることです。something のすぐあとに cold などの語、そのあとに to ＋ 動詞を置きます。", [
    b(14,24,292,28,"something to cold drink（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"something cold to drink（○）",'green',13),
    b(14,164,292,34,"something のあとの順番",'gray',14),
  ]),
], "something to drink");

const fc20 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。Aは「どのくらいの回数（頻度）で図書館に行きますか」とたずねています。", [
    b(76.5,26,31.1,28,"A:","gray",13),
    b(112.6,26,42.0,28,"＿＿","red",13),
    b(159.6,26,83.9,28,"do you go","blue",13),
    b(95.5,64,129.1,28,"to the library?","blue",13),
    b(87.9,102,144.2,28,"B: Twice a month.","green",13),
    b(14,164,292,34,"答えは「回数」",'gray',14),
  ]),
  sl("【なぜ？】How often ～? は、「どのくらいの回数・間かくで〜しますか」と頻度（ひんど）をたずねる言い方です。答えは once a week（週に1回）・twice a month（月に2回）・three times a day（1日に3回）のように、回数を言います。回数の言い方は once（1回）・twice（2回）・three times（3回）〜です。", [
    b(14,18,292,28,"How often ＝ 回数・頻度","blue",13),
    b(14,52,292,28,"once ＝ 1回 ／ twice ＝ 2回","green",13),
    b(14,86,292,28,"3回から ＝ three times","purple",13),
    b(14,164,292,34,"回数は How often",'gray',14),
  ]),
  sl("【ステップ1】Bの答えは Twice a month.（月に2回）です。回数で答えているので、Aは回数をたずねています。", [
    b(14,18,292,28,"答え ＝ twice a month","blue",13),
    b(14,52,292,28,"→ 回数をたずねる","green",13),
    b(14,164,292,34,"回数は How often",'gray',14),
  ]),
  sl("【ステップ2】回数をたずねるのは How often です。How long は時間の長さ、How far はきょり、How many は数をたずねます。", [
    b(14,18,292,28,"回数 ＝ How often","green",13),
    b(14,52,292,28,"How long は時間の長さ","red",13),
    b(14,164,292,34,"回数は How often",'gray',14),
  ]),
  sl("【ステップ3】How often do you go to the library? と読みます。「どのくらいの回数で図書館に行きますか」となります。", [
    b(14,18,292,28,"How often do you go","green",13),
    b(14,52,292,28,"to the library?","blue",13),
    b(14,164,292,34,"回数は How often",'gray',14),
  ]),
  sl("【答え】③ How often", [
    b(55.6,26,31.1,28,"A:","gray",13),
    b(91.7,26,83.9,28,"How often","green",13),
    b(180.5,26,83.9,28,"do you go","blue",13),
    b(95.5,64,129.1,28,"to the library?","blue",13),
    b(87.9,102,144.2,28,"B: Twice a month.","green",13),
    b(14,164,292,34,"How often",'gray',14),
  ]),
  sl("【確かめ】答えの twice a month は回数です。How long なら「10 minutes」、How far なら「2 kilometers」、How many なら「three」のように答えるので、合いません。", [
    t(160,24,"How long → 「10 minutes」と答える","red",11,'middle'),
    t(160,54,"How far → 「2 kilometers」と答える","red",11,'middle'),
    t(160,84,"How many → 「three」と答える","red",11,'middle'),
    t(160,114,"How often → 「twice a month」  ○",'green',13,'middle',true),
    b(14,164,292,34,"回数は How often",'gray',14),
  ]),
  sl("【よくあるまちがい】How often と How many を混同することです。How many は「いくつ（数）」、How often は「何回（頻度）」です。three times は「3回」、three は「3つ」です。", [
    b(14,24,292,28,"How many do you go（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"How often do you go（○）",'green',13),
    b(14,164,292,34,"回数は How often",'gray',14),
  ]),
], "回数は How often");

const fc21 = show([
  sl("【問題を見る】4つの英文のなかから、文法的にまちがいのない文を1つ選びます。", [
    b(74.9,20,170.2,28,"① Tom don't play ～.","blue",13),
    b(74.9,52,170.2,28,"② Does she likes ～?","blue",13),
    b(81.4,84,157.2,28,"③ I can't to swim.","blue",13),
    b(41.0,116,238.0,28,"④ My brother doesn't have ～.","blue",13),
    b(14,164,292,34,"正しい文は1つだけ",'gray',14),
  ]),
  sl("【なぜ？】否定文や疑問文をつくる don't・doesn't・does、そして can't のあとの動詞は、s も to もつかない原形になります。主語が3人称単数のとき、否定文は doesn't ＋ 原形、疑問文は Does ＋ 主語 ＋ 原形です。動詞の s は、doesn't や does がすでに受け持つので、動詞には s をつけません。", [
    b(14,18,292,28,"doesn't・does のあと ＝ 原形","blue",13),
    b(14,52,292,28,"can't のあと ＝ to なしの原形","green",13),
    b(14,86,292,28,"動詞の s は doesn't・does が受け持つ","purple",13),
    b(14,164,292,34,"doesn't・does のあとは原形",'gray',14),
  ]),
  sl("【ステップ1】① Tom don't play ～：主語 Tom は3人称単数なので、don't ではなく doesn't を使います。まちがいです。", [
    b(14,18,292,28,"① Tom don't ～","red",13),
    b(14,52,292,28,"Tom は3人称単数 → doesn't","green",13),
    b(14,164,292,34,"doesn't・does のあとは原形",'gray',14),
  ]),
  sl("【ステップ2】② Does she likes ～?：Does のあとの動詞は原形です。likes ではなく like にします。③ I can't to swim：can't のあとには to をつけません。can't swim が正しい形です。", [
    b(14,18,292,28,"② Does she likes ～? → like","red",13),
    b(14,52,292,28,"③ can't to swim → can't swim","red",13),
    b(14,164,292,34,"doesn't・does のあとは原形",'gray',14),
  ]),
  sl("【ステップ3】④ My brother doesn't have a bike.：主語は3人称単数で doesn't、あとの have は原形です。これだけが正しい文です。", [
    b(14,18,292,28,"④ doesn't ＋ have（原形）","green",13),
    b(14,52,292,28,"これだけが正しい","green",13),
    b(14,164,292,34,"doesn't・does のあとは原形",'gray',14),
  ]),
  sl("【答え】④ My brother doesn't have a bike.", [
    b(104.0,26,111.9,28,"④ My brother","green",13),
    b(76.6,64,166.8,28,"doesn't have a bike.","green",13),
    b(14,164,292,34,"My brother doesn't have a bike.",'gray',14),
  ]),
  sl("【確かめ】④の My brother doesn't have a bike.（兄（弟）は自転車を持っていません）は、doesn't のあとが原形 have で、文法のきまりに合っています。①〜③は、それぞれ don't・likes・to のところがまちがいです。", [
    t(160,24,"① don't → doesn't にする","red",11,'middle'),
    t(160,54,"② likes → like にする","red",11,'middle'),
    t(160,84,"③ to をとる","red",11,'middle'),
    t(160,114,"④ doesn't ＋ 原形 have  ○",'green',13,'middle',true),
    b(14,164,292,34,"doesn't・does のあとは原形",'gray',14),
  ]),
  sl("【よくあるまちがい】doesn't や does のあとの動詞にも s をつけてしまうことです。s は doesn't・does が受け持つので、動詞は原形にします。", [
    b(14,24,292,28,"Does she likes dogs?（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"Does she like dogs?（○）",'green',13),
    b(14,164,292,34,"does のあとは原形",'gray',14),
  ]),
], "doesn't・does のあとは原形");

const fc22 = show([
  sl("【問題を見る】8つの語を並べかえて、「あなたはこの夏、どこへ行くつもりですか」という疑問文をつくります。", [
    b(67.7,26,31.1,28,"go","gray",13),
    b(103.8,26,53.7,28,"Where","gray",13),
    b(162.5,26,38.6,28,"are","gray",13),
    b(206.1,26,46.2,28,"this","gray",13),
    b(60.2,64,38.6,28,"you","gray",13),
    b(103.8,64,31.1,28,"to","gray",13),
    b(139.9,64,61.2,28,"summer","gray",13),
    b(206.1,64,53.7,28,"going","gray",13),
    b(14,164,292,34,"8つの語をならべかえる",'gray',14),
  ]),
  sl("【なぜ？】「〜するつもりです」は be going to ＋ 動詞の原形で表します。「どこへ」とたずねる疑問文では、Where を文の最初に置き、そのあとを疑問文の順（be動詞 → 主語 → going to ＋ 原形）にします。つまり Where ＋ are ＋ you ＋ going to ＋ go の順で、「いつ」を表す this summer は最後です。", [
    b(14,18,292,28,"「どこへ」＝ 文のはじめに Where","blue",13),
    b(14,52,292,28,"疑問文 ＝ are が you の前","green",13),
    b(14,86,292,28,"going to ＋ 原形 ＝ つもり","purple",13),
    b(14,164,292,34,"Where are you going to ～?",'gray',14),
  ]),
  sl("【ステップ1】文の最初は Where です。「どこへ」とたずねる語は、疑問文では文のいちばん最初に置きます。", [
    b(14,18,292,28,"Where","blue",13),
    b(14,164,292,34,"Where are you going to ～?",'gray',14),
  ]),
  sl("【ステップ2】Where のあとは、疑問文の順にします。be動詞 are、主語 you、そして going to ＋ 動詞の原形 go を続けます。Where are you going to go", [
    b(14,18,292,28,"Where","blue",13),
    b(14,52,292,28,"are you","green",13),
    b(14,86,292,28,"going to go","purple",13),
    b(14,164,292,34,"Where are you going to ～?",'gray',14),
  ]),
  sl("【ステップ3】最後に「この夏」にあたる this summer を置き、文の終わりに ? をつけます。Where are you going to go this summer?", [
    b(14,18,292,28,"Where are you going to go","green",13),
    b(14,52,292,28,"this summer?","red",13),
    b(14,164,292,34,"Where are you going to ～?",'gray',14),
  ]),
  sl("【答え】Where are you going to go this summer?", [
    b(57.8,26,204.5,28,"Where are you going to go","green",13),
    b(106.8,64,106.5,28,"this summer?","green",13),
    b(14,164,292,34,"Where are you going to go this summer?",'gray',12),
  ]),
  sl("【確かめ】8つの語をすべて使っています。最初は大文字の Where、最後はクエスチョンマークです。「あなたはこの夏どこへ行くつもりですか」と日本語に合い、are のあとに主語 you が来る疑問文の順にもなっています。", [
    t(160,24,"8つの語を すべて使った","blue",11,'middle'),
    t(160,54,"最初は大文字・最後は ?","blue",11,'middle'),
    t(160,84,"are が you の前に出ている  ○",'green',13,'middle',true),
    b(14,164,292,34,"Where are you going to ～?",'gray',14),
  ]),
  sl("【よくあるまちがい】you are going のように、ふつうの文の順にそのまま並べてしまうことです。疑問文では be動詞 are を主語 you の前に出します。また、going to go の to のあとは原形 go です。", [
    b(14,24,292,28,"Where you are going to go（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"Where are you going to go（○）",'green',13),
    b(14,164,292,34,"疑問文は be動詞が前",'gray',14),
  ]),
], "Where are you going to ～?");

const fc23 = show([
  sl("【問題を見る】空所に入る語（句）を選びます。「あしたは休日なので、早く起きる必要はありません」という意味にします。", [
    b(61.5,26,38.6,28,"You","blue",13),
    b(105.1,26,42.0,28,"＿＿","red",13),
    b(152.1,26,106.5,28,"get up early","blue",13),
    b(118.1,64,83.9,28,"tomorrow.","gray",13),
    b(91.7,102,136.6,28,"It is a holiday.","green",13),
    b(14,164,292,34,"休日のあしたは？",'gray',14),
  ]),
  sl("【なぜ？】have to は「〜しなければならない」、その否定の don't have to は「〜する必要はない」という意味です。must not は「〜してはいけない」という強い禁止で、意味がまったくちがいます。「しなくてもよい」と「してはいけない」を取りちがえないことが大切です。", [
    b(14,18,292,28,"have to ＝ しなければならない","blue",13),
    b(14,52,292,28,"don't have to ＝ しなくてよい","green",13),
    b(14,86,292,28,"must not ＝ してはいけない","red",13),
    b(14,164,292,34,"don't have to ＝ しなくてよい",'gray',14),
  ]),
  sl("【ステップ1】2文目の It is a holiday.（休日です）から、早く起きなくてもよいことがわかります。", [
    b(14,18,292,28,"It is a holiday.","blue",13),
    b(14,52,292,28,"→ 早起きしなくてよい","green",13),
    b(14,164,292,34,"don't have to ＝ しなくてよい",'gray',14),
  ]),
  sl("【ステップ2】「〜する必要はない」は don't have to ＋ 動詞の原形です。must と have to は「〜しなければならない」で、意味が反対になります。", [
    b(14,18,292,28,"しなくてよい","green",13),
    b(14,52,292,28,"＝ don't have to","green",13),
    b(14,164,292,34,"don't have to ＝ しなくてよい",'gray',14),
  ]),
  sl("【ステップ3】don't have to を入れて、You don't have to get up early tomorrow. と読みます。", [
    b(14,18,292,28,"You don't have to","green",13),
    b(14,52,292,28,"get up early tomorrow.","blue",13),
    b(14,164,292,34,"don't have to ＝ しなくてよい",'gray',14),
  ]),
  sl("【答え】④ don't have to", [
    b(25.4,26,38.6,28,"You","blue",13),
    b(69.1,26,114.0,28,"don't have to","green",13),
    b(188.1,26,106.5,28,"get up early","blue",13),
    b(118.1,64,83.9,28,"tomorrow.","gray",13),
    b(91.7,102,136.6,28,"It is a holiday.","green",13),
    b(14,164,292,34,"don't have to",'gray',14),
  ]),
  sl("【確かめ】① must と ② have to は「早く起きなければならない」、③ must not は「早く起きてはいけない」です。どれも「休日だから」という理由と合いません。don't have to だけが「起きる必要はない」で、つながります。", [
    t(160,24,"① must → 起きなければならない","red",11,'middle'),
    t(160,54,"② have to → 起きなければならない","red",11,'middle'),
    t(160,84,"③ must not → 起きてはいけない","red",11,'middle'),
    t(160,114,"④ don't have to ＝ 起きなくてよい  ○",'green',13,'middle',true),
    b(14,164,292,34,"don't have to ＝ しなくてよい",'gray',14),
  ]),
  sl("【よくあるまちがい】don't have to を must not と同じ意味だと思ってしまうことです。don't have to は「しなくてもよい」、must not は「してはいけない」で、まったくちがう意味です。", [
    b(14,24,292,28,"don't have to ＝ してはいけない（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"don't have to ＝ しなくてよい（○）",'green',13),
    b(14,164,292,34,"禁止とはちがう",'gray',14),
  ]),
], "don't have to ＝ しなくてよい");

const fc24 = show([
  sl("【問題を見る】空所に入る語を選びます。「とても上手に歌います」の、「上手に」にあたる語です。", [
    b(75.7,26,121.6,28,"Aya sings very","blue",13),
    b(202.3,26,42.0,28,"＿＿","red",13),
    b(69.1,64,181.9,28,"She is a great singer.","gray",13),
    b(14,164,292,34,"sings を説明する語は？",'gray',14),
  ]),
  sl("【なぜ？】動詞（どうする）を説明する語は、副詞です。good は「よい」という形容詞で、名詞（a good singer）や be動詞のあと（She is good.）で使います。動詞 sings を説明して「上手に」というときは、副詞の well を使います。good と well は、使う場所がちがいます。", [
    b(14,18,292,28,"名詞を説明 ＝ good（形容詞）","blue",13),
    b(14,52,292,28,"動詞を説明 ＝ well（副詞）","green",13),
    b(14,86,292,28,"a good singer ＝ sings well","purple",13),
    b(14,164,292,34,"動詞を説明するのは well",'gray',14),
  ]),
  sl("【ステップ1】空所の前の sings は「歌う」という動詞です。「どのように歌うか」を説明する語が入ります。", [
    b(14,18,292,28,"sings ＝ 動詞","blue",13),
    b(14,52,292,28,"→ 「どのように」を入れる","green",13),
    b(14,164,292,34,"動詞を説明するのは well",'gray',14),
  ]),
  sl("【ステップ2】動詞を説明するのは副詞です。good は形容詞なので、動詞 sings を説明できません。「上手に」の副詞は well です。", [
    b(14,18,292,28,"動詞を説明 ＝ 副詞","green",13),
    b(14,52,292,28,"good（×）→ well（○）","red",13),
    b(14,164,292,34,"動詞を説明するのは well",'gray',14),
  ]),
  sl("【ステップ3】well を入れて、Aya sings very well. と読みます。very は「とても」で、well を強めています。", [
    b(14,18,292,28,"Aya sings very well.","green",13),
    b(14,52,292,28,"very ＝ とても","blue",13),
    b(14,164,292,34,"動詞を説明するのは well",'gray',14),
  ]),
  sl("【答え】③ well", [
    b(69.9,26,121.6,28,"Aya sings very","blue",13),
    b(196.4,26,53.7,28,"well.","green",13),
    b(69.1,64,181.9,28,"She is a great singer.","gray",13),
    b(14,164,292,34,"well",'gray',14),
  ]),
  sl("【確かめ】② best と ④ better は good や well を変えた形（最上級・比較級）で、「とても」の very のあとには使えません。① good は形容詞なので sings に合いません。well だけが動詞 sings を説明できます。", [
    t(160,24,"① good → 形容詞（sings に合わない）","red",11,'middle'),
    t(160,54,"② best → very のあとに使えない","red",11,'middle'),
    t(160,84,"④ better → very のあとに使えない","red",11,'middle'),
    t(160,114,"③ well → 動詞を説明  ○",'green',13,'middle',true),
    b(14,164,292,34,"動詞を説明するのは well",'gray',14),
  ]),
  sl("【よくあるまちがい】good と well を取りちがえることです。名詞を説明するなら good（a good singer）、動詞を説明するなら well（sings well）。", [
    b(14,24,292,28,"sings very good（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"sings very well（○）",'green',13),
    b(14,164,292,34,"good と well の使い分け",'gray',14),
  ]),
], "動詞を説明するのは well");

const fc25 = show([
  sl("【問題を見る】3つの文を並べかえて、AとBの自然な会話にします。", [
    b(17.2,26,174.2,28,"① Yes, I do. I play it","blue",12),
    b(196.3,26,106.5,28,"every Sunday.","blue",12),
    b(70.1,64,179.8,28,"② Do you like tennis?","blue",13),
    b(11.6,102,141.8,28,"③ Great! Let's play","blue",11),
    b(158.4,102,150.0,28,"together next Sunday.","blue",11),
    b(14,164,292,34,"質問と答えの組は？",'gray',14),
  ]),
  sl("【なぜ？】会話の順番は、「たずねる文 → 答える文 → それに反応する文」の流れで考えます。② Do you like tennis? は質問で、① Yes, I do. は、その質問に Yes で答える文です。③ Great! Let's play together ～. は、相手の答えを受けて「いっしょにやろう」とさそう文なので、いちばん最後です。", [
    b(14,18,292,28,"質問 ＝ ② Do you like tennis?","blue",13),
    b(14,52,292,28,"答え ＝ ① Yes, I do. ～","green",13),
    b(14,86,292,28,"さそい ＝ ③ Let's ～ は最後","purple",13),
    b(14,164,292,34,"質問 → 答え → さそい",'gray',14),
  ]),
  sl("【ステップ1】あいさつのあと、Aが話題を出します。② Do you like tennis?（テニスは好きですか）が、話題を切り出す質問です。", [
    b(14,18,292,28,"② Do you like tennis?","blue",13),
    b(14,52,292,28,"→ 話題を出す質問","green",13),
    b(14,164,292,34,"質問 → 答え → さそい",'gray',14),
  ]),
  sl("【ステップ2】Bは、その質問に答えます。Do you ～? にこたえる Yes, I do. で始まる ① が2番目です。", [
    b(14,18,292,28,"① Yes, I do.","green",13),
    b(14,52,292,28,"→ 質問への答え","blue",13),
    b(14,164,292,34,"質問 → 答え → さそい",'gray',14),
  ]),
  sl("【ステップ3】最後に、Bの答え（毎週日曜日にする）を受けて、Aが ③ Great! Let's play together ～. とさそいます。順番は ② → ① → ③ です。", [
    b(14,18,292,28,"③ Great! Let's play ～.","green",13),
    b(14,52,292,28,"→ 答えを受けたさそい","blue",13),
    b(14,164,292,34,"質問 → 答え → さそい",'gray',14),
  ]),
  sl("【答え】④ ② → ① → ③", [
    b(70.1,26,179.8,28,"② Do you like tennis?","blue",13),
    b(104.0,64,111.9,28,"① Yes, I do.","green",13),
    b(63.6,102,192.8,28,"③ Great! Let's play ～.","purple",13),
    b(14,164,292,34,"② → ① → ③",'gray',14),
  ]),
  sl("【確かめ】A: Do you like tennis? B: Yes, I do. I play it every Sunday. A: Great! Let's play together next Sunday. と通して読むと、質問・答え・さそいと自然につながります。", [
    t(160,24,"A: Do you like tennis?","blue",11,'middle'),
    t(160,54,"B: Yes, I do. I play it every Sunday.","green",11,'middle'),
    t(160,84,"A: Great! Let's play together ～.","purple",11,'middle'),
    t(160,114,"質問・答え・さそい  ○",'green',13,'middle',true),
    b(14,164,292,34,"質問 → 答え → さそい",'gray',14),
  ]),
  sl("【よくあるまちがい】さそいの ③ を先に置いてしまうことです。Let's ～ は相手の気持ちや答えを聞いたあとに言うのが自然です。Yes, I do. は質問の直後です。", [
    b(14,24,292,28,"③ を先に置く（×）",'red',13),
    a(160,58,160,76,'green'),
    b(14,78,292,28,"② → ① → ③（○）",'green',13),
    b(14,164,292,34,"さそいは最後",'gray',14),
  ]),
], "質問 → 答え → さそい");

export const figuresMoshi202701EigoChugaku1: Record<string, Figure> = {
  moshi_2027_01_eigo_c01: fc01,
  moshi_2027_01_eigo_c02: fc02,
  moshi_2027_01_eigo_c03: fc03,
  moshi_2027_01_eigo_c04: fc04,
  moshi_2027_01_eigo_c05: fc05,
  moshi_2027_01_eigo_c06: fc06,
  moshi_2027_01_eigo_c07: fc07,
  moshi_2027_01_eigo_c08: fc08,
  moshi_2027_01_eigo_c09: fc09,
  moshi_2027_01_eigo_c10: fc10,
  moshi_2027_01_eigo_c11: fc11,
  moshi_2027_01_eigo_c12: fc12,
  moshi_2027_01_eigo_c13: fc13,
  moshi_2027_01_eigo_c14: fc14,
  moshi_2027_01_eigo_c15: fc15,
  moshi_2027_01_eigo_c16: fc16,
  moshi_2027_01_eigo_c17: fc17,
  moshi_2027_01_eigo_c18: fc18,
  moshi_2027_01_eigo_c19: fc19,
  moshi_2027_01_eigo_c20: fc20,
  moshi_2027_01_eigo_c21: fc21,
  moshi_2027_01_eigo_c22: fc22,
  moshi_2027_01_eigo_c23: fc23,
  moshi_2027_01_eigo_c24: fc24,
  moshi_2027_01_eigo_c25: fc25,
};
