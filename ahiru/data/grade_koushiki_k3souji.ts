import type { Question } from './questions-meta';

export const gradeKoushikiK3SoujiQuestions: Question[] = [
  {
    id: 'koushiki_k3souji_soujijoken_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    figureDescription: '△ABCと△DEFの図。対応関係はA↔D, B↔E, C↔F',
    question:
      '△ABC∽△DEF（対応の順はA↔D、B↔E、C↔F）で、AB＝8cm、BC＝10cm、CA＝6cm、DE＝12cmです。EF、FDの長さをそれぞれ求めなさい。',
    answer: 'EF＝15cm、FD＝9cm',
    hint: 'まず対応する辺AB、DEの比から相似比を求め、その比をBC、CAにも同じように使う。',
    explanation:
      '【解法】\n△ABC∽△DEFの対応順はA↔D、B↔E、C↔Fなので、AB↔DE、BC↔EF、CA↔FDがそれぞれ対応する辺である。\nまず対応する辺のうち長さがわかっているAB＝8cmとDE＝12cmを比べると、相似比はAB:DE＝8:12＝2:3。\n相似な図形の対応する辺の比はすべて等しいので、BC:EF＝2:3、CA:FD＝2:3も成り立つ。\nBC:EF＝2:3に10:EFを当てはめると、2×EF＝3×10＝30より EF＝15cm。\nCA:FD＝2:3に6:FDを当てはめると、2×FD＝3×6＝18より FD＝9cm。\n【検算】\nDE:EF:FD＝12:15:9＝4:5:3、AB:BC:CA＝8:10:6＝4:5:3で比が完全に一致しているので正しい。',
  },
  {
    id: 'koushiki_k3souji_soujijoken_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    isWritten: true,
    figureDescription:
      '△ABCの辺AB上に点D、辺ACに点Eがある図。AD＝4cm、AB＝10cm、AE＝6cm、AC＝15cm',
    question:
      '△ABCの辺AB上に点D、辺AC上に点Eを、AD＝4cm、AB＝10cm、AE＝6cm、AC＝15cmとなるようにとります。\n(1) △ADE∽△ABC であることを証明しなさい。\n(2) BC＝20cmのとき、DEの長さを求めなさい。',
    answer:
      '(1)\n△ADEと△ABCにおいて、\nAD:AB＝4:10＝2:5、AE:AC＝6:15＝2:5より AD:AB＝AE:AC …①\n∠DAE＝∠BAC（共通な角）…②\n①、②より、2組の辺の比とその間の角がそれぞれ等しいから\n△ADE∽△ABC\n(2)\n相似比はAD:AB＝2:5なので、対応する辺の比もすべて2:5。\nDE:BC＝2:5\nDE:20＝2:5\n5×DE＝2×20\nDE＝8cm',
    rubricPoints: [
      'AD:AB と AE:AC をそれぞれ計算し、比が2:5で等しいことを示している',
      '∠DAE＝∠BAC が共通な角であることを明示している',
      '「2組の辺の比とその間の角がそれぞれ等しい」というSAS相似条件の名称を明記して結論を書いている',
      '相似比2:5を使ってDE:BC＝2:5からDE＝8cmを正しく求めている',
    ],
    explanation:
      'この問題は「2組の辺の比とその間の角がそれぞれ等しい（SAS相似）」を使う典型的な証明です。AD:AB＝AE:ACという「同じ頂点Aから測った比」がそろっていること、そしてその2辺にはさまれる角がまさに∠Aであることの2点を明記するのがポイントです。相似が証明できれば、あとは比例式DE:BC＝2:5を解くだけで長さが求まります。なお、AD:AB＝AE:ACが成り立つことから、平行線と線分の比の定理の逆によりDE∥BCであることも同時にわかります（本問では証明を求められていませんが、余裕があれば確認しておくと理解が深まります）。参考：もしDE∥BCであることまで示せば、△ADEと△ABCの面積比は相似比の2乗で4:25になることも導けます。',
  },
  {
    id: 'koushiki_k3souji_chutenrenketsu_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'basic',
    figureDescription: '△ABCで辺ABの中点M、辺ACの中点Nを結んだ図',
    question:
      '△ABCで、辺ABの中点をM、辺ACの中点をNとします。BC＝18cmのとき、MNの長さを求めなさい。',
    answer: 'MN＝9cm',
    hint: '中点連結定理より、MNはBCに平行で、長さはBCの半分になる。',
    explanation:
      '【解法】\n中点連結定理より、三角形の2辺の中点を結ぶ線分は、残りの辺に平行で長さはその半分になる。\nM, Nはそれぞれ辺AB, ACの中点だから、MNはBCに平行で MN＝(1/2)BC。\nBC＝18cmを代入すると MN＝18÷2＝9cm。\n【なぜ半分になるか（簡単な確認）】\n△AMNと△ABCで、AM:AB＝AN:AC＝1:2、∠Aが共通なので2組の辺の比とその間の角が等しく△AMN∽△ABC（SAS相似）。相似比が1:2なので、対応する辺の比もすべて1:2になり、MN:BC＝1:2が成り立つ。',
  },
  {
    id: 'koushiki_k3souji_chutenrenketsu_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    isWritten: true,
    figureDescription: '△ABCの3辺AB, BC, CAの中点D, E, Fを結んでできる中点三角形の図',
    question:
      '△ABCの3辺AB, BC, CAの中点をそれぞれD, E, Fとします。\n(1) △DEFと△ABCの関係を、相似であることを含めて説明しなさい。\n(2) △ABCの面積が48cm²のとき、△DEFの面積を求めなさい。',
    answer:
      '(1)\nD, E, Fはそれぞれ辺AB, BC, CAの中点である。\n中点連結定理より、\n　DFは辺BCの中点連結線でDF＝(1/2)BC、DF∥BC\n　DEは辺CAの中点連結線でDE＝(1/2)CA、DE∥CA\n　EFは辺ABの中点連結線でEF＝(1/2)AB、EF∥AB\nしたがって△DEFの3辺は△ABCの3辺のちょうど半分の長さになっており、3組の辺の比がすべて1:2で等しいから（SSS相似）△DEF∽△ABC、相似比は1:2。\n(2)\n面積比は相似比の2乗になるので、△DEF:△ABC＝1²:2²＝1:4。\n△ABCの面積が48cm²のとき、△DEF＝48×(1/4)＝12cm²',
    rubricPoints: [
      'DE, EF, FDがそれぞれAB, BC, CAの中点連結定理より、AB, BC, CAと平行でその半分の長さであることを説明している',
      '△DEFと△ABCが相似であること（相似比1:2、3組の辺の比がすべて等しいSSS相似）を述べている',
      '面積比が相似比の2乗である1:4になることを使っている',
      '48cm²÷4＝12cm²を正しく計算している',
    ],
    explanation:
      '3辺の中点をすべて結んでできる三角形（中点三角形）は、中点連結定理を3回使うことで、もとの三角形と相似比1:2で相似になることがわかります。これは「3組の辺の比がすべて等しい（SSS相似）」の典型例です。面積比を求めるときに「相似比1:2だから面積比も1:2」としてしまうのが最頻出の誤りで、正しくは2乗した1:4です。中点三角形の面積はもとの三角形のちょうど4分の1になる、という結果は図形の分割問題でもよく使われるので、単独の公式として覚えておくと計算が速くなります（実際、中点三角形の3辺がもとの三角形を4つの合同な小三角形に分割することからも1:4が視覚的に確認できます）。',
  },
  {
    id: 'koushiki_k3souji_heikousen_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'standard',
    figureDescription: '△ABCの辺AB上に点D、辺ACに点Eがあり、DE∥BCの図',
    question:
      '△ABCの辺AB上に点D、辺AC上に点Eがあり、DE∥BCです。AD＝6cm、DB＝4cm、AE＝9cmのとき、ECの長さを求めなさい。',
    answer: 'EC＝6cm',
    hint: 'DE∥BCのとき AD:AB＝AE:AC が成り立つ。',
    explanation:
      '【解法】\nDE∥BCなので、平行線と線分の比の定理より AD:AB＝AE:AC。\nAB＝AD+DB＝6+4＝10cm\nAC＝AE+EC＝9+EC\nAD:AB＝AE:AC より\n6:10＝9:(9+EC)\n6(9+EC)＝10×9\n54+6EC＝90\n6EC＝36\nEC＝6cm\n【検算】\nAD:AB＝6:10＝3:5、AE:AC＝9:15＝3:5で一致しているので正しい。',
  },
  {
    id: 'koushiki_k3souji_heikousen_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j3',
    difficulty: 'advanced',
    isWritten: true,
    figureDescription: '△ABCの辺AB上に点D、辺ACに点Eがあり、DE∥BC、AD:DB＝2:3の図',
    question:
      '△ABCの辺AB上に点D、辺AC上に点Eがあり、DE∥BCです。AD:DB＝2:3のとき、\n(1) △ADEの面積は△ABCの面積の何倍か求めなさい。\n(2) 四角形DBCEの面積は△ABCの面積の何倍か求めなさい。',
    answer:
      'DE∥BCより△ADE∽△ABC（AA相似：∠Aが共通、∠ADE＝∠ABCが同位角）。\nAD:DB＝2:3なので、AB＝AD+DB＝2+3＝5（比の単位で）、AD:AB＝2:5。\n相似比が2:5なので、面積比はその2乗の4:25。\n(1) △ADE＝(4/25)×△ABC、すなわち△ABCの4/25倍。\n(2) 四角形DBCE＝△ABC−△ADE＝△ABC−(4/25)△ABC＝(21/25)△ABC、すなわち△ABCの21/25倍。',
    rubricPoints: [
      'DE∥BCから△ADE∽△ABC（AA相似）であることを示している',
      'AD:DB＝2:3からAD:AB＝2:5を正しく導いている',
      '相似比2:5から面積比が2²:5²＝4:25になることを説明している',
      '四角形DBCE＝△ABC−△ADEの考え方で(21/25)△ABCを正しく計算している',
    ],
    explanation:
      'DE∥BCから相似を確認し、面積比は相似比の2乗という基本ルールを適用する問題です。ここでのひっかけは、四角形DBCEの面積を「そのまま比の引き算」ではなく「もとの三角形の面積に対する割合」で処理しないといけない点です。DBCEはADEと相似の関係にはない（四角形なので相似条件が使えない）ため、必ず「全体−相似な小さい三角形」という考え方で求めます。相似比2:5、面積比4:25という数値をど忘れしたときは、AD:AB＝2:5をそのまま2乗すればよいと覚えておくと安全です。検算：4/25＋21/25＝25/25＝1で、全体（△ABC）と一致しています。',
  },
];
