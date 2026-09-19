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
      '【何を聞かれているか】△ABC∽△DEF（A↔D、B↔E、C↔F）で、AB＝8cm、BC＝10cm、CA＝6cm、DE＝12cmのときのEF、FDの長さ。\n【なぜその式なのか】対応がわかっている辺AB、DEから相似比を求め、相似な図形の対応する辺の比はすべて等しいという性質を、残りの辺BC↔EF、CA↔FDにもあてはめる。\n【ステップ1】相似比＝AB:DE＝8:12＝2:3。\n【ステップ2】BC:EF＝2:3に10:EFをあてはめると、2×EF＝3×10＝30よりEF＝15cm。\n【ステップ3】CA:FD＝2:3に6:FDをあてはめると、2×FD＝3×6＝18よりFD＝9cm。\n【答え】EF＝15cm、FD＝9cm\n【確かめ】DE:EF:FD＝12:15:9＝4:5:3、AB:BC:CA＝8:10:6＝4:5:3で比が完全に一致している。\n【よくあるまちがい】相似比2:3を逆にして、EFやFDをもとの辺より小さくしてしまう。\n【ここが絶対】相似な図形では、対応する辺の比がすべて等しくなる。',
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
      '【何を聞かれているか】△ABCの辺AB上の点D、辺AC上の点EでAD＝4cm、AB＝10cm、AE＝6cm、AC＝15cmのとき、（1）△ADE∽△ABCの証明、（2）BC＝20cmのときのDEの長さ。\n【なぜその式なのか】AD:AB＝AE:ACという「同じ頂点Aから測った比」がそろっており、その2辺にはさまれる角がまさに共通の∠Aなので、「2組の辺の比とその間の角」の相似条件（SAS相似）が使える。相似が示せれば、あとは比例式でDEが求まる。\n【ステップ1】AD:AB＝4:10＝2:5、AE:AC＝6:15＝2:5で等しい。∠DAE＝∠BAC（共通）。\n【ステップ2】2組の辺の比とその間の角がそれぞれ等しいので△ADE∽△ABC。相似比2:5。\n【ステップ3】DE:BC＝2:5にDE:20をあてはめると、5×DE＝2×20よりDE＝8cm。\n【答え】(1) △ADEと△ABCにおいて、AD:AB＝4:10＝2:5、AE:AC＝6:15＝2:5より AD:AB＝AE:AC …①　∠DAE＝∠BAC（共通な角）…②　①、②より、2組の辺の比とその間の角がそれぞれ等しいから △ADE∽△ABC　(2) 相似比はAD:AB＝2:5なので、対応する辺の比もすべて2:5。DE:BC＝2:5　DE:20＝2:5　5×DE＝2×20　DE＝8cm\n【確かめ】AD:AB＝AE:ACが成り立つことから、平行線と線分の比の定理の逆によりDE∥BCであることも同時にわかる。\n【よくあるまちがい】AD:ABとAE:ACの比の向きを逆にしてしまい、正しい相似条件を示せない。\n【ここが絶対】「2組の辺の比とその間の角がそれぞれ等しい（SAS相似）」を使うには、比の向きと、はさまれる角が同じ頂点にあることの両方を明記する。',
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
      '【何を聞かれているか】△ABCで辺ABの中点M、辺ACの中点NについてBC＝18cmのときのMNの長さ。\n【なぜその式なのか】中点連結定理により、三角形の2辺の中点を結ぶ線分は、残りの辺に平行で長さはその半分になる。\n【ステップ1】M、Nはそれぞれ辺AB、ACの中点なので、中点連結定理よりMNはBCに平行でMN＝(1/2)BC。\n【ステップ2】BC＝18cmを代入すると、MN＝18÷2＝9cm。\n【答え】MN＝9cm\n【確かめ】△AMNと△ABCでAM:AB＝AN:AC＝1:2、∠Aが共通なのでSAS相似で△AMN∽△ABC、相似比1:2からMN:BC＝1:2が成り立つことでも確認できる。\n【よくあるまちがい】MNがBCと同じ長さになると勘違いしてしまう。中点連結の線分は必ず半分の長さになる。\n【ここが絶対】中点連結定理：三角形の2辺の中点を結ぶ線分は、残りの辺に平行で長さは半分になる。',
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
      '【何を聞かれているか】△ABCの3辺の中点D、E、Fを結んでできる△DEFと△ABCの関係、およびABCの面積が48cm²のときのDEFの面積。\n【なぜその式なのか】中点連結定理を3回使うと、△DEFの3辺はすべて△ABCの対応する辺の半分の長さになる。3組の辺の比がすべて1:2で等しいのでSSS相似が成り立ち、面積比はその相似比を2乗した値になる。\n【ステップ1】DF、DE、EFはそれぞれBC、CA、ABの中点連結線なので、長さはすべて半分、3組の辺の比が1:2で等しくSSS相似より△DEF∽△ABC、相似比1:2。\n【ステップ2】面積比は相似比の2乗なので1²:2²＝1:4。\n【ステップ3】△DEF＝48×(1/4)＝12cm²。\n【答え】(1) D, E, Fはそれぞれ辺AB, BC, CAの中点である。中点連結定理より、DFは辺BCの中点連結線でDF＝(1/2)BC、DF∥BC　DEは辺CAの中点連結線でDE＝(1/2)CA、DE∥CA　EFは辺ABの中点連結線でEF＝(1/2)AB、EF∥AB　したがって△DEFの3辺は△ABCの3辺のちょうど半分の長さになっており、3組の辺の比がすべて1:2で等しいから（SSS相似）△DEF∽△ABC、相似比は1:2。(2) 面積比は相似比の2乗になるので、△DEF:△ABC＝1²:2²＝1:4。△ABCの面積が48cm²のとき、△DEF＝48×(1/4)＝12cm²\n【確かめ】中点三角形の3辺がもとの三角形を4つの合同な小三角形に分割することからも、面積比1:4が視覚的に確認できる。\n【よくあるまちがい】相似比1:2をそのまま面積比として使い、△DEFの面積を24cm²（半分）としてしまう。\n【ここが絶対】中点三角形（3辺の中点を結んでできる三角形）は、もとの三角形と相似比1:2で相似になり、面積はもとの三角形のちょうど4分の1になる。',
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
      '【何を聞かれているか】△ABCの辺AB上の点D、辺AC上の点EでDE∥BC、AD＝6cm、DB＝4cm、AE＝9cmのときのECの長さ。\n【なぜその式なのか】DE∥BCのとき、平行線と線分の比の定理より「AD:AB＝AE:AC」という関係が成り立つ。この比例式にわかっている数をあてはめれば、ECが求まる。\n【ステップ1】AB＝AD+DB＝6+4＝10cm。AC＝AE+EC＝9+EC。\n【ステップ2】AD:AB＝AE:ACより6:10＝9:(9+EC)。\n【ステップ3】6(9+EC)＝10×9より54+6EC＝90、6EC＝36、EC＝6cm。\n【答え】EC＝6cm\n【確かめ】AD:AB＝6:10＝3:5、AE:AC＝9:15＝3:5で一致している。\n【よくあるまちがい】比例式を立てるときに、AD:DB＝AE:ECのように「部分:部分」の比を使ってしまう。DE∥BCの定理は「部分:全体」の比（AD:AB＝AE:AC）である。\n【ここが絶対】DE∥BCのとき、AD:AB＝AE:ACという「部分:全体」の比の関係が成り立つ。',
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
      '【何を聞かれているか】△ABCの辺AB上の点D、辺AC上の点EでDE∥BC、AD:DB＝2:3のとき、（1）△ADEの面積は△ABCの何倍か、（2）四角形DBCEの面積は△ABCの何倍か。\n【なぜその式なのか】DE∥BCより△ADE∽△ABC（AA相似）。AD:AB＝2:5なので、面積比はその2乗の4:25になる。四角形DBCEは△ADEと相似の関係にはないので、「全体（△ABC）から相似な小さい三角形（△ADE）を引く」という考え方で求める。\n【ステップ1】DE∥BCより△ADE∽△ABC（∠Aが共通、∠ADE＝∠ABCが同位角）。AD:AB＝2:5、面積比は2²:5²＝4:25。\n【ステップ2】△ADE＝(4/25)×△ABC。\n【ステップ3】四角形DBCE＝△ABC−△ADE＝△ABC−(4/25)△ABC＝(21/25)△ABC。\n【答え】DE∥BCより△ADE∽△ABC（AA相似：∠Aが共通、∠ADE＝∠ABCが同位角）。AD:DB＝2:3なので、AB＝AD+DB＝2+3＝5（比の単位で）、AD:AB＝2:5。相似比が2:5なので、面積比はその2乗の4:25。(1) △ADE＝(4/25)×△ABC、すなわち△ABCの4/25倍。(2) 四角形DBCE＝△ABC−△ADE＝△ABC−(4/25)△ABC＝(21/25)△ABC、すなわち△ABCの21/25倍。\n【確かめ】4/25＋21/25＝25/25＝1で、△ADEと四角形DBCEを合わせるとちょうど△ABC全体になることを確認する。\n【よくあるまちがい】四角形DBCEの面積を、△ADEとの比の引き算（25−4＝21をそのまま使うところまでは合っているが、単位を「25分の」に統一せず）誤った分母で計算してしまう。\n【ここが絶対】四角形の面積は、相似な三角形どうしの比では直接求まらない。「全体−相似な小さい三角形」という考え方で求める。',
  },
];
