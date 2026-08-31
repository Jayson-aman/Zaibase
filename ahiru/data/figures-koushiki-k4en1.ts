import type { Figure } from './figures';

export const figuresKoushikiK4En1: Record<string, Figure> = {
  koushiki_k4en1_enshuukaku_teiri_ex1: {
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
    sector: { from: 150, to: 268, label: '118°' },
    caption: '中心角∠AOB=118°。円周角∠APB・∠AQB(ともに弧AB上、Aを含まない側)を求める',
    steps: [
      '円周角の定理を確認する:同じ弧に対する円周角は、対応する中心角の半分になる。',
      '中心角∠AOB=118°であることを式に用いる。',
      '円周角∠APBを求める式を立てる:∠APB=118°÷2',
      '計算する:118°÷2=59°',
      '∠APB=59°',
      '点Qも点Pと同じ側の弧(弧AB上、Aを含まない側)にあるので、「同じ弧に対する円周角はすべて等しい」より∠AQBも59°になる。',
      'よって∠APB=∠AQB=59°である。',
    ],
  },

  koushiki_k4en1_enshuukaku_teiri_ex2: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 180, label: 'A' },
      { angle: 0, label: 'B' },
      { angle: 60, label: 'C' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [2, 1],
    ],
    caption: '線分ABは直径。Cは円周上の点。∠BAC=34°のとき、∠ACBと∠ABCを求める',
    steps: [
      'ABは直径なので、中心Oは線分AB上にあり、中心角∠AOB=180°である。',
      '弧ACB(Cが乗っている側の弧)に対する中心角は180°なので、円周角の定理より∠ACB=180°÷2=90°。',
      'したがって∠ACB=90°(半円の弧に対する円周角は必ず90°になる)。',
      '△ABCの内角の和は180°であることを使う。',
      '∠BAC=34°、∠ACB=90°を代入する:34°+90°+∠ABC=180°',
      '移項して計算する:∠ABC=180°−34°−90°',
      '∠ABC=56°',
    ],
  },

  koushiki_k4en1_enshuukaku_gyaku_ex1: {
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
    caption: '直線ABに対して同じ側にある2点P,Q。∠APB=∠AQB=63°のとき、4点は同一円周上にあるか',
    steps: [
      '2点P,Qが直線ABに対して同じ側にあることを確認する(これが円周角の定理の逆を使うための前提条件)。',
      '∠APB=63°、∠AQB=63°であることを確認する。',
      '∠APB=∠AQBが成り立っている。',
      '円周角の定理の逆を確認する:直線ABの同じ側にある2点P,Qについて∠APB=∠AQBが成り立てば、4点A,B,P,Qは同一円周上にある。',
      'この問題の条件は、この逆の定理の仮定(同じ側・角度が等しい)をどちらも満たしている。',
      'したがって4点A,B,P,Qは同一円周上にあると判定できる。',
    ],
  },

  koushiki_k4en1_enshuukaku_gyaku_ex2: {
    kind: 'circle',
    showCenter: true,
    points: [
      { angle: 180, label: 'C' },
      { angle: 0, label: 'P' },
      { angle: 100, label: 'H' },
      { angle: 260, label: 'K' },
    ],
    chords: [
      [0, 1],
      [0, 2],
      [2, 1],
      [0, 3],
      [3, 1],
    ],
    caption:
      'H,KはそれぞれAH⊥BC、BK⊥ACの垂線の足。P=AH∩BK。CPを直径とする円をかくと、∠CHP=∠CKP=90°よりH,Kはこの円周上にある',
    steps: [
      '△ABCで、頂点Aから辺BCへの垂線の足をH、頂点Bから辺ACへの垂線の足をK、2つの垂線の交点をPとする。',
      '点PはAH上にあるので、∠PHC=∠AHC=90°(AH⊥BCより)が成り立つ。',
      '点PはBK上にあるので、∠PKC=∠BKC=90°(BK⊥ACより)が成り立つ。',
      '線分PCを直径とする円を考える。円周角の定理の逆(直径に対する円周角は90°になることの逆)を確認する:ある点が線分の両端を90°で見込むなら、その点はその線分を直径とする円周上にある。',
      '∠PHC=90°なので、Hはこの円(PCを直径とする円)周上にある。',
      '∠PKC=90°なので、Kも同じ円周上にある。',
      'C,Pはこの円の直径の両端としてもとから円周上にあるので、4点C,H,P,Kはすべて同一円周上にある。',
    ],
  },
};
