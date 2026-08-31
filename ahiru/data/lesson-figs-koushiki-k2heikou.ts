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
      '対角線ACとBDが点Oで交わることを確認し、条件AO＝CO、BO＝DOを確認する（この時点ではAB∥DCなどの平行はまだ分かっていない）',
      '△AOBと△CODに着目する',
      'AO＝CO（条件）、BO＝DO（条件）が成り立っている',
      '∠AOBと∠CODは、対角線AC、BDが点Oで交わってできる対頂角なので、∠AOB＝∠COD',
      '2辺とその間の角がそれぞれ等しい（SAS）ので、△AOB≡△COD',
      '合同な図形の対応する辺・角は等しいので、AB＝CD、∠OAB＝∠OCD',
      '∠OABと∠OCDは、対角線ACを横断線と見たときの錯角の位置にあるので、この錯角が等しいことからAB∥DCがいえる',
      '同じように△AOD≡△COB（AO＝CO、DO＝BO、対頂角∠AOD＝∠COB）を示すと、AD＝CB、AD∥BCもいえる',
      'AB∥DC、AD∥BCという「2組の対辺がそれぞれ平行」が示せたので、四角形ABCDは平行四辺形である。対角線が中点で交わるという条件だけから、平行四辺形の定義そのもの（平行）を導けたことになる',
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
      '平行四辺形ABCDを用意し、対辺AD∥BC、対角∠A＝∠C・∠B＝∠Dが成り立っていることを確認する',
      'ここに新しい条件「∠A＝90°」を加える',
      '辺ABを、AD∥BCに対する横断線と見ると、∠A（∠DAB）と∠B（∠ABC）は同側内角の位置にあるので、∠A＋∠B＝180°',
      '∠A＝90°を代入すると、90°＋∠B＝180°より∠B＝90°',
      '平行四辺形の対角はそれぞれ等しいので、∠C＝∠A＝90°、∠D＝∠B＝90°',
      '4つの角がすべて90°になったので、四角形ABCDは長方形である（1つの角が90°だと分かった時点で、残り3つの角も連鎖的に90°に決まる）',
      '対角線について、△ABC≡△DCB（AB＝DC、BC＝CB共通、∠ABC＝∠DCB＝90°でSAS）が成り立つのでAC＝DBとなり、長方形の対角線は長さが等しいこともわかる',
      'もし∠A＝90°の代わりに「AB＝BC（隣り合う2辺が等しい）」という条件を加えた場合は、対辺がもともと等しいことと合わせて4辺すべてが等しくなり、長方形ではなくひし形になる。加える条件が「角」か「辺の長さ・対角線の交わり方」かで、できあがる特別な四角形が変わる',
    ],
  },
};
