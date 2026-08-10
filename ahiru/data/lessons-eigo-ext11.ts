import type { Lesson } from './lesson-types';

// 中学受験 英語「長文読解・会話文読解の技術」拡張ユニット（40セッション：eigo_s386〜eigo_s425）
// order は 886〜925。
// 構成：読解の基本姿勢(3)／主語と動詞を見つける(4)／代名詞の指示内容(4)／つなぎ語(4)／
//       段落の主題文(3)／物語文(4)／説明文(4)／図表つき読解(4)／会話文(5)／未知語の推測(3)／
//       内容一致・要旨把握(2)
// 図解は lesson-figs-eigo-ext11.ts（40課中17課）。語順・修飾の位置関係、時間の流れ、
// 図表読解の実データという「図にしないと伝わらない」箇所だけに付けてある。
export const eigoExt11Lessons: Lesson[] = [
  // ───────────────── 1. 読解の基本姿勢（s386〜s388） ─────────────────
  {
    id: 'eigo_s386',
    subject: 'eigo',
    examType: 'chugaku',
    title: '読解の基本姿勢①：設問を先に読む',
    description: '本文を読む前に設問に目を通し、「何を探すのか」を決めてから読み始める',
    order: 886,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '本文より先に設問を読む。何を探すか決まっていない読み方は、読み終わってからもう一度読み直すことになる。',
      '設問の疑問詞をチェックする。What time なら時刻、How many なら数、Why なら理由が答え。',
      '設問に出てくる固有名詞（人名・曜日・場所）に印をつけ、本文でその語を見つけたら周りを丁寧に読む。',
      '設問はふつう本文の順番どおりに並んでいる。第1問の答えは前半、最後の問いは後半にある。',
      '選択肢まで全部先に読む必要はない。設問文だけで十分（選択肢を覚えようとすると混乱する）。',
    ],
    sections: [
      {
        heading: 'なぜ設問を先に読むのか',
        body: `長文問題で時間が足りなくなる人のほとんどは、「本文を最初から最後まで読んでから設問を見る」という順で解いている。この順だと、読んでいる間じゅう何が問われるか分からないので、全部を同じ強さで読むことになる。そして設問を見た瞬間に「どこに書いてあったっけ」となり、もう一度本文をさがす。つまり本文を2回読んでいることになる。

■ 正しい手順
①設問文だけを読む（選択肢は読まない）
②何を探すのかをメモする（時刻・人数・理由・気持ち など）
③本文を頭から1回読む。②で決めたものが出てきたら線を引く
④設問に戻って、線を引いた場所を確かめながら答える

例）設問が What time does Ken leave home? なら、探すのは「時刻」である。本文を読みながら数字と時刻表現（at seven, before breakfast など）にだけ印をつければよい。

★ ポイント：設問を先に読むのは「答えを先に知る」ためではなく、本文を読むときの目のはたらかせ方を変えるためである。探し物が決まっている人は、決まっていない人の半分の時間で見つけられる。

⚠ 注意：設問の先読みは30秒以内で終える。設問文を丁寧に和訳していたら本末転倒になる。疑問詞と固有名詞だけを拾えばよい。`,
      },
      {
        heading: '実際の英文でやってみる',
        body: `次の英文を読む前に、下の設問に目を通すこと。

Ken is a junior high school student. He gets up at six thirty every morning. Before breakfast, he walks his dog, Momo, for twenty minutes. He leaves home at seven forty and takes the bus to school. School starts at eight thirty. After school, he practices tennis with his friends until five. He usually gets home at six and does his homework before dinner. On Sunday, he does not practice tennis. He goes to the library and reads books about animals. He wants to be a vet in the future.

設問
(1) What time does Ken leave home?
(2) What does Ken do on Sunday?
(3) What does Ken want to be?

■ 先読みでわかること
(1)は「時刻」を探す → 数字に印。
(2)は「日曜日」を探す → On Sunday という語に印。
(3)は「将来の夢」を探す → want to be という語に印。

この3つだけを意識して読めば、本文は1回読むだけで足りる。実際、答えはそれぞれ at seven forty（7時40分）／He goes to the library and reads books about animals.／He wants to be a vet.（獣医）で、いずれも印をつけた場所のすぐそばにある。

★ ポイント：(2)のように On Sunday と本文に書いてあるとき、その前後は「ふだんの日」ではなく「日曜日だけの行動」である。曜日・季節・時を表す語は、本文の内容が切りかわる合図になる。`,
      },
    ],
    trapExamples: [
      {
        question: '上の英文について、What time does Ken get to school? に答えなさい。',
        wrongAnswer: 'At eight thirty.（8時30分）',
        trapExplanation:
          'School starts at eight thirty. の 8:30 という数字が目に入り、「学校＝8時30分」と結びつけて答えてしまう。設問の get to school（学校に着く）と、本文の School starts（授業が始まる）を同じ意味だと思いこんでいる。',
        correctAnswer: '本文に書かれていない（答えられない）',
        correctExplanation:
          '本文にあるのは「家を7時40分に出る」「授業は8時30分に始まる」の2つだけで、学校に到着した時刻は書かれていない。バスに何分乗ったかも書かれていないので計算もできない。設問の先読みで「時刻」と決めても、その時刻が本当にその出来事の時刻かどうかは英語をきちんと読んで確かめること。',
      },
      {
        question: '上の英文について、How long does Ken walk his dog? に答えなさい。',
        wrongAnswer: 'For thirty minutes.',
        trapExplanation:
          'six thirty（6時30分）の thirty が残っていて、「30分」と答えてしまう。時刻の thirty と、時間の長さの twenty minutes を区別せずに数字だけを拾ったための誤り。',
        correctAnswer: 'For twenty minutes.（20分間）',
        correctExplanation:
          'How long は「どのくらいの長さ」を聞く疑問詞なので、答えは時刻ではなく期間である。本文の he walks his dog, Momo, for twenty minutes に for が付いていることに注目する。at＋時刻は「〜時に」、for＋期間は「〜の間」と、前置詞で見分けられる。',
      },
    ],
  },

  {
    id: 'eigo_s387',
    subject: 'eigo',
    examType: 'chugaku',
    title: '読解の基本姿勢②：返り読みをしない',
    description: '意味のかたまりごとに前から理解し、日本語の語順に直さずに読み進める',
    order: 887,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '返り読み＝英文の後ろから前へ戻って訳す読み方。時間が2倍かかるうえ、長い文ほど途中で意味を見失う。',
      '英語は「意味のかたまり（チャンク）」ごとに、前から順に理解する。',
      'かたまりの切れ目は、前置詞（in／on／with）・接続詞（that／when／because）・関係代名詞（who／which）の直前。',
      '訳すのではなく「情景を思い浮かべる」。日本語に直すのは答えを書くときだけでよい。',
      '音読の練習でも、かたまりごとに区切って読むと語順のまま理解する力がつく。',
    ],
    sections: [
      {
        heading: '返り読みが読解をおそくする',
        body: `英語を日本語らしく訳そうとすると、どうしても文の後ろから前へ戻ることになる。これを返り読みという。

例）The boy who is playing the guitar under the big tree in the park is my brother.
返り読み：「公園の／大きな木の下で／ギターを弾いている／少年は／私の兄です」
→ 目が右端から左へ何度も往復している。1文でこれをやると、20文の長文では往復が数百回になる。

■ 前から読む（チャンク読み）
The boy ／ who is playing the guitar ／ under the big tree ／ in the park ／ is my brother.
「その少年は → ギターを弾いている → 大きな木の下で → 公園の中の → 私の兄だ」
情報が出てきた順に足していくだけで、戻る必要がない。

★ ポイント：チャンクの切れ目は、①前置詞の前（under, in）②関係代名詞の前（who, which, that）③接続詞の前（when, because, if）④カンマの所、の4つがほとんどである。

⚠ 注意：チャンク読みは「訳さない」練習ではなく「戻らない」練習である。意味は取る。ただし日本語の語順に並べかえる作業を最後まで先送りにする。`,
      },
      {
        heading: '実際の英文で区切ってみる',
        body: `次の英文を、スラッシュ（／）の位置で区切りながら前から読む。

Last Saturday, I went to the city museum with my father. We saw a special show about old Japanese houses. The show started at ten and finished at noon. I liked the small model of a farmhouse the best. Its roof was made of straw, and it looked very warm. My father told me that his grandmother lived in a house like that. After we left the museum, we had lunch at a small restaurant near the station. I ate curry and rice, and my father had noodles. It was a wonderful day.

■ 区切り方の例
Last Saturday, ／ I went to the city museum ／ with my father.
We saw a special show ／ about old Japanese houses.
My father told me ／ that his grandmother lived in a house ／ like that.
After we left the museum, ／ we had lunch ／ at a small restaurant ／ near the station.

■ 前から意味を足していく
「この前の土曜日 → 私は市立博物館に行った → 父と」
「父は私に言った → 祖母がある家に住んでいたと → そんな家に」

★ ポイント：told me that … の that は「〜ということ」で、ここから文が1つ始まる合図。that を見たら「ここから新しい文が始まる」と考えて区切ればよい。

⚠ 注意：区切りすぎもよくない。a small restaurant を a ／ small ／ restaurant のように切ると、かえって意味がつながらない。「1つのまとまった意味」になる長さで切ること。`,
      },
    ],
    trapExamples: [
      {
        question: '上の英文について、Who lived in an old Japanese house? に答えなさい。',
        wrongAnswer: 'My father.（筆者の父）',
        trapExplanation:
          'My father told me that … の文で、文頭の My father だけを見て「父が住んでいた」と読んでしまう。that の後ろに his grandmother という別の主語があることを見落とした典型的な返り読みのミス。',
        correctAnswer: "The writer's great-grandmother.（＝父の祖母）",
        correctExplanation:
          'My father told me ／ that his grandmother lived in a house like that. と区切れば、told の主語は My father、lived の主語は his grandmother だとすぐわかる。that の前と後ろで主語と動詞のセットが2組あることを意識する。前から順にかたまりで読めば取りちがえない。',
      },
      {
        question: '上の英文について、What was made of straw? に答えなさい。',
        wrongAnswer: 'The model.（模型）',
        trapExplanation:
          '直前の文に the small model of a farmhouse があるため、Its を「模型の」と取ってしまう。しかし Its roof（その屋根）とあるので、指しているのは屋根を持つもの＝農家である。',
        correctAnswer: 'The roof of the farmhouse.（農家の屋根）',
        correctExplanation:
          'Its roof was made of straw の Its は直前の名詞のかたまり a farmhouse を指す。model of a farmhouse のうち中心の名詞は model だが、「屋根がある」のは家のほうだと意味で判断する。be made of 〜（〜でできている）は材料が見た目でわかるときに使う表現で、straw は「わら」。',
      },
    ],
  },

  {
    id: 'eigo_s388',
    subject: 'eigo',
    examType: 'chugaku',
    title: '読解の基本姿勢③：わからない語で止まらない',
    description: '知らない単語が出ても読み飛ばし、文全体・段落全体の意味をつかむ',
    order: 888,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '入試の長文には、必ず知らない単語が数個入っている。全部わかるようには作られていない。',
      '知らない語は、まず「読み飛ばして先へ進む」。設問で問われていなければ意味を知らなくても解ける。',
      '同じ語がくり返し出てくる語（キーワード）は飛ばさず、周りの文からおおよその意味を決める。',
      '語の意味より、その語が「よいこと・わるいこと」のどちらかを判断できれば足りることが多い。',
      '注（＊印の語注）は本文を読む前に必ず確認する。難語はたいてい注がついている。',
    ],
    sections: [
      {
        heading: '知らない語との付き合い方',
        body: `英語の長文で、1語もわからない語がないという状態はまずない。入試問題は、受験生が知らない語をいくつか含んだうえで、それでも内容がつかめるように作られている。だから「知らない語で止まる」ことこそが最大の失点原因になる。

■ 3段階のふるい分け
①1回しか出てこない語 → 飛ばす。前後の意味がつながればそれでよい。
②2回以上出てくる語 → 飛ばさない。その文章の中心の語（キーワード）である可能性が高い。
③設問に出ている語 → 必ず意味を決める。周りの文からの推測が必要。

■ 「よい・わるい」だけ決める
たとえば The weather was terrible, so we could not go out. の terrible がわからなくても、so we could not go out（だから外出できなかった）から「わるい天気」だとわかる。細かい意味（ひどい）まで出す必要はない。

★ ポイント：語注（＊がついた語の日本語訳）は問題用紙の下や本文のあとにある。本文を読み始める前に語注に目を通しておくと、その語で止まらずにすむ。

⚠ 注意：知らない語を「たぶんこういう意味だろう」と決めたら、必ずそれを本文にあてはめて意味が通るか確かめる。決めっぱなしにすると、そこから先の読み方が全部ずれる。`,
      },
      {
        heading: '実際の英文で試す',
        body: `次の英文には、多くの小学生が知らない語 hibernation／hibernate が出てくる。

Many animals sleep through the winter. This long sleep is called hibernation. Bears, frogs, and some kinds of squirrels hibernate. Before winter comes, they eat a lot of food and become fat. When the weather gets cold, they go into a hole or a cave. Their bodies become cool, and their hearts beat very slowly. In this way, they use only a little energy. They do not need to look for food in the snow. When spring comes, they wake up and come out. They are thin and very hungry, so they start looking for food at once.

■ hibernation の意味を決める手順
①直前の文：Many animals sleep through the winter.（多くの動物は冬の間ずっと眠る）
②次の文：This long sleep is called hibernation.（この長い眠りは hibernation と呼ばれる）
→ This long sleep ＝ hibernation。つまり「冬眠」である。

このように、知らない語のすぐ前後に「＝」の関係を作る表現があることが非常に多い。
・A is called B（AはBと呼ばれる）
・A, or B（AつまりB）
・A means B（AはBを意味する）
・A, that is, B（Aすなわち B）

★ ポイント：is called の直前の文には、必ずその語の説明がある。called を見たら前の文へ1文だけ戻る。

⚠ 注意：hibernate（動詞）と hibernation（名詞）は形がちがうだけで同じ内容。-tion で終わる語は名詞だと知っておくと、品詞のちがいで混乱しなくなる。`,
      },
    ],
    trapExamples: [
      {
        question: '上の英文について、Why do animals eat a lot before winter? に答えなさい。',
        wrongAnswer: 'Because they are very hungry.（とてもおなかがすいているから）',
        trapExplanation:
          '本文の最後に very hungry という語があるので、それを理由として引いてきてしまう。しかし very hungry なのは「春に目覚めたあと」で、冬の前の話ではない。時をあらわす語（Before winter／When spring comes）を無視して語句だけを拾うと起こるミス。',
        correctAnswer:
          'エネルギーをたくわえて（太って）冬の間の長い眠りに備えるため。冬の間は雪の中で食べ物をさがす必要がないようにするため。',
        correctExplanation:
          'Before winter comes, they eat a lot of food and become fat. のあと、In this way, they use only a little energy. They do not need to look for food in the snow. と続く。つまり「先に食べて太る → 眠っている間はエネルギーをほとんど使わない → 雪の中でえさをさがさずにすむ」という流れである。理由を問われたら、その文の前後3文の範囲で因果関係を確かめる。',
        },
      {
        question: '上の英文について、下線部 Their bodies become cool. の cool の意味として正しいものを選びなさい。',
        wrongAnswer: 'かっこいい',
        trapExplanation:
          'cool を「かっこいい」という日本語のカタカナ語の意味で覚えているため、そのまま当てはめてしまう。英語の cool の基本の意味は「冷たい・すずしい」で、「かっこいい」は後からできたくだけた意味である。',
        correctAnswer: '（体温が下がって）冷たくなる',
        correctExplanation:
          '直後に and their hearts beat very slowly（心臓の動きがとてもゆっくりになる）と続き、さらに they use only a little energy（エネルギーをほとんど使わない）とある。体を冷やして活動を落とすという冬眠の説明なので、cool は「冷たい」である。カタカナになっている英語（cool・スマート smart＝賢い、ナイーブ naive＝世間知らず）は、日本語の意味と英語の意味がずれていることが多いので要注意。',
      },
    ],
  },

  // ───────────────── 2. 主語と動詞を見つける（s389〜s392） ─────────────────
  {
    id: 'eigo_s389',
    subject: 'eigo',
    examType: 'chugaku',
    title: '主語と動詞を見つける①：文の骨組みをつかむ',
    description: 'どんな長い文も「だれが・どうする」の2つに絞れば読める',
    order: 889,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      '英語の文には必ず主語（S）と動詞（V）が1組以上ある。まずこの2つを丸で囲む。',
      '語順は S → V → O → M（修飾語）で固定されている。日本語のように入れかえられない。',
      '文の2番目のかたまりが動詞。be動詞（am/is/are/was/were）か一般動詞のどちらかである。',
      '前置詞（in／on／at／with／for）が付いたかたまりは修飾語なので、骨組みから外してよい。',
      '骨組みだけ取り出して意味が通れば、その読み取りは正しい。',
    ],
    sections: [
      {
        heading: '英語の語順は動かない',
        body: `日本語は「私は昨日公園で本を読んだ」も「昨日私は公園で本を読んだ」も同じ意味になる。助詞（は・を・で）が役割を示すので、語の順番を変えられるからである。

英語には助詞がない。そのかわり「置かれた場所」が役割を決める。だから語順を変えると意味が変わってしまう。

例）The cat chased the dog.（ネコがイヌを追いかけた）
　　The dog chased the cat.（イヌがネコを追いかけた）
同じ4語なのに、置き場所だけで意味が正反対になる。

■ 基本の並び方
S（主語）→ V（動詞）→ O（目的語）→ M（修飾語）
例）I ／ read ／ a book ／ in the park ／ yesterday.
　　私は／読んだ／本を／公園で／昨日

日本語に訳すときは、修飾語（in the park, yesterday）を前へ回して「私は昨日公園で本を読んだ」とする。この「回す」作業があるから、日本語話者は英語を後ろから読みたくなる。だが読むときは英語の順のまま理解し、答案を書くときだけ回せばよい。

★ ポイント：長文で迷ったら「2番目のかたまりが動詞」と考える。動詞が見つかれば、その左が主語、右が目的語や補語である。

⚠ 注意：文頭に修飾語が置かれることはよくある（Yesterday, I read a book.）。カンマがあればそこまでが修飾語なので、カンマの後ろから S を探す。`,
        figureId: 'lf_eigoext11_389',
      },
      {
        heading: '骨組みを取り出す練習',
        body: `次の各文から、主語（S）と動詞（V）だけを取り出す。

① In our school, all the students clean their classrooms after lunch.
→ 文頭 In our school は前置詞 In で始まるので修飾語。カンマの後ろから探す。
S＝all the students　V＝clean
骨組み：The students clean.（生徒たちがそうじをする）

② There are twenty desks in this room.
→ There is／There are は「〜がある」の形。この文の本当の主語は be動詞の後ろの twenty desks。
S＝twenty desks　V＝are

③ My father, who works at a hospital, comes home very late.
→ カンマにはさまれた who works at a hospital は My father の説明。外す。
S＝My father　V＝comes
骨組み：My father comes home very late.（父はとても遅く帰ってくる）

④ Playing the piano is a lot of fun.
→ 動詞の -ing 形が文頭に来ると「〜すること」という主語になる。
S＝Playing the piano　V＝is

★ ポイント：動詞を見つけるときは「三単現の -s」「be動詞」「過去形の -ed」を手がかりにする。works も comes も -s が付いているので動詞だとすぐわかる。

⚠ 注意：③の works は who の動詞であって、文全体の動詞ではない。1つの文に動詞が2つ以上あるときは、接続詞や関係代名詞（who・which・that・when・because）が必ずそばにある。それが「おまけの文」の目印である。`,
      },
    ],
    trapExamples: [
      {
        question: 'There are many books in my brother’s room. の主語（S）を答えなさい。',
        wrongAnswer: 'There',
        trapExplanation:
          '英語の文は主語で始まるという思いこみから、文頭の There をそのまま主語だと考えてしまう。しかし There are 〜 の There は「そこに」という意味を持たない、形だけの語である。',
        correctAnswer: 'many books',
        correctExplanation:
          'There is／There are 〜 は「〜がある・いる」を表す決まった形で、本当の主語は be動詞の後ろに来る。主語が複数なら are、単数なら is を使うのもそのため（There is a book. ／ There are many books.）。「〜がある」と訳す文を見たら be動詞の右側を主語とみなす。',
      },
      {
        question: 'The girl talking with my mother is my sister. の動詞（V）を答えなさい。',
        wrongAnswer: 'talking',
        trapExplanation:
          '文の前のほうにある talking を見て、これが動詞だと考えてしまう。しかし -ing だけの形（動詞のing形）は、そのままでは文の動詞になれない。動詞として働くには be動詞（is talking のように）が必要である。',
        correctAnswer: 'is',
        correctExplanation:
          'talking with my mother は直前の The girl を後ろから説明しているかたまり（「私の母と話している」）で、文の骨組みには入らない。これを外すと The girl is my sister. となり、動詞は is だとわかる。-ing の前に be動詞があるかどうかを必ず確かめること。',
      },
    ],
  },

  {
    id: 'eigo_s390',
    subject: 'eigo',
    examType: 'chugaku',
    title: '主語と動詞を見つける②：長い主語を切り離す',
    description: '主語のうしろに説明がくっついて長くなった文の骨組みを見抜く',
    order: 890,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '主語が長くなるのは、主語の後ろに説明のかたまりがくっついているから。',
      '説明のかたまりの目印は who／which／that／-ing／過去分詞／前置詞（of・in・with）。',
      '説明のかたまりを外すと、必ず「名詞1語＋動詞」の骨組みが残る。',
      '主語が長くても、動詞の形（is か are か）を決めるのは主語の中心の名詞1語だけ。',
      '長い主語の文では、動詞は「かたまりが終わったあと」に現れる。動詞が出てきたところが主語の切れ目。',
    ],
    sections: [
      {
        heading: '主語はどこまでか',
        body: `入試の長文でいちばん読みにくいのは、主語が長い文である。

例）The girl who plays the piano every Sunday is my sister.

主語を「The girl」だけだと思って読み進めると、plays が動詞に見え、「その少女は毎週日曜日にピアノを弾く」で文が終わったように感じる。ところがそのあとに is my sister が残ってしまい、意味が取れなくなる。

■ 正しい切り分け
① The girl（主語の中心）
② who plays the piano（①を説明する部分）
③ every Sunday（②の中の修飾語）
④ is my sister（文全体の動詞＋補語）

②③をカッコに入れて外すと、The girl is my sister.（その少女は私の姉だ）という骨組みが残る。

■ 「動詞が2つあったら片方はおまけ」
上の文には plays と is の2つの動詞がある。1つの文に動詞は1つが原則なので、2つあるときは片方が「おまけの文」の動詞である。おまけの文の目印になるのが who／which／that などである。

★ ポイント：who や that を見たら、そこから「もう1つの文が始まる」と考える。そしてその文がどこで終わるか（次の動詞が出てくる直前まで）を確かめる。

⚠ 注意：主語が長くても、be動詞を is にするか are にするかを決めるのは中心の名詞1語である。The books on the desk are mine.（主語の中心は books なので are）。on the desk の desk（単数）につられて is にしてはいけない。`,
        figureId: 'lf_eigoext11_390',
      },
      {
        heading: '長い主語のいろいろな形',
        body: `主語を長くする方法は、大きく分けて4つしかない。

■ ①前置詞のかたまりが後ろに付く
The book on the desk in the living room is mine.
→ 主語の中心は The book。on the desk も in the living room も外す。

■ ②-ing のかたまりが後ろに付く（〜している…）
The boy standing near the gate is my friend.
→ 主語の中心は The boy。standing near the gate（門の近くに立っている）を外す。

■ ③過去分詞のかたまりが後ろに付く（〜された…）
The letter written in English was from Australia.
→ 主語の中心は The letter。written in English（英語で書かれた）を外す。

■ ④who／which／that のかたまりが後ろに付く
The students who joined the club last year cleaned the river.
→ 主語の中心は The students。who joined the club last year を外す。
骨組み：The students cleaned the river.

■ さらに、主語そのものが動詞から作られることもある
Playing soccer with my friends is a lot of fun.（友達とサッカーをすることはとても楽しい）
To read many books is important.（多くの本を読むことは大切だ）
この場合、主語は「〜すること」でひとまとまり。動詞は必ず単数扱いで is を使う。

★ ポイント：どの型でも、外すべきかたまりは「名詞の直後から、文全体の動詞の直前まで」である。だから「次に出てくる動詞」をさがせば、主語の終わりが自動的に決まる。`,
      },
    ],
    trapExamples: [
      {
        question:
          'The pictures taken by my father in Kyoto ( is / are ) very beautiful. 正しいほうを選びなさい。',
        wrongAnswer: 'is',
        trapExplanation:
          '動詞のすぐ前にある Kyoto（単数）や father（単数）につられて is を選んでしまう。長い主語の文では、動詞の直前の名詞が主語だと勘違いしやすい。',
        correctAnswer: 'are',
        correctExplanation:
          '主語の中心は文頭の The pictures（複数）である。taken by my father in Kyoto は「父が京都で撮った」という説明のかたまりなので、いったん外して The pictures are very beautiful. と考える。長い主語の文では、いちばん前の名詞に○をつけてから動詞を決めること。',
      },
      {
        question: 'The man reading a newspaper on the bench is my uncle. を日本語にしなさい。',
        wrongAnswer: 'その男の人はベンチで新聞を読んでいて、私のおじです。',
        trapExplanation:
          'reading を文の動詞ととらえ、「読んでいる」と「おじです」を2つの述語として並べてしまう。実際には reading 〜 bench は主語の説明にすぎず、文の述語は is だけである。',
        correctAnswer: 'ベンチで新聞を読んでいるその男の人は、私のおじです。',
        correctExplanation:
          'reading a newspaper on the bench は直前の The man を後ろから説明するかたまりで、日本語にするときは前へ回す。骨組みは The man is my uncle. の1文だけである。-ing のかたまりの前に be動詞がなければ、それは動詞ではなく修飾語だと判断する。',
      },
    ],
  },

  {
    id: 'eigo_s391',
    subject: 'eigo',
    examType: 'chugaku',
    title: '主語と動詞を見つける③：文の切れ目を見つける',
    description: '接続詞・関係代名詞を目印に、1文の中の「2つの文」を分ける',
    order: 891,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '1つの文に「主語＋動詞」の組が2つ以上あるとき、必ずつなぎ役の語がある。',
      'つなぎ役は3種類：接続詞（and／but／because／when／if／that）、関係代名詞（who／which／that）、カンマ。',
      'when／if／because で始まるかたまりは、文の前半にも後半にも置ける。前半に置いたときはカンマで区切る。',
      'that は「〜ということ」（接続詞）と「〜する…」（関係代名詞）の2つの働きがあり、前が動詞なら接続詞。',
      'つなぎ役の語に印をつけてから読むと、長い文が短い文の足し算に見えてくる。',
    ],
    sections: [
      {
        heading: '切れ目の目印を覚える',
        body: `英語の1文が長くなるのは、短い文が接続詞でつながれているからである。だからつなぎ役の語を見つけて、そこで線を引けば、必ず短い文に分解できる。

■ 目印になる語（これだけ覚えればよい）
・and／but／or／so … 対等につなぐ
・when（〜のとき）／while（〜する間）／before／after／until
・because（〜だから）／if（もし〜なら）／though（〜だけれども）
・that（〜ということ）
・who／which／that（〜する（人・もの））

例）When the bell rang, the students stopped talking and opened their books.
When ／ the bell rang, ／ the students stopped talking ／ and opened their books.
→ 「ベルが鳴った」＋「生徒たちは話すのをやめた」＋「（そして）本を開いた」の3つ。

■ 前半に置いたらカンマ、後半に置いたらカンマなし
If it rains tomorrow, we will stay home.
We will stay home if it rains tomorrow.
どちらも同じ意味。前半に置くときだけカンマが必要になる。

★ ポイント：カンマは「ここで意味が切れる」という合図である。長い文に出会ったら、まずカンマの位置に縦線を引く。

⚠ 注意：when・if・before・after のかたまりの中では、未来のことでも will を使わず現在形で書く（If it rains tomorrow が正しく、If it will rain は誤り）。これは英作文でも読解でもよく問われる。`,
      },
      {
        heading: 'that の2つの働きを見分ける',
        body: `切れ目の目印の中でいちばんまぎらわしいのが that である。that には大きく3つの使い方がある。

■ ①「あの・それ」（指示語）
That is my bike.（あれは私の自転車だ）
→ that が主語や目的語そのものになっている。

■ ②「〜ということ」（接続詞）
I know that he is a good player.（私は彼がよい選手だということを知っている）
→ that の直前が動詞（know・think・say・hope・believe など）。that の後ろは「主語＋動詞」がそろった完全な文。
※ この that は省略できる。I know he is a good player. も正しい。

■ ③「〜する（人・もの）」（関係代名詞）
This is the book that I bought yesterday.（これは私が昨日買った本だ）
→ that の直前が名詞（the book）。that の後ろは主語か目的語が欠けた不完全な文（bought の目的語がない）。

■ 見分け方のまとめ
that の直前が【動詞】→ ②接続詞（〜ということ）
that の直前が【名詞】→ ③関係代名詞（〜する…）

★ ポイント：どちらの that も「ここから新しい文が始まる」という点は同じ。読むときは、まず that に印をつけて区切るだけで十分である。

⚠ 注意：I think that … の that は省略されることが非常に多い。I think he is right. のように that がなくても、think のあとに主語＋動詞が続いていれば「〜ということ」だと判断する。`,
      },
    ],
    trapExamples: [
      {
        question: 'I will call you when I ( arrive / will arrive ) at the station. 正しいほうを選びなさい。',
        wrongAnswer: 'will arrive',
        trapExplanation:
          '「駅に着いたら」は未来のことなので、will を使いたくなる。前半に I will call you と will があることも、その気持ちを強めてしまう。',
        correctAnswer: 'arrive',
        correctExplanation:
          'when／if／before／after／until などが作るかたまりの中では、未来の内容でも現在形で表すという決まりがある。だから when I arrive が正しい。前半の主文（I will call you）には will をきちんと入れる点にも注意する。',
      },
      {
        question: 'I heard that the man that lives next door is a famous singer. の下線 that はそれぞれ何か。',
        wrongAnswer: 'どちらも関係代名詞',
        trapExplanation:
          '同じ形の that が2回出てくるので、同じ働きだと決めつけてしまう。that の働きは形ではなく、直前にある語の品詞で決まる。',
        correctAnswer: '1つ目は接続詞（〜ということ）、2つ目は関係代名詞（〜する）',
        correctExplanation:
          '1つ目の that は直前が heard（動詞）なので「〜ということ」の接続詞。2つ目の that は直前が the man（名詞）なので「〜する（人）」の関係代名詞である。全体の意味は「私は、となりに住んでいるその男の人が有名な歌手だということを聞いた」。that の直前が動詞か名詞かを見る、という一点で必ず区別できる。',
      },
    ],
  },

  {
    id: 'eigo_s392',
    subject: 'eigo',
    examType: 'chugaku',
    title: '主語と動詞を見つける④：後ろから修飾する形',
    description: '前置詞句・-ing・過去分詞・to不定詞・関係代名詞が名詞を後ろから説明する',
    order: 892,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '1語の修飾語は名詞の前、2語以上のかたまりは名詞の後ろに置く。これが英語の大原則。',
      '後ろから修飾する形は5つ：前置詞句／-ing（〜している）／過去分詞（〜された）／to不定詞（〜するための）／関係代名詞。',
      '-ing は「する側」、過去分詞は「される側」。boy playing＝弾いている少年、song sung＝歌われた歌。',
      'something／anything／nothing を修飾する形容詞は、必ず後ろに置く（something cold to drink）。',
      '日本語にするときは、後ろのかたまりを前へ回して訳す。',
    ],
    sections: [
      {
        heading: '名詞の前と後ろ',
        body: `英語では、名詞をくわしく説明する語をどこに置くかが決まっている。

■ 前に置くもの（1語）
a book／the book（冠詞）
a new book（形容詞）
my new book（所有）
→ 短い1語は名詞の前。

■ 後ろに置くもの（2語以上のかたまり）
① 前置詞句：the book on the desk（机の上の本）
② -ing：the boy playing the guitar（ギターを弾いている少年）
③ 過去分詞：the letter written in English（英語で書かれた手紙）
④ to不定詞：something to drink（飲むための何か＝飲み物）
⑤ 関係代名詞：the man who lives next door（となりに住んでいる男の人）

日本語はすべて前から修飾する（「机の上の本」）ので、②〜⑤は訳すときに前へ回すことになる。この「回す」感覚が身につくと、長文の意味がすっと通るようになる。

★ ポイント：名詞のすぐ後ろに前置詞・-ing・過去分詞・to・who/which/that のどれかが来ていたら、そこから修飾のかたまりが始まっていると考える。かたまりの終わりは、文全体の動詞が現れる直前まで。

⚠ 注意：something・anything・nothing・everything を形容詞で修飾するときは、必ず後ろに置く。cold something ではなく something cold が正しい。さらに to不定詞も付ける場合は something cold to drink の順になる。`,
        figureId: 'lf_eigoext11_392',
      },
      {
        heading: '-ing と過去分詞の使い分け',
        body: `後置修飾でいちばんまちがえやすいのが、-ing と過去分詞の使い分けである。

■ -ing＝その名詞が「する側」
the girl singing on the stage（ステージで歌っている少女）
→ 少女が歌う。少女は「する側」。

■ 過去分詞＝その名詞が「される側」
the song sung by the girl（その少女によって歌われた歌）
→ 歌は歌われる。歌は「される側」。

■ 練習
・a boy called Ken（ケンと呼ばれている少年）※少年は呼ばれる側 → 過去分詞
・a man carrying a big bag（大きなかばんを運んでいる男の人）※男の人は運ぶ側 → -ing
・the pictures taken in Kyoto（京都で撮られた写真）※写真は撮られる側 → 過去分詞
・the students studying in the library（図書館で勉強している生徒たち）※生徒は勉強する側 → -ing

■ to不定詞の後置修飾
I have a lot of homework to do today.（今日やるべき宿題がたくさんある）
He is looking for a house to live in.（彼は住むための家をさがしている）
※ live in a house なので in が最後に残る点に注意。

★ ポイント：迷ったら「その名詞は自分でするのか、されるのか」と声に出して確かめる。写真は自分で撮らないので taken、少年は自分で運ぶので carrying。

⚠ 注意：a sleeping baby（眠っている赤ちゃん）のように、-ing が1語だけのときは名詞の前に置く。a baby sleeping in the bed のように2語以上になると後ろへ移る。位置は「語数」で決まる。`,
      },
    ],
    trapExamples: [
      {
        question: '「英語で書かれた本」を英語にしなさい。',
        wrongAnswer: 'a writing book in English',
        trapExplanation:
          '「書かれた」を writing としてしまい、さらに日本語の語順のまま名詞の前に置いてしまう。-ing は「〜している（する側）」なので、a writing book では「書いている本」という意味不明の表現になる。',
        correctAnswer: 'a book written in English',
        correctExplanation:
          '本は「書かれる側」なので過去分詞 written を使う。しかも written in English は2語以上のかたまりなので、名詞 a book の後ろに置く。「される側なら過去分詞」「2語以上なら後ろ」という2つの原則を両方あてはめること。',
      },
      {
        question: 'I want ( cold something / something cold ) to drink. 正しいほうを選びなさい。',
        wrongAnswer: 'cold something',
        trapExplanation:
          '「冷たい何か」という日本語の順や、a cold drink のように形容詞は名詞の前という原則にひきずられて、cold を前に置いてしまう。',
        correctAnswer: 'something cold',
        correctExplanation:
          '-thing で終わる語（something／anything／nothing／everything）だけは例外で、形容詞を必ず後ろに置く。さらに to drink のような to不定詞も付ける場合は「something → 形容詞 → to不定詞」の順で something cold to drink となる。この語順は入試の並べかえ問題の定番である。',
      },
    ],
  },

  // ───────────────── 3. 代名詞の指示内容をたどる（s393〜s396） ─────────────────
  {
    id: 'eigo_s393',
    subject: 'eigo',
    examType: 'chugaku',
    title: '代名詞①：it と they が指すものをつかむ',
    description: '英語が同じ名詞をくり返さない性質を利用して、指示内容を正確にたどる',
    order: 893,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '英語は同じ名詞のくり返しをきらう。2回目からは代名詞に変える。',
      'it＝単数の物や動物、they＝複数の人・物、he／she＝単数の人。数と種類で候補をしぼる。',
      '代名詞は必ず「自分より前」に出た名詞を指す。後ろの語を指すことはまずない。',
      '答えを書くときは、代名詞の位置に候補の名詞を入れて読み、意味が通るか必ず確かめる。',
      '指示語の設問では、本文の語をそのまま抜き出す（勝手に言いかえない）。',
    ],
    sections: [
      {
        heading: '代名詞は「前にもどる矢印」',
        body: `英語は、同じ名詞を何度も出すことをきらう言語である。1回目は名詞、2回目からは代名詞に置きかえる。だから代名詞は必ず「前にもどる矢印」だと考えればよい。

■ 代名詞の種類と、指せるもの
・it … 単数の物・動物・こと（前に出た単数名詞1つ）
・they／them … 複数の人・物
・he／him … 単数の男性
・she／her … 単数の女性
・one … 「同じ種類の別のもの」
・this／that … 直前の文全体や内容

■ 探し方の手順
①その代名詞が単数か複数か、人か物かを決める。
②直前の文にもどり、条件に合う名詞を探す。
③見つかったら、代名詞の場所にその名詞を入れて読み直す。意味が通れば正解。

例）Mika bought a new dictionary. She uses it every day.
　　She → Mika（単数の女性）
　　it → a new dictionary（単数の物）
入れかえると She uses a new dictionary every day. となり、意味が通る。

★ ポイント：③の「入れかえて読み直す」を必ずやること。ここを飛ばすと、条件は合っているが意味が通らない名詞を選んでしまう。

⚠ 注意：本文で問われたら、必ず本文にある語のまま書く。a new dictionary とあるのに「辞書」とだけ書いたり、the dictionary と勝手に変えたりすると減点されることがある。`,
      },
      {
        heading: '実際の英文でたどる',
        body: `次の英文で、下線部の代名詞が指すものを確かめる。

Yuki has a small brown rabbit. She got it two years ago. Its name is Coco. Coco likes carrots very much, and she eats them every morning. Yuki cleans the cage every Sunday because it becomes dirty in a week. Yuki's brother, Taku, also likes Coco. He often puts her on his knees and talks to her. Their mother says that they must take care of Coco together. Yuki and Taku agree, and they never forget to give her fresh water.

■ ひとつずつたどる
・She got it two years ago. の She＝Yuki、it＝a small brown rabbit
・Its name is Coco. の Its＝the rabbit（＝Coco）
・she eats them every morning. の she＝Coco、them＝carrots
・because it becomes dirty の it＝the cage（ケージ）※ Coco ではない
・He often puts her on his knees. の He＝Taku、her＝Coco
・they must take care of Coco の they＝Yuki and Taku

★ ポイント：同じ it でも指すものが変わる。2文目の it はウサギ、5文目の it はケージである。「一度決めたら最後まで同じ」ではないので、出てくるたびに確かめる。

⚠ 注意：she eats them の she を Yuki だと考えると「ユキがニンジンを毎朝食べる」になってしまう。直前が Coco likes carrots very much なので、and でつながれた後半の主語も Coco である。and でつながれた文は、前半と同じ主語のことを話し続けていることが多い。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文の Yuki cleans the cage every Sunday because it becomes dirty in a week. の it は何を指すか。',
        wrongAnswer: 'Coco（ウサギ）',
        trapExplanation:
          'この文章の中心はウサギの Coco なので、it といえばウサギだろうと決めつけてしまう。また前の文で it がウサギを指していたことも、思いこみを強める。',
        correctAnswer: 'the cage（ケージ・かご）',
        correctExplanation:
          '入れかえて確かめる。「Coco becomes dirty in a week（コロは1週間でよごれる）」よりも「the cage becomes dirty in a week（ケージは1週間でよごれる）」のほうが、そうじをする理由として自然である。代名詞は直前の名詞を指すのが原則で、この文でも直前の名詞は the cage である。必ず入れかえて意味を確かめること。',
      },
      {
        question: '上の英文の they never forget to give her fresh water. の they と her はそれぞれ何を指すか。',
        wrongAnswer: 'they＝Yuki and Taku and their mother／her＝their mother',
        trapExplanation:
          '直前の文に Their mother says … とあるため、いちばん近い名詞である mother を her だと考えてしまう。また「みんなで」という気持ちから、母親まで they に入れてしまう。',
        correctAnswer: 'they＝Yuki and Taku／her＝Coco',
        correctExplanation:
          '直前の文は Yuki and Taku agree で、その and のあとが they never forget … なので、they は Yuki and Taku である。her は「水をもらう側」なので、母親ではなくウサギの Coco。この文章では Coco を she／her で受けているので、女性を指す代名詞が2つの候補（mother と Coco）にあることになる。そういうときこそ、入れかえて意味が通るほうを選ぶ。',
      },
    ],
  },

  {
    id: 'eigo_s394',
    subject: 'eigo',
    examType: 'chugaku',
    title: '代名詞②：直前を探す原則と数の一致',
    description: '代名詞の候補を「数」と「人か物か」でしぼり、いちばん近い名詞から確かめる',
    order: 894,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '代名詞の指示内容は、原則として「直前の1〜2文」の中にある。段落をまたいで遠くを指すことは少ない。',
      '単数の代名詞（it／he／she）は単数名詞を、複数の代名詞（they／them）は複数名詞を指す。',
      '候補が複数あるときは、数の一致 → 人か物か → 意味が通るか、の順にしぼる。',
      '主語の位置の代名詞（he／she／it／they）と目的語の位置の代名詞（him／her／it／them）は形がちがう。',
      '所有を表す代名詞（his／her／its／their）は「〜の」なので、直後の名詞とセットで考える。',
    ],
    sections: [
      {
        heading: '数と種類で候補をしぼる',
        body: `代名詞の設問で迷うのは、候補になる名詞が2つ以上あるときである。そういうときは順番にふるいにかける。

■ ふるい①：数
Tom bought two books and a pen. He read them on the train.
them は複数なので、a pen（単数）は候補から外れる。答えは two books。

■ ふるい②：人か物か
My sister and her dog went to the park. She was very happy.
She は人を指す代名詞なので、her dog（物・動物）ではなく My sister。
※ ペットを she／he で受けることもあるが、その場合は文章の中でずっとそう扱われている。

■ ふるい③：意味が通るか
Ken gave Mika a letter, and she read it at once.
she＝Mika（Ken は男性なので he になるはず）、it＝a letter。

■ 形の一覧
主語の位置：I／you／he／she／it／we／they
目的語の位置：me／you／him／her／it／us／them
「〜の」：my／your／his／her／its／our／their
「〜のもの」：mine／yours／his／hers／ours／theirs

★ ポイント：主語の位置か目的語の位置かは、動詞の前か後ろかで決まる。動詞の後ろにあれば him／her／them の形になる。

⚠ 注意：its（それの）と it's（it is の短縮形）はまったく別物。its にアポストロフィは付かない。Its name is Coco.（その名前はコロだ）／It's a rabbit.（それはウサギだ）。読解でも英作文でも問われる。`,
        figureId: 'lf_eigoext11_394',
      },
      {
        heading: '距離のルール',
        body: `代名詞は、原則として自分にいちばん近い、条件に合う名詞を指す。これを「直前の原則」という。

例文の流れで確かめる。
① Ken wanted a new bike.
② His father took him to a shop last Sunday.
③ Ken found a red one and liked it very much.
④ However, he did not have enough money.
⑤ His father said, "I will buy it for your birthday."

・② His＝Ken、him＝Ken
・③ one＝bike（「同じ種類の別のもの」なので a red bike）、it＝the red bike
・④ he＝Ken（直前の文の主語ではなく、話の中心人物）
・⑤ it＝the red bike

■ 例外に注意する場面
主語がとちゅうで入れかわる文章では、直前の名詞ではなく「話の中心人物」を指すことがある。④の he がその例で、直前の③の主語 Ken と一致している。文章全体でだれの話をしているかを頭に入れておくと迷わない。

★ ポイント：候補が2人いる（Ken と his father の両方が男性）ときは、入れかえて意味を確かめるしかない。④で「父は十分なお金を持っていなかった」とすると、⑤で父が買ってあげることと矛盾する。だから he＝Ken。

⚠ 注意：代名詞が後ろの名詞を指す形（When he came home, Ken was very tired.）もまれにあるが、中学入試ではほとんど出ない。まず前を探すこと。`,
      },
    ],
    trapExamples: [
      {
        question:
          'My mother made a cake and some cookies. I ate them after dinner. の them は何を指すか。',
        wrongAnswer: 'a cake',
        trapExplanation:
          'いちばん近い名詞を探すという原則だけを機械的にあてはめて、直前に近い a cake を選んでしまう。しかし a cake は単数なので、複数の them では受けられない。',
        correctAnswer: 'some cookies（または a cake and some cookies）',
        correctExplanation:
          'them は複数を指す代名詞なので、単数の a cake は候補から外れる。残る候補は some cookies、あるいは a cake and some cookies（ケーキとクッキーの両方）である。「近さ」より先に「数の一致」でふるいにかけること。文脈上「作ったものを全部食べた」と読むなら a cake and some cookies が答えになる。',
      },
      {
        question: 'Its a very old temple. この英文のまちがいを直しなさい。',
        wrongAnswer: 'まちがいはない',
        trapExplanation:
          'Its も It’s も音は同じで見た目もよく似ているため、まちがいに気づかない。日本語には同じ区別がないので、意識しないと見のがしてしまう。',
        correctAnswer: "It’s a very old temple.（＝It is a very old temple.）",
        correctExplanation:
          "It’s は It is の短縮形で「それは〜です」、its はアポストロフィなしで「それの」という意味の所有を表す語である。この文は「それはとても古い寺です」なので It’s が正しい。its を使うなら Its roof is very old.（その屋根はとても古い）のように、直後に必ず名詞が来る。",
      },
    ],
  },

  {
    id: 'eigo_s395',
    subject: 'eigo',
    examType: 'chugaku',
    title: '代名詞③：this と that が指す「内容」',
    description: '名詞1語ではなく、前の文や段落全体の内容を指す指示語を読み取る',
    order: 895,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'this／that／it は、名詞1語だけでなく「前の文の内容ぜんたい」を指すことがある。',
      'This is why 〜（こういうわけで〜）は、前が理由・後ろが結果。This is because 〜 は、前が結果・後ろが理由。',
      '内容を指す指示語の答えは、「〜すること」「〜ということ」の形の日本語でまとめる。',
      'that は前の文の内容、this はこれから述べる内容も指せる（That is a good idea. ／ This is my plan: …）。',
      '設問「下線部が指す内容を日本語で説明しなさい」は、必ず前の1〜2文を要約して答える。',
    ],
    sections: [
      {
        heading: '文の内容をまるごと受ける指示語',
        body: `代名詞は名詞1語を指すのが基本だが、this／that／it は「前の文の内容そのもの」を指すことがある。これが読解の設問で最もよく問われる。

例）Ken practiced the piano for two hours every day. This made him a very good player.
This ＝「毎日2時間ピアノを練習したこと」
名詞1語では答えられない。前の文全体を「〜こと」の形にまとめる必要がある。

例）Many students said that the test was too difficult. The teacher heard this and made a new test.
this ＝「テストが難しすぎたと多くの生徒が言ったこと」

■ 答え方のきまり
・日本語で書くときは「〜こと」「〜ということ」で終える。
・英語で抜き出すときは、前の文をそのまま書くのではなく、設問の指示（何語以内など）に従う。

■ よく出る型
・This is why 〜　こういうわけで〜だ　→ 前が【理由】、後ろが【結果】
　It rained a lot last night. This is why the game was canceled.
・This is because 〜　これは〜だからだ　→ 前が【結果】、後ろが【理由】
　The game was canceled. This is because it rained a lot last night.

★ ポイント：why と because で、理由と結果が前後どちらにあるかが入れかわる。この2つはセットで覚えること。

⚠ 注意：「下線部 this の指す内容を答えよ」で、直前の名詞1語だけを書くと不正解になることが多い。まず「これは1語で答えられるものか、内容ぜんたいか」を判断する。`,
      },
      {
        heading: '内容を指す指示語の練習',
        body: `次の英文で、下線を引いた指示語の内容を確かめる。

Some people throw away food that they do not eat. In Japan, about six million tons of food are thrown away every year. This is a serious problem. First, making food uses a lot of water and energy. Second, burning food waste produces a lot of carbon dioxide. That is why some supermarkets now sell food that is close to its "best before" date at a lower price. Shoppers can buy it cheaply, and the shops do not have to throw it away. This is good for both sides.

■ ひとつずつ確かめる
・This is a serious problem. の This
　＝「日本で毎年およそ600万トンの食べ物が捨てられていること」
　※ food（食べ物）という名詞1語ではない。「捨てられていること」という内容である。
・That is why some supermarkets … の That
　＝「食べ物を作るのに大量の水とエネルギーを使い、食品ごみを燃やすと大量の二酸化炭素が出ること」
　※ That is why なので、その前が理由、後ろが結果。
・This is good for both sides. の This
　＝「賞味期限が近い食品を安く売り、客は安く買え、店は捨てずにすむこと」

★ ポイント：First, … Second, … と並んだあとの That is why は、first と second の両方をまとめて受ける。指示語の範囲は1文とはかぎらない。

⚠ 注意：both sides（両方の側）とは「客と店」のこと。数を表す語（both／each／all）が出たら、何と何を指すのかを必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文の This is a serious problem. の This が指す内容を日本語で答えなさい。',
        wrongAnswer: '食べ物（food）',
        trapExplanation:
          '指示語といえば名詞を指すものだと思いこみ、直前の文にある名詞 food をそのまま答えてしまう。しかし「食べ物は深刻な問題だ」では意味が通らない。',
        correctAnswer: '日本で毎年およそ600万トンの食べ物が捨てられていること。',
        correctExplanation:
          'This を入れかえて「食べ物は深刻な問題だ」と読むと不自然だが、「毎年600万トンの食べ物が捨てられていることは深刻な問題だ」なら自然につながる。指示語の答えは、入れかえて読んで自然かどうかで決める。日本語で書くときは「〜こと」で結ぶ。',
      },
      {
        question:
          'The bus did not come. This is because there was a big accident. 下線部の関係として正しいのはどちらか。（ア）前が理由・後ろが結果（イ）前が結果・後ろが理由',
        wrongAnswer: '（ア）前が理由・後ろが結果',
        trapExplanation:
          'This is why 〜 と This is because 〜 を混同して、「This is 〜」ならすべて「こういうわけで」だと覚えてしまっている。',
        correctAnswer: '（イ）前が結果・後ろが理由',
        correctExplanation:
          'This is because 〜 は「これは〜だからだ」で、後ろに理由が来る。ここでは「バスが来なかった（結果）。それは大きな事故があったからだ（理由）」となる。逆に This is why 〜 は「こういうわけで」で、前が理由・後ろが結果。because＝理由が後ろ、why＝結果が後ろ、と覚えるとよい。',
      },
    ],
  },

  {
    id: 'eigo_s396',
    subject: 'eigo',
    examType: 'chugaku',
    title: '代名詞④：one と it のちがい・言いかえの連鎖',
    description: '同じものを指す it と、同じ種類の別のものを指す one を区別する',
    order: 896,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'it＝まったく同じもの（その物そのもの）。one＝同じ種類の別のもの。',
      'ones は複数形。the one／the ones は「その中の特定のもの」を指す。',
      '英語は同じ語のくり返しをさけるため、the boy → he → him → the student のように言いかえていく。',
      '言いかえの連鎖をたどれば、その文章の中心人物・中心の話題（キーワード）が見える。',
      'the other／another／some … others … も指示のはたらきをするので、何を指すか確かめる。',
    ],
    sections: [
      {
        heading: 'it と one の決定的なちがい',
        body: `it と one はどちらも「それ」と訳せるが、指しているものがまったくちがう。

■ it＝そのもの自身
I lost my umbrella. I looked for it everywhere.
（かさをなくした。私はそれをあちこちさがした）
→ さがしているのは、なくしたそのかさ。

■ one＝同じ種類の別のもの
I lost my umbrella, so I bought a new one.
（かさをなくしたので、新しいのを買った）
→ 買ったのは別のかさ。one＝umbrella という「種類」だけを受けている。

■ 見分け方
「そのもの」で意味が通るなら it、「別の同じ種類のもの」なら one。
・This cap is too big. Do you have a smaller one?（もっと小さいの＝別の帽子）
・This cap is too big. I don't like it.（この帽子そのものが好きでない）

■ 複数の場合
These shoes are too small. I want bigger ones.（ones＝shoes）

■ the one／the ones
Which is your bag? — The one on the chair.（いすの上のもの）
→ the が付くと「その中の特定の1つ」を指す。

★ ポイント：one の直前にはよく形容詞（new／small／red）が付く。形容詞＋one を見たら「別のもの」と判断してよい。

⚠ 注意：数えられない名詞は one で受けられない。I want some water. — I'll get some. のように some を使う（× a new one）。`,
      },
      {
        heading: '言いかえの連鎖を追う',
        body: `英語の文章は、同じものをいろいろな語に言いかえながら進む。この連鎖を追えると、文章の中心がつかめる。

例）
① A young man named Sadao Takahashi lived in a small village.
② He was a doctor, and he worked at the only hospital there.
③ The doctor visited sick people even in the middle of the night.
④ Everyone in the village loved him.
⑤ They called him "the doctor who never sleeps."

・① A young man named Sadao Takahashi（初めて出す → 名前をきちんと出す）
・② He（代名詞に変える）
・③ The doctor（別の名詞に言いかえる。the が付くのは「もう話に出た人」だから）
・④ him（目的語の位置なので him）
・⑤ They＝Everyone in the village、him＝the doctor

■ the の合図
初めて出てくる名詞には a／an、2回目以降には the が付く。だから the が付いた名詞は「前に出た何かの言いかえ」である可能性が高い。

■ 説明文でも同じ
① Plastic bags are used all over the world.
② These bags are cheap and light.
③ However, this useful material does not break down in nature.
→ Plastic bags → These bags → this useful material と言いかえられている。

★ ポイント：this／these＋名詞（These bags／this material）は、指示語と名詞がセットになった形で、前に出たものを指し直すはたらきをする。指示語の設問でねらわれやすい。

⚠ 注意：some … others … は「一部は〜、別の一部は〜」の意味。Some students like math, and others like English. の others は「（生徒のうちの）ほかの人たち」で、全員ではない。`,
      },
    ],
    trapExamples: [
      {
        question:
          'I have a red pen and a blue pen. May I use ( it / one ) ? という文で、「（どちらでもいいので）1本使ってもいいですか」という意味にするにはどちらか。',
        wrongAnswer: 'it',
        trapExplanation:
          '日本語では「それを使ってもいい？」と言うので、it を選んでしまう。しかし it は「そのもの」を指すので、2本のうちどちらか特定できていない場面では使えない。',
        correctAnswer: 'one',
        correctExplanation:
          'one は「同じ種類のもののうちの1つ」を指す。ここでは2本のペンのうちどちらでもよいので one が正しい。もし「その赤いペンを使ってもいい？」と特定するなら May I use it? となる。it＝そのもの、one＝同じ種類のどれか、という使い分けを覚える。',
      },
      {
        question:
          'Plastic bags are used all over the world. However, this useful material does not break down in nature. の this useful material は何を指すか。',
        wrongAnswer: 'the world（世界）',
        trapExplanation:
          '直前にある名詞 the world を機械的に選んでしまう。しかし「世界は自然の中で分解しない」では意味が通らない。material（材料・素材）という語の意味を確かめずに、位置だけで判断したための誤り。',
        correctAnswer: 'plastic（プラスチック。プラスチック製のふくろの素材）',
        correctExplanation:
          'material は「材料・素材」の意味なので、指すのは「素材にあたるもの」でなければならない。前の文の Plastic bags のうち、素材にあたるのは plastic である。this＋名詞の形では、その名詞（ここでは material）が「どんな種類のものを指しているか」を教えてくれる。this problem なら問題、this idea なら考え、this animal なら動物を前から探せばよい。',
      },
    ],
  },

  // ───────────────── 4. つなぎ語から展開を読む（s397〜s400） ─────────────────
  {
    id: 'eigo_s397',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'つなぎ語①：but・however で主張を見つける',
    description: '逆接のつなぎ語の直後に筆者の言いたいことがある、という原則を使う',
    order: 897,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'but／however／yet／though は逆接。直前の内容をひっくり返す合図。',
      '逆接のつなぎ語の【直後】に筆者の主張が来る。設問はほぼそこから作られる。',
      'however は副詞なので、ふつう文の先頭に置きカンマを付ける（However, …）。but は文と文の間に置く。',
      'though／although は「〜だけれども」で、そのかたまりのほうが「ゆずる部分」。主張は主文のほう。',
      '「多くの人は〜と思う（Many people think …）」で始まったら、次に However が来ると予想する。',
    ],
    sections: [
      {
        heading: '逆接は主張の合図',
        body: `説明文の書き方には型がある。いちばん多いのが次の型である。

【一般に言われていること】→ However（しかし）→【筆者が本当に言いたいこと】

例）Many people think that reading on paper is old-fashioned. However, several studies show that we remember more when we read on paper.
（多くの人は紙で読むのは時代おくれだと思っている。しかし、紙で読むほうがよく覚えられるという研究がいくつかある）
筆者が言いたいのは後半である。前半はあくまで「よくある考え」を紹介しただけ。

■ 逆接の語と使い方
・but … 文の中で2つをつなぐ。It was cold, but I went out.
・however … 文の先頭。カンマを付ける。It was cold. However, I went out.
・though／although … 「〜だけれども」。Though it was cold, I went out.
・yet … 「それでも」。文語的。
・on the other hand … 「一方で」。対比を示す。

■ 大切な原則
逆接のあとが「言いたいこと」。逆接の前は「ゆずっている部分」。
だから設問で「筆者の考えとして正しいものを選べ」と問われたら、However の後ろを見る。

★ ポイント：長文を読むとき、However／But／Yet に○をつけ、その直後の文に線を引くだけで、主張の位置が地図のように見えてくる。

⚠ 注意：but と however は意味は同じでも、使い方がちがう。× It was cold, however I went out.（カンマでつなげない）。○ It was cold; however, I went out. または It was cold. However, I went out.`,
        figureId: 'lf_eigoext11_397',
      },
      {
        heading: 'though と but を同時に使わない',
        body: `日本語では「寒かったけれども、でも私は出かけた」のように、「けれども」と「でも」を重ねて言うことがある。英語ではこれをしない。

× Though it was cold, but I went out.
○ Though it was cold, I went out.
○ It was cold, but I went out.

これは日本人が非常によくまちがえる形なので、入試でもねらわれる。

■ though のかたまりはどちらが主張か
Though he was very tired, he finished his homework.
（とても疲れていたけれども、彼は宿題を終えた）
→ 言いたいのは「宿題を終えた」ほう。though のかたまりは、それをきわだたせるための背景である。

順番を入れかえても主張は変わらない。
He finished his homework though he was very tired.

■ 実際の英文で確かめる
Studying with a smartphone looks easy. You can look up any word in a second. However, many teachers say that students who use a paper dictionary remember words better. When you turn the pages, you also see other words near the word you are looking for. In this way, you learn more than you planned. Of course, a smartphone is useful when you are in a hurry. Still, if you want to remember new words for a long time, a paper dictionary may be a better choice.

・However, many teachers say … ← ここが主張の中心
・Of course, a smartphone is useful … ← ゆずっている部分
・Still, … a paper dictionary may be a better choice. ← 最終的な主張

★ ポイント：Of course（もちろん）／It is true that（たしかに〜だ）のあとには、必ず But や Still が続く。「いったん認めてから、しかし」と展開するのが説明文の定番である。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、筆者の考えとして最も適切なものを選びなさい。（ア）スマートフォンで調べるほうがよい（イ）紙の辞書のほうが語を長く覚えていられる',
        wrongAnswer: '（ア）スマートフォンで調べるほうがよい',
        trapExplanation:
          '本文の冒頭に Studying with a smartphone looks easy. とあり、さらに Of course, a smartphone is useful … と2度もスマートフォンの良さが書かれているため、こちらが主張だと思ってしまう。',
        correctAnswer: '（イ）紙の辞書のほうが語を長く覚えていられる',
        correctExplanation:
          'looks easy（簡単そうに見える）は「見かけ」を述べる表現で、そのあとに However が来ている。さらに Of course のあとには Still（それでも）が続き、最後に a paper dictionary may be a better choice と結ばれている。「Of course …, Still …」の型では、Still の後ろが結論である。逆接の直後に線を引く習慣をつけること。',
      },
      {
        question:
          'Though it was raining, ( but we played soccer / we played soccer ). 正しいほうを選びなさい。',
        wrongAnswer: 'but we played soccer',
        trapExplanation:
          '日本語の「雨が降っていたけれども、でもサッカーをした」をそのまま英語に置きかえて、though と but を両方使ってしまう。日本語では自然でも、英語では接続詞の重複になり誤りである。',
        correctAnswer: 'we played soccer',
        correctExplanation:
          'though（〜だけれども）はそれ自体が2つの文をつなぐ接続詞なので、もう1つの接続詞 but は不要である。Though it was raining, we played soccer. か、It was raining, but we played soccer. のどちらか一方にする。同じく Because …, so … の重ね使いも誤りで、Because it rained, we stayed home. か It rained, so we stayed home. とする。',
      },
    ],
  },

  {
    id: 'eigo_s398',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'つなぎ語②：for example が示す「具体例」',
    description: '具体例のかたまりを見抜き、その前にある「言いたいこと」に戻る',
    order: 898,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'for example／for instance／such as／like は具体例の合図。',
      '具体例は主張ではない。具体例の【前】に、その例が支えている主張がある。',
      'such as は名詞のあとに直接つなぐ（fruits such as apples）。for example は文の先頭でカンマを付ける。',
      '具体例が長く続いても、要旨をまとめるときには例そのものを書かない。',
      '設問に固有名詞（国名・人名・数字）が出たら、それは具体例の部分から作られている。',
    ],
    sections: [
      {
        heading: '具体例は主張の下働き',
        body: `説明文で、筆者は主張を1つ述べたあと、それを納得させるために例を並べる。読み手はこの「主張」と「例」を区別しなければならない。

■ 具体例の合図
・for example, ／ for instance, （たとえば）※文の先頭、カンマ付き
・such as 〜（〜のような）※名詞のすぐ後ろ
・like 〜（〜のような）※ such as よりくだけた言い方
・One example is 〜（一例は〜だ）
・In Japan, 〜 ／ In 2020, 〜（国名や年号で例を出すこともある）

例）Some animals can use tools. For example, some birds use small sticks to get insects from trees.
→ 主張は前半「道具を使える動物がいる」。後半は例にすぎない。

■ such as と for example の使い分け
○ I like fruits such as apples and oranges.（名詞に直接つなぐ）
○ I like fruits. For example, I often eat apples.（文の先頭）
× I like fruits, for example apples and oranges.（このつなぎ方はしない）

★ ポイント：段落の要旨を答える問題では、具体例を書いてはいけない。「たとえば〜」を消して残った文が答えになる。

⚠ 注意：例が3つ4つと続くと、読んでいるうちに主張を忘れる。For example が出たら、いったん前の文に戻って主張に線を引いてから読み進めるとよい。`,
      },
      {
        heading: '具体例をカッコに入れて読む',
        body: `次の英文を、具体例の部分をカッコに入れながら読む。

Small changes in our daily life can save a lot of energy. For example, if you turn off the light when you leave a room, you can save about 100 yen a month. Also, using a fan instead of an air conditioner on a cool summer evening uses much less electricity. Even the way you boil water is important. Boiling only the water you need, such as one cup instead of a full pot, saves both time and energy. These small actions may look too small to matter. However, if everyone in a city does them, the total amount becomes very large.

■ 骨組みだけ取り出す
主張①：Small changes in our daily life can save a lot of energy.
（例：電気を消す／扇風機を使う／必要な分だけ湯をわかす）
主張②：These small actions may look too small to matter. However, if everyone in a city does them, the total amount becomes very large.

■ 要旨
「日常のささいな行動でも省エネになる。1つ1つは小さく見えるが、みんなが行えば全体としては大きくなる。」

★ ポイント：Also（また）は「例をもう1つ追加する」合図。Even（〜さえ）は「意外なものまで例に入れる」合図。どちらも例の続きなので、主張ではない。

⚠ 注意：数字（about 100 yen a month）は例の中にあるが、設問ではよく問われる。「例は要旨には書かないが、細かい内容を問う設問では答えになる」という二面性を意識する。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文の要旨として最も適切なものを選びなさい。（ア）部屋を出るときに電気を消すと月に約100円節約できる（イ）日常のささいな行動でも、みんなで行えば大きな省エネになる',
        wrongAnswer: '（ア）部屋を出るときに電気を消すと月に約100円節約できる',
        trapExplanation:
          '数字が入っていて具体的なので「大事なこと」に見えてしまう。しかしこれは For example に続く1つの例にすぎず、文章全体をまとめた内容ではない。',
        correctAnswer: '（イ）日常のささいな行動でも、みんなで行えば大きな省エネになる',
        correctExplanation:
          '要旨は「例をのぞいて残るもの」である。第1文の主張と、最後の However の後ろの結論を合わせると（イ）になる。（ア）は For example の中の1例で、要旨としては範囲がせますぎる。要旨問題では、For example・such as・Also の後ろを消してから選択肢と見比べるとよい。',
      },
      {
        question: '「私はりんごやみかんのような果物が好きです」を英語にしなさい。',
        wrongAnswer: 'I like fruits, for example apples and oranges.',
        trapExplanation:
          '「〜のような」を「たとえば」と読みかえて for example を使ってしまう。for example は文の先頭に置いて文全体を導く語なので、名詞の後ろに直接つなぐことはできない。',
        correctAnswer: 'I like fruits such as apples and oranges.',
        correctExplanation:
          'such as は名詞のすぐ後ろに置いて「〜のような」と例を並べる。for example を使うなら、I like fruits. For example, I often eat apples and oranges. のように文を分ける。like を使って I like fruits like apples and oranges. とすることもできるが、like が2回出て読みにくいので such as のほうがよい。',
      },
    ],
  },

  {
    id: 'eigo_s399',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'つなぎ語③：because・so で原因と結果を結ぶ',
    description: '理由を問う設問に確実に答えるため、原因と結果の向きを正しくつかむ',
    order: 899,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'because の後ろが【原因】、so の後ろが【結果】。向きが正反対なので混同しない。',
      'Why 〜? には Because 〜. または To 〜.（〜するため）で答える。',
      'because と so を1つの文で同時に使わない（Because …, so … は誤り）。',
      'That is why 〜（だから〜）／That is because 〜（それは〜だからだ）の向きも区別する。',
      '理由は because のない文にも書かれている。前後の文の内容から因果関係を読み取る力が必要。',
    ],
    sections: [
      {
        heading: '原因と結果の向き',
        body: `理由を問う設問（Why …?／なぜか）は、長文問題で必ず出る。答えを外さないために、つなぎ語の向きを正確に覚える。

■ because … 後ろが原因
I stayed home because it rained.
　【結果】I stayed home ／【原因】it rained

■ so … 後ろが結果
It rained, so I stayed home.
　【原因】It rained ／【結果】I stayed home

■ 図で覚える
　（原因）→ so →（結果）
　（結果）← because ←（原因）
矢印の向きが逆になる。

■ 同じ内容の言いかえ
・Because it rained, I stayed home.（because を前に出すとカンマが必要）
・It rained, so I stayed home.
・It rained. That is why I stayed home.
・I stayed home. That is because it rained.
4つとも同じ内容である。

■ 理由を表すそのほかの語
・since 〜／as 〜（〜なので）
・because of ＋名詞（〜のせいで）※ because of は後ろに名詞、because は後ろに文
　because of the rain ／ because it rained

★ ポイント：Why did he stay home? と聞かれたら、Because it rained. と答える。「To …」で答えるのは目的を聞かれたとき（Why did you go there? — To meet my friend.）。

⚠ 注意：Because …, so … は誤り。日本語の「〜なので、だから〜」につられやすいので、どちらか一方だけを使うこと。`,
      },
      {
        heading: 'つなぎ語のない因果関係を読む',
        body: `入試の英文では、because や so がなくても因果関係が示されていることが多い。理由を問う設問では、そのつながりを自分で見つける必要がある。

例）
① Ken did not go to school yesterday.
② He had a high fever and stayed in bed all day.
③ His mother took him to the hospital in the afternoon.

Why didn't Ken go to school yesterday? という設問の答えは②の He had a high fever（高熱があったから）である。because はどこにも書かれていないが、②が①の理由になっている。

■ 因果関係を示すそのほかの表現
・Thanks to 〜（〜のおかげで）※よい結果
・Because of 〜／Due to 〜（〜のせいで）
・As a result,（その結果）
・therefore（それゆえ）
・This led to 〜（これが〜につながった）
・make ＋人＋形容詞（人を〜な気持ちにさせる）
　The news made her happy.（その知らせが彼女をうれしくさせた＝知らせを聞いてうれしかった）

★ ポイント：Why の設問で答えを本文から抜き出すときは、because があればその後ろを、なければ「その出来事の直前の文」をまず疑う。

⚠ 注意：日本語で答えるときは「〜から。」「〜ため。」で結ぶ。英語で答えるときは Because ＋主語＋動詞 の形にし、主語を代名詞に直す（Because he had a high fever.）。`,
      },
    ],
    trapExamples: [
      {
        question: 'Why did she open the window? に対する答えとして正しいのはどちらか。',
        wrongAnswer: 'So the room was very hot.',
        trapExplanation:
          '「だから部屋が暑かった」と so を理由の語だと思いこんでいる。so の後ろは結果なので、この答えでは「窓を開けた、だから部屋が暑かった」という逆の因果になってしまう。',
        correctAnswer: 'Because the room was very hot.',
        correctExplanation:
          'Why 〜? に対する答えは Because ＋原因 で表す。「部屋がとても暑かったから窓を開けた」という因果の向きが正しい。so を使って答えるなら The room was very hot, so she opened the window. と、原因を先に置いた1つの文にする。because は後ろが原因、so は後ろが結果、と向きを固定して覚える。',
      },
      {
        question: '「雪がたくさん降ったので、電車が止まりました」を英語にしなさい。',
        wrongAnswer: 'Because it snowed a lot, so the trains stopped.',
        trapExplanation:
          '日本語の「〜ので、だから〜」の形をそのまま英語に移して、because と so を両方入れてしまう。英語では接続詞を重ねて使わない。',
        correctAnswer:
          'Because it snowed a lot, the trains stopped.（または It snowed a lot, so the trains stopped.）',
        correctExplanation:
          'because か so のどちらか一方だけを使う。because を前に置く場合はカンマで区切り、後ろに主文を続ける。so を使う場合は「原因，so 結果」の順にする。なお because of を使うなら後ろは名詞なので、The trains stopped because of the heavy snow. となる（× because of it snowed）。',
      },
    ],
  },

  {
    id: 'eigo_s400',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'つなぎ語④：also・first・finally で順序を追う',
    description: '追加と順序を示す語を手がかりに、いくつの内容が並んでいるかを数える',
    order: 900,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'also／too／in addition／besides は「追加」。前と同じ方向の内容がもう1つ足される。',
      'first／second／third／finally は「順序」。いくつ並ぶか先に数えられる。',
      'also は動詞の前（またはbe動詞の後ろ）、too は文の最後に置く。',
      'finally／in conclusion／in short のあとは結論なので、要旨問題の答えになりやすい。',
      '「理由は3つある（There are three reasons.）」と書かれたら、3つそろうまで読む。',
    ],
    sections: [
      {
        heading: '追加と順序の語',
        body: `説明文では、同じ方向の内容がいくつも並ぶ。その並びを見失わないための語が「追加」と「順序」のつなぎ語である。

■ 追加（同じ方向にもう1つ）
・also（〜もまた）… 動詞の前、be動詞の後ろ
　He also plays the guitar. ／ He is also a good singer.
・too（〜もまた）… 文の最後、カンマを付けることが多い
　He plays the guitar, too.
・in addition,（さらに）／besides,（そのうえ）… 文の先頭
・not only A but also B（AだけでなくBも）

■ 順序（数えられる並び）
・First, … Second, … Third, … Finally, …
・At first,（最初は）※あとで変化があることを示す
・Then,（それから）／After that,（そのあと）
・Finally,（最後に）／In conclusion,（結論として）／In short,（要するに）

例）There are three reasons why I like this book. First, the story is exciting. Second, the pictures are beautiful. Finally, I can learn about other countries.
→ 「3つある」と予告してから、First／Second／Finally で3つ並べている。

★ ポイント：There are three reasons. のように数を予告する文が出たら、その数だけ内容を探す。設問で「3つ書きなさい」と問われることが多い。

⚠ 注意：at first と first はちがう。first は「まず第一に」（列挙）、at first は「最初のうちは」（あとで変わる）。At first, I did not like him. But now he is my best friend. のように使う。`,
      },
      {
        heading: '実際の英文で並びを数える',
        body: `次の英文には、いくつの内容が並んでいるか。

Volunteer work is popular among students in our town. There are three main activities. First, some students clean the river on the first Sunday of every month. They collect cans and plastic bottles. Second, other students visit an old people's home and sing songs there. The old people always look forward to it. Finally, a few students teach Japanese to foreign children on Saturday afternoons. In addition, our school gives each student a small card. When you join an activity, you get a stamp on the card. In short, our town tries to make volunteer work fun and easy to start.

■ 並びを整理する
予告：There are three main activities.（3つ）
①First → 川そうじ（毎月第1日曜日）
②Second → 老人ホームを訪ねて歌を歌う
③Finally → 土曜の午後に外国の子どもに日本語を教える
追加：In addition → カードにスタンプをもらえる仕組み
結論：In short → 町はボランティアを楽しく始めやすいものにしようとしている

■ 設問になりやすい所
・「3つの活動を答えなさい」→ ①②③
・「本文の要旨を選べ」→ In short の文
・「川そうじはいつ行われるか」→ the first Sunday of every month

★ ポイント：In addition は4つ目の活動ではない。「活動は3つ」と予告されているので、In addition の内容は活動ではなく別の情報（しくみ）である。予告の数を覚えておくと、こういう引っかけを避けられる。

⚠ 注意：In short（要するに）／In conclusion（結論として）のあとは、それまでの内容をまとめた文である。要旨問題の答えがそのまま書かれていることが多いので、見つけたら必ず線を引く。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、本文で述べられているボランティア活動はいくつか。',
        wrongAnswer: '4つ',
        trapExplanation:
          'First／Second／Finally に加えて In addition があるので、これも1つの活動だと数えてしまう。しかし In addition の後ろに書かれているのはスタンプカードのしくみであり、活動そのものではない。',
        correctAnswer: '3つ',
        correctExplanation:
          '本文の2文目に There are three main activities. と数が予告されている。そして First／Second／Finally で3つが並べられている。In addition のあとは、活動を続けやすくするための工夫の説明である。数を予告する文（There are three 〜.）は必ず○で囲み、その数どおりに数えること。',
      },
      {
        question: '「彼はサッカーもします」を also を使って英語にしなさい。',
        wrongAnswer: 'He plays also soccer.',
        trapExplanation:
          '日本語の「サッカーも」の「も」が soccer に付いているので、also も soccer の直前に置いてしまう。also の位置は語ではなく文の構造で決まる。',
        correctAnswer: 'He also plays soccer.',
        correctExplanation:
          'also は一般動詞の前に置く（He also plays soccer.）。be動詞や助動詞があるときはその後ろに置く（He is also kind. ／ He can also swim.）。文末に置きたいときは also ではなく too を使い、He plays soccer, too. とする。位置をまちがえやすい語なので、「also は動詞の前、too は文の最後」と型で覚える。',
      },
    ],
  },

  // ───────────────── 5. 段落の主題文を見つける（s401〜s403） ─────────────────
  {
    id: 'eigo_s401',
    subject: 'eigo',
    examType: 'chugaku',
    title: '段落①：主題文（topic sentence）を見つける',
    description: '段落の中心の1文を見つけ、残りをその支えとして読む',
    order: 901,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '1つの段落には言いたいことが1つだけある。それを書いた文を主題文（topic sentence）という。',
      '主題文は段落の1文目にあることが最も多い。まず1文目を読む。',
      '主題文以外の文（支持文）は、理由・具体例・数字など、主題文を支える材料である。',
      '主題文には具体的すぎる語（固有名詞・細かい数字）が入らない。入っていたらそれは支持文。',
      '各段落の主題文をつなぐと、文章全体の要約になる。',
    ],
    sections: [
      {
        heading: '段落は「1つの言いたいこと」でできている',
        body: `英語の文章は段落（paragraph）ごとに、言いたいことを1つだけ述べるという書き方をする。この決まりのおかげで、段落の1文目を読むだけで内容の見当がつく。

■ 段落の3つの部品
①主題文（topic sentence）… その段落で言いたいこと。ふつう1文目。
②支持文（supporting sentences）… ①を支える理由・具体例・数字・体験。
③まとめ文（concluding sentence）… ①を言いかえて結ぶ。ないこともある。

例）
（①）Reading aloud is a good way to learn English.（音読は英語を学ぶよい方法だ）
（②）When you read aloud, you use your eyes, your mouth, and your ears at the same time.
（②）Studies show that students who read aloud every day get better scores in listening tests.
（③）So, try to read your textbook aloud for ten minutes every day.

■ 主題文の見分け方
・その段落のほかの文が、すべてその文の説明になっているか。
・具体的すぎないか（Studies show that … は支持文。証拠を出しているから）。
・つなぎ語で始まっていないか（For example／Second などで始まる文は支持文）。

★ ポイント：主題文だけを読んでいけば、長い文章も3〜5文の要約になる。時間が足りないときは、各段落の1文目だけ読んで全体像をつかんでから設問に取りかかるとよい。

⚠ 注意：段落の1文目が話の導入（Last summer, I went to Hokkaido.）で終わっていることもある。物語文では主題文の考え方は使わない。主題文は説明文・意見文の読み方である。`,
        figureId: 'lf_eigoext11_401',
      },
      {
        heading: '主題文と支持文を分ける',
        body: `次の段落で、主題文がどれかを考える。

Dogs are useful to people in many ways. Some dogs help people who cannot see well. These dogs are called guide dogs, and they learn how to walk safely with their owners. Other dogs work with the police and find things by using their noses. There are also dogs that visit hospitals and make sick people feel better. In these ways, dogs are not only pets but also our partners.

■ 分け方
主題文：Dogs are useful to people in many ways.（1文目）
支持文①：盲導犬の説明（Some dogs …）
支持文②：警察犬の説明（Other dogs …）
支持文③：病院を訪れる犬の説明（There are also dogs …）
まとめ文：In these ways, dogs are not only pets but also our partners.

■ 目印になった語
・Some 〜 … Other 〜 … There are also 〜（例を並べる形）
・In these ways（まとめの合図）
・not only A but also B（AだけでなくBも）

★ ポイント：Some 〜, Other 〜 という並べ方が出たら、それは主題文を支える例の列挙である。「いくつかの犬は」で始まる文は、段落全体をまとめる文にはなりえない。

⚠ 注意：この段落の要旨を「盲導犬は目の不自由な人を助ける」と書くと不正解。それは3つの例のうちの1つにすぎない。要旨は必ず「全部の例をふくむ広さ」でなければならない。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の段落の主題文（topic sentence）として最も適切な1文を選びなさい。',
        wrongAnswer: 'These dogs are called guide dogs, and they learn how to walk safely with their owners.',
        trapExplanation:
          '「盲導犬」という具体的な内容がくわしく説明されているため、いちばん重要な文に見えてしまう。しかしこれは3つ並んだ例の1つ目の説明にすぎない。',
        correctAnswer: 'Dogs are useful to people in many ways.',
        correctExplanation:
          '主題文はその段落のすべての文をふくむ広さでなければならない。in many ways（さまざまな点で）とあるからこそ、盲導犬・警察犬・病院を訪れる犬という3つの例が続けられる。具体的な名前（guide dogs）や細かい説明が入った文は支持文だと判断する。',
      },
      {
        question:
          '上の段落について、In these ways, dogs are not only pets but also our partners. の意味として正しいのはどちらか。（ア）犬はペットではなく仲間である（イ）犬はペットであるだけでなく仲間でもある',
        wrongAnswer: '（ア）犬はペットではなく仲間である',
        trapExplanation:
          'not only の not だけを見て「〜ではない」と否定文として読んでしまう。not only A but also B は1つのまとまった表現で、A を打ち消しているわけではない。',
        correctAnswer: '（イ）犬はペットであるだけでなく仲間でもある',
        correctExplanation:
          'not only A but also B は「AだけでなくBもまた」という意味で、AもBも両方あてはまる。ここでは「ペットでもあり、さらに仲間でもある」となる。似た形に not A but B（AではなくB）があり、こちらは A を打ち消す。only と but also があるかどうかで区別すること。',
      },
    ],
  },

  {
    id: 'eigo_s402',
    subject: 'eigo',
    examType: 'chugaku',
    title: '段落②：支持文の役割を見抜く',
    description: '理由・具体例・数字・体験という4種類の支えを区別して読む',
    order: 902,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '支持文には4種類ある：理由（because）／具体例（for example）／数字・調査（studies show）／体験（When I was 〜）。',
      '支持文がいくつあるかを数えると、段落の構造がそのまま見える。',
      '数字が出てきたら必ず印をつける。細かい内容を問う設問はほぼ数字から作られる。',
      '体験談は説明文の中でも使われる。「私の場合は」で始まる部分は主張ではない。',
      '支持文だけを読んで答えを書くと、範囲がせまい誤答になる。',
    ],
    sections: [
      {
        heading: '支えの4つの型',
        body: `主題文を支える文（支持文）は、次の4つの型のどれかである。型がわかると、その段落がどう展開するか先読みできる。

■ ①理由（なぜそう言えるのか）
主題：Walking to school is good for students.
支持：Because they can wake up their bodies before the first class.
合図：because／since／The reason is that 〜

■ ②具体例（実際にはこうだ）
支持：For example, students in a school in Nagano walk about two kilometers every morning.
合図：for example／such as／One example is 〜

■ ③数字・調査（証拠を出す）
支持：A study found that 70 percent of them said they felt better in class.
合図：A study shows／According to 〜／percent／about 〜

■ ④体験（自分の場合）
支持：When I was in the fourth grade, I started walking to school, and I stopped falling asleep in class.
合図：When I was 〜／In my case／I remember 〜

★ ポイント：According to 〜（〜によれば）は、情報の出どころを示す表現。According to the graph（グラフによれば）は図表つき読解で必ず出る。

⚠ 注意：④の体験は、書き手にとっては強い根拠でも、「みんなにあてはまること」ではない。要旨をまとめるときは体験そのものを書かない。`,
      },
      {
        heading: '構造をメモしながら読む',
        body: `次の段落を、主題文と支持文に分けてメモを取る。

Sleeping well is more important than studying late at night. When you sleep, your brain keeps working and saves what you learned during the day. According to a study in the United States, students who slept for eight hours got higher scores than students who slept for five hours and studied longer. I tried this myself before my last test. I stopped studying at ten and went to bed early. The next morning, I could remember more words than usual. If you want better scores, go to bed early instead of studying until midnight.

■ メモの取り方
主題：よく眠ることは夜おそくまで勉強するより大切
　支①（理由）：眠っている間に脳が働き、その日に学んだことを保存する
　支②（調査）：アメリカの研究。8時間眠った生徒＞5時間で長く勉強した生徒
　支③（体験）：筆者は10時に勉強をやめて早く寝たら、翌朝いつもより単語を思い出せた
結論：よい点を取りたいなら、夜中まで勉強せず早く寝よ

このメモがそのまま要約になる。設問「筆者の主張は何か」には主題または結論を、「アメリカの研究では何がわかったか」には支②を答える。

★ ポイント：支持文が3つ以上並ぶ段落では、必ず番号をふってメモを取る。頭の中だけで整理しようとすると必ず取りこぼす。

⚠ 注意：instead of 〜ing（〜するかわりに）は入試頻出。go to bed early instead of studying until midnight は「夜中まで勉強するかわりに早く寝る」。instead of の後ろは名詞か -ing 形になる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の段落について、筆者の主張として最も適切なものを選びなさい。（ア）筆者は前回のテスト前に10時に勉強をやめた（イ）夜おそくまで勉強するより、よく眠るほうが大切だ',
        wrongAnswer: '（ア）筆者は前回のテスト前に10時に勉強をやめた',
        trapExplanation:
          'I tried this myself … と一人称で書かれているので、筆者が言いたいことのように見える。しかしこれは主張を支えるための体験談（支持文）にすぎない。',
        correctAnswer: '（イ）夜おそくまで勉強するより、よく眠るほうが大切だ',
        correctExplanation:
          '1文目の Sleeping well is more important than studying late at night. が主題文で、最後の If you want better scores, go to bed early … がその言いかえの結論である。体験談は「筆者にも効果があった」という証拠であって主張ではない。I や my で始まる文が主張かどうかは、その段落の1文目と見比べて判断する。',
      },
      {
        question:
          '上の段落について、「8時間眠った生徒のほうが点数が高かった」という内容はどの支えにあたるか。',
        wrongAnswer: '筆者自身の体験',
        trapExplanation:
          '同じ段落の中に筆者の体験談もあるため、区別せずにまとめて「筆者の経験」としてしまう。しかしこの部分には According to a study in the United States という出どころが示されている。',
        correctAnswer: '調査・研究の結果（数字による証拠）',
        correctExplanation:
          'According to 〜（〜によれば）は情報の出どころを示す表現で、続く内容は筆者の体験ではなく客観的なデータである。筆者の体験は次の I tried this myself 〜 から始まる。「だれが述べていることか」を示す表現（According to／A study shows／My teacher says）に印をつけると、支えの種類をまちがえない。',
      },
    ],
  },

  {
    id: 'eigo_s403',
    subject: 'eigo',
    examType: 'chugaku',
    title: '段落③：主題文が最後にある型・段落ごとの要約',
    description: '結論が段落末に置かれる型を知り、段落ごとに一言メモを作る',
    order: 903,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '主題文は段落の最初にあることが多いが、最後に置かれることもある（結論あとおき型）。',
      '1文目が具体例・体験・問いかけで始まっていたら、主題文は最後にあると考える。',
      'So／Therefore／In this way／This means that 〜 で始まる最後の文は主題文の可能性が高い。',
      '段落ごとに日本語で一言メモ（10〜20字）を作ると、内容一致問題を解く時間が半分になる。',
      '問いかけ（Do you know 〜?）で始まる段落は、その答えが主題文である。',
    ],
    sections: [
      {
        heading: '主題文が最後に来る型',
        body: `主題文は段落の最初にあるのが基本だが、書き手が読者を引きこみたいときは、具体例や体験から始めて最後に主張を置く。これを結論あとおき型という。

■ 1文目が次のような形なら、結論は最後にある
・問いかけ：Do you know how many languages are spoken in the world?
・体験：Last summer, I visited a small village in Nagano.
・意外な事実：A cat sleeps for about thirteen hours a day.
・数字：In Japan, about 30 percent of people live alone.

■ 最後の主題文の目印
So, …／Therefore, …／In this way, …／This means that …／We should …／I think that …

例）
Do you know how many kinds of insects live on the earth? Scientists have found about one million kinds, and they say there may be many more. Some of them live only in one small forest. When that forest is cut down, those insects disappear forever. This means that protecting forests is protecting many lives we have never seen.

主題文は最後の This means that 〜 の文である。

★ ポイント：段落の1文目を読んで「これは例だな」と思ったら、すぐ最後の1文に目を移す。そこに答えがあることが多い。

⚠ 注意：段落の途中に主題文がある型もまれにある。その場合はたいてい However のあとに置かれている。「1文目 → 最終文 → However の後ろ」の順にさがせば、ほぼ確実に見つかる。`,
        figureId: 'lf_eigoext11_403',
      },
      {
        heading: '段落ごとの一言メモを作る',
        body: `長文問題では、段落ごとに日本語で短いメモを取ると、あとで設問の答えをさがす時間が大きく減る。

■ メモのきまり
・1段落につき10〜20字。長く書かない。
・主語と述語がある形にする（「〜は〜だ」）。
・段落番号を必ず書く。

例）4段落の説明文なら
①ペットボトルは世界中で使われている
②しかし多くが海に流れこむ
③海の生き物が食べてしまう危険
④私たちにできる3つのこと

このメモがあれば、設問「海の生き物への影響が書かれているのは何段落か」に一瞬で答えられる。

■ メモを作るタイミング
段落を1つ読み終えるたびに作る。全部読んでからまとめて作ろうとすると、前半を忘れている。

■ 設問との対応
・内容一致問題 → メモを見て、どの段落を読み返せばよいか決める
・要旨・タイトル問題 → メモを全部つないで一文にする
・段落の要旨問題 → その段落のメモがそのまま答えになる

★ ポイント：メモは日本語でよい。英語で書こうとすると時間がかかるうえ、書くこと自体が目的になってしまう。

⚠ 注意：メモに具体例や数字を書かないこと。「①ペットボトルは年間4000億本作られる」のように数字を書くと、メモが段落の一部の情報になってしまい、全体像がわからなくなる。数字は本文に線を引くだけでよい。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の昆虫についての段落の主題文として最も適切なものを選びなさい。',
        wrongAnswer: 'Scientists have found about one million kinds, and they say there may be many more.',
        trapExplanation:
          '「約100万種」という具体的な数字が入っていて重要そうに見えるため、これを中心の文だと考えてしまう。主題文は段落の最初にあるという思いこみも、この誤りを強める。',
        correctAnswer:
          'This means that protecting forests is protecting many lives we have never seen.',
        correctExplanation:
          'この段落は Do you know 〜? という問いかけで始まっているので、結論あとおき型である。数字は主題を支える材料にすぎない。最後の This means that 〜（これは〜ということを意味する）は、それまでの内容をまとめる典型的な主題文の形である。1文目が問いかけ・体験・数字なら最終文を見る、と決めておくとよい。',
      },
      {
        question:
          '段落ごとの一言メモとして適切なのはどちらか。（ア）ペットボトルは年間約4000億本作られる（イ）ペットボトルは世界中で大量に使われている',
        wrongAnswer: '（ア）ペットボトルは年間約4000億本作られる',
        trapExplanation:
          '数字が入っているほうが正確で役に立つメモだと考えてしまう。しかしメモの目的は「その段落が何の話か」を思い出すことなので、細かすぎる情報はかえって全体像をぼやけさせる。',
        correctAnswer: '（イ）ペットボトルは世界中で大量に使われている',
        correctExplanation:
          'メモは段落全体をおおう広さで書く。数字は支持文の中の情報なので、メモではなく本文に線を引いて残す。設問で数字が問われたときは、メモでどの段落かを特定し、線を引いた場所を見に行けばよい。メモと線引きは役割が別だと考えること。',
      },
    ],
  },

  // ───────────────── 6. 物語文の読解（s404〜s407） ─────────────────
  {
    id: 'eigo_s404',
    subject: 'eigo',
    examType: 'chugaku',
    title: '物語文①：登場人物と場面をつかむ',
    description: 'だれが・いつ・どこで・何をしたのかを最初の数文で確定させる',
    order: 904,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '物語文はまず「登場人物」を丸で囲む。名前が出るたびに丸をつけ、何人いるかを確定する。',
      '次に「いつ（時）」と「どこで（場所）」を四角で囲む。物語は時と場所が変わるところで場面が切りかわる。',
      '登場人物の関係（家族・友だち・先生と生徒）を最初の段落でつかむ。my sister／my friend Aya など。',
      '会話（引用符で囲まれた部分）はだれのせりふかを必ず確かめる。said の主語がその話し手。',
      '説明文と違い、物語文には主題文がない。出来事の流れそのものが内容になる。',
    ],
    sections: [
      {
        heading: '最初の3文で場面を確定する',
        body: `物語文は、最初の2〜3文に「だれが・いつ・どこで」がまとめて書かれていることが多い。ここを読み落とすと、あとの内容が全部あいまいになる。

例）Last summer, Aya visited her grandmother in a small village in Akita. She stayed there for two weeks.
・だれ：Aya（と grandmother）
・いつ：Last summer（去年の夏）、2週間
・どこ：秋田の小さな村

■ 印のつけ方
・人名 → ○で囲む
・時を表す語（Last summer／One morning／The next day／At last）→ 四角で囲む
・場所を表す語（in the village／at the station／in front of the school）→ 下線

■ 登場人物の関係をつかむ表現
・my sister Yuki（姉のユキ）※名前の前に関係が書かれる
・her friend, Ken（彼女の友だちのケン）
・a boy named Taro（タロウという名前の少年）
・Mr. Sato, our English teacher（英語の先生の佐藤先生）

★ ポイント：日本語の物語文と違い、英語の物語文では主語がはっきり書かれる。だれが何をしたかは必ず文の先頭にある。主語を追うだけで話の流れが追える。

⚠ 注意：物語文では「主題文をさがす」読み方は使えない。かわりに「出来事を順に並べる」読み方をする。説明文と物語文で読み方を切りかえること。`,
      },
      {
        heading: 'せりふのだれが話しているか',
        body: `物語文では会話が多く出てくる。だれのせりふかを取りちがえると、内容一致問題を落とす。

例）
"Where are you going?" asked Ken.
"I'm going to the library," Mika answered.
"Can I come with you?" he said.
"Of course," she said with a smile.

■ 話し手の見つけ方
・せりふの直後に asked Ken／Mika answered のように書かれている。
・he said／she said と代名詞で書かれているときは、直前に出た人物を確かめる。
・せりふが2つ続いているときは、話し手が交互に入れかわるのがふつう。

■ 会話に使われる動詞
said（言った）／asked（たずねた）／answered（答えた）／replied（返事をした）／
shouted（さけんだ）／whispered（ささやいた）／cried（泣いた・さけんだ）
※ shouted・whispered などは、その人の気持ちを表す手がかりになる。

★ ポイント：会話文の順番を追うときは、せりふの横に「ケ」「ミ」のように話し手の頭文字を書きこむとよい。あとで読み返すときに一目でわかる。

⚠ 注意：英語では「〜と言った」の部分がせりふの前に来ることも後ろに来ることもある。Ken said, "Let's go." と "Let's go," said Ken. はどちらも正しく、意味は同じである。said Ken のように動詞が主語より前に来ても、主語は Ken である。`,
      },
    ],
    trapExamples: [
      {
        question:
          '"Can I come with you?" he said. の he はだれか。上の会話文から答えなさい。',
        wrongAnswer: 'Mika',
        trapExplanation:
          '直前の文が "I\'m going to the library," Mika answered. なので、いちばん近い名前である Mika を選んでしまう。しかし he は男性を指す代名詞なので、女性である Mika は候補にならない。',
        correctAnswer: 'Ken',
        correctExplanation:
          'この会話に出てくるのは Ken（男性）と Mika（女性）の2人だけ。he は男性なので Ken である。会話文では話し手が交互に入れかわるという原則からも確かめられる（Ken → Mika → Ken → Mika）。代名詞の性別と、会話の交互のリズムの2つで判断する。',
      },
      {
        question: '"Let\'s go," said Ken. の主語（だれが言ったのか）を答えなさい。',
        wrongAnswer: 'said が主語（または主語がない）',
        trapExplanation:
          '英語の文は「主語＋動詞」の順という原則にとらわれ、said が先に来ているこの形を特別な文だと思って混乱してしまう。',
        correctAnswer: 'Ken',
        correctExplanation:
          'せりふの後ろに置く said Ken は、Ken said の語順を入れかえた形で、物語文でよく使われる。意味は Ken said, "Let\'s go." とまったく同じである。代名詞の場合は入れかえず said he ではなく he said とするのがふつう。この語順の入れかえは物語文の読解でしか出てこないので、形として覚えておく。',
      },
    ],
  },

  {
    id: 'eigo_s405',
    subject: 'eigo',
    examType: 'chugaku',
    title: '物語文②：出来事の流れとつながり',
    description: '起こったことを順に追い、ある出来事が次の出来事を引き起こす関係をつかむ',
    order: 905,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '物語文は「出来事①→②→③」の連なりでできている。動詞（過去形）を追えば流れがわかる。',
      '出来事のつながりには「そのあと」だけでなく「だから」の関係がある。',
      'suddenly（突然）／at that time（そのとき）／just then（ちょうどそのとき）は場面が動く合図。',
      '物語文の設問「なぜ〜したのか」は、その出来事の直前の文に答えがある。',
      '最後の1〜2文には、主人公が得た気づきが書かれることが多い。',
    ],
    sections: [
      {
        heading: '過去形の動詞を拾う',
        body: `物語文は過去の出来事を述べる文章なので、動詞はほとんどが過去形である。過去形の動詞だけを順に拾えば、あらすじがそのまま出てくる。

例）
One Saturday morning, Taro went to the park with his dog. He threw a ball, and the dog ran after it. Suddenly, the dog stopped and looked at a small tree. Taro walked to the tree and found a bird on the ground. The bird could not fly. Taro carried it home carefully and gave it some water. Three days later, the bird flew away from his window.

■ 動詞だけ拾う
went → threw → ran → stopped → looked → walked → found → carried → gave → flew away
これを日本語にすると
「行った→投げた→追いかけた→止まった→見た→歩いた→見つけた→運んだ→やった→飛び去った」
これだけであらすじが完成する。

■ 不規則動詞の過去形（物語文頻出）
go-went／come-came／see-saw／find-found／run-ran／take-took／give-gave／
fly-flew／throw-threw／catch-caught／bring-brought／think-thought／feel-felt

★ ポイント：過去形がわからない動詞があると、その出来事だけ飛んでしまう。不規則動詞は「原形・過去形・過去分詞」の3つをセットで覚えること。

⚠ 注意：could not fly のように助動詞が入ると、動詞は原形に戻る（× could not flew）。過去の内容でも、助動詞の後ろは必ず原形である。`,
      },
      {
        heading: '出来事のつながり方',
        body: `出来事は「そのあと」だけでなく「だから」でつながっていることがある。この違いが理由を問う設問で効いてくる。

■ ただの順序（そのあと）
He finished his homework. Then he watched TV.
→ 宿題を終えたから見たわけではない。順に起こっただけ。

■ 因果（だから）
The dog stopped and looked at a small tree. So Taro walked to the tree.
→ 犬が止まったから、タロウが木のところへ行った。

■ 場面が動く合図の語
・Suddenly,（突然）／All of a sudden,（突然）
・Just then,（ちょうどそのとき）／At that moment,（その瞬間）
・After a while,（しばらくして）／A few minutes later,（数分後）
・Finally,（ついに）／At last,（ようやく）

これらの語のあとには、必ず物語が動く出来事が来る。設問はここから作られることが多いので、印をつける。

■ 物語の最後に注目する
物語文の最後の1〜2文には、主人公の気づきや変化が書かれる。
例）Since that day, Taro has looked at small living things more carefully.
（あの日以来、タロウは小さな生き物をより注意深く見るようになった）
このような文が「この物語から筆者が伝えたいこと」を問う設問の答えになる。

★ ポイント：Since that day（あの日以来）／From that time on（そのときから）は、物語の締めくくりの決まり文句。見つけたら必ず線を引く。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の物語について、Why did Taro walk to the tree? に答えなさい。',
        wrongAnswer: 'Because he found a bird on the ground.（地面に鳥を見つけたから）',
        trapExplanation:
          '木のところへ行った直後の内容（鳥を見つけた）を理由にしてしまう。しかし鳥を見つけたのは木のところへ行った「結果」であって、行く前の理由ではない。理由は必ずその出来事より前にある。',
        correctAnswer:
          'Because his dog stopped and looked at a small tree.（犬が立ち止まって小さな木を見ていたから）',
        correctExplanation:
          '理由を問われたら、その出来事が書かれた文より前を見る。ここでは Suddenly, the dog stopped and looked at a small tree. が直前の文で、これが原因である。「なぜ」の答えは前、「どうなった」の答えは後ろ、と向きを決めておくと迷わない。',
      },
      {
        question: 'The bird could not ( fly / flew ). 正しいほうを選びなさい。',
        wrongAnswer: 'flew',
        trapExplanation:
          '物語全体が過去の話なので、動詞もすべて過去形にすべきだと考えて flew を選んでしまう。時制をそろえようとする気持ちが、かえってまちがいを生む。',
        correctAnswer: 'fly',
        correctExplanation:
          'could はそれ自体が can の過去形なので、過去を表す仕事はもう終わっている。助動詞（can／could／will／would／must／should）の後ろは、いつでも動詞の原形である。同じように He could not come. ／ She would not answer. のように、後ろは原形になる。',
      },
    ],
  },

  {
    id: 'eigo_s406',
    subject: 'eigo',
    examType: 'chugaku',
    title: '物語文③：時系列を並べ直す',
    description: '書かれている順と起こった順がちがう文章を、時を表す語で整理する',
    order: 906,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '英語の物語文は、今の場面から始めて過去にさかのぼることがある（回想）。',
      '時を表す語（now／three years ago／last spring／this spring／later）を全部ぬき出して並べ直す。',
      'ago は「今から〜前」、before は「そのときより前」。基準がちがう。',
      '「出来事を起こった順に並べかえなさい」という設問は、時を表す語だけで解ける。',
      '過去のさらに前を表すときは had ＋過去分詞（過去完了）を使うことがある。',
    ],
    sections: [
      {
        heading: '書かれた順と起こった順',
        body: `物語文の設問でよく出るのが「次の出来事を起こった順に並べかえなさい」である。これは、英語の物語が必ずしも時間の順に書かれていないためである。

次の英文を読む。

Ken is the captain of the soccer team now. He was not always a good player. His family moved to this town three years ago, and he did not know anyone here. Last spring, he joined the soccer team because his classmate asked him to. In the summer, the team played in a big game, and Ken scored his first goal. However, he broke his leg last winter and could not play for three months. He came back to the team this spring. His teammates chose him as their captain because he never gave up.

■ 書かれている順
今キャプテン → 3年前に引っこし → 去年の春に入部 → その夏に初ゴール → 去年の冬にけが → 今年の春に復帰

■ 起こった順に並べ直す
①three years ago：この町に引っこしてきた
②last spring：サッカー部に入った
③in the summer：初めてゴールを決めた
④last winter：脚を折って3か月プレーできなかった
⑤this spring：チームに復帰した
⑥now：キャプテンになっている

★ ポイント：時を表す語だけを○で囲み、その順に番号をふる。本文を読み返さなくても並べかえ問題が解ける。

⚠ 注意：1文目の now（今）が、時間の上ではいちばん最後である。冒頭の文が最初の出来事とはかぎらない。`,
        figureId: 'lf_eigoext11_406',
      },
      {
        heading: '時を表す語のまとめ',
        body: `時系列を整理するために、時を表す語を正確に覚えておく。

■ 過去を表す語
・three years ago（3年前）／a week ago（1週間前）※ ago は「今から〜前」
・last spring／last winter／last night（この前の〜）
・yesterday（きのう）／the day before yesterday（おととい）
・when I was a child（子どものころ）
・in 2020（2020年に）

■ 現在・これから
・now（今）／these days（このごろ）／today（きょう）
・this spring（今年の春）／next week（来週）／tomorrow（あす）

■ 順序を表す語
・then（それから）／after that（そのあと）／later（あとで）
・soon（まもなく）／at last（ついに）／finally（最後に）
・a few days later（数日後）／three days later（3日後）

■ ago と before のちがい
・ago … 今を基準にして「今から〜前」。過去形と使う。
　I met him three days ago.（3日前に会った）
・before … 過去のあるときを基準にして「そのときより前」。
　When I arrived, he had left an hour before.（着いたとき、彼はその1時間前に出ていた）

★ ポイント：ago は必ず「数＋期間＋ago」の形で使い、文の最後に置く。× ago three days。

⚠ 注意：過去のさらに前の出来事は had ＋過去分詞（過去完了）で表す。難関校では出るので、had left＝「（そのときより前に）出てしまっていた」と読めるようにしておく。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、次の出来事のうち、いちばん先に起こったものはどれか。（ア）Ken がサッカー部に入った（イ）Ken の家族がこの町に引っこしてきた',
        wrongAnswer: '（ア）Ken がサッカー部に入った',
        trapExplanation:
          '本文で先に読んだ内容が先に起こったと思いこんでしまう。しかし引っこしは three years ago、入部は last spring なので、時間の上では引っこしのほうが先である。',
        correctAnswer: '（イ）Ken の家族がこの町に引っこしてきた',
        correctExplanation:
          '時を表す語で比べる。three years ago（3年前）と last spring（この前の春＝1年以内）なら、3年前のほうが古い。並べかえ問題では、本文の順ではなく ago・last・this・now の順に並べ直すこと。',
      },
      {
        question: '「私は3日前に彼に会いました」を英語にしなさい。',
        wrongAnswer: 'I meet him before three days.',
        trapExplanation:
          '「〜前」を before と覚えていること、また日本語の「3日前に彼に会いました」の語順をそのまま移すことから、before three days としてしまう。動詞を過去形にしていない点も誤り。',
        correctAnswer: 'I met him three days ago.',
        correctExplanation:
          '「今から〜前」は ago を使い、「数＋期間＋ago」の順で文の最後に置く。また ago は必ず過去形の動詞と使うので meet ではなく met。before は「そのときより前」を表す語で、three days before は「（過去のある時点の）3日前」という意味になり、この文には合わない。',
      },
    ],
  },

  {
    id: 'eigo_s407',
    subject: 'eigo',
    examType: 'chugaku',
    title: '物語文④：気持ちの変化と、その理由',
    description: '主人公の気持ちがどこで動いたかと、動かしたきっかけを結びつける',
    order: 907,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '物語文の設問の中心は「気持ち」と「その理由」の2つ。',
      '気持ちを表す語（glad／sad／worried／surprised／nervous／proud）を全部○で囲む。',
      '気持ちは直接書かれないこともある。行動（cried／smiled／could not sleep）から読み取る。',
      '気持ちが変わった直前の出来事が、変化のきっかけ（設問の答え）である。',
      '物語の最後には、いちばん大きな気持ちの動きが置かれることが多い。',
    ],
    sections: [
      {
        heading: '気持ちを表す語を覚える',
        body: `気持ちを問う設問に答えるには、まず気持ちを表す英語を知っていなければならない。

■ よい気持ち
glad／happy（うれしい）／excited（わくわくした）／proud（誇らしい）／
relieved（ほっとした）／satisfied（満足した）／thankful（感謝している）

■ よくない気持ち
sad（悲しい）／worried（心配な）／nervous（緊張した）／afraid／scared（こわい）／
disappointed（がっかりした）／angry（怒った）／lonely（さびしい）／shy（はずかしい）

■ どちらともいえない
surprised（おどろいた）／confused（こんがらがった）／curious（知りたがっている）

■ 気持ちを表す形の注意
・be surprised at 〜（〜におどろく）※ 前置詞とセット
・be interested in 〜（〜に興味がある）
・be worried about 〜（〜を心配している）
・feel ＋形容詞（I felt sad.）
・look ＋形容詞（He looked happy.＝うれしそうに見えた）

★ ポイント：-ed の形（surprised／excited／interested）は「人がその気持ちになる」、-ing の形（surprising／exciting／interesting）は「物事がその気持ちにさせる」。The news was surprising. ／ I was surprised. と区別する。

⚠ 注意：日本語の「〜させられた」に引きずられて I was excited. を「私は興奮させられた」と訳す必要はない。「私はわくわくした」でよい。`,
      },
      {
        heading: '気持ちの上がり下がりを追う',
        body: `次の物語を読み、主人公の気持ちがどこで動いたかを確かめる。

Last month, our class had a chorus contest. I was chosen as the pianist, and at first I was very happy. But the music was harder than I expected. Two weeks before the contest, I made many mistakes, and some of my classmates looked worried. I began to think that I could not do it. One day after school, my friend Aya stayed with me and sang while I played. We practiced together every day. On the day of the contest, my hands were shaking, but I played the whole piece without stopping. Our class did not win, but everyone smiled at me and said, "Thank you." I have never been so glad.

■ 気持ちの流れ
①I was very happy（ピアノ係に選ばれてうれしい）
②some of my classmates looked worried／I began to think that I could not do it（不安・自信をなくす）
③my friend Aya stayed with me（きっかけ）→ We practiced together every day（前向きに）
④my hands were shaking（緊張）→ I played the whole piece without stopping（やりとげた）
⑤I have never been so glad.（これまでで最高にうれしい）

■ 気持ちが直接書かれていない部分
・my hands were shaking（手がふるえていた）→ 緊張していた
・everyone smiled at me（みんながほほえんだ）→ 認めてもらえた
行動や体の様子から気持ちを読み取る問題は、上位校でよく出る。

★ ポイント：気持ちが変わった直前の文を見る。②から③に変わるきっかけは「友だちのアヤが残って、自分の伴奏で歌ってくれたこと」である。

⚠ 注意：最後の I have never been so glad. は現在完了で「今までに一度もこんなにうれしかったことはない」＝「今がいちばんうれしい」という意味。never を見て「うれしくない」と読まないこと。`,
        figureId: 'lf_eigoext11_407',
      },
    ],
    trapExamples: [
      {
        question:
          '上の物語について、筆者の気持ちが前向きに変わったきっかけは何か。',
        wrongAnswer: '合唱コンクールで自分のクラスが優勝したこと。',
        trapExplanation:
          '「気持ちが上向く＝よい結果が出た」と思いこんでしまう。しかし本文には Our class did not win（優勝しなかった）とはっきり書かれている。読まずに想像で答えた典型例。',
        correctAnswer: '友だちのアヤが放課後に残って、自分の伴奏に合わせて歌ってくれたこと。',
        correctExplanation:
          '気持ちが変わった直前の文を見る。I began to think that I could not do it.（もうむりだと思い始めた）の次に One day after school, my friend Aya stayed with me and sang while I played. が来て、そのあと We practiced together every day. と前向きな行動に変わっている。気持ちの変化のきっかけは、変化の直前の出来事である。',
      },
      {
        question:
          '上の物語の最後の I have never been so glad. の意味として正しいのはどちらか。（ア）まったくうれしくなかった（イ）これまででいちばんうれしかった',
        wrongAnswer: '（ア）まったくうれしくなかった',
        trapExplanation:
          'never（一度も〜ない）という否定の語だけを見て、文全体を「うれしくない」と読んでしまう。優勝しなかったという内容も、この誤読を後押しする。',
        correctAnswer: '（イ）これまででいちばんうれしかった',
        correctExplanation:
          'have never been so 〜 は「これまで一度もこんなに〜だったことはない」という意味で、結果として「今がいちばん〜だ」という最上級の内容になる。同じ型に I have never seen such a beautiful sunset.（あんなに美しい夕日は見たことがない＝これまででいちばん美しい）がある。never＋so／such は最上級の言いかえだと覚えること。',
      },
    ],
  },

  // ───────────────── 7. 説明文の読解（s408〜s411） ─────────────────
  {
    id: 'eigo_s408',
    subject: 'eigo',
    examType: 'chugaku',
    title: '説明文①：事実と意見を区別する',
    description: '確かめられる事実と、書き手の考えである意見を読み分ける',
    order: 908,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '事実（fact）＝だれが調べても同じ結果になること。数字・年号・出来事。',
      '意見（opinion）＝書き手の考え。I think／should／must／best／important などが目印。',
      'should／must／had better は「〜すべきだ」という意見の合図。',
      '内容一致問題では、本文の事実と選択肢の意見をすりかえた選択肢が出る。',
      '筆者の主張を問われたら意見の文を、本文の内容を問われたら事実の文をさがす。',
    ],
    sections: [
      {
        heading: '事実と意見の見分け方',
        body: `説明文には、事実（fact）と意見（opinion）の2種類の文が混ざっている。設問はこの区別を前提に作られているので、読みながら分けておく必要がある。

■ 事実の文（確かめられる）
・Japan has about 6,800 islands.（日本にはおよそ6,800の島がある）
・The Tokyo Skytree is 634 meters tall.（東京スカイツリーは634メートルだ）
・About 30 percent of the students walk to school.

目印：数字／年号／固有名詞／調査結果（According to 〜）／過去の出来事

■ 意見の文（人によって変わる）
・I think that we should use fewer plastic bags.
・Reading books is the best way to learn new words.
・It is important to talk with old people.

目印：I think／I believe／In my opinion／should／must／had better／
　　　best／important／wonderful／difficult などの評価する語

■ 見分ける質問
「これはだれが調べても同じ結果になるか？」
YES → 事実　NO → 意見

★ ポイント：数字が入っていても意見のことがある。Three hours of study a day is enough.（1日3時間の勉強で十分だ）は「十分」という評価が入っているので意見である。

⚠ 注意：It is said that 〜（〜と言われている）は、事実とも意見ともつかない表現。「そう言われているだけで、確かめられてはいない」というニュアンスなので、事実として断定しないこと。`,
      },
      {
        heading: '実際の英文で分ける',
        body: `次の英文を、事実の文と意見の文に分ける。

Japan is one of the countries that use a lot of paper. According to one report, each person in Japan uses about 200 kilograms of paper in a year. This is more than the average in the world. Making paper needs many trees and a lot of water. Of course, paper is useful, and we cannot live without it. However, I think we can use less paper if we try. For example, we should print on both sides of the paper at school. Small changes like this are important, and every student can start today.

■ 事実の文
・Japan is one of the countries that use a lot of paper.
・According to one report, each person in Japan uses about 200 kilograms of paper in a year.
・This is more than the average in the world.
・Making paper needs many trees and a lot of water.

■ 意見の文
・I think we can use less paper if we try.（I think）
・we should print on both sides of the paper at school.（should）
・Small changes like this are important（important）

★ ポイント：この文章の主張は「意見の文」のほうにある。事実の部分は、その主張を納得させるための土台である。

⚠ 注意：Of course, paper is useful, and we cannot live without it. は、いったん相手の言い分を認める文（ゆずり）である。この文だけを取り出して「筆者は紙をどんどん使うべきだと考えている」とするのは誤り。次の However を必ず見ること。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、筆者の意見として最も適切なものを選びなさい。（ア）日本人1人あたり年間約200キログラムの紙を使う（イ）努力すれば紙の使用量を減らせる',
        wrongAnswer: '（ア）日本人1人あたり年間約200キログラムの紙を使う',
        trapExplanation:
          '具体的な数字が入っていて重要そうに見えるうえ、本文にそのまま書かれているので正しいと感じてしまう。しかし「筆者の意見は何か」と問われているので、事実の文は答えにならない。',
        correctAnswer: '（イ）努力すれば紙の使用量を減らせる',
        correctExplanation:
          '（ア）は According to one report で始まる調査結果、つまり事実である。（イ）は I think we can use less paper if we try. に対応する意見の文である。設問が「意見」を問うているのか「本文の内容」を問うているのかを読み分け、I think／should／important などの語のある文をさがす。',
      },
      {
        question:
          'Of course, paper is useful, and we cannot live without it. の役割として正しいのはどちらか。（ア）筆者の結論（イ）反対の立場をいったん認める部分',
        wrongAnswer: '（ア）筆者の結論',
        trapExplanation:
          'Of course（もちろん）という強い語が付いているため、筆者がいちばん言いたいことのように見えてしまう。しかしこの語は「たしかにそのとおりだが」と前置きするための語である。',
        correctAnswer: '（イ）反対の立場をいったん認める部分',
        correctExplanation:
          'Of course／It is true that 〜／Certainly のあとには、必ず However／But／Still が続き、そのあとに筆者の本当の主張が来る。この文章でも次の文が However, I think we can use less paper … となっている。Of course を見たら「この次に But が来る」と予測して読むこと。',
      },
    ],
  },

  {
    id: 'eigo_s409',
    subject: 'eigo',
    examType: 'chugaku',
    title: '説明文②：比較・対比の読み取り',
    description: '2つのものを比べる文章の型と、比較の英語表現を正確に読む',
    order: 909,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '対比の合図：On the other hand（一方で）／while（〜する一方）／in contrast（対照的に）／unlike（〜と違って）。',
      '比較級（-er／more）＋than、最上級（the -est／the most）を正確に読み取る。',
      '比べているものが「何と何か」を必ず確かめる。than の後ろが比べる相手。',
      'A is twice as large as B（AはBの2倍の広さ）など、倍数表現も出る。',
      '対比の文章は表にして整理する。左右2列に分けて書き出すと取りちがえない。',
    ],
    sections: [
      {
        heading: '比較の英語を正確に読む',
        body: `説明文では、2つのものを比べる文がよく出る。比較表現を読みちがえると、内容が正反対になる。

■ 比較級（2つを比べる）
・Tom is taller than Ken.（トムはケンより背が高い）
・This book is more interesting than that one.
※ than の後ろが「比べる相手」。

■ 最上級（3つ以上の中でいちばん）
・Tom is the tallest in his class.（クラスでいちばん背が高い）
・This is the most beautiful park in the city.
※ in ＋場所や集団、of ＋複数（of the three）。

■ 同じくらい
・Tom is as tall as Ken.（トムはケンと同じくらい背が高い）
・Tom is not as tall as Ken.（トムはケンほど背が高くない＝ケンのほうが高い）
※ not as 〜 as は「〜ほどではない」。ここを取りちがえると意味が逆になる。

■ 倍数
・A is twice as large as B.（AはBの2倍の広さだ）
・A is three times as long as B.（AはBの3倍の長さだ）

■ 少ない・小さい
・less than 〜（〜より少ない）／fewer than 〜（数が〜より少ない）
・the least（いちばん少ない）／the fewest（数がいちばん少ない）

★ ポイント：than や as の後ろに注目する。「だれと比べているか」を確定してから、どちらが上かを判断する。

⚠ 注意：not as tall as は「同じくらい高くない」ではなく「〜ほど高くない」。つまり後ろのほうが高い。日本語に直すときに主語と比較相手が入れかわりやすいので、必ず「どちらが上か」を口に出して確かめる。`,
      },
      {
        heading: '対比の文章を2列に整理する',
        body: `次の英文を読む。動物の睡眠時間を比べた説明文である。

How long do animals sleep? Humans sleep about eight hours a day, but some animals sleep much longer. Koalas sleep about twenty hours. They eat only the leaves of one kind of tree, and those leaves do not give them much energy. Therefore, they must rest for a long time. Cats also sleep well; they sleep for about thirteen hours. On the other hand, large animals sleep less. Elephants sleep for only about four hours, and giraffes sleep for about two hours. Big animals need a lot of food, so they must spend many hours eating. Sleeping is also dangerous for animals that other animals hunt.

■ 2列に整理する
【長く眠る】koala 20時間／cat 13時間
　理由：ユーカリの葉はエネルギーが少ないので休む必要がある
【あまり眠らない】elephant 4時間／giraffe 2時間
　理由①：体が大きく大量の食物が必要なので、食べる時間が長い
　理由②：ねらわれる動物にとって眠ることは危険

境目にあるのが On the other hand（一方で）である。

★ ポイント：対比の文章は必ず「合図の語」で2つに分かれる。その語の位置に大きく線を引き、左右（前後）を別々にまとめる。

⚠ 注意：human（8時間）は基準として先に出されているだけで、どちらのグループでもない。基準になるものと、比べられるものを混同しないこと。`,
        figureId: 'lf_eigoext11_409',
      },
    ],
    trapExamples: [
      {
        question: 'Ken is not as tall as Tom. の意味として正しいのはどちらか。（ア）ケンのほうが背が高い（イ）トムのほうが背が高い',
        wrongAnswer: '（ア）ケンのほうが背が高い',
        trapExplanation:
          '文頭の Ken が主語なので「ケンのほうが上」と感じてしまう。また as 〜 as を「同じくらい」と覚えているため、not が付いても「だいたい同じ」と読んでしまう。',
        correctAnswer: '（イ）トムのほうが背が高い',
        correctExplanation:
          'not as 〜 as … は「…ほど〜ではない」という意味なので、Ken is not as tall as Tom. は「ケンはトムほど背が高くない」＝トムのほうが高い。同じ内容を Tom is taller than Ken. とも書ける。比較の文は必ず「どちらが上か」を日本語で言い直して確かめること。',
      },
      {
        question:
          '上の英文について、Why do koalas sleep for a long time? に答えなさい。',
        wrongAnswer: 'Because they are large animals.（大きな動物だから）',
        trapExplanation:
          '本文に large animals についての説明があるため、そこから理由を引いてきてしまう。しかし large animals の段は On the other hand のあとにあり、コアラとは反対のグループの話である。',
        correctAnswer:
          'Because they eat only the leaves of one kind of tree, and those leaves do not give them much energy.（1種類の木の葉しか食べず、その葉ではエネルギーが多く得られないから）',
        correctExplanation:
          'コアラの理由は、コアラについて述べている部分（On the other hand より前）に書かれている。Therefore, they must rest for a long time. の直前の文がその理由である。対比の文章では、合図の語をはさんだ左右のどちらの情報かを必ず確かめてから答えを取ること。',
      },
    ],
  },

  {
    id: 'eigo_s410',
    subject: 'eigo',
    examType: 'chugaku',
    title: '説明文③：列挙・分類・定義を読む',
    description: '「〜には3種類ある」「〜とは…である」という説明の型をつかむ',
    order: 910,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '定義の型：A is 〜／A is called B／A means 〜／A is a kind of 〜。知らない語の意味はここでわかる。',
      '分類の型：There are three kinds of 〜／One is …, another is …, the other is …。',
      'one／another／the other の使い分け：2つなら one と the other、3つ以上なら one／another／the others。',
      '列挙されたものの数を数えて、設問で問われたら全部書けるようにする。',
      '分類の説明文では、それぞれの特徴を1語ずつメモしておく。',
    ],
    sections: [
      {
        heading: '定義と分類の決まった型',
        body: `説明文には「これは何か」を述べる部分（定義）と「何種類あるか」を述べる部分（分類）がある。どちらも決まった型で書かれる。

■ 定義の型
・A is 〜.（Aは〜である）
・A is called B.（AはBと呼ばれる）→ B の説明が A に書かれている
・A means 〜.（Aは〜を意味する）
・A, or B（AつまりB）※ この or は「または」ではなく「言いかえ」
・A is a kind of 〜.（Aは〜の一種だ）

例）A tsunami is a very large wave caused by an earthquake.
　（津波とは、地震によって引き起こされるとても大きな波である）

■ 分類の型
・There are three kinds of 〜.（〜には3種類ある）
・〜 can be divided into two groups.（〜は2つのグループに分けられる）
・One is …, another is …, and the other is …

■ one／another／the other の使い分け
【2つのとき】one … the other …
　I have two dogs. One is white, and the other is black.
【3つのとき】one … another … the other …
【たくさんあるとき】some … others …

★ ポイント：the other が出たら「残りは1つだけ」という意味である。the others なら「残り全部」。the が付くかどうかで意味が変わる。

⚠ 注意：A, or B の or は「言いかえ」で使われることがある。The largest animal, or the blue whale, lives in the sea. は「最大の動物、つまりシロナガスクジラ」という意味で、2つのものを並べているのではない。`,
      },
      {
        heading: '分類の説明文を整理する',
        body: `次の英文を読み、分類を整理する。

Clouds can be divided into three groups by their height. The first group is the high clouds. They are found more than 6,000 meters above the ground, and they are made of very small pieces of ice. The second group is the middle clouds. They are found between 2,000 and 6,000 meters, and they often cover the whole sky. The last group is the low clouds. They are found below 2,000 meters, and they sometimes bring rain or snow. If you know these three groups, you can guess tomorrow's weather by looking at the sky.

■ 整理する
①high clouds：6,000mより上／とても小さな氷のつぶでできている
②middle clouds：2,000m〜6,000m／空全体をおおうことが多い
③low clouds：2,000mより下／雨や雪をもたらすことがある

型：Clouds can be divided into three groups.（分類の予告）
　→ The first group is 〜／The second group is 〜／The last group is 〜

■ 数字に注意
more than 6,000 meters（6,000mより上）
between 2,000 and 6,000 meters（2,000mから6,000mの間）
below 2,000 meters（2,000mより下）

★ ポイント：more than／less than／between A and B／over／under は、範囲を表す語である。設問では「何メートル以上か」がそのまま問われる。

⚠ 注意：日本語の「〜以上」は、その数をふくむ。英語の more than 6,000 は 6,000 をふくまない（6,000より多い）。細かい違いだが、算数と組み合わせた問題では差が出る。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、雲は何によって3つのグループに分けられるか。',
        wrongAnswer: '雲の形によって',
        trapExplanation:
          '「雲を分類する」と聞くと形（積乱雲・巻雲など）で分けるものだと知識で判断してしまい、本文を読まずに答えてしまう。本文には形についての記述はない。',
        correctAnswer: '高さ（by their height）によって',
        correctExplanation:
          '1文目に Clouds can be divided into three groups by their height. とはっきり書かれている。by 〜 は「〜によって・〜を基準にして」という意味で、分類の基準を示す。分類の説明文では、1文目に「何を基準に分けるか」が必ず書かれているので、そこに線を引く。自分の知識で答えないこと。',
      },
      {
        question:
          'I have two cats. One is white, and ( another / the other ) is black. 正しいほうを選びなさい。',
        wrongAnswer: 'another',
        trapExplanation:
          '「もう1匹」という日本語から another（もう1つの）を選んでしまう。しかし another は「たくさんある中のもう1つ」で、残りが1つに決まっているときには使えない。',
        correctAnswer: 'the other',
        correctExplanation:
          '2つのうち1つを one と言ったら、残りは1つに決まる。決まっているものには the を付けるので the other になる。3つ以上あって残りがまだ複数あるときは another、残り全部をまとめて言うときは the others を使う。「残りが1つに決まっているか」で判断する。',
      },
    ],
  },

  {
    id: 'eigo_s411',
    subject: 'eigo',
    examType: 'chugaku',
    title: '説明文④：筆者の主張と結論を取り出す',
    description: '文章全体の結論がどこにあるかを見つけ、主張を一文でまとめる',
    order: 911,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '結論は最終段落にある。とくに最後の2〜3文に注意する。',
      '結論の合図：In conclusion／In short／So／Therefore／This is why／We should。',
      '「問題提起 → 現状 → 原因 → 提案」という型が最も多い。提案の部分が主張。',
      'should／must／need to／It is important to 〜 が出たら、そこが筆者の言いたいこと。',
      '主張を一文でまとめる練習をしておくと、要旨・タイトル問題に強くなる。',
    ],
    sections: [
      {
        heading: '説明文の全体構造',
        body: `中学入試の説明文は、次の4段構成でできていることが多い。

①問題提起：Do you know 〜? ／ Have you ever thought about 〜?
②現状・事実：数字や調査結果を出す
③原因・理由：Why does this happen? ／ There are two reasons.
④提案・結論：We should 〜 ／ In conclusion, 〜

だから、設問「筆者の主張は何か」の答えはほぼ④にある。時間がないときは、最終段落だけ先に読んで主張をつかむという方法も使える。

■ 結論の合図になる語
・In conclusion,（結論として）
・In short,（要するに）
・So,／Therefore,（だから）
・This is why 〜（こういうわけで〜）
・We should 〜／We need to 〜／It is important to 〜（〜すべきだ）
・What can we do?（私たちに何ができるか）※ この問いのあとが提案

★ ポイント：What can we do? という問いかけが出てきたら、その後ろが提案（＝主張）である。設問「筆者は何をすべきだと言っているか」の答えはここから取る。

⚠ 注意：最終段落に具体例が置かれることもある。For example で始まる文は、たとえ最後にあっても主張ではない。`,
      },
      {
        heading: '主張を一文にまとめる',
        body: `次の英文を読み、主張を一文でまとめる。

Do you know how much water we use every day? One person in Japan uses about 220 liters of water a day. That is more than a hundred large plastic bottles. Most of it is used for baths, toilets, and washing. Clean water does not come from nowhere. It is carried through long pipes and cleaned at a water plant, and this uses a lot of energy. What can we do? First, we can turn off the water while we brush our teeth. Second, we can use the water from the bath to wash clothes. These are small actions, but if we keep doing them, we can save a lot of water and energy. Saving water is not only for us but also for the people who will live after us.

■ 構造
①問題提起：Do you know how much water we use every day?
②現状：1人1日約220リットル。おもに風呂・トイレ・洗濯
③理由：きれいな水は長い管で運ばれ浄水場で処理され、大量のエネルギーを使う
④提案：What can we do? → 歯みがき中に水を止める／風呂の水を洗濯に使う
⑤結論：小さな行動でも続ければ多くの水とエネルギーを節約できる。これは未来の人のためでもある

■ 一文でまとめる
「水をつくるには多くのエネルギーがかかるので、私たちは日常の小さな工夫で節水を続けるべきだ。」

★ ポイント：まとめの一文は「理由＋主張」の形にすると過不足がない。「〜なので、〜すべきだ」と書く。

⚠ 注意：最後の文の not only for us but also for the people who will live after us（私たちのためだけでなく、これから後に生きる人々のためでもある）は、主張に「未来の人のため」という広がりを与えている部分である。要旨をまとめるときは入れなくてもよいが、内容一致問題ではここが選択肢になりやすい。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、筆者の主張として最も適切なものを選びなさい。（ア）日本人1人が1日に使う水は約220リットルである（イ）日常の小さな工夫を続けて水とエネルギーを節約すべきだ',
        wrongAnswer: '（ア）日本人1人が1日に使う水は約220リットルである',
        trapExplanation:
          '数字が入っていて本文にそのまま書かれているので、正しい内容だと感じる。実際に内容としては正しいが、それは「現状を示す事実」であって「主張」ではない。設問が何を問うているかを読み落としている。',
        correctAnswer: '（イ）日常の小さな工夫を続けて水とエネルギーを節約すべきだ',
        correctExplanation:
          'What can we do? のあとに提案が並び、These are small actions, but if we keep doing them, we can save a lot of water and energy. で結論が述べられている。主張を問う設問では、should／can／What can we do? の後ろをさがす。事実として正しくても、主張でなければ答えにはならない。',
      },
      {
        question:
          '上の英文について、Where is most of the water used? に答えなさい。',
        wrongAnswer: 'At a water plant.（浄水場で）',
        trapExplanation:
          '本文に a water plant という語があるため、そこを答えにしてしまう。しかし浄水場は「水をきれいにする場所」であって、水が使われる場所ではない。設問の used（使われる）を読み落としている。',
        correctAnswer: 'For baths, toilets, and washing.（風呂・トイレ・洗濯に）',
        correctExplanation:
          'Most of it is used for baths, toilets, and washing. という文が本文にある。it は water を指す。設問の疑問詞（Where／What／Why）と、本文のどの文が対応しているかを、キーワード（most／used）で結びつけて確かめること。同じ語が出てくる場所を全部見比べるのが確実である。',
      },
    ],
  },

  // ───────────────── 8. 図表・グラフつき読解（s412〜s415） ─────────────────
  {
    id: 'eigo_s412',
    subject: 'eigo',
    examType: 'chugaku',
    title: '図表読解①：棒グラフつきの英文',
    description: '棒グラフの高さと英語の表現（the most popular／second）を対応させて読む',
    order: 912,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '図表つき読解では、英文を読む前にグラフの表題・たて軸・よこ軸・単位を確かめる。',
      '合計が問題文の人数と合うかを必ず検算する。合えば読み取りは正しい。',
      'the most popular＝いちばん高い棒、came second＝2番目、the least popular／only＝いちばん低い棒。',
      '順位を表す表現：first／second／third／the last。数を表す表現：twice as many as（2倍）。',
      '設問はグラフと英文の両方を見ないと解けないように作られている。片方だけで答えない。',
    ],
    sections: [
      {
        heading: 'グラフを先に読む',
        body: `図表つき読解は、英文とグラフを行ったり来たりしながら解く。順番を決めておくと速い。

■ 手順
①グラフの表題を読む（何について調べたものか）
②たて軸・よこ軸が何を表すか、単位は何かを確かめる
③いちばん高い所・低い所に印をつける
④それから英文を読み、英語の表現とグラフを結びつける

■ グラフを説明する英語
・the most popular（いちばん人気がある）＝いちばん高い棒
・came second／was second（2番目だった）
・the least popular（いちばん人気がない）／only 〜（〜だけ）＝いちばん低い棒
・twice as many as 〜（〜の2倍）
・more than 〜（〜より多い）／less than 〜（〜より少ない）
・the same as 〜（〜と同じ）

■ 検算のしかた
たとえば「30人に聞いた」と書いてあるなら、棒の値を全部足して30になるかを確かめる。合わなければ読みちがえている。

★ ポイント：グラフの数値は英文に全部は書かれていない。英文にある数値だけを頼りにすると解けない設問がある。必ずグラフ自体からも読む。

⚠ 注意：たて軸が「人数」なのか「パーセント」なのかを最初に確かめる。人数だと思ってパーセントを足すと100を超えて混乱する。`,
      },
      {
        heading: '実際の図表つき英文',
        body: `右の棒グラフを見ながら、次の英文を読む。

Mr. Tanaka asked his 30 students, "What sport do you like the best?" Soccer was the most popular. Eleven students chose it. Baseball came second with seven students, and basketball was third with six. Four students liked swimming, and only two students chose tennis. Mr. Tanaka was surprised because tennis was the most popular sport in his class last year. He thinks the World Cup on TV last summer changed the students' minds. He is going to ask the same question again next year.

■ グラフと英文の対応
soccer 11 ← the most popular／Eleven students chose it
baseball 7 ← came second with seven students
basketball 6 ← was third with six
swimming 4 ← Four students liked swimming
tennis 2 ← only two students chose tennis

■ 検算
11＋7＋6＋4＋2＝30 → 質問した人数と一致する。読み取りは正しい。

■ 設問になりやすい所
・How many students chose baseball?（7人）
・Which sport was the least popular?（tennis）
・Why was Mr. Tanaka surprised?（去年はテニスがいちばん人気だったから）
・How many more students chose soccer than baseball?（11−7＝4人多い）

★ ポイント：How many more 〜 than …?（…より何人多いか）は引き算を求める設問。図表つき読解では計算を伴う設問が必ず1問は出る。

⚠ 注意：Mr. Tanaka がおどろいた理由は、グラフではなく英文にしか書かれていない。グラフだけ見て答えを出そうとすると必ず落とす。`,
        figureId: 'lf_eigoext11_412',
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文とグラフについて、How many students chose tennis? に答えなさい。',
        wrongAnswer: 'Eleven students.',
        trapExplanation:
          '本文の Eleven students chose it. の chose という語だけを目印にして答えを探し、it が soccer を指していることを確かめずに答えてしまう。設問の tennis と本文の it を結びつけてしまった誤り。',
        correctAnswer: 'Two students.',
        correctExplanation:
          'テニスについて述べているのは only two students chose tennis の部分である。グラフでも tennis の棒はいちばん低く、値は2になっている。同じ動詞（chose）が何度も使われるときは、その目的語が何かを必ず確かめること。グラフの値と照らし合わせれば確実である。',
      },
      {
        question:
          '上の英文とグラフについて、Which sport was the most popular in Mr. Tanaka’s class last year? に答えなさい。',
        wrongAnswer: 'Soccer.',
        trapExplanation:
          'グラフでいちばん高いのが soccer なので、そのまま答えてしまう。しかし設問には last year（去年）とある。グラフは今年の結果であって、去年の結果ではない。',
        correctAnswer: 'Tennis.',
        correctExplanation:
          '本文に Mr. Tanaka was surprised because tennis was the most popular sport in his class last year. と書かれている。図表つき読解では「グラフはいつのものか」を必ず確かめること。設問に last year／ten years ago などの語があれば、答えはグラフではなく英文の中にある。',
      },
    ],
  },

  {
    id: 'eigo_s413',
    subject: 'eigo',
    examType: 'chugaku',
    title: '図表読解②：折れ線グラフつきの英文',
    description: '増える・減る・いちばん高いを表す英語と、グラフの山や谷を対応させる',
    order: 913,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '増加：go up／rise／increase／grow。減少：go down／fall／drop／decrease。',
      '最高点：the highest／reach（〜に達する）。最低点：the lowest。',
      '変化のはげしさ：quickly／slowly／little by little（少しずつ）／suddenly（急に）。',
      '折れ線の山と谷には必ず理由が書かれている。because／so を目印にさがす。',
      'よこ軸が「月」なのか「年」なのかを確かめる。単位を読みちがえると全部ずれる。',
    ],
    sections: [
      {
        heading: '変化を表す英語',
        body: `折れ線グラフつきの読解では、増減を表す動詞を知っているかどうかで差がつく。

■ 増える
go up／rise（rose-risen）／increase／grow
例）The number went up from 120 to 150.（120から150に増えた）

■ 減る
go down／fall（fell-fallen）／drop／decrease
例）It fell to only 90.（わずか90まで減った）

■ 変わらない
stay the same／remain the same／do not change

■ 最高・最低
the highest（いちばん高い）／the lowest（いちばん低い）
reach 〜（〜に達する）：In July it reached 260.

■ 前置詞の使い分け（重要）
・from A to B（AからBへ）… go up from 120 to 150
・to 〜（〜まで）… fell to 90（90まで下がった）
・by 〜（〜だけ）… increased by 30（30だけ増えた）
※ to は「到達した値」、by は「変化した量」。ここを取りちがえると数値が合わなくなる。

★ ポイント：グラフの読解では、まず山（いちばん高い点）と谷（いちばん低い点）に印をつけ、その理由が書かれた文をさがす。設問はほぼそこから作られる。

⚠ 注意：increased to 150 と increased by 150 はまったく別。to なら結果が150、by なら150増えたので結果は「もとの数＋150」になる。`,
      },
      {
        heading: '実際の折れ線グラフつき英文',
        body: `次の英文を、グラフと見比べながら読む。

This graph shows the number of students who used our school library each month. In April, 120 students used it. The number went up little by little, and in July it reached 260. That was the highest number of the year. In August, however, it fell to only 90 because the summer vacation was long and few students came to school. In September, the number rose again to 180. Our librarian says that many students borrow books before tests. In fact, tests are held in July and in September.

■ グラフとの対応
4月 120 ← In April, 120 students used it
5月 150／6月 210 ← went up little by little
7月 260 ← it reached 260／the highest number
8月 90 ← fell to only 90
9月 180 ← rose again to 180

■ 山と谷の理由
山（7月260）：テストが7月にあるから多くの生徒が本を借りる
谷（8月90）：夏休みが長く、学校に来る生徒が少なかったから

■ 設問になりやすい所
・Which month had the highest number?（July）
・Why did the number fall in August?（夏休みで学校に来る生徒が少なかったから）
・How many more students used the library in July than in April?（260−120＝140人）

★ ポイント：few students（ほとんど生徒がいない）は否定の意味を持つ。a few students（何人かの生徒）とは意味がちがうので注意。

⚠ 注意：In fact,（実際に）は前の文を補強する語。tests are held in July and in September が、7月と9月に利用が多い理由を裏づけている。「9月に増えた理由」を問われたらこの文を使う。`,
        figureId: 'lf_eigoext11_413',
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文とグラフについて、Why did the number of students fall in August? に答えなさい。',
        wrongAnswer: 'Because tests were held in August.（8月にテストがあったから）',
        trapExplanation:
          '本文に tests are held in July and in September とあるのを読み飛ばし、「テスト＝図書館利用」という結びつきだけで8月にもテストがあったと考えてしまう。しかも「テストがあると増える」のだから、減った理由の説明にもなっていない。',
        correctAnswer:
          'Because the summer vacation was long and few students came to school.（夏休みが長く、学校に来る生徒がほとんどいなかったから）',
        correctExplanation:
          '8月について述べた文に because がそのまま書かれている。理由を問う設問では、まずその月・その出来事について述べた文をさがし、その中の because を見る。テストが行われるのは7月と9月であって8月ではない、という点も本文に明記されている。',
      },
      {
        question: 'The number increased ( to / by ) 30 and became 180. 正しいほうを選びなさい。',
        wrongAnswer: 'to',
        trapExplanation:
          '「30に増えた」という日本語をあてはめて to を選んでしまう。しかし後半に became 180 とあるので、結果は180であって30ではない。to と by の使い分けを知らないと矛盾に気づけない。',
        correctAnswer: 'by',
        correctExplanation:
          'by 〜 は「〜だけ（変化した量）」を表すので、increased by 30 は「30だけ増えた」＝もとが150で結果が180となり、became 180 と一致する。to 〜 は「〜まで（到達した値）」なので increased to 180 なら結果が180になる。グラフの読解ではこの2語の区別が計算の正誤を分ける。',
      },
    ],
  },

  {
    id: 'eigo_s414',
    subject: 'eigo',
    examType: 'chugaku',
    title: '図表読解③：円グラフと割合の表現',
    description: 'パーセントを人数に直す計算と、half／twice などの割合表現を読む',
    order: 914,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '円グラフの合計は必ず100パーセント。足して100にならなければ読みちがえている。',
      'percent を人数に直す：全体の人数×パーセント÷100。図表読解では必ず問われる。',
      'half（半分）／a quarter（4分の1）／one third（3分の1）／twice（2倍）を覚える。',
      'the largest group（いちばん大きい部分）／the smallest group（いちばん小さい部分）。',
      'A and B together make up 〜 percent（AとBを合わせて〜パーセント）という足し算の表現。',
    ],
    sections: [
      {
        heading: '割合を表す英語',
        body: `円グラフつきの読解では、割合の表現が読めることが前提になる。

■ 分数・割合
・half of 〜（〜の半分）：Half of the students walk to school.
・a quarter of 〜（〜の4分の1）
・one third of 〜（〜の3分の1）／two thirds of 〜（3分の2）
・three quarters of 〜（4分の3）
※ 分子が2以上のときは分母に s を付ける（two thirds）。

■ 倍数
・twice as many as 〜（〜の2倍の数）
・three times as many as 〜（〜の3倍の数）

■ パーセント
・Forty-five percent of the students walk.（45パーセントが歩く）
※ percent は複数でも s を付けない。
・about 〜（およそ）／almost 〜（ほぼ）／more than 〜（〜より多い）／less than 〜（〜より少ない）

■ 大きさの比較
・the largest group（いちばん大きい部分）／the smallest group
・A and B together make up 〜 percent（AとBを合わせて〜パーセント）

■ パーセントを人数に直す
全体200人で15パーセントなら 200×15÷100＝30人。
この計算は図表つき読解の定番なので、必ずできるようにしておく。

★ ポイント：円グラフの数値を全部足して100になるか確かめる。合わなければ「その他（others）」の部分を見落としている。

⚠ 注意：percent の前の数は英語のつづりで書かれることがある（forty-five percent）。数字の英語（thirteen と thirty、fifteen と fifty）を聞きまちがえ・読みまちがえないこと。`,
      },
      {
        heading: '実際の円グラフつき英文',
        body: `次の英文を、円グラフと見比べながら読む。

Our class asked 200 students, "How do you come to school?" The answers are shown in the graph. Forty-five percent of the students walk to school. This is the largest group. Thirty percent come by bicycle, and fifteen percent take a bus. Only ten percent come by train, and most of them live in other towns. Walking and riding a bicycle together make up seventy-five percent. Our teacher says this is good for our health. However, on rainy days, more students take a bus, so the buses in the morning become very crowded.

■ グラフとの対応
walk 45％（the largest group）／bicycle 30％／bus 15％／train 10％
合計 45＋30＋15＋10＝100 → 正しい

■ 人数に直す
全体200人なので
・walk：200×45÷100＝90人
・bicycle：200×30÷100＝60人
・bus：200×15÷100＝30人
・train：200×10÷100＝20人
合計 90＋60＋30＋20＝200人 → 検算が合う

■ 設問になりやすい所
・How many students come to school by train?（20人）
・What is the largest group?（walk）
・Why do more students take a bus on rainy days?（雨だと歩いたり自転車に乗ったりできないから）

★ ポイント：Walking and riding a bicycle together make up seventy-five percent. のような「合わせて〜」の文は、必ず自分で足し算して確かめる（45＋30＝75）。

⚠ 注意：most of them の them は train を使う10パーセントの生徒を指す。「生徒の大部分」ではなく「電車通学の生徒の大部分」である。この取りちがえは頻出。`,
        figureId: 'lf_eigoext11_414',
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文とグラフについて、How many students come to school by bus? に答えなさい。',
        wrongAnswer: 'Fifteen students.（15人）',
        trapExplanation:
          '本文の fifteen percent take a bus という数字をそのまま人数として答えてしまう。パーセントと人数を区別していないための誤りで、図表つき読解でいちばん多い失点である。',
        correctAnswer: 'Thirty students.（30人）',
        correctExplanation:
          '全体は200人なので、15パーセントは 200×15÷100＝30人である。設問が How many students（何人）と聞いているのか What percent（何パーセント）と聞いているのかを最初に確かめる。人数を聞かれたら必ず全体の人数を本文からさがして計算すること。',
      },
      {
        question:
          '上の英文の most of them live in other towns. の them は何を指すか。',
        wrongAnswer: 'the 200 students（200人の生徒全員）',
        trapExplanation:
          '文章全体が200人の調査についてなので、them も全員を指すと考えてしまう。しかしそれでは「生徒の大部分がほかの町に住んでいる」ことになり、45パーセントが歩いて通っているという内容と矛盾する。',
        correctAnswer: 'the students who come to school by train（電車で通学する10パーセントの生徒）',
        correctExplanation:
          'them は直前の Only ten percent come by train を受けている。入れかえると「電車通学の生徒の大部分はほかの町に住んでいる」となり、電車を使う理由の説明として自然である。代名詞は直前の部分を指すのが原則であり、入れかえて意味が通るかを確かめれば防げる。',
      },
    ],
  },

  {
    id: 'eigo_s415',
    subject: 'eigo',
    examType: 'chugaku',
    title: '図表読解④：時刻表・料金表を読む',
    description: '表つきの英文で、時間と料金の条件を整理して答えを出す',
    order: 915,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '時刻表の問題は、必ず時間軸を書いてから考える。頭の中だけで計算しない。',
      '「所要時間」をすべて足す（乗車時間＋歩く時間＋待ち時間）。',
      '料金表では「大人・子ども」「平日・週末」「団体割引」など条件の行を必ず確かめる。',
      'leave（出発する）／arrive（到着する）／take（時間がかかる）／It takes 〜 minutes to …。',
      '条件が2つ以上あるときは、条件を1つずつ○×で確かめて候補を消していく。',
    ],
    sections: [
      {
        heading: '時間の英語と計算',
        body: `時刻表つきの読解では、時間に関する英語を正確に読めることが必要である。

■ 出発・到着
・leave 〜（〜を出発する）：The train leaves at 9:30.
・leave for 〜（〜へ向けて出発する）：He left for Tokyo.
・arrive at 〜（〜に到着する。せまい場所）／arrive in 〜（広い場所）
・get to 〜（〜に着く）

■ かかる時間
・It takes twenty minutes to walk to the station.（駅まで歩いて20分かかる）
・The trip takes forty minutes.（その移動は40分かかる）
・How long does it take?（どのくらいかかりますか）

■ 時刻の表し方
・at seven thirty（7時30分に）／at half past seven（同じ意味）
・a quarter to eight（8時15分前＝7時45分）／a quarter past eight（8時15分）
・in the morning／in the afternoon／in the evening／at night

■ 計算の手順
①待ち合わせ（着かなければならない）時刻を書く
②かかる時間を全部足す
③引き算で「何時に出ればよいか」を出す
④時刻表の中から、それより前で最も遅い便を選ぶ

★ ポイント：④の「それより前で最も遅い便」というのが答えになることが多い。早すぎる便を選ぶと「長く待つことになる」という条件に反する。

⚠ 注意：a quarter to eight は「8時に向かってあと15分」＝7時45分。to は「〜前」、past は「〜過ぎ」。日本語と逆に感じるので、必ず声に出して確認する。`,
      },
      {
        heading: '実際の時刻表つき英文',
        body: `次の英文を、時間軸の図と見比べながら読む。

Emi and her friends are going to visit the science museum on Saturday. They will meet in front of the museum at eleven o'clock. Trains from their town leave at 8:30, at 9:30, and at 10:30. The trip takes forty minutes, and it takes ten more minutes to walk from the station to the museum. Emi wants to arrive a little early, but she does not want to wait for a long time. The museum opens at ten.

■ 整理する
待ち合わせ：11:00（博物館の前）
かかる時間：電車40分＋徒歩10分＝50分
・8:30発 → 9:10 駅着 → 9:20 博物館着（1時間40分も早い。待ちすぎ）
・9:30発 → 10:10 駅着 → 10:20 博物館着（40分前。少し早めでちょうどよい）
・10:30発 → 11:10 駅着 → 11:20 博物館着（20分遅刻）

答え：Emi は 9:30 の電車に乗るべきである。

■ 条件を1つずつ確かめる
条件①11時までに着く → 8:30便○／9:30便○／10:30便×
条件②長く待ちたくない → 8:30便×（1時間40分待ち）／9:30便○
→ 両方○なのは 9:30 だけ。

★ ポイント：条件が2つあるときは表を作り、○×で消していく。頭の中だけで考えると、片方の条件を忘れる。

⚠ 注意：The museum opens at ten. という情報も条件の1つ。もし 9:20 に着いてしまうと博物館はまだ開いていない。この一文があるおかげで、8:30 の便がさらに不適切だとわかる。図表つき読解では、一見関係なさそうな1文が条件になっていることが多い。`,
        figureId: 'lf_eigoext11_415',
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、Which train should Emi take? に答えなさい。',
        wrongAnswer: 'The 10:30 train.',
        trapExplanation:
          '「11時の待ち合わせだから、その少し前の10:30に出ればよい」と、電車の発車時刻と到着時刻を同じものとして考えてしまう。所要時間を足していないための誤り。',
        correctAnswer: 'The 9:30 train.',
        correctExplanation:
          '電車40分＋徒歩10分で合計50分かかるので、10:30発では博物館に着くのは11:20になり、11:00の待ち合わせに遅れる。9:30発なら10:20に着き、少し早めで条件に合う。8:30発では9:20に着いてしまい、博物館が開く10:00より前で長く待つことになる。時刻表の問題は必ず「発車時刻＋所要時間＝到着時刻」を書き出すこと。',
      },
      {
        question: 'The train leaves at a quarter to eight. は何時何分か。',
        wrongAnswer: '8時15分',
        trapExplanation:
          'a quarter（4分の1＝15分）と eight（8時）だけを見て、「8時15分」としてしまう。to と past の区別を知らないと、15分前と15分過ぎが逆になる。',
        correctAnswer: '7時45分',
        correctExplanation:
          'a quarter to eight は「8時まであと15分」という意味なので7時45分。逆に a quarter past eight なら「8時を15分過ぎた」で8時15分になる。同じように half past nine は9時30分。to＝〜前、past＝〜過ぎ、と対で覚える。時刻表の問題ではこの1語で答えが変わる。',
      },
    ],
  },

  // ───────────────── 9. 会話文の読解（s416〜s420） ─────────────────
  {
    id: 'eigo_s416',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話文①：電話の会話',
    description: '電話特有の言い回しを覚え、だれがだれと話しているかを正確につかむ',
    order: 916,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '電話では「私は〜です」を This is 〜 speaking. と言う（I am 〜 とは言わない）。',
      '「〜さんをお願いします」は May I speak to 〜?／Can I talk to 〜?',
      '「どちらさまですか」は Who’s calling, please? 「少々お待ちください」は Just a moment, please.',
      '「（本人が）私です」は Speaking. または This is he／she.',
      '「伝言を承りましょうか」は Can I take a message? 「伝言をお願いできますか」は Can I leave a message?',
    ],
    sections: [
      {
        heading: '電話の決まり文句',
        body: `電話の会話は、使われる表現がほぼ決まっている。丸ごと覚えてしまえば確実に得点できる。

■ かける側
・Hello. This is Ken. May I speak to Mika, please?（もしもし、ケンです。ミカさんをお願いします）
・Can I leave a message?（伝言をお願いできますか）
・I'll call back later.（あとでかけ直します）
・Sorry, I have the wrong number.（すみません、番号をまちがえました）

■ 受ける側
・Who's calling, please?（どちらさまですか）
・Just a moment, please. ／ Hold on, please.（少々お待ちください）
・Speaking.（私です）※本人が出たとき
・She's out now. ／ He isn't here right now.（今、外出しています）
・Can I take a message?（伝言を承りましょうか）
・Shall I tell her to call you back?（折り返し電話するよう伝えましょうか）

★ ポイント：This is Ken. の This is は「こちらは〜です」の意味。電話では自分のことも This is 〜 と言う。I am Ken. とは言わないので、選択肢問題でねらわれる。

⚠ 注意：Speaking. だけで「私です」を表す。Who's calling? に対して I am Mika. と答えるのは不自然。This is Mika. または Speaking. が正しい。`,
      },
      {
        heading: '実際の電話の会話',
        body: `次の会話を読む。

Mika's mother: Hello.
Ken: Hello. This is Ken Sato. May I speak to Mika, please?
Mika's mother: I'm sorry, Ken. She is at her piano lesson now. She will be back around six.
Ken: I see. Can I leave a message?
Mika's mother: Sure. Go ahead.
Ken: We are going to meet at the station at nine tomorrow morning, but the trains will be late because of some work on the railway line. Could you tell her to come at nine thirty instead?
Mika's mother: At nine thirty. All right, I'll tell her.
Ken: Thank you very much. Good night.

■ だれがだれと話しているか
電話をかけたのは Ken、出たのは Mika の母親。Mika 本人は不在。

■ 内容の整理
・ミカは今ピアノのレッスン中で、6時ごろ帰る
・ケンの伝言：明日の待ち合わせを9時から9時30分に変更したい
・理由：線路の工事のため電車が遅れる

■ 設問になりやすい所
・Why did Ken call Mika?（待ち合わせ時刻の変更を伝えるため）
・What time will they meet tomorrow?（9時30分）
・Where is Mika now?（ピアノのレッスン）

★ ポイント：Could you tell her to come at nine thirty instead? の instead（そのかわりに）が変更の合図。9時ではなく9時30分になる。

⚠ 注意：会話の中に2つの時刻（six／nine／nine thirty）が出てくる。それぞれ何の時刻かを区別する。six はミカが帰る時刻で、待ち合わせとは関係ない。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の会話について、What time are Ken and Mika going to meet tomorrow? に答えなさい。',
        wrongAnswer: 'At nine.（9時）',
        trapExplanation:
          '会話の中に We are going to meet at the station at nine tomorrow morning という文がそのまま出てくるので、それを答えにしてしまう。しかしそのあとに instead（そのかわりに）を使った変更の依頼がある。',
        correctAnswer: 'At nine thirty.（9時30分）',
        correctExplanation:
          'but 以下で「電車が遅れる」と述べ、Could you tell her to come at nine thirty instead? と時刻の変更を頼んでいる。会話文では「もともとの予定 → 変更後の予定」という流れが定番で、設問は必ず変更後を問う。instead／How about 〜?／Let’s make it 〜 は変更の合図なので印をつける。',
      },
      {
        question: '電話で「（お電話代わりました）私です」と言うとき、正しいのはどちらか。',
        wrongAnswer: 'I am Mika.',
        trapExplanation:
          '日本語の「私がミカです」をそのまま英語にして I am Mika. としてしまう。文法としてはまちがいではないが、電話の場面ではこの言い方をしない。',
        correctAnswer: 'Speaking.（または This is Mika.）',
        correctExplanation:
          '電話では、自分を名のるときも This is 〜 を使う。本人が呼び出しに応じるときは Speaking. の一語で「私です」を表す。同じく「どちらさまですか」は Who is it? ではなく Who’s calling, please? を使う。電話特有の表現はそのまま暗記するのが確実である。',
      },
    ],
  },

  {
    id: 'eigo_s417',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話文②：買い物の会話',
    description: '店員と客のやりとりの型を覚え、値段と個数の計算を確実にする',
    order: 917,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '店員の第一声は May I help you? ／ Can I help you?（いらっしゃいませ）。',
      '客の返事は Yes, please. I’m looking for 〜. ／ No, thank you. I’m just looking.',
      '値段：How much is it? ／ How much are they? 答えは It’s 1,200 yen.',
      '試着：May I try it on?（試着してもいいですか）／ It’s too big. Do you have a smaller one?',
      '会計：I’ll take it.（それをください）／ Here you are.（はいどうぞ）／ Here’s your change.（おつりです）',
    ],
    sections: [
      {
        heading: '買い物の会話の型',
        body: `買い物の会話は「入店 → さがす → 選ぶ → 試す → 買う → 支払い」という順に進む。それぞれの場面の表現を覚える。

■ ①店員が声をかける
May I help you? ／ Can I help you?（いらっしゃいませ・何かお探しですか）
→ 買う気があるなら Yes, please. ／ ないなら No, thank you. I'm just looking.

■ ②さがしているものを言う
I'm looking for a T-shirt.（Tシャツをさがしています）
Do you have this in blue?（これの青はありますか）

■ ③大きさ・色を選ぶ
It's too big／small／expensive.（大きすぎる／小さすぎる／高すぎる）
Do you have a smaller one?（もっと小さいのはありますか）※ one＝同じ種類の別のもの

■ ④試す
May I try it on?（試着してもいいですか）
Sure. The fitting room is over there.

■ ⑤買う・支払う
I'll take it.（それをください）／ How much is it?（いくらですか）
Here you are.（はいどうぞ）／ Here's your change.（おつりです）
That will be 1,800 yen.（1,800円になります）

★ ポイント：How much is it?（単数）と How much are they?（複数）を使い分ける。答えも It's 〜 と They're 〜 で対応する。

⚠ 注意：値段の答えに数字だけを書かないこと。1,200 yen のように単位を必ず付ける。また Here you are.（差し出すとき）と Here's your change.（おつりを渡すとき）は場面がちがう。`,
      },
      {
        heading: '実際の買い物の会話と計算',
        body: `右の値段表を見ながら、次の会話を読む。

Clerk: May I help you?
Emi: Yes, please. I'm looking for a T-shirt for my brother.
Clerk: How about this blue one? It's 1,200 yen.
Emi: It looks nice. Do you have a bigger one?
Clerk: Yes. Here you are. This is a large size, and the price is the same.
Emi: Great. I'll take it. And I need two pairs of socks, too.
Clerk: The socks are 300 yen a pair. So that will be 1,800 yen in all.
Emi: Here's 2,000 yen.
Clerk: Thank you. Here's your change, 200 yen.

■ 計算を確かめる
Tシャツ 1,200円 ×1 ＝ 1,200円
くつ下 300円 ×2 ＝ 600円
合計 1,200＋600 ＝ 1,800円
2,000円出したので、おつりは 2,000−1,800 ＝ 200円

■ 注意すべき表現
・a pair of socks（くつ下1足）／two pairs of socks（2足）※ socks は2枚で1足
・300 yen a pair（1足300円）※ a＝「〜につき」
・in all（全部で）／in total（合計で）

★ ポイント：数量の表現（a pair of／two pairs of／a bottle of／a cup of）を見落とすと計算がずれる。個数を表す語には必ず○をつける。

⚠ 注意：The price is the same.（値段は同じ）という一文があるので、大きいサイズにしても1,200円のままである。この一文がないと、大きいサイズは高いのではないかと迷うことになる。会話文の細かい一文が計算の条件になっている。`,
        figureId: 'lf_eigoext11_417',
      },
    ],
    trapExamples: [
      {
        question:
          '上の会話について、How much did Emi pay in all? に答えなさい。',
        wrongAnswer: '1,500 yen.',
        trapExplanation:
          'くつ下を1足だけと考えて 1,200＋300＝1,500円としてしまう。two pairs of socks の two pairs（2足）を見落としたための誤り。数量の語は小さく目立たないので読み飛ばしやすい。',
        correctAnswer: '1,800 yen.',
        correctExplanation:
          'Tシャツ1,200円と、くつ下300円×2足＝600円で、合計1,800円。会話の中でも So that will be 1,800 yen in all. と確認されている。買い物の会話では、必ず「何を・いくつ」に○をつけてから計算し、会話の中に出てくる合計額と一致するか確かめること。',
        },
      {
        question:
          '店員の May I help you? に対し、買う気はないが店内を見たいときの返事として正しいのはどれか。',
        wrongAnswer: 'No, you may not.',
        trapExplanation:
          'May I 〜? は許可を求める文だと習っているので、断るときは No, you may not.（だめです）と答えてしまう。文法としては形が合っているが、実際の場面では非常に失礼な返事になる。',
        correctAnswer: "No, thank you. I'm just looking.",
        correctExplanation:
          '店での May I help you? は「いらっしゃいませ・何かお探しですか」という決まったあいさつで、許可を求めているわけではない。買う気がないときは No, thank you. I’m just looking.（けっこうです、見ているだけです）と答える。会話文では、文字どおりの意味ではなく「その場面での決まった返事」を選ぶ問題がよく出る。',
      },
    ],
  },

  {
    id: 'eigo_s418',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話文③：道案内',
    description: '道順の表現を地図と対応させ、目的地を正しく特定する',
    order: 918,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '道をたずねる：Could you tell me how to get to 〜? ／ Where is 〜? ／ How can I get to 〜?',
      '道順：Go straight（まっすぐ行く）／Turn right［left］at 〜（〜で右［左］に曲がる）。',
      '位置：on your right［left］（右手［左手］に）／next to 〜（〜のとなり）／across from 〜（〜の向かい）／between A and B。',
      'block（ブロック・区画）は交差点と交差点の間。two blocks＝2つ目の角まで。',
      '道案内の会話は必ず地図を書きながら読む。頭の中で回転させない。',
    ],
    sections: [
      {
        heading: '道案内の表現',
        body: `道案内の会話は、使う表現が限られている。地図を書きながら読むのが最も確実である。

■ たずねる
・Excuse me. Could you tell me how to get to the post office?
・Where is the station? ／ How can I get to the museum?
・Is there a bank near here?

■ 道順を説明する
・Go straight for two blocks.（2ブロックまっすぐ行く）
・Turn right at the second corner.（2つ目の角を右に曲がる）
・Turn left at the traffic light.（信号で左に曲がる）
・Go along this street.（この通り沿いに行く）
・Cross the street.（通りを渡る）

■ 位置を言う
・It's on your right［left］.（右手［左手］にあります）
・It's next to the flower shop.（花屋のとなり）
・It's across from the park.（公園の向かい）
・It's between the bank and the library.（銀行と図書館の間）
・It's in front of the station.（駅の前）／behind the school（学校の裏）
・It's at the corner of First Street and Green Street.（〜通りの角）

■ 距離・時間
・It takes about five minutes on foot.（歩いて約5分）
・It's about 300 meters from here.

★ ポイント：block は「建物」ではなく「交差点から次の交差点までの区画」。two blocks は2つ目の交差点までという意味である。

⚠ 注意：on your right（右手に）の your は聞き手（歩く人）から見た方向である。説明する人から見た方向ではない。`,
      },
      {
        heading: '実際の道案内の会話',
        body: `右の地図を見ながら、次の会話を読む。

Tourist: Excuse me. Could you tell me how to get to the post office?
Woman: Sure. Go straight along this street for two blocks. You'll see a bank on the corner.
Tourist: Two blocks. All right.
Woman: Turn right at the bank and walk for one more block. The post office is on your left, next to the flower shop.
Tourist: I see. How long does it take?
Woman: About five minutes on foot. If you walk past the post office and turn right again, you'll find the library. But you don't need to go that far.
Tourist: Thank you very much.
Woman: You're welcome.

■ 地図に書きこむ
①駅（現在地）から2ブロックまっすぐ
②銀行の角で右に曲がる
③1ブロック進むと、左手に郵便局（花屋のとなり）
④郵便局を通り過ぎてさらに右に曲がると図書館

■ 設問になりやすい所
・Where is the post office?（銀行の角を右に曲がって1ブロック、左手・花屋のとなり）
・How long does it take?（歩いて約5分）
・What is next to the post office?（the flower shop）

★ ポイント：説明を聞いた人が Two blocks. All right. とくり返している。会話文では、聞き手のくり返しが大事な情報の目印になる。

⚠ 注意：最後の If you walk past the post office 〜, you'll find the library. は「行きすぎた場合」の説明であって、目的地の道順ではない。But you don't need to go that far.（そこまで行く必要はない）という一文で、これが余分な情報だとわかる。`,
        figureId: 'lf_eigoext11_418',
      },
    ],
    trapExamples: [
      {
        question: '上の会話について、What is the tourist looking for? に答えなさい。',
        wrongAnswer: 'The library.（図書館）',
        trapExplanation:
          '会話の最後に the library が出てくるので、それが目的地だと思ってしまう。しかし図書館は「通り過ぎたときに着く場所」として説明されているだけで、探している場所ではない。最後に出た語を答えにしてしまう典型的なミス。',
        correctAnswer: 'The post office.（郵便局）',
        correctExplanation:
          '最初の発言に Could you tell me how to get to the post office? とある。会話文では、最初の1〜2文に「何が話題か」が必ず書かれている。あとから出てくる地名や建物は、道順の目印か、行きすぎたときの説明であることが多い。会話は最初の発言に戻って確かめること。',
      },
      {
        question:
          'Go straight for two blocks. の two blocks の意味として正しいのはどちらか。（ア）建物2つ分（イ）交差点2つ分',
        wrongAnswer: '（ア）建物2つ分',
        trapExplanation:
          'block を「ブロック（かたまり・建物）」という日本語のカタカナ語で覚えているため、建物の数だと考えてしまう。日本語のブロックと英語の block は指すものがちがう。',
        correctAnswer: '（イ）交差点2つ分',
        correctExplanation:
          '英語の block は「交差点から次の交差点までの区画」を指す。two blocks なら交差点を2つ通り過ぎた所、つまり2つ目の角までまっすぐ進むことになる。地図問題では、この数だけ角を数えて印をつければ位置が確定する。日本語のカタカナ語と意味がずれる語（block／mansion／smart）に注意する。',
      },
    ],
  },

  {
    id: 'eigo_s419',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話文④：レストランの会話',
    description: '注文のやりとりと、営業時間・予約などの条件を読み取る',
    order: 919,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '注文：Are you ready to order? ／ I’ll have the curry. ／ I’d like a hamburger.',
      '確認：Anything else?（ほかに何か）／ For here or to go?（店内か持ち帰りか）',
      '会計：Check, please. ／ The bill, please.（お会計をお願いします）',
      '営業時間の設問が多い。open at 〜／close at 〜／be closed on Mondays を正確に読む。',
      '「今は開いているか」「何時なら食べられるか」は、時間軸を書いてから答える。',
    ],
    sections: [
      {
        heading: 'レストランの決まり文句',
        body: `レストランの会話も、場面ごとに表現が決まっている。

■ 席につく
・How many people? ／ A table for three, please.（3名でお願いします）
・Do you have a reservation?（ご予約はありますか）
・We're full now. Could you wait for about ten minutes?

■ 注文する
・Are you ready to order?（ご注文はお決まりですか）
・I'll have the spaghetti. ／ I'd like a hamburger and a salad.
・What do you recommend?（おすすめは何ですか）
・Anything to drink?（お飲み物は）／ Anything else?（ほかに何か）
・That's all, thank you.（以上です）

■ 食事中・会計
・How is everything?（お味はいかがですか）
・Check, please. ／ The bill, please.（お会計をお願いします）
・Can I pay by card?（カードで払えますか）

■ 持ち帰り
・For here or to go?（店内でお召し上がりですか、お持ち帰りですか）
・To go, please.

★ ポイント：I'd like 〜 は I would like 〜 の短縮形で「〜がほしいのですが」というていねいな言い方。I want 〜 よりも礼儀正しい。注文の場面では I'd like を使う。

⚠ 注意：I'll have 〜 の have は「食べる」の意味。I'll have the curry. は「カレーにします」であって「カレーを持っています」ではない。have＝「食べる・飲む」の用法は会話文頻出。`,
      },
      {
        heading: '営業時間を読み取る',
        body: `右の時間軸の図を見ながら、次の会話を読む。

Man: Excuse me. Are you open now? It's three o'clock.
Waiter: I'm sorry, sir. We're closed between two and five. We open again at five for dinner.
Man: I see. What time do you close at night?
Waiter: At nine. The last order is at eight thirty.
Man: All right. Can I make a reservation for six thirty tonight? There will be four of us.
Waiter: Certainly. May I have your name and phone number?
Man: My name is Brown. My number is 090-1234-5678.
Waiter: Thank you, Mr. Brown. We'll see you at six thirty.

■ 時間を整理する
ランチ：11:00〜14:00（本文からは「2時に閉まる」ことがわかる）
休み：14:00〜17:00
ディナー：17:00〜21:00（ラストオーダー20:30）
予約：今夜6時30分、4名、Brown さん

■ 設問になりやすい所
・Why can't the man eat now?（14時から17時まで店が閉まっているから）
・What time does the restaurant close at night?（21時）
・How many people will come?（4人）

★ ポイント：There will be four of us.（私たちは4人になります）は人数を伝える表現。four of us で「私たちのうち4人」ではなく「私たち4人」を表す。

⚠ 注意：The last order is at eight thirty. は「注文できる最後の時刻」であって閉店時刻ではない。閉店は9時。似た2つの時刻が出てきたら、それぞれ何の時刻かを書き分ける。`,
        figureId: 'lf_eigoext11_419',
      },
    ],
    trapExamples: [
      {
        question:
          '上の会話について、What time does the restaurant close at night? に答えなさい。',
        wrongAnswer: 'At eight thirty.（8時30分）',
        trapExplanation:
          'The last order is at eight thirty. の時刻を閉店時刻だと考えてしまう。会話の中に9時と8時30分の2つの時刻が近い場所に出てくるため、混同しやすい。',
        correctAnswer: 'At nine.（9時）',
        correctExplanation:
          'What time do you close at night? という問いに At nine. と答えている。8時30分はラストオーダー（last order）の時刻であって閉店時刻ではない。時刻が複数出てくる会話文では、それぞれの時刻の横に「開店」「閉店」「ラストオーダー」「予約」と書き入れてから設問に取りかかること。',
      },
      {
        question:
          'ウェイターの Are you ready to order? に対する返事として自然なのはどちらか。（ア）Yes, I am ready.（イ）Yes. I’ll have the curry, please.',
        wrongAnswer: '（ア）Yes, I am ready.',
        trapExplanation:
          'Are you 〜? の疑問文なので Yes, I am. と答えるのが文法どおりだと考えてしまう。しかし会話文では、文法上正しくても場面に合わない返事は正解にならない。',
        correctAnswer: '（イ）Yes. I’ll have the curry, please.',
        correctExplanation:
          'Are you ready to order? は「ご注文はお決まりですか」という決まり文句なので、答えるときは注文の内容まで言うのが自然である。まだ決まっていなければ Just a moment, please.（もう少し待ってください）と答える。会話文の空所補充では、「文法的に正しいか」だけでなく「その場面で会話が続くか」を必ず確かめること。',
      },
    ],
  },

  {
    id: 'eigo_s420',
    subject: 'eigo',
    examType: 'chugaku',
    title: '会話文⑤：空所に入る発言を選ぶ',
    description: '前後のやりとりから、空所に入る一文を論理的に決める',
    order: 920,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '空所補充は「前の発言」と「後ろの発言」の両方を見る。片方だけ見ると必ずまちがえる。',
      '空所の後ろが Yes／No なら、空所には疑問文が入る。',
      '空所の後ろが Sure.／Of course.／All right. なら、空所には依頼や提案が入る。',
      '空所の後ろが理由（Because 〜）なら、空所には Why 〜? が入る。',
      '選んだ文を実際に入れて、前後を通して声に出して読み、自然かどうか確かめる。',
    ],
    sections: [
      {
        heading: '空所の前後から型を決める',
        body: `会話文の空所補充は、当てずっぽうではなく手がかりから論理的に決められる。

■ 後ろの返事から空所の型を決める
・後ろが Yes, I do.／No, I don't. → 空所は Do you 〜? の疑問文
・後ろが Yes, please.／No, thank you. → 空所は Would you like 〜?／Shall I 〜? の申し出
・後ろが Sure.／Of course.／All right. → 空所は Can you 〜?／Could you 〜? の依頼
・後ろが Because 〜. → 空所は Why 〜?
・後ろが 時刻・場所・人 → 空所は What time／Where／Who の疑問文
・後ろが That's a good idea. → 空所は Let's 〜／How about 〜? の提案

■ 前の発言から空所の型を決める
・前が I have a headache. → 空所は That's too bad.（お気の毒に）
・前が I passed the test! → 空所は Congratulations!（おめでとう）
・前が Thank you very much. → 空所は You're welcome.
・前が I'm sorry I'm late. → 空所は That's all right.（気にしないで）

★ ポイント：空所の後ろの1語（Sure／Because／Yes）を見るだけで、選択肢を2つくらいに減らせる。まずそこを見る。

⚠ 注意：疑問文の形だけで選ばないこと。Do you 〜? と Are you 〜? はどちらも Yes／No で答えるので、後ろの返事が Yes, I do. なら Do you 〜?、Yes, I am. なら Are you 〜? と、答えの動詞まで見て決める。`,
      },
      {
        heading: '実際の空所補充問題',
        body: `次の会話の空所①②③に入る文を、下のア〜オから選ぶ。

Ken: Hi, Lucy. You look tired. （　①　）
Lucy: I couldn't sleep well last night. My little brother had a fever, and my mother took care of him all night.
Ken: That's too bad. Is he all right now?
Lucy: Yes, he is much better this morning. Thank you.
Ken: （　②　）
Lucy: Yes, I do. I have a lot of science homework, and there is a test tomorrow, but I couldn't study at all yesterday.
Ken: （　③　）
Lucy: Really? That would be a great help. Thank you, Ken.

ア Do you have any homework today?
イ What's wrong?
ウ Shall I help you study for the test?
エ I'm fine, thank you.
オ Where did you go last night?

■ 解き方
①後ろの返事は I couldn't sleep well last night.（理由の説明）。前は You look tired.（疲れているようだね）。→ 具合をたずねる イ What's wrong?（どうしたの）が入る。
②後ろの返事は Yes, I do. → 空所は Do you 〜? の疑問文。選択肢で Do you で始まるのは ア。しかも後ろで「明日理科のテストがある」と続くので自然。
③後ろの返事は That would be a great help.（それはとても助かる）→ 空所は申し出の文。ウ Shall I help you study for the test? が入る。

エは Yes/No で答える質問への返事なので、この位置には入らない。オは「昨夜どこへ行ったか」で、話の内容と合わない。

★ ポイント：Yes, I do. の do が決め手。Are you 〜? なら Yes, I am. になるので、do と am のどちらかを見れば疑問文の形が決まる。

⚠ 注意：選び終わったら、必ず空所に入れて最初から読み直すこと。1か所だけ見て決めると、残りの選択肢が入らなくなることがある。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の会話の空所①に入る文として、イ What’s wrong? のかわりにエ I’m fine, thank you. を選ぶとどうなるか。',
        wrongAnswer: 'エ I’m fine, thank you. でも自然につながる',
        trapExplanation:
          'You look tired.（疲れているようだね）と言われたら「大丈夫だよ」と答えるのが自然だと考えてしまう。しかし空所①を話しているのは Ken であって Lucy ではない。だれの発言かを取りちがえたための誤り。',
        correctAnswer: 'ケンが自分の調子を答えることになり、話がつながらない',
        correctExplanation:
          '空所①は Ken の発言の中にある。ケンはルーシーの様子を見て You look tired. と言ったのだから、続くのは相手を気づかう言葉である。I’m fine, thank you. は自分の調子を答える文なので、この位置には入らない。空所補充では、まず「この空所はだれの発言か」を確かめること。',
      },
      {
        question:
          '空所の後ろの返事が Sure. のとき、空所に入る文として適切なのはどれか。（ア）What time is it?（イ）Can you help me?',
        wrongAnswer: '（ア）What time is it?',
        trapExplanation:
          '疑問文ならどれでも入ると考えてしまう。しかし What time is it? に対する返事は It’s three o’clock. のような時刻であって、Sure. ではない。',
        correctAnswer: '（イ）Can you help me?',
        correctExplanation:
          'Sure.（もちろん）は依頼や許可を求める文への承諾の返事である。Can you 〜?／Could you 〜?／May I 〜? に対して使われる。疑問詞（What／Where／When／Why／How）で始まる疑問文には、Yes／No や Sure では答えられず、具体的な内容で答える。返事の形から、疑問詞疑問文か Yes/No 疑問文かを見分けること。',
      },
    ],
  },

  // ───────────────── 10. 未知語の意味を文脈から推測する（s421〜s423） ─────────────────
  {
    id: 'eigo_s421',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未知語①：語の作りから意味を推測する',
    description: '接頭辞・接尾辞・複合語から、知らない単語のおおよその意味を出す',
    order: 921,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      'un-／in-／im-／dis- は「反対・否定」を作る（happy → unhappy）。',
      're- は「もう一度」（write → rewrite）、pre- は「前に」（preview）。',
      '-er／-or は「〜する人」、-ist は「〜の専門家」、-tion／-ment は「〜すること」（名詞）。',
      '-ful は「〜に満ちた」、-less は「〜がない」。careful と careless は正反対。',
      '複合語は2つの語に分ける（waterfall＝water＋fall＝滝、newspaper＝news＋paper）。',
    ],
    sections: [
      {
        heading: '意味を反対にする接頭辞',
        body: `知らない単語でも、語の頭や終わりについている部分から意味を推測できることが多い。

■ 否定・反対を作る接頭辞
・un- … happy→unhappy（不幸な）／kind→unkind／usual→unusual（ふつうでない）／able→unable
・in-／im- … possible→impossible（不可能な）／correct→incorrect／polite→impolite
・dis- … like→dislike（きらう）／appear→disappear（消える）／agree→disagree
・non- … stop→nonstop（止まらない）

■ その他の接頭辞
・re- …「もう一度」：write→rewrite（書き直す）／use→reuse（再利用する）／cycle→recycle
・pre- …「前に」：view→preview（下見）
・over- …「〜しすぎ」：sleep→oversleep（寝すごす）／eat→overeat

例）The old man disappeared into the forest. の disappear を知らなくても、appear（現れる）＋dis（反対）＝「消える」と推測できる。

★ ポイント：im- は b／m／p の前で使われる（impossible／impolite）。ir- は r の前（irregular＝不規則な）。音の並びで決まっているだけなので、意味はすべて「否定」である。

⚠ 注意：すべての un- が否定とはかぎらない。understand（理解する）は under＋stand であって「立たない」ではない。推測した意味を必ず文にあてはめて確かめること。`,
      },
      {
        heading: '品詞を作る接尾辞と複合語',
        body: `語の終わりの部分（接尾辞）は、その語の品詞を教えてくれる。品詞がわかると、文の中での役割がわかる。

■ 人を表す
・-er／-or …「〜する人」：teach→teacher／play→player／act→actor／visit→visitor
・-ist …「〜の専門家」：science→scientist／art→artist／piano→pianist
・-ian … music→musician

■ 名詞を作る
・-tion／-sion …「〜すること」：act→action／invent→invention／decide→decision
・-ment … move→movement／develop→development
・-ness … kind→kindness（親切）／happy→happiness
・-th … long→length／grow→growth

■ 形容詞を作る
・-ful …「〜に満ちた」：care→careful（注意深い）／use→useful／beauty→beautiful
・-less …「〜がない」：care→careless（不注意な）／use→useless／home→homeless
・-y … rain→rainy／sun→sunny／cloud→cloudy
・-ous … danger→dangerous／fame→famous

■ 複合語（2語をくっつけた語）
waterfall＝water＋fall（滝）／newspaper＝news＋paper（新聞）／
grandfather＝grand＋father（祖父）／earthquake＝earth＋quake（地震）／
sunflower＝sun＋flower（ひまわり）／firefighter＝fire＋fighter（消防士）

★ ポイント：-ful と -less は正反対。careful（注意深い）と careless（不注意な）は入試で必ず区別を問われる。

⚠ 注意：接尾辞から品詞がわかると、その語を飛ばしても文の構造がつかめる。The invention changed the world. の invention を知らなくても、-tion なので名詞＝主語だとわかり、「何かが世界を変えた」と読める。`,
      },
    ],
    trapExamples: [
      {
        question: 'careless の意味として正しいのはどちらか。（ア）注意深い（イ）不注意な',
        wrongAnswer: '（ア）注意深い',
        trapExplanation:
          'care（注意）という語が入っているので、「注意する」というよい意味だと考えてしまう。-less という接尾辞を見落とすと、意味が正反対になる。',
        correctAnswer: '（イ）不注意な',
        correctExplanation:
          '-less は「〜がない」という意味の接尾辞なので、careless は「注意がない＝不注意な」となる。反対に -ful は「〜に満ちた」なので careful は「注意深い」。同じように useful（役に立つ）と useless（役に立たない）、homeless（家のない）も同じ仕組みである。語の終わりまで必ず読むこと。',
      },
      {
        question: 'His answer was incorrect. の incorrect の意味を推測しなさい。',
        wrongAnswer: '完全な・とても正しい',
        trapExplanation:
          'correct（正しい）に何かが付いて意味が強まったと考え、「とても正しい」と読んでしまう。接頭辞 in- を「中に」という前置詞 in と同じだと考えるのもよくある誤り。',
        correctAnswer: 'まちがっている（正しくない）',
        correctExplanation:
          'in-／im-／un-／dis- はすべて「否定・反対」を作る接頭辞なので、incorrect は correct の反対で「正しくない」となる。impossible（不可能な）＝possible の反対、unhappy（不幸な）＝happy の反対も同じ仕組み。前置詞の in と、接頭辞の in- は別のものである。',
      },
    ],
  },

  {
    id: 'eigo_s422',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未知語②：文脈の手がかりから意味を出す',
    description: '言いかえ・対比・例示・原因結果という4つの手がかりを使う',
    order: 922,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '手がかり①言いかえ：A is called B／A, or B／A means 〜／that is（すなわち）。',
      '手がかり②対比：but／however／unlike／on the other hand の反対側に、反対の意味の語がある。',
      '手がかり③例示：such as／for example のあとに具体例が並び、そこから上位の意味がわかる。',
      '手がかり④原因結果：so／because でつながれた文から、その語の意味を逆算する。',
      '推測した意味は必ず本文に入れ直して、文全体が自然になるか確かめる。',
    ],
    sections: [
      {
        heading: '4つの手がかり',
        body: `知らない単語の意味は、その語の前後に必ず手がかりがある。入試の英文は、そう作られている。

■ ①言いかえ（＝の関係）
・A is called B.：This long sleep is called hibernation.（hibernation＝冬眠）
・A, or B：a tsunami, or a huge wave（tsunami＝巨大な波）
・A means B：Recycle means using things again.
・that is（すなわち）：the largest animal, that is, the blue whale

■ ②対比（反対の関係）
・Some students are diligent, but others are lazy.
　→ lazy がわからなくても、diligent（勤勉な）の反対だとわかる。
・Unlike his brother, he is very quiet.（兄と違って、彼はとても静かだ）
　→ 兄はにぎやかだとわかる。

■ ③例示（下に例が並ぶ）
・He plays several instruments, such as the piano, the violin, and the flute.
　→ instrument＝楽器だとわかる。

■ ④原因・結果
・It was so humid that my shirt got wet.（とても humid なのでシャツがぬれた）
　→ humid＝しめっぽい、とわかる。

★ ポイント：手がかりは知らない語の「すぐ前の文」か「すぐ後ろの文」にある。3文以上離れていることはまずない。

⚠ 注意：推測した意味は必ず本文に入れて読み直す。「なんとなくこんな感じ」で先へ進むと、その語がキーワードだった場合に文章全体を誤読する。`,
      },
      {
        heading: '実際の英文で推測する',
        body: `次の英文には、多くの小学生が知らない語が3つ入っている。手がかりを使って意味を出す。

In many cities, the air is not clean. Cars and factories produce gases that are bad for our health. This is called air pollution. In some places, the sky looks brown, and people cannot see the mountains near their town. Unlike cities, small villages in the mountains usually have fresh air. However, even in those villages, the number of cars is increasing. Some cities have started to use electric buses. They are quiet and they do not produce harmful gases. If more cities use them, the air will become cleaner.

■ ①air pollution
直前の文：Cars and factories produce gases that are bad for our health.
This is called air pollution. → 「これは air pollution と呼ばれる」
→ air pollution＝大気汚染

■ ②fresh
Unlike cities, small villages in the mountains usually have fresh air.
→ Unlike（〜と違って）があるので、都市の空気（not clean）の反対。
→ fresh＝新鮮な・きれいな

■ ③harmful
They are quiet and they do not produce harmful gases.
→ 前の部分で gases that are bad for our health（健康に悪い気体）とあった。
→ harmful＝有害な（harm＋-ful＝害に満ちた）

★ ポイント：③は接尾辞（-ful）と文脈の両方から確かめられた。手がかりは1つより2つのほうが確実である。

⚠ 注意：increasing（増えている）を「減っている」と読みちがえると、However（しかし）の意味が通らなくなる。「山あいの村は空気がきれい。しかし、その村でも車の数が増えている」という流れになって初めて However が生きる。つなぎ語と語の意味は、たがいに手がかりになる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文の harmful gases の harmful の意味を推測しなさい。',
        wrongAnswer: '役に立つ・有益な',
        trapExplanation:
          '-ful を「〜に満ちた」＝よい意味だと思いこみ、useful（役に立つ）や beautiful（美しい）からの連想で「有益な」としてしまう。-ful 自体はよい意味も悪い意味も作る。',
        correctAnswer: '有害な（健康に悪い）',
        correctExplanation:
          'harm は「害」という意味なので、harmful は「害に満ちた＝有害な」となる。文脈からも確かめられる。電気バスの説明で they do not produce harmful gases（有害な気体を出さない）とあり、前半に gases that are bad for our health（健康に悪い気体）と書かれている。-ful は「〜に満ちた」であって「よい」ではない、と正確に覚える。',
      },
      {
        question:
          'Unlike his brother, Ken is very quiet. からわかることとして正しいのはどちらか。（ア）ケンの兄も静かだ（イ）ケンの兄はにぎやかだ',
        wrongAnswer: '（ア）ケンの兄も静かだ',
        trapExplanation:
          'Unlike の like（〜のような）だけを見て「兄のようにケンも静かだ」と読んでしまう。un- という否定の接頭辞を見落としたための正反対の読みちがえ。',
        correctAnswer: '（イ）ケンの兄はにぎやかだ',
        correctExplanation:
          'Unlike 〜 は「〜と違って」という意味なので、「兄とは違ってケンはとても静かだ」となり、兄は静かではないとわかる。like（〜のように）と unlike（〜と違って）は正反対なので、頭の un- を必ず見ること。この対比の表現は、知らない語の意味を推測する強い手がかりにもなる。',
      },
    ],
  },

  {
    id: 'eigo_s423',
    subject: 'eigo',
    examType: 'chugaku',
    title: '未知語③：品詞を見抜いて読み飛ばす',
    description: '意味がわからなくても、品詞と役割がわかれば文の骨組みは読める',
    order: 923,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '未知語が名詞なら「何か」、動詞なら「何かをする」、形容詞なら「どんなか」と置きかえて読み進める。',
      '品詞の見分け方：a／the の後ろは名詞、主語の直後は動詞、名詞の直前は形容詞、-ly で終われば副詞。',
      '未知語が形容詞や副詞なら、飛ばしても文の骨組みは変わらない。',
      '未知語が動詞のときだけは飛ばせない。前後の文から動作の向きを推測する。',
      '設問で問われていない未知語には時間をかけない。',
    ],
    sections: [
      {
        heading: '品詞を見抜く方法',
        body: `未知語に出会ったとき、意味の前にまず品詞を判断する。品詞がわかれば、その語が文の中でどんな仕事をしているかがわかり、飛ばしてよいかどうかも決まる。

■ 名詞の目印
・a／an／the／my／this のすぐ後ろ：a glacier ／ the drought
・複数の s が付いている：glaciers
・前置詞のすぐ後ろ：in the valley

■ 動詞の目印
・主語のすぐ後ろ：The river flooded the town.
・-s／-ed／-ing が付いている
・助動詞（can／will／must）のすぐ後ろ

■ 形容詞の目印
・名詞のすぐ前：a huge building
・be動詞のすぐ後ろ：The building was huge.

■ 副詞の目印
・-ly で終わる：quickly／carefully／suddenly
・動詞や文全体を説明する位置にある

■ 置きかえて読む
The scientist examined the strange object carefully.
examined と object を知らないとしても
「その科学者は（何かをした）その奇妙な（何か）を注意深く」
→ 「科学者が奇妙な何かを注意深く調べた」と、おおよその意味が取れる。

★ ポイント：形容詞と副詞は「くわしくする語」なので、飛ばしても文の骨組みは残る。まず飛ばしてよい品詞かどうかを判断する。

⚠ 注意：動詞だけは飛ばせない。動詞が抜けると「何が起きたか」がわからなくなる。動詞が未知語のときは、前後の文の内容から動作を推測する。`,
      },
      {
        heading: '飛ばしてよい語・いけない語',
        body: `実際の英文で、どの語を飛ばしてよいか判断する。

Long ago, a terrible drought hit the village. For three months, no rain fell. The rice fields became dry and hard, and the plants withered. The villagers walked for hours to a distant river and carried water in heavy buckets. An old woman named Sato taught the children to save every drop. Thanks to her advice, the village survived that difficult summer.

■ 未知語になりやすい語と、その扱い
・drought（干ばつ）… a のあとなので名詞。「何か悪いもの」。ただし次の文に For three months, no rain fell.（3か月間、雨が降らなかった）とあるので、意味が確定できる。飛ばさず確かめる価値がある。
・withered（しおれた）… plants のあとの動詞。前に became dry and hard（かわいて固くなった）とあるので、「植物がだめになった」と推測できる。動詞なので飛ばさない。
・distant（遠い）… river の前なので形容詞。飛ばしても「川へ歩いて水を運んだ」という骨組みは変わらない。
・survived（生きのびた）… village のあとの動詞。Thanks to her advice（彼女の助言のおかげで）とあるので、よい結果だとわかる。動詞なので飛ばさない。

■ まとめ
飛ばしてよい：distant（形容詞）
飛ばせない：drought・withered・survived（名詞・動詞で内容の中心）

★ ポイント：Thanks to 〜（〜のおかげで）はよい結果を導く語。Because of 〜 は良し悪しどちらにも使う。この違いも意味推測の手がかりになる。

⚠ 注意：飛ばすかどうかは「その語が設問に関係するか」でも決まる。設問に survive という語が出ていたら、必ず意味を確定させる。まず設問を先読みしておくのは、このためでもある。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文の a terrible drought hit the village. の drought の品詞は何か。',
        wrongAnswer: '動詞',
        trapExplanation:
          'すぐ後ろに hit（打つ）という動詞があるので、その前の drought も動作を表す語のように感じてしまう。品詞は意味ではなく、前後の語の並びで決まる。',
        correctAnswer: '名詞',
        correctExplanation:
          'a terrible drought の並びを見る。a（冠詞）＋terrible（形容詞）＋drought となっているので、drought は名詞である。この文の骨組みは「a terrible drought（主語）＋hit（動詞）＋the village（目的語）」で、「ひどい干ばつが村をおそった」となる。冠詞のあとは必ず名詞、という並びの規則で判断できる。',
      },
      {
        question:
          '未知語がある文の読み方として正しいのはどちらか。（ア）辞書のように意味を1つに決めるまで先へ進まない（イ）品詞を見抜き、飛ばしてよい語かどうかを判断して読み進める',
        wrongAnswer: '（ア）辞書のように意味を1つに決めるまで先へ進まない',
        trapExplanation:
          '「わからないままにしてはいけない」というふだんの勉強の姿勢を、試験中にもそのまま持ちこんでしまう。ふだんの学習では正しい態度だが、限られた時間で解く試験では致命的になる。',
        correctAnswer: '（イ）品詞を見抜き、飛ばしてよい語かどうかを判断して読み進める',
        correctExplanation:
          '入試の長文には、受験生が知らない語が必ず数個ふくまれている。それでも解けるように作られているので、形容詞や副詞なら飛ばし、名詞や動詞なら前後の手がかりからおおよその意味を出して先へ進む。意味を確定させるのは、設問で問われている語だけでよい。ふだんの学習と試験本番で、読み方を切りかえること。',
      },
    ],
  },

  // ───────────────── 11. 内容一致問題・要旨把握（s424〜s425） ─────────────────
  {
    id: 'eigo_s424',
    subject: 'eigo',
    examType: 'chugaku',
    title: '内容一致問題の解き方',
    description: '選択肢と本文を1語ずつ照合し、言いすぎ・すりかえの誤答を見抜く',
    order: 924,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '選択肢は本文の語をそのまま使わず、言いかえてあることが多い。意味で照合する。',
      '誤答の型は4つ：①言いすぎ（all／always／never）②すりかえ（人・時・場所を入れかえ）③本文にない内容④一部だけ正しい。',
      '選択肢の中の数字・人名・時を表す語には必ず○をつけ、本文と1つずつ照合する。',
      '「本文に書かれていないこと」は、たとえ常識的に正しくても誤答である。',
      '正しい選択肢は、必ず本文の「どの1文」に対応しているかを言えなければならない。',
    ],
    sections: [
      {
        heading: '誤答の4つの型',
        body: `内容一致問題（本文の内容に合うものを選べ）は、誤答の作り方が決まっている。型を知っていれば、消去法で確実にしぼれる。

■ ①言いすぎ（強すぎる語）
本文：Some students walk to school.（一部の生徒は歩いて通う）
誤答：All students walk to school.（全員が歩く）
目印：all／every／always／never／only／the best／must
→ 強い語が入っている選択肢は、まず疑う。

■ ②すりかえ（人・時・場所を入れかえる）
本文：Ken’s sister went to Canada last year.
誤答：Ken went to Canada last year.（行ったのは妹）
誤答：Ken’s sister went to Canada this year.（時がちがう）
→ 選択肢の主語・時・場所に○をつけて照合する。

■ ③本文にない内容
常識的に正しくても、本文に書かれていなければ誤答。
本文に「猫は13時間眠る」とあるとき、「猫は夜行性である」は本文にない。

■ ④一部だけ正しい
選択肢の前半は本文どおりだが、後半がちがう。長い選択肢ほどこの型が多い。
→ 選択肢は最後まで読む。前半だけ見て○をつけない。

★ ポイント：まず選択肢を読み、①の強い語に○、②の人名・時・場所に○をつける。そのうえで本文を照合すると、目のつけどころが定まる。

⚠ 注意：「本文に合わないものを選べ」という設問もある。設問文の「合うもの」「合わないもの」を必ず確認する。ここを読みちがえると全部落とす。`,
      },
      {
        heading: '実際に照合する',
        body: `次の英文と選択肢で、照合のしかたを確かめる。

Sea turtles lay their eggs on the beach at night. A mother turtle digs a hole in the sand and lays about a hundred eggs. Then she goes back to the sea. About two months later, the baby turtles come out and move toward the sea. However, only a few of them become adults. Many are eaten by birds and fish. In some countries, people protect the beaches where turtles lay eggs. Thanks to this work, the number of sea turtles has increased in those areas.

選択肢
ア A mother turtle stays with her eggs until they come out.
イ All the baby turtles reach the sea and become adults.
ウ Sea turtles lay their eggs on the beach during the night.
エ The number of sea turtles is decreasing everywhere in the world.

■ 照合する
ア：本文は Then she goes back to the sea.（産んだあと海に戻る）→ 卵のそばにいるのは誤り。②すりかえ・③本文にない。
イ：本文は only a few of them become adults（成体になるのはごく一部）→ All が言いすぎ。①言いすぎ。
ウ：本文は lay their eggs on the beach at night → at night と during the night は同じ意味。○
エ：本文は the number of sea turtles has increased in those areas（それらの地域では増えている）→ decreasing everywhere は逆かつ言いすぎ。①言いすぎ。

答え：ウ

★ ポイント：正解のウは、本文の at night が during the night に言いかえられている。正解の選択肢ほど、本文とは違う語で書かれている。語が同じかどうかではなく、意味が同じかどうかで判断する。

⚠ 注意：a few（少しはある）と only a few（ごくわずかしかない）と few（ほとんどない）は意味の強さがちがう。本文の only a few を「けっこういる」と読むと、イを選んでしまう。`,
      },
    ],
    trapExamples: [
      {
        question:
          '上の英文について、選択肢イ All the baby turtles reach the sea and become adults. が誤りである理由を答えなさい。',
        wrongAnswer: '本文に「子ガメが海に向かう」と書かれているので、この選択肢は正しい',
        trapExplanation:
          '本文の the baby turtles come out and move toward the sea という部分だけを見て、選択肢の前半と一致するので正しいと判断してしまう。選択肢の後半（become adults）と、All という語を確かめていない。',
        correctAnswer:
          '本文には only a few of them become adults（成体になるのはごく一部だけ）とあり、All（すべて）ではないから。',
        correctExplanation:
          'all／every／always／never／only などの強い語が入った選択肢は、まず疑ってかかる。本文の However, only a few of them become adults. と真っ向から矛盾している。選択肢は最後まで読み、前半が正しくても後半で切られていないかを必ず確かめること。',
      },
      {
        question:
          '「本文の内容に合わないものを1つ選びなさい」という設問で、本文と一致する選択肢を選んでしまうのはなぜか。また、どう防ぐか。',
        wrongAnswer: '合っている選択肢を選ぶのが正解だから、まちがいではない',
        trapExplanation:
          '内容一致問題は「合うものを選ぶ」ものだと思いこんでいるため、設問文の「合わないもの」を読み飛ばしてしまう。読解の力ではなく、設問文の読み方の問題である。',
        correctAnswer:
          '設問文の「合わない」を読み落としているため。設問文の「合う」「合わない」に必ず印をつけ、選択肢ごとに○×を書きこんでから、求められているほうを選ぶ。',
        correctExplanation:
          '設問文には「合うもの」「合わないもの」「合うものをすべて」など、いくつかの型がある。まず設問文の該当部分に線を引く。そして選択肢ア〜エそれぞれに○（本文と一致）か×（一致しない）を書きこむ。最後に、設問が求めているのが○のほうか×のほうかを確認して答える。この手順を守れば、確実に防げる失点である。',
      },
    ],
  },

  {
    id: 'eigo_s425',
    subject: 'eigo',
    examType: 'chugaku',
    title: '要旨把握とタイトル選び',
    description: '文章全体を一文にまとめ、ふさわしい題名を選ぶ',
    order: 925,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '要旨＝文章全体をおおう内容。段落ごとのメモをつないで一文にする。',
      'タイトルは「せますぎず・広すぎず」。1つの段落だけの内容も、本文にない一般論も誤り。',
      '結論の合図（In conclusion／In short／We should）の文が、要旨にいちばん近い。',
      '具体例・数字・体験談は要旨に入れない。',
      '選択肢のタイトルは、本文の全段落に対応しているかを確かめる。',
    ],
    sections: [
      {
        heading: '要旨のまとめ方',
        body: `要旨（main idea）とは、文章全体をおおう「言いたいこと」である。ある段落だけの内容や、具体例は要旨にならない。

■ まとめる手順
①各段落の一言メモを作る（10〜20字）
②メモを見て、全部に共通する内容をさがす
③結論の段落（最終段落）の文を確かめる
④「〜なので、〜だ」の形で一文にする

例）4段落の説明文
①ペットボトルは世界中で使われている
②多くが海に流れこむ
③海の生き物が食べてしまう危険がある
④私たちにできることが3つある
→ 要旨「ペットボトルのごみが海の生き物に害をあたえているので、私たちは減らす努力をすべきだ」

■ 要旨に入れないもの
・具体例（For example のあと）
・数字（約200キログラム、45パーセント など）
・体験談（When I was 〜）
・ゆずりの部分（Of course, 〜）

★ ポイント：要旨は「理由＋主張」の形にすると、必要な要素がそろう。主張だけだと理由が抜け、事実だけだと主張が抜ける。

⚠ 注意：物語文の場合、要旨は「教訓・主人公が学んだこと」になる。最後の1〜2文（Since that day, 〜／I learned that 〜）に必ず書かれている。説明文とは探す場所がちがう。`,
      },
      {
        heading: 'タイトルの選び方',
        body: `タイトル（題名）を選ぶ問題は、要旨問題の変形である。「せますぎず・広すぎず」が判断の基準になる。

■ 誤答の型
①せますぎる：1つの段落・1つの例しか表していない
　本文が「犬の役割いろいろ」なのに、タイトルが「盲導犬の訓練」
②広すぎる：本文の範囲を超えている
　本文が「犬の役割いろいろ」なのに、タイトルが「動物と人間」
③本文にない：内容と関係のない題名
④一部だけ正しい：前半は合っているが後半が本文にない

■ 判断のしかた
選んだタイトルを見て、「この題名の文章なら、この段落は入るか」を各段落について確かめる。
・全部の段落が入る → 正解
・入らない段落がある → せますぎる
・本文にない内容まで入ってしまう → 広すぎる

■ 例で確かめる
本文：①犬は人の役に立つ ②盲導犬 ③警察犬 ④病院を訪れる犬 ⑤犬は仲間だ
ア The Training of Guide Dogs（盲導犬の訓練）→ ②だけ。せますぎる。
イ Dogs That Help People（人を助ける犬）→ ①〜⑤すべてに対応。○
ウ Animals in Our Life（生活の中の動物）→ 犬以外もふくむ。広すぎる。
エ How to Keep a Dog（犬の飼い方）→ 本文にない。

答え：イ

★ ポイント：英語のタイトルは名詞のかたまりで書かれることが多い（Dogs That Help People／The Story of a Small Village）。文の形（Dogs help people.）にはならないのがふつうである。

⚠ 注意：タイトルにいちばん多く出てくる語（キーワード）が入っているとはかぎらないが、入っていることが多い。文章全体で何度もくり返される語を数えておくと、選択肢をしぼる助けになる。`,
      },
    ],
    trapExamples: [
      {
        question:
          '「犬は人の役に立つ／盲導犬／警察犬／病院を訪れる犬／犬は仲間だ」という5段落の文章のタイトルとして、ウ Animals in Our Life が誤りである理由を答えなさい。',
        wrongAnswer: '犬は動物なので、このタイトルでも正しい',
        trapExplanation:
          '本文の内容がすべてこのタイトルにあてはまるので、正しいと感じてしまう。しかしタイトルは「本文の範囲とぴったり合う」必要があり、本文より広い題名は誤りになる。',
        correctAnswer:
          '本文は犬だけを扱っているのに、このタイトルは犬以外の動物もふくむ広さになっているから（広すぎる）。',
        correctExplanation:
          'タイトルは本文の範囲とちょうど同じ広さでなければならない。Animals in Our Life という題名なら、猫や馬の話が入っていてもおかしくないが、本文には犬の話しかない。逆に The Training of Guide Dogs は②の段落だけしか表せないのでせますぎる。「全段落が入り、しかも余分な内容が入らない」ものを選ぶ。',
      },
      {
        question:
          '説明文の要旨をまとめるとき、「日本人1人が1日に約220リットルの水を使う」という内容を入れるべきか。',
        wrongAnswer: '入れるべき。本文にある具体的な数字なので重要である。',
        trapExplanation:
          '数字は本文にはっきり書かれていて確かな情報なので、要旨にも入れるべきだと考えてしまう。しかし数字は主張を支えるための材料であって、主張そのものではない。',
        correctAnswer: '入れない。数字は主張を支える具体的な材料（支持文）だから。',
        correctExplanation:
          '要旨は文章全体をおおう「言いたいこと」なので、具体例・数字・体験談は入れない。この文章なら「水をつくるには多くのエネルギーがかかるので、日常の小さな工夫で節水を続けるべきだ」が要旨になる。数字は、内容の細部を問う設問（How much water does one person use?）で使うものだと役割を分けて考える。',
      },
    ],
  },
];
