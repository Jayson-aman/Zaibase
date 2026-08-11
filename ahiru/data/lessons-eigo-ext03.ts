import type { Lesson } from './lesson-types';

// 中学受験 英語「名詞・冠詞・代名詞と単数複数」拡張ユニット（35セッション：eigo_s081〜eigo_s115）
// order は 581〜615。
// 構成：可算・不可算の区別(5)／複数形のつくり方(5)／不可算名詞の数え方(4)／
//       冠詞 a・an の使い分け(4)／the と無冠詞(5)／人称代名詞の格変化(5)／
//       再帰・指示・不定代名詞(4)／集合名詞・固有名詞(3)
// 図解は lesson-figs-eigo-ext03.ts（35課中14課）。分類の割合・2軸の整理・語順など、
// 図にすることで本当に理解が進む箇所にだけ付けてある。
export const eigoExt03Lessons: Lesson[] = [
  // ───────────────── 1. 可算名詞と不可算名詞（s081〜s085） ─────────────────
  {
    id: 'eigo_s081',
    subject: 'eigo',
    examType: 'chugaku',
    title: '名詞の基本①：数えられる名詞と数えられない名詞',
    description: '英語の名詞が可算・不可算の二種類に分かれることと、それぞれの書き方の約束を身につける',
    intro: '「かばんを持っています」を I have bag. と言うと、英語ではひどく不自然に聞こえます。a を付けるか複数形にするかを、必ず決めなければならないからです。日本語は数を言わずに済む言語、英語は数を言わずにいられない言語なのです。',
    order: 581,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '名詞＝人・物・ことがらの名前を表す語。英語では「数えられる名詞（可算名詞）」と「数えられない名詞（不可算名詞）」に分かれる。',
      '可算名詞の単数は、裸で置かない。a / an / the / my などを必ず前に付ける（× I have bag.）。',
      '可算名詞が2つ以上のときは複数形にする（two books）。',
      '不可算名詞は a / an を付けず、複数形にもしない（× a water／× waters）。',
      '不可算名詞は単数あつかい。Water is important. のように動詞は is・was になる。',
      '「決まった形があって1つ2つと切り分けられるか」が、数えられるかどうかの判断の目安。',
    ],
    sections: [
      {
        heading: '英語の名詞には二種類ある',
        body: `日本語で「本」「水」「宿題」と言うとき、私たちは形をあまり気にしない。「本が3つ」も「水が3つ」も、言い方としては同じ形で作れてしまう。ところが英語では、名詞をまず二つのグループに分けてから使う。

■ 数えられる名詞（可算名詞）
1つ・2つと数えられるもの。はっきりした形や輪かくがあり、半分に切ったらもうそれとは呼べなくなるものが多い。
例）book（本）／apple（りんご）／dog（犬）／pen（ペン）／cup（コップ）／friend（友達）

■ 数えられない名詞（不可算名詞）
1つ・2つと数えられないもの。決まった形がなく、いくら分けても同じ名前で呼べるもの、また目に見えないことがらが多い。
例）water（水）／milk（牛乳）／bread（パン）／money（お金）／music（音楽）／love（愛）

■ 見分けるときの目安
①決まった形があるか。りんごは形が決まっている（可算）。水はコップに入れれば丸く、皿に入れれば平たくなる（不可算）。
②半分にしても同じ名前で呼べるか。本を半分にしたら本ではないが、水を半分にしてもやはり水である。半分にしても同じ名前なら不可算。
③目に見えるか。music・time・peace・information のような目に見えないことがらは、ふつう不可算。

★ ポイント：英語では名詞を書くたびに「これは数えられる方か、数えられない方か」を必ず考える。この一手間をおろそかにすると、a を付け忘れたり、付けてはいけない a を付けたりする誤りが一生なおらない。`,
      },
      {
        heading: '可算名詞の三つの約束',
        body: `数えられる名詞には、守らなければならない約束が三つある。

■ 約束①　単数は裸で置かない
1つのときは、前に a / an を付ける（初めて話に出すとき）。すでに話に出ていて「あの〜」と特定できるときは the を付ける。my / your / this などが付く場合はそれで十分。
例）I have a bag.（かばんを1つ持っている）
例）This is my bag.（これは私のかばんです）
⚠ 注意：× I have bag. は英語として成り立たない。日本語には冠詞がないので、日本人がいちばん多くまちがえるところである。

■ 約束②　2つ以上なら複数形にする
例）I have two bags.／I have many books.／There are three apples on the table.
数字・many・some・these などが前に来たら、後ろの名詞は複数形になっているかを必ず見直す。

■ 約束③　単数か複数かで動詞の形が変わる
例）This book is new.／These books are new.
例）A dog runs fast.（犬というものは速く走る）／Dogs run fast.

★ ポイント：可算名詞は「a か、複数形か」のどちらかになる、と覚えるとよい。裸の単数が残っていたら、ほぼ書きまちがいである。`,
      },
      {
        heading: '不可算名詞の三つの約束',
        body: `数えられない名詞にも、逆向きの約束が三つある。

■ 約束①　a / an を付けない
例）I like music.（× I like a music.）
例）We need water.（× We need a water.）

■ 約束②　複数形にしない
例）I have homework today.（× two homeworks）
「たくさんある」と言いたいときは much や a lot of を使う。
例）I have a lot of homework.／There is much snow in Hokkaido.

■ 約束③　いつも単数あつかい
例）Water is important for our life.（× Water are ...）
例）This information is very useful.

■ どうしても数を言いたいときは
「入れ物」や「かたまり」を表すことばを借りて数える。
例）a glass of water（コップ1ぱいの水）／a cup of coffee（カップ1ぱいのコーヒー）／a piece of paper（紙1枚）
このやり方はあとのセッションでくわしく学ぶ。

⚠ 注意：不可算名詞は the が付くことはある。the water in this bottle（このびんの中の水）のように「どの水か」が決まる場合である。付けられないのは a / an だけだと整理しておく。`,
        figureId: 'lf_eigoext03_081',
      },
    ],
    trapExamples: [
      {
        question: '「私はかばんを持っています。」を英語にしなさい。',
        wrongAnswer: 'I have bag.',
        trapExplanation:
          '日本語の「かばん」には a にあたる語がないので、そのまま単語を並べて bag と書いてしまう。日本語に冠詞がないことから来る、日本人にいちばん多い誤り。',
        correctAnswer: 'I have a bag.',
        correctExplanation:
          'bag は数えられる名詞なので、1つのときは a を付ける。数えられる名詞の単数を裸で置くことはできない。「a か、複数形か」のどちらかになるという原則で必ず見直す。two bags なら複数形にする。',
      },
      {
        question: '（　）に is か are を入れなさい。　Water （　） important for our life.',
        wrongAnswer: 'are',
        trapExplanation:
          '「水」はたくさんあるイメージなので、複数だと考えて are を選んでしまう。日本語では水を単数・複数で区別しないため、量が多い＝複数と思いこみやすい。',
        correctAnswer: 'is',
        correctExplanation:
          'water は数えられない名詞なので、量がどれだけ多くても単数あつかいになり、動詞は is を使う。同じように Money is important. / This information is useful. も単数あつかい。数えられない名詞は複数形にならないので、are が来ることはない。',
      },
    ],
  },

  {
    id: 'eigo_s082',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数えられない名詞の四つのグループ',
    description: '物質・抽象・固有・まとめて呼ぶ名詞という四つの型で、不可算名詞を整理して覚える',
    intro: 'water を「1つ、2つ」と数える人はいません。では music はどうでしょうか。目に見えないものも数えられないのです。数えられない名詞は4つの型に分けられます。型で覚えると、a を付けるかどうかで迷わなくなります。',
    order: 582,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '不可算名詞は大きく「物質名詞」「抽象名詞」「固有名詞」「まとめて呼ぶ名詞」の四つに分けられる。',
      '物質名詞＝water, milk, bread, rice, paper, money, air, snow など、切っても同じ名前で呼べるもの。',
      '抽象名詞＝music, love, peace, time, work, health, luck など、目に見えないことがら。',
      '固有名詞＝Japan, Tokyo, Ken など、世界に一つしかない名前。a も複数形も付けない。',
      'まとめて呼ぶ名詞＝furniture（家具類）, baggage（荷物類）, food（食べ物）のように、いろいろな物をひとまとめにした言い方。',
      '「a を付けたくなったら、その語がこの四つのどれかでないか」を確かめる習慣をつける。',
    ],
    sections: [
      {
        heading: '四つの型に分けて覚える',
        body: `不可算名詞は一つひとつ覚えるときりがない。次の四つの型に分けると、初めて見る単語でも見当がつくようになる。

■ ①物質名詞（材料・液体・こな・かたまり）
決まった形がなく、分けても同じ名前で呼べるもの。
例）water（水）／milk（牛乳）／juice（ジュース）／bread（パン）／rice（米・ごはん）／meat（肉）／cheese（チーズ）／sugar（砂糖）／salt（塩）／paper（紙）／glass（ガラス）／wood（木材）／iron（鉄）／money（お金）／air（空気）／snow（雪）／rain（雨）

■ ②抽象名詞（目に見えないことがら）
気持ち・考え・状態など、手でさわれないもの。
例）music（音楽）／art（芸術）／love（愛）／peace（平和）／time（時間）／work（仕事）／health（健康）／luck（運）／fun（楽しみ）／help（助け）／advice（助言）／information（情報）／news（知らせ）

■ ③固有名詞（世界に一つの名前）
例）Japan／Tokyo／Ken／Monday／April／Mt. Fuji
必ず大文字で書き始め、ふつう a も複数形も付けない。

■ ④まとめて呼ぶ名詞
いろいろな種類の物を、ひとまとめにして呼ぶ言い方。
例）furniture（つくえ・いす・たななどをまとめた「家具類」）／baggage・luggage（かばん類）／food（食べ物）／clothing（衣類）／equipment（用具類）

★ ポイント：④は「1つ2つ数えられそうなのに数えられない」ので、入試でとくにねらわれる。furniture を furnitures とは書かない。`,
      },
      {
        heading: '不可算名詞をふくむ文の作り方',
        body: `不可算名詞は a も複数形も使えないので、量を表したいときは次のことばを借りる。

■ 量を表すことば
much（たくさんの）／a lot of・lots of（たくさんの）／some（いくらかの）／a little（少しの）／little（ほとんどない）／no（まったくない）
例）I have a lot of homework today.（今日は宿題がたくさんある）
例）There is a little milk in the glass.（コップに牛乳が少し入っている）
例）We had no rain last month.（先月は雨がまったく降らなかった）

■ 「どのくらい？」とたずねるとき
数をたずねる How many〜? ではなく、量をたずねる How much〜? を使う。
例）How much water do you drink every day?（毎日どのくらい水を飲みますか）
例）How much time do we have?（時間はどのくらいありますか）

■ 動詞は必ず単数あつかい
例）Music is my favorite subject.（音楽は私の好きな教科です）
例）Some water was left in the bottle.（びんに水が少し残っていた）

⚠ 注意：some は肯定文で可算・不可算のどちらにも使える便利な語である。よくわからないときにとりあえず some を置くと、まちがいを大きく減らせる。I want some bread.（パンがほしい）は、a bread と書くより安全で自然。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はパンを食べたい。」を英語にしなさい。',
        wrongAnswer: 'I want to eat a bread.',
        trapExplanation:
          '日本語で「パンを1つ」と数えられる気がするので、つい a を付けてしまう。実際に目にするパンは形があるため、数えられる物だと感じてしまうのが原因。',
        correctAnswer: 'I want to eat some bread.（1切れなら a piece of bread / a slice of bread）',
        correctExplanation:
          'bread は「パンという材料・食べ物」を表す物質名詞なので、a も複数形も付けられない。量を言いたいときは some を使い、1切れなら a slice of bread、ひとかたまりなら a loaf of bread のように単位のことばを借りる。同じ理由で cheese, meat, rice も不可算。',
      },
      {
        question: '「私は音楽が好きです。」を英語にしなさい。',
        wrongAnswer: 'I like a music.',
        trapExplanation:
          '「〜が好きです」の形をおぼえるときに I like a dog. のような例文で練習するため、名詞の前にはいつも a を置くものだと思いこんでしまう。',
        correctAnswer: 'I like music.',
        correctExplanation:
          'music は目に見えないことがらを表す抽象名詞なので、a を付けず、複数形にもしない。同じく I like art. / I want peace. / We need help. も冠詞なしで使う。なお I like dogs. のように数えられる名詞で「〜というものが好き」と言うときは、a dog ではなく複数形にするのがふつう。',
      },
    ],
  },

  {
    id: 'eigo_s083',
    subject: 'eigo',
    examType: 'chugaku',
    title: '日本語の感覚とずれる不可算名詞',
    description: 'homework・information・advice など、日本語では数えられるのに英語では数えられない語をまとめて覚える',
    intro: '「宿題がたくさんある」を I have many homeworks. と書きたくなりますが、homework は数えられません。日本語では1つ2つと数えられるのに、英語では数えない。ここは知識の差がそのまま点差になるところです。',
    order: 583,
    studyPeriod: '小4',
    targetLevel: 'oyo',
    keyPoints: [
      '「1つ2つ数えられそうなのに数えられない」語が、入試ではいちばんねらわれる。',
      '代表格：homework（宿題）／information（情報）／advice（助言）／furniture（家具）／baggage・luggage（荷物）／news（知らせ）／work（仕事）／money（お金）／weather（天気）／traffic（交通）／fun（楽しみ）。',
      'news は -s で終わるが複数形ではない。単数あつかい（The news is true.）。',
      '数えたいときは a piece of を借りる（a piece of advice＝助言1つ／two pieces of information）。',
      'これらの語には many ではなく much / a lot of を使い、How many ではなく How much でたずねる。',
    ],
    sections: [
      {
        heading: 'まちがえやすい不可算名詞リスト',
        body: `日本語では「宿題が3つ」「情報を2つ」と平気で数えるのに、英語では数えられない語がある。理屈で考えるより、次のリストを丸暗記してしまうのが早い。

■ 必ず覚える11語
homework（宿題）／information（情報）／advice（助言・アドバイス）／furniture（家具）／baggage・luggage（荷物）／news（知らせ・ニュース）／work（仕事）／money（お金）／weather（天気）／traffic（交通・交通量）／fun（楽しみ）

例）I have a lot of homework today.（今日は宿題がたくさんある）
例）He gave me some good advice.（彼はよい助言をいくつかくれた）
例）There is too much traffic in this city.（この町は交通量が多すぎる）

■ なぜ数えられないのか
英語では、これらを「一つひとつの品物」ではなく「そういう種類のもの全体」としてとらえている。furniture はつくえ・いす・たなをまとめた呼び名なので、それ自体は1つ2つと数えない。数えたいときは a desk, two chairs のように具体的な語に言いかえるか、a piece of furniture（家具1点）と単位を借りる。

★ ポイント：日本語で「〜類」「〜というもの」と言いかえられる語は、英語では不可算になりやすい。「家具類」「荷物類」「情報というもの」と頭の中で言いかえてみるとよい。`,
      },
      {
        heading: 'money・news・work の注意点',
        body: `とくにまちがえやすい三語を、個別に確認しておく。

■ money（お金）
不可算。× many moneys とは言えない。
例）I don't have much money.（あまりお金がない）
例）He has a lot of money.（彼はお金をたくさん持っている）
※ 数えられるのは coin（硬貨）や bill（紙幣）のほう。two coins は正しい。

■ news（知らせ）
-s で終わっているが複数形ではない。単数あつかいになる。
例）The news was very sad.（その知らせはとても悲しかった）
例）I have good news for you.（よい知らせがあります）
※ 同じように、-s で終わるのに単数あつかいの語に mathematics（数学）がある。

■ work（仕事）
「仕事・労働」の意味では不可算。
例）I have a lot of work to do.（するべき仕事がたくさんある）
※ ただし「作品」の意味では数えられる。the works of Natsume Soseki（夏目漱石の作品）。
※ 「職・勤め口」と言いたいときは、数えられる語 job を使う。I found a good job.（よい仕事を見つけた）

⚠ 注意：these・many・数字が前にあるのに不可算名詞が来ていたら、そこがまちがい。× many homeworks／× two informations／× three advices。すべて much / a lot of / a piece of に直す。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は今日、宿題がたくさんある。」を英語にしなさい。',
        wrongAnswer: 'I have many homeworks today.',
        trapExplanation:
          '日本語では「宿題が3つ」と数えるので、複数形にして many を付けたくなる。プリントやページなど、目に見える形があることも思いこみを強めてしまう。',
        correctAnswer: 'I have a lot of homework today.（much homework も可）',
        correctExplanation:
          'homework は不可算名詞なので複数形にできず、many も使えない。量を表す a lot of / much を使い、名詞は homework のままにする。数えたいときは two pieces of homework のように単位を借りる。information, advice, furniture も同じ形で使う。',
      },
      {
        question: '（　）に is か are を入れなさい。　The news （　） true.',
        wrongAnswer: 'are',
        trapExplanation:
          '語尾が -s なので複数形だと考えて are を選んでしまう。「複数形は -s」という規則を覚えたばかりの人ほど引っかかりやすい。',
        correctAnswer: 'is',
        correctExplanation:
          'news はもともと -s のついた形で一語になっている不可算名詞で、複数形ではない。したがって単数あつかいで is を使う。The news was very sad. のように過去形でも was になる。同じ型の語に mathematics（数学）がある。',
      },
    ],
  },

  {
    id: 'eigo_s084',
    subject: 'eigo',
    examType: 'chugaku',
    title: '可算にも不可算にもなる名詞',
    description: 'glass・paper・chicken・room・time など、意味によって数え方が変わる語を区別する',
    intro: 'a glass は「コップ」、glass は「ガラス」。a paper は「新聞」、paper は「紙」。同じ語でも a が付くかどうかで意味が変わります。つまり冠詞は飾りではなく、意味そのものを運んでいるのです。',
    order: 584,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '同じつづりでも、意味が変われば数え方も変わる語がある。',
      'glass：ガラス（材料・不可算）／コップ（可算）。paper：紙（不可算）／新聞・答案（可算）。',
      'chicken：鶏肉（不可算）／にわとり（可算）。fish：魚肉（不可算）／魚（可算、複数形も fish）。',
      'room：余地・空間（不可算）／部屋（可算）。time：時間（不可算）／回数（可算）。',
      'light：光（不可算）／電灯（可算）。work：仕事（不可算）／作品（可算）。',
      '「材料・ぼんやりした全体」なら不可算、「形のある1つの品物」なら可算、と整理する。',
    ],
    sections: [
      {
        heading: '意味で数え方が変わる代表語',
        body: `英語には、同じつづりでありながら、意味によって可算にも不可算にもなる名詞がある。a が付いているかいないかで意味が変わってしまうので、読解でも作文でも重要になる。

■ glass
不可算＝ガラス（材料）。The window is made of glass.（窓はガラスでできている）
可算＝コップ。I drank a glass of milk.（コップ1ぱいの牛乳を飲んだ）
※ 複数形 glasses は「めがね」。My glasses are new.（私のめがねは新しい）

■ paper
不可算＝紙。I need some paper.（紙が少しいる）
可算＝新聞・答案・論文。I read a paper every morning.（毎朝新聞を読む）

■ chicken
不可算＝鶏肉。I ate chicken for dinner.（夕食に鶏肉を食べた）
可算＝にわとり。There are three chickens in the yard.（庭ににわとりが3羽いる）

■ room
不可算＝余地・空間。There is no room for my bag.（かばんを置く場所がない）
可算＝部屋。There are six rooms in this house.（この家には部屋が6つある）

■ time
不可算＝時間。I don't have time.（時間がない）
可算＝回数。I have been to Kyoto three times.（京都へ3回行ったことがある）

★ ポイント：材料やぼんやりした全体をさすときは不可算、切り取られた形のある1品をさすときは可算になる。`,
      },
      {
        heading: '意味のちがいが出る例文で確かめる',
        body: `a が付くかどうかで意味が変わる例を、対にして確かめておく。

■ light
Light travels very fast.（光はとても速く進む）＝不可算
Please turn on the light.（電灯をつけてください）＝可算

■ work
I have a lot of work today.（今日は仕事がたくさんある）＝不可算
This is a work of art.（これは一つの芸術作品だ）＝可算

■ fish
We had fish for lunch.（昼食に魚〈の身〉を食べた）＝不可算
I caught three fish in the river.（川で魚を3びきつかまえた）＝可算。ただし複数形も fish のまま。

■ hair
My hair is long.（髪が長い）＝不可算。頭全体の髪をまとめてさす。
There is a hair in my soup.（スープに髪の毛が1本入っている）＝可算。1本を取り出せば数えられる。

■ iron
This gate is made of iron.（この門は鉄でできている）＝不可算
My mother bought a new iron.（母は新しいアイロンを買った）＝可算

⚠ 注意：I ate a chicken. と書くと「にわとりを1羽まるごと食べた」という意味になってしまう。鶏肉なら I ate chicken. または I ate some chicken. とする。a の有無で意味が変わることを、笑い話ではなく文法として理解しておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は夕食に鶏肉を食べました。」を英語にしなさい。',
        wrongAnswer: 'I ate a chicken for dinner.',
        trapExplanation:
          '数えられる名詞の単数には a を付ける、という規則をおぼえた直後の人ほど、chicken にも機械的に a を付けてしまう。「1羽」と「肉」の区別が日本語では意識されないことも原因。',
        correctAnswer: 'I ate chicken for dinner.（I ate some chicken. も可）',
        correctExplanation:
          '「鶏肉」の意味の chicken は材料を表す不可算名詞なので、a を付けず複数形にもしない。a chicken と書くと「にわとり1羽」となり、生きた鳥をまるごと食べた意味になってしまう。fish も同じで、料理としての魚は We had fish. とする。',
      },
      {
        question: '「私は時間がありません。」を英語にしなさい。',
        wrongAnswer: 'I have no times.',
        trapExplanation:
          'three times（3回）という言い方を先に習っているため、time はいつも数えられる語だと思いこんで複数形にしてしまう。',
        correctAnswer: 'I have no time.',
        correctExplanation:
          '「時間」の意味の time は不可算名詞なので複数形にしない。数えられるのは「回数」の意味のときだけで、three times（3回）、many times（何度も）はこちらである。同じように room も「部屋」なら可算、「余地」なら不可算になる。',
      },
    ],
  },

  {
    id: 'eigo_s085',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数と量を表す語：many・much・few・little',
    description: '可算名詞と不可算名詞で使い分ける数量の語を、意味のちがいまで含めて整理する',
    intro: '「水がたくさん」を many water とは言えません。数えられる名詞には many、数えられない名詞には much を使うからです。さらに a few と few は、a があるかないかで意味がほぼ反対になります。',
    order: 585,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'many＋可算名詞の複数形（many books）／much＋不可算名詞（much water）。',
      'a lot of・lots of は可算・不可算のどちらにも使え、肯定文でよく使う。',
      'a few＋可算名詞の複数形＝「少しはある」／few＝「ほとんどない」。a の有無で意味が逆になる。',
      'a little＋不可算名詞＝「少しはある」／little＝「ほとんどない」。',
      '数をたずねるのは How many＋複数形、量をたずねるのは How much＋不可算名詞。',
      'much は否定文・疑問文で使うことが多く、肯定文ではふつう a lot of を使う。',
    ],
    sections: [
      {
        heading: '「多い」を表す語の使い分け',
        body: `「たくさんの」を表す語は、後ろに来る名詞が数えられるかどうかで変わる。

■ many＋数えられる名詞の複数形
例）I have many friends.（友達がたくさんいる）
例）There are many students in the gym.（体育館に生徒がたくさんいる）

■ much＋数えられない名詞
例）I don't have much money.（あまりお金がない）
例）Is there much snow in your town?（あなたの町は雪が多いですか）
⚠ 注意：much は否定文・疑問文で使うのがふつうで、肯定文で使うとかたい言い方になる。「たくさんある」と肯定文で言うときは a lot of を使う。

■ a lot of・lots of＋どちらでもよい
例）I have a lot of books.（本をたくさん持っている）
例）I have a lot of homework.（宿題がたくさんある）
迷ったら a lot of を使えば、可算・不可算のどちらでもまちがいにならない。

■ たずねるとき
数をたずねる：How many books do you have?（本を何冊持っていますか）
量をたずねる：How much water do you drink?（水をどのくらい飲みますか）
※ How much is this?（これはいくらですか）は値段をたずねる決まり文句。`,
        figureId: 'lf_eigoext03_085',
      },
      {
        heading: 'a few と few、a little と little',
        body: `「少し」を表す語は、a が付くかどうかで意味がほぼ逆になる。入試で最もねらわれる区別の一つである。

■ 数えられる名詞につくもの
a few＋複数形＝「少しはある（数が少しある）」…プラスの気持ち
few＋複数形＝「ほとんどない」…マイナスの気持ち
例）I have a few friends in Tokyo.（東京に友達が数人いる）
例）I have few friends in Tokyo.（東京にはほとんど友達がいない）

■ 数えられない名詞につくもの
a little＋不可算名詞＝「少しはある」
little＋不可算名詞＝「ほとんどない」
例）There is a little water in the bottle.（びんに水が少し入っている）
例）There is little water in the bottle.（びんにはほとんど水がない）

■ 覚え方
a が付くと「a＝1つでもある」と考えて〈ある〉方に、a がないと〈ない〉方に傾く、と結びつけると忘れにくい。

■ そのほかの数量表現
some（いくらかの）…肯定文で使う。可算・不可算どちらにも付く。
any（いくらかの・少しも）…疑問文・否定文で使う。
no（一つもない・少しもない）…名詞の前に置くだけで否定になる。I have no money.
例）Would you like some tea?（お茶はいかがですか）※すすめる疑問文では some を使う。

★ ポイント：a little は「少しはある」、little は「ほとんどない」。日本語訳では「少し」と「ほとんどない」で大きく違うので、和訳問題ではここで差がつく。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたはお金をいくら持っていますか。」を英語にしなさい。',
        wrongAnswer: 'How many money do you have?',
        trapExplanation:
          '日本語の「いくら」を「いくつ」と同じ感覚でとらえてしまい、数をたずねる How many を選んでしまう。money に -s が付いていないことにも気づきにくい。',
        correctAnswer: 'How much money do you have?',
        correctExplanation:
          'money は数えられない名詞なので、量をたずねる How much を使う。How many の後ろには必ず数えられる名詞の複数形（How many books / How many students）が来る。後ろの名詞に -s が付けられるかどうかで、many と much を決めるとよい。',
      },
      {
        question: 'He has few friends in this city. の意味として正しいものを選びなさい。',
        wrongAnswer: '彼はこの町に友達が少しいる。',
        trapExplanation:
          'few を「少し」と訳す語としておぼえていると、a few との区別がつかず、そのまま「少しいる」と訳してしまう。a があるかないかを見落とすのが原因。',
        correctAnswer: '彼はこの町にはほとんど友達がいない。',
        correctExplanation:
          'a のない few は「ほとんどない」というマイナスの意味を表す。「少しはいる」と言いたいときは a few friends とする。数えられない名詞でも同じで、a little water は「水が少しある」、little water は「水がほとんどない」。a の有無で意味が逆になることを必ず確認する。',
      },
    ],
  },

  // ───────────────── 2. 複数形のつくり方（s086〜s090） ─────────────────
  {
    id: 'eigo_s086',
    subject: 'eigo',
    examType: 'chugaku',
    title: '複数形①：基本は -s を付けるだけ',
    description: '複数形の作り方の原則と、複数形にしなければならない場面を確実にする',
    intro: '「本を3冊持っています」を I have three book. と書くと、英語では数の合図がぶつかっています。three と言った時点で、book も複数形にしなければなりません。日本語にはない、この二重の合図に慣れましょう。',
    order: 586,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '数えられる名詞が2つ以上のときは複数形にする。作り方の基本は語尾に -s を付けるだけ。',
      '数字（two, ten…）／many／some／a lot of／these／those の後ろの名詞は複数形になる。',
      'one の後ろは単数のまま（one book / two books）。',
      '主語が複数形なら、動詞に三人称単数の -s は付けない（Many students like soccer.）。',
      '主語が複数形なら be動詞は are・were になる（These books are new.）。',
    ],
    sections: [
      {
        heading: '複数形の作り方の原則',
        body: `数えられる名詞が2つ以上あるときは、名詞の形を変える。これを複数形という。日本語には「本」と「本たち」の区別がないので、書き忘れがいちばん多い項目である。

■ 原則：語尾に -s を付ける
book → books（本）／pen → pens（ペン）／dog → dogs（犬）／apple → apples（りんご）／friend → friends（友達）／student → students（生徒）／house → houses（家）／table → tables（テーブル）

■ 複数形にしなければならない合図
①数字が前にある：two books／five apples／ten students
②many がある：many books
③some / a lot of がある：some pens／a lot of dogs
④these / those がある：these books／those cars
⑤複数を表す語がある：a lot of, several, both, all
例）There are a lot of books in this room.（この部屋には本がたくさんある）

■ 単数のままにするもの
one の後ろ：one book（× one books）
a / an の後ろ：a book（× a books）
each / every の後ろ：every student（× every students）。every は「一人ひとり」を見ているので単数。

★ ポイント：作文をしたら、名詞の前に数字や many がないかを確かめ、あれば -s が付いているかを見直す。この見直しだけで得点が変わる。`,
      },
      {
        heading: '複数形にすると文全体が変わる',
        body: `名詞を複数形にしたら、それにつられて文のほかの部分も変わる。名詞だけ直して満足してはいけない。

■ be動詞が変わる
This book is new.（この本は新しい）
→ These books are new.（これらの本は新しい）
That was a good movie.
→ Those were good movies.

■ 一般動詞の三人称単数の -s が消える
My friend likes soccer.（私の友達はサッカーが好きだ）
→ My friends like soccer.（私の友達はサッカーが好きだ）
⚠ 注意：主語が複数のときに likes と書くのは典型的な誤り。「主語に -s が付いたら動詞の -s は取れる」と覚えるとよい。

■ this / that も変わる
this → these／that → those
例）Is this your pen? → Are these your pens?

■ There is / There are も変わる
There is a book on the desk.
→ There are two books on the desk.

■ a / an が消える
He is a student. → They are students.（× They are a students.）

★ ポイント：単数の文を複数の文に書きかえる問題は入試の定番。①主語の名詞　②be動詞または一般動詞　③this/that　④a/an の四か所を順に点検すると、取りこぼしがなくなる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私には兄弟が3人と姉妹が1人います。」を英語にしなさい。',
        wrongAnswer: 'I have three brother and one sisters.',
        trapExplanation:
          '日本語では「兄弟」も「姉妹」も形が変わらないため、-s を付ける位置を取りちがえる。数字を見ずに、なんとなく後ろの語にだけ -s を付けてしまうことが多い。',
        correctAnswer: 'I have three brothers and one sister.',
        correctExplanation:
          '2以上の数字の後ろは複数形（three brothers）、one の後ろは単数（one sister）になる。名詞の前にある数字を必ず見てから -s を付けるかどうかを決める。and でつながれた二つの名詞は、それぞれ別々に判断する。',
      },
      {
        question: '「多くの生徒がサッカーが好きです。」を英語にしなさい。',
        wrongAnswer: 'Many students likes soccer.',
        trapExplanation:
          '「三人称単数の主語には動詞に -s」という規則を強く覚えていると、主語が複数になっても動詞の -s を残してしまう。名詞の -s と動詞の -s を混同するのが原因。',
        correctAnswer: 'Many students like soccer.',
        correctExplanation:
          '動詞に -s が付くのは、主語が三人称で単数のときだけである。many students は複数なので、動詞は原形のまま like を使う。「名詞に -s が付いたら動詞の -s は消える」とセットで覚える。My friend likes soccer. と My friends like soccer. を並べて確かめるとよい。',
      },
    ],
  },

  {
    id: 'eigo_s087',
    subject: 'eigo',
    examType: 'chugaku',
    title: '複数形②：-es を付ける語',
    description: 's・x・ch・sh・o で終わる語の複数形を、例外までふくめて覚える',
    intro: 'box は boxs ではなく boxes、potato は potatoes。ところが piano は pianoes ではなく pianos です。同じ o で終わるのに分かれるのはなぜでしょう。理由と、覚えるべき例外をここで整理します。',
    order: 587,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      's, x, ch, sh で終わる語には -es を付ける（bus→buses, box→boxes, watch→watches, dish→dishes）。',
      '-es を付ける理由は、-s だけでは発音がつながらないから。読むと音が一つふえる。',
      'o で終わる語のうち、potato・tomato・hero は -es を付ける。',
      'o で終わっても piano・photo・radio・kilo は -s だけ（外来語や短縮した語に多い）。',
      'class→classes のように、もともと s で終わる語も -es になる。',
    ],
    sections: [
      {
        heading: 's・x・ch・sh で終わる語',
        body: `語尾が s・x・ch・sh の語に -s だけを付けると、音がつながらず発音できない。そこで e をはさんで -es とする。

■ s で終わる語
bus → buses（バス）／class → classes（授業・組）／glass → glasses（コップ・めがね）／dress → dresses（ドレス）

■ x で終わる語
box → boxes（箱）／fox → foxes（きつね）／six → sixes

■ ch で終わる語
watch → watches（うで時計）／church → churches（教会）／bench → benches（ベンチ）／sandwich → sandwiches（サンドイッチ）／peach → peaches（もも）

■ sh で終わる語
dish → dishes（皿）／brush → brushes（ブラシ）／bush → bushes（低木）

■ 発音のポイント
-es を付けた語は、読むときに音のかたまりが一つふえる。bus は「バス」、buses は「バスィズ」となる。watch「ウォッチ」→ watches「ウォッチィズ」も同じ。
★ ポイント：「-es が付いたら、読むときにも音が一つふえる」と結びつけて覚えると、書き落としが減る。`,
      },
      {
        heading: 'o で終わる語（-es 派と -s 派）',
        body: `o で終わる語は二つに分かれる。数は多くないので、代表例を丸暗記してしまう。

■ -es を付ける語（食べ物・古くからある語に多い）
potato → potatoes（じゃがいも）
tomato → tomatoes（トマト）
hero → heroes（英雄）
echo → echoes（こだま）

■ -s だけを付ける語（外来語・短くした語）
piano → pianos（ピアノ）
photo → photos（写真。photograph を短くした語）
radio → radios（ラジオ）
kilo → kilos（キロ）
zoo → zoos（動物園。母音＋o なので -s）

■ 覚え方
「じゃがいもとトマトは英雄だ（potatoes, tomatoes, heroes）」と一文にして覚えると三語まとめて片づく。それ以外の o は -s と考えておけば、中学入試ではほぼ困らない。

⚠ 注意：pianoes・photoes は誤り。逆に potatos・tomatos も誤り。同じ o 終わりなのに逆向きの誤りが起きるので、必ず口に出して確かめる。

■ f・fe で終わる語は次のセッションで
leaf → leaves のように、f・fe で終わる語には別の規則がある。混同しないよう、いまは s・x・ch・sh・o の五つに集中する。`,
      },
    ],
    trapExamples: [
      {
        question: 'box の複数形を書きなさい。',
        wrongAnswer: 'boxs',
        trapExplanation:
          '「複数形は -s を付ける」という原則だけを覚えていると、語尾の音を確かめずに機械的に s を足してしまう。boxs は英語として発音することもできない。',
        correctAnswer: 'boxes',
        correctExplanation:
          '語尾が s・x・ch・sh の語には -es を付ける。box は x で終わるので boxes となり、読み方も「ボクスィズ」と音が一つふえる。同じ規則で bus→buses、watch→watches、dish→dishes となる。声に出して読めるかどうかで確かめられる。',
      },
      {
        question: 'piano の複数形を書きなさい。',
        wrongAnswer: 'pianoes',
        trapExplanation:
          'potatoes・tomatoes を先に覚えていると、「o で終わる語は -es」という誤った規則を作ってしまい、すべての o 終わりに -es を付けてしまう。',
        correctAnswer: 'pianos',
        correctExplanation:
          'o で終わる語のうち -es を付けるのは potato, tomato, hero, echo など少数で、piano・photo・radio・kilo・zoo は -s だけを付ける。楽器や外来語、短くした語は -s になると覚えておく。「じゃがいも・トマト・英雄だけが -es」と限定して覚えるのが安全。',
      },
    ],
  },

  {
    id: 'eigo_s088',
    subject: 'eigo',
    examType: 'chugaku',
    title: '複数形③：y で終わる語・f/fe で終わる語',
    description: 'city→cities、leaf→leaves のようなつづりの変化を、条件つきで正確に覚える',
    intro: 'city は cities なのに day は days。knife は knives なのに roof は roofs。似た形なのに変わり方がちがうので、丸暗記ではすぐ混ざってしまいます。分かれ目になる条件をはっきりさせましょう。',
    order: 588,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '「子音字＋y」で終わる語は、y を i に変えて -es（city→cities、country→countries、baby→babies）。',
      '「母音字＋y」で終わる語は、そのまま -s（boy→boys、day→days、key→keys、monkey→monkeys）。',
      'y の直前が a・i・u・e・o なら、y はそのまま残ると覚える。',
      'f・fe で終わる語は、f・fe を v に変えて -es（leaf→leaves、knife→knives、life→lives、wife→wives）。',
      '例外：roof→roofs、chief→chiefs、safe→safes、belief→beliefs は -s のみ。',
    ],
    sections: [
      {
        heading: 'y で終わる語：直前の文字を見る',
        body: `y で終わる語は二種類に分かれる。決め手は「y の直前が母音字か子音字か」の一点だけである。母音字とは a・i・u・e・o の五文字をいう。

■ 子音字＋y → y を i に変えて -es
city → cities（都市）／country → countries（国）／baby → babies（赤ちゃん）／story → stories（物語）／family → families（家族）／lady → ladies（婦人）／dictionary → dictionaries（辞書）／library → libraries（図書館）／party → parties（パーティー）／hobby → hobbies（趣味）
これらはすべて y の直前が t・r・b・l など子音字である。

■ 母音字＋y → そのまま -s
boy → boys（少年）／day → days（日）／key → keys（かぎ）／toy → toys（おもちゃ）／monkey → monkeys（さる）／way → ways（道・方法）／holiday → holidays（休日）
これらは y の直前が o・a・e など母音字である。

■ 確かめ方の手順
①語尾が y か確かめる。
②y のすぐ左の一文字を見る。
③a・i・u・e・o のどれかなら -s、それ以外なら y を i に変えて -es。

★ ポイント：boy を boies としてしまう誤りは、②の手順をとばして「y はぜんぶ i に変える」と思いこむことから起きる。必ず直前の一文字を見る。`,
      },
      {
        heading: 'f・fe で終わる語：v に変える',
        body: `f・fe で終わる語の多くは、f・fe を v に変えて -es を付ける。読み方も「フ」から「ヴズ」に変わる。

■ v に変える語
leaf → leaves（葉）／knife → knives（ナイフ）／life → lives（命・生活）／wife → wives（妻）／wolf → wolves（おおかみ）／shelf → shelves（たな）／thief → thieves（どろぼう）／half → halves（半分）／yourself → yourselves（あなたがた自身）

例）The leaves turn red in fall.（秋には葉が赤くなる）
例）Put the knives on the table.（ナイフをテーブルに置いて）

■ そのまま -s を付ける語（例外）
roof → roofs（屋根）／chief → chiefs（長）／safe → safes（金庫）／belief → beliefs（信念）／cliff → cliffs（がけ）／handkerchief → handkerchiefs（ハンカチ）

■ 覚え方
中学入試で問われるのはほぼ leaf・knife・life・wife の四語である。この四語を「葉っぱ・ナイフ・命・妻はヴになる」と唱えて覚え、roof は例外として別に押さえておけばよい。

⚠ 注意：life（命）の複数形 lives は「ライヴズ」と読む。live（住む）という動詞の三人称単数 lives（リヴズ）とつづりが同じなので、文中でどちらかを判断する必要がある。
例）Many lives were saved.（多くの命が救われた）＝名詞
例）He lives in Osaka.（彼は大阪に住んでいる）＝動詞`,
      },
    ],
    trapExamples: [
      {
        question: 'boy の複数形を書きなさい。',
        wrongAnswer: 'boies',
        trapExplanation:
          'city→cities、baby→babies を先に覚えているため、「y は i に変える」という規則をすべての y に当てはめてしまう。y の直前の文字を確かめる手順をとばすのが原因。',
        correctAnswer: 'boys',
        correctExplanation:
          'y を i に変えるのは「子音字＋y」で終わる語だけである。boy は y の直前が母音字の o なので、そのまま -s を付けて boys とする。day→days、key→keys、monkey→monkeys も同じ。必ず y の左の一文字を見てから決める。',
      },
      {
        question: 'roof の複数形を書きなさい。',
        wrongAnswer: 'rooves',
        trapExplanation:
          'leaf→leaves、knife→knives という変化を覚えた直後は、f で終わる語をすべて v に変えたくなる。規則を広げすぎることで起きる誤り。',
        correctAnswer: 'roofs',
        correctExplanation:
          'f・fe を v に変えるのは leaf, knife, life, wife, wolf, shelf などで、roof, chief, safe, belief は -s を付けるだけである。roof は例外として個別に覚える。規則を当てはめる前に、例外リストに入っていないかを確認する習慣をつける。',
      },
    ],
  },

  {
    id: 'eigo_s089',
    subject: 'eigo',
    examType: 'chugaku',
    title: '複数形④：形が変わる語・変わらない語',
    description: 'man→men、child→children などの不規則複数形と、単複同形の語をまとめて覚える',
    intro: 'child の複数は childs ではなく children、foot は feet。しかも sheep は1匹でも100匹でも sheep のままです。数が形にあらわれない日本語とちがい、英語には形が変わる語と変わらない語があります。',
    order: 589,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '母音が変わる型：man→men、woman→women、foot→feet、tooth→teeth、goose→geese、mouse→mice。',
      '-ren を付ける型：child→children、ox→oxen。',
      '単数も複数も同じ形：sheep、fish、deer、Japanese、Chinese。',
      'person の複数は people を使うのがふつう。people は常に複数あつかい。',
      'woman は単数「ウマン」、複数 women は「ウィミン」と読み方が変わる。',
      'children はすでに複数形なので childrens とは書かない。',
    ],
    sections: [
      {
        heading: '不規則に変わる語',
        body: `-s も -es も付けず、語の形そのものが変わる名詞がある。数は十数語しかないので、まとめて丸暗記する。

■ 母音が変わる型
man → men（男の人）
woman → women（女の人）
foot → feet（足）
tooth → teeth（歯）
goose → geese（ガチョウ）
mouse → mice（ねずみ）
※ women は「ウィミン」と読む。単数 woman「ウマン」との発音のちがいが聞き取り問題で問われる。

■ -ren / -en を付ける型
child → children（子ども）
ox → oxen（雄牛）

■ 人を表す語
person（人）の複数形は persons とも言えるが、ふつうは people を使う。
例）There are twenty people in the room.（部屋には20人いる）
⚠ 注意：people はそれ自体が複数あつかいなので、動詞は are / were になる。× There is many people. は誤り。

■ 覚えるときのこつ
man / woman を含む語は同じように変化する。
Englishman → Englishmen／policeman → policemen／businessman → businessmen`,
        figureId: 'lf_eigoext03_089',
      },
      {
        heading: '単数と複数が同じ形の語',
        body: `複数になっても形が変わらない名詞がある。数を表すのは、前に付く数字や動詞の形である。

■ 単複同形の語
sheep → sheep（羊）
fish → fish（魚）※種類を区別するときは fishes とすることもある
deer → deer（しか）
Japanese → Japanese（日本人）
Chinese → Chinese（中国人）

例）I saw ten sheep in the field.（野原で羊を10ぴき見た）
例）There are many fish in this river.（この川には魚がたくさんいる）
例）Many Japanese visit Kyoto every year.（多くの日本人が毎年京都を訪れる）

■ 見分け方
形が同じでも、数字・many・are などの手がかりで単複を判断できる。
There is a sheep.（1ぴき）／There are five sheep.（5ひき）

■ 国民を表す語の注意
-ese で終わる語（Japanese, Chinese, Vietnamese）は単複同形。
-an で終わる語（American, Italian, Korean）は -s を付ける。two Americans。
-man で終わる語（Englishman, Frenchman）は men に変わる。two Englishmen。

★ ポイント：「羊・魚・しか・日本人は形が変わらない」と四つ並べて覚える。動物では sheep・fish・deer の三つ、人では -ese の語、と分けておけば整理しやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私には子どもが3人います。」を英語にしなさい。',
        wrongAnswer: 'I have three childrens.',
        trapExplanation:
          '「複数のときは -s」という規則が体にしみこんでいるため、すでに複数形になっている children にさらに -s を付けてしまう。children が child の複数形であることを忘れている。',
        correctAnswer: 'I have three children.',
        correctExplanation:
          'child の複数形は children で、これ自体がすでに複数を表している。さらに -s を付けることはできない。同じく men, women, feet, teeth, people も、そのままで複数形なので -s を重ねない。× mens × peoples（peoples は「諸民族」という別の意味になる）。',
      },
      {
        question: '（　）に is か are を入れなさい。　There （　） a lot of people in the park.',
        wrongAnswer: 'is',
        trapExplanation:
          'people には -s が付いていないので単数だと考えて is を選んでしまう。「複数形には -s が付く」という思いこみが逆に働くひっかけである。',
        correctAnswer: 'are',
        correctExplanation:
          'people は -s が付いていなくても複数あつかいの語なので、動詞は are になる。person の複数として使われるためで、Many people were there. のように過去形でも were を使う。同じく単複同形の sheep も、five sheep are... と複数あつかいになる。',
      },
    ],
  },

  {
    id: 'eigo_s090',
    subject: 'eigo',
    examType: 'chugaku',
    title: '複数形⑤：-s の発音三種類',
    description: '複数形の -s が [s]・[z]・[iz] のどれで読まれるかを区別できるようにする',
    intro: '同じ -s なのに、cats は「ツ」に近く、dogs は「ズ」、buses では音のかたまりが1つ増えます。書けば同じ文字なのに、聞くと別ものに聞こえるのです。この読み分けは、動詞の -s にもそのまま当てはまります。',
    order: 590,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '複数形の -s の読み方は三種類ある：[s]・[z]・[iz]。',
      '無声音（のどがふるえない音 p, k, t, f）のあとは [s]：books, cats, cups。',
      '有声音（のどがふるえる音や母音）のあとは [z]：dogs, pens, boys, cars。',
      's, z, sh, ch, x, ge のあとは [iz] と読み、音のかたまりが一つふえる：buses, boxes, watches, oranges。',
      '同じ規則が、動詞の三人称単数の -s（likes, goes）にもそのまま当てはまる。',
    ],
    sections: [
      {
        heading: '三つの読み方と、その決まり方',
        body: `複数形は書くときは -s / -es だが、読むときは三通りある。どれになるかは、-s の直前の音で自動的に決まる。

■ ①[s] と読む（「ス」）
直前が、のどがふるえない音（無声音）のとき。p・k・t・f・th の音が代表。
例）books（ブックス）／cats（キャッツ）／cups（カップス）／maps（マップス）／months（マンス）／desks（デスクス）

■ ②[z] と読む（「ズ」）
直前が、のどがふるえる音（有声音）や母音のとき。b・d・g・l・m・n・r・v の音や、母音で終わる語。
例）dogs（ドッグズ）／pens（ペンズ）／beds（ベッズ）／boys（ボーイズ）／cars（カーズ）／girls（ガールズ）／apples（アップルズ）

■ ③[iz] と読む（「イズ」）
直前が s・z・sh・ch・x・ge の音のとき。この場合だけ、読むときの音のかたまりが一つふえる。
例）buses（バスィズ）／boxes（ボクスィズ）／watches（ウォッチィズ）／dishes（ディッシィズ）／oranges（オレンジィズ）／classes（クラスィズ）

■ 確かめ方
のどに手を当てて、-s の直前の音を出してみる。ふるえれば [z]、ふるえなければ [s]。s や sh の音で終わっていれば [iz]。

★ ポイント：③は「-es と書く語はだいたい [iz]」と結びつけて覚えるとよい（orange のように e で終わる語も含む）。`,
        figureId: 'lf_eigoext03_090',
      },
      {
        heading: '入試での問われ方と、動詞への応用',
        body: `発音の問題は、英語入試を実施する中学校でよく出る。「下線部の発音が他と異なるものを選べ」という形式が定番である。

■ 出題例
次のうち、下線部の -s の発音が他と異なるものを選びなさい。
　ア books　イ cats　ウ dogs　エ maps
答え：ウ dogs（[z]。ほかは [s]）

次のうち、-s の発音が他と異なるものを選びなさい。
　ア boxes　イ dishes　ウ watches　エ apples
答え：エ apples（[z]。ほかは [iz]）

■ 動詞にも同じ規則が当てはまる
三人称単数の -s も、まったく同じ三分類になる。
[s]：likes（ライクス）／works（ワークス）／stops（ストップス）
[z]：plays（プレイズ）／runs（ランズ）／goes（ゴーズ）／reads（リーズ）
[iz]：watches（ウォッチィズ）／washes（ウォッシィズ）／teaches（ティーチィズ）／uses（ユーズィズ）

■ 過去形 -ed も同じ考え方
[t]：worked／stopped　　[d]：played／opened　　[id]：wanted／needed
「直前の音がふるえるかどうか」で決まる点は共通である。

⚠ 注意：つづりだけを見て判断しないこと。決めているのは文字ではなく音である。months は th の音（無声音）のあとなので [s]、oranges は ge の音のあとなので [iz] になる。`,
      },
    ],
    trapExamples: [
      {
        question: 'buses は、bus と比べて音のかたまり（音節）がふえますか。',
        wrongAnswer: 'ふえない（bus と同じ長さで「バス」と読む）',
        trapExplanation:
          '日本語では「バス」も「バスたち」も音の数がほとんど変わらないので、-es が付いても読み方は変わらないと考えてしまう。書くときだけ e を足すものだと思いこむのが原因。',
        correctAnswer: 'ふえる（「バスィズ」と、音のかたまりが一つふえる）',
        correctExplanation:
          's・z・sh・ch・x で終わる語に -es を付けると、[iz] と読まれて音のかたまりが一つふえる。bus は1音節、buses は2音節になる。boxes, watches, dishes, classes も同じで、読むときに必ず「イズ」の音が加わる。この音がふえることが -es と書く理由でもある。',
      },
      {
        question: 'dogs の下線部 s の発音は、cats の s の発音と同じですか。',
        wrongAnswer: '同じ（どちらも「ス」と読む）',
        trapExplanation:
          'つづりがどちらも -s なので、読み方も同じだと考えてしまう。カタカナで「ドッグス」「キャッツ」と覚えていると、ちがいに気づけない。',
        correctAnswer: 'ちがう（dogs は [z]「ズ」、cats は [s]「ス」）',
        correctExplanation:
          '-s の読み方は直前の音で決まる。dog の g はのどがふるえる有声音なので [z]、cat の t はふるえない無声音なので [s] になる。pens・boys・cars は [z]、books・maps・cups は [s]。のどに手を当てて直前の音を確かめると、確実に判断できる。',
      },
    ],
  },

  // ───────────────── 3. 不可算名詞の数え方（s091〜s094） ─────────────────
  {
    id: 'eigo_s091',
    subject: 'eigo',
    examType: 'chugaku',
    title: '入れ物で数える：a glass of / a cup of',
    description: '飲み物など、入れ物のことばを借りて数えられない名詞を数える言い方を身につける',
    intro: '「水を2杯ください」を Two waters, please. と言いたくなりますが、教科書では two glasses of water と習います。water は数えられないので、入れ物のことばを借りて数えるのです。複数形にするのは glass のほうです。',
    order: 591,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '数えられない名詞は「単位のことば＋of＋名詞」で数える。',
      '冷たい飲み物は a glass of（水・牛乳・ジュース）、温かい飲み物は a cup of（コーヒー・紅茶・お茶）。',
      'びん入りは a bottle of、かん入りは a can of、わん・どんぶりは a bowl of。',
      '単位のことばは数えられる名詞なので、これを複数形にする（two glasses of water）。',
      'of の後ろの名詞は不可算のまま。× two glasses of waters。',
    ],
    sections: [
      {
        heading: '入れ物のことばを借りる',
        body: `water は数えられない。しかし現実には「水を2はい飲んだ」と言いたい場面がある。そこで英語は、水そのものではなく、水を入れた入れ物のほうを数える。

■ 基本の形
　単位のことば ＋ of ＋ 数えられない名詞
例）a glass of water（コップ1ぱいの水）
例）a cup of coffee（カップ1ぱいのコーヒー）
例）a bottle of milk（びん1本の牛乳）

■ glass と cup の使い分け
glass＝ガラスのコップ。冷たい飲み物に使う。
　a glass of water（水）／a glass of milk（牛乳）／a glass of juice（ジュース）／a glass of orange juice
cup＝取っ手のついた温かい飲み物用のカップ。
　a cup of coffee（コーヒー）／a cup of tea（紅茶・お茶）／a cup of hot chocolate（ココア）
★ ポイント：「冷たい＝glass、温かい＝cup」で覚える。a cup of water とは、ふつう言わない。

■ そのほかの入れ物
a bottle of water（ペットボトル・びん1本の水）
a can of coffee（かん1本のコーヒー）
a bowl of rice（茶わん1ぱいのごはん）／a bowl of soup（スープ1ぱい）
a spoonful of sugar（スプーン1ぱいの砂糖）
a glass of wine ではなく、子ども向けの入試では飲み物は水・牛乳・ジュース・コーヒー・紅茶で十分である。`,
      },
      {
        heading: '数をふやすとき・たずねるとき',
        body: `この形で数をふやすときに、どちらの語を複数形にするのかが最大の急所になる。

■ 複数にするのは「単位のことば」のほう
a glass of water → two glasses of water（コップ2はいの水）
a cup of tea → three cups of tea（カップ3ばいの紅茶）
a bottle of milk → five bottles of milk（びん5本の牛乳）
⚠ 注意：water・tea・milk は数えられない名詞のままなので、-s は付けない。× two glasses of waters は誤り。

■ たずね方
数をたずねる：How many glasses of water do you drink every day?（1日にコップ何ばいの水を飲みますか）
量をたずねる：How much water do you drink every day?（1日にどのくらい水を飲みますか）
どちらも正しい文だが、How many の後ろには数えられる語 glasses が来る点がちがう。

■ 注文するときの言い方
店では、a coffee のように短く言うこともあるが、これは「a cup of coffee」を省略した会話表現である。テストの答案では a cup of coffee と正しく書く。

■ 会話でよく使う形
Would you like a cup of tea?（紅茶を1ぱいいかがですか）
Can I have a glass of water, please?（お水を1ぱいいただけますか）
I drink two glasses of milk every morning.（毎朝、牛乳をコップ2はい飲みます）`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎朝、水をコップ2はい飲みます。」を英語にしなさい。',
        wrongAnswer: 'I drink two glass of waters every morning.',
        trapExplanation:
          '「水を2はい」の「2」が water にかかっていると考えて、water のほうに -s を付けてしまう。英語では数えているのがコップのほうだという発想の切りかえができていない。',
        correctAnswer: 'I drink two glasses of water every morning.',
        correctExplanation:
          '数えられるのは入れ物である glass のほうなので、複数形にするのは glasses。water は数えられない名詞のままなので -s を付けない。two cups of coffee、three bottles of milk も同じ形になる。「複数形になるのは of の前」と覚える。',
      },
      {
        question: '「コーヒーを1ぱいいかがですか。」を英語にしなさい。',
        wrongAnswer: 'Would you like a glass of coffee?',
        trapExplanation:
          'a glass of water を先に覚えると、飲み物はすべて glass で数えると思いこんでしまう。日本語の「1ぱい」が入れ物を区別しないことも原因である。',
        correctAnswer: 'Would you like a cup of coffee?',
        correctExplanation:
          'glass は冷たい飲み物用のガラスのコップ、cup は温かい飲み物用の取っ手つきのカップを表す。コーヒー・紅茶・お茶は a cup of、水・牛乳・ジュースは a glass of を使う。入れ物の形を思いうかべて選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s092',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形で数える：a piece of / a sheet of / a slice of',
    description: '紙・パン・助言など、切り分けたひとまとまりを表す単位のことばを使い分ける',
    intro: '「アドバイスを1つ」を an advice とは言えません。advice は数えられないからです。代わりに a piece of advice と言います。紙・パン・情報など、ひとまとまりを表すことばの使い分けを学びます。',
    order: 592,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'a piece of は最も広く使える万能の単位（紙・ケーキ・助言・情報・家具・チョーク）。',
      'a sheet of＝紙などの薄い1枚。a slice of＝パン・チーズ・ピザなど薄く切った1枚。',
      'a loaf of bread＝パン1斤（切る前のかたまり）。a bar of chocolate＝板チョコ1枚。',
      'advice・information・news・furniture は a piece of で数える（× an advice）。',
      'a paper は「新聞・答案」の意味になるので、「紙1枚」は a sheet of paper とする。',
    ],
    sections: [
      {
        heading: '万能の a piece of',
        body: `入れ物のない物を数えるときは、「1つ分のかたまり」を表す piece を借りる。piece は「かけら・1片」という意味の数えられる名詞である。

■ a piece of ＋ 数えられない名詞
a piece of paper（紙1枚）
a piece of cake（ケーキ1切れ）
a piece of chalk（チョーク1本）
a piece of furniture（家具1点）
a piece of advice（助言1つ）
a piece of information（情報1つ）
a piece of news（ニュース1つ）
a piece of music（楽曲1曲）

例）He gave me a piece of good advice.（彼はよい助言を一つくれた）
例）I need two pieces of paper.（紙が2枚いる）

■ なぜ a piece of が必要か
advice や information は「助言というもの全体」を表すので、そのままでは数えられない。そこから「一つ分」を取り出す働きをするのが a piece of である。
⚠ 注意：× an advice／× two informations は誤り。必ず a piece of advice／two pieces of information とする。

★ ポイント：単位のことばが思いつかないときは a piece of を使えば、たいていの不可算名詞に対応できる。まずこの形を確実にする。`,
      },
      {
        heading: '物ごとに決まった単位のことば',
        body: `より正確に言うために、物ごとに決まった単位を使うことがある。よく出るものだけ覚える。

■ 紙
a sheet of paper（紙1枚）…薄い1枚をさす、いちばんふつうの言い方
a piece of paper（紙1枚・紙きれ）
⚠ 注意：a paper は「新聞」「答案・論文」の意味になる。I read a paper.（新聞を読む）。「紙が1枚ほしい」を I want a paper. と書くと意味が変わってしまう。

■ パン・食べ物
a slice of bread（うすく切ったパン1枚）
a loaf of bread（切る前のパン1斤）
a slice of cheese（チーズ1枚）／a slice of pizza（ピザ1切れ）
a piece of cake（ケーキ1切れ）
a bar of chocolate（板チョコ1枚）／a bar of soap（せっけん1個）

■ 粉・つぶ
a spoonful of sugar（スプーン1ぱいの砂糖）
a grain of rice（米1つぶ）

■ 服・くつ
a pair of shoes（くつ1足）※次のセッションでくわしく学ぶ

■ 例文で確かめる
Please give me a sheet of paper.（紙を1枚ください）
I ate two slices of bread for breakfast.（朝食にパンを2枚食べた）
She bought a loaf of bread at the bakery.（彼女はパン屋でパンを1斤買った）`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は私によい助言を一つくれた。」を英語にしなさい。',
        wrongAnswer: 'He gave me a good advice.',
        trapExplanation:
          '日本語で「助言を一つ」と数えられるので、そのまま a を付けてしまう。advice が数えられない名詞であることを見落とすのが原因で、an advice と書く誤りも多い。',
        correctAnswer: 'He gave me a piece of good advice.（He gave me some good advice. も可）',
        correctExplanation:
          'advice は不可算名詞なので a も複数形も付けられない。「一つ」と数えたいときは a piece of advice とする。information, news, furniture も同じで、two pieces of information、a piece of furniture となる。数えないなら some advice でよい。',
      },
      {
        question: '「紙を1枚ください。」を英語にしなさい。',
        wrongAnswer: 'Please give me a paper.',
        trapExplanation:
          'paper を「紙」とだけ覚えていると、数えられる名詞のつもりで a を付けてしまう。しかも a paper という形自体は英語として存在するので、誤りに気づきにくい。',
        correctAnswer: 'Please give me a sheet of paper.（a piece of paper も可）',
        correctExplanation:
          '「紙」の意味の paper は不可算名詞なので、1枚と数えるときは a sheet of paper か a piece of paper とする。a paper と言うと「新聞」または「答案・論文」という別の意味になってしまう。数えられる意味と数えられない意味を持つ語の代表例である。',
      },
    ],
  },

  {
    id: 'eigo_s093',
    subject: 'eigo',
    examType: 'chugaku',
    title: '二つで一組：a pair of',
    description: 'shoes・glasses・scissors など、いつも複数形で使う語と、その数え方を覚える',
    intro: 'くつは2つで1組なので、英語ではいつも shoes と複数形です。めがねもはさみもズボンも同じです。1足だけ言いたいときは a pair of shoes と言います。日本語の「1足」「1本」に近い発想ですね。',
    order: 593,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '左右そろって一組になる物は、いつも複数形で使う（shoes, socks, gloves, glasses, scissors, pants, jeans）。',
      '数えるときは a pair of＋複数形（a pair of shoes＝くつ1足）。',
      '2組以上なら pair のほうを複数形にする（two pairs of shoes）。',
      'これらの語が主語になると、動詞は are・were になる（My glasses are new.）。',
      'a pair of ～ が主語のときは pair が単数なので is を使う（A pair of shoes is on the floor.）。',
    ],
    sections: [
      {
        heading: 'いつも複数形で使う語',
        body: `英語では、左右または二つの部分がそろって初めて役に立つ物を、いつも複数形で表す。

■ 代表的な語
shoes（くつ）／socks（くつ下）／gloves（手ぶくろ）／glasses（めがね）／scissors（はさみ）／pants・trousers（ズボン）／jeans（ジーンズ）／shorts（半ズボン）／chopsticks（はし）

■ なぜ複数形なのか
くつは左右2つで1足、めがねはレンズが2枚、はさみは刃が2枚、ズボンは足を通す部分が2本ある。英語は「2つの部分でできている」という見方をそのまま形に表す。日本語の「はさみ」「めがね」に複数の意味がないので、日本人には感覚がつかみにくい。

■ 数えたいときは a pair of
a pair of shoes（くつ1足）
a pair of socks（くつ下1足）
a pair of glasses（めがね1つ）
a pair of scissors（はさみ1ちょう）
two pairs of shoes（くつ2足）
⚠ 注意：複数形になるのは pair のほう。shoes は最初から複数形なので、そのままにしておく。× two pair of shoes／× two pairs of shoe はどちらも誤り。

★ ポイント：a scissors・a shoe とは言えない。「1つ」と言いたいときは必ず a pair of を使う。ただし a shoe（かた方のくつ）という言い方自体は、かた方だけをさすときには使える。`,
      },
      {
        heading: '主語になったときの動詞',
        body: `これらの語が主語になると、動詞の形をまちがえやすい。何が主語の中心かを見きわめる。

■ そのまま主語になる場合 → 複数あつかい
My glasses are new.（私のめがねは新しい）
These scissors are very sharp.（このはさみはとてもよく切れる）
Where are my socks?（私のくつ下はどこですか）
Your shoes were under the table.（あなたのくつはテーブルの下にあった）

■ a pair of ～ が主語の場合 → pair の数に合わせる
A pair of shoes is on the floor.（くつが1足、ゆかに置いてある）
Two pairs of gloves are in the box.（手ぶくろが2組、箱に入っている）
※ 主語の中心は pair なので、a pair なら単数あつかいになる。

■ this / that との組み合わせ
× this scissors → these scissors／this pair of scissors
× that glasses → those glasses／that pair of glasses

■ よく出る文
I bought a pair of new shoes yesterday.（きのう新しいくつを1足買った）
He wears glasses.（彼はめがねをかけている）※ wear glasses は無冠詞・複数形で使う決まった言い方
Please pass me the scissors.（はさみを取ってください）`,
      },
    ],
    trapExamples: [
      {
        question: '「私ははさみを1ちょう持っています。」を英語にしなさい。',
        wrongAnswer: 'I have a scissors.',
        trapExplanation:
          '日本語では「はさみ1ちょう」と単数で数えるので、そのまま a を付けてしまう。scissors の -s を複数形の -s だと気づかず、単語の一部だと思いこむことも多い。',
        correctAnswer: 'I have a pair of scissors.',
        correctExplanation:
          'scissors は2枚の刃でできているため、いつも複数形で使う語である。a を直接付けることはできず、1つと数えるときは a pair of scissors とする。glasses（めがね）、pants（ズボン）も同じで、a pair of glasses、a pair of pants となる。',
      },
      {
        question: '（　）に is か are を入れなさい。　My glasses （　） new.',
        wrongAnswer: 'is',
        trapExplanation:
          'めがねは1つの品物なので単数だと考えて is を選んでしまう。日本語の感覚では「めがねが1つ」なので、複数あつかいだと気づきにくい。',
        correctAnswer: 'are',
        correctExplanation:
          'glasses は形の上でも意味の上でも複数なので、主語になれば動詞は are になる。These scissors are sharp. も同じ。ただし A pair of glasses is on the desk. のように a pair of が主語のときは、中心の語が pair（単数）なので is を使う。何が主語の中心かで判断する。',
      },
    ],
  },

  {
    id: 'eigo_s094',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数え方の総整理：複数にするのはどちらか',
    description: '単位＋of＋不可算名詞の形で、複数形にする語と数のたずね方を完全に固める',
    intro: 'two glasses of water の -s は、glass に付いて water には付きません。どちらを複数形にするか迷ったら、数えているのはどちらかを考えます。たずね方も How many と How much で変わります。',
    order: 594,
    studyPeriod: '小5前半',
    targetLevel: 'moshi',
    keyPoints: [
      '「単位のことば＋of＋不可算名詞」では、複数形にするのは単位のことばだけ。',
      'two glasses of milk／three cups of tea／five pieces of paper／two pairs of shoes。',
      'of の後ろの不可算名詞は、いくつになっても形を変えない。',
      '数をたずねるときは How many＋単位の複数形（How many cups of coffee ...?）。',
      '量をたずねるときは How much＋不可算名詞（How much coffee ...?）。',
      '主語になったときは単位のことばの数に合わせて動詞を決める。',
    ],
    sections: [
      {
        heading: '複数形にする位置をまちがえない',
        body: `ここまで学んだ数え方を、一つの表にまとめて確認する。まちがいはほとんど「どちらを複数形にするか」で起きる。

■ 正しい形
a glass of water　→　two glasses of water
a cup of coffee　→　three cups of coffee
a bottle of milk　→　four bottles of milk
a piece of paper　→　five pieces of paper
a slice of bread　→　six slices of bread
a pair of shoes　→　two pairs of shoes

■ よくある誤り
× two glass of water（単位が複数形になっていない）
× two glasses of waters（不可算名詞に -s を付けている）
× two glass of waters（両方まちがえている）

■ なぜそうなるのか
数えているのは、あくまで入れ物やかたまりのほうである。水そのものは相変わらず数えられない。だから -s が付くのは of の前だけになる。
★ ポイント：「-s は of の前に付く」と一言で覚えてしまう。作文の見直しでは of を探し、その左の語に -s があるかを確認する。`,
        figureId: 'lf_eigoext03_094',
      },
      {
        heading: 'たずね方と動詞の一致',
        body: `数え方の形は、疑問文や主語になったときにも影響する。

■ 数をたずねる（How many）
How many cups of coffee do you drink a day?（1日に何ばいコーヒーを飲みますか）
　→ 答え：I drink two cups of coffee a day.
How many pieces of paper do you need?（紙は何枚必要ですか）
※ How many の直後には、数えられる語の複数形（cups, pieces, glasses）が来る。

■ 量をたずねる（How much）
How much coffee do you drink a day?（1日にどのくらいコーヒーを飲みますか）
　→ 答え：I drink a lot of coffee.
※ How much の直後には、不可算名詞（coffee, water, money, time）が来る。
⚠ 注意：× How many coffee ...? は誤り。coffee をそのまま数えることはできない。

■ 主語になったとき
A glass of water is on the table.（コップ1ぱいの水がテーブルにある）…中心は a glass（単数）→ is
Two glasses of water are on the table.（コップ2はいの水が…）…中心は glasses（複数）→ are
Three pieces of cake were left.（ケーキが3切れ残っていた）

■ 総まとめの例文
I bought a loaf of bread, two bottles of milk, and three pairs of socks.
（パンを1斤、牛乳を2本、くつ下を3足買った）
この一文の中に、単位を複数にする規則がすべて入っている。声に出して覚えるとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎朝、紅茶をカップ3ばい飲みます。」を英語にしなさい。',
        wrongAnswer: 'I drink three cup of teas every morning.',
        trapExplanation:
          '日本語の「3ばいの紅茶」につられて、紅茶のほうを複数形にし、単位の cup をそのままにしてしまう。-s を付ける位置が日本語と英語で逆になる点でつまずく。',
        correctAnswer: 'I drink three cups of tea every morning.',
        correctExplanation:
          '複数形にするのは単位のことば cup のほうで、tea は不可算名詞なので形を変えない。「-s は of の前」と覚えると確実である。two glasses of water、five pieces of paper もすべて同じ形になる。',
      },
      {
        question: '「あなたは1日にどのくらいコーヒーを飲みますか。」を英語にしなさい。',
        wrongAnswer: 'How many coffee do you drink a day?',
        trapExplanation:
          '日本語の「どのくらい」を「いくつ」と同じに考えて How many を選んでしまう。coffee に -s が付いていないのに How many を使っている点にも気づきにくい。',
        correctAnswer: 'How much coffee do you drink a day?（How many cups of coffee do you drink a day? も可）',
        correctExplanation:
          'coffee は不可算名詞なので、量をたずねる How much を使う。数をたずねたいなら、数えられる単位を入れて How many cups of coffee ...? とする。How many の直後には必ず複数形の数えられる語が来る、という形で見分ける。',
      },
    ],
  },

  // ───────────────── 4. 冠詞 a / an の使い分け（s095〜s098） ─────────────────
  {
    id: 'eigo_s095',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'a / an の基本：初めて話に出す「一つの」',
    description: '数えられる名詞の単数に付ける a・an の意味と、使う場面を理解する',
    intro: 'I am student. では英語になりません。数えられる名詞が1つのときは、裸のまま置けないからです。a には「まだ相手の知らない1つ」という意味があります。日本語に冠詞はないので、意識して付ける練習が要ります。',
    order: 595,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'a / an は「一つの」「ある〜」を表し、数えられる名詞の単数にだけ付く。',
      'もともと one から生まれた語なので、複数形や不可算名詞には付けられない。',
      '話に初めて出す物、相手がどれのことかまだ知らない物に使う。',
      '職業や身分を言うときは a を付ける（She is a teacher.／He is a doctor.）。',
      '「〜というものが好き」と全体を言うときは、a ではなく複数形を使う（I like dogs.）。',
    ],
    sections: [
      {
        heading: 'a / an の意味と使い方',
        body: `a / an を冠詞という。日本語にはない品詞なので、意味を正しくつかんでおく必要がある。

■ 意味①「一つの」
a はもともと one（1）から生まれた語である。だから数えられる名詞の単数にしか付かない。
例）I have a dog.（犬を1ぴき飼っている）
例）There is a book on the desk.（つくえの上に本が1冊ある）

■ 意味②「ある〜」（どれかは特定しない）
話し手も聞き手も、まだどれのことか決めていないときに使う。
例）A boy is running in the park.（1人の男の子が公園を走っている）
※ どの男の子かは、聞き手にはまだわからない。

■ 付けられない相手
複数形には付けられない：× a books
数えられない名詞には付けられない：× a water／× a music
すでに my・this・the が付いているものには付けられない：× a my bag

■ 職業・身分を言うとき
英語では、職業を言うときに a を付ける。日本語には対応する語がないので忘れやすい。
例）She is a teacher.（彼女は先生です）
例）My father is a doctor.（父は医者です）
例）I want to be a soccer player.（サッカー選手になりたい）

★ ポイント：a は「数えられる／単数／まだ特定されていない」の三条件がそろったときに使う、と整理しておく。`,
      },
      {
        heading: '「〜というもの」を表す言い方',
        body: `「犬が好きです」のように、特定の1ぴきではなく種類全体を表したいときは、言い方に注意がいる。

■ ふつうは複数形を使う
例）I like dogs.（犬が好きです）
例）Dogs are friendly animals.（犬は人なつこい動物だ）
例）I don't like tomatoes.（トマトは好きではない）
「犬というもの全体」を表すには、複数形にするのがいちばん自然である。

■ a を使うと「1ぴきの犬」になる
I like a dog. と書くと、「ある特定の1ぴきの犬が好き」という不自然な意味になってしまう。
⚠ 注意：好ききらいを言う文では、数えられる名詞は複数形にすると覚えておくと安全である。
例）Do you like cats?（ねこは好きですか）
例）She likes apples.（彼女はりんごが好きだ）

■ 数えられない名詞ならそのまま
I like music.／I like water.（× a music／× a water）

■ a に「〜というものは」の意味がある場合
A dog is a friendly animal.（犬というものは人なつこい動物だ）
このように、1ぴきを代表として全体を表す使い方もある。中学入試ではまれだが、読解で出てきたら「犬というものは」と訳す。

■ まとめの例文
I have a dog. It is very cute.（犬を1ぴき飼っている。とてもかわいい）
I like dogs very much.（犬が大好きだ）
My uncle is a vet. He takes care of dogs and cats.（おじは獣医だ。犬やねこの世話をしている）`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女は先生です。」を英語にしなさい。',
        wrongAnswer: 'She is teacher.',
        trapExplanation:
          '日本語の「先生です」には a にあたる語がないので、そのまま単語を並べてしまう。職業名は名前のようなものだと感じて、冠詞がいらないと思いこむことも多い。',
        correctAnswer: 'She is a teacher.',
        correctExplanation:
          '職業や身分を表す語は数えられる名詞なので、単数のときは a / an を付ける。He is a doctor. / I am a student. / My brother is an engineer. も同じ。ただし複数のときは付けない（They are teachers.）。',
      },
      {
        question: '「私は犬が好きです。」を英語にしなさい。',
        wrongAnswer: 'I like a dog.',
        trapExplanation:
          '「数えられる名詞の単数には a」という規則だけを機械的に当てはめてしまう。日本語の「犬が好き」が単数か複数かを区別しないため、a dog で正しいと感じてしまう。',
        correctAnswer: 'I like dogs.',
        correctExplanation:
          '好ききらいを言うときは、その種類全体をさすので複数形を使う。I like a dog. は「ある特定の1ぴきの犬が好き」という意味になり不自然。Do you like cats? / She likes apples. も同じ形になる。数えられない名詞なら I like music. のようにそのまま使う。',
      },
    ],
  },

  {
    id: 'eigo_s096',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'a と an は「音」で決まる',
    description: 'つづりではなく発音で a・an を選ぶ原則と、まぎらわしい語を確実にする',
    intro: 'an hour はつづりが h で始まるのに an を使い、a university は u で始まるのに a を使います。決めているのはつづりではなく最初の音です。hour の h は読まず、university は「ユ」で始まるからです。',
    order: 596,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '母音の音（ア・イ・ウ・エ・オ）で始まる語の前は an、それ以外は a。',
      '決めるのはつづりではなく発音である。',
      'つづりが子音字でも an：an hour（h を読まない）／an honest boy。',
      'つづりが母音字でも a：a university（ユ）／a uniform（ユ）／a useful book（ユ）／a European country（ユ）。',
      'a / an は、名詞ではなく「すぐ後ろに来る語」の音で決まる（an old book → a nice old book）。',
    ],
    sections: [
      {
        heading: '原則は音で決まる',
        body: `a と an のどちらを使うかは、次に来る語の最初の「音」で決まる。母音の音で始まるなら an、そうでないなら a である。

■ an を使う（母音の音で始まる語）
an apple（りんご）／an egg（たまご）／an orange（オレンジ）／an umbrella（かさ）／an island（島）／an animal（動物）／an old man（おじいさん）／an easy question（やさしい問題）

■ a を使う（子音の音で始まる語）
a book／a cat／a desk／a pen／a young boy／a good idea

■ なぜ an が必要なのか
a apple と続けて言うと「ア・アップル」となって発音しにくい。そこで n をはさんで「アナップル」と言いやすくしている。読みやすくするための工夫だと理解すれば、規則が自然に感じられる。

■ 気をつける語①：つづりは子音字なのに an
hour（時間）／honest（正直な）／honor（名誉）
これらは h を発音しない。an hour は「アナワー」と読む。
例）I waited for an hour.（1時間待った）
例）He is an honest boy.（彼は正直な少年だ）

■ 気をつける語②：つづりは母音字なのに a
university（大学）／uniform（制服）／useful（役に立つ）／union（組合）／European（ヨーロッパの）
これらは「ユ」という子音の音で始まる。
例）My sister goes to a university.（姉は大学に通っている）
例）This is a very useful book.（これはとても役に立つ本だ）`,
        figureId: 'lf_eigoext03_096',
      },
      {
        heading: '直後の語で決まる',
        body: `a / an を決めるのは、名詞そのものではなく、a / an のすぐ後ろに来る語である。名詞の前に形容詞が入ると、判断の相手が変わる。

■ 形容詞が入ると変わる例
an apple（りんご）→ a red apple（赤いりんご）
　※ red は子音の音で始まるので a になる。
a book（本）→ an interesting book（おもしろい本）
　※ interesting は母音の音で始まるので an になる。
an old book（古い本）→ a nice old book（すてきな古い本）
　※ 判断するのは old ではなく nice。

■ 例文で確かめる
He has an egg.（たまごを1つ持っている）
He has a fresh egg.（新しいたまごを1つ持っている）
She is an English teacher.（彼女は英語の先生だ）
She is a good English teacher.（彼女はよい英語の先生だ）

■ 数字やアルファベットの前
an hour（1時間）／an eight-year-old boy（8歳の少年）／an A（Aという文字）／an F
※ 文字は名前を読んだときの音で決める。A は「エイ」、F は「エフ」なので an。B は「ビー」なので a B。

★ ポイント：作文の見直しでは、a / an の右どなりの語を声に出して読んでみる。「ア・イ・ウ・エ・オ」の音で始まっていれば an、そうでなければ a。この一手間で確実に正解できる。

⚠ 注意：an を使うのは母音の「音」であって、母音字ではない。university を an university と書くのは、つづりだけを見た典型的な誤りである。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に a か an を入れなさい。　I waited for （　） hour.',
        wrongAnswer: 'a hour',
        trapExplanation:
          'hour は h という子音字で始まっているので、つづりだけを見て a を選んでしまう。「母音字なら an」という覚え方をしていると必ず引っかかる。',
        correctAnswer: 'an hour',
        correctExplanation:
          'hour の h は発音しないため、「アワー」と母音の音で始まる。したがって an を使う。決めるのはつづりではなく音である。an honest boy（正直な少年）も同じ理由で an になる。声に出して読んで確かめる習慣をつける。',
      },
      {
        question: 'an old book に nice を加えて「すてきな古い本」とするとき、正しい形を書きなさい。',
        wrongAnswer: 'an nice old book',
        trapExplanation:
          'もとの形が an old book なので、an は old ではなく book に付いていると思いこみ、そのまま an を残してしまう。a / an が「すぐ後ろの語」で決まることを意識していないのが原因。',
        correctAnswer: 'a nice old book',
        correctExplanation:
          'a / an を決めるのは、直後に来る語の音である。nice は子音の音で始まるので a になる。逆に a book に interesting を加えると an interesting book になる。形容詞を入れたら、必ず a / an を選び直す。',
      },
    ],
  },

  {
    id: 'eigo_s097',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'a / an を付けてはいけない場面',
    description: '所有格・指示語・不可算名詞・スポーツや教科の名前など、冠詞を付けない場合を整理する',
    intro: '「私の友達」を a my friend と言ってしまう人は多いのですが、これは誤りです。my がすでにどれかを決めているので、a を重ねられません。正しくは a friend of mine。付けない場面をまとめて確かめます。',
    order: 597,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'my・your・his・this・that・John’s などが付く名詞に、a / an は重ねない（× a my bag）。',
      '「私の友達の一人」は a friend of mine と言う（× a my friend）。',
      '不可算名詞・複数形には a / an を付けない。',
      'スポーツ名・教科名・食事名は冠詞なし（play tennis／study math／have lunch）。',
      '固有名詞にも冠詞を付けない（× a Tokyo）。',
    ],
    sections: [
      {
        heading: '所有格・指示語とは重ねられない',
        body: `名詞の前に置ける「限定することば」は、原則として一つだけである。a / an と my / this などは、同じ位置を取り合うため並べられない。

■ 並べられない組み合わせ
× a my bag　→　my bag（私のかばん）
× a this book　→　this book（この本）
× the my house　→　my house（私の家）
× a Ken’s pen　→　Ken’s pen（ケンのペン）

■ 「私のかばんの一つ」と言いたいとき
「一つの」と「私の」を両方言いたい場合は、of の形を使う。
例）a friend of mine（私の友達の一人）
例）a book of mine（私の本の一冊）
⚠ 注意：of の後ろは所有代名詞（mine, yours, his, hers, ours, theirs）にする。× a friend of my は誤り。

■ 例文
He is a friend of mine.（彼は私の友達の一人です）
She is one of my friends.（同じ意味の別の言い方）
This is my favorite book.（これは私のいちばん好きな本です）

★ ポイント：名詞の前に my・your・this・that・所有格の 's があったら、a / an / the は不要である。作文の見直しでは、名詞の前に限定することばが二つ並んでいないか確かめる。`,
      },
      {
        heading: '冠詞を付けない決まった言い方',
        body: `決まった言い方として、名詞に冠詞を付けないものがある。まとめて覚えてしまう。

■ スポーツ名
play soccer／play tennis／play baseball／play basketball
例）I play tennis every Sunday.（毎週日曜日にテニスをする）
⚠ 注意：楽器のときは the が必要（play the piano）。次のセッションで学ぶ。

■ 教科名・言語名
study math／study science／study English／speak Japanese
例）I study English every day.（毎日英語を勉強する）

■ 食事の名前
have breakfast／have lunch／have dinner／eat breakfast
例）I have breakfast at seven.（7時に朝食を食べる）
※ ただし形容詞が付くと a が必要になる。I had a big breakfast.（たっぷりの朝食を食べた）

■ 季節・月・曜日
in spring／in April／on Monday
例）It is cold in winter.（冬は寒い）

■ 固有名詞
Japan／Tokyo／Ken／Mt. Fuji
例）I live in Osaka.（× in an Osaka）

■ 不可算名詞・複数形
I like music.／I have homework.／There are books on the desk.

■ 交通手段・場所の決まり文句
by bus／by train／by car／at home／go to school／go to bed
例）I go to school by bus.（バスで学校へ行く）

★ ポイント：「a を付けるかどうか迷ったら、まず数えられる名詞かどうか」→「次に、前に my や this がないか」→「最後に、決まった言い方でないか」の順に確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は私の友達の一人です。」を英語にしなさい。',
        wrongAnswer: 'He is a my friend.',
        trapExplanation:
          '「一人の」を a、「私の」を my と、日本語の語をそのまま置きかえて並べてしまう。英語では a と my が同じ位置を取り合うため並べられない、という約束を知らないと必ず起きる誤り。',
        correctAnswer: 'He is a friend of mine.（He is one of my friends. も可）',
        correctExplanation:
          'a / an と my・your・this などは重ねて使えない。「一つの」と「私の」を両方言いたいときは a friend of mine の形にする。of の後ろは所有代名詞 mine を使い、× a friend of my とはしない。',
      },
      {
        question: '「私は先週の日曜日にテニスをしました。」を英語にしなさい。',
        wrongAnswer: 'I played a tennis last Sunday.',
        trapExplanation:
          '「数えられる名詞の単数には a」という規則を、スポーツ名にも当てはめてしまう。play the piano という形を覚えていると、スポーツにも冠詞がいるように感じることもある。',
        correctAnswer: 'I played tennis last Sunday.',
        correctExplanation:
          'スポーツ名は冠詞を付けずに使う決まった言い方である。play soccer, play baseball も同じ。一方で楽器には the が必要（play the piano）。教科名（study math）、食事名（have lunch）も冠詞なしで使う。セットで覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s098',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'a を使った決まった言い方',
    description: 'once a week のような「〜につき」の a と、a を含む重要熟語をまとめて覚える',
    intro: '「週に1回」は once a week。この a は「1つの」ではなく「〜につき」の意味です。同じ a なのに役目がちがいます。take a walk や have a good time など、a を含む決まった言い方もここでまとめます。',
    order: 598,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '「〜につき」を表す a：once a week（週に1回）／three times a day（1日に3回）／sixty kilometers an hour（時速60キロ）。',
      '回数は once（1回）→ twice（2回）→ three times（3回）と数える。',
      'have a cold（風邪をひいている）／have a good time（楽しく過ごす）／take a bath（風呂に入る）／take a walk（散歩する）。',
      'in a hurry（急いで）／for a while（しばらくの間）／as a result（その結果）。',
      'a little（少しの）／a few（少しの）も a を含むひとまとまりの表現。',
    ],
    sections: [
      {
        heading: '「〜につき」を表す a',
        body: `a には「一つの」のほかに、「〜につき」という意味がある。回数や速さを言うときに使う。

■ 回数の言い方
once a week（週に1回）
twice a week（週に2回）
three times a week（週に3回）
four times a month（月に4回）
once a year（年に1回）
例）I play the piano twice a week.（週に2回ピアノをひく）
例）He goes to the library once a month.（彼は月に1回図書館へ行く）

■ 回数の数え方に注意
1回＝once　　2回＝twice　　3回以上＝three times, four times ...
⚠ 注意：× one time／× two times とは、ふつう言わない。once, twice を使う。

■ 速さ・単位あたりの量
sixty kilometers an hour（時速60キロ）
five hundred yen a kilogram（1キロ500円）
例）This car runs at eighty kilometers an hour.（この車は時速80キロで走る）

■ たずね方
How often do you play tennis?（どのくらいの回数テニスをしますか）
　→ Three times a week.（週に3回です）
★ ポイント：How often（どのくらいの頻度で）とセットで覚えると、会話文の問題にそのまま使える。`,
        figureId: 'lf_eigoext03_098',
      },
      {
        heading: 'a を含む重要熟語',
        body: `a が入って初めて意味が完成する、決まった言い方がある。a を落とすと誤りになるので、ひとまとまりで覚える。

■ have を使うもの
have a cold（風邪をひいている）
have a good time（楽しく過ごす）
have a headache（頭が痛い）
have a fever（熱がある）
例）I have a cold today.（今日は風邪をひいている）
例）We had a good time at the party.（パーティーで楽しく過ごした）

■ take を使うもの
take a bath（風呂に入る）
take a shower（シャワーを浴びる）
take a walk（散歩する）
take a rest（休む）
take a look（見てみる）
例）I take a walk with my dog every morning.（毎朝、犬と散歩する）

■ その他
in a hurry（急いで）
for a while（しばらくの間）
as a result（その結果）
a lot of（たくさんの）
a little（少しの）／a few（少しの）
all of a sudden（突然）
例）He left in a hurry.（彼は急いで出て行った）
例）Please wait for a while.（しばらく待ってください）

⚠ 注意：cold は「寒さ」の意味なら不可算だが、「風邪」の意味では数えられる名詞になり、a が必要になる。I have cold. は誤りで、I have a cold. が正しい。同じように、time は「時間」なら不可算だが have a good time では a が入る。熟語は形ごと覚えるのが安全である。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は1日に2回、犬を散歩に連れて行きます。」を英語にしなさい。',
        wrongAnswer: 'I take my dog for a walk two times a day.',
        trapExplanation:
          '「2回」を数字の two をそのまま使って two times と書いてしまう。three times, four times という形を先に覚えていると、2回も同じ形で作れると思いこむ。',
        correctAnswer: 'I take my dog for a walk twice a day.',
        correctExplanation:
          '回数は1回が once、2回が twice、3回以上が three times, four times となる。once a week（週に1回）、twice a month（月に2回）のように、a は「〜につき」の意味を表す。two times は誤りではないが、入試では once / twice を書けることが求められる。',
      },
      {
        question: '「私は今日、風邪をひいています。」を英語にしなさい。',
        wrongAnswer: 'I have cold today.',
        trapExplanation:
          'cold を「寒い・寒さ」という語として覚えていると、数えられない名詞のつもりで a を付けずに書いてしまう。日本語の「風邪をひく」に数の感覚がないことも原因である。',
        correctAnswer: 'I have a cold today.',
        correctExplanation:
          '「風邪」の意味の cold は数えられる名詞なので a が必要になる。have a cold, have a headache, have a fever はどれも a を含むひとまとまりの表現である。「寒さ」の意味では I can’t stand the cold. のように不可算で使われ、意味によって数え方が変わる語の一つである。',
      },
    ],
  },

  // ───────────────── 5. the を使う場合・無冠詞（s099〜s103） ─────────────────
  {
    id: 'eigo_s099',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'the の基本①：相手にもどれかわかるとき',
    description: '一度話に出たものや、場面で一つに決まるものに the を付ける原則をつかむ',
    intro: 'I saw a dog. The dog was big. 1文目は a、2文目は the。同じ犬なのに変わるのは、2度目には相手にもどの犬か分かるからです。the は「お互いに分かっている」という合図なのです。',
    order: 599,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'the は「どれのことか、相手にもわかる」ときに使う。',
      '一度 a で出したものを二度目に指すときは the に変える（I saw a dog. The dog was big.）。',
      'その場に一つしかない物には、初めから the を使う（Open the door.）。',
      '後ろから説明が付いて一つに決まるときも the（the water in this bottle／the boy over there）。',
      'the は数えられる名詞・数えられない名詞・単数・複数のすべてに付けられる。',
    ],
    sections: [
      {
        heading: 'a と the のいちばん大きなちがい',
        body: `a と the のちがいは、「聞き手がどれのことかわかっているかどうか」の一点である。

■ 初めて話に出すとき → a
例）I have a dog.（犬を飼っている）
　聞き手にとっては、どんな犬かまだわからない。

■ 二度目からは → the
例）I have a dog. The dog is very big.（犬を飼っている。その犬はとても大きい）
　一度出したので、聞き手も「さっきの犬」だとわかる。

■ 物語文でよく出る流れ
Once upon a time, there was an old man.（昔々、一人のおじいさんがいました）
The old man lived in a small village.（そのおじいさんは小さな村に住んでいました）
The village was near a river.（その村は川の近くにありました）
※ 新しく出す名詞には a、すでに出た名詞には the が付いていることを確かめる。物語文の読解では、この流れを追うだけで話の筋がつかめる。

★ ポイント：a は「知らせる」ため、the は「思い出させる」ためのことば、と考えるとわかりやすい。`,
        figureId: 'lf_eigoext03_099',
      },
      {
        heading: '初めから the を使う場合',
        body: `一度も話に出ていなくても、聞き手が「どれのことか」わかる場合には、初めから the を使う。

■ その場に一つしかない物
例）Open the door, please.（ドアを開けてください）…その部屋のドアは一つに決まっている
例）Look at the blackboard.（黒板を見なさい）
例）Where is the bathroom?（トイレはどこですか）

■ おたがいに了解している物
例）Let’s go to the park.（公園へ行こう）…いつも行く近所の公園
例）I saw your brother at the station.（駅であなたのお兄さんを見かけた）

■ 後ろから説明が付いて一つに決まるとき
例）the water in this bottle（このびんの中の水）
例）the boy standing over there（あそこに立っている少年）
例）the book on the desk（つくえの上の本）
例）the first day of school（学校の初日）
⚠ 注意：不可算名詞にも the は付けられる。water には a を付けられないが、「どの水か」が決まれば the water となる。a が付けられないことと、the が付けられないことは別の話である。

■ 複数形にも the は付く
例）the students in this class（このクラスの生徒たち）
例）Where are the books I bought yesterday?（きのう買った本はどこですか）

■ まとめの練習
I bought a book yesterday. The book was very interesting.
（きのう本を買った。その本はとてもおもしろかった）
この二文の a と the が入れかわっていないかを、必ず確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の二文目を正しく直しなさい。　I saw a cat in the garden. A cat was white.',
        wrongAnswer: 'A cat was white.（そのまま）',
        trapExplanation:
          '一文目で a cat と書いたので、同じ語には同じ冠詞を付ければよいと考えてしまう。日本語では「その猫は」と言わずに「猫は白かった」でも通じるため、区別の必要を感じにくい。',
        correctAnswer: 'The cat was white.',
        correctExplanation:
          '一度 a で話に出した名詞を、二度目に指すときは the に変える。二文目の cat は「さっき見たあの猫」であり、聞き手にもどれのことかわかるからである。物語文では、この a から the への流れが必ず現れる。',
      },
      {
        question: '「このびんの中の水を飲んではいけません。」を英語にしなさい。',
        wrongAnswer: 'Don’t drink water in this bottle.',
        trapExplanation:
          'water は数えられない名詞なので冠詞を付けてはいけない、と覚えすぎて、the まで落としてしまう。a が付けられないことと the が付けられないことを混同するのが原因。',
        correctAnswer: 'Don’t drink the water in this bottle.',
        correctExplanation:
          '数えられない名詞に付けられないのは a / an だけで、the は付けられる。in this bottle という説明が付いて「どの水か」が一つに決まるので the を使う。the milk in the glass、the money on the table も同じ形である。',
      },
    ],
  },

  {
    id: 'eigo_s100',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'the の基本②：世界に一つのもの・楽器・序数・最上級',
    description: '決まって the が付く場面を、代表例ごとに覚える',
    intro: '月も太陽も世界に一つなので the moon、the sun と言います。ところがピアノをひくときも play the piano。楽器に the が付くのは不思議ですが、これは決まりごとです。the が固定される場面をまとめます。',
    order: 600,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '世界に一つしかないものには the（the sun／the moon／the earth／the sky／the world）。',
      '方角には the（in the east／in the north）。',
      '楽器を演奏するときは the（play the piano／play the guitar）。スポーツは無冠詞。',
      '序数（the first／the second）と最上級（the best／the tallest）には the を付ける。',
      'the same（同じ）／on the Internet（インターネットで）も the を使う決まった形。',
    ],
    sections: [
      {
        heading: '一つしかないもの・方角',
        body: `世の中に一つしかないものは、言った時点で「どれのことか」決まるので the を付ける。

■ 天体・自然
the sun（太陽）／the moon（月）／the earth（地球）／the sky（空）／the sea（海）／the world（世界）
例）The sun rises in the east.（太陽は東からのぼる）
例）The earth goes around the sun.（地球は太陽のまわりを回る）
例）There are many stars in the sky.（空には星がたくさんある）

■ 方角
in the east（東に）／in the west（西に）／in the north（北に）／in the south（南に）
例）Japan is in the east of Asia.（日本はアジアの東にある）

■ 一つに決まる役職・場所
the station（駅）／the post office（郵便局）／the hospital（病院）／the library（図書館）
例）I went to the post office this morning.（今朝、郵便局へ行った）
※ その町に一つしかない、または話し手と聞き手が同じ場所を思いうかべているため the が付く。

★ ポイント：日本語で「あの」を付けなくても意味が通じるのに英語では the が要る、というのがこの型である。The sun is bright. を A sun is bright. と書くと、太陽がいくつもあることになってしまう。`,
      },
      {
        heading: '楽器・序数・最上級',
        body: `決まって the が付く言い方を三つ覚える。ここは入試で直接問われやすい。

■ ①楽器を演奏する
play the piano（ピアノをひく）／play the guitar（ギターをひく）／play the violin（バイオリンをひく）／play the drums（ドラムをたたく）
例）She plays the piano very well.（彼女はピアノがとてもじょうずだ）
⚠ 注意：スポーツには冠詞を付けない。play soccer／play tennis。
「楽器には the、スポーツには何も付けない」と対にして覚える。

■ ②序数（〜番目）
the first（1番目の）／the second（2番目の）／the third（3番目の）／the fifth（5番目の）
例）January is the first month of the year.（1月は1年の最初の月だ）
例）He was the first person to come.（彼は最初に来た人だった）

■ ③最上級（いちばん〜）
the best／the tallest／the most beautiful
例）He is the tallest boy in our class.（彼はクラスでいちばん背が高い）
例）This is the most beautiful lake in Japan.（これは日本でいちばん美しい湖だ）
※ 「いちばん」は一つに決まるので the が付く、と理解すれば覚えやすい。

■ そのほかの決まった形
the same（同じ）：We are in the same class.（私たちは同じクラスだ）
on the Internet（インターネットで）：I found it on the Internet.
in the morning／in the afternoon／in the evening
play the piano と in the morning は、どちらも the を落とさないよう注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女はピアノをひくのがじょうずです。」を英語にしなさい。',
        wrongAnswer: 'She plays a piano very well.',
        trapExplanation:
          '「数えられる名詞の単数には a」という規則をそのまま当てはめてしまう。play soccer のようにスポーツを冠詞なしで習っていると、楽器にも冠詞の区別があると気づきにくい。',
        correctAnswer: 'She plays the piano very well.',
        correctExplanation:
          '楽器を演奏するというときは the を付ける決まりになっている。play the piano, play the guitar, play the violin。一方でスポーツには冠詞を付けず、play soccer, play tennis とする。「楽器は the、スポーツは無冠詞」と対で覚える。',
      },
      {
        question: '「太陽は東からのぼる。」を英語にしなさい。',
        wrongAnswer: 'Sun rises in east.',
        trapExplanation:
          '日本語の「太陽」「東」に冠詞がないため、そのまま単語を並べてしまう。名前のようなものだから固有名詞と同じで冠詞は不要だ、と考えてしまうことも多い。',
        correctAnswer: 'The sun rises in the east.',
        correctExplanation:
          '世界に一つしかないもの（the sun, the moon, the earth）と方角（in the east, in the north）には the を付ける。The earth goes around the sun. も同じ形。なお rises と三人称単数の -s を付ける点も忘れないこと。',
      },
    ],
  },

  {
    id: 'eigo_s101',
    subject: 'eigo',
    examType: 'chugaku',
    title: '固有名詞と the：付く名前・付かない名前',
    description: '川・海・山脈・複数形の国名には the、湖・単独の山・国・都市には the を付けない区別を覚える',
    intro: '富士山は Mt. Fuji で the が付きませんが、信濃川は the Shinano River と付きます。琵琶湖は Lake Biwa、太平洋は the Pacific Ocean。同じ地名なのに分かれるので、種類ごとに整理して覚えます。',
    order: 601,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'the が付く：川（the Shinano River）／海・大洋（the Pacific Ocean）／山脈（the Alps）。',
      'the が付く：複数形の国名（the United States／the Philippines／the Netherlands）。',
      'the が付く：新聞・船・公共の建物（the Asahi Shimbun／the Titanic／the White House）。',
      'the が付かない：湖（Lake Biwa）／単独の山（Mt. Fuji）／国名（Japan）／都市（Osaka）。',
      'the が付かない：駅・空港・公園・通り・人名（Tokyo Station／Narita Airport）。',
    ],
    sections: [
      {
        heading: 'the を付ける固有名詞',
        body: `固有名詞には冠詞を付けないのが原則だが、例外的に the が付くグループがある。まとめて覚えてしまう。

■ 川
the Shinano River（信濃川）／the Nile（ナイル川）／the Thames（テムズ川）／the Mississippi River（ミシシッピ川）
例）The Shinano River is the longest river in Japan.（信濃川は日本でいちばん長い川だ）

■ 海・大洋・海峡
the Pacific Ocean（太平洋）／the Atlantic Ocean（大西洋）／the Sea of Japan（日本海）

■ 山脈（連なった山）
the Alps（アルプス山脈）／the Rocky Mountains（ロッキー山脈）／the Japanese Alps（日本アルプス）
※ 山脈は山がいくつも連なっているので複数の感じがあり、the が付くと考えるとよい。

■ 複数形になっている国名
the United States（アメリカ合衆国）／the Philippines（フィリピン）／the Netherlands（オランダ）
※ States, Philippines と -s が付いていることに注目する。

■ 新聞・船・公共の建物
the Asahi Shimbun（朝日新聞）／the Titanic（タイタニック号）／the White House（ホワイトハウス）／the British Museum（大英博物館）

★ ポイント：「川・海・山脈・複数形の国名」の四つを唱えて覚える。この四つ以外はほぼ the なしと考えてよい。`,
      },
      {
        heading: 'the を付けない固有名詞',
        body: `次のグループには the を付けない。日本人がまちがえやすいのは、川と対になる「湖」「単独の山」である。

■ 湖
Lake Biwa（琵琶湖）／Lake Michigan（ミシガン湖）
⚠ 注意：川は the Shinano River なのに、湖は the が付かない。この対比がそのまま入試問題になる。

■ 単独の山
Mt. Fuji（富士山）／Mt. Everest（エベレスト）
⚠ 注意：山脈は the Alps、単独の山は Mt. Fuji。

■ 国名・都市名・大陸名
Japan／China／France／Osaka／London／Asia／Africa
例）I live in Japan.（× in the Japan）

■ 駅・空港・公園・通り
Tokyo Station（東京駅）／Narita Airport（成田空港）／Central Park（セントラルパーク）／Broadway（ブロードウェイ）

■ 人名・曜日・月・祝日
Ken／Ms. Tanaka／Monday／April／Christmas
例）I will see him on Monday.（月曜日に彼に会う）

■ 対比してまとめる
the Shinano River ⇔ Lake Biwa
the Alps ⇔ Mt. Fuji
the United States ⇔ Japan
the Pacific Ocean ⇔ Tokyo Bay（東京湾は the を付けないことが多い）
左右の列を対にして覚えると、どちらか一方を思い出せばもう一方も出てくる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は去年、富士山に登りました。」を英語にしなさい。',
        wrongAnswer: 'I climbed the Mt. Fuji last year.',
        trapExplanation:
          'the Alps や the Shinano River のように、地名には the が付くと思いこんでしまう。「山」というだけで the が要ると考えるのが原因。',
        correctAnswer: 'I climbed Mt. Fuji last year.',
        correctExplanation:
          '単独の山には the を付けない（Mt. Fuji, Mt. Everest）。the が付くのは連なった山脈のほう（the Alps, the Rocky Mountains）である。同じく湖も Lake Biwa と the を付けないが、川は the Shinano River と the が付く。対にして覚えるとよい。',
      },
      {
        question: '「私はアメリカ合衆国に行きたい。」を英語にしなさい。',
        wrongAnswer: 'I want to go to United States.',
        trapExplanation:
          'Japan や China に the を付けないので、国名にはすべて冠詞が不要だと考えてしまう。United States が複数形になっていることに気づいていない。',
        correctAnswer: 'I want to go to the United States.',
        correctExplanation:
          '複数形になっている国名には the を付ける（the United States, the Philippines, the Netherlands）。ふつうの国名 Japan, China, France には the を付けない。語尾に -s が付いた国名かどうかで見分ける。',
      },
    ],
  },

  {
    id: 'eigo_s102',
    subject: 'eigo',
    examType: 'chugaku',
    title: '冠詞を付けない決まった言い方',
    description: 'go to school・by bus・at home など、本来の目的で使うときに冠詞を落とす形を覚える',
    intro: 'go to school は「勉強しに学校へ行く」、go to the school は「学校という建物へ行く」。the があるかないかで意味が変わります。「バスで」も by bus と冠詞なし。本来の目的で使うときは冠詞が消えるのです。',
    order: 602,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '建物や場所を「本来の目的」で使うときは冠詞を付けない：go to school（勉強しに）／go to bed（ねるために）。',
      '建物そのものをさすときは the が付く：go to the school（学校という建物へ行く）。',
      '交通手段は by＋冠詞なし：by bus／by train／by car／by bike。ただし on foot（徒歩で）。',
      '食事名（have lunch）／スポーツ名（play tennis）／教科名（study math）は冠詞なし。',
      'at home（家で）／at school（学校で）／in bed（ねている）も冠詞を付けない。',
    ],
    sections: [
      {
        heading: '本来の目的で使うときは冠詞なし',
        body: `英語には、建物や場所を「その本来の目的のために利用する」ときに冠詞を落とす言い方がある。

■ 代表的な形
go to school（学校へ行く＝勉強しに行く）
go to bed（ねる）
go to church（礼拝に行く）
go to work（仕事に行く）
be in bed（ねている）
be at school（学校にいる＝授業を受けている）
be in the hospital／be in hospital（入院している）
例）I go to school at eight every morning.（毎朝8時に学校へ行く）
例）My brother went to bed early last night.（弟は昨夜早くねた）

■ 建物そのものをさすときは the
My mother came to the school to meet my teacher.
（母は先生に会うために学校〈という建物〉へ来た）
※ 母は勉強しに行くのではないので the school となる。
There is a big bed in the room. I sat on the bed.
（部屋に大きなベッドがある。私はそのベッドにすわった）
※ ねるためではなく、家具としてのベッドをさすので the bed。

★ ポイント：go to school は「生徒として通う」、go to the school は「その建物に行く」。日本語では区別がないが、英語では冠詞一つで意味が変わる。`,
      },
      {
        heading: '交通手段・場所・その他の無冠詞表現',
        body: `そのほか、冠詞を付けない決まった言い方をまとめる。

■ 交通手段（by＋乗り物）
by bus（バスで）／by train（電車で）／by car（車で）／by bike（自転車で）／by plane（飛行機で）／by ship（船で）
例）I go to school by bus.（バスで学校へ行く）
⚠ 注意：× by a bus／× by the bus とは言わない。ただし「徒歩で」は on foot と別の形になる。
例）I go to school on foot.（歩いて学校へ行く）＝I walk to school.

■ 場所を表す決まった形
at home（家で）／at school（学校で）／at work（仕事中で）／in class（授業中で）／at night（夜に）
例）I stayed at home yesterday.（きのうは家にいた）
例）Don’t talk in class.（授業中にしゃべってはいけません）

■ 食事・スポーツ・教科
have breakfast／have lunch／have dinner
play tennis／play baseball
study English／study science

■ 対にして覚える
go to school（通学する） ⇔ go to the school（建物へ行く）
play tennis（スポーツ） ⇔ play the piano（楽器）
by bus（交通手段） ⇔ take the bus（そのバスに乗る）
左右のちがいを説明できるようにしておくと、冠詞の問題で迷わなくなる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎晩10時にねます。」を英語にしなさい。',
        wrongAnswer: 'I go to the bed at ten every night.',
        trapExplanation:
          'bed を家具として思いうかべるため、「そのベッド」という気持ちで the を付けてしまう。日本語の「ねる」に場所の意識がないことも、判断を難しくしている。',
        correctAnswer: 'I go to bed at ten every night.',
        correctExplanation:
          'go to bed は「ねる」という意味の決まった言い方で、冠詞を付けない。ベッドという家具そのものをさすときだけ the bed となる（I sat on the bed.）。go to school, go to work も同じ考え方で、本来の目的で使うときは冠詞を落とす。',
      },
      {
        question: '「私は毎週土曜日にテニスをします。」を英語にしなさい。',
        wrongAnswer: 'I play the tennis every Saturday.',
        trapExplanation:
          'play the piano を覚えていると、play の後ろにはいつも the が要ると思いこんでしまう。楽器とスポーツで扱いが逆になることを知らないと必ず引っかかる。',
        correctAnswer: 'I play tennis every Saturday.',
        correctExplanation:
          'スポーツ名には冠詞を付けず、楽器名には the を付ける。play tennis / play soccer ⇔ play the piano / play the guitar。play の後ろに来る語がスポーツか楽器かを見て決める。教科名（study math）も冠詞なしである。',
      },
    ],
  },

  {
    id: 'eigo_s103',
    subject: 'eigo',
    examType: 'chugaku',
    title: '冠詞の総まとめ：a・the・無冠詞の選び分け',
    description: '三つの手順で冠詞を決める方法を身につけ、まぎらわしい文で確実に選べるようにする',
    intro: 'a か the か、それとも何も付けないか。迷うたびに勘で決めていては、いつまでも正答率が上がりません。数えられるか、単数か複数か、相手にどれか分かるか。この3つを順に問えば、答えは1つに決まります。',
    order: 603,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      '手順①：その名詞は数えられるか。②単数か複数か。③相手にどれのことかわかるか。',
      '相手にわかる（特定できる）なら、単数・複数・不可算のすべてで the。',
      '相手にわからない場合、単数なら a / an、複数や不可算なら冠詞を付けない。',
      '決まった言い方（play the piano／go to school／by bus）は手順より優先して覚える。',
      '名詞の前に my・this・数字などがあるときは、a / the を重ねない。',
    ],
    sections: [
      {
        heading: '三つの手順で決める',
        body: `冠詞は感覚ではなく、手順で決められる。次の三段階を順にたどる。

■ 手順①　数えられる名詞か
数えられない（water, music, homework）→ a / an は使えない。手順③へ進む。
数えられる（book, dog, apple）→ 手順②へ。

■ 手順②　単数か複数か
単数 → a / an か the のどちらか。
複数 → the か、冠詞なしのどちらか。

■ 手順③　相手にどれのことかわかるか
わかる（すでに話に出た／その場に一つ／後ろに説明が付く／世界に一つ）→ the
わからない（初めて出す／どれでもよい）→ 単数なら a / an、複数や不可算なら冠詞なし

■ 表にすると
　　　　　　　　特定できる　　特定できない
単数（可算）　　the dog　　　　a dog
複数（可算）　　the dogs　　　 dogs（冠詞なし）
不可算　　　　　the water　　　water（冠詞なし）

★ ポイント：右下の二つ（複数・不可算で特定されない場合）だけが「冠詞なし」になる。ここを覚えておけば、迷ったときの判断が速くなる。`,
        figureId: 'lf_eigoext03_103',
      },
      {
        heading: 'まぎらわしい文で練習する',
        body: `手順に当てはめながら、実際の文で確かめてみる。

■ 練習1　I bought （　） book yesterday. （　） book was interesting.
一文目：数えられる・単数・初めて出す → a book
二文目：すでに出た → The book
答え：a／The

■ 練習2　（　） sun is bright today.
世界に一つしかない → the
答え：The

■ 練習3　I like （　） music.
数えられない・特定されない → 冠詞なし
答え：（何も入れない）

■ 練習4　She plays （　） violin and （　） soccer.
楽器には the、スポーツには冠詞なし
答え：the／（何も入れない）

■ 練習5　There is （　） water in （　） glass on the table.
一つ目：数えられない・特定されない → 冠詞なし
二つ目：on the table という説明が付いて一つに決まる → the
答え：（何も入れない）／the

■ 決まった言い方は手順より優先
go to school／go to bed／by bus／at home／have lunch／play tennis／play the piano／in the morning／once a week
これらは形ごと暗記しておき、手順で考え直さない。

⚠ 注意：名詞の前に my・your・this・that・数字・some・any があるときは、a も the も付けない。× the my book／× a two books。冠詞を入れる前に、名詞の前に何があるかを必ず見る。`,
      },
    ],
    trapExamples: [
      {
        question: '「今日は太陽が明るい。」を英語にしなさい。',
        wrongAnswer: 'A sun is bright today.',
        trapExplanation:
          '数えられる名詞の単数だから a を付ける、と手順の途中で止まってしまう。「相手にどれのことかわかるか」という三つ目の手順を確かめていないのが原因。',
        correctAnswer: 'The sun is bright today.',
        correctExplanation:
          '太陽は世界に一つしかないので、初めて話に出しても相手はどれのことかわかる。したがって the を使う。a sun と書くと太陽がいくつもあることになってしまう。the moon, the earth, the sky も同じ。手順は必ず三つ目まで進める。',
      },
      {
        question: '「彼は毎朝コーヒーを飲みます。」を英語にしなさい。',
        wrongAnswer: 'He drinks a coffee every morning.',
        trapExplanation:
          '店で「コーヒー1つ」と注文する言い方を知っていると、a coffee でよいと感じてしまう。coffee が数えられない名詞であるという手順①を飛ばしている。',
        correctAnswer: 'He drinks coffee every morning.',
        correctExplanation:
          'coffee は数えられない名詞なので a を付けない。特定もされていないので冠詞なしになる。「カップ1ぱいの」と数を言いたいときは a cup of coffee とする。手順①で数えられるかどうかを確かめれば、この誤りは防げる。',
      },
    ],
  },

  // ───────────────── 6. 人称代名詞の格変化（s104〜s108） ─────────────────
  {
    id: 'eigo_s104',
    subject: 'eigo',
    examType: 'chugaku',
    title: '人称代名詞①：主格（〜は・〜が）',
    description: '名詞のかわりに使う代名詞の役割と、主語になる形をおさえる',
    intro: '日本語では「昨日、公園に行った。楽しかった。」と主語を言わなくても通じます。英語では It was fun. のように必ず主語を置かなければなりません。省けないからこそ、代名詞という短い語が発達したのです。',
    order: 604,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '代名詞＝名詞のくり返しをさけるために使う語。I, you, he, she, it, we, they が主格。',
      '英語では主語を省略できない。日本語で「〜は」が消えていても、英語では必ず置く。',
      '男性は he、女性は she、物や動物は it、複数は they を使う。',
      'it は天気・時間・曜日・距離・明暗を表す主語としても使う（It is rainy today.）。',
      '「太郎と私」は Taro and I の順にし、自分は最後に置く。',
    ],
    sections: [
      {
        heading: '代名詞の役割と主格',
        body: `同じ名詞を何度もくり返すと、文がくどくなる。そこで二度目からは代名詞に置きかえる。

■ 例
Ken is my friend. Ken is very kind.
→ Ken is my friend. He is very kind.（ケンは私の友達です。彼はとても親切です）

■ 主格の一覧（主語になる形）
I（私は）／you（あなたは・あなたたちは）／he（彼は）／she（彼女は）／it（それは）／we（私たちは）／they（彼らは・それらは）

■ どれを使うか
男性1人 → he　　女性1人 → she　　物・動物1つ → it　　2人以上・2つ以上 → they
例）This is my brother. He is ten years old.
例）That is my sister. She is a student.
例）I have a dog. It is very cute.
例）Ken and Tom are my friends. They like soccer.

■ 英語は主語を省略できない
日本語では「学校へ行きます」と主語なしで言えるが、英語では必ず主語を置く。
例）（私は）学校へ行きます。→ I go to school.（× Go to school. は「学校へ行きなさい」という命令文になってしまう）

★ ポイント：主語が抜けている英文はほぼ誤りである。作文したら、まず主語があるかを確かめる。`,
      },
      {
        heading: 'it の特別な使い方と、並べる順序',
        body: `it には「それは」と訳さない使い方がある。天気や時間を表す文で使う it である。

■ 天気・時間・曜日・日付・距離・明暗の it
It is rainy today.（今日は雨だ）
It is seven o’clock.（7時です）
It is Monday today.（今日は月曜日です）
It is June 10 today.（今日は6月10日です）
It is about two kilometers from here to the station.（ここから駅まで約2キロある）
It is dark outside.（外は暗い）
※ この it は「それは」と訳さない。日本語には対応する語がないので、そのまま形で覚える。

■ たずね方
What time is it now?（今何時ですか）→ It is nine thirty.
How is the weather today?（今日の天気はどうですか）→ It is sunny.
What day is it today?（今日は何曜日ですか）→ It is Friday.

■ 二つ以上を並べるときの順序
自分（I）は最後に置くのが礼儀とされる。
例）Taro and I are good friends.（太郎と私は仲のよい友達です）
⚠ 注意：× Me and Taro are good friends. は誤り。主語の位置なので I を使い、しかも自分を後ろに置く。
例）You and I are in the same class.（あなたと私は同じクラスです）

■ 主語が複数になると動詞も変わる
He is my friend. → He and I are good friends.
She likes soccer. → She and her sister like soccer.`,
      },
    ],
    trapExamples: [
      {
        question: '「今日は雨が降っています。」を英語にしなさい。',
        wrongAnswer: 'Rain is falling today.',
        trapExplanation:
          '日本語の「雨が降る」をそのまま単語に置きかえてしまう。英語には天気を表すときに it を主語にする決まった形があることを知らないと起きる誤り。',
        correctAnswer: 'It is rainy today.（It is raining today. も可）',
        correctExplanation:
          '天気・時間・曜日・距離・明暗を表す文では、意味を持たない it を主語に置く。この it は「それは」と訳さない。It is sunny. / It is seven o’clock. / It is Monday today. も同じ形である。日本語に対応する語がないので、形ごと覚える。',
      },
      {
        question: '「太郎と私は仲のよい友達です。」を英語にしなさい。',
        wrongAnswer: 'Me and Taro are good friends.',
        trapExplanation:
          '会話で耳にする形をまねてしまい、主語の位置に目的格の me を置いてしまう。また、日本語では「私と太郎」と自分を先に言うこともあるため、順序も逆にしがちである。',
        correctAnswer: 'Taro and I are good friends.',
        correctExplanation:
          '主語の位置には主格 I を使う。また、自分をさす語は最後に置くのが英語の習わしなので Taro and I の順になる。主語が2人になったので be動詞は are。You and I are in the same class. も同じ形である。',
      },
    ],
  },

  {
    id: 'eigo_s105',
    subject: 'eigo',
    examType: 'chugaku',
    title: '人称代名詞②：目的格（〜を・〜に）',
    description: '動詞や前置詞の後ろに置く形を、語順との関係で理解する',
    intro: 'I know he. とは言えません。動詞のうしろに来た瞬間に him に変わるからです。日本語では「彼を知っている」も「彼が来る」も「彼」のままですが、英語は文の中の位置によって形そのものが変わるのです。',
    order: 605,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '目的格＝me, you, him, her, it, us, them。「〜を」「〜に」にあたる形。',
      '動詞の後ろ（目的語の位置）では必ず目的格を使う（I know him.）。',
      '前置詞（with, for, to, at, about）の後ろも目的格（with me／for us／look at him）。',
      'you と it は主格と目的格が同じ形。',
      'and で並んだときも目的格のまま（between you and me）。',
    ],
    sections: [
      {
        heading: '位置で形が変わる',
        body: `英語は語順で役割が決まる言語である。同じ「彼」でも、文のどこに置くかで形が変わる。

■ 主格と目的格の対応
I → me（私を・私に）
you → you（あなたを）
he → him（彼を）
she → her（彼女を）
it → it（それを）
we → us（私たちを）
they → them（彼らを・それらを）
※ you と it は形が変わらない。

■ 動詞の後ろ（目的語）
I know him.（私は彼を知っている）
She likes me.（彼女は私が好きだ）
We helped them.（私たちは彼らを助けた）
Please call us tonight.（今夜私たちに電話してください）

■ 日本語との対応
「彼は」＝he、「彼を・彼に」＝him。日本語では「は」「を」という助詞で区別するが、英語では語そのものの形で区別する。だから語順と形の両方を守る必要がある。

★ ポイント：動詞のすぐ後ろに人が来たら、その形は目的格になっているかを確かめる。× I know he. はもっとも多い誤りの一つである。`,
        figureId: 'lf_eigoext03_105',
      },
      {
        heading: '前置詞の後ろも目的格',
        body: `with, for, to, at, about, from などの前置詞の後ろに来る代名詞も、必ず目的格になる。

■ 前置詞＋目的格
with me（私といっしょに）／for you（あなたのために）／to him（彼に）／at her（彼女を）／about them（彼らについて）／from us（私たちから）
例）Come with me.（私といっしょに来て）
例）This present is for you.（このプレゼントはあなたのためのものです）
例）Look at him.（彼を見て）
例）I am talking about them.（私は彼らのことを話している）

■ and でつながれたときが要注意
前置詞の後ろで人が二人並ぶと、うっかり主格を使ってしまう。
◯ between you and me（あなたと私の間で）
× between you and I
◯ This is a present for Ken and me.（これはケンと私へのプレゼントです）
× for Ken and I
⚠ 注意：and をはずして一人だけにしてみると、正しい形が見える。for ... me は自然だが、for ... I は明らかにおかしい、と確かめられる。

■ 動詞が二つの目的語を取るとき
He gave me a book.（彼は私に本をくれた）
　me（〜に）＋a book（〜を）の順。
He gave it to me.（彼はそれを私にくれた）
　「〜を」が代名詞になるときは、to を使ってこの語順にする。

■ 主格と目的格が両方出る文
He likes her, and she likes him, too.（彼は彼女が好きで、彼女も彼が好きだ）
この一文で、動詞の前が主格・後ろが目的格になっていることを確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は彼を知っています。」を英語にしなさい。',
        wrongAnswer: 'I know he.',
        trapExplanation:
          '「彼」＝he と一対一で覚えてしまうと、文のどこに置いても he を使ってしまう。日本語では「彼は」も「彼を」も同じ「彼」なので、形を変える必要に気づきにくい。',
        correctAnswer: 'I know him.',
        correctExplanation:
          '動詞の後ろ（目的語の位置）では目的格を使うので him になる。he は主語の位置に置く形である。She likes me. / We helped them. も同じ。動詞のすぐ後ろに人が来たら、目的格になっているかを必ず確かめる。',
      },
      {
        question: '（　）に正しい語を入れなさい。　This is a secret between you and （　）.',
        wrongAnswer: 'I',
        trapExplanation:
          'Taro and I のように「and でつないだら I を使う」と覚えてしまい、前置詞の後ろでも I を選んでしまう。ていねいな言い方に聞こえることも、誤りを助長する。',
        correctAnswer: 'me',
        correctExplanation:
          'between は前置詞なので、後ろの代名詞は目的格 me になる。and をはずして between ... me と考えれば、I が入らないことがすぐわかる。for Ken and me、with you and me も同じ。主格 I を使うのは、あくまで主語の位置だけである。',
      },
    ],
  },

  {
    id: 'eigo_s106',
    subject: 'eigo',
    examType: 'chugaku',
    title: '人称代名詞③：所有格（〜の）',
    description: 'my・your・his などの所有格と、名詞に付ける ’s の使い方を身につける',
    intro: "「私の本」は my book、「ケンの本」は Ken's book。ではこの2つを重ねて a my book と言えるでしょうか。言えません。所有格が付いた名詞には、a も the も重ねないからです。",
    order: 606,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '所有格＝my, your, his, her, its, our, their。必ず後ろに名詞が来る。',
      '所有格が付いた名詞に a / the は重ねない（× a my book）。',
      '人や動物の「〜の」は名詞＋’s で表す（Ken’s book／my father’s car）。',
      '複数形の -s で終わる語は、アポストロフィだけを付ける（the students’ room）。',
      '物の「〜の」は of を使うことが多い（the color of the car）。',
      'its（それの）と it’s（it is の短縮）はまったく別物。書き分けに注意。',
    ],
    sections: [
      {
        heading: '所有格の形と使い方',
        body: `「〜の」を表す形を所有格という。所有格は必ず後ろに名詞をともなう。

■ 所有格の一覧
I → my（私の）
you → your（あなたの・あなたたちの）
he → his（彼の）
she → her（彼女の）
it → its（それの）
we → our（私たちの）
they → their（彼らの・それらの）

■ 使い方
例）This is my bag.（これは私のかばんです）
例）Her father is a teacher.（彼女の父は先生です）
例）I like their songs.（私は彼らの歌が好きだ）
例）The dog wagged its tail.（その犬はしっぽをふった）

■ 冠詞と重ねない
所有格が付いたら a / the は付けない。
× a my book／× the his car
◯ my book／his car
「一つの」と「私の」を両方言いたいときは a book of mine とする。

⚠ 注意：its と it’s のちがい。
its＝それの（所有格）：The cat is licking its paw.（そのねこは自分の足をなめている）
it’s＝it is または it has の短縮形：It’s cold today.（今日は寒い）
アポストロフィが入るのは短縮形のほうである。所有格の its にはアポストロフィを付けない。`,
      },
      {
        heading: '名詞に付ける ’s と of',
        body: `代名詞ではなくふつうの名詞に「〜の」を付けたいときは、’s か of を使う。

■ 人・動物には ’s（アポストロフィ・エス）
Ken’s book（ケンの本）
my father’s car（父の車）
the dog’s name（その犬の名前）
today’s newspaper（今日の新聞）
例）This is my sister’s bike.（これは姉の自転車です）

■ 複数形の -s で終わる語には ’ だけ
the students’ room（生徒たちの部屋）
my parents’ house（両親の家）
※ students’s とは書かない。読み方は students と変わらない。
※ 複数でも -s で終わらない語は ’s を付ける。children’s books（子どもたちの本）／women’s clothes（女性の服）

■ 物には of を使うことが多い
the color of the car（その車の色）
the name of this flower（この花の名前）
the top of the mountain（山の頂上）
the end of the story（物語の終わり）
※ × the car’s color とは、ふつう言わない。生き物でないものは of を使うと覚えておく。

■ お店・家を表す ’s
I went to the dentist’s.（歯医者へ行った）
I stayed at my uncle’s.（おじの家に泊まった）
※ 後ろの office や house が省略された形である。

★ ポイント：「生き物なら ’s、物なら of」が原則。ただし時を表す語（today’s, this year’s）は例外的に ’s を使う。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に正しい語を入れなさい。　The dog wagged （　） tail.（その犬はしっぽをふった）',
        wrongAnswer: 'it’s',
        trapExplanation:
          '「それの」だから it に ’s を付ければよい、と考えてしまう。Ken’s book のように名詞には ’s を付けて所有を表すため、it にも同じ形が使えると思いこむのが原因。',
        correctAnswer: 'its',
        correctExplanation:
          '所有格の「それの」はアポストロフィのない its である。it’s は it is または it has の短縮形で、まったく別の語。It’s cold today.（今日は寒い）と The cat licked its paw.（ねこは自分の足をなめた）を並べて確認する。代名詞の所有格（my, your, his, her, its, our, their）にはアポストロフィを付けない。',
      },
      {
        question: '「これは私の父の車です。」を英語にしなさい。',
        wrongAnswer: 'This is my father car.',
        trapExplanation:
          'my を付けたことで「〜の」を言い終えた気になり、father と car の間の所有を表す形を落としてしまう。日本語の「私の父の車」に「の」が二つあることを見落としている。',
        correctAnswer: 'This is my father’s car.',
        correctExplanation:
          '「父の車」の部分にも所有の形が必要なので father’s とする。my は father にかかり、father’s が car にかかる二重の構造になっている。my sister’s bike、Ken’s book も同じ。人を表す名詞には ’s を付けると覚える。',
      },
    ],
  },

  {
    id: 'eigo_s107',
    subject: 'eigo',
    examType: 'chugaku',
    title: '人称代名詞④：所有代名詞（〜のもの）',
    description: 'mine・yours などの一語で「〜のもの」を表す形を使えるようにする',
    intro: 'This is mine book. と書きたくなりますが、mine のうしろに名詞は置きません。mine は「私のもの」で、my book をまるごと1語にした形だからです。Whose is this? への答えとしてよく使います。',
    order: 607,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '所有代名詞＝mine, yours, his, hers, ours, theirs。「〜のもの」を一語で表す。',
      '所有代名詞の後ろには名詞を置かない（× This is mine book.）。',
      'his は所有格も所有代名詞も同じ形。it には所有代名詞がない。',
      'hers, yours, theirs にアポストロフィは付けない（× her’s）。',
      'Whose is this?（これはだれのものですか）に対する答えとして使う。',
      'a friend of mine（私の友達の一人）の形でも使う。',
    ],
    sections: [
      {
        heading: '所有代名詞の形と使い方',
        body: `「私のもの」「あなたのもの」のように、〈所有格＋名詞〉をまとめて一語で言いかえた形を所有代名詞という。

■ 一覧
my book → mine（私のもの）
your book → yours（あなたのもの）
his book → his（彼のもの）
her book → hers（彼女のもの）
our book → ours（私たちのもの）
their book → theirs（彼らのもの）
※ it には所有代名詞がなく、its を「それのもの」の意味では使わない。

■ 使い方
例）This bag is mine.（このかばんは私のものです）
例）That car is theirs.（あの車は彼らのものです）
例）Is this pen yours?（このペンはあなたのものですか）
例）My bike is old, but hers is new.（私の自転車は古いが、彼女のは新しい）

■ 後ろに名詞を置かない
所有代名詞にはすでに名詞の意味がふくまれている。
× This is mine book. → ◯ This is my book. または This is mine.
⚠ 注意：my（所有格）は名詞とセットで、mine（所有代名詞）は単独で使う。

■ アポストロフィを付けない
◯ hers／yours／ours／theirs
× her’s／your’s／our’s／their’s
名詞に付ける Ken’s とちがい、代名詞にはアポストロフィを使わない。ここは書き取り問題でねらわれる。`,
      },
      {
        heading: 'Whose とのやりとり・a friend of mine',
        body: `所有代名詞は、「だれのもの？」とたずねる文への答えとしてよく使われる。

■ Whose を使ったやりとり
Whose bag is this?（これはだれのかばんですか）→ It’s mine.（私のものです）
Whose is this bag?（このかばんはだれのものですか）→ It’s Ken’s.（ケンのものです）
※ 名詞の場合は Ken’s のように ’s の形が、そのまま「ケンのもの」を表す。
Whose pens are these?（これらはだれのペンですか）→ They are hers.（彼女のものです）

■ a friend of mine の形
「私の友達の一人」のように、a と my を両方使いたいときは of を使う。
a friend of mine（私の友達の一人）
a book of his（彼の本の一冊）
some friends of ours（私たちの友達の何人か）
⚠ 注意：of の後ろは所有代名詞にする。× a friend of my は誤り。

■ 比べる文でよく使う
My hair is longer than hers.（私の髪は彼女のより長い）
Your idea is better than mine.（あなたの考えは私のよりよい）
※ than の後ろで、同じ名詞のくり返しをさけるために所有代名詞を使う。

■ 練習
This is my desk, and that is （　）.（あれは彼女のものです）→ hers
Is this umbrella （　）?（これはあなたのですか）→ yours
These books are （　）.（これらは私たちのものです）→ ours`,
      },
    ],
    trapExamples: [
      {
        question: '「このかばんは私のものです。」を英語にしなさい。',
        wrongAnswer: 'This bag is my.',
        trapExplanation:
          '「私の」＝my と覚えているため、名詞がなくても my を置いてしまう。日本語では「私のです」と言えるので、英語でも同じように言えると感じてしまう。',
        correctAnswer: 'This bag is mine.',
        correctExplanation:
          'my は後ろに名詞をともなう所有格なので、単独では使えない。名詞なしで「私のもの」と言うときは所有代名詞 mine を使う。This is my bag. と This bag is mine. は同じ内容を別の形で表している。yours, hers, ours, theirs も同じ使い方をする。',
      },
      {
        question: '「あの自転車は彼女のものです。」を英語にしなさい。',
        wrongAnswer: 'That bike is her’s.',
        trapExplanation:
          'Ken’s bike のように名詞には ’s を付けて所有を表すので、代名詞にも同じ形が使えると考えてしまう。音が同じであることも誤りを見えにくくする。',
        correctAnswer: 'That bike is hers.',
        correctExplanation:
          '所有代名詞 hers, yours, ours, theirs にはアポストロフィを付けない。アポストロフィを使うのは、Ken’s のようにふつうの名詞に付けるときだけである。its も同じで、アポストロフィが入る it’s は it is の短縮形になってしまう。',
      },
    ],
  },

  {
    id: 'eigo_s108',
    subject: 'eigo',
    examType: 'chugaku',
    title: '人称代名詞の格変化 総まとめ',
    description: '主格・所有格・目的格・所有代名詞の四つを、表として完全に覚える',
    intro: 'I・my・me・mine。同じ「私」なのに、英語には4つの形があります。日本語では文のどこに置いても「私」のままなので、ここは覚え直しが必要です。文の中の位置さえ見れば、どの形を使うかは必ず決まります。',
    order: 608,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      'I – my – me – mine／you – your – you – yours／he – his – him – his。',
      'she – her – her – hers／it – its – it –（なし）。',
      'we – our – us – ours／they – their – them – theirs。',
      'he の行は所有格も所有代名詞も his。she の行は主格以外がすべて her で始まる形。',
      '文の中の位置（主語か、名詞の前か、動詞や前置詞の後ろか）を見て、どの列かを決める。',
    ],
    sections: [
      {
        heading: '四つの列を声に出して覚える',
        body: `人称代名詞は、四つの形をひとまとまりにして唱えて覚えるのがいちばん速い。

■ 唱え方（主格－所有格－目的格－所有代名詞）
I – my – me – mine
you – your – you – yours
he – his – him – his
she – her – her – hers
it – its – it –（所有代名詞はなし）
we – our – us – ours
they – their – them – theirs

■ 列の意味
第1列（主格）：〜は、〜が　→　主語の位置
第2列（所有格）：〜の　→　名詞の前
第3列（目的格）：〜を、〜に　→　動詞・前置詞の後ろ
第4列（所有代名詞）：〜のもの　→　単独で使う

■ 形が重なるところに注意
you：主格と目的格が同じ（you）
it：主格と目的格が同じ（it）
he：所有格と所有代名詞が同じ（his）
she：所有格と目的格が同じ（her）
この四か所が入試でねらわれる。とくに she の行は her が二回出てくるので、どちらの意味かを文の位置で判断する必要がある。
例）I know her.（彼女を知っている＝目的格）
例）I know her sister.（彼女の姉を知っている＝所有格）`,
        figureId: 'lf_eigoext03_108',
      },
      {
        heading: '位置から形を決める練習',
        body: `どの形を使うかは、文の中の位置だけで決まる。次の手順で判断する。

■ 手順
①主語の位置か → 主格
②すぐ後ろに名詞があるか → 所有格
③動詞や前置詞の後ろか → 目的格
④後ろに名詞がなく、単独で「〜のもの」か → 所有代名詞

■ 練習1　（　） am a student.　→ 主語の位置 → I
■ 練習2　This is （　） pen.（私の）→ 後ろに名詞 pen → my
■ 練習3　Please help （　）.（私を）→ 動詞の後ろ → me
■ 練習4　This pen is （　）.（私のもの）→ 単独 → mine
■ 練習5　I like （　） very much.（彼女を）→ 動詞の後ろ → her
■ 練習6　（　） mother is a nurse.（彼女の）→ 後ろに名詞 mother → Her
■ 練習7　This is not my bike. It is （　）.（彼らのもの）→ 単独 → theirs
■ 練習8　We went there with （　）.（彼と）→ 前置詞の後ろ → him

■ 一文で全部確かめる
He gave his book to me, and I gave mine to him.
（彼は自分の本を私にくれ、私は私のものを彼にあげた）
he（主格）／his（所有格）／me（目的格）／mine（所有代名詞）／him（目的格）が一文に入っている。声に出して読み、それぞれがなぜその形なのかを説明できるようにする。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女は私の友達です。」を英語にしなさい。',
        wrongAnswer: 'Her is my friend.',
        trapExplanation:
          'she の行は her が二回出てくるので、目的格・所有格の her を主語の位置にも使ってしまう。会話で her をよく耳にすることも影響する。',
        correctAnswer: 'She is my friend.',
        correctExplanation:
          '主語の位置には主格 she を使う。her は「彼女を」（目的格）または「彼女の」（所有格）の形である。I know her.（彼女を知っている）／I know her sister.（彼女の姉を知っている）と並べて、位置ごとの形を確かめる。',
      },
      {
        question: '「この本は彼女のものです。」を英語にしなさい。',
        wrongAnswer: 'This book is her.',
        trapExplanation:
          '「彼女の」＝her と覚えているため、「彼女のもの」も her でよいと考えてしまう。she の行に形が三つ（her が二回、hers が一回）あることが混乱のもとになる。',
        correctAnswer: 'This book is hers.',
        correctExplanation:
          '後ろに名詞がなく、単独で「〜のもの」を表すときは所有代名詞 hers を使う。her は後ろに名詞をともなう所有格（her book）か、動詞・前置詞の後ろに来る目的格（I know her.）である。she – her – her – hers と唱えて、四つの位置を区別する。',
      },
    ],
  },

  // ───────────────── 7. 再帰代名詞・指示代名詞・不定代名詞（s109〜s112） ─────────────────
  {
    id: 'eigo_s109',
    subject: 'eigo',
    examType: 'chugaku',
    title: '再帰代名詞：myself・yourself・themselves',
    description: '「自分自身」を表す形の作り方と、決まった言い方をおさえる',
    intro: '「自分で作った」を I made it by me. とは言えません。by myself が正しい形です。主語と同じ人がもう一度出てくるときは、目的格ではなく myself のような形にします。作り方には規則があります。',
    order: 609,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '単数は -self、複数は -selves を付ける（myself／ourselves）。',
      'myself, yourself, himself, herself, itself／ourselves, yourselves, themselves。',
      '一・二人称は所有格に付け（my+self, your+self）、三人称は目的格に付ける（him+self, them+selves）。',
      '× hisself／× theirselves は誤り。himself／themselves が正しい。',
      '主語と同じ人を動詞の後ろに置くときは、目的格ではなく再帰代名詞にする（He saw himself.）。',
      'by oneself（一人で）／enjoy oneself（楽しむ）／help oneself to（自由に取って食べる）。',
    ],
    sections: [
      {
        heading: '形の作り方',
        body: `「自分自身」を表す代名詞を再帰代名詞という。作り方には規則がある。

■ 一覧
I → myself（私自身）
you → yourself（あなた自身）
he → himself（彼自身）
she → herself（彼女自身）
it → itself（それ自体）
we → ourselves（私たち自身）
you → yourselves（あなたがた自身）
they → themselves（彼ら自身）

■ 作り方の規則
①複数は -selves になる（self の複数形が selves だから。leaf → leaves と同じ変化）。
②一人称・二人称は所有格に付ける：my + self／your + self／our + selves
③三人称は目的格に付ける：him + self／them + selves／her + self（her は所有格と目的格が同じ形）
⚠ 注意：③の規則を知らないと、hisself（× 所有格 his に付けた形）や theirselves（× 所有格 their に付けた形）と書いてしまう。正しくは himself, themselves である。

■ you の単数と複数
一人に言うなら yourself、二人以上に言うなら yourselves。
例）Did you hurt yourself?（けがをしましたか）…相手が一人
例）Help yourselves to the cake.（ケーキを自由に取ってください）…相手が複数

★ ポイント：三人称だけ目的格から作る、と覚えておけば hisself・theirselves の誤りは防げる。`,
      },
      {
        heading: '使い方と決まった言い方',
        body: `再帰代名詞は、主語と同じ人・物をもう一度さすときに使う。

■ 動詞の後ろで使う
He looked at himself in the mirror.（彼は鏡で自分を見た）
She hurt herself.（彼女はけがをした＝自分を傷つけた）
I introduced myself to the class.（私はクラスで自己紹介をした）
⚠ 注意：He looked at him. と書くと、「彼は（別の）彼を見た」という意味になり、別人をさしてしまう。主語と同じ人なら必ず再帰代名詞を使う。

■ 意味を強めるために使う
I made this cake myself.（このケーキは私が自分で作った）
The teacher himself said so.（先生自身がそう言った）
※ この使い方では、取りのぞいても文が成り立つ。

■ 覚えるべき熟語
by oneself（一人で・独力で）：He went there by himself.（彼は一人でそこへ行った）
for oneself（自分のために・自分で）：Think for yourself.（自分の頭で考えなさい）
enjoy oneself（楽しく過ごす）：We enjoyed ourselves at the party.（パーティーで楽しく過ごした）
help oneself to（〜を自由に取って食べる）：Help yourself to the cookies.（クッキーを自由に食べてね）
say to oneself（心の中で思う）：He said to himself, “I can do it.”
take care of oneself（体に気をつける）：Take care of yourself.（お大事に）

★ ポイント：熟語では oneself の部分を、主語に合わせて変える。主語が he なら himself、we なら ourselves になる。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は一人でそこへ行きました。」を英語にしなさい。',
        wrongAnswer: 'He went there by hisself.',
        trapExplanation:
          'myself が my + self、yourself が your + self なので、he の所有格 his に self を付ければよいと考えてしまう。規則を最後まで確かめていないのが原因。',
        correctAnswer: 'He went there by himself.',
        correctExplanation:
          '三人称の再帰代名詞は、所有格ではなく目的格に付けて作る。him + self で himself、them + selves で themselves となる。hisself, theirselves という形は存在しない。「一・二人称は所有格から、三人称は目的格から」と規則で覚える。',
      },
      {
        question: '「彼は鏡で自分の姿を見た。」を英語にしなさい。',
        wrongAnswer: 'He looked at him in the mirror.',
        trapExplanation:
          '「彼を見た」だから目的格 him でよい、と考えてしまう。日本語の「自分」を英語でどう表すかを意識していないと起きる誤りである。',
        correctAnswer: 'He looked at himself in the mirror.',
        correctExplanation:
          '主語と同じ人をもう一度さすときは、目的格ではなく再帰代名詞を使う。He looked at him. と書くと、主語とは別の男性を見たという意味になってしまう。She hurt herself.（彼女はけがをした）も同じ形で、目的格を使うと別人を傷つけたことになる。',
      },
    ],
  },

  {
    id: 'eigo_s110',
    subject: 'eigo',
    examType: 'chugaku',
    title: '指示代名詞：this・that・these・those',
    description: '距離と数で使い分ける指示語と、電話や紹介での決まった言い方を覚える',
    intro: '電話で「もしもし、ケンです」と名乗るとき、英語では I am Ken. ではなく This is Ken. と言います。自分を this で指すのは不思議ですが、これが決まった言い方です。this と that の使い分けを見ていきます。',
    order: 610,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '近い＋単数＝this／遠い＋単数＝that／近い＋複数＝these／遠い＋複数＝those。',
      '複数の these・those の後ろの名詞は複数形になる（these books）。',
      '主語が these・those なら動詞は are・were。',
      '人を紹介するときは This is 〜.（こちらは〜さんです）を使う。',
      '電話で名乗るときは This is Ken (speaking).、相手を確かめるときは Is that Ken?。',
    ],
    sections: [
      {
        heading: '距離と数で決まる四つの語',
        body: `this・that・these・those は、話し手からの距離と、さすものの数で使い分ける。

■ 四つの使い分け
this（これ・この）…近くにある一つ
that（あれ・あの）…遠くにある一つ
these（これら・これらの）…近くにある二つ以上
those（あれら・あれらの）…遠くにある二つ以上

■ 例文
This is my pen.（これは私のペンです）
That is your bag.（あれはあなたのかばんです）
These are my books.（これらは私の本です）
Those are their bikes.（あれらは彼らの自転車です）

■ 名詞の前に置く使い方
this book（この本）／that car（あの車）／these books（これらの本）／those cars（あれらの車）
⚠ 注意：these・those の後ろの名詞は必ず複数形にする。× these book は誤り。

■ 動詞の形
This is my pen.（単数 → is）
These are my pens.（複数 → are）
That was a good movie.（単数・過去 → was）
Those were good movies.（複数・過去 → were）

■ 単数の文を複数の文に書きかえる
Is this your pen? → Are these your pens?
That is a beautiful flower. → Those are beautiful flowers.
※ ①this/that ②be動詞 ③a の消去 ④名詞の複数形、の四か所すべてを直す。`,
        figureId: 'lf_eigoext03_110',
      },
      {
        heading: '決まった言い方',
        body: `this・that には、日本語と形が合わない決まった使い方がある。会話文の問題で必ず出る。

■ 人を紹介するとき
This is my friend, Ken.（こちらは私の友達のケンです）
※ 人に対して「これは」とは訳さず、「こちらは」と訳す。He is my friend, Ken. でも通じるが、紹介の場面では This is 〜. を使う。

■ 電話での言い方
This is Ken speaking.（もしもし、ケンです）…自分が名乗る
Is that Ken?／Who is this?（ケンですか／どちらさまですか）…相手を確かめる
⚠ 注意：電話で名乗るときに I am Ken. とは言わない。決まった言い方として覚える。

■ 前に言ったことをさす that
He said nothing. That made me angry.（彼は何も言わなかった。そのことが私を怒らせた）
※ that は、前の文の内容全体をさすことができる。

■ 「あちらの人々」を表す those
Those people are from Canada.（あちらの人々はカナダ出身だ）
Those who work hard will succeed.（努力する人々は成功するだろう）※ やや難しい言い方

■ 会話でよく使う形
What is this?（これは何ですか）→ It is a camera.（カメラです）
※ 答えるときは this ではなく it を使う。
Is this yours?（これはあなたのものですか）→ Yes, it is.
「これは何？」に対して「それは〜です」と答える、という日本語と同じ流れになる。`,
      },
    ],
    trapExamples: [
      {
        question: '「これらは私の本です。」を英語にしなさい。',
        wrongAnswer: 'This are my books.',
        trapExplanation:
          '名詞 books を複数形にしたところで満足してしまい、指示語と be動詞の組み合わせを見直さない。「これら」にあたる語が this とは別にあることを忘れている。',
        correctAnswer: 'These are my books.',
        correctExplanation:
          'this の複数形は these である。主語が複数になったので be動詞も are になる。単数の文を複数の文に書きかえるときは、①this→these ②is→are ③a を消す ④名詞を複数形にする、の四か所をすべて直す。',
      },
      {
        question: '電話で「もしもし、ケンです。」と名乗るとき、正しい言い方はどれですか。',
        wrongAnswer: 'I am Ken.',
        trapExplanation:
          '「私はケンです」という日本語をそのまま英語にしてしまう。文法としては正しい文なので、誤りだと気づきにくい。',
        correctAnswer: 'This is Ken (speaking).',
        correctExplanation:
          '電話で名乗るときは This is 〜. を使うのが英語の決まった言い方である。相手を確かめるときは Is that Ken? または Who is this? と言う。人を紹介するときの This is my friend, Ken. と合わせて、this が人をさす場面として覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s111',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'it と one の使い分け',
    description: '同じ物をさす it と、同じ種類の別の物をさす one を区別する',
    intro: '「ペンをなくしたので、新しいのを買った」の「新しいの」は it でしょうか。ちがいます。なくしたペンとは別のものなので a new one です。同じものか、同じ種類の別のものか。日本語の「の」では区別できません。',
    order: 611,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'it＝前に出たものと「まったく同じ物」。one＝同じ種類の「別の物」。',
      '複数のときは them（同じ物）／ones（別の物）を使う。',
      'one に形容詞が付くと a が必要（a red one／a new one）。',
      'the one は「その〜」と特定するときに使う（the one on the desk）。',
      '不可算名詞には one を使えない。some を使う（I need some.）。',
    ],
    sections: [
      {
        heading: 'it と one のちがい',
        body: `どちらも前に出た名詞のくり返しをさけるための語だが、さす中身がちがう。

■ it＝まったく同じ物
例）I lost my pen. I looked for it, but I couldn’t find it.
（ペンをなくした。それをさがしたが、見つけられなかった）
※ さがしたのは、なくしたその同じペンである。

■ one＝同じ種類の別の物
例）I lost my pen, so I bought a new one.
（ペンをなくしたので、新しいのを買った）
※ 買ったのは別の新しいペンである。it を使うと「なくしたそのペンを買った」という変な意味になってしまう。

■ 複数のとき
them＝同じ物たち：I have two dogs. I take them for a walk every day.
ones＝別の物たち：These apples are small. I want bigger ones.

■ 見分け方
「そのもの自体」なら it、「同じようなもの」なら one。日本語では「それ」「の」で言い分けるので、和訳から判断してもよい。
例）Do you have a pen? — Yes, I have one.（ペンを持っていますか。—はい、1本持っています）
※ 相手の言ったペンそのものではなく、自分の持っているペンなので one。`,
        figureId: 'lf_eigoext03_111',
      },
      {
        heading: 'one の使い方の細かい約束',
        body: `one には、形容詞や the と組み合わせるときの約束がある。

■ 形容詞が付くと a が必要
◯ a red one（赤いの）／a new one（新しいの）／a big one（大きいの）
× red one
例）This bag is too small. I want a bigger one.（このかばんは小さすぎる。もっと大きいのがほしい）
※ 何も付かない場合は a を付けない。I need one.（1つ必要だ）

■ the one＝その〜
特定できるときは the one を使う。
例）Which is your umbrella? — The one by the door.（どれがあなたのかさですか。—ドアのそばのです）
例）This bike is the one I bought last year.（この自転車は、私が去年買ったものです）

■ 複数形は ones
例）I like these shoes better than those ones.（あれらよりこれらのくつのほうが好きだ）
例）Which cakes do you want? — The chocolate ones, please.

■ 不可算名詞には使えない
one は数えられる名詞のかわりにしか使えない。
× Do you have any water? — Yes, I have one.
◯ Do you have any water? — Yes, I have some.
⚠ 注意：数えられない名詞のくり返しをさけるときは some / any / it を使う。

■ まとめの練習
I don’t like this cap. Show me another （　）.→ one
Where is my key? I put （　） on the table.→ it
These pencils are old. I need new （　）.→ ones`,
      },
    ],
    trapExamples: [
      {
        question: '「私はペンをなくしたので、新しいのを買いました。」を英語にしなさい。',
        wrongAnswer: 'I lost my pen, so I bought it.',
        trapExplanation:
          '日本語の「新しいの」の「の」を、前に出たペンをさす it だと考えてしまう。it と one のちがいを「同じ物か別の物か」でとらえていないのが原因。',
        correctAnswer: 'I lost my pen, so I bought a new one.',
        correctExplanation:
          '買ったのは、なくしたペンとは別の新しいペンなので one を使う。it を使うと「なくしたそのペンを買った」という意味になり、話が通らない。まったく同じ物をさすときだけ it を使い、同じ種類の別の物には one を使う。',
      },
      {
        question: '「このかばんは小さすぎます。もっと大きいのがほしい。」の後半を英語にしなさい。',
        wrongAnswer: 'I want bigger one.',
        trapExplanation:
          'one は代名詞だから冠詞はいらないと考えてしまう。I want one. という形が正しいことも、a を落とす原因になる。',
        correctAnswer: 'I want a bigger one.',
        correctExplanation:
          'one に形容詞が付くと、ふつうの名詞と同じように a / an が必要になる。a new one, a red one, a bigger one。形容詞が付かない場合は I need one. のように a を付けない。複数なら ones を使い、a は付けない（I want bigger ones.）。',
      },
    ],
  },

  {
    id: 'eigo_s112',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'some・any・another・the other',
    description: '数や残りの数によって使い分ける不定代名詞を整理する',
    intro: '「もう1杯いかがですか」は Would you like another cup? と言います。another は an と other が合わさった語なので、a は付きません。some と any の使い分けとあわせて、残りの数で決まるしくみを見ます。',
    order: 612,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      'some は肯定文、any は疑問文・否定文で使うのが原則。',
      '人にすすめる疑問文では some を使う（Would you like some tea?）。',
      'another＝an + other。「もう一つ（残りがまだある）」を表し、a は付けない。',
      '2つのうち残りの1つは the other。3つ以上で残り全部は the others。',
      '「ほかのいくつか（特定しない）」は others、「ほかの〜」は other＋複数名詞。',
    ],
    sections: [
      {
        heading: 'some と any',
        body: `some と any は、どちらも「いくつかの・いくらかの」を表すが、使う文の種類がちがう。

■ 原則
some → 肯定文　　any → 疑問文・否定文
例）I have some questions.（質問がいくつかあります）
例）Do you have any questions?（質問はありますか）
例）I don’t have any questions.（質問はありません）

■ 数えられる名詞・数えられない名詞のどちらにも使える
some books（何冊かの本）／some water（いくらかの水）
any pens（何本かのペン）／any money（いくらかのお金）

■ 例外①：すすめる・たのむ疑問文では some
Would you like some coffee?（コーヒーはいかがですか）
Can I have some water?（水をいただけますか）
※ 「あるはずだ」「もらえるはずだ」と思って言う疑問文では some を使う。

■ 例外②：肯定文の any は「どんな〜でも」
Any student can join the club.（どの生徒でもクラブに入れる）
You can take any book you like.（好きな本をどれでも取っていいですよ）

■ 代名詞としての使い方
名詞を付けずに単独でも使える。
例）I need some pens. Do you have any?（ペンが何本かいる。持っていますか）
例）Some of my friends live in Tokyo.（友達の何人かは東京に住んでいる）`,
      },
      {
        heading: 'another と the other',
        body: `「もう一つ」「残りの一つ」は、残っている数によって形が変わる。ここは入試の頻出項目である。

■ another＝an + other
まだ残りがいくつもあるときの「もう一つ・別の一つ」。
例）This cake is delicious. Can I have another?（このケーキはおいしい。もう一つもらえますか）
例）I don’t like this color. Show me another one.（この色は好きではない。別のを見せてください）
⚠ 注意：another にはすでに an が入っているので、a を付けない（× an another）。また後ろに複数形も置かない（× another books）。

■ the other＝残りの一つ（もう決まっている）
2つのうち1つを取ったら、残りは1つに決まるので the other。
例）I have two dogs. One is white, and the other is black.
（犬を2ひき飼っている。1ぴきは白で、もう1ぴきは黒だ）

■ the others＝残り全部（3つ以上）
例）There are five students. One is Japanese, and the others are Americans.
（生徒が5人いる。1人は日本人で、残りはみなアメリカ人だ）

■ others＝ほかの人・物（特定しない）
例）Some like baseball, and others like soccer.
（野球が好きな人もいれば、サッカーが好きな人もいる）

■ 整理
　　残りがまだ複数ある → another（1つ）／others（複数）
　　残りが決まっている → the other（1つ）／the others（複数）
the が付くかどうかは、「残りが全部決まっているか」で判断する。`,
        figureId: 'lf_eigoext03_112',
      },
    ],
    trapExamples: [
      {
        question: '「ペンを何本か持っていますか。」を英語にしなさい。',
        wrongAnswer: 'Do you have some pens?',
        trapExplanation:
          '「何本か」＝some と一対一で覚えているため、疑問文でもそのまま some を使ってしまう。some を使う疑問文（すすめる文）が実際にあることも、判断を難しくする。',
        correctAnswer: 'Do you have any pens?',
        correctExplanation:
          'ふつうの疑問文・否定文では any を使う。some を使うのは Would you like some tea? のように、相手にすすめたり、もらえると思ってたのんだりする疑問文の場合である。「たずねる」なら any、「すすめる」なら some と区別する。',
        },
      {
        question: '「私は犬を2ひき飼っています。1ぴきは白で、もう1ぴきは黒です。」の後半を英語にしなさい。',
        wrongAnswer: 'One is white, and another is black.',
        trapExplanation:
          '「もう1ぴき」を「もう一つ」と考えて another を選んでしまう。残りが1ぴきに決まっているかどうかを確かめていないのが原因である。',
        correctAnswer: 'One is white, and the other is black.',
        correctExplanation:
          '2ひきのうち1ぴきを取れば、残りは1ぴきに決まる。決まっているものには the を付けるので the other となる。another は「残りがまだいくつもあるうちの、もう一つ」を表す。3つ以上で残り全部をさすときは the others を使う。',
      },
    ],
  },

  // ───────────────── 8. 集合名詞・固有名詞の扱い（s113〜s115） ─────────────────
  {
    id: 'eigo_s113',
    subject: 'eigo',
    examType: 'chugaku',
    title: '集合名詞：family・people・police',
    description: 'まとまりを表す名詞の単数・複数の扱いを整理する',
    intro: '「私の家族は5人です」を My family is five. と言っても通じません。family はひとまとまりで単数あつかい、people はいつも複数あつかいです。数え方の感覚が日本語とずれる語をここで整理します。',
    order: 613,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'family, team, class, group, club は、一つのまとまりとして単数あつかいにするのが基本。',
      'people は形が単数に見えても、いつも複数あつかい（people are）。',
      'police も複数あつかい（The police are coming.）。',
      'peoples は「諸民族」という別の意味になるので、「人々」の意味では -s を付けない。',
      '「家族は5人です」は There are five people in my family. などの形で表す。',
    ],
    sections: [
      {
        heading: 'まとまりを表す名詞',
        body: `family（家族）や team（チーム）のように、複数の人が集まって一つのまとまりを作る名詞を集合名詞という。

■ 一つのまとまりとして見る → 単数あつかい
My family is large.（うちは大家族だ）
Our team is very strong.（私たちのチームはとても強い）
Our class has thirty students.（うちのクラスには30人の生徒がいる）
※ family, team, class, group, club はふつう単数あつかいで、is / has / was を使う。

■ 複数形にもできる
まとまりが二つ以上あるときは、ふつうに複数形にする。
例）There are ten families in this building.（この建物には10世帯が住んでいる）
例）Two teams played in the final.（決勝には2チームが出た）

■ 「家族は何人ですか」の言い方
日本語の「私の家族は5人です」を直訳すると誤りになる。
× My family is five.／× My family are five people.
◯ There are five people in my family.（私の家族は5人です）
◯ I have a family of five.
◯ My family has five members.
※ 入試の英作文では、There are 〜 in my family. の形を覚えておくと安全である。

★ ポイント：集合名詞はまず単数あつかいと覚え、複数の建物・チームなど数がふえたときだけ複数形にする。`,
      },
      {
        heading: 'people と police',
        body: `形からは判断できないのに複数あつかいになる語がある。とくに people と police は必ず問われる。

■ people（人々）
いつも複数あつかい。-s は付けない。
例）Many people were at the station.（駅にはたくさんの人がいた）
例）There are twenty people in this room.（この部屋には20人いる）
例）Japanese people are kind.（日本人は親切だ）
⚠ 注意：× There is many people.／× many peoples はどちらも誤り。
※ peoples と -s を付けると「諸民族」という別の意味になる。the peoples of Asia（アジアの諸民族）。

■ police（警察）
いつも複数あつかい。the を付けて使うのがふつう。
例）The police are looking for the man.（警察はその男をさがしている）
例）Call the police!（警察を呼んで）
※ 警察官1人は a police officer と言う。× a police は誤り。

■ その他の複数あつかいの語
cattle（牛の群れ）：The cattle are in the field.
※ 中学入試では people と police の二語をおさえれば十分である。

■ 数え方のまとめ
person（1人） → two people（2人）
police officer（警察官1人） → three police officers（警察官3人）
family（1家族） → two families（2家族）
それぞれ、数えるときにどの語を使うかを確かめておく。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に is か are を入れなさい。　The police （　） looking for the man.',
        wrongAnswer: 'is',
        trapExplanation:
          'police に -s が付いていないので単数だと考え、また「警察」という組織を一つのまとまりとしてとらえて is を選んでしまう。',
        correctAnswer: 'are',
        correctExplanation:
          'police は、警察官たちを表す複数あつかいの語なので動詞は are になる。1人をさすときは a police officer と言う。同じく people も -s が付いていないが複数あつかいで、Many people were there. のように are / were を使う。',
      },
      {
        question: '「公園にはたくさんの人がいました。」を英語にしなさい。',
        wrongAnswer: 'There were many peoples in the park.',
        trapExplanation:
          '「たくさんの人」だから複数形にしなければ、と考えて people にさらに -s を付けてしまう。people 自体がすでに複数を表していることを見落としている。',
        correctAnswer: 'There were many people in the park.',
        correctExplanation:
          'people は person の複数にあたる語で、それ自体が複数を表すため -s を付けない。peoples と書くと「諸民族」という別の意味になってしまう。children や men に -s を重ねないのと同じ考え方である。',
      },
    ],
  },

  {
    id: 'eigo_s114',
    subject: 'eigo',
    examType: 'chugaku',
    title: '固有名詞の書き方と使い方',
    description: '大文字で書き始める語の範囲と、固有名詞に冠詞を付けない原則を確認する',
    intro: '月曜日は Monday、英語は English。文のとちゅうでも大文字で書き始めます。ところが春は spring、算数は math と小文字のままです。同じ「名前」に見えるのに分かれるのはなぜか、線引きをはっきりさせます。',
    order: 614,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '人名・地名・国名・言語名・曜日・月・祝日は、文の途中でも大文字で書き始める。',
      '季節（spring, summer）と教科の多く（math, science）は小文字のまま。ただし English は言語名なので大文字。',
      '固有名詞には a も the も付けないのが原則（Japan／Tokyo／Ken）。',
      '言語名に the は付けない（× the English）。',
      '敬称・略号も大文字：Mr., Ms., Dr., Mt., Lake, St.。',
    ],
    sections: [
      {
        heading: '大文字で書き始める語',
        body: `英語では、世界に一つしかない名前を大文字で書き始める。文の途中にあっても大文字にする。

■ 大文字にするもの
①人名：Ken, Ms. Tanaka, Bob Smith
②地名・国名：Japan, Osaka, London, Asia
③言語名・国民名：English, Japanese, French, American
④曜日：Monday, Sunday
⑤月：January, April, December
⑥祝日・行事：Christmas, New Year’s Day
⑦建物・組織名：Tokyo Station, Osaka Castle
⑧書名・題名の主な語：The Old Man and the Sea
⑨I（私は）はいつも大文字

■ 小文字のままのもの
①季節：spring, summer, fall（autumn）, winter
②教科の多く：math, science, music, history（ただし English, Japanese は言語名なので大文字）
③方角：east, west, north, south
④動物・物の名前：dog, apple, desk

■ 例文で確かめる
I study English on Monday.（月曜日に英語を勉強する）
We go to Kyoto in spring.（春に京都へ行く）
My birthday is in December.（誕生日は12月です）
⚠ 注意：english, monday のように小文字で書くのは、日本人にとても多い誤りである。書き取りでは必ず頭の文字を確かめる。`,
      },
      {
        heading: '固有名詞と冠詞',
        body: `固有名詞は、それ自体で「どれのことか」が決まっているので、原則として a も the も付けない。

■ 冠詞を付けない
Japan（× the Japan）／Tokyo（× a Tokyo）／Ken（× the Ken）／Mt. Fuji（× the Mt. Fuji）
例）I live in Japan.／This is Ken.／We climbed Mt. Fuji.

■ 言語名にも the を付けない
◯ I speak English.（私は英語を話す）
× I speak the English.
◯ She can speak Japanese well.（彼女は日本語をじょうずに話せる）
※ ただし「英語の授業」は an English class、「英語の先生」は an English teacher のように、後ろに名詞が来れば冠詞が必要になる。

■ 例外的に the が付く固有名詞（復習）
川・海・山脈・複数形の国名・新聞・船：the Shinano River／the Pacific Ocean／the Alps／the United States／the Asahi Shimbun

■ 敬称・略号
Mr. Smith（スミスさん・男性）／Ms. Tanaka（田中さん・女性）／Dr. Brown（ブラウン先生・医師や博士）／Mt. Fuji（富士山）／Lake Biwa（琵琶湖）／St. Mary（聖マリア）
※ Mr., Ms., Dr., Mt. の後ろにはピリオドを打ち、次の語との間を一つあける。
⚠ 注意：Mr. の後ろに下の名前だけを置くことはしない。Mr. Bob ではなく Mr. Smith（名字）とする。

■ 家族を表す語の大文字
呼びかけや名前のかわりに使うときは大文字にする。
例）Thank you, Mom.（ありがとう、お母さん）
例）My mother is a nurse.（母は看護師です）…ふつうの名詞なので小文字`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の誤りを直しなさい。　i study english on monday.',
        wrongAnswer: 'i study english on monday.（そのまま）',
        trapExplanation:
          '日本語には大文字・小文字の区別がないため、単語のつづりさえ合っていればよいと考えてしまう。とくに文の途中にある english, monday は見落としやすい。',
        correctAnswer: 'I study English on Monday.',
        correctExplanation:
          '「私は」の I はいつも大文字、言語名 English と曜日 Monday も文の途中でも大文字で書き始める。一方、教科の math や science、季節の spring は小文字のままである。書いたあとに頭の文字を一つずつ確かめる習慣をつける。',
      },
      {
        question: '「私は英語を話します。」を英語にしなさい。',
        wrongAnswer: 'I speak the English.',
        trapExplanation:
          'play the piano のように the が入る形を覚えていると、English にも the を付けたくなる。また「その英語」と特定している気持ちになることも原因である。',
        correctAnswer: 'I speak English.',
        correctExplanation:
          '言語名は固有名詞なので冠詞を付けない。She can speak Japanese. も同じ。ただし an English class（英語の授業）、an English teacher（英語の先生）のように、後ろに名詞が続く場合は冠詞が必要になる。名詞が続くかどうかで判断する。',
      },
    ],
  },

  {
    id: 'eigo_s115',
    subject: 'eigo',
    examType: 'chugaku',
    title: '名詞・冠詞・代名詞の総合演習',
    description: 'このユニットで学んだ規則を、誤り訂正と英作文の形で総点検する',
    intro: 'I have many homeworks. のどこが誤りか、すぐ指摘できるでしょうか。名詞・冠詞・代名詞のミスは、文全体が読めていても最後の1文字で失点します。見直しの手順を決めて、自分で点検できるようにします。',
    order: 615,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      '見直しの手順：①数えられるか ②単数か複数か ③冠詞は適切か ④代名詞の形は位置に合っているか。',
      '不可算名詞に a・-s・many を付けていないか（homework, information, advice, money, water）。',
      '数字・many・these の後ろの名詞が複数形になっているか。',
      '「単位＋of＋不可算名詞」で、-s が of の前に付いているか。',
      '代名詞は、主語なら主格、名詞の前なら所有格、動詞・前置詞の後ろなら目的格。',
      '決まった言い方（play the piano／go to school／by bus／once a week）は形ごと暗記する。',
    ],
    sections: [
      {
        heading: '答案を見直す四つの手順',
        body: `英作文を書き終えたら、次の四点を順に点検する。この手順を通すだけで、失点は大きく減る。

■ 手順①　名詞は数えられるか
homework, information, advice, furniture, money, water, bread は不可算。a も -s も many も付けられない。
× many homeworks → ◯ a lot of homework
× two advices → ◯ two pieces of advice

■ 手順②　単数か複数か
数字・many・some・these の後ろは複数形。one・each・every の後ろは単数。
× three book → ◯ three books
× many student likes → ◯ many students like

■ 手順③　冠詞は正しいか
数えられる単数を裸で置いていないか（× I have bag.）。
不可算・複数に a を付けていないか（× a water／× a books）。
所有格や this と冠詞を重ねていないか（× a my book）。
世界に一つのもの・楽器・最上級に the があるか（the sun／play the piano／the tallest）。

■ 手順④　代名詞の形は位置に合っているか
主語 → 主格（I, he, she, they）
名詞の前 → 所有格（my, his, her, their）
動詞・前置詞の後ろ → 目的格（me, him, her, them）
単独で「〜のもの」→ 所有代名詞（mine, his, hers, theirs）

★ ポイント：手順①〜④はこの順で行う。名詞を決めてからでないと、冠詞も代名詞も決まらないからである。`,
      },
      {
        heading: '総合練習と、まちがえやすい形の総点検',
        body: `実際の入試で出る形式で確かめる。

■ 誤りを一か所直す問題
①I have a lot of homeworks today.　→ homework
②There is many people in the park.　→ There are
③My mother bought two breads.　→ two loaves of bread
④She plays a piano very well.　→ the piano
⑤This is a my friend.　→ a friend of mine
⑥I know he very well.　→ him
⑦That bike is her.　→ hers
⑧I go to the bed at ten.　→ go to bed
⑨The sun rises in east.　→ in the east
⑩He went there by hisself.　→ by himself

■ 英作文
①「私は毎朝、水をコップ1ぱい飲みます。」
　→ I drink a glass of water every morning.
②「先週、新しいくつを1足買いました。」
　→ I bought a pair of new shoes last week.
③「彼は週に2回ギターをひきます。」
　→ He plays the guitar twice a week.
④「これらは私の本ではありません。彼らのものです。」
　→ These are not my books. They are theirs.
⑤「情報はインターネットでたくさん手に入る。」
　→ We can get a lot of information on the Internet.

■ 最後に覚え直す形
不可算：homework／information／advice／furniture／money／water／bread／news
単位：a glass of／a cup of／a piece of／a sheet of／a slice of／a pair of
不規則複数：man–men／woman–women／child–children／foot–feet／tooth–teeth／mouse–mice／sheep–sheep／fish–fish
代名詞：I–my–me–mine／he–his–him–his／she–her–her–hers／they–their–them–theirs
これらを口に出して言えるようになれば、このユニットは完成である。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文の誤りを直しなさい。　There are a lot of informations on internet.',
        wrongAnswer: 'There are a lot of informations on internet.（そのまま）',
        trapExplanation:
          '「情報がたくさん」なので複数形にするべきだと考え、さらに internet を固有名詞のように感じて冠詞を落としてしまう。二か所同時にまちがえる典型的な文である。',
        correctAnswer: 'There is a lot of information on the Internet.',
        correctExplanation:
          'information は不可算名詞なので -s を付けず、動詞も単数あつかいで is になる。また「インターネットで」は on the Internet と the を付ける決まった言い方である。不可算名詞と決まった表現の両方を同時に点検する必要がある。',
      },
      {
        question: '「母はパンを2斤と牛乳を3本買いました。」を英語にしなさい。',
        wrongAnswer: 'My mother bought two breads and three milks.',
        trapExplanation:
          '日本語の「2斤」「3本」につられて、bread と milk のほうに -s を付けてしまう。不可算名詞は単位のことばを借りて数える、という形が身についていないと必ず起きる。',
        correctAnswer: 'My mother bought two loaves of bread and three bottles of milk.',
        correctExplanation:
          'bread も milk も不可算名詞なので複数形にできない。数えるときは単位のことばを借り、複数形にするのはその単位のほうにする（loaf → loaves、bottle → bottles）。「-s は of の前に付く」という原則をここでも使う。',
      },
    ],
  },
];
