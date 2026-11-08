import type { Question } from './questions';

// 月例実力テスト 2026年3月号（高校受験・英語）
// 中3の11月時点を想定：受け身・現在完了・関係代名詞（主格・目的格）・不定詞・分詞の後置修飾・間接疑問・比較。
// 仮定法・関係副詞・分詞構文は出さない。長文2題・語順整序2問・リスニング風の会話文1問を含む。
// 動く図解は data/figures-moshi-2027-03-eigo.ts（問題IDをキーにして結線される）。
export const moshi202703KokoEigo: Question[] = [
  // ============================================================
  // 基礎: 2問
  // ============================================================
  {
    id: 'moshi_2027_03_eigo_k01',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'basic',
    question: '空所に入る最も適切な語（句）を選びなさい。\n「English ______ in many countries.」',
    choices: ['① speaks', '② is spoken', '③ spoke', '④ speaking'],
    answer: '② is spoken',
    hint: '英語は「話す」側かな、それとも「話される」側かな？ 受け身の形を思い出そう。',
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「英語は多くの国で話されています」という文です。

【なぜそうなるのか】
英語（English）は、自分で話すことはできません。人に「話される」ほうです。このように、主語が動作を「される」側のときは、受け身（受動態）「be動詞 ＋ 過去分詞」を使います。受け身は、動作の中心を「した人」から「された物」に移したいときに使う形で、された物を主語にして、動詞を be動詞＋過去分詞に変えます。

【ステップ1】主語と動作の関係を見る
English は「話される」側です。「人々が英語を話す」の、目的語（話される物）が主語に移った形です。

【ステップ2】受け身の形にする
be動詞（現在の話で主語が1つなので is）＋ 過去分詞にします。

【ステップ3】過去分詞を決める
speak − spoke − spoken と変わります。過去分詞は spoken です。

【答え】
② is spoken（English is spoken in many countries.）

【確かめ】
「英語は多くの国で話されている」と自然です。① speaks だと「英語が話す」になり意味が合いません。③ spoke は過去形だけで受け身になりません。④ speaking は ing だけで、be動詞が無く動詞として足りません。

【よくあるまちがい】
過去分詞を spoke（過去形）と書いてしまうことです。speak のように不規則に変わる動詞は、原形・過去形・過去分詞の3つをセットで覚えます。`,
    pitfall: '「される」側が主語なら受け身（be動詞＋過去分詞）。spoke（過去形）と spoken（過去分詞）を混ぜない。',
    memoryTip: '受け身 ＝ be動詞 ＋ 過去分詞。speak − spoke − spoken。',
  },
  {
    id: 'moshi_2027_03_eigo_k02',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'basic',
    question: '空所に入る最も適切な語（句）を選びなさい。\n「I ______ in this town since I was five.」',
    choices: ['① live', '② lived', '③ have lived', '④ was living'],
    answer: '③ have lived',
    hint: 'since は「〜からずっと」。過去のある時点から、いままで続いている話だね。',
    explanation: `【何を聞かれているか】
空所に入る動詞の形を選びます。「私は5歳のときからこの町に住んでいます」という文です。

【なぜそうなるのか】
「過去のある時から、いままでずっと続いている」ことは、現在完了（have ＋ 過去分詞）の継続用法で表します。現在完了は「過去の出来事が、いまにつながっている」ことを表す形です。since（〜から）は「どの時からか」を示す言葉で、この形といっしょに使われるのが決まりです。過去形 lived だけだと「昔住んでいた（いまは？）」で、いまとのつながりが出ません。

【ステップ1】since に気づく
since I was five は「5歳のときから」。始まりの時を示しています。

【ステップ2】時間のつながりを考える
5歳のとき → いままで、ずっとつながっている話です。

【ステップ3】形を決める
主語 I のときは have ＋ 過去分詞です。live の過去分詞は lived。I have lived となります。

【答え】
③ have lived（I have lived in this town since I was five.）

【確かめ】
「5歳からいままで住んでいる」という意味が出ます。① live は現在形だけで、since と合いません。② lived は過去で終わった話になります。④ was living は過去進行形で、過去のある時に「住んでいた最中」の意味になります。

【よくあるまちがい】
since があるのに過去形 lived を選んでしまうことです。since ＋ 始まりの時 は、現在完了とセットで覚えましょう。主語が he・she・it のときは has になります。`,
    pitfall: 'since や for（〜の間）があるときは、過去形ではなく現在完了（have ＋ 過去分詞）。',
    memoryTip: '継続の現在完了：have・has ＋ 過去分詞 ＋ since（始まり）／for（期間）。',
  },

  // ============================================================
  // 標準: 6問
  // ============================================================
  {
    id: 'moshi_2027_03_eigo_k03',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語を選びなさい。\n「The girl ______ is singing on the stage is my sister.」',
    choices: ['① who', '② which', '③ whose', '④ whom'],
    answer: '① who',
    hint: '空所のうしろに is singing という動詞が直接続いているね。説明する名詞は「人」だよ。',
    explanation: `【何を聞かれているか】
名詞 The girl を説明する、つなぎの言葉（関係代名詞）を選びます。

【なぜそうなるのか】
関係代名詞は、2つの文を1つにつなぐ言葉です。「その少女はステージで歌っています」と「その少女は私の妹です」を、同じ名詞をくり返さずに1文にするために使います。説明される名詞（先行詞〈せんこうし〉）が人なら who、物なら which を使います。さらに、関係代名詞のすぐあとに動詞が来るときは、その語が「主語のはたらき」（主格）をしているので who（人）を選びます。

【ステップ1】2つの文に分けて考える
The girl is my sister.（その少女は私の妹です）／ The girl is singing on the stage.（その少女はステージで歌っています）。

【ステップ2】くり返しの名詞を who に変える
2つ目の文の The girl を who に変えて、1つ目の The girl のうしろにつなぎます。

【ステップ3】形を確かめる
The girl who is singing on the stage is my sister. となり、who のあとに動詞 is singing が続いています。

【答え】
① who

【確かめ】
「ステージで歌っている少女は私の妹です」と自然です。② which は物・動物用です。③ whose は「〜の」の意味で、あとに名詞（whose bag など）が続きます。④ whom は目的格で、あとに「主語＋動詞」が続くので、ここには合いません。

【よくあるまちがい】
whom を「人用だから」と選んでしまうことです。関係代名詞のあとが動詞ならば who（主格）、「主語＋動詞」ならば whom か that（目的格）と見分けます。`,
    pitfall: '先行詞が人でも、空所のあとが動詞なら who（主格）。whom はあとに「主語＋動詞」が続く。',
    memoryTip: '人 ＋ who ＋ 動詞（主格）。物 ＋ which ＋ 動詞。',
  },
  {
    id: 'moshi_2027_03_eigo_k04',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question:
      '次の日本語に合うように、語（句）を並べかえて英文を完成させなさい。（文の最初の語は大文字で始めてあります。）\n「これは、私の父が私に買ってくれた本です。」\n[ bought / This / that / for me / the book / my father / is ]',
    answer: 'This is the book that my father bought for me.',
    hint: '「本」を説明する部分が、うしろから the book につながる形。that のあとは「主語＋動詞」だよ。',
    explanation: `【何を聞かれているか】
7つの語（句）をならべかえて、「これは、私の父が私に買ってくれた本です」という文をつくります。

【なぜそうなるのか】
「私の父が私に買ってくれた」は、「本」を説明する部分です。英語では、説明する部分を名詞のうしろに置いて、関係代名詞でつなぎます。「This is the book.（これは本です）」と「My father bought it for me.（父は私にそれを買ってくれた）」を1つにするとき、2つ目の文の it（＝the book）を that に変えて前に出します。it は「買った」の目的語（買われた物）なので、このときの that は目的格の関係代名詞です。

【ステップ1】文の土台を作る
This is the book（これは本です）を作ります。

【ステップ2】本を説明する部分を作る
that ＋ my father ＋ bought ＋ for me を作ります。that のあとは「主語（my father）＋ 動詞（bought）」の順です。

【ステップ3】つなぐ
土台のうしろに説明の部分をつなぎます。This is the book that my father bought for me.

【答え】
This is the book that my father bought for me.

【確かめ】
7つの語（句）をすべて使っています。bought のうしろには、本来あるはずの「買った物」がありません。that がその役目をしているので、目的格の関係代名詞の形として正しいです。

【よくあるまちがい】
that のあとに、動詞 bought を先に置いてしまうことです。目的格では that のあとが「主語 → 動詞」の順になります。なお、目的格の that は省略できますが、この問題では語が与えられているので入れます。`,
    pitfall: '目的格の関係代名詞のあとは「主語＋動詞」。that bought my father ... のように動詞を先に置かない。',
    memoryTip: '名詞 ＋ that ＋ 主語 ＋ 動詞 ＝「主語が〜した（名詞）」。',
  },
  {
    id: 'moshi_2027_03_eigo_k05',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語を選びなさい。\n「This is a picture ______ by my uncle.」',
    choices: ['① painting', '② painted', '③ paints', '④ paint'],
    answer: '② painted',
    hint: 'is がすでに文の動詞。空所は「a picture」を説明する語だよ。絵は「描く」？ 「描かれた」？',
    explanation: `【何を聞かれているか】
a picture を説明する語を選びます。「これは私のおじによって描かれた絵です」という文です。

【なぜそうなるのか】
この文には、すでに is という動詞があります。英語では、1つの文に動詞を2つ並べることはできないので、空所に動詞（paints・paint）は入りません。そこで、名詞のうしろから説明する「分詞（ぶんし）」を使います。名詞のうしろに過去分詞（painted）を置くと「〜された（名詞）」の意味になります。絵は自分で描くのではなく、人に「描かれる」ほうなので、過去分詞を使います。

【ステップ1】文の動詞を見つける
This is の is が文の動詞です。空所は動詞ではなく、説明の語です。

【ステップ2】絵と動作の関係を考える
絵は「描かれる」側です。by my uncle（おじによって）も、受け身の意味を表す目印です。

【ステップ3】形を決める
「された」は過去分詞です。paint の過去分詞は painted です。a picture painted by my uncle（おじに描かれた絵）となります。

【答え】
② painted

【確かめ】
「おじによって描かれた絵」と自然です。① painting は「描いている（絵）」で、絵が描く側になってしまいます。③ paints と ④ paint は動詞で、is と2つ並んでしまいます。

【よくあるまちがい】
painting と painted を取りちがえることです。名詞が「している」側なら ing（a boy playing soccer）、「される」側なら過去分詞（a picture painted by ...）と見分けます。`,
    pitfall: '名詞が「される」側 → 過去分詞（painted）。「している」側 → ing。動詞を2つ並べない。',
    memoryTip: '名詞 ＋ 過去分詞 ＝「〜された名詞」。名詞 ＋ ing ＝「〜している名詞」。',
  },
  {
    id: 'moshi_2027_03_eigo_k06',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    question:
      '次の日本語に合うように、語（句）を並べかえて英文を完成させなさい。（文の最初の語は大文字で始めてあります。）\n「あなたは、その映画が何時に始まるか知っていますか。」\n[ the movie / Do / starts / know / what time / you ]',
    answer: 'Do you know what time the movie starts?',
    hint: '「何時に始まるか」の部分は、もとの疑問文とは語順が変わるよ。does はどうなる？',
    explanation: `【何を聞かれているか】
6つの語（句）をならべかえて、「あなたは、その映画が何時に始まるか知っていますか」という間接疑問（疑問文が文の一部になった形）をつくります。

【なぜそうなるのか】
「その映画は何時に始まりますか」は、単独では What time does the movie start? という疑問文です。しかし、Do you know の中に入れると、疑問文ではなく「何時に始まるか」という説明のかたまり（名詞のかたまり）になります。かたまりの中はふつうの文の語順「主語 ＋ 動詞」にもどるので、does は要らなくなり、動詞は主語（the movie）に合わせて starts になります。

【ステップ1】もとの疑問文を考える
What time does the movie start?

【ステップ2】「かたまり」の語順に直す
疑問文の語順をやめて、what time ＋ the movie（主語）＋ starts（動詞）にします。does は消え、start は主語が1つなので starts になります。

【ステップ3】Do you know につなぐ
Do you know のうしろに、かたまりをつなぎます。

【答え】
Do you know what time the movie starts?

【確かめ】
6つの語（句）をすべて使っています。全体は「知っていますか」とたずねる疑問文なので、文末は「？」です。what time のあとが「the movie starts」（主語→動詞）の順になっていて、does は使っていません。

【よくあるまちがい】
what time does the movie start のように、疑問文の語順のまま入れてしまうことです。文の中に入った疑問のかたまりは、主語→動詞の順にします。`,
    pitfall: '間接疑問では does・did が消えて「疑問詞＋主語＋動詞」。動詞は主語に合わせて starts にする。',
    memoryTip: 'Do you know ＋ 疑問詞 ＋ 主語 ＋ 動詞（ふつうの語順）。',
  },
  {
    id: 'moshi_2027_03_eigo_k07',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    passage: `[リスニング風：会話の放送文です。文字で読んで答えなさい。]
Man: Excuse me. I want to go to the city museum. How can I get there?
Woman: Take the Number 5 bus at the station, and get off at City Hall. The museum is next to it.
Man: How long does it take?
Woman: It takes about fifteen minutes by bus.
Man: Thank you. How much is the bus fare?
Woman: It is 220 yen.
Man: Great. Thanks for your help.`,
    question: 'この会話の内容に合うものを選びなさい。',
    choices: [
      '① The man will take a train to City Hall.',
      '② The man will take the Number 5 bus and get off at City Hall.',
      '③ The man will walk to the museum for fifteen minutes.',
      '④ The man will pay 520 yen for the bus.',
    ],
    answer: '② The man will take the Number 5 bus and get off at City Hall.',
    hint: '女性（Woman）が道順を説明している部分をよく聞こう。乗り物・降りる場所・料金に注目。',
    explanation: `【何を聞かれているか】
会話の内容と合う英文を選ぶ問題です。男性（Man）が博物館への行き方をたずね、女性（Woman）が答えています。

【なぜそうなるのか】
聞き取りでは、「乗り物」「降りる場所」「時間」「料金」のように、行き方に関わる情報を聞き分けることが大切です。会話の中には似た情報（バス・徒歩・電車、15分・5番・220円）が出てくるので、どれが何の情報かを結びつけて確かめます。

【ステップ1】乗り物と降りる場所を探す
女性は「Take the Number 5 bus at the station, and get off at City Hall.」と言っています。5番のバスに乗り、市役所（City Hall）で降りる、という意味です。

【ステップ2】時間と料金を確かめる
「It takes about fifteen minutes by bus.」は、バスで約15分かかるという意味です。料金は「It is 220 yen.」で220円です。

【ステップ3】選択肢と合わせる
② はバス・5番・City Hall の3つがすべて合っています。

【答え】
② The man will take the Number 5 bus and get off at City Hall.

【確かめ】
① 電車ではなくバスです。③ 15分は歩く時間ではなく、バスの所要時間です。④ 料金は520円ではなく220円です。

【よくあるまちがい】
fifteen minutes を「歩く時間」と取りちがえることです。by bus（バスで）が直前にあるので、バスの所要時間です。また、fifteen と fifty、220 と 520 のような数字の聞きまちがいにも注意します。`,
    pitfall: '15分は「バスで」の時間。乗り物・降りる場所・金額を、それぞれ別々に確かめる。',
    memoryTip: '道案内の聞き取りは「乗り物・降りる場所・時間・料金」の4点セットで拾う。',
  },
  {
    id: 'moshi_2027_03_eigo_k08',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    question: '空所に入る最も適切な語（句）を選びなさい。\n「This is the ______ movie I have ever seen.」',
    choices: ['① interesting', '② more interesting', '③ most interesting', '④ very interesting'],
    answer: '③ most interesting',
    hint: 'the があって、ever（これまでに）がある文。「いちばん」の意味の形を選ぼう。',
    explanation: `【何を聞かれているか】
空所に入る語（句）を選びます。「これは、私がこれまでに見た中でいちばんおもしろい映画です」という文です。

【なぜそうなるのか】
「3つ以上の中でいちばん〜」は、最上級（さいじょうきゅう）「the ＋ 最上級」で表します。interesting のような長い語は、-est をつけず、前に most を置いて most interesting とします。ever（これまでに）と I have ever seen（私がこれまでに見た）は「これまでに見たすべての映画の中で」という意味の範囲をつくるため、比較の相手が2つではなく全部になり、最上級が必要になります。

【ステップ1】the に注目する
空所の前に the があるので、最上級の形になるはずです。

【ステップ2】範囲を確かめる
I have ever seen（これまでに見た）は、見たすべての映画が範囲です。2つをくらべる than はありません。

【ステップ3】最上級を作る
interesting は長い語（in・ter・est・ing）なので、most をつけて most interesting にします。

【答え】
③ most interesting（This is the most interesting movie I have ever seen.）

【確かめ】
「これまでに見た中でいちばんおもしろい映画」と意味が通ります。① interesting は the のあとでは「いちばん」の意味が出ません。② more は比較級で、than（〜より）が必要です。④ very は「とても」と程度を強める語で、「いちばん」という最上級の意味は出ません（the very best のように最上級を強めることはできますが、very だけでは「いちばん」になりません）。

【よくあるまちがい】
more interesting を選んでしまうことです。more は2つをくらべる形で、「〜より」という相手（than ～）がいるときに使います。「いちばん」には most です。なお、movie と I のあいだには目的格の関係代名詞 that が省略されています。`,
    pitfall: 'the ＋ 最上級（most interesting）。more は than とセットの比較級で、「いちばん」にはならない。',
    memoryTip: 'the ＋ most ＋ 長い語 ＋ 名詞 ＋ (that) I have ever seen ＝「これまでで最も〜な名詞」。',
  },
  {
    id: 'moshi_2027_03_eigo_k09',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'standard',
    passage: `[英文を読んで答えなさい]
Last Sunday, our town held a clean-up day. About one hundred people joined it. I went there with my friend Yuki, and we were given gloves and bags at the park. The park is famous for its big cherry trees, but there was a lot of trash under them. Some old men who live near the park told us that many people come to see the flowers in spring and leave their trash. We worked for two hours and collected twenty bags of trash. After the work, a woman who runs a small shop gave us hot tea. I was tired, but I felt very happy. I have decided to join the event again next month. I hope more young people will join us.`,
    question: '本文によると、お年寄りたちは、春に多くの人が公園に来るのはなぜだと言っていますか。最も適切なものを選びなさい。',
    choices: ['① To clean the park.', '② To see the flowers.', '③ To meet the old men.', '④ To buy hot tea.'],
    answer: '② To see the flowers.',
    hint: 'Some old men who live near the park told us ... という文を探そう。その that のあとの内容だよ。',
    explanation: `【何を聞かれているか】
本文の中で、お年寄り（old men）が「春に多くの人が公園に来る理由」としてどう言っているかを選ぶ問題です。

【なぜそうなるのか】
内容理解では、設問の中の言葉（old men・spring・come）を手がかりにして、本文のどの文に書いてあるかを探します。書いてある場所は、Some old men who live near the park told us that ... の that 以下です。理由や目的は、「to ＋ 動詞の原形」（不定詞）で「〜するために」と表されることが多く、選択肢もその形になっています。

【ステップ1】該当の文を探す
「Some old men who live near the park told us that many people come to see the flowers in spring and leave their trash.」が、お年寄りの発言をまとめた文です。

【ステップ2】意味を読む
「公園の近くに住むお年寄りたちは、多くの人が春に花を見に来て、ごみを置いていくのだと私たちに話した」という意味です。

【ステップ3】選択肢と合わせる
to see the flowers（花を見るために）が、本文の come to see the flowers と同じです。

【答え】
② To see the flowers.

【確かめ】
① 掃除をするのは筆者たちで、お年寄りの話ではありません。③ お年寄りに会うために来る、という内容はありません。④ 温かいお茶は掃除のあとに店の女性がくれたもので、理由と関係ありません。

【よくあるまちがい】
clean-up day という話題から、「公園をきれいにするために来る」（①）と思ってしまうことです。設問は「お年寄りが言った春の来園の理由」なので、本文のその部分だけを読んで決めます。`,
    pitfall: '話題（clean-up）から選ばず、設問の人物（old men）の発言の部分だけを読んで答える。',
    memoryTip: 'to ＋ 動詞の原形 ＝「〜するために（目的）」。come to see ＝「見に来る」。',
  },
  {
    id: 'moshi_2027_03_eigo_k10',
    subject: 'eigo',
    course: 'koko-general',
    examType: 'koko',
    difficulty: 'advanced',
    passage: `[トムが友だちのベンに送ったメールを読んで答えなさい]
Hi, Ben. How are you? I have been in Osaka for three weeks. My host family is very kind. The host mother cooks delicious food every day. Yesterday she made takoyaki for me, and I made it by myself for the first time. It was not easy to turn the balls, but I enjoyed it. I want to learn more about Japanese culture, so I am going to visit Kyoto to see old temples this weekend. My host father, who works at a bank, will take me there by car. I have taken many pictures, and I will show them to you when I come back. Please write to me soon.
Your friend, Tom`,
    question: '本文の内容に合うものを選びなさい。',
    choices: [
      '① Tom has stayed in Osaka for three months.',
      '② Tom made takoyaki by himself for the first time yesterday.',
      "③ Tom's host father will take him to Kyoto by train.",
      '④ Tom has not taken any pictures yet.',
    ],
    answer: '② Tom made takoyaki by himself for the first time yesterday.',
    hint: '数字（weeks）・乗り物（car）・動作の回数（for the first time）など、細かい情報を本文と1つずつ照らし合わせよう。',
    explanation: `【何を聞かれているか】
メールの内容と合う英文を、4つの中から1つ選びます。

【なぜそうなるのか】
内容一致の問題では、選択肢の細かい情報（期間・乗り物・順番・回数）を、本文の対応する部分と1つずつ照らし合わせます。選択肢は、本文の一部を少し変えて、まちがいにしてあることが多いからです。

【ステップ1】① を確かめる
「I have been in Osaka for three weeks.」とあります。3か月ではなく3週間です。

【ステップ2】② を確かめる
「Yesterday she made takoyaki for me, and I made it by myself for the first time.」とあります。きのう、トムは自分ではじめてたこ焼きを作りました。② と合っています。

【ステップ3】③ と ④ を確かめる
③ ホストファーザーは「will take me there by car」で、電車ではなく車です。④ 「I have taken many pictures」とあるので、写真はたくさん撮っています。

【答え】
② Tom made takoyaki by himself for the first time yesterday.

【確かめ】
本文の「Yesterday（きのう）」「by myself（自分で）」「for the first time（はじめて）」が、選択肢と1つずつ一致しています。① weeks → months、③ car → train、④ have taken → has not taken と、どれも本文と食いちがっています。

【よくあるまちがい】
選択肢の英文が本文の言葉をたくさん使っていると、正しそうに見えてしまうことです。数字や乗り物のような1語が本文とちがっていないか、必ず確かめます。`,
    pitfall: '似た言葉に引きずられない。weeks と months、car と train のような1語のちがいを必ず確かめる。',
    memoryTip: '内容一致は、選択肢を1つずつ本文の該当の文に当てて、細部（数・乗り物・回数）まで照合する。',
  },
];
