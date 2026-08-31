import type { Question } from './questions-meta';

export const gradeKoushikiOyoK1GodoQuestions: Question[] = [
  {
    id: 'koushiki_k1godo_goudoujoken_oyo1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '△ABCはAB＝ACの二等辺三角形である。辺AB上に点D、辺AC上に点Eを、AD＝AEとなるようにとる。線分BEと線分CDの交点をFとする。∠BAC＝50°、∠ABE＝20°のとき、∠BFCの大きさを求めなさい。',
    answer: '90°',
    hint: 'まず△ABEと△ACDの合同（SAS）を示し、対応する角∠ABE＝∠ACDを導く。二等辺三角形の底角∠ABC＝∠ACBから∠EBC、∠DCBをそれぞれ求め、△FBCの内角の和を使う。',
    explanation:
      '△ABCはAB＝ACの二等辺三角形で、辺AB上に点D、辺AC上に点Eを、AD＝AEとなるようにとる。まず△ABEと△ACDを比べる。∠BAEは辺BAと辺AEにはさまれた角であり、EはAC上の点なのでこれは∠BACそのものである。同様に∠CADは辺CAと辺ADにはさまれた角であり、DはAB上の点なのでこれも∠BACそのものである。つまり∠BAE＝∠CAD（どちらも頂角∠A）が成り立つ。さらに仮定よりAB＝AC、AE＝ADなので、2組の辺（AB＝AC、AE＝AD）とその間の角（∠BAE＝∠CAD）がそれぞれ等しく、2辺とその間の角がそれぞれ等しい（SAS）という合同条件より△ABE≡△ACDが言える。合同な図形の対応する角は等しいので、∠ABE＝∠ACD。次に、△ABCは二等辺三角形なので底角は等しく、∠ABC＝∠ACB＝(180°－∠BAC)÷2で求められる。∠BAC＝50°を代入すると、∠ABC＝∠ACB＝(180°－50°)÷2＝65°。ここで、BEはBからACへ、CDはCからABへ引かれた線分であり、それぞれ∠ABC、∠ACBの内部を通るので、∠EBC＝∠ABC－∠ABE、∠DCB＝∠ACB－∠ACDが成り立つ。∠ABE＝∠ACD＝20°を代入すると、∠EBC＝65°－20°＝45°、∠DCB＝65°－20°＝45°となり、∠EBC＝∠DCBであることが分かる。BEとCDの交点をFとすると、△FBCにおいて∠FBC＝∠EBC＝45°、∠FCB＝∠DCB＝45°である。三角形の内角の和は180°なので、∠BFC＝180°－45°－45°＝90°。よって∠BFCの大きさは90°である。',
    figureDescription: '△ABC（AB＝AC）の辺AB、AC上にAD＝AEとなる点D、Eをとり、BEとCDの交点をFとした図',
  },
  {
    id: 'koushiki_k1godo_goudoujoken_oyo2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question:
      '平行四辺形ABCDの対角線BD上に、BE＝DFとなるように2点E、Fをとる（Eは頂点Bに近い側、Fは頂点Dに近い側にあるものとする）。このとき、AE＝CFであることを証明しなさい。',
    answer:
      '△ABEと△CDFにおいて、\n平行四辺形の性質より AB＝DC …①\nAB∥DCであり、BDを横断線とみると、錯角は等しいから ∠ABD＝∠CDB。E、FはBD上の点だから ∠ABE＝∠CDF …②\n仮定より BE＝DF …③\n①、②、③より、2組の辺とその間の角がそれぞれ等しいから、△ABE≡△CDF。\n合同な図形の対応する辺は等しいから、AE＝CF。',
    hint: '平行四辺形の対辺が等しいこと（AB＝DC）と、AB∥DCから生じる錯角（∠ABD＝∠CDB）に注目し、これとBE＝DFを組み合わせてSASを示す。',
    explanation:
      '平行四辺形ABCDでは、対辺は等しく、また平行であるという性質があるので、AB＝DCかつAB∥DCが成り立つ。対角線BD上に、BE＝DFとなるように2点E、Fをとる（Eは頂点Bに近い側、Fは頂点Dに近い側）。ここでAB∥DCに注目し、線分BDを1本の横断線とみなすと、∠ABDと∠CDBは、平行な2直線AB、DCにこの横断線が交わってできる錯角の位置にある。平行線の錯角は等しいので、∠ABD＝∠CDBが成り立つ。E、FはどちらもBD上の点なので、∠ABEは∠ABDと、∠CDFは∠CDBと、それぞれ同じ角である。よって∠ABE＝∠CDFが言える。以上より、△ABEと△CDFにおいて、AB＝DC（平行四辺形の対辺）、∠ABE＝∠CDF（平行線の錯角）、BE＝DF（仮定）という、2組の辺とその間の角がそれぞれ等しいことが示せたので、2辺とその間の角がそれぞれ等しい（SAS）という合同条件より△ABE≡△CDFが言える。合同な図形の対応する辺は等しいので、AE＝CFが証明できる。',
    rubricPoints: [
      '平行四辺形の性質からAB＝DCを示している',
      'AB∥DCであることから、BDを横断線とした錯角∠ABD＝∠CDB（すなわち∠ABE＝∠CDF）を導いている',
      '仮定のBE＝DFと合わせて、2組の辺とその間の角がそれぞれ等しい（SAS）ことを明示して△ABE≡△CDFを導いている',
      '合同な図形の対応する辺からAE＝CFを結論づけている',
    ],
    figureDescription: '平行四辺形ABCDの対角線BD上にBE＝DFとなる点E、Fをとった図',
  },
  {
    id: 'koushiki_k1godo_chokkaku_oyo1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question:
      '△ABCはAB＝ACの二等辺三角形である。頂点Aから辺BCに垂線AHをひく。さらに、Hから辺ABに垂線HPを、辺ACに垂線HQをそれぞれひく。このとき、HP＝HQであることを証明しなさい。',
    answer:
      '△ABHと△ACHにおいて、\nAH⊥BCだから ∠AHB＝∠AHC＝90° …①\n仮定より AB＝AC（斜辺） …②\n共通な辺だから AH＝AH（他の1辺） …③\n①、②、③より、直角三角形の斜辺と他の1辺がそれぞれ等しいから、△ABH≡△ACH。\n合同な図形の対応する角は等しいから ∠BAH＝∠CAH …④\n次に、△APHと△AQHにおいて、\nHP⊥AB、HQ⊥ACだから ∠APH＝∠AQH＝90° …⑤\n共通な辺だから AH＝AH（斜辺） …⑥\n④より ∠PAH＝∠QAH（1鋭角） …⑦\n⑤、⑥、⑦より、直角三角形の斜辺と1鋭角がそれぞれ等しいから、△APH≡△AQH。\n合同な図形の対応する辺は等しいから、HP＝HQ。',
    hint: 'まずAH⊥BCから△ABHと△ACHが直角三角形であることを示し、斜辺と他の1辺が等しいことからAHが∠Aを2等分することを導く。次にその角の等しさを使って、△APHと△AQHが斜辺と1鋭角の等しい直角三角形になることを示す。',
    explanation:
      '△ABCはAB＝ACの二等辺三角形で、頂点Aから辺BCに垂線AHをひく。Hから辺AB、辺ACへの垂線の足をそれぞれP、Qとする。まず△ABHと△ACHを比べる。AH⊥BCより、∠AHB＝∠AHC＝90°なので、△ABH、△ACHはどちらも直角三角形であり、直角の向かいにある辺AB、ACがそれぞれの斜辺である。仮定よりAB＝AC（斜辺どうしが等しい）。さらにAHは2つの三角形に共通な辺なので、AH＝AH（他の1辺どうしが等しい）。斜辺と他の1辺がそれぞれ等しいので、直角三角形の斜辺と他の1辺がそれぞれ等しいという合同条件より△ABH≡△ACHが言える。合同な図形の対応する角は等しいので、∠BAH＝∠CAH。つまりAHは∠BACを2等分する線でもあることが分かる。次に△APHと△AQHを比べる。HP⊥AB、HQ⊥ACより、∠APH＝∠AQH＝90°なので、△APH、△AQHはどちらも直角三角形であり、直角の向かいにある辺AH、AHがそれぞれの斜辺である（どちらの三角形でも斜辺はAH）。AHは2つの三角形に共通な辺なので、AH＝AH（斜辺どうしが等しい）。さらに先ほど示した∠BAH＝∠CAHより、∠PAH＝∠QAH（1つの鋭角どうしが等しい）。斜辺と1つの鋭角がそれぞれ等しいので、直角三角形の斜辺と1鋭角がそれぞれ等しいという合同条件より△APH≡△AQHが言える。合同な図形の対応する辺は等しいので、HP＝HQが証明できる。',
    rubricPoints: [
      'AH⊥BCから∠AHB＝∠AHC＝90°を示し、△ABHと△ACHが直角三角形であることを述べている',
      '斜辺AB＝AC（仮定）と他の1辺AH＝AH（共通）から、直角三角形の斜辺と他の1辺がそれぞれ等しいことを示し、△ABH≡△ACHを導いている',
      '合同な図形の対応する角から∠BAH＝∠CAHを導き、これを次の合同の根拠として使っている',
      'HP⊥AB、HQ⊥ACから△APHと△AQHが直角三角形であることを示し、斜辺AH＝AH（共通）と1鋭角∠PAH＝∠QAHから、直角三角形の斜辺と1鋭角がそれぞれ等しいことを明示してHP＝HQを結論づけている',
    ],
    figureDescription: '△ABC（AB＝AC）で頂点Aから辺BCへの垂線をAH、Hから辺AB・ACへの垂線をそれぞれHP・HQとした図',
  },
  {
    id: 'koushiki_k1godo_chokkaku_oyo2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question:
      '△ABCはAB＝ACの二等辺三角形である。頂点Bから辺ACに垂線BDを、頂点Cから辺ABに垂線CEをそれぞれひき、その交点をFとする。∠BAC＝46°のとき、∠BFCの大きさを求めなさい。',
    answer: '134°',
    hint: 'BD、CEはそれぞれ斜辺BC（共通）を持つ直角三角形をつくる。二等辺三角形の底角が等しいことと合わせて、直角三角形の斜辺と1鋭角がそれぞれ等しいことを利用する。',
    explanation:
      '△ABCはAB＝ACの二等辺三角形で、頂点Bから辺ACへの垂線をBD、頂点Cから辺ABへの垂線をCEとし、その交点をFとする。まず△DBCと△ECBを比べる。BD⊥AC、CE⊥ABより、∠BDC＝∠CEB＝90°なので、△DBC、△ECBはどちらも直角三角形であり、直角の向かいにある辺BC、CBがそれぞれの斜辺である（どちらの三角形でも斜辺はBC）。BCは2つの三角形に共通な辺なので、BC＝CB（斜辺どうしが等しい）。また、△ABCはAB＝ACの二等辺三角形なので底角は等しく、∠DCB(＝∠ACB)＝∠EBC(＝∠ABC)（1つの鋭角どうしが等しい）。斜辺と1つの鋭角がそれぞれ等しいので、直角三角形の斜辺と1鋭角がそれぞれ等しいという合同条件より△DBC≡△ECBが言える。ここで具体的な角度を計算する。∠BAC＝46°なので、二等辺三角形の底角は∠ABC＝∠ACB＝(180°－46°)÷2＝67°。△DBCの内角の和は180°であり、∠BDC＝90°、∠DCB＝∠ACB＝67°なので、∠DBC＝180°－90°－67°＝23°。同じように△ECBでも∠ECB＝180°－90°－67°＝23°となる（あるいは△DBC≡△ECBより∠DBC＝∠ECBとしてもよい）。BDとCEの交点をFとすると、△FBCにおいて、∠FBC＝∠DBC＝23°、∠FCB＝∠ECB＝23°である。三角形の内角の和は180°なので、∠BFC＝180°－23°－23°＝134°。よって∠BFCの大きさは134°である。',
    figureDescription: '△ABC（AB＝AC）で頂点Bから辺ACへの垂線をBD、頂点Cから辺ABへの垂線をCEとし、交点をFとした図',
  },
  {
    id: 'koushiki_k1godo_nitouhen_oyo1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question:
      '長方形ABCDを、対角線BDを折り目として折ったところ、頂点Cが移った点をEとする。辺ABと線分DEの交点をFとする。このとき、△FBDは二等辺三角形であることを証明しなさい（FB＝FDであることを示せばよい）。',
    answer:
      '折り返し（対称移動）は角の大きさを変えないから ∠BDC＝∠BDE …①\n長方形なのでAB∥DCであり、BDを横断線とみると、錯角は等しいから ∠ABD＝∠BDC …②\n①、②より ∠BDE＝∠ABD …③\nFは辺AB上の点だから ∠FBD＝∠ABD …④\nFは線分DE上の点だから ∠FDB＝∠BDE …⑤\n③、④、⑤より ∠FDB＝∠FBD\n2つの底角が等しいから、二等辺三角形の性質の逆より、FB＝FD。よって△FBDは二等辺三角形である。',
    hint: '折り返しでできる角の相等（∠BDC＝∠BDE）と、AB∥DCから生じる錯角（∠ABD＝∠BDC）を組み合わせて∠FDB＝∠FBDを示し、二等辺三角形の性質の逆を使う。',
    explanation:
      '長方形ABCDを、対角線BDを折り目として折り返し、頂点Cが移った点をEとする。折り返し（対称移動）は形も大きさも変えない移動なので、折り返される前の△BCDと、折り返された後の△BEDは合同であり、対応する辺や角はすべて等しい。特に、対角線BDを共有する角どうし、∠BDCと∠BDEは、折り目の線BDに関して対称な位置にある角なので、∠BDC＝∠BDEが成り立つ。次に、長方形ABCDではAB∥DCが成り立っている。対角線BDを1本の横断線とみなすと、∠ABDと∠BDCは、平行な2直線AB、DCにこの横断線が交わってできる錯角の位置にある。平行線の錯角は等しいので、∠ABD＝∠BDCが成り立つ。以上の2つの等式∠BDC＝∠BDEと∠ABD＝∠BDCを合わせると、∠BDE＝∠ABDが導かれる。ここで、辺ABと線分DEの交点をFとする。Fは辺AB上にあるので、∠FBDは∠ABDと同じ角であり、∠FBD＝∠ABD。また、Fは線分DE上にあるので、∠FDBは∠BDEと同じ角であり、∠FDB＝∠BDE。これらと、先ほど示した∠BDE＝∠ABDを合わせると、∠FDB＝∠FBDが成り立つことが分かる。△FBDにおいて、∠FDB＝∠FBD、つまり2つの角が等しいので、「2つの底角が等しい三角形は二等辺三角形である」という二等辺三角形の性質の逆より、これらの角の向かいにある辺どうしが等しくなる。∠FBDの向かいにある辺はFD、∠FDBの向かいにある辺はFBなので、FD＝FB。よって△FBDは二等辺三角形であることが証明できた。',
    rubricPoints: [
      '折り返し（対称移動）が角の大きさを変えないことから∠BDC＝∠BDEを示している',
      'AB∥DCであることから、BDを横断線とした錯角∠ABD＝∠BDCを導いている',
      '上の2つを組み合わせ、Fが辺AB上・線分DE上の点であることを使って∠FDB＝∠FBDを導いている',
      '二等辺三角形の性質の逆（底角が等しい三角形は二等辺三角形である）を明示してFB＝FDを結論づけている',
    ],
    figureDescription: '長方形ABCDを対角線BDで折り返し、頂点Cが移った点をE、辺ABと線分DEの交点をFとした図',
  },
  {
    id: 'koushiki_k1godo_nitouhen_oyo2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    question: '△ABCはAB＝ACの二等辺三角形で、∠BAC＝36°である。辺AC上に、BD＝BCとなるように点Dをとる。このとき、∠ABDの大きさを求めなさい。',
    answer: '36°',
    hint: '△BDCがBD＝BCの二等辺三角形になることに注目し、底角∠BDC＝∠BCD（＝∠ACBそのもの）を求める。∠BDCは△ABDの外角になっていることを利用する。',
    explanation:
      '△ABCはAB＝ACの二等辺三角形で∠BAC＝36°である。二等辺三角形の底角は等しいので、∠ABC＝∠ACB＝(180°－36°)÷2＝72°。辺AC上に、BD＝BCとなるように点Dをとると、△BDCもBD＝BCの二等辺三角形になる。△BDCの底角は∠BDCと∠BCDであり、∠BCDは∠ACBと同じ角なので72°。二等辺三角形の底角は等しいので∠BDC＝∠BCD＝72°。△BDCの内角の和は180°なので、∠DBC＝180°－72°－72°＝36°。ここで、点A、D、Cは一直線上にあるので、∠BDCは△ABDにとっての外角(∠ADBに隣り合う、一直線上にできる角)にあたる。三角形の外角は、それと隣り合わない2つの内角の和に等しいという性質（外角の性質）より、∠BDC＝∠BAD＋∠ABDが成り立つ。∠BAD（辺ABと辺ADにはさまれた角）は、DがAC上の点なので∠BACと同じ角であり36°である。これを代入すると、72°＝36°＋∠ABDとなるので、∠ABD＝72°－36°＝36°。よって∠ABDの大きさは36°である。',
    figureDescription: '△ABC（AB＝AC、∠A＝36°）の辺AC上にBD＝BCとなる点Dをとった図',
  },
];
