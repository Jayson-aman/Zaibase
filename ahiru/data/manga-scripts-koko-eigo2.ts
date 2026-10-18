// 高校受験英語（文法基礎、第2弾）：討論・探求型マンガ
import type { MangaScript } from './manga-types';

export const mangaScriptsKokoEigo2: Record<string, MangaScript> = {
  koko_eigo_s127_genzaikanryoshinkoukei_manga: {
    id: 'koko_eigo_s127_genzaikanryoshinkoukei_manga',
    panels: [
      { speaker: 's1', line: '「I have written a letter.」と「I have been writing a letter.」、どっちも手紙を書いてる文なのに、なんで形が違うんですか？' },
      { speaker: 't', line: 'いい質問。まず、「I have written a letter.」は、手紙は書き終わってる？それとも、まだ途中？' },
      { speaker: 's2', line: '「書いた」という感じだから……もう書き終わってますよね。' },
      { speaker: 't', line: 'その通り！じゃあ、「I have been writing a letter.」はどう？' },
      { speaker: 's1', line: '「書いている」……ということは、まだ書き終わってなくて、今も書いている途中、ということですか？' },
      { speaker: 't', line: 'その通り！現在完了進行形は「まだ終わっていない、続いている最中」を表す。じゃあ、なぜ進行形（-ing）を使うと、「途中」だと分かるんだと思う？' },
      { speaker: 's2', line: 'えっと……進行形って、もともと「今まさにしている最中」を表す形ですよね。だから完了形と組み合わさっても、「続いている最中」というニュアンスが残る、ということですか？' },
      { speaker: 't', line: 'その通り！じゃあ、「I have read fifty pages so far.」（これまで50ページ読んだ）を、進行形にして「I have been reading fifty pages.」と言ったら、自然？不自然？' },
      { speaker: 's1', line: '「50ページ」って、もう読み終わった量ですよね……ということは、これは完了、成果を表しているから、進行形とは合わない、ということですか？' },
      { speaker: 't', line: 'その通り！完了した量を言うときは、進行形ではなく現在完了を使う。①「今この瞬間もやっているか」→進行形②「量・回数・成果」を言いたいか→完了形、この判断基準を持っておけば、同じ動詞でもどちらの形を使うべきか迷わなくなるよ。', emphasis: true },
    ],
  },

  koko_eigo_07_katei_manga: {
    id: 'koko_eigo_07_katei_manga',
    panels: [
      { speaker: 's2', line: '「If I were you, I would study harder.」って、過去形（were）を使ってるのに、意味は今のことですよね？なんで過去形なんですか？' },
      { speaker: 't', line: 'いい質問。まず、この文が表しているのは、現実に起きていること？それとも、現実とは違う想像？' },
      { speaker: 's1', line: '「もし私があなたなら」……現実には、私はあなたじゃないから、現実とは違う想像ですよね。' },
      { speaker: 't', line: 'その通り！じゃあ、「現実とは違う」ということを、英語ではどうやって表すと思う？時制を、現実からどれくらいずらせばいい？' },
      { speaker: 's2', line: 'えっと……現実（現在）から、1つ前の時制、つまり過去形にずらす、ということですか？' },
      { speaker: 't', line: 'その通り！これが仮定法過去のしくみ。形は過去形だけど、意味は現在のこと。「時制を1つ後ろにずらすことで、現実からの距離を表している」んだ。じゃあ、be動詞のときは、主語がIでもheでも、何を使うのが原則だったっけ？' },
      { speaker: 's1', line: 'wereを使う、ですよね。「If I were you」のように。' },
      { speaker: 't', line: 'その通り！じゃあ、「If it rains tomorrow, I will stay home.」という文と比べてみよう。これは仮定法？それとも、ただの条件文？' },
      { speaker: 's2', line: 'これは……明日雨が降る可能性は普通にあるから、現実に反する仮定じゃなくて、ただの条件（直説法）ですよね。動詞も現在形のままです。' },
      { speaker: 't', line: 'その通り！①現実に反する空想か、実現しうる条件か、をまず見分ける②現実に反するなら時制を1つ過去にずらす（意味は現在のまま）③be動詞はwereが原則、この3つを押さえれば、なぜ過去形で現在のことを表すのか、丸暗記せずに理解できるようになるよ。', emphasis: true },
    ],
  },

  koko_eigo_07_wahou_manga: {
    id: 'koko_eigo_07_wahou_manga',
    panels: [
      { speaker: 's1', line: '「She said, "I will meet you here tomorrow."」を間接話法に直したら、「She said that she would meet me there the next day.」になるって言われて、なんで全部変わるのか分かりません。' },
      { speaker: 't', line: 'いい質問。まず、「I」という言葉は、誰が話したときに使う言葉？' },
      { speaker: 's2', line: '話している本人……つまり「she」自身が、自分のことを指すときに使いますよね。' },
      { speaker: 't', line: 'その通り！でも、それを私たちが伝えるとき、「I」のままだと、誰を指しているか分からなくなるよね？' },
      { speaker: 's1', line: 'あ、だから「I」を「she」に変えて、誰のことか分かるようにする、ということですか？' },
      { speaker: 't', line: 'その通り！これが代名詞の視点の転換。じゃあ、「will」が「would」に変わっているのはなぜだと思う？「said」という伝達動詞は、過去形だよね？' },
      { speaker: 's2', line: '伝達動詞が過去だから……発言の中の動詞も、1つ過去にずらす（時制の一致）、ということですか？' },
      { speaker: 't', line: 'その通り！じゃあ、「here」が「there」に変わって、「tomorrow」が「the next day」に変わっているのはなぜ？' },
      { speaker: 's1', line: 'あ……「ここ」「明日」というのは、話した本人（その場・その時）にとっての言葉ですよね。それを、あとで別の場所・別の時に伝えるときは、その言葉のままだと意味がずれてしまう、ということですか？' },
      { speaker: 't', line: 'その通り！話し手の立場・時制・場所、すべてが伝える側の視点に合わせてずれる。だから①代名詞②時制③副詞・指示語、この3つがセットで変わるんだ。1つ1つはバラバラに見えるけど、根っこは「発言を、伝える側の視点に置き換える」という1つの原理から来ているんだよ。', emphasis: true },
    ],
  },

  koko_eigo_s065_naze_manga: {
    id: 'koko_eigo_s065_naze_manga',
    panels: [
      { speaker: 's2', line: '「My mother made me to clean my room.」って書いたら×でした。madeのあとにtoをつけちゃダメなんですか？' },
      { speaker: 't', line: 'いいところに気づいたね。まず、makeやsee、hearのような動詞は、「Oが〜する」という出来事を、どんな感じで表していると思う？目の前で起きていること？それとも、これから起きること？' },
      { speaker: 's1', line: '「見る」「聞く」「させる」……どれも、目の前でその出来事がそのまま起きている、という感じがします。' },
      { speaker: 't', line: 'その通り！だから「Oが〜する」という主語・述語の関係を、動詞の原形でじかに置くんだ。じゃあ、wantやtellはどう？「私は彼に来てほしい」って、今すでに起きていること？' },
      { speaker: 's2', line: 'いえ……これから起きてほしいこと、未来に向かう感じですよね。' },
      { speaker: 't', line: 'その通り！未来へ向かう意味だから、toという「向かう先」を示す言葉が必要になる。じゃあ、make・let・have（使役動詞）とsee・hear・feel（知覚動詞）、この2つのグループは、to無しの原形を取ると覚えていい？' },
      { speaker: 's1', line: 'はい、その通りだと思います。' },
      { speaker: 't', line: 'その通り！じゃあ、受け身にすると「I was made to clean the room.」のように、toが現れるのはなぜだと思う？' },
      { speaker: 's2', line: 'えっと……受け身にすると「させられて→掃除する」という、向かっていく感じが出てくるから、toが必要になる、ということですか？' },
      { speaker: 't', line: 'その通り！①目の前の出来事として直接置く動詞（make/let/have/see/hear/feel）→原形②これからの動作へ向かう動詞（want/tell/ask）→to、この2つのグループの「意味のちがい」から理解すれば、丸暗記せずに使い分けられるようになるよ。', emphasis: true },
    ],
  },

  koko_eigo_02_kankeifukushi_manga: {
    id: 'koko_eigo_02_kankeifukushi_manga',
    panels: [
      { speaker: 's1', line: '関係副詞のwhereとかwhenって、関係代名詞のwhichと何が違うんですか？' },
      { speaker: 't', line: 'いい質問。まず、「the city where I was born」を、関係代名詞を使って言いかえると、「the city in which I was born」になるよね。この2つ、意味は同じ？' },
      { speaker: 's2', line: 'はい、同じだと思います。' },
      { speaker: 't', line: 'その通り！ということは、「where」は、何と何をまとめて1語にしたものだと思う？' },
      { speaker: 's1', line: 'あ……「in which」（前置詞＋which）を、1語にまとめたのが「where」ということですか？' },
      { speaker: 't', line: 'その通り！関係副詞は「先行詞＋前置詞＋which」を1語で表しているんだ。じゃあ、「the reason why he left」の「why」は、何をまとめたものだと思う？' },
      { speaker: 's2', line: '「for which」（理由を表す前置詞＋which）を1語にしたもの、ということですか？' },
      { speaker: 't', line: 'その通り！じゃあ、「the way how I study」って言ってもいいと思う？' },
      { speaker: 's1', line: 'えっと……howも「in which」をまとめたものだとしたら、the wayと一緒に使うと、意味が重なってしまう、ということですか？' },
      { speaker: 't', line: 'その通り！「the way」と「how」は、両方とも「方法」を表すから、一緒に使ってはいけない。「the way I study」か「how I study」、どちらか一方だけを使う。①関係副詞は前置詞＋whichの圧縮形②同じ意味を持つ言葉（the wayとhow）を重ねない、この2つを理解すれば、関係副詞の使い方がすっきり分かるようになるよ。', emphasis: true },
    ],
  },

  koko_eigo_10_fukagimon_manga: {
    id: 'koko_eigo_10_fukagimon_manga',
    panels: [
      { speaker: 's2', line: '「Don\'t you like coffee?」って聞かれて、コーヒーが好きなときに「No, I don\'t.」って答えたら間違いだって言われました。日本語だと「いいえ、好きです」って答えそうなのに、なんで英語だとダメなんですか？' },
      { speaker: 't', line: 'いい質問。まず、英語のYes/Noは、質問の形（肯定か否定か）に合わせて決まると思う？それとも、答えの中身に合わせて決まる？' },
      { speaker: 's1', line: 'えっと……もしかして、答えの中身（好きか嫌いか）だけで決まる、ということですか？' },
      { speaker: 't', line: 'その通り！英語では、答えの中身が肯定（好き）ならYes、否定（嫌い）ならNo。質問が「Do you」でも「Don\'t you」でも関係ない。じゃあ、コーヒーが好きなら、何と答えればいい？' },
      { speaker: 's2', line: '好きだから……「Yes, I do.」ですか？' },
      { speaker: 't', line: 'その通り！じゃあ、付加疑問文「You are a student, aren\'t you?」を作るとき、まず何を確認する？' },
      { speaker: 's1', line: 'えっと……もとの文の動詞（be動詞かdo/doesか助動詞か）を確認する、ということですか？' },
      { speaker: 't', line: 'その通り！じゃあ、もとの文が肯定文なら、付加疑問はどうする？' },
      { speaker: 's2', line: '否定にする……ということですよね。逆にする、ということですか？' },
      { speaker: 't', line: 'その通り！①本文と同じ動詞を使う②肯定と否定を逆にする③主語を代名詞にする、この3ステップで付加疑問文が作れる。そして否定疑問文のYes/Noは、日本語の感覚を捨てて「答えの中身が肯定か否定か」だけで決める、この1点をしっかり押さえておこう。', emphasis: true },
    ],
  },

  koko_eigo_s277_sothat_manga: {
    id: 'koko_eigo_s277_sothat_manga',
    panels: [
      { speaker: 's1', line: '「This box is too heavy for me to carry.」を書きかえる問題で、「This box is so heavy that I can\'t carry.」って書いたら×でした。itが抜けてるのがダメだったみたいなんですけど、なんでtoo〜toの文にはitが要らないのに、so〜thatの文には要るんですか？' },
      { speaker: 't', line: 'いいところに気づいたね。まず、「too heavy for me to carry」の「carry」、この動詞の目的語は文中のどこにある？' },
      { speaker: 's2', line: 'えっと……「carry」の目的語は……あ、「this box」自体が、もともとの主語になってますよね。' },
      { speaker: 't', line: 'その通り！不定詞の部分（to carry）は、主語（This box）を目的語として受け止める形になっているから、あらためて目的語を書く必要がない。じゃあ、「so heavy that I can\'t carry」の「that」以下は、それ自体で完結した1つの文だよね。「I can\'t carry」だけで、意味が通ると思う？' },
      { speaker: 's1', line: 'いえ……「何を運べないのか」が抜けていて、文として不完全な感じがします。' },
      { speaker: 't', line: 'その通り！that節は独立した文だから、carryという他動詞には、目的語が必要になる。だから「I can\'t carry it.」と、itを補わないといけないんだ。じゃあ、「He was too tired to walk.」を書きかえるとき、「so tired that he couldn\'t walk it」のように、itをつけるべきだと思う？' },
      { speaker: 's2', line: 'walkは……目的語をとらない自動詞ですよね。だから、itは要らない、ということですか？' },
      { speaker: 't', line: 'その通り！①不定詞の部分は、もとの主語を目的語として受け止めているのでit不要②that節は独立した文なので、他動詞なら目的語（it等）が必要③自動詞ならitは不要、この3つのルールから、なぜ書きかえのときにitが現れたり消えたりするのかが、丸暗記せずに理解できるようになるよ。', emphasis: true },
    ],
  },

  koko_eigo_13_bunshikoubun_manga: {
    id: 'koko_eigo_13_bunshikoubun_manga',
    panels: [
      { speaker: 's1', line: '「Because she didn\'t know the way, she asked a police officer.」を「Not knowing the way, she asked a police officer.」に書きかえるとき、なぜBecauseもsheも消えていいんですか？' },
      { speaker: 't', line: 'いい質問。まず、この文の前半（Because以下）の主語と、後半の主語、同じ人物？' },
      { speaker: 's2', line: 'はい、どちらも「she」ですよね。' },
      { speaker: 't', line: 'その通り！主語が同じだから、前半のsheを省略しても、後半を読めば誰のことか分かるよね。じゃあ、接続詞（Because）を省略しても、意味は伝わると思う？' },
      { speaker: 's1', line: 'うーん……接続詞を消すと、「理由」なのか「時」なのか「条件」なのか、分からなくなりませんか？' },
      { speaker: 't', line: 'いいところに気づいた！実は、分詞構文の意味は、文脈から判断するしかないんだ。だからこそ、動詞をどう変化させるかが重要になる。「didn\'t know」を、どう変えたと思う？' },
      { speaker: 's2', line: '否定形はNotを前につけて……「Not knowing」にする、ということですか？' },
      { speaker: 't', line: 'その通り！①接続詞を省略②主節と同じ主語なら省略③動詞を-ing形にする④否定はNot/Neverを分詞の直前に置く、この4ステップ。じゃあ、「While walking in the park, I met an old friend.」のように、あえて接続詞を残す場合もあるって知ってる？なぜだと思う？' },
      { speaker: 's1', line: 'あ……接続詞を消すと意味があいまいになりそうなときは、誤解を防ぐために、あえて残しておく、ということですか？' },
      { speaker: 't', line: 'その通り！分詞構文は「省略できる」のであって、「必ず省略しなければならない」わけじゃない。意味が伝わりにくいときは、接続詞を残す判断も必要なんだ。この柔軟さを理解しておくと、分詞構文の読み書き両方に強くなれるよ。', emphasis: true },
    ],
  },

  koko_eigo_s442_zenchishi_manga: {
    id: 'koko_eigo_s442_zenchishi_manga',
    panels: [
      { speaker: 's2', line: '「We discussed about the problem.」って書いたら×でした。「〜について議論する」だから、aboutが必要だと思ったんですけど……。' },
      { speaker: 't', line: 'いいところに気づいたね。まず、discussという動詞、これは日本語の「〜について議論する」の「について」まで、意味に含んでいると思う？' },
      { speaker: 's1', line: 'あ、もしかして……discuss自体が、すでに「〜について話し合う」という意味を持っていて、aboutを付けると意味が重なってしまう、ということですか？' },
      { speaker: 't', line: 'その通り！discussは他動詞で、目的語をすぐ後ろに置ける。だからaboutは不要。じゃあ、「She married with him.」はどう？marryも同じように、他動詞として直接目的語をとる？' },
      { speaker: 's2', line: 'はい、「marry 人」で「人と結婚する」という意味になるから、withは要らない、ということですね。' },
      { speaker: 't', line: 'その通り！日本語で「〜と」「〜について」という助詞がつく動詞ほど、英語では前置詞が要らない、という逆転現象が起きるんだ。じゃあ、逆に「listen the music」のように、前置詞を省いてしまうミスもあるよね。listenは、目的語を直接とれる動詞？' },
      { speaker: 's1', line: 'いえ……listenは自動詞だから、「〜を聞く」と言うには、toという前置詞が必要になる、ということですか？' },
      { speaker: 't', line: 'その通り！①discuss/marry/reach/enter/answer/visit/attend/mentionのような動詞は、日本語の感覚に反して前置詞が要らない他動詞②listen to/wait for/look forのような動詞は、逆に前置詞が必要な自動詞、この2つのグループを対比して覚えれば、「日本語の助詞につられる」というミスを防げるようになるよ。', emphasis: true },
    ],
  },
};
