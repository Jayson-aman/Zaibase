import type { Figure } from './figures';

export const lessonFigsKoushikiK4En1: Record<string, Figure> = {
  lf_koushiki_k4en1_enshuukaku_teiri: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 150, label: 'A' },
      { angle: 268, label: 'B' },
      { angle: 30, label: 'P' },
      { angle: 70, label: 'Q' },
    ],
    chords: [
      [0, 1],
      [2, 0],
      [2, 1],
      [3, 0],
      [3, 1],
    ],
    sector: { from: 150, to: 268, label: '中心角∠AOB' },
    caption:
      '中心Oと円周上の点A,B,P,Qを結ぶ。∠AOBが中心角、∠APB・∠AQBが同じ弧ABに対する円周角(この証明はOが∠APBの内部にある場合。中心が三角形の辺上・外部にある場合も同様に成り立つ)',
    steps: [
      '中心Oと円周上の点A、B、Pを結ぶ。OA=OB=OP=半径rなので、△OAPと△OBPはどちらも二等辺三角形になる。',
      '△OAPでOA=OPなので、∠OAP=∠OPA=α とおける(底角が等しい二等辺三角形)。',
      '△OBPでOB=OPなので、∠OBP=∠OPB=β とおける。',
      '△OAPの内角の和より∠AOP=180°−2α。同様に△OBPの内角の和より∠BOP=180°−2β。',
      '中心角∠AOB=360°−∠AOP−∠BOP=360°−(180°−2α)−(180°−2β)=2α+2β=2(α+β)。',
      '円周角∠APB=∠OPA+∠OPB=α+β。よって中心角∠AOB=2×円周角∠APBが成り立つ(円周角は中心角の半分)。',
      '点Qも同じ弧(Pと同じ側の弧AB)上にあれば、まったく同じ計算で∠AQB=α+βとなるので、∠APB=∠AQBが成り立つ(同じ弧に対する円周角は等しい)。',
    ],
  },

  lf_koushiki_k4en1_enshuukaku_gyaku: {
    kind: 'circle',
    showCenter: false,
    points: [
      { angle: 200, label: 'A' },
      { angle: 340, label: 'B' },
      { angle: 60, label: 'P' },
      { angle: 100, label: 'Q' },
    ],
    chords: [
      [0, 1],
      [2, 0],
      [2, 1],
      [3, 0],
      [3, 1],
    ],
    caption:
      '直線ABに対して同じ側にある2点P,Q。∠APB=∠AQBが成り立つならば、4点A,B,P,Qは同一円周上にある(円周角の定理の逆)',
    steps: [
      '2点A、Bと、直線ABに対して同じ側にある2点P、Qを考える。∠APB=∠AQBが成り立っているとする。',
      '3点A、B、Pを通る円をかく(一直線上にない3点を通る円はただ1つに決まる)。',
      'この円周上でPが乗っている弧(ABに対してPと同じ側の弧)に対する円周角は、円周角の定理よりすべて∠APBに等しい。',
      'もしQがこの円の外側にあると仮定すると、線分AQと円との交点をQ′とすると、三角形の外角の性質より∠AQB<∠AQ′B=∠APBとなり、∠APB=∠AQBに矛盾する。',
      '同様にQがこの円の内側にあると仮定すると、∠AQB>∠APBとなり、これも∠APB=∠AQBに矛盾する。',
      'したがってQは円の外にも内にもありえず、円周上にあるしかない。',
      'よって∠APB=∠AQB(同じ側)ならば4点A、B、P、Qは同一円周上にある。これが円周角の定理の逆である。',
    ],
  },

  lf_koushiki_k4en1_gaishin_naishin_suishin: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 106.26, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 180, label: 'C' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    caption:
      '直角三角形ABC(∠A=90°、AB=8cm、AC=6cm、BC=10cm)をその外接円に内接させた図。BCが直径なので中心Oが外心であり、外心Oは辺BCの中点と一致する(円周角の定理より∠BAC=90°)。OA=OB=OC=5cm(外接円の半径)',
    steps: [
      '円周上のBとCを結ぶ弦BCが、中心Oを通る直径になるように配置する',
      '直径に対する円周角はつねに90°になる(円周角の定理)ので、円周上のどこにAをとっても∠BAC=90°になる。ここではAB=8cm、AC=6cm、BC=10cmの直角三角形になるようにAの位置を選んでいる',
      '円の中心Oは、定義よりOA=OB=OC=半径(この場合5cm)を満たす点である。これが外心の定義そのものである',
      '実は、直角三角形の外心は必ず斜辺の中点と一致する。斜辺BC=10cmの中点がOであり、OB=OC=5cm(半径)になっている',
      'この性質(外心=斜辺の中点)は直角三角形に限った特別なケース。一般の三角形では、外心は3辺の垂直二等分線の交点として求める',
      '同じ三角形(A(0,0)、B(8,0)、C(0,6)とする)で内心・垂心を計算すると、内心I=(2,2)(内接円の半径2cm)、垂心=A(0,0)(直角の頂点)になる(図には示さない。詳しい計算は本文を参照)',
    ],
  },
};
