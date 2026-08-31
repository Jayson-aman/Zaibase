import type { Question } from './questions-meta';

export const gradeKoushikiK1GodoQuestions: Question[] = [
  {
    id: 'koushiki_k1godo_goudoujoken_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '四角形ABCDにおいて、対角線ACを引く。AB＝AD、∠BAC＝∠DACであることが分かっているとき、△ABCと△ADCが合同であるといえる合同条件を答えなさい。',
    answer: '2辺とその間の角がそれぞれ等しい',
    hint: 'ACは2つの三角形に共通の辺。∠BACは辺ABと辺ACの間の角、∠DACは辺ADと辺ACの間の角であることに注目する。',
    explanation:
      '△ABCと△ADCを比べる。対角線ACは2つの三角形に共通な辺なので、AC＝AC。仮定よりAB＝AD。さらに∠BACは辺ABと辺ACにはさまれた角、∠DACは辺ADと辺ACにはさまれた角で、仮定より∠BAC＝∠DAC。つまり、対応する2組の辺（AB＝AD、AC＝AC）と、その間の角（∠BAC＝∠DAC）がそれぞれ等しいことになる。よって、合同条件は「2組の辺とその間の角がそれぞれ等しい（SAS）」である。',
    choices: ['3辺がそれぞれ等しい', '2辺とその間の角がそれぞれ等しい', '1辺とその両端の角がそれぞれ等しい'],
    figureDescription: '四角形ABCDに対角線ACを引いた図。AB＝AD、∠BAC＝∠DAC',
  },
  {
    id: 'koushiki_k1godo_goudoujoken_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question:
      '点Mは線分ABの中点である。Mを通る直線を1本引き、この直線上に、Mに対して反対側になるように点Pと点Qをとる。AP∥BQであるとき、△APM≡△BQMであることを証明しなさい。',
    answer:
      '△APMと△BQMにおいて、\nAP∥BQであり、ABを横断線とみると、錯角は等しいから ∠PAM＝∠QBM …①\nMは線分ABの中点だから AM＝BM …②\n直線ABと直線PQはMで交わっており、対頂角は等しいから ∠AMP＝∠BMQ …③\n①、②、③より、1組の辺とその両端の角がそれぞれ等しいから、△APM≡△BQM。',
    hint: 'AP∥BQから錯角∠PAM＝∠QBMが、AM＝BMから中点の条件が、直線の交わりから対頂角∠AMP＝∠BMQが、それぞれ言える。',
    explanation:
      '線分ABの中点をMとし、Mを通る直線上に、Mをはさんで反対側にP、Qをとる。まずAP∥BQに注目する。ABを1本の横断線とみると、∠PAMと∠QBMは錯角の位置にあるので、AP∥BQより∠PAM＝∠QBMが言える。次に、Mは線分ABの中点なので、定義よりAM＝BM。さらに、直線ABと直線PQは点Mで交わっており、∠AMPと∠BMQはこの交点にできる対頂角どうしなので、∠AMP＝∠BMQ。ここまでで「1辺（AM＝BM）とその両端の角（∠PAM＝∠QBM、∠AMP＝∠BMQ）」がそれぞれ等しいことが示せたので、1辺とその両端の角がそれぞれ等しい（ASA）の合同条件より△APM≡△BQMが証明できる。',
    rubricPoints: [
      'AP∥BQから、ABを横断線とした錯角∠PAM＝∠QBMを導いている',
      'Mが線分ABの中点であることからAM＝BMを示している',
      '直線ABと直線PQの交点にできる対頂角の性質から∠AMP＝∠BMQを導いている',
      '1辺とその両端の角がそれぞれ等しい（ASA）ことを明示して△APM≡△BQMを結論づけている',
    ],
    figureDescription: '線分ABの中点Mを通る直線上に点P、Qがあり、AP∥BQとなっている図',
  },
  {
    id: 'koushiki_k1godo_chokkaku_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question:
      '四角形ABCDにおいて、対角線ACを引く。∠ABC＝∠ADC＝90°、AB＝ADであることが分かっているとき、△ABCと△ADCが合同であるといえる合同条件を答えなさい。（ACはどちらの三角形にとっても斜辺である）',
    answer: '直角三角形の斜辺と他の1辺がそれぞれ等しい',
    hint: '∠B＝∠D＝90°なので、直角の向かいにある辺ACが2つの三角形どちらにとっても斜辺になることに注目する。',
    explanation:
      '∠ABC＝90°より、△ABCの直角は頂点Bにあり、その向かいにある辺ACが斜辺である。同じく∠ADC＝90°より、△ADCの直角は頂点Dにあり、その向かいにある辺ACが斜辺である。ACは2つの三角形に共通なので、斜辺AC＝斜辺ACが等しい。さらに仮定よりAB＝AD（これが「他の1辺」にあたる）。斜辺と他の1辺がそれぞれ等しいので、合同条件は「直角三角形の斜辺と他の1辺がそれぞれ等しい」である。',
    choices: [
      '直角三角形の斜辺と1鋭角がそれぞれ等しい',
      '直角三角形の斜辺と他の1辺がそれぞれ等しい',
      '3辺がそれぞれ等しい',
    ],
    figureDescription: '四角形ABCDに対角線ACを引いた図。∠ABC＝∠ADC＝90°、AB＝AD',
  },
  {
    id: 'koushiki_k1godo_chokkaku_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question:
      '△ABCはAB＝AC、∠A＝90°の直角二等辺三角形である。辺BC上の点Pから、辺ABに垂線PQを、辺ACに垂線PRをそれぞれひく。BP＝CPであるとき、△BPQ≡△CPRであることを証明しなさい。',
    answer:
      '△BPQと△CPRにおいて、\nPQ⊥AB、PR⊥ACだから ∠BQP＝∠CRP＝90° …①\n△ABCはAB＝ACの二等辺三角形だから、底角は等しく ∠B＝∠C …②\n仮定より BP＝CP …③\n①より△BPQ、△CPRはどちらも直角三角形であり、③よりその斜辺BP、CPがそれぞれ等しく、②より1つの鋭角∠B、∠Cもそれぞれ等しい。\nよって、直角三角形の斜辺と1鋭角がそれぞれ等しいから、△BPQ≡△CPR。',
    hint: 'PQ⊥AB、PR⊥ACから直角三角形であることを示し、二等辺三角形の底角が等しいことと、仮定のBP＝CPを組み合わせる。',
    explanation:
      'まずPQ⊥AB、PR⊥ACより、∠BQP＝∠CRP＝90°なので、△BPQと△CPRはどちらも直角三角形である。次に、△ABCはAB＝ACの二等辺三角形なので、二等辺三角形の性質（底角は等しい）より∠B＝∠C。さらに仮定よりBP＝CPが成り立っており、これは△BPQでは直角∠Qの向かいにある斜辺、△CPRでは直角∠Rの向かいにある斜辺にあたる。したがって、斜辺（BP＝CP）と1つの鋭角（∠B＝∠C）がそれぞれ等しいことが示せたので、直角三角形の斜辺と1鋭角がそれぞれ等しいという合同条件より、△BPQ≡△CPRが証明できる。',
    rubricPoints: [
      'PQ⊥AB、PR⊥ACから∠BQP＝∠CRP＝90°を示し、2つの三角形が直角三角形であることを述べている',
      '二等辺三角形の底角が等しいことから∠B＝∠Cを導いている',
      '仮定のBP＝CPを、それぞれの直角三角形の斜辺として用いている',
      '直角三角形の斜辺と1鋭角がそれぞれ等しいことを明示して△BPQ≡△CPRを結論づけている',
    ],
    figureDescription: 'AB＝AC、∠A＝90°の直角二等辺三角形。辺BC上の点PからAB、ACへの垂線の足をそれぞれQ、Rとする図',
  },
  {
    id: 'koushiki_k1godo_nitouhen_ex1',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'basic',
    question: '△ABCはAB＝ACの二等辺三角形で、∠A＝50°である。∠Bの大きさを求めなさい。',
    answer: '65°',
    hint: '二等辺三角形の底角は等しい。三角形の内角の和が180°であることを使う。',
    explanation:
      'AB＝ACより△ABCは二等辺三角形であり、頂角Aの対辺BCに対する底角BとCは等しい（二等辺三角形の性質）。三角形の内角の和は180°なので、∠B＋∠C＝180°－∠A＝180°－50°＝130°。∠B＝∠Cなので、∠B＝130°÷2＝65°。',
    figureDescription: 'AB＝ACの二等辺三角形、∠A＝50°',
  },
  {
    id: 'koushiki_k1godo_nitouhen_ex2',
    subject: 'sansu',
    examType: 'koko',
    grade: 'j2',
    difficulty: 'advanced',
    isWritten: true,
    question: '△ABCにおいて、∠B＝∠Cであるとき、AB＝ACとなることを証明しなさい。（二等辺三角形の性質の逆）',
    answer:
      '∠Aの二等分線をひき、辺BCとの交点をMとする。\n△ABMと△ACMにおいて、\n作図より ∠BAM＝∠CAM …①\n仮定より ∠ABM＝∠ACM …②\n共通な辺だから AM＝AM …③\n①、②より、三角形の内角の和は180°なので、残りの角も等しく ∠AMB＝∠AMC …④\n①、③、④より、1辺とその両端の角がそれぞれ等しいから、△ABM≡△ACM。\n合同な図形の対応する辺は等しいから、AB＝AC。',
    hint: '∠Aの二等分線をひいて2つの三角形に分け、1辺とその両端の角がそれぞれ等しい（ASA）ことを示す。',
    explanation:
      '△ABCで∠B＝∠Cが成り立っているとき、AB＝ACであることを示したい。∠Aの二等分線をひき、辺BCとの交点をMとする。△ABMと△ACMにおいて、作図より∠BAM＝∠CAM。仮定より∠ABM＝∠ACM（∠B＝∠Cそのもの）。三角形の内角の和はどちらも180°であり、すでに2組の角がそれぞれ等しいことが分かっているので、残りの角も自動的に等しくなり、∠AMB＝∠AMC。AMは2つの三角形に共通な辺なので、AM＝AM。以上より、1辺（AM＝AM）とその両端の角（∠BAM＝∠CAM、∠AMB＝∠AMC）がそれぞれ等しいので、1辺とその両端の角がそれぞれ等しい（ASA）の合同条件より△ABM≡△ACM。合同な図形の対応する辺は等しいので、AB＝ACが証明できる。これが「二等辺三角形の性質の逆」である。',
    rubricPoints: [
      '∠Aの二等分線をひいて△ABMと△ACMを設定している',
      '∠BAM＝∠CAM（作図）と∠ABM＝∠ACM（仮定）から、残りの角∠AMB＝∠AMCも等しいことを示している',
      '共通な辺AM＝AMを用い、1辺とその両端の角がそれぞれ等しい（ASA）ことを明示している',
      '合同な図形の対応する辺からAB＝ACを結論づけている',
    ],
    figureDescription: '△ABCで∠B＝∠Cのとき、∠Aの二等分線とBCとの交点をMとした図',
  },
];
