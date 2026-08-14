import type { Lesson } from './lesson-types';

// 高校受験 英語「名詞・冠詞・代名詞・形容詞・副詞」拡張ユニット（40セッション：koko_eigo_s181〜koko_eigo_s220）
// order は 681〜720。
// 構成：可算名詞と不可算名詞(5)／不可算名詞の数え方(4)／a・an と the の使い分け(6)／
//       無冠詞になる場合(3)／人称代名詞の格変化(4)／再帰代名詞・指示代名詞(3)／
//       不定代名詞(6)／形容詞の用法と語順(4)／副詞の位置と頻度の副詞(5)
// 図解は lesson-figs-koko-eigo-ext06.ts。名詞の分類（pieChart）・格変化の表（coordinate）・
// 頻度の副詞の度合い（barChart）など、図にすることで本当に理解が進む箇所にだけ付けてある（40課中18課）。
export const kokoEigoExt06Lessons: Lesson[] = [
  // ─────────── 1. 可算名詞と不可算名詞（s181〜s185 / order 681〜685） ───────────
  {
    id: 'koko_eigo_s181',
    subject: 'eigo',
    examType: 'koko',
    title: '可算名詞と不可算名詞①：数えられるかどうかで文の形が変わる',
    description: '名詞を可算・不可算に分け、a/an・複数形・数量表現・動詞の一致がどう変わるかをつかむ',
    order: 681,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '日本語では「本が3つ」も「水が3つ」もどちらも言えそうな気がする。ところが英語では three books は言えても three waters とは書けない。英語は名詞を口に出す前に「これは1つ2つと数えられるか」を必ず判定している。この一手間を身につけると、a を付けるか付けないかで迷う時間がほとんど消える。',
    keyPoints: [
      '可算名詞＝1つ2つと数えられる名詞。単数なら必ず a/an か the などが付き、複数なら -s が付く。',
      '不可算名詞＝形が決まっていない物質・目に見えない抽象概念・固有名詞。a/an も -s も付けられない。',
      '不可算名詞は単数扱い。The news is interesting. のように動詞は is / was を使う。',
      '数量表現も分かれる：可算は many / a few / few、不可算は much / a little / little。',
      'a lot of / lots of / some / any / no は可算・不可算どちらにも使える便利な語。',
      'information・advice・furniture・homework・news・baggage は英語では不可算。日本語感覚で -s を付けない。',
    ],
    sections: [
      {
        heading: '数えられる名詞・数えられない名詞の見分け方',
        figureId: 'lf_kokoeigoext06_181',
        body: `英語の名詞は、まず「1つ2つと数えられるか」で二つに分かれる。

■ 可算名詞（countable noun）
はっきりした形の輪郭があり、1つ2つと数えられるもの。
例）book（本）／apple（りんご）／student（生徒）／dog（犬）／car（車）／chair（いす）／egg（卵）／question（質問）

可算名詞は「単数なら裸で置けない」というのが最大の特徴である。
例）I bought a book yesterday.（昨日、本を1冊買った）
例）I bought three books yesterday.（昨日、本を3冊買った）
× I bought book yesterday. ← a も -s もないので誤り。

■ 不可算名詞（uncountable noun）
形が決まっていない物質や、目に見えない抽象的な事がら、そして固有名詞。
例）water（水）／bread（パン）／paper（紙）／money（お金）／information（情報）／advice（助言）／homework（宿題）／news（知らせ）／Japan（日本）

不可算名詞は a/an も -s も付けられない。裸のまま置くのが正しい形である。
例）I need information about the school.（その学校についての情報が必要だ）
× I need an information. × I need informations.

■ 見分けの目安
①コップに入れて形を変えても名前が変わらないなら不可算（water は容器を変えても water）。
②半分に切ったら名前が変わるなら可算（apple を半分にしたら apple ではなく half an apple）。
③目に見えず、手でつかめない考え・気持ちなら不可算（peace, love, time, work）。

★ ポイント：日本語の「〜が1つ」につられないこと。日本語では「情報が1つ」「アドバイスを2つ」と言えるが、英語の information・advice は不可算である。`,
      },
      {
        heading: '可算か不可算かで、文のどこが変わるか',
        body: `可算・不可算の判定は、単に「-s を付けるかどうか」では終わらない。文の四か所が同時に変わる。

■ ①冠詞
可算・単数 → a / an が必要。 例）She has a bike.
不可算 → a / an は付けない。 例）She has money.

■ ②複数形
可算 → 2つ以上なら -s。 例）two bikes
不可算 → いくつあっても -s は付かない。 例）a lot of money（× moneys）

■ ③数量を表す語
可算 … many / a few / few / a number of
不可算 … much / a little / little / a great deal of
両方 … a lot of / lots of / plenty of / some / any / no
例）I have many friends.（友達がたくさんいる）
例）I have much free time. ／ I have a lot of free time.（自由な時間がたくさんある）

■ ④動詞の一致
不可算名詞は必ず単数扱いになる。語尾に -s が見えていても単数である。
例）The news is very surprising.（その知らせはとても驚きだ）
例）Money is not everything.（お金がすべてではない）
× The news are ... × Money are ...

⚠ 注意：news は「新しいこと（new）の複数形」に見えるが、これで1語の不可算名詞である。同じく mathematics（数学）・economics（経済学）も -s で終わるが単数扱いで、Mathematics is difficult. と書く。

★ ポイント：可算か不可算かを決めた瞬間、冠詞・複数形・数量表現・動詞の四つが自動的に決まる。この連動を意識すると、書きかえ問題でミスが激減する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はその大学についてたくさんの情報を持っている。」を英語にしなさい。',
        wrongAnswer: 'I have many informations about the university.',
        trapExplanation:
          '日本語で「情報が多い」「情報をいくつも」と言えるため、information も数えられる名詞だと思いこんで -s を付け、さらに可算用の many を選んでしまう。',
        correctAnswer: 'I have a lot of information about the university.（much information でも可）',
        correctExplanation:
          'information は不可算名詞なので -s は付かず、a/an も付かない。数量を示すなら不可算用の much、または可算・不可算どちらにも使える a lot of を使う。数を数えたいときだけ two pieces of information のように単位語を借りる。同じ仲間に advice・furniture・homework・baggage がある。',
      },
      {
        question: '（　）に入る語を答えなさい。The news about the accident （　） very sad.',
        wrongAnswer: 'are',
        trapExplanation:
          'news の末尾に -s が見えるため複数形だと判断し、さらに直前の the accident ではなく「事故のニュース＝複数の出来事」と考えて are を選んでしまう。',
        correctAnswer: 'is',
        correctExplanation:
          'news は -s で終わるが不可算名詞であり、常に単数扱いをする。したがって be動詞は is（過去なら was）になる。about the accident は主語 The news を後ろから修飾しているだけで、動詞の形には関係しない。主語の中心（核）がどれかを見つけてから動詞を決めるのが鉄則である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s182',
    subject: 'eigo',
    examType: 'koko',
    title: '可算名詞と不可算名詞②：入試で狙われる不可算名詞',
    description: 'information・advice・furniture・homework など、日本語感覚だと数えたくなる不可算名詞を一気に押さえる',
    order: 682,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '「家具を3つ買った」「宿題が2つ出た」——日本語ではごく自然な言い方だ。ところがこれをそのまま英語にすると、three furnitures, two homeworks となって全部バツになる。実は入試で問われる不可算名詞は数が限られていて、覚えるべき語は二十語ほどしかない。ここで一度に片づけてしまおう。',
    keyPoints: [
      '最頻出の不可算名詞：information, advice, furniture, homework, news, baggage/luggage, equipment, work（仕事）。',
      '物質名詞：water, milk, coffee, bread, rice, paper, money, air, snow, wood, glass（ガラス）。',
      '抽象名詞：time（時間）, peace, love, happiness, health, progress, weather, traffic, fun, music, advice。',
      'これらは a/an も -s も付かず、動詞は必ず単数扱い。',
      '数えたいときは a piece of / two pieces of のように単位語を借りる。',
      '日本語では数えられるのに英語では不可算、という語だけが狙われる。逆パターン（英語では可算）はほとんど出ない。',
    ],
    sections: [
      {
        heading: '暗記必須の不可算名詞リスト',
        body: `入試で「-s を付けたら不正解」になる名詞は、実はほぼ決まっている。次のグループで覚える。

■ グループA：日本語だと数えたくなる語（最重要）
information（情報）／advice（助言）／news（知らせ）／furniture（家具）／homework（宿題）／work（仕事）／baggage・luggage（手荷物）／equipment（設備・器具）／damage（損害）／progress（進歩）／fun（楽しみ）
例）He gave me some good advice.（彼はよい助言をくれた）
例）We bought a lot of furniture for the new house.（新居のために家具をたくさん買った）

■ グループB：物質名詞（形が決まっていないもの）
water／milk／tea／coffee／juice／bread／rice／meat／sugar／salt／paper（紙）／money／wood／glass（ガラス）／iron（鉄）／air／snow／rain
例）There is a little snow on the roof.（屋根に少し雪がある）

■ グループC：抽象名詞（目に見えない事がら）
time（時間）／peace／love／happiness／health／kindness／music／weather／traffic／nature／knowledge
例）We don't have much time.（あまり時間がない）
例）The traffic was heavy this morning.（今朝は交通量が多かった）

★ ポイント：グループAの語は「日本語では数えられるのに英語では不可算」という点だけが問われている。逆に、日本語で数えにくいのに英語では可算という語（a job, a suggestion, a fact など）も同時に覚えると差がつく。
例）work（不可算）↔ a job / two jobs（可算）
例）advice（不可算）↔ a suggestion / two suggestions（可算）
例）furniture（不可算）↔ a desk, a chair, a table（可算）`,
      },
      {
        heading: '不可算名詞を使うときの三つの手順',
        body: `不可算名詞だと判定したら、次の三手順で文を組み立てる。

■ 手順①：a/an を消し、-s を消す
× I need an advice. → ○ I need advice.
× He has many homeworks. → ○ He has a lot of homework.

■ 手順②：数量語を不可算用に取りかえる
many → much／a lot of
a few → a little
few → little
How many → How much
例）How much homework do you have today?（今日はどれくらい宿題があるの）
× How many homeworks do you have?

■ 手順③：数を言いたいときだけ単位語を借りる
a piece of advice（助言1つ）／two pieces of information（情報2つ）／a piece of furniture（家具1点）／three pieces of baggage（手荷物3個）／a glass of water（水1杯）
例）Let me give you a piece of advice.（一つ助言させてください）

⚠ 注意：単位語を使うときに複数形にするのは「単位語のほう」であって、不可算名詞そのものではない。
○ two pieces of advice　× two pieces of advices

★ ポイント：a piece of は「情報・助言・家具・紙・ケーキ・音楽」など幅広く使える万能の単位語。迷ったら a piece of を思い出す。ただし「水1杯」は a glass of water、「コーヒー1杯」は a cup of coffee のように、液体は容器で数えるのが自然である。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちはその部屋に家具を3点入れた。」の下線部「家具を3点」を英語で書きなさい。',
        wrongAnswer: 'three furnitures',
        trapExplanation:
          '日本語の「家具3点」に引きずられ、furniture を数えられる名詞と考えて -s を付けてしまう。desk や chair が数えられるので、それらの総称である furniture も数えられるはずだと類推してしまうのも原因。',
        correctAnswer: 'three pieces of furniture',
        correctExplanation:
          'furniture は「家具というジャンル全体」を指す不可算名詞で、-s は付かない。数えるときは単位語 piece を借りて three pieces of furniture とし、複数形にするのは piece のほうである。個々の家具を言いたいなら three desks のように具体名を使えばよい。',
      },
      {
        question: '（　）内から正しい語を選びなさい。I have (a few / a little) time before the train leaves.',
        wrongAnswer: 'a few',
        trapExplanation:
          '「少し時間がある」と訳したときに、日本語では「時間」を「5分・10分」と数えられるので、可算名詞用の a few を選んでしまう。',
        correctAnswer: 'a little',
        correctExplanation:
          'ここでの time は「時間という量」を表す不可算名詞なので、不可算用の a little を使う。可算の a few が付くのは times（回数）のように数える意味のときだけで、I have visited Kyoto a few times.（京都を数回訪れた）のように使う。同じつづりでも意味によって可算・不可算が変わる代表例である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s183',
    subject: 'eigo',
    examType: 'koko',
    title: '可算名詞と不可算名詞③：不可算名詞の三つのタイプ',
    description: '物質名詞・抽象名詞・固有名詞という三分類で、初めて見る名詞でも可算か不可算かを判断できるようにする',
    order: 683,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '不可算名詞をひたすら暗記していると、リストにない語が出たとたんに手が止まる。ところが不可算名詞には共通点があって、大きく三つのタイプにしか分かれない。タイプごとの「なぜ数えられないのか」がわかると、初めて見る単語でも自分で判定できるようになる。',
    keyPoints: [
      '不可算名詞は①物質名詞②抽象名詞③固有名詞の三タイプに分けられる。',
      '物質名詞＝切っても分けても名前が変わらないもの（water, bread, paper, money, rice）。',
      '抽象名詞＝手でつかめない考え・気持ち・状態（information, advice, homework, news, peace, work）。',
      '固有名詞＝世界に一つしかない名前（Japan, Tom, Monday, April）。原則として a/an も the も付かない。',
      '固有名詞でも the Pacific Ocean・the United States のように the が付く決まりのものがある。',
      'タイプがわかれば、リストにない語でも可算・不可算を自分で判断できる。',
    ],
    sections: [
      {
        heading: '不可算名詞の三タイプ',
        figureId: 'lf_kokoeigoext06_183',
        body: `■ ①物質名詞（material noun）
決まった形がなく、切り分けても分けたものが同じ名前で呼ばれるもの。
例）water／milk／bread／paper／rice／money／sugar／air／wood／glass（ガラス）
判定法：「半分にしても同じ名前か」を考える。water を半分にしてもやはり water、bread をちぎってもやはり bread なので不可算。一方 apple を半分にすると apple ではなくなるので可算である。

■ ②抽象名詞（abstract noun）
手でつかめない考え・気持ち・状態・行為を表すもの。
例）information／advice／homework／news／work（仕事）／peace／love／health／beauty／kindness／progress／weather
判定法：目で見て指させるか。「愛」を指さすことはできないので不可算。

■ ③固有名詞（proper noun）
世界に一つしかない名前。頭文字を大文字で書く。
例）Japan／Tokyo／Tom／Mt. Fuji／Monday／April／English
固有名詞はそれ自体が特定のものを指しているので、原則として a/an も the も付けず、-s も付けない。
例）I live in Japan.（× in the Japan）
例）We have a test on Monday.（× on the Monday）

★ ポイント：どのタイプでも共通するのは「輪郭がないから1つ2つと切り分けられない」ということ。この一点で三タイプはつながっている。`,
      },
      {
        heading: '固有名詞に the が付く例外',
        body: `固有名詞には原則として冠詞が付かないが、決まったグループには the が付く。入試ではこの例外がそのまま問われる。

■ the が付く固有名詞
・川・海・海峡：the Shinano River, the Pacific Ocean, the Atlantic Ocean
・山脈・諸島（複数のまとまり）：the Alps, the Japanese Islands
・国名のうち複数形・普通名詞を含むもの：the United States, the United Kingdom, the Netherlands, the Philippines
・船・列車・新聞の名前：the Titanic, the Asahi Shimbun
・公共の建物・美術館：the British Museum, the White House

■ the が付かない固有名詞
・人名：Tom, Ms. Brown
・単独の山・湖：Mt. Fuji, Lake Biwa
・大部分の国名・都市名：Japan, China, Kyoto, London
・曜日・月・祝日：Monday, April, Christmas
・言語・教科：English, math, science
・駅・公園・空港（名前が付いたもの）：Tokyo Station, Ueno Park, Narita Airport

⚠ 注意：「山」は Mt. Fuji のように無冠詞だが、「山脈」は the Alps のように the が付く。単独か、集まりかで分かれると覚える。

■ 固有名詞が普通名詞のように使われる場合
固有名詞に a/an が付くと「〜のような人」「〜の作品」の意味になる。
例）He wants to be a Shohei Ohtani.（彼は大谷翔平のような選手になりたい）
例）This museum has a Picasso.（この美術館にはピカソの作品が1点ある）

★ ポイント：the が付く固有名詞は「川・海・山脈・諸島・複数形の国名・船・新聞」とまとめて唱えて覚えるのが速い。`,
      },
    ],
    trapExamples: [
      {
        question: '「私には今日、するべき仕事がたくさんある。」を英語にしなさい。',
        wrongAnswer: 'I have many works to do today.',
        trapExplanation:
          '日本語の「仕事がたくさん」から可算だと考えて works とし、many を選んでしまう。works という形が実在する（＝作品・工場）ことも誤りを後押しする。',
        correctAnswer: 'I have a lot of work to do today.（much work でも可）',
        correctExplanation:
          'work は「仕事・労働」の意味では抽象名詞で不可算なので、-s も a/an も付かない。works と複数形にすると「作品（集）」「工場」という別の意味になってしまう。「仕事」を数えたいときは可算名詞の job を使い、I have three jobs today. のように言う。',
      },
      {
        question: '（　）に the が必要ならば the を、不要ならば×を書きなさい。My uncle lives in （　） United States.',
        wrongAnswer: '×（無冠詞）',
        trapExplanation:
          '「国名には the を付けない」というルールだけを覚えていると、Japan や China と同じように United States も無冠詞にしてしまう。',
        correctAnswer: 'the（the United States）',
        correctExplanation:
          '国名でも、複数形や普通名詞（states＝州、kingdom＝王国）を含む名前には the が付く。the United States, the United Kingdom, the Netherlands, the Philippines が代表例である。一方 Japan, China, France のような単独の固有名詞には the を付けない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s184',
    subject: 'eigo',
    examType: 'koko',
    title: '可算名詞と不可算名詞④：意味によって可算・不可算が変わる語',
    description: 'paper・glass・room・work・time など、同じつづりでも意味で可算か不可算かが入れかわる名詞を整理する',
    order: 684,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      'There is no room in this box. を「この箱には部屋がない」と訳して首をかしげた経験はないだろうか。room は「部屋」なら数えられるが、「空間・余地」なら数えられない。英語には、意味が変わると数えられるかどうかまで変わる名詞がある。冠詞や -s は、意味を見分けるヒントにもなる。',
    keyPoints: [
      'paper：不可算＝紙／可算＝新聞・論文・答案（a paper, papers＝書類）。',
      'glass：不可算＝ガラス／可算＝コップ、複数形 glasses＝めがね。',
      'room：不可算＝空間・余地／可算＝部屋。',
      'work：不可算＝仕事／可算＝作品（works）、工場。',
      'time：不可算＝時間／可算＝回・時代（three times, in old times）。',
      'light（光／電灯）・fire（火／火事）・chicken（鶏肉／ニワトリ）・iron（鉄／アイロン）・hair（髪全体／髪1本）も同じ仲間。',
    ],
    sections: [
      {
        heading: '意味で可算・不可算が入れかわる名詞',
        body: `同じ単語でも「物質・抽象としてとらえるか」「輪郭のあるモノとしてとらえるか」で扱いが変わる。

■ paper
不可算＝紙という材質。 例）I need some paper.（紙が必要だ）
可算＝新聞・論文・答案・書類。 例）He is reading a paper.（彼は新聞を読んでいる）
例）Please hand in your papers.（答案を提出してください）

■ glass
不可算＝ガラスという材質。 例）The bottle is made of glass.（そのびんはガラスでできている）
可算＝コップ。 例）Can I have a glass of water?（水を1杯いただけますか）
複数形 glasses ＝めがね。 例）He wears glasses.（彼はめがねをかけている）

■ room
不可算＝空間・余地。 例）There is no room for a piano.（ピアノを置く余地がない）
可算＝部屋。 例）This house has six rooms.（この家には部屋が6つある）

■ work
不可算＝仕事。 例）I finished my work at six.（6時に仕事を終えた）
可算＝作品。 例）The works of Natsume Soseki are still popular.（夏目漱石の作品は今も人気だ）

■ time
不可算＝時間。 例）Time flies.（時は飛ぶように過ぎる）
可算＝回・時代。 例）I have been there three times.（そこへ3回行ったことがある）

★ ポイント：おおまかに「材質・概念のまま＝不可算／製品・具体物・回数になると可算」と考えるとつながりが見える。`,
      },
      {
        heading: '冠詞と -s から意味を読み取る',
        body: `この仲間の語では、冠詞や -s が「どちらの意味か」を示す標識になる。読解でも役に立つ。

■ 標識としての a / -s
a paper ＝ 新聞（紙そのものではない）
papers ＝ 書類・答案
a glass ＝ コップ1個
glasses ＝ めがね
a light ＝ 電灯1個／light ＝ 光
a fire ＝ 火事／fire ＝ 火
a chicken ＝ ニワトリ1羽／chicken ＝ 鶏肉
an iron ＝ アイロン／iron ＝ 鉄
a hair ＝ 髪の毛1本／hair ＝ 髪全体

例）There was a big fire in the town last night.（昨夜、町で大きな火事があった）
例）We cooked fish over the fire.（火で魚を焼いた）
例）I found a hair in my soup.（スープに髪の毛が1本入っていた）
例）She has long hair.（彼女は髪が長い）※ × long hairs

■ 読解での使い方
"He ate chicken for dinner." は「夕食に鶏肉を食べた」。
"He kept a chicken in the yard." なら「庭でニワトリを1羽飼っていた」。
冠詞の有無だけで、食べ物の話か生き物の話かが変わる。

⚠ 注意：hair は「髪全体」なら不可算なので、long hairs と書くと「長い毛が数本」という不気味な意味になる。日本語の「髪の毛」に引かれて複数形にしないこと。

★ ポイント：訳して意味が通らないときは、可算・不可算のもう一方の意味を当てはめてみる。room を「余地」、paper を「新聞」に読みかえた瞬間に文が通ることは多い。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。There is no room for a new desk in this classroom.',
        wrongAnswer: 'この教室には新しい机のための部屋がない。',
        trapExplanation:
          'room を反射的に「部屋」と訳してしまう。しかも「教室（classroom）」という語が近くにあるため、部屋の話だと思いこみやすい。',
        correctAnswer: 'この教室には新しい机を置く余地（スペース）がない。',
        correctExplanation:
          'room は a も -s も付かない裸の形で使われているので「空間・余地」の意味の不可算名詞である。「部屋」の意味なら a room / six rooms のように可算として使われるはずである。冠詞の有無が意味を決める標識になっている典型例で、make room for〜（〜のための場所をあける）も同じ用法。',
      },
      {
        question: '「レポートを書くのに紙が3枚必要だ。」の「紙が3枚」を英語で書きなさい。',
        wrongAnswer: 'three papers',
        trapExplanation:
          '「紙」＝paper と覚えているため、そのまま複数形にして three papers としてしまう。papers という形が実在することも誤りに気づきにくい原因である。',
        correctAnswer: 'three sheets of paper（three pieces of paper でも可）',
        correctExplanation:
          '材質としての「紙」は不可算なので -s は付かず、数えるときは sheet や piece という単位語を借りて three sheets of paper とする。three papers と書くと「3つの答案・論文・新聞」という別の意味になってしまう。複数形にするのは sheet のほうである点にも注意する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s185',
    subject: 'eigo',
    examType: 'koko',
    title: '可算名詞と不可算名詞⑤：複数形の作り方と単複同形',
    description: '-s／-es／-ies／-ves の規則、不規則複数、単複同形、常に複数形の名詞を体系的に押さえる',
    order: 685,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      'leaf の複数形を leafs と書いてバツをもらった人は多い。正しくは leaves だが、roof は rooves ではなく roofs である。似た形なのに変化がちがうのは、規則と例外が混ざっているからだ。ここで規則をきちんと線引きし、覚えるべき例外だけを絞りこんでおこう。',
    keyPoints: [
      '原則は -s。s, x, ch, sh, o で終わる語は -es（buses, boxes, watches, dishes, potatoes）。',
      '「子音字＋y」は y を i に変えて -es（cities, countries）。「母音字＋y」はそのまま -s（boys, days）。',
      'f / fe で終わる語は f を v に変えて -es（leaves, knives, wives）。ただし roofs, chiefs, safes は例外。',
      '不規則変化：man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice。',
      '単複同形：sheep, deer, fish, Japanese, Chinese は複数でも形が変わらない。',
      '常に複数形：glasses, shoes, socks, scissors, trousers/pants。数えるときは a pair of を使う。',
    ],
    sections: [
      {
        heading: '複数形を作る規則',
        body: `■ ①原則：-s を付ける
book → books／dog → dogs／car → cars

■ ②s, x, ch, sh, o で終わる語：-es
bus → buses／box → boxes／watch → watches／dish → dishes／potato → potatoes／tomato → tomatoes
※ ただし piano → pianos、photo → photos は -s のみ。o で終わる語は「食べ物は -es、外来語は -s」と覚えると整理しやすい。

■ ③子音字＋y で終わる語：y を i に変えて -es
city → cities／country → countries／story → stories／baby → babies
※ 母音字＋y はそのまま -s：boy → boys／day → days／key → keys／monkey → monkeys

■ ④f, fe で終わる語：f を v に変えて -es
leaf → leaves／knife → knives／wife → wives／life → lives／shelf → shelves／thief → thieves
※ 例外（そのまま -s）：roof → roofs／chief → chiefs／safe → safes／belief → beliefs

■ ⑤不規則変化
man → men／woman → women／child → children／foot → feet／tooth → teeth／mouse → mice／ox → oxen
※ women のつづりは変わるが、発音が「ウィミン」と変わる点も要注意。

★ ポイント：③と④は「y を i に」「f を v に」という音の変化がもとになっている。声に出して cities（シティーズ）、leaves（リーヴズ）と言うと、変化の理由が実感できる。`,
      },
      {
        heading: '単複同形の名詞と、いつも複数形の名詞',
        body: `■ 単複同形（複数になっても形が変わらない）
sheep（羊）／deer（鹿）／fish（魚）／carp（こい）／aircraft（航空機）
国民を表す語：Japanese／Chinese／Swiss
例）There are five sheep in the field.（野原に羊が5匹いる）※ × five sheeps
例）Many Japanese visit Kyoto every year.（毎年多くの日本人が京都を訪れる）
⚠ 注意：fish は種類がちがう魚をまとめて言うときだけ fishes になることがあるが、中学・高校入試では fish のままでよい。
⚠ 注意：国民の呼び方でも -s が付くものがある。American → Americans／German → Germans／Italian → Italians。-ese と -ss（Swiss）で終わる語だけが単複同形と覚える。

■ いつも複数形で使う名詞（二つで一組のもの）
glasses（めがね）／shoes（靴）／socks（靴下）／scissors（はさみ）／trousers・pants（ズボン）／gloves（手袋）／chopsticks（はし）
これらは a を付けず、数えるときは a pair of を使う。
例）I bought a pair of shoes.（靴を1足買った）
例）These scissors are not sharp.（このはさみは切れない）※ 主語なので動詞は are
例）Where are my glasses?（私のめがねはどこ）

■ 形は単数、意味は複数の集合名詞
police（警察）／people（人々）は複数扱いをする。
例）The police are looking for the man.（警察はその男を捜している）
例）Many people were waiting at the station.（多くの人が駅で待っていた）

★ ポイント：a pair of shoes が主語のときは、核は a pair なので動詞は単数（A pair of shoes is on the floor.）。「二つで一組」の名詞をそのまま主語にしたときだけ複数扱いになる。`,
      },
    ],
    trapExamples: [
      {
        question: '次の語を複数形にしなさい。(1) leaf　(2) roof',
        wrongAnswer: '(1) leafs　(2) rooves',
        trapExplanation:
          'f で終わる語はすべて v に変わると思いこむと roof を rooves にしてしまい、逆に規則を知らないと leaf を leafs にしてしまう。どちらも「f→v」の規則を一律に当てはめようとして起きる誤り。',
        correctAnswer: '(1) leaves　(2) roofs',
        correctExplanation:
          'f・fe で終わる語の多くは f を v に変えて -es を付ける（leaf→leaves, knife→knives, wife→wives, life→lives, shelf→shelves）。しかし roof, chief, safe, belief は例外でそのまま -s を付ける。例外は4語程度しかないので、「屋根・長・金庫・信念はそのまま」と語呂で覚えてしまうのが早い。',
        },
      {
        question: '（　）内の語を必要なら適する形に変えなさい。We saw ten (sheep) on the hill.',
        wrongAnswer: 'sheeps',
        trapExplanation:
          'ten という数がある以上、複数形にしなければならないと考えて機械的に -s を付けてしまう。日本語では「羊が10匹」と数えるので、複数形が必要だという感覚も強い。',
        correctAnswer: 'sheep（変化なし）',
        correctExplanation:
          'sheep は単数形と複数形が同じ形の名詞（単複同形）で、ten sheep のように数詞が付いても形は変わらない。deer, fish, Japanese, Chinese も同じ仲間である。複数であることは ten や動詞の are などから判断する。逆に man, child, foot などは不規則に形が変わるので、二つのタイプを混同しないようにする。',
      },
    ],
  },

  // ─────────── 2. 不可算名詞の数え方（s186〜s189 / order 686〜689） ───────────
  {
    id: 'koko_eigo_s186',
    subject: 'eigo',
    examType: 'koko',
    title: '不可算名詞の数え方①：容器で数える（a cup of / a glass of）',
    description: '液体や粉のような不可算名詞を、容器を表す単位語を使って数える方法を身につける',
    order: 686,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      'カフェで「コーヒーを2つ」と言うとき、私たちは「コーヒー」ではなく「カップ」を数えている。英語もまったく同じ発想で、two coffees ではなく two cups of coffee と言う。数えられないものは、入れ物や形を借りて数える——この一手を知っていれば、水も砂糖もパンも自由に数えられる。',
    keyPoints: [
      '不可算名詞は「単位語 + of + 名詞」で数える。単位語のほうを複数形にする。',
      '容器で数える：a cup of coffee/tea（温かい飲み物）、a glass of water/milk（冷たい飲み物）。',
      'a bottle of juice、a can of coke、a bowl of rice/soup も同じ形。',
      '× two cups of coffees ではなく ○ two cups of coffee。of の後ろは裸のまま。',
      'How many cups of coffee 〜? のように、疑問文では単位語を数える形にする。',
      'a cup of coffee は約150mL、a glass of water は約200mL が目安。器のサイズで語が決まる。',
    ],
    sections: [
      {
        heading: '容器を借りて数える',
        figureId: 'lf_kokoeigoext06_186',
        body: `水やコーヒーのように形の定まらないものは、入っている容器を数えることで量を表す。

■ 基本の形
「数詞 + 単位語(複数形) + of + 不可算名詞」
例）a cup of coffee（コーヒー1杯）
例）two cups of coffee（コーヒー2杯）
例）three glasses of water（水3杯）

■ 代表的な容器の単位語
a cup of 〜：温かい飲み物を入れる取っ手つきのカップ。coffee, tea, cocoa。
a glass of 〜：冷たい飲み物を入れるガラスのコップ。water, milk, juice。
a bottle of 〜：びん。water, wine, milk。
a can of 〜：缶。coke, juice, soup。
a bowl of 〜：どんぶり・深皿。rice, soup, salad。
a spoonful of 〜：スプーン1杯分。sugar, salt。
例）She drank a glass of milk before bed.（彼女は寝る前に牛乳を1杯飲んだ）
例）Add two spoonfuls of sugar to the tea.（紅茶に砂糖をスプーン2杯入れなさい）

■ 温かい飲み物は cup、冷たい飲み物は glass
日本語ではどちらも「1杯」だが、英語は器の材質と用途で語を選ぶ。
○ a cup of tea（お茶1杯）／○ a glass of water（水1杯）
△ a glass of tea は「アイスティー」を想像させる。

★ ポイント：容量の目安を知っておくと語の選択で迷わない。カップ約150mL、コップ約200mL、缶約350mL、ペットボトル約500mL。図の目盛りで確かめておこう。`,
      },
      {
        heading: '複数形にする位置と、疑問文での形',
        body: `この形でいちばん狙われるのは「どの語を複数形にするか」である。

■ 複数形にするのは単位語のほう
○ two cups of coffee　× two cups of coffees　× two cup of coffees
of の後ろの不可算名詞は、いくつになっても裸のままで変化しない。
例）I drink three cups of green tea every day.（毎日、緑茶を3杯飲む）

■ 疑問文・数のたずね方
数えているのは単位語なので、How many を使って単位語を問う。
例）How many cups of coffee do you drink a day?（1日に何杯コーヒーを飲みますか）
不可算名詞そのものの量を問うなら How much を使う。
例）How much coffee do you drink a day?（1日にどれくらいコーヒーを飲みますか）

■ 会話での省略
実際の会話では Two coffees, please.（コーヒー2つください）のように単位語を省くこともある。これは「2杯分の注文」という意味で定着した言い方である。
⚠ 注意：入試の英作文では省略形は避け、Two cups of coffee, please. と書くのが安全である。

■ 数えられる名詞には使わない
単位語は不可算名詞のための道具なので、可算名詞には使わない。
× two pieces of apples → ○ two apples
ただし a piece of cake（ケーキ1切れ）のように「切り分けたひと切れ」を言うときは、ケーキ全体（a cake）と区別して使う。

★ ポイント：「複数形の -s は of の左側だけ」と覚えると、この単元のミスはほぼ消える。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎朝コーヒーを2杯飲みます。」を英語にしなさい。',
        wrongAnswer: 'I drink two cups of coffees every morning.',
        trapExplanation:
          '「2杯」だから複数だと考えて、cup と coffee の両方に -s を付けてしまう。日本語の「コーヒー2杯」では両方が複数のように感じられることが原因。',
        correctAnswer: 'I drink two cups of coffee every morning.',
        correctExplanation:
          '数えているのは容器である cup なので、複数形にするのは cups だけである。coffee は不可算名詞なので、量がいくら増えても裸の coffee のまま変化しない。「-s は of の左側だけ」と覚える。同様に three glasses of water, two pieces of cake となる。',
      },
      {
        question: '（　）に How many か How much を入れなさい。（　） water do you drink every day?',
        wrongAnswer: 'How many',
        trapExplanation:
          '「どれくらい水を飲むか」を「何杯飲むか」と読みかえてしまい、数をたずねる How many を選んでしまう。日本語では量も数も「どれくらい」で言えることが混乱のもとである。',
        correctAnswer: 'How much',
        correctExplanation:
          '直後に来ている名詞が不可算名詞の water なので、量をたずねる How much を使う。もし杯数を問いたいのなら How many glasses of water do you drink every day? のように、可算の単位語 glasses を置いてから How many を使う。How many/How much は「直後の名詞が可算か不可算か」だけで決まる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s187',
    subject: 'eigo',
    examType: 'koko',
    title: '不可算名詞の数え方②：形で数える（a piece of / a sheet of / a slice of）',
    description: '容器を使わない不可算名詞を、形や切り方を表す単位語で数える方法を整理する',
    order: 687,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '紙は容器に入らないし、アドバイスに至っては形すらない。それでも英語は「1枚」「1つ」と数えたい。そこで登場するのが piece・sheet・slice といった、形や切り方を表す単位語だ。どの語がどの名詞と組むのかには理屈があって、丸暗記しなくても選べるようになる。',
    keyPoints: [
      'a piece of 〜：万能の単位語。paper, advice, information, furniture, news, cake, music に使える。',
      'a sheet of paper：薄く平らな1枚。a slice of bread/cheese/meat：薄く切ったひと切れ。',
      'a loaf of bread：焼いたパンのかたまり1本。a bar of chocolate/soap：棒状のかたまり。',
      'a pair of shoes/glasses/scissors：二つで一組のもの。',
      'a piece of news（ニュース1本）／an item of news も可。a news とは言えない。',
      '迷ったら a piece of。ただし紙は sheet、薄切りは slice を選ぶと自然になる。',
    ],
    sections: [
      {
        heading: '形・切り方を表す単位語',
        body: `■ piece（万能）
「切れ・一片・1つ」を表し、多くの不可算名詞に使える。
例）a piece of paper（紙1枚）／two pieces of advice（助言2つ）／a piece of information（情報1つ）／a piece of furniture（家具1点）／a piece of cake（ケーキ1切れ）／a piece of music（曲1曲）／a piece of news（ニュース1本）

■ sheet（薄く平らな1枚）
例）a sheet of paper（紙1枚）／two sheets of glass（ガラス2枚）
piece より「きちんとした1枚」という感じが強く、答案用紙やコピー用紙には sheet が合う。

■ slice（薄く切ったひと切れ）
例）a slice of bread（食パン1枚）／three slices of cheese（チーズ3枚）／a slice of ham
包丁で薄く切ったイメージ。

■ loaf（焼いたパンのかたまり）
例）a loaf of bread（食パン1斤）／two loaves of bread
※ loaf の複数形は loaves（f→v の規則変化）。

■ bar（棒状のかたまり）
例）a bar of chocolate（板チョコ1枚）／a bar of soap（石けん1個）

■ pair（二つで一組）
例）a pair of shoes（靴1足）／two pairs of glasses（めがね2つ）／a pair of scissors（はさみ1丁）

■ その他
a bunch of bananas（バナナ1房）／a drop of water（水1滴）／a grain of rice（米1粒）／a piece of chalk（チョーク1本）

★ ポイント：「薄く平らなら sheet／薄く切ったら slice／かたまりなら loaf・bar／それ以外は piece」と、形で決めるのが速い。`,
      },
      {
        heading: '入試で狙われる組み合わせ',
        body: `単位語は、不可算名詞ときちんとペアで覚えておく必要がある。とくに次の組み合わせは頻出である。

■ 抽象名詞 × piece
advice → a piece of advice（助言1つ）
information → a piece of information（情報1つ）
news → a piece of news（ニュース1本）
work → a piece of work（作品1点・仕事1つ）
例）He gave me two pieces of useful advice.（彼は役に立つ助言を2つくれた）
例）I have a piece of good news for you.（あなたによい知らせが一つあります）

■ furniture / baggage × piece
例）We have only three pieces of furniture in this room.（この部屋には家具が3点しかない）
例）How many pieces of baggage do you have?（手荷物はいくつお持ちですか）

■ 数を増やすときの形
複数形にするのは単位語だけ。
○ five pieces of paper　× five pieces of papers　× five piece of paper

⚠ 注意：a news／an information／an advice とは絶対に言えない。「1つの知らせ」は a piece of news である。テレビ番組の「ニュース」も the news で、複数扱いはしない。

■ 単位語を使わない言いかえ
単位語が思い出せないときは、可算名詞に言いかえる手もある。
a piece of advice → a suggestion（提案1つ）
a piece of work → a job（仕事1つ）
a piece of furniture → a desk / a chair（具体名）
例）He gave me two suggestions.（彼は提案を2つしてくれた）

★ ポイント：英作文では、単位語が出てこないときに「可算名詞に言いかえる」逃げ道を持っておくと減点を防げる。`,
      },
    ],
    trapExamples: [
      {
        question: '「先生は私に二つの助言をくださった。」を英語にしなさい。',
        wrongAnswer: 'My teacher gave me two advices.',
        trapExplanation:
          '日本語の「二つの助言」に引かれて advice を可算名詞と考え、複数形にしてしまう。「アドバイス」というカタカナ語が数えられるものとして日常的に使われることも原因である。',
        correctAnswer: 'My teacher gave me two pieces of advice.',
        correctExplanation:
          'advice は不可算名詞なので -s も a/an も付かず、数えるときは piece を借りて two pieces of advice とする。複数形にするのは pieces のほうである。どうしても単位語が出てこないときは、可算名詞の suggestion に言いかえて two suggestions と書く方法もある。',
      },
      {
        question: '（　）内から適する語を選びなさい。Would you give me a (sheet / slice) of paper?',
        wrongAnswer: 'slice',
        trapExplanation:
          'slice も「1枚」と訳せるため、a slice of bread と同じ感覚で紙にも使えると考えてしまう。日本語では「パン1枚」も「紙1枚」も同じ「枚」なので区別がつきにくい。',
        correctAnswer: 'sheet',
        correctExplanation:
          'slice は「厚みのあるものを薄く切り取ったひと切れ」を指すので、bread, cheese, ham, cake などに使う。紙のようにもともと薄く平らなものは sheet で数え、a sheet of paper とする。より口語的には a piece of paper でもよい。単位語は「もとの形と切り方」で選ぶと覚えやすい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s188',
    subject: 'eigo',
    examType: 'koko',
    title: '不可算名詞の数え方③：many / much と (a) few / (a) little',
    description: '可算・不可算で使い分ける数量形容詞を、量の多少と a の有無の二軸で整理する',
    order: 688,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      'He has few friends. と He has a few friends. は a が一つあるかないかの差だが、意味は「友達がほとんどいない」と「友達が数人いる」でほぼ正反対になる。たった1文字が肯定と否定を分けるのだ。この単元では、可算・不可算という軸と、a の有無という軸の二つを同時に整理する。',
    keyPoints: [
      '可算名詞には many / a few / few、不可算名詞には much / a little / little を使う。',
      'a few＝「少しはある」（肯定的）、few＝「ほとんどない」（否定的）。',
      'a little＝「少しはある」（肯定的）、little＝「ほとんどない」（否定的）。',
      'a lot of / lots of / plenty of / some / any / no は可算・不可算どちらにも使える。',
      'much は肯定文では堅く、ふつう a lot of を使う。否定文・疑問文では much が自然。',
      'quite a few＝かなり多くの（可算）、only a few＝ほんの少しの、という慣用も押さえる。',
    ],
    sections: [
      {
        heading: '二つの軸で整理する',
        figureId: 'lf_kokoeigoext06_188',
        body: `数量を表す形容詞は「可算か不可算か」「多いか少ないか」の二軸で決まる。

■ たくさん
可算 → many　例）many books（たくさんの本）
不可算 → much　例）much water（たくさんの水）
両方 → a lot of / lots of / plenty of
例）There are a lot of students in the gym.（体育館にたくさんの生徒がいる）
例）There is a lot of water in the tank.（タンクにたくさんの水がある）

■ 少しある（肯定的）
可算 → a few　例）a few books（本が数冊）
不可算 → a little　例）a little water（水が少し）
例）I have a few questions.（質問がいくつかあります）
例）Give me a little time.（少し時間をください）

■ ほとんどない（否定的）
可算 → few　例）few books（本がほとんどない）
不可算 → little　例）little water（水がほとんどない）
例）Few people know the truth.（真実を知っている人はほとんどいない）
例）There is little hope.（望みはほとんどない）

■ a の有無が意味を決める
a few / a little の a は「1つ」の a と同じで、「ちゃんと存在している」ことを示す。a が消えると「あるにはあるが無いに等しい」という否定の意味に変わる。
例）He has a few friends.（彼には友達が数人いる）
例）He has few friends.（彼にはほとんど友達がいない）

★ ポイント：訳すときは「a があれば前向き、a がなければ後ろ向き」と機械的に判断してよい。図の二軸マップで位置関係を確認しておこう。`,
      },
      {
        heading: 'much の使いどころと言いかえ',
        body: `many と much は対になる語だが、実際の使われ方には差がある。

■ much は否定文・疑問文が中心
肯定文で much を単独で使うと堅い響きになるため、ふつうは a lot of に置きかえる。
△ I have much money.（堅い）
○ I have a lot of money.（自然）
○ I don't have much money.（否定文なら much が自然）
○ Do you have much homework?（疑問文なら much が自然）
※ many は肯定文でもふつうに使える（I have many friends.）。

■ so much / too much / very much なら肯定文でもよい
much の前に so, too, very, how が付けば肯定文でも自然である。
例）Thank you very much.（どうもありがとう）
例）You eat too much sugar.（砂糖を取りすぎだ）
例）There was so much snow that the train stopped.（雪がとても多く、電車が止まった）

■ 書きかえで使う言いかえ
many＝a lot of＝lots of＝a large number of（可算）
much＝a lot of＝lots of＝a large amount of＝a great deal of（不可算）
例）He has a large number of books.＝He has many books.
例）She spent a great deal of time on it.＝She spent much time on it.

■ 主語になったときの動詞
a lot of の後ろの名詞が可算複数なら動詞は複数、不可算なら単数になる。
例）A lot of students are waiting outside.（多くの生徒が外で待っている）
例）A lot of water is needed.（多くの水が必要だ）

⚠ 注意：many of / much of のように of が入るときは、後ろに the や my などの限定語が必要である。○ many of the students　× many of students`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。She has few friends in this town.',
        wrongAnswer: '彼女はこの町に友達が少しいる。',
        trapExplanation:
          'few を「少ない＝少しある」と訳してしまう。a few との違いを意識していないと、どちらも「少し」と訳して肯定的な意味にとってしまう。',
        correctAnswer: '彼女はこの町にほとんど友達がいない。',
        correctExplanation:
          'a のない few は「ほとんどない」という否定的な意味を表す。a few なら「数人はいる」という肯定的な意味になる。不可算名詞の場合も同じで、little＝ほとんどない、a little＝少しはある、と対応する。訳し分けのポイントは「a があれば前向き、なければ後ろ向き」である。',
      },
      {
        question: '（　）内から適する語句を選びなさい。We didn\'t have (many / much) rain last summer.',
        wrongAnswer: 'many',
        trapExplanation:
          '「雨がたくさん降る」という日本語から、雨粒を数えるイメージで可算だと判断し many を選んでしまう。また many のほうが使い慣れているため、反射的に選んでしまうことも多い。',
        correctAnswer: 'much',
        correctExplanation:
          'rain は形の定まらない物質名詞で不可算なので、量を表す語は much を使う。しかもこの文は否定文なので、much がもっとも自然な位置づけになる。肯定文なら We had a lot of rain last summer. と a lot of を使うほうが自然である。snow, water, money, time も同じ扱いをする。',
      },
    ],
  },

  {
    id: 'koko_eigo_s189',
    subject: 'eigo',
    examType: 'koko',
    title: '不可算名詞の数え方④：a lot of・some・any と数量表現の総合',
    description: 'a lot of／some／any／no の使い分けと、数量表現が主語になったときの動詞の一致を確認する',
    order: 689,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      'A lot of students is waiting. と書いてしまう人が意外に多い。a lot of という「かたまり」を単数だと感じてしまうからだ。しかし英語では、動詞は of の後ろの名詞に合わせる。数量表現が主語に来たとき、どこを見て動詞を決めるのか——ここを固めると長文の主述チェックも速くなる。',
    keyPoints: [
      'a lot of / lots of / plenty of / some / any / no は可算・不可算の両方に使える。',
      'a lot of 〜 が主語のときは、of の後ろの名詞に動詞を合わせる。',
      'some は肯定文・勧誘や依頼の疑問文で、any は否定文・ふつうの疑問文で使う。',
      'not 〜 any ＝ no。No students came. のように no は動詞を否定形にしない。',
      'How many + 可算名詞の複数形／How much + 不可算名詞。',
      'a number of＝多くの（可算・複数扱い）、the number of＝〜の数（単数扱い）。',
    ],
    sections: [
      {
        heading: 'a lot of・some・any・no の使い分け',
        body: `■ a lot of / lots of / plenty of（両方に使える）
例）a lot of books（たくさんの本）／a lot of water（たくさんの水）
くだけた形が lots of、「十分な量」を強調するのが plenty of。
例）There is plenty of time before the movie starts.（映画が始まるまで十分に時間がある）

■ some（肯定文）と any（否定文・疑問文）
例）I have some questions.（質問がいくつかあります）
例）I don't have any questions.（質問はまったくありません）
例）Do you have any questions?（何か質問はありますか）

■ 疑問文でも some を使う場合
相手に「はい」と言ってほしい勧誘・依頼の疑問文では some を使う。
例）Would you like some tea?（お茶はいかがですか）
例）Can I have some water?（水をいただけますか）

■ any が肯定文に来る場合
肯定文の any は「どんな〜でも」の意味になる。
例）Any student can join the club.（どの生徒でもその部に入れる）

■ no（＝not 〜 any）
例）I have no money.＝I don't have any money.（お金がまったくない）
例）No students came to school yesterday.（昨日は一人も生徒が来なかった）
⚠ 注意：no はそれ自体が否定なので、動詞を否定形にしない。× No students didn't come.

★ ポイント：some/any は「肯定か否定か」ではなく「相手にどう答えてほしいか」で選ぶと、勧誘の some も自然に理解できる。`,
      },
      {
        heading: '数量表現が主語のときの動詞',
        body: `数量表現が主語に来ると、動詞を単数にするか複数にするかで迷う。判断の基準は決まっている。

■ a lot of / some / any / all / most + 名詞
動詞は of の後ろの名詞に合わせる。
例）A lot of students are waiting outside.（多くの生徒が外で待っている）※ students が複数
例）A lot of water is wasted every day.（毎日多くの水が無駄になっている）※ water が不可算＝単数
例）Most of the class was absent.（クラスのほとんどが欠席だった）※ class が単数

■ a number of と the number of
a number of ＋ 複数名詞 ＝「多くの〜」→ 複数扱い
the number of ＋ 複数名詞 ＝「〜の数」→ 単数扱い
例）A number of students were absent.（多くの生徒が欠席していた）
例）The number of students is increasing.（生徒の数が増えている）
この二つは入試で頻繁に対比される。「a なら多く、the なら数そのもの」と覚える。

■ each / every + 単数名詞
必ず単数扱いになる。
例）Each student has a tablet.（生徒はそれぞれタブレットを持っている）
例）Every room was clean.（どの部屋も清潔だった）

■ How many / How much
例）How many books do you have?（本を何冊持っていますか）
例）How much money do you need?（いくらお金が必要ですか）
How many の後ろは必ず可算名詞の複数形になる。× How many book

★ ポイント：主語が長いときは「of の直前で切って、of の後ろの名詞を見る」。この一手で主述の一致ミスはほぼ防げる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。The number of foreign visitors （　） increasing every year.',
        wrongAnswer: 'are',
        trapExplanation:
          '直前に visitors という複数形があるため、それに引かれて are を選んでしまう。「訪問者が増えている」という日本語訳からも複数だと感じやすい。',
        correctAnswer: 'is',
        correctExplanation:
          '主語の中心は The number（数）で、of foreign visitors はそれを説明しているだけなので単数扱いになり、is が正しい。一方 A number of foreign visitors are increasing. のように a number of なら「多くの訪問者」という意味で複数扱いになる。「the number of は数そのもの＝単数、a number of は多くの〜＝複数」と対で覚える。',
      },
      {
        question: '（　）内から適する語を選びなさい。Would you like (some / any) more cake?',
        wrongAnswer: 'any',
        trapExplanation:
          '「疑問文では any」という規則だけを機械的に当てはめてしまう。Do you have any 〜? の形に慣れていると、疑問文を見た瞬間に any を選ぶくせがつきやすい。',
        correctAnswer: 'some',
        correctExplanation:
          '相手に「はい、いただきます」と言ってほしい勧誘・依頼の疑問文では some を使う。Would you like some 〜? / Can I have some 〜? / Shall I make some 〜? はその代表である。単に有無をたずねる疑問文（Do you have any brothers?）では any を使う。some/any は文の形ではなく、話し手の期待で決まる。',
      },
    ],
  },

  // ─────────── 3. a/an と the の使い分け（s190〜s195 / order 690〜695） ───────────
  {
    id: 'koko_eigo_s190',
    subject: 'eigo',
    examType: 'koko',
    title: 'a と an の使い分け：つづりではなく「音」で決まる',
    description: 'an hour・a university のように、直後の語の発音で a と an が決まる仕組みを理解する',
    order: 690,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '「a, i, u, e, o の前は an」と習ったのに、a university は an にならない。逆に h で始まる hour には an が付く。実は a と an を決めているのはつづりではなく、口に出したときの最初の音だ。ルールを音に置きかえた瞬間、例外に見えていたものが全部きれいに説明できる。',
    keyPoints: [
      'a / an は「不特定の1つ」を表す不定冠詞。可算名詞の単数にだけ付く。',
      '直後の語の発音が母音（ア・イ・ウ・エ・オ）で始まれば an、子音で始まれば a。',
      'つづりが母音字でも子音で読む語は a：a university, a uniform, a European country, a one-way ticket。',
      'つづりが子音字でも母音で読む語は an：an hour, an honest man, an honor, an heir。',
      '略語は文字の読み方で決まる：an MP3 player（エム）、an X-ray（エックス）、a UFO（ユー）、a UN officer（ユー）。',
      '冠詞は名詞の直前ではなく「形容詞を含めた語群の先頭」に置く：an old man, a big apple。',
    ],
    sections: [
      {
        heading: '判断するのは「つづり」ではなく「音」',
        figureId: 'lf_kokoeigoext06_190',
        body: `不定冠詞 a / an は、可算名詞の単数形の前に置いて「不特定の1つ」を表す。どちらを使うかは、直後に来る語の最初の「音」で決まる。

■ 原則
母音の音（ア・イ・ウ・エ・オ）で始まる → an
子音の音で始まる → a
例）an apple／an egg／an idea／an orange／an umbrella
例）a book／a car／a desk／a table

■ つづりは母音字だが、子音で読む語 → a
university は「ユニヴァーシティ」と読み、最初の音は「ユ（y の音）」で子音である。
例）a university（大学）／a uniform（制服）／a useful book（役に立つ本）／a European country（ヨーロッパの国）／a one-way ticket（片道切符）／a united team
※ one は「ワン」と読むので最初の音は w の子音である。

■ つづりは子音字だが、母音で読む語 → an
hour は h を発音せず「アワー」と読むので、最初の音は母音である。
例）an hour（1時間）／an honest boy（正直な少年）／an honor（名誉）／an heir（相続人）
※ h が読まれない語は hour, honest, honor, heir の4語がほぼすべてで、house, hospital, history などは h を読むので a を使う。

■ 略語（アルファベットを1字ずつ読む語）
文字の読み方で判断する。
an MP3 player（エム＝母音）／an X-ray（エックス＝母音）／an SNS user（エス＝母音）／an hour-long movie
a UFO（ユー＝子音）／a USB cable（ユー＝子音）／a UN officer

★ ポイント：迷ったら声に出して読んでみる。「ア・イ・ウ・エ・オ」で始まれば an、それ以外は a。図の四つのマスで、つづりと音がずれる二つのマスを確認しておこう。`,
      },
      {
        heading: '冠詞を置く位置と、a/an の意味',
        body: `■ 冠詞は語群の先頭に置く
形容詞が入るときは、名詞の直前ではなく形容詞を含めた全体の先頭に置く。したがって a/an を決めるのは「形容詞の最初の音」になる。
例）an old man（老人）※ old が母音で始まる
例）a small egg（小さな卵）※ egg は母音だが small が子音なので a
例）an interesting book（おもしろい本）
例）a useful idea（役に立つ考え）
⚠ 注意：a small egg を an small egg としないこと。判断するのは a/an の「すぐ右の語」である。

■ a / an が表す四つの意味
①不特定の1つ：I saw a cat in the garden.（庭でネコを1匹見た）
②「1つの」という数：Rome was not built in a day.（ローマは一日にして成らず）
③「〜につき」：I go to the gym twice a week.（週に2回ジムへ行く）
④「ある〜」：A Mr. Smith came to see you.（スミスさんという方が訪ねてきた）

■ 副詞が入るときも「すぐ右の語」で決める
例）a very old man（very が子音なので a）
例）an extremely old man（extremely が母音なので an）

★ ポイント：a/an の判定は「右どなりの語を声に出す」だけ。名詞まで見に行く必要はない。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に a か an を入れなさい。My brother is （　） university student.',
        wrongAnswer: 'an',
        trapExplanation:
          '「u は母音字だから an」というつづりだけのルールを覚えていると、university を見た瞬間に an を選んでしまう。',
        correctAnswer: 'a',
        correctExplanation:
          'university は「ユニヴァーシティ」と読み、最初の音は「ユ」という子音（y の音）なので a を使う。a/an はつづりではなく発音で決まる。同じ仲間に a uniform, a useful tool, a European country, a one-way ticket がある。逆に an hour, an honest man は子音字で始まるが h を読まないので an になる。',
      },
      {
        question: '（　）に a か an を入れなさい。We waited for （　） old bus at the stop.',
        wrongAnswer: 'a',
        trapExplanation:
          '名詞の bus が子音で始まることに気を取られ、bus に合わせて a を選んでしまう。冠詞は名詞ではなく、すぐ右どなりの語に合わせることを忘れた誤り。',
        correctAnswer: 'an',
        correctExplanation:
          '冠詞は形容詞を含めた語群の先頭に置かれるので、判断の基準はすぐ右の old になる。old は母音で始まるため an old bus が正しい。逆に a small egg は名詞 egg が母音でも、右どなりの small が子音なので a を使う。「見るのは右どなり1語だけ」と覚える。',
      },
    ],
  },
  {
    id: 'koko_eigo_s191',
    subject: 'eigo',
    examType: 'koko',
    title: 'the の基本：聞き手が「どれのことか」わかるとき',
    description: '二度目の登場・場面で一つに決まるもの・後ろから限定されるものという、the が付く三つの場面を押さえる',
    order: 691,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '「昨日、犬を見たよ。その犬は白かった。」——日本語なら「その」を付けるだけの話だが、英語ではこれが a dog から the dog への切りかえになる。the は「あなたもどれのことかわかりますよね」という合図である。相手の頭の中に同じものが浮かんでいるかどうか、それが判断の基準になる。',
    keyPoints: [
      'the ＝「話し手と聞き手の両方が、どれのことかわかっている」という合図。',
      '場面①：一度話に出たものを二度目に指すとき（a dog → the dog）。',
      '場面②：その場の状況で一つに決まるとき（Close the door. / the sun）。',
      '場面③：of 句・関係代名詞・前置詞句で後ろから限定されているとき（the book on the desk）。',
      'the は可算・不可算、単数・複数のどれにも付けられる（the water, the books）。',
      'the の発音は子音の前が「ザ」、母音の前が「ジ」（the apple, the hour）。',
    ],
    sections: [
      {
        heading: 'the が付く三つの場面',
        body: `定冠詞 the は「相手にも特定できる」ことを示す語である。付ける・付けないは、次の三場面で判断する。

■ 場面①：二度目に指すとき
初めて話に出すときは a/an、一度出たものを指し直すときは the。
例）I saw a dog in the park. The dog was very big.（公園で犬を見た。その犬はとても大きかった）
例）She bought a bag and a hat. The bag was made in Italy.（かばんと帽子を買った。そのかばんはイタリア製だった）

■ 場面②：その場の状況で一つに決まるとき
教室で「ドアを閉めて」と言えば、どのドアかは言わなくてもわかる。
例）Please close the door.（ドアを閉めてください）
例）Turn off the light.（電気を消して）
また、世界に一つしかないものにも the が付く。
例）the sun（太陽）／the moon（月）／the earth（地球）／the sky（空）／the world（世界）

■ 場面③：後ろから限定されるとき
of 句・前置詞句・関係代名詞・to不定詞などで「どれか」がはっきりする場合。
例）the book on the desk（机の上の本）
例）the girl who is playing the piano（ピアノをひいている少女）
例）the capital of Japan（日本の首都）
例）the way to the station（駅への道）

★ ポイント：「初めて＝a、二度目＝the」だけを覚えていると場面②③でつまずく。「聞き手がどれか特定できるか」という一つの基準で三場面をまとめて考えるとよい。

■ the の発音
子音の前 → ザ（the book, the university）
母音の前 → ジ（the apple, the hour, the MP3 player）
a/an と同じく、つづりではなく音で決まる。`,
      },
      {
        heading: '複数形・不可算名詞に付く the',
        body: `a/an は可算名詞の単数にしか付かないが、the はどんな名詞にも付けられる。ここが二つの冠詞の大きな違いである。

■ the + 複数形
例）The students in this class are very kind.（このクラスの生徒たちはとても親切だ）
例）I washed the dishes after dinner.（夕食後、食器を洗った）
※ 無冠詞の複数形（Students are kind.）は「生徒というもの一般」を指し、the が付くと「特定のあの生徒たち」に変わる。

■ the + 不可算名詞
例）The water in this bottle is cold.（このびんの中の水は冷たい）
例）I can't hear you because of the noise.（騒音のせいで声が聞こえない）
※ 無冠詞の Water is important. なら「水一般」の話。

■ 総称と特定の対比
無冠詞複数：Dogs are friendly animals.（犬というものは人なつこい動物だ）
the + 複数：The dogs are friendly.（その犬たちは人なつこい）
無冠詞不可算：Time is money.（時は金なり）
the + 不可算：The time we spent together was wonderful.（一緒に過ごした時間はすばらしかった）

⚠ 注意：of 句が付けば必ず the になるわけではない。a friend of mine（私の友人の一人）、a member of the team（チームの一員）のように、「そのうちの一つ」を表すときは a を使う。「of 句で一つに決まるか」を確かめること。

★ ポイント：the を付けるかどうかは名詞の種類ではなく、文脈で決まる。同じ water でも、水一般なら無冠詞、目の前のコップの水なら the water になる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に a, an, the のいずれかを入れなさい。I have a cat and a dog. （　） cat is white.',
        wrongAnswer: 'A',
        trapExplanation:
          '文の先頭にあるため、直前の文で a cat と言ったことを忘れて再び a を置いてしまう。日本語では「ネコは白い」と言うだけで「その」を付けないことも多く、切りかえに気づきにくい。',
        correctAnswer: 'The',
        correctExplanation:
          '一度 a cat として登場したものを二度目に指しているので、聞き手にもどのネコか特定できる。したがって The cat is white. となる。初めて話に出すときは a/an、二度目以降は the という切りかえは、英作文でも読解でも基本になる。並んで出てきた a dog を指すなら The dog となる。',
      },
      {
        question: '（　）に a, an, the のいずれかを入れなさい。Tom is （　） friend of mine.',
        wrongAnswer: 'the',
        trapExplanation:
          'of mine という限定の句が付いているため、「後ろから限定されていれば the」という規則を機械的に当てはめて the を選んでしまう。',
        correctAnswer: 'a',
        correctExplanation:
          'a friend of mine は「私の友人のうちの一人」という意味で、一人に特定していないので a を使う。the friend of mine とすると「私のただ一人の友人」という不自然な意味になる。of 句が付いても、「そのうちの一つ」を表すときは a/an である。the capital of Japan のように of 句で一つに決まる場合だけ the を使う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s192',
    subject: 'eigo',
    examType: 'koko',
    title: '冠詞の全体像：a/an・the・無冠詞をどう選ぶか',
    description: '「特定できるか」と「可算の単数か」の二つの問いで、三つの選択肢を機械的に絞りこむ',
    order: 692,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '冠詞の問題で手が止まるのは、選択肢が a・an・the・無冠詞と四つもあるように見えるからだ。しかし実際には、二つの質問に答えるだけで答えが決まる。「聞き手はどれか特定できるか」「数えられる単数か」——この二問を順に自分に問うだけで、迷いが消える。',
    keyPoints: [
      '第一の問い「聞き手が特定できるか」。できるなら the で決まり（単数・複数・不可算を問わない）。',
      '第二の問い「可算名詞の単数か」。特定できず、可算の単数なら a/an。',
      '特定できず、可算の複数か不可算なら無冠詞（または some）。',
      'the は数や可算・不可算に関係なく使えるので、判断は「特定できるか」だけ。',
      '同じ名詞でも文脈が変われば冠詞も変わる。名詞ごとに冠詞が決まっているわけではない。',
      '固有名詞・食事・スポーツ・交通手段などは、特定できても無冠詞になる例外がある。',
    ],
    sections: [
      {
        heading: '二つの問いで絞りこむ',
        figureId: 'lf_kokoeigoext06_192',
        body: `冠詞を選ぶ手順は次の二段階である。

■ 手順①：聞き手が「どれのことか」特定できるか
できる → the（可算・不可算、単数・複数を問わない）
例）Open the window.（窓を開けて）※ その場に一つ
例）The students were quiet.（その生徒たちは静かだった）
例）The water in this glass is warm.（このコップの水はぬるい）

■ 手順②：特定できないとき、その名詞は可算の単数か
可算の単数 → a / an
例）I want a new bike.（新しい自転車がほしい）
可算の複数 → 無冠詞（数を言いたければ some など）
例）I want new bikes. ／ I want some new bikes.
不可算 → 無冠詞（量を言いたければ some など）
例）I want water. ／ I want some water.

■ 同じ名詞でも文脈で変わる
例）I bought a book yesterday.（不特定の本を1冊）
例）I bought the book you told me about.（あなたが言っていたあの本を）
例）I like books.（本というものが好きだ）
名詞そのものに冠詞が決まっているのではなく、そのつど文脈で決まる。

★ ポイント：判断の順番を必ず「特定できるか → 可算の単数か」にする。逆にすると、複数形なのに a を付けるといったミスが出る。図の四つのマスで、どこに何が入るかを目で確認しておこう。`,
      },
      {
        heading: '選択に迷いやすい場面',
        body: `■ 職業・身分をいうとき
補語になる職業名には a/an が必要。
例）My mother is a nurse.（母は看護師だ）
例）He wants to be an engineer.（彼は技術者になりたい）
⚠ 注意：日本語では「母は看護師だ」と冠詞なしで言うので落としやすい。

■ 「〜というもの」（総称）の三つの言い方
①無冠詞複数：Dogs are friendly.（もっとも自然）
②a/an ＋ 単数：A dog is a friendly animal.（どの犬もそうだという意味）
③the ＋ 単数：The dog is a friendly animal.（種としての犬。堅い言い方）
入試では①がもっとも安全である。

■ 楽器・スポーツ
楽器を演奏する → the が付く：play the piano, play the guitar
スポーツをする → 無冠詞：play soccer, play tennis
例）She plays the violin and plays tennis.（彼女はバイオリンをひき、テニスをする）

■ 数えられる名詞の単数を裸で置かない
可算名詞の単数を冠詞なしで置くのは原則として誤り。
× I have pen. → ○ I have a pen.
× He is student. → ○ He is a student.
この「裸の単数」は英作文でもっとも多い減点ポイントである。

★ ポイント：英作文を書き終えたら、可算名詞の単数形をすべて指さして、前に a/an/the/my などの限定語があるか確認する。この見直し一つで得点が変わる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の姉は医者です。」を英語にしなさい。',
        wrongAnswer: 'My sister is doctor.',
        trapExplanation:
          '日本語の「医者です」に冠詞にあたる語がないため、そのまま doctor だけを置いてしまう。be動詞の後ろは形容詞が来ることも多いので、名詞であることを意識しにくい。',
        correctAnswer: 'My sister is a doctor.',
        correctExplanation:
          'doctor は可算名詞の単数なので、裸で置くことはできず a が必要である。職業・身分を表す名詞が補語になるときは a/an を付けるのが原則で、He is a teacher. / She wants to be an artist. も同じ。可算名詞の単数を見たら必ず前の限定語を確認する習慣をつける。',
      },
      {
        question: '（　）に必要な冠詞を入れ、不要なら×を書きなさい。My brother can play （　） guitar and （　） baseball well.',
        wrongAnswer: '× / the',
        trapExplanation:
          '「play + 名詞」という同じ形なので、二つを同じ扱いにしてしまう。とくにスポーツに the を付ける誤りは、the piano の印象に引きずられて起こる。',
        correctAnswer: 'the / ×（play the guitar and baseball）',
        correctExplanation:
          '楽器を演奏するときは the を付けて play the guitar, play the piano, play the violin とする。一方スポーツをするときは無冠詞で play baseball, play soccer, play tennis となる。「楽器には the、スポーツには何も付けない」と対で覚えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s193',
    subject: 'eigo',
    examType: 'koko',
    title: 'the が付く決まった表現：唯一のもの・最上級・序数・方角',
    description: '文脈に関係なく the が付く決まりを、種類ごとにまとめて覚える',
    order: 693,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '「世界でいちばん高い山」を英語にするとき、the をどこに置くか迷わないだろうか。実は最上級には必ず the が付く、というように、文脈を考えなくても自動的に the が決まる場面がある。決まりごととして覚えてしまえば、その分だけ考える時間を他に回せる。',
    keyPoints: [
      '世界に一つしかないもの：the sun, the moon, the earth, the sky, the world, the sea。',
      '最上級：the tallest boy, the most beautiful place。ただし副詞の最上級では the を省くこともある。',
      '序数：the first train, the second question, the last bus。',
      '方角・地域：in the east, in the north, in the middle of 〜。',
      '楽器：play the piano / the guitar / the violin。',
      'the + 形容詞＝「〜な人々」：the young（若者たち）, the rich（金持ち）, the poor（貧しい人々）。',
    ],
    sections: [
      {
        heading: '自動的に the が付くもの',
        body: `■ ①世界に一つしかないもの
the sun／the moon／the earth／the sky／the sea／the world／the universe／the environment
例）The sun rises in the east.（太陽は東から昇る）
例）We must protect the environment.（環境を守らなければならない）

■ ②最上級
例）Mt. Fuji is the highest mountain in Japan.（富士山は日本でいちばん高い山だ）
例）This is the most interesting book I have ever read.（これは今まで読んだ中でいちばんおもしろい本だ）
※ 副詞の最上級では the を省くこともある（He runs (the) fastest in his class.）。

■ ③序数（順番を表す語）
例）Take the first train.（始発電車に乗りなさい）
例）Please answer the second question.（2番目の問題に答えてください）
例）He was the last person to leave.（彼が最後に去った人だった）

■ ④方角・位置
例）The station is in the north of the city.（駅は市の北部にある）
例）There is a lake in the middle of the park.（公園の真ん中に湖がある）
例）Turn left at the second corner.（2つ目の角を左に曲がりなさい）

■ ⑤楽器
例）She practices the piano every day.（彼女は毎日ピアノを練習する）

■ ⑥時代・年代
例）in the 1990s（1990年代に）／in the future（将来）／in the past（過去に）

★ ポイント：①〜⑥は文脈を考えずに the と決めてよい。ここで悩まないだけで、冠詞問題を解く速さが変わる。`,
      },
      {
        heading: 'the + 形容詞と、対になる慣用表現',
        body: `■ the + 形容詞 ＝ 「〜な人々」
形容詞に the を付けると「そういう人々」という複数の意味になる。動詞は複数扱いをする。
例）The young should respect the old.（若者は年配者を敬うべきだ）
例）The rich are not always happy.（金持ちが必ずしも幸せとは限らない）
例）We should help the poor.（貧しい人々を助けるべきだ）
※ the sick（病人たち）／the blind（目の不自由な人々）／the homeless（家のない人々）も同じ。
⚠ 注意：the young is ではなく the young are。単数に見えて複数扱いである。

■ the + 単位（〜単位で）
体の部分や単位に the を使う慣用表現。
例）He caught me by the arm.（彼は私の腕をつかんだ）
例）They pay him by the hour.（彼らは彼に時給で支払っている）
例）Eggs are sold by the dozen.（卵はダース単位で売られている）
※ by the arm のように、体の部位には所有格ではなく the を使うのが英語の習慣である。

■ the same / the only / the very
例）We are in the same class.（私たちは同じクラスだ）
例）He is the only student who can answer it.（それに答えられる唯一の生徒だ）
例）This is the very book I wanted.（これこそ私がほしかった本だ）

■ the 比較級, the 比較級（〜すればするほど…）
例）The more you practice, the better you will become.（練習すればするほど上達する）
例）The sooner, the better.（早ければ早いほどよい）

★ ポイント：the + 形容詞と the 比較級の構文は、意味も形も入試頻出。「the の後ろが形容詞なら人々の意味を疑う」と覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。The rich （　） not always happy.',
        wrongAnswer: 'is',
        trapExplanation:
          'The rich が単数の形に見えるため、be動詞を is にしてしまう。「金持ちというもの」と抽象的に訳すと、なおさら単数に感じられる。',
        correctAnswer: 'are',
        correctExplanation:
          'the + 形容詞は「〜な人々」という複数の意味を表すので、動詞は複数扱いになり are が正しい。the young are, the poor are, the old are も同様である。単数の「一人の金持ち」を言いたいときは a rich person とする。形は単数、意味は複数という点を必ず押さえる。',
      },
      {
        question: '「彼は私の肩をたたいた。」を英語にしなさい。',
        wrongAnswer: 'He tapped my shoulder.',
        trapExplanation:
          '日本語の「私の肩」をそのまま my shoulder と訳してしまう。英語でも通じるが、体の部位をつかむ・たたく型の表現では所有格を使わないのが決まりである。',
        correctAnswer: 'He tapped me on the shoulder.',
        correctExplanation:
          '「人＋前置詞＋the＋体の部位」という形にするのが英語の習慣で、He tapped me on the shoulder. / He caught me by the arm. / He looked me in the eye. のように使う。動作の対象は人であり、体の部位はどこに触れたかを示すだけなので the が付く。この語順は入試の並べかえでよく問われる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s194',
    subject: 'eigo',
    examType: 'koko',
    title: '冠詞と語順：such a・so 〜 a・what a・all the',
    description: '冠詞が形容詞や all・both などとどの順で並ぶかを、決まり文句ごとに整理する',
    order: 694,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      'so kind a person という語順を見て「なぜ a が真ん中にあるのか」と驚いた人もいるだろう。冠詞は必ず名詞のかたまりの先頭に来る——そう覚えていると、この形は例外に見える。実は so・such・what・quite などの語が来ると、冠詞の位置がきれいに決まった型で動く。型として覚えてしまおう。',
    keyPoints: [
      '基本の語順は「限定語 + 形容詞 + 名詞」（a kind person, the tall boy）。',
      'such / what は「such a kind person」「What a kind person!」のように a が形容詞の前。',
      'so / too / how は「so kind a person」「too big a hat」のように a が形容詞の後ろ。',
      'all / both / half は the より前に置く（all the students, both the books, half the class）。',
      'a/an と the、my・this などの限定語は重ねて使えない（× a my book → a book of mine）。',
      'half an hour, quite a few, many a 〜 などの決まり文句もここで押さえる。',
    ],
    sections: [
      {
        heading: '冠詞の位置が動く形',
        body: `■ 基本形
限定語（a/the/my/this）→ 形容詞 → 名詞
例）a kind person／the tall boy／my new bike

■ such / what ＋ a ＋ 形容詞 ＋ 名詞
a は形容詞の前に置く。
例）He is such a kind person.（彼はとても親切な人だ）
例）What a beautiful flower this is!（これはなんて美しい花だろう）
※ 名詞が複数形や不可算なら a は付かない。
例）They are such kind people.／What beautiful flowers!

■ so / too / how / as ＋ 形容詞 ＋ a ＋ 名詞
a は形容詞の後ろ、名詞の直前に置く。
例）He is so kind a person that everyone likes him.（彼はとても親切な人なのでみんなに好かれている）
例）This is too big a hat for me.（これは私には大きすぎる帽子だ）
例）How tall a boy he is!（彼はなんて背の高い少年だろう）
※ so kind a person は堅い言い方で、日常では such a kind person を使う。書きかえ問題で対応関係が問われる。

■ 対応関係のまとめ
such a 形容詞 名詞 ＝ so 形容詞 a 名詞
例）It was such a hot day that we stayed home.
　＝It was so hot a day that we stayed home.（とても暑い日だったので家にいた）

★ ポイント：「such・what は a が先、so・too・how は a が後」と唱えて覚える。並べかえ問題で直接問われる。`,
      },
      {
        heading: 'all・both・half と限定語の重複',
        body: `■ all / both / half は the の前
これらは the や my よりさらに前に置く。
例）all the students（生徒全員）／all my friends（友達みんな）
例）both the books（その本の両方）／both my parents（両親とも）
例）half the class（クラスの半分）／half an hour（30分）
⚠ 注意：× the all students　× my both parents は誤り。
※ all of the students, both of my parents のように of を入れる形も正しい。ただし of の後ろには必ず the/my などの限定語が必要である（× all of students）。

■ 限定語は重ねられない
a/an, the, this/that, my/your などは同じ名詞に二つ以上付けられない。
× a my book　× this my pen　× the my house
「私の本のうちの1冊」と言いたいときは、of + 所有代名詞の形にする。
例）a book of mine（私の本の1冊）
例）this pen of yours（あなたのそのペン）
例）a friend of my father's（父の友人の一人）

■ 決まり文句
half an hour（30分）／quite a few students（かなり多くの生徒）／quite a little water（かなり多くの水）／many a student（多くの生徒。単数扱い）
例）I waited for half an hour.（30分待った）
例）Quite a few people came to the concert.（かなり多くの人がコンサートに来た）
⚠ 注意：quite a few は「少し」ではなく「かなり多く」という意味である。

★ ポイント：all・both・half は「the より外側」、a/an・the・my は「同じ位置なので共存できない」。位置のイメージを持つと語順問題が速く解ける。`,
      },
    ],
    trapExamples: [
      {
        question: '次の語を並べかえて英文を完成させなさい。( such / he / a / is / student / kind ) that everyone likes him.',
        wrongAnswer: 'He is a such kind student that everyone likes him.',
        trapExplanation:
          '「冠詞は名詞のかたまりの先頭」という基本を守ろうとして a を such の前に置いてしまう。日本語の「そんな親切な生徒」という語順からも a の位置が見えにくい。',
        correctAnswer: 'He is such a kind student that everyone likes him.',
        correctExplanation:
          'such と what は「such / what + a + 形容詞 + 名詞」の順になり、a は such の後ろ、形容詞の前に入る。一方 so, too, how は「so + 形容詞 + a + 名詞」の順で、so kind a student となる。「such は a が先、so は a が後」と対で覚えるのが確実である。',
      },
      {
        question: '誤りを直しなさい。I met a my friend at the station yesterday.',
        wrongAnswer: 'I met a my friend at the station yesterday.（そのまま正しいと判断）',
        trapExplanation:
          '日本語の「私の友達の一人」をそのまま並べると a my friend となり、意味が通じるので誤りに気づきにくい。冠詞と所有格が同じ位置を取り合うという意識が薄いことが原因。',
        correctAnswer: 'I met a friend of mine at the station yesterday.',
        correctExplanation:
          'a/an, the, my, this などの限定語は同じ名詞に重ねて置くことができない。「私の友人の一人」と言いたいときは a friend of mine のように、of + 所有代名詞の形にする。同じく this pen of yours（あなたのそのペン）、a friend of my father\'s（父の友人の一人）も同じ作り方である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s195',
    subject: 'eigo',
    examType: 'koko',
    title: '冠詞の総合演習：長文と英作文での冠詞',
    description: '冠詞の判断を実際の文章の流れの中で行い、英作文でのミスを防ぐ手順を確立する',
    order: 695,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      '冠詞は一問一答では正解できても、長い文章を書くとたちまち抜け落ちる。書いている最中は内容を考えるので精一杯だからだ。そこで必要なのは「書き終えたあとに機械的に見直す手順」である。プロの校正者と同じやり方を、三分でできる形にして身につけよう。',
    keyPoints: [
      '英作文の見直しは「可算名詞の単数形をすべて指さす」ことから始める。',
      '単数の可算名詞の前には必ず a/an/the/my/this などの限定語がある。',
      '初出は a/an、既出・特定は the。段落をまたいでも同じ流れが続く。',
      '総称は無冠詞複数がもっとも安全（Dogs are friendly.）。',
      '職業・身分の補語には a/an を付ける（She is a nurse.）。',
      '長文読解では the の有無が「既出か新情報か」を示す手がかりになる。',
    ],
    sections: [
      {
        heading: '文章の流れの中で冠詞を追う',
        body: `冠詞は文単位ではなく文章単位で決まる。次の短い文章で流れを追ってみよう。

Yesterday I visited a small museum near my house. The museum was built about a hundred years ago. Inside, I found an old clock. The clock was still working. A woman who worked there told me that it was the oldest clock in the city.

■ 追い方
・a small museum … 初めて登場するので a。
・The museum … 二度目なので the。
・about a hundred years ago … 「約100年」の a は「1つの」の意味。
・an old clock … 初登場。old が母音で始まるので an。
・The clock … 二度目なので the。
・A woman … 新しく登場する人物なので a。
・the oldest clock … 最上級なので自動的に the。

■ 読解での使い道
the が付いていれば「前に出てきたもの」か「読者が特定できるもの」である。指示語の内容を問う設問では、the の付いた名詞を前にさかのぼって探すと答えが見つかりやすい。
例）… a strange sound … The sound came from the kitchen. → The sound は前文の a strange sound を指す。

★ ポイント：長文を読むとき、the の付いた名詞に印を付けて前に線を引く習慣をつけると、内容一致問題での取りちがえが減る。`,
      },
      {
        heading: '英作文での見直し三手順',
        body: `書き終わったあと、次の三手順で機械的に確認する。

■ 手順①：可算名詞の単数形をすべて探す
単数の可算名詞の前に、a/an/the/my/your/this/that/some のいずれかがあるか確認する。
× I bought book at store. → ○ I bought a book at a store.
× He is teacher. → ○ He is a teacher.
これが最頻出の減点である。

■ 手順②：不可算名詞に -s や a が付いていないか確認する
information, advice, furniture, homework, news, work, money, water, time（時間）を重点的に見る。
× many informations → ○ a lot of information
× a advice → ○ a piece of advice

■ 手順③：二度目に出た名詞が the になっているか確認する
同じ名詞が二回以上出てきたら、二度目以降は the か所有格が付いているはずである。
× I have a dog. A dog is white. → ○ I have a dog. The dog is white.

■ 迷ったときの安全策
・「〜というもの一般」を言いたい → 無冠詞の複数形にする（I like dogs.）。
・特定したいのかどうか自分でも曖昧 → 具体的な限定語（my, this, our）を使って逃げる。
・単位語が思い出せない不可算名詞 → 可算名詞に言いかえる（advice → a suggestion）。

⚠ 注意：冠詞のミスは1か所につき減点されることが多い。内容が良くても冠詞で崩れると点が伸びない。逆に、この三手順を守るだけで安定して得点できる。

★ ポイント：見直しは「意味を読み返す」のではなく「形を指さして確認する」。意味を追うと書いたときと同じ思考をなぞってしまい、ミスが見えない。`,
      },
    ],
    trapExamples: [
      {
        question: '誤りを一か所直しなさい。I saw a cat under the table. A cat was sleeping.',
        wrongAnswer: '誤りなし（どちらも初めて出た名詞だと判断する）',
        trapExplanation:
          '文が変わると別の話が始まったように感じ、二文目でもう一度 a を使ってしまう。日本語では「ネコが寝ていた」と言うだけで「その」を付けないため、切りかえに気づきにくい。',
        correctAnswer: 'I saw a cat under the table. The cat was sleeping.',
        correctExplanation:
          '一文目で a cat として登場したネコを二文目で指しているので、二度目は the cat になる。もし A cat was sleeping. と書くと「（別の）ネコが1匹寝ていた」という意味になり、ネコが2匹いることになってしまう。冠詞は文章全体の流れで決まることを示す典型例である。',
      },
      {
        question: '「私は犬が好きです。」を英語にしなさい（総称として）。',
        wrongAnswer: 'I like a dog.',
        trapExplanation:
          '「犬」が単数のイメージで浮かぶため、可算名詞の単数には a が必要だという規則を当てはめて a dog としてしまう。',
        correctAnswer: 'I like dogs.',
        correctExplanation:
          '「犬というもの全般が好き」という総称を表すときは、無冠詞の複数形を使うのがもっとも自然である。I like a dog. だと「（不特定の）犬が1匹ほしい・好きだ」という奇妙な意味になる。総称の言い方には A dog is a friendly animal. や The dog is a friendly animal. もあるが、入試の英作文では無冠詞複数がいちばん安全である。',
      },
    ],
  },

  // ─────────── 4. 無冠詞になる場合（s196〜s198 / order 696〜698） ───────────
  {
    id: 'koko_eigo_s196',
    subject: 'eigo',
    examType: 'koko',
    title: '無冠詞になる場合①：スポーツ・教科・食事・言語',
    description: '冠詞を付けないことが決まっている名詞のグループを、理由とともに覚える',
    order: 696,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      'play tennis には冠詞が付かないのに play the piano には the が付く。have breakfast は無冠詞なのに have a good breakfast には a が付く。ばらばらに見える規則だが、「その言葉が具体的なモノを指しているか、活動そのものを指しているか」という一本の線で説明できる。',
    keyPoints: [
      'スポーツ：play soccer / baseball / tennis。無冠詞。',
      '教科・学問：study math / English / science。無冠詞。',
      '食事：have breakfast / lunch / dinner。無冠詞。ただし形容詞が付くと a が必要（a good breakfast）。',
      '言語：speak English / Japanese。ただし the English language のように language を付けると the。',
      '季節・月・曜日：in spring, in April, on Monday。無冠詞。',
      '無冠詞になるのは「具体的なモノではなく、活動・種類そのもの」を指しているから。',
    ],
    sections: [
      {
        heading: '無冠詞グループの一覧',
        body: `■ ①スポーツ
例）I play soccer every Sunday.（毎週日曜サッカーをする）
例）He is good at basketball.（彼はバスケットボールが得意だ）
× play the soccer　× play a tennis

■ ②教科・学問
例）She studies math and science.（彼女は数学と理科を勉強する）
例）History is my favorite subject.（歴史は私の好きな教科だ）

■ ③食事
例）I have breakfast at seven.（7時に朝食をとる）
例）Let's have lunch together.（一緒に昼食をとろう）
※ 形容詞が付いて「どんな食事か」を言うときは a が必要になる。
例）I had a big breakfast this morning.（今朝は朝食をたっぷり食べた）
例）We had a wonderful dinner.（すばらしい夕食をとった）

■ ④言語
例）Do you speak English?（英語を話しますか）
例）Japanese is difficult for them.（日本語は彼らには難しい）
※ language を付けると the が必要。
例）the English language（英語という言語）

■ ⑤季節・月・曜日・祝日
例）in spring（春に）／in April（4月に）／on Monday（月曜日に）／at Christmas（クリスマスに）
※ 特定の年の季節などは the が付く。
例）in the summer of 2024（2024年の夏に）

■ ⑥その他
at school, at home, at work, in bed, by car, on foot, go to church

★ ポイント：無冠詞になっているとき、その名詞は「モノ」ではなく「活動・種類・状態」を表している。この視点があると、形容詞が付いたとたんに a が必要になる理由も納得できる。`,
      },
      {
        heading: '同じ語でも冠詞が付く場合',
        body: `無冠詞のグループでも、具体的なモノや特定の一回を指すときには冠詞が復活する。

■ スポーツ → 試合を指すとき
無冠詞：We play baseball after school.（放課後に野球をする）
冠詞あり：We watched a baseball game on TV.（テレビで野球の試合を見た）
冠詞あり：The soccer game was exciting.（そのサッカーの試合はわくわくした）

■ 教科 → 授業・テストを指すとき
無冠詞：I like English.（英語が好きだ）
冠詞あり：We have an English class today.（今日は英語の授業がある）
冠詞あり：I passed the math test.（数学のテストに合格した）

■ 食事 → 形容詞が付くとき・特定の一回を指すとき
無冠詞：We had dinner at six.
冠詞あり：We had a nice dinner at that restaurant.（あのレストランですてきな夕食をとった）
冠詞あり：The dinner she cooked was delicious.（彼女が作った夕食はおいしかった）

■ 言語 → language が付くとき・特定の言い方を指すとき
無冠詞：He teaches French.
冠詞あり：He teaches the French language.

■ 楽器との対比
スポーツ（無冠詞）：play tennis
楽器（the が必要）：play the piano
これは「楽器は具体的な道具、スポーツは活動」という違いによる。

⚠ 注意：go to school（勉強しに学校へ行く）と go to the school（その学校の建物へ行く）のように、無冠詞かどうかで意味が変わる表現は次のセッションでくわしく扱う。

★ ポイント：「活動そのもの → 無冠詞」「具体的な一回・特定のモノ → 冠詞あり」という対比で覚えると、両方の形を自分で作れるようになる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に必要な冠詞を入れ、不要なら×を書きなさい。My sister practices （　） piano after （　） dinner.',
        wrongAnswer: '× / the',
        trapExplanation:
          '楽器とスポーツ、楽器と食事の扱いが混ざり、piano を無冠詞にして dinner に the を付けてしまう。日本語ではどちらも「ピアノを」「夕食のあと」と同じ形で言えるため区別しにくい。',
        correctAnswer: 'the / ×（practices the piano after dinner）',
        correctExplanation:
          '楽器を演奏するときは the を付けて the piano とする。食事は活動を表すので無冠詞で after dinner となる。「楽器には the、食事・スポーツ・教科には冠詞なし」と分けて覚える。ただし after a big dinner のように形容詞が付けば a が必要になる。',
        },
      {
        question: '「今朝はたっぷり朝食を食べた。」を英語にしなさい。',
        wrongAnswer: 'I had big breakfast this morning.',
        trapExplanation:
          '「食事は無冠詞」という規則だけを覚えていると、形容詞が付いても冠詞を入れずに書いてしまう。have breakfast の形が強く印象に残っていることが原因である。',
        correctAnswer: 'I had a big breakfast this morning.',
        correctExplanation:
          '無冠詞になるのは have breakfast のように活動そのものを指すときだけで、big のような形容詞が付いて「どんな朝食か」を言う場合は可算名詞として扱い a を付ける。a good lunch, a wonderful dinner も同じ。形容詞が入ったら冠詞を確認する、と手順化しておくとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s197',
    subject: 'eigo',
    examType: 'koko',
    title: '無冠詞になる場合②：交通手段と「本来の目的」',
    description: 'by bus・go to school・in bed など、本来の目的で使うときに冠詞が消える表現を整理する',
    order: 697,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      'go to school は「学校へ行く」だが、go to the school と the を入れると「（用事があって）その学校の建物へ行く」に変わる。たった一語で、勉強しに行くのか建物を訪ねるのかが分かれるのだ。英語は「本来の目的で使っているとき、その場所をモノとして見ない」という感覚を冠詞で表している。',
    keyPoints: [
      '交通手段は by + 無冠詞：by bus, by train, by car, by bike, by plane。',
      'ただし徒歩は on foot、特定の乗り物は in my car / on the bus のように冠詞や所有格が付く。',
      '建物を本来の目的で使うとき無冠詞：go to school（勉強しに）、go to bed（寝に）、be in hospital（入院して）。',
      '建物そのものを指すときは the：go to the school（その学校へ）、go to the hospital（見舞いなどで病院へ）。',
      'at school / at home / at work / in class も無冠詞の慣用表現。',
      'アメリカ英語では be in the hospital のように the を入れることもある。入試では英英の区別より対比を問う。',
    ],
    sections: [
      {
        heading: '交通手段の by は無冠詞',
        figureId: 'lf_kokoeigoext06_197',
        body: `■ by + 交通手段（無冠詞）
例）I go to school by bus.（バスで通学する）
例）They traveled by train.（電車で旅行した）
例）We went there by car / by bike / by plane / by ship / by taxi.
by の後ろの名詞には a も the も付けず、-s も付けない。「移動の方法」という抽象的な意味だから無冠詞になる。

■ 徒歩は on foot
例）I go to school on foot.（歩いて通学する）
＝ I walk to school.（こちらのほうが自然）
※ by walk とは言わない。

■ 特定の乗り物を指すときは冠詞・所有格が必要
例）I went there in my father's car.（父の車でそこへ行った）
例）She got on the bus at the station.（彼女は駅でそのバスに乗った）
例）We took a taxi to the airport.（空港までタクシーに乗った）
「どの車か」「どのバスか」が問題になっているので、無冠詞ではなくなる。

■ 乗り物と前置詞
in ＋ 車・タクシー（かがんで乗るもの）：in a car, in a taxi
on ＋ バス・電車・飛行機・自転車（立って歩けるもの・またがるもの）：on a bus, on a train, on a bike
例）Get in the car.（車に乗って）
例）Get on the train.（電車に乗って）

★ ポイント：「by ＋ 無冠詞＝方法」「in / on ＋ 冠詞＝その乗り物そのもの」と対比して覚える。書きかえ問題では by bus ⇔ on the bus が問われる。`,
      },
      {
        heading: '本来の目的で使うときの無冠詞',
        body: `建物や場所を「その場所の本来の目的のために使う」ときは無冠詞になり、建物そのものを指すときは the が付く。

■ school
go to school ＝ 勉強しに学校へ行く（生徒として通う）
go to the school ＝ その学校（の建物）へ行く（保護者が用事で行くなど）
例）My son goes to school by bike.（息子は自転車で通学している）
例）I went to the school to meet his teacher.（先生に会うためにその学校へ行った）

■ bed
go to bed ＝ 寝る
in bed ＝ 寝ている・病床にある
例）I went to bed at eleven last night.（昨夜は11時に寝た）
例）He is still in bed.（彼はまだ寝ている）
一方、家具としてのベッドなら the が付く。
例）Don't sit on the bed.（ベッドの上に座らないで）

■ hospital / church / prison
be in hospital ＝ 入院している（イギリス英語。アメリカ英語では in the hospital）
go to church ＝ 礼拝に行く／go to the church ＝ その教会の建物へ行く
例）My grandmother has been in hospital for a week.（祖母は1週間入院している）
例）They went to the church to see the old windows.（古い窓を見にその教会へ行った）

■ その他の無冠詞の慣用表現
at school（学校で・授業中）／at home（家で）／at work（仕事中）／at table（食事中）／in class（授業中）／on foot／by hand／face to face／hand in hand／day after day

⚠ 注意：この対比は和訳問題でそのまま問われる。「学校へ行った」と訳しただけでは差が出ないので、「通学している」「その学校を訪ねた」と訳し分けると得点になる。

★ ポイント：無冠詞なら「その場所らしい活動をしている」、the が付けば「建物・モノとして見ている」。図の四つのマスで対応を確認しよう。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。My mother went to the school yesterday.',
        wrongAnswer: '母は昨日、学校に通った（通学した）。',
        trapExplanation:
          'go to school ＝「学校へ行く・通学する」と丸暗記していると、the が入っていても同じ意味だと考えてしまう。冠詞の有無を意味の差として読む習慣がないことが原因である。',
        correctAnswer: '母は昨日、（用事があって）その学校へ行った。',
        correctExplanation:
          'the が付いた the school は建物としての学校を指すので、「勉強しに通う」意味にはならない。無冠詞の go to school は生徒として通学することを表す。同じく go to bed（寝る）と go to the bed（そのベッドのところへ行く）、be in hospital（入院している）と go to the hospital（病院という建物へ行く）も対比になる。',
      },
      {
        question: '（　）に適する語を入れなさい。I usually go to school （　） bus, but today I came （　） foot.',
        wrongAnswer: 'by / by',
        trapExplanation:
          '交通手段はすべて by だと覚えているため、徒歩まで by foot としてしまう。日本語では「バスで」「徒歩で」と同じ助詞を使うので区別しにくい。',
        correctAnswer: 'by / on（by bus, on foot）',
        correctExplanation:
          '乗り物を使う手段は by bus, by train, by car のように by ＋ 無冠詞で表すが、徒歩だけは on foot という決まった形になる。by foot とは言わない。より自然には I walked to school today. と動詞で表す方法もある。on foot は無冠詞・単数形である点にも注意する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s198',
    subject: 'eigo',
    examType: 'koko',
    title: '無冠詞になる場合③：総称・役職・呼びかけ',
    description: '一般論の複数形、一人しかいない役職、呼びかけの語など、残りの無冠詞パターンを仕上げる',
    order: 698,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      'He was elected president. の president になぜ a が付かないのか。「大統領は一人しかいないから」と説明されると、the が付きそうな気もしてくる。無冠詞のもう一つの理由は「その語が肩書きとして使われていて、モノとして数えられていない」ことにある。仕上げとして、残りのパターンを片づけよう。',
    keyPoints: [
      '総称の無冠詞複数：Dogs are friendly. / Books are useful.',
      '総称の無冠詞不可算：Water is important. / Time is money.',
      '一人しかいない役職が補語・同格になるとき無冠詞：He was elected president.',
      '呼びかけ・家族の呼び名は無冠詞：Waiter, please! / Mother is out.',
      '対句・列挙では冠詞が落ちる：from door to door, day by day, step by step。',
      '掲示・見出し・電報文などでも冠詞が省略される。',
    ],
    sections: [
      {
        heading: '総称と役職の無冠詞',
        body: `■ ①総称（〜というもの一般）
可算名詞は無冠詞の複数形、不可算名詞は無冠詞の単数形にする。
例）Dogs are friendly animals.（犬は人なつこい動物だ）
例）Books give us a lot of knowledge.（本は多くの知識を与えてくれる）
例）Water is necessary for life.（水は生命に必要だ）
例）Time is money.（時は金なり）
⚠ 注意：the dogs とすると「その犬たち」に変わり、一般論ではなくなる。

■ ②一人しかいない役職
補語や同格になるときは無冠詞。
例）He was elected president of the club.（彼はクラブの会長に選ばれた）
例）She became captain of the team.（彼女はチームのキャプテンになった）
例）Mr. Sato, principal of our school, gave a speech.（校長の佐藤先生がスピーチをした）
※ ふつうの職業なら a が必要。
例）He is a teacher.（彼は教師だ）
違いは「その組織で一人しかいない地位かどうか」である。

■ ③呼びかけ・家族の呼び名
例）Waiter, could I have the menu?（すみません、メニューをもらえますか）
例）Doctor, I have a headache.（先生、頭が痛いのです）
例）Mother is cooking in the kitchen.（母は台所で料理をしている）
※ 家族の呼び名を名前のように使うときは大文字で始め、冠詞を付けない。my mother とするなら小文字で書く。

★ ポイント：無冠詞になる理由は「一般論だから」「肩書きだから」「名前として使っているから」の三つ。理由を言えるようにしておくと応用がきく。`,
      },
      {
        heading: '対句・慣用句と、冠詞の省略',
        body: `■ 対句・繰り返しの表現
同じ名詞を前置詞ではさむ形では冠詞が落ちる。
例）from door to door（一軒一軒）／from time to time（ときどき）／from morning till night（朝から晩まで）／day by day（日ごとに）／step by step（一歩ずつ）／hand in hand（手をつないで）／face to face（面と向かって）／side by side（並んで）／arm in arm（腕を組んで）
例）They walked hand in hand along the river.（彼らは手をつないで川沿いを歩いた）
例）The weather is getting warmer day by day.（日ごとに暖かくなっている）

■ セットで使う名詞
例）husband and wife（夫婦）／brother and sister（兄弟姉妹）／knife and fork（ナイフとフォーク）／black and white（白黒）
例）We ate with knife and fork.（ナイフとフォークで食べた）

■ 掲示・見出しでの省略
例）No Parking（駐車禁止）／Keep off the grass（芝生に入るな）／Entrance（入口）
新聞の見出しでも冠詞は省かれる。
例）Typhoon hits Osaka（台風、大阪を直撃）

■ 総称の三つの言い方（比較）
①無冠詞複数：Computers are useful.（もっとも自然・入試で安全）
②a ＋ 単数：A computer is useful.（どの一台をとってもそうだという意味）
③the ＋ 単数：The computer is a useful invention.（種類・発明としてのコンピュータ。堅い）
例）The telephone was invented by Bell.（電話はベルによって発明された）※ 発明品は③が自然

★ ポイント：対句は丸ごと覚えるしかないが、「同じ名詞を前置詞ではさむ形は無冠詞」という共通点を意識すると記憶が定着しやすい。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に必要な冠詞を入れ、不要なら×を書きなさい。He was elected （　） captain of the team.',
        wrongAnswer: 'a',
        trapExplanation:
          '「キャプテンだ」は職業・身分の言い方なので、He is a teacher. と同じように a が必要だと考えてしまう。補語になる名詞には冠詞が要る、という規則を一律に当てはめた誤りである。',
        correctAnswer: '×（無冠詞。He was elected captain of the team.）',
        correctExplanation:
          'そのチームに一人しかいない地位（captain, president, principal, chairman）が補語や同格として使われるときは無冠詞になる。一方 teacher, doctor, nurse のように同じ役目の人が複数いる職業には a/an を付ける。「一人しかいない役職かどうか」で判断する。',
      },
      {
        question: '「本は私たちに多くのことを教えてくれる。」を英語にしなさい（一般論として）。',
        wrongAnswer: 'The books teach us many things.',
        trapExplanation:
          '「本は」という日本語の主語に「その」に近い感覚があるため the を付けてしまう。また主語には限定語が必要だと考えて、とりあえず the を置いてしまうことも多い。',
        correctAnswer: 'Books teach us many things.',
        correctExplanation:
          '「本というもの一般」を表す総称は、無冠詞の複数形で表すのがもっとも自然である。The books とすると「（前に話に出た）その本たち」という特定の意味になり、一般論ではなくなる。不可算名詞の総称も同じで、Water is important. のように無冠詞にする。',
      },
    ],
  },

  // ─────────── 5. 人称代名詞の格変化（s199〜s202 / order 699〜702） ───────────
  {
    id: 'koko_eigo_s199',
    subject: 'eigo',
    examType: 'koko',
    title: '人称代名詞①：主格と目的格',
    description: '文の中の働きによって I / my / me と形が変わる仕組みを、表として完全に定着させる',
    order: 699,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '日本語なら「私は」「私の」「私を」と、助詞を変えるだけで済む。ところが英語は I・my・me と語そのものが変わる。単語が三つに増えるように見えるが、実は「文のどこに置かれるか」で自動的に決まるだけだ。表を縦横で覚えると、選択問題は一瞬で解けるようになる。',
    keyPoints: [
      '主格＝主語になる形：I, you, he, she, it, we, they。',
      '目的格＝動詞や前置詞の後ろに置く形：me, you, him, her, it, us, them。',
      'you と it は主格と目的格が同じ形。',
      '動詞の直後・前置詞の直後は必ず目的格になる（with me, for him, between us）。',
      'be動詞の後ろは本来は主格だが、会話では It\'s me. のように目的格を使う。',
      '格は「意味」ではなく「文中の位置」で決まる。位置を見れば形が決まる。',
    ],
    sections: [
      {
        heading: '主格と目的格の表',
        figureId: 'lf_kokoeigoext06_199',
        body: `人称代名詞は、文の中での働き（格）によって形が変わる。まず主格と目的格を押さえる。

■ 主格（主語になる形）
1人称単数 I ／ 2人称 you ／ 3人称単数 he, she, it ／ 1人称複数 we ／ 3人称複数 they
例）I am a student.（私は生徒だ）
例）They live in Osaka.（彼らは大阪に住んでいる）

■ 目的格（動詞・前置詞の後ろに置く形）
me ／ you ／ him, her, it ／ us ／ them
例）Please help me.（私を助けてください）
例）I know him well.（彼をよく知っている）
例）She sent us a letter.（彼女は私たちに手紙を送った）

■ 対応表
I – me／you – you／he – him／she – her／it – it／we – us／they – them
you と it は形が変わらない点に注意する。

■ 目的格を使う位置は二つだけ
①動詞の目的語
例）Tom likes her.（トムは彼女が好きだ）
例）I met them at the station.（駅で彼らに会った）
②前置詞の目的語
例）Come with me.（私と一緒に来て）
例）This present is for you.（このプレゼントはあなたへのものだ）
例）There is a wall between us.（私たちの間には壁がある）

★ ポイント：迷ったら「その語の直前に何があるか」を見る。動詞か前置詞があれば目的格、なければ主格である。図の縦軸（格）と横軸（人称）で位置を確かめておこう。`,
      },
      {
        heading: 'まちがえやすい位置',
        body: `■ ①and で並べたとき
and の後ろでも、位置が決めるルールは変わらない。
例）Tom and I went to the park.（トムと私は公園へ行った）※ 主語なので主格 I
例）She invited Tom and me.（彼女はトムと私を招待した）※ 目的語なので目的格 me
判定法：Tom and を隠して、残った代名詞だけで文を読んでみる。
「She invited me.」は自然だが「She invited I.」は不自然。これで正しい形がわかる。

■ ②前置詞の後ろ
例）between you and me（あなたと私の間で）※ × between you and I
例）Everyone except him came.（彼以外の全員が来た）
前置詞の後ろは例外なく目的格である。

■ ③be動詞の後ろ
文法的には主格が正しいが、会話では目的格を使う。
例）It's me.（私です）※ 会話ではこちらがふつう
例）It is I who am responsible.（責任があるのは私だ）※ 堅い書き言葉
入試では、会話文なら It's me. を選んでよい。

■ ④than / as の後ろ
省略された動詞を補って考える。
例）He is taller than I (am).（彼は私より背が高い）
例）He is taller than me.（会話ではこちらもふつう）
例）I like her better than him.（彼より彼女のほうが好きだ）※ 「彼を好きな程度より」の意味
例）I like her better than he (does).（彼が彼女を好きな程度より、私のほうが好きだ）
※ than の後ろの形で意味が変わる。省略されている語を補って確認する。

★ ポイント：and で並んだ代名詞は「相手の名前を隠して読む」。この一手で、Tom and I / Tom and me の選択ミスがなくなる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語を選びなさい。My mother made lunch for my brother and (I / me).',
        wrongAnswer: 'I',
        trapExplanation:
          '「〜と私」という日本語からは主語のような感じがするうえ、Tom and I という形を丁寧な言い方として覚えているため、無条件に I を選んでしまう。',
        correctAnswer: 'me',
        correctExplanation:
          'for という前置詞の後ろなので目的格の me が正しい。my brother and を隠して読むと for me となり、for I が誤りだとすぐわかる。逆に主語の位置なら My brother and I made lunch. のように主格 I を使う。「and の相手を隠して読む」検算法を必ず使うこと。',
      },
      {
        question: '次の二文の意味の違いを説明しなさい。(a) I like her better than he. (b) I like her better than him.',
        wrongAnswer: 'どちらも「私は彼より彼女のほうが好きだ」で意味は同じ。',
        trapExplanation:
          'than の後ろは主格でも目的格でもよいと思いこんでいると、二つを同じ意味にとってしまう。省略された語を補う発想がないことが原因である。',
        correctAnswer: '(a) は「彼が彼女を好きな程度よりも、私のほうが彼女を好きだ」。(b) は「私は彼を好きな程度よりも、彼女のほうが好きだ」。',
        correctExplanation:
          'than の後ろに省略されている語を補うと違いがはっきりする。(a) は than he (likes her) なので比べているのは「好きな人（主語）」どうし、(b) は than (I like) him なので比べているのは「好かれる人（目的語）」どうしである。than の後ろの格は、何と何を比べているかを示す重要な手がかりになる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s200',
    subject: 'eigo',
    examType: 'koko',
    title: '人称代名詞②：所有格と所有代名詞',
    description: 'my と mine の違いを、後ろに名詞が続くかどうかで機械的に判断できるようにする',
    order: 700,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      'This is my book. と This book is mine. は同じ内容なのに、my と mine を使い分ける。どちらを使うかは、後ろに名詞が続くかどうかだけで決まる。「my は名詞とセット、mine は一語で完結」——この一点をつかむと、書きかえ問題が計算のように解けるようになる。',
    keyPoints: [
      '所有格＝「〜の」。必ず後ろに名詞が続く：my, your, his, her, its, our, their。',
      '所有代名詞＝「〜のもの」。一語で「所有格＋名詞」の働きをする：mine, yours, his, hers, ours, theirs。',
      'his は所有格と所有代名詞が同じ形。it には所有代名詞がない。',
      'its（それの）と it\'s（it is の短縮形）を混同しない。',
      'a friend of mine のように、冠詞と所有格が重なるときは of + 所有代名詞。',
      '名詞の所有格は\'s を付ける（Tom\'s book）。複数形の -s の後ろはアポストロフィだけ（the students\' room）。',
    ],
    sections: [
      {
        heading: '所有格と所有代名詞の対応',
        figureId: 'lf_kokoeigoext06_200',
        body: `■ 所有格（後ろに必ず名詞が続く）
my ／ your ／ his, her, its ／ our ／ their
例）This is my bike.（これは私の自転車だ）
例）Their house is very large.（彼らの家はとても大きい）

■ 所有代名詞（一語で「〜のもの」）
mine ／ yours ／ his, hers ／ ours ／ theirs
例）This bike is mine.（この自転車は私のものだ）
例）Yours is over there.（あなたのはあそこにある）

■ 対応表
my – mine／your – yours／his – his／her – hers／our – ours／their – theirs
※ his は両方同じ形。it には所有代名詞がなく、its は所有格だけである。

■ 判断は「後ろに名詞があるか」だけ
名詞が続く → 所有格（my book）
名詞が続かない → 所有代名詞（It's mine.）
例）This is my pen. ＝ This pen is mine.
例）Is this your bag? ＝ Is this bag yours?

■ 書きかえの型
「所有格 + 名詞」→「名詞 + be動詞 + 所有代名詞」
例）That is her camera. → That camera is hers.
例）These are our seats. → These seats are ours.

⚠ 注意：its と it's はまったく別語である。
its＝それの（所有格）：The dog wagged its tail.（犬はしっぽを振った）
it's＝it is / it has の短縮形：It's raining.（雨が降っている）
所有代名詞にはアポストロフィが付かない（× your's × their's）。

★ ポイント：所有代名詞は「所有格＋名詞」を1語に圧縮した形。図の二段の対応表で、上下がペアになっていることを確認しよう。`,
      },
      {
        heading: '名詞の所有格と、of + 所有代名詞',
        body: `■ 名詞の所有格
人や生き物には \'s を付ける。
例）Tom's bike（トムの自転車）／my father's car（父の車）／the dog's tail（その犬のしっぽ）
複数形で -s に終わる語は、アポストロフィだけを付ける。
例）the students' room（生徒たちの部屋）／my parents' house（両親の家）
※ 不規則複数は \'s を付ける。例）children's books（子どもの本）／women's clothes（女性服）

■ 物には of を使う
例）the door of the room（その部屋のドア）／the top of the mountain（山の頂上）／the end of the story（物語の結末）
※ ただし時間・距離・国などには \'s も使える。
例）today's newspaper（今日の新聞）／ten minutes' walk（歩いて10分）／Japan's culture（日本の文化）

■ of + 所有代名詞（二重所有格）
a/an, this, that, some などと所有格は同じ位置を取り合うので、重ねて使えない。そのときは of + 所有代名詞にする。
× a my friend → ○ a friend of mine（私の友人の一人）
× this your pen → ○ this pen of yours（あなたのそのペン）
× some her books → ○ some books of hers（彼女の本の何冊か）
例）I met a friend of mine at the library.（図書館で友人の一人に会った）
例）That camera of his is very expensive.（彼のあのカメラはとても高い）

■ 所有格の後ろの名詞の省略
店・家などを表すときは名詞を省略できる。
例）I went to the dentist's (office).（歯医者へ行った）
例）We had dinner at my uncle's (house).（おじの家で夕食を食べた）

★ ポイント：\'s の位置は「アポストロフィの左側が持ち主」と考える。the student's room なら持ち主は1人、the students' room なら複数である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語を選びなさい。The cat is licking (its / it\'s) paw.',
        wrongAnswer: "it's",
        trapExplanation:
          '「それの」という所有の意味を表すのだから、Tom\'s のようにアポストロフィが必要だと考えて it\'s を選んでしまう。名詞の所有格の作り方に引きずられた誤りである。',
        correctAnswer: 'its',
        correctExplanation:
          'its は「それの」を表す所有格で、アポストロフィは付かない。it\'s は it is または it has の短縮形である。所有代名詞・所有格の代名詞にはアポストロフィが付かないというのが原則で、yours, ours, theirs, hers も同じ（× your\'s）。「アポストロフィがあれば短縮形」と覚えるとよい。',
      },
      {
        question: '次の文を「その自転車は〜のものだ」の形に書きかえなさい。That is her bicycle.',
        wrongAnswer: 'That bicycle is her.',
        trapExplanation:
          'her が所有格と目的格の両方に使われる形なので、そのまま所有代名詞としても使えると思いこんでしまう。his が両方同じ形であることも混乱を後押しする。',
        correctAnswer: 'That bicycle is hers.',
        correctExplanation:
          'her は「彼女の（所有格）」または「彼女を（目的格）」であり、「彼女のもの」を表す所有代名詞は hers である。後ろに名詞が続かない位置に来たら所有代名詞を使う、という判断で決まる。his だけは所有格と所有代名詞が同じ形なので、その例外にひきずられないようにする。',
      },
    ],
  },
  {
    id: 'koko_eigo_s201',
    subject: 'eigo',
    examType: 'koko',
    title: '人称代名詞③：it の特別な使い方',
    description: '天候・時間・距離の it、形式主語・形式目的語の it を、「訳さない it」として区別する',
    order: 701,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      'It is rainy today. の it を「それは」と訳すと意味が通らない。この it は何も指していない、いわば席を埋めるためだけの語である。英語の文は主語がないと成立しないので、指すものがなくても形式的に it を置く。この「訳さない it」を見抜けると、長文の意味がぐっと取りやすくなる。',
    keyPoints: [
      '天候・時間・日付・曜日・距離・明暗を表す it は訳さない（It is sunny. / It is five o\'clock.）。',
      '形式主語の it：It is + 形容詞 + to 〜 / that 〜。本当の主語は後ろにある。',
      '意味上の主語は for 〜、人の性質を表す形容詞なら of 〜（It is kind of you to help me.）。',
      '形式目的語の it：find / think / make + it + 形容詞 + to 〜。',
      'It takes + 人 + 時間 + to 〜（〜するのに…かかる）、It costs + 人 + 金額。',
      '前に出た文や語句を指す it（＝そのこと）とは区別する。',
    ],
    sections: [
      {
        heading: '訳さない it（天候・時間・距離）',
        body: `英語の文は必ず主語が必要なので、指すものがなくても it を置く。この it は日本語に訳さない。

■ 天候・気候
例）It is sunny today.（今日は晴れだ）
例）It was raining when I got up.（起きたとき雨が降っていた）
例）It is getting colder and colder.（だんだん寒くなっている）

■ 時間・日付・曜日・季節
例）It is seven thirty now.（今、7時30分だ）
例）It is Monday today.（今日は月曜日だ）
例）It was May 5 yesterday.（昨日は5月5日だった）
例）What time is it in London?（ロンドンは今何時ですか）

■ 距離
例）It is about two kilometers from here to the station.（ここから駅まで約2キロだ）
例）How far is it from your house to school?（家から学校までどのくらいの距離ですか）

■ 明暗
例）It gets dark early in winter.（冬は早く暗くなる）

■ 前に出た内容を指す it（こちらは訳す）
例）He said he would come, but I don't believe it.（彼は来ると言ったが、私はそれを信じない）※ it ＝彼が来ると言ったこと
例）I lost my key. I can't find it anywhere.（かぎをなくした。どこにも見つからない）※ it ＝ my key

★ ポイント：it を見たら「指しているものがあるか」を確認する。前に対応する語がなければ、天候型か形式主語型の「訳さない it」である。`,
      },
      {
        heading: '形式主語・形式目的語の it',
        body: `to 不定詞や that 節が主語になると頭でっかちで読みにくいので、仮に it を置いて本当の主語を後ろに回す。

■ 形式主語 it（It is 〜 to …）
例）It is important to read many books.（多くの本を読むことは大切だ）
　←（本来）To read many books is important.
例）It is difficult for me to get up early.（私が早起きするのは難しい）
例）It is true that he passed the exam.（彼が試験に合格したのは本当だ）

■ 意味上の主語：for か of か
ふつうは for + 人。
例）It is easy for him to solve the problem.（彼がその問題を解くのは簡単だ）
人の性質・人柄を表す形容詞（kind, nice, careless, foolish, wise, polite）のときは of + 人。
例）It is kind of you to help me.（手伝ってくれてありがとう＝あなたは親切だ）
例）It was careless of her to leave the door open.（ドアを開けたままにするとは彼女は不注意だった）
判別法：「人 is 形容詞」と言えるかどうか。You are kind. は言えるので of、× I am easy. は言えないので for。

■ 形式目的語 it（find / think / make / believe + it + 形容詞 + to 〜）
例）I found it difficult to answer the question.（その質問に答えるのは難しいとわかった）
例）We think it important to keep our promises.（約束を守ることは大切だと思う）
例）He made it a rule to walk every morning.（彼は毎朝歩くことを習慣にしていた）
⚠ 注意：× I found difficult to answer 〜 のように it を落とす誤りが非常に多い。

■ It takes / It costs
例）It takes me twenty minutes to walk to school.（学校まで歩いて20分かかる）
例）It took us three hours to finish the work.（その仕事を終えるのに3時間かかった）
例）It costs 500 yen to enter the museum.（その博物館に入るのに500円かかる）

★ ポイント：形式主語・形式目的語の it は、後ろに to 不定詞か that 節が必ずある。「後ろを見て本当の主語を探す」のが読み方のこつである。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女がその手紙を書いたのは親切だった。」を英語にしなさい。',
        wrongAnswer: 'It was kind for her to write the letter.',
        trapExplanation:
          '意味上の主語はすべて for + 人だと覚えていると、kind のときも for を使ってしまう。for が圧倒的に多く使われることも誤りを助長する。',
        correctAnswer: 'It was kind of her to write the letter.',
        correctExplanation:
          'kind, nice, careless, foolish, wise, polite など「人の性質」を表す形容詞のときは of + 人を使う。判別法は「人 is 形容詞」と言えるかどうかで、She is kind. は自然なので of を選ぶ。一方 It is difficult for me to 〜 は × I am difficult. とは言えないので for になる。',
      },
      {
        question: '誤りを直しなさい。I found difficult to understand his explanation.',
        wrongAnswer: 'I found difficult to understand his explanation.（正しいと判断する）',
        trapExplanation:
          '「彼の説明を理解するのが難しいとわかった」と訳すと意味が通じるので、そのまま正しいと思ってしまう。日本語には形式目的語にあたる語がないことが原因である。',
        correctAnswer: 'I found it difficult to understand his explanation.',
        correctExplanation:
          'find / think / make / believe などの後ろに「形容詞 + to 不定詞」を続けるときは、形式目的語の it が必ず必要である。本当の目的語は to understand 以下で、それを後ろに回した分、目的語の席に it を置く。I think it important to 〜 / We made it clear that 〜 も同じ形で、it の脱落は入試の定番の誤文訂正である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s202',
    subject: 'eigo',
    examType: 'koko',
    title: '人称代名詞④：並べる順序と、代名詞が指すもの',
    description: 'and で人を並べる語順と、代名詞が何を指しているかを正確に読み取る技術を身につける',
    order: 702,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '英語で「私とトム」と言いたいとき、I and Tom と書くと不自然だと言われる。英語では自分を最後に置くのが礼儀だからだ。順序にも文法にもルールがある——この決まりを知っておくと、英作文で不必要な減点をされずにすむ。あわせて、代名詞が何を指すかを読み取る練習もしておこう。',
    keyPoints: [
      'and で人を並べる順序は「2人称 → 3人称 → 1人称」（You, Tom and I）。',
      '悪いことを言うときだけ自分を先に置く（I and Tom broke the window.）。',
      '代名詞は必ず前に出た名詞（先行詞）を指す。原則としてもっとも近い同じ数・性の名詞を指す。',
      '同じ名詞のくり返しを避けるために代名詞を使う。日本語の「彼」より英語の代名詞ははるかに多用される。',
      '英語では主語を省略できないので、日本語で省かれた主語を代名詞で補う必要がある。',
      '設問「下線部が指すものを答えよ」では、代名詞の直前から前へさかのぼって探す。',
    ],
    sections: [
      {
        heading: '人を並べるときの順序',
        figureId: 'lf_kokoeigoext06_202',
        body: `■ 基本の順序：2人称 → 3人称 → 1人称
自分（I）を最後に置くのが英語の習慣である。
例）You and I are good friends.（あなたと私は仲がよい）
例）You, Tom and I are in the same class.（あなたとトムと私は同じクラスだ）
例）Tom and I went to the museum.（トムと私は博物館へ行った）
× I and Tom went to the museum.（不自然）

■ 悪いことを述べるときは自分が先
責任を認める場面では、自分を先に置く。
例）I and Tom broke the window.（私とトムが窓を割りました）

■ 3人称どうしの順序
he と she の順序に決まりはないが、話題の中心になっている人を先に置く。
例）He and his sister came to see me.（彼と彼の姉が会いに来た）

■ 動詞の形に注意
主語が「A and B」なら複数扱いになる。
例）Tom and I are classmates.（× Tom and I is）
例）My father and mother were both teachers.（父も母も教師だった）

■ 格は位置で決まる（前セッションの復習）
主語 → 主格：You and I are …
目的語 → 目的格：between you and me／for Tom and me
例）This is a secret between you and me.（これはあなたと私の秘密だ）

★ ポイント：語順は「あなた→彼→私」。図の目盛りで並び順を確認しておこう。格の判定は語順とは別問題なので、必ず「相手を隠して読む」検算をする。`,
      },
      {
        heading: '代名詞が指すものを読み取る',
        body: `長文問題では「下線部の it / they / them が指すものを日本語で答えよ」という設問が頻出する。

■ 原則①：代名詞は前に出た名詞を指す
例）Tom has a dog. He takes it for a walk every morning.
He ＝ Tom／it ＝ a dog（数と性で判断する）

■ 原則②：数と人称が一致するものを探す
複数の they なら、前にある複数名詞を探す。
例）My parents gave me some books. They are all about science.
They ＝ some books（my parents ではない。内容から判断する）

■ 原則③：もっとも近いものが優先されるが、内容で確かめる
例）Ken told Mike that he had passed the exam.
he は Ken とも Mike とも取れる。前後の文脈から決める必要がある。あいまいさを避けるために、実際の英文では Ken told Mike, "I passed the exam." のように書きかえられることも多い。

■ 原則④：it は文や句全体を指すこともある
例）He didn't come to the party. Everyone was surprised at it.
it ＝ 彼がパーティーに来なかったこと（名詞1語ではない）
このタイプは「そのこと」と訳す。

■ 答え方のこつ
・設問が「日本語で答えよ」なら、指す部分を訳して「〜こと」「〜（名詞）」の形で書く。
・代名詞をそのまま元の語に置きかえて文を読み直し、意味が通るか確かめる。
例）「Everyone was surprised at his not coming to the party.」と置きかえて通じるので、it の内容は正しい。

⚠ 注意：日本語では主語をよく省くが、英語では省けない。和文英訳のとき「（彼は）と補って主語を立てる」ことを忘れないこと。
例）「昨日、駅で友達に会った。とても元気そうだった。」
→ I met my friend at the station yesterday. He looked very well.（He を補う）

★ ポイント：代名詞の指す内容は、必ず元の語に置きかえて読み直して検算する。これだけで指示語問題の正答率が大きく上がる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私と姉は先週、京都を訪れました。」を英語にしなさい。',
        wrongAnswer: 'I and my sister visited Kyoto last week.',
        trapExplanation:
          '日本語の「私と姉」の語順をそのまま英語にしてしまう。文法的に完全な誤りではないため、自分では気づきにくいのも厄介である。',
        correctAnswer: 'My sister and I visited Kyoto last week.',
        correctExplanation:
          '英語では and で人を並べるとき、自分（I）を最後に置くのが習慣で、順序は「2人称 → 3人称 → 1人称」になる。You and I / Tom and I / You, Tom and I が正しい形である。ただし悪い行いを述べるときだけ I and Tom broke the window. のように自分を先に置く。主語が A and B なので動詞は複数扱いである点も確認する。',
      },
      {
        question: '下線部 they が指すものを答えなさい。My grandparents sent me some apples. They were very sweet.',
        wrongAnswer: 'my grandparents（祖父母）',
        trapExplanation:
          'they を見たとき、文の中でいちばん目立つ「人」を指すと考えてしまう。前の文の主語が my grandparents なので、そのまま主語どうしを結びつけてしまう。',
        correctAnswer: 'some apples（送られてきたリンゴ）',
        correctExplanation:
          '代名詞の指す内容は、位置ではなく意味の通じ方で決める。were very sweet（とても甘かった）という述語に合うのはリンゴであって祖父母ではない。実際に They を some apples に置きかえて Some apples were very sweet. と読み直すと自然に通じる。この「置きかえて読み直す」検算を必ず行うこと。',
      },
    ],
  },

  // ─────────── 6. 再帰代名詞・指示代名詞（s203〜s205 / order 703〜705） ───────────
  {
    id: 'koko_eigo_s203',
    subject: 'eigo',
    examType: 'koko',
    title: '再帰代名詞①：myself 型の形と基本の働き',
    description: '-self / -selves の作り方と、「主語と目的語が同じ人」を表す用法・強調用法を区別する',
    order: 703,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '「彼は自分を責めた」を He blamed him. と書くと、責めた相手は別の男になってしまう。英語では主語と同じ人を目的語にするとき、himself という専用の形を使う。この一語があるかないかで登場人物の数まで変わるのだから、あなどれない。',
    keyPoints: [
      '単数は -self、複数は -selves：myself, yourself, himself, herself, itself / ourselves, yourselves, themselves。',
      '1・2人称は所有格に付ける（my+self, your+self, our+selves）、3人称は目的格に付ける（him+self, them+selves）。',
      '再帰用法＝主語と目的語が同じ人。省略できない（He hurt himself.）。',
      '強調用法＝「〜自身が」。主語や目的語の直後、または文末に置く。省略できる。',
      'yourself（あなた自身）と yourselves（あなたたち自身）を数で使い分ける。',
      '× hisself / × theirselves は存在しない誤った形。',
    ],
    sections: [
      {
        heading: '再帰代名詞の形と作り方',
        figureId: 'lf_kokoeigoext06_203',
        body: `■ 一覧
1人称単数 myself ／ 2人称単数 yourself ／ 3人称単数 himself, herself, itself
1人称複数 ourselves ／ 2人称複数 yourselves ／ 3人称複数 themselves

■ 作り方の規則
1人称・2人称 → 所有格 + self(selves)：my + self、your + self、our + selves、your + selves
3人称 → 目的格 + self(selves)：him + self、her + self、it + self、them + selves
⚠ 注意：この規則から外れる × hisself、× theirselves は誤りである。his は所有格だが、3人称は目的格で作るため himself が正しい。

■ 単数と複数の区別
yourself（あなた1人）／ yourselves（あなたたち複数）
例）Did you enjoy yourself, Tom?（トム、楽しかった？）
例）Did you enjoy yourselves, everyone?（みなさん、楽しかったですか）

■ 用法①：再帰用法（主語と目的語が同じ人）
動詞や前置詞の目的語が主語と同じ人のとき、必ず再帰代名詞を使う。
例）He hurt himself while playing soccer.（彼はサッカー中にけがをした）
例）She looked at herself in the mirror.（彼女は鏡で自分を見た）
例）I taught myself English.（私は英語を独学した）
例）Take care of yourself.（体に気をつけて）
この用法では省略できない。
⚠ 注意：He hurt him. とすると「彼は（別の）彼をけがさせた」という意味になる。

■ 用法②：強調用法（〜自身が）
「他の誰でもなくその人が」という強調。取り除いても文は成り立つ。
例）I myself saw the accident.（私自身がその事故を見た）
例）She made the cake herself.（彼女は自分でそのケーキを作った）
例）The president himself came to the school.（校長自身が学校へ来た）
置く位置は「強調したい語の直後」か「文末」である。

★ ポイント：取り除いて文が成り立つなら強調用法、成り立たないなら再帰用法。図の人称×数の表で形を確かめておこう。`,
      },
      {
        heading: '再帰代名詞が要る動詞・要らない動詞',
        body: `日本語で「自分を〜する」と言っても、英語では再帰代名詞を使わない動詞がある。逆もある。

■ 再帰代名詞が必要な代表例
enjoy oneself（楽しむ）／help oneself to 〜（〜を自由に取って食べる）／hurt oneself（けがをする）／introduce oneself（自己紹介する）／teach oneself（独学する）／kill oneself／seat oneself（座る）／find oneself（気がつくと〜にいる）
例）Please help yourself to the cookies.（クッキーを自由に召しあがってください）
例）Let me introduce myself.（自己紹介させてください）
例）He found himself lying on the floor.（気がつくと彼は床に横たわっていた）

■ 再帰代名詞を使わない動詞（日本語につられやすい）
wash（体を洗う）／dress（服を着る）／shave（ひげをそる）／bathe／hide（隠れる）／move（動く）
例）I washed and dressed quickly.（急いで体を洗って服を着た）※ × washed myself は不自然
例）The children hid behind the door.（子どもたちはドアの後ろに隠れた）※ × hid themselves も可能だが hid だけで通じる
例）The door opened.（ドアが開いた）※ × The door opened itself は誤り

■ 慣用表現（前置詞とセット）
by oneself（ひとりで・独力で）＝alone
for oneself（自分のために・自分の力で）
in itself（それ自体は）
of itself（ひとりでに）
beside oneself（われを忘れて）
例）She lives by herself.（彼女はひとり暮らしをしている）
例）You should think for yourself.（自分の頭で考えるべきだ）
例）The door opened of itself.（ドアがひとりでに開いた）
例）Make yourself at home.（くつろいでください）

⚠ 注意：by oneself と for oneself は意味が違う。by ＝ 一人で（誰もいない）、for ＝ 自分のために・自力で。書きかえ問題で問われる。

★ ポイント：慣用表現は「動詞 + oneself」の形でまとめて暗記する。oneself の部分を主語に合わせて変えるのを忘れないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を適する形に変えなさい。The boys enjoyed （they） at the summer camp.',
        wrongAnswer: 'them',
        trapExplanation:
          '動詞 enjoyed の後ろだから目的格だと考えて them にしてしまう。文法的には目的語の位置なので、目的格を選ぶこと自体は自然な判断である。',
        correctAnswer: 'themselves',
        correctExplanation:
          '主語 The boys と目的語が同じ人を指すので、再帰代名詞 themselves を使う。them だと「（別の）彼らを楽しませた」という意味になってしまう。enjoy oneself は「楽しむ」という決まった言い方なので、主語に合わせて myself / yourself / himself / ourselves などに変える。× theirselves という形は存在しない点にも注意する。',
      },
      {
        question: '次の二文の意味の違いを説明しなさい。(a) She went to Kyoto by herself. (b) She made the cake herself.',
        wrongAnswer: 'どちらも「彼女は自分で〜した」で意味は同じ。',
        trapExplanation:
          'どちらにも herself があるため、同じ「自分で」という意味だと判断してしまう。by の有無を見落とすことが直接の原因である。',
        correctAnswer: '(a) は「彼女はひとりで（付き添いなしで）京都へ行った」。(b) は「彼女は（他の誰でもなく）自分自身でそのケーキを作った」。',
        correctExplanation:
          'by oneself は「ひとりで・独力で」という慣用表現で alone に近い意味になる。一方 (b) の herself は強調用法で、「他の誰でもなく本人が」という意味を添えている。強調用法は取り除いても She made the cake. と文が成り立つのに対し、(a) の by herself を取ると意味が変わる。この違いが見分けの決め手になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s204',
    subject: 'eigo',
    examType: 'koko',
    title: '再帰代名詞②：慣用表現を使いこなす',
    description: 'by oneself・help oneself・make oneself at home など、入試頻出の慣用表現を場面ごとに整理する',
    order: 704,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      'ホームステイ先で Help yourself. と言われて固まってしまう人がいる。直訳すると「あなた自身を助けなさい」で意味不明だが、実は「遠慮なくどうぞ」というもてなしの言葉だ。再帰代名詞を使う慣用表現は、こうした日常会話の場面でそのまま出題される。場面ごとに覚えてしまおう。',
    keyPoints: [
      'help oneself (to 〜)＝（〜を）自由に取って食べる。もてなしの決まり文句。',
      'make oneself at home＝くつろぐ。Make yourself at home. で「楽にしてください」。',
      'enjoy oneself＝楽しむ（＝have a good time）。',
      'by oneself＝ひとりで（＝alone）。for oneself＝自分のために・自分の力で。',
      'of itself＝ひとりでに。in itself＝それ自体は。beside oneself＝われを忘れて。',
      'say to oneself＝心の中で思う。come to oneself＝正気に返る。',
    ],
    sections: [
      {
        heading: '会話で使う慣用表現',
        body: `■ もてなす・すすめる
Help yourself (to 〜).（〜を自由に取って召しあがってください）
Make yourself at home.（くつろいでください）
例）"Help yourself to the salad." "Thank you."（「サラダをどうぞ」「ありがとう」）
例）Please come in and make yourself at home.（どうぞ入って、楽にしてください）

■ 楽しむ・別れのあいさつ
enjoy oneself ＝ have a good time（楽しむ）
Take care of yourself.（体に気をつけて）
Behave yourself.（行儀よくしなさい）
例）Did you enjoy yourself at the concert?（コンサートは楽しかった？）
＝ Did you have a good time at the concert?

■ 自己紹介
introduce oneself（自己紹介する）
例）Let me introduce myself. My name is Kenta.（自己紹介させてください。健太といいます）

■ 独力・ひとりで
by oneself（ひとりで）＝alone
for oneself（自分のために・自力で）
on one's own（自分の力で）
例）My grandfather lives by himself in the countryside.（祖父は田舎でひとり暮らしをしている）
例）You must decide for yourself.（自分で決めなければならない）
⚠ 注意：by oneself は「他に人がいない」、for oneself は「人に頼らず自分の利益・判断で」という違いがある。

★ ポイント：会話文の問題では、場面（食卓・訪問・別れ際）と結びつけて覚えると選択肢を即座に絞れる。`,
      },
      {
        heading: '書き言葉で出る慣用表現',
        body: `■ ひとりでに・それ自体
of itself（ひとりでに・自然に）
in itself（それ自体は）
by itself（それだけで・単独で）
例）The light went out of itself.（明かりがひとりでに消えた）
例）Money in itself is not evil.（お金それ自体は悪ではない）
例）The machine works by itself.（その機械はひとりでに動く）

■ 心の動き
say to oneself（心の中で思う・独り言を言う）
talk to oneself（独り言を言う）
beside oneself (with 〜)（〜でわれを忘れて）
come to oneself（正気に返る）
例）"What should I do?" he said to himself.（「どうしよう」と彼は心の中で思った）
例）She was beside herself with joy.（彼女は喜びでわれを忘れていた）

■ その他
between ourselves（ここだけの話だが）
in spite of oneself（思わず・我知らず）
例）Between ourselves, he is going to quit the job.（ここだけの話、彼は仕事をやめるつもりだ）
例）I laughed in spite of myself.（思わず笑ってしまった）

■ 主語に合わせて形を変えることを忘れない
慣用表現の oneself は、主語の人称・数に合わせて変える。
例）I enjoyed myself.／You enjoyed yourself.／They enjoyed themselves.
例）He lives by himself.／They live by themselves.
⚠ 注意：慣用句を丸暗記していると、oneself のまま書いてしまう誤りが出る。必ず主語を確認する。

★ ポイント：「oneself」は辞書の見出し語の形であって、実際の文では絶対にそのまま使わない。主語に合わせる変換が最後の一手である。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内を適する形にしなさい。My aunt lives （by oneself） in Hokkaido.',
        wrongAnswer: 'by oneself（そのまま）',
        trapExplanation:
          '辞書の見出しの形である by oneself を熟語として丸暗記しているため、主語に合わせて変える必要があることに気づかない。日本語の「ひとりで」に人称の区別がないことも原因である。',
        correctAnswer: 'by herself',
        correctExplanation:
          '再帰代名詞を含む慣用表現は、主語の人称と数に合わせて形を変える。主語が My aunt（3人称単数女性）なので by herself となる。同じく I live by myself. / They live by themselves. のように変化する。oneself のまま書くと必ず減点されるので、慣用句を書いたら主語を確認する習慣をつける。',
      },
      {
        question: '意味が通るように（　）に入る語を答えなさい。"Please help （　） to the cake," said Mrs. Brown to the children.',
        wrongAnswer: 'yourself',
        trapExplanation:
          'help yourself という形をひとかたまりで覚えているため、相手が何人でも yourself を使ってしまう。日本語の「どうぞ召しあがれ」に単複の区別がないことも影響する。',
        correctAnswer: 'yourselves',
        correctExplanation:
          '声をかけている相手が the children（複数）なので、複数形の yourselves を使う。yourself は相手が1人のとき、yourselves は2人以上のときである。同様に Did you enjoy yourself? は相手1人、Did you enjoy yourselves? は複数に対して使う。会話文では「誰に向かって言っているか」を必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s205',
    subject: 'eigo',
    examType: 'koko',
    title: '指示代名詞：this / that / these / those と that of 〜',
    description: '距離と数の二軸で指示代名詞を整理し、比較の文で名詞のくり返しを避ける that / those を使えるようにする',
    order: 705,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '「日本の気候はイギリスの気候よりおだやかだ」を英語にすると、climate を二回書きたくなる。しかし英語はくり返しを嫌い、二回目を that に置きかえる。this や that には「これ・あれ」以外にこんな役目もある。距離と数の基本を押さえたうえで、その先の使い方まで進もう。',
    keyPoints: [
      '近くのもの＝this（単数）/ these（複数）、遠くのもの＝that（単数）/ those（複数）。',
      '時間的にも使う：this week（今週）、those days（当時）。',
      '電話では This is 〜（こちらは〜です）、Is that 〜?（そちらは〜さんですか）。',
      '比較の文で名詞のくり返しを避ける that / those：the climate of Japan and that of England。',
      'those who 〜＝「〜する人々」。',
      'this＝これから述べること、that＝前に述べたこと、という前後の指し分けもある。',
    ],
    sections: [
      {
        heading: '距離と数の二軸',
        figureId: 'lf_kokoeigoext06_205',
        body: `■ 基本の四語
近く・単数 → this（これ・この）
近く・複数 → these（これら・これらの）
遠く・単数 → that（あれ・あの）
遠く・複数 → those（あれら・あれらの）
例）This is my bag.（これは私のかばんだ）
例）These are my books.（これらは私の本だ）
例）That building is the city hall.（あの建物が市役所だ）
例）Those flowers are beautiful.（あれらの花は美しい）

■ 形容詞としての使い方
名詞の前に置くときは、名詞の数と一致させる。
例）this book / these books（× this books）
例）that student / those students

■ 時間的な遠近
this ＝ 今に近い時、that ＝ 過去・離れた時
例）I am busy this week.（今週は忙しい）
例）We had no smartphones in those days.（当時はスマートフォンがなかった）
例）That was a wonderful trip.（あれはすばらしい旅行だった）

■ 電話・紹介での使い方
例）Hello, this is Ken speaking.（もしもし、健です）
例）Is that Mr. Brown?（そちらはブラウンさんですか）※ イギリス英語
例）Mother, this is my friend Tom.（お母さん、こちらは友達のトムだよ）
⚠ 注意：電話で自分を名乗るとき I am Ken. とは言わない。This is Ken. が正しい。

★ ポイント：距離（近い・遠い）と数（単数・複数）の二軸で四語が決まる。図の四つの位置で確認しよう。`,
      },
      {
        heading: 'くり返しを避ける that / those',
        body: `■ 比較の文での that / those
前に出た名詞のくり返しを避けるために、that（単数）/ those（複数）を使う。
例）The climate of Japan is milder than that of England.（日本の気候はイギリスの気候よりおだやかだ）※ that ＝ the climate
例）The population of Tokyo is larger than that of Osaka.（東京の人口は大阪の人口より多い）
例）The ears of a rabbit are longer than those of a cat.（ウサギの耳はネコの耳より長い）※ those ＝ the ears
⚠ 注意：it では置きかえられない。it は「まったく同じもの」を指すが、ここでは「別のものの同じ種類」なので that を使う。
⚠ 注意：複数名詞のくり返しには those を使う。× than that of a cat（ears は複数）

■ those who 〜（〜する人々）
例）Heaven helps those who help themselves.（天は自ら助くる者を助く）
例）Those who want to join the club should come here.（クラブに入りたい人はここへ来てください）
※ those who は複数扱いなので動詞も複数形になる。

■ this と that の指し分け
前に述べたこと → that
これから述べること → this
例）He is honest and kind. That is why everyone likes him.（彼は正直で親切だ。だからみんなに好かれる）
例）I want to say this: never give up.（これだけは言いたい。決してあきらめるな）
また、二つのものを並べて「前者・後者」を表すときは that ＝ 前者、this ＝ 後者になる。

■ that の他の顔（品詞の区別）
・指示代名詞：That is my house.
・接続詞：I know that he is honest.
・関係代名詞：the book that I bought
・副詞（それほど）：It is not that difficult.
読解では、that を見たらどの用法かを見分けることが大切である。

★ ポイント：比較文で「〜の…より」と出たら、二回目の名詞を that / those に置きかえる。単数か複数かの一致まで問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。The population of China is much larger than （　） of Japan.',
        wrongAnswer: 'it',
        trapExplanation:
          '前に出た the population を指すのだから it でよいと考えてしまう。日本語では「中国の人口は日本のそれより多い」と「それ」で受けられるので、it を選びたくなる。',
        correctAnswer: 'that',
        correctExplanation:
          'ここで比べているのは「中国の人口」と「日本の人口」で、同じ種類の別のものである。このように名詞のくり返しを避けて別のものを指すときは that（複数なら those）を使う。it は「まったく同じもの」を指す語なので使えない。複数名詞のくり返しなら The ears of a rabbit are longer than those of a cat. のように those になる。',
      },
      {
        question: '（　）内から適する語を選びなさい。(This / These) shoes are too small for me.',
        wrongAnswer: 'This',
        trapExplanation:
          '「この靴」という日本語が単数のように感じられるため this を選んでしまう。shoes が常に複数形で使われる名詞であることを見落とすのが原因である。',
        correctAnswer: 'These',
        correctExplanation:
          'shoes は二つで一組の名詞で常に複数形なので、指示形容詞も複数の these を使い、動詞も are になる。同じく these glasses（このめがね）、these scissors（このはさみ）、these trousers も複数扱いである。1組であることを示したいときは this pair of shoes とすれば単数扱いになる。',
      },
    ],
  },

  // ─────────── 7. 不定代名詞（s206〜s211 / order 706〜711） ───────────
  {
    id: 'koko_eigo_s206',
    subject: 'eigo',
    examType: 'koko',
    title: '不定代名詞①：some と any',
    description: '肯定・否定・疑問という文の形だけでなく、話し手の期待によって some と any を選び分ける',
    order: 706,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '「疑問文では any」と習ったのに、Would you like some coffee? では some が使われている。規則が破られているように見えるが、実は破られていない。some と any を分けているのは文の形ではなく、話し手が相手にどう答えてほしいかという気持ちだ。そこがわかると例外が例外でなくなる。',
    keyPoints: [
      'some＝肯定文で「いくつかの・いくらかの」。可算・不可算どちらにも使える。',
      'any＝否定文で「少しも（〜ない）」、疑問文で「いくつか・いくらか」。',
      '勧誘・依頼の疑問文では some（Would you like some tea? / Can I have some water?）。',
      '肯定文の any＝「どんな〜でも」（Any student can join.）。',
      'not 〜 any ＝ no。No news is good news. のように no も使える。',
      'some / any は代名詞としても単独で使える（Some of them were absent.）。',
    ],
    sections: [
      {
        heading: 'some と any の基本',
        body: `■ some（肯定文）
「いくつかの・いくらかの」。可算名詞の複数形にも不可算名詞にも付く。
例）I have some questions.（質問がいくつかある）
例）There is some milk in the bottle.（びんに牛乳が少し入っている）
※ 訳さないほうが自然なことも多い。I bought some apples. は「リンゴを買った」でよい。

■ any（否定文・疑問文）
否定文では「少しも〜ない」、疑問文では「いくつか・いくらか」。
例）I don't have any brothers.（兄弟は一人もいない）
例）Do you have any questions?（何か質問はありますか）
例）There isn't any water in the glass.（コップに水は少しもない）

■ 勧誘・依頼の疑問文では some
相手に「はい」と答えてほしいときは、疑問文でも some を使う。
例）Would you like some cake?（ケーキはいかがですか）
例）Can I have some water?（水をいただけますか）
例）Shall I make some tea for you?（お茶をいれましょうか）
「いかがですか」「いただけますか」は勧誘・依頼なので some になる。

■ 肯定文の any＝「どんな〜でも」
例）Any student can use this room.（どの生徒でもこの部屋を使える）
例）Come at any time.（いつでも来てください）
例）You can take any of these books.（これらの本のどれでも持っていってよい）

★ ポイント：some / any の選択は「文の形」を第一の目安にし、「勧誘・依頼なら some」「肯定文の any は どんな〜でも」の二つを例外として上乗せする。`,
      },
      {
        heading: 'no と、代名詞としての some / any',
        body: `■ not 〜 any ＝ no
例）I don't have any money.＝I have no money.（お金がまったくない）
例）There weren't any students in the classroom.＝There were no students in the classroom.
⚠ 注意：no はそれ自体が否定なので、動詞を否定形にしない。× I don't have no money.
また、文頭に否定を置きたいときは no を使う。× Any students came. → ○ No students came.

■ 代名詞としての some / any
名詞を付けずに単独で使える。
例）Some of the students were absent.（生徒の何人かは欠席だった）
例）I don't know any of them.（彼らの誰も知らない）
例）"Do you have a pen?" "Yes, I have some."（「ペンある？」「うん、いくつかあるよ」）
※ some of / any of の後ろには the, my, these などの限定語が必要。○ some of the students　× some of students

■ 動詞の一致
some of / any of の後ろの名詞に合わせる。
例）Some of the water was spilled.（水の一部がこぼれた）※ 不可算 → 単数
例）Some of the books are new.（本の何冊かは新しい）※ 複数 → 複数

■ something / anything / nothing
-thing, -one, -body の形にも同じ使い分けが働く。
例）I have something to tell you.（話したいことがある）
例）Do you have anything to drink?（何か飲み物はありますか）
例）There is nothing in the box.（箱の中には何もない）
例）Would you like something hot to drink?（何か温かい飲み物はいかがですか）※ 勧誘なので something
⚠ 注意：これらを修飾する形容詞は後ろに置く（something cold, nothing special）。詳しくは形容詞の単元で扱う。

★ ポイント：some/any の使い分けは、something/anything, someone/anyone, somewhere/anywhere にもそのまま当てはまる。1つの規則で6語をまかなえる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語を選びなさい。Shall I get you (some / any) hot coffee?',
        wrongAnswer: 'any',
        trapExplanation:
          '疑問文の形なので any を選ぶ、という規則をそのまま当てはめてしまう。Do you have any 〜? の形に慣れているほど反射的に any を選びやすい。',
        correctAnswer: 'some',
        correctExplanation:
          'Shall I 〜? は「〜しましょうか」という申し出であり、相手に「はい、お願いします」と答えてほしい勧誘の疑問文なので some を使う。Would you like some 〜? / Can I have some 〜? / How about some 〜? も同じ仲間である。単に有無をたずねる Do you have any brothers? では any を使う。',
      },
      {
        question: '誤りを直しなさい。I didn\'t buy no souvenirs at the shop.',
        wrongAnswer: 'I didn\'t buy no souvenirs at the shop.（強い否定として正しいと判断する）',
        trapExplanation:
          '日本語の「何も買わなかった」を強調しようとして、否定語を二つ重ねてしまう。歌の歌詞などで二重否定を見聞きしていることも影響する。',
        correctAnswer: 'I didn\'t buy any souvenirs at the shop.（＝I bought no souvenirs at the shop.）',
        correctExplanation:
          '英語では一つの節に否定語を二つ置かない。否定文で「少しも〜ない」と言うときは not 〜 any の形にし、no を使うなら動詞は肯定形のままにする。したがって I didn\'t buy any souvenirs. または I bought no souvenirs. のどちらかにする。この二つの書きかえは入試の定番である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s207',
    subject: 'eigo',
    examType: 'koko',
    title: '不定代名詞②：one と it の使い分け',
    description: '「同じ種類の別のもの」を指す one と、「まさにそのもの」を指す it を区別する',
    order: 707,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '傘を忘れた友達に「1本貸すよ」と言うとき、英語では I\'ll lend you one. と言う。ここで it を使うと「（あなたが忘れた）その傘を貸す」という妙な話になってしまう。one は「同じ種類の別のもの」、it は「まさにそのもの」。この一線を引けるかどうかで、会話の意味が変わる。',
    keyPoints: [
      'one＝前に出た名詞と同じ種類の「別のもの」。可算名詞にだけ使う。',
      'it＝前に出たもの「そのもの」。不可算名詞も受けられる。',
      '複数なら ones を使う（the red ones）。',
      'one には形容詞や the を付けられる（a new one, the big one, the one on the desk）。',
      '不可算名詞は one で受けられない。some や無冠詞で受ける。',
      '「一般の人々」を表す one（One should keep one\'s promise.）もある。',
    ],
    sections: [
      {
        heading: '「別のもの」の one と「そのもの」の it',
        figureId: 'lf_kokoeigoext06_207',
        body: `■ one＝同じ種類の別のもの
例）I lost my umbrella, so I have to buy one.（傘をなくしたので1本買わなければならない）※ one ＝ an umbrella（別の傘）
例）"Do you have a pen?" "Yes, I have one."（「ペンを持っている？」「うん、1本あるよ」）

■ it＝まさにそのもの
例）I lost my umbrella, but I found it in the classroom.（傘をなくしたが、教室でそれを見つけた）※ it ＝ その傘そのもの
例）This is my new bike. I bought it last week.（これは私の新しい自転車だ。先週それを買った）

■ 見分け方
「別のものでもよい」→ one／「そのものでなければならない」→ it
例）My camera is old. I want to buy a new one.（新しいのを買いたい）※ 別のカメラ
例）My camera is broken. I have to repair it.（それを修理しなければならない）※ そのカメラ

■ 複数形 ones
例）These apples are small. I want the big ones.（このリンゴは小さい。大きいのがほしい）
例）I don't like these shoes. Show me some other ones.

■ one に付けられる語
a new one／the red one／the one on the desk／the one I bought yesterday
例）Which bag is yours? — The one with the blue handle.（どのかばんがあなたの？ — 青い取っ手のついたものです）
⚠ 注意：形容詞が付くときは a を落とせない。× I want new one → ○ I want a new one

■ 不可算名詞は one で受けられない
× "Do you have any water?" "Yes, I have one."
○ "Do you have any water?" "Yes, I have some."
one は「1つ2つ」と数えられる名詞専用である。

★ ポイント：図の二軸（同一のものか／単数か複数か）で it・them・one・ones の四つの位置を確認しておこう。`,
      },
      {
        heading: '一般の人を表す one と、その他の使い方',
        body: `■ 一般の人々を表す one
「人は（誰でも）」という意味で使う堅い言い方。
例）One should keep one's promise.（人は約束を守るべきだ）
例）One never knows what will happen.（何が起こるかわからないものだ）
※ 会話では you や we を使うほうがふつうである。
例）You should keep your promise.

■ one 〜, the other …（2つのうち一方と他方）
例）I have two dogs. One is white and the other is black.（犬を2匹飼っている。1匹は白で、もう1匹は黒だ）
※ 詳しくは次のセッションで扱う。

■ 数詞としての one
例）I have only one brother.（兄弟は1人だけだ）
例）One of my friends lives in Canada.（友達の一人はカナダに住んでいる）
※ one of + 複数名詞は単数扱い。動詞は lives になる。

■ that との違い
比較の文で名詞のくり返しを避けるときは that / those を使い、one は使わない。
○ The climate of Japan is milder than that of England.
× ... than one of England.
理由：that は不可算名詞も受けられ、「〜の」という限定句が付いた形を受けるのに向いている。

■ まとめ
it：そのもの（不可算も可）
one：同じ種類の別のもの（可算単数）
ones：同じ種類の別のもの（可算複数）
that / those：比較の文で名詞のくり返しを避ける

★ ポイント：三つの語を「同じもの／別のもの／比べるもの」という役割で覚えると混同しない。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に one か it を入れなさい。I don\'t have a dictionary. Could you lend me （　）?',
        wrongAnswer: 'it',
        trapExplanation:
          '前の文に a dictionary があるので、それを受ける代名詞は it だと考えてしまう。日本語では「辞書を持っていないので、貸してくれませんか」と言うだけで、区別が表に出ない。',
        correctAnswer: 'one',
        correctExplanation:
          '話し手は辞書を持っていないので、借りたいのは「相手が持っている別の辞書」である。同じ種類の別のものを指すときは one を使う。it にすると「（私が持っていない）その辞書そのものを貸して」という矛盾した意味になってしまう。逆に I left my dictionary here. Did you see it? なら特定の辞書なので it が正しい。',
      },
      {
        question: '誤りを直しなさい。My bag is too old. I want to buy new one.',
        wrongAnswer: 'My bag is too old. I want to buy new one.（正しいと判断する）',
        trapExplanation:
          'one を代名詞だと考えると、代名詞に冠詞は付かないと思って a を落としてしまう。日本語の「新しいのを買いたい」に冠詞にあたる語がないことも原因である。',
        correctAnswer: 'My bag is too old. I want to buy a new one.',
        correctExplanation:
          'one は「同じ種類のもの1つ」を表す名詞のように働くので、形容詞が付くときは冠詞が必要になり a new one となる。特定するなら the new one、複数なら new ones とする。one が単独で使われるとき（I have one.）に冠詞が付かないのは、one 自体が「1つ」を意味しているためである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s208',
    subject: 'eigo',
    examType: 'koko',
    title: '不定代名詞③：another と the other',
    description: '「もう一つ」と「残りの一つ」の違いを、集合の中に残りがあるかどうかで判断する',
    order: 708,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      'レストランで「もう一杯ください」は Another cup, please. だが、「（二つあるうちの）もう一方」は the other になる。同じ「もう一つ」でも、残りがまだあるのか、これで最後なのかで語が変わるのだ。集合の中に何個残っているかを数えれば、迷わず選べるようになる。',
    keyPoints: [
      'another＝an + other。「（不特定の）もう一つ」。残りがまだあるとき。',
      'the other＝「残っている最後の一つ」。二つのうちのもう一方。',
      'one 〜, the other …＝2つのうち一方と他方。',
      'one 〜, another …, the other …＝3つのうち1つ目・2つ目・最後。',
      'another は単数のみ。ただし another + 数詞 + 複数名詞（another two days）は可。',
      'other は形容詞として複数名詞の前に置く（other students）。単独では使えない。',
    ],
    sections: [
      {
        heading: '残りがあるか、これで最後か',
        body: `■ another（もう一つ・別の一つ）
an + other が語源で、「不特定のもう一つ」を表す。残りがまだたくさんある場面で使う。
例）This cake is delicious. Can I have another?（このケーキおいしい。もう一つもらえる？）
例）I don't like this color. Please show me another one.（この色は好きじゃない。別のを見せてください）
例）Let's meet another day.（また別の日に会いましょう）

■ the other（残りの最後の一つ）
「特定できる残り」なので the が付く。
例）I have two hands. One is right and the other is left.（手は2つある。一方は右で、もう一方は左だ）
例）He has two sons. One is a doctor, and the other is a lawyer.（息子が2人いる。1人は医者で、もう1人は弁護士だ）

■ 3つの場合
例）I have three pens. One is red, another is blue, and the other is black.
（ペンが3本ある。1本は赤、もう1本は青、残りの1本は黒だ）
one → another → the other という流れになる。

■ another の特別な使い方
数詞と組み合わせると複数名詞が続く。
例）I need another two days to finish it.（それを終えるのにあと2日必要だ）
＝ two more days
例）Wait another five minutes.（あと5分待って）

■ other（形容詞）
単独では使えず、複数名詞の前に置くか the が必要。
例）Do you have any other questions?（他に質問はありますか）
例）The other students went home.（他の生徒たちは帰った）
× I have other. → ○ I have others.（代名詞は others）

★ ポイント：「残りがまだある → another」「これで最後 → the other」。頭の中で集合を絵にして、残りを数えるのがいちばん確実である。`,
      },
      {
        heading: '慣用表現と入試での問われ方',
        body: `■ 慣用表現
one after another（次々に）
one another（互いに。3人以上）
each other（互いに。2人。今は人数の区別は緩やかになっている）
in other words（言いかえれば）
on the other hand（他方では）
the other day（先日）
every other day（一日おきに）
例）Cars passed by one after another.（車が次々に通り過ぎた）
例）We should help one another.（私たちは助け合うべきだ）
例）I met him the other day.（先日、彼に会った）
例）He goes to the gym every other day.（彼は一日おきにジムへ行く）
⚠ 注意：the other day は「もう一方の日」ではなく「先日」という意味である。

■ 入試での問われ方
①選択問題：I have two cats. One is white and （another / the other） is black. → 2匹のうち残り1匹なので the other。
②並べかえ：「1つは〜、もう1つは…」の型がそのまま出る。
③英作文：「もう一杯」「もう一日」を another で表せるか。

■ each other / one another の使い方
どちらも代名詞なので、主語にはならず目的語の位置に置く。
例）They looked at each other.（彼らは互いに見つめ合った）
× They looked each other.（at が必要）
例）We should understand one another.（互いを理解すべきだ）
所有格は each other's とする。
例）We know each other's names.（私たちは互いの名前を知っている）

★ ポイント：the other day（先日）、every other day（一日おきに）、on the other hand（他方では）は熟語としてそのまま覚える。字面から意味を推測すると外す。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語句を選びなさい。I have two brothers. One lives in Tokyo, and (another / the other) lives in Osaka.',
        wrongAnswer: 'another',
        trapExplanation:
          '「もう1人」という日本語から「もう一つ＝another」と直訳してしまう。another のほうが使い慣れていることも誤りを後押しする。',
        correctAnswer: 'the other',
        correctExplanation:
          '兄弟は2人しかいないので、1人を除いた残りは1人に特定される。特定できる残りには the が必要なので the other が正しい。another は「残りがまだたくさんある中のもう一つ」を表す語なので、3人以上いる場合に使う。「残りが何人か」を数えるのが判断の決め手である。',
        },
      {
        question: '次の英文を日本語にしなさい。I saw him at the station the other day.',
        wrongAnswer: '私はもう一方の日に駅で彼に会った。',
        trapExplanation:
          'the other＝「もう一方の」という訳を機械的に当てはめてしまう。直前で the other の用法を学んだ直後ほど、この誤訳が起きやすい。',
        correctAnswer: '先日、駅で彼に会いました。',
        correctExplanation:
          'the other day は「先日・この間」という意味の熟語で、the other の本来の意味からは離れている。同じく every other day（一日おきに）、on the other hand（他方では）、one after another（次々に）も熟語として覚える必要がある。文中に the other が出たら、まず熟語かどうかを確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s209',
    subject: 'eigo',
    examType: 'koko',
    title: '不定代名詞④：others と the others',
    description: '複数の残りを表す others / the others を、集合の中での位置関係として整理する',
    order: 709,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      '「10人のうち3人は賛成、残りは反対だった」——この「残り」を英語でどう言うか。the others である。一方「賛成する人もいれば反対する人もいる」なら others になる。the が付くかどうかで、残り全部なのか一部なのかが決まる。集合の絵を描いて確かめよう。',
    keyPoints: [
      'others＝「他の人々・他のもの（不特定の一部）」。残り全部ではない。',
      'the others＝「残り全部（特定できる残りの複数）」。',
      'some 〜, others …＝「〜する人もいれば、…する人もいる」。',
      'some 〜, the others …＝「一部は〜、残り全部は…」。',
      'one 〜, the others …＝3つ以上で「1つと残り全部」。',
      'the rest（残り）も同じ意味で使える。動詞は後ろの名詞に合わせる。',
    ],
    sections: [
      {
        heading: '集合の中での位置関係',
        figureId: 'lf_kokoeigoext06_209',
        body: `■ 二つのうち：one 〜, the other …
例）I have two dogs. One is white, and the other is brown.

■ 三つのうち：one 〜, another …, the other …
例）There are three doors. One is open, another is closed, and the other is locked.

■ 三つ以上で「1つと残り全部」：one 〜, the others …
例）There are five students. One is from China, and the others are from Japan.
（生徒が5人いる。1人は中国出身で、残りは全員日本出身だ）

■ 一部と一部：some 〜, others …
全体をきちんと分けきらない言い方。「〜な人もいれば、…な人もいる」。
例）Some like coffee, and others like tea.（コーヒーが好きな人もいれば、紅茶が好きな人もいる）
例）Some people walked, and others took a bus.

■ 一部と残り全部：some 〜, the others …
例）Some of the students went home, but the others stayed at school.
（生徒の一部は帰宅したが、残りは全員学校に残った）

■ the rest（残り）
可算・不可算どちらにも使える。
例）Ten students came. The rest were absent.（10人が来た。残りは欠席だった）
例）I ate half of the cake, and gave the rest to my brother.（ケーキの半分を食べ、残りを弟にあげた）
※ 動詞は the rest の後ろの名詞に合わせる（The rest of the water is 〜／The rest of the books are 〜）。

★ ポイント：the が付けば「残り全部」、付かなければ「他にもある中の一部」。図の目盛りで one・another・the other の位置を確認しよう。`,
      },
      {
        heading: '書きかえと英作文での使い方',
        body: `■ some 〜, others … の書きかえ
例）Some students like math, and others like English.
＝ Some students like math, and other students like English.
others ＝ other + 複数名詞（名詞のくり返しを避けた形）。

■ the others の書きかえ
例）Some of the boys played soccer, and the others played baseball.
＝ ... and the rest of the boys played baseball.

■ 動詞の一致
others / the others は複数扱いなので動詞は複数形。
例）The others are waiting outside.（× The others is）
一方 the other が単数を指すときは単数扱い。
例）The other is waiting outside.

■ 英作文でよく使う型
「〜な人もいれば、…な人もいる」
→ Some people 〜, and others ….
例）Some people like living in the city, and others prefer the countryside.
（都会に住むのが好きな人もいれば、田舎のほうがよいという人もいる）
意見文の書き出しとして非常に使いやすい。

「Aは〜、残りは…」
→ Some of them 〜, and the others ….

⚠ 注意：others と the others は「the の有無」だけの違いなので、和訳で「残りは」とあれば the others、「他の人は」とあれば others と決める。

■ each other との混同に注意
others（他の人々）と each other（互いに）はまったく別語である。
例）We should respect others.（他人を尊重すべきだ）
例）We should respect each other.（互いに尊重し合うべきだ）

★ ポイント：意見を述べる英作文では Some 〜, and others … の型を一つ持っておくと、書き出しで詰まらない。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内から適する語句を選びなさい。There are 20 students in this class. Five are boys, and (others / the others) are girls.',
        wrongAnswer: 'others',
        trapExplanation:
          '「他の生徒は」という日本語から others を選んでしまう。some 〜, others … の型を覚えていると、数がはっきりしていてもその型に当てはめてしまう。',
        correctAnswer: 'the others',
        correctExplanation:
          '全体が20人で5人が男子と決まっているので、残りの15人は特定できる。特定できる残り全部には the が付き the others になる。others だと「（まだ他にもいる中の）別の何人か」という意味になり、全体像が示されているこの文には合わない。「残り全部か、一部か」を確かめるのが決め手である。',
      },
      {
        question: '（　）に適する語を入れなさい。The rest of the students （　） waiting in the gym.',
        wrongAnswer: 'is',
        trapExplanation:
          'The rest が単数の形をしているため、機械的に is を選んでしまう。the number of 〜 が単数扱いになる例を覚えていると、なおさら単数に見えてしまう。',
        correctAnswer: 'are',
        correctExplanation:
          'the rest は後ろに続く名詞に合わせて数が決まる。ここでは of the students と複数名詞が続くので複数扱いになり are が正しい。不可算名詞なら The rest of the water is cold. のように単数扱いになる。some of / all of / most of / half of も同じ規則で、of の後ろの名詞を見て動詞を決める。',
      },
    ],
  },

  {
    id: 'koko_eigo_s210',
    subject: 'eigo',
    examType: 'koko',
    title: '不定代名詞⑤：each と every と all',
    description: '「それぞれ」「どの〜も」「全部」の違いと、動詞が単数になるか複数になるかを整理する',
    order: 710,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      'Every student has a tablet. の has に違和感はないだろうか。「生徒全員」なら複数のはずなのに、動詞は単数形だ。every は全体を見わたしながら「一人ひとりを」数えている語だからである。each・every・all は似ているようで、見ている角度がちがう。角度がわかれば動詞の形も自然に決まる。',
    keyPoints: [
      'each＝「それぞれ（個々に注目）」。each + 単数名詞、動詞も単数。',
      'every＝「どの〜も（全体を見ながら一つずつ）」。every + 単数名詞、動詞も単数。形容詞のみで代名詞にはならない。',
      'all＝「全部」。all + 複数名詞（複数扱い）／all + 不可算名詞（単数扱い）。',
      'each of / all of の後ろには the, my などの限定語が必要。each of them は単数扱い。',
      'every は「〜おきに」の意味でも使う（every three days＝3日おきに）。',
      'not every 〜＝部分否定（すべてが〜とは限らない）。',
    ],
    sections: [
      {
        heading: 'each・every・all の使い分け',
        body: `■ each（それぞれ・各自）
個々に注目する語。後ろは単数名詞、動詞も単数。
例）Each student has a locker.（生徒はそれぞれロッカーを持っている）
例）Each of the boys was given a prize.（少年たちはそれぞれ賞をもらった）
代名詞としても使える。
例）Each of us has a different opinion.（私たちはそれぞれ違う意見を持っている）
文中・文末に置く用法もある。
例）They each have a bike.／They have a bike each.

■ every（どの〜も）
全体を見わたして一つずつ確認するイメージ。後ろは単数名詞、動詞も単数。
例）Every student has to wear a uniform.（どの生徒も制服を着なければならない）
例）Every room in this hotel has a bath.（このホテルのどの部屋にも風呂がある）
⚠ 注意：every は形容詞だけで、代名詞としては使えない。× Every of them　○ Each of them／All of them
※ everyone / everybody / everything は代名詞で、いずれも単数扱い。
例）Everyone in the class was surprised.（クラスの全員が驚いた）

■ all（全部）
複数名詞なら複数扱い、不可算名詞なら単数扱い。
例）All the students were present.（生徒全員が出席していた）
例）All the water was gone.（水は全部なくなっていた）
例）All of my friends live near here.（友達はみんなこの近くに住んでいる）

■ 三つの比較（3人に賞をあげる場面）
each：一人ひとりに個別に注目している
every：3人とも例外なく、という全体の確認
all：3人をひとまとまりとして見ている

★ ポイント：「each・every は単数、all は後ろの名詞しだい」。動詞の形を問う問題はこの一行で解ける。`,
      },
      {
        heading: 'every の応用と部分否定',
        body: `■ every + 数詞 + 複数名詞（〜おきに・〜ごとに）
例）The bus comes every ten minutes.（バスは10分ごとに来る）
例）We have a meeting every three days.（3日おきに会議がある）
※ every other day（一日おきに）＝every two days

■ every day / everyday の区別
every day（2語）＝毎日（副詞）
everyday（1語）＝日常の（形容詞）
例）I study English every day.（毎日英語を勉強する）
例）This is an everyday problem.（これは日常的な問題だ）
⚠ 注意：つづりを1語にするか2語にするかで品詞が変わる。英作文の減点ポイント。

■ 部分否定と全体否定
not + every / all ＝ 部分否定「すべてが〜とは限らない」
例）Not every student likes math.（すべての生徒が数学を好きなわけではない）
例）I don't know all of them.（彼ら全員を知っているわけではない）
no / none ＝ 全体否定「一人も〜ない」
例）No student likes math.（数学が好きな生徒は一人もいない）
例）None of them came.（彼らの誰も来なかった）
※ none of + 複数名詞は単数・複数どちらの扱いも可能だが、書き言葉では単数扱いが正式。

■ everyone / everybody / everything の受け方
形は単数だが、代名詞で受けるときは they / their を使うのがふつう。
例）Everyone should do their best.（みんなが最善を尽くすべきだ）
例）Everybody was quiet, weren't they?（付加疑問では they を使う）

★ ポイント：not every / not all を見たら「部分否定」と反応する。「全部が〜ではない」と訳すことで得点になる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に適する語を入れなさい。Each of the students （　） a different opinion about the plan.',
        wrongAnswer: 'have',
        trapExplanation:
          '直前に the students という複数名詞があるため、それに合わせて have を選んでしまう。「生徒たちはそれぞれ意見を持っている」という日本語訳からも複数に感じられる。',
        correctAnswer: 'has',
        correctExplanation:
          '主語の中心は Each（それぞれ一人）で、of the students はその範囲を示しているにすぎない。each は個々に注目する語なので必ず単数扱いになり、動詞は has が正しい。同じく Every student has 〜 / Each student has 〜 も単数である。一方 All of the students have 〜 は複数扱いになる。',
      },
      {
        question: '次の英文を日本語にしなさい。Not all the students passed the exam.',
        wrongAnswer: '生徒は誰も試験に合格しなかった。',
        trapExplanation:
          '文頭の Not を見て全体を否定していると考え、「まったく〜ない」と訳してしまう。日本語では「全員が合格しなかった」という言い方が全体否定にも部分否定にも取れることが混乱のもとである。',
        correctAnswer: '生徒の全員が試験に合格したわけではない（合格しなかった生徒もいる）。',
        correctExplanation:
          'not + all / every / both は「すべてが〜とは限らない」という部分否定になる。全員が不合格なら No students passed the exam. または None of the students passed the exam. と表す。部分否定は和訳問題で頻出で、「〜とは限らない」「〜わけではない」と訳せば得点になる。',
      },
    ],
  },
  {
    id: 'koko_eigo_s211',
    subject: 'eigo',
    examType: 'koko',
    title: '不定代名詞⑥：both・either・neither・none',
    description: '「二つとも」「どちらか」「どちらも〜ない」を、数の扱いと否定の作り方まで含めて整理する',
    order: 711,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      '「どちらも好きではない」を英語にするとき、I don\'t like both. と書くと「両方とも好きというわけではない」という別の意味になってしまう。both を否定すると部分否定になるからだ。二つのものを扱う語には、否定と組んだときに意味が反転する落とし穴がある。ここを正確に押さえよう。',
    keyPoints: [
      'both＝二つとも。複数扱い（Both of them are kind.）。',
      'either＝二つのうちどちらか一方。単数扱い（Either of them is fine.）。',
      'neither＝二つとも〜ない。単数扱いで、それ自体が否定（Neither of them is right.）。',
      'none＝三つ以上のどれも〜ない。書き言葉では単数扱いが正式。',
      'not both＝部分否定（両方とも〜というわけではない）。全体否定は neither。',
      'both A and B は複数扱い、either A or B / neither A nor B は B に動詞を合わせる。',
    ],
    sections: [
      {
        heading: 'both・either・neither の使い分け',
        body: `■ both（二つとも）
複数扱い。both + 複数名詞、both of + 限定語 + 複数名詞。
例）Both books are interesting.（両方の本ともおもしろい）
例）Both of my parents are teachers.（両親とも教師だ）
例）I know both of them.（二人とも知っている）
※ both the books / both my parents のように、the や my の前に置く。

■ either（どちらか一方）
単数扱い。
例）Either day is fine with me.（どちらの日でも大丈夫です）
例）Either of the answers is correct.（どちらの答えも正しい）
例）You can take either of these two pens.（この2本のペンのどちらでも取ってよい）
※ 否定文では either が「どちらも〜ない」の意味になる。
例）I don't like either of them.（どちらも好きではない）

■ neither（どちらも〜ない）
それ自体が否定なので、動詞は肯定形のまま。単数扱い。
例）Neither of them is right.（どちらも正しくない）
例）Neither answer was correct.（どちらの答えも正しくなかった）
＝ Both answers were wrong.
⚠ 注意：× Neither of them isn't right. のように否定を重ねない。

■ none（三つ以上のどれも〜ない）
例）None of the students knew the answer.（生徒の誰もその答えを知らなかった）
例）I have none.（一つも持っていない）
※ 二つなら neither、三つ以上なら none と使い分ける。

★ ポイント：「both＝2つとも（複数）／either＝どちらか（単数）／neither＝どちらも〜ない（単数）／none＝3つ以上どれも〜ない」。数の扱いまでセットで覚える。`,
      },
      {
        heading: '否定との組み合わせと相関表現',
        body: `■ not + both ＝ 部分否定
例）I don't know both of them.（二人とも知っているわけではない＝一人は知っている）
例）Both of the answers are not correct.（両方とも正しいわけではない）
「二つとも〜ない」と言いたいときは neither を使う。
例）I know neither of them.（二人とも知らない）
＝ I don't know either of them.

■ 全体否定と部分否定の対応
部分否定：not both / not all / not every / not always
例）He is not always kind.（彼はいつも親切とは限らない）
全体否定：neither / none / no / never
例）He is never kind.（彼は決して親切ではない）

■ 相関表現と動詞の一致
both A and B → 複数扱い
例）Both Tom and Ken are my friends.
either A or B → B に合わせる
例）Either you or he is wrong.（あなたか彼のどちらかがまちがっている）
neither A nor B → B に合わせる
例）Neither you nor I am to blame.（あなたも私も悪くない）
not only A but also B → B に合わせる
例）Not only you but also Tom has to go.（あなただけでなくトムも行かなければならない）
※ 「動詞は近いほうの主語に合わせる」というのが共通の規則である（both A and B だけは例外で常に複数）。

■ so / neither を使った同意の言い方
例）"I like sushi." "So do I."（「すしが好きだ」「私も」）
例）"I don't like natto." "Neither do I."（「納豆は好きじゃない」「私も」）
肯定に同意するなら So + 動詞 + 主語、否定に同意するなら Neither + 動詞 + 主語。倒置になる点に注意する。

★ ポイント：either A or B / neither A nor B の動詞は「B に合わせる」。ここが記述・選択の両方で問われる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はその2冊の本のどちらも読んだことがない。」を英語にしなさい。',
        wrongAnswer: 'I haven\'t read both of the two books.',
        trapExplanation:
          '「どちらも〜ない」を「both（両方）＋否定」と組み立ててしまう。日本語の「両方とも読んでいない」がそのまま not both に見えることが原因である。',
        correctAnswer: 'I haven\'t read either of the two books.（＝I have read neither of the two books.）',
        correctExplanation:
          'not + both は「両方とも〜というわけではない」という部分否定になり、片方は読んだという意味になってしまう。「二つとも〜ない」という全体否定は not 〜 either または neither で表す。同じく not all / not every も部分否定なので、全体否定には no / none / never を使う。',
      },
      {
        question: '（　）に適する語を入れなさい。Neither Tom nor his brothers （　） going to the party.',
        wrongAnswer: 'is',
        trapExplanation:
          'neither は単数扱いという規則だけを覚えていると、後ろの主語を見ずに is を選んでしまう。Neither of them is 〜 の形が強く印象に残っていることも原因である。',
        correctAnswer: 'are',
        correctExplanation:
          'neither A nor B の形では、動詞は B（近いほうの主語）に合わせる。ここでは his brothers が複数なので are が正しい。Either you or he is wrong. のように B が単数なら単数になる。単数扱いになるのは Neither of them is 〜 のように neither of + 名詞が主語のときで、二つの形を区別することが大切である。',
      },
    ],
  },

  // ─────────── 8. 形容詞の用法と語順（s212〜s215 / order 712〜715） ───────────
  {
    id: 'koko_eigo_s212',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞①：限定用法と叙述用法',
    description: '名詞の前に置く用法と、be動詞の後ろに置く用法の二つを区別し、それぞれの働きをつかむ',
    order: 712,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      'a kind girl と The girl is kind. は、どちらも「親切な少女」の話をしている。しかし前者は「どの少女か」を絞りこみ、後者は「その少女がどうであるか」を説明している。同じ形容詞でも、置く場所によって仕事が変わるのだ。この二つの用法を意識すると、英作文で語順に迷わなくなる。',
    keyPoints: [
      '限定用法＝名詞の前に置いて「どんな〜か」を限定する（a tall boy）。',
      '叙述用法＝be動詞などの後ろに置いて主語を説明する（The boy is tall）。',
      '第5文型の補語になる叙述用法もある（The news made me happy）。',
      '形容詞が2語以上のかたまりになると、名詞の後ろに置く（a boy tall enough to reach it）。',
      '-thing / -one / -body で終わる代名詞は、形容詞を後ろに置く（something cold）。',
      '同じ形容詞でも用法によって意味が変わることがある（a certain person／It is certain）。',
    ],
    sections: [
      {
        heading: '二つの用法',
        body: `■ 限定用法（名詞を直接修飾する）
名詞の前に置いて「どんな〜か」を示す。
例）a tall boy（背の高い少年）
例）an interesting book（おもしろい本）
例）my new bike（私の新しい自転車）
形容詞を並べるときは、限定語（a/the/my）→ 形容詞 → 名詞の順になる。

■ 叙述用法（主語や目的語を説明する）
①be動詞などの後ろ（第2文型の補語）
例）The boy is tall.（その少年は背が高い）
例）She looks happy.（彼女はうれしそうだ）
例）The soup tastes good.（そのスープはおいしい）
※ look, seem, feel, sound, taste, smell, become, get, turn なども補語をとる。
②第5文型の補語
例）The news made me happy.（その知らせは私を幸せにした）
例）Please keep the room clean.（部屋をきれいにしておいてください）
例）I found the book difficult.（その本は難しいとわかった）

■ 二つの用法の違い
限定用法：どの名詞かを絞りこむ（情報を足して範囲をせばめる）
叙述用法：主語や目的語について述べる（文の内容そのものになる）
例）I bought an expensive camera.（限定：高価なカメラを買った）
例）This camera is expensive.（叙述：このカメラは高価だ）

★ ポイント：限定用法は名詞のかたまりの一部、叙述用法は文の骨組みの一部。この違いを意識すると、be動詞を落とすミスが減る。
× The boy tall.（叙述用法なのに be動詞がない）
○ The boy is tall.`,
      },
      {
        heading: '形容詞が名詞の後ろに来る場合',
        body: `形容詞は名詞の前に置くのが原則だが、後ろに置く場合が三つある。

■ ①形容詞が2語以上のかたまりになるとき
修飾語句が付いて長くなると、名詞の後ろに回る。
例）a boy tall enough to reach the shelf（棚に届くほど背の高い少年）
例）a bag full of books（本でいっぱいのかばん）
例）a country famous for its cheese（チーズで有名な国）
例）the students present at the meeting（会議に出席している生徒たち）

■ ②-thing / -one / -body で終わる代名詞を修飾するとき
例）something cold（何か冷たいもの）
例）nothing special（特別なことは何もない）
例）someone kind（誰か親切な人）
例）anything interesting（何かおもしろいこと）
例）I want something hot to drink.（何か温かい飲み物がほしい）
※ 語順は「-thing + 形容詞 + to 不定詞」になる。

■ ③慣用的に後ろに置くもの
例）something new／the only person alive（生きている唯一の人）／Asia Minor
また -able / -ible で終わる形容詞は、最上級や all などと組むと後ろに置くことがある。
例）the best method available（利用できる最善の方法）

■ 用法によって意味が変わる形容詞
present：限定＝現在の（the present situation）／叙述＝出席して（He was present.）
certain：限定＝ある（a certain man）／叙述＝確信して（I am certain.）
late：限定＝故〜（the late Mr. Smith）／叙述＝遅れて（He was late.）
例）All the students present agreed.（出席していた生徒全員が賛成した）

★ ポイント：後置修飾のうち、入試でいちばん問われるのは②の -thing 型である。並べかえ問題では必ず「-thing → 形容詞 → to 不定詞」の順で組む。`,
      },
    ],
    trapExamples: [
      {
        question: '「何か冷たい飲み物がほしい。」を英語にしなさい。',
        wrongAnswer: 'I want cold something to drink.',
        trapExplanation:
          '「形容詞は名詞の前」という原則を守ろうとして、something の前に cold を置いてしまう。日本語の「冷たい何か」という語順もこの誤りを後押しする。',
        correctAnswer: 'I want something cold to drink.',
        correctExplanation:
          '-thing / -one / -body で終わる代名詞を修飾する形容詞は、必ず後ろに置く。さらに to 不定詞が続く場合は「something + 形容詞 + to 不定詞」の順になる。同じく nothing special（特別なことは何もない）、someone kind（誰か親切な人）、anything interesting も同じ並びである。',
      },
      {
        question: '次の英文を日本語にしなさい。All the students present at the meeting agreed with the plan.',
        wrongAnswer: '会議での現在の生徒たちは全員その計画に賛成した。',
        trapExplanation:
          'present を「現在の」という限定用法の意味で訳してしまう。the present situation のような言い方に慣れていると、位置を確認せずに意味を決めてしまう。',
        correctAnswer: '会議に出席していた生徒は全員その計画に賛成した。',
        correctExplanation:
          'present が名詞の前にあれば「現在の」、名詞の後ろや be動詞の後ろにあれば「出席して」という意味になる。ここでは students の後ろにあるので「出席していた」と訳す。同じく certain（限定＝ある／叙述＝確信して）、late（限定＝故〜／叙述＝遅れて）も位置で意味が変わるので、置かれた場所を必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s213',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞②：形容詞を並べる順序',
    description: '複数の形容詞が名詞に付くときの語順を、意味のグループの並びとして覚える',
    order: 713,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '「小さくて古い日本の人形」を英語にするとき、small・old・Japanese をどの順に並べるだろうか。実は英語話者は無意識のうちに決まった順序で並べていて、順序を変えると強い違和感が出る。並べ方には「主観から客観へ」という一本の筋がある。その筋を知れば、暗記量はぐっと減る。',
    keyPoints: [
      '語順の原則は「主観 → 客観」。話し手の意見が先、動かせない性質が後。',
      '順序：評価 → 大きさ → 新旧 → 形 → 色 → 出身 → 材料 → 名詞。',
      '例）a beautiful small old Japanese doll（美しくて小さな古い日本人形）。',
      '数を表す語（three, many）は他の形容詞より前に置く。',
      '限定語（a/the/my/this）は必ずいちばん前。all/both/half はさらにその前。',
      '実際には3語以上並ぶことはまれ。2語の順序を正しく選べれば十分。',
    ],
    sections: [
      {
        heading: '形容詞を並べる順序',
        figureId: 'lf_kokoeigoext06_213',
        body: `■ 基本の並び
限定語 → 数量 → 評価 → 大きさ → 新旧 → 形 → 色 → 出身 → 材料 → 名詞

①評価・主観（nice, beautiful, interesting, delicious）
②大きさ（big, small, large, long, short）
③新旧・年齢（new, old, young, ancient）
④形（round, square, flat）
⑤色（red, black, white, blue）
⑥出身・国（Japanese, American, French）
⑦材料（wooden, plastic, paper, silk, stone）

■ 例
例）a beautiful small old Japanese doll（美しくて小さな古い日本人形）
例）a big round wooden table（大きくて丸い木のテーブル）
例）an interesting new American movie（おもしろい新しいアメリカ映画）
例）two large black plastic bags（2枚の大きな黒いビニール袋）

■ なぜこの順になるのか
名詞に近いほど「その物と切りはなせない性質」が来る。木でできたテーブルの「木」は変えられないが、「大きい」は見る人によって変わる。主観的な語ほど名詞から遠ざかる、という理屈である。

■ 数量は前
例）three small dogs（3匹の小さな犬）
例）many old buildings（多くの古い建物）
※ 数量を表す語は評価より前に置く。

■ and でつなぐ場合
同じグループの形容詞を並べるときは and を使う。
例）a black and white cat（白黒のネコ）
例）She is kind and honest.（叙述用法では and が必要）
× She is kind honest.

★ ポイント：3語以上並ぶ場面は実際にはまれである。入試で問われるのは2語の順序なので、「主観が先・材料や国は名詞の直前」の二点だけ押さえれば十分に戦える。図の目盛りで並び順を確認しよう。`,
      },
      {
        heading: '限定語との並びと、注意すべき形',
        body: `■ 限定語はいちばん前
a / an / the / my / your / this / that / some などは、必ず形容詞より前に置く。
例）my new red bike（× new my red bike）
例）these two big rooms

■ all / both / half はさらに外側
例）all the young students（若い生徒全員）
例）both my old friends（私の古い友人二人とも）

■ so / such / too / how が入るときの位置
例）such a beautiful flower（such は a より前）
例）so beautiful a flower（so は a より前、形容詞の後ろに a）
例）too small a room（小さすぎる部屋）
※ 前のセッションの「冠詞と語順」で扱った型と同じ。

■ 分詞が形容詞として使われる場合も同じ順序
例）a beautiful sleeping baby（美しく眠っている赤ちゃん）
例）an exciting new game（わくわくする新しいゲーム）

■ 名詞が形容詞のように働く場合は名詞の直前
例）a new school building（新しい校舎）※ school building で一つのかたまり
例）a small coffee cup（小さなコーヒーカップ）
名詞＋名詞のかたまりは分けられないので、形容詞はその前に置く。

⚠ 注意：日本語の語順をそのまま英語にすると誤ることが多い。「日本の古い小さな人形」を Japanese old small doll とすると不自然で、a small old Japanese doll が正しい。訳すときは日本語の順、書くときは英語の順と切りかえる。

★ ポイント：英作文では形容詞を2語までに抑えると安全である。3語以上使いたいときは、one of which や関係代名詞に分けて書くほうがミスが少ない。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい順に並べかえなさい。She bought ( Japanese / a / old / beautiful ) doll.',
        wrongAnswer: 'She bought a Japanese old beautiful doll.',
        trapExplanation:
          '日本語の「日本の古くて美しい人形」という語順をそのまま英語に移してしまう。日本語では出身を先に言うことが多いため、英語の順序と逆になる。',
        correctAnswer: 'She bought a beautiful old Japanese doll.',
        correctExplanation:
          '英語の形容詞は「主観 → 客観」の順に並べる。評価（beautiful）→ 新旧（old）→ 出身（Japanese）→ 名詞（doll）となり、名詞に近いほど変えられない性質が来る。冠詞 a は必ずいちばん前に置く。日本語の語順をそのまま移さないことが、この形の最大の注意点である。',
      },
      {
        question: '誤りを直しなさい。My father gave me new a watch for my birthday.',
        wrongAnswer: 'My father gave me new a watch for my birthday.（語順は自由だと判断する）',
        trapExplanation:
          '形容詞と冠詞をひとかたまりとして意識していないため、順序を入れかえても通じると考えてしまう。日本語では「新しい時計を」と言うので、a の位置が意識に上らない。',
        correctAnswer: 'My father gave me a new watch for my birthday.',
        correctExplanation:
          '冠詞・所有格・指示語などの限定語は、形容詞より必ず前に置く。したがって a new watch が正しい語順である。my new watch, this new watch も同じ並びになる。例外は so / too / how が入るときで、so new a watch のように形容詞の後ろに a が来る。',
      },
    ],
  },

  {
    id: 'koko_eigo_s214',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞③：使える位置が決まっている形容詞と分詞形容詞',
    description: 'asleep・alone など叙述専用の形容詞と、-ing／-ed で意味が分かれる分詞形容詞を区別する',
    order: 714,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '「眠っている赤ちゃん」を an asleep baby と書くと誤りになる。asleep は名詞の前に置けない形容詞だからだ。逆に main は名詞の前にしか置けない。さらに interesting と interested のように、形が似ていて意味が正反対になる組もある。まぎらわしい形容詞をここで一気に整理しよう。',
    keyPoints: [
      'a- で始まる形容詞は叙述用法のみ：asleep, awake, alive, alone, afraid, ashamed, aware。',
      '名詞の前に置きたいときは別語に言いかえる（asleep → sleeping, alive → living, afraid → frightened）。',
      '限定用法のみの形容詞：only, main, elder, former, latter, wooden, golden, upper, daily。',
      '-ing の分詞形容詞＝「（相手を）〜させる」（interesting＝おもしろい）。',
      '-ed の分詞形容詞＝「（自分が）〜させられた」（interested＝興味をもった）。',
      '人には -ed、物・事には -ing が付くことが多いが、人が主語でも -ing になる場合がある。',
    ],
    sections: [
      {
        heading: '位置が決まっている形容詞',
        body: `■ 叙述用法だけの形容詞（名詞の前に置けない）
a- で始まる語が中心。
asleep（眠って）／awake（目が覚めて）／alive（生きて）／alone（ひとりで）／afraid（恐れて）／ashamed（恥じて）／aware（気づいて）／alike（似て）／ill（病気で。イギリス英語）
例）The baby is asleep.（赤ちゃんは眠っている）
× an asleep baby → ○ a sleeping baby
例）He is still alive.（彼はまだ生きている）
× an alive fish → ○ a living fish
例）I am afraid of dogs.（犬が怖い）
× an afraid boy → ○ a frightened boy

■ 言いかえの対応
asleep → sleeping／alive → living／afraid → frightened／alone → lonely（意味は「孤独な」に変わる）／ill → sick
例）Don't wake the sleeping baby.（眠っている赤ちゃんを起こさないで）
例）There are many living things in the sea.（海には多くの生き物がいる）

■ 限定用法だけの形容詞（be動詞の後ろに置けない）
only（唯一の）／main（主な）／elder（年上の）／former（前の）／latter（後の）／wooden（木製の）／golden（金の）／upper（上の）／daily（毎日の）／very（まさにその）
例）He is the only child in the family.（彼はその家のひとりっ子だ）
× The child is only.
例）What is the main reason?（主な理由は何ですか）
例）my elder brother（兄）※ He is elder. とは言えず、He is older. とする。

★ ポイント：a- で始まる形容詞を見たら「be動詞の後ろ専用」と反応する。名詞の前に置きたいときは -ing 形などに言いかえる。`,
      },
      {
        heading: '-ing と -ed の分詞形容詞',
        body: `動詞から作られた形容詞は、-ing と -ed で意味が逆になる。

■ -ing ＝「（他者を）〜させる」性質
interesting（おもしろい）／exciting（わくわくさせる）／surprising（驚くべき）／boring（退屈な）／tiring（疲れさせる）／shocking（衝撃的な）／amazing（驚くべき）／confusing（混乱させる）／disappointing（がっかりさせる）
例）The movie was interesting.（その映画はおもしろかった）
例）It was a tiring trip.（疲れる旅行だった）

■ -ed ＝「（自分が）〜させられた」状態
interested（興味をもった）／excited（わくわくした）／surprised（驚いた）／bored（退屈した）／tired（疲れた）／shocked（衝撃を受けた）／amazed（驚いた）／confused（混乱した）／disappointed（がっかりした）
例）I was interested in the movie.（その映画に興味をもった）
例）I was tired after the trip.（旅行のあと疲れていた）

■ 判断のしかた
「その人・物が周りにどう働きかけるか」→ -ing
「その人がどう感じたか」→ -ed
例）The news was surprising.（その知らせは驚くべきものだった）
例）I was surprised at the news.（私はその知らせに驚いた）
⚠ 注意：人が主語でも -ing になることがある。
例）He is boring.（彼は退屈な人だ＝周りを退屈させる）
例）He is bored.（彼は退屈している）
意味がまったく違うので注意する。

■ よく使う前置詞とのセット
be interested in 〜／be excited about 〜／be surprised at 〜／be tired of 〜（〜にあきる）／be tired from 〜（〜で疲れる）／be satisfied with 〜／be pleased with 〜／be disappointed at 〜
例）She is satisfied with her new job.（彼女は新しい仕事に満足している）

★ ポイント：-ed の形は「感情を受けた側」。日本語で「〜している」と訳せても、感情なら -ed になることが多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「眠っている赤ちゃんを起こさないでください。」を英語にしなさい。',
        wrongAnswer: 'Please don\'t wake the asleep baby.',
        trapExplanation:
          'asleep＝「眠っている」と覚えているため、そのまま名詞の前に置いてしまう。日本語では「眠っている赤ちゃん」と名詞の前に置くので、語順の違いに気づきにくい。',
        correctAnswer: 'Please don\'t wake the sleeping baby.',
        correctExplanation:
          'asleep は叙述用法だけの形容詞で、be動詞の後ろにしか置けない（The baby is asleep.）。名詞を前から修飾したいときは sleeping に言いかえる。同じく alive → living、afraid → frightened のように言いかえる。a- で始まる形容詞（asleep, awake, alive, alone, afraid）はすべてこの仲間である。',
      },
      {
        question: '（　）内から適する語を選びなさい。The students were (boring / bored) during the long speech.',
        wrongAnswer: 'boring',
        trapExplanation:
          '「退屈だった」という日本語から boring を選んでしまう。-ing のほうが「〜な」という形容詞らしく感じられることも誤りの原因である。',
        correctAnswer: 'bored',
        correctExplanation:
          '退屈させられているのは生徒のほうなので、感情を受けた側を表す -ed の bored を使う。boring にすると「生徒たちが（周りを）退屈させる人だった」という意味になってしまう。The speech was boring.（その演説は退屈だった）と対にして覚えるとよい。interested/interesting、excited/exciting、tired/tiring も同じ考え方である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s215',
    subject: 'eigo',
    examType: 'koko',
    title: '形容詞④：-thing 型の後置修飾と数量形容詞の総整理',
    description: 'something 型の語順と、数量を表す形容詞の使い分けを実戦形式で仕上げる',
    order: 715,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      'something cold to drink という並びは、日本語の「何か冷たい飲み物」とちょうど逆に見える。だが英語の側から見れば、「まず何かがあって、それが冷たくて、飲むためのものだ」と情報を後ろに足しているだけだ。英語は後ろへ後ろへ説明を足す言語——この感覚は関係代名詞にもつながる。',
    keyPoints: [
      '-thing / -one / -body + 形容詞 + to 不定詞、の順に後ろへ足していく。',
      'something cold to drink（何か冷たい飲み物）／nothing special（特に何もない）。',
      '数量形容詞：many/much、a few/a little、few/little、a lot of、plenty of。',
      'enough は名詞の前（enough money）、形容詞・副詞の後ろ（old enough）。',
      'very と much の使い分け：very + 原級、much + 比較級・過去分詞。',
      '後ろから説明を足す発想は、to 不定詞・分詞・関係代名詞に共通する英語の骨格。',
    ],
    sections: [
      {
        heading: '-thing 型の語順',
        figureId: 'lf_kokoeigoext06_215',
        body: `■ 基本の並び
-thing / -one / -body + 形容詞 + to 不定詞
例）something cold to drink（何か冷たい飲み物）
例）something interesting to read（何かおもしろい読み物）
例）someone kind to help us（誰か私たちを助けてくれる親切な人）
例）nothing special to do（特にすることは何もない）
例）anything else to say（他に言うことは何か）

■ 実際の文で
例）I want something hot to eat.（何か温かい食べ物がほしい）
例）Is there anything new in today's paper?（今日の新聞に何か新しいことはありますか）
例）There was nothing wrong with the machine.（その機械には何も問題がなかった）
例）Would you like something to drink?（何かお飲み物はいかがですか）

■ else の位置
else（他の）は形容詞よりさらに後ろに置く。
例）Do you have anything else?（他に何かありますか）
例）Is there anyone else who can help?（他に手伝える人はいますか）

■ なぜ後ろに置くのか
something は「何か」としか言っていない中身のない語で、後ろから順に情報を足していく。「何か → 冷たい → 飲むための」と説明が積み上がる構造である。この「後ろに足す」感覚は、to 不定詞の形容詞的用法（a book to read）、分詞（the boy running there）、関係代名詞（the book that I bought）とまったく同じである。

★ ポイント：並べかえ問題では「-thing → 形容詞 → else → to 不定詞」の順に機械的に組む。図の目盛りで順序を確認しよう。`,
      },
      {
        heading: '数量形容詞と enough・very／much',
        body: `■ 数量形容詞のまとめ（復習）
可算：many／a few（少しある）／few（ほとんどない）／a number of
不可算：much／a little（少しある）／little（ほとんどない）／a great deal of
両方：a lot of／lots of／plenty of／some／any／no／most
例）There are only a few seats left.（残っている席はわずかだ）
例）We have plenty of time.（時間はたっぷりある）

■ enough の位置
名詞を修飾するとき → 名詞の前
例）I have enough money to buy it.（それを買うのに十分なお金がある）
形容詞・副詞を修飾するとき → その後ろ
例）He is old enough to drive.（彼は運転できる年齢だ）
例）She ran fast enough to win.（彼女は勝てるほど速く走った）
⚠ 注意：× enough old、× enough fast は誤り。形容詞・副詞の後ろに置くのは英語では珍しい形なので、意識して覚える。

■ very と much
very ＋ 原級の形容詞・副詞
例）very kind／very fast／very interesting
much ＋ 比較級・最上級・過去分詞
例）much better／much more interesting／much surprised
例）This book is much more interesting than that one.（この本はあの本よりずっとおもしろい）
⚠ 注意：× very better は誤り。比較級を強めるのは much, far, a lot, even である。

■ 分詞形容詞をどう強めるか
形容詞として定着した過去分詞は very で強める。
例）I was very tired.／I was very interested in it.
動詞の受け身としての意味が強いときは much を使う。
例）He was much surprised at the news.（やや古い言い方。very surprised も可）

★ ポイント：enough だけが「形容詞・副詞の後ろ」に置かれる特別な語。並べかえ問題で確実に問われるので、位置を丸ごと覚えること。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語を正しい順に並べかえなさい。Is there ( to / anything / cold / drink ) in the fridge?',
        wrongAnswer: 'Is there cold anything to drink in the fridge?',
        trapExplanation:
          '「何か冷たい飲み物」という日本語の語順のまま、形容詞を anything の前に置いてしまう。形容詞は名詞の前という原則に引きずられた誤りでもある。',
        correctAnswer: 'Is there anything cold to drink in the fridge?',
        correctExplanation:
          '-thing / -one / -body で終わる代名詞は、形容詞を後ろに置く。さらに to 不定詞が続くときは「-thing → 形容詞 → to 不定詞」の順になる。something cold to drink, nothing special to do, someone kind to help us もすべて同じ並びである。else が入るときは anything else to say のように形容詞よりさらに後ろに置く。',
      },
      {
        question: '「彼は一人で旅行できる年齢だ。」を英語にしなさい。',
        wrongAnswer: 'He is enough old to travel alone.',
        trapExplanation:
          'enough を「十分な」という形容詞のように考え、修飾する語の前に置いてしまう。enough money のように名詞の前に置く用法を覚えていると、なおさら前に置きたくなる。',
        correctAnswer: 'He is old enough to travel alone.',
        correctExplanation:
          'enough は名詞を修飾するときは前（enough money, enough time）だが、形容詞や副詞を修飾するときは必ずその後ろに置く。old enough, fast enough, well enough が正しい形である。「〜するのに十分…だ」という意味では「形容詞・副詞 + enough + to 不定詞」の型で覚えるとよい。',
      },
    ],
  },

  // ─────────── 9. 副詞の位置と頻度の副詞（s216〜s220 / order 716〜720） ───────────
  {
    id: 'koko_eigo_s216',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞①：副詞の働きと基本の位置',
    description: '副詞が何を修飾するのかを整理し、置く位置によって意味が変わる例まで確認する',
    order: 716,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      'Only I ate the cake. と I ate only the cake. は、単語も語順もほぼ同じなのに意味が違う。前者は「私だけが食べた」、後者は「ケーキだけを食べた」。副詞は置かれた場所のすぐ隣を修飾するからだ。副詞の位置は、文の意味を決めるハンドルのようなものである。',
    keyPoints: [
      '副詞は動詞・形容詞・他の副詞・文全体を修飾する。名詞は修飾しない。',
      '動詞を修飾する副詞は原則として文末（He runs fast.）。',
      '形容詞・副詞を修飾する副詞はその直前（very kind, very well）。',
      '文全体を修飾する副詞は文頭が多い（Fortunately, he passed.）。',
      'only, even, also は修飾する語の直前に置く。位置で意味が変わる。',
      '形容詞に -ly を付けて副詞を作るのが基本（careful → carefully）。',
    ],
    sections: [
      {
        heading: '副詞は何を修飾するか',
        body: `■ ①動詞を修飾（もっとも多い）
例）He runs fast.（彼は速く走る）
例）She sings beautifully.（彼女は美しく歌う）
例）Please speak slowly.（ゆっくり話してください）
原則として動詞の後ろ、目的語があればその後ろに置く。
例）He speaks English well.（× He speaks well English.）
⚠ 注意：動詞と目的語の間に副詞を割りこませないこと。これは日本人がもっとも多く犯す語順ミスである。

■ ②形容詞を修飾
例）very kind（とても親切な）
例）really beautiful（本当に美しい）
例）too small（小さすぎる）
形容詞の直前に置く。

■ ③他の副詞を修飾
例）very well（とてもよく）
例）quite often（かなりよく）
例）much faster（ずっと速く）

■ ④文全体を修飾
例）Fortunately, he passed the exam.（幸運にも彼は試験に合格した）
例）Certainly, this is the best way.（確かに、これが最善の方法だ）
例）Perhaps she is right.（おそらく彼女は正しい）
文頭に置いてコンマで区切ることが多い。

■ 副詞の作り方
形容詞 + -ly：careful → carefully／quick → quickly／easy → easily（y→i）／true → truly（e が落ちる）／gentle → gently（le → ly）
例）He answered the question easily.（彼はその質問に簡単に答えた）
⚠ 注意：friendly, lovely, lonely, likely は -ly で終わるが形容詞である。
例）She is a friendly person.（× She smiled friendly.）

★ ポイント：副詞が修飾しないものは「名詞」だけである。名詞を修飾するのは形容詞と覚えておけば、品詞の判別問題で迷わない。`,
      },
      {
        heading: '位置で意味が変わる副詞',
        body: `■ only の位置
only は直後の語を限定するので、置く場所で意味が変わる。
例）Only I ate the cake yesterday.（昨日ケーキを食べたのは私だけだ）
例）I only ate the cake yesterday.（昨日はケーキを食べただけだ＝他のことはしていない）
例）I ate only the cake yesterday.（昨日食べたのはケーキだけだ）
例）I ate the cake only yesterday.（ケーキを食べたのは昨日だけだ）
和訳問題では、only がどの語の前にあるかを必ず確認する。

■ even の位置
例）Even Tom knows the answer.（トムでさえ答えを知っている）
例）Tom even knows the answer.（トムは答えさえ知っている）

■ also の位置
一般動詞の前、be動詞・助動詞の後ろに置く。
例）He also plays the guitar.（彼はギターも弾く）
例）He is also a good singer.（彼はよい歌手でもある）
例）She can also speak French.（彼女はフランス語も話せる）

■ enough の位置（復習）
形容詞・副詞の後ろに置く。
例）He is tall enough to reach the shelf.

■ 副詞を文頭に出して強調する
例）Suddenly the door opened.（突然ドアが開いた）
例）Never have I seen such a beautiful sight.（あんなに美しい光景は見たことがない）
※ never, little, hardly などの否定の副詞を文頭に出すと、疑問文と同じ語順（倒置）になる。

★ ポイント：only と even は「すぐ右の語を修飾する」。並べかえや和訳では、この位置関係を第一に確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は英語をとても上手に話す。」を英語にしなさい。',
        wrongAnswer: 'He speaks very well English.',
        trapExplanation:
          '日本語の「英語をとても上手に話す」という語順をそのまま英語に移してしまう。日本語では副詞句が動詞の直前に来るので、英語でも動詞の直後に置きたくなる。',
        correctAnswer: 'He speaks English very well.',
        correctExplanation:
          '動詞を修飾する副詞は、目的語がある場合その後ろに置く。動詞と目的語の間に割りこませてはいけない。同じく She plays the piano well.（× plays well the piano）、I like this song very much.（× like very much this song）となる。「動詞 → 目的語 → 副詞」の順を型として覚える。',
      },
      {
        question: '次の二文の意味の違いを説明しなさい。(a) Only Tom answered the question. (b) Tom answered only the question.',
        wrongAnswer: 'どちらも「トムだけが質問に答えた」で意味は同じ。',
        trapExplanation:
          'only を「〜だけ」と訳すことだけ覚えていると、位置の違いに注意が向かない。文中のどこにあっても同じ意味だと思いこんでしまう。',
        correctAnswer: '(a) は「その質問に答えたのはトムだけだ（他の人は答えなかった）」。(b) は「トムはその質問にだけ答えた（他のことには答えなかった）」。',
        correctExplanation:
          'only は直後の語を限定するので、Only Tom なら「トムだけ」、only the question なら「その質問だけ」を意味する。同じように I only ate the cake.（食べただけで他のことはしていない）と I ate only the cake.（ケーキだけを食べた）も区別する。和訳のときは only の右どなりに何があるかを必ず確認する。',
      },
    ],
  },

  {
    id: 'koko_eigo_s217',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞②：頻度を表す副詞',
    description: 'always から never までの度合いと、一般動詞・be動詞・助動詞に対する置き場所を確定させる',
    order: 717,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    intro:
      '「よく映画を見る」の「よく」は、どのくらいの頻度だろうか。週に一度か、月に一度か。英語には always から never まで、頻度を段階的に表す副詞がそろっていて、話し手はその度合いを選んで使っている。度合いの目盛りと、置く位置——この二つを同時に押さえよう。',
    keyPoints: [
      '頻度の副詞は always(100%) > usually > often > sometimes > seldom/rarely > never(0%)。',
      '一般動詞の文では動詞の前に置く（He always gets up early.）。',
      'be動詞・助動詞がある文では、その後ろに置く（He is always kind. / I can always help you.）。',
      'sometimes と usually は文頭・文末にも置ける。always と never は原則として動詞の前。',
      'seldom / rarely / hardly ever は「めったに〜ない」で、それ自体が否定。not と重ねない。',
      '頻度をたずねるときは How often 〜?（〜once a week など回数で答える）。',
    ],
    sections: [
      {
        heading: '頻度の目盛りと置き場所',
        figureId: 'lf_kokoeigoext06_217',
        body: `■ 頻度の度合い
always（いつも・100%）
usually（たいてい・約90%）
often（よく・約70%）
sometimes（ときどき・約50%）
seldom / rarely（めったに〜ない・約10%）
never（決して〜ない・0%）
※ ほかに frequently（頻繁に）、occasionally（時折）、hardly ever（めったに〜ない）もある。

■ 置き場所の三原則
①一般動詞の文 → 動詞の前
例）He always gets up at six.（彼はいつも6時に起きる）
例）I often go to the library.（よく図書館に行く）
例）She never eats breakfast.（彼女は決して朝食を食べない）

②be動詞の文 → be動詞の後ろ
例）He is always kind to us.（彼はいつも私たちに親切だ）
例）They are usually at home on Sundays.（彼らは日曜はたいてい家にいる）

③助動詞がある文 → 助動詞の後ろ
例）I can always help you.（いつでも手伝えます）
例）You should always be careful.（いつも気をつけるべきだ）
例）He has never been to Kyoto.（彼は京都に行ったことがない）

■ 覚え方
「一般動詞の前、be動詞・助動詞の後ろ」。not の位置とまったく同じである。
例）He doesn't get up early.／He always gets up early.
例）He isn't kind.／He is always kind.

★ ポイント：not と同じ位置と覚えると、三つの規則を一つにまとめられる。図の棒グラフで各語の度合いを目に焼きつけよう。`,
      },
      {
        heading: '文頭・文末に置ける副詞と、否定の頻度副詞',
        body: `■ 文頭・文末にも置ける副詞
sometimes, usually, often, occasionally は文頭や文末にも置ける。
例）Sometimes I walk to school.（ときどき歩いて学校へ行く）
例）I go to the movies sometimes.（ときどき映画を見に行く）
例）Usually he takes the bus.
⚠ 注意：always と never は原則として動詞の前だけで、文頭・文末には置かない。
× Never I eat natto. → ○ I never eat natto.
※ ただし強調のために文頭に出すと倒置になる。
例）Never have I seen such a thing.（そんなものは見たことがない）

■ seldom / rarely / hardly ever（めったに〜ない）
それ自体が否定の意味を持つので、not と重ねない。
例）He seldom watches TV.（彼はめったにテレビを見ない）
例）I hardly ever eat out.（外食はめったにしない）
× He doesn't seldom watch TV.
また、否定なので付加疑問は肯定形になる。
例）He seldom watches TV, does he?

■ 頻度のたずね方と答え方
例）How often do you go to the gym?（どのくらいジムへ行きますか）
　— Twice a week.（週に2回）
　— About once a month.（月に1回くらい）
　— Every day.（毎日）
※ once（1回）／twice（2回）／three times（3回）と数える。× two times は口語では使うが、twice のほうが正式。

■ 回数を表す表現
例）I visit my grandmother three times a year.（年に3回祖母を訪ねる）
a week／a month／a year の a は「〜につき」の意味である。

★ ポイント：seldom, rarely, hardly は「準否定語」と呼ばれ、not を足さない。これは入試の誤文訂正で頻出する。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼はいつも私たちに親切だ。」を英語にしなさい。',
        wrongAnswer: 'He always is kind to us.',
        trapExplanation:
          '「頻度の副詞は動詞の前」という規則だけを覚えていると、be動詞の場合も前に置いてしまう。一般動詞での He always gets up 〜 の形が強く印象に残っていることが原因である。',
        correctAnswer: 'He is always kind to us.',
        correctExplanation:
          '頻度の副詞は「一般動詞の前、be動詞・助動詞の後ろ」に置く。ここでは be動詞 is があるので、その後ろに always を置いて He is always kind. とする。not の位置（He is not kind. / He does not get up early.）とまったく同じだと覚えると混乱しない。助動詞がある場合も I can always help you. のように助動詞の後ろになる。',
      },
      {
        question: '誤りを直しなさい。My father doesn\'t seldom cook dinner.',
        wrongAnswer: 'My father doesn\'t seldom cook dinner.（「めったに料理しない」として正しいと判断する）',
        trapExplanation:
          '「めったに〜ない」という日本語に「ない」が含まれるので、英語でも否定文にしなければならないと考えてしまう。seldom 自体が否定の意味を持つことを見落とした誤りである。',
        correctAnswer: 'My father seldom cooks dinner.',
        correctExplanation:
          'seldom, rarely, hardly, scarcely は「準否定語」と呼ばれ、それだけで否定の意味を表す。したがって don\'t と重ねると二重否定になり誤りになる。肯定文の形のまま seldom を動詞の前に置き、三人称単数現在なので cooks とする。同様に He hardly ever eats out. も否定形にはしない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s218',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞③：too・either・also と already・yet・still',
    description: '「〜も」を表す三語と、完了・継続を表す三語を、肯定と否定の別で正確に使い分ける',
    order: 718,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '「私も好きです」は I like it, too. だが、「私も好きではありません」は I don\'t like it, either. になる。日本語ではどちらも「も」の一語なのに、英語は肯定と否定で語を替える。already・yet・still も同じで、肯定と否定で使う語が分かれる。ここは「文の形で語が決まる」代表的な場面である。',
    keyPoints: [
      'too＝肯定文の「〜も」。文末に置き、コンマを付けることが多い。',
      'either＝否定文の「〜も（〜ない）」。文末に置く。',
      'also＝「〜も」。一般動詞の前、be動詞・助動詞の後ろ。ややかたい語。',
      'already＝肯定文の「すでに」。yet＝否定文の「まだ」、疑問文の「もう」。',
      'still＝「まだ（続いている）」。肯定文でも否定文でも使える。',
      'ago は過去形とともに、before は現在完了とともに使う。',
    ],
    sections: [
      {
        heading: '「〜も」を表す too・either・also',
        body: `■ too（肯定文）
文末に置き、直前にコンマを付けることが多い。
例）I like soccer, too.（私もサッカーが好きだ）
例）She can play the piano, too.
※ 短い返事では Me too. と言う。

■ either（否定文）
否定文で「〜もまた…ない」を表す。文末に置く。
例）I don't like soccer, either.（私もサッカーが好きではない）
例）He can't swim, either.
※ 短い返事では Me neither. または Neither can I. と言う。
⚠ 注意：× I don't like soccer, too. は誤り。否定文では必ず either を使う。

■ also（肯定文・ややかたい）
位置は一般動詞の前、be動詞・助動詞の後ろ。
例）He also studies French.（彼はフランス語も勉強している）
例）She is also a good cook.（彼女は料理も上手だ）
例）We can also use this room.
※ 文末に置く too とは位置が違う。

■ as well（文末・too とほぼ同じ）
例）He plays the guitar as well.（彼はギターも弾く）

■ 何を指して「も」と言っているかに注意
例）I ate sushi, too.（他の人も食べた／私は他の物も食べた、の両方に取れる）
文脈で判断する。強調したいときは I, too, ate sushi. のように位置を変える。

★ ポイント：「肯定なら too、否定なら either」。この一組は選択問題で必ず出る。`,
      },
      {
        heading: 'already・yet・still と ago・before',
        body: `■ already（すでに・もう）— 肯定文
例）I have already finished my homework.（すでに宿題を終えた）
例）He has already left.（彼はもう出発した）
位置は has/have と過去分詞の間、または文末。
※ 疑問文で already を使うと「もう〜したの（驚き）」を表す。
例）Have you already finished?（もう終わったの？）

■ yet — 否定文で「まだ」、疑問文で「もう」
例）I haven't finished my homework yet.（まだ宿題を終えていない）
例）Have you finished your homework yet?（もう宿題を終えましたか）
位置は文末。

■ still（まだ〜している）— 肯定・否定どちらも可
例）He is still sleeping.（彼はまだ眠っている）
例）I still don't understand.（まだ理解できない）
位置は一般動詞の前、be動詞・助動詞の後ろ。否定文では not の前に置く。
※ yet（まだ〜ない）と still（まだ〜している）の違い
例）He hasn't come yet.（彼はまだ来ていない）
例）He is still here.（彼はまだここにいる）

■ ago と before
ago：現在から見て「〜前に」。過去形とともに使う。
例）I met him three days ago.（3日前に彼に会った）
× I have met him three days ago.（現在完了とは使えない）
before：過去のある時点から見て「以前に」。現在完了・過去完了とともに使う。
例）I have seen the movie before.（以前その映画を見たことがある）

⚠ 注意：ago は必ず「期間 + ago」の形で使い、単独では使わない。× I met him ago.

★ ポイント：already / yet / still は現在完了の単元でも問われる。「肯定＝already、否定＝yet、継続中＝still」と三点セットで覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「私も納豆が好きではありません。」を英語にしなさい。',
        wrongAnswer: 'I don\'t like natto, too.',
        trapExplanation:
          '日本語の「も」を too と一対一で対応させてしまう。肯定文で I like it, too. と使い慣れているため、否定文でもそのまま too を使ってしまう。',
        correctAnswer: 'I don\'t like natto, either.',
        correctExplanation:
          '否定文で「〜もまた…ない」を表すときは either を使う。肯定文の too と対になる語で、位置はどちらも文末である。会話で相手の否定に同意するときは Me neither. または Neither do I. と言う。「肯定は too、否定は either」と対で覚えておく。',
      },
      {
        question: '（　）内から適する語を選びなさい。My brother hasn\'t come home (already / yet).',
        wrongAnswer: 'already',
        trapExplanation:
          '「まだ帰ってきていない」の「まだ」を already と結びつけてしまう。already を「もう・すでに」と覚えていても、否定文での使い分けまで意識が及ばないことが原因である。',
        correctAnswer: 'yet',
        correctExplanation:
          'already は肯定文で「すでに」、yet は否定文で「まだ（〜ない）」、疑問文で「もう」を表す。この文は hasn\'t という否定文なので yet が正しく、位置は文末になる。なお「まだ〜している」という継続を表すときは still を使い、He is still at school. のように置く。',
      },
    ],
  },

  {
    id: 'koko_eigo_s219',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞④：副詞（句）を並べる順序',
    description: '様態・場所・時が重なるときの語順と、小さい単位から大きい単位へ並べる原則を身につける',
    order: 719,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    intro:
      '「昨日、公園で楽しくサッカーをした」を英語にすると、yesterday・in the park・happily の三つをどう並べるか迷う。英語には決まった順序があって、日本語とはちょうど逆向きになる。しかも時や場所が二つ重なると、小さいほうから先に置く。この二つの原則で語順の悩みは解決する。',
    keyPoints: [
      '基本の順序は「様態 → 場所 → 時」（He played soccer well in the park yesterday.）。',
      '場所が二つ重なるときは、小さい単位から大きい単位へ（in Osaka in Japan）。',
      '時が二つ重なるときも、小さい単位から大きい単位へ（at seven on Monday）。',
      '時を表す副詞は強調のため文頭に置くこともできる（Yesterday I went to the park.）。',
      '動詞と目的語の間には副詞を入れない。',
      '日本語は「時 → 場所 → 様態」の順が多く、英語とちょうど逆になる。',
    ],
    sections: [
      {
        heading: '様態 → 場所 → 時',
        figureId: 'lf_kokoeigoext06_219',
        body: `■ 基本の順序
動詞（＋目的語）→ 様態（どのように）→ 場所（どこで）→ 時（いつ）
例）He played soccer well in the park yesterday.
（彼は昨日、公園で上手にサッカーをした）
例）She sang beautifully at the concert last night.
（彼女は昨夜、コンサートで美しく歌った）
例）We studied hard in the library this morning.
（私たちは今朝、図書館で一生懸命勉強した）

■ 日本語との違い
日本語：昨日（時）／公園で（場所）／上手に（様態）／サッカーをした
英語：played soccer／well（様態）／in the park（場所）／yesterday（時）
順序が完全に逆になるので、訳すときは後ろから読むとうまくいく。

■ 時の副詞は文頭にも置ける
強調したいときや、話題を先に示したいときは文頭に出す。
例）Yesterday I met an old friend of mine.（昨日、旧友に会った）
例）Last night we watched a movie together.
※ 様態や場所を文頭に出すのは、詩的な表現を除いてまれである。

■ 動詞と目的語の間には入れない
× He played well soccer. → ○ He played soccer well.
× I like very much this song. → ○ I like this song very much.

★ ポイント：「様態 → 場所 → 時」の頭文字で「よ・ば・じ（様・場・時）」と唱えて覚える。図の目盛りで並び順を確かめよう。`,
      },
      {
        heading: '小さい単位から大きい単位へ',
        body: `■ 場所が重なるとき
狭い場所 → 広い場所の順に並べる。
例）He lives in a small town in Hokkaido.（彼は北海道の小さな町に住んでいる）
例）I bought it at a store near the station.（駅の近くの店でそれを買った）
例）She works in an office in Osaka in Japan.
日本語では「日本の大阪のオフィスで」と大きいほうから言うので、こちらも逆順になる。

■ 時が重なるとき
短い単位 → 長い単位の順に並べる。
例）I was born at seven on May 5 in 2010.（2010年5月5日の7時に生まれた）
例）The meeting starts at ten on Monday.（会議は月曜の10時に始まる）
例）Let's meet at noon tomorrow.（明日の正午に会おう）

■ 住所・日付の書き方も同じ発想
住所：番地 → 町 → 市 → 県 → 国
日付（アメリカ式）：月 日, 年（May 5, 2026）
日付（イギリス式）：日 月 年（5 May 2026）
日本語とはすべて逆順になる。

■ 前置詞の使い分け（復習）
時：at + 時刻／on + 曜日・日付／in + 月・年・季節
場所：at + 地点／on + 面／in + 空間
例）at seven／on Monday／in April
例）at the station／on the wall／in the room

■ 頻度の副詞との併用
頻度の副詞は動詞の前（be動詞・助動詞の後ろ）、その他の副詞句は文末という位置関係になる。
例）I usually go to school by bike at seven.（ふだんは7時に自転車で学校へ行く）

★ ポイント：英語は「小さいものから大きいものへ」、日本語は「大きいものから小さいものへ」。この向きの違いを一つ覚えるだけで、住所・日付・場所・時のすべてに応用できる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）内の語句を正しい順に並べかえなさい。She practiced the piano ( yesterday / at home / for two hours ).',
        wrongAnswer: 'She practiced the piano yesterday at home for two hours.',
        trapExplanation:
          '日本語の「昨日、家で2時間ピアノを練習した」という語順のまま並べてしまう。日本語は時を先に言うので、英語でも先に置きたくなる。',
        correctAnswer: 'She practiced the piano for two hours at home yesterday.',
        correctExplanation:
          '英語の副詞句は「様態 → 場所 → 時」の順に並べる。for two hours（どのように・どれだけ）→ at home（場所）→ yesterday（時）となる。日本語とちょうど逆順なので、英作文では日本語を後ろから読み直して並べるとよい。なお yesterday を強調して文頭に置く形も可能である。',
      },
      {
        question: '「彼は日本の大阪に住んでいます。」を英語にしなさい。',
        wrongAnswer: 'He lives in Japan in Osaka.',
        trapExplanation:
          '日本語の「日本の大阪に」という語順をそのまま英語に移してしまう。日本語は大きい単位から小さい単位へ並べるので、英語も同じだと思いこみやすい。',
        correctAnswer: 'He lives in Osaka, Japan.（He lives in Osaka in Japan. でも可）',
        correctExplanation:
          '英語では場所を小さい単位から大きい単位へ並べるので、Osaka（市）→ Japan（国）の順になる。住所や日付でも同じで、番地 → 町 → 市 → 県 → 国、時刻 → 日付 → 年の順に書く。日本語とは向きが逆になるという一点を覚えれば、場所・時・住所・日付のすべてに応用できる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s220',
    subject: 'eigo',
    examType: 'koko',
    title: '副詞⑤：-ly で意味が変わる副詞と、形容詞と同じ形の副詞',
    description: 'hard と hardly、late と lately など、形の似た副詞の意味の違いを最終確認する',
    order: 720,
    studyPeriod: '中3前半',
    targetLevel: 'moshi',
    intro:
      'He works hard. は「一生懸命働く」だが、He hardly works. は「ほとんど働かない」。-ly が付いただけで意味が正反対になる。しかも hard は形容詞と副詞が同じ形なので、見分けにはもう一段の注意がいる。このユニットの締めくくりとして、まぎらわしい副詞を完全に整理しよう。',
    keyPoints: [
      'hard（一生懸命に・熱心に）↔ hardly（ほとんど〜ない）。',
      'late（遅く）↔ lately（最近）。near（近くに）↔ nearly（ほとんど・危うく）。',
      'most（最も）↔ mostly（たいてい・主に）。high（高く）↔ highly（大いに・非常に）。',
      '形容詞と同じ形の副詞：fast, early, hard, late, high, near, long, well（good の副詞形）。',
      '-ly で終わるが形容詞の語：friendly, lovely, lonely, likely, weekly, daily。',
      'hardly / scarcely / barely は準否定語なので not と重ねない。',
    ],
    sections: [
      {
        heading: '-ly が付くと意味が変わる副詞',
        body: `■ hard / hardly
hard（副詞）＝一生懸命に・激しく
hardly ＝ ほとんど〜ない（準否定語）
例）He works hard every day.（彼は毎日一生懸命働く）
例）He hardly works.（彼はほとんど働かない）
例）It was raining hard.（雨が激しく降っていた）
例）I can hardly hear you.（あなたの声がほとんど聞こえない）

■ late / lately
late＝遅く（時間的に）
lately＝最近（＝recently）
例）I got up late this morning.（今朝は遅く起きた）
例）I haven't seen him lately.（最近、彼に会っていない）
※ lately は現在完了とともに使うことが多い。

■ near / nearly
near＝近くに
nearly＝ほとんど・危うく（＝almost）
例）He lives near the station.（彼は駅の近くに住んでいる）
例）It is nearly ten o'clock.（もうすぐ10時だ）
例）I nearly missed the train.（危うく電車に乗り遅れるところだった）

■ most / mostly
most＝最も・大部分
mostly＝たいてい・主に
例）This is the most difficult question.（これがいちばん難しい問題だ）
例）The students are mostly from Asia.（その生徒たちは主にアジア出身だ）

■ high / highly
high＝（物理的に）高く
highly＝大いに・非常に（評価などについて）
例）The bird flew high in the sky.（鳥は空高く飛んだ）
例）He is highly respected by everyone.（彼はみんなから非常に尊敬されている）

★ ポイント：-ly が付くと意味が抽象的・比喩的になる、というのが共通の傾向である。「物理的なら短い形、抽象的なら -ly」と覚えると整理しやすい。`,
      },
      {
        heading: '形が同じ・紛らわしい語の見分け',
        body: `■ 形容詞と副詞が同じ形の語
fast（速い／速く）／early（早い／早く）／hard（難しい・熱心な／熱心に）／late（遅い／遅く）／high（高い／高く）／long（長い／長く）／near（近い／近くに）
見分け方：名詞を修飾していれば形容詞、動詞を修飾していれば副詞。
例）He is a fast runner.（形容詞：runner を修飾）
例）He runs fast.（副詞：runs を修飾）
例）She took an early train.（形容詞）
例）She got up early.（副詞）
⚠ 注意：× He runs fastly は誤り。fast に -ly を付けた形は存在しない。

■ good と well
good は形容詞、well は副詞。
例）He is a good soccer player.（形容詞）
例）He plays soccer well.（副詞）
※ well には「健康な」という形容詞の用法もある。
例）I am very well, thank you.（とても元気です）

■ -ly で終わるが形容詞の語
friendly（親しみやすい）／lovely（すてきな）／lonely（孤独な）／likely（ありそうな）／weekly（毎週の）／daily（毎日の）／costly（高価な）／silly（ばかげた）
例）She is a friendly girl.（○ 形容詞）
× She smiled friendly.（誤り。副詞としては使えない）
○ She smiled in a friendly way.（副詞句に言いかえる）

■ 準否定語の扱い
hardly／scarcely／barely／seldom／rarely は「ほとんど〜ない」「めったに〜ない」という否定の意味を持つので、not と重ねない。
× I can't hardly believe it. → ○ I can hardly believe it.
また、付加疑問は肯定形になる。
例）He hardly ever comes here, does he?

★ ポイント：「-ly が付いていれば副詞」という思いこみが最大の落とし穴である。friendly・lovely・lonely・likely の四語は必ず覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '次の英文を日本語にしなさい。My grandfather hardly goes out these days.',
        wrongAnswer: '祖父は最近、一生懸命に外出している。',
        trapExplanation:
          'hardly を hard（一生懸命に）の副詞形だと考えて、「熱心に」と訳してしまう。-ly が付いただけなので意味も同じ方向だと思いこむのが原因である。',
        correctAnswer: '祖父は最近、ほとんど外出しない。',
        correctExplanation:
          'hardly は「ほとんど〜ない」という準否定語で、hard（一生懸命に）とはまったく別の意味になる。「一生懸命に働く」は He works hard.、「ほとんど働かない」は He hardly works. である。同じく late（遅く）と lately（最近）、near（近くに）と nearly（ほとんど）も -ly の有無で意味が変わる。',
      },
      {
        question: '誤りを直しなさい。The old man smiled friendly at the children.',
        wrongAnswer: 'The old man smiled friendly at the children.（friendly は -ly で終わるので副詞と判断する）',
        trapExplanation:
          '-ly で終わる語はすべて副詞だと思いこんでいるため、動詞 smiled を修飾する位置に friendly を置いてしまう。「親しげに」という日本語訳も副詞らしく感じられる。',
        correctAnswer: 'The old man smiled in a friendly way at the children.（The old man gave the children a friendly smile. でも可）',
        correctExplanation:
          'friendly は -ly で終わっているが形容詞であり、副詞としては使えない。副詞の意味で使いたいときは in a friendly way / in a friendly manner のように言いかえる。同じく lovely, lonely, likely, daily, weekly も形容詞である。「-ly ＝ 副詞」という思いこみが誤りの原因なので、この四〜六語は例外として覚えておく。',
      },
    ],
  },
];
