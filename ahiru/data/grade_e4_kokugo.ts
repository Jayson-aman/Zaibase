import type { Question } from './questions-meta';

// 小学4年生・国語（標準カリキュラム）。
// 単元：漢字の読み書き（4年生配当漢字）／熟語の構成（対義語・類義語）／
// 慣用句・ことわざの基礎／主語・述語・修飾語／敬語の基礎（丁寧語）／
// 短い説明文・物語文の読解（気持ち・指示語・接続語・要点）／詩の読み取り
export const gradeE4KokugoQuestions: Question[] = [
  // ===== 漢字の読み書き（4年生配当漢字） =====
  {
    id: 'grade_e4_kokugo_01',
    subject: 'kokugo',
    question: '「兄はスーパーで働いている。」の――線部「働く」の読み方をひらがなで書きましょう。',
    answer: 'はたらく',
    hint: '人がうごいて仕事をするという意味の漢字。',
    explanation:
      '「働」は、人が体を動かして仕事をするという意味を表す漢字で、「はたらく」と読む。\n文の意味からも、「兄は仕事をしている」ということが分かる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_02',
    subject: 'kokugo',
    question: '「日本の人口は約一億二千五百万人です。」の――線部「億」の読み方をひらがなで書きましょう。',
    answer: 'おく',
    hint: '数の大きな単位を表す漢字。',
    explanation:
      '「億」は数の単位を表す漢字で、「おく」と読む。\n一億は一万の一万倍にあたる、とても大きな数のことである。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_03',
    subject: 'kokugo',
    question: '「図書館では静かに本を読みましょう。」の――線部「静か」の読み方をひらがなで書きましょう。',
    answer: 'しずか',
    hint: '音や動きがなく、落ち着いている様子を表す。',
    explanation:
      '「静」は、音や動きがなく落ち着いている様子を表す漢字。\n「静か」で「しずか」と読み、物音がしない様子を表す。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_04',
    subject: 'kokugo',
    question: '「兵士たちは長い行進を続けた。」の――線部「兵士」の読み方をひらがなで書きましょう。',
    answer: 'へいし',
    hint: '「兵」は軍隊で戦う人、「士」はある仕事をする人を表す。',
    explanation:
      '「兵」は軍隊で戦う人、「士」はある役目・仕事をする人を表す漢字。\n合わせて「兵士」で「へいし」と読み、軍隊に所属して戦う人を意味する。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_05',
    subject: 'kokugo',
    question: '「電車が駅と駅の間を連続して走る。」の――線部「連続」の読み方をひらがなで書きましょう。',
    answer: 'れんぞく',
    hint: '「連」はつながる、「続」はつづくという意味。',
    explanation:
      '「連」はつながる、「続」はつづくという意味を持つ漢字。\n合わせて「連続」で「れんぞく」と読み、切れずに続くことを表す。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_06',
    subject: 'kokugo',
    question: '「妹は毎日ピアノの練習に努力している。」の――線部「努力」の読み方をひらがなで書きましょう。',
    answer: 'どりょく',
    hint: '「努」はつとめる、力をつくすという意味。',
    explanation:
      '「努」はつとめる、力を尽くすという意味を持つ漢字。\n「努力」で「どりょく」と読み、目標のために一生けんめいがんばることを表す。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_07',
    subject: 'kokugo',
    question: '「きろくをやぶる新記録が生まれた。」の――線部「きろく」を漢字で書きましょう。',
    answer: '記録',
    hint: 'あとで見られるように書き残しておくこと。',
    explanation:
      '「記録」は、あとで見られるように書きとめておくことや、競技などの結果の数字を表す言葉。\n「記」も「録」も、書きとめるという意味を持つ漢字である。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_08',
    subject: 'kokugo',
    question: '「テストでせいこうしてうれしかった。」の――線部「せいこう」を漢字で書きましょう。',
    answer: '成功',
    hint: 'ものごとがうまくいくこと。',
    explanation:
      '「成功」は、ものごとがうまくいくことを表す言葉。\n「成」はできあがる、「功」はてがら・よい結果という意味を持つ漢字である。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_09',
    subject: 'kokugo',
    question: '「天気やもようをかんさつする。」の――線部「かんさつ」を漢字で書きましょう。',
    answer: '観察',
    hint: 'ものごとの様子をくわしく見ること。',
    explanation:
      '「観察」は、ものごとの様子をくわしく見ることを表す言葉。\n「観」は見る、「察」はくわしく調べるという意味を持つ漢字である。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_10',
    subject: 'kokugo',
    question: '「大きくなったらパイロットになるというきぼうを持っている。」の――線部「きぼう」を漢字で書きましょう。',
    answer: '希望',
    hint: 'こうなってほしいと願うこと。',
    explanation:
      '「希望」は、こうなってほしいと願うことを表す言葉。\n「希」はねがう、「望」はのぞむという意味を持つ漢字である。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_11',
    subject: 'kokugo',
    question: '「来週の遠足でみんなとやくそくをした。」の――線部「やくそく」を漢字で書きましょう。',
    answer: '約束',
    hint: '相手と決めごとをすること。',
    explanation:
      '「約束」は、相手と決めごとをすることを表す言葉。\n「約」はちぢめてまとめる、「束」はたばねるという意味から、「決めたことを結び合わせる」というイメージの言葉である。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_12',
    subject: 'kokugo',
    question: '「わたしの町は、となりの郡にふくまれている。」の――線部「郡」の読み方をひらがなで書きましょう。',
    answer: 'ぐん',
    hint: '市町村をまとめた地域の区分を表す漢字。',
    explanation:
      '「郡」は、いくつかの市町村をまとめた地域の区分を表す漢字で、「ぐん」と読む。\n形がよく似ている「群（むれ・ぐん）」は「人や動物が集まったもの」という意味なので、混同しないように注意しよう。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    pitfall: '「郡」と「群」は形が似ているので、意味の違い（郡＝地域の区分、群＝集まり）で覚えるとよい。',
  },

  // ===== 熟語の構成（対義語・類義語） =====
  {
    id: 'grade_e4_kokugo_13',
    subject: 'kokugo',
    question: '「出席」の対義語（反対の意味の言葉）を漢字で書きましょう。',
    answer: '欠席',
    hint: '出るべき場に出ないことを表す言葉。',
    explanation:
      '「出席」は、その場に出ることを表す言葉。「欠席」は、出るべき場に出ないことを表す言葉。\n「出」と「欠」が反対の意味になっている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_14',
    subject: 'kokugo',
    question: '「積極的」の対義語を、次の中から選びましょう。',
    choices: ['消極的', '意識的', '肯定的', '感情的'],
    answer: '消極的',
    hint: '自分から進んでは行動しない様子を表す言葉。',
    explanation:
      '「積極的」は自分から進んで行動する様子、「消極的」は自分から進んでは行動しない様子を表す言葉で、たがいに反対の意味を持つ。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_15',
    subject: 'kokugo',
    question: '「勝利」の対義語を漢字で書きましょう。',
    answer: '敗北',
    hint: '戦いや試合に負けること。',
    explanation:
      '「勝利」は戦いや試合に勝つこと、「敗北」は戦いや試合に負けることを表す言葉。\n「勝」と「敗」が反対の意味を持つ漢字である。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_16',
    subject: 'kokugo',
    question: '「原因」の対義語を漢字で書きましょう。',
    answer: '結果',
    hint: 'あることが起こったあとに現れることがら。',
    explanation:
      '「原因」は、あることが起こるもとになることがら。「結果」は、あることが起こったあとに現れることがら。\n「原因があって結果が生まれる」という関係になっている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_17',
    subject: 'kokugo',
    question: '「方法」の類義語（似た意味の言葉）を、次の中から選びましょう。',
    choices: ['手段', '目的', '理由', '結論'],
    answer: '手段',
    hint: 'あることを行うためのやり方を表す言葉。',
    explanation:
      '「方法」も「手段」も、あることを行うためのやり方を表す言葉で、意味がよく似ている。\n「目的」は目指すゴール、「理由」は原因、「結論」はまとめの内容を表すので意味が異なる。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_18',
    subject: 'kokugo',
    question: '「決心」の類義語を、次の中から選びましょう。',
    choices: ['決意', '決算', '決着', '決勝'],
    answer: '決意',
    hint: '心を決めることを表す言葉。',
    explanation:
      '「決心」も「決意」も、心を決めることを表す言葉で、意味がよく似ている。\n「決算」はお金の計算、「決着」は物事に結果がつくこと、「決勝」は最後の勝負を表す言葉。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_19',
    subject: 'kokugo',
    question: '「拡大」の対義語を漢字で書きましょう。',
    answer: '縮小',
    hint: '縮めて小さくすること。',
    explanation:
      '「拡大」は、広げて大きくすることを表す言葉。「縮小」は、縮めて小さくすることを表す言葉。\n「拡」と「縮」が反対の意味を持つ。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_20',
    subject: 'kokugo',
    question: '「短所」の類義語を漢字で書きましょう。',
    answer: '欠点',
    hint: '足りないところ、劣っているところ。',
    explanation:
      '「短所」も「欠点」も、その人やものの足りないところ、劣っているところを表す言葉で、意味がよく似ている。\nちなみに反対の意味の言葉は「長所」である。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 慣用句・ことわざの基礎 =====
  {
    id: 'grade_e4_kokugo_21',
    subject: 'kokugo',
    question: '「猫の手も借りたい」の意味として正しいものを選びましょう。',
    choices: ['とてもいそがしい様子', 'とても静かな様子', '猫がきらいな様子', '手先が器用な様子'],
    answer: 'とてもいそがしい様子',
    explanation:
      '「猫の手も借りたい」は、役に立たなそうな猫の手さえ借りたいと思うほど、人手が足りずにとてもいそがしい様子を表す慣用句。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_22',
    subject: 'kokugo',
    question: '「耳が痛い」の意味として正しいものを選びましょう。',
    choices: ['自分の弱点を言われてつらい', '大きな音がうるさい', '風邪をひいて耳が痛い', '人の話をよく聞く'],
    answer: '自分の弱点を言われてつらい',
    explanation:
      '「耳が痛い」は、実際に耳が痛いのではなく、自分の欠点や失敗を指摘されて、聞くのがつらいと感じることを表す慣用句。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_23',
    subject: 'kokugo',
    question: '「顔が広い」の意味として正しいものを選びましょう。',
    choices: ['知り合いが多い', '顔の大きさが平均より広い', '人前に出るのが得意', '有名人に似ている'],
    answer: '知り合いが多い',
    explanation: '「顔が広い」は、いろいろな人に知られていて、知り合いがたくさんいることを表す慣用句。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_24',
    subject: 'kokugo',
    question: '「石の上にも三年」の意味として正しいものを選びましょう。',
    choices: [
      'がまん強く続ければいつか成功する',
      '石はどんどん動かしたほうがよい',
      '三年ごとに新しいことを始めるとよい',
      '古いものはすぐに捨てたほうがよい',
    ],
    answer: 'がまん強く続ければいつか成功する',
    explanation:
      '冷たい石の上でも三年すわり続ければあたたかくなるという意味から、つらくてもがまん強く続ければ、いつか必ず成果が出るということわざ。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_25',
    subject: 'kokugo',
    question: '「急がば回れ」の意味として正しいものを選びましょう。',
    choices: [
      '急ぐときほど、安全で確実な方法を選んだほうがよい',
      '急いでいるときは近道を選ぶべきだ',
      '回り道をすると時間がかかって損をする',
      '急いでいるときは人に頼らないほうがよい',
    ],
    answer: '急ぐときほど、安全で確実な方法を選んだほうがよい',
    explanation:
      '危険な近道より、遠くても安全で確実な道を回ったほうが、結局は早く着くという意味から、急いでいるときこそ手堅い方法を選ぶべきだという教えのことわざ。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_26',
    subject: 'kokugo',
    question: '「猿も木から落ちる」の意味として正しいものを選びましょう。',
    choices: [
      'どんな名人でも失敗することがある',
      '動物は木登りが得意である',
      '一度失敗した人は二度と成功しない',
      '木登りは危険なのでやめたほうがよい',
    ],
    answer: 'どんな名人でも失敗することがある',
    explanation:
      '木登りが得意なはずの猿でも、木から落ちることがあるという意味から、その道の名人・上手な人でも、時には失敗することがあるということを表すことわざ。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_27',
    subject: 'kokugo',
    question: '「塵も積もれば山となる」の意味として正しいものを選びましょう。',
    choices: [
      '小さなものでも積み重なれば大きなものになる',
      '山にはごみを捨ててはいけない',
      '大きなことをするには時間がかかる',
      'ちりは山のように多く集まっている',
    ],
    answer: '小さなものでも積み重なれば大きなものになる',
    explanation:
      '「塵（ちり）」はごみやほこりのようにごく小さなもののたとえ。そんな小さなものでも、少しずつ積み重ねていけば、やがて山のように大きなものになるという意味のことわざで、こつこつとした努力の大切さを表している。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_28',
    subject: 'kokugo',
    question: '「手を焼く」の意味として正しいものを選びましょう。',
    choices: ['あつかいに困って苦労する', '料理が得意である', '手にやけどをする', '仕事を早く終わらせる'],
    answer: 'あつかいに困って苦労する',
    explanation:
      '「手を焼く」は、実際に手をやけどするという意味ではなく、うまく対応できずに困り果てる、てこずるという意味を表す慣用句。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 主語・述語・修飾語 =====
  {
    id: 'grade_e4_kokugo_29',
    subject: 'kokugo',
    question: '「白い犬が公園を走る。」という文の主語はどれですか。',
    answer: '犬が',
    hint: '「だれが（何が）」にあたる言葉をさがそう。',
    explanation:
      '主語は「だれが（何が）」にあたる言葉。この文で「走る」のは「犬」なので、主語は「犬が」となる。\n「白い」は犬の様子をくわしく説明する修飾語。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_30',
    subject: 'kokugo',
    question: '「白い犬が公園を走る。」という文の述語はどれですか。',
    answer: '走る',
    hint: '「どうする」にあたる言葉をさがそう。',
    explanation:
      '述語は「どうする・どんなだ・何だ」にあたる言葉で、文の最後にくることが多い。\nこの文では「犬が」「どうする」にあたる言葉が「走る」なので、述語は「走る」。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_31',
    subject: 'kokugo',
    question: '「妹はきのう新しい本を買った。」という文で、「本」という言葉をくわしくしている修飾語はどれですか。',
    answer: '新しい',
    hint: '「本」がどんな本かを説明している言葉をさがそう。',
    explanation:
      '修飾語は、ほかの言葉の様子や状態をくわしく説明する言葉。この文で「本」がどんな本かを説明しているのは「新しい」なので、これが「本」を修飾する修飾語である。\nちなみに「きのう」は「買った」を修飾している。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_32',
    subject: 'kokugo',
    question: '「弟が大きな声で歌った。」という文の主語はどれですか。',
    answer: '弟が',
    hint: '「だれが」歌ったのかを考えよう。',
    explanation:
      '主語は「だれが」にあたる言葉をさがす。この文で「歌った」のは「弟」なので、主語は「弟が」。\n「大きな声で」は「歌った」をくわしくする修飾語である。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_33',
    subject: 'kokugo',
    question: '「わたしはとても美しい虹を見た。」という文で、「虹」という言葉をくわしくしている修飾語はどれですか。',
    answer: '美しい',
    hint: '「虹」がどんな虹なのかを説明している言葉をさがそう。「とても」がどの言葉をくわしくしているかにも注意。',
    explanation:
      '「虹」がどんな虹なのかを説明している言葉をさがすと、「美しい」が見つかる。よって「虹」を修飾する修飾語は「美しい」。\n「とても」は「虹」ではなく「美しい」の程度をさらにくわしくしている言葉なので、まちがえないように注意する。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    pitfall: '修飾語が二重に重なる文では、それぞれの修飾語がどの言葉を直接くわしくしているかを一つずつ確かめよう。',
  },

  // ===== 敬語の基礎（丁寧語） =====
  {
    id: 'grade_e4_kokugo_34',
    subject: 'kokugo',
    question: '「今日は晴れだ。」を丁寧な言い方（丁寧語）に直しましょう。',
    answer: '今日は晴れです。',
    hint: '文の終わりを「です・ます」の形にしよう。',
    explanation:
      '丁寧語は、文の終わりを「です・ます」の形にして、相手に対してていねいな気持ちを表す言い方。\n「だ」を「です」に直すと、丁寧な言い方になる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_35',
    subject: 'kokugo',
    question: '「学校へ行く。」を丁寧語に直しましょう。',
    answer: '学校へ行きます。',
    hint: '動詞に「ます」をつけて言い方を変えよう。',
    explanation:
      '動詞の「行く」を丁寧語にするときは、「行き」に「ます」をつけて「行きます」とする。\n文の終わりを「ます」にすることで、ていねいな言い方になる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_36',
    subject: 'kokugo',
    question: '次のうち、丁寧語として正しいものを選びましょう。',
    choices: ['食べる', '食べます', '食べた', '食べろ'],
    answer: '食べます',
    explanation:
      '丁寧語は文の終わりに「です・ます」をつける言い方。「食べる」に「ます」をつけて「食べます」とすると、相手にていねいに伝える言い方になる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_37',
    subject: 'kokugo',
    question: '「わたしはケーキが好きだ。」を丁寧語に直しましょう。',
    answer: 'わたしはケーキが好きです。',
    hint: '文の終わりの「だ」を直そう。',
    explanation:
      '「好きだ」の「だ」を「です」に直すと、「好きです」という丁寧な言い方になる。\n文全体の意味は変わらず、言い方だけがていねいになる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 短い説明文・物語文の読解 =====
  {
    id: 'grade_e4_kokugo_38',
    subject: 'kokugo',
    question: 'この文章で、「わたし」はピアノの発表会が終わったとき、どんな気持ちになりましたか。',
    passage:
      '「がんばったね。」お母さんがそう言って、わたしの頭をなでてくれた。ずっと練習してきたピアノの発表会が、たった今終わったところだった。緊張でこわばっていた体から、力がすっと抜けていくのが分かった。',
    choices: ['ほっとした気持ち', '悲しい気持ち', '腹を立てた気持ち', 'たいくつな気持ち'],
    answer: 'ほっとした気持ち',
    explanation:
      '「緊張でこわばっていた体から、力がすっと抜けていく」という部分から、それまでの緊張がとけて、ほっと安心した気持ちになったことが読み取れる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_39',
    subject: 'kokugo',
    question:
      'たかしが「大丈夫、次があるよ。」とあおいに声をかけたきっかけとなったできごとは何ですか。文章の中の言葉を使って書きましょう。',
    passage:
      'たかしは、いつも一番に手を挙げる友達のあおいを、少しにがてだと思っていた。ある日、あおいが答えをまちがえて、クラス中が静まりかえった。たかしは思わず「大丈夫、次があるよ。」と声をかけていた。自分でもおどろく行動だった。',
    answer: 'あおいが答えをまちがえて、クラス中が静まりかえったこと',
    explanation:
      '直前の「あおいが答えをまちがえて、クラス中が静まりかえった。」という部分が、たかしが声をかけた直接のきっかけになっている。\nにがてだと思っていた相手でも、こまっている様子を見て思わず助けたくなったのだと分かる。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_40',
    subject: 'kokugo',
    question: '文章中の「この部屋」が指しているのは何ですか。',
    passage:
      '図書館には、本を静かに読むための「自習室」という部屋がある。そこでは話し声を出したり、物音を立てたりしてはいけない。この部屋を利用するときは、係の人に一声かけてから入るきまりになっている。',
    answer: '自習室',
    explanation:
      '指示語「この部屋」は、直前に出てきた「自習室という部屋」を指している。\n指示語の問題は、前の部分にもどって、何を指しているかをさがすのがポイント。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_41',
    subject: 'kokugo',
    question: '文章中の（　）に入る言葉として、最も適切なものを選びましょう。',
    passage:
      '森には、たくさんの木や草が生えている。（　）、その森にすむ動物たちの数は、年々少なくなっているという。原因の一つは、人間が森を切り開いて住宅地や畑を広げてきたことにあると考えられている。',
    choices: ['しかし', 'なぜなら', 'たとえば', 'つまり'],
    answer: 'しかし',
    explanation:
      '「森には木や草がたくさん生えている」という前の内容と、「動物の数が少なくなっている」という後の内容は、逆の関係になっている。\n前の内容と反対のことを述べるときに使う接続語は「しかし」。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_42',
    subject: 'kokugo',
    question: 'この文章で、筆者が最も伝えたいことはどれですか。',
    passage:
      'ミツバチは、花から花へと飛び回って蜜を集める。このとき、体についた花粉を別の花へ運ぶ役目もはたしている。花粉が運ばれることで、植物は実や種を作ることができる。ミツバチは、わたしたちの食べ物を作るうえでも、大切な役割をになっている。',
    choices: [
      'ミツバチは花粉を運び、植物にとって大切な役割をになっている',
      'ミツバチは花から花へ飛び回るのが好きである',
      'ミツバチは蜜だけを集めて生活している',
      '植物は種がなくても実をつけることができる',
    ],
    answer: 'ミツバチは花粉を運び、植物にとって大切な役割をになっている',
    explanation:
      '文章全体で、ミツバチが花粉を運ぶことによって植物が実や種を作れること、そしてそれがわたしたちの食べ物にもつながっていることが説明されている。\n最後の一文にまとめとしてその内容が書かれている。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_43',
    subject: 'kokugo',
    question: 'チームメイトに肩をたたかれたあと、ゆうたの気持ちはどのように変わりましたか。',
    passage:
      'サッカーの試合で、ゆうたはシュートを外してしまった。うつむいて歩いていると、チームメイトが「次は決めよう。」と肩をたたいてくれた。その一言で、ゆうたの心は少し軽くなった。',
    answer: '落ちこんでいた気持ちが、少し軽くなった（元気が出た）',
    explanation:
      '「その一言で、ゆうたの心は少し軽くなった」という文から、シュートを外してうつむくほど落ちこんでいた気持ちが、チームメイトのはげましによって軽くなったことが分かる。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_44',
    subject: 'kokugo',
    question: '文章中の「それ」が指している内容として最も適切なものを選びましょう。',
    passage:
      '台風が近づくと、海の波が高くなったり、強い風がふいたりする。テレビやラジオでは、こうした情報を早めに伝えてくれる。それを聞いたら、外に出るのを控えたり、家の窓をしっかり閉めたりして備えることが大切だ。',
    choices: ['テレビやラジオが伝える台風の情報', '海の波の高さ', '家の窓の数', '強い風の音'],
    answer: 'テレビやラジオが伝える台風の情報',
    explanation:
      '「それを聞いたら」の「それ」は、直前の「こうした情報」、つまり台風について「テレビやラジオが伝える情報」を指している。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_45',
    subject: 'kokugo',
    question: '手紙を読んだときの「りか」の気持ちとして最も適切なものはどれですか。',
    passage:
      '引っ越しの日、りかは仲良しの友達に手紙を渡された。「新しい学校でもがんばってね。」そう書かれた手紙を読みながら、りかの目には涙がにじんだ。悲しいのに、なぜか温かい気持ちだった。',
    choices: [
      '悲しさと温かさが入りまじった気持ち',
      '腹が立って仕方がない気持ち',
      '何も感じない気持ち',
      '早く新しい学校に行きたい気持ち',
    ],
    answer: '悲しさと温かさが入りまじった気持ち',
    explanation:
      '「悲しいのに、なぜか温かい気持ちだった」という一文から、友達と離れる悲しさと、友達の思いやりに触れた温かさの両方が入りまじった気持ちだったことが読み取れる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_46',
    subject: 'kokugo',
    question: 'この文章によると、植物の葉が緑色をしているのはなぜですか。',
    passage:
      '植物の葉は、多くの場合、緑色をしている。これは、葉の中にある「葉緑体」という部分に、緑色をした物質がふくまれているためである。葉緑体は、太陽の光を受けて、水と二酸化炭素から、植物が生きるための養分を作り出している。この働きを光合成という。',
    answer: '葉の中にある葉緑体に、緑色をした物質がふくまれているから',
    explanation:
      '文章の2文目に「これは、葉の中にある『葉緑体』という部分に、緑色をした物質がふくまれているためである」と、理由がはっきり書かれている。\n「これは〜ためである」という理由を表す文の形に注目すると見つけやすい。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_47',
    subject: 'kokugo',
    question: '文章中の（　）に入る言葉として、最も適切なものを選びましょう。',
    passage:
      '図書館の本は、みんなで使うものである。（　）、読み終わったら元の場所に返し、破れたページを見つけたら係の人に知らせるなど、次に使う人のことを考えて大切にあつかう必要がある。',
    choices: ['だから', 'しかし', 'ところで', 'または'],
    answer: 'だから',
    explanation:
      '「図書館の本はみんなで使うもの」という前の内容が理由となって、「大切にあつかう必要がある」という後の内容が導かれている。\n理由と結果をつなぐときに使う接続語は「だから」。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 詩の読み取り =====
  {
    id: 'grade_e4_kokugo_48',
    subject: 'kokugo',
    question: 'この詩は、どの季節のことをうたっていますか。',
    passage: '風がふく\n木の葉が\nくるくる くるくる\nまいながら落ちる\n秋が来た',
    answer: '秋',
    explanation:
      '「木の葉が…まいながら落ちる」「秋が来た」という言葉から、木の葉が舞い落ちる秋の様子をうたった詩だと分かる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_49',
    subject: 'kokugo',
    question: 'この詩で、同じ言葉をくり返して使うことで、海のどんな様子を強く伝えていますか。次から選びましょう。',
    passage: '海は青い\n海は広い\n海は歌う\nざぶん ざぶん\n波の声で',
    choices: ['海の青さや広さ、力強さ', '海の冷たさや静けさ', '海のよごれやにごり', '海の危険さや恐ろしさ'],
    answer: '海の青さや広さ、力強さ',
    explanation:
      '「海は青い」「海は広い」「海は歌う」と同じ言葉「海は」をくり返すことで、リズムを生み出しながら、海の青さ・広さ・力強い様子を強調して伝えている。\n「ざぶん ざぶん」という音のくり返しも、波の力強さを感じさせる。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_kokugo_50',
    subject: 'kokugo',
    question: 'この詩で、太陽は何にたとえられていますか。詩の中の言葉を使って書きましょう。',
    passage: '太陽は\n大きな\nオレンジのボール\nゆっくりと\n山のむこうへ\nころがっていく',
    answer: '大きなオレンジのボール',
    explanation:
      '「太陽は 大きな オレンジのボール」という部分で、太陽の形と色を、身近な「オレンジのボール」というものにたとえて表現している。\nこのような表現方法を「たとえ（比喩）」という。「ころがっていく」という表現も、太陽をボールに見立てているからこそ使われている言葉である。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    memoryTip: '詩の中で「〜のようだ」を使わずに、あるものを別のものに直接言いかえる表現方法を「隠喩（いんゆ）」という。',
  },
];
