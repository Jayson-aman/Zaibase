// 高校受験 入試傾向問題（数学・第02群）の動く図解スライド。
// キー＝問題 id。「なぜそうなるの？」を根っこまでたどる形で、10枚以上で書く。
// 画面の上半分（y<146）に図、下の帯（band）に、そのスライドの式やひとこと。
import type { Figure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, stack } from './diagram-kit';

type E = DiagramElement;
const eb = (y: number, t: string, color: string, fill: string, size = 14, h = 30, x = 20, w = 280): E => bx(x, y, w, h, t, color, fill, size);
const tx = (y: number, t: string, size = 12, color: string = C.gray, bold = false): E => lb(160, y, t, size, color, 'middle', bold);
const T = (top: E[], bottom: E[]): E[] => [...top, ...band(146, ...bottom)];
const F = (top: E[], bottom: E[]): E[] => fresh(...top, ...bottom);
const RED_T = 'rgba(225,29,72,0.25)';
const BLUE_T = 'rgba(2,132,199,0.22)';

// ───────────────────────── 三角数（碁石を三角形に積む） ─────────────────────────
const triRow = (k: number, n: number): E[] => {
  const out: E[] = [];
  for (let i = 0; i < n; i++) out.push(ci(120 + i * 16, 20 + (k - 1) * 16, 6, undefined, C.blue, FILL.blue));
  return out;
};
const triBlue = (): E[] => [1, 2, 3, 4, 5].flatMap((k) => [lb(104, 20 + (k - 1) * 16 + 3, `${k}段目`, 10, C.gray, 'end'), ...triRow(k, k)]);
const triRed = (): E[] => {
  const out: E[] = [];
  for (let k = 1; k <= 5; k++) for (let i = k; i < 6; i++) out.push(ci(120 + i * 16, 20 + (k - 1) * 16, 6, undefined, C.red, FILL.red));
  return out;
};
const triSum = (): E[] => [1, 2, 3, 4, 5].map((k) => lb(216, 20 + (k - 1) * 16 + 3, `${k}＋${6 - k}＝6`, 10, C.purple, 'start'));
const sankaku: Figure = show([
  {
    note: '碁石を、1段目に1個、2段目に2個、…、n段目にn個と三角形に積みます。15段まで積んだときの合計と、合計が210個になるときの段数を考えます。図は5段まで描いています。',
    add: F([...triBlue()], [eb(152, '1段目1個・2段目2個・…・n段目n個', C.blue, FILL.blue, 13)]),
  },
  {
    note: '❓ 1＋2＋3＋…＋15 を、そのまま足し算するしかないの？ 足す数が多いと大変です。そこで「同じ三角形をもう1つ用意して、逆さにして合わせる」という工夫を使います。',
    add: T([], [eb(152, '同じ三角形を逆さにして合わせる', C.red, FILL.red, 14), tx(206, '（段を左にそろえて描いています）', 11, C.gray)]),
  },
  {
    note: '赤い碁石が、逆さにした三角形です。青い三角形のすきまに、ぴったりはまります。すると全体が長方形になりました。',
    add: T([...triRed()], [eb(152, '青（もとの三角形）＋赤（逆さの三角形）', C.purple, FILL.purple, 13)]),
  },
  {
    note: '❓ なぜ、ぴったり長方形になるの？ どの段も、青が k 個なら赤は 6−k 個。足すとどの段も6個になるからです。横の長さがそろうので、長方形になります。',
    add: T([...triSum()], [eb(152, 'どの段も 青＋赤 ＝ 6個', C.purple, FILL.purple, 14), tx(206, '段が変わっても、合計はいつも同じ', 12, C.gray)]),
  },
  {
    note: '長方形は 5段 × 6個 ＝ 30個。これは三角形2つぶんです。だから、もとの三角形は 30÷2 ＝ 15個。（1＋2＋3＋4＋5 ＝ 15 と一致します。）',
    add: F([bx(114, 14, 100, 84, undefined, C.purple, 'rgba(147,51,234,0.10)'), lb(164, 56, '5段×6個', 15, C.purple, 'middle', true), lb(164, 76, '＝30個', 15, C.purple, 'middle', true), lb(106, 56, '5段', 11, C.gray, 'end'), lb(164, 108, '6個', 11, C.gray, 'middle')], [eb(152, '30 ÷ 2 ＝ 15個', C.green, FILL.green, 16), tx(206, '三角形1つぶんは、長方形の半分', 12, C.gray)]),
  },
  {
    note: '❓ では、n段のときは？ 赤と青を合わせると、n段 × (n＋1)個の長方形ができます。その半分が三角形だから、合計は n×(n＋1)÷2 個。これが公式の意味です。',
    add: F([bx(114, 14, 120, 84, undefined, C.purple, 'rgba(147,51,234,0.10)'), lb(174, 56, 'n段 × (n＋1)個', 14, C.purple, 'middle', true), lb(106, 56, 'n段', 11, C.gray, 'end'), lb(174, 108, '(n＋1)個', 11, C.gray, 'middle')], [eb(152, 'n × (n＋1) ÷ 2', C.green, FILL.green, 17), tx(206, '「÷2」は、三角形を2つ合わせたから', 12, C.gray)]),
  },
  {
    note: '（1）15段まで積んだとき、n＝15 を入れます。長方形は 15段 × 16個 ＝ 240個。三角形はその半分の 240÷2 ＝ 120個です。',
    add: F([bx(84, 18, 150, 82, undefined, C.blue, FILL.blue), lb(159, 50, '15段 × 16個', 15, C.blue, 'middle', true), lb(159, 72, '＝ 240個', 15, C.blue, 'middle', true), lb(76, 59, '15段', 11, C.gray, 'end'), lb(159, 112, '16個', 11, C.gray, 'middle')], [eb(152, '15 × 16 ÷ 2 ＝ 120個', C.green, FILL.green, 16), tx(206, '（1）の答え 120個', 13, C.green, true)]),
  },
  {
    note: '（2）合計が210個になる段数を探します。❓ なぜ先に2倍するの？ 公式の「÷2」をはずすと、長方形の個数 n×(n＋1) がそのまま出るから。210×2 ＝ 420個の長方形を考えます。',
    add: F([bx(84, 18, 150, 82, undefined, C.purple, 'rgba(147,51,234,0.10)'), lb(159, 52, '三角形 210個 × 2', 14, C.purple, 'middle', true), lb(159, 74, '＝ 長方形 420個', 15, C.purple, 'middle', true), lb(159, 112, 'n段 × (n＋1)個', 11, C.gray, 'middle')], [eb(152, 'n × (n＋1) ＝ 420', C.purple, FILL.purple, 16), tx(206, '縦と横の差が1の長方形', 12, C.gray)]),
  },
  {
    note: '❓ なぜ「連続する2つの整数」を探すの？ 縦が n 段、横が (n＋1) 個で、横は縦より1だけ大きいからです。20×20 ＝ 400 と 21×21 ＝ 441 のあいだに 420 があるので、20と21あたりを試します。',
    add: F([eb(10, '20 × 20 ＝ 400　（少し足りない）', C.gray, FILL.gray, 13, 28), eb(46, '21 × 21 ＝ 441　（こえてしまう）', C.gray, FILL.gray, 13, 28), eb(82, '20 × 21 ＝ 420　ぴったり', C.green, FILL.green, 14, 28)], [tx(170, '縦と横が1ちがいの長方形に注目', 13, C.green, true)]),
  },
  {
    note: 'n(n＋1) ＝ 420 になるのは n＝20（20×21）。段数は正の整数なので、マイナスの解は考えません。答えは（1）120個、（2）20段です。',
    add: F([bx(84, 18, 150, 70, undefined, C.green, FILL.green), lb(159, 46, '20段 × 21個', 16, C.green, 'middle', true), lb(159, 68, '＝ 420個（2倍）', 14, C.green, 'middle', true)], [eb(152, '（1）120個　（2）20段', C.green, FILL.green, 16), tx(206, '段数は正の整数だけ', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。20段なら 20×21÷2 ＝ 210個で、条件と一致します。別の方法として、1＋2＋…＋20 を両はしから組にします。(1＋20)＝21 の組が10組で、21×10 ＝ 210 です。',
    add: F([eb(10, '20 × 21 ÷ 2 ＝ 210　○', C.green, FILL.green, 14, 30), eb(54, '(1＋20)(2＋19)…(10＋11)', C.blue, FILL.blue, 13, 30), eb(98, '21 が 10組 ＝ 210　○', C.blue, FILL.blue, 14, 30)], [tx(180, '2通りの方法で同じ 210', 13, C.green, true)]),
  },
]);

// ───────────────────────── さいころ：点(a,b)が y＝x＋1 の上 ─────────────────────────
const gx = (a: number) => 60 + 18 * a;
const gy = (b: number) => 136 - 18 * b;
const allDots = (): E[] => {
  const out: E[] = [];
  for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) out.push(ci(gx(a), gy(b), 4, undefined, C.gray, FILL.gray));
  return out;
};
const gridLabels = (): E[] => {
  const out: E[] = [lb(186, 126, 'a：大の目', 10, C.gray, 'start'), lb(186, 40, 'b：小の目', 10, C.gray, 'start')];
  for (let i = 1; i <= 6; i++) {
    out.push(lb(gx(i), 131, String(i), 10, C.gray, 'middle'));
    out.push(lb(50, gy(i) + 3, String(i), 10, C.gray, 'end'));
  }
  return out;
};
const hot = (a: number, b: number): E => ci(gx(a), gy(b), 5.5, undefined, C.red, C.red);
const sai: Figure = show([
  {
    note: '大小2つのさいころを投げ、大の目を a、小の目を b として点(a, b)を作ります。この点が直線 y＝x＋1 の上にある確率を求めます。点は a も b も1〜6なので、図のような格子状の点になります。',
    add: F([...gridLabels(), ...allDots()], [eb(152, '点(a, b) ＝ （大の目, 小の目）', C.blue, FILL.blue, 14)]),
  },
  {
    note: '❓ なぜ全部で36通り？ a が1〜6の6通りで、そのどれに対しても b が6通りあるからです。青い縦の列（a＝1）が6個で、こんな列が6本あります。大小は区別するので、(1, 2) と (2, 1) は別の点です。',
    add: T([...[1, 2, 3, 4, 5, 6].map((b) => ci(gx(1), gy(b), 5.5, undefined, C.blue, C.blue))], [eb(152, '6通り × 6通り ＝ 36通り', C.blue, FILL.blue, 15), tx(206, 'どの点も、出やすさは同じ', 12, C.gray)]),
  },
  {
    note: '❓ 「点が直線 y＝x＋1 の上にある」とは？ この直線は、y が x より1大きい点だけを集めた線です。図に青い線で描きました。この線の上に乗る点を探します。',
    add: T([ln(60, 118, 168, 10, C.blue, false, 2), lb(176, 14, 'y＝x＋1', 11, C.blue, 'start', true)], [eb(152, 'y＝x＋1 ： y は x より 1 大きい', C.blue, FILL.blue, 14)]),
  },
  {
    note: '❓ なぜ「b＝a＋1」を調べればいいの？ 点(a, b) の x座標は a、y座標は b です。直線の式 y＝x＋1 に x＝a、y＝b を入れた「b＝a＋1」が成り立てば、その点は直線の上にあります。',
    add: T([], [eb(152, 'x＝a、y＝b を入れて b＝a＋1', C.purple, FILL.purple, 14), tx(206, 'この式をみたす(a, b)を数える', 12, C.gray)]),
  },
  {
    note: 'a＝1 のとき b＝1＋1＝2。点(1, 2) は直線の上にあります（赤い点）。',
    add: T([hot(1, 2)], [eb(152, 'a＝1 → b＝2　○', C.red, FILL.red, 15)]),
  },
  {
    note: 'つづけて a＝2 → b＝3、a＝3 → b＝4、a＝4 → b＝5、a＝5 → b＝6。a が1ふえるごとに b も1ふえるので、赤い点は右上へ階段のようにならびます。',
    add: T([hot(2, 3), hot(3, 4), hot(4, 5), hot(5, 6)], [eb(152, 'a＝1〜5 のとき b＝2〜6　○', C.red, FILL.red, 14), tx(206, '赤い点が 5個', 13, C.red, true)]),
  },
  {
    note: '❓ a＝6 のときは？ b＝7 が必要ですが、さいころに7の目はありません。だから点(6, 7) は存在しません（点線の丸）。これを見落として6通りにしないのが大事です。',
    add: T([ci(gx(6), gy(7), 5.5, '×', C.gray, '#FFFFFF', 9)], [eb(152, 'a＝6 → b＝7　×（7の目はない）', C.gray, FILL.gray, 14)]),
  },
  {
    note: '条件に合う点は赤い5個。❓ なぜ「5÷36」？ 36通りの点はどれも同じ出やすさなので、確率は「条件に合う数 ÷ 全部の数」で求められるからです。',
    add: T([], [eb(152, '5 ÷ 36 ＝ 5/36', C.green, FILL.green, 17), tx(206, '条件に合う数 ÷ 全部の数', 12, C.gray)]),
  },
  {
    note: '答えは 5/36 です。約分はできません（5と36に共通の約数がないため）。',
    add: F([bx(70, 20, 180, 60, '5/36', C.green, FILL.green, 30)], [tx(120, '条件に合う点 5個 ÷ 全部 36個', 14, C.gray), tx(170, '答え 5/36', 18, C.green, true)]),
  },
  {
    note: '確かめ（検算）です。b−a の値ごとに点の数を数えて全部たします。b−a が0の点は6個、±1 は5個ずつ、±2 は4個ずつ…と減り、合計はちょうど36。b−a＝1 の点は5個で、さきほどの答えと一致します。',
    add: F([...[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].flatMap((d, i) => {
      const n = 6 - Math.abs(d);
      const x = 34 + i * 24;
      return [bx(x, 112 - n * 11, 20, n * 11, undefined, d === 1 ? C.red : C.blue, d === 1 ? FILL.red : FILL.blue), lb(x + 10, 105 - n * 11, String(n), 10, C.ink, 'middle'), lb(x + 10, 126, String(d), 10, C.gray, 'middle')];
    }), lb(160, 138, 'b−a の値', 10, C.gray, 'middle')], [eb(152, '6＋5×2＋4×2＋3×2＋2×2＋1×2＝36', C.green, FILL.green, 12), tx(206, 'b−a＝1 は 5個 ○', 12, C.red, true)]),
  },
]);

// ───────────────────────── 電車がトンネルを通りぬける ─────────────────────────
const tunnelScene = (): E[] => [bx(60, 48, 200, 44, 'トンネル 1350m', C.gray, FILL.gray, 13), ln(10, 92, 310, 92, C.ink, false, 2)];
const trainAt = (x: number, color: string = C.blue, fill: string = FILL.blue): E => bx(x, 60, 22, 24, undefined, color, fill);
const densha: Figure = show([
  {
    note: '長さ150mの電車が、長さ1350mのトンネルに入り始めてから完全に出終わるまで、30秒かかりました。電車の速さは秒速何mでしょう。（図は、トンネルが電車の9倍の長さになるよう縮めて描いています。）',
    add: F([...tunnelScene(), trainAt(38), lb(32, 54, '電車150m', 10, C.blue, 'middle')], [eb(152, '入り始め → 出終わり：30秒', C.blue, FILL.blue, 14)]),
  },
  {
    note: '❓ 「入り始め」は、電車のどこが、どこに来たとき？ 電車の先頭がトンネルの入口に来た瞬間です。ここをスタートにします。',
    add: T([ln(60, 40, 60, 100, C.red, false, 2), lb(60, 34, 'スタート', 11, C.red, 'middle', true)], [eb(152, '入り始め ＝ 先頭が入口に来たとき', C.red, FILL.red, 14)]),
  },
  {
    note: '❓ 「出終わる」は、どこが、どこに来たとき？ 電車の最後尾が出口を出た瞬間です。緑の電車がその位置で、ここをゴールにします。',
    add: T([trainAt(260, C.green, FILL.green), ln(260, 40, 260, 100, C.green, false, 2), lb(260, 34, 'ゴール', 11, C.green, 'middle', true)], [eb(152, '出終わり ＝ 最後尾が出口を出たとき', C.green, FILL.green, 14)]),
  },
  {
    note: '❓ スタートからゴールまでに、電車の先頭はどれだけ進んだ？ スタートでは先頭は入口（左）、ゴールでは先頭は出口よりさらに電車1台ぶん先（右）です。この長さが「進んだ道のり」です。',
    add: T([ar(60, 116, 282, 116, C.purple), lb(171, 108, '先頭が進んだ道のり', 11, C.purple, 'middle', true)], [eb(152, '先頭が進んだ道のりを求めよう', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ なぜ「トンネル＋電車」の長さになるの？ 先頭は、まずトンネルの1350mを進んで出口に着きます。でもまだ最後尾が中にいるので、さらに電車の長さ150mを進んで、やっと出終わるからです。',
    add: T([ar(60, 128, 260, 128, C.blue), ar(260, 128, 282, 128, C.red), lb(160, 138, 'トンネル 1350m', 11, C.blue, 'middle', true), lb(283, 138, '150m', 10, C.red, 'end', true)], [eb(152, '1350 ＋ 150 ＝ 1500m', C.purple, FILL.purple, 16)]),
  },
  {
    note: '❓ なぜ「道のり÷時間」で速さが出るの？ 速さは「1秒あたりに進む道のり」だからです。30秒で1500m進んだなら、それを30等分したものが1秒ぶんの道のり、つまり秒速です。',
    add: F([bx(30, 20, 260, 40, '30秒で 1500m 進んだ', C.blue, FILL.blue, 15), ar(160, 64, 160, 88, C.green), bx(90, 92, 140, 40, '1秒では □m', C.green, FILL.green, 15)], [eb(152, '速さ ＝ 道のり ÷ 時間', C.purple, FILL.purple, 16)]),
  },
  {
    note: '計算します。1500 ÷ 30 ＝ 50。電車の速さは秒速50mです。',
    add: F([bx(40, 20, 240, 40, '1500 ÷ 30 ＝ 50', C.green, FILL.green, 20), ar(160, 64, 160, 88, C.green), bx(70, 92, 180, 40, '秒速 50m', C.green, FILL.green, 20)], [tx(176, '道のり 1500m ÷ 時間 30秒', 13, C.gray, true)]),
  },
  {
    note: '❓ トンネルの長さだけ 1350÷30＝45 と計算してはだめ？ 先頭が出口に着いた瞬間（赤い線）、電車はまだ半分以上トンネルの中にいます。この時点は「出終わった」ではないので、道のりが足りません。',
    add: F([...tunnelScene(), trainAt(238, C.red, FILL.red), ln(260, 40, 260, 100, C.red, false, 2), lb(260, 34, '先頭が出口', 11, C.red, 'middle', true), lb(248, 104, 'まだ中に入っている', 10, C.red, 'middle')], [eb(152, '1350 ÷ 30 ＝ 45 は まちがい', C.red, FILL.red, 15), tx(206, '電車の長さ150mをわすれない', 12, C.gray)]),
  },
  {
    note: '答えは秒速50m。確かめ（検算）は、逆に 速さ × 時間 ＝ 道のり です。50×30 ＝ 1500 で、トンネル1350＋電車150 と一致します。',
    add: F([eb(12, '50 × 30 ＝ 1500m', C.blue, FILL.blue, 16, 34), eb(58, '1350 ＋ 150 ＝ 1500m', C.blue, FILL.blue, 16, 34), eb(104, '同じ 1500 ○', C.green, FILL.green, 16, 30)], [tx(176, '答え 秒速50m', 17, C.green, true)]),
  },
  {
    note: '別の見方でも確かめます。秒速50mだと、電車1台ぶん150mは 150÷50＝3秒、トンネル1350mは 1350÷50＝27秒で進みます。27秒＋3秒 ＝ 30秒で、問題の条件と一致します。',
    add: F([bx(30, 30, 216, 40, '27秒：先頭が出口まで', C.blue, FILL.blue, 13), bx(246, 30, 24, 40, '3秒', C.red, FILL.red, 10), lb(138, 88, '1350 ÷ 50 ＝ 27', 12, C.blue, 'middle'), lb(258, 88, '150÷50＝3', 10, C.red, 'middle')], [eb(152, '27秒 ＋ 3秒 ＝ 30秒　○', C.green, FILL.green, 16), tx(206, '条件の30秒と一致', 12, C.gray)]),
  },
]);

// ───────────────────────── 流水算（船の上りと下り） ─────────────────────────
const river = (): E[] => [bx(20, 30, 280, 90, undefined, C.blue, FILL.blue), ar(120, 18, 200, 18, C.blue), lb(212, 20, '川の流れ', 11, C.blue, 'start', true)];
const ryusui: Figure = show([
  {
    note: '船が川を48km上るのに4時間、48km下るのに3時間かかりました。上りは流れにさからう向き、下りは流れにのる向きです。船の静水時の速さ（流れのない水での速さ）と川の流れの速さを求めます。',
    add: F([...river(), ar(260, 58, 60, 58, C.red), lb(160, 48, '上り 48km：4時間', 12, C.red, 'middle', true), ar(60, 98, 260, 98, C.green), lb(160, 88, '下り 48km：3時間', 12, C.green, 'middle', true)], [eb(152, '静水時の速さ？ 流れの速さ？', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ まず、上りと下りの速さは？ 速さ＝道のり÷時間 なので、上りは 48÷4＝時速12km、下りは 48÷3＝時速16km。同じ48kmでも、下りのほうが速いことが分かります。',
    add: T([lb(160, 72, '48÷4＝時速12km', 12, C.red, 'middle', true), lb(160, 112, '48÷3＝時速16km', 12, C.green, 'middle', true)], [eb(152, '上り 時速12km　下り 時速16km', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ なぜ下りのほうが速いの？ 下りは、船の力に流れの力が「足され」、上りは、船の力から流れの力が「引かれる」からです。緑の部分が流れ、赤い部分が流れに引かれて失った分です。',
    add: F([bx(40, 30, 84, 26, '静水時', C.blue, FILL.blue, 12), bx(124, 30, 12, 26, undefined, C.green, FILL.green), lb(146, 43, '下り＝静水時＋流れ', 12, C.green, 'start', true), bx(40, 80, 72, 26, undefined, C.blue, FILL.blue), bx(112, 80, 12, 26, undefined, C.red, FILL.red), lb(146, 93, '上り＝静水時−流れ', 12, C.red, 'start', true)], [eb(152, '下りは流れの分だけ速く、上りは遅い', C.purple, FILL.purple, 13)]),
  },
  {
    note: '❓ では、下りと上りの速さの差は何を表している？ 16−12＝4 です。下りでは流れが「＋」、上りでは「−」なので、差の4には流れが2回ぶん入っています。赤い部分が、その差です。',
    add: F([bx(40, 30, 96, 26, '下り 16', C.green, FILL.green, 13), bx(40, 70, 72, 26, '上り 12', C.red, FILL.red, 13), bx(112, 70, 24, 26, '差 4', C.purple, FILL.purple, 10), ar(136, 58, 136, 68, C.purple, true)], [eb(152, '16−12 ＝ 4 ＝ 流れ × 2', C.purple, FILL.purple, 15), tx(206, '流れが「＋」と「−」で2回', 12, C.gray)]),
  },
  {
    note: '❓ なぜ差を2でわると流れの速さになるの？ 差の4は、同じ大きさの流れ2つぶんだから、半分にすれば流れ1つぶんです。4÷2＝2。川の流れは時速2kmです。',
    add: T([ln(124, 26, 124, 100, C.red, true), lb(124, 118, '半分ずつ：流れ 2 と 2', 11, C.red, 'middle', true)], [eb(152, '流れ ＝ 4 ÷ 2 ＝ 時速2km', C.green, FILL.green, 16)]),
  },
  {
    note: '❓ 静水時の速さは？ 上りの12は、静水時より流れ2だけ遅く、下りの16は、静水時より流れ2だけ速い。つまり静水時は12と16のちょうど真ん中です。',
    add: F([ln(40, 70, 280, 70, C.gray), ci(70, 70, 16, '12', C.red, FILL.red, 12), ci(160, 70, 18, '14', C.green, FILL.green, 13), ci(250, 70, 16, '16', C.green, FILL.green, 12), ar(90, 70, 140, 70, C.red), ar(230, 70, 180, 70, C.green), lb(115, 56, '＋2', 11, C.red, 'middle', true), lb(205, 56, '−2', 11, C.green, 'middle', true), lb(70, 100, '上り', 11, C.gray, 'middle'), lb(160, 102, '静水時', 11, C.green, 'middle', true), lb(250, 100, '下り', 11, C.gray, 'middle')], [eb(152, '(12＋16) ÷ 2 ＝ 14', C.green, FILL.green, 16)]),
  },
  {
    note: '答えは、船の静水時の速さが時速14km、川の流れの速さが時速2kmです。',
    add: F([bx(40, 20, 240, 40, '静水時の速さ 時速14km', C.green, FILL.green, 17), bx(40, 76, 240, 40, '川の流れ 時速2km', C.blue, FILL.blue, 17)], [tx(176, '上り12 ＝ 14−2　下り16 ＝ 14＋2', 14, C.gray, true)]),
  },
  {
    note: '確かめ（検算）です。上りは 14−2＝12 で、12×4＝48km。下りは 14＋2＝16 で、16×3＝48km。どちらも問題の48kmと一致します。',
    add: F([eb(14, '上り：(14−2)×4 ＝ 12×4 ＝ 48km', C.red, FILL.red, 14, 34), eb(62, '下り：(14＋2)×3 ＝ 16×3 ＝ 48km', C.green, FILL.green, 14, 34)], [eb(152, 'どちらも 48km ○', C.green, FILL.green, 16)]),
  },
  {
    note: '❓ 上りを「静水時＋流れ」と考えてはだめ？ そうすると上りのほうが速くなってしまい、「上りは4時間、下りは3時間（上りのほうが時間がかかる）」という問題の条件と食いちがいます。上りは必ず「引く」です。',
    add: F([eb(12, '上りを 14＋2＝16 とすると', C.red, FILL.red, 14, 32), eb(56, '48÷16＝3時間（下りと同じ）', C.red, FILL.red, 14, 32), eb(100, '問題は 4時間 → ×', C.red, FILL.red, 14, 30)], [tx(176, '上り ＝ 流れに逆らう ＝ 引く', 14, C.green, true)]),
  },
  {
    note: '別の解き方です。上りと下りを足すと、（静水時−流れ）＋（静水時＋流れ）で、流れの分が打ち消しあい、静水時が2つ分だけ残ります。12＋16＝28 が静水時2つ分なので、28÷2＝14。',
    add: F([bx(40, 30, 72, 26, '上り 12', C.red, FILL.red, 12), bx(112, 30, 96, 26, '下り 16', C.green, FILL.green, 12), bx(40, 76, 84, 26, '静水時 14', C.blue, FILL.blue, 12), bx(124, 76, 84, 26, '静水時 14', C.blue, FILL.blue, 12), lb(232, 58, '同じ長さ', 11, C.purple, 'start', true)], [eb(152, '12＋16 ＝ 28 ＝ 静水時 × 2', C.purple, FILL.purple, 15), tx(206, '流れの分が打ち消しあう', 12, C.gray)]),
  },
]);

// ───────────────────────── 池の周り（出会い算と追いつき算） ─────────────────────────
const ike: Figure = show([
  {
    note: '1周1800mの池の周りを、AとBが同じ地点から同時に出発します。反対向きに進むと6分後に出会い、同じ向きに進むと、Bの速いほうが30分後にAに追いつきます。2人の分速を求めます。',
    add: F([ci(160, 80, 55, '池 1周1800m', C.blue, FILL.blue, 12), ci(150, 24, 8, 'A', C.blue, '#FFFFFF', 10), ci(170, 24, 8, 'B', C.red, '#FFFFFF', 10), ar(180, 20, 226, 38, C.red), ar(140, 20, 94, 38, C.blue)], [eb(152, '1周 1800m　Bのほうが速い', C.blue, FILL.blue, 14, 28), tx(200, '反対向き：6分で出会う／同じ向き：30分で追いつく', 11, C.gray)]),
  },
  {
    note: '❓ 反対向きに進んで出会うまでに、2人は池のどれだけを走った？ 池を1か所で切って一本の道にのばすと、両はしが同じ出発点です。Aは左から、Bは右から進んで出会うので、2人あわせて、道の全体（1周）を走ったことになります。',
    add: F([bx(30, 60, 260, 24, undefined, C.gray, FILL.gray), ar(32, 48, 132, 48, C.blue), ar(288, 48, 136, 48, C.red), lb(82, 40, 'A', 12, C.blue, 'middle', true), lb(212, 40, 'B', 12, C.red, 'middle', true), ln(134, 54, 134, 92, C.purple, true, 2), lb(134, 104, '出会った場所', 11, C.purple, 'middle', true), lb(30, 104, '出発点', 10, C.gray, 'start'), lb(290, 104, '出発点', 10, C.gray, 'end')], [eb(152, '出会うまでに 2人で ちょうど1周 ＝ 1800m', C.purple, FILL.purple, 13)]),
  },
  {
    note: '❓ なぜ「分速の和」を使うの？ Aが6分で走った道のりと、Bが6分で走った道のりを足すと1800m。道のりは「分速×6分」なので、（Aの分速＋Bの分速）×6 ＝ 1800 と、分速の和でまとめられるからです。',
    add: F([bx(20, 20, 122, 40, 'Aが6分で走った道のり', C.blue, FILL.blue, 11), lb(160, 42, '＋', 18, C.ink, 'middle', true), bx(178, 20, 122, 40, 'Bが6分で走った道のり', C.red, FILL.red, 11), ar(160, 66, 160, 84, C.purple), bx(60, 88, 200, 34, '＝ 1800m（1周）', C.green, FILL.green, 15)], [eb(152, '(Aの分速＋Bの分速) × 6 ＝ 1800', C.purple, FILL.purple, 13)]),
  },
  {
    note: '分速の和は 1800÷6＝300。A と B の分速をあわせると300mです。',
    add: F([bx(30, 30, 260, 50, 'Aの分速 ＋ Bの分速 ＝ 300m', C.purple, FILL.purple, 18)], [eb(152, '1800 ÷ 6 ＝ 300', C.purple, FILL.purple, 18), tx(206, '（1分あたりの、2人の道のりの合計）', 12, C.gray)]),
  },
  {
    note: '次に、同じ向きの場合です。Bのほうが速いので、BはAより多く走ります。追いついたとき、BはAより、ちょうど1周ぶん（1800m）多く走っています。図では、Bの道のりのうち、黄色い部分がAより多い分です。',
    add: F([bx(30, 36, 140, 26, 'Aが30分で走った道のり', C.blue, FILL.blue, 11), bx(30, 76, 140, 26, undefined, C.red, FILL.red), bx(170, 76, 100, 26, '多い分＝1周', C.red, FILL.yellow, 11), lb(100, 89, 'Bが30分で走った道のり', 11, C.red, 'middle', true)], [eb(152, 'Bは Aより 1周（1800m）多く走った', C.red, FILL.red, 14)]),
  },
  {
    note: '❓ なぜ「1周多く」で追いつくの？ 同じ場所から同じ向きに出発して、速いBがAの後ろから追いつくのは、BがAを1周ぶん引きはなして、Aに背後から並んだときだからです。',
    add: T([], [eb(152, '速いBが1周ぶん差をつけて、Aに並ぶ', C.red, FILL.red, 14), tx(206, 'これが「追いつく」', 12, C.gray)]),
  },
  {
    note: '❓ なぜ「分速の差」を使うの？ 1分たつごとに、BはAより（Bの分速−Aの分速）mだけ多く進み、差が広がっていきます。30分で差が1800mになったので、（B−A）×30 ＝ 1800 です。',
    add: T([lb(160, 122, '1分で、差が (B−A)m ずつ広がる', 12, C.purple, 'middle', true)], [eb(152, '(Bの分速−Aの分速) × 30 ＝ 1800', C.purple, FILL.purple, 13)]),
  },
  {
    note: '分速の差は 1800÷30＝60。Bの分速は、Aの分速より60m大きいことが分かります。',
    add: F([bx(30, 30, 260, 50, 'Bの分速 − Aの分速 ＝ 60m', C.purple, FILL.purple, 18)], [eb(152, '1800 ÷ 30 ＝ 60', C.purple, FILL.purple, 18)]),
  },
  {
    note: '❓ 和が300、差が60から、AとBをどう求める？ 線分図で考えます。上はA＋B＝300。下はBを「Aと同じ長さ」と「60」に分けたものです（BはAより60長いから）。',
    add: F([bx(30, 30, 72, 26, 'A', C.blue, FILL.blue, 13), bx(102, 30, 108, 26, 'B', C.red, FILL.red, 13), lb(240, 43, '合わせて300', 11, C.purple, 'start', true), bx(102, 76, 72, 26, 'Aと同じ長さ', C.blue, FILL.blue, 10), bx(174, 76, 36, 26, '60', C.red, FILL.yellow, 11), lb(92, 89, 'B ＝', 12, C.red, 'end', true)], [eb(152, 'B ＝ A ＋ 60', C.red, FILL.red, 16), tx(206, 'BはAより60大きい', 12, C.gray)]),
  },
  {
    note: '❓ Bを「A＋60」に置きかえると？ 300の中に、Aが2つと60が入ります。だから300から60をひけばAが2つ分、240。それを2でわって、Aは120です。',
    add: F([bx(30, 40, 72, 30, 'A', C.blue, FILL.blue, 14), bx(102, 40, 72, 30, 'A', C.blue, FILL.blue, 14), bx(174, 40, 36, 30, '60', C.red, FILL.yellow, 12), lb(120, 30, '全部で 300', 12, C.purple, 'middle', true)], [eb(152, '(300 − 60) ÷ 2 ＝ 120', C.green, FILL.green, 16), tx(206, 'A ＝ 分速120m', 13, C.blue, true)]),
  },
  {
    note: 'Aの分速は120m。Bは 300−120＝180m です。答えは、Aが分速120m、Bが分速180mです。',
    add: F([bx(40, 20, 240, 40, 'Aの速さ 分速120m', C.blue, FILL.blue, 17), bx(40, 76, 240, 40, 'Bの速さ 分速180m', C.red, FILL.red, 17)], [tx(176, 'B ＝ 300 − 120 ＝ 180', 14, C.gray, true)]),
  },
  {
    note: '確かめ（検算）です。反対向きは (120＋180)×6 ＝ 300×6 ＝ 1800m。同じ向きは (180−120)×30 ＝ 60×30 ＝ 1800m。どちらも1周の1800mと一致します。ちなみに、出会いに差、追いつきに和を使うのがよくあるまちがいです。',
    add: F([eb(14, '出会い：(120＋180)×6 ＝ 1800m', C.blue, FILL.blue, 14, 34), eb(62, '追いつき：(180−120)×30 ＝ 1800m', C.red, FILL.red, 14, 34)], [eb(152, '反対向きは和、同じ向きは差', C.green, FILL.green, 15), tx(206, 'どちらも 1周 1800m ○', 12, C.gray)]),
  },
]);

// ───────────────────────── 四隅を切り取ってつくる箱 ─────────────────────────
const hako: Figure = show([
  {
    note: '縦20cm、横30cmの長方形の厚紙があります。四隅から1辺 x cm の正方形を切り取り、折り曲げて、ふたのない箱を作ります。箱の底面積を336cm²にするには、x をいくつにすればよいでしょう。',
    add: F([bx(60, 20, 150, 100, undefined, C.blue, FILL.blue), bx(60, 20, 15, 15, 'x', C.red, FILL.red, 9), bx(195, 20, 15, 15, 'x', C.red, FILL.red, 9), bx(60, 105, 15, 15, 'x', C.red, FILL.red, 9), bx(195, 105, 15, 15, 'x', C.red, FILL.red, 9), lb(135, 13, '30cm', 11, C.gray, 'middle'), lb(54, 72, '20cm', 11, C.gray, 'end')], [eb(152, '底面積が 336cm² になる x は？', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ なぜ、底面の縦は 20−2x なの？ 縦の辺の上と下の、両はしから x ずつ切り取るからです。20cmから x を2回ひくので、のこりは 20−x−x ＝ 20−2x。',
    add: F([bx(40, 20, 40, 15, 'x', C.red, FILL.red, 10), bx(40, 35, 40, 70, '20−2x', C.blue, FILL.blue, 11), bx(40, 105, 40, 15, 'x', C.red, FILL.red, 10), ln(32, 20, 32, 120, C.gray), lb(26, 70, '20cm', 11, C.gray, 'end'), lb(100, 34, '両はしから x ずつ切る', 12, C.ink, 'start'), lb(100, 68, 'のこり ＝ 20 − x − x', 12, C.ink, 'start'), lb(100, 98, '＝ 20 − 2x', 14, C.blue, 'start', true)], [eb(152, '縦 ＝ 20 − 2x', C.blue, FILL.blue, 16)]),
  },
  {
    note: '横も同じです。30cmの両はしから x ずつ切り取るので、のこりは 30−2x になります。',
    add: F([bx(40, 50, 15, 30, 'x', C.red, FILL.red, 10), bx(55, 50, 210, 30, '30−2x', C.blue, FILL.blue, 13), bx(265, 50, 15, 30, 'x', C.red, FILL.red, 10), ln(40, 42, 280, 42, C.gray), lb(160, 34, '30cm', 11, C.gray, 'middle'), lb(160, 104, '30 − x − x ＝ 30 − 2x', 13, C.blue, 'middle', true)], [eb(152, '横 ＝ 30 − 2x', C.blue, FILL.blue, 16)]),
  },
  {
    note: '折り曲げてできる箱の底面は、縦 (20−2x)、横 (30−2x) の長方形です。底面積は 縦×横 なので、(20−2x)(30−2x) ＝ 336 という式が立ちます。',
    add: F([bx(70, 30, 180, 90, '底面積 336cm²', C.green, FILL.green, 16), lb(160, 22, '30−2x', 12, C.blue, 'middle', true), lb(62, 75, '20−2x', 12, C.blue, 'end', true)], [eb(152, '(20−2x)(30−2x) ＝ 336', C.purple, FILL.purple, 16)]),
  },
  {
    note: '❓ x はどんな値でもいいの？ 縦は 20−2x なので、2x が20をこえると縦が0以下になり、箱が作れません。x＝10 ならちょうど縦が0です。だから、0＜x＜10 です。',
    add: F([bx(40, 20, 40, 50, 'x＝10', C.red, FILL.red, 11), bx(40, 70, 40, 50, 'x＝10', C.red, FILL.red, 11), lb(100, 50, '2回切ると 20cm を', 12, C.ink, 'start'), lb(100, 72, 'ぜんぶ使って 縦が 0', 12, C.ink, 'start'), lb(100, 100, '→ x は 10 より小さい', 12, C.red, 'start', true)], [eb(152, '0 ＜ x ＜ 10', C.red, FILL.red, 17)]),
  },
  {
    note: '❓ (20−2x)(30−2x) を展開すると、なぜ 600−100x＋4x² になるの？ 面積で考えます。まず、大きな長方形 20×30＝600 から、2本の帯（赤）をひきます。縦の帯は 20×2x＝40x、横の帯は 30×2x＝60x。',
    add: F([bx(30, 20, 120, 80, undefined, C.blue, FILL.blue), bx(126, 20, 24, 80, undefined, C.red, RED_T), bx(30, 76, 120, 24, undefined, C.red, RED_T), lb(78, 48, '(30−2x)', 10, C.blue, 'middle', true), lb(78, 62, '×(20−2x)', 10, C.blue, 'middle', true), lb(170, 34, '全体 30×20 ＝ 600', 11, C.ink, 'start'), lb(170, 58, '縦の帯 20×2x ＝ 40x', 11, C.red, 'start'), lb(170, 82, '横の帯 30×2x ＝ 60x', 11, C.red, 'start')], [eb(152, '600 − 40x − 60x ＝ 600 − 100x', C.red, FILL.red, 14)]),
  },
  {
    note: '❓ でも、ひきすぎていませんか？ 右下の角の 2x×2x は、縦の帯にも横の帯にも入っていて、2回ひいてしまいました。そこで、1回ぶんの 4x² を足してもどします。',
    add: T([bx(126, 76, 24, 24, undefined, C.purple, 'rgba(147,51,234,0.5)'), lb(170, 106, '角 2x×2x ＝ 4x² は2回ひいた', 11, C.purple, 'start', true)], [eb(152, '600 − 100x ＋ 4x²', C.purple, FILL.purple, 17), tx(206, '(20−2x)(30−2x) ＝ 600−100x＋4x²', 12, C.gray)]),
  },
  {
    note: '展開した式を336とおいて整理します。600−100x＋4x² ＝ 336 より、4x²−100x＋264 ＝ 0。❓ なぜ4でわってよいの？ 全部の項が4の倍数で、両辺を同じ数でわっても解は変わらないからです。x²−25x＋66 ＝ 0。',
    add: F(stack(['600−100x＋4x² ＝ 336', '4x²−100x＋264 ＝ 0', 'x²−25x＋66 ＝ 0'], 30, 260, 14, { h: 30, gap: 14, color: C.blue, fill: FILL.blue, size: 14 }).flat(), [eb(152, '両辺を 4 でわっても、解は同じ', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ なぜ「かけて66、たして25」の2数を探すの？ (x−a)(x−b) を展開すると x²−(a＋b)x＋ab。だから a＋b＝25、ab＝66 となる a と b が見つかれば、因数分解できます。',
    add: F([eb(8, '1と66 → 和 67　×', C.gray, FILL.gray, 12, 26), eb(40, '2と33 → 和 35　×', C.gray, FILL.gray, 12, 26), eb(72, '3と22 → 和 25　○', C.green, FILL.green, 13, 26), eb(104, '6と11 → 和 17　×', C.gray, FILL.gray, 12, 26)], [eb(152, '(x−3)(x−22) ＝ 0 → x＝3、22', C.green, FILL.green, 15)]),
  },
  {
    note: '❓ x＝22 は、なぜだめなの？ 縦の厚紙は20cmしかないので、22cmも切り取れません。0＜x＜10 の範囲に入っているのは x＝3 だけです。',
    add: F([ln(30, 80, 290, 80, C.gray), bx(30, 44, 100, 18, '0 ＜ x ＜ 10', C.blue, FILL.blue, 11), ci(60, 80, 10, '3', C.green, FILL.green, 12), ci(250, 80, 12, '22', C.red, FILL.red, 12), lb(60, 106, '○ 範囲の中', 11, C.green, 'middle', true), lb(250, 106, '× 範囲の外', 11, C.red, 'middle', true)], [eb(152, 'x ＝ 3 cm', C.green, FILL.green, 18)]),
  },
  {
    note: '確かめ（検算）です。x＝3 を入れると、縦 20−6＝14cm、横 30−6＝24cm。底面積は 14×24 ＝ 336cm² で、条件と一致します。',
    add: F([bx(100, 30, 120, 70, '24 × 14 ＝ 336', C.green, FILL.green, 15), lb(160, 22, '24cm', 11, C.gray, 'middle'), lb(92, 65, '14cm', 11, C.gray, 'end')], [eb(152, '(20−6)(30−6) ＝ 14×24 ＝ 336　○', C.green, FILL.green, 14)]),
  },
  {
    note: '別の見方でも確かめられます。336 ＝ 14×24 のように、差が10の2数に分けます。❓ なぜ差が10？ 縦も横も2xずつ短くなるので、差は もとの 30−20＝10 のまま変わらないからです。縦は14だから x＝(20−14)÷2＝3。',
    add: F([eb(12, 'もとの 横−縦 ＝ 30−20 ＝ 10', C.blue, FILL.blue, 14, 32), eb(56, '両方 2x 短くなるので 差は 10 のまま', C.purple, FILL.purple, 13, 32), eb(100, '336 ＝ 14 × 24（差10）→ x＝3', C.green, FILL.green, 14, 30)], [tx(176, '(20−14)÷2 ＝ 3', 15, C.green, true)]),
  },
]);

// ───────────────────────── 正四角錐台の体積 ─────────────────────────
const dai = (): E => pg([[120, 130], [200, 130], [180, 70], [140, 70]], C.blue, FILL.blue);
const daiTop = (): E[] => [
  dai(),
  lb(160, 141, '8cm', 11, C.gray, 'middle', true),
  lb(160, 62, '4cm', 11, C.gray, 'middle', true),
  ln(214, 70, 214, 130, C.gray), lb(220, 100, '6cm', 11, C.gray, 'start', true),
];
const dai4: Figure = show([
  {
    note: '上の面が1辺4cmの正方形、下の面が1辺8cm、高さ6cmの正四角錐台です。図は真横から見た断面です。この体積を、2つの正四角錐の差として求めます。',
    add: F(daiTop(), [eb(152, '正四角錐台の体積は？', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ なぜ、とがった頂点までのばすの？ 四角錐の体積（底面積×高さ÷3）は、先がとがった形にしか使えないからです。台の形のままでは使えないので、切り取られた「頭」を足して大きな四角錐にし、あとで頭をひきます。',
    add: T([ln(140, 70, 160, 10, C.gray, true), ln(180, 70, 160, 10, C.gray, true), pg([[140, 70], [180, 70], [160, 10]], C.red, FILL.yellow)], [eb(152, '大きい四角錐 − 頭の小さい四角錐', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ 頭の高さは、どうやって分かるの？ 小さい四角錐と大きい四角錐は、同じ形の拡大・縮小（相似）です。底辺は 4cm と 8cm（太い赤線と青線）だから、相似比は 4：8 ＝ 1：2 です。',
    add: T([ln(140, 70, 180, 70, C.red, false, 3), ln(120, 130, 200, 130, C.blue, false, 3)], [eb(152, '底辺 4：8 ＝ 1：2', C.purple, FILL.purple, 17), tx(206, '小さい錐 と 大きい錐 は相似', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、高さの比も 1：2 なの？ 相似とは、形を同じ倍率で拡大・縮小すること。長さはどこも同じ倍率です。底辺が半分の形なら、高さも半分です。小さい錐の高さを h とすると、大きい錐は 2h。',
    add: T([ln(96, 10, 96, 70, C.red), ln(70, 10, 70, 130, C.blue), lb(90, 40, 'h', 13, C.red, 'end', true), lb(64, 70, '2h', 13, C.blue, 'end', true), ln(66, 10, 100, 10, C.gray, true), ln(66, 70, 100, 70, C.gray, true), ln(66, 130, 120, 130, C.gray, true)], [eb(152, '高さの比も 小：大 ＝ h：2h ＝ 1：2', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ では、h はいくつ？ 大きい高さ 2h から小さい高さ h をひいた部分が、台の高さ6cmです。2h−h ＝ h ＝ 6 なので、h＝6。小さい四角錐の高さは6cm、大きい四角錐の高さは12cmです。',
    add: T([lb(300, 30, '小の高さ 6cm', 11, C.red, 'end', true), lb(300, 124, '大の高さ 12cm', 11, C.blue, 'end', true)], [eb(152, '2h − h ＝ 6 → h＝6、2h＝12', C.green, FILL.green, 15)]),
  },
  {
    note: '大きい四角錐の体積を求めます。❓ なぜ÷3？ 四角錐は、同じ底面・同じ高さの四角柱のちょうど 1/3 だからです。四角柱は 8×8×12 ＝ 768、その 1/3 で 256cm³。',
    add: F([bx(20, 26, 122, 54, '四角柱 8×8×12 ＝ 768', C.gray, FILL.gray, 12), ar(146, 53, 174, 53, C.green), bx(178, 26, 122, 54, '四角錐 768÷3 ＝ 256', C.green, FILL.green, 12), lb(160, 108, '3つ合わせると、ちょうど柱1つぶん', 12, C.gray, 'middle')], [eb(152, '大：8×8×12÷3 ＝ 256cm³', C.green, FILL.green, 16)]),
  },
  {
    note: '小さい四角錐の体積も同じように求めます。底面は 4×4＝16、高さ6。四角柱は 16×6＝96、その 1/3 で 32cm³。',
    add: F([bx(20, 26, 122, 54, '四角柱 4×4×6 ＝ 96', C.gray, FILL.gray, 12), ar(146, 53, 174, 53, C.green), bx(178, 26, 122, 54, '四角錐 96÷3 ＝ 32', C.green, FILL.green, 12)], [eb(152, '小：4×4×6÷3 ＝ 32cm³', C.green, FILL.green, 16)]),
  },
  {
    note: '台の体積は、大きい錐から頭の小さい錐をひいたものです。256−32 ＝ 224cm³。これが答えです。',
    add: F([pg([[120, 130], [200, 130], [160, 10]], C.blue, FILL.blue), pg([[140, 70], [180, 70], [160, 10]], C.red, FILL.yellow), lb(160, 52, '32', 13, C.red, 'middle', true), lb(160, 104, '台 224', 14, C.blue, 'middle', true), lb(250, 100, '大 256', 12, C.blue, 'start', true)], [eb(152, '256 − 32 ＝ 224cm³', C.green, FILL.green, 17)]),
  },
  {
    note: '❓ 台の高さ6cmを、そのまま大きい四角錐の高さに使ってはだめ？ 大きい四角錐の本当の高さは12cmです。6cmで計算すると 8×8×6÷3＝128 となり、台の体積になりません。頭の位置を復元して高さを出すのが大事です。',
    add: F([eb(12, '8×8×6÷3 ＝ 128　×', C.red, FILL.red, 15, 34), eb(58, 'もとの大きい錐の高さは 12cm', C.blue, FILL.blue, 14, 34), eb(104, '頂点の位置を先に復元する', C.green, FILL.green, 14, 30)], [tx(176, '台の高さ ≠ 大きい錐の高さ', 14, C.red, true)]),
  },
  {
    note: '❓ なぜ体積の比は 1：8 になるの？ 相似比が1：2のとき、底面積は縦も横も2倍で 2×2＝4倍、高さは2倍。だから体積は 4×2＝8倍です。',
    add: F([bx(20, 30, 88, 50, '底面積 4倍', C.blue, FILL.blue, 13), lb(114, 55, '×', 16, C.ink, 'middle', true), bx(122, 30, 76, 50, '高さ 2倍', C.blue, FILL.blue, 13), lb(204, 55, '＝', 16, C.ink, 'middle', true), bx(212, 30, 88, 50, '体積 8倍', C.green, FILL.green, 13)], [eb(152, '小：大 ＝ 1：8（32×8 ＝ 256 ○）', C.green, FILL.green, 14)]),
  },
  {
    note: '検算です。小：大 ＝ 1：8 なので、台の部分は 大−小 ＝ 8−1 ＝ 7 にあたります。32×7 ＝ 224cm³ で、さきほどの答えと一致します。',
    add: F([bx(30, 30, 40, 40, '小 1', C.red, FILL.yellow, 12), bx(70, 30, 240, 40, '台 7', C.blue, FILL.blue, 14), lb(160, 92, '全体（大）＝ 1＋7 ＝ 8', 12, C.gray, 'middle')], [eb(152, '32 × 7 ＝ 224cm³　○', C.green, FILL.green, 16)]),
  },
]);

// ───────────────────────── 相似な三角形の辺の比・面積比 ─────────────────────────
const triS = (): E[] => [pg([[30, 130], [70, 130], [58, 70]], C.blue, FILL.blue), lb(24, 138, 'A', 11, C.blue, 'end', true), lb(76, 138, 'B', 11, C.blue, 'start', true), lb(58, 62, 'C', 11, C.blue, 'middle', true)];
const triL = (): E[] => [pg([[150, 130], [210, 130], [192, 40]], C.red, FILL.red), lb(144, 138, 'D', 11, C.red, 'end', true), lb(216, 138, 'E', 11, C.red, 'start', true), lb(192, 32, 'F', 11, C.red, 'middle', true)];
const sosi: Figure = show([
  {
    note: '△ABC ∽ △DEF で AB：DE ＝ 2：3 のとき、辺の比、面積の比、そして △ABC が12cm²のときの △DEF の面積を求めます。図は、底辺4cm・高さ6cm（面積12cm²）の場合の例です。',
    add: F([...triS(), ...triL()], [eb(152, '△ABC ∽ △DEF　AB：DE ＝ 2：3', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ なぜ、辺の比はどれも2：3なの？ 相似とは、形を同じ倍率で拡大・縮小すること。ABが3/2倍になっているなら、BCもCAも3/2倍です。だから、対応する辺の比はすべて 2：3 です。',
    add: T([ar(76, 100, 146, 100, C.purple), lb(111, 92, '3/2倍', 11, C.purple, 'middle', true)], [eb(152, '（1）辺の比は すべて 2：3', C.green, FILL.green, 16), tx(206, '相似比 ＝ 対応する辺の比', 12, C.gray)]),
  },
  {
    note: '（2）面積の比を考えます。❓ なぜ面積比は 2：3 ではないの？ 面積は「縦×横」のように、長さを2方向にかけたものだからです。たとえば正方形は、1辺が2なら面積4、1辺が3なら面積9。',
    add: F([bx(60, 30, 60, 60, '面積 4', C.blue, FILL.blue, 13), lb(90, 106, '1辺 2（2×2）', 11, C.blue, 'middle', true), bx(170, 20, 90, 90, '面積 9', C.red, FILL.red, 15), lb(215, 126, '1辺 3（3×3）', 11, C.red, 'middle', true)], [eb(152, '1辺の比 2：3 → 面積の比 4：9', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ 三角形でも同じ？ 三角形の面積は 底辺×高さ÷2 です。相似なら、底辺も高さも3/2倍になります。図の例では、底辺が 4cm→6cm、高さが 6cm→9cm です。',
    add: F([...triS(), ...triL(), lb(110, 98, '底辺4', 10, C.blue, 'middle', true), lb(110, 110, '高さ6', 10, C.blue, 'middle', true), lb(262, 98, '底辺6', 10, C.red, 'middle', true), lb(262, 110, '高さ9', 10, C.red, 'middle', true)], [eb(152, '底辺も高さも 3/2倍', C.purple, FILL.purple, 15)]),
  },
  {
    note: '実際に面積を求めます。△ABC は 4×6÷2 ＝ 12cm²、△DEF は 6×9÷2 ＝ 27cm²。比は 12：27 で、両方を3でわると 4：9 です。',
    add: F([...triS(), ...triL(), lb(110, 98, '面積12', 10, C.blue, 'middle', true), lb(262, 98, '面積27', 10, C.red, 'middle', true)], [eb(152, '12 ： 27 ＝ 4 ： 9', C.green, FILL.green, 17), tx(206, '4×6÷2＝12　6×9÷2＝27', 12, C.gray)]),
  },
  {
    note: '❓ なぜ 4：9 ＝ 2²：3² なの？ 面積は「底辺×高さ÷2」。底辺にも高さにも同じ倍率（3/2倍）がかかるので、面積には（3/2）×（3/2）、つまり倍率の2乗がかかるからです。',
    add: F([bx(20, 20, 130, 40, '底辺 × 3/2', C.blue, FILL.blue, 14), lb(160, 42, '×', 16, C.ink, 'middle', true), bx(170, 20, 130, 40, '高さ × 3/2', C.blue, FILL.blue, 14), ar(160, 66, 160, 90, C.purple), bx(40, 94, 240, 40, '面積 × (3/2)×(3/2) ＝ × 9/4', C.green, FILL.green, 15)], [eb(152, '面積比 ＝ 相似比の2乗 ＝ 2²：3²', C.purple, FILL.purple, 14)]),
  },
  {
    note: '（3）△ABC が12cm²のとき、△DEF は？ 面積比は 4：9。❓ なぜ比例式が使えるの？ 比は、両方を同じ数でかけても同じ比だからです。4を3倍すると12。だから9も3倍して27になります。',
    add: F([bx(40, 30, 100, 40, '△ABC', C.blue, FILL.blue, 14), bx(180, 30, 100, 40, '△DEF', C.red, FILL.red, 14), bx(40, 76, 100, 30, '4 → 12', C.blue, FILL.blue, 13), bx(180, 76, 100, 30, '9 → □', C.red, FILL.red, 13), lb(160, 91, '×3', 13, C.purple, 'middle', true)], [eb(152, '9 × 3 ＝ 27', C.green, FILL.green, 17)]),
  },
  {
    note: '答えは（1）2：3、（2）4：9、（3）27cm²です。',
    add: F([eb(10, '（1）辺の比 2：3', C.green, FILL.green, 16, 34), eb(54, '（2）面積の比 4：9', C.green, FILL.green, 16, 34), eb(98, '（3）△DEF ＝ 27cm²', C.green, FILL.green, 16, 34)], [tx(180, '面積比 ＝ 相似比の2乗', 14, C.gray, true)]),
  },
  {
    note: '確かめ（検算）です。27÷12 ＝ 9/4 で、これは（3/2）の2乗と同じです。面積が9/4倍になっているので、3/2倍の2乗と一致します。',
    add: F([eb(12, '27 ÷ 12 ＝ 9/4', C.blue, FILL.blue, 16, 34), eb(58, '(3/2) × (3/2) ＝ 9/4', C.blue, FILL.blue, 16, 34), eb(104, '一致 ○', C.green, FILL.green, 16, 30)], [tx(176, '倍率の2乗で確かめられる', 14, C.green, true)]),
  },
  {
    note: '❓ よくあるまちがいは？ 面積比も 2：3 のままにして、12×3/2＝18cm² としてしまうことです。2：3 は長さの比。周の長さは長さだから 2：3 のままですが、面積には2乗がかかります。',
    add: F([eb(12, '長さ（辺・周）の比 ： 2 ： 3', C.blue, FILL.blue, 14, 34), eb(58, '面積の比 ： 2² ： 3² ＝ 4 ： 9', C.green, FILL.green, 14, 34), eb(104, '面積を 18cm² とするのは ×', C.red, FILL.red, 14, 30)], [tx(176, '面積には2乗がかかる', 14, C.green, true)]),
  },
  {
    note: 'まとめです。相似比が m：n のとき、長さの比は m：n、面積の比は m²：n²、体積の比は m³：n³。長さ→面積→体積と、次元がふえるたびに、かける回数がふえます。',
    add: F([eb(10, '長さの比　m ： n', C.blue, FILL.blue, 15, 34), eb(54, '面積の比　m² ： n²', C.green, FILL.green, 15, 34), eb(98, '体積の比　m³ ： n³', C.purple, FILL.purple, 15, 34)], [tx(180, '次元がふえるとかける回数もふえる', 13, C.gray, true)]),
  },
]);

// ───────────────────────── 高さが共通な三角形の面積比 ─────────────────────────
const tri5 = (): E[] => [
  pg([[60, 120], [120, 120], [110, 25]], C.blue, FILL.blue),
  pg([[120, 120], [210, 120], [110, 25]], C.red, FILL.red),
  lb(54, 128, 'B', 12, C.ink, 'end', true), lb(120, 134, 'D', 12, C.ink, 'middle', true), lb(216, 128, 'C', 12, C.ink, 'start', true), lb(110, 17, 'A', 12, C.ink, 'middle', true),
];
const takasa: Figure = show([
  {
    note: '△ABC の辺BC上に点Dがあり、BD：DC ＝ 2：3 です。△ABD と △ACD の面積比と、△ABD が10cm² のときの △ABC の面積を求めます。',
    add: F([...tri5(), lb(90, 136, '2', 12, C.blue, 'middle', true), lb(165, 136, '3', 12, C.red, 'middle', true)], [eb(152, 'BD：DC ＝ 2：3　△ABD ＝ 10cm²', C.purple, FILL.purple, 14)]),
  },
  {
    note: '❓ 何と何を比べるの？ 青い △ABD と、赤い △ACD です。この2つの面積の比を求めます。',
    add: T([lb(85, 85, '△ABD', 12, C.blue, 'middle', true), lb(150, 100, '△ACD', 12, C.red, 'middle', true)], [eb(152, '△ABD ： △ACD ＝ ？', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ 三角形の面積は、何で決まる？ 底辺×高さ÷2 です。2つの三角形の高さは、どちらも「AからBCへおろした垂線」（点線）です。',
    add: T([ln(110, 25, 110, 120, C.gray, true, 2), lb(118, 70, '高さ', 11, C.gray, 'start', true)], [eb(152, '面積 ＝ 底辺 × 高さ ÷ 2', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ なぜ、2つの高さは等しいの？ どちらの三角形も、頂点はAで共通、底辺BD・DCは同じ直線BCの上にあります。AからBCまでの距離はひとつだけなので、高さは同じです。',
    add: T([], [eb(152, '頂点Aが共通、底辺は同じ直線BC上', C.green, FILL.green, 14), tx(206, 'だから 高さは同じ', 13, C.green, true)]),
  },
  {
    note: '高さをhとすると、△ABD＝BD×h÷2、△ACD＝DC×h÷2。比をとると、「h÷2」はどちらにもあるので消えます。残るのは BD：DC ＝ 2：3。面積比は底辺の比そのままです。',
    add: F([bx(20, 14, 280, 34, '△ABD：△ACD', C.purple, FILL.purple, 14), bx(20, 58, 280, 34, '＝ (BD×h÷2) ： (DC×h÷2)', C.purple, FILL.purple, 14), bx(20, 102, 280, 34, '＝ BD ： DC ＝ 2 ： 3', C.green, FILL.green, 15)], [tx(176, '共通の「h÷2」は消える', 14, C.gray, true)]),
  },
  {
    note: '△ABD ＝ 10cm² が、比の「2」にあたります。比の1あたりは 10÷2＝5cm²。だから △ACD は、比の「3」で 5×3 ＝ 15cm² です。',
    add: F([bx(30, 30, 100, 40, '△ABD 10cm²', C.blue, FILL.blue, 12), bx(130, 30, 150, 40, '△ACD □cm²', C.red, FILL.red, 12), lb(80, 88, '比の 2', 12, C.blue, 'middle', true), lb(205, 88, '比の 3', 12, C.red, 'middle', true), lb(160, 116, '1あたり 10÷2 ＝ 5', 13, C.purple, 'middle', true)], [eb(152, '△ACD ＝ 5 × 3 ＝ 15cm²', C.red, FILL.red, 16)]),
  },
  {
    note: '❓ △ABC の面積は、なぜ足し算？ △ABC は、△ABD と △ACD を合わせたものだからです。10＋15 ＝ 25cm²。比で見ると、2＋3＝5 にあたり、5×5＝25 です。',
    add: F([...tri5(), lb(90, 136, '10', 12, C.blue, 'middle', true), lb(165, 136, '15', 12, C.red, 'middle', true)], [eb(152, '10 ＋ 15 ＝ 25cm²', C.green, FILL.green, 17), tx(206, '（比では 2＋3＝5、5×5＝25）', 12, C.gray)]),
  },
  {
    note: '答えは、面積比が 2：3、△ABC ＝ 25cm² です。',
    add: F([bx(40, 20, 240, 40, '△ABD：△ACD ＝ 2：3', C.green, FILL.green, 17), bx(40, 76, 240, 40, '△ABC ＝ 25cm²', C.green, FILL.green, 17)], [tx(176, '面積比 ＝ 底辺の比（高さが共通）', 13, C.gray, true)]),
  },
  {
    note: '確かめ（検算）その1。△ABD と △ABC は高さが同じで、底辺の比は BD：BC ＝ 2：5。だから 面積も 2：5。10×5÷2 ＝ 25cm² と一致します。',
    add: F([bx(20, 30, 100, 40, '△ABD 10', C.blue, FILL.blue, 13), bx(120, 30, 180, 40, '△ABC □', C.green, FILL.green, 13), lb(70, 88, '2', 13, C.blue, 'middle', true), lb(210, 88, '5', 13, C.green, 'middle', true)], [eb(152, '10 ÷ 2 × 5 ＝ 25cm²　○', C.green, FILL.green, 16)]),
  },
  {
    note: '確かめ（検算）その2。たとえば BC＝10cm、高さ5cmなら、BD＝4cm、DC＝6cm。△ABD＝4×5÷2＝10cm²（条件どおり）、△ACD＝6×5÷2＝15cm²。この数でも合計25cm²です。',
    add: F([eb(10, 'BD＝4、DC＝6、高さ5', C.gray, FILL.gray, 14, 32), eb(54, '△ABD ＝ 4×5÷2 ＝ 10　○', C.blue, FILL.blue, 14, 32), eb(98, '△ACD ＝ 6×5÷2 ＝ 15', C.red, FILL.red, 14, 32)], [tx(176, '10＋15 ＝ 25cm²', 15, C.green, true)]),
  },
  {
    note: '❓ よくあるまちがいは？ 面積比を「相似の2乗」のように 4：9 にしてしまうことです。2乗になるのは、形が相似で縦横が同じ倍率にふえるとき。ここは相似ではなく、高さが共通なので、底辺の比そのままです。',
    add: F([eb(12, '相似な図形 → 面積比は 2乗', C.blue, FILL.blue, 15, 34), eb(58, '高さが共通 → 面積比は 底辺の比そのまま', C.green, FILL.green, 13, 34), eb(104, '今回は 2：3（4：9 は ×）', C.red, FILL.red, 15, 30)], [tx(176, '「何がそろっているか」を見る', 14, C.green, true)]),
  },
]);

// ───────────────────────── 円に内接する四角形の対角の和 ─────────────────────────
const ptA: [number, number] = [130, 20];
const ptB: [number, number] = [108, 102];
const ptC: [number, number] = [170, 131];
const ptD: [number, number] = [216, 51];
const quad = (): E[] => [ci(160, 72, 60, undefined, C.gray, '#FFFFFF'), ln(...ptA, ...ptB, C.ink, false, 2), ln(...ptB, ...ptC, C.ink, false, 2), ln(...ptC, ...ptD, C.ink, false, 2), ln(...ptD, ...ptA, C.ink, false, 2),
  lb(122, 14, 'A', 12, C.ink, 'middle', true), lb(98, 108, 'B', 12, C.ink, 'middle', true), lb(178, 141, 'C', 12, C.ink, 'middle', true), lb(228, 49, 'D', 12, C.ink, 'middle', true)];
const nainetsu: Figure = show([
  {
    note: '円に内接する四角形ABCDで、向かい合う角 ∠A ＋ ∠C ＝ 180° になることを証明します。図の数値は、あとで確かめるための一例です。',
    add: F(quad(), [eb(152, '∠A ＋ ∠C ＝ 180° を示したい', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ ∠A は、円のどの部分を見こんでいる？ Aから見て反対側にある弧BCD（青い部分）です。∠A は、弧BCD に対する円周角です。',
    add: T([sc(160, 72, 60, 210, 380, C.blue, BLUE_T), lb(165, 104, '弧BCD', 12, C.blue, 'middle', true)], [eb(152, '∠A は 弧BCD に対する円周角', C.blue, FILL.blue, 15)]),
  },
  {
    note: '同じように、∠C は、Cの反対側の弧BAD（赤い部分）に対する円周角です。弧BCD と弧BAD を合わせると、円ぜんたい（1周）になります。',
    add: T([sc(160, 72, 60, 20, 210, C.red, RED_T), lb(140, 55, '弧BAD', 12, C.red, 'middle', true)], [eb(152, '∠C は 弧BAD に対する円周角', C.red, FILL.red, 15), tx(206, '2つの弧で 円1周', 12, C.gray)]),
  },
  {
    note: '❓ 円周角と弧には、どんな関係がある？ 円周角の定理です。円周角は、同じ弧に対する中心角の半分。たとえば弧BCDの中心角が170°なら、∠A ＝ 170°÷2 ＝ 85° です。',
    add: T([ci(160, 72, 2.5, undefined, C.ink, C.ink), ln(160, 72, ...ptB, C.blue, true), ln(160, 72, ...ptD, C.blue, true), lb(160, 92, '中心角 170°', 11, C.blue, 'middle', true), lb(138, 36, '85°', 12, C.blue, 'middle', true)], [eb(152, '円周角 ＝ 中心角 ÷ 2', C.blue, FILL.blue, 16), tx(206, '∠A ＝ 170° ÷ 2 ＝ 85°', 13, C.blue, true)]),
  },
  {
    note: '❓ では、なぜ円周角は中心角の半分なの？ 別の図で確かめます。円の中心をO、Aを円の上の点とし、半径OA・OB・OD を引き、AOをのばして円と交わる点をEとします。まず三角形OABに注目します。OA＝OB（どちらも半径）の二等辺三角形なので、底角 ∠OAB＝∠OBA です。この角を a とします。',
    add: F([ci(160, 70, 58, undefined, C.gray, '#FFFFFF'), pg([[160, 12], [110, 99], [160, 70]], C.blue, BLUE_T), ln(160, 12, 210, 99, C.ink, false, 2), ln(110, 99, 210, 99, C.gray, true), ln(160, 12, 160, 128, C.gray, true), ln(160, 70, 210, 99, C.gray), lb(160, 6, 'A', 12, C.ink, 'middle', true), lb(100, 105, 'B', 12, C.ink, 'middle', true), lb(220, 105, 'D', 12, C.ink, 'middle', true), lb(160, 138, 'E', 12, C.ink, 'middle', true), lb(152, 72, 'O', 11, C.ink, 'end', true), lb(150, 33, 'a', 12, C.red, 'middle', true), lb(122, 92, 'a', 12, C.red, 'middle', true)], [eb(152, 'OA＝OB（半径）→ ∠OAB＝∠OBA', C.blue, FILL.blue, 14)]),
  },
  {
    note: '❓ 中心での角 ∠BOE は何度？ 三角形の外角は、となりあわない2つの内角の和です。∠BOE は三角形OABの外角なので、a＋a ＝ 2a。つまり、中心角の ∠BOE は、円周角 ∠OAB の2倍です。',
    add: T([lb(140, 104, '2a', 12, C.red, 'middle', true)], [eb(152, '外角 ∠BOE ＝ a ＋ a ＝ 2a', C.red, FILL.red, 15), tx(206, '外角 ＝ となりあわない2つの内角の和', 12, C.gray)]),
  },
  {
    note: '反対側の三角形ODAでも同じです。OA＝OD なので底角をb とすると、∠EOD＝2b。中心角 ∠BOD ＝ 2a＋2b ＝ 2(a＋b) で、∠BAD ＝ a＋b の2倍になります。これが「円周角は中心角の半分」の理由です。',
    add: T([pg([[160, 12], [210, 99], [160, 70]], C.green, 'rgba(22,163,74,0.2)'), lb(170, 33, 'b', 12, C.green, 'middle', true), lb(198, 92, 'b', 12, C.green, 'middle', true), lb(180, 104, '2b', 12, C.green, 'middle', true)], [eb(152, '中心角 ∠BOD ＝ 2a＋2b ＝ 2∠A', C.green, FILL.green, 14), tx(206, '（∠BAD ＝ a＋b）', 12, C.gray)]),
  },
  {
    note: 'もとの図にもどります。弧BCDの中心角が170°なので ∠A＝85°。弧BADの中心角は、円1周360°から170°をひいた190°なので ∠C＝190°÷2＝95°。2つの中心角を合わせると、ちょうど360°です。',
    add: F([...quad(), sc(160, 72, 60, 210, 380, C.blue, BLUE_T), sc(160, 72, 60, 20, 210, C.red, RED_T), lb(165, 104, '170°', 12, C.blue, 'middle', true), lb(140, 55, '190°', 12, C.red, 'middle', true), lb(134, 34, '85°', 11, C.blue, 'middle', true), lb(166, 118, '95°', 11, C.red, 'middle', true)], [eb(152, '∠A＝170÷2　∠C＝190÷2', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ なぜ和が180°になるの？ 2∠A が弧BCDの中心角、2∠C が弧BADの中心角。この2つで円1周なので、2∠A＋2∠C ＝ 360°。両辺を2でわると、∠A＋∠C ＝ 180° です。',
    add: F([eb(12, '2∠A ＝ 弧BCDの中心角', C.blue, FILL.blue, 14, 30), eb(48, '2∠C ＝ 弧BADの中心角', C.red, FILL.red, 14, 30), eb(84, '2∠A ＋ 2∠C ＝ 360°（円1周）', C.purple, FILL.purple, 14, 30)], [eb(152, '∠A＋∠C ＝ 360° ÷ 2 ＝ 180°', C.green, FILL.green, 15)]),
  },
  {
    note: '証明の流れをまとめます。①∠Aは弧BCDの円周角で、中心角の半分。②∠Cは弧BADの円周角で、中心角の半分。③2つの弧で円1周（360°）だから、和は180°。「どの弧か」と「2つで1周」をはっきり書くのがコツです。',
    add: F(stack(['∠A は 弧BCD の円周角（中心角の半分）', '∠C は 弧BAD の円周角（中心角の半分）', '2つの弧で 1周 360° → 和は 180°'], 20, 280, 12, { h: 30, gap: 14, color: C.blue, fill: FILL.blue, size: 12 }).flat(), [eb(152, '「どの弧か」と「2つで1周」を書く', C.purple, FILL.purple, 14)]),
  },
  {
    note: '確かめ（検算）です。別の数で試します。∠A＝75°なら、弧BCDの中心角は150°、弧BADの中心角は 360−150＝210°、∠C＝210÷2＝105°。∠A＋∠C ＝ 75＋105 ＝ 180° で、やはり成り立ちます。',
    add: F([eb(10, '∠A＝75° → 弧BCD 150°', C.blue, FILL.blue, 14, 30), eb(46, '弧BAD ＝ 360−150 ＝ 210°', C.gray, FILL.gray, 14, 30), eb(82, '∠C ＝ 210 ÷ 2 ＝ 105°', C.red, FILL.red, 14, 30)], [eb(152, '75° ＋ 105° ＝ 180°　○', C.green, FILL.green, 16), tx(206, 'どんな数でも和は180°', 12, C.gray)]),
  },
]);

// ───────────────────────── 三角形の内角の和・外角定理 ─────────────────────────
const triABC = (): E[] => [pg([[110, 40], [60, 120], [180, 120]], C.ink, FILL.warm), lb(110, 30, 'A', 12, C.ink, 'middle', true), lb(50, 128, 'B', 12, C.ink, 'middle', true), lb(186, 132, 'C', 12, C.ink, 'middle', true)];
const naikaku: Figure = show([
  {
    note: '三角形ABCの3つの内角をたすと180°になることを、平行線を使って証明します。そのついでに、外角定理（外角は、となりあわない2つの内角の和）も導きます。',
    add: F(triABC(), [eb(152, '∠A ＋ ∠B ＋ ∠C ＝ 180°', C.purple, FILL.purple, 16)]),
  },
  {
    note: '❓ なぜ補助線を引くの？ 3つの角はバラバラの場所にあって、足し算しにくいからです。そこで、3つの角を一直線の上に集めたい。一直線をつくる角は180°です。まず辺BCをCの側にのばして、点Dをとります。',
    add: T([ln(180, 120, 270, 120, C.gray, true, 2), lb(278, 124, 'D', 12, C.ink, 'middle', true)], [eb(152, '一直線をつくる角は 180°', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ なぜ、BAに平行な線CEを引くの？ 平行線なら、錯角・同位角が等しくなります。つまり、Aやその近くの角と同じ大きさの角を、Cのところへ「うつす」ことができるからです。',
    add: T([ln(180, 120, 220, 56, C.blue, false, 2), lb(228, 50, 'E', 12, C.ink, 'middle', true)], [eb(152, 'Cから BA に平行な線 CE を引く', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ ∠BAC と ∠ACE は、なぜ等しいの？ BA∥CE を、ACという線が横切っています。このとき、Zの字の位置にある角（錯角）は等しくなります。この角を a とします。',
    add: T([lb(112, 64, 'a', 13, C.red, 'middle', true), lb(178, 98, 'a', 13, C.red, 'middle', true)], [eb(152, '錯角（Zの字）：∠BAC ＝ ∠ACE ＝ a', C.red, FILL.red, 14)]),
  },
  {
    note: '❓ ∠ABC と ∠ECD は、なぜ等しいの？ BA∥CE を、BDという線が横切っています。このとき、Fの字の位置にある角（同位角）は等しくなります。この角を b とします。',
    add: T([lb(80, 109, 'b', 13, C.green, 'middle', true), lb(203, 108, 'b', 13, C.green, 'middle', true)], [eb(152, '同位角（Fの字）：∠ABC ＝ ∠ECD ＝ b', C.green, FILL.green, 14)]),
  },
  {
    note: '3つの角が、B・C・Dを結ぶ一直線の上に集まりました。∠ACB（これを c とします）と、∠ACE（a）と、∠ECD（b）を合わせると、一直線なので 180° です。',
    add: T([lb(160, 111, 'c', 13, C.blue, 'middle', true)], [eb(152, 'c ＋ a ＋ b ＝ 180°（一直線）', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ a、b、c は、もとの三角形のどの角？ a＝∠A（錯角）、b＝∠B（同位角）、c＝∠C でした。だから、∠A ＋ ∠B ＋ ∠C ＝ 180°。三角形の内角の和が180°であることが証明できました。',
    add: T([], [eb(152, '∠A ＋ ∠B ＋ ∠C ＝ 180°', C.green, FILL.green, 17), tx(206, 'a＝∠A、b＝∠B、c＝∠C', 13, C.gray)]),
  },
  {
    note: '外角定理も導けます。❓ 外角 ∠ACD は、どんな角？ ∠ACE と ∠ECD を合わせた角です。a と b を足したものだから、∠ACD ＝ a＋b ＝ ∠A＋∠B。外角は、となりあわない2つの内角の和です。',
    add: T([lb(214, 138, '∠ACD ＝ a＋b', 12, C.purple, 'start', true)], [eb(152, '外角 ∠ACD ＝ ∠A ＋ ∠B', C.purple, FILL.purple, 16), tx(206, '（a＋b）', 12, C.gray)]),
  },
  {
    note: '❓ 外角定理と、内角の和180°は、どうつながるの？ ∠ACB と ∠ACD は、一直線BDの上で並ぶので、足すと180°。だから外角 ∠ACD ＝ 180°−∠C。これが ∠A＋∠B に等しい、と言っても同じです。',
    add: F([...triABC(), ln(180, 120, 270, 120, C.gray, true, 2), lb(278, 124, 'D', 12, C.ink, 'middle', true), lb(160, 111, 'C', 10, C.blue, 'middle', true), lb(214, 138, '∠ACD', 11, C.purple, 'start', true)], [eb(152, '∠C ＋ 外角 ＝ 180°', C.blue, FILL.blue, 15), tx(206, '外角 ＝ 180° − ∠C ＝ ∠A ＋ ∠B', 12, C.gray)]),
  },
  {
    note: '確かめ（検算）です。∠A＝50°、∠B＝60°なら、∠C＝180−50−60＝70°。外角 ∠ACD ＝ 180−70 ＝ 110° で、∠A＋∠B ＝ 50＋60 ＝ 110° と一致します。',
    add: F([eb(10, '∠A＝50°　∠B＝60°', C.gray, FILL.gray, 14, 30), eb(46, '∠C ＝ 180 − 50 − 60 ＝ 70°', C.blue, FILL.blue, 14, 30), eb(82, '外角 ＝ 180 − 70 ＝ 110°', C.purple, FILL.purple, 14, 30)], [eb(152, '50 ＋ 60 ＝ 110°　○', C.green, FILL.green, 16), tx(206, '外角 ＝ 2つの内角の和', 12, C.gray)]),
  },
  {
    note: '❓ 錯角と同位角は、どう見分ける？ 平行な2本の線を、1本の線が横切るとき、Zの字の形に並ぶ角が錯角、Fの字の形に並ぶ角が同位角です。どちらも平行なら等しくなります。',
    add: F([ln(40, 30, 110, 30, C.red, false, 3), ln(110, 30, 40, 90, C.red, false, 3), ln(40, 90, 110, 90, C.red, false, 3), lb(75, 112, 'Z：錯角', 12, C.red, 'middle', true), ln(200, 30, 270, 30, C.green, false, 3), ln(200, 30, 200, 90, C.green, false, 3), ln(200, 60, 250, 60, C.green, false, 3), lb(235, 112, 'F：同位角', 12, C.green, 'middle', true)], [eb(152, '平行な線にはさまれた Z と F', C.purple, FILL.purple, 15), tx(206, '平行なら、どちらも等しい', 12, C.gray)]),
  },
]);

// ───────────────────────── 2円の共通接線 ─────────────────────────
const twoCircles = (): E[] => [
  ci(85, 70, 56, undefined, C.blue, 'rgba(2,132,199,0.10)'), ci(176, 70, 21, undefined, C.red, 'rgba(225,29,72,0.12)'),
  ci(85, 70, 2.5, undefined, C.ink, C.ink), ci(176, 70, 2.5, undefined, C.ink, C.ink),
  ln(85, 70, 176, 70, C.gray, true), lb(78, 82, 'O', 12, C.ink, 'end', true), lb(176, 103, 'O′', 12, C.ink, 'middle', true),
];
const kyotsu: Figure = show([
  {
    note: '半径8cmの円Oと半径3cmの円O′があり、中心間の距離は13cmです。（1）共通接線は何本引けるか、（2）共通外接線の長さを求めます。（図は1cmを7の長さで描いています。）',
    add: F([...twoCircles(), ln(85, 70, 30, 70, C.blue), lb(57, 62, '8cm', 10, C.blue, 'middle', true), ln(176, 70, 197, 70, C.red), lb(193, 82, '3cm', 10, C.red, 'middle', true), lb(120, 83, '13cm', 10, C.gray, 'middle', true)], [eb(152, '（1）共通接線は何本？　（2）外接線の長さ', C.purple, FILL.purple, 13)]),
  },
  {
    note: '❓ 共通接線って、どんな線？ 2つの円の両方に、1点ずつでぴったり接する直線です。たとえば、上を通る紫の線は、2つの円の両方に接しています（接点が赤い点）。',
    add: T([ln(79, 7, 211, 62, C.purple, false, 2), ci(106, 18, 3, undefined, C.red, C.red), ci(184, 51, 3, undefined, C.red, C.red)], [eb(152, '2つの円に、ぴったり接する直線', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ 共通接線の本数は、何で決まるの？ 2円の「すきま」で決まります。中心間の距離13cm と、半径の和 8＋3＝11cm を比べると、13＞11。2円のあいだには 13−11＝2cm のすきまがあり、2円は離れています。',
    add: T([ln(141, 66, 155, 66, C.green, false, 3), lb(148, 54, 'すきま2cm', 10, C.green, 'middle', true)], [eb(152, '半径の和 8＋3＝11　＜　距離 13', C.green, FILL.green, 14), tx(206, '2円は離れている', 13, C.green, true)]),
  },
  {
    note: '離れている2円には、まず外側をまわる接線（外接線）が2本引けます。上の紫の線に加えて、下側にもう1本あります。',
    add: T([ln(79, 133, 211, 78, C.purple, false, 2)], [eb(152, '外側をまわる 外接線 2本', C.purple, FILL.purple, 16)]),
  },
  {
    note: '❓ 内側にも引ける？ 離れている2円のあいだには「すきま」があるので、2円のあいだでクロスするように引ける接線（内接線）が、さらに2本あります。緑の線です。',
    add: T([ln(109, 3, 181, 118, C.green, false, 2), ln(109, 137, 181, 22, C.green, false, 2)], [eb(152, '2円のあいだでクロスする 内接線 2本', C.green, FILL.green, 14), tx(206, '外接線2本 ＋ 内接線2本 ＝ 4本', 13, C.green, true)]),
  },
  {
    note: '❓ なぜ、離れているときだけ4本になるの？ 内側をクロスする内接線は、2円のあいだにすきまがあるときだけ引けます。2円が近づいて接すると内接線は1本、交わると0本、さらに片方が内側に入ると外接線もなくなります。',
    add: F([eb(6, '離れている（距離＞和）　4本', C.green, FILL.green, 12, 22), eb(32, '外接している（距離＝和）　3本', C.gray, FILL.gray, 12, 22), eb(58, '交わっている　2本', C.gray, FILL.gray, 12, 22), eb(84, '内接している（距離＝差）　1本', C.gray, FILL.gray, 12, 22), eb(110, '片方が内側に入る　0本', C.gray, FILL.gray, 12, 22)], [eb(152, '今回は 13 ＞ 11 だから 4本', C.green, FILL.green, 15), tx(206, '（1）の答え 4本', 13, C.green, true)]),
  },
  {
    note: '（2）共通外接線の長さを求めます。❓ 「長さ」とは、どこからどこまで？ 外接線が2つの円に接する点をP、Qとしたとき、PQの長さです。Oと P、O′ と Q を結ぶ半径も引いておきます。',
    add: F([ci(85, 70, 56, undefined, C.blue, 'rgba(2,132,199,0.10)'), ci(176, 70, 21, undefined, C.red, 'rgba(225,29,72,0.12)'), ln(85, 70, 176, 70, C.gray, true), ln(106, 18, 184, 51, C.purple, false, 3), ln(85, 70, 106, 18, C.blue, false, 2), ln(176, 70, 184, 51, C.red, false, 2), ci(106, 18, 3, undefined, C.ink, C.ink), ci(184, 51, 3, undefined, C.ink, C.ink), lb(100, 11, 'P', 12, C.ink, 'end', true), lb(192, 47, 'Q', 12, C.ink, 'start', true), lb(78, 82, 'O', 12, C.ink, 'end', true), lb(176, 103, 'O′', 12, C.ink, 'middle', true), lb(165, 28, 'PQ ＝ ？', 12, C.purple, 'middle', true)], [eb(152, 'PQ（接点と接点のあいだ）の長さ', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ 半径OP・O′Qと、接線PQは、どんな関係？ 円の接線は、接点を通る半径に垂直です。だから OP⊥PQ、O′Q⊥PQ。同じ線に垂直な2本なので、OP∥O′Q（平行）です。',
    add: T([lb(120, 30, '90°', 10, C.gray, 'middle'), lb(172, 42, '90°', 10, C.gray, 'middle')], [eb(152, '接線 ⊥ 半径　→　OP ∥ O′Q', C.purple, FILL.purple, 15)]),
  },
  {
    note: '❓ 直角三角形をつくるには？ O′からPQに平行な線を引き、OPとぶつかる点をHとします。四角形PHO′Qは、向かいあう辺が平行で、角が直角なので長方形です。だから PH＝QO′＝3cm、HO′＝PQ です。',
    add: T([ln(176, 70, 98, 38, C.green, false, 2), ln(106, 18, 98, 38, C.red, false, 3), lb(88, 42, 'H', 12, C.ink, 'end', true)], [eb(152, '四角形 PHO′Q は長方形', C.green, FILL.green, 15), tx(206, 'PH＝3cm　HO′＝PQ', 13, C.gray)]),
  },
  {
    note: '❓ OHの長さは？ OP＝8cm（半径）、PH＝3cm なので、OH＝8−3＝5cm。ここで「半径の差」が出てきます。直角三角形OHO′ は、OH＝5、OO′＝13、HO′＝PQ（求めたい長さ）です。',
    add: F([pg([[70, 70], [70, 120], [190, 120]], C.blue, FILL.blue), bx(70, 110, 10, 10, undefined, C.gray, '#FFFFFF'), lb(56, 98, '5', 14, C.blue, 'end', true), lb(130, 136, 'PQ ＝ ？', 13, C.red, 'middle', true), lb(146, 88, '13', 14, C.green, 'start', true), lb(70, 62, 'O', 12, C.ink, 'middle', true), lb(64, 128, 'H', 12, C.ink, 'end', true), lb(198, 126, 'O′', 12, C.ink, 'start', true)], [eb(152, 'OH ＝ 8 − 3 ＝ 5（半径の差）', C.blue, FILL.blue, 15)]),
  },
  {
    note: '❓ 三平方の定理は、なぜ使えるの？ 直角三角形では、斜辺の2乗が、ほかの2辺の2乗の和に等しいからです。13² ＝ 5² ＋ PQ² なので、PQ² ＝ 169−25 ＝ 144。12×12＝144 だから PQ＝12。',
    add: T([bx(100, 126, 60, 16, undefined, '#FFFFFF', '#FFFFFF'), lb(130, 136, 'PQ ＝ 12cm', 13, C.red, 'middle', true)], [eb(152, 'PQ² ＝ 13² − 5² ＝ 144', C.green, FILL.green, 16), tx(206, '12 × 12 ＝ 144 → PQ ＝ 12', 13, C.gray)]),
  },
  {
    note: '答えは（1）4本、（2）12cm です。確かめ（検算）は 5²＋12² ＝ 25＋144 ＝ 169 ＝ 13² で成り立ちます。（5・12・13は有名な直角三角形の組です。）なお、内接線の長さを求めるときは、差ではなく半径の「和」を使います。',
    add: F([eb(10, '（1）4本　（2）12cm', C.green, FILL.green, 17, 34), eb(54, '5² ＋ 12² ＝ 25 ＋ 144 ＝ 169', C.blue, FILL.blue, 15, 34), eb(98, '＝ 13²　○', C.green, FILL.green, 15, 30)], [tx(176, '外接線は半径の差、内接線は半径の和', 13, C.gray, true)]),
  },
]);

// ───────────────────────── p²−1 は8の倍数 ─────────────────────────
const cell = (x: number, y: number, color: string, fill: string): E => bx(x, y, 14, 14, undefined, color, fill);
const grid = (x0: number, y0: number, nx: number, ny: number, color: string, fill: string): E[] => {
  const out: E[] = [];
  for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) out.push(cell(x0 + i * 14, y0 + j * 14, color, fill));
  return out;
};
const evenRow = (hl: boolean): E[] => [2, 4, 6, 8, 10, 12].map((n, i) => ci(48 + i * 44, 60, 17, String(n), n % 4 === 0 && hl ? C.red : C.blue, n % 4 === 0 && hl ? FILL.red : FILL.blue, 13));
const hachi: Figure = show([
  {
    note: '奇素数 p について、p²−1 が8の倍数になることを調べます。まず実験です。p＝3 → 8、p＝5 → 24、p＝7 → 48、p＝11 → 120。どれも8の倍数（8×1、8×3、8×6、8×15）です。',
    add: F([eb(8, 'p＝3 ： 3²−1 ＝ 8 ＝ 8×1', C.blue, FILL.blue, 13, 26), eb(40, 'p＝5 ： 5²−1 ＝ 24 ＝ 8×3', C.blue, FILL.blue, 13, 26), eb(72, 'p＝7 ： 7²−1 ＝ 48 ＝ 8×6', C.blue, FILL.blue, 13, 26), eb(104, 'p＝11 ： 11²−1 ＝ 120 ＝ 8×15', C.blue, FILL.blue, 13, 26)], [eb(152, 'いつも 8 の倍数になりそう', C.purple, FILL.purple, 15), tx(206, 'なぜ？ を調べよう', 12, C.gray)]),
  },
  {
    note: '❓ なぜ p²−1 を (p＋1)(p−1) に分けるの？ 面積で見ると分かります。p×p の正方形から 1×1 を1つ取ると、p²−1 の面積になります。図は p＝5。25個のマスから1マス（赤）を取ると、24個です。',
    add: F([...grid(105, 18, 5, 5, C.blue, FILL.blue), bx(105, 74, 14, 14, undefined, C.red, FILL.red), lb(140, 108, '5×5 から 1マス取る', 11, C.gray, 'middle'), lb(180, 134, '25 − 1 ＝ 24', 12, C.blue, 'middle', true)], [eb(152, 'p² − 1 ：正方形から 1マス取った形', C.blue, FILL.blue, 14)]),
  },
  {
    note: 'この24マスは、組みかえると、縦 p−1＝4、横 p＋1＝6 の長方形になります（下の1段を切って、右にならべる）。面積は 4×6 ＝ 24。だから p²−1 ＝ (p−1)(p＋1) です。',
    add: F([...grid(82, 30, 6, 4, C.green, FILL.green), lb(124, 22, 'p＋1 ＝ 6', 12, C.green, 'middle', true), lb(74, 62, 'p−1 ＝ 4', 12, C.green, 'end', true), lb(124, 108, '4 × 6 ＝ 24', 13, C.green, 'middle', true)], [eb(152, 'p²−1 ＝ (p−1)(p＋1)', C.green, FILL.green, 17), tx(206, '同じ面積24を、長方形に見なおした', 12, C.gray)]),
  },
  {
    note: '❓ p−1 と p＋1 は、どんな数？ 素数 p が3以上なら p は奇数です。奇数の1つ前と1つ後は、どちらも偶数。だから p−1 と p＋1 は、差が2の連続する偶数です。p＝5 なら 4 と 6。',
    add: F([ci(80, 60, 28, 'p−1', C.blue, FILL.blue, 14), ci(160, 60, 28, 'p', C.red, FILL.red, 16), ci(240, 60, 28, 'p＋1', C.blue, FILL.blue, 14), lb(80, 106, '偶数', 12, C.blue, 'middle', true), lb(160, 106, '奇数', 12, C.red, 'middle', true), lb(240, 106, '偶数', 12, C.blue, 'middle', true)], [eb(152, '奇数の前後は、どちらも偶数', C.blue, FILL.blue, 15), tx(206, '（p＝5 なら 4 と 6）', 12, C.gray)]),
  },
  {
    note: '❓ 偶数2つをかけると、なぜ8の倍数になるの？ 偶数はそれぞれ2の倍数。2つかければ 2×2＝4 の倍数です。あと1つ2が必要。ここで、偶数を並べてみます。',
    add: F([ln(26, 60, 294, 60, C.gray, true), ...evenRow(false)], [eb(152, '偶数 ＝ 2の倍数　2つで 4の倍数', C.blue, FILL.blue, 14), tx(206, 'あと 2 が1つ足りない', 12, C.gray)]),
  },
  {
    note: '❓ なぜ、連続する偶数のどちらかは4の倍数？ 偶数を2、4、6、8、10、12… と並べると、4の倍数（赤）は1つおきに出てきます。差が2の2つの偶数は、となりあっているので、必ずどちらかが4の倍数です。',
    add: F([...evenRow(true)], [eb(152, '偶数のうち、4の倍数は 1つおき', C.red, FILL.red, 15), tx(206, 'となりあう2つの偶数の一方は 4の倍数', 12, C.gray)]),
  },
  {
    note: 'だから (p−1)(p＋1) は、「4の倍数」×「偶数（2の倍数）」です。4×2＝8なので、積は8の倍数になります。p＝5 なら 4×6（4の倍数と偶数）、p＝7 なら 6×8（8が4の倍数）。',
    add: F([bx(20, 30, 120, 50, '4の倍数', C.red, FILL.red, 16), lb(156, 56, '×', 20, C.ink, 'middle', true), bx(172, 30, 128, 50, '偶数（2の倍数）', C.blue, FILL.blue, 14), ar(160, 88, 160, 106, C.green), bx(60, 108, 200, 30, '4 × 2 ＝ 8 の倍数', C.green, FILL.green, 15)], [eb(152, '(p−1)(p＋1) は 8 の倍数', C.green, FILL.green, 16)]),
  },
  {
    note: '式でも確かめます。奇数 p を p＝2k＋1（k は正の整数）と書くと、p−1＝2k、p＋1＝2k＋2＝2(k＋1)。積は 2k×2(k＋1) ＝ 4k(k＋1)。',
    add: F([eb(10, 'p ＝ 2k ＋ 1（奇数）', C.red, FILL.red, 14, 30), eb(46, 'p−1 ＝ 2k　p＋1 ＝ 2(k＋1)', C.blue, FILL.blue, 14, 30), eb(82, '積 ＝ 2k × 2(k＋1) ＝ 4k(k＋1)', C.purple, FILL.purple, 14, 30)], [eb(152, '4 × k(k＋1)', C.purple, FILL.purple, 17)]),
  },
  {
    note: '❓ なぜ k(k＋1) は偶数？ k と k＋1 は連続する2つの整数で、一方は必ず偶数だからです。偶数と奇数が交ごに出てくるので、かけると必ず偶数になります。だから 4×(偶数) ＝ 8の倍数。',
    add: F([ci(80, 56, 26, 'k', C.blue, FILL.blue, 15), ci(160, 56, 26, 'k＋1', C.blue, FILL.blue, 13), lb(120, 60, '×', 16, C.ink, 'middle', true), lb(80, 98, '偶・奇', 12, C.gray, 'middle'), lb(160, 98, '奇・偶', 12, C.gray, 'middle'), lb(160, 120, 'どちらか一方が偶数', 11, C.red, 'middle', true)], [eb(152, 'k(k＋1) は 偶数　→　4×偶数 ＝ 8の倍数', C.green, FILL.green, 13)]),
  },
  {
    note: '確かめ（検算）です。p＝5 → 4×6＝24＝8×3、p＝7 → 6×8＝48＝8×6、p＝11 → 10×12＝120＝8×15。どれも8の倍数です。なお、素数でなくても奇数なら成り立ちます（p＝9 → 80＝8×10）。',
    add: F([eb(8, 'p＝5 ： 4×6 ＝ 24 ＝ 8×3', C.blue, FILL.blue, 13, 26), eb(40, 'p＝7 ： 6×8 ＝ 48 ＝ 8×6', C.blue, FILL.blue, 13, 26), eb(72, 'p＝11 ： 10×12 ＝ 120 ＝ 8×15', C.blue, FILL.blue, 13, 26), eb(104, 'p＝9（奇数）： 8×10 ＝ 80 ＝ 8×10', C.gray, FILL.gray, 12, 26)], [eb(152, '奇数なら 素数でなくても成り立つ', C.green, FILL.green, 14)]),
  },
  {
    note: '❓ p＝2 は、なぜ除くの？ 2は唯一の偶数の素数で、「p は奇数」という出発点がこわれます。実際、2²−1 ＝ 3 で、8の倍数ではありません。だから、条件は p≧3 の奇素数です。',
    add: F([eb(12, 'p＝2（偶数）：2²−1 ＝ 3', C.red, FILL.red, 15, 34), eb(58, '3 は 8 の倍数ではない　×', C.red, FILL.red, 15, 34), eb(104, 'p が奇数のときだけ成り立つ', C.green, FILL.green, 15, 30)], [tx(176, '条件 ： p は 3 以上の奇素数', 14, C.green, true)]),
  },
]);

export const figuresSchoolKoko02: Record<string, Figure> = {
  'koko_kankan_sansu_c2_44': kyotsu,
  'koko_kankan_sansu_c3_38': sai,
  'koko_kankan_sansu_c4_25': densha,
  'koko_kankan_sansu_c4_33': ryusui,
  'koko_kankan_sansu_c4_39': hako,
  'koko_kankan_sansu_c4_49': ike,
  'koko_kankan_sansu_c5_30': dai4,
  'koko_kankan_sansu_c5_41': sankaku,
  'koko_sansu_ex_03_036': sosi,
  'koko_sansu_ex_04_022': nainetsu,
  'koko_sansu_ex_04_033': takasa,
  'koko_sansu_ex_05_026': naikaku,
  'koko_sansu_ex_05_037': hachi,
};
