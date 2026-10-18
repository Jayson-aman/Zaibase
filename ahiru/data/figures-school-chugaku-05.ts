// 入試傾向問題（中学受験・第05批）の「動く図解スライド」。キーは問題の id。
// 画面の上半分（y<150）に図、下の帯（band）にそのスライドの式やひとこと、という配置。
// 数値はすべて問題文・解説とそろえてある（面積・比・速さ・てこ・ばね・回路・月・地層）。
import type { Figure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, cover } from './diagram-kit';

type El = DiagramElement;
const GA = 'rgba(22,163,74,0.30)';
const BA = 'rgba(2,132,199,0.25)';
const RA = 'rgba(225,29,72,0.25)';
const YA = 'rgba(250,204,21,0.45)';
const PA = 'rgba(147,51,234,0.30)';
const MOON_LIT = '#FDE68A';
const MOON_DARK = '#D1D5DB';
const SKY = '#E0F2FE';

// 角度は「右が0度、上が90度」。点の列を返す。
const arcPts = (cx: number, cy: number, r: number, a0: number, a1: number, n = 24): [number, number][] =>
  Array.from({ length: n + 1 }, (_, i) => {
    const a = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy - r * Math.sin(a)] as [number, number];
  });

// 下の帯に1〜3行の文字を置く。
const bl = (lines: string[], color: string = C.ink, size = 12, y0 = 170, step = 22): El[] =>
  band(150, ...lines.map((t, i) => lb(160, y0 + i * step, t, size, i === 0 ? color : C.ink, 'middle', i === 0)));

// ═══════════════ 長方形の面積（たて×横） ═══════════════
const rectArea = (a: number, b: number, c: number, ans: number): Figure => {
  const W = b * c, H = a * c, x0 = (320 - W) / 2, y0 = 12;
  const grid = (): El[] => {
    const out: El[] = [];
    for (let i = 1; i < b; i++) out.push(ln(x0 + i * c, y0, x0 + i * c, y0 + H, C.gray, false, 0.8));
    for (let j = 1; j < a; j++) out.push(ln(x0, y0 + j * c, x0 + W, y0 + j * c, C.gray, false, 0.8));
    return out;
  };
  const rows: El[] = [];
  for (let j = 1; j < a; j++) rows.push(bx(x0, y0 + j * c, W, c, undefined, j % 2 ? C.blue : C.green, j % 2 ? BA : GA));
  return show(
    [
      {
        note: `たて${a}cm、横${b}cmの長方形の面積を求めます。❓そもそも「面積」とは、何を数えているのでしょう。`,
        add: [bx(x0, y0, W, H, undefined, C.main, FILL.warm), lb(160, y0 + H + 13, `横 ${b}cm`, 12, C.main), lb(x0 - 6, y0 + H / 2 + 4, `たて${a}cm`, 11, C.main, 'end'), ...bl([`たて${a}cm、横${b}cmの長方形`, '面積は何cm²？'], C.main, 13)],
      },
      {
        note: '❓面積とは？→ 1辺が1cmの正方形（1cm²）が、何こしきつめられるかということです。この1こが「1cm²」のものさしになります。',
        add: [...grid(), bx(x0, y0, c, c, undefined, C.red, YA), lb(x0 + W + 8, y0 + 8, '← 1cm²', 11, C.red, 'start'), ...bl(['1cm²（1辺1cmの正方形）が', '何こ ならぶか ＝ 面積'], C.blue)],
      },
      {
        note: `❓では、どう数える？→ まず1列ぶんを数えます。横が${b}cmなので、1列に${b}こならびます。`,
        add: [bx(x0, y0, W, c, undefined, C.green, GA), cover(x0 + W + 4, y0 - 2, 320 - x0 - W - 4, 40), lb(x0 + W + 8, y0 + c / 2 + 4, `1列に ${b}こ`, 11, C.green, 'start'), ...bl([`1列に ${b}こ`])],
      },
      {
        note: `❓その列は全部で何列？→ たてが${a}cmなので、${a}列ぶんならびます。`,
        add: [...rows, lb(x0 + W + 8, y0 + H / 2, `${a}列`, 12, C.blue, 'start'), ...bl([`たてが ${a}cm なので ${a}列`])],
      },
      {
        note: `❓なぜかけ算なの？→ 「${b}こ」が${a}列あるので、${b}を${a}回たすことになります。同じ数を何回もたすことを、まとめて書いたのがかけ算です。`,
        add: bl([`${b}を ${a}回たす ＝ ${b}×${a}`, '同じ数を何回もたす → かけ算', `（${b}×${a}＝${ans}）`], C.purple),
      },
      {
        note: `❓たてと横、どちらを先にかけてもいい？→ たて向きに数えると、${a}こが${b}列で ${a}×${b}。同じ${ans}こになります。`,
        add: [bx(x0, y0, c, H, undefined, C.purple, PA), ...bl([`たてに数えると ${a}こ が ${b}列`, `${a}×${b} ＝ ${b}×${a} ＝ ${ans}`], C.purple)],
      },
      {
        note: `答えは ${a}×${b}＝${ans}cm²。❓なぜ単位が cm²？→ 1cm×1cmの正方形を数えたからです。確かめ：${ans}÷${b}＝${a} で、列の数にもどります。`,
        add: band(150, bx(50, 160, 220, 34, `${a}×${b} ＝ ${ans}cm²`, C.green, FILL.green, 16), lb(160, 215, `確かめ：${ans}÷${b} ＝ ${a}（たての列の数）`, 12, C.gray)),
      },
    ],
    `長方形の面積：${a}×${b}＝${ans}cm²`,
  );
};

// ═══════════════ 直方体の体積（たて×横×高さ） ═══════════════
const boxVol = (a: number, b: number, h: number, ans: number): Figure => {
  const u = 11, W = b * u, H = h * u, dx = a * 5, dy = -a * 3.5;
  const x0 = (320 - (W + dx)) / 2 - 10, yf = 12 - dy;
  const F1: [number, number] = [x0, yf], F2: [number, number] = [x0 + W, yf], F3: [number, number] = [x0 + W, yf + H], F4: [number, number] = [x0, yf + H];
  const B1: [number, number] = [F1[0] + dx, F1[1] + dy], B2: [number, number] = [F2[0] + dx, F2[1] + dy], B3: [number, number] = [F3[0] + dx, F3[1] + dy];
  const body = (): El[] => [pg([F1, F2, F3, F4], C.main, FILL.warm), pg([F1, F2, B2, B1], C.main, '#FFEFD5'), pg([F2, B2, B3, F3], C.main, '#F6DDB8')];
  const layerLines = (): El[] => {
    const out: El[] = [];
    for (let k = 1; k < h; k++) {
      const y = yf + k * u;
      out.push(ln(x0, y, x0 + W, y, C.gray, false, 0.8), ln(x0 + W, y, x0 + W + dx, y + dy, C.gray, false, 0.8));
    }
    return out;
  };
  const low = yf + H;
  const ab = a * b, bh = b * h;
  return show(
    [
      {
        note: `たて${a}cm、横${b}cm、高さ${h}cmの直方体の体積を求めます。❓体積とは、何を数えるのでしょう。`,
        add: [...body(), lb(x0 + W / 2, low + 13, `横 ${b}cm`, 11, C.main), lb(x0 - 6, yf + H / 2 + 4, `高さ${h}cm`, 11, C.main, 'end'), lb(F3[0] + dx / 2 + 6, F3[1] + dy / 2 + 12, `たて${a}cm`, 11, C.main, 'start'), ...bl([`たて${a}cm 横${b}cm 高さ${h}cm`, '体積は何cm³？'], C.main, 13)],
      },
      {
        note: '❓体積とは？→ 1辺が1cmの立方体（1cm³）が、何こ入るかということです。面積が「正方形を数える」なら、体積は「立方体を数える」ことです。',
        add: [bx(250, 28, 16, 16, undefined, C.red, YA), lb(258, 58, '1cm³', 11, C.red), lb(258, 72, '1辺1cmの', 9, C.gray), lb(258, 83, '立方体', 9, C.gray), ...bl(['1cm³の立方体が', '何こ入るか ＝ 体積'], C.blue)],
      },
      {
        note: `❓まず、いちばん下の1段には何こ入る？→ 底は たて${a}cm×横${b}cm の長方形なので、面積と同じ考え方で ${a}×${b}＝${ab}こ しきつめられます。`,
        add: [bx(x0, low - u, W, u, undefined, C.green, GA), pg([[x0 + W, low - u], [x0 + W + dx, low - u + dy], [x0 + W + dx, low + dy], [x0 + W, low]], C.green, GA), ...bl([`底の1段 ＝ ${a}×${b} ＝ ${ab}こ`, '（長方形の面積と同じ考え方）'], C.green)],
      },
      {
        note: `❓何段ならぶ？→ 高さが${h}cmなので、1cmごとに1段、全部で${h}段です。`,
        add: [...layerLines(), lb(F3[0] + dx + 8, yf + H / 2 + dy / 2, `${h}段`, 12, C.blue, 'start'), ...bl([`高さ ${h}cm → ${h}段`])],
      },
      {
        note: `❓なぜかけ算？→ 1段に${ab}こが、${h}段ぶんあります。同じ数が何回もあるのでかけ算です。${ab}×${h}＝${ans}こ。`,
        add: bl([`${ab}こ が ${h}段 → ${ab}×${h}`, `＝ ${ans}こ ＝ ${ans}cm³`], C.purple),
      },
      {
        note: `❓別の数え方でも同じになる？→ 前の面（横${b}cm×高さ${h}cm）は ${bh}こ。これがたて向きに${a}まい重なると考えて、${bh}×${a}＝${ans}。`,
        add: [pg([F1, F2, F3, F4], C.blue, BA), ...bl([`前の面 ${b}×${h} ＝ ${bh}こ が ${a}まい`, `${bh}×${a} ＝ ${ans}（同じになる）`], C.blue)],
      },
      {
        note: `答えは ${a}×${b}×${h}＝${ans}cm³。単位が cm³ なのは、1cm×1cm×1cmの立方体を数えたからです。3つの数をぜんぶかけることがポイントです。`,
        add: band(150, bx(40, 160, 240, 34, `${a}×${b}×${h} ＝ ${ans}cm³`, C.green, FILL.green, 16), lb(160, 215, `確かめ：${a}×${h}×${b} の順でも ${ans}`, 12, C.gray)),
      },
    ],
    `直方体の体積：${a}×${b}×${h}＝${ans}cm³`,
  );
};

// ═══════════════ 割引き（定価2000円） ═══════════════
const disc = (d: number): Figure => {
  const price = 2000, unit = price / 10, cut = unit * d, rest = price - cut;
  const cellW = 28, x0 = 20, y = 38, hh = 44;
  const cells = (): El[] => {
    const out: El[] = [];
    for (let k = 1; k < 10; k++) out.push(ln(x0 + k * cellW, y, x0 + k * cellW, y + hh, C.gray, false, 1));
    for (let k = 0; k < 10; k++) out.push(lb(x0 + k * cellW + cellW / 2, y + hh / 2 + 3, '1割', 10, C.gray));
    return out;
  };
  const ratio = (10 - d) / 10;
  return show(
    [
      {
        note: `定価${price}円の品物を${d}割引きで売ります。売値はいくらでしょう。❓「${d}割引き」とは、何をどれだけ安くすることでしょう。`,
        add: [lb(160, 26, `定価 ${price}円`, 13, C.main, 'middle', true), bx(x0, y, 280, hh, undefined, C.main, FILL.warm), ...bl([`定価${price}円 の ${d}割引き`, '売値は？'], C.main, 13)],
      },
      {
        note: '❓「割」とは？→ 全体を10こに等分した、1こぶんのことです。つまり1割は、全体の10分の1です。',
        add: [...cells(), ...bl(['全体を10等分した 1こぶん ＝ 1割', '（全体 ＝ 10割）'], C.blue)],
      },
      {
        note: `❓${d}割引きとは？→ 10こあるうちの ${d}こぶん を安くするということです。赤い所が、安くなる部分です。`,
        add: [bx(x0, y, cellW * d, hh, undefined, C.red, RA), lb(x0 + (cellW * d) / 2, y + hh + 16, `${d}こ`, 12, C.red, 'middle', true), ...bl([`10こ のうち ${d}こぶん 安くする`])],
      },
      {
        note: `❓1割は何円？→ 全体が${price}円で、それを10こに分けたのだから、${price}÷10＝${unit}円です。`,
        add: bl([`1割 ＝ ${price}÷10 ＝ ${unit}円`, `（1こぶんが ${unit}円）`], C.blue),
      },
      {
        note: `❓安くなる金額は？→ 1こぶんが${unit}円で、それが${d}こぶんなので、${unit}×${d}＝${cut}円です。`,
        add: bl([`値引き ＝ ${unit}円 × ${d}こ ＝ ${cut}円`, `（${cut}円は「値引き額」。まだ売値ではない）`], C.red),
      },
      {
        note: `❓では、売値は？→ 残りは 10−${d}＝${10 - d}こぶん。${unit}×${10 - d}＝${rest}円です。${price}−${cut}＝${rest}円 と引いても同じです。`,
        add: [bx(x0 + cellW * d, y, cellW * (10 - d), hh, undefined, C.green, GA), lb(x0 + cellW * d + (cellW * (10 - d)) / 2, y + hh + 16, `のこり ${10 - d}こ`, 12, C.green, 'middle', true), ...bl([`売値 ＝ ${unit}×${10 - d} ＝ ${rest}円`, `または ${price}−${cut} ＝ ${rest}円`], C.green)],
      },
      {
        note: `❓もっと速く出せない？→ 残りの割合は 10−${d}＝${10 - d}割 ＝ ${ratio}。だから ${price}×${ratio}＝${rest}円 と、1回のかけ算で出せます。答えは${rest}円。確かめ：${cut}＋${rest}＝${price}円。`,
        add: band(150, bx(30, 160, 260, 32, `${price} × ${ratio} ＝ ${rest}円`, C.green, FILL.green, 16), lb(160, 212, `確かめ：${cut}円（値引き）＋${rest}円（売値）＝${price}円`, 12, C.gray)),
      },
    ],
    `${d}割引き：${price}×${ratio}＝${rest}円`,
  );
};

// ═══════════════ つるかめ算（りんご120円・みかん80円・合わせて15個） ═══════════════
const tsuru = (P: number, nApple: number): Figure => {
  const N = 15, pa = 120, pm = 80, all = pm * N, D = P - all, step = pa - pm, nm = N - nApple;
  const cx = (i: number) => 22 + i * 19.5;
  const circ = (i: number, color: string, fill: string): El => ci(cx(i), 40, 8, undefined, color, fill);
  const ORANGE = '#FDBA74';
  return show(
    [
      {
        note: `1個${pa}円のりんごと1個${pm}円のみかんを合わせて${N}個買い、代金は${P}円でした。りんごは何個でしょう。❓どこから考えればよいでしょう。`,
        add: [...Array.from({ length: N }, (_, i) => circ(i, C.gray, FILL.gray)), bx(20, 70, 130, 30, `りんご 1個 ${pa}円`, C.red, FILL.red, 12), bx(170, 70, 130, 30, `みかん 1個 ${pm}円`, C.main, '#FFEDD5', 12), lb(160, 125, `合わせて${N}個で ${P}円`, 13, C.ink, 'middle', true), ...bl(['りんごは何個？'], C.main, 13)],
      },
      {
        note: `❓どう考える？→ 2つの値段が混ざっていてむずかしいので、いったん「全部みかんだったら」と決めて考えます。そのときの代金は ${pm}×${N}＝${all}円。`,
        add: [...Array.from({ length: N }, (_, i) => circ(i, C.main, ORANGE)), cover(0, 60, 320, 86), lb(160, 128, '全部みかん だったとしたら…', 12, C.main, 'middle', true), ...bl([`${pm}円 × ${N}個 ＝ ${all}円`])],
      },
      {
        note: `❓実際の代金とくらべると？→ 実際は${P}円で、全部みかんの${all}円より ${D}円 高いです。❓なぜ高い？→ 本当は、高いりんごがまじっているからです。`,
        add: [cover(0, 112, 320, 34), lb(160, 128, '実際のほうが高い → りんごが まじっている', 12, C.red, 'middle', true), ...band(150, bx(10, 160, 92, 40, `実際の代金\n${P}円`, C.blue, FILL.blue, 12), lb(108, 184, '−', 18), bx(118, 160, 92, 40, `全部みかん\n${all}円`, C.main, '#FFEDD5', 12), lb(216, 184, '＝', 18), bx(226, 160, 84, 40, `ちがい\n${D}円`, C.red, FILL.red, 12))],
      },
      {
        note: `❓みかんを1個りんごにかえると、代金はどうなる？→ ${pa}−${pm}＝${step}円ずつ高くなります。この${step}円が、かえるたびにちがいにたまっていきます。`,
        add: [cover(0, 100, 320, 46), circ(0, C.red, FILL.red), lb(cx(0) + 4, 66, `＋${step}円`, 11, C.red, 'start'), ...bl([`みかん1個 → りんご1個`, `${pa}−${pm} ＝ ${step}円 ふえる`], C.red)],
      },
      {
        note: `❓何個かえれば、ちがいの${D}円になる？→ 1個かえるごとに${step}円なので、${D}÷${step}＝${nApple}個かえれば、ちょうど${D}円ふえます。`,
        add: [...Array.from({ length: nApple - 1 }, (_, i) => circ(i + 1, C.red, FILL.red)), cover(0, 58, 320, 44), ...bl([`${D}円 ÷ ${step}円 ＝ ${nApple}個`, `（${nApple}個 りんごにかえる）`], C.red)],
      },
      {
        note: `❓かえた${nApple}個の正体は？→ 「みかんからりんごにかえた個数」は、そのまま りんごの個数です。赤がりんご${nApple}個、オレンジがみかん${nm}個。`,
        add: [lb(cx(0) + ((nApple - 1) * 19.5) / 2 + 0, 64, `りんご ${nApple}個`, 12, C.red, 'middle', true), lb(cx(nApple) + ((nm - 1) * 19.5) / 2, 64, `みかん ${nm}個`, 12, C.main, 'middle', true), ...bl([`りんご ${nApple}個、みかん ${N}−${nApple}＝${nm}個`], C.green)],
      },
      {
        note: `答えは${nApple}個。確かめ：りんご${pa}×${nApple}＝${pa * nApple}円、みかん${pm}×${nm}＝${pm * nm}円。合わせて${pa * nApple + pm * nm}円で、問題の${P}円と一致します。`,
        add: band(150, bx(20, 158, 280, 34, `答え りんご ${nApple}個`, C.green, FILL.green, 16), lb(160, 210, `確かめ：${pa}×${nApple}＝${pa * nApple}、${pm}×${nm}＝${pm * nm}、合計 ${pa * nApple + pm * nm}円 ✓`, 11, C.gray)),
      },
    ],
    `つるかめ算：全部みかんと考えて、ちがい÷${step}円＝りんごの数`,
  );
};

// ═══════════════ 相似な三角形の面積比（DE∥BC、AD:DB＝2:3） ═══════════════
const simTri = (): Figure => {
  const A: [number, number] = [160, 20], B: [number, number] = [50, 140], Cc: [number, number] = [270, 140], D: [number, number] = [116, 68], E: [number, number] = [204, 68];
  const base = (): El[] => [pg([A, B, Cc], C.main, FILL.warm), ln(D[0], D[1], E[0], E[1], C.blue, false, 2), lb(160, 13, 'A', 12, C.ink, 'middle', true), lb(42, 143, 'B', 12, C.ink, 'end', true), lb(278, 143, 'C', 12, C.ink, 'start', true), lb(108, 66, 'D', 12, C.ink, 'end', true), lb(212, 66, 'E', 12, C.ink, 'start', true)];
  const tri = (): El[] => [pg([A, B, Cc], C.main, FILL.warm), pg([A, D, E], C.blue, BA), ln(A[0], A[1], 160, 140, C.gray, true)];
  const grid5 = (x0: number, y0: number, u: number): El[] => {
    const out: El[] = [bx(x0, y0, u * 5, u * 5, undefined, C.gray, '#FFFFFF')];
    for (let i = 1; i < 5; i++) out.push(ln(x0 + i * u, y0, x0 + i * u, y0 + u * 5, C.gray, false, 0.8), ln(x0, y0 + i * u, x0 + u * 5, y0 + i * u, C.gray, false, 0.8));
    return out;
  };
  return show(
    [
      {
        note: '三角形ABCで、DEはBCに平行です。AD:DB＝2:3のとき、三角形ADEと三角形ABCの面積の比を求めます。❓まず、この2つの三角形にはどんな関係があるでしょう。',
        add: [...base(), lb(124, 44, '2', 11, C.blue, 'end', true), lb(72, 106, '3', 11, C.red, 'end', true), ...bl(['AD:DB ＝ 2:3　DE∥BC', '△ADE：△ABC の面積の比は？'], C.main, 13)],
      },
      {
        note: '❓なぜ相似（形が同じで大きさがちがう）といえる？→ DEとBCが平行なので、角ADEと角ABC、角AEDと角ACBがそれぞれ同じ大きさになります。角Aも共通です。3つの角が同じなので、形が同じ三角形、つまり相似です。',
        add: [pg([A, D, E], C.blue, BA), ci(126, 62, 3, undefined, C.red, C.red), ci(60, 134, 3, undefined, C.red, C.red), ci(160, 34, 3, undefined, C.green, C.green), ...bl(['角D ＝ 角B（DE∥BC だから）', '角Aは共通 → 3つの角が同じ → 相似'], C.blue)],
      },
      {
        note: '❓相似比（長さの比）は？→ △ADEのADに対応するのは、△ABCのAB（全体）です。DBの3ではありません。AB＝2＋3＝5なので、AD:AB＝2:5。',
        add: [ln(A[0], A[1], D[0], D[1], C.blue, false, 4), ln(D[0], D[1], B[0], B[1], C.red, false, 4), ...bl(['AD:AB ＝ 2:(2＋3) ＝ 2:5', '（3のDBではなく、全体の5を使う）'], C.blue)],
      },
      {
        note: '❓長さが2:5なら、面積の比も2:5？→ ちがいます。面積は「たて×横」のように、2つの方向の長さをかけます。ためしに、1辺が2と5の正方形で見てみましょう。2×2＝4こと、5×5＝25こ。',
        add: [...fresh(), bx(60, 68, 32, 32, undefined, C.blue, BA), ln(76, 68, 76, 100, C.gray, false, 0.8), ln(60, 84, 92, 84, C.gray, false, 0.8), ...grid5(160, 20, 16), bx(160, 20, 32, 32, undefined, C.blue, BA), lb(76, 114, '2×2＝4こ', 12, C.blue, 'middle', true), lb(200, 114, '5×5＝25こ', 12, C.red, 'middle', true), ...bl(['長さが 2:5 → 面積は 4:25', '（たて・横の2方向にのびるから）'], C.purple)],
      },
      {
        note: '❓三角形でも同じ？→ 三角形の面積は「底辺×高さ÷2」。相似なので、底辺の比も高さの比も2:5です。「÷2」は両方にかかるので、比には影響しません。',
        add: [...fresh(...tri()), lb(168, 50, '高さ 2', 10, C.blue, 'start'), lb(168, 112, '高さ 5', 10, C.red, 'start'), lb(160, 82, '底辺 2', 10, C.blue), lb(214, 132, '底辺 5', 10, C.red), ...bl(['面積 ＝ 底辺×高さ÷2', '底辺 2:5、高さ 2:5 → (2×2):(5×5)', '「÷2」は両方にあるので 比は同じ'], C.purple, 12, 168, 20)],
      },
      {
        note: '❓答えは？→ 面積の比は 2×2 : 5×5 ＝ 4:25。全体を25こに分けると、△ADEが4こ、残りの台形DBCEが21こ。確かめ：4＋21＝25。',
        add: [...fresh(), ...Array.from({ length: 25 }, (_, i) => bx(22 + i * 11, 40, 11, 34, undefined, C.gray, i < 4 ? 'rgba(2,132,199,0.45)' : FILL.gray)), lb(44, 30, '△ADE 4こ', 11, C.blue, 'middle', true), lb(190, 30, '台形DBCE 21こ', 11, C.gray, 'middle', true), ...band(150, bx(70, 160, 180, 34, '面積比 ＝ 4:25', C.green, FILL.green, 17), lb(160, 214, '確かめ：4＋21 ＝ 25（全体）', 12, C.gray))],
      },
      {
        note: '❓2:5のままではなぜダメ？→ 2:5は「長さ」の比です。面積は長さを2回かけるので2乗、体積は3回かけるので3乗になります。長さ2:5 → 面積4:25 → 体積8:125。',
        add: [...fresh(), bx(20, 40, 80, 50, '長さの比\n2:5', C.main, FILL.warm, 13), bx(120, 40, 80, 50, '面積の比\n4:25', C.blue, FILL.blue, 13), bx(220, 40, 80, 50, '体積の比\n8:125', C.purple, FILL.purple, 13), ar(100, 65, 120, 65, C.gray), ar(200, 65, 220, 65, C.gray), lb(110, 105, '2回', 10, C.gray), lb(210, 105, '3回', 10, C.gray), ...bl(['答え 4:25', '2:5をそのまま面積の比にしない'], C.green, 14)],
      },
    ],
    '相似な図形：長さの比 2:5 → 面積の比 4:25',
  );
};

// ═══════════════ 円の面積 ═══════════════
const circleBasic = (): Figure => {
  const cx = 85, cy = 72, r = 40;
  const sq = (): El[] => [bx(cx, cy - r, r, r, undefined, C.red, RA), bx(cx - r, cy - r, r, r, undefined, C.red, RA), bx(cx - r, cy, r, r, undefined, C.red, RA), bx(cx, cy, r, r, undefined, C.red, RA)];
  return show(
    [
      {
        note: '半径6cmの円の面積を求めます（円周率3.14）。❓長方形や正方形とちがって、円は曲がっています。どうやって面積を数えるのでしょう。',
        add: [ci(160, 72, 50, undefined, C.blue, FILL.blue), ln(160, 72, 210, 72, C.blue, false, 2.5), lb(238, 72, '半径6cm', 11, C.blue, 'middle', true), ...bl(['半径6cmの円の面積は？', '（円周率 3.14）'], C.main, 13)],
      },
      {
        note: '❓曲がっていると、どうする？→ 四角のものさしを用意します。円の半径を1辺とする正方形（半径×半径）をものさしにして、円が何こぶんかを調べます。',
        add: [...fresh(), ci(cx, cy, r, undefined, C.blue, 'rgba(2,132,199,0.12)'), ln(cx, cy, cx + r, cy, C.blue, false, 2.5), bx(cx, cy - r, r, r, undefined, C.red, RA), lb(250, 50, '半径を1辺とする', 11, C.red), lb(250, 66, '正方形がものさし', 11, C.red), ...bl(['ものさし ＝ 半径×半径 の正方形'], C.red)],
      },
      {
        note: '❓円のまわりにその正方形を並べると？→ 半径×半径の正方形が4こ集まって、円をすっぽりつつむ大きな正方形ができます。円はその中に入っています。',
        add: [...sq(), ci(cx, cy, r, undefined, C.blue, 'rgba(2,132,199,0.15)'), ...bl(['正方形4こ（2×2）が 円をつつむ', '円は 4こより 少し小さい'], C.blue)],
      },
      {
        note: '❓円は、正方形のいくつぶん？→ 調べると、どんな大きさの円でも「正方形3こと、あと少し（0.14こ）」、つまり3.14こぶんになります。この3.14が円周率です。',
        add: [...fresh(), bx(30, 50, 56, 56, undefined, C.red, RA), bx(92, 50, 56, 56, undefined, C.red, RA), bx(154, 50, 56, 56, undefined, C.red, RA), bx(216, 50, 8, 56, undefined, C.red, RA), lb(58, 40, '1こ', 11, C.red), lb(120, 40, '2こ', 11, C.red), lb(182, 40, '3こ', 11, C.red), lb(220, 40, '0.14こ', 10, C.red, 'start'), ...bl(['円 ＝ 半径×半径の正方形 3.14こぶん', '（この 3.14 が円周率）'], C.purple)],
      },
      {
        note: '❓では、式にすると？→ 正方形1この面積は「半径×半径」。それが3.14こぶんなので、円の面積＝半径×半径×3.14。',
        add: bl(['円の面積 ＝ 半径×半径×3.14', '（正方形1こぶん × 3.14こ）'], C.purple, 14),
      },
      {
        note: '❓半径6cmだと？→ 正方形1こは 6×6＝36cm²。それが3.14こぶんなので 36×3.14。計算は 36×3＝108、36×0.14＝5.04、108＋5.04＝113.04。',
        add: [...fresh(), bx(30, 40, 66, 66, '6×6\n＝36cm²', C.red, RA, 11), lb(160, 76, '× 3.14 ＝', 14, C.ink, 'middle', true), bx(206, 50, 90, 46, '113.04cm²', C.green, FILL.green, 13), ...bl(['36×3 ＝ 108', '36×0.14 ＝ 5.04', '108＋5.04 ＝ 113.04'], C.ink, 12, 168, 20)],
      },
      {
        note: '答えは113.04cm²。確かめ：円は、まわりの大きな正方形（12×12＝144cm²）の中に入るので、113.04は144より小さくて正しそうです。もし半径6を直径と読みちがえると、答えが大きくずれます。',
        add: [...fresh(), ci(160, 66, 46, undefined, C.blue, FILL.blue), bx(114, 20, 92, 92, undefined, C.red, 'rgba(225,29,72,0.06)'), ...band(150, bx(40, 160, 240, 32, '6×6×3.14 ＝ 113.04cm²', C.green, FILL.green, 15), lb(160, 210, '確かめ：144cm²（12×12）より小さい ✓', 12, C.gray), lb(160, 228, '半径6cmを 直径と まちがえない', 11, C.red))],
      },
    ],
    '円の面積＝半径×半径×3.14',
  );
};

const ring = (): Figure => {
  const R = 45, r = 22.5;
  const ringEls = (cx: number, cy: number, s: number): El[] => [ci(cx, cy, R * s, undefined, C.blue, FILL.blue), ci(cx, cy, r * s, undefined, C.blue, '#FFFFFF')];
  return show(
    [
      {
        note: '半径6cmの円から、半径3cmの円をくりぬいたドーナツ形の面積を求めます（円周率3.14）。❓どこから考えればよいでしょう。',
        add: [...ringEls(160, 75, 1), ln(160, 75, 205, 75, C.blue, false, 2), ln(160, 75, 137.5, 75, C.red, false, 2), lb(212, 75, '大：半径6cm', 11, C.blue, 'start', true), lb(108, 75, '小：半径3cm', 11, C.red, 'end', true), ...bl(['半径6cmの円 − 半径3cmの円', '色のついた部分の面積は？'], C.main, 13)],
      },
      {
        note: '❓何を求める？→ ドーナツの面積は、大きい円の面積から、くりぬいた小さい円の面積を引けば出ます。',
        add: band(150, bx(10, 162, 84, 32, '大きい円', C.blue, FILL.blue, 12), lb(103, 183, '−', 18), bx(112, 162, 84, 32, '小さい円', C.gray, FILL.gray, 12), lb(205, 183, '＝', 18), bx(214, 162, 96, 32, 'ドーナツ', C.green, FILL.green, 12)),
      },
      {
        note: '❓円の面積はどう出す？→ 円の面積は「半径×半径×3.14」。半径×半径の正方形の3.14こぶんだからです。',
        add: [...fresh(), ci(80, 72, 34, undefined, C.blue, 'rgba(2,132,199,0.12)'), bx(80, 38, 34, 34, undefined, C.red, RA), ln(80, 72, 114, 72, C.blue, false, 2), bx(170, 50, 34, 34, undefined, C.red, RA), bx(206, 50, 34, 34, undefined, C.red, RA), bx(242, 50, 34, 34, undefined, C.red, RA), bx(278, 50, 4, 34, undefined, C.red, RA), lb(226, 40, '半径×半径の正方形', 10, C.red), lb(226, 104, '3こと 0.14こ ＝ 3.14こぶん', 10, C.red), ...bl(['円の面積 ＝ 半径×半径×3.14'], C.purple, 14)],
      },
      {
        note: '❓大きい円と小さい円は？→ 大きい円は 6×6×3.14、小さい円は 3×3×3.14。どちらも「3.14をかける」形になっています。',
        add: [...fresh(), ...ringEls(85, 75, 0.9), bx(165, 28, 145, 40, '大きい円\n6×6×3.14', C.blue, FILL.blue, 12), bx(165, 84, 145, 40, '小さい円\n3×3×3.14', C.gray, FILL.gray, 12), ...bl(['どちらも「×3.14」が共通', '→ まとめられそう'], C.blue)],
      },
      {
        note: '❓共通の3.14はどうなる？→ 正方形のこ数を先に引いてから、3.14をかければよいのです。6×6＝36こ、3×3＝9こ。36−9＝27こぶんの3.14。',
        add: [cover(160, 20, 160, 110), bx(170, 40, 140, 50, '36こぶん − 9こぶん\n＝ 27こぶん', C.green, FILL.green, 12), ...bl(['36×3.14 − 9×3.14', '＝ (36−9)×3.14 ＝ 27×3.14'], C.green)],
      },
      {
        note: '❓27×3.14の計算は？→ 27×3＝81、27×0.14＝3.78。81＋3.78＝84.78。',
        add: bl(['27×3 ＝ 81', '27×0.14 ＝ 3.78', '81＋3.78 ＝ 84.78cm²'], C.ink, 13, 168, 20),
      },
      {
        note: '答えは84.78cm²。確かめ：別々に求めると、大きい円は36×3.14＝113.04、小さい円は9×3.14＝28.26。113.04−28.26＝84.78で一致します。注意：半径の差（6−3＝3）で 3×3×3.14 としてはいけません。引くのは面積どうしです。',
        add: band(150, bx(50, 158, 220, 32, '答え 84.78cm²', C.green, FILL.green, 16), lb(160, 206, '確かめ：113.04 − 28.26 ＝ 84.78 ✓', 12, C.gray), lb(160, 226, '半径の差3で 3×3×3.14 としない', 11, C.red)),
      },
    ],
    'ドーナツ形：(6×6−3×3)×3.14＝84.78cm²',
  );
};

const rectMinusCircle = (): Figure => {
  const x0 = 60, y0 = 15, cx = x0 + 63, cy = y0 + 45, r = 27;
  const scene = (): El[] => [bx(x0, y0, 126, 90, undefined, C.main, YA), ci(cx, cy, r, undefined, C.blue, '#FFFFFF'), lb(cx, y0 + 103, '横14cm', 11, C.main), lb(x0 - 4, cy + 4, 'たて10cm', 11, C.main, 'end')];
  return show(
    [
      {
        note: 'たて10cm、横14cmの長方形の中に、半径3cmの円が1つあります。長方形から円をのぞいた部分（黄色）の面積を求めます（円周率3.14）。',
        add: [...scene(), ln(cx, cy, cx + r, cy, C.blue, false, 2), lb(252, cy - 4, '円の半径 3cm', 11, C.blue, 'middle', true), ...bl(['黄色い部分の面積は？', '（円周率 3.14）'], C.main, 13)],
      },
      {
        note: '❓どう求める？→ 黄色い部分は、長方形全体から、円の部分をくりぬいたものです。だから「長方形の面積 − 円の面積」で出せます。',
        add: band(150, bx(10, 162, 84, 32, '長方形', C.main, FILL.warm, 13), lb(103, 183, '−', 18), bx(112, 162, 84, 32, '円', C.blue, FILL.blue, 13), lb(205, 183, '＝', 18), bx(214, 162, 96, 32, '黄色い部分', C.green, FILL.green, 12)),
      },
      {
        note: '❓長方形の面積は？→ 1cm²の正方形が、横に14こ、たてに10列ならぶので、10×14＝140cm²。',
        add: bl(['長方形 ＝ たて×横 ＝ 10×14 ＝ 140cm²', '（14こ ×10列）'], C.main),
      },
      {
        note: '❓円の面積に使う長さは？→ 半径です。問題の3cmは半径なので、そのまま使います。直径（6cm）を使ってしまうのがよくあるまちがいです。',
        add: [ln(cx - r, cy, cx + r, cy, C.gray, true), ln(cx, cy, cx + r, cy, C.red, false, 3.5), lb(252, cy + 14, '直径 6cm', 11, C.gray, 'middle'), ...bl(['使うのは「半径3cm」', '（直径6cmではない）'], C.red)],
      },
      {
        note: '❓円の面積は？→ 半径×半径の正方形（3×3＝9cm²）の3.14こぶんです。9×3.14＝28.26cm²。',
        add: [bx(cx, cy - r, r, r, undefined, C.red, RA), lb(252, 40, '半径×半径の', 11, C.red), lb(252, 55, '正方形(3×3＝9)の', 11, C.red), lb(252, 70, '3.14こぶん', 11, C.red), ...bl(['円 ＝ 3×3×3.14', '＝ 9×3.14 ＝ 28.26cm²'], C.blue)],
      },
      {
        note: '❓くりぬいた部分はいくつ？→ 長方形140cm²から、円28.26cm²を引きます。140−28.26＝111.74cm²。',
        add: [lb(252, 100, '黄色い部分', 11, C.main), ...bl(['140 − 28.26 ＝ 111.74cm²'], C.green, 14)],
      },
      {
        note: '答えは111.74cm²。確かめ：黄色い部分と円をたすと、もとの長方形になるはずです。111.74＋28.26＝140で、長方形の面積と一致します。',
        add: band(150, bx(50, 158, 220, 32, '答え 111.74cm²', C.green, FILL.green, 16), lb(160, 210, '確かめ：111.74 ＋ 28.26 ＝ 140 ✓', 12, C.gray), lb(160, 228, '（長方形の面積にもどる）', 11, C.gray)),
      },
    ],
    '全体−くりぬき：140−28.26＝111.74cm²',
  );
};

// ═══════════════ 比の問題（姉5:妹3、差1200円） ═══════════════
const ratioMoney = (): Figure => {
  const blocks = (n: number, y: number, fillFn: (i: number) => { color: string; fill: string }, text?: (i: number) => string): El[] =>
    Array.from({ length: n }, (_, i) => bx(70 + i * 44, y, 44, 34, text ? text(i) : undefined, fillFn(i).color, fillFn(i).fill, 11));
  const base = (): El[] => [lb(62, 51, '姉', 13, C.main, 'end', true), lb(62, 105, '妹', 13, C.blue, 'end', true), bx(70, 34, 220, 34, undefined, C.main, FILL.warm), bx(70, 88, 132, 34, undefined, C.blue, FILL.blue)];
  return show(
    [
      {
        note: '姉と妹の所持金の比は5:3で、姉は妹より1200円多く持っています。妹の所持金を求めます。❓比が5:3とは、どういうことでしょう。',
        add: [...base(), ...bl(['姉:妹 ＝ 5:3　姉は妹より1200円多い', '妹の所持金は？'], C.main, 13)],
      },
      {
        note: '❓比5:3とは？→ 同じ大きさの「①」を、姉が5こ、妹が3こ持っているということです。①は、1こぶんの金額です。',
        add: [...Array.from({ length: 4 }, (_, i) => ln(114 + i * 44, 34, 114 + i * 44, 68, C.gray, false, 1)), ...Array.from({ length: 2 }, (_, i) => ln(114 + i * 44, 88, 114 + i * 44, 122, C.gray, false, 1)), ...Array.from({ length: 5 }, (_, i) => lb(92 + i * 44, 55, '①', 14, C.main, 'middle', true)), ...Array.from({ length: 3 }, (_, i) => lb(92 + i * 44, 109, '①', 14, C.blue, 'middle', true)), ...bl(['姉は①が5こ、妹は①が3こ', '（①は 同じ大きさ）'], C.blue)],
      },
      {
        note: '❓1200円の差は、図のどこ？→ 姉のほうが、妹より①が5−3＝2こ多い。この赤い部分（②）が、姉と妹の差の1200円です。',
        add: [bx(202, 34, 88, 34, undefined, C.red, RA), lb(246, 104, '差 1200円', 12, C.red, 'middle', true), ...bl(['差 ＝ 5−3 ＝ ②', '② ＝ 1200円'], C.red)],
      },
      {
        note: '❓①は何円？→ ②（①が2こ）が1200円なので、1こぶんは半分です。1200÷2＝600円。ここで、全部の①が600円とわかります。',
        add: [...blocks(5, 34, (i) => (i < 3 ? { color: C.main, fill: FILL.warm } : { color: C.red, fill: FILL.red }), () => '600円'), ...blocks(3, 88, () => ({ color: C.blue, fill: FILL.blue }), () => '600円'), ...bl(['② ＝ 1200円 → ① ＝ 1200÷2 ＝ 600円', '（2こで1200円だから、1こは半分）'], C.blue)],
      },
      {
        note: '❓妹の所持金は？→ 妹は①が3こ（③）なので、600×3＝1800円です。',
        add: [...blocks(3, 88, () => ({ color: C.green, fill: FILL.green }), () => '600円'), cover(205, 92, 110, 28), lb(246, 106, '← 妹は ③', 12, C.green, 'middle', true), ...bl(['妹 ＝ ③ ＝ 600×3 ＝ 1800円'], C.green, 14)],
      },
      {
        note: '❓本当に条件に合っている？→ 姉は①が5こなので 600×5＝3000円。3000−1800＝1200円となり、問題の「1200円多い」と一致します。',
        add: bl(['姉 ＝ ⑤ ＝ 600×5 ＝ 3000円', '3000 − 1800 ＝ 1200円 ✓'], C.blue),
      },
      {
        note: '答えは1800円。注意：1200円をそのまま5や3でわってはいけません。1200円は「姉全体」でも「妹全体」でもなく、差の②にあたるからです。',
        add: band(150, bx(50, 158, 220, 32, '答え 妹は 1800円', C.green, FILL.green, 16), lb(160, 210, '1200円は 差の②。5や3でわらない', 12, C.red)),
      },
    ],
    '比の差②＝1200円 → ①＝600円 → 妹③＝1800円',
  );
};

// ═══════════════ 奇数の和（1＋3＋5＋…＋19） ═══════════════
const oddTiles = (): Figure => {
  const layerFill = ['#FEF08A', '#BAE6FD', '#BBF7D0', '#FBCFE8', '#DDD6FE'];
  const L5 = (x0: number, y0: number, s: number): El[] => {
    const out: El[] = [];
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) out.push(bx(x0 + c * s, y0 + r * s, s, s, undefined, C.gray, layerFill[Math.max(r, c)]));
    return out;
  };
  const L10 = (x0: number, y0: number, s: number): El[] => {
    const out: El[] = [];
    for (let r = 0; r < 10; r++) for (let c = 0; c < 10; c++) out.push(bx(x0 + c * s, y0 + r * s, s, s, undefined, C.gray, Math.max(r, c) % 2 ? 'rgba(2,132,199,0.25)' : 'rgba(250,204,21,0.45)'));
    return out;
  };
  const rows = (n: number, s: number, y0: number): El[] => {
    const out: El[] = [];
    for (let i = 1; i <= n; i++) for (let k = 0; k < 2 * i - 1; k++) out.push(bx(160 - ((2 * i - 1) * s) / 2 + k * s, y0 + (i - 1) * s, s, s, undefined, C.main, FILL.warm));
    return out;
  };
  return show(
    [
      {
        note: '1辺1cmのタイルを、1段目に1枚、2段目に3枚、3段目に5枚…と、奇数枚ずつ増やして三角形の形に並べます。10段目まで並べると全部で何枚でしょう。まず、はじめの5段を見てみましょう。',
        add: [...rows(5, 14, 14), ...Array.from({ length: 5 }, (_, i) => lb(160 + (2 * (i + 1) - 1) * 7 + 10, 14 + i * 14 + 9, `${2 * i + 1}枚`, 10, C.gray, 'start')), ...bl(['1段目1枚、2段目3枚、3段目5枚…', '10段目までの合計は？'], C.main, 13)],
      },
      {
        note: '❓1段ふえるごとに何枚ふえる？→ 1、3、5、7、9…と、となりの段との差はいつも2枚です。だから、どの段も奇数枚になります。',
        add: [...Array.from({ length: 4 }, (_, i) => lb(262, 14 + (i + 1) * 14 + 9, '＋2', 11, C.red, 'start', true)), ...bl(['1, 3, 5, 7, 9 … 2ずつふえる', '（ならべた数は 奇数）'], C.red)],
      },
      {
        note: '❓この合計を、かんたんに出せないか？→ 5段ぶんの合計1＋3＋5＋7＋9は、色ごとにL字形のタイルを重ねると、5×5の正方形にぴったりおさまります。',
        add: [...fresh(), ...L5(60, 14, 16), lb(230, 40, '1＋3＋5＋7＋9', 12, C.ink, 'middle', true), lb(230, 64, '＝ 5×5 ＝ 25', 13, C.green, 'middle', true), ...bl(['奇数のL字を 5つ重ねると', '5×5 の正方形になる'], C.green)],
      },
      {
        note: '❓なぜL字が、奇数枚になる？→ いちばん外側のL字は、たてに5枚、横に5枚。でもかどの1枚を二重に数えているので、5＋5−1＝9枚。いつも「□＋□−1」なので、必ず奇数です。',
        add: [...Array.from({ length: 5 }, (_, i) => bx(60 + 64 + 0 * i, 14 + i * 16, 16, 16, undefined, C.red, RA)), ...Array.from({ length: 4 }, (_, i) => bx(60 + i * 16, 14 + 64, 16, 16, undefined, C.red, RA)), ...bl(['いちばん外のL字 ＝ 5＋5−1 ＝ 9枚', '□番目のL字 ＝ □＋□−1（奇数）'], C.red)],
      },
      {
        note: '❓10段ならどうなる？→ L字が10こ重なるので、10×10の正方形になります。',
        add: [...fresh(), ...L10(105, 10, 11), ...bl(['10段 → L字が10こ', '→ 10×10 の正方形'], C.blue)],
      },
      {
        note: '❓では、合計は？→ 1＋3＋5＋…＋19（10段目は2×10−1＝19枚）は、10×10の正方形と同じ枚数なので、10×10＝100枚です。',
        add: [lb(160, 136, '10段目は 2×10−1＝19枚', 11, C.gray), ...bl(['1＋3＋5＋…＋19 ＝ 10×10 ＝ 100枚'], C.green, 14)],
      },
      {
        note: '答えは100枚。確かめ：はしどうしをたすと、1＋19、3＋17、5＋15、7＋13、9＋11とすべて20になります。20が5組なので、20×5＝100枚で一致します。',
        add: band(150, ...[['1＋19', 0], ['3＋17', 1], ['5＋15', 2], ['7＋13', 3], ['9＋11', 4]].map(([t, i]) => bx(8 + (i as number) * 61, 158, 56, 26, t as string, C.blue, FILL.blue, 10)), lb(160, 208, '20が5組 → 20×5 ＝ 100枚', 14, C.green, 'middle', true), lb(160, 228, '答え 100枚', 12, C.ink)),
      },
    ],
    '1から奇数を10こたす ＝ 10×10 ＝ 100枚',
  );
};

// ═══════════════ 花びらの面積（正方形に半円4つ） ═══════════════
const petals = (): Figure => {
  const S = { x: 160, y: 112 }, Wc = { x: 110, y: 62 }, N = { x: 160, y: 12 }, E = { x: 210, y: 62 };
  const semis = (): El[] => [
    pg(arcPts(S.x, S.y, 50, 0, 180), C.blue, 'rgba(2,132,199,0.20)'),
    pg(arcPts(Wc.x, Wc.y, 50, -90, 90), C.blue, 'rgba(2,132,199,0.20)'),
    pg(arcPts(N.x, N.y, 50, 180, 360), C.blue, 'rgba(2,132,199,0.20)'),
    pg(arcPts(E.x, E.y, 50, 90, 270), C.blue, 'rgba(2,132,199,0.20)'),
  ];
  const petal = (): El[] => [
    pg([...arcPts(S.x, S.y, 50, 180, 90), ...arcPts(Wc.x, Wc.y, 50, 0, -90)], C.red, RA),
    pg([...arcPts(Wc.x, Wc.y, 50, 90, 0), ...arcPts(N.x, N.y, 50, 270, 180)], C.red, RA),
    pg([...arcPts(N.x, N.y, 50, 0, -90), ...arcPts(E.x, E.y, 50, 180, 90)], C.red, RA),
    pg([...arcPts(E.x, E.y, 50, 270, 180), ...arcPts(S.x, S.y, 50, 90, 0)], C.red, RA),
  ];
  const sq = (): El[] => [bx(110, 12, 100, 100, undefined, C.main, '#FFFFFF')];
  return show(
    [
      {
        note: '1辺10cmの正方形の中に、各辺を直径とする半円を4つかきます。半円が重なってできる花びら形の部分の面積は、正方形の面積の何倍でしょう（円周率3.14）。',
        add: [...sq(), ...semis(), lb(160, 126, '10cm', 11, C.main), ...bl(['花びら部分の面積は', '正方形の面積の何倍？'], C.main, 13)],
      },
      {
        note: '❓半円4つを重ねると、どうなる？→ 半円は正方形の中をぜんぶおおいます。そして色がこい所（花びら）では、となりどうしの半円が2まい重なっています。',
        add: [...petal(), ...bl(['こい色の所（花びら）は', '半円が 2まい重なっている'], C.red)],
      },
      {
        note: '❓なぜ「半円4つ−正方形」が花びらになる？→ 半円4つの面積をたすと、正方形1つぶんと、2回数えた花びらぶんをたしたことになるからです。だから、半円4つから正方形を引くと花びらが残ります。',
        add: band(150, bx(6, 162, 92, 34, '半円4つ', C.blue, FILL.blue, 12), lb(104, 184, '＝', 16), bx(114, 162, 92, 34, '正方形', C.main, FILL.warm, 12), lb(212, 184, '＋', 16), bx(222, 162, 92, 34, '花びら', C.red, FILL.red, 12), lb(160, 216, '（花びらは2回数えたので、1回ぶん多い）', 11, C.gray)),
      },
      {
        note: '❓半円の半径は？→ 半円の直径は、正方形の1辺と同じ10cmです。半径はその半分の5cm。ここをまちがえる人が多いので注意しましょう。',
        add: [...fresh(), pg(arcPts(160, 100, 60, 0, 180), C.blue, BA), ln(100, 100, 220, 100, C.gray, false, 1.5), lb(160, 116, '直径 10cm', 11, C.gray), ln(160, 100, 160, 40, C.red, false, 3), lb(262, 62, '赤い線 ＝', 11, C.red, 'middle', true), lb(262, 78, '半径 5cm', 11, C.red, 'middle', true), ...bl(['半径 ＝ 10÷2 ＝ 5cm', '（10cmは 直径！）'], C.red)],
      },
      {
        note: '❓半円4つの面積は？→ 半円2つで円1つぶん。だから半円4つは円2つぶんです。円1つは 5×5×3.14＝78.5cm²、2つで 78.5×2＝157cm²。',
        add: [...fresh(), ci(100, 76, 32, '円1つ', C.blue, FILL.blue, 13), ci(220, 76, 32, '円1つ', C.blue, FILL.blue, 13), lb(160, 26, '半円4つ ＝ 円2つぶん', 13, C.blue, 'middle', true), ...bl(['円1つ ＝ 5×5×3.14 ＝ 78.5cm²', '円2つ ＝ 78.5×2 ＝ 157cm²'], C.blue)],
      },
      {
        note: '❓花びらの面積は？→ 半円4つの157cm²から、正方形の10×10＝100cm²を引きます。157−100＝57cm²。',
        add: [...fresh(), lb(155, 30, '半円4つの合計 157cm²', 12, C.blue, 'middle', true), bx(30, 42, 160, 34, '正方形 100', C.main, FILL.warm, 13), bx(190, 42, 91, 34, '花びら 57', C.red, FILL.red, 13), ...bl(['花びら ＝ 157 − 100 ＝ 57cm²'], C.red, 14)],
      },
      {
        note: '❓正方形の何倍？→ 花びら57cm²を、正方形100cm²でわります。57÷100＝0.57倍。確かめ：100×0.57＝57cm²。答えは0.57倍です。',
        add: band(150, bx(50, 158, 220, 32, '57 ÷ 100 ＝ 0.57倍', C.green, FILL.green, 16), lb(160, 210, '確かめ：100 × 0.57 ＝ 57 ✓', 12, C.gray), lb(160, 228, '答え 0.57倍', 12, C.ink)),
      },
    ],
    '半円4つ157−正方形100＝花びら57 → 0.57倍',
  );
};

// ═══════════════ 水そうにおもりをしずめる ═══════════════
const tank = (): Figure => {
  const s = 4, tx = 40, ty = 15, tw = 80, th = 120, bottom = ty + th;
  const waterTop = bottom - 18 * s; // 63
  const newTop = bottom - 20.5 * s; // 53
  const tankEls = (): El[] => [bx(tx, ty, tw, th, undefined, C.gray, '#FFFFFF'), bx(tx, waterTop, tw, bottom - waterTop, undefined, C.blue, 'rgba(2,132,199,0.30)')];
  return show(
    [
      {
        note: '底面が1辺20cmの正方形、高さ30cmの水そうに、深さ18cmまで水が入っています。1辺10cmの立方体のおもりを底にしずめると、水の深さは何cmになるでしょう。',
        add: [...tankEls(), lb(36, waterTop + 4, '18cm', 10, C.blue, 'end'), lb(36, ty + 8, '30cm', 10, C.gray, 'end'), bx(170, 95, 40, 40, undefined, C.main, FILL.warm), lb(190, 88, 'おもり 1辺10cm', 11, C.main), ...bl(['底面は 20×20cm　深さ18cmの水', 'おもりを入れると 水の深さは？'], C.main, 12)],
      },
      {
        note: '❓おもりを入れると、何が起こる？→ おもりが水のあった場所に入るので、その分の水がおしのけられて、水面が上がります。',
        add: [cover(140, 80, 120, 60), bx(60, 95, 40, 40, undefined, C.main, FILL.warm), bx(tx, newTop, tw, waterTop - newTop, undefined, C.blue, 'rgba(2,132,199,0.30)'), ln(tx, newTop, tx + tw, newTop, C.blue, true), ar(132, waterTop, 132, newTop + 1, C.red), lb(222, 58, '水面が 上がる', 12, C.red, 'middle', true), ...bl(['おもりの分だけ 水がおしのけられて', '水面が上がる'], C.red)],
      },
      {
        note: '❓おしのけられた水はどれだけ？→ おもりと同じ体積です。おもりは1辺10cmの立方体なので、10×10×10＝1000cm³。',
        add: [lb(222, 78, 'おしのけられた水', 11, C.main), lb(222, 94, '＝ おもりの体積', 11, C.main), lb(222, 112, '＝ 1000cm³', 13, C.red, 'middle', true), ...bl(['おもりの体積 ＝ 10×10×10 ＝ 1000cm³'], C.main, 13)],
      },
      {
        note: '❓おしのけられた水は、どこへ行く？→ 水そうの底面全体（20×20＝400cm²）に広がって、うすい層になります。その層の高さが、上がる高さです。体積＝底面積×高さなので、400×□＝1000。',
        add: [bx(tx, newTop, tw, waterTop - newTop, undefined, C.purple, PA), cover(140, 40, 175, 100), lb(228, 50, 'うすい層', 12, C.purple, 'middle', true), lb(228, 68, '底面積 400cm²', 11, C.purple), lb(228, 84, '× 高さ □cm', 11, C.purple), lb(228, 102, '＝ 1000cm³', 12, C.purple, 'middle', true), ...bl(['400 × □ ＝ 1000', '底面積は 水そうの 20×20＝400cm²'], C.purple)],
      },
      {
        note: '❓□は？→ 1000÷400＝2.5cm。注意：おもり自身の底面積（100cm²）でわってはいけません。水が広がるのは、水そうの底面全体だからです。',
        add: [lb(150, newTop + 6, '2.5cm', 12, C.purple, 'start', true), ...bl(['□ ＝ 1000÷400 ＝ 2.5cm', 'おもりの底(100cm²)でわらない'], C.purple)],
      },
      {
        note: '❓新しい水の深さは？→ もとの18cmに、上がった2.5cmをたします。18＋2.5＝20.5cm。おもりの高さ10cmより深いので、おもりは完全に水の中。水そうの高さ30cmもこえていません。',
        add: [ln(tx, newTop, tx + tw, newTop, C.blue, false, 2.5), lb(36, newTop + 2, '20.5cm', 10, C.blue, 'end', true), ...bl(['18 ＋ 2.5 ＝ 20.5cm', '（10cmより深い・30cm以下 ✓）'], C.green)],
      },
      {
        note: '答えは20.5cm。確かめ：はじめの水の体積は 400×18＝7200cm³。おもりの1000cm³をたして8200cm³。これを底面積400でわると 8200÷400＝20.5cm で一致します。',
        add: band(150, bx(40, 158, 240, 32, '答え 20.5cm', C.green, FILL.green, 16), lb(160, 208, '確かめ：400×18＋1000 ＝ 8200', 12, C.gray), lb(160, 226, '400×20.5 ＝ 8200 ✓', 12, C.gray)),
      },
    ],
    '水位の上がり＝おもりの体積÷底面積',
  );
};

// ═══════════════ 川をさかのぼる時間 ═══════════════
const river = (): Figure => {
  const water = (): El[] => [bx(10, 40, 300, 66, undefined, C.blue, FILL.blue)];
  return show(
    [
      {
        note: '静水での速さが時速18kmの船が、時速3kmで流れる川を12kmさかのぼります。かかる時間は何分でしょう。',
        add: [...water(), lb(195, 49, '静水での速さ 時速18km', 11, C.ink, 'middle', true), bx(160, 57, 70, 24, '船', C.main, FILL.warm, 12), ar(160, 69, 70, 69, C.green), lb(105, 58, 'さかのぼる 12km', 10, C.green, 'middle', true), ar(30, 96, 110, 96, C.blue), lb(200, 97, '川の流れ 時速3km', 11, C.blue, 'middle', true), ...bl(['流れにさからって 12km進む', 'かかる時間は 何分？'], C.main, 13)],
      },
      {
        note: '❓「静水での速さ」とは？→ 流れのない水の上での、船そのものの速さです。もし流れがなければ、この船は1時間に18km進みます。',
        add: [...fresh(), bx(10, 40, 300, 66, undefined, C.blue, FILL.blue), bx(30, 59, 70, 24, '船', C.main, FILL.warm, 12), ar(100, 71, 250, 71, C.green), lb(175, 60, '1時間で 18km', 12, C.green, 'middle', true), ...bl(['流れがなければ', '1時間に 18km 進む船'], C.green)],
      },
      {
        note: '❓では、流れがあるとどうなる？→ さかのぼるときは、流れが船をうしろへおし返します。船は前へ18km進もうとしますが、流れに3kmおし返されます。下りなら流れが背中をおすので、足し算になります。',
        add: [...fresh(), bx(10, 40, 300, 66, undefined, C.blue, FILL.blue), bx(200, 52, 70, 24, '船', C.main, FILL.warm, 12), ar(200, 64, 56, 64, C.green), lb(128, 52, '進む 18km', 11, C.green, 'middle', true), ar(232, 86, 268, 86, C.red), lb(232, 97, '流れにおし返される 3km', 10, C.red, 'middle'), ...bl(['上りは 流れにさからうので おそくなる', '（下りなら 18＋3、上りは 18−3）'], C.red)],
      },
      {
        note: '❓では、1時間にどれだけ進む？→ 前へ18km進んで、3kmおし返されるので、18−3＝15km。上りの速さは時速15kmです。',
        add: [...fresh(), ar(40, 58, 184, 58, C.green), lb(112, 48, '＋18km', 11, C.green, 'middle', true), ar(184, 78, 160, 78, C.red), lb(172, 92, '−3km', 11, C.red, 'middle', true), ln(160, 40, 160, 104, C.purple, true, 2), lb(160, 118, '15km', 12, C.purple, 'middle', true), ...bl(['18 − 3 ＝ 15', '上りの速さ ＝ 時速15km'], C.purple)],
      },
      {
        note: '❓時間はどう出す？→ 1時間で15km進める船が12km進むので、1時間の「15分の12」だけかかります。つまり 12÷15＝0.8時間。',
        add: [...fresh(), lb(160, 34, '1時間で進める道のり 15km', 12, C.gray, 'middle', true), bx(40, 46, 240, 34, undefined, C.gray, FILL.gray), bx(40, 46, 192, 34, '12km', C.blue, BA, 13), lb(160, 100, '12kmは 15kmの 15分の12', 12, C.blue), ...bl(['時間 ＝ 道のり ÷ 速さ', '＝ 12 ÷ 15 ＝ 0.8時間'], C.blue)],
      },
      {
        note: '❓0.8時間を分にすると？→ 1時間は60分なので、60×0.8＝48分です。',
        add: [...fresh(), bx(30, 46, 260, 34, undefined, C.gray, FILL.gray), bx(30, 46, 208, 34, '48分', C.blue, BA, 14), lb(260, 38, '60分(1時間)', 10, C.gray, 'middle'), lb(134, 100, '0.8時間 ＝ 60分の0.8', 12, C.blue), ...bl(['60 × 0.8 ＝ 48分'], C.blue, 14)],
      },
      {
        note: '答えは48分。確かめ：時速15kmは1分に15÷60＝0.25km。48分では 0.25×48＝12kmで、問題の12kmと一致します。注意：上りなのに速さを足して21としないこと。',
        add: band(150, bx(60, 158, 200, 32, '答え 48分', C.green, FILL.green, 16), lb(160, 208, '確かめ：0.25km×48分 ＝ 12km ✓', 12, C.gray), lb(160, 226, '上りは 足さずに 引く（21にしない）', 11, C.red)),
      },
    ],
    '上りの速さ＝静水の速さ−流れの速さ（18−3＝15）',
  );
};

// ═══════════════ てこ・ばね・回路・月・地層・地震 ═══════════════
const lever = (forceX: number | null, forceLabel: string): El[] => {
  const els: El[] = [ln(30, 70, 290, 70, C.main, false, 5), pg([[100, 72], [90, 92], [110, 92]], C.ink, FILL.gray), bx(24, 40, 32, 28, '30g', C.main, FILL.warm, 11), lb(100, 106, '支点', 11, C.ink), lb(40, 88, '作用点', 10, C.main), lb(40, 119, '10cm', 11, C.main)];
  els.push(ln(40, 112, 100, 112, C.main, false, 1.2), ln(100, 112, 100, 126, C.ink, false, 1));
  if (forceX !== null) {
    els.push(ar(forceX, 28, forceX, 66, C.red), lb(forceX, 20, forceLabel, 11, C.red, 'middle', true), lb(forceX, 88, '力点', 10, C.red));
  }
  return els;
};

const leverBig = (): Figure =>
  show(
    [
      {
        note: '重い物をてこで持ち上げます。❓力点（手で力を加える所）を、支点からどれだけはなして置くと、小さな力ですむでしょう。',
        add: [...lever(280, '力'), lb(190, 119, '30cm', 11, C.red), ln(100, 112, 280, 112, C.red, false, 1.2), ...bl(['重い物(30g)を 小さな力で持ち上げたい', '力点は どこに置くとよい？'], C.main, 13)],
      },
      {
        note: '❓てこが水平につり合うルールは？→ 「おもさ×支点からのきょり」が、左右で等しいときです。同じおもさでも、支点から遠いほど棒を回すはたらきが大きくなるからです（シーソーで遠くに座ると強いのと同じです）。',
        add: band(150, bx(10, 160, 140, 40, '作用点がわ\n30g × 10cm ＝ 300', C.main, FILL.warm, 12), bx(170, 160, 140, 40, '力点がわ\n□g × 30cm ＝ 300', C.red, FILL.red, 12), lb(160, 218, '左右が 等しいとき つり合う', 11, C.gray)),
      },
      {
        note: '❓力点までが30cmのとき、□は？→ □×30＝300 なので、□＝300÷30＝10g。重い物の3分の1の力ですみます。',
        add: [cover(250, 12, 70, 14), lb(280, 20, '10g', 12, C.red, 'middle', true), ...bl(['□ ＝ 300 ÷ 30 ＝ 10g', '（30gの 3分の1 の力でよい）'], C.green)],
      },
      {
        note: '❓もし力点を、作用点と同じ10cmにしたら？→ □×10＝300 なので□＝30g。重い物と同じ力が必要で、ちっとも楽になりません。',
        add: [...fresh(...lever(160, '30g')), ln(100, 112, 160, 112, C.red, false, 1.2), lb(130, 119, '10cm', 11, C.red), ...bl(['□ ＝ 300 ÷ 10 ＝ 30g', '（軽くならない）'], C.red)],
      },
      {
        note: '❓力点を作用点より近い5cmにすると？→ □×5＝300 なので□＝60g。もとの30gより大きな力が必要になってしまいます。',
        add: [...fresh(...lever(130, '60g')), ln(100, 112, 130, 112, C.red, false, 1.2), lb(115, 119, '5cm', 11, C.red), ...bl(['□ ＝ 300 ÷ 5 ＝ 60g', '（もっと大きな力が必要）'], C.red)],
      },
      {
        note: '❓きょりと力の関係は？→ 力点のきょりが5cm→10cm→30cmと長くなるほど、必要な力は60g→30g→10gと小さくなります。きょりが2倍、3倍になると、力は半分、3分の1です。',
        add: [...fresh(), bx(10, 40, 96, 50, '5cm\n60g', C.red, FILL.red, 14), bx(112, 40, 96, 50, '10cm\n30g', C.main, FILL.warm, 14), bx(214, 40, 96, 50, '30cm\n10g', C.green, FILL.green, 14), ar(106, 65, 112, 65, C.gray), ar(208, 65, 214, 65, C.gray), lb(160, 112, 'きょりが 長い → 力は 小さい', 13, C.green, 'middle', true), ...bl(['きょり2倍 → 力は半分', 'きょり3倍 → 力は3分の1'], C.ink)],
      },
      {
        note: '答えは、力点までのきょりを作用点までのきょりより長くする。支点から遠いほど回すはたらきが大きいので、小さな力ですみます。',
        add: band(150, lb(160, 172, '答え', 13, C.green, 'middle', true), bx(10, 182, 300, 40, '力点までのきょりを\n作用点までのきょりより 長くする', C.green, FILL.green, 12)),
      },
    ],
    'てこ：おもさ×きょりが左右で等しい',
  );

const leverBalance = (): Figure => {
  const base = (): El[] => [ln(40, 80, 280, 80, C.main, false, 5), pg([[160, 82], [150, 104], [170, 104]], C.ink, FILL.gray), lb(160, 117, '支点', 11, C.ink), ln(80, 80, 80, 100, C.gray, false, 1.2), bx(62, 100, 36, 26, '30g', C.main, FILL.warm, 12), ln(220, 80, 220, 100, C.gray, false, 1.2), bx(202, 100, 36, 26, '□g', C.red, FILL.red, 12), lb(120, 56, '20cm', 11, C.main), lb(190, 56, '15cm', 11, C.red), ln(80, 66, 160, 66, C.main, false, 1), ln(160, 66, 220, 66, C.red, false, 1)];
  return show(
    [
      {
        note: '長さ60cmの棒の中心を支点にして、てこをつくります。支点から左20cmに30gのおもりをつるしたとき、右15cmの位置に何gのおもりをつるせばつり合うでしょう（棒の重さは考えません）。',
        add: [...base(), ...bl(['左20cmに30g、右15cmに □g', 'つり合う □ は？'], C.main, 13)],
      },
      {
        note: '❓「つり合う」とは？→ 左にかたむけようとするはたらきと、右にかたむけようとするはたらきが、同じ大きさということです。',
        add: [lb(100, 143, '左へかたむける はたらき', 10, C.blue), lb(232, 143, '右へかたむける はたらき', 10, C.red), ...bl(['左のはたらき ＝ 右のはたらき', 'のとき、つり合う'], C.purple)],
      },
      {
        note: '❓はたらきの大きさは何できまる？→ おもりが重いほど、支点から遠いほど、大きくなります。だから「おもさ×きょり」で表します。左は 30×20＝600。',
        add: bl(['はたらき ＝ おもさ × きょり', '左 ＝ 30g × 20cm ＝ 600'], C.blue),
      },
      {
        note: '❓右のはたらきは？→ つり合うには、右も600でなければなりません。右は □×15。だから □×15＝600。',
        add: bl(['右 ＝ □g × 15cm ＝ 600', '（左と同じ600になればよい）'], C.red),
      },
      {
        note: '❓□は？→ □＝600÷15＝40g。',
        add: [bx(202, 100, 36, 26, '40g', C.green, FILL.green, 12), ...bl(['□ ＝ 600 ÷ 15 ＝ 40g'], C.green, 14)],
      },
      {
        note: '❓もっともらしい答え？→ 右は支点に近い（15cm＜20cm）ので、その分おもりは重くないとつり合いません。左の30gより重い40gは、理にかなっています。確かめ：40×15＝600＝30×20。',
        add: bl(['確かめ：40×15 ＝ 600 ＝ 30×20 ✓', '近いぶん 重い（15＜20、40＞30）'], C.blue),
      },
      {
        note: '答えは40g。注意：きょりと重さは、たし算ではなくかけ算です。',
        add: band(150, bx(70, 160, 180, 32, '答え 40g', C.green, FILL.green, 16), lb(160, 212, 'きょりと重さは かけ算（たし算ではない）', 12, C.red)),
      },
    ],
    'てこのつり合い：30×20＝□×15 → 40g',
  );
};

// ── ばね ──
const spr = (x: number, ext: number, weights: string[], color: string = C.main, nat = 36, k = 8, y0 = 12): El[] => {
  const len = nat + ext * k;
  const pts: [number, number][] = [[x, y0], [x, y0 + 4]];
  const n = 8;
  for (let i = 0; i < n; i++) pts.push([x + (i % 2 ? 8 : -8), y0 + 4 + ((len - 8) * (i + 0.5)) / n]);
  pts.push([x, y0 + len - 4], [x, y0 + len]);
  const els: El[] = [ln(x - 24, y0, x + 24, y0, C.ink, false, 3)];
  for (let i = 0; i < pts.length - 1; i++) els.push(ln(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], color, false, 1.6));
  if (ext > 0) els.push(ln(x - 26, y0 + nat, x + 26, y0 + nat, C.gray, true), lb(x + 30, y0 + nat + (ext * k) / 2 + 3, `${ext}cm`, 11, C.red, 'start', true));
  const bh = weights.length > 1 ? 15 : 20;
  weights.forEach((w, i) => els.push(bx(x - 17, y0 + len + i * bh, 34, bh, w, color, FILL.warm, 10)));
  return els;
};

const spring35 = (): Figure =>
  show(
    [
      {
        note: 'あるばねに10gのおもりをつるすと2cmのびます。同じばねに35gのおもりをつるすと、何cmのびるでしょう（のびは重さに比例）。❓「比例」とは、どういうことでしょう。',
        add: [...spr(80, 2, ['10g']), bx(170, 50, 130, 40, '35gのおもりでは\nのびは何cm？', C.blue, FILL.blue, 12), ...bl(['10gで 2cm のびるばね', '35gでは 何cm？'], C.main, 13)],
      },
      {
        note: '❓比例とは？→ 重さが2倍、3倍になると、のびも2倍、3倍になる関係です。10gで2cmなら、20gで4cm、30gで6cmになります。',
        add: [...fresh(...spr(60, 2, ['10g']), ...spr(140, 4, ['20g']), ...spr(220, 6, ['30g'])), ...bl(['10g→2cm　20g→4cm　30g→6cm', '重さ2倍、3倍 → のびも2倍、3倍'], C.blue)],
      },
      {
        note: '❓35gは10gの何倍か、わり切れない。どうする？→ 1gあたりのびをまず求めます。10gで2cmのびるなら、1gでは10等分して 2÷10＝0.2cm。',
        add: [...fresh(...spr(80, 2, ['10g'])), bx(150, 40, 160, 46, '10gで 2cm\n1gでは 2÷10＝0.2cm', C.blue, FILL.blue, 12), ...bl(['1gあたり 0.2cm のびる', '（2cmを 10こに 等分）'], C.blue)],
      },
      {
        note: '❓35gでは？→ 1gで0.2cmのびるのが、35g（35こぶん）あります。0.2×35＝7cm。',
        add: [...fresh(...spr(80, 7, ['35g'])), bx(150, 40, 160, 46, '1gで 0.2cm が 35こぶん\n0.2×35 ＝ 7cm', C.green, FILL.green, 12), ...bl(['0.2cm × 35 ＝ 7cm'], C.green, 14)],
      },
      {
        note: '❓なぜかけ算？→ 「1gでのび0.2cm」が35g分あるので、0.2を35回たすことになります。同じ数を何回もたすことは、かけ算で表せます。',
        add: bl(['0.2を 35回たす ＝ 0.2×35 ＝ 7', '（同じ数を何回も → かけ算）'], C.purple),
      },
      {
        note: '❓別の方法でも同じになる？→ 35gは10gの35÷10＝3.5倍。のびも3.5倍なので 2×3.5＝7cm。同じ答えになります。',
        add: bl(['35 ÷ 10 ＝ 3.5倍', '2cm × 3.5 ＝ 7cm（同じ）'], C.blue),
      },
      {
        note: '答えは7cm。注意：重さもふえた分を、そのままのびにたしてはいけません（比例は「何倍か」で考えます）。',
        add: band(150, bx(70, 158, 180, 32, '答え 7cm', C.green, FILL.green, 16), lb(160, 208, '重さ3.5倍 → のびも3.5倍', 12, C.gray), lb(160, 226, '重さとのびを たし算しない', 11, C.red)),
      },
    ],
    'ばねののび＝1gあたり0.2cm×35g＝7cm',
  );

const spring30 = (): Figure =>
  show(
    [
      {
        note: 'あるばねに10gのおもりをつるすと2cmのびます。30gのおもりをつるすと、何cmのびるでしょう（のびは重さに比例）。',
        add: [...spr(80, 2, ['10g']), bx(170, 50, 130, 40, '30gのおもりでは\nのびは何cm？', C.blue, FILL.blue, 12), ...bl(['10gで 2cm のびるばね', '30gでは 何cm？'], C.main, 13)],
      },
      {
        note: '❓比例とは？→ 重さが2倍、3倍になると、のびも2倍、3倍になる関係です。20gで4cm、30gで6cmになります。',
        add: [...fresh(...spr(60, 2, ['10g']), ...spr(140, 4, ['20g']), ...spr(220, 6, ['30g'])), ...bl(['30gは 10gの 3倍', 'のびも 3倍になる'], C.blue)],
      },
      {
        note: '❓なぜ、のびも3倍になる？→ 30gは10gのおもり3こぶんです。10gが1こぶらさがるごとに2cmのびるので、3こで 2cm×3こ。',
        add: [...fresh(...spr(110, 6, ['10g', '10g', '10g'])), lb(200, 50, '10gごとに', 11, C.blue, 'start'), lb(200, 66, '2cmずつ のびる', 11, C.blue, 'start', true), ...bl(['10gが1こふえるごとに 2cm', '10gが3こ → 2cm が 3つ分'], C.blue)],
      },
      {
        note: '❓のびは？→ 2cmが3つ分なので、2×3＝6cm。',
        add: bl(['2cm × 3 ＝ 6cm'], C.green, 15),
      },
      {
        note: '❓別の方法でも出せる？→ 1gあたりのびは 2÷10＝0.2cm。30g分なので 0.2×30＝6cm。同じ答えです。',
        add: bl(['1gで 2÷10 ＝ 0.2cm', '0.2 × 30 ＝ 6cm（同じ）'], C.blue),
      },
      {
        note: '❓ふえた分で考えてもいい？→ 10gから30gへ、おもりは20gふえました。20gは10gの2つ分なので、のびは 2×2＝4cmふえます。もとの2cmに4cmをたして6cm。',
        add: bl(['ふえた 20g ＝ 10gが2つ分 → 4cmふえる', '2 ＋ 4 ＝ 6cm'], C.purple),
      },
      {
        note: '答えは6cm。のびを「重さの足し算」で考えず、「何倍か」「10gあたりいくつぶんか」で考えるのがコツです。',
        add: band(150, bx(70, 158, 180, 32, '答え 6cm', C.green, FILL.green, 16), lb(160, 210, '3つの方法で どれも 6cm ✓', 12, C.gray)),
      },
    ],
    'ばねののび：10gで2cm → 30gで2×3＝6cm',
  );

// ── 回路 ──
const bulb = (x: number, y: number, text?: string, lit = true): El => ci(x, y, 10, text, lit ? C.main : C.gray, lit ? '#FEF08A' : '#E5E7EB', 9);
const batt = (x: number, y: number): El => bx(x - 14, y - 8, 28, 16, '電池', C.ink, FILL.gray, 9);
const serCircuit = (texts?: string[], lit: boolean[] = [true, true]): El[] => [
  ln(30, 40, 140, 40, C.ink), ln(140, 40, 140, 100, C.ink), ln(140, 100, 30, 100, C.ink), ln(30, 40, 30, 62, C.ink), ln(30, 78, 30, 100, C.ink), batt(30, 70),
  bulb(70, 40, texts?.[0], lit[0]), bulb(110, 40, texts?.[1], lit[1]),
];
const parCircuit = (texts?: string[], lit: boolean[] = [true, true]): El[] => [
  ln(180, 35, 300, 35, C.ink), ln(300, 35, 300, 105, C.ink), ln(300, 105, 180, 105, C.ink), ln(180, 35, 180, 62, C.ink), ln(180, 78, 180, 105, C.ink), batt(180, 70),
  bulb(240, 35, texts?.[0], lit[0]), bulb(240, 105, texts?.[1], lit[1]),
];
const oneCircuit = (): El[] => [ln(40, 40, 140, 40, C.ink), ln(140, 40, 140, 100, C.ink), ln(140, 100, 40, 100, C.ink), ln(40, 40, 40, 62, C.ink), ln(40, 78, 40, 100, C.ink), batt(40, 70), bulb(90, 40)];
const tag = (): El[] => [lb(85, 125, '直列つなぎ', 11, C.blue, 'middle', true), lb(240, 125, '並列つなぎ', 11, C.green, 'middle', true)];

const circuitBright = (): Figure =>
  show(
    [
      {
        note: '豆電球2個を「直列」につないだ回路と「並列」につないだ回路があります。豆電球の明るさをくらべると、どちらが明るいでしょう。',
        add: [...serCircuit(), ...parCircuit(), ...tag(), ...bl(['直列と並列の 豆電球の明るさは？'], C.main, 13)],
      },
      {
        note: '❓明るさは何できまる？→ 豆電球に流れる電気の量です。多いほど明るくなります。くらべやすいように、豆電球1個だけの回路に流れる電気の量を「①」とします。',
        add: [...fresh(...oneCircuit()), bx(170, 40, 140, 54, '豆電球1個だけのとき\n流れる電気の量 ①', C.blue, FILL.blue, 12), ...bl(['明るさ ＝ 流れる電気の量', '（多いほど 明るい）'], C.blue)],
      },
      {
        note: '❓直列では？→ 電気の通り道は1本で、豆電球2個を続けて通ります。通りにくさが2こぶんになるので、流れる電気の量は①の半分になります。',
        add: [...fresh(...serCircuit(['半分', '半分'])), bx(160, 50, 140, 44, '通り道は1本\n電気は ①の半分', C.red, FILL.red, 12), ...bl(['直列：豆電球が2こ続く', '→ 電気が通りにくい → 半分'], C.red)],
      },
      {
        note: '❓並列では？→ 豆電球ごとに別の通り道があり、どちらも電池に直接つながっています。それぞれに、1個だけのときと同じ①ずつ流れます。',
        add: [...fresh(...parCircuit(['①', '①'])), bx(10, 50, 150, 44, '豆電球ごとに別の道\nそれぞれに ①ずつ', C.green, FILL.green, 12), ...bl(['並列：道が2本（電池に直接）', '→ それぞれに ①ずつ'], C.green)],
      },
      {
        note: '❓くらべると？→ 直列は1個あたり半分、並列は1個あたり①。流れる電気の量は並列のほうが多いので、並列のほうが明るくなります。',
        add: [...fresh(...serCircuit(['半分', '半分']), ...parCircuit(['①', '①'])), ...tag(), ...bl(['直列：1個 半分　並列：1個 ①', '→ 並列のほうが明るい'], C.green)],
      },
      {
        note: '❓では、並列はいいことばかり？→ 並列は電池から出る電気が合計②と多いので、電池が早く減ります。直列は半分なので、電池が長持ちします。',
        add: [...fresh(...parCircuit(['①', '①'])), lb(162, 72, '合計②', 11, C.red, 'end', true), ...bl(['電池から出る電気：並列は ②、直列は 半分', '→ 並列は 電池が早く減る'], C.red)],
      },
      {
        note: '答えは、並列のほうが明るい。確かめ：豆電球1個だけの回路とくらべると、並列は同じ明るさ、直列は暗くなります。',
        add: band(150, bx(40, 158, 240, 32, '答え 並列のほうが明るい', C.green, FILL.green, 14), lb(160, 210, '1個だけと くらべて', 12, C.gray), lb(160, 228, '並列：同じ明るさ　直列：暗くなる', 12, C.gray)),
      },
    ],
    '直列は電気が半分、並列は①ずつ',
  );

const circuitOff = (): Figure =>
  show(
    [
      {
        note: '豆電球2個の回路で、1個をソケットからはずしたとき、もう1個も消えてしまうのは、直列と並列のどちらでしょう。',
        add: [...serCircuit(), ...parCircuit(), ...tag(), ...bl(['1個はずすと もう1個も消えるのは？'], C.main, 13)],
      },
      {
        note: '❓2つのつなぎ方で、電気の通り道はどうちがう？→ 直列は電池から出て戻るまで、道が1本だけ。並列は途中で道が2本に分かれます。',
        add: [...fresh(...serCircuit(), ...parCircuit()), ar(76, 30, 98, 30, C.blue), ar(152, 62, 152, 84, C.blue), ar(98, 110, 76, 110, C.blue), ar(206, 26, 224, 26, C.blue), ar(206, 96, 224, 96, C.blue), ...tag(), ...bl(['直列：道は 1本だけ', '並列：道が 2本に分かれる'], C.blue)],
      },
      {
        note: '❓直列で1個はずすと？→ 1本しかない道が、そこで切れます。電気は回路のどこにも流れなくなるので、もう1個の豆電球も消えます。',
        add: [...fresh(...serCircuit(undefined, [true, false])), ln(58, 40, 82, 40, '#FFFFFF', false, 7), ci(70, 40, 10, undefined, '#FFFFFF', '#FFFFFF'), lb(70, 22, 'ここで切れる', 10, C.red, 'middle', true), ...bl(['道が切れる → 電気が流れない', '→ もう1個も 消える'], C.red)],
      },
      {
        note: '❓並列で1個はずすと？→ はずしたほうの道は切れますが、もう一方の道は残っています。電気は流れつづけるので、もう1個は光ったままです。',
        add: [...fresh(...parCircuit(undefined, [false, true])), ln(228, 35, 252, 35, '#FFFFFF', false, 7), ci(240, 35, 10, undefined, '#FFFFFF', '#FFFFFF'), lb(240, 18, 'ここで切れる', 10, C.red, 'middle', true), ar(206, 96, 224, 96, C.green), ...bl(['別の道は のこっている', '→ もう1個は 光りつづける'], C.green)],
      },
      {
        note: '❓身近な例は？→ 家のコンセントにつないだ電気器具は並列なので、1つ切っても、ほかは消えません。直列だと、1つ切れたら全部消えてしまいます。',
        add: [...fresh(...serCircuit(), ...parCircuit()), ...tag(), ...band(150, bx(10, 160, 145, 46, '直列\n1つ切れると 全部消える', C.red, FILL.red, 11), bx(165, 160, 145, 46, '並列\n1つ切れても ほかは光る', C.green, FILL.green, 11))],
      },
      {
        note: '❓つなぎ方はどう見分ける？→ 電池から出て電池にもどるまで、指でなぞってみます。分かれ道がなければ直列、途中で分かれ道があれば並列です。',
        add: [...fresh(...parCircuit()), ar(196, 26, 222, 26, C.blue), ar(196, 96, 222, 96, C.red), lb(108, 70, '分かれ道あり', 12, C.green, 'middle', true), ...bl(['分かれ道が なければ 直列', '分かれ道が あれば 並列'], C.ink)],
      },
      {
        note: '答えは直列つなぎ。1本道の直列では、1個はずすと電気が止まり、もう1個も消えます。',
        add: band(150, bx(70, 160, 180, 32, '答え 直列つなぎ', C.green, FILL.green, 16), lb(160, 212, '並列は 別の道が のこるので 消えない', 12, C.gray)),
      },
    ],
    '直列は1本道：1個はずすと全部消える',
  );

const circuitThree = (): Figure => {
  const circ = (tx?: string[], colors?: string[]): El[] => [
    ln(30, 30, 250, 30, C.ink), ln(250, 30, 250, 110, C.ink), ln(250, 110, 30, 110, C.ink), ln(30, 30, 30, 62, C.ink), ln(30, 78, 30, 110, C.ink), batt(30, 70),
    ln(120, 30, 120, 70, C.ink), ln(120, 70, 250, 70, C.ink),
    ci(75, 30, 11, tx?.[0] ?? 'C', C.main, colors?.[0] ?? '#FEF08A', 9), ci(185, 30, 11, tx?.[1] ?? 'A', C.main, colors?.[1] ?? '#FEF08A', 9), ci(185, 70, 11, tx?.[2] ?? 'B', C.main, colors?.[2] ?? '#FEF08A', 9),
  ];
  return show(
    [
      {
        note: '同じ豆電球3個を、Aと Bは並列に、その並列部分とCを直列につなぎました。3個の明るさについて正しいものを選びます。',
        add: [...circ(), ...bl(['A・B（並列）と C（直列）', '明るさの関係は？'], C.main, 13)],
      },
      {
        note: '❓まず、電池を出た電気はどこを通る？→ 道はCのところで1本です。だから、電池から出た電気は、ぜんぶCを通ります。',
        add: [ar(40, 22, 60, 22, C.red), lb(75, 12, '全部ここを通る', 10, C.red, 'middle', true), ci(75, 30, 11, 'C', C.red, '#FCA5A5', 9), ...bl(['Cには 電池から出た電気が', 'すべて 通る'], C.red)],
      },
      {
        note: '❓AとBでは？→ 電気は道が2本に分かれます。AとBは同じ豆電球なので、電気は半分ずつに分かれます。',
        add: [ar(132, 26, 168, 26, C.blue), ar(132, 66, 168, 66, C.blue), ci(185, 30, 11, 'A', C.blue, '#BAE6FD', 9), ci(185, 70, 11, 'B', C.blue, '#BAE6FD', 9), lb(216, 50, '半分ずつ', 11, C.blue, 'middle', true), ...bl(['A・B：道が2本に分かれる', '→ 同じ豆電球なので 半分ずつ'], C.blue)],
      },
      {
        note: '❓くらべると？→ Cは電気が「全部」、AとBは「半分ずつ」。だからCがいちばん明るく、AとBは同じ明るさでCより暗くなります。',
        add: band(150, bx(10, 160, 92, 40, 'C\n全部', C.red, FILL.red, 13), lb(108, 184, '＞', 18), bx(118, 160, 92, 40, 'A\n半分', C.blue, FILL.blue, 13), lb(216, 184, '＝', 18), bx(226, 160, 84, 40, 'B\n半分', C.blue, FILL.blue, 13)),
      },
      {
        note: '❓数で確かめると？→ 豆電球1個の通りにくさを1とします。AとBは道が2本で通りやすく、合わせて「1個の半分」。全体は 1＋½＝1½。電池1個÷1½＝3分の2が、Cを流れる電気です。AとBは、それを半分ずつで3分の1。',
        add: [...fresh(...circ(['2/3', '1/3', '1/3'])), ...bl(['全体の通りにくさ ＝ 1(C) ＋ ½(AとB) ＝ 1½', 'C ＝ 1÷1½ ＝ 3分の2、A・B ＝ 3分の1ずつ'], C.purple, 11)],
      },
      {
        note: '❓A・Bは電池に直接つながっているから明るい？→ そうではありません。電池につながっていても、道が分かれれば、電気は少なくなります。明るさを決めるのは、そこを流れる電気の量です。',
        add: [...fresh(...circ(['2/3', '1/3', '1/3'])), ...bl(['電池に つながっていても', '電気が分かれれば 弱くなる'], C.red)],
      },
      {
        note: '答えは、並列のAとBは同じ明るさで、直列のCより暗い。確かめ：Aをはずすと、BとCだけの直列になり、電気は半分。Bは3分の1から半分へ明るくなり、Cは3分の2から半分へ暗くなります。',
        add: band(150, lb(160, 170, '答え A・Bは同じ明るさで Cより暗い', 12, C.green, 'middle', true), lb(160, 196, '確かめ：Aをはずすと', 12, C.ink), lb(160, 216, 'B：3分の1 → 半分（明るく）　C：3分の2 → 半分（暗く）', 10, C.gray)),
      },
    ],
    '直列のCは全部、並列のA・Bは半分ずつ',
  );
};

// ── 月 ──
const halfMoon = (cx: number, cy: number, r: number, lit: 'L' | 'R' = 'L'): El[] => [
  ci(cx, cy, r, undefined, C.gray, MOON_DARK),
  pg(lit === 'L' ? arcPts(cx, cy, r, 90, 270) : arcPts(cx, cy, r, -90, 90), C.main, MOON_LIT),
];
const crescent = (cx: number, cy: number, r: number): El[] => [ci(cx, cy, r, undefined, C.main, MOON_LIT), ci(cx + r * 0.6, cy, r * 0.92, undefined, '#FFFFFF', '#FFFFFF')];
const fullMoon = (cx: number, cy: number, r: number): El[] => [ci(cx, cy, r, undefined, C.main, MOON_LIT)];
const halfIcon = (cx: number, cy: number, r: number): El[] => [ci(cx, cy, r, undefined, C.gray, MOON_DARK), pg(arcPts(cx, cy, r, 90, 270), C.main, MOON_LIT)];

const moonEvening = (): Figure => {
  const ex = 190, ey = 75, R = 55;
  const pos = (deg: number): [number, number] => [ex + R * Math.cos((deg * Math.PI) / 180), ey - R * Math.sin((deg * Math.PI) / 180)];
  const sunEls = (): El[] => [ci(28, 75, 16, undefined, C.red, '#FDBA74'), lb(28, 100, '太陽', 10, C.red), ar(50, 50, 120, 50, '#F59E0B'), ar(50, 75, 118, 75, '#F59E0B'), ar(50, 100, 120, 100, '#F59E0B')];
  const earthOrbit = (): El[] => [ci(ex, ey, R, undefined, C.gray, 'rgba(0,0,0,0)'), ci(ex, ey, 12, undefined, C.blue, '#BAE6FD'), lb(ex, ey + 4, '地球', 7, C.ink)];
  const m180 = pos(180), m225 = pos(225), m270 = pos(270), m0 = pos(0), m90 = pos(90);
  return show(
    [
      {
        note: '夕方、西の空に細い月が見えました。この後、月はどのように満ち欠けしていくでしょう。',
        add: [bx(10, 14, 300, 100, undefined, C.blue, SKY), ci(268, 112, 12, undefined, C.red, '#FDBA74'), bx(10, 114, 300, 22, undefined, C.green, FILL.green), lb(30, 128, '東', 11, C.ink, 'middle', true), lb(160, 128, '南', 11, C.ink, 'middle', true), lb(290, 128, '西', 11, C.ink, 'middle', true), ci(236, 78, 11, undefined, C.main, MOON_LIT), ci(231, 73, 10.5, undefined, SKY, SKY), lb(236, 54, '細い月', 11, C.main, 'middle', true), lb(262, 96, '夕日', 10, C.red, 'middle'), ...bl(['夕方、西の空に 細い月', 'このあと 月は どう変わる？'], C.main, 13)],
      },
      {
        note: '❓月はなぜ満ち欠けして見える？→ 月は自分では光らず、太陽の光を受けた側だけが明るいからです。月がどの位置にいても、明るいのは太陽に向いた側（図では左がわ）の半分です。',
        add: [...fresh(), ...sunEls(), ...earthOrbit(), ...halfMoon(m180[0], m180[1], 7), ...halfMoon(m270[0], m270[1], 7), ...halfMoon(m0[0], m0[1], 7), ...halfMoon(m90[0], m90[1], 7), lb(m180[0], m180[1] - 12, '新月', 9, C.gray), lb(m270[0] + 12, m270[1] + 4, '上弦', 9, C.gray, 'start'), lb(m0[0], m0[1] - 12, '満月', 9, C.gray), lb(m90[0] + 12, m90[1] + 3, '下弦', 9, C.gray, 'start'), ...bl(['月は 太陽に向いた側だけが 明るい', '（図の左がわ）'], C.main)],
      },
      {
        note: '❓夕方西の細い月は、どこにいる？→ 三日月の位置です。地球から見ると、明るい半分のうち、ほんの少ししか見えません。だから細い月に見えます。',
        add: [...fresh(), ...sunEls(), ...earthOrbit(), ...halfMoon(m225[0], m225[1], 7), ln(ex, ey, m225[0], m225[1], C.blue, true), lb(m225[0] - 10, m225[1] + 15, '三日月', 10, C.main, 'middle', true), ...band(150, ...crescent(60, 182, 16), lb(200, 182, '三日月のときは 明るい面が\nほんの少ししか 見えない', 12, C.ink, 'middle', true))],
      },
      {
        note: '❓なぜ夕方の西の空なの？→ 三日月は、太陽の方向（赤い角）にとても近い所にいます。そのため、太陽がしずむ夕方に、同じ西の空にいて、太陽のあとを追うようにしずみます。',
        add: [sc(ex, ey, 30, 180, 225, C.red, RA), ln(ex, ey, 50, ey, '#F59E0B', true), ...bl(['三日月は 太陽の方向に近い', '→ 夕方 太陽と同じ西の空に見える'], C.red)],
      },
      {
        note: '❓このあと月はどう動く？→ 月は地球のまわりを回っていて、図では三日月から上弦へ、そして満月へと進んでいきます。',
        add: [...fresh(), ...sunEls(), ...earthOrbit(), ...halfMoon(m225[0], m225[1], 7), ...halfMoon(m270[0], m270[1], 7), ...halfMoon(m0[0], m0[1], 7), ar(m225[0] + 4, m225[1] + 7, m270[0] - 10, m270[1] - 1, C.blue), ar(m270[0] + 10, m270[1] - 2, m0[0] - 4, m0[1] + 12, C.blue), lb(m225[0] - 10, m225[1] + 15, '三日月', 9, C.gray), lb(m270[0] + 12, m270[1] + 4, '上弦', 9, C.gray, 'start'), lb(m0[0], m0[1] - 12, '満月', 9, C.gray), ...bl(['三日月 → 上弦 → 満月 の順に進む'], C.blue)],
      },
      {
        note: '❓見える形はどうなる？→ 進むほど、地球から見える明るい部分がふえていきます。細い月から、半月、そして満月へ、だんだん満ちていきます。',
        add: [...fresh(), ...band(0, ...crescent(60, 50, 22), ar(92, 50, 118, 50, C.gray), ...halfIcon(160, 50, 22), ar(192, 50, 218, 50, C.gray), ...fullMoon(260, 50, 22), lb(60, 88, '細い月', 12, C.ink, 'middle', true), lb(160, 88, '半月', 12, C.ink, 'middle', true), lb(260, 88, '満月', 12, C.ink, 'middle', true)), ...bl(['明るい部分が だんだん ふえる', '（満ちていく）'], C.green)],
      },
      {
        note: '答えは「だんだん満ちて満月に近づく」。確かめ：欠けていく細い月（二十六日ごろの月）は、夕方ではなく明け方の東の空に見えます。',
        add: band(150, bx(10, 158, 300, 32, '答え だんだん満ちて 満月に近づく', C.green, FILL.green, 14), lb(160, 210, '確かめ：欠けていく細い月は', 12, C.gray), lb(160, 228, '明け方の東の空に見える', 12, C.gray)),
      },
    ],
    '夕方西の細い月（三日月）は、満ちていく途中',
  );
};

const moonAlign = (): Figure => {
  const sun = (x: number): El[] => [ci(x, 75, 17, '太陽', C.red, '#FDBA74', 9)];
  const earth = (x: number): El[] => [ci(x, 75, 14, undefined, C.blue, '#BAE6FD'), lb(x, 100, '地球', 11, C.blue, 'middle', true)];
  return show(
    [
      {
        note: '太陽・地球・月の順に、ほぼ一直線に並びました。このとき月は、どんな形に見えるでしょう。',
        add: [...sun(30), ...earth(150), ci(250, 75, 12, undefined, C.gray, MOON_DARK), lb(250, 100, '月', 11, C.gray, 'middle', true), ln(47, 75, 238, 75, C.gray, true), ...bl(['太陽 → 地球 → 月 の順に一直線', '月は どんな形に見える？'], C.main, 13)],
      },
      {
        note: '❓月はどうして光って見える？→ 月は自分では光りません。太陽の光を受けた側（太陽に向いた側）だけが明るくなります。',
        add: [ar(52, 52, 237, 65, '#F59E0B'), ar(52, 98, 237, 85, '#F59E0B'), ...halfMoon(250, 75, 12, 'L'), ...bl(['月は 太陽に向いた側が 明るい', '（ここでは 月の左がわ）'], C.main)],
      },
      {
        note: '❓地球から見えるのはどの面？→ 地球は月の左にいるので、見えるのは月の左がわ、つまり太陽に向いた明るい面です。見える面が全部明るいので、まるい月に見えます。',
        add: [ar(166, 75, 235, 75, C.blue, true), lb(200, 66, '見る向き', 10, C.blue, 'middle', true), ...band(150, ...fullMoon(60, 182, 18), lb(200, 182, '見える面が ぜんぶ 明るい\n＝ まるい月', 12, C.ink, 'middle', true))],
      },
      {
        note: '❓並びがちがうと？→ 太陽・月・地球の順だと、月の明るい面は太陽がわ（地球の反対）を向きます。地球から見えるのは暗い面だけなので、ほとんど見えません（新月）。',
        add: [...fresh(), ...sun(30), ln(47, 75, 236, 75, C.gray, true), ar(52, 62, 120, 68, '#F59E0B'), ar(52, 88, 120, 82, '#F59E0B'), ...halfMoon(130, 75, 12, 'L'), lb(130, 100, '月', 11, C.gray, 'middle', true), ...earth(250), ar(236, 75, 148, 75, C.blue, true), ...bl(['太陽・月・地球の順：新月', '地球から見えるのは 暗い面'], C.gray)],
      },
      {
        note: '❓半分だけ見えるのは？→ 太陽と地球と月が直角に並ぶときです。地球からは、月の明るい面の半分だけが見えるので、半月（上弦・下弦）になります。',
        add: [...fresh(), ...sun(30), ln(47, 75, 150, 75, C.gray, true), ...earth(150), ar(52, 52, 150, 36, '#F59E0B'), ...halfMoon(150, 26, 10, 'L'), ar(150, 62, 150, 40, C.blue, true), lb(172, 26, '月', 11, C.gray, 'start', true), ln(150, 60, 150, 75, C.gray, true), ...bl(['直角に並ぶ：半月（上弦・下弦）', '明るい面の 半分だけ見える'], C.purple)],
      },
      {
        note: '答えは満月。地球が太陽と月のあいだにあると、月の太陽に向いた明るい面が、そっくり地球のほうを向きます。',
        add: [...fresh(), ...band(0, bx(20, 14, 280, 34, '太陽・月・地球：新月（見えない）', C.gray, FILL.gray, 12), bx(20, 58, 280, 34, '太陽・地球・月：満月（まるい）', C.green, FILL.green, 12), bx(20, 102, 280, 34, '直角に並ぶ：半月', C.purple, FILL.purple, 12)), ...bl(['答え 満月', '地球が 真ん中にあるとき'], C.green, 14)],
      },
      {
        note: '❓確かめ：この並びがぴったり一直線になると、月が地球のかげに入って欠けて見えます。これが月食で、満月のときだけ起こります。',
        add: [...fresh(), ...sun(30), ...earth(150), pg([[162, 62], [310, 66], [310, 84], [162, 88]], C.gray, 'rgba(100,100,100,0.25)'), ci(250, 75, 12, undefined, C.gray, MOON_DARK), lb(252, 100, '月', 11, C.gray, 'middle', true), lb(240, 52, '地球のかげ', 10, C.gray, 'middle'), ...bl(['ぴったり一直線 → 月が地球のかげに入る', '→ 月食（満月のときだけ）'], C.ink)],
      },
    ],
    '太陽・地球・月の順に並ぶと満月',
  );
};

// ── オリオン座 ──
const orion = (cx: number, cy: number, color: string): El[] => [ci(cx - 9, cy - 14, 2.5, undefined, color, color), ci(cx + 9, cy - 14, 2.5, undefined, color, color), ci(cx - 4, cy, 2.5, undefined, color, color), ci(cx, cy, 2.5, undefined, color, color), ci(cx + 4, cy, 2.5, undefined, color, color), ci(cx - 8, cy + 14, 2.5, undefined, color, color), ci(cx + 8, cy + 14, 2.5, undefined, color, color)];
const skyPath = (): El[] => {
  const out: El[] = [];
  const pts = Array.from({ length: 13 }, (_, i) => {
    const t = (180 - (180 * i) / 12) * (Math.PI / 180);
    return [160 + 130 * Math.cos(t), 112 - 82 * Math.sin(t)] as [number, number];
  });
  for (let i = 0; i < 12; i++) out.push(ln(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], C.gray, true, 1));
  out.push(ln(20, 112, 300, 112, C.ink, false, 2), lb(30, 126, '東', 11, C.ink, 'middle', true), lb(160, 126, '南', 11, C.ink, 'middle', true), lb(290, 126, '西', 11, C.ink, 'middle', true));
  return out;
};
const orionSky = (): Figure => {
  const posT = (deg: number): [number, number] => [160 + 110 * Math.cos((deg * Math.PI) / 180), 112 - 70 * Math.sin((deg * Math.PI) / 180)];
  const p90 = posT(90), p60 = posT(60);
  const orbitC = (x: number, y: number) => ci(x, y, 6, undefined, C.blue, '#BAE6FD');
  const Ea = [160 + 50 * Math.cos((150 * Math.PI) / 180), 70 - 50 * Math.sin((150 * Math.PI) / 180)];
  const Eb = [110, 70];
  return show(
    [
      {
        note: '大阪で、ある日の午後8時にオリオン座が南の空に見えました。1か月後の同じ日時に観察すると、オリオン座はどの方向に見えるでしょう。',
        add: [...skyPath(), ...orion(p90[0], p90[1], C.main), lb(p90[0], p90[1] + 28, 'オリオン座', 11, C.main, 'middle', true), ...bl(['午後8時：オリオン座は 南の空', '1か月後の同じ時刻には？'], C.main, 13)],
      },
      {
        note: '❓星は1日の中でどう動く？→ 地球が1日1回自転するので、星は東から西へ動いて見えます。360度÷24時間＝15度。1時間に約15度動きます。',
        add: [ar(70, 98, 250, 98, C.blue), lb(160, 86, '東から西へ 1時間に約15度', 11, C.blue, 'middle', true), ...bl(['地球は 1日で360度 自転', '360÷24 ＝ 15度（1時間）'], C.blue)],
      },
      {
        note: '❓では、1か月後の同じ時刻にずれるのはなぜ？→ 地球が太陽のまわりを回っている（公転）からです。1年（365日）で360度回るので、1日に約1度、1か月（30日）で約30度進みます。',
        add: [...fresh(), ci(160, 70, 50, undefined, C.gray, 'rgba(0,0,0,0)'), ci(160, 70, 14, '太陽', C.red, '#FDBA74', 8), sc(160, 70, 50, 150, 180, C.red, RA), orbitC(Ea[0], Ea[1]), orbitC(Eb[0], Eb[1]), lb(Ea[0] - 6, Ea[1] - 12, 'いま', 10, C.blue, 'middle', true), lb(Eb[0] - 26, Eb[1] + 4, '1か月後', 10, C.blue, 'middle', true), ...bl(['公転：1年で360度 → 1日に約1度', '1か月（30日）で 約30度'], C.red)],
      },
      {
        note: '❓30度のずれは、時刻にするとどれくらい？→ 自転は1時間で15度なので、1度は60÷15＝4分です。星が南にくる時刻は、1日に約4分早くなります。30日では 4×30＝120分＝2時間早くなります。',
        add: [...fresh(), bx(20, 26, 280, 40, '1日で約1度 → 星は 約4分 早く南にくる', C.blue, FILL.blue, 12), bx(20, 80, 280, 40, '30日で 4分×30 ＝ 120分 ＝ 2時間 早くなる', C.purple, FILL.purple, 12), ...bl(['1度 ＝ 60÷15 ＝ 4分', '（1か月で 2時間 早く南にくる）'], C.purple)],
      },
      {
        note: '❓では8時には、どこに見える？→ 星は2時間早く南にきていたので、8時にはもう2時間ぶん、つまり30度、西へ進んでいます。',
        add: [...fresh(), ...skyPath(), ...orion(p90[0], p90[1], C.gray), lb(p90[0], p90[1] + 28, '1か月前の位置', 9, C.gray), ...orion(p60[0], p60[1], C.red), ar(p90[0] + 18, p90[1] + 2, p60[0] - 18, p60[1] - 2, C.red), lb(p60[0] + 6, p60[1] + 28, '今の位置', 10, C.red, 'middle', true), ...bl(['2時間（30度）ぶん 西へ進んでいる', '→ 西寄りに見える'], C.red)],
      },
      {
        note: '答えは、西寄りに見える。星座は1か月に約30度ずつ、西へずれて見えます。',
        add: band(150, bx(50, 158, 220, 32, '答え 西寄りに見える', C.green, FILL.green, 16), lb(160, 210, '1か月に 約30度ずつ 西へ', 12, C.gray), lb(160, 228, '（2か月後は 約60度）', 11, C.gray)),
      },
      {
        note: '❓確かめ：半年たつとどうなる？→ 半年で約180度、時刻にすると12時間早くなります。午後8時に南にあった星座は、半年後には12時間早い午前8時ごろに南にくるので、夜は見えなくなります。季節によって見える星座がかわるのは、このためです。',
        add: band(150, lb(160, 170, '半年後：180度 ＝ 12時間', 12, C.purple, 'middle', true), lb(160, 194, '南にくるのは 午前8時ごろ', 12, C.ink), lb(160, 214, '→ 夜には見えない（季節で星座がかわる）', 11, C.gray)),
      },
    ],
    '公転で1日約1度、1か月で約30度（2時間ぶん）西へ',
  );
};

// ── 地層 ──
const seaBase = (): El[] => [bx(10, 40, 80, 70, undefined, C.green, FILL.green), bx(90, 40, 220, 70, undefined, C.blue, FILL.blue), lb(50, 28, '陸', 11, C.green, 'middle', true), lb(90, 28, '河口', 10, C.ink, 'middle', true), lb(270, 28, '沖合', 10, C.ink, 'middle', true)];
const dotsAt = (xs: number[], y: number, r: number, color: string, fill: string): El[] => xs.map((x) => ci(x, y, r, undefined, color, fill));
const sediment = (): Figure =>
  show(
    [
      {
        note: '地層で、れきは河口や海岸に近い所、どろは河口から遠い沖合に積もりやすくなります。❓それはなぜでしょう。',
        add: [...seaBase(), ar(20, 60, 85, 60, C.blue), lb(50, 50, '川', 10, C.blue, 'middle', true), ...bl(['河口の近くに れき、沖合に どろ', 'その理由は？'], C.main, 13)],
      },
      {
        note: '❓川の水が海に出ると、流れはどうなる？→ 川がひろがって、流れがおそくなります。流れが弱くなると、粒を運ぶ力も弱くなります。',
        add: [ar(20, 75, 82, 75, C.blue), ar(100, 75, 142, 75, C.blue), ar(152, 75, 172, 75, C.blue), lb(50, 92, '速い', 10, C.blue), lb(122, 92, 'おそい', 10, C.blue), lb(162, 92, 'もっと', 9, C.blue), ...bl(['海に出ると 流れがおそくなる', '→ 粒を運ぶ力が弱くなる'], C.blue)],
      },
      {
        note: '❓れきはどうなる？→ れきは大きくて重いので、流れが少し弱くなっただけで運べなくなり、すぐしずみます。だから河口の近くに積もります。',
        add: [...fresh(), ...seaBase(), ci(100, 52, 5, undefined, C.main, FILL.warm), ci(118, 64, 5, undefined, C.main, FILL.warm), ar(108, 70, 108, 92, C.red), ...dotsAt([100, 110, 120, 130], 104, 5, C.main, FILL.warm), lb(115, 122, 'れき', 11, C.main, 'middle', true), ...bl(['れき（大きくて重い）', '→ すぐしずむ → 河口の近く'], C.main)],
      },
      {
        note: '❓砂は？→ 砂は中くらいの大きさで、れきよりもう少し先まで運ばれてからしずみます。',
        add: [...dotsAt([150, 160, 170, 180, 190, 200], 107, 3, C.gray, '#FDE68A'), ar(150, 80, 150, 98, C.red), lb(175, 122, '砂', 11, C.gray, 'middle', true), ...bl(['砂（中くらい）', '→ もう少し先で しずむ'], C.gray)],
      },
      {
        note: '❓どろは？→ どろは小さくて軽いので、ゆっくりしずみます。しずむあいだにも流れに運ばれて、遠くまで行きます。だから沖合に積もります。',
        add: [...dotsAt([232, 240, 248, 256, 264, 272, 280, 288, 296], 108, 1.6, C.gray, '#9CA3AF'), ar(238, 70, 252, 98, C.red), lb(265, 122, 'どろ', 11, C.gray, 'middle', true), ...bl(['どろ（小さくて軽い）', '→ ゆっくりしずむ → 遠くの沖合'], C.gray)],
      },
      {
        note: '❓積もりつづけると？→ 河口から遠くなるほど、積もる粒が小さくなります。れき→砂→どろの順に、ならんで積もります。',
        add: [cover(90, 114, 230, 30), bx(90, 114, 60, 22, 'れき', C.main, FILL.warm, 11), bx(150, 114, 80, 22, '砂', C.gray, '#FEF9C3', 11), bx(230, 114, 80, 22, 'どろ', C.gray, FILL.gray, 11), ...bl(['河口から遠いほど 粒が小さい', 'れき → 砂 → どろ'], C.green)],
      },
      {
        note: '答えは「粒が大きく重いものほど早く沈み、粒が小さく軽いものほど遠くまで運ばれるから」。注意：どろは水にとけるわけではなく、小さい粒もいずれしずみます（時間がかかるだけです）。',
        add: band(150, lb(160, 168, '答え', 12, C.green, 'middle', true), bx(10, 176, 300, 40, '大きく重い粒ほど早くしずみ\n小さく軽い粒ほど 遠くまで運ばれる', C.green, FILL.green, 11), lb(160, 232, 'どろが水にとけるのではない', 10, C.red)),
      },
    ],
    '大きい粒ほど早くしずむ → れき・砂・どろの順',
  );

const taisekigan = (): Figure =>
  show(
    [
      {
        note: 'れき・砂・どろが、川の流れで運ばれ、海底などに積もり、長い年月をかけて固まってできた岩石を何というでしょう。',
        add: [...seaBase(), ar(20, 60, 85, 60, C.blue), ...dotsAt([30, 45, 60], 70, 2.5, C.main, FILL.warm), ...bl(['れき・砂・どろ が 固まった岩石は？'], C.main, 13)],
      },
      {
        note: '❓土砂はなぜ海へ運ばれる？→ 雨水や川の流れが、山や土地をけずり（しん食）、けずった土砂を下流へ運ぶ（運ぱん）からです。',
        add: [...fresh(), pg([[10, 100], [10, 40], [120, 100]], C.green, FILL.green), ar(60, 70, 150, 92, C.blue), ...dotsAt([80, 100, 125], 86, 2.5, C.main, FILL.warm), lb(200, 70, '雨水・川の流れが', 11, C.blue, 'start'), lb(200, 88, 'けずって 運ぶ', 11, C.blue, 'start', true), ...bl(['しん食：けずる　運ぱん：運ぶ'], C.blue)],
      },
      {
        note: '❓運ばれた土砂はどうなる？→ 流れがおそくなる河口や海底で、重い粒から順に積もります（たい積）。積もるたびに、層になります。',
        add: [...fresh(), bx(40, 40, 240, 22, undefined, C.blue, FILL.blue), bx(40, 62, 240, 14, 'どろ', C.gray, FILL.gray, 10), bx(40, 76, 240, 14, '砂', C.gray, '#FEF9C3', 10), bx(40, 90, 240, 14, 'れき', C.main, FILL.warm, 10), ar(160, 20, 160, 58, C.red), lb(160, 122, '積もる ＝ たい積（つもる）', 12, C.ink, 'middle', true), ...bl(['流れがおそくなる所で 積もる', '→ 層になる'], C.blue)],
      },
      {
        note: '❓積もりつづけると？→ 上に新しい層がどんどん重なり、その重みで下の層がおし固められます。何万年もかかって、粒のあいだがつまって固まります。',
        add: [...Array.from({ length: 3 }, (_, i) => ar(100 + i * 60, 24, 100 + i * 60, 50, C.red)), lb(160, 16, '上の層の おもさ', 11, C.red, 'middle', true), bx(40, 54, 240, 14, undefined, C.gray, FILL.gray), bx(40, 68, 240, 14, undefined, C.gray, '#FEF9C3'), bx(40, 82, 240, 14, undefined, C.main, FILL.warm), bx(40, 96, 240, 14, undefined, C.gray, FILL.gray), ...bl(['上の重みで おし固められる', '（長い年月）'], C.red)],
      },
      {
        note: '❓できた岩石の名前は？→ 積もって固まった岩石を、たい積岩といいます。もとになった粒の大きさで、れき岩・砂岩・でい岩とよび分けます。',
        add: [...fresh(), bx(20, 40, 86, 44, 'れき岩\n（れき）', C.main, FILL.warm, 12), bx(117, 40, 86, 44, '砂岩\n（砂）', C.gray, '#FEF9C3', 12), bx(214, 40, 86, 44, 'でい岩\n（どろ）', C.gray, FILL.gray, 12), ...bl(['たい積岩 ＝ 積もって固まった岩石', '（もとの粒の大きさで 名前がかわる）'], C.green)],
      },
      {
        note: '❓火成岩とはどうちがう？→ つくられ方がちがいます。たい積岩は積もって固まったもので、粒がまるく、化石をふくむことがあります。火成岩はマグマが冷えて固まったものです。',
        add: [...fresh(), bx(15, 30, 140, 84, 'たい積岩\n積もって固まる\n粒が まるい\n化石をふくむことも', C.green, FILL.green, 11), bx(165, 30, 140, 84, '火成岩\nマグマが冷えて固まる\n火山のはたらき\n化石は ふつうない', C.red, FILL.red, 11), ...bl(['つくられ方が ちがう'], C.ink, 13)],
      },
      {
        note: '答えはたい積岩。注意：石灰岩だけがたい積岩なのではありません。石灰岩も、生物の死がいなどが積もって固まったたい積岩の1つです。',
        add: band(150, bx(70, 158, 180, 32, '答え たい積岩', C.green, FILL.green, 16), lb(160, 210, '石灰岩も たい積岩の1つ', 12, C.gray), lb(160, 228, '（石灰岩だけ ではない）', 11, C.red)),
      },
    ],
    'たい積岩：れき・砂・どろが積もって固まった岩石',
  );

// ── 地震の波 ──
const quakeP = (): Figure => {
  const zig = (x0: number, x1: number, amp: number, step: number, y = 75, color: string = C.ink): El[] => {
    const out: El[] = [];
    let x = x0, up = true;
    while (x + step <= x1) {
      out.push(ln(x, y + (up ? -amp : amp), x + step, y + (up ? amp : -amp), color, false, 1.4));
      x += step;
      up = !up;
    }
    return out;
  };
  return show(
    [
      {
        note: '地震が起きると、ゆれが波になって伝わります。❓最初の小さなゆれ（初期微動）を伝える、速いほうの波を何というでしょう。',
        add: [ln(30, 75, 288, 75, C.gray, false, 1.5), ci(30, 75, 8, undefined, C.red, FILL.red), lb(30, 96, '震源', 11, C.red, 'middle', true), pg([[288, 62], [280, 78], [296, 78]], C.ink, FILL.gray), lb(288, 96, '観測点', 11, C.ink, 'middle', true), ...bl(['震源から 観測点に ゆれが伝わる', '初期微動を伝える 速い波は？'], C.main, 13)],
      },
      {
        note: '❓波は1種類だけ？→ いいえ、2種類あります。震源から、P波とS波が同時に出発します。',
        add: [...fresh(), ci(30, 75, 8, undefined, C.red, FILL.red), lb(30, 96, '震源', 11, C.red, 'middle', true), bx(50, 50, 50, 22, 'P波', C.green, FILL.green, 12), bx(50, 80, 50, 22, 'S波', C.blue, FILL.blue, 12), ...bl(['震源から P波とS波が', '同時に出発する'], C.ink)],
      },
      {
        note: '❓2つの波は同じ速さ？→ ちがいます。たとえば、P波は1秒に7km、S波は1秒に4km進みます。2秒たつと、P波は14km、S波は8kmです。P波のほうが速いのです。',
        add: [...fresh(), ci(30, 75, 8, undefined, C.red, FILL.red), lb(30, 96, '震源', 11, C.red, 'middle', true), ar(40, 50, 40 + 14 * 4.6, 50, C.green), lb(40 + 14 * 4.6 + 6, 50, 'P波 14km', 11, C.green, 'start', true), ar(40, 80, 40 + 8 * 4.6, 80, C.blue), lb(40 + 8 * 4.6 + 6, 80, 'S波 8km', 11, C.blue, 'start', true), ...bl(['2秒後：P波 14km、S波 8km', 'P波のほうが 速い'], C.ink)],
      },
      {
        note: '❓観測点までの距離が56kmだと、いつ着く？→ P波は56÷7＝8秒、S波は56÷4＝14秒で着きます。6秒の差ができます。',
        add: [...fresh(), bx(50, 40, 120, 26, 'P波 8秒', C.green, FILL.green, 13), bx(50, 84, 210, 26, 'S波 14秒', C.blue, FILL.blue, 13), lb(215, 62, '← 6秒の差 →', 10, C.red, 'middle', true), lb(30, 56, '出発', 10, C.gray), ...bl(['P波：56÷7 ＝ 8秒　S波：56÷4 ＝ 14秒', 'P波が 6秒 先に着く'], C.ink, 12)],
      },
      {
        note: '❓それぞれの波は、どんなゆれを起こす？→ 先に着くP波は小さなゆれ（初期微動）、あとから着くS波は大きなゆれ（主要動）を起こします。',
        add: [...fresh(), ln(20, 75, 170, 75, C.ink, false, 1.4), ...zig(170, 260, 4, 10), ...zig(260, 305, 24, 10, 75, C.blue), ln(170, 40, 170, 110, C.green, true), ln(260, 40, 260, 110, C.blue, true), lb(215, 104, '初期微動(P波)', 10, C.green, 'middle', true), lb(282, 36, '主要動(S波)', 10, C.blue, 'middle', true), ar(20, 126, 305, 126, C.gray), lb(160, 138, '時間', 10, C.gray), ...bl(['先に小さなゆれ（P波）', 'あとから大きなゆれ（S波）'], C.ink)],
      },
      {
        note: '答えはP波。P波は「はじめの波」、S波は「2番目の波」と覚えましょう。速いP波が先に着いて、初期微動を起こします。',
        add: band(150, bx(70, 158, 180, 32, '答え P波', C.green, FILL.green, 16), lb(160, 210, 'P波＝はじめの波（速い）', 12, C.gray), lb(160, 228, 'S波＝2番目の波（おそい）', 12, C.gray)),
      },
      {
        note: '❓確かめ：震源から遠くなると？→ 距離が2倍の112kmなら、P波は16秒、S波は28秒で着き、差は12秒。距離が2倍になると差も2倍で、初期微動が続く時間は、遠いほど長くなります。',
        add: [...fresh(), bx(50, 40, 120, 26, 'P波 16秒', C.green, FILL.green, 13), bx(50, 84, 210, 26, 'S波 28秒', C.blue, FILL.blue, 13), lb(215, 62, '← 12秒の差 →', 10, C.red, 'middle', true), ...bl(['112km：P波 16秒、S波 28秒', '遠いほど 初期微動が長くつづく'], C.ink)],
      },
    ],
    'P波は速く先に着き、初期微動を起こす',
  );
};

export const figuresSchoolChugaku05: Record<string, Figure> = {
  josejogakuen_sansu_014: rectMinusCircle(),
  josejogakuen_sansu_018: simTri(),
  josejogakuen_rika_006: moonEvening(),
  josejogakuen_rika_007: taisekigan(),
  josejogakuen_rika_009: orionSky(),
  josejogakuen_rika_016: leverBig(),
  josejogakuen_rika_017: spring35(),
  josejogakuen_rika_018: circuitOff(),
  josejogakuen_rika_020: leverBalance(),
  naniwa_sansu_002: disc(2),
  naniwa_sansu_003: rectArea(6, 9, 14, 54),
  naniwa_sansu_009: boxVol(4, 5, 6, 120),
  naniwa_sansu_012: tsuru(1560, 9),
  naniwa_sansu_015: river(),
  naniwa_sansu_016: simTri(),
  naniwa_sansu_020: ring(),
  naniwa_rika_008: spring30(),
  naniwa_rika_010: sediment(),
  naniwa_rika_011: circuitBright(),
  naniwa_rika_014: moonAlign(),
  naniwa_rika_018: quakeP(),
  naniwa_rika_019: circuitThree(),
  otemon_sansu_002: disc(3),
  otemon_sansu_003: rectArea(8, 12, 11, 96),
  otemon_sansu_007: ratioMoney(),
  otemon_sansu_009: circleBasic(),
  otemon_sansu_011: tsuru(1520, 8),
  otemon_sansu_013: boxVol(5, 8, 6, 240),
  otemon_sansu_016: petals(),
  otemon_sansu_018: oddTiles(),
  otemon_sansu_020: tank(),
};
