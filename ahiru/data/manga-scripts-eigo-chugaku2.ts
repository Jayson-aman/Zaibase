// 中学受験英語（文法基礎、第2弾）：討論・探求型マンガ
import type { MangaScript } from './manga-types';

export const mangaScriptsEigoChugaku2: Record<string, MangaScript> = {
  eigo_01_bunkeigo_manga: {
    id: 'eigo_01_bunkeigo_manga',
    panels: [
      { speaker: 's2', line: '「He gave me a book.」と「She made me happy.」、どっちも「動詞＋me＋何か」の形なのに、文型が違うって言われて混乱してます。' },
      { speaker: 't', line: 'いい質問。まず、「gave me a book」の「me」と「a book」って、同じもの？別のもの？' },
      { speaker: 's1', line: '「私」と「本」……全然別のものですよね。' },
      { speaker: 't', line: 'その通り！これがSVOO（第4文型）。「Sが人にものをVする」という形で、2つの目的語は別々のものを指す。じゃあ、「made me happy」の「me」と「happy」は、同じ？別？' },
      { speaker: 's2', line: 'えっと……「私」が「幸せ」な状態になった、ということだから……「私＝幸せ」という関係になっている、ということですか？' },
      { speaker: 't', line: 'その通り！これがSVOC（第5文型）。O＝Cの関係が成り立つのが特徴。「me＝happy」なら、meは「幸せな私」を表している。じゃあ、この2つを見分けるには、何を確認すればいい？' },
      { speaker: 's1', line: '動詞のあとの2つが、「別々のもの」なのか「イコールの関係」なのか、を確認すればいいんですね。' },
      { speaker: 't', line: 'その通り！「A＝B」と言えるならSVOC、言えなければSVOO。じゃあ、「She is kind.」はどうかな？動詞のあとは1つだけだよね。「she＝kind」と言える？' },
      { speaker: 's2', line: '「彼女＝親切」……言えますね。でもこれは目的語じゃなくて、補語（C）なので、SVC（第2文型）になるんですか？' },
      { speaker: 't', line: 'その通り！①動詞のあとに何もない→SV②1つだけあって主語とイコール→SVC③1つだけあって動作の対象→SVO④2つあって別々のもの→SVOO⑤2つあってイコールの関係→SVOC、この5段階のテストで、どんな文でも文型を見分けられるようになるよ。', emphasis: true },
    ],
  },

  eigo_05_setsuzokushi_manga: {
    id: 'eigo_05_setsuzokushi_manga',
    panels: [
      { speaker: 's1', line: '「If it will be sunny tomorrow, I will go swimming.」って書いたら×でした。明日のことだから未来形でいいと思ったんですけど……。' },
      { speaker: 't', line: 'いいところに気づいたね。まず、この文全体は、未来のことを言っているよね？' },
      { speaker: 's2', line: 'はい、「明日晴れたら」だから、未来の話ですよね。' },
      { speaker: 't', line: 'その通り！じゃあ、この文には「if」から始まる部分と、「I will go swimming」の部分、2つあるよね。すでにwillが使われているのはどっち？' },
      { speaker: 's1', line: '後ろの「I will go swimming」の方に、willがついてます。' },
      { speaker: 't', line: 'その通り！じゃあ、「if」の部分（条件を表す部分）にも、もう一度willをつける必要があると思う？' },
      { speaker: 's2', line: 'うーん……全体が未来のことだと、もう分かっているから、if の部分にはwillをつけなくてもいいんですか？' },
      { speaker: 't', line: 'その通り！時や条件を表す副詞節（if・when等で始まる部分）では、未来のことでも現在形を使う、という特別なルールがあるんだ。「If it is sunny tomorrow」が正解。じゃあ、「When she comes, please tell me.」も同じ理由で説明できる？' },
      { speaker: 's1', line: 'はい！「彼女が来る」のは未来のことだけど、whenの節の中だから、現在形（comes）を使う、ということですね。' },
      { speaker: 't', line: 'その通り！このルールは入試で最も問われる時制の落とし穴の1つ。「メインの文にwillがあるから、if/whenの中は現在形でいい」——このセットで覚えておこう。ちなみにalthough（〜だけれども）は、butと一緒に使わないことも覚えておこう。「Although〜, but〜」は間違いだよ。', emphasis: true },
    ],
  },

  eigo_09_whywhichwhose_manga: {
    id: 'eigo_09_whywhichwhose_manga',
    panels: [
      { speaker: 's2', line: '「What is your bag, this one or that one?」って書いたら×でした。「どれ」って聞きたいときはwhatでいいと思ったんですけど……。' },
      { speaker: 't', line: 'いいところに気づいたね。この文には「this one or that one」って続いているよね。これは何を表していると思う？' },
      { speaker: 's1', line: '「これ、それとも、あれ」……選べる選択肢が、具体的に示されている、ということですか？' },
      { speaker: 't', line: 'その通り！whatは「何」を漠然と聞くときに使うけど、「AそれともB」というふうに、選べる選択肢がすでに示されているときは、whichを使うんだ。「Which is your bag, this one or that one?」が正解。' },
      { speaker: 's2', line: 'じゃあ、whyで聞かれたら、答え方は何かルールがあるんですか？' },
      { speaker: 't', line: 'いい質問！why（なぜ）には、2通りの答え方がある。1つはBecause＋主語＋動詞で理由を言う。もう1つはTo＋動詞の原形で目的を言う。「Why do you study hard? — To be a doctor.」のように。' },
      { speaker: 's1', line: 'whoseはどう使うんですか？' },
      { speaker: 't', line: 'whoseは「だれの」と持ち主を聞く言葉。「Whose pen is this? — It\'s mine.」のように答える。じゃあ、whatとwhichの使い分け、まとめてみよう。選択肢が示されているかどうかで、どっちを使うか決まるんだったよね？' },
      { speaker: 's2', line: 'はい！選択肢が無ければwhat、選択肢が示されていればwhich、ということですね。' },
      { speaker: 't', line: 'その通り！①選択肢の有無でwhat/whichを判断する②whyの答えはBecauseかTo〜③whoseは持ち主を聞く、この3つを押さえれば、疑問詞の使い分けで迷わなくなるよ。', emphasis: true },
    ],
  },

  eigo_09_fukagimonbun_manga: {
    id: 'eigo_09_fukagimonbun_manga',
    panels: [
      { speaker: 's1', line: '「You are a student, isn\'t it?」って書いたら×でした。付加疑問文って、なんで文の最後にもう1回疑問文をつけるんですか？' },
      { speaker: 't', line: 'いい質問。付加疑問文は「〜だよね？」と、相手に念を押すための表現なんだ。まず、この文の主語は何？' },
      { speaker: 's2', line: '「You」ですよね。' },
      { speaker: 't', line: 'その通り！じゃあ、付加疑問の部分の主語は、もとの文の主語と同じ言葉を使う？それとも代名詞に変える？' },
      { speaker: 's1', line: '代名詞に変える……ということは、「You」なら「you」のまま（もう代名詞）だけど、もし「Tom」だったら「he」に変える、ということですか？' },
      { speaker: 't', line: 'その通り！じゃあ、「it」を使ったのが間違いだった理由、分かる？主語は「You（あなた）」なのに、「it」を使ったら、何を指すことになる？' },
      { speaker: 's2', line: 'あ、「it」は「それ」だから……主語の「あなた」とは全然関係ない言葉になっちゃいますね。' },
      { speaker: 't', line: 'その通り！主語に対応する代名詞を使わないといけない。「You are a student」の主語はyouだから、付加疑問もyouを使う。じゃあ、前の文が肯定文（are）のとき、付加疑問はどうする？' },
      { speaker: 's1', line: '前が肯定だから……後ろは否定にする、ということですよね。「aren\'t you?」が正解ですか？' },
      { speaker: 't', line: 'その通り！①前の文の動詞（be動詞／do・does／助動詞）と同じ種類を使う②肯定と否定を逆にする③主語を代名詞に変える、この3ステップを守れば、付加疑問文はどんな文にも正しくつけられるようになるよ。', emphasis: true },
    ],
  },

  eigo_10_willmust_manga: {
    id: 'eigo_10_willmust_manga',
    panels: [
      { speaker: 's2', line: '「You must not run here.」と「You don\'t have to run here.」、どっちも「must」に関係するから、似たような意味だと思ってたんですけど、違うんですか？' },
      { speaker: 't', line: 'いい質問。まず、「must not」ってどういう意味だったっけ？' },
      { speaker: 's1', line: '「〜してはいけない」……禁止、ですよね。' },
      { speaker: 't', line: 'その通り！じゃあ、「must not run here」は、走ることについて何を言っている？' },
      { speaker: 's2', line: 'ここで走ることを、禁止している……走ってはいけない、ということですね。' },
      { speaker: 't', line: 'その通り！じゃあ、「don\'t have to」はどんな意味だったっけ？' },
      { speaker: 's1', line: '「〜しなくてよい」……不要、という意味でしたよね。' },
      { speaker: 't', line: 'その通り！じゃあ、「don\'t have to run here」は、走ることについて何を言っている？' },
      { speaker: 's2', line: '走らなくてもいい、ということ……あれ、これって「走ってもいい」ということですよね？「must not」の「禁止」とは、意味が正反対じゃないですか？' },
      { speaker: 't', line: 'その通り！「must not」は禁止（してはいけない）、「don\'t have to」は不要（しなくてよい、してもいい）。この2つは正反対の意味なのに、形が似ているから、入試で頻出のひっかけになっているんだ。①must not＝禁止②don\'t have to＝不要、この対の意味をセットで覚えれば、絶対に混同しなくなるよ。', emphasis: true },
    ],
  },

  eigo_12_bashozenchishi_manga: {
    id: 'eigo_12_bashozenchishi_manga',
    panels: [
      { speaker: 's1', line: '天井の電球が「on the ceiling」って習ったんですけど、電球は天井の下にぶら下がってるのに、なんで「on」（上）を使うんですか？' },
      { speaker: 't', line: 'いい質問。実は「on」は「上にある」という意味じゃないんだ。onが本当に表しているのは、何だと思う？' },
      { speaker: 's2', line: 'えっと……何かに「くっついている」「接している」ということですか？' },
      { speaker: 't', line: 'その通り！onは「面に接している」ことを表す言葉。じゃあ、電球は天井にくっついている？' },
      { speaker: 's1', line: 'あ、たしかに……電球は天井の面に取りつけられて、接していますよね。だから「on the ceiling」なんですね！' },
      { speaker: 't', line: 'その通り！壁のポスターも同じ理屈で「on the wall」。じゃあ、「in the box」の「in」は、何を表していると思う？' },
      { speaker: 's2', line: '箱の「中」に入っている……広がりのある空間の中にある、ということですか？' },
      { speaker: 't', line: 'その通り！じゃあ、「at the station」の「at」は？' },
      { speaker: 's1', line: '駅という場所……広さのある空間というより、地図上の1つの点、というイメージですか？' },
      { speaker: 't', line: 'その通り！①in＝広がりのある空間の中②on＝面への接触③at＝地図上の点、この3つのイメージさえ持っていれば、「上か下か」という日本語の感覚に引っぱられずに、正しい前置詞を選べるようになるよ。', emphasis: true },
    ],
  },

  eigo_14_thereisare_manga: {
    id: 'eigo_14_thereisare_manga',
    panels: [
      { speaker: 's2', line: '「There is three books on the desk.」って書いたら×でした。「本が3冊ある」だから複数だと思うんですけど、なんでThereのあとはisになるはずだって思っちゃうんですか？' },
      { speaker: 't', line: 'いいところに気づいたね。まず、「There is/are」構文の「there」って、「そこに」という意味を持ってると思う？' },
      { speaker: 's1', line: 'あれ……日本語に訳すときは「そこに」を入れないですよね。じゃあ、thereには特に意味がないんですか？' },
      { speaker: 't', line: 'その通り！これは「形式主語」と呼ばれるもので、意味を持たない、形だけの主語なんだ。じゃあ、本当の主語は、この文のどこにあると思う？' },
      { speaker: 's2', line: 'is/areのあとにある名詞……「three books」の方が、本当の主語ということですか？' },
      { speaker: 't', line: 'その通り！ということは、is/areは、どちらの数に合わせればいい？thereの方？それとも、あとの名詞の方？' },
      { speaker: 's1', line: 'あとの名詞……「three books」は複数だから、areを使わないといけない、ということですね！' },
      { speaker: 't', line: 'その通り！「There are three books on the desk.」が正解。じゃあ、本当の場所（on the desk）は、文のどこに置かれているか気づいた？' },
      { speaker: 's2', line: '文の最後、ですね。thereは意味を持たない代わりに、本当の場所が最後に置かれているんですね。' },
      { speaker: 't', line: 'その通り！①thereは意味を持たない形式主語②本当の主語はis/areのあとの名詞③is/areはその名詞の数に合わせる④本当の場所は文の最後、この4つを理解すれば、「なぜthereなのにthereに合わせないのか」がすっきり分かるようになるよ。', emphasis: true },
    ],
  },

  eigo_s174_shall_manga: {
    id: 'eigo_s174_shall_manga',
    panels: [
      { speaker: 's1', line: '「Shall I open the window? — Yes, let\'s.」って書いたら×でした。誘われたら「そうしましょう」でいいと思ったんですけど……。' },
      { speaker: 't', line: 'いいところに気づいたね。まず、「Shall I open the window?」の主語は誰？' },
      { speaker: 's2', line: '「I」……私、ですよね。' },
      { speaker: 't', line: 'その通り！じゃあ、これは「私が窓を開けましょうか」と、誰が窓を開けると言っている？' },
      { speaker: 's1', line: '「私」が、開ける……ということは、相手を誘っているわけじゃなくて、自分から手伝いを申し出ている、ということですか？' },
      { speaker: 't', line: 'その通り！じゃあ、「let\'s」ってどういう意味だったっけ？' },
      { speaker: 's2', line: '「いっしょにしよう」……という意味ですよね。' },
      { speaker: 't', line: 'その通り！でも、「Shall I」は「私が1人で」やることを申し出ているのに、「let\'s」で答えたら、何がおかしくなる？' },
      { speaker: 's1', line: 'あ、「いっしょに」やる話になってしまう……でも、もともと「私が」やる話だったから、かみ合わなくなりますね。' },
      { speaker: 't', line: 'その通り！だから「Shall I」には「Yes, please.」か「No, thank you.」で答える。①主語がIかweかを確認する②「Shall I」は自分が1人でやる申し出③「let\'s」で答えるのは「Shall we」のとき、この違いを押さえれば、会話問題で取りちがえなくなるよ。', emphasis: true },
    ],
  },

  eigo_s312_forhito_manga: {
    id: 'eigo_s312_forhito_manga',
    panels: [
      { speaker: 's2', line: '「It is easy for me to swim.」の「for me」、なんで「to swim」の前にあるんですか？位置を変えたらダメなんですか？' },
      { speaker: 't', line: 'いい質問。まず、この文で、実際に泳ぐのは誰だと思う？' },
      { speaker: 's1', line: '「私」……ですよね。' },
      { speaker: 't', line: 'その通り！つまり「for me」は、to swim（泳ぐという動作）を実際にする人を示しているんだ。じゃあ、「it is easy for me to swim」を日本語にするとき、「わたしにとって泳ぐことは簡単だ」と「わたしが泳ぐことは簡単だ」、どっちがより正確だと思う？' },
      { speaker: 's2', line: 'えっと……「for」だから「〜にとって」だと思ってましたけど、「わたしが泳ぐ」の方が、実際の意味に近いんですか？' },
      { speaker: 't', line: 'その通り！for のあとの人は、不定詞の動作をする人（意味上の主語）なんだ。「わたしにとって」よりも「わたしが」と考えた方が、しくみが分かりやすい。じゃあ、位置はどこに置くのが正しかった？' },
      { speaker: 's1', line: '「形容詞のあと、toの前」……「It is easy for me to swim.」の順番ですよね。' },
      { speaker: 't', line: 'その通り！「It is for me easy to swim.」のように、easyの前にforを置くのは間違い。①for＋人は不定詞の動作をする人（意味上の主語）②位置は必ず形容詞のあと・toの前③代名詞は目的格（for me/for him）を使う、この3つを押さえれば、意味上の主語を正しく使いこなせるようになるよ。', emphasis: true },
    ],
  },
};
