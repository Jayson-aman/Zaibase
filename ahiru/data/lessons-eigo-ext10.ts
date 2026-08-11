import type { Lesson } from './lesson-types';

// 中学受験 英語「語彙・熟語・会話表現（英検5級〜3級）」拡張ユニット（45セッション：eigo_s341〜eigo_s385）
// order は 841〜885。他ユニットと重複しない。
// 構成：身のまわりの語彙(5)／学校・教科・文房具・行事(4)／動物・植物・自然・天気・季節(4)／
//       数・序数・曜日・月・日付・時刻(5)／色・形・大きさ・数量(3)／職業・町・建物・乗り物(4)／
//       動詞の重要熟語 get・take・make・have・look・put・come・go(6)／前置詞を含む熟語(4)／
//       あいさつ・自己紹介・電話・買い物・道案内の会話表現(6)／まぎらわしい語の使い分け(4)
// 図解は「位置関係」「時間の幅」「分類の割合」「語順」など、図にすることで
// 本当に理解が進む箇所にだけ付けてある（45課中21課／lesson-figs-eigo-ext10.ts）。
export const eigoExt10Lessons: Lesson[] = [
  // ───────────── 1. 身のまわりの語彙（s341〜s345） ─────────────
  {
    id: 'eigo_s341',
    subject: 'eigo',
    examType: 'chugaku',
    title: '身のまわりの語彙①：家族を表す語',
    description: '家族を表す英単語と、日本語の「兄・弟・姉・妹」を英語でどう言い分けるかを身につける',
    intro: '「兄」と「弟」を英語でどう言い分けるでしょうか。実は brother の一語しかありません。英語は上下より、男か女かのほうを大事にする言語だからです。どうしても年上と言いたいときの言い方も含めて、家族の語をまとめて覚えます。',
    order: 841,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'father（父）／mother（母）／parents（両親）／brother（兄弟）／sister（姉妹）が土台。',
      '英語の brother・sister には年上・年下の区別がない。年齢を言いたいときは older / younger を付ける。',
      'grandfather・grandmother は「祖父・祖母」、uncle は「おじ」、aunt は「おば」、cousin は「いとこ」。',
      'parents・grandparents は必ず複数形。These are my parents. のように主語も複数で受ける。',
      '呼びかけには Dad / Mom を使い、大文字で書く（人の名前のあつかい）。',
      '「家族は何人ですか」は How many people are there in your family? が定番。',
    ],
    sections: [
      {
        heading: '家族を表す基本の単語',
        body: `家族の語は英検5級・4級で必ず出る、いちばん基本的な語彙のまとまりである。まず次の語を確実に書けるようにする。

■ 直接の家族
father（父）／mother（母）／parents（両親）／brother（兄・弟）／sister（姉・妹）／son（息子）／daughter（娘）／husband（夫）／wife（妻）／baby（赤ちゃん）

■ 親せき
grandfather（祖父）／grandmother（祖母）／grandparents（祖父母）／uncle（おじ）／aunt（おば）／cousin（いとこ）／nephew（おい）／niece（めい）

■ まとめて言う語
family（家族）／relative（親せき）

例）I have two brothers and one sister.（私には兄弟が二人、姉妹が一人います。）
例）My grandmother lives in Osaka.（祖母は大阪に住んでいます。）

★ ポイント：parents と grandparents は「二人以上」を指すので、いつも複数形で使い、動詞も複数に合わせる。My parents are teachers.（× My parents is …）

⚠ 注意：つづりをまちがえやすい語が多い。daughter の gh、cousin の ou、niece の ie は書いて覚える。aunt は「アント」と読み、ant（アリ）とつづりも意味もちがう。`,
        figureId: 'lf_eigoext10_341',
      },
      {
        heading: '「兄」と「弟」、「姉」と「妹」の言い分け',
        body: `日本語は「兄／弟」「姉／妹」を必ず区別するが、英語の brother・sister には年上・年下の区別がない。ここが日本人にとって最大のつまずきどころである。

■ 年齢をはっきり言いたいとき
older brother（兄）／younger brother（弟）／older sister（姉）／younger sister（妹）
くだけた言い方では big brother（兄）／little sister（妹）も使う。

例）I have an older brother.（私には兄が一人います。）
例）My younger sister is six years old.（妹は6歳です。）

■ 英文を日本語にするときの読み取り
英文に older・younger が付いていなければ、年上か年下かは文脈から判断する。
例）I have a brother. He is five years old.
　→ 話し手は小学生なので、この brother は「弟」と訳すのが自然。
逆に、日本語を英語にするときに「兄」を単に brother と書いても、英語としてはまちがいではない。ただし「兄が一人います」と年上であることを問う問題では older brother と書くほうが安全である。

★ ポイント：an older brother の an を忘れない。older は母音で始まるので a ではなく an になる。`,
      },
      {
        heading: '家族について話す会話表現',
        body: `家族の語は、次の決まり文句とセットで覚えると入試でそのまま使える。

■ 人数をたずねる
How many people are there in your family?（ご家族は何人ですか。）
— There are four people in my family.（4人です。）
— We are a family of four. という言い方もある。

■ 家族を紹介する
This is my mother.（こちらは私の母です。）
These are my parents.（こちらは私の両親です。）
※ 紹介するときは He is … ではなく This is … を使うのがふつう。

■ 家族についてたずねる
Do you have any brothers or sisters?（兄弟姉妹はいますか。）
— Yes, I have one sister.／— No, I don't. I'm an only child.（いいえ、一人っ子です。）
What does your father do?（お父さんの仕事は何ですか。）
— He is a doctor.

★ ポイント：所有格 my / your / his / her / our / their を正しく選ぶ。Ken and his sister（ケンと彼の姉）／Aya and her mother（アヤと彼女の母）のように、直前の人物に合わせる。`,
      },
    ],
    trapExamples: [
      {
        question: '「こちらは私の両親です。」を英語にしなさい。',
        wrongAnswer: 'This is my parents.',
        trapExplanation: '日本語が「こちらは」と一つのまとまりで始まるので、そのまま This is で書き出してしまう。日本語には単数・複数の区別がないため、主語が二人であることを見落とす。',
        correctAnswer: 'These are my parents.',
        correctExplanation:
          'parents は「父と母の二人」を指す複数の語なので、指し示す語も these、be動詞も are にする。同じように These are my grandparents. も複数で受ける。一人なら This is my father. と単数にする。',
      },
      {
        question: '次の英文の brother を日本語にしなさい。 I have a brother. He is five years old.',
        wrongAnswer: '兄',
        trapExplanation: 'brother を機械的に「兄」と覚えているため、文の後半の年齢の情報を読まずに訳してしまう。日本語では年上・年下を必ず区別するのに、英語では区別しないという感覚のちがいが原因。',
        correctAnswer: '弟',
        correctExplanation:
          '英語の brother は年上・年下の両方を指す語で、どちらかは文脈で決まる。ここでは「5歳」とあり、話し手（小学生）より年下と考えられるので「弟」と訳す。年上・年下をはっきり示したいときは older brother / younger brother と書く。',
      },
    ],
  },

  {
    id: 'eigo_s342',
    subject: 'eigo',
    examType: 'chugaku',
    title: '身のまわりの語彙②：体の部分を表す語',
    description: '顔・体の各部を表す語と、二つで一組の部分・不規則な複数形を整理する',
    intro: '「歯がいたい」と言うとき、tooth と teeth のどちらを使うか迷ったことはありませんか。目・耳・手・足のように二つそろっている部分は、ふつう複数形で使います。しかも tooth は teeth、foot は feet と形が不規則に変わります。',
    order: 842,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'head（頭）・face（顔）・eye（目）・ear（耳）・nose（鼻）・mouth（口）が顔の基本語。',
      '目・耳・手・足のように二つある部分は、ふつう複数形で使う（eyes, ears, hands, feet）。',
      '不規則な複数形に注意：tooth → teeth、foot → feet。',
      'hair（髪）は数えず、いつも単数あつかい。Her hair is long.（× hairs are）',
      '体の不調は have を使う。I have a headache.（頭が痛い）／I have a cold.（かぜをひいている）',
      '体の部分には the ではなく my / your などの所有格を付けるのがふつう。Wash your hands.',
    ],
    sections: [
      {
        heading: '顔と体の基本語',
        body: `体の部分の語は、健康・スポーツ・道案内など多くの話題に出てくる。上から順に整理して覚える。

■ 顔まわり
head（頭）／hair（髪）／face（顔）／eye（目）／eyebrow（まゆ）／ear（耳）／nose（鼻）／mouth（口）／lip（くちびる）／tooth（歯）／tongue（舌）／neck（首）

■ 上半身
shoulder（肩）／arm（うで）／elbow（ひじ）／hand（手）／finger（指）／back（背中）／chest（胸）／stomach（おなか）

■ 下半身
leg（あし全体）／knee（ひざ）／foot（足首から先）／toe（足の指）

★ ポイント：日本語の「あし」は英語で二つに分かれる。ももからくるぶしまでが leg、くるぶしから先が foot である。「足が痛い」も、どこが痛いのかで語がちがう。

例）I have long legs.（私は足が長い。）
例）My foot hurts.（足（の先）が痛い。）

⚠ 注意：knee の k、stomach の ch は発音しない・読み方が特殊なので、書き取りでまちがえやすい。`,
        figureId: 'lf_eigoext10_342',
      },
      {
        heading: '複数形と数え方のきまり',
        body: `体の部分は二つ、あるいはたくさんあるものが多いので、複数形の作り方が問われる。

■ 不規則に変わる複数形
tooth（歯）→ teeth／foot（足）→ feet
これは -s を付けるのではなく、語の中の母音が変わるタイプである。Brush your teeth.（歯をみがきなさい。）／My feet are cold.（足が冷たい。）

■ ふつうに -s を付けるもの
eye → eyes／ear → ears／hand → hands／finger → fingers／leg → legs

■ 数えない語
hair は「髪の毛全体」を指すときは数えられない名詞で、いつも単数あつかいにする。
例）Her hair is long and black.（彼女の髪は長くて黒い。）
※ 1本ずつの毛を指すときだけ a hair / two hairs と数えるが、小学生の入試ではまず出ない。

■ 二つで一組
目・耳・手・足について「両方」を言うときは複数形にするのが自然。
例）Close your eyes.（目を閉じなさい。） Wash your hands.（手を洗いなさい。）

⚠ 注意：Close your eye. と単数にすると「片目を閉じる」という意味になってしまう。`,
      },
      {
        heading: '体の調子を伝える表現',
        body: `体の部分の語は、次の言い方とセットで覚えると会話問題に強くなる。

■ have を使う言い方（いちばん多い）
I have a headache.（頭が痛い。）／I have a stomachache.（おなかが痛い。）／I have a toothache.（歯が痛い。）／I have a fever.（熱がある。）／I have a cold.（かぜをひいている。）
※ -ache は「痛み」を表す語。head + ache → headache のように組み合わさっている。

■ hurt を使う言い方
My leg hurts.（足が痛い。）／I hurt my arm.（うでをけがした。）

■ 相手を気づかう表現
What's wrong?／What's the matter?（どうしたのですか。）
— I have a headache.
That's too bad.（それはお気の毒に。）
Take care.（お大事に。）

★ ポイント：体の部分の前には the ではなく my / your を付けるのが英語の習慣。Wash your hands.（× Wash the hands.）`,
      },
    ],
    trapExamples: [
      {
        question: '「歯をみがきなさい。」を英語にしなさい。',
        wrongAnswer: 'Brush your tooths.',
        trapExplanation: '複数形は -s を付けると覚えているため、tooth にもそのまま -s を付けてしまう。不規則に変化する複数形であることを見落とす典型例。',
        correctAnswer: 'Brush your teeth.',
        correctExplanation:
          'tooth の複数形は語中の母音が変わって teeth になる。同じ型に foot → feet がある。man → men、woman → women、child → children と合わせて、-s を付けない複数形としてまとめて覚える。',
      },
      {
        question: '「彼女の髪は長い。」を英語にしなさい。',
        wrongAnswer: 'Her hairs are long.',
        trapExplanation: '髪の毛は何本もあるから複数だ、と日本語の感覚で考えてしまう。数えられる名詞と数えられない名詞の区別が身についていないと必ず引っかかる。',
        correctAnswer: 'Her hair is long.',
        correctExplanation:
          'hair は「髪全体」をひとまとまりとしてとらえる数えられない名詞なので、-s を付けず、be動詞も is にする。water・milk・bread・money なども同じ仲間である。',
      },
    ],
  },

  {
    id: 'eigo_s343',
    subject: 'eigo',
    examType: 'chugaku',
    title: '身のまわりの語彙③：衣服と身につけるもの',
    description: '衣服の語と、wear / put on / a pair of の使い分けを身につける',
    intro: '帽子はどれも hat でよさそうですが、野球帽は cap です。ふちがあるかないかで語が変わります。さらにズボンやくつは、いつも複数形。日本語の感覚のままだと数をまちがえやすい、身につけるものの語を整理します。',
    order: 843,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'shirt・T-shirt・sweater・jacket・coat・cap・hat・shoes・socks が基本語。',
      'cap はふちのない帽子（野球帽）、hat はふちのある帽子。',
      '二本の足や手が入るものは複数形で使う：pants, shoes, socks, glasses, gloves。',
      '数えるときは a pair of shoes（くつ1足）／two pairs of socks（くつした2足）。',
      'wear は「身につけている」という状態、put on は「身につける」という動作。',
      '「〜が似合う」は look good on you、「着てみる」は try on。',
    ],
    sections: [
      {
        heading: '衣服・持ち物の基本語',
        body: `服装の語は、人物の描写や買い物の場面で必ず出る。

■ 上に着るもの
shirt（シャツ）／T-shirt（Tシャツ）／blouse（ブラウス）／sweater（セーター）／jacket（上着）／coat（コート）／uniform（制服）

■ 下にはくもの
pants（ズボン）／jeans（ジーンズ）／skirt（スカート）／shorts（半ズボン）

■ 足・頭・手
shoes（くつ）／socks（くつした）／boots（ブーツ）／cap（ふちのない帽子）／hat（ふちのある帽子）／gloves（手ぶくろ）

■ 小物
glasses（めがね）／watch（うで時計）／bag（かばん）／umbrella（かさ）／ring（指輪）／scarf（マフラー）

★ ポイント：cap と hat のちがいは入試でよく問われる。野球帽のように前にだけつばがあるものが cap、まわり全体につばがあるものが hat である。

⚠ 注意：pants は日本語の「パンツ（下着）」ではなく「ズボン」を指す。下着は underwear という。`,
      },
      {
        heading: 'a pair of と複数形',
        body: `英語では、二つで一組になっているものは、一つの品物でも必ず複数形にする。

■ いつも複数形で使う語
shoes（くつ）／socks（くつした）／pants（ズボン）／jeans／shorts／glasses（めがね）／gloves（手ぶくろ）／scissors（はさみ）／chopsticks（はし）

例）My shoes are new.（私のくつは新しい。） ← is ではなく are

■ 数えるときは a pair of
a pair of shoes（くつ1足）／two pairs of socks（くつした2足）／a pair of glasses（めがね1つ）
※ pair は「対（つい）」という意味。数を増やすときは pair のほうに -s を付ける（two pairs of …）。

例）I bought two pairs of shoes.（くつを2足買った。）

■ 単数で使う語との比較
shirt・skirt・sweater・cap・bag などはふつうに a shirt / two shirts と数える。

⚠ 注意：a pair of shoes が主語のときの動詞は、pair に合わせて単数になる。A pair of shoes is on the floor. 迷ったら「くつが1足床にある」＝一つのまとまり、と考える。`,
      },
      {
        heading: 'wear と put on の使い分け',
        body: `「着る」にあたる英語は一つではない。動作か状態かで使い分ける。

■ wear ＝身につけている（状態）
例）She is wearing a red coat.（彼女は赤いコートを着ている。）
「今どんなかっこうか」を説明するときは wear を使う。服だけでなく、帽子・くつ・めがね・指輪・香水にも使える。

■ put on ＝身につける（動作の瞬間）
例）Put on your jacket. It's cold outside.（上着を着なさい。外は寒いよ。）
反対の「ぬぐ」は take off。
例）Take off your shoes here.（ここでくつをぬいでください。）

■ try on ＝試着する
例）Can I try this shirt on?（このシャツを試着してもいいですか。）
※ try it on のように代名詞は真ん中に入れる。try on it とは言わない。

■ 似合う
That shirt looks good on you.（そのシャツ、似合っているね。）

★ ポイント：「今着ている」＝ be wearing、「これから着る」＝ put on。日本語ではどちらも「着る」なので、英作文では動作か状態かを必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私のくつは新しい。」を英語にしなさい。',
        wrongAnswer: 'My shoes is new.',
        trapExplanation: 'くつを「1足」という一つのまとまりでとらえてしまい、be動詞を単数の is にしてしまう。日本語には単数・複数の区別がないため気づきにくい。',
        correctAnswer: 'My shoes are new.',
        correctExplanation:
          'shoes は左右二つで一組なので形は複数であり、動詞も are にする。数を言いたいときだけ a pair of shoes とし、その場合は A pair of shoes is new. と単数で受ける。socks・glasses・pants も同じ仲間。',
      },
      {
        question: '（　）に入る語を答えなさい。 She is （　） a blue cap now.',
        wrongAnswer: 'putting on',
        trapExplanation: '「かぶっている」を「かぶる」という動作だと考え、put on を選んでしまう。now があるので進行形にすればよいと機械的に処理するのも原因。',
        correctAnswer: 'wearing',
        correctExplanation:
          'この文は「今、青い帽子をかぶっている（状態）」を表すので wear を使い、is wearing とする。putting on にすると「今まさに帽子をかぶろうとしている動作の最中」という不自然な意味になる。状態＝wear、動作＝put on と区別する。',
      },
    ],
  },

  {
    id: 'eigo_s344',
    subject: 'eigo',
    examType: 'chugaku',
    title: '身のまわりの語彙④：食べ物・飲み物と数え方',
    description: '食べ物の語彙と、数えられる名詞・数えられない名詞の区別、単位の言い方を学ぶ',
    intro: 'りんごは an apple と数えられるのに、水やパンは a water、a bread とは言えません。形が決まっていないものは数えられない、というのが英語の考え方です。ではどう数えるのか——コップやきれを単位にする言い方を身につけます。',
    order: 844,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '果物・野菜・肉・飲み物など、食べ物の語はジャンルごとにまとめて覚える。',
      '数えられる名詞（an apple, two eggs）と数えられない名詞（water, bread, rice）を区別する。',
      '数えられない名詞は a glass of water / a piece of cake / a cup of tea のように単位を付けて数える。',
      '数えられない名詞に many は使えない。much か a lot of を使う。',
      '「〜が好きです」は I like apples. のように複数形にするのがふつう。',
      'breakfast・lunch・dinner には冠詞を付けない。I have breakfast at seven.',
    ],
    sections: [
      {
        heading: '食べ物・飲み物の基本語',
        body: `食事や買い物の場面で必ず出る語をジャンル別に整理する。

■ 果物（fruit）
apple（りんご）／orange（オレンジ）／banana（バナナ）／grape（ぶどう）／peach（もも）／strawberry（いちご）／watermelon（すいか）／pineapple（パイナップル）

■ 野菜（vegetable）
tomato（トマト）／potato（じゃがいも）／carrot（にんじん）／onion（たまねぎ）／cabbage（キャベツ）／cucumber（きゅうり）／corn（とうもろこし）

■ 肉・魚・卵
meat（肉）／beef（牛肉）／pork（ぶた肉）／chicken（とり肉）／fish（魚）／egg（卵）

■ 主食・その他
rice（ごはん）／bread（パン）／noodles（めん）／soup（スープ）／salad（サラダ）／cheese（チーズ）／sugar（さとう）／salt（塩）

■ 飲み物（drink）
water（水）／milk（牛乳）／juice（ジュース）／tea（お茶）／coffee（コーヒー）

⚠ 注意：tomato・potato の複数形は -es を付けて tomatoes・potatoes になる。strawberry は y を i に変えて strawberries となる。`,
      },
      {
        heading: '数えられる名詞と数えられない名詞',
        body: `食べ物の語は、数えられるものと数えられないものがはっきり分かれる。この区別が英作文の得点を大きく左右する。

■ 数えられる名詞（形がはっきりしているもの）
apple, orange, egg, tomato, potato, cookie, hamburger
→ a / an を付けたり、-s を付けて複数にできる。
例）I eat an apple every morning.／She bought three eggs.

■ 数えられない名詞（形が決まっていない・材料や液体）
water, milk, juice, tea, coffee, bread, rice, meat, cheese, sugar, salt, soup
→ a / an を付けず、-s も付けない。
例）I drink milk every day.（× a milk／× milks）

■ 単位を付けて数える
a glass of water（コップ1杯の水）／a cup of tea（カップ1杯のお茶）／a piece of cake（ケーキ1切れ）／a slice of bread（パン1枚）／a bowl of rice（ごはん1杯）／a bottle of juice（1本のジュース）
数を増やすときは単位のほうに -s を付ける。two glasses of water（水2杯）

★ ポイント：「多い」を表す語も変わる。数えられる名詞には many、数えられない名詞には much を使い、a lot of はどちらにも使える。
例）many apples ／ much water ／ a lot of apples ／ a lot of water`,
        figureId: 'lf_eigoext10_344',
      },
      {
        heading: '食事と好みを表す表現',
        body: `食べ物の語は、次の言い方とセットで使えるようにしておく。

■ 食事の名前
breakfast（朝食）／lunch（昼食）／dinner（夕食）／snack（おやつ）
食事名には a も the も付けない。
例）I have breakfast at seven.（7時に朝食を食べます。）
例）What did you have for lunch?（昼食は何を食べましたか。）
※ 「〜を食べる」は eat のほか have もよく使う。

■ 好きなものを言う
I like oranges very much.（オレンジが大好きです。）
※ 好きなものを一般的に言うときは複数形にするのがふつう。I like orange. だと「オレンジ色が好き」と受け取られる。
I don't like green peppers.（ピーマンは好きではありません。）
My favorite food is curry and rice.（好きな食べ物はカレーライスです。）

■ 食卓での表現
Would you like some tea?（お茶はいかがですか。）— Yes, please.／No, thank you.
Help yourself.（ご自由にお取りください。）
It's delicious.（とてもおいしい。）

★ ポイント：すすめるときは any ではなく some を使う（Would you like some …?）。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。 How （　） water do you drink every day?　［many / much］',
        wrongAnswer: 'many',
        trapExplanation: '「どのくらいたくさん」と数をたずねる感覚から many を選んでしまう。How many を一つの決まり文句として覚えていると、後ろの名詞を確かめずに書いてしまう。',
        correctAnswer: 'much',
        correctExplanation:
          'water は数えられない名詞なので many は使えず、How much water …? となる。many は数えられる名詞の複数形の前だけに使う（How many apples …?）。後ろの名詞に -s が付いているかどうかを必ず見てから選ぶ。',
      },
      {
        question: '「私はケーキを2切れ食べた。」を英語にしなさい。',
        wrongAnswer: 'I ate two cakes.',
        trapExplanation: '日本語の「2切れ」をそのまま「2つ」と考えて cake に -s を付けてしまう。two cakes だと「ホールケーキを丸ごと2台」という意味になってしまう。',
        correctAnswer: 'I ate two pieces of cake.',
        correctExplanation:
          '切り分けた一部を数えるときは a piece of cake（1切れ）を使い、複数にするときは piece のほうに -s を付けて two pieces of cake とする。同じように a glass of water → two glasses of water と数える。',
      },
    ],
  },

  {
    id: 'eigo_s345',
    subject: 'eigo',
    examType: 'chugaku',
    title: '身のまわりの語彙⑤：家の中の部屋と家具',
    description: '部屋・家具・家電の語と、家の中の場所を表す言い方を身につける',
    intro: '「わたしの家には部屋が六つあります」と英語で紹介するには、部屋の名前がなければ始まりません。living room や bathroom には、日本の間取りとぴったり同じではない語もあります。家の中の語と位置の前置詞をまとめて使えるようにします。',
    order: 845,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'living room（居間）・kitchen（台所）・bedroom（寝室）・bathroom（浴室・トイレ）が部屋の基本語。',
      '家具は desk・chair・table・bed・sofa・bookshelf、家電は TV・fridge・washing machine。',
      '部屋の中の位置は in / on / under / by / between などの前置詞で表す。',
      '「〜がある」は There is（単数）／ There are（複数）で始める。',
      'house は建物、home は「わが家」。I go home. には to を付けない。',
      '2階は the second floor、1階は the first floor（アメリカ英語）。',
    ],
    sections: [
      {
        heading: '部屋と家の中の語',
        body: `家の中を表す語は、There is / There are の文や道案内の練習でくり返し使う。

■ 部屋
living room（居間）／dining room（食堂）／kitchen（台所）／bedroom（寝室）／bathroom（浴室。アメリカではトイレも指す）／study（書斎）／room（部屋）

■ 家のつくり
door（ドア）／window（窓）／wall（かべ）／floor（ゆか・階）／roof（屋根）／stairs（階段）／garden（庭）／yard（庭・敷地）／garage（車庫）／gate（門）

■ 家具・道具
desk（つくえ）／chair（いす）／table（テーブル）／bed（ベッド）／sofa（ソファー）／bookshelf（本だな）／closet（おしいれ）／curtain（カーテン）／clock（かけ時計）／lamp（電気スタンド）

■ 家電
TV（テレビ）／computer（コンピューター）／fridge, refrigerator（冷蔵庫）／washing machine（洗たく機）／air conditioner（エアコン）／microwave（電子レンジ）

★ ポイント：house は「建物としての家」、home は「自分が帰る家・家庭」。I'm at home.（家にいる）／My house is near the station.（私の家は駅の近くだ）

⚠ 注意：go home の home は「家へ」という意味を自分の中に含むので、to を付けない（× go to home）。`,
        figureId: 'lf_eigoext10_345',
      },
      {
        heading: 'There is / There are で家の中を説明する',
        body: `「〜に…がある」と説明する言い方は、家の中の描写問題の定番である。

■ 基本の形
There is ＋ 単数の名詞 ＋ 場所を表す語句
There are ＋ 複数の名詞 ＋ 場所を表す語句

例）There is a bed in my room.（私の部屋にはベッドがあります。）
例）There are two windows in the kitchen.（台所には窓が二つあります。）

■ be動詞は「後ろの名詞」に合わせる
There is a chair and two desks. のように後ろが並ぶときは、いちばん近い名詞に合わせるのがふつう。混乱を避けるため、数の多いほうを先に書くとよい。

■ 疑問文と否定文
Is there a computer in your room?（部屋にコンピューターはありますか。）
— Yes, there is.／No, there isn't.
How many rooms are there in your house?（家に部屋はいくつありますか。）
There isn't a TV in my room.（私の部屋にはテレビがありません。）

⚠ 注意：「私の机は窓の近くにあります」のように、話し手も聞き手も知っているものの位置を言うときは、There is を使わず My desk is by the window. と言う。There is … は「新しく登場するもの」を示す形である。`,
      },
      {
        heading: '家の中の位置を表す前置詞',
        body: `部屋の中のようすを説明するには、位置を表す前置詞が欠かせない。

in（〜の中に）／on（〜の上に・接している）／under（〜の下に）／by, near（〜のそばに）／in front of（〜の前に）／behind（〜の後ろに）／between A and B（AとBの間に）／next to（〜のとなりに）／above（〜の上方に）／over（〜の真上に）

例）The cat is under the table.（ねこはテーブルの下にいます。）
例）The clock is on the wall.（時計はかべに掛かっています。）
例）My bag is between the desk and the bed.（私のかばんはつくえとベッドの間にあります。）

★ ポイント：on は「上」という意味ではなく「くっついている」という意味。だからかべに掛かった時計も天井の電灯も on を使う。
例）There is a picture on the wall.（かべに絵がかかっている。）

■ 階を言う
on the first floor（1階に）／on the second floor（2階に）
※ アメリカ英語では地上階が first floor。イギリス英語では ground floor が地上階で、その上が first floor になる。中学受験ではアメリカ式で覚えてよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は5時に家に帰ります。」を英語にしなさい。',
        wrongAnswer: 'I go to home at five.',
        trapExplanation: 'go to school / go to the park と同じ形だと考え、home にも to を付けてしまう。「家へ」の「へ」を to で表そうとする日本語からの直訳が原因。',
        correctAnswer: 'I go home at five.',
        correctExplanation:
          'この home は「家へ」という方向の意味を自分の中に含む副詞なので、to は不要である。同じ仲間に go there（そこへ行く）、come here（ここへ来る）がある。ただし建物としての家を指す house なら go to my house と to が要る。',
      },
      {
        question: '（　）に入る語を答えなさい。 There （　） three chairs in the kitchen.',
        wrongAnswer: 'is',
        trapExplanation: 'There is … を一つの決まり文句として覚えているため、後ろの名詞の数を確かめずに is と書いてしまう。日本語では「いすが3つある」も「いすが1つある」も同じ形なので気づきにくい。',
        correctAnswer: 'are',
        correctExplanation:
          'There is / There are の be動詞は、後ろに来る名詞の数に合わせる。ここは three chairs と複数なので are にする。「ある」ものが1つなら There is a chair …、2つ以上なら There are two chairs … と書き分ける。',
      },
    ],
  },

  // ───────────── 2. 学校・教科・文房具・行事（s346〜s349） ─────────────
  {
    id: 'eigo_s346',
    subject: 'eigo',
    examType: 'chugaku',
    title: '学校①：教科と時間割',
    description: '教科名の英語と、時間割・好きな教科をたずねる表現を身につける',
    intro: '「音楽が好きです」を I like a music. と書くとまちがいです。教科名には a も the も付けず、複数形にもしません。さらに English や Japanese は国名からできた語なので、文の途中でも大文字で始めます。教科名の決まりを確かめます。',
    order: 846,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '教科名は math・science・social studies・Japanese・English・music・P.E.・art が基本。',
      '国名からできた教科名（English, Japanese）は必ず大文字で書き始める。',
      '教科名には a も the も付けず、-s も付けない。I like music.',
      'math は mathematics の短い形、P.E. は physical education の頭文字。',
      '「何の教科が好きですか」は What subject do you like? が定番。',
      '「〜が得意だ」は be good at ＋ 教科名。I am good at math.',
    ],
    sections: [
      {
        heading: '教科名を正しく書く',
        body: `教科名は英検5級・4級で毎回のように出題される。つづりと大文字の使い方に気をつける。

■ 主な教科
Japanese（国語）／English（英語）／math（算数・数学）／science（理科）／social studies（社会）／music（音楽）／art（図工・美術）／P.E.（体育）／home economics（家庭科）／calligraphy（習字）／moral education（道徳）

★ ポイント：Japanese・English・Chinese・French のように国や民族からできた語は、文の途中でも必ず大文字で書き始める。これを小文字で書く誤りが非常に多い。

■ 短くした形
math は mathematics（数学）を短くした語。アメリカ英語では math、イギリス英語では maths と書く。
P.E. は physical education（体育）の頭文字。ピリオドを付けて書く。
social studies は二語で一つの教科名。studies と複数形になっているが、教科名として単数あつかいする。
例）Social studies is my favorite subject.

⚠ 注意：教科名には a / an / the を付けず、-s も付けない。
例）I like science.（× I like a science.／× I like sciences.）`,
      },
      {
        heading: '時間割と学校の一日',
        body: `時間割や学校生活を説明するときに必要な語をまとめる。

■ 学校生活の語
class（授業・クラス）／lesson（授業）／subject（教科）／timetable, schedule（時間割）／homework（宿題）／test, exam（テスト）／recess, break（休み時間）／lunch break（昼休み）／club activity（クラブ活動）／homeroom（ホームルーム）

■ 時間割を説明する
We have four classes in the morning.（午前中に4時間授業があります。）
I have math on Monday.（月曜日に算数があります。）
※ 曜日には on を付ける。
The first class starts at 8:40.（1時間目は8時40分に始まります。）

■ 一日の流れ
I go to school at eight.／We clean our classroom after lunch.（昼食後に教室をそうじします。）／School is over at three.（学校は3時に終わります。）

★ ポイント：homework は数えられない名詞なので、a homework とも homeworks とも言わない。量を言うときは a lot of homework とする。
例）I have a lot of homework today.（今日は宿題がたくさんある。）`,
      },
      {
        heading: '好きな教科をたずねる・答える',
        body: `会話問題では、次のやりとりがそのまま出題される。

■ たずね方
What subject do you like?（何の教科が好きですか。）
What is your favorite subject?（好きな教科は何ですか。）
Do you like English?（英語は好きですか。）

■ 答え方
I like English (the) best.（英語がいちばん好きです。）
My favorite subject is science.（好きな教科は理科です。）
I like math because it is fun.（算数が好きです。おもしろいから。）
I don't like P.E. very much.（体育はあまり好きではありません。）

■ 得意・苦手を言う
I am good at English.（英語が得意です。）
I am not good at math.／I am poor at math.（算数が苦手です。）
※ be good at の後ろに動詞を置くときは -ing の形にする。
例）I am good at singing.（歌うのが得意です。）

⚠ 注意：favorite にはすでに「いちばん好きな」という意味が入っているので、My most favorite subject … のように most を重ねない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は英語と音楽が好きです。」を英語にしなさい。',
        wrongAnswer: 'I like english and music.',
        trapExplanation: '文の途中にあるので小文字でよいと考えてしまう。日本語には大文字・小文字の区別がないため、意識しないと必ず抜ける。',
        correctAnswer: 'I like English and music.',
        correctExplanation:
          '国や言語からできた語（English, Japanese, Chinese, French）は、文のどこにあっても大文字で書き始める。一方、music・math・science・art などは固有の名前ではないので小文字のままでよい。同じ文の中で書き分けられるようにする。',
      },
      {
        question: '（　）に入る語を答えなさい。 I am good at （　） the piano.',
        wrongAnswer: 'play',
        trapExplanation: 'be good at を「〜が得意だ」と丸暗記していると、後ろにそのまま動詞の原形を置いてしまう。at が前置詞であることを意識できていないのが原因。',
        correctAnswer: 'playing',
        correctExplanation:
          'at は前置詞なので、後ろに動詞を置くときは必ず -ing の形（動名詞）にする。I am good at playing the piano. となる。同じ形に be interested in reading、Thank you for coming. がある。前置詞の後ろは名詞か -ing、と覚える。',
      },
    ],
  },

  {
    id: 'eigo_s347',
    subject: 'eigo',
    examType: 'chugaku',
    title: '学校②：文房具と持ち物',
    description: '文房具の語と、持ち物を貸し借りするときの表現を身につける',
    intro: '消しゴムを英語で言うとき、消す＋ゴムと考えて gum を使いたくなりますが、正しくは eraser です。はさみは scissors と、いつも複数形。日本語からそのまま作れない文房具の語を、実物と結びつけて覚えます。',
    order: 847,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'pen・pencil・eraser・ruler・notebook・textbook・pencil case が基本語。',
      '消しゴムは eraser（イギリス英語では rubber）。「消しゴム」の直訳はしない。',
      'scissors（はさみ）は二枚の刃が組みになっているので、いつも複数形。',
      '「持っていますか」は Do you have …?、「貸してください」は Can I borrow …?',
      '「これはだれの〜ですか」は Whose … is this? — It\'s mine.（私のです）',
      '所有代名詞 mine / yours / his / hers / ours / theirs を使うと名詞をくり返さずにすむ。',
    ],
    sections: [
      {
        heading: '文房具・持ち物の語',
        body: `教室の場面で出てくる持ち物の語をまとめる。

■ 筆記用具
pen（ペン）／pencil（えんぴつ）／colored pencil（色えんぴつ）／mechanical pencil（シャープペンシル）／eraser（消しゴム）／pencil case（筆箱）／pencil sharpener（えんぴつけずり）／marker（マーカー）／crayon（クレヨン）／brush（筆）

■ 紙・本
notebook（ノート）／textbook（教科書）／dictionary（辞書）／paper（紙）／card（カード）／map（地図）

■ 道具
ruler（定規）／scissors（はさみ）／glue（のり）／stapler（ホチキス）／calculator（電たく）／bag（かばん）／school bag（通学かばん）／lunch box（弁当箱）／water bottle（水とう）

⚠ 注意：日本語の「ノート」は note ではなく notebook。note は「メモ・覚え書き」の意味になる。「シャープペンシル」も和製英語で、英語では mechanical pencil という。

★ ポイント：scissors は刃が二枚一組なのでいつも複数形。数えるときは a pair of scissors とする。glasses（めがね）と同じ考え方である。

■ 数えられない語
paper（紙）は数えられない名詞。1枚は a piece of paper、2枚は two pieces of paper と数える。`,
      },
      {
        heading: '持ち物についてのやりとり',
        body: `教室での会話は、次の三つの型で答えられるようにする。

■ 持っているかたずねる
Do you have a pencil?（えんぴつを持っていますか。）
— Yes, I do.／No, I don't.
Do you have an eraser? ← eraser は母音で始まるので an を付ける。

■ 借りる・貸す
Can I borrow your eraser?（消しゴムを借りてもいいですか。）
— Sure. Here you are.（いいよ。はい、どうぞ。）
Can you lend me your ruler?（定規を貸してくれますか。）
※ borrow は「借りる」、lend は「貸す」。主語がどちらの立場かで使い分ける。

■ だれのものかたずねる
Whose notebook is this?（これはだれのノートですか。）
— It's mine.／It's Ken's.（私のです。／ケンのです。）
Whose are these pencils?（これらのえんぴつはだれのものですか。）
— They are hers.

★ ポイント：mine, yours, his, hers, ours, theirs は「〜のもの」を一語で表す所有代名詞。my notebook を mine と一語で言いかえられる。
⚠ 注意：Whose（だれの）と Who's（＝Who is）は発音が同じでつづりがちがう。書き取りで区別する。`,
      },
    ],
    trapExamples: [
      {
        question: '「これはだれのかばんですか。」を英語にしなさい。',
        wrongAnswer: "Who's bag is this?",
        trapExplanation: 'whose と who\'s は発音がまったく同じなので、耳で覚えていると書くときに取りちがえる。「だれの」＝「だれは」と考えてしまうのも原因。',
        correctAnswer: 'Whose bag is this?',
        correctExplanation:
          'whose は「だれの」という意味で、後ろに名詞が続く。who\'s は who is を短くした形で、Who\'s that boy?（あの少年はだれですか。）のように使う。後ろに名詞があれば whose、be動詞の働きが必要なら who\'s と判断する。',
      },
      {
        question: '「はさみを持っていますか。」を英語にしなさい。',
        wrongAnswer: 'Do you have a scissor?',
        trapExplanation: '日本語では「はさみを1本」と数えるので、単数形にして a を付けてしまう。二枚の刃が組みになっている道具だという英語の見方に気づかない。',
        correctAnswer: 'Do you have scissors?（または a pair of scissors）',
        correctExplanation:
          'scissors はいつも複数形で使う語で、scissor という単数形はふつう使わない。数えるときは a pair of scissors（1丁）、two pairs of scissors（2丁）とする。glasses・pants・shoes と同じ仲間としてまとめて覚える。',
      },
    ],
  },

  {
    id: 'eigo_s348',
    subject: 'eigo',
    examType: 'chugaku',
    title: '学校③：一年の行事',
    description: '入学式・運動会・修学旅行など学校行事の英語と、月と結びつけた言い方を学ぶ',
    intro: '運動会や修学旅行には、そのまま当てはまる英語の一語がありません。sports day、school trip のように、二語を組み合わせて表します。行事の話をするときの「〜がある」に have を使うのもポイントです。月の言い方とセットで練習します。',
    order: 848,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'entrance ceremony（入学式）・sports day（運動会）・school trip（修学旅行）・graduation ceremony（卒業式）が中心。',
      '行事の月を言うときは in April のように in を使う。日付なら on May 5 と on を使う。',
      '「〜がある」は We have ＋ 行事名。We have a sports day in October.',
      'summer vacation（夏休み）は数えられる名詞のようにあつかい、during summer vacation で「夏休みの間」。',
      '「楽しかった」は I enjoyed it very much.／It was a lot of fun.',
      '行事の思い出は過去形で書く。went・had・saw・was など不規則動詞に注意。',
    ],
    sections: [
      {
        heading: '学校行事の英語',
        body: `日本の学校行事は、英語では説明的な言い方になるものが多い。組み合わせで覚える。

■ 一年の行事
entrance ceremony（入学式）／opening ceremony（始業式）／sports day, field day（運動会）／school trip, field trip（遠足・校外学習）／school excursion（修学旅行）／music festival, chorus contest（音楽会・合唱コンクール）／school festival（学園祭・文化祭）／swimming meet（水泳大会）／marathon（マラソン大会）／graduation ceremony（卒業式）

■ 休み
spring vacation（春休み）／summer vacation（夏休み）／winter vacation（冬休み）
※ イギリス英語では vacation ではなく holiday を使う。

■ 行事を説明する
We have a sports day in October.（10月に運動会があります。）
Our school festival is in November.（学園祭は11月です。）
We went to Kyoto on our school trip.（修学旅行で京都に行きました。）

★ ポイント：月の名前の前には in、日付の前には on を使う。
例）in April（4月に）／on April 8（4月8日に）

⚠ 注意：月の名前も曜日の名前も必ず大文字で書き始める（April, May, Monday）。`,
        figureId: 'lf_eigoext10_348',
      },
      {
        heading: '行事の思い出を書く',
        body: `「思い出に残っている行事」を書かせる問題は、英語入試で頻出である。過去形を正しく使うことが得点の分かれ目になる。

■ よく使う過去形（不規則動詞）
go → went（行った）／have → had（〜があった・食べた）／see → saw（見た）／eat → ate（食べた）／take → took（撮った・持っていった）／run → ran（走った）／sing → sang（歌った）／win → won（勝った）／is, am → was／are → were

■ 書き方の型
① いつ・何があったか：Last October, we had a sports day.
② 何をしたか：I ran in the relay race.（リレーで走りました。）
③ 結果：My team won the race.（私のチームが勝ちました。）
④ 感想：I was very happy.／It was a lot of fun.

例文）Last May, we went to Kyoto on our school trip. We visited many temples and took a lot of pictures. I enjoyed it very much.

★ ポイント：感想は I enjoyed it very much.／It was exciting.／I had a good time. のどれかを覚えておけば必ず書ける。

⚠ 注意：enjoy の後ろに動詞を置くときは -ing にする。I enjoyed swimming in the sea.（× enjoyed to swim）`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは10月に運動会があります。」を英語にしなさい。',
        wrongAnswer: 'We have a sports day on October.',
        trapExplanation: '「〜に」をすべて on で表せると思いこんでしまう。曜日や日付で on を使う練習をした直後ほど、月にも on を付けてしまう。',
        correctAnswer: 'We have a sports day in October.',
        correctExplanation:
          '月・年・季節のように幅のある期間には in を使い、日付・曜日のように一日を指すときには on を使う。in October（10月に）／on October 10（10月10日に）／on Sunday（日曜日に）と整理する。時刻には at を使う（at seven）。',
      },
      {
        question: '「私は海で泳ぐのを楽しみました。」を英語にしなさい。',
        wrongAnswer: 'I enjoyed to swim in the sea.',
        trapExplanation: '「〜することを楽しむ」という日本語から、「〜すること」＝to ＋ 動詞の原形だと考えてしまう。want to go などの形につられるのも原因。',
        correctAnswer: 'I enjoyed swimming in the sea.',
        correctExplanation:
          'enjoy の後ろに動詞を置くときは必ず -ing の形にする。同じ仲間に finish・stop・practice がある。反対に、want・hope・decide・need は to ＋ 動詞の原形をとる。enjoy -ing はセットで暗記する。',
      },
    ],
  },

  {
    id: 'eigo_s349',
    subject: 'eigo',
    examType: 'chugaku',
    title: '学校④：教室で使う英語と学校の場所',
    description: '先生の指示（教室英語）と、校内の場所を表す語を身につける',
    intro: 'Open your textbook. Stand up. 先生の指示は、どれも動詞から始まります。主語がないのは、相手が目の前の「あなた」に決まっているからです。命令文のこの性質を知ると、教室で聞こえる英語が一気に分かりやすくなります。',
    order: 849,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '教室の指示は動詞で始まる命令文。Open your textbook. / Stand up. / Listen carefully.',
      'ていねいにするには please を文の始めか終わりに付ける。Please sit down.',
      '「〜しないで」は Don\'t ＋ 動詞の原形。Don\'t run in the hallway.',
      '校内の場所：classroom・gym・library・music room・school yard・teachers\' room。',
      '「〜してもいいですか」は May I …? / Can I …?、「〜してくれますか」は Can you …?',
      '聞き取れないときは Pardon?／Could you say that again?（もう一度言ってください）。',
    ],
    sections: [
      {
        heading: '先生が使う教室英語（命令文）',
        body: `授業中に先生が使う言い方は、すべて動詞で始まる命令文である。主語の You を書かないのが特徴。

■ よく使う指示
Stand up.（立ちなさい。）／Sit down.（すわりなさい。）／Open your textbook to page 20.（教科書の20ページを開きなさい。）／Close your book.（本を閉じなさい。）／Look at the blackboard.（黒板を見なさい。）／Listen carefully.（よく聞きなさい。）／Repeat after me.（私のあとについてくり返しなさい。）／Read aloud.（声に出して読みなさい。）／Raise your hand.（手をあげなさい。）／Write your name here.（ここに名前を書きなさい。）／Be quiet.（静かにしなさい。）

★ ポイント：be動詞の命令文は Be で始める。Be quiet.／Be careful.（気をつけて。）／Be kind to your friends.

■ ていねいな言い方
Please stand up.／Stand up, please.
※ 文の終わりに置くときはコンマを打つ。

■ 禁止
Don't run in the hallway.（ろうかを走ってはいけません。）／Don't be late.（おくれないように。）／Don't forget your homework.（宿題を忘れないで。）

⚠ 注意：Let's ＝「〜しましょう」は命令文と形が似ているが意味がちがう。Let's begin.（始めましょう。）は自分もいっしょに行う。`,
      },
      {
        heading: '学校の中の場所と人',
        body: `校内の場所を表す語は、道案内や紹介文でそのまま使える。

■ 場所
classroom（教室）／gym, gymnasium（体育館）／library（図書室）／music room（音楽室）／science room（理科室）／computer room（コンピューター室）／art room（図工室）／cooking room（調理室）／nurse's office（保健室）／teachers' room, staff room（職員室）／principal's office（校長室）／school yard, playground（校庭）／swimming pool（プール）／hallway, corridor（ろうか）／entrance（げんかん）／restroom（トイレ）

■ 人
teacher（先生）／homeroom teacher（担任の先生）／principal（校長先生）／school nurse（保健の先生）／classmate（クラスメート）／student, pupil（児童・生徒）

■ 場所を言う
The library is on the second floor.（図書室は2階です。）
Our classroom is next to the music room.（私たちの教室は音楽室のとなりです。）

⚠ 注意：teachers' room はアポストロフィが -s の後ろに付く（先生が複数いる部屋なので）。nurse's office は先生が一人なので -s の前に付く。`,
      },
      {
        heading: '生徒が使う教室英語',
        body: `生徒の側から使う表現も、リスニングや会話の並べかえ問題で問われる。

■ 許可を求める
May I come in?（入ってもいいですか。）— Sure.／Of course.
Can I go to the restroom?（トイレに行ってもいいですか。）
May I use your dictionary?（辞書を使ってもいいですか。）
※ May I …? のほうが Can I …? よりていねい。

■ お願いする
Can you help me?（手伝ってくれますか。）
Could you speak more slowly?（もっとゆっくり話してもらえますか。）
※ Could you …? は Can you …? のていねいな形。

■ わからないときに使う言い方
Pardon?／Excuse me?（もう一度お願いします。）
Could you say that again?（もう一度言ってもらえますか。）
How do you say "つくえ" in English?（「つくえ」は英語で何と言いますか。）
What does this word mean?（この語はどういう意味ですか。）
I don't understand.（わかりません。）
I have a question.（質問があります。）

★ ポイント：May I …? は「私が〜してよいか」、Can you …? は「あなたが〜してくれるか」。主語がだれかを見れば、許可を求める文か依頼する文かが区別できる。`,
      },
    ],
    trapExamples: [
      {
        question: '「ろうかを走ってはいけません。」を英語にしなさい。',
        wrongAnswer: "You don't run in the hallway.",
        trapExplanation: '「〜してはいけません」を否定文だと考え、主語 You を付けたふつうの否定文にしてしまう。この形だと「あなたはろうかを走りません」という事実の説明になってしまう。',
        correctAnswer: "Don't run in the hallway.",
        correctExplanation:
          '禁止を表す命令文は、主語を書かずに Don\'t ＋ 動詞の原形で始める。be動詞の場合も Don\'t be late.（おくれないで）と Don\'t be … の形になる。主語 You を付けると命令ではなく事実を述べる文に変わってしまう。',
        },
      {
        question: '（　）に入る語を選びなさい。 （　） I use your dictionary? — Sure, here you are.　［May / Can you］',
        wrongAnswer: 'Can you',
        trapExplanation: '「〜してもいいですか」も「〜してくれますか」も日本語では相手にお願いする形なので、区別せずに Can you を選んでしまう。',
        correctAnswer: 'May',
        correctExplanation:
          '辞書を使うのは「私」なので、主語は I になり、許可を求める May I …?（または Can I …?）を使う。Can you …? は「あなたが〜してくれますか」という依頼で、動作をするのは相手である。だれが動作をするのかで判断する。',
      },
    ],
  },
  // ───────────── 3. 動物・植物・自然・天気・季節（s350〜s353） ─────────────
  {
    id: 'eigo_s350',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自然①：動物を表す語と鳴き声・複数形',
    description: 'ペット・家畜・野生動物の語と、不規則な複数形、動物にまつわる表現を学ぶ',
    intro: 'sheep は一匹でも百匹でも sheep のままだと知っていましたか。fish や deer も同じで、複数形になっても形が変わりません。逆に mouse は mice と大きく変わります。動物の語には、数え方のしかけがひそんでいます。',
    order: 850,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'dog・cat・bird・fish・horse・cow・pig・sheep・rabbit が基本語。',
      '複数形が変わらない語：sheep → sheep、fish → fish、deer → deer。',
      '不規則な複数形：mouse → mice、goose → geese。',
      '動物を飼うのは keep か have。I have two dogs.／We keep a rabbit at school.',
      '動物を指す代名詞はふつう it。名前のあるペットだけ he / she で呼ぶことがある。',
      'animal（動物）・insect（昆虫）・bird（鳥）・fish（魚）とグループの語も覚える。',
    ],
    sections: [
      {
        heading: '動物の語をグループで覚える',
        body: `動物の語は数が多いので、生活の場面ごとにまとめて覚えると効率がよい。

■ ペット
dog（犬）／cat（ねこ）／rabbit（うさぎ）／hamster（ハムスター）／bird（鳥）／goldfish（金魚）／turtle（かめ）

■ 家畜・農場の動物
cow（牛）／horse（馬）／pig（ぶた）／sheep（ひつじ）／goat（やぎ）／chicken（にわとり）／duck（あひる）

■ 野生動物・動物園
lion（ライオン）／tiger（とら）／elephant（ぞう）／bear（くま）／monkey（さる）／giraffe（きりん）／panda（パンダ）／wolf（おおかみ）／fox（きつね）／deer（しか）／snake（へび）／frog（かえる）

■ 海の生き物
whale（くじら）／dolphin（いるか）／shark（さめ）／octopus（たこ）／crab（かに）／penguin（ペンギン）

■ 昆虫（insect）
butterfly（ちょう）／beetle（かぶと虫）／ant（あり）／bee（はち）／dragonfly（とんぼ）／grasshopper（ばった）／spider（くも。厳密には昆虫ではない）

⚠ 注意：giraffe の gi、elephant の ph、butterfly の tt はつづりをまちがえやすい。`,
      },
      {
        heading: '複数形に気をつける動物',
        body: `動物の語には、-s を付けない複数形や形が変わる複数形が多い。入試の定番である。

■ 単数と複数が同じ形
sheep → sheep（ひつじ）／deer → deer（しか）／fish → fish（魚）
例）There are ten sheep in the field.（野原にひつじが10頭いる。）
※ fish は種類のちがう魚を並べるときだけ fishes とすることがあるが、ふつうは fish のままでよい。

■ 形が変わるもの
mouse → mice（ねずみ）／goose → geese（がちょう）／wolf → wolves（おおかみ）／leaf → leaves（葉）
※ -f, -fe で終わる語は f を v に変えて -es を付ける。knife → knives、life → lives も同じ。

■ ふつうに -s / -es を付けるもの
dog → dogs／cat → cats／horse → horses／fox → foxes／monkey → monkeys
※ -x, -s, -sh, -ch で終わる語は -es を付ける（foxes, boxes）。
※ 語尾が「子音字＋y」なら y を i に変えて -es（butterfly → butterflies）。「母音字＋y」ならそのまま -s（monkey → monkeys、boy → boys）。

★ ポイント：monkey は母音字（e）＋ y なので monkies ではなく monkeys。ここは必ず問われる。`,
      },
      {
        heading: '動物についての表現',
        body: `動物を話題にした会話は、次の型で答えられるようにしておく。

■ ペットについて
Do you have any pets?（ペットを飼っていますか。）
— Yes, I have two dogs.／No, I don't.
What's your dog's name?（犬の名前は何ですか。）— His name is Pochi.
I take care of my dog every day.（毎日犬の世話をしています。）
I walk my dog before breakfast.（朝食前に犬を散歩させます。）

■ 好きな動物
What animal do you like?（どんな動物が好きですか。）
— I like pandas (the) best.（パンダがいちばん好きです。）
※ 動物を一般的に「好き」と言うときは複数形にする。

■ 動物の特徴を言う
Elephants are very big.（ぞうはとても大きい。）
Rabbits can run fast.（うさぎは速く走れる。）
Penguins can't fly.（ペンギンは飛べない。）
A whale is not a fish. It is an animal.（くじらは魚ではなく動物だ。）

★ ポイント：「〜は一般に…だ」と言うときは、複数形（Elephants are …）か a ＋ 単数（An elephant is …）のどちらかを使う。`,
      },
    ],
    trapExamples: [
      {
        question: '「野原にひつじが5頭います。」を英語にしなさい。',
        wrongAnswer: 'There are five sheeps in the field.',
        trapExplanation: '複数なら -s を付ける、という規則をすべての名詞にあてはめてしまう。sheep が単数と複数で同じ形だと知らないと必ず引っかかる。',
        correctAnswer: 'There are five sheep in the field.',
        correctExplanation:
          'sheep は単数形と複数形が同じ形の語で、-s を付けない。同じ仲間に deer（しか）と fish（魚）がある。数が複数であることは five や動詞の are で示されるので、名詞の形は変えなくてよい。',
      },
      {
        question: '次の語を複数形にしなさい。 monkey',
        wrongAnswer: 'monkies',
        trapExplanation: '「y で終わる語は y を i に変えて -es」という規則だけを覚えていて、その前が母音字か子音字かを確かめない。butterfly → butterflies の直後だとよけいに引っかかる。',
        correctAnswer: 'monkeys',
        correctExplanation:
          'y を i に変えるのは「子音字＋y」で終わる語だけである（city → cities、butterfly → butterflies）。monkey は e という母音字＋y なので、そのまま -s を付けて monkeys とする。boy → boys、day → days、key → keys も同じ形。',
      },
    ],
  },

  {
    id: 'eigo_s351',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自然②：植物と自然の風景',
    description: '植物の部分・自然の地形を表す語と、自然を説明する言い方を学ぶ',
    intro: 'leaf の複数形を leafs と書くと誤りで、正しくは leaves です。f が v に変わってから es が付く型があるのです。木や葉、山や川といった自然の語は、この不規則な変化とともに覚えると入試で強くなります。',
    order: 851,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'tree（木）・flower（花）・leaf（葉）・root（根）・seed（種）・branch（枝）が植物の基本語。',
      'leaf の複数形は leaves。f を v に変えて -es を付ける型。',
      '自然の地形：mountain・river・sea・lake・forest・field・beach・island。',
      '固有名詞の前の the に注意：the Pacific Ocean、Mt. Fuji（Mt. には the を付けない）。',
      'grass（草）・water（水）・air（空気）は数えられない名詞。',
      '「花がさく」は bloom、「木を植える」は plant a tree。',
    ],
    sections: [
      {
        heading: '植物を表す語',
        body: `理科的な話題や、季節の説明でよく出る語をまとめる。

■ 植物の部分
tree（木）／plant（植物）／flower（花）／leaf（葉）／branch（枝）／trunk（みき）／root（根）／seed（種）／bud（つぼみ）／grass（草）／fruit（実・果物）

■ 花の名前
cherry blossom（さくらの花）／rose（ばら）／tulip（チューリップ）／sunflower（ひまわり）／morning glory（あさがお）／lily（ゆり）

■ 植物についての動詞
grow（育つ・育てる）／plant（植える）／water（水をやる）／bloom（花がさく）／fall（落ちる）／pick（つむ）

例）The cherry blossoms are beautiful in spring.（春はさくらの花が美しい。）
例）I water the flowers every morning.（毎朝、花に水をやります。）
※ water は「水」という名詞と「水をやる」という動詞の両方に使える。

★ ポイント：leaf の複数形は leaves。f を v に変えて -es を付けるタイプで、knife → knives、life → lives、wolf → wolves と同じ仲間。

⚠ 注意：grass（草）は数えられない名詞。glass（コップ・ガラス）とつづりが1字ちがうだけなので書き分ける。`,
      },
      {
        heading: '自然の風景を表す語',
        body: `風景の描写や、行った場所を説明する作文で使う語である。

■ 地形
mountain（山）／hill（丘）／valley（谷）／river（川）／lake（湖）／pond（池）／sea（海）／ocean（大洋）／beach（浜辺）／island（島）／forest, woods（森）／field（野原・畑）／desert（砂ばく）／waterfall（滝）

■ 空・宇宙
sky（空）／sun（太陽）／moon（月）／star（星）／cloud（雲）／rainbow（にじ）／Earth（地球）／space（宇宙）

■ 自然を説明する
We went to the sea last summer.（去年の夏、海に行きました。）
There are a lot of trees in the forest.（森にはたくさんの木がある。）
Mt. Fuji is the highest mountain in Japan.（富士山は日本でいちばん高い山だ。）
I can see many stars at night.（夜にはたくさんの星が見えます。）

★ ポイント：the の使い方に注意する。the sun / the moon / the sky のように一つしかないものには the を付ける。山の名前は Mt. Fuji のように the を付けないが、海や川の名前には the を付ける（the Pacific Ocean、the Shinano River）。

⚠ 注意：island の s は発音しない。desert（砂ばく）と dessert（デザート）はつづりも意味もちがうので区別する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の語を複数形にしなさい。 leaf',
        wrongAnswer: 'leafs',
        trapExplanation: '-s を付けるだけという基本の規則をそのままあてはめてしまう。日本語では「葉」の形が変わらないので、変化に気づくきっかけもない。',
        correctAnswer: 'leaves',
        correctExplanation:
          '-f や -fe で終わる語は、f を v に変えて -es を付ける。leaf → leaves、knife → knives、life → lives、wolf → wolves がその代表である。ただし roof → roofs のように例外もあるので、代表語をセットで覚える。',
      },
      {
        question: '「富士山は日本でいちばん高い山です。」を英語にしなさい。',
        wrongAnswer: 'The Mt. Fuji is the highest mountain in Japan.',
        trapExplanation: '「いちばん高い」に the を付ける練習をした流れで、山の名前にも the を付けてしまう。the Pacific Ocean のような海の名前を覚えた直後にも起こりやすい。',
        correctAnswer: 'Mt. Fuji is the highest mountain in Japan.',
        correctExplanation:
          '山ひとつの名前には the を付けない（Mt. Fuji、Mt. Everest）。一方、海・川・山脈には the を付ける（the Pacific Ocean、the Shinano River、the Japanese Alps）。最上級の the highest の the は必要なので、そこは落とさない。',
      },
    ],
  },

  {
    id: 'eigo_s352',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自然③：天気を表す語と言い方',
    description: '天気の形容詞と名詞の使い分け、天気をたずねる決まり文句を身につける',
    intro: '「今日は晴れです」の主語は何でしょう。日本語には主語がありませんが、英語では It is sunny today. と、天気専用の It を立てます。しかも sunny は形容詞で、sun は名詞。似た形の二語を混同しないところから始めます。',
    order: 852,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '天気をたずねるのは How is the weather? または What is the weather like?',
      '答えるときの主語は It。It is sunny today.（今日は晴れです。）',
      '形容詞（sunny, rainy, cloudy, snowy, windy）と名詞（sun, rain, cloud, snow, wind）を区別する。',
      '「雨が降る」は動詞 rain も使える。It rains a lot in June.／It is raining now.',
      '気温は It is hot / warm / cool / cold. で表す。',
      '天気の It には「それ」という意味はない。訳さない主語である。',
    ],
    sections: [
      {
        heading: '天気を表す語と、たずね方',
        body: `天気の話題はあいさつがわりに使われ、会話問題で頻出する。

■ たずね方
How is the weather today?（今日の天気はどうですか。）
What is the weather like in Tokyo?（東京の天気はどうですか。）
※ like は「〜のような」という意味の前置詞。「好き」ではないので注意する。

■ 答え方
It is sunny.（晴れです。）／It is cloudy.（くもりです。）／It is rainy.（雨です。）／It is snowy.（雪です。）／It is windy.（風が強いです。）／It is foggy.（きりが出ています。）

■ 気温
It is hot.（暑い。）／It is warm.（暖かい。）／It is cool.（すずしい。）／It is cold.（寒い。）／It is humid.（むし暑い。）

★ ポイント：この It は「それ」という意味を持たない、天気・気温・時刻・曜日・距離を言うときに使う特別な主語である。日本語に訳さない。
例）It is Monday today.（今日は月曜日だ。）／It is seven o'clock.（7時だ。）

⚠ 注意：How is the weather? に対して I am sunny. や Today is sunny weather. とは答えない。必ず It is … で答える。`,
        figureId: 'lf_eigoext10_352',
      },
      {
        heading: '形容詞と名詞・動詞の使い分け',
        body: `天気の語には、名詞・形容詞・動詞の三つの形があるものが多い。形を選びまちがえる誤答が非常に多い。

■ 名詞と形容詞
sun（太陽）→ sunny（晴れた）／rain（雨）→ rainy（雨の）／cloud（雲）→ cloudy（くもった）／snow（雪）→ snowy（雪の）／wind（風）→ windy（風の強い）／fog（きり）→ foggy（きりの深い）

be動詞の後ろに置くのは形容詞のほうである。
例）It is rainy today.（○）／It is rain today.（×）

■ 名詞の使い方
We had a lot of rain last month.（先月は雨が多かった。）
The snow is deep.（雪が深い。）
※ rain・snow は数えられない名詞なので、a rain / rains とはしない。

■ 動詞の使い方
rain・snow は「雨が降る」「雪が降る」という動詞にもなる。
It rains a lot in June.（6月はよく雨が降る。）← ふだんの習慣なので現在形
It is raining now.（今、雨が降っている。）← 今この瞬間なので進行形
It snowed yesterday.（昨日は雪が降った。）← 過去形

★ ポイント：「今降っている」→ It is raining.／「よく降る」→ It rains often. と時制で区別する。三人称単数の it が主語なので、現在形では rains と -s が付く。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。 How is the weather? — It is （　）. （雨です）',
        wrongAnswer: 'rain',
        trapExplanation: '「雨」＝rain と一語で覚えているため、be動詞の後ろにそのまま名詞を置いてしまう。日本語では「雨です」と名詞で答えるので、なおさら気づきにくい。',
        correctAnswer: 'rainy',
        correctExplanation:
          'be動詞の後ろで「どんな状態か」を説明するのは形容詞である。天気を答えるときは sunny・cloudy・rainy・snowy・windy と -y の付いた形容詞を使う。名詞の rain は We had a lot of rain. のように使う。',
      },
      {
        question: '「今、雪が降っています。」を英語にしなさい。',
        wrongAnswer: 'It snows now.',
        trapExplanation: '「降っています」を現在形で表せると思ってしまう。日本語の「〜ています」が現在形なのか進行形なのか意識できていないのが原因。',
        correctAnswer: 'It is snowing now.',
        correctExplanation:
          '今この瞬間に起きていることは現在進行形（be動詞＋-ing）で表す。It snows now. のような現在形は「ふだんくり返し起こること」を表すので、It snows a lot in Hokkaido.（北海道ではよく雪が降る）のように使う。now があれば進行形と判断する。',
      },
    ],
  },

  {
    id: 'eigo_s353',
    subject: 'eigo',
    examType: 'chugaku',
    title: '自然④：季節と一年のうつりかわり',
    description: '四季の語と、季節にまつわる行事・過ごし方の表現を身につける',
    intro: '「秋」を英語で言うとき、fall と autumn のどちらが正しいのでしょうか。答えはどちらも正解で、アメリカでは fall、イギリスでは autumn が使われます。同じ英語でも国によって語が変わる例です。四季の語と使い方をまとめます。',
    order: 853,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'spring（春）・summer（夏）・fall / autumn（秋）・winter（冬）が四季。',
      '「秋」はアメリカ英語で fall、イギリス英語で autumn。どちらも正解。',
      '季節には in を使う。in spring（春に）／in summer。',
      '「いちばん好きな季節」は My favorite season is spring. が定番。',
      '季節の名前はふつう小文字。月や曜日と混同しない。',
      '「梅雨」は the rainy season。season には the が付く。',
    ],
    sections: [
      {
        heading: '四季を表す語と使い方',
        body: `季節を話題にした問題は、英検5級から3級まで幅広く出題される。

■ 四季
spring（春）／summer（夏）／fall または autumn（秋）／winter（冬）

★ ポイント：秋の言い方は二つある。アメリカ英語では fall、イギリス英語では autumn を使う。入試ではどちらを書いても正解になる。fall には「落ちる」という動詞の意味もあり、木の葉が落ちる季節だから fall と呼ばれる。

■ 季節と前置詞
季節の前には in を使う。
例）We have a lot of rain in June.（6月は雨が多い。）
例）It is very cold in winter.（冬はとても寒い。）
※ in the spring のように the を付ける言い方もあるが、付けないほうがふつう。

■ 大文字・小文字
月の名前（April）と曜日の名前（Monday）は必ず大文字で始めるが、季節の名前（spring, summer）は文の途中では小文字のままでよい。ここは対比して覚える。

■ 特別な季節
the rainy season（梅雨）／the dry season（かんそうした季節）
例）The rainy season starts in June in Japan.（日本では梅雨は6月に始まる。）`,
        figureId: 'lf_eigoext10_353',
      },
      {
        heading: '季節ごとの行事と過ごし方',
        body: `「好きな季節とその理由」を書かせる問題は英語入試の定番である。理由まで書けるように、季節ごとの語をそろえておく。

■ 春（spring）
warm（暖かい）／cherry blossom（さくらの花）／entrance ceremony（入学式）／picnic（ピクニック）／new school year（新学年）
例）I like spring because the cherry blossoms are beautiful.

■ 夏（summer）
hot（暑い）／summer vacation（夏休み）／swimming（水泳）／fireworks（花火）／festival（祭り）／camping（キャンプ）／beach（浜辺）／watermelon（すいか）
例）I like summer because I can swim in the sea.

■ 秋（fall / autumn）
cool（すずしい）／colored leaves（紅葉）／sports day（運動会）／harvest（収穫）／reading（読書）
例）In fall, the leaves turn red and yellow.（秋には葉が赤や黄色に変わる。）

■ 冬（winter）
cold（寒い）／snow（雪）／skiing（スキー）／New Year's Day（元日）／Christmas（クリスマス）／winter vacation（冬休み）
例）I like winter because I can go skiing.

★ ポイント：理由を書くときは because を使い、「その季節にできること」を can で書くとまとめやすい。
形：I like ＋ 季節 ＋ because I can ＋ 動詞の原形 …．`,
      },
    ],
    trapExamples: [
      {
        question: '「冬はとても寒い。」を英語にしなさい。',
        wrongAnswer: 'It is very cold on winter.',
        trapExplanation: '曜日や日付で on を使う練習をした流れで、季節にも on を付けてしまう。日本語の「〜は」「〜に」がすべて同じ形なので区別のきっかけがない。',
        correctAnswer: 'It is very cold in winter.',
        correctExplanation:
          '季節・月・年のように幅のある期間には in を使う（in winter、in July、in 2026）。日付・曜日など特定の一日には on（on Monday、on May 5）、時刻には at（at seven）を使う。「広い→in、一日→on、一点→at」と大きさの順で覚える。',
      },
      {
        question: '「秋には葉が赤くなります。」の「秋」にあたる英語として正しくないものはどれか。 ［fall / autumn / Fall Season / 秋］',
        wrongAnswer: 'autumn は誤り（fall だけが正しい）',
        trapExplanation: '教科書で習ったほうだけを正解だと思いこみ、もう一方を誤りだと判断してしまう。アメリカ英語とイギリス英語のちがいだと知らないことが原因。',
        correctAnswer: 'fall も autumn も正しい（Fall Season は誤り）',
        correctExplanation:
          '「秋」はアメリカ英語で fall、イギリス英語で autumn といい、どちらを書いても正解である。ただし季節名は文の途中では小文字で書き、season を付けて Fall Season のようには言わない。The leaves turn red in fall. のように使う。',
      },
    ],
  },

  // ───────────── 4. 数・序数・曜日・月・日付・時刻（s354〜s358） ─────────────
  {
    id: 'eigo_s354',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数①：基数の書き方と読み方',
    description: '1から100までの数、大きな数の言い方と、つづりのまちがえやすい数を確認する',
    intro: 'thirteen と thirty は、書いても聞いてもまぎらわしい代表です。しかも four は forty になると u が消え、five は fifteen と形を変えます。数はすべての問題の土台なので、つづりの落とし穴をここでつぶしておきます。',
    order: 854,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '13〜19 は -teen、20〜90 は -ty で終わる。thirteen と thirty を区別する。',
      'つづり注意：four → forty（u が消える）、five → fifteen / fifty、nine → ninety（e が消える）。',
      '21以上はハイフンでつなぐ。twenty-one, thirty-five。',
      '百は hundred、千は thousand。数詞のあとの hundred には -s を付けない（three hundred）。',
      '百の位と十の位の間に and を入れることがある（two hundred and five）。',
      '数を表す語の後ろの名詞は複数形。three books（× three book）。',
    ],
    sections: [
      {
        heading: '1から100までの数',
        body: `数の英語は、聞き取り・書き取りの両方で出題される。まずつづりを正確に書けるようにする。

■ 1〜12（形がばらばら）
one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve

■ 13〜19（-teen で終わる）
thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

■ 20〜90（-ty で終わる）
twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety

★ ポイント：つづりが元の語から変わるものに注意する。
three → thirteen, thirty（形が大きく変わる）
four → fourteen（u あり）／forty（u が消える！）
five → fifteen, fifty（ve が f に変わる）
eight → eighteen, eighty（t が一つになる）
nine → nineteen（e あり）／ninety（e が消える）

■ 21以上
twenty-one（21）／thirty-five（35）／forty-eight（48）／ninety-nine（99）
※ 十の位と一の位はハイフンでつなぐ。

⚠ 注意：thirteen（13）と thirty（30）、fourteen（14）と forty（40）は聞き取りでまちがえやすい。-teen は後ろを強く、-ty は前を強く読む。`,
      },
      {
        heading: '大きな数の言い方',
        body: `100以上の数は、位ごとに区切って読む。

■ 百・千・百万
hundred（100）／thousand（1,000）／million（1,000,000）

■ 読み方の例
100 → one hundred（または a hundred）
200 → two hundred
305 → three hundred (and) five
1,000 → one thousand
2,500 → two thousand five hundred
1,000,000 → one million

★ ポイント：数を表す語のあとの hundred・thousand・million には -s を付けない。
例）three hundred students（○）／three hundreds students（×）
ただし「何百もの」と漠然と言うときだけ hundreds of people（何百人もの人々）と -s と of が付く。

■ 年号の読み方
1985 → nineteen eighty-five（19と85に分けて読む）
2026 → two thousand twenty-six または twenty twenty-six

■ 数の後ろの名詞
数を表す語のあとの名詞は複数形にする。
例）I have three books.／There are twenty students in my class.

⚠ 注意：0 の読み方は zero が基本だが、電話番号やスポーツの得点では oh（オー）と読むこともある。`,
      },
    ],
    trapExamples: [
      {
        question: '数字の 40 を英語のつづりで書きなさい。',
        wrongAnswer: 'fourty',
        trapExplanation: '4 が four なので、そのまま -ty を付ければよいと考えてしまう。14 が fourteen と u を残す形なので、よけいに混乱する。',
        correctAnswer: 'forty',
        correctExplanation:
          '40 は four の u が消えて forty になる。14 の fourteen には u が残るので、この二つは必ずセットで確認する。ほかにも five → fifteen / fifty（ve が f に変わる）、nine → ninety（e が消える）が同じ型のひっかけである。',
      },
      {
        question: '「私たちの学校には生徒が300人います。」を英語にしなさい。',
        wrongAnswer: 'Our school has three hundreds students.',
        trapExplanation: '「300人」と複数だから hundred にも -s を付けるべきだと考えてしまう。students に -s を付ける流れで、そのまま hundred にも付けてしまう。',
        correctAnswer: 'Our school has three hundred students.',
        correctExplanation:
          '数を表す語（three, five など）が前に付くとき、hundred・thousand・million には -s を付けない。-s が付くのは hundreds of students（何百人もの生徒）のように、はっきりした数を言わないときだけである。後ろの名詞 students は複数形にする。',
      },
    ],
  },

  {
    id: 'eigo_s355',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数②：序数（〜番目）の作り方',
    description: '順番を表す序数の形と、日付・階・順位での使い方を身につける',
    intro: '「五番目」は fiveth ではなく fifth です。数のことばに th を付けるだけに見えて、一・二・三は形がまったく変わり、five や nine もつづりがくずれます。日付や順位を言うときに必ず使うので、確実にしておきます。',
    order: 855,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '序数はふつう基数に -th を付ける（four → fourth, six → sixth）。',
      '特別な形：first（1）・second（2）・third（3）。',
      'つづりが変わるもの：five → fifth、nine → ninth、twelve → twelfth、twenty → twentieth。',
      '数字で書くときは 1st, 2nd, 3rd, 4th のように最後の2文字を付ける。',
      '序数の前にはふつう the を付ける（the first day）。',
      '日付・階・順位・何番目かをたずねる文（Which …?）で使う。',
    ],
    sections: [
      {
        heading: '序数の作り方',
        body: `「〜番目」を表す語を序数という。日付を言うときに必ず必要になる。

■ 特別な形（覚えるしかない）
one → first（1番目）／two → second（2番目）／three → third（3番目）

■ 基本は -th を付ける
four → fourth／six → sixth／seven → seventh／ten → tenth／eleven → eleventh／thirteen → thirteenth

■ つづりが変わるもの
five → fifth（ve が f に）／eight → eighth（t は一つのまま、h を足す）／nine → ninth（e が消える）／twelve → twelfth（ve が f に）
twenty → twentieth／thirty → thirtieth（y を ie に変えて -th）

■ 21以上
twenty-first（21番目）／twenty-second／twenty-third／thirtieth（30番目）／thirty-first（31番目）
※ 最後の位だけを序数にする。

■ 数字で書くとき
1st, 2nd, 3rd, 4th, 5th … 21st, 22nd, 23rd, 30th, 31st
※ つづりの最後の2文字を付ける。first → 1st、second → 2nd、third → 3rd、fourth → 4th。

★ ポイント：序数の前にはふつう the を付ける。the first, the second, the third。ただし日付では書き方によって省くことがある。`,
        figureId: 'lf_eigoext10_355',
      },
      {
        heading: '序数を使う場面',
        body: `序数は次の場面で必ず使う。使い方ごとに例文で覚える。

■ 日付
May 5（読み方：May fifth）／July 20（July twentieth）
※ 書くときは数字だけでよいが、読むときは必ず序数で読む。

■ 階
Our classroom is on the third floor.（教室は3階です。）
The library is on the first floor.

■ 順位・順番
He won first prize.（彼は1等賞をとった。）
This is my second time in Kyoto.（京都に来るのは2回目です。）
Take the first street on your right.（1本目の道を右に。）

■ 学年・回数
He is in the sixth grade.（彼は6年生です。）
This is the twentieth century.（これは20世紀です。）

■ たずね方
Which floor is the music room on?（音楽室は何階ですか。）
— It's on the fourth floor.

⚠ 注意：ninth（9番目）は nine の e が落ちる。eighth（8番目）は eight に h だけを足すので t が二つ続かない（× eightth）。この二つは書き取りで頻出。`,
      },
    ],
    trapExamples: [
      {
        question: '「9番目」を英語のつづりで書きなさい。',
        wrongAnswer: 'nineth',
        trapExplanation: '「基数に -th を付ける」という規則をそのままあてはめてしまう。nine のつづりを崩さずに残そうとするのが原因。',
        correctAnswer: 'ninth',
        correctExplanation:
          'nine の e を落として ninth とする。同じようにつづりが変わるものに five → fifth、twelve → twelfth、eight → eighth（t を重ねない）、twenty → twentieth がある。「そのまま -th を付けない4つ」としてまとめて覚える。',
      },
      {
        question: '「私の誕生日は6月3日です。」を英語にしなさい（数字を使わずに書く場合の読み方を答える）。',
        wrongAnswer: 'My birthday is June three.',
        trapExplanation: '日付の数字をそのまま基数で読んでしまう。日本語では「6月3日」と数をそのまま言うので、序数にする発想が出てこない。',
        correctAnswer: 'My birthday is June third.（書くときは June 3）',
        correctExplanation:
          '日付の「日」は必ず序数で読む。June 3 と書いても読むときは June third となる。同じように May 1 は May first、July 20 は July twentieth と読む。月の名前は大文字で書き始めることも合わせて確認する。',
      },
    ],
  },

  {
    id: 'eigo_s356',
    subject: 'eigo',
    examType: 'chugaku',
    title: '曜日の言い方と一週間',
    description: '曜日の名前とつづり、曜日をたずねる表現、on の使い方を確認する',
    intro: 'Wednesday を「ウェドネスデイ」と読んでみると、書けない理由が分かります。発音しない d が入っているからです。曜日は必ず大文字で始めるという決まりもあり、書きまちがえの多いところ。一週間分をまとめて確認します。',
    order: 856,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '曜日は Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday。',
      '曜日の名前は必ず大文字で書き始める。',
      'Wednesday の d、Tuesday の ue、Thursday の ur はつづりのまちがえやすい部分。',
      '曜日には on を付ける。on Monday（月曜日に）。',
      '「毎週月曜日に」は on Mondays と複数形にする。',
      '「今日は何曜日ですか」は What day is it today? — It is Tuesday.',
    ],
    sections: [
      {
        heading: '曜日の名前とつづり',
        body: `曜日は書き取り問題の定番で、つづりのまちがえが非常に多い。

■ 七つの曜日
Sunday（日曜日）／Monday（月曜日）／Tuesday（火曜日）／Wednesday（水曜日）／Thursday（木曜日）／Friday（金曜日）／Saturday（土曜日）

■ 短く書く形
Sun. / Mon. / Tue. / Wed. / Thu. / Fri. / Sat.（ピリオドを付ける）

★ ポイント：英語のカレンダーは日曜日から始まる。「週の始まりは日曜日」と覚えておくと、並べかえ問題で迷わない。

■ つづりの要注意ポイント
Wednesday … 発音しない d が入る（ウェンズデイ）。「ウェドネスデイ」と口の中で読みながら書くと覚えやすい。
Tuesday … ue の順番。Tusday としない。
Thursday … Thur の ur。Thirsday としない。
Saturday … Satur。Satarday としない。

■ 大文字
曜日・月の名前は文の途中でも必ず大文字で書き始める。
例）I play soccer on Saturday.（× on saturday）

■ 関連語
today（今日）／tomorrow（明日）／yesterday（昨日）／the day after tomorrow（あさって）／the day before yesterday（おととい）／weekday（平日）／weekend（週末）／every day（毎日）`,
        figureId: 'lf_eigoext10_356',
      },
      {
        heading: '曜日を使った表現',
        body: `曜日は前置詞 on と結びつく。この組み合わせが問われる。

■ 曜日には on
I go to swimming school on Monday.（月曜日にスイミングスクールに行きます。）
We don't have school on Sunday.（日曜日は学校がありません。）

■ 「毎週〜曜日に」は複数形
I play the piano on Wednesdays.（毎週水曜日にピアノをひきます。）
= every Wednesday
※ every を使うときは on を付けない（× on every Wednesday）。

■ たずね方
What day is it today?（今日は何曜日ですか。）
— It is Tuesday (today).
※ 主語は It。天気や時刻と同じ、訳さない It である。
What day of the week is it?（何曜日ですか。）とていねいに言うこともある。

■ 日付をたずねる文との区別
What day is it today? → 曜日をたずねる（It's Friday.）
What is the date today? → 日付をたずねる（It's May 5.）
この二つは非常にまぎらわしいので、答えの形で区別する。

⚠ 注意：weekend（週末）に付ける前置詞は on the weekend（アメリカ英語）または at the weekend（イギリス英語）。`,
      },
    ],
    trapExamples: [
      {
        question: '「水曜日」を英語のつづりで書きなさい。',
        wrongAnswer: 'Wendsday',
        trapExplanation: '発音が「ウェンズデイ」なので、聞こえたとおりに書いてしまう。d が発音されないため、耳だけで覚えていると必ず落とす。',
        correctAnswer: 'Wednesday',
        correctExplanation:
          'Wednesday には発音しない d が入る。Wed-nes-day と三つに区切り、「ウェド・ネス・デイ」と読みながら書くと覚えやすい。同じように発音とつづりがずれる曜日に Tuesday（Tues-day）、Thursday（Thurs-day）がある。',
      },
      {
        question: '「私は毎週土曜日にサッカーをします。」を英語にしなさい。',
        wrongAnswer: 'I play soccer on every Saturday.',
        trapExplanation: '「土曜日に」は on Saturday だと覚えているので、every を足すときにも on を残してしまう。日本語では「毎週土曜日に」と「に」が付くので、なおさら前置詞を入れたくなる。',
        correctAnswer: 'I play soccer every Saturday.（または on Saturdays）',
        correctExplanation:
          'every ＋ 曜日・時を表す語には前置詞を付けない（every day、every Sunday、every morning）。同じ意味を on で表すなら on Saturdays と複数形にする。この二つの言い方のどちらかを使い、混ぜないようにする。',
      },
    ],
  },

  {
    id: 'eigo_s357',
    subject: 'eigo',
    examType: 'chugaku',
    title: '月の名前と日付の言い方',
    description: '12か月のつづりと、日付の書き方・読み方、誕生日をたずねる表現を学ぶ',
    intro: '5月5日を英語で書くと May 5 ですが、5/5 のように数字だけにすると危険です。アメリカ式は月から、イギリス式は日から書くので、同じ 3/4 が三月四日にも四月三日にもなってしまいます。月のつづりとあわせて確かめます。',
    order: 857,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '12か月の名前はすべて大文字で書き始める。',
      'つづり注意：February（r が二つ）、August（gu）、September〜December の -ber。',
      '日付はアメリカ式で「月→日→年」（May 5, 2026）。イギリス式は「日→月→年」。',
      '日は序数で読む（May 5 → May fifth）。',
      '月には in、日付には on を使う。in May／on May 5。',
      '「誕生日はいつですか」は When is your birthday? — It is April 8.',
    ],
    sections: [
      {
        heading: '12か月の名前',
        body: `月の名前は、日付・行事・季節の問題すべての土台になる。

January（1月）／February（2月）／March（3月）／April（4月）／May（5月）／June（6月）／July（7月）／August（8月）／September（9月）／October（10月）／November（11月）／December（12月）

■ 短く書く形
Jan. / Feb. / Mar. / Apr. / May / Jun. / Jul. / Aug. / Sep. / Oct. / Nov. / Dec.
※ May は短くしない（もともと3文字）。

★ ポイント：つづりのまちがえやすいところ
February … r が二つ入る（Feb-ru-ary）。「フェブルアリー」と読みながら書く。
August … gu の順。Augast としない。
September, October, November, December … すべて -ber で終わる。この四つはまとめて覚える。
January … -ary、February … -ruary。

■ 大文字
月の名前は文の途中でも大文字で始める。
例）My birthday is in September.（× in september）

⚠ 注意：4月は April で、Apirl と r と i を入れかえる誤りが多い。ゴールデンウィークの「エイプリル」の音から Apr-il と区切って書く。`,
      },
      {
        heading: '日付の書き方と読み方',
        body: `日付の書き方は、アメリカ式とイギリス式で順番がちがう。中学受験ではアメリカ式で覚えてよい。

■ アメリカ式（月→日→年）
May 5, 2026 ／ July 20, 2026
読み方：May fifth, twenty twenty-six

■ イギリス式（日→月→年）
5 May 2026 ／ 20 July 2026
読み方：the fifth of May

★ ポイント：どちらの書き方でも、日は必ず序数で読む。書くときは 5 と数字だけでよいが、読むときは fifth となる。5th と書いてもよい。

■ 前置詞の使い分け
in ＋ 月・年・季節：in May／in 2026／in summer
on ＋ 日付・曜日：on May 5／on Monday
at ＋ 時刻：at seven

例）I was born in May.（5月生まれです。）
例）I was born on May 5.（5月5日生まれです。）
※ 月だけなら in、日付まで言うなら on。

■ 誕生日の会話
When is your birthday?（誕生日はいつですか。）
— It is April 8.／My birthday is April 8.
How old are you?（何歳ですか。）— I'm twelve (years old).

⚠ 注意：日付をたずねる文は What is the date today? である。What day is it today? は曜日をたずねる文なので混同しない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の誕生日は9月10日です。」を英語にしなさい。',
        wrongAnswer: 'My birthday is in September 10.',
        trapExplanation: '「9月」＝in September と覚えているため、日付が加わっても in を残してしまう。月と日付で前置詞が変わることを意識できていない。',
        correctAnswer: 'My birthday is on September 10.（または My birthday is September 10.）',
        correctExplanation:
          '月だけを言うときは in September、日付まで言うときは on September 10 と on を使う。幅のある期間は in、特定の一日は on、というきまりで判断する。なお be動詞の後ろに直接日付を置く My birthday is September 10. も正しい言い方である。',
      },
      {
        question: '「2月」を英語のつづりで書きなさい。',
        wrongAnswer: 'Febuary',
        trapExplanation: '発音が「フェブアリー」に近く聞こえるため、r を一つ落としてしまう。January のつづりに引きずられるのも原因。',
        correctAnswer: 'February',
        correctExplanation:
          'February は Feb-ru-ary と三つに区切り、r が二つ入ることを確認して書く。January は -uary、February は -ruary と、似ているようで一字ちがう。August（Augast としない）、April（Apirl としない）と合わせて要注意の月である。',
      },
    ],
  },

  {
    id: 'eigo_s358',
    subject: 'eigo',
    examType: 'chugaku',
    title: '時刻の言い方',
    description: '時刻の読み方（o\'clock / past / to）と、時間をたずねる表現を身につける',
    intro: '「七時です」を Seven is. とは言えません。英語では時刻を言う文にも主語が必要で、そこに It を置きます。天気のときと同じ、訳さない It です。o\'clock を付ける場合と付けない場合のちがいも整理します。',
    order: 858,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '「何時ですか」は What time is it? — It is seven (o\'clock).',
      '時刻の主語は It。訳さない特別な主語である。',
      'ちょうどの時刻には o\'clock を付けられる（seven o\'clock）。分があるときは付けない。',
      '数字を並べる言い方がいちばんかんたん：7:30 → seven thirty。',
      '30分は half past seven、15分は a quarter past seven とも言う。',
      '時刻には at を使う。I get up at six.',
    ],
    sections: [
      {
        heading: '時刻の読み方',
        body: `時刻の言い方には二通りある。まず簡単なほうを確実にする。

■ ①数字をそのまま並べる（いちばん使いやすい）
7:00 → seven／7:05 → seven oh five／7:15 → seven fifteen／7:30 → seven thirty／7:45 → seven forty-five
※ 分が10より小さいときは、0 を oh と読んで seven oh five とする。

■ ②past と to を使う言い方
30分までは past（過ぎ）、30分を過ぎたら to（前）を使う。
7:10 → ten past seven（7時を10分過ぎ）
7:15 → a quarter past seven（quarter＝4分の1時間＝15分）
7:30 → half past seven（half＝半分＝30分）
7:45 → a quarter to eight（8時まであと15分）
7:50 → ten to eight（8時まであと10分）

★ ポイント：to を使う言い方では、後ろの数字が「次の時刻」になる。7:50 は eight（8時）を使って ten to eight と言う。ここを seven と書く誤りが非常に多い。

■ o'clock
ちょうどの時刻にだけ付けられる。
例）It is nine o'clock.（9時ちょうどです。）
分があるときは付けない（× nine thirty o'clock）。

■ 午前・午後
a.m.（午前）／p.m.（午後）／in the morning／in the afternoon／in the evening／at night
例）I get up at six a.m.／School starts at 8:30 in the morning.`,
        figureId: 'lf_eigoext10_358',
      },
      {
        heading: '時刻をたずねる・答える',
        body: `時刻に関する会話は、リスニングでも筆記でも頻出である。

■ たずね方
What time is it (now)?（今、何時ですか。）
Do you have the time?（今、何時かわかりますか。）※ ていねいなたずね方
What time is it in London?（ロンドンは何時ですか。）

■ 答え方
It is seven thirty.／It's half past seven.
※ 主語は必ず It。天気・曜日・日付と同じ、訳さない主語である。

■ 「何時に〜しますか」
What time do you get up?（何時に起きますか。）
— I get up at six thirty.（6時30分に起きます。）
What time does the movie start?（映画は何時に始まりますか。）
— It starts at two.

★ ポイント：時刻には前置詞 at を使う。at seven（7時に）／at noon（正午に）／at midnight（真夜中に）。

■ 時間に関する語
minute（分）／hour（時間）／second（秒）／noon（正午）／midnight（真夜中）／早い・おそい：early / late
例）It takes thirty minutes by bus.（バスで30分かかります。）
例）Don't be late for school.（学校におくれないように。）

⚠ 注意：What time is it? に I am seven. とは答えない。It is seven. である。I am seven. は「私は7歳です」の意味になってしまう。`,
      },
    ],
    trapExamples: [
      {
        question: '7:50 を past / to を使った言い方で表しなさい。',
        wrongAnswer: 'ten to seven',
        trapExplanation: '「7時50分」の7という数字がそのまま使えると思ってしまう。to が「次の時刻まであと何分」を表すことを理解していないのが原因。',
        correctAnswer: 'ten to eight',
        correctExplanation:
          'to は「〜時まであと…分」という意味なので、後ろには次の時刻を置く。7:50 は8時まであと10分なので ten to eight となる。ten to seven だと 6:50 の意味になってしまう。30分を過ぎたら次の時刻を使う、と覚える。',
      },
      {
        question: '「今、9時30分です。」を英語にしなさい。',
        wrongAnswer: "It is nine thirty o'clock.",
        trapExplanation: '「〜時」＝o\'clock と覚えているため、分があってもそのまま付けてしまう。o\'clock がちょうどの時刻だけに使う語だと知らないことが原因。',
        correctAnswer: "It is nine thirty.（または It is half past nine.）",
        correctExplanation:
          "o'clock は「ちょうど…時」のときだけ使い、分が付くときには使わない。It is nine o'clock.（9時ちょうど）／It is nine thirty.（9時30分）と書き分ける。past を使うなら half past nine となる。",
      },
    ],
  },

  // ───────────── 5. 色・形・大きさ・数量（s359〜s361） ─────────────
  {
    id: 'eigo_s359',
    subject: 'eigo',
    examType: 'chugaku',
    title: '色を表す語と使い方',
    description: '色の名前と、色をたずねる表現、形容詞としての語順を身につける',
    intro: '「赤いかばん」は a red bag で、a bag red とは言いません。色を表す語は形容詞なので、必ず名詞の前に立つからです。色をたずねる What color is it? という決まった形とあわせて、そのまま使える形で覚えます。',
    order: 859,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'red・blue・yellow・green・black・white・brown・pink・purple・orange・gray が基本。',
      '「何色ですか」は What color is it? — It is red.',
      '色は形容詞なので名詞の前に置く（a red bag）。名詞の後ろには置かない。',
      '色の語は名詞にもなる。Red is my favorite color.',
      '「濃い・うすい」は dark blue / light blue。',
      'orange は「オレンジ色」と「オレンジ（果物）」の両方の意味を持つ。',
    ],
    sections: [
      {
        heading: '色の名前',
        body: `色の語は、持ち物の説明や人物の描写でよく出る。

■ 基本の色
red（赤）／blue（青）／yellow（黄）／green（緑）／black（黒）／white（白）／brown（茶）／pink（ピンク）／purple（むらさき）／orange（オレンジ）／gray, grey（灰色）／gold（金）／silver（銀）

■ 濃さを言う
dark blue（濃い青・紺）／light blue（水色）／bright red（あざやかな赤）

■ たずね方
What color is your bag?（かばんは何色ですか。）
— It is blue.／It's a blue bag.
What color do you like?（何色が好きですか。）
— I like green (the) best.

★ ポイント：color のつづりはアメリカ英語。イギリス英語では colour と書く。入試ではどちらでも正解になるが、教科書に合わせて color と書くのが無難である。

⚠ 注意：orange は「オレンジ色の」という形容詞と「オレンジ（果物）」という名詞の両方に使う。an orange bag（オレンジ色のかばん）／an orange（オレンジ1個）。文の中での働きで見分ける。`,
      },
      {
        heading: '色を使った語順',
        body: `色を表す語は形容詞なので、名詞の前に置く。ここが日本語との大きなちがいである。

■ 形容詞は名詞の前
a red car（赤い車）／white shoes（白いくつ）／a big blue bag（大きな青いかばん）
日本語も「赤い車」と前に置くので同じだが、a や the の位置に注意する。
a red car（○）／red a car（×）

■ be動詞の後ろに置く形
This car is red.（この車は赤い。）
My shoes are white.
※ このときは名詞を付けない（× This car is a red.）。

■ 形容詞を並べる順番
数 → 大きさ → 形 → 色 → 材料 → 名詞
例）two big round black tables（大きくて丸い黒いテーブル2つ）
中学受験では「大きさ→色→名詞」の順（a big red ball）まで覚えておけば十分。

■ 色を名詞として使う
Red is my favorite color.（赤が私の好きな色です。）
My favorite color is blue.

★ ポイント：What color …? の答え方は二通り。It is blue.（色そのものを答える）と It's a blue bag.（名詞ごと答える）のどちらでもよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は赤いかばんを持っています。」を英語にしなさい。',
        wrongAnswer: 'I have a bag red.',
        trapExplanation: '「かばん、赤い」と説明を後ろに足す発想や、フランス語などの語順の知識から、形容詞を名詞の後ろに置いてしまう。英語では形容詞は名詞の前が原則。',
        correctAnswer: 'I have a red bag.',
        correctExplanation:
          '英語では形容詞は名詞の前に置く。a red bag、white shoes、a big house となる。a や the はさらにその前に置く（a red bag であって red a bag ではない）。名詞の後ろに置けるのは、This bag is red. のように be動詞を使う形のときだけである。',
      },
      {
        question: '（　）に入る語を答えなさい。 What color （　） your shoes? — They are white.',
        wrongAnswer: 'is',
        trapExplanation: 'What color is …? を決まり文句として覚えているため、後ろの主語の数を確かめずに is にしてしまう。答えの They are white. まで読めば気づける。',
        correctAnswer: 'are',
        correctExplanation:
          'be動詞は主語 your shoes（複数）に合わせて are にする。shoes はいつも複数形で使う語なので、疑問文でも What color are your shoes? となる。答えも They are white. と複数で受ける。単数なら What color is your bag? である。',
      },
    ],
  },

  {
    id: 'eigo_s360',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形と大きさを表す語',
    description: '図形の名前と、大小・長短を表す形容詞、比べる言い方を学ぶ',
    intro: 'square には「正方形」という名詞と「四角い」という形容詞の両方の使い方があります。一つの語で二つの品詞を持つ語は英語に多く、文の中の位置で見分けます。図形と大きさの語を、比べる言い方まで広げて使いこなします。',
    order: 860,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'circle（円）・triangle（三角形）・square（正方形）・rectangle（長方形）が図形の基本。',
      '形容詞の形もある：round（丸い）・square（四角い）。',
      '大きさ・長さ：big / small、large / little、long / short、tall / short、high / low。',
      'tall は人や木など縦に細長いもの、high は山や建物など高さのあるものに使う。',
      '比べるときは -er ＋ than（bigger than）、いちばんは the ＋ -est。',
      'つづり注意：big → bigger、large → larger、long → longer。',
    ],
    sections: [
      {
        heading: '形を表す語',
        body: `図形の名前は、算数の話題や説明文で出てくる。

■ 平面の図形
circle（円）／triangle（三角形）／square（正方形）／rectangle（長方形）／diamond（ひし形）／star（星形）／oval（だ円）／line（線）／point（点）／angle（角）

■ 立体
cube（立方体）／box（箱）／ball, sphere（球）／cone（円すい）／cylinder（円柱）／pyramid（角すい・ピラミッド）

■ 形を表す形容詞
round（丸い）／square（四角い）／flat（平らな）／straight（まっすぐな）／curved（曲がった）／thick（厚い・太い）／thin（うすい・細い）／sharp（とがった）

例）The moon is round.（月は丸い。）
例）This table is square.（このテーブルは四角い。）

★ ポイント：square は「正方形」という名詞と「四角い」という形容詞の両方に使える。triangle は名詞だけで、「三角の」は triangular という別の形になる。

■ 形をたずねる
What shape is it?（それはどんな形ですか。）
— It is a circle.／It is round.`,
        figureId: 'lf_eigoext10_360',
      },
      {
        heading: '大きさ・長さを表す語と比べ方',
        body: `大小を表す形容詞は、比べる文（比較）でよく問われる。

■ 反対の意味の組
big ⇔ small（大きい⇔小さい）／large ⇔ little／long ⇔ short（長い⇔短い）／tall ⇔ short（背が高い⇔低い）／high ⇔ low（高い⇔低い）／wide ⇔ narrow（広い⇔せまい）／heavy ⇔ light（重い⇔軽い）／thick ⇔ thin（厚い⇔うすい）／deep ⇔ shallow（深い⇔浅い）

★ ポイント：tall と high の使い分け
tall … 人・木・タワーなど、細長く立っているもの
high … 山・かべ・空など、高さそのものに注目するもの
例）He is tall.（彼は背が高い。）／Mt. Fuji is high.／Tokyo Skytree is very tall.

■ 比べる言い方
比較級：形容詞 ＋ -er ＋ than（〜より…）
例）My bag is bigger than yours.（私のかばんはあなたのより大きい。）
最上級：the ＋ 形容詞 ＋ -est（いちばん…）
例）This is the longest river in Japan.（これは日本でいちばん長い川だ。）

■ つづりの変化
big → bigger → biggest（g を重ねる）／large → larger → largest（e を足すだけ）／heavy → heavier → heaviest（y を i に）／long → longer → longest（そのまま）

⚠ 注意：good → better → best、bad → worse → worst は形が大きく変わる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。 My brother is very （　）. He plays basketball.　［high / tall］',
        wrongAnswer: 'high',
        trapExplanation: '日本語ではどちらも「高い」なので、区別せずに high を選んでしまう。「背が高い」を「高い」と直訳する発想が原因。',
        correctAnswer: 'tall',
        correctExplanation:
          '人の背の高さには tall を使う。high は山・建物・かべなど、地面からの高さそのものに注目するときに使う。tall は人・木・タワーのように細長く立っているもの、と覚える。反対語も tall ⇔ short、high ⇔ low と別の組になる。',
      },
      {
        question: '「私のかばんはあなたのより大きい。」を英語にしなさい。',
        wrongAnswer: 'My bag is biger than yours.',
        trapExplanation: '比較級は -er を付けるという規則だけを覚えていて、つづりの変化に気づかない。日本語で考えているかぎり、子音字を重ねる必要は思いつかない。',
        correctAnswer: 'My bag is bigger than yours.',
        correctExplanation:
          'big のように「短母音＋子音字1字」で終わる語は、最後の子音字を重ねてから -er を付ける（big → bigger、hot → hotter、sad → sadder）。large のように e で終わる語は -r だけを足す（larger）。yours は「あなたのかばん」を一語で表す所有代名詞。',
      },
    ],
  },

  {
    id: 'eigo_s361',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数量を表す語（many / much / a few / a little）',
    description: '「多い・少ない」を表す語を、数えられる名詞と数えられない名詞で使い分ける',
    intro: '「たくさんの本」は many books、「たくさんの水」は much water。日本語ではどちらも「たくさん」なのに、英語では数えられるかどうかで語が変わります。a few と a little も同じ理由で分かれます。この線引きを身につけます。',
    order: 861,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '数えられる名詞には many、数えられない名詞には much を使う。',
      'a lot of / lots of はどちらの名詞にも使える便利な語。',
      '「少しある」は a few（数えられる）／ a little（数えられない）。',
      '「ほとんどない」は few（数えられる）／ little（数えられない）。a の有無で意味が反対になる。',
      'some は肯定文、any は疑問文・否定文で使うのが原則。',
      'すすめる文（Would you like some …?）では疑問文でも some を使う。',
    ],
    sections: [
      {
        heading: 'many と much、a lot of',
        body: `「たくさんの」を表す語は、後ろの名詞が数えられるかどうかで変わる。

■ many ＋ 数えられる名詞の複数形
many books（たくさんの本）／many students／many apples
■ much ＋ 数えられない名詞
much water（たくさんの水）／much money／much time／much snow

■ a lot of / lots of ＋ どちらでもよい
a lot of books（○）／a lot of water（○）
※ 迷ったら a lot of を使えば安全である。

★ ポイント：ふつうの肯定文では much はあまり使わず、a lot of を使うのが自然。much は否定文・疑問文でよく使う。
例）I don't have much time.（時間があまりない。）
例）How much water do you drink?（水をどれくらい飲みますか。）

■ How many / How much
How many ＋ 複数形（数をたずねる）
例）How many pencils do you have?
How much ＋ 数えられない名詞（量をたずねる）
例）How much sugar do you need?
※ How much is it?（いくらですか。）は値段をたずねる決まり文句。`,
        figureId: 'lf_eigoext10_361',
      },
      {
        heading: 'a few と a little、few と little',
        body: `「少し」を表す語も、数えられるかどうかで分かれる。さらに a が付くかどうかで意味が正反対になる。

■ 数えられる名詞に使う
a few ＋ 複数形 …「少しはある（数が2〜3）」プラスの気持ち
few ＋ 複数形 …「ほとんどない」マイナスの気持ち
例）I have a few friends here.（ここには友達が何人かいる。）
例）I have few friends here.（ここにはほとんど友達がいない。）

■ 数えられない名詞に使う
a little ＋ 数えられない名詞 …「少しはある」
little ＋ 数えられない名詞 …「ほとんどない」
例）There is a little milk in the glass.（コップに牛乳が少し入っている。）
例）There is little milk in the glass.（コップに牛乳がほとんどない。）

★ ポイント：a が付けば「ある」、a がなければ「ない」。この一語で意味が反対になるので、読み取り問題では必ず a の有無を確認する。

■ a little のもう一つの使い方
a little は「少し」という副詞にもなる。
例）I am a little tired.（少しつかれている。）
例）Please wait a little.（少し待ってください。）

⚠ 注意：little には「小さい」という意味もある（a little dog ＝小さい犬）。後ろが数えられない名詞なら「少しの」、数えられる単数の名詞なら「小さい」と判断する。`,
      },
      {
        heading: 'some と any',
        body: `「いくつかの・いくらかの」を表す some と any は、文の種類で使い分ける。

■ 原則
some … 肯定文で使う
any … 疑問文・否定文で使う

例）I have some questions.（質問がいくつかあります。）
例）Do you have any questions?（質問はありますか。）
例）I don't have any questions.（質問はありません。）

■ 数えられる名詞にも数えられない名詞にも使える
some books／some water／any friends／any money

■ 例外：すすめる・たのむときは疑問文でも some
Would you like some tea?（お茶はいかがですか。）
Can I have some water?（水をもらえますか。）
※ 相手が Yes と答えることを期待している文では some を使う。

■ any の別の意味
肯定文の any は「どんな〜でも」という意味になる。
例）Any student can join the club.（どの生徒でもクラブに入れます。）

★ ポイント：not any は「一つも〜ない」と全部を打ち消す。no ＋ 名詞 と言いかえられる。
I don't have any pens. ＝ I have no pens.`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。 He has few friends in this town.',
        wrongAnswer: '彼はこの町に友達が何人かいる。',
        trapExplanation: 'few を a few と同じ意味だと思いこみ、「少しはいる」と訳してしまう。a の一字がないだけなので、読み飛ばすと気づかない。',
        correctAnswer: '彼はこの町にはほとんど友達がいない。',
        correctExplanation:
          'a few は「少しはある」というプラスの意味、a のない few は「ほとんどない」というマイナスの意味になる。数えられない名詞では a little（少しある）と little（ほとんどない）が同じ関係になる。a の有無を必ず確認する。',
      },
      {
        question: '（　）に入る語を選びなさい。 Would you like （　） coffee?　［some / any］',
        wrongAnswer: 'any',
        trapExplanation: '「疑問文では any」という規則だけを覚えているため、機械的に any を選んでしまう。すすめる文が例外だと知らないのが原因。',
        correctAnswer: 'some',
        correctExplanation:
          '相手にすすめる文やものをたのむ文では、疑問文でも some を使う（Would you like some tea? / Can I have some water?）。これは相手が Yes と答えることを期待しているためである。ふつうに有無をたずねる Do you have any coffee? では any を使う。',
      },
    ],
  },
  // ───────────── 6. 職業・町・建物・乗り物（s362〜s365） ─────────────
  {
    id: 'eigo_s362',
    subject: 'eigo',
    examType: 'chugaku',
    title: '職業を表す語とたずね方',
    description: '職業名の英語と、仕事をたずねる表現・将来の夢の言い方を身につける',
    intro: '「わたしの父は先生です」は My father is teacher. ではなく、a teacher です。英語では職業を言うときに a を付けます。一人だと数えているわけではないのに付ける、この決まりを知らないと減点されます。たずね方までまとめます。',
    order: 862,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'teacher・doctor・nurse・farmer・cook・driver など、-er / -or で終わる職業名が多い。',
      '職業名には a / an を付ける。He is a doctor.（× He is doctor.）',
      '「仕事は何ですか」は What do you do? または What is your job?',
      'What does your father do? に He is a teacher. と答える。',
      '将来の夢は I want to be a ＋ 職業名. で表す。',
      '「〜で働く」は work at / work for、「〜を教える」は teach。',
    ],
    sections: [
      {
        heading: '職業を表す語',
        body: `職業名は英検4級・3級で必ず出る。動詞と結びつけて覚えると忘れにくい。

■ 動詞から作られる職業名（-er / -or）
teacher（先生。teach＝教える）／singer（歌手。sing）／dancer（ダンサー）／player（選手）／writer（作家。write）／farmer（農家。farm）／driver（運転手。drive）／cook（料理人。cook＝料理する）／baker（パン職人）／actor（俳優）／doctor（医者）／visitor（訪問者）

■ そのほかの職業
nurse（看護師）／police officer（警察官）／fire fighter（消防士）／pilot（パイロット）／flight attendant（客室乗務員）／scientist（科学者）／engineer（技術者）／dentist（歯科医）／vet（じゅう医）／astronaut（宇宙飛行士）／artist（芸術家）／musician（音楽家）／cartoonist（まんが家）／chef（料理長）／clerk（店員）／office worker（会社員）／soccer player（サッカー選手）

★ ポイント：cook は「料理人」という名詞と「料理する」という動詞の両方に使う。「料理する人」を cooker と言ってはいけない。cooker は「調理器具」の意味になってしまう。

⚠ 注意：昔は policeman・fireman と男性を表す語を使っていたが、今は police officer・fire fighter と言うのがふつうである。`,
      },
      {
        heading: '職業についてたずねる・答える',
        body: `職業をたずねる言い方は、いくつかの型を覚えておく。

■ たずね方
What do you do?（お仕事は何ですか。）
What is your job?
What does your father do?（お父さんの仕事は何ですか。）
※ What do you do? は「あなたはふだん何をしていますか」＝「職業は何ですか」という決まった言い方である。

■ 答え方
I am a teacher.（私は教師です。）
He is a police officer.
She works at a hospital.（彼女は病院で働いています。）
My mother works for a bank.（母は銀行に勤めています。）

★ ポイント：職業名には必ず a / an を付ける。母音で始まる語には an（an actor、an engineer、an artist、an office worker）。

■ 将来の夢
I want to be a doctor.（医者になりたい。）
I want to be a soccer player in the future.（将来サッカー選手になりたい。）
My dream is to be a pilot.（私の夢はパイロットになることです。）
※ want の後ろは to ＋ 動詞の原形。be動詞の原形は be である。

■ 理由をそえる
I want to be a nurse because I want to help sick people.（病気の人を助けたいから看護師になりたい。）

⚠ 注意：「〜になる」は become も使えるが、I want to become a doctor. のように to become とする。I want to be … のほうがよく使われる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の父は医者です。」を英語にしなさい。',
        wrongAnswer: 'My father is doctor.',
        trapExplanation: '日本語には「一人の」にあたる語がないので、a を落としてしまう。名前と同じように職業名をそのまま置いてしまうのが原因。',
        correctAnswer: 'My father is a doctor.',
        correctExplanation:
          '職業を表す名詞は数えられる名詞なので、単数のときは必ず a / an を付ける。母音で始まる語には an を使う（an artist、an engineer）。ただし名前には冠詞を付けない（My name is Ken.）ので、そこと区別する。',
      },
      {
        question: '「私は将来、教師になりたい。」を英語にしなさい。',
        wrongAnswer: 'I want to a teacher in the future.',
        trapExplanation: '「〜になりたい」＝want to … と覚えているため、to の後ろに動詞を置くことを忘れ、いきなり名詞を続けてしまう。日本語に「である」にあたる動詞が表れないことも原因。',
        correctAnswer: 'I want to be a teacher in the future.',
        correctExplanation:
          'want to の後ろには必ず動詞の原形が必要である。「〜である」を表す be動詞の原形は be なので、I want to be a teacher. となる。am や is を置いて I want to am … としないことも合わせて確認する。',
      },
    ],
  },

  {
    id: 'eigo_s363',
    subject: 'eigo',
    examType: 'chugaku',
    title: '町の建物と施設',
    description: '町にある建物の語と、場所を説明する前置詞・There is の文を使いこなす',
    intro: '「駅へ行く」は go to the station なのに、「学校へ行く」は go to school と the を付けません。建物そのものではなく、勉強するという目的で行く場合は無冠詞になるからです。町の語と冠詞の決まりを合わせて確認します。',
    order: 863,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'station・hospital・library・post office・bank・park・museum が基本語。',
      '建物には the を付けることが多い（go to the station）。ただし go to school は無冠詞。',
      '位置は near / next to / across from / in front of / between で表す。',
      '「〜の角に」は on the corner of、「〜の向かい」は across from。',
      '「〜がありますか」は Is there a …? / Are there any …? でたずねる。',
      'shop と store はほぼ同じ意味。bookstore（本屋）・bakery（パン屋）など -store / -ery の形も覚える。',
    ],
    sections: [
      {
        heading: '町にある建物・施設',
        body: `町の建物の語は、道案内・地図問題で必ず必要になる。

■ 公共の建物
station（駅）／post office（郵便局）／bank（銀行）／hospital（病院）／library（図書館）／city hall（市役所）／police station（交番・警察署）／fire station（消防署）／school（学校）／museum（博物館・美術館）／zoo（動物園）／aquarium（水族館）／park（公園）／stadium（競技場）／airport（空港）／temple（寺）／shrine（神社）／church（教会）

■ 店
supermarket（スーパー）／convenience store（コンビニ）／bookstore（書店）／bakery（パン屋）／flower shop（花屋）／restaurant（レストラン）／cafe（喫茶店）／hotel（ホテル）／department store（デパート）／drugstore（薬局）／barbershop（理髪店）

■ 町の中の語
street, road（通り）／corner（角）／bridge（橋）／crossing, intersection（交差点）／traffic light（信号）／sidewalk（歩道）／bus stop（バス停）／parking lot（駐車場）

★ ポイント：日本語の「マンション」は英語では apartment（アメリカ）や flat（イギリス）という。mansion は「大邸宅」の意味になる。和製英語に注意する。`,
        figureId: 'lf_eigoext10_363',
      },
      {
        heading: '建物の場所を説明する',
        body: `場所を説明するには、位置関係を表す語句が必要である。

■ 位置を表す語句
near（〜の近くに）／next to（〜のとなりに）／across from（〜の向かいに）／in front of（〜の前に）／behind（〜の後ろに）／between A and B（AとBの間に）／on the corner of（〜の角に）／around here（この辺りに）

例）The post office is next to the bank.（郵便局は銀行のとなりです。）
例）The library is across from the station.（図書館は駅の向かいです。）
例）There is a park between the school and the hospital.（学校と病院の間に公園があります。）

■ あるかどうかたずねる
Is there a supermarket near here?（この近くにスーパーはありますか。）
— Yes, there is. It's next to the post office.
Are there any restaurants around here?（この辺りにレストランはありますか。）

■ the の使い方
建物を指すときは the を付けることが多い。go to the station／go to the library。
ただし school・church・bed などは、本来の目的で使うときに冠詞を付けない。
例）I go to school by bus.（学校へ通っている）／I go to the school to see my brother.（建物としての学校に行く）

⚠ 注意：「駅の前」は in front of the station。「駅前で」を before the station とは言わない。before は時間の「前」に使う。`,
      },
    ],
    trapExamples: [
      {
        question: '「郵便局は駅の前にあります。」を英語にしなさい。',
        wrongAnswer: 'The post office is before the station.',
        trapExplanation: 'before を「〜の前」とだけ覚えているため、場所にも使えると考えてしまう。日本語では時間の「前」も場所の「前」も同じ語なので区別できない。',
        correctAnswer: 'The post office is in front of the station.',
        correctExplanation:
          'before は「〜より前に」という時間を表す語である（before dinner＝夕食前に）。場所の「〜の前に」は in front of を使う。反対の「〜の後ろに」は behind。時間なら before / after、場所なら in front of / behind と対にして覚える。',
      },
      {
        question: '（　）に入る語を答えなさい。 （　） there any restaurants near here?',
        wrongAnswer: 'Is',
        trapExplanation: 'Is there …? を決まり文句として覚えていると、後ろの名詞が複数でも Is のまま書いてしまう。any が付いていることも見落としやすい。',
        correctAnswer: 'Are',
        correctExplanation:
          'be動詞は後ろに来る名詞の数に合わせる。restaurants と複数なので Are there any restaurants …? となる。答えも Yes, there are. / No, there aren\'t. と複数で受ける。単数なら Is there a restaurant …? である。',
      },
    ],
  },

  {
    id: 'eigo_s364',
    subject: 'eigo',
    examType: 'chugaku',
    title: '乗り物と交通手段の言い方',
    description: '乗り物の語と、by bus / on foot などの交通手段の表し方を身につける',
    intro: '「バスで行く」は by bus で、a も the も付けません。ところが「歩いて」は by walk とは言えず、on foot です。交通手段の言い方には決まった形があり、そのまま覚えるのが近道。乗り物の語とセットで固めます。',
    order: 864,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'bus・train・car・bike・taxi・plane・ship・subway が基本語。',
      '交通手段は by ＋ 乗り物（冠詞なし）。by bus, by train, by car。',
      '「歩いて」は on foot。by walk とは言わない。',
      '「〜に乗る」は take a bus / get on、「〜から降りる」は get off。',
      '「どうやって学校へ行きますか」は How do you go to school?',
      '「時間がかかる」は It takes ＋ 時間。It takes ten minutes by bike.',
    ],
    sections: [
      {
        heading: '乗り物の語と交通手段の表し方',
        body: `通学や旅行の話題では、乗り物の語と by の使い方が問われる。

■ 乗り物
bus（バス）／train（電車）／subway（地下鉄）／car（車）／taxi（タクシー）／bike, bicycle（自転車）／motorcycle（バイク）／plane, airplane（飛行機）／ship, boat（船）／truck（トラック）／ambulance（救急車）

■ 交通手段は by ＋ 乗り物
by bus（バスで）／by train（電車で）／by car（車で）／by bike（自転車で）／by plane（飛行機で）／by taxi（タクシーで）

★ ポイント：by の後ろの乗り物には a も the も付けない。
例）I go to school by bus.（○）／by a bus（×）／by the bus（×）

■ 「歩いて」は on foot
例）I go to school on foot.（歩いて学校に行きます。）
= I walk to school.
※ by walk とは絶対に言わない。foot は単数形のままである。

■ 特定の乗り物を言うときは in / on
in a car（車の中に）／in a taxi／on a bus／on a train／on a bike
※ 屋根のある小さな乗り物には in、立てるほど大きい乗り物や またがる乗り物には on を使う。

例）I met him on the train.（電車の中で彼に会った。）
例）She got in the car.（彼女は車に乗り込んだ。）`,
      },
      {
        heading: '乗り降りと所要時間',
        body: `乗り物にまつわる動詞と、時間の言い方をまとめる。

■ 乗る・降りる
take a bus（バスに乗る＝バスを利用する）
get on the bus（バスに乗り込む）⇔ get off the bus（バスを降りる）
get in the car（車に乗り込む）⇔ get out of the car（車から降りる）
ride a bike（自転車に乗る）／drive a car（車を運転する）
change trains（電車を乗りかえる）※ trains と複数形にする

例）Take the No. 5 bus.（5番のバスに乗ってください。）
例）Get off at the third stop.（3つ目のバス停で降りてください。）

■ 時間・距離をたずねる
How do you go to school?（どうやって学校へ行きますか。）
— I go to school by bike.／I walk to school.
How long does it take?（どれくらい時間がかかりますか。）
— It takes about twenty minutes.（20分ほどかかります。）
How far is it from here to the station?（ここから駅までどれくらいですか。）
— It's about one kilometer.

★ ポイント：時間がかかることを表す It takes … の主語は It。この It も訳さない主語である。
例）It takes ten minutes by bike.（自転車で10分かかる。）

⚠ 注意：get on は「大きい乗り物・またがる乗り物」に、get in は「車・タクシー」に使う。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は歩いて学校に行きます。」を英語にしなさい。',
        wrongAnswer: 'I go to school by walk.',
        trapExplanation: 'by bus / by train と同じ形で交通手段を表せると考え、「歩く」も by の後ろに置いてしまう。walk が動詞であることも見落としている。',
        correctAnswer: 'I go to school on foot.（または I walk to school.）',
        correctExplanation:
          '「歩いて」は on foot という決まった言い方で、by walk とは言わない。foot は単数形のままにする（× on feet）。もっとかんたんに I walk to school. と動詞 walk を使ってもよい。by の後ろに置けるのは乗り物の名前だけである。',
      },
      {
        question: '「私は毎日バスで学校に行きます。」を英語にしなさい。',
        wrongAnswer: 'I go to school by a bus every day.',
        trapExplanation: '数えられる名詞には a を付けるという規則を、by の後ろにもあてはめてしまう。日本語の「バスで」には冠詞にあたる語がないため確認しにくい。',
        correctAnswer: 'I go to school by bus every day.',
        correctExplanation:
          '交通手段を表す by ＋ 乗り物には冠詞を付けない（by bus、by train、by car、by bike）。特定のバスを指すときだけ on the bus のように on / in を使う。「歩いて」だけは by ではなく on foot になることも合わせて覚える。',
      },
    ],
  },

  {
    id: 'eigo_s365',
    subject: 'eigo',
    examType: 'chugaku',
    title: '町・職業・乗り物の総合演習',
    description: 'ここまでの語彙を使い、自分の町を紹介する文章の型を身につける',
    intro: '自分の町を英語で紹介するとしたら、何から書きますか。場所、あるもの、できること、そして自分の気持ち——この順に並べると、それだけで立派な紹介文になります。ここまでに覚えた語彙を、書く力に変えていきます。',
    order: 865,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '町の紹介は「①どこにあるか ②何があるか ③何ができるか ④気持ち」の順で書く。',
      '「〜がある」は There is / There are、「〜で有名だ」は be famous for。',
      '「〜することができる」は You can ＋ 動詞の原形。',
      '「私の町には〜がある」は My town has … とも言える。',
      '文と文は and / but / so / because でつなぐ。',
      '一文を短くし、主語と動詞をはっきりさせると減点されにくい。',
    ],
    sections: [
      {
        heading: '自分の町を紹介する型',
        body: `英語入試では「あなたの町を紹介しなさい」という自由英作文がよく出る。次の四つの順で書けば必ずまとまる。

■ ①どこにあるか
I live in Osaka.（大阪に住んでいます。）
My town is near Tokyo.（私の町は東京の近くです。）
It is a small town in Nara.（奈良にある小さな町です。）

■ ②何があるか
There are two parks in my town.（町には公園が二つあります。）
We have a big library near the station.（駅の近くに大きな図書館があります。）
My town is famous for its old temple.（私の町は古いお寺で有名です。）

■ ③そこで何ができるか
You can enjoy beautiful flowers in spring.（春には美しい花が楽しめます。）
You can eat delicious noodles there.（そこでおいしいめん類が食べられます。）

■ ④気持ち・まとめ
I like my town very much.（私は自分の町がとても好きです。）
Please come and visit us.（ぜひ来てください。）

★ ポイント：文をつなぐ語を使うと、英語らしい流れになる。and（そして）／but（しかし）／so（だから）／because（なぜなら）
例）My town is small, but it is very beautiful.`,
      },
      {
        heading: '人と場所を組み合わせて書く',
        body: `職業・建物・乗り物の語をまとめて使う練習をする。

■ 人と働く場所
A doctor works at a hospital.（医者は病院で働く。）
A teacher works at a school.
A police officer works at a police station.
A cook works at a restaurant.
※ 「〜で働く」は work at ＋ 場所、「〜の会社に勤める」は work for ＋ 会社名。

■ 場所と、そこでできること
We can borrow books at the library.（図書館で本を借りられる。）
We can see many animals at the zoo.
We can buy stamps at the post office.（郵便局で切手が買える。）
We can send letters at the post office.

■ 行き方を加える
I go to the library by bike. It takes ten minutes.
（自転車で図書館に行きます。10分かかります。）

⚠ 注意：三人称単数が主語のときは動詞に -s を付ける（A doctor works …）。複数なら付けない（Doctors work …）。自由英作文でいちばん多い減点箇所なので、書き終えたら必ず見直す。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の町には大きな公園が二つあります。」を英語にしなさい。',
        wrongAnswer: 'My town has two big park.',
        trapExplanation: 'two と数を書いたことで満足してしまい、名詞を複数形にするのを忘れる。日本語では数を言っても名詞の形が変わらないため気づきにくい。',
        correctAnswer: 'My town has two big parks.（または There are two big parks in my town.）',
        correctExplanation:
          '二つ以上を表す数の後ろでは、名詞を必ず複数形にする（two parks、three books）。There are を使う形なら There are two big parks in my town. となり、be動詞も複数の are にする。数・名詞の形・動詞の形の三つをそろえる。',
      },
      {
        question: '（　）に入る語を答えなさい。 A doctor （　） at a hospital.',
        wrongAnswer: 'work',
        trapExplanation: 'A doctor を「医者というもの一般」ととらえ、複数の感覚で動詞に -s を付けない。日本語では動詞が主語によって変わらないため、確認する習慣がないと落とす。',
        correctAnswer: 'works',
        correctExplanation:
          'A doctor は三人称単数なので、現在形の動詞には -s を付けて works とする。複数形の Doctors work at hospitals. なら -s は付けない。英作文では書き終えたあとに「主語は三人称単数か」「動詞に -s があるか」を必ず確認する。',
      },
    ],
  },

  // ───────────── 7. 動詞の重要熟語（s366〜s371） ─────────────
  {
    id: 'eigo_s366',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動詞の熟語①：get を使う表現',
    description: 'get の基本の意味と、get up / get to / get on などの熟語を整理する',
    intro: 'get は「手に入れる」と覚えている人が多いのですが、get up も get to も get on も同じ get です。中心にあるのは、ある状態や場所にたどりつくという感じ。この一つのイメージから、熟語を枝分かれさせて整理します。',
    order: 866,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'get の中心の意味は「手に入れる」と「（ある状態・場所に）たどりつく」。',
      'get up（起きる）／get to ＋ 場所（〜に着く）／get on ⇔ get off（乗る⇔降りる）。',
      'get to the station には to が必要。arrive at と同じ意味。',
      'get home / get there には to を付けない。',
      'get ＋ 形容詞 で「〜になる」。get angry（怒る）／get better（よくなる）。',
      'get の過去形・過去分詞は got。got up、got to のように使う。',
    ],
    sections: [
      {
        heading: 'get の中心の意味',
        body: `get は英語でもっともよく使われる動詞の一つで、たくさんの意味を持つ。ばらばらに覚えるのではなく、中心の意味からつかむ。

■ ①手に入れる・もらう
I got a new bike for my birthday.（誕生日に新しい自転車をもらった。）
Where did you get that book?（その本はどこで手に入れたの。）

■ ②（場所に）たどりつく
I get to school at eight.（8時に学校に着く。）
What time did you get home?（何時に家に着きましたか。）
※ get to ＋ 場所。ただし home・there・here には to を付けない。

■ ③（状態に）なる
get ＋ 形容詞 で「〜の状態になる」という変化を表す。
It is getting dark.（暗くなってきた。）
She got angry.（彼女は怒った。）
I got tired.（つかれた。）
My father got sick last week.（父は先週病気になった。）

★ ポイント：be動詞は「〜である」という状態、get は「〜になる」という変化を表す。
He is angry.（怒っている）／He got angry.（怒った＝怒った状態になった）

■ 過去形
get の過去形は got。過去分詞もアメリカ英語では gotten も使うが、中学受験では got を覚えておけばよい。`,
      },
      {
        heading: 'get を使う重要熟語',
        body: `熟語はまとまりで、例文ごと覚える。

■ get up（起きる・起き上がる）
I get up at six every morning.（毎朝6時に起きます。）
※ wake up は「目が覚める」、get up は「起き上がる」。I wake up at six, but I get up at six thirty. のように使い分ける。

■ get to ＋ 場所（〜に着く）
How can I get to the station?（駅にはどう行けばよいですか。）← 道をたずねる決まり文句
We got to the museum at ten.
＝ We arrived at the museum at ten.／We reached the museum at ten.
※ arrive には at / in が必要、reach には前置詞が不要。

■ get on ⇔ get off（乗る⇔降りる）
Get on the bus at the next stop.／Get off at Osaka Station.

■ get in ⇔ get out of（車に乗る⇔降りる）
He got in the taxi.／She got out of the car.

■ そのほか
get together（集まる）／get well（よくなる）／get married（結婚する）／get lost（道に迷う）

★ ポイント：How can I get to …? は道案内の問題で必ず出る。丸ごと暗記する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎朝6時に起きます。」を英語にしなさい。',
        wrongAnswer: 'I get up in six every morning.',
        trapExplanation: 'in the morning という言い方を覚えているため、時刻にも in を使ってしまう。「6時に」の「に」をどの前置詞で表すか判断できていない。',
        correctAnswer: 'I get up at six every morning.',
        correctExplanation:
          '時刻には at を使う（at six、at 7:30、at noon）。in を使うのは in the morning、in April、in 2026 のように幅のある時間である。every morning には前置詞を付けないことも合わせて確認する。',
      },
      {
        question: '「駅にはどう行けばよいですか。」を英語にしなさい。',
        wrongAnswer: 'How can I get the station?',
        trapExplanation: 'get を「行く・着く」と覚えていると、後ろに場所をそのまま続けてしまう。日本語の「駅に行く」の「に」が to にあたることに気づかない。',
        correctAnswer: 'How can I get to the station?',
        correctExplanation:
          '「〜に着く」の意味の get には必ず to が必要である（get to the station、get to school）。ただし home・there・here は方向の意味を含むので to を付けない（get home、get there）。to のいらない reach（reach the station）と比べて整理する。',
      },
    ],
  },

  {
    id: 'eigo_s367',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動詞の熟語②：take を使う表現',
    description: 'take の基本の意味と、take a bath / take care of / It takes … の使い方を学ぶ',
    intro: 'take a bath は「風呂を取る」ではなく「風呂に入る」、take a walk は「散歩する」です。手に取るという動作から広がって、take は多くの決まり文句を作ります。時間がかかることを表す It takes … の形まで確かめます。',
    order: 867,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'take の中心の意味は「手に取る・持っていく」。',
      'take a bath（風呂に入る）／take a picture（写真をとる）／take a walk（散歩する）。',
      'take care of ＝ look after（〜の世話をする）。',
      '「時間がかかる」は It takes ＋ 時間（＋ to ＋ 動詞の原形）。',
      'take a bus（バスを利用する）／take off（ぬぐ・離陸する）。',
      'take の過去形は took、過去分詞は taken。',
    ],
    sections: [
      {
        heading: 'take の中心の意味と熟語',
        body: `take は「手に取る」が中心の意味である。そこから「持っていく」「利用する」「（時間を）とる」と広がる。

■ ①手に取る・持っていく
Take this umbrella with you.（このかさを持っていきなさい。）
Don't forget to take your lunch.（弁当を持っていくのを忘れないで。）

■ ②「する」にあたる決まり文句
take a bath（ふろに入る）／take a shower（シャワーをあびる）／take a picture, take a photo（写真をとる）／take a walk（散歩する）／take a rest, take a break（休けいする）／take a look（見てみる）／take a seat（席につく）／take a test（テストを受ける）／take a lesson（レッスンを受ける）

例）I take a bath before dinner.（夕食前にふろに入ります。）
例）May I take a picture here?（ここで写真をとってもいいですか。）

■ ③乗り物を利用する
Take the No. 3 bus.（3番のバスに乗りなさい。）
I take the train to school.（電車で通学しています。）

■ ④世話をする
take care of ＝ look after
例）I take care of my dog every day.（毎日犬の世話をします。）
例）Please take care of yourself.（お体を大切に。）

⚠ 注意：take a picture は「写真をとる」。「絵をかく」は draw a picture である。同じ a picture でも動詞がちがう。`,
      },
      {
        heading: 'It takes … の形と take off',
        body: `時間を表す take は入試頻出である。形をきちんと覚える。

■ It takes ＋ 時間
It takes ten minutes.（10分かかります。）
It takes about an hour by train.（電車で1時間ほどかかります。）
※ 主語は訳さない It。

■ It takes ＋ 人 ＋ 時間 ＋ to ＋ 動詞の原形
It takes me twenty minutes to go to school.（学校に行くのに20分かかります。）
It took him two hours to finish the work.（彼はその仕事を終えるのに2時間かかった。）

■ How long does it take?
How long does it take from here to the station?（ここから駅までどれくらいかかりますか。）
— It takes about ten minutes on foot.（歩いて10分ほどです。）

★ ポイント：「（お金が）かかる」は take ではなく cost を使う。
例）It costs 500 yen.（500円かかる。）

■ take off
①（服・くつを）ぬぐ：Take off your shoes.（くつをぬぎなさい。）⇔ put on
②（飛行機が）離陸する：The plane took off at nine.（飛行機は9時に離陸した。）

■ そのほか
take part in（〜に参加する）／take out（取り出す・持ち帰る）／take away（持ち去る）
例）I took part in the speech contest.（スピーチコンテストに参加した。）`,
      },
    ],
    trapExamples: [
      {
        question: '「学校まで歩いて20分かかります。」を英語にしなさい。',
        wrongAnswer: 'I take twenty minutes to school on foot.',
        trapExplanation: '日本語の「（私は）20分かかる」に引きずられて、主語を I にしてしまう。時間を表す文の主語が It になることを知らないと必ず起こる。',
        correctAnswer: 'It takes twenty minutes to get to school on foot.（または It takes me twenty minutes to walk to school.）',
        correctExplanation:
          '時間がかかることを表す文の主語は、訳さない It にする。It takes ＋ 時間、人を入れるなら It takes ＋ 人 ＋ 時間 ＋ to ＋ 動詞の原形。天気・時刻・曜日の It と同じ仲間である。',
      },
      {
        question: '（　）に入る語を選びなさい。 I will （　） care of your cat while you are away.　［take / do］',
        wrongAnswer: 'do',
        trapExplanation: '「世話をする」の「する」を do だと考えてしまう。熟語をまとまりで覚えず、日本語の動詞から英語を選ぼうとするのが原因。',
        correctAnswer: 'take',
        correctExplanation:
          '「〜の世話をする」は take care of というまとまりで覚える。同じ意味の look after と言いかえられる。熟語は日本語から一語ずつ置きかえるのではなく、take care of / look after のようにひとかたまりで暗記する。',
      },
    ],
  },

  {
    id: 'eigo_s368',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動詞の熟語③：make と have を使う表現',
    description: 'make（作る・〜にする）と have（持つ・食べる・ある）の広い意味を整理する',
    intro: 'The news made me happy. を「そのニュースはわたしを幸せに作った」と訳すと変です。make には「〜の状態にする」という使い方があるからです。have も「持つ」だけでは足りません。二つの動詞の意味の広がりを見ます。',
    order: 868,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'make の中心は「作る・作り出す」。make a cake／make friends（友達になる）。',
      'make ＋ 人 ＋ 形容詞 で「人を〜にする」。The news made me happy.',
      'be made of（材料が見てわかる）／be made from（見てわからない）。',
      'have の中心は「持っている」。そこから「食べる・飲む」「（行事が）ある」に広がる。',
      'have a good time（楽しく過ごす）／have a cold（かぜをひく）。',
      'have to ＋ 動詞の原形 で「〜しなければならない」。三単現は has to。',
    ],
    sections: [
      {
        heading: 'make を使う表現',
        body: `make は「何かを作り出す」が中心の意味である。

■ ①作る
My mother makes breakfast every morning.（母は毎朝、朝食を作る。）
I made a birthday card for my friend.（友達に誕生日カードを作った。）

■ ②make ＋ 人・物 ＋ 形容詞（〜を…にする）
The news made me happy.（その知らせは私をうれしくさせた＝それを聞いてうれしかった。）
Music makes us happy.
This makes me sad.

■ ③熟語
make friends (with)（（〜と）友達になる）※ friends と複数形にする
make a mistake（まちがえる）
make a speech（スピーチをする）
make a plan（計画を立てる）
make a noise（音を立てる）
make up one's mind（決心する）

例）I made friends with a girl from Canada.（カナダから来た女の子と友達になった。）

■ ④材料を言う
be made of ＋ 材料（見て何からできているかわかる）
例）This desk is made of wood.（この机は木でできている。）
be made from ＋ 材料（見てもわからない・形が変わっている）
例）Cheese is made from milk.（チーズは牛乳から作られる。）
be made in ＋ 場所（〜製）
例）This car was made in Japan.

★ ポイント：of と from の区別は入試頻出。「見た目で材料がわかるか」で判断する。`,
      },
      {
        heading: 'have を使う表現',
        body: `have は「持っている」が中心だが、日本語の「持つ」よりはるかに広く使う。

■ ①持っている・飼っている
I have two dogs.（犬を2ひき飼っている。）
Do you have a pen?

■ ②食べる・飲む
I have breakfast at seven.（7時に朝食を食べる。）
Let's have lunch together.
Would you like to have some tea?
※ eat / drink の代わりに使える便利な語。

■ ③（行事・授業が）ある
We have a sports day in October.
We have four classes in the morning.
I have a piano lesson on Saturdays.

■ ④病気・状態
I have a cold.（かぜをひいている。）／I have a headache.／I have a fever.

■ ⑤熟語
have a good time（楽しい時をすごす）／have a party（パーティーを開く）／have fun（楽しむ）／have no idea（わからない）

例）We had a good time at the party.（パーティーで楽しくすごした。）

■ ⑥have to（〜しなければならない）
I have to do my homework.（宿題をしなければならない。）
He has to go now.（彼はもう行かなければならない。）※ 三人称単数は has to
否定は don't have to（〜しなくてよい）。must not（〜してはいけない）と意味がちがうので注意する。

⚠ 注意：have の過去形は had。「持っていた・食べた・あった」すべて had になる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。 Butter is made （　） milk.　［of / from］',
        wrongAnswer: 'of',
        trapExplanation: 'be made of を先に習うため、材料と聞くと反射的に of を選んでしまう。牛乳とバターでは見た目がまったく変わることに注意が向かない。',
        correctAnswer: 'from',
        correctExplanation:
          '材料が見た目でわかるときは be made of（This desk is made of wood.）、加工されて見た目が変わり材料がわからないときは be made from（Butter is made from milk. / Wine is made from grapes.）を使う。もとの形が残っているかどうかで判断する。',
      },
      {
        question: '「私は彼女と友達になった。」を英語にしなさい。',
        wrongAnswer: 'I made a friend with her.',
        trapExplanation: '友達になる相手は一人なので、a friend と単数にしてしまう。日本語の「友達になる」をそのまま一語ずつ置きかえるのが原因。',
        correctAnswer: 'I made friends with her.',
        correctExplanation:
          '「友達になる」は make friends with … と、friends を複数形にするのが決まりである。友達関係は二人以上の間に成り立つものだからと考えるとよい。同じように shake hands with …（〜と握手する）も hands と複数形にする。',
      },
    ],
  },

  {
    id: 'eigo_s369',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動詞の熟語④：look を使う表現',
    description: 'look at / look for / look after / look like など、look の熟語を意味ごとに区別する',
    intro: 'look at は「見る」、look for は「さがす」、look after は「世話をする」。同じ look なのに、うしろの前置詞が変わるだけで意味がまるでちがいます。前置詞まで含めて一つの語として覚えるべき理由が、ここにあります。',
    order: 869,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'look at（〜を見る）／look for（〜をさがす）／look after（〜の世話をする）。',
      'look ＋ 形容詞 で「〜に見える」。You look happy.',
      'look like ＋ 名詞 で「〜に似ている・〜のように見える」。',
      'look forward to ＋ -ing（〜を楽しみに待つ）。to の後ろは動詞の原形ではない。',
      'Look out! ＝ Watch out!（危ない！）',
      '前置詞が変わると意味が大きく変わるので、セットで暗記する。',
    ],
    sections: [
      {
        heading: 'look ＋ 前置詞で意味が変わる',
        body: `look は後ろに続く前置詞によって意味がまったく変わる。ここが入試の狙われどころである。

■ look at ＋ もの（〜を見る）
Look at the blackboard.（黒板を見なさい。）
Look at that beautiful bird.

■ look for ＋ もの（〜をさがす）
I am looking for my key.（かぎをさがしています。）
What are you looking for?（何をさがしているのですか。）
※ 見つかったかどうかは問わない。「さがしている最中」を表す。

■ look after ＋ 人・動物（〜の世話をする）
She looks after her little brother.（彼女は弟の世話をする。）
＝ She takes care of her little brother.

■ look out（気をつける）
Look out! A car is coming.（危ない！ 車が来る。）
＝ Watch out!／Be careful!

★ ポイント：at＝一点を見る、for＝求める、after＝後ろについて面倒をみる、と前置詞のイメージから覚えると忘れにくい。

⚠ 注意：look at は「意識して見る」動作。ただ目に入る see とはちがう（別の課でくわしく学ぶ）。`,
      },
      {
        heading: 'look ＋ 形容詞と look like',
        body: `look には「〜に見える」という意味もある。後ろに何が来るかで形が変わる。

■ look ＋ 形容詞（〜に見える）
You look happy today.（今日はうれしそうだね。）
She looks tired.（彼女はつかれているようだ。）
That cake looks delicious.（そのケーキはおいしそうだ。）
※ 後ろに形容詞が直接くる。be動詞は不要。

■ look like ＋ 名詞（〜のように見える・〜に似ている）
He looks like his father.（彼は父親に似ている。）
That cloud looks like a rabbit.（あの雲はうさぎのように見える。）
It looks like rain.（雨が降りそうだ。）
※ 後ろに名詞が来るときだけ like が必要。

★ ポイント：後ろが形容詞なら like は付けない、名詞なら like を付ける。
You look happy.（○）／You look like happy.（×）
He looks like a teacher.（○）／He looks a teacher.（×）

■ look forward to ＋ 名詞・-ing（〜を楽しみに待つ）
I am looking forward to the summer vacation.
I am looking forward to seeing you.（あなたに会うのを楽しみにしています。）
⚠ 注意：この to は前置詞なので、後ろに動詞を置くときは必ず -ing にする。to see とはしない。手紙やメールの結びによく使われる表現である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語句を選びなさい。 You （　） very happy today.　［look / look like］',
        wrongAnswer: 'look like',
        trapExplanation: '「〜のように見える」＝look like と丸暗記しているため、後ろの語が形容詞か名詞かを確かめずに選んでしまう。',
        correctAnswer: 'look',
        correctExplanation:
          'happy は形容詞なので、like を付けずに look happy とする。like が必要なのは後ろに名詞が来るときだけである（He looks like his father.）。後ろの語の品詞を見て決める、という手順を身につける。',
      },
      {
        question: '「あなたに会えるのを楽しみにしています。」を英語にしなさい。',
        wrongAnswer: 'I am looking forward to see you.',
        trapExplanation: 'to を「to ＋ 動詞の原形」の to だと思いこんでしまう。want to see、hope to see と同じ形に見えるのが原因。',
        correctAnswer: 'I am looking forward to seeing you.',
        correctExplanation:
          'look forward to の to は前置詞なので、後ろには名詞か動詞の -ing 形が来る。I am looking forward to seeing you.／to the party. となる。前置詞の後ろは -ing、というきまりは be good at -ing、Thank you for -ing とも共通である。',
      },
    ],
  },

  {
    id: 'eigo_s370',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動詞の熟語⑤：put を使う表現と代名詞の位置',
    description: 'put on / put off / put away などの熟語と、代名詞が入るときの語順を学ぶ',
    intro: '「コートを着なさい」は Put on your coat. ですが、「それを着なさい」は Put it on. です。Put on it. とは言えません。代名詞が来ると語順が変わる——この決まりを知らないと、並べかえ問題で必ず落とします。',
    order: 870,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'put の中心の意味は「置く」。put ＋ 場所を表す語句がふつうの形。',
      'put on（身につける）⇔ take off（ぬぐ）。',
      'put away（かたづける）／put up（かかげる・立てる）／put off（延期する）。',
      '代名詞（it, them）は put it on のように動詞と副詞の間に置く。',
      '名詞なら put on your coat / put your coat on のどちらでもよい。',
      'put の過去形・過去分詞は put（形が変わらない）。',
    ],
    sections: [
      {
        heading: 'put の基本と熟語',
        body: `put は「置く」が中心の意味で、後ろに場所を表す語句が続くのがふつうである。

■ 基本の形
Put the book on the desk.（本を机の上に置きなさい。）
Put your bag here.（かばんをここに置きなさい。）
Don't put your feet on the chair.

■ put on（身につける）
Put on your jacket.（上着を着なさい。）
※ 服・くつ・帽子・めがねすべてに使える。反対は take off。
⚠ 「着ている状態」は wear で表す。put on は身につける動作。

■ put away（かたづける・しまう）
Put away your toys.（おもちゃをかたづけなさい。）

■ put up（あげる・はる・立てる）
Put up your hand.（手をあげなさい。）＝ Raise your hand.
We put up a tent.（テントを立てた。）

■ put off（延期する）
They put off the game because of the rain.（雨のため試合を延期した。）
＝ They postponed the game.

■ put down（下に置く）
Put down your pencil.（えんぴつを置きなさい。）

★ ポイント：put は過去形も過去分詞も put で、形が変わらない。cut・hit・set・let も同じ仲間である。
例）I put the letter in the box yesterday.（昨日、手紙を箱に入れた。）← put は過去形`,
      },
      {
        heading: '代名詞が入るときの語順',
        body: `put on のように「動詞＋副詞」の熟語では、目的語の位置に決まりがある。

■ 名詞のときは前でも後ろでもよい
Put on your coat.（○）
Put your coat on.（○）
どちらも正しい。

■ 代名詞（it, them, him, her）のときは必ず間にはさむ
Put it on.（○）
Put on it.（×）
Take them off.（○）／Take off them.（×）

★ ポイント：「代名詞は真ん中」と覚える。it や them は短くて軽いことばなので、文の最後に置かず、動詞のすぐ後ろに置く。

■ 同じきまりが働く熟語
put on / take off（身につける・ぬぐ）
turn on / turn off（つける・消す）
　例）Turn on the TV.／Turn it on.（× Turn on it.）
pick up（拾う）
　例）Pick up the pen.／Pick it up.
try on（試着する）
　例）Can I try it on?
look up（辞書で調べる）
　例）Look up the word.／Look it up.

■ 前置詞の熟語とのちがい
look at・look for・listen to のような「動詞＋前置詞」の熟語では、代名詞も後ろに置く。
Look at it.（○）／Look it at.（×）
Listen to me.（○）

⚠ 注意：見分け方は「後ろの語が名詞なしで意味を持つか」。on / off / up / down は単独でも意味を持つ副詞、at / to / for は必ず名詞を必要とする前置詞である。`,
      },
    ],
    trapExamples: [
      {
        question: '「（そのシャツを）試着してもいいですか。」を、shirt を it に置きかえて英語にしなさい。',
        wrongAnswer: 'Can I try on it?',
        trapExplanation: 'try on を一つのかたまりとして覚えているため、後ろにそのまま it を続けてしまう。名詞のときは try on the shirt と言えるので、同じでよいと考えてしまう。',
        correctAnswer: 'Can I try it on?',
        correctExplanation:
          '「動詞＋副詞」の熟語では、代名詞（it, them）は必ず動詞と副詞の間にはさむ。try it on、put it on、turn it off、pick it up となる。名詞のときだけ try on the shirt / try the shirt on のどちらでもよい。「代名詞は真ん中」と覚える。',
      },
      {
        question: '次の英文の put は現在形か過去形か。 I put the letter in the box yesterday.',
        wrongAnswer: '現在形',
        trapExplanation: '過去形なら -ed が付くか形が変わるはずだと考え、形が同じ put を現在形だと判断してしまう。yesterday という手がかりを見落としている。',
        correctAnswer: '過去形',
        correctExplanation:
          'put は原形・過去形・過去分詞がすべて put で形が変わらない動詞である。文末の yesterday から過去の文だとわかる。同じ仲間に cut・hit・set・let・read（読み方だけ変わる）があり、時を表す語で判断する必要がある。',
      },
    ],
  },

  {
    id: 'eigo_s371',
    subject: 'eigo',
    examType: 'chugaku',
    title: '動詞の熟語⑥：come と go の使い分け',
    description: 'come と go の方向のちがいと、come from / go to などの熟語を整理する',
    intro: '「今行きます」を I am going. と言うと、相手のところへは行かないという意味になってしまいます。正しくは I am coming. です。英語の come と go は、話し手ではなく相手を基準に方向が決まるからです。',
    order: 871,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'go は話し手から遠ざかる方向、come は話し手や相手に近づく方向。',
      '「今行きます」は I\'m coming.（× I\'m going.）相手のほうへ向かうから。',
      'come from ＝ be from（〜の出身である）。',
      'go to ＋ 場所。ただし go home / go there には to を付けない。',
      'go -ing で「〜しに行く」。go shopping／go fishing／go swimming。',
      'come true（実現する）／go out（外出する）／come back（もどる）。',
    ],
    sections: [
      {
        heading: 'come と go の方向のちがい',
        body: `come と go は「来る」「行く」と覚えるだけでは足りない。基準になる人がどこにいるかで決まる。

■ go ＝ 話し手のいる場所から遠ざかる
I go to school at eight.（学校へ行く。）
He went to the park.

■ come ＝ 話し手のいる場所、または相手のいる場所に近づく
Come here.（こっちに来て。）
My friend came to my house yesterday.（友達が昨日、家に来た。）

★ ポイント：日本語と食いちがう場面がある。母親に「ごはんですよ」と呼ばれて「今行く！」と答えるとき、英語では I'm coming! と言う。相手（母親）のいるほうへ近づくからである。ここを I'm going! と言うと「（どこかへ）出かけます」という意味になってしまう。

例）Dinner is ready!（ごはんですよ！）— I'm coming!（今行きます！）
例）Can you come to my birthday party?（誕生日パーティーに来られますか。）
　　— Sure, I'll come.（もちろん、行きます。）
※ 相手のところへ行くので come を使う。

⚠ 注意：日本語の「行く」を機械的に go にしないこと。だれのところへ向かうのかを考える。`,
        figureId: 'lf_eigoext10_371',
      },
      {
        heading: 'come と go の熟語',
        body: `どちらの動詞も熟語が多い。よく出るものをまとめる。

■ come の熟語
come from ＝ be from（〜の出身である）
　例）I come from Osaka.＝ I am from Osaka.
　　Where do you come from?＝ Where are you from?
come back（もどる）
　例）He came back at six.
come true（実現する）
　例）My dream came true.（夢がかなった。）
come in（入る）
　例）May I come in? — Sure, come in.
come and see（会いに来る）
　例）Please come and see me.

■ go の熟語
go to ＋ 場所（〜へ行く）
　例）go to the library／go to bed（ねる）※ bed には the を付けない
go home / go there（家へ帰る／そこへ行く）※ to を付けない
go out（外出する）
　例）My parents went out.
go back（もどる）
go on（続ける）

■ go ＋ -ing（〜しに行く）
go shopping（買い物に行く）／go fishing（つりに行く）／go swimming（泳ぎに行く）／go skiing（スキーに行く）／go camping（キャンプに行く）／go hiking（ハイキングに行く）

★ ポイント：go shopping の後ろの場所には at や in を使う。
例）I went shopping at the department store.（× to the department store）`,
      },
    ],
    trapExamples: [
      {
        question: '「ごはんですよ。」「今行きます！」の「今行きます」を英語にしなさい。',
        wrongAnswer: "I'm going!",
        trapExplanation: '日本語の「行く」をそのまま go に置きかえてしまう。come を「来る」と一対一で覚えていると、相手のほうへ向かう場合に使えることに気づけない。',
        correctAnswer: "I'm coming!",
        correctExplanation:
          'come は「話し手または相手のいる場所へ近づく」ことを表す。呼ばれて相手のところへ向かうので come を使う。I\'m going! と言うと「（別のどこかへ）出かけます」という意味になってしまう。Can you come to my party? — Yes, I\'ll come. も同じ考え方である。',
      },
      {
        question: '「私は昨日、買い物に行きました。」を英語にしなさい。',
        wrongAnswer: 'I went to shopping yesterday.',
        trapExplanation: 'go to school、go to the park と同じ形だと考え、shopping の前にも to を入れてしまう。go to … を一つの決まり文句として覚えているのが原因。',
        correctAnswer: 'I went shopping yesterday.',
        correctExplanation:
          '「〜しに行く」は go ＋ -ing の形で、to は入れない（go shopping、go fishing、go swimming、go camping）。to が必要なのは go to ＋ 場所のとき（go to the store）。さらに go home、go there には to を付けない点も合わせて整理する。',
      },
    ],
  },
  // ───────────── 8. 前置詞を含む熟語（s372〜s375） ─────────────
  {
    id: 'eigo_s372',
    subject: 'eigo',
    examType: 'chugaku',
    title: '前置詞の熟語①：be動詞＋形容詞＋前置詞',
    description: 'be good at / be famous for / be interested in など、決まった前置詞をとる形を覚える',
    intro: '「サッカーが得意だ」の「が」は、英語では at になります。be good at soccer です。なぜ at なのかを考えても答えは出ません。形容詞ごとに、組む前置詞が決まっているからです。よく出る組み合わせをまとめて覚えます。',
    order: 872,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'be good at ＋ 名詞・-ing（〜が得意だ）。反対は be poor at。',
      'be interested in（〜に興味がある）／be famous for（〜で有名だ）。',
      'be afraid of（〜をこわがる）／be full of（〜でいっぱいだ）／be proud of（〜を誇りに思う）。',
      'be different from（〜とちがう）／be kind to（〜に親切だ）／be late for（〜におくれる）。',
      '前置詞の後ろに動詞を置くときは必ず -ing にする。',
      'be動詞は主語と時制に合わせて変える（am / is / are / was / were）。',
    ],
    sections: [
      {
        heading: 'よく出る「be動詞＋形容詞＋前置詞」',
        body: `形容詞ごとに、決まった前置詞が付く。組み合わせで覚えるしかない。

■ at をとるもの
be good at（〜が得意だ）／be poor at, be bad at（〜が苦手だ）／be surprised at（〜に驚く）
例）She is good at swimming.（彼女は泳ぐのが得意だ。）
例）I was surprised at the news.（その知らせに驚いた。）

■ in をとるもの
be interested in（〜に興味がある）
例）I am interested in science.（理科に興味があります。）

■ for をとるもの
be famous for（〜で有名だ）／be late for（〜におくれる）／be ready for（〜の準備ができている）
例）Kyoto is famous for its old temples.（京都は古い寺で有名だ。）
例）Don't be late for school.（学校におくれないように。）

■ of をとるもの
be afraid of（〜をこわがる）／be full of（〜でいっぱいだ）／be proud of（〜を誇りに思う）／be fond of（〜が好きだ）
例）My sister is afraid of dogs.（姉は犬をこわがる。）
例）The box is full of books.（箱は本でいっぱいだ。）

■ from / to をとるもの
be different from（〜とちがう）／be kind to（〜に親切だ）／be good to（〜によくしてくれる）
例）My idea is different from yours.
例）He is kind to everyone.（彼はだれにでも親切だ。）

★ ポイント：be famous for（有名な理由）と be famous as（〜としての有名さ）を区別する。
例）He is famous as a singer.（彼は歌手として有名だ。）`,
      },
      {
        heading: '前置詞の後ろは名詞か -ing',
        body: `前置詞の後ろに動詞を置きたいときは、必ず -ing の形（動名詞）にする。ここが最大の落とし穴である。

■ 正しい形
I am good at playing tennis.（テニスをするのが得意だ。）
She is interested in learning English.（英語を学ぶことに興味がある。）
Thank you for helping me.（手伝ってくれてありがとう。）
He is afraid of making mistakes.（まちがえるのをこわがっている。）

■ まちがえやすい形
× I am good at play tennis.
× I am good at to play tennis.

★ ポイント：「前置詞の後ろは名詞か -ing」と一つの規則にまとめる。この規則が働く場面は多い。
・be good at ＋ -ing
・be interested in ＋ -ing
・be afraid of ＋ -ing
・Thank you for ＋ -ing
・How about ＋ -ing?（〜はどうですか）
・look forward to ＋ -ing
・before / after ＋ -ing（before going to bed）

■ be動詞は主語と時制に合わせる
I am interested in music.／He is interested in music.／They are interested in music.
I was interested in music when I was a child.（子どものころは音楽に興味があった。）

⚠ 注意：be interested in の interested は -ed の形。interesting（おもしろい）とまちがえやすい。
This book is interesting.（この本はおもしろい。）
I am interested in this book.（この本に興味がある。）
人が「興味を持っている」なら -ed、ものが「興味を起こさせる」なら -ing と覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を答えなさい。 My brother is good at （　） soccer.',
        wrongAnswer: 'play',
        trapExplanation: 'be good at を「〜が得意だ」という一つの意味のかたまりとして覚えているため、後ろに動詞の原形をそのまま置いてしまう。at が前置詞だと意識できていない。',
        correctAnswer: 'playing',
        correctExplanation:
          '前置詞 at の後ろに動詞を置くときは -ing の形にする。My brother is good at playing soccer. となる。同じ規則が be interested in -ing、Thank you for -ing、How about -ing? にも働く。「前置詞の後ろは名詞か -ing」とまとめて覚える。',
      },
      {
        question: '（　）に入る語を選びなさい。 I am （　） in Japanese history.　［interesting / interested］',
        wrongAnswer: 'interesting',
        trapExplanation: '「興味がある」＝ interesting と覚えてしまっている。-ing と -ed の使い分けを、人が感じるのかものが感じさせるのかで区別していない。',
        correctAnswer: 'interested',
        correctExplanation:
          '人が「興味を持っている」ときは -ed の形の interested を使い、be interested in … とする。ものが「興味を起こさせる＝おもしろい」ときは -ing の interesting を使う（This book is interesting.）。exciting / excited、surprising / surprised も同じ関係である。',
      },
    ],
  },

  {
    id: 'eigo_s373',
    subject: 'eigo',
    examType: 'chugaku',
    title: '前置詞の熟語②：場所を表す前置詞',
    description: 'in / on / at / under / by / between / among など、位置を表す前置詞を整理する',
    intro: 'かべにかかった絵は on the wall、天井の電灯も on the ceiling です。on は「上」ではなく「くっついている」を表すからです。in・on・at の三つは、日本語の訳ではなくイメージでつかむのが近道です。',
    order: 873,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'in（囲まれた中に）／on（くっついて）／at（一点）が基本の三つ。',
      'on は「上」ではなく「接している」。かべの絵も天井の電灯も on。',
      'in は広い場所（in Tokyo）、at はせまい一点（at the station）。',
      'between は2つの間、among は3つ以上の間。',
      'over（真上・またぐ）／above（上方）／under（真下）／below（下方）。',
      'in front of ⇔ behind、next to ＝ beside。',
    ],
    sections: [
      {
        heading: 'in・on・at のイメージ',
        body: `場所を表す前置詞は、日本語の「〜に」に全部あたるため、イメージでつかむ必要がある。

■ in ＝ 囲まれた空間の中
in the box（箱の中に）／in the room（部屋の中に）／in Tokyo（東京に）／in Japan／in the water
広い場所（国・都市・部屋）には in を使う。

■ on ＝ 面に接している
on the desk（机の上に）／on the wall（かべに）／on the ceiling（天井に）／on the floor（ゆかに）
★ ポイント：on は「上」という意味ではなく「くっついている」という意味である。だから、かべに掛かった絵も天井の電灯も on を使う。
例）There is a picture on the wall.（かべに絵がかかっている。）

■ at ＝ 一点
at the station（駅で）／at the door（ドアのところで）／at the bus stop／at school
せまい場所や、地図上の一点として見る場所には at を使う。

■ in と at の使い分け
I live in Osaka.（大阪に住んでいる）← 広がりのある場所
I'll meet you at Osaka Station.（大阪駅で会おう）← 待ち合わせの一点
He is in the classroom.（教室の中にいる）← 空間の中
He is at school.（学校にいる）← 場所を一点としてとらえる

⚠ 注意：in the tree（木の中＝葉のしげみの中の鳥など）と on the tree（実などが木に付いている）は使い分けがある。中学受験では in the box / on the desk / at the door の三つの型を確実にする。`,
        figureId: 'lf_eigoext10_373',
      },
      {
        heading: 'そのほかの位置の前置詞',
        body: `位置関係を表す語は、地図問題・絵を見て答える問題で必ず使う。

■ 上下
over（真上・接していない・またぐ）／above（〜より上のほうに）／under（真下）／below（〜より下のほうに）
例）A bird is flying over my head.（鳥が頭の上を飛んでいる。）
例）The cat is under the table.（ねこはテーブルの下にいる。）
例）The bridge is over the river.（橋が川にかかっている。）

■ 前後
in front of（〜の前に）／behind（〜の後ろに）
例）There is a bus stop in front of the station.
例）The park is behind the school.

■ 近く・となり
near（〜の近くに）／by（〜のすぐそばに）／next to, beside（〜のとなりに）／across from（〜の向かいに）／around（〜のまわりに）
例）My house is near the park.／Sit by me.／The bank is next to the post office.

■ 間
between A and B（2つのものの間に）
among（3つ以上のものに囲まれて）
例）The store is between the bank and the hospital.（店は銀行と病院の間にある。）
例）He is popular among his classmates.（彼はクラスメートの間で人気がある。）

★ ポイント：between は2つ、among は3つ以上。「between の be は two の意味」と結びつけて覚えるとよい。

■ 通り道
along（〜に沿って）／through（〜を通りぬけて）／across（〜を横切って）／into（〜の中へ）／out of（〜の外へ）
例）Walk along this street.（この通りに沿って歩いてください。）
例）Go across the bridge.（橋をわたってください。）`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。 There is a beautiful picture （　） the wall.　［in / on］',
        wrongAnswer: 'in',
        trapExplanation: '「かべに」の「に」を、部屋の中を表す in だと考えてしまう。on を「上に」とだけ覚えていると、かべに使えることに気づかない。',
        correctAnswer: 'on',
        correctExplanation:
          'on は「上に」ではなく「面に接している」ことを表す前置詞である。だから、かべに掛かった絵も on the wall、天井の電灯も on the ceiling となる。in は「囲まれた空間の中」（in the box、in the room）に使う。',
      },
      {
        question: '（　）に入る語を選びなさい。 The bank is （　） the post office and the hospital.　［between / among］',
        wrongAnswer: 'among',
        trapExplanation: '「〜の間」という日本語だけを見て、どちらでもよいと考えてしまう。between と among の数のちがいを知らないのが原因。',
        correctAnswer: 'between',
        correctExplanation:
          'between は2つのものの間、among は3つ以上のものに囲まれている場合に使う。ここは郵便局と病院の2つの間なので between … and … の形にする。among は He is popular among his friends. のように使う。',
      },
    ],
  },

  {
    id: 'eigo_s374',
    subject: 'eigo',
    examType: 'chugaku',
    title: '前置詞の熟語③：時を表す前置詞',
    description: 'in / on / at と for / during / since / until / by の使い分けを整理する',
    intro: '2026年は in、5月5日は on、七時は at。時を表す前置詞は、指す時間の幅が大きいほど in で、小さくなるにつれて on、at と変わります。一つずつ暗記するより、幅の大小で並べたほうが確実に思い出せます。',
    order: 874,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      '時の in / on / at は「幅の大きさ」で決まる。in（年・月・季節）→ on（日付・曜日）→ at（時刻）。',
      'in the morning / in the afternoon / in the evening、ただし at night。',
      'for ＋ 期間の長さ（for two hours）／during ＋ 行事や期間の名前（during the vacation）。',
      'since ＝ 〜以来（起点）、from ＝ 〜から（出発点）。',
      'until (till) ＝ 〜までずっと（継続）、by ＝ 〜までには（期限）。',
      'before（〜の前に）／after（〜の後に）。後ろに動詞を置くときは -ing。',
    ],
    sections: [
      {
        heading: 'in・on・at は時間の幅で決まる',
        body: `時を表す前置詞の in・on・at は、時間の幅の大きさで使い分ける。大きいほうから順に in → on → at と覚える。

■ in ＋ 幅の広い時間
in 2026（年）／in April（月）／in summer（季節）／in the morning（午前中）／in the afternoon／in the evening／in the twentieth century（世紀）

■ on ＋ 特定の日
on Monday（曜日）／on May 5（日付）／on New Year's Day（記念日）／on Sunday morning（特定の日の朝）
★ ポイント：ふつうは in the morning だが、「日曜日の朝」のように日が決まると on Sunday morning となる。日が決まったら on が勝つ。

■ at ＋ 時の一点
at seven（時刻）／at noon（正午）／at midnight（真夜中）／at night（夜に）／at that time（そのとき）
⚠ 注意：night だけは at を使う。in the morning / in the afternoon / in the evening と並べて、at night だけ仲間はずれと覚える。

■ 前置詞を付けない語
today／tomorrow／yesterday／this morning／last night／next week／every day
例）I will go there tomorrow.（× on tomorrow）
例）I met him last Sunday.（× on last Sunday）
this / last / next / every が付いたら前置詞は不要である。`,
        figureId: 'lf_eigoext10_374',
      },
      {
        heading: 'for・during・since・until・by',
        body: `期間を表す前置詞は、意味のちがいをはっきりさせておく。

■ for ＋ 期間の長さ（数字で言える長さ）
for two hours（2時間）／for three days／for a week／for a long time
例）I studied English for two hours.（2時間英語を勉強した。）

■ during ＋ 行事・期間の名前
during the summer vacation（夏休みの間）／during the class（授業中）／during the trip
例）I visited my grandmother during the winter vacation.
★ ポイント：後ろが「数字＋単位」なら for、「名前の付いた期間」なら during。

■ since ＝ 〜以来（過去のある時点から今まで）
I have lived here since 2020.（2020年からここに住んでいる。）
※ 現在完了とともに使うことが多い。

■ from ＝ 〜から（出発点）
The store is open from nine to six.（店は9時から6時まで開いている。）
from A to B の形でよく使う。

■ until (till) ＝ 〜までずっと
I waited until five.（5時までずっと待った。）
※ 動作や状態がその時まで続く。

■ by ＝ 〜までには（期限）
Come home by five.（5時までには帰ってきなさい。）
※ その時までに一度すればよい。
⚠ 注意：until と by のちがいは頻出。「ずっと続く」なら until、「しめ切り」なら by。
Please finish it by Friday.（金曜までに終わらせて）← しめ切り
I will stay here until Friday.（金曜までここにいる）← 継続

■ before / after
before dinner（夕食前に）／after school（放課後に）
後ろに動詞を置くときは -ing にする。before going to bed（ねる前に）`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。 I will finish my homework （　） Friday.（金曜までには終わらせる）　［until / by］',
        wrongAnswer: 'until',
        trapExplanation: '「〜まで」という日本語がどちらにもあてはまるため、先に習った until を選んでしまう。「終わらせる」が一回きりの動作であることに注意が向かない。',
        correctAnswer: 'by',
        correctExplanation:
          'by は「〜までには」という期限を表し、その時までに一度すればよい動作に使う。until は「〜までずっと」という継続を表し、I will stay here until Friday. のように状態が続く場合に使う。finish・come・send のような一回きりの動作には by を使う。',
      },
      {
        question: '（　）に入る語を選びなさい。 I stayed in Kyoto （　） three days.　［for / during］',
        wrongAnswer: 'during',
        trapExplanation: '「〜の間」という日本語から during を選んでしまう。for と during の後ろに来る語のちがいを意識していない。',
        correctAnswer: 'for',
        correctExplanation:
          '「数字＋単位」で長さを表すときは for を使う（for three days、for two hours、for a week）。during は the summer vacation、the class のように名前の付いた期間に使う。後ろの語が数字で始まるかどうかで判断する。',
      },
    ],
  },

  {
    id: 'eigo_s375',
    subject: 'eigo',
    examType: 'chugaku',
    title: '前置詞の熟語④：動詞＋前置詞のかたまり',
    description: 'listen to / wait for / arrive at / take care of など、前置詞まで含めて覚える動詞を整理する',
    intro: '「音楽を聞く」は listen music ではなく listen to music です。日本語で「〜を」と言うから前置詞が要らない、とはかぎりません。逆に discuss や enter は前置詞が不要です。取りちがえやすい組を並べて確かめます。',
    order: 875,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      'listen to（〜を聞く）／wait for（〜を待つ）／look at（〜を見る）は前置詞が必要。',
      '日本語では「〜を」でも英語では前置詞が要るものに注意する。',
      '反対に、discuss・reach・enter・visit・marry は前置詞が不要。',
      'arrive at（せまい場所）／arrive in（広い場所）＝ get to ＝ reach。',
      'take care of ＝ look after／be able to ＝ can。',
      'ask ＋ 人 ＋ for ＋ もの（人にものをたのむ）／thank ＋ 人 ＋ for（〜のことで感謝する）。',
    ],
    sections: [
      {
        heading: '前置詞が必要な動詞',
        body: `日本語では「〜を」と言うのに、英語では前置詞が必要な動詞がある。書き取り・並べかえで必ず問われる。

■ to をとる
listen to（〜を聞く）／talk to（〜と話す）／speak to（〜に話しかける）／belong to（〜に所属する）／say to（〜に言う）
例）I listen to the radio every night.（毎晩ラジオを聞く。）
例）I belong to the tennis club.（テニス部に入っている。）

■ for をとる
wait for（〜を待つ）／look for（〜をさがす）／ask for（〜を求める）／leave for（〜に向けて出発する）／care for（〜の世話をする）／thank ～ for（〜のことで感謝する）
例）I waited for the bus for ten minutes.（10分間バスを待った。）
例）Thank you for your help.（助けてくれてありがとう。）

■ at をとる
look at（〜を見る）／arrive at（〜に着く）／laugh at（〜を笑う）／be surprised at
例）We arrived at the station at six.

■ of / on / with をとる
take care of（〜の世話をする）／think of（〜のことを考える）／hear of（〜のうわさを聞く）／depend on（〜による）／agree with（〜に賛成する）／help ～ with（〜を手伝う）
例）Can you help me with my homework?（宿題を手伝ってくれますか。）

★ ポイント：日本語の「〜を」につられて前置詞を落とす誤りが多い。listen the radio、wait the bus はどちらも誤りである。`,
      },
      {
        heading: '前置詞がいらない動詞と、言いかえ',
        body: `逆に、日本語では「〜に」と言うのに前置詞がいらない動詞もある。

■ 前置詞が不要な動詞
reach（〜に着く）：We reached the station.（× reached at）
enter（〜に入る）：He entered the room.（× entered into）
visit（〜を訪れる）：I visited my uncle.（× visited to）
discuss（〜について話し合う）：We discussed the problem.（× discussed about）
marry（〜と結婚する）：She married him.（× married with）
answer（〜に答える）：Answer the question.（× answer to）

■ 「着く」の三つの言い方
arrive at ＋ せまい場所（arrive at the station）
arrive in ＋ 広い場所（arrive in Japan）
get to ＋ 場所（get to the station）
reach ＋ 場所（reach the station）※ 前置詞なし
例）We arrived at the airport at ten. ＝ We got to the airport at ten. ＝ We reached the airport at ten.

■ よく出る言いかえ
take care of ＝ look after（世話をする）
be able to ＝ can（できる）
be going to ＝ will（〜するつもりだ）
a lot of ＝ many / much（たくさんの）
have to ＝ must（〜しなければならない）
be fond of ＝ like（好きだ）

⚠ 注意：この言いかえは書きかえ問題で頻出。同じ意味でも形がちがうので、動詞の形（原形か、-ing か）に気をつける。
He can swim. ＝ He is able to swim.（後ろは原形）`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎朝ラジオを聞きます。」を英語にしなさい。',
        wrongAnswer: 'I listen the radio every morning.',
        trapExplanation: '日本語が「ラジオを聞く」と「を」で結ばれているため、英語でも前置詞なしで続けられると考えてしまう。listen を「〜を聞く」と一語で覚えているのが原因。',
        correctAnswer: 'I listen to the radio every morning.',
        correctExplanation:
          'listen は「耳をかたむける」という意味の動詞で、聞く対象を示すには to が必要である。同じように wait for（待つ）、look at（見る）、look for（さがす）も前置詞まで含めて覚える。逆に reach、visit、discuss、enter は前置詞がいらない。',
      },
      {
        question: '「私たちはその問題について話し合った。」を英語にしなさい。',
        wrongAnswer: 'We discussed about the problem.',
        trapExplanation: '「〜について」という日本語から about を入れてしまう。talk about … を覚えている生徒ほど引っかかりやすい。',
        correctAnswer: 'We discussed the problem.',
        correctExplanation:
          'discuss は「〜について話し合う」という意味をすでに含んでいるので、about を付けない。同じ仲間に reach（〜に着く）、enter（〜に入る）、visit（〜を訪れる）、answer（〜に答える）、marry（〜と結婚する）がある。about が必要なのは talk about、think about のほう。',
      },
    ],
  },

  // ───────────── 9. 会話表現（s376〜s381） ─────────────
  {
    id: 'eigo_s376',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話表現①：あいさつと別れのことば',
    description: '時間帯によるあいさつの使い分けと、別れ・お礼・おわびの決まり文句を身につける',
    intro: 'Good night は「こんばんは」ではありません。夜に会ったときは Good evening、別れるときが Good night です。この二つを取りちがえると、あいさつのつもりが「さようなら」になってしまいます。時間帯ごとに整理します。',
    order: 876,
    studyPeriod: '小6前半',
    targetLevel: 'kiso',
    keyPoints: [
      'Good morning（朝）／Good afternoon（昼〜夕方）／Good evening（夕方以降）。',
      'Good night は「おやすみなさい」で、別れのあいさつ。会ったときには使わない。',
      'How are you? — I\'m fine, thank you. And you? が基本のやりとり。',
      '別れは See you.／See you later.／Good-bye.／Take care.',
      'お礼は Thank you. — You\'re welcome.／おわびは I\'m sorry. — That\'s all right.',
      '初対面では Nice to meet you. — Nice to meet you, too.',
    ],
    sections: [
      {
        heading: '時間帯によるあいさつ',
        body: `英語のあいさつは時間帯で変わる。ここは会話問題でそのまま問われる。

■ 会ったときのあいさつ
Good morning.（おはようございます）… 朝から正午ごろまで
Good afternoon.（こんにちは）… 正午から夕方まで
Good evening.（こんばんは）… 夕方から夜まで
Hi.／Hello.（やあ・こんにちは）… 時間に関係なく使える

⚠ 注意：Good night. は「こんばんは」ではなく「おやすみなさい」「さようなら（夜の別れ）」である。夜に会ったときは Good evening. を使う。ここは必ず出題される。

■ 調子をたずねる
How are you?（お元気ですか。）
— I'm fine, thank you. And you?（元気です。あなたは。）
— Pretty good.／Not so good.／So-so.（まあまあです。）
How are you doing?／How's it going? もくだけた言い方。

■ ひさしぶりのとき
Long time no see.／I haven't seen you for a long time.（おひさしぶりです。）

■ 別れるとき
Good-bye.／Bye.／See you.／See you later.（またあとで）／See you tomorrow.（また明日）／Take care.（気をつけて）／Have a nice day.（よい一日を）
— You too.（あなたもね。）

★ ポイント：Have a nice day. と言われたら、You too. と返すのが自然な受け答えである。`,
        figureId: 'lf_eigoext10_376',
      },
      {
        heading: 'お礼・おわび・返事',
        body: `会話問題では「言われたことに何と返すか」が問われる。返事とセットで覚える。

■ お礼
Thank you (very much).／Thanks.（ありがとう）
— You're welcome.（どういたしまして）
— Not at all.／My pleasure.／No problem.（どういたしまして）
Thank you for your help.（助けてくれてありがとう）
Thank you for coming.（来てくれてありがとう）※ for の後ろは -ing

■ おわび
I'm sorry.（ごめんなさい）
— That's all right.／That's OK.／Never mind.（気にしないで）
I'm sorry I'm late.（おくれてごめんなさい）
Excuse me.（すみません）※ 人に呼びかけるとき・前を通るとき

★ ポイント：Excuse me. は話しかけるときの「すみません」、I'm sorry. はあやまるときの「すみません」。日本語では同じでも英語では別なので、場面で区別する。

■ 初対面
Nice to meet you.（はじめまして。）
— Nice to meet you, too.
How do you do?（はじめまして。）※ ややかたい言い方
This is my friend, Ken.（こちらは友達のケンです。）

■ そのほかの返事
Sure.／Of course.（もちろん）／No problem.（いいですよ）／I'd love to.（ぜひ）／I'm afraid not.（残念ですができません）`,
      },
    ],
    trapExamples: [
      {
        question: '夜7時に友達の家をたずねたとき、最初に言うあいさつとして正しいものを選びなさい。 ［Good night. / Good evening.］',
        wrongAnswer: 'Good night.',
        trapExplanation: '「夜＝night」と結びつけて、夜のあいさつは Good night. だと考えてしまう。日本語の「こんばんは」に night という語が当てはまりそうに見えるのも原因。',
        correctAnswer: 'Good evening.',
        correctExplanation:
          'Good night. は「おやすみなさい」「（夜の）さようなら」で、別れるときに使う。会ったときの「こんばんは」は Good evening. である。会ったとき＝morning / afternoon / evening、別れるとき＝night と整理する。',
      },
      {
        question: '（　）に入る表現を選びなさい。 A: Thank you for helping me.　B: （　）　［You\'re welcome. / Nice to meet you.］',
        wrongAnswer: 'Nice to meet you.',
        trapExplanation: '会話表現をまとめて暗記していると、場面と結びつけずにそれらしい表現を選んでしまう。お礼への返事という文脈を読み取れていない。',
        correctAnswer: "You're welcome.",
        correctExplanation:
          'Thank you. に対する返事は You\'re welcome.（どういたしまして）である。ほかに Not at all.、My pleasure.、No problem. も使える。Nice to meet you. は初対面のあいさつなので、この場面には合わない。会話問題は「直前の発言に対する返事」として自然かどうかで選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s377',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話表現②：自己紹介と人の紹介',
    description: '名前・出身・好きなものを伝える自己紹介の型と、人を紹介する言い方を学ぶ',
    intro: '英語で名前を言うとき、日本語のように姓から言うと相手を混乱させます。My name is Ken Sato. と、名前が先で姓があとです。名前・出身・好きなことという流れを型にしておけば、初対面でも言葉に詰まりません。',
    order: 877,
    studyPeriod: '小6前半',
    targetLevel: 'kiso',
    keyPoints: [
      '自己紹介は「名前 → 出身 → 学年・年齢 → 好きなこと → しめくくり」の順で作る。',
      'My name is Ken.／I\'m Ken. どちらでもよい。My name is Ken Sato. と姓名の順に注意。',
      '出身は I\'m from Osaka. ＝ I come from Osaka.',
      '「〜が好きです」は I like …、「〜が得意です」は I\'m good at -ing。',
      '人を紹介するときは This is …. を使い、He is … とは言わない。',
      'しめくくりは Thank you.／Nice to meet you. で終える。',
    ],
    sections: [
      {
        heading: '自己紹介の型',
        body: `英語入試では「自己紹介を英語で書きなさい」という問題がよく出る。次の型に自分の情報を入れれば必ず書ける。

■ ①名前
Hello. My name is Ken Sato.／I'm Ken.
※ 英語では名（Ken）→ 姓（Sato）の順に言う。Please call me Ken.（ケンと呼んでください。）

■ ②出身・住んでいる場所
I'm from Osaka.＝ I come from Osaka.
I live in Nara with my family.

■ ③学年・年齢
I'm twelve years old.
I'm a sixth grader.／I'm in the sixth grade.（6年生です。）

■ ④好きなこと・得意なこと
I like soccer very much.
My favorite subject is science.
I'm good at swimming.
I play the piano every day.（楽器には the を付ける）
I'm in the tennis club.（テニス部に入っています。）

■ ⑤家族・ペット
I have a brother and a dog.

■ ⑥しめくくり
Thank you.／Nice to meet you.

★ ポイント：一文を短く、主語と動詞をはっきりさせる。長い文を書こうとすると誤りが増える。

⚠ 注意：I'm twelve years old. の years は複数形。one year old だけが単数である。`,
      },
      {
        heading: '人を紹介する・相手にたずねる',
        body: `自己紹介ができたら、人を紹介する言い方と、相手にたずねる言い方をそろえる。

■ 人を紹介する
This is my friend, Aya.（こちらは友達のアヤです。）
This is Mr. Brown. He is our English teacher.
※ 紹介するときの最初の一言は必ず This is …。He is … から始めない。二文目からは He / She を使う。

■ 相手にたずねる
What's your name?（お名前は。）— My name is Ken.
Where are you from?（どちらの出身ですか。）— I'm from Canada.
How old are you?（何歳ですか。）— I'm twelve.
What grade are you in?（何年生ですか。）— I'm in the sixth grade.
What do you like to do?（何をするのが好きですか。）— I like reading books.
Do you have any brothers or sisters?
What's your favorite food?（好きな食べ物は何ですか。）

■ 敬称
Mr.（男性）／Ms.（女性・結婚の有無を問わない）／Mrs.（結婚している女性）／Miss（未婚の女性）
※ 敬称の後ろには姓を続ける（Mr. Brown）。名前だけに付けない（× Mr. John）。今は Ms. を使うのがふつう。

⚠ 注意：How are you?（元気ですか）と How old are you?（何歳ですか）、Who are you?（あなたはだれ）は混同しやすい。Who are you? は失礼にひびくので、初対面では使わない。`,
      },
    ],
    trapExamples: [
      {
        question: '友達を先生に紹介するときの最初の一言として正しいものを選びなさい。 ［She is my friend, Aya. / This is my friend, Aya.］',
        wrongAnswer: 'She is my friend, Aya.',
        trapExplanation: '女の子を指すので she を使うのが自然だと考えてしまう。日本語では「彼女は私の友達のアヤです」と言えるため、直訳すると she になる。',
        correctAnswer: 'This is my friend, Aya.',
        correctExplanation:
          '英語では人を紹介するとき、最初の一言に This is … を使う決まりがある。二文目からは She is a good tennis player. のように he / she を使ってよい。電話で名乗るときも This is Ken speaking. と This を使う。',
      },
      {
        question: '「私は12歳です。」を英語にしなさい。',
        wrongAnswer: "I'm twelve year old.",
        trapExplanation: '「12歳」という一つのまとまりで考えるため、year に -s を付け忘れる。日本語には複数形がないので、数と名詞の形をそろえる意識が働かない。',
        correctAnswer: "I'm twelve years old.",
        correctExplanation:
          '2以上の数の後ろでは名詞を複数形にするので twelve years old となる。1歳だけが one year old と単数になる。なお I\'m twelve. と years old を省いてもよい。年齢をたずねる文は How old are you? である。',
      },
    ],
  },

  {
    id: 'eigo_s378',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話表現③：電話での言い方',
    description: '電話をかける・受ける・取り次ぐ・伝言を残すときの決まり文句を身につける',
    intro: '電話で「わたしはケンです」と言うとき、I am Ken. とは言いません。This is Ken. が正しい言い方です。相手に姿が見えない電話には、専用の言い回しがいくつもあります。かける・受ける・取り次ぐ場面ごとに覚えます。',
    order: 878,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      '電話で名乗るときは This is Ken (speaking).（I am Ken. とは言わない）',
      '相手を確かめるときは Is this Aya?／Who\'s calling, please?',
      '取り次ぎは Just a moment, please.／Hold on, please.',
      '不在は He is not here now.／She is out now.',
      '伝言は Can I take a message?（受ける側）／Can I leave a message?（かける側）',
      'かけまちがいは I think you have the wrong number.',
    ],
    sections: [
      {
        heading: '電話をかける・受ける',
        body: `電話の場面は会話の並べかえ問題で頻出である。日常の英語と言い方が変わるところに注意する。

■ 電話を受ける
Hello.（もしもし）
Hello. This is the Sato residence.（佐藤でございます。）※ ていねいな言い方

■ 名乗る
Hello. This is Ken (speaking).（もしもし、ケンです。）
★ ポイント：電話では I am Ken. とは言わず、This is Ken. と言う。自分を「この声の人」として示すためである。

■ 相手を確かめる
Is this Aya?（アヤさんですか。）
Who's calling, please?（どちらさまですか。）
May I ask who's calling?（どちらさまでしょうか。）

■ 話したい相手を伝える
May I speak to Aya, please?（アヤさんをお願いします。）
Can I talk to Mr. Brown?
※ speak to / talk to を使う。

■ 取り次ぐ
Just a moment, please.／Hold on, please.（少々お待ちください。）
I'll get him.（彼を呼んできます。）
Speaking.（私です。）← 本人が出ているとき

⚠ 注意：May I speak to Aya? に対して本人が出たときの返事は Speaking. または This is she. である。Yes, I am. とは言わない。`,
      },
      {
        heading: '不在・伝言・かけまちがい',
        body: `相手がいないときのやりとりも、そのまま出題される。

■ 不在を伝える
I'm sorry, but he is not here now.（あいにく彼は今おりません。）
She is out now.（今、外出しています。）
He is at school now.
He will be back at six.（6時にもどります。）

■ 伝言
Can I take a message?（伝言をうかがいましょうか。）← 受ける側
Would you like to leave a message?（伝言を残されますか。）
Can I leave a message?（伝言をお願いできますか。）← かける側
Please tell him to call me back.（折り返し電話するよう伝えてください。）
Please ask him to call me later.

★ ポイント：take a message は「伝言を受け取る」、leave a message は「伝言を残す」。どちらの立場かで動詞が変わる。borrow と lend の関係に似ている。

■ かけ直す
I'll call back later.（あとでかけ直します。）
Shall I call you back?（かけ直しましょうか。）

■ かけまちがい
I think you have the wrong number.（番号がちがうようです。）
— Oh, I'm sorry.

■ 聞き取れないとき
I'm sorry, I can't hear you well.（よく聞こえません。）
Could you speak more slowly, please?（もっとゆっくり話していただけますか。）`,
      },
    ],
    trapExamples: [
      {
        question: '電話で「もしもし、ケンです。」と名乗るとき、正しい言い方を選びなさい。 ［I am Ken. / This is Ken.］',
        wrongAnswer: 'I am Ken.',
        trapExplanation: '「私はケンです」という日本語をそのまま英語にしてしまう。ふだんの自己紹介で I\'m Ken. と習っているため、電話でも同じでよいと考える。',
        correctAnswer: 'This is Ken.',
        correctExplanation:
          '電話では自分を名乗るとき This is Ken (speaking). と言う。相手を確かめるときも Is this Aya? と this を使う。顔が見えず、声だけで「この人」と示す言い方だと考えるとよい。人を紹介するときの This is … と同じ発想である。',
      },
      {
        question: '（　）に入る表現を選びなさい。 A: May I speak to Ken, please?　B: Sorry, he is out now. （　）（伝言をうかがいましょうか）',
        wrongAnswer: 'Can I leave a message?',
        trapExplanation: 'message を含む表現をまとめて覚えているため、take と leave の区別をせずに選んでしまう。どちらの立場が話しているかを読み取れていない。',
        correctAnswer: 'Can I take a message?',
        correctExplanation:
          '電話を受けた側が「伝言をうかがいましょうか」と言うときは take a message（伝言を受け取る）を使う。かけた側が「伝言をお願いできますか」と言うときは leave a message（伝言を残す）である。話しているのがどちらかを確かめてから選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s379',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話表現④：買い物での言い方',
    description: '店員と客のやりとり、値段・大きさ・色を伝える表現を身につける',
    intro: '店員の May I help you? は、そのまま訳せば「お手伝いしましょうか」ですが、実際は「いらっしゃいませ」にあたります。見ているだけのときは No, thank you. I am just looking. と返します。買い物の型を覚えます。',
    order: 879,
    studyPeriod: '小6後半・直前',
    targetLevel: 'oyo',
    keyPoints: [
      '店員の第一声は May I help you?／Can I help you?（いらっしゃいませ）',
      '客の答えは Yes, please. I\'m looking for …／No, thank you. I\'m just looking.',
      '値段は How much is it? — It\'s 1,500 yen.',
      '試着は Can I try it on?、サイズは Do you have a bigger one?',
      '買うと決めたら I\'ll take it.（これをください）',
      'one は前に出た名詞のくり返しをさける語。a red one（赤いの）。',
    ],
    sections: [
      {
        heading: '店でのやりとりの型',
        body: `買い物の会話は、次の流れをそのまま覚えておけば得点できる。

■ ①店員が声をかける
May I help you?／Can I help you?（いらっしゃいませ・何かおさがしですか。）

■ ②客が答える
Yes, please. I'm looking for a T-shirt.（Tシャツをさがしています。）
No, thank you. I'm just looking.（見ているだけです。）

■ ③商品について
Do you have this in blue?（これの青はありますか。）
Do you have a bigger one?（もっと大きいのはありますか。）
Can I try it on?（試着してもいいですか。）
— Sure. The fitting room is over there.

■ ④値段
How much is it?（いくらですか。）
— It's 1,500 yen.
How much are these shoes?（このくつはいくらですか。）
That's too expensive.（高すぎます。）
It's cheap.（安いです。）

■ ⑤決める
I'll take it.（これをください。）
I'll take two.（2つください。）
Here you are.（はい、どうぞ。）
Here's your change.（おつりです。）
Thank you. Come again.（ありがとうございました。またどうぞ。）

★ ポイント：買うと決めたときは I'll take it. または I'll buy it. と言う。I want it. は子どもっぽく、ていねいではない。`,
      },
      {
        heading: 'one の使い方と値段の言い方',
        body: `買い物の会話では、同じ名詞をくり返さずに one を使う。

■ one ＝ 前に出た名詞の代わり
I like this bag, but I don't like that one.（このかばんは好きだが、あれは好きではない。）← one ＝ bag
Do you have a smaller one?（もっと小さいのはありますか。）
This one is nice.（これがいいですね。）
複数なら ones を使う。I like the red ones.

★ ポイント：it と one のちがい
it … まったく同じもの（あのかばんそのもの）
one … 同じ種類の別のもの（同じ型の別のかばん）
例）I lost my pen, so I bought a new one.（ペンをなくしたので新しいのを買った。）← 別のペン
例）I like this pen. I'll take it.（このペンが気に入った。これをください。）← そのペン

■ 値段の言い方
It's 500 yen.（500円です。）※ yen は複数形にしない（× 500 yens）
It's three dollars.（3ドルです。）※ dollar は複数形になる
How much is this in total?（全部でいくらですか。）
Do you take credit cards?（クレジットカードは使えますか。）

■ 数量を言う
a bottle of juice（1本のジュース）／two kilos of meat（肉2キロ）／a dozen eggs（卵1ダース）
I'd like two hamburgers, please.（ハンバーガーを2つください。）
※ I'd like ＝ I would like で、I want よりていねい。

⚠ 注意：注文するときは I'd like …, please. の形が最もていねいで、入試の英作文でも安全である。`,
      },
    ],
    trapExamples: [
      {
        question: '「これはいくらですか。」を英語にしなさい。',
        wrongAnswer: 'How many is this?',
        trapExplanation: 'How many と How much を「たくさん」でひとまとめに覚えているため、値段にも many を使ってしまう。値段は数ではなく量だという感覚がない。',
        correctAnswer: 'How much is this?',
        correctExplanation:
          '値段をたずねるときは How much …? を使う。How many は数えられる名詞の数をたずねるときに使い、後ろに複数形の名詞が続く（How many apples …?）。値段は How much is it? / How much are these shoes? と主語の数で be動詞を変える。',
      },
      {
        question: '（　）に入る語を選びなさい。 I lost my umbrella, so I bought a new （　）.　［it / one］',
        wrongAnswer: 'it',
        trapExplanation: '前に出た umbrella を指すのだから it でよいと考えてしまう。it が「そのものずばり」を指す語だということを理解していない。',
        correctAnswer: 'one',
        correctExplanation:
          'なくしたかさとは別の新しいかさなので、同じ種類の別のものを表す one を使う。it は「まさにそのもの」を指すので、なくしたかさを買い直すことになってしまう。a new one、a bigger one、the red ones のように形容詞と組み合わせて使う。',
      },
    ],
  },

  {
    id: 'eigo_s380',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話表現⑤：道案内',
    description: '道をたずねる言い方と、道順を説明する表現を地図の場面で使いこなす',
    intro: '道案内は、たずねる側より答える側のほうが難しいものです。「二つ目の角を右」を英語で言うには、序数を使って at the second corner と表します。Go straight や Turn right とあわせ、地図の上で使えるようにします。',
    order: 880,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'たずね方は Excuse me. How can I get to …?／Where is …?',
      'Go straight（まっすぐ行く）／Turn right (left)（右／左に曲がる）。',
      '「2つ目の角を」は at the second corner と序数を使う。',
      '「左手に見えます」は You\'ll see it on your left.',
      '距離・時間は It\'s about five minutes on foot.／It takes ten minutes.',
      '答えられないときは I\'m sorry, I\'m a stranger here.（この辺りは不案内です）',
    ],
    sections: [
      {
        heading: '道をたずねる・答える',
        body: `道案内は地図を見て答える形で出題される。決まり文句を覚えれば必ず解ける。

■ たずねる
Excuse me. How can I get to the station?（駅にはどう行けばよいですか。）
Where is the post office?（郵便局はどこですか。）
Could you tell me the way to the library?（図書館への道を教えていただけますか。）
Is there a hospital near here?（この近くに病院はありますか。）

★ ポイント：知らない人に話しかけるときは、必ず Excuse me. から始める。

■ 道順を説明する
Go straight (down this street).（この道をまっすぐ行ってください。）
Turn right at the second corner.（2つ目の角を右に曲がってください。）
Turn left at the traffic light.（信号を左に曲がってください。）
Go straight for two blocks.（2ブロックまっすぐ行ってください。）
Cross the street.（道をわたってください。）
You'll see it on your right.（右手に見えます。）
It's on your left.（左手にあります。）
It's next to the bank.（銀行のとなりです。）
It's across from the school.（学校の向かいです。）

■ 距離・時間
It's about five minutes on foot.（歩いて5分ほどです。）
It takes ten minutes by bus.（バスで10分かかります。）
It's not far from here.（ここから遠くありません。）

■ お礼と返事
Thank you very much. — You're welcome.／My pleasure.

⚠ 注意：答えられないときは I'm sorry, I'm a stranger here.（この辺りは不案内です。）と言う。「見知らぬ人」ではなく「この土地に不案内な人」の意味である。`,
        figureId: 'lf_eigoext10_380',
      },
      {
        heading: '地図問題の解き方',
        body: `地図を見て「どこに着くか」を答える問題は、次の手順で解く。

■ 手順
①出発点（You are here. の位置）と、向いている方向を確認する。
②Go straight … で進む距離（ブロック数）を数える。
③Turn right / left で向きを変える。地図の上を向いているときの right は地図上の右、下を向いているときの right は地図上の左になることに注意する。
④on your right / left で最後の位置を決める。

■ 使われる語
block（区画）／corner（角）／traffic light, signal（信号）／crossing, intersection（交差点）／bridge（橋）／street, road（通り）／first, second, third（1つ目、2つ目、3つ目）

例）Go straight for two blocks and turn left at the corner. You'll see the library on your right. It's next to the park.
（2ブロックまっすぐ行き、角を左に曲がってください。右手に図書館が見えます。公園のとなりです。）

★ ポイント：角の数え方は序数を使う。at the first corner（1つ目の角で）／at the second traffic light（2つ目の信号で）。first・second・third を正確に読み取ることが得点の分かれ目になる。

⚠ 注意：on your right（あなたの右手に）の your を落とさない。on the right とも言うが、on right とは言わない。`,
      },
    ],
    trapExamples: [
      {
        question: '「2つ目の角を右に曲がってください。」を英語にしなさい。',
        wrongAnswer: 'Turn right at the two corner.',
        trapExplanation: '「2つ目」を数の two で表してしまう。順番を表すには序数が必要だという意識が働かず、日本語の「2つ目」を「2」と処理してしまう。',
        correctAnswer: 'Turn right at the second corner.',
        correctExplanation:
          '順番を表すときは序数を使い、the second corner とする。同じように the first traffic light（1つ目の信号）、the third street（3本目の通り）となる。序数の前には the を付けることも合わせて確認する。',
      },
      {
        question: '（　）に入る表現を選びなさい。 A: Excuse me. Where is the city hall?　B: （　） I don\'t know this area well.　［I\'m a stranger here. / I\'m fine, thank you.］',
        wrongAnswer: "I'm fine, thank you.",
        trapExplanation: 'あいさつの決まり文句を暗記しているため、場面を読まずにそれらしい表現を選んでしまう。後ろの文（この辺りをよく知らない）とのつながりを確かめていない。',
        correctAnswer: "I'm a stranger here.",
        correctExplanation:
          '道をたずねられて答えられないときは I\'m sorry, I\'m a stranger here.（この辺りは不案内です。）と言う。stranger は「見知らぬ人」ではなく「その土地に不案内な人」の意味である。後ろの I don\'t know this area well. とつながることを確かめれば選べる。',
      },
    ],
  },

  {
    id: 'eigo_s381',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話表現⑥：依頼・許可・提案・さそい',
    description: 'Can you …? / May I …? / Shall we …? / How about …? の使い分けを身につける',
    intro: 'Can you open the window? と Can I open the window? は、たった一語のちがいで意味が正反対になります。前者は相手にお願いし、後者は自分がしてよいかをたずねています。だれが動くのかで形を選び分けます。',
    order: 881,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '依頼（相手にしてもらう）は Can you …?／Could you …?（よりていねい）',
      '許可（自分がする）は Can I …?／May I …?（よりていねい）',
      'さそいは Let\'s …／Shall we …?／How about …?／Why don\'t we …?',
      'How about の後ろは名詞か -ing。How about going to the movies?',
      '申し出は Shall I …?（〜しましょうか）',
      '断るときは I\'m sorry, I can\'t. と理由を添える。',
    ],
    sections: [
      {
        heading: '依頼と許可を区別する',
        body: `Can you …? と Can I …? は形が似ているが、動作をする人がちがう。

■ 依頼＝相手にしてもらう（主語は you）
Can you open the window?（窓を開けてくれますか。）
Could you help me?（手伝っていただけますか。）← よりていねい
Will you pass me the salt?（塩を取ってくれますか。）
Would you say that again?（もう一度言っていただけますか。）
— Sure.／All right.／OK.／I'm sorry, I can't.

■ 許可＝自分がする（主語は I）
Can I use your pen?（ペンを使ってもいいですか。）
May I come in?（入ってもいいですか。）← よりていねい
— Sure.／Of course.／Go ahead.（どうぞ。）
— I'm sorry, you can't.

★ ポイント：Could / Would / May はていねいな形。目上の人や知らない人には Could you …?／May I …? を使う。

■ 申し出＝自分がしてあげる
Shall I open the window?（窓を開けましょうか。）
Shall I carry your bag?
— Yes, please.／No, thank you.

⚠ 注意：Can you …? と Can I …? は、日本語ではどちらも「〜してもいいですか／くれますか」となりやすい。主語を見て、動作をするのがどちらかを確かめる。`,
      },
      {
        heading: 'さそい方と答え方',
        body: `いっしょに何かをしようとさそう言い方は、いくつもある。形のちがいに注意する。

■ Let's ＋ 動詞の原形
Let's play tennis.（テニスをしましょう。）
— Yes, let's.／OK.／Sounds good.／That's a good idea.
— I'm sorry, I can't.

■ Shall we ＋ 動詞の原形?
Shall we go to the park?（公園に行きましょうか。）
— Yes, let's.

■ How about ＋ 名詞・-ing?
How about a cup of tea?（お茶はいかがですか。）
How about going to the movies?（映画に行くのはどうですか。）
⚠ 注意：about は前置詞なので、後ろに動詞を置くときは -ing にする。How about go … は誤り。

■ Why don't we …? / Why don't you …?
Why don't we have lunch together?（いっしょに昼食を食べませんか。）
Why don't you come with us?（いっしょに来ませんか。）
※ 「なぜ〜しないのか」ではなく、さそいの表現である。

■ Would you like …?（すすめる）
Would you like some coffee?（コーヒーはいかがですか。）
— Yes, please.／No, thank you.
Would you like to come to my party?（パーティーに来ませんか。）
— I'd love to.（ぜひ。）

★ ポイント：さそいを断るときは、I'm sorry, I can't. と言ってから理由を付けるとよい。
例）I'm sorry, I can't. I have to help my mother.`,
      },
    ],
    trapExamples: [
      {
        question: '「映画に行くのはどうですか。」を英語にしなさい。',
        wrongAnswer: 'How about go to the movies?',
        trapExplanation: 'How about を「〜はどうですか」という決まり文句として覚えているため、後ろに動詞の原形をそのまま続けてしまう。about が前置詞であることを意識していない。',
        correctAnswer: 'How about going to the movies?',
        correctExplanation:
          'about は前置詞なので、後ろに動詞を置くときは -ing の形にする。How about going …? となる。同じさそいでも Let\'s go to the movies.／Shall we go to the movies? は動詞の原形を使うので、形のちがいをセットで確認する。',
      },
      {
        question: '（　）に入る表現を選びなさい。 A: （　） help me with my homework?　B: Sure. What\'s the problem?　［Can you / Can I］',
        wrongAnswer: 'Can I',
        trapExplanation: '「手伝ってもらえますか」という日本語から、自分が主語だと考えて Can I を選んでしまう。動作をするのがだれかを確認していない。',
        correctAnswer: 'Can you',
        correctExplanation:
          '宿題を手伝うのは相手なので、依頼の Can you …? を使う。Can I …? は「私が〜してもよいですか」という許可を求める形で、Can I use your pen? のように使う。答えの Sure. What\'s the problem? からも、相手が手伝う側だと読み取れる。',
      },
    ],
  },
  // ───────────── 10. まぎらわしい語の使い分け（s382〜s385） ─────────────
  {
    id: 'eigo_s382',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まぎらわしい語①：see / look / watch',
    description: '「見る」を表す三つの動詞を、意識の強さと対象の動きで使い分ける',
    intro: 'テレビを見るのは watch、黒板を見るのは look at、星が見えるのは see。日本語ではどれも「見る」ですが、英語は意識の強さと、相手が動くかどうかで三つに分けます。この感覚をつかめば選びまちがえません。',
    order: 882,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'see ＝ 自然に目に入る（見える）。意識して見ようとしなくてよい。',
      'look (at) ＝ 意識して視線を向ける。動かないものを見るときに使う。',
      'watch ＝ 動くものをじっと見続ける。テレビ・試合・動物の動き。',
      'look は前置詞 at が必要。see・watch は前置詞なしで目的語をとる。',
      'テレビは watch TV、映画館の映画は see a movie。',
      '「〜に会う」も see を使う。I saw Ken yesterday.',
    ],
    sections: [
      {
        heading: '三つの「見る」のちがい',
        body: `英語では「見る」を表す動詞が三つあり、意識の強さと対象の動きで使い分ける。

■ see ＝ 目に入る・見える
自分から見ようとしなくても、自然に視界に入ることを表す。
例）I can see Mt. Fuji from my window.（窓から富士山が見える。）
例）Can you see the bird in that tree?（あの木の鳥が見えますか。）
※ 「見える」という状態なので、ふつう進行形にしない（× I am seeing …）。

■ look (at) ＝ 意識して視線を向ける
「そちらに目を向ける」という動作を表す。動かないものによく使う。
例）Look at the blackboard.（黒板を見なさい。）
例）Look at this picture.
⚠ 注意：look の後ろに見る対象を置くときは必ず at が必要である（× Look the blackboard.）。

■ watch ＝ 動くものをじっと見続ける
時間をかけて動きを追うことを表す。
例）I watch TV after dinner.（夕食後にテレビを見る。）
例）We watched a soccer game.（サッカーの試合を見た。）
例）Watch your step.（足元に気をつけて。）

★ ポイント：整理すると次のようになる。
・自然に目に入る → see
・止まっているものに視線を向ける → look at
・動いているものを追い続ける → watch`,
        figureId: 'lf_eigoext10_382',
      },
      {
        heading: 'まぎらわしい組み合わせ',
        body: `実際の入試では、次の組み合わせがくり返し問われる。

■ テレビと映画
watch TV（テレビを見る）… 家で動く画面を見続けるので watch
see a movie（映画を見る）… 映画館へ「見に行く」ので see
※ 家でテレビ放送の映画を見るときは watch a movie on TV とも言う。中学受験では「watch TV」「see a movie」の二つを覚えておけばよい。

■ 「会う」の see
see には「（人に）会う」という意味もある。
例）I saw Ken at the station yesterday.（昨日、駅でケンに会った。）
例）See you tomorrow.（また明日。）← 別れのあいさつも「また会おう」の意味
※ 約束して会うときは meet を使う。
例）I met her at the library at three.（3時に図書館で彼女と待ち合わせた。）
初対面は meet。Nice to meet you.

■ look の別の意味
look ＋ 形容詞（〜に見える）：You look tired.
look for（さがす）／look after（世話をする）／look like（〜に似ている）

■ 過去形
see → saw ／ look → looked ／ watch → watched
※ see は不規則変化。過去分詞は seen。

⚠ 注意：Look! と一語で「見て！」と言うことはできるが、対象を続けるときは at が必要になる。Look! There is a rainbow.（見て！ にじが出ている。）`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る語を選びなさい。 I （　） TV for two hours yesterday.　［saw / watched］',
        wrongAnswer: 'saw',
        trapExplanation: '「見た」＝ see の過去形 saw と、日本語から一対一で置きかえてしまう。テレビが「動くものを見続ける」対象だという区別ができていない。',
        correctAnswer: 'watched',
        correctExplanation:
          'テレビのように動く画面を時間をかけて見続けるときは watch を使う。see は「自然に目に入る」ことを表すので、I can see Mt. Fuji. のように使う。映画館で映画を見るときは see a movie となるので、watch TV とセットで覚える。',
      },
      {
        question: '「あの絵を見なさい。」を英語にしなさい。',
        wrongAnswer: 'Look that picture.',
        trapExplanation: '日本語の「絵を見る」に「を」があるので、look の後ろに直接目的語を置いてしまう。see や watch では前置詞が不要なので、look も同じだと考えてしまう。',
        correctAnswer: 'Look at that picture.',
        correctExplanation:
          'look は「視線を向ける」という動詞で、見る対象を示すには at が必要である。see と watch は前置詞なしで目的語をとる（see a movie、watch TV）。listen to（聞く）も同じく前置詞が要るので、look at / listen to をセットで覚える。',
      },
    ],
  },

  {
    id: 'eigo_s383',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まぎらわしい語②：hear / listen to と、その仲間',
    description: '「聞く」を表す動詞の使い分けと、感覚を表す動詞のきまりを整理する',
    intro: '音楽を聞くと言うとき、hear music と listen to music では意味がちがいます。前者は自然に耳に入ってくること、後者は自分から耳をかたむけることです。しかも listen には to が要ります。「聞く」の使い分けを整理します。',
    order: 883,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'hear ＝ 自然に耳に入る（聞こえる）。listen (to) ＝ 意識して聞く。',
      'listen には to が必要。hear は前置詞なしで目的語をとる。',
      'see / hear は「見える・聞こえる」という状態なので、ふつう進行形にしない。',
      'can see / can hear の can は「〜できる」と訳さないことが多い。',
      'hear from（〜から便りがある）／hear of, hear about（〜のうわさを聞く）。',
      '感覚を表す動詞：feel（感じる）・smell（においがする）・taste（味がする）＋形容詞。',
    ],
    sections: [
      {
        heading: 'hear と listen to',
        body: `「聞く」も、意識するかどうかで動詞が変わる。see と look at の関係とまったく同じである。

■ hear ＝ 自然に耳に入る
例）I can hear a bird singing.（鳥が鳴いているのが聞こえる。）
例）Did you hear that noise?（あの音が聞こえましたか。）
※ 前置詞は不要。hear the news、hear a sound。

■ listen (to) ＝ 意識して耳をかたむける
例）I listen to music every night.（毎晩音楽を聞く。）
例）Listen carefully.（よく聞きなさい。）
⚠ 注意：聞く対象を置くときは to が必要（× listen music）。対象を言わないときは Listen! だけでよい。

★ ポイント：see ⇔ look at と hear ⇔ listen to は同じ関係にある。
自然に入ってくる → see / hear（前置詞なし）
意識して向ける → look at / listen to（前置詞あり）

■ 進行形にしない
see・hear は「見える・聞こえる」という状態を表すので、ふつう進行形にしない。
例）I can hear you.（あなたの声が聞こえます。）
× I am hearing you.
一方 look・listen・watch は動作なので進行形にできる。
例）He is listening to the radio.

■ can の使い方
see・hear といっしょに使う can は「〜できる」と強く訳さなくてよい。
例）I can see the sea from here.（ここから海が見えます。）`,
      },
      {
        heading: 'hear の熟語と、感覚を表す動詞',
        body: `hear は前置詞と組んでいろいろな意味になる。

■ hear の熟語
hear from ＋ 人（〜から便り・連絡がある）
　例）I heard from my friend in America.（アメリカの友達から便りがあった。）
hear of ／ hear about（〜のうわさを聞く・〜について耳にする）
　例）I've never heard of that singer.（その歌手のことは聞いたことがない。）
hear ＋ 人 ＋ 動詞の原形／-ing（人が〜するのが聞こえる）
　例）I heard someone call my name.（だれかが私の名前を呼ぶのが聞こえた。）

■ 感覚を表す動詞＋形容詞
feel（感じる）／smell（においがする）／taste（味がする）／sound（聞こえる）／look（見える）
これらは後ろに形容詞を置いて「〜のように感じる・思われる」と使う。
例）I feel sick.（気分が悪い。）
例）This flower smells good.（この花はよいにおいがする。）
例）This soup tastes salty.（このスープはしょっぱい。）
例）That sounds good.（それはよさそうだね。）← さそいへの返事に使う
例）You look tired.（つかれているようだね。）

★ ポイント：後ろが名詞のときは like を付ける。
例）It sounds like a good idea.／It tastes like chicken.
形容詞なら like なし、名詞なら like あり。look / look like と同じきまりである。

■ 過去形
hear → heard（つづりに注意。heared とはしない）／listen → listened／feel → felt`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎晩、音楽を聞きます。」を英語にしなさい。',
        wrongAnswer: 'I listen music every night.',
        trapExplanation: '日本語の「音楽を聞く」の「を」につられて、listen の後ろに直接目的語を置いてしまう。hear the news では前置詞が不要なので、同じでよいと考えてしまう。',
        correctAnswer: 'I listen to music every night.',
        correctExplanation:
          'listen は「耳をかたむける」という動詞で、聞く対象を示すには to が必要である。hear は前置詞なしで目的語をとる（hear a sound）。look at / listen to は前置詞あり、see / hear / watch は前置詞なし、と対にして覚える。',
      },
      {
        question: '（　）に入る語を選びなさい。 That sounds （　）. Let\'s do it!　［good / like good］',
        wrongAnswer: 'like good',
        trapExplanation: 'sounds like という形を覚えているため、後ろの語が形容詞か名詞かを確かめずに like を付けてしまう。look like の形に引きずられるのも原因。',
        correctAnswer: 'good',
        correctExplanation:
          'good は形容詞なので like を付けず、That sounds good. とする。like が必要なのは後ろに名詞が来るときだけである（It sounds like a good idea.）。look / look like、taste / taste like も同じきまりで判断する。',
      },
    ],
  },

  {
    id: 'eigo_s384',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まぎらわしい語③：speak / talk / say / tell',
    description: '「言う・話す」を表す四つの動詞を、後ろに来る語の形で使い分ける',
    intro: '「英語を話す」は speak English、「友だちと話す」は talk with my friend、「さようならと言う」は say goodbye、「わたしに話す」は tell me。日本語では同じ「話す・言う」でも、うしろに来る語の形で四つに分かれます。',
    order: 884,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'speak ＝ 声を出して話す。言語とともに使う（speak English）。',
      'talk ＝ 会話する。talk with / talk to ＋ 人、talk about ＋ 話題。',
      'say ＝ 言った「内容」を言う。say ＋ 内容（人を直接置かない）。',
      'tell ＝ 人に伝える。tell ＋ 人 ＋ 内容 の順に置く。',
      'say to ＋ 人、tell ＋ 人（to は不要）という語順のちがいが最重要。',
      'tell a lie（うそをつく）／tell the truth（本当のことを言う）／say hello to（よろしく伝える）。',
    ],
    sections: [
      {
        heading: '四つの動詞の語順',
        body: `「話す・言う」を表す動詞は、後ろに何を置くかが動詞ごとに決まっている。語順で覚えるのがいちばん確実である。

■ speak ＋ 言語 ／ speak to ＋ 人
He speaks English very well.（彼は英語を上手に話す。）
May I speak to Mr. Brown?（ブラウンさんとお話しできますか。）
※ 一方的に声を出す・言語を話す、というイメージ。

■ talk with / to ＋ 人 ／ talk about ＋ 話題
I talked with my friend for an hour.（友達と1時間話した。）
We talked about our summer vacation.（夏休みについて話した。）
※ おたがいに会話するイメージ。

■ say ＋ 内容（人を直接置かない）
He said, "Good morning."（彼は「おはよう」と言った。）
She said that she was tired.（彼女はつかれていると言った。）
人を入れたいときは to を使う。
He said to me, "Hello."（× He said me …）

■ tell ＋ 人 ＋ 内容（to は不要）
He told me the story.（彼は私にその話をした。）
Please tell me your name.（名前を教えてください。）
Tell him to call me.（彼に電話するように伝えて。）
※ tell の後ろにはまず「だれに」が来る。

★ ポイント：say と tell の語順のちがいが最大の要点である。
say to ＋ 人 ＋ 内容 ／ tell ＋ 人 ＋ 内容（to なし）`,
        figureId: 'lf_eigoext10_384',
      },
      {
        heading: '熟語と使い分けの練習',
        body: `それぞれの動詞には決まった言い方がある。

■ say の熟語
say hello to ＋ 人（〜によろしくと伝える）
　例）Please say hello to your mother.（お母さんによろしく。）
say good-bye（さようならを言う）
Say it again, please.（もう一度言ってください。）
How do you say this in English?（これは英語で何と言いますか。）

■ tell の熟語
tell a lie（うそをつく）／tell the truth（本当のことを言う）／tell a story（話をする）／tell ＋ 人 ＋ the way（道を教える）
　例）Could you tell me the way to the station?（駅への道を教えていただけますか。）
　例）Don't tell a lie.（うそをついてはいけない。）

■ speak の熟語
speak English / Japanese（英語・日本語を話す）
speak slowly（ゆっくり話す）
Could you speak more slowly?（もっとゆっくり話していただけますか。）

■ talk の熟語
talk about（〜について話す）／talk with（〜と話す）／talk on the phone（電話で話す）

■ 使い分けの見分け方
①後ろに言語がある → speak
②後ろに人だけ、または about がある → talk
③後ろに「言った内容」だけがある → say
④後ろに「人＋内容」がある → tell

⚠ 注意：「私に教えて」は tell me、「私に言った」は said to me。日本語では区別しにくいので、英語の語順で判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は私にその話をしてくれた。」を英語にしなさい。',
        wrongAnswer: 'He said me the story.',
        trapExplanation: 'say を「言う」と覚えているため、「私に言った」をそのまま said me としてしまう。tell との語順のちがいを整理していないのが原因。',
        correctAnswer: 'He told me the story.',
        correctExplanation:
          'say の後ろには人を直接置けない。人を入れるときは said to me のように to が必要である。「人＋内容」の順に置けるのは tell で、He told me the story. となる。say ＋ 内容／tell ＋ 人 ＋ 内容、と語順で覚える。',
      },
      {
        question: '（　）に入る語を選びなさい。 My father can （　） three languages.　［talk / speak］',
        wrongAnswer: 'talk',
        trapExplanation: '「話す」＝ talk と一対一で覚えているため、言語が後ろに来ても talk を選んでしまう。talk が「会話する」という意味だと理解していない。',
        correctAnswer: 'speak',
        correctExplanation:
          '言語を話す能力を表すときは speak を使う（speak English、speak three languages）。talk は人と会話することを表し、talk with my friend、talk about the movie のように使う。後ろに言語があれば speak、と判断する。',
      },
    ],
  },

  {
    id: 'eigo_s385',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まぎらわしい語④：borrow / lend と bring / take',
    description: '貸し借りと持ち運びの動詞を、動きの向きから正しく選べるようにする',
    intro: '「消しゴムを借りていい？」を Can I rent your eraser? と言うと、お金を払う話になってしまいます。無料で持っていくなら borrow、その場で使うだけなら use です。貸し借りと持ち運びの動詞を、向きと場面で選び分けます。',
    order: 885,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'borrow ＝ 借りる（自分のほうへ来る）／lend ＝ 貸す（自分から出ていく）。',
      'borrow ＋ もの ＋ from ＋ 人／lend ＋ 人 ＋ もの。',
      'bring ＝ 話し手のほうへ持ってくる／take ＝ 話し手から離れて持っていく。',
      'come / go と同じく、話し手を基準にした向きで決まる。',
      'use は「その場で使う」。電話やトイレは borrow ではなく use。',
      'teach（教える）と tell（伝える）、learn（習う）と study（勉強する）も対で確認する。',
    ],
    sections: [
      {
        heading: 'borrow と lend',
        body: `貸し借りの動詞は、ものが動く向きで決まる。

■ borrow ＝ 借りる（相手から自分へ）
Can I borrow your eraser?（消しゴムを借りてもいいですか。）
I borrowed two books from the library.（図書館で本を2冊借りた。）
※ 形：borrow ＋ もの ＋ from ＋ 人・場所

■ lend ＝ 貸す（自分から相手へ）
Can you lend me your pen?（ペンを貸してくれますか。）
I lent him my bike.（彼に自転車を貸した。）
※ 形：lend ＋ 人 ＋ もの、または lend ＋ もの ＋ to ＋ 人
※ 過去形は lent。

★ ポイント：主語がどちらの立場かを見る。「私が借りる」なら I borrow …、「私が貸す」なら I lend …。日本語の「貸して」を英語にするときは、たのむ相手（you）が貸すので Can you lend me …? となる。

■ use（使う）との区別
その場で使うだけで持ち去らないものには use を使う。
例）May I use your phone?（電話をお借りしてもいいですか。）
例）May I use the restroom?（トイレをお借りしてもいいですか。）
⚠ 注意：日本語では「借りる」と言うが、持ち去らないものに borrow は使わない。電話・トイレ・机は use である。

■ そのほかの対
buy（買う）⇔ sell（売る）／teach（教える）⇔ learn（習う）／give（与える）⇔ receive（受け取る）`,
        figureId: 'lf_eigoext10_385',
      },
      {
        heading: 'bring と take',
        body: `「持っていく・持ってくる」も、話し手を基準にした向きで決まる。come と go の関係と同じである。

■ bring ＝ 話し手（または話題の中心）のいる場所へ持ってくる
Bring your textbook to school tomorrow.（明日、教科書を学校に持ってきなさい。）← 先生が学校で言う
Please bring some snacks to the party.（パーティーにおかしを持ってきてください。）
Bring me the newspaper.（新聞を持ってきて。）

■ take ＝ 話し手のいる場所から離れたところへ持っていく
Take this umbrella with you.（このかさを持っていきなさい。）
Don't forget to take your lunch.（弁当を持っていくのを忘れないで。）
He took his dog to the park.（彼は犬を公園に連れていった。）

★ ポイント：come / go と同じ考え方である。
自分のほう・相手のほうへ → come / bring
自分から離れて → go / take

例）Can I bring my friend to your party?（あなたのパーティーに友達を連れていってもよいですか。）
※ 相手のいるパーティーへ向かうので bring を使う。日本語では「連れていく」だが英語では bring になる。ここが最大の注意点である。

■ 人を連れていく・連れてくる
take ＋ 人 ＋ to ＋ 場所（連れていく）
bring ＋ 人 ＋ to ＋ 場所（連れてくる）
例）My mother took me to the hospital.（母は私を病院へ連れていった。）

■ 過去形
bring → brought ／ take → took ／ borrow → borrowed ／ lend → lent
※ brought のつづりは要注意。bringed とはしない。`,
      },
    ],
    trapExamples: [
      {
        question: '「ペンを貸してくれますか。」を英語にしなさい。',
        wrongAnswer: 'Can you borrow me your pen?',
        trapExplanation: '「貸して」という日本語が「借りたい」という気持ちを表すため、borrow を選んでしまう。主語が you（貸す側）であることに注意が向かない。',
        correctAnswer: 'Can you lend me your pen?（または Can I borrow your pen?）',
        correctExplanation:
          '動作をするのは you なので「貸す」の lend を使い、Can you lend me your pen? とする。自分を主語にするなら Can I borrow your pen? となる。主語がどちらの立場かを確かめてから動詞を選ぶ。borrow ＋ もの ＋ from ＋ 人、lend ＋ 人 ＋ もの の語順も合わせて覚える。',
      },
      {
        question: '「あなたのパーティーに友達を連れていってもいいですか。」を英語にしなさい。',
        wrongAnswer: 'Can I take my friend to your party?',
        trapExplanation: '日本語が「連れていく」なので take を選んでしまう。bring / take が話し手ではなく「向かう先にだれがいるか」で決まることを理解していない。',
        correctAnswer: 'Can I bring my friend to your party?',
        correctExplanation:
          '相手（you）のいるパーティーへ向かうので、相手のほうへ近づく bring を使う。take は話し手からも相手からも離れた場所へ持っていく・連れていくときに使う。I\'m coming!（今行きます）で come を使うのと同じ考え方である。',
      },
    ],
  },
];
