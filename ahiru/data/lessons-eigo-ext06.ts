import type { Lesson } from './lesson-types';

// 中学受験 英語「疑問詞・疑問文・否定文の作り方」拡張ユニット（35セッション：eigo_s191〜eigo_s225）
// order は 691〜725。
// 構成：Yes/No疑問文の作り方(5)／what・which(4)／who・whose・whom(4)／when・where(3)／
//       why と because・How come(3)／how の基本と How+形容詞・副詞(6)／
//       疑問詞が主語になる疑問文(3)／間接疑問文(4)／否定文と部分否定・全体否定(3)
// 図解は語順（polygon の四辺を①→④の箱に見立てる）と、頻度・範囲・分類など
// 数量で示せる箇所だけに付けてある（lesson-figs-eigo-ext06.ts、35課中16課）。
export const eigoExt06Lessons: Lesson[] = [
  // ─────────────── 1. Yes/No疑問文の作り方（s191〜s195） ───────────────
  {
    id: 'eigo_s191',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Yes/No疑問文①：be動詞の文をたずねる形にする',
    description: 'be動詞を主語の前に出すだけで疑問文になることを、語順の箱で理解する',
    intro: '「あなたは日本の出身ですか」を英語にすると Are you from Japan? です。日本語は文の最後に「か」を付けるだけですが、英語は語順そのものを入れかえます。You are 〜 の are を前に出すだけ。この「箱を入れかえる」動きが、英語の疑問文すべての土台になります。',
    order: 691,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞（am / is / are）の文は、be動詞を主語の前に出すだけで疑問文になる。',
      '語順は「be動詞＋主語＋残りの語＋?」。文の終わりの ? を書き忘れない。',
      'be動詞の疑問文に do・does は絶対に使わない（Does he is 〜? は誤り）。',
      'be動詞は主語に合わせる。Am I 〜? / Is he 〜? / Are they 〜? と形が変わる。',
      '答えは Yes, 主語＋be動詞. / No, 主語＋be動詞＋not. の形にする。',
    ],
    sections: [
      {
        heading: 'be動詞の文を疑問文にする手順',
        body: `英語の疑問文は「日本語のように文の終わりに『か』を付ける」のではなく、語の順番を入れかえて作る。be動詞の文はいちばんかんたんで、be動詞を主語の前に持ち上げるだけでよい。

■ 手順は二つだけ
①be動詞（am / is / are）を主語の前に出す
②文の終わりのピリオド（.）をクエスチョンマーク（?）に変える

例）This is your book.（これはあなたの本です）
　→ Is this your book?（これはあなたの本ですか）

例）You are a student.
　→ Are you a student?

例）They are in the park.
　→ Are they in the park?

■ 主語に合わせて be動詞の形が変わる
I → am／he, she, it, 単数の名詞 → is／you, we, they, 複数の名詞 → are
例）Is your sister a nurse?（sister は単数なので is）
例）Are those boys your friends?（those boys は複数なので are）

⚠ 注意：疑問文にしても be動詞の形は変わらない。もとの文が is なら Is 〜?、are なら Are 〜? のままである。「疑問文だから are にする」といった思いこみでの書きかえは誤り。

★ ポイント：be動詞の文には do や does を使う場所がない。Does he is a teacher? のように二つ重ねてしまう誤りが非常に多いので、「be動詞の文はbe動詞だけを動かす」と唱えて覚える。`,
        figureId: 'lf_eigoext06_191',
      },
      {
        heading: '短く答える形（Yes / No の答え方）',
        body: `Yes/No疑問文には Yes か No で答える。そのあとに「主語＋be動詞」を付けるのが英語の決まりで、これを短答（たんとう）という。

■ 答えの形
Yes, 主語＋be動詞.
No, 主語＋be動詞＋not.

例）Are you a student? — Yes, I am. / No, I am not.（No, I'm not.）
例）Is this your bag? — Yes, it is. / No, it is not.（No, it isn't.）
例）Are they teachers? — Yes, they are. / No, they aren't.

■ 答えの主語は代名詞に置きかえる
たずねられた名詞をそのままくり返さず、代名詞にする。
This / That → it　　These / Those → they
your father → he　　your mother → she　　you and Ken → we

例）Is that your house? — Yes, it is.（Yes, that is. とはしない）
例）Are you and your brother busy? — Yes, we are.（Yes, I am. ではない）

■ Yes の答えでは短縮形を使わない
No, I'm not. は言えるが、Yes, I'm. とは言えない。文の最後に来る be動詞は短縮できないからである。Yes, I am. / Yes, it is. / Yes, they are. と、必ずのばした形で書く。

★ ポイント：短答は「Yes/No」＋「主語」＋「be動詞」の三点セット。三つそろっているかを毎回指さし確認するとミスが消える。`,
      },
    ],
    trapExamples: [
      {
        question: 'He is a teacher. を疑問文に書きかえなさい。',
        wrongAnswer: 'Does he is a teacher?',
        trapExplanation:
          '「疑問文には do や does を付ける」とだけ覚えているため、be動詞の文にも does を足してしまう。動詞が二つ（does と is）並んでしまっている点に気づけない。',
        correctAnswer: 'Is he a teacher?',
        correctExplanation:
          'be動詞の文は be動詞そのものを主語の前に出すだけでよい。He is 〜 → Is he 〜? と入れかえ、最後を ? にする。do・does は一般動詞（play, like, go など）の文だけに使う道具で、be動詞の文には出番がない。',
      },
      {
        question: 'Are you a soccer fan? に Yes で答えなさい。',
        wrongAnswer: `Yes, I'm.`,
        trapExplanation:
          `I am を I'm と縮めるくせがついているため、答えの文でもそのまま短縮してしまう。ふだん使う I'm a student. の形につられるのが原因。`,
        correctAnswer: 'Yes, I am.',
        correctExplanation:
          `短縮形は「うしろに語が続くとき」だけ使える。Yes, I am. の am は文の最後に来ているので縮められない。ただし No, I'm not. は not がうしろに続くので短縮してよい。「Yes はのばす、No は縮めてよい」と覚える。`,
      },
    ],
  },

  {
    id: 'eigo_s192',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Yes/No疑問文②：一般動詞の文と Do / Does',
    description: 'Do・Does を先頭に置き、動詞を原形に戻す手順を身につける',
    intro: 'He plays tennis. を疑問文にするとき、Does he plays tennis? と書きたくなります。でも正しくは Does he play tennis? です。三人称の s は Does がすでに引き受けているので、動詞は原形に戻ります。s を二度使わない、というのがこの単元のかんじんな点です。',
    order: 692,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '一般動詞（play, like, go, have など）の文は Do / Does を文の先頭に置いて疑問文にする。',
      '主語が三人称単数（he, she, it, Ken, my sister など）のときだけ Does を使う。',
      'Does を使ったら動詞の s を取って原形に戻す（Does he play 〜?）。',
      '答えは Yes, 主語＋do(does). / No, 主語＋don’t(doesn’t). の形。',
      'be動詞と一般動詞を一つの文に二つ並べない（Are you play 〜? は誤り）。',
    ],
    sections: [
      {
        heading: 'Do と Does の使い分け',
        body: `一般動詞の文には、be動詞のように前に出せる語がない。そこで Do / Does という助っ人（助動詞）を文の先頭に置いて疑問文を作る。

■ 手順
①主語を見て Do か Does かを決める
②それを文の先頭に置く
③動詞を原形（s の付かない形）に戻す
④最後を ? にする

例）You play tennis. → Do you play tennis?
例）They live in Osaka. → Do they live in Osaka?
例）He plays tennis. → Does he play tennis?（plays の s が消える）
例）Your sister likes music. → Does your sister like music?（likes → like）

■ Does を使う主語
he / she / it、および Ken・my father・that girl・The dog のように「一人（一つ）で、私でもあなたでもないもの」。これを三人称単数という。
それ以外（I, you, we, they, 複数の名詞）はすべて Do。

■ なぜ動詞が原形に戻るのか
三単現の s は「今のことで、主語が三人称単数」という印である。その印を Does がまとめて引き受けるため、動詞にまで s を付けると印が二重になってしまう。だから動詞は s のない形に戻る。

⚠ 注意：Does he plays 〜? は入試で最も多い誤りの一つ。Does を書いた瞬間に「動詞から s を消す」と手を動かす習慣をつける。`,
        figureId: 'lf_eigoext06_192',
      },
      {
        heading: '答え方と、be動詞の文との区別',
        body: `■ 短く答える形
Yes, 主語＋do / does.
No, 主語＋don't / doesn't.

例）Do you like natto? — Yes, I do. / No, I don't.
例）Does Ken play the piano? — Yes, he does. / No, he doesn't.
例）Do your parents speak English? — Yes, they do. / No, they don't.

答えの中に動詞をくり返す必要はない。Yes, I like it. と答えてもよいが、短答では do / does で受けるのが基本形である。

■ be動詞の文か、一般動詞の文かを先に見分ける
疑問文を作るとき、いちばん最初にすることは「この文の動詞はどちらか」を決めることである。
・動詞が am / is / are → be動詞の文 → be動詞を前に出す
・動詞が play / like / go / have / study など → 一般動詞の文 → Do / Does を前に置く

例）You are a student.（be動詞）→ Are you a student?
例）You study English.（一般動詞）→ Do you study English?

⚠ 注意：Are you play soccer? のように be動詞と一般動詞を並べた文は存在しない。一つの文に「動くもの（動詞）」は原則一つだけだと覚えておく。

★ ポイント：have は「持っている」という一般動詞。Have you a pen? ではなく Do you have a pen? が中学受験で求められる形である。`,
      },
    ],
    trapExamples: [
      {
        question: 'He plays tennis every Sunday. を疑問文に書きかえなさい。',
        wrongAnswer: 'Does he plays tennis every Sunday?',
        trapExplanation:
          'もとの文の plays をそのまま書き写してしまう。Does を付けたことで三単現の印がすでに使われていることに気づかず、s を二重に付けている。',
        correctAnswer: 'Does he play tennis every Sunday?',
        correctExplanation:
          'Does が「今のこと・主語は三人称単数」という情報をすべて引き受けるので、動詞は原形の play に戻す。書きかえのときは「Does を書く → 動詞の s を消す」を必ずセットで行う。過去の Did でも同じで、Did he play 〜? と原形になる。',
      },
      {
        question: '「あなたはサッカーをしますか」を英語にしなさい。',
        wrongAnswer: 'Are you play soccer?',
        trapExplanation:
          '「疑問文は文の先頭に語を置く」とだけ覚えていて、置く語が Are なのか Do なのかを区別していない。be動詞をとりあえず先頭に出すくせが原因。',
        correctAnswer: 'Do you play soccer?',
        correctExplanation:
          'この文の動詞は play という一般動詞なので、先頭に置くのは Do である。be動詞の Are を使ってよいのは Are you a soccer player?（あなたはサッカー選手ですか）のように、うしろが名詞や形容詞で動詞がないときだけ。動詞の種類を見てから先頭の語を決める。',
      },
    ],
  },

  {
    id: 'eigo_s193',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Yes/No疑問文③：過去の文をたずねる（Was / Were / Did）',
    description: '過去の疑問文で be動詞と Did を使い分け、動詞を原形に戻す',
    intro: 'He went to Kyoto. を疑問文にすると、Did he went to Kyoto? としてしまいがちです。正しくは Did he go to Kyoto?。過去を表す仕事は Did が引き受けるので、動詞は原形の go に戻ります。せっかく覚えた不規則動詞を、ここでは使ってはいけないのです。',
    order: 693,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '過去のbe動詞の文は was / were を主語の前に出す（Was he 〜? / Were you 〜?）。',
      'was を使う主語は I, he, she, it, 単数名詞。were を使う主語は you, we, they, 複数名詞。',
      '過去の一般動詞の文は Did を先頭に置き、動詞は必ず原形に戻す（Did you go 〜?）。',
      '答えは Yes, 主語＋was(were / did). / No, 主語＋wasn’t(weren’t / didn’t).',
      'yesterday, last night, 〜 ago, then などの語があれば過去の文だと見抜く。',
    ],
    sections: [
      {
        heading: '過去のbe動詞の疑問文（Was / Were）',
        body: `過去の文でも作り方は現在と同じで、be動詞を主語の前に出すだけである。ちがうのは be動詞が was / were になっている点だけ。

■ was と were の使い分け
I was / He was / She was / It was / My father was（単数）
You were / We were / They were / My friends were（複数）

例）You were busy yesterday. → Were you busy yesterday?
例）He was at home last night. → Was he at home last night?
例）The books were on the desk. → Were the books on the desk?

■ 答え方
Yes, 主語＋was / were.　No, 主語＋wasn't / weren't.
例）Were you tired? — Yes, I was. / No, I wasn't.

⚠ 注意：you の be動詞は、一人でも二人以上でも were である。Was you happy? という誤りが非常に多い。「you はいつも are / were」と丸ごと覚えてしまうとよい。

■ 過去だと見抜く手がかり
yesterday（きのう）、last Sunday（この前の日曜）、two days ago（二日前）、then（そのとき）、at that time（当時）、in 2020 のような語が文にあれば過去の文である。これらの語が問題文にあるのに現在形で答えると、内容が正しくても不正解になる。`,
      },
      {
        heading: '過去の一般動詞の疑問文（Did）',
        body: `過去の一般動詞の文は、主語が何であっても Did を先頭に置く。現在のように Do と Does を使い分ける必要はなく、全員 Did でよい。

■ 手順
①Did を文の先頭に置く
②動詞を原形に戻す（過去形をやめる）
③最後を ? にする

例）You went to the park. → Did you go to the park?（went → go）
例）He studied English. → Did he study English?（studied → study）
例）They had lunch at noon. → Did they have lunch at noon?（had → have）

■ 答え方
Yes, 主語＋did. / No, 主語＋didn't.
例）Did you see the movie? — Yes, I did. / No, I didn't.

★ ポイント：Did が「過去である」という印をすべて引き受けるので、動詞はまっさらな原形に戻る。went, studied, had のような過去形をそのまま残すのは、印を二重に付けているのと同じで誤り。

⚠ 注意：不規則動詞（go — went、see — saw、have — had、eat — ate、take — took）は、原形に戻すときに形が大きく変わる。原形が思い出せないと必ずまちがえるので、原形・過去形をセットで覚えておくこと。`,
      },
    ],
    trapExamples: [
      {
        question: 'You went to the zoo last Sunday. を疑問文に書きかえなさい。',
        wrongAnswer: 'Did you went to the zoo last Sunday?',
        trapExplanation:
          'went をそのまま残してしまう。「過去のことだから過去形のままにしておかないと過去にならない」と考えてしまうのが原因。',
        correctAnswer: 'Did you go to the zoo last Sunday?',
        correctExplanation:
          'Did がすでに「過去のこと」を表しているので、動詞は原形の go に戻す。過去を表す印は文の中に一つだけでよい。同じ理由で Did he studied? も誤りで、Did he study? が正しい。',
      },
      {
        question: 'You were free yesterday. を疑問文に書きかえなさい。',
        wrongAnswer: 'Did you were free yesterday?',
        trapExplanation:
          '「過去の疑問文には Did」とだけ覚えているため、be動詞の文にも Did を付けてしまう。were と Did が二重になっていることに気づけない。',
        correctAnswer: 'Were you free yesterday?',
        correctExplanation:
          'were は be動詞なので、そのまま主語の前に出せばよい。Did を使うのは play, go, study のような一般動詞の文だけである。現在の文で「be動詞なら前に出す・一般動詞なら Do/Does」と学んだ規則が、過去でもそのまま当てはまる。',
      },
    ],
  },

  {
    id: 'eigo_s194',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Yes/No疑問文④：助動詞（Can / Will / May / Must）',
    description: '助動詞を先頭に出す疑問文と、依頼・許可のていねいな言い方を学ぶ',
    intro: '助動詞の疑問文は、助動詞を主語の前に出すだけで作れます。be動詞と同じ動きです。ただし Will you open the window? のように、ただの質問ではなく「開けてくれますか」という依頼になることがあります。形は同じでも意味が変わる、そこがおもしろい部分です。',
    order: 694,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '助動詞（can, will, may, must, should）の文は、助動詞を主語の前に出すだけで疑問文になる。',
      '助動詞のうしろの動詞は、主語が何であっても必ず原形（Can he swim?）。',
      '答えは Yes, 主語＋助動詞. / No, 主語＋助動詞＋not. で、たずねられた助動詞をそのまま返す。',
      'Can you 〜?（〜してくれますか）は依頼、Can I 〜?（〜してもよいですか）は許可。',
      `Must I 〜? への No の答えは No, you don't have to.（〜しなくてよい）。`,
    ],
    sections: [
      {
        heading: '助動詞の疑問文の作り方',
        body: `can（〜できる）、will（〜するつもりだ）、may（〜してもよい）、must（〜しなければならない）、should（〜すべきだ）を助動詞という。助動詞のある文は、be動詞と同じように助動詞を主語の前に出すだけで疑問文になる。

■ 作り方
例）He can swim fast. → Can he swim fast?
例）You will go to the party. → Will you go to the party?
例）I may use this pen. → May I use this pen?
例）She should see a doctor. → Should she see a doctor?

■ 助動詞のうしろは必ず原形
主語が三人称単数でも、動詞に s は付けない。
○ Can he swim?　× Can he swims?
○ Will she come?　× Will she comes?
また、助動詞を二つ重ねることもできない（× He will can 〜）。

■ 答え方
たずねられた助動詞をそのまま使って答える。
例）Can you play the guitar? — Yes, I can. / No, I can't.
例）Will it rain tomorrow? — Yes, it will. / No, it won't.
例）May I come in? — Yes, you may. / Sure. / Of course.

★ ポイント：疑問文を作るときに前へ出す語は「be動詞・助動詞・do/does/did」の三種類しかない。文を見たらまずこの三つのどれがあるかを探す、という順序で考えるとまちがえない。`,
      },
      {
        heading: '依頼・許可の言い方と、ていねいさ',
        body: `助動詞の疑問文は、単に「できるかどうか」をたずねるだけでなく、人にお願いしたり許可を求めたりするときにも使う。主語が you か I かで意味が変わるので注意する。

■ Can you 〜? / Will you 〜?（〜してくれますか）＝依頼
例）Can you help me?（手伝ってくれますか）
例）Will you open the window?（窓を開けてくれますか）

■ Can I 〜? / May I 〜?（〜してもよいですか）＝許可を求める
例）Can I use your eraser?（消しゴムを借りてもいい？）
例）May I speak to Ken, please?（電話で「ケンさんをお願いします」）

■ ていねいにするには過去形を使う
Could you 〜? / Would you 〜? は、can・will の過去形を使った遠回しな言い方で、よりていねいになる。意味は過去ではない。
例）Could you say that again, please?（もう一度言っていただけますか）

■ 答え方の決まり文句
引き受けるとき：Sure. / All right. / OK. / Of course. / Certainly.
断るとき：I'm sorry, I can't. / Sorry, but I'm busy now.

⚠ 注意：Will you 〜? に Yes, I will. と答えるのはやや事務的で、会話では Sure. や All right. を使うことが多い。会話文の穴うめではこれらの決まり文句が問われる。`,
        figureId: 'lf_eigoext06_194',
      },
    ],
    trapExamples: [
      {
        question: '「彼は速く泳げますか」を英語にしなさい。',
        wrongAnswer: 'Can he swims fast?',
        trapExplanation:
          '主語が he なので「三単現の s を付けなければ」という規則が反射的に働いてしまう。助動詞のうしろは原形という決まりが、三単現の規則に負けている。',
        correctAnswer: 'Can he swim fast?',
        correctExplanation:
          '助動詞 can のうしろの動詞は、主語が何であっても必ず原形になる。三単現の s が付くのは、助動詞のない現在の文だけである。He can swim.（肯定文）の段階ですでに s が付いていないことを確かめると気づきやすい。',
      },
      {
        question: 'Must I clean this room? に「その必要はありません」と答えなさい。',
        wrongAnswer: `No, you mustn't.`,
        trapExplanation:
          `たずねられた助動詞をそのまま返す、という短答の形にしたがって mustn't にしてしまう。しかし mustn't は「してはいけない」という強い禁止の意味になり、たずねた人に「掃除するな」と命じることになる。`,
        correctAnswer: `No, you don't have to.`,
        correctExplanation:
          `must には「must not ＝〜してはいけない（禁止）」と「don't have to ＝〜しなくてよい（不要）」という別の否定が二つある。「しなくてよい」と言いたいときは don't have to を使う。Must 〜? の No の答えだけは例外だと覚えておく。なお Yes の答えは Yes, you must. でよい。`,
      },
    ],
  },

  {
    id: 'eigo_s195',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Yes/No疑問文⑤：短く答える形を完成させる',
    description: '答えの主語を代名詞にそろえ、たずねられた語で受ける練習をする',
    intro: 'Is your mother a teacher? と聞かれて、Yes, my mother is. と答えるのはくどい言い方です。英語では Yes, she is. と代名詞に置きかえます。しかも、たずねられたのが Is なら is で、Do なら do で受けます。答え方には決まった型があるのです。',
    order: 695,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '短答は「Yes / No ＋ 主語 ＋ be動詞・助動詞・do系」の三点セットで作る。',
      '答えの主語は代名詞にする。this / that → it、these / those → they。',
      'you and 〜 でたずねられたら we で答える。your father は he、your mother は she。',
      'たずねられた語の種類で受ける。Is → is、Do → do、Did → did、Can → can。',
      'Yes の答えでは短縮形を使わない（Yes, it is. ○ / Yes, it’s. ×）。',
    ],
    sections: [
      {
        heading: '主語を代名詞に置きかえる',
        body: `短答では、たずねられた文の主語をそのままくり返さず、代名詞に置きかえる。ここを機械的にできるようにすると、短答の問題はほぼ落とさなくなる。

■ 置きかえの一覧
this / that / your bag / the dog（一つ・一匹のもの）→ it
these / those / your books / the dogs（複数のもの）→ they
your father / Ken / that boy → he
your mother / Ms. Green / that girl → she
you（あなた）→ I
you and Ken / you and your sister（あなたを含む複数）→ we
Ken and Tom / your parents（自分たちを含まない複数）→ they

例）Is that your bike? — Yes, it is.
例）Are these your pencils? — No, they aren't.
例）Does your mother like coffee? — Yes, she does.
例）Are you and Ken in the same class? — Yes, we are.

⚠ 注意：Are you 〜? には I で答えるのが基本だが、Are you and 〜 〜? のようにあなた以外の人もふくまれていたら we で答える。問題文の主語をよく見ること。

★ ポイント：人でないものは、犬でも本でも it（複数なら they）。ペットを he / she と呼ぶこともあるが、テストでは it でよい。`,
      },
      {
        heading: 'たずねられた語で受ける',
        body: `短答の三つ目の部分（be動詞・助動詞・do系）は、たずねられた文の先頭の語をそのまま返すのが原則である。

■ 対応表
Is / Are / Was / Were →　is / are / was / were
Do / Does / Did →　do / does / did
Can / Will / May / Must / Should →　can / will / may / must / should

例）Was your brother at home? — Yes, he was.
例）Did you finish your homework? — No, I didn't.
例）Can Ken ride a unicycle? — Yes, he can.
例）Will they come to the party? — No, they won't.

■ 短縮形が使えるかどうか
No の答えでは短縮形が使える。No, it isn't. / No, I don't. / No, he can't. / No, they won't.
Yes の答えでは短縮できない。Yes, it is.（× Yes, it's.）／Yes, I am.（× Yes, I'm.）

これは、短縮形が「うしろに語が続くときだけ使える弱い形」だからである。文の最後に来る語は強く発音されるので、縮めることができない。

■ Yes/No 以外の答え方
会話では Of course.（もちろん）、Sure.（いいよ）、I think so.（そう思う）、I hope so.（そうだといいね）なども使う。会話文の問題ではこれらが答えの選択肢になることが多い。`,
      },
    ],
    trapExamples: [
      {
        question: 'Are you and your sister good at English? に Yes で答えなさい。',
        wrongAnswer: 'Yes, I am.',
        trapExplanation:
          'Are you 〜? の形を見た瞬間に「you と聞かれたら I で答える」という覚え方が働き、主語が you and your sister という二人であることを読み飛ばしてしまう。',
        correctAnswer: 'Yes, we are.',
        correctExplanation:
          '主語は「あなたとあなたのお姉さん」の二人なので、答えるときは自分たちをまとめて we になる。be動詞も we に合わせて are。「you と聞かれたら I」ではなく「主語が何人かを数えてから代名詞を決める」と手順を直す。',
      },
      {
        question: 'Is this your umbrella? に Yes で答えなさい。',
        wrongAnswer: 'Yes, this is.',
        trapExplanation:
          'たずねられた文の主語 this をそのまま写してしまう。日本語では「はい、これです」と言えるので、そのまま英語にしてしまうのが原因。',
        correctAnswer: 'Yes, it is.',
        correctExplanation:
          '短答では主語を代名詞に置きかえる決まりがあり、this / that は it、these / those は they になる。Yes, this is. という英語は使わない。同じく Is that your dog? — Yes, it is.、Are those your shoes? — Yes, they are. となる。',
      },
    ],
  },

  // ─────────────── 2. what / which（もの・選択）（s196〜s199） ───────────────
  {
    id: 'eigo_s196',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'what①：「何」をたずねる疑問文の骨組み',
    description: '疑問詞を先頭に置き、そのあとを Yes/No疑問文と同じ語順にする',
    intro: 'What do you have in your bag? — 疑問詞 What を先頭に置いたあとは、do you have というふつうの疑問文の語順がそのまま続きます。つまり「疑問詞＋Yes/No疑問文」という二階建ての形です。この組み立て方を知れば、どの疑問詞でも同じように作れます。',
    order: 696,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '疑問詞（what, who, when など）は必ず文の先頭に置く。',
      '疑問詞のうしろは Yes/No疑問文とまったく同じ語順（do/does/be動詞＋主語＋動詞）。',
      '疑問詞つきの疑問文には Yes / No で答えない。中身をそのまま答える。',
      'What is 〜? は What’s 〜? と短縮できる。',
      '文の終わりの ? を忘れない。読むときは下がり調子で読む。',
    ],
    sections: [
      {
        heading: '疑問詞つき疑問文の作り方',
        body: `「これは何ですか」「あなたは何がほしいですか」のように、Yes / No では答えられない内容をたずねるときは疑問詞を使う。作り方は二段階で覚えるとかんたんである。

■ 二段階の手順
①まず、ふつうの Yes/No疑問文を作る
②その先頭に疑問詞をくっつけ、たずねたい部分の語を消す

例）You want a new bike.（あなたは新しい自転車がほしい）
　→ ①Do you want a new bike?
　→ ②What do you want?（a new bike を消して What を先頭へ）

例）This is a camera.
　→ ①Is this a camera?
　→ ②What is this?（What's this?）

■ 代表的な形
What is this / that?（これ／あれは何ですか）
What is your name?（お名前は）
What do you have in your hand?（手に何を持っていますか）
What does he do after school?（彼は放課後に何をしますか）
What did you eat for lunch?（昼食に何を食べましたか）

⚠ 注意：What you want? のように do を落とす誤りが非常に多い。疑問詞のうしろは「疑問文の語順のまま」であって、平叙文の語順に戻るわけではない。`,
        figureId: 'lf_eigoext06_196',
      },
      {
        heading: '答え方（Yes / No では答えない）',
        body: `疑問詞のついた疑問文は、たずねている中身が決まっているので Yes / No で答えることはできない。聞かれた内容をそのまま答える。

■ 答え方の例
What is this? — It is a camera.（It's a camera.）
What do you want? — I want a new bike.／A new bike.
What does your father do? — He is a doctor.（職業をたずねる決まった言い方）
What did you do yesterday? — I played soccer with my friends.

会話では A new bike. のように必要な部分だけを短く答えることも多い。文で答えるときは、たずねられた文の主語・動詞をそろえるとまちがえない。

■ 主語と動詞をそろえる
What do you have? — I have a pen.（you → I、have はそのまま）
What does she like? — She likes music.（does を消したので likes と s が復活する）
What did he buy? — He bought a book.（did を消したので過去形 bought に戻す）

★ ポイント：do / does / did は疑問文のあいだだけ動詞の印を預かっている。答えの文では do / does / did が消えるので、預けていた印（三単現の s、過去形）を動詞に返してやる、と考えるとよい。

■ What's の使い方
What is は What's と縮められる。What's this? / What's your name? / What's the matter?（どうしたの）。ただし What's は「What is」だけでなく「What has」の短縮でもあるので、読解では注意する。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたはかばんの中に何を持っていますか」を英語にしなさい。',
        wrongAnswer: 'What you have in your bag?',
        trapExplanation:
          '「What＝何」と「you have＝あなたは持っている」を日本語の順に置いただけになっている。疑問詞を先頭に出したことで疑問文が完成したと思いこみ、do を入れ忘れる。',
        correctAnswer: 'What do you have in your bag?',
        correctExplanation:
          '疑問詞のうしろは Yes/No疑問文とまったく同じ語順になる。まず Do you have 〜? という疑問文を作り、その前に What を置く、という順で組み立てる。ただし What が主語のとき（What happened?）だけは do が不要で、これは別に学ぶ。',
      },
      {
        question: 'What do you have for breakfast? に答えなさい。',
        wrongAnswer: 'Yes, I have bread.',
        trapExplanation:
          '疑問文だから Yes から答える、という形だけの反応をしてしまう。文の先頭が What であることを見落としている。',
        correctAnswer: 'I have bread and milk.',
        correctExplanation:
          '疑問詞のある疑問文は「何を」「だれが」など中身をたずねているので、Yes / No では答えられない。答えは聞かれた部分（この場合は食べるもの）を示す。文の先頭が疑問詞かどうかを見てから答え方を決める習慣をつける。',
      },
    ],
  },

  {
    id: 'eigo_s197',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'what②：What ＋ 名詞（time / color / day / subject）',
    description: 'What のうしろに名詞をつけて「何の〜」とたずねる形をそろえる',
    intro: '「何時ですか」は What time is it? です。What のうしろに time という名詞をくっつけて「何の時間」とたずねています。同じように What color、What day、What subject と作れます。日本語では「何色」「何曜日」と一語に見えますが、英語では二語に分かれているのです。',
    order: 697,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'What のうしろに名詞を置くと「何の〜・どんな〜」という意味になる（What time / What color）。',
      'What ＋ 名詞 はひとかたまりで文の先頭に置く。とちゅうで切らない。',
      'What time is it? は時刻、What time do you 〜? は「何時に〜するか」。答え方がちがう。',
      'What day is it today? は曜日、What’s the date today? は日付をたずねる。',
      '答えるときの前置詞に注意（at seven / on Monday / in April）。',
    ],
    sections: [
      {
        heading: 'What ＋ 名詞 の形',
        body: `What だけでは「何」とばくぜんとしているが、うしろに名詞を置くと「何の〜」と範囲をしぼることができる。この二語はひとかたまりとして扱い、そろえて文の先頭に置く。

■ よく出る組み合わせ
What time（何時）／What day（何曜日）／What color（何色）／What sport（何のスポーツ）／What subject（何の教科）／What kind of 〜（どんな種類の〜）／What language（何語）

例）What color do you like?（何色が好きですか）
　— I like blue.
例）What sport does he play?（彼は何のスポーツをしますか）
　— He plays baseball.
例）What subject do you like best?（何の教科がいちばん好きですか）
　— I like science best.
例）What kind of music do you listen to?（どんな種類の音楽を聞きますか）
　— I listen to J-pop.

⚠ 注意：What color do you like? を What do you like color? のように分けてはいけない。What と color は切りはなせない一つのまとまりである。

★ ポイント：What kind of のうしろの名詞には ふつう a / an を付けない（What kind of book do you read?）。`,
      },
      {
        heading: '時刻・曜日・日付のたずね方',
        body: `時に関する言い方は形が似ていて混同しやすいので、たずね方と答え方をセットで覚える。

■ 今の時刻
What time is it (now)? — It's seven thirty.（七時半です）
この it は「時刻の it」で、「それ」という意味はない。答えの文でも It's 〜 で始める。

■ 「何時に〜しますか」
What time do you get up? — I get up at six.
この場合は「あなたが起きる時刻」をたずねているので、答えは I get up at six. のように主語と動詞をそろえて言う。時刻の前に at を付けるのを忘れない。
例）What time does the movie start? — It starts at two.

■ 曜日
What day is it today? — It's Monday.（今日は月曜日です）
What day of the week is it? も同じ意味。

■ 日付
What's the date today? — It's May 5.（五月五日です）
日付をたずねるときは day ではなく date を使う。

⚠ 注意：What day is it today? に It's May 5. と日付で答えるのは誤り。day は曜日、date は日付、と対応させて覚えること。

■ 月・年
What month is it? — It's July.
When is your birthday? — It's in April.（月の前は in）`,
      },
    ],
    trapExamples: [
      {
        question: 'What time do you go to bed? に答えなさい。',
        wrongAnswer: `It's ten.`,
        trapExplanation:
          `What time で始まる文を見ると、反射的に「時刻をたずねる What time is it?」の答えである It's 〜 を書いてしまう。文のうしろの do you go to bed（あなたは寝る）を読んでいない。`,
        correctAnswer: 'I go to bed at ten.',
        correctExplanation:
          'この文は「あなたは何時に寝ますか」と、あなたの行動の時刻をたずねている。答えの主語は I で、動詞は go to bed、そして時刻の前に at を付ける。It’s 〜 で答えてよいのは What time is it? のように「今の時刻そのもの」をたずねられたときだけである。',
      },
      {
        question: 'What day is it today? に答えなさい（今日は5月5日の月曜日）。',
        wrongAnswer: `It's May 5.`,
        trapExplanation:
          '日本語で「今日は何日？」「今日は何曜日？」のどちらも「今日は何？」と言えるため、day を「日」と訳して日付を答えてしまう。',
        correctAnswer: `It's Monday.`,
        correctExplanation:
          'What day 〜? は曜日をたずねる言い方で、答えは Sunday 〜 Saturday のいずれかになる。日付をたずねるときは What’s the date today? と date を使い、It’s May 5. と答える。day＝曜日、date＝日付、と結びつけて覚える。',
      },
    ],
  },

  {
    id: 'eigo_s198',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'which①：「どちら・どれ」と選ばせる疑問文',
    description: 'Which と or を組み合わせて選択をたずねる形と、その答え方を学ぶ',
    intro: '「コーヒーと紅茶、どちらがいいですか」は Which do you like, coffee or tea? です。えらぶものを or でならべ、コンマのあとに付け足すのが英語のやり方。答えるときは Yes や No ではなく、えらんだほうを言います。ここが Yes/No疑問文とのちがいです。',
    order: 698,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'Which は「示された範囲の中でどれ・どちら」とたずねる疑問詞。',
      'Which ＋ 名詞（Which book / Which bus）の形も What と同じように作れる。',
      '選択肢を並べるときは A or B とし、and は使わない。',
      'A or B の疑問文には Yes / No で答えず、選んだほうを答える。',
      'Which one 〜? の one は前に出た名詞のかわり。答えでは This one. などと言える。',
    ],
    sections: [
      {
        heading: 'Which の使い方',
        body: `Which は「どれ・どちら」という意味で、選ぶ相手がある程度決まっているときに使う。目の前に二つ以上のものが示されている場面を思いうかべるとよい。

■ Which だけで使う
Which is your bag?（どれがあなたのかばんですか）
Which do you like better, cats or dogs?（ねこと犬ではどちらが好きですか）

■ Which ＋ 名詞
Which bus goes to the station?（どのバスが駅に行きますか）
Which season do you like the best?（どの季節がいちばん好きですか）
Which color do you want, red or blue?

■ 選択肢の並べ方
二つ（以上）の候補を示すときは、文の最後にコンマを打って A or B を続ける。
例）Which do you want, tea or coffee?
例）Which is bigger, the sun or the moon?
※ and を使うと「両方」の意味になってしまい、選ばせる文にならない。必ず or を使う。

■ 読み方
A or B の疑問文は、A を上がり調子、B を下がり調子で読む。Yes/No疑問文のように最後まで上げると、意味が変わってしまう。

★ ポイント：Which one do you want? の one は、前に出た名詞のくり返しをさけるための語。答えも This one, please. のように one を使える。`,
      },
      {
        heading: '答え方と、比べる言い方',
        body: `■ Yes / No では答えない
Which do you like, summer or winter? に Yes, I like summer. と答えるのは誤り。選んだほうをそのまま答える。
　— I like summer.／Summer.／Summer is better for me.

■ better / the best をそえる形
二つのうちどちらかを選ぶときは better、三つ以上から選ぶときは the best を使うことが多い。
例）Which do you like better, math or English? — I like math better.
例）Which season do you like the best? — I like spring the best.

答えの文にも better / the best をそのまま入れると自然になる。

■ Which と be動詞・一般動詞
Which is your desk?（be動詞の文）— That one is.／This is.
Which do you use?（一般動詞の文）— I use this one.
形は what と同じで、疑問詞のうしろは疑問文の語順になる。

⚠ 注意：Which is taller, Ken or Tom? のように「二つを比べてどちらか」をたずねる文では、比較級（taller）を使う。答えは Ken is.（＝Ken is taller.）のように短く言える。

■ 選択肢が示されないときは what
Which do you want? は「ここにあるうちのどれ」、What do you want? は「何でもよいから何がほしいか」。次の課でくわしく区別する。`,
      },
    ],
    trapExamples: [
      {
        question: 'Which do you like better, dogs or cats? に「犬のほうが好きです」と答えなさい。',
        wrongAnswer: 'Yes, I like dogs.',
        trapExplanation:
          '文の形が Do you like 〜? に似ているので Yes/No疑問文だと思ってしまう。文頭の Which と、文末の A or B という選択の形を見落としている。',
        correctAnswer: 'I like dogs better.',
        correctExplanation:
          'Which で始まる文も、A or B で選ばせる文も、Yes / No では答えられない。選んだほうを答える。better をそえると「（二つのうちで）そちらのほうが好き」という意味がはっきりする。会話では Dogs. と一語で答えてもよい。',
      },
      {
        question: '「紅茶とコーヒーではどちらがほしいですか」を英語にしなさい。',
        wrongAnswer: 'Which do you want, tea and coffee?',
        trapExplanation:
          '日本語の「紅茶とコーヒー」の「と」をそのまま and に置きかえてしまう。and にすると「紅茶とコーヒーの両方」という意味になり、選ばせる文にならない。',
        correctAnswer: 'Which do you want, tea or coffee?',
        correctExplanation:
          '選択肢を並べて「どちらか」を選ばせるときは or を使う。日本語の「と」に引きずられないよう、「Which の文とセットになるのは or」と形で覚えてしまうとよい。三つ以上並べるときは A, B or C のように最後だけ or にする。',
      },
    ],
  },

  {
    id: 'eigo_s199',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'what と which の使い分け',
    description: '選ぶ範囲が示されているかどうかで What と Which を選び分ける',
    intro: '「何のスポーツが好きですか」は What sport do you like? です。ところが目の前に野球とサッカーのボールだけがあるなら、Which sport do you like? になります。えらぶ範囲が示されているかどうかで、使う語が変わるのです。この一点だけで見分けられます。',
    order: 699,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '選ぶ範囲が示されている（目の前にある・A or B がある）ときは Which。',
      '範囲がしぼられておらず、自由に答えられるときは What。',
      'Which ＋ 名詞 / What ＋ 名詞 のどちらの形もあるので、名詞の有無では区別できない。',
      'A or B が文の中にあれば、まず Which を疑う。',
      'Which of 〜（〜のうちのどれ）の形では、うしろは the や these の付いた名詞になる。',
    ],
    sections: [
      {
        heading: '「範囲があるか」で決める',
        body: `What と Which はどちらも「何・どれ」と訳せるので、日本語からは決められない。判断のかぎは「選ぶ範囲が示されているかどうか」の一点である。

■ 範囲が示されている → Which
・目の前に品物が並んでいる
・A or B と候補が文の中に出ている
・of these / of them のように、集まりが示されている

例）Which do you want, this one or that one?
例）Which of these books is yours?
例）Which bus should I take?（バスは何番か何番か、と数が決まっている）

■ 範囲が示されていない → What
・何と答えてもよい
・候補が示されていない

例）What do you want for your birthday?（何でもよい）
例）What is your favorite sport?（世界中のスポーツから自由に）
例）What time is it?（時刻は無数にある）

⚠ 注意：「Which は二つのとき、What は三つ以上のとき」という覚え方はまちがい。三つ以上でも範囲が決まっていれば Which を使う（Which of the five do you want?）。数ではなく範囲で決める。`,
        figureId: 'lf_eigoext06_199',
      },
      {
        heading: 'まぎらわしい場面を見分ける',
        body: `■ 同じ内容でも場面でちがう
（レストランのメニューを見せながら）Which would you like?
（何も見せずに）What would you like to eat?

同じ「何にしますか」でも、選ぶものが示されていれば Which、示されていなければ What になる。入試の会話文では、直前の文に候補が並んでいるかどうかが手がかりになる。

■ 名詞が付いても同じ規準
What sport do you play?（スポーツ全般から自由に）
Which sport do you like, soccer or tennis?（二つの中から）
名詞が付くかどうかは関係なく、範囲があるかどうかで決まる。

■ Which of 〜 の形
Which of these caps is yours?（これらの帽子のうちどれがあなたのですか）
Which of you can swim?（あなたたちのうちだれが泳げますか）
of のうしろは these / the / you のように、まとまりが決まっている語になる。What of 〜 という言い方はしない。

★ ポイント：問題文に or が見えたら、まず Which を候補に考える。ただし Do you want tea or coffee?（Yes/No疑問文＋or）のように、Which を使わない形もあるので、文頭に空所があるかどうかも確かめる。

■ 決まり文句
What about 〜? / How about 〜?（〜はどうですか）はどちらもよく使う言い方で、Which about 〜? という形はない。`,
      },
    ],
    trapExamples: [
      {
        question: '（メニューを見せながら）「＿＿ do you want, tea or coffee?」の空所に入る語を答えなさい。',
        wrongAnswer: 'What',
        trapExplanation:
          '「何がほしいですか」という日本語訳から What を選んでしまう。文末に tea or coffee という候補が示されていることに注目していない。',
        correctAnswer: 'Which',
        correctExplanation:
          'tea or coffee という二つの候補が文の中に示されているので、選ぶ範囲が決まっている。範囲が決まっているときは Which を使う。文中に「A or B」があるかどうかが、この判断でいちばん確実な手がかりになる。',
      },
      {
        question: '「あなたの好きな教科は何ですか」を英語にしなさい（候補は示されていない）。',
        wrongAnswer: 'Which is your favorite subject?',
        trapExplanation:
          '「教科」という限られた集まりから選ぶのだから Which だ、と考えてしまう。しかし「学校の教科」という分類は文の中に示された候補ではない。',
        correctAnswer: 'What is your favorite subject?',
        correctExplanation:
          'この場面では候補が文中に並べられていないので、自由に答えられる What を使う。Which を使うのは Which is your favorite, math or science? のように候補を示したときや、目の前に時間割を見せながらたずねるときである。',
      },
    ],
  },

  // ─────────────── 3. who / whose / whom（人・所有）（s200〜s203） ───────────────
  {
    id: 'eigo_s200',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'who①：「だれ」をたずねる',
    description: 'Who is 〜? と Who do you 〜? の形をそろえ、be動詞の数の一致に注意する',
    intro: '「あの女の子はだれですか」は Who is that girl?、「あの子たちはだれですか」は Who are those girls? です。Who の形は変わらないのに、be動詞はうしろの語に合わせて変わります。さらに Who do you like? のように do を使う形もある。二つの型を見わけていきます。',
    order: 700,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'Who は人についてたずねる疑問詞。答えでは名前や関係（my brother など）を言う。',
      'Who is that man? のような文では、be動詞をうしろの主語に合わせる（Who are those girls?）。',
      'Who do you like? は「あなたはだれが好きか」と、好かれる相手をたずねる形。',
      'Who is 〜? の答えは He is 〜. / She is 〜. / They are 〜. と代名詞で受ける。',
      'Who が主語になる形（Who broke it?）は語順が変わらない。あとの課で学ぶ。',
    ],
    sections: [
      {
        heading: 'Who is 〜? の形と数の一致',
        body: `Who は「だれ」と人をたずねる疑問詞である。いちばんよく使うのは、人を指して「あの人はだれですか」とたずねる形である。

■ 基本の形
Who is that man? — He is my uncle.
Who is she? — She is Ms. Green, our new teacher.
Who are those boys? — They are my classmates.

■ be動詞は「うしろの語」に合わせる
Who 自体は単数にも複数にも使えるので、be動詞はうしろに来る語で決める。
・Who is that girl?（that girl は単数 → is）
・Who are those girls?（those girls は複数 → are）
・Who were they?（they は複数 → were）

⚠ 注意：Who is those boys? は誤り。日本語の「あの子たちはだれですか」につられて is にしてしまいやすい。うしろの名詞が複数形（-s）かどうかを必ず確かめる。

■ 電話や紹介の決まり文句
Who is calling, please?（どちら様ですか）
Who is speaking?（電話で「どなたですか」）
This is Ken speaking.（こちらはケンです）
電話では I am Ken. ではなく This is Ken. と言う。会話文の問題で頻出。

★ ポイント：Who's は Who is の短縮形。Whose（だれの）と発音が同じなので、書くときに取りちがえないよう気をつける。`,
      },
      {
        heading: '「だれを」をたずねる形',
        body: `Who は「だれが」だけでなく「だれを」の意味でもたずねられる。その場合は一般動詞の疑問文と同じく do / does / did が必要になる。

■ 目的語をたずねる形
You like Ken.（あなたはケンが好きだ）
　→ Who do you like?（あなたはだれが好きですか）
　— I like Ken.

He met Ms. Sato yesterday.
　→ Who did he meet yesterday?
　— He met Ms. Sato.

■ 前置詞が残る形
たずねたい人が前置詞のうしろにあった場合、その前置詞は文の最後に残る。
You are waiting for Tom.
　→ Who are you waiting for?（だれを待っているのですか）
You went there with Ken.
　→ Who did you go there with?

⚠ 注意：Who are you waiting? のように for を落とすと、意味が通じない文になる。もとの文にあった前置詞は消さずに最後まで書くこと。この点は次の課でくわしく練習する。

■ 答え方
Who do you like? — I like my grandmother.
Who did you see? — I saw Ken and Tom.
Yes / No では答えない。人の名前や、my brother のような言い方で答える。`,
      },
    ],
    trapExamples: [
      {
        question: '「あの少年たちはだれですか」を英語にしなさい。',
        wrongAnswer: 'Who is those boys?',
        trapExplanation:
          'Who を単数だと思いこみ、be動詞をいつも is にしてしまう。日本語では「だれですか」と単数・複数の区別がないため、うしろの those boys が複数であることを意識しにくい。',
        correctAnswer: 'Who are those boys?',
        correctExplanation:
          'Who 自体には単数・複数の形がないので、be動詞はうしろの語に合わせる。those boys は複数なので are になる。答えも They are my friends. と複数で受ける。一人なら Who is that boy? — He is my friend. となる。',
      },
      {
        question: '「あなたはだれを待っているのですか」を英語にしなさい。',
        wrongAnswer: 'Who are you waiting?',
        trapExplanation:
          '日本語の「だれを待つ」には前置詞がないため、英語でも for が要らないと感じてしまう。wait for でひとかたまりの意味になることを知らないと必ず落とす。',
        correctAnswer: 'Who are you waiting for?',
        correctExplanation:
          'もとの文は You are waiting for Tom. で、たずねたい Tom は for のうしろにあった。Who を先頭に出しても for は行き場がなく、文の最後に取り残される。look for（さがす）、listen to（聞く）なども同じで、最後の前置詞を書き落とさないこと。',
      },
    ],
  },

  {
    id: 'eigo_s201',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'whose：「だれの」をたずねる',
    description: 'Whose ＋ 名詞 の語順と、所有代名詞（mine / Ken’s）での答え方を身につける',
    intro: '「これはだれのかさですか」は Whose umbrella is this? です。日本語では「だれの」でいったん切れますが、英語では whose と umbrella をくっつけて、まとめて先頭に置きます。答えるときは It\'s mine. のように、名詞をくり返さない言い方を使います。',
    order: 701,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'Whose は「だれの」。Whose ＋ 名詞 をひとかたまりにして文の先頭に置く。',
      'Whose is this bag? のように名詞をはさまない形も正しい。',
      '答えは「所有格＋名詞」（It is my bag.）か「所有代名詞」（It is mine.）。',
      '人名の所有は名前＋アポストロフィ s（Ken’s＝ケンの／ケンのもの）。',
      'Whose と Who’s（＝Who is）は発音が同じ。意味で書き分ける。',
    ],
    sections: [
      {
        heading: 'Whose ＋ 名詞 の語順',
        body: `Whose は「だれの」という意味の疑問詞である。「だれの＋何」という日本語のとおり、うしろに名詞をくっつけてひとかたまりで使うのが基本形である。

■ 基本の形
Whose bag is this? — It is my bag.／It is mine.
Whose pencils are these? — They are Ken's.
Whose car is that? — It is my father's.

作り方は、This is my bag. の my をたずねる、と考えるとよい。
　This is my bag. → Whose bag is this?（my bag の my をたずね、Whose bag をまとめて先頭へ）

■ 名詞をはさまない形
Whose is this bag? という言い方もでき、意味は同じである。この場合 Whose は「だれのもの」という意味で単独で使われている。
Whose are these? — They are mine.

⚠ 注意：Whose is bag this? のように、名詞を切りはなしてばらばらに置くことはできない。Whose bag（だれのかばん）は二語で一つのまとまりだと意識する。

★ ポイント：Whose のうしろの名詞には a / an / the を付けない。× Whose a bag is this? ／○ Whose bag is this?`,
        figureId: 'lf_eigoext06_201',
      },
      {
        heading: '答え方（所有格と所有代名詞）',
        body: `Whose 〜? への答え方は二通りある。どちらも正しいが、形をきちんと区別しておく必要がある。

■ ①所有格＋名詞
my bag / your pen / his book / her cap / our school / their house
例）Whose bag is this? — It is my bag.

■ ②所有代名詞（一語で「〜のもの」）
mine（私のもの）／yours（あなたのもの）／his（彼のもの）／hers（彼女のもの）／ours（私たちのもの）／theirs（彼らのもの）
例）Whose bag is this? — It is mine.

所有代名詞のうしろに名詞を置くことはできない。× It is mine bag. ／○ It is my bag. または It is mine.

■ 人名の場合
名前にアポストロフィと s を付ける。Ken's（ケンの／ケンのもの）、my father's（父の／父のもの）、Ms. Green's。
例）Whose racket is this? — It's Ken's.（ケンのものです）
※ 名前だけで It's Ken. と答えると「これはケンです」となってしまい、意味がおかしくなる。

■ 複数形の所有
語尾が s の複数形にはアポストロフィだけを付ける。the students' room（生徒たちの部屋）。
語尾が s でない複数形（children, men）は children's のように 's を付ける。

⚠ 注意：his は「彼の」と「彼のもの」の両方に使える特別な語。His book is here.／This book is his. のどちらも正しい。`,
      },
    ],
    trapExamples: [
      {
        question: 'Whose notebook is this? に「私のです」と答えなさい。',
        wrongAnswer: `It's me.`,
        trapExplanation:
          '日本語の「私のです」を「私＝me」と単純に置きかえてしまう。me は「私を・私に」という形で、「私のもの」という意味は表せない。',
        correctAnswer: `It's mine.`,
        correctExplanation:
          '「〜のもの」を一語で表す所有代名詞を使う。私のもの＝mine、あなたのもの＝yours、彼のもの＝his、彼女のもの＝hers。It’s my notebook. と答えてもよい。I / my / me / mine の四つの形を表にして覚えておくと迷わない。',
      },
      {
        question: 'Whose racket is this? に「ケンのです」と答えなさい。',
        wrongAnswer: `It's Ken.`,
        trapExplanation:
          '名前をそのまま置けば「ケンの」になると思ってしまう。しかし It’s Ken. は「これはケンです」という意味になり、ラケットが人になってしまう。',
        correctAnswer: `It's Ken's.`,
        correctExplanation:
          '人名で「〜の・〜のもの」を表すときは、名前にアポストロフィと s を付けて Ken’s とする。Whose racket is this? — It’s Ken’s racket. と名詞を付けてもよいが、くり返しをさけて It’s Ken’s. と言うのがふつうである。',
      },
    ],
  },

  {
    id: 'eigo_s202',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'whom と前置詞の位置',
    description: '前置詞が文の最後に残る疑問文を作り、who と whom の使い分けを知る',
    intro: '「だれといっしょに住んでいるのですか」は Who do you live with? となり、with が文の最後に取り残されます。日本語なら「だれと」で一続きになるので、この形はとても不思議に見えます。前置詞が最後に残るという英語の語順を、ここでしっかり身につけます。',
    order: 702,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'たずねたい語が前置詞のうしろにあったときは、その前置詞は文の最後に残る。',
      'with / for / to / about / at などの落としに注意（Who did you go with?）。',
      'whom は「だれを・だれに」の固い形。ふだんの会話や中学受験では who でよい。',
      '主語をたずねるときは whom ではなく who を使う（Who is coming?）。',
      'With whom did you go? のように前置詞を先頭に置く形は非常に固い書き言葉。',
    ],
    sections: [
      {
        heading: '前置詞が文の最後に取り残される',
        body: `疑問文を作るとき、たずねたい語を疑問詞に変えて先頭に出す。その語がもともと前置詞のうしろにあった場合、前置詞だけが元の場所に取り残される。

■ 作り方をたどる
I go to school with Ken.（私はケンと学校へ行く）
　→ Ken をたずねたい
　→ Ken を Who に変えて先頭へ
　→ Who do you go to school with?（だれと学校へ行きますか）

with は Ken を連れていってくれないので、そのまま最後に残る。これが英語の疑問文の大きな特徴である。

■ よく出る形
Who are you waiting for?（だれを待っていますか）← wait for
Who did you talk about?（だれについて話したのですか）← talk about
Who are you looking for?（だれをさがしていますか）← look for
What are you looking at?（何を見ているのですか）← look at
What are you thinking about?（何を考えているのですか）← think about
Where are you from?（どこの出身ですか）← be from

⚠ 注意：日本語には「〜と」「〜を」にあたる助詞があるが、英語の前置詞は文の最後に置かれるため、日本語から英作文すると必ず落としやすい。書き終えたら「もとの文にあった前置詞を全部書いたか」を確かめる。`,
        figureId: 'lf_eigoext06_202',
      },
      {
        heading: 'who と whom',
        body: `英語には「だれが」を表す who と、「だれを・だれに」を表す whom という二つの形がある。日本語の「が」と「を」の区別に近い。

■ whom の使いどころ
・動詞の目的語：Whom did you meet?（だれに会いましたか）
・前置詞のうしろ：With whom did you go?（だれと行きましたか）

しかし、今の英語では話し言葉でも書き言葉でも who を使うのがふつうで、whom はかなり固い言い方に限られる。中学受験でも Who did you meet? で正しい。
・ふつう：Who did you meet?
・固い形：Whom did you meet?

■ whom を使ってはいけない場合
主語をたずねるときは必ず who である。
○ Who is coming to the party?
× Whom is coming to the party?
whom はあくまで「だれを・だれに」であって、「だれが」の意味では使えない。

■ 前置詞を先頭に置く形
前置詞ごと先頭に出す言い方もあるが、そのときは必ず whom になる。
・With whom did you go?（固い）
・Who did you go with?（ふつう）
・× With who did you go?（この形は誤り）

★ ポイント：中学受験では「前置詞は文の最後に残す・疑問詞は who でよい」の二点をおさえれば十分である。whom は読解で出てきたときに意味がわかればよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたはだれと学校へ行きますか」を英語にしなさい。',
        wrongAnswer: 'Who do you go to school?',
        trapExplanation:
          '日本語の「だれと」の「と」を Who がふくんでいると感じてしまい、with を書かない。文としては形が整って見えるので、見直しでも気づきにくい。',
        correctAnswer: 'Who do you go to school with?',
        correctExplanation:
          'もとの文 I go to school with Ken. の Ken をたずねる形なので、with が文の最後に残る。英作文では「もとの平叙文を頭の中で作る → たずねたい語を疑問詞にして先頭へ → 前置詞は動かさない」という順に組み立てると落とさない。',
      },
      {
        question: '「だれがパーティーに来るのですか」を英語にしなさい。',
        wrongAnswer: 'Whom is coming to the party?',
        trapExplanation:
          '「whom のほうが正式でていねいな形だ」と覚えてしまい、どんな場面でも whom を使えばよいと考えてしまう。主語と目的語の区別を意識していない。',
        correctAnswer: 'Who is coming to the party?',
        correctExplanation:
          'この文の疑問詞は「だれが」という主語にあたるので who を使う。whom が使えるのは「だれを・だれに」と、動詞や前置詞のうしろにあった語をたずねるときだけである。主語をたずねる文では do / does も不要で、語順も変わらない。',
      },
    ],
  },

  {
    id: 'eigo_s203',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'who / whose / who’s の総整理',
    description: '音が同じ Whose と Who’s を書き分け、答え方の形をそろえる',
    intro: 'Whose と Who\'s は、声に出すとまったく同じ音です。それなのに Whose book is this?（だれの本）と Who\'s that boy?（だれですか）で意味はまるでちがいます。聞き取りでは前後の語しか手がかりがありません。書き分けと聞き分けを、ここで一度に整理します。',
    order: 703,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'Who＝だれ（人そのもの）、Whose＝だれの（持ち主）、Who’s＝Who is の短縮形。',
      'Whose と Who’s は発音が同じ。うしろに名詞が続けば Whose、動詞が続けば Who’s。',
      'Who is 〜? の答えは He is 〜. など、Whose 〜? の答えは It is mine. など。',
      '所有をたずねられたら mine / yours / his / hers / ours / theirs か 〜’s で答える。',
      'Who’s のうしろが -ing なら Who is 〜ing（進行形）だと見抜く。',
    ],
    sections: [
      {
        heading: '三つの語の見分け方',
        body: `who / whose / who's は音がまぎらわしく、聞き取りでも書き取りでもよくまちがえる。うしろに続く語の種類で機械的に見分けられる。

■ Who（だれ）
うしろに be動詞や do / does / did が来て、人そのものをたずねる。
例）Who is that woman? / Who do you like?

■ Whose（だれの）
うしろに名詞が来るか、または単独で「だれのもの」を表す。
例）Whose bike is this? / Whose is this bike?

■ Who's（＝Who is / Who has）
うしろに名詞がなく、形容詞・-ing 形・場所を表す語などが来る。
例）Who's absent today?（きょうはだれが休みですか）
例）Who's singing over there?（あそこで歌っているのはだれですか）

■ 見分けの手順
①うしろに名詞（bag, book, pen など）があるか → あれば Whose
②「だれは〜です」と be動詞でつなげられるか → つなげられれば Who's
例）＿＿ coming to the party? → coming は動詞の -ing 形なので Who's（＝Who is coming）
例）＿＿ umbrella is this? → umbrella は名詞なので Whose

⚠ 注意：アポストロフィの有無は音では区別できないので、意味と語順で判断するしかない。リスニングでも同じで、うしろの語を最後まで聞いてから決める。`,
      },
      {
        heading: '答え方をそろえる',
        body: `たずねられた形によって答え方が決まっている。ここをそろえると、記述の失点が大きく減る。

■ Who is 〜?（人はだれか）
Who is that man? — He is my teacher.／He is Mr. Sato.
Who are they? — They are my cousins.
答えの主語は he / she / they になる。It is my teacher. とは言わない。

■ Whose 〜?（持ち主はだれか）
Whose cap is this? — It is mine.／It is Ken's.／It is my brother's.
答えの主語は it / they（もの）になる。He is mine. とは言わない。

■ Who's 〜?（＝Who is 〜?）
Who's playing the piano? — Ken is.／Ken is playing the piano.
答えでは主語＋be動詞の形で短く受けられる。

★ ポイント：「人をたずねられたら人（he / she）で答える、ものの持ち主をたずねられたら もの（it / they）で答える」と対応させる。日本語の「ケンのです」につられて主語を落とさないこと。

■ 所有代名詞の一覧（答えでよく使う）
I → mine／you → yours／he → his／she → hers／we → ours／they → theirs
※ its（それのもの）は所有代名詞としてはほとんど使わない。
※ it's は it is の短縮形で、its（それの）とは別の語である。`,
      },
    ],
    trapExamples: [
      {
        question: '「＿＿ coming to the party?（だれがパーティーに来るの）」の空所に Whose か Who’s のどちらかを入れなさい。',
        wrongAnswer: 'Whose',
        trapExplanation:
          '発音が同じなので、耳で覚えているとどちらでもよい気がしてしまう。「だれが」という日本語だけを手がかりにすると、Whose にも「だれ」が入っているため選んでしまう。',
        correctAnswer: `Who's`,
        correctExplanation:
          '空所のうしろは coming という動詞の -ing 形で、名詞ではない。したがって「Who is coming（だれが来るのか）」の短縮形 Who’s が入る。Whose を使えるのは Whose bag（だれのかばん）のように、うしろに名詞が続くときだけである。',
      },
      {
        question: 'Whose are these pencils? に「私のです」と答えなさい。',
        wrongAnswer: 'They are my.',
        trapExplanation:
          '「私の＝my」と一対一で覚えているため、名詞がなくても my で文を終えられると思ってしまう。my は必ずうしろに名詞が必要な形である。',
        correctAnswer: 'They are mine.',
        correctExplanation:
          'my のうしろには名詞が要る（They are my pencils.）。名詞を言わずに終える場合は所有代名詞の mine を使う。主語は these pencils を受けて they になり、be動詞も are。my と mine の使い分けは、うしろに名詞があるかどうかで決まる。',
      },
    ],
  },

  // ─────────────── 4. when / where（時・場所）（s204〜s206） ───────────────
  {
    id: 'eigo_s204',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'when：「いつ」をたずねる',
    description: 'When の疑問文を作り、時を表す前置詞をそえて答える',
    intro: '「いつ日本に来たのですか」は When did you come to Japan? です。答えは In 2020. や On Sunday. のように、前置詞を付けて言います。日本語なら「に」の一字ですむところですが、英語ではどの前置詞を選ぶかが決まっています。たずね方と答え方を対にして覚えます。',
    order: 704,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'When は「いつ」と時をたずねる疑問詞。文の先頭に置き、うしろは疑問文の語順。',
      '答えは時を表す語句で言う。前置詞（at / on / in）を忘れない。',
      'When is your birthday? — It’s in April. のように月には in を使う。',
      '過去のことをたずねられたら、答えの動詞も過去形にする。',
      'What time はこまかい時刻、When はもっと広い「時」をたずねる。',
    ],
    sections: [
      {
        heading: 'When の疑問文',
        body: `When は「いつ」と時をたずねる疑問詞である。作り方は What と同じで、疑問詞を先頭に置き、そのあとを疑問文の語順にする。

■ be動詞の文
When is the school festival? — It's on November 3.
When is your birthday? — It's in May.
When was the party? — It was last Saturday.

■ 一般動詞の文
When do you study at home? — I study after dinner.
When does the concert start? — It starts at six.
When did you come to Japan? — I came here two years ago.

■ 答え方
答えは「時を表す語句」で言う。文で答えるときは、たずねられた文の主語・動詞をそろえる。
例）When did you finish it? — I finished it last night.（did が消えたので過去形に戻す）
例）When does he practice? — He practices every morning.（does が消えたので s が復活する）

■ 時を表す語句の例
today / tomorrow / yesterday / this morning / next Sunday / last week / two days ago / after school / before dinner / in the morning / at night / every day

⚠ 注意：When の疑問文に Yes / No で答えることはできない。When do you go? — Yes, I do. は誤り。

★ ポイント：When と What time はどちらも時をたずねるが、What time は「何時何分」というこまかい時刻をたずねるときに使う。When はもっと広く、曜日・日付・季節・年でも答えられる。`,
      },
      {
        heading: '答えにそえる前置詞',
        body: `When にどう答えるかで差がつくのは、時を表す前置詞である。ここは決まりを丸ごと覚えてしまう。

■ at ＋ 時刻・一点の時
at seven（七時に）／at noon（正午に）／at night（夜に）／at that time（そのとき）

■ on ＋ 曜日・日付・特定の日
on Monday（月曜日に）／on May 5（五月五日に）／on Sunday morning（日曜の朝に）／on New Year's Day

■ in ＋ 月・季節・年・午前午後
in April（四月に）／in summer（夏に）／in 2026（2026年に）／in the morning（午前中に）／in the afternoon

■ 前置詞を付けない語
this / next / last / every が付いた語句には前置詞を付けない。
○ next Sunday　× on next Sunday
○ last night　× in last night
○ every day　× on every day
また today / tomorrow / yesterday にも前置詞は付けない。

⚠ 注意：on Sunday morning のように「特定の日の朝」は on になる。in the morning（一般的な午前中）とのちがいに注意する。

■ 期間を表す語
for（〜のあいだ）：for three days
during（〜のあいだじゅう）：during the summer vacation
before / after（〜の前に・あとに）：after school`,
      },
    ],
    trapExamples: [
      {
        question: 'When is your birthday? に「四月です」と答えなさい。',
        wrongAnswer: `It's on April.`,
        trapExplanation:
          '「〜に」という日本語をすべて on に置きかえてしまう。日付に on を使う（on April 10）ことを知っていると、月だけのときにも on を付けてしまう。',
        correctAnswer: `It's in April.`,
        correctExplanation:
          '月・季節・年のように広がりのある時には in を使う。日付まで言うときは on April 10 のように on になる。「点なら at、一日なら on、広い期間なら in」と、はばの大きさで覚えるとまちがえない。',
      },
      {
        question: 'When did you come to this town? に「二年前です」と文で答えなさい。',
        wrongAnswer: 'I come here two years ago.',
        trapExplanation:
          'did で聞かれた疑問文では動詞が原形になっているので、答えでもそのまま come と書いてしまう。two years ago という過去を表す語があるのに時制を合わせていない。',
        correctAnswer: 'I came here two years ago.',
        correctExplanation:
          '疑問文では did が過去の印を預かっていたが、答えの文には did がないので、動詞自身が過去形 came に戻る。〜 ago は必ず過去形といっしょに使う語なので、これも手がかりになる。',
      },
    ],
  },

  {
    id: 'eigo_s205',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'where：「どこ」をたずねる',
    description: 'Where の疑問文を作り、場所を表す前置詞をつけて答える',
    intro: '「どこに住んでいるのですか」は Where do you live? ですが、答えは I live in Osaka. と in が要ります。ところが たずねる文のほうに in はありません。問いでは消え、答えでよみがえる。この前置詞の出入りが、書きかえ問題でよく問われます。',
    order: 705,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'Where は「どこ」と場所をたずねる疑問詞。うしろは疑問文の語順。',
      'Where is / are は主語の数に合わせる（Where are my shoes?）。',
      '答えでは場所の前に前置詞（in / on / at / under / near）が要ることが多い。',
      'Where are you from? は出身をたずねる決まった言い方。',
      'here / there には前置詞を付けない（× to here）。',
    ],
    sections: [
      {
        heading: 'Where の疑問文',
        body: `Where は「どこ」と場所をたずねる。be動詞の文でも一般動詞の文でも、疑問詞を先頭に置いてうしろを疑問文の語順にする点は同じである。

■ be動詞の文（「どこにありますか」）
Where is my cap? — It's on the desk.
Where are my shoes? — They are under the bed.
Where is Ken? — He is in the library.

主語が複数なら are、単数なら is。Where is my shoes? という誤りが多いので、うしろの名詞に -s が付いているかを確かめる。

■ 一般動詞の文
Where do you live? — I live in Osaka.
Where does he play soccer? — He plays soccer in the park.
Where did you buy it? — I bought it at that shop.

■ 決まった言い方
Where are you from? — I'm from Japan.（出身をたずねる）
Where are you going? — I'm going to the station.
Where shall we meet? — Let's meet in front of the station.

⚠ 注意：Where は「どこ」という場所を表す語をすでにふくんでいるので、Where do you live in? のように前置詞を重ねる必要はない（in Osaka の in は答えの文で使う）。

★ ポイント：たずねる文には前置詞が要らないのに、答えの文には前置詞が要る、という組み合わせが多い。ここが受験生のよく落とすところである。`,
      },
      {
        heading: '答えに使う場所の前置詞',
        body: `場所を答えるときは、位置関係に合った前置詞を選ぶ。図をかいて確かめられるようにしておく。

■ 基本の三つ
in（〜の中に・広い場所に）：in the box／in Osaka／in Japan
on（〜の上に・くっついて）：on the desk／on the wall（かべに）／on the second floor
at（〜の地点に）：at the station／at school／at home／at the bus stop

on は「上」だけでなく「面にくっついている」という意味なので、かべの絵は on the wall、天井のライトは on the ceiling となる。

■ そのほかよく出るもの
under（〜の下に）／by（〜のそばに）／near（〜の近くに）／between A and B（AとBのあいだに）／in front of（〜の前に）／behind（〜のうしろに）／over（〜の真上に）／along（〜にそって）／across from（〜の向かいに）

例）The cat is under the table.
例）The bank is between the post office and the school.
例）There is a park in front of my house.

■ 前置詞を付けない語
here（ここに）／there（そこに）／home（家に）
○ Come here.　× Come to here.
○ I go home.　× I go to home.
ただし at home（家に・在宅で）は名詞としての用法で、これは正しい。

⚠ 注意：I live Osaka. のように前置詞を落とすと、文が成り立たない。live のあとに場所を言うときは必ず in / at が要る。`,
      },
    ],
    trapExamples: [
      {
        question: 'Where do you live? に「大阪に住んでいます」と答えなさい。',
        wrongAnswer: 'I live Osaka.',
        trapExplanation:
          '質問文 Where do you live? に前置詞がないので、答えにも要らないと考えてしまう。日本語の「大阪に住む」の「に」が英語のどこに現れるかを意識していない。',
        correctAnswer: 'I live in Osaka.',
        correctExplanation:
          '「〜に住む」は live in 〜 の形で、場所の前に in が必要である。たずねる文の Where がすでに「どこに」の意味をふくんでいるので疑問文には前置詞が出てこないが、答えでは具体的な地名を言うので in が復活する。市や国には in、番地まで言うときは at を使う。',
      },
      {
        question: '「私のくつはどこですか」を英語にしなさい。',
        wrongAnswer: 'Where is my shoes?',
        trapExplanation:
          'Where is 〜? という形をひとかたまりで覚えているため、主語が複数でも is のままにしてしまう。shoes が複数形であることを見落としている。',
        correctAnswer: 'Where are my shoes?',
        correctExplanation:
          'be動詞は主語に合わせる。shoes は複数形なので are になり、答えも They are under the bed. と they で受ける。くつ・めがね（glasses）・ズボン（pants）などは二つで一組なのでいつも複数形になる、という点も合わせて覚える。',
      },
    ],
  },

  {
    id: 'eigo_s206',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'when・where と前置詞（at / on / in）の整理',
    description: '時と場所の前置詞を「はばの大きさ」でまとめて覚える',
    intro: '「7時に」は at seven、「日曜日に」は on Sunday、「4月に」は in April。日本語ではどれも「に」の一語ですみます。だから日本語から考えると必ずまようのです。英語は時間や場所の「はば」の大きさで前置詞を選んでいます。その物差しを手に入れましょう。',
    order: 706,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '時：at＝時刻（点）、on＝曜日・日付（一日）、in＝月・季節・年（広い）。',
      '場所：at＝地点、on＝面にくっつく、in＝囲まれた内部・広い地域。',
      'this / next / last / every が付いた語句には前置詞を付けない。',
      'here / there / home には to や at を付けない（go home）。',
      'in the morning だが on Sunday morning。特定の日が付くと on になる。',
    ],
    sections: [
      {
        heading: '「はばの大きさ」でそろえる',
        body: `at / on / in は、時でも場所でも「はばの大きさ」という同じ考え方で並んでいる。ばらばらに暗記するより、一本の線でつないだほうが忘れにくい。

■ 時のはば
at（点）：at six／at noon／at midnight／at that time
on（一日分）：on Monday／on May 5／on my birthday
in（広い）：in April／in spring／in 2026／in the morning

■ 場所のはば
at（一点）：at the door／at the station／at school
on（面）：on the desk／on the wall／on the second floor
in（内部・広い地域）：in the box／in the room／in Tokyo／in Japan

同じ場所でも、見方によって前置詞が変わる。
・at the station（待ち合わせ地点としての駅）
・in the station（建物の内部としての駅）
・I live in Tokyo.（住む場所としての広い東京）
・Change trains at Tokyo.（乗りかえ地点としての東京）

★ ポイント：「点なら at、面なら on、中なら in」と唱えて、時にも場所にもあてはめる。日本語の助詞（に・で）からは決められないので、必ずこの三段階で考える。`,
        figureId: 'lf_eigoext06_206',
      },
      {
        heading: '前置詞を付けない語句',
        body: `英語には「前置詞を付けてはいけない語句」がある。ここを知らないと、ていねいに書いたつもりで減点される。

■ this / next / last / every が付いた時の語句
○ this morning　× in this morning
○ next Sunday　× on next Sunday
○ last year　× in last year
○ every day　× on every day
これらの語自体が「いつのことか」を示しているので、前置詞は不要である。

■ today / tomorrow / yesterday / tonight
○ I will go there tomorrow.　× on tomorrow

■ here / there / home
○ Come here.　× Come to here.
○ I went home at five.　× I went to home.
※ 「家で」は at home。go home（家へ帰る）と at home（家で）を混同しないこと。

■ 例外的に on になる形
in the morning（一般的な午前中）
→ on Sunday morning（日曜の朝）／on the morning of May 5
特定の日を表す語がくっつくと、in ではなく on になる。

⚠ 注意：I go to school. の to は必要（school は場所を表す名詞）。しかし I go home. には to を付けない（home は「家へ」という副詞のはたらきをする）。この二つはセットで問われることが多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は次の日曜日に彼を訪ねます」を英語にしなさい。',
        wrongAnswer: 'I will visit him on next Sunday.',
        trapExplanation:
          '「曜日には on を付ける」という規則だけを覚えているため、next が付いていても機械的に on を足してしまう。ふだん on Sunday と書き慣れているほどまちがえやすい。',
        correctAnswer: 'I will visit him next Sunday.',
        correctExplanation:
          'this / next / last / every が付いた時の語句には前置詞を付けない。next Sunday がそれだけで「次の日曜日に」という意味を持っているからである。on Sunday（日曜日に）は next が付いていないので on が必要、という対比で覚える。',
      },
      {
        question: '「私は五時に家に帰りました」を英語にしなさい。',
        wrongAnswer: 'I went to home at five.',
        trapExplanation:
          'go to school / go to the park のように「go to ＋場所」の形を覚えているため、home にも to を付けてしまう。home が名詞ではなく副詞として使われていることに気づけない。',
        correctAnswer: 'I went home at five.',
        correctExplanation:
          'この home は「家へ」という意味をそれ自体で持つ語なので、to を付けない。here / there も同じで、come here / go there となる。一方、「家で」と場所を表すときは at home と前置詞が要る（I studied at home.）。',
      },
    ],
  },

  // ─────────────── 5. why と because / How come（s207〜s209） ───────────────
  {
    id: 'eigo_s207',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'why：「なぜ」とその答え方（Because / To 〜）',
    description: 'Why の疑問文と、Because 〜／To 〜 の二通りの答え方を身につける',
    intro: 'Why were you late? と聞かれたら、Because I missed the bus. と答えます。日本語では「バスに乗りおくれたから」と、理由が先で「から」が後ろに来ます。英語は Because が先頭です。順番がひっくり返るのです。To 〜 で答える形もあわせて確かめます。',
    order: 707,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'Why は「なぜ」と理由をたずねる疑問詞。うしろは疑問文の語順。',
      '答え方は Because ＋ 主語＋動詞（理由）と、To ＋ 動詞の原形（目的）の二通り。',
      'because のうしろは文（主語＋動詞）、because of のうしろは名詞。',
      'so（だから）は結果を導く語で、because（なぜなら）と向きが逆。',
      '答えの時制はたずねられた文に合わせる（Why were you late? — Because the bus was late.）。',
    ],
    sections: [
      {
        heading: 'Why の疑問文と Because の答え',
        body: `Why は理由をたずねる疑問詞である。作り方はほかの疑問詞と同じで、Why を先頭に置き、うしろは疑問文の語順にする。

■ 疑問文の形
Why do you study English? — Because I want to go abroad.
Why is he so happy? — Because he passed the exam.
Why were you absent yesterday? — Because I had a cold.
Why did you come here? — Because I wanted to see you.

■ Because のうしろは「主語＋動詞」
because は文と文をつなぐ語なので、うしろには必ず主語と動詞のそろった文が来る。
○ Because I was busy.
× Because busy.
× Because of I was busy.

■ because of のうしろは名詞
理由を名詞で言うときは because of を使う。
○ Because of the rain.（雨のせいで）
○ We stayed home because of the heavy rain.
× Because of the rain was heavy.

■ 時制をそろえる
たずねられた文が過去なら、答えも過去形にする。
Why were you late? — Because the train was late.（was）
Why did you buy it? — Because it was cheap.（was）

⚠ 注意：会話では Because 〜 だけで答えてよいが、一つの文の中に because を使うときは「主節＋because＋理由」の形にする（I was late because I missed the bus.）。`,
      },
      {
        heading: 'To 〜 で目的を答える',
        body: `Why 〜? には「何のために」という目的を答えることもできる。そのときは to ＋動詞の原形（不定詞）を使う。

■ 目的を答える形
Why did you go to the library? — To borrow some books.（本を借りるために）
Why do you get up early? — To catch the first train.
Why are you studying so hard? — To pass the entrance exam.

■ Because との使い分け
・Because 〜：そうなった原因・わけ
・To 〜：これからしようとしている目的
どちらでも答えられる場面も多い。
Why did you go to the park? — Because I wanted to play soccer.／To play soccer.
意味はほぼ同じで、To 〜 のほうが短く言える。

■ In order to / So that（発展）
上位校では In order to 〜（〜するために）や so that 〜 can 〜 の形も出るが、中学受験では To 〜 で十分である。

■ 文の中で目的を言う
I went to the store to buy some eggs.（卵を買うために店へ行った）
このように、一つの文の中に to ＋原形 を入れると「〜するために」という目的が表せる。

★ ポイント：Why 〜? に対する答えの型は二つだけ。「Because ＋ 文」か「To ＋ 動詞の原形」。まずどちらの型で答えるかを決めてから英語を組み立てると、形がくずれない。`,
      },
    ],
    trapExamples: [
      {
        question: 'Why do you study English? に「アメリカに行きたいからです」と答えなさい。',
        wrongAnswer: 'Because I want go to America.',
        trapExplanation:
          'want のうしろに動詞をそのまま続けてしまう。日本語の「行きたい」がひとかたまりに感じられるため、to が抜けていることに気づきにくい。',
        correctAnswer: 'Because I want to go to America.',
        correctExplanation:
          '「〜したい」は want to ＋動詞の原形。to を落とすと動詞が二つ並んだ形になり文が成り立たない。同じ形の would like to、try to、need to、hope to も to を落とさないよう注意する。',
      },
      {
        question: 'Why were you late? に「バスが遅れたからです」と答えなさい。',
        wrongAnswer: 'Because of the bus was late.',
        trapExplanation:
          'because と because of を同じものだと思っている。of を付けても意味が変わらない気がして、なんとなく付けてしまう。',
        correctAnswer: 'Because the bus was late.',
        correctExplanation:
          'because のうしろには「主語＋動詞」のそろった文が来るので、the bus was late をそのまま続ければよい。because of のうしろに置けるのは名詞だけで、この形を使うなら Because of the bus.（バスのせいで）のように名詞で止める。うしろに動詞があるかどうかで of の要不要が決まる。',
      },
    ],
  },

  {
    id: 'eigo_s208',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'Why don’t you 〜? — さそう・すすめる言い方',
    description: '形は疑問文でも意味は提案になる表現と、その答え方を覚える',
    intro: 'Why don\'t you come with us? を「なぜいっしょに来ないの?」と受け取ると、責められているようで気まずくなります。実際は「いっしょに来ない?」というさそいの言葉です。形は疑問文でも中身は提案。答えるときも Sure. や That sounds good. と返します。',
    order: 708,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'Why don’t you 〜? は「〜したらどうですか」と相手にすすめる言い方。',
      'Why don’t we 〜? / Shall we 〜? / Let’s 〜 は「いっしょに〜しませんか」。',
      'どの形でも、うしろの動詞は必ず原形。',
      '答えは Yes, let’s. / That’s a good idea. / Sounds good. / Sorry, I can’t. など。',
      '形は否定疑問文でも「なぜ〜しないの」と責める意味ではない。',
    ],
    sections: [
      {
        heading: '形と意味のずれ',
        body: `Why don't you 〜? は形の上では「なぜあなたは〜しないのですか」という否定の疑問文だが、実際には「〜したらどうですか」と相手にすすめる決まり文句である。会話文の問題で必ず問われる。

■ すすめる（相手に）
Why don't you come with us?（いっしょに来ませんか）
Why don't you ask your teacher?（先生に聞いてみたら？）
Why don't you take a rest?（少し休んだらどう？）

■ さそう（自分もいっしょに）
Why don't we go shopping?（買い物に行きませんか）
＝ Shall we go shopping? ＝ Let's go shopping.
we を使うと「私たちで〜しよう」というさそいになる。

■ うしろは必ず動詞の原形
don't のあとなので原形が来る。
○ Why don't you go?　× Why don't you to go?　× Why don't you going?

■ ほかの言いかえ
How about going shopping?（〜するのはどうですか）※ How about のうしろは -ing 形
What about having lunch here?
Shall I open the window?（私が〜しましょうか）
Shall we 〜?（いっしょに〜しましょうか）

⚠ 注意：How about のうしろは動詞の -ing 形、Why don't you のうしろは原形。同じ「〜しませんか」でも形がちがうので、書きかえ問題では要注意である。`,
      },
      {
        heading: '答え方の決まり文句',
        body: `さそいやすすめに対する答えは、Yes / No よりも決まった言い方を使うことのほうが多い。会話文の穴うめではここが問われる。

■ 引き受けるとき
Yes, let's.（そうしましょう）※ Let's 〜 や Shall we 〜? への答え
That's a good idea.（いい考えですね）
Sounds good. / That sounds nice.（よさそうですね）
Sure. / OK. / All right. / Of course.
Yes, please.（Shall I 〜? への答え）

■ 断るとき
I'm sorry, I can't.（すみませんができません）
Sorry, but I'm busy today.
No, thank you.（Shall I 〜? を断るとき）
Maybe next time.（また今度）

断るときは、いきなり No. とだけ言わず I'm sorry を付けるのがふつうである。

■ 組み合わせの整理
Shall we 〜? — Yes, let's. / No, let's not.
Shall I 〜? — Yes, please. / No, thank you.
Why don't you 〜? — That's a good idea. / Sounds good.
Let's 〜. — Yes, let's. / OK.

★ ポイント：Shall I 〜?（私がしましょうか）への答えが Yes, please. / No, thank you. である点がとくに問われる。Shall we 〜? との答え方のちがいをセットで覚えること。`,
      },
    ],
    trapExamples: [
      {
        question: 'Why don’t you come to my house? の意味として正しいものを答えなさい。',
        wrongAnswer: 'なぜあなたは私の家に来ないのですか。',
        trapExplanation:
          'Why（なぜ）と don’t（〜しない）をそれぞれ訳してつなげてしまう。形の上では否定疑問文なので、直訳するとこの意味になってしまうのが原因。',
        correctAnswer: '私の家に来ませんか（来たらどうですか）。',
        correctExplanation:
          'Why don’t you 〜? は、理由をたずねているのではなく相手をさそう・すすめる決まり文句である。答えも理由（Because 〜）ではなく That’s a good idea. や Sorry, I can’t. のようになる。同じく Why don’t we 〜? は「いっしょに〜しませんか」。',
      },
      {
        question: '「いっしょに買い物に行きませんか」を Why で始めて英語にしなさい。',
        wrongAnswer: `Why don't we to go shopping?`,
        trapExplanation:
          '「〜しに行く」という日本語や、want to go の形につられて to を入れてしまう。don’t のうしろが原形であるという決まりが働いていない。',
        correctAnswer: `Why don't we go shopping?`,
        correctExplanation:
          'don’t / doesn’t / didn’t のうしろは必ず動詞の原形なので、to は不要である。同じ意味の Shall we go shopping? や Let’s go shopping. も、すべて原形が続く。to が要るのは want to go のように、to 不定詞を使う語のうしろだけである。',
      },
    ],
  },

  {
    id: 'eigo_s209',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'How come 〜? — 語順の変わらない「なぜ」',
    description: 'How come のうしろが平叙文の語順になることを、Why と比べて理解する',
    intro: 'Why did he go home? と同じ意味で、How come he went home? とも言えます。ところが語順に注目してください。How come のあとは he went と、ふつうの文のならびのままです。Why なら did が入るのに。同じ「なぜ」でも形がちがう、この一点が問われます。',
    order: 709,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'How come 〜? は Why 〜? とほぼ同じ意味の、くだけた言い方。',
      'How come のうしろは「主語＋動詞」の平叙文の語順になる。do / does / did を入れない。',
      'Why のうしろは疑問文の語順（Why do you 〜?）。ここが最大のちがい。',
      '答え方は Why と同じで Because 〜 が基本。',
      'おどろきや意外な気持ちをふくむことが多い言い方である。',
    ],
    sections: [
      {
        heading: 'Why との語順のちがい',
        body: `How come 〜? は「どうして〜なの」という意味で、Why 〜? とほぼ同じである。ただし語順が大きくちがうので、そこだけは正確に覚える必要がある。

■ Why は疑問文の語順
Why do you know that?（どうしてそれを知っているの）
Why is he angry?
Why did you come home early?

■ How come は平叙文の語順
How come you know that?
How come he is angry?
How come you came home early?

うしろが「主語＋動詞」のまま、つまり ふつうの文の語順のままである点に注目する。do / does / did は入れないし、be動詞も前に出さない。

■ もとの形から考える
How come は「How does it come about that 〜?（どうしてそういうことになるのか）」が短くなった言い方だと説明される。そのため「that 〜」の部分がふつうの文のまま残っている、と考えると語順が納得できる。

⚠ 注意：How come do you know that? は誤り。How come を Why の言いかえだと思って、そのままうしろに疑問文をつなげてしまうのがよくある失敗である。

★ ポイント：「Why は語順が変わる、How come は語順が変わらない」と一組で覚える。この対比そのものが出題される。`,
      },
      {
        heading: '使い方と答え方',
        body: `■ 気持ちのちがい
How come 〜? は、Why 〜? よりくだけた話し言葉で、「えっ、どうして？」というおどろきや意外な気持ちをふくむことが多い。
例）How come you are here?（どうしてここにいるの？＝いるはずがないのに）
作文やあらたまった場面では Why を使うほうが安全である。

■ 答え方
Why と同じで Because 〜 で答える。
How come you were late? — Because I missed the bus.
How come she is so happy? — Because she won the game.

Yes / No では答えられない点も Why と同じである。

■ そのほかの「なぜ」の言い方
What 〜 for?（何のために）
例）What did you buy it for?（何のためにそれを買ったの）＝ Why did you buy it?
この形は Why と同じく疑問文の語順で、for が文の最後に残る。

■ まとめ
・Why ＋ 疑問文の語順（Why do you 〜?）
・How come ＋ 平叙文の語順（How come you 〜?）
・What 〜 for? ＋ 疑問文の語順、for は最後
どれも答えは Because 〜。形だけが異なる。`,
      },
    ],
    trapExamples: [
      {
        question: '「どうしてそれを知っているのですか」を How come で始めて英語にしなさい。',
        wrongAnswer: 'How come do you know that?',
        trapExplanation:
          'How come を Why の言いかえだと覚えているため、Why do you know that? の Why をそのまま How come に置きかえてしまう。語順まで変わることを知らない。',
        correctAnswer: 'How come you know that?',
        correctExplanation:
          'How come のうしろは「主語＋動詞」の平叙文の語順になり、do / does / did は入れない。Why do you know that? と How come you know that? を並べて書き、do の有無を見比べて覚えるとよい。',
      },
      {
        question: 'How come you were absent yesterday? に答えなさい。',
        wrongAnswer: 'Yes, I was.',
        trapExplanation:
          'How come のうしろが平叙文の語順で、Yes/No疑問文のように見えないため、かえって were you 〜? の形に読みかえて Yes で答えてしまう。',
        correctAnswer: 'Because I had a cold.',
        correctExplanation:
          'How come 〜? は Why 〜? と同じく理由をたずねる言い方なので、Yes / No では答えられない。答えは Because ＋ 主語＋動詞 の形にする。過去のことをたずねられているので、答えの動詞も過去形（had）にそろえる。',
      },
    ],
  },

  // ─────────────── 6. how の基本と How ＋ 形容詞・副詞（s210〜s215） ───────────────
  {
    id: 'eigo_s210',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'how①：手段・様子をたずねる基本の How',
    description: 'How の二つの意味（どのように／どんな具合か）を場面で使い分ける',
    intro: 'How do you go to school? は「どうやって学校へ行きますか」、How are you? は「調子はどうですか」。同じ How でも、手段をたずねる場合と様子をたずねる場合があります。日本語の「どう」も同じように広い語ですが、答え方はまったくちがいます。',
    order: 710,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'How には「どのようにして（手段・方法）」と「どんな具合か（様子）」の二つの意味がある。',
      '手段は by ＋ 乗り物（by bus / by train）で答える。a や the は付けない。',
      '「歩いて」は on foot、または I walk to 〜. と動詞で表す。',
      'How are you? は体調、How is the weather? は天気をたずねる。',
      'How about 〜? は「〜はどうですか」。うしろは名詞か動詞の -ing 形。',
    ],
    sections: [
      {
        heading: '手段・方法をたずねる How',
        body: `How のいちばん基本の意味は「どのようにして」である。移動の手段や、やり方をたずねるときに使う。

■ 手段をたずねる
How do you go to school? — I go to school by bus.
How does your father go to work? — He goes by train.
How did you come here? — I came here by bike.

■ by ＋ 乗り物 には a / the を付けない
○ by bus／by train／by car／by bike／by plane／by ship／by taxi
× by a bus／× by the train
by 〜 は「〜という手段で」という意味のかたまりなので、乗り物を数えているのではない。

■ 「歩いて」の言い方
on foot（徒歩で）※ feet ではなく foot
例）I go to school on foot.
同じ内容は I walk to school. とも言える。× by walk は誤り。

■ やり方をたずねる
How do you make it?（どうやって作るのですか）
How do you say this in English?（これは英語で何と言いますか）
How do you spell your name?（名前はどうつづりますか）
これらは会話文でよく出る決まった言い方である。

⚠ 注意：How can I get to the station?（駅へはどう行けばよいですか）は道をたずねる決まり文句。答えは Go straight and turn right at the second corner. のようになる。`,
      },
      {
        heading: '様子・状態をたずねる How',
        body: `How にはもう一つ「どんな具合か」と様子や状態をたずねる使い方がある。

■ 人の調子
How are you? — I'm fine, thank you. / Pretty good. / Not so good.
How is your mother? — She is fine.
How are you doing? / How's it going?（調子はどう？）

■ ものごとの様子
How is the weather in Tokyo? — It's sunny.（天気）
How was your trip? — It was a lot of fun.（旅行の感想）
How was the test? — It was very difficult.
過去のことをたずねるときは How was 〜? になる。

■ How about 〜?（〜はどうですか）
提案したり、相手にたずね返したりするときに使う。
How about you?（あなたはどうですか）
How about a cup of tea?（お茶はいかがですか）※ うしろは名詞
How about going to the movies?（映画に行きませんか）※ うしろは動詞の -ing 形
What about 〜? も同じ意味で使える。

⚠ 注意：How about のうしろに動詞の原形を置くことはできない。× How about go to the park? ／○ How about going to the park?

★ ポイント：How was 〜? に対しては、感想を表す形容詞（great, fun, boring, difficult, delicious）で答える。「よかった／悪かった」を言える形容詞をいくつか用意しておくと会話文で強い。`,
      },
    ],
    trapExamples: [
      {
        question: 'How do you go to school? に「バスで行きます」と答えなさい。',
        wrongAnswer: 'I go to school by a bus.',
        trapExplanation:
          '数えられる名詞には a を付ける、という規則を機械的にあてはめてしまう。by bus が「バスという手段で」というひとかたまりの言い方であることを知らない。',
        correctAnswer: 'I go to school by bus.',
        correctExplanation:
          '「by ＋ 乗り物」で手段を表すときは、a / an / the を付けず、複数形にもしない。by bus / by train / by car / by bike のようにそのまま並べる。ただし I go to school in my father’s car. のように具体的な車を指すときは by ではなく in を使う。',
      },
      {
        question: '「私は歩いて学校へ行きます」を英語にしなさい。',
        wrongAnswer: 'I go to school by walk.',
        trapExplanation:
          'by bus / by train の形をそのまま応用して、「歩き」も by で表せると考えてしまう。walk が乗り物ではないことに気づけていない。',
        correctAnswer: 'I go to school on foot.',
        correctExplanation:
          '「徒歩で」は on foot という決まった言い方で、by は使わない。foot は単数形のままで、on feet とはしない。同じ内容を I walk to school. と動詞で表すこともでき、こちらのほうが自然でよく使われる。',
      },
    ],
  },

  {
    id: 'eigo_s211',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'how②：How many と How much',
    description: '数えられる名詞と数えられない名詞で、たずね方を使い分ける',
    intro: '「本を何冊持っていますか」は How many books 〜?、「水はどれくらい要りますか」は How much water 〜? です。本は数えられ、水は数えられないからです。日本語では「何冊」「どれくらい」と自然に使い分けていますが、英語ではこの区別が形にはっきり出ます。',
    order: 711,
    studyPeriod: '小5後半',
    targetLevel: 'kiso',
    keyPoints: [
      'How many ＋ 数えられる名詞の複数形（How many books do you have?）。',
      'How much ＋ 数えられない名詞（How much water 〜?）。',
      'How much is / are 〜? は値段をたずねる言い方。',
      'water / milk / money / time / bread / paper などは数えられない名詞。',
      '数えられない名詞は a glass of / a cup of / a piece of で数える。',
    ],
    sections: [
      {
        heading: '数えられる名詞と数えられない名詞',
        body: `英語の名詞は「一つ二つと数えられるもの」と「数えられないもの」に分かれる。どちらかによって、数量をたずねる語が変わる。

■ 数えられる名詞（How many）
book / apple / student / dog / pen / egg など、形がはっきりしていて一つ二つと数えられるもの。
・a book / two books のように a が付き、複数形になる。

■ 数えられない名詞（How much）
water / milk / juice / money / time / bread / paper / rice / sugar / snow / music / homework など、形が決まっていないものや、まとまりとして考えるもの。
・a を付けず、複数形にもしない。× two waters／× many homeworks

■ たずね方
How many books do you have? — I have twenty (books).
How many students are there in your class? — There are thirty-five.
How much water do you drink every day? — About two liters.
How much time do we have? — We have ten minutes.

⚠ 注意：How many のうしろの名詞は必ず複数形にする。× How many book do you have? ／○ How many books 〜?

★ ポイント：日本語では「水を三つ」と言えてしまうが、英語では three waters とは言わない。数えられるかどうかは日本語の感覚ではなく、英語の単語ごとに覚える。`,
        figureId: 'lf_eigoext06_211',
      },
      {
        heading: '値段のたずね方と、数えられない名詞の数え方',
        body: `■ 値段をたずねる How much
How much is this book? — It's 800 yen.
How much are these apples? — They are 300 yen.
主語が単数なら is、複数なら are。値段は「量」なので、数えられるりんごでも値段をたずねるときは How much になる。

How much does it cost? / How much is the fare?（運賃は）といった言い方もある。

■ 数えられない名詞を数える言い方
入れ物や形を表す語をそえて数える。
a glass of water（コップ一杯の水）／two glasses of water
a cup of coffee（カップ一杯のコーヒー）／three cups of tea
a piece of paper（紙一枚）／two pieces of cake
a slice of bread（パン一切れ）
a bottle of milk（びん一本の牛乳）

例）How many cups of coffee do you drink a day?（一日に何杯コーヒーを飲みますか）
このように、入れ物の語（cups）が数えられる名詞なので How many を使える。

■ 多い・少ないの言い方
数えられる名詞：many（多くの）／a few（少しの）／few（ほとんどない）
数えられない名詞：much（多くの）／a little（少しの）／little（ほとんどない）
どちらにも使える：a lot of / lots of / some / any

⚠ 注意：肯定文で much を単独で使うことは少なく、a lot of を使うのがふつう（I have a lot of homework.）。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは一日にどれくらいの水を飲みますか」を英語にしなさい。',
        wrongAnswer: 'How many water do you drink a day?',
        trapExplanation:
          '日本語の「どれくらい」を「どれだけの数」と受け取り、How many を選んでしまう。water が数えられない名詞であることを意識していない。',
        correctAnswer: 'How much water do you drink a day?',
        correctExplanation:
          'water は形が決まっていない数えられない名詞なので、量をたずねる How much を使う。water を複数形にすることもできない。数えられる名詞（books, students）なら How many ＋ 複数形、数えられない名詞（water, money, time）なら How much、と対応させる。',
      },
      {
        question: '「あなたは本を何冊持っていますか」を英語にしなさい。',
        wrongAnswer: 'How many book do you have?',
        trapExplanation:
          '「何冊」という日本語には複数を表す形がないため、book を単数のままにしてしまう。How many のうしろが必ず複数形になるという決まりを忘れている。',
        correctAnswer: 'How many books do you have?',
        correctExplanation:
          'How many は「いくつあるか」をたずねるので、うしろの名詞は必ず複数形になる。答えが一冊であっても、たずねる時点では複数形で書く。同じく How many students / How many pens / How many times のように、-s を付ける習慣をつける。',
      },
    ],
  },

  {
    id: 'eigo_s212',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'how③：How long と How far',
    description: '時間・長さと距離をたずね分け、It takes 〜 の答え方を身につける',
    intro: '「駅までどれくらいですか」——この日本語は、時間のことも距離のこともさせます。英語では How long does it take? と How far is it? に分かれます。答えも It takes ten minutes. と It\'s two kilometers. でちがう。あいまいさが許されない場面です。',
    order: 712,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'How long は「どのくらい長く（期間・長さ）」をたずねる。',
      'How far は「どのくらい遠く（距離）」をたずねる。',
      '時間の答えは It takes ＋ 時間（It takes ten minutes.）。',
      '距離の答えは It’s about ＋ 距離（It’s about two kilometers.）。',
      'How long のうしろに time を付けない（× How long time）。',
    ],
    sections: [
      {
        heading: 'How long（期間・長さ）',
        body: `How long は「どのくらい長いか」をたずねる。時間の長さにも、ものの長さにも使える。

■ かかる時間をたずねる
How long does it take from here to the station? — It takes about ten minutes.
How long does it take to get to your school? — It takes twenty minutes by bike.
この it は「時間の it」で、「それ」という意味はない。答えの文も It takes 〜 で始める。

■ 期間をたずねる
How long did you stay in Kyoto? — I stayed there for three days.
How long have you lived here?（現在完了。上位校向け）
期間を答えるときは for 〜（〜のあいだ）を使う。

■ ものの長さをたずねる
How long is this bridge? — It's about 500 meters long.
How long is this movie? — It's two hours long.

■ 答え方の型
・時間がかかる：It takes ＋ 時間.
・期間：for ＋ 期間.
・長さ：It's ＋ 数字 ＋ 単位 (long).

⚠ 注意：How long time does it take? は誤り。long にすでに「長さ」の意味があるので time は不要である。

★ ポイント：How long does it take 〜? は入試の会話文で最頻出。「It takes ＋ 時間」という答えの型を丸ごと覚えておく。`,
        figureId: 'lf_eigoext06_212',
      },
      {
        heading: 'How far（距離）',
        body: `How far は「どのくらい遠いか」と距離をたずねる。時間ではなく、キロメートルやメートルで答える。

■ 基本の形
How far is it from here to the park? — It's about two kilometers.
How far is your school from your house? — It's about one kilometer.
この it も「距離の it」で、意味はない。

■ How long との区別
同じ「駅までどのくらい？」でも、
・時間を知りたい → How long does it take to the station? — It takes ten minutes.
・距離を知りたい → How far is it to the station? — It's about one kilometer.
たずね方と答え方がずれると不正解になる。

■ そのほかの言い方
How high is that tower?（高さ）— It's 634 meters high.
How deep is this lake?（深さ）— It's about 40 meters deep.
How wide is this river?（幅）— It's about 100 meters wide.
これらはすべて「How ＋ 形容詞」で、答えは「数字 ＋ 単位 ＋ 形容詞」の形になる。

⚠ 注意：答えの文で単位のあとに long / high / deep をそえるのが正式な形（It's 500 meters long.）。単位だけで答えても通じるが、書くときはそえたほうが確実である。`,
      },
    ],
    trapExamples: [
      {
        question: 'How long does it take from your house to school? に答えなさい。',
        wrongAnswer: 'It takes about two kilometers.',
        trapExplanation:
          '「家から学校まで」という言い方から距離を答えたくなり、単位をキロメートルにしてしまう。How long と How far の役割のちがいを意識していない。',
        correctAnswer: 'It takes about fifteen minutes.',
        correctExplanation:
          'How long does it take 〜? は「どのくらい時間がかかるか」をたずねる形なので、答えは時間の単位（minutes / hours）になる。距離をたずねるなら How far is it from your house to school? と聞き、It’s about two kilometers. と答える。',
      },
      {
        question: 'How long did you stay in Kyoto? に「三日間です」と答えなさい。',
        wrongAnswer: 'I stayed for three days ago.',
        trapExplanation:
          '過去のことなので ago を付けたくなる。for（〜のあいだ）と ago（〜前に）はどちらも時間に関する語なので、区別せずに両方書いてしまう。',
        correctAnswer: 'I stayed there for three days.',
        correctExplanation:
          'for は「どれだけの期間続いたか」、ago は「今からどれだけ前か」を表す語で、いっしょには使えない。How long（期間）に答えるので for three days が正しい。three days ago を使うのは When did you go there? に「三日前です」と答えるときである。',
      },
    ],
  },

  {
    id: 'eigo_s213',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'how④：How often と頻度の言い方',
    description: '回数の表し方（once / twice / 〜 times）と頻度の副詞の位置を覚える',
    intro: '「どれくらいテニスをしますか」とたずねたいとき、How often do you play tennis? と言います。答えは Twice a week.（週に2回）のように回数で返します。この a week の a は「〜につき」の意味。小さいけれど落としやすい語です。',
    order: 713,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'How often 〜? は「どのくらいの頻度で」をたずねる。',
      '一回は once、二回は twice、三回以上は three times のように times を使う。',
      '「週に一回」は once a week。この a は「〜につき」の意味。',
      '頻度の副詞（always / usually / often / sometimes / never）は一般動詞の前、be動詞のうしろ。',
      'never はそれだけで否定の意味なので、not といっしょに使わない。',
    ],
    sections: [
      {
        heading: '回数の表し方',
        body: `How often 〜? は「どのくらいの頻度で〜しますか」とたずねる言い方である。答えでは回数と期間を組み合わせる。

■ たずね方
How often do you play tennis? — Twice a week.
How often does your father go abroad? — About three times a year.
How often do you go to the library? — Once a month.

■ 回数の言い方
一回：once　二回：twice　三回：three times　四回：four times
※ once と twice だけは特別な形で、one time / two times とは言わないのがふつう。

■ 「〜につき」の a
once a week（週に一回）／twice a month（月に二回）／three times a year（年に三回）／five times a day（一日に五回）
この a は「一つの」ではなく「〜につき」という意味で、per の代わりに使われている。

■ そのほかの答え方
every day（毎日）／every Sunday（毎週日曜）／once in a while（ときどき）／almost every day（ほぼ毎日）／not very often（あまり〜しない）

⚠ 注意：答えるときに前置詞をそえない。× on twice a week ／○ twice a week

★ ポイント：How often と How long は混同しやすい。often＝どのくらいの回数、long＝どのくらいの長さ、と対応させる。`,
        figureId: 'lf_eigoext06_213',
      },
      {
        heading: '頻度の副詞と、その位置',
        body: `回数のかわりに、頻度を表す副詞で答えることもできる。これらの副詞は文の中で置く場所が決まっている。

■ 度合いの順
always（いつも・100％）＞ usually（たいてい・80％）＞ often（よく・60％）＞ sometimes（ときどき・40％）＞ seldom / rarely（めったに〜ない・10％）＞ never（一度も〜ない・0％）

■ 置く場所
①一般動詞の前
I always get up at six.
He usually walks to school.
She never eats natto.

②be動詞のうしろ
He is always kind to us.
I am sometimes late for school.

③助動詞のうしろ
I will always remember you.
You can usually see Mt. Fuji from here.

■ sometimes の例外
sometimes は文の先頭や最後にも置ける。
Sometimes I go to the park. / I go to the park sometimes.

⚠ 注意：never はそれだけで「一度も〜ない」という否定の意味を持つので、don't といっしょには使わない。× I don't never eat natto. ／○ I never eat natto.

★ ポイント：「一般動詞の前・be動詞のうしろ」は、not の位置とちょうど同じである（I don't 〜 / I am not 〜）。not の位置を思い出せば、頻度の副詞の位置も思い出せる。`,
      },
    ],
    trapExamples: [
      {
        question: 'How often do you go to the swimming school? に「週に二回です」と答えなさい。',
        wrongAnswer: 'Two times a week.',
        trapExplanation:
          'three times / four times の形をそのまま二回にもあてはめてしまう。twice という特別な語があることを知らないか、思い出せない。',
        correctAnswer: 'Twice a week.',
        correctExplanation:
          '一回は once、二回は twice という特別な形を使い、三回以上から three times のように times を使う。「週に」は a week。once a week / twice a week / three times a week と続けて口に出して覚えると定着する。',
      },
      {
        question: '「私はたいてい十時に寝ます」を英語にしなさい。',
        wrongAnswer: 'I am usually go to bed at ten.',
        trapExplanation:
          '「頻度の副詞は be動詞のうしろ」という規則だけを覚えていて、文に be動詞がないのに am を足してしまう。動詞が二つ並んでいることに気づけない。',
        correctAnswer: 'I usually go to bed at ten.',
        correctExplanation:
          'この文の動詞は go という一般動詞なので、頻度の副詞は動詞の前に置く。be動詞のうしろに置くのは He is always busy. のように、もともと文に be動詞があるときだけである。副詞を入れるために be動詞を足してはいけない。',
      },
    ],
  },

  {
    id: 'eigo_s214',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'how⑤：How old / How tall / How high / How heavy',
    description: '年齢・高さ・重さのたずね方と、答えるときの単位のそえ方を学ぶ',
    intro: 'How old are you? は「何才ですか」ですが、直訳すれば「どれくらい古いですか」です。ものにも使えて、How old is this temple? なら「この寺は建ってどれくらいですか」になります。How のあとに形容詞を置くと、そのものさしではかった量をたずねる形になるのです。',
    order: 714,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'How old は年齢だけでなく「どのくらい古いか」もたずねる。',
      'How tall は人・木・建物の「背の高さ」、How high は山や地面からの高さ。',
      '答えは「数 ＋ 単位 ＋ 形容詞」（It’s 634 meters tall.）。',
      '年齢の答えは 〜 years old。one year old は単数形。',
      '重さは How heavy 〜? か How much does it weigh?。',
    ],
    sections: [
      {
        heading: 'How old と How tall / How high',
        body: `How のうしろに形容詞を置くと「どのくらい〜か」という意味になる。どの形容詞を選ぶかで、たずねる中身が決まる。

■ How old（年齢・古さ）
How old are you? — I'm twelve years old.
How old is your brother? — He is fifteen.
How old is this temple? — It's about 400 years old.（建ってから約400年）

人だけでなく、建物・木・町にも使える。人以外に使うときは「何歳ですか」ではなく「どのくらい古いですか」という意味になる。

■ 年齢の答え方
twelve years old（12歳）／one year old（1歳・単数形）
years old を省いて I'm twelve. と言うこともできる。

■ How tall（背の高さ）
How tall are you? — I'm 150 centimeters tall.
How tall is that tree? — It's about ten meters tall.
人・木・建物のように「細長く立っているもの」の高さに使う。

■ How high（地面からの高さ・山）
How high is Mt. Fuji? — It's 3,776 meters high.
How high can you jump?（どのくらい高く跳べますか）
山や、飛んでいるものの高さには high を使う。

⚠ 注意：Mt. Fuji には tall ではなく high を使う。「山は tall と言わない」と覚えておくとよい（人・木・建物は tall）。

★ ポイント：答えの形は「数 ＋ 単位 ＋ 形容詞」。It’s 3,776 meters high. のように、最後に形容詞をそえるところまで書けるようにする。`,
      },
      {
        heading: '重さ・大きさ・値段のたずね方',
        body: `■ 重さ
How heavy is this bag? — It's about three kilograms.
How much does it weigh? — It weighs three kilograms.
weigh は「重さが〜ある」という動詞である。

■ 大きさ
How big is your school? / How large is this park?
big は身近な言い方、large はやや形式ばった言い方。

■ 値段
How much is this? — It's 500 yen.
（値段は数ではなく量とみなすので、How many ではなく How much を使う）

■ 速さ・年齢以外の「どのくらい」
How fast can you run?（どのくらい速く走れますか）
How far can you swim?（どのくらいの距離を泳げますか）
How well does she play the piano?（どのくらいじょうずに弾きますか）
How ＋ 副詞 の形もあり、こちらは動作のしかたをたずねる。

■ 単位の書き方
・数字が二以上なら単位は複数形：three kilograms / ten meters
・ただし年齢は 〜 years old（1歳だけ one year old）
・身長は centimeters、体重は kilograms がふつう

⚠ 注意：How many years old are you? とは言わない。年齢は How old are you? の一つの形で決まっている。`,
      },
    ],
    trapExamples: [
      {
        question: 'How old is this temple? の意味として正しいものを答えなさい。',
        wrongAnswer: 'このお寺は何歳ですか。',
        trapExplanation:
          'How old ＝「何歳」と一対一で覚えているため、人以外に使われたときも「歳」で訳してしまう。日本語として不自然であることに気づけない。',
        correctAnswer: 'このお寺はどのくらい古いのですか（建ってからどのくらいたっていますか）。',
        correctExplanation:
          'How old は「どのくらい年を経ているか」をたずねる言い方で、人に使えば年齢、ものに使えば古さを表す。答えも It’s about 400 years old.（約400年前のものです）となる。木・町・国などにも同じように使える。',
      },
      {
        question: '「富士山はどのくらいの高さですか」を英語にしなさい。',
        wrongAnswer: 'How tall is Mt. Fuji?',
        trapExplanation:
          '「高さ」という日本語から、身長をたずねる How tall を選んでしまう。tall と high の使い分けが、対象によって決まることを知らない。',
        correctAnswer: 'How high is Mt. Fuji?',
        correctExplanation:
          'tall は人・木・建物のように細長く立っているものに使い、山には high を使う。答えは It’s 3,776 meters high. となる。なお建物は How tall is that tower? と How high is that tower? のどちらも使えるが、山は high と覚えておけば安全である。',
      },
    ],
  },

  {
    id: 'eigo_s215',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'how⑥：How ＋ 形容詞・副詞の総整理',
    description: 'How のあとに置く語で何をたずねているかを一覧で整理する',
    intro: 'How many、How long、How often、How tall — ここまでにいくつもの How が出てきました。ばらばらに覚えると、いざというとき出てきません。実はすべて「How ＋ ものさしになる語」という同じ形です。一覧にして、全体を見わたしておきましょう。',
    order: 715,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'How ＋ 形容詞・副詞 で「どのくらい〜か」をたずねる。何をたずねるかはうしろの語で決まる。',
      'many＝数、much＝量・値段、long＝期間・長さ、far＝距離、often＝頻度、old＝年齢。',
      'たずね方と答えの単位をセットで覚える（long→minutes、far→kilometers）。',
      'How のうしろに余計な語を足さない（× How long time、× How many years old）。',
      '疑問詞のうしろは疑問文の語順。How many books do you have? の do を落とさない。',
    ],
    sections: [
      {
        heading: '一覧で確かめる',
        body: `How ＋ 形容詞・副詞 の形をまとめて並べると、何がちがうのかがはっきりする。たずね方と答え方をセットで覚えるのがこつである。

■ 数と量
How many ＋ 複数形（数）— Ten books.
How much ＋ 数えられない名詞（量）— About two liters.
How much is it?（値段）— It's 500 yen.

■ 時間と距離
How long（期間・長さ）— It takes ten minutes. / For three days.
How far（距離）— It's about two kilometers.
How often（頻度）— Twice a week.

■ 大きさ・年齢
How old（年齢・古さ）— I'm twelve years old.
How tall（背の高さ）— I'm 150 centimeters tall.
How high（山などの高さ）— It's 3,776 meters high.
How heavy（重さ）— It's three kilograms.
How big / How large（大きさ）

■ 動作のしかた
How fast（速さ）— I can run 100 meters in 15 seconds.
How well（じょうずさ）— She plays the piano very well.
How soon（あとどれくらいで）— In ten minutes.

★ ポイント：How soon 〜? は「あとどれくらいで」で、答えは in ＋ 時間（in ten minutes＝十分後に）。How long との区別が上位校で問われる。`,
        figureId: 'lf_eigoext06_215',
      },
      {
        heading: 'まちがえやすい組み合わせ',
        body: `■ 余計な語を足さない
× How long time does it take? → ○ How long does it take?
× How many years old are you? → ○ How old are you?
× How much price is it? → ○ How much is it?
How ＋ 形容詞 の二語で意味が完成しているので、同じ意味の名詞を重ねる必要はない。

■ 語順を守る
How many ＋ 名詞 のうしろは、ふつうの疑問文の語順になる。
○ How many books do you have?
× How many books you have?
ただし「How many ＋ 名詞」が主語のときは do が要らない（How many students are there in your class? / How many people came to the party?）。

■ たずねる語と答えの単位をそろえる
How long → minutes / hours / days（時間）
How far → meters / kilometers（距離）
How often → once / twice / 〜 times（回数）
How much → yen / dollars（値段）、liters（量）
How old → years old（年齢）
たずねられた語と答えの単位がずれていないかを、答えを書いたあとに必ず確かめる。

⚠ 注意：How much are you? は「あなたはいくらですか」となり、人を売り物にした意味になってしまう。年齢は How old are you?、身長は How tall are you? である。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたは何歳ですか」を英語にしなさい。',
        wrongAnswer: 'How much are you?',
        trapExplanation:
          'How much を「どのくらい」という万能の言い方だと思ってしまう。much が量や値段を表すことを意識していないため、人に対して使ってしまう。',
        correctAnswer: 'How old are you?',
        correctExplanation:
          '年齢は How old 〜? と決まっている。How much are you? は「あなたはいくらですか」という意味になってしまう。How のうしろの形容詞が何をたずねるかを決めるので、old＝年齢、much＝量・値段、tall＝背の高さ、と一つずつ対応させて覚える。',
      },
      {
        question: '「駅までどのくらい時間がかかりますか」を英語にしなさい。',
        wrongAnswer: 'How long time does it take to the station?',
        trapExplanation:
          '「どのくらい時間が」という日本語の「時間」を英語にも残そうとして time を入れてしまう。long にすでに時間の長さの意味があることに気づけない。',
        correctAnswer: 'How long does it take to the station?',
        correctExplanation:
          'How long の二語で「どのくらいの長さ（時間）」という意味が完成しているので、time は不要である。同じく How many years old（年齢）や How much price（値段）も、意味の重なる名詞を足した誤りである。How ＋ 形容詞 は二語で一組と覚える。',
      },
    ],
  },

  // ─────────────── 7. 疑問詞が主語になる疑問文（s216〜s218） ───────────────
  {
    id: 'eigo_s216',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞が主語①：語順が変わらない疑問文',
    description: 'Who broke it? のように do を使わず、平叙文の語順のまま作る形を学ぶ',
    intro: 'Who broke this window? には do も does もありません。ふつうの疑問文には必要なのに、なぜないのでしょう。Who がそのまま主語だからです。「だれが」とたずねる文では、語順を入れかえる必要がありません。ここを知らないと、必ず do を入れてしまいます。',
    order: 716,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      '疑問詞そのものが主語のときは、do / does / did を使わない。',
      '語順は平叙文と同じ「疑問詞（主語）＋動詞〜?」。',
      '主語の疑問詞は三人称単数あつかい。現在形なら動詞に s が付く（Who wants 〜?）。',
      '過去なら動詞をそのまま過去形にする（Who broke the window?）。',
      '見分け方：疑問詞のすぐあとに動詞が来ていれば、その疑問詞は主語。',
    ],
    sections: [
      {
        heading: '主語をたずねる疑問文',
        body: `これまでの疑問文は「疑問詞＋do/does/did＋主語＋動詞」の形だった。しかし、たずねたいものが主語そのものである場合、入れかえる必要がなくなるため語順が変わらない。

■ 平叙文と見比べる
Ken broke this window.（ケンがこの窓を割った）
　→ Ken をたずねたい
　→ Ken の場所に Who を置くだけ
　→ Who broke this window?（だれがこの窓を割ったのですか）

do / does / did を入れる場所がないことに注目する。主語がすでに文の先頭にあるので、動かす必要がないのである。

■ ほかの例
Who lives in this house?（だれがこの家に住んでいますか）
Who wants to go with me?（だれが私といっしょに行きたいですか）
What happened yesterday?（きのう何があったのですか）
Which bus goes to the station?（どのバスが駅に行きますか）

■ 目的語をたずねる文とのちがい
・Who do you like?（あなたはだれが好きですか）→ 好かれる相手をたずねる＝目的語 → do が要る
・Who likes you?（だれがあなたを好きですか）→ 好く人をたずねる＝主語 → do が要らない

⚠ 注意：Who did break this window? は誤り（強く言いたいときの特別な形をのぞく）。中学受験では Who broke 〜? と書く。`,
        figureId: 'lf_eigoext06_216',
      },
      {
        heading: '主語の疑問詞は三人称単数あつかい',
        body: `Who / What が主語になるとき、それは「一人（一つ）」とみなして扱う。そのため現在の文では動詞に三単現の s が付く。

■ 現在形
Who wants some tea?（だれかお茶がほしい人は？）※ want ではなく wants
Who has a pen?（だれかペンを持っていますか）※ have ではなく has
Who knows the answer?
What makes you so happy?

答えが複数人になりそうな場面でも、たずねる時点では s を付ける。

■ 過去形
過去の文では、動詞をそのまま過去形にする。
Who broke this cup?
Who came to the party?
Who said that?
Who took my eraser?

■ be動詞の場合
Who is absent today?（きょうはだれが休みですか）
What is in this box?（この箱の中に何が入っていますか）
be動詞は is を使う。

■ Which ＋ 名詞 が主語のとき
Which bus goes to the station?（bus は単数なので goes）
Which trains stop at this station?（trains は複数なので stop）
うしろの名詞の数に合わせる。

★ ポイント：「主語の Who は三単現」と覚える。Who want to go? という誤りが非常に多い。`,
      },
    ],
    trapExamples: [
      {
        question: '「だれがこの窓を割ったのですか」を英語にしなさい。',
        wrongAnswer: 'Who did break this window?',
        trapExplanation:
          '「疑問文には do / does / did が必要」という規則を全部の疑問文にあてはめてしまう。Who がこの文の主語であり、入れかえる語がないことに気づいていない。',
        correctAnswer: 'Who broke this window?',
        correctExplanation:
          '疑問詞そのものが主語のときは、Ken broke this window. の Ken を Who に置きかえるだけでよく、語順は変わらない。did を入れる場所がないので使わない。見分け方は「疑問詞のすぐあとに動詞が来ているか」。来ていればその疑問詞は主語である。',
      },
      {
        question: '「だれが私といっしょに行きたいですか」を英語にしなさい。',
        wrongAnswer: 'Who want to go with me?',
        trapExplanation:
          '「だれが」と聞くと何人来るかわからないので、複数を思いうかべて動詞に s を付けないでしまう。主語の疑問詞が三人称単数あつかいであることを知らない。',
        correctAnswer: 'Who wants to go with me?',
        correctExplanation:
          '主語になった Who / What は三人称単数として扱うので、現在の文では動詞に s が付く。Who wants 〜? / Who has 〜? / Who knows 〜? の形で覚えておく。過去の文なら Who wanted to go? と過去形にすればよい。',
      },
    ],
  },

  {
    id: 'eigo_s217',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞が主語②：What happened? / Which 〜 が主語のとき',
    description: 'What や Which ＋ 名詞 が主語になる文を、動詞の形に注意して作る',
    intro: '「何があったの?」は What happened? の二語で言えます。What did happen? としなくてよいのです。What や Which が主語のときは、動詞をそのまま続けます。しかも単数あつかいになるので、現在の文なら s が付く。細かいけれど差がつく点です。',
    order: 717,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'What happened? は「何が起きたのですか」。did を使わない。',
      'What is in the box? のように、What が主語で be動詞が続く形もある。',
      'What makes you 〜? は「何があなたを〜にするのか」＝「なぜ〜なのか」。',
      'Which ＋ 名詞 が主語のときは、その名詞の数に動詞を合わせる。',
      'How many ＋ 名詞 が主語のときも do を使わない（How many students came?）。',
    ],
    sections: [
      {
        heading: 'What が主語になる文',
        body: `What も主語になれる。そのときは Who と同じく do / does / did を使わず、語順も変わらない。

■ What happened?（何が起きたのですか）
Something happened. の something をたずねる形。
例）What happened to you?（どうしたのですか）
例）What happened yesterday?
× What did happen? とは書かない。

■ What is 〜?（何が〜にありますか）
What is in this box? — There is a cake in it.
What is on the desk? — There are some books.
be動詞のうしろに場所を表す語句が来る形である。

■ What makes 〜?（何が〜させるのか）
What makes you so happy? — I passed the exam.
直訳は「何があなたをそんなに幸せにするのですか」だが、意味は「どうしてそんなにうれしいのですか」に近い。Why are you so happy? と言いかえられる。
例）What made you cry?（どうして泣いたのですか）

■ そのほか
What comes after Wednesday? — Thursday does.
What is the matter (with you)?（どうしたのですか）※ 決まり文句

⚠ 注意：What did you happen? という文は成り立たない。happen（起こる）は「〜を起こす」という使い方ができない動詞で、主語には出来事が来る。`,
      },
      {
        heading: 'Which ＋ 名詞 / How many ＋ 名詞 が主語のとき',
        body: `疑問詞に名詞がくっついたかたまりが主語になることもある。この場合も do / does / did は使わない。

■ Which ＋ 名詞 が主語
Which bus goes to the station? — The No. 5 bus does.
Which train stops at this station?
Which student won the contest?
うしろの名詞が単数なら動詞に s、複数なら s なし。
例）Which trains stop at this station?（trains は複数 → stop）

■ How many ＋ 名詞 が主語
How many students came to school today? — Twenty did.
How many people live in this town?
How many books are on the desk?
「何人が来たか」のように「〜が」にあたる部分をたずねているので do は不要である。

■ 目的語をたずねる形との比較
・How many books do you have?（あなたが持っている本の数＝目的語）→ do が要る
・How many books are on the desk?（机の上にある本の数＝主語）→ do が要らない
どちらも How many books で始まるので、うしろを見て判断する。

★ ポイント：判断のしかたはいつも同じ。「疑問詞（＋名詞）のすぐあとに動詞が来ているか」を見る。来ていれば主語、そうでなければ do / does / did が必要な形である。`,
      },
    ],
    trapExamples: [
      {
        question: '「昨夜ここで何が起きたのですか」を英語にしなさい。',
        wrongAnswer: 'What did happen here last night?',
        trapExplanation:
          '疑問文だから did を入れる、という手順が自動的に働いてしまう。What が主語であり、語順を入れかえる必要がないことに気づけない。',
        correctAnswer: 'What happened here last night?',
        correctExplanation:
          'この What は「何が」という主語なので、Something happened here. の something を What に置きかえるだけでよい。did を入れる場所はない。同じ形で What happened to him?（彼に何があったのですか）もよく使われる。',
      },
      {
        question: '「どの電車が大阪へ行きますか」を英語にしなさい。',
        wrongAnswer: 'Which train go to Osaka?',
        trapExplanation:
          'do / does を使わない形だと気づいたところで安心してしまい、動詞を原形のままにしてしまう。Which train が三人称単数の主語であることを見落としている。',
        correctAnswer: 'Which train goes to Osaka?',
        correctExplanation:
          'Which train は「一本の電車」で三人称単数なので、現在の文では動詞に s が付いて goes になる。do / does を使わないぶん、動詞そのものに三単現の s を付ける必要がある。複数形なら Which trains go to Osaka? と s なしになる。',
      },
    ],
  },

  {
    id: 'eigo_s218',
    subject: 'eigo',
    examType: 'chugaku',
    title: '疑問詞が主語③：答え方と、目的語をたずねる文との区別',
    description: 'Ken did. のような答え方を身につけ、主語か目的語かを見分ける',
    intro: 'Who made this cake? への答えは、I did. や My mother did. です。I made this cake. と全部言わなくてよく、did が made の代わりをしています。また Who do you like? との見分けも大切です。主語をたずねているのか、目的語をたずねているのかを判断します。',
    order: 718,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '主語をたずねられたら「主語 ＋ do / does / did.」で短く答える（Ken did.）。',
      'be動詞の文なら「主語 ＋ is / was.」で答える（Ken is.）。',
      '動詞をくり返す場合は目的語まで言う（Ken broke it. ／× Ken broke.）。',
      '疑問詞のすぐあとが動詞なら主語、do/does/did や be動詞なら目的語をたずねている。',
      '日本語の「だれが／だれを」を取りちがえると英文がまるごと変わる。',
    ],
    sections: [
      {
        heading: '短く答える形',
        body: `主語をたずねる疑問文には、「主語＋do / does / did.」という独特の答え方がある。

■ 一般動詞の文
Who broke this window? — Ken did.（ケンです）
Who wants some tea? — I do.
Who came to the party? — Tom and Mary did.
Who has a pen? — I do.（have なので do で受ける）

did / do / does は、くり返しをさけて動詞の代わりをしている。「ケンがやりました」という感じである。

■ be動詞の文
Who is absent today? — Ken is.
Who was there? — I was.
be動詞の文では be動詞をそのまま返す。

■ 助動詞の文
Who can swim fast? — Ken can.
Who will go with me? — I will.

■ 動詞をくり返して答える場合
Who broke this window? — Ken broke it.
このとき目的語の it を落とさない。× Ken broke. では文が完成しない（break は「〜を割る」という意味なので、割られたものが必要）。

⚠ 注意：Who came here? — Ken came. は目的語が要らない動詞（come）なのでこれで正しい。動詞によって目的語が要るかどうかがちがう。

★ ポイント：迷ったら「主語 ＋ did.」の形にしておけば、目的語の抜けを心配しなくてすむ。`,
      },
      {
        heading: '主語か目的語かの見分け方',
        body: `同じ Who で始まる文でも、主語をたずねているか目的語をたずねているかで意味も形もまったくちがう。ここは記述問題で差がつくところである。

■ 二つの文を比べる
①Who likes Ken?（だれがケンを好きなのですか）
　→ 好きな気持ちを持つ人をたずねる＝主語をたずねる
　→ do が要らない、動詞に s が付く
　→ 答え：Mary does.

②Who does Ken like?（ケンはだれが好きなのですか）
　→ 好かれる相手をたずねる＝目的語をたずねる
　→ does が要る、動詞は原形
　→ 答え：He likes Mary.

日本語では「だれが好き」と「だれを好き」の差だけなので、読み取りをまちがえやすい。

■ 見分けの手順
①疑問詞のすぐあとを見る
②動詞（broke, likes, happened）なら → 疑問詞が主語
③do / does / did / be動詞 / 助動詞 なら → 疑問詞は目的語などで、主語はそのうしろにある

例）Who saw you?（Who が主語。だれがあなたを見た？）
例）Who did you see?（you が主語。あなたはだれを見た？）

★ ポイント：日本語訳を作るときは「〜が」と「〜を」を必ず書き分ける。英作文では、まず平叙文（Ken likes Mary.）を作り、どちらをたずねたいのかを決めてから疑問詞に置きかえるとまちがえない。`,
      },
    ],
    trapExamples: [
      {
        question: '「だれがあなたを手伝ってくれたのですか」を英語にしなさい。',
        wrongAnswer: 'Who did you help?',
        trapExplanation:
          '「だれが」「あなたを」という日本語の順に英語を並べてしまい、Who did you 〜? という見慣れた形に落としこんでしまう。この形では「あなたがだれを手伝ったのか」という逆の意味になる。',
        correctAnswer: 'Who helped you?',
        correctExplanation:
          '手伝った人をたずねているので Who が主語であり、did は使わず語順も変えない。Ken helped you. の Ken を Who に置きかえて Who helped you? となる。Who did you help? は「あなたはだれを手伝いましたか」で、助けた側と助けられた側が入れかわってしまう。',
      },
      {
        question: 'Who broke the cup? に「ケンです」と、動詞を使って答えなさい。',
        wrongAnswer: 'Ken broke.',
        trapExplanation:
          'たずねられた文の動詞をそのまま写して答えを作ってしまう。もとの疑問文では the cup が文の中にあったので、答えでも要らない気がしてしまう。',
        correctAnswer: 'Ken did.（または Ken broke it.）',
        correctExplanation:
          'break は「〜を割る」という、目的語が必要な動詞である。動詞をくり返して答えるなら Ken broke it. と it を付ける。もっと簡単に Ken did. と did で受ける形が、主語をたずねる疑問文への標準的な答え方である。',
      },
    ],
  },

  // ─────────────── 8. 間接疑問文（s219〜s222） ───────────────
  {
    id: 'eigo_s219',
    subject: 'eigo',
    examType: 'chugaku',
    title: '間接疑問①：文の中に入った疑問文は語順が戻る',
    description: 'I know where he lives. のように、疑問詞のあとが主語＋動詞になる形を学ぶ',
    intro: 'Where does he live? が、I know のうしろに入ると I know where he lives. になります。does が消え、語順が主語＋動詞に戻るのです。文の中に入ったとたん、疑問文らしさをなくす。この「戻る」動きが間接疑問のかなめです。',
    order: 719,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      '疑問文が別の文の一部に入ると「疑問詞 ＋ 主語 ＋ 動詞」の平叙文の語順に戻る。',
      'do / does / did は消え、その印は動詞に返る（does he live → he lives）。',
      'I know / I don’t know / Tell me / I want to know などのうしろに置く。',
      '文全体が平叙文なら、文末はピリオド。',
      '疑問詞のあとに be動詞を先に出さない（× where is he → ○ where he is）。',
    ],
    sections: [
      {
        heading: '語順が戻るしくみ',
        body: `Where does he live? のような疑問文を、別の文の中に組みこむことがある。このとき語順が「ふつうの文（主語＋動詞）」に戻る。この形を間接疑問という。

■ 変化のしかた
Where does he live?（彼はどこに住んでいますか）
　↓ I know のうしろに入れる
I know where he lives.（私は彼がどこに住んでいるか知っています）

・does が消える
・主語 he と動詞 live の順が「he lives」に戻る
・does が預かっていた三単現の s が live に返って lives になる
・文全体は平叙文なので最後はピリオド

■ ほかの例
What is this? → I don't know what this is.
Who broke the window? → I know who broke the window.（Who が主語の文はもともと平叙文の語順なので変化しない）
When did she come? → Tell me when she came.（did が消えて came に戻る）
Where are you from? → Please tell me where you are from.

■ 前に置ける表現
I know 〜／I don't know 〜／Tell me 〜／Please tell me 〜／I want to know 〜／I'm not sure 〜／I remember 〜／Do you know 〜?

⚠ 注意：I know where does he live. は誤り。does を残したままにするのが最も多いまちがいである。`,
        figureId: 'lf_eigoext06_219',
      },
      {
        heading: '手順にして覚える',
        body: `間接疑問を作るときは、次の三段階を順に行うと確実である。

■ 三つの手順
①もとの疑問文を書く：What is this?
②do / does / did を消す（あれば動詞に印を返す）
③主語→動詞の順に並べかえる：what this is

例）What does he want?
　①What does he want?
　②does を消して want に s を返す → want → wants
　③he wants → I know what he wants.

例）Where did you buy it?
　①Where did you buy it?
　②did を消して buy を過去形に → bought
　③you bought it → Tell me where you bought it.

■ be動詞のときも同じ
Who is that man? → I don't know who that man is.
be動詞は主語のうしろに戻る。× who is that man とはしない。

■ 疑問詞が主語の場合は変化しない
Who broke it? / What happened? のように疑問詞が主語の文は、もともと「主語＋動詞」の語順なので、そのまま入れればよい。
例）I don't know who broke it.
例）Tell me what happened.

★ ポイント：「間接疑問では、疑問文の顔をやめてふつうの文に戻る」と覚える。疑問詞だけが残り、あとはふつうの文になる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は彼がどこに住んでいるか知っています」を英語にしなさい。',
        wrongAnswer: 'I know where does he live.',
        trapExplanation:
          'Where does he live? という疑問文をそのまま I know のうしろにくっつけてしまう。疑問詞が入っているので疑問文の形のままでよい、と思いこむのが原因。',
        correctAnswer: 'I know where he lives.',
        correctExplanation:
          '疑問文が文の一部になると、語順は「疑問詞＋主語＋動詞」に戻る。does は消え、預かっていた三単現の s が動詞に返って lives になる。文全体は「私は知っています」という平叙文なので、最後はピリオドである。',
      },
      {
        question: '「これが何なのか教えてください」を英語にしなさい。',
        wrongAnswer: 'Please tell me what is this.',
        trapExplanation:
          'What is this? という覚えている形をそのまま使ってしまう。be動詞の文では do / does が出てこないため、語順が変わることに気づきにくい。',
        correctAnswer: 'Please tell me what this is.',
        correctExplanation:
          'be動詞の文でも、間接疑問では「疑問詞＋主語＋動詞」の語順に戻る。this（主語）→ is（動詞）の順になり、what this is となる。同じく I don’t know who he is. / Do you know where the station is? のように、be動詞は必ず主語のうしろへ回る。',
      },
    ],
  },

  {
    id: 'eigo_s220',
    subject: 'eigo',
    examType: 'chugaku',
    title: '間接疑問②：Do you know 〜? の中に入れる',
    description: '全体が疑問文になる場合の形と、答え方をそろえる',
    intro: 'Do you know where he lives? — 全体は疑問文なのに、where のあとは he lives とふつうの語順のままです。前半だけが疑問文の形をとっています。答えるときも Yes, I do. と、前半に合わせて答えます。二重に見える形を、順序立ててほどいていきます。',
    order: 720,
    studyPeriod: '小6前半',
    targetLevel: 'moshi',
    keyPoints: [
      'Do you know 〜? のうしろに入れても、中の語順は「疑問詞＋主語＋動詞」のまま。',
      '文全体が疑問文なので、文末はクエスチョンマーク。',
      'Do you know 〜? への答えは Yes / No で始めてよい。',
      'Do you think 〜? のときだけ、疑問詞が文の先頭に出る（What do you think this is?）。',
      '道をたずねるときの Do you know where 〜 is? は会話文の頻出表現。',
    ],
    sections: [
      {
        heading: '全体が疑問文になる形',
        body: `間接疑問を Do you know 〜? のような疑問文の中に入れることもできる。このとき、中の語順は平叙文のままで、文全体だけが疑問文になる。

■ 基本の形
Do you know where he lives?（彼がどこに住んでいるか知っていますか）
Do you know what this is?
Do you know when the concert starts?
Do you know who that girl is?

中の部分（where he lives）は主語＋動詞の順のままである。外側の Do you know だけが疑問文の形になっている。文末は ? になる。

■ ていねいなたずね方
Could you tell me where the station is?（駅がどこか教えていただけますか）
Do you know how I can get to the museum?
道をたずねるときの決まった言い方で、会話文の問題で頻出である。Where is the station? と直接聞くより、ずっとていねいに聞こえる。

■ 答え方
Do you know 〜? は Yes / No でたずねているので、Yes / No で答えてよい。
Do you know where he lives? — Yes, I do. He lives near the station.
　　　　　　　　　　　　　 — No, I don't. Sorry.
「知っているかどうか」を答えてから、知っていれば内容を続ける。

⚠ 注意：Do you know where does he live? は誤り。外側が疑問文になっても、中の語順は変わらない。`,
      },
      {
        heading: 'Do you think 〜? だけは例外',
        body: `Do you know 〜? は Yes / No で答えられるが、Do you think 〜?（〜だと思いますか）は「あなたの考え」をたずねるので Yes / No では答えられない。そのため、疑問詞が文の先頭に出るという特別な形になる。

■ know の場合（疑問詞は中に残る）
Do you know what this is? — Yes, I do. It's a camera.

■ think の場合（疑問詞が先頭に出る）
What do you think this is? — I think it's a camera.
× Do you think what this is? とは言わない。

■ think と同じ仲間の動詞
think / believe / say / guess / suppose など「〜と思う・言う」を表す動詞では、疑問詞が先頭に出る。
Who do you think will win the game?（だれが勝つと思いますか）
Where do you think he went?（彼はどこへ行ったと思いますか）
When do you think she will come?

答えはいつも I think 〜. の形になる。
Who do you think will win? — I think Ken will.

★ ポイント：「know なら中に、think なら先頭に」と対で覚える。上位校の入試で問われる差のつく項目である。

■ 中の語順は変わらない
疑問詞が先頭に出ても、そのうしろは平叙文の語順のまま。
○ Where do you think he went?（he went の順）
× Where do you think did he go?`,
      },
    ],
    trapExamples: [
      {
        question: '「駅がどこにあるか知っていますか」を英語にしなさい。',
        wrongAnswer: 'Do you know where is the station?',
        trapExplanation:
          'Where is the station? という覚えている疑問文をそのまま Do you know のうしろにつなげてしまう。外側が疑問文なので、中も疑問文の形でよいと感じてしまう。',
        correctAnswer: 'Do you know where the station is?',
        correctExplanation:
          '中に入った疑問文は「疑問詞＋主語＋動詞」の語順に戻るので、the station（主語）→ is（動詞）の順になる。疑問文の形をとるのは外側の Do you know だけである。ていねいに言うなら Could you tell me where the station is? となる。',
      },
      {
        question: '「あなたはこれが何だと思いますか」を英語にしなさい。',
        wrongAnswer: 'Do you think what this is?',
        trapExplanation:
          'Do you know what this is? の形を覚えているため、know を think に置きかえただけで作ってしまう。think の文が Yes / No で答えられないことに気づいていない。',
        correctAnswer: 'What do you think this is?',
        correctExplanation:
          'think は「〜だと思う」なので、答えは Yes / No ではなく I think it’s a camera. のように中身になる。そのため疑問詞を文の先頭に出す。うしろは this is と平叙文の語順のまま。know は Yes / No で答えられるので疑問詞は中に残る、という対比で覚える。',
      },
    ],
  },

  {
    id: 'eigo_s221',
    subject: 'eigo',
    examType: 'chugaku',
    title: '間接疑問③：if / whether（〜かどうか）',
    description: '疑問詞のない疑問文を文の中に入れる形と、条件の if との区別を学ぶ',
    intro: '「彼が来るかどうか知りません」は I don\'t know if he will come. です。ここの if は「もし」ではなく「〜かどうか」。同じ if が二つの意味を持つので、読みまちがえると内容が変わってしまいます。whether との使い分けもあわせて確かめます。',
    order: 721,
    studyPeriod: '小6後半・直前',
    targetLevel: 'moshi',
    keyPoints: [
      '疑問詞のない疑問文を文に入れるときは if / whether（〜かどうか）を使う。',
      'if / whether のうしろも「主語＋動詞」の平叙文の語順。',
      'whether 〜 or not の形もある（whether he will come or not）。',
      '条件の if（もし〜なら）とは意味がちがう。文の意味で見分ける。',
      '条件の if の中では、未来のことでも現在形で表す（If it rains tomorrow, 〜）。',
    ],
    sections: [
      {
        heading: '「〜かどうか」の言い方',
        body: `Is he a teacher? / Does he come? のように疑問詞のない疑問文を文の中に入れるときは、疑問詞のかわりに if または whether を使う。意味は「〜かどうか」である。

■ 作り方
Is he a student?（彼は学生ですか）
　→ I don't know if he is a student.（彼が学生かどうか知りません）

Will he come to the party?
　→ I'm not sure if he will come to the party.

Did she like it?
　→ I want to know if she liked it.（did が消えて過去形に戻る）

■ 語順は平叙文のまま
if / whether のうしろも「主語＋動詞」の語順になる。
○ I don't know if he will come.
× I don't know if will he come.

■ whether の使い方
whether は if よりあらたまった語で、意味は同じ。
I don't know whether he is right.
whether 〜 or not（〜かどうか）の形もよく使う。
I don't know whether he will come or not.
※ if 〜 or not も使えるが、whether のほうが自然である。

■ 前に置ける表現
I don't know if 〜／I'm not sure if 〜／Do you know if 〜?／I wonder if 〜（〜かしら）／Please tell me if 〜

★ ポイント：疑問詞があれば疑問詞をそのまま使い、なければ if / whether を使う。この一点で使い分けられる。`,
      },
      {
        heading: '条件の if との区別',
        body: `if には「もし〜なら」という条件の意味もある。同じ語なので、意味で見分ける必要がある。

■ 二つの if
①〜かどうか（間接疑問）
I don't know if he will come.（彼が来るかどうかわからない）
→ if 以下が「知らない」の中身になっている

②もし〜なら（条件）
If he comes, I will be happy.（もし彼が来たら、私はうれしい）
→ if 以下が条件を表し、主となる文が別にある

■ 見分け方
・know / be sure / wonder / ask のうしろにあれば「〜かどうか」
・文の前半か後半で、条件を表していれば「もし〜なら」
・「〜かどうか」の if は whether に置きかえられるが、条件の if は置きかえられない。これがいちばん確実な見分け方である。

■ 時制の大きなちがい
条件の if の中では、未来のことでも will を使わず現在形で表す。
○ If it rains tomorrow, I will stay home.（もし明日雨なら）
× If it will rain tomorrow, 〜

一方、「〜かどうか」の if の中では will をそのまま使う。
○ I don't know if it will rain tomorrow.（明日雨が降るかどうか）

同じ if でも中の時制がちがうので、意味を取りちがえると必ずまちがえる。

⚠ 注意：when（〜するとき）も条件と同じ仲間で、中では未来のことを現在形で表す（I will call you when he comes.）。ただし「いつ〜か」という間接疑問の when では will を使う（I don't know when he will come.）。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼が来るかどうかわかりません」を英語にしなさい。',
        wrongAnswer: `I don't know if will he come.`,
        trapExplanation:
          'if のうしろに疑問文の形をそのまま入れてしまう。「〜かどうか」というたずねる意味があるため、疑問文の語順にしたくなるのが原因。',
        correctAnswer: `I don't know if he will come.`,
        correctExplanation:
          'if / whether のうしろも、疑問詞のある間接疑問と同じで「主語＋動詞」の平叙文の語順になる。he（主語）→ will come（動詞）の順に並べる。疑問文の顔をやめる、という点は疑問詞の間接疑問とまったく同じである。',
      },
      {
        question: '「もし明日雨なら、私は家にいます」を英語にしなさい。',
        wrongAnswer: 'If it will rain tomorrow, I will stay home.',
        trapExplanation:
          'tomorrow があるので未来だと考え、両方の文に will を入れてしまう。条件を表す if の中では未来のことを現在形で表す、という決まりを知らない。',
        correctAnswer: 'If it rains tomorrow, I will stay home.',
        correctExplanation:
          '「もし〜なら」という条件の if の中では、未来のことでも現在形で表す（it rains）。主となる文のほうには will を使う。一方、「〜かどうか」の if では I don’t know if it will rain tomorrow. のように will を使ってよい。二つの if を意味で区別すること。',
      },
    ],
  },

  {
    id: 'eigo_s222',
    subject: 'eigo',
    examType: 'chugaku',
    title: '間接疑問④：時制のそろえ方と総まとめ',
    description: '主となる文が過去のとき、中の動詞も過去にそろえる決まりを身につける',
    intro: 'I know where he lives. を過去にすると I knew where he lived. になります。うしろの lives まで lived に変わるのです。日本語では「住んでいると知っていた」と、後半をそのままにできます。英語は文全体で時をそろえる。この差が書きかえ問題で問われます。',
    order: 722,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      '主となる文が過去なら、中に入った文の動詞も過去にそろえる（時制の一致）。',
      'will → would、can → could、is → was、live → lived と一段階過去にする。',
      '語順はどんな場合でも「疑問詞（if / whether）＋主語＋動詞」。',
      '疑問詞が主語の文（who broke it）はもともとこの語順なので変わらない。',
      '書き終えたら「do/does/did が残っていないか」「語順が主語→動詞か」を確かめる。',
    ],
    sections: [
      {
        heading: '時制をそろえる',
        body: `主となる文が過去形のとき、中に入った文の動詞も過去にそろえる決まりがある。これを時制の一致という。

■ 例で確かめる
現在：I know where he lives.
過去：I knew where he lived.（lives → lived）

現在：I don't know what he wants.
過去：I didn't know what he wanted.

現在：She asks me if I can swim.
過去：She asked me if I could swim.（can → could）

現在：I think he will come.
過去：I thought he would come.（will → would）

■ 一段階うしろへずらす
is / are → was / were
live / lives → lived
can → could　　will → would　　may → might
このように、中の動詞や助動詞を一段階過去へずらす。

■ 例外（変えなくてよい場合）
・いつでも変わらない事実：The teacher said that the earth goes around the sun.
・ことわざや現在も続く習慣
中学受験では、まず「主となる文が過去なら中も過去」の原則を身につければよい。

⚠ 注意：日本語では「彼がどこに住んでいるか知らなかった」と現在のように言うので、英語でも lives のままにしてしまいやすい。英語では knew に合わせて lived にする。`,
      },
      {
        heading: '間接疑問の総チェック',
        body: `ここまでの内容を、答案を見直すときのチェックリストにまとめる。

■ ①do / does / did が残っていないか
× I know where does he live.
○ I know where he lives.
中に入った文には do / does / did を残さない。消したぶん、動詞に三単現の s や過去形を返す。

■ ②語順が「主語→動詞」になっているか
× Tell me what is this.
○ Tell me what this is.
be動詞や助動詞を主語より前に出さない。

■ ③疑問詞がないときは if / whether を使ったか
× I don't know he will come.（接続詞が抜けている）
○ I don't know if he will come.

■ ④文末の記号は正しいか
I know where he lives.（全体は平叙文 → ピリオド）
Do you know where he lives?（全体は疑問文 → クエスチョンマーク）

■ ⑤時制はそろっているか
I didn't know what he wanted.（knew / didn't know に合わせて過去）

■ ⑥疑問詞が主語の文はそのまま
I don't know who broke the window.（who broke はもとから主語＋動詞）

★ ポイント：この六つを順に確かめる習慣をつけると、間接疑問の問題はほぼ落とさなくなる。とくに①と②は配点の高い英作文で必ず見られる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は彼女がそれをどこで買ったのかをたずねました」を英語にしなさい。',
        wrongAnswer: 'I asked her where did she buy it.',
        trapExplanation:
          'Where did she buy it? という疑問文を、そのまま asked のうしろに置いてしまう。間接疑問では語順が戻ることを、疑問詞のある文では忘れやすい。',
        correctAnswer: 'I asked her where she bought it.',
        correctExplanation:
          'did を消し、預かっていた過去の印を動詞に返して bought にする。語順は she bought it と主語→動詞になる。ask のうしろは「たずねた相手（her）＋たずねた内容（where she bought it）」の順に並べる。',
      },
      {
        question: '「私は彼が何をほしがっているのか知りませんでした」を英語にしなさい。',
        wrongAnswer: `I didn't know what he wants.`,
        trapExplanation:
          '日本語では「ほしがっている」と現在のように言うため、中の動詞を現在形のままにしてしまう。主となる文が過去であることに引きずられていない。',
        correctAnswer: `I didn't know what he wanted.`,
        correctExplanation:
          '主となる文が didn’t know と過去なので、中の動詞も過去形の wanted にそろえる（時制の一致）。同じように I thought he would come.（will → would）、She said she was busy.（is → was）と一段階過去へずらす。',
      },
    ],
  },

  // ─────────────── 9. 否定文と部分否定・全体否定（s223〜s225） ───────────────
  {
    id: 'eigo_s223',
    subject: 'eigo',
    examType: 'chugaku',
    title: '否定文①：not を置く場所',
    description: 'be動詞・一般動詞・助動詞の三系統で、否定文の作り方をそろえる',
    intro: '「私はテニスをしません」は I don\'t play tennis.、「私は先生ではありません」は I\'m not a teacher. です。同じ「〜ない」なのに、片方は don\'t、もう片方は not だけ。not をどこに置くかは、その文にどんな動詞があるかで決まります。三つの型に分けて整理します。',
    order: 723,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'be動詞の文は be動詞のうしろに not を置く（I am not / He is not）。',
      '一般動詞の文は do not / does not / did not を主語のうしろに置き、動詞は原形に戻す。',
      '助動詞の文は助動詞のうしろに not を置く（cannot / will not / must not）。',
      '短縮形：isn’t / aren’t / don’t / doesn’t / didn’t / can’t / won’t / mustn’t。',
      'am not に短縮形はない。I’m not の形を使う。',
    ],
    sections: [
      {
        heading: '三つの系統で覚える',
        body: `否定文の作り方は、疑問文とちょうど対になっている。疑問文が「前に出す」なら、否定文は「うしろに not を置く」である。

■ ①be動詞の文
be動詞のすぐうしろに not を置く。
I am a student. → I am not a student.
He is busy. → He is not busy.（He isn't busy.）
They were at home. → They were not at home.（weren't）

■ ②一般動詞の文
主語のうしろに do not / does not / did not を置き、動詞は原形に戻す。
I play tennis. → I do not play tennis.（don't）
He plays tennis. → He does not play tennis.（doesn't play：s が消える）
She went there. → She did not go there.（didn't go：原形に戻る）

■ ③助動詞の文
助動詞のうしろに not を置く。
He can swim. → He cannot swim.（can't）
It will rain. → It will not rain.（won't）
You must go. → You must not go.（mustn't）
※ can not は一語で cannot と書くのがふつう。will not の短縮形は won't という特別な形。

★ ポイント：not の位置は、頻度の副詞（always など）の位置とまったく同じ「be動詞のうしろ・一般動詞の前」である。片方を思い出せばもう片方も思い出せる。`,
        figureId: 'lf_eigoext06_223',
      },
      {
        heading: '短縮形と、まちがえやすい形',
        body: `■ 短縮形の一覧
is not → isn't　　are not → aren't　　was not → wasn't　　were not → weren't
do not → don't　　does not → doesn't　　did not → didn't
cannot → can't　　will not → won't　　must not → mustn't　　should not → shouldn't
have not → haven't　　has not → hasn't

■ am not には短縮形がない
× amn't という形は使わない。
○ I am not / I'm not
「私は〜ではありません」は I'm not 〜. と、am ではなく I を縮める。

■ 動詞の形に注意
doesn't / didn't のうしろは必ず原形。
× He doesn't likes natto. → ○ He doesn't like natto.
× She didn't went there. → ○ She didn't go there.
疑問文の Does he play 〜? と同じ理屈で、not のかたまりが三単現や過去の印を引き受けている。

■ be動詞と一般動詞を混ぜない
× I am not have a pen. → ○ I don't have a pen.
「持っていません」は一般動詞 have の否定なので do not を使う。be動詞を足してはいけない。

■ some と any
否定文では some を any に変えるのがふつう。
I have some money. → I don't have any money.
疑問文でも any を使う（Do you have any questions?）。ただし人にすすめるときは Would you like some tea? のように some のままにする。`,
      },
    ],
    trapExamples: [
      {
        question: 'He likes natto. を否定文に書きかえなさい。',
        wrongAnswer: `He doesn't likes natto.`,
        trapExplanation:
          'もとの文の likes をそのまま残してしまう。「主語が he だから s が要る」という規則が強く働き、doesn’t がすでに三単現の印を持っていることに気づけない。',
        correctAnswer: `He doesn't like natto.`,
        correctExplanation:
          'doesn’t（does not）が「現在で主語は三人称単数」という情報を引き受けるので、動詞は原形の like に戻る。疑問文の Does he like natto? とまったく同じ理屈である。didn’t のうしろも同じく原形になる。',
      },
      {
        question: '「私はペンを持っていません」を英語にしなさい。',
        wrongAnswer: 'I am not have a pen.',
        trapExplanation:
          '「〜ではありません」という日本語の否定を be動詞で表そうとしてしまう。この文の動詞が一般動詞 have であることを意識していない。',
        correctAnswer: `I don't have a pen.`,
        correctExplanation:
          'have は「持っている」という一般動詞なので、否定文は do not（don’t）を使う。be動詞の not を使えるのは I am not a student. のように、うしろが名詞や形容詞で一般動詞がないときだけである。動詞の種類を先に見てから否定の形を決める。',
      },
    ],
  },

  {
    id: 'eigo_s224',
    subject: 'eigo',
    examType: 'chugaku',
    title: '否定文②：not を使わない否定（never / no / few / little）',
    description: '一語で否定を表す語を覚え、二重否定にならないように使う',
    intro: 'I don\'t have no money. と書くと、英語では「お金がないわけではない」という意味に受け取られます。否定は一つの文に一つが原則だからです。not を使わず一語で「〜ない」を表す never・no・few・little を覚えれば、こうした事故は起きません。',
    order: 724,
    studyPeriod: '小6前半',
    targetLevel: 'oyo',
    keyPoints: [
      'never（一度も〜ない）、no ＋ 名詞（一つも〜ない）はそれだけで否定。',
      'nothing / nobody / no one もそれ自体が否定なので not と重ねない。',
      'not 〜 any ＝ no 〜 で言いかえられる。',
      'few（数）／little（量）は「ほとんど〜ない」。a few / a little は「少しある」。',
      'hardly / seldom も「ほとんど〜ない」という否定の意味を持つ。',
    ],
    sections: [
      {
        heading: '一語で否定を表す語',
        body: `否定は not だけで表すとはかぎらない。一語で否定の意味を持つ語がいくつもあり、そのときは not を使わない。

■ never（一度も〜ない）
I never eat natto.（私は納豆をぜったいに食べない）
He has never been to Kyoto.（現在完了）
位置は not と同じで、一般動詞の前・be動詞のうしろ。

■ no ＋ 名詞（一つも〜ない）
I have no money.（お金をまったく持っていない）
There are no students in the room.
＝ I don't have any money. / There aren't any students in the room.
no を使う言い方のほうが、否定の気持ちが強い。

■ nothing / nobody / no one
I have nothing to do.（することが何もない）
Nobody came to the party.（だれもパーティーに来なかった）
Nothing is impossible.
これらが主語のときは三人称単数として扱う（Nobody knows the answer.）。

■ 二重否定にしない
これらの語はそれ自体が否定なので、don't などと重ねてはいけない。
× I don't have no money. → ○ I don't have any money. / I have no money.
× I don't know nothing. → ○ I don't know anything. / I know nothing.

⚠ 注意：日本語の「何も知らない」には否定が二つあるように見えるので、英語でも重ねてしまいやすい。英語では否定は一つだけ。`,
      },
      {
        heading: 'few / little と、そのほかの否定語',
        body: `few と little は、a が付くかどうかで意味が正反対になる。入試で必ず問われるところである。

■ few（数えられる名詞に）
few friends（友達がほとんどいない）＝否定的
a few friends（友達が少しいる）＝肯定的
例）He has few friends.（彼にはほとんど友達がいない）
例）He has a few friends.（彼には友達が少しいる）

■ little（数えられない名詞に）
little money（お金がほとんどない）＝否定的
a little money（お金が少しある）＝肯定的
例）I have little time.（時間がほとんどない）
例）I have a little time.（少し時間がある）

■ そのほかの否定を表す語
hardly / scarcely（ほとんど〜ない）：I can hardly hear you.（ほとんど聞こえません）
seldom / rarely（めったに〜ない）：He seldom watches TV.
too 〜 to …（〜すぎて…できない）：This box is too heavy to carry.

■ 意味の強さの順
never（0％）＜ hardly / seldom（ほとんど・めったに）＜ sometimes（ときどき）

★ ポイント：a が付けば「ある」、付かなければ「ない」。a few / a little の a は「少しはある」という気持ちを表していると考えると覚えやすい。

⚠ 注意：Only a few students came. のように only が付くと、a few でも「たった数人しか」という否定的な感じになる。`,
      },
    ],
    trapExamples: [
      {
        question: '「私はお金をまったく持っていません」を英語にしなさい。',
        wrongAnswer: `I don't have no money.`,
        trapExplanation:
          '「まったく〜ない」という強い否定を表そうとして、don’t と no を両方使ってしまう。日本語の「持っていない」と「まったくない」を、どちらも英語の否定語に置きかえた結果である。',
        correctAnswer: `I don't have any money.（または I have no money.）`,
        correctExplanation:
          '英語では一つの文に否定を二つ入れない。don’t を使うなら名詞の前は any、no を使うなら don’t は使わない、のどちらかにする。意味はほぼ同じだが、I have no money. のほうが否定の気持ちが強く伝わる。',
      },
      {
        question: 'He has few friends. の意味として正しいものを答えなさい。',
        wrongAnswer: '彼には少し友達がいます。',
        trapExplanation:
          'few を「少し」と覚えているため、a の有無を見ずに肯定の意味で訳してしまう。a few（少しいる）と few（ほとんどいない）の差は a 一文字だけなので見落としやすい。',
        correctAnswer: '彼にはほとんど友達がいません。',
        correctExplanation:
          'a の付かない few / little は「ほとんど〜ない」という否定の意味になる。a few / a little なら「少しはある」という肯定の意味である。数えられる名詞には few / a few、数えられない名詞には little / a little を使う点も合わせて覚える。',
      },
    ],
  },

  {
    id: 'eigo_s225',
    subject: 'eigo',
    examType: 'chugaku',
    title: '否定文③：部分否定と全体否定',
    description: 'not all / not always と、no / none / neither の意味のちがいを読み分ける',
    intro: 'I don\'t know all of them. は「全員は知らない」で、何人かは知っています。I know none of them. なら「一人も知らない」。日本語の「みんな知らない」はどちらにも読めてしまう、あいまいな言い方です。英語は形ではっきり区別します。',
    order: 725,
    studyPeriod: '小6後半・直前',
    targetLevel: 'nyushi',
    keyPoints: [
      'not ＋ all / every / always / both は部分否定「すべてが〜とはかぎらない」。',
      'no / none / never / neither は全体否定「まったく〜ない」。',
      'Not all birds can fly. は「飛べない鳥もいる」という意味。',
      '「二人とも知らない」は not both ではなく neither / not either を使う。',
      '日本語訳では「〜とはかぎらない」「〜わけではない」と書くと部分否定が伝わる。',
    ],
    sections: [
      {
        heading: '部分否定（一部だけを否定する）',
        body: `all（すべて）・every（どの〜も）・always（いつも）・both（両方）のように「全部」を表す語が not といっしょに使われると、「全部が〜というわけではない」という一部だけの否定になる。これを部分否定という。

■ 代表的な形
Not all the students came to school.（生徒全員が学校に来たわけではない＝来た生徒もいる）
I don't know all of them.（彼ら全員を知っているわけではない）
He is not always kind.（彼はいつも親切とはかぎらない）
Not every student likes math.（すべての生徒が数学を好きなわけではない）
I don't like both of them.（両方とも好きというわけではない）

■ 訳し方のこつ
「すべてが〜というわけではない」「いつも〜とはかぎらない」と、「〜わけではない」「〜とはかぎらない」を必ず入れる。これを入れないと全体否定と区別がつかない。

■ 図で考える
Not all the students came. は、来た生徒と来なかった生徒が両方いる状態を表す。全員が来なかったのではない。

⚠ 注意：日本語の「全部来なかった」はふつう全体否定の意味に取られる。部分否定を訳すときは「全員が来たわけではない」と書くこと。`,
        figureId: 'lf_eigoext06_225',
      },
      {
        heading: '全体否定（まるごと否定する）',
        body: `いっぽう、まるごと否定する言い方は別の語を使う。

■ 全体否定の形
None of the students came to school.（生徒はだれも来なかった＝0人）
No student came to school.
Nobody came.
I know neither of them.（二人とも知らない）
He is never kind.（彼はけっして親切ではない）
I don't know any of them.（彼らのだれも知らない）

■ 部分否定と全体否定の対
・not all ↔ none / no
・not always ↔ never
・not both ↔ neither
左が部分否定、右が全体否定である。

■ both と either / neither
both（両方とも）は not といっしょに使うと部分否定になるので、「二つとも〜ない」と言いたいときは either / neither を使う。
○ I don't like either of them.（どちらも好きではない）
○ I like neither of them.（同じ意味）
△ I don't like both of them.（両方好きというわけではない＝部分否定）

■ 読解でのポイント
入試の長文では、not all / not always の部分否定が内容一致問題のかぎになることが多い。「すべてが〜ではない」を「まったく〜ない」と読みちがえると、選択肢の正誤が逆になる。

★ ポイント：not のうしろに all / every / always / both があったら、必ず部分否定を疑う。`,
      },
    ],
    trapExamples: [
      {
        question: 'Not all the students came to school today. の意味として正しいものを答えなさい。',
        wrongAnswer: 'きょうは生徒がだれも学校に来なかった。',
        trapExplanation:
          'not（〜ない）と all（すべて）をそのままつなげて「すべて〜ない」と読み、全員が来なかったと解釈してしまう。日本語の「全部来なかった」という言い方に引きずられるのが原因。',
        correctAnswer: 'きょうは生徒全員が学校に来たわけではない（来なかった生徒もいる）。',
        correctExplanation:
          'not ＋ all は部分否定で、「全部が〜というわけではない」という意味になる。来た生徒もいれば来なかった生徒もいる状態である。全員が来なかったと言いたいときは None of the students came. や No student came. と表す。',
      },
      {
        question: '「私は彼ら二人とも知りません」を英語にしなさい。',
        wrongAnswer: `I don't know both of them.`,
        trapExplanation:
          '「二人とも」を both と置きかえ、「知りません」を don’t know と置きかえて、そのままつなげてしまう。not と both が組み合わさると部分否定になることを知らない。',
        correctAnswer: `I don't know either of them.（または I know neither of them.）`,
        correctExplanation:
          'not ＋ both は「両方とも〜というわけではない」という部分否定になり、片方は知っている意味になってしまう。二つとも否定するときは not 〜 either か neither を使う。not all ↔ none、not always ↔ never と同じ対の関係である。',
      },
    ],
  },
];
