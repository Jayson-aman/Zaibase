import type { Figure } from './figures';

export const figuresKoushikiOyoK4En1: Record<string, Figure> = {
  koushiki_k4en1_enshuukaku_teiri_oyo1: {
    kind: 'circle',
    showCenter: false,
    points: [
      { angle: 90, label: 'A' },
      { angle: 140, label: 'B' },
      { angle: 230, label: 'C' },
      { angle: 300, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [0, 2],
      [1, 3],
    ],
    sector: { from: 90, to: 140, label: '50°' },
    caption:
      '円周上にA,B,C,Dがこの順に並ぶ。弦ACと弦BDは点Pで交わる。弧AB=50°(中心角)、弧CD=70°(中心角)のとき、∠APBと∠BPCを求める',
    steps: [
      '点Pは弦ACと弦BDの交点であることを確認する(A,P,Cは一直線上、B,P,Dは一直線上)。',
      '線分BCを結び、△BPCに着目する。',
      '点Pは線分AC上にあるので∠PCB=∠ACB。∠ACBは弧AB(中心角50°)に対する円周角なので、円周角の定理より∠ACB=50°÷2=25°。',
      '点Pは線分BD上にあるので∠PBC=∠DBC。∠DBCは弧CD(中心角70°)に対する円周角なので、円周角の定理より∠DBC=70°÷2=35°。',
      '△BPCの内角の和180°より、∠BPC=180°−25°−35°=120°。',
      'A,P,Cは一直線上にあるので、∠APBと∠BPCの和は180°である。',
      '∠APB=180°−∠BPC=180°−120°=60°。よって∠APB=60°、∠BPC=120°。',
    ],
  },

  koushiki_k4en1_enshuukaku_teiri_oyo2: {
    kind: 'circle',
    showCenter: false,
    points: [
      { angle: 90, label: 'A' },
      { angle: 140, label: 'B' },
      { angle: 230, label: 'C' },
      { angle: 300, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [0, 2],
      [1, 3],
    ],
    sector: { from: 90, to: 140, label: 'a' },
    caption:
      '円周上にA,B,C,Dがこの順に並ぶ。弦ACと弦BDは点Pで交わる。弧ABの中心角をa、弧CDの中心角をbとして、∠APB=(a+b)÷2を証明する',
    steps: [
      '点Pは弦ACと弦BDの交点であることを確認する(A,P,Cは一直線上、B,P,Dは一直線上)。',
      '補助線として線分BCを結び、△BPCに着目する。',
      '点Pは線分AC上にあるので∠PCB=∠ACB。∠ACBは弧AB(中心角a)に対する円周角なので、円周角の定理より∠ACB=a÷2。',
      '点Pは線分BD上にあるので∠PBC=∠DBC。∠DBCは弧CD(中心角b)に対する円周角なので、円周角の定理より∠DBC=b÷2。',
      '△BPCの内角の和180°より、∠BPC=180°−a÷2−b÷2。',
      'A,P,Cは一直線上にあるので、∠APB=180°−∠BPCという関係が成り立つ。',
      '代入して整理すると、∠APB=180°−(180°−a÷2−b÷2)=(a+b)÷2。',
    ],
  },

  koushiki_k4en1_enshuukaku_gyaku_oyo1: {
    kind: 'circle',
    showCenter: false,
    points: [
      { angle: 90, label: 'A' },
      { angle: 170, label: 'B' },
      { angle: 250, label: 'C' },
      { angle: 330, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [0, 2],
      [1, 3],
    ],
    sector: { from: 170, to: 250, label: '76°' },
    caption:
      '四角形ABCDの対角線ACとBDが点Pで交わる。∠BAC=∠BDC=38°(弧BCに対する円周角)、∠ABD=24°のとき、4点が同一円周上にあることを示し∠APBを求める',
    steps: [
      '頂点A,Dが直線BCに対して同じ側にあることを、四角形ABCDの頂点の並び方から確認する。',
      '∠BAC=∠BDC(=38°)であることを確認する。',
      '円周角の定理の逆(同じ側・角度が等しい)より、4点A,B,C,Dは同一円周上にあると分かる。',
      '対角線ACとBDの交点をPとし、△ABPに着目する。',
      '点Pは線分AC上にあるので∠PAB=∠BAC=38°。',
      '点Pは線分BD上にあるので∠PBA=∠ABD=24°。',
      '△ABPの内角の和180°より、∠APB=180°−38°−24°=118°。',
    ],
  },

  koushiki_k4en1_enshuukaku_gyaku_oyo2: {
    kind: 'circle',
    showCenter: false,
    points: [
      { angle: 90, label: 'A' },
      { angle: 160, label: 'C' },
      { angle: 250, label: 'B' },
      { angle: 340, label: 'D' },
    ],
    chords: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [0, 2],
      [1, 3],
    ],
    caption:
      '線分ABと線分CDが点Pで交わる(PA=4,PB=9,PC=3,PD=12、PA×PB=PC×PD)。4点A,B,C,Dが同一円周上にあることを証明する',
    steps: [
      'Pは線分AB上、線分CD上の点なので、A,P,Bと C,P,Dはそれぞれ一直線上にある。',
      '対頂角の性質より∠APC=∠BPDであることを確認する。',
      'PA×PB=PC×PDを変形して、PA/PD=PC/PBという比の関係を導く。',
      '対頂角が等しいことと、その角をはさむ2辺の比が等しいことから、△APC∽△DPB(2辺の比とその間の角)であることを示す。',
      '相似な三角形の対応する角は等しいので、∠PAC=∠PDBが成り立つ。',
      'ray AP=ray AB、ray DP=ray DCであることから、∠PAC=∠BAC、∠PDB=∠BDCと言い換えられ、∠BAC=∠BDCが得られる。',
      '四角形ACBDにおいて辺CBの両端でない頂点A,Dは、直線BCに対して同じ側にあることを確認する。',
      '∠BAC=∠BDC(同じ側)であることと円周角の定理の逆より、4点A,B,C,Dは同一円周上にあると結論できる。',
    ],
  },
};
