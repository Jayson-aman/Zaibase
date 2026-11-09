import type { Question } from './questions';

// 本試験対策（学校別）渋谷教育学園幕張高等学校（course: 'koko-shibumaku'）・高校受験 数学・英語・国語（各40問＝120問、ID は _01〜_40）。組A。
// 実際の過去問ではなく、その学校の出題形式（大問の型・難度・記述の分量・図表の使い方）に合わせた自作問題。学校名は問題文・解説に出さない。
// 入試プロフィール（確実に言える範囲だけ。確認できない点は「概要」「未確認」と明記）：
//  ・学校：千葉県千葉市美浜区若葉。男女共学。高校入試あり（1月に前期入試、2月に後期入試。出典：ja.wikipedia.org の学校ページ）。
//    同ページには「入試問題は暗記だけでなく理由を問う内容」という趣旨の記述がある。→ 解説は「なぜそうなるか」を必ず書く型にした。
//  ・科目構成（想定は英語・数学・国語の3教科）・試験時間・配点・大問の数と並び・リスニングの有無・記述の字数は、出典では確認できていない（未確認・概要）。
//    リスニング形式は出さない方針（依頼文どおり）。
//  ・準拠のしかた（概要）：数学＝小問集合（計算・平方根・方程式・確率・場合の数・データの活用）→関数（放物線と直線）→平面図形（円・相似・三平方）→
//    空間図形→整数・規則性、の型で、「基本を正確に使い、1つ重ねた応用まで」を出題。中学の範囲に収める（sin・cos・微分・ベクトル・組み合わせの記号は使わない）。
//    英語＝文法・語彙（選択）、語句の整序、和文英訳・自由英作文（記述）、自作の長文3本（読解の設問）、対話文の補充。
//    国語＝漢字の読み書き、語句・敬語・文法・古文の知識、自作の課題文4本（評論2・小説1・随筆1）に選択式と記述式の設問。
//  ・difficulty は standard 16・advanced 24（各教科）。
//  ・動く図解は data/figures-honshiken-school-koko-shibumaku-A.ts に同じIDで置く（数学16問。国語・英語は図なし）。
//  ・国語の古文は、字句を ja.wikisource.org で確認できなかったため、課題文としては出さず、歴史的かなづかい・古語・係り結びの知識問題にした。
//  ・同じ学校の中学校は別コース（tokyo-shibumaku）。ここは高校のみ。
// 題材一覧（同じ学校の「傾向問題」・既存の問題と重ならないようにするためのメモ）：
//  ・数学：式の値（対称式）・平方の差と自然数・√の整数条件・食塩水・2次方程式の解の差・四分位範囲・さいころと場合の数・カードの並べ方・
//    放物線と直線の三角形の面積・面積の2等分・変化の割合・動点の面積・平行四辺形・最短距離（折り返し）・正方形の内接・追いつき算・円周角・相似と面積比・
//    内接円・正四角錐・円錐の表面積・回転体・接線と弦・交わる弦・角の二等分線・中点連結・正六角形・合同条件・連続整数・碁石の規則・図形数・確率（玉・硬貨）・
//    度数分布表・標本調査・道のはば・連続する奇数・√の小数部分・弓形の面積・2点間の距離。
//  ・英語：関係代名詞・現在完了進行形・不定詞と動名詞・間接疑問・分詞・受動態・最上級・too to・look forward to・名詞の語彙、語句の整序6問、和文英訳、自由英作文
//    （スマートフォンと授業）、長文3本（図書館の静かな時間・ミソ汁のメモ・ウミガメと明かり）、対話文5問。
//  ・国語：漢字（後悔・厳格・異議・転嫁・密接・深刻、概して・顕著・敬遠・憂慮）、慣用句・ことわざ・四字熟語・敬語・品詞・助動詞・活用形・古文の知識、
//    課題文4本（分からなさの価値・バトンの小説・地図アプリと考える力・駅の傘の随筆）。


const P_1 = `Last spring, our town library began something new: a "Quiet Hour" every Saturday morning. During this hour, visitors may not talk, and even the staff speak in whispers. At first, many people complained. "A library is already quiet," said one old man. "Why do we need a special time for it?"
The librarian, Ms. Ota, explained her idea. "In the past, people came to the library only to borrow books," she said. "Now they also use it to study, to meet friends, or to use the computers. That is wonderful, but some visitors told us that they could not find a place to think." She said that the Quiet Hour was not meant to stop people from talking, but to give a choice to those who needed silence.
After three months, the library asked visitors what they thought. About seventy percent said they liked the idea, and the number of Saturday visitors had grown by twenty percent. A high school student wrote, "I finished my homework in an hour, and I was surprised. I did not know how much I could do without noise."
Ms. Ota is now planning a "Talking Hour" on Sunday afternoons, when children can read aloud and join story games. "A good public place," she says, "is not one where everyone does the same thing. It is one where different people can find the time that suits them."`;

const P_2 = `When Mai found her grandmother's old notebook in the kitchen, she almost threw it away. The pages were yellow, and the writing was hard to read. But one page caught her eye: a recipe for miso soup, with a small note at the bottom: "Taste, then wait one minute. Taste again."
Mai had never understood that note. Whenever she made soup, she tasted it once, added more miso if it seemed weak, and served it right away. Her soup was always too salty.
One Sunday, she decided to follow the note exactly. She tasted the soup, and it seemed weak. Instead of adding more miso, she waited a minute and tasted it again. This time, the flavor had become deeper. She realized that the first taste had been wrong, not because the soup was weak, but because her tongue was still full of the sweet tea she had been drinking.
She called her grandmother that evening. "I finally understood your note," she said. Her grandmother laughed. "Good cooks are not the ones who know many recipes," she answered. "They are the ones who know when to wait."`;

const P_3 = `In many coastal areas, baby sea turtles hatch at night and crawl toward the sea. For millions of years, they have found their way by moving toward the brightest horizon, which used to be the sea reflecting the moon and stars. Today, however, lights from hotels and streets often shine brighter than the sea, and many baby turtles walk the wrong way, toward the roads.
In one small town in Florida, volunteers decided to change the situation. They asked hotels to turn off unnecessary lights during the hatching season, from May to October, and to use amber lights, which turtles cannot see well, instead of white ones. At first, some hotel owners worried that darker beaches would make tourists feel unsafe. But the volunteers showed that a few well-placed lamps pointing downward were enough for people to walk safely.
Five years later, the number of baby turtles that reached the sea had doubled. Surprisingly, the number of tourists did not fall. Many guests even enjoyed the "turtle watch" programs held on dark beaches, where they could see thousands of stars. The volunteers say that the project proved something important: protecting nature does not always have to be a loss for people.`;

const P_4 = `私たちは、分からないことを、できるだけ早くなくしたいと考える。調べればすぐに答えが出る時代になった今では、なおさらそうである。しかし、分からない状態にとどまる時間には、答えをもらった瞬間には得られない価値があるのではないか。
たとえば、ある数学の問題が解けずに、何日も考え続けたとする。そのあいだ、頭の中には解けない問題が居座り、ふとした瞬間に、別の場面で見たことが解法のヒントとしてつながることがある。答えを先に見てしまえば、この「つながる」経験は起こらない。
もちろん、すべての「分からなさ」を放っておけばよいというのではない。基礎的な知識の不足による分からなさは、早く解消しなければ先に進めない。だが、自分の中で問いを育てている段階の分からなさは、別である。それは、答えを待つための余白であり、考える力が育つ場所でもある。
大切なのは、分からなさの種類を見分けることだ。いま自分が抱えているのは、すぐ埋めるべき穴なのか、それとも、時間をかけて熟成させるべき問いなのか。この見分けがつくようになったとき、私たちは、答えを急ぐ社会の中でも、自分のペースで考えることができるようになる。`;

const P_5 = `最後の練習試合の前日、ぼくは、リレーのバトンを三度続けて落とした。
「もう一回。」
顧問の先生は、笑いも怒りもせず、同じ調子でそう言った。グラウンドのすみで、四走の拓海が、スパイクのひもを結び直している。その動きが、いつもより少しだけ長く思えた。
ぼくは三走で、拓海にバトンを渡す役だった。助走をつけて走り出す拓海の背中を、ぼくは追う。もう少し、もう少しと、伸ばした手の先で、バトンは拓海の指に触れ、そして、またすべり落ちた。
乾いた音が、グラウンドに響いた。
「ごめん。」
言ったのは、ぼくではなく、拓海だった。ぼくは、思わず顔を上げた。拓海は、落ちたバトンを拾い上げながら、ぼくを見ずに続けた。
「おれが、走り出すのが早かった。もう少し、待つよ。」
それは、うそだった。走り出す位置を決めたのは、先生とぼくで、拓海はそのとおりに動いていただけだ。ぼくは、拓海の横顔を見た。かたく結んだくちびるが、少しふるえているように見えた。
「いや、おれが、声を出すのが遅かった。」
そう言うと、拓海は、ほんの少しだけ、笑った。
その夜、ぼくは、布団の中で、何度も手のひらを開いたり閉じたりした。バトンは、渡すものではなく、渡し合うものなのだと、ぼくは、はじめて思った。`;

const P_6 = `地図アプリは、目的地までの道を、青い線で示してくれる。画面の指示にしたがって歩けば、初めての町でも迷うことはない。ところが、そうして行った場所の道順を、あとで一人で思い出そうとすると、ほとんど覚えていないことに気づく。
これは、道を「選んで」歩いたのか、それとも「歩かされて」いたのかのちがいによる。自分で地図を読み、あの角を曲がるのか、この橋をわたるのかと考えながら歩けば、周りの景色が手がかりとして頭に残る。ところが、指示だけを頼りに歩くと、景色は、ただ通りすぎるものになってしまう。
だからといって、便利な道具をしりぞけるべきだという話ではない。道具は、人間の力を補うもので、使うこと自体が悪いのではない。問題は、道具が考える部分まで肩代わりしてしまったとき、人間のほうは、考える機会を手放してしまうことである。
道具を使うとき、私たちは「何を任せ、何を自分でやるか」を、いつも選んでいる。その選択に自覚的であること。それが、便利さの中で、自分の力を失わないための、最初の一歩なのだ。`;

const P_7 = `駅の傘立てに、持ち主の分からない傘が一本、何週間も立てかけられている。透明のビニールは黄ばみ、骨が一本、外側に曲がっている。晴れの日が続いても、雨の日がきても、その傘は、そこにある。
ある朝、その傘を、見知らぬ老人が手に取った。老人は、曲がった骨を指で押し戻し、しばらく眺めてから、元の場所にそっと戻した。そして、自分の傘を開いて、雨の中へ歩いていった。
私は、その動作を、ただ見ていた。なぜ戻したのか。直そうとしたのか、持ち主を待つ傘だと気づいたのか。理由は分からない。ただ、その傘は、翌日も、変わらずそこに立っていた。ひとつだけ変わっていたのは、曲がっていた骨が、まっすぐになっていたことだった。
人は、自分のものでないものに、どこまで手を貸してよいのだろうか。私は、あの傘を見るたびに、その問いを思い出す。答えは、まだ出ていない。`;

export const honshikenSchool_koko_shibumaku_A: Question[] = [
  // ─────────────── 算数（数学）（40問） ───────────────
  {
    id: 'honshiken_school_koko_shibumaku_sansu_01',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: 'x＝2＋√5、y＝2−√5 のとき、x²y＋xy²＋x²＋y² の値を求めなさい。',
    answer: '14',
    hint: 'x＋y と xy の値を先に求めて、式の形を「和と積」で書きかえる。',
    explanation: `【何を聞かれているか】
文字が2つの式の値を、1つずつ代入せずに求めます。

【なぜそうなるのか】
x²y＋xy² は xy でくくれて xy(x＋y)、x²＋y² は (x＋y)²−2xy と書けます。どちらも「x＋y」と「xy」だけで表せるので、2つの値さえ出せば、√5 を何度も計算しなくて済みます。

【ステップ1】x＋y＝(2＋√5)＋(2−√5)＝4。√5 が打ち消し合います。
【ステップ2】xy＝(2＋√5)(2−√5)＝4−5＝−1。(a＋b)(a−b)＝a²−b² の形です。
【ステップ3】x²y＋xy²＝xy(x＋y)＝(−1)×4＝−4。
【ステップ4】x²＋y²＝(x＋y)²−2xy＝16−2×(−1)＝18。
【ステップ5】合計は −4＋18＝14。

【答え】14

【確かめ】x²＝9＋4√5、y²＝9−4√5 なので x²＋y²＝18。x²y＋xy²＝xy(x＋y)＝−4。合わせて14で一致します。

【よくあるまちがい】xy＝−1 のマイナスを落として x²＋y²＝16−2＝14 としてしまう。−2xy は −2×(−1)＝＋2 です。`,
    pitfall: 'xy が負のとき、−2xy は足し算になる。符号を必ず確かめる。',
    memoryTip: '対称式（x²＋y² など）は「和」と「積」の2つで書きかえる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_02',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: 'x、y を自然数とします。x²−y²＝77 を満たす (x, y) の組すべてについて、x の値の和を求めなさい。',
    answer: '48',
    hint: '左辺を因数分解して、77 を2つの整数の積に分ける。x−y は x＋y より小さい。',
    explanation: `【何を聞かれているか】
x²−y²＝77 を成り立たせる自然数の組を全部さがし、x を足します。

【なぜそうなるのか】
x²−y² は (x−y)(x＋y) と因数分解できます。右辺の77は 1×77 か 7×11 の積にしか分けられないので、候補が2つにしぼれます。x−y と x＋y は、小さいほうが x−y になります。

【ステップ1】(x−y)(x＋y)＝77。77の約数は 1、7、11、77。
【ステップ2】x−y＝1、x＋y＝77 のとき：2x＝78 より x＝39、y＝38。
【ステップ3】x−y＝7、x＋y＝11 のとき：2x＝18 より x＝9、y＝2。
【ステップ4】x の和は 39＋9＝48。

【答え】48

【確かめ】39²−38²＝1521−1444＝77、9²−2²＝81−4＝77。どちらも成り立ちます。

【よくあるまちがい】x−y＝77、x＋y＝1 の組も考えてしまう。y が自然数なら x＞y で、x−y＜x＋y のはずです。`,
    pitfall: '自然数は正の整数。x＞y なので、小さい因数が x−y。',
    memoryTip: '平方の差は因数分解して、積の形に分ける。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_03',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '√(540n) が整数となる自然数 n を、小さいほうから順に並べるとき、3番目の n を求めなさい。',
    answer: '135',
    hint: '540 を素数の積に分けて、指数がすべて偶数になるようにする。',
    explanation: `【何を聞かれているか】
√(540n) が整数になる n を小さい順に3つ見つけ、3番目を答えます。

【なぜそうなるのか】
平方根の中が「ある整数の2乗」になれば、根号がはずれて整数になります。2乗になるのは、素因数分解したとき、どの素数の指数も偶数になる場合です。

【ステップ1】540＝2²×3³×5。2の指数は2で偶数、3の指数は3で奇数、5の指数は1で奇数。
【ステップ2】3と5の指数を偶数にするには、少なくとも 3×5＝15 をかけます。540×15＝2²×3⁴×5²＝8100＝90²。
【ステップ3】n は 15 に「2乗の数」をかけた数。15×1²＝15、15×2²＝60、15×3²＝135。
【ステップ4】3番目は 135。

【答え】135

【確かめ】540×135＝72900＝270²。整数になります。540×60＝32400＝180² も整数で、間に条件を満たす数はありません。

【よくあるまちがい】最小の n＝15 だけで終わる。15、30、45 ではなく、2乗の数をかけた 15、60、135 が正しい並びです。`,
    pitfall: 'n＝15×(整数の2乗)。15×4＝60 であって、15×2＝30 ではない。',
    memoryTip: '根号の中を素因数分解して、指数をすべて偶数にそろえる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_04',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '8%の食塩水と15%の食塩水を混ぜて、10%の食塩水を420gつくりました。15%の食塩水は何g混ぜましたか。',
    answer: '120g',
    hint: '食塩水の量の合計と、とけている食塩の量の合計で、2つの式をつくる。',
    explanation: `【何を聞かれているか】
混ぜた15%の食塩水の重さを求めます。

【なぜそうなるのか】
食塩水を混ぜても、全体の重さと、食塩の重さは足し算で保たれます。濃度どうしは足せませんが、「濃度×重さ＝食塩の重さ」にすれば足せます。

【ステップ1】8%を xg、15%を yg とすると、x＋y＝420。
【ステップ2】食塩の重さは 0.08x＋0.15y＝420×0.10＝42。
【ステップ3】1つ目の式を 0.08 倍すると 0.08x＋0.08y＝33.6。これを2つ目から引くと 0.07y＝8.4。
【ステップ4】y＝8.4÷0.07＝120、x＝300。

【答え】120g

【確かめ】食塩の重さは 300×0.08＋120×0.15＝24＋18＝42g。420gの10%＝42gで一致します。

【よくあるまちがい】濃度の8、15、10 をそのまま使って 8x＋15y＝10×420 と立て、食塩の重さを求めたつもりで計算ミスをする。式を立てるときは濃度を小数に直します。`,
    pitfall: '混ぜた全体の食塩は 42g になる。',
    memoryTip: '食塩水は「重さ」と「食塩の重さ」の2本の式で解く。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_05',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '2次方程式 x²−6x＋k＝0 の2つの解の差が 2√7 であるとき、定数 k の値を求めなさい。',
    answer: '2',
    hint: '解を α、β として、α＋β と αβ を k や 6 で表し、(α−β)² を作る。',
    explanation: `【何を聞かれているか】
2つの解の差が決まっているとき、定数 k を求めます。

【なぜそうなるのか】
2次方程式 x²−6x＋k＝0 の2つの解を α、β とすると、解の公式から α＋β＝6、αβ＝k がわかります。さらに (α−β)²＝(α＋β)²−4αβ という式変形で、差と和と積がつながります。

【ステップ1】解の公式より、解は x＝3±√(9−k)。2つの解の和は6、差は 2√(9−k)。
【ステップ2】差が 2√7 なので √(9−k)＝√7、よって 9−k＝7。
【ステップ3】k＝2。
【ステップ4】このとき解は 3±√7 で、実数の解が2つあります。

【答え】2

【確かめ】k＝2 を代入すると x²−6x＋2＝0、解は x＝3±√7。差は (3＋√7)−(3−√7)＝2√7 で問題どおりです。

【よくあるまちがい】差を √(9−k) としてしまい、「2倍」を忘れる。2つの解は 3＋√(9−k) と 3−√(9−k) なので、差は 2√(9−k) です。`,
    pitfall: '解は 3＋□ と 3−□。差は □の2倍。',
    memoryTip: '2つの解は中心3から左右に同じ距離だけはなれている。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_06',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '7人のテストの得点が 12、15、9、x、18、21、14（点）で、平均点が15点でした。このデータの四分位範囲を求めなさい。',
    answer: '6点',
    hint: 'まず合計が 15×7＝105 になることから x を求める。',
    explanation: `【何を聞かれているか】
データの散らばりを表す四分位範囲（第3四分位数−第1四分位数）を求めます。

【なぜそうなるのか】
四分位範囲は、小さい順に並べたデータを2つに分けて、下半分の中央値（第1）と上半分の中央値（第3）の差で出します。まず x がわからないと並べられません。

【ステップ1】合計は 15×7＝105。x＝105−(12＋15＋9＋18＋21＋14)＝105−89＝16。
【ステップ2】小さい順：9、12、14、15、16、18、21。
【ステップ3】中央値15をのぞいた、下半分は 9、12、14。第1四分位数は 12。
【ステップ4】上半分は 16、18、21。第3四分位数は 18。
【ステップ5】四分位範囲は 18−12＝6。

【答え】6点

【確かめ】平均を計算し直すと (9＋12＋14＋15＋16＋18＋21)÷7＝105÷7＝15。条件と合います。

【よくあるまちがい】データが奇数個のとき、中央値を下半分にも上半分にも入れてしまう。中央値は両方からのぞきます。`,
    pitfall: '奇数個のデータでは、真ん中の1個を除いてから半分に分ける。',
    memoryTip: '四分位範囲＝第3四分位数−第1四分位数。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_07',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '大小2つのさいころを同時に投げ、出た目をそれぞれ a、b とします。a×b が4の倍数になる確率を求めなさい。',
    answer: '5/12',
    hint: '36通りの目の出方を、a が1〜6のときに分けて数える。',
    explanation: `【何を聞かれているか】
積が4の倍数になる目の出方が、全部で何通りあるかを数えます。

【なぜそうなるのか】
4の倍数になるのは、「4をふくむ」「2の倍数どうし」のどちらかのときです。2つのさいころは区別するので、出方は全部で 6×6＝36通りです。

【ステップ1】a＝1：b＝4 の1通り。a＝2：b＝2、4、6 の3通り。a＝3：b＝4 の1通り。
【ステップ2】a＝4：b は1〜6のすべてで6通り。a＝5：b＝4 の1通り。a＝6：b＝2、4、6 の3通り。
【ステップ3】合計 1＋3＋1＋6＋1＋3＝15通り。
【ステップ4】確率は 15/36＝5/12。

【答え】5/12

【確かめ】余りで見る別解：2の倍数（2、4、6）どうしの積は必ず4の倍数で 3×3＝9通り。残りは 4 と奇数の組 (4,1)(4,3)(4,5)(1,4)(3,4)(5,4) の6通りで、合計15通り。一致します。

【よくあるまちがい】(2,6) を (6,2) と同じ1通りと数えてしまう。大小のさいころは区別するので別々に数えます。`,
    pitfall: '4の倍数の積は、「4が入る」か「2の倍数どうし」。',
    memoryTip: '確率は「条件に合う数÷全部」。分数は約分を忘れない。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_08',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '0、1、2、3、4、5 の6枚のカードから3枚を選んで並べ、3けたの偶数をつくります。何通りできますか。',
    answer: '52通り',
    hint: '一の位が0のときと、2か4のときに分けて数える。百の位に0は置けない。',
    explanation: `【何を聞かれているか】
3けたの偶数の個数を数えます。

【なぜそうなるのか】
偶数は一の位が 0、2、4 のどれかです。ただし、百の位に0は置けません。一の位が0のときは、この制限を気にしなくてよいので、場合を分けると数えやすくなります。

【ステップ1】一の位が0：百の位は残り5枚から5通り、十の位は4通り。5×4＝20通り。
【ステップ2】一の位が2：百の位は0と2をのぞく4通り、十の位は4通り。4×4＝16通り。
【ステップ3】一の位が4も同じで16通り。
【ステップ4】合計 20＋16＋16＝52通り。

【答え】52通り

【確かめ】3けたの整数は 5×5×4＝100通り。このうち奇数は、一の位が1、3、5の3通りで 3×(百の位4通り)×(十の位4通り)＝48通り。100−48＝52。一致します。

【よくあるまちがい】一の位が2や4のときも、百の位を5通りと数えてしまう。使ったカードと0をのぞくので4通りです。`,
    pitfall: '一の位を先に決めて、次に0の置けない百の位を決める。',
    memoryTip: '「0がある並べ方」は、0を置ける場所から場合を分ける。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_09',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '放物線 y＝½x² 上に、x座標が −2 の点 A と、x座標が 4 の点 B があります。原点を O とするとき、△OAB の面積を求めなさい。',
    answer: '12cm²',
    hint: 'まず直線ABの式を求めて、y軸との交点を見つける。その点とOを結ぶと三角形が2つに分かれる。',
    explanation: `【何を聞かれているか】
座標平面の上の三角形の面積を求めます。座標の1めもりは1cmとします。

【なぜそうなるのか】
三角形OABの辺はどれも軸に平行ではありません。そこで、直線ABとy軸の交点Cをとり、OCを底辺とする2つの三角形に分けます。OCがy軸上にあるので、高さが「点のx座標の大きさ」になります。

【ステップ1】A(−2, 2)、B(4, 8)。傾きは (8−2)÷(4−(−2))＝1。
【ステップ2】直線ABは y＝x＋b とおけて、Aを通るので 2＝−2＋b、b＝4。y＝x＋4 で、C(0, 4)。
【ステップ3】△OAC は、底辺OC＝4、高さ（Aのx座標の大きさ）2 なので ½×4×2＝4。
【ステップ4】△OCB は、底辺OC＝4、高さ4 なので ½×4×4＝8。
【ステップ5】合計 4＋8＝12。

【答え】12cm²

【確かめ】OCを底辺とみて、高さを 2＋4＝6 とすると ½×4×6＝12。2つに分けても分けなくても一致します。

【よくあるまちがい】Aのx座標が負なので、高さを −2 として 4−8 のように引き算してしまう。高さは長さなので正の数 2 にします。`,
    pitfall: 'y軸上の点Cで2つに分け、OCを共通の底辺にする。',
    memoryTip: '軸上に底辺をとれば、高さは座標の絶対値。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_10',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '放物線 y＝x² 上に、x座標が −1 の点 A と、x座標が 3 の点 B があります。原点を O とします。原点を通る直線 y＝mx が△OAB の面積を2等分するとき、m の値を求めなさい。',
    answer: '5',
    hint: '三角形の面積を2等分する直線は、頂点から向かいの辺の中点を通る。',
    explanation: `【何を聞かれているか】
原点Oを通って△OABの面積を半分に分ける直線の傾き m を求めます。

【なぜそうなるのか】
三角形の頂点から向かいの辺の中点に引いた線（中線）は、三角形を同じ面積の2つに分けます。分けられた2つの三角形は、底辺の長さが等しく（辺ABの半分ずつ）、高さが共通だからです。

【ステップ1】A(−1, 1)、B(3, 9)。
【ステップ2】Oの向かいの辺はAB。その中点Mは ((−1＋3)÷2, (1＋9)÷2)＝(1, 5)。
【ステップ3】直線OMは原点を通るので y＝mx に M(1, 5) を代入して 5＝m×1。
【ステップ4】m＝5。

【答え】5

【確かめ】y＝5x と直線ABとの交点がM。直線ABは y＝2x＋3 で、5x＝2x＋3 より x＝1。たしかに M(1, 5) です。△OAMと△OMBは底辺AM＝MBで高さが同じなので面積が等しくなります。

【よくあるまちがい】三角形の面積を2等分する線を、辺ABの中点ではなく、y軸との交点を通る線だと考えてしまう。向かいの辺の中点を通ることが条件です。`,
    pitfall: '面積を2等分するのは「頂点と向かいの辺の中点を結ぶ線」。',
    memoryTip: '中線は三角形を2等分。中点の座標は、座標の平均。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_11',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '関数 y＝ax²（a＞0）で、x の変域が −3≦x≦2 のとき、y の変域は 0≦y≦18 です。このとき、x が 2 から 5 まで増加するときの、この関数の変化の割合を求めなさい。',
    answer: '14',
    hint: 'y の最大値は、x の絶対値が大きいほうで決まる。変化の割合は a(p＋q) の形で求められる。',
    explanation: `【何を聞かれているか】
a の値を変域から決め、その関数の変化の割合を求めます。

【なぜそうなるのか】
a＞0 の放物線は、x＝0 で最小値0、原点から遠いほど大きな値になります。変域の中で原点から遠いのは x＝−3 のほうです。変化の割合は「y の増加量÷x の増加量」で、y＝ax² では a(p＋q) になります。

【ステップ1】最大値は x＝−3 のとき y＝a×(−3)²＝9a。これが18なので a＝2。
【ステップ2】y＝2x²。x＝2 のとき y＝8、x＝5 のとき y＝50。
【ステップ3】変化の割合は (50−8)÷(5−2)＝42÷3＝14。

【答え】14

【確かめ】公式 a(p＋q)＝2×(2＋5)＝14 と一致します。

【よくあるまちがい】最大値を x＝2 のときの 4a＝18 として a＝9/2 にしてしまう。変域の両はしのうち、原点から遠い x＝−3 で最大になります。`,
    pitfall: 'x＝−3 と x＝2 のうち、x² が大きいのはどちらか。',
    memoryTip: 'y＝ax² の変化の割合は a×(はじめ＋おわり)。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_12',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '長方形ABCDで、AB＝8cm、BC＝12cm です。点Pは B を出発して辺BC上を C まで毎秒2cmで、点Qは C を同時に出発して辺CD上を D まで毎秒1cmで動きます。△PCQ の面積が 8cm² になるのは、出発してから何秒後と何秒後ですか。',
    answer: '2秒後と4秒後',
    hint: 't 秒後の PC と CQ の長さを t で表して、面積の式をつくる。',
    explanation: `【何を聞かれているか】
△PCQの面積が8cm²になる時間を、2つとも求めます。

【なぜそうなるのか】
点が動いても、t 秒後には BP＝2t、CQ＝t と長さがわかります。PC は BC から BP を引いて 12−2t。△PCQ は C が直角なので、PC と CQ を2辺とする直角三角形です。

【ステップ1】t 秒後：BP＝2t、PC＝12−2t、CQ＝t。
【ステップ2】面積は ½×(12−2t)×t＝8 より (12−2t)t＝16。
【ステップ3】整理して t²−6t＋8＝0、(t−2)(t−4)＝0 で t＝2、4。
【ステップ4】Pは6秒でCに着く、Qは8秒でDに着くので、どちらの時間も動いている間です。

【答え】2秒後と4秒後

【確かめ】t＝2：PC＝8、CQ＝2 で ½×8×2＝8。t＝4：PC＝4、CQ＝4 で ½×4×4＝8。どちらも8cm²です。

【よくあるまちがい】t＝2 だけ見つけて終わる。面積は増えてから減るので、同じ面積が2回になります。`,
    pitfall: '面積が最大になるのは t＝3 のとき。その前後で同じ面積が2回ある。',
    memoryTip: '動点は「時間×速さ」で長さを t の式にする。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_13',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '放物線 y＝½x² 上に、x座標が −4 の点 A と、x座標が 2 の点 B があります。原点を O とし、四角形 OAPB が平行四辺形となるように点 P をとるとき、平行四辺形 OAPB の面積を求めなさい。',
    answer: '24cm²',
    hint: '平行四辺形は対角線で合同な2つの三角形に分かれる。△OAB の面積を求めて2倍する。',
    explanation: `【何を聞かれているか】
座標平面の上の平行四辺形の面積を求めます。座標の1めもりは1cmとします。

【なぜそうなるのか】
平行四辺形は、対角線OPではなく対角線ABで切ると、合同な2つの三角形OABとPABに分かれます。だから面積は△OABの2倍です。△OABは、直線ABとy軸の交点を使って面積を出せます。

【ステップ1】A(−4, 8)、B(2, 2)。直線ABの傾きは (2−8)÷(2−(−4))＝−1。
【ステップ2】直線ABは y＝−x＋b、B(2, 2) を通るので b＝4。y軸との交点を C(0, 4) とする。
【ステップ3】△OAB＝△OAC＋△OCB＝½×4×4＋½×4×2＝8＋4＝12。
【ステップ4】平行四辺形の面積は 12×2＝24。

【答え】24cm²

【確かめ】OからAへ進む分と、OからBへ進む分を合わせた点がPなので P(−4＋2, 8＋2)＝(−2, 10)。長方形（−4≦x≦2、0≦y≦8、面積48）から、まわりの3つの三角形 16、18、2 を引くと △OAB＝48−16−18−2＝12 で、2倍して24と一致します。

【よくあるまちがい】平行四辺形の面積を、△OABそのまま12cm²と答えてしまう。2つの三角形でできているので2倍です。`,
    pitfall: '対角線ABで2つの合同な三角形に分ける。',
    memoryTip: '平行四辺形の面積＝対角線で分けた三角形の2倍。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_14',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '放物線 y＝¼x² 上に、x座標が −2 の点 A と、x座標が 4 の点 B があります。x軸上に点 P をとって、AP＋PB の長さが最も短くなるようにするとき、その最短の長さを求めなさい。',
    answer: '√61',
    hint: 'x軸について A と対称な点 A′ をとると、AP＝A′P になる。',
    explanation: `【何を聞かれているか】
x軸上の点Pを動かしたとき、2つの線分の長さの和の最小値を求めます。座標の1めもりは1とします。

【なぜそうなるのか】
A と B は x軸の同じ側（上側）にあります。このままでは折れ線 A→P→B の形が決まりません。x軸について A を反対側に折り返した点 A′ をとると、AP＝A′P なので、AP＋PB＝A′P＋PB になり、A′と B を直線で結んだときが最短です。

【ステップ1】A(−2, 1)、B(4, 4)。x軸について A と対称な点は A′(−2, −1)。
【ステップ2】AP＋PB＝A′P＋PB。A′P＋PB は、A′、P、B が一直線のとき最小。
【ステップ3】A′B を斜辺とする直角三角形で、横は 4−(−2)＝6、縦は 4−(−1)＝5。
【ステップ4】A′B＝√(6²＋5²)＝√61。

【答え】√61

【確かめ】直線A′Bの傾きは5/6で、y＝0 になるのは x＝−2＋6×(1/5)＝−4/5。Pがこの位置のとき、AP＋PB＝√61 で、他の位置では長くなります。

【よくあるまちがい】折り返さずに A と B を直接結んで √(6²＋3²)＝√45 と答えてしまう。Pはx軸の上を動くので、折れ線 A→P→B の最短です。折り返して縦の差は 1＋4＝5 です。`,
    pitfall: '折り返した点と B の間の、縦の差は 1＋4。',
    memoryTip: '最短経路は、片方を折り返して一直線にする。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_15',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '直線 y＝−2x＋8 と x軸、y軸で囲まれた直角三角形の内部に、原点 O を1つの頂点とし、2辺が x軸と y軸の上にある正方形をかきます。この正方形のO以外の頂点のうち、O の向かいの頂点は直線上にあります。正方形の1辺の長さを求めなさい。',
    answer: '8/3',
    hint: 'Oの向かいの頂点の座標を (s, s) とおく。',
    explanation: `【何を聞かれているか】
三角形にぴったり入る正方形の1辺を求めます。座標の1めもりは1とします。

【なぜそうなるのか】
Oを頂点とし、2辺が軸の上にある正方形は、Oの向かいの頂点が (s, s) という座標になります。縦と横が同じ長さだからです。この点が直線の上にあるので、直線の式に代入できます。

【ステップ1】正方形の1辺を s とし、Oの向かいの頂点を (s, s) とする。
【ステップ2】この点が y＝−2x＋8 の上にあるので s＝−2s＋8。
【ステップ3】3s＝8、s＝8/3。
【ステップ4】直線は x軸と (4, 0) で交わる。s＝8/3＜4 なので、正方形は三角形の内部に入る。

【答え】8/3

【確かめ】(8/3, 8/3) を直線に代入すると −2×(8/3)＋8＝−16/3＋24/3＝8/3 で、y座標と一致します。

【よくあるまちがい】x軸との交点 4 や y軸との交点 8 を、正方形の1辺にしてしまう。1辺は、点 (s, s) が直線の上にあるという条件から決まります。`,
    pitfall: '正方形の向かいの頂点は、x座標とy座標が等しい。',
    memoryTip: 'y＝x の上の点 (s, s) と、直線の交点を求める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_16',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '家から駅まで1800mの道があります。兄は分速90mで歩いて家を出発しました。その10分後に、弟が自転車で分速240mで同じ道を追いかけました。弟が兄に追いつくのは、家から何mの地点ですか。',
    answer: '1440m',
    hint: '兄が家を出てからの時間を x 分として、兄と弟の進んだ道のりを式で表す。',
    explanation: `【何を聞かれているか】
弟が兄に追いつく地点の、家からの道のりを求めます。

【なぜそうなるのか】
兄は x 分間歩くので 90x m、弟は10分おくれて出発するので (x−10) 分間走って 240(x−10) m 進みます。追いつくとは、2人の家からの道のりが同じになることです。

【ステップ1】兄の道のりは 90x、弟の道のりは 240(x−10)。
【ステップ2】追いつくとき 90x＝240(x−10)。右辺を展開して 90x＝240x−2400。
【ステップ3】2400＝150x より x＝16。兄が出発して16分後。
【ステップ4】道のりは 90×16＝1440m。駅まで1800mなので、駅に着く前に追いつく。

【答え】1440m

【確かめ】弟は (16−10)＝6分走るので 240×6＝1440m。兄の道のりと一致します。

【よくあるまちがい】兄の進んだ時間を弟の走った時間と取りちがえて 90×6 などとしてしまう。兄は x 分、弟は x−10 分です。`,
    pitfall: '弟が走った時間は、兄の時間から10分引いた時間。',
    memoryTip: '追いつく問題は「同じ道のりで式をつくる」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_17',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '円周上に A、B、C、D がこの順に並んでいて、線分 AC は円の直径です。∠CAD＝27° のとき、∠ABD の大きさを求めなさい。',
    answer: '63°',
    hint: '直径に対する円周角は何度か。同じ弧に対する円周角は等しい。',
    explanation: `【何を聞かれているか】
円周角の性質を使って、角度を求めます。

【なぜそうなるのか】
直径に対する円周角は90°です。また、同じ弧に対する円周角はどこにあっても等しくなります。∠ABD と ∠ACD は、どちらも弧ADに対する円周角で、B と C は弦ADの同じ側にあります。

【ステップ1】ACは直径なので、∠ADC＝90°。
【ステップ2】△ACDの内角の和より ∠ACD＝180°−90°−27°＝63°。
【ステップ3】∠ABD と ∠ACD は弧ADに対する円周角で、等しい。
【ステップ4】∠ABD＝63°。

【答え】63°

【確かめ】弧ADの中心角は 63°×2＝126°。一方、∠ABD も同じ弧の円周角で、中心角の半分の63°です。

【よくあるまちがい】∠CAD の27°をそのまま答えにしてしまう。27°は弧CDに対する円周角で、求めたいのは弧ADに対する円周角です。`,
    pitfall: '直径に対する円周角は90°。同じ弧の円周角は等しい。',
    memoryTip: '円周角は「どの弧に対する角か」を最初に決める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_18',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '△ABC の辺AB上に点D、辺AC上に点Eをとり、DE∥BC とします。AD：DB＝3：2 で、四角形DBCEの面積が 48cm² のとき、△ADE の面積を求めなさい。',
    answer: '27cm²',
    hint: '△ADE と △ABC は相似。相似比から面積比を出す。',
    explanation: `【何を聞かれているか】
平行線でできた小さい三角形の面積を求めます。

【なぜそうなるのか】
DE∥BC のとき、△ADE と △ABC は相似です。相似比が a：b のとき、面積比は a を2回かけた数と b を2回かけた数の比になります。台形の面積は、大きい三角形から小さい三角形を引いた残りです。

【ステップ1】AD：AB＝3：(3＋2)＝3：5。相似比は3：5。
【ステップ2】面積比は 3×3：5×5＝9：25。△ADE＝9、△ABC＝25 とみなす。
【ステップ3】四角形DBCE＝25−9＝16 にあたる。
【ステップ4】16 が 48cm² なので、1 は 3cm²。△ADE＝9×3＝27cm²。

【答え】27cm²

【確かめ】△ABC＝25×3＝75cm²。75−27＝48cm² で、四角形DBCEの面積と一致します。

【よくあるまちがい】相似比の3：5をそのまま面積比として使い、△ADE＝48×3/2＝72 のように計算する。面積比は相似比を2回かけます。`,
    pitfall: '相似比3：5 のとき、面積比は 9：25。',
    memoryTip: '面積比は相似比の2回かけ（2乗）。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_19',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '3辺の長さが 9cm、12cm、15cm の直角三角形に内接する円（3つの辺すべてに接する円）の半径を求めなさい。',
    answer: '3cm',
    hint: '三角形の面積を、内接円の中心から3辺を見て、3つの三角形に分けて表す。',
    explanation: `【何を聞かれているか】
直角三角形の中にぴったり入る円の半径を求めます。

【なぜそうなるのか】
内接円の中心と3つの頂点を結ぶと、三角形が3つに分かれます。どの三角形も、高さが円の半径 r になります。だから、全体の面積は「周の長さ×r÷2」と表せます。

【ステップ1】9²＋12²＝225＝15² なので、15cmの辺が斜辺の直角三角形。面積は 9×12÷2＝54cm²。
【ステップ2】3辺の和は 9＋12＋15＝36cm。
【ステップ3】面積＝周×r÷2 なので 54＝36×r÷2＝18r。
【ステップ4】r＝54÷18＝3。

【答え】3cm

【確かめ】直角三角形では r＝(直角をはさむ2辺の和−斜辺)÷2＝(9＋12−15)÷2＝3。別の方法でも一致します。

【よくあるまちがい】内接円の半径を、短い辺9の半分 4.5 などとしてしまう。半径は、面積から出すのが確実です。`,
    pitfall: '3つに分けた三角形は、高さがすべて r。',
    memoryTip: '内接円の半径 r＝面積×2÷周の長さ。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_20',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '底面が1辺8cmの正方形で、側面の辺（頂点から底面の頂点までの辺）がすべて9cmの正四角錐の体積を求めなさい。',
    answer: '448/3cm³',
    hint: '頂点から底面に垂線をおろす。足は底面の正方形の中心。三平方の定理を使う。',
    explanation: `【何を聞かれているか】
正四角錐の体積を求めます。体積には高さが必要です。

【なぜそうなるのか】
角錐の体積は「底面積×高さ÷3」です。高さは、頂点から底面におろした垂線の長さで、その足は正方形の対角線の交点にあたります。側面の辺と、底面の対角線の半分と高さで、直角三角形ができます。

【ステップ1】底面の対角線は 8√2cm、その半分は 4√2cm。
【ステップ2】高さ h は h²＝9²−(4√2)²＝81−32＝49 で h＝7cm。
【ステップ3】底面積は 8×8＝64cm²。
【ステップ4】体積は 64×7÷3＝448/3cm³。

【答え】448/3cm³

【確かめ】4√2 を2乗すると 32、81−32＝49 で 7²。きれいに高さが整数になるのは、問題がきちんと成り立っている目安です。

【よくあるまちがい】底面の対角線 8√2 を、そのまま三平方に使って 81−128 になり、負の数になってしまう。使うのは対角線の半分です。`,
    pitfall: '高さと「対角線の半分」と側面の辺で、直角三角形ができる。',
    memoryTip: '角錐の体積＝底面積×高さ÷3。高さは三平方で求める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_21',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '底面の半径が4cm、母線（頂点から底面の円周までの長さ）が10cmの円錐があります。この円錐の表面積を求めなさい。',
    answer: '56πcm²',
    hint: '側面の展開図はおうぎ形。弧の長さは底面の円周と等しい。',
    explanation: `【何を聞かれているか】
円錐の表面積（側面積＋底面積）を求めます。

【なぜそうなるのか】
円錐の側面を開くと、半径が母線10cmのおうぎ形になります。このおうぎ形の弧の長さは、底面の円周と等しくなります。おうぎ形の面積は「½×弧の長さ×半径」で出せます。

【ステップ1】底面の円周は 2π×4＝8π。これがおうぎ形の弧の長さ。
【ステップ2】側面積（おうぎ形）＝½×8π×10＝40π。
【ステップ3】底面積は π×4²＝16π。
【ステップ4】表面積は 40π＋16π＝56π。

【答え】56πcm²

【確かめ】側面積は 円周率×半径×母線＝π×4×10＝40π でも出ます。同じ値です。

【よくあるまちがい】側面積を π×10²×(おうぎ形の割合) のように回りくどく計算して、割合 4/10 の計算でミスをする。弧の長さを使うと簡単です。`,
    pitfall: '側面積＝π×底面の半径×母線。',
    memoryTip: '円錐の側面積＝π×r×母線。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_22',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '直角をはさむ2辺の長さが 3cm、4cm の直角三角形を、斜辺を軸として1回転させてできる立体の体積を求めなさい。',
    answer: '48/5πcm³',
    hint: '回転体は、斜辺を共通の底面の中心線とする、2つの円錐を底面で合わせた形。',
    explanation: `【何を聞かれているか】
直角三角形を斜辺のまわりに回してできる立体の体積を求めます。

【なぜそうなるのか】
斜辺を軸にして回すと、直角の頂点が円を描きます。この円を底面とする2つの円錐が、底面を合わせた形になります。底面の半径は、直角の頂点から斜辺までの距離（斜辺を底辺としたときの高さ）です。

【ステップ1】斜辺は √(3²＋4²)＝5cm。
【ステップ2】面積は 3×4÷2＝6cm²。斜辺5を底辺とみると、高さは 6×2÷5＝12/5cm。これが底面の半径 r。
【ステップ3】2つの円錐の高さの合計は斜辺と同じ5cm。
【ステップ4】体積＝π×r²×(高さの合計)÷3＝π×(144/25)×5÷3＝48/5π。

【答え】48/5πcm³

【確かめ】r＝12/5＝2.4。πr²＝5.76π、×5÷3＝9.6π＝48/5π。

【よくあるまちがい】3cmの辺や4cmの辺を軸にした円錐と取りちがえる。軸は斜辺なので、半径は斜辺から直角の頂点までの距離です。`,
    pitfall: '2つの円錐は底面が同じ。高さの合計＝斜辺。',
    memoryTip: '斜辺を軸にする回転体は「底面を合わせた2つの円錐」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_23',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '中心が O で半径が r の円があります。円の外の点 P から円に引いた2本の接線の接点を A、B とします。PA＝12cm、OP＝13cm のとき、線分 AB の長さを求めなさい。',
    answer: '120/13cm',
    hint: '接線と半径は垂直。OA を求め、AB と OP の交点 H に注目する。',
    explanation: `【何を聞かれているか】
接点を結ぶ弦ABの長さを求めます。

【なぜそうなるのか】
円の接線は、接点を通る半径と垂直です。だから △OAP は A が直角の直角三角形になります。また、PA＝PB、OA＝OB なので、ABはOPと垂直に交わり、OPで2等分されます。

【ステップ1】△OAPで OA²＝OP²−PA²＝169−144＝25、OA＝5cm。
【ステップ2】ABとOPの交点をHとすると、△OAP∽△AHP（直角と共通の角）。
【ステップ3】対応する辺の比より AH：OA＝PA：OP なので AH＝5×12÷13＝60/13。
【ステップ4】AB＝2×AH＝120/13cm。

【答え】120/13cm

【確かめ】△OAPの面積を2通りで表す。5×12÷2＝30 と、OP×AH÷2＝13×(60/13)÷2＝30。一致します。

【よくあるまちがい】接線PAを半径と取りちがえて、OA＝12 として計算してしまう。半径は直角のとなりの短い辺の5です。`,
    pitfall: 'OAとPAは直角。OPを底辺にした高さがAH。',
    memoryTip: '直角三角形の面積は、2通りの底辺と高さで表せる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_24',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '円の2つの弦 AB、CD が円の内部の点 P で交わっています。PA＝6cm、PB＝4cm、PC＝3cm のとき、PD の長さを求めなさい。',
    answer: '8cm',
    hint: 'A と C、B と D を結んで、2つの相似な三角形をみつける。',
    explanation: `【何を聞かれているか】
交わる2つの弦の、一部の長さから残りの長さを求めます。

【なぜそうなるのか】
補助線ACとBDを引くと、△PAC と △PDB ができます。円周角は同じ弧に対して等しいので、∠PAC＝∠PDB、∠PCA＝∠PBD。2つの角が等しいので相似です。

【ステップ1】△PAC∽△PDB（対応は P↔P、A↔D、C↔B）。
【ステップ2】対応する辺の比は PA：PD＝PC：PB。
【ステップ3】6：PD＝3：4 より PD＝6×4÷3＝8。
【ステップ4】積で書くと PA×PB＝PC×PD で 24＝3×PD。

【答え】8cm

【確かめ】6×4＝24、3×8＝24。弦の「2つの部分の積」が等しくなります。

【よくあるまちがい】対応する辺を取りちがえて PA：PC＝PB：PD と立て、PD＝2 などとしてしまう。向かい合う辺（PAとPD、PCとPB）が対応します。`,
    pitfall: '△PAC と △PDB は相似。向かい合う辺が対応。',
    memoryTip: '交わる弦は「6×4＝3×PD」のように、2つの部分の積が等しい。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_25',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '△ABC で AB＝8cm、AC＝12cm、BC＝15cm です。∠A の二等分線が辺BC と交わる点を D とします。△ABC の面積が 75cm² のとき、△ABD の面積を求めなさい。',
    answer: '30cm²',
    hint: '角の二等分線は、向かいの辺を、はさむ2辺の比に分ける。',
    explanation: `【何を聞かれているか】
△ABDの面積を求めます。

【なぜそうなるのか】
△ABD と △ADC は、頂点Aが同じで、底辺BD、DC が同じ直線BC上にあります。高さが共通なので、面積の比は底辺の比 BD：DC と等しくなります。角の二等分線は、BD：DC を AB：AC に等しくします。

【ステップ1】角の二等分線の性質で BD：DC＝AB：AC＝8：12＝2：3。
【ステップ2】△ABD：△ADC＝BD：DC＝2：3（高さが共通）。
【ステップ3】△ABD は △ABC の 2/(2＋3)＝2/5。
【ステップ4】75×2/5＝30cm²。

【答え】30cm²

【確かめ】BD＝15×2/5＝6cm、DC＝9cm。高さ h として ½×15×h＝75 より h＝10。△ABD＝½×6×10＝30。一致します。

【よくあるまちがい】二等分線と中線を取りちがえて、△ABD＝△ABC の半分 37.5 としてしまう。二等分線は辺BCを2：3に分けます。`,
    pitfall: '角の二等分線は、向かいの辺を AB：AC に分ける。',
    memoryTip: '高さが共通の三角形の面積比＝底辺の比。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_26',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '四角形ABCDの対角線 AC と BD は垂直で、AC＝10cm、BD＝14cm です。辺 AB、BC、CD、DA の中点を順に E、F、G、H とするとき、四角形EFGHの面積を求めなさい。',
    answer: '35cm²',
    hint: '中点を結んだ線は、対角線に平行で、長さが半分。EFGH はどんな四角形になるか。',
    explanation: `【何を聞かれているか】
4つの辺の中点を結んでできる四角形の面積を求めます。

【なぜそうなるのか】
△ABCで、E、Fはそれぞれ AB、BC の中点なので、中点連結定理より EF∥AC で EF＝AC の半分です。△ACDでも HG∥AC、HG＝AC の半分。同じようにEH、FGはBDに平行で、BDの半分です。ACとBDが垂直なので、EFGHの角はすべて直角になります。

【ステップ1】EF＝HG＝10÷2＝5cm（ACに平行）。EH＝FG＝14÷2＝7cm（BDに平行）。
【ステップ2】EF∥AC、EH∥BD で AC⊥BD なので EF⊥EH。EFGHは長方形。
【ステップ3】面積は 5×7＝35cm²。

【答え】35cm²

【確かめ】一般に、中点を結んだ四角形の面積は、もとの四角形の半分。ABCD＝10×14÷2＝70cm² なので半分の 35cm²。一致します。

【よくあるまちがい】EFGHの辺をACやBDそのままの長さ10、14と考えて 140 などとする。中点連結定理で半分の長さになります。`,
    pitfall: '中点を結ぶと、対角線に平行な辺ができる。',
    memoryTip: '中点を結んだ四角形は、もとの面積の半分。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_27',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '1辺の長さが4cmの正六角形の面積を求めなさい。',
    answer: '24√3cm²',
    hint: '正六角形は、中心と各頂点を結ぶと、合同な正三角形が6個できる。',
    explanation: `【何を聞かれているか】
正六角形の面積を求めます。

【なぜそうなるのか】
正六角形の中心と6つの頂点を結ぶと、6つの三角形ができます。どの三角形も、2辺が中心から頂点までの距離（等しい）で、中心の角が 360°÷6＝60° なので正三角形になります。

【ステップ1】6つの正三角形の1辺は、どれも4cm。
【ステップ2】正三角形を半分に切った直角三角形は、辺の比が 1：2：√3。高さは 4×√3/2＝2√3cm。
【ステップ3】正三角形1個の面積は 4×2√3÷2＝4√3cm²。
【ステップ4】6個で 4√3×6＝24√3cm²。

【答え】24√3cm²

【確かめ】正六角形の面積＝正三角形1個の面積の6倍。公式 (√3/4)×4²×6＝4√3×6＝24√3。一致します。

【よくあるまちがい】正六角形を正三角形4個と数えてしまう。正三角形は6個にわけられます。`,
    pitfall: '正六角形＝正三角形6個。高さは 辺×√3/2。',
    memoryTip: '正三角形の高さ＝1辺×√3÷2。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_28',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '平行四辺形ABCDの対角線 AC、BD の交点を O とします。△ABO と △CDO が合同であることを、AO＝CO、BO＝DO と「2組の辺とその間の角がそれぞれ等しい」を使って証明するとき、間の角として使う角の組を、次から選びなさい。',
    answer: '∠AOB と ∠COD',
    choices: ['∠AOB と ∠COD', '∠OAB と ∠OCD', '∠OBA と ∠ODC', '∠ABO と ∠CDO'],
    hint: '合同な辺の組 AO と CO、BO と DO を、それぞれはさんでいる角を探す。',
    explanation: `【何を聞かれているか】
2辺とその間の角で合同を言うとき、「間の角」がどれになるかを答えます。

【なぜそうなるのか】
「間の角」は、等しい2辺にはさまれた角のことです。AOとBOをはさむ角は、点Oにできる ∠AOB、COとDOをはさむ角は ∠COD です。この2つは対頂角なので等しくなります。

【ステップ1】平行四辺形の対角線は互いの中点で交わるので AO＝CO、BO＝DO。
【ステップ2】AOとBOがはさむ角は ∠AOB、COとDOがはさむ角は ∠COD。
【ステップ3】対頂角は等しいので ∠AOB＝∠COD。
【ステップ4】2組の辺とその間の角がそれぞれ等しいので △ABO≡△CDO。

【答え】∠AOB と ∠COD

【確かめ】∠OAB と ∠OCD も平行線の錯角で等しくなりますが、AOとABにはさまれた角で、AO、BOにはさまれた角ではないので、この合同条件では使えません。

【よくあるまちがい】平行線の錯角を使って ∠OAB＝∠OCD を選んでしまう。等しくても、等しい2辺（AOとBO）にはさまれた角でなければ、「間の角」とは言えません。`,
    pitfall: '「間の角」は、等しい2辺にはさまれた角。',
    memoryTip: '2辺とその間の角（SAS）は、辺・角・辺の順に並べて確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_29',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '連続する3つの自然数の2乗の和が365になりました。この3つの自然数のうち、最も大きい数を求めなさい。',
    answer: '12',
    hint: '真ん中の数を n とおくと、3つの数は n−1、n、n＋1。',
    explanation: `【何を聞かれているか】
連続する3つの自然数を求めます。

【なぜそうなるのか】
連続する3つの数は、真ん中を n とすれば n−1、n、n＋1 と書けます。2乗して足すと、n−1 と n＋1 の1次の項が打ち消し合って、式がかんたんになります。

【ステップ1】(n−1)²＋n²＋(n＋1)²＝3n²＋2＝365。
【ステップ2】3n²＝363、n²＝121。
【ステップ3】n は自然数なので n＝11。3つの数は 10、11、12。
【ステップ4】最も大きい数は12。

【答え】12

【確かめ】10²＋11²＋12²＝100＋121＋144＝365。

【よくあるまちがい】n²＝121 から n＝±11 のうち、−11 も答えにしてしまう。自然数なので正の数だけです。`,
    pitfall: '真ん中を n にすると式がかんたん。',
    memoryTip: '連続する整数は、真ん中を文字にする。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_30',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '碁石を、はばが2個の中空の正方形（外側の2周ぶん）の形に並べます。1辺に n 個ずつ並べると、必要な碁石は全部で何個ですか。全部で112個になるときの n を求めなさい。（n は5以上）',
    answer: '16',
    hint: '外側の n×n の正方形から、内側の空洞の正方形を引く。空洞の1辺は n−4 個。',
    explanation: `【何を聞かれているか】
はばが2個の中空の正方形で、112個になるときの1辺の個数を求めます。

【なぜそうなるのか】
外側の正方形に並べるマスの数は n×n です。はばが2個なので、左右の両側を2個ずつ、あわせて4個ぶんを引くと、中の空洞の1辺は n−4 個です。碁石の数は「外側−空洞」で出せます。

【ステップ1】外側は n²個、空洞は (n−4)²個。碁石の数は n²−(n−4)²。
【ステップ2】展開して n²−(n²−8n＋16)＝8n−16。
【ステップ3】8n−16＝112 より 8n＝128、n＝16。
【ステップ4】n≧5 を満たす。

【答え】16

【確かめ】n＝16：外側16×16＝256、空洞12×12＝144、256−144＝112。

【よくあるまちがい】空洞の1辺を n−2 としてしまう。はばが2個なので、左右で2個ずつ引き、n−4 です。`,
    pitfall: '空洞の1辺は、n から 2×2 を引く。',
    memoryTip: '図形の個数は「外側−内側」で数える。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_31',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '1、3、6、10、15、… と、1から順に整数を足した数が並んでいます（第n項は 1＋2＋…＋n）。465 は何番目の数ですか。',
    answer: '30番目',
    hint: '1から n までの和は n(n＋1)÷2。これが465になる n を求める。',
    explanation: `【何を聞かれているか】
465がこの並びの何番目かを求めます。

【なぜそうなるのか】
1から n までの和は、同じ数を逆に並べて足すと (n＋1) が n 個になるので、2倍すると n(n＋1) になります。だから和は n(n＋1)÷2 です。

【ステップ1】n(n＋1)÷2＝465 より n(n＋1)＝930。
【ステップ2】整理して n²＋n−930＝0。(n−30)(n＋31)＝0。
【ステップ3】n は自然数なので n＝30。

【答え】30番目

【確かめ】30×31÷2＝465。

【よくあるまちがい】n＝−31 も答えにする。何番目なので自然数です。`,
    pitfall: '30×31＝930 を見つける。',
    memoryTip: '1からnまでの和＝n(n＋1)÷2。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_32',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '袋の中に、赤玉3個、白玉2個、青玉1個が入っています。同時に3個の玉を取り出すとき、3色がすべてそろう確率を求めなさい。',
    answer: '3/10',
    hint: '6個から3個を選ぶ組み合わせの数を、まず求める。',
    explanation: `【何を聞かれているか】
3色がすべてそろう確率を求めます。

【なぜそうなるのか】
玉は、同じ色でも1個ずつ区別して数えます。3個を選ぶ組は、「6個から3個を取る」ので、順番を決めて 6×5×4 通りとし、同じ組を何通りも数えていることを、3×2×1 でわって直します。

【ステップ1】6個から3個を選ぶ組は 6×5×4÷(3×2×1)＝20通り。
【ステップ2】3色そろうのは、赤3個から1個（3通り）、白2個から1個（2通り）、青1個（1通り）。3×2×1＝6通り。
【ステップ3】確率は 6/20＝3/10。

【答え】3/10

【確かめ】3色そろわない組を数える。青を取らない組は、5個から3個で10通り。青を取る組のうち、赤2個か白2個がいっしょの組は 3＋1＝4通り。合計14通りなので、20−14＝6通りで一致します。

【よくあるまちがい】順番を区別して 6×5×4＝120 を分母にして、分子を 3×2×1＝6 としてしまう。分母と分子で数え方（順番を区別するか）をそろえます。`,
    pitfall: '「選ぶ組」と「並べる順番」を区別する。',
    memoryTip: '同じ色の玉も、1個ずつ区別して数える。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_33',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '100円、50円、10円、5円、1円の5枚の硬貨を同時に投げ、表が出た硬貨の金額の合計を考えます。合計が150円以上になる確率を求めなさい。',
    answer: '1/4',
    hint: '合計が150円以上になるには、100円と50円がどうなっていないといけないか考える。',
    explanation: `【何を聞かれているか】
5枚の硬貨を投げたとき、合計が150円以上になる確率を求めます。

【なぜそうなるのか】
残りの10円、5円、1円がすべて表でも 16円にしかなりません。100円か50円のどちらかが裏だと、合計は 100＋16＝116円までです。150円以上になるには、100円と50円がともに表でなければなりません。

【ステップ1】5枚の表裏の出方は 2×2×2×2×2＝32通り。
【ステップ2】100円と50円がともに表になる出方は、残り3枚の表裏が自由なので 2×2×2＝8通り。
【ステップ3】確率は 8/32＝1/4。

【答え】1/4

【確かめ】100円と50円が表になる確率は 1/2×1/2＝1/4。残りの硬貨は何でもよいので、そのまま1/4です。

【よくあるまちがい】100円だけが表のとき、合計が足りるかどうかを確かめない。100＋50＋10＋5＋1＝166 から数え直すとまちがいにくい。`,
    pitfall: '残りの3枚の最大は 10＋5＋1＝16円。',
    memoryTip: '「かならず必要な条件」を見つけると、場合の数が減る。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_34',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '30人のテストの結果を、階級のはばを10点にした度数分布表にまとめました。0点以上10点未満が4人、10点以上20点未満が9人、20点以上30点未満が12人、30点以上40点未満が5人でした。階級値を使って求めた平均値を答えなさい。',
    answer: '21点',
    hint: '階級値は、階級の真ん中の値。度数をかけて足してから、人数でわる。',
    explanation: `【何を聞かれているか】
度数分布表から平均値を求めます。

【なぜそうなるのか】
度数分布表では、1人1人の点数はわかりません。そこで、その階級の人は全員が真ん中の値（階級値）だったと考えて平均値を求めます。

【ステップ1】階級値は 5、15、25、35。
【ステップ2】階級値×度数は 5×4＝20、15×9＝135、25×12＝300、35×5＝175。
【ステップ3】合計は 20＋135＋300＋175＝630。
【ステップ4】平均値は 630÷30＝21点。

【答え】21点

【確かめ】度数の合計は 4＋9＋12＋5＝30人で、問題の30人と一致します。

【よくあるまちがい】階級の端の値（10、20、30、40）を使ってしまう。真ん中の値の階級値を使います。`,
    pitfall: '階級値＝(階級の下の端＋上の端)÷2。',
    memoryTip: '度数分布表の平均＝(階級値×度数の合計)÷人数。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_35',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '箱の中に白い碁石がたくさん入っています。同じ大きさの黒い碁石を200個加えてよくまぜ、その中から50個を取り出すと、黒い碁石が8個ふくまれていました。はじめに箱に入っていた白い碁石は、およそ何個と考えられますか。',
    answer: '1050個',
    hint: '取り出した50個の中の黒の割合が、箱全体の黒の割合に近いと考える（標本調査）。',
    explanation: `【何を聞かれているか】
標本の割合から、全体の個数を推定します。

【なぜそうなるのか】
全体をよくまぜて取り出した一部（標本）は、全体と同じ割合になっていると考えます。取り出した50個のうち黒が8個なので、全体でも黒の割合が 8/50 だと推定できます。

【ステップ1】全体の個数を N 個とすると 200：N＝8：50。
【ステップ2】N＝200×50÷8＝1250。これは白と黒の合計。
【ステップ3】白い碁石は 1250−200＝1050個。

【答え】約1050個

【確かめ】白は 1050個、黒は 200個で、全体は 1250個。黒の割合 200/1250＝0.16、標本の割合 8/50＝0.16 で一致します。

【よくあるまちがい】1250個を白の個数として答えてしまう。1250個は黒を加えたあとの全体なので、200を引きます。`,
    pitfall: '1250 は全体。そこから黒の200を引く。',
    memoryTip: '標本調査は、割合が同じだと考えて比例式で解く。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_36',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '縦12m、横20mの長方形の土地に、縦と横に同じはばの道を1本ずつ、土地の端から端までまっすぐに通します。道をのぞいた残りの面積が180m²のとき、道のはばは何mですか。',
    answer: '2m',
    hint: '道をはしによせて考えても、残りの面積は変わらない。',
    explanation: `【何を聞かれているか】
道のはばを求めます。

【なぜそうなるのか】
縦の道と横の道を、土地の2つのはしによせても、残りの土地の面積は変わりません。残りの土地は、縦が (12−x)m、横が (20−x)m の長方形になります。

【ステップ1】道のはばを x m とすると、残りは (20−x)(12−x)＝180。
【ステップ2】展開して x²−32x＋240＝180、x²−32x＋60＝0。
【ステップ3】(x−2)(x−30)＝0 より x＝2、30。
【ステップ4】土地の縦は12mなので、30は不適。x＝2。

【答え】2m

【確かめ】残りの土地は 18m×10m＝180m²。問題どおりです。

【よくあるまちがい】x＝30 も答えにしてしまう。はばが土地の縦の長さ12mより大きくなることはありません。`,
    pitfall: '道を、土地の左と下によせて考える。',
    memoryTip: '図形の中の道は、はしによせて残りの長方形で考える。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_37',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '連続する2つの正の奇数の積が143になります。この2つの奇数の和を求めなさい。',
    answer: '24',
    hint: '小さいほうの奇数を n とすると、大きいほうは n＋2。',
    explanation: `【何を聞かれているか】
2つの奇数を求めて、その和を答えます。

【なぜそうなるのか】
連続する奇数は、2ずつはなれています。小さいほうを n とおけば、大きいほうは n＋2。積が143なので、2次方程式が立ちます。

【ステップ1】n(n＋2)＝143。展開して n²＋2n−143＝0。
【ステップ2】(n−11)(n＋13)＝0 より n＝11、−13。
【ステップ3】正の奇数なので n＝11。もう一方は 13。
【ステップ4】和は 11＋13＝24。

【答え】24

【確かめ】11×13＝143。和は 24。

【よくあるまちがい】n＋1 を使って 連続する整数の式にしてしまう。連続する奇数は 2ずつ増えます。`,
    pitfall: 'n(n＋2)＝143 という2次方程式を解く。',
    memoryTip: '連続する奇数は n、n＋2。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_38',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '√7 の整数部分を a、小数部分を b とします。b²＋4b の値を求めなさい。',
    answer: '3',
    hint: '小数部分 b＝√7−a。b＋a＝√7 を使って、式を√7で表す。',
    explanation: `【何を聞かれているか】
√7の小数部分の2次の式の値を求めます。

【なぜそうなるのか】
√7 は 2 より大きく 3 より小さいので、整数部分は 2、小数部分は √7−2 です。b＋2＝√7 なので、b²＋4b＝(b＋2)²−4 と書きかえると、√7 の2乗がそのまま使えます。

【ステップ1】4＜7＜9 より 2＜√7＜3。a＝2、b＝√7−2。
【ステップ2】b²＋4b＝(b²＋4b＋4)−4＝(b＋2)²−4。
【ステップ3】b＋2＝√7 なので (√7)²−4＝7−4＝3。

【答え】3

【確かめ】直接計算：b＝√7−2 を代入して b²＝11−4√7、4b＝4√7−8。足して 3 です。

【よくあるまちがい】b＝√7−2 を代入して、展開の途中で √7 の項を消し忘れる。(b＋2)² の形にすると計算がかんたんです。`,
    pitfall: 'b＋2＝√7 を使って、式を (b＋2)² で書く。',
    memoryTip: '無理数の小数部分は、整数部分を引いた値。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_39',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '半径6cmの円の中心を O とし、円周上に2点 A、B を、∠AOB＝90° となるようにとります。弦ABと弧ABで囲まれた部分（弓形）の面積を求めなさい。',
    answer: '(9π−18)cm²',
    hint: '弓形の面積は、おうぎ形OABから△OABを引く。',
    explanation: `【何を聞かれているか】
弓形の面積を求めます。

【なぜそうなるのか】
弓形は、おうぎ形OABの中から、半径OA、OBと弦ABでできる三角形OABを取り除いた残りです。おうぎ形は円の 90/360＝1/4 です。

【ステップ1】おうぎ形OABの面積＝π×6²×1/4＝9π。
【ステップ2】△OABは直角二等辺三角形で、直角をはさむ2辺が6cm。面積は 6×6÷2＝18。
【ステップ3】弓形＝9π−18。

【答え】(9π−18)cm²

【確かめ】9π＝28.26 なので、弓形はおよそ 28.26−18＝10.26cm²。おうぎ形のほうが三角形より大きいので、正の値です。

【よくあるまちがい】△OABの面積を、AB を底辺として計算しようとして途中で行きづまる。OAとOBを底辺と高さにするとかんたんです。`,
    pitfall: 'おうぎ形から、三角形を引く。',
    memoryTip: '弓形＝おうぎ形−三角形。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_sansu_40',
    subject: 'sansu',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '座標平面上に A(1, 2)、B(7, 10) があります。線分 AB を直径とする円の面積を求めなさい。',
    answer: '25πcm²',
    hint: 'AB の長さを、横の差と縦の差から三平方の定理で求める。',
    explanation: `【何を聞かれているか】
線分ABを直径とする円の面積を求めます。座標の1めもりは1cmとします。

【なぜそうなるのか】
円の面積には半径が必要です。直径はABの長さなので、まずABの長さを出します。座標のちがいを直角三角形の2辺とみて、三平方の定理を使います。

【ステップ1】横の差は 7−1＝6、縦の差は 10−2＝8。
【ステップ2】AB＝√(6²＋8²)＝√100＝10。
【ステップ3】半径は 10÷2＝5。
【ステップ4】面積は π×5²＝25π。

【答え】25πcm²

【確かめ】6、8、10 は 3、4、5 の2倍で、直角三角形の辺の比です。

【よくあるまちがい】半径にABの長さ10をそのまま使って 100π としてしまう。ABは直径です。`,
    pitfall: '6、8、10 は 3：4：5 の2倍。',
    memoryTip: '2点間の距離は、座標の差を2辺とする直角三角形で求める。',
    examFrequency: 'high',
  },
  // ─────────────── 英語（40問） ───────────────
  {
    id: 'honshiken_school_koko_shibumaku_eigo_01',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nThis is the book (   ) I have wanted to read for a long time.',
    answer: 'which',
    choices: ['who', 'which', 'whose', 'what'],
    hint: '先行詞は「本」。関係代名詞のあとに、主語の I と動詞の続きがある。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
the book という「もの」を説明するので、ものを先行詞にする関係代名詞が入ります。who は人、whose は「〜の」、what は先行詞をふくむ語なので使えません。

【ステップ1】先行詞は the book（もの）。
【ステップ2】関係代名詞のあとの I have wanted to read に、read の目的語がない。
【ステップ3】目的語になるもの用の関係代名詞は which。

【答え】which

【確かめ】which を入れると「これは、私が長い間読みたいと思ってきた本です」。read の目的語は which が受けています。

【よくあるまちがい】what を選んでしまう。what は先行詞（the book）を作らず、「〜するもの」を表すので、this is the book what ... とは言えません。`,
    pitfall: 'what の前に名詞は置けない。',
    memoryTip: '先行詞が「もの」なら which か that。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_02',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nHow long (   ) your brother been studying in Canada?',
    answer: 'has',
    choices: ['has', 'did', 'is', 'was'],
    hint: 'been studying という形に注目。「どのくらいの間〜しているか」を聞く文。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
「ずっと〜している」は、現在完了進行形（have/has been -ing）で表します。主語が your brother（3人称単数）なので has です。

【ステップ1】been studying は have/has been -ing の形の一部。
【ステップ2】your brother は3人称単数なので has。
【ステップ3】How long のあとに has を置いて、疑問文の語順にする。

【答え】has

【確かめ】How long has your brother been studying in Canada? 「あなたのお兄さんは、どのくらいの間カナダで勉強していますか」。

【よくあるまちがい】have を選んでしまう。主語が3人称単数なので has です。`,
    pitfall: 'did、was のあとに been は続かない。',
    memoryTip: 'has/have been -ing は「ずっと〜している」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_03',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nShe decided (   ) the offer after thinking about it for a week.',
    answer: 'to accept',
    choices: ['accepting', 'to accept', 'accepted', 'accept'],
    hint: 'decide は「〜することを決める」。そのあとにくる動詞の形は？',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
decide、hope、want、plan などの動詞は、あとに「to＋動詞の原形」（不定詞）を置きます。-ing（動名詞）は置きません。

【ステップ1】decide のあとは不定詞（to＋原形）。
【ステップ2】accepting は動名詞なのでまちがい。
【ステップ3】accepted は過去形なので、decided と並べられない。

【答え】to accept

【確かめ】She decided to accept the offer.「彼女はその申し出を受けることに決めた」。

【よくあるまちがい】enjoy や finish と同じ動名詞だと思って accepting を選んでしまう。decide は不定詞です。`,
    pitfall: '選択肢の accepting を選ぶ。',
    memoryTip: '「決める・望む・計画する」は to＋原形。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_04',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nDo you know (   ) the museum opens?',
    answer: 'what time',
    choices: ['what time does', 'what time', 'when does', 'when did'],
    hint: '「Do you know」のあとの語順は、ふつうの文と同じ（主語＋動詞）になる。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
疑問文が別の文の一部になると（間接疑問）、あとの語順は「疑問詞＋主語＋動詞」になり、does や did は使いません。

【ステップ1】Do you know のあとに、疑問詞が続く。
【ステップ2】the museum opens の部分は主語＋動詞の語順。
【ステップ3】does、did を入れた選択肢は、疑問文の語順なので不適。
【ステップ4】残るのは what time だけ。

【答え】what time

【確かめ】Do you know what time the museum opens?「その博物館が何時に開くか、知っていますか」。

【よくあるまちがい】what time does と、does を入れてしまう。間接疑問では does は不要です。`,
    pitfall: 'when does は語順が疑問文のまま。',
    memoryTip: '間接疑問の語順は「疑問詞＋主語＋動詞」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_05',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nThe boy (   ) under the tree is my cousin.',
    answer: 'sitting',
    choices: ['sit', 'sat', 'sitting', 'sits'],
    hint: 'The boy ... is my cousin の ... の部分は、どの動詞の形が名詞を後ろから説明するか。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
名詞を後ろから説明するとき、「〜している」の意味なら現在分詞（-ing）を使います。the boy sitting under the tree＝「木の下にすわっている少年」。

【ステップ1】文の動詞は is（my cousin のところ）なので、空所には動詞をもう1つ置けない。
【ステップ2】sits、sat は動詞なので置けない。
【ステップ3】sit は原形なので名詞を修飾できない。
【ステップ4】-ing 形の sitting が入り、the boy を説明する。

【答え】sitting

【確かめ】The boy sitting under the tree is my cousin.「木の下にすわっている少年は、私のいとこです」。

【よくあるまちがい】sits を選ぶ。主語にすでに動詞 is があるので、sits を入れると動詞が2つになってしまいます。`,
    pitfall: 'sat（過去分詞）を選んでしまう。',
    memoryTip: '名詞のうしろの -ing は「〜している」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_06',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nEnglish (   ) in many countries around the world.',
    answer: 'is spoken',
    choices: ['speaks', 'is spoken', 'is speaking', 'spoke'],
    hint: '主語は English（言語）。「話される」という意味にしたい。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
主語が「〜される側」のとき、受動態（be動詞＋過去分詞）を使います。English は話される側なので is spoken です。

【ステップ1】English は話す人ではなく、話される言語。
【ステップ2】受動態は be＋過去分詞で is spoken。
【ステップ3】speaks、spoke、is speaking は、主語が「話す」側の文で使う形。

【答え】is spoken

【確かめ】English is spoken in many countries around the world.「英語は世界の多くの国で話されている」。

【よくあるまちがい】speaks を選んでしまう。English は動作をする側ではないので受動態です。`,
    pitfall: 'is speaking を選ぶ。',
    memoryTip: '主語が「〜される」なら be＋過去分詞。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_07',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nThis is (   ) of all the movies I have seen this year.',
    answer: 'the most interesting',
    choices: ['the more interesting', 'the most interesting', 'more interesting', 'most interesting'],
    hint: 'of all the movies と、3つ以上の中で比べているか。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
3つ以上のものの中で「いちばん〜」と言うときは、最上級を使い、前に the をつけます。interesting は長い語なので most を前に置きます。

【ステップ1】of all the movies は「すべての映画の中で」。
【ステップ2】最上級は the most interesting。
【ステップ3】the more interesting は2つの比較に使う。
【ステップ4】前に the がない most interesting は、この位置では不自然。

【答え】the most interesting

【確かめ】This is the most interesting of all the movies I have seen this year.「これは、今年見たすべての映画の中でいちばんおもしろい」。

【よくあるまちがい】more interesting を選ぶ。比べる相手が1つならそれでよいが、ここは「すべての中で」です。`,
    pitfall: 'the を忘れる。',
    memoryTip: '最上級は the を忘れない。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_08',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nHe was (   ) tired to keep his eyes open.',
    answer: 'too',
    choices: ['so', 'very', 'too', 'much'],
    hint: '「〜すぎて…できない」を表す語。あとに to＋動詞がある。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
「too＋形容詞＋to＋動詞」は「〜すぎて…できない」という意味です。so や very は、あとに to 不定詞を続けて「〜すぎて…できない」とは言えません。

【ステップ1】tired to keep ... の形に注目。
【ステップ2】too tired to keep his eyes open＝「つかれすぎて目を開けていられない」。
【ステップ3】so tired that he could not ... の形なら so でもよいが、この文には that がない。

【答え】too

【確かめ】He was too tired to keep his eyes open.「彼はつかれすぎて、目を開けていられなかった」。

【よくあるまちがい】so を選ぶ。so のあとに to は続けません（so ... that の形になります）。`,
    pitfall: 'very tired to ... とする。',
    memoryTip: 'too ... to ＝「〜すぎて…できない」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_09',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nI\'m looking forward to (   ) you at the festival next week.',
    answer: 'seeing',
    choices: ['see', 'seeing', 'saw', 'be seen'],
    hint: 'look forward to の to は、不定詞の to ではない。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
look forward to の to は前置詞です。前置詞のあとには、名詞か動名詞（-ing）がきます。だから「あなたに会うのを楽しみにしている」は looking forward to seeing you です。

【ステップ1】look forward to ... は「〜を楽しみに待つ」。
【ステップ2】この to は前置詞。
【ステップ3】前置詞のあとの動詞は -ing 形。
【ステップ4】seeing が入る。

【答え】seeing

【確かめ】I'm looking forward to seeing you at the festival next week.「来週のお祭りであなたに会うのを楽しみにしています」。

【よくあるまちがい】to のあとなので原形の see を選んでしまう。この to は前置詞なので -ing です。`,
    pitfall: 'to の後ろが名詞か動名詞なら、to は前置詞。',
    memoryTip: 'look forward to ＋ -ing。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_10',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文の（　）に入る最も適切なものを選びなさい。\nThe (   ) of the new bridge will be finished next year.',
    answer: 'construction',
    choices: ['construction', 'instruction', 'production', 'destruction'],
    hint: '新しい橋について、来年終わるものは何か。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を、文法のきまりから決めます。

【なぜそうなるのか】
4つとも似た形ですが、意味がちがいます。construction は「建設」、instruction は「指示」、production は「生産」、destruction は「破壊」です。橋が来年「完成する」のは、建設です。

【ステップ1】橋が完成する、という文脈。
【ステップ2】construction（建設）が合う。
【ステップ3】instruction（指示）、production（生産）、destruction（破壊）は文脈に合わない。

【答え】construction

【確かめ】The construction of the new bridge will be finished next year.「新しい橋の建設は、来年終わる予定です」。

【よくあるまちがい】destruction（破壊）を選ぶ。完成する「新しい橋」なので、破壊ではありません。`,
    pitfall: '語尾が同じ -tion の語は、前半の語幹で意味を区別する。',
    memoryTip: 'construct（建てる）の名詞形は construction。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_11',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の日本文の意味になるように、（　）内の語を並べかえたとき、2番目と4番目にくる語の組を選びなさい。\n「彼女は私に、駅までの行き方を教えてくれた。」\nShe (told / me / how / to / get) to the station.',
    answer: 'me - to',
    choices: ['me - to', 'how - get', 'told - how', 'me - get'],
    hint: 'まず、全体の文の形（主語・動詞・目的語）を決めて、残りの語を入れていく。',
    explanation: `【何を聞かれているか】
語を並べかえて、日本文にあう英文をつくり、指定された位置の語を答えます。

【なぜそうなるのか】
「（人）に〜を教える」は tell＋人＋もの の順です。「行き方」は how to get（どうやって行くか）。

【ステップ1】動詞 told のあとに、「人」の me を置く。
【ステップ2】そのあとに「教える内容」の how to get をつなぐ。
【ステップ3】文は She told me how to get to the station. となる。
【ステップ4】括弧の中の語の順は 1 told、2 me、3 how、4 to、5 get。

【答え】me - to

【確かめ】2番目は me、4番目は to。選択肢は「me - to」。

【よくあるまちがい】how の位置をまちがえて told how me to get としてしまう。tell の直後に人を置きます。`,
    pitfall: '最初に並べかえた文をつくり、そのあとで指定の位置を数える。',
    memoryTip: '文の骨組みを先に決める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_12',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の日本文の意味になるように、（　）内の語を並べかえたとき、2番目と4番目にくる語の組を選びなさい。\n「その手紙は、私が思っていたより早く届いた。」\nThe letter (arrived / earlier / than / I / expected).',
    answer: 'earlier - I',
    choices: ['earlier - I', 'than - expected', 'arrived - than', 'earlier - expected'],
    hint: 'まず、全体の文の形（主語・動詞・目的語）を決めて、残りの語を入れていく。',
    explanation: `【何を聞かれているか】
語を並べかえて、日本文にあう英文をつくり、指定された位置の語を答えます。

【なぜそうなるのか】
「〜より早く」は earlier than。than のあとに「私が予想したよりも」の I expected を置きます。

【ステップ1】動詞 arrived を主語 The letter のすぐあとに置く。
【ステップ2】比べる語 earlier と than を並べる。
【ステップ3】than のあとに I expected を置く。
【ステップ4】括弧の中の語の順は 1 arrived、2 earlier、3 than、4 I、5 expected。

【答え】earlier - I

【確かめ】2番目は earlier、4番目は I。選択肢は「earlier - I」。

【よくあるまちがい】than I expected を expected I としてしまう。主語（I）が動詞（expected）の前です。`,
    pitfall: '最初に並べかえた文をつくり、そのあとで指定の位置を数える。',
    memoryTip: '文の骨組みを先に決める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_13',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の日本文の意味になるように、（　）内の語を並べかえたとき、2番目と4番目にくる語の組を選びなさい。\n「この町には、100年以上前に建てられた教会がある。」\nThere is a church (that / was / built / over) 100 years ago in this town.',
    answer: 'was - over',
    choices: ['was - over', 'that - built', 'built - over', 'that - was'],
    hint: 'まず、全体の文の形（主語・動詞・目的語）を決めて、残りの語を入れていく。',
    explanation: `【何を聞かれているか】
語を並べかえて、日本文にあう英文をつくり、指定された位置の語を答えます。

【なぜそうなるのか】
関係代名詞 that のあとに was built（建てられた）の受動態を続けます。over 100 years ago は「100年以上前」で、数字の前に over を置きます。

【ステップ1】church（先行詞）のあとに、関係代名詞 that を置く。
【ステップ2】そのあとに受動態 was built をつなぐ。
【ステップ3】over は数字の前に置く。
【ステップ4】括弧の中の語の順は 1 that、2 was、3 built、4 over。

【答え】was - over

【確かめ】2番目は was、4番目は over。選択肢は「was - over」。

【よくあるまちがい】built を that の前に置いてしまう。関係代名詞は先行詞のすぐあとです。`,
    pitfall: '最初に並べかえた文をつくり、そのあとで指定の位置を数える。',
    memoryTip: '文の骨組みを先に決める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_14',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の日本文の意味になるように、（　）内の語を並べかえたとき、2番目と4番目にくる語の組を選びなさい。\n「その知らせを聞いて、彼はとても喜んだ。」\nThe news (made / him / very / happy).',
    answer: 'him - happy',
    choices: ['him - happy', 'made - very', 'very - happy', 'made - him'],
    hint: 'まず、全体の文の形（主語・動詞・目的語）を決めて、残りの語を入れていく。',
    explanation: `【何を聞かれているか】
語を並べかえて、日本文にあう英文をつくり、指定された位置の語を答えます。

【なぜそうなるのか】
make＋人＋形容詞は「人を〜にする」。very は形容詞 happy の前に置くので、happy の直前です。

【ステップ1】主語 The news のあとに動詞 made。
【ステップ2】made のあとに「人」の him。
【ステップ3】最後は「形容詞」を very happy の順で置く。
【ステップ4】括弧の中の語の順は 1 made、2 him、3 very、4 happy。

【答え】him - happy

【確かめ】2番目は him、4番目は happy。選択肢は「him - happy」。

【よくあるまちがい】very を him の前に置いてしまう。very は形容詞を強める語で、形容詞の直前です。`,
    pitfall: '最初に並べかえた文をつくり、そのあとで指定の位置を数える。',
    memoryTip: '文の骨組みを先に決める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_15',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の日本文の意味になるように、（　）内の語を並べかえたとき、2番目と5番目にくる語の組を選びなさい。\n「私たちが昨日会った男の人は、有名な作家です。」\nThe man (we / met / yesterday / is / a / famous) writer.',
    answer: 'met - a',
    choices: ['met - a', 'we - famous', 'yesterday - is', 'met - famous'],
    hint: 'まず、全体の文の形（主語・動詞・目的語）を決めて、残りの語を入れていく。',
    explanation: `【何を聞かれているか】
語を並べかえて、日本文にあう英文をつくり、指定された位置の語を答えます。

【なぜそうなるのか】
関係代名詞が省略された形です。The man を we met yesterday が後ろから説明し、そのあとに文の動詞 is を置きます。

【ステップ1】The man のあとに、説明の部分 we met yesterday を置く。
【ステップ2】文全体の動詞 is を置く。
【ステップ3】is のあとに a famous writer の順で続ける。
【ステップ4】括弧の中の語の順は 1 we、2 met、3 yesterday、4 is、5 a、6 famous。

【答え】met - a

【確かめ】2番目は met、5番目は a。選択肢は「met - a」。

【よくあるまちがい】a famous を famous a としてしまう。冠詞 a は形容詞の前です。`,
    pitfall: '最初に並べかえた文をつくり、そのあとで指定の位置を数える。',
    memoryTip: '文の骨組みを先に決める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_16',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の日本文の意味になるように、（　）内の語を並べかえたとき、3番目と5番目にくる語の組を選びなさい。\n「ここから駅まで歩いてどのくらいかかりますか。」\nHow (it / take / does / long / to) walk from here to the station?',
    answer: 'it - to',
    choices: ['it - to', 'does - to', 'long - take', 'does - take'],
    hint: 'まず、全体の文の形（主語・動詞・目的語）を決めて、残りの語を入れていく。',
    explanation: `【何を聞かれているか】
語を並べかえて、日本文にあう英文をつくり、指定された位置の語を答えます。

【なぜそうなるのか】
「どのくらい（時間が）かかるか」は How long does it take to ... ? です。How long を先に置くので、括弧の最初は long。

【ステップ1】How のあとに long。
【ステップ2】疑問文なので、does it take の順。
【ステップ3】そのあとに to walk を続ける。
【ステップ4】括弧の中の語の順は 1 long、2 does、3 it、4 take、5 to。

【答え】it - to

【確かめ】3番目は it、5番目は to。選択肢は「it - to」。

【よくあるまちがい】does を it の前に置き忘れて long it does take とする。`,
    pitfall: '最初に並べかえた文をつくり、そのあとで指定の位置を数える。',
    memoryTip: '文の骨組みを先に決める。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_17',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の日本文を英語に直しなさい。\n私は毎朝、学校へ行く前に、犬を散歩に連れて行きます。',
    answer: 'I take my dog for a walk every morning before I go to school.',
    hint: '「散歩に連れて行く」は take ... for a walk。「〜する前に」は before のあとに主語＋動詞。',
    explanation: `【何を聞かれているか】
日本文を、文法的にまちがいのない1文の英語にします。

【なぜそうなるのか】
「犬を散歩に連れて行く」は take my dog for a walk という決まった言い方です。「毎朝」は every morning、「学校へ行く前に」は before I go to school と、before のあとに主語と動詞を置きます。

【ステップ1】主語は I、動詞は take（習慣なので現在形）。
【ステップ2】「私の犬を散歩に」は my dog for a walk。
【ステップ3】「毎朝」は every morning。
【ステップ4】「学校へ行く前に」は before I go to school。時を表す節では、未来のことでも現在形を使います。

【答え】I take my dog for a walk every morning before I go to school.

【確かめ】主語・動詞・時の副詞がそろっているか、before のあとが「主語＋動詞」になっているかを確かめます。

【よくあるまちがい】before going to school（動名詞）でも正解ですが、before to go とする、go to the school と the を入れる、という誤りがよくあります。`,
    pitfall: 'go to the school と the を入れてしまう。通学の「学校」は the をつけない。',
    memoryTip: '「散歩に連れて行く」は take ... for a walk。',
    isWritten: true,
    rubricPoints: ['主語と動詞が正しい（I take / I walk）', '「犬を散歩に連れて行く」を表している（take my dog for a walk）', '「毎朝」を表している（every morning）', '「学校へ行く前に」を before I go to school または before going to school で表している'],
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_18',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の質問に対する、あなたの考えを、英語で30語程度で書きなさい。\nDo you think students should use smartphones in class?',
    answer: 'I think students should not use smartphones in class. Smartphones are useful, but they make it hard to focus. Students may check messages or play games instead of listening. However, teachers can allow them for a short time when they are needed for study.',
    hint: '最初に自分の立場（賛成か反対か）をはっきり書き、そのあとに理由を2つ程度書く。',
    explanation: `【何を聞かれているか】
質問に対して、自分の立場と理由を、30語程度の英語で書きます。

【なぜそうなるのか】
自由英作文では、むずかしい表現より、文法がまちがっていない正確な文が評価されます。立場（I think ...）→理由（because ...）→例や補足、という順で書くと、まとまった文章になります。

【ステップ1】まず立場を1文で書く。例：I think students should not use smartphones in class.
【ステップ2】理由を1〜2文で書く。例：They make it hard to focus.
【ステップ3】例や補足を1文足す。例：Students may play games instead of listening.
【ステップ4】最後に、見直して、時制・主語と動詞の一致・つづりを確かめる。

【答え】模範解答（賛成でも反対でもかまいません。理由がはっきりしていれば正解です）。

【確かめ】自分の文を読み直して、主語と動詞がそろっているか、同じ語ばかりくり返していないかを確かめます。

【よくあるまちがい】アイデアを日本語で考えてから直訳し、英語にならない文（例：smartphone is dangerous for my brain）を作ってしまう。自分が正確に書ける英語に直してから書きます。`,
    pitfall: '立場だけ書いて、理由を書かない。',
    memoryTip: '立場→理由→例の3つ。',
    isWritten: true,
    rubricPoints: ['自分の立場（賛成か反対か）が1文ではっきり書けている', '理由が少なくとも1つ書けている', '文法・つづりのまちがいが少ない（主語と動詞の一致・時制）', '語数が20〜40語程度'],
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_19',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhy did some people complain about the "Quiet Hour" at first?',
    answer: 'They thought the library was already quiet enough.',
    choices: ['They thought the library was already quiet enough.', 'They did not like the librarian.', 'The library was closed on Saturdays.', 'They wanted to borrow more books.'],
    passage: P_1,
    hint: '最初の段落の、ある老人の言葉に注目。',
    explanation: `【何を聞かれているか】
文句を言った理由を、本文から探して選びます。

【なぜそうなるのか】
理由は、本文の中で人物の言葉として書かれていることが多いです。第1段落で老人は "A library is already quiet" と言っています。

【ステップ1】第1段落の complained を探す。
【ステップ2】直後の老人の言葉は "A library is already quiet. Why do we need a special time for it?"。
【ステップ3】これは「図書館はもともと静かなのに」という意味。

【答え】They thought the library was already quiet enough.

【確かめ】選択肢の中で、この内容に合うのは1番目だけ。

【よくあるまちがい】2番目のように、本文に書かれていない「司書が嫌い」を選んでしまう。`,
    pitfall: '本文にない理由を、想像で選ばない。',
    memoryTip: '理由は、人物の言葉から探す。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_20',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文を読んで、あとの問いに答えなさい。\nAccording to Ms. Ota, what is the purpose of the Quiet Hour?',
    answer: 'To give people who need silence a chance to think.',
    choices: ['To stop people from talking in the library.', 'To give people who need silence a chance to think.', 'To make the library close earlier.', 'To teach children how to read.'],
    passage: P_1,
    hint: '第2段落の最後の文に注目。',
    explanation: `【何を聞かれているか】
「静かな時間」のねらいを、司書の説明から選びます。

【なぜそうなるのか】
司書は、静かな時間を「話すのをやめさせるため」ではなく、「静けさが必要な人に選べる時間を与えるため」と説明しています。

【ステップ1】第2段落の最後の文を読む。
【ステップ2】"was not meant to stop people from talking, but to give a choice to those who needed silence"。
【ステップ3】not A but B（AではなくB）の形で、B が目的。

【答え】To give people who need silence a chance to think.

【確かめ】1番目は not の部分（A）、2番目は but の部分（B）。B が正しい。

【よくあるまちがい】1番目を選んでしまう。not A but B は「AではなくB」なので、正しいのは B です。`,
    pitfall: 'not ... but ... の A と B を取りちがえる。',
    memoryTip: 'not A but B は、B が言いたいこと。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_21',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文を読んで、あとの問いに答えなさい。\nHow much did the number of Saturday visitors grow?',
    answer: 'By twenty percent.',
    choices: ['By seventy percent.', 'By twenty percent.', 'By three percent.', 'By one hour.'],
    passage: P_1,
    hint: '第3段落の数字に注目。seventy percent は何の数字か。',
    explanation: `【何を聞かれているか】
数字が2つあるので、どちらが何を表すかを区別します。

【なぜそうなるのか】
seventy percent（70％）は「アイデアが好きだと答えた人の割合」、twenty percent（20％）は「土曜日の来館者の増加」です。

【ステップ1】第3段落の "the number of Saturday visitors had grown by twenty percent" を探す。
【ステップ2】grown by twenty percent＝20％増えた。
【ステップ3】70％は、好きだと答えた人の割合。

【答え】By twenty percent.

【確かめ】20％の選択肢は2番目。

【よくあるまちがい】1番目の seventy percent を選んでしまう。70％は「好きだと答えた人の割合」です。`,
    pitfall: '数字が出てきたら、何についての数字かを確かめる。',
    memoryTip: '数字は「何の数字か」とセットで読む。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_22',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhy was the high school student surprised?',
    answer: 'He or she finished the homework faster than expected in a quiet place.',
    choices: ['He or she finished the homework faster than expected in a quiet place.', 'He or she could not finish the homework in an hour.', 'He or she met many friends in the library.', 'He or she was asked to leave the library.'],
    passage: P_1,
    hint: '生徒の言葉 "I did not know how much I could do without noise." の意味を考える。',
    explanation: `【何を聞かれているか】
驚いた理由を、本文の言葉からまとめます。

【なぜそうなるのか】
生徒は「1時間で宿題を終えて驚いた」「静かだとどれだけできるか知らなかった」と書いています。つまり、思っていたより早く終わったことに驚いたのです。

【ステップ1】"I finished my homework in an hour, and I was surprised." を読む。
【ステップ2】続けて "I did not know how much I could do without noise."。
【ステップ3】「静かなところだと、思っていた以上にできた」という意味。

【答え】He or she finished the homework faster than expected in a quiet place.

【確かめ】1番目が合う。2番目は、本文と逆。

【よくあるまちがい】2番目を選んでしまう。finished は「終えた」なので、終えられなかったではありません。`,
    pitfall: 'finished（終えた）と could not finish（終えられなかった）を取りちがえる。',
    memoryTip: 'finish の意味を確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_23',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhich is the best meaning of the last sentence of the passage?',
    answer: 'A good public place offers different times for different needs.',
    choices: ['A good public place should be quiet all day.', 'A good public place offers different times for different needs.', 'A good public place should not change its rules.', 'A good public place is one where everyone does the same thing.'],
    passage: P_1,
    hint: '最後の文は、"is not one where ... but where ..." の形（A ではなく B）に近い。',
    explanation: `【何を聞かれているか】
筆者（司書）が最後に言いたいことを選びます。

【なぜそうなるのか】
最後の文は「よい公共の場所とは、みんなが同じことをする場所ではなく、いろいろな人が自分に合った時間を見つけられる場所だ」という意味です。

【ステップ1】"is not one where everyone does the same thing" ＝みんなが同じことをする場所ではない。
【ステップ2】"It is one where different people can find the time that suits them." ＝いろいろな人が、自分に合う時間を見つけられる場所。
【ステップ3】これを短くまとめた選択肢を選ぶ。

【答え】A good public place offers different times for different needs.

【確かめ】2番目が合う。4番目は、"not" の部分をそのまま選んでしまった誤り。

【よくあるまちがい】4番目を選んでしまう。否定のあとの but 以降に注目します。`,
    pitfall: '否定された内容を選ばない。',
    memoryTip: '最後の文は、筆者の主張。否定されている部分を選ばない。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_24',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhich of the following is true according to the passage?',
    answer: 'The library plans to start a Sunday event for children.',
    choices: ['The library plans to start a Sunday event for children.', 'The Quiet Hour is held every Sunday morning.', 'Most visitors said they disliked the Quiet Hour.', 'The staff stopped answering visitors\' questions.'],
    passage: P_1,
    hint: '各選択肢が、本文のどの部分にあたるかを探して、一致するか確かめる。',
    explanation: `【何を聞かれているか】
本文の内容と一致する選択肢を1つ選びます。

【なぜそうなるのか】
内容一致の問題は、選択肢を1つずつ本文と照らして、ちがう点（曜日・数・人）を探して消していきます。

【ステップ1】「静かな時間」は土曜日の朝。日曜ではない（2番目は×）。
【ステップ2】約70％が好意的。多くの人が気に入らなかった、ではない（3番目は×）。
【ステップ3】職員が答えなくなったとは書いていない。小声で話すだけ（4番目は×）。
【ステップ4】日曜日の午後に「Talking Hour」を計画（1番目は○）。

【答え】The library plans to start a Sunday event for children.

【確かめ】本文の最後の段落「Talking Hour on Sunday afternoons」と合うのは1番目。

【よくあるまちがい】2番目を選んでしまう。Quiet Hour は Saturday morning です。`,
    pitfall: '曜日をたしかめない。',
    memoryTip: '内容一致は、曜日・数・人をチェックする。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_25',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhy did Mai almost throw the notebook away?',
    answer: 'The pages were old and the writing was hard to read.',
    choices: ['The pages were old and the writing was hard to read.', 'It was not her grandmother\'s notebook.', 'It had no recipes in it.', 'She wanted to buy a new notebook.'],
    passage: P_2,
    hint: '第1段落の最初の2文に注目。',
    explanation: `【何を聞かれているか】
理由を、本文から探します。

【なぜそうなるのか】
最初の段落に、「ページが黄ばんでいて、字が読みにくかった」と書かれています。

【ステップ1】"she almost threw it away" の直後を読む。
【ステップ2】"The pages were yellow, and the writing was hard to read."
【ステップ3】「古くて読みにくい」ことが理由。

【答え】The pages were old and the writing was hard to read.

【確かめ】1番目が合う。3番目は、レシピがあったので×。

【よくあるまちがい】3番目を選んでしまう。実際にはミソ汁のレシピがありました。`,
    pitfall: '本文と逆のことを選ぶ。',
    memoryTip: '理由は、直後の文に書かれていることが多い。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_26',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhat was Mai\'s problem with her soup?',
    answer: 'It was always too salty.',
    choices: ['It was always too salty.', 'It was always too sweet.', 'It was always cold.', 'It always had too many vegetables.'],
    passage: P_2,
    hint: '第2段落の最後の文に注目。',
    explanation: `【何を聞かれているか】
マイのミソ汁がどうだったかを選びます。

【なぜそうなるのか】
第2段落に "Her soup was always too salty." とあります。

【ステップ1】第2段落を読む。
【ステップ2】最後の文は "Her soup was always too salty."。
【ステップ3】too salty＝塩からすぎる。

【答え】It was always too salty.

【確かめ】1番目が合う。

【よくあるまちがい】2番目を選んでしまう。sweet は、第3段落の sweet tea の語です。`,
    pitfall: '別の段落の語につられる。',
    memoryTip: '選択肢の語が本文のどこで使われているかを確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_27',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhat did Mai do differently on Sunday?',
    answer: 'She waited one minute and tasted the soup again.',
    choices: ['She added more miso right away.', 'She waited one minute and tasted the soup again.', 'She stopped drinking tea.', 'She used a new recipe.'],
    passage: P_2,
    hint: '第3段落の2〜3文目に注目。',
    explanation: `【何を聞かれているか】
いつもとちがう点を選びます。

【なぜそうなるのか】
第3段落では、味が薄く感じても、ミソを足さずに1分待ってもう一度味見をしました。

【ステップ1】第3段落の "Instead of adding more miso" を探す。
【ステップ2】"she waited a minute and tasted it again" とある。
【ステップ3】ミソを足す（いつもの動作）のではなく、待つことがちがう点。

【答え】She waited one minute and tasted the soup again.

【確かめ】2番目が合う。1番目は、いつもの動作。

【よくあるまちがい】1番目を選んでしまう。「すぐにミソを足す」は、いつものやり方です。`,
    pitfall: '「いつもの動作」と「ちがう動作」を取りちがえる。',
    memoryTip: 'instead of は「〜のかわりに」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_28',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhy did the soup seem weak at first?',
    answer: 'Her tongue still had the taste of sweet tea.',
    choices: ['The soup did not have enough miso.', 'Her tongue still had the taste of sweet tea.', 'She tasted it too late.', 'The soup was too hot.'],
    passage: P_2,
    hint: '第3段落の最後の文の not because ... but because ... の形に注目。',
    explanation: `【何を聞かれているか】
最初に「薄い」と感じた本当の理由を選びます。

【なぜそうなるのか】
本文は "not because the soup was weak, but because her tongue was still full of the sweet tea" と書き、スープが薄かったのではなく、舌が甘いお茶の味でいっぱいだったからだと説明しています。

【ステップ1】"not because A, but because B" は「AだからではなくBだから」。
【ステップ2】A は the soup was weak（スープが薄いから）。
【ステップ3】B は her tongue was still full of the sweet tea（舌が甘いお茶の味でいっぱいだから）。

【答え】Her tongue still had the taste of sweet tea.

【確かめ】2番目が合う。1番目は A の部分で、否定されている。

【よくあるまちがい】1番目を選んでしまう。not because のあとは、否定されている理由です。`,
    pitfall: 'not because A の A を選ぶ。',
    memoryTip: 'not because A but because B は、B が本当の理由。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_29',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhat does the grandmother mean by "They are the ones who know when to wait"?',
    answer: 'Patience is more important than knowing many recipes.',
    choices: ['Cooking takes a long time.', 'Patience is more important than knowing many recipes.', 'Only old people can cook well.', 'Recipes are not necessary for cooking.'],
    passage: P_2,
    hint: '祖母の言葉は、「〜ではなく、…な人が良い料理人」という形。',
    explanation: `【何を聞かれているか】
祖母の言葉の意味を、前後の文から考えて選びます。

【なぜそうなるのか】
祖母は "Good cooks are not the ones who know many recipes. They are the ones who know when to wait." と言っています。「たくさんのレシピを知っている人ではなく、待つタイミングを知っている人」がよい料理人という意味です。

【ステップ1】祖母の言葉を2文に分けて読む。
【ステップ2】「たくさんのレシピを知っている」は否定されている。
【ステップ3】「待つ時を知っている」が肯定されている。
【ステップ4】待つ＝がまん強さ。

【答え】Patience is more important than knowing many recipes.

【確かめ】2番目が合う。4番目は「レシピは必要ない」と言いすぎ。

【よくあるまちがい】4番目を選んでしまう。祖母はレシピを不要とは言っていません。`,
    pitfall: '本文にない極端な主張を選ぶ。',
    memoryTip: '言いすぎの選択肢（必要ない・だけ）は消す。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_30',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhich of the following is true according to the passage?',
    answer: 'Mai\'s grandmother laughed when Mai told her about the note.',
    choices: ['Mai made soup for the first time on Sunday.', 'Mai\'s grandmother laughed when Mai told her about the note.', 'Mai threw the notebook away.', 'Mai\'s grandmother did not know about the note.'],
    passage: P_2,
    hint: '各選択肢の、「いつ」「だれが」「何を」を本文とくらべる。',
    explanation: `【何を聞かれているか】
本文と一致する選択肢を選びます。

【なぜそうなるのか】
内容一致は、「初めて」「捨てた」「知らなかった」のような強い言い方がまちがいのことが多いです。

【ステップ1】1番目：Mai は以前から何度もスープを作っていた（×）。
【ステップ2】3番目：almost threw it away＝捨てそうになった（×）。
【ステップ3】4番目：メモを書いたのは祖母（×）。
【ステップ4】2番目：最後の段落で祖母は laughed（○）。

【答え】Mai's grandmother laughed when Mai told her about the note.

【確かめ】本文の最後の段落と一致するのは2番目。

【よくあるまちがい】3番目を選んでしまう。almost は「もう少しで〜しそうになった」です。`,
    pitfall: 'almost の意味を取りちがえる。',
    memoryTip: 'almost は「ほとんど」ではなく「もう少しで〜しそう」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_31',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhy do baby sea turtles often walk toward the roads?',
    answer: 'Lights from the town are brighter than the sea.',
    choices: ['They are afraid of the sea.', 'Lights from the town are brighter than the sea.', 'They want to find food on the roads.', 'They cannot see the moon.'],
    passage: P_3,
    hint: '第1段落の最後の文に注目。',
    explanation: `【何を聞かれているか】
ウミガメの赤ちゃんが道路へ向かってしまう理由を選びます。

【なぜそうなるのか】
ウミガメの赤ちゃんは、いちばん明るい水平線に向かって進みます。昔は月や星を映した海がいちばん明るかったのですが、今は町の明かりのほうが明るいので、道路へ向かってしまうのです。

【ステップ1】昔は、いちばん明るい所＝海だった。
【ステップ2】今は、ホテルや道路の明かりのほうが海より明るい。
【ステップ3】だから、まちがった方へ進む。

【答え】Lights from the town are brighter than the sea.

【確かめ】2番目が合う。

【よくあるまちがい】1番目を選んでしまう。「海を怖がる」とは書いていません。`,
    pitfall: '本文にない理由を選ぶ。',
    memoryTip: '理由は、段落の最後の However 以降に書かれていることが多い。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_32',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhat did the volunteers ask the hotels to do?',
    answer: 'Turn off unnecessary lights and use amber lights in the hatching season.',
    choices: ['Close the beach during the whole year.', 'Turn off unnecessary lights and use amber lights in the hatching season.', 'Build new roads for the turtles.', 'Use brighter white lights.'],
    passage: P_3,
    hint: '第2段落の2文目に注目。',
    explanation: `【何を聞かれているか】
ボランティアがホテルに頼んだことを選びます。

【なぜそうなるのか】
第2段落に「不必要な明かりを消す」「白い明かりのかわりに琥珀色の明かりを使う」と頼んだと書かれています。時期は、ふ化の季節（5月〜10月）です。

【ステップ1】"They asked hotels to turn off unnecessary lights" を探す。
【ステップ2】"and to use amber lights ... instead of white ones"。
【ステップ3】期間は the hatching season。

【答え】Turn off unnecessary lights and use amber lights in the hatching season.

【確かめ】2番目が合う。4番目は、本文と逆。

【よくあるまちがい】4番目を選んでしまう。white ones のかわりに amber lights を使うのです。`,
    pitfall: 'instead of の前後を取りちがえる。',
    memoryTip: 'instead of A は「Aのかわりに」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_33',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhy were some hotel owners worried at first?',
    answer: 'They thought tourists would feel unsafe on darker beaches.',
    choices: ['They thought turtles would not come.', 'They thought tourists would feel unsafe on darker beaches.', 'They thought amber lights were too expensive.', 'They did not like the volunteers.'],
    passage: P_3,
    hint: '第2段落の At first のあとの文に注目。',
    explanation: `【何を聞かれているか】
ホテルの人が心配した理由を選びます。

【なぜそうなるのか】
本文は "some hotel owners worried that darker beaches would make tourists feel unsafe" と書いています。

【ステップ1】At first のあとを読む。
【ステップ2】darker beaches would make tourists feel unsafe。
【ステップ3】make＋人＋形容詞（人を〜にする）。

【答え】They thought tourists would feel unsafe on darker beaches.

【確かめ】2番目が合う。

【よくあるまちがい】3番目を選んでしまう。値段のことは書かれていません。`,
    pitfall: '本文にない理由を選ぶ。',
    memoryTip: '理由は本文の言葉から探す。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_34',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhat happened five years later?',
    answer: 'The number of turtles reaching the sea doubled, and the number of tourists did not fall.',
    choices: ['The number of turtles reaching the sea doubled, and the number of tourists did not fall.', 'The number of turtles reaching the sea doubled, but fewer tourists came.', 'The number of turtles did not change, but more tourists came.', 'The hotels closed because of the turtles.'],
    passage: P_3,
    hint: '第3段落の最初の2文に注目。',
    explanation: `【何を聞かれているか】
5年後に起きたことを選びます。

【なぜそうなるのか】
第3段落に、海にたどりついた赤ちゃんウミガメが2倍になったこと、そして観光客の数は減らなかったことが書かれています。

【ステップ1】"the number of baby turtles ... had doubled" ＝2倍になった。
【ステップ2】"the number of tourists did not fall" ＝観光客は減らなかった。
【ステップ3】2つの事実が両方入っている選択肢を選ぶ。

【答え】The number of turtles reaching the sea doubled, and the number of tourists did not fall.

【確かめ】1番目が合う。2番目は観光客のところがちがう。

【よくあるまちがい】2番目を選んでしまう。did not fall＝減らなかったので、fewer ではありません。`,
    pitfall: '前半だけ合っていて、後半がちがう選択肢を選ぶ。',
    memoryTip: '選択肢は、前半も後半も確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_35',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の英文を読んで、あとの問いに答えなさい。\nWhich is the best title for this passage?',
    answer: 'Helping Turtles Without Hurting Tourism',
    choices: ['Helping Turtles Without Hurting Tourism', 'The History of Florida Hotels', 'Why Sea Turtles Sleep at Night', 'How to Build a Beautiful Beach'],
    passage: P_3,
    hint: '本文全体で、いちばん多く述べられていることを考える。',
    explanation: `【何を聞かれているか】
本文全体にふさわしいタイトルを選びます。

【なぜそうなるのか】
タイトルは、本文全体の話題と筆者の主張を短くまとめたものです。本文は「ウミガメを守る取り組みが、観光に害を与えなかった」という話で、最後に "protecting nature does not always have to be a loss for people" とまとめています。

【ステップ1】話題は、ウミガメと明かり。
【ステップ2】結論は、自然を守っても人の損にならないこと。
【ステップ3】両方を含むのは「ウミガメを助けても、観光に悪い影響はなかった」という趣旨。

【答え】Helping Turtles Without Hurting Tourism

【確かめ】1番目が合う。

【よくあるまちがい】ホテルの話だけの2番目を選んでしまう。ホテルは一部です。`,
    pitfall: '一部の話題だけのタイトルを選ぶ。',
    memoryTip: 'タイトルは、本文全体を表すものを選ぶ。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_36',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の会話の（　）に入る最も適切なものを選びなさい。\nA: I\'m sorry I\'m late. The bus was stuck in traffic.\nB: (   )',
    answer: 'Don\'t worry. The movie hasn\'t started yet.',
    choices: ['Don\'t worry. The movie hasn\'t started yet.', 'Yes, you are always on time.', 'I didn\'t take the bus.', 'That\'s a good idea.'],
    hint: 'Aは「おくれてごめん」とあやまっている。',
    explanation: `【何を聞かれているか】
会話の流れに合う返事を選びます。

【なぜそうなるのか】
あやまっている相手には、「気にしないで」という返事が自然です。

【ステップ1】A は遅れたことをあやまっている。
【ステップ2】「心配しないで。まだ映画は始まっていない」は自然な返事。
【ステップ3】「いつも時間通りだね」は、遅れた理由と合わない。

【答え】Don't worry. The movie hasn't started yet.

【確かめ】1番目が合う。

【よくあるまちがい】2番目を選んでしまう。遅れたのに「時間通り」と言うのは不自然です。`,
    pitfall: '前後の文の意味を確かめずに、文法だけで選ぶ。',
    memoryTip: 'Aの言葉に対する自然な返事かを確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_37',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の会話の（　）に入る最も適切なものを選びなさい。\nA: Would you mind opening the window?\nB: (   )',
    answer: 'Not at all. It\'s a bit hot in here.',
    choices: ['Not at all. It\'s a bit hot in here.', 'Yes, I would. Please do.', 'No, I don\'t have a window.', 'Sure, I mind.'],
    hint: 'Would you mind ...ing? は「〜してもらえますか」。気にしないときはどう答える？',
    explanation: `【何を聞かれているか】
会話の流れに合う返事を選びます。

【なぜそうなるのか】
Would you mind ...ing? は、「〜するのはいやですか」とたずねる形です。引き受けるときは「いやではありません（Not at all.）」と答えます。

【ステップ1】Would you mind ...? は「〜してもらえませんか」。
【ステップ2】引き受けるなら No や Not at all を使う。
【ステップ3】Yes, I would. は「いやです」の意味で、Please do. とつながらない。

【答え】Not at all. It's a bit hot in here.

【確かめ】1番目が合う。

【よくあるまちがい】Yes を選んでしまう。mind は「いやだ」なので、Yes だとことわる意味になります。`,
    pitfall: '前後の文の意味を確かめずに、文法だけで選ぶ。',
    memoryTip: 'Aの言葉に対する自然な返事かを確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_38',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の会話の（　）に入る最も適切なものを選びなさい。\nA: I haven\'t decided which club to join yet.\nB: (   )',
    answer: 'Why don\'t you visit some of them this week?',
    choices: ['Why don\'t you visit some of them this week?', 'I joined it last year.', 'You have already decided.', 'Because it was fun.'],
    hint: 'Aはまだ決めていない。Bは助言をするはず。',
    explanation: `【何を聞かれているか】
会話の流れに合う返事を選びます。

【なぜそうなるのか】
まだ決めていない人には、「いくつか見学したら？」という助言が自然です。Why don't you ...? は「〜してはどう？」という提案です。

【ステップ1】Aはまだ決めていない。
【ステップ2】自然な返事は、助言や提案。
【ステップ3】Why don't you ...? は提案の形。

【答え】Why don't you visit some of them this week?

【確かめ】1番目が合う。

【よくあるまちがい】Because を選んでしまう。Why の質問でないので、Because は不自然です。`,
    pitfall: '前後の文の意味を確かめずに、文法だけで選ぶ。',
    memoryTip: 'Aの言葉に対する自然な返事かを確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_39',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の会話の（　）に入る最も適切なものを選びなさい。\nA: How about going to the aquarium on Sunday?\nB: (   ), but I have a piano lesson that day.',
    answer: 'I\'d love to',
    choices: ['I\'d love to', 'I don\'t think so', 'Of course not', 'You\'re welcome'],
    hint: '「but」のあとが「ピアノのレッスンがある」。前半はどんな気持ちか。',
    explanation: `【何を聞かれているか】
会話の流れに合う返事を選びます。

【なぜそうなるのか】
「行きたいけれど、その日はレッスンがある」という流れです。I'd love to, but ... は、さそいをことわるときのていねいな言い方です。

【ステップ1】but のあとは、行けない理由。
【ステップ2】前半は、「行きたい」という気持ち。
【ステップ3】I'd love to, but ... が自然。

【答え】I'd love to

【確かめ】1番目が合う。

【よくあるまちがい】I don't think so を選んでしまう。「行きたい」気持ちの前半と合いません。`,
    pitfall: '前後の文の意味を確かめずに、文法だけで選ぶ。',
    memoryTip: 'Aの言葉に対する自然な返事かを確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_eigo_40',
    subject: 'eigo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の会話の（　）に入る最も適切なものを選びなさい。\nA: Excuse me. Could you tell me how to get to the post office?\nB: (   ) It\'s next to the bank on the second block.',
    answer: 'Sure. Go straight and turn left at the corner.',
    choices: ['Sure. Go straight and turn left at the corner.', 'Yes, it is. I went there yesterday.', 'I\'m fine, thank you.', 'Because it\'s closed today.'],
    hint: 'Aは道をたずねている。Bは道を教える。',
    explanation: `【何を聞かれているか】
会話の流れに合う返事を選びます。

【なぜそうなるのか】
道をたずねられたら、「いいですよ」と答えて、行き方を説明します。

【ステップ1】Aは行き方をたずねている。
【ステップ2】Sure. は「いいですよ」。
【ステップ3】そのあとに行き方を説明する。

【答え】Sure. Go straight and turn left at the corner.

【確かめ】1番目が合う。

【よくあるまちがい】Yes, it is. を選んでしまう。「How」の質問に Yes では答えません。`,
    pitfall: '前後の文の意味を確かめずに、文法だけで選ぶ。',
    memoryTip: 'Aの言葉に対する自然な返事かを確かめる。',
    examFrequency: 'high',
  },
  // ─────────────── 国語（40問） ───────────────
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_01',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の傍線部のカタカナを漢字に直しなさい（送りがながある場合はそれも書く）。\n過去の失敗をコウカイする。',
    answer: '後悔',
    hint: '「後」にあとから、「悔」にくやむ、の意味がある。',
    explanation: `【何を聞かれているか】
同音の熟語から、文に合う漢字を選んで書きます。

【なぜそうなるのか】
コウカイには「後悔」「航海」「公開」などがあります。文の意味は「あとからくやむ」ことなので、くやむという意味の「悔」を使います。

【ステップ1】文の意味を確かめる：失敗をくやむ。
【ステップ2】コウカイの同音語：後悔（くやむ）、航海（船で海を行く）、公開（広く見せる）。
【ステップ3】「くやむ」にあたるのは後悔。

【答え】後悔

【確かめ】「後悔先に立たず」ということわざでも使います。

【よくあるまちがい】「航海」と書いてしまう。船の話ではありません。`,
    pitfall: '同音異義語は、文の意味で選ぶ。',
    memoryTip: '「悔」の部首は、りっしんべん。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_02',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の傍線部のカタカナを漢字に直しなさい（送りがながある場合はそれも書く）。\nゲンカクな規則を守る。',
    answer: '厳格',
    hint: '「ゲン」は「厳」、「カク」は「格」。',
    explanation: `【何を聞かれているか】
文に合う漢字を選んで書きます。

【なぜそうなるのか】
「厳格」は、きびしくて、きちんとしている様子を表す言葉です。「厳」は「きびしい」、「格」は「きまり・基準」の意味です。

【ステップ1】「きびしい」を表す「厳」を使う。
【ステップ2】「きまり」を表す「格」を使う。
【ステップ3】「厳格」と書く。

【答え】厳格

【確かめ】「厳」の中は「敢」。「格」はきへん。

【よくあるまちがい】「厳」を「巌」や「顕」と書き間違える。`,
    pitfall: '「厳」の字形（上の「ツ」と「敢」）に注意。',
    memoryTip: '厳しい＋格＝厳格。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_03',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の傍線部のカタカナを漢字に直しなさい（送りがながある場合はそれも書く）。\n会議でイギを唱える。',
    answer: '異議',
    hint: '「ちがう意見」という意味の言葉。',
    explanation: `【何を聞かれているか】
「イギ」の漢字を、意味から選びます。

【なぜそうなるのか】
「イギ」には「異議」「意義」「威儀」などの同音語があります。「異議を唱える」は、ちがう意見を言うことです。

【ステップ1】文の意味を確かめる：ちがう意見を出す。
【ステップ2】「異」は「ちがう」、「議」は「話し合い・意見」。
【ステップ3】「異議」と書く。

【答え】異議

【確かめ】「意義（意味・価値）」と区別します。「異議あり」は法廷でも使います。

【よくあるまちがい】「意義」と書いてしまう。「意義」は「意味や価値」で、「唱える」とは合いません。`,
    pitfall: '異議＝ちがう議論。',
    memoryTip: '「異議を唱える」は決まった言い方。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_04',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の傍線部のカタカナを漢字に直しなさい（送りがながある場合はそれも書く）。\n責任をテンカする。',
    answer: '転嫁',
    hint: '「他に転じて、おしつける」の意味。',
    explanation: `【何を聞かれているか】
難しい熟語を、意味から考えて書きます。

【なぜそうなるのか】
「テンカ」には「転嫁」「添加」「天下」「点火」などがあります。責任を他の人におしつけるのは「転嫁」です。「嫁」は、よめ・とつぐ、という意味から、「他へうつす」意味になりました。

【ステップ1】責任を、他の人へうつす。
【ステップ2】「転」はうつる、「嫁」はよそへうつす。
【ステップ3】「転嫁」と書く。

【答え】転嫁

【確かめ】「添加（つけ加える）」ではありません。「責任転嫁」は、よく出る四字熟語です。

【よくあるまちがい】「添加」と書いてしまう。つけ加えるのではなく、うつすのです。`,
    pitfall: '転嫁は「責任転嫁」でセットで覚える。',
    memoryTip: '嫁は、おんなへん。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_05',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の傍線部のカタカナを漢字に直しなさい（送りがながある場合はそれも書く）。\nミッセツな関係を保つ。',
    answer: '密接',
    hint: '「ミッ」は、すきまがない、の意味の字。',
    explanation: `【何を聞かれているか】
同音の熟語から、文に合うものを選びます。

【なぜそうなるのか】
「密接」は、ひじょうに近くて、結びつきが強いことです。「密」は「すきまがない」、「接」は「つながる」の意味です。

【ステップ1】関係がとても近い、結びつきが強い。
【ステップ2】「密」はひそか・すきまがない、「接」はつなぐ。
【ステップ3】「密接」と書く。

【答え】密接

【確かめ】「蜜」（はちみつ）と区別します。

【よくあるまちがい】「蜜接」とむしへんの字を書いてしまう。`,
    pitfall: '密接＝すきまなくつながる。',
    memoryTip: '「密接な関係」は決まった言い方。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_06',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の傍線部のカタカナを漢字に直しなさい（送りがながある場合はそれも書く）。\n地球温暖化がシンコクな問題になる。',
    answer: '深刻',
    hint: '「深く刻まれる」ことから、「ひじょうに重大」の意味。',
    explanation: `【何を聞かれているか】
文に合う漢字を選んで書きます。

【なぜそうなるのか】
「深刻」は、重大で、すぐには解決できない様子を表す言葉です。「刻」は「きざむ」の意味です。

【ステップ1】問題が、重大である。
【ステップ2】「深」＋「刻」の組み合わせ。
【ステップ3】「深刻」と書く。

【答え】深刻

【確かめ】「刻」の右側はりっとう（刀）。

【よくあるまちがい】「真刻」「慎刻」などと書く。`,
    pitfall: '深い＋きざむ＝深刻。',
    memoryTip: '刻のつくり（りっとう）に注意。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_07',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の傍線部の漢字の読みを、ひらがなで書きなさい。\n概して、結果はよかった。',
    answer: 'がいして',
    hint: '「概」は「おおむね」の意味の字。',
    explanation: `【何を聞かれているか】
漢字の読みを、ひらがなで書きます。

【なぜそうなるのか】
「概して」は、「おおむね」「だいたい」の意味の副詞です。「概」には「おおよそ」の意味があり、「概要」「大概」などで使われます。

【ステップ1】「概」の音読みは「ガイ」。
【ステップ2】「概して」と送りがながつくと、「がいして」と読む。

【答え】がいして

【確かめ】「概要（がいよう）」と同じ読み方です。

【よくあるまちがい】「おおむね」と読んでしまう。「おおむね」は同じ意味の別の言い方です。`,
    pitfall: '概要の概。',
    memoryTip: 'ガイで終わる語は、大概・概念・概算。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_08',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の傍線部の漢字の読みを、ひらがなで書きなさい。\n二つの結果に顕著な差がある。',
    answer: 'けんちょ',
    hint: '「顕」は、あらわれる・はっきりしている、の意味。',
    explanation: `【何を聞かれているか】
漢字の読みを、ひらがなで書きます。

【なぜそうなるのか】
「顕著」は、はっきりとわかるほど目立つことです。「顕」は「あらわれる」、「著」は「めだつ」の意味です。

【ステップ1】「顕」の音読みは「ケン」。
【ステップ2】「著」の音読みは「チョ」。
【ステップ3】「けんちょ」と読む。

【答え】けんちょ

【確かめ】「著名（ちょめい）」の著と同じ読みです。

【よくあるまちがい】「けんじょ」と読んでしまう。「著」は「ちょ」です。`,
    pitfall: '顕著の著は、「ちょ」と読む。',
    memoryTip: '顕はケン、著はチョ。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_09',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の傍線部の漢字の読みを、ひらがなで書きなさい。\n苦手な科目を敬遠する。',
    answer: 'けいえん',
    hint: '「敬」は「ケイ」。「遠」は「エン」。',
    explanation: `【何を聞かれているか】
漢字の読みを、ひらがなで書きます。

【なぜそうなるのか】
「敬遠」は、うやまって遠ざけることから、「いやがって近づかない」ことを表します。野球の「敬遠」にも使われます。

【ステップ1】「敬」の音読みは「ケイ」。
【ステップ2】「遠」の音読みは「エン」。
【ステップ3】「けいえん」と読む。

【答え】けいえん

【確かめ】意味は「うやまう」ではなく、「近づかない」。

【よくあるまちがい】「けいおん」と読んでしまう。「遠」は「おん」と読みません。`,
    pitfall: '敬遠は、「うやまって遠ざける」から。',
    memoryTip: '遠は「エン」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_10',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の傍線部の漢字の読みを、ひらがなで書きなさい。\n環境破壊を憂慮する。',
    answer: 'ゆうりょ',
    hint: '「憂」は「うれう」、「慮」は「おもんぱかる」。',
    explanation: `【何を聞かれているか】
漢字の読みを、ひらがなで書きます。

【なぜそうなるのか】
「憂慮」は、心配して、よく考えることです。「憂」は「うれう」、「慮」は「おもんぱかる（よく考える）」の意味です。

【ステップ1】「憂」の音読みは「ユウ」。
【ステップ2】「慮」の音読みは「リョ」。
【ステップ3】「ゆうりょ」と読む。

【答え】ゆうりょ

【確かめ】「優（やさしい）」の字と形が似ていますが、読みは同じ「ユウ」。

【よくあるまちがい】「ゆうれい」と読んでしまう。「慮」は「りょ」です。`,
    pitfall: '憂慮の慮は、思慮の慮。',
    memoryTip: 'ゆうりょ＝心配する。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_11',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の（　）に入る体の一部を表す漢字1字を答えなさい。\n彼の見事な演奏に、会場の全員が（　）を巻いた。',
    answer: '舌',
    hint: '感心して、ものも言えなくなる様子をあらわす慣用句。',
    explanation: `【何を聞かれているか】
慣用句の（　）に入る漢字を答えます。

【なぜそうなるのか】
「舌を巻く」は、おどろきや感心のあまり、ものが言えなくなることを表す慣用句です。

【ステップ1】文の意味：見事な演奏に感心した。
【ステップ2】「感心する」意味の慣用句は「舌を巻く」。
【ステップ3】（　）には「舌」が入る。

【答え】舌

【確かめ】「舌を巻く」は、言葉が出ないほど感心する様子。

【よくあるまちがい】「口」や「目」を入れてしまう。「口をとがらせる」「目を丸くする」は別の意味です。`,
    pitfall: '舌を巻く＝感心する。',
    memoryTip: '「舌鼓を打つ」とは別の意味（おいしい）。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_12',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '「猫に小判」と近い意味で使われることわざを、次から選びなさい。',
    answer: '豚に真珠',
    choices: ['豚に真珠', '石の上にも三年', '急がば回れ', '渡る世間に鬼はない'],
    hint: '価値の分からない者に、高価なものをあたえても無駄、という意味。',
    explanation: `【何を聞かれているか】
ことわざの意味から、近い意味の別のことわざを選びます。

【なぜそうなるのか】
「猫に小判」は、価値の分からない者に、高価なものをあたえても無駄になる、という意味です。同じ意味のことわざが「豚に真珠」です。

【ステップ1】「猫に小判」の意味を確かめる。
【ステップ2】選択肢の意味：「石の上にも三年」＝がまん強く、「急がば回れ」＝安全な道を選ぶ、「渡る世間に鬼はない」＝世の中には親切な人もいる。
【ステップ3】近い意味は「豚に真珠」。

【答え】豚に真珠

【確かめ】「豚に真珠」は聖書に由来する言葉です。

【よくあるまちがい】「石の上にも三年」を選ぶ。`,
    pitfall: '猫に小判＝豚に真珠。',
    memoryTip: '意味が似たことわざはセットで覚える。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_13',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '「一朝一夕にできることではない」の「一朝一夕」の意味として最も適切なものを選びなさい。',
    answer: 'わずかな期間',
    choices: ['わずかな期間', '毎日欠かさず', '朝から夕方まで', '何年もの間'],
    hint: '「一朝」は一日の朝、「一夕」は一日の夕方。',
    explanation: `【何を聞かれているか】
四字熟語の意味を選びます。

【なぜそうなるのか】
「一朝一夕」は、「ひと朝とひと晩」という意味から、「わずかな期間・短い時間」を表します。打ち消しの言葉と一緒に使うことが多く、「簡単にはできない」という意味になります。

【ステップ1】「一朝」はひと朝、「一夕」はひと晩。
【ステップ2】合わせて「とても短い期間」。
【ステップ3】「〜ではない」と続くので、「短い間ではできない」。

【答え】わずかな期間

【確かめ】「一朝一夕に」は、ほとんど否定の文で使います。

【よくあるまちがい】「毎朝毎晩」と読んでしまう。`,
    pitfall: '一朝一夕＝短い期間。',
    memoryTip: '「一朝一夕にできない」＝時間がかかる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_14',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文の（　）に入る、先生に対する尊敬の言い方として正しいものを選びなさい。\n先生が、そう（　）ました。',
    answer: 'おっしゃい',
    choices: ['おっしゃい', '申し', '申し上げ', '拝見し'],
    hint: '「先生」の動作を高めて言う形。',
    explanation: `【何を聞かれているか】
敬語（尊敬語）の正しい形を選びます。

【なぜそうなるのか】
「先生」の動作には、尊敬語を使います。「言う」の尊敬語は「おっしゃる」で、「おっしゃいました」となります。「申す」は自分の動作をへりくだる謙譲語です。

【ステップ1】主語は「先生」＝高めるべき人。
【ステップ2】尊敬語「おっしゃる」を使う。
【ステップ3】「申し」「申し上げ」「拝見し」は、自分の動作をへりくだる形（謙譲語）。

【答え】おっしゃい

【確かめ】「先生がおっしゃいました」。

【よくあるまちがい】「申しました」と言ってしまう。申すは謙譲語です。`,
    pitfall: '「おっしゃる」は先生の動作に使う。',
    memoryTip: '言う：尊敬＝おっしゃる、謙譲＝申す・申し上げる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_15',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文の傍線部「静かに」の品詞名を選びなさい。\n彼はとても静かに本を読んだ。',
    answer: '形容動詞',
    choices: ['形容詞', '形容動詞', '副詞', '名詞'],
    hint: '「静かだ」という言い方に直せるか。「だ」の形で言い切れる言葉の品詞。',
    explanation: `【何を聞かれているか】
傍線部の品詞を答えます。

【なぜそうなるのか】
「静かに」は、「静かだ」という形で言い切れ、様子を表す言葉です。言い切りが「だ」で終わる、様子を表す自立語は形容動詞です。

【ステップ1】「静かに」を言い切りの形にすると「静かだ」。
【ステップ2】言い切りが「〜だ」で、様子を表すのは形容動詞。
【ステップ3】「静かだ」は、「本を読んだ」を修飾している。

【答え】形容動詞

【確かめ】「静かに」の「に」は、形容動詞の活用語尾（連用形）。

【よくあるまちがい】「副詞」と答えてしまう。副詞は活用しません。`,
    pitfall: '「〜だ」で言い切れたら形容動詞。',
    memoryTip: '形容詞は「〜い」、形容動詞は「〜だ」。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_16',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文の傍線部「れ」の意味を選びなさい。\n私は先生にほめられた。',
    answer: '受け身',
    choices: ['受け身', '可能', '自発', '尊敬'],
    hint: '「ほめる」のは先生。「私」はほめられる側。',
    explanation: `【何を聞かれているか】
助動詞「れる」の意味を答えます。

【なぜそうなるのか】
「れる・られる」には、受け身・可能・自発・尊敬の4つの意味があります。この文は、ほめる側が「先生」で、「私」がほめられる側なので、受け身です。

【ステップ1】動作をするのは「先生」。
【ステップ2】「私」は動作を受ける側。
【ステップ3】受け身の「れる」。

【答え】受け身

【確かめ】「〜に〜られる」の形なら、ふつうは受け身。

【よくあるまちがい】「尊敬」と答えてしまう。尊敬は、動作をする人が目上の人のときの意味です。`,
    pitfall: '「に」＋動作を受ける＝受け身。',
    memoryTip: 'れる・られるの4つの意味を覚える。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_17',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文の傍線部「大きな」の品詞名を選びなさい。\n大きな木のかげで休んだ。',
    answer: '連体詞',
    choices: ['形容詞', '形容動詞', '連体詞', '副詞'],
    hint: '「大きな」は、活用するか。あとの名詞だけを修飾するか。',
    explanation: `【何を聞かれているか】
傍線部の品詞を答えます。

【なぜそうなるのか】
「大きな」は活用せず、体言（名詞）だけを修飾します。このような語を連体詞といいます。「大きい」は形容詞ですが、「大きな」は連体詞です。

【ステップ1】「大きな」は、活用しない。
【ステップ2】名詞「木」を修飾している。
【ステップ3】活用せず、体言だけを修飾する語は連体詞。

【答え】連体詞

【確かめ】「小さな」「おかしな」も連体詞。

【よくあるまちがい】「形容詞」と答えてしまう。形容詞は「大きい」と活用します。`,
    pitfall: '「〜な」で活用しない＝連体詞。',
    memoryTip: '連体詞：この・その・あの・大きな・小さな。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_18',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文の傍線部「降れば」の活用形を選びなさい。\nもし雨が降れば、運動会は中止する。',
    answer: '仮定形',
    choices: ['未然形', '連用形', '仮定形', '命令形'],
    hint: '「ば」がつく形は何形か。',
    explanation: `【何を聞かれているか】
動詞の活用形を答えます。

【なぜそうなるのか】
「降れば」は、「降る」の活用形で、「ば」に続いています。「ば」に続く形は、仮定形です。

【ステップ1】「降る」は五段活用の動詞。
【ステップ2】「降れば」の「降れ」は、e段の音。
【ステップ3】「ば」に続く形は仮定形。

【答え】仮定形

【確かめ】仮定形＝「もし〜なら」の意味の形。

【よくあるまちがい】「命令形」と答えてしまう。同じ形（降れ）ですが、「ば」に続くので仮定形です。`,
    pitfall: '「ば」に続くのは仮定形。',
    memoryTip: '命令形は言い切りの形（降れ。）。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_19',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '古文の「てふてふ」を、現代かなづかいで書きなさい。',
    answer: 'ちょうちょう',
    hint: '「ふ」を含む音が、現代かなづかいでどう変わるかを考える。',
    explanation: `【何を聞かれているか】
歴史的かなづかいを、現代かなづかいに直します。

【なぜそうなるのか】
歴史的かなづかいで「ふ」は、語頭・語尾でなければ「う」に、「てふ」は「ちょう」と読みます。「てふてふ」は「ちょうちょう」です。

【ステップ1】「てふ」は、「てう」→「ちょう」に変わる。
【ステップ2】「てふ」を「ちょう」に直す。
【ステップ3】「てふてふ」は、「ちょうちょう」。

【答え】ちょうちょう

【確かめ】「てふてふ」は、「ちょうちょう」と読み、「蝶々」のこと。

【よくあるまちがい】「ちふちふ」「ちょうふちょうふ」などと書く。`,
    pitfall: 'てふ＝ちょう。',
    memoryTip: '「ふ」が「う」になる音をまとめて覚える。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_20',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '古文「いとをかし」の「いと」の意味として正しいものを選びなさい。',
    answer: 'とても',
    choices: ['とても', 'すぐに', 'なんとなく', 'ようやく'],
    hint: '現代語の「とても」にあたる副詞。',
    explanation: `【何を聞かれているか】
古語の意味を選びます。

【なぜそうなるのか】
「いと」は、「とても・たいそう」という意味の副詞です。「いとをかし」は「とても趣がある」の意味です。

【ステップ1】「いと」は副詞。
【ステップ2】意味は「とても」。
【ステップ3】「をかし」は「趣がある」。

【答え】とても

【確かめ】「いと」は、現代語の「たいそう」と同じ。

【よくあるまちがい】「すぐに」を選んでしまう。「すぐに」は「やがて」「ただちに」などの古語です。`,
    pitfall: 'いと＝とても。',
    memoryTip: '「いとおしい」の「いと」と同じ語源。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_21',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '古文の係助詞「こそ」があるとき、文末の語の活用形は何形になりますか。次から選びなさい。',
    answer: '已然形',
    choices: ['連体形', '已然形', '終止形', '連用形'],
    hint: '係り結びの決まり。「ぞ・なむ・や・か」は連体形、「こそ」は？',
    explanation: `【何を聞かれているか】
係り結びのきまりを答えます。

【なぜそうなるのか】
古文では、「こそ」があると文末が已然形に変わります。「ぞ・なむ・や・か」の場合は連体形になります。

【ステップ1】係助詞「こそ」の結びは已然形。
【ステップ2】「ぞ・なむ・や・か」の結びは連体形。
【ステップ3】「は・も」は結びが変わらない。

【答え】已然形

【確かめ】「春こそ、あけぼのをかしけれ」のように、「かしけれ」は已然形。

【よくあるまちがい】「連体形」と答えてしまう。連体形になるのは「ぞ・なむ・や・か」です。`,
    pitfall: 'こそ→已然形。',
    memoryTip: '係り結び：こそ→已然形、ぞ・なむ・や・か→連体形。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_22',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「この『つながる』経験」とあるが、どのような経験か。最も適切なものを選びなさい。\n（傍線部：「答えを先に見てしまえば、この『つながる』経験は起こらない。」）',
    answer: '解けない問題を考え続けるうちに、別の場面で見たことが解法のヒントとして結びつく経験。',
    choices: ['解けない問題を考え続けるうちに、別の場面で見たことが解法のヒントとして結びつく経験。', '先生や友人に答えを教えてもらい、理解が深まる経験。', '難しい問題をあきらめて、別の問題に取り組む経験。', '答えを調べて、すぐに問題を解決する経験。'],
    passage: P_4,
    hint: '傍線部の直前の文に注目。',
    explanation: `【何を聞かれているか】
指示語や「この」が指す内容を、前の文から探します。

【なぜそうなるのか】
「この『つながる』経験」の「この」は、前の文の内容を指しています。前の文には「ふとした瞬間に、別の場面で見たことが解法のヒントとしてつながる」と書かれています。

【ステップ1】傍線部の前の文を読む。
【ステップ2】「別の場面で見たことが解法のヒントとしてつながる」とある。
【ステップ3】これを、「問題を考え続けるうちに」の条件と合わせてまとめる。

【答え】解けない問題を考え続けるうちに、別の場面で見たことが解法のヒントとして結びつく経験。

【確かめ】選択肢の中で、「考え続ける」と「つながる」の両方があるのは1番目。

【よくあるまちがい】「答えを調べてすぐ解決する」を選ぶ。それは、傍線部では起こらないとされる経験です。`,
    pitfall: '指示語は直前から探す。',
    memoryTip: '「この」は前を指す。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_23',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n第3段落（「もちろん」で始まる段落）で、筆者が述べていることとして最も適切なものを選びなさい。',
    answer: '基礎知識の不足による分からなさは早く解消すべきだが、問いを育てている段階の分からなさは待つ価値がある。',
    choices: ['基礎知識の不足による分からなさは早く解消すべきだが、問いを育てている段階の分からなさは待つ価値がある。', 'どんな分からなさも、時間をかけて熟成させるべきだ。', '基礎知識の不足による分からなさは、放っておいてよい。', '問いを育てている間は、基礎的な知識は必要ない。'],
    passage: P_4,
    hint: '「分からなさ」を2種類に分けている。',
    explanation: `【何を聞かれているか】
段落の内容を、要約します。

【なぜそうなるのか】
第3段落は、「すべての分からなさを放っておけばよいというのではない」と述べたあと、「基礎的な知識の不足」と「問いを育てている段階」の2つに分けて説明しています。

【ステップ1】「もちろん」で、反対の意見を認める。
【ステップ2】基礎知識の不足による分からなさ＝早く解消。
【ステップ3】問いを育てている段階＝待つ価値がある。

【答え】基礎知識の不足による分からなさは早く解消すべきだが、問いを育てている段階の分からなさは待つ価値がある。

【確かめ】1番目が両方を述べている。

【よくあるまちがい】「どんな分からなさも熟成させるべきだ」を選ぶ。段落の初めで否定されています。`,
    pitfall: '「もちろん」の段落は、反対の意見への配慮。',
    memoryTip: '「もちろん〜だが」は、配慮のあと、主張に戻る。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_24',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「答えを待つための余白」とあるが、どのようなものか。「余白」の内容が分かるように、40字以内で説明しなさい。（句読点も1字に数える）',
    answer: '答えを待つあいだの、考える力が育つ時間や場所のこと。',
    passage: P_4,
    hint: '「それは、答えを待つための余白であり、〜でもある」の続きを使う。',
    explanation: `【何を聞かれているか】
傍線部の比喩を、本文の言葉で言いかえます。

【なぜそうなるのか】
「余白」は、実際の空白ではなく、たとえです。直後に「考える力が育つ場所でもある」とあるので、「答えを待つ時間や場所であり、考える力が育つ場所」という説明になります。

【ステップ1】傍線部は「余白」というたとえ。
【ステップ2】直後に「考える力が育つ場所でもある」とある。
【ステップ3】「答えを待つ」と「考える力が育つ」を合わせる。
【ステップ4】40字以内にまとめる。

【答え】答えを待つあいだの、考える力が育つ時間や場所のこと。

【確かめ】解答の字数を数える。句読点も1字。

【よくあるまちがい】「待つ時間」だけで終わる。「考える力が育つ」まで入れます。`,
    pitfall: 'たとえは、直後の説明から言いかえる。',
    memoryTip: '比喩は本文の言葉でいいかえる。',
    isWritten: true,
    rubricPoints: ['答えを待つ時間や場所であること', '考える力が育つこと', '40字以内であること'],
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_25',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n筆者が「分からなさの種類を見分けること」が大切だと考える理由として最も適切なものを選びなさい。',
    answer: '見分けられれば、答えを急ぐ社会の中でも、自分のペースで考えることができるようになるから。',
    choices: ['見分けられれば、答えを急ぐ社会の中でも、自分のペースで考えることができるようになるから。', '見分けられれば、すべての問題をすぐに解けるようになるから。', '見分けられれば、他人に答えを聞かなくてもよくなるから。', '見分けられれば、基礎的な知識を学ぶ必要がなくなるから。'],
    passage: P_4,
    hint: '最終段落の最後の文に注目。',
    explanation: `【何を聞かれているか】
筆者が結論で述べている理由を探します。

【なぜそうなるのか】
最終段落の最後の文で、「この見分けがつくようになったとき、私たちは、答えを急ぐ社会の中でも、自分のペースで考えることができる」と述べています。

【ステップ1】最終段落の最後の文を読む。
【ステップ2】見分けがつく → 自分のペースで考えられる。
【ステップ3】この内容が理由。

【答え】見分けられれば、答えを急ぐ社会の中でも、自分のペースで考えることができるようになるから。

【確かめ】1番目が最終文と一致。

【よくあるまちがい】「すべてすぐに解ける」を選ぶ。本文にない内容。`,
    pitfall: '結論の段落の最後に、理由がまとめてある。',
    memoryTip: '最後の一文は、筆者の最終的な主張。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_26',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n本文の内容と合致するものを選びなさい。',
    answer: '答えをすぐに調べられる時代だからこそ、分からない状態にとどまる価値を考える必要がある。',
    choices: ['答えをすぐに調べられる時代だからこそ、分からない状態にとどまる価値を考える必要がある。', '調べればすぐに答えが分かる現代では、分からないことは存在しない。', '数学の問題は、答えを先に見たほうが、必ず力がつく。', '基礎知識の不足による分からなさも、時間をかけて熟成させるべきだ。'],
    passage: P_4,
    hint: '第1段落の最初の3文を読み直す。',
    explanation: `【何を聞かれているか】
本文と合うものを選びます。

【なぜそうなるのか】
選択肢を1つずつ本文と照らします。第1段落は、「答えがすぐ出る時代」だからこそ、「分からない状態にとどまる価値」を問うています。

【ステップ1】1番目：第1段落と一致。
【ステップ2】2番目：「分からないことは存在しない」とは書いていない。
【ステップ3】3番目：「必ず」は言いすぎ。
【ステップ4】4番目：基礎知識の不足による分からなさは、早く解消すべきとある。

【答え】答えをすぐに調べられる時代だからこそ、分からない状態にとどまる価値を考える必要がある。

【確かめ】1番目が本文と合う。

【よくあるまちがい】「必ず」「すべて」「存在しない」のような強い言葉の選択肢を選ぶ。`,
    pitfall: '強い断定の言葉（必ず・すべて）は、まちがいに多い。',
    memoryTip: '内容合致は、本文の根拠を探す。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_27',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「その動きが、いつもより少しだけ長く思えた」から読み取れる拓海の様子として、最も適切なものを選びなさい。',
    answer: '失敗を重ねるぼくの様子を気にして、気持ちが落ち着かない様子。',
    choices: ['失敗を重ねるぼくの様子を気にして、気持ちが落ち着かない様子。', '練習に飽きて、早く終わりたいと思っている様子。', '靴のひもが切れて、練習できなくなって困っている様子。', '自分のミスをかくそうとして、あわてている様子。'],
    passage: P_5,
    hint: '「ひもを結び直す」という動作に、どんな気持ちがあらわれているか。',
    explanation: `【何を聞かれているか】
動作から、登場人物の気持ちを読み取ります。

【なぜそうなるのか】
登場人物の気持ちは、動作や様子にあらわれます。拓海は、ぼくがバトンを三度落としたあと、ひもを結び直しています。その動作が「少し長い」のは、ぼくのことを気にして落ち着かない気持ちがあるからと考えられます。

【ステップ1】場面は、ぼくがバトンを三度落としたあと。
【ステップ2】拓海は、スパイクのひもを結び直している。
【ステップ3】動きが長い＝ぼくを気にして落ち着かない様子。

【答え】失敗を重ねるぼくの様子を気にして、気持ちが落ち着かない様子。

【確かめ】1番目が場面と合う。

【よくあるまちがい】「練習に飽きている」を選ぶ。ほかの場面と合いません。`,
    pitfall: '動作は、気持ちの手がかり。',
    memoryTip: '動作の描写から、気持ちを読み取る。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_28',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「ごめん。」と拓海が言ったのはなぜか。最も適切なものを選びなさい。',
    answer: '本当は自分のせいではないが、失敗が続くぼくをかばい、責任を引き受けようとしたから。',
    choices: ['本当は自分のせいではないが、失敗が続くぼくをかばい、責任を引き受けようとしたから。', '自分が走り出すのが早かったことが、実際に失敗の原因だったから。', 'ぼくに腹を立てていることを、遠回しに伝えたかったから。', '先生に注意されるのが怖くて、先に謝ってしまおうと思ったから。'],
    passage: P_5,
    hint: 'このあとの拓海の言葉と、「それは、うそだった」に注目。',
    explanation: `【何を聞かれているか】
登場人物のせりふの理由を、前後から読み取ります。

【なぜそうなるのか】
拓海は「おれが、走り出すのが早かった」と言いますが、そのあとに「それは、うそだった」と書かれています。つまり、ぼくをかばうための言葉だったと分かります。

【ステップ1】拓海は「おれが走り出すのが早かった」と言う。
【ステップ2】直後に「それは、うそだった」とある。
【ステップ3】うそをついてまで、ぼくをかばおうとした。

【答え】本当は自分のせいではないが、失敗が続くぼくをかばい、責任を引き受けようとしたから。

【確かめ】1番目が、うそをついた理由と合う。

【よくあるまちがい】「実際の原因だった」を選ぶ。直後の「うそだった」と合いません。`,
    pitfall: 'せりふのあとの説明に、理由がある。',
    memoryTip: '「それは、うそだった」は大きな手がかり。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_29',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「それは、うそだった。」とあるが、ぼくがそう判断したのはなぜか。最も適切なものを選びなさい。',
    answer: '走り出す位置を決めたのは先生とぼくで、拓海はその通りに動いていただけだったから。',
    choices: ['走り出す位置を決めたのは先生とぼくで、拓海はその通りに動いていただけだったから。', '拓海がいつも、正直にものを言わない性格だと知っていたから。', '拓海の顔つきを見て、本当は怒っているのが分かったから。', '先生が、拓海のせいではないと言っていたから。'],
    passage: P_5,
    hint: '傍線部の直後の文を読む。',
    explanation: `【何を聞かれているか】
判断の根拠を、本文から探します。

【なぜそうなるのか】
傍線部の直後に、理由が書かれています。「走り出す位置を決めたのは、先生とぼくで、拓海はそのとおりに動いていただけだ」とあります。

【ステップ1】傍線部の直後の文を読む。
【ステップ2】位置を決めたのは先生とぼく。
【ステップ3】拓海は、そのとおりに動いていただけ。

【答え】走り出す位置を決めたのは先生とぼくで、拓海はその通りに動いていただけだったから。

【確かめ】1番目が、本文の言葉と一致。

【よくあるまちがい】「拓海はいつもうそをつく」を選ぶ。そのような記述はありません。`,
    pitfall: '判断の理由は、直後に書かれることが多い。',
    memoryTip: '本文の事実から、理由をまとめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_30',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「バトンは、渡すものではなく、渡し合うものなのだ」とあるが、ぼくがそのように思ったのはなぜか。60字以内で説明しなさい。（句読点も1字に数える）',
    answer: '失敗の責任を引き受け合う拓海とのやりとりを通して、バトンは二人の呼吸が合って成り立つと気づいたから。',
    passage: P_5,
    hint: '拓海とぼくが、おたがいに責任を引き受けようとした場面を使う。',
    explanation: `【何を聞かれているか】
「渡す」と「渡し合う」の違いを、場面と合わせて説明します。

【なぜそうなるのか】
「渡す」は一方的、「渡し合う」は、二人でおたがいに働きかけることです。拓海もぼくも、「自分のせい」と言い合ったことで、二人の呼吸が合ってはじめてバトンが成り立つと気づいたのです。

【ステップ1】場面：拓海が「おれが」と責任を引き受け、ぼくも「おれが」と言う。
【ステップ2】おたがいに相手を思いやる。
【ステップ3】一人だけでは成り立たない。二人の呼吸で成り立つ。
【ステップ4】60字以内にまとめる。

【答え】失敗の責任を引き受け合う拓海とのやりとりを通して、バトンは二人の呼吸が合って成り立つと気づいたから。

【確かめ】解答の字数を数える。

【よくあるまちがい】「拓海に悪いことをしたから」だけで終わる。気づきの内容まで書きます。`,
    pitfall: '「渡す」「渡し合う」の違いを意識する。',
    memoryTip: '傍線部の比喩を、場面の具体的な出来事と結びつける。',
    isWritten: true,
    rubricPoints: ['拓海とのやりとり（おたがいに責任を引き受け合う）に触れている', 'バトンは一人ではなく二人の呼吸で成り立つという気づきが書けている', '60字以内であること'],
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_31',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n本文の表現の特徴として最も適切なものを選びなさい。',
    answer: '「乾いた音」「かたく結んだくちびる」など、音や身体の描写で、登場人物の心情を間接的に表している。',
    choices: ['「乾いた音」「かたく結んだくちびる」など、音や身体の描写で、登場人物の心情を間接的に表している。', '登場人物の心の中を、「〜と思った」の形で、すべて直接説明している。', '過去の出来事と現在の出来事を、交互に入れかえて語っている。', '擬人法を多用して、グラウンドの様子を華やかに描いている。'],
    passage: P_5,
    hint: '心情を直接言っている文と、動作・音で表している文の両方がある。',
    explanation: `【何を聞かれているか】
表現の特徴を、具体例を探して選びます。

【なぜそうなるのか】
本文には、「乾いた音がグラウンドに響いた」「かたく結んだくちびるが、少しふるえている」のように、音や身体の様子で気持ちを伝える表現があります。

【ステップ1】「乾いた音」は、気まずい雰囲気を表す。
【ステップ2】「かたく結んだくちびる」は、拓海の緊張や悔しさを表す。
【ステップ3】音や身体の描写で、心情を間接的に表現している。

【答え】「乾いた音」「かたく結んだくちびる」など、音や身体の描写で、登場人物の心情を間接的に表している。

【確かめ】1番目が、本文の具体例と合う。

【よくあるまちがい】「すべて直接説明している」を選ぶ。本文は、動作の描写が中心です。`,
    pitfall: '表現の特徴は、具体例をさがす。',
    memoryTip: '「すべて」「多用」は、言い過ぎのことが多い。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_32',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「景色は、ただ通りすぎるものになってしまう」とあるが、なぜか。最も適切なものを選びなさい。',
    answer: '指示にしたがうだけでは、自分で考えて道を選ぶ機会がなく、景色を手がかりとして意識しないから。',
    choices: ['指示にしたがうだけでは、自分で考えて道を選ぶ機会がなく、景色を手がかりとして意識しないから。', '地図アプリの画面が見づらく、周りを見る余裕がなくなるから。', '初めての町では、景色がどれも同じに見えるから。', '便利な道具が嫌いで、景色を見ないようにしているから。'],
    passage: P_6,
    hint: '直前の文と、第2段落の最初の文に注目。',
    explanation: `【何を聞かれているか】
傍線部の理由を、前の文から探します。

【なぜそうなるのか】
前の文では、「自分で地図を読み、あの角を曲がるのか…と考えながら歩けば、周りの景色が手がかりとして頭に残る」と述べています。逆に、指示だけに頼ると、考える機会がなく、景色が手がかりにならないのです。

【ステップ1】第2段落の2文目を読む。
【ステップ2】自分で考えて歩く → 景色が手がかりとして残る。
【ステップ3】指示だけに頼る → 景色が手がかりにならない。

【答え】指示にしたがうだけでは、自分で考えて道を選ぶ機会がなく、景色を手がかりとして意識しないから。

【確かめ】1番目が、本文の対比と合う。

【よくあるまちがい】「画面が見づらいから」を選ぶ。本文にない理由。`,
    pitfall: '「〜ところが」のあとが、傍線部の理由。',
    memoryTip: '対比（自分で選ぶ／指示だけ）に注目。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_33',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n第3段落で述べられている、筆者の道具に対する考えとして最も適切なものを選びなさい。',
    answer: '道具を使うこと自体は悪くないが、考える部分まで任せてしまうことが問題だと考えている。',
    choices: ['道具を使うこと自体は悪くないが、考える部分まで任せてしまうことが問題だと考えている。', '道具は人間の力を弱めるので、使うべきではないと考えている。', '道具は便利なので、できるだけ多くのことを任せるべきだと考えている。', '道具を使うかどうかは、個人の自由であり、考える必要はないと考えている。'],
    passage: P_6,
    hint: '「だからといって」のあとに注目。',
    explanation: `【何を聞かれているか】
筆者の考えを、段落から読み取ります。

【なぜそうなるのか】
第3段落は、「便利な道具をしりぞけるべきだという話ではない」「使うこと自体が悪いのではない」と述べたあと、「問題は、道具が考える部分まで肩代わりしてしまったとき」と続けています。

【ステップ1】「しりぞけるべきではない」＝道具を使うのは悪くない。
【ステップ2】「問題は〜」のあとに、本当に言いたいことがある。
【ステップ3】考える部分まで任せてしまうことが問題。

【答え】道具を使うこと自体は悪くないが、考える部分まで任せてしまうことが問題だと考えている。

【確かめ】1番目が、本文と一致。

【よくあるまちがい】「使うべきではない」を選ぶ。直前で否定されています。`,
    pitfall: '「だからといって〜ではない」のあとに、主張が来る。',
    memoryTip: '「問題は」「大切なのは」は、主張の合図。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_34',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「その選択に自覚的であること」とあるが、どういうことか。45字以内で説明しなさい。（句読点も1字に数える）',
    answer: '何を道具に任せ、何を自分で考えるかを、意識して決めること。',
    passage: P_6,
    hint: '「その選択」は、前の文の何を指すか。',
    explanation: `【何を聞かれているか】
指示語「その」の内容を押さえて、言いかえます。

【なぜそうなるのか】
「その選択」は、前の文の「何を任せ、何を自分でやるか」を選ぶことです。「自覚的であること」は、意識して行うことです。この2つを合わせます。

【ステップ1】「その」の指す内容は「何を任せ、何を自分でやるか」。
【ステップ2】「自覚的」は「意識して」。
【ステップ3】合わせて「何を任せ何を自分で考えるかを意識して決める」。

【答え】何を道具に任せ、何を自分で考えるかを、意識して決めること。

【確かめ】45字以内か数える。

【よくあるまちがい】「便利さを意識する」と、ずれた説明になる。`,
    pitfall: '指示語は、前の文から探す。',
    memoryTip: '「自覚的」を、「意識して」と言いかえる。',
    isWritten: true,
    rubricPoints: ['「何を任せ、何を自分でやるか（考えるか）」という内容が書けている', '「意識して」「自覚して」の意味が書けている', '45字以内であること'],
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_35',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n本文の構成の説明として最も適切なものを選びなさい。',
    answer: '具体例を示し、その原因を説明したあと、予想される反論に触れて、最後に主張をまとめている。',
    choices: ['具体例を示し、その原因を説明したあと、予想される反論に触れて、最後に主張をまとめている。', '主張を最初に述べ、そのあとは同じ内容を言い換えてくり返している。', '二つの対立する意見を紹介し、どちらも正しくないと結論づけている。', '過去の歴史をたどり、現在の問題を取り上げずに終わっている。'],
    passage: P_6,
    hint: '各段落の役割を、1段落ずつ確かめる。',
    explanation: `【何を聞かれているか】
各段落の役割から、構成をまとめます。

【なぜそうなるのか】
第1段落は具体例（地図アプリの例）、第2段落はその原因の説明、第3段落は「だからといって〜ではない」という予想される反論への配慮、第4段落が筆者の主張のまとめです。

【ステップ1】第1段落：地図アプリの具体例。
【ステップ2】第2段落：原因（選んで歩いたか／歩かされたか）。
【ステップ3】第3段落：「だからといって」＝予想される反論。
【ステップ4】第4段落：主張のまとめ。

【答え】具体例を示し、その原因を説明したあと、予想される反論に触れて、最後に主張をまとめている。

【確かめ】1番目が、4つの段落の役割と一致。

【よくあるまちがい】「二つの対立する意見」を選ぶ。本文は、対立する意見を並べていません。`,
    pitfall: '段落ごとの役割をメモして、構成をまとめる。',
    memoryTip: '「だからといって」は、反論への配慮の合図。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_36',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n本文で述べられている筆者の主張として、最も適切なものを選びなさい。',
    answer: '便利さの中で自分の力を失わないためには、何を任せ何を自分でやるかを自覚して選ぶことが大切だ。',
    choices: ['便利さの中で自分の力を失わないためには、何を任せ何を自分でやるかを自覚して選ぶことが大切だ。', '地図アプリを使うと、必ず道を覚えられなくなる。', '初めての町では、地図アプリを使うべきではない。', '道具は人間の力を補うものなので、考える部分も任せたほうがよい。'],
    passage: P_6,
    hint: '最終段落が、筆者の最終的な主張。',
    explanation: `【何を聞かれているか】
筆者の主張を選びます。

【なぜそうなるのか】
最終段落に、「何を任せ、何を自分でやるかを選ぶ」「その選択に自覚的であること。それが、便利さの中で、自分の力を失わないための、最初の一歩」と述べられています。

【ステップ1】最終段落を読む。
【ステップ2】「何を任せ、何を自分でやるか」を選ぶ。
【ステップ3】自覚的であることが、自分の力を失わないための一歩。

【答え】便利さの中で自分の力を失わないためには、何を任せ何を自分でやるかを自覚して選ぶことが大切だ。

【確かめ】1番目が最終段落と一致。

【よくあるまちがい】「地図アプリは使うべきではない」を選ぶ。第3段落で否定されています。`,
    pitfall: '主張は、最終段落に書かれることが多い。',
    memoryTip: '主張と、具体例を区別する。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_37',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「その傘は、そこにある」の表現の説明として最も適切なものを選びなさい。',
    answer: '傘が長い間変わらずそこに置かれ続けているようすを強調している。',
    choices: ['傘が長い間変わらずそこに置かれ続けているようすを強調している。', '晴れの日と雨の日で傘の価値が変わることを示している。', '持ち主が毎日、傘を取りに来ていることを示している。', '傘が自分で動いて場所を変えていることを示している。'],
    passage: P_7,
    hint: '直前に「晴れの日が続いても、雨の日がきても」とある。',
    explanation: `【何を聞かれているか】
表現の効果を、前後の文から考えます。

【なぜそうなるのか】
「晴れの日が続いても、雨の日がきても」と、天気が変わっても、傘は変わらずそこにあります。この繰り返しが、傘がそこに置かれ続けていることを強調しています。

【ステップ1】前の文：晴れの日も雨の日も。
【ステップ2】「その傘は、そこにある」と、短く言い切っている。
【ステップ3】変わらずあり続けることを強調。

【答え】傘が長い間変わらずそこに置かれ続けているようすを強調している。

【確かめ】1番目が前後の文と合う。

【よくあるまちがい】「持ち主が毎日取りに来ている」を選ぶ。本文と矛盾します。`,
    pitfall: '前後の文との関係で表現を読む。',
    memoryTip: '短い言い切りは、強調の効果。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_38',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'standard',
    question: '次の文章を読んで、あとの問いに答えなさい。\n老人がしたこととして、本文の内容に合うものを選びなさい。',
    answer: '老人は、曲がった骨を指で押し戻して、傘を元の場所に戻した。',
    choices: ['老人は、曲がった骨を指で押し戻して、傘を元の場所に戻した。', '老人は、傘を持ち去って、自分のものにした。', '老人は、その傘を開いて、雨の中を歩いていった。', '老人は、傘の持ち主を探して、駅員にたずねた。'],
    passage: P_7,
    hint: '第2段落をていねいに読む。',
    explanation: `【何を聞かれているか】
本文の内容と合うものを選びます。

【なぜそうなるのか】
第2段落に、老人は「曲がった骨を指で押し戻し、しばらく眺めてから、元の場所にそっと戻した」と書かれています。

【ステップ1】1番目：第2段落と一致。
【ステップ2】2番目：持ち去ってはいない。
【ステップ3】3番目：開いたのは自分の傘。
【ステップ4】4番目：駅員にたずねてはいない。

【答え】老人は、曲がった骨を指で押し戻して、傘を元の場所に戻した。

【確かめ】1番目が本文と合う。

【よくあるまちがい】「傘を開いて雨の中を歩いた」を選ぶ。開いたのは老人自身の傘です。`,
    pitfall: '選択肢の「だれの傘か」に注意。',
    memoryTip: '内容合致は、「だれが」「何を」を確かめる。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_39',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n傍線部「ひとつだけ変わっていた」とあるが、何が変わっていたのか。最も適切なものを選びなさい。',
    answer: '曲がっていた傘の骨が、まっすぐになっていたこと。',
    choices: ['曲がっていた傘の骨が、まっすぐになっていたこと。', '傘が別の場所に置かれていたこと。', '傘のビニールが新しくなっていたこと。', '傘立てが新しくなっていたこと。'],
    passage: P_7,
    hint: '傍線部の直後の文を読む。',
    explanation: `【何を聞かれているか】
傍線部の指す内容を、直後から探します。

【なぜそうなるのか】
傍線部の直後に「曲がっていた骨が、まっすぐになっていたことだった」と書かれています。

【ステップ1】傍線部「ひとつだけ変わっていたのは」の続きを読む。
【ステップ2】「曲がっていた骨が、まっすぐになっていたこと」とある。
【ステップ3】これが答え。

【答え】曲がっていた傘の骨が、まっすぐになっていたこと。

【確かめ】1番目が本文と一致。

【よくあるまちがい】「別の場所に置かれていた」を選ぶ。直前に「変わらずそこに立っていた」とあります。`,
    pitfall: '「〜のは、…ことだった」の形は、答えが直後にある。',
    memoryTip: '指示は直後から探す。',
    examFrequency: 'high',
  },
  {
    id: 'honshiken_school_koko_shibumaku_kokugo_40',
    subject: 'kokugo',
    examType: 'koko',
    course: 'koko-shibumaku',
    difficulty: 'advanced',
    question: '次の文章を読んで、あとの問いに答えなさい。\n最後の2文「私は、あの傘を見るたびに、その問いを思い出す。答えは、まだ出ていない。」に込められた筆者の気持ちとして最も適切なものを選びなさい。',
    answer: '他人のものに手を貸してよいかという問いには、簡単に答えを出せないという、筆者の迷いを表している。',
    choices: ['他人のものに手を貸してよいかという問いには、簡単に答えを出せないという、筆者の迷いを表している。', '老人の行動が、まちがっていたことを断定している。', '傘を放置した持ち主を、厳しく批判している。', '親切な行いは、必ずすべきだと主張している。'],
    passage: P_7,
    hint: '直前の問い「どこまで手を貸してよいのだろうか」に注目。',
    explanation: `【何を聞かれているか】
末尾の表現から、筆者の気持ちを読み取ります。

【なぜそうなるのか】
筆者は、「自分のものでないものに、どこまで手を貸してよいのか」と問いを立て、「答えは、まだ出ていない」と結んでいます。断定せず、迷いを残した終わり方です。

【ステップ1】「問い」は、「どこまで手を貸してよいのか」。
【ステップ2】「答えは、まだ出ていない」は、迷いを表す。
【ステップ3】断定ではなく、考え続けている気持ち。

【答え】他人のものに手を貸してよいかという問いには、簡単に答えを出せないという、筆者の迷いを表している。

【確かめ】1番目が、迷いと合う。

【よくあるまちがい】「老人の行動はまちがいだ」を選ぶ。筆者は老人を非難していません。`,
    pitfall: '「まだ出ていない」＝結論が出ていない。',
    memoryTip: '余韻のある終わり方は、迷いや問いを残す。',
    examFrequency: 'high',
  },
];
