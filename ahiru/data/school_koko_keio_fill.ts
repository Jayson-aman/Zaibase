import type { Question } from './questions-meta';
import type { Figure } from './figures';

// 慶應義塾高等学校（koko-keio）専用の追加問題セット。
// 既存の keio_azabu_exam.ts / koko_sansu_ex_15.ts が算数のみだったため、
// 国語・理科・社会・英語の4教科を新規に追加してバランスを補うファイル。
// 最難関レベル（偏差値73前後・英語重視）のため basic は含めず、standard:advanced ≒ 6:10。
export const schoolKokoKeioFill: Question[] = [
  // ============================================================
  // 国語 (kokugo) 16問
  // ============================================================
  {
    id: 'keio_kokugo_01',
    subject: 'kokugo',
    passage:
      '由紀のヴァイオリンの先生は、技術よりもまず「聴くこと」を教えた。「音程を合わせる前に、自分の出した音がどう響いているか聴きなさい」と先生は繰り返した。由紀は最初、その意味がわからず、指の動かし方ばかり気にしていた。ある日、練習室の隅で先生の弾く一音を聴いたとき、由紀は初めて、音には奥行きがあるのだと気づいた。',
    question: '傍線部「音には奥行きがあるのだと気づいた」とはどういうことか、40字以内で説明しなさい。',
    answer: '音の高さや強さだけでなく、響きの重なりや余韻など、単純ではない深みが音にあるということ。',
    hint: '由紀がそれまで気にしていたことと、先生の一音を聴いて新たに感じたことを対比させて考える',
    explanation:
      '【解説】\n由紀はそれまで指の動かし方(技術)ばかり気にしていたが、先生の一音を聴いて、音が単なる高さ・大きさだけでなく、響きや余韻に深みを持つものだと初めて実感した、という気づきを表している。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_02',
    subject: 'kokugo',
    passage:
      '由紀のヴァイオリンの先生は、技術よりもまず「聴くこと」を教えた。「音程を合わせる前に、自分の出した音がどう響いているか聴きなさい」と先生は繰り返した。由紀は最初、その意味がわからず、指の動かし方ばかり気にしていた。ある日、練習室の隅で先生の弾く一音を聴いたとき、由紀は初めて、音には奥行きがあるのだと気づいた。',
    question: '先生が由紀に繰り返し伝えていたことを、本文の言葉を使って30字以内でまとめなさい。',
    answer: '音程を合わせる前に、自分の出した音がどう響いているか聴くこと。',
    hint: '先生の発言をそのまま「」でくくられた部分から抜き出す',
    explanation:
      '【解説】\n本文中「音程を合わせる前に、自分の出した音がどう響いているか聴きなさい」がそのまま先生の教えであり、この部分をそのまま抜き出してまとめればよい。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_03',
    subject: 'kokugo',
    passage:
      '由紀のヴァイオリンの先生は、技術よりもまず「聴くこと」を教えた。「音程を合わせる前に、自分の出した音がどう響いているか聴きなさい」と先生は繰り返した。由紀は最初、その意味がわからず、指の動かし方ばかり気にしていた。ある日、練習室の隅で先生の弾く一音を聴いたとき、由紀は初めて、音には奥行きがあるのだと気づいた。',
    question: '由紀が最初、先生の言葉の意味がわからなかった理由を50字程度で説明しなさい。',
    answer:
      '由紀は「聴くこと」よりも指の動かし方という技術的な面ばかりに意識が向いていて、音そのものに耳を傾けていなかったから。',
    hint: '由紀の意識がどこに向いていたかに注目する',
    explanation:
      '【解説】\n本文「由紀は最初、その意味がわからず、指の動かし方ばかり気にしていた」から、由紀の関心が技術面(指の動き)に偏っており、音を聴くという視点が欠けていたことが読み取れる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_04',
    subject: 'kokugo',
    passage:
      '弟は毎朝、庭のトマトの苗に水をやっていたが、実がなる気配は一向になかった。「早く育てって言っても無駄だよ」と姉が笑うと、弟は少しむっとして「待つのも世話のうちなんだ」と言い返した。夏の終わり、真っ赤に実ったトマトを収穫しながら、姉は弟の言葉の意味を、ようやく理解した気がした。',
    question:
      '傍線部「姉は弟の言葉の意味を、ようやく理解した気がした」とあるが、姉はどのようなことを理解したと考えられるか、45字以内で説明しなさい。',
    answer: '成果をすぐに求めず気長に待ち続けることも、世話や努力の大切な一部だということ。',
    hint: '弟の「待つのも世話のうちなんだ」という言葉が何を表しているか考える',
    explanation:
      '【解説】\n弟の「待つのも世話のうちなんだ」という言葉の通り、成長を急がせず気長に手をかけ続けることそのものが世話の本質であると、姉は実際にトマトが実った様子を見て実感したと考えられる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_05',
    subject: 'kokugo',
    passage:
      '弟は毎朝、庭のトマトの苗に水をやっていたが、実がなる気配は一向になかった。「早く育てって言っても無駄だよ」と姉が笑うと、弟は少しむっとして「待つのも世話のうちなんだ」と言い返した。夏の終わり、真っ赤に実ったトマトを収穫しながら、姉は弟の言葉の意味を、ようやく理解した気がした。',
    question: '弟が「少しむっとして」言い返した理由を35字程度で説明しなさい。',
    answer: '姉が自分の世話の仕方や努力を、無駄なものだと軽く見ているように感じたから。',
    hint: '姉の発言が弟にとってどのように聞こえたかを考える',
    explanation:
      '【解説】\n姉の「早く育てって言っても無駄だよ」という発言は、弟の日々の世話を無意味なものとして扱っているように聞こえるため、弟はそれに反発している。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_06',
    subject: 'kokugo',
    passage:
      '弟は毎朝、庭のトマトの苗に水をやっていたが、実がなる気配は一向になかった。「早く育てって言っても無駄だよ」と姉が笑うと、弟は少しむっとして「待つのも世話のうちなんだ」と言い返した。夏の終わり、真っ赤に実ったトマトを収穫しながら、姉は弟の言葉の意味を、ようやく理解した気がした。',
    question: 'この文章の表現の特徴として最も適切なものを選びなさい。',
    answer: '会話文と情景描写を通して、姉と弟の考え方の違いと変化を描いている',
    hint: '会話部分と場面の描写がそれぞれどのような役割を果たしているか考える',
    explanation:
      '【解説】\n本文は姉弟の会話(「早く育てって言っても無駄だよ」「待つのも世話のうちなんだ」)と、夏の終わりの収穫の場面という情景描写を組み合わせて、姉の考え方が変化していく様子を描いている。擬人法や一人称限定視点、複雑な時系列構成は見られない。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
    choices: [
      '擬人法を多用し、トマトの気持ちを直接描いている',
      '会話文と情景描写を通して、姉と弟の考え方の違いと変化を描いている',
      '一人称視点で弟の内面のみを詳細に描写している',
      '過去と現在を頻繁に入れ替える複雑な構成になっている',
    ],
  },
  {
    id: 'keio_kokugo_07',
    subject: 'kokugo',
    passage:
      '日本の伝統的な水墨画や庭園には、あえて何も描かない、何も置かない「余白」が大切にされてきた。余白は単なる空白ではなく、見る人の想像力を引き出す装置である。すべてを描き尽くさないことで、鑑賞者はそこに自分自身の解釈を重ねることができる。情報を詰め込むことが豊かさだと考えがちな現代において、余白の思想はむしろ新鮮な価値を持つ。',
    question:
      '傍線部「余白は単なる空白ではなく、見る人の想像力を引き出す装置である」とはどういうことか、50字以内で説明しなさい。',
    answer: '余白は何もない空間ではなく、鑑賞者自身に自由な解釈や想像をさせるための仕掛けだということ。',
    hint: '「装置」という比喩表現が何を指しているか考える',
    explanation:
      '【解説】\n「装置」という比喩表現から、余白が受動的な「空白」ではなく、鑑賞者の想像力を能動的に引き出す積極的な役割を持つことを読み取る。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_08',
    subject: 'kokugo',
    passage:
      '日本の伝統的な水墨画や庭園には、あえて何も描かない、何も置かない「余白」が大切にされてきた。余白は単なる空白ではなく、見る人の想像力を引き出す装置である。すべてを描き尽くさないことで、鑑賞者はそこに自分自身の解釈を重ねることができる。情報を詰め込むことが豊かさだと考えがちな現代において、余白の思想はむしろ新鮮な価値を持つ。',
    question: '本文の要旨を70字以内でまとめなさい。',
    answer:
      '日本の水墨画や庭園の余白は、すべてを描き尽くさず鑑賞者の想像力に委ねる装置であり、情報過多になりがちな現代においてむしろ新鮮な価値を持つということ。',
    hint: '「余白とは何か」「それが現代においてどのような意味を持つか」の2点をまとめる',
    explanation:
      '【解説】\n本文全体の流れ(余白の説明→その機能→現代における意義)を過不足なくまとめる。「余白=想像力を引き出す装置」「現代における新鮮な価値」の2点を落とさないことがポイント。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_09',
    subject: 'kokugo',
    question: '「見る」を尊敬語・謙譲語にそれぞれ直しなさい。',
    answer: '尊敬語=ご覧になる、謙譲語=拝見する',
    hint: '尊敬語は相手の動作を高め、謙譲語は自分の動作をへりくだる',
    explanation:
      '【解説】\n「見る」の尊敬語は相手の動作を高める「ご覧になる」、謙譲語は自分の動作をへりくだる「拝見する」。使い分けを問う頻出項目である。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_10',
    subject: 'kokugo',
    question:
      '「一石二鳥」の意味を説明し、同じような意味を持つ四字熟語を1つ答えなさい。',
    answer: '1つの行動で2つの利益を得ること。同義の四字熟語として「一挙両得」などがある。',
    hint: '石を1つ投げて何が起きるかをイメージする',
    explanation:
      '【解説】\n「一石二鳥」は1つの石を投げて2羽の鳥を得る、つまり1つの行為から同時に2つの利益を得ることを意味する故事成語。同義の四字熟語として「一挙両得」がある。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_11',
    subject: 'kokugo',
    question: '「具体」の対義語を答えなさい。',
    answer: '抽象',
    hint: '個々の事物から共通する性質だけを取り出して考えることを何というか',
    explanation:
      '【解説】\n「具体」は形や姿がはっきりしていて実際に知覚できることを指し、「抽象」はいくつかの事物から共通する性質を取り出し一般化することを指す。両者は対義語の関係にある。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_12',
    subject: 'kokugo',
    question: '次の文に用いられている表現技法を答えなさい。「風が窓をノックしていた。」',
    answer: '擬人法(風という人でないものを、人間のように表現している)',
    hint: '「ノックする」という動作は本来何がする動作か考える',
    explanation:
      '【解説】\n「ノックする」は本来人間の動作だが、それを「風」に当てはめて表現しているため擬人法である。人でないものを人にたとえる技法である。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_13',
    subject: 'kokugo',
    question: '古文単語「あはれ」の意味を、現代語で説明しなさい。',
    answer: 'しみじみとした趣・感動、という意味。',
    hint: '『源氏物語』などの王朝文学で頻繁に用いられる、しみじみとした情緒を表す語',
    explanation:
      '【解説】\n「あはれ」はしみじみとした情緒や感動を表す古語で、『源氏物語』などの王朝文学で頻繁に用いられる。「をかし」が明るく知的な面白さを表すのに対し、「あはれ」はしみじみとした深い情感を表す点で対比的に扱われることが多い。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_14',
    subject: 'kokugo',
    question: '「先生は明日来られる。」の傍線部「られる」の文法的な意味として適切なものを選びなさい。',
    answer: '尊敬',
    hint: '主語が「先生」という目上の人物であることに注目する',
    explanation:
      '【解説】\n「られる」には受け身・可能・自発・尊敬の4つの用法がある。ここでは「先生」という目上の人の動作を高めて表現しているので尊敬の意味。文脈から主語が誰の動作かを確認して判別する。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
    choices: ['受け身', '可能', '自発', '尊敬'],
  },
  {
    id: 'keio_kokugo_15',
    subject: 'kokugo',
    question:
      '熟語「着席」の構成を説明しなさい(上の漢字が下の漢字を修飾する／主語と述語の関係／下から上に返って読む、などの観点から)。',
    answer: '下から上に返って読むと意味が通る構成(「席に着く」)。',
    hint: '訓読みで下から上に読んでみる',
    explanation:
      '【解説】\n「着席」は「席に着く」と訓読みで下から上に返って読むと意味が通る熟語の構成である。同様の構成の例に「登山(山に登る)」「読書(書を読む)」などがある。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_kokugo_16',
    subject: 'kokugo',
    question:
      '「効率化が進む社会において、あえて『無駄』を大切にすることにはどのような意味があるか」について、具体例を挙げながらあなたの考えを100字程度で述べなさい。',
    answer:
      '(記述式・自由回答。模範解答例)無駄に見える時間の中にこそ、新しい発見や人との深い関わりが生まれることがある。例えば、遠回りの雑談から思いがけないアイデアが生まれることもある。効率だけを追い求めると、こうした偶然の価値を失ってしまう恐れがある。',
    hint: '一見無駄に見える行動が、実は何かの役に立った経験を1つ思い出してみる',
    explanation:
      '【解説】\nこれは唯一の正解がない自由記述問題(思考力・記述力を問う出題形式)。採点にあたっては、①主張の明確さ、②具体例の説得力、③論理的なつながり、の3点を評価するとよい。模範解答はあくまで一例であり、他の妥当な具体例・論理展開も正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },

  // ============================================================
  // 理科 (rika) 16問
  // ============================================================
  {
    id: 'keio_rika_01',
    subject: 'rika',
    question:
      '体積40cm³、質量356gの金属球がある。この金属の密度を求め、次の表のうちどの金属に最も近いか答えなさい。（アルミニウム2.7g/cm³、鉄7.9g/cm³、銅8.9g/cm³、鉛11.3g/cm³）',
    answer: '密度8.9g/cm³、銅',
    hint: '密度=質量÷体積で計算する',
    explanation: '【解説】\n密度=質量÷体積=356÷40=8.9g/cm³。\n表の中で8.9g/cm³に一致するのは銅である。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_02',
    subject: 'rika',
    question: '生物の呼吸を、言葉の式で表しなさい(材料・生成物をすべて含めること)。',
    answer: '有機物(デンプンなど)+酸素 → 二酸化炭素+水+エネルギー',
    hint: '光合成の逆の反応としてイメージすると覚えやすい',
    explanation:
      '【解説】\n呼吸は、細胞内で有機物(デンプンなど)を酸素を使って分解し、二酸化炭素と水を発生させながらエネルギーを取り出すはたらきである。光合成の逆の反応とイメージすると覚えやすい。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_03',
    subject: 'rika',
    figureDescription: '抵抗R₁=6Ω、R₂=3Ωを並列につないだ回路。電源電圧は12V。',
    question:
      '抵抗R₁=6Ω、R₂=3Ωを並列につないだ回路に、電圧12Vの電源をつないだ。回路全体(電源)を流れる電流の大きさを求めなさい。',
    answer: '6A',
    hint: '並列回路の合成抵抗は 1/R=1/R₁+1/R₂ で求める',
    explanation:
      '【解説】\n並列回路の合成抵抗Rpは 1/Rp=1/R₁+1/R₂=1/6+1/3=1/6+2/6=3/6=1/2 より Rp=2Ω。\n並列回路では各抵抗に電源と同じ電圧12Vがかかるので、オームの法則より全体の電流はI=V/Rp=12/2=6A。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_04',
    subject: 'rika',
    question:
      '抵抗R₁=6Ω、R₂=3Ωを並列につなぎ、電圧12Vの電源をつないだ回路がある(回路全体を流れる電流は6A)。このとき、R₂に流れる電流の大きさを求めなさい。',
    answer: '4A',
    hint: '並列回路では、各抵抗に電源と同じ電圧がかかる',
    explanation:
      '【解説】\n並列回路では各抵抗に電源と同じ電圧(12V)がかかる。R₂を流れる電流は、オームの法則より I=V/R₂=12/3=4A。\n(参考：R₁を流れる電流は12/6=2Aで、2A+4A=6Aとなり全体の電流と一致する)',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_05',
    subject: 'rika',
    question:
      'エンドウの種子の形について、丸(A)がしわ(a)に対して優性であるとき、Aa(丸)×aa(しわ)の交配(検定交雑)でできる子の表現型の分離比を求めなさい。',
    answer: '丸:しわ=1:1',
    hint: 'Aaが作る配偶子の種類と、aaが作る配偶子の種類を考える',
    explanation:
      '【解説】\n親の遺伝子型はAaとaa。Aaは配偶子としてAとaを1:1の割合で作り、aaはaのみを作る。子の遺伝子型はAa:aa=1:1となり、Aaは丸、aaはしわなので、表現型の比も丸:しわ=1:1になる(検定交雑の原理)。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_06',
    subject: 'rika',
    question:
      '2組の対立形質(独立の法則が成り立つ)について、AaBb×aabbの交配(検定交雑)を行うとき、子の表現型の分離比を求めなさい。',
    answer: 'AaBb:Aabb:aaBb:aabb=1:1:1:1',
    hint: 'AaBbが作る配偶子の種類と割合を考える',
    explanation:
      '【解説】\nAaBbは配偶子としてAB, Ab, aB, abを1:1:1:1の割合で作り、aabbはabのみを作る。よって子の遺伝子型(表現型)はAaBb:Aabb:aaBb:aabb=1:1:1:1となる。検定交雑によって、AaBbが作る配偶子の比をそのまま調べることができる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_07',
    subject: 'rika',
    figureDescription:
      '標高50mの地点Aと標高40mの地点Bの柱状図。どちらにも同じ凝灰岩層(鍵層)が見られるが、地表からの深さが異なる。',
    question:
      '標高50mの地点Aと標高40mの地点Bでボーリング調査を行ったところ、両地点に共通する凝灰岩層(同時期に堆積した鍵層)が見つかった。地点Aではこの凝灰岩層が地表から深さ3m〜5mの位置に、地点Bでは地表から深さ8m〜10mの位置にあった。この地域の地層はどの方向に低くなるように傾いていると考えられるか、標高を用いて説明しなさい。',
    answer:
      '地点Aでの凝灰岩層の標高は47m(50-3)、地点Bでの凝灰岩層の標高は32m(40-8)であり、B地点の方が低い。よって、この地域の地層はB地点に向かって低くなるように傾いている。',
    hint: '標高=地表の標高-地表からの深さ で、同じ鍵層の標高を地点ごとに求めて比較する',
    explanation:
      '【解説】\n同じ凝灰岩層(鍵層)を基準に、それぞれの地点での層の標高を比較する。標高=地表の標高-地表からの深さ で求める。\n地点A:50-3=47m、地点B:40-8=32m。\n同じ層なのに標高が異なるのは地層が傾いているためで、標高の低いB地点側に向かって地層が沈み込む(低くなる)ように傾いていると判断できる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_08',
    subject: 'rika',
    question:
      '次の化学反応式の( )に当てはまる係数を求め、プロパンの燃焼を表す化学反応式を完成させなさい。C₃H₈+( )O₂ → ( )CO₂+( )H₂O',
    answer: 'C₃H₈+5O₂ → 3CO₂+4H₂O(係数は順に5、3、4)',
    hint: 'まず炭素・水素の数をそろえ、最後に酸素の数をそろえる',
    explanation:
      '【解説】\n左辺のC₃H₈には炭素3個・水素8個。炭素はCO₂の係数と等しくなるので3。水素はH₂Oの係数×2=8よりH₂Oの係数は4。\n酸素の数は右辺で3×2(CO₂)+4×1(H₂O)=6+4=10個必要なので、O₂の係数は10÷2=5。\nよってC₃H₈+5O₂ → 3CO₂+4H₂O。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_09',
    subject: 'rika',
    question: '硫酸と水酸化ナトリウム水溶液が中和するときの化学反応式を、係数を含めて表しなさい。',
    answer: 'H₂SO₄+2NaOH → Na₂SO₄+2H₂O',
    hint: '硫酸は2価の酸であることに注意して係数を考える',
    explanation:
      '【解説】\n硫酸(H₂SO₄)は2価の酸なので、中和には水酸化ナトリウム(NaOH)が2つ必要になる。H原子・Na原子・S原子・O原子の数がそれぞれ反応前後で等しくなるように係数を確認すると、H₂SO₄+2NaOH → Na₂SO₄+2H₂Oとなる。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_10',
    subject: 'rika',
    question:
      '炭酸カルシウム15gを塩酸と反応させたところ、気体(二酸化炭素)が2.2g発生し、反応後の水溶液の質量が42.8gになった。反応前に用いた塩酸の質量を求めなさい。',
    answer: '30g',
    hint: '化学変化の前後で、物質全体の質量は変わらない(質量保存の法則)',
    explanation:
      '【解説】\n質量保存の法則より、反応前の全質量=反応後の全質量。\n反応前：炭酸カルシウム15g+塩酸xg\n反応後：発生した気体2.2g+残った水溶液42.8g=45g\nよって 15+x=45 より x=30g。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_11',
    subject: 'rika',
    question:
      '1辺10cmの立方体(密度0.8g/cm³)を静かに水に浮かべたところ、静止した。このとき、この立方体にはたらく浮力の大きさを求めなさい。（水の密度は1g/cm³、100gの物体にはたらく重力の大きさを1Nとする）',
    answer: '8N',
    hint: '物体が水に浮いて静止しているとき、浮力の大きさは物体の重さとつり合っている',
    explanation:
      '【解説】\n物体が水に浮いて静止しているとき、浮力の大きさは物体にはたらく重力(重さ)の大きさとつり合っている。\n立方体の体積=10×10×10=1000cm³、密度0.8g/cm³なので質量=1000×0.8=800g。\n100gの物体にはたらく重力が1Nなので、800gの重力の大きさは800÷100×1=8N。\n静止しているときの浮力は重力とつり合っているので、浮力の大きさも8N。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_12',
    subject: 'rika',
    question:
      '凸レンズの焦点距離の内側(焦点よりレンズに近い位置)に物体を置いたとき、できる像の種類・大きさ・向きを説明しなさい。',
    answer: '物体と同じ側に、実物より大きい正立の虚像ができる(実像はできない)。',
    hint: '焦点の内側では、レンズを通った光が実際には1点に集まらないことに注目する',
    explanation:
      '【解説】\n物体を焦点の内側に置くと、レンズを通った光は実際には集まらず広がるため実像はできない。レンズを通して見ると、物体と同じ側に、実物より大きく、上下左右が同じ向き(正立)の虚像が見える。これは凸レンズを虫眼鏡として使うときの原理である。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_13',
    subject: 'rika',
    figureDescription: '物質Xの溶解度曲線(温度と溶解度の関係を示す折れ線グラフ)。',
    question:
      '下のグラフは物質Xの溶解度曲線である。60℃の水100gに物質Xを溶かして飽和水溶液をつくった後、20℃まで冷やした。このとき何gの結晶が出てくるか求めなさい。（60℃での溶解度は60g、20℃での溶解度は20gとする）',
    answer: '40g',
    hint: '溶解度は「水100gに溶ける限界の質量」を表す。溶けきれなくなった分が結晶として出てくる',
    explanation:
      '【解説】\n60℃の水100gには、溶解度より60gの物質Xが溶けて飽和している。20℃まで冷やすと、水100gに溶けていられる量(溶解度)は20gまで減るので、60-20=40gが溶けきれずに結晶として出てくる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_14',
    subject: 'rika',
    question: '太陽・地球・月の位置関係と、大潮・小潮が起こる仕組みを説明しなさい。',
    answer:
      '太陽と月が地球から見て一直線上に並ぶとき(新月・満月のころ)、太陽と月の引力が同じ向きに重なって干潮と満潮の差が最大になる大潮が起こる。太陽と月が地球に対して直角の方向にあるとき(上弦・下弦のころ)、互いの引力が打ち消し合い、干潮と満潮の差が最小になる小潮が起こる。',
    hint: '潮の満ち引きは主に月の引力によって起こり、太陽の引力も影響することを踏まえる',
    explanation:
      '【解説】\n潮の満ち引き(潮汐)は主に月の引力によって起こり、太陽の引力も影響する。太陽・地球・月が一直線に並ぶ新月・満月のころは、月と太陽の引力が同じ方向に働き合って潮の干満差が最大の大潮になる。半月(上弦・下弦)のころは、月と太陽の引力の向きが直角に近くなり打ち消し合うため、干満差が最小の小潮になる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_15',
    subject: 'rika',
    question:
      '体細胞分裂における次の4つの段階を、分裂が進む順に並べ替えなさい。①染色体が細胞の両端に分かれて移動する ②染色体が細胞の中央(赤道面)に並ぶ ③染色体が凝縮して太く短くなり、核膜が消える ④細胞質が2つに分かれ、2個の細胞になる',
    answer: '③→②→①→④',
    hint: '核の中の変化(染色体の凝縮)から始まり、細胞質の分裂で終わることを思い出す',
    explanation:
      '【解説】\n体細胞分裂は、核内の染色体が凝縮し核膜が消える前期(③)、染色体が細胞の中央に並ぶ中期(②)、染色体が両端に分かれて移動する後期(①)、細胞質が分裂して2つの細胞になる終期(④)の順に進む。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_rika_16',
    subject: 'rika',
    question:
      '100gの水の温度を20℃から60℃まで上昇させるのに必要な熱量を求めなさい。（水1gの温度を1℃上げるのに必要な熱量は4.2Jとする）',
    answer: '16800J(16.8kJ)',
    hint: '熱量=質量×比熱×温度変化 で計算する',
    explanation:
      '【解説】\n熱量=水の質量×比熱×温度変化=100×4.2×(60-20)=100×4.2×40=16800J。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },

  // ============================================================
  // 社会 (shakai) 16問
  // ============================================================
  {
    id: 'keio_shakai_01',
    subject: 'shakai',
    question: '明治政府が行った「廃藩置県」とはどのような改革か、その目的とともに説明しなさい。',
    answer:
      '江戸時代の藩を廃止して府・県を置き、中央政府が任命した府知事・県令(県知事)を派遣して直接統治する改革。中央集権国家を確立することが目的だった。',
    hint: 'それまで大名が治めていた土地を、誰がどのように治めることになったか考える',
    explanation:
      '【解説】\n廃藩置県(1871年)は、それまで大名が治めていた藩を廃止し、府・県という新しい行政区画を置いて、政府が任命した役人(府知事・県令)を派遣して統治させる改革。これにより地方の実権が中央政府に集約され、中央集権国家の基礎が築かれた。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_02',
    subject: 'shakai',
    question: '地方自治における住民の直接請求権のうち、「条例の制定・改廃」を求める場合に必要な署名数の要件を答えなさい。',
    answer: '有権者の50分の1以上の署名',
    hint: '首長・議員の解職請求(リコール)に必要な署名数とは異なる、より緩やかな要件であることに注意する',
    explanation:
      '【解説】\n地方自治法に基づく直接請求権のうち、条例の制定・改廃を求める場合には、有権者の50分の1以上の署名を集めて首長に請求する。なお、首長・議員の解職(リコール)や議会の解散請求には、より厳しい要件である有権者の3分の1以上の署名が必要となる(有権者40万人以下の場合)。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_03',
    subject: 'shakai',
    question:
      '日本において、法律や行政処分が憲法に違反していないかどうかを最終的に判断する権限を持つ機関はどこか。その機関の通称も含めて答えなさい。',
    answer: '最高裁判所。違憲審査(法令審査)についての最終判断権を持つことから「憲法の番人」と呼ばれる。',
    hint: '下級裁判所も違憲審査はできるが、最終的な判断はどの機関が下すか考える',
    explanation:
      '【解説】\n下級裁判所も違憲審査を行うことはできるが、法律などが憲法に適合するかどうかについて最終的な判断を下す権限は最高裁判所にある。そのため最高裁判所は「憲法の番人」と呼ばれる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_04',
    subject: 'shakai',
    figureDescription: 'あるサバナ気候の都市の月別降水量を示す棒グラフ。11〜3月ごろに降水量が多く、6〜8月ごろはほぼ0mm。',
    question:
      '下の棒グラフは、あるサバナ気候の都市の月別降水量を示したものである。グラフから読み取れる降水パターンの特徴を説明し、雨季と乾季でみられる植生の違いも簡単に説明しなさい。',
    answer:
      'グラフから、11月〜3月ごろに降水量が多い雨季、6月〜8月ごろにほとんど雨が降らない乾季があり、雨季と乾季の差がはっきりしていることが読み取れる。雨季には草や低木がよく茂るが、乾季には多くの植物が枯れたようになり、丈の長い草原にまばらな樹木が点在するサバナ特有の景観になる。',
    hint: 'グラフの降水量が多い月と少ない月を分けて考え、それぞれの季節で植物がどうなるか考える',
    explanation:
      '【解説】\n棒グラフから、11〜3月ごろに月降水量が100mmを超える雨季があり、6〜8月ごろは降水量がほぼ0mmの乾季であることが読み取れる。これは南半球のサバナ気候(Aw)に典型的な、夏(11〜3月)に雨季、冬(6〜8月)に乾季が来るパターンである。雨季には草木がよく茂るが、乾季には多くの草木が枯れたようになり、丈の高い草原にアカシアなどの樹木がまばらに生える、サバナ特有の植生が形成される。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_05',
    subject: 'shakai',
    question:
      '日本の三大工業地帯のうち、金属工業(特に鉄鋼業)の割合が比較的高く、中小企業(町工場)が多いことで知られる工業地帯の名称を答えなさい。',
    answer: '阪神工業地帯',
    hint: '大阪府・兵庫県を中心に広がる工業地帯を思い出す',
    explanation:
      '【解説】\n阪神工業地帯は大阪府・兵庫県を中心に広がり、鉄鋼業などの金属工業の割合が三大工業地帯の中で比較的高いことに加え、大阪府東部などに中小企業(町工場)が集積していることで知られる。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_06',
    subject: 'shakai',
    question:
      'ある発展途上国の人口ピラミッドが「富士山型(ピラミッド型)」であるとき、この国が今後直面すると考えられる社会的課題を2つ答えなさい。',
    answer:
      '①人口が急増し、食料・住宅・雇用の不足が生じやすい。②子どもの割合が高いため、教育施設や医療体制の整備が追いつかないおそれがある。',
    hint: '「富士山型」は出生率が高く、若い世代の割合が非常に大きい人口ピラミッドの形',
    explanation:
      '【解説】\n富士山型(ピラミッド型)の人口ピラミッドは、出生率が高く若い世代の割合が非常に大きい発展途上国型の人口構成を表す。この場合、人口の急激な増加によって食料・住宅・雇用が不足しやすくなることに加え、子どもの数が多いことで教育・医療などの社会インフラの整備が追いつかなくなるという課題が生じやすい。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_07',
    subject: 'shakai',
    question:
      '国際連合の安全保障理事会における常任理事国が持つ「拒否権」とはどのような権限か説明し、この制度が抱える問題点を1つ指摘しなさい。',
    answer:
      '常任理事国(アメリカ・ロシア・イギリス・フランス・中国)のうち1か国でも反対すると、実質事項に関する決議を成立させることができない権限。問題点として、常任理事国自身や、その同盟国が関わる問題については決議が成立せず、安全保障理事会が機能不全に陥りやすいことが挙げられる。',
    hint: '5つの常任理事国のうちどれか1か国が反対したら、決議はどうなるか考える',
    explanation:
      '【解説】\n拒否権は国際連合の安全保障理事会の常任理事国5か国(米・露・英・仏・中)に認められた権限で、実質事項の決議には常任理事国全会一致に近い賛成が必要となる。これにより、常任理事国が直接的・間接的に関わる紛争では決議が採択されにくく、安保理が機能しなくなる問題がしばしば指摘される。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_08',
    subject: 'shakai',
    question: '日本国憲法の改正手続きについて、国会での発議に必要な要件と、その後の手続きを説明しなさい。',
    answer:
      '衆参各議院の総議員の3分の2以上の賛成で国会が憲法改正を発議し、その後国民投票を行って過半数の賛成を得ることで改正が成立する。',
    hint: '通常の法律を改正するときの要件(出席議員の過半数)と比べて、より厳しい条件になっていることに注目する',
    explanation:
      '【解説】\n憲法第96条により、憲法改正には各議院の総議員の3分の2以上の賛成による国会の発議と、それに続く国民投票での過半数の賛成が必要とされている。通常の法律改正(出席議員の過半数)よりも厳格な手続きが定められている「硬性憲法」の代表例である。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_09',
    subject: 'shakai',
    question:
      'ある商品の人気が急上昇し需要が急激に増えたが、供給量は変わらなかった場合、価格はどのように変化するか、理由とともに説明しなさい。',
    answer: '価格は上昇する。需要量が供給量を上回ると品不足が生じ、より高い価格でも買いたいという人が増えるため、売り手は価格を引き上げる。',
    hint: '需要と供給のバランスが崩れたとき、市場でどのような調整が起きるか考える',
    explanation:
      '【解説】\n需要量が供給量を上回ると、欲しい人の数に対して商品の量が足りなくなり品不足が生じる。品不足の状況では、多少値段が高くても買いたいという人が出てくるため、価格は上昇する方向に動く。逆に供給が需要を上回る場合は、売れ残りが生じて価格は下落する。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_10',
    subject: 'shakai',
    question:
      '1962年に起きた「キューバ危機」とはどのような出来事か説明し、これが冷戦下の世界に与えた影響を述べなさい。',
    answer:
      'ソ連がキューバに核ミサイル基地を建設しようとしたことに対し、アメリカが海上封鎖などで強く反発し、米ソ間の緊張が核戦争の危機まで高まった出来事。核戦争寸前まで緊張が高まったことへの反省から、米ソ間にホットラインが設置されるなど、その後の緊張緩和(デタント)や核軍縮交渉のきっかけとなった。',
    hint: 'キューバに何を建設しようとしたか、それに対しアメリカがどう対応したかを整理する',
    explanation:
      '【解説】\nキューバ危機は、社会主義国キューバに接近したソ連が核ミサイル基地の建設を進めようとしたことにアメリカが反発し、海上封鎖を行うなどして、米ソが核戦争寸前まで対立した1962年の事件。危機は回避されたが、この経験から米ソ首脳間のホットライン設置や部分的核実験禁止条約の締結など、緊張緩和に向けた動きが進んだ。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_11',
    subject: 'shakai',
    question: '砂漠気候(BW)における気温の日較差(1日の最高気温と最低気温の差)が大きくなる理由を説明しなさい。',
    answer:
      '雲や水蒸気が少なく乾燥しているため、昼間は太陽の熱が地表に直接届いて気温が上がりやすく、夜間は地表の熱が大気中に逃げやすいため、気温の日較差が大きくなる。',
    hint: '雲や水蒸気には、気温の変化を和らげるはたらきがあることを思い出す',
    explanation:
      '【解説】\n砂漠気候は年間降水量が非常に少なく、大気中の水蒸気(湿度)や雲が少ない。水蒸気や雲は熱を蓄えたり赤外線を吸収したりして気温変化を和らげる働きがあるため、それが少ない砂漠では、昼は日射により地表が急激に暖まり、夜は熱が上空へ逃げやすく地表が急激に冷えるため、1日の気温差(日較差)が大きくなる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_12',
    subject: 'shakai',
    figureDescription: 'あるC市の産業別就業者数の割合を示す円グラフ(第1次産業8%、第2次産業22%、第3次産業70%)。',
    question:
      '下の円グラフは、あるC市の産業別就業者数の割合を示したものである。このグラフから読み取れるC市の産業構造の特徴を説明しなさい。（第1次産業8%、第2次産業22%、第3次産業70%）',
    answer: '第3次産業(商業・サービス業など)の就業者の割合が70%と最も高く、都市型のサービス経済を中心とした産業構造であるといえる。',
    hint: '3つの産業のうち、どれが最も高い割合を占めているか確認する',
    explanation:
      '【解説】\n円グラフから、C市は第3次産業の就業者割合が70%と全体の大部分を占めていることが読み取れる。第1次産業(8%)・第2次産業(22%)の割合は低く、商業・サービス業・金融業などを中心とした都市型の産業構造であることがわかる。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_13',
    subject: 'shakai',
    question: '鎌倉幕府が国ごとに置いた「守護」と、荘園・公領ごとに置いた「地頭」の、それぞれの主な役割の違いを説明しなさい。',
    answer:
      '守護は国ごとに置かれ、軍事・警察(御家人の統率、治安維持)を主な役割とした。地頭は荘園・公領ごとに置かれ、その土地の年貢の徴収や管理を主な役割とした。',
    hint: '「国ごと」に置かれた役職と、「荘園・公領ごと」に置かれた役職の担当範囲の違いに注目する',
    explanation:
      '【解説】\n鎌倉幕府は1185年ごろ、国ごとに守護、荘園・公領ごとに地頭を設置する権利を朝廷から認められた。守護は主に軍事・警察面(御家人の指揮・治安維持)を担当し、地頭は現地の土地管理や年貢の徴収を担当するというように役割が分かれていた。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_14',
    subject: 'shakai',
    question:
      '「人は生まれながらに生命・自由・財産に対する権利(自然権)を持ち、政府がこれを侵害した場合、人民には政府に抵抗する権利がある」と説いたイギリスの思想家の名前を答えなさい。',
    answer: 'ロック(ジョン・ロック)',
    hint: '著書『統治二論(市民政府二論)』で知られる思想家',
    explanation:
      '【解説】\nイギリスの思想家ロックは著書『統治二論(市民政府二論)』の中で、人は生まれながらに自然権(生命・自由・財産の権利)を持ち、政府がその自然権を侵害した場合には人民に抵抗権(革命権)があると説いた。この考え方はアメリカ独立宣言などに大きな影響を与えた。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_15',
    subject: 'shakai',
    question:
      'オンライン申請のみで手続きを完結させる制度は「効率」の面では優れているが、「公正」の観点からはどのような問題が生じ得るか説明しなさい。',
    answer:
      'インターネットやデジタル機器を使い慣れていない高齢者や、通信環境が整っていない人が手続きから取り残され、不利益を受けるおそれがある(デジタル・デバイド)という問題が生じ得る。',
    hint: 'デジタル機器を使いこなせない人や、通信環境が整っていない人がどうなるか考える',
    explanation:
      '【解説】\nオンライン申請への一本化は、多くの人にとって手続きが速く済むという点で効率的である一方、情報通信機器の利用が難しい高齢者や、通信環境が整っていない地域・世帯の人々が手続きから排除されてしまう可能性がある。このような情報格差(デジタル・デバイド)によって不利益を受ける人が生じる点で、公正さの観点から問題があるといえる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_shakai_16',
    subject: 'shakai',
    question:
      '次のできごとを、起こった順(古い順)に並べ替えなさい。①東京オリンピック開催 ②サンフランシスコ平和条約締結 ③日中共同声明(日中国交正常化) ④石油危機(オイルショック)',
    answer: '②→①→③→④(サンフランシスコ平和条約1951年→東京オリンピック1964年→日中共同声明1972年→石油危機1973年)',
    hint: 'それぞれの出来事のおおよその年代を思い出す',
    explanation:
      '【解説】\nサンフランシスコ平和条約(1951年)で日本は独立を回復し、その後の高度経済成長期に東京オリンピック(1964年)が開催された。1972年の日中共同声明で日本と中国の国交が正常化し、翌1973年に第4次中東戦争をきっかけとする石油危機が起こり高度経済成長は終わりを迎えた。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },

  // ============================================================
  // 英語 (eigo) 16問
  // ============================================================
  {
    id: 'keio_eigo_01',
    subject: 'eigo',
    passage:
      "In the middle of a busy city, few people expect to find a beehive. However, on the roof of a downtown office building, several thousand bees now produce honey every summer. The company started this project because the number of bees in cities has been decreasing, and bees are essential for pollinating flowers and crops. Workers who once had little interest in nature now check the hives during their lunch breaks. Some employees say that watching the bees work together has changed the way they think about teamwork in their own jobs.",
    question: 'What is the main reason the company started keeping bees on the roof?',
    answer: 'Because the number of bees in cities has been decreasing, and bees are essential for pollinating flowers and crops.',
    hint: 'Look at the second sentence, which explains why the project was started.',
    explanation:
      '【解説】\n本文第2文「The company started this project because the number of bees in cities has been decreasing, and bees are essential for pollinating flowers and crops.」がそのまま理由になっている。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_02',
    subject: 'eigo',
    passage:
      "In the middle of a busy city, few people expect to find a beehive. However, on the roof of a downtown office building, several thousand bees now produce honey every summer. The company started this project because the number of bees in cities has been decreasing, and bees are essential for pollinating flowers and crops. Workers who once had little interest in nature now check the hives during their lunch breaks. Some employees say that watching the bees work together has changed the way they think about teamwork in their own jobs.",
    question: "According to the passage, how have some employees' feelings about teamwork changed?",
    answer: 'Watching the bees work together has changed the way they think about teamwork in their own jobs.',
    hint: 'The answer is stated directly in the last sentence of the passage.',
    explanation:
      '【解説】\n最終文で述べられている内容がそのまま答え。ミツバチが協力して働く様子を見て、自分たちの仕事におけるチームワークについての考え方が変わったと述べられている。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_03',
    subject: 'eigo',
    passage:
      "In the middle of a busy city, few people expect to find a beehive. However, on the roof of a downtown office building, several thousand bees now produce honey every summer. The company started this project because the number of bees in cities has been decreasing, and bees are essential for pollinating flowers and crops. Workers who once had little interest in nature now check the hives during their lunch breaks. Some employees say that watching the bees work together has changed the way they think about teamwork in their own jobs.",
    question: 'Choose the word that best completes the sentence based on the passage: "Bees are ___ for pollinating flowers and crops."',
    answer: 'essential',
    hint: 'Think about how important bees are described to be for pollination in the passage.',
    explanation:
      '【解説】\n本文に "bees are essential for pollinating flowers and crops" とあり、essential(不可欠な)が適切。harmful(有害な)、optional(任意の)、rare(まれな)はいずれも文脈に合わない。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
    choices: ['harmful', 'essential', 'optional', 'rare'],
  },
  {
    id: 'keio_eigo_04',
    subject: 'eigo',
    passage:
      "Riku practiced his speech every night for a month, but on the day of the contest, he forgot his lines halfway through and finished last. He felt embarrassed and did not want to talk to anyone. That evening, his coach told him, \"The students who never forget their lines are usually the ones who never tried anything difficult in the first place.\" Riku did not fully understand these words until the next year, when he entered the contest again and, this time, spoke without a single mistake.",
    question: 'Why did Riku feel embarrassed after the contest?',
    answer: 'Because he forgot his lines halfway through his speech and finished last.',
    hint: 'Look at the first sentence of the passage.',
    explanation:
      '【解説】\n第1文「Riku practiced his speech every night for a month, but on the day of the contest, he forgot his lines halfway through and finished last.」から、スピーチの途中でせりふを忘れ最下位になったことが原因だとわかる。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_05',
    subject: 'eigo',
    passage:
      "Riku practiced his speech every night for a month, but on the day of the contest, he forgot his lines halfway through and finished last. He felt embarrassed and did not want to talk to anyone. That evening, his coach told him, \"The students who never forget their lines are usually the ones who never tried anything difficult in the first place.\" Riku did not fully understand these words until the next year, when he entered the contest again and, this time, spoke without a single mistake.",
    question:
      'What did the coach mean by saying, "The students who never forget their lines are usually the ones who never tried anything difficult in the first place"?',
    answer:
      'The coach meant that making mistakes is often a sign that a person has challenged themselves with something difficult, so failing is not necessarily something to be ashamed of.',
    hint: 'Think about what kind of students never make mistakes, and why that might be.',
    explanation:
      '【解説】\nコーチの言葉は、「間違えない人」はそもそも難しいことに挑戦していない人が多い、という逆説的な意味を持つ。つまり失敗は困難に挑戦した証であり、恥じる必要はないというメッセージが込められている。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_06',
    subject: 'eigo',
    passage:
      "Riku practiced his speech every night for a month, but on the day of the contest, he forgot his lines halfway through and finished last. He felt embarrassed and did not want to talk to anyone. That evening, his coach told him, \"The students who never forget their lines are usually the ones who never tried anything difficult in the first place.\" Riku did not fully understand these words until the next year, when he entered the contest again and, this time, spoke without a single mistake.",
    question: 'What happened when Riku entered the contest again the following year?',
    answer: 'He spoke without a single mistake.',
    hint: 'This is stated in the last sentence of the passage.',
    explanation: '【解説】\n最終文「when he entered the contest again and, this time, spoke without a single mistake」がそのまま答え。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_07',
    subject: 'eigo',
    passage:
      'A furoshiki is a traditional Japanese cloth that can be folded and tied to wrap almost anything, from lunch boxes to bottles and gifts. Long before plastic bags became common, people used furoshiki again and again for many years. Today, as more people try to reduce plastic waste, some designers are creating new furoshiki patterns to attract younger customers. Unlike wrapping paper, which is usually thrown away after one use, a furoshiki can be reused hundreds of times, folded differently for almost any shape.',
    question: 'According to the passage, what is one advantage of furoshiki compared to wrapping paper?',
    answer: 'A furoshiki can be reused hundreds of times, while wrapping paper is usually thrown away after one use.',
    hint: 'Look at the last sentence, which compares furoshiki with wrapping paper.',
    explanation:
      '【解説】\n最終文に "Unlike wrapping paper, which is usually thrown away after one use, a furoshiki can be reused hundreds of times" とあり、ここがそのまま答えになる。',
    difficulty: 'standard',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_08',
    subject: 'eigo',
    passage:
      'A furoshiki is a traditional Japanese cloth that can be folded and tied to wrap almost anything, from lunch boxes to bottles and gifts. Long before plastic bags became common, people used furoshiki again and again for many years. Today, as more people try to reduce plastic waste, some designers are creating new furoshiki patterns to attract younger customers. Unlike wrapping paper, which is usually thrown away after one use, a furoshiki can be reused hundreds of times, folded differently for almost any shape.',
    question: 'Why are some designers creating new furoshiki patterns?',
    answer: 'To attract younger customers, as more people try to reduce plastic waste.',
    hint: 'Look at the third sentence of the passage.',
    explanation:
      '【解説】\n本文「as more people try to reduce plastic waste, some designers are creating new furoshiki patterns to attract younger customers」から、プラスチックごみを減らそうとする流れの中で若い客を引きつけるためだとわかる。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_09',
    subject: 'eigo',
    question: 'Choose the correct word to complete the sentence: "By the time we arrived at the station, the train ___ already."',
    answer: 'had left',
    hint: 'The train\'s leaving happened before another past event (our arrival), so a tense showing "past before past" is needed.',
    explanation:
      '【解説】\n"by the time + 過去形" に続く節では、それより前に完了していた出来事を表すため過去完了(had + 過去分詞)を使う。列車が出発したのは、私たちが到着した(過去の一時点)よりも前のことなので had left が正しい。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
    choices: ['leaves', 'has left', 'had left', 'will leave'],
  },
  {
    id: 'keio_eigo_10',
    subject: 'eigo',
    question: 'Rewrite in reported (indirect) speech: Ken said, "I have finished my homework."',
    answer: 'Ken said (that) he had finished his homework.',
    hint: 'In reported speech, tenses usually shift back by one step (tense shift / sequence of tenses).',
    explanation:
      '【解説】\n直接話法を間接話法に書き換える際、時制を1つ前にずらす(時制の一致)。現在完了形 "have finished" は過去完了形 "had finished" になり、"I" は主語に合わせて "he" に変える。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_11',
    subject: 'eigo',
    question: 'Choose the correct word to complete the sentence: "This is the very book ___ I have been looking for."',
    answer: 'which',
    hint: 'The relative pronoun refers to "the very book" (a thing) and is the object of the preposition "for."',
    explanation:
      '【解説】\n先行詞 "the very book" は「もの」であり、関係詞節内で "for" の目的語として働いているので、目的格の関係代名詞 which(またはthat)が適切。"very" は「まさにその」という強調の意味の形容詞。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
    choices: ['who', 'which', 'whose', 'what'],
  },
  {
    id: 'keio_eigo_12',
    subject: 'eigo',
    question: 'Combine using a participial construction, starting with "Being...": "Because she was tired, she went to bed early."',
    answer: 'Being tired, she went to bed early.',
    hint: 'Since the subjects of both clauses are the same, the conjunction and subject can be dropped and the verb changed to its -ing form.',
    explanation:
      '【解説】\n理由を表す従属節(Because she was tired)を、分詞構文(Being tired)に書き換える問題。従属節の主語(she)と主節の主語が一致しているため、接続詞と主語を省略し、be動詞を現在分詞Beingにする。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_13',
    subject: 'eigo',
    question:
      'Choose the correct preposition: "The number of students who study abroad has been increasing ___ the last decade."',
    answer: 'over',
    hint: 'Think about which preposition describes a change happening throughout an entire period of time.',
    explanation:
      '【解説】\n"the last decade"(この10年間)のような期間全体にわたる変化・推移を表す場合は over を使う。"since" は起点、"for" は単なる期間の長さ、"until" は継続の終点を表す前置詞であり、ここでは文脈に合わない。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
    choices: ['since', 'for', 'over', 'until'],
  },
  {
    id: 'keio_eigo_14',
    subject: 'eigo',
    question: 'Find and correct the grammatical error in this sentence: "Each of the students have their own opinion."',
    answer: 'Each of the students has his or her own opinion. (Or: ...has their own opinion.)',
    hint: '"Each of ~" is treated as a singular subject in formal grammar.',
    explanation:
      '【解説】\n"each of ~" は文法的に単数扱いをするため、動詞は has が正しい(haveではない)。また、意味の整合性から所有格も単数扱いに合わせるのが望ましいが、口語では所有格に they/their を使うことも一般的に許容される。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
  {
    id: 'keio_eigo_15',
    subject: 'eigo',
    question: 'Choose the best way to complete the sentence: "The more you practice, ___ you will become."',
    answer: 'the better speaker',
    hint: 'This is the "The + comparative ~, the + comparative ..." construction. The second half must keep the same pattern.',
    explanation:
      '【解説】\n"The + 比較級 ~, the + 比較級 …"(〜すればするほど、ますます…)の構文。後半も "the" + 比較級 の形を保つ必要があるため、"the better speaker" が正しい。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
    choices: ['the good speaker', 'the better speaker', 'better a speaker', 'a better speaker'],
  },
  {
    id: 'keio_eigo_16',
    subject: 'eigo',
    question:
      'Write your opinion in English (about 40-50 words): "Some people think schools should require students to wear uniforms. Do you agree or disagree? Give one reason."',
    answer:
      '(自由英作文・模範解答例) "I agree that schools should require uniforms because they reduce the pressure students feel to compete over fashion or brand-name clothes. When everyone wears the same uniform, students can focus more on their studies and treat each other more equally, regardless of their family\'s income."',
    hint: 'State your opinion clearly first (I agree.../I disagree...), then give one clear reason using "because."',
    explanation:
      '【解説】\nこれは唯一の正解がない自由英作文問題(論理性と英語表現力を問う出題)。採点は①意見が明確に示されているか、②理由が論理的に述べられているか、③文法・語彙の正確さと語数、の3点で評価するとよい。賛成・反対どちらの立場でも、理由が説得力を持って書かれていれば正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-keio',
    examType: 'koko',
  },
];

export const figuresKokoKeioFill: Record<string, Figure> = {
  // R1・R2を並列につないだ回路。電流の値は解答なので示さない。
  keio_rika_03: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: 'R₁(6Ω)' }],
      [{ type: 'resistor', label: 'R₂(3Ω)' }],
    ],
    battery: { label: '12V' },
  },
  // 標高50mの地点Aと標高40mの地点Bの柱状図。両地点に共通する凝灰岩層(鍵層)の深さが異なる。
  keio_rika_07: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点(標高50m)',
        layers: [
          { name: '砂質層', thickness: 3, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 2, pattern: 'ash' },
          { name: '泥岩層', thickness: 5, pattern: 'mud' },
        ],
      },
      {
        label: 'B地点(標高40m)',
        layers: [
          { name: '砂岩層', thickness: 8, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 2, pattern: 'ash' },
          { name: '泥岩層', thickness: 5, pattern: 'mud' },
        ],
      },
    ],
  },
  // 物質Xの溶解度曲線。60℃で60g、20℃で20gの点を通る。
  keio_rika_13: {
    kind: 'lineChart',
    xLabel: '温度(℃)',
    yLabel: '溶解度(g/水100g)',
    xRange: [0, 80],
    yRange: [0, 100],
    series: [
      {
        label: '物質Xの溶解度曲線',
        markers: true,
        points: [
          { x: 0, y: 10 },
          { x: 20, y: 20 },
          { x: 40, y: 38 },
          { x: 60, y: 60 },
          { x: 80, y: 90 },
        ],
      },
    ],
  },
  // あるサバナ気候の都市の月別降水量。11〜3月ごろが雨季、6〜8月ごろが乾季。
  keio_shakai_04: {
    kind: 'barChart',
    xLabel: '月',
    yLabel: '降水量(mm)',
    bars: [
      { label: '1月', value: 180 },
      { label: '2月', value: 160 },
      { label: '3月', value: 140 },
      { label: '4月', value: 60 },
      { label: '5月', value: 10 },
      { label: '6月', value: 0 },
      { label: '7月', value: 0 },
      { label: '8月', value: 0 },
      { label: '9月', value: 5 },
      { label: '10月', value: 40 },
      { label: '11月', value: 100 },
      { label: '12月', value: 160 },
    ],
  },
  // C市の産業別就業者数の割合。第1次8%・第2次22%・第3次70%。
  keio_shakai_12: {
    kind: 'pieChart',
    slices: [
      { label: '第1次産業', value: 8 },
      { label: '第2次産業', value: 22 },
      { label: '第3次産業', value: 70 },
    ],
  },
};
