import type { Lesson } from './lesson-types';

// 中学受験 英語「アルファベット・フォニックス・発音とつづり」拡張ユニット
// （40セッション：eigo_s001〜eigo_s040）
// order は 501〜540。
// 構成：アルファベット(4)／母音字・子音字と短母音(6)／長母音・マジックE・二重母音(6)／
//       子音連結・二重子音字(6)／サイレントレターとつづりの例外(4)／
//       アクセント・リズム・語尾の -s/-ed(5)／ローマ字と英語つづり(4)／つづりミスと書き取り(5)
// 図解は「音の位置関係」「分類の割合」「数の比較」など、
// 図にして本当に理解が進む箇所にだけ付けてある（lesson-figs-eigo-ext01.ts）。
export const eigoExt01Lessons: Lesson[] = [
  // ───────────────────── 1. アルファベット（s001〜s004） ─────────────────────
  {
    id: 'eigo_s001',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'アルファベット①：大文字と小文字',
    description: '26文字の大文字・小文字の対応と、大文字を使う場所のきまりを身につける',
    order: 501,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'アルファベットは全部で26文字。1文字につき大文字と小文字が1つずつある。',
      '大文字を使うのは「文の最初」「人名・地名・国名」「曜日・月の名前」「I（私は）」。',
      '小文字には「大文字を小さくしただけの字」と「形がまったく変わる字」の2種類がある。',
      'b と d、p と q は形が左右逆。丸がどちら側につくかで区別する。',
      '英語は単語と単語のあいだを1文字分あけて書く（日本語のように続けて書かない）。',
    ],
    sections: [
      {
        heading: '26文字と大文字・小文字',
        body: `英語はアルファベット26文字だけで書かれる。日本語のひらがな・カタカナ・漢字にくらべると覚える文字数はとても少ないが、1文字につき大文字（capital letter）と小文字（small letter）の2つの形があるので、対応をしっかり覚える必要がある。

■ 大文字と小文字の関係は2種類
①大きさがちがうだけで形は同じ字
　C-c　O-o　S-s　U-u　V-v　W-w　X-x　Z-z　P-p　K-k　J-j
②形そのものが変わる字
　A-a　B-b　D-d　E-e　G-g　H-h　I-i　L-l　M-m　N-n　Q-q　R-r　T-t　Y-y

②のグループがまちがえやすい。とくに R-r、Q-q、G-g は、大文字だけ書けて小文字が書けない子が多い。

■ 形がまぎらわしい組み合わせ
b と d ／ p と q ／ n と h ／ u と v ／ i と j
b は「棒が左、丸が右」、d は「丸が左、棒が右」。声に出しながら書いて手で覚えるとよい。

★ ポイント：中学入試の英語では、答案の文字が読み取れないだけで不正解にされる。うまい字より「はっきり区別できる字」を書くことが得点につながる。`,
        figureId: 'lf_eigoext01_001',
      },
      {
        heading: '大文字を使う場所のきまり',
        body: `日本語には大文字・小文字の区別がないので、日本人がいちばんまちがえるのがここである。次の5つは必ず大文字で書き始める。

①文の最初の1文字
　例）This is my school.（学校の s は文の途中なので小文字）
②人の名前・地名・国名・言語名
　例）Ken／Tokyo／Japan／English
③曜日の名前
　例）Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
④月の名前
　例）January, February, March, April, May, June, July, August, September, October, November, December
⑤「私は」を表す I
　例）I am ten years old.（文の途中でも必ず大文字の I）

■ 逆に大文字にしないもの
教科名の一部（math, science）、季節（spring, summer, fall, winter）、方角（east, west）は小文字で書く。ただし English（英語）は「イギリスの」という国名から来た語なので、教科名でも大文字である。

⚠ 注意：日本語では「日曜日」も「私」もふつうの字なので、つい sunday、i と書いてしまう。書いたあとに「文の頭・名前・曜日・月・I」の5つを見直す習慣をつける。`,
      },
    ],
    trapExamples: [
      {
        question: '「わたしは日曜日にピアノをひきます。」を英語で書きなさい。（I play the piano on ~ を使う）',
        wrongAnswer: 'i play the piano on sunday.',
        trapExplanation:
          '日本語には大文字・小文字の区別がないため、文の最初も、曜日も、「私」も、すべて同じ調子で小文字のまま書いてしまう。とくに I は1文字なので小さく書きたくなる。',
        correctAnswer: 'I play the piano on Sunday.',
        correctExplanation:
          '文の最初の文字は大文字、「私は」を表す I はどこにあっても大文字、曜日名 Sunday も大文字で書き始める。書き終えたら「文頭・I・曜日・月・名前」の5点を必ず見直す。',
      },
      {
        question: '「ベッド」を表す英単語 bed を4本線に書きなさい。',
        wrongAnswer: 'ded',
        trapExplanation:
          'b と d はどちらも「まっすぐな棒＋丸」でできているため、丸が左右どちらにつくのかがあやふやになる。頭の中で音は正しく「ベッド」と言えていても、手が逆の形を書いてしまう。',
        correctAnswer: 'bed',
        correctExplanation:
          'b は棒を先に下ろしてから右下に丸をつける字、d は丸を先に書いてから右側に棒を下ろす字である。両手でこぶしを作って親指を立てると、左手が b、右手が d の形になる。この方法で毎回確かめるとまちがえない。',
      },
    ],
  },

  {
    id: 'eigo_s002',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'アルファベット②：4本線への正しい書き方',
    description: '小文字の高さの3グループと、4本線のどこに書くかのきまりを覚える',
    order: 502,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '4本線は上から第1線・第2線・第3線・第4線。第3線が「基準の線（ベースライン）」で、ほとんどの字はこの線の上に立つ。',
      '小文字の高さは3グループ。上に出る字7つ（b d f h k l t）、下に出る字5つ（g j p q y）、まん中だけの字14。',
      '大文字はすべて第1線から第3線までいっぱいに書く（下にははみ出さない）。',
      't は上に出るが、l や b よりやや低く書く。',
      'i と j の点、t の横棒は、字の本体を書き終えてから最後に付ける。',
    ],
    sections: [
      {
        heading: '4本線の使い方',
        body: `英語のノートは4本線になっている。この4本の線には役割があり、どの高さに書くかで文字の形が決まる。

■ 線の呼び方
上から第1線・第2線・第3線・第4線と呼ぶ。いちばん大事なのは第3線で、これを「基準の線」という。ほとんどの文字はこの第3線の上に立ち、第2線と第3線のあいだの空間（まん中の部屋）を本体とする。

■ 大文字の書き方
大文字は26字すべて、第1線から第3線までを使って書く。下の第4線までははみ出さない。
例）A B C D E F G … すべて同じ高さになる。

■ 小文字の書き方
小文字は本体が「第2線から第3線のあいだ」に収まる。ここから上にはみ出す字と、下にはみ出す字がある。
例）a c e m n o r s u v w x z → まん中の部屋だけ
例）b d f h k l → 上の第1線まで届く
例）g j p q y → 下の第4線まで下りる

★ ポイント：単語を書くときは、まず第3線（基準の線）に文字をそろえて並べる意識を持つ。文字の下端がそろっていれば、多少形がくずれても読みやすい答案になる。`,
      },
      {
        heading: '高さの3グループを数で覚える',
        body: `小文字26字を高さで分けると、次のようにきれいに3つに分かれる。

■ 上に出る字（7字）：b d f h k l t
　→ 第1線まで届く「背の高い字」。ただし t だけは少し低く、第1線と第2線のちょうど中間くらいまでにする。
■ 下に出る字（5字）：g j p q y
　→ 第3線を突き抜けて第4線まで下りる「しっぽのある字」。j は上の点も忘れない。
■ まん中だけの字（14字）：a c e i m n o r s u v w x z
　→ 第2線と第3線のあいだだけを使う。i の点は第2線より上に出る。

■ 書き順で気をつけること
i・j の点、t の横棒は、たての線を書き終えてから最後に付ける。先に点や横棒を書くと位置がずれる。
f は上に出るが、下にも少し出す書き方（筆記体風）とまん中で止める書き方がある。ブロック体では第1線から第3線までで止めるのがふつうである。

⚠ 注意：apple の p を「まん中の部屋」だけに書くと、a と同じ高さになってしまい、まったく別の字に見える。高さの情報も文字の形の一部だと考える。`,
        figureId: 'lf_eigoext01_002',
      },
    ],
    trapExamples: [
      {
        question: '「apple」を4本線に書くとき、p はどこに書くか。',
        wrongAnswer: '第2線と第3線のあいだ（まん中の部屋）だけに書く',
        trapExplanation:
          '「小文字はまん中の部屋に書く」とだけ覚えていると、しっぽのある字も同じ高さに縮めてしまう。丸の部分だけを見て a や o と同じ大きさに書いてしまうのが原因。',
        correctAnswer: '丸の部分を第2線と第3線のあいだに書き、たての棒を第4線まで下ろす',
        correctExplanation:
          'p は「下に出る字」5つ（g j p q y）のひとつ。丸の部分だけをまん中の部屋に収め、棒は基準の線（第3線）を突き抜けて第4線まで下ろす。下に出さないと n や o と見分けがつかなくなる。',
      },
      {
        question: '小文字の t は、l や b と同じ高さまで上に出すか。',
        wrongAnswer: '同じ高さまで出す（第1線まで届かせる）',
        trapExplanation:
          '「上に出る字は b d f h k l t の7つ」とまとめて覚えるため、7字すべてが同じ高さだと思いこんでしまう。',
        correctAnswer: '上には出すが、l や b よりやや低く（第1線と第2線の中間くらいまで）書く',
        correctExplanation:
          't だけは他の6字より背が低い。l と同じ高さまで伸ばすと、横棒がなければ l と見分けがつかなくなる。「t は少し低くて横棒つき」と覚える。',
      },
    ],
  },

  {
    id: 'eigo_s003',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'アルファベット③：並び順と名前の読み方',
    description: 'A〜Zの順序を確実にし、まぎらわしい文字の名前（アルファベット読み）を区別する',
    order: 503,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'A〜Z の26字の順番は、何も見ずに書けるまで練習する。辞書・名簿・目次はすべてこの順に並ぶ。',
      '「アルファベット読み（文字の名前）」と「フォニックスの音（文字が単語の中で出す音）」は別もの。',
      'まぎらわしい名前：G（ジー）と J（ジェイ）、M（エム）と N（エヌ）、E（イー）と I（アイ）、V（ヴィー）と W（ダブリュー）。',
      'Z は日本では「ゼット」と言うが、英語（アメリカ）では [ziː]（ズィー）と読む。',
      '「◯の2つ前／3つ後ろの文字」を答える問題では、指を使って前後を数え、方向をまちがえない。',
    ],
    sections: [
      {
        heading: '26字の順序と歌の区切り',
        body: `アルファベットの並び順は、英語学習の土台になる。辞書を引く、名簿を探す、索引を見る──どれも A〜Z の順を知らないとできない。

■ 覚え方
アルファベットの歌（ABC ソング）は、次の4つのまとまりで区切られている。この区切りごとに書き出す練習をすると、途中から言えるようになる。
①A B C D E F G（7字）
②H I J K L M N O P（9字）
③Q R S T U V（6字）
④W X Y Z（4字）

■ 途中から言える／書けるようにする
入試や英検では「Rの次の文字は？」「Pの2つ前は？」のように、順番そのものを問う問題が出る。歌のように最初から歌わないと出てこない状態では時間がかかる。M（13番目）を真ん中の目印にして、前半・後半に分けて練習するとよい。

★ ポイント：26字を10秒以内に書けるようになるまで、毎日1回書く。ここが速くなると辞書引きの速さがまるで変わる。`,
        figureId: 'lf_eigoext01_003',
      },
      {
        heading: 'まぎらわしい文字の名前',
        body: `文字には「名前」がある。A は [eɪ]（エイ）、B は [biː]（ビー）というように読む。これをアルファベット読みという。聞き取りの問題では、この名前を正しく聞き分けられるかが問われる。

■ 聞きまちがえやすい組み合わせ
G（ジー）と J（ジェイ）… J のほうが「エイ」の音が入る
M（エム）と N（エヌ）… M は「ム」で口を閉じる、N は「ヌ」で舌が上につく
E（イー）と I（アイ）… E は日本語の「イー」に近い、I は「アイ」
V（ヴィー）と B（ビー）… V は上の歯で下くちびるをかむ
A（エイ）と R（アール）／ K（ケイ）と Q（キュー）

■ 日本語なまりに注意
・Z は日本では「ゼット」と言うが、これはドイツ語・フランス語風の読み方。英語（アメリカ）では [ziː]（ズィー）である。
・L は「エル」、R は「アール」。日本語ではどちらも「ル」の音になりがちだが、英語では別の音である。
・H を「ヘチ」と言わない。英語では [eɪtʃ]（エイチ）。

⚠ 注意：文字の名前（エイ、ビー、シー）と、単語の中でその文字が出す音（ア、ブ、ク）はまったく別のもの。次の課からは「音」のほうを学ぶ。`,
      },
    ],
    trapExamples: [
      {
        question: 'アルファベットで、R の2つ前の文字を書きなさい。',
        wrongAnswer: 'T',
        trapExplanation:
          '「2つ前」と言われたのに、頭の中でアルファベットを前から順に唱えるくせがあるため、R から先に進んで数えてしまう。日本語の「前」が時間の意味にも位置の意味にも使えることも混乱のもとになる。',
        correctAnswer: 'P',
        correctExplanation:
          'A→Z の並びで R より手前に2つもどる。R の1つ前が Q、2つ前が P である。数えるときは指でアルファベット表を左にたどる、と動作を決めておくと方向をまちがえない。',
      },
      {
        question: '文字 G の名前（アルファベット読み）をカタカナで書きなさい。',
        wrongAnswer: 'ジェイ',
        trapExplanation:
          'G と J はどちらも「ジ」で始まる音に聞こえるため、名前が入れかわる。とくに日本語ではローマ字の「じ」を ji と書くので、J のほうを「ジー」だと思いこみやすい。',
        correctAnswer: 'ジー（[dʒiː]）',
        correctExplanation:
          'G が「ジー」、J が「ジェイ」である。J には「エイ」の音がつく、と組にして覚える。同じく K（ケイ）、A（エイ）、H（エイチ）も「エイ」を含む仲間としてまとめて確認しておく。',
      },
    ],
  },

  {
    id: 'eigo_s004',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'アルファベット④：ブロック体・筆記体とまぎらわしい字',
    description: '入試で通用する活字体（ブロック体）の書き方と、読みまちがえられない字の書き分け',
    order: 504,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '入試の答案はブロック体（活字体）で書く。筆記体は「読めればよい」程度でよい。',
      '書き分けが必要なのは u と v、n と h、a と o、q と g、r と v、i と l。',
      '大文字の I は上下に短い横棒を付ける。棒1本だけだと小文字の l と区別がつかない。',
      '単語のあいだは1文字分あける。文字と文字はくっつけすぎない。',
      '答案では、あいまいな字は書き直す。読めない字は内容が合っていても不正解になる。',
    ],
    sections: [
      {
        heading: '入試で使う字はブロック体',
        body: `英語の文字の書き方には、活字体（ブロック体）と筆記体の2種類がある。

■ ブロック体
教科書やこの教材で使われている、1文字ずつ独立した形。中学入試・英検・学校のテストで書くのはすべてこちらである。まずこれを正確に書けるようにする。

■ 筆記体
文字をつなげて続けて書く書き方。かつては中学校で必ず習ったが、現在の学習指導要領では必修ではない。中学入試で筆記体を書かせる問題はまず出ない。ただし、英語圏の手紙や絵本の題字で使われることがあるので、読めると得をする程度に思っておけばよい。

■ 答案で気をつけること
①単語のあいだは1文字分あける。あけないと2語が1語に見える。
　例）I am a student.（4語がはっきり分かれて見えるように書く）
②文字と文字はつなげない。ブロック体をつなげて書くと筆記体のようになり、判読できなくなる。
③文の終わりにはピリオド（.）、疑問文にはクエスチョンマーク（?）を必ず付ける。これも採点の対象になる。

★ ポイント：うまい字を書く必要はまったくない。「他人がひと目で読める字」が正解になる字である。`,
      },
      {
        heading: '読みまちがえられやすい字',
        body: `採点者は、書いた本人ではない。自分では書けているつもりでも、別の字に読めてしまえば不正解になる。とくに次の組み合わせに注意する。

■ u と v
u は下が丸い、v は下がとがる。v の下を丸めると u になり、five が fiue になってしまう。
■ n と h
h は上に高く伸ばす、n は伸ばさない。中途半端な高さだとどちらか分からない。
■ a と o
a は右側にたての棒がつく。丸だけで棒を書かないと o になる。cat が cot に見える例がある。
■ q と g
q は下の棒をまっすぐ下ろす、g は下を左に曲げる。
■ r と v
r は右上に短くはらうだけ。大きくはらうと v に見える。
■ 大文字 I と小文字 l と数字の 1
大文字の I は上下に短い横棒を付ける。これを忘れて縦棒1本で書くと、小文字の l と区別がつかない。

⚠ 注意：答案を書き終えたら、自分の書いた単語を「知らない人が読んだらどう見えるか」という目で読み返す。あやしい字は消して書き直したほうが安全である。`,
      },
    ],
    trapExamples: [
      {
        question: '数の「5」を表す英単語を書きなさい。',
        wrongAnswer: 'fiue',
        trapExplanation:
          'v の下をまるく書くくせがあると、u と同じ形になってしまう。書いた本人は five のつもりでも、採点する人には fiue（存在しない語）に見えるため不正解になる。',
        correctAnswer: 'five',
        correctExplanation:
          'v は下をとがらせ、u は下をまるく書く。この2字は形のちがいが1か所しかないので、意識して書き分ける。似た例に seven（v）、have（v）があり、いずれも v の書き方であやしくなりやすい。',
      },
      {
        question: '「I have a dog.」をブロック体で書き写しなさい。',
        wrongAnswer: 'l have a dog.（大文字の I をたて棒1本で書いた）',
        trapExplanation:
          '大文字の I はたて棒1本で書けると思いこみやすい。しかしそれでは小文字の l とまったく同じ形になり、文頭の語が読めなくなる。',
        correctAnswer: 'I have a dog.（I の上下に短い横棒を付ける）',
        correctExplanation:
          'ブロック体の大文字 I は、たて棒の上下に短い横棒を付けて書く。こうすれば小文字の l や数字の 1 と区別できる。1文字だけの語 I と a は、まわりを広くあけて書くと読みやすい。',
      },
    ],
  },

  // ───────────── 2. 母音字・子音字と短母音（s005〜s010） ─────────────
  {
    id: 'eigo_s005',
    subject: 'eigo',
    examType: 'chugaku',
    title: '母音字と子音字：26字の役割分担',
    description: '母音字5字・子音字21字の区別と、y の二面性、a／an の使い分けを理解する',
    order: 505,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '母音字は a・e・i・o・u の5字。残りの21字が子音字。',
      'y は子音の働き（yes, you）と母音の働き（my, happy, gym）の両方を持つ特別な字。',
      'どの単語にも必ず母音の音が入る。母音字が見えない by・my・why は y が母音の働きをしている。',
      '母音＝口の中で息がさえぎられずに出る音。子音＝くちびる・舌・歯のどこかで息をせき止めて出す音。',
      'a と an の使い分けは「つづり」ではなく「次に来る音」で決まる（an hour／a university）。',
    ],
    sections: [
      {
        heading: '母音字と子音字',
        body: `アルファベット26字は、母音字と子音字に分かれる。

■ 母音字（5字）
a・e・i・o・u
口を開けて、息が舌や歯にじゃまされずにそのまま出てくる音を表す。日本語の「ア・イ・ウ・エ・オ」に近い役割だが、英語では1つの文字が何通りもの音を表すので注意が必要である。

■ 子音字（21字）
b・c・d・f・g・h・j・k・l・m・n・p・q・r・s・t・v・w・x・y・z
くちびるを閉じる（p, b, m）、舌を上あごにつける（t, d, n）、息をすきまから出す（s, f）など、どこかで息をせき止めたりこすったりして出す音を表す。

■ どの語にも母音がある
英語の単語には必ず母音の音が入っている。母音がなければ声にならないからである。
例）cat（a）／dog（o）／school（oo）／strong（o）
strong は子音字が5つも並ぶが、母音の音は o の1つだけ。この「母音は少なく子音が多い」という形が、日本語（原則として子音＋母音がセット）とは大きく異なる英語の特徴である。

★ ポイント：単語を見たらまず母音字に丸をつける。母音の数＝おおよその音のまとまり（音節）の数になる。`,
        figureId: 'lf_eigoext01_005',
      },
      {
        heading: 'y の二面性と a／an の使い分け',
        body: `■ y は子音にも母音にもなる
①子音として働く場合（語の最初に来るとき）
　例）yes／you／year／yellow → 「ヤ・ユ・ヨ」に近い音
②母音として働く場合（語の中・語の終わりに来るとき）
　例）my／by／why → 「アイ」の音
　例）happy／city／baby → 「イ」の音
　例）gym／system → 「イ」の短い音
だから my や by は、母音字が1つもないのに単語として成り立つ。y が母音のはたらきをしているからである。

■ a と an の使い分け
数えられる名詞が1つのとき、前に a か an を付ける。ここで多くの人がまちがえる。
◎きまり：次に来る語が「母音の音」で始まれば an、「子音の音」で始まれば a。
　→ 判断するのはつづりではなく音である。
例）a book／a cat／an apple／an orange／an egg
例外に見えるもの：
　an hour（h を読まないので「アウア」＝母音の音で始まる）
　an honest boy（h を読まない）
　a university（「ユー」＝ y の子音の音で始まる）
　a uniform（同じく「ユー」）

⚠ 注意：「a・i・u・e・o で始まる語には an」と覚えると、university や hour でまちがえる。必ず声に出して、最初の音で判断する。`,
      },
    ],
    trapExamples: [
      {
        question: '「my」には母音字 a・e・i・o・u が1つも入っていない。それでも単語として成り立つのはなぜか。',
        wrongAnswer: '英語には母音の音を持たない単語もあるから',
        trapExplanation:
          '「母音字＝a e i o u の5つ」とだけ覚えていると、この5字がなければ母音がないと考えてしまう。y を子音字の仲間としてしか見ていないことが原因。',
        correctAnswer: 'y が母音の働きをして「アイ」の音を出しているから',
        correctExplanation:
          'y は語の最初では子音（yes, you）、語の中や終わりでは母音（my, by, happy, gym）として働く特別な文字である。英語の単語には必ず母音の音が入るので、母音字が見あたらない語は y をさがす。',
      },
      {
        question: '（　）に a か an を入れなさい。　I studied for （　） hour.',
        wrongAnswer: 'a',
        trapExplanation:
          'hour は h という子音字で始まるので、つづりだけを見て a を選んでしまう。a／an をつづりで判断するくせがあると必ず引っかかる。',
        correctAnswer: 'an（I studied for an hour.）',
        correctExplanation:
          'hour の h は読まないので、実際の音は母音「アウア」で始まる。a／an は「つづり」ではなく「次に来る音」で決める。逆に university はつづりが u で始まるが音は「ユー」なので a university となる。',
      },
    ],
  },

  {
    id: 'eigo_s006',
    subject: 'eigo',
    examType: 'chugaku',
    title: '短母音①：a・e・i・o・u の5つの音',
    description: 'フォニックスの出発点である短母音を、口の形とともに区別できるようにする',
    order: 506,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'フォニックスとは「つづり字と音の対応のきまり」のこと。読めない単語も音の見当がつくようになる。',
      '短母音は5つ。a（cat）／e（bed）／i（sit）／o（box）／u（cup）。',
      '「子音＋母音字1つ＋子音」で終わる語は、たいてい母音字が短母音になる。',
      'a の短母音は日本語の「ア」ではなく、口を横に開いた「エとアの中間（ェア）」。',
      'u の短母音は口をあまり開けない「ア」。日本語の「ウ」ではない（cup は「カップ」に近い）。',
    ],
    sections: [
      {
        heading: 'フォニックスと短母音',
        body: `フォニックス（phonics）とは、つづり字と音の関係を学ぶ方法である。英語は「つづりを見れば読み方の見当がつく」ようにできている部分が多く、そのきまりを知っていれば、初めて見る単語でも読めるようになる。逆にこれを知らないと、単語を1つずつ丸暗記することになり、覚える量が何倍にもふくれあがる。

■ まず覚えるのは5つの短母音
a … cat, hat, map, bag, sad
e … bed, pen, ten, red, egg
i … sit, big, pig, six, hit
o … box, dog, hot, top, stop
u … cup, bus, run, sun, cut

■ どんなときに短母音になるか
「子音＋母音字1つ＋子音」の形（CVC 型）で語が終わるとき、その母音字はほぼ短母音になる。
例）c-a-t（cat）／b-e-d（bed）／h-o-t（hot）
母音字が2つ並んだり、語末に e が付いたりすると読み方が変わる（次の課以降で学ぶ）。

★ ポイント：短母音は「短く、鋭く」発音する。日本語のようにのばさない。cat を「キャーット」とのばすと、まったくちがう語に聞こえる。`,
      },
      {
        heading: '口の形で覚える5つの母音',
        body: `5つの短母音は、口の開き方と舌の位置がそれぞれちがう。カタカナに置きかえずに、口の形で覚えるのが近道である。

■ a（cat）
口を横に大きく開き、「エ」と「ア」の中間のような音を出す。日本語の「ア」で cat と言うと cut（切る）に近く聞こえてしまう。
■ e（bed）
口を軽く横に開いて「エ」。日本語の「エ」に近く、5つの中ではいちばんやさしい。
■ i（sit）
口を少しだけ横に開いて、短く弱い「イ」。日本語の「イ」よりも力を抜く。sit を強く「シート」と言うと seat（座席）になってしまう。
■ o（box）
口を丸くたてに開いて「ア」に近い音（アメリカ英語）。イギリス英語では「オ」に近い。
■ u（cup）
口をあまり開けず、のどの奥で短く「ア」。日本語の「ウ」ではない。cup は「クップ」ではなく「カップ」に近い。

⚠ 注意：短母音のうち、日本人がとくに苦手なのは a と u の区別である。cat と cut、bag と bug、hat と hut は、母音の1音だけで意味が変わる。`,
        figureId: 'lf_eigoext01_006',
      },
    ],
    trapExamples: [
      {
        question: '「cat」の a はどのように読むか。',
        wrongAnswer: 'エイ（アルファベット読みのまま「ケイト」と読む）',
        trapExplanation:
          '文字の名前（A＝エイ）を先に覚えるため、単語の中でもその名前の音で読んでしまう。とくにアルファベットの歌を覚えたばかりの段階で起こりやすい。',
        correctAnswer: '短母音の a（口を横に開いた、エとアの中間の短い音）',
        correctExplanation:
          '「子音＋母音字1つ＋子音」で終わる語では、母音字は短母音になる。cat は c-a-t の3つの音でできており、a は短く鋭い音になる。「エイ」と読むのは cake のように語末に e が付いたときである（マジックE）。',
      },
      {
        question: '「悪い」という意味の英単語を書きなさい。',
        wrongAnswer: 'bed',
        trapExplanation:
          '短母音の a を日本語の「ア」ではなく「エ」に近い音として習うため、bad の音を聞いて e を思いうかべてしまう。bad と bed は母音1字しかちがわないので、耳だけに頼ると必ずまざる。',
        correctAnswer: 'bad',
        correctExplanation:
          'bad（悪い）の母音字は a、bed（ベッド）の母音字は e である。a のほうが口を大きく横に開き、e より長めに聞こえる。聞き取りで迷ったら、意味の通る文をつくって確かめる（That is a bad idea. ／ I sleep in my bed.）。',
      },
    ],
  },
  {
    id: 'eigo_s007',
    subject: 'eigo',
    examType: 'chugaku',
    title: '短母音②：a と e、e と i の書き分け',
    description: 'bad／bed、bed／bid のように1字で意味が変わる語を、意味とセットで区別する',
    order: 507,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '母音字1字のちがいで意味が変わる語（ミニマルペア）を、意味とセットで覚える。',
      'a と e：bad／bed、man／men、sad／said（said は例外の読み）、pan／pen。',
      'e と i：pen／pin、ten／tin、desk／disk、bed／bid、set／sit。',
      'a は口を横に大きく、e は軽く横に、i は力を抜いた短い「イ」。',
      '聞き取りで迷ったら、その語が入って意味の通る文を作って判断する。',
    ],
    sections: [
      {
        heading: 'a と e を区別する',
        body: `英語には、母音字を1字入れかえるだけで別の語になるペアがたくさんある。これをミニマルペアという。書き取り問題では、このペアのどちらを書くかで得点が決まる。

■ a と e のペア
bad（悪い）／bed（ベッド）
man（男性・単数）／men（男性・複数）
pan（フライパン）／pen（ペン）
sad（悲しい）／said（言った、say の過去形）
band（バンド）／bend（曲げる）

■ 音のちがい
a は口を横に大きく開き、あごを下げて「ェア」に近い音を出す。e は口の開きが小さく、日本語の「エ」に近い。日本人にとって a のほうがむずかしいので、a を「大きく開く音」と決めて練習する。

■ man と men はとくに重要
単数と複数のちがいがこの1字だけで表される。同じように woman（1人）／women（複数）もあるが、women は読み方が「ウィミン」となり、つづりの o と音がずれる特別な語である。ここは丸暗記する。

★ ポイント：ペアは必ず2語セットで、意味・つづり・例文の3点をまとめてノートに書く。片方だけ覚えると、テストで必ずもう片方と混同する。`,
      },
      {
        heading: 'e と i を区別する',
        body: `■ e と i のペア
pen（ペン）／pin（ピン）
ten（10）／tin（すず・かん）
desk（つくえ）／disk（円ばん）
bed（ベッド）／bid（値をつける）
set（置く）／sit（すわる）
head は e、hid は i と、つづりが似ていても形がちがう語もある。

■ 音のちがい
e は口を横に開いて「エ」。i は口の力を抜いて短く「イ」。日本語の「イ」より弱く、あいまいに響く。日本人は i を強くはっきり「イー」と言いがちで、そうすると sit が seat（座席）に、hit が heat（熱）に聞こえてしまう。

■ 書き取りでの見分け方
迷ったら意味の通る文にあてはめる。
例）I have a （pen／pin）. → 学校の場面なら pen
例）There are （ten／tin） students. → 数を表すなら ten
例）Please （set／sit） down. → 「すわる」なら sit

⚠ 注意：日本語のカタカナ語がじゃまをすることがある。「デスク」「テン」はそのまま desk・ten でよいが、「ピン」は pin、「ペン」は pen と、カタカナでは同じ「エ／イ」に聞こえても英語では別音である。`,
      },
    ],
    trapExamples: [
      {
        question: '「10人の男性」を英語で書きなさい。',
        wrongAnswer: 'ten man',
        trapExplanation:
          '「男性」＝man と1つの形だけで覚えていると、数が複数になっても形を変えない。また man の複数形を mans と考えて s を付けてしまう人もいる。',
        correctAnswer: 'ten men',
        correctExplanation:
          'man の複数形は s を付けず、母音字を a から e に変えて men とする。同じ形の変化に woman／women、child／children（これは形がちがう）、foot／feet、tooth／teeth がある。数を表す語が前にあるときは複数形かどうかを必ず確かめる。',
      },
      {
        question: '「Please （　） down.（すわってください）」の（　）に入る語を書きなさい。',
        wrongAnswer: 'set',
        trapExplanation:
          'e と i の音の区別があいまいなうえ、set も sit も日本語では「セット」「シット」と似た調子で覚えているため、意味を確かめずに書いてしまう。',
        correctAnswer: 'sit',
        correctExplanation:
          'sit は「すわる」、set は「（物を）置く」。人が動作の主なら sit、物を置くなら set である。sit down（すわる）、set the table（食卓の用意をする）と、決まった言い方ごと覚えるとまちがえない。',
      },
    ],
  },

  {
    id: 'eigo_s008',
    subject: 'eigo',
    examType: 'chugaku',
    title: '短母音③：o と u、a と u の聞き分け',
    description: '日本人がいちばん苦手な a・o・u の区別を、口の形と語のペアで身につける',
    order: 508,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'a と u のペア：cat／cut、bag／bug、hat／hut、cap／cup、bad／bud。',
      'o と u のペア：hot／hut、box／bus、not／nut、cop／cup。',
      'a は口を横に大きく、o は口を丸くたてに、u は口をあまり開けずのどの奥で短く。',
      'カタカナで書くと a も o も u も「ア」になってしまう。カタカナに置きかえない。',
      'つづりを見れば区別できるので、書き取り以外の問題では必ずつづりを手がかりにする。',
    ],
    sections: [
      {
        heading: '「ア」に聞こえる3つの音',
        body: `日本語の母音は「ア・イ・ウ・エ・オ」の5つだけだが、英語の母音はその4倍近くある。とくに短母音の a・o・u は、日本語のカタカナに直すとどれも「ア」になってしまうため、区別ができなくなる。

■ 3つの音のちがい
a（cat）… 口を横に大きく開き、あごを下げる。「ェア」に近い。
o（box）… 口を丸くたてに開ける。アメリカ英語では「ア」に近く、イギリス英語では「オ」に近い。
u（cup）… 口をほとんど開けず、のどの奥で短く弱く出す。

■ 代表的なペア
cat（ねこ）／cut（切る）
bag（かばん）／bug（虫）
hat（ぼうし）／hut（小屋）
cap（帽子）／cup（コップ）
hot（暑い）／hut（小屋）
not（〜ない）／nut（木の実）
box（箱）／bus（バス）

★ ポイント：口の形を先に決めてから声を出す。a は「横に大きく」、o は「たてに丸く」、u は「開けない」。この3つの動作を体で覚えると、聞き取りも自然にできるようになる。`,
      },
      {
        heading: 'つづりを手がかりにする',
        body: `聞き取りの力がつくまでは、つづりを手がかりにして意味を判断するのが現実的である。中学入試の英語では、音声問題より読み書きの問題のほうが配点が大きいことが多い。

■ 意味から母音を決める練習
「ぼうしをかぶる」→ ぼうし＝cap または hat。つばのある帽子は cap、ふちのある帽子は hat。どちらも u ではない。
「コップ1ぱいの水」→ a cup of water。cap ではない。
「バスに乗る」→ take a bus。box ではない。
「暑い日」→ a hot day。hut（小屋）ではない。

■ よく出るまとまりで覚える
a cup of tea（1ぱいの紅茶）
a bus stop（バス停）
It is hot today.（今日は暑い）
Cut the paper.（紙を切る）

■ 文全体で確かめる
I have a cat.（ねこを飼っている）と I cut my finger.（指を切った）では、文の形も意味もまったくちがう。1語だけを見ずに、まわりの語といっしょに考える。

⚠ 注意：カタカナ語にひっぱられる例に注意する。「カップ」は cup だが「キャップ」は cap、「バッグ」は bag だが「バグ」は bug である。日本語になっている語こそ、つづりを確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「一ぱいのお茶」を英語で書きなさい。',
        wrongAnswer: 'a cap of tea',
        trapExplanation:
          'cup と cap は母音字1字しかちがわず、日本語ではどちらも「カップ／キャップ」と似た調子で発音される。書くときにどちらの母音字だったかが思い出せなくなる。',
        correctAnswer: 'a cup of tea',
        correctExplanation:
          'cup（コップ・カップ）は u、cap（つばのある帽子）は a である。a cup of ~ は「カップ1ぱいの〜」を表す決まった言い方で、a cup of tea／coffee のかたちでそのまま覚える。帽子は wear a cap と使う。',
      },
      {
        question: '次の英文の意味を答えなさい。　I cut the cake.',
        wrongAnswer: '私はケーキをねこにあげた（cat と読みちがえた）',
        trapExplanation:
          'cut と cat はつづりも音も似ているうえ、cut は原形と過去形が同じ形なので、動詞だと気づかずに名詞（ねこ）として読んでしまう。',
        correctAnswer: '私はケーキを切った（切ります）。',
        correctExplanation:
          'cut は「切る」という動詞で、cut－cut－cut と原形・過去形・過去分詞が同じ形になる。文の中で I のすぐ後ろにあるので動詞の位置である。cat は名詞なので、この位置には a や the なしでは入れない。語の位置からも品詞を判断する。',
      },
    ],
  },

  {
    id: 'eigo_s009',
    subject: 'eigo',
    examType: 'chugaku',
    title: '子音の基本音：対になる音を知る',
    description: 'b／p、d／t、g／k のように口の形が同じで声のあるなしだけが違う音を整理する',
    order: 509,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '子音には「声を出す音（有声音）」と「息だけの音（無声音）」の対がある。',
      '対になる音：b／p、d／t、g／k、v／f、z／s、j（ジ）／ch（チ）。',
      'この対は、あとで学ぶ -s や -ed の発音のきまりで必ず使うので、今のうちに整理しておく。',
      'l と r は日本語にない区別。l は舌先を上の歯ぐきにつける、r は舌をどこにもつけない。',
      'v と b、s と th、f と h はカタカナでは同じになりやすいので、口の形で覚える。',
    ],
    sections: [
      {
        heading: '有声音と無声音',
        body: `のどに手をあてて「ズー」と言うとふるえるが、「スー」と言うとふるえない。このふるえ（声帯の振動）があるかないかで、子音は2つに分かれる。

■ 有声音（声がある）
b・d・g・v・z・m・n・l・r・w・j など
■ 無声音（息だけ）
p・t・k・f・s・h・ch・sh など

■ 対になっている6組
b（ブ）／p（プ）… くちびるを閉じて開く
d（ドゥ）／t（トゥ）… 舌先を上の歯ぐきにつける
g（グ）／k（ク）… 舌の奥を上あごにつける
v（ヴ）／f（フ）… 上の歯で下くちびるにふれる
z（ズ）／s（ス）… 舌先を上の歯ぐきに近づけてすきまから息を出す
j（ヂ）／ch（チ）… 舌を上あごにつけてから離す

この6組は、口の形も舌の位置もまったく同じで、声を出すか出さないかだけがちがう。だから b と p、d と t を聞きまちがえやすい。

★ ポイント：この「対」は、-s の発音（/s/ か /z/ か）や -ed の発音（/t/ か /d/ か）を決めるときに必ず使う。フォニックスの土台なので、6組を今のうちに言えるようにしておく。`,
      },
      {
        heading: '日本語にない音',
        body: `日本語にない音は、カタカナに置きかえたとたんに区別が消える。次の音はとくに注意する。

■ l と r
l … 舌先を上の歯の裏（歯ぐき）にしっかりつけて「ル」。light, look, play, class
r … 舌をどこにもつけず、舌先を少し内側に丸めて「ゥル」。right, read, red, train
日本語の「ラ行」はどちらとも少しちがう。ペアで練習する。
例）light（光）／right（右）　lead（導く）／read（読む）　glass（コップ）／grass（草）

■ v と b
v … 上の歯で下くちびるに軽くふれ、声を出す。very, van, love, five
b … くちびるを閉じて開く。berry, bat, boy
例）vest（チョッキ）／best（最もよい）

■ f と h
f … 上の歯で下くちびるにふれ、息だけ。food, fish, four
h … 口の形は変えず、のどから息を出す。hood, house, hot

■ th
上下の歯のあいだに舌先を軽くはさんで息を出す。無声（think, three, month）と有声（this, that, mother）の2種類がある。

⚠ 注意：これらは「日本語のどの音に近いか」ではなく「口のどこをどう使うか」で覚える。カタカナに直した瞬間に区別が消えることを忘れない。`,
      },
    ],
    trapExamples: [
      {
        question: '「right」と「light」の発音上のちがいを説明しなさい。',
        wrongAnswer: 'どちらも日本語の「ライト」と同じで、ちがいはない',
        trapExplanation:
          '日本語では l と r の区別がなく、どちらもカタカナで「ライト」と書かれる。カタカナで理解しているかぎり、ちがいがないように感じてしまう。',
        correctAnswer: 'l（light）は舌先を上の歯ぐきにつけて出し、r（right）は舌をどこにもつけずに出す',
        correctExplanation:
          'l は舌先を上の歯の裏にしっかりつけ、その両わきから声を出す。r は舌先をどこにもつけず、少し丸めるようにして出す。意味は light（光・軽い）と right（右・正しい）でまったく異なるので、聞き取り問題では前後の語から意味を判断することも大切である。',
      },
      {
        question: '「g」と「k」の音のちがいは何か。',
        wrongAnswer: '口の形も舌の位置もまったくちがう音である',
        trapExplanation:
          'カタカナでは「グ」と「ク」でまったく別の音に見えるため、口の使い方も別だと考えてしまう。実際には同じ場所を使っている。',
        correctAnswer: '口の形も舌の位置も同じで、声を出すか（g）出さないか（k）だけがちがう',
        correctExplanation:
          'g も k も、舌の奥を上あごの奥につけてから離して出す音である。ちがいは声帯をふるわせるか（有声の g）、息だけを出すか（無声の k）だけ。この関係は b／p、d／t、v／f、z／s でも同じで、あとで -s や -ed の発音を決めるときに役立つ。',
      },
    ],
  },

  {
    id: 'eigo_s010',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'CVC の語を読む・書く',
    description: '「子音＋母音＋子音」の3音の語を、音を1つずつつないで読み書きできるようにする',
    order: 510,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      'CVC＝子音（Consonant）＋母音（Vowel）＋子音（Consonant）の形。英語のいちばん基本の語の形。',
      'CVC の語では、まん中の母音字はほぼ必ず短母音になる。',
      '読むときは1音ずつ出してからつなげる（c－a－t → cat）。これをブレンディングという。',
      '書くときは音を1つずつ区切って文字にする（cat → c／a／t）。これをセグメンティングという。',
      '最初の音・まん中の音・最後の音を入れかえる練習（cat→cut→cup）で、音の感覚が育つ。',
    ],
    sections: [
      {
        heading: '3つの音をつないで読む',
        body: `英語の単語のいちばん基本の形が CVC 型である。子音・母音・子音の3つの音でできていて、フォニックスの練習はここから始まる。

■ 代表的な CVC 語
a：cat, hat, map, bag, sad, man, bad, can
e：bed, pen, ten, red, leg, net, get, hen
i：sit, big, pig, six, hit, win, lip, fin
o：box, dog, hot, top, pot, hop, log, mop
u：cup, bus, run, sun, cut, bug, mud, nut

■ 読み方の手順（ブレンディング）
①1文字ずつ音を出す　c（ク）－ a（ア）－ t（トゥ）
②となり合う音をつなげる　「クァ」－「トゥ」
③一気に言う　cat
最初はゆっくりでよい。慣れると①②を頭の中で行えるようになり、初めて見る語も読めるようになる。

■ 書き方の手順（セグメンティング）
読むときと逆の手順をとる。
①語を聞いて、いくつの音でできているか指を折って数える（cat は3つ）
②音を1つずつ文字に直す（ク→c、ア→a、トゥ→t）
③つなげて書く

★ ポイント：CVC がすらすら読めれば、英検5級・4級の単語の半分近くは自力で読める。ここを飛ばさずに練習する。`,
        figureId: 'lf_eigoext01_010',
      },
      {
        heading: '1音だけ入れかえる練習',
        body: `CVC の力を伸ばすには、3つの音のうち1つだけを入れかえる練習が効く。音の位置と役割がはっきり意識できるようになる。

■ 最初の音を変える
cat → bat → hat → mat → rat → sat
pen → hen → ten → men
■ まん中の音（母音）を変える
cat → cut → cot
bag → beg → big → bug
pen → pin → pan
hot → hat → hut → hit
■ 最後の音を変える
cat → cap → can → cab
big → bit → bid → bin

■ 意味もいっしょに確認する
音を変えると意味は完全に変わる。
bat（コウモリ・バット）／mat（マット）／rat（ネズミ）
beg（たのむ）／big（大きい）／bug（虫）
can（〜できる・かん）／cab（タクシー）

⚠ 注意：CVC のきまりが当てはまらない語もある。put（プット）の u は「ア」ではなく「ウ」に近い音、was（ワズ）の a も例外である。ただし、こうした例外は数が限られているので、まず原則を身につけてから覚えればよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「pig」という語はいくつの音（音素）からできているか。',
        wrongAnswer: '2つ（ピ・グ）',
        trapExplanation:
          '日本語はカナ1文字が「子音＋母音」のセットなので、「ピ」を1つの音と数えてしまう。日本語の感覚のままだと、英語の音の数をつねに少なく数えることになる。',
        correctAnswer: '3つ（p／i／g）',
        correctExplanation:
          '英語では子音と母音を別々の音として数える。pig は p（プ）－ i（イ）－ g（グ）の3音である。この数え方ができるようになると、書き取りのとき「音の数だけ文字がある」という手がかりが使えるようになる。',
      },
      {
        question: '次の音を聞いて書きなさい。　「バス（乗り物）」',
        wrongAnswer: 'bas',
        trapExplanation:
          'カタカナの「バス」を音のとおりに文字にすると b－a－s になってしまう。日本語のカタカナ表記が、英語の母音のちがいを消してしまうことが原因。',
        correctAnswer: 'bus',
        correctExplanation:
          'bus の母音は u（口をあまり開けない短い「ア」）である。カタカナの「バ」は英語の a の音に引きずられやすいが、実際の音は cup や run と同じ仲間である。カタカナ語になっている語は、必ずつづりを確かめてから書く。',
      },
    ],
  },

  // ────────── 3. 長母音・マジックE・二重母音（s011〜s016） ──────────
  {
    id: 'eigo_s011',
    subject: 'eigo',
    examType: 'chugaku',
    title: '長母音①：アルファベット読みになる母音',
    description: '長母音は「文字の名前をそのまま言う音」だと理解し、複数のつづり方があることを知る',
    order: 511,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '長母音＝その母音字の「名前」をそのまま言う音（a→エイ、e→イー、i→アイ、o→オウ、u→ユー）。',
      '短母音より長くのばして発音する。cap（短）とcape（長）、hop（短）とhope（長）。',
      '同じ長母音の音でも、つづり方は何通りもある（「イー」＝ee, ea, e_e, ie, y）。',
      'つづりが違っても音が同じ語は、同音異義語になりやすい（meet／meat、see／sea）。',
      '長母音になる合図は3つ。①語末の e（マジックE）②母音字が2つ並ぶ③語末が母音字1つ（he, go）。',
    ],
    sections: [
      {
        heading: '長母音とは何か',
        body: `短母音は「文字の名前とはちがう短い音」だったが、長母音は「文字の名前をそのまま言う音」である。だから長母音のほうが覚えやすい。

■ 5つの長母音
a … エイ　cake, name, rain, day, baby
e … イー　he, see, tree, eat, meet
i … アイ　bike, nine, night, my, kind
o … オウ　go, home, boat, snow, old
u … ユー　use, cute, music, new, blue

■ 短母音との比べ方
cap（キャップ）／cape（岬・マント）
hop（ぴょんと跳ぶ）／hope（希望）
kit（道具一式）／kite（たこ）
not（〜でない）／note（メモ）
cut（切る）／cute（かわいい）
右側はどれも語末に e が付いており、まん中の母音が長母音になっている。

■ 長母音になる3つの合図
①語の終わりに e が付く（マジックE）… name, bike, home
②母音字が2つ並ぶ… rain, see, boat, meat
③1音節の語が母音字で終わる… he, she, we, go, no, hi, my

★ ポイント：まず「短母音か長母音か」を決めてから読む。合図の3つを見つけられれば、初めて見る語でもかなり正確に読める。`,
      },
      {
        heading: '1つの音にいくつものつづり',
        body: `英語のむずかしさは、同じ音を表すつづりが何通りもあることにある。読むときは困らないが、書くときにどのつづりかを選ぶ必要が出てくる。

■ 「イー」の音
ee … see, tree, green, week, sleep
ea … eat, sea, read, teach, please
e_e … these, Chinese
ie … field, piece
y（語末）… happy, city, easy
■ 「エイ」の音
a_e … cake, name, game　／　ai … rain, train, wait　／　ay（語末）… day, play, say
■ 「アイ」の音
i_e … bike, nine　／　igh … night, light, high　／　y（語末）… my, sky, fly　／　ie … pie, tie
■ 「オウ」の音
o_e … home, nose　／　oa … boat, coat, road　／　ow（語末）… snow, know, window
■ 「ユー」の音
u_e … use, cute　／　ue … blue, Tuesday　／　ew … new, few

■ 位置に注目すると選びやすい
「エイ」は語のとちゅうなら ai、語の終わりなら ay。
「オウ」は語のとちゅうなら oa、語の終わりなら ow。
このきまりを知っているだけで、rain／ray、boat／bow の書き分けができる。

⚠ 注意：音が同じでつづりがちがう語（同音異義語）は入試で頻出。meet（会う）／meat（肉）、see（見る）／sea（海）、right（右）／write（書く）、know（知る）／no（いいえ）。意味とセットで覚える。`,
        figureId: 'lf_eigoext01_011',
      },
    ],
    trapExamples: [
      {
        question: '「私は毎日肉を食べます。」の英文中の「肉」にあたる語を書きなさい。（I eat （　） every day.）',
        wrongAnswer: 'meet',
        trapExplanation:
          'meat と meet は発音がまったく同じ（同音異義語）なので、音だけを頼りにすると、より先に習う meet（会う）のつづりが出てきてしまう。',
        correctAnswer: 'meat（I eat meat every day.）',
        correctExplanation:
          '「肉」は meat、「会う」は meet である。ea と ee はどちらも「イー」と読むので、意味とつづりを結びつけて覚えるしかない。eat（食べる）と meat（肉）は同じ ea の仲間、と関連づけると思い出しやすい。',
      },
      {
        question: '「雨」を表す語のつづりとして正しいのはどちらか。　ray／rain',
        wrongAnswer: 'ray',
        trapExplanation:
          '「エイ」の音のつづりが ai と ay の2通りあることを知らないと、より短い ay をあてはめてしまう。ray（光線）は実在する語なので、まちがいに気づきにくい。',
        correctAnswer: 'rain',
        correctExplanation:
          '「エイ」の音は、語のとちゅうでは ai（rain, train, wait, paint）、語の終わりでは ay（day, play, say, way）と書く。rain は最後に n という子音があるので、とちゅうの位置になり ai を使う。同じきまりで「オウ」も、とちゅうは oa（boat）、終わりは ow（snow）となる。',
      },
    ],
  },

  {
    id: 'eigo_s012',
    subject: 'eigo',
    examType: 'chugaku',
    title: '長母音②：マジックE（サイレントE）',
    description: '語末の読まない e が、前の母音を長母音に変えるしくみを理解する',
    order: 512,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '「子音＋母音＋子音＋e」の形では、語末の e を読まず、前の母音がアルファベット読み（長母音）になる。',
      'このしくみをマジックE（サイレントE）という。cap→cape、hop→hope、kit→kite、cut→cute。',
      'e 自身は音を出さないが、他の母音の読み方を変える働きをする。',
      '例外：have, give, live, love, come, some の e は前の母音を長くしない。',
      '語尾に ing や ed を付けるときは、この e を取ってから付ける（make→making、hope→hoped）。',
    ],
    sections: [
      {
        heading: 'マジックE のしくみ',
        body: `英語には「読まないのに大事な文字」がある。その代表がマジックE（サイレントE、または「魔法の e」）である。

■ しくみ
「子音＋母音字＋子音＋e」の形になると、語末の e は発音されず、そのかわり前の母音字がアルファベット読み（長母音）になる。
例）cap（キャップ）→ cape（ケイプ）
　　hop（ホップ）→ hope（ホウプ）
　　kit（キット）→ kite（カイト）
　　cut（カット）→ cute（キュート）
　　not（ノット）→ note（ノウト）
　　tap（タップ）→ tape（テイプ）
　　pin（ピン）→ pine（パイン）
　　hat（ハット）→ hate（ヘイト）

■ 覚え方
語末の e が、1つ手前の子音をとびこえて母音に「きみは名前で読みなさい」と魔法をかける、とイメージする。e 自身は音を出さないので声は聞こえないが、はたらきはしている。

■ よく出る語
name, game, make, take, late, date, face, place
time, nine, five, ride, white, write, life, wide
home, nose, close, those, stone, hole
use, cute, June, rule

★ ポイント：語末に e があったら、まず前の母音を長母音で読んでみる。それで知っている語になれば正解であることが多い。`,
        figureId: 'lf_eigoext01_012',
      },
      {
        heading: '例外と、語尾を付けるときの変化',
        body: `■ マジックE がきかない語（例外）
語末に e があるのに、前の母音が短いままの語がある。数は限られているので覚えてしまう。
have（ハヴ）… ×ヘイヴ
give（ギヴ）／live（リヴ）… ×ライヴ（「生きている」の意味の形容詞 live はライヴと読む）
love（ラヴ）／come（カム）／some（サム）／done（ダン）／none（ナン）
これらはもともと、英語では語末に v を1字だけで置かないというきまりがあり、意味のない e が付いた語である。

■ なぜ e を付けるのか
英語では v で終わる語を作らない。だから have, give, live, love には音を出さない e が必要になる。

■ ing や ed を付けるときは e を取る
語末の e はそのままにせず、取ってから付ける。
make → making　／　take → taking　／　write → writing
hope → hoped → hoping　／　use → used → using
live → lived → living　／　come → coming
ただし、see → seeing のように母音が2つ並んでいる語は e を取らない。

⚠ 注意：makeing、writeing のように e を残したまま ing を付けるのは、書き取りでいちばん多いまちがい。「e を取って ing」と口で唱えてから書く。`,
      },
    ],
    trapExamples: [
      {
        question: '「hope（望む）」に ing を付けて「望んでいる」の形にしなさい。',
        wrongAnswer: 'hopeing',
        trapExplanation:
          '「動詞に ing を付ける」というきまりだけを覚えていると、語の形をそのまま残して ing をつなげてしまう。e が読まない文字なので、あってもなくても同じだと感じてしまうことも原因。',
        correctAnswer: 'hoping',
        correctExplanation:
          '語末に読まない e がある語は、e を取ってから ing を付ける。make→making、take→taking、write→writing、use→using も同じ。なお hop（ぴょんと跳ぶ）に ing を付けると hopping と p を重ねる形になり、hoping（望んでいる）とは別の語になる。',
      },
      {
        question: '「have」の a は長母音か、短母音か。',
        wrongAnswer: '長母音（語末に e があるので「ヘイヴ」と読む）',
        trapExplanation:
          'マジックE のきまりを覚えたばかりの段階では、語末に e があるすべての語にあてはめてしまう。have は最もよく使う語なので、この誤読は目立つ。',
        correctAnswer: '短母音（「ハヴ」と読む）',
        correctExplanation:
          'have, give, live, love, come, some, done はマジックE の例外で、前の母音は短いままである。これらの e は、英語では語末に v を1字で置かないというきまりのために付いた、音を出さない e である。数が少ないので例外としてまとめて覚える。',
      },
    ],
  },
  {
    id: 'eigo_s013',
    subject: 'eigo',
    examType: 'chugaku',
    title: '長母音③：母音字が2つ並ぶとき',
    description: 'ai・ea・oa・ee のように母音字が並ぶと、前の字が名前を言うきまりと例外を学ぶ',
    order: 513,
    studyPeriod: '小4',
    targetLevel: 'kiso',
    keyPoints: [
      '母音字が2つ並ぶと、前の字がアルファベット読み、後ろの字は読まないことが多い（ai, ea, oa, ee, ie）。',
      '例）rain（レイン）、sea（スィー）、boat（ボウト）、tree（トゥリー）。',
      'ea には例外が多い。「イー」（eat, sea）／「エ」（bread, head）／「エイ」（great, break）。',
      'oo は「ウー」（school, food）と「ウ」（book, look, good）の2種類がある。',
      'このきまりは全体の7割ほどにしか当てはまらない。当てはまらない語は語ごとに覚える。',
    ],
    sections: [
      {
        heading: '前の母音字が名前を言う',
        body: `母音字が2つ並んだとき、前の字をアルファベット読みし、後ろの字は読まない──これが基本のきまりである。英語圏の学校では「2つの母音が歩くと、前のほうが話をする」と教えられる。

■ ai（エイ）
rain, train, wait, paint, tail, mail, afraid
■ ay（エイ・語末）
day, play, say, way, may, stay, today
■ ea（イー）
eat, sea, tea, read, teach, please, easy, clean
■ ee（イー）
see, tree, green, week, sleep, three, feet
■ oa（オウ）
boat, coat, road, soap, goat, toast
■ ie（イー／アイ）
field, piece（イー）／pie, tie, lie（アイ・語末）
■ ui・ue（ウー・ユー）
fruit, juice／blue, true, Tuesday

■ 語の中と語の終わりで使い分ける
「エイ」…とちゅうは ai、終わりは ay
「オウ」…とちゅうは oa、終わりは ow
「イー」…とちゅうは ea か ee、終わりは ee（see, three）か y（happy）

★ ポイント：知らない語に出会ったら、まず母音字の並びをさがす。並んでいれば長母音で読んでみる、というのが読解の第一手である。`,
      },
      {
        heading: 'きまりが当てはまらない語',
        body: `このきまりが当てはまるのは英単語全体のおよそ7割で、残りは例外である。よく出る例外は覚えてしまうしかない。

■ ea の3つの読み方
①イー（原則どおり）… eat, sea, tea, read（現在形）, teach, please
②エ（短い音）… bread, head, ready, heavy, weather, breakfast, sweater
③エイ… great, break, steak
とくに②は身近な語が多いので要注意。read は現在形が「リード」、過去形が「レッド」と、同じつづりで読み方が変わる。

■ oo の2つの読み方
①ウー（長い）… school, food, moon, room, soon, too, zoo
②ウ（短い）… book, look, good, cook, foot, wood, stood
k で終わる語は短い「ウ」になることが多い、と覚えると便利である。

■ ou の読み方もいろいろ
out, house, about（アウ）／you, soup, group（ウー）／country, young, touch（ア）／could, would, should（ウ）

⚠ 注意：例外語は「読み」と「意味」をセットにして声に出して覚える。bread（パン）を「ブリード」と読んでしまうと、聞き取りでも書き取りでも通じない。`,
      },
    ],
    trapExamples: [
      {
        question: '「bread（パン）」の ea はどのように読むか。',
        wrongAnswer: 'イー（「ブリード」と読む）',
        trapExplanation:
          '「母音字が2つ並んだら前の字を名前で読む」というきまりを覚えたばかりだと、eat や sea と同じように ea を「イー」と読んでしまう。bread は身近な語なのに例外なので、まちがえたまま覚えやすい。',
        correctAnswer: 'エ（短い音。「ブレッド」と読む）',
        correctExplanation:
          'ea を短く「エ」と読む語は数が限られている。bread, head, ready, heavy, weather, breakfast, sweater が代表例で、いずれも日常でよく使う語である。まとめて声に出して覚えてしまうのがいちばん早い。',
      },
      {
        question: '次の2語の oo は同じ読み方か。　book ／ school',
        wrongAnswer: '同じ（どちらも「ウー」とのばす）',
        trapExplanation:
          'つづりが同じ oo なので、読み方も同じだと考えてしまう。日本語のカタカナ表記でも「ブック」「スクール」と、どちらも「ウ」に見えるため気づきにくい。',
        correctAnswer: 'ちがう（book は短い「ウ」、school はのばす「ウー」）',
        correctExplanation:
          'oo には短い「ウ」（book, look, good, cook, foot）と長い「ウー」（school, food, moon, room, too, zoo）の2つの読み方がある。k で終わる語は短くなることが多い。読みのちがいは書き取りには影響しないが、聞き取りと音読では区別が必要である。',
      },
    ],
  },

  {
    id: 'eigo_s014',
    subject: 'eigo',
    examType: 'chugaku',
    title: '二重母音①：oi／oy と ou／ow',
    description: '発音のとちゅうで口の形が動く母音を、動きの向きとして理解する',
    order: 514,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '二重母音＝1つの母音から別の母音へ、口の形が動きながら出す音。',
      'oi／oy（オイ）… とちゅうは oi（coin, point）、語末は oy（boy, toy, enjoy）。',
      'ou／ow（アウ）… とちゅうは ou（house, out, about）、語末や語中の一部は ow（now, how, town, brown）。',
      'ow には「オウ」と読む場合もある（snow, know, show, window）。意味で見分ける。',
      '二重母音は日本語の「アイ・オイ・アウ」より、なめらかに1つの音としてつなげる。',
    ],
    sections: [
      {
        heading: '口の形が動く母音',
        body: `二重母音とは、1つの母音から別の母音へ口の形を動かしながら出す音のことである。始まりの音と終わりの音がちがうので、日本語の短い母音とは感じがちがう。

■ oi／oy（オイ）
口を丸くして「オ」で始まり、口を横に開いて「イ」で終わる。
とちゅう… coin, point, join, oil, voice, boil, noise
語末… boy, toy, joy, enjoy, soy
■ ou／ow（アウ）
口を大きく開けて「ア」で始まり、口をすぼめて「ウ」で終わる。
とちゅう… house, out, about, mouth, cloud, sound, count, mountain
語末・語中… now, how, cow, town, down, brown, flower

■ 位置で使い分ける
oi と oy、ou と ow の関係は、ai と ay、oa と ow の関係と同じである。語のとちゅうでは i や u を使い、語の終わりでは y や w を使う。英語では語の最後に i や u を置きたがらない、というくせがあるためである。

★ ポイント：二重母音は2つの音を続けて言うのではなく、口を動かしながら1つの音として出す。boy を「ボ・イ」と切らずに「ボイ」となめらかに出す。`,
        figureId: 'lf_eigoext01_014',
      },
      {
        heading: 'ow の2つの読み方',
        body: `ow には2通りの読み方があり、これがまちがえやすい。

■ アウと読む ow
now（今）, how（どのように）, cow（牛）, town（町）, down（下へ）, brown（茶色）, flower（花）, crowd（群衆）
■ オウと読む ow
snow（雪）, know（知っている）, show（見せる）, low（低い）, slow（おそい）, window（窓）, yellow（黄色）, grow（育つ）, throw（投げる）

■ 見分けるヒント
・語末が -ow で2音節の語（window, yellow, follow, tomorrow）は「オウ」が多い。
・1音節で -own, -owd の形（town, down, brown, crowd）は「アウ」が多い。ただし known, shown, own は「オウ」なので例外。
・結局のところ、語ごとに覚えるのがいちばん確実である。

■ 意味で確かめる
How are you?（アウ）／I know it.（オウ）
Sit down.（アウ）／It is snowing.（オウ）

⚠ 注意：know（知っている）と now（今）は、つづりが1字ちがうだけで読み方も意味もまったくちがう。know は k を読まないので「ノウ」、now は「ナウ」である。書き取りでよく混同する。`,
      },
    ],
    trapExamples: [
      {
        question: '「I know his name.」の know の読み方を答えなさい。',
        wrongAnswer: 'ナウ（now と同じ読み方をした）',
        trapExplanation:
          'know と now はつづりが1字しかちがわず、どちらもよく出る語なので混同する。さらに know の頭の k を読まないことを知らないと、「クノウ」と読んでしまう場合もある。',
        correctAnswer: 'ノウ（[noʊ]）',
        correctExplanation:
          'know の k は読まない文字（サイレントレター）で、ow は「オウ」と読む。だから know は no（いいえ）とまったく同じ発音になる。now（今）は「ナウ」で別の語である。knife, knee, knock も同じく k を読まない仲間。',
      },
      {
        question: '「コイン」を表す英単語のつづりとして正しいのはどちらか。　coyn ／ coin',
        wrongAnswer: 'coyn',
        trapExplanation:
          'boy や toy で oy を先に習うため、「オイ」の音はすべて oy と書くと思いこんでしまう。位置によって使い分けるというきまりを知らないと必ず引っかかる。',
        correctAnswer: 'coin',
        correctExplanation:
          '「オイ」の音は、語のとちゅうでは oi（coin, point, join, oil, voice）、語の終わりでは oy（boy, toy, joy, enjoy）と書く。英語は語末に i を置きたがらないため、y に変える。同じきまりが ai／ay、ou／ow にもあてはまる。',
      },
    ],
  },

  {
    id: 'eigo_s015',
    subject: 'eigo',
    examType: 'chugaku',
    title: '二重母音②：au／aw と oo',
    description: 'au・aw の「オー」と、oo の長短2種類の読み分けを整理する',
    order: 515,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'au／aw は「オー」と読む。とちゅうは au（autumn, because）、語末は aw（saw, draw, law）。',
      'all・alk・alt の a も「オー」になる（ball, call, small, walk, talk, salt）。',
      'oo は長い「ウー」（school, food, moon）と短い「ウ」（book, look, good）の2種類。',
      '-ook で終わる語（book, look, cook, took）はほぼ短い「ウ」。',
      'walk・talk の l は読まない。この2語は「オーク」と読む。',
    ],
    sections: [
      {
        heading: 'au／aw と al の「オー」',
        body: `日本語の「オー」に近い音を表すつづりは何通りもある。まとめて整理しておく。

■ au（語のとちゅう）
autumn（秋）, because（なぜなら）, August（8月）, sauce（ソース）, daughter（むすめ）, caught（catch の過去形）
■ aw（語の終わり・語中）
saw（see の過去形）, draw（かく）, law（法律）, straw（ストロー）, lawn（しばふ）, dawn（夜明け）
■ all の a
ball, call, small, tall, wall, fall, all
■ alk・alt の a
walk, talk, chalk（l は読まない）／salt, halt

■ 位置のきまりは同じ
au と aw の使い分けも、ai／ay、oi／oy と同じ考え方である。語のとちゅうは u、語の終わりは w。

■ 注意すべき語
because は日本人が読みまちがえやすい語で、「ビコーズ」と読む。「ビカウス」ではない。
daughter は gh を読まないので「ドーター」。
caught（catch の過去形）、bought（buy の過去形）、thought（think の過去形）も gh を読まず「コート」「ボート」「ソート」に近い音になる。

★ ポイント：walk と talk の l は読まない。「ウォーク」「トーク」と読む。work（仕事）とは別の語なので注意する。`,
      },
      {
        heading: 'oo の長短を見分ける',
        body: `oo は英語の中でもとくに読み分けが必要なつづりである。

■ 長い「ウー」
school, food, moon, room, soon, too, zoo, pool, cool, tool, roof, noon, afternoon, choose
■ 短い「ウ」
book, look, good, cook, took, foot, wood, stood, hook, shook

■ 見分けの目安
①-ook で終わる語はほぼ短い「ウ」… book, look, cook, took, shook, hook
②-ood は分かれる… good, stood, wood は短い／food, mood は長い
③-oon, -ool, -oom は長い… moon, soon, school, pool, room

■ 音のちがい
長い「ウー」は口を強くすぼめてのばす。短い「ウ」は口の力を抜いて短く出す。日本語の「ウ」は短い「ウ」に近い。

■ よく出る組み合わせ
go to school（学校へ行く）／read a book（本を読む）
foot（足）の複数形は feet。food（食べ物）とは別の語。

⚠ 注意：foot（足・単数）と feet（足・複数）と food（食べ物）を混同しないこと。つづりも意味もちがう3語である。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は毎日歩いて学校へ行きます。」の「歩く」にあたる語 walk の読み方を答えなさい。',
        wrongAnswer: 'ウォルク（l をはっきり発音した）',
        trapExplanation:
          'つづりに l があるので、そのまま音にしてしまう。日本語のカタカナ語「ウォーキング」でも「ウォ」と「キ」のあいだに音がないため、l を入れるとかえって不自然になることに気づきにくい。',
        correctAnswer: 'ウォーク（[wɔːk]。l は読まない）',
        correctExplanation:
          'walk, talk, chalk の l は読まない文字である。walk は「ウォーク」、talk は「トーク」と読む。似た形の work（仕事・働く）は「ワーク」で、母音の音がちがう別の語なので混同しないこと。',
      },
      {
        question: '「食べ物」を表す語のつづりを書きなさい。',
        wrongAnswer: 'fut',
        trapExplanation:
          '「フード」という音を短くとらえて、u の1字で書いてしまう。また foot（足）と food（食べ物）が音でもつづりでも似ているため、混同することもある。',
        correctAnswer: 'food',
        correctExplanation:
          'food は oo を長い「ウー」と読む語で、school, moon, room と同じ仲間である。foot（足・単数）は同じ oo でも短い「ウ」で、意味も別。食べ物 food、足 foot、複数の足 feet の3語をまとめて確かめておく。',
      },
    ],
  },

  {
    id: 'eigo_s016',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'r のついた母音：ar／or／er／ir／ur',
    description: '母音字のあとに r が来ると音が変わるきまりを、5つのつづりで整理する',
    order: 516,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '母音字のあとに r が来ると、短母音でも長母音でもない特別な音になる。',
      'ar は「アー」（car, park, star, hard, garden）。',
      'or は「オー」（for, short, morning, north, sport）。',
      'er・ir・ur はすべて同じ「アー」に近い音（her, bird, turn）。この3つは音では区別できない。',
      'w のあとの ar は「オー」（warm, war）、w のあとの or は「アー」（work, world, word）になる。',
    ],
    sections: [
      {
        heading: '5つのつづりと音',
        body: `母音字のあとに r が来ると、その母音は短母音でも長母音でもない特別な音になる。これを r 音性母音という。英語らしい音の代表なので、しっかり練習する。

■ ar（アー）
car, park, star, hard, farm, garden, market, party, start, dark
■ or（オー）
for, short, morning, north, sport, story, corner, born, or
■ er（アー）
her, teacher, water, sister, brother, winter, summer, dinner, letter, computer
■ ir（アー）
bird, girl, first, third, shirt, dirty, birthday, circle
■ ur（アー）
turn, hurt, church, nurse, purple, Thursday, burn, return

■ er・ir・ur は同じ音
つづりは3通りあるが、音はほとんど同じである。だから「音を聞いてつづりを決める」ことができない。書き取りでは語ごとに覚える必要がある。
例）her（彼女の）／bird（鳥）／turn（曲がる）は、母音の音が同じ。

★ ポイント：er は語の終わりに多い（teacher, water, sister）。「〜する人」を表す -er、比較級の -er も同じ音である。`,
      },
      {
        heading: '例外と、まちがえやすい語',
        body: `■ w のあとでは音が入れかわる
w のあとの ar は「オー」になる。
　warm（あたたかい）, war（戦争）, toward, warn
w のあとの or は「アー」になる。
　work（働く）, world（世界）, word（語）, worm（虫）, worse
つまり warm は「ウォーム」、work は「ワーク」である。この2語は入れかわりやすいので、セットで覚える。

■ walk／work／wark
walk（歩く）＝ウォーク（l は読まない）
work（働く）＝ワーク
この2語は日本語のカタカナでは近いが、英語では母音がまったくちがう。

■ 語の終わりの -er, -or, -ar
「〜する人・〜するもの」を表す語尾は3通りある。
-er … teacher, singer, player, writer, driver, worker
-or … doctor, actor, visitor, sailor
-ar … 数は少ない（liar など）
どれも同じ「アー」の音なので、つづりは語ごとに覚える。doctor を doctar、teacher を teachor と書くまちがいが多い。

⚠ 注意：first（1番目）, third（3番目）, thirteen（13）, thirty（30）はすべて ir を使う。これらは数の語として入試頻出なので、まとめて確認する。`,
      },
    ],
    trapExamples: [
      {
        question: '「医者」を表す英単語を書きなさい。',
        wrongAnswer: 'docter',
        trapExplanation:
          '「〜する人」を表す語尾を -er と覚えているため、doctor にもあてはめてしまう。er と or は発音がまったく同じなので、音を頼りにすると区別できない。',
        correctAnswer: 'doctor',
        correctExplanation:
          '「〜する人」の語尾には -er（teacher, singer, player）と -or（doctor, actor, visitor）の2通りがあり、音は同じ「アー」である。音では決められないので、語ごとにつづりを覚えるしかない。doctor, actor, visitor, sailor をまとめて覚えておく。',
      },
      {
        question: '次の2語の母音の音は同じか。　warm ／ work',
        wrongAnswer: '同じ（どちらも w のあとなので同じ音になる）',
        trapExplanation:
          'w のあとに r 付きの母音が来る語だという点が共通しているため、同じ音になると考えてしまう。ar と or の通常の読みをそのままあてはめても、逆の答えになる。',
        correctAnswer: 'ちがう（warm は「ウォーム」、work は「ワーク」）',
        correctExplanation:
          'w のあとでは音が入れかわる。ふつう ar は「アー」だが w のあとでは「オー」になり（warm, war）、ふつう or は「オー」だが w のあとでは「アー」になる（work, world, word）。この入れかわりは覚えるしかないが、warm と work の2語を代表として押さえておけば思い出せる。',
      },
    ],
  },

  // ────────── 4. 子音連結・二重子音字（s017〜s022） ──────────
  {
    id: 'eigo_s017',
    subject: 'eigo',
    examType: 'chugaku',
    title: '子音連結①：語頭の bl・cl・br・cr など',
    description: '子音が2つ続く語頭の音を、母音を入れずにつなげて読めるようにする',
    order: 517,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '英語は子音を続けて発音できる。日本語は「子音＋母音」が原則なので、ここが最大の壁になる。',
      'l 型：bl（blue）、cl（class）、fl（flower）、gl（glass）、pl（play）、sl（sleep）。',
      'r 型：br（brother）、cr（cry）、dr（drink）、fr（friend）、gr（green）、pr（present）、tr（train）。',
      'つづりは2字でも、音は2つ。あいだに「ウ」や「オ」を入れない（×ブルー・ライト）。',
      '語頭に子音は最大3つまで並ぶ（str-, spr-, scr-, spl-）。',
    ],
    sections: [
      {
        heading: '日本語との決定的なちがい',
        body: `日本語は「か・き・く・け・こ」のように、子音のあとに必ず母音が付く。だから子音だけを続けて出す習慣がない。一方、英語は子音を2つでも3つでも続けて出せる。ここが日本人にとって最大の壁である。

■ 語頭に子音が2つ並ぶ形
l を含むもの：bl, cl, fl, gl, pl, sl
　blue, black, blackboard／class, clean, clock, close／flower, fly, floor／glass, glad／play, please, plane／sleep, slow
r を含むもの：br, cr, dr, fr, gr, pr, tr
　brother, bread, bring／cry, cross／drink, dream, drive／friend, from, fruit／green, great, grow／present, pretty／train, tree, try

■ まちがえやすい発音
blue を「ブルー」と読むと、b と l のあいだに「ウ」が入ってしまい、英語では別の語のように聞こえる。正しくは b と l をすきまなく続けて出す。
train を「トレイン」と読むと t のあとに「オ」が入る。t と r を続けて出す。

■ 練習の方法
①まず子音2つだけを続けて言う（bl, bl, bl）
②そのあとに母音をつける（blu-）
③語全体を言う（blue）

★ ポイント：カタカナ語になっている語ほどまちがえやすい。「ブラック」「クラス」「グラス」「プレゼント」は、すべて日本語では母音が入っている。`,
        figureId: 'lf_eigoext01_017',
      },
      {
        heading: '書き取りで落とさないために',
        body: `子音連結は、発音だけでなく書き取りでも落としやすい。日本語の耳では、2つ目の子音が聞こえないことがあるためである。

■ 落としやすい文字
class を cass、friend を fiend、green を geen と書いてしまう例が多い。声に出して「ク・ラ」と2つの音があることを確かめてから書く。

■ l と r の書き分け
子音連結では l と r のどちらが入るかで意味が変わる。
glass（コップ・ガラス）／grass（草）
fly（飛ぶ）／fry（あげる）
play（遊ぶ）／pray（いのる）
clown（道化師）／crown（王冠）
blue（青）／brew（作る）
どれも入試や英検で問われる組み合わせである。

■ 意味から判断する
I drink a glass of milk.（コップ1ぱいの牛乳）→ glass
The dog is running on the grass.（しばふの上）→ grass
Birds can fly.（飛ぶ）→ fly

⚠ 注意：日本語のカタカナ語は l と r を区別しないので、「グラス」「フライ」といったカタカナ語からつづりを決めてはいけない。必ず意味から決める。`,
      },
    ],
    trapExamples: [
      {
        question: '「牛乳をコップ1ぱい飲む」の「コップ」にあたる語を書きなさい。（I drink a （　） of milk.）',
        wrongAnswer: 'grass',
        trapExplanation:
          '日本語では l と r をどちらも「ラ行」で表すため、「グラス」という音からつづりを決めようとすると、glass と grass のどちらも同じに思える。grass のほうが先に頭にうかぶ人も多い。',
        correctAnswer: 'glass（I drink a glass of milk.）',
        correctExplanation:
          'glass はコップ・ガラス、grass は草・しばふである。a glass of milk（コップ1ぱいの牛乳）という決まった言い方で覚える。同じ組み合わせに fly（飛ぶ）／fry（あげる）、play（遊ぶ）／pray（いのる）、clown（道化師）／crown（王冠）がある。',
      },
      {
        question: '「友だち」を表す英単語を書きなさい。',
        wrongAnswer: 'fiend',
        trapExplanation:
          'friend は「フレンド」と読むが、日本語の耳では r の音が母音にまぎれて聞こえにくい。さらに ie の部分を「エ」と読むという例外もあり、音からつづりを組み立てようとすると必ずくずれる。',
        correctAnswer: 'friend',
        correctExplanation:
          'friend は f－r の子音連結で始まり、ie を「エ」と読む例外語である。fr の連結を落とさないよう「フ・レ」ではなく「フル」と続けて音を確かめてから書く。fiend は実在する別の語（悪魔）なので、まちがえても気づきにくい。',
      },
    ],
  },

  {
    id: 'eigo_s018',
    subject: 'eigo',
    examType: 'chugaku',
    title: '子音連結②：s で始まる連結と3つ続く音',
    description: 'sk・sp・st などの s 連結と、str・spr のように3つ続く形を練習する',
    order: 518,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      's＋子音の形：sc/sk（school）、sm（small）、sn（snow）、sp（sport）、st（stop）、sw（swim）、sl（sleep）。',
      's＋子音＋子音の形：str（street）、spr（spring）、scr（scream）、spl（splash）、squ（square）。',
      's のあとの p・t・k は、息を強く出さずに濁ったように聞こえる（sports は「スポーツ」ではなく「スポーツ」に近い）。',
      '語末の子音連結も多い：-st（best）、-nd（and）、-nt（want）、-mp（jump）、-nk（think）、-sk（ask）。',
      '日本語のカタカナ語は必ず母音を入れてしまうので、カタカナで確認しない。',
    ],
    sections: [
      {
        heading: 's で始まる子音連結',
        body: `s は、ほかの子音と組んで語の最初に立つことがとても多い文字である。

■ s＋子音（2つ）
sc/sk … school, sky, skate, skirt
sm … small, smile, smoke
sn … snow, snake
sp … sport, speak, spring, spoon
st … stop, study, star, student, stand
sw … swim, sweet, sweater
sl … sleep, slow

■ s＋子音＋子音（3つ）
str … street, strong, string, strange
spr … spring, spread
scr … scream, screen
spl … split
squ … square

英語の語頭に立てる子音は最大3つで、しかも1つ目は必ず s である。これは英語の音のきまりで、例外はない。

■ 発音の注意
s のあとの p・t・k は息を強く出さない。だから speak の p は、日本語の「ペ」より「ベ」に近く聞こえる。student の t も「デュ」に近く聞こえることがある。

★ ポイント：street は s－t－r の3つの子音が続く。「ストリート」とカタカナで言うと母音が3つも入ってしまう。3子音をひとかたまりで練習する。`,
      },
      {
        heading: '語末の子音連結',
        body: `語の終わりにも子音が続く。英語は語末に最大4つまで子音を並べることができる（texts など）。

■ よく出る語末の連結
-st … best, first, last, must, fast, just, west
-nd … and, hand, find, friend, second, kind
-nt … want, front, point, student, present
-mp … jump, camp, lamp
-nk … think, thank, drink, pink, bank
-sk … ask, desk, task
-lk … milk, walk（l は読まない）
-nch … lunch, bench
-ct … act, fact, correct

■ 落としやすい音
and を「アン」、hand を「ハン」と発音・表記してしまうと d が消える。英語では最後の d までしっかり形にする（強く発音はしないが、口の形は作る）。

■ 複数形や過去形が付くとさらに増える
desk → desks（-sks の3子音）
ask → asked（-skt の3子音）
text → texts（-ksts の4子音）
最後まで言い切ろうとせず、口の形だけ作れば十分である。

⚠ 注意：書き取りでは、聞こえにくい語末の子音こそ落としやすい。「意味の通る形になっているか」を最後に確認する（friend の d、second の d を落とすと別の語になる）。`,
      },
    ],
    trapExamples: [
      {
        question: '「通り・street」の音はいくつの子音で始まっているか。',
        wrongAnswer: '2つ（st の2文字なので2つ）',
        trapExplanation:
          'つづりの「st」だけを見て数えてしまい、そのあとの r を母音の一部だと考えてしまう。カタカナの「ストリート」では「ス・ト・リ」と母音が入るため、なおさら数えにくい。',
        correctAnswer: '3つ（s／t／r）',
        correctExplanation:
          'street は s－t－r の3つの子音が母音なしで続いている。英語で語頭に置ける子音は最大3つで、そのときの1つ目は必ず s である（str-, spr-, scr-, spl-）。日本語には子音を3つ続ける形がないので、意識して練習する必要がある。',
      },
      {
        question: '「私は2番目に着きました。」の「2番目」にあたる語を書きなさい。',
        wrongAnswer: 'secon',
        trapExplanation:
          '語末の -nd は、d の音がほとんど聞こえないため、聞いたとおりに書くと d が落ちる。and を「アン」、hand を「ハン」と覚えている人ほどこの落とし方をする。',
        correctAnswer: 'second',
        correctExplanation:
          '語末の -nd は、d をはっきり響かせなくても文字としては必ず書く。and, hand, find, friend, second, kind が同じ形である。書き取りでは、語末の子音を落としていないかを最後に必ず点検する。',
      },
    ],
  },
  {
    id: 'eigo_s019',
    subject: 'eigo',
    examType: 'chugaku',
    title: '二重子音字①：sh と ch',
    description: '2文字で1つの音を表すつづり sh・ch・tch のきまりを覚える',
    order: 519,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '2文字で1つの音を表すつづりを二重子音字という（sh, ch, th, ph, wh, ck, ng）。',
      'sh は「シュ」（she, fish, shop, wash, English）。',
      'ch は「チ」（chair, lunch, teach, children, watch）。',
      '短母音のすぐあとで「チ」の音が語末に来るときは tch と書く（watch, catch, kitchen）。',
      'ch を「ク」と読む語もある（school, Christmas, stomach）。ギリシャ語から来た語に多い。',
    ],
    sections: [
      {
        heading: 'sh と ch の音',
        body: `2つの文字が組んで1つの音を表すつづりを二重子音字（digraph）という。sh・ch・th・ph・wh・ck・ng がその代表で、どれも「2文字で1音」である。文字の数と音の数がずれるので、書き取りのときに意識が必要になる。

■ sh（シュ）
語頭… she, shop, ship, short, shoe, shine
語中・語末… fish, wash, dish, English, finish, brush, push
くちびるを前に出して、息を細く出す。日本語の「シ」より息の音が強い。

■ ch（チ）
語頭… chair, cheese, children, chocolate, church, cherry
語中・語末… lunch, teach, beach, much, rich, March
舌を上あごにつけてから、はじくように離す。

■ 音の数を数える
fish は f－i－sh の3音（文字は4つ）。
lunch は l－u－n－ch の4音（文字は5つ）。
文字数と音の数がちがうことをつねに意識する。

★ ポイント：sh は「静かに」の合図（Shh!）と同じ音、ch は電車の音（チャッチャッ）と同じ音、というふうに身近な音と結びつけて覚えると忘れにくい。`,
      },
      {
        heading: 'tch のきまりと、ch の例外',
        body: `■ いつ tch と書くか
語末で「チ」の音になるとき、直前が短母音1字なら tch と書く。
　watch, catch, match, kitchen, witch
直前が長母音や子音なら ch のままでよい。
　teach（ea の長母音）, beach, each／lunch（n という子音のあと）, March, bench

■ 同じきまりが ck にもある
語末で「ク」の音になるとき、直前が短母音1字なら ck と書く。
　back, black, clock, duck, kick, sick, rock
長母音や子音のあとは k のままである。
　book（oo）, week, milk（l のあと）, think

■ ch を「ク」と読む語
ギリシャ語からきた語では ch を「ク」と読む。
　school, Christmas, stomach（胃）, chorus, character, headache（頭痛）
school は「スクール」であって「シュクール」ではない。数は多くないので、出てきたら覚える。

■ ch を「シュ」と読む語
フランス語からきた語では「シュ」になる。
　machine（機械）, chef, Chicago
machine は「マシーン」と読む。

⚠ 注意：watch を wach、catch を cach と書くまちがいが非常に多い。「短い母音のあとの語末のチは tch」と唱えて覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「時計・腕時計」を表す英単語を書きなさい。',
        wrongAnswer: 'wach',
        trapExplanation:
          '「チ」の音を ch と書くと習うため、そのまま当てはめてしまう。音だけを聞いても t は聞こえないので、t が必要だとは気づけない。',
        correctAnswer: 'watch',
        correctExplanation:
          '語末の「チ」の音は、直前が短母音1字のときは tch と書く。watch, catch, match, kitchen が同じ形。teach や lunch のように直前が長母音や子音の場合は ch のままでよい。同じきまりが「ク」の音の ck（back, clock）にもあてはまる。',
      },
      {
        question: '「school」の ch はどのように読むか。',
        wrongAnswer: 'チ（「シュクール」「チュクール」のように読む）',
        trapExplanation:
          'ch＝「チ」と1対1で覚えてしまうと、例外の語に出会ったときに対応できない。school はよく使う語なので、実際にはカタカナの「スクール」で覚えていて、つづりと音の対応を考えたことがない場合も多い。',
        correctAnswer: 'ク（[k]。「スクール」と読む）',
        correctExplanation:
          'ギリシャ語からきた語では ch を「ク」と読む。school, Christmas, stomach, chorus, headache が代表例である。また、フランス語からきた machine では「シュ」と読む。ch には「チ・ク・シュ」の3通りがあると整理しておく。',
      },
    ],
  },

  {
    id: 'eigo_s020',
    subject: 'eigo',
    examType: 'chugaku',
    title: '二重子音字②：ph・ck・ng',
    description: 'ph が f の音になる理由と、ck・ng の使い方を整理する',
    order: 520,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'ph は f と同じ音（phone, photo, elephant, alphabet, dolphin）。ギリシャ語からきた語に多い。',
      'ck は k と同じ音。短母音1字のすぐあとの語末で使う（back, clock, duck）。',
      'ng は「ング」ではなく、鼻に抜ける1つの音（sing, long, king, spring）。',
      '-ing の形（現在進行形・動名詞）もこの ng の音。「イング」と2つに切らない。',
      'nk（think, thank, pink）も同じ鼻の音＋k の組み合わせ。',
    ],
    sections: [
      {
        heading: 'ph と ck',
        body: `■ ph は f の音
ph は2文字で f と同じ音を表す。ギリシャ語からきた語に多い。
　phone（電話）, telephone, photo（写真）, photograph, elephant（ゾウ）, alphabet, dolphin（イルカ）, graph, nephew（おい）
なぜ f と書かないのかというと、もともとギリシャ語の文字を写した名残だからである。理由は覚えなくてよいが、「ph＝f」と「ギリシャ語系の語に多い」ことは覚えておく。

■ ck は k の音
ck も2文字で1つの「ク」の音を表す。使う場所が決まっている。
◎短母音1字のすぐあと、語末で使う
　back, black, clock, duck, kick, sick, rock, pocket, chicken
◎長母音・二重母音・子音のあとは k だけ
　book, week, look, milk, think, bank, dark, park, make, bike

■ 見分け方の練習
「マク」の音で終わる語… 直前が短い a なら ck（black）
「メイク」の音で終わる語… 長母音なので k（make）
「ミルク」… 直前が l という子音なので k（milk）

★ ポイント：ck と tch は、まったく同じきまりで使い分ける。「短母音1字のすぐあと、語末」のときだけ2文字になる。`,
      },
      {
        heading: 'ng の音',
        body: `■ ng は1つの音
ng は「ン」と「グ」の2つではなく、鼻に息を抜きながら出す1つの音である。日本語の「りんご」の「ん」の音に近い。
　sing, song, long, king, ring, spring, strong, young, thing, morning, English

■ -ing の形
動詞に付ける -ing も同じ音である。
　playing, running, swimming, studying, going, coming
日本語では「プレイング」とカタカナで書くが、最後の「グ」を強く出す必要はない。むしろ強く出すと不自然になる。

■ nk の音
think, thank, drink, pink, bank, sink も、n の部分が同じ鼻の音になる。ng の仲間として覚える。

■ 語の中の ng
finger（指）, England, hungry, angry は、ng のあとに g の音がもう1つ聞こえる。
一方 singer（歌手）, ringing は g の音が加わらない。
この区別は入試では問われないが、音読のときに知っていると自然に読める。

⚠ 注意：ing を「イ・ン・グ」と3つに切って発音・表記すると、日本語なまりが強くなる。「ング」をひとかたまりの鼻の音として練習する。`,
      },
    ],
    trapExamples: [
      {
        question: '「写真」を表す英単語 photo の ph はどのように読むか。',
        wrongAnswer: 'プ（p と h をそのまま読んで「プホト」とする）',
        trapExplanation:
          'ローマ字の感覚では p と h をそれぞれ読むのが自然に思える。ph が2文字で1つの音を表すことを知らないと、必ずこう読んでしまう。',
        correctAnswer: 'f と同じ音（「フォウトウ」と読む）',
        correctExplanation:
          'ph は2文字で f の音を表す。photo, phone, elephant, alphabet, dolphin, graph が代表例で、ギリシャ語からきた語に多い。書き取りでは「フ」の音を f と書くか ph と書くかで迷うが、これらの語はつづりごと覚える。',
        },
      {
        question: '「黒い」を表す英単語を書きなさい。',
        wrongAnswer: 'blak',
        trapExplanation:
          '音を聞いて b－l－a－k と1音1文字であてはめると、ck が k 1字になってしまう。ck という2文字のつづりが必要な場所のきまりを知らないと防げない。',
        correctAnswer: 'black',
        correctExplanation:
          '語末の「ク」の音は、直前が短母音1字のときは ck と書く。black, back, clock, duck, kick, rock が同じ形。長母音のあと（book, week）や子音のあと（milk, think）は k 1字でよい。tch のきまりとまったく同じ考え方である。',
      },
    ],
  },

  {
    id: 'eigo_s021',
    subject: 'eigo',
    examType: 'chugaku',
    title: '二重子音字③：th の2つの音',
    description: '日本語にない th の音を、有声と無声の2種類に分けて練習する',
    order: 521,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'th は上下の歯のあいだに舌先を軽くはさんで出す音。日本語には存在しない。',
      '無声の th（息だけ）… think, three, thank, month, bath, mouth, north, birthday。',
      '有声の th（声を出す）… this, that, these, those, the, they, mother, father, brother, weather。',
      'the・this・that など、よく使う短い語はほとんど有声。',
      'th を s や z、あるいは t や d に置きかえると別の語になってしまう（think／sink、they／day）。',
    ],
    sections: [
      {
        heading: 'th の出し方',
        body: `th は日本語にまったくない音である。だからこそ、意識して練習しなければ一生出せるようにならない。

■ 口の形
上下の歯を軽く合わせ、そのあいだに舌先を少しだけはさむ。舌を強く出す必要はなく、軽く触れる程度でよい。その状態で息を出す。

■ 2種類ある
①無声の th（息だけ。のどはふるえない）
　think, thank, three, thirty, Thursday, month, bath, mouth, tooth, north, birthday, healthy, something
②有声の th（声を出す。のどがふるえる）
　this, that, these, those, the, they, them, there, then, mother, father, brother, other, weather, together, with

■ 見分けの目安
・the, this, that, they のように、文をつなぐはたらきをする短い語は有声。
・数を表す語（three, thirty, third）は無声。
・語末の -th はほとんど無声（month, bath, mouth, north, tooth）。
・-ther で終わる語はほとんど有声（mother, father, brother, other, weather）。

★ ポイント：どちらの th も口の形は同じで、声を出すか出さないかだけがちがう。b／p、d／t の関係と同じである。`,
        figureId: 'lf_eigoext01_021',
      },
      {
        heading: '置きかえると別の語になる',
        body: `th を出せないと、日本人はつい s・z・t・d のどれかに置きかえてしまう。しかしそれらは英語では別の音であり、別の語になってしまう。

■ 無声の th を s にすると
think（考える）→ sink（しずむ）
thick（厚い）→ sick（病気の）
mouth（口）→ mouse（ねずみ）※つづりもちがう
■ 有声の th を d にすると
they（彼らは）→ day（日）
then（そのとき）→ den（ほらあな）
■ 有声の th を z にすると
breathe（呼吸する）→ breeze（そよ風）

■ 練習の順序
①舌先を歯のあいだにはさんだまま、息だけを出す（thhhh）
②そこに母音をつける（thi-）
③語にする（think）
④文にする（I think so.）

■ 数を表す語で練習する
three, third, thirteen, thirty, thousand は、すべて無声の th で始まる。数の練習と th の練習を同時にできる。

⚠ 注意：th のあとに r が続く three, throw, through は、th と r という日本語にない音が2つ続く。とくにゆっくり練習する。`,
      },
    ],
    trapExamples: [
      {
        question: '次の2語は同じ音で始まるか。　three ／ the',
        wrongAnswer: '同じ（どちらも th なので同じ音）',
        trapExplanation:
          'つづりが同じ th なので、音も1種類しかないと思ってしまう。日本語では「ス」「ズ」と別々に置きかえて覚えていることが多く、それが同じつづりだと気づいていない場合もある。',
        correctAnswer: 'ちがう（three は息だけの無声、the は声を出す有声）',
        correctExplanation:
          'th には無声（think, three, month, bath）と有声（the, this, that, mother）の2種類がある。口の形はまったく同じで、のどをふるわせるかどうかだけがちがう。b／p、d／t、v／f と同じ関係である。',
      },
      {
        question: '「私はそう思います。」を英語で書きなさい。',
        wrongAnswer: 'I sink so.',
        trapExplanation:
          'th の音を出せないと s に置きかえて覚えてしまい、つづりまで s で書いてしまう。sink（しずむ）は実在する語なので、文としては成り立ってしまい、まちがいに気づきにくい。',
        correctAnswer: 'I think so.',
        correctExplanation:
          'think（考える・思う）は無声の th で始まる。s に置きかえると sink（しずむ）という別の語になり、「私はそのようにしずみます」という意味不明の文になってしまう。thick（厚い）／sick（病気の）も同じ組み合わせなので、あわせて確認する。',
      },
    ],
  },

  {
    id: 'eigo_s022',
    subject: 'eigo',
    examType: 'chugaku',
    title: '二重子音字④：wh と qu',
    description: '疑問詞に多い wh と、必ずセットで使う qu のきまりを覚える',
    order: 522,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'wh はふつう w と同じ音（what, when, where, which, white, why）。',
      'ただし who・whose・whom・whole は h の音になり、w は読まない。',
      '疑問詞は5W1H。what, when, where, who, why, how。how だけつづりが wh ではない。',
      'q は必ず u とセットで qu と書く。音は「クゥ」（question, quiet, quick, queen）。',
      'wh・qu のあとは母音が続くのがふつう。',
    ],
    sections: [
      {
        heading: 'wh の読み方',
        body: `■ 基本は w の音
wh は h を読まず、w だけの音になるのがふつうである。
　what（何）, when（いつ）, where（どこ）, which（どちら）, why（なぜ）
　white（白い）, whale（クジラ）, wheel（車輪）, while（〜のあいだ）

■ 例外：h の音になる語
次の語では逆に w を読まず、h の音になる。
　who（だれ）, whose（だれの）, whom（だれを）, whole（全体の）
who は「フー」、whose は「フーズ」、whole は「ホウル」と読む。
whole（全体の）と hole（あな）は同じ発音の別語である。

■ 疑問詞をまとめて確認する
what（何）／when（いつ）／where（どこ）／who（だれ）／why（なぜ）／which（どちら）／whose（だれの）／how（どのように）
「5W1H」と呼ばれるが、how だけは wh で始まらない。ただし h－o－w と、wh の文字を入れかえた形になっている。

■ 疑問詞は文の最初に置く
例）What is this?（これは何ですか）
例）Where do you live?（どこに住んでいますか）
例）Who is that boy?（あの男の子はだれですか）

★ ポイント：疑問詞は入試で必ず出る。つづり・意味・使い方の3点をセットで覚える。where（どこ）と wear（着る）、which（どちら）と witch（魔女）は同じ発音の別語である。`,
      },
      {
        heading: 'qu のきまり',
        body: `■ q は必ず u とセット
英語では、q のあとには必ず u が続く。q だけで終わる語も、q のあとに別の文字が来る語も、ふつうの英単語には存在しない。
　question（質問）, quiet（静かな）, quick（速い）, queen（女王）, quiz（クイズ）, quarter（4分の1）, square（正方形）, equal（等しい）

■ 音は「クゥ」
qu は k と w を続けたような音になる。question は「クエスチョン」、quick は「クイック」に近い。

■ まちがえやすい語
question は、途中の -tion を「シュン」と読む。「クエスチョン」の「チョ」の部分である。
quiet（静かな）と quite（かなり・まったく）は、つづりがよく似ていて意味がちがう。
　例）Be quiet.（静かにしなさい）／It is quite cold.（かなり寒い）

■ 数の語にも出てくる
quarter は「4分の1」「15分」の意味で、時刻の言い方に出る。
　例）It is a quarter past three.（3時15分です）

⚠ 注意：quiet と quite は、i と t の順番が入れかわっているだけ。書くときも読むときも、この2語は必ず確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「あの男の子はだれですか。」を英語で書くとき、下線部にあたる疑問詞 who の読み方を答えなさい。',
        wrongAnswer: 'ウォー（what や when と同じように w の音で読む）',
        trapExplanation:
          'wh＝w の音と覚えると、who にもそのまま当てはめてしまう。what, when, where, why を先に習うため、who だけが例外だとは思いにくい。',
        correctAnswer: 'フー（[huː]。w を読まず h の音になる）',
        correctExplanation:
          'wh のうち who, whose, whom, whole の4語だけは、w を読まずに h の音になる。それ以外（what, when, where, which, why, white）は w の音である。4語だけなので例外としてまとめて覚える。',
      },
      {
        question: '「静かにしてください。」を英語で書きなさい。（Please be （　）.）',
        wrongAnswer: 'Please be quite.',
        trapExplanation:
          'quiet と quite は、つづりが i と t の順番だけしかちがわない。書いているうちに順番が入れかわり、しかも quite も実在する語なので、見た目ではまちがいに気づきにくい。',
        correctAnswer: 'Please be quiet.',
        correctExplanation:
          'quiet は「静かな」（クワイエット、3音）、quite は「かなり・まったく」（クワイト、2音）である。音の長さもちがう。Be quiet. と It is quite cold. の2文をセットで覚えて、書くときに口に出して確かめるとまちがえない。',
      },
    ],
  },

  // ────────── 5. サイレントレターとつづりの例外（s023〜s026） ──────────
  {
    id: 'eigo_s023',
    subject: 'eigo',
    examType: 'chugaku',
    title: '読まない文字①：kn・wr・語末の -mb',
    description: '書くのに読まないサイレントレターを、パターンごとにまとめて覚える',
    order: 523,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '語頭の kn は k を読まない（know, knife, knee, knock, knot）。',
      '語頭の wr は w を読まない（write, wrong, wrist）。',
      '語末の -mb は b を読まない（climb, lamb, thumb, comb）。',
      '語頭の gn・ps も最初の文字を読まない（gnome, psychology）が、小学生には出番が少ない。',
      '読まない文字は「昔は読んでいた名残」。理由より、パターンでまとめて覚えるほうが速い。',
    ],
    sections: [
      {
        heading: '読まないのに書く文字',
        body: `英語には、書くけれども読まない文字がたくさんある。これをサイレントレター（黙字）という。書き取り問題では、この読まない文字を落とすまちがいが最も多い。

■ 語頭の kn（k を読まない）
know（知っている）, knife（ナイフ）, knee（ひざ）, knock（ノックする）, knot（結び目）
know は「ノウ」、knife は「ナイフ」と読む。

■ 語頭の wr（w を読まない）
write（書く）, wrong（まちがった）, wrist（手首）, wrap（包む）
write は「ライト」で、right（右・正しい）とまったく同じ発音になる。

■ 語末の -mb（b を読まない）
climb（登る）, lamb（子羊）, thumb（親指）, comb（くし）, bomb（爆弾）
climb は「クライム」と読む。

■ なぜ書くのか
これらは昔の英語では実際に発音されていた。発音だけが時代とともに変わり、つづりは昔のまま残った。だから理由を考えても今の音とはつながらない。パターンごとにまとめて覚えるのが最も効率がよい。

★ ポイント：書き取りでいちばん多いまちがいが「読まない文字を書き忘れる」ことである。know を no、write を rite と書いてしまわないよう、語頭の k と w を意識する。`,
      },
      {
        heading: '同じ発音の別の語に注意',
        body: `サイレントレターがあるために、まったく別の語と発音が同じになることがある。中学入試・英検で頻出の組み合わせを整理する。

■ know（知っている）／no（いいえ・1つもない）
　例）I know him.（彼を知っている）／I have no money.（お金がない）
■ write（書く）／right（右・正しい）
　例）Write your name.（名前を書きなさい）／Turn right.（右に曲がりなさい）
■ knight（騎士）／night（夜）
　例）at night（夜に）
■ hour（時間）／our（私たちの）
　例）an hour（1時間）／our school（私たちの学校）
■ whole（全体の）／hole（あな）
■ knew（know の過去形）／new（新しい）

■ 見分け方
音は同じなので、必ず意味と文の形で決める。
・「〜を知っている」なら know（あとに目的語がくる）
・「いいえ」「1つもない」なら no（あとに名詞がくるか、単独で使う）
・「書く」なら write（動詞）
・「右」「正しい」なら right

⚠ 注意：聞き取り問題では、音が同じ語が答えの候補になることがある。前後の意味からどちらかを判断する練習をしておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「あなたの名前を書きなさい。」を英語で書きなさい。（（　） your name.）',
        wrongAnswer: 'Right your name.',
        trapExplanation:
          'write と right は発音がまったく同じである。しかも right のほうが先に習うことが多く、つづりも短いので、音だけを頼りにすると right が出てきてしまう。',
        correctAnswer: 'Write your name.',
        correctExplanation:
          'write（書く）は w を読まないサイレントレターの語である。right は「右・正しい」という意味で、動詞ではないのでこの文には入らない。文の先頭で動詞から始まる命令文なので、動詞である write を選ぶ。',
      },
      {
        question: '「私はその山に登りました。」の「登った」にあたる語 climbed のつづりを書きなさい。',
        wrongAnswer: 'climed',
        trapExplanation:
          'climb の b は読まないので、音のとおりに書くと b が抜ける。読まない文字は聞き取りの手がかりがまったくないため、つづりを知らなければ必ず落とす。',
        correctAnswer: 'climbed',
        correctExplanation:
          '語末の -mb では b を読まないが、書くときは必ず b を入れる。climb, lamb, thumb, comb が同じ仲間。ed を付けても b は残るので climbed となる。読まない文字を含む語は、書く練習を多めにしておく。',
      },
    ],
  },

  {
    id: 'eigo_s024',
    subject: 'eigo',
    examType: 'chugaku',
    title: '読まない文字②：gh・l・t など',
    description: 'night・walk・listen のように語の中で消える文字を整理する',
    order: 524,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'igh の gh は読まない（night, light, right, high, bright）。読み方は「アイ」。',
      'ought・aught の gh も読まない（bought, thought, caught, daughter）。読み方は「オー」。',
      'alk・alf・alm の l は読まない（walk, talk, half, calm）。',
      'listen・often の t、island の s、Wednesday の d も読まない。',
      'gh を f と読む語もある（laugh, enough, cough）。',
    ],
    sections: [
      {
        heading: 'gh のいろいろ',
        body: `gh は、英語の中でも最も読み方が不安定なつづりである。3つのパターンに整理する。

■ ①読まない（igh の形）
night（夜）, light（光・軽い）, right（右・正しい）, high（高い）, bright（明るい）, might, sight, fight, tight
igh 全体で「アイ」と読む。i の長母音である。

■ ②読まない（ough・augh の形）
bought（buy の過去形）, thought（think の過去形）, brought（bring の過去形）, caught（catch の過去形）, taught（teach の過去形）, daughter（むすめ）
これらは「オー」と読む。動詞の過去形に多いのが特ちょうである。

■ ③f の音になる
laugh（笑う）, enough（十分な）, cough（せき）, tough（かたい）
laugh は「ラフ」、enough は「イナフ」と読む。

■ 読み方が特別な語
though（〜だけれども）は「ゾウ」、through（〜を通って）は「スルー」。この2語はつづりが似ていて読みがまったくちがうので、入試で問われやすい。

★ ポイント：不規則動詞の過去形には gh を含むものが多い（buy→bought、think→thought、bring→brought、catch→caught、teach→taught）。まとめて覚えると効率がよい。`,
      },
      {
        heading: 'l・t・s・d が消える語',
        body: `■ l を読まない語
walk（歩く）, talk（話す）, chalk（チョーク）
half（半分）, calf（子牛）
calm（静かな）, palm（手のひら）
should, would, could（助動詞。l を読まない）
would は「ウッド」、could は「クッド」、should は「シュッド」である。

■ t を読まない語
listen（聞く）→「リスン」
often（しばしば）→「オフン」（「オフトゥン」と読む人もいる）
castle（城）→「キャスル」
Christmas（クリスマス）→ t を読まない

■ s を読まない語
island（島）→「アイランド」
isle（小島）

■ d を読まない語
Wednesday（水曜日）→「ウェンズデイ」
handkerchief（ハンカチ）

■ h を読まない語
hour（1時間）, honest（正直な）, honor（名誉）

⚠ 注意：Wednesday は曜日の中でいちばんつづりをまちがえやすい。「ウェド・ネス・デイ」と、書くとき専用の読み方をして覚えるとよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「聞く」という意味の英単語 listen の読み方を答えなさい。',
        wrongAnswer: 'リストゥン（t をはっきり発音する）',
        trapExplanation:
          'つづりに t があるので、そのまま音にしてしまう。日本語のカタカナ語「リスニング」でも「リス・ニング」と t の音が入らないのに、文字を見ると読みたくなる。',
        correctAnswer: 'リスン（[ˈlɪsn]。t は読まない）',
        correctExplanation:
          'listen の t は読まない文字である。同じ仲間に often, castle, Christmas がある。listening（リスニング）も同じく t を読まない。読まない文字は、書くときには必ず必要なので、書き取りでは t を落とさないよう注意する。',
      },
      {
        question: '「水曜日」を表す英単語を書きなさい。',
        wrongAnswer: 'Wensday',
        trapExplanation:
          'Wednesday は「ウェンズデイ」と読み、d と e の音が聞こえない。音のとおりに書くと、読まない d と e が抜け落ちてしまう。曜日の中でいちばんまちがえやすい語である。',
        correctAnswer: 'Wednesday',
        correctExplanation:
          'W－e－d－n－e－s－d－a－y と9文字ある。書くときは「ウェド・ネス・デイ」と区切って唱えると覚えやすい。同じく読まない文字を含む曜日・月の語に Tuesday（チューズデイ）、February（フェブラリー、最初の r を読まないことがある）がある。曜日は大文字で書き始めることも忘れない。',
      },
    ],
  },
  {
    id: 'eigo_s025',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'つづりの例外①：c と g の2つの読み方',
    description: 'あとに続く母音字で c と g の読み方が変わるきまりを覚える',
    order: 525,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'c のあとに e・i・y が来ると「ス」の音（city, cent, cycle, ice, nice, pencil）。',
      'c のあとに a・o・u や子音が来ると「ク」の音（cat, come, cup, class, cry）。',
      'g のあとに e・i・y が来ると「ジ」の音になることが多い（gym, giant, orange, age, large）。',
      'g のあとに a・o・u が来ると「グ」の音（game, go, guitar, glass）。',
      'g には例外が多い（get, give, girl は「グ」）。c のきまりのほうが確実。',
    ],
    sections: [
      {
        heading: 'c の2つの読み方',
        body: `c は英語の中で読み方が2通りある文字である。しかも、あとに続く文字を見れば読み方が決まるという、はっきりしたきまりがある。

■ 「ク」と読む c（ハードC）
あとに a・o・u または子音が続くとき。
　cat, can, car, cake, camera
　come, cold, color, cook
　cup, cut, cute
　class, clean, cry, cross（子音が続く）

■ 「ス」と読む c（ソフトC）
あとに e・i・y が続くとき。
　cent（セント）, center, city, circle, cycle
　ice, nice, race, place, face, pencil, dance, since

■ 語の中でも同じ
1つの語の中に両方が出てくることもある。
　circle … 最初の c は i の前なので「ス」、2つ目の c は l（子音）の前なので「ク」。「サークル」と読む。

■ ck は必ず「ク」
back, clock, duck の ck は、いつでも「ク」の音である。

★ ポイント：このきまりを知っていれば、city を「キティ」と読むまちがいがなくなる。「e・i・y の前ならス」と唱えて覚える。`,
      },
      {
        heading: 'g の2つの読み方と例外',
        body: `g にも同じようなきまりがあるが、こちらは例外が多い。

■ 「グ」と読む g（ハードG）
あとに a・o・u または子音が続くとき。
　game, garden, go, good, guitar, gun, glass, green, grow

■ 「ジ」と読む g（ソフトG）
あとに e・i・y が続くとき。
　gym（体育館）, giant（巨人）, gentle, giraffe（キリン）
　orange, age, large, change, page, village, bridge, message

■ 例外（e・i の前なのに「グ」）
get, give, girl, gift, begin, forget, together, tiger
これらは日常でよく使う語ばかりなので、例外のほうが目立ってしまう。

■ dge は「ジ」
bridge（橋）, edge（へり）, judge（裁判官）。短母音のあとの「ジ」の音は dge と書く。ck や tch と同じ考え方である。

■ 語末の -ge
語末で「ジ」の音になるときは必ず e を付ける（age, page, large, change, village）。g だけで語を終えない。

⚠ 注意：g のきまりは例外が多いので、「あとが e・i・y ならジのことが多い」くらいに考え、get・give・girl は例外として先に覚えておく。`,
      },
    ],
    trapExamples: [
      {
        question: '「city（都市）」の最初の c はどのように読むか。',
        wrongAnswer: 'ク（「キティ」と読む）',
        trapExplanation:
          'c＝「ク」と1通りに覚えていると、cat や cup と同じように読んでしまう。フォニックスで最初に習う c の音が「ク」なので、こちらが強く残る。',
        correctAnswer: 'ス（「スィティ」と読む）',
        correctExplanation:
          'c のあとに e・i・y が続くときは「ス」の音になる。city, cent, circle, cycle, ice, nice, pencil, dance が同じ仲間である。a・o・u や子音が続くときは「ク」（cat, come, cup, class）。あとに続く文字を見てから読む習慣をつける。',
      },
      {
        question: '次の2語の g は同じ音か。　girl ／ giant',
        wrongAnswer: '同じ（どちらも i の前なので「ジ」の音）',
        trapExplanation:
          '「g のあとに e・i・y が来ると『ジ』」というきまりを覚えたばかりだと、例外の存在に気づかず機械的にあてはめてしまう。girl は身近な語なので、まちがえるとそのまま定着しやすい。',
        correctAnswer: 'ちがう（girl は「グ」、giant は「ジ」）',
        correctExplanation:
          'g のきまりには例外が多い。get, give, girl, gift, begin, forget, together, tiger は e・i の前でも「グ」と読む。この例外語を先に覚え、それ以外で e・i・y が続く場合は「ジ」と読む、という順で考えるとまちがえにくい。',
      },
    ],
  },

  {
    id: 'eigo_s026',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'つづりの例外②：つづりと音がずれる理由ときまり',
    description: 'なぜ英語はつづりどおりに読めないのかを知り、つづりの基本ルールを覚える',
    order: 526,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '英語は26文字で約44の音を表すので、1つの文字がいくつもの音を担当することになる。',
      '母音字は5字しかないのに、母音の音は20前後ある。ここがつづりのむずかしさの原因。',
      'i は e の前（believe, field）。ただし c のあとは ei（receive）。',
      '語末が「子音＋y」の語は、s や ed を付けるとき y を i に変える（study→studies→studied）。',
      '短母音＋子音1つで終わる語は、ing や ed を付けるとき最後の子音を重ねる（stop→stopping）。',
    ],
    sections: [
      {
        heading: 'なぜつづりどおりに読めないのか',
        body: `英語の文字は26字しかないのに、英語の音はおよそ44ある。文字より音のほうが多いので、1つの文字がいくつもの音を担当せざるをえない。とくに母音は、5つの文字で20前後の音を表している。ここが英語のつづりのむずかしさの正体である。

■ 日本語との比較
日本語のかなは、1字が1つの音に対応している。「あ」はいつでも「ア」、「か」はいつでも「カ」である。だから読み方に迷うことはない。
英語では、a という1文字が cat（ェア）、cake（エイ）、car（アー）、all（オー）、about（あいまいな音）と、5通り以上の音を表す。

■ もう1つの理由：外国語からの借用
英語は歴史の中で、フランス語・ラテン語・ギリシャ語などから大量の語を取りこんできた。取りこむときに、もとの言語のつづりをそのまま残したため、読み方のきまりが何種類も混ざってしまった。
　ph（ギリシャ語）… photo, phone
　ch を「シュ」と読む（フランス語）… machine
　ch を「ク」と読む（ギリシャ語）… school

■ だからどうするか
①フォニックスの基本のきまりを覚える（7割はこれで読める）
②残りは例外としてパターンごとに覚える
この2段構えが、いちばん効率のよい進め方である。

★ ポイント：「英語はつづりと音がずれるものだ」と最初から知っておくと、例外に出会ってもあわてない。`,
        figureId: 'lf_eigoext01_026',
      },
      {
        heading: '覚えておくと得をするつづりのきまり',
        body: `つづりの世界にも、知っていると得をするきまりがいくつかある。

■ ①i は e の前、ただし c のあとは逆
believe, field, friend, piece, chief（ie の順）
receive, ceiling（c のあとなので ei の順）
英語圏では詩のように唱えて覚える有名なきまりである。

■ ②語末が「子音＋y」なら y を i に変える
study → studies（三単現）／studied（過去形）
city → cities（複数形）／country → countries
carry → carried／try → tried／cry → cried
ただし「母音＋y」なら変えない。
play → plays／played　boy → boys　day → days

■ ③短母音＋子音1つで終わる語は、子音を重ねる
stop → stopping／stopped
run → running　swim → swimming　sit → sitting
big → bigger／biggest　hot → hotter／hottest
「1音節・母音1つ・子音1つ」の3条件がそろったときだけ重ねる。

■ ④語末の e は取ってから ing・ed を付ける
make → making　write → writing　use → used／using　live → lived／living

⚠ 注意：③と④を混同して makeing、runing と書くまちがいが非常に多い。「e があれば取る、短母音＋子音1つなら重ねる」と2つを並べて覚える。`,
      },
    ],
    trapExamples: [
      {
        question: '「run（走る）」に ing を付けて「走っている」の形にしなさい。',
        wrongAnswer: 'runing',
        trapExplanation:
          '「動詞に ing を付ける」というきまりだけで機械的に処理してしまう。母音が短いときに子音を重ねるという条件を知らないと、まちがいに気づけない。',
        correctAnswer: 'running',
        correctExplanation:
          '1音節で、母音字1つ＋子音字1つで終わる語は、ing や ed を付けるとき最後の子音を重ねる。run→running、swim→swimming、sit→sitting、stop→stopping、get→getting が同じ形。なお、母音字が2つある語（read→reading）や子音字が2つある語（help→helping）は重ねない。',
      },
      {
        question: '「study（勉強する）」を三人称単数現在の形にしなさい。',
        wrongAnswer: 'studys',
        trapExplanation:
          '三単現は s を付けると覚えているため、語の形をそのままにして s をつなげてしまう。語末が「子音＋y」のときの変化を知らないと防げない。',
        correctAnswer: 'studies',
        correctExplanation:
          '語末が「子音＋y」のときは、y を i に変えて es を付ける。study→studies、city→cities、country→countries、carry→carries が同じ形である。ただし「母音＋y」のときは変えずに s を付けるだけでよい（play→plays、boy→boys、day→days）。y の1つ前の文字を必ず確かめる。',
      },
    ],
  },

  // ────────── 6. アクセント・リズム・語尾の発音（s027〜s031） ──────────
  {
    id: 'eigo_s027',
    subject: 'eigo',
    examType: 'chugaku',
    title: '音節（シラブル）の数え方',
    description: '語をいくつのかたまりに分けて読むかを、母音の音の数で判断できるようにする',
    order: 527,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '音節＝母音の音を中心とした、語の中の音のかたまり。',
      '音節の数＝母音の音の数。母音字の数ではないことに注意（cake は母音字2つでも1音節）。',
      'あごの下に手をあてて発音し、あごが下がった回数が音節の数になる。',
      '日本語はかな1字が1拍だが、英語は音節が1拍。strike は日本語で5拍、英語では1音節。',
      '辞書では音節の区切りが中点（・）で示される（beau・ti・ful）。',
    ],
    sections: [
      {
        heading: '音節とは何か',
        body: `音節（シラブル）とは、母音の音を中心にした音のかたまりのことである。英語のリズムは、この音節を単位にして作られている。

■ 数え方
音節の数は、母音の「音」の数と同じである。母音「字」の数ではない。
　cat … 母音の音は a だけ → 1音節
　cake … 母音字は a と e の2つだが、e は読まない → 1音節
　rain … 母音字は a と i の2つだが、音は「エイ」1つ → 1音節
　apple … a と e → 2音節（ap・ple）
　banana … 3音節（ba・na・na）
　beautiful … 3音節（beau・ti・ful）
　computer … 3音節（com・pu・ter）

■ 体で確かめる方法
あごの下に手のこうをあてて、ゆっくり発音する。母音を出すときにあごが下がるので、あごが下がった回数を数えれば音節の数になる。
　strike … あごが下がるのは1回 → 1音節

■ 日本語との大きなちがい
日本語はかな1字が1拍である。「ストライク」は5拍。しかし英語の strike は1音節、つまり1拍でしかない。この差が、日本語なまりの最大の原因になる。

★ ポイント：カタカナ語を思い出したら、まず「英語では何音節か」を数え直す。ここが直ると発音が一気に英語らしくなる。`,
      },
      {
        heading: '音節で区切る練習',
        body: `語を音節で区切れるようになると、長い語も読めるようになり、アクセントの位置も考えやすくなる。

■ 2音節の語
teach・er（先生）／stu・dent（生徒）／pen・cil（えんぴつ）／win・dow（窓）／mo・ther（母）／sum・mer（夏）／of・fice（会社）／mu・sic（音楽）

■ 3音節の語
beau・ti・ful（美しい）／com・pu・ter（コンピュータ）／to・mor・row（明日）／fa・vo・rite（お気に入りの）／im・por・tant（大切な）／ex・cit・ing（わくわくする）

■ 4音節以上の語
in・ter・est・ing（おもしろい・4音節）
in・for・ma・tion（情報・4音節）
com・mu・ni・ca・tion（伝達・5音節）

■ 区切りのおおよそのきまり
①子音が2つ続くときは、そのあいだで切る（win・dow, sum・mer, pen・cil）
②子音が1つのときは、その前で切ることが多い（mu・sic, o・pen）
③接頭語・接尾語は切れ目になる（un・hap・py, teach・er, care・ful）

⚠ 注意：語末の -ed が音節を1つ増やすのは、t・d で終わる語のときだけである（want・ed は2音節、played は1音節）。次の課で学ぶ -ed の発音と関係している。`,
      },
    ],
    trapExamples: [
      {
        question: '「cake」は何音節か。',
        wrongAnswer: '2音節（母音字が a と e の2つあるから）',
        trapExplanation:
          '音節の数を「母音字の数」で数えてしまう。cake の e は読まないマジックE なので音を持たないが、文字として見えているぶん数に入れたくなる。',
        correctAnswer: '1音節',
        correctExplanation:
          '音節の数は母音の「音」の数で決まる。cake の母音の音は「エイ」1つだけなので1音節である。同じように rain（エイ）、boat（オウ）、night（アイ）もすべて1音節。母音字が2つ並んでも、音が1つなら1音節と数える。',
      },
      {
        question: '「strike」を英語のリズムで発音すると、いくつの拍になるか。',
        wrongAnswer: '5拍（「ス・ト・ラ・イ・ク」）',
        trapExplanation:
          'カタカナの「ストライク」が5拍なので、英語も同じだと思ってしまう。日本語はかな1字が1拍なのに対し、英語は音節が1拍であるという根本のちがいに気づいていない。',
        correctAnswer: '1拍（1音節）',
        correctExplanation:
          'strike は s－t－r という3つの子音が続き、母音の音は「アイ」1つ、最後に k が来る形で、全体が1音節である。日本語のカタカナは子音のあとに必ず母音を入れるため拍が増える。カタカナ語は必ず「英語では何音節か」を数え直す。',
      },
    ],
  },

  {
    id: 'eigo_s028',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'アクセント（強勢）の位置',
    description: '語のどこを強く読むかのきまりと、名詞・動詞で位置が変わる語を学ぶ',
    order: 528,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '2音節以上の語には、必ず強く読む音節（アクセント）が1つある。',
      '2音節の名詞は第1音節を強く読むことが多い（TEA-cher、STU-dent、WIN-dow）。',
      '2音節の動詞は第2音節を強く読むことが多い（be-GIN、for-GET、a-GREE）。',
      '-tion、-sion で終わる語は、その直前の音節を強く読む（in-for-MA-tion）。',
      'アクセントの位置がちがうと、通じないだけでなく別の語に聞こえることがある。',
    ],
    sections: [
      {
        heading: 'アクセントのきまり',
        body: `英語の語には、強く長くはっきり読む音節が必ず1つある。これをアクセント（強勢）という。日本語のアクセントが音の高さで決まるのに対し、英語のアクセントは強さ・長さ・はっきりさで決まる。

■ 2音節の語
名詞… 第1音節が強いことが多い
　TEA-cher, STU-dent, WIN-dow, MU-sic, SUM-mer, PEN-cil, MOR-ning
動詞… 第2音節が強いことが多い
　be-GIN, for-GET, a-GREE, ex-PLAIN, en-JOY, re-MEM-ber（3音節）

■ 語尾で決まるきまり
①-tion, -sion で終わる語 … 直前の音節を強く読む
　in-for-MA-tion, com-mu-ni-CA-tion, ques-TION, sta-TION
②-ity, -ical, -ic で終わる語 … 直前の音節
　e-LEC-tric, fan-TAS-tic
③-ese, -eer, -ee で終わる語 … その語尾自体を強く読む
　Jap-a-NESE, Chi-NESE, en-gi-NEER

■ 弱く読む部分はあいまいになる
強く読まない音節の母音は、はっきりした音を失って「ア」に近いあいまいな音になる。
　about（アバウト）の a、teacher（ティーチャー）の er、banana（バナナ）の最初と最後の a。
だから、弱い部分は聞き取りにくい。

★ ポイント：新しい語を覚えるときは、意味・つづりだけでなく「どこを強く読むか」もいっしょに覚える。`,
        figureId: 'lf_eigoext01_028',
      },
      {
        heading: '位置がちがうと別の語になる',
        body: `英語には、つづりが同じでもアクセントの位置で品詞と意味が変わる語がある。

■ 前を強く読むと名詞、後ろを強く読むと動詞
record … RE-cord（記録・レコード／名詞）／re-CORD（記録する／動詞）
present … PRE-sent（贈り物／名詞）／pre-SENT（贈る／動詞）
increase … IN-crease（増加／名詞）／in-CREASE（増える／動詞）
「名前は前、動きは後ろ」と覚えるとよい。

■ カタカナ語のアクセントに注意
日本語になった外来語は、英語とアクセントの位置がちがうことが多い。
　volunteer … 日本語は「ボランティア」だが、英語は vol-un-TEER と最後が強い。
　calendar … 英語は CAL-en-dar と最初が強い。
　hotel … 英語は ho-TEL と後ろが強い。
　orange … 英語は OR-ange と前が強い。

■ 入試での出題形式
「最も強く読む音節の位置を記号で答えなさい」という形で出る。音節に区切る→アクセントのきまりをあてはめる、という手順で解く。

⚠ 注意：アクセントの位置がずれると、正しい音を出していても通じないことがある。日本語で「はし」の高さを変えると意味が変わるのと同じくらい、英語では強さの位置が重要である。`,
      },
    ],
    trapExamples: [
      {
        question: '「volunteer（ボランティア）」で最も強く読む音節はどこか。',
        wrongAnswer: '第1音節（vol- を強く読む。日本語の「ボランティア」と同じ）',
        trapExplanation:
          '日本語のカタカナ語「ボランティア」では最初のほうを強く言うため、そのまま英語にあてはめてしまう。日本語になっている語ほど、英語のアクセントを確かめずに使ってしまう。',
        correctAnswer: '第3音節（vol-un-TEER。最後の -teer を強く読む）',
        correctExplanation:
          '-eer, -ese, -ee で終わる語は、その語尾自体を強く読む。volunteer, engineer, Japanese, Chinese が同じ形である。日本語になった外来語はアクセントの位置が変わっていることが多いので、hotel（ho-TEL）、calendar（CAL-en-dar）などもあわせて確かめておく。',
      },
      {
        question: '「I got a present from my mother.」の present は、どこを強く読むか。',
        wrongAnswer: '第2音節（pre-SENT）',
        trapExplanation:
          '「贈る」という動詞のイメージが先に立つと、動詞のアクセント（後ろが強い）をあてはめてしまう。文の中でどんな働きをしているかを確かめずに読むと起こるまちがいである。',
        correctAnswer: '第1音節（PRE-sent。「贈り物」という名詞なので前を強く読む）',
        correctExplanation:
          'この文では a present（1つの贈り物）と a が付いているので名詞である。present は名詞なら PRE-sent（贈り物）、動詞なら pre-SENT（贈る）と、アクセントの位置で品詞が変わる。record（RE-cord／re-CORD）、increase（IN-crease／in-CREASE）も同じ。「名前は前、動きは後ろ」と覚える。',
      },
    ],
  },

  {
    id: 'eigo_s029',
    subject: 'eigo',
    examType: 'chugaku',
    title: '語末の -s の3つの発音',
    description: '複数形・三単現の -s が /s/・/z/・/ɪz/ のどれになるかを決めるきまりを学ぶ',
    order: 529,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '-s の発音は3種類。「ス」／「ズ」／「イズ」。',
      '無声音（p・t・k・f）のあと → 「ス」（books, cats, maps, cups）。',
      '有声音（母音や b・d・g・l・m・n・r・v）のあと → 「ズ」（dogs, boys, pens, cars）。',
      's・z・sh・ch・x・ge のあと → 「イズ」（buses, boxes, watches, dishes, oranges）。',
      'つづりも変わる。s・x・z・sh・ch で終わる語には es を付ける。',
    ],
    sections: [
      {
        heading: '3つの発音の決まり方',
        body: `名詞の複数形や、動詞の三人称単数現在形に付ける -s は、いつも同じ音ではない。直前の音によって3通りに変わる。これは「言いやすいように自然に変わる」ためのきまりである。

■ ①「ス」と読む（無声音のあと）
直前が p・t・k・f・θ のような、声を出さない音のとき。
　books, cats, maps, cups, lakes, months, stops, helps, likes, takes
■ ②「ズ」と読む（有声音のあと）
直前が母音、または b・d・g・l・m・n・r・v のような、声を出す音のとき。
　dogs, boys, pens, cars, girls, games, birds, rooms, plays, goes, comes, lives
■ ③「イズ」と読む（音がぶつかるとき）
直前が s・z・sh・ch・x・ge のように、-s と似た音のとき。そのままだと続けて言えないので、あいだに母音を入れる。
　buses, boxes, watches, dishes, classes, oranges, teaches, washes

■ 音節が1つ増えるのは③だけ
bus（1音節）→ buses（2音節）
watch（1音節）→ watches（2音節）
①②では音節は増えない。

★ ポイント：無声音のあとは無声の「ス」、有声音のあとは有声の「ズ」。前の音と種類をそろえているだけである。b／p、d／t の対を思い出す。`,
        figureId: 'lf_eigoext01_029',
      },
      {
        heading: 'つづりの変化もあわせて覚える',
        body: `発音だけでなく、つづりも変わることがある。

■ ①ふつうは s を付けるだけ
book → books　dog → dogs　pen → pens
■ ②s・x・z・sh・ch で終わる語は es を付ける
bus → buses　box → boxes　watch → watches　dish → dishes　class → classes
■ ③「子音＋y」で終わる語は y を i に変えて es
city → cities　country → countries　study → studies　carry → carries
（「母音＋y」なら s だけ： boy → boys、day → days、play → plays）
■ ④f・fe で終わる語は ves に変える語がある
leaf → leaves　knife → knives　life → lives　wife → wives
（例外： roof → roofs）
■ ⑤o で終わる語の一部は es
tomato → tomatoes　potato → potatoes
（photo → photos、piano → pianos は s だけ）

■ 形が変わる複数形（不規則）
man → men　woman → women　child → children　foot → feet　tooth → teeth　mouse → mice
sheep → sheep　fish → fish（形が変わらない）

⚠ 注意：三単現の -s も同じきまりで動く（go → goes、watch → watches、study → studies）。複数形とセットで覚えれば、覚える量が半分になる。`,
      },
    ],
    trapExamples: [
      {
        question: '「buses」の語末の -es はどのように読むか。',
        wrongAnswer: 'ス（「バスス」のように読む）',
        trapExplanation:
          '-s は「ス」と読むと覚えていると、そのまま当てはめてしまう。しかし s の音のあとに s を続けることは実際には発音できないため、この読み方は成り立たない。',
        correctAnswer: 'イズ（「バスィズ」と読み、音節が1つ増える）',
        correctExplanation:
          's・z・sh・ch・x・ge で終わる語に -es が付くと「イズ」と読み、音節が1つ増える。buses, boxes, watches, dishes, classes, oranges が同じ形である。前の音とぶつかって言えないため、あいだに母音を入れて調整している。',
      },
      {
        question: '「books」と「dogs」の語末の -s は同じ音か。',
        wrongAnswer: '同じ（どちらも s なので「ス」と読む）',
        trapExplanation:
          'つづりが同じ s なので、音も同じだと考えてしまう。日本語では「ブックス」「ドッグス」と、どちらもカタカナの「ス」で書かれることも原因である。',
        correctAnswer: 'ちがう（books は「ス」、dogs は「ズ」）',
        correctExplanation:
          '直前の音が無声音（k）なら無声の「ス」、有声音（g）なら有声の「ズ」になる。前の音に種類をそろえているだけなので、覚えるというより口の動きに従えば自然にそうなる。cats（ス）／pens（ズ）、maps（ス）／cars（ズ）で確かめるとよい。',
      },
    ],
  },

  {
    id: 'eigo_s030',
    subject: 'eigo',
    examType: 'chugaku',
    title: '語末の -ed の3つの発音',
    description: '過去形の -ed が /t/・/d/・/ɪd/ のどれになるかを決めるきまりを学ぶ',
    order: 530,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '-ed の発音は3種類。「ト」／「ド」／「イド」。',
      '無声音（p・k・f・s・sh・ch・x）のあと → 「ト」（helped, looked, washed, watched）。',
      '有声音（母音や b・g・l・m・n・r・v・z）のあと → 「ド」（played, opened, called, lived）。',
      't・d のあと → 「イド」（wanted, needed, visited, started）。音節が1つ増える。',
      'つづりは「e を取って ed」「子音を重ねて ed」「y を i に変えて ed」の3パターン。',
    ],
    sections: [
      {
        heading: '3つの発音の決まり方',
        body: `規則動詞の過去形・過去分詞に付ける -ed も、-s と同じように直前の音で3通りに変わる。

■ ①「ト」と読む（無声音のあと）
直前が p・k・f・s・sh・ch・x のように、声を出さない音のとき。
　helped, looked, washed, watched, stopped, walked, liked, cooked, laughed, passed, finished
■ ②「ド」と読む（有声音のあと）
直前が母音、または b・g・l・m・n・r・v・z のような、声を出す音のとき。
　played, opened, called, lived, listened, cleaned, enjoyed, studied, arrived, remembered
■ ③「イド」と読む（t・d のあと）
直前が t か d のとき。そのままでは続けて言えないので、あいだに母音を入れる。
　wanted, needed, visited, started, waited, ended, decided, painted

■ 音節が増えるのは③だけ
want（1音節）→ wanted（2音節）
need（1音節）→ needed（2音節）
一方、played は1音節のまま、looked も1音節のままである。

■ 覚え方
「t・d のあとだけイド、それ以外は前の音にそろえる」と1行で覚える。-s のきまりとまったく同じ考え方である。

★ ポイント：liked を「ライクド」、looked を「ルックド」と読んでしまうまちがいが多い。無声音のあとは「ト」である。`,
        figureId: 'lf_eigoext01_030',
      },
      {
        heading: 'つづりの変化',
        body: `-ed を付けるときのつづりの変化は3パターンある。

■ ①そのまま ed を付ける
play → played　want → wanted　open → opened　visit → visited　watch → watched
■ ②語末が e なら d だけ付ける
like → liked　live → lived　use → used　arrive → arrived　close → closed
（e を取ってから ed を付ける、と考えても同じ結果になる）
■ ③1音節で「短母音＋子音1つ」なら子音を重ねる
stop → stopped　plan → planned　drop → dropped
（stoped と書くと×。stopped と p を2つにする）
■ ④「子音＋y」なら y を i に変えて ed
study → studied　carry → carried　try → tried　cry → cried
（「母音＋y」なら変えない： play → played、enjoy → enjoyed、stay → stayed）

■ 不規則動詞は -ed が付かない
go → went　come → came　see → saw　eat → ate　have → had
buy → bought　think → thought　teach → taught　catch → caught
これらは形ごと覚える。中学入試でもよく出る。

⚠ 注意：study は「子音＋y」なので studied、play は「母音＋y」なので played。y の1つ前の文字を必ず見る。この見分けは複数形・三単現でも同じである。`,
      },
    ],
    trapExamples: [
      {
        question: '「I looked at the picture.」の looked の -ed はどのように読むか。',
        wrongAnswer: 'イド（「ルックイド」と2音節で読む）',
        trapExplanation:
          '-ed を見ると「エド」「イド」と読みたくなる。とくに wanted や needed を先に習っていると、すべての -ed に母音が入ると思いこんでしまう。',
        correctAnswer: 'ト（「ルックト」。1音節のまま）',
        correctExplanation:
          '直前が k という無声音なので、-ed は無声の「ト」になる。helped, washed, watched, stopped, liked も同じ。「イド」と読むのは直前が t か d のとき（wanted, needed, visited, started）だけである。',
      },
      {
        question: '「stop（止まる）」を過去形にしなさい。',
        wrongAnswer: 'stoped',
        trapExplanation:
          '「過去形は ed を付ける」というきまりだけで処理してしまい、子音を重ねる条件を確かめない。stoped と書いても見た目に大きな違和感がないため、まちがいに気づきにくい。',
        correctAnswer: 'stopped',
        correctExplanation:
          '1音節で「短母音＋子音1つ」で終わる語は、-ed を付けるとき最後の子音を重ねる。stop→stopped、plan→planned、drop→dropped が同じ形である。ing を付けるときも同じきまりで stopping となる。母音字が2つある語（look→looked）や子音字が2つ続く語（help→helped）では重ねない。',
      },
    ],
  },
  {
    id: 'eigo_s031',
    subject: 'eigo',
    examType: 'chugaku',
    title: '英語のリズムと弱く読む語',
    description: '強く読む語と弱く読む語を区別し、英語らしいリズムで読めるようにする',
    order: 531,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '英語は強く読む語と弱く読む語がはっきり分かれる。強く読む語の間隔はほぼ一定になる。',
      '強く読む語＝名詞・動詞・形容詞・副詞・疑問詞（意味の中心になる語）。',
      '弱く読む語＝ a, the, of, to, and, is, can, for などの短い語（文をつなぐ語）。',
      '弱く読む語の母音はあいまいな「ア」に近い音になる（can は「カン」ではなく「クン」に近い）。',
      '語と語はつながって聞こえる（an apple → アナポー、pick it up → ピキラップ）。',
    ],
    sections: [
      {
        heading: '強く読む語と弱く読む語',
        body: `英語の文は、すべての語を同じ強さで読むわけではない。意味の中心になる語だけを強く読み、それ以外は弱く短く読む。

■ 強く読む語（内容語）
名詞… book, school, mother
動詞… go, eat, study（ただし be動詞・助動詞は弱い）
形容詞… big, beautiful
副詞… slowly, always
疑問詞… what, where, who
数… three, ten

■ 弱く読む語（機能語）
冠詞… a, an, the
前置詞… of, to, in, at, for, from
接続詞… and, but, or
代名詞… I, you, he, it, them
be動詞・助動詞… is, are, was, can, will, do

■ 例文で確かめる
I WANT to BUY a BOOK.（大文字が強く読む部分）
強く読むのは want, buy, book の3語。to と a はほとんど聞こえないくらい弱くなる。

■ 弱く読むと母音が変わる
can … 強いとき「キャン」、弱いとき「クン」に近い
to … 強いとき「トゥー」、弱いとき「タ」に近い
and … 弱いとき「ン」に近い（fish and chips → フィッシュンチップス）

★ ポイント：聞き取りで単語が消えたように感じるのは、弱く読まれているからである。消えているのは、たいてい a・the・to・of・and などの短い語である。`,
      },
      {
        heading: '強い語の間隔は一定になる',
        body: `英語は、強く読む語と語のあいだの時間がほぼ一定になるようにできている。これを強勢拍リズムという。だから、あいだに弱い語がいくつ入っても、文全体にかかる時間はあまり変わらない。

■ 実験してみる
①DOGS EAT BONES.（3語・強勢3つ）
②The DOGS EAT the BONES.（5語・強勢3つ）
③The DOGS will EAT the BONES.（6語・強勢3つ）
語数は増えているのに、声に出すとかかる時間はほぼ同じになる。弱い語はすきまに押しこまれて、速く短く読まれるからである。

■ 日本語との比較
日本語はかな1字が1拍で、拍の数だけ時間がかかる。「いぬ」（2拍）より「いぬがほねをたべる」（9拍）のほうが確実に長い。英語ではこうならない。この差が、日本人が英語を聞き取れない大きな理由である。

■ 音がつながる
弱い語は前後の語とつながって聞こえる。
an apple → アナポー
pick it up → ピキラップ
take it easy → テイキリーズィー
子音で終わる語のあとに母音で始まる語が来ると、くっついて1つの語のように聞こえる。

⚠ 注意：聞き取り問題では「単語が速すぎて聞こえない」と感じることが多いが、実際には弱く読まれてつながっているだけである。強く読まれる語だけを拾えば意味はつかめる。`,
        figureId: 'lf_eigoext01_031',
      },
    ],
    trapExamples: [
      {
        question: '「I can swim.」の can は、どのように読まれることが多いか。',
        wrongAnswer: 'キャン（いつでもはっきり「キャン」と読む）',
        trapExplanation:
          'つづりが can なので、いつでも同じ音で読むと考えてしまう。日本語では語の読み方が場面で変わることが少ないため、弱く読む形があるという発想が出てこない。',
        correctAnswer: '弱く「クン」に近い音になる（強く読むのは swim のほう）',
        correctExplanation:
          'can のような助動詞は弱く読む語である。文の中心は動詞の swim なので、そこを強く読む。逆に Yes, I can. のように文末で使われるときは強く「キャン」と読む。同じ語でも位置によって強さが変わる点が英語の特ちょうである。',
      },
      {
        question: '「The dogs will eat the bones.」は、「Dogs eat bones.」よりどれくらい長い時間がかかるか。',
        wrongAnswer: '語数が2倍なので、およそ2倍の時間がかかる',
        trapExplanation:
          '日本語は拍の数だけ時間がかかるため、語数が増えれば比例して長くなると考えてしまう。英語のリズムのしくみを知らないと、必ずこの答えになる。',
        correctAnswer: 'ほとんど変わらない（どちらも強く読む語が3つなので、かかる時間はほぼ同じ）',
        correctExplanation:
          '英語は強く読む語と語のあいだの時間がほぼ一定になるリズムを持つ。強勢の数が同じなら、あいだの弱い語がいくつ増えても全体の長さはあまり変わらない。弱い語は速く短くつぶされて発音される。これが英語が速く聞こえる理由である。',
      },
    ],
  },

  // ────────── 7. ローマ字と英語つづり（s032〜s035） ──────────
  {
    id: 'eigo_s032',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'ローマ字①：ヘボン式と訓令式のちがい',
    description: '2つのローマ字の書き方のちがいと、どちらを使うべき場面かを整理する',
    order: 532,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      'ローマ字には訓令式（学校で最初に習う）とヘボン式（パスポート・駅名で使う）がある。',
      'ちがいが出るのは し・ち・つ・ふ・じ・ぢ・づ と、しゃ行・ちゃ行・じゃ行だけ。',
      '訓令式… si, ti, tu, hu, zi, sya, tya, zya。',
      'ヘボン式… shi, chi, tsu, fu, ji, sha, cha, ja。',
      '人名・地名を英語の文の中で書くときは、ヘボン式を使うのがふつう。',
    ],
    sections: [
      {
        heading: '2つの書き方',
        body: `日本語をアルファベットで書き表す方法をローマ字という。ローマ字には主に2つの方式がある。

■ 訓令式
日本語の五十音表のならびをそのまま整理した、規則的な書き方。小学校の国語で最初に習う。
　さ行… sa, si, su, se, so
　た行… ta, ti, tu, te, to
　は行… ha, hi, hu, he, ho
　ざ行… za, zi, zu, ze, zo
　しゃ・しゅ・しょ… sya, syu, syo

■ ヘボン式
英語を話す人が読んだときに、日本語の音に近くなるように工夫した書き方。パスポート、駅名の表示、道路標識で使われる。
　さ行… sa, shi, su, se, so
　た行… ta, chi, tsu, te, to
　は行… ha, hi, fu, he, ho
　ざ行… za, ji, zu, ze, zo
　しゃ・しゅ・しょ… sha, shu, sho

■ ちがうのはごく一部
2つの方式で書き方がちがうのは、し・ち・つ・ふ・じ・ぢ・づ と、しゃ行・ちゃ行・じゃ行だけである。あ行、か行、な行、ま行、ら行などはまったく同じである。

★ ポイント：どちらもまちがいではない。ただし、英語の文の中で日本の人名・地名を書くときはヘボン式を使う。英語話者が読んだときに近い音になるからである。`,
        figureId: 'lf_eigoext01_032',
      },
      {
        heading: '使い分けと、まちがえやすい書き方',
        body: `■ どちらを使うか
・小学校の国語のテスト … 訓令式が基本（ただしヘボン式も認められることが多い）
・パスポート、クレジットカードの名義 … ヘボン式のみ
・駅名、道路標識、地図 … ヘボン式
・英語の授業・入試の英作文 … ヘボン式

■ ヘボン式でよく出る語
富士山 … Fuji（Huzi ではない）
東京 … Tokyo
大阪 … Osaka
渋谷 … Shibuya（Sibuya ではない）
茶 … cha
寿司 … sushi（susi ではない）
一 … ichi（iti ではない）

■ 名前の例
たかし … Takashi（Takasi ではない）
ちひろ … Chihiro（Tihiro ではない）
つよし … Tsuyoshi（Tuyosi ではない）
じゅん … Jun（Zyun ではない）

■ 特別なきまり
ヘボン式では、ん のあとに b・m・p が続くとき、n を m と書くことがある（難波＝Namba、群馬＝Gunma／Gumma）。パスポートでは m を使う。

⚠ 注意：訓令式で書いた「Huzisan」は英語話者にはまったく通じない。h－u と読むと「ヒュージサン」のようになってしまう。英語の中では必ず Fuji と書く。`,
      },
    ],
    trapExamples: [
      {
        question: '英語の文の中で「富士山」を書くとき、正しいのはどちらか。　Huzisan ／ Mt. Fuji',
        wrongAnswer: 'Huzisan',
        trapExplanation:
          '学校の国語で訓令式を先に習うため、ふ＝hu、じ＝zi のつづりが身についている。英語の中でもそのまま使えると思ってしまう。',
        correctAnswer: 'Mt. Fuji',
        correctExplanation:
          '英語の文の中で日本の地名を書くときはヘボン式を使う。ふ＝fu、じ＝ji である。また「〜山」は Mt.（Mount の略）を付けて Mt. Fuji と書くのがふつうである。Huzisan と書くと、英語話者には日本語の音として読み取れない。',
        },
      {
        question: '「つよし」という名前をパスポートに書くときのつづりを答えなさい。',
        wrongAnswer: 'Tuyosi',
        trapExplanation:
          '訓令式では つ＝tu、し＝si なので、そのまま書いてしまう。訓令式のほうが規則的で覚えやすいため、こちらが先に出てくる。',
        correctAnswer: 'Tsuyoshi',
        correctExplanation:
          'パスポートはヘボン式で書くきまりになっている。つ＝tsu、し＝shi なので Tsuyoshi となる。同じように ちひろ＝Chihiro、じゅん＝Jun、しんじ＝Shinji と書く。訓令式と異なるのは し・ち・つ・ふ・じ と、しゃ行・ちゃ行・じゃ行だけである。',
      },
    ],
  },

  {
    id: 'eigo_s033',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'ローマ字②：長音・促音・はねる音の書き方',
    description: 'のばす音・つまる音・はねる音をローマ字でどう書くかのきまりを覚える',
    order: 533,
    studyPeriod: '小5前半',
    targetLevel: 'kiso',
    keyPoints: [
      '促音（小さい っ）は、次の子音を重ねて書く（きっぷ＝kippu、がっこう＝gakko）。',
      'ただし ち で始まる音の前は t を重ねる（まっちゃ＝matcha）。',
      '撥音（ん）は n。母音や y の前ではアポストロフィで区切る（しんいち＝Shin\'ichi）。',
      '長音（のばす音）は、パスポートでは書かないのがふつう（おおの＝Ono、さとう＝Sato）。',
      '拗音（小さい ゃ ゅ ょ）はヘボン式で ya, yu, yo をつなげて書く（きょう＝kyo、しゃしん＝shashin）。',
    ],
    sections: [
      {
        heading: 'つまる音・はねる音',
        body: `ローマ字でとくにまちがえやすいのが、小さい「っ」と「ん」の書き方である。

■ 促音（小さい っ）＝次の子音を重ねる
きって（切手）… kitte
がっこう（学校）… gakko
にっぽん（日本）… Nippon
さっぽろ（札幌）… Sapporo
ざっし（雑誌）… zasshi（sh を重ねるので s が増える）

■ ち・ちゃ行の前だけは t を重ねる
まっちゃ（抹茶）… matcha（ccha ではない）
こっち … kotchi
ヘボン式では ち＝chi なので、そのまま重ねると cchi となって読みにくい。そこで t を使う。

■ 撥音（ん）＝ n
にほん … Nihon
かんじ … kanji
しんぶん … shinbun

■ ん のあとに母音・y が来るときはアポストロフィ
しんいち … Shin'ichi（Shinichi だと「し・に・ち」と読まれてしまう）
ほんや … hon'ya
まんいん … man'in

■ ん のあとに b・m・p が来るとき
ヘボン式では n を m と書くことがある。
なんば（難波）… Namba
ぐんま（群馬）… Gunma（Gumma とも書く）

★ ポイント：促音は「次の子音を重ねる」、撥音は「n」、この2つを先に固める。`,
      },
      {
        heading: 'のばす音と小さい ゃ ゅ ょ',
        body: `■ 長音（のばす音）
日本語の「おおの」「さとう」「こうこう」のようにのばす音は、ローマ字では書き方が何通りもある。
①のばす記号を付ける … Ōno, Satō（学術的な表記）
②母音を重ねる … Oono, Satou（入力するときの書き方）
③何も書かない … Ono, Sato（パスポート・一般的な表記）
パスポートや英語の文の中では③が基本である。だから「大野さん」も「小野さん」も、どちらも Ono になる。

■ 名前でよく出る例
たろう … Taro
ゆうき … Yuki
こうた … Kota
しょうこ … Shoko
どれものばす音を書かない。

■ 拗音（小さい ゃ ゅ ょ）
ヘボン式では、i の段の音に ya・yu・yo をつなげる。
きゃ・きゅ・きょ … kya, kyu, kyo
しゃ・しゅ・しょ … sha, shu, sho（sya ではない）
ちゃ・ちゅ・ちょ … cha, chu, cho（tya ではない）
にゃ・にゅ・にょ … nya, nyu, nyo
ひゃ・ひゅ・ひょ … hya, hyu, hyo
じゃ・じゅ・じょ … ja, ju, jo（zya ではない）

例）きょうと（京都）… Kyoto　しゃしん（写真）… shashin　じゅうどう（柔道）… judo

⚠ 注意：東京は Tokyo と書く。To-u-kyo-u ののばす音を書かないので、4文字分の音が Tokyo という6文字になる。Toukyou と書くのは入力用の書き方で、英語の文の中では使わない。`,
      },
    ],
    trapExamples: [
      {
        question: '「がっこう（学校）」をローマ字（ヘボン式）で書きなさい。',
        wrongAnswer: 'gatsukou',
        trapExplanation:
          '小さい「っ」を、大きい「つ」と同じ tsu で書いてしまう。さらにのばす音「う」もそのまま u と書くため、まったく別の読み方になる。',
        correctAnswer: 'gakko',
        correctExplanation:
          '促音（小さい っ）は次の子音を重ねて表す。「がっこう」は次が k なので kk となり gakko である。のばす音は、パスポートや英語の文の中では書かないのがふつう。同じ形に きって＝kitte、さっぽろ＝Sapporo がある。',
      },
      {
        question: '「しんいち」という名前をローマ字で書きなさい。',
        wrongAnswer: 'Shinichi',
        trapExplanation:
          'ん＝n、いち＝ichi と、部分ごとに正しく書いているつもりでも、つなげると shi－ni－chi と読めてしまう。区切りを示す必要があることに気づきにくい。',
        correctAnswer: "Shin'ichi",
        correctExplanation:
          "「ん」のあとに母音や y が続くときは、アポストロフィ（'）で区切る。区切らないと「しにち」と読まれてしまう。同じ形に ほんや＝hon'ya、まんいん＝man'in がある。「ん」のあとに何が来るかを必ず確かめる。",
      },
    ],
  },

  {
    id: 'eigo_s034',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'ローマ字③：ローマ字読みで英語を読まない',
    description: 'ローマ字と英語のつづりのきまりのちがいを知り、読みまちがいを防ぐ',
    order: 534,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      'ローマ字は日本語を書くための道具であり、英語のつづりのきまりとは別のもの。',
      'ローマ字では a＝ア、i＝イ、u＝ウ、e＝エ、o＝オ と1対1。英語ではそうならない。',
      'ローマ字読みのくせが出ると、like を「リケ」、name を「ナメ」と読んでしまう。',
      '同じつづりでも読み方がちがう：ローマ字の e は「エ」、英語の語末の e は読まない。',
      'ローマ字が役に立つのは、日本語の音を書き表すときと、日本語の語を英語の文に入れるときだけ。',
    ],
    sections: [
      {
        heading: '2つの体系のちがい',
        body: `ローマ字と英語は、同じアルファベットを使うが、まったく別のきまりで動いている。ここを区別しないと、英語の読み書きがいつまでも安定しない。

■ ローマ字のきまり
・母音字は5つで、それぞれ1つの音だけを表す（a＝ア、i＝イ、u＝ウ、e＝エ、o＝オ）。
・子音字＋母音字で1つの音のかたまりを作る（ka, si, tu）。
・つづりを見れば読み方が必ず決まる。例外がない。

■ 英語のきまり
・母音字5つで20前後の音を表す。同じ a でも cat, cake, car, all で音がちがう。
・子音が続くことがある（street, texts）。
・語末の e は読まない（name, like, cake）。
・読まない文字がある（know, write, night）。

■ ローマ字読みをしてしまう例
like → 「リケ」（正しくは「ライク」）
name → 「ナメ」（正しくは「ネイム」）
make → 「マケ」（正しくは「メイク」）
time → 「ティメ」（正しくは「タイム」）
house → 「ホウセ」（正しくは「ハウス」）

★ ポイント：英語の語を見たら、まずフォニックスのきまり（短母音・長母音・マジックE）を思い出す。ローマ字のきまりは頭から切りはなす。`,
      },
      {
        heading: 'まぎらわしい組み合わせ',
        body: `ローマ字と英語で、同じつづりなのに読み方がちがう例を確かめておく。

■ 語末の e
ローマ字… ike（いけ）、ie（いえ）→ e を「エ」と読む
英語… like（ライク）、bike（バイク）→ e は読まない
■ i
ローマ字… i は「イ」
英語… i は短母音で「イ」（sit）、長母音で「アイ」（bike, night, my）
■ u
ローマ字… u は「ウ」
英語… u は短母音で「ア」に近い（cup）、長母音で「ユー」（use, music）
■ ei
ローマ字… ei は「エイ」（sensei）
英語… ei は「イー」（receive）や「エイ」（eight）
■ ai
ローマ字… ai は「アイ」（ai＝愛）
英語… ai は「エイ」（rain, train）

■ 日本語が英語に入った語
sushi, tempura, karaoke, judo, origami, tsunami, manga などは、英語の中でもローマ字に近いつづりのまま使われている。ただし発音は英語風になる（karaoke は「キャリオウキ」に近い）。

⚠ 注意：ローマ字は日本語を書くための道具であって、英語の読み方を教えてくれるものではない。「ローマ字ができるから英語も読める」と考えると、かえって読みまちがいが増える。`,
      },
    ],
    trapExamples: [
      {
        question: '「name」の読み方を答えなさい。',
        wrongAnswer: 'ナメ（ローマ字のとおりに n－a－m－e と読む）',
        trapExplanation:
          '国語でローマ字を習った直後は、アルファベットを見るとローマ字のきまりで読んでしまう。ローマ字では e を「エ」と読むので、語末の e も声に出してしまう。',
        correctAnswer: 'ネイム（[neɪm]。語末の e は読まず、a が長母音になる）',
        correctExplanation:
          'name は「子音＋母音＋子音＋e」の形なので、マジックE のきまりが働く。語末の e は読まず、そのかわり a がアルファベット読み（エイ）になる。同じ形に like（ライク）、make（メイク）、time（タイム）、home（ホウム）がある。',
      },
      {
        question: '英語の rain と、ローマ字の「あい（ai）」では、ai の読み方は同じか。',
        wrongAnswer: '同じ（どちらも「アイ」と読む）',
        trapExplanation:
          'つづりが同じ ai なので、読み方も同じだと考えてしまう。ローマ字のきまりを英語にそのまま持ちこむと、rain を「ライン」と読むまちがいにつながる。',
        correctAnswer: 'ちがう（ローマ字の ai は「アイ」、英語の ai は「エイ」）',
        correctExplanation:
          '英語の ai は「エイ」と読む（rain, train, wait, paint）。ローマ字の ai は a と i をそれぞれ読むので「アイ」である。英語で「アイ」の音を表すのは i_e（bike）、igh（night）、y（my）などである。ローマ字と英語は別のきまりで動いていることを、つねに意識する。',
      },
    ],
  },

  {
    id: 'eigo_s035',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'ローマ字④：名前・地名の書き方',
    description: '英語の文の中で自分の名前や日本の地名をどう書くかを決められるようにする',
    order: 535,
    studyPeriod: '小5前半',
    targetLevel: 'oyo',
    keyPoints: [
      '名前は姓も名も最初の1文字を大文字にする（Masaya Nanjo／Nanjo Masaya）。',
      '英語の文では「名－姓」の順が長く使われてきたが、公用文では「姓－名」の順が原則になった。',
      '姓をはっきり示したいときは、姓をすべて大文字で書く（NANJO Masaya）。',
      '地名も最初の1文字を大文字にする（Tokyo, Osaka, Kyoto, Hokkaido）。',
      '「〜山」は Mt.、「〜駅」は Station、「〜川」は River を付ける（Mt. Fuji, Tokyo Station）。',
    ],
    sections: [
      {
        heading: '名前の書き方',
        body: `英語の文の中で自分の名前を書く機会は多い。自己紹介の英作文、英検の解答用紙、入試の答案などである。

■ 基本のきまり
・姓も名も、最初の1文字を大文字にする。
・姓と名のあいだは1文字分あける。
　例）Masaya Nanjo ／ Nanjo Masaya

■ 順番について
かつては英語の文では「名－姓」の順に書くのがふつうだった（Masaya Nanjo）。しかし、日本語の姓名の順を尊重する考え方から、国の方針として公用文では「姓－名」の順に書くことが原則となった（Nanjo Masaya）。
どちらでも通じるが、姓と名を取りちがえられないように、姓をすべて大文字で書く方法がある。
　例）NANJO Masaya

■ 入試ではどうするか
学校の指示があればそれに従う。指示がなければ、どちらの順でもよい。ただし、答案の中で順番を統一する。

■ 名前のつづり
ヘボン式で書く。のばす音は書かない。
　こうた … Kota　ゆうき … Yuki　しょう … Sho　じゅんこ … Junko

★ ポイント：自分の名前のつづりは、書けて当たり前として出題される。今のうちに1つに決めて、書き慣れておく。`,
      },
      {
        heading: '地名・固有名詞の書き方',
        body: `■ 地名
最初の1文字を大文字にする。ヘボン式でつづり、のばす音は書かない。
　東京 … Tokyo　大阪 … Osaka　京都 … Kyoto　北海道 … Hokkaido
　九州 … Kyushu　名古屋 … Nagoya　神戸 … Kobe　広島 … Hiroshima

■ 地形・建物には英語の語を付ける
山 … Mt.（Mount の略）… Mt. Fuji（富士山）, Mt. Aso
川 … River … the Shinano River（信濃川）
海 … Sea … the Sea of Japan（日本海）
駅 … Station … Tokyo Station, Osaka Station
公園 … Park … Ueno Park
神社・寺 … Shrine / Temple … Meiji Shrine, Kinkakuji Temple

■ 国名・言語名
日本 … Japan　日本語 … Japanese　日本人 … Japanese
中国 … China　中国語・中国人 … Chinese
アメリカ … America / the United States　英語 … English

■ よくあるまちがい
・Tokyo を Toukyou と書く（入力用の書き方なので、英語の文では使わない）
・fuji のように小文字で書き始める
・Mt.Fuji のようにピリオドのあとをあけずに書く（Mt. Fuji と1文字分あける）

⚠ 注意：日本の地名は、英語の中では日本語の語をそのまま使う。「東京」は Eastern Capital などと訳さない。固有名詞は訳さずに音を写す、というのが原則である。`,
      },
    ],
    trapExamples: [
      {
        question: '英語の自己紹介文で「私は東京に住んでいます。」と書きたい。正しい英文はどれか。',
        wrongAnswer: 'I live in toukyou.',
        trapExplanation:
          'ローマ字入力のつづり（toukyou）をそのまま書き、さらに地名を小文字で書き始めてしまう。パソコンやスマートフォンで打ち慣れたつづりが手に残っていることが原因である。',
        correctAnswer: 'I live in Tokyo.',
        correctExplanation:
          '地名は最初の1文字を大文字にする。またヘボン式では、のばす音を書かないので Toukyou ではなく Tokyo となる。同じく Osaka（Oosaka ではない）、Kyoto（Kyouto ではない）、Sato（Satou ではない）も同じ考え方である。',
      },
      {
        question: '英語で「富士山」と書きなさい。',
        wrongAnswer: 'Fujisan Mountain',
        trapExplanation:
          '日本語の「〜山」をそのままローマ字にしたうえで、英語の Mountain も付けてしまう。「山」の意味が二重になっていることに気づきにくい。',
        correctAnswer: 'Mt. Fuji',
        correctExplanation:
          '「〜山」は Mt.（Mount の略）を前に付けて表す。Mt. Fuji で「富士山」の意味になるので、さらに Mountain を付ける必要はない。Mt. のあとは1文字分あける。同じ形に Mt. Aso（阿蘇山）、the Shinano River（信濃川）、Tokyo Station（東京駅）がある。',
      },
    ],
  },

  // ────────── 8. つづりミスと書き取り（s036〜s040） ──────────
  {
    id: 'eigo_s036',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まちがえやすいつづり①：曜日と月の名前',
    description: '入試で必ず出る曜日・月のつづりを、まちがえやすい点とともに固める',
    order: 536,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '曜日・月の名前は、文のとちゅうでも必ず大文字で書き始める。',
      'Wednesday は d を落としやすい。「ウェド・ネス・デイ」と区切って覚える。',
      'Tuesday は ue の順。Thursday は th で始まる。Saturday は u（Saterday ではない）。',
      'February は最初の r を落としやすい。August は最後が t（Augast ではない）。',
      '曜日の前には on、月の前には in を使う（on Monday／in April）。',
    ],
    sections: [
      {
        heading: '曜日のつづり',
        body: `曜日と月の名前は、中学入試・英検で必ず出る。しかもつづりがまぎらわしい語が多い。

■ 7つの曜日
Sunday（日曜日）
Monday（月曜日）
Tuesday（火曜日）… u と e の順に注意。Teusday ではない。
Wednesday（水曜日）… d を書き落としやすい。読みは「ウェンズデイ」。
Thursday（木曜日）… th で始まる。Thursday の r も落としやすい。
Friday（金曜日）
Saturday（土曜日）… u を書く。Saterday ではない。

■ 覚え方
Wednesday … 「ウェド・ネス・デイ」と、書く用の読み方をして覚える。
Tuesday … Tues＋day。Tue で区切ると u→e の順が定着する。
Thursday … Thurs＋day。木曜日は th の音で始まる。
Saturday … Sat＋ur＋day。「サタデー」の「タ」のあとが u。

■ 使い方
曜日の前には on を使う。
　例）I play tennis on Sunday.（日曜日にテニスをします）
　例）We have English classes on Monday and Friday.

★ ポイント：曜日は文のとちゅうでも大文字で書き始める。on sunday と書くと不正解になる。`,
      },
      {
        heading: '月のつづり',
        body: `■ 12か月
January（1月）… Jan は「ジャン」ではなく「ジャニュ」
February（2月）… 最初の r を落として Febuary と書くまちがいが非常に多い
March（3月）
April（4月）
May（5月）
June（6月）
July（7月）
August（8月）… 最後は t。Augast ではない
September（9月）
October（10月）… Octorber と r を入れすぎるまちがいに注意
November（11月）
December（12月）

■ 使い方
月の前には in を使う。
　例）My birthday is in June.（誕生日は6月です）
日付まで言うときは on を使う。
　例）My birthday is on June 10.（6月10日です）

■ 日付の書き方
アメリカ式… June 10, 2026（月－日－年）
イギリス式… 10 June 2026（日－月－年）
入試ではアメリカ式が多い。

■ 序数とセットで
日付は序数（1番目、2番目…）で読む。June 10 は「ジューン・テンス」と読む。
first, second, third, fourth, fifth, … twentieth, twenty-first

⚠ 注意：September から December は語尾が -ber でそろっている。September, October, November, December の4つをまとめて書く練習をすると定着が速い。`,
      },
    ],
    trapExamples: [
      {
        question: '「私は水曜日にピアノを習っています。」の「水曜日に」にあたる部分を英語で書きなさい。',
        wrongAnswer: 'on wensday',
        trapExplanation:
          'Wednesday は「ウェンズデイ」と読むので、聞こえたとおりに書くと読まない d と e が抜ける。さらに曜日を大文字で書き始めるきまりも忘れやすい。',
        correctAnswer: 'on Wednesday',
        correctExplanation:
          'Wednesday は W－e－d－n－e－s－d－a－y の9文字。読まない d と e を落とさないよう「ウェド・ネス・デイ」と区切って覚える。曜日名は文のとちゅうでも大文字で書き始め、曜日の前には on を使う。',
      },
      {
        question: '「私の誕生日は2月です。」を英語で書きなさい。',
        wrongAnswer: 'My birthday is in Febuary.',
        trapExplanation:
          'February は「フェブラリー」と読み、最初の r をはっきり発音しないことが多い。そのため音のとおりに書くと Febuary となり、r が1つ抜ける。',
        correctAnswer: 'My birthday is in February.',
        correctExplanation:
          'February は F－e－b－r－u－a－r－y で、r が2つある。「フェブ・ル・アリー」と区切って書く練習をする。月の前には in を使い（in February）、日付まで言うときは on を使う（on February 3）。月名も大文字で書き始める。',
      },
    ],
  },
  {
    id: 'eigo_s037',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まちがえやすいつづり②：弱く読む部分がある語',
    description: '発音では消えてしまう母音を含む語を、書くとき専用の読み方で覚える',
    order: 537,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'アクセントのない音節の母音は弱くあいまいになり、書くときに落としやすい。',
      'favorite（フェイヴァリット）、chocolate（チョコレット）、vegetable（ヴェジタブル）は、まん中の母音が消えやすい。',
      'different、interesting、every、family も、読むときは音が1つ減る。',
      '書くとき専用の読み方（つづり読み）をして覚える。favorite なら「ファ・ヴォ・リ・テ」。',
      '英語の答案では、1文字足りないだけで不正解になる。書いたあとに音節ごとに指で確かめる。',
    ],
    sections: [
      {
        heading: '音が消える語',
        body: `英語では、アクセントのない音節の母音は弱くあいまいになり、ときにはほとんど聞こえなくなる。そのため、聞こえたとおりに書くと文字が足りなくなる。

■ 母音が消えやすい語
favorite（お気に入りの）… fa・vo・rite の3音節だが、実際は「フェイヴリット」と2音節に近く聞こえる。まん中の o を落として favrite と書くまちがいが多い。
chocolate（チョコレート）… cho・co・late の3音節だが「チョクレット」に近い。2つ目の o を落としやすい。
vegetable（野菜）… ve・ge・ta・ble の4音節だが「ヴェジタブル」と3音節に聞こえる。e を落として vegtable と書きやすい。
different（ちがう）… dif・fe・rent だが「ディフレント」に近い。まん中の e を落としやすい。
interesting（おもしろい）… in・te・res・ting だが「イントレスティング」に近い。
every（すべての）… ev・e・ry だが「エヴリ」に近い。
family（家族）… fa・mi・ly だが「ファムリ」に近い。
camera（カメラ）… ca・me・ra だが「キャムラ」に近い。

■ 対策：書くとき専用の読み方をする
発音とは別に、書くための読み方を決めてしまう。
　favorite … 「ファ・ヴォ・リ・テ」
　chocolate … 「チョ・コ・ラ・テ」
　vegetable … 「ヴェ・ゲ・タ・ブレ」
このように1字ずつ声に出しながら書くと、消える母音を落とさなくなる。

★ ポイント：漢字の書き取りで「口へんに未」と唱えるのと同じ。書く用の唱え方を作るのがいちばん確実である。`,
      },
      {
        heading: 'よく出る語のつづり点検',
        body: `中学入試・英検4級〜3級で頻出の、つづりをまちがえやすい語をまとめる。

■ 長めの語
beautiful（美しい）… beau の部分が独特。「ベ・アウ・ティ・フル」と唱える。
because（なぜなら）… be＋cause。「ビ・カウ・セ」と唱える。becouse と書くまちがいが多い。
restaurant（レストラン）… au と最後の t。「レス・タウ・ラント」と唱える。
delicious（おいしい）… ci の部分が「シ」の音。deliscious と s を入れすぎない。
important（大切な）… im＋port＋ant。
difficult（むずかしい）… dif＋fi＋cult。f が2つ。
breakfast（朝食）… break＋fast。ea を「エ」と読む語。
umbrella（かさ）… l が2つ。
hospital（病院）… hos＋pi＋tal。
library（図書館）… lib＋ra＋ry。r が2つ。
January（1月）… Jan＋u＋a＋ry。

■ 音とつづりがずれる語
enough（十分な）… gh を「フ」と読む
listen（聞く）… t を読まない
answer（答え）… w を読まない
often（しばしば）… t を読まないことが多い
science（科学）… c を「ス」と読む
world（世界）… or を「アー」と読む

⚠ 注意：つづりを覚えるときは、必ず声に出しながら手で書く。目で見るだけでは定着しない。同じ語を3回書いて、4回目は見ないで書く、という順序が効率がよい。`,
      },
    ],
    trapExamples: [
      {
        question: '「私の好きな教科は理科です。」の「好きな（お気に入りの）」にあたる語を書きなさい。',
        wrongAnswer: 'favrite',
        trapExplanation:
          'favorite は「フェイヴリット」と2音節に近く発音され、まん中の o がほとんど聞こえない。音のとおりに書くと o が1つ抜ける。',
        correctAnswer: 'favorite（My favorite subject is science.）',
        correctExplanation:
          'favorite は fa・vo・rite の3音節で、まん中に o がある。書くときは「ファ・ヴォ・リ・テ」と1字ずつ唱えて書く。同じように母音が消えやすい語に chocolate、vegetable、different、every、camera がある。',
      },
      {
        question: '「野菜」を表す英単語を書きなさい。',
        wrongAnswer: 'vegtable',
        trapExplanation:
          'vegetable は「ヴェジタブル」と3音節に聞こえるが、実際には4音節でつづられている。2つ目の e が発音で消えるため、書くときに落としてしまう。',
        correctAnswer: 'vegetable',
        correctExplanation:
          'vegetable は ve・ge・ta・ble の4音節。書くときは「ヴェ・ゲ・タ・ブレ」と区切って唱える。g のあとの e は、g を「ジ」と読ませる役目も持っている（e・i・y の前の g はジ）。この e を落とすと読み方まで変わってしまう。',
      },
    ],
  },

  {
    id: 'eigo_s038',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まちがえやすいつづり③：文字を重ねる語',
    description: '同じ文字が2つ続く語を、重ねる位置とともに正確に書けるようにする',
    order: 538,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '同じ文字が2つ続く語は、音を聞いても1つにしか聞こえないため落としやすい。',
      'r を重ねる語：tomorrow、sorry、carry、hurry、library（library は r は重ねない）。',
      'n を重ねる語：dinner、beginning、tennis、running。',
      'その他：summer（m）、happy（p）、letter（t）、soccer（c）、hobby（b）、address（d と s）。',
      '短母音＋子音1つで終わる語に ing・ed を付けるときは子音を重ねる（run→running）。',
    ],
    sections: [
      {
        heading: '重ねる文字を落とさない',
        body: `英語には、同じ文字が2つ続く語がたくさんある。しかし発音では1つの音にしか聞こえないため、書くときに落としやすい。

■ r を重ねる語
tomorrow（明日）… to＋mor＋row。r が2つ、o が3つ。
sorry（ごめんなさい）
carry（運ぶ）／hurry（急ぐ）／marry（結婚する）
■ n を重ねる語
dinner（夕食）／tennis（テニス）／beginning（始まり）／running（走っている）
■ m を重ねる語
summer（夏）／swimming（泳いでいる）
■ p を重ねる語
happy（幸せな）／apple（りんご）／supper（夕食）／shopping（買い物）
■ t を重ねる語
letter（手紙）／better（よりよい）／little（小さい）／bottle（びん）／getting
■ その他
soccer（サッカー・c が2つ）／hobby（趣味・b が2つ）／address（住所・d と s が2つずつ）／difficult（f が2つ）／office（会社・f が2つ）／class（授業・s が2つ）／grass（草・s が2つ）

■ 数え方の練習
tomorrow … t－o－m－o－r－r－o－w（8文字、o が3つ、r が2つ）
beginning … b－e－g－i－n－n－i－n－g（9文字、n が3つ）

★ ポイント：重ねる文字がある語は、書いたあとに「文字数」を数えて確かめる。tomorrow は8文字、と数で覚えておくと点検が速い。`,
      },
      {
        heading: '重ねるかどうかのきまり',
        body: `語尾に ing や ed、er や est を付けるとき、最後の子音を重ねるかどうかにはきまりがある。

■ 重ねる条件（3つすべてを満たすとき）
①1音節の語（または最後の音節を強く読む語）
②母音字が1つだけ
③子音字1つで終わる
　run → running　swim → swimming　sit → sitting　stop → stopping
　big → bigger／biggest　hot → hotter／hottest
　begin → beginning（最後の音節 -gin を強く読むので重ねる）

■ 重ねない場合
・母音字が2つある … read → reading　look → looking　rain → raining
・子音字が2つ続く … help → helping　jump → jumping　want → wanted
・語末が e … make → making　use → used
・最後の音節を強く読まない … visit → visiting（VIS-it と前を強く読む）

■ 比べて確かめる
hop（ぴょんと跳ぶ）→ hopping　／　hope（望む）→ hoping
plan（計画する）→ planning　／　play（遊ぶ）→ playing
sit（すわる）→ sitting　／　eat（食べる）→ eating

⚠ 注意：hopping と hoping は1文字ちがいでまったく別の語になる。母音が短いか長いかを、重ねるかどうかで書き分けている。文字を重ねることには、音を短く保つという役目がある。`,
      },
    ],
    trapExamples: [
      {
        question: '「明日会いましょう。」の「明日」にあたる語を書きなさい。（See you （　）.）',
        wrongAnswer: 'tomorow',
        trapExplanation:
          'tomorrow は「トゥモロウ」と読み、r の音が1つにしか聞こえない。音のとおりに書くと r が1つ足りなくなる。o が3つあることも見落としやすい。',
        correctAnswer: 'tomorrow（See you tomorrow.）',
        correctExplanation:
          'tomorrow は t－o－m－o－r－r－o－w の8文字で、o が3つ、r が2つある。「トゥ・モ・ロウ」と3つに区切って、まん中に r を2つ書くと覚える。同じく r を重ねる語に sorry, carry, hurry がある。',
      },
      {
        question: '「泳ぐ（swim）」を「泳いでいる」の形にしなさい。',
        wrongAnswer: 'swiming',
        trapExplanation:
          '「ing を付ける」というきまりだけで処理してしまい、子音を重ねる条件を確かめない。swiming と書いても見た目に違和感が少なく、まちがいに気づきにくい。',
        correctAnswer: 'swimming',
        correctExplanation:
          '1音節で、母音字1つ＋子音字1つで終わる語は最後の子音を重ねる。swim→swimming、run→running、sit→sitting、stop→stopping、begin→beginning が同じ形。母音字が2つある read→reading や、子音字が2つ続く help→helping では重ねない。',
      },
    ],
  },

  {
    id: 'eigo_s039',
    subject: 'eigo',
    examType: 'chugaku',
    title: 'まちがえやすいつづり④：数と序数',
    description: '基数と序数のつづりの変化を、まちがえやすい語を中心に固める',
    order: 539,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      'four は u があるが、forty には u がない（fourty は誤り）。',
      'five → fifteen／fifty、twelve → twelfth のように、ve が f に変わる。',
      'nine → ninth、ninety は e が消える（nineth は誤り）。ただし nineteen は e が残る。',
      'eight → eighth は t が1つ（eightth ではない）。',
      '序数は th を付けるのが基本。first・second・third だけ形がちがう。',
    ],
    sections: [
      {
        heading: '基数のつづり',
        body: `数を表す語は、日付・年令・時刻・値段など、あらゆる場面で出てくる。つづりの変化にきまりがあるので整理する。

■ 1〜12（形がそれぞれちがう）
one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve

■ 13〜19（-teen が付く）
thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
・three → thirteen（three の形が変わる）
・five → fifteen（ve が f になる）
・eight → eighteen（t は1つのまま）

■ 20〜90（-ty が付く）
twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety
・four → forty（u が消える。fourty は誤り。ここが最頻出のまちがい）
・five → fifty（ve が f になる）
・eight → eighty（t は1つ）
・nine → ninety（e が消える）

■ 大きな数
hundred（100）, thousand（1000）
21以上はハイフンでつなぐ… twenty-one, thirty-five, ninety-nine
100以上は and を入れることがある… one hundred and twenty

★ ポイント：forty に u がないことと、fifteen・fifty が f になることは、必ず問われる。声に出して「フォーティーに u なし」と覚える。`,
      },
      {
        heading: '序数のつづり',
        body: `序数は「1番目・2番目…」を表す語で、日付・階数・順位で使う。

■ 特別な形（3つだけ）
first（1番目）, second（2番目）, third（3番目）

■ th を付けるのが基本
fourth, sixth, seventh, tenth, eleventh, thirteenth, fourteenth, sixteenth, seventeenth, eighteenth, nineteenth

■ 形が変わるもの
five → fifth（ve が f に）
eight → eighth（t は1つのまま。eightth ではない）
nine → ninth（e が消える。nineth は誤り）
twelve → twelfth（ve が f に）
twenty → twentieth（y を ie に変えて th）
thirty → thirtieth／forty → fortieth／ninety → ninetieth

■ 使い方
日付… May 5（May fifth と読む）／June 20（June twentieth）
階… the third floor（3階）
順位… He came in second.（2位だった）
21以上… twenty-first, twenty-second, thirty-first（後ろの数だけ序数にする）

■ 短く書く方法
1st, 2nd, 3rd, 4th, 5th … 数字＋語尾の2文字で表す。

⚠ 注意：nine → ninth と nineteen の e のあつかいがちがう。ninth では e が消え、nineteen では残る。まとめて書いて確かめる。`,
      },
    ],
    trapExamples: [
      {
        question: '「40」を表す英単語を書きなさい。',
        wrongAnswer: 'fourty',
        trapExplanation:
          '4は four、14は fourteen と、どちらも u があるため、40も同じように u を入れてしまう。発音でも u の有無は聞き分けられないので、知識がないと必ずまちがえる。',
        correctAnswer: 'forty',
        correctExplanation:
          '40 は forty で、u を書かない。four（4）と fourteen（14）には u があるのに、forty（40）だけ u がないという例外である。同じ仲間の変化に five→fifteen／fifty、nine→ninety（e が消える）がある。数の語の中で最もまちがえやすい語なので、単独で覚える。',
      },
      {
        question: '「9番目」を表す序数を書きなさい。',
        wrongAnswer: 'nineth',
        trapExplanation:
          '序数は「基数に th を付ける」と覚えているため、nine にそのまま th をつなげてしまう。fourth や tenth が原則どおりなので、nine も同じだと考えてしまう。',
        correctAnswer: 'ninth',
        correctExplanation:
          'nine の e を取ってから th を付けて ninth となる。同じように形が変わる序数に five→fifth、twelve→twelfth、eight→eighth（t は1つ）、twenty→twentieth がある。特別な形の first・second・third とあわせて、変化する序数だけをまとめて覚える。',
      },
    ],
  },

  {
    id: 'eigo_s040',
    subject: 'eigo',
    examType: 'chugaku',
    title: '総仕上げ：書き取り（ディクテーション）の手順',
    description: '聞いた英文を正しく書き取るための手順と、書いたあとの点検項目を身につける',
    order: 540,
    studyPeriod: '小5後半',
    targetLevel: 'oyo',
    keyPoints: [
      '書き取りは3回に分けて行う。①意味をつかむ ②語を書く ③点検する。',
      '聞こえない語（a, the, to, of, and）は、意味から補って書く。',
      '点検項目は6つ。文頭の大文字／固有名詞の大文字／ピリオド・クエスチョンマーク／三単現の s／複数形の s／過去形。',
      '知らない語はフォニックスのきまりで音から組み立て、空白のままにしない。',
      '書いたあとは必ず声に出して読み返す。意味の通らない文はどこかがまちがっている。',
    ],
    sections: [
      {
        heading: '3回に分けて書き取る',
        body: `聞いた英文を書き取る練習をディクテーションという。フォニックスで学んだことをすべて使う総合練習である。手順を決めておくと、聞きもらしても立て直せる。

■ 1回目：意味をつかむ
書かずに聞くことに集中する。何についての文かをつかむ。強く読まれる語（名詞・動詞・形容詞）だけを拾えば、意味の骨組みは分かる。

■ 2回目：語を書く
語を1つずつ書いていく。聞き取れなかった部分は空白にして、下線を引いておく。全部を書こうとして止まらないことが大切である。

■ 3回目：点検する
空白を埋め、次の6点を確かめる。
①文の最初は大文字か
②人名・地名・曜日・月・I は大文字か
③文の終わりにピリオド（.）か クエスチョンマーク（?）があるか
④主語が三人称単数で現在の文なら、動詞に s が付いているか
⑤複数を表す名詞に s が付いているか
⑥過去の文なら、動詞が過去形になっているか

★ ポイント：点数を落とすのは、聞き取れなかった語よりも、この6点の見落としであることが多い。点検は必ず行う。`,
      },
      {
        heading: '聞こえない語を補う',
        body: `弱く読まれる語は、実際にほとんど聞こえない。しかし文法の知識で補うことができる。

■ 補いやすい語
a / an … 数えられる名詞が1つのとき。次の音で a か an かを決める。
the … すでに話に出た名詞や、1つしかないもの（the sun, the door）。
to … 動詞のあとに「〜へ」「〜すること」が続くとき（go to school, want to play）。
of … 「〜の」を表すとき（a cup of tea, a lot of books）。
and … 語や文をつなぐとき。

■ 音のつながりに注意
an apple → 「アナポー」と聞こえる。an と apple の切れ目は聞こえない。
a lot of → 「アロラヴ」に近い。
want to → 「ワナ」に近く聞こえることがある。
聞こえたかたまりを、知っている語に分ける作業が必要になる。

■ 知らない語が出たとき
空白のままにせず、フォニックスのきまりで音から組み立てて書く。
「キャット」と聞こえたら、短母音の a を使って cat と書く。
「ネイム」と聞こえたら、マジックE を使って name と書く。
部分点がもらえることもあるし、あとで確かめれば覚えられる。

■ 最後に声に出して読み返す
書いた英文を小さな声で読み返す。意味が通らなければ、どこかがまちがっている。とくに主語と動詞の形が合っているかを確かめる。

⚠ 注意：完ぺきに書き取れなくてもよい。強く読まれる語（意味の中心）が正しく取れていれば、内容は理解できている。まずそこを確実にする。`,
      },
    ],
    trapExamples: [
      {
        question: '「彼は毎日サッカーをします。」を聞いて書き取りなさい。',
        wrongAnswer: 'He play soccer every day.',
        trapExplanation:
          '主語が He（三人称単数）で現在の文なので動詞に s が必要だが、-s は弱く短く読まれるため聞き取れない。聞こえたとおりに書くと s が落ちる。',
        correctAnswer: 'He plays soccer every day.',
        correctExplanation:
          '主語が三人称単数（he, she, it, 人名）で現在の文なら、動詞に s を付ける。聞き取れなくても文法の知識で補う。書き取りのあとの点検で「主語は何か」「現在の文か」を必ず確かめる。なお every day は2語に分けて書く（everyday は「毎日の」という形容詞で別の語）。',
      },
      {
        question: '「I have two cat.」という書き取りの答えを見直しなさい。どこがまちがっているか。',
        wrongAnswer: 'まちがいはない（cat は聞こえたとおりに書いてある）',
        trapExplanation:
          '語末の -s は弱く短いため聞こえないことが多く、聞こえたとおりに書くと落ちる。しかも文としては形が整って見えるので、見直しても気づきにくい。',
        correctAnswer: 'cat を cats にする（I have two cats.）',
        correctExplanation:
          'two（2つ）という数を表す語があるので、名詞は複数形にしなければならない。cats の -s は、直前が無声音の t なので「ス」と読む。書き取りの点検では「数を表す語があるか」「その名詞は複数形になっているか」を必ず確かめる。',
      },
    ],
  },
];
