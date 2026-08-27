import type { Question } from './questions-meta';

// 中学2年生・数学（sansu）の新規オリジナル問題50問。
// 範囲：式の計算／連立方程式／一次関数／平行線と角／三角形の合同／
//       四角形の性質／確率／データの活用（箱ひげ図）
// すべて grade: 'j2'、examType: 'koko'。
export const gradeJ2SansuQuestions: Question[] = [
  // ───────────────────── 式の計算（式の乗除・文字式の利用・証明） #01-10 ─────────────────────
  {
    id: 'grade_j2_sansu_01',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '次の式を計算しなさい。\n3a × (−4b)',
    answer: '−12ab',
    hint: '係数どうし、文字どうしをそれぞれかけ合わせる。',
    explanation:
      '単項式の乗法は「係数×係数」と「文字×文字」に分けて計算する。係数は 3×(−4)＝−12。文字はa×b＝ab。これらをつなげて −12ab となる。',
    memoryTip: '符号は先に決めてしまうとミスが減る（＋×−＝−）。',
  },
  {
    id: 'grade_j2_sansu_02',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '次の式を計算しなさい。\n8x²y ÷ 4x',
    answer: '2xy',
    hint: '÷4xは×(1/4x)と考えて、分数の形にしてから約分する。',
    explanation:
      '8x²y ÷ 4x を分数の形にすると 8x²y/4x となる。係数は8÷4＝2。xについてはx²÷x＝x。yはそのまま残る。よって 2xy となる。',
    pitfall: 'x²÷xをx²のまま残してしまうミスに注意。指数は1つ減ってxになる。',
  },
  {
    id: 'grade_j2_sansu_03',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '次の式を展開しなさい。\n(x + 3)(x − 5)',
    answer: 'x² − 2x − 15',
    hint: '(x+a)(x+b) の展開公式 x²+(a+b)x+ab を使う。',
    explanation:
      '(x+a)(x+b)＝x²+(a+b)x+ab の公式を使う。ここではa＝3、b＝−5なので、x²の係数は1、xの係数はa+b＝3+(−5)＝−2、定数項はa×b＝3×(−5)＝−15。よって x²−2x−15 となる。',
    choices: ['x²−2x−15', 'x²+2x−15', 'x²−8x+15', 'x²−2x+15'],
  },
  {
    id: 'grade_j2_sansu_04',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の式を計算しなさい。\n12a²b ÷ 3a × 2b',
    answer: '8ab²',
    hint: '÷と×が混じった式は、左から順番に計算する。',
    explanation:
      '乗除だけの式は左から順に計算する。まず12a²b÷3a＝4ab。次にこれに2bをかけると、4ab×2b＝8ab²。よって答えは 8ab² となる。',
    pitfall: '÷3a×2bをまとめて÷(3a×2b)＝÷6abと計算してしまうミスが多い。÷と×は左から順に、である。',
  },
  {
    id: 'grade_j2_sansu_05',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    isWritten: true,
    question: '連続する3つの整数の和は、3の倍数になることを文字式を使って証明しなさい。',
    answer:
      '連続する3つの整数のうち、真ん中の整数をnとすると、3つの整数はn−1、n、n+1と表せる。\nこれらの和は (n−1)+n+(n+1)＝3n となり、3n＝3×n は3の倍数である。\nよって、連続する3つの整数の和は3の倍数になる。',
    hint: '真ん中の整数をnと置くと、残り2つはn−1とn+1で表せる。',
    explanation:
      '連続する整数は1ずつ増えていくので、真ん中の数をnとすると、その前の数はn−1、後の数はn+1と表せる。3つの数の和を計算すると (n−1)+n+(n+1)＝n−1+n+n+1＝3n。3nは「3×整数」の形になっているので、必ず3の倍数である。これで証明が完成する。',
    rubricPoints: [
      '真ん中の整数をnと置き、n−1、n+1で残り2数を表している',
      '3つの数の和を計算してn−1+n+n+1＝3nを導いている',
      '3nが3の倍数であることを理由に、結論を述べている',
    ],
  },
  {
    id: 'grade_j2_sansu_06',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の式を計算しなさい。\n2(x − 3) − (x + 4)(x − 1)',
    answer: '−x² − x − 2',
    hint: '先に(x+4)(x-1)を展開してから、かっこを外して整理する。',
    explanation:
      'まず(x+4)(x−1)を展開する。x²+(4+(−1))x+4×(−1)＝x²+3x−4。\n次に2(x−3)を計算すると2x−6。\nこれらを式にもどすと 2x−6−(x²+3x−4)。かっこを外すと符号がすべて反転して 2x−6−x²−3x+4。\n同類項をまとめると、x²の項は−x²、xの項は2x−3x＝−x、定数項は−6+4＝−2。\nよって −x²−x−2 となる。',
    pitfall: 'かっこの前が−のとき、かっこの中の符号をすべて反転させ忘れるミスに注意。',
  },
  {
    id: 'grade_j2_sansu_07',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question:
      '十の位の数がa、一の位の数がbである2桁の自然数がある。この数から、十の位と一の位を入れかえてできる数をひいた差は、9の倍数になることを証明しなさい。ただし、a＞bとする。',
    answer:
      'もとの2桁の数は10a+b、十の位と一の位を入れかえた数は10b+aと表せる。\nその差は (10a+b)−(10b+a)＝10a+b−10b−a＝9a−9b＝9(a−b)。\na、bは整数なので、a−bも整数であり、9(a−b)は9×整数の形になっている。\nよって、この差は9の倍数になる。',
    hint: '2桁の数は「10×十の位の数字＋一の位の数字」の形で表せる。',
    explanation:
      '十の位がa、一の位がbの2桁の自然数は10a+bと表せる（例：十の位3、一の位5なら10×3+5＝35）。入れかえた数は10b+a。差を計算すると (10a+b)−(10b+a)＝10a+b−10b−a。同類項をまとめるとaの項は10a−a＝9a、bの項はb−10b＝−9b。よって9a−9b＝9(a−b)となり、これは9×整数の形なので9の倍数であるとわかる。',
    rubricPoints: [
      'もとの数を10a+b、入れかえた数を10b+aと文字式で表している',
      '差を計算して9a−9bまで整理している',
      '9(a−b)の形にし、9の倍数であることを結論づけている',
    ],
  },
  {
    id: 'grade_j2_sansu_08',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: 'x＝3、y＝−2のとき、(2x − y)² − (2x + y)² の値を求めなさい。',
    answer: '48',
    hint: 'まず式を因数分解の公式 A²−B²＝(A−B)(A+B) を使って簡単にしてから代入する。',
    explanation:
      '(2x−y)²−(2x+y)²は、A＝2x−y、B＝2x+yとおくとA²−B²の形なので、(A−B)(A+B)に変形できる。\nA−B＝(2x−y)−(2x+y)＝−2y。A+B＝(2x−y)+(2x+y)＝4x。\nよって式は(−2y)×(4x)＝−8xy と簡単になる。\nここにx＝3、y＝−2を代入すると、−8×3×(−2)＝48。\n（検算：2x−y＝6−(−2)＝8、8²＝64。2x+y＝6+(−2)＝4、4²＝16。64−16＝48で一致する。）',
  },
  {
    id: 'grade_j2_sansu_09',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の式を計算しなさい。\n(−6x²y)² ÷ 9xy²',
    answer: '4x³',
    hint: '先に(−6x²y)²を計算してから、割り算をする。',
    explanation:
      'まず(−6x²y)²を計算する。負の数の2乗は必ず正になるので、(−6)²＝36、(x²)²＝x⁴、y²＝y²。よって(−6x²y)²＝36x⁴y²。\nこれを9xy²で割ると、36x⁴y²÷9xy²＝(36÷9)×(x⁴÷x)×(y²÷y²)＝4×x³×1＝4x³。\nよって答えは 4x³ となる。',
    pitfall: '(−6x²y)²の符号を−のままにしてしまうミスに注意。負の数の2乗は必ず正になる。',
  },
  {
    id: 'grade_j2_sansu_10',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question:
      '十の位の数がa、一の位の数がbである2桁の自然数と、その数の十の位と一の位を入れかえてできる数の和は、11の倍数になることを証明しなさい。',
    answer:
      'もとの2桁の数は10a+b、入れかえた数は10b+aと表せる。\nその和は (10a+b)+(10b+a)＝11a+11b＝11(a+b)。\na、bは整数なので、a+bも整数であり、11(a+b)は11×整数の形になっている。\nよって、この和は11の倍数になる。',
    hint: '2つの数をそれぞれ文字式で表し、足し算をしてから共通因数11でくくる。',
    explanation:
      'もとの数10a+bと、入れかえた数10b+aを足すと、(10a+b)+(10b+a)＝10a+b+10b+a。同類項をまとめると、aの項は10a+a＝11a、bの項はb+10b＝11b。よって11a+11bとなり、これは11(a+b)と因数分解できる。a+bは整数なので、11(a+b)は必ず11の倍数になる。',
    rubricPoints: [
      'もとの数と入れかえた数をそれぞれ10a+b、10b+aと表している',
      '和を計算して11a+11bまで整理している',
      '11(a+b)の形にし、11の倍数であることを結論づけている',
    ],
  },

  // ───────────────────── 連立方程式（文章題含む） #11-18 ─────────────────────
  {
    id: 'grade_j2_sansu_11',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '次の連立方程式を解きなさい。\nx + y = 7\n2x − y = 2',
    answer: 'x＝3、y＝4',
    hint: '2つの式を上下に足すと、yが消える。',
    explanation:
      '2つの式を縦にそろえて足す（加減法）。\n(x+y)+(2x−y)＝7+2 より 3x＝9、x＝3。\nx＝3を1つ目の式x+y=7に代入すると、3+y＝7よりy＝4。\nよって x＝3、y＝4 となる。',
  },
  {
    id: 'grade_j2_sansu_12',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '次の連立方程式を解きなさい。\nx = 2y + 1\n3x − y = 13',
    answer: 'x＝5、y＝2',
    hint: '1つ目の式はすでにxについて解けているので、2つ目の式に代入する（代入法）。',
    explanation:
      '1つ目の式 x＝2y+1 を、2つ目の式 3x−y＝13 のxに代入する。\n3(2y+1)−y＝13 → 6y+3−y＝13 → 5y＝10 → y＝2。\ny＝2を x＝2y+1 に代入すると、x＝2×2+1＝5。\nよって x＝5、y＝2 となる。',
  },
  {
    id: 'grade_j2_sansu_13',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の連立方程式を解きなさい。\n3x + 2y = 16\n2x − 2y = 4',
    answer: 'x＝4、y＝2',
    hint: 'yの係数の絶対値がそろっているので、2式を足せばyが消える。',
    explanation:
      '2式を縦に足すとyが消える。\n(3x+2y)+(2x−2y)＝16+4 より 5x＝20、x＝4。\nx＝4を2x−2y=4に代入すると、8−2y＝4 → 2y＝4 → y＝2。\n検算：3×4+2×2＝12+4＝16で1つ目の式とも一致する。\nよって x＝4、y＝2 となる。',
  },
  {
    id: 'grade_j2_sansu_14',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の連立方程式を解きなさい。\nx/3 + y/2 = 4\nx − y = 2',
    answer: 'x＝6、y＝4',
    hint: '1つ目の式は両辺に6をかけて、分数のない式に直してから考える。',
    explanation:
      '1つ目の式の両辺に6をかけて分数を消す。6×(x/3+y/2)＝6×4 より 2x+3y＝24。\n2つ目の式x−y=2より x＝y+2。\nこれを2x+3y＝24に代入すると、2(y+2)+3y＝24 → 2y+4+3y＝24 → 5y＝20 → y＝4。\ny＝4のとき x＝4+2＝6。\n検算：x/3+y/2＝6/3+4/2＝2+2＝4で1つ目の式と一致する。\nよって x＝6、y＝4 となる。',
    memoryTip: '分数を含む連立方程式は、まず分母をはらって整数の式に直してから解くとミスが減る。',
  },
  {
    id: 'grade_j2_sansu_15',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '次の連立方程式を解きなさい。\n0.3x + 0.2y = 1.3\nx + y = 5',
    answer: 'x＝3、y＝2',
    hint: '1つ目の式は両辺を10倍して小数のない式に直す。',
    explanation:
      '1つ目の式の両辺を10倍して小数を消す。10×(0.3x+0.2y)＝10×1.3 より 3x+2y＝13。\n2つ目の式x+y=5より x＝5−y。\nこれを3x+2y＝13に代入すると、3(5−y)+2y＝13 → 15−3y+2y＝13 → 15−y＝13 → y＝2。\ny＝2のとき x＝5−2＝3。\n検算：0.3×3+0.2×2＝0.9+0.4＝1.3で1つ目の式と一致する。\nよって x＝3、y＝2 となる。',
    memoryTip: '小数を含む連立方程式は、両辺を10倍・100倍して整数の式に直してから解く。',
  },
  {
    id: 'grade_j2_sansu_16',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '大小2つの数があり、その和は38である。大きい数は、小さい数の3倍より2小さい。この2つの数を求めなさい。',
    answer: '大きい数28、小さい数10',
    hint: '大きい数をx、小さい数をyとして、和の関係式と「3倍より2小さい」の関係式をそれぞれ立てる。',
    explanation:
      '大きい数をx、小さい数をyとする。\n和が38なので x+y＝38 …①\n大きい数は小さい数の3倍より2小さいので x＝3y−2 …②\n②を①に代入すると (3y−2)+y＝38 → 4y−2＝38 → 4y＝40 → y＝10。\ny＝10を②に代入すると x＝3×10−2＝28。\n検算：x+y＝28+10＝38で①と一致する。\nよって大きい数は28、小さい数は10。',
  },
  {
    id: 'grade_j2_sansu_17',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      'ある中学校の長距離走大会に生徒40人が参加した。男子は1人500m、女子は1人400mを走り、走った距離の合計は17600mだった。男子と女子の人数をそれぞれ求めなさい。',
    answer: '男子16人、女子24人',
    hint: '男子の人数をx人、女子の人数をy人として、人数の合計と距離の合計の2つの式を立てる。',
    explanation:
      '男子の人数をx人、女子の人数をy人とする。\n人数の合計より x+y＝40 …①\n距離の合計より 500x+400y＝17600 …②\n①よりy＝40−xを②に代入すると、500x+400(40−x)＝17600 → 500x+16000−400x＝17600 → 100x＝1600 → x＝16。\nx＝16のときy＝40−16＝24。\n検算：500×16+400×24＝8000+9600＝17600で②と一致する。\nよって男子16人、女子24人。',
  },
  {
    id: 'grade_j2_sansu_18',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      'AさんはP地点からQ地点まで、最初は分速60mで歩き、途中から分速90mの早歩きに切りかえて移動した。P地点からQ地点までは合計24分かかり、歩いた道のりの合計は1980mだった。分速60mで歩いた時間と、分速90mで歩いた時間をそれぞれ求めなさい。',
    answer: '分速60mで歩いた時間6分、分速90mで歩いた時間18分',
    hint: '分速60mで歩いた時間をx分、分速90mで歩いた時間をy分として、時間の合計と道のりの合計の式を立てる。',
    explanation:
      '分速60mで歩いた時間をx分、分速90mで歩いた時間をy分とする。\n時間の合計より x+y＝24 …①\n道のりの合計（速さ×時間の和）より 60x+90y＝1980 …②\n①よりx＝24−yを②に代入すると、60(24−y)+90y＝1980 → 1440−60y+90y＝1980 → 1440+30y＝1980 → 30y＝540 → y＝18。\ny＝18のときx＝24−18＝6。\n検算：60×6+90×18＝360+1620＝1980で②と一致する。\nよって分速60mで歩いた時間は6分、分速90mで歩いた時間は18分。',
    memoryTip: '速さの文章題は「道のり＝速さ×時間」を基本にして式を立てる。',
  },

  // ───────────────────── 一次関数（グラフ・式・交点） #19-28 ─────────────────────
  {
    id: 'grade_j2_sansu_19',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '一次関数 y＝3x−2 について、xの値が2から5まで増加するときのyの増加量を求めなさい。',
    answer: '9',
    hint: '一次関数y=ax+bの増加量は「a×xの増加量」で求められる。',
    explanation:
      '一次関数y＝ax+bでは、yの増加量＝a×(xの増加量) という関係が成り立つ。\nこの式の傾きaは3、xの増加量は5−2＝3。\nよってyの増加量は 3×3＝9 となる。',
  },
  {
    id: 'grade_j2_sansu_20',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '一次関数 y＝−2x+5 のグラフの傾きと切片（y切片）をそれぞれ答えなさい。',
    answer: '傾き−2、切片5',
    hint: 'y＝ax+bの形では、aが傾き、bが切片を表す。',
    explanation:
      '一次関数y＝ax+bにおいて、aはグラフの傾き、bはy軸との交点(y切片)を表す。y＝−2x+5をこの形と見比べると、a＝−2、b＝5。\nよって傾きは−2、切片は5となる。',
    choices: ['傾き−2、切片5', '傾き2、切片−5', '傾き−2、切片−5', '傾き5、切片−2'],
  },
  {
    id: 'grade_j2_sansu_21',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '点(1, 4)を通り、傾きが2の直線の式を求めなさい。',
    answer: 'y＝2x+2',
    hint: 'y＝2x+bとおいて、通る点の座標を代入してbを求める。',
    explanation:
      '傾きが2なので、直線の式はy＝2x+bとおける。\nこの直線が点(1, 4)を通るので、x＝1、y＝4を代入すると、4＝2×1+b → 4＝2+b → b＝2。\nよって直線の式は y＝2x+2 となる。',
  },
  {
    id: 'grade_j2_sansu_22',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '2点(1, 5)と(3, 9)を通る直線の式を求めなさい。',
    answer: 'y＝2x+3',
    hint: 'まず2点の座標から傾き（yの増加量÷xの増加量）を求める。',
    explanation:
      '傾きaは、a＝(yの増加量)÷(xの増加量)＝(9−5)÷(3−1)＝4÷2＝2。\n直線の式をy＝2x+bとおき、点(1, 5)を代入すると、5＝2×1+b → 5＝2+b → b＝3。\nよって直線の式は y＝2x+3 となる。\n検算：x＝3のとき y＝2×3+3＝9で、もう一方の点とも一致する。',
  },
  {
    id: 'grade_j2_sansu_23',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '一次関数 y＝−3x+7 のグラフについて、x軸との交点、y軸との交点の座標をそれぞれ求めなさい。',
    answer: 'x軸との交点(7/3, 0)、y軸との交点(0, 7)',
    hint: 'x軸との交点はy=0を、y軸との交点はx=0を代入して求める。',
    explanation:
      'x軸との交点は、y座標が0になる点なので、y＝0を代入する。0＝−3x+7 → 3x＝7 → x＝7/3。よってx軸との交点は(7/3, 0)。\ny軸との交点は、x座標が0になる点なので、x＝0を代入する。y＝−3×0+7＝7。よってy軸との交点は(0, 7)。',
  },
  {
    id: 'grade_j2_sansu_24',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question: '2つの直線 y＝2x−1 と y＝−x+5 の交点の座標を求めなさい。',
    answer: '(2, 3)',
    hint: '交点ではyの値が等しくなるので、2つの式のyを等号でつなぐ。',
    explanation:
      '交点ではxもyも両方の式を同時に満たすので、右辺どうしを等号でつなぐ。\n2x−1＝−x+5 → 2x+x＝5+1 → 3x＝6 → x＝2。\nx＝2をy＝2x−1に代入すると、y＝2×2−1＝3。\n検算：y＝−2+5＝3ともう一方の式でも一致する。\nよって交点の座標は(2, 3)となる。',
  },
  {
    id: 'grade_j2_sansu_25',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '水そうに水が12L入っていて、そこへ毎分2Lずつ水を入れていく。水を入れ始めてからx分後の水の量をyLとして、yをxの式で表しなさい。また、20分後の水の量を求めなさい。',
    answer: 'y＝2x+12、20分後の水の量は52L',
    hint: 'はじめの水の量が切片、毎分増える量が傾きになる。',
    explanation:
      'はじめに12L入っており、毎分2Lずつ増えるので、x分後の水の量はy＝2x+12と表せる（切片12ははじめの水の量、傾き2は毎分の増加量）。\n20分後の水の量は、x＝20を代入して y＝2×20+12＝40+12＝52。\nよって式はy＝2x+12、20分後の水の量は52L。',
  },
  {
    id: 'grade_j2_sansu_26',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '兄は家を出発し、分速70mで歩いた。弟は兄が出発してから5分後に家を出発し、分速105mの自転車で兄を追いかけた。弟が兄に追いつくのは、兄が家を出発してから何分後か。また、家から何m地点か求めなさい。',
    answer: '兄が出発してから15分後、家から1050m地点',
    hint: '兄が出発してからの時間をt分として、兄と弟それぞれの「家からの距離」をtの式で表す。',
    explanation:
      '兄が出発してからの時間をt分とする。兄の家からの距離は70t(m)。\n弟は5分遅れで出発し、分速105mなので、弟の家からの距離は105(t−5)(m)（t≥5のとき）。\n追いつくのは2人の距離が等しくなるときなので、70t＝105(t−5)。\nこれを解くと、70t＝105t−525 → −35t＝−525 → t＝15。\nt＝15のとき兄の距離は70×15＝1050(m)。\n検算：弟の距離は105×(15−5)＝105×10＝1050(m)で一致する。\nよって、兄が出発してから15分後、家から1050m地点で追いつく。',
    memoryTip: '「追いつく」問題は、2人それぞれの位置をtの式で表し、その2式を等号でつなぐと解ける。',
  },
  {
    id: 'grade_j2_sansu_27',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '一次関数 y＝ax+b のグラフが2点(−2, 7)と(4, −5)を通るとき、a、bの値をそれぞれ求めなさい。',
    answer: 'a＝−2、b＝3',
    hint: '傾きaは2点の座標から(yの増加量)÷(xの増加量)で求められる。',
    explanation:
      '傾きaは、a＝(yの増加量)÷(xの増加量)＝(−5−7)÷(4−(−2))＝(−12)÷6＝−2。\n次に、y＝−2x+bに点(−2, 7)を代入すると、7＝−2×(−2)+b → 7＝4+b → b＝3。\n検算：x＝4のとき y＝−2×4+3＝−5で、もう一方の点とも一致する。\nよって a＝−2、b＝3 となる。',
  },
  {
    id: 'grade_j2_sansu_28',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '直線 y＝x+2 と直線 y＝−2x+8 の交点をP、直線y＝x+2とx軸との交点をAとする。原点をOとするとき、三角形OAPの面積を求めなさい。',
    answer: '4',
    hint: 'まずPとAの座標を求める。OAをx軸上の底辺、Pのy座標を高さと考える。',
    explanation:
      'まず交点Pを求める。x+2＝−2x+8 → 3x＝6 → x＝2、y＝2+2＝4。よってP(2, 4)。\n次にAを求める。y＝x+2でy＝0とすると、0＝x+2 → x＝−2。よってA(−2, 0)。\nOAはx軸上の線分で、長さはOからAまでの距離＝2。\nPからx軸(直線OA)までの距離(高さ)は、Pのy座標である4。\n三角形OAPの面積は (1/2)×底辺×高さ＝(1/2)×2×4＝4。\nよって面積は4となる。',
  },

  // ───────────────────── 平行線と角（多角形の内角・外角） #29-34 ─────────────────────
  {
    id: 'grade_j2_sansu_29',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    figureDescription: 'AB∥DCの四角形ABCDに対角線ACを引いた図',
    question:
      '図のように、AB∥DCの四角形ABCDに対角線ACを引く。∠BAC＝52°のとき、∠DCAの大きさを求めなさい。',
    answer: '52°',
    hint: '対角線ACを1本の直線（横断線）と見ると、∠BACと∠DCAは錯角の位置にある。',
    explanation:
      'AB∥DCなので、対角線ACを2つの平行線を横切る1本の直線（横断線）と考えることができる。\nこのとき、∠BAC（Aにできる、ACとABの間の角）と∠DCA（Cにできる、CAとDCの間の角）は、平行線に対する錯角の位置にある。\n平行線の錯角は等しいので、∠DCA＝∠BAC＝52°。',
  },
  {
    id: 'grade_j2_sansu_30',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    figureDescription: '2直線ℓ、mに1本の直線nが交わり、8つの角ができている図',
    question:
      '2直線ℓ、mに1本の直線nが交わっている。∠aと∠bは同位角の位置にあり、∠a＝112°、∠b＝112°であるとき、直線ℓと直線mは平行であると言えるか。理由もあわせて答えなさい。',
    answer: '平行であると言える。理由：同位角が等しいとき、2直線は平行になるから。',
    hint: '「同位角が等しければ2直線は平行である」という性質（平行線になるための条件）を使う。',
    explanation:
      '2直線に1本の直線が交わってできる角のうち、同位角が等しいならば、その2直線は平行であるという性質がある（これは「平行線の同位角は等しい」の逆にあたる関係）。\nこの問題では∠a＝∠b＝112°で、∠aと∠bはちょうど同位角の位置にある。\nよって、この性質から直線ℓと直線mは平行であると言える。',
  },
  {
    id: 'grade_j2_sansu_31',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    figureDescription: '四角形の4つの内角のうち3つの大きさが分かっている図',
    question: '四角形の4つの内角のうち、3つが80°、95°、120°であるとき、残りの1つの内角の大きさを求めなさい。',
    answer: '65°',
    hint: '四角形の内角の和はいつでも360°になる。',
    explanation:
      '四角形の内角の和は、三角形の内角の和180°の2つ分にあたり、いつでも360°になる。\n残りの角をxとすると、80+95+120+x＝360。\n80+95+120＝295なので、295+x＝360 → x＝360−295＝65。\nよって残りの内角は65°。',
  },
  {
    id: 'grade_j2_sansu_32',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    figureDescription: '正六角形の図',
    question: '六角形の内角の和を求めなさい。また、正六角形の1つの内角の大きさを求めなさい。',
    answer: '内角の和720°、正六角形の1つの内角120°',
    hint: 'n角形の内角の和は (n−2)×180° で求められる。',
    explanation:
      'n角形の内角の和は(n−2)×180°で求められる。六角形はn＝6なので、内角の和は(6−2)×180＝4×180＝720°。\n正六角形は6つの内角がすべて等しいので、1つの内角は720÷6＝120°。',
  },
  {
    id: 'grade_j2_sansu_33',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '内角の和が1980°である多角形は何角形か求めなさい。',
    answer: '十三角形（13角形）',
    hint: 'n角形の内角の和の公式(n−2)×180°に1980を当てはめて、方程式を解く。',
    explanation:
      '求める多角形をn角形とすると、内角の和の公式より(n−2)×180＝1980。\n両辺を180で割ると n−2＝1980÷180＝11。\nよってn＝11+2＝13。\nしたがって、求める多角形は十三角形（13角形）である。',
    memoryTip: 'n角形の内角の和は(n−2)×180°の公式を覚えておくと、角の数から和も、和から角の数も求められる。',
  },
  {
    id: 'grade_j2_sansu_34',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    figureDescription: '正八角形の図',
    question: '正八角形の1つの外角の大きさと、1つの内角の大きさをそれぞれ求めなさい。',
    answer: '外角45°、内角135°',
    hint: '多角形の外角の和は、角の数に関係なくいつでも360°になる。',
    explanation:
      '多角形の外角の和は、何角形であってもいつでも360°になる。正八角形は8つの外角がすべて等しいので、1つの外角は360÷8＝45°。\n内角と外角は1つの頂点で合わせて180°（一直線）になるので、1つの内角は180−45＝135°。',
  },

  // ───────────────────── 三角形の合同（証明） #35-40 ─────────────────────
  {
    id: 'grade_j2_sansu_35',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '△ABCと△DEFにおいて、AB＝DE、BC＝EF、∠B＝∠E であることが分かっているとき、この2つの三角形が合同であるといえる合同条件を答えなさい。',
    answer: '2辺とその間の角がそれぞれ等しい',
    hint: '∠Bは辺ABと辺BCの間にある角であることに注目する。',
    explanation:
      'AB＝DE、BC＝EFは対応する2組の辺が等しいことを表す。∠Bは辺ABと辺BCにはさまれた角で、∠Eは辺DEと辺EFにはさまれた角なので、∠B＝∠Eは「2辺の間の角」が等しいことを表している。\nこのように、2組の辺とその間の角がそれぞれ等しいとき、2つの三角形は合同である（SASの合同条件）。',
    choices: ['3辺がそれぞれ等しい', '2辺とその間の角がそれぞれ等しい', '1辺とその両端の角がそれぞれ等しい'],
  },
  {
    id: 'grade_j2_sansu_36',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '△ABC≡△DEFであり、DE＝8cm、∠F＝55°であるとき、ABの長さと∠Cの大きさをそれぞれ求めなさい。',
    answer: 'AB＝8cm、∠C＝55°',
    hint: '合同を表す△ABC≡△DEFは、A↔D、B↔E、C↔Fの順番で対応している。',
    explanation:
      '△ABC≡△DEFの表し方では、対応する頂点の順番がそろっている（A↔D、B↔E、C↔F）。\nよって辺ABに対応する辺は辺DEなので、AB＝DE＝8cm。\n角Cに対応する角は角Fなので、∠C＝∠F＝55°。',
  },
  {
    id: 'grade_j2_sansu_37',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    isWritten: true,
    figureDescription: '線分ABと線分CDが点Oで交わり、OがAB・CDそれぞれの中点になっている図',
    question:
      '点Oは線分ABと線分CDの交点であり、点Oは線分ABの中点であると同時に、線分CDの中点でもある。このとき、△OAC≡△OBDであることを証明しなさい。',
    answer:
      '△OACと△OBDにおいて、\nOはABの中点だから OA＝OB …①\nOはCDの中点だから OC＝OD …②\n対頂角は等しいから ∠AOC＝∠BOD …③\n①、②、③より、2組の辺とその間の角がそれぞれ等しいから、△OAC≡△OBD。',
    hint: 'OA=OB、OC=ODは中点の条件から、∠AOCと∠BODは対頂角の関係から言える。',
    explanation:
      '△OACと△OBDで、対応する辺・角を探す。\nOがABの中点であることから OA＝OB。\nOがCDの中点であることから OC＝OD。\nさらに、∠AOCと∠BODは、線分ABと線分CDが点Oで交わってできる対頂角どうしなので、∠AOC＝∠BOD。\nこれで「2辺（OA＝OB、OC＝OD）とその間の角（∠AOC＝∠BOD）」がそれぞれ等しいことが示せたので、SASの合同条件より△OAC≡△OBDが証明できる。',
    rubricPoints: [
      'OA＝OB、OC＝ODを中点の定義から導いている',
      '∠AOC＝∠BODを対頂角の性質から導いている',
      '2辺とその間の角がそれぞれ等しい（SAS）ことを明示して結論づけている',
    ],
  },
  {
    id: 'grade_j2_sansu_38',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    isWritten: true,
    figureDescription: 'AB=ACの二等辺三角形で、頂角Aの二等分線が底辺BCと点Mで交わっている図',
    question:
      '△ABCはAB＝ACの二等辺三角形である。頂角Aの二等分線が辺BCと交わる点をMとするとき、△ABM≡△ACMであることを証明しなさい。',
    answer:
      '△ABMと△ACMにおいて、\n仮定より AB＝AC …①\nAMは∠Aの二等分線だから ∠BAM＝∠CAM …②\n共通な辺だから AM＝AM …③\n①、②、③より、2組の辺とその間の角がそれぞれ等しいから、△ABM≡△ACM。',
    hint: 'AB=ACは仮定、AMは共通の辺、あと1つの手がかりは「角の二等分線」の定義から出てくる。',
    explanation:
      '△ABMと△ACMで、対応する辺・角を探す。\n仮定よりAB＝AC。\nAMは∠BACの二等分線なので、定義より∠BAM＝∠CAM。\nAMは2つの三角形に共通な辺なので、AM＝AM。\nこれで「2辺（AB＝AC、AM＝AM）とその間の角（∠BAM＝∠CAM）」がそれぞれ等しいことが示せたので、SASの合同条件より△ABM≡△ACMが証明できる。',
    rubricPoints: [
      'AB＝ACを仮定から示している',
      '∠BAM＝∠CAMを角の二等分線の定義から示している',
      'AM＝AMを共通な辺として示し、SASで結論づけている',
    ],
  },
  {
    id: 'grade_j2_sansu_39',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    figureDescription: '四角形ABCDにAB=CD、AD=CBの条件があり、対角線BDを引いた図',
    question:
      '四角形ABCDにおいて、AB＝CD、AD＝CBであるとき、対角線BDを引くと△ABD≡△CDBとなることを証明しなさい。さらに、そのことからAD∥BCが言えることを説明しなさい。',
    answer:
      '△ABDと△CDBにおいて、\n仮定より AB＝CD …①\n仮定より AD＝CB …②\n共通な辺だから BD＝DB …③\n①、②、③より、3辺がそれぞれ等しいから、△ABD≡△CDB。\nさらに、合同な図形の対応する角は等しいから ∠ADB＝∠CBD。この2つの角は、直線BDを横断線として直線ADと直線BCに対する錯角の位置にあるから、AD∥BCといえる。',
    hint: 'AB=CD、AD=CBはすでに仮定にあり、あと1辺はBDが2つの三角形に共通することから見つかる。',
    explanation:
      'まず合同を示す。△ABDと△CDBで、AB＝CD、AD＝CBは仮定より成り立つ。BDは2つの三角形に共通な辺なのでBD＝DB。3組の辺がそれぞれ等しいので、SSSの合同条件より△ABD≡△CDB。\n合同な図形では対応する角も等しいので、∠ADB＝∠CBD。\nこの∠ADBはBDとADの間の角、∠CBDはBDとBCの間の角で、直線BDを1本の横断線と見ると、この2つの角は直線AD、BCに対する錯角の位置にある。錯角が等しいので、AD∥BCといえる。',
    rubricPoints: [
      'AB＝CD、AD＝CB、BD＝DBの3辺が等しいことを示している',
      'SSSの合同条件を明示して△ABD≡△CDBを結論づけている',
      '合同な図形の対応する角が等しいことから∠ADB＝∠CBDを導いている',
      '∠ADBと∠CBDが錯角の位置にあることを述べ、AD∥BCを結論づけている',
    ],
  },
  {
    id: 'grade_j2_sansu_40',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    figureDescription: 'AB=ACの二等辺三角形で、頂点Aから底辺BCに垂線AHを引いた図',
    question:
      '△ABCはAB＝ACの二等辺三角形である。頂点Aから辺BCに垂線をひき、辺BCとの交点をHとするとき、△ABH≡△ACHであることを証明しなさい。',
    answer:
      '△ABHと△ACHにおいて、\nAHは垂線だから ∠AHB＝∠AHC＝90° …①\n仮定より AB＝AC …②\n共通な辺だから AH＝AH …③\n①より△ABH、△ACHはどちらも直角三角形であり、②、③より、直角三角形の斜辺と他の1辺がそれぞれ等しいから、△ABH≡△ACH。',
    hint: '∠AHB=∠AHC=90°なので、どちらも直角三角形。直角三角形どうしの合同条件を思い出す。',
    explanation:
      'AHはBCへの垂線なので、∠AHB＝∠AHC＝90°。よって△ABH、△ACHはどちらも∠Hを直角とする直角三角形である。\nこのとき、AB、ACはそれぞれの直角三角形の斜辺にあたる（直角の向かいにある辺）。仮定よりAB＝AC。\nAHは2つの直角三角形に共通な辺(他の1辺)なので、AH＝AH。\n直角三角形において、斜辺と他の1辺がそれぞれ等しいとき、その2つの直角三角形は合同になる。よって△ABH≡△ACHが証明できる。',
    rubricPoints: [
      '∠AHB＝∠AHC＝90°を垂線の定義から示し、直角三角形であることを述べている',
      '斜辺AB＝ACを仮定から示している',
      'AH＝AHを共通な辺として示している',
      '「直角三角形の斜辺と他の1辺がそれぞれ等しい」という合同条件を明示して結論づけている',
    ],
  },

  // ───────────────────── 四角形の性質（平行四辺形の証明） #41-44 ─────────────────────
  {
    id: 'grade_j2_sansu_41',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    figureDescription: '平行四辺形ABCDの図',
    question: '平行四辺形ABCDで、AB＝7cm、∠A＝65°であるとき、辺CDの長さと∠Cの大きさをそれぞれ求めなさい。',
    answer: 'CD＝7cm、∠C＝65°',
    hint: '平行四辺形では、対辺の長さは等しく、対角の大きさも等しい。',
    explanation:
      '平行四辺形の性質より、対辺(向かい合う辺)の長さは等しい。辺ABと辺CDは対辺なので、CD＝AB＝7cm。\nまた、対角(向かい合う角)の大きさも等しい。∠Aと∠Cは対角なので、∠C＝∠A＝65°。',
  },
  {
    id: 'grade_j2_sansu_42',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    figureDescription: '平行四辺形ABCDの対角線AC、BDが点Oで交わっている図',
    question:
      '平行四辺形ABCDの対角線AC、BDの交点をOとする。AO＝5cm、BO＝3cmであるとき、対角線ACと対角線BDの長さをそれぞれ求めなさい。',
    answer: 'AC＝10cm、BD＝6cm',
    hint: '平行四辺形の対角線は、それぞれの中点で交わる（互いに他を2等分する）。',
    explanation:
      '平行四辺形の対角線は、互いに他を2等分するという性質がある。つまりOはACの中点であり、同時にBDの中点でもある。\nOがACの中点なので、AC＝2×AO＝2×5＝10cm。\nOがBDの中点なので、BD＝2×BO＝2×3＝6cm。',
  },
  {
    id: 'grade_j2_sansu_43',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    isWritten: true,
    figureDescription: '平行四辺形ABCDに対角線BDを引いた図',
    question: '平行四辺形ABCDにおいて、対角線BDを引くと、△ABD≡△CDBとなることを証明しなさい。',
    answer:
      '△ABDと△CDBにおいて、\nAB∥DCだから、平行線の錯角より ∠ABD＝∠CDB …①\nAD∥BCだから、平行線の錯角より ∠ADB＝∠CBD …②\n共通な辺だから BD＝DB …③\n①、②、③より、1辺とその両端の角がそれぞれ等しいから、△ABD≡△CDB。',
    hint: '平行四辺形にはAB∥DC、AD∥BCの2組の平行があり、対角線BDが横断線になる。',
    explanation:
      '平行四辺形ABCDでは、AB∥DC、AD∥BCが成り立つ。\nAB∥DCに対して対角線BDを横断線と見ると、∠ABD(Bにできる角)と∠CDB(Dにできる角)は錯角の位置にあるので、∠ABD＝∠CDB。\n同じくAD∥BCに対して対角線BDを横断線と見ると、∠ADB(Dにできる角)と∠CBD(Bにできる角)は錯角の位置にあるので、∠ADB＝∠CBD。\nBDは2つの三角形に共通な辺(この場合は両端の角にはさまれた辺)なので、BD＝DB。\nよって「1辺(BD)とその両端の角(∠ABD＝∠CDB、∠ADB＝∠CBD)」がそれぞれ等しいので、ASAの合同条件より△ABD≡△CDBが証明できる。',
    rubricPoints: [
      'AB∥DCから∠ABD＝∠CDBを錯角の性質で示している',
      'AD∥BCから∠ADB＝∠CBDを錯角の性質で示している',
      'BD＝DBを共通な辺として示している',
      '「1辺とその両端の角がそれぞれ等しい」(ASA)を明示して結論づけている',
    ],
  },
  {
    id: 'grade_j2_sansu_44',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    figureDescription: '平行四辺形ABCDの対角線AC、BDが点Oで交わっており、対角線AC上にAE=CFとなる点E、Fをとった図',
    question:
      '平行四辺形ABCDの対角線AC、BDの交点をOとする。対角線AC上に、AE＝CFとなるように2点E、F（EはAに近い側、FはCに近い側）をとるとき、四角形EBFDは平行四辺形になることを証明しなさい。',
    answer:
      '対角線AC、BDの交点をOとすると、平行四辺形の対角線は互いに他を2等分するから AO＝CO、BO＝DO。\n仮定より AE＝CF なので、AO−AE＝CO−CF、すなわち EO＝FO。\nEO＝FO、BO＝DOより、対角線EF、BDはどちらも点Oで交わり、点Oはそれぞれの中点になっている。\n1組の対角線がそれぞれの中点で交わる（互いに他を2等分する）四角形は平行四辺形であるから、四角形EBFDは平行四辺形である。',
    hint: '平行四辺形ABCDの対角線がOで2等分されることと、AE=CFから、EとFもOを中点にすることを示す。',
    explanation:
      'まず平行四辺形ABCDの対角線AC、BDの交点をOとする。平行四辺形の対角線は互いに他を2等分するという性質があるので、AO＝CO、BO＝DO。\n仮定よりAE＝CF。EはAに近い側、FはCに近い側にあるので、AO−AE＝EO、CO−CF＝FOと表せる。AO＝CO、AE＝CFなので、AO−AE＝CO−CFとなり、EO＝FOが導ける。\nこれで、対角線EFは点Oを中点とし(EO＝FO)、対角線BDも点Oを中点とする(BO＝DO)ことがわかった。\n「1組の対角線がそれぞれの中点で交わる四角形は平行四辺形である」という平行四辺形になるための条件にあてはまるので、四角形EBFDは平行四辺形であるといえる。',
    rubricPoints: [
      '平行四辺形ABCDの対角線がOで2等分される(AO=CO、BO=DO)ことを示している',
      'AE=CFからEO=FOを導いている',
      'EO=FO、BO=DOより対角線EF、BDが点Oで互いに2等分し合うことを示している',
      '「対角線がそれぞれの中点で交わる四角形は平行四辺形」という条件を根拠に結論づけている',
    ],
  },

  // ───────────────────── 確率 #45-47 ─────────────────────
  {
    id: 'grade_j2_sansu_45',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '大小2つのさいころを同時に投げるとき、出た目の和が8になる確率を求めなさい。',
    answer: '5/36',
    hint: '目の出方は全部で6×6=36通り。和が8になる組を書き出す。',
    explanation:
      '大小2つのさいころの目の出方は全部で6×6＝36通りある。\nこのうち、目の和が8になる組み合わせを書き出すと、(大,小)＝(2,6)、(3,5)、(4,4)、(5,3)、(6,2)の5通り。\nよって求める確率は 5/36 となる。',
    pitfall: 'さいころの目の出方を単純に6通りと考えないこと。2つのさいころなので全部で36通りになる。',
    choices: ['5/36', '6/36', '1/6', '8/36'],
  },
  {
    id: 'grade_j2_sansu_46',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    question:
      '袋の中に赤玉3個、白玉2個の合計5個の玉が入っている。この袋から同時に2個の玉を取り出すとき、2個とも赤玉である確率を求めなさい。',
    answer: '3/10',
    hint: '5個から2個を選ぶ組み合わせの数と、赤玉3個から2個を選ぶ組み合わせの数をそれぞれ求める。',
    explanation:
      '5個の玉から2個を取り出す組み合わせの総数は、5×4÷2＝10通り。\n2個とも赤玉になる場合の数は、3個の赤玉から2個を選ぶ組み合わせなので、3×2÷2＝3通り。\nよって求める確率は 3/10 となる。',
  },
  {
    id: 'grade_j2_sansu_47',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      'A、B、C、D、Eの5人の中からくじ引きで委員長1人、副委員長1人を選ぶとき、AとBの2人がどちらも選ばれる（委員長・副委員長のどちらかにAとBの両方が入る）確率を求めなさい。',
    answer: '1/10',
    hint: '委員長と副委員長は区別があるので、選び方の総数は5×4通り。AとBが選ばれる場合は役割の入れかえで2通り。',
    explanation:
      '委員長と副委員長は役割が異なるので、選び方の総数は5人から順番に2人を選ぶ場合の数となり、5×4＝20通り。\nAとBの2人がどちらも選ばれる場合は、「委員長A・副委員長B」または「委員長B・副委員長A」の2通り。\nよって求める確率は 2/20＝1/10 となる。',
  },

  // ───────────────────── データの活用（箱ひげ図） #48-50 ─────────────────────
  {
    id: 'grade_j2_sansu_48',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    figureDescription: '最小値42点・第1四分位数58点・中央値68点・第3四分位数80点・最大値96点の箱ひげ図',
    question:
      'あるクラス20人の数学のテストの得点を箱ひげ図に表したところ、最小値42点、第1四分位数58点、中央値68点、第3四分位数80点、最大値96点であった。四分位範囲を求めなさい。',
    answer: '22点',
    hint: '四分位範囲は「第3四分位数−第1四分位数」で求める。',
    explanation:
      '四分位範囲は、第3四分位数(Q3)から第1四分位数(Q1)をひいて求める。\n四分位範囲＝Q3−Q1＝80−58＝22点。',
  },
  {
    id: 'grade_j2_sansu_49',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'standard',
    figureDescription: '最小値30点・第1四分位数45点・中央値55点・第3四分位数68点・最大値85点の箱ひげ図',
    question:
      'あるクラスの数学のテストの得点を箱ひげ図に表したところ、最小値30点、第1四分位数45点、中央値55点、第3四分位数68点、最大値85点であった。範囲(レンジ)と四分位範囲をそれぞれ求めなさい。',
    answer: '範囲55点、四分位範囲23点',
    hint: '範囲は「最大値−最小値」、四分位範囲は「第3四分位数−第1四分位数」で求める。',
    explanation:
      '範囲(レンジ)は、最大値から最小値をひいて求める。範囲＝85−30＝55点。\n四分位範囲は、第3四分位数から第1四分位数をひいて求める。四分位範囲＝68−45＝23点。',
  },
  {
    id: 'grade_j2_sansu_50',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    figureDescription: 'A組(最小35・Q1 50・中央62・Q3 75・最大90)とB組(最小40・Q1 55・中央60・Q3 68・最大95)の箱ひげ図を比べた図',
    question:
      'あるクラスのA組・B組の数学のテストの得点を箱ひげ図で比べたところ、次のようになった。\nA組：最小値35点、第1四分位数50点、中央値62点、第3四分位数75点、最大値90点\nB組：最小値40点、第1四分位数55点、中央値60点、第3四分位数68点、最大値95点\n次の①〜④のうち、正しいものを1つ選びなさい。\n①A組の四分位範囲はB組の四分位範囲より大きい\n②B組の中央値はA組の中央値より大きい\n③A組の範囲はB組の範囲より大きい\n④A組の最大値はB組の最大値より大きい',
    answer: 'A組の四分位範囲はB組の四分位範囲より大きい',
    hint: '①〜④をそれぞれ実際に計算・比較して、正しいものだけを残す。',
    explanation:
      '①A組の四分位範囲＝75−50＝25、B組の四分位範囲＝68−55＝13。25＞13なので①は正しい。\n②A組の中央値は62、B組の中央値は60。B組(60)はA組(62)より小さいので②は誤り。\n③A組の範囲＝90−35＝55、B組の範囲＝95−40＝55。2つは等しく、A組の方が大きいわけではないので③は誤り。\n④A組の最大値は90、B組の最大値は95。A組(90)はB組(95)より小さいので④は誤り。\nよって、正しいのは①「A組の四分位範囲はB組の四分位範囲より大きい」。',
    choices: [
      'A組の四分位範囲はB組の四分位範囲より大きい',
      'B組の中央値はA組の中央値より大きい',
      'A組の範囲はB組の範囲より大きい',
      'A組の最大値はB組の最大値より大きい',
    ],
  },
];
