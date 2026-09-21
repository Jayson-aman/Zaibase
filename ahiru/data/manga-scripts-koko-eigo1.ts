// 高校受験英語（文法分野）：討論・探求型マンガ
import type { MangaScript } from './manga-types';

export const mangaScriptsKokoEigo1: Record<string, MangaScript> = {
  koko_eigo_s256_futeishi_manga: {
    id: 'koko_eigo_s256_futeishi_manga',
    panels: [
      { speaker: 's2', line: '不定詞、名詞的用法・形容詞的用法・副詞的用法って3つも呼び方があって、結局どう見分けるのか分かりません……。' },
      { speaker: 't', line: 'いい質問。実は「訳し方」から考えるとつまずくんだ。I like to swim. の to swim は、文の中でどんな役割をしていると思う？' },
      { speaker: 's1', line: 'like の目的語……ということは、名詞と同じ場所に入ってますね。' },
      { speaker: 't', line: 'その通り！主語・目的語・補語のどれかに入っていれば名詞的用法。じゃあ I have a lot of homework to do. の to do は？' },
      { speaker: 's2', line: 'homework のすぐうしろにあります。homework を説明してる感じがします。' },
      { speaker: 't', line: 'その通り。名詞のすぐうしろについて、その名詞を説明していれば形容詞的用法。「するべき宿題」というふうに、前の名詞にかかる。' },
      { speaker: 's1', line: 'じゃあ、I went to the store to buy milk. の to buy は、もう文が I went to the store. で完成しちゃってますよね？' },
      { speaker: 't', line: 'そこがポイント！主語と動詞がそろって文が完成したあとに、目的や理由を付け足していたら副詞的用法。「牛乳を買うために」と、文全体を修飾している。' },
      { speaker: 's2', line: 'つまり、訳語を先に覚えるんじゃなくて、①文の主語・動詞・目的語・補語がどこにあるか見て、②to のかたまりがその中のどこに入っているかを確認すればいいんですね。' },
      { speaker: 't', line: 'その通り！「これは何用法か」と聞かれたら、まず訳そうとせずに、文の骨組み（S・V・O・C）を先に確認する。はたらきが決まれば、訳はあとから自然に付いてくるよ。', emphasis: true },
    ],
  },

  koko_eigo_s302_kankei_manga: {
    id: 'koko_eigo_s302_kankei_manga',
    panels: [
      { speaker: 's1', line: '関係代名詞、who と whom と which と that……種類が多すぎて、主格か目的格かの判断でいつも止まってしまいます。' },
      { speaker: 't', line: '実は先行詞が人かものかは、格の判定には関係ないんだ。the man who helped me を見て。who の直後、何が来てる？' },
      { speaker: 's2', line: 'helped、動詞です。' },
      { speaker: 't', line: 'それが主格の合図。直後がいきなり動詞（助動詞を含む）なら主格。節の中に主語がなくて、who自身が主語の代わりをしているからなんだ。じゃあ the man who I helped は？' },
      { speaker: 's1', line: 'who のあとに I、それから helped……〈主語＋動詞〉の形になってます。' },
      { speaker: 't', line: 'その通り！直後が〈主語＋動詞〉なら目的格。節の中にはすでに主語（I）があって、動詞（helped）の目的語が欠けている状態。' },
      { speaker: 's2', line: 'じゃあ、the man who always helps us みたいに、あいだに always が入ってたらどうするんですか？' },
      { speaker: 't', line: 'いいところに気づいた。副詞は無視していい。always の次の helps を見れば、動詞だから主格だと分かる。' },
      { speaker: 's1', line: 'なるほど、①直後に何があるか見る②副詞があれば飛ばして次を見る③動詞なら主格、〈主語＋動詞〉なら目的格、この手順だけでいいんですね。' },
      { speaker: 't', line: 'その通り！先行詞が人かものかは who/which/thatのどれを使うかを決めるだけ。格を決めるのはいつも「直後の形」の一点だけだよ。', emphasis: true },
    ],
  },

  koko_eigo_s115_genzaikanryo_manga: {
    id: 'koko_eigo_s115_genzaikanryo_manga',
    panels: [
      { speaker: 's2', line: '「彼が亡くなって5年になる」を英語にする問題、He has died for five years. って書いたら×でした。die を使っちゃダメなんですか？' },
      { speaker: 't', line: 'いいところに気づいた。die は「死ぬ」という一瞬の動作を表す動詞なんだ。じゃあ質問。「5年間ずっと死に続けている」なんて状態、あり得ると思う？' },
      { speaker: 's1', line: 'あ……死ぬのは一瞬で、そのあと続くのは「死んでいる状態」ですよね。' },
      { speaker: 't', line: 'その通り！だから継続を表す現在完了には、die（一瞬の動作）ではなく dead（死んでいる状態を表す形容詞）を使う。He has been dead for five years. が正解になる。' },
      { speaker: 's2', line: 'じゃあ、He died five years ago. と He has been dead for five years. は、同じことを言ってるのに動詞のタイプが違うから形も違う、ということですか？' },
      { speaker: 't', line: 'その通り。①は「亡くなった」という一点だけを述べた過去形、②は「死んでいる状態」が続いていることを述べた現在完了。じゃあ It has been five years since he died. はどう考える？' },
      { speaker: 's1', line: 'since が「〜してから」だから、亡くなってから今まで経った時間そのものを、It を主語にして言ってる感じですか？' },
      { speaker: 't', line: 'その通り！時間の経過そのものを主語にする言い方。Five years have passed since he died. も同じ発想で、今度は Five years を主語にしている。' },
      { speaker: 's2', line: 'じゃあこの4つの書きかえは、バラバラに暗記するんじゃなくて、「一瞬の動作か、続く状態か」をまず見分ければ整理できるんですね。' },
      { speaker: 't', line: 'その通り！He has left home for a week. が誤りで He has been away from home for a week. が正しいのも、同じ理由。「一瞬の動作」の動詞は、そのままでは継続の形にできないんだ。', emphasis: true },
    ],
  },

  koko_eigo_s132_judotai_manga: {
    id: 'koko_eigo_s132_judotai_manga',
    panels: [
      { speaker: 's1', line: '受動態、be動詞と過去分詞を使うのは覚えたんですけど、そもそも何のためにわざわざ主語を入れかえるのか分かりません。' },
      { speaker: 't', line: 'いい疑問。「この学校は1950年に建てられました」って、日本語で誰が建てたか言ってる？' },
      { speaker: 's2', line: '言ってないです。「建てた人」よりも「建物がどうなったか」が話題になってます。' },
      { speaker: 't', line: 'それが受動態を使う理由。Tom broke the window.（トムが窓をこわした）を、窓の方を主語にして言いたいときに The window was broken by Tom. とする。' },
      { speaker: 's1', line: 'ということは、能動態の目的語（the window）が、受動態では主語に変わってるんですね。' },
      { speaker: 't', line: 'その通り！じゃあ、English is spoken in many countries. の be動詞、なぜ is なんだと思う？' },
      { speaker: 's2', line: '主語が English で、単数扱いだから is ……ですか？' },
      { speaker: 't', line: 'その通り。be動詞は主語の人称・数・時制に合わせる。過去分詞（spoken）の形自体は変わらない。時制を担当するのはいつも be動詞のほう。' },
      { speaker: 's1', line: 'じゃあ、These pictures were taken by my father. で were になってるのは、主語が pictures（複数）で、時制が過去だから、ということですね。' },
      { speaker: 't', line: 'その通り！受動態は「be動詞＋過去分詞」という形を覚えるだけじゃなく、「する側」と「される側」のどちらを主語にして話したいかで能動態・受動態を選ぶ、という発想がいちばん大事だよ。', emphasis: true },
    ],
  },

  koko_eigo_s292_bunshi_manga: {
    id: 'koko_eigo_s292_bunshi_manga',
    panels: [
      { speaker: 's2', line: 'a broken window の broken と、a running boy の running、どっちも動詞が形容詞になってるのは分かるんですけど、-ing と過去分詞のどっちを使うかが分かりません。' },
      { speaker: 't', line: '実はコツは1つだけ。「修飾される名詞を主語にして、文を作ってみる」んだ。boy を主語にすると？' },
      { speaker: 's1', line: 'The boy runs.（少年が走る）……名詞が自分でその動作をしてます。' },
      { speaker: 't', line: 'それが現在分詞（-ing）の合図。名詞が動作をする側なら -ing。じゃあ window を主語にすると？' },
      { speaker: 's2', line: 'The window is broken.（窓が割られる）……あ、be動詞＋過去分詞になってます。' },
      { speaker: 't', line: 'その通り！名詞がその動作をされる側なら過去分詞。a used car（中古車）も同じで、The car is used.（その車は使われる）という関係が成り立つ。' },
      { speaker: 's1', line: 'じゃあ My father bought a used car. を「父は使う車を買った」って訳したら、used を現在形みたいに読んじゃった、ということですね。' },
      { speaker: 't', line: 'その通り。used は use の過去分詞で「使われた」という意味。だから a used car は「中古車」になる。「〜している」という日本語につられて、なんでも -ing にしないことが大事なんだ。' },
      { speaker: 's2', line: 'つまり、①修飾される名詞を主語にして文を作る②「名詞が〜する」なら -ing、「名詞が〜される」なら過去分詞、という手順で決めればいいんですね。' },
      { speaker: 't', line: 'その通り！日本語の「〜ている」は状態も表すから、-ing だと決めつけずに、必ず「する側か、される側か」を文を作って確認する。この手順が分詞の識別でいちばん確実だよ。', emphasis: true },
    ],
  },

  koko_eigo_s221_hikaku_manga: {
    id: 'koko_eigo_s221_hikaku_manga',
    panels: [
      { speaker: 's1', line: 'famous の比較級を famouser って書いたら×でした。文字数だけならbig（3文字）より長くないのに、なんで -er がつけられないんですか？' },
      { speaker: 't', line: 'いい疑問。実は判断基準は文字数じゃなくて「音節数」なんだ。fa-mous って、発音上いくつのかたまりに分かれる？' },
      { speaker: 's2', line: 'ファ・マス……2つ、ですか？' },
      { speaker: 't', line: 'その通り、二音節。じゃあ busy はどう？4文字だけど、bu-sy で音節はいくつ？' },
      { speaker: 's1', line: 'あ、これも2つです。文字数と音節数は別物なんですね。' },
      { speaker: 't', line: 'その通り！-er／-est を付けると語が長くなって発音しにくくなるから、英語はもともと短い一音節の語には -er を付け、長い三音節以上の語には前に more を置いてきたんだ。じゃあ二音節はどっちに転ぶと思う？' },
      { speaker: 's2', line: 'ちょうど境目にあるから、決め手が別に必要ってことですか？' },
      { speaker: 't', line: 'その通り。決め手は語尾。-y・-er・-le・-ow のような軽い音で終わる語（easy・clever・simple）は -er を付けても言いやすいから -er型。でも -ful・-ous・-ing・-ed・-ive のように、それ自体が重い接尾語なら more 型。famous は -ous で終わるから more famous になる。' },
      { speaker: 's1', line: 'じゃあ、①まず音節数を数える②一音節なら -er、三音節以上なら more③二音節なら語尾を見て決める、という順番で確かめればいいんですね。' },
      { speaker: 't', line: 'その通り！-er は短い語、more は長い語という発音のしやすさが根っこにある。二音節だけは語尾で分ける。文字数で判断しないことが、この単元でいちばん大事な発見だよ。', emphasis: true },
    ],
  },

  koko_eigo_s155_musthaveto_manga: {
    id: 'koko_eigo_s155_musthaveto_manga',
    panels: [
      { speaker: 's2', line: 'must も have to も「〜しなければならない」って習ったのに、なんで2つも同じ意味の言い方があるんですか？' },
      { speaker: 't', line: 'いい疑問。実は訳は同じでも、義務がどこから来ているかが違うんだ。I must study harder. これ、誰がそう思ってる？' },
      { speaker: 's1', line: '「もっと勉強しなきゃ」って、自分自身で思ってる感じがします。' },
      { speaker: 't', line: 'その通り！must は話し手自身の判断や気持ちから出てくる義務。じゃあ I have to study for the test tomorrow. は？' },
      { speaker: 's2', line: '「明日試験があるから」……自分の気持ちというより、外side の事情って感じですね。' },
      { speaker: 't', line: 'その通り！have to は規則・予定・状況など、自分の外にある事情が理由になっている。だから We have to wear a helmet on the bike. は「そういう決まりだから」という意味になる。' },
      { speaker: 's1', line: 'でも現在の肯定文なら、実際どっちを使っても通じることが多いんですよね？だったら試験ではどうやって使い分けさせるんですか？' },
      { speaker: 't', line: 'いいところに気づいた。試験がよく使う決め手は「時制」。He had to leave then. のように過去のことを言いたいときは、must には過去形がないから have to（has to / had to）しか使えない。' },
      { speaker: 's2', line: 'じゃあ He will have to leave soon. も、未来のことだから must ではなく have to を使う、ということですね。' },
      { speaker: 't', line: 'その通り！意味のちがい（自分の中からの義務か、外の事情による義務か）を理解したうえで、書きかえ問題では「過去や未来なら have to」という時制のルールで判定するのがコツだよ。', emphasis: true },
    ],
  },

  koko_eigo_07_subjunctive_kansetsu_manga: {
    id: 'koko_eigo_07_subjunctive_kansetsu_manga',
    panels: [
      { speaker: 's1', line: 'I know where does he live. って書いたら×でした。Where does he live? が正しい疑問文なのに、なんでダメなんですか？' },
      { speaker: 't', line: 'いい疑問。実は疑問文が文の一部に組み込まれると、語順のルールが変わるんだ。Where does he live? を組み込む前とあとで、何が変わってると思う？' },
      { speaker: 's2', line: 'I know のうしろに、疑問文がそのままくっついてる感じです。' },
      { speaker: 't', line: 'そこがポイント。直接疑問文は〈疑問詞＋do/does/did＋主語＋動詞〉。でも間接疑問文（文の一部になったとき）は〈疑問詞＋主語＋動詞〉、つまり肯定文と同じ語順に戻る。does は消える。' },
      { speaker: 's1', line: 'じゃあ I know where he lives. が正解で、does が消えたぶん、動詞に s が復活してるんですね。' },
      { speaker: 't', line: 'その通り！does が担当していた「三人称単数」の情報が行き場をなくして、動詞そのもの（live→lives）に戻ってくる。時制や三単現の情報は、必ずどこかに残るんだ。' },
      { speaker: 's2', line: 'じゃあ、疑問詞がない疑問文、たとえば Is he busy? を組み込みたいときはどうするんですか？疑問詞がないから、つなげようがない気がします。' },
      { speaker: 't', line: 'いいところに気づいた。そのときは if か whether（〜かどうか）を疑問詞の代わりに使う。I don\'t know if he is busy. のように、ここでも語順は〈if/whether＋主語＋動詞〉と肯定文の形に戻る。' },
      { speaker: 's1', line: 'つまり、疑問詞があってもなくても、組み込まれたとたんに「肯定文の語順に戻す」というルールは共通なんですね。' },
      { speaker: 't', line: 'その通り！間接疑問文でいちばん大事なのは「文の一部になった疑問文は、do/does/didを手放して肯定文の語順に戻る」という1つのルールだけ。これさえ押さえれば、疑問詞の有無にかかわらず対応できるよ。', emphasis: true },
    ],
  },

  koko_eigo_s053_doumeishi_manga: {
    id: 'koko_eigo_s053_doumeishi_manga',
    panels: [
      { speaker: 's2', line: 'We enjoyed to swim in the sea. って書いたら×でした。to不定詞も動名詞も「〜すること」って意味なのに、なんでダメなんですか？' },
      { speaker: 't', line: 'いい疑問。実はここは意味では判断できなくて、動詞ごとに「どちらの形を後ろに置くか」が決まっているんだ。enjoy は動名詞（-ing）だけをとる動詞のグループに入る。' },
      { speaker: 's1', line: 'じゃあ、これは理屈というより、動詞ごとに覚えるしかないってことですか？' },
      { speaker: 't', line: 'その通り。でもグループ分けして覚えると、ずいぶん楽になる。enjoy・finish・stop・practice・give up・mind は動名詞だけ。じゃあ、I want being a teacher. は正しいと思う？' },
      { speaker: 's2', line: 'want は……たしか「〜したい」で、これから先のことを言う感じがするので、to不定詞のグループですか？' },
      { speaker: 't', line: 'その通り！want・hope・decide・wish・promise・expect は不定詞だけをとる動詞。「これから先にする（まだしていない）こと」を表す動詞に多いという傾向がある。' },
      { speaker: 's1', line: 'like や begin みたいに、どっちも使える動詞もあるんですよね？' },
      { speaker: 't', line: 'その通り。I like playing tennis. も I like to play tennis. も両方OK。でも stop だけは要注意。He stopped talking. と He stopped to talk. で意味が変わる。' },
      { speaker: 's2', line: 'He stopped talking. は「話すのをやめた」で、He stopped to talk. は……あ、「話すために立ち止まった」ですか？stop の目的語じゃなくて、目的を表す副詞的用法のto不定詞なんですね！' },
      { speaker: 't', line: 'その通り！同じ stop でも、後ろが動名詞なら「その動作をやめる」、to不定詞なら「〜するために立ち止まる」とまったく別の意味になる。動詞ごとのグループを覚えつつ、stopのような要注意動詞は意味の違いごと覚えておこう。', emphasis: true },
    ],
  },
};
