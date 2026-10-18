// 高校受験・数学の3項目（3辺から高さと面積／共通外接線／共通内接線）の動く図解スライド（10枚以上版）。
// キーは項目の label（買い切りの識別キーと同じ）。FORMULA_DIAGRAMS の最後に展開して、古い8枚版を置きかえる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';

type P = [number, number];
const BL = 'rgba(2,132,199,0.25)';
const RD = 'rgba(225,29,72,0.25)';
const GR = 'rgba(22,163,74,0.25)';
const YE = 'rgba(234,179,8,0.35)';
const dot = (p: P, color: string = C.ink): DiagramElement => ci(p[0], p[1], 2.5, undefined, color, color);
/** 直角のしるし（点 p から、方向 u・v に s だけ） */
const rm = (p: P, u: P, v: P, color: string = C.red, s = 7): DiagramElement[] => [
  ln(p[0] + u[0] * s, p[1] + u[1] * s, p[0] + (u[0] + v[0]) * s, p[1] + (u[1] + v[1]) * s, color),
  ln(p[0] + v[0] * s, p[1] + v[1] * s, p[0] + (u[0] + v[0]) * s, p[1] + (u[1] + v[1]) * s, color),
];
const txt = (y: number, text: string, color: string = C.ink, size = 12, bold = true): DiagramElement => lb(160, y, text, size, color, 'middle', bold);

// ───────────── 3辺から高さと面積を求める（垂線を下ろす） ─────────────
const tA: P = [133.3, 20.7], tB: P = [60, 140], tC: P = [240, 140], tH: P = [133.3, 140];
const triBase = (): DiagramElement[] => [
  pg([tA, tB, tC], C.gray, FILL.warm),
  lb(133, 12, 'A', 12, C.ink, 'middle', true), lb(50, 150, 'B', 12, C.ink, 'middle', true), lb(250, 150, 'C', 12, C.ink, 'middle', true),
  lb(84, 76, '7cm', 11, C.blue, 'middle', true), lb(200, 76, '8cm', 11, C.blue, 'middle', true), lb(205, 152, '9cm', 11, C.blue, 'middle', true),
];
const triH = (): DiagramElement[] => [ln(tA[0], tA[1], tH[0], tH[1], C.red, true, 2), ...rm(tH, [-1, 0], [0, -1]), lb(133, 150, 'H', 12, C.ink, 'middle', true), dot(tH)];
const triSplit = (): DiagramElement[] => [pg([tA, tB, tH], C.gray, YE), pg([tA, tH, tC], C.gray, BL)];
const BY = 160;
const sanpen: DiagramFigure = show([
  {
    note: '3辺が AB＝7cm、BC＝9cm、CA＝8cm の三角形ABCがあります。面積を求めたいのですが、3辺しかわかっていません。',
    add: [...triBase(), ...band(BY, txt(180, '3辺だけがわかっている三角形', C.blue, 14), txt(206, '面積を求めたい', C.gray, 13))],
  },
  {
    note: '❓ なぜ3辺がわかっても面積が出ないの？ 三角形の面積は「底辺×高さ÷2」です。3辺のうち高さにあたる長さは、辺のどれでもないので、まだわかっていません。',
    add: band(BY, txt(176, '面積＝底辺×高さ÷2', C.blue, 14), txt(200, '底辺9cmはわかる', C.ink), txt(222, '高さがわからない', C.red)),
  },
  {
    note: '❓ では高さはどうやって出すの？ 頂点Aから底辺BCに垂線AHを下ろします。垂線の長さが高さです。',
    add: [...triH(), ...band(BY, txt(180, 'Aから底辺BCへ垂線AHを下ろす', C.red, 13), txt(206, 'AHの長さが高さ', C.gray, 12))],
  },
  {
    note: '❓ なぜ垂線を下ろすの？ 直角ができると、三平方の定理が使えるからです。三角形ABCは2つの直角三角形ABHとAHCに分かれました。',
    add: [...triSplit(), ...triH(), ...band(BY, txt(176, '直角三角形が2つできた', C.blue, 14), txt(200, '三平方の定理が使える', C.ink), txt(222, '（黄）ABH と（青）AHC', C.gray, 11))],
  },
  {
    note: '垂線の足Hがどこに来るかはまだわかりません。そこで BH＝x cm とおきます。すると残りの HC は 9−x cm になります。',
    add: [lb(97, 131, 'x', 12, C.red, 'middle', true), lb(187, 131, '9−x', 12, C.red, 'middle', true), ...band(BY, txt(176, 'BH＝x、HC＝9−x', C.red, 14), txt(200, '全体が9cmだから', C.gray, 12), txt(222, 'BHとHCを足すと9', C.gray, 12))],
  },
  {
    note: '❓ x を使って高さを表すと？ 左の黄色い直角三角形ABHで、斜辺は7cm。三平方の定理より AH²＝7²−x² です。',
    add: [lb(143, 80, 'h', 12, C.purple, 'middle', true), ...band(BY, txt(172, '左の三角形ABH（斜辺7）', C.blue, 13), txt(196, 'AH² ＋ x² ＝ 7²', C.ink), txt(220, 'AH² ＝ 49 − x²', C.red, 14))],
  },
  {
    note: '右の青い直角三角形AHCも同じです。斜辺は8cm、直角をはさむ辺は AH と 9−x。三平方の定理より AH²＝8²−(9−x)² です。',
    add: band(BY, txt(172, '右の三角形AHC（斜辺8）', C.blue, 13), txt(196, 'AH² ＋ (9−x)² ＝ 8²', C.ink), txt(220, 'AH² ＝ 64 − (9−x)²', C.red, 14)),
  },
  {
    note: '❓ なぜ2つの式を等号で結んでよいの？ AHは左右の三角形に共通の同じ1本の線だからです。同じ長さの2乗を2通りに表したので、2つの式は等しくなります。',
    add: [...triSplit(), ...triH(), ...band(BY, txt(172, 'AHは左右に共通の線', C.purple, 13), txt(198, '49−x² ＝ 64−(9−x)²', C.red, 15), txt(222, '同じ長さを2通りに表した', C.gray, 12))],
  },
  {
    note: '❓ x の2乗が出てきて解けるの？ 右辺を展開すると 64−(81−18x＋x²)＝−17＋18x−x² です。両辺の −x² が打ち消し合い、1次方程式の 49＝−17＋18x になります。',
    add: band(BY, txt(170, '64−(81−18x＋x²)＝−17＋18x−x²', C.ink, 12), txt(192, '両辺の−x²が消える', C.green, 13), txt(216, '49 ＝ −17 ＋ 18x', C.red, 14)),
  },
  {
    note: '❓ なぜ x² が消えるの？ 左の式にも右の式にも、x の2乗が「引かれる形」で同じように入っているからです。消えなければ式の立て方がまちがっています。18x＝66 より x＝11/3 です。',
    add: band(BY, txt(172, '18x ＝ 66', C.ink, 14), txt(196, 'x ＝ 11/3（約3.7cm）', C.red, 14), txt(220, '0 ＜ x ＜ 9 なので足Hは辺の内側', C.gray, 11)),
  },
  {
    note: '❓ 高さは？ x を戻して AH²＝49−(11/3)²＝49−121/9＝320/9 です。AH＝√320÷3＝8√5/3 cm（約5.96cm）です。',
    add: [...band(BY, txt(170, 'AH² ＝ 49 − 121/9 ＝ 320/9', C.ink, 13), txt(194, 'AH ＝ 8√5/3 cm', C.red, 15), txt(218, '（320＝64×5 なので √320＝8√5）', C.gray, 11))],
  },
  {
    note: '面積＝底辺×高さ÷2＝9×(8√5/3)÷2＝12√5 cm²（約26.8cm²）です。',
    add: band(BY, txt(172, '面積 ＝ 9 × 8√5/3 ÷ 2', C.ink, 13), bx(70, 186, 180, 34, '12√5 cm²', C.green, FILL.green, 17)),
  },
  {
    note: '❓ 答えは正しい？ 検算します。右の式を使うと、9−11/3＝16/3 なので AH²＝64−(16/3)²＝64−256/9＝320/9。左で出した値と同じです。さらに左の式にもどすと (11/3)²＋320/9＝121/9＋320/9＝49 で、7² に一致します。',
    add: band(BY, txt(172, '右から: 64 − 256/9 ＝ 320/9', C.green, 13), txt(196, '左と同じ値になった', C.green, 13), txt(220, '121/9 ＋ 320/9 ＝ 49 ＝ 7²', C.gray, 12)),
  },
  {
    note: 'よくあるまちがいは3つ。①右の三角形の辺を 9−x ではなく x と書いてしまう。②(9−x)² を 81−x² と展開してしまう（正しくは 81−18x＋x²）。③x が負になったとき、まちがいと思い込む（鈍角三角形では足が外に出るだけで、式はそのまま使える）。',
    add: band(BY, txt(170, '①右側は x でなく 9−x', C.red, 12), txt(192, '②(9−x)² ＝ 81−18x＋x²', C.red, 12), txt(214, '③x が負なら足は辺の外', C.red, 12)),
  },
], '3辺が7・9・8cmの三角形。垂線で2つの直角三角形に分け、高さの2乗を2通りに表して等号で結ぶ');

// ───────────── 2円の共通外接線の長さ ─────────────
const eO: P = [80, 85], eP: P = [200, 85], eA: P = [95, 26.9], eB: P = [207.5, 55.95], eH: P = [87.5, 55.95];
const eBase = (): DiagramElement[] => [
  ci(eO[0], eO[1], 60, undefined, C.blue, 'rgba(224,242,254,0.6)'),
  ci(eP[0], eP[1], 30, undefined, C.green, 'rgba(220,252,231,0.6)'),
  dot(eO), dot(eP),
  lb(eO[0] - 10, eO[1] + 12, 'O', 12, C.ink, 'middle', true), lb(eP[0] - 2, eP[1] + 14, 'O′', 12, C.ink, 'middle', true),
];
const eTan = (): DiagramElement[] => [
  ln(eA[0] - 20, eA[1] - 5.2, eB[0] + 30, eB[1] + 7.8, C.red, false, 2),
  dot(eA, C.red), dot(eB, C.red),
  lb(eA[0] - 6, eA[1] - 8, 'A', 12, C.ink, 'middle', true), lb(eB[0] + 4, eB[1] - 9, 'B', 12, C.ink, 'middle', true),
];
const eRad = (): DiagramElement[] => [
  ln(eO[0], eO[1], eA[0], eA[1], C.blue, false, 2), ln(eP[0], eP[1], eB[0], eB[1], C.green, false, 2),
  lb(74, 44, '6', 11, C.blue, 'middle', true), lb(222, 76, '3', 11, C.green, 'middle', true),
];
const eRight = (): DiagramElement[] => [...rm(eA, [-0.2487, 0.9686].map((v) => -v) as P, [0.9686, 0.2487], C.red, 6), ...rm(eB, [0.2487, -0.9686].map((v) => -v) as P, [-0.9686, -0.2487], C.red, 6)];
const eMove = (): DiagramElement[] => [ln(eP[0], eP[1], eH[0], eH[1], C.purple, true, 2), ln(eH[0], eH[1], eA[0], eA[1], C.purple, true, 2), dot(eH, C.purple), lb(eH[0] + 10, eH[1] + 12, 'H', 12, C.purple, 'middle', true)];
const eTri = (): DiagramElement[] => [pg([eO, eH, eP], C.purple, YE)];
const gaisetsu: DiagramFigure = show([
  {
    note: '半径6cmの円Oと半径3cmの円O′があり、中心の間は12cmはなれています。',
    add: [...eBase(), ...band(BY - 6, txt(176, '円O（半径6） 円O′（半径3）', C.blue, 13), txt(200, '中心間の距離 OO′＝12cm', C.ink, 13))],
  },
  {
    note: '2つの円の外側を通る共通外接線を引きます。円Oとは点Aで、円O′とは点Bで接しています。この線分ABの長さを求めたいのです。',
    add: [...eTan(), ...band(BY - 6, txt(176, '外側を通る接線ABを引く', C.red, 13), txt(200, 'ABの長さを求めたい', C.gray, 13))],
  },
  {
    note: '❓ ABはどうやって測るの？ 接線ABは2つの円の外に浮いていて、長さを直接つかむ手がかりがありません。そこで、わかっている半径を使います。',
    add: band(BY - 6, txt(174, 'ABは円の外に浮いている', C.red, 13), txt(198, '手がかり＝半径6cmと3cm', C.blue, 13), txt(220, 'まず半径を引いてみる', C.gray, 12)),
  },
  {
    note: '接点Aと中心O、接点Bと中心O′をそれぞれ結んで、半径OA（6cm）とO′B（3cm）を引きます。',
    add: [...eRad(), ...band(BY - 6, txt(176, '半径 OA ＝ 6cm', C.blue, 13), txt(200, '半径 O′B ＝ 3cm', C.green, 13))],
  },
  {
    note: '❓ 半径と接線にはどんな関係があるの？ 円の接線は、接点を通る半径と必ず垂直に交わります。だから OA⊥AB、O′B⊥AB です。',
    add: [...eRight(), ...band(BY - 6, txt(174, '接線は半径と垂直', C.red, 14), txt(198, 'OA ⊥ AB、O′B ⊥ AB', C.ink, 13), txt(220, '（円の接線の性質）', C.gray, 12))],
  },
  {
    note: '❓ OAとO′Bの向きは？ 同じ直線ABに垂直な2本の線は、たがいに平行です。だから OA // O′B で、2つの半径は同じ向きにのびています。',
    add: band(BY - 6, txt(174, 'ABに垂直な線どうしは平行', C.purple, 13), txt(198, 'OA // O′B', C.ink, 14), txt(220, '2つの半径は同じ向き', C.gray, 12)),
  },
  {
    note: '❓ では、どうやってABの長さを中心のそばへ持ってくるの？ ABを平行なまま下へずらして、Bを O′ に重ねます。Aが動いた先が H で、Hは半径OAの上に乗ります。O′H がずらした線です。',
    add: [...eMove(), ...band(BY - 6, txt(174, 'ABを平行にずらして', C.purple, 13), txt(198, 'BをO′に重ねる', C.purple, 13), txt(220, '動いた先がH', C.gray, 12))],
  },
  {
    note: '❓ なぜ四角形ABO′Hは長方形なの？ ∠A＝90°、∠B＝90°、∠H＝90°（O′HはABと平行なので、OAに垂直）と3つの角が直角で、四角形の角の和は360°だから、残りの角も90°です。',
    add: band(BY - 6, txt(172, '3つの角が直角（A・B・H）', C.ink, 13), txt(196, '角の和360°−270°＝90°', C.ink, 13), txt(220, '4つとも直角→長方形', C.green, 14)),
  },
  {
    note: '長方形の向かい合う辺は等しいので、O′H＝AB、HA＝O′B＝3cm です。ABと同じ長さの線が、直角三角形OHO′の1辺に移りました。',
    add: band(BY - 6, txt(174, '向かい合う辺は等しい', C.ink, 13), txt(198, 'O′H ＝ AB', C.red, 14), txt(220, 'HA ＝ O′B ＝ 3cm', C.green, 13)),
  },
  {
    note: '❓ OHの長さは？ OH＝OA−HA＝6−3＝3cm です。2つの半径が同じ向きなので、半径は「引き算」になります。これが外接線の急所です。',
    add: [...eTri(), ...band(BY - 6, txt(172, '半径が同じ向き→引き算', C.red, 13), txt(196, 'OH ＝ 6 − 3 ＝ 3cm', C.red, 14), txt(220, '（半径の差）', C.gray, 12))],
  },
  {
    note: '❓ なぜ三平方の定理が使えるの？ OHは半径OAの一部で、O′HはOAに垂直だから、∠OHO′＝90°の直角三角形です。斜辺OO′＝12cm、1辺OH＝3cm なので O′H²＝12²−3²＝144−9＝135。',
    add: [...rm(eH, [0.2487, -0.9686] as P, [0.9686, 0.2487] as P, C.red, 6), ...band(BY - 6, txt(170, '∠OHO′＝90°の直角三角形', C.ink, 13), txt(194, 'O′H² ＝ 12² − 3² ＝ 135', C.red, 14), txt(218, '斜辺は中心間の距離12cm', C.gray, 12))],
  },
  {
    note: 'O′H＝√135＝3√15cm。O′H＝AB なので、共通外接線の長さは AB＝3√15cm（約11.6cm）です。',
    add: band(BY - 6, txt(174, 'O′H ＝ √135 ＝ 3√15', C.ink, 14), bx(60, 190, 200, 34, 'AB ＝ 3√15 cm', C.green, FILL.green, 16)),
  },
  {
    note: '❓ 答えは正しい？ 検算します。3²＋(3√15)²＝9＋135＝144＝12² となり、三平方の定理が成り立ちます。また、外接線は中心間12cmより少し短い約11.6cmで、ありそうな大きさです。',
    add: band(BY - 6, txt(172, '3² ＋ (3√15)² ＝ 9＋135', C.green, 13), txt(196, '＝ 144 ＝ 12²  → OK', C.green, 14), txt(220, '約11.6cmは12cmより少し短い', C.gray, 12)),
  },
  {
    note: 'よくあるまちがいは3つ。①半径を足して 6＋3 を使う（それは内接線）。②斜辺を半径にしてしまう（斜辺は中心間の距離12cm）。③√135 のままで止めて、3√15 まで整理しない。公式は √(d²−(r₁−r₂)²) です。',
    add: band(BY - 6, txt(170, '①外接線は引き算（和は内接線）', C.red, 12), txt(192, '②斜辺は半径でなく中心間', C.red, 12), txt(214, '③√135 ＝ 3√15 まで整理', C.red, 12)),
  },
], '半径6cmと3cm、中心間12cm。ABを平行にずらすと、OH＝6−3の直角三角形ができる');

// ───────────── 2円の共通内接線の長さ ─────────────
const iO: P = [70, 85], iP: P = [190, 85], iC: P = [120, 51.83], iD: P = [156.67, 107.1], iH: P = [153.33, 29.7];
const iBase = (): DiagramElement[] => [
  ci(iO[0], iO[1], 60, undefined, C.blue, 'rgba(224,242,254,0.6)'),
  ci(iP[0], iP[1], 40, undefined, C.green, 'rgba(220,252,231,0.6)'),
  dot(iO), dot(iP),
  lb(iO[0] - 10, iO[1] + 12, 'O', 12, C.ink, 'middle', true), lb(iP[0] + 10, iP[1] + 12, 'O′', 12, C.ink, 'middle', true),
];
const iTan = (): DiagramElement[] => [
  ln(iC[0] - 17.7, iC[1] - 26.7, iD[0] + 17.7, iD[1] + 26.7, C.red, false, 2),
  dot(iC, C.red), dot(iD, C.red),
  lb(iC[0] - 9, iC[1] - 4, 'C', 12, C.ink, 'middle', true), lb(iD[0] + 10, iD[1] + 6, 'D', 12, C.ink, 'middle', true),
];
const iRad = (): DiagramElement[] => [
  ln(iO[0], iO[1], iC[0], iC[1], C.blue, false, 2), ln(iP[0], iP[1], iD[0], iD[1], C.green, false, 2),
  lb(86, 58, '3', 11, C.blue, 'middle', true), lb(180, 104, '2', 11, C.green, 'middle', true),
];
const iMove = (): DiagramElement[] => [ln(iP[0], iP[1], iH[0], iH[1], C.purple, true, 2), ln(iH[0], iH[1], iC[0], iC[1], C.purple, true, 2), ln(iC[0], iC[1], iH[0], iH[1], C.purple, true, 2), dot(iH, C.purple), lb(iH[0] + 2, iH[1] - 9, 'H', 12, C.purple, 'middle', true)];
const naisetsu: DiagramFigure = show([
  {
    note: '半径3cmの円Oと半径2cmの円O′があり、中心の間は6cmはなれています。2つの円は離れていて、重なっていません。',
    add: [...iBase(), ...band(BY - 6, txt(176, '円O（半径3） 円O′（半径2）', C.blue, 13), txt(200, '中心間の距離 OO′＝6cm', C.ink, 13))],
  },
  {
    note: '2つの円の間を、クロスして横切る共通内接線を引きます。円Oとは点Cで、円O′とは点Dで接しています。この線分CDの長さを求めます。',
    add: [...iTan(), ...band(BY - 6, txt(176, '間を横切る接線CDを引く', C.red, 13), txt(200, 'CDの長さを求めたい', C.gray, 13))],
  },
  {
    note: '❓ なぜ内接線が引けるの？ 2つの円が離れているからです。半径の和は3＋2＝5cmで、中心間6cmのほうが長いので、円どうしは重なりません。重なると、間を横切る直線は円の内部を通ってしまいます。',
    add: band(BY - 6, txt(172, '半径の和 3＋2＝5cm', C.blue, 13), txt(196, '中心間6cm ＞ 5cm', C.ink, 14), txt(220, '離れているから引ける', C.green, 13)),
  },
  {
    note: '外接線のときと同じように、半径OC（3cm）とO′D（2cm）を引きます。',
    add: [...iRad(), ...band(BY - 6, txt(176, '半径 OC ＝ 3cm', C.blue, 13), txt(200, '半径 O′D ＝ 2cm', C.green, 13))],
  },
  {
    note: '❓ 半径と接線の関係は？ 円の接線は接点を通る半径と垂直です。だから OC⊥CD、O′D⊥CD。ここまでは外接線と同じです。',
    add: [...rm(iC, [-0.8333, 0.5528] as P, [0.5528, 0.8333] as P, C.red, 6), ...rm(iD, [0.8333, -0.5528] as P, [-0.5528, -0.8333] as P, C.red, 6), ...band(BY - 6, txt(174, 'OC ⊥ CD、O′D ⊥ CD', C.red, 14), txt(198, '接線は半径と垂直', C.gray, 12))],
  },
  {
    note: '❓ 外接線とちがうところは？ 接線が2円の間を横切っているので、OCは接線の一方の側へ、O′Dは反対の側へのびています。2つの半径は、接線をはさんで反対向きです。',
    add: band(BY - 6, txt(172, '接線をはさんで反対側', C.purple, 13), txt(196, '半径は反対向き', C.red, 14), txt(220, '（外接線は同じ向きだった）', C.gray, 12)),
  },
  {
    note: '❓ ここでもCDを平行にずらすの？ そうです。CDを平行なまま動かして、Dを O′ に重ねます。Cが動いた先が H です。O′H がずらした線で、O′H＝CD です。',
    add: [...iMove(), ...band(BY - 6, txt(174, 'CDを平行にずらして', C.purple, 13), txt(198, 'DをO′に重ねる', C.purple, 13), txt(220, '動いた先がH', C.gray, 12))],
  },
  {
    note: '❓ Hはどこに来るの？ CHは O′D と同じ長さ・同じ向きで、O′DはCから見て反対向きなので、HはOCをCのさきへ2cm延ばした線の上に出ます。四角形CDO′Hは外接線のときと同じく長方形です。',
    add: [...iMove().slice(2), ...band(BY - 6, txt(172, 'CH ＝ O′D ＝ 2cm', C.green, 13), txt(196, 'HはOCの延長上', C.purple, 14), txt(220, 'CDO′Hは長方形', C.gray, 12))],
  },
  {
    note: '❓ OHの長さは？ OH＝OC＋CH＝3＋2＝5cm です。2つの半径が反対向きなので、半径は「たし算」になります。外接線の引き算とのちがいは、ここだけです。',
    add: [pg([iO, iH, iP], C.purple, YE), ...band(BY - 6, txt(172, '半径が反対向き→たし算', C.red, 13), txt(196, 'OH ＝ 3 ＋ 2 ＝ 5cm', C.red, 14), txt(220, '（半径の和）', C.gray, 12))],
  },
  {
    note: '❓ なぜ三平方の定理が使えるの？ OHはOCの延長で、O′HはOCに垂直なので、∠OHO′＝90°の直角三角形です。斜辺OO′＝6cm、1辺OH＝5cm だから O′H²＝6²−5²＝36−25＝11。',
    add: [...rm(iH, [-0.8333, 0.5528] as P, [-0.5528, -0.8333] as P, C.red, 6), ...band(BY - 6, txt(170, '∠OHO′＝90°の直角三角形', C.ink, 13), txt(194, 'O′H² ＝ 6² − 5² ＝ 11', C.red, 14), txt(218, '斜辺は中心間の距離6cm', C.gray, 12))],
  },
  {
    note: 'O′H＝√11cm。O′H＝CD なので、共通内接線の長さは CD＝√11cm（約3.3cm）です。',
    add: band(BY - 6, txt(174, 'O′H ＝ √11', C.ink, 14), bx(60, 190, 200, 34, 'CD ＝ √11 cm', C.green, FILL.green, 16)),
  },
  {
    note: '❓ 答えは正しい？ 検算します。5²＋(√11)²＝25＋11＝36＝6² となり、三平方の定理が成り立ちます。また、中心間6cmより短い約3.3cmで、ありそうな大きさです。',
    add: band(BY - 6, txt(172, '5² ＋ (√11)² ＝ 25＋11', C.green, 13), txt(196, '＝ 36 ＝ 6²  → OK', C.green, 14), txt(220, '約3.3cmは、6cmより短い', C.gray, 12)),
  },
  {
    note: '❓ もし中心間が5cmだと？ 半径の和と同じなので、2円は1点で接し、内接線の長さは√(25−25)＝0です。5cmより短いと2円が重なり、式の中が負になって、内接線は引けません。だから d＞r₁＋r₂ が条件です。',
    add: band(BY - 6, txt(170, '中心間 ＝ 5cm → 長さ0（接する）', C.ink, 12), txt(192, '5cmより短い → 引けない', C.red, 13), txt(214, '条件は d ＞ r₁ ＋ r₂', C.blue, 13)),
  },
  {
    note: 'よくあるまちがいは3つ。①半径の差 3−2 を使う（それは外接線）。②2円が重なっているのに内接線を求めようとする。③斜辺を半径にしてしまう（斜辺は中心間の距離）。合言葉は「外はひく、内はたす」です。',
    add: band(BY - 6, txt(170, '①内接線は足し算（差は外接線）', C.red, 12), txt(192, '②重なる2円には引けない', C.red, 12), txt(214, '合言葉「外はひく、内はたす」', C.blue, 12)),
  },
], '半径3cmと2cm、中心間6cm。内接線はクロスするので、OH＝3＋2の直角三角形ができる');

export const DIAGRAMS_KOKO_SUGAKU_X: Record<string, DiagramFigure> = {
  '3辺から高さと面積を求める（垂線を下ろす）': sanpen,
  '2円の共通外接線の長さ': gaisetsu,
  '2円の共通内接線の長さ': naisetsu,
};
