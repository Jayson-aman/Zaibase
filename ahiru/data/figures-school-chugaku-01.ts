// 入試傾向問題（中学受験・第01批）の「動く図解スライド」。
// キーは問題id。❓なぜ？→答え→❓では、なぜ？ の連鎖で、根っこまでたどる。
// 画面の上半分に図、下の帯（band）にそのスライドの式やひとこと、という配置にそろえてある。
import type { Figure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh } from './diagram-kit';

type P = [number, number];
const T = (t: string, y = 175, size = 12, color: string = C.ink) => lb(160, y, t, size, color, 'middle', true);
const hexP = (cx: number, cy: number, R: number): P[] =>
  [0, 60, 120, 180, 240, 300].map((a) => [cx + R * Math.cos((a * Math.PI) / 180), cy - R * Math.sin((a * Math.PI) / 180)] as P);
const wire = (pts: P[], color: string = C.gray): DiagramElement[] =>
  pts.slice(1).map((p, i) => ln(pts[i][0], pts[i][1], p[0], p[1], color, false, 2));
const triRow = (r: number, cx: number, top: number, s: number, color: string, fill: string): DiagramElement[] => {
  const h = s * 0.866;
  const y0 = top + (r - 1) * h;
  const out: DiagramElement[] = [];
  for (let i = 0; i < r; i++) {
    const x = cx + (i - (r - 1) / 2) * s;
    out.push(pg([[x, y0], [x - s / 2, y0 + h], [x + s / 2, y0 + h]], color, fill));
  }
  for (let j = 0; j < r - 1; j++) {
    const x = cx + (j - (r - 2) / 2) * s;
    out.push(pg([[x - s / 2, y0], [x + s / 2, y0], [x, y0 + h]], color, fill));
  }
  return out;
};
// 直列回路（長方形の回路。上の辺に抵抗を並べ、左の辺に電池を置く）
const seriesCircuit = (x0: number, y0: number, w: number, h: number, bat: string, res: string[], rw = 50): DiagramElement[] => {
  const els: DiagramElement[] = [...wire([[x0, y0], [x0 + w, y0], [x0 + w, y0 + h], [x0, y0 + h], [x0, y0]])];
  els.push(bx(x0 - 22, y0 + h / 2 - 15, 44, 30, bat, C.green, FILL.green, 10));
  res.forEach((t, i) => {
    const cx = x0 + (w * (i + 1)) / (res.length + 1);
    els.push(bx(cx - rw / 2, y0 - 13, rw, 26, t, C.main, FILL.warm, 11));
  });
  return els;
};
// 並列回路（左に電池、右へ枝が並ぶ）
const parallelCircuit = (x0: number, y0: number, w: number, h: number, bat: string, br: string[], rw = 46): DiagramElement[] => {
  const xs = br.map((_, i) => x0 + (w * (i + 1)) / (br.length + 1));
  const last = xs[xs.length - 1];
  const els: DiagramElement[] = [...wire([[x0, y0], [last, y0]]), ...wire([[x0, y0 + h], [last, y0 + h]]), ...wire([[x0, y0], [x0, y0 + h]])];
  xs.forEach((x) => els.push(...wire([[x, y0], [x, y0 + h]])));
  els.push(bx(x0 - 22, y0 + h / 2 - 15, 44, 30, bat, C.green, FILL.green, 10));
  br.forEach((t, i) => els.push(bx(xs[i] - rw / 2, y0 + h / 2 - 13, rw, 26, t, C.main, FILL.warm, 11)));
  return els;
};


// ── seifu_nankai_sansu_03：円に内接する正六角形は円の何％か ──
const H1 = { cx: 100, cy: 76, R: 56 };
const H1p = hexP(H1.cx, H1.cy, H1.R);
const hexSpokes = (color: string = C.gray) => H1p.map((p) => ln(H1.cx, H1.cy, p[0], p[1], color, false, 1.4));
const tri1 = (i: number, color: string, fill: string) => pg([[H1.cx, H1.cy], H1p[i], H1p[(i + 1) % 6]], color, fill);
const hexPercent: Figure = show([
  {
    note: '半径6cmの円に、正六角形がぴったり入っています。正六角形の面積は、円の面積の何%でしょう。❓まず、「何%か」とは、何と何をくらべることでしょう。',
    add: [ci(H1.cx, H1.cy, H1.R, undefined, C.blue, FILL.blue), pg(H1p, C.main, FILL.warm), ln(H1.cx, H1.cy, H1p[0][0], H1p[0][1], C.red, false, 2), lb(130, H1.cy - 7, '6cm', 11, C.red, 'middle', true), lb(240, 52, '正六角形の面積は', 12, C.ink, 'middle', true), lb(240, 72, '円の面積の', 12, C.ink, 'middle', true), lb(240, 92, '何%？', 15, C.red, 'middle', true), ...band(150, T('「正六角形」を「円」とくらべる', 175, 13, C.blue))],
  },
  {
    note: '❓正六角形の面積は、どうやって出す？→中心から6つの頂点へ線を引くと、同じ三角形が6個できます。数えやすい形にわけるのが、面積を出すコツです。',
    add: [...hexSpokes(), ...band(150, T('中心から頂点へ線を引く → 三角形が6個', 175, 13, C.blue))],
  },
  {
    note: '❓この三角形は、どんな形？→中心のまわりは360°を6つに分けるので、1つの角は360÷6＝60°。2辺は円の半径で同じ長さだから、残りの角も（180−60）÷2＝60°になり、3つとも60°の正三角形です。',
    add: [tri1(0, C.red, FILL.red), lb(118, 88, '60°', 10, C.red, 'middle', true), lb(146, 70, '60°', 9, C.red, 'middle', true), lb(118, 52, '60°', 9, C.red, 'middle', true), ...band(150, T('どの角も60° → 1辺6cmの正三角形', 172, 13, C.red), lb(160, 200, '（まわりの辺も、半径と同じ6cm）', 11, C.gray))],
  },
  {
    note: '問題では、正三角形1個の面積は15.59cm²と分かっています。❓6個は同じ大きさなので、どうする？→15.59を6回たします。つまり 15.59×6 です。',
    add: [...[1, 2, 3, 4, 5].map((i) => tri1(i, C.main, FILL.green)), ...band(150, T('1個 15.59cm² が 6個ぶん', 170, 13, C.ink), bx(40, 184, 240, 34, '15.59 × 6 ＝ 93.54cm²', C.green, FILL.green, 16))],
  },
  {
    note: '❓では、円の面積は？→円の面積は「半径×半径×3.14」です。6×6＝36、36×3.14＝113.04cm²です。',
    add: band(150, T('円の面積 ＝ 半径×半径×3.14', 168, 13, C.blue), bx(40, 184, 240, 34, '6×6×3.14 ＝ 113.04cm²', C.blue, FILL.blue, 16)),
  },
  {
    note: '❓「何%か」は、どちらをどちらでわる？→「もとにする量」が円（100%にあたるほう）なので、くらべる量の正六角形を、円でわります。93.54÷113.04＝0.8275…、つまり約82.8%です。',
    add: band(150, T('くらべる量 ÷ もとにする量', 168, 13, C.purple), bx(30, 184, 260, 34, '93.54 ÷ 113.04 ＝ 0.8275… → 約82.8%', C.purple, FILL.purple, 15)),
  },
  {
    note: '❓円を正六角形でわったら、どうなる？→113.04÷93.54＝1.2…で約121%と、100%をこえてしまいます。正六角形は円の中に入っているので小さいはずで、わり算の順番がまちがいだと気づけます。',
    add: fresh(bx(30, 26, 240, 30, '円　113.04（100%）', C.blue, FILL.blue, 13), bx(30, 70, 198, 30, '正六角形　93.54', C.main, FILL.warm, 13), lb(160, 122, '円でわる → 100%より小さい（○）', 12, C.green, 'middle', true), lb(160, 144, '正六角形でわる → 100%をこえる（×）', 12, C.red, 'middle', true), ...band(160, T('わる数は「もとにする量」＝円', 190, 13, C.ink))),
  },
  {
    note: '答えは、約82.8%です。❓検算は？→円の面積113.04の0.828倍を計算すると 113.04×0.828＝93.6で、正六角形の93.54とほぼ同じになります。角の数をふやすほど、円に近づいていきます。',
    add: fresh(bx(30, 30, 260, 36, '答え　約82.8%', C.green, FILL.green, 18), bx(30, 86, 260, 34, '113.04 × 0.828 ＝ 93.6（≒93.54）', C.blue, FILL.blue, 14), lb(160, 150, '円にぴったり入る正六角形は、円の8割ほど', 12, C.ink, 'middle', true)),
  },
], '円に内接する正六角形の面積');

// ── seifu_nankai_sansu_04：かかった時間から速さの比を出す ──
const tx = (m: number) => 30 + m * (260 / 60); // 8時からの分 → x座標
const speedRatio: Figure = show([
  {
    note: 'Aさんは8時に出発して9時に着き、Bさんは8時30分に出発して、Aさんより10分早くB駅に着きました。2人の速さの比を求めます。❓まず、Aさんの走った時間を図にします。',
    add: [ln(30, 122, 290, 122, C.gray, false, 1.4), lb(30, 136, '8時', 10, C.gray, 'middle'), lb(160, 136, '8時30分', 10, C.gray, 'middle'), lb(290, 136, '9時', 10, C.gray, 'middle'), lb(14, 54, 'A', 14, C.blue, 'middle', true), bx(tx(0), 40, tx(60) - tx(0), 28, 'Aさん（8時→9時）', C.blue, FILL.blue, 12), ...band(150, T('A：8時に出発、9時に着いた', 178, 13, C.blue))],
  },
  {
    note: '❓Bさんの到着は何時？→「Aさんより10分早い」ので、9時の10分前の8時50分です。Bさんは8時30分に出発しています。',
    add: [lb(14, 96, 'B', 14, C.red, 'middle', true), bx(tx(30), 82, tx(50) - tx(30), 28, 'Bさん', C.red, FILL.red, 12), lb(tx(50), 136, '8時50分', 10, C.red, 'middle', true), ...band(150, T('B：8時30分に出発、8時50分に着いた', 178, 13, C.red))],
  },
  {
    note: '❓それぞれ何分かかった？→Aは8時から9時で60分、Bは8時30分から8時50分で20分です。同じ道のりを、Bのほうが短い時間で走っています。',
    add: band(150, bx(30, 160, 120, 34, 'A　60分', C.blue, FILL.blue, 16), bx(170, 160, 120, 34, 'B　20分', C.red, FILL.red, 16), lb(160, 216, '同じ道のりで、Bは時間が3分の1', 12, C.ink, 'middle', true)),
  },
  {
    note: '❓時間の比60：20＝3：1を、そのまま速さの比にしていい？→いけません。同じ道のりなら、時間が短いほど速いので、速さの比は時間の比の「逆」になります。',
    add: band(150, T('時間の比　A：B ＝ 3：1', 168, 13, C.ink), bx(30, 180, 260, 34, 'でも、速さの比は 3：1 ではない！', C.red, FILL.red, 14)),
  },
  {
    note: '❓では、どう確かめる？→道のりを60kmと決めてみます。Aは60分で60km、つまり1分に1km。Bは20分で60km、つまり1分に3kmです。',
    add: band(150, T('道のりを60kmと決める（速さ＝道のり÷時間）', 168, 12, C.ink), bx(20, 180, 135, 34, 'A　60÷60＝1km/分', C.blue, FILL.blue, 12), bx(165, 180, 135, 34, 'B　60÷20＝3km/分', C.red, FILL.red, 12)),
  },
  {
    note: '❓道のりを60kmと決めてよかったの？→同じ道のりなら、120kmにしてもAは2、Bは6で、比は同じ1：3になります。だから、道のりは何kmに決めても答えは変わりません。',
    add: band(150, T('120kmなら　A：2km/分　B：6km/分', 168, 12, C.ink), bx(40, 182, 240, 34, '2：6 ＝ 1：3　（どの道のりでも同じ）', C.green, FILL.green, 14)),
  },
  {
    note: '答えは A：B＝1：3 です。❓検算は？→Bは、Aの3分の1の時間（20分）で同じ道のりを走っているので、3倍の速さです。時間の比3：1をひっくり返すと、速さの比1：3になります。',
    add: fresh(bx(30, 22, 260, 36, '答え　A：B ＝ 1：3', C.green, FILL.green, 18), bx(30, 76, 260, 30, '時間　A 60分：B 20分 ＝ 3：1', C.gray, FILL.gray, 13), ar(160, 108, 160, 128, C.red), bx(30, 130, 260, 30, '速さ　A：B ＝ 1：3（ひっくり返す）', C.blue, FILL.blue, 13), lb(160, 186, '同じ道のり：時間が短い方が速い', 12, C.ink, 'middle', true)),
  },
], '同じ道のりを進むときの速さの比');

// ── seifu_nankai_rika_04：2つの力の合力 ──
const U = 14; // 1Nあたりのたて・よこの長さ
const blk = (x: number, y: number) => bx(x - 16, y - 14, 32, 28, '物体', C.gray, FILL.gray, 10);
const forces: Figure = show([
  {
    note: '(1) 同じ方向に3Nと5Nの力がはたらく場合です。❓そもそも「合力」とは、何のことでしょう。→2つの力と同じはたらきをする、1つの力のことです。',
    add: [blk(80, 70), ar(96, 64, 96 + 3 * U, 64, C.blue), lb(96 + 3 * U / 2, 50, '3N', 12, C.blue, 'middle', true), ar(96, 78, 96 + 5 * U, 78, C.red), lb(96 + 5 * U / 2, 94, '5N', 12, C.red, 'middle', true), ...band(150, T('合力 ＝ 2つの力を1つにまとめた力', 178, 13, C.ink))],
  },
  {
    note: '❓同じ向きだと、なぜ足し算？→同じ向きに引く人が2人いれば、力をあわせたぶんだけ強く引けるからです。3＋5＝8Nで、向きは同じです。',
    add: [ar(96, 126, 96 + 8 * U, 126, C.green), lb(96 + 4 * U, 141, '合力 8N', 12, C.green, 'middle', true), ...band(150, bx(60, 168, 200, 34, '3 ＋ 5 ＝ 8N', C.green, FILL.green, 16))],
  },
  {
    note: '(2) 反対方向の場合です。❓反対向きだと、どうなる？→右に5N、左に3Nで引きあいになり、強いほう（5N）が勝ちます。',
    add: fresh(blk(160, 70), ar(176, 70, 176 + 5 * U, 70, C.red), lb(176 + 5 * U / 2, 56, '5N', 12, C.red, 'middle', true), ar(144, 70, 144 - 3 * U, 70, C.blue), lb(144 - 3 * U / 2, 56, '3N', 12, C.blue, 'middle', true), ...band(150, T('右に5N、左に3N（引きあい）', 178, 13, C.ink))),
  },
  {
    note: '❓なぜ引き算？→左の3Nは、右の5Nのうち3Nぶんを打ち消します。打ち消されずに残る5−3＝2Nが、大きいほう（5N）の向きにはたらきます。',
    add: [ar(176, 110, 176 + 2 * U, 110, C.green), lb(176 + U, 125, '合力 2N', 12, C.green, 'middle', true), ...band(150, bx(40, 168, 240, 34, '5 − 3 ＝ 2N（5Nの向き）', C.green, FILL.green, 16))],
  },
  {
    note: '(3) 直角にはたらく場合です。右に3N、上に4N。❓この2つは、足し算や引き算でまとめていい？→向きがちがうので、単純には足せません。',
    add: fresh(blk(100, 110), ar(116, 110, 116 + 3 * U, 110, C.blue), lb(116 + 3 * U / 2, 126, '3N', 12, C.blue, 'middle', true), ar(100, 96, 100, 96 - 4 * U, C.red), lb(86, 96 - 2 * U, '4N', 12, C.red, 'end', true), ...band(150, T('右に3N、上に4N（向きがちがう）', 178, 13, C.ink))),
  },
  {
    note: '❓では、どうやって1つにする？→2つの力を2辺とする長方形（平行四辺形）をかいて、そのまん中を通る対角線を、合力とします。',
    add: [ln(116 + 3 * U, 110, 116 + 3 * U, 96 - 4 * U, C.gray, true), ln(100, 96 - 4 * U, 116 + 3 * U, 96 - 4 * U, C.gray, true), ar(100, 110, 116 + 3 * U, 96 - 4 * U, C.green), lb(180, 70, '合力', 12, C.green, 'start', true), ...band(150, T('長方形の対角線が合力', 178, 13, C.green))],
  },
  {
    note: '❓長さは何Nになる？→直角をはさむ辺が3と4の直角三角形は、斜辺が5になります（3：4：5）。❓なぜ3＋4＝7にならない？→対角線は2辺を回り道しない近道なので、7より短くなります。',
    add: band(150, bx(30, 160, 260, 32, '3：4：5 の直角三角形 → 合力 5N', C.green, FILL.green, 15), lb(160, 214, '3＋4＝7 は回り道。近道の対角線は 5', 12, C.red, 'middle', true)),
  },
  {
    note: '答えは (1) 8N、(2) 2N（5Nの向き）、(3) 5N です。❓検算は？→2つの力の合力は、必ず「差」と「和」のあいだに入ります。(3) は 4−3＝1 と 3＋4＝7 のあいだの5なので、ちょうどよい大きさです。',
    add: fresh(bx(20, 20, 280, 30, '(1) 同じ向き　3＋5 ＝ 8N', C.blue, FILL.blue, 13), bx(20, 58, 280, 30, '(2) 反対向き　5−3 ＝ 2N（5Nの向き）', C.red, FILL.red, 13), bx(20, 96, 280, 30, '(3) 直角　3：4：5 → 5N', C.green, FILL.green, 13), lb(160, 158, '検算：合力は「差」と「和」のあいだ', 12, C.ink, 'middle', true), lb(160, 180, '(3) 1 ＜ 5 ＜ 7 ○', 13, C.green, 'middle', true)),
  },
], '2つの力の合力（足し算・引き算・長方形の対角線）');

// ── takatsuki_sansu_03：立方体の表面積と体積 ──
const cubeFront = (x: number, y: number, s: number): P[] => [[x, y], [x + s, y], [x + s, y + s], [x, y + s]];
const cube: Figure = show([
  {
    note: '1辺が4cmの立方体の、(1)表面積と(2)体積を求めます。❓表面積とは、何の大きさでしょう。まず、立方体がどんな面でできているか見てみます。',
    add: [pg(cubeFront(60, 60, 70), C.main, FILL.warm), pg([[60, 60], [85, 35], [155, 35], [130, 60]], C.main, FILL.warm), pg([[130, 60], [155, 35], [155, 105], [130, 130]], C.main, FILL.warm), lb(95, 145, '4cm', 11, C.red, 'middle', true), lb(164, 85, '4cm', 11, C.red, 'start', true), ...band(150, T('1辺4cmの立方体', 178, 13, C.ink))],
  },
  {
    note: '❓表面積とは？→立体の外側をおおう、すべての面の面積を、たしたものです。❓面は何枚ある？→前・上・右の3枚が見えていて、かくれた後ろ・下・左の3枚があるので、ぜんぶで6枚です。',
    add: [pg(cubeFront(60, 60, 70), C.red, FILL.red), pg([[60, 60], [85, 35], [155, 35], [130, 60]], C.blue, FILL.blue), pg([[130, 60], [155, 35], [155, 105], [130, 130]], C.green, FILL.green), ...band(150, T('見える3枚 ＋ かくれた3枚 ＝ 6枚', 172, 13, C.ink), lb(160, 200, '（向かい合う面は同じ大きさ）', 11, C.gray))],
  },
  {
    note: '❓その1枚の面積は？→1辺4cmの正方形なので、たて4×よこ4＝16cm²です。1cm²の小さな正方形が16個しきつめられています。',
    add: [...fresh(), ...[0, 1, 2, 3].flatMap((i) => [0, 1, 2, 3].map((j) => bx(120 + j * 20, 14 + i * 20, 20, 20, undefined, C.blue, FILL.blue))), lb(108, 54, '4cm', 11, C.red, 'end', true), lb(160, 104, '4cm', 11, C.red, 'middle', true), ...band(116, T('1枚の面積 ＝ 4×4 ＝ 16cm²', 140, 14, C.blue))],
  },
  {
    note: '❓6枚をどうあつかう？→展開図（立体を切り開いた図）をかくと、同じ正方形がきっちり6枚ならびます。ぜんぶ16cm²なので、16×6を計算します。',
    add: [...fresh(), ...[0, 1, 2, 3].map((i) => bx(60 + i * 40, 50, 40, 40, '16', C.blue, FILL.blue, 12)), bx(100, 10, 40, 40, '16', C.blue, FILL.blue, 12), bx(100, 90, 40, 40, '16', C.blue, FILL.blue, 12), ...band(140, T('正方形が6枚 → 16 × 6 ＝ 96cm²', 160, 14, C.green), lb(160, 190, '（表面積の答え）', 11, C.gray))],
  },
  {
    note: '(2) 体積にうつります。❓体積とは？→1辺1cmの立方体（1cm³）が、何個つまっているかという大きさです。まず一番下の1段を見てみます。',
    add: [...fresh(), ...[0, 1, 2, 3].flatMap((i) => [0, 1, 2, 3].map((j) => bx(120 + j * 20, 14 + i * 20, 20, 20, undefined, C.main, FILL.warm))), lb(108, 54, '4個', 11, C.red, 'end', true), lb(160, 104, '4個', 11, C.red, 'middle', true), ...band(116, T('1段は 4×4 ＝ 16個', 140, 14, C.main))],
  },
  {
    note: '❓何段かさなる？→高さが4cmなので、1cmの厚さの段が4段かさなります。16個の段が4つなので、16×4＝64個です。',
    add: [...fresh(), ...[0, 1, 2, 3].map((i) => bx(90, 18 + i * 28, 140, 24, '16個', C.main, i % 2 ? FILL.yellow : FILL.warm, 12)), lb(80, 70, '4段', 12, C.red, 'end', true), ...band(132, T('16個 × 4段 ＝ 64個 ＝ 64cm³', 162, 14, C.green))],
  },
  {
    note: '❓なぜ「1辺を3回かける」の？→1段の個数4×4が「底面積」、段の数4が「高さ」で、体積＝底面積×高さだからです。立方体は底面も高さも同じ4なので、4×4×4になります。',
    add: band(150, bx(20, 160, 80, 32, '4×4', C.main, FILL.warm, 14), lb(112, 180, '×', 16), bx(124, 160, 60, 32, '4', C.red, FILL.red, 14), lb(198, 180, '＝', 16), bx(212, 160, 80, 32, '64cm³', C.green, FILL.green, 13), lb(60, 210, '底面積', 11, C.gray), lb(154, 210, '高さ', 11, C.gray)),
  },
  {
    note: '答えは (1) 96cm²、(2) 64cm³ です。❓検算は？→側面4枚で16×4＝64、上と下で16×2＝32、あわせて96で一致します。単位は、面の広さはcm²、中身の大きさはcm³です。',
    add: fresh(bx(30, 24, 260, 34, '(1) 表面積　16×6 ＝ 96cm²', C.green, FILL.green, 15), bx(30, 70, 260, 34, '(2) 体積　4×4×4 ＝ 64cm³', C.blue, FILL.blue, 15), lb(160, 130, '検算：側面 16×4＝64 ＋ 上下 16×2＝32', 12, C.ink, 'middle', true), lb(160, 152, '64＋32 ＝ 96cm² ○', 13, C.green, 'middle', true), lb(160, 186, '側面だけの64cm²や、単位のまちがいに注意', 11, C.red, 'middle', true)),
  },
], '立方体（1辺4cm）の表面積と体積');

// ── takatsuki_sansu_06：正三角形を並べた図形のパターン（段数×段数） ──
const ROWC: [string, string][] = [[C.red, FILL.red], [C.blue, FILL.blue], [C.green, FILL.green], [C.purple, FILL.purple]];
const stageTri = (k: number, cx: number, bottom: number, s: number, colors: boolean): DiagramElement[] => {
  const top = bottom - k * s * 0.866;
  const els: DiagramElement[] = [];
  for (let r = 1; r <= k; r++) els.push(...(colors ? triRow(r, cx, top, s, ROWC[(r - 1) % 4][0], ROWC[(r - 1) % 4][1]) : triRow(r, cx, top, s, C.main, FILL.warm)));
  return els;
};
const L4 = (i: number, j: number) => Math.max(i, j);
const triPattern: Figure = show([
  {
    note: '正三角形を段に並べて、大きな三角形を作ります。1段で1個、2段で4個、3段で9個。❓10段のときは何個になるでしょう。まず、数え方の決まりを探します。',
    add: [...stageTri(1, 50, 100, 22, false), ...stageTri(2, 140, 100, 22, false), ...stageTri(3, 250, 100, 22, false), lb(50, 116, '1段：1個', 11, C.ink, 'middle', true), lb(140, 116, '2段：4個', 11, C.ink, 'middle', true), lb(250, 116, '3段：9個', 11, C.ink, 'middle', true), ...band(150, T('10段のときは何個？', 180, 14, C.red))],
  },
  {
    note: '❓ふえ方は、いつも同じ？→1から4で3個、4から9で5個ふえています。ふえる数が3、5と、2ずつ大きくなっているので、「3個ずつふえる」とは言えません。',
    add: band(150, bx(20, 162, 80, 30, '1', C.main, FILL.warm, 14), ar(104, 177, 134, 177, C.blue), lb(119, 166, '＋3', 11, C.blue, 'middle', true), bx(138, 162, 80, 30, '4', C.main, FILL.warm, 14), ar(222, 177, 252, 177, C.red), lb(237, 166, '＋5', 11, C.red, 'middle', true), bx(256, 162, 50, 30, '9', C.main, FILL.warm, 14), lb(160, 214, 'ふえる数が 3、5、… と2ずつ大きくなる', 12, C.ink, 'middle', true)),
  },
  {
    note: '❓なぜふえる数が大きくなる？→4段を色分けしてみます。□段目には、上向きの三角形が□個、下向きが（□−1）個ならぶので、合わせて□×2−1個です。',
    add: [...fresh(), ...[1, 2, 3, 4].flatMap((r) => triRow(r, 110, 10, 30, ROWC[r - 1][0], ROWC[r - 1][1])), ...[1, 2, 3, 4].map((r) => lb(215, 10 + (r - 0.5) * 26, `${r}段目：${r * 2 - 1}個`, 12, ROWC[r - 1][0], 'start', true)), ...band(122, T('□段目 ＝ 上向き□個 ＋ 下向き（□−1）個', 146, 12, C.ink), lb(160, 172, '＝ □×2−1（個）', 14, C.red, 'middle', true))],
  },
  {
    note: '❓合計は、どう数える？→1段目から4段目まで、1＋3＋5＋7と奇数（きすう）をたします。奇数を順にたしていくと、ある決まりが見えてきます。',
    add: [...fresh(), ...[1, 2, 3, 4].map((r) => bx(24 + (r - 1) * 74, 30, 56, 34, String(r * 2 - 1), ROWC[r - 1][0], ROWC[r - 1][1], 15)), ...[0, 1, 2].map((i) => lb(89 + i * 74, 50, '＋', 14, C.ink, 'middle', true)), ...band(90, T('1＋3＋5＋7 ＝ 16', 120, 15, C.ink), lb(160, 150, '1＋3 ＝ 4　1＋3＋5 ＝ 9　1＋3＋5＋7 ＝ 16', 12, C.gray, 'middle', true), lb(160, 180, '4、9、16… は、同じ数を2回かけた数（2×2、3×3、4×4）', 11, C.blue, 'middle', true))],
  },
  {
    note: '❓なぜ、奇数をたすと「段数×段数」になる？→点を4×4の正方形に並べ、L字型に色分けします。1個、3個、5個、7個のL字が、ちょうど正方形をうめつくします。',
    add: [...fresh(), ...[0, 1, 2, 3].flatMap((i) => [0, 1, 2, 3].map((j) => ci(70 + j * 26, 28 + i * 26, 10, undefined, ROWC[L4(i, j)][0], ROWC[L4(i, j)][1]))), ...[0, 1, 2, 3].map((k) => lb(200, 28 + k * 26, `${k + 1}番目のL字：${k * 2 + 1}個`, 11, ROWC[k][0], 'start', true)), ...band(122, T('L字を全部たすと 4×4 の正方形', 150, 13, C.green), lb(160, 180, '□段なら □×□ 個', 14, C.red, 'middle', true))],
  },
  {
    note: '❓10段のときは？→10段目の三角形は 10×2−1＝19個。全体は 10×10＝100個です。1つずつ足さなくても、一発で求まります。',
    add: fresh(bx(30, 22, 260, 34, '10段目　10×2−1 ＝ 19個', C.blue, FILL.blue, 14), bx(30, 70, 260, 34, '全部で　10×10 ＝ 100個', C.green, FILL.green, 16), lb(160, 136, '段数を2回かける', 13, C.ink, 'middle', true), lb(160, 160, '1段：1×1　2段：2×2　3段：3×3　10段：10×10', 11, C.gray, 'middle', true)),
  },
  {
    note: '答えは100個です。❓検算は？→9段までは 9×9＝81個。10段目の19個をたすと 81＋19＝100で、10×10と一致します。',
    add: fresh(bx(30, 26, 260, 36, '答え　100個', C.green, FILL.green, 18), bx(30, 80, 260, 34, '9段まで　9×9 ＝ 81個', C.blue, FILL.blue, 14), lb(160, 128, '＋', 14, C.ink, 'middle', true), bx(30, 136, 260, 34, '10段目　19個 → 81＋19 ＝ 100 ○', C.purple, FILL.purple, 14), lb(160, 200, '3個ずつふえるとして 1、4、7… と数えるのは×', 11, C.red, 'middle', true)),
  },
], '正三角形を並べた大きな三角形の個数');

// ── takatsuki_rika_01：水中の物体にはたらく浮力 ──
const tank = (): DiagramElement[] => [bx(40, 26, 240, 112, undefined, C.blue, FILL.blue)];
const buoy: Figure = show([
  {
    note: '体積200cm³の物体が、水の中に完全にしずんでいます。浮力は何Nでしょう。❓そもそも浮力とは何の力でしょう。',
    add: [...tank(), bx(130, 60, 60, 44, '200cm³', C.gray, FILL.gray, 11), ar(160, 58, 160, 30, C.green), lb(200, 40, '浮力（上向き）', 10, C.green, 'start', true), ar(160, 106, 160, 130, C.red), lb(200, 122, '重さ（下向き）', 10, C.red, 'start', true), ...band(150, T('水がものを押し上げる力が「浮力」', 178, 13, C.green))],
  },
  {
    note: '❓なぜ水は上に押す？→水の中では、深いところほど水が強く押します。物体の下の面は上の面より深いので、下から押す力のほうが大きく、その差が上向きの力＝浮力になります。',
    add: [ar(142, 44, 142, 58, C.red), ar(178, 44, 178, 58, C.red), ar(142, 136, 142, 106, C.green), ar(178, 136, 178, 106, C.green), ...band(150, T('上から押す力（小）＜ 下から押す力（大）', 172, 12, C.ink), lb(160, 200, 'その差が、上向きの「浮力」', 13, C.green, 'middle', true))],
  },
  {
    note: '❓その大きさは何できまる？→物体が「おしのけた水」の重さです。物体は200cm³の場所をしめて、そこにあった水をおしのけています。',
    add: [...fresh(), ...tank(), bx(130, 60, 60, 44, '水', C.blue, FILL.yellow, 13), lb(160, 50, '同じ形の水（200cm³）', 10, C.blue, 'middle', true), ...band(150, T('おしのけた水 ＝ 物体の体積 ＝ 200cm³', 178, 13, C.blue))],
  },
  {
    note: '❓なぜ「おしのけた水の重さ」と同じ？→物体のかわりに、同じ形の水がそこにあったら、その水は浮きも沈みもせずに止まります。ということは、まわりの水がその水を支える上向きの力と、その水の重さが、ちょうどつり合っているのです。',
    add: [ar(160, 58, 160, 30, C.green), ar(160, 106, 160, 134, C.red), lb(200, 40, '支える力', 10, C.green, 'start', true), lb(200, 128, '水の重さ', 10, C.red, 'start', true), ...band(150, T('同じ大きさ → つり合って止まる', 172, 13, C.ink), lb(160, 200, '物体にかえても、まわりの水の押し方は同じ', 12, C.gray, 'middle', true))],
  },
  {
    note: '❓おしのけた水200cm³は、何gの重さ？→水1cm³は1gなので、200cm³なら200×1＝200gです。',
    add: band(150, T('水1cm³ ＝ 1g', 168, 13, C.ink), bx(40, 180, 240, 34, '200 × 1 ＝ 200g', C.blue, FILL.blue, 16)),
  },
  {
    note: '❓それは何Nの力？→100gの重さが1Nなので、200gは200÷100＝2Nです。これが、物体にはたらく浮力です。',
    add: band(150, T('100g ＝ 1N', 168, 13, C.ink), bx(40, 180, 240, 34, '200 ÷ 100 ＝ 2N（浮力）', C.green, FILL.green, 16)),
  },
  {
    note: '❓物体が重いほど、浮力は大きい？→ちがいます。鉄の玉でも発ぽうスチロールでも、体積が同じ200cm³ならおしのける水は同じなので、浮力はどちらも2Nです。浮力は、物体の重さでなく体積（おしのけた水）で決まります。',
    add: fresh(...tank(), bx(96, 66, 50, 40, '鉄', C.gray, FILL.gray, 12), bx(176, 66, 50, 40, '発ぽう', C.gray, FILL.warm, 10), ar(121, 64, 121, 40, C.green), ar(201, 64, 201, 40, C.green), lb(121, 34, '2N', 11, C.green, 'middle', true), lb(201, 34, '2N', 11, C.green, 'middle', true), ...band(150, T('体積が同じなら、浮力も同じ', 178, 13, C.green))),
  },
  {
    note: '答えは (1) 押しのけた水の重さに等しい力、(2) 2N です。❓検算は？→物体の重さが2Nより軽ければ浮き、重ければ沈みます。浮力の大きさを知ると、浮くか沈むかが分かります。',
    add: fresh(bx(20, 20, 280, 40, '(1) おしのけた水の重さに等しい力', C.blue, FILL.blue, 14), bx(20, 72, 280, 34, '(2) 200g ÷ 100 ＝ 2N', C.green, FILL.green, 15), lb(160, 136, '検算：物体の重さが2Nより軽い → 浮く', 12, C.ink, 'middle', true), lb(160, 158, '重い → 沈む', 12, C.ink, 'middle', true)),
  },
], '浮力＝おしのけた水の重さ');

// ── takatsuki_rika_02：光の反射と屈折 ──
const mirrorScene = (): DiagramElement[] => [ln(40, 78, 280, 78, C.ink, false, 3), ln(160, 12, 160, 78, C.gray, true), lb(160, 8, '法線', 9, C.gray, 'middle')];
const waterScene = (): DiagramElement[] => [bx(20, 80, 280, 66, undefined, C.blue, FILL.blue), ln(160, 14, 160, 146, C.gray, true), lb(34, 64, '空気', 11, C.gray, 'start', true), lb(34, 100, '水', 11, C.blue, 'start', true)];
const light: Figure = show([
  {
    note: '(1) 光が鏡で反射します。鏡にななめに入る光を「入射光」、はね返る光を「反射光」とよび、鏡に垂直な点線（法線）との角を、入射角・反射角といいます。❓この2つの角は、どんな関係でしょう。',
    add: [...mirrorScene(), ar(96, 14, 160, 78, C.blue), ar(160, 78, 224, 14, C.red), lb(140, 34, '入射角', 10, C.blue, 'middle', true), lb(184, 34, '反射角', 10, C.red, 'middle', true), ...band(150, T('(1) 入射角 と 反射角は？', 178, 14, C.ink))],
  },
  {
    note: '❓なぜ等しくなる？→鏡のむこうに、光源と同じ距離はなれた「像」ができます。反射した光は、その像からまっすぐ来たように見え、像と光源は鏡をはさんで対称なので、2つの角は等しくなります。',
    add: [ln(160, 78, 96, 142, C.purple, true), ci(96, 14, 5, undefined, C.blue, FILL.blue), lb(84, 14, '光源', 10, C.blue, 'end'), ci(96, 142, 5, undefined, C.purple, FILL.purple), lb(84, 142, '像', 10, C.purple, 'end', true), ...band(150, T('鏡をはさんで、光源と像は対称', 172, 13, C.purple), lb(160, 204, '入射角 ＝ 反射角（反射の法則）', 14, C.green, 'middle', true))],
  },
  {
    note: '(2) 光が水から空気に出るときです。❓入射角と屈折角は、どちらが大きい？→水から空気に出る光は、境目で法線から遠ざかる向きに曲がるので、屈折角のほうが大きくなります。',
    add: fresh(...waterScene(), ar(130, 132, 160, 80, C.blue), ar(160, 80, 202, 38, C.red), lb(168, 112, '入射角', 9, C.blue, 'start', true), lb(152, 50, '屈折角', 9, C.red, 'end', true), ...band(150, T('(2) 水 → 空気：屈折角 ＞ 入射角', 178, 13, C.red))),
  },
  {
    note: '❓なぜ曲がる？→光は、水の中より空気の中のほうが速く進みます。速さが変わる境目で、進む向きが変わるのです。❓では逆に、空気から水に入るときは？→同じ道を逆にたどるので、屈折角のほうが小さくなります（灰色の矢印）。',
    add: [ar(202, 38, 160, 80, C.gray, true), ar(160, 80, 130, 132, C.gray, true), ...band(150, T('光は、空気中のほうが速い', 170, 13, C.ink), lb(160, 198, '空気 → 水 では、法線に近づくように曲がる', 12, C.gray, 'middle', true))],
  },
  {
    note: '❓入射角をどんどん大きくすると？→屈折角も大きくなり、ついに屈折した光が水面すれすれ（90°）に進みます。もう空気中へは出られないぎりぎりの角度です。',
    add: fresh(...waterScene(), ar(113, 132, 160, 80, C.blue), ar(160, 80, 232, 80, C.red), lb(232, 68, '屈折角 90°', 10, C.red, 'end', true), ...band(150, T('屈折光が、水面すれすれになる', 178, 13, C.red))),
  },
  {
    note: '❓それより入射角を大きくすると？→光は空気中へ出られなくなり、水面で全部はね返されます。これを「全反射」といいます。',
    add: fresh(...waterScene(), ar(100, 115, 160, 80, C.blue), ar(160, 80, 220, 115, C.green), ...band(150, T('光が全部はね返る ＝ 全反射', 172, 14, C.green), lb(160, 202, '入射角＝反射角になっている', 12, C.gray, 'middle', true))),
  },
  {
    note: '❓全反射はどこで使われている？→光ファイバーです。細いガラスの中で光が全反射をくり返し、外にもれずに遠くまで進みます。',
    add: fresh(bx(20, 56, 280, 50, undefined, C.gray, FILL.gray), ln(30, 81, 70, 60, C.red, false, 2), ln(70, 60, 120, 102, C.red, false, 2), ln(120, 102, 170, 60, C.red, false, 2), ln(170, 60, 220, 102, C.red, false, 2), ln(220, 102, 290, 70, C.red, false, 2), lb(160, 36, '光ファイバー', 12, C.ink, 'middle', true), ...band(150, T('かべではね返り続けて、遠くまで届く', 178, 13, C.green))),
  },
  {
    note: '答えは (1) 入射角＝反射角、(2) 屈折角のほうが大きい、(3) 全反射です。❓検算は？→全反射が起きるのは、光が水などから空気へ出るときだけで、空気から水へ入るときは、入射角が大きくても起こりません。',
    add: fresh(bx(20, 16, 280, 30, '(1) 入射角 ＝ 反射角（反射の法則）', C.blue, FILL.blue, 13), bx(20, 54, 280, 30, '(2) 屈折角のほうが大きい', C.red, FILL.red, 13), bx(20, 92, 280, 30, '(3) 全反射', C.green, FILL.green, 13), lb(160, 150, '検算：水 → 空気 のときだけ起こる', 12, C.ink, 'middle', true), lb(160, 172, '空気 → 水 では起きない（屈折角が小さいため）', 11, C.gray, 'middle')),
  },
], '光の反射・屈折・全反射');

// ── takatsuki_rika_06：根毛のはたらき ──
const rootBody = (x: number, w: number, hairs: boolean): DiagramElement[] => {
  const els: DiagramElement[] = [bx(x, 12, w, 120, undefined, C.main, FILL.warm)];
  if (hairs) for (let y = 70; y <= 124; y += 9) els.push(ln(x, y, x - 15, y - 5, C.main, false, 1.6), ln(x + w, y, x + w + 15, y - 5, C.main, false, 1.6));
  return els;
};
const soilDots = (): DiagramElement[] => [[40, 40], [70, 100], [100, 60], [230, 110], [260, 50], [280, 95], [210, 30], [60, 130], [250, 135], [110, 120]].map((p) => ci(p[0], p[1], 3, undefined, C.gray, FILL.gray));
const rootHair: Figure = show([
  {
    note: '根が水や養分をとりこむしくみを考えます。❓根のまわりにある、毛のような細かい突起は何でしょう。',
    add: [...soilDots(), ...rootBody(148, 24, true), lb(250, 78, '？', 20, C.red, 'middle', true), ar(236, 80, 192, 90, C.red), ...band(150, T('根のまわりの「毛」のようなもの', 178, 13, C.ink))],
  },
  {
    note: '❓これは何？→根毛（こんもう）です。根の先に近いところにたくさんあり、1本1本は、根の表面の細胞（さいぼう）が細長くのびたものです。',
    add: [...fresh(), ...soilDots(), ...rootBody(148, 24, true), ln(194, 70, 194, 125, C.red, false, 2), lb(200, 98, '根毛', 12, C.red, 'start', true), ...band(150, T('答え(1)　根毛（こんもう）', 178, 15, C.green))],
  },
  {
    note: '❓根毛は何のためにある？→土の中の水や養分を、からだの中にとりこむ入口です。❓吸収できる量は、何で変わる？→水や養分にふれている面の広さ（表面積）です。',
    add: [...fresh(), ...soilDots(), ...rootBody(148, 24, true), ...[[205, 60], [215, 84], [205, 108], [112, 70], [102, 96]].map((p) => ci(p[0], p[1], 3, undefined, C.blue, FILL.blue)), ar(205, 60, 188, 67, C.blue), ar(215, 84, 188, 88, C.blue), ar(205, 108, 188, 106, C.blue), ar(112, 70, 134, 72, C.blue), ar(102, 96, 134, 98, C.blue), ...band(150, T('水・養分にふれる面が広いほど、よく吸える', 178, 12, C.blue))],
  },
  {
    note: '❓表面積が「広い」とは、どういうこと？→1辺2cmの立方体の表面積は 2×2×6＝24cm²。これを1辺1cmの小さな立方体8個に切りわけると、1個が1×1×6＝6cm²で、8個で48cm²。同じ量でも、こまかくすると外にふれる面が2倍になります。',
    add: fresh(bx(30, 26, 70, 70, '1辺2cm', C.main, FILL.warm, 12), ar(108, 61, 146, 61, C.ink), ...[0, 1].flatMap((i) => [0, 1].map((j) => bx(158 + j * 42, 34 + i * 42, 34, 34, '1cm', C.blue, FILL.blue, 10))), lb(65, 118, '表面積 24cm²', 12, C.main, 'middle', true), lb(222, 124, '8個で 48cm²', 12, C.blue, 'middle', true), ...band(140, T('切りわけると、表面積は 2倍', 175, 14, C.green))),
  },
  {
    note: '❓根毛があると、どう変わる？→左は根毛のない根で、土にふれるのは根の表面だけ。右は根毛がたくさんあるので、毛1本1本のまわりも土や水にふれ、ふれる面（赤い線）がぐんとふえます。',
    add: fresh(...[...soilDots()], ...rootBody(60, 24, false), ln(60, 12, 60, 132, C.red, false, 3), ln(84, 12, 84, 132, C.red, false, 3), ...rootBody(220, 24, true), ln(220, 12, 220, 70, C.red, false, 3), ln(244, 12, 244, 70, C.red, false, 3), ...[70, 79, 88, 97, 106, 115, 124].flatMap((y) => [ln(220, y, 205, y - 5, C.red, false, 2.6), ln(244, y, 259, y - 5, C.red, false, 2.6)]), lb(72, 143, '根毛なし', 11, C.ink, 'middle', true), lb(232, 143, '根毛あり', 11, C.ink, 'middle', true), ...band(150, T('赤い線（ふれる長さ）が、根毛でふえる', 178, 12, C.red))),
  },
  {
    note: '❓表面積が大きいと、なぜたくさん吸収できる？→水の入口がふえるからです。入口が1つの店より、入口が6つの店のほうが、同じ時間にたくさんのお客さんが入れるのと同じです。',
    add: fresh(bx(20, 34, 100, 70, '入口1つ', C.gray, FILL.gray, 12), ar(6, 70, 20, 70, C.blue), bx(180, 34, 120, 70, '入口6つ', C.gray, FILL.gray, 12), ...[42, 54, 66, 78, 90, 100].map((y) => ar(166, y, 180, y, C.blue)), lb(70, 124, '入る量：少ない', 12, C.ink, 'middle', true), lb(240, 124, '入る量：多い', 12, C.green, 'middle', true), ...band(140, T('入口（表面積）が多い → たくさん吸える', 175, 13, C.green))),
  },
  {
    note: '答えは (1) 根毛、(2) 根毛が表面積を大きくして、土の水分や養分にふれる面がふえるから、より多く吸収できる、です。❓検算は？→根毛をなくすと入口の数が減るので、吸える量も減るはずで、筋が通っています。',
    add: fresh(bx(20, 18, 280, 34, '(1) 根毛（こんもう）', C.green, FILL.green, 15), bx(20, 62, 280, 74, undefined, C.blue, FILL.blue), lb(160, 78, '(2) 根毛で表面積が大きくなる', 13, C.ink, 'middle', true), lb(160, 100, '→ 水や養分にふれる面がふえる', 13, C.ink, 'middle', true), lb(160, 122, '→ たくさん吸える', 13, C.ink, 'middle', true), lb(160, 158, '検算：根毛がなければ入口が減って、吸える量も減る', 11, C.ink, 'middle', true)),
  },
], '根毛のはたらき');

// ── kaimei_sansu_1：通過算と流水算 ──
const ground = (y = 100) => ln(16, y, 304, y, C.gray, false, 1.4);
const trainBox = (x: number, w: number, color: string, fill: string) => bx(x, 76, w, 24, undefined, color, fill);
const trainRiver: Figure = show([
  {
    note: '長さ120mの列車が秒速20mで走ります。問1：電柱を通過するのにかかる時間は？❓「通過する」とは、どこからどこまでのことでしょう。→先頭が電柱に着いてから、最後尾が電柱を通りすぎるまでです。',
    add: [ground(), trainBox(40, 36, C.blue, FILL.blue), lb(58, 66, '列車', 10, C.blue, 'middle', true), ln(76, 54, 76, 100, C.ink, false, 3), lb(76, 46, '電柱（長さ0m）', 10, C.ink, 'middle', true), ar(80, 112, 120, 112, C.blue), ...band(150, T('先頭が電柱に着いた', 178, 14, C.blue))],
  },
  {
    note: '❓その間に、列車は何m進む？→先頭が電柱に着いた位置から、最後尾が電柱をすぎる位置まで、列車の長さ120mぶん進みます。時間＝道のり÷速さなので、120÷20＝6秒です。',
    add: [trainBox(76, 36, C.red, FILL.red), lb(118, 90, '最後尾が通りすぎた', 10, C.red, 'start', true), ...band(150, T('進む道のり ＝ 列車の長さ120m', 168, 13, C.ink), bx(40, 182, 240, 34, '120 ÷ 20 ＝ 6秒', C.green, FILL.green, 16))],
  },
  {
    note: '問2：長さ480mの鉄橋を完全にわたり終えるまでの時間は？❓「完全にわたり終える」とは？→先頭が橋に入ってから、最後尾が橋を出るまでです。',
    add: [...fresh(), ground(), bx(80, 88, 144, 12, undefined, C.gray, FILL.gray), lb(152, 80, '鉄橋 480m', 11, C.ink, 'middle', true), trainBox(44, 36, C.blue, FILL.blue), lb(62, 66, '先頭が橋に入る', 10, C.blue, 'middle', true), trainBox(224, 36, C.red, FILL.red), lb(242, 66, '最後尾が橋を出る', 10, C.red, 'middle', true), ar(84, 112, 224, 112, C.blue), ...band(150, T('先頭が橋に入った → 最後尾が橋を出た', 178, 13, C.ink))],
  },
  {
    note: '❓その間に、何m進む？→先頭は橋の長さ480mを進み、さらに列車の長さ120mぶん進まないと、最後尾が橋を出ません。480＋120＝600mです。',
    add: band(150, T('進む道のり ＝ 橋480m ＋ 列車120m ＝ 600m', 168, 12, C.ink), bx(40, 182, 240, 34, '600 ÷ 20 ＝ 30秒', C.green, FILL.green, 16)),
  },
  {
    note: '❓電柱のときと同じ考え方？→同じです。電柱は「長さ0mの橋」と考えると、0＋120＝120mになり、6秒が出ます。通過算は「橋の長さ＋列車の長さ」と覚えます。',
    add: fresh(bx(30, 22, 260, 34, '電柱　0 ＋ 120 ＝ 120m → 6秒', C.blue, FILL.blue, 14), bx(30, 68, 260, 34, '鉄橋　480 ＋ 120 ＝ 600m → 30秒', C.green, FILL.green, 14), lb(160, 138, '進む道のり ＝ 相手の長さ ＋ 自分の長さ', 13, C.red, 'middle', true), lb(160, 164, '（電柱は長さ0m）', 11, C.gray)),
  },
  {
    note: '問3・問4：船は川を、上るとき秒速3m、下るとき秒速5mです。❓流れの速さは？→下りは流れにのるので「静水の速さ＋流れ」、上りは流れにさからうので「静水の速さ−流れ」です。2つの差は、流れ2つぶんになります。',
    add: fresh(lb(30, 18, '上り（静水−流れ）', 11, C.blue, 'start', true), bx(30, 24, 120, 26, '3', C.blue, FILL.blue, 13), lb(30, 66, '下り（静水＋流れ）', 11, C.red, 'start', true), bx(30, 72, 200, 26, '5', C.red, FILL.red, 13), bx(150, 24, 80, 26, '差 2', C.purple, FILL.purple, 12), ln(190, 14, 190, 106, C.gray, true), lb(190, 120, '静水の速さ', 10, C.gray, 'middle', true), lb(170, 136, '流れ1', 10, C.purple, 'middle', true), lb(210, 136, '流れ1', 10, C.purple, 'middle', true), ...band(150, T('5 − 3 ＝ 2 ＝ 流れ2つぶん', 176, 14, C.purple))),
  },
  {
    note: '差の2は流れが2つぶんなので、流れの速さは 2÷2＝1 で秒速1mです（問3）。静水の速さは、上りに流れを足して 3＋1＝4 で秒速4mです（問4）。下りから引いて 5−1＝4 としても同じです。',
    add: band(150, bx(30, 160, 120, 34, '流れ　2÷2＝1', C.purple, FILL.purple, 14), bx(170, 160, 120, 34, '静水　3＋1＝4', C.green, FILL.green, 14), lb(160, 214, '検算：5−1＝4 でも同じ', 12, C.gray, 'middle', true)),
  },
  {
    note: '問5：長さ60mの船が下流へ進みます。❓船の速さは、4と5のどちら？→川岸から見ると、船は流れにも運ばれるので、下りの速さ秒速5mで進みます。静水の4は、流れを考えない速さです。',
    add: fresh(ground(), bx(100, 88, 108, 12, undefined, C.gray, FILL.gray), lb(154, 80, '桟橋 180m', 11, C.ink, 'middle', true), bx(64, 76, 36, 24, undefined, C.blue, FILL.blue), lb(82, 66, '船60m', 10, C.blue, 'middle', true), bx(208, 76, 36, 24, undefined, C.red, FILL.red), ar(104, 112, 208, 112, C.blue), ...band(150, T('川岸から見た速さ ＝ 下りの秒速5m', 172, 13, C.blue), lb(160, 202, '（静水の4ではない）', 12, C.red, 'middle', true))),
  },
  {
    note: '❓杭（長さ0m）を通りすぎる時間は？→進むのは船の長さ60mだけで、60÷5＝12秒。桟橋は180＋60＝240mを進むので、240÷5＝48秒です。',
    add: band(150, bx(20, 160, 130, 34, '杭　60÷5 ＝ 12秒', C.blue, FILL.blue, 14), bx(170, 160, 130, 34, '桟橋　240÷5 ＝ 48秒', C.green, FILL.green, 13), lb(160, 214, '桟橋の道のり ＝ 180 ＋ 60 ＝ 240m', 12, C.ink, 'middle', true)),
  },
  {
    note: '答えは 問1：6秒、問2：30秒、問3：秒速1m、問4：秒速4m、問5：杭12秒・桟橋48秒です。❓検算は？→下りの速さは 4＋1＝5 で一致します。もし静水の4でわると 240÷4＝60秒になり、ちがう答えになってしまいます。',
    add: fresh(lb(160, 20, '問1：6秒　問2：30秒', 14, C.green, 'middle', true), lb(160, 48, '問3：秒速1m　問4：秒速4m', 14, C.green, 'middle', true), lb(160, 76, '問5：杭 12秒　桟橋 48秒', 14, C.green, 'middle', true), bx(30, 100, 260, 30, '検算：下りの速さ 4＋1 ＝ 5 ○', C.blue, FILL.blue, 13), lb(160, 160, '240÷4＝60秒 は、流れを忘れたまちがい', 12, C.red, 'middle', true)),
  },
], '通過算と流水算');

// ── kaimei_sansu_3：数列・規則性 ──
const upDown = (r: number, cx: number, top: number, s: number): DiagramElement[] => {
  const h = s * 0.866;
  const y0 = top + (r - 1) * h;
  const out: DiagramElement[] = [];
  for (let i = 0; i < r; i++) {
    const x = cx + (i - (r - 1) / 2) * s;
    out.push(pg([[x, y0], [x - s / 2, y0 + h], [x + s / 2, y0 + h]], C.blue, FILL.blue));
  }
  for (let j = 0; j < r - 1; j++) {
    const x = cx + (j - (r - 2) / 2) * s;
    out.push(pg([[x - s / 2, y0], [x + s / 2, y0], [x, y0 + h]], C.red, FILL.red));
  }
  return out;
};
const seqBox = (x: number, y: number, t: string, color: string = C.main, fill: string = FILL.warm, w = 44) => bx(x, y, w, 30, t, color, fill, 13);
const seqFig: Figure = show([
  {
    note: '正三角形を段にならべます。1段目から1個、3個、5個、7個…。❓各段の個数には、どんな規則があるでしょう。まず、図を見てみます。',
    add: [...[1, 2, 3, 4].flatMap((r) => triRow(r, 110, 10, 30, C.main, FILL.warm)), ...[1, 2, 3, 4].map((r) => lb(215, 10 + (r - 0.5) * 26, `${r}段目：${r * 2 - 1}個`, 12, C.ink, 'start', true)), ...band(150, T('1、3、5、7、…（2ずつふえる）', 178, 14, C.ink))],
  },
  {
    note: '❓なぜ2個ずつふえる？→4段目を見ると、上向き（青）が4個、下向き（赤）が3個ならびます。1段ふえるごとに、上向きも下向きも1個ずつふえるので、合わせて2個ふえます。',
    add: [...fresh(), ...upDown(4, 160, -74, 40), lb(36, 48, '4段目', 11, C.gray, 'start', true), ...band(130, T('上向き4個（青）＋ 下向き3個（赤）＝ 7個', 160, 12, C.ink), lb(160, 190, '□段目 ＝ 上向き□個 ＋ 下向き（□−1）個', 12, C.blue, 'middle', true))],
  },
  {
    note: '問1：❓式にすると？→1段目は1個で、そこから2個ずつ、（□−1）回ふえます。❓なぜ（□−1）回？→5段あっても、段と段のあいだのすき間は4か所だからです。',
    add: [...fresh(), ...[0, 1, 2, 3, 4].map((i) => seqBox(14 + i * 60, 30, String(i * 2 + 1))), ...[0, 1, 2, 3].flatMap((i) => [ar(58 + i * 60, 45, 72 + i * 60, 45, C.blue), lb(65 + i * 60, 24, '＋2', 10, C.blue, 'middle', true)]), lb(160, 82, '5段 → すき間は4か所', 12, C.red, 'middle', true), ...band(110, T('□段目 ＝ 1 ＋ 2×（□−1）', 140, 14, C.ink), bx(50, 154, 220, 34, '＝ □×2−1（個）', C.green, FILL.green, 16))],
  },
  {
    note: '問2：第10段目の個数は？→□に10を入れて、10×2−1＝19個です。1＋2×9＝19としても同じです。',
    add: fresh(bx(30, 26, 260, 34, '10×2−1 ＝ 19個', C.green, FILL.green, 17), bx(30, 76, 260, 34, '（1＋2×9 ＝ 19個）', C.gray, FILL.gray, 14), lb(160, 140, '（10−1）＝9回ふえる', 13, C.blue, 'middle', true)),
  },
  {
    note: '問3：3、7、11、15、… は、4ずつふえる数列です。❓20番目までに、「＋4」は何回ある？→20個の数のあいだのすき間は19か所なので、19回です。',
    add: fresh(...[0, 1, 2, 3].map((i) => seqBox(10 + i * 56, 30, String(3 + 4 * i), C.main, FILL.warm, 40)), ...[0, 1, 2].flatMap((i) => [ar(52 + i * 56, 45, 64 + i * 56, 45, C.blue), lb(58 + i * 56, 24, '＋4', 10, C.blue, 'middle', true)]), lb(250, 45, '…', 18, C.ink, 'middle', true), seqBox(268, 30, '20番目', C.red, FILL.red, 46), ...band(90, T('20個の数 → すき間は19か所', 120, 14, C.red), lb(160, 152, '（20回ではない！）', 12, C.gray, 'middle', true))),
  },
  {
    note: '20番目は、はじめの3に、4を19回たします。3＋4×19＝3＋76＝79です。❓3＋4×20＝83ではだめ？→それは21番目の数になってしまいます。',
    add: band(140, bx(30, 156, 260, 34, '3 ＋ 4×19 ＝ 3 ＋ 76 ＝ 79', C.green, FILL.green, 15), lb(160, 214, '3＋4×20＝83 は、ふやしすぎ（21番目）', 12, C.red, 'middle', true)),
  },
  {
    note: '問4：1番目から20番目までの和は？❓どう足す？→1番目と20番目、2番目と19番目…と、はしからペアにします。3＋79、7＋75、11＋71 は、どれも82です。',
    add: [...fresh(), ...[3, 7, 11].map((v, i) => seqBox(14 + i * 48, 26, String(v), C.blue, FILL.blue, 40)), lb(160, 42, '…', 18, C.ink, 'middle', true), ...[71, 75, 79].map((v, i) => seqBox(170 + i * 48, 26, String(v), C.red, FILL.red, 40)), ...[[34, 286, 100], [82, 238, 88], [130, 190, 76]].flatMap((q) => [ln(q[0], 56, q[0], q[2], C.green, false, 1.6), ln(q[0], q[2], q[1], q[2], C.green, false, 1.6), ln(q[1], q[2], q[1], 56, C.green, false, 1.6)]), ...band(112, T('3＋79 ＝ 7＋75 ＝ 11＋71 ＝ 82', 140, 14, C.green))],
  },
  {
    note: '❓なぜペアの和がみな同じ？→前の数が4ふえるたびに、うしろの数は4へるので、ふえた分とへった分が打ち消しあうからです。❓ペアは何組？→20個を2つずつで10組なので、82×10＝820です。',
    add: band(112, T('前が4ふえる ↔ 後ろが4へる → 和は同じ', 136, 12, C.ink), bx(30, 150, 260, 34, '82 × 10組 ＝ 820', C.green, FILL.green, 16), lb(160, 206, '（3＋79）×20÷2 ＝ 82×10 ＝ 820', 12, C.gray, 'middle', true)),
  },
  {
    note: '答えは 問1：□×2−1（個）、問2：19個、問3：79、問4：820です。❓検算は？→問2は 1、3、5、7、9、11、13、15、17、19と10個書き出しても19になります。',
    add: fresh(lb(160, 22, '問1：□×2−1（個）', 14, C.green, 'middle', true), lb(160, 50, '問2：19個　問3：79', 14, C.green, 'middle', true), lb(160, 78, '問4：820', 14, C.green, 'middle', true), bx(20, 100, 280, 34, '検算：1、3、5、…、19 と10個書くと 19 ○', C.blue, FILL.blue, 12), lb(160, 166, '問4：ペアが10組で 82×10 ＝ 820 ○', 12, C.ink, 'middle', true)),
  },
], '規則性：等差数列と図形のならび方');

// ── kaimei_rika_3：ばねとてこ ──
const coil = (x: number, y0: number, y1: number, color: string = C.gray): DiagramElement[] => {
  const n = 8;
  const pts: P[] = [[x, y0]];
  for (let i = 1; i < n; i++) pts.push([x + (i % 2 ? 8 : -8), y0 + ((y1 - y0) * i) / n]);
  pts.push([x, y1]);
  return wire(pts, color);
};
const ceil = (x: number) => ln(x - 22, 14, x + 22, 14, C.ink, false, 3);
const leverBeam = (): DiagramElement[] => [bx(30, 74, 260, 12, undefined, C.ink, FILL.gray), pg([[160, 86], [148, 110], [172, 110]], C.main, FILL.warm), lb(160, 122, '支点', 10, C.main, 'middle', true)];
const springLever: Figure = show([
  {
    note: 'あるばねに50gのおもりをつるすと、3cmのびます。❓このばねに200gや300gをつるすと、何cmのびるでしょう。まず、おもりなしと50gのばねを比べます。',
    add: [ceil(100), ...coil(100, 14, 44), ceil(220), ...coil(220, 14, 62), bx(200, 62, 40, 22, '50g', C.gray, FILL.gray, 11), ln(196, 44, 244, 44, C.red, true), lb(252, 54, 'のび3cm', 10, C.red, 'start', true), lb(100, 62, 'おもりなし', 10, C.ink, 'middle', true), ...band(150, T('50g → 3cmのびる', 178, 14, C.ink))],
  },
  {
    note: '❓おもりをふやすと、のびはどうなる？→50g、100g、150gと重さが2倍、3倍になると、のびも3cm、6cm、9cmと2倍、3倍になります。のびは、おもりの重さに比例（ひれい）します。',
    add: [...fresh(), ceil(60), ...coil(60, 14, 44), bx(40, 44, 40, 22, '50g', C.gray, FILL.gray, 11), lb(60, 80, 'のび3cm', 10, C.red, 'middle', true), ceil(150), ...coil(150, 14, 62), bx(130, 62, 40, 22, '100g', C.gray, FILL.gray, 11), lb(150, 98, 'のび6cm', 10, C.red, 'middle', true), ceil(240), ...coil(240, 14, 80), bx(220, 80, 40, 22, '150g', C.gray, FILL.gray, 11), lb(240, 116, 'のび9cm', 10, C.red, 'middle', true), ...band(150, T('重さが2倍、3倍 → のびも2倍、3倍', 178, 13, C.ink))],
  },
  {
    note: '問1・問2：❓200gや300gは、どう計算する？→50gが何個ぶんかを考えます。200gは50gが4個ぶんなので、のびも3cmが4つぶんで 3×4＝12cm。300gは50gが6個ぶんで 3×6＝18cmです。',
    add: fresh(bx(20, 16, 280, 30, '50g → 3cm（これが1つぶん）', C.gray, FILL.gray, 13), bx(20, 58, 280, 34, '200g ＝ 50g×4　→　3×4 ＝ 12cm', C.blue, FILL.blue, 14), bx(20, 104, 280, 34, '300g ＝ 50g×6　→　3×6 ＝ 18cm', C.green, FILL.green, 14), lb(160, 170, '50gが何個ぶんか → のびもその個数ぶん', 12, C.ink, 'middle', true), lb(160, 194, '問1：12cm　問2：18cm', 14, C.red, 'middle', true)),
  },
  {
    note: '問3：てこの問題です。左30cmの位置に100gのおもり、右の□cmの位置に200gのおもりをつるして、水平につり合いました。❓そもそも、つり合うとはどういうこと？',
    add: [...fresh(), ...leverBeam(), bx(52, 92, 36, 24, '100g', C.blue, FILL.blue, 11), bx(187, 92, 36, 24, '200g', C.red, FILL.red, 11), ln(70, 62, 160, 62, C.blue), lb(115, 54, '30cm', 11, C.blue, 'middle', true), ln(160, 62, 205, 62, C.red), lb(182, 54, '□cm', 11, C.red, 'middle', true), ...band(150, T('左右のおもりで、水平につり合う', 178, 13, C.ink))],
  },
  {
    note: '❓つり合うとは？→左にかたむけようとするはたらきと、右にかたむけようとするはたらきが、同じになることです。❓そのはたらきは何で決まる？→おもりが重いほど、支点から遠いほど、大きくなります。つまり「重さ×支点からのきょり」です。',
    add: band(150, T('かたむけるはたらき ＝ 重さ × 支点からのきょり', 172, 12, C.ink), bx(30, 186, 260, 30, '左のはたらき ＝ 右のはたらき で つり合う', C.green, FILL.green, 13)),
  },
  {
    note: '左は 100×30＝3000。右は 200×□で、これが3000と等しいので、□＝3000÷200＝15cmです。❓なぜ右は近い？→200gは左のおもりの2倍の重さなので、きょりは半分の15cmでつり合います。',
    add: band(150, bx(20, 160, 130, 32, '左 100×30 ＝ 3000', C.blue, FILL.blue, 13), bx(170, 160, 130, 32, '右 200×□ ＝ 3000', C.red, FILL.red, 13), lb(160, 214, '□ ＝ 3000÷200 ＝ 15cm（問3の答え）', 13, C.green, 'middle', true)),
  },
  {
    note: '問4：左20cmに150g、右40cmに□gをつるします。左のはたらきは 150×20＝3000。右は □×40＝3000なので、□＝3000÷40＝75gです。',
    add: [...fresh(), ...leverBeam(), bx(82, 92, 36, 24, '150g', C.blue, FILL.blue, 11), bx(262, 92, 36, 24, '□g', C.red, FILL.red, 11), ln(100, 62, 160, 62, C.blue), lb(130, 54, '20cm', 11, C.blue, 'middle', true), ln(160, 62, 280, 62, C.red), lb(220, 54, '40cm', 11, C.red, 'middle', true), ...band(150, T('150×20 ＝ 3000　　□×40 ＝ 3000', 170, 13, C.ink), lb(160, 204, '□ ＝ 3000÷40 ＝ 75g', 15, C.green, 'middle', true))],
  },
  {
    note: '答えは 問1：12cm、問2：18cm、問3：15cm、問4：75gです。❓検算は？→問3は 200×15＝3000で左の3000と同じ、問4は 75×40＝3000で同じです。',
    add: fresh(lb(160, 22, '問1：12cm　問2：18cm', 14, C.green, 'middle', true), lb(160, 50, '問3：15cm　問4：75g', 14, C.green, 'middle', true), bx(30, 76, 260, 30, '問3　200×15 ＝ 3000 ○', C.blue, FILL.blue, 13), bx(30, 116, 260, 30, '問4　75×40 ＝ 3000 ○', C.blue, FILL.blue, 13), lb(160, 176, '左のはたらきと同じ3000になった', 12, C.ink, 'middle', true)),
  },
], 'ばねののびとてこのつり合い');

// ── kaimei_sansu_max01：DE∥BC のときの相似比・面積比 ──
const TA: P = [150, 18], TB: P = [60, 128], TC: P = [260, 128], TD: P = [114, 62], TE: P = [194, 62];
const cellGrid = (n: number, x0: number, y0: number, sz: number, color: string, fill: string): DiagramElement[] => {
  const els: DiagramElement[] = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) els.push(bx(x0 + j * sz, y0 + i * sz, sz, sz, undefined, color, fill));
  return els;
};
const similar: Figure = show([
  {
    note: '△ABCで、辺AB上に点D、辺AC上に点EをDE∥BCとなるようにとります。AD：DB＝2：3です。❓まず、△ADEと△ABCは、どんな関係の三角形でしょう。',
    add: [pg([TA, TB, TC], C.main, FILL.warm), ln(TD[0], TD[1], TE[0], TE[1], C.blue, false, 2.4), lb(150, 10, 'A', 12, C.ink, 'middle', true), lb(52, 136, 'B', 12, C.ink, 'end', true), lb(268, 136, 'C', 12, C.ink, 'start', true), lb(106, 62, 'D', 12, C.ink, 'end', true), lb(202, 62, 'E', 12, C.ink, 'start', true), lb(124, 36, '2', 12, C.red, 'end', true), lb(80, 92, '3', 12, C.blue, 'end', true), ...band(150, T('DE∥BC、AD：DB ＝ 2：3', 178, 14, C.ink))],
  },
  {
    note: '❓なぜ相似（形が同じ）といえる？→∠Aは2つの三角形で共通です。さらにDE∥BCなので、同位角で∠ADE＝∠ABC。2組の角が等しいので、△ADEは△ABCを縮めた形（相似）になります。',
    add: [pg([TA, TD, TE], C.red, FILL.red), lb(108, 76, '∠ADE', 9, C.red, 'end', true), lb(66, 122, '∠ABC', 9, C.red, 'start', true), ...band(150, T('∠Aが共通　∠ADE ＝ ∠ABC（同位角）', 172, 13, C.red), lb(160, 202, '2組の角が等しい → 相似', 13, C.green, 'middle', true))],
  },
  {
    note: '問1：❓相似比は何と何の比？→対応する辺の比です。ADに対応するのはABです。AB＝AD＋DB＝2＋3＝5なので、AD：AB＝2：5です。',
    add: band(150, bx(60, 158, 80, 26, 'AD 2', C.red, FILL.red, 12), bx(140, 158, 120, 26, 'DB 3', C.blue, FILL.blue, 12), ln(60, 194, 260, 194, C.gray, false, 1.6), lb(160, 206, 'AB ＝ 2＋3 ＝ 5', 12, C.ink, 'middle', true), lb(160, 226, '相似比　AD：AB ＝ 2：5', 13, C.green, 'middle', true)),
  },
  {
    note: '問2：❓面積比は、なぜ相似比の2乗？→1辺2の正方形と1辺5の正方形（相似比2：5）に、1×1のマスをしきつめると、4個と25個。辺が何倍かの2回ぶん（たて・よこ）、面積はふえるからです。',
    add: fresh(...cellGrid(2, 50, 54, 16, C.red, FILL.red), ...cellGrid(5, 140, 20, 16, C.blue, FILL.blue), lb(66, 46, '1辺2', 11, C.red, 'middle', true), lb(180, 12, '1辺5', 11, C.blue, 'middle', true), lb(66, 98, '4個', 12, C.red, 'middle', true), lb(180, 112, '25個', 12, C.blue, 'middle', true), ...band(130, T('相似比 2：5 → 面積比 2×2：5×5 ＝ 4：25', 160, 13, C.green))),
  },
  {
    note: '問3：DE＝8cmのとき、BCは？❓相似比2：5を使うと？→DEが2ぶんで8cmなので、1ぶんは8÷2＝4cm。BCは5ぶんなので、4×5＝20cmです。',
    add: fresh(bx(30, 26, 88, 28, undefined, C.red, FILL.red), bx(30, 70, 220, 28, undefined, C.blue, FILL.blue), lb(126, 40, 'DE　8cm', 12, C.red, 'start', true), lb(258, 84, 'BC　？', 12, C.blue, 'start', true), ln(74, 26, 74, 54, C.gray, false, 1.4), ...[1, 2, 3, 4].map((k) => ln(30 + 44 * k, 70, 30 + 44 * k, 98, C.gray, false, 1.4)), lb(74, 112, '1ぶん＝4cm', 11, C.ink, 'middle', true), ...band(130, T('2ぶんが8cm → 1ぶん 4cm', 152, 13, C.ink), bx(60, 168, 200, 34, 'BC ＝ 4×5 ＝ 20cm', C.green, FILL.green, 15))),
  },
  {
    note: '問4：台形DBCEの面積が27cm²のとき、△ABCの面積は？❓台形は面積比で何ぶん？→△ABCが25ぶん、小さい△ADEが4ぶんなので、台形は 25−4＝21ぶんです。',
    add: fresh(lb(160, 18, '△ABC ＝ 25ぶん', 13, C.ink, 'middle', true), ln(30, 30, 280, 30, C.gray, false, 1.6), bx(30, 38, 40, 36, '4', C.red, FILL.red, 14), bx(70, 38, 210, 36, '21', C.blue, FILL.blue, 15), lb(50, 88, '△ADE', 10, C.red, 'middle', true), lb(175, 88, '台形DBCE', 11, C.blue, 'middle', true), ...band(110, T('台形 ＝ 全体 − 小さい三角形', 138, 13, C.ink), bx(60, 152, 200, 34, '25 − 4 ＝ 21ぶん', C.green, FILL.green, 16))),
  },
  {
    note: '❓1ぶんは何cm²？→21ぶんが27cm²なので、1ぶんは27÷21＝9/7cm²。△ABCは25ぶんなので、9/7×25＝225/7＝32と1/7cm²です。',
    add: fresh(bx(20, 20, 280, 32, '台形　21ぶん ＝ 27cm²', C.blue, FILL.blue, 14), bx(20, 62, 280, 32, '1ぶん ＝ 27÷21 ＝ 9/7cm²', C.purple, FILL.purple, 14), bx(20, 104, 280, 32, '△ABC ＝ 9/7×25 ＝ 225/7cm²', C.green, FILL.green, 14), lb(160, 160, '＝ 32と1/7cm²', 14, C.green, 'middle', true)),
  },
  {
    note: '答えは 問1：2：5、問2：4：25、問3：20cm、問4：225/7cm²（32と1/7cm²）です。❓検算は？→21ぶん×9/7＝27cm²で、条件と一致します。△ADEは4×9/7＝36/7cm²で、あわせて25ぶんです。',
    add: fresh(lb(160, 20, '問1：2：5　問2：4：25', 14, C.green, 'middle', true), lb(160, 48, '問3：20cm', 14, C.green, 'middle', true), lb(160, 76, '問4：225/7cm²', 14, C.green, 'middle', true), bx(30, 100, 260, 32, '検算：21 × 9/7 ＝ 27cm² ○', C.blue, FILL.blue, 14), lb(160, 160, '△ADE 36/7 ＋ 台形 27 ＝ 225/7 ○', 12, C.ink, 'middle', true)),
  },
], 'DE∥BC の相似比と面積比');

// ── toin_sansu_01：正六角形は正三角形の何倍か ──
const HX = { cx: 100, cy: 76, R: 52 };
const HXp = hexP(HX.cx, HX.cy, HX.R);
const hxTri = (i: number, color: string, fill: string) => pg([[HX.cx, HX.cy], HXp[i], HXp[(i + 1) % 6]], color, fill);
const hexSix: Figure = show([
  {
    note: '正六角形と、その1辺と同じ長さを1辺とする正三角形があります。正六角形の面積は、正三角形の何倍でしょう。❓どうやって調べればいい？→正六角形を、正三角形とくらべやすい形に分けてみます。',
    add: [pg(HXp, C.main, FILL.warm), ln(HXp[4][0], HXp[4][1], HXp[5][0], HXp[5][1], C.red, false, 3.5), pg([[215, 122], [267, 122], [241, 77]], C.blue, FILL.blue), ln(215, 122, 267, 122, C.red, false, 3.5), lb(241, 66, '正三角形', 11, C.blue, 'middle', true), lb(100, 134, '1辺', 10, C.red, 'middle', true), lb(241, 136, '同じ長さの1辺', 10, C.red, 'middle', true), ...band(150, T('正六角形は、この正三角形の何倍？', 178, 14, C.ink))],
  },
  {
    note: '中心から6つの頂点へ線を引くと、正六角形は同じ形の三角形6個に分かれます。❓この三角形は、どんな形でしょう。',
    add: [...HXp.map((p) => ln(HX.cx, HX.cy, p[0], p[1], C.gray, false, 1.4)), ...band(150, T('中心から頂点へ線 → 三角形が6個', 178, 14, C.ink))],
  },
  {
    note: '❓中心の角は何度？→中心のまわりの360°を、同じ三角形6個で分けるので、360÷6＝60°です。',
    add: [hxTri(0, C.red, FILL.red), lb(118, 80, '60°', 10, C.red, 'middle', true), ...band(150, T('中心の角 ＝ 360÷6 ＝ 60°', 178, 14, C.red))],
  },
  {
    note: '❓残りの2つの角は？→この三角形の2辺は、どちらも中心から頂点までの長さ（半径）で同じなので、2つの角は等しく、（180−60）÷2＝60°ずつです。3つの角がすべて60°なので、正三角形です。',
    add: [lb(140, 70, '60°', 9, C.red, 'end', true), lb(122, 44, '60°', 9, C.red, 'end', true), ...band(150, T('（180−60）÷2 ＝ 60° → 3つとも60°', 172, 13, C.red), lb(160, 202, '3つの角が60° ＝ 正三角形', 14, C.green, 'middle', true))],
  },
  {
    note: '❓この正三角形の1辺は、何の長さ？→正六角形のまわりの1辺そのものです（赤い線）。問題の正三角形も、1辺が正六角形の1辺と同じなので、同じ大きさの正三角形です。',
    add: [ln(HXp[0][0], HXp[0][1], HXp[1][0], HXp[1][1], C.red, false, 3.5), ...band(150, T('1辺が同じ長さ → ぴったり重なる', 172, 14, C.ink), lb(160, 202, 'どちらも同じ大きさの正三角形', 13, C.blue, 'middle', true))],
  },
  {
    note: '❓では、正六角形は正三角形何個ぶん？→同じ大きさの正三角形が6個ならんでいるので、6個ぶんです。つまり、面積は6倍です。',
    add: [...fresh(), pg(HXp, C.main, FILL.warm), pg([[215, 122], [267, 122], [241, 77]], C.blue, FILL.blue), lb(241, 66, '正三角形', 11, C.blue, 'middle', true), ...[0, 1, 2, 3, 4, 5].map((i) => hxTri(i, C.main, FILL.green)), ...[0, 1, 2, 3, 4, 5].map((i) => lb((HX.cx * 1 + HXp[i][0] + HXp[(i + 1) % 6][0]) / 3, (HX.cy + HXp[i][1] + HXp[(i + 1) % 6][1]) / 3 + 4, String(i + 1), 12, C.ink, 'middle', true)), ...band(150, T('正三角形 6個ぶん', 170, 14, C.ink), bx(70, 184, 180, 34, '6倍', C.green, FILL.green, 18))],
  },
  {
    note: '答えは6倍です。❓検算は？→半径と同じ長さをコンパスで円周にとっていくと、ちょうど6回で1周します。これは、半径と同じ1辺の正六角形が円にぴったり入ることを表していて、6個の正三角形とも合います。',
    add: [...fresh(), ci(HX.cx, HX.cy, HX.R, undefined, C.blue, FILL.blue), pg(HXp, C.main, FILL.warm), ...HXp.map((p) => ln(HX.cx, HX.cy, p[0], p[1], C.gray, false, 1.2)), bx(190, 40, 110, 40, '答え　6倍', C.green, FILL.green, 15), lb(245, 106, '半径の長さを', 10, C.ink, 'middle', true), lb(245, 120, '6回とると1周', 10, C.ink, 'middle', true), ...band(150, T('検算：半径と同じ長さ6つで、円を1周', 178, 13, C.blue))],
  },
], '正六角形は正三角形6個ぶん');

// ── toin_sansu_03：正方形の1辺を3cmのばす ──
const sq3 = () => [bx(50, 14, 90, 90, '', C.main, FILL.warm)];
const squareGrow: Figure = show([
  {
    note: 'ある正方形の1辺を3cmのばしたら、面積が75cm²ふえました。もとの1辺は何cmでしょう。❓まず、のばしたあとの形を図にかいてみます。',
    add: [...sq3(), lb(95, 62, 'もとの正方形', 11, C.ink, 'middle', true), lb(95, 76, '1辺□cm', 11, C.red, 'middle', true), ln(164, 14, 164, 128, C.gray, true), ln(50, 128, 164, 128, C.gray, true), ln(140, 14, 164, 14, C.gray, true), ln(50, 104, 50, 128, C.gray, true), lb(152, 8, '3cm', 10, C.blue, 'middle', true), lb(170, 116, '3cm', 10, C.blue, 'start', true), ...band(150, T('たて・よこ、両方を3cmのばす', 178, 14, C.ink))],
  },
  {
    note: '❓ふえた部分は、どんな形？→3つに分けられます。右の長方形（□×3）、下の長方形（□×3）、すみの小さな正方形（3×3）です。',
    add: [bx(140, 14, 24, 90, undefined, C.blue, FILL.blue), bx(50, 104, 90, 24, undefined, C.blue, FILL.blue), bx(140, 104, 24, 24, undefined, C.red, FILL.red), lb(206, 50, '右：長方形 □×3', 11, C.blue, 'start', true), lb(206, 78, '下：長方形 □×3', 11, C.blue, 'start', true), lb(206, 112, 'すみ：正方形 3×3', 11, C.red, 'start', true), ...band(150, T('ふえた部分 ＝ 長方形2つ ＋ 正方形1つ', 178, 13, C.ink))],
  },
  {
    note: '❓すみの正方形の面積は？→3×3＝9cm²です。ふえた75cm²から、これを引くと、長方形2つぶんだけが残ります。75−9＝66cm²です。',
    add: band(150, bx(20, 160, 130, 32, 'すみ　3×3 ＝ 9cm²', C.red, FILL.red, 13), bx(170, 160, 130, 32, '75 − 9 ＝ 66cm²', C.blue, FILL.blue, 13), lb(160, 214, '66cm² ＝ 長方形2つぶん', 13, C.ink, 'middle', true)),
  },
  {
    note: '❓長方形1つぶんは？→2つは同じ大きさなので、66÷2＝33cm²です。',
    add: band(150, T('2つは同じ大きさ', 168, 13, C.ink), bx(50, 180, 220, 34, '66 ÷ 2 ＝ 33cm²（1つぶん）', C.blue, FILL.blue, 15)),
  },
  {
    note: '❓そこから、もとの1辺は？→長方形は、よこ3cm・たて□cmで面積33cm²です。長方形の面積はたて×よこなので、□＝33÷3＝11cmです。',
    add: band(150, T('長方形：たて□ × よこ3 ＝ 33', 168, 13, C.ink), bx(50, 180, 220, 34, '□ ＝ 33 ÷ 3 ＝ 11cm', C.green, FILL.green, 16)),
  },
  {
    note: '❓答えは合っている？→もとの正方形は 11×11＝121cm²。3cmのばすと 14×14＝196cm²。196−121＝75cm²で、問題の条件と一致します。',
    add: fresh(bx(30, 22, 260, 32, 'もと　11×11 ＝ 121cm²', C.blue, FILL.blue, 14), bx(30, 66, 260, 32, 'のばす　14×14 ＝ 196cm²', C.purple, FILL.purple, 14), bx(30, 110, 260, 32, '196 − 121 ＝ 75cm² ○', C.green, FILL.green, 14), lb(160, 172, '問題の条件と一致した', 12, C.ink, 'middle', true)),
  },
  {
    note: '答えは11cmです。❓75÷3＝25cmとしたらなぜ×？→のばすのは、たてとよこの両方です。ふえた部分は長方形2つに、すみの正方形もあるので、75を3でわっただけでは求まりません。',
    add: fresh(bx(30, 26, 260, 38, '答え　11cm', C.green, FILL.green, 18), bx(30, 84, 260, 34, '75÷3 ＝ 25cm は ×', C.red, FILL.red, 15), lb(160, 140, '長方形2つ ＋ すみの正方形 を忘れている', 12, C.red, 'middle', true), lb(160, 166, '図をかいて、ふえた部分の形を確かめる', 12, C.ink, 'middle', true)),
  },
], '正方形の1辺をのばしたときの面積');

// ── toin_sansu_04：往復の平均の速さ ──
const avgSpeed: Figure = show([
  {
    note: 'A地点からB地点まで、行きは時速4km、帰りは時速6kmで往復しました。平均の速さは時速何kmでしょう。❓まず、道のりを図にします。',
    add: [ci(30, 80, 11, 'A', C.ink, FILL.gray, 12), ci(290, 80, 11, 'B', C.ink, FILL.gray, 12), ar(46, 62, 274, 62, C.blue), lb(160, 50, '行き　時速4km', 12, C.blue, 'middle', true), ar(274, 98, 46, 98, C.red), lb(160, 116, '帰り　時速6km', 12, C.red, 'middle', true), ...band(150, T('往復の平均の速さは？', 178, 14, C.ink))],
  },
  {
    note: '❓(4＋6)÷2＝5kmでいい？→いけません。行きは遅いので、帰りよりも長い時間がかかります。遅い速さで走った時間のほうが長いので、平均は5kmより遅い、4kmに近い値になるはずです。',
    add: band(150, bx(40, 160, 240, 34, '(4＋6)÷2 ＝ 5  は ×', C.red, FILL.red, 16), lb(160, 214, '遅い行きのほうが、時間が長い', 12, C.ink, 'middle', true)),
  },
  {
    note: '❓では、平均の速さとは？→「往復の道のり全体」を「かかった時間全体」でわったものです。速さをたして2でわるのではありません。',
    add: band(150, T('平均の速さ ＝ 全体の道のり ÷ 全体の時間', 172, 13, C.purple), bx(40, 184, 240, 32, '速さ ＝ 道のり ÷ 時間（全体で）', C.purple, FILL.purple, 13)),
  },
  {
    note: '❓道のりが書いてないけど、どうする？→どんな道のりでも答えは同じになるので、計算しやすい数に決めます。4と6の公倍数12kmにすると、時間が整数になります。',
    add: [lb(160, 82, '片道 12km', 12, C.ink, 'middle', true), ...band(150, T('道のりを 12km と決める（4と6の公倍数）', 178, 13, C.ink))],
  },
  {
    note: '行きは 12÷4＝3時間、帰りは 12÷6＝2時間かかります。❓全体では？→時間は 3＋2＝5時間、道のりは 12×2＝24kmです。',
    add: [...fresh(), bx(40, 34, 120, 30, '行き　3時間', C.blue, FILL.blue, 13), bx(160, 34, 80, 30, '帰り　2時間', C.red, FILL.red, 12), lb(100, 80, '12÷4＝3', 12, C.blue, 'middle', true), lb(200, 80, '12÷6＝2', 12, C.red, 'middle', true), ln(40, 98, 240, 98, C.gray, false, 1.6), lb(140, 112, '合計 5時間', 12, C.ink, 'middle', true), ...band(130, T('往復の道のり ＝ 12×2 ＝ 24km', 156, 14, C.ink))],
  },
  {
    note: '❓平均の速さは？→全体の道のり24kmを、全体の時間5時間でわって、24÷5＝4.8です。予想どおり、5より小さく、4に近い値になりました。',
    add: band(130, bx(40, 150, 240, 36, '24 ÷ 5 ＝ 4.8（時速4.8km）', C.green, FILL.green, 16), lb(160, 210, '4と5のあいだで、4に近い ○', 12, C.ink, 'middle', true)),
  },
  {
    note: '答えは時速4.8kmです。❓検算は？→道のりを24kmに決めても、行きは6時間、帰りは4時間で、48÷10＝4.8と同じになります。道のりを変えても答えが変わらないので、12kmと決めてよかったのです。',
    add: fresh(bx(30, 22, 260, 36, '答え　時速4.8km', C.green, FILL.green, 18), bx(30, 74, 260, 30, '片道24km：行き6時間 ＋ 帰り4時間', C.gray, FILL.gray, 12), bx(30, 112, 260, 30, '48 ÷ 10 ＝ 4.8 ○', C.blue, FILL.blue, 14), lb(160, 172, '（4＋6）÷2 ＝ 5 は、時間の長さを忘れたまちがい', 11, C.red, 'middle', true)),
  },
], '往復の平均の速さ');

// ── 電気の回路（直列・並列）の共通部品 ──
const parXs = (x0: number, w: number, n: number) => Array.from({ length: n }, (_, i) => x0 + (w * (i + 1)) / (n + 1));

// ── toin_rika_01：直列回路（電池3個・抵抗2と4） ──
const SER = () => seriesCircuit(60, 40, 200, 80, '電池3個', ['抵抗2', '抵抗4'], 56);
const serial3: Figure = show([
  {
    note: '電池3個に、抵抗2の電熱線と抵抗4の電熱線を直列につなぎました。流れる電流と、各電熱線の発熱を求めます。❓まず、電流はどうやって決まるのでしょう。',
    add: [...SER(), ...band(150, T('電池3個 ＋ 抵抗2・抵抗4（直列）', 178, 13, C.ink))],
  },
  {
    note: '電池1個・豆電球1個（抵抗1）の回路の電流を①と決めています。❓電流は何で決まる？→電池が多いほど大きく、抵抗が大きいほど小さくなるので、電流＝電池の数÷抵抗です。',
    add: band(150, T('電流 ＝ 電池の数 ÷ 抵抗', 168, 14, C.blue), lb(160, 200, '（電池1個・抵抗1のとき、電流は①）', 12, C.gray, 'middle', true)),
  },
  {
    note: '❓直列のとき、全体の抵抗は？→電流の通り道が1本で、抵抗を順に通りぬけるので、抵抗はたし算になります。2＋4＝6を、1本の抵抗6にまとめて考えます。',
    add: [lb(160, 82, '全体の抵抗 ＝ 2＋4 ＝ 6', 13, C.red, 'middle', true), ...band(150, bx(60, 168, 200, 34, '2 ＋ 4 ＝ 6', C.red, FILL.red, 16))],
  },
  {
    note: '❓電流はいくつ？→電池3個を、全体の抵抗6でわって、3÷6＝1/2です。❓電流は、抵抗2と抵抗4で同じ？→直列は通り道が1本なので、どこでも同じ1/2が流れます。',
    add: [lb(268, 82, '1/2', 13, C.blue, 'start', true), lb(160, 136, '1/2', 13, C.blue, 'middle', true), ...band(150, bx(60, 160, 200, 34, '3 ÷ 6 ＝ 1/2', C.blue, FILL.blue, 16), lb(160, 214, '直列は、どこでも同じ電流', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓発熱は何で決まる？→発熱＝電流×電流×抵抗です（電流①・抵抗1のときが1）。❓なぜ電流を2回かける？→電流が2倍になると、発熱は2×2＝4倍になることが実験で分かっているからです。',
    add: band(150, T('発熱 ＝ 電流 × 電流 × 抵抗', 168, 14, C.purple), lb(160, 200, '電流が2倍 → 発熱は 2×2＝4倍', 12, C.ink, 'middle', true)),
  },
  {
    note: '抵抗2の発熱は 1/2×1/2×2＝1/2、抵抗4の発熱は 1/2×1/2×4＝1です。電流が同じでも、抵抗が大きいほうが発熱も大きくなります。',
    add: [lb(127, 16, '発熱 1/2', 10, C.red, 'middle', true), lb(193, 16, '発熱 1', 10, C.red, 'middle', true), ...band(150, bx(30, 158, 260, 28, '抵抗2　1/2×1/2×2 ＝ 1/2', C.blue, FILL.blue, 13), bx(30, 190, 260, 28, '抵抗4　1/2×1/2×4 ＝ 1', C.green, FILL.green, 13))],
  },
  {
    note: '❓2つの発熱の比は？→1/2：1＝1：2です。これは抵抗の比2：4＝1：2と同じです。直列は電流が同じなので、発熱の比は抵抗の比になります。',
    add: band(150, bx(30, 158, 260, 28, '発熱の比　1/2：1 ＝ 1：2', C.purple, FILL.purple, 13), bx(30, 190, 260, 28, '抵抗の比　2：4 ＝ 1：2（同じ）', C.gray, FILL.gray, 13)),
  },
  {
    note: '答えは、電流1/2、抵抗2の発熱1/2、抵抗4の発熱1です。❓検算は？→発熱の合計は 1/2＋1＝3/2。これは、抵抗6にまとめて 1/2×1/2×6＝3/2としても同じになります。',
    add: fresh(bx(30, 18, 260, 32, '電流　1/2', C.blue, FILL.blue, 15), bx(30, 58, 260, 32, '発熱　抵抗2：1/2　抵抗4：1', C.green, FILL.green, 14), bx(30, 98, 260, 32, '検算　1/2＋1 ＝ 3/2', C.gray, FILL.gray, 13), lb(160, 152, '1/2×1/2×6 ＝ 3/2（まとめても同じ）○', 12, C.ink, 'middle', true), lb(160, 180, '直列で電流が分かれると考えるのは×', 11, C.red, 'middle', true)),
  },
], '直列回路の電流と発熱');

// ── toin_rika_03：並列回路（電池2個・抵抗3と6） ──
const PAR = () => parallelCircuit(60, 30, 200, 90, '電池2個', ['抵抗3', '抵抗6']);
const parallel2: Figure = show([
  {
    note: '電池2個に、抵抗3の電熱線と抵抗6の電熱線を並列につなぎました。電池から出る電流（回路全体の電流）を求めます。❓並列は、直列とどうちがうのでしょう。',
    add: [...PAR(), ...band(150, T('電池2個 ＋ 抵抗3・抵抗6（並列）', 178, 13, C.ink))],
  },
  {
    note: '❓並列だと、各枝はどうなる？→どの枝も、両はしが電池の＋側と−側（赤い線）に直接つながっています。だから、どの枝にも電池2個ぶんの力がかかり、その枝だけを電池につないだ回路と同じになります。',
    add: [ln(60, 30, 193, 30, C.red, false, 3.4), ln(60, 120, 193, 120, C.red, false, 3.4), ...band(150, T('各枝は、電池に直接つながったのと同じ', 172, 13, C.red), lb(160, 202, '枝の電流 ＝ 電池の数 ÷ その枝の抵抗', 13, C.blue, 'middle', true))],
  },
  {
    note: '抵抗3の枝を流れる電流は、電池2個を抵抗3でわって 2÷3＝2/3です。',
    add: [lb(134, 100, '2/3', 12, C.blue, 'start', true), ...band(150, bx(40, 168, 240, 34, '抵抗3の枝　2 ÷ 3 ＝ 2/3', C.blue, FILL.blue, 15))],
  },
  {
    note: '抵抗6の枝は 2÷6＝1/3です。❓なぜ抵抗3の枝より小さい？→抵抗が2倍になると、電流が流れにくくなって半分になるからです（2/3の半分が1/3）。',
    add: [lb(201, 100, '1/3', 12, C.red, 'start', true), ...band(150, bx(40, 168, 240, 34, '抵抗6の枝　2 ÷ 6 ＝ 1/3', C.red, FILL.red, 15), lb(160, 214, '抵抗が2倍 → 電流は半分', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓電池から出る電流は？→枝に分かれた電流が、あとで1つに合流するので、枝の電流をたし算します。2/3＋1/3＝①です。',
    add: [lb(72, 20, '全体 ①', 12, C.green, 'middle', true), ...band(150, bx(40, 168, 240, 34, '2/3 ＋ 1/3 ＝ ①', C.green, FILL.green, 16))],
  },
  {
    note: '❓回路全体の抵抗は？→電池2個÷電流①＝2です。抵抗3や6のどちらよりも小さくなっています。❓なぜ小さい？→道が2本にふえて、電流が通りやすくなるからです。',
    add: band(150, T('全体の抵抗 ＝ 2 ÷ ① ＝ 2', 168, 14, C.ink), lb(160, 200, '3 や 6 より小さい（道がふえて通りやすい）', 12, C.purple, 'middle', true)),
  },
  {
    note: '答えは①です。❓並列の抵抗を 3＋6＝9とたしたらどうなる？→電流が 2÷9＝2/9と、枝1本の電流2/3よりも小さくなってしまい、道がふえたのにおかしい結果になります。並列は、抵抗をたしません。',
    add: fresh(bx(40, 20, 240, 36, '答え　①', C.green, FILL.green, 18), bx(40, 72, 240, 30, '2/3 ＋ 1/3 ＝ ①', C.blue, FILL.blue, 14), lb(160, 130, '検算　全体の抵抗 2 ＜ 3 ＜ 6', 12, C.ink, 'middle', true), lb(160, 158, '3＋6＝9 とたすと 2÷9＝2/9（枝1本より小さい）×', 11, C.red, 'middle', true), lb(160, 184, '並列は「道がふえる」ので、抵抗は小さくなる', 12, C.ink, 'middle', true)),
  },
], '並列回路の電流');

// ── toin_rika_06：電流③・抵抗5の発熱 ──
const heat45: Figure = show([
  {
    note: '抵抗5の電熱線に、電流③を1分間流しました。電流①・抵抗1・1分のときの発熱を1として、発熱はいくつでしょう。',
    add: [ar(16, 66, 108, 66, C.blue), lb(60, 52, '電流③', 12, C.blue, 'middle', true), bx(110, 46, 100, 40, '抵抗5の電熱線', C.main, FILL.warm, 12), ar(212, 66, 304, 66, C.blue), ...band(150, T('電流③ を 1分間 → 発熱は？', 172, 14, C.ink), lb(160, 202, '（基準：電流①・抵抗1・1分で 発熱1）', 12, C.gray, 'middle', true))],
  },
  {
    note: '❓発熱は何で決まる？→「電流」「抵抗」「流す時間」の3つで決まります。1つずつ、基準の何倍になるかを調べます。',
    add: fresh(bx(20, 30, 84, 44, '電流', C.blue, FILL.blue, 15), bx(118, 30, 84, 44, '抵抗', C.main, FILL.warm, 15), bx(216, 30, 84, 44, '時間', C.green, FILL.green, 15), lb(160, 110, '3つが、発熱を決める', 14, C.ink, 'middle', true), ...band(150, T('1つずつ、基準の何倍かを調べる', 178, 13, C.ink))),
  },
  {
    note: '❓電流が①から③に3倍になると、発熱は？→電流は「2回かける」ので、3×3＝9倍です。マスで表すと、1マスだった発熱が、たて3×よこ3の9マスになります。',
    add: fresh(bx(50, 60, 24, 24, undefined, C.blue, FILL.blue), lb(62, 48, '電流①', 11, C.blue, 'middle', true), lb(62, 100, '1マス', 11, C.ink, 'middle', true), ...cellGrid(3, 150, 30, 24, C.red, FILL.red), lb(186, 20, '電流③', 11, C.red, 'middle', true), lb(186, 114, '3×3 ＝ 9マス', 12, C.red, 'middle', true), ...band(150, T('電流が3倍 → 発熱は 3×3 ＝ 9倍', 178, 14, C.red))),
  },
  {
    note: '❓抵抗が5だと、発熱は？→抵抗1の電熱線が5本、同じ電流で直列につながっていると考えます。どの電熱線にも同じ電流が流れるので、1本ぶんの発熱の5倍になります。抵抗が5倍なら、発熱も5倍です。',
    add: fresh(...[0, 1, 2, 3, 4].map((i) => bx(16 + i * 58, 40, 50, 40, '抵抗1', C.main, FILL.warm, 11)), ...[0, 1, 2, 3].map((i) => ar(66 + i * 58, 60, 74 + i * 58, 60, C.blue)), lb(160, 104, '抵抗5 ＝ 抵抗1が5本ぶん', 13, C.ink, 'middle', true), ...band(150, T('同じ電流で 発熱は 5倍', 172, 14, C.main), lb(160, 202, '発熱は、抵抗に比例する', 12, C.gray, 'middle', true))),
  },
  {
    note: '❓時間は？→基準も1分で、時間はまったく同じなので、かける数は1です（2分なら2倍、3分なら3倍になります）。',
    add: band(150, bx(40, 160, 240, 34, '時間　1分 ÷ 1分 ＝ 1倍', C.green, FILL.green, 15), lb(160, 214, '2分なら2倍、3分なら3倍', 12, C.gray, 'middle', true)),
  },
  {
    note: '3つをあわせると、電流9倍×抵抗5倍×時間1倍で、9×5＝45です。9マスのまとまりが、5本ぶんあるということです。',
    add: fresh(...[0, 1, 2, 3, 4].flatMap((k) => cellGrid(3, 16 + k * 58, 30, 14, C.red, FILL.red)), ...[0, 1, 2, 3, 4].map((k) => lb(37 + k * 58, 86, '9', 13, C.red, 'middle', true)), ...band(110, T('9マス × 5本 ＝ 45', 140, 16, C.green), lb(160, 176, '電流9倍 × 抵抗5倍 × 時間1倍', 13, C.ink, 'middle', true))),
  },
  {
    note: '答えは45です。❓検算は？→順番を変えても、3×（3×5）＝3×15＝45で同じです。電流を1回しかかけないと 3×5＝15となってしまうので、電流は2回かけます。',
    add: fresh(bx(40, 22, 240, 38, '答え　45', C.green, FILL.green, 20), bx(40, 76, 240, 32, '検算　3×（3×5）＝ 3×15 ＝ 45 ○', C.blue, FILL.blue, 13), lb(160, 140, '電流を1回しかかけない 3×5＝15 は ×', 12, C.red, 'middle', true), lb(160, 166, '電流は「2回」かける', 13, C.ink, 'middle', true)),
  },
], '発熱＝電流×電流×抵抗×時間');

// ── toin_rika_r01：直列と並列の比較（豆電球A・B、電池2個） ──
const R1S = () => seriesCircuit(50, 46, 110, 56, '電池2個', ['A', 'B'], 34);
const R1P = () => parallelCircuit(200, 46, 120, 56, '電池2個', ['A', 'B'], 30);
const r1Xs = parXs(200, 120, 2);
const bulbs: Figure = show([
  {
    note: '豆電球A（抵抗1）とB（抵抗2）を、電池2個で、直列（実験1）と並列（実験2）につなぎます。電池1個・豆電球1個の電流を①と決めています。❓まず、直列の回路全体の抵抗を調べます。',
    add: [...R1S(), ...R1P(), lb(105, 16, '実験1（直列）', 11, C.ink, 'middle', true), lb(250, 16, '実験2（並列）', 11, C.ink, 'middle', true), ...band(150, T('A：抵抗1　B：抵抗2　電池は2個', 178, 13, C.ink))],
  },
  {
    note: '問1：実験1では、全体の電流が2/3と分かっています。❓抵抗はいくつ？→電流＝電池の数÷抵抗なので、抵抗＝電池の数÷電流＝2÷2/3＝3です。',
    add: [lb(105, 122, '電流 2/3', 12, C.blue, 'middle', true), ...band(150, bx(30, 160, 260, 32, '抵抗 ＝ 2 ÷ 2/3 ＝ 3', C.blue, FILL.blue, 15), lb(160, 214, '確かめ：直列は たして 1＋2 ＝ 3 ○', 12, C.ink, 'middle', true))],
  },
  {
    note: '問2：実験2は並列です。❓AとBの電流は？→各枝が電池2個に直接つながるので、Aは2÷1＝②、Bは2÷2＝①です。❓全体は？→枝の電流が合流するので、②＋①＝③です。',
    add: [lb(r1Xs[0], 120, '②', 13, C.blue, 'middle', true), lb(r1Xs[1], 120, '①', 13, C.red, 'middle', true), ...band(150, bx(20, 160, 130, 32, 'A　2÷1 ＝ ②', C.blue, FILL.blue, 13), bx(170, 160, 130, 32, 'B　2÷2 ＝ ①', C.red, FILL.red, 13), lb(160, 214, '全体 ②＋① ＝ ③', 14, C.green, 'middle', true))],
  },
  {
    note: '問3：Aの明るさを比べます。❓明るさはどう決まる？→電流×電流です（電流が2倍なら明るさは4倍）。実験1のAは、電流が全体と同じ2/3なので、2/3×2/3＝4/9です。',
    add: band(150, T('明るさ ＝ 電流 × 電流', 168, 14, C.purple), bx(30, 182, 260, 32, '実験1のA　2/3×2/3 ＝ 4/9', C.blue, FILL.blue, 14)),
  },
  {
    note: '実験2のAは電流が②なので、明るさは 2×2＝4です。4/9と4をくらべると、4のほうがずっと大きいので、実験2（並列）のAのほうが明るくなります。',
    add: band(150, lb(112, 168, '実験1のA　4/9', 11, C.blue, 'end', true), bx(120, 158, 18, 20, undefined, C.blue, FILL.blue), lb(112, 198, '実験2のA　4', 11, C.red, 'end', true), bx(120, 188, 160, 20, undefined, C.red, FILL.red), lb(160, 226, '実験2（並列）のAのほうが明るい', 12, C.green, 'middle', true)),
  },
  {
    note: '問4：❓直列で豆電球Bが切れたら、Aはどうなる？→直列は電流の通り道が1本だけなので、Bのところで道が切れると、電流が流れず、Aも消えます。',
    add: [...fresh(), ...seriesCircuit(60, 40, 200, 80, '電池2個', ['A', 'B'], 56), lb(193, 40, '×', 28, C.red, 'middle', true), ...band(150, T('直列：道が1本 → Bが切れるとAも消える', 178, 13, C.red))],
  },
  {
    note: '❓並列でBが切れたら？→Aの枝は、電池2個に直接つながったままで、別の道になっています。だから、Aは消えず、明るさも変わりません（電流②、明るさ4）。',
    add: [...fresh(), ...parallelCircuit(60, 30, 200, 90, '電池2個', ['A', 'B']), lb(193, 75, '×', 28, C.red, 'middle', true), lb(134, 104, '②', 13, C.blue, 'start', true), ...band(150, T('並列：Aの枝は別の道 → Aは消えない', 178, 13, C.green))],
  },
  {
    note: '問5：並列に、豆電球C（抵抗4）をふやします。❓Cの電流は？→2÷4＝1/2です。全体は ②＋①＋1/2＝7/2になります。❓Aの明るさは変わる？→Aの枝は電池2個に直接つながったままなので、電流②・明るさ4のままで、変わりません。',
    add: [...fresh(), ...parallelCircuit(40, 26, 230, 70, '電池2個', ['A', 'B', 'C'], 30), ...parXs(40, 230, 3).map((x, i) => lb(x, 108, ['②', '①', '1/2'][i], 13, [C.blue, C.red, C.green][i], 'middle', true)), ...band(130, T('C　2÷4 ＝ 1/2', 152, 13, C.green), lb(160, 178, '全体　2＋1＋1/2 ＝ 7/2', 14, C.ink, 'middle', true), lb(160, 206, 'Aは②のまま（明るさ4）', 12, C.blue, 'middle', true))],
  },
  {
    note: '答えは 問1：3、問2：③、問3：実験2のA、問4：直列はAも消える・並列はAは消えない、問5：7/2・Aは変わらない、です。❓検算は？→問1は、1＋2＝3の足し算とも一致します。',
    add: fresh(lb(160, 20, '問1：3　問2：③', 14, C.green, 'middle', true), lb(160, 46, '問3：実験2（並列）のAが明るい', 13, C.green, 'middle', true), lb(160, 72, '問4：直列＝Aも消える　並列＝消えない', 12, C.green, 'middle', true), lb(160, 98, '問5：7/2、Aは変わらない', 13, C.green, 'middle', true), bx(30, 120, 260, 32, '検算：直列 1＋2 ＝ 3 ○', C.blue, FILL.blue, 14), lb(160, 176, '並列は、枝をふやしても、ほかの枝の電流は変わらない', 11, C.ink, 'middle', true)),
  },
], '直列・並列の電流と明るさ');

// ── グラフ（ダイヤグラム）の共通部品 ──
type GMap = { X: (t: number) => number; Y: (d: number) => number };
const gAxes = (g: GMap, xLabel: string, yLabel: string): DiagramElement[] => [ln(g.X(0), g.Y(0), 304, g.Y(0), C.gray, false, 1.6), ln(g.X(0), g.Y(0), g.X(0), 16, C.gray, false, 1.6), lb(304, g.Y(0) - 7, xLabel, 9, C.gray, 'end'), lb(g.X(0) + 2, 12, yLabel, 9, C.gray, 'start'), lb(g.X(0) - 4, g.Y(0) + 4, '0', 9, C.gray, 'end')];
const gSeg = (g: GMap, t1: number, d1: number, t2: number, d2: number, color: string, dashed = false) => ln(g.X(t1), g.Y(d1), g.X(t2), g.Y(d2), color, dashed, 2.4);
const gTickX = (g: GMap, t: number, text: string, color: string = C.gray) => lb(g.X(t), g.Y(0) + 11, text, 9, color, 'middle', true);
const gTickY = (g: GMap, d: number, text: string, color: string = C.gray) => lb(g.X(0) - 4, g.Y(d) + 3, text, 9, color, 'end', true);
const gPt = (g: GMap, t: number, d: number, color: string) => ci(g.X(t), g.Y(d), 4, undefined, color, '#FFFFFF');
const gDash = (g: GMap, t: number, d: number, color: string = C.gray): DiagramElement[] => [ln(g.X(t), g.Y(d), g.X(t), g.Y(0), color, true), ln(g.X(t), g.Y(d), g.X(0), g.Y(d), color, true)];

// ── toin_sansu_r01：太郎と花子の出会い（ダイヤグラム） ──
const G1: GMap = { X: (t) => 50 + t * 2.3, Y: (d) => 130 - d * 0.0255 };
const meet: Figure = show([
  {
    note: 'A駅とB駅は4200mはなれています。太郎さんは毎分70mでA駅からB駅へ、花子さんは毎分50mでB駅からA駅へ、同時に出発します。❓2人が出会うとは、どういうことでしょう。',
    add: [ci(30, 60, 12, 'A', C.ink, FILL.gray, 12), ci(290, 60, 12, 'B', C.ink, FILL.gray, 12), ar(46, 40, 274, 40, C.blue), lb(160, 28, '太郎　毎分70m（自転車）', 12, C.blue, 'middle', true), ar(274, 80, 46, 80, C.red), lb(160, 98, '花子　毎分50m（徒歩）', 12, C.red, 'middle', true), lb(160, 66, '4200m', 12, C.ink, 'middle', true), ...band(150, T('2人が同じ場所に来た ＝ 出会い', 178, 14, C.ink))],
  },
  {
    note: '❓どう図にする？→横に時間、たてにA駅からの道のりをとって、2人の動きを線にします。出会いは「2本の線が交わる点」です。太郎さんはB駅まで4200÷70＝60分、花子さんはA駅まで4200÷50＝84分です。',
    add: [...fresh(), ...gAxes(G1, '時間（分）', 'A駅から（m）'), gSeg(G1, 0, 0, 60, 4200, C.blue), gSeg(G1, 0, 4200, 84, 0, C.red), lb(G1.X(22), G1.Y(2000) - 4, '太郎', 11, C.blue, 'end', true), lb(G1.X(16), G1.Y(3950), '花子', 11, C.red, 'start', true), gTickY(G1, 4200, '4200'), gTickX(G1, 60, '60', C.blue), gTickX(G1, 84, '84', C.red), ...band(150, T('太郎：60分でB駅　花子：84分でA駅', 178, 13, C.ink))],
  },
  {
    note: '問(1)：❓出会うまで何分？→向かい合って進むので、1分ごとに2人のあいだが 70＋50＝120mずつ縮まります。4200mを120mずつ縮めるので、4200÷120＝35分後です。',
    add: [...gDash(G1, 35, 2450, C.green), gPt(G1, 35, 2450, C.green), gTickX(G1, 35, '35', C.green), ...band(150, T('向かい合う → 近づく速さは たし算', 168, 13, C.ink), bx(30, 180, 260, 34, '4200 ÷（70＋50）＝ 35分後', C.green, FILL.green, 15))],
  },
  {
    note: '問(2)：❓出会った場所は？→太郎さんは35分間、毎分70mで進んだので、70×35＝2450m。A駅から2450mの地点です。',
    add: [gTickY(G1, 2450, '2450', C.green), ...band(150, bx(30, 160, 260, 32, '70 × 35 ＝ 2450m（A駅から）', C.green, FILL.green, 15), lb(160, 212, '検算：花子 50×35＝1750、2450＋1750＝4200 ○', 11, C.ink, 'middle', true))],
  },
  {
    note: '問(3)：太郎さんは、60分にB駅へ着いて折り返します。花子さんは、84分にA駅へ着いて折り返します。❓花子さんが折り返す84分のとき、太郎さんはどこ？→B駅から24分戻ったので、70×24＝1680m戻り、4200−1680＝2520m（A駅から）です。',
    add: [...fresh(), ...gAxes(G1, '時間（分）', 'A駅から（m）'), gSeg(G1, 0, 0, 60, 4200, C.blue), gSeg(G1, 0, 4200, 84, 0, C.red), gSeg(G1, 60, 4200, 84, 2520, C.blue), gPt(G1, 84, 2520, C.blue), gPt(G1, 84, 0, C.red), ln(G1.X(84), G1.Y(2520), G1.X(84), G1.Y(0), C.gray, true), lb(G1.X(84) + 6, G1.Y(2520), '2520m', 10, C.blue, 'start', true), gTickX(G1, 60, '60', C.blue), gTickX(G1, 84, '84', C.red), ...band(150, T('84分：太郎 2520m　花子 A駅（0m）', 168, 13, C.ink), lb(160, 202, '4200 − 70×24 ＝ 2520', 12, C.gray, 'middle', true))],
  },
  {
    note: '❓この2人は、いつ出会う？→84分のとき、太郎さんは2520m、花子さんは0mで、また向かい合って進みます。近づく速さは 70＋50＝120なので、2520÷120＝21分後、84＋21＝105分後に出会います。太郎さんが折り返してから、105−60＝45分です。',
    add: [gSeg(G1, 84, 0, 105, 1050, C.red), gSeg(G1, 84, 2520, 105, 1050, C.blue), gPt(G1, 105, 1050, C.green), gTickX(G1, 105, '105', C.green), ...band(150, T('2520 ÷ 120 ＝ 21分　84＋21 ＝ 105分後', 168, 12, C.ink), bx(30, 182, 260, 32, '折り返してから 105−60 ＝ 45分', C.green, FILL.green, 14))],
  },
  {
    note: '問(4)：❓2回目に出会った場所は？→花子さんは84分から21分、毎分50mで進んだので、50×21＝1050m。太郎さんから見ても、4200−70×45＝1050mで、A駅から1050mの地点です。',
    add: [...gDash(G1, 105, 1050, C.green), gTickY(G1, 1050, '1050', C.green), ...band(150, bx(30, 160, 260, 32, '花子　50 × 21 ＝ 1050m', C.red, FILL.red, 14), lb(160, 212, '太郎　4200 − 70×45 ＝ 1050m（一致）○', 12, C.blue, 'middle', true))],
  },
  {
    note: '問(5)：次郎さんは毎分84mでA駅からB駅へ向かいます。❓4200mを歩くのに何分かかる？→4200÷84＝50分です。太郎さんは60分でB駅に着くので、次郎さんは 60−50＝10分おくれて出発すれば、同時に着きます。',
    add: [...fresh(), ...gAxes(G1, '時間（分）', 'A駅から（m）'), gSeg(G1, 0, 0, 60, 4200, C.blue), gSeg(G1, 10, 0, 60, 4200, C.purple), lb(G1.X(35), G1.Y(2600), '次郎', 11, C.purple, 'start', true), gTickX(G1, 10, '10', C.purple), gTickX(G1, 60, '60', C.blue), gPt(G1, 60, 4200, C.green), ...band(150, T('次郎：4200÷84 ＝ 50分かかる', 168, 13, C.purple), bx(30, 180, 260, 32, '60 − 50 ＝ 10分後に出発', C.green, FILL.green, 15))],
  },
  {
    note: '答えは (1) 35分後、(2) A駅から2450m、(3) 折り返してから45分後（出発後105分後）、(4) A駅から1050m、(5) 10分後です。❓検算は？→(4)は花子さんの50×21と太郎さんの4200−70×45がどちらも1050mで一致しています。',
    add: fresh(lb(160, 20, '(1) 35分後　(2) 2450m', 14, C.green, 'middle', true), lb(160, 46, '(3) 折り返してから45分後', 14, C.green, 'middle', true), lb(160, 72, '（出発後105分後）', 12, C.gray, 'middle', true), lb(160, 98, '(4) 1050m　(5) 10分後', 14, C.green, 'middle', true), bx(30, 120, 260, 32, '検算 (4)　50×21 ＝ 4200−70×45 ＝ 1050', C.blue, FILL.blue, 12), lb(160, 176, '2人の線が交わる点が、出会い', 12, C.ink, 'middle', true)),
  },
], '出会いと折り返しのダイヤグラム');

// ── toin_sansu_r03：仕入れ値・定価・売値と利益 ──
const profit: Figure = show([
  {
    note: '仕入れ値に3割の利益を見こんで、定価をつけます。問(1)：仕入れ値が1600円の定価は？❓仕入れ値を1と見ると、3割の利益は0.3です。定価は、それをたした1＋0.3＝1.3倍になります。',
    add: [bx(30, 40, 100, 28, '仕入れ値　1', C.main, FILL.warm, 12), bx(130, 40, 30, 28, '3割', C.green, FILL.green, 10), lb(30, 30, '定価 ＝ 1.3', 12, C.green, 'start', true), ln(30, 76, 160, 76, C.green, false, 1.6), ...band(150, T('定価 ＝ 仕入れ値 × 1.3', 178, 14, C.green))],
  },
  {
    note: '1600円の定価は、1600×1.3＝2080円です。',
    add: band(150, bx(40, 166, 240, 38, '1600 × 1.3 ＝ 2080円', C.green, FILL.green, 17)),
  },
  {
    note: '問(2)：定価の2割引きで売ると？❓2割引きは、定価の何倍で売ること？→定価を1と見て、2割（0.2）を引くので、1−0.2＝0.8倍です。売値は 2080×0.8＝1664円。仕入れ値1600円との差で、利益は 1664−1600＝64円です。',
    add: band(150, bx(30, 156, 260, 28, '売値　2080×0.8 ＝ 1664円', C.blue, FILL.blue, 13), bx(30, 188, 260, 28, '利益　1664−1600 ＝ 64円', C.green, FILL.green, 13), lb(160, 228, '2割引き ＝ 定価の 0.8倍', 12, C.ink, 'middle', true)),
  },
  {
    note: '問(3)：仕入れ値2400円の商品を、定価の1割5分引きで売ります。定価は 2400×1.3＝3120円。❓1割5分引きは何倍？→1割5分は0.15なので、1−0.15＝0.85倍です。売値は 3120×0.85＝2652円、利益は 2652−2400＝252円です。',
    add: band(150, bx(30, 154, 260, 24, '定価　2400×1.3 ＝ 3120円', C.gray, FILL.gray, 12), bx(30, 181, 260, 24, '売値　3120×0.85 ＝ 2652円', C.blue, FILL.blue, 12), bx(30, 208, 260, 26, '利益　2652−2400 ＝ 252円', C.green, FILL.green, 13)),
  },
  {
    note: '問(4)：別の商品は、15%引きで売って利益が210円でした。❓仕入れ値が分からないときは？→仕入れ値を1と見て、割合で考えます。定価は1.3、売値は 1.3×0.85＝1.105です。',
    add: fresh(bx(30, 26, 100, 24, '仕入れ値　1', C.main, FILL.warm, 11), bx(30, 58, 130, 24, '定価　1.3', C.blue, FILL.blue, 11), bx(30, 90, 110.5, 24, '売値　1.105', C.purple, FILL.purple, 11), bx(140.5, 90, 10.5, 24, undefined, C.red, FILL.red), lb(160, 126, '利益 ＝ 売値 − 仕入れ値', 11, C.ink, 'start', true), ...band(140, T('売値は 1.3×0.85 ＝ 1.105', 170, 14, C.purple))),
  },
  {
    note: '❓利益は、仕入れ値の何倍？→1.105−1＝0.105倍です。この0.105倍が210円にあたります。',
    add: [lb(250, 102, '← 0.105', 12, C.red, 'end', true), ...band(140, T('利益 ＝ 1.105 − 1 ＝ 0.105', 168, 14, C.red), bx(40, 182, 240, 34, '0.105倍 ＝ 210円', C.red, FILL.red, 16))],
  },
  {
    note: '❓では、仕入れ値（1にあたる量）は？→「くらべる量（210円）÷ 割合（0.105）＝もとにする量」なので、210÷0.105＝2000円です。',
    add: fresh(bx(30, 26, 260, 32, '0.105倍 ＝ 210円', C.red, FILL.red, 15), ar(160, 62, 160, 82, C.ink), bx(30, 88, 260, 32, '1倍（仕入れ値）＝ 210 ÷ 0.105', C.blue, FILL.blue, 14), bx(30, 130, 260, 36, '＝ 2000円', C.green, FILL.green, 18), lb(160, 192, 'くらべる量 ÷ 割合 ＝ もとにする量', 12, C.purple, 'middle', true)),
  },
  {
    note: '答えは 問(1)2080円、問(2)売値1664円・利益64円、問(3)利益252円、問(4)仕入れ値2000円です。❓検算は？→仕入れ値2000円なら、定価2600円、15%引きの売値2210円、利益2210−2000＝210円で、問題と一致します。',
    add: fresh(lb(160, 18, '(1) 2080円　(2) 売値1664円・利益64円', 12, C.green, 'middle', true), lb(160, 40, '(3) 利益252円　(4) 仕入れ値2000円', 12, C.green, 'middle', true), bx(20, 60, 280, 30, '検算 (4)　仕入れ値 2000円', C.gray, FILL.gray, 13), lb(160, 104, '↓ ×1.3', 11, C.ink, 'middle', true), bx(20, 114, 280, 28, '定価 2600円', C.blue, FILL.blue, 13), lb(160, 154, '↓ ×0.85', 11, C.ink, 'middle', true), bx(20, 164, 280, 28, '売値 2210円 → 利益 210円 ○', C.green, FILL.green, 13)),
  },
], '損益算：仕入れ値・定価・売値');

// ── toin_rika_r03：ばねとてこ（長さ60cmの棒） ──
const coilN = (x: number, len: number, w: string) => [ceil(x), ...coil(x, 14, 14 + len), bx(x - 18, 14 + len, 36, 20, w, C.gray, FILL.gray, 10)];
const beam60 = (pivotCm: number): DiagramElement[] => {
  const px = 40 + pivotCm * 4;
  return [bx(40, 74, 240, 12, undefined, C.ink, FILL.gray), pg([[px, 86], [px - 12, 110], [px + 12, 110]], C.main, FILL.warm), lb(px, 122, '支点', 10, C.main, 'middle', true)];
};
const springLever2: Figure = show([
  {
    note: 'ばねXにおもりをつるして、長さをはかりました。おもりなしで10cm、50gで12cm、100gで14cm、150gで16cm、200gで18cmです。❓おもりの重さとばねの関係を探します。',
    add: [...[0, 50, 100, 150, 200].flatMap((w, i) => [...coilN(40 + i * 60, 40 + i * 8, w === 0 ? '0g' : `${w}g`), lb(40 + i * 60, 14 + 40 + i * 8 + 34, `${10 + i * 2}cm`, 10, C.red, 'middle', true)]), ...band(150, T('長さ：10、12、14、16、18cm', 178, 13, C.ink))],
  },
  {
    note: '❓長さは、おもりの重さに比例している？→いいえ。100gの長さ14cmは、50gの12cmの2倍ではありません。長さには、おもりなしの10cm（自然長）がふくまれているからです。',
    add: band(150, T('100g：14cm は、50g：12cm の2倍ではない', 168, 12, C.red), lb(160, 200, '長さには、はじめの10cmがふくまれている', 12, C.ink, 'middle', true)),
  },
  {
    note: '❓では、何を見ればいい？→長さから、おもりなしの10cmを引いた「のび」です。のびは 0、2、4、6、8cmで、50gごとに2cmずつふえ、重さに比例します（1gで0.04cm）。',
    add: band(150, ...[0, 1, 2, 3, 4].map((i) => bx(10 + i * 60, 160, 52, 28, `のび ${i * 2}`, C.blue, FILL.blue, 11)), lb(160, 208, '50gごとに2cmのびる（比例）', 13, C.green, 'middle', true), lb(160, 228, '（長さ − 10cm ＝ のび）', 11, C.gray, 'middle')),
  },
  {
    note: '問(1)：250gのときは？→250gは50gが5個ぶんなので、のびは 2×5＝10cm。長さは、自然長10cmにのびをたして 10＋10＝20cmです。',
    add: fresh(bx(20, 20, 280, 30, '250g ＝ 50g × 5個ぶん', C.gray, FILL.gray, 13), bx(20, 60, 280, 30, 'のび　2 × 5 ＝ 10cm', C.blue, FILL.blue, 14), bx(20, 100, 280, 34, '長さ　10 ＋ 10 ＝ 20cm', C.green, FILL.green, 16), lb(160, 160, 'のびだけでなく、自然長10cmも足す', 12, C.red, 'middle', true)),
  },
  {
    note: '問(2)：長さ60cmの棒は、左端から30cmの中央で支えています。左端から10cmの点Aに100g、右端から10cmの点Bに□gをつるします。❓支点から各点までの距離は？→Aは 30−10＝20cm、Bは右端から10cmなので、左端からは50cm、支点からは 50−30＝20cmです。',
    add: [...fresh(), ...beam60(30), bx(62, 92, 36, 24, '100g', C.blue, FILL.blue, 11), bx(222, 92, 36, 24, '□g', C.red, FILL.red, 11), ln(80, 62, 160, 62, C.blue), lb(120, 54, '20cm', 11, C.blue, 'middle', true), ln(160, 62, 240, 62, C.red), lb(200, 54, '20cm', 11, C.red, 'middle', true), lb(40, 140, '左端', 10, C.gray, 'middle'), lb(280, 140, '右端', 10, C.gray, 'middle'), ...band(150, T('支点からの距離を、まず出す（A・Bとも20cm）', 178, 12, C.ink))],
  },
  {
    note: '❓つり合いの式は？→てこは「重さ×支点からのきょり」が左右で等しいとつり合います。重さが重いほど、また支点から遠いほど、かたむけるはたらきが大きいからです。100×20＝□×20なので、□＝100gです。',
    add: band(150, bx(20, 160, 130, 32, '左　100×20 ＝ 2000', C.blue, FILL.blue, 12), bx(170, 160, 130, 32, '右　□×20 ＝ 2000', C.red, FILL.red, 12), lb(160, 214, '□ ＝ 2000÷20 ＝ 100g', 14, C.green, 'middle', true)),
  },
  {
    note: '問(3)：支点を左端から20cmの位置に動かします。❓距離はどうかわる？→点Aは 20−10＝10cm、点Bは 50−20＝30cmです。支点が動くと、支点からの距離が変わるので、測り直します。',
    add: [...fresh(), ...beam60(20), bx(62, 92, 36, 24, '100g', C.blue, FILL.blue, 11), bx(222, 92, 36, 24, '□g', C.red, FILL.red, 11), ln(80, 62, 120, 62, C.blue), lb(100, 54, '10cm', 11, C.blue, 'middle', true), ln(120, 62, 240, 62, C.red), lb(180, 54, '30cm', 11, C.red, 'middle', true), ...band(150, T('A：20−10＝10cm　B：50−20＝30cm', 178, 13, C.ink))],
  },
  {
    note: '❓Bのおもりは何gにすればいい？→100×10＝1000なので、□×30＝1000となり、□＝1000÷30＝33.3…gです。❓なぜ軽くてすむ？→Bが支点から遠くなって、少ない重さでも、かたむけるはたらきが同じになるからです。',
    add: band(150, bx(20, 160, 130, 32, '左　100×10 ＝ 1000', C.blue, FILL.blue, 12), bx(170, 160, 130, 32, '右　□×30 ＝ 1000', C.red, FILL.red, 12), lb(160, 214, '□ ＝ 1000÷30 ＝ 33.3g（約33g）', 14, C.green, 'middle', true)),
  },
  {
    note: '問(4)：てこを利用した道具です。てこには、力を加える「力点」、動かない中心の「支点」、物に力がはたらく「作用点」の3つがあります。はさみは、ねじが支点、持つところが力点、刃が作用点です。くぎぬきは、先たんが材木に当たるところが支点、柄の先が力点、くぎをかけるところが作用点です。',
    add: [...fresh(), ln(20, 52, 150, 52, C.ink, false, 3), ci(30, 52, 10, '力', C.blue, FILL.blue, 11), ci(85, 52, 10, '支', C.main, FILL.warm, 11), ci(140, 52, 10, '作', C.green, FILL.green, 11), lb(85, 80, 'はさみ', 12, C.ink, 'middle', true), ln(170, 52, 300, 52, C.ink, false, 3), ci(180, 52, 10, '支', C.main, FILL.warm, 11), ci(210, 52, 10, '作', C.green, FILL.green, 11), ci(290, 52, 10, '力', C.blue, FILL.blue, 11), lb(235, 80, 'くぎぬき', 12, C.ink, 'middle', true), lb(85, 100, 'ねじ＝支　刃＝作　握る所＝力', 9, C.gray, 'middle'), lb(235, 100, '先たん＝支　くぎ＝作　柄＝力', 9, C.gray, 'middle'), ...band(130, T('力＝力点　支＝支点　作＝作用点', 160, 13, C.ink))],
  },
  {
    note: '答えは 問(1)：50gで2cmのび（比例）・250gで20cm、問(2)：100g、問(3)：約33.3g、問(4)：はさみ・くぎぬきなどです。❓検算は？→問(3)は 100×10＝1000、33.3×30≒1000で左右が同じです。',
    add: fresh(lb(160, 20, '(1) 50gで2cmのび　250gで20cm', 13, C.green, 'middle', true), lb(160, 46, '(2) 100g　(3) 約33.3g', 14, C.green, 'middle', true), lb(160, 72, '(4) はさみ・くぎぬきなど', 13, C.green, 'middle', true), bx(30, 96, 260, 32, '検算 (3)　100×10 ＝ 1000 ≒ 33.3×30', C.blue, FILL.blue, 12), lb(160, 152, '(2)　100×20 ＝ 100×20 ○', 12, C.ink, 'middle', true)),
  },
], 'ばねののびとてこのつり合い（長さ60cmの棒）');

// ── toin_sansu_max01：行って戻って学校へ（グラフ） ──
const G2: GMap = { X: (t) => 46 + t * 6.4, Y: (d) => 132 - d * 0.055 };
const walkGraph: Figure = show([
  {
    note: '太郎さんは家から学校（2000m先）へ、分速80mで歩き始めました。途中で忘れ物に気づいて、分速120mで家にもどり、すぐに分速100mで学校へ向かいます。問1：引き返すまでにかかる時間は？',
    add: [lb(30, 26, '家', 12, C.ink, 'middle', true), lb(290, 26, '学校（2000m）', 11, C.ink, 'end', true), ar(30, 40, 134, 40, C.blue), lb(82, 30, '分速80m', 10, C.blue, 'middle', true), ci(134, 40, 4, undefined, C.red, FILL.red), ar(134, 62, 30, 62, C.red), lb(82, 74, '分速120m', 10, C.red, 'middle', true), ar(30, 88, 290, 88, C.green), lb(160, 100, '分速100m', 10, C.green, 'middle', true), ...band(150, T('①行き　②もどる　③学校へ', 178, 14, C.ink))],
  },
  {
    note: '❓引き返すまでの時間は？→時間＝道のり÷速さです。最初に歩いた道のり□mを分速80mで歩くので、□÷80分です。問2では□＝800mなので、800÷80＝10分です。',
    add: band(150, bx(20, 160, 130, 32, '時間 ＝ □ ÷ 80（分）', C.blue, FILL.blue, 12), bx(170, 160, 130, 32, '□＝800 → 10分', C.green, FILL.green, 13), lb(160, 214, '時間 ＝ 道のり ÷ 速さ', 12, C.ink, 'middle', true)),
  },
  {
    note: '問4：横に時間（分）、たてに家からの道のりをとります。最初の10分で800m進むので、折り返した点は（10，800）です。❓なぜこの点？→横が「10分」、たてが「800m」の場所だからです。',
    add: [...fresh(), ...gAxes(G2, '時間（分）', '家から（m）'), gSeg(G2, 0, 0, 10, 800, C.blue), gPt(G2, 10, 800, C.red), ...gDash(G2, 10, 800, C.gray), gTickX(G2, 10, '10'), gTickY(G2, 800, '800'), gTickY(G2, 2000, '2000'), lb(G2.X(10) + 6, G2.Y(800) - 6, '（10，800）', 11, C.red, 'start', true), ...band(150, T('折り返し点 ＝（時間10分，道のり800m）', 172, 12, C.red))],
  },
  {
    note: '❓家にもどる時間は？→800mを分速120mでもどるので、800÷120＝20/3＝6と2/3分（6分40秒）です。グラフでは、10分から約16.7分まで、下へ下がる線です。',
    add: [gSeg(G2, 10, 800, 50 / 3, 0, C.red), gPt(G2, 50 / 3, 0, C.red), gTickX(G2, 50 / 3, '16⅔'), ...band(150, T('800 ÷ 120 ＝ 6と2/3分', 168, 13, C.red), lb(160, 200, '10 ＋ 6と2/3 ＝ 16と2/3分（家に着いた時こく）', 11, C.ink, 'middle', true))],
  },
  {
    note: '❓学校まで何分？→家から学校までの2000mを分速100mで歩くので、2000÷100＝20分です。16と2/3分に20分をたして、36と2/3分に着きます。',
    add: [gSeg(G2, 50 / 3, 0, 110 / 3, 2000, C.green), gPt(G2, 110 / 3, 2000, C.green), gTickX(G2, 110 / 3, '36⅔', C.green), ...band(150, T('2000 ÷ 100 ＝ 20分', 168, 13, C.green), lb(160, 200, '16と2/3 ＋ 20 ＝ 36と2/3分', 12, C.ink, 'middle', true))],
  },
  {
    note: '問2：家を出てから学校に着くまでの合計は、3つの区間をたして、10＋6と2/3＋20＝36と2/3分（約36分40秒）です。',
    add: band(150, bx(20, 160, 280, 34, '10 ＋ 6と2/3 ＋ 20 ＝ 36と2/3分', C.green, FILL.green, 15), lb(160, 214, '（約36分40秒）', 12, C.gray, 'middle', true)),
  },
  {
    note: '問3：❓最初から分速100mで歩き続けたら？→2000÷100＝20分です（点線）。ですから、36と2/3−20＝16と2/3分（約16分40秒）多くかかったことになります。',
    add: [gSeg(G2, 0, 0, 20, 2000, C.gray, true), gPt(G2, 20, 2000, C.gray), gTickX(G2, 20, '20', C.gray), ...band(150, T('まっすぐ歩くと 2000÷100 ＝ 20分', 168, 13, C.gray), bx(30, 180, 260, 32, '36と2/3 − 20 ＝ 16と2/3分 多い', C.red, FILL.red, 14))],
  },
  {
    note: '答えは 問1：□÷80（分）、問2：36と2/3分、問3：16と2/3分多い、問4：（10，800）です。❓検算は？→折り返してから家にもどるまで 10＋6と2/3＝16と2/3分は、グラフの線が0に着く時こくと一致します。',
    add: fresh(lb(160, 20, '問1：□÷80（分）　問2：36と2/3分', 12, C.green, 'middle', true), lb(160, 46, '問3：16と2/3分 多い', 14, C.green, 'middle', true), lb(160, 72, '問4：（10，800）', 14, C.green, 'middle', true), bx(30, 96, 260, 32, '検算：10＋6と2/3 ＝ 16と2/3分（家に着く）○', C.blue, FILL.blue, 11), lb(160, 152, '区間に分けて、時間＝道のり÷速さ', 12, C.ink, 'middle', true)),
  },
], '行って、もどって、学校へ（道のりのグラフ）');

// ── kindai_sansu_02：直方体の表面積 ──
const cuboidF: P[] = [[74, 70], [174, 70], [174, 120], [74, 120]];
const cuboidT: P[] = [[74, 70], [119, 40], [219, 40], [174, 70]];
const cuboidR: P[] = [[174, 70], [219, 40], [219, 90], [174, 120]];
const cuboid: Figure = show([
  {
    note: 'たて15cm、よこ20cm、高さ10cmの直方体の表面積を求めます。❓表面積とは、何の大きさでしょう。まず、直方体の形を見てみます。',
    add: [pg(cuboidF, C.main, FILL.warm), pg(cuboidT, C.main, FILL.warm), pg(cuboidR, C.main, FILL.warm), lb(124, 134, 'よこ20cm', 11, C.red, 'middle', true), lb(68, 95, '高さ10cm', 11, C.red, 'end', true), lb(228, 58, 'たて15cm', 11, C.red, 'start', true), ...band(150, T('たて15cm　よこ20cm　高さ10cm', 178, 13, C.ink))],
  },
  {
    note: '❓表面積とは？→立体の外側をおおう、すべての面の面積をたしたものです。❓面は何枚？→前・上・右の3枚が見え、かくれた後ろ・下・左の3枚があって、ぜんぶで6枚です。',
    add: [pg(cuboidF, C.red, FILL.red), pg(cuboidT, C.blue, FILL.blue), pg(cuboidR, C.green, FILL.green), ...band(150, T('見える3枚 ＋ かくれた3枚 ＝ 6枚', 178, 14, C.ink))],
  },
  {
    note: '❓6枚の大きさは、ぜんぶちがう？→直方体では、向かい合う面は同じ大きさです。前と後ろ、上と下、左と右が、それぞれ同じなので、3種類の面が2枚ずつあります。',
    add: band(150, bx(20, 160, 86, 30, '前・後ろ', C.red, FILL.red, 12), bx(117, 160, 86, 30, '上・下', C.blue, FILL.blue, 12), bx(214, 160, 86, 30, '左・右', C.green, FILL.green, 12), lb(160, 214, '3種類 × 2枚 ＝ 6枚', 14, C.ink, 'middle', true)),
  },
  {
    note: '❓3種類の面積は？→上（下）は たて×よこ＝15×20＝300cm²、左（右）は たて×高さ＝15×10＝150cm²、前（後ろ）は よこ×高さ＝20×10＝200cm²です。',
    add: [...fresh(), lb(54, 18, '上と下', 12, C.blue, 'middle', true), bx(14, 28, 80, 60, '300', C.blue, FILL.blue, 18), lb(54, 102, '20×15', 12, C.blue, 'middle', true), lb(144, 18, '左と右', 12, C.green, 'middle', true), bx(114, 28, 60, 40, '150', C.green, FILL.green, 18), lb(144, 82, '15×10', 12, C.green, 'middle', true), lb(234, 18, '前と後ろ', 12, C.red, 'middle', true), bx(194, 28, 80, 40, '200', C.red, FILL.red, 18), lb(234, 82, '20×10', 12, C.red, 'middle', true), ...band(118, T('上：300cm²　左：150cm²　前：200cm²', 150, 13, C.ink))],
  },
  {
    note: '❓3種類をたすと？→300＋150＋200＝650cm²です。❓これで全部？→これは3種類を1枚ずつ数えただけです。同じ面がもう1枚ずつあるので、2倍にして、650×2＝1300cm²です。',
    add: band(150, bx(30, 156, 260, 30, '300 ＋ 150 ＋ 200 ＝ 650cm²（1枚ずつ）', C.gray, FILL.gray, 13), bx(30, 192, 260, 34, '650 × 2 ＝ 1300cm²', C.green, FILL.green, 16)),
  },
  {
    note: '❓別の方法で確かめると？→面ごとに2枚ずつ数えます。300×2＝600、150×2＝300、200×2＝400で、600＋300＋400＝1300cm²になり、同じ答えになります。',
    add: fresh(bx(30, 20, 260, 30, '上・下　300×2 ＝ 600', C.blue, FILL.blue, 14), bx(30, 58, 260, 30, '左・右　150×2 ＝ 300', C.green, FILL.green, 14), bx(30, 96, 260, 30, '前・後ろ　200×2 ＝ 400', C.red, FILL.red, 14), bx(30, 140, 260, 34, '600＋300＋400 ＝ 1300cm² ○', C.purple, FILL.purple, 15)),
  },
  {
    note: '答えは1300cm²です。❓体積とはどうちがう？→たて×よこ×高さ＝15×20×10＝3000cm³は、中にどれだけ入るかの大きさで、単位はcm³です。表面積は外側の面の広さで、単位はcm²です。',
    add: fresh(bx(30, 26, 260, 38, '答え　1300cm²', C.green, FILL.green, 18), bx(30, 80, 260, 30, '体積　15×20×10 ＝ 3000cm³（別もの）', C.gray, FILL.gray, 12), lb(160, 136, '表面積 ＝ 面の広さ（cm²）', 13, C.ink, 'middle', true), lb(160, 160, '体積 ＝ 中に入る量（cm³）', 13, C.ink, 'middle', true), lb(160, 190, '650cm²（1枚ずつ）で止めないこと', 12, C.red, 'middle', true)),
  },
], '直方体の表面積');

// ── kindai_sansu_03：つるかめ算（りんごとみかん） ──
const dotRow = (n: number, reds: number, y = 50): DiagramElement[] => Array.from({ length: n }, (_, i) => ci(27 + i * 19, y, 7, undefined, i < reds ? C.red : C.main, i < reds ? FILL.red : FILL.yellow));
const legendFig = (both: boolean): DiagramElement[] => [ci(84, 112, 6, undefined, C.main, FILL.yellow), lb(94, 112, 'みかん80円', 11, C.main, 'start', true), ...(both ? [ci(196, 112, 6, undefined, C.red, FILL.red), lb(206, 112, 'りんご120円', 11, C.red, 'start', true)] : [])];
const applesOranges: Figure = show([
  {
    note: '1個120円のりんごと、1個80円のみかんを、合わせて15個買って、合計1480円になりました。それぞれ何個買ったでしょう。❓まず、15個の玉で考えます。',
    add: [...dotRow(15, 0).map((d) => d), lb(160, 26, '合わせて15個', 12, C.ink, 'middle', true), ...band(150, T('りんご120円　みかん80円　合計1480円', 178, 13, C.ink))],
  },
  {
    note: '❓どうやって数を決める？→もし15個ぜんぶがみかん（80円）だったと仮定します。すると代金は 80×15＝1200円です。',
    add: [...fresh(), ...dotRow(15, 0), ...legendFig(false), lb(160, 26, 'ぜんぶみかんだったら', 12, C.main, 'middle', true), ...band(150, bx(40, 166, 240, 34, '80 × 15 ＝ 1200円', C.main, FILL.yellow, 16))],
  },
  {
    note: '❓本当の代金は1480円なので、どれだけちがう？→1480−1200＝280円たりません。❓なぜ足りない？→本当はみかんより高いりんごが混ざっているからです。',
    add: band(150, bx(20, 160, 130, 32, '本当　1480円', C.red, FILL.red, 14), bx(170, 160, 130, 32, '仮定　1200円', C.main, FILL.yellow, 14), lb(160, 214, '1480 − 1200 ＝ 280円 の差', 14, C.ink, 'middle', true)),
  },
  {
    note: '❓みかん1個を、りんご1個に入れかえると、代金はどれだけ変わる？→120−80＝40円ふえます。1個入れかえるたびに、ちょうど40円ずつ、本当の代金に近づきます。',
    add: [...fresh(), ...dotRow(15, 1), ...legendFig(true), lb(27, 34, '入れかえ', 9, C.red, 'start', true), ...band(150, T('みかん1個 → りんご1個', 170, 14, C.ink), bx(40, 184, 240, 32, '120 − 80 ＝ 40円ふえる', C.red, FILL.red, 15))],
  },
  {
    note: '❓何個入れかえれば、280円ぶんふえる？→1個で40円ふえるので、280÷40＝7個です。入れかえた7個がりんごなので、りんごは7個です。',
    add: [...fresh(), ...dotRow(15, 7), ...legendFig(true), lb(27 + 3 * 19, 34, 'りんご7個', 11, C.red, 'middle', true), ...band(150, T('280円 ÷ 40円 ＝ 7個 入れかえる', 170, 14, C.red), lb(160, 210, 'わるのは、りんごの値段120円ではなく40円', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓みかんは何個？→15個のうちりんごが7個なので、みかんは 15−7＝8個です。',
    add: [lb(27 + 11 * 19, 34, 'みかん8個', 11, C.main, 'middle', true), ...band(150, bx(20, 160, 130, 32, 'りんご　7個', C.red, FILL.red, 15), bx(170, 160, 130, 32, 'みかん　8個', C.main, FILL.yellow, 15), lb(160, 214, '15 − 7 ＝ 8', 13, C.ink, 'middle', true))],
  },
  {
    note: '答えは、りんご7個、みかん8個です。❓検算は？→120×7＝840円、80×8＝640円で、840＋640＝1480円となり、合計と一致します。差の280円を120円でわってしまうのは、まちがいです。',
    add: fresh(bx(30, 22, 260, 36, '答え　りんご7個・みかん8個', C.green, FILL.green, 16), bx(30, 74, 260, 28, '120×7 ＝ 840円', C.red, FILL.red, 14), bx(30, 108, 260, 28, '80×8 ＝ 640円', C.main, FILL.yellow, 14), bx(30, 144, 260, 30, '840＋640 ＝ 1480円 ○', C.blue, FILL.blue, 14), lb(160, 200, '280÷120 としてはいけない（入れかえの差は40円）', 11, C.red, 'middle', true)),
  },
], 'つるかめ算：りんごとみかん');

// ── kindai_sansu_04：円と正方形の面積くらべ ──
const cs = { cx: 108, cy: 70, r: 48 };
const circleSquare: Figure = show([
  {
    note: '半径6cmの円と、1辺12cmの正方形があります。どちらの面積が大きいでしょう。❓見た目で決めずに、面積を計算して比べます。',
    add: [ci(90, 70, 36, undefined, C.blue, FILL.blue), ln(90, 70, 126, 70, C.red, false, 2), lb(90, 24, '半径6cm', 10, C.red, 'middle', true), bx(190, 34, 72, 72, undefined, C.main, FILL.warm), lb(226, 120, '1辺12cm', 11, C.main, 'middle', true), ...band(150, T('どちらの面積が大きい？', 178, 14, C.ink))],
  },
  {
    note: '❓円の直径と正方形の1辺は？→円の直径は 6×2＝12cmで、正方形の1辺と同じ長さです。幅は同じですが、形がちがうので、面積は同じとは限りません。',
    add: [ln(54, 70, 126, 70, C.red, false, 3), ln(190, 106, 262, 106, C.red, false, 3), ...band(150, T('直径12cm ＝ 1辺12cm（幅は同じ）', 172, 13, C.red), lb(160, 202, '面積は同じとは限らない', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓円の面積はどう出す？→正方形（1辺12cm）の中に円を入れると、半径を1辺とする正方形（6×6）が4個ぶんのうち、円は3.14個ぶんをしめます。だから円の面積は「半径×半径×3.14」です。',
    add: [...fresh(), bx(60, 20, 96, 96, undefined, C.main, FILL.warm), ci(cs.cx, cs.cy - 2, cs.r, undefined, C.blue, FILL.blue), ln(108, 20, 108, 116, C.gray, true), ln(60, 68, 156, 68, C.gray, true), lb(84, 44, '6×6', 10, C.ink, 'middle', true), lb(132, 44, '6×6', 10, C.ink, 'middle', true), lb(84, 96, '6×6', 10, C.ink, 'middle', true), lb(132, 96, '6×6', 10, C.ink, 'middle', true), lb(236, 50, '正方形 ＝ 4個ぶん', 12, C.main, 'middle', true), lb(236, 80, '円 ＝ 3.14個ぶん', 12, C.blue, 'middle', true), ...band(130, T('6×6 が、正方形は4個、円は3.14個', 160, 13, C.ink))],
  },
  {
    note: '円の面積は、6×6×3.14＝36×3.14＝113.04cm²です。',
    add: band(130, bx(40, 150, 240, 36, '6×6×3.14 ＝ 113.04cm²（円）', C.blue, FILL.blue, 15)),
  },
  {
    note: '正方形の面積は、12×12＝144cm²です。6×6の4個ぶんなので 36×4＝144で、同じ答えになります。',
    add: band(130, bx(40, 150, 240, 36, '12×12 ＝ 144cm²（正方形）', C.main, FILL.warm, 15), lb(160, 208, '36×4 ＝ 144 とも一致', 12, C.gray, 'middle', true)),
  },
  {
    note: '❓どちらが大きい？→144と113.04をくらべると、144のほうが大きいので、正方形のほうが大きいです。',
    add: fresh(bx(30, 26, 252, 30, '正方形　144cm²', C.main, FILL.warm, 14), bx(30, 70, 200.5, 30, '円　113.04cm²', C.blue, FILL.blue, 14), bx(230.5, 70, 51.5, 30, undefined, C.red, FILL.red), lb(160, 130, '144 ＞ 113.04 → 正方形のほうが大きい', 13, C.green, 'middle', true), ...band(150, T('長さをそろえたはずなのに、面積はちがう', 178, 12, C.ink))),
  },
  {
    note: '答えは正方形のほうが大きい（円113.04cm²、正方形144cm²）です。❓なぜ円が小さい？→円には、正方形の四すみの部分がありません。そのすき間が 144−113.04＝30.96cm²で、これは6×6の0.86個ぶんにあたります。',
    add: fresh(bx(30, 20, 260, 34, '答え　正方形のほうが大きい', C.green, FILL.green, 16), bx(30, 66, 260, 28, '円 113.04cm²　＜　正方形 144cm²', C.gray, FILL.gray, 13), lb(160, 122, '四すみのすき間 ＝ 144−113.04 ＝ 30.96cm²', 12, C.red, 'middle', true), lb(160, 146, '36×0.86 ＝ 30.96（4−3.14 ＝ 0.86個ぶん）○', 12, C.ink, 'middle', true), lb(160, 184, '見た目で決めずに、面積を計算する', 12, C.purple, 'middle', true)),
  },
], '円と正方形の面積くらべ');

// ── kindai_rika_01：月の公転周期と満ち欠け ──
const orbitArc = (a0: number, a1: number, color: string = C.gray, w = 1.6): DiagramElement[] => {
  const out: DiagramElement[] = [];
  for (let a = a0; a < a1; a += 4) {
    const b = Math.min(a + 4, a1);
    out.push(ln(50 + 100 * Math.cos((a * Math.PI) / 180), 80 - 100 * Math.sin((a * Math.PI) / 180), 50 + 100 * Math.cos((b * Math.PI) / 180), 80 - 100 * Math.sin((b * Math.PI) / 180), color, false, w));
  }
  return out;
};
const E1: P = [150, 80];
const E2: P = [50 + 100 * Math.cos((27 * Math.PI) / 180), 80 - 100 * Math.sin((27 * Math.PI) / 180)];
const moonSys = (e: P, moon: P): DiagramElement[] => [ci(e[0], e[1], 22, undefined, C.gray, FILL.gray), ci(e[0], e[1], 8, '地', C.blue, FILL.blue, 9), ci(moon[0], moon[1], 5, undefined, C.ink, '#FFFFFF')];
const moonPhase: Figure = show([
  {
    note: '月が地球のまわりを回るようすを、地球の北の空から見た図にします。太陽は左のはるか遠くにあり、月が太陽と地球のあいだにあるときが「新月」です。❓月の公転周期とは、何のことでしょう。',
    add: [ci(50, 80, 20, '太陽', C.red, FILL.red, 10), ...orbitArc(-28, 42), ...moonSys(E1, [128, 80]), lb(128, 62, '新月', 10, C.ink, 'middle', true), lb(236, 70, '太陽 ─ 月 ─ 地球', 11, C.ink, 'middle', true), lb(236, 90, 'の順にならぶ', 11, C.ink, 'middle', true), ...band(150, T('月が太陽と地球のあいだ ＝ 新月', 178, 13, C.ink))],
  },
  {
    note: '❓公転周期とは？→月が地球のまわりを1周して、星ぼしから見て元と同じ向きにもどるまでの日数です。これは約27.3日（恒星月）です。',
    add: band(150, T('月が地球のまわりを1周する日数', 168, 14, C.blue), lb(160, 200, '＝ 公転周期 ＝ 約27.3日', 15, C.blue, 'middle', true)),
  },
  {
    note: '❓月が27.3日で1周するあいだ、地球はじっとしている？→いいえ、地球も太陽のまわりを回っていて、この間に約27°進みます（赤い線）。月は星ぼしから見て元と同じ向き（左）にもどりました。',
    add: [...fresh(), ci(50, 80, 20, '太陽', C.red, FILL.red, 10), ...orbitArc(-28, 42), ...orbitArc(0, 27, C.red, 3), ...moonSys(E2, [E2[0] - 22, E2[1]]), ln(E2[0] - 28, E2[1], E2[0] - 70, E2[1], C.blue, true), lb(E2[0] - 75, E2[1] - 8, '同じ向き', 10, C.blue, 'end', true), lb(180, 66, '約27°', 11, C.red, 'start', true), ...band(150, T('地球も約27°進んだ', 178, 14, C.red))],
  },
  {
    note: '❓このとき、月は新月になっている？→太陽は地球から見て左下の向き（だいだい色の線）にあります。月はその線の上にまだ来ていないので、新月ではありません。',
    add: [ln(E2[0], E2[1], 70, 77, '#F59E0B', true), ci(E2[0] + (50 - E2[0]) * 0.22, E2[1] + (80 - E2[1]) * 0.22, 5, undefined, C.green, FILL.green), lb(46, 46, '新月になる場所', 10, C.green, 'middle', true), ar(84, 46, 113, 44, C.green), ...band(150, T('月は、まだ新月の場所に来ていない', 178, 13, C.ink))],
  },
  {
    note: '❓新月になるには、あと何日かかる？→月は1日に360÷27.3＝約13°ずつ進みます。約27°ぶんを追いつくには、あと2日あまり（29.5−27.3＝約2.2日）かかります。',
    add: band(150, bx(20, 158, 280, 30, '27.3日 ＋ 約2.2日 ＝ 約29.5日', C.green, FILL.green, 15), lb(160, 210, '新月から次の新月まで ＝ 満ち欠けの周期', 12, C.ink, 'middle', true)),
  },
  {
    note: '❓2つの周期のちがいは？→公転周期27.3日は「星ぼしに対して1周」、満ち欠けの周期29.5日は「太陽に対して元の位置関係にもどる」日数です。地球も動くので、満ち欠けのほうが約2日長くなります。',
    add: fresh(bx(20, 16, 280, 58, undefined, C.blue, FILL.blue), lb(160, 36, '公転周期　約27.3日（恒星月）', 14, C.ink, 'middle', true), lb(160, 58, '星ぼしに対して1周', 11, C.blue, 'middle'), bx(20, 84, 280, 58, undefined, C.green, FILL.green), lb(160, 104, '満ち欠けの周期　約29.5日（朔望月）', 13, C.ink, 'middle', true), lb(160, 126, '太陽に対して元の位置関係にもどる', 11, C.green, 'middle'), lb(160, 168, '地球も動くので 29.5 ＞ 27.3', 13, C.red, 'middle', true)),
  },
  {
    note: '(2) 月はなぜ満ち欠けして見える？→月は自分で光らず、太陽の光を反射して光ります。太陽に向いた半分（黄色）が光り、地球から見える向きが位置によって変わるので、満ち欠けします。',
    add: [...fresh(), ci(160, 72, 12, '地', C.blue, FILL.blue, 10), ...[[110, 72, '新月'], [160, 28, '半月'], [210, 72, '満月'], [160, 116, '半月']].flatMap((m) => [ci(m[0] as number, m[1] as number, 10, undefined, C.ink, FILL.gray), sc(m[0] as number, m[1] as number, 10, 90, 270, C.ink, '#FDE68A'), lb(m[0] as number, (m[1] as number) + (m[1] === 116 ? 22 : m[1] === 28 ? -16 : 22), m[2] as string, 10, C.ink, 'middle', true)]), ar(6, 40, 52, 40, '#F59E0B'), ar(6, 76, 52, 76, '#F59E0B'), ar(6, 112, 52, 112, '#F59E0B'), lb(28, 28, '太陽の光', 10, '#B45309', 'middle', true), ...band(150, T('光る半分が、地球からどう見えるかで変わる', 178, 12, C.ink))],
  },
  {
    note: '答えは (1) 約27.3日（公転周期）、(2) 月は太陽の光を反射して光り、太陽・月・地球の位置関係が変わるために満ち欠けする、です。❓検算は？→新月から次の新月までの満ち欠けの周期は約29.5日で、公転周期より長いことと合っています。',
    add: fresh(bx(20, 20, 280, 34, '(1) 約27.3日（公転周期・恒星月）', C.blue, FILL.blue, 14), bx(20, 64, 280, 56, undefined, C.green, FILL.green), lb(160, 82, '(2) 月は太陽の光を反射して光る', 12, C.ink, 'middle', true), lb(160, 104, '位置関係が変わり、満ち欠けして見える', 12, C.ink, 'middle', true), lb(160, 150, '満ち欠けの周期（29.5日）＞ 公転周期（27.3日）○', 12, C.purple, 'middle', true)),
  },
], '月の公転周期と満ち欠け');

// ── kindai_rika_03：日食と月食 ──
const umbra = (pts: P[]) => pg(pts, '#9CA3AF', '#E5E7EB');
const eclipse: Figure = show([
  {
    note: '日食と月食は、どうちがうのでしょう。❓まず日食です。太陽・月・地球が、どの順にならぶときでしょう。',
    add: [ci(40, 75, 30, '太陽', C.red, FILL.red, 11), ci(150, 75, 10, '月', C.ink, FILL.gray, 10), ci(270, 75, 18, '地球', C.blue, FILL.blue, 10), ...band(150, T('日食：太陽 ─ 月 ─ 地球 の順', 178, 14, C.ink))],
  },
  {
    note: '❓日食のとき、何が起きている？→月が太陽と地球のあいだに入り、月の影が地球に落ちます。影の中にいる人には、月が太陽をかくしているように見えます。',
    add: [umbra([[150, 66], [150, 84], [258, 76], [258, 74]]), ci(150, 75, 10, '月', C.ink, FILL.gray, 10), ...band(150, T('月が太陽をかくす（月の影が地球に落ちる）', 172, 12, C.ink), lb(160, 202, 'このとき月は新月', 13, C.red, 'middle', true))],
  },
  {
    note: '❓では月食は？→月食は、太陽・地球・月の順にならび、地球の影に月が入る現象です。地球が太陽の光をさえぎるので、月が暗く見えます。',
    add: [...fresh(), ci(40, 75, 30, '太陽', C.red, FILL.red, 11), umbra([[150, 57], [150, 93], [310, 77], [310, 73]]), ci(150, 75, 18, '地球', C.blue, FILL.blue, 10), ci(270, 75, 10, '月', C.ink, FILL.gray, 10), ...band(150, T('月食：太陽 ─ 地球 ─ 月（地球の影に月が入る）', 172, 12, C.ink), lb(160, 202, 'このとき月は満月', 13, C.red, 'middle', true))],
  },
  {
    note: '❓なぜ日食は新月、月食は満月のとき？→日食では、月が太陽側を向く面（昼の面）の反対、つまり夜の面が地球を向くので新月です。月食では、地球をはさんで太陽の反対にいる月が、昼の面を全部地球に向けるので満月です。',
    add: band(150, bx(20, 158, 130, 30, '日食 ＝ 新月', C.red, FILL.red, 14), bx(170, 158, 130, 30, '月食 ＝ 満月', C.blue, FILL.blue, 14), lb(160, 212, '月の位置で、月の見え方が決まる', 12, C.ink, 'middle', true)),
  },
  {
    note: '❓でも、新月や満月は毎月あるのに、日食や月食は毎月起きないのはなぜ？→月の通り道が、地球の通り道に対して少しかたむいているので、ふだんは月が影からずれるからです。',
    add: fresh(ci(50, 80, 20, '太陽', C.red, FILL.red, 10), ci(130, 80, 14, '地', C.blue, FILL.blue, 10), ln(150, 92, 300, 60, C.gray, true), ln(150, 80, 300, 80, C.gray, false, 1.6), ci(236, 68, 7, undefined, C.ink, FILL.gray), lb(236, 52, '月', 10, C.ink, 'middle', true), lb(300, 98, '地球の影の通り道', 10, C.gray, 'end'), lb(300, 40, '月の通り道（かたむく）', 10, C.gray, 'end'), ...band(150, T('月の通り道がかたむく → ふだんは影からずれる', 172, 12, C.ink), lb(160, 202, '上から見ると、ならんで見える（横から見た図）', 11, C.gray, 'middle'))),
  },
  {
    note: '❓見える範囲はどうちがう？→日食は、月の影が小さいので、影がかかる地球のせまい地域でしか見えません。月食は、月そのものが暗くなるので、月が見える側の地球ならどこからでも見えます。',
    add: fresh(bx(20, 20, 280, 50, '日食　影のせまい地域だけで見える', C.red, FILL.red, 13), bx(20, 82, 280, 50, '月食　月が見える側ならどこでも見える', C.blue, FILL.blue, 13), ...band(150, T('影の大きさで、見える範囲がちがう', 178, 13, C.ink))),
  },
  {
    note: '答えは、日食は月が太陽をかくす現象（新月・月の影が地球に落ちる）、月食は地球の影に月が入る現象（満月）です。❓検算は？→日食は新月、月食は満月と、起こる月の形が逆にならないか確かめます。',
    add: fresh(bx(20, 16, 280, 50, undefined, C.red, FILL.red), lb(160, 32, '日食　新月のとき', 14, C.ink, 'middle', true), lb(160, 52, '月が太陽をかくす（影が地球に落ちる）', 11, C.ink, 'middle'), bx(20, 78, 280, 50, undefined, C.blue, FILL.blue), lb(160, 94, '月食　満月のとき', 14, C.ink, 'middle', true), lb(160, 114, '地球の影に月が入る', 11, C.ink, 'middle'), lb(160, 160, '検算：日食＝新月、月食＝満月（逆にしない）', 12, C.purple, 'middle', true)),
  },
], '日食と月食のちがい');

// ── kindai_sansu_r02：中点をむすぶ正方形の面積／直角三角形の垂線 ──
const SQ0 = { x: 30, y: 20, s: 100 };
const sqMid: P[] = [[80, 20], [130, 70], [80, 120], [30, 70]];
const sqCorners: P[][] = [[[30, 20], [80, 20], [30, 70]], [[80, 20], [130, 20], [130, 70]], [[130, 70], [130, 120], [80, 120]], [[30, 70], [80, 120], [30, 120]]];
const TRA: P = [40, 48], TRB: P = [40, 120], TRC: P = [136, 120];
const TRH: P = [TRA[0] + 0.36 * (TRC[0] - TRA[0]), TRA[1] + 0.36 * (TRC[1] - TRA[1])];
const areaSet: Figure = show([
  {
    note: '問(3)：1辺10cmの正方形の、4つの辺の中点を頂点とする新しい正方形をかきます。内側にできる正方形の面積は何cm²でしょう。❓まず、図をかいて、形を確かめます。',
    add: [bx(SQ0.x, SQ0.y, SQ0.s, SQ0.s, undefined, C.main, FILL.warm), pg(sqMid, C.blue, FILL.blue), lb(236, 50, '外の正方形', 11, C.main, 'middle', true), lb(236, 66, '1辺10cm', 11, C.main, 'middle', true), lb(236, 96, '内の正方形', 11, C.blue, 'middle', true), lb(236, 112, '面積は？', 12, C.red, 'middle', true), ...band(150, T('辺の中点をむすんだ正方形の面積は？', 178, 13, C.ink))],
  },
  {
    note: '❓どうすれば求められる？→外の正方形から、四すみの小さな三角形を4つ切り取ると、内側の正方形が残ります。この三角形は、直角をはさむ2辺がどちらも5cm（10cmの半分）です。',
    add: [...sqCorners.map((c) => pg(c, C.red, FILL.red)), lb(54, 14, '5cm', 10, C.red, 'middle', true), lb(136, 46, '5cm', 10, C.red, 'start', true), ...band(150, T('四すみの三角形 4つ（直角をはさむ辺は5cmと5cm）', 172, 12, C.red), lb(160, 202, '内の正方形 ＝ 外の正方形 − 4つの三角形', 13, C.ink, 'middle', true))],
  },
  {
    note: '❓三角形1つの面積は？→底辺5cm、高さ5cmなので、5×5÷2＝12.5cm²です。4つで 12.5×4＝50cm²です。外の正方形は 10×10＝100cm²なので、100−50＝50cm²が内側の正方形の面積です。',
    add: band(150, bx(20, 158, 280, 28, '三角形　5×5÷2 ＝ 12.5　→　4つで 50cm²', C.red, FILL.red, 12), bx(20, 190, 280, 34, '100 − 50 ＝ 50cm²', C.green, FILL.green, 16)),
  },
  {
    note: '❓別の方法で確かめると？→内側の正方形は、ひし形の仲間です。その対角線（赤い点線）は、外の正方形の1辺と同じ10cmが2本です。ひし形の面積は「対角線×対角線÷2」なので、10×10÷2＝50cm²で、同じ答えになります。',
    add: [...fresh(), bx(SQ0.x, SQ0.y, SQ0.s, SQ0.s, undefined, C.main, FILL.warm), pg(sqMid, C.blue, FILL.blue), ln(80, 20, 80, 120, C.red, true), ln(30, 70, 130, 70, C.red, true), lb(86, 14, '10cm', 10, C.red, 'start', true), lb(136, 74, '10cm', 10, C.red, 'start', true), ...band(150, T('ひし形の面積 ＝ 対角線×対角線÷2', 170, 13, C.ink), bx(40, 184, 240, 32, '10×10÷2 ＝ 50cm² ○', C.green, FILL.green, 15))],
  },
  {
    note: '問(4)：∠B＝90°の直角三角形ABCで、AB＝6cm、BC＝8cm、AC＝10cmです。Bから辺ACに垂線BHを引いたとき、AHの長さは何cmでしょう。',
    add: [...fresh(), pg([TRA, TRB, TRC], C.main, FILL.warm), ln(TRB[0], TRB[1], TRH[0], TRH[1], C.red, false, 2.4), lb(TRA[0] - 6, TRA[1] - 2, 'A', 12, C.ink, 'end', true), lb(TRB[0] - 6, TRB[1] + 6, 'B', 12, C.ink, 'end', true), lb(TRC[0] + 6, TRC[1] + 6, 'C', 12, C.ink, 'start', true), lb(TRH[0] + 8, TRH[1] - 4, 'H', 12, C.red, 'start', true), lb(32, 84, '6cm', 10, C.ink, 'end', true), lb(88, 134, '8cm', 10, C.ink, 'middle', true), lb(104, 78, '10cm', 10, C.ink, 'start', true), lb(236, 70, 'AH ＝ ？', 15, C.red, 'middle', true), ...band(150, T('BからACへ垂線BH（BH ⊥ AC）', 178, 13, C.ink))],
  },
  {
    note: '❓どうやって求める？→△ABH（赤）と△ABCを比べます。どちらも直角があり、∠Aが共通なので、2組の角が等しく、形が同じ（相似）です。△ABHは、△ABCを小さくした形です。',
    add: [...fresh(), pg([TRA, TRB, TRC], C.main, FILL.warm), pg([TRA, TRB, TRH], C.red, FILL.red), ln(TRB[0], TRB[1], TRH[0], TRH[1], C.red, false, 2.4), lb(TRA[0] - 6, TRA[1] - 2, 'A', 12, C.ink, 'end', true), lb(TRB[0] - 6, TRB[1] + 6, 'B', 12, C.ink, 'end', true), lb(TRC[0] + 6, TRC[1] + 6, 'C', 12, C.ink, 'start', true), lb(TRH[0] + 8, TRH[1] - 4, 'H', 12, C.red, 'start', true), lb(236, 60, '△ABH と △ABC', 12, C.ink, 'middle', true), lb(236, 80, '直角と∠Aが共通', 12, C.red, 'middle', true), lb(236, 100, '→ 相似', 13, C.green, 'middle', true), ...band(150, T('2組の角が等しい → 形が同じ', 172, 13, C.red))],
  },
  {
    note: '❓大きさの比は？→△ABCで直角のむかいの辺（斜辺）はAC＝10、△ABHで斜辺はAB＝6なので、大きさの比は 6：10＝0.6倍です。❓AHは△ABCのどの辺に当たる？→AHはABに対応するので、6×0.6＝3.6cmです。',
    add: band(150, bx(20, 158, 280, 28, '斜辺　AB 6 ÷ AC 10 ＝ 0.6倍', C.purple, FILL.purple, 13), bx(20, 190, 280, 34, 'AH ＝ AB × 0.6 ＝ 6×0.6 ＝ 3.6cm', C.green, FILL.green, 14)),
  },
  {
    note: '答えは 問(3)：50cm²、問(4)：3.6cmです。❓検算は？→BH＝8×0.6＝4.8cmを使うと、ACを底辺とした面積が 10×4.8÷2＝24cm²で、6×8÷2＝24cm²と一致します。CH＝10−3.6＝6.4cmで、3.6＋6.4＝10cmにもなります。',
    add: fresh(bx(30, 18, 260, 32, '問(3)　50cm²', C.green, FILL.green, 16), bx(30, 58, 260, 32, '問(4)　AH ＝ 3.6cm', C.green, FILL.green, 16), bx(30, 102, 260, 28, '検算　10×4.8÷2 ＝ 6×8÷2 ＝ 24cm²', C.blue, FILL.blue, 12), lb(160, 152, 'CH ＝ 10−3.6 ＝ 6.4、3.6＋6.4 ＝ 10 ○', 12, C.ink, 'middle', true)),
  },
], '面積の問題：問(3)中点の正方形・問(4)直角三角形の垂線');

// ── kindai_sansu_r03：仕事算（問(1)(2)） ──
const wk = (x: number, y: number, units: number, text: string, color: string, fill: string) => bx(x, y, units * 7, 26, text, color, fill, 12);
const workProblem: Figure = show([
  {
    note: 'ある仕事を、Aさんが1人でやると12日、Bさんが1人でやると18日かかります。❓日数がバラバラだと比べにくいので、まず、仕事全体を「いくつ」と決めておきます。',
    add: [wk(34, 40, 36, '仕事全体 ＝ 36', C.gray, FILL.gray), lb(160, 26, '仕事全体を決める', 12, C.ink, 'middle', true), ...band(150, T('12と18の公倍数 36 を、仕事全体とする', 178, 13, C.ink))],
  },
  {
    note: '❓なぜ36？→12と18のどちらでもわり切れる数（公倍数）にすると、1日の仕事量が整数になって、計算しやすいからです。Aは36÷12＝3、Bは36÷18＝2が、1日の仕事量です。',
    add: band(150, bx(20, 160, 130, 34, 'A　36÷12 ＝ 3/日', C.blue, FILL.blue, 13), bx(170, 160, 130, 34, 'B　36÷18 ＝ 2/日', C.red, FILL.red, 13), lb(160, 214, '1日の仕事量', 12, C.ink, 'middle', true)),
  },
  {
    note: '問(1)：2人で協力すると、1日にどれだけできる？→同時にはたらくので、1日の仕事量がたし算になり、3＋2＝5です。全体の36を5ずつ進めるので、36÷5＝7.2日かかります。',
    add: [...fresh(), wk(34, 30, 36, '仕事全体 36', C.gray, FILL.gray), ...[0, 1, 2, 3, 4, 5, 6].map((i) => bx(34 + i * 35, 70, 35, 26, '5', C.green, FILL.green, 12)), bx(34 + 7 * 35, 70, 7, 26, undefined, C.green, FILL.green), lb(160, 116, '1日に 5ずつ進む', 12, C.ink, 'middle', true), ...band(130, bx(20, 146, 280, 30, '36 ÷（3＋2）＝ 36÷5 ＝ 7.2日', C.green, FILL.green, 15), lb(160, 200, '（7日と5分の1日）', 12, C.gray, 'middle'))],
  },
  {
    note: '問(2)：上の仕事を2人で始めましたが、途中からBさんだけが休み、仕事が終わるまでに合計8日かかりました。❓Aさんは何日はたらいた？→休まなかったので、8日間ずっとです。8日で 3×8＝24の仕事をしました。',
    add: [...fresh(), lb(160, 20, '仕事全体 36', 12, C.ink, 'middle', true), wk(34, 30, 24, 'Aが8日で 24', C.blue, FILL.blue), wk(202, 30, 12, 'のこり ？', C.gray, FILL.gray), ...band(110, bx(30, 130, 260, 34, 'A　3 × 8 ＝ 24', C.blue, FILL.blue, 16), lb(160, 190, 'Aは休まず、8日間ずっとはたらいた', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓のこりの仕事は、だれがやった？→全体36から、Aの24を引いた 36−24＝12が、のこりです。これは、Aといっしょにはたらいた日のBが受け持った分です。',
    add: [wk(202, 30, 12, 'B 12', C.red, FILL.red), ...band(110, bx(30, 130, 260, 34, '36 − 24 ＝ 12（Bの仕事）', C.red, FILL.red, 16), lb(160, 190, 'のこり ＝ Bがやった分', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓Bは何日はたらいた？→Bの1日の仕事量は2なので、12÷2＝6日です。❓では、Bが休んだのは？→8日のうち、はたらいたのが6日なので、8−6＝2日間です。',
    add: band(110, bx(30, 126, 260, 30, 'Bがはたらいた日　12 ÷ 2 ＝ 6日', C.red, FILL.red, 14), bx(30, 164, 260, 34, 'Bが休んだ日　8 − 6 ＝ 2日間', C.green, FILL.green, 16)),
  },
  {
    note: '答えは 問(1)：7.2日、問(2)：2日間です。❓検算は？→2人が6日いっしょにはたらいて 5×6＝30、Bが休んだ2日はAだけで 3×2＝6。30＋6＝36で、仕事全体とぴったり一致します。',
    add: fresh(bx(30, 18, 260, 32, '問(1)　7.2日　問(2)　2日間', C.green, FILL.green, 15), bx(30, 62, 260, 28, '2人で6日　5×6 ＝ 30', C.purple, FILL.purple, 13), bx(30, 96, 260, 28, 'Aだけで2日　3×2 ＝ 6', C.blue, FILL.blue, 13), bx(30, 134, 260, 30, '30 ＋ 6 ＝ 36（全体）○', C.gray, FILL.gray, 14), lb(160, 192, '※ 問(3)植木算・問(4)つるかめ算は別の考え方', 10, C.gray, 'middle')),
  },
], '仕事算：仕事全体を36と決める（問(1)(2)）');

// ── kindai_rika_r02：電池3個・豆電球A（抵抗2）とB（抵抗1） ──
const R2S = () => seriesCircuit(50, 46, 110, 56, '電池3個', ['A', 'B'], 34);
const R2P = () => parallelCircuit(200, 46, 120, 56, '電池3個', ['A', 'B'], 30);
const r2Xs = parXs(200, 120, 2);
const bulbs3: Figure = show([
  {
    note: '電池3個に、豆電球A（抵抗2）とB（抵抗1）を、直列（回路1）と並列（回路2）につなぎます。電池1個・豆電球1個の電流を①と決めています。❓まず、直列の抵抗と電流を調べます。',
    add: [...R2S(), ...R2P(), lb(105, 16, '回路1（直列）', 11, C.ink, 'middle', true), lb(250, 16, '回路2（並列）', 11, C.ink, 'middle', true), ...band(150, T('A：抵抗2　B：抵抗1　電池は3個', 178, 13, C.ink))],
  },
  {
    note: '問(1)：直列の全体の抵抗は？→抵抗をたして 2＋1＝3です。電流は、電池の数÷抵抗なので、3÷3＝①です。',
    add: [lb(105, 122, '電流 ①', 12, C.blue, 'middle', true), ...band(150, bx(30, 158, 260, 28, '抵抗　2 ＋ 1 ＝ 3', C.blue, FILL.blue, 14), bx(30, 190, 260, 28, '電流　3 ÷ 3 ＝ ①', C.green, FILL.green, 14))],
  },
  {
    note: '問(2)：AとBの発熱（明るさ）の比は？→発熱は電流×電流×抵抗です。直列は電流が同じ①なので、Aは1×1×2＝2、Bは1×1×1＝1です。',
    add: band(150, bx(20, 158, 130, 28, 'A　1×1×2 ＝ 2', C.blue, FILL.blue, 13), bx(170, 158, 130, 28, 'B　1×1×1 ＝ 1', C.red, FILL.red, 13), lb(160, 208, 'A：B ＝ 2：1（抵抗の比と同じ）', 14, C.green, 'middle', true), lb(160, 228, '直列は電流が同じ → 発熱は抵抗の比', 11, C.gray, 'middle')),
  },
  {
    note: '問(3)：並列では、各豆電球が電池3個に直接つながります。❓AとBの電流は？→電流＝電池の数÷抵抗なので、Aは3÷2＝3/2、Bは3÷1＝③です。',
    add: [lb(r2Xs[0], 120, '3/2', 12, C.blue, 'middle', true), lb(r2Xs[1], 120, '③', 13, C.red, 'middle', true), ...band(150, bx(20, 158, 130, 28, 'A　3÷2 ＝ 3/2', C.blue, FILL.blue, 13), bx(170, 158, 130, 28, 'B　3÷1 ＝ ③', C.red, FILL.red, 13), lb(160, 208, '並列は、各枝が電池に直接つながる', 12, C.ink, 'middle', true))],
  },
  {
    note: '問(4)：豆電球Bは、どちらの回路で明るい？→Bの明るさは電流×電流です。回路1では電流①なので 1×1＝1、回路2では電流③なので 3×3＝9で、回路2（並列）のほうが明るくなります。',
    add: [...fresh(), lb(14, 30, '回路1（直列）のB　1×1 ＝ 1', 12, C.blue, 'start', true), bx(14, 40, 18, 22, undefined, C.blue, FILL.blue), lb(14, 90, '回路2（並列）のB　3×3 ＝ 9', 12, C.red, 'start', true), bx(14, 100, 162, 22, undefined, C.red, FILL.red), ...band(140, T('回路2（並列）のほうが明るい', 166, 14, C.green), lb(160, 200, 'Bに流れる電流が ① → ③ と3倍になるから', 12, C.ink, 'middle', true))],
  },
  {
    note: '問(5)：電流計のつなぎ方です。❓どうつなぐ？→電流計は、通った電流をはかる道具なので、はかりたい場所を通る道の途中に入れます。つまり、回路に直列につなぎます。',
    add: [...fresh(), ...seriesCircuit(50, 40, 220, 80, '電池', ['豆電球', '電流計'], 64), ...band(150, T('電流計は、回路に直列につなぐ', 172, 14, C.green), lb(160, 204, '電流が通る道の途中に入れる', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓並列につなぐと、なぜいけない？→電流計の中は電気がとても通りやすいので、並列につなぐと、電池からの大きな電流が電流計の道に集まり、こわれてしまいます。',
    add: [...fresh(), ...parallelCircuit(50, 30, 220, 90, '電池', ['豆電球', '電流計'], 64), lb(206, 75, '×', 28, C.red, 'middle', true), ...band(150, T('並列につなぐと、大きな電流が流れこんでこわれる', 172, 12, C.red), lb(160, 204, '電流計は、かならず直列', 13, C.green, 'middle', true))],
  },
  {
    note: '❓端子はどう選ぶ？→＋端子は電池の＋側につなぎます。−端子は、まずいちばん大きい5Aの端子につなぎ、針のふれが小さければ、500mA、50mAと、小さい端子につなぎかえます。❓なぜ大きい端子から？→大きな電流が流れても、針がふりきれてこわれないようにするためです。',
    add: [...fresh(), bx(20, 16, 280, 28, '＋端子は、電池の＋側につなぐ', C.red, FILL.red, 13), lb(160, 66, '−端子は、大きい端子から', 13, C.ink, 'middle', true), bx(20, 82, 80, 34, '5A', C.green, FILL.green, 15), ar(104, 99, 116, 99, C.blue), bx(120, 82, 80, 34, '500mA', C.main, FILL.warm, 13), ar(204, 99, 216, 99, C.blue), bx(220, 82, 80, 34, '50mA', C.main, FILL.warm, 13), lb(160, 132, '針のふれが小さければ、小さい端子へ', 11, C.ink, 'middle', true), ...band(150, T('大きい端子から → 針がふりきれない', 176, 13, C.green))],
  },
  {
    note: '答えは 問(1)：抵抗3・電流①、問(2)：2：1、問(3)：A 3/2・B ③、問(4)：回路2（並列）、問(5)：電流計は直列につなぎ、−端子は5Aから、です。❓検算は？→問(4)は、Bの電流が①から③に3倍で、明るさが1から9と、3×3倍になっています。',
    add: fresh(lb(160, 18, '問(1)　抵抗3　電流①', 13, C.green, 'middle', true), lb(160, 42, '問(2)　A：B ＝ 2：1', 13, C.green, 'middle', true), lb(160, 66, '問(3)　A 3/2　B ③', 13, C.green, 'middle', true), lb(160, 90, '問(4)　回路2（並列）のほうが明るい', 12, C.green, 'middle', true), lb(160, 114, '問(5)　直列につなぐ・−端子は5Aから', 12, C.green, 'middle', true), bx(30, 134, 260, 30, '検算 (4)　電流3倍 → 明るさ 1 → 9（3×3）○', C.blue, FILL.blue, 11)),
  },
], '直列・並列と電流計のつなぎ方');

// ── seiko_rika_05：地層の新旧と示準化石 ──
const strataBox = (i: number, t: string, fill: string) => bx(50, 14 + i * 30, 150, 28, t, C.gray, fill, 11);
const LAY = ['A層', 'B層', 'C層', 'D層'];
const LAYF = [FILL.yellow, FILL.green, FILL.blue, FILL.warm];
const strata: Figure = show([
  {
    note: '地層が水平にかさなっています。(1) 上の層と下の層では、どちらが古いでしょう。(2) 示準化石にふさわしいものはどれでしょう。❓まず、(1)から考えます。',
    add: [...LAY.map((t, i) => strataBox(i, t, LAYF[i])), ci(180, 14 + 2 * 30 + 14, 6, undefined, C.red, FILL.red), lb(214, 14 + 2 * 30 + 14, '← 化石', 11, C.red, 'start', true), lb(24, 28, '上', 11, C.ink, 'middle', true), lb(24, 118, '下', 11, C.ink, 'middle', true), ...band(150, T('上の層と下の層、どちらが古い？', 178, 14, C.ink))],
  },
  {
    note: '❓地層は、どうやってできる？→どろや砂などが、海や湖の底に、ふりつもってできます。先にたまったものの上に、あとからたまったものがのります。',
    add: [...fresh(), ...[3, 2, 1, 0].map((i) => strataBox(i, LAY[i], LAYF[i])), ar(110, 6, 110, 14, C.blue), lb(240, 18, 'あとから積もる', 11, C.blue, 'middle', true), lb(240, 106, '先に積もる', 11, C.red, 'middle', true), ...band(150, T('先に積もったものが下、あとのものが上', 172, 13, C.ink), lb(160, 204, 'たい積した順に、下から上へかさなる', 12, C.gray, 'middle', true))],
  },
  {
    note: '❓地層が水平なら、新旧はどうなる？→たい積した順番がそのまま残っているので、下の層ほど古く、上の層ほど新しくなります。これを「地層累重の法則」といいます。',
    add: [...fresh(), ...LAY.map((t, i) => strataBox(i, t, LAYF[i])), ar(262, 100, 262, 26, C.blue), lb(262, 14, '新しい', 12, C.blue, 'middle', true), lb(262, 114, '古い', 12, C.red, 'middle', true), ...band(150, T('(1)　下の層が古い', 172, 15, C.green), lb(160, 204, '水平なら、下ほど古い（地層累重の法則）', 12, C.gray, 'middle', true))],
  },
  {
    note: '(2)：❓示準化石とは？→地層ができた時代を知る手がかりになる化石です。ちがう場所の地層でも、同じ化石が出れば、同じ時代だと分かります。',
    add: fresh(bx(20, 24, 280, 44, '示準化石　→　時代が分かる', C.green, FILL.green, 15), bx(20, 82, 280, 44, '示相化石　→　環境が分かる', C.blue, FILL.blue, 15), ...band(150, T('化石には、2つの使い道がある', 178, 14, C.ink))),
  },
  {
    note: '❓時代の手がかりになる化石の条件は？→①栄えた期間が短く（時代がせまく決まる）、②広い地域にすんでいた（遠くの地層も比べられる）生物です。',
    add: fresh(bx(20, 16, 280, 52, undefined, C.green, FILL.green), lb(160, 32, '① 栄えた期間が短い', 14, C.ink, 'middle', true), lb(160, 54, '→ 地層の時代がせまく決まる', 11, C.green, 'middle'), bx(20, 80, 280, 52, undefined, C.green, FILL.green), lb(160, 96, '② 広い地域にすんでいた', 14, C.ink, 'middle', true), lb(160, 118, '→ 遠くはなれた地層も比べられる', 11, C.green, 'middle'), ...band(150, T('この2つをみたす化石が、示準化石', 178, 13, C.green))),
  },
  {
    note: '❓アンモナイトは？→中生代の海に広くさかえ、そのあと絶滅（ぜつめつ）した生物です。栄えた期間が限られ、世界中の海にいたので、示準化石になります。',
    add: [...fresh(), bx(20, 30, 280, 44, '中生代の海に広くさかえて、絶滅', C.green, FILL.green, 13), ci(160, 120, 18, undefined, C.main, FILL.warm), ci(160, 120, 10, undefined, C.main, '#FFFFFF'), ci(160, 120, 4, undefined, C.main, FILL.warm), lb(160, 152, 'アンモナイト', 11, C.ink, 'middle', true), ...band(158, T('(2)　イ アンモナイト', 196, 15, C.green))],
  },
  {
    note: '❓ほかの3つは？→サンゴはあたたかく浅い海、シジミは河口や湖、ブナはすずしい気候の森にすみます。長い期間いろいろな時代にいるので時代は分かりませんが、すんでいた環境が分かる「示相化石」です。',
    add: fresh(bx(20, 14, 280, 28, 'ア　サンゴ → あたたかい浅い海（示相）', C.blue, FILL.blue, 12), bx(20, 48, 280, 34, 'イ　アンモナイト → 時代が分かる（示準）', C.green, FILL.green, 12), bx(20, 88, 280, 28, 'ウ　シジミ → 河口や湖（示相）', C.blue, FILL.blue, 12), bx(20, 122, 280, 28, 'エ　ブナ → すずしい気候の森（示相）', C.blue, FILL.blue, 12), ...band(150, T('示準化石は、ア〜エの中でイだけ', 178, 13, C.green))),
  },
  {
    note: '答えは (1) 下の層が古い、(2) イ（アンモナイト）です。❓検算は？→4つの選択肢を「時代が分かる」か「環境が分かる」かで分けると、時代が分かるのはアンモナイトだけになります。',
    add: fresh(bx(20, 20, 280, 34, '(1)　下の層が古い', C.green, FILL.green, 16), bx(20, 64, 280, 34, '(2)　イ（アンモナイト）', C.green, FILL.green, 16), lb(160, 126, '検算：時代が分かる ＝ イ だけ', 13, C.ink, 'middle', true), lb(160, 150, 'ア・ウ・エ ＝ 環境が分かる（示相化石）', 12, C.ink, 'middle', true), lb(160, 184, '示準化石と示相化石を、混ぜない', 12, C.red, 'middle', true)),
  },
], '地層の新旧と示準化石');

export const figuresSchoolChugaku01: Record<string, Figure> = {
  'seifu_nankai_sansu_03': hexPercent,
  'seifu_nankai_sansu_04': speedRatio,
  'seifu_nankai_rika_04': forces,
  'takatsuki_sansu_03': cube,
  'takatsuki_sansu_06': triPattern,
  'takatsuki_rika_01': buoy,
  'takatsuki_rika_02': light,
  'takatsuki_rika_06': rootHair,
  'kaimei_sansu_1': trainRiver,
  'kaimei_sansu_3': seqFig,
  'kaimei_rika_3': springLever,
  'kaimei_sansu_max01': similar,
  'toin_sansu_01': hexSix,
  'toin_sansu_03': squareGrow,
  'toin_sansu_04': avgSpeed,
  'toin_rika_01': serial3,
  'toin_rika_03': parallel2,
  'toin_rika_06': heat45,
  'toin_rika_r01': bulbs,
  'toin_sansu_r01': meet,
  'toin_sansu_r03': profit,
  'toin_rika_r03': springLever2,
  'toin_sansu_max01': walkGraph,
  'kindai_sansu_02': cuboid,
  'kindai_sansu_03': applesOranges,
  'kindai_sansu_04': circleSquare,
  'kindai_rika_01': moonPhase,
  'kindai_rika_03': eclipse,
  'kindai_sansu_r02': areaSet,
  'kindai_sansu_r03': workProblem,
  'kindai_rika_r02': bulbs3,
  'seiko_rika_05': strata,
};
