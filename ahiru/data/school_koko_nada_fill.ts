import type { Question } from './questions-meta';
import type { Figure } from './figures';

// 灘高等学校（koko-nada）の教科偏りを埋めるための追加問題セット。
// 既存の koko-nada 問題は算数中心だったため、国語・理科・社会・英語をこのファイルで補強する。
// 灘高校は全国最難関(偏差値78+)のため basic は含めず、standard:advanced ≒ 6:10。
// id は他ファイルの 'nada_koko_◯◯_NN' と衝突しない 'nada_◯◯_NN' 形式を使用する。
export const schoolKokoNadaFill: Question[] = [
  // ============================================================
  // 国語 (kokugo) 16問
  // ============================================================
  {
    id: 'nada_kokugo_01',
    subject: 'kokugo',
    passage:
      'かつて「何でも屋」が重宝された時代があった。あらゆる仕事を一人でこなせる者が、共同体の中で頼れる存在とされたからである。しかし技術が高度化し社会が複雑になるにつれ、一つの分野を深く極めた専門家の価値が急速に高まっていった。皮肉なことに、専門性を突き詰めた人ほど、隣接する分野との対話に苦労する場面が増えている。深い知識は、時に他者との共通言語を失わせる代償を伴うのかもしれない。',
    question: '本文の要旨を70字以内でまとめなさい。',
    answer:
      'かつては何でも屋が重宝されたが、社会の複雑化により専門家の価値が高まった一方、専門性を極めるほど他分野との対話が難しくなるという代償も生じているということ。',
    hint: '「何でも屋→専門家」という時代の変化と、専門性の高まりに伴う「代償」の両方を落とさずに要約する',
    explanation:
      '【解説】\n本文は前半で「何でも屋」から「専門家」へと重宝される人材が変化した経緯を述べ、後半でその専門性の高まりが「他分野との対話の困難さ」という代償を伴うことを指摘している。この2つの内容を過不足なく70字以内にまとめる。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_02',
    subject: 'kokugo',
    passage:
      'かつて「何でも屋」が重宝された時代があった。あらゆる仕事を一人でこなせる者が、共同体の中で頼れる存在とされたからである。しかし技術が高度化し社会が複雑になるにつれ、一つの分野を深く極めた専門家の価値が急速に高まっていった。皮肉なことに、専門性を突き詰めた人ほど、隣接する分野との対話に苦労する場面が増えている。深い知識は、時に他者との共通言語を失わせる代償を伴うのかもしれない。',
    question: '傍線部「皮肉なことに」とあるが、何がどのように皮肉なのか、40字以内で説明しなさい。',
    answer:
      '専門性を高めて価値を得たはずの専門家ほど、他分野の人と通じ合う言葉を失っていくという点が皮肉である。',
    hint: '「専門性を高めること」で得たものと、その結果として失うものを対比させて考える',
    explanation:
      '【解説】\n本来、専門性を高めることは価値の向上につながるはずである。ところが専門性を突き詰めた人ほど、隣接分野の人との対話（共通言語）を失っていく、という予想に反した結果が生じている点が「皮肉」の内容である。「得るはずのもの」と「実際に失うもの」のねじれを説明する。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_03',
    subject: 'kokugo',
    passage:
      'かつて「何でも屋」が重宝された時代があった。あらゆる仕事を一人でこなせる者が、共同体の中で頼れる存在とされたからである。しかし技術が高度化し社会が複雑になるにつれ、一つの分野を深く極めた専門家の価値が急速に高まっていった。皮肉なことに、専門性を突き詰めた人ほど、隣接する分野との対話に苦労する場面が増えている。深い知識は、時に他者との共通言語を失わせる代償を伴うのかもしれない。',
    question: '傍線部「代償」の本文中の意味として最も適切なものを選びなさい。',
    answer: '何かを得る代わりに失うもの',
    hint: '直前の「深い知識」を得ることと引き換えに生じる、望ましくない結果を指している',
    explanation:
      '【解説】\n「代償」はここでは金銭的な支払いではなく、「深い知識（専門性）を得ることと引き換えに失われるもの（他者との共通言語）」という比喩的な意味で使われている。文脈から「何かを得る代わりに失うもの」という意味を選ぶ。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
    choices: ['金銭的な支払い', '何かを得る代わりに失うもの', '過去の償い', '将来への投資'],
  },
  {
    id: 'nada_kokugo_04',
    subject: 'kokugo',
    passage:
      'タイムを見た瞬間、彼女は膝から崩れ落ちた。自己ベストを更新するはずのレースで、まさかの失格。規定より半歩早くスタートを切っていたのだという。コーチは何も言わず、ただ隣に座った。しばらくして彼女はぽつりと言った。「速く走ることより、正しく立つことの方が難しいんですね」。コーチは小さく頷いただけだった。',
    question:
      '傍線部「速く走ることより、正しく立つことの方が難しいんですね」という発言から読み取れる、彼女の心境の変化を50字程度で説明しなさい。',
    answer:
      '結果（速さ）だけを追い求めていた彼女が、失格という経験を通して、基本的なルールを守ることの難しさと大切さに気づいたという心境の変化。',
    hint: '「速く走ること」と「正しく立つこと」が何を象徴しているかを考える',
    explanation:
      '【解説】\n「速く走ること」は結果（記録・勝敗）を、「正しく立つこと」はスタートの規定を守るという基本動作を象徴している。フライングによる失格を経験したことで、彼女はそれまで軽視していた「基本を守ることの難しさ・大切さ」に初めて気づいたという心境の変化が読み取れる。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_05',
    subject: 'kokugo',
    passage:
      'タイムを見た瞬間、彼女は膝から崩れ落ちた。自己ベストを更新するはずのレースで、まさかの失格。規定より半歩早くスタートを切っていたのだという。コーチは何も言わず、ただ隣に座った。しばらくして彼女はぽつりと言った。「速く走ることより、正しく立つことの方が難しいんですね」。コーチは小さく頷いただけだった。',
    question:
      '本文で、コーチが「何も言わず、ただ隣に座った」行動、および最後に「小さく頷いただけだった」行動には、コーチのどのような姿勢が表れているか説明しなさい。',
    answer:
      '言葉で慰めたり説教したりするのではなく、そばに寄り添い、彼女自身が気づきに至るのを静かに見守り、受け止めようとする姿勢。',
    hint: 'コーチが「言葉」を使わなかった点に注目する',
    explanation:
      '【解説】\nコーチは彼女を叱ることも慰めの言葉をかけることもせず、「隣に座る」「頷く」という最小限の行動に徹している。これは、彼女自身が失敗から気づきを得るまでのプロセスを尊重し、言葉で先回りせずに静かに寄り添って見守る姿勢の表れである。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_06',
    subject: 'kokugo',
    passage:
      'タイムを見た瞬間、彼女は膝から崩れ落ちた。自己ベストを更新するはずのレースで、まさかの失格。規定より半歩早くスタートを切っていたのだという。コーチは何も言わず、ただ隣に座った。しばらくして彼女はぽつりと言った。「速く走ることより、正しく立つことの方が難しいんですね」。コーチは小さく頷いただけだった。',
    question: '本文の内容と合うものを次から選びなさい。',
    answer: '彼女は失格を通じて基本の大切さに気づいた',
    hint: '彼女の発言の内容が、心境のどのような変化を表しているかに注目する',
    explanation:
      '【解説】\n本文には彼女が勝利を喜ぶ描写や、失格に納得できず怒る描写はない。むしろ発言から、フライングによる失格を通じて基本（正しいスタート）の大切さに気づいたことが読み取れる。またコーチが厳しく叱責した描写もない。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
    choices: [
      '彼女はレースに勝って喜んでいる',
      '彼女は失格の理由に納得できず怒っている',
      '彼女は失格を通じて基本の大切さに気づいた',
      'コーチは彼女を厳しく叱責した',
    ],
  },
  {
    id: 'nada_kokugo_07',
    subject: 'kokugo',
    question:
      '次の古文の傍線部「べし」の意味として最も適切なものを、文脈をふまえて答えなさい。「今宵は必ず雨降るべし。」',
    answer: '推量（きっと〜だろう、の意）',
    hint: '助動詞「べし」には推量・意志・当然・可能・命令など複数の意味があり、直前の「必ず」に注目する',
    explanation:
      '【解説】\n助動詞「べし」は文脈によって推量・意志・当然・可能・命令など多様な意味を持つ。ここでは「必ず」という強い確信を表す副詞と共に使われていることから、話し手の強い推量（きっと雨が降るだろう）を表していると判断できる。同じ「べし」でも「行くべし（命令）」「学ぶべし（当然）」のように文脈で意味が変わる点に注意する。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_08',
    subject: 'kokugo',
    question: '古文単語「あさまし」の意味として最も適切なものを選びなさい。',
    answer: '驚きあきれる（意外なことに驚く）',
    hint: '現代語の「浅ましい（さもしい）」とは意味の方向が異なる、古文特有の語であることに注意する',
    explanation:
      '【解説】\n古文の「あさまし」は、良い意味・悪い意味を問わず「予想外のことに驚きあきれる」という感情を表す語である。現代語の「あさましい（さもしい・卑しい）」とは意味がずれているため、古文単語として独立に覚える必要がある代表的な語の一つ。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
    choices: ['驚きあきれる（意外なことに驚く）', '喜ばしく満足だ', '寂しく物悲しい', '清らかで美しい'],
  },
  {
    id: 'nada_kokugo_09',
    subject: 'kokugo',
    question:
      '故事成語「推敲」の由来となったエピソードを説明し、その意味を述べなさい。',
    answer:
      '唐の詩人・賈島が「僧は推す月下の門」という詩句の「推す」を「敲く」に改めるべきか迷い、都の役人であった韓愈に相談したという故事に由来する。転じて、文章の字句や表現を何度も練り直すことを「推敲」という。',
    hint: '賈島という詩人が、ある一字をどちらにするか迷い、他人に相談したという話を思い出す',
    explanation:
      '【解説】\n唐代の詩人・賈島が、自作の詩の一句「僧は推す月下の門」の「推す（おす）」を「敲く（たたく）」に変えるべきか思い悩みながら道を歩いていたところ、当時の高名な文人・韓愈の行列にぶつかってしまい、事情を話して意見を求めた、という故事に基づく。ここから、文章の語句・表現を繰り返し練り直すことを「推敲」と呼ぶようになった。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_10',
    subject: 'kokugo',
    question:
      '次の①「先生が召し上がる」②「私がいただく」③「こちらが資料でございます」を、尊敬語・謙譲語・丁寧語にそれぞれ分類しなさい。',
    answer: '①尊敬語　②謙譲語　③丁寧語',
    hint: '相手（先生）の動作を高めているか、自分の動作をへりくだっているか、単に言い方を丁寧にしているかを見分ける',
    explanation:
      '【解説】\n①「召し上がる」は「食べる」の尊敬語で、先生（相手）の動作を高めている。\n②「いただく」は「食べる・もらう」の謙譲語で、自分の動作をへりくだって表現している。\n③「でございます」は丁寧語で、動作の主体に関わらず言い方を丁寧にするものである。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_11',
    subject: 'kokugo',
    question:
      '次の短歌的表現に用いられている表現技法を答え、その効果を説明しなさい。「秋の風　頬をなでゆく　やさしさよ」',
    answer:
      '擬人法（風を人のようにたとえる表現）。秋の風が人のように頬を「なでる」と表現することで、風の穏やかさ・優しさを読み手に印象的に伝える効果がある。',
    hint: '風という自然現象に、人間の動作を表す言葉が使われている点に注目する',
    explanation:
      '【解説】\n「風が頬をなでる」という表現は、本来人間や生き物が行う「なでる」という動作を、無生物である「風」に当てはめている。これは擬人法（人でないものを人にたとえる比喩）であり、風の穏やかで優しい性質を読み手により鮮明に、感覚的に伝える効果がある。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_12',
    subject: 'kokugo',
    question: '「具体」の対義語を答えなさい。',
    answer: '抽象',
    hint: '実際の形を持たない、一般化された概念を表す言葉を考える',
    explanation:
      '【解説】\n「具体」は実際に形や姿を伴って存在する、はっきりと捉えられることを指す。これに対して「抽象」は、個々の物事から共通する性質を取り出して一般化した、実体を伴わない概念を指し、両者は対義語の関係にある。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_13',
    subject: 'kokugo',
    question: '次の文の傍線部「ばかり」の意味・用法を説明しなさい。「彼は泣かんばかりに喜んだ。」',
    answer:
      '「今にも〜しそうなほど」という程度を表す用法（泣きそうなくらい、という意味）。単なる分量・限定を表す「ばかり」（例：一時間ばかり）とは異なる用法である。',
    hint: '「泣かん」という打消推量に近い形に続いていることに注目し、時間や分量を表す用法と区別する',
    explanation:
      '【解説】\n「ばかり」には「〜くらい・〜程度（限定）」（例：一時間ばかり）、「〜だけ（限定）」（例：勉強ばかりしている）などの用法のほかに、「〜んばかりに」の形で「今にも〜しそうなほど」という程度の甚だしさを表す用法がある。ここでは「泣かんばかりに喜んだ」＝「泣きそうなほど激しく喜んだ」という意味であり、限定の用法とは区別する必要がある。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_14',
    subject: 'kokugo',
    question:
      '次の熟語「着席」の構成を説明しなさい（上の漢字が動作を表し、下の漢字がその対象・目的語にあたる構成であるかどうかを含めて答えること）。',
    answer:
      '上の漢字（動作：着く）が、下の漢字（対象：席）を目的語のように伴う構成（動詞＋目的語の関係）。同様の構成の熟語には「登山」「読書」などがある。',
    hint: '「席に着く」のように、下の漢字を「〜を」「〜に」を補って読めるかどうかを確認する',
    explanation:
      '【解説】\n「着席」は「席に着く」と読み下せるように、上の漢字「着」が動作を表し、下の漢字「席」がその動作の対象（目的語的な役割）を担う構成になっている。この構成の熟語には他に「登山（山に登る）」「読書（書を読む）」「乗車（車に乗る）」などがある。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_15',
    subject: 'kokugo',
    question: '次の熟語「善悪」の構成を説明しなさい。',
    answer: '反対の意味の漢字を組み合わせた構成（善⇔悪）。',
    hint: '「善」と「悪」の意味の関係を考える',
    explanation:
      '【解説】\n「善」は「よい・正しい」、「悪」は「わるい・正しくない」で、互いに反対の意味を持つ漢字である。このように反対の意味の漢字を組み合わせて1つの熟語を作る構成の例には、他に「高低」「大小」「明暗」などがある。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_kokugo_16',
    subject: 'kokugo',
    question:
      '「専門性を高めることと、幅広い知識を持つことは両立できるか」というテーマについて、あなたの考えを100字程度で述べなさい。',
    answer:
      '（記述式・自由回答。模範解答例）両立は可能だと考える。一つの専門分野を深く学ぶ過程で得た論理的な考え方や学び方の型は、他分野を理解するための土台にもなる。専門性を軸にしながら、意識的に他分野との接点を持ち続ければ、深さと広さは互いに支え合うと考える。',
    hint: '「専門性の深さ」と「知識の広さ」が対立するものと決めつけず、両者をつなぐ考え方がないか探してみる',
    explanation:
      '【解説】\nこれは唯一の正解がない自由記述問題（灘高らしい論理的思考力・記述力を問う出題形式）。採点にあたっては、①テーマへの理解、②自分の立場（両立できる／できない）が明確か、③根拠が具体的で論理的につながっているか、の3点を評価するとよい。模範解答はあくまで一例であり、反対の立場（両立は難しい、というもの）でも、論理的であれば正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },

  // ============================================================
  // 理科 (rika) 16問
  // ============================================================
  {
    id: 'nada_rika_01',
    subject: 'rika',
    question:
      '体積250cm³、質量215gの物体Aがある。（1）物体Aの密度を求めなさい。（2）水の密度を1.0g/cm³とするとき、物体Aは水に浮くか沈むか、理由とともに答えなさい。',
    answer: '（1）0.86g/cm³　（2）水に浮く。物体の密度が水の密度より小さいため。',
    hint: '密度=質量÷体積を計算し、水の密度1.0g/cm³と比較する',
    explanation:
      '【解説】\n（1）密度＝質量÷体積＝215÷250＝0.86g/cm³。\n（2）物体Aの密度0.86g/cm³は水の密度1.0g/cm³より小さい。密度が水より小さい物体は水に浮くため、物体Aは水に浮く。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_02',
    subject: 'rika',
    figureDescription:
      'ある植物について、光の強さを変えたときの正味のCO₂交換速度（吸収をプラス、放出をマイナスとする）を表す折れ線グラフ。',
    question:
      '下のグラフは、ある植物の葉に当てる光の強さを変えたときの、見かけの（正味の）CO₂交換速度を表したものである。この植物は暗黒下（光の強さ0）で呼吸によりCO₂を4mg/時の速さで放出することがわかっている。光の強さ6のときの、この植物の真の光合成速度（呼吸を考えないグロスの光合成によるCO₂吸収速度）を求めなさい。',
    answer: '12mg/時',
    hint: '見かけの光合成速度（グラフの値）＝真の光合成速度－呼吸速度、という関係を使う',
    explanation:
      '【解説】\n見かけの（正味の）光合成速度＝真の光合成速度－呼吸速度、という関係が成り立つ。\nグラフより、光の強さ6のときの正味のCO₂交換速度（見かけの光合成速度）は+8mg/時（吸収）。\n呼吸速度は光の強さに関係なく常に4mg/時（暗黒下の値と同じ）。\nよって、真の光合成速度＝見かけの光合成速度＋呼吸速度＝8+4＝12mg/時。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_03',
    subject: 'rika',
    figureDescription: '抵抗R₁=6Ω、R₂=12Ωを並列につないだ回路。電源電圧は12V。',
    question:
      '抵抗R₁=6Ω、R₂=12Ωを並列につないだ回路に、電圧12Vの電源をつないだ。この並列部分の合成抵抗と、電源を流れる電流（回路全体を流れる電流）の大きさをそれぞれ求めなさい。',
    answer: '合成抵抗4Ω、電源を流れる電流3A',
    hint: '並列回路の合成抵抗Rは 1/R=1/R₁+1/R₂ で求める',
    explanation:
      '【解説】\n並列回路の合成抵抗Rは 1/R=1/R₁+1/R₂=1/6+1/12=2/12+1/12=3/12=1/4 より R=4Ω。\nオームの法則より、電源を流れる電流I＝V/R＝12/4＝3A。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_04',
    subject: 'rika',
    question:
      '抵抗R₁=6Ω、R₂=12Ωを並列につなぎ、電圧12Vの電源をつないだ回路がある（合成抵抗4Ω、電源を流れる電流3A）。このとき、R₁を流れる電流とR₂を流れる電流をそれぞれ求め、それらの和が電源を流れる電流と一致することを確認しなさい。',
    answer: 'R₁を流れる電流2A、R₂を流れる電流1A（2A+1A=3Aで一致する）',
    hint: '並列回路では、どの枝にも電源と同じ大きさの電圧（12V）がかかる',
    explanation:
      '【解説】\n並列回路では、それぞれの抵抗に電源と同じ12Vの電圧がかかる。\nR₁を流れる電流＝V/R₁＝12/6＝2A。\nR₂を流れる電流＝V/R₂＝12/12＝1A。\n2A+1A＝3Aとなり、電源を流れる電流（全体の電流）3Aと一致する。並列回路では各枝の電流の和が全体の電流に等しくなることが確認できる。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_05',
    subject: 'rika',
    question:
      'ABO式血液型において、A型の遺伝子型はAAまたはAO、B型はBBまたはBO、AB型はAB、O型はOOで表される（A・Bはそれぞれ優性、Oは劣性）。父がAO型（A型）、母がBO型（B型）であるとき、生まれる子の血液型として考えられるものをすべて挙げ、その理由を説明しなさい。',
    answer:
      'AB型・A型・B型・O型のすべてが生まれる可能性がある（それぞれ確率1/4）。父からA・Oのいずれか、母からB・Oのいずれかの遺伝子が組み合わさるため、AB・AO・BO・OOの4通りの組み合わせができ、それぞれAB型・A型・B型・O型に対応するから。',
    hint: '父の遺伝子はAとO、母の遺伝子はBとO。この組み合わせを表にして考える',
    explanation:
      '【解説】\n父（AO）の配偶子はAまたはO、母（BO）の配偶子はBまたはO。組み合わせは次の4通り。\nA(父)×B(母)→AB（AB型）\nA(父)×O(母)→AO（A型）\nO(父)×B(母)→BO（B型）\nO(父)×O(母)→OO（O型）\nよって、AB型・A型・B型・O型のすべてが等しい確率（各1/4）で生まれる可能性がある。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_06',
    subject: 'rika',
    question:
      '両親A・Bはともにある劣性遺伝形質について保因者（Aa、形質は現れていない）である。すでに生まれた第一子はこの形質を発現している（aa）。（1）次に生まれる子がこの形質を発現する（aa）確率を求めなさい。（2）次に生まれる子がこの形質を発現しなかった場合、その子が保因者（Aa）である確率を求めなさい。',
    answer: '（1）1/4　（2）2/3',
    hint: '各妊娠は独立の事象である。また、発現しない子の遺伝子型はAA:Aa=1:2の比になることを利用する',
    explanation:
      '【解説】\nAa×Aaの交配でできる子の遺伝子型の比は AA:Aa:aA:aa=1:1:1:1（まとめるとAA:Aa:aa=1:2:1）。\n（1）各妊娠は独立の事象なので、すでに生まれた第一子の結果とは関係なく、次の子がaa（発現）になる確率は常に1/4。\n（2）発現しない子（AAまたはAa）は、AA:Aa=1:2の比で生まれる（全体3/4のうち、AAが1/4、Aaが2/4）。したがって、発現しない子のうち保因者（Aa）である確率は、Aa/(AA+Aa)=2/3。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_07',
    subject: 'rika',
    figureDescription:
      '標高の異なる2地点（A地点・B地点）で行ったボーリング調査の柱状図。両地点に共通する凝灰岩層（かぎ層）が含まれる。',
    question:
      '標高50mのA地点と標高45mのB地点でボーリング調査を行った。A地点では地表から順に泥岩層2m・砂岩層3m・凝灰岩層1m・れき岩層4mが、B地点では地表から順に泥岩層4m・砂岩層3m・凝灰岩層1m・れき岩層4mが確認された。凝灰岩層の上面の標高をそれぞれ求め、両地点の地層が水平に堆積しているかどうか、理由とともに答えなさい。',
    answer:
      'A地点の凝灰岩層上面の標高＝45m、B地点＝38m。標高が異なる（45m≠38m）ため、地層は水平ではなく、B地点に向かって低くなるように傾いている（または断層等の影響を受けている）と考えられる。',
    hint: '凝灰岩層の上面が地表から何m下にあるかをそれぞれ求め、地表の標高からその深さを引く',
    explanation:
      '【解説】\n凝灰岩層は火山灰が広範囲に堆積してできる層で、同時期に広く堆積するため離れた地点の地層を対比する「かぎ層」として使われる。\nA地点：凝灰岩層の上面は地表から2+3=5m下。標高＝50-5＝45m。\nB地点：凝灰岩層の上面は地表から4+3=7m下。標高＝45-7＝38m。\n同じかぎ層（凝灰岩層）の標高がA地点45m、B地点38mと異なっているため、この地域の地層は水平ではなく、B地点側が低くなるように傾いて分布していると考えられる（地殻変動や断層の影響が考えられる）。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_08',
    subject: 'rika',
    question:
      '濃度不明の水酸化ナトリウム水溶液Xがある。水酸化ナトリウム水溶液X20cm³を、ある濃度の塩酸で完全に中和するには塩酸50cm³が必要であることがわかった。（1）同じ水酸化ナトリウム水溶液Xを50cm³用意し、同じ塩酸で完全に中和するには塩酸は何cm³必要か求めなさい。（2）この塩酸100cm³を完全に中和するには、水酸化ナトリウム水溶液Xは何cm³必要か求めなさい。',
    answer: '（1）125cm³　（2）40cm³',
    hint: '中和する体積の比は常に一定（20:50）であることを利用して比例式を立てる',
    explanation:
      '【解説】\n中和に必要な体積の比は、濃度が変わらない限り常に一定であり、水酸化ナトリウム水溶液X:塩酸＝20:50＝2:5。\n（1）水酸化ナトリウム水溶液Xが50cm³のとき、必要な塩酸をxとすると 20:50=50:x より x=50×(50/20)=125cm³。\n（2）塩酸が100cm³のとき、必要な水酸化ナトリウム水溶液Xをyとすると 20:50=y:100 より y=100×(20/50)=40cm³。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_09',
    subject: 'rika',
    question:
      'マグネシウムリボン1.2gを、十分な量の塩酸98.7gと反応させたところ、気体（水素）が発生し、反応後にできた塩化マグネシウム水溶液の質量は99.8gになった。このとき発生した水素の質量を求めなさい。',
    answer: '0.1g',
    hint: '化学変化の前後で、物質全体の質量は変わらない（質量保存の法則）',
    explanation:
      '【解説】\n質量保存の法則より、反応前の全質量＝反応後の全質量。\n反応前：マグネシウム1.2g＋塩酸98.7g＝99.9g\n反応後：発生した水素xg＋塩化マグネシウム水溶液99.8g\nよって 99.9=x+99.8 より x＝99.9-99.8＝0.1g。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_10',
    subject: 'rika',
    figureDescription:
      '物質Xと物質Yの、温度による溶解度（水100gに溶ける質量）の変化を示す溶解度曲線のグラフ。物質Xは温度とともに大きく溶解度が増加し、物質Yはほぼ一定である。',
    question:
      '60℃の水100gに物質Xを100g溶かして飽和水溶液をつくった。この水溶液を20℃まで冷やすと、何gの結晶が析出するか、グラフを参考にして求めなさい。（60℃での物質Xの溶解度は100g、20℃での溶解度は40gとする）',
    answer: '60g',
    hint: '水の量（100g）は変化しないので、（60℃で溶けていた量）－（20℃で溶ける限度の量）が析出量になる',
    explanation:
      '【解説】\n60℃の水100gには物質Xが溶解度いっぱいの100gまで溶けて飽和している。\n温度を20℃まで下げると、水100gに溶けることのできる量（溶解度）は40gまで減少する。\n水の質量は変化しない（蒸発などがない）ので、溶けきれなくなった分が結晶として析出する。\n析出量＝60℃での溶解量－20℃での溶解度＝100-40＝60g。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_11',
    subject: 'rika',
    question:
      '長さ100cmの軽い棒がある。左端から20cmの位置を支点として棒を水平に支え、棒の左端（支点から20cmの位置）に3kgのおもりをつるした。棒を水平に保つために、棒の右端（支点から80cmの位置）につるすべきおもりの重さを求めなさい。',
    answer: '0.75kg（750g）',
    hint: '支点の左右で「おもりの重さ×支点からの距離」が等しくなるようにつり合う（てこの原理）',
    explanation:
      '【解説】\nてこのつり合いの式：左回りのモーメント＝右回りのモーメント。\n左側：3kg×20cm＝60（kg・cm）。\n右端につるすおもりの重さをWkgとすると、右側のモーメントはW×80cm。\nつり合いより 60＝W×80 なので W＝60÷80＝0.75kg。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_12',
    subject: 'rika',
    question:
      '1辺6cmの立方体の物体を水に浮かべたところ、水面から2cmだけ物体が出た状態（残りの4cmは水中）で静止した。水の密度を1.0g/cm³とするとき、この物体の密度を求めなさい。',
    answer: '約0.67g/cm³（2/3g/cm³）',
    hint: '浮かんで静止しているとき、物体の重さと、物体が押しのけた水（沈んでいる部分の体積分）の重さは等しい',
    explanation:
      '【解説】\n物体が水に浮いて静止しているとき、物体全体の重さ＝浮力（押しのけた水の重さ）が成り立つ。\n水中に沈んでいる部分の体積＝6cm×6cm×4cm＝144cm³。\n水の密度は1.0g/cm³なので、押しのけた水の質量（＝浮力に相当する質量）＝144g。\nこれが物体全体の質量に等しいので、物体の質量＝144g。\n物体全体の体積＝6×6×6＝216cm³。\n物体の密度＝質量÷体積＝144÷216＝2/3≒0.67g/cm³。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_13',
    subject: 'rika',
    question:
      'ある日の20時に、南の空高くに半月（上弦の月）が見えた。この日からおよそ何日後に満月になるか答えなさい。また、満月の日、日没直後に月はどの方角のどのあたりに見えるか説明しなさい。',
    answer:
      '約7日後に満月になる。満月は太陽と反対の方向にあるため、日没直後には東の空低くに見える。',
    hint: '月の満ち欠けの周期（約29.5日）を4等分すると、新月→上弦→満月→下弦のそれぞれの間隔が求められる',
    explanation:
      '【解説】\n月の満ち欠けは約29.5日の周期で「新月→上弦の月→満月→下弦の月→新月」と変化する。上弦の月から満月までは周期のおよそ4分の1なので、29.5÷4≒7.4日、つまり約7日後に満月になる。\n満月のとき、月は地球から見て太陽の反対側にあるため、太陽が沈む（日没）のとほぼ同時に月が東の空から昇ってくる。したがって日没直後には東の空の低い位置に見える。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_14',
    subject: 'rika',
    question:
      '心臓の右心室から送り出された血液は、肺で酸素を受け取った後、心臓のどの部屋に戻ってくるか。また、そこから全身に送り出されるまでに通過する心臓の部屋の順番をすべて答えなさい。',
    answer:
      '肺で酸素を受け取った血液は肺静脈を通って左心房に戻る。その後、左心室に移り、大動脈を通って全身に送り出される（心臓の部屋の順：右心室→（肺）→左心房→左心室）。',
    hint: '心臓は右心房・右心室・左心房・左心室の4つの部屋からなり、肺を通る血液の流れ（肺循環）に注目する',
    explanation:
      '【解説】\n血液は右心室から肺動脈を通って肺に送られ、肺でガス交換（二酸化炭素を放出し酸素を受け取る）を行った後、肺静脈を通って心臓の左心房に戻る。左心房から左心室に移った血液は、大動脈を通って全身に送り出される。この、心臓（右心室）→肺→心臓（左心房）という経路を肺循環と呼ぶ。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_15',
    subject: 'rika',
    question:
      'ある生態系で、生産者（植物）・一次消費者（草食動物）・二次消費者（肉食動物）がピラミッド構造で個体数のバランスを保っている。何らかの原因で一次消費者（草食動物）の数が急激に減少した場合、その直後に予想される生産者と二次消費者の個体数の変化を、それぞれ理由とともに説明しなさい。また、長期的には生態系はどうなると考えられるか説明しなさい。',
    answer:
      '直後は、草食動物に食べられる量が減るため生産者（植物）は増加する。一方、二次消費者（肉食動物）はえさとなる草食動物が減るため、個体数は減少する。長期的には、植物が増えたことで一次消費者の食料が豊富になり草食動物の数が回復し、それに伴って肉食動物の数も回復するというように、ピラミッドは元のバランスに近づいていく（生態系には自己回復力＝復元力がある）。',
    hint: '「食べる・食べられる」の関係を、一次消費者を起点に前後（生産者・二次消費者）へ順に考える',
    explanation:
      '【解説】\n生産者・一次消費者・二次消費者は「食べる・食べられる」の関係（食物連鎖）でつながっている。一次消費者が急減すると、①生産者は食べられる量が減るため増加する、②二次消費者はえさが減るため減少する、という直接的な影響が直後に現れる。\n長期的には、増えた生産者を食べて一次消費者が回復し、それに伴って二次消費者も回復するというように、時間をかけてピラミッドは元のバランスに近づいていく。このような、生態系が乱れを自然に元に戻そうとする働きを復元力（レジリエンス）という。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_rika_16',
    subject: 'rika',
    question:
      '物質Yのように、温度が変化しても溶解度がほとんど変わらない物質を水溶液から結晶として取り出したい場合、水溶液を冷却する方法ではなく、どのような操作を行うのがよいか。理由とともに説明しなさい。',
    answer:
      '水を蒸発させる（加熱するなどして蒸発乾固させる）操作を行うとよい。温度による溶解度の変化がほとんどない物質は、冷却しても溶ける限度（溶解度）がほとんど変わらないため、冷却による結晶の析出量はごくわずかしか得られない。水を蒸発させて減らせば、その減った分の水に溶けきれなくなった物質が結晶として析出するため、より多くの結晶を取り出すことができるから。',
    hint: '冷却で結晶を取り出す方法が有効なのは、溶解度が温度によって大きく変化する物質であることを思い出す',
    explanation:
      '【解説】\n冷却によって結晶を析出させる方法（再結晶）は、温度による溶解度の変化が大きい物質（物質Xのような物質）に適している。しかし物質Yのように溶解度がほぼ一定の物質では、冷却してもほとんど結晶が出てこない。\nこのような物質は、水を蒸発させることで「溶ける限度（水の量に応じた溶解度分）」そのものを減らし、溶けきれなくなった分を結晶として取り出す（蒸発乾固）方法が適している。海水から塩（塩化ナトリウムなど、溶解度の温度変化が小さい物質）を得る際に、主に蒸発（天日干しなど）が使われるのはこのためである。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },

  // ============================================================
  // 社会 (shakai) 16問
  // ============================================================
  {
    id: 'nada_shakai_01',
    subject: 'shakai',
    question:
      '大日本帝国憲法における主権の所在と、日本国憲法における主権の所在の違いを説明しなさい。また、それぞれの憲法における天皇の位置づけの違いにも触れなさい。',
    answer:
      '大日本帝国憲法では主権は天皇にあり（天皇主権）、天皇は神聖不可侵の元首として統治権を総攬した。日本国憲法では主権は国民にあり（国民主権）、天皇は政治的な権能を持たず、日本国および日本国民統合の「象徴」と位置づけられている。',
    hint: '「誰が国の政治のあり方を最終的に決める力を持つか」という観点で2つの憲法を比較する',
    explanation:
      '【解説】\n大日本帝国憲法（1889年発布）では、天皇が神聖不可侵の元首として統治権を総攬するとされ、主権は天皇にあった（天皇主権）。\n日本国憲法（1946年公布）では、国の政治のあり方を最終的に決める力（主権）は国民にあるとされ（国民主権）、天皇は政治に関する権能を持たず、日本国および日本国民統合の「象徴」としての地位を持つにとどまる。この主権の所在の転換は、日本国憲法の三大原則の一つである。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_02',
    subject: 'shakai',
    question:
      '為替レートが1ドル=100円から1ドル=125円になった。これは円高・円安のどちらか答えなさい。また、この変化は日本の輸出産業にとって有利か不利か、理由とともに述べなさい。',
    answer:
      '円安。1ドルを買うのに必要な円が増えた（円の価値が下がった）ため。輸出産業にとっては有利。輸出で得たドルをより多くの円に交換できるうえ、外国では日本製品の価格が実質的に安くなり、価格競争力が高まるから。',
    hint: '「1ドルを手に入れるのに必要な円の量」が増えたか減ったかで、円の価値の変化を判断する',
    explanation:
      '【解説】\n1ドル=100円から1ドル=125円になったということは、1ドルを買うのに必要な円の量が増えたということであり、これは円の価値が下がったことを意味するので「円安」である。\n円安になると、日本企業が輸出で得た外貨（ドル）を円に両替したときの手取りが増えるだけでなく、外国の消費者から見た日本製品のドル建て価格が実質的に下がるため、価格競争力が高まる。したがって円安は輸出産業にとって有利にはたらく。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_03',
    subject: 'shakai',
    question:
      '日本円で200万円の製品をアメリカに輸出する場合、1ドル=125円のときのドル建て価格を求めなさい。また、為替レートが1ドル=100円（円高）に変化した場合、同じ製品のドル建て価格はいくらに変化するか求め、この変化が輸出にとって有利か不利かを説明しなさい。',
    answer:
      '1ドル=125円のとき16,000ドル。1ドル=100円になると20,000ドルに上昇する。ドル建て価格が上がるとアメリカでの販売価格が高くなり、価格競争力が下がるため、輸出にとって不利にはたらく。',
    hint: 'ドル建て価格＝円建て価格÷為替レート（円/ドル）で計算する',
    explanation:
      '【解説】\nドル建て価格＝円建て価格÷為替レート。\n1ドル=125円のとき：2,000,000÷125＝16,000ドル。\n1ドル=100円（円高）になったとき：2,000,000÷100＝20,000ドル。\n同じ製品でも、円高が進むとドル建て価格が16,000ドルから20,000ドルへと上昇する。アメリカの消費者にとって価格が上がることは、日本製品の価格競争力の低下を意味するため、円高は輸出産業にとって不利にはたらく（設問2の円安の場合と対照的な結果になることを確認する）。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_04',
    subject: 'shakai',
    question:
      '鎌倉幕府が1232年に制定した、武士のための最初の体系的な法律の名称と、それを制定した人物、制定の目的を答えなさい。',
    answer:
      '御成敗式目（貞永式目）。制定者は執権・北条泰時。武士社会の慣習（道理）にもとづき、御家人どうしの土地をめぐる争いなどを公平に裁くための基準を明文化することが目的だった。',
    hint: '承久の乱の後、幕府の勢力が西国にも広がった時期に、執権が定めた法律である',
    explanation:
      '【解説】\n御成敗式目（貞永式目）は、1232年に執権・北条泰時が制定した、武士のための最初の体系的な法律である。律令など公家社会の法とは異なり、武士社会で積み重ねられてきた慣習・道理にもとづいて定められ、御家人どうしの土地の相続や境界をめぐる争いを公平に裁くための基準として機能した。以後、長く武家法の基本として影響を与えた。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_05',
    subject: 'shakai',
    figureDescription:
      'ある国のGDP（国内総生産）に占める産業別の構成比を示す円グラフ。農業（第1次産業）・鉱工業（第2次産業）・サービス業（第3次産業）の3つに分かれている。',
    question:
      '下のグラフは、ある国のGDPに占める産業別の構成比を示したものである。このグラフから読み取れる、この国の産業構造の特徴を、農業が45%を占めるような発展途上国の産業構造と比較して説明しなさい。',
    answer:
      'この国はサービス業（第3次産業）の割合が55%と最も高く、鉱工業（第2次産業）も33%を占めている一方、農業（第1次産業）はわずか12%にとどまっている。農業の割合が45%と高い発展途上国と比べると、この国は工業化がすでに進み、さらに商業・金融・情報などのサービス業が経済の中心となった、経済発展の段階がより進んだ（先進的な）産業構造を持つと考えられる。',
    hint: '一般に、経済が発展するにつれて産業の中心は第1次産業→第2次産業→第3次産業へと移っていく',
    explanation:
      '【解説】\n経済発展の過程では、就業人口や生産額の中心が第1次産業（農業など）から第2次産業（工業など）、さらに第3次産業（商業・サービス業・金融業など）へと移っていく傾向がある（産業構造の高度化）。\nこのグラフの国では、第3次産業が55%と最大で、農業（第1次産業）はわずか12%しかない。農業が45%を占める発展途上国と比べると、この国は工業化を経て、すでにサービス経済化が進んだ、より発展した段階の産業構造を持つと判断できる。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_06',
    subject: 'shakai',
    question:
      'ケッペンの気候区分におけるステップ気候（BS）の特徴を説明し、この気候が分布する代表的な地域を1つ答えなさい。',
    answer:
      '年間降水量が少なく、砂漠気候ほどではないが乾燥しており、丈の短い草原（ステップ）が広がる気候。乾季とわずかな雨季がある。モンゴル高原や中央アジアなどに分布する。',
    hint: '砂漠気候よりは降水量が多く、樹木がほとんど育たない草原が広がる気候であることを思い出す',
    explanation:
      '【解説】\nステップ気候（BS）は、砂漠気候（BW）よりはやや降水量が多いものの樹木の生育には十分でなく、丈の短い草（ステップ）が広がる乾燥帯の気候である。短い雨季にわずかに雨が降り、その時期に牧草が育つため、遊牧が盛んに行われる地域が多い。モンゴル高原、中央アジア（カザフスタンなど）、アフリカのサヘル地域などに分布する。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_07',
    subject: 'shakai',
    question:
      'フランス革命（1789年）が近代社会にもたらした意義を、「人権」という観点から説明しなさい。',
    answer:
      '人は生まれながらに自由・平等の権利を持つという考え方（人権思想）を「人間および市民の権利の宣言（人権宣言）」として明文化し、身分制度を否定する近代市民社会の基礎を築いた点に意義がある。',
    hint: '革命の中で発表された宣言の名前と、そこに書かれた「人が生まれながらに持つ権利」という考え方に注目する',
    explanation:
      '【解説】\nフランス革命では、旧来の身分制度（アンシャン・レジーム）が打倒され、革命の理念を示す「人間および市民の権利の宣言（人権宣言）」が発表された。ここには、人は生まれながらに自由・平等であり、圧政に対する抵抗権などを含む基本的な権利（人権）を持つという考え方が明文化されている。これは、身分による支配を否定し、国民が主権を持つ近代市民社会の基礎となる考え方であり、後の各国の憲法や人権思想に大きな影響を与えた。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_08',
    subject: 'shakai',
    question:
      'ある商品の需要量Qd（個）は価格P（円）に対してQd=100-2P、供給量Qs（個）はQs=20+3Pで表されるとする。需要量と供給量が一致する均衡価格Pと、そのときの取引量Qを求めなさい。',
    answer: '均衡価格P=16円、取引量Q=68個',
    hint: 'Qd=Qsとなるように方程式を立ててPを求め、求めたPをどちらかの式に代入してQを求める',
    explanation:
      '【解説】\n需要量と供給量が一致するとき Qd=Qs なので、100-2P=20+3P。\n100-20=3P+2P → 80=5P → P=16（円）。\nこれをQd=100-2Pに代入すると Q=100-2×16=100-32=68（個）。\n検算としてQs=20+3×16=20+48=68でも一致するので正しい。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_09',
    subject: 'shakai',
    figureDescription:
      '日本のある年における年齢別人口構成（0〜14歳・15〜64歳・65歳以上）の割合を示す棒グラフ。',
    question:
      '下の棒グラフは、日本のある年における年齢別人口構成の割合を示したものである。老年人口指数（65歳以上人口÷生産年齢人口（15〜64歳人口）×100）を、小数第1位を四捨五入して求めなさい。',
    answer: '約49',
    hint: 'グラフから65歳以上の割合と15〜64歳の割合を読み取り、割り算をする',
    explanation:
      '【解説】\nグラフより、65歳以上の人口は総人口の29%、15〜64歳（生産年齢人口）は59%である。\n老年人口指数＝65歳以上人口÷生産年齢人口×100＝29÷59×100≒49.15…\n小数第1位を四捨五入すると約49となる。これは、働く世代（生産年齢人口）100人あたり、高齢者が約49人いることを意味し、少子高齢化が進んでいることを示す指標である。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_10',
    subject: 'shakai',
    question:
      '江戸幕府が行った享保の改革・寛政の改革・天保の改革に共通する目的を答えなさい。また、享保の改革が他の2つの改革と異なる特徴的な点を説明しなさい。',
    answer:
      '共通する目的：幕府の財政を立て直すこと（質素倹約や風紀の統制を通じた財政再建）。\n享保の改革の異なる点：寛政の改革・天保の改革が主に倹約令や統制を中心としたのに対し、享保の改革（徳川吉宗）は年貢率の引き上げ（定免法）や新田開発、上げ米の制などの積極的な増収策や、目安箱の設置による民意の吸い上げなど、より能動的な施策を伴った点。',
    hint: '3つの改革すべてに共通するキーワード（財政・倹約）と、享保の改革だけに見られる特徴的な政策を思い出す',
    explanation:
      '【解説】\n享保の改革（徳川吉宗）・寛政の改革（松平定信）・天保の改革（水野忠邦）は、いずれも悪化した幕府財政の立て直しと、質素倹約・風紀の統制を共通の目的とする。\nただし享保の改革は、年貢の取り方を検見法から定免法（一定の税率）に改めて安定した年貢収入を確保したり、新田開発を進めたり、大名から米を献上させる上げ米の制を実施したりするなど、財政再建のためのより積極的な増収策を多く含む点が特徴である。また目安箱を設置し庶民の意見を政治に反映させようとした点も、他の2つの改革にはあまり見られない特徴である。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_11',
    subject: 'shakai',
    question:
      '日本の衆議院議員選挙で採用されている「小選挙区比例代表並立制」の仕組みを説明しなさい。',
    answer:
      '有権者は小選挙区（1つの選挙区から1名が当選する）と比例代表（政党に投票し、得票数に応じて各政党に議席を配分する）の2種類にそれぞれ1票ずつ、合計2票を投票し、小選挙区の当選者と比例代表の当選者を合わせて衆議院議員を選出する制度。',
    hint: '有権者が投票する「票」が2種類あることに注目する',
    explanation:
      '【解説】\n小選挙区比例代表並立制では、有権者は小選挙区選挙（候補者名を記入し、各選挙区で最多得票の1名が当選する）と、比例代表選挙（政党名を記入し、各政党の得票数に応じてドント式などで議席が配分される）の2つの投票をそれぞれ行う。小選挙区と比例代表は別々に集計・当選者が決まり、両方の当選者を合わせて衆議院の議員定数が構成される。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_12',
    subject: 'shakai',
    question:
      '1980年代に日米間で起きた貿易摩擦が、日本企業の海外進出や「産業の空洞化」にどのようにつながったか説明しなさい。',
    answer:
      '日本からの自動車・家電などの輸出が急増したことでアメリカとの貿易不均衡（貿易摩擦）が深刻化し、その対策として日本企業は現地生産（アメリカなどへの工場移転）を進めた。その結果、国内の生産拠点や雇用が海外に移転し、国内産業が縮小する「産業の空洞化」が進んだ。',
    hint: '「輸出の急増→摩擦→現地生産への転換」という一連の流れを整理する',
    explanation:
      '【解説】\n1980年代、日本製の自動車や家電製品が高品質・低価格でアメリカ市場に大量に輸出され、アメリカの同業界を圧迫したことから、深刻な日米貿易摩擦が生じた。この摩擦を和らげるため、日本企業は輸出に代えてアメリカなど現地での生産（現地生産）を拡大する方向に転換した。その結果、国内の工場が海外へ移転し、国内の生産活動や雇用が失われる「産業の空洞化」が進行した。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_13',
    subject: 'shakai',
    question:
      '高度経済成長期（1950年代半ば〜1970年代前半）に発生した代表的な公害問題を1つ挙げ、その原因と、それをきっかけに整備された対策を説明しなさい。',
    answer:
      '（例）水俣病。水俣湾周辺の工場が排出したメチル水銀を含む排水が魚介類の体内に蓄積し、それを日常的に食べた住民に深刻な神経障害が広がった公害病である。これをきっかけに、公害対策基本法（1967年）の制定や環境庁の設置（1971年）など、公害を規制するための法整備・行政機構の整備が進んだ。',
    hint: '四大公害病のうち1つを思い出し、原因物質と、それを受けて整備された法律・行政機関を答える',
    explanation:
      '【解説】\n高度経済成長期には、工業の急速な発展の一方で各地に深刻な公害病が発生した。代表例の水俣病は、化学工場が排出したメチル水銀が水俣湾の魚介類に蓄積し、それを食べた住民に手足のしびれや言語障害などの神経症状を引き起こした公害病である（四大公害病：水俣病・新潟水俣病・四日市ぜんそく・イタイイタイ病の一つ）。\nこうした深刻な健康被害を受けて、1967年に公害対策基本法が制定され、1971年には公害行政を専門に扱う環境庁が設置されるなど、公害を規制・防止するための法整備が進んだ。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_14',
    subject: 'shakai',
    question:
      '有権者数12万人のP市で、住民が条例の制定を市長に請求する（直接請求権）には、有権者の何分の1以上の署名が必要か答えなさい。また、必要な署名数を求めなさい。',
    answer: '有権者の50分の1（1/50）以上の署名が必要。必要な署名数は120,000×1/50=2,400人。',
    hint: '条例の制定・改廃請求（イニシアティブ）に必要な署名の割合は、地方自治法で定められている',
    explanation:
      '【解説】\n地方自治法における直接請求権のうち、条例の制定・改廃の請求（イニシアティブ）や事務監査請求に必要な署名数は、有権者数に関わらず一律で「有権者の50分の1以上」と定められている（議会の解散請求や首長・議員の解職請求＝リコールは原則「有権者の3分の1以上」が必要で、こちらとは基準が異なる点に注意）。\nP市の有権者数は120,000人なので、必要な署名数＝120,000×1/50＝2,400人。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_15',
    subject: 'shakai',
    question:
      '明治政府が行った学制・兵制・税制の三大改革（学制の公布・徴兵令・地租改正）の目的を説明し、これら3つの改革がどのように関連し合って「富国強兵」の実現につながったか説明しなさい。',
    answer:
      '目的は、近代国家の基盤となる国民教育・近代的軍隊・安定した財源を整備し、「富国強兵・殖産興業」を実現することだった。学制により国民の教育水準を高めて近代産業を担う人材を育成し、徴兵令により近代的な国民軍を編成し、地租改正により安定した財源を確保することで、3つの改革が互いに支え合い、富国強兵政策を実現する基盤となった。',
    hint: '「教育（人材）」「軍事（国防）」「財源（お金）」という3つの要素が、国づくりにおいてどのように結びつくかを考える',
    explanation:
      '【解説】\n明治政府は近代国家をつくるため、学制（1872年）で国民全体に近代教育を受けさせる仕組みを整え、徴兵令（1873年）で士族に限らず国民から広く兵を集める近代的な軍隊を編成し、地租改正（1873年）で地価にもとづく安定した税収を確保した。\nこれらは互いに関連している。学制によって育成された人材が近代産業・軍事技術を支え、地租改正で得た安定財源が軍備や殖産興業（近代産業の育成）に投じられ、徴兵令による国民軍が国防を担う、というように3つの改革が組み合わさることで「富国強兵」政策全体を実現する基盤となった。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_shakai_16',
    subject: 'shakai',
    question:
      '次のできごとを、起こった順（古い順）に並べ替えなさい。①ルネサンス　②宗教改革　③産業革命　④名誉革命',
    answer: '①→②→④→③（ルネサンス14〜16世紀→宗教改革1517年〜→名誉革命1688年→産業革命18世紀後半〜）',
    hint: 'それぞれの出来事がヨーロッパの何世紀ごろの出来事かを思い出す',
    explanation:
      '【解説】\nルネサンス（14〜16世紀、イタリアに始まる文芸復興）→宗教改革（1517年、ルターの宗教改革に始まる）→名誉革命（1688〜89年、イギリスの立憲君主制確立）→産業革命（18世紀後半、イギリスに始まる）の順に起きている。世界史の大きな転換点となった出来事のおおよその年代を押さえておく。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },

  // ============================================================
  // 英語 (eigo) 16問
  // ============================================================
  {
    id: 'nada_eigo_01',
    subject: 'eigo',
    passage:
      'When Aiko began her research project on renewable energy, she expected to find simple answers about solar panels and wind turbines. Instead, she discovered that every energy source involves trade-offs among cost, reliability, and environmental impact. After interviewing three local engineers, she realized that choosing the right energy source depends heavily on where you live and what resources are available nearby. Her final report argued that there is no single perfect solution, only choices that fit local needs.',
    question: 'What did Aiko expect to find when she began her research?',
    answer: 'She expected to find simple answers about solar panels and wind turbines.',
    hint: 'Look at the second sentence of the passage.',
    explanation:
      '【解説】\n本文第1文「she expected to find simple answers about solar panels and wind turbines」がそのまま答えになる。「expected to find」＝「見つかると予想していた」という意味。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_02',
    subject: 'eigo',
    passage:
      'When Aiko began her research project on renewable energy, she expected to find simple answers about solar panels and wind turbines. Instead, she discovered that every energy source involves trade-offs among cost, reliability, and environmental impact. After interviewing three local engineers, she realized that choosing the right energy source depends heavily on where you live and what resources are available nearby. Her final report argued that there is no single perfect solution, only choices that fit local needs.',
    question: 'According to the passage, what does choosing the right energy source depend on?',
    answer: 'It depends on where you live and what resources are available nearby.',
    hint: 'Look at the sentence describing what Aiko realized after interviewing the engineers.',
    explanation:
      '【解説】\n第3文「she realized that choosing the right energy source depends heavily on where you live and what resources are available nearby」がそのまま答えとなる。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_03',
    subject: 'eigo',
    passage:
      'When Aiko began her research project on renewable energy, she expected to find simple answers about solar panels and wind turbines. Instead, she discovered that every energy source involves trade-offs among cost, reliability, and environmental impact. After interviewing three local engineers, she realized that choosing the right energy source depends heavily on where you live and what resources are available nearby. Her final report argued that there is no single perfect solution, only choices that fit local needs.',
    question:
      'In the sentence "choosing the right energy source depends heavily on where you live and what resources are available nearby," what is the grammatical role of the two clauses beginning with "where" and "what"?',
    answer:
      'They are noun clauses (indirect questions) that together function as the object of the preposition "on."',
    hint: 'The preposition "on" needs an object; think about what kind of clause can follow a preposition.',
    explanation:
      '【解説】\n"where you live" と "what resources are available nearby" は、それぞれ疑問詞（where, what）に導かれた間接疑問文の形をとる名詞節である。前置詞「on」の目的語として機能しており、2つの名詞節が"and"で並列に結ばれて1つのまとまった目的語になっている。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_04',
    subject: 'eigo',
    passage:
      'Our robotics club spent three months building a robot for the regional competition, but it broke down during the final test. Some members wanted to give up, saying that we had wasted our time. However, our captain reminded us that every failed test taught us something new about the machine. We rebuilt the robot in two weeks, and although we did not win first place, we learned more from that failure than we would have learned from an easy victory.',
    question: "What can be inferred about the captain's attitude toward failure?",
    answer:
      'The captain believed that failure is a valuable source of learning, not simply a waste of time.',
    hint: 'Look at what the captain said in contrast to the members who wanted to give up.',
    explanation:
      '【解説】\nキャプテンは「every failed test taught us something new about the machine（失敗した試験のたびに、機械について新しいことを学んだ）」と述べ、あきらめかけたメンバーたちの「時間を無駄にした」という見方に反論している。ここから、キャプテンは失敗を単なる無駄ではなく、貴重な学びの機会と捉えていることが読み取れる。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_05',
    subject: 'eigo',
    passage:
      'Our robotics club spent three months building a robot for the regional competition, but it broke down during the final test. Some members wanted to give up, saying that we had wasted our time. However, our captain reminded us that every failed test taught us something new about the machine. We rebuilt the robot in two weeks, and although we did not win first place, we learned more from that failure than we would have learned from an easy victory.',
    question: 'How long did it take the club to rebuild the robot?',
    answer: 'Two weeks.',
    hint: 'This is stated directly in the passage.',
    explanation: '【解説】\n本文「We rebuilt the robot in two weeks」がそのまま答えとなる。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_06',
    subject: 'eigo',
    passage:
      'Our robotics club spent three months building a robot for the regional competition, but it broke down during the final test. Some members wanted to give up, saying that we had wasted our time. However, our captain reminded us that every failed test taught us something new about the machine. We rebuilt the robot in two weeks, and although we did not win first place, we learned more from that failure than we would have learned from an easy victory.',
    question:
      'In the underlined part, "we learned more from that failure than we would have learned from an easy victory," what verb form follows "would have," and what kind of situation does this construction express?',
    answer:
      'The past participle ("learned") follows "would have," forming "would have + past participle." This expresses an unreal (hypothetical) result in the past — imagining what they would have learned in a situation (an easy victory) that did not actually happen.',
    hint: 'Think about the third conditional structure: "would have + past participle" describes something that did not really happen.',
    explanation:
      '【解説】\n"would have learned" は「would have＋過去分詞」という形で、実際には起こらなかった過去の出来事を仮定して、その結果を表す構文（仮定法過去完了に近い用法）である。ここでは「もし楽な勝利であったなら学べていただろう内容」という、実際には起こらなかった状況を想定して述べており、実際の失敗経験からの学びの大きさを強調している。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_07',
    subject: 'eigo',
    question: 'Choose the correct form to complete the sentence: "If she ___ harder, she would have passed the exam."',
    answer: 'had studied',
    hint: 'The result "would have passed" is in the past, so the "if" clause needs the past perfect form (third conditional).',
    explanation:
      '【解説】\n主節が「would have passed（合格していただろう）」という過去の事実に反する結果を表しているので、if節も過去完了形「had studied」を使う仮定法過去完了（第3条件文）が正しい。「If+過去完了, 主語+would have+過去分詞」という形で、過去に実際には起こらなかったことを仮定する。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
    choices: ['studied', 'would study', 'had studied', 'studies'],
  },
  {
    id: 'nada_eigo_08',
    subject: 'eigo',
    question: 'Choose the correct word to complete the sentence: "I ___ my bike fixed at the shop yesterday."',
    answer: 'had',
    hint: 'This is a causative construction ("have something done"). The sentence is in the past tense.',
    explanation:
      '【解説】\n「have＋目的語＋過去分詞」で「〜を…してもらう」という使役・依頼の意味を表す構文（この形は現在形ならhave、過去形ならhad）。文末に「yesterday」があるため過去形の「had」が正しい。「had my bike fixed」＝「自転車を修理してもらった」という意味。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
    choices: ['have', 'had', 'was having', 'has'],
  },
  {
    id: 'nada_eigo_09',
    subject: 'eigo',
    question: 'Change the following sentence into reported (indirect) speech: She said, "I will finish the report tomorrow."',
    answer: 'She said (that) she would finish the report the next day.',
    hint: 'In reported speech, "will" changes to "would" and "tomorrow" changes to "the next day."',
    explanation:
      '【解説】\n直接話法を間接話法に直すときは、時制を1つ過去にずらす（will→would）とともに、話す時点を基準にした時間表現も変える必要がある（tomorrow→the next day）。また、主語の「I」は話し手（She）に合わせて「she」に変える。\nShe said (that) she would finish the report the next day.',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_10',
    subject: 'eigo',
    question:
      'Combine the following sentence into one, using a participle construction: "Because he did not know the answer, he remained silent."',
    answer: 'Not knowing the answer, he remained silent.',
    hint: 'Turn the reason clause into a present participle phrase placed at the beginning of the sentence, using "not" before the participle to make it negative.',
    explanation:
      '【解説】\n理由を表す従属節「Because he did not know the answer」を、現在分詞を使った分詞構文に書き換える。否定の分詞構文は、否定語「not」を分詞の直前に置く。\nBecause he did not know the answer → Not knowing the answer\nよって、"Not knowing the answer, he remained silent." となる。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_11',
    subject: 'eigo',
    question: 'Choose the correct inverted sentence: "Rarely ___ such a beautiful sunset."',
    answer: 'have I seen',
    hint: 'When a negative adverb like "rarely" begins a sentence, the subject and auxiliary verb are inverted.',
    explanation:
      '【解説】\n"rarely"（めったに〜ない）のような否定的な意味を持つ副詞（句）が文頭に置かれると、主語と助動詞の倒置が起こる（have/hasなどの助動詞が主語の前に出る）。\n通常の語順「I have rarely seen such a beautiful sunset.」を、"Rarely"を文頭に出して倒置すると「Rarely have I seen such a beautiful sunset.」となる。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
    choices: ['I have seen', 'have I seen', 'I saw', 'did I saw'],
  },
  {
    id: 'nada_eigo_12',
    subject: 'eigo',
    question: 'Choose the correct form to complete the sentence: "The more you practice, ___ you become."',
    answer: 'the better',
    hint: 'This is the "the + comparative, the + comparative" construction, showing that two things change together.',
    explanation:
      '【解説】\n「The＋比較級, the＋比較級」の形で「〜すればするほど、ますます…」という意味を表す構文（相関比較級）。"good"の比較級は"better"なので、"the better"が正しい形になる。\n"The more you practice, the better you become."（練習すればするほど、上手になる。）',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
    choices: ['the better', 'better', 'the best', 'more good'],
  },
  {
    id: 'nada_eigo_13',
    subject: 'eigo',
    question:
      'Rewrite the following sentence by omitting the unnecessary words: "The man who is standing by the door is my uncle."',
    answer: 'The man standing by the door is my uncle.',
    hint: 'A relative clause with "be + present participle" can often be reduced to just the present participle.',
    explanation:
      '【解説】\n関係代名詞節「who is standing by the door」のうち、「主格の関係代名詞＋be動詞」（who is）は省略でき、現在分詞（standing）だけを残して名詞を後ろから修飾する形（分詞の後置修飾）にできる。\n"The man who is standing by the door" → "The man standing by the door"',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_14',
    subject: 'eigo',
    question:
      'Explain the difference in meaning between the following two sentences: (A) "He stopped smoking." (B) "He stopped to smoke."',
    answer:
      '(A) means he quit the habit of smoking (stop + gerund = stop an ongoing action). (B) means he paused what he was doing in order to smoke (stop + to-infinitive = stop in order to do something).',
    hint: 'Think about what follows "stopped" in each sentence — a gerund (-ing) or a to-infinitive — and what each form means after "stop."',
    explanation:
      '【解説】\n「stop＋動名詞（-ing）」は「〜すること（している行為）をやめる」という意味になる。(A)「He stopped smoking.」＝「彼はタバコを吸う習慣をやめた（禁煙した）」。\n一方「stop＋to不定詞」は「〜するために立ち止まる」という意味になる。(B)「He stopped to smoke.」＝「彼は（何かをしていた途中で）タバコを吸うために立ち止まった」。同じ"stop"でも後ろの形によって意味が大きく変わる点に注意する。',
    difficulty: 'standard',
    course: 'koko-nada',
    examType: 'koko',
  },
  {
    id: 'nada_eigo_15',
    subject: 'eigo',
    question:
      'Choose the phrasal verb that best completes the sentence: "After hours of argument, she finally ___ and agreed to his plan."',
    answer: 'gave in',
    hint: '"Give in" means to yield or stop resisting after a period of resistance.',
    explanation:
      '【解説】\n"give in"は「（抵抗をやめて）折れる・屈する」という意味の句動詞で、長い議論の末に相手の意見に従うという文脈に合う。"give up"は「あきらめる・やめる」という意味で、何かを続けることを完全にやめるニュアンスが強く、ここでは「相手の計画に同意した」という文脈には合わない。"give away"（無償で譲る）、"give out"（配る・尽きる）も文脈に合わない。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
    choices: ['gave in', 'gave up', 'gave away', 'gave out'],
  },
  {
    id: 'nada_eigo_16',
    subject: 'eigo',
    question:
      'Write your opinion in English (about 40-50 words): "Should schools require students to learn a foreign language starting in elementary school? Give one reason."',
    answer:
      '（自由英作文・模範解答例）"I think schools should require students to learn a foreign language starting in elementary school because young children can absorb new sounds and grammar more naturally than adults. Starting early gives them more time to become comfortable using the language before they enter difficult exams."',
    hint: 'State your opinion clearly first (I think.../I do not think...), then give one clear reason using "because."',
    explanation:
      '【解説】\nこれは唯一の正解がない自由英作文問題（灘高らしい思考力・表現力を問う出題）。採点にあたっては、①意見が明確に述べられているか、②理由が"because"などを使って論理的に示されているか、③文法・語彙の正確さ、の3点を評価するとよい。模範解答はあくまで一例であり、賛成・反対どちらの立場でも、理由が論理的であれば正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-nada',
    examType: 'koko',
  },
];

export const figuresKokoNadaFill: Record<string, Figure> = {
  // ある植物の正味のCO2交換速度（吸収+/放出-）と光の強さの関係。真の光合成速度は解答なので示さない。
  nada_rika_02: {
    kind: 'lineChart',
    xLabel: '光の強さ（相対値）',
    yLabel: '正味のCO₂交換速度（mg/時）　＋:吸収　－:放出',
    xRange: [0, 10],
    yRange: [-6, 12],
    series: [
      {
        label: 'ある植物の正味のCO₂交換速度',
        markers: true,
        points: [
          { x: 0, y: -4 },
          { x: 2, y: 0 },
          { x: 4, y: 4 },
          { x: 6, y: 8 },
          { x: 8, y: 10 },
          { x: 10, y: 10 },
        ],
      },
    ],
    caption: '暗黒下（光の強さ0）では呼吸によりCO₂を放出し、光を強くするにつれて光合成による吸収が増えていく様子を表したグラフ。',
  },
  // R1・R2を並列につないだ回路。合成抵抗・電流の値は解答なので示さない。
  nada_rika_03: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [[{ type: 'resistor', label: 'R₁(6Ω)' }], [{ type: 'resistor', label: 'R₂(12Ω)' }]],
    battery: { label: '12V' },
  },
  // ボーリング調査地点A・Bの柱状図。標高は問題文の条件として与える（凝灰岩層の標高の答えは示さない）。
  nada_rika_07: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        topLabel: '標高50m',
        layers: [
          { name: '泥岩層', thickness: 2, pattern: 'mud' },
          { name: '砂岩層', thickness: 3, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 1, pattern: 'ash' },
          { name: 'れき岩層', thickness: 4, pattern: 'gravel' },
        ],
      },
      {
        label: 'B地点',
        topLabel: '標高45m',
        layers: [
          { name: '泥岩層', thickness: 4, pattern: 'mud' },
          { name: '砂岩層', thickness: 3, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 1, pattern: 'ash' },
          { name: 'れき岩層', thickness: 4, pattern: 'gravel' },
        ],
      },
    ],
  },
  // 物質X・物質Yの溶解度曲線。60℃・20℃の具体的な溶解度は問題文中で与えているため、グラフはあくまで概形。
  nada_rika_10: {
    kind: 'lineChart',
    xLabel: '温度（℃）',
    yLabel: '溶解度（水100gに溶ける質量[g]）',
    xRange: [0, 80],
    yRange: [0, 150],
    series: [
      {
        label: '物質X',
        markers: true,
        points: [
          { x: 0, y: 20 },
          { x: 20, y: 40 },
          { x: 40, y: 60 },
          { x: 60, y: 100 },
          { x: 80, y: 140 },
        ],
      },
      {
        label: '物質Y',
        markers: true,
        dashed: true,
        points: [
          { x: 0, y: 35 },
          { x: 20, y: 36 },
          { x: 40, y: 37 },
          { x: 60, y: 38 },
          { x: 80, y: 39 },
        ],
      },
    ],
    caption: '物質Xと物質Yの溶解度曲線。物質Xは温度が上がるほど溶解度が大きく増加し、物質Yはほとんど変化しない。',
  },
  // ある国のGDPに占める産業別構成比。
  nada_shakai_05: {
    kind: 'pieChart',
    slices: [
      { label: '農業（第1次産業）', value: 12 },
      { label: '鉱工業（第2次産業）', value: 33 },
      { label: 'サービス業（第3次産業）', value: 55 },
    ],
    caption: 'ある国のGDPに占める産業別構成比。',
  },
  // 日本のある年における年齢別人口構成。老年人口指数の値は解答なので示さない。
  nada_shakai_09: {
    kind: 'barChart',
    xLabel: '年齢層',
    yLabel: '総人口に占める割合（%）',
    yMax: 70,
    bars: [
      { label: '0〜14歳', value: 12 },
      { label: '15〜64歳', value: 59 },
      { label: '65歳以上', value: 29 },
    ],
    caption: '日本のある年における年齢別人口構成（%）。',
  },
};
