// 中学受験 理科（小4〜小6）単元の動く図解スライド（図のなかった単元に1つずつ）。
// 「なぜ？」の連鎖で、7枚以上。上に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, band, fresh } from './diagram-kit';

const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 190, t, size, color, 'middle', true));
const cap2 = (t1: string, t2: string, color: string = C.ink) =>
  band(150, lb(160, 172, t1, 12, color, 'middle', true), lb(160, 204, t2, 12, C.gray, 'middle', true));

// ───────── new20_e4_rika_19 筋肉のはたらき ─────────
// うでの絵。bent=true でうでを曲げた形、false でのばした形。
// inner／outer は筋肉の状態（'short'＝縮む、'long'＝ゆるむ）。
const arm = (bent: boolean, inner: 'short' | 'long', outer: 'short' | 'long', withMuscle = true): DiagramElement[] => {
  const els: DiagramElement[] = [
    pg([[30, 90], [150, 90], [150, 106], [30, 106]], C.gray, FILL.gray),
    bent
      ? pg([[150, 106], [166, 106], [166, 30], [150, 30]], C.gray, FILL.gray)
      : pg([[150, 90], [270, 90], [270, 106], [150, 106]], C.gray, FILL.gray),
    ci(158, 98, 8, undefined, C.gray, FILL.warm),
    lb(80, 128, 'ほね（上うで）', 10, C.gray, 'middle', true),
  ];
  els.push(bent ? lb(222, 40, 'ほね（下うで）', 10, C.gray, 'middle', true) : lb(222, 128, 'ほね（下うで）', 10, C.gray, 'middle', true));
  if (!withMuscle) return els;
  const wi = inner === 'short' ? 9 : 3;
  const wo = outer === 'short' ? 9 : 3;
  const ci1 = inner === 'short' ? C.red : C.blue;
  const co1 = outer === 'short' ? C.red : C.blue;
  // 内側（上）の筋肉
  if (bent) els.push(ln(55, 84, 148, 56, ci1, false, wi));
  else els.push(ln(55, 84, 205, 84, ci1, false, wi));
  // 外側（下）の筋肉
  if (bent) {
    els.push(ln(55, 112, 176, 112, co1, false, wo));
    els.push(ln(176, 112, 176, 56, co1, false, wo));
  } else els.push(ln(55, 112, 205, 112, co1, false, wo));
  return els;
};
const armLabels = (inner: string, outer: string, bent: boolean): DiagramElement[] => [
  lb(60, bent ? 50 : 70, '内側' + inner, 10, C.ink, 'middle', true),
  bent ? lb(215, 120, '外側' + outer, 10, C.ink, 'middle', true) : lb(120, 142, '外側' + outer, 10, C.ink, 'middle', true),
];

const e4_19: DiagramFigure = show([
  {
    note: 'うでを曲げると、内側に力こぶができます。うでが曲がったりのびたりするのは、どんなしくみでしょう。まず、うでの骨（ほね）を見てみます。上うでと下うでの骨が、ひじの関節（かんせつ）でつながっています。',
    add: [...arm(false, 'long', 'long', false), lb(158, 76, 'ひじの関節（かんせつ）', 10, C.main, 'middle', true), ...cap('骨と骨が、関節でつながっている')],
  },
  {
    note: '❓骨だけで、うでは曲がるのでしょうか。→ 曲がりません。骨には、自分で動く力がないからです。動かす力を出すのが、骨についている筋肉（きんにく）です。筋肉は、両はしが「けん」という丈夫なひものような部分で骨についています。',
    add: [...arm(false, 'long', 'long'), lb(160, 20, '筋肉は「けん」で骨についている', 11, C.ink, 'middle', true), ...cap2('骨：支え　筋肉：動かす力', '筋肉が、関節をまたいで2つの骨についている', C.main)],
  },
  {
    note: '❓では、筋肉はどうやって骨を動かすのでしょう。→ 筋肉は、縮む（ちぢむ）ことができます。縮むと、ついている骨をぐっと引っぱります。引っぱられた骨が動くので、体が動きます。',
    add: fresh(bx(30, 20, 90, 28, '骨', C.gray, FILL.gray, 12), bx(200, 20, 90, 28, '骨', C.gray, FILL.gray, 12), ln(120, 34, 200, 34, C.blue, false, 3), lb(160, 20, 'ゆるんだ筋肉', 10, C.blue, 'middle', true), bx(30, 76, 90, 28, '骨', C.gray, FILL.gray, 12), bx(160, 76, 90, 28, '骨', C.gray, FILL.gray, 12), ln(120, 90, 160, 90, C.red, false, 8), lb(140, 70, '縮んだ筋肉', 10, C.red, 'middle', true), ar(158, 120, 138, 120, C.red), ...cap2('筋肉が縮む → 骨が引っぱられる', '縮んだぶんだけ、骨が近づく', C.red)),
  },
  {
    note: 'うでを曲げるときです。内側の筋肉（力こぶの筋肉）が縮んで太くなり、下うでの骨を引き上げます。このとき、外側の筋肉はゆるんで、長くのびた状態です。',
    add: fresh(...arm(true, 'short', 'long'), ...armLabels('の筋肉：縮む', 'の筋肉：ゆるむ', true), ...cap2('曲げるとき', '内側が縮む　外側がゆるむ', C.red)),
  },
  {
    note: '❓では、うでをのばすときは、力こぶの筋肉がのびるのでしょうか。→ ちがいます。筋肉は、自分から「のびる」ことができません。ゆるんでもとの長さにもどるだけです。のばすには、別の筋肉の力がいります。',
    add: fresh(bx(20, 22, 280, 34, '力こぶの筋肉がのびて、うでがのびる？', C.gray, FILL.gray, 12), lb(160, 90, '× まちがい', 20, C.red, 'middle', true), lb(160, 122, '筋肉は 縮むことしかできない', 13, C.ink, 'middle', true), ...cap('のばすのは、別の筋肉のしごと', C.red)),
  },
  {
    note: 'うでをのばすときです。こんどは外側の筋肉が縮んで、下うでの骨を引きもどします。力こぶをつくる内側の筋肉はゆるみます。曲げるときに縮む筋肉と、のばすときに縮む筋肉は、別の筋肉です。',
    add: fresh(...arm(false, 'long', 'short'), ...armLabels('の筋肉：ゆるむ', 'の筋肉：縮む', false), ...cap2('のばすとき', '外側が縮む　内側がゆるむ', C.red)),
  },
  {
    note: '❓なぜ、筋肉は2つがペアになっているのでしょう。→ 筋肉は、縮んで引っぱることはできても、押しもどすことはできないからです。反対向きに動かすには、反対側にある筋肉が縮んで引っぱる必要があります。片方が縮めば、もう片方はゆるむ。ひざの曲げのばしも同じです。',
    add: fresh(bx(20, 20, 130, 40, '曲げる\n内側が縮む', C.red, FILL.red, 12), bx(170, 20, 130, 40, 'のばす\n外側が縮む', C.blue, FILL.blue, 12), ar(150, 40, 170, 40, C.main), ar(170, 56, 150, 56, C.main), lb(160, 92, 'ひざも同じ', 12, C.ink, 'middle', true), lb(160, 114, '曲げるとき…うしろ側が縮む', 11, C.ink, 'middle', true), lb(160, 134, 'のばすとき…前側が縮む', 11, C.ink, 'middle', true), ...cap('引っぱる筋肉は、ペアではたらく', C.main)),
  },
  {
    note: 'まとめです。①骨は支え、筋肉は動かす力。②筋肉は縮むだけで、自分からはのびない。③曲げるときは内側が縮み、のばすときは外側が縮む。④力こぶは、縮んだ筋肉がもり上がって見えているもの。',
    add: fresh(bx(15, 10, 290, 28, '① 骨は支え、筋肉は動かす力', C.gray, FILL.gray, 12), bx(15, 44, 290, 28, '② 筋肉は縮むだけ（自分からはのびない）', C.red, FILL.red, 12), bx(15, 78, 290, 28, '③ 曲げる：内側が縮む／のばす：外側が縮む', C.main, FILL.warm, 12), bx(15, 112, 290, 28, '④ 力こぶ＝縮んだ筋肉のもり上がり', C.blue, FILL.blue, 12), ...cap('筋肉は、ペアで骨を引っぱる', C.green)),
  },
], '骨と筋肉：ペアで引っぱって動かす');

// ───────── new20_e4_rika_20 地震から身を守る ─────────
const person = (x: number, y: number, c: string = C.blue) => [ci(x, y, 7, undefined, c, FILL.yellow), ln(x, y + 7, x, y + 26, c, false, 3), ln(x - 9, y + 14, x + 9, y + 14, c, false, 3), ln(x, y + 26, x - 7, y + 38, c, false, 3), ln(x, y + 26, x + 7, y + 38, c, false, 3)];
const table = (x: number, y: number): DiagramElement[] => [bx(x, y, 120, 8, undefined, C.main, FILL.warm), ln(x + 8, y + 8, x + 8, y + 56, C.main, false, 4), ln(x + 112, y + 8, x + 112, y + 56, C.main, false, 4)];

const e4_20: DiagramFigure = show([
  {
    note: '大きな地震（じしん）が起きました。いつ起こるかは、前もって分かりません。だから、ふだんから正しい行動を知っておくことが、命を守ることにつながります。ゆれている間と、ゆれがおさまったあとに分けて考えます。',
    add: [...person(160, 40), bx(60, 100, 200, 28, '地震だ！　どうする？', C.red, FILL.red, 13), ...cap2('ゆれている間', 'ゆれがおさまったあと', C.ink)],
  },
  {
    note: 'ゆれを感じたら、まず自分の身の安全がいちばんです。屋内なら、テーブルや机など頑丈（がんじょう）な家具の下にもぐって、頭を守る姿勢をとります。',
    add: fresh(...table(100, 60), ...person(160, 92, C.blue), ln(90, 124, 230, 124, C.gray, false, 2), lb(160, 20, '頑丈な家具の下で頭を守る', 12, C.ink, 'middle', true), ...cap('ゆれている間：まず頭を守る', C.blue)),
  },
  {
    note: '❓なぜ、頭を守るのでしょうか。→ ゆれると、上から物が落ちてきたり、家具がたおれてきたりするからです。頭は、けがをするといちばん危険な場所です。頑丈な机の下なら、落ちてくる物を机が受けとめてくれます。',
    add: fresh(...table(100, 60), ...person(160, 92, C.blue), bx(120, 12, 24, 20, '物', C.red, FILL.red, 10), ar(132, 34, 132, 56, C.red), bx(178, 12, 24, 20, '物', C.red, FILL.red, 10), ar(190, 34, 190, 56, C.red), ln(90, 124, 230, 124, C.gray, false, 2), lb(30, 80, 'ガタガタ', 10, C.gray, 'middle', true), lb(290, 80, 'ガタガタ', 10, C.gray, 'middle', true), ...cap2('落ちてくる物を、机が受けとめる', '頭は、いちばん守りたい場所', C.red)),
  },
  {
    note: '❓では、なぜ倒れやすい家具やたなから離れるのでしょう。→ 家具がこちらへ倒れてくると、下じきになってしまうからです。だから、背の高い家具やたなの近くには、いないほうがよいのです。',
    add: fresh(bx(30, 20, 40, 100, 'たな', C.red, FILL.red, 11), ar(60, 40, 110, 80, C.red), ...person(150, 80, C.red), lb(160, 14, '倒れてくる！', 12, C.red, 'middle', true), ar(180, 100, 270, 100, C.green), bx(220, 20, 80, 56, '家具のない\n場所', C.green, FILL.green, 11), ...cap('倒れやすい家具から離れる', C.red)),
  },
  {
    note: '大きなゆれがおさまったら、あわてて外に飛び出してはいけません。❓なぜでしょう。→ あわてていると、ガラスの破片（はへん）や倒れた家具につまずいて、けがをするかもしれないからです。落ち着いて、まわりの安全を確かめます。',
    add: fresh(lb(60, 62, 'ガラスの破片', 10, C.red, 'middle', true), pg([[40, 100], [52, 76], [64, 100]], C.red, FILL.red), pg([[70, 100], [78, 84], [88, 100]], C.red, FILL.red), bx(110, 90, 100, 14, '倒れた家具', C.gray, FILL.gray, 10), ...person(160, 42, C.blue), lb(250, 80, '急ぐと\nつまずく', 11, C.red, 'middle', true), ...cap2('あわてて外へ飛び出さない', 'まず、まわりの安全を確かめる', C.red)),
  },
  {
    note: '確かめることは2つあります。①火の始末（しまつ）：コンロやストーブを消します。❓なぜでしょう。→ 火が出ると、被害が大きくなるからです。②ドアや窓を開けて、出口（避難経路）を確保（かくほ）します。❓なぜでしょう。→ 出口がふさがると、逃げられなくなるからです。',
    add: fresh(bx(15, 14, 140, 60, '① 火の始末\nコンロ・ストーブを消す', C.red, FILL.red, 12), bx(165, 14, 140, 60, '② 出口を作る\nドア・窓を開ける', C.green, FILL.green, 12), lb(85, 96, '火が広がるのを防ぐ', 11, C.red, 'middle', true), lb(235, 96, '逃げ道をなくさない', 11, C.green, 'middle', true), ...cap('ゆれがおさまったら、この2つ', C.main)),
  },
  {
    note: '❓なぜ、ふだんの備えが大切なのでしょう。→ 地震は、いつ起こるか分からないからです。たんすや本だなを金具で固定する、家族で避難場所と連絡方法を話し合う、懐中電灯（かいちゅうでんとう）・飲料水・食料を用意する。学校の避難訓練も、体で覚えるために行います。',
    add: fresh(bx(15, 12, 290, 28, '家具を金具で固定する', C.blue, FILL.blue, 12), bx(15, 46, 290, 28, '避難場所と連絡方法を話し合う', C.green, FILL.green, 12), bx(15, 80, 290, 28, '懐中電灯・飲料水・食料を用意する', C.main, FILL.warm, 12), bx(15, 114, 290, 28, '避難訓練で、体に覚えさせる', C.purple, FILL.purple, 12), ...cap('日ごろの備えが、命を守る', C.green)),
  },
  {
    note: 'まとめです。ゆれている間は、頑丈な家具の下で頭を守る。ゆれがおさまったら、火を消し、まわりの安全を確かめ、出口を作ってから避難する。ふだんの備えで、あわてずに行動できます。',
    add: fresh(bx(15, 12, 290, 40, 'ゆれている間\n机の下で頭を守る', C.blue, FILL.blue, 12), ar(160, 54, 160, 68, C.main), bx(15, 70, 290, 40, 'おさまったら\n火を消す・安全確認・出口を作る', C.green, FILL.green, 12), ar(160, 112, 160, 124, C.main), bx(15, 126, 290, 20, '落ち着いて避難する', C.main, FILL.warm, 12), ...cap('あわてず、順番に行動する', C.green)),
  },
], '地震：身を守る行動の順番');

// ───────── new20_e5_rika_07 メダカのおす・めす ─────────
type Pt = [number, number];
const tr = (pts: Pt[], ox: number, oy: number, s: number): Pt[] => pts.map(([x, y]) => [ox + x * s, oy + y * s] as Pt);
// メダカ（頭は右）。sex: 'o'＝おす、'm'＝めす。hl：強調する部分。
const medaka = (sex: 'o' | 'm', ox = 0, oy = 0, s = 1, hl: 'none' | 'dorsal' | 'anal' = 'none'): DiagramElement[] => {
  const body: Pt[] = [[50, 80], [70, 62], [110, 52], [170, 52], [220, 64], [260, 80], [220, 96], [170, 108], [110, 108], [70, 98]];
  const tail: Pt[] = [[50, 80], [20, 62], [20, 98]];
  const dorsal: Pt[] = sex === 'o'
    ? [[86, 54], [88, 34], [103, 34], [108, 46], [113, 34], [128, 34], [130, 54]]
    : [[86, 54], [90, 34], [128, 34], [130, 54]];
  const anal: Pt[] = sex === 'o'
    ? [[120, 106], [215, 106], [200, 130], [105, 130]]
    : [[110, 106], [215, 106], [215, 126]];
  const col = (h: boolean) => (h ? C.red : C.main);
  const fl = (h: boolean) => (h ? FILL.red : FILL.warm);
  return [
    pg(tr(tail, ox, oy, s), C.main, FILL.warm),
    pg(tr(body, ox, oy, s), C.main, FILL.yellow),
    pg(tr(dorsal, ox, oy, s), col(hl === 'dorsal'), fl(hl === 'dorsal')),
    pg(tr(anal, ox, oy, s), col(hl === 'anal'), fl(hl === 'anal')),
    ci(ox + 235 * s, oy + 74 * s, 3 * s + 1, undefined, C.ink, C.ink),
  ];
};

const e5_07: DiagramFigure = show([
  {
    note: '水そうでメダカを飼うと、たまごを産ませたくなります。そのためには、おすとめすを見分ける必要があります。メダカの体には、背びれ（せびれ）としりびれがあります。',
    add: [...medaka('o'), lb(110, 22, '背びれ', 12, C.ink, 'middle', true), lb(160, 144, 'しりびれ', 12, C.ink, 'middle', true), ...cap('見分けるポイントは、この2つのひれ')],
  },
  {
    note: '❓体の大きさや、体の色で見分けられるでしょうか。→ 見分けられません。大きさや色は、おすとめすに関係なく、メダカ1ぴきごとにちがうことがあるからです。ひれの形で見分けるのが、基本です。',
    add: fresh(bx(15, 14, 140, 40, '体の大きさ', C.gray, FILL.gray, 13), bx(165, 14, 140, 40, '体の色', C.gray, FILL.gray, 13), lb(85, 90, '×', 30, C.red, 'middle', true), lb(235, 90, '×', 30, C.red, 'middle', true), lb(160, 126, '大きさや色は見分けの目印にならない', 12, C.red, 'middle', true), ...cap('見るのは「ひれの形」', C.main)),
  },
  {
    note: 'まず背びれを見ます。おすの背びれには、切れこみがあります。赤くなっている部分に、V字の切れこみが見えます。',
    add: fresh(...medaka('o', 0, 0, 1, 'dorsal'), lb(110, 20, '切れこみ', 12, C.red, 'middle', true), ar(110, 26, 110, 42, C.red), lb(260, 20, 'おす', 18, C.blue, 'middle', true), ...cap('おす：背びれに切れこみがある', C.red)),
  },
  {
    note: 'めすの背びれには、切れこみがありません。ひれの上のふちが、なめらかにつながっています。「背びれの切れこみがあるか、ないか」が、いちばん見分けやすいポイントです。',
    add: fresh(...medaka('m', 0, 0, 1, 'dorsal'), lb(110, 20, '切れこみなし', 12, C.red, 'middle', true), ar(110, 26, 110, 42, C.red), lb(260, 20, 'めす', 18, C.red, 'middle', true), ...cap('めす：背びれに切れこみがない', C.red)),
  },
  {
    note: '次に、しりびれを見ます。おすのしりびれは幅が広く、後ろまで同じくらいの幅があります。形は平行四辺形（へいこうしへんけい）に近くなります。',
    add: fresh(...medaka('o', 0, 0, 1, 'anal'), lb(160, 144, 'しりびれ：平行四辺形に近い', 12, C.red, 'middle', true), lb(260, 20, 'おす', 18, C.blue, 'middle', true), ...cap('おす：しりびれの幅が広い', C.red)),
  },
  {
    note: 'めすのしりびれは、後ろにいくほど短くなり、三角形に近い形をしています。おすとくらべると、幅がせまく見えます。',
    add: fresh(...medaka('m', 0, 0, 1, 'anal'), lb(160, 144, 'しりびれ：三角形に近い', 12, C.red, 'middle', true), lb(260, 20, 'めす', 18, C.red, 'middle', true), ...cap('めす：後ろが短い三角形', C.red)),
  },
  {
    note: '❓なぜ、おすのしりびれは幅が広いのでしょう。→ おすは、産卵のとき、めすに体をすりよせて、めすの体を包みこむようにします。そのときに、大きなしりびれが役に立つと考えられています。ひれの形は、くらしに合っているのです。',
    add: fresh(...medaka('m', 10, 24, 0.6), ...medaka('o', 110, 64, 0.6), lb(160, 12, '産卵のとき、おすがめすを包みこむ', 11, C.ink, 'middle', true), ...cap2('おすは、めすに体をすりよせる', 'ひれの形は、くらしに合っている', C.main)),
  },
  {
    note: 'まとめです。おすは、背びれに切れこみがあり、しりびれが広い。めすは、背びれに切れこみがなく、しりびれが三角形に近い。大きさや色では見分けません。',
    add: fresh(bx(10, 10, 80, 28, '', C.gray, FILL.gray), lb(50, 24, 'ひれ', 11, C.ink, 'middle', true), bx(94, 10, 106, 28, 'おす', C.blue, FILL.blue, 13), bx(204, 10, 106, 28, 'めす', C.red, FILL.red, 13), bx(10, 44, 80, 42, '背びれ', C.gray, FILL.gray, 12), bx(94, 44, 106, 42, '切れこみ\nあり', C.blue, FILL.blue, 11), bx(204, 44, 106, 42, '切れこみ\nなし', C.red, FILL.red, 11), bx(10, 92, 80, 42, 'しりびれ', C.gray, FILL.gray, 12), bx(94, 92, 106, 42, '幅が広い\n平行四辺形', C.blue, FILL.blue, 11), bx(204, 92, 106, 42, '後ろが短い\n三角形', C.red, FILL.red, 11), ...cap('見分けるのは「ひれの形」', C.green)),
  },
], 'メダカのおす・めす：ひれの形で見分ける');

// ───────── new20_e5_rika_10 ヒトの受精と着床 ─────────
const body = (): DiagramElement[] => [
  pg([[130, 74], [190, 74], [160, 132]], C.main, FILL.red),
  ln(130, 80, 78, 62, C.main, false, 4),
  ln(190, 80, 242, 62, C.main, false, 4),
  ci(62, 64, 14, undefined, C.purple, FILL.purple),
  ci(258, 64, 14, undefined, C.purple, FILL.purple),
];
const egg = (x: number, y: number, r = 5, c: string = C.red, f: string = FILL.yellow) => ci(x, y, r, undefined, c, f);
const sperm = (x: number, y: number): DiagramElement[] => [ci(x, y, 3, undefined, C.blue, FILL.blue), ln(x + 3, y, x + 12, y + 4, C.blue, false, 1.5)];
const cells = (n: 1 | 2 | 4 | 8, cx: number, cy: number): DiagramElement[] => {
  const out: DiagramElement[] = [ci(cx, cy, 20, undefined, C.gray, FILL.gray)];
  const pos: Record<number, Pt[]> = {
    1: [[0, 0]],
    2: [[-8, 0], [8, 0]],
    4: [[-8, -8], [8, -8], [-8, 8], [8, 8]],
    8: [[-12, -8], [0, -10], [12, -8], [-12, 6], [0, 8], [12, 6], [-6, 0], [6, 0]],
  };
  const r = n === 1 ? 12 : n === 2 ? 8 : n === 4 ? 7 : 4;
  for (const [dx, dy] of pos[n]) out.push(ci(cx + dx, cy + dy, r, undefined, C.red, FILL.yellow));
  return out;
};

const e5_10: DiagramFigure = show([
  {
    note: '魚は水中にたまごを産みますが、ヒトの赤ちゃんは、母親の体の中で育ちます。ここでは、新しい命のはじまりを見ていきます。体の中には、卵巣（らんそう）、卵管（らんかん）、子宮（しきゅう）があります。',
    add: [...body(), lb(62, 44, '卵巣', 11, C.purple, 'middle', true), lb(258, 44, '卵巣', 11, C.purple, 'middle', true), lb(104, 44, '卵管', 11, C.main, 'middle', true), lb(216, 44, '卵管', 11, C.main, 'middle', true), lb(160, 104, '子宮', 12, C.ink, 'middle', true), ...cap('卵巣・卵管・子宮の位置（絵）')],
  },
  {
    note: '❓卵（卵子〈らんし〉）は、どこでつくられるのでしょう。→ 卵巣です。およそ28日ごとに、卵が1個、卵巣から送り出されます。これを排卵（はいらん）といいます。卵は約0.1〜0.2mmで、肉眼ではほとんど見えない大きさです。',
    add: [egg(62, 64, 6), ar(76, 62, 90, 60, C.red), egg(98, 62, 5), lb(62, 92, '卵巣でつくられる', 10, C.purple, 'middle', true), ...cap2('およそ28日ごとに1個、排卵する', '卵は約0.1〜0.2mm（ほぼ見えない）', C.red)],
  },
  {
    note: '❓精子（せいし）は、どこでつくられるのでしょう。→ 精巣（せいそう）です。男性の体でつくられ、数はとても多くなります。精子は、尾を使って自分で泳ぎます。卵はたまごの形で丸く、精子よりはるかに大きいのが特ちょうです。',
    add: fresh(egg(80, 60, 22), lb(80, 100, '卵\nとても大きい', 11, C.red, 'middle', true), ...sperm(190, 56), ...sperm(220, 44), ...sperm(230, 74), ...sperm(200, 86), lb(230, 112, '精子\nとても小さく、数が多い', 11, C.blue, 'middle', true), ...cap2('卵：丸くて大きい', '精子：尾で泳ぐ', C.ink)),
  },
  {
    note: '❓では、卵と精子はどこで出会うのでしょう。→ 卵管の中です。排卵された卵が卵管を進む間に精子と出会うと、受精（じゅせい）が起こります。卵と精子が結びついてできた1つの細胞を、受精卵といいます。',
    add: fresh(...body(), egg(98, 62, 5), ...sperm(118, 70), ...sperm(108, 80), lb(104, 40, '受精は卵管の中', 11, C.red, 'middle', true), lb(62, 92, '卵巣', 10, C.purple, 'middle', true), ...cap2('卵管の中で、卵と精子が結びつく', '＝受精　できた細胞が受精卵', C.red)),
  },
  {
    note: '❓なぜ、受精は卵巣の中ではなく卵管の中なのでしょう。→ 卵巣は卵をつくる場所、卵管は卵が移動しながら受精する場所と、役わりがちがうからです。まちがえやすいので、場所と役わりをセットで覚えましょう。',
    add: fresh(bx(15, 14, 140, 44, '卵巣\n卵をつくる', C.purple, FILL.purple, 12), bx(165, 14, 140, 44, '卵管\n受精が起こる', C.red, FILL.red, 12), bx(90, 80, 140, 44, '子宮\n（このあと着く）', C.main, FILL.warm, 12), ar(160, 58, 160, 78, C.main), ...cap('受精の場所は、卵管', C.red)),
  },
  {
    note: '❓受精卵は、そのあとどうなるのでしょう。→ 卵管を進みながら、2個、4個、8個…と、細胞の数をふやします。これを卵割（らんかつ）といいます。注意したいのは、数がふえても、全体の大きさはあまり変わらないことです。小さな細胞の集まりになっていきます。',
    add: fresh(...cells(1, 40, 56), ar(62, 56, 86, 56, C.main), ...cells(2, 108, 56), ar(130, 56, 154, 56, C.main), ...cells(4, 176, 56), ar(198, 56, 222, 56, C.main), ...cells(8, 244, 56), lb(40, 92, '1個', 12, C.ink, 'middle', true), lb(108, 92, '2個', 12, C.ink, 'middle', true), lb(176, 92, '4個', 12, C.ink, 'middle', true), lb(244, 92, '8個', 12, C.ink, 'middle', true), lb(160, 122, '全体の大きさは、あまり変わらない', 11, C.red, 'middle', true), ...cap('卵割：細胞の数がふえていく')),
  },
  {
    note: '卵割をくり返しながら進んだ受精卵は、受精からおよそ1週間で子宮に着きます。そして、子宮のかべに根をおろすようにくっつきます。これを着床（ちゃくしょう）といいます。',
    add: fresh(...body(), egg(160, 96, 7), ar(110, 66, 146, 90, C.main), lb(160, 60, '約1週間', 11, C.red, 'middle', true), ln(136, 82, 184, 82, C.red, false, 4), lb(160, 141, '子宮のかべにくっつく＝着床', 11, C.red, 'middle', true), ...cap('受精から約1週間で着床する')),
  },
  {
    note: '❓では、妊娠（にんしん）が成立するのは、受精のときでしょうか。→ ちがいます。着床したときです。受精してから着床するまでは、まだ子宮のかべについていないからです。着床すると、たいばんとへそのおを通して、母親の体から養分や酸素を受け取れるようになり、本格的な成長が始まります。',
    add: fresh(bx(6, 18, 70, 44, '卵巣\n卵ができる', C.purple, FILL.purple, 10), ar(76, 40, 86, 40, C.main), bx(86, 18, 70, 44, '卵管\n受精', C.red, FILL.red, 10), ar(156, 40, 166, 40, C.main), bx(166, 18, 70, 44, '子宮へ\n卵割', C.blue, FILL.blue, 10), ar(236, 40, 246, 40, C.main), bx(246, 18, 68, 44, '着床\n妊娠成立', C.green, FILL.green, 10), lb(160, 92, '着床のあと、たいばんで育つ', 12, C.ink, 'middle', true), lb(160, 118, '養分と酸素を母親から受け取る', 11, C.gray, 'middle', true), ...cap('受精 ≠ 妊娠成立　着床 ＝ 妊娠成立', C.red)),
  },
  {
    note: 'まとめです。ヒトのはじまりは、卵巣で卵ができる → 卵管で受精する → 子宮へ移動する → 子宮のかべに着床する、という一本の流れです。受精は卵管、妊娠成立は着床、と場所とできごとをセットで覚えましょう。',
    add: fresh(bx(40, 6, 240, 28, '① 卵巣で卵ができる（約28日ごとに排卵）', C.purple, FILL.purple, 11), bx(40, 40, 240, 28, '② 卵管で受精する', C.red, FILL.red, 12), bx(40, 74, 240, 28, '③ 卵割しながら子宮へ（約1週間）', C.blue, FILL.blue, 12), bx(40, 108, 240, 28, '④ 子宮のかべに着床 ＝ 妊娠成立', C.green, FILL.green, 12), ...cap('場所とできごとを、セットで覚える', C.green)),
  },
], 'ヒトのはじまり：卵巣→卵管→子宮');

// ───────── new20_e6_rika_16 変成岩 ─────────
const slab = (x: number, y: number, w: number, h: number, t: string, c: string = C.gray, f: string = FILL.gray, size = 11) => bx(x, y, w, h, t, c, f, size);

const e6_16: DiagramFigure = show([
  {
    note: '大理石（だいりせき）のテーブルを見たことがありますか。この岩石は、もともと別の岩石でした。それが、地下で強い熱や圧力を受けて、姿を変えたものです。岩石のなかでも、こうしてできるものを、変成岩（へんせいがん）といいます。',
    add: [slab(20, 30, 100, 50, '石灰岩\n（もとの岩石）', C.gray, FILL.gray, 12), ar(122, 55, 196, 55, C.red), lb(160, 40, '熱・圧力', 11, C.red, 'middle', true), slab(200, 30, 100, 50, '大理石\n（変成岩）', C.main, FILL.warm, 12), ...cap('変成岩：岩石が姿を変えたもの')],
  },
  {
    note: '❓変成岩とは、どんな岩石でしょう。→ すでにできている岩石（堆積岩〈たいせきがん〉や火成岩〈かせいがん〉）が、地下深くで、マグマの熱や、地層が押し合う強い圧力を、長い年月受け続けて、変化した岩石です。',
    add: fresh(slab(15, 14, 290, 30, '堆積岩（たいせきがん）・火成岩（かせいがん）', C.gray, FILL.gray, 12), ar(160, 46, 160, 66, C.red), lb(160, 58, '', 10), bx(15, 68, 140, 34, '熱（マグマ）', C.red, FILL.red, 12), bx(165, 68, 140, 34, '圧力（おし合う力）', C.blue, FILL.blue, 12), ar(160, 104, 160, 122, C.red), slab(15, 124, 290, 22, '変成岩', C.main, FILL.warm, 13), ...cap2('熱や圧力を、長い年月受け続ける', 'もとの岩石の、つくりが変わる', C.red)),
  },
  {
    note: '❓変成岩は、岩石がとけて固まり直したものでしょうか。→ ちがいます。固体のまま、性質だけが変わるのです。マグマが冷えて固まってできる火成岩とは、ここがちがいます。',
    add: fresh(bx(15, 14, 140, 30, '火成岩', C.red, FILL.red, 13), bx(165, 14, 140, 30, '変成岩', C.main, FILL.warm, 13), bx(15, 50, 140, 40, 'とけたマグマが\n冷えて固まる', C.red, FILL.red, 11), bx(165, 50, 140, 40, '固体のまま\n性質が変わる', C.main, FILL.warm, 11), lb(160, 118, '変成岩は、とけて固まり直すわけではない', 11, C.red, 'middle', true), ...cap('とける？ いいえ、固体のまま変化', C.red)),
  },
  {
    note: '❓熱は、どこから来るのでしょう。→ 地下で、マグマが岩石の間にわりこむ（貫入〈かんにゅう〉）と、マグマの熱で、まわりの岩石が変化します。これを接触変成（せっしょくへんせい）といいます。',
    add: fresh(slab(10, 20, 300, 110, '', C.gray, FILL.gray), pg([[120, 130], [130, 76], [160, 50], [190, 76], [200, 130]], C.red, FILL.red), lb(160, 98, 'マグマ', 12, C.red, 'middle', true), bx(70, 40, 40, 70, '熱で\n変化', C.main, FILL.warm, 10), bx(210, 40, 40, 70, '熱で\n変化', C.main, FILL.warm, 10), ...cap2('マグマの熱で、まわりの岩石が変わる', '熱による変成（接触変成）', C.red)),
  },
  {
    note: '❓圧力は、どこから来るのでしょう。→ プレートどうしがぶつかり合う場所などで、非常に大きな力が、長い間かかり続けます。岩石全体が変化します。これを広域変成（こういきへんせい）といいます。しま模様（片理〈へんり〉）ができるものもあります。',
    add: fresh(bx(10, 40, 90, 70, 'プレート', C.gray, FILL.gray, 11), bx(220, 40, 90, 70, 'プレート', C.gray, FILL.gray, 11), ar(104, 75, 134, 75, C.blue), ar(216, 75, 186, 75, C.blue), slab(136, 50, 48, 50, '', C.blue, FILL.blue, 9), lb(160, 40, 'おし合う', 10, C.blue, 'middle', true), ln(140, 62, 180, 62, C.main, false, 2), ln(140, 74, 180, 74, C.main, false, 2), ln(140, 86, 180, 86, C.main, false, 2), lb(160, 118, 'しま模様（片理）', 10, C.main, 'middle', true), ...cap2('大きな圧力が、長い間かかり続ける', '圧力による変成（広域変成）', C.blue)),
  },
  {
    note: '代表的な変成岩とそのもとの岩石です。石灰岩（せっかいがん）は、熱を受けて大理石になります。泥岩（でいがん）は、熱を受けてかたく緻密（ちみつ）なホルンフェルスになります。泥岩や砂岩は、強い圧力で、しま模様のある片岩（へんがん）や片麻岩（へんまがん）になります。',
    add: fresh(slab(10, 10, 100, 28, '石灰岩', C.gray, FILL.gray, 12), ar(112, 24, 162, 24, C.red), slab(166, 10, 140, 28, '大理石（熱）', C.main, FILL.warm, 12), slab(10, 50, 100, 28, '泥岩', C.gray, FILL.gray, 12), ar(112, 64, 162, 64, C.red), slab(166, 50, 140, 28, 'ホルンフェルス（熱）', C.main, FILL.warm, 11), slab(10, 90, 100, 28, '泥岩・砂岩', C.gray, FILL.gray, 11), ar(112, 104, 162, 104, C.blue), slab(166, 90, 140, 28, '片岩・片麻岩（圧力）', C.main, FILL.warm, 11), ...cap('もとの岩石との組み合わせが大切', C.main)),
  },
  {
    note: '❓なぜ大理石は、みがくと美しいつやが出るのでしょう。→ 熱を受けて、方解石（ほうかいせき）の結晶が大きく成長するからです。そのため、もとの石灰岩よりも、つやのある見た目になります。ただし主成分が石灰岩と同じなので、酸性雨にさらされると、表面が少しずつとけてしまいます。',
    add: fresh(...[0, 1, 2, 3, 4, 5].map((i) => ci(30 + (i % 3) * 20, 40 + Math.floor(i / 3) * 20, 5, undefined, C.gray, FILL.gray)), ar(100, 56, 132, 56, C.red), lb(116, 44, '熱', 11, C.red, 'middle', true), ci(190, 56, 28, undefined, C.main, FILL.warm), ci(250, 56, 20, undefined, C.main, FILL.warm), lb(60, 106, '石灰岩\n小さな結晶', 10, C.gray, 'middle', true), lb(220, 106, '大理石\n大きく成長した結晶', 10, C.main, 'middle', true), lb(160, 134, '→ みがくと、つやが出る', 12, C.red, 'middle', true), ...cap('結晶が大きく成長する', C.main)),
  },
  {
    note: 'まとめです。岩石は3つのグループに分けて、でき方とセットで覚えます。堆積岩はたい積してできる、火成岩はマグマが冷えて固まる、変成岩は熱や圧力で性質が変わる。変成岩は、もとの岩石との組み合わせが大切です。',
    add: fresh(bx(10, 10, 300, 36, '堆積岩：れき・砂・泥などが「たい積」してできる', C.blue, FILL.blue, 11), bx(10, 52, 300, 36, '火成岩：マグマが冷えて「固まって」できる', C.red, FILL.red, 11), bx(10, 94, 300, 36, '変成岩：熱や圧力で「性質が変化」してできる', C.main, FILL.warm, 11), ...cap('3つの岩石を、でき方で整理する', C.green)),
  },
], '変成岩：熱と圧力で生まれ変わる岩石');

export const XF_RI_FIGURES: Record<string, DiagramFigure> = {
  xf_new20_e4_rika_19: e4_19,
  xf_new20_e4_rika_20: e4_20,
  xf_new20_e5_rika_07: e5_07,
  xf_new20_e5_rika_10: e5_10,
  xf_new20_e6_rika_16: e6_16,
};

export const XF_RI_SECTIONS: Record<string, string> = {
  'new20_e4_rika_19#1': 'xf_new20_e4_rika_19',
  'new20_e4_rika_20#0': 'xf_new20_e4_rika_20',
  'new20_e5_rika_07#1': 'xf_new20_e5_rika_07',
  'new20_e5_rika_10#2': 'xf_new20_e5_rika_10',
  'new20_e6_rika_16#0': 'xf_new20_e6_rika_16',
};
