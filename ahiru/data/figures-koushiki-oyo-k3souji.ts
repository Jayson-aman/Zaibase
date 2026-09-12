import type { Figure } from './figures';

export const figuresKoushikiOyoK3Souji: Record<string, Figure> = {
  koushiki_k3souji_soujijoken_oyo1: {
    kind: 'polygon',
    points: [
      { x: 2, y: 6, label: 'A' },
      { x: 8, y: 6, label: 'D' },
      { x: 10, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'B' },
    ],
    sideLabels: ['AD=6cm', null, 'BC=10cm', null],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '台形ABCDはAD∥BC、AD=6cm、BC=10cm。対角線ACとBDの交点をOとする(Oは図には示さない)',
    steps: [
      '台形ABCDはAD∥BC、AD=6cm、BC=10cm。対角線ACとBDの交点をOとする',
      'AD∥BCなので、ACを2直線AD, BCに交わる直線と見ると、錯角より∠OAD=∠OCB',
      '同じくAD∥BCなので、BDを2直線AD, BCに交わる直線と見ると、錯角より∠ODA=∠OBC',
      '2組の角がそれぞれ等しいから△OAD∽△OCB(AA相似)。相似比はAD:CB=6:10=3:5',
      '面積比は相似比の2乗9:25になる。△OAD=18cm²のとき、18:△OCB=9:25よりOCB=50cm²',
      '△ABDと△ACDは底辺ADが共通で、B, CはともにBC∥ADより直線ADから等距離にあるため高さが等しく、△ABD=△ACD',
      '△ABD=△OAB+△OAD、△ACD=△OAD+△OCDなので、共通の△OADを引くと△OAB=△OCD',
    ],
  },
  koushiki_k3souji_soujijoken_oyo2: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '6cm', height: '9cm' },
    caption:
      '底面の半径6cm、高さ9cmの円すいを、頂点から6cmの位置で底面に平行な平面で切る',
    steps: [
      '円すいの頂点をAとし、底面の中心をHとする。AH=9cm(高さ)、底面の半径6cm',
      '頂点Aから6cmの位置で底面に平行な平面で切ると、軸を含む切り口の二等辺三角形の中に、頂点Aを共有するもう一回り小さい相似な三角形ができる',
      '底面に平行な平面で切っているので、頂点の角が共通、同位角が等しいことからAA相似により、小さい円すい(上部)ともとの円すいは相似',
      '高さの比はAH\':AH=6:9=2:3なので、これが相似比になる。小さい円すいの底面の半径は6×(2/3)=4cm',
      '相似な立体の体積比は相似比の3乗になるので、小さい円すい:もとの円すい=2³:3³=8:27',
      'もとの円すいの体積=(1/3)×π×6²×9=108π(cm³)、小さい円すいの体積=(1/3)×π×4²×6=32π(cm³)。32:108=8:27で一致を確認',
      '円すい台(下部)の体積=108π-32π=76π(cm³)。もとの円すいの体積に対する比は76:108=19:27',
    ],
  },
  koushiki_k3souji_chutenrenketsu_oyo1: {
    kind: 'polygon',
    points: [
      { x: -6, y: 0, label: 'A' },
      { x: 0, y: -5, label: 'B' },
      { x: 10, y: 0, label: 'C' },
      { x: 0, y: 7, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '四角形ABCD。対角線ACとBDはOで垂直に交わり、AC=16cm、BD=12cm。辺AB, BC, CD, DAの中点をそれぞれP, Q, R, Sとする(P, Q, R, Sは図には示さない)',
    steps: [
      '辺AB, BC, CD, DAの中点をそれぞれP, Q, R, Sとする',
      '△ABCでP, Qはそれぞれ辺AB, BCの中点なので、中点連結定理よりPQ∥AC、PQ=(1/2)AC',
      '△ACDでS, Rはそれぞれ辺AD, DCの中点なので、中点連結定理よりSR∥AC、SR=(1/2)AC',
      'PQ∥SR、PQ=SR=(1/2)AC=8cmとなり、1組の対辺が平行でその長さが等しいから四角形PQRSは平行四辺形である',
      '同様に△BCD、△ABDでそれぞれ中点連結定理を使うと、QR∥BD・QR=(1/2)BD=6cm、PS∥BD・PS=(1/2)BD=6cmが成り立つ',
      'PQ∥AC、QR∥BDで、AC⊥BDだから、PQ⊥QR。よって平行四辺形PQRSは4つの角がすべて直角の長方形である',
      '長方形PQRSの面積=PQ×QR=8×6=48cm²',
      '四角形ABCDはAC⊥BDより面積=(1/2)×AC×BD=(1/2)×16×12=96cm²。PQRS:ABCD=48:96=1:2',
    ],
  },
  koushiki_k3souji_chutenrenketsu_oyo2: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 3, y: 5, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 6, y: 0, label: 'E' },
      { x: 12, y: 0, label: 'C' },
      { x: 9, y: 5, label: 'F' },
    ],
    equalSides: [
      [0, 1],
      [2, 3],
      [4, 5],
    ],
    diagonals: [
      [1, 3],
      [3, 5],
      [5, 1],
    ],
    caption:
      '△ABCの辺AB, BC, CAの中点D, E, Fを結んだ中点三角形DEF。さらにDEFの辺DE, EF, FDの中点G, H, Iを結んだ中点三角形GHI(G, H, Iは図には示さない)',
    steps: [
      'D, E, Fはそれぞれ辺AB, BC, CAの中点。中点連結定理を3回使うと、△DEFの3辺はすべて△ABCの3辺のちょうど半分になり、△DEF∽△ABC(相似比1:2)',
      '同じように、△DEFの辺DE, EF, FDの中点をそれぞれG, H, Iとすると、△DEFに対して中点連結定理を3回使うことで△GHI∽△DEF(相似比1:2)が成り立つ',
      '△GHIは△DEFの相似比1:2の縮図であり、△DEFは△ABCの相似比1:2の縮図なので、△GHIは△ABCの縮図を2回繰り返したものになる',
      '相似比を2回かけ合わせると、△GHIと△ABCの相似比は(1/2)×(1/2)=1/4、すなわち1:4',
      '面積比は相似比の2乗になるので、△GHI:△ABC=1²:4²=1:16',
      '△ABCの面積が160cm²のとき、△GHI=160×(1/16)=10cm²',
      '周の長さの比は相似比そのまま(1乗)なので△GHI:△ABC=1:4。△ABCの周の長さが72cmのとき、△GHI=72×(1/4)=18cm',
    ],
  },
  koushiki_k3souji_heikousen_oyo1: {
    kind: 'polygon',
    points: [
      { x: 9, y: 15, label: 'E' },
      { x: 6, y: 10, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 6.7, y: 0, label: 'D' },
      { x: 16, y: 0, label: 'C' },
    ],
    sideLabels: [null, 'AB=15cm', null, null, null],
    diagonals: [
      [1, 3],
      [1, 4],
    ],
    caption:
      '△ABCで∠Aの二等分線ADと、Cを通りADに平行な直線が辺BAの延長と交わる点E。AD∥CE。AB=15cm、AC=9cm、BC=16cm',
    steps: [
      '∠Aの二等分線をADとする。Cを通りADに平行な直線を引き、辺BAの延長との交点をEとする(このときB, A, Eはこの順に一直線上に並ぶ)',
      'AD∥ECで、ACが2直線AD, ECに交わる直線だから、錯角より∠DAC=∠ACE',
      'AD∥ECで、直線BAE(=BE)が2直線AD, ECに交わる直線だから、同位角より∠BAD=∠AEC',
      'ADは∠Aの二等分線だから∠BAD=∠DAC。上の2つの結果と合わせると∠ACE=∠DAC=∠BAD=∠AEC、つまり∠ACE=∠AEC',
      '△ACEで∠ACE=∠AECなので底角が等しい二等辺三角形となり、AE=AC(等しい角に向かい合う辺が等しい)',
      '△BECの中で、AはBE上の点、DはBC上の点で、AD∥ECだから、平行線と線分の比の定理よりBA:AE=BD:DC',
      'AE=AC(上の結果)を代入すると、BA:AC=BD:DC、つまりBD:DC=AB:AC(角の二等分線と辺の比の定理が証明できた)',
      'AB=15cm、AC=9cm、BC=16cmを用いると、BD:DC=15:9=5:3。BD=16×5/8=10cm、DC=16×3/8=6cm',
    ],
  },
  koushiki_k3souji_heikousen_oyo2: {
    kind: 'polygon',
    points: [
      { x: 6, y: 12, label: 'A' },
      { x: 4.667, y: 9.333, label: 'D' },
      { x: 2.667, y: 5.333, label: 'E' },
      { x: 0, y: 0, label: 'B' },
      { x: 18, y: 0, label: 'C' },
      { x: 12.667, y: 5.333, label: 'G' },
      { x: 8.667, y: 9.333, label: 'F' },
    ],
    sideLabels: ['AD(2)', 'DE(3)', 'EB(4)', null, null, null, null],
    diagonals: [
      [1, 6],
      [2, 5],
    ],
    caption:
      '△ABCの辺AB上に点D, E(AD:DE:EB=2:3:4)、辺AC上に点F, Gがあり、DF∥EG∥BC',
    steps: [
      'AD:DE:EB=2:3:4より、AB全体を9とするとAD=2、AE=AD+DE=5、AB=9',
      'DF∥BCより△ADF∽△ABC(AA相似)。相似比はAD:AB=2:9なので、DF:BC=2:9',
      'EG∥BCより△AEG∽△ABC(AA相似)。相似比はAE:AB=5:9なので、EG:BC=5:9',
      '2, 3をまとめると、DF:EG:BC=2:5:9(同じ基準9でそろえた比)',
      '面積比は相似比の2乗になるので、△ADF:△ABC=2²:9²=4:81、△AEG:△ABC=5²:9²=25:81',
      '△ABCの面積が162cm²のとき、△ADF=162×4/81=8cm²、△AEG=162×25/81=50cm²',
      '四角形DEGFの面積=△AEG-△ADF=50-8=42cm²',
      '四角形EBCGの面積=△ABC-△AEG=162-50=112cm²(検算:8+42+112=162で一致)',
    ],
  },
  koushiki_k3souji_soujijoken_oyo3: {
    kind: 'polygon',
    points: [
      { x: 2.5, y: 4.33, label: 'A' },
      { x: 0.6, y: 1.04, label: 'P' },
      { x: 0, y: 0, label: 'B' },
      { x: 2, y: 0, label: 'Q' },
      { x: 5, y: 0, label: 'C' },
    ],
    sideLabels: [null, null, 'BQ=2cm', 'QC=3cm', 'CA=5cm'],
    diagonals: [
      [3, 1],
      [3, 0],
    ],
    caption:
      '1辺5cmの正三角形ABCで、辺AB上の点P、辺BC上の点Qについて∠AQP=60°。BQ=2cmのとき△ACQ∽△QBPを使ってBPを求める',
    steps: [
      '正三角形ABCの辺AB上に点P、辺BC上に点Qをとり、∠AQP=60°とする。BQ=2cmより、CQ=5-2=3cm',
      '正三角形の内角はすべて60°なので∠ACQ(∠C)=∠QBP(∠B)=60°',
      '△ACQの頂点Qの外角∠BQAは、隣り合わない2つの内角の和∠CAQ+∠ACQに等しい',
      '一方、∠BQAは∠BQPと∠AQP(=60°)に分けられるので∠BQA=∠BQP+60°。2つの表し方を比べると∠CAQ+60°=∠BQP+60°となり、∠CAQ=∠BQP',
      '2組の角(∠ACQ=∠QBP、∠CAQ=∠BQP)がそれぞれ等しいので△ACQ∽△QBP(AA相似)',
      '対応する頂点の順(A↔Q、C↔B、Q↔P)を保って比例式を立てるとCQ:BP=CA:QB。3:BP=5:2を解くとBP=6/5cm',
    ],
  },
  koushiki_k3souji_cheva_oyo1: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 3, y: 5, label: 'F' },
      { x: 0, y: 0, label: 'B' },
      { x: 4.8, y: 0, label: 'D' },
      { x: 12, y: 0, label: 'C' },
      { x: 8.4, y: 6, label: 'E' },
    ],
    sideLabels: ['AF', 'FB', 'BD=4cm', 'DC=6cm', 'CE=3cm', 'EA=2cm'],
    diagonals: [
      [0, 3],
      [2, 5],
      [4, 1],
    ],
    caption:
      '△ABCの内部の点Pを通る3直線AD、BE、CF。BD=4cm、DC=6cm、CE=3cm、EA=2cm（AF:FBは求める値なので図には示さない）',
    steps: [
      '直線AP、BP、CPをそれぞれのばして、対辺BC、CA、ABとの交点をD、E、Fとする',
      'BD:DC=4:6=2:3、CE:EA=3:2が与えられている',
      'チェバの定理(BD/DC)×(CE/EA)×(AF/FB)=1に代入すると(2/3)×(3/2)×(AF/FB)=1',
      '(2/3)×(3/2)=1なので、AF/FB=1、つまりAF:FB=1:1（FはABの中点）',
      '逆に、この3つの比をかけると1になることから、チェバの定理の逆により3直線AD、BE、CFが1点で交わることが確認できる',
    ],
  },
  koushiki_k3souji_heikousen_oyo3: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'B' },
      { x: 3, y: 0, label: 'F' },
      { x: 8, y: 0, label: 'D' },
      { x: 8, y: 10, label: 'C' },
      { x: 3, y: 3.75, label: 'E' },
      { x: 0, y: 6, label: 'A' },
    ],
    sideLabels: [null, null, 'CD=10cm', null, null, 'AB=6cm'],
    diagonals: [
      [0, 4],
      [4, 2],
      [4, 1],
    ],
    caption:
      'AB⊥BD、CD⊥BDで、AB=6cm、CD=10cm。対角線ADとBCの交点をEとし、EからBDに垂線を下ろした足をFとするとAB∥EF∥CD',
    steps: [
      'B, D上にそれぞれ垂直に辺AB=6cm、CD=10cmを立て、対角線ADとBCの交点をEとする',
      'EからBDに垂線を下ろした点をFとすると、AB∥EF∥CD（すべてBDに垂直だから平行）',
      'BD上でBからの距離の割合をtとすると、直線AD上の高さは6-6t、直線BC上の高さは10t。Eではこの2つが一致するので6-6t=10tよりt=3/8',
      'よってBF:BD=3:8、FD:BD=5:8なので、BF:FD=3:5',
      'Eの高さ（EFの長さ）は6-6×3/8=3.75cm。AB:EF=6:3.75を整数比に直すと8:5',
    ],
  },
  koushiki_k3souji_soujijoken_oyo4: {
    kind: 'polygon',
    points: [
      { x: -4, y: 4, label: 'A' },
      { x: 0, y: 0, label: 'E' },
      { x: 6, y: -6, label: 'B' },
      { x: -6, y: -6, label: 'D' },
      { x: 0, y: 0 },
      { x: 4, y: 4, label: 'C' },
    ],
    sideLabels: ['AE=4', 'EB=6', null, 'DE=12', 'EC=8', null],
    caption:
      '線分ABと線分CDが点Eで交わっている。AE=4cm、EB=6cm、CE=8cm、DE=12cm',
    steps: [
      '線分ABと線分CDは1点Eで交わっている。AE=4cm、EB=6cm、CE=8cm、DE=12cm',
      'ABとCDが1点Eで交わる直線なので、∠AECと∠BEDは対頂角の関係にあり、常に等しい',
      'AE:EB=4:6=2:3、CE:ED=8:12=2:3で、この2つの比が一致している',
      '間の角(対頂角で等しい)と、その両側の辺の比がそれぞれ等しいので、SAS相似の条件から△AEC∽△BED',
    ],
  },
  koushiki_k3souji_menseki_hi_oyo1: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 3.429, y: 5.714, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
      { x: 8.571, y: 5.714, label: 'E' },
    ],
    sideLabels: ['AD=3', 'DB=4', null, 'CE=4', 'EA=3'],
    diagonals: [[1, 4]],
    caption:
      '△ABCの辺AB上の点D、辺AC上の点E。DE∥BC、AD:DB=3:4。△ABC=98cm²のとき△ADEの面積を求める',
    steps: [
      'DE∥BCより∠ADE=∠ABC(同位角)、∠Aは共通なので△ADE∽△ABC(AA相似)',
      'AD:DB=3:4なのでAD:AB=3:7',
      '面積比は相似比の2乗になるので△ADE:△ABC=3²:7²=9:49',
      '△ABC=98cm²のとき、△ADE=98×9/49=18cm²、四角形DBCE=98-18=80cm²',
      '別の例：面積比45:80は9:16に約分でき、これは3²:4²の形なので相似比は3:4',
    ],
  },
  koushiki_k3souji_menseki_hi_oyo2: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 2, y: 3.333, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
      { x: 10, y: 3.333, label: 'E' },
    ],
    sideLabels: ['AD=2', 'DB=1', null, 'EC=1', 'EA=2'],
    diagonals: [[1, 4]],
    caption:
      '面積27cm²の△ABC。辺AB上の点D、辺AC上の点E(AD:DB=AE:EC=2:1、DE∥BC)で△ADEの面積を求める（拡大図△A′B′C′・縮図△A″B″C″は図には示さない）',
    steps: [
      '△ABCを3倍に拡大すると、面積比は1²:3²=1:9になるので、面積は27×9=243cm²',
      '△ABCを1/3倍に縮小すると、面積比は1²:(1/3)²=1:1/9になるので、面積は27×1/9=3cm²',
      '図のようにAD:DB=2:1のときAD:AB=2:3。DE∥BCより△ADE∽△ABC、相似比2:3の面積比は2²:3²=4:9',
      '△ADE=27×4/9=12cm²',
    ],
  },
  koushiki_k3souji_taiseki_hi_oyo1: {
    kind: 'solid',
    shape: 'cone',
    labels: { radius: '9cm', height: '12cm' },
    caption:
      '底面の半径9cm、高さ12cmの円すいを、頂点から4cmの位置で底面に平行な平面で切る',
    steps: [
      '円すいの頂点をAとし、AH=12cm(高さ)、底面の半径9cm',
      '頂点Aから4cmの位置で底面に平行な平面で切ると、頂点Aを共有するもう一回り小さい相似な三角形(円すい)ができる(AA相似)',
      '高さの比は4:12=1:3なので、これが相似比。相似な立体の体積比は相似比の3乗になるので、小さい円すい:もとの円すい=1³:3³=1:27',
      'もとの円すいの体積=(1/3)×π×9²×12=324π(cm³)、小さい円すいの体積=324π×1/27=12π(cm³)',
      '円すい台(下部)の体積=324π-12π=312π(cm³)。もとの円すいの体積に対する比は312:324=26:27',
    ],
  },
  koushiki_k3souji_taiseki_hi_oyo2: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'D' },
      { x: 6, y: 3, label: 'C' },
      { x: 6, y: 6.5, label: 'P' },
    ],
    sideLabels: [null, null, null, 'PC', 'AP'],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '正四面体ABCDの見取図（辺AB, BD, DC, CA, AD, BCの2次元での模式図）。辺AC上の点Pを通り底面BCDに平行な平面で切ると、切り口の面積は△BCDの面積の1/4になる（切り口の他の2頂点Q(辺AB上)、R(辺AD上)は図には示さない）',
    steps: [
      '正四面体ABCDの辺AC上に点Pをとり、Pを通り底面BCDに平行な平面で切ると、辺AB, AD上にもそれぞれ交点Q, Rができ、切り口は小さい三角形になる',
      '底面BCDに平行な平面で切っているので、頂点Aを共有し対応する角が等しくなることから、切り口の三角形は底面の三角形BCDと相似である',
      '切り口の面積が△BCDの面積の1/4であることから、相似比の2乗が1/4なので相似比は1/2。相似比はAP:ACと一致するのでAP:AC=1:2、つまりAP:PC=1:1(Pは辺ACの中点)',
      '頂点Aを含む小さい四面体は、もとの四面体と相似比1:2の相似な立体。体積比は相似比の3乗になるので1³:2³=1:8',
      'もとの四面体の体積が240cm³のとき、頂点Aを含む小さい四面体の体積=240×1/8=30cm³',
      '点Aを含まない方の立体(底面BCDを含む残りの部分)の体積=240-30=210cm³',
    ],
  },
  koushiki_k3souji_kage_suna_oyo1: {
    kind: 'polygon',
    points: [
      { x: 0, y: 3, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'P' },
    ],
    sideLabels: ['AB=1.2m', 'BP=1.6m', null],
    rightAngles: [1],
    caption:
      '棒の先端A、根もとB、影の先端Pでできる直角三角形ABP。同じ時刻、電柱(先端C・根もとD・影の先端Q、図には示さない)も太陽光線が平行なため相似な直角三角形CDQをつくる。電柱の影DQ=10m',
    steps: [
      '棒は地面に垂直に立っているので∠ABP=90°。電柱も地面に垂直なので∠CDQ=90°(図には示さない)',
      '太陽の光線は平行とみなせるので、地面という同じ直線に対する同位角の関係から∠APB=∠CQD',
      '2組の角がそれぞれ等しいので△ABP∽△CDQ(AA相似)',
      'AB:CD=BP:DQなので、1.2:CD=1.6:10。1.6×CD=1.2×10=12より、CD=7.5m',
    ],
  },
  koushiki_k3souji_sen_men_hi_oyo1: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 7.2, y: 0, label: 'D' },
      { x: 12, y: 0, label: 'C' },
      { x: 7.5, y: 7.5, label: 'E' },
    ],
    sideLabels: [null, 'BD=3', 'DC=2', 'CE=3', 'EA=1'],
    diagonals: [
      [0, 2],
      [1, 4],
    ],
    caption:
      '△ABCの辺BC上の点D(BD:DC=3:2)、辺AC上の点E(AE:EC=1:3)。線分ADと線分BEの交点をP(図には示さない)とする',
    steps: [
      '△ABDと△ACD、△PBDと△PCDはそれぞれ頂点A・Pを共有し底辺BD:DC=3:2が共通なので、比の性質より△ABP:△APC=3:2',
      '△ABEと△CBE、△APEと△CPEはそれぞれ頂点B・Pを共有し底辺AE:EC=1:3が共通なので、比の性質より△ABP:△CBP=1:3',
      '2つの比を組み合わせると△ABP:△APC:△CBP=3:2:9。△ABC=140cm²のとき△ABP=140×3/14=30cm²',
      '△CBP=90cm²をBD:DC=3:2で分けると△PDC=90×2/5=36cm²。△APC=20cm²をAE:EC=1:3で分けると△EPC=20×3/4=15cm²',
      '四角形PDCE=△PDC+△EPC=36+15=51cm²',
    ],
  },
  koushiki_k3souji_sen_men_hi_oyo2: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 4, y: 6.667, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 4.8, y: 0, label: 'E' },
      { x: 12, y: 0, label: 'C' },
    ],
    sideLabels: ['AD=1', 'DB=2', 'BE=2', 'EC=3', null],
    diagonals: [
      [1, 3],
      [1, 4],
    ],
    caption:
      '△ABCの辺AB上の点D(AD:DB=1:2)、辺BC上の点E(BE:EC=2:3)。線分DE、線分DCをひくと△ABCが△ADC、△DBE、△DECの3つの部分に分けられる',
    steps: [
      '△DBCと△ABCは頂点Cを共有し底辺DB:AB=2:3(同一直線AB上)なので△DBC:△ABC=2:3',
      '△ADCと△ABCも頂点Cを共有し底辺AD:AB=1:3なので△ADC:△ABC=1:3',
      '△DBEと△DECは頂点Dを共有し底辺BE:EC=2:3(同一直線BC上)なので△DBE:△DEC=2:3、よって△DBE:△DBC=2:5',
      '△ABC=Sとすると△DBC=(2/3)S、△DBE=(2/5)×(2/3)S=(4/15)S、△ADC=(1/3)S=(5/15)S',
      '△DBE:△ADC=4:5、△DBE:△ABC=4:15',
    ],
  },
  koushiki_k3souji_menelaus_oyo1: {
    kind: 'polygon',
    points: [
      { x: 6, y: 10, label: 'A' },
      { x: 2.4, y: 4, label: 'F' },
      { x: 0, y: 0, label: 'B' },
      { x: 12, y: 0, label: 'C' },
      { x: 8.25, y: 6.25, label: 'E' },
    ],
    sideLabels: ['AF=3', 'FB=2', null, 'CE=5', 'EA=3'],
    diagonals: [[1, 4]],
    caption:
      '△ABCの辺AB上の点F(AF:FB=3:2)、辺CA上の点E(CE:EA=5:3)。直線FEを延長すると辺BCの延長上(B側の外部)の点D(図には示さない)で交わる。D, E, Fが同一直線上にあることを利用する',
    steps: [
      'メネラウスの定理(BD/DC)×(CE/EA)×(AF/FB)=1に、CE:EA=5:3、AF:FB=3:2を代入する',
      '(BD/DC)×(5/3)×(3/2)=1より、(BD/DC)×(5/2)=1なのでBD/DC=2/5、BD:DC=2:5',
      '逆に、BD:DC=2:5、CE:EA=5:3、AF:FB=3:2の3つの比をかけ合わせると(2/5)×(5/3)×(3/2)=1になる',
      'メネラウスの定理の逆より、3点D, E, Fは同一直線上にあることが確認できる',
    ],
  },
};
