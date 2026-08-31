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
};
