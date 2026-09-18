import type { Question } from './questions';

// ─── 都立日比谷・西レベル (偏差値70-73) ───────────────────────────────────────

export const tokyoHibiyaSansu: Question[] = [
  {
    id: 'koko_hibiya_sansu_01',
    subject: 'sansu',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（二次方程式の解と整数問題）

問1. 二次方程式 x²－5x＋6＝0 を解の公式を用いて解け。

問2. 連続する2つの整数を n と n＋1 としたとき、大きい方の2乗から小さい方の2乗を引いた差は常に奇数になることを証明せよ。

問3. 二次方程式 x²＋ax＋b＝0 の2つの解が x＝2 と x＝3 であるとき、a と b の値を求めよ。`,
    answer: '問1. x＝2, x＝3　問2. 証明（下記解説参照）　問3. a＝－5, b＝6',
    hint: '問2は n＋1 の2乗から n の2乗を展開して整理すると、奇数の定義（2k＋1型）につなげられる。',
    explanation: `■問1.
x²－5x＋6＝0 に解の公式 x＝(5±√(25－24))/2＝(5±1)/2 を代入。
x＝3 または x＝2。

■問2.
(n＋1)²－n²＝n²＋2n＋1－n²＝2n＋1。
2n は偶数なので 2n＋1 は奇数。よって差は常に奇数。（証明終）

■問3.
解と係数の関係より、2＋3＝－a → a＝－5。
2×3＝b → b＝6。`,
  },
  {
    id: 'koko_hibiya_sansu_02',
    subject: 'sansu',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '【大問2】（平面図形：三角形の合同証明と応用）\n\n問1. △ABC において ∠B＝∠C ならば AB＝AC であることを証明せよ。\n\n問2. 正三角形 △ABC の辺 BC を、C の側に延長した直線上に、CD＝BC となる点 D をとる。∠ACD と ∠ADB の大きさをそれぞれ求めよ。\n\n問3. AB＝AC＝5 cm、BC＝6 cm の二等辺三角形の面積を求めよ。',
    answer:
      '問1. 証明（解説参照）　問2. ∠ACD＝120°、∠ADB＝30°　問3. 12 cm²',
    hint:
      '問1は頂角Aから角の二等分線を引き、2つの三角形の合同を示す。問2は、まず∠ACDが∠ACBの補角であることに気づく。CA＝CDになるので二等辺三角形が使える。問3はBCの中点をMとして、AMを三平方の定理で求める。',
    explanation:
      '【問1：∠B＝∠C ならば AB＝AC の証明】\n∠A の二等分線をひき、BC との交点を M とする。\n△ABM と △ACM において、\n・AM は共通\n・∠BAM ＝ ∠CAM（二等分線だから）\n・∠ABM ＝ ∠ACM（仮定）\n1組の辺とその両はしの角がそれぞれ等しいので、\n・△ABM ≡ △ACM\n合同な図形の対応する辺は等しいので、AB ＝ AC（証明終わり）\n\nなぜ二等分線をひくのか。もとの三角形1つだけでは、辺の関係を導く手がかりがない。補助線で2つの三角形に分け、合同を示すのが、二等辺三角形の証明の型である。\n\n【問2：∠ACD と ∠ADB】\n\n【手順①：∠ACD を求める】B・C・D は一直線上に並んでいる。\n・正三角形なので ∠ACB ＝ 60°\n・一直線は180°なので、∠ACD ＝ 180° − 60° ＝ 120°\nとなり合う角を足すと180°になる関係を使う。\n\n【手順②：△ACD が二等辺三角形であることに気づく】\n・正三角形なので CA ＝ BC\n・条件より CD ＝ BC\n・よって CA ＝ CD\n△ACD は CA ＝ CD の二等辺三角形である。\n\n【手順③：底角を求める】\n・頂角 ∠ACD ＝ 120°\n・底角の2つぶんの合計 … 180° − 120° ＝ 60°\n・底角1つ … 60° ÷ 2 ＝ 30°\n・∠ADC ＝ 30°\n\n【手順④：∠ADB に直す】B・C・D は一直線上にあり、C は B と D の間にある。だから D から見ると、B の方向と C の方向は同じ向きである。\n・∠ADB ＝ ∠ADC ＝ 30°\n\n【確かめ】△ABD の内角を全部たすと180°になるか見る。\n・∠ABD ＝ 60°（正三角形の角）\n・∠ADB ＝ 30°\n・∠BAD ＝ 180° − 60° − 30° ＝ 90°\n・合計180°（○）\n∠BAD が直角になるのがこの図の特徴で、そのまま出題されることもある。\n\n【問3：二等辺三角形の面積】\n\n【手順①：頂点から底辺に垂線をひく】AB ＝ AC の二等辺三角形では、頂点Aから底辺BCにひいた垂線は、BCをちょうど2等分する。\n・M を BC の中点とすると BM ＝ 6 ÷ 2 ＝ 3cm\n\n【手順②：高さを三平方の定理で求める】△ABM は ∠AMB ＝ 90° の直角三角形である。\n・AM² ＝ AB² − BM² ＝ 5² − 3² ＝ 25 − 9 ＝ 16\n・AM ＝ 4cm\n3 : 4 : 5 の直角三角形である。よく出る組み合わせなので覚えておく。\n\n【手順③：面積】\n・6 × 4 ÷ 2 ＝ 12cm²\n\n【よくあるまちがい】斜めの辺5cmを高さとして 6 × 5 ÷ 2 ＝ 15cm² としてしまう。高さは底辺に垂直な長さである。',
  },
  {
    id: 'koko_hibiya_sansu_03',
    subject: 'sansu',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（一次関数と面積）

問1. 2直線 y＝2x＋3 と y＝－x＋9 の交点の座標を求めよ。

問2. 上の2直線と x 軸で囲まれた三角形の頂点の座標をすべて求めよ。

問3. その三角形の面積を求めよ。`,
    answer:
      '問1. (2, 7)　問2. (2, 7)・(−3/2, 0)・(9, 0)　問3. 147/4',
    hint: '問2では各直線と x 軸の交点（y＝0 のとき）を求める。面積は底辺を x 軸上の線分、高さを交点のy座標として計算する。',
    explanation:
      '【何を聞かれているか】y＝2x＋3 と y＝−x＋9 の交点、2直線とx軸が囲む三角形の頂点、その面積。\n【なぜその式なのか】交点は**連立**。x軸との交点は**y＝0**を代入。x軸上の2点を底辺にすると、**高さは交点のy座標**になる。\n【ステップ1】2x＋3＝−x＋9 → x＝2、y＝7。交点(2, 7)。\n【ステップ2】2x＋3＝0 → x＝−3/2。−x＋9＝0 → x＝9。頂点は (2, 7)、(−3/2, 0)、(9, 0)。\n【ステップ3】底辺＝9−(−3/2)＝21/2、高さ7。面積＝21/2×7÷2＝147/4。\n【答え】問1. (2, 7)　問2. (2, 7)・(−3/2, 0)・(9, 0)　問3. 147/4\n【確かめ】(2, 7)：2×2＋3＝7、−2＋9＝7。147/4＝36.75。\n【よくあるまちがい】底辺を9とする（原点からではなく**−3/2から**9まで）。',
  },
];

export const tokyoHibiyaKokugo: Question[] = [
  {
    id: 'koko_hibiya_kokugo_01',
    subject: 'kokugo',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（現代文：論説読解）

次の文章を読んで、後の問いに答えよ。

「人間は言語によって思考するのか、それとも思考が先にあって言語がそれを表現するのか。この問いは古くから哲学者たちを悩ませてきた。チョムスキーは生成文法理論を通じて、人間には生得的な言語習得装置（LAD）が備わっていると主張した。一方で、ヴィゴツキーは言語と思考は発達の過程で絡み合い、言語が思考を形成すると述べた。現代の認知科学はこの問いに対し、両者が相互に影響し合うという立場をとることが多い。」

問1. 傍線部「言語が思考を形成する」とはどういう意味か、60字以内で説明せよ。

問2. チョムスキーとヴィゴツキーの主張の違いを「生得」と「発達」という語を使って80字以内でまとめよ。

問3. 筆者は言語と思考の関係についてどのような立場をとっているか、本文から読み取って30字以内で答えよ。`,
    answer: '問1. 言葉を使うことで考えの枠組みが決まり、言語がなければ生まれなかった思考が言語によって可能になるということ。（58字）　問2. チョムスキーは言語能力が生得的に備わると主張し、ヴィゴツキーは発達の過程で言語と思考が絡み合い形成されると主張した。（57字）　問3. 言語と思考は相互に影響し合うという立場。（22字）',
    hint: '問1は「形成する」の主語が「言語」である点に注目する。問2はそれぞれの立場のキーワードを押さえる。問3は「現代の認知科学」の説明がそのまま筆者の立場のヒントになる。',
    explanation:
      '【何を聞かれているか】言語と思考の関係についての論説文を読んで、①「言語が思考を形成する」の意味②チョムスキーとヴィゴツキーの主張の違い③筆者の立場を答える。\n\n【なぜそうなるのか】問1は「形成する」の主語が「言語」である点に注目し、問2はそれぞれの立場のキーワード(生得・発達)を押さえ、問3は「現代の認知科学」の説明がそのまま筆者の立場のヒントになる。\n\n【ステップ1】「言語が思考を形成する」とは、言葉の有無や種類によって人の考え方の枠組みが規定され、言語を持つことで初めて可能になる思考があるということである。\n【ステップ2】チョムスキーは人間が生まれつき言語を習得する装置を持つ(生得的)と主張し、ヴィゴツキーは言語と思考が発達の過程で互いに絡み合い影響し合う(発達的)と主張した。筆者は「現代の認知科学は両者が相互に影響し合うという立場」に近い。\n\n【答え】問1. 言葉を使うことで考えの枠組みが決まり、言語がなければ生まれなかった思考が言語によって可能になるということ。（58字）　問2. チョムスキーは言語能力が生得的に備わると主張し、ヴィゴツキーは発達の過程で言語と思考が絡み合い形成されると主張した。（57字）　問3. 言語と思考は相互に影響し合うという立場。（22字）\n\n【確かめ】問3の答えを本文の最終文から見つけられているかを確認する。\n\n【よくあるまちがい】チョムスキーとヴィゴツキーの立場を逆に覚えてしまうまちがいがある。\n\n【ここが絶対】問2は「生得」と「発達」という語を必ず使ってまとめる。',
  },
  {
    id: 'koko_hibiya_kokugo_02',
    subject: 'kokugo',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問2】（古文：竹取物語・枕草子レベル）

次の古文を読んで、後の問いに答えよ。

「春はあけぼの。やうやう白くなりゆく山ぎは、少し明かりて、紫だちたる雲の細くたなびきたる。」（枕草子・第一段）

問1. 「やうやう」を現代語に訳せ。

問2. 傍線部「紫だちたる雲」はどのような雲か、20字以内で説明せよ。

問3. この文章の表現上の特徴として最も適切なものを次から選べ。
　ア. 体言止めを用いてテンポよく列挙している
　イ. 比喩を多用して情景を生き生きと描いている
　ウ. 倒置法を使って感動を強調している
　エ. 会話文を交えて臨場感を出している`,
    answer: '問1. だんだんと・しだいに　問2. 紫がかった色をした細長い雲（15字）　問3. ア',
    hint: '「やうやう」は頻出の古語。「紫だちたる」は「紫を帯びた」という意味。体言止め（名詞で文が終わること）に注目。',
    explanation:
      '【何を聞かれているか】枕草子「春はあけぼの…」を読んで、①「やうやう」の現代語訳②「紫だちたる雲」の説明③表現上の特徴を答える。\n\n【なぜそうなるのか】「やうやう」は頻出の古語であり、「紫だちたる」は「紫を帯びた」という意味である。\n\n【ステップ1】「やうやう」は「だんだんと・しだいに」という徐々に変化する様子を表す副詞であり、「紫だちたる雲」は紫色を帯びた細長い雲を表す。\n【ステップ2】「春はあけぼの。」「山ぎは、…。」「雲の…たる。」と体言(名詞・名詞相当語句)で文が終わる体言止めが使われ、テンポよく春の風景が列挙されている。\n\n【答え】問1. だんだんと・しだいに　問2. 紫がかった色をした細長い雲（15字）　問3. ア\n\n【確かめ】体言止めが使われている箇所を確認する。\n\n【よくあるまちがい】表現技法を比喩や倒置法と誤答してしまうまちがいがある。\n\n【ここが絶対】「たなびきたる」は横に細長くたなびいている様子を表す。',
  },
  {
    id: 'koko_hibiya_kokugo_03',
    subject: 'kokugo',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（語句・文法・表現）

問1. 次の語句の意味として正しいものを選べ。
　「逡巡（しゅんじゅん）する」
　ア. 素早く行動する　イ. ためらってなかなか決断できない　ウ. 慎重に準備する　エ. 繰り返し検討する

問2. 次の文の下線部の品詞を答えよ。
　「彼女は__静かに__本を読んでいた。」（「静かに」の品詞）

問3. 次の表現技法の名称を答えよ。
　「太陽がほほえんでいる。」`,
    answer: '問1. イ　問2. 副詞（または形容動詞の連用形）　問3. 擬人法',
    hint: '問2「静かに」は「静かだ」という形容動詞の連用形と捉える見方と、副詞と捉える見方がある。文脈では「読む」という動詞を修飾しているため副詞的働きをしている。問3は人でないものを人に見立てる表現技法。',
    explanation:
      '【何を聞かれているか】①「逡巡する」の意味②「静かに」の品詞③「太陽がほほえんでいる。」の表現技法を答える。\n\n【なぜそうなるのか】「逡巡」はためらってなかなか決断できない様子を表し、「静かに」は形容動詞の連用形であり用言を修飾する副詞的働きをする。\n\n【ステップ1】逡巡(しゅんじゅん)は「ためらって、なかなか前に進めない様子」を表す。\n【ステップ2】「静かに」は形容動詞「静かだ」の連用形で「読む」という動詞を修飾している。「太陽がほほえむ」は太陽(非人間)に人間の行為(ほほえむ)を当てはめているため擬人法である。\n\n【答え】問1. イ　問2. 副詞（または形容動詞の連用形）　問3. 擬人法\n\n【確かめ】擬人法が人でないものを人に見立てる技法であることを確認する。\n\n【よくあるまちがい】擬人法を比喩(直喩)と混同してしまうまちがいがある。\n\n【ここが絶対】「静かに」は文脈によって形容動詞の連用形とも副詞とも捉えられ、出題の意図によってどちらも正答になりうる。',
  },
];

export const tokyoHibiyaRika: Question[] = [
  {
    id: 'koko_hibiya_rika_01',
    pitfall:
      '運動エネルギー ½mv² と重力加速度 g は高校で習う内容で、高校入試には出ない。中学では「100gで1N」として仕事と位置エネルギーまで求める。',
    subject: 'rika',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '【高校先取り】【大問1】（力学：仕事とエネルギー保存）\n\n問1. 質量5kgの物体を地面から4m真上に持ち上げるのに必要な仕事を求めよ。ただし重力加速度は 10 m/s² とする。\n\n問2. 問1で持ち上げた物体が持つ位置エネルギーはいくらか。\n\n問3. この物体を4mの高さから静かに放したとき、地面に到達する直前の速さを求めよ（空気抵抗は無視する）。',
    answer: '問1. 200 J　問2. 200 J　問3. 約 8.9 m/s（√80 m/s）',
    hint: '仕事＝力×距離。位置エネルギー＝mgh。エネルギー保存則より位置エネルギー＝運動エネルギー。',
    explanation:
      '【何を聞かれているか】5kg を 4m 持ち上げる仕事、位置エネルギー、落下直前の速さ。\n【なぜその式なのか】持ち上げる力は重力と同じ 50N（5kg×10）。仕事＝力×距離で、それが**位置エネルギー**になる。落ちると全部**運動エネルギー ½mv²**（高校の式）に変わる。\n【ステップ1】問1：50×4＝200J。\n【ステップ2】問2：200J。\n【ステップ3】問3：½×5×v²＝200 → v²＝80 → v＝√80≈8.9m/s。\n【答え】問1 200J、問2 200J、問3 約8.9m/s\n【確かめ】v²＝2gh＝2×10×4＝80 で一致。\n【よくあるまちがい】v²＝80 を v＝80 にする。**平方根をとる**。',
  },
  {
    id: 'koko_hibiya_rika_02',
    pitfall:
      'mol 濃度は高校で習う内容で、高校入試には出ない。中学では「同じ濃さの酸とアルカリは、ちょうど中和する体積が比例する」で考える。',
    subject: 'rika',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '【高校先取り】【大問2】（化学：溶液の濃度と中和）\n\n問1. 10%の食塩水300gを20%の食塩水にするには、何gの水を蒸発させればよいか。\n\n問2. 0.1 mol/L の塩酸 200 mL を中性にするために必要な 0.1 mol/L の水酸化ナトリウム水溶液は何 mL か。\n\n問3. 中和反応の化学式（塩酸と水酸化ナトリウムの場合）を書け。',
    answer: '問1. 150 g　問2. 200 mL　問3. HCl＋NaOH → NaCl＋H₂O',
    hint: '問1：食塩の量は変わらないことを利用する。問2：中和では酸とアルカリのモル数が等しくなる。',
    explanation:
      '【何を聞かれているか】10%食塩水300gを20%にするのに蒸発させる水、塩酸200mLを中和する水酸化ナトリウム水溶液、中和の式。\n【なぜその式なのか】問1は**食塩の量が変わらない**ことを使う。問2は同じ濃さで1個と1個で反応するので**同じ体積**（mol は高校の内容）。\n【ステップ1】問1：食塩 300×0.1＝30g。20%なら溶液は 30÷0.2＝150g → 蒸発 300−150＝150g。\n【ステップ2】問2：HCl 0.1×0.2＝0.02mol → NaOH も 0.02mol → 0.02÷0.1＝0.2L＝200mL。\n【ステップ3】問3：HCl＋NaOH→NaCl＋H₂O。\n【答え】問1 150g、問2 200mL、問3 HCl＋NaOH→NaCl＋H₂O\n【確かめ】150g の20%＝30g で食塩は同じ。\n【よくあるまちがい】問1で「300gの半分を蒸発」と考えて正解に見えるが、根拠は**食塩30gが20%になる溶液の量**。',
  },
  {
    id: 'koko_hibiya_rika_03',
    subject: 'rika',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（生物：遺伝と生態系）

問1. エンドウの種の形について、丸（R）が優性、しわ（r）が劣性とする。RR × rr のF1の遺伝子型と表現型を答えよ。

問2. F1同士を交配して得たF2の表現型の比を答えよ。

問3. 食物連鎖「植物→草食動物→肉食動物」において、植物の個体数が急激に減少した場合、短期的に草食動物と肉食動物の個体数はどう変化するか。それぞれ答えよ。`,
    answer: '問1. 遺伝子型：Rr、表現型：丸　問2. 丸：しわ＝3：1　問3. 草食動物は減少、肉食動物も遅れて減少する',
    hint: '問1はメンデルの法則（優劣の法則）。問2は分離の法則からRR:Rr:rr=1:2:1、表現型比3:1。問3は食物連鎖の下位が減れば上位も連鎖して減少する。',
    explanation: `■問1.
RR（純系丸）× rr（純系しわ）→ 全て Rr。
Rは優性のため表現型は全て「丸」。

■問2.
F1（Rr）×F1（Rr）の子（F2）の遺伝子型比＝RR:Rr:rr＝1:2:1。
表現型比＝丸(RR＋Rr):しわ(rr)＝3:1。

■問3.
植物が減少 → 草食動物の食料不足 → 草食動物が減少。
草食動物が減少 → 肉食動物の食料不足 → 肉食動物も遅れて減少。
（最終的には新たな平衡へと移行する）`,
  },
];

export const tokyoHibiyaShakai: Question[] = [
  {
    id: 'koko_hibiya_shakai_01',
    subject: 'shakai',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（地理：世界の気候と農業統計）

問1. 次の気候区の特徴と主な農業をそれぞれ答えよ。
　(a) 熱帯雨林気候（Af）
　(b) 地中海性気候（Cs）
　(c) 冷帯（亜寒帯）気候（D）

問2. 小麦の主要輸出国上位3か国（2020年代）を答えよ。

問3. 熱帯地域で行われる「焼畑農業」の問題点を2つ挙げよ。`,
    answer: '問1. (a)年中高温多雨・天然ゴム・カカオなどのプランテーション農業 (b)夏乾燥・冬温暖湿潤・オリーブ・ぶどう・柑橘類 (c)短い夏・長い冬・小麦・ライ麦栽培・林業　問2. ロシア・アメリカ・カナダ（順不同）　問3. 森林破壊・土壌の急速な劣化',
    hint: '気候区の特徴は雨温図で判断できるようにしておく。焼畑は休耕期間を取れない場合に環境破壊につながる。',
    explanation:
      '【何を聞かれているか】3つの気候区の特徴と主な農業、小麦の主要輸出国、焼畑農業の問題点。\n【なぜそうなるのか】それぞれの気候（気温・降水量のパターン）に合わせて栽培できる作物が決まっており、小麦は広い平原を持つ国が主要な輸出国になっている。焼畑は森林を燃やして畑にするため休耕期間を十分取らないと環境を壊す。\n【ステップ1】(a)熱帯雨林気候（Af）＝年中高温多雨、天然ゴム・カカオなどのプランテーション農業。\n【ステップ2】(b)地中海性気候（Cs）＝夏乾燥・冬温暖湿潤、オリーブ・ぶどう・柑橘類。\n【ステップ3】(c)冷帯気候（D）＝短い夏・長い冬、小麦・ライ麦栽培・林業。\n【ステップ4】小麦の主要輸出国＝ロシア・アメリカ・カナダ（順不同）。焼畑の問題点＝森林破壊、土壌の急速な劣化。\n【答え】問1. (a)年中高温多雨・天然ゴム・カカオなどのプランテーション農業 (b)夏乾燥・冬温暖湿潤・オリーブ・ぶどう・柑橘類 (c)短い夏・長い冬・小麦・ライ麦栽培・林業　問2. ロシア・アメリカ・カナダ（順不同）　問3. 森林破壊・土壌の急速な劣化\n【確かめ】焼畑は十分な休耕期間を取れば持続可能だが、人口増加で休耕期間が短くなると環境破壊につながる。\n【よくあるまちがい】焼畑農業を常に環境破壊だと決めつける。**問題になるのは休耕期間が十分取れないとき**。\n【ここが絶対】「焼畑農業は休耕期間が十分あれば持続可能、短いと環境破壊になる」という条件付きの理解は世界地理の頻出テーマ。',
  },
  {
    id: 'koko_hibiya_shakai_02',
    subject: 'shakai',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問2】（近現代史：冷戦から現代）

問1. 次の出来事を年代順に並べ替えよ。
　ア. ベトナム戦争終結（アメリカ軍撤退）
　イ. マルタ会談（冷戦終結宣言）
　ウ. 朝鮮戦争勃発
　エ. キューバ危機

問2. 「ベルリンの壁」が崩壊した年を答えよ。また、その歴史的意義を50字以内で説明せよ。

問3. 冷戦期にアメリカとソ連が対立した主な原因として最も適切なものを選べ。
　ア. 資本主義と社会主義という体制の違い
　イ. 領土をめぐる直接的な紛争
　ウ. 宗教上の価値観の違い
　エ. 農業政策の方針の相違`,
    answer: '問1. ウ→エ→ア→イ　問2. 1989年。東西ドイツの分断の象徴が崩れ、翌年のドイツ統一と冷戦終結へつながった（40字）　問3. ア',
    hint: '朝鮮戦争は1950年、キューバ危機は1962年、ベトナム戦争終結は1975年、マルタ会談は1989年。',
    explanation:
      '【何を聞かれているか】冷戦から現代の4つの出来事を年代順に並べ、ベルリンの壁崩壊の年と意義、冷戦の対立の主な原因を答える。\n【なぜそうなるのか】東西の緊張が高まったり緩んだりをくり返しながら、最終的に東欧の変化と米ソ首脳会談を経て冷戦が終わっていった。\n【ステップ1】朝鮮戦争勃発（1950年）→キューバ危機（1962年）→ベトナム戦争終結（1975年）→マルタ会談（1989年）。\n【ステップ2】1989年11月、ベルリンの壁崩壊→東西分断の象徴が崩れ、翌年のドイツ統一・冷戦終結へつながった。\n【ステップ3】冷戦の主な原因＝資本主義と社会主義という体制のちがい。\n【答え】問1. ウ→エ→ア→イ　問2. 1989年。東西ドイツの分断の象徴が崩れ、翌年のドイツ統一と冷戦終結へつながった（40字）　問3. ア\n【確かめ】マルタ会談（1989年12月）はブッシュ米大統領とゴルバチョフ・ソ連書記長が地中海のマルタ島で行った。\n【よくあるまちがい】朝鮮戦争とキューバ危機の順番を逆にする。**朝鮮戦争が先（1950年）**。\n【ここが絶対】「1989年ベルリンの壁崩壊→1990年東西ドイツ統一→冷戦終結」の年号の流れは近現代史の最頻出テーマ。',
  },
  {
    id: 'koko_hibiya_shakai_03',
    subject: 'shakai',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（公民：経済・財政）

問1. GDP（国内総生産）とは何か、40字以内で説明せよ。

問2. 景気循環の4局面を順番に答えよ。

問3. 不景気（不況）のとき、日本銀行が行う金融政策を「金利」「国債」という語を使って80字以内で説明せよ。`,
    answer: '問1. 一定期間内に国内で生産されたすべての財とサービスの付加価値の合計（34字）　問2. 好況→後退→不況→回復　問3. 日本銀行は金利を下げ（金融緩和）、国債を市場から買い取ることで市中に資金を供給し、企業の借り入れを促して景気を刺激する（67字）',
    hint: 'GDPは「国内」「一定期間」「付加価値」がキーワード。景気循環は4段階。日銀の金融緩和は「金利低下→借りやすく→投資増加」の流れ。',
    explanation:
      '【何を聞かれているか】GDP（国内総生産）とは何か、景気循環の4局面、不景気のときに日本銀行が行う金融政策（金利・国債を使って）である。\n\n【なぜそうなるのか】GDPは一国内で生み出された経済活動の大きさを測る指標であり、景気は好況と不況を周期的にくり返すため、不況時には日銀が金利を下げ国債を買うことで市場に資金を供給し景気を刺激する。\n\n【ステップ1】GDP（Gross Domestic Product）は一国の国内で一定期間（通常1年）に生み出された付加価値の総額で、「国内」であるため外国人が日本で稼いだ分も含む（対してGNPは国民ベース）。景気循環は好況（拡張）→後退→不況（収縮）→回復の4段階をくり返す。\n\n【ステップ2】不況時の日銀の対応（金融緩和政策）は、政策金利を引き下げて銀行の貸出金利を低下させ企業・個人が借りやすくすることと、公開市場操作（国債の買いオペレーション）で市中に資金を供給し消費・投資を促進することである。\n\n【答え】問1. 一定期間内に国内で生産されたすべての財とサービスの付加価値の合計（34字）　問2. 好況→後退→不況→回復　問3. 日本銀行は金利を下げ（金融緩和）、国債を市場から買い取ることで市中に資金を供給し、企業の借り入れを促して景気を刺激する（67字）\n\n【確かめ】「GDP＝国内・一定期間・付加価値」の3要素を確認する。\n\n【よくあるまちがい】GDPとGNPを混同する。GDPは「国内」、GNPは「国民」が基準である。\n\n【ここが絶対】「GDPの定義と不況時の金融緩和政策」は公民の最頻出事項。',
  },
];

export const tokyoHibiyaEigo: Question[] = [
  {
    id: 'koko_hibiya_eigo_01',
    subject: 'eigo',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（長文読解300語・環境問題）

Read the following passage and answer the questions.

"Climate change is one of the most serious challenges facing humanity today. Scientists around the world agree that the Earth's average temperature has risen by about 1.1 degrees Celsius since the industrial revolution. This warming is primarily caused by the increase of greenhouse gases such as carbon dioxide and methane in the atmosphere, largely due to human activities like burning fossil fuels and deforestation.

The effects of climate change are already visible. Sea levels are rising, threatening low-lying coastal areas and island nations. Extreme weather events such as hurricanes, floods, and droughts are becoming more frequent and severe. Arctic ice is melting at an alarming rate, disrupting ecosystems that many species depend on.

However, there is still hope. Renewable energy sources like solar and wind power are becoming cheaper and more widely used. Many countries have pledged to reach carbon neutrality by 2050. Individual actions, such as reducing energy consumption and choosing sustainable products, also make a difference. The key is global cooperation — no single country can solve this problem alone."

Q1. According to the passage, what is the main cause of climate change?
Q2. Name TWO visible effects of climate change mentioned in the text.
Q3. What does "carbon neutrality" mean? (Answer in Japanese, 30字以内)
Q4. Find a word in the passage that means "the state of using natural resources in a way that does not harm the environment."
Q5. Do you think individual actions can effectively address climate change? Write ONE sentence giving your opinion.`,
    answer: 'Q1. The increase of greenhouse gases caused by human activities (burning fossil fuels and deforestation).　Q2. Rising sea levels / more frequent extreme weather events / melting Arctic ice (any two)　Q3. 排出する温室効果ガスの量と吸収量を等しくし、実質ゼロにすること（30字）　Q4. sustainable　Q5. (自由記述例) Yes, because small actions by many people can lead to big changes.',
    hint: 'Q1は"primarily caused by"の直後を探す。Q4は"sustainable"が「持続可能な」の意。Q5は自分の意見を1文で簡潔に。',
    explanation: `Q1: "primarily caused by the increase of greenhouse gases…largely due to human activities like burning fossil fuels and deforestation"

Q2: ① Sea levels are rising. ② Extreme weather events are becoming more frequent and severe. ③ Arctic ice is melting. (いずれか2つ)

Q3: カーボンニュートラルとは、CO₂などの排出量と吸収量を均衡させ、実質的な排出量をゼロにすること。

Q4: "sustainable" ─ 持続可能な（環境を損なわない方法で資源を利用すること）

Q5: 解答例：Yes, I believe individual actions matter because millions of small efforts combined can create significant change.`,
  },
  {
    id: 'koko_hibiya_eigo_02',
    subject: 'eigo',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問2】（文法・語法問題10問）

次の各文の（　）内から最も適切なものを選べ。

1. She ( has lived / lived / is living ) in Tokyo for ten years.
2. If I ( am / were / will be ) a bird, I could fly to you.
3. This is the book ( which / who / whom ) I bought yesterday.
4. He finished his homework ( before / until / by ) he went to bed.
5. The movie ( was made / made / has made ) in Hollywood last year.
6. ( Neither / Either / Both ) Tom and Jane are good at math.
7. I don't know ( where does he live / where he lives / where he lived ).
8. The more you practice, ( the more / the better / better ) you will become.
9. She is ( tallest / the tallest / taller ) student in her class.
10. ( Having finished / Finishing / Finish ) dinner, he went for a walk.`,
    answer: '1. has lived　2. were　3. which　4. before　5. was made　6. Both　7. where he lives　8. the better　9. the tallest　10. Having finished',
    hint: '2は仮定法過去（were）。7は間接疑問文は平叙文の語順。8は「the＋比較級…the＋比較級」。10は完了分詞構文。',
    explanation: `1. for ten years → 現在完了 has lived。
2. 仮定法過去（現実に反する仮定）→ were。
3. 先行詞が物（book）→ which。
4. 「寝る前に」→ before。
5. 映画は「作られた」→ 受動態 was made。
6. Tom と Jane の「両方とも」→ Both。
7. 間接疑問文は〈疑問詞＋S＋V〉の語順 → where he lives。
8. the＋比較級, the＋比較級 → the better。
9. クラスで一番 → 最上級 the tallest。
10. 主節より前の動作 → 完了分詞構文 Having finished。`,
  },
  {
    id: 'koko_hibiya_eigo_03',
    subject: 'eigo',
    course: 'koko-hibiya',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（英作文：自由英作文）

次のテーマについて、あなたの意見を30語以上の英語で述べよ。

テーマ：「学校でのスマートフォンの使用を禁止すべきか。」（Should smartphones be banned in schools?）

条件：
・自分の立場（賛成/反対）を明確にすること
・理由を少なくとも1つ挙げること
・30語以上で書くこと`,
    answer: '（解答例）I think smartphones should not be banned in schools. They are useful tools for learning, and students can quickly search for information they need. However, rules about when and how to use them are necessary to prevent distraction.',
    hint: 'I think / I believe / In my opinion で意見を述べ、because / since / for example で理由を続ける。反対意見に触れると評価が高まる。',
    explanation: `採点ポイント：
① 立場が明確（should / should not be banned）
② 理由が具体的（例：学習に役立つ、危険を知らせる緊急連絡ツール、等）
③ 30語以上の英文になっている
④ 文法・スペルのミスが少ない

高得点解答の例：
"I believe smartphones should be allowed in schools because they help students access information instantly and support self-directed learning. Of course, schools should set clear rules about usage to minimize distractions during class." (38 words)`,
  },
];

// ─── 早稲田大学附属・慶應義塾高レベル (偏差値72-75) ──────────────────────────

export const tokyoWasedaSansu: Question[] = [
  {
    id: 'koko_waseda_sansu_01',
    subject: 'sansu',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【高校先取り】【大問1】（場合の数・確率）

問1. A〜Eの5人から3人を選ぶ選び方は何通りか。

問2. その3人が円形のテーブルに座る並び方は何通りか。

問3. さいころを2個同時に投げるとき、出た目の和が8になる確率を求めよ。`,
    answer: '問1. 10通り　問2. 2通り　問3. 5/36',
    hint:
      '問1は「順に3人並べる数÷3人の並べ方の数」。問2は1人を固定して残り2人の並び方。問3は36通りから和が8になる組を数える。',
    explanation:
      '【何を聞かれているか】問1 5人から3人を選ぶ数、問2 3人が円卓に座る並び方、問3 さいころ2個の和が8の確率。\n【なぜその式なのか】問1：順に3人並べると 5×4×3＝60通りだが、選ぶだけなら同じ3人の並べ方（3×2×1＝6通り）だけ重なるので**60÷6**。問2：円卓は回転すると同じ並びになるので、**1人を固定して残りを並べる**。問3：36通りのうち和が8の組を数える。\n【ステップ1】問1：5×4×3÷(3×2×1)＝10通り。\n【ステップ2】問2：1人を固定、残り2人の並び方 2×1＝2通り。\n【ステップ3】問3：(2,6)(3,5)(4,4)(5,3)(6,2) の5通り。5/36。\n【答え】問1. 10通り　問2. 2通り　問3. 5/36\n【確かめ】問1は「選ばない2人を決める」5×4÷2＝10でも同じ。問2は3人を一列に並べる6通りを、回転で同じになる3つずつでわって2通り。\n【よくあるまちがい】問2で3×2×1＝6通りと答える。**回転して同じ座り方は1つ**に数える。高校では C(5,3)、(3−1)! と書く。',
    pitfall: '組み合わせの記号（C(n,r)・nCr）は高校で習う書き方で、高校入試には出ない。中学では「まず順番をつけてかけ算し、そのあと選んだ個数の並べ方でわって重なりを消す」と、言葉と式で数える。',
  },
  {
    id: 'koko_waseda_sansu_02',
    subject: 'sansu',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '【大問2】（空間図形と証明）\n\n問1. 底面が1辺4cmの正方形で高さが6cmの正四角錐の体積を求めよ。\n\n問2. 同じ正四角錐の底面の対角線の長さを求めよ。\n\n問3. 底面の正方形ABCDの対角線AC、BDの交点をOとするとき、AC⊥BD であることを、三角形の合同を使って証明せよ。',
    answer:
      '問1. 32 cm³　問2. 4√2 cm　問3. △ABO≡△ADO（3組の辺）より ∠AOB＝∠AOD＝90°',
    hint:
      '問1：四角錐の体積＝(1/3)×底面積×高さ。問2：正方形の対角線は1辺×√2。問3：正方形の対角線は互いに二等分するので、AO を共通辺として △ABO と △ADO の合同を示す。',
    explanation:
      '【何を聞かれているか】問1 正四角すいの体積、問2 底面の正方形の対角線、問3 対角線が直交することの証明。\n【なぜその式なのか】問1：すい体は**底面積×高さ÷3**。問2：正方形を対角線で切ると直角二等辺三角形なので三平方の定理。問3：正方形の対角線は**互いに二等分する**（平行四辺形の性質）ので BO＝DO、AB＝AD（正方形の辺）、AO共通で、△ABOと△ADOは**3組の辺**で合同。すると∠AOB＝∠AOD で、その和は180°なので両方90°。\n【ステップ1】問1：底面積16、体積＝(1/3)×16×6＝32。\n【ステップ2】問2：√(4²＋4²)＝√32＝4√2。\n【ステップ3】問3：AB＝AD、BO＝DO、AO＝AO → △ABO≡△ADO → ∠AOB＝∠AOD＝180°÷2＝90°。\n【答え】問1. 32cm³　問2. 4√2cm　問3. 上の証明により AC⊥BD\n【確かめ】問2は辺の比 1：1：√2 からも 4√2。問3は「ひし形の対角線は垂直に交わる」の性質と一致する（正方形はひし形でもある）。\n【よくあるまちがい】問1で÷3を忘れて96。**すい体は柱体の1/3**。',
  },
  {
    id: 'koko_waseda_sansu_03',
    subject: 'sansu',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【高校先取り】【大問3】（二次関数と面積の最大・最小）

問1. y＝x²－4x＋3 の頂点の座標を求めよ。

問2. この放物線と直線 y＝x－1 の交点を求めよ。

問3. 放物線と直線で囲まれた図形の面積を求めよ。`,
    answer: '問1. (2, -1)　問2. (1, 0) と (4, 3)　問3. 9/2',
    hint: '問1は平方完成。問2は連立方程式。問3は面積＝∫(上の曲線－下の曲線)dx、または面積公式 |a|/6×(β－α)³を使う。',
    explanation:
      '【何を聞かれているか】y＝x²−4x＋3 の頂点、直線 y＝x−1 との交点、囲まれた図形の面積。\n【なぜその式なのか】問1：**平方完成** (x−2)²−1 の形にすると頂点が読める。問2：交点は連立。問3：放物線と直線で囲まれた面積は中学の道具では出せないので、高校の**積分**（直線−放物線をxで積分）を使う。\n【ステップ1】y＝(x−2)²−1 → 頂点(2, −1)。\n【ステップ2】x²−4x＋3＝x−1 → x²−5x＋4＝0 → (x−1)(x−4)＝0 → (1, 0)、(4, 3)。\n【ステップ3】面積＝∫[1,4] {(x−1)−(x²−4x＋3)} dx＝∫[1,4] (−x²＋5x−4) dx＝[−x³/3＋5x²/2−4x] を1から4まで＝8/3−(−11/6)＝27/6＝9/2。\n【答え】問1. (2, −1)　問2. (1, 0) と (4, 3)　問3. 9/2\n【確かめ】放物線と直線で囲まれた面積の公式 (β−α)³/6＝(4−1)³/6＝27/6＝9/2 で一致する。\n【よくあるまちがい】頂点のy座標を −4＋3＝−1 ではなく 3 とする。**平方完成して定数項を整理**する。積分は高校の内容。',
    pitfall: '積分（∫）は高校で習う内容で、高校入試には出ない。中学では、放物線と直線で囲まれた図形の面積は、座標から三角形や台形に分けて求める。',
  },
];

export const tokyoWasedaKokugo: Question[] = [
  {
    id: 'koko_waseda_kokugo_01',
    subject: 'kokugo',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（複合読解：2つの文章比較）

次の2つの文章A・Bを読んで、後の問いに答えよ。

【文章A】
「教育の目的は、知識を蓄えることではなく、物事を考える力を育てることにある。知識はいつでも検索できる時代になったが、その情報が正しいかを判断し、応用する能力は機械には代替できない。」

【文章B】
「現代社会では、膨大な情報を素早く活用できる能力こそが重要だ。知識の習得と活用は切り離せない。基礎的な知識の蓄積があってこそ、思考力も機能する。」

問1. 文章AとBの共通している主張を30字以内で答えよ。

問2. 文章AとBが対立している点を50字以内で説明せよ。

問3. あなたはどちらの立場に近いか、理由を含めて60字以内で述べよ。`,
    answer: '問1. 思考力・情報活用能力が現代において重要である（24字）　問2. Aは知識より思考力を重視するのに対し、Bは知識の蓄積があってこそ思考力が機能すると主張し、知識と思考の関係が対立している（55字）　問3. （自由記述）',
    hint: '共通点は両者が「思考力・判断力」を重視している点。対立点は「知識」の位置づけ。問3は論旨が一貫していれば内容は自由。',
    explanation:
      '【何を聞かれているか】教育の目的についての2つの文章A・Bを読んで、①共通する主張②対立している点③自分の立場を答える。\n\n【なぜそうなるのか】共通点は両者が「思考力・判断力」を重視している点であり、対立点は「知識」の位置づけである。\n\n【ステップ1】AもBも「思考力・情報を活用する能力」が現代では重要だと述べており、その点が共通している。\n【ステップ2】Aは知識そのものより「考える力」が本質的だと考え、Bは知識と思考は不可分で知識の蓄積が思考力の前提になると考える点で対立している。\n\n【答え】問1. 思考力・情報活用能力が現代において重要である（24字）　問2. Aは知識より思考力を重視するのに対し、Bは知識の蓄積があってこそ思考力が機能すると主張し、知識と思考の関係が対立している（55字）　問3. （自由記述）\n\n【確かめ】問3の自由記述で立場が明確か、理由が根拠として機能しているかを確認する。\n\n【よくあるまちがい】A・Bどちらの主張も要約せずに一方だけ書いてしまうまちがいがある。\n\n【ここが絶対】採点基準は自分の立場が明確か・理由が根拠として機能しているか・字数以内かである。',
  },
  {
    id: 'koko_waseda_kokugo_02',
    subject: 'kokugo',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問2】（古典：漢文・古文混合）

【漢文】
「学而不思則罔、思而不学則殆。」（論語・為政篇）

問1. この漢文を書き下し文にせよ。

問2. この漢文の意味を現代語に訳せ（50字以内）。

【古文】
「月日は百代の過客にして、行きかふ年もまた旅人なり。」（奥の細道・冒頭）

問3. 「百代の過客」とはどういう意味か、20字以内で説明せよ。`,
    answer: '問1. 学びて思わざれば則ち罔し、思いて学ばざれば則ち殆し。　問2. 学んでも自分で考えなければ身につかず、考えるだけで学ばなければ危険である（40字）　問3. 永遠の旅人・時間は永遠に旅を続ける旅人のようなもの（25字）',
    hint: '漢文の返り点・送り仮名に従って書き下す。「罔」はむなしい、「殆」はあやうい。「百代の過客」は松尾芭蕉の比喩的表現。',
    explanation:
      '【何を聞かれているか】論語「学而不思則罔、思而不学則殆。」を①書き下し文にする②現代語訳する。奥の細道「月日は百代の過客にして…」の③「百代の過客」の意味を答える。\n\n【なぜそうなるのか】漢文の返り点・送り仮名に従って書き下し、「罔」はむなしい、「殆」はあやういという意味である。\n\n【ステップ1】「学而不思則罔」は「学びて思わざれば則ち罔し」、「思而不学則殆」は「思いて学ばざれば則ち殆し」と書き下す。\n【ステップ2】「百代」は永遠・非常に長い時間、「過客」は通り過ぎる旅人であり、「百代の過客」は永遠に流れ去り旅し続ける旅人のような存在(時間・月日の比喩)である。\n\n【答え】問1. 学びて思わざれば則ち罔し、思いて学ばざれば則ち殆し。　問2. 学んでも自分で考えなければ身につかず、考えるだけで学ばなければ危険である（40字）　問3. 永遠の旅人・時間は永遠に旅を続ける旅人のようなもの（25字）\n\n【確かめ】漢文の書き下し文が正しい語順になっているかを確認する。\n\n【よくあるまちがい】「百代の過客」を単なる「昔の旅人」と誤解してしまうまちがいがある。\n\n【ここが絶対】「百代の過客」は松尾芭蕉の比喩的表現である。',
  },
  {
    id: 'koko_waseda_kokugo_03',
    subject: 'kokugo',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（要約・論述記述）

次の文章を200字以内で要約せよ。

「グローバル化が進む現代社会において、多様な文化や価値観への理解は必須のスキルとなっている。しかし、異文化を学ぶことは単に外国語を習得することを意味しない。それぞれの文化が持つ歴史的背景・社会構造・宗教観・生活様式を深く理解しなければ、表面的な知識にとどまる。また、異文化理解は他者を理解するだけでなく、自文化を客観視する能力をも培う。自分たちの常識や価値観が普遍的なものではないと気づくことで、より柔軟で開かれた思考が生まれる。したがって、異文化理解教育は単なる教養の付与ではなく、グローバルな市民として生きる基盤を形成するものだと言える。」`,
    answer: '（解答例）グローバル化が進む現代では、異文化理解が不可欠だが、それは語学習得にとどまらず、各文化の歴史や価値観を深く知ることが必要だ。また異文化を学ぶことで自文化を客観視でき、柔軟な思考が育まれる。よって異文化理解教育はグローバル市民として生きる基盤となる。（122字）',
    hint: '要点：①異文化理解の必要性 ②語学以上の深い理解が必要 ③自文化の客観視という効果 ④グローバル市民の基盤。この4点を200字以内に収める。',
    explanation:
      '【何を聞かれているか】グローバル化と異文化理解についての文章を200字以内で要約する。\n\n【なぜそうなるのか】要約の手順は①各段落・各文の主張を1つに絞る②具体例や繰り返しは省略する③接続詞で論理的につなぐ④字数内に収めることである。\n\n【ステップ1】異文化理解は語学習得にとどまらず、各文化の歴史や価値観を深く知ることが必要であるという主張を確認する。\n【ステップ2】異文化を学ぶことで自文化を客観視でき柔軟な思考が育まれ、異文化理解教育はグローバル市民として生きる基盤となるという結論をまとめる。\n\n【答え】（解答例）グローバル化が進む現代では、異文化理解が不可欠だが、それは語学習得にとどまらず、各文化の歴史や価値観を深く知ることが必要だ。また異文化を学ぶことで自文化を客観視でき、柔軟な思考が育まれる。よって異文化理解教育はグローバル市民として生きる基盤となる。（122字）\n\n【確かめ】「異文化理解＝語学以上」「自文化客観視」「グローバル市民の基盤」の3点が含まれているかを確認する。\n\n【よくあるまちがい】自分の意見を要約に加えてしまうまちがいがある。\n\n【ここが絶対】筆者の主張を正確に反映し、自分の意見を加えないことが要約の原則である。',
  },
];

export const tokyoWasedaRika: Question[] = [
  {
    id: 'koko_waseda_rika_01',
    subject: 'rika',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（電流と磁場：複合実験）

問1. 磁場の中に置かれた電流が流れる導線に働く力の向きを決める法則の名前を答えよ。

問2. 図のような実験において、磁場の向きが北から南（N→S）で電流の向きが上から下（↓）のとき、導線が受ける力の向きを答えよ（東西南北で）。

問3. 電流の大きさを2倍、磁場の強さを3倍にしたとき、力の大きさは元の何倍になるか。`,
    answer: '問1. フレミングの左手の法則　問2. 東向き（または東方向）　問3. 6倍',
    hint: '問1はフレミングの左手の法則。左手の中指（電流）・人差し指（磁場）・親指（力）。問3は力∝電流×磁場の強さ。',
    explanation:
      '【何を聞かれているか】電流が磁界から受ける力の法則の名前、力の向き、電流・磁界を変えたときの力。\n【なぜその式なのか】**フレミングの左手の法則**：中指＝電流、人差し指＝磁界、親指＝力。力の大きさは**電流にも磁界の強さにも比例**する。\n【ステップ1】問1：フレミングの左手の法則。\n【ステップ2】問2：中指を下（電流）、人差し指を南（磁界）に向けると親指は東。\n【ステップ3】問3：2×3＝6倍。\n【答え】問1 フレミングの左手の法則、問2 東向き、問3 6倍\n【確かめ】電流か磁界のどちらか一方を逆にすると力は西向きになる。\n【よくあるまちがい】右手を使う。**力の向きは左手**（右手は発電）。',
  },
  {
    id: 'koko_waseda_rika_02',
    subject: 'rika',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問2】（化学計算：気体の発生と捕集）

問1. 塩酸（HCl）と亜鉛（Zn）が反応して水素（H₂）が発生する化学反応式を書け。

問2. 亜鉛6.5g（原子量65）を十分な量の塩酸と反応させたとき、標準状態（0℃・1気圧）で発生するH₂の体積を求めよ（標準状態1molの気体の体積は22.4L）。

問3. 発生した水素を水上置換で捕集するとき、最初に出てくる気体を集めない理由を答えよ。`,
    answer: '問1. Zn＋2HCl → ZnCl₂＋H₂　問2. 2.24 L　問3. 最初は試験管（装置）の中に残っていた空気が出てくるため',
    hint: '問2：Zn 1mol（65g）から H₂ 1mol が発生。6.5g は 0.1mol → H₂も 0.1mol → 0.1×22.4＝2.24L。',
    explanation: `■問1.
Zn＋2HCl → ZnCl₂＋H₂
亜鉛が塩酸に溶け、塩化亜鉛と水素が生じる。

■問2.
Zn のモル数＝6.5÷65＝0.1 mol。
反応式より Zn：H₂＝1：1なので H₂も 0.1 mol。
体積＝0.1×22.4＝2.24 L。

■問3.
実験開始時、試験管・ゴム管の内部には空気が残っている。
最初に出てくる気泡はこの空気（窒素・酸素混合）なので、純粋な水素を得るためには最初の気泡は捨てる必要がある。`,
  },
  {
    id: 'koko_waseda_rika_03',
    pitfall:
      '不完全優性は高校で習う内容で、高校入試には出ない。中学では顕性・潜性がはっきり分かれる遺伝（3：1）まで。',
    subject: 'rika',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question:
      '【高校先取り】【大問3】（遺伝の複合問題）\n\n問1. AA×aa の交配で得たF1の遺伝子型を答えよ（A が優性とする）。\n\n問2. F1同士の交配で生じるF2の遺伝子型の比を答えよ。\n\n問3. 花の色に関して、赤（R_）×白（W_）の中間として桃色（RW）を示す不完全優性の場合、赤×桃色の交配で生まれる子の表現型の比を答えよ。',
    answer: '問1. 全て Aa　問2. AA:Aa:aa＝1:2:1　問3. 赤:桃色＝1:1',
    hint: '問3：赤はRR、桃色はRW。RR×RW → RR（赤）とRW（桃色）が1:1。不完全優性では中間の表現型が現れる。',
    explanation:
      '【何を聞かれているか】AA×aa の子、その子どうしの孫の遺伝子の比、不完全優性での赤×桃色の子。\n【なぜその式なのか】生殖細胞には対の遺伝子が1つずつ入る。問3は**どちらも顕性でなく中間の色が出る**（不完全優性、高校の内容）ので、遺伝子の組み合わせがそのまま見た目になる。\n【ステップ1】問1：全部 Aa。\n【ステップ2】問2：AA：Aa：aa＝1：2：1。\n【ステップ3】問3：RR×RW → RR、RW、RR、RW → 赤：桃＝1：1。\n【答え】問1 Aa、問2 1：2：1、問3 赤：桃色＝1：1\n【確かめ】桃色×桃色なら 赤：桃：白＝1：2：1。\n【よくあるまちがい】問3で赤が顕性と思い全部赤にする。**中間の色が出る**。',
  },
];

export const tokyoWasedaShakai: Question[] = [
  {
    id: 'koko_waseda_shakai_01',
    subject: 'shakai',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（歴史的思考：史料読み取り）

次の史料を読んで、後の問いに答えよ。

【史料】
「一、農工商ノ賤業ニ就ク者ハ別段ノ御沙汰ニ任スヘシ。一、外国人ヲ殺傷スルハ重罪ニ付、一同固ク禁ス。一、開港場ニ於テ諸外国人ト売買取引スルニハ、別段ノ御沙汰ニ依ルヘシ。」（幕末期・布告の一節）

問1. この史料が出された時代背景を50字以内で述べよ。

問2. 「開港場」として有名な場所を2つ挙げよ。

問3. 明治政府が近代化を進めるために行った政策を「富国強兵」「殖産興業」を使って80字以内で説明せよ。`,
    answer: '問1. 幕末の開国後、外国人との摩擦や攘夷運動が起き、江戸幕府は外国人保護と秩序維持のため布告を出した（47字）　問2. 横浜・長崎（他に神戸・函館・新潟も可）　問3. 富国強兵は軍事力・経済力を強化して国力を増すこと、殖産興業は官営工場設立などで産業を育成し近代的産業基盤を作ること（60字）',
    hint: '史料の「外国人殺傷は重罪」という表現から攘夷運動が背景にあることがわかる。「開港場」は日米修好通商条約（1858年）で開かれた港。',
    explanation:
      '【何を聞かれているか】幕末期の布告の史料が出された時代背景、「開港場」として有名な場所を2つ、明治政府が近代化を進めるために行った政策（富国強兵・殖産興業）である。\n\n【なぜそうなるのか】1858年の日米修好通商条約以降に横浜・長崎などが開港し外国人が増えたことで攘夷派による外国人殺傷事件が続発したため、幕府は外国人保護と秩序維持のため布告を出した。\n\n【ステップ1】1858年の日米修好通商条約以降、横浜・長崎などが開港し外国人が増え攘夷派による外国人殺傷事件が続発したため、幕府はこれを抑えるため外国人保護の布告を出した。1858年の条約で開港した5港は横浜・長崎・神戸・函館・新潟で、最も有名なのは横浜と長崎である。\n\n【ステップ2】富国強兵は軍事力と経済力を強め欧米列強に対抗できる国家を建設する政策、殖産興業は政府主導で官営工場（富岡製糸場等）を設立し近代産業を育成する政策である。\n\n【答え】問1. 幕末の開国後、外国人との摩擦や攘夷運動が起き、江戸幕府は外国人保護と秩序維持のため布告を出した（47字）　問2. 横浜・長崎（他に神戸・函館・新潟も可）　問3. 富国強兵は軍事力・経済力を強化して国力を増すこと、殖産興業は官営工場設立などで産業を育成し近代的産業基盤を作ること（60字）\n\n【確かめ】「開港5港＝横浜・長崎・神戸・函館・新潟」を確認する。\n\n【よくあるまちがい】史料の「外国人殺傷は重罪」という表現から攘夷運動が背景にあることを見落とす。\n\n【ここが絶対】「開国後の攘夷運動と富国強兵・殖産興業」は歴史の最頻出事項。',
  },
  {
    id: 'koko_waseda_shakai_02',
    subject: 'shakai',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問2】（国際関係・外交）

問1. 国際連合の主要機関を3つ挙げ、それぞれの役割を簡潔に答えよ。

問2. 安全保障理事会の常任理事国5か国を答えよ。

問3. 「拒否権」とは何か、またその問題点を60字以内で説明せよ。`,
    answer: '問1. 総会（全加盟国が参加する最高審議機関）・安全保障理事会（国際平和と安全の維持）・国際司法裁判所（国家間の法的紛争を解決）　問2. アメリカ・ロシア・中国・イギリス・フランス　問3. 常任理事国の1か国でも反対すると決議できない制度。大国の利害が絡む問題では機能不全に陥るという問題がある（59字）',
    hint: '国連の6主要機関（総会・安保理・経済社会理事会・信託統治理事会・国際司法裁判所・事務局）。拒否権は P5（5大国）のみが持つ特権。',
    explanation:
      '【何を聞かれているか】国連の主要機関3つと役割、安保理常任理事国5か国、拒否権の内容と問題点。\n【なぜそうなるのか】国連は目的ごとに機関を分けて役割を持たせ、安保理では大国の一致がないと決定できないよう拒否権を設けているが、それが逆に大国自身が関わる問題では機能不全を招く。\n【ステップ1】総会（全加盟国参加、1国1票）・安全保障理事会（国際平和と安全の維持）・国際司法裁判所（国家間の法的紛争を解決）。\n【ステップ2】常任理事国＝アメリカ・ロシア・中国・イギリス・フランス。\n【ステップ3】拒否権＝常任理事国が1か国でも反対すると決議できない。問題点＝大国の利害が絡む問題では機能不全に陥る。\n【答え】問1. 総会（全加盟国が参加する最高審議機関）・安全保障理事会（国際平和と安全の維持）・国際司法裁判所（国家間の法的紛争を解決）　問2. アメリカ・ロシア・中国・イギリス・フランス　問3. 常任理事国の1か国でも反対すると決議できない制度。大国の利害が絡む問題では機能不全に陥るという問題がある（59字）\n【確かめ】常任理事国はP5とも呼ばれる。\n【よくあるまちがい】拒否権を過半数の反対で発動されると思う。**1か国の反対だけで否決される**。\n【ここが絶対】安保理常任理事国5か国（米・露・中・英・仏＝P5）とその拒否権は公民の最頻出事項。',
  },
  {
    id: 'koko_waseda_shakai_03',
    subject: 'shakai',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（現代経済：金融・為替）

問1. 「円高」とはどういう状態か、「1ドル＝150円」「1ドル＝120円」という例を使って説明せよ（40字以内）。

問2. 円高が日本の輸出企業に与える影響を説明せよ（50字以内）。

問3. 日本銀行の3つの主な役割（「三つの顔」）を答えよ。`,
    answer: '問1. 1ドル＝150円より1ドル＝120円の方が、より少ない円でドルと交換できるので円の価値が高い状態（41字）　問2. 輸出品をドルで売って円に換算すると受取額が減るため、輸出企業の収益が下がり競争力が低下する（45字）　問3. 発券銀行（紙幣の発行）・政府の銀行（国庫の管理）・銀行の銀行（市中銀行への貸出）',
    hint: '円高の判断：1ドルと交換するのに必要な円が少ない＝円の価値が高い。輸出企業はドル建てで売上、円に換算すると目減りする。',
    explanation:
      '【何を聞かれているか】「円高」とはどういう状態か、円高が日本の輸出企業に与える影響、日本銀行の3つの主な役割（「三つの顔」）である。\n\n【なぜそうなるのか】1ドルと交換するのに必要な円が少ないほど円の価値が高いと言え、円高になると輸出企業がドルで得た売上を円に換算したときの受取額が減ってしまう。\n\n【ステップ1】1ドル＝150円より1ドル＝120円のほうが、より少ない円でドルと交換できるので円の価値が高い状態（円高）である。円高になると輸出品をドルで売って円に換算した際の受取額が減るため、輸出企業の収益が下がり競争力が低下する。\n\n【ステップ2】日本銀行の3つの役割は、発券銀行（日本銀行券を独占的に発行する）、政府の銀行（国庫金を管理し国債の発行・引受を行う）、銀行の銀行（市中銀行に資金を貸し出す、金融調節の中枢）である。\n\n【答え】問1. 1ドル＝150円より1ドル＝120円の方が、より少ない円でドルと交換できるので円の価値が高い状態（41字）　問2. 輸出品をドルで売って円に換算すると受取額が減るため、輸出企業の収益が下がり競争力が低下する（45字）　問3. 発券銀行（紙幣の発行）・政府の銀行（国庫の管理）・銀行の銀行（市中銀行への貸出）\n\n【確かめ】「円高＝少ない円でドルと交換できる状態」を確認する。\n\n【よくあるまちがい】円高・円安の判断を逆にする。1ドルを得るのに必要な円が少ないほうが円高である。\n\n【ここが絶対】「円高の意味と日本銀行の3つの役割」は公民の最頻出事項。',
  },
];

export const tokyoWasedaEigo: Question[] = [
  {
    id: 'koko_waseda_eigo_01',
    subject: 'eigo',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問1】（難度の高い長文読解・400語）

Read the following passage and answer the questions.

"Artificial intelligence (AI) has transformed many aspects of modern life, from the way we communicate to how we access medical care. Machine learning algorithms can now diagnose diseases with accuracy rivaling that of experienced physicians, translate languages in real time, and even compose music. Yet these advances raise profound questions about the nature of intelligence, creativity, and what it means to be human.

One of the most debated issues surrounding AI is its impact on the job market. A 2023 report suggested that up to 40% of jobs could be significantly affected by AI automation within the next decade. Routine and repetitive tasks — data entry, basic customer service, and even some aspects of legal and financial analysis — are increasingly being handled by AI systems. While this creates efficiency, it also displaces workers who have built careers around these skills.

Proponents of AI argue that technological revolutions have always created more jobs than they eliminated. The Industrial Revolution displaced farm workers, yet factories absorbed millions. The digital revolution created entirely new industries. Similarly, AI may give rise to roles we cannot yet imagine — AI trainers, ethics officers, and human-AI collaboration specialists.

Critics, however, note a key difference: AI advances at an exponential rate, leaving workers less time to adapt. Moreover, the benefits of AI are unevenly distributed, concentrating wealth among technology companies and their shareholders while ordinary workers bear the costs of disruption.

Ultimately, the challenge is not whether AI will change society — it already has — but whether humans can shape that change to be equitable and beneficial. Education, retraining programs, and thoughtful regulation will be essential in ensuring that AI serves humanity rather than the other way around."

Q1. According to the passage, what percentage of jobs could be affected by AI within the next decade?
Q2. Name TWO examples of tasks that AI is increasingly handling, as mentioned in the passage.
Q3. What argument do "proponents of AI" make regarding job displacement? (Answer in Japanese, within 60字)
Q4. What is the "key difference" critics point out compared to previous technological revolutions? (Answer in Japanese, within 60字)
Q5. What does the author suggest is the ultimate challenge? (Answer in Japanese, within 50字)
Q6. Find a word or phrase from the passage that is closest in meaning to "happening at increasing speed and scale."`,
    answer: 'Q1. 40%　Q2. Data entry / basic customer service / legal and financial analysis (いずれか2つ)　Q3. 技術革命は常に消えた雇用より多くの雇用を生んできたのだから、AIも同様に新たな職種を生む（43字）　Q4. AIは指数関数的に速く進歩するため、労働者が適応する時間が少ない点（34字）　Q5. AI社会の変化を公平で有益なものにできるよう人間が主体的に形成できるかどうか（39字）　Q6. exponential（rate）',
    hint: 'Q1は数字をそのまま探す。Q3は"Proponents of AI argue that..."の段落。Q4は"Critics, however, note a key difference:"の直後。',
    explanation: `Q1: "up to 40% of jobs could be significantly affected"

Q2: data entry / basic customer service / legal and financial analysis（いずれか2つ）

Q3: 過去の産業革命・デジタル革命でも雇用は最終的に増えた実績があり、AIも新しい職種（AIトレーナー、倫理担当者等）を生むという主張。

Q4: AIは指数関数的に（急速に）進歩するため、労働者が新技術に適応する時間が以前の革命より大幅に短い。

Q5: AIが社会を変えることは既定路線で、問題はその変化を公平・有益なものに人間が形成できるかどうか。

Q6: "exponential"（指数関数的・加速度的に増大する）`,
  },
  {
    id: 'koko_waseda_eigo_02',
    subject: 'eigo',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問2】（自由英作文・意見論述50語以上）

次のテーマについて、あなたの意見を50語以上の英語で述べよ。

テーマ：「SNSは学生の学習に役立つか。」
（Are social networking services (SNS) helpful for students' learning?）

条件：
・賛成・反対どちらの立場でも可
・具体的な理由を2つ以上挙げること
・50語以上で書くこと`,
    answer: '（解答例）I believe SNS can be helpful for students\' learning when used appropriately. First, platforms like YouTube provide educational videos on various subjects, allowing students to learn at their own pace. Second, students can form study groups online, share notes, and motivate each other. However, students must be disciplined enough to avoid distractions such as entertainment content. With proper guidance, SNS can be a powerful learning tool. (68 words)',
    hint: '構成：意見表明(1文)→理由1(2文)→理由2(2文)→反論への対応または結論(1文)。First/Second/However などの接続詞を使うと構成が明確になる。',
    explanation: `採点ポイント：
① 立場が明確か（helpful / not helpful）
② 具体的な理由が2つ以上あるか
③ 50語以上あるか
④ 文法・スペルが概ね正確か

高評価のポイント：
・具体例（YouTube、特定のプラットフォーム等）を挙げる
・反論への言及がある（However, if misused...）
・多様な語彙・構文を使っている（関係代名詞、仮定法等）

減点要素：
・日本語的発想の直訳（be helpful for them to study → can help them study）
・スペルミスや主述の不一致`,
  },
  {
    id: 'koko_waseda_eigo_03',
    subject: 'eigo',
    course: 'koko-waseda',
    examType: 'koko',
    difficulty: 'advanced',
    maxOnly: true,
    question: `【大問3】（文法の精細知識）

次の各文の空所に最も適切な語（句）を入れよ。

1. If he ( ) harder last year, he could have passed the exam.
   ア. studies　イ. studied　ウ. had studied　エ. would study

2. She speaks French ( ) she were French herself.
   ア. as if　イ. so that　ウ. even if　エ. in case

3. The man ( ) I thought was honest turned out to be a liar.
   ア. which　イ. whom　ウ. who　エ. whose

4. Not until midnight ( ) he realize his mistake.
   ア. he did　イ. did he　ウ. does he　エ. he does

5. I have three sisters, ( ) of whom are doctors.
   ア. all　イ. every　ウ. each　エ. both`,
    answer: '1. ウ　2. ア　3. ウ　4. イ　5. ア',
    hint: '1は過去の事実に反する仮定＝仮定法過去完了（had＋過去分詞）。2は「まるで〜のように」＝as if。3は関係代名詞の非制限用法で主格→who。4は否定語句が文頭に出た場合の倒置（did＋S）。5は3人姉妹全員＝all of whom。',
    explanation: `1. 仮定法過去完了：過去の事実に反する仮定。
   "If ＋ S ＋ had p.p. …, S ＋ could/would have p.p."
   → had studied が正解。

2. "as if ＋ 仮定法"：「まるで〜であるかのように」。
   She speaks French as if she were French herself.

3. "The man who I thought was honest"：関係代名詞 who が主格。
   ※ "I thought" は挿入節（thought の目的語ではなく話者の評価）。

4. "Not until midnight did he realize…"：
   否定の副詞句（Not until）が文頭に出ると、後ろは疑問文の語順（倒置）。
   → did he realize。

5. "all of whom are doctors"：
   3人全員（三人とも）が医者 → all。
   both は2人のとき使う語。`,
  },
];

// ─── 明大明治・法政・中大附属レベル (偏差値64-68) ─────────────────────────────

export const tokyoMeidaiKokoSansu: Question[] = [
  {
    id: 'koko_meidai_sansu_01',
    subject: 'sansu',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問1】（方程式の応用：速さ・割合の文章題）

問1. A地点からB地点まで行くのに、時速4kmで歩くと時速6kmで歩くより30分多くかかる。A〜B間の距離を求めよ。

問2. ある商品を定価の2割引きで売ったら480円だった。この商品の定価を求めよ。

問3. 兄と弟の所持金の比は5:3で、兄が弟に200円渡すと比は3:2になった。兄の最初の所持金を求めよ。`,
    answer:
      '問1. 6 km　問2. 600円　問3. 5000円',
    hint: '問1：距離をxとして時間の差を方程式に。問2：定価×0.8＝480。問3：兄5k−200:弟3k+200＝3:2 を解く。',
    explanation:
      '【何を聞かれているか】問1 速さのちがいによる時間差から距離、問2 2割引きの売価から定価、問3 お金のやりとり後の比から最初の所持金。\n【なぜその式なのか】問1：時間＝距離÷速さ。**遅いほうの時間−速いほうの時間＝30分（1/2時間）**。問2：2割引きは定価×0.8。問3：比の1あたりをkとおくと兄5k・弟3k。渡したあとの (5k−200)：(3k＋200)＝3：2 を**内側の積＝外側の積**で解く。\n【ステップ1】問1：x/4−x/6＝1/2 → 3x−2x＝6 → x＝6km。\n【ステップ2】問2：0.8x＝480 → x＝600円。\n【ステップ3】問3：2(5k−200)＝3(3k＋200) → 10k−400＝9k＋600 → k＝1000 → 兄＝5k＝5000円。\n【答え】問1. 6km　問2. 600円　問3. 5000円\n【確かめ】問1：6÷4＝1.5時間、6÷6＝1時間、差30分。問3：兄5000−200＝4800、弟3000＋200＝3200、4800：3200＝3：2。\n【よくあるまちがい】問3で k＝1000 をそのまま兄の所持金にする。兄は**5k**。',
  },
  {
    id: 'koko_meidai_sansu_02',
    figureDescription:
      '放物線 y=x² と直線 y=2x+3 を同じ座標平面に重ねたグラフ。両者は点(−1,1)と(3,9)の2か所で交わり、その2点の間では放物線が直線より下側にあって、直線と放物線で囲まれた図形ができる。',
    subject: 'sansu',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question:
      '【大問2】（関数のグラフと図形）\n\n問1. y＝x² と y＝2x＋3 の交点を求めよ。\n問2. 問1で求めた2つの交点をA、Bとするとき、三角形OABの面積を求めよ（Oは原点とする）。\n問3. 放物線 y＝x² 上に、直線ABより下側で原点Oとは異なる点Pをとる。三角形PABの面積が三角形OABの面積と等しくなるとき、点Pの座標を求めよ。',
    answer:
      '問1. (－1, 1) と (3, 9)　問2. 6　問3. (2, 4)',
    hint:
      '問1は2つの式を連立して解く。問2は直線ABとy軸との交点をCとして、三角形を2つに分ける。問3は「底辺ABが共通なので、高さが同じなら面積も同じ」と考えて、原点Oを通りABに平行な直線をひく。',
    explanation:
      '【何を聞かれているか】\n放物線と直線の交点を求め、その2点と原点でできる三角形の面積を出し、さらに同じ面積になる点を放物線上でさがします。\n\n■問1　交点を求める\n\n【なぜ連立するのか】\n交点とは、2つのグラフが両方とも通る点のこと。つまり、その点の座標は2つの式のどちらにもあてはまります。だから2つの式を連立して解けば、交点のx座標が出ます。\n\n【ステップ1】yを消して、xだけの式にする。\nx² ＝ 2x＋3\n\n【ステップ2】右辺を左辺に移項して、＝0の形にする。\nx²－2x－3 ＝ 0\n\n【ステップ3】因数分解して解く。\nたして－2、かけて－3になる2数は －3 と ＋1。\n(x－3)(x＋1) ＝ 0\nx ＝ 3、x ＝ －1\n\n【ステップ4】それぞれのyを求める。y＝x² を使うと速い。\nx＝3 のとき y＝3²＝9\nx＝－1 のとき y＝(－1)²＝1\n\n【問1の答え】(－1, 1) と (3, 9)\n\n■問2　三角形OABの面積\n\n【どう分けるか】\n三角形OABは、どの辺もx軸・y軸にそっていないので、そのままでは底辺も高さも取りにくい形です。\nそこで、直線ABがy軸と交わる点Cを使って、三角形を2つに切り分けます。OCを共通の底辺にすれば、高さは各頂点のx座標そのものになり、一気に計算しやすくなります。\n\n【ステップ1】直線ABとy軸の交点Cを求める。\n直線は y＝2x＋3。x＝0 を代入して y＝3。\nC(0, 3)　よって OC＝3\n\n【ステップ2】OCを底辺として、三角形OACの面積を求める。\n高さは点Aのx座標のきょり。A(－1, 1) なので高さは1。\n3 × 1 ÷ 2 ＝ 1.5\n\n【ステップ3】同じくOCを底辺として、三角形OBCの面積を求める。\n高さは点Bのx座標のきょり。B(3, 9) なので高さは3。\n3 × 3 ÷ 2 ＝ 4.5\n\n【ステップ4】足し合わせる。\n1.5 ＋ 4.5 ＝ 6\n\n【問2の答え】6\n\n■問3　同じ面積になる点P\n\n【なぜ平行線を引くのか】\n三角形OABと三角形PABは、辺ABを共通の底辺にしています。\n三角形の面積は 底辺 × 高さ ÷ 2 なので、底辺が同じなら、高さが同じであれば面積も同じになります。\nここでの高さとは「ABからのきょり」のこと。ABからのきょりが原点Oと同じ点は、Oを通りABに平行な直線の上に、ぜんぶ並んでいます。\nこの考え方を等積変形といい、高校入試でとてもよく出ます。\n\n【ステップ1】原点Oを通り、直線ABに平行な直線を求める。\n平行なので傾きは同じ2。原点を通るので切片は0。\ny ＝ 2x\n\n【ステップ2】この直線と放物線の交点を求める。\nx² ＝ 2x\nx²－2x ＝ 0\nx(x－2) ＝ 0\nx ＝ 0、x ＝ 2\n\n【ステップ3】x＝0 は原点Oそのものなので、求める点は x＝2 のほう。\ny ＝ 2² ＝ 4\n\n【問3の答え】(2, 4)\n\n【確かめ】\n点P(2, 4)で三角形PABの面積を実際に計算してみます。\n直線ABとy軸の交点C(0, 3)を使い、Pから見て同じやり方で分けると\n三角形PAC：3 × 1 ÷ 2 ＝ 1.5（Aのx座標のきょり1）\n三角形PBC：3 × 3 ÷ 2 ＝ 4.5（Bのx座標のきょり3）\n… とはならず、Pが原点ではないので、ここは別のたしかめ方をします。\nOとPはどちらも直線 y＝2x の上にあり、この直線はABと平行です。平行な2直線のきょりはどこでも同じなので、OとPからABまでのきょりは等しくなります。底辺ABが共通で高さが等しいのだから、面積も等しい。これで確かめられます。\n\n【よくあるまちがい】\n・問2で、三角形をy軸で分けずに、無理に底辺と高さを取ろうとして行きづまる。y軸との交点で切り分けるのが定石です。\n・問3で x＝0 のほうを答えてしまう。それは原点Oそのもので、問題文が「Oとは異なる点」と断っています。\n・問3で、直線ABより上側にも同じ面積の点があることに気づかず混乱する。今回は問題文が「下側」と限定しているので、y＝2x のほうだけを考えます。',
    memoryTip:
      '底辺が共通な2つの三角形の面積が等しい ⇔ 頂点が、底辺に平行な同じ直線の上にある。これを等積変形といい、面積が等しい点をさがす問題はほぼこれで解ける。',
    pitfall: '問3は「面積が等しい＝底辺が同じなら高さが同じ」と読みかえるのが要点。座標をあてずっぽうに代入して面積を計算し直す方法では、なかなか見つからない。底辺ABが共通であることに気づいたら、すぐ平行線を引くこと。',
  },
  {
    id: 'koko_meidai_sansu_03',
    subject: 'sansu',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問3】（図形問題：三平方の定理と内接円）

問1. 3辺が3、4、5の直角三角形の面積を求めよ。

問2. この三角形の内接円の半径 r を求めよ。（公式：r ＝ 面積 ÷ 半周長）

問3. 直角三角形の直角をはさむ2辺が5と12のとき、斜辺の長さを求めよ。`,
    answer: '問1. 6 cm²　問2. r＝1 cm　問3. 13 cm',
    hint: '問1は底辺×高さ÷2（直角三角形は2辺が底辺と高さ）。問2は半周長＝(3＋4＋5)÷2＝6。問3は三平方の定理 c²＝5²＋12²。',
    explanation: `■問1.
直角三角形なので底辺3、高さ4として面積＝(1/2)×3×4＝6 cm²。

■問2.
半周長＝(3＋4＋5)÷2＝6。
内接円の半径 r ＝ 面積 ÷ 半周長 ＝ 6÷6 ＝ 1 cm。

■問3.
斜辺 c²＝5²＋12²＝25＋144＝169。
c＝√169＝13 cm。`,
  },
];

export const tokyoMeidaiKokoKokugo: Question[] = [
  {
    id: 'koko_meidai_kokugo_01',
    subject: 'kokugo',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問1】（現代文読解：随筆）

次の随筆の一節を読んで、後の問いに答えよ。

「子供のころ、よく祖父と夕暮れどきに散歩した。祖父はいつも黙ってゆっくり歩き、私もそれに合わせて歩いた。何も話さなくても、胸の中が温かく、ほっとした安らぎがあった。今にして思えば、あの沈黙こそが、言葉以上に深い絆を結んでいたのだと気づく。人は言葉を交わさなくても心が通じ合える瞬間がある。」

問1. 筆者が「沈黙こそが絆を結んでいた」と感じた理由を40字以内で答えよ。

問2. 「今にして思えば」という表現が示す筆者の立場（時間的状況）を説明せよ（20字以内）。

問3. この随筆の主題を20字以内でまとめよ。`,
    answer: '問1. 言葉がなくても祖父と一緒にいるだけで安らぎを感じ、深い信頼と親密さが生まれていたから（42字）　問2. 大人になった現在から子供時代を振り返っている（23字）　問3. 言葉を超えた沈黙の中に人と人の深い絆がある（22字）',
    hint: '問1は「何も話さなくても温かい」という感覚が絆の根拠。問2「今にして思えば」は現在の視点から過去を回顧する表現。問3は随筆全体が言いたいこと（テーマ）を凝縮する。',
    explanation:
      '【何を聞かれているか】祖父との散歩についての随筆を読んで、①「沈黙こそが絆を結んでいた」と感じた理由②「今にして思えば」が示す時間的状況③随筆の主題を答える。\n\n【なぜそうなるのか】問1は「何も話さなくても温かい」という感覚が絆の根拠であり、問2「今にして思えば」は現在の視点から過去を回顧する表現である。\n\n【ステップ1】祖父と黙って歩くだけで温かい安らぎがあったこと＝言葉なしでも心が満たされる体験をしていたことを確認する。\n【ステップ2】「今にして思えば」は現在の筆者が過去を回想している表現であり、随筆全体の主題は「言葉を交わさなくても心が通じ合える」ことである。\n\n【答え】問1. 言葉がなくても祖父と一緒にいるだけで安らぎを感じ、深い信頼と親密さが生まれていたから（42字）　問2. 大人になった現在から子供時代を振り返っている（23字）　問3. 言葉を超えた沈黙の中に人と人の深い絆がある（22字）\n\n【確かめ】随筆全体が言いたいこと(テーマ)を凝縮して答えられているかを確認する。\n\n【よくあるまちがい】問1で「安らぎがあった」という事実だけを書き、それが絆の証だという結論を書き落としてしまうまちがいがある。\n\n【ここが絶対】「今にして思えば」は現在の視点から過去を振り返る表現である。',
  },
  {
    id: 'koko_meidai_kokugo_02',
    subject: 'kokugo',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問2】（語彙・文法問題）

問1. 次の語句の意味として正しいものを選べ。
　「斟酌（しんしゃく）する」
　ア. 激しく批判する　イ. 相手の事情を考慮して手加減する　ウ. 不満を訴える　エ. 丁寧にお礼を述べる

問2. 次の文の敬語の使い方として正しいものを選べ。
　ア. 先生が「お帰りになられた」
　イ. 先生が「帰られた」
　ウ. 先生が「帰りました」
　エ. 先生が「お帰りしました」

問3. 「走る」の品詞と活用の種類を答えよ。`,
    answer: '問1. イ　問2. イ（または「お帰りになった」も正しい）　問3. 動詞・五段活用（ラ行五段活用）',
    hint: '問1「斟酌」は相手への配慮・手加減の意。問2「お帰りになられた」は二重敬語で不正解。問3「走る」はラ行五段活用動詞。',
    explanation:
      '【何を聞かれているか】①「斟酌する」の意味②敬語の使い方として正しいもの③「走る」の品詞と活用の種類を答える。\n\n【なぜそうなるのか】斟酌は相手の立場や事情を汲み取って言動を控えたり配慮したりすることであり、「お帰りになられた」は二重敬語で誤りである。\n\n【ステップ1】斟酌(しんしゃく)は「情状酌量」に近い意味である。\n【ステップ2】「お帰りになられた」は「お〜になる」＋「られる」の二重敬語で誤りであり、正しい尊敬語は「お帰りになった」または「帰られた」である。「走る」はラ行五段活用の動詞である。\n\n【答え】問1. イ　問2. イ（または「お帰りになった」も正しい）　問3. 動詞・五段活用（ラ行五段活用）\n\n【確かめ】二重敬語のパターンを確認する。\n\n【よくあるまちがい】「お帰りになられた」を正しい敬語だと誤答してしまうまちがいがある。\n\n【ここが絶対】「お〜になる」に「れる・られる」を重ねると二重敬語になる。',
  },
  {
    id: 'koko_meidai_kokugo_03',
    subject: 'kokugo',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問3】（作文：400字・意見文）

次のテーマについて、あなたの意見を400字程度で述べよ。

テーマ：「便利な社会の課題」

条件：
・自分の考えを明確に述べること
・具体例を1つ以上挙げること
・段落構成を意識すること（序論・本論・結論）
・400字程度（350〜450字）`,
    answer: '（採点基準・模範解答例）\n【序論】現代社会は技術の進歩により便利になった一方で、様々な課題も生じている。\n【本論】例えば、スマートフォンの普及により情報へのアクセスは容易になったが、同時に依存症やフェイクニュースの拡散という問題が生じている。また、宅配サービスの拡大は利便性を高めた反面、配達員の過重労働を招いている。便利さは常に誰かの負担や犠牲の上に成り立っていることを忘れてはならない。\n【結論】したがって、便利な社会の恩恵を享受しながらも、その裏にある課題に目を向け、技術と人間のバランスを考えることが現代に生きる私たちの責任だと考える。（約270字のサンプル。実際は400字を目指して展開する）',
    hint: '序論：課題を提起→本論：具体例で論証（例：SNS依存・宅配問題・AI失業・情報格差）→結論：自分の意見・提言。「便利さ」の反面に何が失われているかを考える。',
    explanation:
      '【何を聞かれているか】「便利な社会の課題」というテーマで、条件(意見明確、具体例1つ以上、序論・本論・結論、400字程度)に従って作文する。\n\n【なぜそうなるのか】序論で課題を提起し、本論で具体例により論証し、結論で自分の意見・提言を述べる構成である。\n\n【ステップ1】序論では現代社会は技術の進歩により便利になった一方で様々な課題も生じていることを提示する。\n【ステップ2】本論では具体例(スマートフォン依存、配達員の過重労働など)を挙げ、結論では便利さの裏にある課題に目を向け技術と人間のバランスを考えることを提言する。\n\n【答え】（採点基準・模範解答例）【序論】現代社会は技術の進歩により便利になった一方で、様々な課題も生じている。【本論】例えば、スマートフォンの普及により情報へのアクセスは容易になったが、同時に依存症やフェイクニュースの拡散という問題が生じている。また、宅配サービスの拡大は利便性を高めた反面、配達員の過重労働を招いている。便利さは常に誰かの負担や犠牲の上に成り立っていることを忘れてはならない。【結論】したがって、便利な社会の恩恵を享受しながらも、その裏にある課題に目を向け、技術と人間のバランスを考えることが現代に生きる私たちの責任だと考える。（約270字のサンプル。実際は400字を目指して展開する）\n\n【確かめ】具体例が抽象論に終わっていないかを確認する。\n\n【よくあるまちがい】具体例を挙げずに抽象論だけで終わらせてしまうまちがいがある。\n\n【ここが絶対】採点ポイントは意見の明確さ・具体例の的確さ・段落構成・字数・文法表記の正確さである。',
  },
];

export const tokyoMeidaiKokoRika: Question[] = [
  {
    id: 'koko_meidai_rika_01',
    subject: 'rika',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問1】（電気：電力と電力量）

問1. 100V・600Wのドライヤーを30分使ったとき、消費する電力量を求めよ（単位：Wh）。

問2. 1kWhの電気代を27円とした場合、この電力量の電気代を求めよ。

問3. このドライヤーに流れる電流の大きさを求めよ。`,
    answer: '問1. 300 Wh　問2. 8.1円　問3. 6 A',
    hint: '電力量(Wh)＝電力(W)×時間(h)。電気代＝電力量(kWh)×単価。電流＝電力÷電圧（I＝P/V）。',
    explanation:
      '【何を聞かれているか】600Wのドライヤーを30分使ったときの電力量・電気代・電流。\n【なぜその式なのか】電力量（Wh）＝**電力×時間（h）**。電気代は kWh 単位。電流は**電力÷電圧**。\n【ステップ1】問1：600×0.5＝300Wh。\n【ステップ2】問2：0.3kWh×27＝8.1円。\n【ステップ3】問3：600÷100＝6A。\n【答え】問1 300Wh、問2 8.1円、問3 6A\n【確かめ】抵抗は 100÷6≈16.7Ω。1時間なら600Wh＝16.2円。\n【よくあるまちがい】30分を30でかける。**0.5時間**。',
  },
  {
    id: 'koko_meidai_rika_02',
    subject: 'rika',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問2】（化学：酸化還元と気体の発生）

問1. 過酸化水素水（H₂O₂）に二酸化マンガン（MnO₂）を加えたときに発生する気体の名前と化学式を答えよ。

問2. 問1の反応でMnO₂の役割を答えよ。

問3. この気体の性質として正しいものを全て選べ。
　ア. 空気より重い
　イ. 無色無臭
　ウ. 水によく溶ける
　エ. 物が燃えるのを助ける（助燃性がある）
　オ. 水上置換で集める`,
    answer: '問1. 酸素・O₂　問2. 触媒（反応速度を速める・自身は変化しない）　問3. ア・イ・エ・オ',
    hint: '問1：H₂O₂の分解反応。問3：酸素は空気より少し重く（分子量32＞平均29）、無色無臭、水に溶けにくいため水上置換で集める。助燃性（燃焼を助ける）はある。',
    explanation: `■問1.
2H₂O₂ →（MnO₂触媒）→ 2H₂O＋O₂
発生する気体は酸素（O₂）。

■問2.
MnO₂は触媒として働く。反応の速度を速めるが、自身は反応の前後で変化しない。

■問3.
ア. 酸素の分子量は32。空気の平均分子量は約29なので酸素は空気より重い。○
イ. 酸素は無色無臭。○
ウ. 酸素は水に溶けにくい（少量は溶けるが「よく溶ける」は誤り）。×
エ. 酸素には助燃性（燃焼を助ける性質）がある。自身は燃えないが燃焼を支える。○
オ. 水に溶けにくいので水上置換で集める。○`,
  },
  {
    id: 'koko_meidai_rika_03',
    subject: 'rika',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問3】（生物：消化と血液循環）

問1. 次の消化酵素とそれが分解する栄養素の組み合わせを線で結べ（または答えよ）。
　アミラーゼ・ペプシン・リパーゼ
　タンパク質・デンプン・脂肪

問2. 小腸で吸収された栄養素は、脂肪（脂肪酸・モノグリセリド）を除き最初にどこへ運ばれるか答えよ。

問3. 血液の成分で「酸素を運ぶ」「止血に関わる」役割をそれぞれ持つものを答えよ。`,
    answer: '問1. アミラーゼ→デンプン、ペプシン→タンパク質、リパーゼ→脂肪　問2. 肝臓（門脈を通って）　問3. 酸素→赤血球（ヘモグロビン）、止血→血小板',
    hint: '問2：小腸の毛細血管→門脈→肝臓の順。脂肪はリンパ管を通るため肝臓には直接行かない。問3：赤血球はヘモグロビンで酸素運搬、血小板は血液凝固に関わる。',
    explanation:
      '【何を聞かれているか】酵素と栄養素の対応、吸収された養分の行き先、酸素運搬と止血の成分。\n【なぜその式なのか】三大栄養素は**専用の酵素**で分解される。ブドウ糖・アミノ酸は柔毛の毛細血管から**門脈を通って肝臓**へ。酸素は赤血球のヘモグロビン、止血は血小板。\n【ステップ1】問1：アミラーゼ→デンプン、ペプシン→タンパク質、リパーゼ→脂肪。\n【ステップ2】問2：肝臓（門脈を通って）。\n【ステップ3】問3：酸素→赤血球（ヘモグロビン）、止血→血小板。\n【答え】問1 アミラーゼ＝デンプン・ペプシン＝タンパク質・リパーゼ＝脂肪、問2 肝臓、問3 赤血球・血小板\n【確かめ】脂肪酸とモノグリセリドはリンパ管へ入る。\n【よくあるまちがい】アミラーゼをアミノ酸と結びつける。**アミラーゼはデンプン**。',
  },
];

export const tokyoMeidaiKokoShakai: Question[] = [
  {
    id: 'koko_meidai_shakai_01',
    figureDescription:
      '問2で用いる統計グラフ。工業地帯・工業地域別の工業出荷額（兆円）を比べた棒グラフ。',
    subject: 'shakai',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問1】（地理：統計グラフ読み取り）

問1. 次の説明に当てはまる都道府県を答えよ。
　「農業産出額が全国トップで、米・野菜・畜産すべてで高い生産量を誇る都道府県」

問2. 日本の工業地帯・工業地域のうち、「工業出荷額が最大」の地域を答えよ。

問3. 過疎地域で見られる人口問題を表す言葉を2つ挙げ、それぞれ30字以内で説明せよ。`,
    answer: '問1. 北海道　問2. 中京工業地帯（愛知県を中心とする）　問3. 少子化（子供が生まれる数が減り年少人口が減少すること）・高齢化（65歳以上の老年人口の割合が増大すること）',
    hint: '問1は農業産出額1位は北海道（米・野菜・乳製品・肉牛）。問2は自動車産業の中京工業地帯が出荷額1位。問3は過疎＋少子高齢化の組み合わせ。',
    explanation:
      '【何を聞かれているか】農業産出額が全国トップの都道府県、工業出荷額が最大の工業地帯、過疎地域で見られる人口問題を表す言葉を2つである。\n\n【なぜそうなるのか】北海道は広大な農地と多様な農業（米・野菜・畜産）を持つため産出額が全国トップになり、中京工業地帯はトヨタを中心とする自動車産業の集積で出荷額が日本最大になっている。\n\n【ステップ1】農業産出額1位は北海道で、乳製品・畜産・小麦・てんさいのほか野菜も多く生産される。中京工業地帯（愛知県・三重県・岐阜県）はトヨタを中心とする自動車産業が集積し、工業出荷額は日本最大である。\n\n【ステップ2】少子化は出生率の低下により子供の数が減り年少人口（0〜14歳）が少なくなること、高齢化は医療の進歩などで平均寿命が延び老年人口（65歳以上）の割合が増大することで、過疎地域では若年層が都市へ流出するためこの傾向が特に顕著である。\n\n【答え】問1. 北海道　問2. 中京工業地帯（愛知県を中心とする）　問3. 少子化（子供が生まれる数が減り年少人口が減少すること）・高齢化（65歳以上の老年人口の割合が増大すること）\n\n【確かめ】「農業産出額1位＝北海道」「工業出荷額1位＝中京工業地帯」を確認する。\n\n【よくあるまちがい】農業産出額1位を新潟県（米）だけで考える。実際は畜産・野菜も含めた総合で北海道が1位である。\n\n【ここが絶対】「北海道（農業産出額1位）と中京工業地帯（出荷額1位）」は地理の最頻出事項。',
  },
  {
    id: 'koko_meidai_shakai_02',
    subject: 'shakai',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問2】（近現代史：明治〜戦後）

問1. 次の出来事を年代順に並べ替えよ。
　ア. 太平洋戦争終結（1945年）
　イ. 大日本帝国憲法発布（1889年）
　ウ. 明治維新（1868年）
　エ. 日中戦争開始（1937年）

問2. 日本国憲法が施行された年を答えよ。また、大日本帝国憲法との最大の違いを50字以内で述べよ。

問3. 高度経済成長期（1950〜70年代）に起きた公害問題を1つ挙げ、その被害を説明せよ（40字以内）。`,
    answer: '問1. ウ→イ→エ→ア　問2. 1947年。大日本帝国憲法は天皇主権だったが、日本国憲法は国民主権・基本的人権の尊重・平和主義を基本原則とした（49字）　問3. 水俣病：工場廃水に含まれる有機水銀が魚介類を汚染し、食べた人に深刻な神経障害をもたらした（45字）',
    hint: '問1は明治維新（1868）→大日本帝国憲法（1889）→日中戦争（1937）→終戦（1945）の順。問2の日本国憲法は1946年公布・1947年施行。',
    explanation:
      '【何を聞かれているか】明治〜戦後の4つの出来事を年代順に並べ、日本国憲法施行年と明治憲法との最大の違い、高度経済成長期の公害問題を答える。\n【なぜそうなるのか】明治の近代化から始まり、憲法制定、戦争の拡大、そして戦後の新しい憲法へという大きな流れがあり、その後の急成長の裏で公害病が起きた。\n【ステップ1】明治維新（1868年）→大日本帝国憲法発布（1889年）→日中戦争開始（1937年）→太平洋戦争終結（1945年）。\n【ステップ2】日本国憲法は1947年施行、天皇主権から国民主権・基本的人権の尊重・平和主義へ。\n【ステップ3】水俣病＝チッソの有機水銀廃水が魚介類を汚染し、食べた人に神経障害をもたらした。\n【答え】問1. ウ→イ→エ→ア　問2. 1947年。大日本帝国憲法は天皇主権だったが、日本国憲法は国民主権・基本的人権の尊重・平和主義を基本原則とした（49字）　問3. 水俣病：工場廃水に含まれる有機水銀が魚介類を汚染し、食べた人に深刻な神経障害をもたらした（45字）\n【確かめ】日本国憲法は1946年11月3日公布、1947年5月3日施行。\n【よくあるまちがい】公布と施行の年を同じだと思う。**公布は1946年、施行は1947年**。\n【ここが絶対】「大日本帝国憲法＝天皇主権、日本国憲法＝国民主権」の対比と、公布・施行年のちがいは歴史・公民の最頻出テーマ。',
  },
  {
    id: 'koko_meidai_shakai_03',
    subject: 'shakai',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問3】（公民：三権分立と選挙）

問1. 三権分立の三権とは何か答えよ。また、それぞれを担う機関も合わせて答えよ。

問2. 衆議院と参議院の被選挙権（立候補できる年齢）をそれぞれ答えよ。

問3. 小選挙区制と比例代表制の違いを「死票」という言葉を使って80字以内で説明せよ。`,
    answer: '問1. 立法権（国会）・行政権（内閣）・司法権（裁判所）　問2. 衆議院：25歳以上、参議院：30歳以上　問3. 小選挙区制は1選挙区1名のため落選者への票（死票）が多くなる。比例代表制は得票率に応じて議席を配分するため死票が少ない（76字）',
    hint: '三権分立はモンテスキューが提唱。日本では国会・内閣・裁判所がそれぞれ抑制・均衡（チェックアンドバランス）している。',
    explanation:
      '【何を聞かれているか】三権分立の三権とそれぞれを担う機関、衆議院と参議院の被選挙権（立候補できる年齢）、小選挙区制と比例代表制の違い（「死票」という言葉を使って）である。\n\n【なぜそうなるのか】権力が一つの機関に集中すると濫用の危険があるため立法・行政・司法に分けて互いに監視させ、選挙制度は当選者の決め方によって死票の多さが変わる。\n\n【ステップ1】立法権（法律を作る権限）は国会、行政権（法律に基づき政治を行う）は内閣、司法権（裁判で法律を適用する）は裁判所が担い、三権は互いにチェックアンドバランス（抑制・均衡）の関係にある。衆議院の被選挙権は満25歳以上、参議院は満30歳以上である（選挙権はともに満18歳以上）。\n\n【ステップ2】小選挙区制は1選挙区から1人だけが当選するため落選候補者への票（死票）が多くなり大政党に有利であり、比例代表制は政党の得票率に応じて議席を配分するため死票が少なく少数政党も議席を得やすい。\n\n【答え】問1. 立法権（国会）・行政権（内閣）・司法権（裁判所）　問2. 衆議院：25歳以上、参議院：30歳以上　問3. 小選挙区制は1選挙区1名のため落選者への票（死票）が多くなる。比例代表制は得票率に応じて議席を配分するため死票が少ない（76字）\n\n【確かめ】「衆議院被選挙権＝25歳」「参議院被選挙権＝30歳」を確認する。\n\n【よくあるまちがい】選挙権年齢（18歳）と被選挙権年齢（衆院25歳・参院30歳）を混同する。\n\n【ここが絶対】「三権分立の担い手と小選挙区制・比例代表制の死票の違い」は公民の最頻出事項。',
  },
];

export const tokyoMeidaiKokoEigo: Question[] = [
  {
    id: 'koko_meidai_eigo_01',
    subject: 'eigo',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問1】（長文読解200語）

Read the following passage and answer the questions.

"Every year, millions of people around the world make New Year's resolutions. Common goals include losing weight, saving money, learning a new skill, or spending more time with family. However, studies show that fewer than 10% of people successfully keep their resolutions by the end of the year.

Why do so many resolutions fail? Experts suggest several reasons. First, people often set goals that are too large or vague — saying 'I want to get fit' is much harder to achieve than 'I will walk for 30 minutes every Monday, Wednesday, and Friday.' Second, motivation tends to drop after the initial excitement fades, usually within a few weeks. Third, people try to change too many things at once.

The key to success, experts say, is to start small, be specific, and celebrate small victories along the way."

Q1. What percentage of people keep their resolutions?
Q2. Give ONE reason why resolutions often fail, according to the passage.
Q3. What does the passage say is the key to success? (Answer in Japanese, within 40字)
Q4. What does "vague" mean? Choose the best answer.
   ア. specific　イ. unclear　ウ. difficult　エ. important`,
    answer: 'Q1. Fewer than 10%（10%未満）　Q2. Goals are too large or vague / motivation drops / people try to change too many things at once (いずれか1つ)　Q3. 小さく始め、具体的な目標を設定し、小さな成功を祝うこと（27字）　Q4. イ',
    hint: 'Q1は"fewer than 10%"を探す。Q3は最終段落にまとめられている。Q4 vague＝not specific（具体的でない・あいまいな）。',
    explanation: `Q1: "fewer than 10% of people successfully keep their resolutions"

Q2:
①目標が大きすぎる・曖昧すぎる（too large or vague）
②最初の興奮が冷めると意欲が下がる（motivation drops）
③一度に多くのことを変えようとする（too many things at once）

Q3: "start small, be specific, and celebrate small victories"
→ 小さく始め、具体的に設定し、小さな達成を喜ぶこと。

Q4: vague＝「不明確な・曖昧な」。反意語は specific（具体的な）。→ イ（unclear）が最も近い意味。`,
  },
  {
    id: 'koko_meidai_eigo_02',
    subject: 'eigo',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問2】（会話文の空所補充）

次の会話文の（　）に最も適切なものをア〜エから選べ。

A: Hi, are you ready for the math test tomorrow?
B: Not really. (　1　) Do you have any tips?
A: Well, I always review my notes the night before. (　2　)
B: That's a good idea. How long do you usually study?
A: About two hours. (　3　) If you study more than that, you might get tired.
B: I see. (　4　) Thanks for the advice!
A: Good luck!

1. ア. I've been studying all week.　イ. I'm a bit nervous.　ウ. I finished already.　エ. Math is my favorite.
2. ア. But I never do homework.　イ. It really helps me remember things.　ウ. I don't like studying.　エ. Tests are easy for me.
3. ア. That's too short.　イ. You should study longer.　ウ. Don't study at all.　エ. I think that's enough.
4. ア. I'll try that tonight.　イ. I hate math.　ウ. I'll skip the test.　エ. Let's give up.`,
    answer: '1. イ　2. イ　3. エ　4. ア',
    hint: '会話の流れを追う。1：テスト前でtipsを求める→少し緊張している。2：前夜にノートを見直すと言った後→それが役立つ。3：2時間で十分という文脈→「それで十分」。4：アドバイスを受けた後→「今夜やってみる」。',
    explanation: `1. B が「あまり準備できていない」と言い、アドバイスを求めている文脈。
   「少し緊張している（I'm a bit nervous.）」が最も自然。→ イ

2. A が「前夜にノートを見直す」と言った後の追加説明。
   「本当に覚えやすくなる（It really helps me remember things.）」が適切。→ イ

3. A が2時間勉強すると言い、「それ以上すると疲れる」と続けている文脈。
   「それで十分だと思う（I think that's enough.）」が自然。→ エ

4. A のアドバイスに感謝してお礼を言う直前の発言。
   「今夜それをやってみる（I'll try that tonight.）」が最も適切。→ ア`,
  },
  {
    id: 'koko_meidai_eigo_03',
    subject: 'eigo',
    course: 'koko-meidai',
    examType: 'koko',
    difficulty: 'advanced',
    question: `【大問3】（整序と英作文）

問1〜3：与えられた語句を並び替えて正しい英文を作れ（不要な語が1語ある）。

問1. [ is / this / one / the / most / of / books / interesting / very ] I have ever read.
問2. She [ knew / what / to / not / do / did / didn't ] in that situation.
問3. [ have / I / three / for / been / years / studying / since / English ].

問4. 次の日本語を30語程度の英語で表現せよ。
「環境問題を解決するために、私たちは毎日の生活の中で小さな努力を積み重ねることが大切だと思います。例えば、電気を節約したりゴミを減らしたりすることから始められます。」`,
    answer: '問1. This is one of the most interesting books I have ever read. （不要語: very）　問2. She didn\'t know what to do in that situation. （不要語: knew）　問3. I have been studying English for three years. （不要語: since）　問4. （解答例）I think it is important for us to make small efforts in our daily lives to solve environmental problems. For example, we can start by saving electricity and reducing waste.',
    hint: '問1は最上級の構文「one of the most ＋最上級＋複数名詞」。問2は「what to do」（何をすべきか）。問3は現在完了進行形「have been doing ＋ for ＋期間」。',
    explanation: `■問1.
"one of the most interesting books I have ever read"
→ This is one of the most interesting books I have ever read.
不要語：very（very と most は同時使用不可）。

■問2.
"didn't know what to do"（〜すべきことがわからなかった）
→ She didn't know what to do in that situation.
不要語：knew（過去形は didn't know の中に含まれる）。

■問3.
現在完了進行形＋期間 → "have been studying English for three years"
→ I have been studying English for three years.
不要語：since（since は起点、for は期間。"three years" は期間なので for を使う）。

■問4.
採点ポイント：
・「環境問題解決」「日常の小さな努力」「具体例（節電・ゴミ削減）」の3要素が含まれているか
・30語程度の分量
・文法・スペルが概ね正確か
解答例（約35語）:
"I think it is important for us to make small efforts every day to solve environmental problems. For example, we can save electricity and reduce garbage in our daily lives."`,
  },
];
