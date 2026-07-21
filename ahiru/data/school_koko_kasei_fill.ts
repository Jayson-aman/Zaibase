import type { Question } from './questions-meta';
import type { Figure } from './figures';

// 開成高校（koko-kasei）専用問題セット・追加分。
// 監査の結果、既存の koko_sansu_ex_14.ts が算数(sansu)50問のみで、
// 国語・理科・社会・英語が0問だったため、このファイルで4教科（各16問・計64問）を新規追加する。
// 算数は追加しない（既存50問で充足済み）。
// 開成高校は全国最難関(偏差値78+)のため basic は含めず、standard:advanced ≒ 5:11。
export const schoolKokoKaseiFill: Question[] = [
  // ============================================================
  // 国語 (kokugo) 16問
  // ============================================================
  {
    id: 'kasei_kokugo_01',
    subject: 'kokugo',
    passage:
      '文化祭の準備で、クラスの意見が真っ二つに割れていた。演劇にするか、展示にするか。学級委員の拓也は、多数決で決めようとしたが、担任の先生は「多数決の前に、少数派の意見をもう一度聞いてみたらどうだ」と言った。拓也は最初、その提案の意味がわからなかった。しかし、少数派の生徒たちの話を丁寧に聞くうちに、演劇案には表現の場を作りたいという切実な思いがあることに気づいた。多数決とは、単に数を数える作業ではなく、少数の声にどれだけ耳を傾けたかを問う手続きでもあるのだと、拓也は初めて理解した。',
    question: '傍線部「初めて理解した」とあるが、拓也が理解した内容を50字以内で説明しなさい。',
    answer:
      '多数決は単に票数を数える作業ではなく、少数派の意見にどれだけ丁寧に耳を傾けたかを問う手続きでもあるということ。',
    hint: '「単に〜ではなく」という対比の形に注目し、否定されている内容と肯定されている内容を分けて考える',
    explanation:
      '【解説】\n本文最後の一文「多数決とは、単に数を数える作業ではなく、少数の声にどれだけ耳を傾けたかを問う手続きでもある」がそのまま拓也の理解した内容である。「単に〜ではなく」という対比表現を軸に、否定される考え(数を数えるだけ)と、新たに得た考え(少数派への傾聴)の両方を過不足なく盛り込む。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_02',
    subject: 'kokugo',
    passage:
      '文化祭の準備で、クラスの意見が真っ二つに割れていた。演劇にするか、展示にするか。学級委員の拓也は、多数決で決めようとしたが、担任の先生は「多数決の前に、少数派の意見をもう一度聞いてみたらどうだ」と言った。拓也は最初、その提案の意味がわからなかった。しかし、少数派の生徒たちの話を丁寧に聞くうちに、演劇案には表現の場を作りたいという切実な思いがあることに気づいた。多数決とは、単に数を数える作業ではなく、少数の声にどれだけ耳を傾けたかを問う手続きでもあるのだと、拓也は初めて理解した。',
    question: '傍線部「その提案の意味がわからなかった」について、拓也がこの時点で分かっていなかったことを40字程度で説明しなさい。',
    answer: '多数決で決める前に、なぜわざわざ少数派の意見を聞き直す必要があるのかという理由。',
    hint: '「その提案」とは先生のどの発言を指すか、まず確認する',
    explanation:
      '【解説】\n「その提案」は直前の先生の発言「多数決の前に、少数派の意見をもう一度聞いてみたらどうだ」を指す。この時点の拓也は、結論(多数決)が変わらないのになぜ手間をかけて少数派の話を聞く必要があるのか、その理由が分かっていなかったと考えられる。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_03',
    subject: 'kokugo',
    passage:
      '文化祭の準備で、クラスの意見が真っ二つに割れていた。演劇にするか、展示にするか。学級委員の拓也は、多数決で決めようとしたが、担任の先生は「多数決の前に、少数派の意見をもう一度聞いてみたらどうだ」と言った。拓也は最初、その提案の意味がわからなかった。しかし、少数派の生徒たちの話を丁寧に聞くうちに、演劇案には表現の場を作りたいという切実な思いがあることに気づいた。多数決とは、単に数を数える作業ではなく、少数の声にどれだけ耳を傾けたかを問う手続きでもあるのだと、拓也は初めて理解した。',
    question: '本文における「先生」の発言が果たした役割として最も適切なものを選びなさい。',
    answer: '拓也に少数派の思いに気づかせるきっかけを与える。',
    hint: '先生は結論そのものを指示しているわけではなく、拓也の「行動」を促している点に注目する',
    explanation:
      '【解説】\n先生は演劇案・展示案のどちらかを指示したり、多数決の結果を覆すよう命じたりしているわけではない。「少数派の意見をもう一度聞いてみたら」という提案を通じて、拓也自身が少数派の切実な思いに気づく機会を作り出している。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
    choices: [
      '多数決の結果を覆すよう指示する。',
      '拓也に少数派の思いに気づかせるきっかけを与える。',
      '演劇案を採用するよう誘導する。',
      '学級委員としての拓也の権限を制限する。',
    ],
  },
  {
    id: 'kasei_kokugo_04',
    subject: 'kokugo',
    passage:
      '仮説を立て、実験によって検証し、結果を踏まえて仮説を修正する。この一連の手続きを科学的方法と呼ぶ。重要なのは、実験によって仮説が「正しい」と証明されることではなく、反証される可能性に開かれている点である。どれほど多くの実験で仮説が支持されても、たった一つの反例によって仮説は覆りうる。この「反証可能性」を持たない主張は、科学の対象にはなりえないと、ある哲学者は述べた。',
    question: '傍線部「反証可能性」とはどのようなことか、40字以内で説明しなさい。',
    answer: 'ある仮説が、実験や観察によって誤りであると示される可能性を持っていること。',
    hint: '「反証」という語を「反対の証拠によって誤りだと示すこと」と分解して考える',
    explanation:
      '【解説】\n「反証可能性」は、ある仮説が実験や観察によって「誤りである」と示されうる性質のことを指す。本文では、これを持たない主張は科学の対象にならないと述べられている。「正しいと証明される」ことではなく「誤りだと示されうる」ことがポイントである点に注意する。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_05',
    subject: 'kokugo',
    passage:
      '仮説を立て、実験によって検証し、結果を踏まえて仮説を修正する。この一連の手続きを科学的方法と呼ぶ。重要なのは、実験によって仮説が「正しい」と証明されることではなく、反証される可能性に開かれている点である。どれほど多くの実験で仮説が支持されても、たった一つの反例によって仮説は覆りうる。この「反証可能性」を持たない主張は、科学の対象にはなりえないと、ある哲学者は述べた。',
    question: '本文で述べられている、科学的方法における実験の役割について、60字程度で説明しなさい。',
    answer:
      '実験は仮説が正しいと証明するためではなく、仮説が誤っている可能性(反証の可能性)を検証するために行われるという役割。',
    hint: '「重要なのは〜ではなく、〜点である」という対比の構造をそのまま利用してまとめる',
    explanation:
      '【解説】\n本文2文目「重要なのは、実験によって仮説が『正しい』と証明されることではなく、反証される可能性に開かれている点である」が実験の役割についての筆者の主張である。証明のためではなく反証可能性の検証のために実験が行われる、という対比を落とさずまとめる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_06',
    subject: 'kokugo',
    passage:
      '仮説を立て、実験によって検証し、結果を踏まえて仮説を修正する。この一連の手続きを科学的方法と呼ぶ。重要なのは、実験によって仮説が「正しい」と証明されることではなく、反証される可能性に開かれている点である。どれほど多くの実験で仮説が支持されても、たった一つの反例によって仮説は覆りうる。この「反証可能性」を持たない主張は、科学の対象にはなりえないと、ある哲学者は述べた。',
    question: '本文の内容と合うものを次から選びなさい。',
    answer: '反証可能性を持たない主張は科学の対象にはならない。',
    hint: '本文最後の一文にそのまま書かれている内容を選ぶ',
    explanation:
      '【解説】\n本文最後の一文「この『反証可能性』を持たない主張は、科学の対象にはなりえない」がそのまま選択肢の内容と一致する。他の選択肢は、実験を何度重ねても仮説が「確定」するわけではないという本文の主張と矛盾する。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
    choices: [
      '実験で何度も支持された仮説は、絶対に誤りではないと確定する。',
      '反証可能性を持たない主張は科学の対象にはならない。',
      '仮説は一度立てたら二度と修正してはならない。',
      '科学的方法とは、実験を行わずに理論だけで進めるものである。',
    ],
  },
  {
    id: 'kasei_kokugo_07',
    subject: 'kokugo',
    question:
      '次のA・Bの文における「そうだ」の文法的意味の違いを、伝聞と様態という語を用いて説明しなさい。A「明日は晴れるそうだ。」B「明日は晴れそうだ。」',
    answer:
      'Aは終止形に「そうだ」が付いており、人から聞いた情報をそのまま伝える伝聞の意味。Bは連用形(語幹)に「そうだ」が付いており、自分の目で見た様子から判断する様態の意味。',
    hint: '「そうだ」の直前が終止形か、それとも連用形(語幹)かに注目する',
    explanation:
      '【解説】\n助動詞「そうだ」には接続の違いによって2つの用法がある。終止形接続の「そうだ」(A)は、他から得た情報を伝える伝聞の意味。連用形・語幹接続の「そうだ」(B)は、自分が見た様子から推し量る様態の意味。同じ形の助動詞でも接続の違いによって意味が変わる点が入試で問われやすい。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_08',
    subject: 'kokugo',
    question:
      '次の文には敬語の誤り(二重敬語)がある。正しい表現に直しなさい。「校長先生がおっしゃられました。」',
    answer: '校長先生がおっしゃいました。',
    hint: '「おっしゃる」自体がすでに「言う」の尊敬語であることに注目する',
    explanation:
      '【解説】\n「おっしゃる」は「言う」の尊敬語であり、それ自体で敬意を表せる。そこにさらに尊敬の助動詞「られる」を付けると、同じ働きの敬語を二重に使う「二重敬語」となり、誤用とされる。「おっしゃいました」が正しい形。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_09',
    subject: 'kokugo',
    question: '四字熟語「一石二鳥」の意味を説明し、同じ意味を持つ四字熟語を1つ挙げなさい。',
    answer: '一つの行為によって同時に二つの利益を得ること。同じ意味の四字熟語として「一挙両得」がある。',
    hint: '「一つの石で二羽の鳥を落とす」という直訳のイメージから意味を考える',
    explanation:
      '【解説】\n「一石二鳥」は、一つの石を投げて二羽の鳥を同時に落とす、という比喩から、一つの行動で二つの利益を同時に得ることを表す四字熟語。同じ意味を表す四字熟語として「一挙両得」がよく知られている。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_10',
    subject: 'kokugo',
    question: '「具体」の対義語を答えなさい。',
    answer: '抽象',
    hint: '個別の実例に即した考え方の反対は、実例から離れて一般化した考え方',
    explanation:
      '【解説】\n「具体」は、実際の形や実例をともなってはっきり示されることを指す。これに対して「抽象」は、個々の実例から共通する要素だけを取り出し、一般化してとらえることを指し、両者は対義語の関係にある。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_11',
    subject: 'kokugo',
    question:
      '次の文で使われている比喩表現の種類を答えなさい。「風が僕の頬を優しくなでた。」',
    answer: '擬人法(活喩)。人でないもの(風)を、人間の動作(なでる)を用いて表現している。',
    hint: '「〜のように」を使わず、人でないものを人間のようにたとえる技法を思い出す',
    explanation:
      '【解説】\n「なでる」は本来、人(や動物)が行う動作を表す言葉である。それを「風」という人でないものの動きに用いることで、風をまるで人間のように表現している。これは比喩の中でも、人でないものを人間に見立てる擬人法(活喩)にあたる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_12',
    subject: 'kokugo',
    question: '古文単語「いとほし」の意味を現代語で説明しなさい。',
    answer: 'かわいそうだ、気の毒だ、という意味。',
    hint: '現代語の「いとおしい(かわいい)」とは意味が異なる古語である点に注意する',
    explanation:
      '【解説】\n古語「いとほし」は、現代語の「いとおしい(かわいい・愛おしい)」とは意味が異なり、「かわいそうだ・気の毒だ」という同情の気持ちを表す。古文単語には、現代語と形が似ていても意味が違う「古今異義語」が多く、混同しないよう注意が必要である。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_13',
    subject: 'kokugo',
    passage:
      '言葉は文化を映す鏡である。ある言語には存在するが、別の言語には対応する単語がない概念は数多い。例えば日本語の「もったいない」を一語で表せる英単語は存在しない。翻訳とは、単に単語を置き換える作業ではなく、ある文化の中でしか育たなかった感覚を、別の文化の言葉で捉え直そうとする試みなのである。',
    question:
      '傍線部「翻訳とは、単に単語を置き換える作業ではなく」とあるが、筆者の考える翻訳とはどのような営みか、50字以内で説明しなさい。',
    answer: 'ある文化の中でしか育たなかった感覚を、別の文化の言葉で捉え直そうとする試み。',
    hint: '本文最後の一文の後半部分に、筆者の考える翻訳の定義がそのまま書かれている',
    explanation:
      '【解説】\n本文最後の一文の後半「ある文化の中でしか育たなかった感覚を、別の文化の言葉で捉え直そうとする試みなのである」が、筆者の考える翻訳の定義である。「単に単語を置き換える作業ではない」という否定との対比を踏まえてまとめる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_14',
    subject: 'kokugo',
    passage:
      '言葉は文化を映す鏡である。ある言語には存在するが、別の言語には対応する単語がない概念は数多い。例えば日本語の「もったいない」を一語で表せる英単語は存在しない。翻訳とは、単に単語を置き換える作業ではなく、ある文化の中でしか育たなかった感覚を、別の文化の言葉で捉え直そうとする試みなのである。',
    question: '本文で例に挙げられている「もったいない」という語について、筆者がこの例を挙げた意図を40字程度で説明しなさい。',
    answer: 'ある言語に固有の概念は、別の言語の一語では置き換えられない場合があることを具体的に示すため。',
    hint: '「もったいない」の前の一文が、この例を挙げた理由の一般論にあたる',
    explanation:
      '【解説】\n「もったいない」の例は、直前の一文「ある言語には存在するが、別の言語には対応する単語がない概念は数多い」という一般論を、読者に具体的にイメージさせるために挙げられている。抽象的な主張を、身近で分かりやすい具体例によって裏づける典型的な文章構成である。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_15',
    subject: 'kokugo',
    question:
      '熟語「着席」の構成(主語+述語／修飾+被修飾／述語+目的語 など)を説明しなさい。',
    answer: '下の漢字が上の漢字の目的語になっている構成(「席に着く」で、述語+目的語の関係)。',
    hint: '「着」と「席」を訓読みし、「〜に〜する」という文の形に直してみる',
    explanation:
      '【解説】\n「着席」は訓読みすると「席に着く」となり、「着(動作・述語)」が「席(目的語)」を受ける構成になっている。このように、上の漢字が動作を表し、下の漢字がその動作の対象(目的語)を表す構成の熟語には、他に「読書(書を読む)」「登山(山に登る)」などがある。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_kokugo_16',
    subject: 'kokugo',
    question:
      '「効率と丁寧さは両立できるか」というテーマについて、具体例を挙げながら、あなたの意見を100字程度で述べなさい。',
    answer:
      '(記述式・自由回答。模範解答例)たとえば手紙を書くとき、定型文をそのまま使えば効率的だが、相手への配慮が伝わりにくい。しかし短くても一言自分の言葉を添えれば、時間をかけすぎずに丁寧さを保てる。効率と丁寧さは、工夫次第である程度両立できると考える。',
    hint: '「効率を優先すると丁寧さが失われる場面」と「工夫によって両立できた場面」の両方を考えてみる',
    explanation:
      '【解説】\nこれは唯一の正解がない自由記述問題(開成らしい思考力・記述力を問う出題形式)。採点にあたっては、①「効率」と「丁寧さ」という2つの観点を正しく理解しているか、②具体例の説得力、③論理的なつながり、の3点を評価するとよい。模範解答はあくまで一例であり、両立できる・できないのどちらの立場でも、論理が一貫していれば正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },

  // ============================================================
  // 理科 (rika) 16問
  // ============================================================
  {
    id: 'kasei_rika_01',
    subject: 'rika',
    question:
      '体積120cm³、質量84gの物体を水に浮かべたところ、物体の一部が水中に沈んで静止した。水中に沈んでいる部分の体積を求めなさい。（水の密度は1g/cm³とする）',
    answer: '84cm³',
    hint: '物体が浮いて静止しているとき、物体にはたらく重力と浮力はつり合っている',
    explanation:
      '【解説】\n物体が浮いて静止しているとき、重力と浮力がつり合っている(アルキメデスの原理)。浮力の大きさは、物体が押しのけた水の重さに等しい。\n物体の質量84gに等しい重さの水を押しのけていることになるので、水の密度1g/cm³より、沈んでいる部分の体積は84÷1=84cm³。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_02',
    subject: 'rika',
    figureDescription: '抵抗R₁=6Ω、R₂=3Ωを並列につないだ回路。電源電圧は12V。',
    question:
      '抵抗R₁=6Ω、R₂=3Ωを並列につないだ回路に、電圧12Vの電源をつないだ。この回路全体の合成抵抗と、電源を流れる電流の大きさを求めなさい。',
    answer: '合成抵抗2Ω、電源を流れる電流6A',
    hint: '並列回路の合成抵抗Rは、1/R=1/R₁+1/R₂ の式で求める',
    explanation:
      '【解説】\n並列回路の合成抵抗Rは、1/R=1/R₁+1/R₂=1/6+1/3=1/6+2/6=3/6=1/2 より R=2Ω。\nオームの法則 I=V/R より、電源を流れる電流=12/2=6A。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_03',
    subject: 'rika',
    question:
      'R₁=6Ω、R₂=3Ωを並列につなぎ、電圧12Vの電源をつないだ回路(合成抵抗2Ω)がある。このとき、R₁を流れる電流の大きさを求めなさい。',
    answer: '2A',
    hint: '並列回路では、どの抵抗にも電源と同じ大きさの電圧がかかる',
    explanation:
      '【解説】\n並列回路では、各抵抗に電源と同じ電圧(12V)がかかる。オームの法則より、R₁を流れる電流=12/6=2A。\n(検算：R₂を流れる電流は12/3=4A。2A+4A=6Aとなり、電源を流れる電流(6A)と一致する)',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_04',
    subject: 'rika',
    figureDescription:
      '光の強さ(横軸)とCO₂吸収速度(縦軸、見かけの光合成速度)の関係を表す折れ線グラフ。光が弱いうちはCO₂を放出(マイナス)し、光の強さ4klxで0になり、8klx以降は一定値になる。',
    question:
      'ある植物について、光の強さとCO₂吸収速度(見かけの光合成速度)の関係を調べたところ、光の強さ0のとき呼吸によってCO₂を放出する速度は一定で2(単位省略)、光が強くなるにつれて見かけの光合成速度は増加し、光の強さ4klxで0になった後、8klx以降は3で一定になった。(1)光補償点における光の強さを答えなさい。(2)光の強さが10klxのときの真の光合成速度を求めなさい。',
    answer: '(1)4klx (2)5',
    hint: '呼吸速度は光の強さによらず一定。真の光合成速度=見かけの光合成速度+呼吸速度で求める',
    explanation:
      '【解説】\n(1)光補償点は、見かけの光合成速度(CO₂吸収速度)がちょうど0になる光の強さのことで、グラフより4klx。\n(2)呼吸によるCO₂放出速度は光の強さによらず一定(光の強さ0のときの値である2)。真の光合成速度=見かけの光合成速度+呼吸速度で求められるので、光の強さ10klxのとき、見かけの光合成速度3+呼吸速度2=5。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_05',
    subject: 'rika',
    question:
      'エンドウの2組の対立形質(種子の形の丸[A]としわ[a]、子葉の色の黄色[B]と緑色[b])について、AaBb×AaBbの交配を行い、種子が400粒できた。このとき、両方とも劣性形質(しわ・緑色)を示す種子はおよそ何粒できると考えられるか求めなさい。',
    answer: '25粒',
    hint: '独立の法則が成り立つとき、2組の対立形質の分離比は9:3:3:1になる',
    explanation:
      '【解説】\nAaBb×AaBbの交配で、AとBの遺伝が独立している(独立の法則)とき、表現型の分離比はAB:Ab:aB:ab=9:3:3:1(合計16)になる。\n両方とも劣性形質(ab、しわ・緑色)の割合は16分の1なので、400×1/16=25粒。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_06',
    subject: 'rika',
    figureDescription:
      '標高50mのA地点と標高30mのB地点の柱状図。どちらも表土・砂岩層・凝灰岩層(かぎ層)・泥岩層の順に重なっている。',
    question:
      'ボーリング調査の結果、標高50mのA地点では地表から10m掘ったところで凝灰岩層(かぎ層)の上面が現れた。標高30mのB地点では地表から5m掘ったところで同じ凝灰岩層の上面が現れた。凝灰岩層の傾き(上面の標高)がA地点からB地点にかけてどのように変化しているか、標高の値を示しながら説明しなさい。',
    answer:
      'A地点での凝灰岩層上面の標高は40m(50-10)、B地点では25m(30-5)であり、A地点からB地点に向かって標高が15m低くなっている。したがって、この地層はB地点の方向に向かって低くなるように傾いている。',
    hint: '「地点の標高」から「地表からの深さ」を引くと、その層の上面の標高が求められる',
    explanation:
      '【解説】\nある層の上面の標高は、地点の標高から地表面までの深さを引くことで求められる。\nA地点：50-10=40m、B地点：30-5=25m。\n同じかぎ層(凝灰岩層)の上面の標高が、A地点(40m)からB地点(25m)にかけて15m低くなっていることから、この地層はB地点側に向かって低くなるように傾いていると判断できる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_07',
    subject: 'rika',
    question:
      '石灰石(炭酸カルシウム)に塩酸を加えると二酸化炭素が発生する。ある質量の石灰石に対して、塩酸の体積を40cm³まで増やすと発生するCO₂の質量は体積に比例して増加し、40cm³以降は一定になった。石灰石の質量を2倍にした場合、発生するCO₂が一定になる塩酸の体積は何cm³になるか求めなさい。',
    answer: '80cm³',
    hint: '反応する物質の量(石灰石と塩酸)は、互いに比例の関係にある',
    explanation:
      '【解説】\n石灰石と塩酸は決まった比率で過不足なく反応する。石灰石の質量を2倍にすると、それをすべて反応させるのに必要な塩酸の体積も2倍になる。\nよって、CO₂の発生量が一定になる(石灰石をすべて反応させ終える)塩酸の体積は、40×2=80cm³。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_08',
    subject: 'rika',
    question:
      '濃度不明の塩酸10cm³に、ある濃度の水酸化ナトリウム水溶液を加えていったところ、ちょうど中和するのに水酸化ナトリウム水溶液15cm³が必要だった。この塩酸20cm³を、同じ濃度の水酸化ナトリウム水溶液で完全に中和するには何cm³必要か求めなさい。',
    answer: '30cm³',
    hint: '中和に必要な体積は、塩酸の体積に比例する',
    explanation:
      '【解説】\n塩酸とそれを中和するのに必要な水酸化ナトリウム水溶液の体積は比例の関係にある。\n10cm³:15cm³=20cm³:x cm³ より、10x=300、x=30cm³。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_09',
    subject: 'rika',
    question:
      '底面積20cm²、高さ15cm、密度0.8g/cm³の円柱形の物体を水に浮かべた。水面から出ている部分の高さを求めなさい。（水の密度は1g/cm³とする）',
    answer: '3cm',
    hint: 'まず物体全体の質量を求め、浮いて静止しているときの浮力とのつり合いから沈んでいる部分の体積を求める',
    explanation:
      '【解説】\n物体の体積=20×15=300cm³、質量=300×0.8=240g。\n浮いて静止しているとき、押しのけた水の質量=物体の質量=240gなので、沈んでいる部分の体積=240÷1=240cm³。\n沈んでいる高さ=240÷20=12cm。\nよって水面から出ている高さ=15-12=3cm。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_10',
    subject: 'rika',
    question:
      '凸レンズの焦点距離より内側(レンズと焦点の間)に物体を置いたとき、スクリーンに実像はできない。このときレンズを通して見える像の種類と、物体との大小関係を答えなさい。',
    answer: '正立の虚像ができ、物体よりも大きく見える。',
    hint: '物体を焦点の内側に置くと、光は集まらずに広がるように進む',
    explanation:
      '【解説】\n物体を焦点距離より内側に置くと、レンズを通った光は1点に集まらず、実像はできない。しかし、レンズを通して物体を見ると、物体と同じ側に、物体よりも大きい、向きが同じ(正立)の虚像が見える。ルーペ(虫めがね)はこの原理を利用している。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_11',
    subject: 'rika',
    question:
      'ある地点で観測した地震の初期微動継続時間が15秒であった。震源からの距離をxkm、初期微動継続時間をt秒とすると、x=ktの関係(比例定数k=6)が成り立つとき、この地点の震源からの距離を求めなさい。また、P波の速さが5km/sであるとき、この地点にP波が届くまでにかかった時間を求めなさい。',
    answer: '震源からの距離90km、P波が届くまでの時間18秒',
    hint: 'まずx=ktに数値を代入して震源からの距離を求め、その距離を使ってP波の到達時間を求める',
    explanation:
      '【解説】\nx=ktに k=6、t=15 を代入すると、震源からの距離x=6×15=90km。\nP波が届くまでの時間は、距離÷速さ で求められるので、90÷5=18秒。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_12',
    subject: 'rika',
    question:
      '肺で酸素を受け取った血液が、心臓を経由して全身に送り出されるまでに通る心臓の部屋の順序を答えなさい。',
    answer: '肺静脈→左心房→左心室→大動脈(全身へ)',
    hint: '肺から戻ってきた血液がどの血管・部屋を通って全身に送り出されるかを順にたどる',
    explanation:
      '【解説】\n肺で酸素を受け取った血液(動脈血)は、肺静脈を通って心臓の左心房に入り、左心室に送られたのち、大動脈を通って全身に送り出される。心臓の4つの部屋(右心房・右心室・左心房・左心室)のはたらきと血液の流れる順序は、循環器の基本として整理しておく必要がある。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_13',
    subject: 'rika',
    question:
      'ある生態系で、生産者の個体数(またはエネルギー量)を100としたとき、生態ピラミッドの各段階で数量がその10分の1になっていくものとする。三次消費者にあたる段階の数量を求めなさい。',
    answer: '0.1',
    hint: '生産者→一次消費者→二次消費者→三次消費者の順に、10分の1ずつを繰り返しかけていく',
    explanation:
      '【解説】\n生態ピラミッドでは、栄養段階が1つ上がるごとに、数量やエネルギー量がおよそ10分の1になるという傾向がある。\n生産者100→一次消費者10(100×1/10)→二次消費者1(10×1/10)→三次消費者0.1(1×1/10)。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_14',
    subject: 'rika',
    question:
      '月が地球の周りを1周する周期(恒星月、約27.3日)と、満月から次の満月までの周期(朔望月、約29.5日)は一致しない。この2つの周期がずれる理由を、地球の公転運動と関連づけて説明しなさい。',
    answer:
      '地球も太陽の周りを公転しているため、月が地球の周りをちょうど1周(恒星月)しても、地球から見た太陽と月の位置関係(満ち欠けの周期)を元通りにするには、地球が公転した分だけ月がさらに少し多く回る必要があるから。',
    hint: '月の公転だけでなく、地球自身も太陽の周りを動いていることを考慮する',
    explanation:
      '【解説】\n満月から次の満月までの周期(朔望月)は、地球から見た「太陽・地球・月」の位置関係が同じ状態に戻るまでの時間である。月が地球の周りをちょうど1周(恒星月)したとき、その間に地球自身も太陽の周りを少し公転しているため、月と太陽の見かけの位置関係を元に戻すには、月がさらに少し余分に公転する必要がある。そのため朔望月は恒星月よりも長くなる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_15',
    subject: 'rika',
    question:
      'ある生物の体細胞の染色体数が2n=8であるとき、減数分裂によってできる生殖細胞の染色体数を答えなさい。また、受精後にできる受精卵の染色体数を答えなさい。',
    answer: '生殖細胞の染色体数は4本、受精卵の染色体数は8本。',
    hint: '減数分裂では染色体数が半分になり、受精によってもとの数に戻る',
    explanation:
      '【解説】\n体細胞の染色体数が2n=8のとき、減数分裂によってできる生殖細胞(卵や精子)の染色体数はその半分のn=4本になる。\n受精は、精子(n=4)と卵(n=4)が合体することなので、受精卵の染色体数は4+4=8本となり、もとの体細胞と同じ2n=8に戻る。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_rika_16',
    subject: 'rika',
    question:
      '一定の割合で加速する台車の運動を、一定時間間隔でテープに記録した。0.1秒ごとの移動距離が2cm、4cm、6cm、8cm、10cmと増えていくことがわかった。この結果から、台車の運動の速さがどのように変化しているといえるか説明しなさい。また、0.5秒間で移動した距離の合計を求めなさい。',
    answer:
      '速さは時間に比例して増加している(等加速度運動)。0.5秒間の移動距離の合計は30cm。',
    hint: '0.1秒ごとの移動距離が一定の割合で増えていることに注目する。合計は5つの区間の距離をすべて足す',
    explanation:
      '【解説】\n0.1秒ごとの移動距離が2cm、4cm、6cm、8cm、10cmと、一定の割合(0.1秒ごとに2cmずつ)で増加していることから、台車の速さは時間に比例して大きくなる等加速度運動をしていると分かる。\n0.5秒間の移動距離の合計は、2+4+6+8+10=30cm。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },

  // ============================================================
  // 社会 (shakai) 16問
  // ============================================================
  {
    id: 'kasei_shakai_01',
    subject: 'shakai',
    question:
      '大日本帝国憲法(明治憲法)と日本国憲法を比較したとき、主権の所在についてどのような違いがあるか説明しなさい。',
    answer:
      '明治憲法では主権は天皇にあり(天皇主権)、天皇が統治権を総攬した。日本国憲法では主権は国民にあり(国民主権)、天皇は日本国および日本国民統合の象徴と位置づけられている。',
    hint: '「誰が国の政治のあり方を最終的に決める力を持つか」という観点で2つの憲法を比べる',
    explanation:
      '【解説】\n明治憲法では、天皇が神聖不可侵の存在として統治権を一手に握る天皇主権の考え方が採られていた。これに対し日本国憲法では、国の政治のあり方を最終的に決める権限(主権)は国民にあるとする国民主権の原則が採られ、天皇は政治的権限を持たない日本国・日本国民統合の象徴と定められている。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_02',
    subject: 'shakai',
    question:
      '小選挙区比例代表並立制の仕組みを説明し、この制度が採用されている目的を1つ答えなさい。',
    answer:
      '小選挙区制(1つの選挙区から1人を選出)と比例代表制(政党の得票数に応じて議席を配分)を組み合わせた制度。小選挙区制の「大政党に有利で民意を反映しにくい」という短所と、比例代表制の「小政党の意見も反映されやすいが政権が不安定になりやすい」という短所を、互いに補い合うことを目的としている。',
    hint: '2つの制度をそれぞれ単独で使ったときの短所を思い出し、組み合わせることでどう補えるか考える',
    explanation:
      '【解説】\n小選挙区比例代表並立制は、1人だけを選ぶ小選挙区制と、政党の得票率に応じて議席を配分する比例代表制を組み合わせた選挙制度。小選挙区制は大政党に有利で死票(当選に結びつかない票)が多くなりやすい一方、比例代表制は少数意見も反映されやすいが政権が不安定になりやすいという、互いに逆の性質を持つ短所を補い合うことを目的として導入されている。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_03',
    subject: 'shakai',
    question:
      '政府が生活必需品の価格に上限を設ける「価格統制(上限価格規制)」を行った場合、市場でどのような問題が起こりやすいか、需要と供給の関係から説明しなさい。',
    answer:
      '上限価格が本来の均衡価格より低く設定されると、その価格では需要量が供給量を上回るため、品不足(超過需要)が生じやすくなる。',
    hint: '価格が本来の均衡価格より低いとき、需要量と供給量のどちらが多くなるかを考える',
    explanation:
      '【解説】\n市場では通常、価格が上がると需要量は減り供給量は増えることで、需要量と供給量が一致する均衡価格に落ち着く。しかし政府が均衡価格より低い上限価格を強制的に設定すると、その価格では買いたい量(需要量)の方が売りたい量(供給量)よりも多くなり、品不足(超過需要)が発生しやすくなる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_04',
    subject: 'shakai',
    question:
      'ステップ気候の特徴を、降水量と植生の観点から説明し、代表的な農牧業の形態を1つ答えなさい。',
    answer:
      '年間降水量が少なく樹木は育たないが、丈の短い草原(ステップ)が広がる気候。代表的な農牧業として、家畜とともに水や牧草を求めて移動しながら生活する遊牧が行われる。',
    hint: '砂漠気候よりはやや降水量が多く、草原は育つが樹木は育たない気候であることを思い出す',
    explanation:
      '【解説】\nステップ気候は、砂漠気候の周辺に分布し、樹木が育つほどの降水量はないが、丈の短い草原(ステップ)は育つ気候である。この草原を利用して、家畜(羊・ヤギなど)とともに水や牧草を求めて移動する遊牧が伝統的に営まれてきた。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_05',
    subject: 'shakai',
    figureDescription:
      '京浜・中京・阪神の三大工業地帯における、製造品出荷額等に占める機械工業の割合(%)を比較した棒グラフ。',
    question:
      '日本の三大工業地帯(京浜・中京・阪神)の製造品出荷額等の内訳を比較したとき、中京工業地帯が機械工業の割合で他の2地帯を大きく上回っている理由を、代表的な企業の立地と関連づけて説明しなさい。',
    answer:
      '中京工業地帯には大手自動車メーカーの本拠地・関連工場が集積しており、自動車を中心とする機械工業(輸送用機械)の出荷額が非常に大きいため。',
    hint: '愛知県を中心に本拠地を置く、日本を代表する自動車メーカーを思い出す',
    explanation:
      '【解説】\n中京工業地帯は愛知県・三重県などに広がり、大手自動車メーカーの本拠地や、部品を作る関連工場が数多く集積している。このため、機械工業(特に自動車などの輸送用機械)の出荷額の割合が、京浜工業地帯や阪神工業地帯に比べて非常に高くなっている。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_06',
    subject: 'shakai',
    question:
      '発展途上国に多く見られる「富士山型」の人口ピラミッドの特徴を説明し、この型の国が抱えやすい課題を1つ答えなさい。',
    answer:
      '富士山型は年少人口(子ども)の割合が高く、高齢者になるほど人口が少なくなる、裾野の広いピラミッド型の形をしている。人口増加が急激で、雇用・教育・食料などの整備が人口増加のスピードに追いつかないという課題を抱えやすい。',
    hint: '「裾野が広く、上にいくほど狭まる」形から、どの年代の人口が多いかを考える',
    explanation:
      '【解説】\n富士山型の人口ピラミッドは、出生数が多く、若い世代ほど人口が多い形をしている。多くの発展途上国でみられ、人口が急激に増加する一方で、雇用・教育・食料・医療などの社会基盤の整備が人口の増加スピードに追いつかず、生活水準の向上が難しくなるという課題を抱えやすい。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_07',
    subject: 'shakai',
    question:
      '国際連盟と国際連合の意思決定の仕組みを比較したとき、安全保障(平和維持)に関する最も大きな違いを、「全会一致」「拒否権」という語を用いて説明しなさい。',
    answer:
      '国際連盟は総会・理事会ともに全会一致を原則としており、1か国でも反対すると議決できず、迅速な対応が難しかった。一方、国際連合の安全保障理事会は多数決を採用しつつ、常任理事国5か国に拒否権を認めており、大国の意思を反映しやすい一方で、大国が反対すると重要な決議ができない点は今も課題として残っている。',
    hint: '国際連盟の議決方法と、国際連合の安全保障理事会の議決方法をそれぞれ思い出す',
    explanation:
      '【解説】\n国際連盟は、総会・理事会ともに全会一致を原則としていたため、1か国でも反対すれば決議できず、実効的な対応が難しいという弱点があった。国際連合では、安全保障理事会において多数決の仕組みを取り入れつつ、常任理事国(米・英・仏・露・中)には拒否権を認めている。これにより大国の協調は得やすくなったが、逆に常任理事国のうち1か国でも反対すれば重要な決議ができないという課題は残っている。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_08',
    subject: 'shakai',
    question:
      '日本国憲法の改正手続きが、通常の法律の改正よりも厳格な手続きになっている理由を、「硬性憲法」という語を用いて説明しなさい。',
    answer:
      '憲法は国の基本法であり、時の多数派の都合で簡単に変えられてしまうと、国民の基本的人権や国の基本原則が不安定になるおそれがある。そのため日本国憲法は、各議院の総議員の3分の2以上の賛成による発議と、国民投票の過半数の賛成を必要とする、通常の法律より改正が難しい「硬性憲法」となっている。',
    hint: '憲法が簡単に変えられるとしたら、国民の基本的人権にどのような影響があるかを考える',
    explanation:
      '【解説】\n憲法は国の基本的なあり方や国民の権利を定める最高法規であるため、時の政権の都合で簡単に変えられてしまうと、国民の基本的人権や国の基本原則が不安定になってしまう。そのため日本国憲法では、通常の法律より厳しい手続き(各議院の総議員の3分の2以上の賛成による発議、国民投票による過半数の賛成)を経なければ改正できない、硬性憲法の仕組みが採られている。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_09',
    subject: 'shakai',
    figureDescription: '日本の発電電力量に占める発電方法別の割合を示す円グラフ(模式的な割合)。',
    question:
      '東日本大震災(2011年)以降、日本では原子力発電の割合が大きく低下し、火力発電への依存度が高まった。この状況が抱える課題を、資源とエネルギー安全保障の観点から説明しなさい。',
    answer:
      '火力発電で使われる石油・石炭・天然ガスなどの化石燃料は、その多くを海外からの輸入に頼っているため、火力発電への依存度が高まるほど、国際情勢や資源価格の変動の影響を受けやすくなり、エネルギーを安定して確保すること(エネルギー安全保障)が難しくなるという課題がある。',
    hint: '火力発電の燃料(化石燃料)を、日本はどこから調達しているかを考える',
    explanation:
      '【解説】\n日本は石油・石炭・天然ガスなどの化石燃料の大部分を海外からの輸入に頼っている。東日本大震災以降、多くの原子力発電所が停止し、火力発電への依存度が大きく高まった。化石燃料の輸入先の情勢や国際価格が変動すると、日本のエネルギー供給や電気料金に大きな影響が及ぶため、エネルギーを安定して確保する(エネルギー安全保障を確保する)ことが一層重要な課題となっている。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_10',
    subject: 'shakai',
    question:
      '1962年に起きた、アメリカとソ連が核戦争の危機に直面した出来事の名称を答え、この出来事が冷戦下の国際関係に与えた影響を説明しなさい。',
    answer:
      'キューバ危機。米ソ両国が核戦争の一歩手前まで対立したことで、両国は直接対話(ホットラインの設置など)や軍備管理交渉の必要性を強く認識し、緊張緩和(デタント)に向かう一つのきっかけとなった。',
    hint: 'ソ連がカリブ海の島国にミサイル基地を建設しようとしたことから始まった出来事',
    explanation:
      '【解説】\n1962年、ソ連がキューバに核ミサイル基地を建設しようとしたことをきっかけに、アメリカとソ連は核戦争の一歩手前まで対立した(キューバ危機)。この危機を通じて両国は、偶発的な核戦争を避けるための直接対話の手段(ホットラインの設置)や、軍備管理交渉の必要性を強く認識するようになり、その後の緊張緩和(デタント)へ向かう一つのきっかけとなった。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_11',
    subject: 'shakai',
    question:
      '亜寒帯(冷帯)気候の特徴を、気温と植生の観点から説明し、この気候帯に広がる針葉樹の純林の名称を答えなさい。',
    answer:
      '夏は比較的短く涼しいが、冬の寒さが非常に厳しく、気温の年較差が大きい気候。この気候帯には針葉樹の純林であるタイガが広がる。',
    hint: '夏と冬の気温差が非常に大きい気候であることと、そこに広がる森林の名称を思い出す',
    explanation:
      '【解説】\n亜寒帯(冷帯)気候は、夏は比較的短く涼しいものの、冬の寒さが非常に厳しく、一年を通じた気温の変化(年較差)が非常に大きいことが特徴の気候である。この気候帯にはシベリアなどを中心に、モミやトウヒなどの針葉樹が広範囲にわたって単一の樹種で広がる森林、タイガがみられる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_12',
    subject: 'shakai',
    question:
      'ある県の産業別人口構成を調べたところ、第1次産業15%、第2次産業X%、第3次産業50%であった。第2次産業の割合を求め、この県の産業構造の特徴を説明しなさい。',
    answer:
      '第2次産業は35%。第3次産業の割合が最も高いものの、第2次産業の割合も比較的高く、農林水産業に加えて製造業もある程度発達した産業構造だと考えられる。',
    hint: '3つの産業の割合の合計は100%になることを利用してXを求める',
    explanation:
      '【解説】\n第1次・第2次・第3次産業の割合の合計は必ず100%になるので、X=100-15-50=35%。\n第3次産業(商業・サービス業など)が50%と最も高い一方、第2次産業(製造業・建設業など)も35%とある程度の割合を占めており、都市型の商業・サービス業に加えて製造業もある程度発達した産業構造だと考えられる。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_13',
    subject: 'shakai',
    question: '豊臣秀吉が行った太閤検地と刀狩の目的を、それぞれ説明しなさい。',
    answer:
      '太閤検地は、全国の田畑の面積や収穫量(石高)を統一的な基準で調査し、年貢を確実に徴収する基盤を作ることを目的とした。刀狩は、農民から刀などの武器を取り上げることで、農民の一揆を防ぎ、武士と農民の身分を明確に分ける(兵農分離)ことを目的とした。',
    hint: '検地は「税を取る基盤づくり」、刀狩は「身分を分ける・反乱を防ぐ」という視点で考える',
    explanation:
      '【解説】\n太閤検地は、ものさしや升の基準を統一したうえで全国の田畑を調査し、収穫量を石高という統一基準で表すことで、年貢を確実かつ公平に徴収できる基盤を整えた。刀狩は、農民や寺社などから刀・鉄砲などの武器を没収する政策で、これにより農民が武力で抵抗すること(一揆)を防ぐとともに、武士と農民の身分を明確に区別する兵農分離が進んだ。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_14',
    subject: 'shakai',
    question:
      '社会契約説を唱えた思想家のうち、政府が人民との契約に反した場合、人民には政府に抵抗する権利(抵抗権)があると主張した人物の名前と、その主著を答えなさい。',
    answer: 'ジョン・ロック。主著は『統治二論(市民政府二論)』。',
    hint: 'アメリカ独立宣言にも影響を与えたとされる、イギリスの思想家を思い出す',
    explanation:
      '【解説】\nイギリスの思想家ジョン・ロックは、著書『統治二論(市民政府二論)』の中で、人は生まれながらに生命・自由・財産などの自然権を持っており、政府はそれらの権利を守るために人民との契約(社会契約)によって成立するとした。もし政府がこの契約に反して人民の権利を侵害した場合、人民には政府に抵抗する権利(抵抗権・革命権)があると主張し、後のアメリカ独立宣言などにも大きな影響を与えた。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_15',
    subject: 'shakai',
    question:
      '所得が多い人ほど税率が高くなる「累進課税」の仕組みについて、「公正(公平)」の観点からその意義を説明しなさい。また、この仕組みが経済活動に与えうる影響(効率とのトレードオフ)を1つ挙げなさい。',
    answer:
      '累進課税は、負担できる能力(担税力)に応じて税負担を分かち合うという考え方(垂直的公平)に基づいており、所得格差を緩和する役割を持つ。一方で、税率が高くなりすぎると、多く働いて稼ごうとする意欲(勤労意欲)や投資意欲を損ない、経済全体の効率性を低下させるおそれがあるというトレードオフがある。',
    hint: '「負担できる余裕がある人ほど多く負担する」という考え方が公平と結びつく理由を考え、逆に働く意欲への影響も考える',
    explanation:
      '【解説】\n累進課税は、所得が多く負担できる余裕(担税力)がある人ほど、より高い税率を負担するという仕組みで、支払い能力に応じて公平に負担を分かち合う「垂直的公平」の考え方に基づいており、所得の格差を緩和する役割を果たす。\n一方で、税率が高くなりすぎると、努力して多く稼いでもその分多くを税金として取られてしまうため、勤労意欲や投資意欲が損なわれ、経済全体の効率性(生産性)が下がってしまうおそれがある。公正(所得の再分配)と効率(経済活動の活発さ)はしばしばトレードオフの関係になる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_shakai_16',
    subject: 'shakai',
    question:
      '次のできごとを、起こった順(古い順)に並べ替えなさい。①サンフランシスコ平和条約 ②日ソ共同宣言 ③日中共同声明 ④日韓基本条約',
    answer: '①→②→④→③(サンフランシスコ平和条約1951年→日ソ共同宣言1956年→日韓基本条約1965年→日中共同声明1972年)',
    hint: 'それぞれの条約・宣言のおおよその年代を思い出す',
    explanation:
      '【解説】\nサンフランシスコ平和条約(1951年、日本が独立を回復)→日ソ共同宣言(1956年、ソ連との国交回復・日本の国連加盟実現)→日韓基本条約(1965年、韓国との国交正常化)→日中共同声明(1972年、中国との国交正常化)の順に起きている。日本の戦後外交の主要な条約・宣言の年代を押さえておく。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },

  // ============================================================
  // 英語 (eigo) 16問
  // ============================================================
  {
    id: 'kasei_eigo_01',
    subject: 'eigo',
    passage:
      'Scientists rarely succeed on their first attempt. In fact, many important discoveries came only after hundreds of failed experiments. Each failure, however, is not simply wasted effort. When an experiment fails, researchers learn one more thing that does not work, which narrows down the possibilities for future attempts. For this reason, some scientists consider failure to be just as valuable as success, because it moves their research forward in a different way.',
    question: 'What is the main idea of this passage?',
    answer: 'Failure in scientific experiments is not wasted effort because it helps narrow down future possibilities.',
    hint: 'Look at the last two sentences of the passage, which explain why some scientists value failure.',
    explanation:
      '【解説】\n本文は、科学の実験における失敗が単なる時間の無駄ではなく、うまくいかない可能性を一つ減らし、次の実験の選択肢を絞り込む役に立つと述べている。最後の2文にこの主張が集約されており、これが本文の主旨(main idea)である。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
    choices: [
      'Scientists always succeed on their first attempt.',
      'Failure in scientific experiments is not wasted effort because it helps narrow down future possibilities.',
      'Failed experiments should not be repeated.',
      'Only lucky scientists make important discoveries.',
    ],
  },
  {
    id: 'kasei_eigo_02',
    subject: 'eigo',
    passage:
      'Scientists rarely succeed on their first attempt. In fact, many important discoveries came only after hundreds of failed experiments. Each failure, however, is not simply wasted effort. When an experiment fails, researchers learn one more thing that does not work, which narrows down the possibilities for future attempts. For this reason, some scientists consider failure to be just as valuable as success, because it moves their research forward in a different way.',
    question:
      'According to the passage, why do some scientists consider failure as valuable as success? Answer in English.',
    answer:
      'Because each failure eliminates one possibility that does not work, which narrows down the options for future experiments and moves the research forward.',
    hint: 'The middle of the passage explains what a researcher learns from each failed experiment.',
    explanation:
      '【解説】\n本文中盤「When an experiment fails, researchers learn one more thing that does not work, which narrows down the possibilities for future attempts.」から、失敗のたびに「うまくいかない可能性」が一つ減り、次の実験の選択肢が絞り込まれることが、失敗が価値を持つ理由だと分かる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_03',
    subject: 'eigo',
    passage:
      'Scientists rarely succeed on their first attempt. In fact, many important discoveries came only after hundreds of failed experiments. Each failure, however, is not simply wasted effort. When an experiment fails, researchers learn one more thing that does not work, which narrows down the possibilities for future attempts. For this reason, some scientists consider failure to be just as valuable as success, because it moves their research forward in a different way.',
    question: 'Which phrase in the passage is closest in meaning to "reduces the number of"?',
    answer: 'narrows down',
    hint: 'Look for a two-word phrasal verb describing how the possibilities for future attempts change.',
    explanation:
      '【解説】\n本文の "narrows down the possibilities" は「可能性の数を絞り込む・減らす」という意味であり、"reduces the number of" とほぼ同じ意味を表す表現である。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_04',
    subject: 'eigo',
    passage:
      'Many students today rely on their smartphones to store information, from schedules to notes taken in class. While this makes information easy to access, some educators worry that always relying on a device to remember things may weaken students\' own memory skills. A recent study asked two groups of students to memorize the same list of facts: one group could check their phones at any time, and the other could not. Surprisingly, the group without phones remembered more of the facts a week later.',
    question: 'What did the study described in the passage find? Answer in English.',
    answer:
      'The group of students who could not check their phones remembered more of the facts a week later than the group who could check their phones.',
    hint: 'The result of the study is stated in the last sentence of the passage.',
    explanation:
      '【解説】\n最終文「Surprisingly, the group without phones remembered more of the facts a week later.」がそのまま研究結果である。スマートフォンを確認できなかったグループの方が、1週間後により多くの事実を覚えていたという内容を答える。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_05',
    subject: 'eigo',
    passage:
      'Many students today rely on their smartphones to store information, from schedules to notes taken in class. While this makes information easy to access, some educators worry that always relying on a device to remember things may weaken students\' own memory skills. A recent study asked two groups of students to memorize the same list of facts: one group could check their phones at any time, and the other could not. Surprisingly, the group without phones remembered more of the facts a week later.',
    question: 'According to the passage, what worry do some educators have about students relying on smartphones?',
    answer: 'They worry that always relying on a device to remember things may weaken students\' own memory skills.',
    hint: 'The second sentence of the passage directly states the educators\' worry.',
    explanation:
      '【解説】\n本文第2文「some educators worry that always relying on a device to remember things may weaken students\' own memory skills」がそのまま答えとなる。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_06',
    subject: 'eigo',
    passage:
      'Many students today rely on their smartphones to store information, from schedules to notes taken in class. While this makes information easy to access, some educators worry that always relying on a device to remember things may weaken students\' own memory skills. A recent study asked two groups of students to memorize the same list of facts: one group could check their phones at any time, and the other could not. Surprisingly, the group without phones remembered more of the facts a week later.',
    question: 'Choose the correct word to complete the sentence from the passage: "Surprisingly, the group ___ phones remembered more of the facts a week later."',
    answer: 'without',
    hint: 'Think about which group of students (with or without phone access) remembered more facts.',
    explanation:
      '【解説】\n本文の内容から、スマートフォンを確認できなかった("without phones")グループの方が、より多くの事実を覚えていたことが分かる。よって without が正しい。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
    choices: ['with', 'without', 'for', 'about'],
  },
  {
    id: 'kasei_eigo_07',
    subject: 'eigo',
    passage:
      'Yuki was nervous before her speech contest, but her coach reminded her that the audience does not remember every word; they remember how confident a speaker looked. Yuki repeated this to herself backstage, and although her hands were shaking, her voice remained steady. When she finished, she realized that confidence, more than a perfect script, is what makes a speech memorable.',
    question: 'What lesson does Yuki learn by the end of the passage? Answer in English.',
    answer: 'She learns that confidence, more than having a perfect script, is what makes a speech memorable to the audience.',
    hint: 'The lesson Yuki learns is stated directly in the last sentence of the passage.',
    explanation:
      '【解説】\n最終文「she realized that confidence, more than a perfect script, is what makes a speech memorable」がそのままユキが学んだ教訓である。完璧な原稿よりも自信の方がスピーチを印象的なものにする、という内容を英語でまとめる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_08',
    subject: 'eigo',
    passage:
      'Yuki was nervous before her speech contest, but her coach reminded her that the audience does not remember every word; they remember how confident a speaker looked. Yuki repeated this to herself backstage, and although her hands were shaking, her voice remained steady. When she finished, she realized that confidence, more than a perfect script, is what makes a speech memorable.',
    question:
      'The underlined word "shaking" describes Yuki\'s hands. What does this suggest about her feelings at that moment? Choose the best answer.',
    answer: 'She felt nervous.',
    hint: 'Think about what physical reaction usually happens to a person\'s hands when they are nervous.',
    explanation:
      '【解説】\n手が震える("shaking")という描写は、緊張している人によく見られる身体的な反応である。声は落ち着いていた(voice remained steady)という描写との対比から、外見上は落ち着いて見えても内心は緊張していたことが読み取れる。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
    choices: ['She felt bored.', 'She felt nervous.', 'She felt confident.', 'She felt sleepy.'],
  },
  {
    id: 'kasei_eigo_09',
    subject: 'eigo',
    question: 'Choose the correct form to complete the sentence: "By the time we arrive, the meeting ___ already."',
    answer: 'will have started',
    hint: 'This describes an action that will be completed before another point in the future, so the future perfect tense is used.',
    explanation:
      '【解説】\n「未来のある時点までに、すでに完了しているだろう」という内容を表す場合、未来完了形(will have + 過去分詞)を使う。「私たちが到着するまでに」という未来の基準点より前に会議が始まっている、という意味を表すため will have started が正しい。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
    choices: ['will start', 'will have started', 'started', 'starts'],
  },
  {
    id: 'kasei_eigo_10',
    subject: 'eigo',
    question: 'Rewrite the following sentence in reported (indirect) speech: He said, "I have finished my homework."',
    answer: 'He said (that) he had finished his homework.',
    hint: 'When the reporting verb is in the past tense, the present perfect in the original sentence usually shifts to the past perfect.',
    explanation:
      '【解説】\n伝達動詞(said)が過去形のとき、直接話法の中の現在完了形(have finished)は、時制の一致により過去完了形(had finished)に変える。また、主語 "I" は伝える相手に合わせて "he" に変える。\nHe said (that) he had finished his homework.',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_11',
    subject: 'eigo',
    question: 'Choose the correct word: "This is the hardest problem ___ I have ever solved."',
    answer: 'that',
    hint: 'After a superlative expression like "the hardest," the relative pronoun "that" is the standard choice.',
    explanation:
      '【解説】\n最上級(the hardest)で修飾された名詞の後には、関係代名詞 that が好んで使われる(whichも文法的には可能だが、最上級表現の後では that がより一般的とされる)。よって that が正解。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
    choices: ['that', 'what', 'who', 'when'],
  },
  {
    id: 'kasei_eigo_12',
    subject: 'eigo',
    question:
      'Combine the following sentence using a participial construction: "Because she was tired, she went to bed early." → "___, she went to bed early."',
    answer: 'Being tired',
    hint: 'Change the subordinate clause "Because she was tired" into a participial phrase beginning with "Being."',
    explanation:
      '【解説】\n"Because she was tired" は理由を表す従属節。主語が主節と同じ(she)なので、"Being tired" という分詞構文に書き換えることができる。\nBeing tired, she went to bed early.',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_13',
    subject: 'eigo',
    question:
      'Choose the correct preposition: "The number of students interested in studying abroad has increased ___ the past decade."',
    answer: 'over',
    hint: '"over" is commonly used with a period of time to describe a change or trend that has continued through that period.',
    explanation:
      '【解説】\n「この10年間で」というように、ある期間を通じた変化・傾向を表す場合、前置詞 over がよく使われる(over the past decade)。since は起点を、for は単なる期間の長さを表すのに使われることが多く、ここでは変化の推移を表す over が適切。',
    difficulty: 'standard',
    course: 'koko-kasei',
    examType: 'koko',
    choices: ['since', 'for', 'over', 'at'],
  },
  {
    id: 'kasei_eigo_14',
    subject: 'eigo',
    question: 'Fill in the blank with the correct form of the verb: "If she ___ (study) harder, she would have passed the exam."',
    answer: 'had studied',
    hint: 'This is a third conditional sentence about the unreal past, so the if-clause uses the past perfect.',
    explanation:
      '【解説】\n過去の事実に反する仮定を表す仮定法過去完了(第3条件文)では、if節に過去完了形(had+過去分詞)、主節に "would have+過去分詞" を使う。\nIf she had studied harder, she would have passed the exam.',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
  {
    id: 'kasei_eigo_15',
    subject: 'eigo',
    question: 'Choose the correct word: "___ hard he tried, he could not solve the puzzle."',
    answer: 'However',
    hint: 'This sentence means "no matter how hard he tried," so a word meaning "no matter how" is needed before the adjective/adverb.',
    explanation:
      '【解説】\n"However+形容詞/副詞+主語+動詞" で「どんなに〜しても」という意味を表す(=no matter how)。ここでは "hard"(副詞)を修飾しているので、However hard he tried で「どんなに一生懸命がんばっても」という意味になる。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
    choices: ['However', 'Whatever', 'Whichever', 'Whenever'],
  },
  {
    id: 'kasei_eigo_16',
    subject: 'eigo',
    question:
      'Write your opinion in English (40-50 words): "Some people say that failure is more valuable than success for learning. Do you agree or disagree? Give one reason."',
    answer:
      '(自由英作文・模範解答例) "I agree that failure is more valuable than success for learning. When I fail, I have to think carefully about what went wrong, and this process helps me understand the problem much more deeply than simply succeeding on the first try."',
    hint: 'State your opinion clearly first (I agree/I disagree), then give one clear reason with a specific example if possible.',
    explanation:
      '【解説】\nこれは唯一の正解がない自由英作文問題(開成らしい思考力・表現力を問う出題)。採点にあたっては、①意見が明確に述べられているか、②理由が論理的に示されているか、③文法・語彙の正確さと語数の目安(40〜50語程度)を満たしているか、の3点を評価するとよい。模範解答はあくまで一例であり、賛成・反対どちらの立場でも、理由が論理的であれば正答となり得る。',
    difficulty: 'advanced',
    course: 'koko-kasei',
    examType: 'koko',
  },
];

export const figuresKokoKaseiFill: Record<string, Figure> = {
  // R1=6Ω・R2=3Ωを並列につないだ回路。電流の値は解答なので示さない。
  kasei_rika_02: {
    kind: 'circuit',
    layout: 'parallel',
    branches: [
      [{ type: 'resistor', label: 'R₁(6Ω)' }],
      [{ type: 'resistor', label: 'R₂(3Ω)' }],
    ],
    battery: { label: '12V' },
  },
  // 光の強さとCO2吸収速度(見かけの光合成速度)の関係。補償点・飽和点は解答に関わるので、
  // グラフの折れ線データのみ示し、注釈は入れない。
  kasei_rika_04: {
    kind: 'lineChart',
    xLabel: '光の強さ(klx)',
    yLabel: 'CO₂吸収速度',
    xRange: [0, 10],
    yRange: [-3, 4],
    series: [
      {
        label: '見かけの光合成速度',
        markers: true,
        points: [
          { x: 0, y: -2 },
          { x: 2, y: -1 },
          { x: 4, y: 0 },
          { x: 6, y: 2 },
          { x: 8, y: 3 },
          { x: 10, y: 3 },
        ],
      },
    ],
  },
  // 標高50mのA地点・標高30mのB地点の柱状図。凝灰岩層(かぎ層)の深さは問題文の数値と対応させている。
  kasei_rika_06: {
    kind: 'stratum',
    columns: [
      {
        label: 'A地点',
        topLabel: '標高50m',
        layers: [
          { name: '表土', thickness: 2, pattern: 'plain' },
          { name: '砂岩層', thickness: 8, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 3, pattern: 'ash' },
          { name: '泥岩層', thickness: 5, pattern: 'mud' },
        ],
      },
      {
        label: 'B地点',
        topLabel: '標高30m',
        layers: [
          { name: '表土', thickness: 1, pattern: 'plain' },
          { name: '砂岩層', thickness: 4, pattern: 'sand' },
          { name: '凝灰岩層', thickness: 3, pattern: 'ash' },
          { name: '泥岩層', thickness: 5, pattern: 'mud' },
        ],
      },
    ],
  },
  // 三大工業地帯の機械工業比率(概略値の比較。実際の統計と厳密には一致しない模式的な数値)。
  kasei_shakai_05: {
    kind: 'barChart',
    xLabel: '工業地帯',
    yLabel: '機械工業の割合(%)',
    yMax: 80,
    bars: [
      { label: '京浜', value: 44 },
      { label: '中京', value: 69 },
      { label: '阪神', value: 37 },
    ],
  },
  // 日本の発電電力量の内訳(模式的な割合。年度により変動するため厳密な統計値ではない)。
  kasei_shakai_09: {
    kind: 'pieChart',
    slices: [
      { label: '火力', value: 76 },
      { label: '再生可能エネルギー', value: 20 },
      { label: '原子力', value: 4 },
    ],
  },
};
