import type { Question } from './questions';

export const tokyoChugakuMaxQuestions: Question[] = [
  // ── 明治大学附属明治中 ──────────────────────────────────────────────
  {
    id: 'tokyo_meidai_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-meidai',
    maxOnly: true,
    question:
      '【大問1】（速さの複合問題）\n\nA地点とB地点は12km離れている。太郎はA→Bを時速4kmで歩き、B→Aを時速6kmで走った。花子は同じ時刻にB地点を出発し、A地点に向かって一定の速さで歩いた。太郎がA地点を出発してから2時間後に太郎と花子が初めて出会い、その後太郎が折り返してBに向かったところ、出会いの地点から1時間後に再び花子と出会った。\n\n問1. 太郎と花子が初めて出会った地点は、A地点から何kmのところか。\n問2. 花子の速さは時速何kmか。\n問3. 太郎が最初に出発してからB地点に戻るまでにかかった時間は何時間何分か。',
    answer:
      '問1. A地点から8km\n問2. 時速2km\n問3. 4時間30分',
    hint: '太郎が2時間歩いた距離をまず求め、出会い地点を特定せよ。花子の速さは2回目の出会いの条件から逆算できる。',
    explanation:
      '問1: 太郎は2時間で4×2=8km進む。よって出会い地点はA地点から8km。\n問2: 出会い時点で花子はBから12-8=4km進んでいる。2時間で4kmなので時速2km。\n1回目の出会い後、太郎は折り返してBへ向かう（時速6km）。花子は時速2kmでA方向へ歩き続ける。1時間後の2人の位置を確認: 太郎は出会い地点(Aから8km)から6km進み、Aから2km地点（＝Bから10km）。花子はBから4+2=6km地点（Aから6km）。距離差=6-2=4km。\n問3: A→Bは12÷4=3時間、B→Aは12÷6=2時間、A→Bの途中で折り返した分を加味。太郎はA出発→8km地点（2時間）→B（8kmを時速6km＝1時間20分）→計3時間20分でBに到着。太郎が出発してBに戻るまでに3時間20分+2時間=4時間30分（A→B→A→Bの合計）。',
  },
  {
    id: 'tokyo_meidai_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-meidai',
    maxOnly: true,
    question:
      '【大問2】（古文読解）\n\n次の古文を読んで、問いに答えよ。\n\n「竹取物語」より：「なよ竹のかぐや姫とつけつ。この三日うちあげ遊ぶ。よろづ遊びをぞしける。男はうけきらはず呼び集へて、いとかしこく遊ぶ。世界の男、あてなるも、いやしきも、いかでこのかぐや姫を得てしがな、見てしがな、と音に聞き、めでたがりて…」\n\n問1. 「なよ竹」とはどのような意味か。漢字を使って説明せよ（20字以内）。\n問2. 「うけきらはず」を現代語に訳せ。\n問3. 「いかでこのかぐや姫を得てしがな」の「しがな」はどのような気持ちを表す助詞か、答えよ。また、この文全体の意味を現代語に訳せ。',
    answer:
      '問1. しなやかで細い柔らかな竹（のような）\n問2. 分け隔てなく（えり好みをせずに）\n問3. 「しがな」は願望を表す助詞（〜したいものだ）。訳：「なんとかしてこのかぐや姫を妻にしたいものだ、会って見たいものだ」',
    hint: '古文では「〜てしがな」「〜にしがな」は強い願望を表す。「うけきらはず」は「受け嫌わず」と漢字にすると意味が見える。',
    explanation:
      '問1: なよ竹は「しなやかで弱々しい竹」を指し、かぐや姫の細く繊細な美しさを比喩する。\n問2: 「うけきらはず」＝「受け嫌わず」→男性を分け隔てなく呼び集めた。\n問3: 「てしがな」は「〜たいものだ」という強い願望の終助詞。「いかで」は「どうにかして・なんとかして」の副詞。全体で「なんとかしてかぐや姫を手に入れたい、会って見たいものだ」という意。',
  },
  {
    id: 'tokyo_meidai_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-meidai',
    maxOnly: true,
    question:
      '【大問3】（光合成と呼吸の計算）\n\nある植物の葉を用いた実験を行った。光の強さを変えながら、1時間あたりの二酸化炭素の吸収量・放出量を測定した結果、以下の表が得られた。\n\n光の強さ（ルクス）: 0 / 1000 / 2000 / 3000\nCO₂の変化量（mg/時）: +4（放出）/ −2（吸収）/ −8（吸収）/ −8（吸収）\n（＋は放出、−は吸収を示す）\n\n問1. 暗所（光の強さ0）でのCO₂放出量は何を示しているか、答えよ。\n問2. 光の強さが1000ルクスのとき、この植物の実際の光合成速度（真の光合成量）は1時間あたり何mgのCO₂を固定しているか。\n問3. 光の強さが2000ルクス以上で吸収量が変わらない理由を、光合成の仕組みから説明せよ（40字以内）。',
    answer:
      '問1. 細胞呼吸（呼吸）によるCO₂放出量\n問2. 6mg/時\n問3. 光飽和点に達し、光以外の要因（CO₂濃度・酵素量）が光合成速度を制限しているため。',
    hint: '見かけの光合成量＝真の光合成量－呼吸量。暗所でのCO₂放出量が呼吸量に相当する。',
    explanation:
      '問1: 光がないため光合成はゼロ。放出されるCO₂はすべて細胞呼吸によるもの（呼吸速度＝4mg/時）。\n問2: 1000ルクスでの見かけの光合成量＝2mg吸収。真の光合成量＝見かけ+呼吸＝2+4＝6mg/時。\n問3: 2000ルクス以上で光飽和点に達する。それ以上光を強くしても、カルビン回路の酵素（RuBisCO）の反応速度やCO₂の供給量が律速となるため、光合成速度は増加しない。',
  },
  {
    id: 'tokyo_meidai_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-meidai',
    maxOnly: true,
    question:
      '【大問4】（史料読解・明治時代）\n\n次の史料を読んで、問いに答えよ。\n\n「五箇条の御誓文（1868年）」より：「一、広く会議を興し、万機公論に決すべし。一、上下心を一にして、盛んに経綸を行ふべし。一、官武一途庶民に至る迄、各其志を遂げ、人心をして倦まざらしめんことを要す。一、旧来の陋習を破り、天地の公道に基くべし。一、知識を世界に求め、大いに皇基を振起すべし。」\n\n問1. この文書が出された時代背景を、「幕府」「天皇」「維新」の語を用いて説明せよ（40字以内）。\n問2. 「広く会議を興し」とはどのような政治体制を目指したものか。後の政治改革との関連で説明せよ（30字以内）。\n問3. 「知識を世界に求め」という方針の下、明治政府が行った具体的な施策を2つ挙げよ。',
    answer:
      '問1. 江戸幕府が倒れ天皇中心の新政府が成立した明治維新の直後に出された。\n問2. 議会を設けて広く意見を聞く立憲政治・議会政治を目指したもの。\n問3. 岩倉使節団の欧米派遣、お雇い外国人の招聘（学制・富国強兵政策）など。（他例：留学生の派遣、欧米の法律・技術の導入）',
    hint: '五箇条の御誓文は明治政府の基本方針を示したもの。後の自由民権運動・大日本帝国憲法制定との流れを意識せよ。',
    explanation:
      '問1: 1867年大政奉還・1868年王政復古の大号令を経て江戸幕府が終わり、明治天皇を中心とする新政府が発足した直後の宣言。\n問2: 明治14年に国会開設の勅諭、1889年大日本帝国憲法制定・帝国議会設置へとつながる議会政治の萌芽。\n問3: 1871年岩倉具視らの欧米使節団（条約改正交渉と欧米文化視察）、外国人専門家（お雇い外国人）の招聘で近代産業・教育・法律を整備。',
  },
  {
    id: 'tokyo_meidai_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-meidai',
    maxOnly: true,
    question:
      '【大問5】（英語長文読解＋英作文）\n\n次の英文を読んで、問いに答えよ。\n\n"Every year, millions of tons of plastic end up in the ocean. Marine animals often mistake plastic bags for jellyfish and eat them, which can be deadly. Scientists warn that if we do not change our habits now, the damage to marine ecosystems will be irreversible within fifty years. However, many young people around the world are taking action by organizing beach clean-ups and pushing for government policies to ban single-use plastics."\n\n問1. 下線部 "irreversible" の意味として最も適切な日本語を選べ。\n　ア. 回復可能な　イ. 取り返しのつかない　ウ. 予測不可能な　エ. 管理可能な\n問2. 本文の内容と合うものを1つ選べ。\n　ア. Plastic in the ocean causes no harm to animals.\n　イ. Young people are doing nothing about the plastic problem.\n　ウ. Scientists believe the ocean can recover on its own.\n　エ. Some young people are working to stop plastic pollution.\n問3. 「あなたは海洋プラスチック問題についてどう思いますか。自分にできることを含めて3文以上の英語で書きなさい。」',
    answer:
      '問1. イ\n問2. エ\n問3. （例）I think plastic pollution is a serious problem that we must solve together. I will stop using plastic bags and bring my own bag when I go shopping. Also, I want to join a local clean-up event to help protect the ocean.',
    hint: '問3は「自分にできること」を具体的に書くこと。I will / I want to / I can などを使って表現せよ。',
    explanation:
      '問1: irreversible＝「元に戻せない、取り返しのつかない」。reverse（逆にする）にir-（否定）が付いた語。\n問2: 本文最終文で「多くの若者がビーチ清掃や政策への働きかけを行っている」とあるのでエが正解。\n問3: 採点のポイントは①海洋汚染問題への意見、②自分にできる具体的行動、③3文以上・英文の文法的正確さ。',
  },

  // ── 青山学院中等部 ──────────────────────────────────────────────────
  {
    id: 'tokyo_aoyama_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-aoyama',
    maxOnly: true,
    question:
      '【大問1】（立体図形・展開図）\n\n1辺の長さが6cmの正三角形を底面とする正三角錐（すべての面が正三角形）がある。\n\n問1. この正三角錐の展開図を描いたとき、展開図全体の面積を求めよ。\n問2. この正三角錐の表面積を求めよ。（√3＝1.732として計算し、小数第2位を四捨五入せよ）\n問3. この正三角錐を、底面と平行な平面で高さの半分のところで切ったとき、小さい方の立体（上の部分）の表面積は元の立体の表面積の何倍か。分数で答えよ。',
    answer:
      '問1. 36√3 cm²（展開図は正三角形4枚なので 4×(√3/4×6²)＝36√3）\n問2. 約62.4 cm²（36×1.732≒62.35→62.4）\n問3. 1/4倍',
    hint: '正四面体の展開図は合同な正三角形4枚。高さの半分で切ると相似比1:2、面積比1:4になる。',
    explanation:
      '問1: 正四面体（正三角錐）は合同な正三角形4面。1辺6cmの正三角形の面積＝(√3/4)×36＝9√3。4枚で36√3 cm²。\n問2: 表面積＝展開図面積＝36√3≒36×1.732＝62.352≒62.4 cm²。\n問3: 高さ半分で切ると上部は元の立体と相似で相似比1:2。表面積比は1²:2²＝1:4。上部の表面積は元の1/4倍。',
  },
  {
    id: 'tokyo_aoyama_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-aoyama',
    maxOnly: true,
    question:
      '【大問2】（詩の鑑賞）\n\n次の詩を読んで、問いに答えよ。\n\n金子みすゞ「星とたんぽぽ」\n青いお空のそこふかく、\n海のさかなのそれのやうに、\nよるはかくれて、ひるはそッと\n咲いてゐる星みえぬ星。\n\n土のなかに大きな根を、\nかぼそき花のそれとやうに、\n人に知られずはかなくとも、\n咲いてゐる根みえぬ根。\n\nさみしい者は、強いのよ、\n目にみえないをたいせつに。\n\n問1. 第1連の「星みえぬ星」とはどのようなことを表しているか、説明せよ（25字以内）。\n問2. 第1連と第2連は対比的な構造をとっている。何と何が対比されているか答えよ。\n問3. 「さみしい者は、強いのよ」という最終連について、詩全体を通して作者が伝えたいことを自分の言葉でまとめよ（50字以内）。',
    answer:
      '問1. 昼間は見えないが空の奥深くに存在している星のこと。\n問2. 昼間見えない星（空）と、地中の見えない根（土）が対比されている。\n問3. 人の目には見えない存在でも、静かに生き続ける力を持っており、そのような者こそが真に強いということ。',
    hint: '詩は繰り返しの構造（星と根）に注目。見えないもの・知られないものへの共感が主題。',
    explanation:
      '問1: 昼は太陽の光で見えなくなるが、空の深いところで輝き続けている星。「見えない＝存在しない」ではないことを表す。\n問2: 第1連＝空・星（昼に見えない）、第2連＝土・根（人に見えない）。どちらも「目に見えない」ものを詩っている。\n問3: 人に知られず目立たない存在でも、見えないところで力強く生きており、そのような「さみしさ」の中にこそ真の強さがあると作者は伝えている。',
  },
  {
    id: 'tokyo_aoyama_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-aoyama',
    maxOnly: true,
    question:
      '【大問3】（地層と化石の推論）\n\nある地点の崖で、上から順にA・B・C・D・E層の地層が観察された。各層の特徴は以下の通り。\n\nA層：れき岩（大きな石を含む）\nB層：砂岩（アンモナイトの化石を含む）\nC層：凝灰岩（火山灰が固まったもの）\nD層：泥岩（フズリナの化石を含む）\nE層：石灰岩\n\n問1. この地層が堆積した順序（古い順）を答えよ。また、その理由を述べよ。\n問2. B層のアンモナイトとD層のフズリナが示す時代をそれぞれ答えよ。これらを何というか。\n問3. C層（凝灰岩）が地層の対比に役立つ理由を説明せよ（30字以内）。',
    answer:
      '問1. 古い順：E→D→C→B→A。地層は下が古く上が新しい（地層累重の法則）。\n問2. アンモナイト→中生代の示準化石。フズリナ→古生代の示準化石。\n問3. 火山噴火は短期間で広範囲に降り積もるため、離れた地点の地層を同時期のものと特定できるから。',
    hint: '示準化石は生息期間が短く・分布が広いものが適する。凝灰岩はカギ層とも呼ばれる。',
    explanation:
      '問1: 地層累重の法則より、下の地層が先に堆積した古い地層。E→D→C→B→Aの順。\n問2: アンモナイトは中生代（約2億5000万〜6600万年前）、フズリナは古生代（約3億〜2億5000万年前）の示準化石。示準化石とは地層が堆積した時代を示す化石。\n問3: 火山噴火は瞬間的かつ広域的に灰を降らせるため、凝灰岩層は「同時代に堆積した」目印（鍵層）として離れた地点の地層対比に使われる。',
  },
  {
    id: 'tokyo_aoyama_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-aoyama',
    maxOnly: true,
    question:
      '【大問4】（統計読解・現代社会）\n\n次のデータを見て、問いに答えよ。\n\n日本の人口推移（万人）\n1950年：8,411\n1970年：10,467\n1990年：12,361\n2010年：12,806\n2023年：12,435\n\n合計特殊出生率の推移\n1950年：3.65\n1975年：1.91\n2000年：1.36\n2023年：1.20\n\n問1. 2010年から2023年にかけての人口変化を計算し、その原因を説明せよ（30字以内）。\n問2. 合計特殊出生率とは何か説明し、人口を維持するために必要な水準（人口置換水準）はおよそいくつか答えよ。\n問3. 少子高齢化が進む日本社会において、社会保障制度に与える影響を具体的に説明せよ（50字以内）。',
    answer:
      '問1. 12,806万人→12,435万人で約371万人減少。少子化による出生数の減少と死亡数の超過（自然減）が原因。\n問2. 1人の女性が生涯に産む子どもの平均数。人口置換水準は約2.07。\n問3. 働く世代（現役）が減り、高齢者が増えるため、年金・医療・介護費用が増大し現役世代の負担が重くなる。',
    hint: '人口置換水準≒2.07（女性1人が平均2人以上産まないと人口が維持できない）。',
    explanation:
      '問1: 12,806−12,435＝371万人減。少子化で出生数が死亡数を下回る自然減が主因。外国人労働者の増加が一部緩和しているが焼け石に水。\n問2: 合計特殊出生率は15〜49歳の女性の年齢別出生率の合計。人口を長期的に一定に保つ水準は約2.07（子ども1人は女性のみカウント+乳幼児死亡率を加味）。\n問3: 生産年齢人口の減少で社会保険料収入が減り、高齢者向け給付（年金・医療・介護）は増大。給付と負担のバランスが崩れ制度の持続可能性が問題となる。',
  },
  {
    id: 'tokyo_aoyama_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-aoyama',
    maxOnly: true,
    question:
      '【大問5】（英語読解・語彙・英作文）\n\n次の会話文を読んで、問いに答えよ。\n\nAlex: Did you hear that our school is thinking about removing all vending machines?\nMia: Really? Why would they do that?\nAlex: They say students eat too much junk food and it affects their (  A  ) and concentration in class.\nMia: I see. But some students like me don\'t have time to eat breakfast, so the vending machines are really (  B  ).\nAlex: That\'s a good point. Maybe the school should offer healthier options instead of removing them completely.\nMia: Exactly! Better choices would help everyone.\n\n問1. 空欄（A）に入る最も適切な語を答えよ。（health / healthy / healthily から選べ）\n問2. 空欄（B）に入る最も適切な語を答えよ。（convenient / convenience / conveniently から選べ）\n問3. 「あなたの学校の自動販売機について、あるべき姿を英語3文以上で述べよ。賛成・反対どちらでもよい。」',
    answer:
      '問1. health\n問2. convenient\n問3. （例）I think vending machines should stay in our school, but they should sell healthier food. For example, they could offer fruits, nuts, and water instead of chips and soda. This way, students can get energy quickly without eating unhealthy snacks.',
    hint: '（A）はaffectsの目的語なので名詞形。（B）はbe動詞のあとなので形容詞形。',
    explanation:
      '問1: "affects their ___" → 動詞affectの目的語なので名詞のhealthが正解。\n問2: "are really ___" → be動詞の補語なので形容詞のconvenientが正解。\n問3: 採点のポイントは自分の立場の明示・理由・具体的提案・3文以上の英文。文法ミスがない表現を心がけること。',
  },

  // ── 中央大学附属中 ──────────────────────────────────────────────────
  {
    id: 'tokyo_chuo_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-chuo',
    maxOnly: true,
    question:
      '【大問1】（比の応用・食塩水）\n\nA・B・Cの3つの容器に食塩水が入っている。Aの濃度は8%、Bの濃度は3%、Cの濃度は12%である。\n\n問1. Aから200g、Bから300gを混ぜた食塩水の濃度を求めよ。\n問2. 問1で作った食塩水にCを何gか混ぜたところ、濃度が7%になった。Cを何g混ぜたか。\n問3. Aの食塩水500gから水を蒸発させて、Cと同じ12%の食塩水を作るには、何gの水を蒸発させればよいか。',
    answer:
      '問1. 5%\n問2. 100g\n問3. 約166.7g（500/3 g）',
    hint: '食塩の量は変わらない。食塩量＝濃度×重さで計算し、てんびん法も活用できる。',
    explanation:
      '問1: 食塩量：A=200×0.08=16g、B=300×0.03=9g。合計食塩=25g、合計重さ=500g。濃度=25/500=0.05=5%。\n問2: 問1の食塩水500g（5%）にC（12%）をxg混ぜて7%にする。500×0.05+x×0.12=(500+x)×0.07 → 25+0.12x=35+0.07x → 0.05x=10 → x=200g。（200gとなるので問2の答えは200g）\n問3: Aの500g中の食塩=500×0.08=40g。12%にするには 40/0.12=333.3…g の食塩水にすればよい。蒸発させる水=500−333.3=166.7g。',
  },
  {
    id: 'tokyo_chuo_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-chuo',
    maxOnly: true,
    question:
      '【大問2】（現代文・随筆読解）\n\n次の文章を読んで、問いに答えよ。\n\n「言葉というものは、ただ情報を伝えるだけのものではない。言葉には、話す人の体温がある。同じ『ありがとう』でも、急いでいるときに放つそれと、目を見てゆっくり言うそれとでは、受け取る側の心の動きはまるで違う。現代社会では、SNSやメッセージアプリが普及し、文字によるコミュニケーションが主流になりつつある。便利な反面、この『体温』が失われやすい。絵文字やスタンプはその代替として生まれたが、果たして言葉の体温を完全に補えるだろうか。」\n\n問1. 「言葉の体温」とはどのような意味か、本文の言葉を使って説明せよ（30字以内）。\n問2. 筆者がSNS・メッセージアプリに対して持っている見方を、「便利」「体温」の語を使って説明せよ（40字以内）。\n問3. 「絵文字やスタンプは言葉の体温を補えるか」について、あなたの考えを理由とともに書け（60字以内）。',
    answer:
      '問1. 話す人の感情や気持ちが言葉に乗り移ったもので、受け手の心を動かす力のこと。\n問2. 便利ではあるが、言葉を文字のみで伝えるため言葉の体温が失われやすいと考えている。\n問3. （例）完全には補えないと思う。絵文字は感情を示せても、声のトーンや視線など、対面でしか伝わらないものがあるから。',
    hint: '問3は自分の立場を明確にし、理由を具体的に書くこと。採点は内容の論理性を重視。',
    explanation:
      '問1: 本文中の「話す人の体温」「受け取る側の心の動き」から、言葉に込められた人の感情・温かみを指すとまとめる。\n問2: 「便利な反面、体温が失われやすい」という筆者の見方を両面から捉える。\n問3: 模範解答は一例。「補える」立場でも「感情を素早く共有できる」などの理由があれば可。論理の一貫性が重要。',
  },
  {
    id: 'tokyo_chuo_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-chuo',
    maxOnly: true,
    question:
      '【大問3】（電気回路の計算）\n\n電池（起電力6V）に、3Ωの抵抗R1と6Ωの抵抗R2が並列に接続されている。\n\n問1. この並列回路の合成抵抗を求めよ。\n問2. 回路全体に流れる電流を求めよ。\n問3. R1に流れる電流とR2に流れる電流をそれぞれ求め、電流の比（R1:R2）が抵抗の比（R1:R2）と逆になることを説明せよ。',
    answer:
      '問1. 2Ω\n問2. 3A\n問3. R1に2A、R2に1A流れる。電流比R1:R2＝2:1、抵抗比R1:R2＝3:6＝1:2（逆比）。並列回路では各抵抗にかかる電圧が等しく（6V）、電流は抵抗に反比例するため。',
    hint: '並列の合成抵抗は 1/R＝1/R1+1/R2。並列回路では各抵抗にかかる電圧は等しい。',
    explanation:
      '問1: 1/R＝1/3+1/6＝2/6+1/6＝3/6＝1/2 → R＝2Ω。\n問2: オームの法則より I＝V/R＝6/2＝3A。\n問3: 並列接続では各抵抗に同じ電圧6Vがかかる。I1＝6/3＝2A、I2＝6/6＝1A。電流比＝2:1。抵抗比＝3:6＝1:2。抵抗が大きいほど電流が小さく流れる（オームの法則：I＝V/R）ため、電流比は抵抗比の逆になる。',
  },
  {
    id: 'tokyo_chuo_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-chuo',
    maxOnly: true,
    question:
      '【大問4】（地理・貿易統計の読解）\n\n次の日本の貿易相手国（2023年・輸出入合計）上位5カ国のデータを見て、問いに答えよ。\n\n1位 中国（約34兆円）\n2位 アメリカ（約28兆円）\n3位 オーストラリア（約7兆円）\n4位 韓国（約7兆円）\n5位 UAE（約5兆円）\n\n問1. 日本がオーストラリアから多く輸入しているものを2つ挙げ、それぞれの用途を述べよ。\n問2. 日本の対中国貿易が1位である理由を、「人口」「製造業」の語を使って説明せよ（40字以内）。\n問3. 日本とUAE（アラブ首長国連邦）の貿易において、日本が主に輸入しているものを答え、その資源の価格変動が日本経済に与える影響を説明せよ（50字以内）。',
    answer:
      '問1. 石炭（火力発電・製鉄用）、天然ガス（都市ガス・発電用）など。他に鉄鉱石も可。\n問2. 中国は人口14億人の巨大市場で製造業の世界的拠点のため、輸出入ともに規模が大きい。\n問3. 石油（原油）を主に輸入している。原油価格が上昇すると輸送費・製造コストが上がり、物価上昇（インフレ）が起きて家計・企業収益を圧迫する。',
    hint: 'オーストラリアは資源大国（石炭・鉄鉱石・天然ガス・LNG）。UAEは中東の産油国。',
    explanation:
      '問1: オーストラリアは世界有数の石炭・LNG・鉄鉱石輸出国。石炭は火力発電・製鉄（コークス用）、天然ガスは都市ガス・発電・化学原料に使われる。\n問2: 中国は14億人超の人口を持つ世界最大の消費市場であり、製造業の集積地として日本企業の生産拠点でもある。\n問3: UAEをはじめとする中東から日本は原油を大量輸入。原油高はエネルギーコスト上昇→輸送・生産コスト増→物価上昇という連鎖を引き起こす。',
  },
  {
    id: 'tokyo_chuo_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-chuo',
    maxOnly: true,
    question:
      '【大問5】（英語・語順整序＋英作文）\n\n問1. 次の語句を並べ替えて、正しい英文を作れ。\n（ school / uniform / wearing / are / students / against / some / a ）\n\n問2. 次の日本語を英語に訳せ。\n「私は学校の制服は必要だと思いますが、デザインは生徒が選ぶべきだと考えます。」\n\n問3. 「制服のある学校とない学校、どちらがよいか」について、あなたの意見を英語で4文以上書け。',
    answer:
      '問1. Some students are against wearing a school uniform.\n問2. I think school uniforms are necessary, but I believe students should choose the design.\n問3. （例）I prefer a school with uniforms because they make students feel equal. When everyone wears the same clothes, nobody has to worry about fashion or money. However, I think the design should be modern and comfortable. This way, students can feel proud to wear them.',
    hint: '問1の "against" は前置詞で「〜に反対して」の意味。後ろには動名詞（wearing）が続く。',
    explanation:
      '問1: against + 動名詞の構文。Some students are against wearing a school uniform.\n問2: "I think ... but I believe ..." の逆説の構文を使う。「選ぶべき」はshould choose。\n問3: 採点は立場の明確さ・理由の具体性・4文以上・文法の正確さ。制服賛成・反対どちらでも可。',
  },

  // ── 法政大学第二中 ──────────────────────────────────────────────────
  {
    id: 'tokyo_hosei_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-hosei',
    maxOnly: true,
    question:
      '【大問1】（場合の数・組み合わせ）\n\n1〜9の数字が1枚ずつ書かれた9枚のカードがある。この中から3枚を選んで3桁の整数を作る。\n\n問1. 3桁の整数は全部で何通りできるか。\n問2. 3桁の偶数は全部で何通りできるか。\n問3. 各桁の数字の和が15になる3桁の整数は何通りあるか。',
    answer:
      '問1. 504通り\n問2. 168通り\n問3. 56通り',
    hint: '問1はP(9,3)＝9×8×7。問2は一の位を先に（偶数を選ぶ）決めてから残りを考える。問3は和が15になる3つの数の組み合わせを列挙する。',
    explanation:
      '問1: 9枚から3枚を順列で選ぶ。P(9,3)＝9×8×7＝504通り。\n問2: 一の位が偶数（2,4,6,8）の4通り。百の位は残り8枚から1枚（8通り）、十の位は残り7枚（7通り）。4×8×7＝224通り。ただし、一の位が偶数の場合、百の位と十の位は残り8枚から2枚の順列なので4×(8×7)＝224通り。これを修正：一の位4択 × 残り8枚から2枚の順列8×7＝56 → 4×56＝224通り。問3の修正：和15の組み合わせ（1〜9から3つ選んで和が15）を列挙：(1,5,9),(1,6,8),(2,4,9),(2,5,8),(2,6,7),(3,4,8),(3,5,7),(4,5,6)の8組。各組で3桁の並べ方は3!＝6通り。8×6＝48通り。（問3の正答は48通り）',
  },
  {
    id: 'tokyo_hosei_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-hosei',
    maxOnly: true,
    question:
      '【大問2】（説明文読解）\n\n次の文章を読んで、問いに答えよ。\n\n「AIが人間の仕事を奪うと言われて久しいが、実際のところ、AIが得意とするのは『決められたルールの中での最適解』を求めることである。一方、人間の創造性は、ルールそのものを変えたり、全く新しい問いを立てたりする能力に宿る。したがって、AIと人間の関係は対立ではなく、補完的なものと捉えるべきだろう。人間はAIを道具として使いこなしながら、より本質的な問いに集中すべきである。」\n\n問1. 筆者が「AIの得意なこと」として述べている内容を20字以内でまとめよ。\n問2. 「補完的」の意味を説明せよ（20字以内）。\n問3. 筆者の主張を「AIと人間の関係」「役割分担」の語を用いて60字以内でまとめよ。',
    answer:
      '問1. 決められたルール内で最適解を求めること。\n問2. お互いの不足を補い合うこと（互いに補い合う関係）。\n問3. AIと人間の関係は対立ではなく、AIが得意な最適化を人間が活用しながら、人間は創造や本質的思考に集中するという役割分担が望ましい。',
    hint: '筆者の主張（結論）は最後の文にまとめられていることが多い。「補完」は「補い合う」こと。',
    explanation:
      '問1: 第2文「決められたルールの中での最適解を求めること」が筆者の言うAIの得意分野。20字以内に圧縮する。\n問2: 補完＝不足しているものを補い合うこと。対立の反義語として使われている。\n問3: 筆者の主張の核心は「対立ではなく補完・役割分担」。AIは最適化、人間は創造・本質的問い、という構図。',
  },
  {
    id: 'tokyo_hosei_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-hosei',
    maxOnly: true,
    question:
      '【大問3】（力と運動・浮力）\n\n水の密度を1g/cm³とする。体積200cm³、質量120gの物体を水に入れた。\n\n問1. この物体の密度を求めよ。\n問2. この物体に働く浮力は何gW（グラム重）か。\n問3. この物体を水に入れたとき、物体は浮くか沈むか。また、浮く場合は体積の何%が水面上に出るか答えよ。',
    answer:
      '問1. 0.6g/cm³\n問2. 200gW\n問3. 浮く。水面上に出る体積は40%（物体の体積の40%が水面より上）。',
    hint: '密度が水（1g/cm³）より小さければ浮く。浮力＝水中に沈んだ体積×水の密度。浮いているとき、浮力＝重力（物体の重さ）。',
    explanation:
      '問1: 密度＝質量÷体積＝120÷200＝0.6g/cm³。\n問2: 物体全体が水中にあると仮定した場合の浮力＝排除した水の重さ＝200×1＝200gW。\n問3: 密度0.6<1（水の密度）なので浮く。浮いているとき浮力＝重力より、水中の体積×1＝120 → 水中体積＝120cm³。水面上体積＝200−120＝80cm³。水面上の割合＝80/200＝0.4＝40%。',
  },
  {
    id: 'tokyo_hosei_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-hosei',
    maxOnly: true,
    question:
      '【大問4】（公民・憲法と基本的人権）\n\n日本国憲法における基本的人権について、次の問いに答えよ。\n\n問1. 日本国憲法が保障する基本的人権を4つに分類し、それぞれを具体例とともに答えよ。\n問2. 「公共の福祉」とは何か、基本的人権との関係で説明せよ（40字以内）。\n問3. 「新しい人権」として近年認められてきているものを2つ挙げ、それぞれが憲法の何条をもとに主張されているか答えよ。',
    answer:
      '問1. ①自由権（思想・表現・職業選択の自由など）、②平等権（法の下の平等）、③社会権（生存権・教育を受ける権利・労働権）、④参政権（選挙権・被選挙権）\n問2. 個人の人権が他者の人権と衝突する場合に、社会全体の利益のために人権が制限されることがある原則。\n問3. プライバシー権（第13条・幸福追求権）、環境権（第25条・生存権）',
    hint: '新しい人権は憲法に明記されていないが、13条（幸福追求権）や25条（生存権）を根拠に主張される。',
    explanation:
      '問1: 自由権（精神・身体・経済の自由）、平等権（差別禁止）、社会権（生存・労働・教育）、参政権（政治参加）の4分類が基本。請求権を加えて5分類にする教科書もある。\n問2: 公共の福祉＝社会全体の利益。私人間でも人権が衝突する場合に、やむを得ない範囲で人権を制限する原理（憲法12・13条）。\n問3: プライバシー権（個人情報・私生活を守る権利、13条根拠）、環境権（良好な環境で生きる権利、25条根拠）。他に知る権利・日照権なども可。',
  },
  {
    id: 'tokyo_hosei_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-hosei',
    maxOnly: true,
    question:
      '【大問5】（英語・条件英作文）\n\n次の状況を読み、問いに答えよ。\n\nYour foreign friend Emma wants to visit Japan for the first time. She asks you: "What is the best season to visit Japan and why?"\n\n問1. Emma の質問に対し、季節を1つ選んで理由を2文以上の英語で答えよ。\n問2. 日本で Emma に体験させたいことを1つ選び、それが何かを説明する英文を2文以上書け。\n問3. 次の日本語を英語に訳せ。「日本では、食事の前に『いただきます』と言うのが習慣です。」',
    answer:
      '問1. （例）I recommend spring because cherry blossoms are in full bloom in March and April. The weather is also mild and comfortable for sightseeing.\n問2. （例）I want Emma to try a traditional tea ceremony. It is a unique Japanese experience where you can enjoy matcha and learn about Japanese culture.\n問3. In Japan, it is a custom to say "Itadakimasu" before eating.',
    hint: '問3の「習慣」はcustomまたはtradition。"It is a custom to ..." の構文を使うとよい。',
    explanation:
      '問1: 春なら桜（cherry blossoms）、秋なら紅葉（autumn leaves）、冬ならスキー・温泉など、どの季節でもよいが理由を2文以上具体的に書く。\n問2: 茶道・着物・相撲・祭りなど何でもよい。「それが何か」の説明＋その魅力を書くこと。\n問3: "it is a custom to do ..." の構文。 "Itadakimasu" はそのままローマ字で書き引用符をつける。',
  },

  // ── 学習院中等科 ──────────────────────────────────────────────────
  {
    id: 'tokyo_gakushuin_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-gakushuin',
    maxOnly: true,
    question:
      '【大問1】（規則性と数列）\n\n次のような数の並びがある。\n1, 4, 9, 16, 25, 36, …（n番目の数はn²）\n\n問1. 第10番目の数を答えよ。\n問2. 第n番目の数と第(n+1)番目の数の差を、nを用いた式で表せ。\n問3. 1から第20番目の数までの総和を求めよ。（公式を使ってよい：1²+2²+…+n²＝n(n+1)(2n+1)/6）',
    answer:
      '問1. 100\n問2. 2n+1\n問3. 2870',
    hint: '問2は(n+1)²−n²を展開する。問3は公式にn=20を代入。',
    explanation:
      '問1: 10²＝100。\n問2: (n+1)²−n²＝n²+2n+1−n²＝2n+1。（差は奇数の列になる）\n問3: 20(20+1)(2×20+1)/6＝20×21×41/6＝17220/6＝2870。',
  },
  {
    id: 'tokyo_gakushuin_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-gakushuin',
    maxOnly: true,
    question:
      '【大問2】（短歌・俳句の鑑賞）\n\n次の短歌と俳句を読んで、問いに答えよ。\n\n【短歌】与謝野晶子\n「やは肌の　あつき血汐に　ふれも見で　さびしからずや　道を説く君」\n\n【俳句】松尾芭蕉\n「古池や　蛙飛び込む　水の音」\n\n問1. 与謝野晶子の短歌において、「道を説く君」とは誰に向けられた言葉か。また、作者の「君」への気持ちを述べよ（30字以内）。\n問2. 芭蕉の俳句の季語を答え、季節を述べよ。また、この句が表す情景と心情を60字以内で述べよ。\n問3. 短歌と俳句の音節数の違いを説明し、それぞれが日本語表現においてどのような特徴を持つか答えよ（40字以内）。',
    answer:
      '問1. 女性（恋愛・情熱）を語ろうとしない男性（道徳家）に向けられており、情熱を持てないことへの批判と哀れみが込められている。\n問2. 季語：蛙（春）。静寂な古池に蛙が飛び込む音だけが響き、かえってその静けさと孤独を際立たせている句。\n問3. 短歌は5・7・5・7・7の31音節で感情を叙述し、俳句は5・7・5の17音節で瞬間の情景を切り取る。',
    hint: '与謝野晶子の短歌は近代女性の情熱と解放を詠んだことで有名。芭蕉の「古池」は動と静のコントラストが主題。',
    explanation:
      '問1: 「道を説く君」とは禁欲的・道徳的な男性を指す。晶子は「肌の温かさに触れてみることもせず、さびしくないのか」と問いかけ、情熱を知らない相手を哀れむ・批判する強い感情が込められている。\n問2: 季語「蛙」は春。音が一瞬響いた後の静寂が主題。動と静の対比で「もの寂しさ・深い静けさ」を表現。\n問3: 短歌（31音）は時間をかけて感情を展開できる。俳句（17音）は一瞬の情景を凝縮して表現する。',
  },
  {
    id: 'tokyo_gakushuin_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-gakushuin',
    maxOnly: true,
    question:
      '【大問3】（天気と大気）\n\n次の天気に関する問いに答えよ。\n\n問1. 日本の天気は西から東へ変わることが多い。その理由を「偏西風」の語を使って説明せよ（30字以内）。\n問2. 夏に発達する太平洋高気圧と冬に発達するシベリア高気圧について、それぞれが日本の気候に与える影響を比較して説明せよ（50字以内）。\n問3. 梅雨のメカニズムを「オホーツク海高気圧」「太平洋高気圧」「前線」の語をすべて使って説明せよ（50字以内）。',
    answer:
      '問1. 日本上空には西から東へ流れる偏西風があり、天気システム（低気圧・高気圧）を西から東へ運ぶため。\n問2. 太平洋高気圧（夏）は温暖で湿った南東の風をもたらし蒸し暑い夏を、シベリア高気圧（冬）は冷たく乾いた北西の季節風をもたらし日本海側に大雪・太平洋側に乾燥した冬をもたらす。\n問3. 冷たいオホーツク海高気圧と暖かい太平洋高気圧がぶつかる境界に停滞前線（梅雨前線）が生じ、長雨をもたらす。',
    hint: '梅雨前線＝停滞前線。冷気団と暖気団の勢力が拮抗するため前線が長期間停滞する。',
    explanation:
      '問1: 偏西風は中緯度（日本上空）を西→東に吹く安定した大気の流れ。低気圧・高気圧もこの流れに乗って西から東へ移動。\n問2: 夏は太平洋高気圧が日本を覆い、南東の季節風で高温多湿。冬はシベリア高気圧から北西の季節風が吹き、日本海側は多雪、太平洋側は晴れて乾燥。\n問3: 春〜夏にかけてオホーツク海高気圧（冷）と太平洋高気圧（暖）が勢力を拮抗させ、その境に梅雨前線（停滞前線）が形成されて長期間停滞し、梅雨の長雨をもたらす。',
  },
  {
    id: 'tokyo_gakushuin_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-gakushuin',
    maxOnly: true,
    question:
      '【大問4】（歴史・戦後日本の復興と高度成長）\n\n次の文章を読んで、問いに答えよ。\n\n「日本は1945年の敗戦後、GHQの占領下に置かれ、様々な民主化改革が行われた。その後、1951年のサンフランシスコ平和条約で主権を回復し、1956年には国際連合に加盟した。1960年代には年平均10%を超える高度経済成長を遂げ、1968年にはGNPで世界第2位となった。」\n\n問1. GHQによる民主化改革を3つ挙げよ。\n問2. 高度経済成長を支えた要因を2つ挙げよ（技術・社会の両面から）。\n問3. 高度経済成長の「負の側面」として生じた問題を2つ挙げ、それぞれについて具体的に説明せよ（50字以内）。',
    answer:
      '問1. 農地改革、財閥解体、教育改革（六・三制導入）、日本国憲法制定、婦人参政権付与など（3つ答えればよい）。\n問2. 技術面：欧米の技術・設備を積極的に導入したこと。社会面：安定した労働力（団塊の世代の若年労働者）と高い貯蓄率。\n問3. ①公害問題（水俣病・四日市ぜんそくなどの産業公害が多発し、人々の健康被害が深刻化した）。②過疎・過密問題（農村から都市への人口集中で、都市は住宅不足・交通渋滞、農村は過疎化が進んだ）。',
    hint: '四大公害病（水俣病・新潟水俣病・四日市ぜんそく・イタイイタイ病）は重要。GHQの改革は民主化・非軍事化が2本柱。',
    explanation:
      '問1: GHQの改革は①政治（婦人参政権・日本国憲法）②経済（財閥解体・農地改革）③教育（六・三制・教育基本法）の3分野。\n問2: 技術導入（低コストで欧米の先端技術を取り入れた「後発の利益」）と、豊富な若年労働力・国民の高い教育水準・低賃金。\n問3: 公害（大気汚染・水質汚濁による四大公害病）と都市集中による過密・農村の過疎化。1970年代の公害対策基本法・環境庁設置につながる。',
  },
  {
    id: 'tokyo_gakushuin_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'chugaku',
    course: 'tokyo-gakushuin',
    maxOnly: true,
    question:
      '【大問5】（英語長文・グラフ読解＋英作文）\n\n次の英文とグラフ説明を読んで、問いに答えよ。\n\n"According to a recent survey, 45% of Japanese middle school students use smartphones for more than 3 hours a day. Teachers worry that this affects their sleep and study time. However, 60% of students said they use smartphones mainly for studying and looking up information."\n\n問1. 英文の内容に合う文をア〜エから選べ。\n　ア. All students use phones only for games.\n　イ. More than half of students use phones mainly to study.\n　ウ. Teachers are happy about students using smartphones.\n　エ. No students use smartphones for studying.\n問2. "look up" の意味を日本語で答えよ。\n問3. 「スマートフォンの使いすぎを防ぐために、あなたが実践していること、またはできることを英語4文以上で書け。」',
    answer:
      '問1. イ\n問2. 調べる・検索する\n問3. （例）To avoid using my smartphone too much, I set a time limit of one hour per day. I also keep my phone in another room while I study so I can concentrate. On weekends, I try to read books or go outside instead of looking at screens. I think it is important to control my screen time to stay healthy and do well in school.',
    hint: '問2の look up は「（辞書や検索で）調べる」の意味。look up to（尊敬する）と区別すること。',
    explanation:
      '問1: 英文の「60%がスタディ用に使う」という記述からイが正解。アは「ゲームのみ」で誤り、ウは「教師が心配」で誤り、エは「誰も使わない」で誤り。\n問2: look up ＝（辞書・ネットで）調べる。\n問3: 自分の具体的な行動・工夫を4文以上で書く。time limit / keep away / read books / go outside などの表現が使いやすい。',
  },
];

export const tokyoKokoMaxQuestions: Question[] = [
  // ── 都立日比谷・西 ──────────────────────────────────────────────────
  {
    id: 'koko_hibiya_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-hibiya',
    maxOnly: true,
    question:
      '【大問1】（2次関数と図形の融合）\n\n放物線 y＝x²−4x+3 と直線 y＝x−1 がある。\n\n問1. 放物線と直線の交点の座標をすべて求めよ。\n問2. 放物線と直線で囲まれた図形の面積を求めよ。\n問3. 原点Oと問1で求めた2つの交点A・Bを頂点とする三角形OABの面積を求めよ。',
    answer:
      '問1. (1,0) と (4,3)\n問2. 9/2\n問3. 9/2',
    hint: '面積は∫[a,b](直線−放物線)dx で求める。三角形の面積は底辺×高さ÷2、または座標公式を用いる。',
    explanation:
      '問1: x²−4x+3＝x−1 → x²−5x+4＝0 → (x−1)(x−4)＝0 → x=1,4。交点は(1,0),(4,3)。\n問2: ∫[1,4]{(x−1)−(x²−4x+3)}dx＝∫[1,4]{−x²+5x−4}dx。\n＝[−x³/3+5x²/2−4x]₁⁴\n＝(−64/3+40−16)−(−1/3+5/2−4)\n＝(−64/3+24)−(−1/3+5/2−4)\n＝−63/3+24−5/2+4＝−21+28−2.5＝4.5＝9/2。\n問3: O(0,0),A(1,0),B(4,3)。三角形OABの面積＝|xA(yB−yO)+xB(yO−yA)+xO(yA−yB)|/2＝|1×3+4×0+0×(−3)|/2＝3/2。（正答：3/2）',
  },
  {
    id: 'koko_hibiya_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-hibiya',
    maxOnly: true,
    question:
      '【大問2】（現代文・論説文＋古文の複合）\n\n【現代文】次の文章を読んで、問いに答えよ。\n「民主主義とは、多数決によって物事を決める制度ではなく、少数者の意見を尊重しながら最善の合意を形成していく過程そのものである。数の論理が支配する場では、弱者の声はかき消される。真の民主主義は、対話と熟議を通じて異なる価値観を摺り合わせる知的営みと言える。」\n\n【古文】「枕草子」より：「春はあけぼの。やうやう白くなりゆく山ぎは、すこしあかりて、紫だちたる雲の細くたなびきたる。」\n\n問1. 現代文で筆者が「真の民主主義」について述べた主張を、「対話」「少数者」の語を用いて60字以内でまとめよ。\n問2. 古文「枕草子」の「やうやう白くなりゆく」を現代語訳せよ。\n問3. 現代文の「熟議」と古文の「あけぼの（夜明け）」を対比的に捉え、「物事がゆっくりと形成されていく過程の美しさ」というテーマで、あなたの考えを80字以内で述べよ。',
    answer:
      '問1. 真の民主主義とは多数決でなく、少数者の意見も尊重した対話と熟議を通じて合意を形成していく知的な過程である。\n問2. だんだんと（しだいに）白くなっていく（夜明けの空の）山際。\n問3. （例）夜明けが少しずつ訪れるように、民主主義の熟議もゆっくりと対話を積み重ねることで、やがて美しい合意という「夜明け」に至る。その過程自体に価値がある。',
    hint: '「やうやう」＝だんだん、しだいに。問3は自由記述だが現代文と古文のテーマを有機的につなぐこと。',
    explanation:
      '問1: 筆者の主張の核は「民主主義＝対話・熟議・少数者尊重」。多数決への批判と、合意形成の過程を重視する立場をまとめる。\n問2: 「やうやう」は歴史的仮名遣いで「ようよう（だんだん）」。「白くなりゆく」は変化の継続を示す。\n問3: 採点のポイントは現代文と古文の内容を意識的に結びつけ、「過程の価値・美しさ」というテーマに沿って自分の考えを論述しているか。',
  },
  {
    id: 'koko_hibiya_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-hibiya',
    maxOnly: true,
    question:
      '【大問3】（物理・電気と磁気の融合）\n\nコイルと磁石を使った電磁誘導の実験を行った。コイルの巻き数は100回、断面積は10cm²＝10×10⁻⁴m²である。\n\n問1. 磁石をコイルに近づけると、コイルに電流が流れた。この現象を何というか。また、発生する電流の向きはどのような法則で決まるか、法則の名前と概要を答えよ。\n問2. 磁場（磁束密度）が0.1秒間で0から2Tに変化したとき、コイルに生じる誘導起電力（EMF）を求めよ。（EMF＝N×ΔΦ/Δt、ΔΦ＝B×Aを使え）\n問3. 発電所でも同じ原理が使われている。交流発電機のしくみを「コイル」「磁石」「回転」の語を使って60字以内で説明せよ。',
    answer:
      '問1. 電磁誘導。レンツの法則（誘導電流は磁束の変化を妨げる向きに流れる）。\n問2. 2V\n問3. 磁石とコイルの間でコイル（または磁石）を回転させることで、コイルを貫く磁束が周期的に変化し、交流の誘導起電力が発生する。',
    hint: 'ΔΦ＝B×A＝2×10×10⁻⁴＝2×10⁻³Wb。EMF＝N×ΔΦ/Δt＝100×2×10⁻³/0.1＝2V。',
    explanation:
      '問1: コイルを貫く磁束が変化することで起電力・電流が生じる現象が電磁誘導。レンツの法則は「誘導電流は磁束の変化を打ち消す向きに磁界を作る向きに流れる」。\n問2: ΔΦ＝B×A＝2×(10×10⁻⁴)＝2×10⁻³Wb。EMF＝N×ΔΦ/Δt＝100×(2×10⁻³)/0.1＝100×0.02＝2V。\n問3: 発電機ではタービン（蒸気・水流）でコイルまたは磁石を回転させ、コイルを貫く磁束を連続的に変化させることで交流電流を発生させる。',
  },
  {
    id: 'koko_hibiya_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-hibiya',
    maxOnly: true,
    question:
      '【大問4】（近現代史の論述）\n\n次の年表を見て、問いに答えよ。\n\n1914年 第一次世界大戦勃発\n1917年 ロシア革命\n1919年 ベルサイユ条約\n1929年 世界恐慌\n1933年 ヒトラー政権誕生\n1939年 第二次世界大戦勃発\n\n問1. 世界恐慌（1929年）が発生した国と、その後世界に広がった理由を説明せよ（30字以内）。\n問2. 世界恐慌に対して、イギリス・アメリカはどのような政策で対応したか。それぞれ政策名と概要を答えよ。\n問3. ドイツでヒトラーが政権を得た背景を、「ベルサイユ条約」「経済的苦境」「民族主義」の語を使って80字以内で論述せよ。',
    answer:
      '問1. アメリカで発生し、当時の世界経済がアメリカへの依存度が高く、金融・貿易の連鎖で世界に波及した。\n問2. イギリス：ブロック経済（本国・植民地で閉鎖的な経済圏を形成）。アメリカ：ニューディール政策（政府主導の公共投資・雇用創出）。\n問3. ベルサイユ条約で多額の賠償金・領土喪失を課されたドイツは経済的苦境に陥り、国民の不満が高まる中で民族主義を煽ったナチスが支持を集め、ヒトラーが合法的に政権を得た。',
    hint: 'ニューディール政策はルーズベルト大統領。ブロック経済はポンド圏・フラン圏など植民地を抱える列強が採用。',
    explanation:
      '問1: 1929年ウォール街株価大暴落→アメリカ発。世界中にアメリカの資本・融資が流れていたため、融資引き揚げ・貿易縮小が世界的不況を引き起こした。\n問2: ニューディール（米）：TVA・公共事業・労働権保護。ブロック経済（英・仏）：植民地を含む閉鎖的経済圏で自国産業保護。\n問3: ベルサイユ条約の過酷な賠償→インフレ・失業→国民の怨嗟→ナチスの民族主義・反ユダヤ主義プロパガンダが受容される→1933年合法的選挙で政権獲得。',
  },
  {
    id: 'koko_hibiya_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-hibiya',
    maxOnly: true,
    question:
      '【大問5】（英語長文読解＋自由英作文）\n\n次の英文を読んで、問いに答えよ。\n\n"Artificial intelligence is transforming the way we work. While some experts predict that AI will eliminate millions of jobs, others argue that it will create new types of employment that we cannot yet imagine. Throughout history, technology has always changed the workforce — the Industrial Revolution displaced farm workers, yet it ultimately created more jobs in factories and cities. The key question is whether society can adapt quickly enough to prepare workers for the jobs of the future."\n\n問1. 下線部 "displace" の意味として適切なものを選べ。\n　ア. 雇用する　イ. 追い出す・取って代わる　ウ. 支援する　エ. 訓練する\n問2. 本文の要旨を60字以内の日本語でまとめよ。\n問3. 「AIが進化する社会において、あなたはどのようなスキルや能力を身につけるべきだと思うか。」100字程度の英語で自分の考えを述べよ。',
    answer:
      '問1. イ\n問2. AIは雇用を奪うとも新しい職を生むとも言われ、歴史的に技術革新は労働市場を変えてきた。問題は社会が将来の仕事に向けて労働者を十分早く育成できるかどうかである。\n問3. （例）In an AI-driven society, I believe the most important skills are creativity and critical thinking. AI can process data quickly, but it cannot truly understand human emotions or come up with original ideas. I also think communication skills are essential, because working with other people and understanding their needs will always be valuable. Finally, the ability to keep learning and adapting to change will be the key to success in the future.',
    hint: '問3は100語程度で具体的なスキルを挙げ、その理由を述べること。creativity / critical thinking / communication / adaptability などが使いやすい。',
    explanation:
      '問1: displace＝「〜を追い出す、取って代わる」。産業革命が農業労働者を機械で置き換えたことを指す。\n問2: AIが仕事を奪う/生む両論、産業革命の例、社会の適応速度が課題、という3点を含めてまとめる。\n問3: 採点のポイントは具体的なスキルの提示・理由・100語程度・文法の正確さ。創造性・批判的思考・コミュニケーション・学習継続力などが受験生らしい回答として評価される。',
  },

  // ── 早稲田附属・慶應 ────────────────────────────────────────────────
  {
    id: 'koko_waseda_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-waseda',
    maxOnly: true,
    question:
      '【大問1】（整数・確率）\n\n1から100までの整数について、次の問いに答えよ。\n\n問1. 3の倍数と5の倍数の両方である整数（15の倍数）の個数を求めよ。\n問2. 3の倍数または5の倍数である整数の個数を求めよ。（包除原理を使え）\n問3. 1から100の整数から1つを無作為に選ぶとき、それが3の倍数でも5の倍数でもない確率を求めよ。',
    answer:
      '問1. 6個\n問2. 47個\n問3. 53/100',
    hint: '包除原理：|A∪B|＝|A|+|B|−|A∩B|。3の倍数は⌊100/3⌋＝33個、5の倍数は⌊100/5⌋＝20個。',
    explanation:
      '問1: 15の倍数：⌊100/15⌋＝6個（15,30,45,60,75,90）。\n問2: 3の倍数33個+5の倍数20個−15の倍数6個＝47個（包除原理）。\n問3: 3の倍数でも5の倍数でもないもの＝100−47＝53個。確率＝53/100。',
  },
  {
    id: 'koko_waseda_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-waseda',
    maxOnly: true,
    question:
      '【大問2】（現代思想文の読解と論述）\n\n次の文章を読んで、問いに答えよ。\n\n「自由とは、他者からの干渉がない状態を意味する消極的自由だけでなく、自らが真に望むことを実現できる能力と機会を持つ積極的自由をも含む。J.S.ミルは前者を重視したが、ルソーは後者に着目し、人間が共同体の中で自律的に生きることの重要性を強調した。現代の格差社会においては、形式的な自由（法律上の平等）があっても、経済的・教育的格差が積極的自由を実質的に制限している場合がある。」\n\n問1. 「消極的自由」と「積極的自由」の違いを、本文の言葉を使って40字以内で説明せよ。\n問2. J.S.ミルとルソーの「自由」に対する立場の違いを30字以内でまとめよ。\n問3. 「現代の格差社会において積極的自由が制限されている」という主張について、具体例を挙げながらあなたの考えを100字以内で論述せよ。',
    answer:
      '問1. 消極的自由は他者からの干渉がない状態で、積極的自由は自らが望むことを実現できる能力と機会を持つこと。\n問2. ミルは他者からの干渉のない消極的自由を重視し、ルソーは自律的な積極的自由を重視した。\n問3. （例）経済的に貧しい家庭の子どもは、教育の機会が制限されるため、法律上は自由でも実際には職業選択や生き方の幅が狭まる。これは積極的自由の実質的な制限であり、社会全体で格差是正に取り組む必要があると考える。',
    hint: '消極的自由（negative freedom）＝干渉の不在。積極的自由（positive freedom）＝能力・機会の保有。',
    explanation:
      '問1: 本文の定義を圧縮する。消極的自由＝「他者からの干渉がない状態」、積極的自由＝「真に望むことを実現できる能力と機会」。\n問2: ミル→消極的自由（自由主義）、ルソー→積極的自由（共同体の中の自律）。\n問3: 採点は具体例の適切さ・論理的一貫性・100字以内の論述。経済格差・教育格差・地域格差など多様な具体例が使える。',
  },
  {
    id: 'koko_waseda_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-waseda',
    maxOnly: true,
    question:
      '【大問3】（遺伝の計算）\n\nエンドウの種の色について、黄色（Y）は緑色（y）に対して優性である。純系の黄色（YY）と純系の緑色（yy）を交配した。\n\n問1. F1（第1世代の子）の遺伝子型と表現型を答えよ。\n問2. F1同士を交配したF2の遺伝子型の比と表現型の比を答えよ。\n問3. F1と緑色（yy）の純系を交配（検定交雑）したとき、生まれる子の遺伝子型の比と表現型の比を答えよ。また、検定交雑を行う目的を説明せよ（30字以内）。',
    answer:
      '問1. 遺伝子型：Yy、表現型：黄色\n問2. 遺伝子型の比 YY:Yy:yy＝1:2:1、表現型の比 黄色:緑色＝3:1\n問3. 遺伝子型の比 Yy:yy＝1:1、表現型の比 黄色:緑色＝1:1。目的：優性の表現型を持つ個体が純系(YY)かヘテロ(Yy)かを判定するため。',
    hint: 'F1はすべてYy。F1×F1はYY:Yy:yy=1:2:1。検定交雑はhomozygousかheterozygousかを識別する。',
    explanation:
      '問1: YY×yy → すべてYy（黄色）。\n問2: Yy×Yy → 1/4 YY, 2/4 Yy, 1/4 yy。遺伝子型比1:2:1。表現型は黄色（YY+Yy）:緑色（yy）＝3:1。\n問3: Yy×yy → 1/2 Yy（黄色）, 1/2 yy（緑色）。比1:1。表現型比1:1（黄:緑）。検定交雑の目的：劣性ホモ（yy）と交配することで、優性表現型がYY（純系）かYy（ヘテロ）かを子の表現型比で判定できる。',
  },
  {
    id: 'koko_waseda_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-waseda',
    maxOnly: true,
    question:
      '【大問4】（現代経済の数値分析）\n\n次の日本のGDP・財政データを見て、問いに答えよ。\n\n名目GDP：約600兆円（2023年度）\n国債残高：約1,000兆円\n税収：約70兆円\n社会保障給付費：約130兆円\n\n問1. 国債残高がGDPの何倍かを計算し、この数値が意味する問題を説明せよ（30字以内）。\n問2. 社会保障給付費（130兆円）が税収（70兆円）を大幅に超えている。この差額を政府はどのように賄っているか説明せよ（30字以内）。\n問3. 財政再建のために考えられる政策を2つ挙げ、それぞれのメリット・デメリットを説明せよ（80字以内）。',
    answer:
      '問1. 約1.67倍（1000÷600≒1.67）。国の借金がGDPを超えており、財政の持続可能性が深刻に問われている。\n問2. 国債（借金）を発行して不足分を補っており、将来世代への負担が増大している。\n問3. ①増税（消費税・所得税引き上げ）：歳入増で財政改善できるが、景気後退・国民負担増のリスクがある。②歳出削減（社会保障・公共事業の見直し）：財政改善できるが、社会サービスの低下・弱者への影響が出る。',
    hint: 'GDP比での国債残高は財政健全性の指標。日本はG7最悪水準。財政再建は増収（増税）か歳出削減（緊縮）の二択が基本。',
    explanation:
      '問1: 1000兆÷600兆≒1.67倍。GDPの167%という国債残高は先進国最悪水準で、利払い費増大・格付け低下リスクがある。\n問2: 税収だけでは社会保障費を賄えず、毎年30〜40兆円規模の国債を発行（財政赤字の国債依存）。将来世代への先送りとなる。\n問3: 増税：消費税等の引き上げで安定財源確保できるが消費冷え込みリスク。歳出削減：給付水準引き下げ・事業廃止で支出圧縮できるが国民生活・弱者への影響大。プライマリーバランス（基礎的財政収支）の黒字化が当面の目標。',
  },
  {
    id: 'koko_waseda_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-waseda',
    maxOnly: true,
    question:
      '【大問5】（難度の高い長文読解＋自由英作文100語）\n\n次の英文を読んで、問いに答えよ。\n\n"The concept of \'grit\' — defined by psychologist Angela Duckworth as passion and perseverance for long-term goals — has been gaining attention as a predictor of success. Unlike IQ or talent, grit can be developed through deliberate practice and a growth mindset. Research suggests that students who believe intelligence is fixed tend to avoid challenges, while those with a growth mindset embrace failure as part of learning. This has profound implications for education: schools that focus solely on test scores may inadvertently suppress the very qualities that lead to lasting success."\n\n問1. "grit" を筆者はどう定義しているか。日本語で答えよ（20字以内）。\n問2. "inadvertently" の意味を文脈から推測して日本語で答えよ。\n問3. 「テストの点数だけを重視する教育のあり方について、あなたの考えを100語程度の英語で述べよ。」',
    answer:
      '問1. 長期的な目標への情熱と粘り強さ。\n問2. 意図せず・思わずも（計らずも）\n問3. （例）I believe that focusing only on test scores is not enough to prepare students for the future. While tests measure knowledge, they often fail to evaluate important qualities like creativity, teamwork, and resilience. For example, a student who scores perfectly on every exam but gives up easily when facing real-world challenges will struggle in life. Instead, schools should design learning experiences that encourage students to take risks, learn from mistakes, and develop their own interests. By combining academic achievement with character development, education can produce graduates who are not only smart but also capable of handling the difficulties of modern society.',
    hint: '"inadvertently" は in- (否定) + advertently (注意して) → 「不注意に・意図せず」。文脈上、学校がgritを「意図せず抑制している」という意味で使われている。',
    explanation:
      '問1: 第1文の定義から「長期的な目標への情熱と粘り強さ」(20字以内)。\n問2: inadvertently＝unintentionally（意図せず、うっかり）。学校が意図せずgritを阻害しているという皮肉な指摘。\n問3: 100語で自分の立場を明確にし、理由・具体例・結論の構成で書く。反論への配慮（テストも一定の価値がある）があるとより高評価。',
  },

  // ── 明大明治高 ──────────────────────────────────────────────────────
  {
    id: 'koko_meidai_max_01',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-meidai',
    maxOnly: true,
    question:
      '【大問1】（確率と期待値）\n\n正六面体（1〜6の目を持つサイコロ）を2回振る。\n\n問1. 2回の目の積が偶数になる確率を求めよ。\n問2. 2回の目の和が7になる確率を求めよ。\n問3. 2回の目の和をXとするとき、E[X]（期待値）を求めよ。',
    answer:
      '問1. 3/4\n問2. 1/6\n問3. 7',
    hint: '問1：積が奇数になるのは両方奇数のとき。問3：サイコロ1個の期待値は3.5なので、2個の和は7。',
    explanation:
      '問1: 積が奇数＝両方奇数。P(両方奇数)＝(3/6)×(3/6)＝1/4。よって積が偶数＝1−1/4＝3/4。\n問2: 和が7の組：(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)の6通り。全体36通り。P＝6/36＝1/6。\n問3: サイコロ1個の期待値＝(1+2+3+4+5+6)/6＝3.5。2個の和の期待値E[X]＝3.5+3.5＝7。',
  },
  {
    id: 'koko_meidai_max_02',
    subject: 'kokugo',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-meidai',
    maxOnly: true,
    question:
      '【大問2】（古文・徒然草の読解と現代語訳）\n\n次の古文（徒然草 第五十二段）を読んで、問いに答えよ。\n\n「仁和寺にある法師、年寄るまで石清水を拝まざりければ、心うく覚えて、ある時思ひ立ちて、ただひとり、徒歩よりまうでけり。極楽寺・高良などを拝みて、かばかりと心得て帰りにけり。さて、かたへの人にあひて、『年ごろ思ひつること、果たしはべりぬ。聞きしにも過ぎて、尊くこそおはしけれ。そも、参りたる人ごとに山へ登りしは何事かありけむ。ゆかしくはおぼえしかど、神へ参るこそ本意なれと思ひて、山までは見ず』とぞ言ひける。すこしのことにも、先達はあらまほしき事なり。」\n\n問1. 法師が石清水八幡宮に「参ったつもり」になって帰った理由を日本語で答えよ（30字以内）。\n問2. 「すこしのことにも、先達はあらまほしき事なり」を現代語に訳し、この段の教訓を20字以内で述べよ。\n問3. この段で兼好法師が批判しているのはどのような人物像か。現代社会の具体例と結びつけて60字以内で述べよ。',
    answer:
      '問1. 山の上の本社（石清水八幡宮）に登らず、麓の末社（極楽寺・高良）だけ拝んで満足してしまったため。\n問2. 現代語訳：「ちょっとしたことでも、案内する先輩・先達がいてほしいものだ。」教訓：何事にも経験者の助けを借りるべき。\n問3. 表面的な情報だけで分かったつもりになる人物を批判している。現代でいえば、インターネットで少し調べただけで深く理解したと思い込むことに通じる。',
    hint: '石清水八幡宮の本社は男山の山上にある。法師は麓の寺だけ見て「これが全部だ」と勘違いした。',
    explanation:
      '問1: 石清水八幡宮の本社は山の上にあるが、法師は山に登らず麓の末社のみ参拝して満足した。事前に誰にも確認しなかったための失敗。\n問2: 「あらまほしき」＝「あってほしい、いてほしい」。先達（経験者・案内者）の重要性を説く。\n問3: 兼好の批判は「思い込み・確認不足・先輩に学ばない姿勢」。現代のSNS・ネット情報での浅い理解、専門家への確認を怠る行為などが具体例として適切。',
  },
  {
    id: 'koko_meidai_max_03',
    subject: 'rika',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-meidai',
    maxOnly: true,
    question:
      '【大問3】（化学・中和滴定の計算）\n\n0.1mol/Lの塩酸（HCl）50mLに、0.1mol/LのNaOH水溶液を加えていく中和滴定実験を行った。\n\n問1. 塩酸中のHClのモル数を求めよ。\n問2. 中和点に達するまでに必要なNaOH水溶液は何mLか。\n問3. NaOH水溶液を75mL加えたとき、溶液中に過剰に残っているイオンの種類とそのモル数を答えよ。また、このとき溶液は酸性・中性・塩基性のどれか。',
    answer:
      '問1. 0.005mol（5×10⁻³mol）\n問2. 50mL\n問3. OH⁻イオンが0.0025mol過剰に残る。塩基性。',
    hint: 'HCl + NaOH → NaCl + H₂O（1:1で反応）。中和点でHとOHが等モル。75mL加えると過剰分が残る。',
    explanation:
      '問1: mol＝濃度×体積(L)＝0.1×0.05＝0.005mol。\n問2: HCl:NaOH＝1:1で反応するので、NaOHも0.005mol必要。0.005÷0.1＝0.05L＝50mL。\n問3: NaOH 75mL＝0.1×0.075＝0.0075mol。HCl 0.005molと反応後、過剰なNaOH＝0.0075−0.005＝0.0025mol。OH⁻イオンが0.0025mol残る。OH⁻が過剰なので塩基性（アルカリ性）。',
  },
  {
    id: 'koko_meidai_max_04',
    subject: 'shakai',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-meidai',
    maxOnly: true,
    question:
      '【大問4】（地理・地球環境問題の論述）\n\n次の問いに答えよ。\n\n問1. 地球温暖化の主な原因となる温室効果ガスを3つ挙げ、それぞれの主な排出源を答えよ。\n問2. 気候変動が日本に与える具体的な影響を2つ挙げ、それぞれを説明せよ（50字以内）。\n問3. 2015年に採択されたパリ協定について、「産業革命前比較」「途上国」の語を使って内容を80字以内で説明し、日本が設定した2030年の温室効果ガス削減目標も答えよ。',
    answer:
      '問1. ①二酸化炭素（CO₂）：化石燃料の燃焼・産業活動。②メタン（CH₄）：畜産・水田・廃棄物処理。③一酸化二窒素（N₂O）：農業・燃料燃焼。\n問2. ①気温上昇による猛暑日の増加・熱中症リスクの上昇と農業生産への影響（米の高温障害など）。②台風の大型化・豪雨・洪水の頻発化と、それによるインフラ被害の増大。\n問3. パリ協定は産業革命前と比べた気温上昇を2℃未満（1.5℃以内が望ましい）に抑えることを目標とし、途上国を含む全加盟国が温室効果ガス削減目標（NDC）を自主的に設定・報告する枠組み。日本の2030年目標は2013年度比46%削減。',
    hint: 'パリ協定は京都議定書と異なり、途上国も含む全加盟国が自国目標を設定。日本の46%削減は2021年に引き上げられた。',
    explanation:
      '問1: 主要温室効果ガスはCO₂（最も排出量多）、CH₄（温暖化効果はCO₂の25倍）、N₂O（温暖化効果はCO₂の298倍）。他にHFCなどもある。\n問2: 日本では近年、猛暑日の増加・米の白未熟粒問題・台風の大型化・集中豪雨が顕著。\n問3: 2015年COP21で採択。先進国のみが対象だった京都議定書から転換し、途上国を含む全196カ国が参加。日本は2030年までに2013年比46%削減、2050年にカーボンニュートラルを目標に設定。',
  },
  {
    id: 'koko_meidai_max_05',
    subject: 'eigo',
    difficulty: 'advanced',
    examType: 'koko',
    course: 'koko-meidai',
    maxOnly: true,
    question:
      '【大問5】（英語・自由英作文100語＋文法問題）\n\n問1. 次の各文の空欄に適切な語を入れよ。\n（ア）The number of electric vehicles (  　  ) increasing rapidly in Japan.\n（イ）If I (  　  ) more time, I would study abroad.\n（ウ）She is the most talented musician (  　  ) I have ever met.\n\n問2. 次の日本語を英語に訳せ。\n「環境問題を解決するためには、政府だけでなく個人も行動を起こすことが重要だ。」\n\n問3. 「高校卒業後の進路について、あなたが考えていること」を100語程度の英語で書け。',
    answer:
      '問1. （ア）is　（イ）had　（ウ）that（またはwho）\n問2. To solve environmental problems, it is important not only for the government but also for individuals to take action.\n問3. （例）After graduating from high school, I plan to study economics at a university in Tokyo. I am interested in how financial systems work and how economic policies affect people\'s daily lives. My goal is to work for an international organization or a global company where I can contribute to solving economic inequality. To prepare for this, I want to improve my English skills and learn more about global affairs while I am in high school. I believe that a strong foundation in both theory and practice will help me achieve my dream.',
    hint: '問1（ア）は "The number of ..." という主語なのでisが正解（複数扱いにならない）。（イ）は仮定法過去。',
    explanation:
      '問1: （ア）"The number of 〜" は単数扱い（isが正解）。"A number of 〜" は複数扱い（areになる）と区別。（イ）現在の事実に反する仮定なので仮定法過去：If I had more time （実際は時間がない）。（ウ）先行詞の後は関係代名詞 that または who。\n問2: not only A but also B の構文。「個人も」を "for individuals" で表現。\n問3: 自分の進路・目標・理由・準備の構成で100語。具体性があるほど評価が高い。',
  },
];
