import type { Question } from './questions-meta';

export const gradeKoushikiK5En2Questions: Question[] = [
  {
    id: 'koushiki_k5en2_naisetsu_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question:
      '円Oに内接する四角形ABCDがある。辺BCをCの方向に延長した点をEとする。∠BAD=72°のとき、外角∠DCEの大きさを求めなさい。',
    answer: '72°',
    hint: 'まず円に内接する四角形の性質（対角の和は180°）を使って∠BCDを求め、次に一直線上の角の関係を使う。',
    explanation:
      '【解法】\n円に内接する四角形の性質（1）：対角の和は180°になる。四角形ABCDにおいて、∠BADと∠BCDは対角の関係にあるので、\n∠BAD+∠BCD=180°\n∠BAD=72°を代入すると、\n∠BCD=180°-72°=108°\n次に、点Eは辺BCをCの方向に延長した点なので、∠BCDと∠DCEは一直線上にできる角（隣り合う角）であり、その和は180°になる。\n∠BCD+∠DCE=180°\n∠DCE=180°-108°=72°\nよって∠DCE=72°。これは∠BAD（72°）と一致しており、円に内接する四角形の性質（2）「1つの内角に隣り合う外角は、その内対角に等しい」がそのまま確認できる形になっている。',
  },
  {
    id: 'koushiki_k5en2_naisetsu_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '円Oに内接する四角形ABCDがあり、AB=ADである（△ABDは二等辺三角形）。∠BCD=110°のとき、∠ABDの大きさを求めなさい。',
    answer: '55°',
    hint: '円に内接する四角形の性質で∠BADを求めてから、AB=ADの二等辺三角形の性質（底角が等しい）を使う。',
    explanation:
      '【解法】\nまず、円に内接する四角形の性質を使って∠BADを求める。四角形ABCDにおいて、頂点Aの内角∠BADと頂点Cの内角∠BCDは対角の関係にあるので、\n∠BAD+∠BCD=180°\n∠BCD=110°を代入すると、\n∠BAD=180°-110°=70°\n次に、△ABDに注目する。AB=ADより△ABDはAを頂角とする二等辺三角形であり、底角∠ABDと∠ADBは等しい。\n三角形の内角の和は180°なので、\n∠ABD+∠ADB+∠BAD=180°\n∠ABD=∠ADBなので、\n2∠ABD+70°=180°\n2∠ABD=110°\n∠ABD=55°\nよって∠ABD=55°。この問題は、円に内接する四角形の性質（対角の和180°）と、二等辺三角形の性質（底角が等しい）という2つの知識を、∠BADという共通の角を橋渡しにして組み合わせる、難関校で頻出のパターンである。',
  },
  {
    id: 'koushiki_k5en2_sessen_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question:
      '円Oの周上に2点A、Bがある。点Aにおける円の接線をℓとする。ℓと弦ABがつくる角のうち、劣弧AB（短いほうの弧）をふくむ角を∠xとする。優弧AB（長いほうの弧）上に点Cをとるとき、∠x=68°ならば∠ACBの大きさを求めなさい。',
    answer: '68°',
    hint: '接弦定理：接線と弦のつくる角は、その角の中にある弧に対する円周角に等しい。',
    explanation:
      '【解法】\n接弦定理：円の接線と弦のつくる角は、その角の中にある弧に対する円周角に等しい。\n∠xは、接線ℓと弦ABがつくる角のうち劣弧ABをふくむ角である。つまり∠xの中には劣弧ABが入っている。\n接弦定理より、∠x=（劣弧ABに対する円周角）\n劣弧ABに対する円周角は、劣弧ABをふくまない側、つまり優弧AB上にある点から測る。点Cは優弧AB上にあるので、∠ACBはまさに劣弧ABに対する円周角である。\nよって∠ACB=∠x=68°',
  },
  {
    id: 'koushiki_k5en2_sessen_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '円Oの周上に3点A、B、Cがある。点Aにおける円の接線ℓと弦ABがつくる角のうち、劣弧ABをふくむ角は70°である。点Cは優弧AB上にあり、△ABCにおいて∠ABC=50°であるとき、∠BACの大きさを求めなさい。',
    answer: '60°',
    hint: 'まず接弦定理で∠ACBを求め、その値を△ABCの内角の和の式に使う。',
    explanation:
      '【解法】\nまず接弦定理を使って∠ACBを求める。接線ℓと弦ABがつくる角のうち劣弧ABをふくむ角は70°であり、点Cは優弧AB上にあるので、接弦定理よりこの角は∠ACB（劣弧ABに対する円周角）に等しい。\n∠ACB=70°\n次に△ABCに着目する。三角形の内角の和は180°なので、\n∠BAC+∠ABC+∠ACB=180°\n∠ABC=50°、∠ACB=70°を代入すると、\n∠BAC+50°+70°=180°\n∠BAC=180°-120°=60°\nよって∠BAC=60°。このように、接弦定理はそれ単独で答えが出ることは少なく、三角形の内角の和や円に内接する四角形の性質と組み合わせて使われることが難関校では多い。接弦定理でわかった角度を「三角形の中の1つの角」として扱い直す視点が重要である。',
  },
  {
    id: 'koushiki_k5en2_houbeki_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    question:
      '円Oの内部で2本の弦ACとBDが点Pで交わっている。PA=6cm、PC=4cm、PB=3cmのとき、PDの長さを求めなさい。',
    answer: '8cm',
    hint: '方べきの定理：PA×PC=PB×PD',
    explanation:
      '【解法】\n方べきの定理（弦の交点の場合）：円の内部で2本の弦AC、BDが点Pで交わるとき、PA×PC=PB×PDが成り立つ。\n数値を代入する。\nPA×PC=6×4=24\nPB×PD=3×PD\n方べきの定理より、24=3×PD\nPD=24÷3=8\nよってPD=8cm。',
  },
  {
    id: 'koushiki_k5en2_houbeki_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    question:
      '円Oの内部で2本の弦ACとBDが点Pで交わっている。PA=xcm、PC=(x+3)cm、PB=4cm、PD=10cmであるとき、xの値を求めなさい。ただしx>0とする。',
    answer: 'x=5',
    hint: '方べきの定理でx(x+3)=4×10という方程式を作り、因数分解して解く。長さなのでx>0であることを確認する。',
    explanation:
      '【解法】\n方べきの定理より、PA×PC=PB×PDが成り立つ。\nx×(x+3)=4×10\nx²+3x=40\nx²+3x-40=0\n積が-40、和が3になる2つの整数を探す。8と-5：積=8×(-5)=-40、和=8+(-5)=3 ✓\nよって(x+8)(x-5)=0\nx=-8、5\nxは線分の長さなのでx>0でなければならない。よってx=-8は長さとして不適切なので除き、x=5だけを答えとする。\n検算：PA=5cm、PC=5+3=8cm、PA×PC=5×8=40。PB×PD=4×10=40で一致する。',
  },
];
