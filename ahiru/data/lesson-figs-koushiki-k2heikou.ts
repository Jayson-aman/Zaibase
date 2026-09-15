import type { Figure } from './figures';

export const lessonFigsKoushikiK2Heikou: Record<string, Figure> = {
  lf_koushiki_k2heikou_heikou5jouken: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: -1, label: 'B' },
      { x: 8, y: 4, label: 'C' },
      { x: 2, y: 5, label: 'D' },
    ],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '四角形ABCDの対角線AC、BDが点Oで交わっている。AO＝CO、BO＝DO（対角線がそれぞれの中点で交わる）という条件だけから、平行四辺形になることを示す',
    steps: [
      '問 対角線ACとBDの交点をOとする。AO＝CO、BO＝DOだけで平行四辺形と言える？',
      '答 言える。ただし今の時点ではAB∥DCなどの平行はまだ何も分かっていない。',
      '問 平行を導きたい。まずはどの2つの三角形を比べればよいだろう？',
      '答 △AOBと△COD。条件のAO＝CO、BO＝DOがそのまま2組の辺になる。',
      '問 あと1組必要なのは角。∠AOBと∠CODはどんな関係だろう？',
      '答 2本の対角線が点Oで交わってできる対頂角なので、∠AOB＝∠COD。',
      '問 2辺とその間の角がそれぞれ等しくなった。ここから何が言える？',
      '答 △AOB≡△COD。対応する辺と角からAB＝CD、∠OAB＝∠OCDも言える。',
      '問 ∠OAB＝∠OCDは、どの直線を横断線と見たときの錯角だろう？',
      '答 対角線AC。錯角が等しいのでAB∥DC。同じく△AOD≡△COBからAD∥BC。',
      '問 2組の対辺がそれぞれ平行になった。これは何を意味するだろう？',
      'まとめ それが平行四辺形の定義。対角線がそれぞれの中点で交われば平行四辺形になる。',
    ],
  },
  lf_koushiki_k2heikou_tokubetsu4kakukei: {
    kind: 'polygon',
    points: [
      { x: 0, y: 0, label: 'A' },
      { x: 6, y: 0, label: 'B' },
      { x: 6, y: 3, label: 'C' },
      { x: 0, y: 3, label: 'D' },
    ],
    sideLabels: ['6cm', null, null, null],
    rightAngles: [0, 1, 2, 3],
    diagonals: [
      [0, 2],
      [1, 3],
    ],
    equalSides: [
      [0, 2],
      [1, 3],
    ],
    caption:
      '平行四辺形ABCDに∠A＝90°という条件を加えると、4つの角がすべて90°の長方形になる。対角線AC、BDの長さも等しくなる',
    steps: [
      '問 平行四辺形ABCDにAD∥BCがある。ここに∠A＝90°を加えると他の角はどうなる？',
      '答 残りの3つも90°に決まってしまう。どうしてそうなるか順に追っていこう。',
      '問 辺ABをAD∥BCの横断線と見ると、∠Aと∠Bはどんな位置にあるだろう？',
      '答 平行線の同じ側にある内角の位置。だから∠A＋∠B＝180°が成り立つ。',
      '問 ここに∠A＝90°を代入してみよう。∠Bは何度と決まるだろう？',
      '答 90°＋∠B＝180°だから∠B＝90°。これで角が2つ決まった。',
      '問 残る∠Cと∠Dは、平行四辺形のどの性質を使えば求まるだろう？',
      '答 対角はそれぞれ等しいので、∠C＝∠A＝90°、∠D＝∠B＝90°。',
      '問 4つの角が90°の長方形になった。対角線ACとDBの長さはどうなる？',
      '答 AB＝DC、BC＝CB共通、∠ABC＝∠DCB＝90°で△ABC≡△DCB。だからAC＝DB。',
      '問 では∠A＝90°の代わりにAB＝BCを加えたら、どんな四角形になる？',
      'まとめ 4辺が等しいひし形。角を加えれば長方形、辺の長さを加えればひし形になる。',
    ],
  },
};
