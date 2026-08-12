import type { Lesson } from './lesson-types';

// 高校受験 英語「時制（現在・過去・未来・進行形）」拡張ユニット（40セッション：koko_eigo_s071〜koko_eigo_s110）
// order は 571〜610。
// 構成：現在形の3用法(5)／過去形と規則動詞のつづり変化(5)／不規則動詞の過去形(6)／
//       現在進行形と ing のつづり(5)／過去進行形(4)／進行形にしない動詞・状態動詞(4)／
//       未来 will と be going to(6)／時・条件の副詞節では未来を現在形で表す(5)
// 図解は lesson-figs-koko-eigo-ext03.ts（40課中18課）。時制は「時間軸のどこを指すか」が本質なので、
// numberLine で過去の一点・現在・未来の位置と、進行形が持つ「幅」を示してある。
export const kokoEigoExt03Lessons: Lesson[] = [
  // ───────────── 1. 現在形の三つの用法（s071〜s075） ─────────────
  {
    id: 'koko_eigo_s071',
    subject: 'eigo',
    examType: 'koko',
    title: '現在形①：現在形は「今この瞬間」ではない',
    description: '現在形が表す三つの内容（習慣・状態・不変の真理）をつかみ、現在進行形との線引きをする',
    intro:
      'I play tennis. を「今テニスをしている」と訳すと間違いです。ラケットを持っていない教室の中でも、この文は言えます。日本語の「〜する」「〜している」と英語の現在形はぴったり重なっていません。まずこのズレをほどくところから、時制の学習を始めます。',
    order: 571,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '現在形が表すのは①習慣・くり返し ②しばらく変わらない状態 ③不変の真理・一般的事実の三つ。',
      '「今この瞬間の動作」は現在形ではなく現在進行形〈be動詞＋ing形〉で表す。',
      '主語が三人称単数（he / she / it / Tom / my brother など）なら動詞に -s / -es が付く。',
      'every day / usually / always などのくり返しを示す語句は現在形の合図。',
      'now / Look! / Listen! は現在進行形の合図。',
      '日本語の「住んでいる」「知っている」は状態なので、進行形にせず現在形で書く。',
    ],
    sections: [
      {
        heading: '現在形が表す三つの内容',
        figureId: 'lf_kokoeigoext03_071',
        body: `英語の現在形は「今この瞬間にしている動作」を表す形ではない。むしろ「今だけに限らず、広い範囲でそうである」ことを表す形である。表す内容は次の三つに整理できる。

■ ①習慣・くり返し
決まってくり返し行うことを表す。every day / on Sundays / twice a week などの語句と相性がよい。
例）I play tennis every Sunday.（私は毎週日曜日にテニスをする）
例）My father goes to work by train.（父は電車で通勤している）

■ ②しばらく変わらない状態・性質
今も、少し前も、少し後もそうである、という内容を表す。live / know / like / have / be などが中心になる。
例）I live in Osaka.（私は大阪に住んでいる）
例）She has two brothers.（彼女には兄弟が二人いる）

■ ③不変の真理・一般的事実
いつの時代でも成り立つことを表す。理科や社会の内容を英語で書くときはこの用法になる。
例）The sun rises in the east.（太陽は東からのぼる）
例）Water boils at 100 degrees Celsius.（水はセ氏100度で沸騰する）

★ ポイント：どの用法も「今この瞬間」だけを指していない。だから I play tennis. は、今ラケットを持っていなくても言える。逆に言えば、今まさにしている最中のことは現在形では表せない。`,
      },
      {
        heading: '「今〜している」は現在進行形で表す',
        body: `日本語の「〜している」につられて現在形を選ぶ誤りは非常に多い。今まさに進行中の動作は、現在形ではなく現在進行形〈be動詞＋動詞のing形〉で表す。

例）× I read a book now.
　　○ I am reading a book now.（私は今、本を読んでいる）

逆に、日本語が「〜する」でも内容が「今まさに」なら進行形にする。
例）Look! A bus is coming.（見て、バスが来るよ）

■ どちらかを決める手順
①now / at this moment / Look! / Listen! があるか。あれば現在進行形を疑う。
②every day / usually / always / on weekends など、くり返しを示す語句があるか。あれば現在形。
③どちらの手がかりもなければ、「いつもそうなのか（現在形）」「今だけのことか（進行形）」を内容から判断する。

⚠ 注意：日本語の「彼は大阪に住んでいる」は状態なので He lives in Osaka. が基本形である。「〜している」＝進行形と機械的に結びつけてはいけない。この判断は後の課（状態動詞）でくわしく扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は今、宿題をしています」を英語にしなさい。',
        wrongAnswer: 'I do my homework now.',
        trapExplanation:
          '日本語の「します」「しています」をそのまま現在形に置きかえてしまう。現在形は「いつもそうだ」という意味になるので、この文は「私は今ごろ宿題をするものだ」という不自然な意味になってしまう。',
        correctAnswer: 'I am doing my homework now.',
        correctExplanation:
          'now があるので、今まさに進行中の動作。現在進行形〈be動詞＋ing形〉を使う。主語 I に対応する be動詞は am。do の ing形は doing。「今」を表す語があったら、まず進行形を疑う習慣をつける。',
      },
      {
        question: '「水はセ氏100度で沸騰する」を英語にしなさい。',
        wrongAnswer: 'Water is boiling at 100 degrees Celsius.',
        trapExplanation:
          '「沸騰する」という動きのある動詞なので、動作＝進行形と考えてしまう。しかしこの文は目の前で沸いているお湯の話ではなく、いつでも成り立つ性質の話である。',
        correctAnswer: 'Water boils at 100 degrees Celsius.',
        correctExplanation:
          '不変の真理・一般的事実は、いつでも現在形で表す。主語 Water は三人称単数扱いなので boil に -s が付いて boils になる点にも注意。The earth goes around the sun.（地球は太陽のまわりを回る）も同じ用法である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s072',
    subject: 'eigo',
    examType: 'koko',
    title: '現在形②：習慣を表す現在形と頻度の副詞',
    description: 'always / usually / often などの頻度の副詞の意味と置く位置を、be動詞・一般動詞の別に整理する',
    intro:
      '「彼はいつも親切だ」を英語にするとき、always をどこに置くか迷ったことはありませんか。実は be動詞のうしろか、一般動詞の前か、という一本のルールで片づきます。置き場所をまちがえるだけで減点される、もったいない失点をここでなくしておきましょう。',
    order: 572,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '頻度の副詞は多い順に always → usually → often → sometimes → seldom / rarely → never。',
      '置く位置は「be動詞のうしろ」「一般動詞の前」。この一本で覚える。',
      'never / seldom / rarely はそれ自体が否定の意味を持つので、not と重ねない。',
      'every day / once a week / twice a month のような語句は文末に置くのがふつう。',
      'sometimes は文頭に置くこともできるが、always と never は文頭に置かない。',
    ],
    sections: [
      {
        heading: '頻度の副詞の強さと置く位置',
        figureId: 'lf_kokoeigoext03_072',
        body: `習慣を表す現在形には、どれくらいの頻度かを示す副詞がよく添えられる。おおよその強さは次の順である。

always（いつも・100%）＞ usually（たいてい・80%）＞ often（しばしば・60%）＞ sometimes（ときどき・40%）＞ seldom / rarely（めったに〜ない・10%）＞ never（決して〜ない・0%）

■ 置く位置は二つだけ
①be動詞の文 → be動詞のうしろ
例）He is always kind to us.（彼はいつも私たちに親切だ）
例）She is never late for school.（彼女は決して学校に遅刻しない）
②一般動詞の文 → 一般動詞の前
例）I usually get up at six.（私はたいてい6時に起きる）
例）We often play soccer after school.（私たちは放課後よくサッカーをする）

■ 助動詞がある文
助動詞と動詞の間に入れる。
例）You should always check your answer.（いつも答えを確かめるべきだ）

★ ポイント：「be動詞のうしろ・一般動詞の前」は、not の位置とまったく同じ考え方である（He is not kind. / I do not play.）。not の位置とセットで覚えると忘れにくい。`,
      },
      {
        heading: 'never / seldom と every day の扱い',
        body: `■ never は「not ＋ ever」の意味
never はそれ自体に否定の意味が含まれている。したがって not と重ねて使わない。
例）× I do not never tell a lie.
　　○ I never tell a lie.（私は決してうそをつかない）
seldom（＝rarely）も同じで、「めったに〜ない」という否定の意味をすでに持っている。
例）He seldom watches TV.（彼はめったにテレビを見ない）
※ never / seldom を使った文は形の上では肯定文なので、一般動詞に三単現の -s が必要である点にも注意する（watches）。

■ every day などは文末
語ではなく二語以上のまとまり（every day / once a week / twice a month / on Sundays）は、動詞の前ではなく文末に置く。
例）I practice the piano every day.（私は毎日ピアノを練習する）
例）We have a meeting twice a month.（私たちは月に2回会議をする）

■ 文頭に出せる副詞・出せない副詞
sometimes / usually / often は文頭に置いて強調できる。
例）Sometimes I walk to school.
一方 always と never は、ふつう文頭には置かない。

⚠ 注意：How often do you 〜? （どれくらいの頻度で〜しますか）と聞かれたら、Twice a week. のように回数で答える。Yes / No では答えられない。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼はいつも遅刻する」を英語にしなさい。',
        wrongAnswer: 'He always is late.',
        trapExplanation:
          '日本語の語順「いつも／遅れる」をそのままなぞり、always を be動詞の前に置いてしまう。一般動詞の前に置くという規則だけを覚えていると、be動詞の文でも同じように前に出してしまう。',
        correctAnswer: 'He is always late.',
        correctExplanation:
          '頻度の副詞は be動詞のうしろ、一般動詞の前。この文は be動詞 is の文なので、うしろに always を置いて He is always late. とする。He always comes late.（一般動詞 come の前）と比べて位置の違いを確認しておく。',
      },
      {
        question: '「私は決してうそをつきません」を英語にしなさい。',
        wrongAnswer: 'I do not never tell a lie.',
        trapExplanation:
          '「〜ません」という日本語の否定に引かれて do not を足してしまう。never にすでに否定の意味があることを見落とすと、否定が二重になる。',
        correctAnswer: 'I never tell a lie.',
        correctExplanation:
          'never は「一度も〜ない」という否定語なので、do not と重ねてはいけない。形は肯定文のまま、動詞は原形（三人称単数なら -s 付き）を使う。He never tells a lie. のように -s が必要になる点も要注意である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s073',
    subject: 'eigo',
    examType: 'koko',
    title: '現在形③：三単現の -s のつけ方と発音',
    description: '三人称単数現在の -s / -es のつづり規則四種と、[s] [z] [iz] の発音の使い分けを固める',
    intro:
      '公立入試の英作文で最も多い減点は、実は難しい構文の失敗ではなく、三単現の -s の付け忘れです。He play soccer. と書いた瞬間に1点消えます。付ける相手と、付け方のつづり、そして発音まで、ここでまとめて片づけてしまいましょう。',
    order: 573,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '三単現の -s が付くのは、主語が三人称単数で時制が現在のときだけ。',
      'つづりの規則は①そのまま +s ②o, s, x, sh, ch で終わる語は +es ③子音字＋y は y を i に変えて +es ④have は has。',
      '母音字＋y（play, say, buy）は y をそのままにして +s。',
      '発音は無声音の後が [s]、有声音の後が [z]、s / z / sh / ch / ge の音の後が [iz]。',
      'everyone / everybody / each / nobody は単数扱いなので -s が必要。',
      'does / did のうしろの動詞はいつも原形。-s を付けない。',
    ],
    sections: [
      {
        heading: 'どんなときに -s が付くか、つづりはどう変わるか',
        body: `■ 付ける条件は三つ同時
①主語が三人称（I と you 以外）②単数 ③時制が現在。この三つがそろったときだけ動詞に -s / -es が付く。
例）He plays the guitar. / My sister likes music. / That bird sings well.
主語が I / you / 複数のときは付かない。
例）I play the guitar. / They like music.

■ つづりの規則
①原則：そのまま -s
　play → plays　like → likes　run → runs　read → reads
②o, s, x, sh, ch で終わる語：-es
　go → goes　do → does　pass → passes　mix → mixes　wash → washes　teach → teaches　watch → watches
③子音字＋y：y を i に変えて -es
　study → studies　carry → carries　fly → flies　try → tries　cry → cries
④母音字＋y：そのまま -s（②③に引っぱられないこと）
　play → plays　say → says　buy → buys　enjoy → enjoys
⑤特別な形
　have → has

★ ポイント：③と④の分かれ目は「y の直前が子音字か母音字か」だけである。stud-y は d（子音字）なので studies、pla-y は a（母音字）なので plays。`,
      },
      {
        heading: '-s の発音と、-s を付けてはいけない場面',
        body: `■ 発音は三種類
①[s]：無声音（p, t, k, f）の後
　stops / likes / laughs / cuts
②[z]：有声音（母音・b, d, g, m, n, l, r, v）の後
　plays / runs / opens / lives / calls
③[iz]：s, z, sh, ch, ge の音の後（音節が一つ増える）
　washes / watches / teaches / passes / uses / changes
※ says は [seiz] ではなく [sez]、does は [duːz] ではなく [dʌz] と、母音まで変わる点も入試の発音問題でねらわれる。

■ -s を付けてはいけない場面
①does / did のうしろ
　例）× Does she plays the piano?　○ Does she play the piano?
②does not / did not のうしろ
　例）× He does not likes it.　○ He does not like it.
③助動詞（can / will / must / may）のうしろ
　例）× He can plays tennis.　○ He can play tennis.

■ まぎらわしい主語
everyone / everybody / each / nobody / something は形は一つのまとまりなので単数扱いになる。
例）Everyone in my class likes the teacher.（クラスのみんながその先生を好きだ）

⚠ 注意：Tom and I は「二人」なので複数扱い。Tom and I play tennis. と -s は付かない。主語の中心となる語だけを見て判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の文の誤りを直しなさい。Everyone in my class like the new teacher.',
        wrongAnswer: '誤りはない（everyone は「みんな」なので複数扱い）',
        trapExplanation:
          '日本語の「みんな」が複数の人を指すので、複数扱いだと思いこんでしまう。さらに直前に in my class という複数名詞があるため、そちらに引かれて like のままにしてしまう。',
        correctAnswer: 'Everyone in my class likes the new teacher.',
        correctExplanation:
          'everyone / everybody / each / nobody は英語では単数扱いなので、三単現の -s が必要である。主語の中心語は everyone であって class ではない。前置詞句（in my class）は主語の数に影響しないことを覚えておく。',
      },
      {
        question: '「彼女はピアノをひきますか」を英語にしなさい。',
        wrongAnswer: 'Does she plays the piano?',
        trapExplanation:
          '主語が she だから -s が要る、という規則だけが頭に残っていて、does にすでに三単現の情報が入っていることを忘れてしまう。-s を二重に付けた形になっている。',
        correctAnswer: 'Does she play the piano?',
        correctExplanation:
          'does のうしろの動詞はつねに原形。三単現の情報は does がすでに背負っているので、動詞側に -s を付けると二重表示になり誤りになる。否定文 She does not play the piano. も同じ理屈である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s074',
    subject: 'eigo',
    examType: 'koko',
    title: '現在形④：一般動詞の否定文・疑問文',
    description: 'do / does を使った否定文と疑問文の作り方を、be動詞の文と混同しないように整理する',
    intro:
      '「あなたは野球が好きですか」を Are you like baseball? と書いてしまう人が毎年います。be動詞と一般動詞は、同じ文の中で主役を二人置けません。どちらの文なのかを最初に見分けてしまえば、否定文も疑問文も機械的に作れます。',
    order: 574,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞の否定文は〈主語＋do / does not＋動詞の原形〉。',
      '一般動詞の疑問文は〈Do / Does＋主語＋動詞の原形 〜?〉。',
      'be動詞の文では do / does を使わない。be動詞を前に出すか、うしろに not を置く。',
      'does / do のうしろの動詞は必ず原形（-s を付けない）。',
      '答えは Yes, he does. / No, he does not. のように do 系でそろえる。',
      '疑問詞のある疑問文は〈疑問詞＋do / does＋主語＋原形 〜?〉の語順。',
    ],
    sections: [
      {
        heading: '否定文・疑問文の作り方',
        body: `■ 否定文
一般動詞の前に do not / does not を置き、動詞は原形にもどす。
例）I do not (don't) watch TV on weekdays.（私は平日はテレビを見ない）
例）He does not (doesn't) live in Tokyo.（彼は東京に住んでいない）
※ does に三単現の情報が移るので、動詞は live であって lives ではない。

■ 疑問文
Do / Does を文頭に出し、動詞は原形にする。
例）Do you play any sports?（何かスポーツをしますか）
例）Does your sister study French?（お姉さんはフランス語を勉強していますか）

■ 答え方
Yes / No のあとも do 系でそろえる。
例）Do you like natto? － Yes, I do. / No, I do not (don't).
例）Does he speak English? － Yes, he does. / No, he does not (doesn't).

■ 疑問詞を使う場合
疑問詞を先頭に置き、そのうしろは疑問文の語順のまま。
例）What time do you get up?（何時に起きますか）
例）Where does she live?（彼女はどこに住んでいますか）

★ ポイント：疑問詞が主語そのものを聞くときは do / does を使わず、そのまま三単現の形にする。
例）Who plays the piano in your family?（家族でだれがピアノをひきますか）`,
      },
      {
        heading: 'be動詞の文と混ぜない',
        body: `一つの文の中に「be動詞」と「一般動詞（原形）」を同時に並べることはできない。ここを混ぜた誤りは入試の誤文訂正で頻出である。

例）× Are you like baseball?　○ Do you like baseball?
例）× He is not play soccer.　○ He does not play soccer.
例）× I am go to school by bus.　○ I go to school by bus.

■ 見分け方の手順
①文の中心となる動詞を探す。
②それが am / is / are なら be動詞の文 → 疑問文は be動詞を前に出す、否定文は be動詞のうしろに not。
③それが play / like / go などの一般動詞なら → 疑問文は Do / Does を前に置く、否定文は do / does not を動詞の前に置く。

■ まぎらわしい例
・He is a doctor.（be動詞の文）→ Is he a doctor? / He is not a doctor.
・He works at a hospital.（一般動詞の文）→ Does he work at a hospital? / He does not work at a hospital.
・He is running now.（進行形は be動詞の文として扱う）→ Is he running now? / He is not running now.

⚠ 注意：進行形〈be動詞＋ing形〉の疑問文で Do を使ってしまう誤りが多い。× Do you running? ○ Are you running? 進行形の中心は be動詞である。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたはコーヒーが好きですか」を英語にしなさい。',
        wrongAnswer: 'Are you like coffee?',
        trapExplanation:
          '「〜ですか」という日本語の形から be動詞の疑問文だと思いこんでしまう。日本語の「です」に引かれて be動詞を選ぶのは、一般動詞の疑問文でいちばん多い誤りである。',
        correctAnswer: 'Do you like coffee?',
        correctExplanation:
          'like は一般動詞なので、疑問文は Do を文頭に置く。be動詞と一般動詞は同時に使えない。日本語の「です」ではなく、英語側でどの動詞を使うかを見てから疑問文の形を決めること。',
      },
      {
        question: '次の文の誤りを直しなさい。My brother doesn\'t likes vegetables.',
        wrongAnswer: '誤りはない（主語が三人称単数だから likes でよい）',
        trapExplanation:
          '主語 My brother が三人称単数なので -s が必要だという規則だけを当てはめてしまう。does not がすでに三単現を表していることを見落としている。',
        correctAnswer: 'My brother does not like vegetables.',
        correctExplanation:
          'does not のうしろの動詞は必ず原形。三単現の情報は does が担当しているので、動詞に -s を付けると二重になる。疑問文 Does my brother like vegetables? も同じく原形を使う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s075',
    subject: 'eigo',
    examType: 'koko',
    title: '現在形⑤：be動詞の現在形と There is / are',
    description: 'am / is / are の使い分けと、There is / are 構文での主語の見つけ方を確認する',
    intro:
      '「机の上に本が3冊あります」を There is three books... と書いてしまう人がいます。There はただの合図で、本当の主語はうしろの books です。どの語に be動詞を合わせるのかを見つけられれば、この構文はもう落としません。',
    order: 575,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の現在形は I → am、he / she / it・単数 → is、you・複数 → are。',
      'There is / are 〜 の本当の主語は、be動詞のうしろに来る名詞。',
      '数えられない名詞（water / money / time / snow）は単数扱いで There is を使う。',
      'A of B の形では、A（前の語）が主語の中心。One of my friends is 〜 と単数で受ける。',
      'be動詞の文には一般動詞の原形を続けない（× He is live in Osaka）。',
    ],
    sections: [
      {
        heading: 'be動詞の現在形と主語の一致',
        body: `■ 基本の三つ
I am a student.／You are kind.／He is my friend.
主語が複数なら are、単数（I と you 以外）なら is である。
例）My parents are teachers.（両親は教師だ）
例）This book is very interesting.（この本はとてもおもしろい）

■ 主語の中心語を見つける
主語が長くなると、be動詞を合わせる相手をまちがえやすい。前置詞句（of 〜 / in 〜 / with 〜）は主語の中心ではない。
例）One of my friends is from Canada.（友人の一人はカナダ出身だ）
　　→ 中心語は One なので is。friends に引かれて are としない。
例）The boy with two dogs is my brother.（2匹の犬を連れた少年は私の兄だ）
　　→ 中心語は The boy なので is。

■ be動詞の意味は二つ
①「〜である」（イコールでつなぐ）：She is a nurse.
②「〜にいる・ある」（存在）：She is in the library.

★ ポイント：be動詞の文に一般動詞の原形を続けることはできない。× My brother is live in Osaka. は誤りで、正しくは My brother lives in Osaka. である。「〜している」という日本語に引かれて is を足してしまう誤りが非常に多い。`,
      },
      {
        heading: 'There is / There are の使い方',
        body: `「〜がある・いる」と存在を新しく持ち出すときは〈There ＋ be動詞 ＋ 主語 ＋ 場所〉の形を使う。

■ be動詞はうしろの名詞に合わせる
例）There is a cat under the table.（テーブルの下にネコが1匹いる）
例）There are three books on the desk.（机の上に本が3冊ある）
There 自体は主語ではなく、文を始めるための合図にすぎない。合わせる相手はうしろの名詞である。

■ 数えられない名詞は単数扱い
water / money / time / snow / information / homework などは a を付けられず、複数形にもしない。したがって There is を使う。
例）There is a lot of water in the bottle.（びんにはたくさんの水が入っている）
例）There is a lot of snow in Hokkaido.（北海道にはたくさんの雪がある）
※ a lot of は数えられる名詞にも数えられない名詞にも使えるので、a lot of があるだけでは複数と判断できない。

■ 使えない場合
すでに話題に出ている特定のもの（the / my / this が付く名詞）には There is を使わない。
例）× There is my bag on the table.　○ My bag is on the table.

⚠ 注意：疑問文は Is there 〜? / Are there 〜?、答えは Yes, there is. / No, there is not. のように there をくり返す。`,
      },
    ],
    trapExamples: [
      {
        question: '「びんの中にたくさんの水が入っています」を英語にしなさい。',
        wrongAnswer: 'There are a lot of water in the bottle.',
        trapExplanation:
          '「たくさんの」という日本語と a lot of という語句から、量が多い＝複数だと判断して are を選んでしまう。water が数えられない名詞であることを見落としている。',
        correctAnswer: 'There is a lot of water in the bottle.',
        correctExplanation:
          'be動詞を合わせる相手は a lot of ではなく water。water は数えられない名詞なので単数扱いになり、There is を使う。a lot of books なら There are a lot of books. となる。うしろの名詞が数えられるかどうかで決める。',
      },
      {
        question: '「私の兄は大阪に住んでいます」を英語にしなさい。',
        wrongAnswer: 'My brother is live in Osaka.',
        trapExplanation:
          '「住んでいます」の「います」を be動詞だと考え、is を足してしまう。日本語の補助動詞「〜ている」を英語の be動詞に対応させる思いこみが原因である。',
        correctAnswer: 'My brother lives in Osaka.',
        correctExplanation:
          'live は一般動詞なので be動詞は不要。主語 My brother は三人称単数なので lives とする。be動詞と一般動詞の原形を並べることはできない、という原則をここでも使う。',
      },
    ],
  },

  // ───────────── 2. 過去形と規則動詞のつづり変化（s076〜s080） ─────────────
  {
    id: 'koko_eigo_s076',
    subject: 'eigo',
    examType: 'koko',
    title: '過去形①：過去形は「今と切りはなされた一点」',
    description: '過去形が指すのは今とつながらない過去の一点だと理解し、過去を示す語句を押さえる',
    intro:
      '「私は彼に会いました」と言うとき、それが「今もその話の続きにいる」のか「昨日のできごととして終わっている」のかで、英語は形を変えます。過去形が受け持つのは後者、つまり今から切りはなされた過去の一点です。この線引きが時制全体の土台になります。',
    order: 576,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '過去形は「今とは切りはなされた、過去のある時点」でのできごとを表す。',
      'yesterday / last 〜 / 〜 ago / then / at that time / in 2020 は過去形の合図。',
      'これらの語句は現在完了（have＋過去分詞）といっしょには使えない。',
      '過去形は主語が何であっても形が変わらない（was / were だけが例外）。',
      '否定文・疑問文では did を使い、動詞は原形にもどす。',
    ],
    sections: [
      {
        heading: '過去形が指す時間',
        figureId: 'lf_kokoeigoext03_076',
        body: `過去形は、今から切りはなされた過去のある時点で起きたこと、またはその時点で成り立っていたことを表す。「今どうなっているか」については何も述べていない、というのが最大の特徴である。

例）I lost my key yesterday.（私は昨日かぎをなくした）
→ 今そのかぎが見つかったかどうかは、この文からはわからない。

例）He lived in Kyoto for five years.（彼は5年間京都に住んでいた）
→ 今は京都に住んでいないことが読み取れる。今も住んでいるなら現在完了 He has lived in Kyoto for five years. を使う。

■ 過去を示す語句（時の副詞）
yesterday（昨日）／last night, last week, last year（昨夜・先週・昨年）／three days ago, ten years ago（3日前・10年前）／then, at that time（そのとき）／in 2020, in the Edo period（2020年に・江戸時代に）／when I was a child（子どものころ）

これらの語句が文中にあれば、動詞は原則として過去形になる。

★ ポイント：ago は「今から〜前」という意味なので必ず過去形とともに使う。before は「（ある時点より）前に」なので、現在完了とも使える（I have seen him before.）。ago と before を取りちがえないこと。`,
      },
      {
        heading: '過去形と現在完了の線引き',
        body: `高校入試では、過去形と現在完了のどちらを選ぶかが選択問題で頻繁に問われる。判断のかぎは「時を示す語句が、今とつながっているか」である。

■ 過去形しか使えない語句
yesterday / last week / 〜 ago / then / just now / in 1995
例）○ I saw him yesterday.　× I have seen him yesterday.
「昨日」という過去の一点を指定した時点で、今とのつながりは切れている。だから現在完了とは共存できない。

■ 現在完了と使う語句
just / already / yet / ever / never / since 〜 / for 〜（継続）
例）I have just finished my homework.（ちょうど宿題を終えたところだ）

■ 日本語では区別が見えない
「私は彼に会いました」はどちらにもなりうる。
・I met him last week.（先週会った。今のことは述べていない）
・I have met him before.（今までに会ったことがある。今の経験として持っている）

⚠ 注意：現在完了は高校入試では中3で学ぶ内容だが、過去形の意味を正確につかむためには対比が欠かせない。ここでは「過去形＝今と切れている」という一点だけをしっかり押さえておけばよい。`,
      },
    ],
    trapExamples: [
      {
        question: '正しい文を選びなさい。ア I have met him yesterday.　イ I met him yesterday.',
        wrongAnswer: 'ア I have met him yesterday.',
        trapExplanation:
          '「会ったことがある」という経験の意味を出そうとして現在完了を選んでしまう。yesterday が現在完了と共存できないことを知らないと、意味だけで選んで誤る。',
        correctAnswer: 'イ I met him yesterday.',
        correctExplanation:
          'yesterday は過去の一点を指定する語句なので、今とのつながりを表す現在完了とはいっしょに使えない。yesterday / last week / 〜 ago / then が見えたら、迷わず過去形を選ぶ。経験を言いたいなら I have met him before. と before を使う。',
      },
      {
        question: '次の文の誤りを直しなさい。When did you went to Kyoto?',
        wrongAnswer: '誤りはない（過去のことだから went でよい）',
        trapExplanation:
          '文全体が過去の話なので、動詞もすべて過去形にしなければならないと考えてしまう。did がすでに過去を表していることを見落としている。',
        correctAnswer: 'When did you go to Kyoto?',
        correctExplanation:
          'did のうしろの動詞は必ず原形。過去の情報は did が担当しているので、動詞まで過去形にすると二重になる。否定文 I did not go to Kyoto. も同じく原形を使う。現在形の does / do とまったく同じしくみである。',
      },
    ],
  },

  {
    id: 'koko_eigo_s077',
    subject: 'eigo',
    examType: 'koko',
    title: '過去形②：規則動詞の -ed のつづり変化',
    description: '-ed を付けるときのつづりの四つの規則を、まぎらわしい例とともに区別する',
    intro:
      'stop の過去形は stoped ではなく stopped、study は studyed ではなく studied。同じ「-ed を付ける」なのに、なぜつづりが変わるのでしょう。実はどれも「読み方が変わってしまわないように」という一本の理由で説明できます。理由がわかれば丸暗記が減ります。',
    order: 577,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '原則は動詞の原形にそのまま -ed を付ける（play → played）。',
      'e で終わる語は -d だけを付ける（like → liked、use → used）。',
      '子音字＋y で終わる語は y を i に変えて -ed（study → studied、carry → carried）。',
      '母音字＋y はそのまま -ed（play → played、enjoy → enjoyed）。',
      '「短母音＋子音字1つ」で終わり、そこにアクセントがある語は子音字を重ねて -ed（stop → stopped）。',
      'visit / open / happen はアクセントが前にあるので子音字を重ねない（visited / opened）。',
    ],
    sections: [
      {
        heading: '四つのつづり規則',
        body: `■ ①原則：そのまま -ed
play → played　want → wanted　watch → watched　help → helped　look → looked　call → called

■ ②e で終わる語：-d だけ
like → liked　use → used　live → lived　close → closed　arrive → arrived　hope → hoped
※ もともと語末に e があるので、-ed の e を重ねない。

■ ③子音字＋y：y を i に変えて -ed
study → studied　carry → carried　cry → cried　try → tried　worry → worried
一方、y の直前が母音字（a, i, u, e, o）ならそのまま -ed。
play → played　enjoy → enjoyed　stay → stayed
※ stayed を stayied、played を plaied と書く誤りが非常に多い。y の直前の一字だけを見て判断する。

■ ④短母音＋子音字1つ（アクセントが最後の音節）：子音字を重ねて -ed
stop → stopped　plan → planned　drop → dropped
　　　　shop → shopped　prefer → preferred
※ 重ねる条件は、最後が「母音字1つ＋子音字1つ」で終わり、かつその部分にアクセントがあること。

★ ポイント：④で子音字を重ねるのは、重ねないと母音の読み方が変わってしまうからである。stoped と書くと o を「オウ」と読ませる形（hope → hoped と同じ形）になってしまう。だから p を重ねて短い「オ」を守る。`,
      },
      {
        heading: '重ねる・重ねないの見分け方',
        body: `子音字を重ねるかどうかは、次の順に確かめると確実である。

■ 手順
①語末が「母音字1つ＋子音字1つ」で終わっているか。
　→ stop（o＋p）は該当。help（l＋p）は子音字が二つ並ぶので該当しない。
　→ rain（a＋i＋n）は母音字が二つなので該当しない。
②その音節にアクセントがあるか。
　→ stop は一音節なので当然アクセントがある → 重ねる（stopped）。
　→ visit は vis-it でアクセントが前にある → 重ねない（visited）。
　→ open は o-pen でアクセントが前 → 重ねない（opened）。
　→ prefer は pre-fer でアクセントが後ろ → 重ねる（preferred）。

■ よくまちがえる語
visit → visited（× visitted）　open → opened（× openned）
happen → happened（× happenned）　listen → listened（× listenned）
rain → rained（× rainned）　help → helped（× helpped）
travel → traveled（アメリカ式）／travelled（イギリス式）どちらも可

■ w と x は重ねない
show → showed　snow → snowed　fix → fixed
語末が w / x のときは重ねる規則の対象外である。

⚠ 注意：規則動詞と不規則動詞を混同しないこと。read や put は -ed を付けない不規則動詞なので、この四つの規則の対象外である。`,
      },
    ],
    trapExamples: [
      {
        question: '「私たちは昨日3時間そこにいた（滞在した）」を英語にしなさい。stay を使うこと。',
        wrongAnswer: 'We stayied there for three hours yesterday.',
        trapExplanation:
          'study → studied の規則を覚えていると、y で終わる語はすべて y を i に変えると思いこんでしまう。y の直前が母音字か子音字かを確認していない。',
        correctAnswer: 'We stayed there for three hours yesterday.',
        correctExplanation:
          'stay は sta-y で、y の直前が母音字 a なので y をそのままにして -ed を付ける。同じ理由で play → played、enjoy → enjoyed、buy は不規則で bought となる。y の一つ前の文字だけを見て判断する。',
      },
      {
        question: '「私は昨日祖母を訪ねた」を英語にしなさい。visit を使うこと。',
        wrongAnswer: 'I visitted my grandmother yesterday.',
        trapExplanation:
          'stop → stopped の規則を広げすぎて、語末が「母音字＋子音字」に見える語をすべて重ねてしまう。アクセントの位置という条件が抜けている。',
        correctAnswer: 'I visited my grandmother yesterday.',
        correctExplanation:
          '子音字を重ねるのは「母音字1つ＋子音字1つで終わり、かつその音節にアクセントがある」語だけ。visit は vis-it とアクセントが前にあるので重ねずに visited とする。open → opened、happen → happened、listen → listened も同じ理由である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s078',
    subject: 'eigo',
    examType: 'koko',
    title: '過去形③：-ed の発音 [t] [d] [id]',
    description: '規則動詞の -ed の三つの発音を、直前の音が無声か有声かで判断できるようにする',
    intro:
      'washed と wanted と played。つづりはどれも -ed で終わるのに、読み方は「ト」「ティド」「ド」と三通りです。入試の発音問題はほぼこの三分類から出ます。のどに手を当てて、直前の音がふるえるかどうかを確かめるだけで判別できます。',
    order: 578,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '-ed の発音は [t] [d] [id] の三種類。',
      '直前が無声音（p, k, f, s, sh, ch）なら [t]：stopped / looked / washed / watched。',
      '直前が有声音（母音・b, g, v, z, m, n, l, r）なら [d]：played / called / lived / opened。',
      '直前が [t] か [d] の音なら [id] と読み、音節が一つ増える：wanted / needed / visited / started。',
      'used は [juːzd] で [d]。visited は [id]。つづりだけでは決まらないので直前の音で判断する。',
      '同じ判断の仕方が、名詞の複数形や三単現の -s の発音にも使える。',
    ],
    sections: [
      {
        heading: '三つの発音の決まり方',
        body: `-ed の発音は、直前の音が何かだけで機械的に決まる。

■ ①[t] と読む：直前が無声音のとき
無声音とは、のどをふるわせずに出す音（p, k, f, s, sh, ch, th の一部）。
stopped [stɑpt]／looked [lʊkt]／helped [helpt]／washed [wɑʃt]／watched [wɑtʃt]／laughed [læft]／passed [pæst]

■ ②[d] と読む：直前が有声音のとき
有声音とは、のどがふるえる音（すべての母音と b, g, v, z, m, n, l, r など）。
played [pleɪd]／called [kɔːld]／opened [ˈoʊpənd]／lived [lɪvd]／used [juːzd]／enjoyed [ɪnˈdʒɔɪd]／studied [ˈstʌdid]

■ ③[id] と読む：直前が [t] か [d] の音のとき
そのまま -ed をつなげると [tt] [dd] となって発音しにくいので、間に母音を入れる。この結果、音節が一つ増える。
wanted [ˈwɑntɪd]／needed [ˈniːdɪd]／visited [ˈvɪzɪtɪd]／started [ˈstɑːrtɪd]／ended [ˈendɪd]／decided [dɪˈsaɪdɪd]

★ ポイント：確かめ方は「のどに指を当てて、-ed の直前の音だけを出してみる」。ふるえれば [d]、ふるえなければ [t]。ただし t / d の音そのものなら [id]。この順で確認すれば必ず決まる。`,
      },
      {
        heading: '入試でねらわれる語と、-s の発音との共通点',
        body: `■ つづりにだまされない
判断の基準は「つづりの最後の文字」ではなく「発音の最後の音」である。
・washed：語末の文字は h だが、音は [ʃ]（無声）なので [t]。
・used：語末の文字は e だが、音は [z]（有声）なので [d]。
・laughed：gh は [f]（無声）と読むので [t]。
・liked：語末の e は読まないので、直前の音は [k]（無声）→ [t]。

■ [id] になるのは意外に少ない
[id] になるのは、直前が t / d の音の語だけ。中学で学ぶ範囲では次のあたりが中心である。
wanted, needed, visited, started, waited, invited, decided, ended, added, painted, planted, counted, lasted, hated

■ -s の発音も同じ考え方
名詞の複数形・三単現の -s も、直前の音で決まる。
・[s]：無声音の後 → books, cats, cups, likes, stops
・[z]：有声音の後 → dogs, boys, pens, plays, runs
・[iz]：s, z, sh, ch, ge の音の後 → buses, boxes, watches, washes, uses
「無声なら無声、有声なら有声、同じ仲間の音が続くときは母音をはさむ」という原理は -ed も -s も共通である。

⚠ 注意：発音問題では「下線部の発音が他と異なるものを選べ」という形式が多い。四つのうち三つが [t]、一つだけ [id] というように、[id] をまぎれこませる出題が定番である。`,
      },
    ],
    trapExamples: [
      {
        question: '下線部 -ed の発音が wanted と同じものを選びなさい。ア looked　イ played　ウ needed　エ washed',
        wrongAnswer: 'ア looked',
        trapExplanation:
          'wanted の -ed を「タ行の音だから [t] だ」と考え、同じく [t] で終わる looked を選んでしまう。wanted は実際には [id] と読んで音節が一つ増えることを聞き取れていない。',
        correctAnswer: 'ウ needed',
        correctExplanation:
          'wanted は直前が [t] の音なので [id]。同じく直前が [d] の音である needed も [id] になる。looked と washed は直前が無声音で [t]、played は直前が有声音で [d]。まず直前の音が t / d かどうかを確認するのが最短である。',
      },
      {
        question: '正誤を判定しなさい。「used の -ed は [id] と発音する」',
        wrongAnswer: '正しい（use の語末が e なので [id] になる）',
        trapExplanation:
          'つづりの上で s と e が並んでいるため、[iz] や [id] のように母音をはさむ音になると思いこんでしまう。実際の発音では語末の e は読まないことを忘れている。',
        correctAnswer: '誤り。used は [juːzd] で、-ed は [d] と発音する',
        correctExplanation:
          'use の発音は [juːz] で、最後の音は有声音の [z]。したがって -ed は [d] となり、音節は増えない。[id] になるのは直前が [t] か [d] の音のときだけである。つづりではなく音で判断する原則をここで確認しておく。',
      },
    ],
  },
  {
    id: 'koko_eigo_s079',
    subject: 'eigo',
    examType: 'koko',
    title: '過去形④：did を使った否定文・疑問文',
    description: 'did ＋ 動詞の原形という形を徹底し、主語をたずねる疑問文の例外まで押さえる',
    intro:
      '「あなたは彼を見ましたか」を Did you saw him? と書いてしまう人が絶えません。did がすでに「過去」という仕事をしているので、そのうしろの動詞は手ぶらでよいのです。ここでは did の使い方と、did を使わない例外を一気に整理します。',
    order: 579,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      `過去の否定文は〈主語＋did not＋動詞の原形〉。短縮形は didn't。`,
      '過去の疑問文は〈Did＋主語＋動詞の原形 〜?〉。答えは Yes, I did. / No, I did not.',
      'did のうしろの動詞は必ず原形。過去形にすると二重表示になり誤り。',
      '主語が何であっても did は形を変えない（三単現の区別がない）。',
      '疑問詞が主語そのものをたずねる文では did を使わず、動詞をそのまま過去形にする。',
      'be動詞の過去の文には did を使わない（was / were を前に出す）。',
    ],
    sections: [
      {
        heading: 'did ＋ 原形という形',
        body: `■ 否定文
一般動詞の前に did not を置き、動詞は原形にもどす。
例）I did not (didn't) watch TV last night.（私は昨夜テレビを見なかった）
例）She did not (didn't) come to school yesterday.（彼女は昨日学校に来なかった）
→ came ではなく come。過去の情報は did が背負っている。

■ 疑問文
Did を文頭に出し、動詞は原形。
例）Did you see him at the station?（駅で彼を見かけましたか）
例）Did your brother study for the test?（お兄さんはテスト勉強をしましたか）

■ 答え方
Yes, I did. / No, I did not (didn't). のように did でそろえる。
例）Did she call you? － Yes, she did.

■ 疑問詞のある疑問文
〈疑問詞＋did＋主語＋原形 〜?〉
例）What did you do last Sunday?（この前の日曜日は何をしましたか）
例）Where did they go?（彼らはどこへ行きましたか）
例）Why did he leave so early?（なぜ彼はそんなに早く帰ったのですか）

★ ポイント：did は現在形の do / does に対応する形で、しくみはまったく同じである。現在形で「does のうしろは原形」と覚えたなら、過去形も「did のうしろは原形」で通る。`,
      },
      {
        heading: 'did を使わない二つの場面',
        body: `■ ①疑問詞が主語そのものをたずねるとき
Who / What / Which が主語の位置にあるときは、疑問文の語順に組みかえる必要がない。動詞をそのまま過去形にする。
例）Who broke this window?（だれがこの窓を割ったのですか）
　　× Who did break this window?
例）What happened yesterday?（昨日、何があったのですか）
　　× What did happen yesterday?
例）Which team won the game?（どちらのチームが試合に勝ったのですか）

見分け方は、疑問詞の直後に主語がもう一つあるかどうか。
・Who broke it? → who のうしろに主語がない＝who が主語 → did 不要。
・What did you break? → what のうしろに you という主語がある＝what は目的語 → did 必要。

■ ②be動詞の過去の文
be動詞の文では did を使わない。was / were を前に出したり、うしろに not を置いたりする。
例）× Did you busy yesterday?　○ Were you busy yesterday?
例）× He did not was at home.　○ He was not at home.

⚠ 注意：進行形の過去（過去進行形）も be動詞の文なので did は使わない。× Did you watching TV? ではなく ○ Were you watching TV? となる。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは昨日、彼に会いましたか」を英語にしなさい。',
        wrongAnswer: 'Did you saw him yesterday?',
        trapExplanation:
          '文全体が過去のことなので、動詞も過去形にしなければ気持ちが悪いと感じてしまう。did がすでに過去を表していることを見落として、過去を二重に表してしまう。',
        correctAnswer: 'Did you see him yesterday?',
        correctExplanation:
          'Did のうしろの動詞は必ず原形なので see を使う。過去の情報は did が担当している。否定文 I did not see him yesterday. も同じく原形。現在形の Does she play 〜? とまったく同じしくみだと考えるとよい。',
      },
      {
        question: '「だれがこの窓を割ったのですか」を英語にしなさい。',
        wrongAnswer: 'Who did break this window?',
        trapExplanation:
          '疑問文だから did を使う、という手順が身についているため、疑問詞が主語になっている場合まで機械的に did を入れてしまう。',
        correctAnswer: 'Who broke this window?',
        correctExplanation:
          'Who が主語そのものをたずねる文では、語順を入れかえる必要がないので did を使わず、動詞を過去形 broke にする。目印は「疑問詞のうしろに別の主語があるかどうか」。What did you break? のように主語があれば did が必要になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s080',
    subject: 'eigo',
    examType: 'koko',
    title: '過去形⑤：be動詞の過去形 was / were',
    description: 'was と were の使い分けと、There was / were 構文での主語の一致を確認する',
    intro:
      '「彼らは昨日忙しかった」を They was busy. と書いてしまうのは、was と were の相手を取りちがえたからです。be動詞は英語で唯一、主語によって過去形が変わる動詞です。だからこそ主語の中心語を見つける力が、そのまま得点になります。',
    order: 580,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の過去形は I / he / she / it・単数 → was、you・複数 → were。',
      'you は一人を指すときも were を使う（You were kind.）。',
      `否定は was not (wasn't) / were not (weren't)、疑問文は Was / Were を文頭に出す。`,
      'There was / There were のあとの名詞に be動詞を合わせる。',
      '主語が A of B の形なら A に合わせる（One of the boys was 〜）。',
      'be動詞の過去の文に did は使わない。',
    ],
    sections: [
      {
        heading: 'was と were の使い分け',
        figureId: 'lf_kokoeigoext03_080',
        body: `■ 対応表
I was ／ He was ／ She was ／ It was ／ Tom was ／ This book was
You were ／ We were ／ They were ／ My parents were ／ These books were

現在形では I だけが am という特別な形を持つが、過去形では I は he や she と同じ was を使う。逆に you は、一人を指すときでも were になる。
例）You were very kind to me.（あなたはとても親切にしてくれた）

■ 否定文と疑問文
否定：He was not (wasn't) at home.／They were not (weren't) tired.
疑問：Was he at home? － Yes, he was. / No, he was not.
　　　Were they tired? － Yes, they were. / No, they were not.

■ 意味は二つ
①「〜だった」：She was a nurse ten years ago.
②「〜にいた・あった」：I was in the library then.

★ ポイント：be動詞の過去形は「過去のある期間ずっとそうだった」という幅のある状態を表す。He was busy yesterday. は昨日一日を通じて忙しかったということで、今忙しいかどうかについては何も言っていない。`,
      },
      {
        heading: 'There was / were と主語の中心語',
        body: `■ There was / There were
うしろに来る名詞に合わせる。
例）There was a big tree in the park.（公園に大きな木が1本あった）
例）There were many people at the station.（駅にはたくさんの人がいた）
数えられない名詞は単数扱い。
例）There was a lot of snow last winter.（昨年の冬は雪がたくさん降った）

■ 主語の中心語を見つける
主語が長いと、be動詞を合わせる相手をまちがえやすい。
例）One of my friends was in Kyoto at that time.（友人の一人はそのとき京都にいた）
　　→ 中心語は One なので was。friends に引かれて were としない。
例）The books on the desk were mine.（机の上の本は私のものだった）
　　→ 中心語は The books なので were。
例）My brother and I were in the same class.（兄と私は同じクラスだった）
　　→ 「兄と私」で二人なので were。

■ did を使わない
be動詞の文なので、否定・疑問に did は使わない。
例）× Did you tired yesterday?　○ Were you tired yesterday?
例）× She did not was happy.　○ She was not happy.

⚠ 注意：of / in / on / with で始まる語句は主語の中心にならない。前置詞から始まるまとまりをかっこでくくって外し、残った名詞に be動詞を合わせるとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼らは昨日とても忙しかった」を英語にしなさい。',
        wrongAnswer: 'They was very busy yesterday.',
        trapExplanation:
          '過去形の be動詞は was だと単純に覚えてしまい、主語が複数のときは were になることが抜けている。現在形では are と一つだけなのに、過去形では二つあることを意識できていない。',
        correctAnswer: 'They were very busy yesterday.',
        correctExplanation:
          '主語 They は複数なので were を使う。was を使うのは I / he / she / it や単数の名詞が主語のとき。you は一人を指す場合でも were になる点もあわせて確認しておく。',
      },
      {
        question: '「私の友人の一人はそのとき京都にいました」を英語にしなさい。',
        wrongAnswer: 'One of my friends were in Kyoto at that time.',
        trapExplanation:
          'be動詞のすぐ前にある friends という複数形に引かれて were を選んでしまう。主語の中心語が One であることを見落としている。',
        correctAnswer: 'One of my friends was in Kyoto at that time.',
        correctExplanation:
          '主語の中心語は One で単数なので was を使う。of my friends は One を説明する前置詞句にすぎない。前置詞から始まるまとまりをかっこでくくって外し、残った語に be動詞を合わせると確実である。',
      },
    ],
  },

  // ───────────── 3. 不規則動詞の過去形（s081〜s086） ─────────────
  {
    id: 'koko_eigo_s081',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞①：変化の四つの型で整理する',
    description: 'A-A-A / A-B-A / A-B-B / A-B-C の四つの型に分けて、不規則動詞を効率よく覚える',
    intro:
      '不規則動詞を「ゴー・ウェント・ゴーン」と何十個も丸暗記するのは、思い出すときにも順番に唱えなければならず効率が悪いやり方です。実は変化のしかたは四つの型しかありません。型ごとにまとめて覚えれば、思い出す手がかりが増え、書きまちがいも減ります。',
    order: 581,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '不規則動詞は〈原形－過去形－過去分詞〉の変化のしかたで四つの型に分けられる。',
      'A-A-A型（三つとも同じ）：put / cut / set / let / hit / cost / read。',
      'A-B-A型（原形と過去分詞が同じ）：come / become / run。',
      'A-B-B型（過去形と過去分詞が同じ）：make / buy / teach / think など最も数が多い。',
      'A-B-C型（三つとも違う）：go / see / write / take / eat など。',
      '過去形と過去分詞を取りちがえる誤りが最頻出。過去形は単独で述語になれる形だと意識する。',
    ],
    sections: [
      {
        heading: '四つの型と代表例',
        body: `不規則動詞は〈原形 － 過去形 － 過去分詞〉の三つの形を持つ。その一致のしかたで四つに分類できる。

■ A-A-A型（三つとも同じ形）
put－put－put／cut－cut－cut／set－set－set／let－let－let／hit－hit－hit／shut－shut－shut／cost－cost－cost／hurt－hurt－hurt／read－read－read（つづりは同じだが過去形・過去分詞の発音は [red]）

■ A-B-A型（原形と過去分詞が同じ）
come－came－come／become－became－become／run－ran－run
数は少ないので、この三つを覚えれば足りる。

■ A-B-B型（過去形と過去分詞が同じ）
make－made－made／buy－bought－bought／teach－taught－taught／think－thought－thought／bring－brought－brought／catch－caught－caught／find－found－found／keep－kept－kept／leave－left－left／meet－met－met／say－said－said／tell－told－told
不規則動詞の中でいちばん数が多い型である。

■ A-B-C型（三つとも違う）
go－went－gone／see－saw－seen／write－wrote－written／take－took－taken／eat－ate－eaten／give－gave－given／know－knew－known／speak－spoke－spoken／drink－drank－drunk／begin－began－begun

★ ポイント：暗記のときは必ず三つ一組で声に出す。過去形だけを覚えると、現在完了や受け身を学んだときに使えない知識になってしまう。`,
      },
      {
        heading: '過去形と過去分詞を取りちがえない',
        body: `入試で最も多い誤りは、過去形を書くべきところに過去分詞を書いてしまう（またはその逆）という取りちがえである。

■ 見分けの原則
・過去形は、それだけで文の述語になれる形。
　例）I went to Kyoto last year.（○）
・過去分詞は、単独では述語になれない。have / has / had、または be動詞といっしょに使う。
　例）I have gone to Kyoto.（現在完了）／The letter was written by Tom.（受け身）
　例）× I gone to Kyoto last year.（gone は単独で使えない）

■ まぎらわしい組み合わせ
・go－went－gone：「行った」は went。gone は have gone / be gone の形でしか使わない。
・see－saw－seen：「見た」は saw。
・write－wrote－written：「書いた」は wrote。
・take－took－taken：「取った」は took。
・eat－ate－eaten：「食べた」は ate。
・drink－drank－drunk：「飲んだ」は drank。

■ 規則動詞のふりをする語に注意
語尾が -ed でなくても不規則動詞である。read に -ed を付けて readed としたり、buy を buyed としたりする誤りは、規則動詞の規則を広げすぎたことが原因である。

⚠ 注意：read は現在形・過去形・過去分詞がすべて read とつづるが、発音は現在形が [riːd]、過去形・過去分詞が [red] と変わる。読解でも発音問題でもねらわれる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は昨夜その本を読んだ」を英語にしなさい。read を使うこと。',
        wrongAnswer: 'I readed the book last night.',
        trapExplanation:
          '過去形は -ed を付けて作るという規則動詞の知識を当てはめてしまう。read が不規則動詞で、つづりが変わらないことを知らないと必ずこう書いてしまう。',
        correctAnswer: 'I read the book last night.',
        correctExplanation:
          'read は read－read－read と変化する A-A-A型の不規則動詞で、つづりは変わらない。ただし発音は現在形が [riːd]、過去形が [red] と変わる。文中に last night があるので過去形だと判断でき、読むときは [red] と発音する。',
      },
      {
        question: '正誤を判定しなさい。「go の過去形は gone である」',
        wrongAnswer: '正しい（go－went－gone なので gone が過去形）',
        trapExplanation:
          '三つ一組で暗記していても、どれが過去形でどれが過去分詞かの区別があいまいだと、最後に唱えた形を過去形だと思いこんでしまう。',
        correctAnswer: '誤り。過去形は went、gone は過去分詞である',
        correctExplanation:
          '〈原形－過去形－過去分詞〉の順で go－went－gone なので、過去形は went。gone は have gone のように have / has / had とともに使う形で、単独では述語になれない。「昨日行った」は I went there yesterday. である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s082',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞②：形が変わらない A-A-A 型',
    description: 'put / cut / read など形の変わらない動詞を覚え、文中で現在か過去かを見分ける',
    intro:
      'He put his bag there. この文は「置く」でしょうか「置いた」でしょうか。put は原形も過去形も同じ形なので、単語だけを見ても決まりません。決め手は文の中にあります。形が変わらない動詞こそ、まわりの語を読む練習にうってつけです。',
    order: 582,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'A-A-A型は原形・過去形・過去分詞がすべて同じつづり：put / cut / set / let / hit / shut / cost / hurt / read / spread。',
      '現在形で主語が三人称単数なら -s が付く（puts / cuts / costs）ので、-s の有無が現在か過去かの手がかりになる。',
      '時を表す語句（yesterday / every day）も判断の決め手になる。',
      'read だけは発音が変わる（現在 [riːd]／過去・過去分詞 [red]）。',
      'A-A-A型に -ed を付けてはいけない（× putted / × cutted / × hitted）。',
    ],
    sections: [
      {
        heading: 'A-A-A型の代表語',
        body: `形が三つとも同じ不規則動詞は数が限られている。まとめて覚えてしまうのが早い。

put－put－put（置く）
cut－cut－cut（切る）
set－set－set（置く・設定する）
let－let－let（〜させる）
hit－hit－hit（打つ・ぶつかる）
shut－shut－shut（閉める）
cost－cost－cost（費用がかかる）
hurt－hurt－hurt（傷つける・痛む）
read－read－read（読む）
spread－spread－spread（広がる・広げる）
quit－quit－quit（やめる）

■ 共通する特徴
語尾が t または d で終わる短い語が多い。もともと -ed を付けても発音がほとんど変わらないため、変化しない形が残ったと考えられている。

■ 例文
例）She put the key on the table.（彼女はかぎをテーブルに置いた）
例）The trip cost me ten thousand yen.（その旅行に1万円かかった）
例）I hurt my leg during the game.（試合中に足をけがした）
例）He shut the door quietly.（彼は静かにドアを閉めた）

★ ポイント：これらの語に -ed を付けた putted / cutted / hitted / costed という形は存在しない。規則動詞のつづり規則をここに持ちこまないこと。`,
      },
      {
        heading: '現在か過去かを文の中から決める',
        body: `形が変わらないので、文の中の手がかりから時制を判断する必要がある。手がかりは二つある。

■ ①三単現の -s があるかどうか
主語が三人称単数のとき、現在形なら -s が付き、過去形なら付かない。
例）He puts his bag there every day.（彼は毎日そこにかばんを置く）＝現在形
例）He put his bag there yesterday.（彼は昨日そこにかばんを置いた）＝過去形
主語が I / you / 複数のときはこの手がかりが使えないので、②を使う。

■ ②時を表す語句
every day / usually / always → 現在形
yesterday / last week / then / 〜 ago → 過去形
例）I read a book every night.（毎晩本を読む）＝現在形、[riːd]
例）I read a book last night.（昨夜本を読んだ）＝過去形、[red]

■ ③助動詞・do / does / did のうしろは原形
例）He did not cut the paper.（彼は紙を切らなかった）
例）Can you shut the window?（窓を閉めてくれますか）

⚠ 注意：長文読解でも put / read / cost が出てきたら、-s の有無と時を表す語句を必ず確認する。ここを読みちがえると、できごとの順序をまちがえて設問全体を落とすことがある。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は毎日そこにかばんを置く」を英語にしなさい。put を使うこと。',
        wrongAnswer: 'He put his bag there every day.',
        trapExplanation:
          'put は形が変わらないと覚えているため、現在形でも何も付けなくてよいと思ってしまう。三単現の -s は「形が変わらない動詞」にも付くことを見落としている。',
        correctAnswer: 'He puts his bag there every day.',
        correctExplanation:
          'A-A-A型でも、現在形で主語が三人称単数なら -s が付いて puts になる。この -s の有無が、現在か過去かを見分ける最大の手がかりでもある。He put his bag there yesterday. なら -s が付かず過去形になる。',
      },
      {
        question: '「そのかさは2000円した」を英語にしなさい。cost を使うこと。',
        wrongAnswer: 'The umbrella costed 2,000 yen.',
        trapExplanation:
          '過去形は -ed を付けて作るという原則を当てはめてしまう。cost が A-A-A型の不規則動詞で、-ed 形を持たないことを知らないと必ずこう書く。',
        correctAnswer: 'The umbrella cost 2,000 yen.',
        correctExplanation:
          'cost は cost－cost－cost と変化し、costed という形は存在しない。同じく putted / cutted / hitted / letted もすべて誤り。文中に過去を示す文脈があっても形は変えず、そのまま cost と書く。',
      },
    ],
  },

  {
    id: 'koko_eigo_s083',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞③：原形にもどる A-B-A 型',
    description: 'come / become / run の三語を中心に、原形と過去分詞が同じ型を確実にする',
    intro:
      'come－came－come。最初と最後が同じ形にもどるので、慣れないうちは「どっちが過去形だったか」がわからなくなります。しかしこの型に入る語は実質三つだけです。三語を確実にすれば、この型で失点することはなくなります。',
    order: 583,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'A-B-A型は原形と過去分詞が同じ形になる型。',
      '中学で扱うのは come－came－come、become－became－become、run－ran－run の三語が中心。',
      '過去形はいずれも真ん中の形（came / became / ran）。',
      'come の過去形を comed、run の過去形を runned とするのは誤り。',
      'become は「〜になる」で、うしろに名詞・形容詞が来る（become a teacher / become popular）。',
    ],
    sections: [
      {
        heading: 'A-B-A型の三語',
        body: `■ 変化と意味
come－came－come（来る）
become－became－become（〜になる）
run－ran－run（走る・経営する）

become は come に接頭辞が付いた語なので、変化のしかたも come とそろっている。この二語をセットで覚えると忘れにくい。

■ 例文
例）She came here yesterday.（彼女は昨日ここへ来た）
例）My brother became a doctor last year.（兄は昨年医者になった）
例）He ran to the station this morning.（彼は今朝、駅まで走った）

■ 過去分詞として使う場合
例）She has just come home.（彼女はちょうど帰宅したところだ）
例）The story has become famous.（その話は有名になった）
例）I have run in this park many times.（この公園で何度も走ったことがある）

■ become の使い方
うしろには名詞か形容詞が来る。
例）He became a famous singer.（名詞）
例）The room became warm.（形容詞）
※ 「〜になる」でも、get warm（暖かくなる）／turn red（赤くなる）のように、変化の種類によって動詞を使い分けることがある。

★ ポイント：この型で答えを書くときは、まず「過去形は真ん中の形」と言い聞かせてから書く。came / became / ran のどれも、原形とはつづりが明らかに違うので、迷ったら原形と見比べればよい。`,
      },
      {
        heading: 'まちがえやすい書き方と関連表現',
        body: `■ 規則動詞化した誤り
× comed　× becomed　× runned　× runed
これらはすべて存在しない形である。不規則動詞に -ed を付けないという原則をここでも守る。

■ run の多様な意味
run は「走る」以外の意味でも入試に出る。
例）My father runs a small restaurant.（父は小さなレストランを経営している）
例）The bus runs every ten minutes.（そのバスは10分おきに走っている）
例）The river runs through the town.（その川は町を貫いて流れている）
過去形はいずれも ran。
例）He ran a bookstore for twenty years.（彼は20年間書店を経営していた）

■ come を使う重要表現
come true（実現する）／come from 〜（〜の出身である・〜に由来する）／come back（もどる）／come to 〜（〜するようになる）
例）My dream came true.（私の夢は実現した）
例）She came from Australia.（彼女はオーストラリアの出身だった）

■ 日本語とのずれ
日本語では「行くよ」と言う場面でも、相手のところへ向かうときは英語で come を使う。
例）Dinner is ready. － OK, I am coming.（食事ができたよ。－わかった、今行く）

⚠ 注意：I am coming. を「私は来ています」と訳すと意味が通らない。come は「話し相手のいる方へ近づく」動詞だと理解しておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女は昨日ここへ来ました」を英語にしなさい。',
        wrongAnswer: 'She come here yesterday.',
        trapExplanation:
          'come－came－come という変化で最初と最後が同じ形なので、過去形も come でよいと勘ちがいしてしまう。A-A-A型（put など）と混同するのが原因である。',
        correctAnswer: 'She came here yesterday.',
        correctExplanation:
          'A-B-A型は原形と過去分詞が同じであって、過去形は真ん中の came である。同様に become の過去形は became、run の過去形は ran。過去形は必ず三つのうち真ん中の形だと確認してから書く。',
      },
      {
        question: '正誤を判定しなさい。「Dinner is ready. への返事として I am going. が自然である」',
        wrongAnswer: '正しい（「今行く」なので go を使う）',
        trapExplanation:
          '日本語の「行く」をそのまま go に置きかえてしまう。英語では、話し相手のいる方へ近づく場合は come を使うという視点の違いを知らないと必ずこう答える。',
        correctAnswer: '誤り。I am coming. が自然である',
        correctExplanation:
          'come は「話し手または聞き手のいる場所へ近づく」、go は「その場から離れていく」という視点の動詞である。呼ばれて相手のところへ向かうときは I am coming. と言う。過去形なら I came right away.（すぐに行った）となる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s084',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞④：数が多い A-B-B 型',
    description: '過去形と過去分詞が同じ型を音のグループごとに整理し、say と tell の使い分けも押さえる',
    intro:
      'buy－bought、teach－taught、think－thought。この三つは意味こそばらばらですが、音の終わり方がそっくりです。不規則動詞で最も数が多い A-B-B 型は、音のグループごとにまとめると一気に覚えられます。耳を使う暗記に切りかえましょう。',
    order: 584,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'A-B-B型は過去形と過去分詞が同じ形になる型で、不規則動詞の中で最も数が多い。',
      '-ought / -aught グループ：buy－bought、think－thought、bring－brought、teach－taught、catch－caught。',
      '-t で終わるグループ：keep－kept、sleep－slept、leave－left、feel－felt、build－built、send－sent、spend－spent。',
      '母音が変わるグループ：find－found、meet－met、win－won、hold－held、sit－sat。',
      '-old / -aid グループ：tell－told、sell－sold、say－said、pay－paid。',
      'say は「〜と言う」で人を直接目的語に取らない。人に伝えるときは tell を使う。',
    ],
    sections: [
      {
        heading: '音のグループで覚える',
        body: `■ ①-ought / -aught（発音はどちらも [ɔːt]）
buy－bought－bought（買う）
think－thought－thought（思う）
bring－brought－brought（持ってくる）
fight－fought－fought（戦う）
teach－taught－taught（教える）
catch－caught－caught（つかまえる）
つづりは ought と aught の二通りだが、発音は同じ。teach と catch だけが aught だと覚えるとよい。

■ ②語尾が -t になる
keep－kept－kept（保つ）／sleep－slept－slept（眠る）／leave－left－left（去る・残す）／feel－felt－felt（感じる）／mean－meant－meant（意味する）／build－built－built（建てる）／send－sent－sent（送る）／spend－spent－spent（過ごす・使う）／lose－lost－lost（失う・負ける）

■ ③母音が変わる
find－found－found（見つける）／meet－met－met（会う）／win－won－won（勝つ）／hold－held－held（持つ・開催する）／sit－sat－sat（すわる）／stand－stood－stood（立つ）／understand－understood－understood（理解する）／hear－heard－heard（聞こえる）／get－got－got（得る）

■ ④-old / -aid
tell－told－told（伝える）／sell－sold－sold（売る）／say－said－said（言う）／pay－paid－paid（払う）
※ said の発音は [sed]、paid は [peɪd]。

★ ポイント：意味ではなく音の似ているものをまとめると、思い出すときの手がかりが増える。声に出して三つ一組で言う練習を毎日少しずつ続けるのが結局いちばん早い。`,
      },
      {
        heading: 'say / tell / speak / talk の使い分け',
        body: `A-B-B型には「言う・話す」を表す動詞が集まっており、使い分けが入試で頻繁に問われる。

■ say（said－said）：言った内容に重点
うしろに「言った言葉・内容」が来る。人を直接続けることはできない。人を示すときは to を入れる。
例）He said, "I am tired."（彼は「疲れた」と言った）
例）He said that he was tired.（彼は疲れたと言った）
例）He said something to me.（彼は私に何か言った）
　　× He said me something.

■ tell（told－told）：伝える相手に重点
〈tell ＋ 人 ＋ 内容〉の語順を取る。
例）He told me the truth.（彼は私に本当のことを話した）
例）She told us an interesting story.（彼女は私たちにおもしろい話をしてくれた）
慣用表現：tell a lie（うそをつく）／tell the truth（本当のことを言う）／tell A from B（AとBを見分ける）

■ speak（spoke－spoken）：一方的に話す・言語を話す
例）He spoke to me in English.（彼は英語で私に話しかけた）
例）She speaks three languages.（彼女は3か国語を話す）

■ talk（規則動詞：talked）：たがいに話し合う
例）We talked about the plan for an hour.（私たちは1時間その計画について話し合った）

⚠ 注意：「〜に言った」という日本語だけで say を選ぶと誤る。うしろに人が直接続くなら tell、内容が続くなら say と判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は私に本当のことを言った」を英語にしなさい。',
        wrongAnswer: 'He said me the truth.',
        trapExplanation:
          '日本語の「私に言った」をそのまま said me と並べてしまう。say は言った内容を続ける動詞で、人を直接目的語に取れないことを知らないと必ずこう書く。',
        correctAnswer: 'He told me the truth.',
        correctExplanation:
          '〈人＋内容〉の語順を取れるのは tell である。say を使うなら He said the truth to me. のように to が必要になる。「うしろに人が直接続くなら tell」と形で判断するのが確実である。tell の過去形・過去分詞はどちらも told。',
      },
      {
        question: '「彼は私たちに数学を教えてくれた」を英語にしなさい。teach を使うこと。',
        wrongAnswer: 'He teached us math.',
        trapExplanation:
          '規則動詞の -ed を付ける規則を当てはめてしまう。teach が -aught グループの不規則動詞であることを覚えていないと、そのまま teached と書いてしまう。',
        correctAnswer: 'He taught us math.',
        correctExplanation:
          'teach－taught－taught と変化する。同じ -aught グループの catch－caught、-ought グループの buy－bought、think－thought、bring－brought とまとめて音で覚えるとよい。teached という形は存在しない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s085',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞⑤：まぎらわしいペアを区別する',
    description: 'lie / lay、rise / raise、find / found、fall / feel など取りちがえやすい組を整理する',
    intro:
      '「彼は手をあげた」を He rose his hand. と書くと不正解です。rise と raise は形も意味も似ていますが、片方はうしろに目的語を取り、もう片方は取りません。まぎらわしいペアは、意味ではなく「目的語を取るかどうか」で切り分けるのが確実です。',
    order: 585,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      'rise－rose－risen（のぼる・上がる）は目的語を取らない。raise－raised－raised（〜を上げる）は目的語を取る。',
      'lie－lay－lain（横になる）は目的語なし。lay－laid－laid（〜を置く）は目的語あり。',
      'lie－lied－lied（うそをつく）は規則動詞で、横になる lie とは別語。',
      'find－found－found（見つける）と found－founded－founded（設立する）は別の動詞。',
      'fall－fell－fallen（落ちる）と feel－felt－felt（感じる）、fill（満たす）を混同しない。',
      '目的語を取るか取らないかで切り分けると、意味からの推測より確実に選べる。',
    ],
    sections: [
      {
        heading: '目的語の有無で切り分ける',
        body: `英語には「自分が〜する」動詞と「〜を…する」動詞が別語になっている組がある。うしろに目的語（〜を）が続くかどうかで見分ける。

■ rise と raise
rise－rose－risen（自分が上がる・のぼる）目的語なし
例）The sun rises in the east.（太陽は東からのぼる）
例）Prices rose sharply last year.（昨年、物価が急に上がった）
raise－raised－raised（〜を上げる・育てる）目的語あり
例）He raised his hand to ask a question.（彼は質問するために手をあげた）
例）They raise cows on the farm.（彼らはその農場で牛を育てている）
※ raise は規則動詞である点に注意。

■ lie と lay
lie－lay－lain（横になる・ある）目的語なし
例）She lay on the sofa for an hour.（彼女は1時間ソファーに横になっていた）
例）The town lies at the foot of the mountain.（その町は山のふもとにある）
lay－laid－laid（〜を置く・横たえる）目的語あり
例）He laid the baby on the bed.（彼は赤ちゃんをベッドに寝かせた）

■ 最大のわな
lie の過去形が lay で、lay の原形とまったく同じつづりになる。そのため She lay on the sofa. は「横になっていた」という過去形であって、「置いた」ではない。

★ ポイント：まず「うしろに〜を（目的語）があるか」を見る。あれば raise / lay、なければ rise / lie。意味の似ている日本語から選ぼうとすると必ず迷う。`,
      },
      {
        heading: 'その他のまぎらわしい組',
        body: `■ lie（うそをつく）は規則動詞
lie－lied－lied で、横になる lie－lay－lain とは変化がまったく違う。
例）He lied to me about his age.（彼は年齢について私にうそをついた）
名詞の lie（うそ）を使って tell a lie とも言う。

■ find と found
find－found－found（見つける・わかる）
例）I found my key under the desk.（机の下でかぎを見つけた）
found－founded－founded（設立する）＝規則動詞
例）They founded the school in 1950.（彼らは1950年にその学校を設立した）
つづりが同じ found が二か所に出てくるので、文の意味で判断する。

■ fall / feel / fill
fall－fell－fallen（落ちる・倒れる）
例）Many leaves fell in the garden.（庭に葉がたくさん落ちた）
feel－felt－felt（感じる）
例）I felt cold last night.（昨夜は寒く感じた）
fill－filled－filled（満たす）＝規則動詞
例）She filled the glass with water.（彼女はコップを水で満たした）

■ sit と set
sit－sat－sat（すわる）目的語なし／set－set－set（置く・設定する）目的語あり
例）He sat on the bench.（彼はベンチにすわった）
例）He set the box on the table.（彼は箱をテーブルに置いた）

⚠ 注意：これらのペアは、書きかえや誤文訂正の材料として好んで出題される。三つ一組の変化と「目的語を取るか」の二点をセットで覚えておくこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は質問するために手をあげた」を英語にしなさい。',
        wrongAnswer: 'He rose his hand to ask a question.',
        trapExplanation:
          '「上げる」という日本語から rise を選び、その過去形 rose を使ってしまう。rise が目的語を取れない動詞であることを意識していないと、意味だけで選んで誤る。',
        correctAnswer: 'He raised his hand to ask a question.',
        correctExplanation:
          'うしろに his hand という目的語があるので、目的語を取る raise を使う。raise は規則動詞なので過去形は raised。rise は「自分が上がる」動詞で The sun rises. のように目的語を取らない。目的語の有無で切り分けるのが確実である。',
      },
      {
        question: '「彼女は1時間ソファーに横になっていた」を英語にしなさい。lie を使うこと。',
        wrongAnswer: 'She laid on the sofa for an hour.',
        trapExplanation:
          'lie の過去形が lay であることを知らず、似た形の laid を選んでしまう。あるいは「横になる」と「横たえる」を区別せず、lay－laid－laid の変化表を当てはめてしまう。',
        correctAnswer: 'She lay on the sofa for an hour.',
        correctExplanation:
          '目的語がないので「横になる」の lie－lay－lain を使い、過去形は lay になる。laid は「〜を置く」lay－laid－laid の過去形なので、目的語が必要である。lie の過去形 lay と lay の原形が同じつづりになる点が、この組の最大の難所である。',
      },
    ],
  },

  {
    id: 'koko_eigo_s086',
    subject: 'eigo',
    examType: 'koko',
    title: '不規則動詞⑥：入試での問われ方と総整理',
    description: '発音・語形変化・文脈判断という三方向から、不規則動詞の総仕上げをする',
    intro:
      'I read the book last night. この read を [riːd] と読むか [red] と読むかで、あなたが時制を正しくつかめているかが試されます。不規則動詞は単なる暗記事項ではなく、文全体の時間関係を読む力とつながっています。ここで総仕上げをします。',
    order: 586,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      'read は現在形 [riːd]、過去形・過去分詞 [red] と発音が変わる。',
      'said [sed]／paid [peɪd]／heard [hɜːrd]／bought [bɔːt] など、発音がねらわれる過去形を押さえる。',
      'cost / put / hit / let に -ed を付けた形は存在しない。',
      '過去形は単独で述語になれるが、過去分詞は have / has / had か be動詞を必要とする。',
      '文中の時を表す語句を先に探し、それに合わせて動詞の形を決める。',
      'did / can / will のうしろは、不規則動詞でも必ず原形。',
    ],
    sections: [
      {
        heading: '発音でねらわれる不規則動詞',
        body: `不規則動詞は発音問題の定番材料である。つづりから予想した音と実際の音がずれる語をまとめておく。

■ 母音が短くなる
read [riːd] → read [red]
mean [miːn] → meant [ment]
keep [kiːp] → kept [kept]
feel [fiːl] → felt [felt]
say [seɪ] → said [sed]
hear [hɪər] → heard [hɜːrd]

■ つづりから予想しにくい音
bought / thought / brought / taught / caught はすべて [ɔːt] で終わり、gh は発音しない。
paid [peɪd]（規則的な音だが、つづりが payed でない点に注意）
lost [lɔːst]／won [wʌn]（one と同じ音）／done [dʌn]／come [kʌm]

■ read の判断が意味を決める
例）I read the book every night.（毎晩読む）→ [riːd]
例）I read the book last night.（昨夜読んだ）→ [red]
つづりが同じなので、every night と last night という時を表す語句だけが手がかりになる。音読でここを読み分けられるかどうかが、時制を理解しているかどうかの試金石になる。

★ ポイント：暗記のときは必ず声に出す。目で見て覚えただけでは、発音問題にも長文の音読にも対応できない。`,
      },
      {
        heading: '入試での三つの問われ方',
        body: `■ ①語形変化を書かせる問題
「（　）内の語を適切な形に直しなさい」という形式。手順は次のとおり。
①文中の時を表す語句を探す（yesterday / every day / now / tomorrow）。
②主語を確認する（三人称単数かどうか）。
③did / can / will / to のうしろなら原形にする。
例）He （teach） us English last year. → taught
例）He （teach） us English every year. → teaches
例）He did not （teach） us English. → teach

■ ②発音を選ばせる問題
下線部の発音が同じもの・異なるものを選ぶ形式。-ed の三分類（[t] [d] [id]）と、read / said / heard のような不規則な音がねらわれる。

■ ③誤文訂正
規則動詞化した誤り（buyed / teached / readed / costed）や、過去形と過去分詞の取りちがえ（× I gone there / ○ I went there）が材料になる。

■ 覚え直しのコツ
覚えていない語だけを書き出して、三つ一組で声に出す。全体を最初から通して唱えるのは時間の無駄になりやすい。まちがえた語に印を付け、翌日と一週間後にもう一度確認する、という二回の復習を挟むと定着しやすい。

⚠ 注意：過去分詞は現在完了・受け身で必ず必要になる。過去形だけを覚えて先へ進むと、中3で同じ動詞をもう一度覚え直すことになる。`,
      },
    ],
    trapExamples: [
      {
        question: 'I read the book last night. の read の発音として正しいものを選びなさい。ア [riːd]　イ [red]',
        wrongAnswer: 'ア [riːd]',
        trapExplanation:
          'つづりが原形とまったく同じなので、現在形だと思いこんで [riːd] と読んでしまう。last night という時を表す語句を見落としている。',
        correctAnswer: 'イ [red]',
        correctExplanation:
          'last night があるのでこの read は過去形であり、[red] と発音する。read はつづりが変わらない A-A-A型なので、時を表す語句だけが唯一の手がかりになる。I read the book every night. なら現在形で [riːd] と読む。',
      },
      {
        question: '次の文の誤りを直しなさい。The trip costed me twenty thousand yen.',
        wrongAnswer: '誤りはない（過去のことなので -ed を付けた costed でよい）',
        trapExplanation:
          '規則動詞の作り方を当てはめて -ed を付けてしまう。cost が形の変わらない不規則動詞であることを知らないと、この誤りに気づけない。',
        correctAnswer: 'The trip cost me twenty thousand yen.',
        correctExplanation:
          'cost は cost－cost－cost と変化し、costed という形は存在しない。同じく put / cut / hit / let / shut / hurt もすべて -ed を付けない。文の意味が過去でも形は変えずに書く。',
      },
    ],
  },
  // ───────────── 4. 現在進行形と ing のつづり（s087〜s091） ─────────────
  {
    id: 'koko_eigo_s087',
    subject: 'eigo',
    examType: 'koko',
    title: '現在進行形①：be動詞＋ing が表す「今の幅」',
    description: '現在進行形の形と意味を、動作が始まって終わっていない「幅」としてとらえる',
    intro:
      '「本を読んでいる」というとき、読み始めてはいるがまだ読み終わってはいません。この「始まり」と「終わり」の間にいる状態を、英語は be動詞と ing 形の二語で表します。時間を点ではなく幅でとらえる、というのが進行形の考え方です。',
    order: 587,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '現在進行形は〈be動詞（am / is / are）＋動詞のing形〉。be動詞を落とさない。',
      '意味は「今まさに〜している最中だ」。動作が始まっていて、まだ終わっていない状態を表す。',
      'be動詞は主語に合わせる（I am 〜ing / He is 〜ing / They are 〜ing）。',
      'now / at this moment / Look! / Listen! / right now は進行形の合図。',
      '一時的な状態（今週だけ・今学期だけ）を表すこともできる。',
      '進行形の中心は be動詞なので、疑問文・否定文は be動詞で作る。',
    ],
    sections: [
      {
        heading: '形と意味',
        figureId: 'lf_kokoeigoext03_087',
        body: `■ 形
〈am / is / are ＋ 動詞のing形〉
I am reading a book.（私は本を読んでいる）
He is playing the guitar.（彼はギターをひいている）
They are waiting for the bus.（彼らはバスを待っている）

be動詞は主語に合わせて選ぶ。I なら am、he / she / it・単数なら is、you・複数なら are である。

■ 意味は「動作の途中」
現在進行形は、動作がすでに始まっていて、まだ終わっていないことを表す。時間の一点ではなく、今をはさむ短い幅を指している。
例）I am writing a letter.
→ 書き始めた（過去）から、書き終わる（未来）までの途中に今がある。

■ 一時的な状態
「ふだんはそうでないが、今の期間だけはそうしている」ことを表す場合もある。
例）I am staying at my uncle's house this week.（今週はおじの家に泊まっている）
例）She is working at a bookstore this month.（彼女は今月、書店で働いている）
どちらも「ずっとそうだ」ではなく「今の期間だけ」という含みがある。

★ ポイント：be動詞を落とすのが最頻出の誤りである。× I reading a book now. は、動詞が ing 形だけで文の述語になれないため、文として成立しない。ing 形は単独では述語になれない、と覚えておく。`,
      },
      {
        heading: '進行形の合図になる語句',
        body: `文中に次のような語句があれば、現在進行形を選ぶ可能性が高い。

■ 時を示す語句
now（今）／right now（ちょうど今）／at this moment（この瞬間）／at present（現在）／these days（最近）
例）What are you doing now?（今、何をしていますか）

■ 呼びかけの語
Look!（見て）／Listen!（聞いて）
どちらも「今この場で起きていること」に注意を向けさせる語なので、うしろは進行形になる。
例）Look! It is raining.（見て、雨が降っているよ）
例）Listen! Someone is singing upstairs.（聞いて、上の階でだれかが歌っている）

■ 現在形との対比
例）My mother cooks dinner every day.（母は毎日夕食を作る）＝習慣・現在形
例）My mother is cooking dinner now.（母は今、夕食を作っている）＝今の動作・進行形
同じ日本語「作っている」でも、every day か now かで形が変わる。日本語ではなく、時を示す語句を見て決める。

■ 進行形にできない動詞がある
know / like / want / have（所有）などの状態を表す動詞は、原則として進行形にしない。これは後の課でくわしく扱う。
例）× I am knowing him.　○ I know him.

⚠ 注意：ing 形は、動詞に ing を付ける際につづりが変わることがある（run → running、make → making）。つづりの規則は次の課で整理する。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は今、母を手伝っています」を英語にしなさい。',
        wrongAnswer: 'I helping my mother now.',
        trapExplanation:
          '「〜している」という日本語に対応するのは ing 形だと覚えているため、ing 形だけを置いて be動詞を忘れてしまう。日本語には be動詞にあたる語がないので、意識しないと抜けやすい。',
        correctAnswer: 'I am helping my mother now.',
        correctExplanation:
          '現在進行形は〈be動詞＋ing形〉の二語で一つの述語になる。ing 形だけでは述語になれないので、be動詞は必ず必要である。主語 I に対応する be動詞は am。書き終えたら be動詞があるかを必ず確認する。',
      },
      {
        question: '「彼らはテレビを見ているのですか」を英語にしなさい。',
        wrongAnswer: 'Do they watching TV?',
        trapExplanation:
          'watch という一般動詞が見えるので、疑問文は Do で作ると考えてしまう。進行形の中心が be動詞であることを見落としている。',
        correctAnswer: 'Are they watching TV?',
        correctExplanation:
          '進行形〈be動詞＋ing形〉の文は be動詞の文として扱うので、疑問文は be動詞を文頭に出す。答えも Yes, they are. / No, they are not. と be動詞でそろえる。否定文も They are not watching TV. と be動詞のうしろに not を置く。',
      },
    ],
  },

  {
    id: 'koko_eigo_s088',
    subject: 'eigo',
    examType: 'koko',
    title: '現在進行形②：ing 形のつづり変化',
    description: 'e を取る型・子音字を重ねる型・ie を y に変える型の三つを、例外もふくめて整理する',
    intro:
      'swim に ing を付けると swiming ではなく swimming、make は makeing ではなく making。ing のつづりも -ed と同じで、「読み方が変わってしまわないように」という一つの理由で説明がつきます。理由から入れば、覚える量はぐっと減ります。',
    order: 588,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '原則はそのまま -ing（play → playing、study → studying、watch → watching）。',
      '発音しない e で終わる語は e を取って -ing（make → making、come → coming、write → writing、use → using）。',
      'see / agree / be は e を残す（seeing / agreeing / being）。',
      '「短母音＋子音字1つ」でその音節にアクセントがあれば子音字を重ねる（run → running、swim → swimming、begin → beginning）。',
      'ie で終わる語は ie を y に変えて -ing（die → dying、lie → lying、tie → tying）。',
      'y で終わる語は -ed と違い、y をそのまま残して -ing（study → studying、carry → carrying）。',
    ],
    sections: [
      {
        heading: '三つのつづり規則と例外',
        body: `■ ①原則：そのまま -ing
play → playing　watch → watching　read → reading　open → opening　study → studying　carry → carrying　enjoy → enjoying
※ -ed では study → studied と y を i に変えたが、-ing では y をそのまま残す。ここが -ed との大きな違いである（× studiing は誤り）。

■ ②発音しない e で終わる語：e を取って -ing
make → making　come → coming　write → writing　use → using　take → taking　have → having　give → giving　drive → driving　dance → dancing　close → closing
※ 語末の e はもともと読まない字なので、-ing を付けるときに落とす。

【例外】e を残す語
see → seeing　agree → agreeing　be → being
これらの e は発音に関わっているので落とさない。seing / beeing と書くのはどちらも誤りである。

■ ③短母音＋子音字1つ（アクセントがその音節）：子音字を重ねる
run → running　swim → swimming　sit → sitting　get → getting　put → putting　stop → stopping　cut → cutting　begin → beginning　forget → forgetting　shop → shopping
※ 重ねる条件は -ed のときと同じ。visit → visiting、open → opening、listen → listening はアクセントが前なので重ねない。

■ ④ie で終わる語：ie → y に変えて -ing
die → dying　lie → lying　tie → tying
i が二つ続く diing のような形を避けるための変化である。

★ ポイント：②③④はいずれも「そのままつなげると読みにくい・読み方が変わってしまう」ことを避けるための調整である。理由から理解すれば丸暗記の量は少なくてすむ。`,
      },
      {
        heading: '-ed のつづりとの比較',
        body: `-ed と -ing は似た規則を持つが、y の扱いだけが決定的に違う。ここを混ぜないことが重要である。

■ 比較表
・play：played／playing（どちらもそのまま）
・study：studied（y → i）／studying（y はそのまま）
・carry：carried（y → i）／carrying（y はそのまま）
・make：made（不規則）／making（e を取る）
・like：liked（-d だけ）／liking（e を取る）
・stop：stopped（重ねる）／stopping（重ねる）
・visit：visited（重ねない）／visiting（重ねない）
・die：died（そのまま -d）／dying（ie → y）

■ なぜ -ing では y を残すのか
-ing の i と、y を変えた i が並ぶと studiing のように i が二つ続いてしまう。それを避けるため y のまま残す。逆に -ed では i が重ならないので y → i の変化が起きる。

■ 書きまちがえやすい語トップ
running（× runing）／swimming（× swiming）／sitting（× siting）／getting（× geting）／beginning（× begining）／coming（× comeing）／writing（× writeing）／making（× makeing）／lying（× lieing）／dying（× dieing）

⚠ 注意：begin → beginning は be-gin とアクセントが後ろにあるので n を重ねる。一方 listen → listening は lis-ten とアクセントが前なので重ねない。アクセントの位置を確認する習慣をつけること。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は今、プールで泳いでいます」を英語にしなさい。swim を使うこと。',
        wrongAnswer: 'He is swiming in the pool now.',
        trapExplanation:
          '原則どおりそのまま -ing を付ければよいと考え、子音字を重ねる条件を確認していない。swim が「短母音＋子音字1つ」で終わることに気づいていない。',
        correctAnswer: 'He is swimming in the pool now.',
        correctExplanation:
          'swim は s-w-i-m で、母音字1つ＋子音字1つで終わり、一音節なのでアクセントもそこにある。したがって m を重ねて swimming とする。同じ理由で run → running、sit → sitting、get → getting、begin → beginning となる。',
      },
      {
        question: '正誤を判定しなさい。「see の ing 形は seing である」',
        wrongAnswer: '正しい（e で終わる語は e を取って -ing を付けるから）',
        trapExplanation:
          'make → making、come → coming の規則を一律に当てはめてしまう。e を落とすのは「発音しない e」だけであるという条件を見落としている。',
        correctAnswer: '誤り。see の ing 形は seeing である',
        correctExplanation:
          'see の語末の ee は発音に関わっているので落とせない。同じく agree → agreeing、be → being も e を残す。e を取るのは make / come / write / use のように語末の e を読まない語に限られる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s089',
    subject: 'eigo',
    examType: 'koko',
    title: '現在進行形③：否定文・疑問文と答え方',
    description: '進行形の疑問文・否定文を be動詞で作り、What are you doing? への答え方まで身につける',
    intro:
      'What are you doing? と聞かれて I do my homework. と答えると、少しずれた返事になります。聞かれた形にそろえて答えるのが英語の基本です。ここでは進行形の疑問文と、その答え方の型を固めておきましょう。',
    order: 589,
    studyPeriod: '中1',
    targetLevel: 'kiso',
    keyPoints: [
      '否定文は〈主語＋be動詞＋not＋ing形〉。not は be動詞のうしろに置く。',
      '疑問文は〈be動詞＋主語＋ing形 〜?〉。Do / Does は使わない。',
      '答えは Yes, I am. / No, I am not. のように be動詞でそろえる。',
      'Yes の答えでは短縮形にできない（× Yes, I m.）。',
      'What are you doing? には I am 〜ing. と進行形で答える。',
      'Who is 〜ing? のように疑問詞が主語のときは、そのまま is ＋ ing形を続ける。',
    ],
    sections: [
      {
        heading: '否定文・疑問文の作り方',
        body: `進行形の文は be動詞の文として扱う。したがって否定文も疑問文も be動詞を動かして作る。

■ 否定文
be動詞のうしろに not を置く。
例）I am not watching TV.（テレビを見ていない）
例）He is not (isn't) studying now.（彼は今、勉強していない）
例）They are not (aren't) playing outside.（彼らは外で遊んでいない）

■ 疑問文
be動詞を主語の前に出す。
例）Are you listening to me?（私の話を聞いていますか）
例）Is she waiting for us?（彼女は私たちを待っていますか）
例）Are they having lunch?（彼らは昼食を食べているところですか）

■ 答え方
Yes, I am. / No, I am not.
Yes, she is. / No, she is not (isn't).
Yes, they are. / No, they are not (aren't).
※ 肯定の答えでは短縮形が使えない。× Yes, I'm. × Yes, she's. は誤りである。否定の答えでは No, she isn't. のように短縮できる。

■ 疑問詞のある疑問文
〈疑問詞＋be動詞＋主語＋ing形 〜?〉
例）What are you doing?（何をしているのですか）
例）Where is he going?（彼はどこへ行くところですか）
例）Why are they running?（なぜ彼らは走っているのですか）

★ ポイント：疑問詞が主語そのものをたずねるときは語順を変えない。
例）Who is playing the piano?（だれがピアノをひいているのですか）`,
      },
      {
        heading: '聞かれた形にそろえて答える',
        body: `英語の受け答えでは、聞かれた文の形をそのまま利用して答えるのが原則である。

■ What are you doing? への答え
○ I am doing my homework.（宿題をしています）
× I do my homework.（宿題をします＝習慣の意味になってしまう）
質問が進行形なら、答えも進行形にそろえる。

■ What do you do? との違い
・What are you doing?＝今何をしているところですか
・What do you do?＝ふだん何をしていますか／職業は何ですか
形が一字違うだけで意味が大きく変わる。会話文の空所補充でねらわれる。

■ 会話でよく使う応答
Are you free now? － No, I am cooking dinner.（今、夕食を作っています）
What is your sister doing? － She is talking on the phone.（電話で話しています）
Is it raining? － Yes, it is. Take an umbrella with you.

■ 主語をたずねる疑問文への答え
Who is singing? － Ken is.（ケンです）
答えの部分は〈主語＋be動詞〉だけでよく、ing 形はくり返さない。

⚠ 注意：進行形の疑問文に Yes, I do. と答えるのは誤り。質問文の中の be動詞を確認してから答えを書く習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: 'What are you doing? への答えとして適切なものを選びなさい。ア I do my homework.　イ I am doing my homework.',
        wrongAnswer: 'ア I do my homework.',
        trapExplanation:
          '「宿題をしています」という日本語をそのまま現在形に置きかえてしまう。質問が進行形であることを見ずに、意味だけで答えを選んでいる。',
        correctAnswer: 'イ I am doing my homework.',
        correctExplanation:
          '質問が What are you doing? と進行形なので、答えも I am doing 〜. と進行形にそろえる。I do my homework. は「ふだん宿題をします」という習慣の意味になり、今何をしているかという問いへの答えにならない。',
      },
      {
        question: 'Are you studying English? に「はい」と答えるとき、正しいのはどちらか。ア Yes, I am.　イ Yes, I m.',
        wrongAnswer: `イ Yes, I'm.`,
        trapExplanation:
          '文中では I am を I m と短縮できるので、答えの部分でも同じように短縮できると考えてしまう。短縮形が使えない位置があることを知らないと誤る。',
        correctAnswer: 'ア Yes, I am.',
        correctExplanation:
          `肯定の短い答えでは be動詞を短縮できない。Yes, I am. / Yes, she is. / Yes, they are. と書く。一方、否定の答えは No, I am not. や No, I'm not. のように短縮できる。文末で強く発音される語は短縮しない、と覚えておくとよい。`,
      },
    ],
  },

  {
    id: 'koko_eigo_s090',
    subject: 'eigo',
    examType: 'koko',
    title: '現在進行形④：手配ずみの予定を表す進行形',
    description: '現在進行形が近い未来の確定した予定を表す用法を、使える動詞とともに理解する',
    intro:
      'I am leaving Tokyo tomorrow. これは「今、東京を出発しているところ」ではなく「明日、東京を発ちます」という意味です。すでに切符を取ってあるような、手配の終わった予定を、英語は進行形で表します。時間の幅が未来にずれる用法です。',
    order: 590,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '現在進行形は「すでに手配・準備が終わっている近い未来の予定」を表すことがある。',
      'go / come / leave / arrive / start / visit / meet / stay など、往来・発着を表す動詞でよく使う。',
      '文中に tomorrow / next Sunday / this evening など未来を示す語句が置かれる。',
      '単なる意志や、まだ決まっていない予定には使えない（そのときは will や be going to）。',
      '状態動詞は進行形にできないので、この用法にも使えない。',
    ],
    sections: [
      {
        heading: '進行形が未来を表すとき',
        figureId: 'lf_kokoeigoext03_090',
        body: `現在進行形は「今〜している」が基本の意味だが、未来を示す語句とともに使うと「すでに決まっている近い予定」を表す。

例）I am leaving Tokyo tomorrow morning.（明日の朝、東京を発ちます）
例）We are having a party this Saturday.（今週の土曜日にパーティーを開きます）
例）She is coming to Japan next month.（彼女は来月、日本に来ます）
例）They are moving to Osaka in April.（彼らは4月に大阪へ引っ越します）

■ この用法が使える条件
①すでに手配・準備が終わっている、または相手と約束ずみであること。
②近い未来のことであること。
③未来を示す語句（tomorrow / next 〜 / this evening / at five）が文中にあること。

■ よく使う動詞
往来・発着に関する動詞と相性がよい。
go / come / leave / arrive / start / return / visit / meet / stay / have（会・食事を開く）

■ 現在の動作との区別
時を示す語句で区別する。
例）I am leaving now.（今、出るところです）＝現在の動作
例）I am leaving tomorrow.（明日、出発します）＝未来の予定

★ ポイント：進行形の未来用法は「決まりごととして予定表に書きこんである」感じを表す。逆に、その場で思いついた意志には使えない。`,
      },
      {
        heading: '使えない場合と、他の未来表現との違い',
        body: `■ 決まっていない予定には使えない
まだ手配していない、単なる希望や意志は進行形では表せない。
例）× I am becoming a doctor in the future.
　　○ I am going to be a doctor in the future.（医者になるつもりです）
　　○ I want to be a doctor in the future.（医者になりたい）
将来の夢は手配ずみの予定ではないので、進行形は使えない。

■ 状態動詞は使えない
know / like / be などは進行形にできないので、この用法にも入らない。
例）× I am knowing him next week.（意味をなさない）

■ 三つの未来表現の使い分け（概略）
・進行形：手配ずみの個人的な予定（I am meeting him at five.）
・be going to：前から決めていた予定・今の状況からの予測（It is going to rain.）
・will：その場で決めた意志・単なる予測（I will help you.）
くわしくは未来表現の課で扱うが、進行形がいちばん「もう決まっている度合い」が高いと考えてよい。

■ 時刻表・時間割は現在形
公的に決まっている発着時刻などは、進行形ではなく現在形で表す。
例）The train leaves at seven.（その電車は7時に出ます）

⚠ 注意：日本語の「〜します」だけを手がかりにすると、四つの表現のどれを選ぶか決められない。「もう手配してあるか」「その場で決めたか」を確認して選ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は将来、医者になるつもりです」を英語にしなさい。',
        wrongAnswer: 'I am becoming a doctor in the future.',
        trapExplanation:
          '進行形が未来の予定を表すと習った直後に、あらゆる未来の話に進行形を使ってしまう。進行形が使えるのは「すでに手配が終わっている近い予定」に限られることを見落としている。',
        correctAnswer: 'I am going to be a doctor in the future.',
        correctExplanation:
          '将来の夢は手配ずみの予定ではないので進行形にできない。前から考えている意志なら be going to、単なる希望なら I want to be a doctor. と表す。in the future という遠い未来を指す語句も、進行形と相性が悪い手がかりになる。',
      },
      {
        question: '「彼女は次の日曜日に東京を出発します（切符はすでに買ってある）」を英語にしなさい。',
        wrongAnswer: 'She will leaving Tokyo next Sunday.',
        trapExplanation:
          '未来のことだから will が要ると考え、進行形の ing 形と混ぜてしまう。will のうしろは必ず原形であるという原則が抜けている。',
        correctAnswer: 'She is leaving Tokyo next Sunday.',
        correctExplanation:
          '切符を買ってあるという手配ずみの予定なので、現在進行形で She is leaving Tokyo next Sunday. と表すのが自然である。will を使うなら She will leave Tokyo next Sunday. と原形にする。will と ing 形を並べることはできない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s091',
    subject: 'eigo',
    examType: 'koko',
    title: '現在進行形⑤：現在形との使い分け',
    description: '「いつもそうか」「今だけか」という基準で、現在形と現在進行形を選び分ける',
    intro:
      '「父は銀行で働いています」を My father is working at a bank. と書くと、「今この時期だけ臨時で働いている」という意味になってしまいます。日本語の「〜している」は現在形にも進行形にもなります。決め手は、それが長く続くことか、今だけのことか、です。',
    order: 591,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '現在形は「いつもそう」、現在進行形は「今だけ・今この瞬間」を表す。',
      '職業・住所・性質など長く続くことは現在形（My father works at a bank.）。',
      '目の前で起きている一回の動作は進行形（Look! A dog is running.）。',
      '日本語の「〜している」に引かれず、内容が習慣か今の動作かで決める。',
      'always ＋ 進行形は「いつも〜してばかりいる」といういらだちや強調を表す。',
      '時を示す語句（every day / now / Look!）が最大の手がかりになる。',
    ],
    sections: [
      {
        heading: 'どちらを選ぶかの基準',
        figureId: 'lf_kokoeigoext03_091',
        body: `同じ日本語でも、内容が「いつもそうか」「今だけか」で英語の形が変わる。

■ 現在形を選ぶ場合
①職業・所属：My father works at a bank.（父は銀行で働いている）
②居住・出身：I live in Osaka.（大阪に住んでいる）
③習慣：She goes to the gym twice a week.（週に2回ジムに通っている）
④性質・事実：This machine works well.（この機械はよく動く）

■ 現在進行形を選ぶ場合
①今この瞬間の動作：Look! A dog is running after a cat.（見て、犬がネコを追いかけている）
②今の期間だけの一時的な状態：I am staying with my aunt this week.（今週はおばの家に泊まっている）
③手配ずみの近い予定：We are meeting at six.（6時に会うことになっている）

■ 同じ動詞での対比
・My father works at a bank.（ずっと銀行員だ）
・My father is working at a bank this month.（今月だけ銀行で働いている）
・She teaches English.（英語の先生をしている）
・She is teaching English now.（今、英語を教えている最中だ）

★ ポイント：日本語の「〜している」は、状態にも進行にも使える便利な言い方である。だから日本語から形を決めてはいけない。「何年も続くことか」「数分で終わることか」を考えるとよい。`,
      },
      {
        heading: 'always ＋ 進行形と、そのほかの注意',
        body: `■ always ＋ 進行形
本来「今だけ」を表す進行形に、「いつも」という always を重ねると、話し手の感情（いらだち・あきれ・驚き）がこもった表現になる。
例）He is always complaining about something.（彼はいつも何かに文句ばかり言っている）
例）You are always losing your keys.（君はいつもかぎをなくしてばかりだ）
単に習慣を述べるなら現在形を使う。
例）He always comes to school early.（彼はいつも早く登校する）

■ 目の前の変化を表す進行形
今まさに変化の途中にあることを表せる。
例）The weather is getting warmer.（天気が暖かくなってきている）
例）The number of children is decreasing.（子どもの数が減ってきている）
社会や環境について述べる英作文でよく使う形なので覚えておくとよい。

■ 現在形しか使えない内容
不変の真理・一般的事実は、目の前で起きていても現在形で述べる。
例）Water boils at 100 degrees Celsius.（水はセ氏100度で沸騰する）
※ 目の前のやかんの話なら The water is boiling. と進行形にできる。「一般論か、目の前の一回か」で分かれる。

⚠ 注意：live は「住んでいる」の意味で進行形にもできるが、その場合は「一時的に住んでいる」という意味になる。I am living in Tokyo now. は「今は東京に住んでいる（いずれ移るかもしれない）」という含みを持つ。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の父は銀行で働いています」を英語にしなさい。',
        wrongAnswer: 'My father is working at a bank.',
        trapExplanation:
          '「働いています」という日本語の「〜ています」を進行形だと機械的に判断してしまう。職業として長く続いていることを述べているのに、今この瞬間の動作として表してしまっている。',
        correctAnswer: 'My father works at a bank.',
        correctExplanation:
          '職業のように長く続いていることは現在形で表す。My father is working at a bank. とすると「（ふだんは違うが）今の時期だけ銀行で働いている」という意味になる。日本語の「〜ています」は状態にも進行にも使えるので、内容で判断する。',
      },
      {
        question: '「見て。犬が公園を走っているよ」を英語にしなさい。',
        wrongAnswer: 'Look! A dog runs in the park.',
        trapExplanation:
          '「走る」という動作を現在形で書けばよいと考えてしまう。現在形が「いつもそうだ」という意味になることを意識していないため、目の前の一回の動作を表せていない。',
        correctAnswer: 'Look! A dog is running in the park.',
        correctExplanation:
          'Look! は今この場で起きていることに注意を向けさせる語なので、うしろは必ず進行形になる。A dog runs in the park. だと「その犬はいつも公園を走る」という習慣の意味になってしまう。Listen! のあとも同じく進行形を使う。',
      },
    ],
  },

  // ───────────── 5. 過去進行形（s092〜s095） ─────────────
  {
    id: 'koko_eigo_s092',
    subject: 'eigo',
    examType: 'koko',
    title: '過去進行形①：was / were ＋ ing が表す過去の幅',
    description: '過去のある時点で動作の途中だったことを表す形をつかみ、過去形との違いを理解する',
    intro:
      '「昨夜8時にテレビを見た」と「昨夜8時にテレビを見ていた」。日本語ではひと文字の違いですが、英語では watched と was watching という別の形になります。8時に見始めたのか、8時にはもう見ている途中だったのか。この違いを表すのが過去進行形です。',
    order: 592,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '過去進行形は〈was / were ＋ 動詞のing形〉。',
      '意味は「過去のある時点で〜している最中だった」。',
      'be動詞は主語に合わせる（I / he / she / it・単数 → was、you・複数 → were）。',
      'then / at that time / at eight last night / when 〜 が時点を指定する。',
      '過去形は動作全体が終わったこと、過去進行形はその時点で途中だったことを表す。',
      '否定文・疑問文は be動詞で作る。did は使わない。',
    ],
    sections: [
      {
        heading: '形と意味',
        figureId: 'lf_kokoeigoext03_092',
        body: `■ 形
〈was / were ＋ 動詞のing形〉
I was watching TV at eight last night.（昨夜8時にはテレビを見ていた）
They were playing soccer then.（彼らはそのときサッカーをしていた）
My sister was studying in her room.（姉は自分の部屋で勉強していた）

be動詞の過去形の使い分けは be動詞の課と同じで、I / he / she / it・単数は was、you・複数は were である。

■ 過去形との違い
・I watched TV at eight last night.
　→ 8時にテレビを見た。8時に見始めたと読むのが自然で、動作全体が終わったことを表す。
・I was watching TV at eight last night.
　→ 8時の時点では、すでに見始めていて、まだ見終わっていなかった。

つまり過去進行形は、指定された時点をまたぐ「幅」を表す。動作の始まりと終わりは、その時点の前後にある。

■ 時点を指定する語句
then／at that time（そのとき）／at eight last night（昨夜8時に）／at noon yesterday（昨日の正午に）／when I came home（私が帰宅したとき）
これらがあれば、過去進行形を疑う。

★ ポイント：過去進行形には必ず「いつの話か」を示す語句が必要である。時点の指定がないまま I was watching TV. とだけ言っても、聞き手はいつのことかわからない。`,
      },
      {
        heading: '否定文・疑問文',
        body: `過去進行形も be動詞の文なので、否定文・疑問文は be動詞を使って作る。

■ 否定文
be動詞のうしろに not を置く。
例）I was not (wasn't) sleeping at that time.（そのときは眠っていなかった）
例）They were not (weren't) waiting for us.（彼らは私たちを待っていなかった）

■ 疑問文
be動詞を主語の前に出す。
例）Were you studying then? － Yes, I was. / No, I was not.
例）Was he cooking dinner? － Yes, he was. / No, he was not.

■ 疑問詞のある疑問文
例）What were you doing at eight last night?（昨夜8時には何をしていましたか）
例）Where were they going?（彼らはどこへ行くところだったのですか）
例）Who was playing the piano?（だれがピアノをひいていたのですか）
※ 最後の例のように疑問詞が主語のときは語順を変えない。

■ did を使わない
例）× Did you watching TV then?　○ Were you watching TV then?
例）× The clock didn't working.　○ The clock wasn't working.
ing 形が見えたら be動詞の文だと判断する。

⚠ 注意：What did you do at eight yesterday? と What were you doing at eight yesterday? では意味が違う。前者は「8時に何をしましたか（何を始めましたか）」、後者は「8時には何をしている最中でしたか」である。会話文ではふつう後者が使われる。`,
      },
    ],
    trapExamples: [
      {
        question: '「兄と私はそのとき宿題をしていました」を英語にしなさい。',
        wrongAnswer: 'My brother and I was doing our homework then.',
        trapExplanation:
          'be動詞のすぐ前にある I につられて was を選んでしまう。主語が My brother and I という二人分のまとまりであることを見落としている。',
        correctAnswer: 'My brother and I were doing our homework then.',
        correctExplanation:
          '主語 My brother and I は二人なので複数扱いになり、be動詞は were を使う。and で結ばれた主語は複数になる、という原則をここでも使う。所有格も our homework とそろえる点にも注意する。',
      },
      {
        question: '「その時計は動いていませんでした」を英語にしなさい。',
        wrongAnswer: `The clock didn't working.`,
        trapExplanation:
          '過去の否定文だから did not を使う、という手順を機械的に当てはめてしまう。ing 形があるので be動詞の文であることを見落としている。',
        correctAnswer: `The clock wasn't working.`,
        correctExplanation:
          '過去進行形は〈was / were ＋ ing形〉で、be動詞の文として扱う。したがって否定は be動詞のうしろに not を置いて was not (wasn\'t) working とする。did not を使うなら The clock did not work. と原形にするが、これは「動かなかった」という別の意味になる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s093',
    subject: 'eigo',
    examType: 'koko',
    title: '過去進行形②：when と while の使い分け',
    description: '短い出来事には when ＋ 過去形、続いていた動作には while ＋ 過去進行形という原則を身につける',
    intro:
      '「私が帰宅したとき、母は料理をしていた」。この文には、一瞬で終わる出来事（帰宅）と、しばらく続いていた動作（料理）の二つがあります。英語はこの二つを、when と while で書き分けます。どちらが点でどちらが帯かを決めれば、迷わず書けます。',
    order: 593,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '短い出来事（点）には when ＋ 過去形、続いていた動作（帯）には while ＋ 過去進行形。',
      'When I came home, my mother was cooking. と While my mother was cooking, I came home. は同じ内容。',
      'when / while の節が前に来るときは、節の終わりにコンマを置く。',
      'while のうしろに過去形の一瞬の出来事を置くのは不自然。',
      'while ＋ 過去進行形が二つ並ぶと、二つの動作の同時進行を表せる。',
      'when は「〜したとき」、while は「〜している間に」と訳し分ける。',
    ],
    sections: [
      {
        heading: '点と帯を見分ける',
        figureId: 'lf_kokoeigoext03_093',
        body: `二つの出来事が同じ場面に出てくるとき、まず「一瞬で終わる出来事（点）」と「しばらく続いていた動作（帯）」に分ける。

例文：私が帰宅したとき、母は料理をしていた。
・帰宅した＝一瞬で終わる出来事＝点
・料理をしていた＝しばらく続いていた動作＝帯

■ 書き方は二通り
①点を when で示す
When I came home, my mother was cooking.
②帯を while で示す
While my mother was cooking, I came home.

どちらも同じ内容を表す。従属節を前に置いたときは、節の終わりにコンマを打つ。うしろに置く場合はコンマは不要である。
例）My mother was cooking when I came home.

■ 組み合わせの原則
・when ＋ 過去形（点）… 主節は過去進行形（帯）
・while ＋ 過去進行形（帯）… 主節は過去形（点）
つまり when と while のうしろに来る時制は、原則として逆になる。

■ 訳し分け
when：〜したとき（一瞬）
while：〜している間に（継続）

★ ポイント：日本語の「〜とき」はどちらにも訳せてしまうので、日本語からではなく「一瞬か、続いていたか」で判断する。`,
      },
      {
        heading: 'よくある誤りと発展',
        body: `■ 誤り①：while のうしろに一瞬の出来事を置く
× While the phone rang, I was reading a book.
○ While I was reading a book, the phone rang.
「電話が鳴った」は一瞬の出来事なので while には合わない。while のうしろには続いていた動作を置く。

■ 誤り②：時制を入れかえてしまう
× When I was coming home, my mother cooked.
○ When I came home, my mother was cooking.
「帰宅」を帯に、「料理」を点にしてしまうと、意味が変わってしまう（母が私の帰宅中に料理を一回したことになる）。

■ 同時進行を表す
二つの動作がどちらも続いていた場合は、両方を過去進行形にする。
例）While I was cooking, my sister was watching TV.（私が料理をしている間、妹はテレビを見ていた）
例）My father was reading the newspaper while my mother was washing the dishes.

■ 二つの点が続けて起こる場合
どちらも一瞬の出来事なら、両方を過去形にする。
例）When the bell rang, everyone stood up.（ベルが鳴ると、みんな立ち上がった）
この場合の when は「〜すると（すぐに）」という意味になる。

⚠ 注意：when 節・while 節の中では、たとえ未来の話でも will を使わない。この原則は後の課でくわしく扱うが、過去の文でも「節の中の時制は主節に合わせる」という感覚をここで作っておくとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私が家に帰ったとき、母は夕食を作っていました」を英語にしなさい。',
        wrongAnswer: 'When I was coming home, my mother cooked dinner.',
        trapExplanation:
          '日本語の「帰ったとき」に「〜たとき」とあるので、そこを丁寧に表そうとして進行形にしてしまう。どちらが一瞬の出来事でどちらが続いていた動作かを取りちがえている。',
        correctAnswer: 'When I came home, my mother was cooking dinner.',
        correctExplanation:
          '「家に帰る」は一瞬で終わる出来事なので when ＋ 過去形、「夕食を作る」は続いていた動作なので過去進行形にする。While my mother was cooking dinner, I came home. と書いても同じ内容になる。点と帯を先に決めてから英語にする。',
      },
      {
        question: '「私が本を読んでいる間に、電話が鳴りました」を英語にしなさい。',
        wrongAnswer: 'While the phone rang, I was reading a book.',
        trapExplanation:
          '日本語の語順どおりに while を文頭に置き、そのうしろにすぐ「電話が鳴った」を続けてしまう。while のうしろには続いていた動作が来るという原則を守っていない。',
        correctAnswer: 'While I was reading a book, the phone rang.',
        correctExplanation:
          'while のうしろには帯（続いていた動作）を置く。この文では「本を読んでいた」が帯、「電話が鳴った」が点である。when を使うなら The phone rang when I was reading a book. とも書ける。while と過去進行形はセットだと覚える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s094',
    subject: 'eigo',
    examType: 'koko',
    title: '過去進行形③：割りこみと同時進行を書き分ける',
    description: '続いていた動作に別の出来事が割りこむ形と、二つの動作が並行する形を整理する',
    intro:
      '長く続いていた動作の途中に、別のできごとが割りこむ。これは物語文でも会話文でも最もよく出る場面です。どちらを進行形にするかを決めるだけで、読むときも書くときも一気に楽になります。図で時間の重なりを確かめながら進めましょう。',
    order: 594,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '割りこみ型：〈続いていた動作＝過去進行形〉＋〈割りこんだ出来事＝過去形〉。',
      '同時進行型：二つとも過去進行形にする。',
      '連続型：二つとも過去形にすると、順に起きたことを表す。',
      '状態動詞（know / have＝所有 など）は過去進行形にできない。',
      '疑問文で「何をしていましたか」とたずねるときは What were you doing 〜? を使う。',
    ],
    sections: [
      {
        heading: '三つのパターン',
        figureId: 'lf_kokoeigoext03_094',
        body: `■ ①割りこみ型（帯＋点）
続いていた動作の途中に、別の出来事が割りこむ。
例）I was reading a book when the phone rang.（本を読んでいたら電話が鳴った）
例）It was raining when we left the station.（駅を出たとき、雨が降っていた）
例）She was waiting for the bus when I saw her.（私が見かけたとき、彼女はバスを待っていた）
帯のほうを過去進行形、点のほうを過去形にする。

■ ②同時進行型（帯＋帯）
二つの動作がどちらも続いていた。
例）While my father was washing the car, I was cleaning my room.（父が車を洗っている間、私は部屋を掃除していた）
例）My mother was cooking and my sister was setting the table.（母は料理をし、妹は食卓の準備をしていた）

■ ③連続型（点＋点）
二つの出来事が順に起きた。
例）When the bell rang, the students stood up.（ベルが鳴ると、生徒たちは立ち上がった）
例）I opened the door and went out.（ドアを開けて外へ出た）

★ ポイント：物語文の読解では、①の形が場面の背景説明として頻繁に使われる。過去進行形の部分が「そのときの状況」、過去形の部分が「起きた出来事」だと読み分けると、話の流れをつかみやすい。`,
      },
      {
        heading: '過去進行形にできない動詞と、たずね方',
        body: `■ 状態動詞は過去進行形にしない
know / believe / understand / like / love / want / need / have（所有）／see（見える）／hear（聞こえる）などは、それ自体が続いている状態を表すので進行形にしない。過去のことでも同じである。
例）× I was knowing him at that time.
　　○ I knew him at that time.（そのとき彼のことを知っていた）
例）× She was having a car then.
　　○ She had a car then.（そのとき彼女は車を持っていた）
※ have が「食べる」の意味なら進行形にできる。She was having lunch then.（そのとき昼食を食べていた）

■ 「何をしていましたか」のたずね方
例）What were you doing at eight last night?（昨夜8時には何をしていましたか）
　－ I was taking a bath.（お風呂に入っていました）
過去形でたずねる What did you do last night?（昨夜は何をしましたか）とは意味が異なる。ある時刻での状況を聞くときは過去進行形を使う。

■ 物語での使われ方
例）It was raining hard. A man was standing at the corner. Suddenly a car stopped in front of him.
最初の二文が過去進行形で場面の背景を描き、三文目の過去形で出来事が動き出す。この対比が英語の物語の基本的な組み立て方である。

⚠ 注意：背景説明の過去進行形を過去形で書いてしまうと、出来事が次々に起きたように読めてしまい、場面が伝わらない。英作文で情景を書くときは意識して使い分ける。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はそのとき彼のことを知っていました」を英語にしなさい。',
        wrongAnswer: 'I was knowing him at that time.',
        trapExplanation:
          '日本語の「知っていました」に「〜ていました」があるので、過去進行形にしてしまう。know が状態動詞で、進行形にできないことを見落としている。',
        correctAnswer: 'I knew him at that time.',
        correctExplanation:
          'know は状態動詞なので進行形にしない。過去の状態は過去形 knew でそのまま表せる。日本語の「〜ていた」は状態にも進行にも使えるため、動詞が状態を表すかどうかで判断する必要がある。like / want / have（所有）も同様である。',
      },
      {
        question: '「昨日の8時には何をしていましたか」を英語にしなさい。',
        wrongAnswer: 'What did you do at eight yesterday?',
        trapExplanation:
          '「何をしていましたか」を過去の疑問文と考え、did を使ってしまう。ある時刻に進行中だった動作をたずねているという点を読み取れていない。',
        correctAnswer: 'What were you doing at eight yesterday?',
        correctExplanation:
          '8時という時点で進行中だった動作をたずねているので過去進行形を使う。What did you do at eight yesterday? は「8時に何をしましたか（何を始めましたか）」という意味になり、答えの形も変わる。at eight のように時刻が指定されたら過去進行形を疑う。',
      },
    ],
  },
  {
    id: 'koko_eigo_s095',
    subject: 'eigo',
    examType: 'koko',
    title: '過去進行形④：入試での出方（並べかえ・英作文）',
    description: '語順整序と条件英作文で過去進行形が問われる形に慣れ、書き上げるまでの手順を固める',
    intro:
      '並べかえ問題で was と ing 形が配られたら、それは過去進行形を作らせる合図です。しかし語順を一つまちがえるだけで0点になります。ここでは、部品の並べ方と、書き終えたあとに必ず確認する三点を手順にして覚えます。',
    order: 595,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '疑問詞のある過去進行形の疑問文は〈疑問詞＋was / were＋主語＋ing形 〜?〉の語順。',
      '並べかえでは、まず was / were と ing 形を見つけて述語のかたまりを作る。',
      '書いたあとに①be動詞と主語が合っているか②ing 形のつづり③時を示す語句と時制が合っているかを確認する。',
      '過去進行形の否定は be動詞のうしろに not。did not は使わない。',
      '英作文では、続いていた動作を過去進行形、割りこんだ出来事を過去形にする。',
    ],
    sections: [
      {
        heading: '並べかえ問題の手順',
        body: `■ 手順
①配られた語の中に was / were と ing 形があるか確認する。あれば過去進行形の文だと判断する。
②〈主語＋was / were＋ing形〉のかたまりを先に作る。
③疑問詞があれば先頭に置き、そのうしろで be動詞と主語をひっくり返す。
④残った語（目的語・場所・時を表す語句）を、目的語 → 場所 → 時の順に並べる。

■ 例題1
（what / was / he / doing / then）を並べかえなさい。
→ What was he doing then?（彼はそのとき何をしていたのですか）
配られた be動詞が was なので、主語は I か三人称単数だと逆に読み取れる。ここでは he があるので was で正しい。were が配られていたら、主語は you か複数のはずだと確かめられる。

■ 例題2
（were / when / came / they / I / home / playing / soccer）
→ They were playing soccer when I came home.
または When I came home, they were playing soccer.
when 節を前に置いたときはコンマが必要になる。

■ 例題3
（not / she / was / listening / to / me）
→ She was not listening to me.（彼女は私の話を聞いていなかった）
not は be動詞のうしろに置く。

★ ポイント：語順で迷ったら、まず述語のかたまり〈be動詞＋ing形〉を作る。ここが決まれば残りは自然に並ぶ。`,
      },
      {
        heading: '書いたあとの三点チェック',
        body: `英作文では、書き上げたあとに必ず次の三点を確認する。ここを見直すだけで得点が安定する。

■ ①be動詞と主語が合っているか
・I / he / she / it・単数 → was
・you / we / they・複数 → were
主語が長いときは、前置詞句をかっこでくくって外し、中心語だけを見る。
例）The students in my class were talking loudly.（中心語は students → were）

■ ②ing 形のつづり
・e を取るもの：making / coming / writing / having
・重ねるもの：running / swimming / sitting / getting / beginning
・ie → y：dying / lying
・y はそのまま：studying / carrying
つづりの誤りは内容が合っていても減点される。

■ ③時を示す語句と時制が合っているか
then / at that time / at eight last night / when 〜 があるのに現在進行形で書いていないか。逆に now があるのに過去進行形で書いていないか。

■ 条件英作文でよく出る場面
・写真や絵を見て「そのとき人々が何をしていたか」を説明する。
　例）Two boys were playing catch in the park.
・自分の経験を書く。
　例）I was studying in my room when the earthquake happened.

⚠ 注意：与えられた語数の条件（例：6語以上）を数えるとき、短縮形（wasn't）は1語として数えるのがふつうである。指示をよく読んで調整すること。`,
      },
    ],
    trapExamples: [
      {
        question: '（doing / were / what / you / then）を並べかえて「あなたはそのとき何をしていたのですか」という文にしなさい。',
        wrongAnswer: 'What you were doing then?',
        trapExplanation:
          '疑問詞のうしろをそのまま平叙文の語順で続けてしまう。日本語の語順「あなたは何を〜」に引かれて、主語を先に置いてしまうのが原因である。',
        correctAnswer: 'What were you doing then?',
        correctExplanation:
          '疑問詞のある疑問文は〈疑問詞＋be動詞＋主語＋ing形 〜?〉の語順になる。be動詞 were を主語 you の前に出す。間接疑問（I know what you were doing.）では主語が先に来るので、そちらと混同しないことも大切である。',
      },
      {
        question: '「私が部屋で勉強していたとき、地震が起こりました」を英語にしなさい。',
        wrongAnswer: 'When I studied in my room, the earthquake was happening.',
        trapExplanation:
          '二つの出来事のうち、どちらが続いていた動作でどちらが割りこんだ出来事かを取りちがえている。日本語の語順どおりに前半を when 節にしたことで、時制の割りあてが逆になってしまった。',
        correctAnswer: 'I was studying in my room when the earthquake happened.',
        correctExplanation:
          '「勉強していた」が続いていた動作なので過去進行形、「地震が起こった」は一瞬の出来事なので過去形にする。While I was studying in my room, the earthquake happened. と書いてもよい。点と帯を決めてから when / while を選ぶ。',
      },
    ],
  },

  // ───────────── 6. 進行形にしない動詞（状態動詞）（s096〜s099） ─────────────
  {
    id: 'koko_eigo_s096',
    subject: 'eigo',
    examType: 'koko',
    title: '状態動詞①：進行形にしない動詞のグループ',
    description: '知覚・心理・所有・関係を表す動詞は進行形にしない、という原則をグループで覚える',
    intro:
      '「私は今、彼を知っている」を I am knowing him now. とは言いません。know はもともと「ずっと続いている」意味を持つので、わざわざ「続いている最中」と言い直す必要がないからです。進行形にできない動詞には、はっきりした共通点があります。',
    order: 596,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '状態動詞は、それ自体がすでに継続を表すので進行形にしない。',
      '心理：know / believe / understand / remember / forget / think（思う）。',
      '感情・好み：like / love / hate / want / need / hope / prefer。',
      '所有・関係：have（持っている）／own / belong / contain / resemble。',
      '知覚：see（見える）／hear（聞こえる）／smell / taste / sound / seem。',
      '「〜している」という日本語でも、状態動詞なら現在形で表す。',
    ],
    sections: [
      {
        heading: '四つのグループ',
        figureId: 'lf_kokoeigoext03_096',
        body: `進行形にしない動詞（状態動詞）は、意味のうえで次の四グループに分けられる。

■ ①心の働きを表す
know（知っている）／believe（信じている）／understand（理解している）／remember（覚えている）／forget（忘れている）／think（〜だと思う）／mean（意味する）
例）I know his name.（彼の名前を知っている）
例）I believe you.（あなたを信じている）

■ ②感情・好みを表す
like / love / hate / want / need / hope / prefer / wish
例）She likes classical music.（彼女はクラシック音楽が好きだ）
例）I want a new bike.（新しい自転車がほしい）

■ ③所有・関係を表す
have（持っている）／own（所有する）／belong to（〜に属する）／contain（含む）／resemble（似ている）／cost（費用がかかる）
例）He has two dogs.（彼は犬を2匹飼っている）
例）This box contains ten pencils.（この箱には鉛筆が10本入っている）

■ ④知覚・感覚を表す
see（見える）／hear（聞こえる）／smell（においがする）／taste（味がする）／sound（聞こえる・思える）／seem（思われる）／look（見える）
例）I hear a strange sound.（変な音が聞こえる）
例）This soup tastes good.（このスープはおいしい）

★ ポイント：これらの動詞は、もともと「ある状態がずっと続いている」ことを表す。進行形は「続いている最中」を表す形なので、意味が重なってしまい不要になる、と理解しておく。`,
      },
      {
        heading: '日本語の「〜している」にだまされない',
        body: `日本語では状態も進行も同じ「〜している」で表すため、そのまま英語にすると誤る。

■ 誤りやすい例
× I am knowing him.　　○ I know him.（彼を知っている）
× I am wanting a new bag.　○ I want a new bag.（新しいかばんがほしい）
× She is having two brothers.　○ She has two brothers.（兄弟が二人いる）
× I am understanding your idea.　○ I understand your idea.（あなたの考えがわかる）
× This flower is smelling good.　○ This flower smells good.（この花はよいにおいがする）

■ 「〜し始めた」「〜しつつある」なら別の言い方
状態の変化を表したいときは、別の動詞を使う。
例）I am getting to know him.（彼のことがわかってきた）
例）I am beginning to understand.（わかりかけてきた）
例）He is falling in love with her.（彼は彼女に恋をしつつある）

■ 継続の長さを言うときは現在完了
「10年前から知っている」のように期間を示すときは、進行形ではなく現在完了を使う。
例）× I am knowing her for ten years.
　　○ I have known her for ten years.（彼女とは10年来の知り合いだ）
状態動詞は現在完了進行形（have been 〜ing）にもしないので、have known の形になる。

⚠ 注意：入試の選択問題では、状態動詞の進行形を選択肢にまぎれこませる出題が定番である。選択肢に 〜ing が並んでいたら、まずその動詞が状態動詞かどうかを確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は今、新しい自転車がほしい」を英語にしなさい。',
        wrongAnswer: 'I am wanting a new bike now.',
        trapExplanation:
          'now があるので進行形にしなければならないと考えてしまう。want が状態動詞で進行形にできないことを知らないと、時を示す語句だけで形を決めて誤る。',
        correctAnswer: 'I want a new bike now.',
        correctExplanation:
          'want は感情・欲求を表す状態動詞なので進行形にしない。now があっても現在形のままでよい。同じく like / need / know / love も進行形にしない。now があれば進行形、という機械的な判断は状態動詞には通用しない。',
      },
      {
        question: '「私は彼女と10年来の知り合いです（10年前から知っている）」を英語にしなさい。',
        wrongAnswer: 'I am knowing her for ten years.',
        trapExplanation:
          '「ずっと知っている」という継続の意味を出そうとして進行形を選んでしまう。know が状態動詞であることに加え、期間を表すには現在完了が必要であることも見落としている。',
        correctAnswer: 'I have known her for ten years.',
        correctExplanation:
          '過去から今まで続いている状態は現在完了〈have / has ＋ 過去分詞〉で表す。know は状態動詞なので現在完了進行形（have been knowing）にもしない。for ten years のような期間を表す語句が見えたら現在完了を疑う。',
      },
    ],
  },

  {
    id: 'koko_eigo_s097',
    subject: 'eigo',
    examType: 'koko',
    title: '状態動詞②：進行形になると意味が変わる動詞',
    description: 'have / see / think / taste など、状態と動作の二つの顔を持つ動詞を区別する',
    intro:
      'I am having lunch. は正しい英語です。have は状態動詞のはずなのに、なぜ進行形にできるのでしょう。実は have には「持っている」という状態の顔と、「食べる」という動作の顔があります。動作の顔のときだけ進行形になる、という切り替えを見ていきます。',
    order: 597,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      'have は「持っている」なら状態（進行形不可）、「食べる・過ごす」なら動作（進行形可）。',
      'see は「見える」なら状態、「（人に）会う・診てもらう」なら動作。',
      'think は「〜だと思う」なら状態、「考えている」なら動作。',
      'taste / smell は「〜の味・においがする」なら状態、「味見する・においをかぐ」なら動作。',
      'be動詞も進行形にすると「一時的にそうふるまっている」という意味になる（He is being kind.）。',
      '進行形にできるかどうかは、その文でどちらの意味で使っているかで決まる。',
    ],
    sections: [
      {
        heading: '二つの顔を持つ動詞',
        body: `同じ動詞でも、状態を表すか動作を表すかで進行形にできるかどうかが変わる。

■ have
状態「持っている」→ 進行形にしない
例）I have two brothers.（兄弟が二人いる）
動作「食べる・飲む・（時を）過ごす」→ 進行形にできる
例）I am having lunch now.（今、昼食を食べている）
例）We are having a good time.（楽しい時間を過ごしている）
※ have a party / have a meeting / have a bath も動作なので進行形にできる。

■ see
状態「見える」→ 進行形にしない
例）I see a bird in the tree.（木に鳥が見える）
動作「会う・診てもらう・付き合う」→ 進行形にできる
例）I am seeing my dentist this afternoon.（今日の午後、歯医者に行く）

■ think
状態「〜だと思う（意見）」→ 進行形にしない
例）I think he is right.（彼は正しいと思う）
動作「考えている」→ 進行形にできる
例）I am thinking about my future.（自分の将来について考えている）
※ think about / think of は動作になりやすい。

■ taste / smell
状態「〜の味・においがする」→ 進行形にしない
例）This soup tastes salty.（このスープはしょっぱい）
動作「味見する・においをかぐ」→ 進行形にできる
例）The cook is tasting the soup.（料理人がスープの味見をしている）

★ ポイント：「その動作を今まさに続けているところだ」と言えるかどうかで判断する。持っていることは続けようがないが、食べることは続けられる。`,
      },
      {
        heading: 'be動詞の進行形と、そのほかの注意',
        body: `■ be being 〜
be動詞も進行形にすると「ふだんはそうでないが、今だけそうふるまっている」という意味になる。
例）He is kind.（彼は親切な人だ＝性質）
例）He is being kind today.（彼は今日は親切にふるまっている＝一時的）
主に人の態度・ふるまいを表す形容詞（kind / careful / rude / silly / quiet）とともに使う。
※ tall / Japanese のような変えられない性質には使えない（× He is being tall.）。

■ 進行形になると意味がずれる動詞
・The train is stopping.（電車は止まりつつある）／The train stops here.（この駅に止まる）
・He is dying.（彼は死にかけている）／He died last year.（昨年亡くなった）
どちらも進行形が「変化の途中」を表している。

■ 判断の手順
①その動詞が状態動詞のリストに入っているか。
②入っていれば、この文では状態の意味か、動作の意味かを見る。
③動作の意味なら進行形にできる。状態の意味なら現在形を使う。

■ 入試での問われ方
選択問題で I （am having / have） two sisters. のように出題される。two sisters という所有の内容から、状態の意味だと判断して have を選ぶ。

⚠ 注意：状態動詞は進行形にできない、とだけ覚えていると I am having lunch. を誤りだと判断してしまう。「動詞ごと」ではなく「その文での意味ごと」に決まると理解しておくこと。`,
      },
    ],
    trapExamples: [
      {
        question: '正しい文を選びなさい。ア I have lunch now.　イ I am having lunch now.',
        wrongAnswer: 'ア I have lunch now.',
        trapExplanation:
          '「have は状態動詞だから進行形にできない」とだけ覚えていると、意味を確かめずにアを選んでしまう。ここでの have が「食べる」という動作の意味であることを見落としている。',
        correctAnswer: 'イ I am having lunch now.',
        correctExplanation:
          'have lunch の have は「食べる」という動作の意味なので進行形にできる。I have lunch at noon every day. のように習慣なら現在形になる。進行形にできるかどうかは動詞そのものではなく、その文での意味で決まる。',
      },
      {
        question: '「私は彼の意見が正しいと思っています」を英語にしなさい。',
        wrongAnswer: 'I am thinking that his idea is right.',
        trapExplanation:
          '「思っています」という日本語の「〜ています」を進行形だと考えてしまう。think が「意見として思う」という状態の意味で使われていることを見落としている。',
        correctAnswer: 'I think that his idea is right.',
        correctExplanation:
          '「〜だと思う」という意見を述べる think は状態動詞なので進行形にしない。I am thinking 〜 は「今あれこれ考えている最中だ」という意味になり、I am thinking about my future. のように使う。that 節が続くときは状態の意味だと考えてよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s098',
    subject: 'eigo',
    examType: 'koko',
    title: '状態動詞③：日本語の「〜している」とのずれ',
    description: '住んでいる・着ている・結婚しているなど、日本語と英語で形がずれる表現を整理する',
    intro:
      '「彼女は赤いコートを着ています」を She is putting on a red coat. と書くと、「今まさに着ようとしている最中」という意味になってしまいます。着る動作と、着ている状態は別の表現です。日本語では同じ「着ている」なのに、英語では区別します。',
    order: 598,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      'wear は「着ている（状態）」、put on は「着る（動作）」。',
      '「住んでいる」は原則 live の現在形。一時的な滞在なら進行形も可。',
      '「結婚している」は be married、「結婚する」は get married。',
      '「似ている」は look like / resemble、進行形にはしない。',
      '「持っている」は have の現在形、「知っている」は know の現在形。',
      '状態を表すのか動作を表すのかを、日本語ではなく場面で判断する。',
    ],
    sections: [
      {
        heading: '着る・住む・結婚する',
        body: `■ wear と put on
・wear：身につけている状態
例）She wears glasses.（彼女は眼鏡をかけている＝ふだんから）
例）She is wearing a red coat today.（今日は赤いコートを着ている）
　※ wear は状態動詞に近いが、「今日だけ」という一時的な状態を表すために進行形にできる。
・put on：身につける動作
例）He put on his shoes and went out.（彼は靴をはいて出かけた）
例）Put on your coat. It is cold outside.（コートを着なさい。外は寒い）
　※ 進行形 is putting on 〜 は「今まさに着ようとしている最中」を表す。
反対語も同じ関係で、take off（脱ぐ・動作）に対して状態を表す語はない。

■ live
・原則は現在形。I live in Osaka.（大阪に住んでいる）
・一時的な居住なら進行形。I am living in Tokyo this year.（今年は東京に住んでいる）

■ 結婚
・be married：結婚している（状態）
例）My sister is married.（姉は結婚している）
・get married：結婚する（動作）
例）They got married last year.（彼らは昨年結婚した）
・marry：〜と結婚する（動作・目的語を取る）
例）He married her ten years ago.（彼は10年前に彼女と結婚した）
　※ marry with 〜 とは言わない。

★ ポイント：日本語の「〜している」は状態と進行の両方を表す。英語では別の語・別の形になることが多いので、場面をイメージして選ぶ。`,
      },
      {
        heading: 'そのほかのずれやすい表現',
        body: `■ 似ている
例）She looks like her mother.（彼女は母親に似ている）
例）She resembles her mother.（同じ意味・かたい言い方）
どちらも状態なので進行形にしない。× She is resembling her mother.

■ 覚えている・忘れている
例）I remember his name.（彼の名前を覚えている）
例）I forget his name.（彼の名前が思い出せない）
※ I forgot his name. なら「忘れてしまった」という過去の出来事を表す。

■ 持っている・所有している
例）He has a new smartphone.（新しいスマートフォンを持っている）
例）This bag belongs to me.（このかばんは私のものだ）
belong は所有関係を表す状態動詞なので進行形にしない。

■ 立っている・すわっている
例）He is standing by the window.（彼は窓のそばに立っている）
例）She is sitting on the bench.（彼女はベンチにすわっている）
stand / sit は姿勢を保つ動作なので進行形にできる。ただし建物などが「建っている」場合は現在形を使う。
例）The old temple stands on the hill.（その古い寺は丘の上に建っている）

■ 開いている・閉まっている
例）The window is open.（窓が開いている）＝形容詞
例）The store opens at nine.（その店は9時に開く）＝動作
開いている状態は be動詞＋形容詞 open で表すのがふつうである。

⚠ 注意：日本語の「〜ている」から機械的に be動詞＋ing 形を作る癖がつくと、こうした表現をすべてまちがえてしまう。動詞ごとに正しい形をセットで覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼女は今日、赤いコートを着ています」を英語にしなさい。',
        wrongAnswer: 'She is putting on a red coat today.',
        trapExplanation:
          '「着ている」という日本語から put on を選び、進行形にしてしまう。put on が「着る」という一瞬の動作を表す語であることを知らないと、着ている状態を表せない。',
        correctAnswer: 'She is wearing a red coat today.',
        correctExplanation:
          '身につけている状態は wear で表す。is putting on とすると「今まさに袖を通しているところ」という意味になる。today という一時的な限定があるので is wearing と進行形にしているが、ふだんの習慣なら She wears glasses. のように現在形を使う。',
      },
      {
        question: '「私は大阪に住んでいます」を英語にしなさい。',
        wrongAnswer: 'I am living in Osaka.',
        trapExplanation:
          '「住んでいます」という日本語の「〜ています」を進行形と結びつけてしまう。live がふつうは長く続く状態を表すことを意識していない。',
        correctAnswer: 'I live in Osaka.',
        correctExplanation:
          '居住のように長く続くことは現在形で表す。I am living in Osaka. とすると「今の時期だけ一時的に住んでいる」という含みが生まれる。下宿や留学など期間限定の滞在ならその形でもよいが、ふつうの居住は現在形で書く。',
      },
    ],
  },

  {
    id: 'koko_eigo_s099',
    subject: 'eigo',
    examType: 'koko',
    title: '状態動詞④：進行形にできるかを判定する手順',
    description: '選択問題で進行形の可否を見抜くための手順を作り、頻出の判定パターンをまとめる',
    intro:
      '選択肢に 〜ing が並んでいると、つい選びたくなります。しかし出題者は、状態動詞の進行形をわざと選択肢に入れて待っています。ここでは、迷ったときに三十秒で答えを決められる判定手順を作り、実際の出題パターンで試してみましょう。',
    order: 599,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '判定手順は①状態動詞か確認 ②その文での意味を確認 ③時を示す語句を確認 の三段階。',
      'now / at this moment があっても、状態動詞なら現在形のままでよい。',
      '選択肢に 〜ing が並んでいたら、まず状態動詞かどうかを疑う。',
      '継続の期間（for 〜 / since 〜）が示されていれば現在完了を検討する。',
      '状態動詞は現在完了進行形（have been 〜ing）にもしない。',
    ],
    sections: [
      {
        heading: '三段階の判定手順',
        body: `■ 手順①：その動詞は状態動詞か
心理（know / believe / understand / remember / think）
感情（like / love / want / need / hope）
所有・関係（have / own / belong / contain / resemble / cost）
知覚（see / hear / smell / taste / sound / seem / look）
このどれかに入っていれば、進行形にできない可能性が高い。

■ 手順②：この文ではどちらの意味か
状態動詞でも、動作の意味なら進行形にできる。
・have → 食べる・過ごす なら可
・see → 会う なら可
・think → 考えている なら可
・taste / smell → 味見する・においをかぐ なら可
・be → 一時的にふるまう なら可

■ 手順③：時を示す語句を確認
・now / at this moment → 動作動詞なら進行形
・every day / usually → 現在形
・for 〜 / since 〜 → 現在完了
・then / at that time → 過去形か過去進行形

■ 判定の練習
（1）I （know / am knowing） the answer. → 状態動詞・状態の意味 → know
（2）I （have / am having） breakfast now. → 動作の意味 → am having
（3）This bag （belongs / is belonging） to me. → 状態動詞 → belongs
（4）He （thinks / is thinking） about his future. → about があるので動作 → is thinking

★ ポイント：手順①で止まらず、必ず②まで確認する。①だけで判断すると I am having lunch. のような正しい文まで誤りだと考えてしまう。`,
      },
      {
        heading: '入試での頻出パターン',
        body: `■ パターン1：now を置いて進行形を誘う
例）I （want / am wanting） to go home now.
now があるので進行形を選びたくなるが、want は状態動詞なので want が正解。to go home（帰りたい）という内容も状態である。

■ パターン2：状態と動作の両方の意味を持つ動詞
例）They （are having / have） a meeting now.
have a meeting は「会議を開く」という動作なので are having が正解。

■ パターン3：期間を示して現在完了を選ばせる
例）I （know / have known） him since we were children.
since 〜 があるので現在完了 have known が正解。状態動詞なので have been knowing にはしない。

■ パターン4：知覚動詞の進行形
例）I （hear / am hearing） someone singing.
「聞こえる」という受け身的な知覚は状態なので hear が正解。意識して耳を傾ける場合は listen to を使い、I am listening to the radio. のように進行形にできる。

■ 似た組み合わせ
see（見える・自然に目に入る）／look at（意識して見る）／watch（動くものを見続ける）
hear（聞こえる）／listen to（意識して聞く）
前者は状態、後者は動作なので、後者は進行形にできる。

⚠ 注意：長文読解でも、状態動詞が現在形で書かれていることを前提に読むと内容がつかみやすい。He knows the truth. と He is learning the truth. では、すでに知っているのか、これから知りつつあるのかが変わる。`,
      },
    ],
    trapExamples: [
      {
        question: '（　）に入る適切な語を選びなさい。I （　） to go home now. ア want　イ am wanting',
        wrongAnswer: 'イ am wanting',
        trapExplanation:
          'now があるので進行形を選べばよいと考えてしまう。時を示す語句だけで形を決める癖がつくと、状態動詞であることを確かめずに答えてしまう。',
        correctAnswer: 'ア want',
        correctExplanation:
          'want は感情・欲求を表す状態動詞なので、now があっても進行形にしない。now は「今の気持ち」を表しているだけで、進行形を要求してはいない。まず動詞が状態動詞かどうかを確認してから、時を示す語句を見る順序で判断する。',
      },
      {
        question: '（　）に入る適切な語句を選びなさい。I （　） him since we were children. ア know　イ have known',
        wrongAnswer: 'ア know',
        trapExplanation:
          'know は状態動詞なので現在形でよい、と考えて since 以下を読み飛ばしてしまう。期間を示す語句があるときは時制そのものを見直す必要がある。',
        correctAnswer: 'イ have known',
        correctExplanation:
          'since we were children は「子どものころから今まで」という期間を示すので、現在完了〈have ＋ 過去分詞〉を使う。know は状態動詞なので have been knowing とはせず have known とする。for 〜 / since 〜 が見えたら現在完了を検討する。',
      },
    ],
  },

  // ───────────── 7. 未来を表す表現（s100〜s105） ─────────────
  {
    id: 'koko_eigo_s100',
    subject: 'eigo',
    examType: 'koko',
    title: '未来①：will の基本（その場の意志と単純な予測）',
    description: 'will ＋ 動詞の原形という形と、意志・予測という二つの意味を確認する',
    intro:
      '電話が鳴ったとき、「私が出るよ」ととっさに言う。この「今、決めた」という気持ちを表すのが will です。will は未来を表す記号ではなく、話し手が今この瞬間に思ったことを未来に投げる形だと考えると、be going to との違いも見えてきます。',
    order: 600,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      'will のうしろは必ず動詞の原形。主語が三人称単数でも wills や will comes とはしない。',
      '意味は①その場で決めた意志（I will help you.）②単純な予測（It will be sunny tomorrow.）。',
      `短縮形は I will → I'll、he will → he'll。`,
      'be動詞を使う文では will be の形になる（× I will busy）。',
      'tomorrow / next 〜 / someday / in the future などが未来を示す語句。',
      'will は助動詞なので、can や must と同じ規則で使う。',
    ],
    sections: [
      {
        heading: 'will の形と二つの意味',
        figureId: 'lf_kokoeigoext03_100',
        body: `■ 形
〈will ＋ 動詞の原形〉
I will call you tonight.（今夜、電話します）
He will come here soon.（彼はもうすぐここへ来るでしょう）
They will be busy next week.（彼らは来週忙しいでしょう）

will は助動詞なので、主語が何であっても形が変わらない。
例）× He wills come.　× He will comes.　○ He will come.

■ ①その場で決めた意志
話している今この瞬間に決めたことを表す。
例）The phone is ringing. － I will answer it.（電話が鳴っているよ。－私が出るよ）
例）It is heavy. I will carry it for you.（重いですね。持ってあげましょう）
例）I will do my best.（全力をつくします）

■ ②単純な予測
話し手が「たぶんそうなるだろう」と思っていることを表す。
例）It will be sunny tomorrow.（明日は晴れるでしょう）
例）He will be twenty years old next month.（彼は来月20歳になります）
例）I think it will rain this evening.（今晩は雨が降ると思う）

■ be動詞を忘れない
形容詞や名詞を続けるときは will be の形になる。
例）× I will busy tomorrow.　○ I will be busy tomorrow.
例）× She will a teacher.　○ She will be a teacher.

★ ポイント：will は「未来」という時間を指す記号ではなく、「今の話し手の判断・意志」を未来に向けて述べる形である。この理解が be going to との使い分けにつながる。`,
      },
      {
        heading: '未来を示す語句と、助動詞としての性質',
        body: `■ 未来を示す語句
tomorrow（明日）／the day after tomorrow（あさって）／next week, next month, next year（来週・来月・来年）／soon（まもなく）／someday（いつか）／in the future（将来）／in three days（3日後に）／this evening（今晩）
例）We will have a test next Monday.（来週の月曜日にテストがあります）

■ 助動詞としての規則
will は can / must / may と同じ助動詞なので、次の規則に従う。
①うしろは必ず原形
②三単現の -s を付けない
③二つの助動詞を並べられない（× He will can swim. → ○ He will be able to swim.）
④to を付けない（× I will to go.）

■ 短縮形
I will → I'll／you will → you'll／he will → he'll／she will → she'll／it will → it'll／we will → we'll／they will → they'll
会話や英作文でよく使うので、つづりを正確に覚える。

■ 未来の文でよく使う表現
例）I will be back soon.（すぐにもどります）
例）You will like this book.（この本、きっと気に入りますよ）
例）Everything will be all right.（すべてうまくいきますよ）

⚠ 注意：will の未来と「時・条件の副詞節」の関係は重要である。When he comes, I will tell him. のように、when 節の中では will を使わない。この規則は後の課でくわしく扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は明日ここに来るでしょう」を英語にしなさい。',
        wrongAnswer: 'He will comes here tomorrow.',
        trapExplanation:
          '主語が三人称単数なので -s が必要だ、という現在形の規則を助動詞の文にも当てはめてしまう。助動詞のうしろは必ず原形であることが抜けている。',
        correctAnswer: 'He will come here tomorrow.',
        correctExplanation:
          'will は助動詞なので、うしろの動詞は必ず原形になる。三単現の -s は付けない。will 自体も wills とはならない。can や must と同じ規則だと考えれば、He can swim. と同じ形になることがわかる。',
      },
      {
        question: '「私は明日、忙しいでしょう」を英語にしなさい。',
        wrongAnswer: 'I will busy tomorrow.',
        trapExplanation:
          '「忙しい」が形容詞であることを意識せず、will のうしろにそのまま置いてしまう。日本語の「忙しい」が述語になれるので、英語でも動詞なしで文が作れると錯覚している。',
        correctAnswer: 'I will be busy tomorrow.',
        correctExplanation:
          'busy は形容詞なので、述語にするには be動詞が必要である。will のうしろは原形なので be を置いて will be busy とする。同じく She will be a teacher. / It will be sunny. も be を落とさない。',
      },
    ],
  },

  {
    id: 'koko_eigo_s101',
    subject: 'eigo',
    examType: 'koko',
    title: '未来②：will の否定文・疑問文と答え方',
    description: `will not / won't の使い方と、Will 〜? への答え方を確実にする`,
    intro:
      'Will it rain tomorrow? に Yes, it does. と答えると、質問と時制がかみ合いません。答えは質問に使われた語をそのまま返すのが原則です。ここでは will の否定文・疑問文と、その答え方をまとめて固めます。',
    order: 601,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      `否定文は〈will not ＋ 原形〉。短縮形は won't（will not）で、つづりに注意。`,
      '疑問文は〈Will ＋ 主語 ＋ 原形 〜?〉。do / does / did は使わない。',
      '答えは Yes, it will. / No, it will not. のように will でそろえる。',
      `won't は「〜しないだろう」のほか「どうしても〜しようとしない」という強い拒否も表す。`,
      '疑問詞のある文は〈疑問詞＋will＋主語＋原形 〜?〉の語順。',
    ],
    sections: [
      {
        heading: '否定文・疑問文の作り方',
        body: `■ 否定文
will のうしろに not を置き、動詞は原形のまま。
例）I will not (won't) tell anyone.（だれにも言いません）
例）He will not (won't) come to the party.（彼はパーティーに来ないでしょう）
※ 短縮形は won't。will not が縮まった形だが、つづりが大きく変わるので注意する（× willn't）。

■ 疑問文
Will を文頭に出す。do / does / did は使わない。
例）Will you be at home tomorrow?（明日は家にいますか）
例）Will the game start at two?（試合は2時に始まりますか）
例）× Do you will go?　○ Will you go?

■ 答え方
Yes, I will. / No, I will not (won't).
Yes, it will. / No, it will not (won't).
質問に使われた助動詞をそのまま返すのが原則である。Yes, it does. や Yes, I do. と答えるのは誤り。

■ 疑問詞のある疑問文
〈疑問詞＋will＋主語＋原形 〜?〉
例）When will you come back?（いつもどってきますか）
例）What will you do this weekend?（今週末は何をしますか）
例）Who will help us?（だれが手伝ってくれますか）
※ 最後の例は who が主語なので語順を変えない。

★ ポイント：答えの形は質問の形を映す鏡である。Are you 〜? には Yes, I am.、Do you 〜? には Yes, I do.、Will you 〜? には Yes, I will. と対応させる。`,
      },
      {
        heading: `won't の意味と、そのほかの注意`,
        body: `■ won't は強い拒否も表す
「〜しないだろう」という単純な否定のほかに、「どうしても〜しようとしない」という意志の否定を表すことがある。
例）The door won't open.（ドアがどうしても開かない）
例）He won't listen to me.（彼はどうしても私の言うことを聞こうとしない）
物が主語のときは「どうしても動かない」という意味になりやすい。

■ will の疑問文が持つ別の働き
Will you 〜? は「〜してくれませんか」という依頼を表すことがある。
例）Will you open the window?（窓を開けてくれませんか）
この用法はくわしくは後の課で扱うが、質問の意図が「未来のことをたずねる」のか「依頼する」のかで、答え方が変わる点に注意する。
・未来をたずねる：Will you be free tomorrow? － Yes, I will.
・依頼する：Will you help me? － Sure. / All right.

■ 未来の否定でよく使う表現
例）I won't be late again.（もう二度と遅れません）
例）It won't take long.（そんなに時間はかかりません）
例）You won't believe this.（信じられないでしょうが）

⚠ 注意：won't の発音は [woʊnt] で、want [wɑnt] とまぎらわしい。聞き取り問題では前後の動詞の形（won't のうしろは原形、want のうしろは to ＋ 原形）で判断する。`,
      },
    ],
    trapExamples: [
      {
        question: 'Will it rain tomorrow? への答えとして正しいものを選びなさい。ア Yes, it does.　イ Yes, it will.',
        wrongAnswer: 'ア Yes, it does.',
        trapExplanation:
          '天気をたずねる文は does で答えるものだという思いこみや、Does it rain 〜? という形との混同から、質問に使われている助動詞を確認せずに答えてしまう。',
        correctAnswer: 'イ Yes, it will.',
        correctExplanation:
          '質問に使われた助動詞をそのまま返すのが原則なので、Will 〜? には will で答える。No なら No, it will not. または No, it won\'t. とする。Does it rain a lot here? のような現在形の質問なら Yes, it does. が正しい答えになる。',
      },
      {
        question: '「彼女はもう二度と遅刻しないでしょう」を英語にしなさい。',
        wrongAnswer: `She will don't be late again.`,
        trapExplanation:
          `否定文を作るときは don't を使うという知識が先に出てしまい、助動詞 will の文でも同じ手順を当てはめてしまう。助動詞の否定は not を助動詞のうしろに置くだけでよい。`,
        correctAnswer: `She won't be late again.`,
        correctExplanation:
          '助動詞の文の否定は〈助動詞＋not＋原形〉で作る。will not be late、短縮すれば won\'t be late となる。do / does / did を助動詞と並べることはできない。can not / must not と同じ作り方だと考えるとよい。',
      },
    ],
  },

  {
    id: 'koko_eigo_s102',
    subject: 'eigo',
    examType: 'koko',
    title: '未来③：be going to の基本',
    description: '前から決めていた予定と、今の状況から見た予測という二つの意味を押さえる',
    intro:
      '空を見上げると黒い雲がびっしり。「降りそうだ」と言うとき、英語は It is going to rain. と言います。すでに目の前に根拠があるからです。be going to は「もう動き出している」ことを表す形だと考えると、二つの意味が一つにつながります。',
    order: 602,
    studyPeriod: '中2',
    targetLevel: 'kiso',
    keyPoints: [
      '形は〈be動詞（am / is / are）＋ going to ＋ 動詞の原形〉。',
      '意味は①前から決めていた予定 ②今の状況から見て起こりそうなこと。',
      'be動詞は主語に合わせる（I am going to / He is going to / They are going to）。',
      '否定は be動詞のうしろに not、疑問文は be動詞を前に出す。',
      'going to のうしろは必ず原形（× is going to visits）。',
      'be going to go は正しい形だが、単に go を使って I am going to Osaka. と言うこともできる。',
    ],
    sections: [
      {
        heading: '形と二つの意味',
        figureId: 'lf_kokoeigoext03_102',
        body: `■ 形
〈am / is / are ＋ going to ＋ 動詞の原形〉
I am going to visit my aunt next Sunday.（次の日曜におばを訪ねる予定です）
He is going to buy a new bike.（彼は新しい自転車を買うつもりです）
They are going to have a party this weekend.（彼らは今週末パーティーを開く予定です）

be動詞は主語に合わせる。going to のうしろは必ず原形である。
例）× He is going to visits her.　○ He is going to visit her.

■ ①前から決めていた予定・意図
話している時点よりも前に決めてあったことを表す。
例）I am going to study abroad next year.（来年、留学するつもりです）
例）We are going to move to Osaka in April.（4月に大阪へ引っ越す予定です）

■ ②今の状況から見た予測
目の前に根拠があって「このままいけばこうなる」と判断したことを表す。
例）Look at those dark clouds. It is going to rain.（あの黒い雲を見て。雨が降りそうだ）
例）He is driving too fast. He is going to have an accident.（スピードを出しすぎだ。事故を起こしそうだ）

■ 否定文・疑問文
be動詞の文として扱う。
例）I am not going to buy it.（買うつもりはありません）
例）Are you going to join the club? － Yes, I am. / No, I am not.

★ ポイント：be going to は「すでに走り出している」というイメージを持つ。決定にせよ、雲の様子にせよ、話す前から根拠が存在している点が共通している。`,
      },
      {
        heading: '使い方の注意',
        body: `■ be動詞を主語に合わせる
例）× My parents is going to visit Kyoto.
　　○ My parents are going to visit Kyoto.（両親は京都を訪れる予定です）
主語が長いときは中心語を確認する。
例）One of my friends is going to study in Canada.

■ be going to go は正しい形
「行くつもりだ」は I am going to go to Osaka. でよい。ただし go が重なるのを避けて、進行形の未来用法を使い I am going to Osaka tomorrow.（明日大阪へ行きます）と言うことも多い。どちらも自然な英語である。

■ 過去形にすると「〜するつもりだった」
be動詞を過去形にすると、過去の予定を表す。実際にはしなかったという含みを持つことが多い。
例）I was going to call you, but I forgot.（電話するつもりだったが、忘れてしまった）
この形は会話文の読解でよく出る。

■ 未来を示す語句
tomorrow / next week / this weekend / soon / in a few days
例）What are you going to do this weekend?（今週末は何をする予定ですか）
この質問は会話文の定番なので、答え方もあわせて練習しておく。
－ I am going to visit my grandparents.（祖父母を訪ねる予定です）

⚠ 注意：going to のうしろに名詞を置くことはできない。× I am going to a doctor.（医者になるつもりだ、の意味では誤り）→ ○ I am going to be a doctor. be を落とさないこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は来週、大阪を訪れる予定です」を英語にしなさい。',
        wrongAnswer: 'He is going to visits Osaka next week.',
        trapExplanation:
          '主語が三人称単数なので動詞に -s が必要だと考えてしまう。going to のうしろは原形になるという規則を確認していない。is がすでに主語に合わせてある点も見落としている。',
        correctAnswer: 'He is going to visit Osaka next week.',
        correctExplanation:
          'going to のうしろは必ず動詞の原形。主語に合わせるのは前にある be動詞（is）のほうである。この構造は will ＋ 原形と同じで、時制や人称の情報を前の語が引き受け、動詞は原形にもどると考えるとよい。',
      },
      {
        question: '「私の両親は明日、買い物に行く予定です」を英語にしなさい。',
        wrongAnswer: 'My parents is going to go shopping tomorrow.',
        trapExplanation:
          'be going to という形をひとかたまりで覚えてしまい、be動詞を主語に合わせる必要があることを忘れてしまう。is going to が固定の形だと思いこんでいる。',
        correctAnswer: 'My parents are going to go shopping tomorrow.',
        correctExplanation:
          'be going to の be動詞は主語に合わせて am / is / are を選ぶ。主語 My parents は複数なので are。go shopping は「買い物に行く」という決まった言い方で、be going to go という重なりも正しい英語である。',
      },
    ],
  },
  {
    id: 'koko_eigo_s103',
    subject: 'eigo',
    examType: 'koko',
    title: '未来④：will と be going to の違いは「いつ決めたか」',
    description: '決定の時点が発話の前か、その場かという基準で二つの未来表現を選び分ける',
    intro:
      '荷物が重そうな人を見て「持ちましょうか」と言うとき、その気持ちは今わいたものです。一方「来週引っ越します」は前から決めていたことです。実行するのはどちらも未来ですが、決めた時点が違います。この一点だけで will と be going to は選び分けられます。',
    order: 603,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      '決定が発話の前 → be going to。決定がその場 → will。実行時点はどちらも未来で同じ。',
      '今の状況に根拠がある予測 → be going to（Look at those clouds. It is going to rain.）。',
      '話し手の頭の中だけの推量 → will（I think it will rain tomorrow.）。',
      '申し出・約束・その場の決断 → will（I will carry it for you.）。',
      'I think / I hope / probably / maybe とともに使うのは will。',
      '日本語訳はどちらも「〜するつもりだ」「〜だろう」になるので、訳から選んではいけない。',
    ],
    sections: [
      {
        heading: '決定の時点で分ける',
        figureId: 'lf_kokoeigoext03_103',
        body: `will と be going to は、実行するのがどちらも未来である点は同じである。違うのは「いつ決めたか」だけである。

■ be going to：発話より前に決めていた
例）A: What are you going to do this weekend?
　　B: I am going to visit my grandmother.（祖母を訪ねる予定です）
Bはこの会話の前から予定を持っていた。だから be going to を使う。

■ will：その場で決めた
例）A: This box is very heavy.
　　B: I will carry it for you.（私が運びましょう）
Bは A の言葉を聞いて、その場で運ぼうと決めた。だから will を使う。

■ 会話での対比
A: We need some milk.
B: OK, I will buy some on my way home.（じゃあ、帰りに買ってくるよ）＝その場で決めた
一方、すでに買うつもりだったなら
B: I know. I am going to buy some this afternoon.（知ってるよ。午後に買うつもりだ）

■ 電話・来客への応答
例）The phone is ringing. － I will get it.（私が出るよ）
その場の反応なので will を使う。I am going to get it. とすると「前から出るつもりだった」という不自然な意味になる。

★ ポイント：問題を解くときは「この人はいつ決めたのか」を一度言葉にしてみる。会話文なら、直前の相手の発言がきっかけになっていれば will である。`,
      },
      {
        heading: '予測のしかたで分ける',
        body: `未来の予測を述べる場合も、根拠がどこにあるかで使い分ける。

■ be going to：今の状況に目に見える根拠がある
例）Look at those dark clouds. It is going to rain.（あの黒い雲を見て。雨が降りそうだ）
例）She is going to have a baby.（彼女は赤ちゃんが生まれる予定だ）
例）Watch out! You are going to fall.（気をつけて。落ちるよ）
いずれも、目の前の状況からそうなることがほぼ確実だと判断している。

■ will：話し手の頭の中での推量
例）I think it will rain tomorrow.（明日は雨が降ると思う）
例）He will be twenty next month.（彼は来月20歳になる）
例）Maybe she will come late.（たぶん彼女は遅れて来るだろう）
根拠が目の前にあるわけではなく、経験や知識から予想している。

■ 目印になる語
I think / I hope / I am sure / probably / maybe / perhaps とともに使うのは will。
例）I am sure you will pass the exam.（きっと試験に合格しますよ）

■ 交換できる場合もある
確定した予定を述べるときは、どちらでも大きな差が出ないことがある。
例）The concert will start at seven. ／ The concert is going to start at seven.
入試では「その場で決めた」「目の前に根拠がある」というはっきりした場面で出題されるので、その二つを確実に見分けられればよい。

⚠ 注意：日本語訳では区別がつかない。「雨が降るでしょう」も「雨が降りそうだ」も、日本語としてはどちらの英語にも当てはめられる。必ず場面（決定の時点・根拠の有無）で判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '電話が鳴った場面での応答として自然なものを選びなさい。ア I am going to answer it.　イ I will answer it.',
        wrongAnswer: 'ア I am going to answer it.',
        trapExplanation:
          '「これから出る」という未来のことなので be going to でよいと考えてしまう。be going to が「前から決めていたこと」を表すという時間差を意識していない。',
        correctAnswer: 'イ I will answer it.',
        correctExplanation:
          '電話が鳴ったのを聞いて、その場で「出よう」と決めた場面なので will を使う。I am going to answer it. だと「前から電話に出るつもりだった」という不自然な意味になる。相手の発言や目の前の出来事がきっかけなら will と考える。',
      },
      {
        question: '「見て、あの黒い雲。雨が降りそうだ」を英語にしなさい。',
        wrongAnswer: 'Look at those dark clouds. It will rain.',
        trapExplanation:
          '未来の予測はすべて will で表せると考えてしまう。目の前に見えている根拠から判断しているという点を、表現に反映できていない。',
        correctAnswer: 'Look at those dark clouds. It is going to rain.',
        correctExplanation:
          '今の状況（黒い雲）を根拠に「このままいけばこうなる」と判断しているので be going to を使う。will は I think it will rain tomorrow. のように、頭の中での推量に使う。根拠が目の前にあるかどうかで選び分ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s104',
    subject: 'eigo',
    examType: 'koko',
    title: '未来⑤：進行形・現在形・be about to で表す未来',
    description: 'will と be going to 以外の未来表現を、確定度の高い順に整理する',
    intro:
      '「電車は10時に出ます」を The train will leave at ten. とすると、少し予想めいた響きになります。時刻表に書いてあることは、もう決まりきったこととして現在形で言えます。英語には未来を表す形が四つあり、確定の度合いで使い分けられています。',
    order: 604,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '未来を表す形は①現在形②現在進行形③be going to④will の四つ。',
      '現在形：時刻表・時間割など公的に決まっていること（The train leaves at ten.）。',
      '現在進行形：手配ずみの個人的な予定（I am meeting him at five.）。',
      'be going to：前から決めていた予定・目の前の根拠による予測。',
      'will：その場の意志・頭の中での予測。',
      'be about to ＋ 原形は「まさに〜しようとしている」という直前の未来を表す。',
    ],
    sections: [
      {
        heading: '四つの未来表現と確定度',
        figureId: 'lf_kokoeigoext03_104',
        body: `未来を表す形は、確定している度合いの高いものから順に並べると理解しやすい。

■ ①現在形：公的に決まっていること
時刻表・時間割・行事予定など、個人の意志で変えられない決定事項に使う。
例）The train leaves at ten.（その電車は10時に出ます）
例）The next class begins at 9:40.（次の授業は9時40分に始まります）
例）The store opens at nine tomorrow.（その店は明日9時に開きます）
使える動詞は限られており、leave / arrive / start / begin / open / close / end などの発着・開始を表す語が中心である。

■ ②現在進行形：手配ずみの個人的な予定
切符を取った、約束したなど、準備が終わっている予定に使う。
例）I am meeting Ken at five.（5時にケンと会うことになっている）
例）We are flying to Okinawa next Monday.（来週の月曜、沖縄へ飛びます）

■ ③be going to：前から決めていた予定・根拠のある予測
例）I am going to study abroad next year.
例）It is going to snow tonight.

■ ④will：その場の意志・頭の中での予測
例）I will call you later.
例）I think he will win the game.

★ ポイント：①②は「もう動かせない・手配ずみ」、③は「決めてある」、④は「今そう思った」という順に確定度が下がる。天気の予想のように個人が決められないことは、①②では表せない。`,
      },
      {
        heading: 'be about to と、使い分けの注意',
        body: `■ be about to ＋ 動詞の原形
「まさに〜しようとしている」という、ごく近い未来を表す。
例）The concert is about to begin.（コンサートがまさに始まろうとしている）
例）I was about to go out when the phone rang.（出かけようとしたとき、電話が鳴った）
過去形にすると「〜しようとしていた」となり、割りこみの場面でよく使われる。
※ about to のうしろは必ず原形。× I was about to going out. は誤り。

■ 現在形が使えない場合
個人の意志や予想には現在形を使えない。
例）× It is sunny tomorrow.（明日は晴れます）
　　○ It will be sunny tomorrow.
天気は時刻表のように決まっているものではないので、現在形では表せない。

例）× I go to Tokyo next week.（前もって決めた個人の予定）
　　○ I am going to Tokyo next week.／I am going to go to Tokyo next week.

■ 使い分けの目安
・時刻表に書いてあるか → 現在形
・自分で手配・約束したか → 現在進行形
・前から考えていたか → be going to
・今決めた、今思ったか → will

■ 入試での出方
会話文の空所補充で、直前の発言との関係から will か be going to かを選ばせる問題が定番である。長文では、時刻表の現在形が未来のことを述べていると読み取れるかが問われる。

⚠ 注意：四つの形はどれも日本語では「〜します」になる。日本語からは選べないので、場面の情報（決定の時点・根拠・手配の有無）を必ず確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '「明日は晴れるでしょう」を英語にしなさい。',
        wrongAnswer: 'It is sunny tomorrow.',
        trapExplanation:
          '「時刻表など確定していることは現在形で未来を表せる」と習ったあとに、その用法を天気にまで広げてしまう。天気は個人にも公的機関にも決められない、という点を見落としている。',
        correctAnswer: 'It will be sunny tomorrow.',
        correctExplanation:
          '現在形で未来を表せるのは、時刻表・時間割のようにあらかじめ確定している事柄に限られる。天気の予想は話し手の推量なので will を使う。目の前の雲などの根拠があるなら It is going to be sunny. とも言える。',
      },
      {
        question: '「電話が鳴ったとき、彼はまさに出かけようとしていた」を英語にしなさい。',
        wrongAnswer: 'He was about to going out when the phone rang.',
        trapExplanation:
          'about to の to を不定詞ではなく前置詞だと考え、うしろに ing 形を置いてしまう。be going to のうしろが原形であることと同じ規則が働くことに気づいていない。',
        correctAnswer: 'He was about to go out when the phone rang.',
        correctExplanation:
          'be about to のうしろは必ず動詞の原形。be going to と同じ形だと考えるとよい。when 節の中は一瞬の出来事なので過去形 rang を使い、主節は「まさに〜しようとしていた」という状況を表している。',
      },
    ],
  },

  {
    id: 'koko_eigo_s105',
    subject: 'eigo',
    examType: 'koko',
    title: '未来⑥：Will you 〜? / Shall I 〜? / Shall we 〜?',
    description: '依頼・申し出・勧誘を表す助動詞の疑問文と、その答え方を場面ごとに整理する',
    intro:
      '「窓を開けましょうか」と申し出るとき、Will I open the window? とは言いません。相手のために自分が動くと申し出るのは Shall I 〜? です。同じ未来の助動詞でも、だれが何をするかで形が変わります。会話文で必ず問われる場面表現です。',
    order: 605,
    studyPeriod: '中2',
    targetLevel: 'oyo',
    keyPoints: [
      'Will you 〜? ／ Can you 〜? は「〜してくれませんか」という依頼。',
      'Would you 〜? ／ Could you 〜? はより丁寧な依頼。',
      'Shall I 〜? は「（私が）〜しましょうか」という申し出。答えは Yes, please. / No, thank you.',
      `Shall we 〜? は「（いっしょに）〜しませんか」という勧誘。答えは Yes, let's. / No, let's not.`,
      'Would you like 〜? は「〜はいかがですか」という勧め。',
      '依頼への答えは Sure. / All right. / I am sorry, but 〜 のように答える。',
    ],
    sections: [
      {
        heading: '依頼・申し出・勧誘の使い分け',
        body: `だれが動作をするのかで、使う形が決まる。

■ 依頼（相手にしてもらう）
Will you 〜? ／ Can you 〜?（〜してくれませんか）
例）Will you open the window?（窓を開けてくれませんか）
例）Can you help me with my homework?（宿題を手伝ってくれませんか）
より丁寧に言うなら Would you 〜? / Could you 〜? を使う。
例）Could you tell me the way to the station?（駅への道を教えていただけますか）
答え方：Sure. / All right. / OK. / Of course. ／ 断るなら I am sorry, but I am busy now.

■ 申し出（自分がする）
Shall I 〜?（〜しましょうか）
例）Shall I open the window?（窓を開けましょうか）
例）Shall I carry your bag?（かばんをお持ちしましょうか）
答え方：Yes, please.（お願いします）／ No, thank you.（けっこうです）

■ 勧誘（いっしょにする）
Shall we 〜?（いっしょに〜しませんか）
例）Shall we go to the museum this Sunday?（今度の日曜、美術館へ行きませんか）
答え方：Yes, let's.（そうしましょう）／ No, let's not.（やめておきましょう）
Let's 〜, shall we? という言い方もある。

★ ポイント：Shall I は「私が」、Shall we は「私たちが」。主語が動作をする人を示している。Will you は相手が動作をするので依頼になる。`,
      },
      {
        heading: '勧める表現と、答え方のまとめ',
        body: `■ Would you like 〜?（〜はいかがですか）
物をすすめるときに使う。
例）Would you like some tea?（お茶はいかがですか）
　－ Yes, please. / No, thank you.
Would you like to 〜?（〜しませんか）は誘う表現になる。
例）Would you like to come with us?（いっしょに来ませんか）
　－ Yes, I would love to.（ぜひ）

■ How about 〜? / Why don't we 〜?
勧誘の別の言い方。うしろの形に注意する。
例）How about going to the movies?（映画に行くのはどうですか）← ing 形
例）Why don't we go to the movies?（映画に行きませんか）← 原形
例）Why don't you come to my house?（うちに来ませんか）← 相手への提案

■ 答え方の対応表
・Shall I 〜?（申し出）→ Yes, please. / No, thank you.
・Shall we 〜?（勧誘）→ Yes, let's. / No, let's not.
・Will you 〜?（依頼）→ Sure. / All right. / I am sorry, but 〜.
・Would you like some 〜?（すすめる）→ Yes, please. / No, thank you.
質問の種類ごとに答えが決まっているので、セットで覚える。

■ 未来をたずねる Will you 〜? との区別
例）Will you be at home tomorrow? － Yes, I will.（未来の予定をたずねている）
例）Will you close the door? － Sure.（依頼している）
未来の予定をたずねているなら Yes, I will. で答え、依頼なら Sure. で答える。

⚠ 注意：Shall I 〜? に Yes, you shall. とは答えない。Yes, please. が正しい応答である。答え方を丸ごと覚えておくこと。`,
      },
    ],
    trapExamples: [
      {
        question: '「（私が）窓を開けましょうか」を英語にしなさい。',
        wrongAnswer: 'Will I open the window?',
        trapExplanation:
          '未来のことだから will、主語は自分だから I、と機械的に組み立ててしまう。Will I 〜? は「私は〜することになるでしょうか」という意味で、申し出にはならないことを知らない。',
        correctAnswer: 'Shall I open the window?',
        correctExplanation:
          '「（私が）〜しましょうか」という申し出は Shall I 〜? で表す。答えは Yes, please. / No, thank you.。相手にしてもらう依頼なら Will you open the window? となり、主語が変わることで意味が変わる点を確認する。',
      },
      {
        question: 'Shall we play tennis after school? への答えとして正しいものを選びなさい。ア Yes, we shall.　イ Yes, let\'s.',
        wrongAnswer: 'ア Yes, we shall.',
        trapExplanation:
          'Will you 〜? に Yes, I will. と答える形を思い出し、助動詞をそのまま返せばよいと考えてしまう。Shall we 〜? が勧誘の決まった言い方で、答えも決まっていることを知らない。',
        correctAnswer: `イ Yes, let's.`,
        correctExplanation:
          'Shall we 〜? は Let us 〜 と同じく勧誘を表すので、答えも Yes, let\'s. / No, let\'s not. と決まっている。Shall I 〜?（申し出）なら Yes, please. / No, thank you. と答える。質問の型ごとに答えをセットで覚えること。',
      },
    ],
  },

  // ───────────── 8. 時・条件の副詞節では未来を現在形で表す（s106〜s110） ─────────────
  {
    id: 'koko_eigo_s106',
    subject: 'eigo',
    examType: 'koko',
    title: '時・条件の副詞節①：未来のことでも現在形',
    description: 'when / if で始まる副詞節の中では will を使わない、という規則を図で理解する',
    intro:
      '「彼が来たら、私は彼に伝えます」。どちらもこれから起こることなのに、英語では前半だけ現在形で書きます。When he comes, I will tell him. 未来の話なのに現在形。この不思議な規則は、高校入試で最もよく問われる時制のきまりです。',
    order: 606,
    studyPeriod: '中2',
    targetLevel: 'moshi',
    keyPoints: [
      '時・条件を表す副詞節の中では、未来のことでも will を使わず現在形で表す。',
      '対象となる接続詞：when / if / before / after / until (till) / as soon as / by the time / unless。',
      '主節（もう一方）は will のままにする。両方を現在形にしてはいけない。',
      '副詞節が前に来るときは、節の終わりにコンマを置く。',
      '節の中の主語が三人称単数なら、現在形なので -s が必要（When he comes 〜）。',
      '過去の文では、副詞節の中も過去形にする（When he came, I told him.）。',
    ],
    sections: [
      {
        heading: '規則と例文',
        figureId: 'lf_kokoeigoext03_106',
        body: `■ 規則
時や条件を表す副詞節の中では、未来のことであっても will を使わず現在形で表す。

例）When he comes, I will tell him about it.（彼が来たら、そのことを彼に伝えます）
　　× When he will come, I will tell him about it.
例）If it rains tomorrow, we will stay home.（明日雨が降ったら、家にいます）
　　× If it will rain tomorrow, we will stay home.
例）I will call you as soon as I arrive at the station.（駅に着いたらすぐ電話します）
　　× as soon as I will arrive

■ 対象になる接続詞
時：when（〜するとき）／before（〜する前に）／after（〜したあとに）／until, till（〜するまで）／as soon as（〜するとすぐに）／by the time（〜するまでには）／while（〜する間に）
条件：if（もし〜なら）／unless（〜しなければ）

■ 主節は will のまま
副詞節だけが現在形になる。主節まで現在形にしてはいけない。
例）× When he comes, I tell him.
　　○ When he comes, I will tell him.
「彼が来たら伝えます」という未来の内容は、主節の will が担っている。

■ コンマの位置
副詞節を前に置いたときは、節の終わりにコンマを打つ。うしろに置くときはコンマは不要。
例）If you are free tomorrow, let's go shopping.
例）Let's go shopping if you are free tomorrow.

★ ポイント：節の中が現在形でも、意味は未来である。「現在形で書くが、未来のことを表している」と理解しておく。`,
      },
      {
        heading: '書くときの注意点',
        body: `■ 三単現の -s を忘れない
副詞節の中は現在形なので、主語が三人称単数なら -s が必要になる。
例）When he comes home, I will tell him.（× When he come home）
例）If she wants to join us, she can come.（× If she want）
will を消すことばかりに気を取られて、-s を落とす誤りが非常に多い。

■ be動詞の場合
現在形の be動詞（am / is / are）を使う。
例）If it is sunny tomorrow, we will go on a picnic.（× If it will be sunny）
例）When you are ready, tell me.（用意ができたら教えてください）

■ 過去の文では過去形にそろえる
この規則は「未来のことでも現在形」というものなので、過去の話では素直に過去形を使う。
例）When he came, I told him about it.（彼が来たとき、そのことを伝えた）
例）I waited until she arrived.（彼女が着くまで待った）

■ なぜこの規則があるのか
when や if が示す時点は、主節の will によってすでに「未来のこと」だとわかっている。同じ情報を二回示す必要がないため、節の中では時制の目印を省いた形（現在形）を使う、と考えられている。理屈を知っておくと定着しやすい。

⚠ 注意：この規則が使えるのは副詞節のときだけである。同じ when / if でも、名詞節（「いつ〜か」「〜かどうか」）のときは will をそのまま使う。この区別は次の課で扱う。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼が来たら、私は彼にそのことを話します」を英語にしなさい。',
        wrongAnswer: 'When he will come, I will tell him about it.',
        trapExplanation:
          '「来たら」も「話します」もこれから起こることなので、両方に will を付けてしまう。時・条件を表す副詞節の中では will を使わないという規則を知らないと必ずこう書く。',
        correctAnswer: 'When he comes, I will tell him about it.',
        correctExplanation:
          '時を表す副詞節（when 〜）の中では、未来のことでも現在形を使う。主語 he が三人称単数なので comes と -s を付けることも忘れない。主節 I will tell him は will のままでよい。この形は入試で最も多く問われる。',
      },
      {
        question: '「明日雨が降ったら、私たちは家にいます」を英語にしなさい。',
        wrongAnswer: 'If it rains tomorrow, we stay home.',
        trapExplanation:
          '「if 節の中は現在形」という規則を覚えた結果、文全体を現在形にしてしまう。現在形にするのは副詞節の中だけで、主節は will のままだという区別ができていない。',
        correctAnswer: 'If it rains tomorrow, we will stay home.',
        correctExplanation:
          '現在形にするのは if 節・when 節などの副詞節の中だけ。主節は未来のことなので will を使う。両方を現在形にすると「雨が降ると家にいることにしている」という習慣の意味になってしまう。節と主節を分けて考える。',
      },
    ],
  },

  {
    id: 'koko_eigo_s107',
    subject: 'eigo',
    examType: 'koko',
    title: '時・条件の副詞節②：名詞節の when / if は will のまま',
    description: '同じ when / if でも、名詞節なら未来のことは will で表す、という区別を身につける',
    intro:
      `I don't know when he will come. この文では when 節に will が入っています。前の課で「when 節に will は使わない」と習ったのに、なぜでしょう。実は同じ when でも、はたらきが二種類あります。見分け方はとても単純です。`,
    order: 607,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      '副詞節の when は「〜するとき」、名詞節の when は「いつ〜か」。',
      '副詞節の if は「もし〜なら」、名詞節の if は「〜かどうか」。',
      `名詞節では未来のことを will で表す（I don't know when he will come.）。`,
      '見分け方：節を取り去っても文が成り立つなら副詞節、成り立たないなら名詞節。',
      'know / tell / ask / wonder / be sure などの目的語になっていれば名詞節。',
      'Tell me when he comes.（帰ってきたら教えて）と Tell me when he will come.（いつ帰るか教えて）は意味が違う。',
    ],
    sections: [
      {
        heading: '副詞節と名詞節の見分け方',
        body: `同じ when / if でも、文の中でのはたらきが二種類ある。

■ 副詞節（〜するとき／もし〜なら）
文の中心となる内容にとって、なくても文が成立する飾りの部分。
例）I will tell him when he comes.
→ when he comes を取り去っても I will tell him. で文が成り立つ。だから副詞節。
→ 副詞節なので、中は現在形にする。

■ 名詞節（いつ〜か／〜かどうか）
動詞の目的語になっていて、取り去ると文が成り立たない部分。
例）I don't know when he will come.
→ when he will come を取り去ると I don't know. となり、「何を知らないのか」が消えてしまう。know の目的語なので名詞節。
→ 名詞節なので、未来のことは will で表す。

■ 判定手順
①その節を丸ごとかっこでくくって取り去ってみる。
②残った部分だけで文の意味が完結するか。
　完結する → 副詞節 → 節の中は現在形
　完結しない（目的語が足りない）→ 名詞節 → will を使う

■ 名詞節を取りやすい動詞
know / tell / ask / wonder / find out / remember / be sure / be afraid
例）Do you know when the concert will start?（コンサートがいつ始まるか知っていますか）
例）I wonder if it will rain tomorrow.（明日雨が降るだろうか）

★ ポイント：訳し方でも見分けられる。「〜するとき」「もし〜なら」と訳せれば副詞節、「いつ〜か」「〜かどうか」と訳せれば名詞節である。`,
      },
      {
        heading: '意味が変わる例と、語順の注意',
        body: `■ 同じ形で意味が変わる
（1）Please let me know when he comes back.
　　（彼が帰ってきたら、知らせてください）＝副詞節
（2）Please let me know when he will come back.
　　（彼がいつ帰ってくるか、知らせてください）＝名詞節
（1）は「帰ってきた時点で知らせて」、（2）は「帰る時刻を教えて」という意味になる。同じ日本語の「教えて」でも内容がまったく違う。

■ if も同じ
（1）I will go out if it is fine tomorrow.
　　（明日晴れたら出かけます）＝副詞節
（2）I don't know if it will be fine tomorrow.
　　（明日晴れるかどうかわかりません）＝名詞節

■ 名詞節の語順（間接疑問）
名詞節の中は疑問文の語順にしない。〈疑問詞＋主語＋動詞〉の順にする。
例）× Do you know when will he come?
　　○ Do you know when he will come?
例）× I don't know what is this.
　　○ I don't know what this is.
疑問詞のうしろは平叙文の語順、と覚えておく。

■ 入試での出方
・空所補充で comes と will come のどちらかを選ばせる。
・並べかえで間接疑問の語順を問う。
・和訳で「〜したら」と「いつ〜か」を訳し分けさせる。

⚠ 注意：判定を急がず、必ず「節を取り去って文が成り立つか」を確かめる。訳だけで判断すると、日本語のあいまいさに引きずられて誤る。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼がいつ来るか、あなたは知っていますか」を英語にしなさい。',
        wrongAnswer: 'Do you know when he comes?',
        trapExplanation:
          '「when 節の中では will を使わない」という規則を覚えたため、名詞節にもそのまま当てはめてしまう。この when が know の目的語になっていることを見落としている。',
        correctAnswer: 'Do you know when he will come?',
        correctExplanation:
          'when he will come は know の目的語になる名詞節なので、未来のことは will で表す。when 節を取り去ると Do you know? となり、何を知っているのかが欠けてしまうことが名詞節の証拠である。副詞節なら現在形にする。',
      },
      {
        question: '「彼が帰ってきたら、私に知らせてください」を英語にしなさい。',
        wrongAnswer: 'Please let me know when he will come back.',
        trapExplanation:
          'let me know のうしろだから名詞節だと考え、will を入れてしまう。しかしここで伝えたいのは「帰る時刻」ではなく「帰ってきた時点で知らせてほしい」という条件である。',
        correctAnswer: 'Please let me know when he comes back.',
        correctExplanation:
          '「帰ってきたら（そのとき）知らせて」という意味なので、when 節は時を表す副詞節であり、中は現在形 comes になる。will を入れた文は「彼がいつ帰るのか、その予定を教えて」という別の意味になる。日本語の内容から、どちらを問うているかを見きわめる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s108',
    subject: 'eigo',
    examType: 'koko',
    title: '時・条件の副詞節③：before / after / until / as soon as',
    description: '時を表す接続詞ごとの意味と、until と by の使い分けを整理する',
    intro:
      '「5時までに終えます」と「5時まで待ちます」。日本語では「まで」の一字違いですが、英語では by と until というまったく別の語を使います。期限の一点なのか、続く帯なのか。時を表す語は、この違いで選び分けます。',
    order: 608,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      'before（〜する前に）／after（〜したあとに）／until, till（〜するまでずっと）／as soon as（〜するとすぐに）／by the time（〜するまでには）。',
      'これらの節の中では、未来のことでも現在形を使う。',
      'until は動作や状態が続く「帯」、by は期限の「点」。',
      'by は前置詞なのでうしろに名詞（by five）、by the time は接続詞なのでうしろに文が来る。',
      'as soon as は接続詞なのでうしろに文が来る（as soon as I arrive）。',
      'after / before は前置詞としても使え、その場合はうしろに名詞や動名詞が来る。',
    ],
    sections: [
      {
        heading: '時を表す接続詞と現在形の規則',
        figureId: 'lf_kokoeigoext03_108',
        body: `■ 主な接続詞と例文（節の中は現在形）
・before（〜する前に）
例）Wash your hands before you eat lunch.（昼食を食べる前に手を洗いなさい）
例）I will finish this before he comes.（彼が来る前にこれを終えます）
・after（〜したあとに）
例）I will call you after I get home.（家に着いたら電話します）
・until / till（〜するまでずっと）
例）Please wait here until I come back.（もどるまでここで待っていてください）
・as soon as（〜するとすぐに）
例）I will let you know as soon as I hear from him.（彼から連絡があり次第、お知らせします）
・by the time（〜するまでには）
例）I will finish my homework by the time you come home.（あなたが帰るまでには宿題を終えます）
　※ by は前置詞なのでうしろに名詞（by five）、by the time は接続詞なのでうしろに文が来る。

いずれの節でも、未来のことであっても will を使わず現在形にする。
例）× as soon as I will arrive　○ as soon as I arrive

■ 主節は will のまま
例）I will go out as soon as the rain stops.（雨がやんだらすぐ出かけます）
節の中だけが現在形になる。

★ ポイント：これらの接続詞はすべて「時」を表すので、when と同じ扱いになる。接続詞を覚えるときは「時を表すグループ」としてまとめて覚える。`,
      },
      {
        heading: 'until と by の使い分け',
        body: `日本語ではどちらも「〜まで」と訳せるが、英語では意味がはっきり違う。

■ until（till）＝「〜までずっと」
その時点まで動作や状態が続くことを表す。continue のイメージ。
例）I will wait until five.（5時まで待ちます）＝5時まで待ち続ける
例）She stayed in Kyoto until last Sunday.（先週の日曜まで京都に滞在した）
※ うしろに文を続けることもできる。
例）Wait here until I come back.

■ by ＝「〜までには」
その時点までに動作が一回完了することを表す。期限を示す。
例）I will finish my homework by five.（5時までに宿題を終えます）＝5時より前のどこかで終える
例）Please come here by nine.（9時までにここに来てください）
※ by は前置詞なので、うしろには名詞が来る。文を続けるときは by the time を使う。
例）Please finish it by the time I come back.（私がもどるまでに終えておいてください）

■ 判断のしかた
動詞が「続く」動作（wait / stay / sleep / study）なら until、「一回で終わる」動作（finish / come / return / hand in）なら by を選ぶ。

■ 前置詞としても使える語
before / after / until は前置詞としても使え、うしろに名詞や動名詞を置ける。
例）before dinner（夕食前に）／after school（放課後）／until tomorrow（明日まで）
例）Wash your hands before eating.（食べる前に手を洗いなさい）

⚠ 注意：× I will finish it until five. は誤り。finish は一回で終わる動作なので by を使う。until と by の取りちがえは、書きかえ問題でも頻繁に出題される。`,
      },
    ],
    trapExamples: [
      {
        question: '「駅に着いたらすぐに電話します」を英語にしなさい。',
        wrongAnswer: 'I will call you as soon as I will arrive at the station.',
        trapExplanation:
          '「着いたら」も未来のことなので will を付けてしまう。as soon as が when と同じ「時を表す接続詞」であり、その節の中では現在形を使うことを見落としている。',
        correctAnswer: 'I will call you as soon as I arrive at the station.',
        correctExplanation:
          'as soon as は時を表す接続詞なので、節の中は未来のことでも現在形にする。主節 I will call you は will のままでよい。before / after / until / by the time も同じグループなので、まとめて覚えておく。',
      },
      {
        question: '「私は5時までに宿題を終えます」を英語にしなさい。',
        wrongAnswer: 'I will finish my homework until five.',
        trapExplanation:
          '日本語の「まで」を until と一対一で対応させてしまう。until が「その時点までずっと続く」ことを表すのに対し、この文は期限を述べていることを区別できていない。',
        correctAnswer: 'I will finish my homework by five.',
        correctExplanation:
          'finish は一回で完了する動作なので、期限を表す by を使う。until を使うと「5時まで宿題を終え続ける」という意味不明な文になる。続く動作なら until（I will wait until five.）、完了する動作なら by と使い分ける。',
      },
    ],
  },

  {
    id: 'koko_eigo_s109',
    subject: 'eigo',
    examType: 'koko',
    title: '時・条件の副詞節④：unless と条件を表すさまざまな形',
    description: 'unless の意味と、命令文＋and / or など条件を表す言い方を整理する',
    intro:
      'unless は「もし〜でなければ」と訳します。ではその節の中を否定形にすると、どうなるでしょう。答えは、否定が二重になって意味がひっくり返ってしまいます。unless はそれ自体に否定を含む語だ、という一点を押さえておきましょう。',
    order: 609,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      'unless ＝ if 〜 not（もし〜しなければ）。節の中を否定形にしない。',
      'unless の節の中も、未来のことは現在形で表す。',
      '〈命令文, and 〜〉＝「〜しなさい、そうすれば〜」。',
      '〈命令文, or 〜〉＝「〜しなさい、そうしないと〜」。',
      'in case 〜（〜の場合に備えて）／once 〜（いったん〜すれば）も条件を表す。',
      'if 節を使った書きかえ問題では、否定の位置に注意する。',
    ],
    sections: [
      {
        heading: 'unless の使い方',
        body: `■ 意味と形
unless は「もし〜しなければ」という意味で、if 〜 not とほぼ同じ内容を表す。
例）Unless it rains tomorrow, we will play soccer.
　＝ If it does not rain tomorrow, we will play soccer.（明日雨が降らなければサッカーをします）

■ 否定を重ねない
unless にすでに「〜しなければ」という否定が含まれているので、節の中をさらに否定形にしてはいけない。
例）× Unless it doesn't rain tomorrow, we will play soccer.
　　→ 「雨が降らなければ、でない場合」となって意味が通らない。
never や no を重ねてはいけないのと同じ考え方である。

■ 節の中は現在形
条件を表す副詞節なので、未来のことでも現在形を使う。
例）× Unless he will come, we will start without him.
　　○ Unless he comes, we will start without him.（彼が来なければ、彼を待たずに始めます）

■ 書きかえ練習
・If you are not busy, please help me.
　＝ Unless you are busy, please help me.
・You will fail if you do not study hard.
　＝ You will fail unless you study hard.
if 〜 not を unless に変えるときは、not を消して肯定の形にすることを忘れない。

★ ポイント：unless は「〜しない限り」と訳すと感覚がつかみやすい。「その条件が成り立たない限りは」という強い条件を表す。`,
      },
      {
        heading: '命令文＋and / or と、そのほかの条件表現',
        body: `■ 〈命令文, and 〜〉＝そうすれば
例）Hurry up, and you will catch the train.（急ぎなさい、そうすれば電車に間に合います）
　＝ If you hurry up, you will catch the train.

■ 〈命令文, or 〜〉＝そうしないと
例）Hurry up, or you will miss the train.（急ぎなさい、そうしないと電車に乗り遅れます）
　＝ If you do not hurry up, you will miss the train.
　＝ Unless you hurry up, you will miss the train.

and と or のどちらを使うかで意味が正反対になるので、必ず後半の内容を確認する。よい結果が続くなら and、悪い結果が続くなら or である。

■ in case（〜の場合に備えて）
例）Take an umbrella in case it rains.（雨が降るといけないから、かさを持っていきなさい）
節の中は現在形にする（× in case it will rain）。

■ once（いったん〜すれば）
例）Once you learn how to ride a bike, you never forget it.（いったん自転車の乗り方を覚えれば、忘れることはない）

■ as long as（〜する限りは）
例）You can stay here as long as you keep quiet.（静かにしている限り、ここにいてよい）

⚠ 注意：〈命令文, or 〜〉の or を and と書きまちがえると、意味が正反対になって大きな失点になる。書きかえ問題では、if 節が否定になっているかどうかを最後に必ず確認すること。`,
      },
    ],
    trapExamples: [
      {
        question: '「明日雨が降らなければ、私たちは出かけます」を unless を使って英語にしなさい。',
        wrongAnswer: `Unless it doesn't rain tomorrow, we will go out.`,
        trapExplanation:
          '「降らなければ」という日本語の否定をそのまま節の中に入れてしまう。unless がすでに「〜しなければ」という否定の意味を含んでいることを見落としている。',
        correctAnswer: 'Unless it rains tomorrow, we will go out.',
        correctExplanation:
          'unless ＝ if 〜 not なので、節の中は肯定形のまま書く。否定を重ねると意味が反対になってしまう。if を使うなら If it does not rain tomorrow, we will go out. となる。書きかえるときは not を消す、と覚える。',
      },
      {
        question: '「急ぎなさい、そうしないと電車に乗り遅れますよ」を英語にしなさい。',
        wrongAnswer: 'Hurry up, and you will miss the train.',
        trapExplanation:
          '命令文のあとは and でつなぐ、と一方だけを覚えてしまう。後半が「乗り遅れる」という悪い結果であることに注意を向けていないため、意味が正反対の文になっている。',
        correctAnswer: 'Hurry up, or you will miss the train.',
        correctExplanation:
          '〈命令文, or 〜〉は「そうしないと〜」、〈命令文, and 〜〉は「そうすれば〜」を表す。後半が悪い結果なら or を使う。この文は If you do not hurry up, you will miss the train. または Unless you hurry up, you will miss the train. と書きかえられる。',
      },
    ],
  },

  {
    id: 'koko_eigo_s110',
    subject: 'eigo',
    examType: 'koko',
    title: '時制総合：入試問題で動詞の形を決める手順',
    description: '時を示す語句・主語・節の種類という三点から、動詞の形を確実に決める手順をまとめる',
    intro:
      '時制の問題は、知識を思い出す問題ではなく手順の問題です。時を示す語句を探し、主語を確かめ、その動詞が節の中かどうかを見る。この三つを毎回同じ順で行えば、迷う時間が消えます。最後にこの手順を組み立てて、単元を締めくくりましょう。',
    order: 610,
    studyPeriod: '中2',
    targetLevel: 'nyushi',
    keyPoints: [
      '手順①時を示す語句を探す ②主語を確かめる ③節の中かどうかを見る。',
      'yesterday / last 〜 / 〜 ago → 過去形。now / Look! → 現在進行形。every day → 現在形。',
      'tomorrow / next 〜 → will / be going to / 現在進行形（手配ずみ）。',
      '時・条件を表す副詞節の中は、未来のことでも現在形。',
      '状態動詞は進行形にしない。',
      'did / does / will / can のうしろは必ず原形。',
    ],
    sections: [
      {
        heading: '動詞の形を決める三段階の手順',
        figureId: 'lf_kokoeigoext03_110',
        body: `■ 手順①：時を示す語句を探す
文中の時の情報が、最も確実な手がかりになる。
・yesterday / last week / three days ago / then / in 2020 → 過去形
・now / at this moment / Look! / Listen! → 現在進行形
・every day / usually / always / on Sundays → 現在形
・tomorrow / next week / soon / someday → will / be going to / 現在進行形
・at eight last night / when 〜（過去） → 過去進行形
・for 〜 / since 〜 / just / already / yet → 現在完了

■ 手順②：主語を確かめる
・三人称単数か（現在形なら -s、be動詞なら is / was）
・複数か（be動詞なら are / were）
・主語が長いときは前置詞句を外して中心語を見る

■ 手順③：その動詞が節の中かどうか
・when / if / before / after / until / as soon as / unless の副詞節の中なら、未来のことでも現在形
・know / tell / ask などの目的語になる名詞節なら、未来のことは will

■ 追加の確認
・その動詞は状態動詞か（進行形にしない）
・did / does / will / can / to のうしろか（原形にする）

★ ポイント：三段階を毎回同じ順で行うことが大切である。手順を決めておけば、難しい文でも判断が止まらない。`,
      },
      {
        heading: '練習問題で手順を試す',
        body: `■ 練習1
I （watch） TV when my mother came home.
①時を示す語句：when my mother came home（過去のある時点）
②主語：I
③節の外（主節）
→ 帰宅という一瞬の出来事に対して、テレビを見ていたのは続いていた動作。答えは was watching。

■ 練習2
When I （see） him next week, I will give him this book.
①時を示す語句：next week（未来）
②主語：I
③when の副詞節の中（次の I will give 〜 が主節）
→ 副詞節なので現在形。答えは see。

■ 練習3
Do you know when the concert （start）?
①時を示す語句：なし
②主語：the concert（三人称単数）
③know の目的語になる名詞節
→ 名詞節なので未来は will。答えは will start。

■ 練習4
He （have） three dogs now.
①時を示す語句：now
②主語：He（三人称単数）
③節の外
→ have は「持っている」という状態の意味なので進行形にしない。答えは has。

■ 練習5
She （not, come） to school yesterday.
①時を示す語句：yesterday（過去）
②主語：She
③節の外
→ 過去の否定文なので did not ＋ 原形。答えは did not come。

⚠ 注意：時を示す語句がない問題では、前後の文の時制がそろっているかどうかを見る。物語文なら全体が過去形で書かれているので、その流れに合わせる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私が昨日彼を訪ねたとき、彼は本を読んでいました」を英語にしなさい。',
        wrongAnswer: 'When I visited him yesterday, he read a book.',
        trapExplanation:
          '文全体が過去の話なので、二つの動詞をどちらも過去形にしてしまう。「訪ねた」が一瞬の出来事で、「読んでいた」が続いていた動作であるという役割の違いを表せていない。',
        correctAnswer: 'When I visited him yesterday, he was reading a book.',
        correctExplanation:
          '訪問という一瞬の出来事に対して、読書は続いていた動作なので過去進行形にする。he read a book とすると「彼が本を一冊読み終えた」という別の意味になる。点と帯を決めてから時制を割りあてる。',
      },
      {
        question: '「来週彼に会ったら、この本を返します」を英語にしなさい。',
        wrongAnswer: 'When I will see him next week, I will return this book.',
        trapExplanation:
          'next week という未来を示す語句があるので、両方の動詞に will を付けてしまう。when 節が時を表す副詞節であり、その中では現在形を使うという規則が抜けている。',
        correctAnswer: 'When I see him next week, I will return this book.',
        correctExplanation:
          '時を表す副詞節（when 〜）の中では、未来のことでも現在形を使うので see とする。主節 I will return this book は will のままでよい。when 節を取り去っても I will return this book. で文が成り立つので、副詞節だと確認できる。',
      },
    ],
  },
];
