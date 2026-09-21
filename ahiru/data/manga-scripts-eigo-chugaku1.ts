// 中学受験英語（文法基礎）：討論・探求型マンガ
import type { MangaScript } from './manga-types';

export const mangaScriptsEigoChugaku1: Record<string, MangaScript> = {
  eigo_08_sanninshou_manga: {
    id: 'eigo_08_sanninshou_manga',
    panels: [
      { speaker: 's2', line: '「He plays tennis.」ってplayにsがつくのに、「I play tennis.」にはsがつかないのは、なんでですか？' },
      { speaker: 't', line: 'いい質問。まず、Iとheって、話す人から見て「立場」が違うよね。I（私）って、話している本人自身のことだよね？' },
      { speaker: 's1', line: 'はい、Iは「一人称」で、話している人自身のことでした。' },
      { speaker: 't', line: 'その通り！じゃあ、heはどうかな？話している人でも、話しかけられている人でもないよね？' },
      { speaker: 's2', line: 'たしかに……heは、その場にいない、別の1人の男の人のことですよね。' },
      { speaker: 't', line: 'その通り！それが「三人称」。一人称（I/we）でも二人称（you）でもない、それ以外の1人・1つのものが「三人称単数」なんだ。主語がこの三人称単数のときだけ、一般動詞にsやesをつける。' },
      { speaker: 's1', line: 'じゃあ、「my father」とか「the cat」みたいに、名前で呼ばれる人やものも、話し手でも聞き手でもないから、三人称単数になるんですね。' },
      { speaker: 't', line: 'その通り！じゃあ、なんでsをつけるつづりが単語によって違うと思う？watchはwatchesになるのに、playはplaysのままだよね。' },
      { speaker: 's2', line: 'sを1個つけると、発音しにくいから……watchみたいにすでにchで終わる音には、esをつけて発音しやすくするんですか？' },
      { speaker: 't', line: 'その通り！s/o/x/ch/shで終わる語はesをつける、子音字+yで終わる語はyをiに変えてes（study→studies）、これはすべて発音しやすくするための工夫なんだ。①主語が三人称単数かをまず判定②動詞にs/esをつける、この2段階で考えよう。複数の主語（They）には絶対sをつけないことも忘れずに。', emphasis: true },
    ],
  },

  eigo_08_hitei_manga: {
    id: 'eigo_08_hitei_manga',
    panels: [
      { speaker: 's1', line: '「She does not likes tennis.」って書いたら×でした。sheは三人称単数だから、sをつけるのが正しいと思ったんですけど……。' },
      { speaker: 't', line: 'いいところに気づいたね。まず質問。「plays」の「s」って、何の意味を持ってるんだったっけ？' },
      { speaker: 's2', line: '「主語が三人称単数だよ」ということを表すsですよね。' },
      { speaker: 't', line: 'その通り！じゃあ、否定文で使う「does」って、どこから来た言葉だと思う？' },
      { speaker: 's1', line: 'あ、「doesn\'t」の「es」って……もしかして、この「三人称単数のs」と同じ役目なんですか？' },
      { speaker: 't', line: 'その通り！「does」自体が、すでに「主語は三人称単数だよ」という情報を背負っている。じゃあ、その後ろの動詞に、もう一度sをつけたらどうなると思う？' },
      { speaker: 's2', line: 'あ、同じ情報を2回言ってしまうことになる……ということですか？' },
      { speaker: 't', line: 'その通り！「sの意味は、doesがすでに引き受けている」んだ。だから動詞は原形に戻す。「She does not like tennis.」が正解。じゃあ、be動詞の否定文はどうやって作るか覚えてる？' },
      { speaker: 's1', line: 'be動詞のあとにnotを置くだけ、でしたよね。「She is not busy.」みたいに。' },
      { speaker: 't', line: 'その通り！be動詞は自分自身の形が変化する（is/are）から、notを直接うしろに置くだけでいい。でも一般動詞は形が変化しないから、do/doesという「助け役」を前に置いて、notをdo/doesにつける。この違いをしっかり区別しよう。①be動詞→be動詞+not②一般動詞→do/does+not+動詞の原形、この2パターンで整理すれば迷わなくなるよ。', emphasis: true },
    ],
  },

  eigo_20_fukusuu_manga: {
    id: 'eigo_20_fukusuu_manga',
    panels: [
      { speaker: 's2', line: '複数形の作り方、city→citiesはyをiに変えるのに、boy→boysはそのままsをつけるだけって、何が違うんですか？' },
      { speaker: 't', line: 'いい質問。cityとboy、それぞれyの前の文字を見てみて。何が来てるかな？' },
      { speaker: 's1', line: 'cityは「t」だから子音字……boyは「o」だから、母音字ですか？' },
      { speaker: 't', line: 'その通り！子音字+yで終わる語（city、baby等）は、yをiに変えてesをつける。でも母音字+yで終わる語（boy、day等）は、そのままsをつけるだけでいい。子音字と母音字、どちらが前にあるかで変わるんだ。' },
      { speaker: 's2', line: 'じゃあ、bus→buses、watch→watchesはなんでesがつくんですか？' },
      { speaker: 't', line: 'いい質問！bus、watchを発音してみて。最後の音、sをそのままつけたら言いやすいと思う？' },
      { speaker: 's1', line: '「バスス」……たしかに言いにくいです。s/o/x/ch/shで終わる語は、esをつけないと発音しにくいから、ということですか？' },
      { speaker: 't', line: 'その通り！これも発音のしやすさが理由なんだ。じゃあ、leaf→leaves、knife→knivesは、fやfeがvに変わってるよね。これはなぜだと思う？' },
      { speaker: 's2', line: 'うーん、これは発音のしやすさとは違う気がします……何か別の理由があるんですか？' },
      { speaker: 't', line: 'いいところに気づいた！これは英語の歴史的な音の変化が理由で、発音のルールとはまた別の仲間として覚える必要がある。ただし roof→roofsのような例外もあるので要注意。①-s②-es（s/o/x/ch/sh）③子音字+y→ies④f/fe→ves（例外あり）、この4パターンを整理して覚えれば、つづりで迷わなくなるよ。', emphasis: true },
    ],
  },

  eigo_02_daimeishi_manga: {
    id: 'eigo_02_daimeishi_manga',
    panels: [
      { speaker: 's1', line: '「This is (my / mine) book.」って問題、myとmineどっちを選べばいいのか、いつも迷います……。' },
      { speaker: 't', line: 'いい質問。まず、myとmineって、それぞれどんな役目の言葉だったか覚えてる？' },
      { speaker: 's2', line: 'myは「〜の」で、名詞の前に置く言葉……mineは「〜のもの」で、名詞の代わりになる言葉、でしたよね？' },
      { speaker: 't', line: 'その通り！じゃあ、「This is ( ) book.」の空らんのあと、何が続いてる？' },
      { speaker: 's1', line: '「book」……名詞が続いてます！' },
      { speaker: 't', line: 'その通り！myは名詞の前に置く言葉だから、後ろに名詞があるときはmyを選ぶ。じゃあ、もし「This book is ( ).」だったら、どっちを選ぶ？' },
      { speaker: 's2', line: 'この文だと、空らんのあとに名詞がありません……ということは、名詞の代わりをするmineを選ぶんですか？' },
      { speaker: 't', line: 'その通り！「うしろに名詞があるかどうか」を見れば、myとmineは迷わず選べる。同じように、目的格（me/him/her等）はどこで使うか覚えてる？' },
      { speaker: 's1', line: '動詞や前置詞のあと……「She loves him.」とか「This is for us.」みたいな形ですよね。' },
      { speaker: 't', line: 'その通り！①主語の位置なら主格（he/she）②名詞の前なら所有格（his/her）③動詞・前置詞のあとなら目的格（him/her）④名詞の代わりになるなら所有代名詞（his/hers）、この4つの位置を意識すれば、格変化の表を丸暗記しなくても、その場で正しい形を選べるようになるよ。', emphasis: true },
    ],
  },

  eigo_02_shiji_daimeishi_manga: {
    id: 'eigo_02_shiji_daimeishi_manga',
    panels: [
      { speaker: 's2', line: 'this・that・these・thoseの使い分け、近い遠いは分かるんですけど、単数か複数かも一緒に考えないといけなくて、混乱します……。' },
      { speaker: 't', line: 'いい悩みだね。実は、この4つは「近い・遠い」と「単数・複数」の2つの軸が組み合わさっているだけなんだ。thisとthese、どっちが近くて、どっちが複数だと思う？' },
      { speaker: 's1', line: 'thisは近くて単数、theseは近くて複数……ですか？' },
      { speaker: 't', line: 'その通り！じゃあthatとthoseは？' },
      { speaker: 's2', line: 'thatは遠くて単数、thoseは遠くて複数、ということですね。表にすると分かりやすいです。' },
      { speaker: 't', line: 'その通り！2×2の表で整理すれば、4つ丸暗記しなくても組み合わせで出てくる。じゃあ、「I need a pen. Do you have one?」の「one」は何を指してると思う？' },
      { speaker: 's1', line: '「a pen」のことですよね。でも、さっき聞いた特定の「そのペン」とは違う気がします……。' },
      { speaker: 't', line: 'いいところに気づいた！oneは「不特定」の代用、つまり「同じ種類のペンなら何でもいい」という意味。もし「it」を使うと、「(さっき話した)そのペン」という特定のものを指すことになる。どっちを使うかで意味が変わってしまうんだ。' },
      { speaker: 's2', line: 'じゃあ、one/another/the otherは、全部で3つのときだけ使う言い方、って聞いたんですけど、なんで数が決まってるんですか？' },
      { speaker: 't', line: 'いい質問！oneで1つ選んで、anotherで「（残りの中の）別の1つ」を選んで、最後にthe otherで「もう残っていない、最後の1つ」を指す。全部で3つなら、1つ・1つ・最後の1つと数えきれるからこの言い方になる。4つ以上だと「最後の1つ」に決まらないから、someとthe othersを使うんだ。近い/遠い・単数/複数・特定/不特定・残りの数、それぞれの「軸」を意識すると、代名詞は暗記じゃなく理屈で選べるようになるよ。', emphasis: true },
    ],
  },

  eigo_15_joutaidoushi_manga: {
    id: 'eigo_15_joutaidoushi_manga',
    panels: [
      { speaker: 's1', line: '「I am liking this song.」って書いたら×でした。「好き」って気持ちが今も続いてるから、進行形でもいいと思ったんですけど……。' },
      { speaker: 't', line: 'いいところに気づいたね。まず、進行形（-ing）って、どんな動作を表す形だったか覚えてる？' },
      { speaker: 's2', line: 'たしか「今している途中の動作」……「途中で始まって途中で終わる、一時的な動作」って習いました。' },
      { speaker: 't', line: 'その通り！じゃあ、「好き」という気持ちに、「始まる瞬間」と「終わる瞬間」って、はっきりあると思う？' },
      { speaker: 's1', line: 'うーん……「好き」はずっと続いてる感じで、「今だけ好き」みたいな途中の動作とは、ちょっと違う気がします。' },
      { speaker: 't', line: 'その通り！likeやknowのような気持ち・認識・所有を表す動詞は、「ずっと続く状態」であって「途中の動作」じゃない。だから進行形にしないんだ。じゃあ、「I am having lunch now.」の「have」はどうかな？これも状態動詞のはずだよね？' },
      { speaker: 's2', line: 'あ、でもこの「have」は「持っている」じゃなくて、「食べる」という意味……ですよね？' },
      { speaker: 't', line: 'その通り！haveには「持っている」（状態）と「食べる・過ごす」（動作）の2つの意味がある。「食べる」の意味のときは、ちゃんと動作だから進行形にできる。じゃあ、「I am thinking about my future.」の「think」も同じ理屈で説明できる？' },
      { speaker: 's1', line: 'はい！「〜と思う」という意見（状態）じゃなくて、「今まさに考え中」という動作の意味だから、進行形にできる、ということですね。' },
      { speaker: 't', line: 'その通り！①その動詞が「ずっと続く状態」か「途中で始まって終わる動作」かを見分ける②同じ単語でも意味によって使い分けが変わることがある、この2つを意識すれば、状態動詞のひっかけ問題に強くなれるよ。', emphasis: true },
    ],
  },

  eigo_10_can_manga: {
    id: 'eigo_10_can_manga',
    panels: [
      { speaker: 's2', line: '「She can speaks English.」って書いたら×でした。sheは三人称単数だから、sをつけるのが正しいと思ったんですけど……。' },
      { speaker: 't', line: 'いい質問。実はこれ、do/doesの否定文で習った考え方が、そのまま使えるんだ。canって、どういう働きをする言葉だったっけ？' },
      { speaker: 's1', line: '「動詞を助ける」言葉……「助動詞」でしたよね。「〜できる」という意味を付け加える言葉です。' },
      { speaker: 't', line: 'その通り！じゃあ、時制や人称の情報は、canとうしろの動詞、どっちが持っていると思う？' },
      { speaker: 's2', line: 'canの方……ということは、うしろの動詞にはもう情報を足す必要がない、ということですか？' },
      { speaker: 't', line: 'その通り！助動詞が「時制や人称の情報」をすべて持っているから、うしろの動詞は変化しない原形のまま。「She can speak English.」が正解なんだ。' },
      { speaker: 's1', line: 'あ、これって「does not likeの動詞が原形に戻る」のと、まったく同じ理由ですね！' },
      { speaker: 't', line: 'その通り！助動詞（can/do/does/will/must等）がついたら、うしろの動詞は必ず原形。この1つのルールが、たくさんの助動詞に共通して使えるんだ。じゃあ、疑問文はどうやって作ると思う？' },
      { speaker: 's2', line: 'canを文の最初に出す……「Can you play the guitar?」みたいな形ですか？' },
      { speaker: 't', line: 'その通り！助動詞は主語の前に出すだけでいい。①動詞を助ける役目②うしろの動詞はいつも原形③疑問文は前に出すだけ、この3つを覚えれば、can以外の助動詞（will/must/should）にもそのまま応用できるよ。', emphasis: true },
    ],
  },

  eigo_12_zenchishi_manga: {
    id: 'eigo_12_zenchishi_manga',
    panels: [
      { speaker: 's1', line: 'atとonとinの使い分け、いつも感覚でなんとなく選んでます。「at Monday」って書いたら×でした……。' },
      { speaker: 't', line: 'いいところに気づいたね。実はこの3つ、「範囲の広さ」で決まるんだ。「at seven」（7時に）、これって時間の幅、広い？狭い？' },
      { speaker: 's2', line: '7時ちょうど……すごく狭い、1つの点みたいな感じです。' },
      { speaker: 't', line: 'その通り！atは「時の一点」を表す。じゃあ、「on Monday」（月曜日に）は、7時に比べてどうかな？' },
      { speaker: 's1', line: '1日全体だから……atよりは広いけど、まだ「特定の1日」という感じがします。' },
      { speaker: 't', line: 'その通り！onは曜日・日付という「特定の1日」を表す。じゃあ、「in April」（4月に）は？' },
      { speaker: 's2', line: '4月って、1日どころか1か月全体……もっと広い期間ですね。' },
      { speaker: 't', line: 'その通り！「点（at）→特定の日（on）→広い期間（in）」と、範囲が狭い方から広い方へ並んでいるんだ。じゃあ、forとduringはどう使い分ける？「for two hours」と「during two hours」、どっちが正しい？' },
      { speaker: 's1', line: 'たしか、duringのあとには数字じゃなくて、名詞が来るんでしたよね。「for two hours」が正解ですか？' },
      { speaker: 't', line: 'その通り！forは「10年間」のような数字を含む期間、duringは「夏休みの間」のような名詞で示す特定の期間。最後にby/untilも同じ発想で見分けられる。byは「終わらせる動作（finish/submit）」の期限、untilは「続ける状態（wait/stay）」の終わり。動詞が完了する動作か、続く状態かを見れば、byかuntilかも迷わなくなるよ。', emphasis: true },
    ],
  },

  eigo_13_hikaku_manga: {
    id: 'eigo_13_hikaku_manga',
    panels: [
      { speaker: 's2', line: '「beautifuler」って書いたら×でした。tall→tallerみたいに、-erをつければいいと思ったんですけど……。' },
      { speaker: 't', line: 'いいところに気づいたね。まず、tallとbeautifulを発音してみて。それぞれ、音のかたまり（音節）はいくつあると思う？' },
      { speaker: 's1', line: 'tallは「トール」で1つ……beautifulは「ビュー・ティ・フル」で3つ、ですか？' },
      { speaker: 't', line: 'その通り！実は、この音節の数が-erをつけるか、moreをつけるかを決めているんだ。tallのような1音節の短い語には-er/-estをそのままつける。じゃあ、beautifulのような3音節以上の長い語に-erをつけると、発音しにくくなると思う？' },
      { speaker: 's2', line: '「ビューティフラー」……たしかに、すごく言いにくいです。' },
      { speaker: 't', line: 'その通り！長い語は発音しにくくなるから、前にmoreを置いて「more beautiful」とする。-er/-estと同じ役目を、moreとmostが肩代わりしているんだ。じゃあ、2音節の語（happy、modernなど）はどっちを使うと思う？' },
      { speaker: 's1', line: 'ちょうど1音節と3音節の中間……ということは、語によって決まる、ということですか？' },
      { speaker: 't', line: 'その通り！happyのように-yや-er/-ow/-leで終わる2音節語は-er/-estが多く（happier）、それ以外はmore/mostが多い（more modern）。音節の数という1つのものさしで考えれば、丸暗記に頼らずに済む語がぐっと増えるよ。①音節を数える②1音節→-er/-est③3音節以上→more/most④2音節は語尾で判断、この4ステップを覚えておこう。', emphasis: true },
    ],
  },
};
