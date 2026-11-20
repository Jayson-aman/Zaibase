import type { Figure } from './figures';
import { show, ln, lb, pg, sc, bx, C, FILL } from './diagram-kit';

export const lessonFigsKoushikiC5Kakudo: Record<string, Figure> = {
  lf_koushiki_c5kakudo_sankaku: show([
    { note: '三角形ABCを用意する。3つの内角は頂点A・B・Cにある', add: [pg([[170,45],[55,165],[270,165]], C.main, FILL.warm), lb(170,37,'A',16,C.ink,'middle',true), lb(41,181,'B',16,C.ink,'middle',true), lb(284,181,'C',16,C.ink,'middle',true)] },
    { note: '頂点Aを通り、辺BCに平行な直線を1本引く（補助線）。この直線上でAの左側の方向を点D、右側の方向を点Eとする', add: [ln(25,45,305,45,C.purple,true,2), lb(29,37,'D',14,C.purple,'start',true), lb(301,37,'E',14,C.purple,'end',true), lb(262,62,'補助線（BCと平行）',10,C.purple,'middle')] },
    { note: '直線DE（補助線）と辺BCは平行なので、辺ABをこの2直線を横切る1本の線と考えると、角DABと角ABC（角B）は「錯角」の関係になり、大きさが等しくなる：角DAB＝角B', add: [sc(170,45,30,180.0,226.2,C.blue,FILL.blue), sc(55,165,30,0.0,46.2,C.blue,FILL.blue), lb(110,72,'角DAB',11,C.blue,'middle',true), lb(95,150,'角B',11,C.blue,'middle',true), lb(160,200,'錯角だから 角DAB＝角B',12,C.blue,'middle',true)] },
    { note: '同じように、辺ACを横切る線と考えると、角EACと角ACB（角C）も「錯角」の関係で等しくなる：角EAC＝角C', add: [sc(170,45,30,309.8,360.0,C.green,FILL.green), sc(270,165,30,129.8,180.0,C.green,FILL.green), lb(228,72,'角EAC',11,C.green,'middle',true), lb(240,150,'角C',11,C.green,'middle',true), lb(160,218,'錯角だから 角EAC＝角C',12,C.green,'middle',true)] },
    { note: '点Aでは、D・A・Eが一直線上に並んでいる。一直線がつくる角はどこで区切っても合計180°になる', add: [ln(25,45,305,45,C.red,false,3), lb(160,26,'D・A・E は一直線 ＝ 180°',13,C.red,'middle',true)] },
    { note: 'その180°は、角DAB・角BAC（角A）・角EACの3つに区切られている：角DAB＋角BAC＋角EAC＝180°', add: [sc(170,45,24,226.2,309.8,C.red,FILL.red), lb(170,87,'角A',11,C.red,'middle',true), bx(8,92,100,30,'角DAB＋角A＋角EAC＝180°',C.red,FILL.red,8)] },
    { note: '手順3・4で求めた「角DAB＝角B」「角EAC＝角C」をこの式にあてはめると：角B＋角A＋角C＝180°', add: [bx(60,176,200,30,'角B＋角A＋角C＝180°',C.main,FILL.yellow,14)] },
    { note: 'よってどんな三角形でも、3つの内角の和はつねに180°になることが証明できる', add: [lb(160,232,'どんな三角形でも、内角の和は180°',13,C.ink,'middle',true)] },
  ], 'どの三角形でも 角A＋角B＋角C＝180°'),


  lf_koushiki_c5kakudo_takakukei: {
    kind: 'polygon',
    points: [
      { x: 5, y: 10, label: 'A' },
      { x: 10, y: 6, label: 'B' },
      { x: 8, y: 0, label: 'C' },
      { x: 2, y: 0, label: 'D' },
      { x: 0, y: 6, label: 'E' },
    ],
    diagonals: [
      [0, 2],
      [0, 3],
    ],
    caption: '五角形は対角線で3つの三角形に分けられる → 内角の和 ＝ 180°×3 ＝ 540°',
    steps: [
      '五角形ABCDEを用意する（頂点が5つ、内角も5つ）',
      '頂点Aから、隣り合わない頂点C、頂点Dへそれぞれ対角線を引く',
      'この2本の対角線によって、五角形は3つの三角形（三角形ABC、三角形ACD、三角形ADE）に分けられる',
      '三角形1つの内角の和は必ず180°なので、3つの三角形の内角をすべて合計すると180°×3＝540°',
      '3つの三角形の内角をすべて集めると、対角線でできた角もふくめてちょうど五角形の5つの内角（角A・角B・角C・角D・角E）にぴったり一致する',
      'よって五角形の内角の和は540°',
      '一般に、n角形は1つの頂点から(n－3)本の対角線を引くことで(n－2)個の三角形に分けられる。よって内角の和＝180°×(n－2)という公式が成り立つ',
      'たとえば六角形(n＝6)なら180×(6－2)＝720°、十角形(n＝10)なら180×(10－2)＝1440°になる',
      '一方、外角の和はどんな多角形でも常に360°で変わらない。多角形の外側にそって1周歩くと考えるとよい',
      '1つの頂点を通るたびに、進む向きが外角の分だけ曲がる。頂点の数だけ曲がりを繰り返してちょうど1周（360°）してもとの向きに戻るので、外角の和は頂点の数に関係なく必ず360°になる',
    ],
  },

  lf_koushiki_c5kakudo_heikousen: show([
    { note: '平行な2本の直線ℓ・mを、1本の直線（横切る直線）が交わっている場面を考える。直線ℓ上の交点をB、直線m上の交点をCとする', add: [ln(30,65,290,65,C.main,false,2), ln(30,175,290,175,C.main,false,2), lb(296,69,'ℓ',14,C.main,'start',true), lb(296,179,'m',14,C.main,'start',true), ln(236,21,90,199,C.ink,false,2), lb(208,57,'B',14,C.ink,'start',true), lb(92,193,'C',14,C.ink,'start',true), lb(40,52,'ℓ ∥ m（平行）',11,C.gray,'start')] },
    { note: '点Bでは、直線ℓと横切る直線が交わり、まわりに4つの角ができる。点Cでも同じように4つの角ができる', add: [sc(200,65,22,0.0,50.7,C.gray,FILL.gray), sc(200,65,22,50.7,180.0,C.gray,FILL.gray), sc(200,65,22,180.0,230.7,C.gray,FILL.gray), sc(200,65,22,230.7,360.0,C.gray,FILL.gray), sc(110,175,22,0.0,50.7,C.gray,FILL.gray), sc(110,175,22,50.7,180.0,C.gray,FILL.gray), sc(110,175,22,180.0,230.7,C.gray,FILL.gray), sc(110,175,22,230.7,360.0,C.gray,FILL.gray)] },
    { note: '点Bにできる4つの角のうち、点Cにできる4つの角と「同じ位置関係（たとえば両方とも右上）」にある角どうしを「同位角」とよぶ', add: [sc(200,65,22,0.0,50.7,C.blue,FILL.blue), sc(110,175,22,0.0,50.7,C.blue,FILL.blue), lb(262,50,'右上どうし',11,C.blue,'middle',true), lb(262,64,'＝ 同位角',11,C.blue,'middle',true)] },
    { note: '直線ℓとmが平行であれば、この同位角は必ず大きさが等しくなる（2つの交点でできる角の並び方が、そっくりそのまま平行移動した形になるため）', add: [bx(30,206,260,28,'平行なら 同位角は 等しい',C.blue,FILL.blue,13)] },
    { note: '横切る直線をはさんで反対側にあり、かつ2本の平行線の内側（ℓとmの間）にある角どうしを「錯角」とよぶ', add: [sc(200,65,22,180.0,230.7,C.green,FILL.green), sc(110,175,22,0.0,50.7,C.green,FILL.green), lb(150,92,'錯角',11,C.green,'middle',true), lb(160,150,'錯角',11,C.green,'middle',true)] },
    { note: '直線ℓとmが平行であれば、この錯角も必ず大きさが等しくなる。錯角はアルファベットの「Z」の形に角が並ぶのが見分け方のコツ', add: [ln(130,65,200,65,C.green,false,3), ln(200,65,110,175,C.green,false,3), ln(110,175,180,175,C.green,false,3), lb(40,118,'Zの形に 並ぶ',12,C.green,'start',true)] },
    { note: '逆に、2本の直線に1本の直線が交わってできる同位角どうし、または錯角どうしが等しいことが確認できれば、その2本の直線は平行であると判断できる', add: [bx(30,206,260,28,'逆：同位角か錯角が等しければ 平行',C.red,FILL.red,12)] },
    { note: '入試では、平行な直線が複数引かれた複雑な図の中から同位角・錯角のペアを見つけ出し、角度を次々にたどって求める問題が頻出する', add: [lb(160,236,'複雑な図でも 同位角・錯角を見つけて角度をたどる',11,C.ink,'middle',true)] },
  ], '同位角・錯角は、平行線のとき等しい'),

};
