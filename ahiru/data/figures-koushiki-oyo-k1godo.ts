import type { Figure } from './figures';

export const figuresKoushikiOyoK1Godo: Record<string, Figure> = {
  koushiki_k1godo_goudoujoken_oyo1: {
    kind: 'polygon',
    points: [
      { x: 4, y: 7, label: 'A' },
      { x: 1.8, y: 3.15, label: 'D' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 6.2, y: 3.15, label: 'E' },
    ],
    diagonals: [
      [2, 4],
      [3, 1],
    ],
    equalSides: [[0, 4]],
    caption: '△ABC（AB＝AC）の辺AB、AC上にAD＝AEとなる点D、Eをとり、BEとCDの交点をFとする',
    steps: [
      '△ABCはAB＝ACの二等辺三角形。辺AB上にD、辺AC上にEを、AD＝AEとなるようにとる',
      '△ABEと△ACDを比べる。∠BAE、∠CADはどちらも頂角∠BACそのものなので、∠BAE＝∠CAD',
      '仮定よりAB＝AC、AE＝AD。2辺（AB＝AC、AE＝AD）とその間の角（∠BAE＝∠CAD）がそれぞれ等しいから、△ABE≡△ACD（SAS）',
      '合同な図形の対応する角より、∠ABE＝∠ACD',
      '△ABCは二等辺三角形なので底角は等しく、∠ABC＝∠ACB＝(180°－∠A)÷2',
      '∠EBC＝∠ABC－∠ABE、∠DCB＝∠ACB－∠ACDを計算すると、∠EBC＝∠DCBであることが分かる',
      'BEとCDの交点をFとすると、△FBCにおいて∠FBC＝∠EBC、∠FCB＝∠DCBなので、三角形の内角の和180°から∠BFCが求められる',
    ],
  },
  koushiki_k1godo_goudoujoken_oyo2: {
    kind: 'coordinate',
    xRange: [-1, 9],
    yRange: [-2, 6],
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 1, label: 'B' },
      { x: 7, y: 5, label: 'C' },
      { x: 1, y: 4, label: 'D' },
      { x: 4.5, y: 1.9, label: 'E' },
      { x: 2.5, y: 3.1, label: 'F' },
    ],
    segments: [
      [
        { x: 0, y: 0 },
        { x: 6, y: 1 },
      ],
      [
        { x: 6, y: 1 },
        { x: 7, y: 5 },
      ],
      [
        { x: 7, y: 5 },
        { x: 1, y: 4 },
      ],
      [
        { x: 1, y: 4 },
        { x: 0, y: 0 },
      ],
      [
        { x: 6, y: 1 },
        { x: 1, y: 4 },
      ],
      [
        { x: 0, y: 0 },
        { x: 4.5, y: 1.9 },
      ],
      [
        { x: 7, y: 5 },
        { x: 2.5, y: 3.1 },
      ],
    ],
    caption: '平行四辺形ABCDの対角線BD上に、BE＝DFとなるように2点E、Fをとる（Eは頂点Bに近い側、Fは頂点Dに近い側）',
    steps: [
      '平行四辺形ABCDでは、AB∥DCかつAB＝DC（平行四辺形の性質）',
      '対角線BD上に、BE＝DFとなるように点E、Fをとる（Eは頂点Bに近い側、Fは頂点Dに近い側）',
      'AB∥DCで、BDを横断線とみると、∠ABDと∠CDBは錯角の位置にあるので、∠ABD＝∠CDB。E、FはBD上の点だから∠ABE＝∠CDF',
      '△ABEと△CDFにおいて、AB＝DC、∠ABE＝∠CDF、BE＝DFがそれぞれ成り立つ',
      '2組の辺とその間の角がそれぞれ等しいから、△ABE≡△CDF（SAS）',
      '合同な図形の対応する辺は等しいから、AE＝CF',
    ],
  },
  koushiki_k1godo_chokkaku_oyo1: {
    kind: 'polygon',
    points: [
      { x: 4, y: 7, label: 'A' },
      { x: 2, y: 3.5, label: 'P' },
      { x: 0, y: 0, label: 'B' },
      { x: 4, y: 0, label: 'H' },
      { x: 8, y: 0, label: 'C' },
      { x: 6, y: 3.5, label: 'Q' },
    ],
    heights: [
      { from: 0, toEdge: [2, 4], label: 'AH' },
      { from: 3, toEdge: [0, 2], label: 'HP' },
      { from: 3, toEdge: [0, 4], label: 'HQ' },
    ],
    caption: '△ABC（AB＝AC）の頂点Aから辺BCへの垂線をAH、Hから辺AB・ACへの垂線をそれぞれHP・HQとする',
    steps: [
      '△ABCはAB＝ACの二等辺三角形。頂点Aから辺BCに垂線AHをひき、Hから辺AB、ACへの垂線の足をそれぞれP、Qとする',
      '△ABHと△ACHを比べる。AH⊥BCより、∠AHB＝∠AHC＝90°なので、どちらも直角三角形である',
      '斜辺はそれぞれAB、AC。仮定よりAB＝AC。もう一方の辺はAH＝AH（共通）',
      '直角三角形の斜辺と他の1辺がそれぞれ等しいから、△ABH≡△ACH',
      '合同な図形の対応する角より、∠BAH＝∠CAH（AHは∠Aの二等分線でもある）',
      '次に△APHと△AQHを比べる。HP⊥AB、HQ⊥ACより、∠APH＝∠AQH＝90°なので、どちらも直角三角形である',
      '斜辺はどちらもAH（共通）。もう一方の情報として、∠PAH＝∠QAH（⑤より）',
      '直角三角形の斜辺と1鋭角がそれぞれ等しいから、△APH≡△AQH。合同な図形の対応する辺より、HP＝HQ',
    ],
  },
  koushiki_k1godo_chokkaku_oyo2: {
    kind: 'polygon',
    points: [
      { x: 4, y: 7, label: 'A' },
      { x: 1.97, y: 3.45, label: 'E' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 6.03, y: 3.45, label: 'D' },
    ],
    diagonals: [
      [2, 4],
      [3, 1],
    ],
    caption: '△ABC（AB＝AC）で、頂点Bから辺ACへの垂線をBD、頂点Cから辺ABへの垂線をCEとし、その交点をFとする',
    steps: [
      '△ABCはAB＝ACの二等辺三角形。頂点Bから辺ACへの垂線をBD、頂点Cから辺ABへの垂線をCEとし、交点をFとする（Fは△ABCの垂心）',
      '△DBCと△ECBを比べる。BD⊥AC、CE⊥ABより、∠BDC＝∠CEB＝90°なので、どちらも直角三角形である',
      '斜辺はどちらもBC（共通）。さらにAB＝ACの二等辺三角形なので底角は等しく、∠DCB(＝∠ACB)＝∠EBC(＝∠ABC)',
      '直角三角形の斜辺と1鋭角がそれぞれ等しいから、△DBC≡△ECB',
      '∠A＝46°なので、二等辺三角形の底角は∠ABC＝∠ACB＝(180°－46°)÷2＝67°',
      '△DBCの内角の和180°より、∠DBC＝180°－90°－67°＝23°。同様に△ECBより∠ECB＝23°',
      '△FBCにおいて、∠FBC＝∠DBC＝23°、∠FCB＝∠ECB＝23°なので、三角形の内角の和より∠BFC＝180°－23°－23°＝134°',
    ],
  },
  koushiki_k1godo_nitouhen_oyo1: {
    kind: 'coordinate',
    xRange: [-1, 7],
    yRange: [-1, 6.5],
    points: [
      { x: 0, y: 4, label: 'A' },
      { x: 1.67, y: 4, label: 'F' },
      { x: 6, y: 4, label: 'B' },
      { x: 6, y: 0, label: 'C' },
      { x: 0, y: 0, label: 'D' },
      { x: 2.31, y: 5.54, label: 'E' },
    ],
    segments: [
      [
        { x: 0, y: 4 },
        { x: 6, y: 4 },
      ],
      [
        { x: 6, y: 4 },
        { x: 6, y: 0 },
      ],
      [
        { x: 6, y: 0 },
        { x: 0, y: 0 },
      ],
      [
        { x: 0, y: 0 },
        { x: 0, y: 4 },
      ],
      [
        { x: 6, y: 4 },
        { x: 0, y: 0 },
      ],
      [
        { x: 0, y: 0 },
        { x: 2.31, y: 5.54 },
      ],
      [
        { x: 6, y: 4 },
        { x: 2.31, y: 5.54 },
      ],
    ],
    caption: '長方形ABCDを対角線BDを折り目として折り返すと、頂点Cは点Eに移る。辺ABと線分DEの交点をF',
    steps: [
      '長方形ABCDを、対角線BDを折り目として折り返す。頂点Cが移った点をEとする（折り返しなのでBC＝BE、DC＝DE、∠BCD＝∠BED＝90°）',
      '折り返し（対称移動）は角の大きさを変えないので、∠BDC＝∠BDE',
      '長方形の性質よりAB∥DCであり、対角線BDを横断線とみると、∠ABDと∠BDCは錯角の位置にあるので、∠ABD＝∠BDC',
      '②、③より、∠BDE＝∠ABD',
      '辺ABと線分DEの交点をFとする。Fは辺AB上にあるから∠FBD＝∠ABD。Fは線分DE上にあるから∠FDB＝∠BDE',
      '④、⑤より、∠FDB＝∠FBD',
      '△FBDにおいて∠FDB＝∠FBDなので、二等辺三角形の性質の逆（底角が等しい三角形は二等辺三角形である）より、FB＝FDが言え、△FBDは二等辺三角形であることが証明できる',
    ],
  },
  koushiki_k1godo_nitouhen_oyo2: {
    kind: 'polygon',
    points: [
      { x: 4, y: 8, label: 'A' },
      { x: 0, y: 0, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 6.48, y: 3.04, label: 'D' },
    ],
    diagonals: [[1, 3]],
    caption: '△ABC（AB＝AC、∠A＝36°）の辺AC上に、BD＝BCとなる点Dをとる',
    steps: [
      '△ABCはAB＝ACの二等辺三角形で∠BAC＝36°。底角は∠ABC＝∠ACB＝(180°－36°)÷2＝72°',
      '辺AC上に、BD＝BCとなるように点Dをとる。△BDCはBD＝BCの二等辺三角形になる',
      '△BDCの底角は∠BDC＝∠BCD。∠BCDは∠ACBそのものなので72°。よって∠BDC＝72°',
      '△BDCの内角の和180°より、∠DBC＝180°－72°－72°＝36°',
      'A、D、Cは一直線上にあるので、∠BDCは△ABDの外角にあたる。外角は隣り合わない2つの内角の和に等しいから、∠BDC＝∠BAD＋∠ABD',
      '∠BAD＝∠BAC＝36°（DはAC上の点なので∠BADは∠BACと同じ角）を代入すると、72°＝36°＋∠ABD',
      '∠ABD＝72°－36°＝36°',
    ],
  },
};
