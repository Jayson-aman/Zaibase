import type { Question } from './questions';

// 関関同立附属高校レベル（難関）
export const kkSansu: Question[] = [
  {
    id: 'kk_sansu_01',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '二次方程式 x²－7x＋10＝0 を解け。',
    answer: 'x＝2、x＝5',
    hint: '積が10、和が7になる2つの数を探して因数分解する。',
    explanation:
      '【解法】\n因数分解: (x－2)(x－5)＝0\n→ x＝2 または x＝5\n検算: 2²－7×2＋10＝4－14＋10＝0 ✓\n　　　5²－7×5＋10＝25－35＋10＝0 ✓',
  },
  {
    id: 'kk_sansu_02',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '連立方程式 x＋2y＝8、2x－y＝6 を解け。',
    answer: 'x＝4、y＝2',
    hint: '①式から x を y で表し、②式に代入して解く。',
    explanation:
      '【解法】\n①式: x＋2y＝8 → x＝8－2y\n②式に代入: 2(8－2y)－y＝6\n　16－4y－y＝6 → 16－5y＝6 → 5y＝10 → y＝2\n　x＝8－2×2＝4\n検算: 4＋2×2＝8 ✓　2×4－2＝6 ✓',
  },
  {
    id: 'kk_sansu_03',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '一次関数 y＝2x＋3 について、x の変域が －1≦x≦3 のとき、y の変域を求めよ。',
    answer: '1≦y≦9',
    hint: '傾きが正なので、x が最小のとき y も最小になる。',
    explanation:
      '【解法】\n傾き 2＞0 なので x が増えると y も増える。\nx＝－1 のとき: y＝2×(－1)＋3＝1（最小値）\nx＝3 のとき: y＝2×3＋3＝9（最大値）\nよって 1≦y≦9',
  },
  {
    id: 'kk_sansu_04',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '1つのサイコロを2回投げる。出た目の和が7以上になる確率を求めよ。',
    answer: '7/12',
    hint: '全部で36通り。和が7・8・9・10・11・12になる場合を数える。',
    explanation:
      '【解法】\n全通り: 6×6＝36通り\n和が7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) → 6通り\n和が8: 5通り、和が9: 4通り、和が10: 3通り\n和が11: 2通り、和が12: 1通り\n合計: 6＋5＋4＋3＋2＋1＝21通り\n確率: 21/36＝7/12',
  },
  {
    id: 'kk_sansu_05',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: 'x²－6x＋8 を因数分解せよ。また、x²－9 を因数分解せよ。',
    answer: '(x－2)(x－4)、(x＋3)(x－3)',
    hint: 'x²－6x＋8は積が8、和が－6の数を探す。x²－9は差の平方公式。',
    explanation:
      '【解法】\nx²－6x＋8: 積＝8、和＝－6 → （－2）と（－4）\n　→ (x－2)(x－4)\n\nx²－9 ＝ x²－3²\n　→ 差の平方公式: (x＋3)(x－3)',
  },
  {
    id: 'kk_sansu_06',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '直角をはさむ2辺が 6cm と 8cm の直角三角形の斜辺の長さは何 cm か。',
    answer: '10cm',
    hint: '三平方の定理: 斜辺² ＝ 6² ＋ 8²',
    explanation:
      '【解法】\n三平方の定理: c²＝6²＋8²＝36＋64＝100\nc＝√100＝10cm\n（3：4：5 の整数比の直角三角形を2倍した形）',
  },
  {
    id: 'kk_sansu_07',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '次の7つのデータがある: 3、7、5、8、4、6、7。中央値・平均値・最頻値をそれぞれ求めよ。',
    answer: '中央値＝6、平均値＝40/7（≒5.71）、最頻値＝7',
    hint: 'まず昇順に並べ替えてから中央値を読む。平均は合計÷個数。',
    explanation:
      '【解法】\n昇順に並べる: 3, 4, 5, 6, 7, 7, 8（7個）\n中央値: 4番目の値 ＝ 6\n平均値: (3＋4＋5＋6＋7＋7＋8)÷7＝40/7≒5.71\n最頻値: 7（2回登場して最多）',
  },
  {
    id: 'kk_sansu_08',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '半径 5cm の円の中心 O から円外の点 P までの距離が 13cm のとき、P から円に引いた接線の長さ PQ は何 cm か。',
    answer: '12cm',
    hint: '接点 Q では OQ⊥PQ（半径⊥接線）なので直角三角形になる。',
    explanation:
      '【解法】\n接点 Q で OQ⊥PQ が成り立つ。\n直角三角形 OQP で三平方の定理を使う:\nPQ²＝OP²－OQ²＝13²－5²＝169－25＝144\nPQ＝√144＝12cm',
  },
  {
    id: 'kk_sansu_09',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '2つの三角形が相似で相似比が 3：5 のとき、面積比を求めよ。また、小さい方の面積が 27cm² なら大きい方は何 cm²？',
    answer: '面積比＝9：25、大きい方＝75cm²',
    hint: '相似比が m：n のとき面積比は m²：n²。',
    explanation:
      '【解法】\n相似比 3：5 → 面積比 3²：5²＝9：25\n\n小さい方が 27cm²、大きい方を S cm² とすると:\n27：S＝9：25\nS＝27×(25/9)＝75cm²',
  },
  {
    id: 'kk_sansu_10',
    subject: 'sansu',
    course: 'koko-kankan',
    difficulty: 'advanced',
    question: '関数 y＝3x² について、x が 1 から 3 まで変化するときの変化の割合を求めよ。',
    answer: '12',
    hint: '変化の割合＝（y の増加量）÷（x の増加量）',
    explanation:
      '【解法】\nx＝1 のとき y＝3×1²＝3\nx＝3 のとき y＝3×3²＝27\n変化の割合＝(27－3)÷(3－1)＝24÷2＝12',
  },
];

// 天王寺・北野レベル（最難関）
export const ktSansu: Question[] = [
  {
    id: 'kt_sansu_01',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '一辺が x cm の正方形がある。縦を 3cm 延ばし、横を 2cm 縮めると面積が元より 6cm² 増えた。x の値を求めよ。',
    answer: 'x＝12',
    hint: '変化後の面積 ＝ (x＋3)(x－2)、元の面積は x²。差が 6 になる方程式を立てる。',
    explanation:
      '【解法】\n変化後の面積: (x＋3)(x－2)＝x²＋x－6\n元の面積: x²\n増加量: (x²＋x－6)－x²＝x－6\nx－6＝6 → x＝12\n検算: (12＋3)(12－2)＝15×10＝150、12²＝144、150－144＝6 ✓',
  },
  {
    id: 'kt_sansu_02',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: 'A は P 地点から、B は Q 地点から向かい合って同時に歩き始めた。PQ 間の距離は 560m で、A は毎分 70m、B は毎分 90m で歩く。2人が出会うのは出発してから何分後か。',
    answer: '3.5分後',
    hint: '2人が近づく速さは合計速度。距離÷（速度の和）で時間が出る。',
    explanation:
      '【解法】\n2人が近づく速さ: 70＋90＝160 m/分\n出会う時間: 560÷160＝3.5分後\n\n確認: A は 70×3.5＝245m、B は 90×3.5＝315m\n245＋315＝560 ✓',
  },
  {
    id: 'kt_sansu_03',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '関数 y＝ax² のグラフが点 (3, －18) を通るとき、a の値を求めよ。また x＝－2 のときの y の値を求めよ。',
    answer: 'a＝－2、y＝－8',
    hint: '点の座標を代入して a を求め、次に x＝－2 を代入する。',
    explanation:
      '【解法】\n点 (3, －18) を代入: －18＝a×3²＝9a → a＝－2\n\nx＝－2 のとき:\ny＝－2×(－2)²＝－2×4＝－8',
  },
  {
    id: 'kt_sansu_04',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '赤玉 4 個・青玉 3 個の計 7 個の袋から 2 個を取り出す。2 個とも同じ色である確率を求めよ。',
    answer: '3/7',
    hint: '全体の取り出し方は C(7,2)＝21通り。同色の取り出し方は赤2個＋青2個。',
    explanation:
      '【解法】\n全体: C(7,2)＝7×6÷2＝21通り\n赤2個: C(4,2)＝4×3÷2＝6通り\n青2個: C(3,2)＝3×2÷2＝3通り\n同色: 6＋3＝9通り\n確率: 9/21＝3/7',
  },
  {
    id: 'kt_sansu_05',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '(x＋y)²＝25、xy＝6 のとき、x²＋y² と (x－y)² の値をそれぞれ求めよ。',
    answer: 'x²＋y²＝13、(x－y)²＝1',
    hint: '展開公式: x²＋y²＝(x＋y)²－2xy、(x－y)²＝(x＋y)²－4xy',
    explanation:
      '【解法】\nx²＋y²＝(x＋y)²－2xy＝25－2×6＝25－12＝13\n\n(x－y)²＝(x＋y)²－4xy＝25－4×6＝25－24＝1',
  },
  {
    id: 'kt_sansu_06',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '1辺 8cm の立方体の対角線（頂点から対角にある頂点までの長さ）を求めよ。（√3≒1.732）',
    answer: '8√3 cm（≒13.86cm）',
    hint: 'まず底面の対角線を求め、次に三平方の定理で立体対角線を求める。',
    explanation:
      '【解法】\n底面の対角線: √(8²＋8²)＝√128＝8√2 cm\n立体対角線 d: d²＝(8√2)²＋8²＝128＋64＝192\nd＝√192＝8√3≒8×1.732≒13.86cm',
  },
  {
    id: 'kt_sansu_07',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '1, 2, 3, 4, 5 の 5 枚のカードから 3 枚を選んで 3 桁の整数を作る。偶数になる場合は何通りか。',
    answer: '24通り',
    hint: '一の位（偶数になる位）が 2 か 4 の場合を別々に数える。',
    explanation:
      '【解法】\n3桁の偶数 → 一の位が 2 または 4\n\n一の位が 2 の場合: 残り4枚から百の位・十の位を並べる\n　→ 4×3＝12通り\n一の位が 4 の場合: 残り4枚から百の位・十の位を並べる\n　→ 4×3＝12通り\n合計: 12＋12＝24通り',
  },
  {
    id: 'kt_sansu_08',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '△ABC において AB＝6cm、AC＝8cm、∠A＝90° のとき、tan B の値と BC の長さを求めよ。',
    answer: 'tan B＝4/3、BC＝10cm',
    hint: '∠A＝90° なので BC が斜辺。tan B は∠B の対辺÷隣辺。',
    explanation:
      '【解法】\n∠A＝90° より、∠B から見ると:\n・対辺 ＝ AC ＝ 8cm\n・隣辺 ＝ AB ＝ 6cm\ntan B ＝ 8/6 ＝ 4/3\n\nBC（斜辺）: BC²＝6²＋8²＝36＋64＝100 → BC＝10cm',
  },
  {
    id: 'kt_sansu_09',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '1辺が 6cm の正三角形の面積を求めよ。（√3≒1.732）',
    answer: '9√3 cm²（≒15.6cm²）',
    hint: '正三角形の高さは三平方の定理で求める。面積＝底辺×高さ÷2。',
    explanation:
      '【解法】\n高さ h: h²＝6²－3²＝36－9＝27 → h＝3√3\n面積＝6×3√3÷2＝9√3≒9×1.732≒15.6cm²\n\n公式でも確認: (√3/4)×6²＝(√3/4)×36＝9√3 ✓',
  },
  {
    id: 'kt_sansu_10',
    subject: 'sansu',
    course: 'koko-top',
    difficulty: 'advanced',
    question: '自然数を小さい順に 1 から並べたとき、1 から n までの和が 300 を超える最小の n を求めよ。',
    answer: 'n＝25',
    hint: '1＋2＋…＋n ＝ n(n＋1)/2 の公式を使い、300を超える最小の整数を探す。',
    explanation:
      '【解法】\nn(n＋1)/2 ＞ 300 → n(n＋1) ＞ 600\n\nn＝24: 24×25＝600 → 600/2＝300（超えていないので不適）\nn＝25: 25×26＝650 → 650/2＝325 ＞ 300 ✓\n\nよって最小の n は 25',
  },
];
