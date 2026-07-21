import type { Question } from './questions-meta';
import type { Figure } from './figures';

// 東大寺学園高等学校（koko-todaiji）専用の追加問題セット。
// 監査の結果、既存の東大寺高問題（koko_sansu_ex_13.ts / kansai_koko_exam.ts）は
// 算数に大きく偏っていたため（算数60問・理科4問・英語3問・国語0問・社会0問）、
// このファイルで国語・理科・社会・英語を新規に16問ずつ追加し、教科の偏りを埋める。
// 東大寺学園は最難関校（偏差値71前後）のため basic は含めず、standard:advanced ≒ 6:10。
// id は他ファイルと衝突しないよう "todaiji_" のみのプレフィックスとする
//（既存ファイルは "todaiji_koko_" プレフィックスのため重複しない）。
export const schoolKokoTodaijiFill: Question[] = [
  // ============================================================
  // 国語 (kokugo) 16問
  // ============================================================
  {
    id: 'todaiji_kokugo_01',
    subject: 'kokugo',
    passage:
      '祖母の手元には、繕いかけの服がいくつも積まれていた。穴の空いたセーターを広げ、同じ色の毛糸を探しながら、祖母は「もったいないから」ではなく「この服にはまだ着られる時間が残っている」と言った。私はその言い方が気になった。捨てればすぐに済むことを、なぜわざわざ手間をかけてまで続けるのだろうか。祖母の指先が布の上を行き来する様子を見ているうちに、そこには単なる節約とは違う何かがあるように感じられた。',
    question: '「私」がこの場面で気になったのはどのようなことか、35字程度で説明しなさい。',
    answer: '祖母がわざわざ手間をかけてまで服を直し続ける理由が、単なる節約とは違うと感じられたこと。',
    hint: '「なぜ」という疑問の内容と、最後の一文の「単なる節約とは違う何か」に注目する',
    explanation:
      '【解説】\n「私」は、捨てればすぐに済むのにわざわざ手間をかけて服を直し続ける祖母の行動の理由が気になっている。最後の一文で「単なる節約とは違う何かがある」と感じたと述べられており、この「気になった対象」を過不足なくまとめる。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_02',
    subject: 'kokugo',
    passage:
      '祖母の手元には、繕いかけの服がいくつも積まれていた。穴の空いたセーターを広げ、同じ色の毛糸を探しながら、祖母は「もったいないから」ではなく「この服にはまだ着られる時間が残っている」と言った。私はその言い方が気になった。捨てればすぐに済むことを、なぜわざわざ手間をかけてまで続けるのだろうか。祖母の指先が布の上を行き来する様子を見ているうちに、そこには単なる節約とは違う何かがあるように感じられた。',
    question:
      '傍線部「この服にはまだ着られる時間が残っている」という祖母の言葉から読み取れる、祖母のものに対する考え方を50字程度で説明しなさい。',
    answer:
      '服を単なる消耗品としてではなく、まだ役割を果たせる時間（寿命）を持つ存在として大切に扱おうとする考え方。',
    hint: '「もったいないから」という理由をあえて否定し、「時間が残っている」と言い換えている点に注目する',
    explanation:
      '【解説】\n祖母は「もったいないから」という単純な節約の発想をあえて退け、服を「まだ着られる時間が残っている」存在として捉えている。これは、ものを単なる消耗品としてではなく、固有の役割・寿命を持つ存在として尊重する考え方を示している。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_03',
    subject: 'kokugo',
    passage:
      '祖母の手元には、繕いかけの服がいくつも積まれていた。穴の空いたセーターを広げ、同じ色の毛糸を探しながら、祖母は「もったいないから」ではなく「この服にはまだ着られる時間が残っている」と言った。私はその言い方が気になった。捨てればすぐに済むことを、なぜわざわざ手間をかけてまで続けるのだろうか。祖母の指先が布の上を行き来する様子を見ているうちに、そこには単なる節約とは違う何かがあるように感じられた。',
    question:
      '傍線部「なぜわざわざ手間をかけてまで続けるのだろうか」という「私」の疑問に対して、この文章を最後まで読むと「私」はどのような答えにたどり着いたと考えられるか、40字程度で説明しなさい。',
    answer:
      '祖母にとって服を直すことは、単なる節約ではなく、ものを大切にする気持ちの表れなのだという答え。',
    hint: '文章の最後で「私」が感じたことが、疑問に対する「私」なりの答えになっている',
    explanation:
      '【解説】\n文章の最後で「私」は、祖母の指先の動きを見ているうちに「単なる節約とは違う何かがある」と感じている。これは、冒頭の疑問（なぜ手間をかけてまで続けるのか）に対して、「ものを大切にする気持ちの表れだから」という「私」なりの答えにたどり着いたことを示している。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_04',
    subject: 'kokugo',
    passage:
      '電子書籍の普及によって、紙の本を読む機会は減っているように見える。しかし、図書館を訪れる人の数は必ずしも減っていない。むしろ、静かな環境で本を選ぶ時間そのものを求めて図書館に足を運ぶ人も少なくない。情報を得る手段としてだけでなく、じっくりと向き合う時間を持つ場所として、図書館の役割は形を変えながら残り続けているのかもしれない。',
    question: '本文の要旨を70字以内でまとめなさい。',
    answer:
      '電子書籍の普及で紙の本を読む機会は減って見えるが、図書館は情報を得る場だけでなく、静かにじっくり本と向き合う時間を持つ場所として、役割を変えながら残り続けているということ。',
    hint: '「情報を得る手段」と「じっくりと向き合う時間」という対比のキーワードを使ってまとめる',
    explanation:
      '【解説】\n本文は「電子書籍の普及で紙の本を読む機会が減って見える」という前提から始まり、それでも図書館は「情報を得る場」だけでなく「静かに本と向き合う時間を持つ場所」として役割を変えながら残っているという結論に至る。この2点を過不足なくまとめる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_05',
    subject: 'kokugo',
    passage:
      '電子書籍の普及によって、紙の本を読む機会は減っているように見える。しかし、図書館を訪れる人の数は必ずしも減っていない。むしろ、静かな環境で本を選ぶ時間そのものを求めて図書館に足を運ぶ人も少なくない。情報を得る手段としてだけでなく、じっくりと向き合う時間を持つ場所として、図書館の役割は形を変えながら残り続けているのかもしれない。',
    question:
      '傍線部「図書館の役割は形を変えながら残り続けている」とあるが、これはどういうことか、45字程度で説明しなさい。',
    answer:
      '単に情報を得るための場所ではなく、静かにじっくりと本と向き合う時間を持てる場所としての価値へと役割が変化しているということ。',
    hint: '筆者が図書館の「新しい価値」として何を挙げているかを本文からそのまま探す',
    explanation:
      '【解説】\n「形を変えながら残り続けている」とは、図書館の存在意義そのものが失われたのではなく、「情報を得る手段」という従来の役割から、「静かにじっくり本と向き合う時間を持てる場所」という新しい役割へと変化していることを意味する。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_06',
    subject: 'kokugo',
    passage:
      '電子書籍の普及によって、紙の本を読む機会は減っているように見える。しかし、図書館を訪れる人の数は必ずしも減っていない。むしろ、静かな環境で本を選ぶ時間そのものを求めて図書館に足を運ぶ人も少なくない。情報を得る手段としてだけでなく、じっくりと向き合う時間を持つ場所として、図書館の役割は形を変えながら残り続けているのかもしれない。',
    question: '本文の内容と合うものを次から選びなさい。',
    answer: '静かな環境で本を選ぶ時間を求めて図書館に行く人もいる',
    hint: '本文中に「むしろ」という逆接の後に述べられている内容に注目する',
    explanation:
      '【解説】\n本文には「むしろ、静かな環境で本を選ぶ時間そのものを求めて図書館に足を運ぶ人も少なくない」とあり、選択肢の内容と一致する。他の選択肢は、図書館利用者が「確実に減っている」「情報を得る価値のみが評価されている」「紙の本が完全になくなる」など、本文に述べられていない、または本文の内容と食い違う内容である。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: [
      '電子書籍の普及によって図書館を訪れる人は確実に減っている',
      '図書館は情報を得る場所としての価値のみが今も評価されている',
      '静かな環境で本を選ぶ時間を求めて図書館に行く人もいる',
      '紙の本は今後完全に電子書籍に置き換わると筆者は述べている',
    ],
  },
  {
    id: 'todaiji_kokugo_07',
    subject: 'kokugo',
    question: '古文単語「いとほし」の意味を、現代語で説明しなさい。',
    answer: '気の毒だ、かわいそうだ、という意味（古くは「かわいい・いじらしい」の意味で使われることもある）。',
    hint: '「いとおしい」という現代語の語源になった古語であることを手がかりに考える',
    explanation:
      '【解説】\n「いとほし」は古文単語として頻出で、基本的には「気の毒だ・かわいそうだ」という同情の気持ちを表す。時代や文脈によっては「かわいい・いじらしい」という愛情の意味で使われることもあり、文脈に応じて訳し分けることが必要になる。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_08',
    subject: 'kokugo',
    question:
      '古文の助動詞「べし」は文脈によって推量・意志・当然・可能・命令など複数の意味を持つ。次の文における「べし」の意味を答えなさい。「汝、必ず来べし。」',
    answer: '当然・命令に近い強い推量（「きっと来るはずだ」「必ず来なければならない」の意味）。',
    hint: '「必ず」という強い副詞と一緒に使われている点に注目する',
    explanation:
      '【解説】\n助動詞「べし」は推量・意志・当然・可能・命令など幅広い意味を持つが、「必ず」という強い副詞を伴い、目上の者から相手に強く求める文脈では、当然・命令に近い強い意味で訳すのが適切。「べし」の意味は前後の文脈（誰が誰に対して言っているか、どのような副詞を伴うか）から判断する必要がある。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_09',
    subject: 'kokugo',
    question:
      '漢文の訓読で使う返り点のうち、①一字だけ上の字に返って読むときに使う記号の名称と、②二字以上返って読むときに使う記号の名称（2つ）を、それぞれ答えなさい。',
    answer: '①レ点　②一点・二点（さらに返る場合は上点・下点なども用いる）',
    hint: '「一字だけ返る」場合と「二字以上返る」場合とで、使う記号が異なることを思い出す',
    explanation:
      '【解説】\n漢文を訓読する際、下の字から上の字へ一字だけ返って読むときには「レ点」を使う。二字以上を隔てて返って読むときには「一点・二点」（さらに複雑な場合は「上点・下点」）を使う。返り点は漢文を日本語の語順で読むための重要な符号であり、東大寺学園のように漢文教育を重視する学校では基本ルールの正確な理解が求められる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_10',
    subject: 'kokugo',
    question: '四字熟語「臥薪嘗胆」の意味を説明しなさい。',
    answer: '目的を達成するために、苦労や苦しみを長い間耐え忍ぶこと。中国の故事に由来する。',
    hint: '「薪の上に臥し、苦い肝をなめる」という文字通りの意味から、どのような心構えを表すか考える',
    explanation:
      '【解説】\n「臥薪嘗胆」は、薪の上に寝て体を痛めつけ、苦い肝をなめて苦しさを忘れないようにする、という中国の故事に由来する四字熟語。目的（多くは復讐や雪辱）を果たすために、長期間苦労を耐え忍ぶことを表す。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_11',
    subject: 'kokugo',
    question: '「具体」の対義語を答えなさい。',
    answer: '抽象',
    hint: '物事を実際の形や事例に即さず、共通する性質だけを取り出して考える態度を表す言葉を考える',
    explanation:
      '【解説】\n「具体」は物事を実際の形や事例に即して捉えることを指す。これに対して「抽象」は、個々の事例から共通する性質だけを取り出し、実際の形を離れて捉えることを指し、両者は対義語の関係にある。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_12',
    subject: 'kokugo',
    question:
      '次の3つの表現を尊敬語・謙譲語・丁寧語に分類しなさい。①「お客様が召し上がる」②「私がお届けします」③「本日は晴天でございます」',
    answer: '①尊敬語、②謙譲語、③丁寧語',
    hint: '尊敬語は相手の動作を高め、謙譲語は自分の動作をへりくだり、丁寧語は言い方を丁寧にする',
    explanation:
      '【解説】\n①「召し上がる」は「食べる」の尊敬語で、お客様（相手）の動作を高めている。\n②「お届けする」は謙譲語で、自分の動作をへりくだって表現している。\n③「ございます」は丁寧語で、動作の主体に関わらず言い方を丁寧にするものである。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_13',
    subject: 'kokugo',
    question:
      '次のA・B・Cの文はそれぞれ異なる表現技法（直喩・隠喩・擬人法）を含んでいる。それぞれの表現技法を答えなさい。A「風が私にささやいた。」B「彼女の笑顔は太陽のようだった。」C「彼の決意は鋼だった。」',
    answer: 'A:擬人法、B:直喩、C:隠喩',
    hint: '人でないものを人のように表現しているか、「〜のようだ」を使っているかどうかで見分ける',
    explanation:
      '【解説】\nAは「風」という人でないものが「ささやく」という人間の動作をしているように表現しており、擬人法。\nBは「〜のようだった」という言葉を使って笑顔を太陽にたとえている直喩（明喩）。\nCは「〜のようだ」を使わず「決意は鋼だった」と直接言い切ることでたとえている隠喩（暗喩）。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_14',
    subject: 'kokugo',
    question:
      '奈良時代に成立した、現存する日本最古の和歌集の名称を答えなさい。また、その編纂に関わったとされる人物を1人答えなさい。',
    answer: '『万葉集』。編纂に関わったとされる人物として大伴家持などが挙げられる。',
    hint: '奈良時代の和歌集で、天皇から庶民まで幅広い身分の人々の歌が収められていることで知られる',
    explanation:
      '【解説】\n『万葉集』は奈良時代に成立した、現存する日本最古の和歌集で、天皇や貴族だけでなく防人や庶民の歌まで幅広く収められている点が特徴。編纂には複数の人物が関わったと考えられているが、最終的なまとめ役として大伴家持が深く関わったとされる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_15',
    subject: 'kokugo',
    question: '熟語「岩石」の構成（似た意味の漢字を重ねる／反対の意味の漢字を組み合わせる、など）を説明しなさい。',
    answer: '似た意味の漢字を重ねた熟語（岩＝いわ、石＝いし、どちらも同じような意味を表す漢字を組み合わせている）。',
    hint: '「岩」と「石」の意味がどのような関係にあるかを考える',
    explanation:
      '【解説】\n「岩」も「石」も、どちらも硬い鉱物性の物体を指す似た意味の漢字である。このように似た意味の漢字を重ねて1つの熟語を作る構成の例には、他に「森林」「道路」「身体」などがある。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_kokugo_16',
    subject: 'kokugo',
    question:
      '「古いものを大切にすることには、どのような意味があると思うか。」具体例を挙げながら、あなたの考えを100字程度で述べなさい。',
    answer:
      '（記述式・自由回答。模範解答例）例えば古い建物を残すことは、その時代の人々の暮らしや技術を今に伝えることにつながる。古いものを大切にすることは、単なる懐古趣味ではなく、過去と現在をつなぎ、次の世代に文化を受け継ぐという意味を持つと思う。',
    hint: '身近な具体例（建物・道具・行事など）を1つ思い出し、それを大切にすることで何が受け継がれるかを考える',
    explanation:
      '【解説】\nこれは唯一の正解がない自由記述問題（最難関校らしい思考力・記述力を問う出題形式）。採点にあたっては、①「古いものを大切にする意味」への理解、②具体例の説得力、③論理的なつながり、の3点を評価するとよい。模範解答はあくまで一例であり、他の妥当な具体例・論理展開も正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },

  // ============================================================
  // 理科 (rika) 16問
  // ============================================================
  {
    id: 'todaiji_rika_01',
    subject: 'rika',
    question: '抵抗R₁=5Ω、R₂=15Ωを直列につないだ回路に、電圧20Vの電源をつないだ。この回路を流れる電流の大きさを求めなさい。',
    answer: '1A',
    hint: '直列回路の合成抵抗は、それぞれの抵抗の和になる',
    explanation:
      '【解説】\n直列回路の合成抵抗=R₁+R₂=5+15=20Ω。\nオームの法則 I=V/R より、I=20/20=1A。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_02',
    subject: 'rika',
    figureDescription: 'R₁=6Ω、R₂=3Ωの抵抗を並列につないだ回路。電源電圧は12V。',
    question:
      '抵抗R₁=6Ω、R₂=3Ωを並列につないだ回路に、電圧12Vの電源をつないだ。電源を流れる電流（回路全体を流れる電流）の大きさと、R₁に流れる電流の大きさをそれぞれ求めなさい。',
    answer: '回路全体を流れる電流=6A、R₁に流れる電流=2A',
    hint: '並列回路では、それぞれの抵抗に電源と同じ電圧がかかる。合成抵抗の逆数はそれぞれの抵抗の逆数の和になる',
    explanation:
      '【解説】\n並列回路の合成抵抗Rは 1/R=1/R₁+1/R₂=1/6+1/3=1/6+2/6=3/6=1/2 より R=2Ω。\n電源を流れる電流=V/R=12/2=6A。\nR₁に流れる電流=V/R₁=12/6=2A（参考：R₂に流れる電流=12/3=4A。2A+4A=6Aで一致）。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_03',
    subject: 'rika',
    question:
      'ある植物を光の当たる場所に置くと、見かけの光合成速度（見かけのCO₂吸収量）は毎時5mgであった。同じ植物を暗所に置くと、呼吸によって毎時3mgのCO₂を放出していた。この植物の真の光合成速度（毎時のCO₂吸収量）を求め、その求め方の考え方を説明しなさい。',
    answer: '真の光合成速度=毎時8mg。光合成をしている間も呼吸は同時に行われているため、見かけの光合成速度＋呼吸速度＝真の光合成速度となる。',
    hint: '光が当たっているときも、植物は光合成と同時に呼吸も行っていることに注目する',
    explanation:
      '【解説】\n光が当たっている植物では、光合成と呼吸が同時に行われている。見かけの光合成速度（見かけのCO₂吸収量）は、実際の光合成によるCO₂吸収量から、同時に行われている呼吸によるCO₂放出量が差し引かれた値である。\nよって、真の光合成速度＝見かけの光合成速度＋呼吸速度＝5+3=8mg/時。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_04',
    subject: 'rika',
    question:
      'マルバアサガオの花の色は、赤（RR）と白（rr）が不完全優性の関係にあり、Rr（雑種）はピンク色になる。ピンクの花（Rr）どうしをかけ合わせたとき、子の花の色の分離比（赤:ピンク:白）を求めなさい。',
    answer: '赤:ピンク:白=1:2:1',
    hint: '遺伝子の組み合わせをRR、Rr、rR、rrの4通りに分けて考え、それぞれの遺伝子型がどの花の色に対応するか考える',
    explanation:
      '【解説】\n親の遺伝子型はどちらもRr。子の遺伝子型はRR:Rr:rR:rr=1:1:1:1となる。\n不完全優性の場合、RR=赤、Rr（rRを含め計2つ）=ピンク、rr=白と対応するので、表現型の比は赤:ピンク:白=1:2:1となる（優性の法則が成り立つ組み合わせと異なり、中間の形質が現れる点に注意）。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_05',
    subject: 'rika',
    question: '密度0.8g/cm³の物体を水（密度1g/cm³）に浮かべた。このとき、物体の体積のうち水面下に沈む割合（％）を求めなさい。',
    answer: '80%（体積の80%が水中に沈む）',
    hint: '浮いて静止しているとき、浮力の大きさと物体の重さの大きさは等しい',
    explanation:
      '【解説】\n物体が水に浮いて静止しているとき、浮力＝物体の重さが成り立つ。\n浮力＝水の密度×沈んでいる体積×重力、物体の重さ＝物体の密度×物体全体の体積×重力なので、\n沈んでいる体積の割合＝物体の密度÷水の密度＝0.8÷1＝0.8。\nよって、物体の体積の80%が水中に沈む。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_06',
    subject: 'rika',
    question:
      '体積200cm³、質量300gの物体をばねばかりに吊るし、完全に水中に沈めた。このときのばねばかりの示す値を求めなさい。（水の密度は1g/cm³、100gの物体にはたらく重力の大きさを1Nとする）',
    answer: '1N',
    hint: '浮力の大きさは、物体が押しのけた水の重さに等しい。ばねばかりの値は「物体の重さ－浮力」になる',
    explanation:
      '【解説】\n物体は体積200cm³すべてが水中にあるので、押しのけた水の体積も200cm³。水の密度は1g/cm³なので、押しのけた水の質量は200g、これにはたらく重力＝200÷100×1N=2N。これが浮力の大きさ。\n物体の重さ＝300÷100×1N=3N。\nばねばかりの示す値＝物体の重さ－浮力＝3N－2N=1N。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_07',
    subject: 'rika',
    question: '次の化学反応式の( )に当てはまる係数を求め、プロパンの燃焼を表す化学反応式を完成させなさい。C₃H₈+( )O₂ → 3CO₂+( )H₂O',
    answer: 'C₃H₈+5O₂ → 3CO₂+4H₂O（O₂の係数は5、H₂Oの係数は4）',
    hint: '反応の前後で、炭素・水素・酸素それぞれの原子の数が等しくなるように係数を決める',
    explanation:
      '【解説】\n左辺のC₃H₈には炭素3個・水素8個。右辺の3CO₂には炭素3個(一致)、H₂Oの係数をxとすると水素は2x個必要で、水素8個と合わせるためx=4。\n次に酸素の数を確認すると、右辺は3CO₂の6個+4H₂Oの4個=合計10個の酸素原子が必要なので、O₂の係数は10÷2=5。\nよって C₃H₈+5O₂ → 3CO₂+4H₂O。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_08',
    subject: 'rika',
    figureDescription:
      '物質Aの溶解度曲線（水100gに溶ける物質の質量[g]と温度[℃]の関係を表す折れ線グラフ）。実際の解答となる数値は図中には示さない。',
    question:
      '図は物質Aの溶解度曲線である（60℃で110g、20℃で32gが水100gに溶ける）。60℃の水100gに物質Aを110g溶かして飽和水溶液を作った。この水溶液を20℃まで冷やすと、何gの結晶が出てくるか求めなさい。',
    answer: '78g',
    hint: '60℃で溶けていた量と、20℃で溶けきれる量の差が、冷やしたときに出てくる結晶の量になる',
    explanation:
      '【解説】\n60℃の水100gには物質Aが110gまで溶ける（この問題では110gちょうど溶かしているので飽和状態）。\n20℃まで冷やすと、水100gに溶けることができる量は32gまで減る。\n溶けきれなくなった分が結晶として出てくるので、110-32=78g。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_09',
    subject: 'rika',
    question:
      '濃度の等しい塩酸10cm³を過不足なく中和するのに、ある濃度の水酸化ナトリウム水溶液が15cm³必要だった。同じ塩酸25cm³を過不足なく中和するには、この水酸化ナトリウム水溶液は何cm³必要か求めなさい。',
    answer: '37.5cm³',
    hint: '塩酸の体積と、それを中和するのに必要な水酸化ナトリウム水溶液の体積は比例する',
    explanation:
      '【解説】\n中和に必要な体積は比例関係にあるので、10:15=25:x という比例式が成り立つ。\nx=25×15÷10=37.5cm³。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_10',
    subject: 'rika',
    question:
      '塩化バリウム水溶液と硫酸ナトリウム水溶液を混ぜると、硫酸バリウムの白色沈殿ができる（BaCl₂+Na₂SO₄→BaSO₄+2NaCl）。塩化バリウム水溶液50gと硫酸ナトリウム水溶液50gを混ぜたところ、沈殿が2.33g生じた。ろ過した後の溶液（ろ液）の質量を求めなさい。',
    answer: '97.67g',
    hint: '化学変化の前後で、物質全体の質量は変わらない（質量保存の法則）',
    explanation:
      '【解説】\n質量保存の法則より、反応前の全質量＝反応後の全質量。\n反応前：塩化バリウム水溶液50g+硫酸ナトリウム水溶液50g=100g\n反応後：沈殿2.33g+ろ液xg=100g\nよって x=100-2.33=97.67g。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_11',
    subject: 'rika',
    question:
      '焦点距離10cmの凸レンズの前方15cmの位置に物体を置いた。レンズの反対側にできる実像の位置（レンズからの距離）を求めなさい。また、その像は物体の何倍の大きさになるか求めなさい。',
    answer: 'レンズから30cmの位置に、物体の2倍の大きさの実像ができる。',
    hint: 'レンズの公式 1/f=1/a+1/b（a:物体までの距離、b:像までの距離、f:焦点距離）を使う。倍率はb/aで求まる',
    explanation:
      '【解説】\nレンズの公式 1/f=1/a+1/b に f=10、a=15 を代入すると、\n1/b=1/10-1/15=(3-2)/30=1/30 より b=30cm。\n倍率＝b/a＝30/15=2倍。\n物体は焦点距離(10cm)と焦点距離の2倍(20cm)の間に置かれているため、レンズの反対側の焦点距離の2倍より遠い位置に、物体より大きな倒立実像ができる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_12',
    subject: 'rika',
    question:
      'ある地域では、震源からの距離をxkm、初期微動継続時間をt秒とすると、x=8t（大森公式、比例定数8km/秒）の関係が成り立つ。ある地点での初期微動継続時間が6秒だったとき、この地点の震源からの距離を求めなさい。',
    answer: '48km',
    hint: 'x=ktの式に、与えられた値をそのまま代入する',
    explanation:
      '【解説】\nx=8t に t=6 を代入すると、x=8×6=48km。\n初期微動継続時間（P波が到着してからS波が到着するまでの時間）は、震源からの距離にほぼ比例することを利用した「大森公式」の考え方である。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_13',
    subject: 'rika',
    figureDescription:
      'A地点・B地点でのボーリング調査の柱状図。同じ凝灰岩層（鍵層）を基準にして2地点を対比する。層の厚さ・位置は模式的なもので、実際の縮尺とは対応しない。',
    question:
      'A地点とB地点でボーリング調査を行ったところ、同じ凝灰岩層（火山灰の層、鍵層として使える）が確認できた。この凝灰岩層は、B地点の方がA地点より3m低い位置にあった。A地点とB地点の水平距離が30mであるとき、この地層が一定の傾きを持って傾いていると考えると、その傾き（何m進むごとに何m低くなるか）を求めなさい。',
    answer: '水平に30m進むごとに3m低くなる傾き（10m進むごとに1m低くなる傾き）。',
    hint: '同じ鍵層の標高差を、2地点間の水平距離で割ると傾きの割合が求まる',
    explanation:
      '【解説】\n同じ凝灰岩層（鍵層）は本来、堆積した当時は水平に広がっていたと考えられる。それがA地点とB地点で3mの高低差を持つのは、地層全体が傾いているためと考えられる。\n傾きの割合＝標高差÷水平距離＝3m÷30m=1/10。\nつまり、水平に10m進むごとに1m低くなる傾きで地層が傾いていることになる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_14',
    subject: 'rika',
    question: 'だ液・胃液・すい液にそれぞれ含まれる主な消化酵素を1つずつ答え、それぞれが主に分解する栄養素も答えなさい。',
    answer: 'だ液=アミラーゼ(デンプンを分解)、胃液=ペプシン(タンパク質を分解)、すい液=リパーゼ(脂肪を分解)。',
    hint: 'デンプン・タンパク質・脂肪のそれぞれを分解する消化酵素の名前を思い出す',
    explanation:
      '【解説】\nだ液に含まれるアミラーゼはデンプンを麦芽糖などに分解する。胃液に含まれるペプシンは酸性の環境でタンパク質を分解する。すい液に含まれるリパーゼは脂肪を脂肪酸とモノグリセリドに分解する（すい液にはこの他アミラーゼやトリプシンなども含まれる）。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_15',
    subject: 'rika',
    question: '電熱線に6Vの電圧をかけたところ2Aの電流が流れた。この電熱線を5分間使用したときに発生する熱量(J)を求めなさい。',
    answer: '3600J',
    hint: '電力(W)=電圧×電流で求め、熱量(J)=電力×時間(秒)で求める',
    explanation:
      '【解説】\n電力＝電圧×電流＝6×2=12W。\n5分間＝5×60=300秒。\n発生する熱量＝電力×時間＝12×300=3600J。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_rika_16',
    subject: 'rika',
    question:
      '地球は太陽のまわりを365日で1周し、ある惑星は225日で1周している。この惑星が地球から見て再び同じ位置関係（会合）になるまでの日数を求めなさい。小数第1位を四捨五入して整数で答えなさい。',
    answer: '約587日',
    hint: '公転周期の短い（内側の）惑星と地球の会合周期は、1/会合周期=1/内側の惑星の周期-1/地球の周期 という式で求められる',
    explanation:
      '【解説】\n会合周期をTとすると、1/T=1/225-1/365=(365-225)/(225×365)=140/82125。\nT=82125/140=586.6…\n小数第1位を四捨五入すると、約587日。\n公転周期の短い惑星ほど地球より速く公転するため、一定の周期で地球を追い越し、再び同じ位置関係（会合）になる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },

  // ============================================================
  // 社会 (shakai) 16問
  // ============================================================
  {
    id: 'todaiji_shakai_01',
    subject: 'shakai',
    question: '743年に聖武天皇が出した、大仏の造立を命じる詔の名称を答えなさい。また、その目的を説明しなさい。',
    answer:
      '大仏造立の詔。仏教の力によって国家を守り（鎮護国家）、社会の不安を取り除いて国民の幸福を願うことを目的とした。',
    hint: '当時、伝染病の流行や貴族の反乱など社会不安が続いていたことと、仏教への信仰との関係を考える',
    explanation:
      '【解説】\n聖武天皇の時代、伝染病の流行や貴族間の争いなど社会不安が続いていた。聖武天皇は仏教の力で国家を安定させようと考え(鎮護国家の思想)、741年に国分寺・国分尼寺建立の詔を、743年に東大寺の大仏（盧舎那仏）造立の詔を出した。大仏造立には多くの人々の労働力・資材が動員され、完成には長い年月を要した。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_02',
    subject: 'shakai',
    question: '奈良時代の律令制度における「班田収授法」とはどのような制度か、対象となる土地の名称も含めて説明しなさい。',
    answer:
      '戸籍にもとづき、6歳以上の男女に一定の広さの口分田を与え、その人が死ぬと国に返還させる制度。',
    hint: '誰に、どのような土地を与え、いつ国に返すことになっているかを整理する',
    explanation:
      '【解説】\n班田収授法は、戸籍にもとづいて6歳以上のすべての男女に口分田と呼ばれる田を割り当て、耕作させて租(税)を納めさせる制度。土地を与えられた人が死亡すると、その口分田は国に返還され、別の人に再び分配された。この制度は、公地公民の原則（土地と人民は国のもの）を実現するための仕組みであった。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_03',
    subject: 'shakai',
    question: '鎌倉幕府における将軍と御家人の関係「御恩」と「奉公」とは、それぞれどのような内容か説明しなさい。',
    answer:
      '御恩=将軍が御家人の以前からの領地を保護したり、新たな領地を与えたりすること。奉公=御家人が将軍のために戦いに参加したり、京都・鎌倉の警備をしたりすること。',
    hint: '「将軍が御家人に与えるもの」と「御家人が将軍のために行うこと」を分けて考える',
    explanation:
      '【解説】\n鎌倉幕府の支配は、将軍と御家人との個人的な主従関係の上に成り立っていた。将軍は御家人の領地を保護し(本領安堵)、功績に応じて新しい領地を与える(新恩給与)などの「御恩」を施し、御家人はその見返りとして、いざというときに戦いに参加し(いざ鎌倉)、平時は京都・鎌倉の警備を担う「奉公」を行った。この御恩と奉公の関係が、封建制度の土台となった。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_04',
    subject: 'shakai',
    question: '日本の裁判所が持つ「違憲審査権」とはどのような権限か、その権限を最終的に持つ機関の名称とともに説明しなさい。',
    answer:
      '国会が制定した法律や、内閣の行った処分などが日本国憲法に違反していないかどうかを審査する権限。最終的な判断を下すのは最高裁判所であり、そのため「憲法の番人」と呼ばれる。',
    hint: '「法律や行政の行為が憲法に違反していないか」を判断する権限であることに注目する',
    explanation:
      '【解説】\n違憲審査権とは、国会が制定した法律や内閣の行った命令・処分などが、日本国憲法の規定に違反していないかどうかを、裁判所が審査する権限である。すべての裁判所がこの権限を持つが、最終的な判断は最高裁判所が下すため、最高裁判所は「憲法の番人」と呼ばれる。この仕組みは、三権分立における裁判所から国会・内閣への抑制の役割を果たしている。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_05',
    subject: 'shakai',
    figureDescription:
      '中京工業地帯・阪神工業地帯・京浜工業地帯の製造品出荷額（兆円）を表した棒グラフ（おおよその近年の傾向を示す）。',
    question:
      '図は中京工業地帯・阪神工業地帯・京浜工業地帯の製造品出荷額を表した棒グラフである。このグラフから読み取れる中京工業地帯の特徴を、他の工業地帯と比較して説明しなさい。',
    answer:
      '中京工業地帯は三つの工業地帯の中で製造品出荷額が最も多く、愛知県を中心とする自動車産業など機械工業（輸送用機械）の割合が特に高いことが特徴である。',
    hint: 'グラフの数値の大小と、中京工業地帯にどのような産業が集まっているかを結びつけて考える',
    explanation:
      '【解説】\nグラフから、中京工業地帯の製造品出荷額が三つの工業地帯の中で最も多いことが読み取れる。中京工業地帯は愛知県・三重県などに広がり、大手自動車メーカーの本拠地を中心に、機械工業（輸送用機械）の出荷額の割合が特に高いことが特徴で、これが出荷額全体を押し上げている。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_06',
    subject: 'shakai',
    question: '冷帯（亜寒帯）気候の特徴と、この気候区分に見られる代表的な針葉樹林の名称を答えなさい。',
    answer:
      '冷帯（亜寒帯）気候は、夏と冬の気温差が大きく、冬の寒さが非常に厳しい気候である。この気候に見られる針葉樹林を「タイガ」と呼ぶ。',
    hint: 'シベリアなど高緯度地域に広がる、夏と冬の気温差が大きい気候を思い浮かべる',
    explanation:
      '【解説】\n冷帯（亜寒帯）気候は、シベリアやカナダ北部など北半球の高緯度地域に広がり、夏は比較的温暖になる一方、冬は非常に厳しい寒さになるため、年間の気温差が大きいことが特徴である。この気候帯に広がる針葉樹の森林を「タイガ」と呼び、木材資源として利用されている。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_07',
    subject: 'shakai',
    question:
      'ある都市の人口ピラミッドが、10代後半〜30代の層が周囲の年代よりも多い「星型」の形をしているとき、この都市にはどのような人口移動が起きていると考えられるか説明しなさい。',
    answer:
      '進学や就職のために、周辺の地域から若い世代（生産年齢人口）がこの都市に流入していると考えられる。',
    hint: '「星型」の人口ピラミッドは都市型の人口構成を表すことを思い出す',
    explanation:
      '【解説】\n星型の人口ピラミッドは、進学・就職などを理由に若い世代（10代後半〜30代)が周辺地域から流入する都市部でよく見られる形である。地方で生まれ育った若者が、大学進学や就職を機に大都市へ移り住むことで、その年代の人口が周囲の年代より多くなる。逆に、若者が流出する地方の地域では、この年代がへこんだ「ひょうたん型」に近い形になることが多い。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_08',
    subject: 'shakai',
    question:
      '地方自治において、有権者が一定数以上の署名を集めることで、条例の制定・改廃を首長に対して求めることができる権利の名称を答えなさい。',
    answer: '直接請求権（条例の制定・改廃請求）',
    hint: '地方自治は「民主主義の学校」と呼ばれ、住民が直接政治に参加できる仕組みが用意されている',
    explanation:
      '【解説】\n地方自治では、住民が首長や議会に頼るだけでなく、一定数以上の署名を集めることで、条例の制定・改廃、議会の解散、首長・議員の解職などを直接求めることができる「直接請求権」が認められている。条例の制定・改廃を求める場合、必要な署名数は有権者の50分の1以上とされている。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_09',
    subject: 'shakai',
    figureDescription: '2010年頃（東日本大震災前）の日本の発電量の電源別割合を示す円グラフ。',
    question:
      '図は2010年頃（東日本大震災前）の日本の発電量の電源別割合を示した円グラフである。2011年の東日本大震災（東京電力福島第一原子力発電所事故）以降、この割合はどのように変化したと考えられるか説明しなさい。',
    answer:
      '福島第一原子力発電所の事故を受けて多くの原子力発電所の稼働が停止し、原子力発電の割合が大きく減少した。その分を補うために火力発電の割合がさらに増加したと考えられる。',
    hint: '原子力発電所に対する安全性への不安が高まったことで、発電の仕方にどのような変化が起きたか考える',
    explanation:
      '【解説】\n2011年の東日本大震災に伴う東京電力福島第一原子力発電所の事故を受け、日本各地の原子力発電所は安全確認のため運転を停止し、稼働を再開できないところも多かった。そのため原子力発電の割合は大きく減少し、その不足分を補うために火力発電（特に天然ガス・石炭・石油）の割合がそれまで以上に増加した。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_10',
    subject: 'shakai',
    question: '円高になると、日本から製品を輸出している企業にとってどのような影響があるか説明しなさい。',
    answer:
      '円高になると外国の通貨に対する円の価値が上がるため、同じ日本製品でも外国での販売価格（外貨換算後の価格）が実質的に上昇し、外国製品と比べて売れにくくなる。そのため輸出企業の売り上げや利益が減りやすくなる。',
    hint: '円高とは円の価値が「上がる」ことであり、それが海外での価格にどう影響するかを考える',
    explanation:
      '【解説】\n円高は、外国の通貨（例えばドル）に対して円の価値が上がることを意味する。例えば1ドル=150円から1ドル=100円になった場合、同じ150円の商品を輸出しても、外国では1ドルではなく1.5ドルで売らなければ同じ利益を確保できず、価格競争力が下がる。このため、円高は一般に輸出企業にとって不利にはたらき、逆に円安は輸出企業にとって有利にはたらく。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_11',
    subject: 'shakai',
    question:
      '国際連合の安全保障理事会において、常任理事国が持つ「拒否権」とはどのような権限か説明しなさい。',
    answer:
      '常任理事国（アメリカ・イギリス・フランス・ロシア・中国）のうち1か国でも反対すると、他の理事国すべてが賛成していても、その議案（決議案）を成立させることができないという権限。',
    hint: '「拒否権」という名前から、1か国の反対だけで決議全体をどうできるかを考える',
    explanation:
      '【解説】\n安全保障理事会は5つの常任理事国（アメリカ・イギリス・フランス・ロシア・中国）と10の非常任理事国で構成される。決議には常任理事国を含む9理事国以上の賛成が必要だが、常任理事国のうち1か国でも反対すれば、他の理事国全てが賛成していてもその決議は成立しない。これを拒否権(きょひけん)と呼び、大国間の合意が得られない問題では安全保障理事会が機能しにくくなる原因ともなっている。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_12',
    subject: 'shakai',
    question:
      '縮尺25000分の1の地形図上で、2地点間の長さが4cmであった。①実際の距離は何mか求めなさい。②また、地形図上で1c㎡の広さの土地の実際の面積は何㎡か求めなさい。',
    answer: '①1000m（1km）　②62500㎡',
    hint: '距離は縮尺をそのままかければよいが、面積は縮尺を2回（縦と横）かけることになる点に注意する',
    explanation:
      '【解説】\n①実際の距離＝地図上の長さ×縮尺の分母＝4cm×25000=100000cm=1000m。\n②地図上の1cmは実際には25000cm=250mにあたる。面積は縦・横の両方に縮尺がかかるため、地図上の1c㎡(1cm×1cm)にあたる実際の面積は250m×250m=62500㎡になる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_13',
    subject: 'shakai',
    question:
      '次のできごとを、起こった順（古い順）に並べ替えなさい。①大化の改新　②墾田永年私財法　③保元の乱　④承久の乱',
    answer: '①→②→③→④（大化の改新645年→墾田永年私財法743年→保元の乱1156年→承久の乱1221年）',
    hint: 'それぞれの出来事のおおよその世紀を思い出す',
    explanation:
      '【解説】\n大化の改新(645年、飛鳥時代)→墾田永年私財法(743年、奈良時代、口分田不足を背景に開墾地の永久私有を認めた法)→保元の乱(1156年、平安時代末期、貴族・武士の争い)→承久の乱(1221年、鎌倉時代、後鳥羽上皇が幕府打倒を図って敗れた戦い)の順に起きている。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_14',
    subject: 'shakai',
    question:
      'イギリスの思想家で、政府が人々の生命・自由・財産などの権利を侵害した場合、人々には政府に抵抗し、新しい政府を作り直す権利（抵抗権・革命権）があると説いた人物の名前と、その代表的な著作を答えなさい。',
    answer: 'ジョン・ロック。代表的な著作は『統治二論（市民政府二論）』。',
    hint: 'アメリカ独立宣言などにも影響を与えた「社会契約説」を唱えた思想家の一人',
    explanation:
      '【解説】\nイギリスの思想家ジョン・ロックは、著書『統治二論（市民政府二論）』の中で、人は生まれながらに生命・自由・財産を守る権利（自然権）を持ち、政府はそれを守るために人々の同意によって作られたものだと説いた。もし政府がこれらの権利を侵害するならば、人々には政府に抵抗し、新しい政府を作り直す権利（抵抗権・革命権）があるとした。この考え方はアメリカ独立宣言などにも大きな影響を与えた。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_15',
    subject: 'shakai',
    question: '日本の所得税に採用されている「累進課税」とはどのような仕組みか、その目的とともに説明しなさい。',
    answer:
      '所得が多くなるほど、より高い税率が適用される仕組み。所得の多い人により多くの税を負担してもらうことで、所得の格差を小さくする(所得の再分配を図る)ことを目的としている。',
    hint: '「累進」という言葉から、所得が増えるにつれて税率がどう変化するかを考える',
    explanation:
      '【解説】\n累進課税とは、所得が多い人ほど高い税率が適用される課税方式である。これは、負担能力に応じて税を負担してもらう「応能負担」の考え方にもとづき、高所得者からより多くの税を集め、社会保障などを通じて所得の低い人々に再分配することで、所得格差を緩和することを目的としている。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_shakai_16',
    subject: 'shakai',
    question: '日本の食料自給率（カロリーベース）は、先進国の中でも低い水準にある。その理由として考えられることを1つ説明しなさい。',
    answer:
      '国内の農地面積が限られていることに加え、農業従事者の高齢化・減少が進んでおり、国内生産だけでは需要をまかないきれず、多くの食料を海外からの輸入に頼らざるを得ないため。',
    hint: '国内の農業を支える「農地」と「人手」の両面から考える',
    explanation:
      '【解説】\n日本は国土が狭く農地面積が限られていることに加え、農業従事者の高齢化と減少が進んでいる。また、食生活の変化（肉類や油脂類の消費増加）により、飼料用の穀物や油脂原料などの輸入依存度も高い。これらの要因が重なり、日本の食料自給率(カロリーベース)は先進国の中でも低い水準にとどまっている。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
  },

  // ============================================================
  // 英語 (eigo) 16問
  // ============================================================
  {
    id: 'todaiji_eigo_01',
    subject: 'eigo',
    passage:
      "Our school's science club started an experiment last spring: they built a small solar panel to charge their laptop during club activities. At first, the panel produced only a little electricity, especially on cloudy days. After changing the angle of the panel several times, the club found that facing it directly toward the sun in the afternoon produced the most power. The club now plans to share their data with a nearby elementary school next month.",
    question: 'What is the main idea of this passage?',
    answer: 'A science club improved how much electricity their solar panel produced by changing its angle.',
    hint: 'Look at what the club actually did and discovered through their experiment.',
    explanation:
      '【解説】\n本文は、科学部が太陽光パネルの実験を行い、パネルの角度を変えることでより多くの電力を得られることを発見した、という内容が中心。「雲の日は発電量が少なかった」「隣の小学校とデータを共有する予定」は補足的な情報であり、主題ではない。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: [
      'The science club stopped using the solar panel because it did not work.',
      'A science club improved how much electricity their solar panel produced by changing its angle.',
      'Cloudy days always produce more electricity than sunny days.',
      'The nearby elementary school built the solar panel for the club.',
    ],
  },
  {
    id: 'todaiji_eigo_02',
    subject: 'eigo',
    passage:
      "Our school's science club started an experiment last spring: they built a small solar panel to charge their laptop during club activities. At first, the panel produced only a little electricity, especially on cloudy days. After changing the angle of the panel several times, the club found that facing it directly toward the sun in the afternoon produced the most power. The club now plans to share their data with a nearby elementary school next month.",
    question: 'What did the club find after changing the angle of the panel several times? Answer in English.',
    answer: 'They found that facing the panel directly toward the sun in the afternoon produced the most power.',
    hint: 'This is stated directly in the third sentence of the passage.',
    explanation:
      '【解説】\n本文第3文「After changing the angle of the panel several times, the club found that facing it directly toward the sun in the afternoon produced the most power.」がそのまま答えになる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_eigo_03',
    subject: 'eigo',
    passage:
      "Our school's science club started an experiment last spring: they built a small solar panel to charge their laptop during club activities. At first, the panel produced only a little electricity, especially on cloudy days. After changing the angle of the panel several times, the club found that facing it directly toward the sun in the afternoon produced the most power. The club now plans to share their data with a nearby elementary school next month.",
    question:
      'In the sentence "The club now plans to share their data with a nearby elementary school," what does "share" mean here?',
    answer: 'to give something (information) to others so that they can use or see it',
    hint: 'Think about what happens to the data once the club "shares" it with another school.',
    explanation:
      '【解説】\n"share"は「分け与える・共有する」という意味で、ここでは科学部が集めたデータを近くの小学校に提供し、一緒に使えるようにするという文脈で使われている。「秘密にする」「捨てる」「売る」といった意味とは異なる。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: ['to keep it secret', 'to give something to others so that they can use or see it', 'to sell it', 'to throw it away'],
  },
  {
    id: 'todaiji_eigo_04',
    subject: 'eigo',
    passage:
      'When Mika arrived at her homestay family\'s house in Canada, she felt nervous because she could not understand every word her host mother said. During the first week, she wrote down new words in a small notebook every night. By the end of her stay, she was surprised to find that she could join conversations at the dinner table without stopping to translate in her head.',
    question: 'What is the main idea of this passage?',
    answer: 'Mika became able to understand and join conversations in English through daily effort during her homestay.',
    hint: 'Compare how Mika felt at the beginning of her stay with how she felt by the end.',
    explanation:
      '【解説】\n本文は、ホームステイ当初は英語が理解できず不安だったミカが、毎晩新しい単語をノートに書き留めるという日々の努力を通じて、最終的には翻訳せずに会話に参加できるようになった、という変化を描いている。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: [
      'Mika became able to understand and join conversations in English through daily effort during her homestay.',
      'Mika could not understand any English even after her homestay ended.',
      'Mika\'s host mother could not understand Japanese at all.',
      'Mika decided to stop studying English after returning to Japan.',
    ],
  },
  {
    id: 'todaiji_eigo_05',
    subject: 'eigo',
    passage:
      'When Mika arrived at her homestay family\'s house in Canada, she felt nervous because she could not understand every word her host mother said. During the first week, she wrote down new words in a small notebook every night. By the end of her stay, she was surprised to find that she could join conversations at the dinner table without stopping to translate in her head.',
    question:
      'Choose the correct word to complete the sentence: "She wrote down new words in a notebook every night ___ she could review them later."',
    answer: 'so that',
    hint: 'This blank connects Mika\'s action (writing down words) with her purpose (reviewing them later).',
    explanation:
      '【解説】\n「新しい単語をノートに書き留める」という行動と「あとで復習できる」という目的をつなぐ接続表現が必要。目的を表す "so that ~(主語)+(助動詞)" の形が正しい。because(理由)、although(譲歩)、unless(条件・〜しない限り)ではこの文脈に合わない。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: ['so that', 'because', 'although', 'unless'],
  },
  {
    id: 'todaiji_eigo_06',
    subject: 'eigo',
    passage:
      'When Mika arrived at her homestay family\'s house in Canada, she felt nervous because she could not understand every word her host mother said. During the first week, she wrote down new words in a small notebook every night. By the end of her stay, she was surprised to find that she could join conversations at the dinner table without stopping to translate in her head.',
    question:
      'Why did Mika feel nervous when she arrived, and what had changed by the end of her stay? Answer in English.',
    answer:
      'She felt nervous because she could not understand every word her host mother said. By the end of her stay, she could join conversations at the dinner table without stopping to translate in her head.',
    hint: 'The first sentence explains why she was nervous, and the last sentence explains what had changed.',
    explanation:
      '【解説】\n第1文「she felt nervous because she could not understand every word her host mother said」が不安だった理由、最終文「she could join conversations at the dinner table without stopping to translate in her head」が滞在の終わりまでに変化した内容を示している。この2点をまとめて答える。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_eigo_07',
    subject: 'eigo',
    question: 'Choose the correct word to complete the sentence: "If I ___ rich, I would travel around the world."',
    answer: 'were',
    hint: 'This is a hypothetical (unreal) condition about the present, so the subjunctive form of "be" is used for all subjects.',
    explanation:
      '【解説】\n現在の事実に反する仮定を表す仮定法過去では、be動詞は主語に関係なく were を使うのが文法的に正式なルール(口語ではwasも使われることがある)。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: ['am', 'was', 'were', 'be'],
  },
  {
    id: 'todaiji_eigo_08',
    subject: 'eigo',
    question: 'Rewrite the following sentence in the passive voice: "Millions of people speak English around the world."',
    answer: 'English is spoken by millions of people around the world.',
    hint: 'Make the object of the original sentence the subject of the new sentence, and use "be + past participle."',
    explanation:
      '【解説】\n能動態の目的語 "English" を主語にし、「be動詞+過去分詞」の形にする。動詞speakの過去分詞は spoken。動作主(millions of people)は文末に "by 〜" で示す。\nEnglish is spoken by millions of people around the world.',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_eigo_09',
    subject: 'eigo',
    question:
      'Combine the following two sentences into one using a relative pronoun: "This is the movie. I want to watch it this weekend."',
    answer: 'This is the movie which(that) I want to watch this weekend.',
    hint: '"it" in the second sentence refers to "the movie," so replace it with a relative pronoun and join the sentences.',
    explanation:
      '【解説】\n2文目の "it" は "the movie" を指す目的語なので、目的格の関係代名詞 which(またはthat、省略も可)に置き換えて1文目に続ける。\nThis is the movie which(that) I want to watch this weekend.',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_eigo_10',
    subject: 'eigo',
    question: 'Choose the correct comparative form: "This bag is ___ than that one."',
    answer: 'heavier',
    hint: '"heavy" is a short adjective, so its comparative form is made by adding "-er" (with a spelling change: y → i).',
    explanation:
      '【解説】\n"heavy" のような短い形容詞（1〜2音節）は、語尾に-erをつけて比較級を作る。ただし"y"で終わる形容詞は、yをiに変えてから-erをつけるため、heavier が正しい形になる。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: ['heavier', 'more heavy', 'most heavy', 'heavy'],
  },
  {
    id: 'todaiji_eigo_11',
    subject: 'eigo',
    question:
      'Change the following direct speech into indirect (reported) speech: Tom said, "I am tired now."',
    answer: 'Tom said (that) he was tired then.',
    hint: 'In reported speech, the tense usually shifts back one step, and words like "now" often change to "then."',
    explanation:
      '【解説】\n直接話法から間接話法に書き換えるときは、①伝達動詞に合わせて時制を1つ過去にずらす(am→was)、②人称代名詞を話し手に合わせて変える(I→he)、③"now"のような時を表す語を、間接話法にふさわしい語(then)に変える、という3つの変化が必要。\nTom said (that) he was tired then.',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_eigo_12',
    subject: 'eigo',
    question: 'Choose the correct word to complete the sentence: "I have known him ___ we were children."',
    answer: 'since',
    hint: '"since" is used with a starting point in time (such as a point expressed by a clause), while "for" is used with a period of time.',
    explanation:
      '【解説】\n"we were children"は「〜だったとき」という開始時点を表す節なので、開始時点を表す since を使う。期間の長さを表す場合は for を使う（例：for ten years）。',
    difficulty: 'standard',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: ['since', 'for', 'during', 'ago'],
  },
  {
    id: 'todaiji_eigo_13',
    subject: 'eigo',
    question:
      'Find and correct the grammatical error in this sentence: "Each of the students have finished their homework."',
    answer: 'Each of the students has finished his or her homework.',
    hint: '"Each of ~" is treated as a singular subject in formal grammar.',
    explanation:
      '【解説】\n"each of ~" は文法的には単数扱いをするのが正式なルールなので、be動詞・一般動詞は単数形（has）を使う。厳密には、それに続く代名詞も"his or her"のように単数で受けるのが文法的に正しいとされる（口語では"they/their"も広く使われる）。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
  {
    id: 'todaiji_eigo_14',
    subject: 'eigo',
    question: 'Choose the correct indirect question: "Could you tell me ___?"',
    answer: 'what time it is',
    hint: 'In indirect questions, the word order changes back to subject + verb (not question order).',
    explanation:
      '【解説】\n間接疑問文では「疑問詞+主語+動詞」の語順になる(疑問文のような主語・動詞の倒置は起こらない)。したがって what time it is が正しい。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: ['what time is it', 'what time it is', 'what is time it', 'time what it is'],
  },
  {
    id: 'todaiji_eigo_15',
    subject: 'eigo',
    question:
      'What does the underlined phrase mean? "The meeting was put off until next week."',
    answer: 'postponed (delayed to a later time)',
    hint: '"put off" is a phrasal verb that describes changing the timing of an event.',
    explanation:
      '【解説】\n"put off"は「延期する」という意味の熟語(句動詞)。文脈から、会議が中止されたのではなく、来週まで延期されたことを表している。"canceled"(中止された)や"started early"(早く始まった)とは意味が異なる。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
    choices: ['canceled', 'postponed (delayed to a later time)', 'started early', 'shortened'],
  },
  {
    id: 'todaiji_eigo_16',
    subject: 'eigo',
    question:
      'Write your opinion in English (about 30-40 words): "Do you think it is good for students to have a part-time job while in school? Give one reason."',
    answer:
      '(自由英作文・模範解答例) "I think it is good for students to have a part-time job because they can learn how to manage time and money. This experience will also help them communicate with different kinds of people."',
    hint: 'State your opinion clearly first (I think.../I don\'t think...), then give one clear reason using "because."',
    explanation:
      '【解説】\nこれは唯一の正解がない自由英作文問題。採点にあたっては、①意見が明確に述べられているか、②理由が"because"などを使って論理的に示されているか、③文法・語彙の正確さ、の3点を評価するとよい。模範解答はあくまで一例であり、賛成・反対どちらの立場でも、理由が論理的であれば正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-todaiji',
    examType: 'koko',
  },
];

export const figuresKokoTodaijiFill: Record<string, Figure> = {
  // R1=6Ω・R2=3Ωを並列につないだ回路。電流の値は解答なので示さない。
  todaiji_rika_02: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R₁(6Ω)' }], [{ type: 'resistor', label: 'R₂(3Ω)' }]],
    battery: { label: '12V' },
  },
  // 物質Aの溶解度曲線（水100gに溶ける質量[g] と 温度[℃] の関係）。
  todaiji_rika_08: {
    kind: 'lineChart',
    xLabel: '温度(℃)',
    yLabel: '溶解度(g/水100g)',
    xRange: [0, 80],
    yRange: [0, 180],
    series: [
      {
        label: '物質A',
        markers: true,
        points: [
          { x: 0, y: 13 },
          { x: 20, y: 32 },
          { x: 40, y: 64 },
          { x: 60, y: 110 },
          { x: 80, y: 169 },
        ],
      },
    ],
  },
  // A地点・B地点の柱状図。同じ凝灰岩層（鍵層）を含み、高さの違いから地層の傾きを読み取る。
  todaiji_rika_13: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        layers: [
          { name: '泥岩層', thickness: 2, pattern: 'mud' },
          { name: '砂岩層', thickness: 2, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 1, pattern: 'ash' },
          { name: 'れき岩層', thickness: 2, pattern: 'gravel' },
        ],
      },
      {
        label: 'B地点',
        layers: [
          { name: '砂岩層', thickness: 2, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 1, pattern: 'ash' },
          { name: 'れき岩層', thickness: 2, pattern: 'gravel' },
          { name: '泥岩層', thickness: 1, pattern: 'mud' },
        ],
      },
    ],
  },
  // 中京・阪神・京浜工業地帯の製造品出荷額(兆円)を比較する棒グラフ。
  todaiji_shakai_05: {
    kind: 'barChart',
    xLabel: '工業地帯',
    yLabel: '製造品出荷額(兆円)',
    bars: [
      { label: '中京', value: 58 },
      { label: '阪神', value: 33 },
      { label: '京浜', value: 26 },
    ],
  },
  // 2010年頃(震災前)の日本の発電量の電源別割合を示す円グラフ。
  todaiji_shakai_09: {
    kind: 'pieChart',
    slices: [
      { label: '火力', value: 60 },
      { label: '原子力', value: 25 },
      { label: '水力', value: 8 },
      { label: '新エネルギー等', value: 7 },
    ],
  },
};
