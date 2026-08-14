import type { Lesson } from './lesson-types';

// 中学受験 英語「形容詞・副詞・比較」拡張ユニット（35セッション：eigo_s226〜eigo_s260）
// order は 726〜760。
// 構成：形容詞の2つの働きと語順(4)／数量を表す形容詞(5)／副詞の働きと位置(3)／
//       頻度の副詞(3)／比較級・最上級のつくり方(5)／不規則変化(3)／
//       原級比較 as〜as(4)／比較級を使った表現(4)／最上級の表現(4)
// 図解は「度合い」「語順」「大小関係」など、図にすることで本当に理解が進む箇所にだけ
// 付けてある（35課中15課、lesson-figs-eigo-ext07.ts）。
export const eigoExt07Lessons: Lesson[] = [
  // ───────────────── 1. 形容詞の2つの働きと語順（s226〜s229） ─────────────────
  {
    id: 'eigo_s226',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞のはたらき①：名詞を前から説明する（限定用法）',
    description: '形容詞が名詞の直前に置かれて「どんな〜」を説明する使い方と、冠詞との語順を身につける',
    intro: '「赤い車」は a red car です。ここで red a car とは言えません。日本語では「その赤い車」も「赤いその車」も通じますが、英語では a や the が必ず形容詞より前に来ます。名詞の前にならぶ語には、動かせない順番があるのです。',
    order: 726,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '形容詞は「どんな」を表す語。名詞の直前に置いて名詞を説明する（限定用法）。',
      '語順は〈冠詞・所有格＋形容詞＋名詞〉。a big dog であって big a dog ではない。',
      'a と an は、次に来る語の「音」で決める。形容詞が入れば形容詞の音で決まる（an old dog）。',
      'useful・university は「ユ」の音で始まるので a useful book / a university。',
      '複数形の名詞についても形容詞の形は変わらない（beautiful flowers。beautifuls とはしない）。',
    ],
    sections: [
      {
        heading: '形容詞は名詞の前に置く',
        body: `形容詞とは「大きい」「新しい」「親切な」のように、人やものが「どんなものか」を表す語である。英語の形容詞には二つの使い方があり、そのうちの一つが名詞のすぐ前に置いて名詞を説明する使い方で、これを限定用法という。

例）a big dog（大きな犬）／an old book（古い本）／beautiful flowers（美しい花）／my new bike（私の新しい自転車）

日本語でも「大きな犬」と、説明する語が名詞の前に来る。ここは日本語と英語の語順が一致するので覚えやすい。

■ 冠詞・所有格は形容詞よりさらに前
まちがえやすいのが a・an・the・my・your などとの順番である。これらは必ず形容詞よりも前に置く。

正）a big dog／an interesting story／the tall boy／my new bike
誤）big a dog／interesting an story／tall the boy／new my bike

日本語では「大きな一匹の犬」と言えてしまうため、a を形容詞のあとに置く誤りが非常に多い。〈a → 形容詞 → 名詞〉という並びを声に出して覚えてしまうとよい。

■ 名詞が複数形でも形容詞は変化しない
名詞が複数になっても形容詞に s は付かない。

正）three big apples／beautiful flowers／two new pencils
誤）three bigs apples／beautifuls flowers

★ ポイント：英語の形容詞は「数」でも「男女」でも形が変わらない。変わるのは名詞のほうだけである。`,
      },
      {
        heading: 'a と an は「音」で決める',
        body: `a と an の使い分けは「つづり」ではなく「次に来る語の発音」で決まる。母音の音（ア・イ・ウ・エ・オ）で始まる語の前では an を使う。

例）an apple／an egg／an ice cream／an orange／an umbrella

■ 形容詞が入ると、判断するのは形容詞の音
名詞の前に形容詞が入った場合、a か an かを決めるのは名詞ではなく、すぐ後ろに来る形容詞の音である。

例）an old dog（dog は子音で始まるが、直後の old が母音の音なので an）
例）a big apple（apple は母音で始まるが、直後の big が子音の音なので a）

■ つづりにだまされない語
つづりが母音字で始まっていても、発音が「ユ」や「ワ」で始まる語には a を使う。

例）a useful book（ユースフル）／a university（ユニバーシティ）／a uniform（ユニフォーム）／a European country（ユーロピアン）

逆に、つづりが子音字でも発音が母音で始まる語には an を使う。

例）an hour（アウア。h を発音しない）／an honest boy（オネスト）

⚠ 注意：「an useful book」は入試で頻出のひっかけ。useful は母音字 u で始まるが、発音は「ユ」なので a が正しい。`,
      },
    ],
    trapExamples: [
      {
        question: '「大きな犬」を英語にしなさい。',
        wrongAnswer: 'big a dog',
        trapExplanation: '日本語の「大きな一匹の犬」という語順や、「big（大きな）」をまず言いたい気持ちに引っぱられて、a を形容詞のあとに置いてしまう。',
        correctAnswer: 'a big dog',
        correctExplanation:
          '英語の語順は〈冠詞・所有格＋形容詞＋名詞〉と決まっている。a・an・the・my・your などは、形容詞よりも必ず前に置く。同じように「私の新しい自転車」は my new bike であって new my bike ではない。',
      },
      {
        question: '（　）に a か an を入れなさい。（　）useful book',
        wrongAnswer: 'an useful book',
        trapExplanation: 'useful がつづり上は母音字 u で始まるので、機械的に an を選んでしまう。「母音字なら an」と、つづりだけで覚えていると引っかかる。',
        correctAnswer: 'a useful book',
        correctExplanation:
          'a と an はつづりではなく発音で決まる。useful の発音は「ユースフル」で、子音の「ユ」の音から始まるので a を使う。同じ仲間に a university、a uniform、a European country がある。逆に an hour（アウア）は h を発音しないため an になる。',
      },
    ],
  },

  {
    id: 'eigo_s227',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞の語順：形容詞を二つ以上ならべるとき',
    description: '数量詞・評価・大小・新旧・色といった形容詞の並び順を、決まった順番として覚える',
    intro: '「大きな古い茶色のいす」を英語にすると a big old brown chair となります。順番を変えて a brown old big chair とすると、とたんに英語らしくなくなります。英語には形容詞をならべる決まった順番があり、話し手は考えずにその順で口にしているのです。',
    order: 727,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '形容詞をならべる順番は〈数量・冠詞〉→〈評価〉→〈大小〉→〈新旧〉→〈色〉→〈材料・出身〉→名詞。',
      'a・the・my・two などの数量を表す語は、どんなときでも列の先頭に置く。',
      '色を表す形容詞は名詞のいちばん近くに置く（big red apples）。',
      '中学入試では形容詞を三つ以上ならべることはまれ。二つの順番を確実にする。',
      '同じ種類の形容詞を並べるときは and でつなぐ（a big and heavy bag）。',
    ],
    sections: [
      {
        heading: '形容詞をならべる順番',
        body: `形容詞は一つの名詞に二つ以上つけることができる。そのとき英語では並べる順番がほぼ決まっており、順番を入れかえると不自然になる。

■ 基本の順番
〈冠詞・所有格・数〉→〈評価（よい・すてきな）〉→〈大きさ〉→〈新しさ・年齢〉→〈色〉→〈材料・出身〉→〈名詞〉

例）two big red apples（大きな赤いりんご2個）
例）a beautiful old temple（美しい古いお寺）
例）my new blue bike（私の新しい青い自転車）
例）a nice small Japanese car（すてきな小さい日本車）

日本語では「赤くて大きなりんご」でも「大きくて赤いりんご」でも自然だが、英語では big red apples の順が普通で、red big apples とは言わない。色は名詞のいちばん近くに置くと覚える。

■ 数量・冠詞は必ず先頭
a・an・the・my・your・his・two・three・some などは、形容詞より前の先頭に置く。

正）my new bike／three big apples／some old books
誤）new my bike／big three apples／old some books

★ ポイント：中学入試で問われるのは形容詞二つまでがほとんど。「数や a は先頭」「色は名詞のとなり」の二点をおさえれば、ほぼ正解できる。`,
        figureId: 'lf_eigoext07_227',
      },
      {
        heading: '同じ種類の形容詞は and でつなぐ',
        body: `並べる形容詞が同じ種類（どちらも大きさ、どちらも性格など）である場合は、間に and を入れる。

例）a big and heavy bag（大きくて重いかばん）
例）She is kind and gentle.（彼女は親切でおだやかだ）
例）a long and boring movie（長くて退屈な映画）

種類がちがう場合は and を入れずにそのまま並べる。

例）a big red ball（大きな赤いボール。大きさと色でちがう種類）

■ 三つ以上ならべるとき
文の途中で三つ以上ならべる場合は、コンマでつなぎ、最後だけ and にする。

例）She is kind, cheerful, and honest.（彼女は親切で明るく正直だ）

■ 数を表す語との組み合わせ
数を表す語（two, three, some, many）は、他の形容詞より前に来る。

例）many beautiful flowers（たくさんの美しい花）
例）three small white dogs（3匹の小さな白い犬）

⚠ 注意：「たくさんの美しい花」を beautiful many flowers としないこと。many のような数量の語は必ず前に出す。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の新しい自転車」を英語にしなさい。',
        wrongAnswer: 'new my bike',
        trapExplanation: '日本語の「新しい／私の／自転車」という語感のまま、説明したい語（new）を先に出してしまう。形容詞は名詞の前という規則だけを覚えていると、my も形容詞と同じ位置に置いてしまう。',
        correctAnswer: 'my new bike',
        correctExplanation:
          'my・your・his などの所有格は、a・the と同じ仲間で、形容詞よりさらに前の先頭に置く。〈所有格→形容詞→名詞〉の順である。同じように「あなたの古いかばん」は your old bag となる。',
      },
      {
        question: '「3個の大きな赤いりんご」を英語にしなさい。',
        wrongAnswer: 'three red big apples',
        trapExplanation: '日本語では「赤くて大きい」も「大きくて赤い」も自然なので、そのまま英語に置きかえて red を先に出してしまう。',
        correctAnswer: 'three big red apples',
        correctExplanation:
          '英語では〈大きさ→色→名詞〉の順が決まっている。色を表す形容詞は名詞のいちばん近くに置く。数を表す three はもっとも前である。「大きな白い犬」なら a big white dog となる。',
      },
    ],
  },

  {
    id: 'eigo_s228',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞のはたらき②：be動詞のあとで説明する（叙述用法）',
    description: 'be動詞や look・sound などのあとに置かれ、主語の様子を説明する形容詞の使い方を理解する',
    intro: 'This soup is hot. と This is hot soup. — どちらも熱いスープの話ですが、前者は be動詞のあと、後者は名詞の前に hot があります。形容詞には二つの居場所があるのです。さらに look や sound のあとにも入ります。どこに置けるのかを整理します。',
    order: 728,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '〈主語＋be動詞＋形容詞〉で「主語は〜だ」を表す（叙述用法）。',
      'look・sound・feel・taste・smell・become・get のあとにも形容詞が来る。',
      'これらの動詞のあとを副詞にしてはいけない（You look happy. であって happily ではない）。',
      '日本語の「〜だ」に引かれて be動詞を落とさない（This book is interesting.）。',
      '同じ形容詞が限定用法にも叙述用法にも使えるのが普通（a kind boy / He is kind.）。',
    ],
    sections: [
      {
        heading: 'be動詞のあとに置く形容詞',
        body: `形容詞のもう一つの使い方が、be動詞のあとに置いて主語の様子を説明する使い方で、これを叙述用法という。

例）This flower is beautiful.（この花は美しい）
例）He is kind.（彼は親切だ）
例）They are busy.（彼らは忙しい）
例）The test was easy.（そのテストは簡単だった）

限定用法との関係を見比べるとわかりやすい。

限定用法）He is a kind boy.（彼は親切な少年だ）＝ kind が boy を説明
叙述用法）He is kind.（彼は親切だ）＝ kind が主語 He を説明

■ be動詞を落とさない
日本語の「この本はおもしろい」には「〜だ」にあたる語がはっきり出てこないため、英語でも be動詞を落としてしまう誤りが非常に多い。

正）This book is interesting.
誤）This book interesting.

英語では「〜は〜だ」という文に必ず動詞が必要である。形容詞だけでは文にならない。

■ 主語に合わせて be動詞を選ぶ
I am／You are／He is／They are と、主語によって be動詞の形が変わる点も忘れない。

例）I am hungry.／You are tired.／She is happy.／We are ready.

★ ポイント：形容詞を見たら「これは名詞を説明しているのか、主語を説明しているのか」と自分に問う。名詞の前なら限定用法、be動詞のあとなら叙述用法である。`,
      },
      {
        heading: 'look・sound・feel などのあとも形容詞',
        body: `be動詞のほかにも、あとに形容詞を置いて主語の様子を説明する動詞がある。中学入試でよく出るのは次の動詞である。

look（〜に見える）／sound（〜に聞こえる）／feel（〜に感じる）／taste（〜の味がする）／smell（〜のにおいがする）／become・get（〜になる）

例）You look happy.（あなたはうれしそうに見える）
例）That sounds interesting.（それはおもしろそうだ）
例）I feel sick.（気分が悪い）
例）This cake tastes good.（このケーキはおいしい）
例）These flowers smell sweet.（この花はよい香りがする）
例）It is getting cold.（寒くなってきた）
例）He became famous.（彼は有名になった）

■ ここを副詞にしてはいけない
「うれしそうに見える」の「〜そうに」につられて happily としてしまう誤りが非常に多い。

正）You look happy.
誤）You look happily.

これらの動詞のあとに来る語は、動作のしかたを説明しているのではなく、主語がどんな状態かを説明している。だから形容詞でなければならない。

■ look at との区別
look のあとに at が付くと「〜を見る」という動作の意味になり、そのときは副詞で修飾する。

例）He looked at me carefully.（彼は私を注意深く見た）

⚠ 注意：〈look＋形容詞〉は「〜に見える」、〈look at＋名詞〉は「〜を見る」。at があるかないかで意味も後ろの品詞も変わる。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは幸せそうに見える。」を英語にしなさい。',
        wrongAnswer: 'You look happily.',
        trapExplanation: '日本語の「幸せそうに」の「〜に」を副詞のしるしだと考え、happy を happily に変えてしまう。副詞は動詞を説明するもの、という規則を機械的にあてはめた結果の誤り。',
        correctAnswer: 'You look happy.',
        correctExplanation:
          'look・sound・feel・taste・smell のあとに来る語は、主語がどんな状態かを説明するので形容詞になる。You と happy が「あなた＝幸せ」という関係になっている。同じく That sounds interesting.、This cake tastes good. も形容詞である。',
      },
      {
        question: '「この本はおもしろい。」を英語にしなさい。',
        wrongAnswer: 'This book interesting.',
        trapExplanation: '日本語では「この本はおもしろい」に動詞らしい語が見あたらないため、英語でも be動詞が要らないと感じてしまう。',
        correctAnswer: 'This book is interesting.',
        correctExplanation:
          '英語の文には必ず動詞が必要である。〈主語＋be動詞＋形容詞〉で「〜は…だ」を表すので、is を落としてはいけない。主語が複数なら These books are interesting. となる。',
      },
    ],
  },

  {
    id: 'eigo_s229',
    subject: 'eigo',
    examType: 'chugaku',
    title: '-ing・-ed の形容詞と、something のあとに置く形容詞',
    description: 'exciting と excited の使い分け、および -thing で終わる語を後ろから説明する語順を身につける',
    intro: 'I\'m exciting. と言うと、「私は人をわくわくさせる人です」という意味になってしまいます。言いたいのが「わくわくしている」なら I\'m excited. です。-ing と -ed のちがいが、そのまま「させる側」と「される側」のちがいになります。',
    order: 729,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '-ing の形容詞は「（もの・ことが）〜させる」、-ed の形容詞は「（人が）〜させられた気持ち」。',
      'The game was exciting.（試合がわくわくさせる）／I was excited.（私がわくわくした）。',
      'interesting/interested、surprising/surprised、boring/bored、tiring/tired も同じ関係。',
      'something・anything・nothing を説明する形容詞は後ろに置く（something cold）。',
      '〈something＋形容詞＋to 不定詞〉の順（something cold to drink）。',
    ],
    sections: [
      {
        heading: 'exciting と excited のちがい',
        body: `動詞から作られた -ing・-ed の形は、そのまま形容詞として使うことができる。二つの形の意味のちがいをはっきりさせておく。

■ -ing の形容詞＝「（人を）〜させるような」
もの・こと・できごとが主語になる。

例）The game was exciting.（その試合はわくわくするものだった）
例）This book is interesting.（この本はおもしろい）
例）The news was surprising.（その知らせは驚くべきものだった）
例）The movie was boring.（その映画は退屈だった）

■ -ed の形容詞＝「〜させられた気持ちだ」
人が主語になる。

例）I was excited.（私はわくわくした）
例）I am interested in science.（私は理科に興味がある）
例）We were surprised at the news.（私たちはその知らせに驚いた）
例）He was bored.（彼は退屈していた）

■ 見分け方
主語が人か、もの・ことかで決める。「試合」がわくわくさせる側、「私」がわくわくさせられる側である。

例）I was excited about the exciting game.（私はそのわくわくする試合に興奮した）

この一文に両方の形が出ているので、まるごと覚えてしまうとよい。

★ ポイント：be interested in ~（〜に興味がある）、be surprised at ~（〜に驚く）は前置詞ごと熟語で覚える。`,
      },
      {
        heading: 'something を説明する形容詞は後ろ',
        body: `形容詞は名詞の前に置くのが原則だが、-thing・-body・-one で終わる語を説明するときだけは後ろに置く。

例）something cold（何か冷たいもの）
例）anything interesting（何かおもしろいもの）
例）nothing special（特別なことは何もない）
例）someone kind（だれか親切な人）

例文）I want something cold to drink.（何か冷たい飲み物がほしい）
例文）Did you see anything strange?（何か変なものを見ましたか）
例文）Nothing special happened yesterday.（昨日は特に何も起こらなかった）

■ to 不定詞が続くときの語順
〈something＋形容詞＋to＋動詞の原形〉の順になる。形容詞が先、to 不定詞が後である。

正）something cold to drink（何か冷たい飲み物）
誤）something to drink cold
誤）cold something to drink

例）I have something important to tell you.（あなたに話す大事なことがある）
例）Give me something hot to eat.（何か温かい食べ物をください）

■ 疑問文・否定文では anything
something は肯定文、anything は疑問文・否定文で使うのが原則である。

例）I have something to do.／Do you have anything to do?／I don't have anything to do.

⚠ 注意：この後置の規則は -thing・-body・-one で終わる語だけ。ふつうの名詞には使えない（cold water を water cold とは言わない）。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はその試合にわくわくした。」を英語にしなさい。',
        wrongAnswer: 'I was exciting.',
        trapExplanation: '日本語の「わくわくした」がそのまま exciting に見えるうえ、-ing のほうがよく目にする形なので選んでしまう。しかし I was exciting. は「私は（他人を）わくわくさせる人だった」という意味になってしまう。',
        correctAnswer: 'I was excited about the game.',
        correctExplanation:
          '人が「〜させられた気持ち」を表すときは -ed の形を使う。わくわくさせているのは試合のほうなので、The game was exciting. と I was excited. がセットになる。interested / interesting、surprised / surprising も同じ関係である。',
      },
      {
        question: '「何か冷たい飲み物がほしい。」を英語にしなさい。',
        wrongAnswer: 'I want cold something to drink.',
        trapExplanation: '「形容詞は名詞の前」という原則をそのままあてはめて、cold を something の前に置いてしまう。',
        correctAnswer: 'I want something cold to drink.',
        correctExplanation:
          '-thing・-body・-one で終わる語を説明する形容詞だけは、例外的に後ろに置く。さらに to 不定詞が続くときは〈something＋形容詞＋to＋動詞の原形〉の順になる。something hot to eat、something important to tell you も同じ形である。',
      },
    ],
  },

  // ───────────────── 2. 数量を表す形容詞（s230〜s234） ─────────────────
  {
    id: 'eigo_s230',
    subject: 'eigo',
    examType: 'chugaku',
    title: '数えられる名詞・数えられない名詞と many / much',
    description: '可算名詞・不可算名詞の区別をもとに、many と much を正しく使い分ける',
    intro: '「本がたくさんある」は many books、「水がたくさんある」は much water です。日本語ではどちらも「たくさん」ですみます。英語では、一つ二つと数えられるかどうかで語を選び分けるのです。まずは名詞を二つの仲間に分けるところから始めます。',
    order: 730,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'many＋数えられる名詞の複数形（many books）／much＋数えられない名詞（much water）。',
      'water・milk・money・time・homework・information・bread・rice・news は数えられない名詞。',
      '数えられない名詞は複数形にしない（homeworks・informations とは言わない）。',
      'much は肯定文ではあまり使わず、ふつう a lot of を使う（I have a lot of money.）。',
      '数えられない名詞を数えるときは容器や単位を使う（a glass of water, two cups of tea）。',
    ],
    sections: [
      {
        heading: '数えられる名詞と数えられない名詞',
        body: `英語の名詞は「一つ、二つと数えられるもの」と「数えられないもの」に分かれる。この区別が数量を表す形容詞の使い分けの土台になる。

■ 数えられる名詞（可算名詞）
形がはっきりしていて一つ二つと数えられるもの。単数には a／an を付け、二つ以上なら複数形にする。

例）a book / two books／an apple / three apples／a student / many students

■ 数えられない名詞（不可算名詞）
液体・材料・目に見えない概念など、形が決まっていないもの。a／an を付けず、複数形にもしない。

液体・材料）water, milk, tea, coffee, juice, bread, rice, paper, money
目に見えないもの）time, work, homework, information, news, advice, music, love

例）I need money.（× a money、× moneys）
例）I have a lot of homework.（× homeworks）

■ 数えたいときは容器・単位を使う
数えられない名詞を数えるときは、入れ物や単位を表す語をつける。

例）a glass of water（コップ1杯の水）／two cups of tea（お茶2杯）／three pieces of paper（紙3枚）／a slice of bread（パン1枚）

★ ポイント：日本人がまちがえやすいのは homework・information・news・advice の4語。どれも英語では数えられない名詞である。`,
      },
      {
        heading: 'many と much の使い分け',
        body: `「たくさんの」を表す形容詞は、後ろの名詞が数えられるかどうかで使い分ける。

■ many＋数えられる名詞の複数形
例）many books（たくさんの本）／many students／many friends／many countries

■ much＋数えられない名詞
例）much water（たくさんの水）／much money／much time／much snow

正）I have many friends.
正）I don't have much time.
誤）I have much friends.
誤）I don't have many time.

■ much は肯定文ではあまり使わない
much は否定文・疑問文でよく使われるが、ふつうの肯定文ではかたい言い方になる。肯定文では a lot of を使うのが自然である。

自然）I have a lot of money.
不自然）I have much money.

一方 many は肯定文でも自然に使える。

例）Many students came to the party.（多くの生徒がパーティーに来た）

■ 疑問文の How many / How much
数をたずねるときは How many＋複数形、量や値段をたずねるときは How much を使う。

例）How many books do you have?（本を何冊持っていますか）
例）How much water do you need?（水がどれくらい必要ですか）
例）How much is this bag?（このかばんはいくらですか）

⚠ 注意：How many のあとの名詞は必ず複数形（How many book ではなく How many books）。`,
      },
    ],
    trapExamples: [
      {
        question: '「たくさんの水」を英語にしなさい。',
        wrongAnswer: 'many waters',
        trapExplanation: '「たくさんの」＝many と一対一で覚えていると、後ろの名詞が数えられるかどうかを確かめずに many を選んでしまう。さらに「たくさん」なので複数形にしなければと考えて s を付けてしまう。',
        correctAnswer: 'much water（肯定文では a lot of water）',
        correctExplanation:
          'water は数えられない名詞なので many は使えず、複数形にもしない。数えられない名詞には much を使う。ただし肯定文では much はかたいので、I drank a lot of water. のように a lot of を使うのが自然である。',
      },
      {
        question: '「私は宿題がたくさんある。」を英語にしなさい。',
        wrongAnswer: 'I have many homeworks.',
        trapExplanation: '日本語では「宿題」を一つ二つと数える感覚があるため、英語でも数えられる名詞だと思いこみ、複数形にして many を付けてしまう。',
        correctAnswer: 'I have a lot of homework.',
        correctExplanation:
          'homework は英語では数えられない名詞で、複数形 homeworks は存在しない。したがって many も使えない。同じように information・news・advice・furniture も数えられない名詞である。数えたいときは two pieces of homework のように単位を付ける。',
      },
    ],
  },

  {
    id: 'eigo_s231',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'a lot of / lots of / plenty of ─ 両方に使える便利な表現',
    description: '数えられる名詞にも数えられない名詞にも使える a lot of の用法と、be動詞の一致を確認する',
    intro: 'many と much の使い分けはめんどうです。ところが a lot of なら、本にも水にも使えます。a lot of books も a lot of water も正しい形です。便利な表現ですが、そのあとの be動詞が is か are かは、うしろの名詞で決まります。ここだけは油断できません。',
    order: 731,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'a lot of は数えられる名詞にも数えられない名詞にも使える（a lot of books / a lot of water）。',
      'be動詞や動詞の形は a lot of の後ろの名詞に合わせる（There are a lot of books.）。',
      'lots of は a lot of のくだけた言い方で、意味は同じ。',
      'plenty of は「十分にたくさんの」という意味。',
      'a lot は of を付けずに副詞として使える（I study a lot.）。',
    ],
    sections: [
      {
        heading: 'a lot of はどちらにも使える',
        body: `many は数えられる名詞、much は数えられない名詞にしか使えないが、a lot of はどちらにも使える。そのため会話でも作文でも非常に便利である。

■ 数えられる名詞につく場合
例）a lot of books（たくさんの本）／a lot of students／a lot of people

■ 数えられない名詞につく場合
例）a lot of water（たくさんの水）／a lot of money／a lot of time／a lot of snow

例文）I have a lot of friends in Osaka.（大阪にたくさんの友達がいる）
例文）We had a lot of rain last month.（先月は雨がたくさん降った）

■ 動詞は後ろの名詞に合わせる
a lot of 自体は単数でも複数でもない。動詞の形を決めるのは、後ろに来る名詞である。

例）There are a lot of books on the desk.（本＝複数なので are）
例）There is a lot of water in the bottle.（水＝数えられないので is）
例）A lot of students like this song.（students＝複数なので like）
例）A lot of time is needed.（time＝数えられないので is）

「a lot of は複数っぽいから always are」と決めつけないこと。

★ ポイント：of を落として a lot books としてはいけない。名詞が続くときは必ず a lot of の形である。`,
      },
      {
        heading: 'lots of・plenty of と、副詞の a lot',
        body: `a lot of の仲間の表現もあわせて覚えておく。

■ lots of
a lot of とまったく同じ意味で、より会話的でくだけた言い方。

例）I have lots of homework today.（今日は宿題がたくさんある）
例）There were lots of people in the park.

■ plenty of
「十分にたくさんの」という意味で、足りているという気持ちを含む。

例）We have plenty of time.（時間はたっぷりある）
例）There is plenty of food for everyone.

■ 副詞としての a lot
名詞を続けずに a lot だけで使うと「たくさん、とても」という副詞になる。このときは of を付けない。

例）He eats a lot.（彼はたくさん食べる）
例）Thank you a lot.（どうもありがとう）
例）I study a lot every day.（毎日たくさん勉強する）

さらに比較級の前に置くと「ずっと」という強めの意味になる。

例）This bag is a lot bigger than that one.（このかばんはあれよりずっと大きい）

⚠ 注意：後ろに名詞があれば a lot of、名詞がなければ a lot。この一点で of の有無が決まる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に is か are を入れなさい。There（　）a lot of books on the desk.',
        wrongAnswer: 'There is a lot of books on the desk.',
        trapExplanation: 'a lot of の a や、直前に来る lot（単数の形）に目がいって、単数だと判断して is を選んでしまう。',
        correctAnswer: 'There are a lot of books on the desk.',
        correctExplanation:
          'a lot of の文で be動詞を決めるのは、a lot of ではなく後ろの名詞である。books は複数形なので are になる。反対に There is a lot of water in the bottle. は water が数えられない名詞なので is になる。',
      },
      {
        question: '「彼はとてもたくさん食べる。」を英語にしなさい。',
        wrongAnswer: 'He eats a lot of.',
        trapExplanation: 'a lot of をひとまとまりの決まり文句として覚えているため、後ろに名詞がなくても of を付けたままにしてしまう。',
        correctAnswer: 'He eats a lot.',
        correctExplanation:
          'of は後ろに名詞を続けるときにだけ必要な語である。名詞が続かないときは a lot だけで「たくさん」という副詞になる。He eats a lot of rice.（彼はご飯をたくさん食べる）のように名詞があるときだけ of を付ける。',
      },
    ],
  },

  {
    id: 'eigo_s232',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'a few / few と a little / little',
    description: 'a の有無で意味が正反対になる四つの数量表現を、度合いの図とともに整理する',
    intro: 'I have a few friends. は「友だちが何人かいる」、I have few friends. は「友だちがほとんどいない」。a があるかないかだけで、意味が正反対になります。話し手の気持ちまで変わってしまう、一語のこわさを体感する単元です。',
    order: 732,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'a few＋数えられる名詞の複数形＝「少しはある」（プラスの気持ち）。',
      'few＋数えられる名詞の複数形＝「ほとんどない」（マイナスの気持ち）。',
      'a little＋数えられない名詞＝「少しはある」／little＋数えられない名詞＝「ほとんどない」。',
      'a が付けば肯定的、a が付かなければ否定的、と覚える。',
      'only a few / quite a few（かなり多くの）など、前に語がつくと意味が変わることがある。',
    ],
    sections: [
      {
        heading: '四つの表現を表で整理する',
        body: `「少し」を表す表現は、後ろの名詞が数えられるかどうかと、a が付くかどうかの組み合わせで四つに分かれる。

■ 数えられる名詞（複数形）につくもの
a few ＝ 少しはある（2、3の）
few ＝ ほとんどない

例）I have a few friends here.（ここに友達が少しはいる）
例）I have few friends here.（ここにはほとんど友達がいない）

■ 数えられない名詞につくもの
a little ＝ 少しはある
little ＝ ほとんどない

例）There is a little milk in the glass.（コップに牛乳が少し入っている）
例）There is little milk in the glass.（コップにはほとんど牛乳がない）

■ 覚え方
a が付いていれば「あるよ」という気持ち、a がなければ「ないんだ」という気持ちである。たった一文字で意味が正反対になるので、入試では非常によく問われる。

例）We have a little time.（少し時間がある → まだ大丈夫）
例）We have little time.（ほとんど時間がない → 急がなければ）

★ ポイント：訳すときは「a あり＝少しはある」「a なし＝ほとんどない」と機械的に置きかえてよい。`,
        figureId: 'lf_eigoext07_232',
      },
      {
        heading: 'まぎらわしい使い方',
        body: `■ only a few / only a little
only が付くと「ほんの少ししか」という否定的な意味になり、few・little に近づく。

例）I have only a few coins.（小銭がほんの少ししかない）

■ quite a few
形は few だが、意味は「かなり多くの」という肯定的な意味になる特別な表現である。

例）Quite a few people came to the concert.（かなり多くの人がコンサートに来た）

■ a little の副詞用法
a little は形容詞だけでなく、副詞として「少し」の意味でも使える。

例）I am a little tired.（少し疲れている）
例）Please wait a little.（少し待ってください）
例）This bag is a little heavier than that one.（このかばんはあれより少し重い）

■ 数えられない名詞につく little は「小さい」ではない
little には「小さい」という別の意味もある。〈a little＋数えられる名詞の単数〉なら「小さな」の意味である。

例）a little dog（小さな犬）＝ a small dog
例）a little water（少しの水）

後ろの名詞が数えられるかどうかで意味が変わるので、名詞を先に確かめる。

⚠ 注意：a few water、a little books のように、可算・不可算をとりちがえる誤りが最も多い。まず名詞を見る習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '「コップに水が少し入っている。」を英語にしなさい。',
        wrongAnswer: 'There are a few water in the glass.',
        trapExplanation: '「少し」＝a few と一対一で覚えているため、後ろの名詞が数えられるかどうかを確かめずに a few を選んでしまう。さらに be動詞も are にしてしまう。',
        correctAnswer: 'There is a little water in the glass.',
        correctExplanation:
          'water は数えられない名詞なので a few ではなく a little を使う。数えられない名詞は単数あつかいなので be動詞も is になる。〈a few＋複数形〉〈a little＋数えられない名詞〉という組み合わせを固定して覚える。',
      },
      {
        question: '次の文を日本語にしなさい。I have few friends in this town.',
        wrongAnswer: '私はこの町に友達が少しいる。',
        trapExplanation: 'few を「少し」と訳してしまい、a few との区別を意識していない。a が一文字ないだけなので見落としやすい。',
        correctAnswer: '私はこの町にはほとんど友達がいない。',
        correctExplanation:
          'a の付かない few・little は「ほとんどない」という否定的な意味になる。「少しはいる」と言いたいなら I have a few friends in this town. としなければならない。a の有無で意味が正反対になる点が入試のねらいめである。',
      },
    ],
  },

  {
    id: 'eigo_s233',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'some と any の使い分け',
    description: '肯定文の some と疑問文・否定文の any、およびすすめる場面での例外を理解する',
    intro: '肯定文では some、疑問文と否定文では any——そう習います。ところが Would you like some tea? には some が使われます。人にすすめる場面では、相手が「はい」と言うと思って some を使うのです。決まりと例外を、場面ごとに理解していきます。',
    order: 733,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '原則、some は肯定文、any は疑問文・否定文で使う。',
      'some も any も、数えられる名詞（複数形）と数えられない名詞の両方に使える。',
      '人にすすめたり頼んだりする疑問文では some を使う（Would you like some tea?）。',
      'not ~ any = no。I don\'t have any pens. = I have no pens.',
      '否定文の any のあとの数えられる名詞は複数形（not any books）。',
    ],
    sections: [
      {
        heading: '基本の使い分け',
        body: `some と any はどちらも「いくらかの」を表すが、使う文の種類で使い分けるのが原則である。

■ 肯定文 → some
例）I have some pens.（ペンを何本か持っている）
例）There is some milk in the bottle.（びんに牛乳が少し入っている）
例）Some students are playing soccer.（何人かの生徒がサッカーをしている）

■ 疑問文 → any
例）Do you have any pens?（ペンを持っていますか）
例）Are there any apples in the box?（箱にりんごが入っていますか）

■ 否定文 → any
例）I don't have any pens.（ペンを1本も持っていない）
例）There isn't any milk in the bottle.（びんに牛乳が全くない）

■ どちらも可算・不可算の両方に使える
some・any は many・much とちがって、後ろの名詞の種類を選ばない。

例）some books（複数形）／some water（数えられない名詞）
例）any books／any water

■ 否定文のあとの名詞は複数形
数えられる名詞の場合、any のあとは複数形にする。

正）I don't have any books.
誤）I don't have any book.

★ ポイント：まず文の種類（肯定・疑問・否定）を見て some か any かを決め、次に名詞の形を整える、という順で考える。`,
      },
      {
        heading: 'すすめる疑問文の some と、not any = no',
        body: `■ 疑問文でも some を使う場合
相手にものをすすめたり、何かを頼んだりする疑問文では、答えが Yes になることを期待しているので some を使う。

例）Would you like some tea?（お茶はいかがですか）
例）Do you want some cake?（ケーキはいかが）
例）Can I have some water?（水をいただけますか）
例）Shall I bring you some coffee?

ふつうの質問（あるかどうかを本当に知りたい質問）では any を使う。

例）Do you have any questions?（質問はありますか）

■ not ~ any は no で言いかえられる
否定文の not ~ any は、no を使って一語で表せる。

例）I don't have any brothers. ＝ I have no brothers.（兄弟がいない）
例）There aren't any students in the room. ＝ There are no students in the room.

no を使うときは don't・isn't などの否定語を重ねてはいけない。

正）I have no money.
誤）I don't have no money.

■ 肯定文の any
肯定文で any を使うと「どんな〜でも」という意味になる。

例）Any student can join the club.（どの生徒でもそのクラブに入れる）
例）You can take any book you like.（好きな本をどれでも取っていいよ）

⚠ 注意：Would you like some ~? は入試頻出。「疑問文だから any」と機械的に選ぶと誤る。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に some か any を入れなさい。Are there（　）pens on the desk?',
        wrongAnswer: 'Are there some pens on the desk?',
        trapExplanation: '日本語では「机の上にペンが何本かありますか」と「何本か」がそのまま出てくるため、肯定文で覚えた some をそのまま使ってしまう。',
        correctAnswer: 'Are there any pens on the desk?',
        correctExplanation:
          'あるかどうかを本当にたずねる疑問文では any を使う。some を使うのは、Would you like some tea? のように相手にすすめたり頼んだりする疑問文だけである。この文はただの質問なので any が正しい。',
      },
      {
        question: '「私は本を1冊も持っていない。」を英語にしなさい。',
        wrongAnswer: "I don't have any book.",
        trapExplanation: '「1冊も」という日本語から単数のイメージが働き、any のあとを単数形にしてしまう。some/any の選択は正しくても名詞の形でまちがえる典型例。',
        correctAnswer: "I don't have any books.（= I have no books.）",
        correctExplanation:
          '否定文の any のあとに来る数えられる名詞は複数形にする。「1冊も持っていない」は「本というものを持っていない」という意味なので books となる。no を使って I have no books. と書きかえることもできるが、そのときは don\'t を重ねない。',
      },
    ],
  },

  {
    id: 'eigo_s234',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'all / most / both / every / each ─ 数量を表すその他の語',
    description: '全体や一部を表す語のあとの名詞の形と、動詞の単数・複数の一致を身につける',
    intro: 'every と all は、どちらも「全部」を表します。ところが Every student is here. の student は単数、All the students are here. の students は複数です。同じ意味なのに形がちがう。ものの数え方に対する英語のとらえ方が表れる部分です。',
    order: 734,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'every＋単数名詞＋単数動詞（Every student is here.）。',
      'each＋単数名詞＋単数動詞（Each boy has a ball.）。',
      'all＋複数名詞＋複数動詞（All the students are here.）。',
      'both＋複数名詞＝「両方とも」で複数あつかい（Both books are new.）。',
      'most of ~ / all of ~ / both of ~ のように of を使うときは the や my が必要（most of the students）。',
    ],
    sections: [
      {
        heading: 'every・each は単数あつかい',
        body: `「すべての」「それぞれの」を表す every と each は、意味は複数のようでも文法上は単数としてあつかう。ここが入試の最大のねらいめである。

■ every＋単数名詞
例）Every student is here.（生徒はみんなここにいる）
例）Every boy likes soccer.（どの男の子もサッカーが好きだ）
例）Every house has a garden.

名詞は単数形、動詞も三人称単数の形（is・likes・has）になる。

■ each＋単数名詞
例）Each student has a textbook.（それぞれの生徒が教科書を持っている）
例）Each of the boys was busy.（少年たちのそれぞれが忙しかった）

■ everyone・everybody も単数
例）Everyone is happy.（みんな幸せだ）
例）Everybody knows him.（みんな彼を知っている）

日本語の「みんな」は複数の感じがするので are・know としがちだが、英語では単数あつかいである。

■ every は時間の表現にも使う
例）every day（毎日）／every Sunday（毎週日曜日）／every three days（3日ごとに）

★ ポイント：every・each・everyone・everybody を見たら、動詞は必ず単数の形と反射的に判断する。`,
      },
      {
        heading: 'all・both・most は複数あつかい',
        body: `■ all（すべての）
数えられる名詞なら複数形＋複数動詞、数えられない名詞なら単数動詞になる。

例）All the students are here.（生徒は全員ここにいる）
例）All my friends like music.
例）All the water was gone.（水はすべてなくなっていた）

■ both（両方の）
必ず2つ・2人について使い、複数あつかいである。

例）Both books are new.（両方の本とも新しい）
例）Both of them are my friends.（彼らは2人とも私の友達だ）
例）I like both.（両方とも好きだ）

「両方とも〜ない」は not both ではなく neither を使うが、中学入試では both の肯定の形をおさえれば十分である。

■ most（ほとんどの）
例）Most students like this song.（ほとんどの生徒がこの歌を好きだ）
例）Most of the students in my class play sports.

■ of を使うときの注意
all of・both of・most of のように of を続ける場合、そのあとの名詞には the・my・these などが必要である。

正）most of the students／both of my friends／all of these books
誤）most of students／both of friends

of を使わないときは the などは不要である。

正）most students（ほとんどの生徒）

⚠ 注意：Every student are here. のように every に複数動詞をつける誤りが最頻出。every は単数である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に is か are を入れなさい。Every student in this class（　）kind.',
        wrongAnswer: 'Every student in this class are kind.',
        trapExplanation: '「すべての生徒」という日本語の意味が複数なので are を選んでしまう。さらに直前の this class にも引っぱられる。',
        correctAnswer: 'Every student in this class is kind.',
        correctExplanation:
          'every のあとの名詞は単数形で、動詞も単数の形になる。意味は複数でも、文法上は一人ひとりを取り上げる言い方なので単数あつかいである。同じく Everyone is happy.、Each boy has a ball. も単数の動詞を使う。',
      },
      {
        question: '「私はその本を両方とも読んだ。」を英語にしなさい。',
        wrongAnswer: 'I read both book.',
        trapExplanation: 'both を「両方の」という形容詞として名詞の前に置くところまでは正しいが、日本語に複数を表すしるしがないため、名詞を単数のままにしてしまう。',
        correctAnswer: 'I read both books.（= I read both of the books.）',
        correctExplanation:
          'both は必ず2つのものについて使うので、後ろの名詞は複数形にする。of を使って both of the books と書くこともできるが、そのときは the や my が必要である。both of books は誤りである。',
      },
    ],
  },

  // ───────────────── 3. 副詞の働きと位置（s235〜s237） ─────────────────
  {
    id: 'eigo_s235',
    subject: 'eigo',
    examType: 'chugaku',
    title: '副詞のはたらき ─ 何を説明する語か',
    description: '副詞が動詞・形容詞・他の副詞・文全体を説明することを、形容詞との対比で理解する',
    intro: 'He is a slow walker. と He walks slowly. — 意味はほぼ同じですが、slow は名詞を、slowly は動詞を説明しています。説明する相手がちがうと、語の形も変わるのです。副詞が何を説明する語なのかを、形容詞と比べながらつかみます。',
    order: 735,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '形容詞は名詞を説明する語、副詞は名詞以外（動詞・形容詞・副詞・文全体）を説明する語。',
      '動詞を説明する例：He runs fast.／形容詞を説明する例：It is very hot.',
      '他の副詞を説明する例：He runs very fast.',
      'good は形容詞、well は副詞。He is a good player. = He plays well.',
      'fast・hard・early は形容詞と副詞が同じ形。fastly という語は存在しない。',
    ],
    sections: [
      {
        heading: '副詞が説明するもの',
        body: `形容詞が名詞を説明する語であるのに対し、副詞は名詞以外のものを説明する語である。何を説明しているかで四つに分けられる。

■ ①動詞を説明する（どのように・いつ・どこで）
例）He runs fast.（彼は速く走る）
例）She sings beautifully.（彼女は美しく歌う）
例）I got up early today.（今日は早く起きた）

■ ②形容詞を説明する（どのくらい）
例）It is very hot today.（今日はとても暑い）
例）This question is too difficult.（この問題は難しすぎる）
例）He is so kind.（彼はとても親切だ）

■ ③他の副詞を説明する
例）He runs very fast.（彼はとても速く走る）
例）She speaks English quite well.（彼女は英語をかなり上手に話す）

■ ④文全体を説明する
例）Luckily, we won the game.（幸運にも私たちは試合に勝った）
例）Fortunately, it didn't rain.

■ 形容詞と副詞の対比
同じ内容を形容詞で言うか副詞で言うかで、文の形が変わる。

形容詞）He is a good soccer player.（彼はよいサッカー選手だ）
副詞）He plays soccer well.（彼は上手にサッカーをする）

形容詞）She is a fast runner.
副詞）She runs fast.

★ ポイント：名詞を説明しているなら形容詞、動詞を説明しているなら副詞。文の中で何を説明しているかを確かめてから品詞を決める。`,
      },
      {
        heading: 'good と well、fast と fastly',
        body: `■ good は形容詞、well は副詞
「よい・上手な」は good、「よく・上手に」は well である。日本語では区別があいまいなので誤りやすい。

正）He is a good singer.（形容詞。名詞 singer を説明）
正）He sings well.（副詞。動詞 sings を説明）
誤）He sings good.

well には「健康な」という形容詞の意味もある。

例）I am well.（元気です）
例）Get well soon.（早くよくなってね）

■ fastly という語はない
fast は形容詞（速い）と副詞（速く）の両方で同じ形を使う。-ly を付けた fastly という語は英語に存在しない。

正）He is a fast runner.（形容詞）
正）He runs fast.（副詞）
誤）He runs fastly.

同じように形容詞と副詞が同じ形の語には、hard（熱心な・熱心に）、early（早い・早く）、late（遅い・遅く）、high（高い・高く）、long（長い・長く）がある。

例）This is hard work.（形容詞）／He works hard.（副詞）
例）I took an early train.（形容詞）／I got up early.（副詞）

■ very と much のちがい
very は形容詞・副詞の原級を強める。much は動詞や比較級を強める。

例）very tall（とても背が高い）／I like it very much.（とても好きだ）

⚠ 注意：He sings good. と He runs fastly. は入試の定番の誤文。どちらも副詞にすべきところで形をまちがえている。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は上手に歌う。」を英語にしなさい。',
        wrongAnswer: 'He sings good.',
        trapExplanation: '日本語の「上手に」が「上手な」と同じ語感なので、まず思い浮かぶ good をそのまま使ってしまう。good と well の品詞のちがいを意識していない。',
        correctAnswer: 'He sings well.',
        correctExplanation:
          'good は名詞を説明する形容詞、well は動詞を説明する副詞である。ここでは動詞 sings を説明しているので well を使う。名詞を使って言いかえるなら He is a good singer. となる。',
      },
      {
        question: '「私はとても速く走ることができる。」を英語にしなさい。',
        wrongAnswer: 'I can run very fastly.',
        trapExplanation: '「副詞は形容詞に -ly を付けて作る」という規則を知っているために、fast にも機械的に -ly を付けてしまう。しかし fastly という語は存在しない。',
        correctAnswer: 'I can run very fast.',
        correctExplanation:
          'fast は形容詞も副詞も同じ形で使う語である。hard・early・late・high・long も同じ仲間で、-ly を付けない。ただし hard に -ly を付けた hardly は別の語（ほとんど〜ない）なので、意味がまったく変わってしまう。',
      },
    ],
  },

  {
    id: 'eigo_s236',
    subject: 'eigo',
    examType: 'chugaku',
    title: '形容詞から副詞をつくる ─ -ly のつけ方と意味が変わる語',
    description: '-ly のつづりの規則と、hard / hardly のように意味が変わる語の区別を身につける',
    intro: 'hard に -ly を付けると hardly ですが、意味は「一生けんめいに」ではなく「ほとんど〜ない」です。He hardly works. は「彼はほとんど働かない」。-ly を付ければ意味はそのままで副詞になる、という思いこみが通じない語があります。まとめて確かめておきましょう。',
    order: 736,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '多くの副詞は〈形容詞＋-ly〉でつくる（slow → slowly、careful → carefully）。',
      '〈子音字＋y〉で終わる語は y を i に変えて -ly（easy → easily、happy → happily）。',
      '-le で終わる語は e を取って -y（gentle → gently、simple → simply）。true → truly も注意。',
      'hard（熱心に）と hardly（ほとんど〜ない）は意味がまったくちがう。late/lately、near/nearly も同様。',
      'friendly・lovely・lonely は -ly で終わるが形容詞である。',
    ],
    sections: [
      {
        heading: '-ly のつけ方',
        body: `多くの副詞は形容詞に -ly を付けて作る。つづりの変化には四つの型がある。

■ ①そのまま -ly を付ける（いちばん多い）
slow → slowly（ゆっくり）／quick → quickly（すばやく）／careful → carefully（注意深く）／quiet → quietly（静かに）／loud → loudly（大声で）／sudden → suddenly（突然）／usual → usually（ふつう）／kind → kindly（親切に）

■ ②〈子音字＋y〉→ y を i に変えて -ly
easy → easily（簡単に）／happy → happily（幸せに）／angry → angrily（怒って）／busy → busily／heavy → heavily（激しく）／lucky → luckily（幸運にも）

例）It rained heavily last night.（昨夜は激しく雨が降った）

■ ③-le で終わる語 → e を取って -y
gentle → gently（やさしく）／simple → simply（単純に）／possible → possibly

■ ④特別な形
true → truly（e を取る）／good → well（形が全く変わる）／full → fully（l が二つ）

■ 形容詞と副詞が同じ形の語
fast, hard, early, late, high, long, near, straight は -ly を付けずにそのまま副詞として使う。

★ ポイント：easily・happily の i への変化は、比較級 easier・happier と同じ規則である。まとめて覚えると効率がよい。`,
      },
      {
        heading: '-ly が付くと意味が変わる語',
        body: `-ly を付けると意味がまったく変わってしまう語がある。入試で頻出なので必ず区別する。

■ hard と hardly
hard ＝ 熱心に、激しく／hardly ＝ ほとんど〜ない

例）He studies hard.（彼は熱心に勉強する）
例）He hardly studies.（彼はほとんど勉強しない）

hardly はそれ自体が否定の意味を持つので、not を重ねてはいけない。

正）I can hardly see it.（ほとんど見えない）
誤）I can't hardly see it.

■ late と lately
late ＝ 遅く／lately ＝ 最近

例）I got up late this morning.（今朝は遅く起きた）
例）I haven't seen him lately.（最近彼に会っていない）

■ near と nearly
near ＝ 近くに／nearly ＝ ほとんど、およそ

例）He lives near.（彼は近くに住んでいる）
例）It is nearly ten o'clock.（もうすぐ10時だ）

■ high と highly
high ＝ 高く（高さ）／highly ＝ 大いに、非常に

例）The bird flew high.（鳥は高く飛んだ）

■ -ly で終わるのに形容詞の語
friendly（親しみのある）、lovely（すてきな）、lonely（ひとりぼっちの）、ugly（みにくい）は -ly で終わるが形容詞である。

例）He is a friendly boy.（○）／He spoke to me friendly.（×）

⚠ 注意：「一生けんめい勉強する」を He studies hardly. と書くと、意味が正反対の「ほとんど勉強しない」になってしまう。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は一生けんめい勉強する。」を英語にしなさい。',
        wrongAnswer: 'He studies hardly.',
        trapExplanation: '「副詞は -ly を付ける」という規則を機械的にあてはめ、hard に -ly を付けてしまう。しかし hardly は「ほとんど〜ない」という別の語で、意味が正反対になる。',
        correctAnswer: 'He studies hard.',
        correctExplanation:
          'hard は形容詞（熱心な・かたい）と副詞（熱心に）が同じ形の語で、-ly を付ける必要はない。hardly は「ほとんど〜ない」という否定の意味の副詞である。late/lately、near/nearly も同じように意味が変わる組み合わせである。',
      },
      {
        question: 'easy を副詞に変えなさい。',
        wrongAnswer: 'easyly',
        trapExplanation: '「形容詞＋-ly」という規則をそのままあてはめ、語尾の y を残したまま -ly を付けてしまう。',
        correctAnswer: 'easily',
        correctExplanation:
          '〈子音字＋y〉で終わる語は、y を i に変えてから -ly を付ける。happy → happily、angry → angrily、lucky → luckily も同じ規則である。これは比較級の easy → easier、happy → happier と同じ変化なので、あわせて覚えるとよい。',
      },
    ],
  },

  {
    id: 'eigo_s237',
    subject: 'eigo',
    examType: 'chugaku',
    title: '副詞の位置と語順 ─ 様態・場所・時の順',
    description: '目的語と副詞の位置関係、および「どのように→どこで→いつ」という並び順を身につける',
    intro: 'I like very much English. と書きたくなりますが、正しくは I like English very much. です。英語では動詞と目的語の間に副詞を割りこませません。さらに副詞が重なるときは「どのように→どこで→いつ」の順。位置には決まりがあるのです。',
    order: 737,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      '動詞に目的語があるときは〈動詞＋目的語＋副詞〉（He speaks English well.）。',
      '副詞を二つ以上ならべるときは〈様態→場所→時〉の順。',
      '時を表す語句は文頭に出してもよい（Yesterday I played tennis.）。',
      '場所より時があとに来る（in the park yesterday）。日本語と逆になりやすい。',
      'very・too・so などの程度の副詞は、説明する語のすぐ前に置く。',
    ],
    sections: [
      {
        heading: '目的語と副詞の位置',
        body: `動詞を説明する副詞は、原則として動詞のあとに置く。ただし動詞に目的語があるときは、目的語のあとに置く。

正）He speaks English well.（彼は英語を上手に話す）
誤）He speaks well English.

正）She plays the piano beautifully.
誤）She plays beautifully the piano.

英語では動詞と目的語のつながりが強く、その間に副詞を割りこませない。日本語では「上手に英語を話す」と副詞が前に来るので、そのまま英語にすると誤ってしまう。

■ 目的語がないときは動詞のすぐあと
例）He runs fast.／She sings well.／They arrived late.

■ 程度を表す副詞は説明する語のすぐ前
very・too・so・quite・really などは、説明する形容詞や副詞のすぐ前に置く。

例）It is very hot.（very が hot を説明）
例）He runs very fast.（very が fast を説明）
例）This box is too heavy.（重すぎる）

■ 頻度の副詞は別の規則
always・usually などの頻度の副詞は位置の規則がちがう。これは次の課で学ぶ。

★ ポイント：〈動詞＋目的語〉のかたまりを壊さない。副詞はそのかたまりの外側に置く。`,
        figureId: 'lf_eigoext07_237',
      },
      {
        heading: '様態・場所・時の順番',
        body: `副詞（副詞句）を二つ以上ならべるときは、〈様態（どのように）→場所（どこで）→時（いつ）〉の順にする。

例）I played tennis hard in the park yesterday.
　　　　　　　　　　様態　　　　場所　　　　時
（私は昨日公園で一生けんめいテニスをした）

例）He studied quietly in his room last night.
例）She sang beautifully at the concert yesterday.

■ 場所より時があと
とくにまちがえやすいのが場所と時の順である。英語では場所が先、時があとになる。

正）I played soccer in the park yesterday.
誤）I played soccer yesterday in the park.

日本語では「昨日公園で」と時を先に言うことが多いので、そのまま英語にすると誤る。

■ 時を表す語句は文頭に出せる
時を表す語句だけは、強調のため文頭に置くことができる。このときはコンマを付けてもよい。

例）Yesterday I played soccer in the park.
例）Last summer, we went to Okinawa.

場所を表す語句を文頭に出すことは、中学入試の範囲ではほとんどない。

■ 大きい場所・小さい場所の順
場所を二つ重ねるときは、小さい場所から大きい場所の順に置く。

例）He lives in Kita-ku in Osaka.（大阪の北区に住んでいる）

⚠ 注意：語順整序（並べかえ）問題では、まず動詞と目的語を作り、そのあとに様態・場所・時を順に付け足すと正解しやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は英語を上手に話す。」を英語にしなさい。',
        wrongAnswer: 'He speaks well English.',
        trapExplanation: '日本語の「上手に英語を話す」という語順のまま英語にしてしまう。副詞は動詞の直後という覚え方だけをしていると、目的語があるときに誤る。',
        correctAnswer: 'He speaks English well.',
        correctExplanation:
          '英語では動詞と目的語の間に副詞を入れない。〈動詞＋目的語＋副詞〉の順になるので He speaks English well. が正しい。同じく She plays the piano well.、I like this song very much. も目的語のあとに副詞が来る。',
      },
      {
        question: '「私は昨日公園でテニスをした。」を英語にしなさい。',
        wrongAnswer: 'I played tennis yesterday in the park.',
        trapExplanation: '日本語が「昨日公園で」と時を先に言う語順なので、そのまま英語に置きかえてしまう。意味は通じるが、英語としては不自然な語順になる。',
        correctAnswer: 'I played tennis in the park yesterday.',
        correctExplanation:
          '英語では〈様態→場所→時〉の順にならべる。場所が先、時があとである。時を強調したいときだけ Yesterday I played tennis in the park. のように文頭に出すことができる。',
      },
    ],
  },

  // ───────────────── 4. 頻度の副詞（s238〜s240） ─────────────────
  {
    id: 'eigo_s238',
    subject: 'eigo',
    examType: 'chugaku',
    title: '頻度の副詞①：always から never までの度合い',
    description: 'always・usually・often・sometimes・never の意味の強さを、度合いの図で順序づけて覚える',
    intro: 'sometimes と often と usually を、強い順にならべられますか。日本語の「ときどき」「よく」「たいてい」と一対一で対応させようとすると、どこかでずれます。英語の頻度の副詞は、目盛りの上にならべて位置関係で覚えるほうが確実です。',
    order: 738,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '度合いの順は always（いつも）＞ usually（たいてい）＞ often（よく）＞ sometimes（ときどき）＞ never（決して〜ない）。',
      'seldom・rarely は「めったに〜ない」で、never の少し手前。',
      'never・seldom・rarely はそれ自体が否定の意味を持つので not を重ねない。',
      'never を使う文の動詞は肯定の形のまま（He never gets angry.）。三単現も忘れない。',
      'How often ~? は頻度をたずねる疑問文。',
    ],
    sections: [
      {
        heading: '頻度の副詞の順序',
        body: `どれくらいの回数そうするかを表す副詞を頻度の副詞という。中学入試で必要なのは次の語である。度合いの強い順にならべる。

always（いつも・100パーセント）
usually（たいてい・ふつう）
often（よく・しばしば）
sometimes（ときどき）
seldom・rarely（めったに〜ない）
never（決して〜ない・0パーセント）

例）I always get up at six.（私はいつも6時に起きる）
例）She usually walks to school.（彼女はたいてい歩いて学校へ行く）
例）We often play soccer after school.（私たちは放課後よくサッカーをする）
例）He sometimes comes late.（彼はときどき遅れて来る）
例）I never eat natto.（私は決して納豆を食べない）

■ 意味の取りちがえに注意
usually を「いつも」、often を「ときどき」と訳してしまう誤りが多い。usually は「たいてい・ふつうは」、often は「よく・しばしば」で、sometimes（ときどき）より回数が多い。

■ 選択問題での考え方
「毎朝かならず」なら always、「週に4、5回」なら usually か often、「月に1、2回」なら sometimes、「一度もない」なら never である。

★ ポイント：右の図で always から never までの度合いを目で見て覚えると、選択問題で迷わなくなる。`,
        figureId: 'lf_eigoext07_238',
      },
      {
        heading: 'never・seldom は否定語',
        body: `never・seldom・rarely は、それ自体に「〜ない」という否定の意味が含まれている。したがって not や don't を重ねてはいけない。

正）He never gets angry.（彼は決して怒らない）
誤）He doesn't never get angry.
誤）He never doesn't get angry.

正）She rarely watches TV.（彼女はめったにテレビを見ない）
誤）She doesn't rarely watch TV.

■ 動詞の形に注意
never を使う文は形の上では肯定文なので、三人称単数現在の s を付ける必要がある。

正）He never eats breakfast.
誤）He never eat breakfast.

否定文だと思って動詞を原形にしてしまう誤りが非常に多い。

■ 過去の文でも同じ
例）I never went there.（私は一度もそこへ行かなかった）
例）He never told me the truth.

■ How often ~? で頻度をたずねる
例）How often do you play tennis?（どれくらいの頻度でテニスをしますか）
　　— Twice a week.（週に2回です）
例）How often does he go to the library?
　　— About once a month.（月に1回くらいです）

⚠ 注意：never は not よりも強い否定である。「〜ない」を表したいだけなら don't を使い、「一度も〜ない」と強く言いたいときに never を使う。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は決して怒らない。」を英語にしなさい。',
        wrongAnswer: "He doesn't never get angry.",
        trapExplanation: '日本語の「怒らない」に引かれて否定文を作り、そのうえで「決して」を表す never を足してしまう。否定の語を二重に使っていることに気づかない。',
        correctAnswer: 'He never gets angry.',
        correctExplanation:
          'never は「決して〜ない」という否定の意味をすでに含んでいるので、doesn\'t と重ねてはいけない。また文の形は肯定文なので、三人称単数の s を付けて gets となる。seldom・rarely も同じく否定語なので not を重ねない。',
      },
      {
        question: '次の文を日本語にしなさい。She usually walks to school.',
        wrongAnswer: '彼女はときどき歩いて学校へ行く。',
        trapExplanation: 'usually と sometimes を混同している。usually を「ときどき」、often を「たまに」のように、頻度の副詞の度合いをあいまいに覚えていると訳がずれる。',
        correctAnswer: '彼女はたいてい歩いて学校へ行く。',
        correctExplanation:
          'usually は「たいてい・ふつうは」で、always に次いで回数が多い。「ときどき」は sometimes である。度合いの順は always ＞ usually ＞ often ＞ sometimes ＞ never なので、この順を図で覚えておくと訳も選択問題も正確になる。',
      },
    ],
  },

  {
    id: 'eigo_s239',
    subject: 'eigo',
    examType: 'chugaku',
    title: '頻度の副詞②：文のどこに置くか',
    description: 'be動詞のあと・一般動詞の前・助動詞のあという頻度の副詞の位置の規則を身につける',
    intro: 'always を文のどこに置くか。I always am busy. ではなく I am always busy. が正しい形です。be動詞なら後ろ、一般動詞なら前。この一点だけで正誤が分かれる問題が、入試ではくり返し出ます。理由まで含めて理解しておきましょう。',
    order: 739,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      'be動詞があるときは be動詞のあと（He is always busy.）。',
      '一般動詞だけのときは動詞の前（He always goes to school by bike.）。',
      '助動詞（can・will・must）があるときは助動詞のあと（I will always help you.）。',
      'sometimes・usually・often は文頭・文末にも置けるが、always・never は原則この位置。',
      'not との順は not の前後で意味が変わるので、中学入試では always は not のあとに置く形だけ覚える。',
    ],
    sections: [
      {
        heading: '三つの位置の規則',
        body: `頻度の副詞は、ほかの副詞と位置の規則がちがう。文末ではなく文の途中に入りこむのが特徴である。

■ ①be動詞があるとき → be動詞のあと
例）He is always busy.（彼はいつも忙しい）
例）She is usually kind.（彼女はたいてい親切だ）
例）I am never late for school.（私は決して学校に遅れない）

■ ②一般動詞だけのとき → 一般動詞の前
例）He always goes to school by bike.（彼はいつも自転車で学校へ行く）
例）We often play soccer.（私たちはよくサッカーをする）
例）She never eats meat.（彼女は決して肉を食べない）

■ ③助動詞があるとき → 助動詞のあと
例）I will always help you.（いつでも助けます）
例）You can always call me.（いつでも電話していいよ）
例）He must always be careful.

be動詞と助動詞のときは「あと」、一般動詞のときは「前」と覚える。be動詞と助動詞は仲間なので、同じあつかいになると考えるとよい。

■ 否定文・疑問文でも位置は同じ
例）He doesn't always get up early.（彼はいつも早起きするとはかぎらない）
例）Do you often go to the library?（よく図書館へ行きますか）

★ ポイント：まず文の中に be動詞か助動詞があるかを探す。あればそのあと、なければ一般動詞の前に置く。`,
        figureId: 'lf_eigoext07_239',
      },
      {
        heading: '文頭・文末に置ける語',
        body: `頻度の副詞のうち sometimes・usually・often・generally は、文頭や文末に置くこともできる。意味は変わらないが、文頭に置くと強調される。

例）Sometimes I walk to school.（＝ I sometimes walk to school.）
例）I go to the library often.（＝ I often go to the library.）
例）Usually we have lunch at noon.

■ always・never は文の途中だけ
always と never は原則として文頭・文末には置かない。

正）He is always busy.
誤）Always he is busy.
誤）He is busy always.

■ 複数の要素があるときの順
be動詞と一般動詞の両方があるように見える文（進行形・受動態）では、be動詞のあとに置く。

例）He is always studying.（彼はいつも勉強している）
例）This shop is always crowded.（この店はいつも混んでいる）

■ 完了形では have のあと
例）I have never been to Kyoto.（京都へ行ったことがない）
例）She has always wanted a dog.

■ 頻度をたずねる文への答え
例）How often do you go swimming?
　　— I usually go swimming twice a week.

⚠ 注意：He always is busy. は誤り。be動詞のあとが正しい位置である。逆に He goes always to school. も誤りで、一般動詞の前に置く。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼はいつも忙しい。」を英語にしなさい。',
        wrongAnswer: 'He always is busy.',
        trapExplanation: '「頻度の副詞は動詞の前」という規則だけを覚えていると、be動詞にもそのままあてはめて動詞の前に置いてしまう。',
        correctAnswer: 'He is always busy.',
        correctExplanation:
          'be動詞があるときは be動詞のあとに置く。一般動詞の前に置くのは、be動詞も助動詞もない文のときだけである。助動詞がある文も同じで、I will always help you. のように助動詞のあとに置く。',
      },
      {
        question: '「彼はいつも自転車で学校へ行く。」を英語にしなさい。',
        wrongAnswer: 'He goes always to school by bike.',
        trapExplanation: 'ふつうの副詞と同じように「動詞のあとに置く」と考えてしまう。fast や well は動詞のあとでよいが、頻度の副詞は規則がちがう。',
        correctAnswer: 'He always goes to school by bike.',
        correctExplanation:
          '一般動詞だけの文では、頻度の副詞は動詞の前に置く。be動詞や助動詞があるときだけ、そのあとに置く。fast・well などの様態の副詞とは位置の規則が別であることをはっきり区別する。',
      },
    ],
  },

  {
    id: 'eigo_s240',
    subject: 'eigo',
    examType: 'chugaku',
    title: '回数の表し方 ─ once / twice / three times a week',
    description: '具体的な回数を表す言い方と、every day 型の表現の書き方を正確に身につける',
    intro: '「週に3回」は three times a week です。ここで「1回」は one time ではなく once、「2回」は twice と、特別な語を使います。3回からは three times と規則的になるのに、はじめの二つだけが例外。よく使う語ほど古い形が残っているのです。',
    order: 740,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '1回は once、2回は twice、3回以上は three times のように times を使う。',
      '「週に3回」は three times a week。a は「〜につき」の意味。',
      'every day（毎日）は2語。everyday は「日常の」という形容詞で意味がちがう。',
      'on Sundays（毎週日曜日に）のように複数形で習慣を表すことがある。',
      'How often ~? への答えは Twice a week. のように回数だけでよい。',
    ],
    sections: [
      {
        heading: '回数の言い方',
        body: `頻度の副詞よりもはっきり回数を示したいときは、次の言い方を使う。

■ 回数の基本
once（1回）／twice（2回）／three times（3回）／four times（4回）／many times（何度も）

1回と2回だけは特別な語を使い、3回以上は〈数＋times〉である。two times とは言わずに twice を使うのが普通である。

例）I have been to Kyoto once.（京都に1度行ったことがある）
例）I read the book twice.（その本を2回読んだ）
例）He called me three times yesterday.

■ 「〜につき何回」
〈回数＋a＋期間〉で「〜につき…回」を表す。この a は「〜につき」という意味である。

例）three times a week（週に3回）
例）once a month（月に1回）
例）twice a year（年に2回）
例）five times a day（1日に5回）

例文）I play tennis twice a week.（私は週に2回テニスをする）
例文）We have a test once a month.

正）three times a week
誤）three times in a week
誤）three time a week（times の s を落とさない）

★ ポイント：a を per に置きかえた three times per week も同じ意味だが、中学入試では a を使う形で覚えておけばよい。`,
      },
      {
        heading: 'every day 型の表現',
        body: `■ every＋時を表す語
every day（毎日）／every week（毎週）／every month（毎月）／every year（毎年）／every Sunday（毎週日曜日）／every morning（毎朝）

例）I study English every day.（毎日英語を勉強する）
例）We visit our grandmother every summer.

■ every day と everyday のちがい
2語の every day は「毎日」という副詞、1語の everyday は「日常の」という形容詞である。まったく別の語なので書きまちがえてはいけない。

正）I study English every day.（毎日勉強する）
正）This is an everyday event.（これは日常のできごとだ）
誤）I study English everyday.

■ every＋数＋複数名詞
「〜おきに」を表す。

例）every three days（3日ごとに）
例）every two weeks（2週間ごとに）

■ on Sundays（複数形）
曜日を複数形にすると「毎週その曜日に」という習慣の意味になる。

例）I play soccer on Sundays.（日曜日にはサッカーをする）
例）The shop is closed on Mondays.

■ 位置
これらの語句は原則として文末に置く。強調するときだけ文頭に出す。

例）I go to the gym twice a week.
例）Every morning, I walk my dog.

⚠ 注意：every day を1語で書く誤りは減点対象になりやすい。「毎日」は必ず2語である。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は週に3回サッカーをする。」を英語にしなさい。',
        wrongAnswer: 'I play soccer three times in a week.',
        trapExplanation: '日本語の「週に」の「に」を前置詞 in だと考えて、in a week としてしまう。あるいは times の s を落として three time としてしまう。',
        correctAnswer: 'I play soccer three times a week.',
        correctExplanation:
          '「〜につき何回」は〈回数＋a＋期間〉で表し、前置詞は使わない。この a は「〜につき」という意味である。once a month（月に1回）、twice a year（年に2回）も同じ形で、3回以上のときは times と複数形にする。',
      },
      {
        question: '「私は毎日英語を勉強する。」を英語にしなさい。',
        wrongAnswer: 'I study English everyday.',
        trapExplanation: '発音が同じで見た目も似ているため、1語の everyday と2語の every day を区別せずに書いてしまう。辞書に everyday という語が載っていることも混乱のもとになる。',
        correctAnswer: 'I study English every day.',
        correctExplanation:
          '「毎日」という意味の副詞は2語の every day である。1語の everyday は「日常の」という形容詞で、an everyday event（日常のできごと）のように名詞の前で使う。品詞も意味もちがう別の語である。',
      },
    ],
  },

  // ───────────── 5. 比較級・最上級のつくり方（s241〜s245） ─────────────
  {
    id: 'eigo_s241',
    subject: 'eigo',
    examType: 'chugaku',
    title: '比較の三つの形 ─ 原級・比較級・最上級',
    description: '比較の基本となる三つの形と、それぞれを使う文の形を図で確認する',
    intro: 'Tom is tall. / Tom is taller than Ken. / Tom is the tallest in his class. — 同じ tall が三つの形に変わります。日本語なら「背が高い」「より高い」「いちばん高い」と、語をそえるだけですみます。英語は語そのものを変える。まずは全体の地図を見ましょう。',
    order: 741,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '原級＝もとの形（tall）、比較級＝〜より…（taller）、最上級＝いちばん…（tallest）。',
      '比較級の文には than、最上級の文には the が必要。',
      '〈A is 比較級 than B.〉／〈A is the 最上級 in / of ~.〉が基本の形。',
      '比較級・最上級は形容詞だけでなく副詞にも使う（faster、fastest）。',
      '副詞の最上級では the を省略することがある（He runs fastest.）。',
    ],
    sections: [
      {
        heading: '三つの形と基本の文',
        body: `英語で二つ以上のものを比べるときは、形容詞・副詞の形を変える。形は三つある。

原級（もとの形）：tall（背が高い）
比較級：taller（もっと背が高い）
最上級：tallest（いちばん背が高い）

■ 原級を使う文
例）Ken is tall.（ケンは背が高い）

■ 比較級を使う文 ─ than が必要
〈A is 比較級 than B.〉で「AはBより〜だ」を表す。

例）Ken is taller than Yuki.（ケンはユキより背が高い）
例）This book is more interesting than that one.
例）He runs faster than I do.

■ 最上級を使う文 ─ the が必要
〈A is the 最上級 in / of ~.〉で「Aは〜の中でいちばん…だ」を表す。

例）Ken is the tallest of the three.（ケンは3人の中でいちばん背が高い）
例）Mt. Fuji is the highest mountain in Japan.

最上級には必ず the を付ける。「いちばん」は一つに決まるものなので the が必要だと考えるとよい。

■ 副詞にも使う
例）He runs fast. → He runs faster than Tom. → He runs (the) fastest of the three.

副詞の最上級では the を省略してもよいが、付けても誤りではない。

★ ポイント：比較級を見たら than を探す、最上級を見たら the と in / of を探す。この二つがそろって初めて文が完成する。`,
        figureId: 'lf_eigoext07_241',
      },
      {
        heading: '比較の文を読み解く手順',
        body: `比較の文は、次の三点を確かめれば正確に読める。

■ ①何と何を比べているか
than のあとが比べる相手である。

例）Ken is taller than Yuki. → 比べているのはケンとユキ。

■ ②どちらが上か
比較級の前にある主語のほうが上である。

例）Ken is taller than Yuki. → 背が高いのはケン。

■ ③どの範囲でいちばんか
最上級では in / of のあとが範囲である。

例）Ken is the tallest of the three. → 3人の中での話。

■ 書きかえの練習
同じ内容を比較級でも最上級でも表せることがある。

例）Ken is taller than Yuki. Ken is taller than Tom.
　→ Ken is the tallest of the three.（3人の中でいちばん）

■ 比較級と最上級の使い分け
2つ（2人）を比べるときは比較級、3つ（3人）以上のときは最上級を使う。

例）Which is bigger, Japan or Australia?（2つ → 比較級）
例）Which is the biggest of the three?（3つ → 最上級）

⚠ 注意：最上級の the を落とす誤りが最も多い。He is fastest runner in his class. は誤りで、the fastest runner としなければならない。`,
      },
    ],
    trapExamples: [
      {
        question: '「ケンはトムより背が高い。」を英語にしなさい。',
        wrongAnswer: 'Ken is more tall than Tom.',
        trapExplanation: '「もっと」という日本語の感覚から more を使ってしまう。more を使う語と -er を使う語の区別ができていない。',
        correctAnswer: 'Ken is taller than Tom.',
        correctExplanation:
          'tall は短い語（1音節）なので -er を付けて taller とする。more を使うのは beautiful・interesting のような長い語である。more tall のように、more と -er を両方使うことも絶対にない。',
      },
      {
        question: '「彼はクラスでいちばん速い走者だ。」を英語にしなさい。',
        wrongAnswer: 'He is fastest runner in his class.',
        trapExplanation: '最上級の形（fastest）を作ることに気を取られて、その前に必要な the を落としてしまう。日本語の「いちばん速い走者」には the にあたる語がないため気づきにくい。',
        correctAnswer: 'He is the fastest runner in his class.',
        correctExplanation:
          '最上級には必ず the を付ける。「いちばん」は一つに決まるものなので the が必要になる。ただし副詞の最上級（He runs fastest.）では the を省略することがある。ここは runner という名詞が続く形容詞の最上級なので the が必要である。',
      },
    ],
  },

  {
    id: 'eigo_s242',
    subject: 'eigo',
    examType: 'chugaku',
    title: '-er / -est をつける語と more / most を使う語',
    description: '語の長さ（音節）による比較級・最上級の作り方の使い分けを判断できるようにする',
    intro: 'tall は taller、beautiful は more beautiful。なぜ beautifuller と言わないのでしょう。理由は語の長さです。長い語に -er を付けると発音しにくくなるので、前に more を置きます。見分ける手がかりは、語をいくつの音のまとまりで読むかにあります。',
    order: 742,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '短い語（1音節）は -er / -est を付ける（tall → taller → tallest）。',
      '2音節でも -y で終わる語は -er / -est（easy → easier → easiest）。',
      '長い語（3音節以上、および多くの2音節語）は more / most を前に置く。',
      'more・most を使うとき、もとの形容詞は変化させない（more beautiful）。',
      '-er と more を同時に使うことは絶対にない（more taller は誤り）。',
    ],
    sections: [
      {
        heading: '語の長さで決まる',
        body: `比較級・最上級の作り方は、その語の長さ（音節の数）で決まる。音節とは、母音を中心とした音のまとまりのことである。

■ 短い語 → -er / -est
1音節の語はすべて -er / -est を付ける。

tall → taller → tallest／fast → faster → fastest／long → longer → longest／old → older → oldest／young → younger → youngest／small → smaller → smallest／high → higher → highest／short → shorter → shortest／new → newer → newest／cheap → cheaper → cheapest

■ 2音節でも -y で終わる語 → -er / -est
easy → easier → easiest／happy → happier → happiest／busy → busier → busiest／early → earlier → earliest／pretty → prettier → prettiest／heavy → heavier → heaviest

y を i に変えるのを忘れない。

■ 長い語 → more / most
3音節以上の語と、多くの2音節語は more / most を前に置く。

beautiful → more beautiful → most beautiful
interesting → more interesting → most interesting
difficult → more difficult → most difficult
important → more important → most important
famous → more famous → most famous
useful → more useful → most useful

★ ポイント：迷ったら「その語を発音して手をたたく回数」を数える。1回なら -er、3回以上なら more である。`,
        figureId: 'lf_eigoext07_242',
      },
      {
        heading: 'まちがえやすい点',
        body: `■ more を使うとき、もとの語は変えない
more を使う場合、形容詞そのものは原級のままである。

正）more beautiful／most beautiful
誤）more beautifuler／most beautifulest

■ -er と more を同時に使わない
どちらか一方だけを使う。両方使うことは絶対にない。

誤）more taller／more bigger／most tallest

■ most には the を付ける
最上級なので the が必要である。

正）the most beautiful flower
誤）most beautiful flower（最上級として使う場合）

なお、the の付かない most には「非常に」という別の意味があるが、中学入試では扱わない。

■ 覚えておきたい2音節語の区分
-er 型：easy, happy, busy, early, pretty, heavy, angry, lucky, simple
more 型：famous, useful, careful, helpful, active, tired, boring, common

■ 副詞の場合
-ly で終わる副詞は more / most を使う。

例）slowly → more slowly → most slowly
例）carefully → more carefully → most carefully
例）beautifully → more beautifully → most beautifully

ただし early は -ly で終わっているように見えるが、earlier → earliest と変化する例外である。

⚠ 注意：early は形が -ly でも -er 型。反対に slowly は -ly なので more 型。この2語の区別が入試で問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '「この本はあの本より役に立つ。」を英語にしなさい。',
        wrongAnswer: 'This book is usefuler than that one.',
        trapExplanation: '「比較級は -er を付ける」という規則だけを覚えていると、語の長さを確かめずに -er を付けてしまう。useful は2音節で -y で終わらないので more 型である。',
        correctAnswer: 'This book is more useful than that one.',
        correctExplanation:
          'useful は more / most を使う語である。-er を付けるのは1音節の語と、-y で終わる2音節語だけである。同じく famous、careful、helpful も more famous、more careful、more helpful となる。',
      },
      {
        question: '「この問題はあの問題よりも簡単だ。」を英語にしなさい。',
        wrongAnswer: 'This question is more easy than that one.',
        trapExplanation: '2音節の語だから more を使うと考えてしまう。easy は2音節だが -y で終わるので -er 型である、という例外を知らないと引っかかる。',
        correctAnswer: 'This question is easier than that one.',
        correctExplanation:
          '2音節でも -y で終わる語は -er / -est を付ける。さらに〈子音字＋y〉なので y を i に変えて easier とする。happy → happier、busy → busier、early → earlier、heavy → heavier も同じ仲間である。',
      },
    ],
  },

  {
    id: 'eigo_s243',
    subject: 'eigo',
    examType: 'chugaku',
    title: '比較級・最上級のつづりの変化',
    description: 'e で終わる語・y で終わる語・子音字を重ねる語という三つのつづり変化を正確に覚える',
    intro: 'big の比較級は biger ではなく bigger と、g を重ねます。easy は easyer ではなく easier と、y を i に変えます。どちらも読み方を保つためのつづりの決まりです。三つの型に分けて覚えれば、初めて見る語でも自分で変化させられます。',
    order: 743,
    studyPeriod: '小5後半',
    targetLevel: 'moshi',
    keyPoints: [
      'e で終わる語は -r / -st だけを付ける（large → larger → largest）。',
      '〈子音字＋y〉は y を i に変えて -er / -est（easy → easier → easiest）。',
      '〈短母音＋子音字〉で終わる1音節語は子音字を重ねる（big → bigger → biggest）。',
      'hot → hotter、sad → sadder、thin → thinner、fat → fatter も同じ型。',
      'new・slow は母音字が二つ並ぶので重ねない（newer、slower）。',
    ],
    sections: [
      {
        heading: '三つのつづり変化',
        body: `-er / -est を付ける語には、つづりが変わる型が三つある。動詞の -ing・-ed の変化とほぼ同じ規則なので、あわせて覚えるとよい。

■ ①e で終わる語 → -r / -st だけを付ける
large → larger → largest
nice → nicer → nicest
wide → wider → widest
late → later → latest
fine → finer → finest
simple → simpler → simplest

e を二つ重ねて largeer とはしない。

■ ②〈子音字＋y〉→ y を i に変えて -er / -est
easy → easier → easiest
happy → happier → happiest
busy → busier → busiest
early → earlier → earliest
heavy → heavier → heaviest
pretty → prettier → prettiest
angry → angrier → angriest

■ ③〈短母音＋子音字〉で終わる1音節語 → 子音字を重ねる
big → bigger → biggest
hot → hotter → hottest
sad → sadder → saddest
thin → thinner → thinnest
fat → fatter → fattest
red → redder → reddest

母音字が一つで、そのあとに子音字が一つだけ来る語が対象である。

★ ポイント：③は「短い母音の音を守るために子音字を重ねる」と考えるとよい。重ねないと bigger が「バイガー」のような発音に見えてしまう。`,
      },
      {
        heading: '重ねない語との区別',
        body: `子音字を重ねるのは〈短母音＋子音字1つ〉の1音節語だけである。次のような語は重ねない。

■ 母音字が二つ並ぶ語
new → newer → newest（e と w の前に母音字が2つ）
slow → slower → slowest
clean → cleaner → cleanest
cheap → cheaper → cheapest
great → greater → greatest
cool → cooler → coolest

■ 子音字が二つ以上で終わる語
long → longer → longest（ng で終わる）
strong → stronger → strongest
fast → faster → fastest（st で終わる）
young → younger → youngest
short → shorter → shortest
old → older → oldest

■ y の前が母音字のとき
〈母音字＋y〉の場合は y を i に変えない。ただし比較級で問われることはまれである。

■ まとめて確かめる練習
big → bigger（重ねる）／new → newer（重ねない）
hot → hotter（重ねる）／short → shorter（重ねない）
sad → sadder（重ねる）／cheap → cheaper（重ねない）

■ 最上級でも同じ規則
比較級で子音字を重ねた語は、最上級でも重ねる。

例）the biggest／the hottest／the saddest

⚠ 注意：hotest・biger・happyer は入試の誤答の定番。「短母音＋子音字1つなら重ねる」「子音字＋y なら i に変える」を口に出して確かめる習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: 'big の比較級を書きなさい。',
        wrongAnswer: 'biger',
        trapExplanation: '「比較級は -er を付けるだけ」と覚えているため、つづりの変化を確かめずにそのまま -er を付けてしまう。',
        correctAnswer: 'bigger',
        correctExplanation:
          '〈短母音＋子音字1つ〉で終わる1音節の語は、最後の子音字を重ねてから -er を付ける。hot → hotter、sad → sadder、thin → thinner、fat → fatter も同じ規則である。一方 new や cheap は母音字が二つ並ぶので重ねない。',
      },
      {
        question: '「この絵はあの絵よりすてきだ。」を英語にしなさい。',
        wrongAnswer: 'This picture is more nice than that one.',
        trapExplanation: 'nice を「すてきな」という少し長い意味の語だと感じて more を選んでしまう。音節の数ではなく日本語の訳の長さで判断すると誤る。',
        correctAnswer: 'This picture is nicer than that one.',
        correctExplanation:
          'nice は1音節の短い語なので -er を付ける。ただし e で終わっているので -r だけを付けて nicer となる。large → larger、wide → wider、late → later も同じ型である。',
      },
    ],
  },

  {
    id: 'eigo_s244',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'more / most 型の代表語を覚える',
    description: '中学入試で頻出の long word（長い形容詞）をまとめて覚え、正しい形で使えるようにする',
    intro: 'important、interesting、difficult、expensive——これらはすべて more を付けて比べます。共通しているのは語が長いことです。よく出る語をまとまりで覚えてしまえば、テストのときに「-er か more か」と迷う時間がなくなります。',
    order: 744,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'more / most 型の代表語：beautiful, interesting, difficult, important, famous, popular, useful, expensive, exciting, wonderful, careful, delicious, dangerous。',
      '最上級は the most ~ の形（the most beautiful）。the を落とさない。',
      'more / most を使うときは、形容詞そのものは原級のまま。',
      '-ly で終わる副詞も more / most 型（more slowly、most carefully）。',
      '語の意味ではなく音節の数で判断する。',
    ],
    sections: [
      {
        heading: '覚えておきたい more / most 型',
        body: `more / most を使う形容詞・副詞は、中学入試で出るものがほぼ決まっている。次のリストをそのまま覚えてしまうのが最短である。

■ 3音節以上の形容詞
beautiful（美しい）／interesting（おもしろい）／difficult（難しい）／important（大切な）／expensive（高価な）／exciting（わくわくする）／wonderful（すばらしい）／dangerous（危険な）／delicious（おいしい）／popular（人気のある）／comfortable（快適な）

■ 2音節で more 型の形容詞
famous（有名な）／useful（役に立つ）／careful（注意深い）／helpful（助けになる）／boring（退屈な）／tired（疲れた）／active（活発な）／common（共通の）／crowded（混雑した）

■ 例文で確かめる
例）This flower is more beautiful than that one.（この花はあの花より美しい）
例）Science is more interesting than math for me.
例）Health is more important than money.（健康はお金より大切だ）
例）This is the most expensive bag in the shop.
例）He is the most famous singer in Japan.

■ 副詞も同じ
例）Please speak more slowly.（もっとゆっくり話してください）
例）She writes more carefully than I do.

★ ポイント：語の意味の重さではなく、音節の数で決まる。short（短い）も long（長い）も1音節なので、どちらも -er 型である。`,
      },
      {
        heading: 'the most の the を落とさない',
        body: `more / most 型の最上級でとくに多い誤りが、the の落としである。

正）This is the most expensive bag in the shop.
誤）This is most expensive bag in the shop.

正）She is the most popular singer of all.
誤）She is most popular singer of all.

■ 名詞がなくても the は必要
最上級のあとに名詞がなくても the を付ける。

例）This question is the most difficult of the five.（この問題は5問の中でいちばん難しい）
例）That movie was the most exciting of all.

■ more のあとに than を忘れない
比較級の文には than が必要である。

正）This book is more interesting than that one.
誤）This book is more interesting that one.

■ than のあとの繰り返しは one / ones で
同じ名詞を繰り返すかわりに one（単数）／ones（複数）を使う。

例）This bag is more expensive than that one.
例）These shoes are more comfortable than those.

■ 比較級・最上級の書きかえ
例）Tom is more careful than Ken.
　＝ Ken is less careful than Tom.（中学入試では参考程度）

⚠ 注意：the most beautiful のように the・most・原級の三つがそろって初めて最上級になる。どれか一つでも欠けると誤りになる。`,
      },
    ],
    trapExamples: [
      {
        question: '「これは花の中でいちばん美しい。」を英語にしなさい。',
        wrongAnswer: 'This is the beautifullest flower.',
        trapExplanation: '最上級は -est を付けるものだと覚えているため、長い語にも機械的に -est を付けてしまう。beautifullest という語は存在しない。',
        correctAnswer: 'This is the most beautiful flower.',
        correctExplanation:
          'beautiful は3音節の長い語なので、most を前に置いて最上級を作る。形容詞そのものは原級のまま変化させない。同じく the most interesting、the most important、the most difficult となる。',
      },
      {
        question: '「これはすべての中でいちばん高価だ。」を英語にしなさい。',
        wrongAnswer: 'This is most expensive of all.',
        trapExplanation: 'most を付ければ最上級になると考え、その前の the を落としてしまう。日本語の「いちばん高価だ」には the にあたる語がないため気づきにくい。',
        correctAnswer: 'This is the most expensive of all.',
        correctExplanation:
          '最上級には必ず the が必要である。〈the＋most＋原級〉の三つがそろって最上級になる。あとに名詞がなくても the は省略できない。範囲を表す of all（すべての中で）もセットで覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s245',
    subject: 'eigo',
    examType: 'chugaku',
    title: '比較級・最上級を使う基本文の組み立て',
    description: '形容詞と副詞の両方について、比較級・最上級を使った文を正しく組み立てられるようにする',
    intro: 'This book is more interesting than that one. と He runs faster than I do. — 形容詞の比較と副詞の比較では、文の作りが少しちがいます。どちらも than のあとに何を置くかがかぎです。基本の型を、手を動かしながら固めていきます。',
    order: 745,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '〈A＋be動詞＋比較級＋than＋B〉が形容詞の比較級の基本形。',
      '〈A＋一般動詞＋比較級＋than＋B〉が副詞の比較級の基本形（He runs faster than Tom.）。',
      '2つ（2人）を比べるときは比較級、3つ（3人）以上のときは最上級。',
      'than のあとの繰り返しは one / ones、または do / does / did で受ける。',
      '最上級の範囲は in（場所・集団）か of（数・仲間）で表す。',
    ],
    sections: [
      {
        heading: '形容詞と副詞、それぞれの基本形',
        body: `比較の文は、形容詞を使う場合と副詞を使う場合で形が少しちがう。

■ 形容詞の比較級 ─ be動詞を使う
〈A＋be動詞＋比較級＋than＋B〉

例）Ken is taller than Tom.（ケンはトムより背が高い）
例）This bag is heavier than that one.
例）Today is colder than yesterday.

■ 副詞の比較級 ─ 一般動詞を使う
〈A＋一般動詞＋比較級＋than＋B〉

例）Ken runs faster than Tom.（ケンはトムより速く走る）
例）She gets up earlier than her brother.
例）He speaks English better than I do.

be動詞と一般動詞を混ぜて Ken is run faster ... としないように注意する。

■ 形容詞の最上級
〈A＋be動詞＋the＋最上級＋in / of ~〉

例）Ken is the tallest in his class.
例）This is the biggest dog of the five.

■ 副詞の最上級
〈A＋一般動詞＋(the)＋最上級＋in / of ~〉

例）Ken runs (the) fastest of the three.
例）She sings (the) best in our school.

副詞の最上級では the を省略できるが、付けても誤りではない。

★ ポイント：文を作るときは、まず主語と動詞（be動詞か一般動詞か）を決めてから、比較級・最上級を入れる。`,
      },
      {
        heading: '比較する相手をそろえる',
        body: `比較の文では、比べる二つが同じ種類のものでなければならない。

■ 名詞の繰り返しは one / ones
例）This bag is bigger than that one.（one＝bag）
例）These pencils are longer than those.

■ 動詞の繰り返しは do / does / did
例）He runs faster than I do.（do＝run）
例）She studies harder than he does.
例）I got up earlier than my sister did.

■ 所有を表すときは mine / yours など
例）My bag is bigger than yours.（yours＝your bag）
例）His house is newer than mine.

than のあとに you・he をそのまま置くと「かばんと人」を比べることになってしまう。

誤）My bag is bigger than you.（私のかばんはあなたより大きい？）
正）My bag is bigger than yours.

■ 2つなら比較級、3つ以上なら最上級
比べる数によって形が決まる。

例）Which is bigger, Japan or Australia?（2つ → 比較級）
例）Which is the biggest of the three?（3つ → 最上級）
例）She plays the piano best of the three.（3人 → 最上級）

⚠ 注意：of the three（3人の中で）とあるのに比較級 better を使ってしまう誤りが多い。範囲を示す語句を見て、比較級か最上級かを判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私のかばんはあなたのかばんより大きい。」を英語にしなさい。',
        wrongAnswer: 'My bag is bigger than you.',
        trapExplanation: '日本語の「あなたのかばんより」を短く「あなたより」と考えてしまい、than のあとに you を置いてしまう。これでは「かばん」と「あなた」という別の種類のものを比べることになる。',
        correctAnswer: 'My bag is bigger than yours.',
        correctExplanation:
          '比較の文では同じ種類のものどうしを比べる。your bag の繰り返しをさけるには yours（あなたのもの）を使う。同じく His house is newer than mine.（mine＝my house）となる。名詞の繰り返しは one / ones でも表せる。',
      },
      {
        question: '「彼女は3人の中でいちばん上手にピアノを弾く。」を英語にしなさい。',
        wrongAnswer: 'She plays the piano better of the three.',
        trapExplanation: '「上手に」という日本語に対して well の比較級 better がすぐ思い浮かぶため、比べる相手が3人であることを確かめずに比較級を使ってしまう。',
        correctAnswer: 'She plays the piano (the) best of the three.',
        correctExplanation:
          '3つ（3人）以上の中でいちばんと言うときは最上級を使う。well の最上級は best である。of the three という範囲を示す語句が最上級のしるしになる。2人を比べるときだけ better than ~ の形になる。',
      },
    ],
  },

  // ───────────────── 6. 不規則変化（s246〜s248） ─────────────────
  {
    id: 'eigo_s246',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則変化①：good / well → better → best、bad → worse → worst',
    description: 'もっとも出題される二組の不規則変化と、like ~ better / best の言い方を身につける',
    intro: 'good の比較級は gooder ではなく better、最上級は best です。bad は worse、worst と変わります。もっともよく使う語ほど、規則から外れた形をしているのです。日本語の「よい・よりよい」とはまったくちがう形なので、音ごと覚えてしまうのが早道です。',
    order: 746,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'good（よい）も well（上手に・元気な）も、比較級 better・最上級 best。',
      'bad（悪い）と ill（病気の）は、比較級 worse・最上級 worst。',
      'I like A better than B.（BよりAが好き）／I like A the best.（Aがいちばん好き）。',
      'gooder・weller・badder という形は存在しない。',
      'more better のように more と重ねてはいけない。',
    ],
    sections: [
      {
        heading: 'good / well → better → best',
        body: `いくつかの語は -er / -est も more / most も使わず、まったく形の変わる不規則変化をする。中でも最重要なのが good と well である。

good（よい・形容詞）→ better → best
well（上手に・副詞／元気な・形容詞）→ better → best

形容詞の good と副詞の well が、比較級・最上級では同じ形になるのが特徴である。

例）This book is good. → This book is better than that one. → This book is the best of the three.
例）He plays tennis well. → He plays tennis better than Tom. → He plays tennis (the) best in his class.

■ bad → worse → worst
bad（悪い）→ worse → worst
ill（病気の）も同じく worse → worst と変化する。

例）The weather is bad today. → It is worse than yesterday. → It was the worst day of the year.
例）My score is worse than yours.（私の点数はあなたより悪い）

■ 存在しない形
gooder、goodest、weller、badder、baddest、more good、more bad はいずれも誤りである。不規則変化の語には more を付けない。

■ 例文で定着させる
例）Which is better, tea or coffee?（お茶とコーヒーではどちらがよいですか）
例）This is the best restaurant in this town.
例）Today is the worst day of my life.

★ ポイント：better と best は、good と well という二つの語の比較級・最上級を兼ねている。文の中で形容詞か副詞かを見分けて訳す。`,
      },
      {
        heading: 'like ~ better / the best',
        body: `「〜のほうが好き」「〜がいちばん好き」は、この不規則変化を使って表す。

■ like A better than B ＝ BよりAが好き
例）I like soccer better than baseball.（野球よりサッカーが好きだ）
例）She likes cats better than dogs.
例）Which do you like better, summer or winter?（夏と冬ではどちらが好きですか）
　　— I like summer better.

■ like A the best ＝ Aがいちばん好き
3つ以上の中でいちばん好きと言うときは the best を使う。

例）I like soccer the best of all sports.（すべてのスポーツの中でサッカーがいちばん好きだ）
例）Which season do you like the best?（どの季節がいちばん好きですか）
　　— I like spring the best.

■ 位置に注意
better・the best は目的語のあとに置く。

正）I like soccer better than baseball.
誤）I like better soccer than baseball.

■ よくある誤り
誤）I like soccer more better than baseball.（more と better の重複）
誤）I like soccer than baseball.（better の落とし）
誤）I like soccer the better of all sports.（3つ以上なら the best）

⚠ 注意：2つを比べるときは better、3つ以上なら the best。「どちらが」なら better、「どれがいちばん」なら the best と判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は私より上手に泳ぐ。」を英語にしなさい。',
        wrongAnswer: 'He swims more well than I do.',
        trapExplanation: 'well を長い語ではないと感じつつも -er の付け方がわからず、迷って more を付けてしまう。あるいは weller という存在しない形を作ってしまう。',
        correctAnswer: 'He swims better than I do.',
        correctExplanation:
          'well は不規則変化で、比較級は better、最上級は best である。weller・more well という形は存在しない。形容詞の good も同じく better・best と変化する。不規則変化の語には more を付けない。',
      },
      {
        question: '「私は野球よりサッカーのほうが好きだ。」を英語にしなさい。',
        wrongAnswer: 'I like soccer more better than baseball.',
        trapExplanation: '「もっと好き」という日本語の感覚から more を足してしまい、比較級 better と重ねてしまう。比較級は一度だけでよいという原則を忘れている。',
        correctAnswer: 'I like soccer better than baseball.',
        correctExplanation:
          'better はそれ自体が well の比較級なので、more と重ねてはいけない。〈like A better than B〉で「BよりAが好き」を表す。3つ以上の中でいちばん好きなら I like soccer the best of all sports. となる。',
      },
    ],
  },

  {
    id: 'eigo_s247',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則変化②：many / much → more → most、little → less → least',
    description: '数量を表す語の不規則変化と、more が持つ二つの意味を整理する',
    intro: 'many も much も、比較級は同じ more、最上級も同じ most です。数のほうも量のほうも、一つの形にまとまってしまいます。反対に little は less、least と変わります。少しややこしいので、表にして一度で頭に入れてしまいましょう。',
    order: 747,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'many（数が多い）も much（量が多い）も、比較級 more・最上級 most。',
      'little（量が少ない）→ less → least。few（数が少ない）→ fewer → fewest。',
      'more には「より多くの」と「もっと〜」の二つの働きがある。',
      'the most money（いちばん多くのお金）のように名詞を伴うことも多い。',
      'more books than you のように、名詞の前に置いて数量を比べる。',
    ],
    sections: [
      {
        heading: 'many / much → more → most',
        body: `数量を表す many・much も不規則変化をする。しかもどちらも比較級が more、最上級が most になる。

many（数が多い）→ more → most
much（量が多い）→ more → most

■ 数を比べる
例）I have more books than you.（私はあなたより多くの本を持っている）
例）She has more friends than I do.
例）He has the most books in his class.（彼はクラスでいちばん多くの本を持っている）

■ 量を比べる
例）I have more money than my brother.（兄より多くのお金を持っている）
例）We need more time.（もっと時間が必要だ）
例）He has the most money of the three.

■ more の二つの働き
more には二つの働きがあり、これを混同すると読みまちがえる。

①many / much の比較級として「より多くの」
例）more books（より多くの本）

②長い形容詞・副詞の比較級を作る語として「もっと〜」
例）more beautiful（より美しい）

見分け方は、more のあとに名詞が来るか形容詞が来るかである。名詞なら①、形容詞・副詞なら②である。

★ ポイント：more books は「本の数が多い」、more beautiful は「美しさの程度が上」。あとに続く語で判断する。`,
      },
      {
        heading: 'little → less → least、few → fewer → fewest',
        body: `「少ない」を表す語も不規則変化をする。数と量で語がちがう点に注意する。

■ little（量が少ない）→ less → least
例）I have less time than you.（あなたより時間が少ない）
例）He drinks less coffee than before.
例）This is the least expensive of the three.（3つの中でいちばん安い）

less を使うときは、数えられない名詞が続く。

■ few（数が少ない）→ fewer → fewest
例）There are fewer students this year.（今年は生徒が少ない）
例）He made fewer mistakes than I did.

fewer を使うときは、数えられる名詞の複数形が続く。

■ 使い分けのまとめ
数が多い：many → more → most（more books）
量が多い：much → more → most（more water）
数が少ない：few → fewer → fewest（fewer books）
量が少ない：little → less → least（less water）

■ little の別の意味
little には「小さい」という意味もあり、その場合は smaller・smallest を使うのがふつうである。

例）a little dog（小さな犬）→ a smaller dog

⚠ 注意：less time（時間が少ない）を littler time としない。littler という形は数量の意味では使わない。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はあなたより多くの本を持っている。」を英語にしなさい。',
        wrongAnswer: 'I have many books than you.',
        trapExplanation: '「多くの本」という日本語をそのまま many books と訳し、その後に than を続けてしまう。比較の文なので many を比較級にしなければならないことに気づかない。',
        correctAnswer: 'I have more books than you (do).',
        correctExplanation:
          'many の比較級は more である。〈more＋名詞＋than〉の形で数量を比べる。much の比較級も more なので、I have more money than you. のように量にも使える。最上級は the most books となる。',
      },
      {
        question: '「私はあなたより時間が少ない。」を英語にしなさい。',
        wrongAnswer: 'I have littler time than you.',
        trapExplanation: '「少ない」＝little と覚えているため、規則どおり -er を付けて littler としてしまう。数量を表す little の比較級が less という別の語であることを知らない。',
        correctAnswer: 'I have less time than you (do).',
        correctExplanation:
          '数量を表す little の比較級は less、最上級は least である。数えられない名詞（time・water・money）と使う。数えられる名詞の場合は few → fewer → fewest を使い、fewer books のようになる。',
      },
    ],
  },

  {
    id: 'eigo_s248',
    subject: 'eigo',
    examType: 'chugaku',
    title: '不規則変化③：far → farther / further と総整理',
    description: 'far の変化を確認したうえで、不規則変化する語をまとめて整理し確実に使えるようにする',
    intro: 'far の比較級には farther と further の二つがあります。実際のきょりには farther、「さらに進んだ」という意味には further を使うのが目安です。ここまでに出てきた不規則変化をすべて集めて、抜けがないか点検しておきましょう。',
    order: 748,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'far → farther → farthest（距離が遠い）／far → further → furthest（程度がさらに進む）。',
      '中学入試では距離の farther を中心に覚えればよい。',
      '不規則変化の語：good/well、bad/ill、many/much、little、far。',
      'far は比較級の前に置いて「ずっと」と強める用法もある（far more interesting）。',
      '不規則変化の語には -er も more も付けない。',
    ],
    sections: [
      {
        heading: 'far の変化',
        body: `far（遠い・遠くに）は二通りの変化を持つ。

■ 距離を表すとき：far → farther → farthest
例）His house is farther than mine.（彼の家は私の家より遠い）
例）Which is farther, the station or the library?（駅と図書館ではどちらが遠いですか）
例）This is the farthest point from the school.

■ 程度がさらに進むとき：far → further → furthest
例）We need further information.（さらに詳しい情報が必要だ）
例）Let's discuss it further.

中学入試で問われるのはほとんどが距離のほうなので、まず farther を確実に覚え、further は「さらに詳しい」という意味で出てきたら理解できればよい。

■ よくある誤り
誤）farer、farrer、more far
正）farther

far には -er も more も付けない。

■ far のもう一つの働き ─ 比較級を強める
far を比較級の前に置くと「ずっと・はるかに」という強調になる。

例）This book is far more interesting than that one.（この本はあの本よりずっとおもしろい）
例）He is far taller than me.

★ ポイント：far 自体が変化する場合（farther）と、他の比較級を強める場合（far more ~）を区別する。`,
      },
      {
        heading: '不規則変化の総整理',
        body: `中学入試で必要な不規則変化はこれだけである。表で一気に覚えてしまう。

good（よい）／well（上手に・元気な）→ better → best
bad（悪い）／ill（病気の）→ worse → worst
many（数が多い）／much（量が多い）→ more → most
little（量が少ない）→ less → least
few（数が少ない）→ fewer → fewest
far（遠い）→ farther → farthest（distance）／further → furthest（degree）

■ 覚え方のこつ
①good と well が同じ better・best になる
②bad と ill が同じ worse・worst になる
③many と much が同じ more・most になる
このように「二つの語が一つの形にまとまる」という特徴でグループ化すると覚えやすい。

■ 確認問題の形で
This is a good book. → This is a better book than that one. → This is the best book of the three.
The weather is bad. → The weather is worse than yesterday. → It is the worst weather of the year.
I have much money. → I have more money than you. → I have the most money.

■ 絶対にしない誤り
gooder／goodest／weller／badder／worser／more better／most best／farer／littler（数量の意味で）

worse に -er を付けた worser も存在しない形である。

⚠ 注意：不規則変化の語は、変化した形にさらに -er や more を足さない。better が最終形である。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼の家は私の家より遠い。」を英語にしなさい。',
        wrongAnswer: 'His house is farer than mine.',
        trapExplanation: 'far が1音節の短い語なので、規則どおり -er を付けて farer としてしまう。far が不規則変化することを知らないと必ず引っかかる。',
        correctAnswer: 'His house is farther than mine.',
        correctExplanation:
          'far は不規則変化で、距離を表すときは farther → farthest となる。程度がさらに進む意味では further → furthest を使う。farer・more far という形は存在しない。',
      },
      {
        question: '「私の点数は昨日より悪い。」を英語にしなさい。',
        wrongAnswer: 'My score is more bad than yesterday.',
        trapExplanation: 'bad の比較級 worse を思い出せず、規則的な作り方にたよって more を付けてしまう。badder という形を作ってしまうこともある。',
        correctAnswer: 'My score is worse than yesterday.',
        correctExplanation:
          'bad の比較級は worse、最上級は worst である。more bad・badder・worser はいずれも誤りである。ill（病気の）も同じく worse・worst と変化する。不規則変化の語には more も -er も付けない。',
      },
    ],
  },

  // ───────────────── 7. 原級比較 as 〜 as（s249〜s252） ─────────────────
  {
    id: 'eigo_s249',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'as ~ as ─ 「同じくらい〜だ」',
    description: '二つの as ではさんで「同じくらい」を表す原級比較の形を身につける',
    intro: 'Tom is as tall as Ken. は「トムはケンと同じくらい背が高い」という意味です。二つの as ではさまれた真ん中には、taller ではなく tall がそのまま入ります。比べているのに形を変えない、というのがこの表現の意外なところです。',
    order: 749,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '〈A is as 原級 as B.〉で「AはBと同じくらい〜だ」を表す。',
      'as と as の間に入るのは必ず原級。比較級・最上級は入れない。',
      '副詞にも使える（She runs as fast as her brother.）。',
      'as のあとで名詞を繰り返すときは mine / yours / one を使う。',
      '〈as many＋複数名詞＋as〉〈as much＋数えられない名詞＋as〉で数量も比べられる。',
    ],
    sections: [
      {
        heading: 'as ~ as の基本',
        body: `二つのものが同じ程度であることを表すときは、形容詞・副詞を二つの as ではさむ。

■ 基本の形
〈A＋be動詞＋as＋原級＋as＋B〉

例）Ken is as tall as Tom.（ケンはトムと同じくらい背が高い）
例）This book is as interesting as that one.（この本はあの本と同じくらいおもしろい）
例）Today is as hot as yesterday.

最初の as が「同じくらい」、二つめの as が「〜と」にあたる。

■ 副詞にも使える
〈A＋一般動詞＋as＋原級＋as＋B〉

例）She runs as fast as her brother.（彼女は兄と同じくらい速く走る）
例）He studies as hard as I do.
例）I get up as early as my mother.

■ 間に入るのは必ず原級
as と as の間には、変化させていないもとの形（原級）を入れる。

正）as tall as／as interesting as／as fast as
誤）as taller as／as more interesting as／as faster as

「同じくらい」なのだから、比べて差をつける比較級は必要ない、と考えるとよい。

■ 比べる相手をそろえる
例）My bag is as big as yours.（yours＝your bag）
例）This pen is as good as that one.（one＝pen）

★ ポイント：as ~ as を見たら、間の語が原級になっているかをまず確かめる。ここが最頻出の出題ポイントである。`,
        figureId: 'lf_eigoext07_249',
      },
      {
        heading: '数量を比べる as many / as much',
        body: `数や量が同じであることを表すときは、as と as の間に〈many＋複数名詞〉〈much＋数えられない名詞〉を入れる。

■ as many＋複数名詞＋as
例）I have as many books as you.（あなたと同じくらい多くの本を持っている）
例）She has as many friends as her sister.

■ as much＋数えられない名詞＋as
例）I have as much money as he does.（彼と同じくらいお金を持っている）
例）We need as much time as you.

名詞は as と as の間に入れる。外に出してはいけない。

正）as many books as you
誤）as many as you books

■ 〈as＋原級＋as〉のあとの形
as のあとには名詞・代名詞のほか、主語＋動詞を続けることもできる。

例）He is as busy as I am.
例）She sings as well as her mother does.

■ 進級のための整理
同じくらい：A is as tall as B.
Aのほうが上：A is taller than B.
Bのほうが上：A is not as tall as B.（次の課）

⚠ 注意：as many books as のように、名詞は必ず二つの as の内側に置く。並べかえ問題で頻出である。`,
      },
    ],
    trapExamples: [
      {
        question: '「ケンはトムと同じくらい背が高い。」を英語にしなさい。',
        wrongAnswer: 'Ken is as taller as Tom.',
        trapExplanation: '「背が高い」を比べる文だと考えて、反射的に比較級 taller を使ってしまう。比較の文にはすべて比較級が必要だと思いこんでいると引っかかる。',
        correctAnswer: 'Ken is as tall as Tom.',
        correctExplanation:
          'as と as の間に入るのは必ず原級である。「同じくらい」なので差をつける比較級は使わない。長い語も同じで、as more interesting as ではなく as interesting as となる。',
      },
      {
        question: '「私の犬はあなたの犬と同じくらい大きい。」を英語にしなさい。',
        wrongAnswer: 'My dog is as big as your.',
        trapExplanation: 'your dog の dog を省略するところまでは考えたが、your のままにしてしまう。所有格の your は後ろに名詞がないと使えないことを忘れている。',
        correctAnswer: 'My dog is as big as yours.（= as your dog）',
        correctExplanation:
          '後ろに名詞を置かずに「あなたのもの」を表すときは、所有代名詞の yours を使う。mine・yours・his・hers・ours・theirs がその形である。名詞を残して as your dog と書いてもよい。',
      },
    ],
  },

  {
    id: 'eigo_s250',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'not as ~ as ─ 「〜ほど…ない」',
    description: '原級比較の否定形の意味を正しくとらえ、比較級を使った文に書きかえられるようにする',
    intro: 'Tom is not as tall as Ken. は「トムはケンほど背が高くない」。つまりケンのほうが高いのです。「同じくらい高くない」と日本語で考えるとまよいますが、not が付くと「およばない」という意味になります。比較級を使った文への書きかえもできます。',
    order: 750,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '〈A is not as 原級 as B.〉は「AはBほど〜ない」＝Bのほうが上、という意味。',
      '「同じくらい〜ない」と訳すのは誤り。',
      'A is not as tall as B. ＝ B is taller than A.（主語が入れかわる）。',
      'not so ~ as という形も同じ意味で使われる。',
      '書きかえのときは主語を入れかえるのを忘れない。',
    ],
    sections: [
      {
        heading: '意味のとらえ方',
        body: `as ~ as を否定文にすると「〜ほど…ない」という意味になる。

■ 基本の形
〈A＋be動詞＋not as＋原級＋as＋B〉

例）Tom is not as tall as Ken.（トムはケンほど背が高くない）
例）This book is not as interesting as that one.（この本はあの本ほどおもしろくない）
例）Today is not as cold as yesterday.（今日は昨日ほど寒くない）

■ 意味を正しくつかむ
「トムはケンほど背が高くない」ということは、ケンのほうが背が高いという意味である。「二人とも背が高くない」という意味ではないし、「同じくらい高くない」でもない。

Tom is not as tall as Ken. → 背が高いのはケン。

■ 副詞の場合
例）He doesn't run as fast as I do.（彼は私ほど速く走らない）
例）She doesn't study as hard as her brother.

一般動詞の文では don't / doesn't / didn't を使って否定する。

■ not so ~ as
not as ~ as は not so ~ as と書くこともでき、意味は同じである。

例）Tom is not so tall as Ken.

★ ポイント：not as ~ as を見たら、「as のあとの人・ものが上」と反射的に判断する。`,
        figureId: 'lf_eigoext07_250',
      },
      {
        heading: '比較級への書きかえ',
        body: `not as ~ as の文は、比較級を使って書きかえられる。このとき主語が入れかわるのが最大のポイントである。

■ 書きかえの手順
①not as ~ as の文で、下のほうが主語（A）、上のほうが as のあと（B）。
②比較級の文では上のほう（B）を主語にする。
③形容詞を比較級にして than でつなぐ。

例）Tom is not as tall as Ken.
　＝ Ken is taller than Tom.（ケンのほうが背が高い）

例）This book is not as interesting as that one.
　＝ That book is more interesting than this one.

例）I don't run as fast as he does.
　＝ He runs faster than I do.

■ 主語を入れかえない誤り
誤）Tom is not as tall as Ken. ＝ Tom is taller than Ken.
これでは意味が正反対になってしまう。

■ 原級での書きかえも
逆に、比較級の文を not as ~ as に書きかえるときも主語を入れかえる。

例）Ken is taller than Tom. ＝ Tom is not as tall as Ken.

■ 三つの形をまとめて
Ken is taller than Tom.（ケンのほうが上）
Ken is as tall as Tom.（同じくらい）
Ken is not as tall as Tom.（トムのほうが上）

⚠ 注意：書きかえ問題では、まず「どちらが上か」を日本語で確かめてから英文を作る。主語の入れかえを機械的にできるようにしておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文を日本語にしなさい。Tom is not as tall as Ken.',
        wrongAnswer: 'トムとケンは同じくらい背が高くない。',
        trapExplanation: 'as ~ as を「同じくらい」と覚えているため、not を足して「同じくらい〜ない」と直訳してしまう。二人とも背が低い、という誤った意味に読んでしまう。',
        correctAnswer: 'トムはケンほど背が高くない。（＝ケンのほうが背が高い）',
        correctExplanation:
          'not as ~ as は「〜ほど…ない」という意味で、as のあとに来る人・もののほうが上である。この文はケンのほうが背が高いことを表す。比較級で書きかえると Ken is taller than Tom. となる。',
      },
      {
        question: 'Ken is taller than Tom. をほぼ同じ意味の not as ~ as の文に書きかえなさい。',
        wrongAnswer: 'Ken is not as tall as Tom.',
        trapExplanation: 'もとの文の主語 Ken をそのまま主語にして書きかえてしまう。not as ~ as では上下の関係が逆になることに気づかず、意味が正反対の文を作ってしまう。',
        correctAnswer: 'Tom is not as tall as Ken.',
        correctExplanation:
          'not as ~ as では、主語のほうが下、as のあとのほうが上になる。もとの文でケンのほうが上なので、書きかえた文ではトムを主語にしなければならない。書きかえのときは主語を入れかえる、と覚える。',
      },
    ],
  },

  {
    id: 'eigo_s251',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'as ~ as possible / as ~ as one can',
    description: '「できるだけ〜」を表す二つの言い方と、その中に入る語の形を身につける',
    intro: '「できるだけ早く来て」は Come as soon as possible. です。as soon as you can とも言えます。急いでほしい気持ちを表す、会話でとてもよく使う形です。possible を使うか can を使うかで、うしろの作りが少し変わります。',
    order: 751,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '〈as＋原級＋as possible〉＝「できるだけ〜」。',
      '〈as＋原級＋as＋主語＋can / could〉も同じ意味。主語と時制を文に合わせる。',
      'as soon as possible（できるだけ早く）は最頻出。',
      'as many＋複数名詞＋as possible（できるだけ多くの〜）の語順に注意。',
      '過去の文では could を使う（as fast as he could）。',
    ],
    sections: [
      {
        heading: '二つの言い方',
        body: `「できるだけ〜」は、原級比較を使って表す。二通りの言い方があり、どちらも同じ意味である。

■ ①as＋原級＋as possible
例）Please come as soon as possible.（できるだけ早く来てください）
例）Run as fast as possible.
例）Speak as slowly as possible.

■ ②as＋原級＋as＋主語＋can
例）Please come as soon as you can.
例）Run as fast as you can.
例）I studied as hard as I could.

②では主語を文の主語に合わせる。命令文なら you、I が主語なら I、he が主語なら he である。

正）He ran as fast as he could.
誤）He ran as fast as you can.

■ 時制も合わせる
過去の文では could を使う。

例）She walked as quietly as she could.（彼女はできるだけ静かに歩いた）
例）I ate as much as I could.

■ as soon as possible
「できるだけ早く」を表すこの表現は、手紙やメールでもよく使われる最頻出の形である。

例）Please call me back as soon as possible.

★ ポイント：possible を使う言い方は主語が要らないので簡単だが、can を使う言い方では主語と時制をそろえる必要がある。`,
      },
      {
        heading: '数量を入れる形',
        body: `「できるだけ多くの〜」のように名詞を入れるときは、名詞を二つの as の内側に置く。

■ as many＋複数名詞＋as possible
例）Read as many books as possible.（できるだけ多くの本を読みなさい）
例）I want to meet as many people as I can.

■ as much＋数えられない名詞＋as possible
例）Drink as much water as possible.（できるだけ多くの水を飲みなさい）
例）He saved as much money as he could.

数えられる名詞なら many、数えられない名詞なら much である。ここで many と much を取りちがえる誤りが多い。

誤）as much books as possible
正）as many books as possible

■ 語順の確認
〈as＋many / much＋名詞＋as＋possible / 主語＋can〉

名詞を外に出してしまう誤りが多い。

誤）as many as possible books
正）as many books as possible

■ よく使う表現
as soon as possible（できるだけ早く）
as fast as possible（できるだけ速く）
as often as possible（できるだけ頻繁に）
as carefully as possible（できるだけ注意深く）
as early as possible（できるだけ早い時刻に）

soon（時期が早い）と early（時刻が早い）と fast（速度が速い）の区別も確かめておく。

⚠ 注意：as ~ as possible の as のあとに you を入れて as soon as you possible とする誤りがある。possible を使うときは主語を入れない。`,
      },
    ],
    trapExamples: [
      {
        question: '「できるだけ速く走りなさい。」を英語にしなさい。（can を使って）',
        wrongAnswer: 'Run as fast as can.',
        trapExplanation: 'as ~ as possible の形をまねて、can のほうにも主語を入れずに書いてしまう。can は助動詞なので、主語がなければ文にならない。',
        correctAnswer: 'Run as fast as you can.',
        correctExplanation:
          '〈as＋原級＋as＋主語＋can〉の形では、必ず主語が必要である。命令文なので主語は you になる。possible を使うなら Run as fast as possible. と主語なしで書ける。過去の文なら as fast as he could のように could を使う。',
      },
      {
        question: '「できるだけ多くの本を読みなさい。」を英語にしなさい。',
        wrongAnswer: 'Read as much books as possible.',
        trapExplanation: '「できるだけ多く」というひとかたまりの意味に気を取られて、後ろの名詞が数えられるかどうかを確かめずに much を選んでしまう。',
        correctAnswer: 'Read as many books as possible.',
        correctExplanation:
          'books は数えられる名詞の複数形なので many を使う。数えられない名詞なら as much water as possible のように much を使う。名詞は必ず二つの as の内側に置き、as many as possible books としない。',
      },
    ],
  },

  {
    id: 'eigo_s252',
    subject: 'eigo',
    examType: 'chugaku',
    title: '倍数の表し方 ─ twice as ~ as',
    description: '「〜の2倍」「〜の3倍」を原級比較で表す形を、比較級との混同をさけて身につける',
    intro: '「2倍」は twice as large as、「3倍」は three times as large as です。ここで larger としないことに注意します。日本語の「2倍大きい」につられて比較級を使うと形がくずれます。倍数は原級ではさむ、と覚えてしまいましょう。',
    order: 752,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '〈倍数＋as＋原級＋as〉で「〜の何倍…だ」を表す。',
      '2倍は twice、3倍以上は three times のように times を使う。',
      'half as ~ as は「〜の半分の…」。',
      '倍数の文でも as と as の間は原級（twice as heavy as）。',
      'twice heavier than のように比較級と混ぜてはいけない。',
    ],
    sections: [
      {
        heading: '倍数の基本形',
        body: `「〜の2倍の大きさだ」のように倍数を表すときも、原級比較の形を使う。

■ 基本の形
〈A＋be動詞＋倍数＋as＋原級＋as＋B〉

例）This box is twice as heavy as that one.（この箱はあの箱の2倍の重さだ）
例）My room is three times as large as yours.（私の部屋はあなたの部屋の3倍の広さだ）
例）This river is four times as long as that one.

■ 倍数の言い方
2倍：twice（two times とはあまり言わない）
3倍：three times
4倍：four times
半分：half

例）This bag is half as heavy as that one.（このかばんはあの箱の半分の重さだ）

■ 語順
倍数は最初の as の前に置く。

正）twice as heavy as
誤）as twice heavy as
誤）as heavy twice as

■ 数量を入れる形
例）He has twice as many books as I do.（彼は私の2倍の本を持っている）
例）She drinks twice as much water as I do.

名詞は二つの as の内側に入れる。

★ ポイント：倍数の文でも「as と as の間は原級」という規則は変わらない。倍数の語だけが前に足されると考える。`,
        figureId: 'lf_eigoext07_252',
      },
      {
        heading: '比較級と混ぜない',
        body: `倍数の表現でもっとも多い誤りは、比較級と混ぜてしまうことである。

誤）This box is twice heavier than that one.
正）This box is twice as heavy as that one.

倍数は「何倍」という同じ物差しでの比べ方なので、差をつける比較級ではなく原級比較を使う。

■ よくある誤りの形
誤）three times as larger as
誤）twice as more heavy as
誤）twice bigger than

いずれも as と as の間に比較級を入れてしまっている。

■ 別の言い方（参考）
倍数は名詞を使って表すこともできる。

例）This box is twice the weight of that one.（この箱はあの箱の2倍の重さだ）
例）My room is three times the size of yours.

中学入試では as ~ as の形で書ければ十分である。

■ 日本語からの組み立て手順
①何倍かを決める（twice / three times）
②形容詞を原級のまま置く
③as ではさむ
④比べる相手を置く

例）「この木はあの木の2倍の高さだ」
→ twice ＋ as tall as ＋ that tree
→ This tree is twice as tall as that one.

⚠ 注意：twice を使うときは as を二つとも忘れないこと。twice as tall that one のように片方を落とす誤りも多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「この箱はあの箱の2倍の重さだ。」を英語にしなさい。',
        wrongAnswer: 'This box is twice heavier than that one.',
        trapExplanation: '「2倍重い」という日本語から「比べているのだから比較級」と考え、heavier than を使ってしまう。倍数が原級比較の形を使うことを知らないと引っかかる。',
        correctAnswer: 'This box is twice as heavy as that one.',
        correctExplanation:
          '倍数は〈倍数＋as＋原級＋as〉の形で表す。as と as の間は原級なので heavy のままである。3倍なら three times as heavy as、半分なら half as heavy as となる。',
      },
      {
        question: '「私の部屋はあなたの部屋の3倍の広さだ。」を英語にしなさい。',
        wrongAnswer: 'My room is three times as larger as yours.',
        trapExplanation: '倍数のあとに as ~ as を使うところまでは正しいが、「広い」を比べているという意識から、間の語を比較級 larger にしてしまう。',
        correctAnswer: 'My room is three times as large as yours.',
        correctExplanation:
          'as と as の間に入るのは必ず原級である。倍数が付いても規則は変わらない。3倍以上は three times、four times のように times を使い、2倍だけは twice という語を使う。',
      },
    ],
  },

  // ───────────── 8. 比較級を使った表現（s253〜s256） ─────────────
  {
    id: 'eigo_s253',
    subject: 'eigo',
    examType: 'chugaku',
    title: '比較級＋than の使い方をかためる',
    description: 'than のあとに置く語の形をそろえ、比較級の文を正確に組み立てる',
    intro: 'He is taller than me. と He is taller than I am. — どちらも耳にします。than のあとに何を置くかは、実は少しゆれのある部分です。ただし試験では形をそろえた言い方が求められます。何と何を比べているのかを、はっきりさせる練習をします。',
    order: 753,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '比較級の文には than が必要。than を落とすと文が成り立たない。',
      'than のあとは〈主語＋動詞〉でもよい（than I am / than he does）。',
      '所有を表すときは mine / yours / his / hers を使う。',
      '名詞の繰り返しは one / ones で受ける。',
      '比較級にするのを忘れて原級のまま than を続ける誤りが多い。',
    ],
    sections: [
      {
        heading: 'than のあとに置く形',
        body: `比較級の文では than のあとに比べる相手を置く。このとき、比べる二つが同じ種類になるように形をそろえる。

■ 人を比べる
例）Ken is taller than Tom.
例）He is older than I am.（＝ than me）
例）She studies harder than her sister does.

than のあとは〈主語＋be動詞〉や〈主語＋do / does / did〉で受けるのが正式な形である。会話では than me のように目的格を使うことも多い。

■ ものを比べる ─ one / ones
例）This bag is bigger than that one.（one＝bag）
例）These pencils are longer than those.
例）This question is easier than the last one.

■ 所有を表す ─ mine / yours
例）My bag is bigger than yours.（yours＝your bag）
例）His house is newer than mine.
例）Her bike is more expensive than his.

■ 動詞の繰り返し ─ do / does / did
例）He runs faster than I do.
例）She speaks English better than he does.
例）I got up earlier than my brother did.

現在の文なら do / does、過去の文なら did を使う。

★ ポイント：than のあとを見て「何と何を比べているか」が同じ種類になっているかを必ず確かめる。`,
      },
      {
        heading: '比較級にし忘れない',
        body: `比較の文で意外に多い誤りが、than を書いたのに形容詞を原級のままにしてしまうことである。

誤）This book is difficult than that one.
正）This book is more difficult than that one.

誤）Today is hot than yesterday.
正）Today is hotter than yesterday.

than があるということは比べている文なので、必ず比較級にしなければならない。

■ 逆に、比較級なのに than を落とす誤り
誤）This book is more difficult that one.
正）This book is more difficult than that one.

than と that を書きまちがえる誤りも多いので注意する。

■ 比較級のあとに名詞が来る形
比較級は名詞の前に置くこともできる。

例）I need a bigger bag.（もっと大きなかばんが必要だ）
例）He is a better player than me.
例）Do you have a smaller size?

■ than のあとに文が続く形
例）This question is easier than I thought.（思っていたより簡単だ）
例）He came earlier than we expected.

■ 語順の整理
〈主語＋動詞＋比較級＋than＋比べる相手〉

⚠ 注意：than の直前が原級のままになっていないか、書き終えたら必ず見直す。`,
      },
    ],
    trapExamples: [
      {
        question: '「この本はあの本より難しい。」を英語にしなさい。',
        wrongAnswer: 'This book is difficult than that one.',
        trapExplanation: 'than を書けば比べる意味になると思い、形容詞を比較級にするのを忘れてしまう。とくに more を使う長い語では、比較級にしたつもりでも more を落としがちである。',
        correctAnswer: 'This book is more difficult than that one.',
        correctExplanation:
          'than がある文では、形容詞・副詞を必ず比較級にする。difficult は3音節の長い語なので more difficult となる。one は book の繰り返しをさけるための語である。',
      },
      {
        question: '「私のかばんはあなたのより大きい。」を英語にしなさい。',
        wrongAnswer: 'My bag is bigger than your.',
        trapExplanation: 'your bag の bag を省略するところまで考えたが、your のままにしてしまう。your は後ろに名詞がないと使えない語である。',
        correctAnswer: 'My bag is bigger than yours.',
        correctExplanation:
          '後ろに名詞を置かずに「あなたのもの」を表すときは所有代名詞 yours を使う。mine・yours・his・hers・ours・theirs がその形である。名詞を残して than your bag と書くこともできる。',
      },
    ],
  },

  {
    id: 'eigo_s254',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'much / far / a lot による比較級の強調',
    description: '「ずっと〜だ」を表す比較級の強調と、very を使えないことを理解する',
    intro: '「ずっと大きい」と強めたいとき、very bigger とは言えません。very は原級専用で、比較級を強めるときは much bigger のように much を使います。日本語ではどちらも「とても」「ずっと」でつながるので、まちがえやすい部分です。',
    order: 754,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '比較級を強めるときは much / far / a lot を前に置く（much taller）。',
      'very は比較級を強めることができない（very taller は誤り）。',
      'very は原級を強める（very tall）。',
      'even / still も比較級を強められる（even better）。',
      'much は原級を強めることはできない（much tall は誤り）。',
    ],
    sections: [
      {
        heading: '「ずっと〜だ」の表し方',
        body: `比較級に「ずっと・はるかに」という強めの意味を足したいときは、比較級の前に much・far・a lot を置く。

例）He is much taller than me.（彼は私よりずっと背が高い）
例）This book is far more interesting than that one.（この本はあの本よりはるかにおもしろい）
例）This bag is a lot bigger than that one.
例）Today is much colder than yesterday.

■ 使える語
much（ずっと）／far（はるかに）／a lot（ずっと）／even（さらに）／still（さらに）／a little（少し）

例）This one is even better.（こちらのほうがさらによい）
例）This bag is a little heavier than that one.（少し重い）

■ very は使えない
very は比較級を強めることができない。

誤）He is very taller than me.
正）He is much taller than me.

■ very が使えるのは原級
very は原級（もとの形）を強める語である。

正）He is very tall.（彼はとても背が高い）
誤）He is much tall.

much と very は使う場所が正反対だと覚えるとよい。

★ ポイント：比較級には much、原級には very。この対応を反射的に出せるようにする。`,
        figureId: 'lf_eigoext07_254',
      },
      {
        heading: '最上級の強調と、much の他の使い方',
        body: `■ 最上級を強めるときは by far / much
例）This is by far the best movie of the year.（これは今年断然いちばんの映画だ）
例）He is much the tallest in his class.（参考）

中学入試では by far the best の形を知っていれば十分である。

■ much の他の使い方
①数えられない名詞につく「たくさんの」
例）I don't have much time.

②動詞を強める「とても」
例）I like it very much.（とても好きだ）
例）Thank you very much.

このときは very much の形で使う。much だけでは動詞を強められない。

■ a lot の二つの使い方
①比較級の前で「ずっと」
例）This is a lot better.

②動詞のあとで「たくさん」
例）He eats a lot.

■ 整理して覚える
原級を強める：very（very tall）
比較級を強める：much / far / a lot / even（much taller）
動詞を強める：very much（like it very much）
最上級を強める：by far（by far the best）

⚠ 注意：Thank you much. は誤りで Thank you very much. が正しい。much を単独で動詞の強調に使わない。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は私よりずっと背が高い。」を英語にしなさい。',
        wrongAnswer: 'He is very taller than me.',
        trapExplanation: '「ずっと」という強調の日本語に対して、いちばんよく知っている強調語 very を使ってしまう。very が原級専用の強調語であることを意識していない。',
        correctAnswer: 'He is much taller than me.',
        correctExplanation:
          '比較級を強めるときは much・far・a lot・even を使う。very は比較級を強められない。逆に very tall（とても背が高い）は正しく、much tall は誤りである。強める場所によって語が決まっている。',
      },
      {
        question: '「彼はとても背が高い。」を英語にしなさい。',
        wrongAnswer: 'He is much tall.',
        trapExplanation: '「much は強調の語」と覚えたばかりのときに、原級にも使えると考えてしまう。比較級専用の強調語であることを取りちがえている。',
        correctAnswer: 'He is very tall.',
        correctExplanation:
          '原級（もとの形）を強めるのは very である。much は比較級を強めるための語なので、原級に付けることはできない。〈very＋原級〉〈much＋比較級〉という対応で覚える。',
      },
    ],
  },

  {
    id: 'eigo_s255',
    subject: 'eigo',
    examType: 'chugaku',
    title: '比較級 and 比較級 ─ 「だんだん〜」',
    description: '同じ比較級を and でつないで変化が進むことを表す形を身につける',
    intro: 'It is getting hotter and hotter. は「だんだん暑くなってきている」という意味です。同じ比較級を and でつなぐと、変化が進んでいく様子を表せます。日本語の「だんだん」にあたる一語を探しても出てきません。形をくり返すことで表現するのです。',
    order: 755,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '〈比較級＋and＋比較級〉で「だんだん〜、ますます〜」を表す。',
      '-er 型は hotter and hotter のように比較級を二回くり返す。',
      'more 型は more and more popular（more だけをくり返す）。',
      'get / become とともに使うことが多い（It is getting colder and colder.）。',
      '原級をくり返す hot and hot は誤り。',
    ],
    sections: [
      {
        heading: '基本の形',
        body: `同じ比較級を and でつなぐと「だんだん〜、ますます〜」という変化の進行を表す。

■ -er 型の場合 ─ 比較級を二回くり返す
例）It is getting hotter and hotter.（だんだん暑くなってきている）
例）The days are getting shorter and shorter.（日がだんだん短くなっている）
例）He became stronger and stronger.
例）The rain got heavier and heavier.

■ more 型の場合 ─ more だけをくり返す
例）This song is getting more and more popular.（この歌はますます人気が出てきている）
例）The problem became more and more difficult.
例）She is getting more and more beautiful.

正）more and more popular
誤）more popular and more popular
誤）more popular and popular

more の部分だけをくり返すのが規則である。

■ 原級をくり返さない
誤）It is getting hot and hot.
正）It is getting hotter and hotter.

■ よく使う動詞
get（〜になる）／become（〜になる）／grow（〜になる）

例）It is getting darker and darker.（だんだん暗くなってきた）
例）The city grew bigger and bigger.

★ ポイント：右の図のように、時間とともに一定の方向へ変化が進む場面で使う表現である。`,
        figureId: 'lf_eigoext07_255',
      },
      {
        heading: '似た形の表現',
        body: `■ more and more＋名詞
「ますます多くの〜」という意味で名詞に付けることもできる。

例）More and more people are using smartphones.（ますます多くの人がスマートフォンを使っている）
例）More and more students study English.

このときの more は many の比較級である。

■ less and less
「ますます少なく」を表す。

例）He has less and less time.（彼はますます時間がなくなっている）

■ 不規則変化の語では
better and better（ますますよく）／worse and worse（ますます悪く）

例）His English is getting better and better.（彼の英語はどんどん上達している）
例）The weather got worse and worse.（天気はどんどん悪くなった）

■ 進行形と組み合わせる
変化の途中であることを表すため、be getting のように進行形にすることが多い。

例）It is getting colder and colder.（だんだん寒くなってきている）
例）The line is getting longer and longer.

■ 過去の文
例）It got hotter and hotter.（だんだん暑くなった）
例）The music became louder and louder.

⚠ 注意：more 型の語では more and more popular のように、形容詞は最後に一度だけ書く。二回書かないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「その歌はますます人気が出てきている。」を英語にしなさい。',
        wrongAnswer: 'The song is getting more popular and more popular.',
        trapExplanation: '-er 型の hotter and hotter をまねて、比較級のかたまりをそのまま二回くり返してしまう。more 型では more だけをくり返すという規則を知らないと引っかかる。',
        correctAnswer: 'The song is getting more and more popular.',
        correctExplanation:
          'more を使う長い語では、more and more＋形容詞の形にする。形容詞は最後に一度だけ書く。more and more difficult、more and more beautiful も同じ形である。-er 型なら hotter and hotter のように比較級を二回くり返す。',
      },
      {
        question: '「だんだん暖かくなってきた。」を英語にしなさい。',
        wrongAnswer: 'It is getting warm and warm.',
        trapExplanation: '「暖かく、暖かく」という日本語のくり返しの感覚から、原級をそのまま二回ならべてしまう。変化を表すには比較級でなければならないことに気づかない。',
        correctAnswer: 'It is getting warmer and warmer.',
        correctExplanation:
          '「だんだん〜」を表すときは比較級をくり返す。warm の比較級は warmer なので warmer and warmer となる。原級をならべた warm and warm は誤りである。get や become とともに使うことが多い。',
      },
    ],
  },

  {
    id: 'eigo_s256',
    subject: 'eigo',
    examType: 'chugaku',
    title: '比較級を使った疑問文 ─ Which is bigger, A or B?',
    description: '二つを比べてたずねる疑問文の形と、答え方を身につける',
    intro: '「富士山と高尾山では、どちらが高いですか」は Which is higher, Mt. Fuji or Mt. Takao? です。二つを比べてたずねるときは Which を使い、最後に or でならべます。答えるときは Yes や No ではなく、えらんだほうを言います。',
    order: 756,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '2つを比べてたずねるときは比較級を使う（Which is bigger, A or B?）。',
      '3つ以上なら最上級を使う（Which is the biggest of the three?）。',
      'A と B は or でつなぐ（and ではない）。',
      '人についてたずねるときは Who を使う（Who is taller, Ken or Tom?）。',
      '答えは A is. / I like A better. のように短く答えられる。',
    ],
    sections: [
      {
        heading: '疑問文の作り方',
        body: `二つのものを比べて「どちらが〜ですか」とたずねるときは、疑問詞のあとに比較級を置く。

■ 基本の形
〈Which is＋比較級, A or B?〉

例）Which is bigger, Japan or Australia?（日本とオーストラリアではどちらが大きいですか）
　　— Australia is.（オーストラリアです）
例）Which is longer, the Shinano River or the Tone River?
例）Which is more useful, this book or that one?

■ 人についてたずねるときは Who
例）Who is taller, Ken or Tom?（ケンとトムではどちらが背が高いですか）
　　— Ken is.
例）Who runs faster, you or your brother?
　　— I do.

■ A と B は or でつなぐ
二つのうちどちらか一方を選んでもらうので、必ず or を使う。

正）Which do you like better, spring or fall?
誤）Which do you like better, spring and fall?

■ 一般動詞の疑問文
例）Which do you like better, tea or coffee?（お茶とコーヒーではどちらが好きですか）
　　— I like tea better.
例）Which do you use more often, a pencil or a pen?

★ ポイント：比べるのが2つなら比較級、3つ以上なら最上級。文中の or の前後にいくつあるかを数えて判断する。`,
      },
      {
        heading: '答え方と、最上級の疑問文との区別',
        body: `■ 答え方
be動詞の文なら〈主語＋is / are.〉、一般動詞の文なら〈主語＋do / does.〉で答えられる。

例）Which is bigger, Japan or Australia? — Australia is.
例）Who runs faster, Ken or Tom? — Ken does.
例）Which do you like better, dogs or cats? — I like dogs better.

「I like dogs.」だけでも通じるが、better を付けると比較の答えとしてより正確になる。

■ 3つ以上のときは最上級
例）Which is the biggest of the three?（3つの中でどれがいちばん大きいですか）
例）Which season do you like the best, spring, summer, fall or winter?
　　— I like summer the best.

or の前後に三つ以上ならんでいたら最上級である。

■ 比較級と最上級の使い分けの練習
Which is longer, this pencil or that one?（2つ → 比較級）
Which is the longest of the three pencils?（3つ → 最上級）

■ How で程度をたずねる
例）How tall is he?（彼はどれくらいの背の高さですか）
例）How old is your sister?

これらは比較の形ではないが、程度をたずねる表現としてあわせて覚えておく。

⚠ 注意：Which do you like better, A and B? のように and を使う誤りが多い。選択をたずねる疑問文では or である。`,
      },
    ],
    trapExamples: [
      {
        question: '「日本とオーストラリアではどちらが大きいですか。」を英語にしなさい。',
        wrongAnswer: 'Which is the biggest, Japan or Australia?',
        trapExplanation: '「どちらが大きいですか」という日本語から「いちばん大きい」という最上級のイメージを持ってしまう。比べているのが2つだけであることを確かめていない。',
        correctAnswer: 'Which is bigger, Japan or Australia?',
        correctExplanation:
          '比べる対象が2つのときは比較級を使う。最上級を使うのは3つ以上のときである。or の前後にいくつならんでいるかを数えれば判断できる。答えは Australia is. となる。',
      },
      {
        question: '「あなたは春と秋ではどちらが好きですか。」を英語にしなさい。',
        wrongAnswer: 'Which do you like better, spring and fall?',
        trapExplanation: '日本語の「春と秋」の「と」をそのまま and に置きかえてしまう。選択をたずねる疑問文では or を使うという決まりを知らないと必ずまちがえる。',
        correctAnswer: 'Which do you like better, spring or fall?',
        correctExplanation:
          'どちらか一方を選んでもらう疑問文では or でつなぐ。and を使うと「春と秋の両方」という意味になってしまう。答えは I like spring better. のように better を付けて答える。',
      },
    ],
  },

  // ───────────────── 9. 最上級の表現（s257〜s260） ─────────────────
  {
    id: 'eigo_s257',
    subject: 'eigo',
    examType: 'chugaku',
    title: '最上級の in と of の使い分け',
    description: '最上級の範囲を示す前置詞 in と of を、意味のちがいから正しく選べるようにする',
    intro: 'the tallest in my class と the tallest of the three。同じ「〜の中で」なのに in と of に分かれます。境目は、場所や集団の範囲を表すのか、数や仲間をならべているのか。日本語の「で」「の中で」からは、まったく区別できないところです。',
    order: 757,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'in＋場所や集団（範囲を一つのまとまりとして表す）：in Japan, in my class, in the world。',
      'of＋比べる仲間の集まり（数や all）：of the three, of all, of us, of the four。',
      'of のあとは複数を表す語が来る。in のあとは単数の場所・集団が来る。',
      'in my family / in my school は集団なので in。',
      'of the year / of the day のように期間を全体としてとらえる形もある。',
    ],
    sections: [
      {
        heading: 'in と of の見分け方',
        body: `最上級の文では「どの範囲でいちばんか」を in か of で示す。この使い分けが入試の定番である。

■ in＋場所・集団（ひとまとまりの範囲）
in Japan（日本で）／in the world（世界で）／in my class（私のクラスで）／in my family（私の家族で）／in this town（この町で）／in our school（私たちの学校で）

例）Mt. Fuji is the highest mountain in Japan.
例）He is the tallest boy in his class.
例）This is the oldest building in this town.

■ of＋比べる仲間の集まり（数を表す語や all）
of the three（3つの中で）／of the five（5人の中で）／of all（すべての中で）／of us（私たちの中で）／of the four seasons（四季の中で）

例）Ken is the tallest of the three.
例）This is the best of all.
例）Which do you like the best of the four seasons?

■ 見分け方
of のあとには「複数」や「数を表す語」が来る。in のあとには単数形の場所や集団が来る。

of the three（three＝数）→ of
in my class（class＝集団の単数）→ in

★ ポイント：あとに来る語が「数・all・us」なら of、「場所・クラス・国・世界」なら in、と覚える。`,
        figureId: 'lf_eigoext07_257',
      },
      {
        heading: 'まちがえやすい組み合わせ',
        body: `■ my class は集団だが単数 → in
「クラスの中で」は人が何人もいるので of と思いがちだが、class という一つのまとまりを範囲としているので in を使う。

正）He is the fastest in my class.
誤）He is the fastest of my class.

同じく in my family、in our school、in the group となる。

■ all the students は複数 → of
複数形の名詞が並ぶときは of を使う。

正）He is the tallest of all the students.
例）She is the youngest of the five children.

■ 期間を表すとき
of the year（1年で）／of the day（1日で）／of the week（1週間で）

例）Today is the hottest day of the year.（今日は1年でいちばん暑い日だ）
例）This is the busiest time of the day.

■ in の代表例をまとめて
in Japan／in the world／in Asia／in my class／in my family／in this city／in our school／in the group

■ of の代表例をまとめて
of the three／of the four／of all／of us／of them／of all the students／of the year

■ 副詞の最上級でも同じ
例）He runs fastest of the three.
例）She sings best in her school.

⚠ 注意：「3人の中で」を in the three としない。数を表す語の前は of である。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は3人の中でいちばん背が高い。」を英語にしなさい。',
        wrongAnswer: 'He is the tallest in the three.',
        trapExplanation: '「〜の中で」という日本語から、範囲を表す in を選んでしまう。in と of の使い分けの基準が、あとに来る語の性質で決まることを意識していない。',
        correctAnswer: 'He is the tallest of the three.',
        correctExplanation:
          '数を表す語（the three、the five、all、us）が続くときは of を使う。in を使うのは in Japan、in my class のように場所や集団を一つのまとまりとして表すときである。',
      },
      {
        question: '「富士山は日本でいちばん高い山だ。」を英語にしなさい。',
        wrongAnswer: 'Mt. Fuji is the highest mountain of Japan.',
        trapExplanation: '「日本の山の中で」と考えて、山という複数の仲間を想定し of を選んでしまう。しかし文の中で範囲を示しているのは Japan という場所である。',
        correctAnswer: 'Mt. Fuji is the highest mountain in Japan.',
        correctExplanation:
          '場所を表す語が範囲になるときは in を使う。in Japan、in the world、in this town、in my class がその例である。of を使うのは of the three、of all のように数や仲間の集まりが続くときである。',
      },
    ],
  },

  {
    id: 'eigo_s258',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'one of the ＋ 最上級 ＋ 複数名詞',
    description: '「もっとも〜な…の一つ」を表す形と、主語になったときの動詞の形を身につける',
    intro: '「もっとも有名な選手の一人」は one of the most famous players です。ここで players と複数にすることに注意します。「一人」と言っているのに複数形、という日本語の感覚と合わない形です。主語になったときの動詞の形もあわせて確かめます。',
    order: 758,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '〈one of the＋最上級＋複数名詞〉で「もっとも〜な…の一つ」を表す。',
      '名詞は必ず複数形（one of the highest mountains）。',
      'one of ~ が主語のときは単数あつかい（One of my friends lives in Osaka.）。',
      '「一人」でも複数形にする点が日本語の感覚とちがう。',
      'in / of による範囲の示し方は最上級の規則と同じ。',
    ],
    sections: [
      {
        heading: '基本の形と複数形',
        body: `「日本でもっとも高い山の一つ」のような言い方は、〈one of the＋最上級＋複数名詞〉で表す。

例）Mt. Kita is one of the highest mountains in Japan.（北岳は日本でもっとも高い山の一つだ）
例）He is one of the most famous singers in Japan.
例）This is one of the oldest temples in Kyoto.
例）Kyoto is one of the most popular cities in Japan.

■ 名詞は必ず複数形
「一つ」と言っているので単数形にしたくなるが、英語では「高い山たちのうちの一つ」と考えるので複数形になる。

正）one of the highest mountains
誤）one of the highest mountain

正）one of the most famous singers
誤）one of the most famous singer

of は「〜のうちの」を表す語なので、そのあとには必ず二つ以上のものが来る。one of the students、one of my friends も同じである。

■ 範囲の示し方
最上級と同じく in / of を使う。

例）one of the tallest buildings in the world
例）one of the best players of all

★ ポイント：「一つ」でも複数形。この一点が入試の出題ねらいである。書き終えたら名詞に s が付いているかを確かめる。`,
        figureId: 'lf_eigoext07_258',
      },
      {
        heading: '主語になったときの動詞',
        body: `one of ~ が主語になるとき、動詞は単数の形にする。主語の中心は「one（一つ）」だからである。

正）One of my friends lives in Osaka.（友達の一人が大阪に住んでいる）
誤）One of my friends live in Osaka.

正）One of the students is absent today.
誤）One of the students are absent today.

直前の複数名詞（friends、students）に引かれて複数の動詞にしてしまう誤りが非常に多い。

■ 見分け方
主語の中心になる語を探す。One of my friends の中心は One なので単数である。

■ 最上級と組み合わせた例
例）One of the highest mountains in Japan is Mt. Kita.
例）One of the most difficult subjects is math.

■ each of / every one of も同じ
例）Each of the boys has a bike.
例）Every one of them was happy.

いずれも中心の語が単数なので、動詞も単数の形になる。

■ 書きかえの練習
Mt. Fuji is the highest mountain in Japan.（いちばん高い）
Mt. Kita is one of the highest mountains in Japan.（高い山の一つ）

「いちばん」なのか「〜の一つ」なのかで、名詞の形が変わる点を確かめておく。

⚠ 注意：of のあとに複数名詞、動詞は単数。この二つが同時に問われることが多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は日本でもっとも有名な歌手の一人だ。」を英語にしなさい。',
        wrongAnswer: 'He is one of the most famous singer in Japan.',
        trapExplanation: '日本語の「歌手の一人」が単数なので、英語でも singer を単数形にしてしまう。one という語に引かれて、後ろの名詞まで単数にしてしまう典型的な誤りである。',
        correctAnswer: 'He is one of the most famous singers in Japan.',
        correctExplanation:
          '〈one of the＋最上級＋複数名詞〉の形では、名詞を必ず複数形にする。of は「〜のうちの」という意味なので、そのあとには二つ以上のものが来なければならない。one of the highest mountains も同じである。',
      },
      {
        question: '（　）に live か lives を入れなさい。One of my friends（　）in Osaka.',
        wrongAnswer: 'One of my friends live in Osaka.',
        trapExplanation: '動詞の直前にある friends が複数形なので、そのまま複数の動詞 live を選んでしまう。主語の中心がどの語かを確かめていない。',
        correctAnswer: 'One of my friends lives in Osaka.',
        correctExplanation:
          '主語の中心は One なので単数あつかいになり、動詞は lives となる。直前の複数名詞に引かれないよう、主語の中心語を探す習慣をつける。One of the students is absent. も同じ考え方である。',
      },
    ],
  },

  {
    id: 'eigo_s259',
    subject: 'eigo',
    examType: 'chugaku',
    title: '最上級を使った疑問文と like ~ the best',
    description: '「どれがいちばん〜ですか」の形と答え方、および疑問詞が主語になる文の動詞を確認する',
    intro: '「どの季節がいちばん好きですか」は Which season do you like the best? です。答えは I like spring the best. となります。like と best をはなして置くこの形は、日本語の語順とはかなりちがいます。決まった型として覚えてしまいましょう。',
    order: 759,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '〈Which / What＋名詞＋do you like the best?〉で「どれがいちばん好きですか」。',
      '3つ以上の中から選ぶときは the best、2つなら better。',
      'Who が主語のときは三人称単数あつかい（Who runs the fastest?）。',
      'Which is the 最上級＋名詞＋in / of ~? の形も頻出。',
      '答えは I like ~ the best. / ~ is. のように答える。',
    ],
    sections: [
      {
        heading: '「いちばん〜なのはどれ」の疑問文',
        body: `三つ以上の中からいちばんのものをたずねるときは、最上級を使った疑問文を作る。

■ Which を使う形
例）Which is the longest river in Japan?（日本でいちばん長い川はどれですか）
　　— The Shinano River is.
例）Which is the biggest of the three?
例）Which season do you like the best?（どの季節がいちばん好きですか）
　　— I like spring the best.

■ What を使う形
選ぶ範囲が限られていないときは What を使う。

例）What sport do you like the best?（何のスポーツがいちばん好きですか）
　　— I like soccer the best.
例）What is the most popular sport in your school?

Which は限られた選択肢の中から、What は範囲を決めずにたずねるときに使う。

■ Who を使う形
例）Who is the tallest in your class?（クラスでいちばん背が高いのはだれですか）
　　— Ken is.
例）Who runs the fastest of the three?
　　— Tom does.

■ like ~ the best
3つ以上の中でいちばん好きと言うときは the best を使う。2つを比べるときは better である。

例）I like summer the best of the four seasons.
例）I like tea better than coffee.（2つ）

★ ポイント：選択肢がいくつあるかを数えてから、better か the best かを決める。`,
      },
      {
        heading: '疑問詞が主語になる文',
        body: `Who・What・Which が主語になるとき、その疑問文は〈疑問詞＋動詞 ~?〉という語順になり、do / does を使わない。

例）Who runs the fastest in your class?（だれがいちばん速く走りますか）
例）Who speaks English the best?
例）What makes you happy?

■ 動詞は三人称単数あつかい
主語になった疑問詞は三人称単数として扱うので、現在の文では動詞に s が付く。

正）Who speaks English the best in your class?
誤）Who speak English the best in your class?

■ do を使う形との区別
主語が you や he のように別にあるときは、do / does を使う。

例）Who do you like the best?（あなたはだれがいちばん好きですか）← 主語は you
例）Who likes this song the best?（だれがこの歌をいちばん好きですか）← 主語は Who

前者は「あなたが」だれを好きかを問い、後者は「だれが」好きかを問う。

■ 答え方
例）Who runs the fastest? — Ken does.
例）Who is the tallest? — Tom is.
例）Which do you like the best? — I like this one the best.

■ How で程度をたずねる形もあわせて
例）How tall is he? — He is 160 centimeters tall.

⚠ 注意：Who が主語のときは do を入れない。Who does run fastest? は誤りである。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたはどの季節がいちばん好きですか。」を英語にしなさい。',
        wrongAnswer: 'Which season do you like better?',
        trapExplanation: '「好き」を比べる文で better を使う形を覚えていると、選択肢の数を確かめずに better を選んでしまう。季節は四つあるので最上級でなければならない。',
        correctAnswer: 'Which season do you like the best?',
        correctExplanation:
          '3つ以上の中からいちばんを選ぶときは the best を使う。2つを比べるときだけ better である。答えは I like spring the best. となる。of the four seasons を加えて範囲を示すこともできる。',
      },
      {
        question: '「だれがあなたのクラスでいちばん上手に英語を話しますか。」を英語にしなさい。',
        wrongAnswer: 'Who speak English the best in your class?',
        trapExplanation: 'Who が主語のときの動詞の形をあいまいに覚えており、原形のままにしてしまう。疑問文だから動詞は原形、という思いこみも働く。',
        correctAnswer: 'Who speaks English the best in your class?',
        correctExplanation:
          '疑問詞 Who が主語になるときは三人称単数あつかいになるので、現在の文では動詞に s を付ける。また do / does は使わず〈疑問詞＋動詞〉の語順になる。答えは Ken does. のように does で受ける。',
      },
    ],
  },

  {
    id: 'eigo_s260',
    subject: 'eigo',
    examType: 'chugaku',
    title: '総合演習 ─ 形容詞・副詞・比較のまとめ',
    description: 'このユニットで学んだ内容を、表やグラフを読み取って英文にする形で総復習する',
    intro: '表やグラフを見て、「AはBより高い」「Cがいちばん安い」と英語で言えるでしょうか。比較の表現は、資料を読み取って説明する場面でこそ力を発揮します。ここまでに学んだ原級・比較級・最上級を、実際の数値を使ってまとめて確かめます。',
    order: 760,
    studyPeriod: '小6前半',
    targetLevel: 'nyushi',
    keyPoints: [
      '比較級には than、最上級には the と in / of がセットで必要。',
      'as と as の間は必ず原級。not as ~ as は「〜ほど…ない」。',
      '比較級を強めるのは much / far / a lot。原級を強めるのは very。',
      'タイムや順位のグラフでは「数値が小さい＝速い」など読みかえに注意する。',
      '不規則変化 good/well→better→best、bad→worse→worst、many/much→more→most を最終確認。',
    ],
    sections: [
      {
        heading: 'グラフを英文にする',
        body: `入試では表やグラフを読み取って英文を選ぶ問題が出る。次の50メートル走のタイムを例に練習する。

ケン 8.0秒／トム 8.5秒／サム 9.0秒

このデータから作れる英文は次のとおりである。

例）Ken runs the fastest of the three.（ケンが3人の中でいちばん速い）
例）Sam runs the slowest of the three.
例）Tom runs faster than Sam.（トムはサムより速い）
例）Sam doesn't run as fast as Ken.（サムはケンほど速く走らない）
例）Ken's time is the shortest of the three.（ケンのタイムがいちばん短い）

■ 数値の読みかえに注意
タイムは「数値が小さいほど速い」ため、グラフの棒が短い人がいちばん速い。数値の大小と速さの大小が逆になるので、ここで取りちがえる受験生が多い。

反対に身長や体重のグラフでは、数値が大きいほど tall・heavy になる。

■ 書きかえの確認
Ken runs faster than Tom. ＝ Tom doesn't run as fast as Ken.
Ken runs the fastest of the three. ＝ No one runs faster than Ken. （参考）

★ ポイント：グラフ問題では、まず日本語で「だれがいちばん〜か」を確かめてから英文を作る。`,
        figureId: 'lf_eigoext07_260',
      },
      {
        heading: '総まとめのチェックリスト',
        body: `このユニットで学んだ内容を、確認の順に整理する。

■ 形容詞
①名詞の前に置く（a big dog）。冠詞・所有格はさらに前（my new bike）。
②be動詞・look・sound のあとに置く（You look happy.）。副詞にしない。
③something を説明する形容詞は後ろ（something cold to drink）。

■ 数量の形容詞
many＋複数形／much＋数えられない名詞／a lot of は両方に使える。
a few・a little＝少しある／few・little＝ほとんどない。
some は肯定文、any は疑問文・否定文。すすめる疑問文では some。
every・each は単数あつかい。all・both は複数あつかい。

■ 副詞
形容詞に -ly を付けて作る（easy → easily）。fast・hard・early は同じ形。
hard（熱心に）と hardly（ほとんど〜ない）は別の語。
語順は〈動詞＋目的語＋副詞〉、〈様態→場所→時〉。
頻度の副詞は be動詞・助動詞のあと、一般動詞の前。

■ 比較
比較級＋than／the＋最上級＋in・of。
短い語は -er / -est、長い語は more / most。
つづり変化：large → larger／easy → easier／big → bigger。
不規則変化：good・well → better → best／bad → worse → worst／many・much → more → most／little → less → least／far → farther → farthest。
as ~ as は原級。not as ~ as は「〜ほど…ない」。
much・far・a lot は比較級を強め、very は原級を強める。
one of the＋最上級＋複数名詞。動詞は単数。

⚠ 注意：答案を書き終えたら、①than・the が抜けていないか、②as と as の間が原級か、③名詞の単数複数は正しいか、の三点を必ず見直す。`,
      },
    ],
    trapExamples: [
      {
        question: '50メートル走のタイムはケン8.0秒、トム8.5秒、サム9.0秒だった。「ケンは3人の中でいちばん速い」を英語にしなさい。',
        wrongAnswer: 'Ken is the faster of the three.',
        trapExplanation: '比べているという意識から比較級 faster を選び、さらに the を付けてしまう。3人を比べていることを数えていないうえ、〈the＋比較級〉という存在しない形を作っている。',
        correctAnswer: 'Ken runs the fastest of the three.（= Ken is the fastest of the three.）',
        correctExplanation:
          '3人以上を比べるときは最上級を使う。fast の最上級は fastest で、前に the を付ける。範囲は数を表す語なので of the three となる。2人だけなら Ken is faster than Tom. のように比較級を使う。',
      },
      {
        question: '「サムはケンほど速く走らない。」を英語にしなさい。',
        wrongAnswer: "Sam doesn't run as faster as Ken.",
        trapExplanation: '「速く走らない」という比較の文なので、as と as の間にも比較級を入れなければならないと考えてしまう。否定文にしたことで比較級が必要だと思いこむ誤りである。',
        correctAnswer: "Sam doesn't run as fast as Ken.",
        correctExplanation:
          'as と as の間に入るのは、肯定でも否定でも必ず原級である。not as ~ as は「〜ほど…ない」という意味で、as のあとのケンのほうが速いことを表す。比較級で書きかえると Ken runs faster than Sam. となる。',
      },
    ],
  },
];
