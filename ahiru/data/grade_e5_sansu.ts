import type { Question } from './questions-meta';

// 小学5年生 算数（学年タグ e5）。中学受験ではなく、通常の小5算数カリキュラムに
// 沿った内容：整数と小数（10倍・100倍・1/10）、体積、合同な図形、図形の角、
// 分数と小数・整数の関係、分数のたし算・ひき算（異分母）、平均、
// 単位量あたりの大きさ（速さ・人口密度）、割合（百分率・歩合）、
// 円と正多角形、角柱と円柱。
export const gradeE5SansuQuestions: Question[] = [
  // ============================================================
  // 整数と小数（10倍・100倍・1/10） 5問 (01-05)
  // ============================================================
  {
    id: 'grade_e5_sansu_01',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '3.4を10倍すると、いくつになりますか。',
    answer: '34',
    hint: '10倍すると、小数点は右へ1桁動く。',
    explanation:
      '【解説】\n①10倍すると、小数点は右へ1桁動く。\n　3.4 → 34.0 → 34\n答え：34',
    memoryTip: '10倍は小数点を右へ1桁、100倍なら右へ2桁動かす。',
  },
  {
    id: 'grade_e5_sansu_02',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '52.7を100倍すると、いくつになりますか。',
    answer: '5270',
    hint: '100倍すると、小数点は右へ2桁動く。',
    explanation:
      '【解説】\n①100倍すると、小数点は右へ2桁動く。\n　52.7 → 527.0 → 5270\n答え：5270',
  },
  {
    id: 'grade_e5_sansu_03',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '860を10分の1（1/10）にすると、いくつになりますか。',
    answer: '86',
    hint: '1/10にすると、小数点は左へ1桁動く。',
    explanation:
      '【解説】\n①1/10にすると、小数点は左へ1桁動く。\n　860 → 86.0 → 86\n答え：86',
    memoryTip: '1/10は小数点を左へ1桁、1/100なら左へ2桁動かす。',
  },
  {
    id: 'grade_e5_sansu_04',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: 'ある数を100倍したら730になりました。もとの数はいくつですか。',
    answer: '7.3',
    hint: '100倍したのが730なので、逆に730を1/100にする。',
    explanation:
      '【解説】\n①100倍の逆は1/100にすること。1/100にすると、小数点は左へ2桁動く。\n　730 → 7.30 → 7.3\n②確かめ：7.3 × 100 = 730（合っている）\n答え：7.3',
    pitfall: '「100倍したら730」を「730を100倍する」と読み間違えないこと。逆算が必要。',
  },
  {
    id: 'grade_e5_sansu_05',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '1mの重さが0.45kgのはり金があります。このはり金100mの重さは何kgですか。',
    answer: '45kg',
    hint: '100mは1mの100倍。100倍すると小数点は右へ2桁動く。',
    explanation:
      '【解説】\n①100mは1mの100倍なので、重さも100倍になる。\n②0.45を100倍すると、小数点は右へ2桁動く。\n　0.45 → 45.0 → 45\n答え：45kg',
  },

  // ============================================================
  // 体積（直方体・立方体） 5問 (06-10)
  // ============================================================
  {
    id: 'grade_e5_sansu_06',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '縦5cm、横8cm、高さ4cmの直方体の体積は何cm³ですか。',
    answer: '160cm³',
    hint: '直方体の体積 = 縦 × 横 × 高さ',
    explanation:
      '【解説】\n①直方体の体積の公式にあてはめる。\n　体積 = 縦 × 横 × 高さ\n②数をあてはめて計算する。\n　5 × 8 × 4 = 160\n答え：160cm³',
    figureDescription: '縦5cm・横8cm・高さ4cmの直方体の見取図',
  },
  {
    id: 'grade_e5_sansu_07',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '1辺が6cmの立方体の体積は何cm³ですか。',
    answer: '216cm³',
    hint: '立方体の体積 = 1辺 × 1辺 × 1辺',
    explanation:
      '【解説】\n①立方体の体積の公式にあてはめる。\n　体積 = 1辺 × 1辺 × 1辺\n②数をあてはめて計算する。\n　6 × 6 × 6 = 216\n答え：216cm³',
    figureDescription: '1辺6cmの立方体の見取図',
  },
  {
    id: 'grade_e5_sansu_08',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '縦12cm、横9cm、高さ□cmの直方体の体積が540cm³です。高さは何cmですか。',
    answer: '5cm',
    hint: '底面積を先に求め、体積÷底面積で高さを求める。',
    explanation:
      '【解説】\n①底面積を求める。\n　底面積 = 縦 × 横 = 12 × 9 = 108cm²\n②体積 ÷ 底面積 で高さを求める。\n　540 ÷ 108 = 5\n答え：5cm',
    figureDescription: '縦12cm・横9cmの直方体。体積540cm³から高さを求める',
  },
  {
    id: 'grade_e5_sansu_09',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '底面が縦20cm、横30cmの長方形の水そうに、深さ15cmまで水を入れました。入れた水の体積は何cm³ですか。また、それは何Lですか。',
    answer: '9000cm³（9L）',
    hint: '水の体積も直方体の体積と同じ求め方。1000cm³ = 1L。',
    explanation:
      '【解説】\n①底面積を求める。\n　底面積 = 20 × 30 = 600cm²\n②水の体積 = 底面積 × 深さ\n　600 × 15 = 9000cm³\n③1000cm³ = 1Lなので、9000cm³をLに直す。\n　9000 ÷ 1000 = 9L\n答え：9000cm³（9L）',
    figureDescription: '縦20cm・横30cmの底面に深さ15cmまで水が入った水そう',
    pitfall: 'cm³のまま「答え：9000」だけにせず、1000cm³=1Lの関係を使ってLにも直す。',
  },
  {
    id: 'grade_e5_sansu_10',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '1辺10cmの立方体の形をした容器いっぱいに水が入っています。この水を、底面が縦8cm、横10cmの直方体の容器に移しかえると、水の深さは何cmになりますか。',
    answer: '12.5cm',
    hint: '水の体積は移しかえても変わらない。深さ = 体積 ÷ 新しい底面積。',
    explanation:
      '【解説】\n①はじめの水の体積（立方体の体積）を求める。\n　10 × 10 × 10 = 1000cm³\n②移しかえても水の体積は変わらないので、新しい容器でもこの体積は1000cm³。\n③新しい容器の底面積を求める。\n　8 × 10 = 80cm²\n④深さ = 体積 ÷ 底面積\n　1000 ÷ 80 = 12.5\n答え：12.5cm',
    figureDescription: '1辺10cmの立方体の容器から、底面8cm×10cmの直方体の容器へ水を移しかえる',
  },

  // ============================================================
  // 合同な図形 4問 (11-14)
  // ============================================================
  {
    id: 'grade_e5_sansu_11',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '三角形ABCと三角形DEFは合同で、AB=DE、BC=EF、CA=FDです。AB=7cm、BC=9cm、CA=6cmのとき、辺FDの長さは何cmですか。',
    answer: '6cm',
    hint: '対応する頂点の順番（A↔D、B↔E、C↔F）に注目する。',
    explanation:
      '【解説】\n①対応する辺を確認する。CA=FDと対応しているので、辺FDは辺CAと同じ長さになる。\n②CA=6cmなので、FD=6cm。\n答え：6cm',
    figureDescription: '三角形ABC（AB=7cm、BC=9cm、CA=6cm）。合同な三角形DEFの対応関係',
  },
  {
    id: 'grade_e5_sansu_12',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '2つの図形が合同であるとき、対応する角の大きさの関係として正しいものを次から選びなさい。',
    answer: '等しい',
    hint: '合同とは「形も大きさも同じ」ということ。',
    explanation:
      '【解説】\n①合同な図形は、形も大きさもぴったり重なる図形のこと。\n②対応する辺の長さはすべて等しく、対応する角の大きさもすべて等しい。\n答え：等しい',
    choices: ['等しい', '2倍になる', '異なる', '関係ない'],
    figureDescription: '合同な三角形。対応する角に同じ印がついている様子',
  },
  {
    id: 'grade_e5_sansu_13',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '三角形の合同条件として正しいものを次から選びなさい。',
    answer: '2組の辺とその間の角がそれぞれ等しい',
    hint: '代表的な合同条件は3つ：3辺／2辺+間の角／1辺+両端の角。',
    explanation:
      '【解説】\n①三角形が合同になる代表的な条件は次の3つ。\n　・3組の辺がそれぞれ等しい\n　・2組の辺とその間の角がそれぞれ等しい\n　・1組の辺とその両はしの角がそれぞれ等しい\n②選択肢の中で正しいのは「2組の辺とその間の角がそれぞれ等しい」。\n答え：2組の辺とその間の角がそれぞれ等しい',
    choices: [
      '2組の辺とその間の角がそれぞれ等しい',
      '1組の辺とその他1つの角が等しい',
      '3つの角がそれぞれ等しい',
      '面積が等しい',
    ],
    figureDescription: '2組の辺とその間の角に同じ印をつけた三角形',
    pitfall: '「3つの角がそれぞれ等しい」だけでは、大きさが違う相似な三角形にもなり得るので合同条件にはならない。',
  },
  {
    id: 'grade_e5_sansu_14',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '四角形ABCDで、対角線ACをひいて2つの三角形に分けたところ、AB=AD、BC=DCでした。三角形ABCと三角形ACDが合同であるといえる理由を、合同条件の名前で答えなさい。',
    answer: '3組の辺がそれぞれ等しい',
    hint: 'AB=AD、BC=DC、そしてACは2つの三角形に共通の辺であることに注目する。',
    explanation:
      '【解説】\n①三角形ABCと三角形ACDの3組の辺を比べる。\n　AB=AD（問題文より）\n　BC=DC（問題文より）\n　AC=AC（共通の辺なので当然等しい）\n②3組の辺がすべて等しいので、合同条件「3組の辺がそれぞれ等しい」にあてはまる。\n答え：3組の辺がそれぞれ等しい',
    figureDescription: '四角形ABCDと対角線AC。AB=AD、BC=DCの凧形（たこ形）',
  },

  // ============================================================
  // 図形の角（三角形・四角形の内角の和） 5問 (15-19)
  // ============================================================
  {
    id: 'grade_e5_sansu_15',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '三角形の3つの角の大きさの和は何度ですか。',
    answer: '180度',
    hint: 'どんな形の三角形でも、3つの角の和はいつも同じ。',
    explanation:
      '【解説】\n①三角形の3つの内角の和は、形や大きさに関係なくいつも180度になる。\n答え：180度',
    figureDescription: '3つの角の和が180度になる三角形',
  },
  {
    id: 'grade_e5_sansu_16',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '四角形の4つの角の大きさの和は何度ですか。',
    answer: '360度',
    hint: '四角形は対角線で2つの三角形に分けられる。',
    explanation:
      '【解説】\n①四角形は、対角線を1本ひくと2つの三角形に分けられる。\n②三角形1つの内角の和は180度なので、四角形の内角の和は\n　180 × 2 = 360度\n答え：360度',
    figureDescription: '対角線で2つの三角形に分けられた四角形',
  },
  {
    id: 'grade_e5_sansu_17',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '三角形の3つの角のうち、2つの角の大きさが50度と65度です。残りの角の大きさは何度ですか。',
    answer: '65度',
    hint: '三角形の内角の和は180度になることを使う。',
    explanation:
      '【解説】\n①三角形の内角の和は180度。\n②残りの角 = 180 − 50 − 65\n　180 − 50 = 130\n　130 − 65 = 65\n答え：65度',
    figureDescription: '角の大きさが50度・65度・□度の三角形',
  },
  {
    id: 'grade_e5_sansu_18',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '四角形の4つの角のうち、3つの角の大きさが80度、95度、110度です。残りの角の大きさは何度ですか。',
    answer: '75度',
    hint: '四角形の内角の和は360度になることを使う。',
    explanation:
      '【解説】\n①四角形の内角の和は360度。\n②残りの角 = 360 − 80 − 95 − 110\n　80 + 95 + 110 = 285\n　360 − 285 = 75\n答え：75度',
    figureDescription: '角の大きさが80度・95度・110度・□度の四角形',
  },
  {
    id: 'grade_e5_sansu_19',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question: '五角形の5つの角の大きさの和は何度ですか。1つの頂点から対角線をひいて三角形に分けて考えなさい。',
    answer: '540度',
    hint: '1つの頂点から対角線を2本ひくと、五角形は3つの三角形に分けられる。',
    explanation:
      '【解説】\n①五角形の1つの頂点から対角線を2本ひくと、五角形は3つの三角形に分けられる。\n②三角形1つの内角の和は180度なので、五角形の内角の和は\n　180 × 3 = 540度\n答え：540度',
    choices: ['360度', '450度', '540度', '720度'],
    figureDescription: '1つの頂点から対角線をひいて3つの三角形に分けた五角形',
  },

  // ============================================================
  // 分数と小数・整数の関係 4問 (20-23)
  // ============================================================
  {
    id: 'grade_e5_sansu_20',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '3÷4の商を、分数で表しなさい。',
    answer: '3/4',
    hint: '□÷△ は、分数では △分の□（分子が□、分母が△）になる。',
    explanation:
      '【解説】\n①わり算は、わられる数を分子、わる数を分母にした分数で表せる。\n　3 ÷ 4 = 3/4\n答え：3/4',
  },
  {
    id: 'grade_e5_sansu_21',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '分数7/10を小数で表しなさい。',
    answer: '0.7',
    hint: '分数は「分子÷分母」で小数に直せる。',
    explanation:
      '【解説】\n①分数は分子を分母でわると小数になる。\n　7 ÷ 10 = 0.7\n答え：0.7',
  },
  {
    id: 'grade_e5_sansu_22',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '小数0.6を、できるだけ簡単な分数で表しなさい。',
    answer: '3/5',
    hint: 'まず10を分母にした分数にしてから、約分する。',
    explanation:
      '【解説】\n①0.6は「10分の6」なので、まず分数にする。\n　0.6 = 6/10\n②6/10を約分する。分子・分母を最大公約数の2でわる。\n　6 ÷ 2 = 3、10 ÷ 2 = 5\n　6/10 = 3/5\n答え：3/5',
    pitfall: '6/10のままにせず、約分して最も簡単な分数にすること。',
  },
  {
    id: 'grade_e5_sansu_23',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '整数5を、分母が3の分数で表しなさい。',
    answer: '15/3',
    hint: '整数は「1を分母とした分数」と考え、分母をそろえる。',
    explanation:
      '【解説】\n①整数5は、5/1（1分の5）と考えられる。\n②分母を3にそろえるため、分子・分母に3をかける。\n　5/1 = (5×3)/(1×3) = 15/3\n③確かめ：15 ÷ 3 = 5（もとの整数に戻る）\n答え：15/3',
  },

  // ============================================================
  // 分数のたし算・ひき算（異分母） 5問 (24-28)
  // ============================================================
  {
    id: 'grade_e5_sansu_24',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '1/2 + 1/3 を計算しなさい。',
    answer: '5/6',
    hint: '分母をそろえて（通分して）から計算する。',
    explanation:
      '【解説】\n①分母2と3の最小公倍数は6なので、6に通分する。\n　1/2 = 3/6、1/3 = 2/6\n②分子どうしをたす。\n　3/6 + 2/6 = 5/6\n答え：5/6',
  },
  {
    id: 'grade_e5_sansu_25',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '3/4 − 1/6 を計算しなさい。',
    answer: '7/12',
    hint: '分母4と6の最小公倍数で通分する。',
    explanation:
      '【解説】\n①分母4と6の最小公倍数は12なので、12に通分する。\n　3/4 = 9/12、1/6 = 2/12\n②分子どうしをひく。\n　9/12 − 2/12 = 7/12\n答え：7/12',
  },
  {
    id: 'grade_e5_sansu_26',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '2/3 + 3/5 を計算し、帯分数で答えなさい。',
    answer: '1と4/15',
    hint: '分母3と5の最小公倍数15で通分する。仮分数は帯分数に直す。',
    explanation:
      '【解説】\n①分母3と5の最小公倍数は15なので、15に通分する。\n　2/3 = 10/15、3/5 = 9/15\n②分子どうしをたす。\n　10/15 + 9/15 = 19/15\n③仮分数19/15を帯分数に直す。\n　19 ÷ 15 = 1あまり4なので、19/15 = 1と4/15\n答え：1と4/15',
    pitfall: '通分を忘れて、分母どうし・分子どうしをそのままたし算しないこと。',
  },
  {
    id: 'grade_e5_sansu_27',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '5/6 − 1/4 を計算しなさい。',
    answer: '7/12',
    hint: '分母6と4の最小公倍数12で通分する。',
    explanation:
      '【解説】\n①分母6と4の最小公倍数は12なので、12に通分する。\n　5/6 = 10/12、1/4 = 3/12\n②分子どうしをひく。\n　10/12 − 3/12 = 7/12\n答え：7/12',
  },
  {
    id: 'grade_e5_sansu_28',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question: '水とうに1と1/2Lのお茶が入っています。遠足で3/4L飲みました。残りは何Lですか。',
    answer: '3/4L',
    hint: '帯分数を仮分数に直してから、通分して計算する。',
    explanation:
      '【解説】\n①帯分数1と1/2を仮分数に直す。\n　1と1/2 = 3/2\n②分母2と4の最小公倍数4で通分する。\n　3/2 = 6/4、3/4はそのまま\n③分子どうしをひく。\n　6/4 − 3/4 = 3/4\n答え：3/4L',
  },

  // ============================================================
  // 平均 5問 (29-33)
  // ============================================================
  {
    id: 'grade_e5_sansu_29',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '国語のテストを3回受けたところ、点数は80点、90点、70点でした。3回の平均点は何点ですか。',
    answer: '80点',
    hint: '平均 = 合計 ÷ 個数',
    explanation:
      '【解説】\n①3回の点数の合計を求める。\n　80 + 90 + 70 = 240\n②合計を回数でわる。\n　240 ÷ 3 = 80\n答え：80点',
    figureDescription: '3回のテスト点数（80点・90点・70点）の棒グラフ',
  },
  {
    id: 'grade_e5_sansu_30',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '5人の体重の平均が32kgのとき、5人の体重の合計は何kgですか。',
    answer: '160kg',
    hint: '合計 = 平均 × 個数',
    explanation:
      '【解説】\n①平均の意味から、合計 = 平均 × 人数で求められる。\n②32 × 5 = 160\n答え：160kg',
    figureDescription: '5人の体重を平均32kgの高さでそろえた棒グラフ',
  },
  {
    id: 'grade_e5_sansu_31',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question:
      'あるクラスの男子15人の平均身長は140cm、女子10人の平均身長は136cmです。クラス全体25人の平均身長は何cmですか。',
    answer: '138.4cm',
    hint: '男子・女子それぞれの合計を先に求めてから、25人でわる。',
    explanation:
      '【解説】\n①男子15人の身長の合計を求める。\n　140 × 15 = 2100cm\n②女子10人の身長の合計を求める。\n　136 × 10 = 1360cm\n③クラス全体の合計を求める。\n　2100 + 1360 = 3460cm\n④クラス全体の人数25人でわる。\n　3460 ÷ 25 = 138.4\n答え：138.4cm',
    pitfall: '140と136をそのまま平均して(140+136)÷2としないこと。人数が違うので、合計をそれぞれ求めてから全体でわる。',
    figureDescription: '男子15人（平均140cm）・女子10人（平均136cm）・全体25人（平均138.4cm）の比較棒グラフ',
  },
  {
    id: 'grade_e5_sansu_32',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '1週間のうち4日間の読書時間を記録したところ、25分、40分、0分、35分でした。この4日間の平均読書時間は何分ですか。',
    answer: '25分',
    hint: '0分の日も1日として数える。',
    explanation:
      '【解説】\n①4日間の合計を求める。0分の日も忘れずに数える。\n　25 + 40 + 0 + 35 = 100\n②合計を日数4でわる。\n　100 ÷ 4 = 25\n答え：25分',
    pitfall: '読書時間が0分だった日を「なかったこと」にして3日でわらないこと。日数は4日のまま。',
    figureDescription: '4日間の読書時間（25分・40分・0分・35分）の棒グラフ',
  },
  {
    id: 'grade_e5_sansu_33',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '5回のテストのうち、はじめの4回の平均点が82点でした。5回目に98点をとったとき、5回全体の平均点は何点ですか。',
    answer: '85.2点',
    hint: 'はじめの4回の合計を先に求めてから、5回目を足す。',
    explanation:
      '【解説】\n①はじめの4回の合計を求める。\n　82 × 4 = 328点\n②5回目の98点を足して、5回の合計を求める。\n　328 + 98 = 426点\n③5回でわって平均を求める。\n　426 ÷ 5 = 85.2\n答え：85.2点',
    figureDescription: 'はじめの4回の平均82点・5回目98点・5回全体の平均85.2点の比較棒グラフ',
  },

  // ============================================================
  // 単位量あたりの大きさ（速さ・人口密度含む） 6問 (34-39)
  // ============================================================
  {
    id: 'grade_e5_sansu_34',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '60kmの道のりを2時間で走ったときの時速は何kmですか。',
    answer: '時速30km',
    hint: '速さ = 道のり ÷ 時間',
    explanation:
      '【解説】\n①速さの公式にあてはめる。\n　速さ = 道のり ÷ 時間\n②60 ÷ 2 = 30\n答え：時速30km',
    figureDescription: '道のりと時間の比例のグラフ（時速30km）',
  },
  {
    id: 'grade_e5_sansu_35',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '時速45kmで3時間走ると、何km進みますか。',
    answer: '135km',
    hint: '道のり = 速さ × 時間',
    explanation:
      '【解説】\n①道のりの公式にあてはめる。\n　道のり = 速さ × 時間\n②45 × 3 = 135\n答え：135km',
    figureDescription: '道のりと時間の比例のグラフ（時速45km、3時間で135km）',
  },
  {
    id: 'grade_e5_sansu_36',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '210kmの道のりを時速70kmで走ると、何時間かかりますか。',
    answer: '3時間',
    hint: '時間 = 道のり ÷ 速さ',
    explanation:
      '【解説】\n①時間の公式にあてはめる。\n　時間 = 道のり ÷ 速さ\n②210 ÷ 70 = 3\n答え：3時間',
    figureDescription: '道のりと時間の比例のグラフ（時速70km、210kmで3時間）',
  },
  {
    id: 'grade_e5_sansu_37',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '面積80km²の町に、人口が24000人住んでいます。この町の人口密度（1km²あたりの人数）は何人ですか。',
    answer: '300人',
    hint: '人口密度 = 人口 ÷ 面積',
    explanation:
      '【解説】\n①人口密度の公式にあてはめる。\n　人口密度 = 人口 ÷ 面積\n②24000 ÷ 80 = 300\n答え：300人',
    figureDescription: '1km²あたりの人数300人を表す棒グラフ',
  },
  {
    id: 'grade_e5_sansu_38',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '150gで420円のひき肉があります。この肉100gあたりの値段は何円ですか。',
    answer: '280円',
    hint: 'まず1gあたりの値段を求め、それを100倍する。',
    explanation:
      '【解説】\n①1gあたりの値段を求める。\n　420 ÷ 150 = 2.8円\n②100gあたりの値段を求める。\n　2.8 × 100 = 280円\n答え：280円',
    figureDescription: '150gで420円のひき肉と、100gあたり280円の比較棒グラフ',
  },
  {
    id: 'grade_e5_sansu_39',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question:
      'A町は面積45km²で人口13500人、B町は面積60km²で人口21000人です。人口密度が高いのはどちらの町ですか。また、その人口密度は1km²あたり何人ですか。',
    answer: 'B町（1km²あたり350人）',
    hint: 'それぞれの町の人口密度（人口÷面積）を求めて比べる。',
    explanation:
      '【解説】\n①A町の人口密度を求める。\n　13500 ÷ 45 = 300人\n②B町の人口密度を求める。\n　21000 ÷ 60 = 350人\n③300人と350人を比べると、B町の方が人口密度が高い。\n答え：B町（1km²あたり350人）',
    figureDescription: 'A町（1km²あたり300人）とB町（1km²あたり350人）の人口密度の比較棒グラフ',
  },

  // ============================================================
  // 割合（百分率・歩合） 6問 (40-45)
  // ============================================================
  {
    id: 'grade_e5_sansu_40',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '40人のクラスで、8人が眼鏡をかけています。眼鏡をかけている人の割合は全体の何%ですか。',
    answer: '20%',
    hint: '割合 = くらべる量 ÷ もとにする量',
    explanation:
      '【解説】\n①割合を求める。\n　割合 = くらべる量 ÷ もとにする量 = 8 ÷ 40 = 0.2\n②割合を百分率（%）に直す。\n　0.2 × 100 = 20%\n答え：20%',
    figureDescription: '40人のうち眼鏡8人・眼鏡なし32人の円グラフ',
  },
  {
    id: 'grade_e5_sansu_41',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '定価500円のノートを、30%引きで売ります。売る値段はいくらですか。',
    answer: '350円',
    hint: '30%引きは、定価の(1−0.3)倍。',
    explanation:
      '【解説】\n①30%引きは、定価の70%（0.7倍）を払うということ。\n　1 − 0.3 = 0.7\n②売る値段を求める。\n　500 × 0.7 = 350\n答え：350円',
    figureDescription: '定価500円と、30%引きの売値350円の比較棒グラフ',
  },
  {
    id: 'grade_e5_sansu_42',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: 'ある学校の生徒数は600人で、そのうち45%が男子です。男子は何人ですか。',
    answer: '270人',
    hint: '男子の人数 = 全体の人数 × 割合',
    explanation:
      '【解説】\n①45%を小数に直す。\n　45% = 0.45\n②男子の人数を求める。\n　600 × 0.45 = 270\n答え：270人',
    figureDescription: '600人のうち男子270人・女子330人の円グラフ',
  },
  {
    id: 'grade_e5_sansu_43',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '野球の打率が3割5分のとき、これを百分率で表すと何%ですか。',
    answer: '35%',
    hint: '1割=10%、1分=1%、1厘=0.1%',
    explanation:
      '【解説】\n①歩合と百分率の対応を確かめる。\n　1割 = 10%、1分 = 1%\n②3割5分を百分率に直す。\n　3割 = 30%、5分 = 5%\n　30% + 5% = 35%\n答え：35%',
    choices: ['25%', '30%', '35%', '40%'],
    memoryTip: '割・分・厘は「割=10%」「分=1%」「厘=0.1%」と覚える。',
  },
  {
    id: 'grade_e5_sansu_44',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '定価2000円の品物を1500円で売りました。この値引きは定価の何%ですか。',
    answer: '25%',
    hint: '値引きの割合 = 値引き額 ÷ 定価',
    explanation:
      '【解説】\n①値引き額を求める。\n　2000 − 1500 = 500円\n②値引き額が定価の何割にあたるか求める。\n　500 ÷ 2000 = 0.25\n③百分率に直す。\n　0.25 × 100 = 25%\n答え：25%',
    figureDescription: '定価2000円と売値1500円の比較棒グラフ',
  },
  {
    id: 'grade_e5_sansu_45',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question: '仕入れ値800円の商品に、25%の利益を見込んで定価をつけました。定価はいくらですか。',
    answer: '1000円',
    hint: '定価 = 仕入れ値 ×（1＋利益の割合）',
    explanation:
      '【解説】\n①25%の利益を見込むということは、仕入れ値の125%（1.25倍）で売るということ。\n　1 + 0.25 = 1.25\n②定価を求める。\n　800 × 1.25 = 1000\n答え：1000円',
    figureDescription: '仕入れ値800円と、25%の利益を見込んだ定価1000円の比較棒グラフ',
  },

  // ============================================================
  // 円と正多角形 3問 (46-48)
  // ============================================================
  {
    id: 'grade_e5_sansu_46',
    subject: 'sansu',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e5',
    question: '半径7cmの円の円周は何cmですか。円周率は3.14とします。',
    answer: '43.96cm',
    hint: '円周 = 直径 × 円周率',
    explanation:
      '【解説】\n①直径を求める。\n　直径 = 半径 × 2 = 7 × 2 = 14cm\n②円周の公式にあてはめる。\n　円周 = 直径 × 円周率 = 14 × 3.14 = 43.96\n答え：43.96cm',
    figureDescription: '半径7cmの円',
  },
  {
    id: 'grade_e5_sansu_47',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question: '直径20cmの円の面積は何cm²ですか。円周率は3.14とします。',
    answer: '314cm²',
    hint: 'まず直径から半径を求める。面積 = 半径×半径×円周率',
    explanation:
      '【解説】\n①直径20cmから半径を求める。\n　半径 = 直径 ÷ 2 = 20 ÷ 2 = 10cm\n②面積の公式にあてはめる。\n　面積 = 半径 × 半径 × 円周率 = 10 × 10 × 3.14 = 314\n答え：314cm²',
    choices: ['157cm²', '251.2cm²', '314cm²', '628cm²'],
    figureDescription: '直径20cm（半径10cm）の円',
    pitfall: '直径をそのまま面積の公式にあてはめず、必ず半径に直してから計算すること。',
  },
  {
    id: 'grade_e5_sansu_48',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '正八角形の1つの内角は何度ですか。',
    answer: '135度',
    hint: '内角の和を求めてから、頂点の数(8)でわる。',
    explanation:
      '【解説】\n①八角形の内角の和を求める。\n　内角の和 = (角の数 − 2) × 180 = (8 − 2) × 180 = 1080度\n②正八角形は8つの角がすべて等しいので、1つの内角を求める。\n　1080 ÷ 8 = 135\n答え：135度',
    figureDescription: '正八角形。8つの角がすべて等しい',
  },

  // ============================================================
  // 角柱と円柱（見取図・展開図） 2問 (49-50)
  // ============================================================
  {
    id: 'grade_e5_sansu_49',
    subject: 'sansu',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e5',
    question: '三角柱には、底面が2つと側面がいくつかあります。三角柱の面は全部でいくつありますか。',
    answer: '5つ',
    hint: '底面の数と側面の数を分けて数える。側面の数は底面の辺の数と同じ。',
    explanation:
      '【解説】\n①三角柱の底面は三角形が2つ（上と下）。\n②側面は、底面の三角形の辺の数と同じ3つ（長方形）。\n③面の数の合計を求める。\n　2 + 3 = 5\n答え：5つ',
    figureDescription: '三角柱の見取図',
  },
  {
    id: 'grade_e5_sansu_50',
    subject: 'sansu',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e5',
    question:
      '底面の半径4cm、高さ10cmの円柱があります。この円柱の側面を展開すると長方形になります。その長方形の横の長さ（底面の円周）は何cmですか。円周率は3.14とします。',
    answer: '25.12cm',
    hint: '円柱の側面を展開した長方形の横の長さは、底面の円周と同じになる。',
    explanation:
      '【解説】\n①円柱の側面を展開すると長方形になり、その横の長さは底面の円周と同じになる。\n②底面の円周を求める。\n　円周 = 直径 × 円周率 = (4 × 2) × 3.14 = 8 × 3.14 = 25.12\n答え：25.12cm',
    figureDescription: '底面の半径4cm・高さ10cmの円柱と、その側面の展開図',
  },
];
