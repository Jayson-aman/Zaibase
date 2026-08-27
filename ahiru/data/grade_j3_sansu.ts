import type { Question } from './questions-meta';

// 中学3年 数学（高校受験対策・最終学年）。
// 単元: 多項式の乗法・因数分解／平方根／二次方程式（文章題含む）／
// 関数y=ax²（変域・変化の割合）／相似な図形／円周角の定理／
// 三平方の定理（平面・空間）／標本調査。
// 全問 grade: 'j3'、examType: 'koko'。
export const gradeJ3SansuQuestions: Question[] = [
  // ==================== 多項式の乗法・因数分解 ====================
  {
    id: 'grade_j3_sansu_01',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '次の式を展開しなさい。\n(x+3)(x+5)',
    answer: 'x²+8x+15',
    hint: '(x+a)(x+b) = x²+(a+b)x+ab の公式を使う。',
    explanation:
      '【解法】\n(x+a)(x+b) = x²+(a+b)x+ab の公式を使う。\na=3, b=5 とすると、\na+b = 3+5 = 8\nab = 3×5 = 15\nよって (x+3)(x+5) = x²+8x+15',
    choices: ['x²+8x+15', 'x²+2x+15', 'x²+8x+8', 'x²+15x+8'],
  },
  {
    id: 'grade_j3_sansu_02',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '次の式を展開しなさい。\n(x-4)²',
    answer: 'x²-8x+16',
    hint: '(x-a)² = x²-2ax+a² の公式を使う。',
    explanation:
      '【解法】\n(x-a)² = x²-2ax+a² の公式を使う。\na=4 とすると、\n2a = 2×4 = 8\na² = 4² = 16\nよって (x-4)² = x²-8x+16',
  },
  {
    id: 'grade_j3_sansu_03',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '次の式を因数分解しなさい。\nx²-2x-24',
    answer: '(x-6)(x+4)',
    hint: '積が-24、和が-2になる2つの整数を探す。',
    explanation:
      '【解法】\nx²+(a+b)x+ab の形にあてはめる。\n積が-24、和が-2になる2数を探す。\n-6と4: 積=-6×4=-24、和=-6+4=-2 ✓\nよって x²-2x-24 = (x-6)(x+4)\n検算: (x-6)(x+4) = x²+4x-6x-24 = x²-2x-24 ✓',
  },
  {
    id: 'grade_j3_sansu_04',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '乗法公式を利用して、97×103 を計算しなさい。',
    answer: '9991',
    hint: '97=100-3、103=100+3 とみて、(a-b)(a+b)=a²-b² を使う。',
    explanation:
      '【解法】\n97=100-3、103=100+3 とみる。\n97×103 = (100-3)(100+3)\n公式 (a-b)(a+b)=a²-b² より、\n= 100²-3²\n= 10000-9\n= 9991',
  },
  {
    id: 'grade_j3_sansu_05',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '次の式を因数分解しなさい。\n2x²-8',
    answer: '2(x+2)(x-2)',
    hint: 'まず共通因数2をくくり出してから、2乗の差の公式を使う。',
    explanation:
      '【解法】\nまず共通因数2をくくり出す。\n2x²-8 = 2(x²-4)\nx²-4 は2乗の差の公式 a²-b²=(a+b)(a-b) が使える。\nx²-4 = x²-2² = (x+2)(x-2)\nよって 2x²-8 = 2(x+2)(x-2)',
  },
  {
    id: 'grade_j3_sansu_06',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '次の式を展開しなさい。\n(x-1)(x+1)(x²+1)',
    answer: 'x⁴-1',
    hint: '先に (x-1)(x+1) を計算してから、残りの因数とかけ合わせる。',
    explanation:
      '【解法】\nまず (x-1)(x+1) を2乗の差の公式で計算する。\n(x-1)(x+1) = x²-1\n次に (x²-1)(x²+1) を同じ公式で計算する（x²をひとかたまりと見る）。\n(x²-1)(x²+1) = (x²)²-1² = x⁴-1\nよって (x-1)(x+1)(x²+1) = x⁴-1',
  },

  // ==================== 平方根 ====================
  {
    id: 'grade_j3_sansu_07',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '√48 の根号の中をできるだけ小さい自然数にして表しなさい。',
    answer: '4√3',
    hint: '48を「(平方数)×(残りの数)」の形に分解する。',
    explanation:
      '【解法】\n48を素因数分解すると 48=2⁴×3=16×3\n√48 = √(16×3) = √16×√3 = 4√3\n（16=4²が平方数なので根号の外に出せる）',
  },
  {
    id: 'grade_j3_sansu_08',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '√18 × √2 を計算しなさい。',
    answer: '6',
    hint: '√a × √b = √(ab) を使ってから、根号の中を計算する。',
    explanation:
      '【解法】\n√a × √b = √(ab) の公式を使う。\n√18 × √2 = √(18×2) = √36\n36=6² なので √36 = 6',
    choices: ['6', '4', '9', '36'],
  },
  {
    id: 'grade_j3_sansu_09',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '(√5+√3)(√5-√3) を計算しなさい。',
    answer: '2',
    hint: '(a+b)(a-b)=a²-b² の公式が使える形になっている。',
    explanation:
      '【解法】\n(a+b)(a-b)=a²-b² の公式を使う。\na=√5, b=√3 とすると、\n(√5+√3)(√5-√3) = (√5)²-(√3)²\n= 5-3\n= 2',
  },
  {
    id: 'grade_j3_sansu_10',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '√200 - √50 + √8 を計算しなさい。',
    answer: '7√2',
    hint: 'それぞれを a√2 の形に直してから、同類項をまとめるように計算する。',
    explanation:
      '【解法】\nそれぞれを簡単な形に直す。\n√200 = √(100×2) = 10√2\n√50 = √(25×2) = 5√2\n√8 = √(4×2) = 2√2\nまとめると、\n10√2 - 5√2 + 2√2 = (10-5+2)√2 = 7√2',
  },
  {
    id: 'grade_j3_sansu_11',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '√(180/n) の値が自然数となるような自然数nのうち、最も小さいものを求めなさい。',
    answer: 'n=5',
    hint: '180を素因数分解し、指数が奇数になっている素因数に注目する。',
    explanation:
      '【解法】\n180を素因数分解すると 180=2²×3²×5\n√(180/n) が自然数になるには、180/n が平方数（同じ数を2回かけた数）でなければならない。\n180=2²×3²×5¹ のうち、5だけが奇数乗（1乗）になっている。\nこの5を消すには、nが5の倍数である必要がある。\nn=1: 180/1=180（√180は自然数でない）\nn=2: 180/2=90（自然数でない）\nn=3: 180/3=60（自然数でない）\nn=4: 180/4=45（自然数でない）\nn=5: 180/5=36=6² → √36=6（自然数！）\nよって最小のnは n=5',
  },
  {
    id: 'grade_j3_sansu_12',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '√3+1 と 2√2 の大小を、不等号を使って比較しなさい。',
    answer: '√3+1 < 2√2',
    hint: '両方とも正の数なので、2乗してから大小を比べればよい。',
    explanation:
      '【解法】\n√3+1 と 2√2 はどちらも正の数なので、2乗して比べればよい（正の数どうしは2乗しても大小関係が変わらない）。\n(√3+1)² = 3+2√3+1 = 4+2√3\n(2√2)² = 4×2 = 8\n2√3 ≈ 2×1.73 = 3.46 なので、4+2√3 ≈ 7.46\n7.46 < 8 なので (√3+1)² < (2√2)²\nよって √3+1 < 2√2',
  },

  // ==================== 二次方程式（文章題含む） ====================
  {
    id: 'grade_j3_sansu_13',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '二次方程式 x²-5x+6=0 を解きなさい。',
    answer: 'x=2, x=3',
    hint: '積が6、和が5になる2つの数を探して因数分解する。',
    explanation:
      '【解法】\n積が6、和が5になる2数を探す。\n2と3: 積=2×3=6、和=2+3=5 ✓\nx²-5x+6 = (x-2)(x-3) = 0\nx-2=0 または x-3=0\nよって x=2, x=3\n検算: 2²-5×2+6=4-10+6=0 ✓　3²-5×3+6=9-15+6=0 ✓',
    choices: ['x=2, x=3', 'x=-2, x=-3', 'x=1, x=6', 'x=2, x=-3'],
  },
  {
    id: 'grade_j3_sansu_14',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '二次方程式 x²-9=0 を解きなさい。',
    answer: 'x=3, x=-3',
    hint: 'x²=9 の形にしてから、両辺の平方根を考える。',
    explanation:
      '【解法】\nx²-9=0 を移項すると x²=9\nx²=9 を満たすxは、9の平方根なので\nx=±3\nよって x=3, x=-3',
  },
  {
    id: 'grade_j3_sansu_15',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '二次方程式 2x²+3x-2=0 を解きなさい。',
    answer: 'x=1/2, x=-2',
    hint: '解の公式 x = (-b±√(b²-4ac)) / 2a を使う（a=2, b=3, c=-2）。',
    explanation:
      '【解法】\n解の公式 x=(-b±√(b²-4ac))/2a を使う。\na=2, b=3, c=-2 なので、\nb²-4ac = 3²-4×2×(-2) = 9+16 = 25\n√25 = 5\nx = (-3±5) / (2×2) = (-3±5)/4\nx = (-3+5)/4 = 2/4 = 1/2\nx = (-3-5)/4 = -8/4 = -2\n検算: 2×(1/2)²+3×(1/2)-2 = 0.5+1.5-2=0 ✓　2×(-2)²+3×(-2)-2 = 8-6-2=0 ✓',
  },
  {
    id: 'grade_j3_sansu_16',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '二次方程式 x²-4x-1=0 を解きなさい。',
    answer: 'x=2+√5, x=2-√5',
    hint: '因数分解できないので、解の公式を使う（a=1, b=-4, c=-1）。',
    explanation:
      '【解法】\n因数分解できないので、解の公式を使う。\na=1, b=-4, c=-1 なので、\nb²-4ac = (-4)²-4×1×(-1) = 16+4 = 20\n√20 = 2√5\nx = (4±2√5) / 2 = 2±√5\nよって x=2+√5, x=2-√5',
  },
  {
    id: 'grade_j3_sansu_17',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '連続する2つの正の整数があり、それぞれを2乗した数の和が113である。この2つの整数を求めなさい。',
    answer: '7と8',
    hint: '小さい方の整数をnとおくと、大きい方は n+1 と表せる。',
    explanation:
      '【解法】\n小さい方の整数をnとすると、大きい方は n+1 と表せる（nは正の整数）。\n式を立てる: n²+(n+1)²=113\n展開: n²+n²+2n+1=113\n2n²+2n+1=113\n2n²+2n-112=0\n両辺を2でわる: n²+n-56=0\n因数分解: (n-7)(n+8)=0\nn=7 または n=-8\nnは正の整数なので n=7\nよって2つの整数は 7 と 8\n検算: 7²+8²=49+64=113 ✓',
  },
  {
    id: 'grade_j3_sansu_18',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '横の長さが縦の長さより3cm長い長方形があり、面積は88cm²である。縦の長さを求めなさい。',
    answer: '8cm',
    hint: '縦の長さをxcmとおくと、横の長さは (x+3)cm と表せる。',
    explanation:
      '【解法】\n縦の長さをxcmとすると、横の長さは (x+3)cm と表せる（x>0）。\n面積の式を立てる: x(x+3)=88\n展開: x²+3x-88=0\n因数分解: 積が-88、和が3になる2数は11と-8。\n(x+11)(x-8)=0\nx=-11 または x=8\nxは正の数なので x=8\nよって縦の長さは 8cm（このとき横は8+3=11cm）\n検算: 8×11=88cm² ✓',
  },
  {
    id: 'grade_j3_sansu_19',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '縦20m、横15mの長方形の土地に、同じ幅の道を縦と横に1本ずつ十字に作ったところ、道を除いた土地の面積が266m²になった。道の幅を求めなさい。',
    answer: '1m',
    hint: '十字の道を土地の端（縦・横それぞれ1辺）に寄せて考えると、残りは1つの長方形になる。',
    explanation:
      '【解法】\n道の幅をxmとする。\n十字の道を土地の端に寄せて考えると（道の形と面積は変わらない）、道を除いた土地は縦(15-x)m、横(20-x)mの長方形になる。\n面積の式を立てる: (20-x)(15-x)=266\n展開: 300-20x-15x+x²=266\nx²-35x+300=266\nx²-35x+34=0\n因数分解: 積が34、和が-35になる2数は-1と-34。\n(x-1)(x-34)=0\nx=1 または x=34\n道の幅は土地の縦(15m)より小さくなければならないので x=1\nよって道の幅は 1m\n検算: (20-1)(15-1)=19×14=266m² ✓',
  },
  {
    id: 'grade_j3_sansu_20',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '地上から真上に秒速30mで投げ上げた物体の、t秒後の高さがh=30t-5t²(m)で表されるとき、高さが40mになるのは投げてから何秒後と何秒後か、両方求めなさい。',
    answer: '2秒後と4秒後',
    hint: '30t-5t²=40 という方程式を立てて解く。',
    explanation:
      '【解法】\n高さが40mになるときを求めるので、h=40を代入する。\n30t-5t²=40\n移項して整理: -5t²+30t-40=0\n両辺を-5でわる: t²-6t+8=0\n因数分解: 積が8、和が-6になる2数は-2と-4。\n(t-2)(t-4)=0\nt=2 または t=4\nどちらも正の値なので、両方とも答えになる。\nよって、投げてから 2秒後 と 4秒後 の2回、高さ40mになる。\n（これは物体が上昇していく途中の2秒後と、頂点を過ぎて落下してくる途中の4秒後を表している）',
  },

  // ==================== 関数 y=ax²（変域・変化の割合） ====================
  {
    id: 'grade_j3_sansu_21',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '関数 y=3x² について、x=-2 のときのyの値を求めなさい。',
    answer: 'y=12',
    hint: 'x=-2を式にそのまま代入する。負の数の2乗はプラスになることに注意。',
    explanation:
      '【解法】\ny=3x² に x=-2 を代入する。\ny=3×(-2)²\n=3×4\n=12',
    choices: ['y=12', 'y=-12', 'y=6', 'y=9'],
  },
  {
    id: 'grade_j3_sansu_22',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '関数 y=ax² のグラフが点(3,18)を通るとき、aの値を求めなさい。',
    answer: 'a=2',
    hint: 'x=3, y=18 を式に代入して、aについての方程式を解く。',
    explanation:
      '【解法】\ny=ax² に x=3, y=18 を代入する。\n18=a×3²\n18=9a\na=18÷9\na=2',
  },
  {
    id: 'grade_j3_sansu_23',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '関数 y=2x² について、xの変域が -1≦x≦3 のときのyの変域を求めなさい。',
    answer: '0≦y≦18',
    hint: 'a>0の放物線は、変域が0をまたぐとき最小値は必ずy=0になる。',
    explanation:
      '【解法】\ny=2x² は a=2>0 なので下に凸のグラフで、頂点(0,0)が最も低い点になる。\nxの変域 -1≦x≦3 は x=0 を含んでいるので、yの最小値は x=0 のときの y=0。\n最大値は、xの変域の両端のうち、原点から遠い方で決まる。\nx=-1のとき: y=2×(-1)²=2\nx=3のとき: y=2×3²=18\n遠い方はx=3なので、最大値はy=18。\nよって yの変域は 0≦y≦18',
  },
  {
    id: 'grade_j3_sansu_24',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '関数 y=-(1/2)x² について、xの変域が -2≦x≦4 のときのyの変域を求めなさい。',
    answer: '-8≦y≦0',
    hint: 'a<0の放物線は上に凸。変域が0をまたぐとき最大値は必ずy=0になる。',
    explanation:
      '【解法】\ny=-(1/2)x² は a=-1/2<0 なので上に凸のグラフで、頂点(0,0)が最も高い点になる。\nxの変域 -2≦x≦4 は x=0 を含んでいるので、yの最大値は x=0 のときの y=0。\n最小値は、xの変域の両端のうち、原点から遠い方で決まる。\nx=-2のとき: y=-(1/2)×(-2)²=-(1/2)×4=-2\nx=4のとき: y=-(1/2)×4²=-(1/2)×16=-8\n遠い方はx=4なので、最小値はy=-8。\nよって yの変域は -8≦y≦0',
  },
  {
    id: 'grade_j3_sansu_25',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '関数 y=x² について、xが1から4まで増加するときの変化の割合を求めなさい。',
    answer: '5',
    hint: '変化の割合 = (yの増加量) ÷ (xの増加量)',
    explanation:
      '【解法】\nx=1のとき: y=1²=1\nx=4のとき: y=4²=16\n変化の割合 = (yの増加量)÷(xの増加量)\n= (16-1)÷(4-1)\n= 15÷3\n= 5',
  },
  {
    id: 'grade_j3_sansu_26',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '関数 y=ax² について、xの値が2から5まで増加するときの変化の割合が21である。aの値を求めなさい。',
    answer: 'a=3',
    hint: 'y=ax²の変化の割合は a×(x1+x2) で計算できる。',
    explanation:
      '【解法】\ny=ax² で xがx1からx2まで増加するときの変化の割合は、a×(x1+x2) という公式で求められる。\n（理由: (a×x2²-a×x1²)/(x2-x1) = a×(x2-x1)(x2+x1)/(x2-x1) = a×(x1+x2)）\nここでは x1=2, x2=5 なので、\na×(2+5)=21\n7a=21\na=3\n検算: x=2でy=3×4=12、x=5でy=3×25=75。変化の割合=(75-12)/(5-2)=63/3=21 ✓',
  },
  {
    id: 'grade_j3_sansu_27',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '関数 y=x² のグラフ上に2点 A(-1,1)、B(3,9) がある。直線ABの式を求めなさい。',
    answer: 'y=2x+3',
    hint: 'まず2点の座標から傾きを求め、そのあと1点を通ることを使ってy切片を求める。',
    explanation:
      '【解法】\n直線の傾きを求める。\n傾き = (yの増加量)/(xの増加量) = (9-1)/(3-(-1)) = 8/4 = 2\n直線の式を y=2x+b とおき、点A(-1,1)を代入する。\n1=2×(-1)+b\n1=-2+b\nb=3\nよって直線ABの式は y=2x+3\n検算: x=3のとき y=2×3+3=9（点Bと一致）✓',
  },
  {
    id: 'grade_j3_sansu_28',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '関数 y=x² のグラフ上に3点 A(-2,4)、O(0,0)、B(3,9) がある。△AOBの面積を求めなさい。',
    answer: '15',
    hint: '直線ABがy軸と交わる点Cを使って、△AOBを△AOCと△COBに分けて考える。',
    explanation:
      '【解法】\nまず直線ABの式を求める。\n傾き = (9-4)/(3-(-2)) = 5/5 = 1\n点B(3,9)を通るので: y-9=1×(x-3) → y=x+6\nこの直線がy軸と交わる点をCとすると、x=0でy=6なのでC(0,6)。\nOC=6を共通の底辺として、△AOBを△AOCと△COBに分ける。\n△AOC = (1/2)×OC×(Aのx座標の絶対値) = (1/2)×6×2 = 6\n△COB = (1/2)×OC×(Bのx座標) = (1/2)×6×3 = 9\n△AOB = △AOC+△COB = 6+9 = 15',
  },

  // ==================== 相似な図形（相似比・面積比・体積比） ====================
  {
    id: 'grade_j3_sansu_29',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '相似な2つの三角形があり、相似比が2:3である。小さい方の三角形の面積が8cm²のとき、大きい方の三角形の面積を求めなさい。',
    answer: '18cm²',
    hint: '相似な図形の面積比は、相似比の2乗になる。',
    explanation:
      '【解法】\n相似な図形の面積比は、相似比の2乗になる。\n相似比2:3の2乗は 2²:3²=4:9\n小さい方の面積が8cm²なので、比の4にあたるのが8cm²。\n大きい方(比の9)の面積 = 8×(9/4) = 18cm²',
    choices: ['18cm²', '12cm²', '24cm²', '16cm²'],
  },
  {
    id: 'grade_j3_sansu_30',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '相似比が3:5の2つの円柱がある。小さい方の体積が54cm³のとき、大きい方の体積を求めなさい。',
    answer: '250cm³',
    hint: '相似な立体の体積比は、相似比の3乗になる。',
    explanation:
      '【解法】\n相似な立体の体積比は、相似比の3乗になる。\n相似比3:5の3乗は 3³:5³=27:125\n小さい方の体積が54cm³なので、比の27にあたるのが54cm³。\n大きい方(比の125)の体積 = 54×(125/27) = 250cm³',
  },
  {
    id: 'grade_j3_sansu_31',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '△ABC∽△DEF で、相似比が4:7である。△ABCの周の長さが16cmのとき、△DEFの周の長さを求めなさい。',
    answer: '28cm',
    hint: '相似な図形では、周の長さの比は相似比と同じになる（面積比とは違う）。',
    explanation:
      '【解法】\n相似な図形では、対応する辺の長さの比がすべて相似比と同じなので、周の長さの比も相似比と同じになる（面積比とは違い、2乗しない）。\n△ABC:△DEF の周の長さの比 = 4:7\n△ABCの周の長さが16cmなので、比の4にあたるのが16cm。\n△DEFの周の長さ = 16×(7/4) = 28cm',
  },
  {
    id: 'grade_j3_sansu_32',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question:
      '△ABCで、辺AB上に点D、辺AC上に点Eがあり、DE∥BCである。AD=4cm、DB=2cm、DE=6cmのとき、BCの長さを求めなさい。',
    answer: '9cm',
    hint: 'DE∥BCより、△ADE∽△ABC。相似比はAD:ABで求まる。',
    explanation:
      '【解法】\nDE∥BCなので、△ADE∽△ABC（平行線と同位角・共通角による相似）。\nAB=AD+DB=4+2=6cm\n相似比 = AD:AB = 4:6 = 2:3\n相似な図形では対応する辺の比がすべて等しいので、DE:BC=2:3\n6:BC=2:3\nBC = 6×(3/2) = 9cm',
  },
  {
    id: 'grade_j3_sansu_33',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question:
      '身長1.6mの人の影の長さが2mであるとき、同じ時刻に影の長さが15mの木の高さを求めなさい。',
    answer: '12m',
    hint: '同じ時刻の太陽光でできる人と木の直角三角形は相似になる。',
    explanation:
      '【解法】\n同じ時刻の太陽光でできる「人と影」「木と影」の直角三角形は相似である。\n身長:影の長さ の比はどちらも同じになる。\n人の比: 1.6:2 = 0.8:1（つまり 身長=影の長さ×0.8）\n木の高さ = 影の長さ15m × 0.8 = 12m',
  },
  {
    id: 'grade_j3_sansu_34',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '台形ABCD（AD∥BC、AD=4cm、BC=10cm）の対角線ACとBDの交点をPとする。△APDと△CPBの面積比を求めなさい。また、△APDの面積が8cm²のとき、△CPBの面積を求めなさい。',
    answer: '面積比4:25、△CPB=50cm²',
    hint: 'AD∥BCより△APD∽△CPB。相似比はAD:CBで求まり、面積比はその2乗。',
    explanation:
      '【解法】\nAD∥BCなので、錯角が等しいことと対頂角が等しいことから △APD∽△CPB。\n相似比 = AD:CB = 4:10 = 2:5\n面積比は相似比の2乗なので、△APD:△CPB = 2²:5² = 4:25\n△APDの面積が8cm²なので、比の4にあたるのが8cm²。\n△CPBの面積 = 8×(25/4) = 50cm²',
  },
  {
    id: 'grade_j3_sansu_35',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '底面の半径が6cm、高さが12cmの円錐を、頂点から底面に平行な平面で、高さが半分になる位置で切断した。頂点を含む小さい円錐と、もとの円錐の体積比を求めなさい。また、切り取ったあとに残る部分（円錐台）と、もとの円錐の体積比を求めなさい。',
    answer: '小さい円錐:もとの円錐=1:8、円錐台:もとの円錐=7:8',
    hint: '小さい円錐ともとの円錐は相似。相似比は高さの比、体積比はその3乗。',
    explanation:
      '【解法】\n頂点を含む小さい円錐は、もとの円錐と相似な形になる。\n高さの比（相似比）= 6:12 = 1:2（切り口が高さの半分の位置なので）\n体積比は相似比の3乗なので、小さい円錐:もとの円錐 = 1³:2³ = 1:8\nもとの円錐を8としたとき、小さい円錐は1にあたる。\n円錐台（残りの部分）= もとの円錐 - 小さい円錐 = 8-1 = 7\nよって 円錐台:もとの円錐 = 7:8',
  },

  // ==================== 円周角の定理 ====================
  {
    id: 'grade_j3_sansu_36',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '円Oにおいて、弧ABに対する中心角が80°のとき、同じ弧ABに対する円周角の大きさを求めなさい。',
    answer: '40°',
    hint: '円周角の定理より、円周角は中心角の半分になる。',
    explanation:
      '【解法】\n円周角の定理: 1つの弧に対する円周角の大きさは、その弧に対する中心角の半分になる。\n円周角 = 中心角 ÷ 2 = 80° ÷ 2 = 40°',
    choices: ['40°', '80°', '160°', '20°'],
  },
  {
    id: 'grade_j3_sansu_37',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '円に内接する四角形ABCDにおいて、∠A=70°のとき、∠Cの大きさを求めなさい。',
    answer: '110°',
    hint: '円に内接する四角形は、対角の和が180°になる。',
    explanation:
      '【解法】\n円に内接する四角形の性質: 向かい合う角（対角）の和は180°になる。\n∠Aと∠Cは対角の関係にあるので、\n∠A+∠C=180°\n∠C=180°-70°=110°',
  },
  {
    id: 'grade_j3_sansu_38',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '円Oの周上にこの順にA、B、C、Dの4点があり、線分ACと線分BDが円の内部の点Pで交わっている。∠CAB=48°、∠DBA=32°のとき、∠BPC（∠APBの外角にあたる角）の大きさを求めなさい。',
    answer: '80°',
    hint: '三角形ABPに注目し、三角形の外角の定理（外角=2つの離れた内角の和）を使う。',
    explanation:
      '【解法】\n三角形ABPに注目する。\n点PはAC上の点なので、∠PAB=∠CAB=48°\n点PはBD上の点なので、∠PBA=∠DBA=32°\n三角形の外角の定理より、外角は隣り合わない2つの内角の和に等しい。\n∠BPCは∠APBの外角(∠APBと合わせて180°になる隣り合う角)にあたるので、\n∠BPC=∠PAB+∠PBA=48°+32°=80°',
  },
  {
    id: 'grade_j3_sansu_39',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '円Oの外部の点Aから円に接線ATを引く（Tは接点）。OT=5cm、OA=13cmのとき、ATの長さを求めなさい。',
    answer: '12cm',
    hint: '接線は接点を通る半径と垂直に交わるので、△OTAは直角三角形になる。',
    explanation:
      '【解法】\n円の接線は、接点を通る半径と垂直に交わる性質がある（OT⊥AT）。\nよって△OTAはTが直角の直角三角形。\n三平方の定理より、\nAT²=OA²-OT²=13²-5²=169-25=144\nAT=√144=12cm',
  },
  {
    id: 'grade_j3_sansu_40',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '円Oに内接する△ABCがあり、AB=AC（二等辺三角形）、∠BAC=40°である。弧BC（Aを含まない側）上に点Dがあるとき、∠BDCの大きさを求めなさい。',
    answer: '140°',
    hint: '四角形ABDCは円に内接する四角形になる。対角の和が180°になる性質を使う。',
    explanation:
      '【解法】\n点Dは弧BC（Aを含まない側）上にあるので、四角形ABDCは円に内接する四角形になる。\n円に内接する四角形の対角の和は180°になる。\n∠BACと∠BDCはこの四角形の対角の関係にあるので、\n∠BAC+∠BDC=180°\n∠BDC=180°-40°=140°',
  },

  // ==================== 三平方の定理（平面・空間） ====================
  {
    id: 'grade_j3_sansu_41',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question: '直角三角形の、直角をはさむ2辺の長さが5cmと12cmであるとき、斜辺の長さを求めなさい。',
    answer: '13cm',
    hint: '三平方の定理: 斜辺² = (直角をはさむ辺)² + (直角をはさむ辺)²',
    explanation:
      '【解法】\n三平方の定理より、斜辺をcとすると、\nc²=5²+12²=25+144=169\nc=√169=13cm',
    choices: ['13cm', '17cm', '15cm', '10cm'],
  },
  {
    id: 'grade_j3_sansu_42',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '直角三角形の斜辺が17cm、直角をはさむ辺の1つが8cmであるとき、もう1つの辺の長さを求めなさい。',
    answer: '15cm',
    hint: '三平方の定理を、もう1辺について解く形に変形する: (もう1辺)²=(斜辺)²-(わかっている辺)²',
    explanation:
      '【解法】\nもう1つの辺の長さをxcmとすると、三平方の定理より、\n17²=8²+x²\n289=64+x²\nx²=289-64=225\nx=√225=15cm',
  },
  {
    id: 'grade_j3_sansu_43',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question: '1辺の長さが8cmの正三角形の高さを求めなさい。',
    answer: '4√3cm',
    hint: '正三角形の高さは、底辺を2等分する垂線。底辺の半分の長さと高さと1辺で直角三角形ができる。',
    explanation:
      '【解法】\n正三角形の頂点から底辺に垂線を下ろすと、底辺は2等分される（4cmずつ）。\nこの垂線・底辺の半分(4cm)・1辺(8cm)で直角三角形ができる。\n三平方の定理より、高さをhとすると、\nh²=8²-4²=64-16=48\nh=√48=4√3cm',
  },
  {
    id: 'grade_j3_sansu_44',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '座標平面上の2点 A(2,3)、B(7,-9) 間の距離を求めなさい。',
    answer: '13',
    hint: 'x座標の差とy座標の差を直角をはさむ2辺とする直角三角形を考える。',
    explanation:
      '【解法】\n2点間の距離は、x座標の差とy座標の差を2辺とする直角三角形の斜辺として求められる。\nx座標の差 = 7-2 = 5\ny座標の差 = -9-3 = -12（絶対値は12）\n三平方の定理より、\n距離² = 5²+12² = 25+144 = 169\n距離 = √169 = 13',
  },
  {
    id: 'grade_j3_sansu_45',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '縦3cm、横4cm、高さ12cmの直方体の対角線の長さを求めなさい。',
    answer: '13cm',
    hint: '直方体の対角線 d は d²=(縦)²+(横)²+(高さ)² で求められる（三平方の定理の空間への拡張）。',
    explanation:
      '【解法】\n直方体の対角線dは、3辺の長さを使って d²=(縦)²+(横)²+(高さ)² で求められる。\nd²=3²+4²+12²=9+16+144=169\nd=√169=13cm',
  },
  {
    id: 'grade_j3_sansu_46',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '1辺6cmの立方体ABCD-EFGHにおいて、頂点Aから頂点Gまでの対角線AGの長さを求めなさい。',
    answer: '6√3cm',
    hint: 'まず底面の対角線を求め、それと高さで直角三角形を作って三平方の定理を2回使う。',
    explanation:
      '【解法】\n立方体の空間対角線AGは、三平方の定理を2回使って求める。\n①まず底面の対角線(例えばACなど)を求める。\n底面の対角線 = √(6²+6²) = √72 = 6√2 cm\n②この底面の対角線と、高さ6cmを2辺とする直角三角形でAGを求める。\nAG² = (6√2)²+6² = 72+36 = 108\nAG = √108 = 6√3 cm',
  },
  {
    id: 'grade_j3_sansu_47',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question: '底面の半径が6cm、母線の長さが10cmの円錐の高さを求めなさい。',
    answer: '8cm',
    hint: '円錐の高さ・底面の半径・母線の長さは、直角三角形の3辺になっている。',
    explanation:
      '【解法】\n円錐を軸を通る平面で切ると、高さ・底面の半径・母線の長さを3辺とする直角三角形が現れる（母線が斜辺）。\n三平方の定理より、高さをhとすると、\nh²=10²-6²=100-36=64\nh=√64=8cm',
  },

  // ==================== 標本調査 ====================
  {
    id: 'grade_j3_sansu_48',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    question:
      'ある工場で作られた製品の中から400個を無作為に抽出して調べたところ、不良品が8個あった。この工場で作られた製品20000個の中には、不良品はおよそ何個あると推定されるか。',
    answer: 'およそ400個',
    hint: '標本での不良品の割合が、母集団全体でもだいたい同じになると考える。',
    explanation:
      '【解法】\n標本調査では、標本での割合が母集団全体の割合とほぼ同じになると考える。\n標本400個での不良品の割合 = 8÷400 = 0.02\n母集団20000個での不良品の推定数 = 20000×0.02 = 400個',
    choices: ['およそ400個', 'およそ200個', 'およそ800個', 'およそ40個'],
  },
  {
    id: 'grade_j3_sansu_49',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question:
      '袋の中に、白玉と黒玉が合わせて500個入っている。この袋から60個を無作為に取り出したところ、白玉が45個、黒玉が15個であった。袋の中の黒玉はおよそ何個と推定されるか。',
    answer: 'およそ125個',
    hint: '標本での黒玉の割合を求め、それを袋全体の個数にかける。',
    explanation:
      '【解法】\n標本60個での黒玉の割合 = 15÷60 = 0.25\n袋全体500個での黒玉の推定数 = 500×0.25 = 125個',
  },
  {
    id: 'grade_j3_sansu_50',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '池にいる魚の総数を推定するために、50匹の魚を捕獲して印をつけてから池に戻した。数日後、再び60匹の魚を捕獲したところ、その中に印のついた魚が6匹含まれていた。この池にいる魚の総数はおよそ何匹と推定されるか。（標識再捕法）',
    answer: 'およそ500匹',
    hint: '池全体の魚の数をN匹とすると、印をつけた50匹の割合(50/N)と、2回目の標本での印ありの割合(6/60)がほぼ等しくなる。',
    explanation:
      '【解法】\n標識再捕法の考え方: 池全体での「印ありの割合」と、2回目に捕獲した標本での「印ありの割合」はほぼ等しくなる。\n池全体の魚の数をN匹とすると、\n50/N = 6/60（池全体での印ありの割合 = 標本での印ありの割合）\nこれを解くと、\nN = 50×60÷6\nN = 3000÷6\nN = 500\nよって池にいる魚の総数はおよそ500匹',
  },
];
