// 高校受験 理科（formulas-koko-rika.ts の以前からある項目）79番目〜90番目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。「なぜ？」の連鎖で、根っこまでたどる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, sc, show, band, fresh, flow } from './diagram-kit';

const BY = 152; // 下の帯の開始位置
type E = DiagramElement;
/** 下の帯に、式やひとことを1つ出す。 */
const say = (text: string, color: string = C.blue, fill: string = FILL.blue, size = 13, y = 166, h = 40): E[] =>
  band(BY, bx(16, y, 288, h, text, color, fill, size));
const cloud = (cx: number, cy: number, s = 1): E[] => [
  ci(cx - 10 * s, cy + 3 * s, 9 * s, undefined, C.gray, FILL.gray),
  ci(cx + 10 * s, cy + 3 * s, 9 * s, undefined, C.gray, FILL.gray),
  ci(cx, cy - 4 * s, 11 * s, undefined, C.gray, FILL.gray),
];

// ══ 露点と飽和水蒸気量 ══
const G = 140; // 容器の底
/** 空気の容器。cap＝入る限度の高さ、water＝いまの水蒸気の高さ（1g＝10px） */
const tank = (x: number, w: number, cap: number, water: number, capText?: string): E[] => [
  bx(x, G - cap, w, cap, undefined, C.gray, FILL.gray),
  ...(water > 0 ? [bx(x, G - water, w, water, undefined, C.blue, FILL.blue)] : []),
  ...(capText ? [lb(x + w / 2, G - cap - 8, capText, 10, C.gray, 'middle', true)] : []),
];
const routen: DiagramFigure = show([
  {
    note: '空気1m³（立方メートル）には、水蒸気をふくめる量に限りがあります。この限度を「飽和水蒸気量」といいます。❓では、空気を冷やすと何が起こるのでしょう。',
    add: [...tank(110, 100, 94, 50, '限度（飽和水蒸気量）'), lb(160, 118, '水蒸気', 12, C.blue, 'middle', true), ...say('空気には水蒸気をふくめる限度がある', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ冷やすと水滴ができるのでしょう。温度が下がると、空気がふくめる限度が小さくなるからです。10℃では9.4gまで入りますが、5℃では6.8gしか入りません。',
    add: fresh(...tank(40, 90, 94, 94, '10℃の限度 9.4g'), ...tank(190, 90, 68, 68), lb(235, 38, '5℃の限度 6.8g', 10, C.gray, 'middle', true), bx(190, 46, 90, 26, undefined, C.red, FILL.red), ar(136, 92, 184, 100, C.blue), lb(85, 118, 'いっぱい', 12, C.blue, 'middle', true), ...say('温度が下がる → 入る限度が小さくなる', C.blue, FILL.blue)),
  },
  {
    note: '❓では、いま入っている量が限度とちょうど同じになる温度は何でしょう。空気を冷やしていって、水蒸気がちょうど限度いっぱいになり、水滴ができ始める温度を「露点（ろてん）」といいます。',
    add: fresh(...flow(['温度を\n下げる', '限度が\n小さくなる', '限度＝\nいまの量'], 30, { h: 56, size: 12, gap: 20 }).flat(), bx(70, 106, 180, 30, '水滴ができ始める温度＝露点', C.red, FILL.red, 13), ...say('露点では、湿度はちょうど100%', C.red, FILL.red)),
  },
  {
    note: '❓では、露点が分かると何が分かるのでしょう。露点では「限度＝いまの水蒸気の量」なので、露点の飽和水蒸気量を表で見れば、いま空気にふくまれている水蒸気の量がそのまま分かります。',
    add: fresh(...tank(30, 90, 94, 94, '露点10℃の限度 9.4g'), ar(126, 94, 184, 94, C.red), bx(190, 60, 116, 66, 'いまの水蒸気量\n＝ 9.4g/m³', C.red, FILL.red, 13), ...say('露点の飽和水蒸気量 ＝ いまの水蒸気の量', C.red, FILL.red)),
  },
  {
    note: '❓露点が高い空気は、なぜ水蒸気を多くふくむのでしょう。限度は温度が高いほど大きいからです。高い温度まで冷やさないと水蒸気があふれないということは、それだけたくさん入っているということです。',
    add: fresh(bx(40, 30, 90, 104, undefined, C.gray, FILL.gray), bx(190, 30, 90, 104, undefined, C.gray, FILL.gray), bx(40, 40, 90, 94, undefined, C.blue, FILL.blue), bx(190, 66, 90, 68, undefined, C.blue, FILL.blue), lb(85, 20, '露点10℃', 12, C.ink, 'middle', true), lb(235, 20, '露点5℃', 12, C.ink, 'middle', true), lb(85, 90, '9.4g', 15, C.blue, 'middle', true), lb(235, 100, '6.8g', 15, C.blue, 'middle', true), ...say('露点が高い空気ほど、水蒸気が多い', C.blue, FILL.blue)),
  },
  {
    note: '例題です。露点が10℃の空気を5℃まで冷やします。10℃の限度9.4gぶんの水蒸気が入っていますが、5℃では6.8gまでしか入りません。',
    add: fresh(...tank(40, 90, 94, 94, '10℃ 9.4g'), ...tank(190, 90, 68, 68), lb(235, 38, '5℃ 6.8g', 10, C.gray, 'middle', true), bx(190, 46, 90, 26, '出る水滴', C.red, FILL.red, 11), ar(136, 92, 184, 100, C.blue), ...say('9.4gあるのに、5℃では6.8gしか入らない', C.ink, FILL.yellow)),
  },
  {
    note: '❓出てくる水滴の量は、なぜ「引き算」で求まるのでしょう。入りきらなかった分が水滴になるからです。もとの量から、冷やした温度に入れる量を引けば、あふれた量になります。',
    add: fresh(bx(10, 40, 80, 50, '9.4g\nいまの量', C.blue, FILL.blue, 13), lb(102, 65, '−', 24, C.ink, 'middle', true), bx(116, 40, 80, 50, '6.8g\n5℃の限度', C.gray, FILL.gray, 13), lb(208, 65, '＝', 24, C.ink, 'middle', true), bx(222, 40, 88, 50, '2.6g\n水滴', C.red, FILL.red, 13), ...say('9.4 − 6.8 ＝ 2.6g/m³ が水滴になる', C.red, FILL.red)),
  },
  {
    note: '実験で露点を調べます。金属のコップに水を入れ、氷水を少しずつ加えて冷やします。コップの表面がくもり始めたときの水温が露点です。❓なぜくもるのでしょう。コップにふれた空気が冷やされて露点に達し、水蒸気が水滴になるからです。',
    add: fresh(bx(100, 44, 120, 84, '金属のコップ\n水＋氷', C.blue, FILL.blue, 12), ...[[108, 60], [212, 76], [106, 96], [214, 108], [110, 118]].map(([x, y]) => ci(x, y, 3, undefined, C.blue, '#FFFFFF')), ln(200, 8, 200, 90, C.red, false, 2), lb(210, 20, '温度計', 11, C.red, 'start', true), ...say('くもり始めの水温 ＝ 露点', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜ金属のコップを使うのでしょう。金属は熱が伝わりやすいので、コップの表面の温度と中の水温がすぐそろうからです。ガラスやプラスチックでは、表面の温度が水温とずれてしまいます。',
    add: fresh(bx(20, 34, 130, 70, '金属\n熱がすぐ伝わる\n表面 ＝ 水温', C.green, FILL.green, 12), bx(170, 34, 130, 70, 'ガラス・プラスチック\n熱が伝わりにくい\n表面 ≠ 水温', C.red, FILL.red, 12), lb(85, 124, '○', 20, C.green, 'middle', true), lb(235, 124, '×', 20, C.red, 'middle', true), ...say('水温を、そのまま空気が冷やされた温度として使える', C.green, FILL.green, 12)),
  },
  {
    note: '❓露点と湿度にはどんな関係があるのでしょう。気温が露点と同じなら、限度いっぱいなので湿度は100%です。気温が上がると限度が大きくなるので、水蒸気の量が同じなら湿度は下がります。',
    add: fresh(bx(20, 24, 130, 50, '気温＝露点\n湿度100%', C.blue, FILL.blue, 13), ar(154, 49, 166, 49, C.gray), bx(170, 24, 130, 50, '気温が上がる\n限度が大きくなる', C.red, FILL.red, 12), ar(235, 76, 235, 96, C.gray), bx(170, 98, 130, 34, '湿度は下がる', C.green, FILL.green, 13), ...say('水蒸気の量が同じでも、気温が上がると湿度は下がる', C.ink, FILL.yellow, 12)),
  },
  {
    note: 'まとめです。露点は水滴ができ始める温度で、そこでの飽和水蒸気量がいまの水蒸気量です。出てくる水滴の量は、引き算で求めます。',
    add: fresh(bx(20, 14, 280, 28, '露点 ＝ 水滴ができ始める温度', C.red, FILL.red, 13), bx(20, 48, 280, 28, '露点の飽和水蒸気量 ＝ いまの水蒸気量', C.blue, FILL.blue, 13), bx(20, 82, 280, 28, '水滴 ＝ いまの量 − 冷やした温度の限度', C.green, FILL.green, 13), bx(20, 116, 280, 28, '金属のコップ → 水温＝表面の温度', C.main, FILL.warm, 13)),
  },
]);

// ══ 雲のでき方と上昇気流 ══
const grd = (): E[] => [ln(10, 140, 310, 140, C.ink, false, 2)];
const rise = (y: number, r: number, col: string = C.blue, fill: string = FILL.blue): E[] => [ci(110, y, r, undefined, col, fill)];
const kumo: DiagramFigure = show([
  {
    note: '雲ができるまでを、5つの段階で追います。上昇 → 気圧が下がる → ふくらむ → 温度が下がる → 露点に達して雲。❓では、それぞれの段階は、なぜそうなるのでしょう。',
    add: [...flow(['空気が\n上昇', '気圧が\n下がる', 'ふくら\nむ', '温度が\n下がる', '露点で\n雲'], 34, { h: 64, size: 11, gap: 10, pad: 8 }).flat(), ...say('この5段階の順番を言えるようにする', C.ink, FILL.yellow)],
  },
  {
    note: '❓そもそも、空気はなぜ上昇するのでしょう。原因は4つあります。地表があたためられる、山にぶつかる、前線で持ち上げられる、低気圧の中心に風が集まる、です。',
    add: fresh(bx(10, 20, 148, 50, '地表が\nあたためられる', C.red, FILL.red, 12), bx(162, 20, 148, 50, '山に\nぶつかる', C.green, FILL.green, 12), bx(10, 82, 148, 50, '前線で\n持ち上げられる', C.blue, FILL.blue, 12), bx(162, 82, 148, 50, '低気圧の中心に\n風が集まる', C.purple, FILL.purple, 12), ...say('どれも、空気が上へ向かう理由になる', C.ink, FILL.yellow)),
  },
  {
    note: '❓空気が上昇すると、なぜ気圧が下がるのでしょう。気圧は、上にのっている空気の重さで決まります。高いところほど、上にのっている空気が少ないので、気圧が低くなります。',
    add: fresh(...grd(), ...rise(120, 10), ar(110, 100, 110, 64, C.red), ...rise(50, 10), bx(200, 22, 100, 34, '上の空気\n少ない → 低い', C.blue, FILL.blue, 11), bx(200, 96, 100, 34, '上の空気\n多い → 高い', C.gray, FILL.gray, 11), ...say('高いところほど気圧が低い', C.blue, FILL.blue)),
  },
  {
    note: '❓気圧が低いと、なぜふくらむのでしょう。まわりから押しちぢめる力が弱くなるので、空気は内側から広がるからです。風船を高い山に持っていくとふくらむのと同じです。',
    add: fresh(...grd(), ...rise(120, 10), ar(140, 110, 190, 90, C.red), ...rise(70, 26), lb(110, 70, 'ふくらむ', 10, C.blue, 'middle', true), lb(230, 62, 'まわりの気圧が低い\n押す力が弱い', 11, C.gray, 'middle'), ...say('気圧が低い → 押しちぢめる力が弱い → ふくらむ', C.blue, FILL.blue, 12)),
  },
  {
    note: '❓ふくらむと、なぜ温度が下がるのでしょう。空気はふくらむとき、まわりの空気を押しのけます。そのぶんの熱を使うので、空気自身の温度が下がります。',
    add: fresh(bx(20, 30, 100, 60, 'ふくらむ', C.blue, FILL.blue, 14), ar(122, 60, 158, 60, C.red), bx(162, 30, 140, 60, 'まわりを押しのける\nぶん、熱を使う', C.red, FILL.red, 12), ar(232, 92, 232, 116, C.red), bx(162, 118, 140, 28, '温度が下がる', C.blue, FILL.blue, 13), ...say('ふくらむ → 空気の温度が下がる', C.red, FILL.red)),
  },
  {
    note: '❓温度が下がると、なぜ水滴ができるのでしょう。温度が下がると、空気がふくめる水蒸気の限度が小さくなります。露点まで下がると、ふくみきれなくなった水蒸気があふれます。',
    add: fresh(bx(20, 28, 120, 40, '温度が下がる', C.blue, FILL.blue, 13), ar(142, 48, 178, 48, C.gray), bx(180, 28, 120, 40, '限度が小さくなる', C.blue, FILL.blue, 13), ar(240, 70, 240, 90, C.gray), bx(150, 92, 150, 40, '露点に達する\nあふれた水蒸気が水滴に', C.red, FILL.red, 11), ...cloud(70, 110, 1.4), ...say('露点に達して、水蒸気が水のつぶになる', C.red, FILL.red)),
  },
  {
    note: '❓では、雲は何でできているのでしょう。この小さな水滴が、たくさん集まったものです。上昇気流のあるところで水滴がつくられ続けるので、そこに雲が育ちます。',
    add: fresh(...grd(), ...[[90, 50], [130, 40], [170, 52], [210, 44], [110, 70], [150, 66], [190, 72], [130, 92], [170, 96]].map(([x, y]) => ci(x, y, 8, undefined, C.blue, FILL.blue)), ...[[100, 110], [160, 116], [220, 108]].map(([x, y]) => ar(x, y, x, y - 22, C.red)), lb(160, 20, '水滴が集まって雲', 12, C.ink, 'middle', true), ...say('上昇気流のあるところに、雲ができる', C.blue, FILL.blue)),
  },
  {
    note: '字が似ている「凝結」と「凝固」を区別します。凝結は気体 → 液体で、水蒸気が水滴になる変化です。雲や露がこれです。凝固は液体 → 固体で、水が氷になる変化です。',
    add: fresh(bx(10, 28, 96, 40, '水蒸気\n（気体）', C.blue, FILL.blue, 12), ar(108, 48, 132, 48, C.red), bx(134, 28, 80, 40, '水滴\n（液体）', C.blue, FILL.blue, 12), lb(122, 22, '凝結', 12, C.red, 'middle', true), bx(10, 88, 96, 40, '水\n（液体）', C.blue, FILL.blue, 12), ar(108, 108, 132, 108, C.purple), bx(134, 88, 80, 40, '氷\n（固体）', C.gray, FILL.gray, 12), lb(122, 82, '凝固', 12, C.purple, 'middle', true), lb(268, 48, '雲・露', 13, C.red, 'middle', true), ...say('結ぶ＝水滴が結ぶ、固＝固まる', C.ink, FILL.yellow)),
  },
  {
    note: '❓低気圧の中心付近は、なぜ天気が悪いのでしょう。まわりから風が集まって行き場がなくなり、上昇気流になるからです。上昇すれば雲ができます。逆に高気圧では下降気流になり、雲ができにくく晴れます。',
    add: fresh(...cloud(85, 24, 0.9), bx(20, 50, 130, 26, '低気圧', C.red, FILL.red, 14), ar(40, 106, 70, 86, C.gray), ar(130, 106, 100, 86, C.gray), ar(85, 88, 85, 80, C.red), bx(170, 50, 130, 26, '高気圧', C.blue, FILL.blue, 14), ar(235, 82, 235, 108, C.blue), ar(190, 122, 175, 122, C.gray), ar(280, 122, 295, 122, C.gray), lb(85, 128, '上昇気流 → くもり', 11, C.red, 'middle', true), lb(235, 138, '下降気流 → 晴れ', 11, C.blue, 'middle', true), ...say('低気圧＝上昇気流＝くもり／高気圧＝下降気流＝晴れ', C.ink, FILL.yellow, 12)),
  },
  {
    note: '記述問題の答え方です。「空気が上昇し、気圧が下がってふくらむ。ふくらむと温度が下がり、露点に達して水蒸気が水滴になる」。ここまでの「なぜ」を、この順に並べれば答えになります。',
    add: fresh(...flow(['上昇', '気圧\n低下', '膨張', '温度\n低下', '露点\n水滴'], 30, { h: 56, size: 11, gap: 10, pad: 8 }).flat(), lb(160, 116, '上昇 → 膨張 → 温度低下 → 露点 → 水滴', 12, C.ink, 'middle', true), ...say('順番と、それぞれの理由をセットで覚える', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめです。空気が上昇すると、気圧が下がってふくらみ、温度が下がって露点に達し、雲ができます。低気圧は上昇気流でくもり、高気圧は下降気流で晴れです。',
    add: fresh(bx(20, 14, 280, 28, '上昇 → 気圧が下がる → 膨張', C.blue, FILL.blue, 13), bx(20, 48, 280, 28, '膨張 → 温度が下がる → 露点で雲', C.red, FILL.red, 13), bx(20, 82, 280, 28, '凝結＝気体→液体、凝固＝液体→固体', C.purple, FILL.purple, 12), bx(20, 116, 280, 28, '低気圧＝くもり、高気圧＝晴れ', C.green, FILL.green, 13)),
  },
]);

// ══ 前線の通過と天気の変化 ══
const gr2 = (): E[] => [ln(10, 120, 310, 120, C.ink, false, 2)];
const coldSec = (): E[] => [
  pg([[10, 120], [170, 120], [125, 40], [10, 40]], C.blue, FILL.blue),
  pg([[125, 40], [170, 120], [310, 120], [310, 40]], C.red, FILL.red),
  lb(55, 84, '寒気', 14, C.blue, 'middle', true), lb(250, 84, '暖気', 14, C.red, 'middle', true),
];
const warmSec = (): E[] => [
  pg([[150, 120], [310, 120], [310, 45]], C.blue, FILL.blue),
  pg([[10, 120], [150, 120], [310, 45], [310, 24], [10, 24]], C.red, FILL.red),
  lb(70, 84, '暖気', 14, C.red, 'middle', true), lb(250, 108, '寒気', 13, C.blue, 'middle', true),
];
const tallCloud = (): E[] => [ci(168, 104, 11, undefined, C.gray, FILL.gray), ci(160, 84, 13, undefined, C.gray, FILL.gray), ci(148, 62, 14, undefined, C.gray, FILL.gray), ci(136, 44, 11, undefined, C.gray, FILL.gray)];
const zensen: DiagramFigure = show([
  {
    note: 'あたたかい空気（暖気）と冷たい空気（寒気）がぶつかる境目を「前線」といいます。❓前線では、なぜ天気が変わるのでしょう。重さのちがう2つの空気がぶつかると、どちらかが上に押し上げられるからです。',
    add: [bx(20, 30, 110, 60, '暖気\n軽い', C.red, FILL.red, 14), bx(190, 30, 110, 60, '寒気\n重い', C.blue, FILL.blue, 14), ar(134, 60, 184, 60, C.gray), ar(186, 68, 136, 68, C.gray), ...say('ぶつかる境目が前線。空気が持ち上げられる', C.ink, FILL.yellow)],
  },
  {
    note: '寒冷前線です。重い寒気が、暖気の下へもぐりこみます。暖気は急に上へ押し上げられます。❓すると、どんな雲ができるでしょう。',
    add: fresh(...coldSec(), ...gr2(), ar(28, 104, 92, 104, C.blue), ar(218, 96, 190, 44, C.red), ...say('寒気が暖気の下へもぐりこむ → 急に持ち上げる', C.blue, FILL.blue, 12)),
  },
  {
    note: '急に持ち上げられた暖気は、たてに高く発達した積乱雲になります。❓なぜせまい範囲で強い雨になるのでしょう。上昇が急で、前線の傾きが急なので、雲が細くて背が高くなり、短時間に大量の水滴ができるからです。',
    add: fresh(...coldSec(), ...gr2(), ...tallCloud(), lb(230, 30, '積乱雲', 13, C.gray, 'middle', true), ...[[150, 110], [166, 112], [182, 110]].map(([x, y]) => ln(x, y - 4, x - 3, y + 6, C.blue, false, 2)), ...say('せまい範囲に、短時間の強い雨', C.blue, FILL.blue)),
  },
  {
    note: '温暖前線です。暖気が、寒気の上にゆるやかにはい上がります。❓なぜゆるやかなのでしょう。暖気は軽いので、重い寒気を押しのけられず、その上に乗り上げるしかないからです。',
    add: fresh(...warmSec(), ...gr2(), ar(28, 108, 92, 102, C.red), ...say('軽い暖気が、寒気の上へゆっくり乗り上げる', C.red, FILL.red)),
  },
  {
    note: 'ゆるやかに上昇した暖気は、広い範囲に乱層雲をつくります。❓なぜ広い範囲で長くおだやかな雨になるのでしょう。上昇がゆるやかで、前線の傾きがゆるいので、雲が横に広がり、ゆっくり水滴ができ続けるからです。',
    add: fresh(...warmSec(), ...gr2(), bx(120, 30, 170, 18, '乱層雲（広く横にひろがる）', C.gray, FILL.gray, 10), ...[[190, 100], [220, 92], [250, 84], [280, 76]].map(([x, y]) => ln(x, y - 8, x - 3, y + 2, C.blue, false, 2)), ...say('広い範囲に、長時間のおだやかな雨', C.red, FILL.red)),
  },
  {
    note: '❓前線が通過すると、気温はなぜ変わるのでしょう。通過したあとは、そこにあった空気が入れかわるからです。寒冷前線のあとは寒気におおわれて気温が下がり、温暖前線のあとは暖気におおわれて気温が上がります。',
    add: fresh(bx(10, 22, 140, 44, '寒冷前線が通過\n寒気におおわれる', C.blue, FILL.blue, 12), bx(170, 22, 140, 44, '温暖前線が通過\n暖気におおわれる', C.red, FILL.red, 12), ar(80, 68, 80, 96, C.blue), ar(240, 96, 240, 68, C.red), bx(10, 98, 140, 30, '気温が下がる', C.blue, FILL.blue, 13), bx(170, 98, 140, 30, '気温が上がる', C.red, FILL.red, 13), ...say('通過後は、入ってきた空気の温度になる', C.ink, FILL.yellow)),
  },
  {
    note: '❓風向は、なぜ変わるのでしょう。前線をはさんで、暖気は南から、寒気は北から来るからです。寒冷前線が通過すると、南寄りの風から北寄りの風に変わります。',
    add: fresh(bx(20, 24, 130, 40, '通過前\n南寄りの風（暖気）', C.red, FILL.red, 11), bx(170, 24, 130, 40, '通過後\n北寄りの風（寒気）', C.blue, FILL.blue, 11), ar(85, 100, 85, 70, C.red), lb(85, 116, '南から', 12, C.red, 'middle', true), ar(235, 70, 235, 100, C.blue), lb(235, 116, '北から', 12, C.blue, 'middle', true), ...say('寒冷前線の通過 → 風向が南寄りから北寄りへ', C.blue, FILL.blue, 12)),
  },
  {
    note: 'グラフから前線の通過時刻を読み取ります。気温が急に下がり、風向が南寄りから北寄りに変わり、気圧も上がりはじめる、その時刻が寒冷前線の通過です。',
    add: fresh(ln(40, 20, 40, 120, C.ink), ln(40, 120, 300, 120, C.ink), lb(24, 24, '気温', 11, C.gray, 'middle', true), lb(300, 132, '時刻', 11, C.gray, 'end', true), ln(40, 40, 140, 44, C.red, false, 3), ln(140, 44, 165, 100, C.red, false, 3), ln(165, 100, 290, 104, C.red, false, 3), ln(165, 20, 165, 120, C.purple, true), lb(165, 14, '通過', 12, C.purple, 'middle', true), lb(80, 32, '暖気', 11, C.red), lb(240, 92, '寒気', 11, C.blue), ...say('気温が急に下がった時刻＝寒冷前線の通過', C.purple, FILL.purple)),
  },
  {
    note: '閉塞前線です。❓なぜできるのでしょう。寒冷前線のほうが進む速さが速く、温暖前線に追いついてしまうからです。追いついたあとは、暖気が地面から持ち上げられます。',
    add: fresh(...gr2(), bx(20, 60, 90, 44, '寒冷前線\n（速い）', C.blue, FILL.blue, 12), ar(114, 82, 168, 82, C.blue), bx(176, 60, 90, 44, '温暖前線\n（おそい）', C.red, FILL.red, 12), ar(270, 82, 300, 82, C.red), lb(160, 30, '追いつく → 閉塞前線', 14, C.purple, 'middle', true), ...say('寒冷前線が温暖前線に追いついたもの', C.purple, FILL.purple)),
  },
  {
    note: '停滞前線です。❓なぜほとんど動かないのでしょう。暖気と寒気の勢力がつり合って、どちらも押しきれないからです。梅雨前線や秋雨前線がこれで、雨が長く続きます。',
    add: fresh(bx(20, 34, 110, 60, '暖気', C.red, FILL.red, 16), bx(190, 34, 110, 60, '寒気', C.blue, FILL.blue, 16), ar(134, 58, 186, 58, C.red), ar(186, 72, 134, 72, C.blue), lb(160, 116, 'つり合って動かない', 13, C.ink, 'middle', true), ...say('梅雨前線・秋雨前線 ＝ 停滞前線', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめです。寒冷前線は積乱雲で短時間の強い雨、通過後は気温が下がります。温暖前線は乱層雲で長時間のおだやかな雨、通過後は気温が上がります。',
    add: fresh(bx(10, 12, 148, 26, '寒冷前線', C.blue, FILL.blue, 13), bx(162, 12, 148, 26, '温暖前線', C.red, FILL.red, 13), bx(10, 44, 148, 30, '積乱雲\n短時間の強い雨', C.blue, FILL.blue, 11), bx(162, 44, 148, 30, '乱層雲\n長時間のおだやかな雨', C.red, FILL.red, 11), bx(10, 80, 148, 30, '通過後 気温↓\n風は南→北寄り', C.blue, FILL.blue, 11), bx(162, 80, 148, 30, '通過後 気温↑', C.red, FILL.red, 11), lb(160, 128, '閉塞＝追いつく／停滞＝動かない', 12, C.purple, 'middle', true)),
  },
]);

// ══ 気圧配置と日本の四季 ══
const land = (): E[] => [
  bx(10, 24, 92, 66, undefined, C.gray, FILL.gray), bx(114, 24, 92, 66, undefined, C.green, FILL.green), bx(218, 24, 92, 66, undefined, C.blue, FILL.blue),
  lb(56, 34, '大陸（西）', 11, C.gray, 'middle', true), lb(160, 34, '日本', 11, C.green, 'middle', true), lb(264, 34, '太平洋（東）', 11, C.blue, 'middle', true),
];
const HL = (x: number, hi: boolean): E[] => [ci(x, 64, 18, hi ? '高' : '低', hi ? C.blue : C.red, hi ? FILL.blue : FILL.red, 16)];
const kiatsu: DiagramFigure = show([
  {
    note: '日本の四季は、季節ごとの気圧配置で決まります。冬は西高東低、夏は南高北低、春と秋は高気圧と低気圧が交互に来ます。❓それぞれ、なぜそうなるのでしょう。',
    add: [bx(10, 20, 96, 60, '冬\n西高東低', C.blue, FILL.blue, 14), bx(112, 20, 96, 60, '夏\n南高北低', C.red, FILL.red, 14), bx(214, 20, 96, 60, '春・秋\n移動性高気圧', C.green, FILL.green, 12), ...say('季節ごとの気圧配置と気団をセットで覚える', C.ink, FILL.yellow)],
  },
  {
    note: '冬は西高東低です。❓なぜ西が高気圧なのでしょう。大陸は冷えやすいので、冬には冷たく重い空気がたまり、西のシベリアに高気圧ができます。海は冷えにくいので、東の海上は気圧が低くなります。',
    add: fresh(...land(), ...HL(56, true), ...HL(264, false), lb(56, 108, 'シベリア気団\n冷たく乾燥', 10, C.blue, 'middle'), ...say('大陸が冷える → 重い空気 → 高気圧（西高東低）', C.blue, FILL.blue, 12)),
  },
  {
    note: '❓では、風はどちらに吹くのでしょう。風は気圧の高いほうから低いほうへ吹きます。西の高気圧から東の低気圧へ、日本には北西の季節風が吹きます。',
    add: fresh(...land(), ...HL(56, true), ...HL(264, false), ar(80, 112, 240, 112, C.blue), lb(160, 130, '北西の季節風', 14, C.blue, 'middle', true), ...say('風は、気圧の高いほうから低いほうへ', C.blue, FILL.blue)),
  },
  {
    note: '❓冬に日本海側で雪が多いのはなぜでしょう。乾いた冷たい風が、暖かい日本海の上で水蒸気をたくさん受け取ります。その湿った風が山にぶつかって上昇し、雲ができて雪を降らせるからです。',
    add: fresh(bx(10, 118, 300, 20, '日本海', C.blue, FILL.blue, 11), pg([[150, 118], [190, 40], [230, 118]], C.gray, FILL.gray), ar(20, 96, 110, 88, C.blue), lb(60, 76, '水蒸気を得る', 10, C.blue, 'middle', true), ar(120, 80, 170, 60, C.blue), ...cloud(158, 42, 0.9), ...[[130, 100], [146, 106], [162, 100]].map(([x, y]) => ci(x, y, 2.5, undefined, C.blue, '#FFFFFF')), lb(110, 30, '雪', 14, C.blue, 'middle', true), lb(270, 100, '山をこえて\n乾いた風', 11, C.gray, 'middle'), ...say('日本海側は雪、太平洋側は乾燥した晴れ', C.blue, FILL.blue)),
  },
  {
    note: '夏は南高北低です。❓なぜ冬と逆になるのでしょう。夏は大陸のほうが海より早くあたたまるので、大陸は上昇気流が起こって低気圧に、海上は相対的に高気圧になるからです。',
    add: fresh(...land(), ...HL(56, false), ...HL(264, true), lb(264, 108, '小笠原気団\nあたたかく湿潤', 10, C.red, 'middle'), ...say('大陸があたたまる → 上昇気流 → 低気圧', C.red, FILL.red)),
  },
  {
    note: '風は高いほうから低いほうへ吹くので、夏は太平洋の高気圧から大陸の低気圧へ、日本には南東の季節風が吹きます。あたたかく湿った風なので、蒸し暑い夏になります。',
    add: fresh(...land(), ...HL(56, false), ...HL(264, true), ar(240, 112, 80, 112, C.red), lb(160, 130, '南東の季節風', 14, C.red, 'middle', true), ...say('冬と夏で、季節風の向きが逆になる', C.red, FILL.red)),
  },
  {
    note: '梅雨です。❓なぜ長く雨が降るのでしょう。北の冷たくしめったオホーツク海気団と、南のあたたかくしめった小笠原気団がぶつかり、力がつり合って動かない停滞前線ができます。どちらもしめっているので、大量の雨が長く続きます。',
    add: fresh(bx(20, 30, 110, 60, 'オホーツク海気団\n冷たくしめる', C.blue, FILL.blue, 11), bx(190, 30, 110, 60, '小笠原気団\nあたたかくしめる', C.red, FILL.red, 11), ar(134, 52, 186, 52, C.blue), ar(186, 70, 134, 70, C.red), lb(160, 116, '停滞前線（梅雨前線）', 13, C.purple, 'middle', true), ...say('つり合って動かない → 長雨', C.purple, FILL.purple)),
  },
  {
    note: '春と秋は、移動性高気圧と低気圧が交互に西から来ます。❓なぜ西から来るのでしょう。日本の上空では、西から東へ風が吹いているので、高気圧や低気圧もその風に乗って東へ動くからです。',
    add: fresh(ar(20, 24, 290, 24, C.gray), lb(160, 14, '上空の西風', 11, C.gray, 'middle', true), ci(60, 78, 20, '高', C.blue, FILL.blue, 16), ci(130, 78, 20, '低', C.red, FILL.red, 16), ci(200, 78, 20, '高', C.blue, FILL.blue, 16), ci(270, 78, 20, '低', C.red, FILL.red, 16), lb(160, 116, '晴れ → 雨 → 晴れ → 雨', 13, C.ink, 'middle', true), ...say('高気圧と低気圧が交互に通り、天気が周期的に変わる', C.green, FILL.green, 12)),
  },
  {
    note: '台風です。❓なぜ前線をともなわないのでしょう。台風は熱帯低気圧が発達したもので、全体が同じあたたかい空気でできているからです。前線は、暖気と寒気の境目にできます。',
    add: fresh(ci(110, 70, 38, undefined, C.red, FILL.red), ci(110, 70, 8, undefined, C.gray, '#FFFFFF'), bx(170, 30, 130, 40, '全体が同じ\nあたたかい空気', C.red, FILL.red, 12), bx(170, 80, 130, 40, '暖気と寒気の境目\nがない → 前線なし', C.gray, FILL.gray, 11), ...say('台風は前線をともなわない（温帯低気圧は前線あり）', C.red, FILL.red, 12)),
  },
  {
    note: 'まとめです。冬は西高東低で北西の季節風、夏は南高北低で南東の季節風です。梅雨は停滞前線、春秋は移動性高気圧、台風は前線をともないません。',
    add: fresh(bx(20, 12, 280, 28, '冬：西高東低・シベリア気団・北西の風', C.blue, FILL.blue, 12), bx(20, 46, 280, 28, '夏：南高北低・小笠原気団・南東の風', C.red, FILL.red, 12), bx(20, 80, 280, 28, '梅雨：2つの気団がぶつかる停滞前線', C.purple, FILL.purple, 12), bx(20, 114, 280, 28, '春秋：移動性高気圧／台風：前線なし', C.green, FILL.green, 12)),
  },
]);

// ══ 大気の動きと海陸風 ══
const beach = (landFill: string = FILL.warm): E[] => [
  bx(10, 116, 150, 22, '海', C.blue, FILL.blue, 12), bx(160, 116, 150, 22, '陸', C.main, landFill, 12),
];
const kaigyo: DiagramFigure = show([
  {
    note: '海のそばでは、昼と夜で風の向きが変わります。昼は海から陸へ吹く海風、夜は陸から海へ吹く陸風です。❓なぜ向きが変わるのでしょう。',
    add: [...beach(), ar(80, 96, 240, 96, C.blue), ar(240, 66, 80, 66, C.gray, true), lb(160, 30, '昼と夜で、風の向きが変わる', 13, C.ink, 'middle', true), ...say('風の向きが変わるしくみを、順にたどる', C.ink, FILL.yellow)],
  },
  {
    note: '❓その理由の根っこは何でしょう。陸と海では、あたたまり方がちがいます。陸は温まりやすく冷めやすい、海は温まりにくく冷めにくいのです。',
    add: fresh(bx(20, 30, 130, 60, '陸\n温まりやすい\n冷めやすい', C.main, FILL.warm, 12), bx(170, 30, 130, 60, '海\n温まりにくい\n冷めにくい', C.blue, FILL.blue, 12), ...say('この差が、風を生むもとになる', C.ink, FILL.yellow)),
  },
  {
    note: '昼です。太陽の光で、陸のほうが早くあたたまります。❓あたたまった空気はどうなるでしょう。軽くなって、上へ昇っていきます。これが上昇気流です。',
    add: fresh(ci(270, 20, 12, undefined, C.main, FILL.yellow), ...beach(FILL.red), ar(235, 108, 235, 62, C.red), ar(205, 108, 205, 62, C.red), lb(220, 46, '上昇気流', 12, C.red, 'middle', true), lb(80, 90, 'ひんやり', 11, C.blue, 'middle'), ...say('陸があたたまる → 空気が軽くなって上昇', C.red, FILL.red)),
  },
  {
    note: '❓空気が上へ昇ると、陸の地面の近くの気圧はどうなるでしょう。地面の上にのる空気が減るので、気圧が下がります。海の上は、そのままなので、陸より気圧が高くなります。',
    add: fresh(...beach(FILL.red), ar(235, 108, 235, 62, C.red), bx(190, 26, 100, 26, '陸：気圧 低', C.red, FILL.red, 12), bx(30, 26, 100, 26, '海：気圧 高', C.blue, FILL.blue, 12), ...say('上昇して空気が減る → 陸の気圧が下がる', C.red, FILL.red)),
  },
  {
    note: '❓では、風はどちらへ吹くのでしょう。風は気圧の高いほうから低いほうへ吹きます。だから昼は、海から陸へ風が吹きます。これが海風です。',
    add: fresh(...beach(FILL.red), ar(235, 108, 235, 62, C.red), bx(190, 26, 100, 26, '陸：気圧 低', C.red, FILL.red, 12), bx(30, 26, 100, 26, '海：気圧 高', C.blue, FILL.blue, 12), ar(60, 96, 200, 96, C.blue), lb(120, 80, '海風', 15, C.blue, 'middle', true), ...say('昼：海から陸へ ＝ 海風', C.blue, FILL.blue)),
  },
  {
    note: '夜です。太陽がなくなると、陸のほうが早く冷えます。❓冷えた空気はどうなるでしょう。重くなって、下へ降りてきます。これが下降気流です。',
    add: fresh(ci(270, 20, 12, undefined, C.gray, FILL.gray), ...beach(FILL.blue), ar(235, 62, 235, 108, C.blue), ar(205, 62, 205, 108, C.blue), lb(220, 46, '下降気流', 12, C.blue, 'middle', true), lb(80, 90, 'まだあたたかい', 11, C.red, 'middle'), ...say('陸が冷える → 空気が重くなって下降', C.blue, FILL.blue)),
  },
  {
    note: '❓冷えた空気が降りてくると、陸の気圧はどうなるでしょう。地面の上にのる空気が増えるので、気圧が上がります。海の上のほうが気圧は低くなります。',
    add: fresh(...beach(FILL.blue), ar(235, 62, 235, 108, C.blue), bx(190, 26, 100, 26, '陸：気圧 高', C.blue, FILL.blue, 12), bx(30, 26, 100, 26, '海：気圧 低', C.red, FILL.red, 12), ...say('下降して空気が増える → 陸の気圧が上がる', C.blue, FILL.blue)),
  },
  {
    note: '気圧の高い陸から、低い海へ風が吹きます。これが陸風です。昼のちょうど逆になっています。',
    add: fresh(...beach(FILL.blue), ar(235, 62, 235, 108, C.blue), bx(190, 26, 100, 26, '陸：気圧 高', C.blue, FILL.blue, 12), bx(30, 26, 100, 26, '海：気圧 低', C.red, FILL.red, 12), ar(200, 96, 60, 96, C.blue), lb(130, 80, '陸風', 15, C.blue, 'middle', true), ...say('夜：陸から海へ ＝ 陸風', C.blue, FILL.blue)),
  },
  {
    note: '❓風の名前は、どう決まっているのでしょう。「吹いてくる方向」でつけます。海から吹いてくるから海風、陸から吹いてくるから陸風です。吹いていく先ではありません。',
    add: fresh(bx(20, 24, 130, 44, '海から吹く\n＝ 海風（昼）', C.blue, FILL.blue, 13), bx(170, 24, 130, 44, '陸から吹く\n＝ 陸風（夜）', C.main, FILL.warm, 13), ar(85, 100, 130, 100, C.blue), ar(235, 100, 190, 100, C.main), lb(160, 126, 'どこから来るかで名前をつける', 12, C.ink, 'middle', true), ...say('風の名前は「吹いてくる方向」', C.ink, FILL.yellow)),
  },
  {
    note: '昼と夜のあいだには、陸と海の温度が近くなって、ほとんど風がなくなる時間があります。朝や夕方のなぎと呼ばれます。風向が入れかわる、ちょうどそのときです。',
    add: fresh(bx(10, 40, 90, 44, '昼\n海風', C.blue, FILL.blue, 13), bx(115, 40, 90, 44, '夕方\nなぎ（無風）', C.gray, FILL.gray, 12), bx(220, 40, 90, 44, '夜\n陸風', C.main, FILL.warm, 13), ar(102, 62, 113, 62, C.gray), ar(207, 62, 218, 62, C.gray), ...say('向きが入れかわるとき、風がやむ', C.ink, FILL.yellow)),
  },
  {
    note: '❓季節風はどうでしょう。大陸と海洋という大きな規模で、まったく同じしくみが起こっています。冬は大陸が冷えて高気圧になり北西の風、夏は大陸があたたまって低気圧になり南東の風です。',
    add: fresh(bx(20, 24, 130, 40, '陸風（夜）\n＝ 冬の季節風', C.blue, FILL.blue, 12), bx(170, 24, 130, 40, '海風（昼）\n＝ 夏の季節風', C.red, FILL.red, 12), lb(160, 88, '同じしくみを、大きくしたもの', 13, C.ink, 'middle', true), bx(20, 100, 130, 30, '冬：北西', C.blue, FILL.blue, 12), bx(170, 100, 130, 30, '夏：南東', C.red, FILL.red, 12), ...say('海陸風も季節風も、陸と海の温まり方のちがいが原因', C.ink, FILL.yellow, 12)),
  },
  {
    note: 'まとめです。陸は温まりやすく冷めやすい。昼は陸が高温で上昇気流、気圧が下がって海風。夜は陸が低温で下降気流、気圧が上がって陸風です。',
    add: fresh(bx(20, 12, 280, 28, '陸：温まりやすく冷めやすい', C.main, FILL.warm, 13), bx(20, 46, 280, 28, '昼：陸が高温 → 上昇気流 → 気圧低 → 海風', C.red, FILL.red, 12), bx(20, 80, 280, 28, '夜：陸が低温 → 下降気流 → 気圧高 → 陸風', C.blue, FILL.blue, 12), bx(20, 114, 280, 28, '風は気圧の高いほうから低いほうへ', C.green, FILL.green, 12)),
  },
]);

// ══ 天体の日周運動と地球の自転 ══
/** 半円のドーム（南を向いて立つ。左が東、右が西）の上の点。deg は東の地平線からの角度。 */
const dpt = (deg: number, r = 100, cx = 160, cy = 124): [number, number] => [cx - r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
const dgrid = (): E[] => [ln(30, 124, 290, 124, C.ink, false, 2), lb(24, 138, '東', 12, C.gray, 'middle', true), lb(296, 138, '西', 12, C.gray, 'middle', true), lb(160, 138, '南', 12, C.gray, 'middle', true)];
const darc = (): E[] => {
  const out: E[] = [];
  for (let d = 0; d < 180; d += 15) out.push(ln(dpt(d)[0], dpt(d)[1], dpt(d + 15)[0], dpt(d + 15)[1], C.gray, true));
  return out;
};
const sunAt = (deg: number): E => ci(dpt(deg)[0], dpt(deg)[1], 9, undefined, C.main, FILL.yellow);
const nisshu: DiagramFigure = show([
  {
    note: '太陽も星も、東からのぼって、南の空を通り、西へしずむように見えます。これを日周運動といいます。❓なぜそう見えるのでしょう。',
    add: [...dgrid(), ...darc(), sunAt(10), sunAt(90), sunAt(170), ar(dpt(100)[0] + 8, dpt(100)[1] + 2, dpt(140)[0], dpt(140)[1] + 2, C.red), ...say('東 → 南 → 西 へ、1日で動いて見える', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ東から西へ動いて見えるのでしょう。実際に動いているのは地球のほうです。地球は西から東へ自転しています。電車に乗ると景色が逆向きに流れて見えるのと同じです。',
    add: fresh(ci(100, 72, 46, '地球', C.blue, FILL.blue, 14), ar(60, 26, 20, 40, C.red), ar(140, 118, 176, 100, C.red), lb(100, 138, '自転：西から東', 12, C.red, 'middle', true), ci(270, 60, 18, '太陽', C.main, FILL.yellow, 11), ar(270, 100, 270, 84, C.gray), lb(270, 116, '反対向きに\n動いて見える', 11, C.gray, 'middle'), ...say('動いているのは地球。太陽や星はほぼ止まっている', C.blue, FILL.blue, 12)),
  },
  {
    note: '❓では、どれくらいの速さで動いて見えるのでしょう。地球は24時間で1回転、つまり360度まわります。1時間あたり 360 ÷ 24 ＝ 15度です。',
    add: fresh(ci(110, 72, 52, undefined, C.blue, '#FFFFFF'), sc(110, 72, 52, 90, 105, C.red, FILL.red), sc(110, 72, 52, 105, 120, C.blue, FILL.blue), sc(110, 72, 52, 120, 135, C.red, FILL.red), lb(110, 138, '1時間で15度', 12, C.red, 'middle', true), bx(190, 26, 116, 36, '24時間で360度', C.blue, FILL.blue, 12), bx(190, 74, 116, 36, '360 ÷ 24 ＝ 15', C.red, FILL.red, 13), ...say('天体は1時間に15度、東から西へ動いて見える', C.red, FILL.red)),
  },
  {
    note: '例題です。星が45度動くのに何時間かかるでしょう。❓なぜわり算なのでしょう。1時間で15度ずつ動くので、45度の中に15度が何個入るかを数えればよいからです。45 ÷ 15 ＝ 3時間。',
    add: fresh(ci(110, 72, 52, undefined, C.blue, '#FFFFFF'), sc(110, 72, 52, 90, 105, C.red, FILL.red), sc(110, 72, 52, 105, 120, C.green, FILL.green), sc(110, 72, 52, 120, 135, C.red, FILL.red), lb(110, 138, '15度が3個 ＝ 45度', 12, C.ink, 'middle', true), bx(190, 26, 116, 30, '1時間 ＝ 15度', C.blue, FILL.blue, 12), bx(190, 66, 116, 30, '45 ÷ 15', C.red, FILL.red, 13), bx(190, 106, 116, 30, '＝ 3時間', C.green, FILL.green, 13), ...say('動いた角度 ÷ 15 ＝ 経過時間', C.red, FILL.red)),
  },
  {
    note: '太陽がいちばん高くなり、真南に来ることを南中といいます。太陽の南中は正午ごろです。❓なぜ正午ごろなのでしょう。1日の真ん中の時刻に、東の地平線と西の地平線のちょうど中間に来るからです。',
    add: fresh(...dgrid(), ...darc(), sunAt(10), sunAt(90), sunAt(170), lb(dpt(90)[0], dpt(90)[1] - 18, '南中', 13, C.red, 'middle', true), ln(160, 124, 160, 34, C.red, true), ...say('南中 ＝ 真南に来る（太陽は正午ごろ）', C.red, FILL.red)),
  },
  {
    note: '北の空の星は、円をえがくように動きます。北極星を中心に、反時計まわりに1時間15度ずつ回ります。',
    add: fresh(ci(160, 74, 60, undefined, C.gray, '#FFFFFF'), ci(160, 74, 36, undefined, C.gray, '#FFFFFF'), ci(160, 74, 4, undefined, C.purple, FILL.yellow), lb(176, 82, '北極星', 10, C.purple, 'start', true), sc(160, 74, 60, 90, 105, C.red, FILL.red), ...[[160, 14], [138, 16], [124, 24]].map(([x, y]) => ci(x, y, 3, undefined, C.blue, FILL.blue)), ar(150, 8, 128, 12, C.red), lb(272, 60, '反時計まわり\n1時間に15度', 11, C.red, 'middle', true), ...say('北の空：北極星を中心に反時計まわり', C.purple, FILL.purple)),
  },
  {
    note: '❓北極星はなぜほとんど動かないのでしょう。北極星は、地軸（自転の軸）をまっすぐ北へのばした先にあるからです。自転の中心の方向にあるので、地球が回ってもほとんど位置が変わりません。',
    add: fresh(ci(110, 96, 32, '地球', C.blue, FILL.blue, 12), ln(110, 140, 110, 22, C.gray, true), ci(110, 16, 6, undefined, C.purple, FILL.yellow), lb(124, 16, '北極星', 11, C.purple, 'start', true), lb(180, 72, '地軸', 11, C.gray, 'start', true), ar(150, 96, 150, 76, C.red), lb(240, 100, '地軸の先にある\n＝ 回転の中心', 12, C.purple, 'middle', true), ...say('地軸の延長線上にあるから、ほとんど動かない', C.purple, FILL.purple)),
  },
  {
    note: '東・南・西の空では、動き方がちがいます。東の空では右上へのぼり、南の空では左から右へ弧をえがき、西の空では右下へしずみます。❓なぜ向きが変わるのでしょう。見ている方向によって、地球の回る向きに対する見え方が変わるからです。',
    add: fresh(bx(6, 20, 100, 100, undefined, C.blue, FILL.blue), bx(110, 20, 100, 100, undefined, C.red, FILL.red), bx(214, 20, 100, 100, undefined, C.green, FILL.green), lb(56, 32, '東の空', 12, C.blue, 'middle', true), lb(160, 32, '南の空', 12, C.red, 'middle', true), lb(264, 32, '西の空', 12, C.green, 'middle', true), ar(30, 104, 84, 54, C.blue), ar(126, 90, 194, 90, C.red), ar(238, 54, 292, 104, C.green), lb(56, 130, '右上へ', 11, C.blue, 'middle', true), lb(160, 130, '左から右へ', 11, C.red, 'middle', true), lb(264, 130, '右下へ', 11, C.green, 'middle', true), ...say('東はのぼる・南は横ぎる・西はしずむ', C.ink, FILL.yellow)),
  },
  {
    note: '星の位置から時刻を求める問題です。星が南中してから30度西へ動いていたら、30 ÷ 15 ＝ 2時間たっています。❓なぜ時刻が分かるのでしょう。動いた角度は、時間に比例するからです。',
    add: fresh(...flow(['30度\n動いた', '30 ÷ 15', '2時間\n経過'], 30, { h: 56, size: 12, gap: 24 }).flat(), bx(40, 106, 240, 30, '角度 ÷ 15 ＝ 時間', C.red, FILL.red, 13), ...say('角度 ÷ 15 で時間、時間 × 15 で角度', C.red, FILL.red)),
  },
  {
    note: '❓見える星の高さは、場所で変わるのでしょうか。変わります。北極星の高さ（高度）はその場所の緯度と等しくなります。北緯35度なら約35度、北極なら真上（90度）、赤道では地平線（0度）です。',
    add: fresh(bx(10, 30, 92, 50, '北極\n90度', C.purple, FILL.purple, 13), bx(114, 30, 92, 50, '北緯35度\n35度', C.blue, FILL.blue, 13), bx(218, 30, 92, 50, '赤道\n0度', C.gray, FILL.gray, 13), lb(160, 104, '北極星の高度 ＝ 緯度', 14, C.red, 'middle', true), ...say('緯度によって、星の見え方が変わる', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめです。太陽も星も東から西へ動いて見えます。原因は地球の自転で、速さは1時間に15度です。北の空では北極星を中心に反時計まわりです。',
    add: fresh(bx(20, 14, 280, 28, '見かけの動き：東 → 西', C.blue, FILL.blue, 13), bx(20, 48, 280, 28, '原因：地球が西から東へ自転', C.red, FILL.red, 13), bx(20, 82, 280, 28, '360 ÷ 24 ＝ 15度／時間', C.green, FILL.green, 13), bx(20, 116, 280, 28, '北の空：北極星を中心に反時計まわり', C.purple, FILL.purple, 12)),
  },
]);

// ══ 星の年周運動と地球の公転 ══
/** 太陽のまわりの公転（北極側から見た図）。太陽は (110,78)、地球の軌道の半径は 52。 */
const SUN: [number, number] = [110, 78];
const epos = (deg: number, r = 52): [number, number] => [SUN[0] + r * Math.cos((deg * Math.PI) / 180), SUN[1] - r * Math.sin((deg * Math.PI) / 180)];
const orbit = (r = 52): E[] => [ci(SUN[0], SUN[1], r, undefined, C.gray, '#FFFFFF'), ci(SUN[0], SUN[1], 12, '太陽', C.main, FILL.yellow, 8)];
const earthDot = (deg: number, text?: string, r = 52): E => ci(epos(deg, r)[0], epos(deg, r)[1], 7, text, C.blue, FILL.blue, 8);
const nenshu: DiagramFigure = show([
  {
    note: '同じ時刻に見える星の位置は、日がたつにつれて、少しずつ西へずれていきます。これを年周運動といいます。❓なぜずれるのでしょう。',
    add: [...dgrid(), ...darc(), ci(dpt(90)[0], dpt(90)[1], 5, undefined, C.blue, FILL.blue), ci(dpt(120)[0], dpt(120)[1], 5, undefined, C.blue, FILL.blue), ar(dpt(90)[0] + 8, dpt(90)[1] + 1, dpt(120)[0] - 8, dpt(120)[1] - 2, C.red), lb(dpt(90)[0] - 12, dpt(90)[1] - 12, '1月', 11, C.gray, 'middle', true), lb(dpt(120)[0] + 10, dpt(120)[1] - 12, '2月', 11, C.gray, 'middle', true), sc(160, 124, 40, 90, 120, C.red, FILL.red), lb(182, 112, '30度', 10, C.red, 'start', true), ...say('同じ時刻の星は、1か月で西へずれる', C.ink, FILL.yellow)],
  },
  {
    note: '❓ずれる原因は何でしょう。地球が太陽のまわりを公転しているからです。地球の位置が変わると、夜になる側が向く方向も少しずつ変わり、同じ時刻に見える星の位置が動きます。',
    add: fresh(...orbit(), earthDot(90, undefined), earthDot(60, undefined), sc(SUN[0], SUN[1], 52, 60, 90, C.red, FILL.red), lb(230, 40, '1か月ぶん\n公転した', 12, C.red, 'middle', true), lb(230, 96, '地球の位置が変わる\n→ 見える方向が変わる', 11, C.gray, 'middle'), ...say('地球が公転する → 同じ時刻に見える星がずれる', C.blue, FILL.blue, 12)),
  },
  {
    note: '❓では、1か月に何度ずれるのでしょう。地球は1年（12か月）で太陽のまわりを1周、360度まわります。だから1か月では 360 ÷ 12 ＝ 30度です。',
    add: fresh(...orbit(), sc(SUN[0], SUN[1], 52, 60, 90, C.red, FILL.red), earthDot(90), earthDot(60), bx(190, 22, 120, 36, '1年で360度', C.blue, FILL.blue, 13), bx(190, 68, 120, 36, '360 ÷ 12 ＝ 30', C.red, FILL.red, 13), ...say('年周運動は、1か月に約30度', C.red, FILL.red)),
  },
  {
    note: '❓季節によって見える星座が変わるのはなぜでしょう。地球が公転すると、夜の側が向く方向が変わり、見える星座が入れかわるからです。図の矢印が、真夜中に見える方向です。',
    add: fresh(...orbit(46), ...[90, 0, 270, 180].flatMap((d, i) => [earthDot(d, undefined, 46), ar(epos(d, 46)[0] + 10 * Math.cos((d * Math.PI) / 180), epos(d, 46)[1] - 10 * Math.sin((d * Math.PI) / 180), epos(d, 74)[0], epos(d, 74)[1], C.purple), lb(epos(d, 88)[0], epos(d, 88)[1], '星座' + 'アイウエ'[i], 11, C.purple, 'middle', true)]), ...say('夜の側の方向が変わる → 見える星座が変わる', C.purple, FILL.purple, 12)),
  },
  {
    note: '❓では、太陽と同じ方向にある星座はどうでしょう。その星座は昼の側にあるので、太陽の光で空が明るく、夜には見えません。',
    add: fresh(ci(50, 78, 14, '太陽', C.main, FILL.yellow, 9), ci(180, 78, 8, undefined, C.blue, FILL.blue), lb(180, 96, '地球', 10, C.blue, 'middle', true), ar(170, 78, 70, 78, C.gray), ci(14, 78, 5, undefined, C.purple, FILL.yellow), lb(16, 62, '星座', 11, C.purple, 'middle', true), ar(190, 78, 300, 78, C.purple), lb(262, 62, '夜の側', 12, C.purple, 'middle', true), lb(110, 62, '昼の側', 12, C.main, 'middle', true), ...say('太陽と同じ方向の星座は、昼なので見えない', C.main, FILL.warm)),
  },
  {
    note: '例題です。同じ星が同じ位置に見えるのは、2か月後なら何時間ずれた時刻でしょう。2か月で 30 × 2 ＝ 60度ずれます。❓では時間にすると？ 1時間が15度なので、60 ÷ 15 ＝ 4時間です。',
    add: fresh(...flow(['2か月\n30 × 2', '60度', '60 ÷ 15', '4時間'], 30, { h: 56, size: 11, gap: 14 }).flat(), bx(40, 106, 240, 30, '日周運動の15度を使って時間になおす', C.red, FILL.red, 12), ...say('同じ位置に見える時刻は、4時間早くなる', C.red, FILL.red)),
  },
  {
    note: '❓なぜ「早い」時刻なのでしょう。星は1か月に西へ30度ずれるので、もとの位置に見えるのは、ずれたぶんだけ時計を早めたときです。1か月で2時間、2か月で4時間早くなります。',
    add: fresh(bx(10, 34, 92, 50, '1月\n午後10時', C.blue, FILL.blue, 12), bx(114, 34, 92, 50, '2月\n午後8時', C.blue, FILL.blue, 12), bx(218, 34, 92, 50, '3月\n午後6時', C.blue, FILL.blue, 12), ar(104, 59, 112, 59, C.red), ar(208, 59, 216, 59, C.red), lb(160, 112, '同じ位置に見える時刻が 2時間ずつ早くなる', 12, C.red, 'middle', true), ...say('30度 ÷ 15 ＝ 1か月に2時間早い', C.red, FILL.red)),
  },
  {
    note: '日周運動と年周運動を比べます。日周運動は自転が原因で、1時間に15度。年周運動は公転が原因で、1か月に約30度です。',
    add: fresh(bx(10, 14, 148, 26, '日周運動', C.blue, FILL.blue, 13), bx(162, 14, 148, 26, '年周運動', C.red, FILL.red, 13), bx(10, 46, 148, 30, '原因：自転', C.blue, FILL.blue, 12), bx(162, 46, 148, 30, '原因：公転', C.red, FILL.red, 12), bx(10, 82, 148, 30, '1時間に15度', C.blue, FILL.blue, 13), bx(162, 82, 148, 30, '1か月に約30度', C.red, FILL.red, 13), lb(160, 130, 'もとにする時間がちがう', 12, C.ink, 'middle', true), ...say('15は1時間、30は1か月。単位までセットで', C.ink, FILL.yellow)),
  },
  {
    note: '❓1日では、どれくらいずれるのでしょう。1年は約365日で360度まわるので、1日では約1度、時間にすると約4分です。だから星は、毎日ほんの少しずつ早く出てきます。',
    add: fresh(bx(10, 30, 92, 50, '1年365日\n360度', C.blue, FILL.blue, 12), lb(108, 55, '→', 18), bx(114, 30, 92, 50, '1日に\n約1度', C.red, FILL.red, 12), lb(212, 55, '→', 18), bx(218, 30, 92, 50, '約4分\n早く出る', C.green, FILL.green, 12), lb(160, 112, '1度 ÷ 15度／時 ＝ 約4分', 12, C.ink, 'middle', true), ...say('毎日ほんの少しずつずれて、1年でもとにもどる', C.green, FILL.green, 12)),
  },
  {
    note: 'まとめです。年周運動の原因は地球の公転で、星は1か月に約30度、西へずれます。季節で見える星座が変わり、太陽と同じ方向の星座は見えません。',
    add: fresh(bx(20, 14, 280, 28, '原因：地球の公転（1年で360度）', C.blue, FILL.blue, 13), bx(20, 48, 280, 28, '1か月に約30度、西へずれる', C.red, FILL.red, 13), bx(20, 82, 280, 28, '2か月で60度 ＝ 4時間早い時刻', C.green, FILL.green, 13), bx(20, 116, 280, 28, '太陽と同じ方向の星座は見えない', C.purple, FILL.purple, 12)),
  },
]);

// ══ 季節の変化と南中高度 ══
/** 緯度 phi の観測者が、赤道面から d 度（北向きが正）の高さの太陽光を受けるときの図。 */
const seasonEarth = (phi: number, d: number, showRay = true): E[] => {
  const cx = 100, cy = 84, r = 44;
  const a = (phi * Math.PI) / 180, dd = (d * Math.PI) / 180;
  const px = cx + r * Math.cos(a), py = cy - r * Math.sin(a);
  const south: [number, number] = [Math.sin(a), Math.cos(a)];
  const out: E[] = [
    ci(cx, cy, r, undefined, C.blue, FILL.blue), ln(cx - r - 10, cy, cx + r + 10, cy, C.gray, true), ln(cx, 20, cx, 148, C.gray, true),
    ln(px - south[0] * 60, py - south[1] * 60, px + south[0] * 60, py + south[1] * 60, C.ink, false, 2), ci(px, py, 4, undefined, C.red, FILL.red),
  ];
  if (showRay) {
    out.push(ar(px + 120 * Math.cos(dd), py - 120 * Math.sin(dd), px + 6 * Math.cos(dd), py - 6 * Math.sin(dd), C.main));
    out.push(ln(px, py, px + 120 * Math.cos(dd), py - 120 * Math.sin(dd), C.main, true));
    const from = 360 - (90 - phi);
    const to = 360 + d;
    out.push(sc(px, py, 28, from, to, C.red, FILL.red));
  }
  return out;
};
const kisetsu: DiagramFigure = show([
  {
    note: '季節が変わるのは、なぜでしょう。夏は暑く冬は寒いのは、地球と太陽の距離が変わるからでしょうか。❓それとも、ほかの原因があるのでしょうか。',
    add: [bx(20, 30, 130, 50, '太陽との\n距離が変わる？', C.gray, FILL.gray, 13), bx(170, 30, 130, 50, '地軸の\nかたむき？', C.red, FILL.red, 13), lb(160, 112, 'どちらが原因？', 14, C.ink, 'middle', true), ...say('季節の原因を、順に確かめる', C.ink, FILL.yellow)],
  },
  {
    note: '地球は、地軸を23.4度かたむけたまま、太陽のまわりを公転しています。❓かたむきが同じ向きのまま回ると、どうなるのでしょう。太陽のほうへかたむく時期と、反対へかたむく時期ができます。',
    add: fresh(ci(160, 78, 18, '太陽', C.main, FILL.yellow, 10), ci(60, 78, 22, undefined, C.blue, FILL.blue), ln(44, 118, 76, 38, C.gray, true), ci(260, 78, 22, undefined, C.blue, FILL.blue), ln(244, 118, 276, 38, C.gray, true), lb(60, 132, '夏至ごろ\n太陽のほうへ', 10, C.red, 'middle', true), lb(260, 132, '冬至ごろ\n太陽と反対へ', 10, C.blue, 'middle', true), ...say('かたむきが同じ向きのまま公転する', C.blue, FILL.blue)),
  },
  {
    note: '春分・秋分の南中高度です。太陽の光は、地球の赤道面と平行に来ます。❓なぜ 90 − 緯度 になるのでしょう。赤道では太陽が真上（90度）で、緯度が1度北へ行くごとに、太陽の高さが1度ずつ低くなるからです。',
    add: fresh(...seasonEarth(35, 0), lb(240, 40, '北緯35度\n90 − 35 ＝ 55度', 12, C.red, 'middle', true), ...say('春分・秋分の南中高度 ＝ 90 − 緯度', C.red, FILL.red)),
  },
  {
    note: '夏至です。北半球が太陽のほうへかたむいているので、太陽の光が赤道面より23.4度北から来ます。❓するとどうなるでしょう。太陽が23.4度ぶん高くなるので、南中高度は 90 − 緯度 ＋ 23.4 です。',
    add: fresh(...seasonEarth(35, 23.4), lb(262, 112, '北緯35度\n55 ＋ 23.4\n＝ 78.4度', 12, C.red, 'middle', true), ...say('夏至の南中高度 ＝ 90 − 緯度 ＋ 23.4', C.red, FILL.red)),
  },
  {
    note: '冬至です。北半球が太陽と反対へかたむくので、太陽の光が赤道面より23.4度南から来ます。太陽が23.4度ぶん低くなり、南中高度は 90 − 緯度 − 23.4 になります。',
    add: fresh(...seasonEarth(35, -23.4), lb(250, 20, '北緯35度\n55 − 23.4\n＝ 31.6度', 12, C.blue, 'middle', true), ...say('冬至の南中高度 ＝ 90 − 緯度 − 23.4', C.blue, FILL.blue)),
  },
  {
    note: '北緯35度の地点で3つを並べて比べます。夏至は78.4度、春分・秋分は55度、冬至は31.6度です。夏と冬で、太陽の高さが約47度もちがいます。',
    add: fresh(ln(30, 124, 290, 124, C.ink, false, 2), ci(60, 124, 4, undefined, C.red, FILL.red), ...[[78.4, C.red, '夏至 78.4度', 100], [55, C.green, '春分・秋分 55度', 110], [31.6, C.blue, '冬至 31.6度', 150]].flatMap(([e, col, t, L]) => { const a = ((e as number) * Math.PI) / 180; const l = L as number; const ex = 60 + l * Math.cos(a), ey = 124 - l * Math.sin(a); return [ar(ex, ey, 60 + 8 * Math.cos(a), 124 - 8 * Math.sin(a), col as string), (e as number) > 70 ? lb(ex - 4, ey - 4, t as string, 10, col as string, 'end', true) : lb(ex + 6, ey - 6, t as string, 10, col as string, 'start', true)]; }), lb(30, 140, '北', 11, C.gray), lb(290, 140, '南', 11, C.gray, 'end'), ...say('35度で計算：78.4度・55度・31.6度', C.ink, FILL.yellow)),
  },
  {
    note: '❓夏が暑いのは、なぜでしょう。理由の1つ目は南中高度です。太陽が高いと、同じ量の光がせまい面積に集まります。低いと、広い面積にうすく広がります。',
    add: fresh(ln(20, 124, 300, 124, C.ink, false, 2), ln(60, 20, 80, 124, C.main), ln(90, 20, 110, 124, C.main), ln(80, 124, 110, 124, C.red, false, 5), lb(95, 138, 'せまい → 強い', 11, C.red, 'middle', true), ln(190, 20, 220, 124, C.main), ln(220, 20, 250, 124, C.main), ln(220, 124, 280, 124, C.blue, false, 5), lb(250, 138, '広い → うすい', 11, C.blue, 'middle', true), lb(95, 10, '南中高度が高い', 11, C.red, 'middle', true), lb(240, 10, '南中高度が低い', 11, C.blue, 'middle', true), ...say('高いほど、同じ光が1か所に集中して強くなる', C.red, FILL.red)),
  },
  {
    note: '理由の2つ目は昼の長さです。❓なぜ昼の長さも関係するのでしょう。夏は昼が長いので、地面が太陽の光を受ける時間が長く、あたたまる量が多くなるからです。冬は昼が短く、その逆です。',
    add: fresh(bx(20, 30, 190, 30, '夏：昼が長い', C.red, FILL.red, 13), bx(20, 76, 110, 30, '冬：昼が短い', C.blue, FILL.blue, 13), lb(270, 46, '光を受ける\n時間が長い', 11, C.red, 'middle', true), lb(200, 92, '時間が短い', 11, C.blue, 'middle', true), ...say('高度が高く、昼が長い → 暑い夏', C.red, FILL.red)),
  },
  {
    note: '❓では、地球と太陽の距離は関係ないのでしょうか。関係ありません。距離の変化はごくわずかで、しかも日本が冬のころのほうが、むしろ太陽に少し近いのです。もし距離が原因なら、冬が暑くなるはずです。',
    add: fresh(bx(20, 34, 130, 60, '距離：わずかな変化\n日本が冬のころ\nむしろ近い', C.gray, FILL.gray, 11), bx(170, 34, 130, 60, '原因は\n地軸のかたむき', C.green, FILL.green, 13), lb(160, 116, '距離が原因ではない', 14, C.red, 'middle', true), ...say('夏が暑いのは、地球が太陽に近づくからではない', C.ink, FILL.yellow, 12)),
  },
  {
    note: '❓もし地軸がかたむいていなかったら、どうなるでしょう。南中高度も昼の長さも一年中同じになるので、季節の変化はなくなります。かたむきがあるからこそ、季節が生まれるのです。',
    add: fresh(ci(160, 70, 34, undefined, C.blue, FILL.blue), ln(160, 20, 160, 120, C.gray, true), lb(160, 136, 'かたむき 0度', 12, C.gray, 'middle', true), bx(214, 46, 96, 50, '南中高度も\n昼の長さも\n一年中同じ', C.red, FILL.red, 11), ...say('地軸のかたむきがなくなる → 季節がなくなる', C.red, FILL.red, 12)),
  },
  {
    note: 'まとめです。季節の原因は地軸のかたむきで、距離ではありません。春分・秋分の南中高度 90 − 緯度 を基準に、夏至は＋23.4、冬至は−23.4です。',
    add: fresh(bx(20, 14, 280, 28, '原因：地軸が23.4度かたむいたまま公転', C.blue, FILL.blue, 12), bx(20, 48, 280, 28, '春分・秋分 ＝ 90 − 緯度', C.green, FILL.green, 13), bx(20, 82, 280, 28, '夏至 ＝ ＋23.4度　冬至 ＝ −23.4度', C.red, FILL.red, 13), bx(20, 116, 280, 28, '夏が暑い：高度が高く、昼が長い', C.main, FILL.warm, 13)),
  },
]);

// ══ 月の満ち欠けと位置関係（中学） ══
/** 明るい部分の多角形。k＝1で欠け切り、0で半分、−1で満月。side＝1で右側、−1で左側が明るい。 */
const phase = (cx: number, cy: number, r: number, k: number, side: 1 | -1 = 1): E => {
  const pts: [number, number][] = [];
  const n = 24;
  for (let i = 0; i <= n; i++) { const t = ((90 - (180 * i) / n) * Math.PI) / 180; pts.push([cx + side * r * Math.cos(t), cy - r * Math.sin(t)]); }
  for (let i = 0; i <= n; i++) { const t = ((-90 + (180 * i) / n) * Math.PI) / 180; pts.push([cx + side * r * k * Math.cos(t), cy - r * Math.sin(t)]); }
  return pg(pts, C.main, FILL.yellow);
};
const discPhase = (cx: number, cy: number, r: number, k: number, side: 1 | -1 = 1): E[] => [ci(cx, cy, r, undefined, C.gray, FILL.gray), ...(k < 1 ? [phase(cx, cy, r, k, side)] : [])];
// 北極側から見た、太陽・地球・月。太陽は左。
const EC: [number, number] = [160, 78];
const MP: Record<string, [number, number]> = { 新月: [108, 78], 上弦: [160, 130], 満月: [212, 78], 下弦: [160, 26] };
const litLeft = (x: number, y: number, r = 8): E[] => [ci(x, y, r, undefined, C.gray, FILL.gray), sc(x, y, r, 90, 270, C.main, FILL.yellow)];
const sunEarthMoon = (hl?: string, marks = false, names = true): E[] => {
  const out: E[] = [ci(EC[0], EC[1], 52, undefined, C.gray, '#FFFFFF'), ci(26, 78, 18, '太陽', C.main, FILL.yellow, 10)];
  if (hl) out.push(ci(MP[hl][0], MP[hl][1], 14, undefined, C.red, FILL.red));
  out.push(ci(EC[0], EC[1], 12, '地球', C.blue, FILL.blue, 8));
  for (const k of Object.keys(MP)) out.push(...litLeft(MP[k][0], MP[k][1]));
  if (marks) for (const k of Object.keys(MP)) { const [x, y] = MP[k]; const dx = EC[0] - x, dy = EC[1] - y, d = Math.hypot(dx, dy); out.push(ci(x + (dx / d) * 6, y + (dy / d) * 6, 2, undefined, C.red, C.red)); }
  if (names) out.push(lb(108, 96, '新月', 10, C.ink, 'middle', true), lb(174, 130, '上弦', 10, C.ink, 'start', true), lb(212, 96, '満月', 10, C.ink, 'middle', true), lb(174, 26, '下弦', 10, C.ink, 'start', true));
  out.push(ar(46, 78, 92, 78, C.main), ar(46, 26, 144, 26, C.main), ar(46, 130, 144, 130, C.main));
  return out;
};
const inset = (kind: '新月' | '上弦' | '満月' | '下弦', x = 280, y = 60): E[] => {
  const r = 18;
  if (kind === '満月') return [ci(x, y, r, undefined, C.main, FILL.yellow), lb(x, y + 32, kind + 'に見える', 10, C.ink, 'middle', true)];
  if (kind === '新月') return [ci(x, y, r, undefined, C.gray, FILL.gray), lb(x, y + 32, '見えない', 10, C.ink, 'middle', true)];
  if (kind === '上弦') return [ci(x, y, r, undefined, C.gray, FILL.gray), sc(x, y, r, -90, 90, C.main, FILL.yellow), lb(x, y + 32, '右半分が光る', 10, C.ink, 'middle', true)];
  return [ci(x, y, r, undefined, C.gray, FILL.gray), sc(x, y, r, 90, 270, C.main, FILL.yellow), lb(x, y + 32, '左半分が光る', 10, C.ink, 'middle', true)];
};
const tsuki: DiagramFigure = show([
  {
    note: '月は、自分では光っていません。太陽の光を反射して光って見えます。❓では、月の形はなぜ日によって変わるのでしょう。それを順に調べます。',
    add: [ci(40, 64, 20, '太陽', C.main, FILL.yellow, 11), ar(64, 64, 138, 64, C.main), lb(100, 50, '太陽の光', 11, C.main, 'middle', true), ...litLeft(160, 64, 14), ar(178, 72, 256, 72, C.gray), lb(216, 92, '反射', 11, C.gray, 'middle', true), ci(280, 64, 20, '地球', C.blue, FILL.blue, 10), ...say('月は、太陽の光を反射して光る', C.ink, FILL.yellow)],
  },
  {
    note: '❓月の光る部分は、なぜいつも半分なのでしょう。太陽の光は一方向から当たるので、球である月では、太陽のほうを向いた半分だけが明るくなるからです。',
    add: fresh(ar(20, 44, 100, 44, C.main), ar(20, 64, 100, 64, C.main), ar(20, 84, 100, 84, C.main), ci(160, 64, 44, undefined, C.gray, FILL.gray), sc(160, 64, 44, 90, 270, C.main, FILL.yellow), lb(160, 120, '太陽のほうを向いた半分が明るい', 12, C.ink, 'middle', true), ...say('いつも半分は光っている。見え方が変わるだけ', C.ink, FILL.yellow)),
  },
  {
    note: '❓では、なぜ形が変わって見えるのでしょう。月が地球のまわりを回ると、太陽・地球・月の位置関係が変わり、地球から見える「光っている面」の割合が変わるからです。',
    add: fresh(...sunEarthMoon(), ...say('月の位置が変わると、見える光の面が変わる', C.ink, FILL.yellow)),
  },
  {
    note: '新月です。月が太陽と同じ方向にあり、太陽 − 月 − 地球の順に並びます。❓なぜ見えないのでしょう。光っている面が太陽側を向き、地球からは暗い面しか見えないからです。昼の空にはありますが、太陽がまぶしくて見えません。',
    add: fresh(...sunEarthMoon('新月'), ...inset('新月'), ...say('新月：太陽の方向にある。暗い面が地球を向く', C.gray, FILL.gray)),
  },
  {
    note: '上弦の月です。太陽・地球・月が直角に並び、右半分が光って見えます。❓なぜ夕方に南の空に見えるのでしょう。夕方は太陽が西にあります。月が太陽から90度東にあるので、ちょうど真南に見えるからです。',
    add: fresh(...sunEarthMoon('上弦'), ...inset('上弦'), ...say('上弦：太陽と90度。夕方に南中、右半分が光る', C.red, FILL.red)),
  },
  {
    note: '満月です。太陽 − 地球 − 月の順に並び、光る面が全部見えます。❓なぜ真夜中に南の空に見えるのでしょう。真夜中に真南を向いた方向は、太陽の反対側です。月も太陽の反対側にあるから、真南に見えます。',
    add: fresh(...sunEarthMoon('満月'), ...inset('満月'), ...say('満月：太陽の反対側。真夜中に南中', C.red, FILL.red)),
  },
  {
    note: '下弦の月です。再び太陽と直角になり、左半分が光って見えます。❓なぜ明け方に南の空に見えるのでしょう。月が太陽より90度西にあるので、太陽がのぼる明け方に、ちょうど真南に来るからです。',
    add: fresh(...sunEarthMoon('下弦'), ...inset('下弦'), ...say('下弦：明け方に南中、左半分が光る', C.red, FILL.red)),
  },
  {
    note: '❓南中の時刻は、どうやって決まるのでしょう。太陽から月が東へ何度はなれているかで決まり、地球は1時間に15度回るので、角度を15でわった時間だけ遅れて南中します。',
    add: fresh(bx(10, 8, 300, 30, '新月：0度 → 正午ごろ南中', C.gray, FILL.gray, 12), bx(10, 44, 300, 30, '上弦：90 ÷ 15 ＝ 6時間 → 18時ごろ', C.red, FILL.red, 12), bx(10, 80, 300, 30, '満月：180 ÷ 15 ＝ 12時間 → 24時ごろ', C.blue, FILL.blue, 12), bx(10, 116, 300, 30, '下弦：270 ÷ 15 ＝ 18時間 → 翌朝6時ごろ', C.green, FILL.green, 12), ...say('月の南中は、1日に約50分ずつ遅くなっていく', C.ink, FILL.yellow, 12)),
  },
  {
    note: '月の満ち欠けの周期は、約29.5日です。新月から上弦・満月・下弦をへて、次の新月にもどるまで、およそ7日ずつ形が変わります。',
    add: fresh(...[['新月', 0], ['上弦', 1], ['満月', 2], ['下弦', 3]].flatMap(([t, i]) => { const x = 46 + (i as number) * 76; return [...(t === '満月' ? [ci(x, 62, 24, undefined, C.main, FILL.yellow)] : t === '新月' ? [ci(x, 62, 24, undefined, C.gray, FILL.gray)] : [ci(x, 62, 24, undefined, C.gray, FILL.gray), sc(x, 62, 24, t === '上弦' ? -90 : 90, t === '上弦' ? 90 : 270, C.main, FILL.yellow)]), lb(x, 104, t as string, 12, C.ink, 'middle', true)]; }), lb(160, 130, '約7日ずつ、あわせて約29.5日', 12, C.red, 'middle', true), ...say('満ち欠けの周期は約29.5日', C.red, FILL.red)),
  },
  {
    note: '❓月はいつも同じ面を地球に向けています。なぜでしょう。月は、自分が1回転する時間（自転）と、地球のまわりを1周する時間（公転）が同じだからです。図の赤い点が、いつも地球側を向いています。',
    add: fresh(...sunEarthMoon(undefined, true, false), lb(258, 118, '赤い点は\nいつも地球側', 10, C.red, 'middle', true), ...say('自転の周期 ＝ 公転の周期 → 同じ面が見える', C.ink, FILL.yellow)),
  },
  {
    note: '日食と月食です。日食は、月が太陽をかくして起こるので、新月のときです。月食は、月が地球の影に入って起こるので、満月のときです。',
    add: fresh(ci(30, 40, 14, undefined, C.main, FILL.yellow), ci(140, 40, 8, undefined, C.gray, FILL.gray), ci(240, 40, 14, undefined, C.blue, FILL.blue), lb(160, 66, '日食：太陽 − 月 − 地球（新月）', 12, C.red, 'middle', true), ci(30, 100, 14, undefined, C.main, FILL.yellow), ci(140, 100, 14, undefined, C.blue, FILL.blue), ci(240, 100, 8, undefined, C.gray, FILL.gray), lb(160, 128, '月食：太陽 − 地球 − 月（満月）', 12, C.blue, 'middle', true), ...say('日食は新月、月食は満月のとき', C.ink, FILL.yellow)),
  },
  {
    note: '❓では、新月と満月のたびに日食や月食が起きないのはなぜでしょう。月の通り道が、地球の公転面より約5度かたむいているので、多くの場合、三つの天体が一直線に並ばないからです。',
    add: fresh(ln(20, 74, 300, 74, C.gray, true), lb(24, 62, '地球の公転面', 10, C.gray, 'start', true), ln(20, 96, 300, 52, C.blue, false, 2), lb(300, 100, '月の通り道\n（約5度かたむく）', 10, C.blue, 'end', true), ci(160, 74, 12, undefined, C.blue, FILL.blue), ...say('たいていは、影や太陽とずれるので起こらない', C.ink, FILL.yellow)),
  },
  {
    note: '例題です。真夜中に南の空に見える月は何でしょう。❓なぜ満月と分かるのでしょう。真夜中に真南は太陽の反対側で、そこにあるのは太陽 − 地球 − 月と並んだ月、つまり満月だからです。',
    add: fresh(...sunEarthMoon('満月'), ...inset('満月'), ...say('真夜中に南の空 ＝ 満月', C.red, FILL.red)),
  },
  {
    note: 'まとめです。月は太陽の光を反射し、光る面はいつも半分です。位置関係で見える割合が変わります。新月は太陽の方向、満月は反対側。日食は新月、月食は満月のときです。',
    add: fresh(bx(20, 12, 280, 28, '月は反射で光る。光る面はいつも半分', C.main, FILL.warm, 12), bx(20, 46, 280, 28, '新月＝太陽の方向　満月＝太陽の反対側', C.blue, FILL.blue, 12), bx(20, 80, 280, 28, '上弦＝夕方に南中・右／下弦＝明け方・左', C.red, FILL.red, 12), bx(20, 114, 280, 28, '日食＝新月　月食＝満月　周期約29.5日', C.green, FILL.green, 12)),
  },
]);

// ══ 金星の見え方 ══
const VS: [number, number] = [110, 78];
const vorb = (): E[] => [ci(VS[0], VS[1], 62, undefined, C.gray, '#FFFFFF'), ci(VS[0], VS[1], 45, undefined, C.main, '#FFFFFF'), ci(VS[0], VS[1], 11, '太陽', C.main, FILL.yellow, 8), ci(172, 78, 6, undefined, C.blue, FILL.blue), lb(172, 94, '地球', 10, C.blue, 'middle', true)];
const kinsei: DiagramFigure = show([
  {
    note: '金星は、地球より内側を公転しています。このような惑星を内惑星といいます。❓この位置のせいで、どんな見え方になるのでしょう。',
    add: [...vorb(), ci(VS[0] + 45 * Math.cos(1.2), VS[1] - 45 * Math.sin(1.2), 5, undefined, C.red, FILL.red), lb(240, 40, '金星の軌道\n（内側）', 11, C.main, 'middle', true), lb(250, 120, '地球の軌道\n（外側）', 11, C.gray, 'middle', true), ...say('金星は地球より内側を回る「内惑星」', C.ink, FILL.yellow)],
  },
  {
    note: '❓なぜ金星は真夜中に見えないのでしょう。真夜中に見える方向は、太陽の反対側です。ところが金星は、太陽のまわりの小さな軌道を回るので、地球から見て太陽から大きくはなれた方向には来られないからです。',
    add: fresh(...vorb(), ln(172, 78, 172 - 65, 78 - 65, C.red, true), ln(172, 78, 172 - 65, 78 + 65, C.red, true), ar(180, 78, 300, 78, C.purple), lb(250, 62, '真夜中の方向', 11, C.purple, 'middle', true), lb(250, 96, '金星は来られない', 11, C.red, 'middle', true), ...say('金星は、太陽の近くの空にしか見えない', C.red, FILL.red)),
  },
  {
    note: '夕方の西の空に見える金星を、よいの明星といいます。❓なぜ夕方の西なのでしょう。金星は太陽の近くにいるので、太陽がしずんだあとの西の空に、しばらく残って見えるからです。',
    add: fresh(ln(20, 110, 300, 110, C.ink, false, 2), lb(290, 126, '西', 12, C.gray, 'middle', true), lb(30, 126, '東', 12, C.gray, 'middle', true), ci(262, 106, 9, undefined, C.main, FILL.yellow), lb(236, 124, '太陽（しずむ）', 10, C.main, 'middle', true), ci(222, 70, 5, undefined, C.red, FILL.red), lb(222, 52, 'よいの明星', 12, C.red, 'middle', true), lb(120, 40, '夕方の西の空', 13, C.ink, 'middle', true), ...say('夕方の西の空 → よいの明星', C.red, FILL.red)),
  },
  {
    note: '明け方の東の空に見える金星は、明けの明星です。❓なぜ明け方の東なのでしょう。金星は太陽の近くにいるので、太陽がのぼる少し前に、東の空に先に見えるからです。',
    add: fresh(ln(20, 110, 300, 110, C.ink, false, 2), lb(290, 126, '西', 12, C.gray, 'middle', true), lb(30, 126, '東', 12, C.gray, 'middle', true), ci(58, 106, 9, undefined, C.main, FILL.yellow), lb(104, 124, '太陽（のぼる前）', 10, C.main, 'middle', true), ci(98, 70, 5, undefined, C.red, FILL.red), lb(98, 52, '明けの明星', 12, C.red, 'middle', true), lb(210, 40, '明け方の東の空', 13, C.ink, 'middle', true), ...say('明け方の東の空 → 明けの明星', C.red, FILL.red)),
  },
  {
    note: '金星は、月のように満ち欠けをします。地球に近いときは大きく見えて細く欠け、遠いときは小さく見えて丸い形です。❓これはなぜでしょう。次の2つの図で確かめます。',
    add: fresh(...discPhase(60, 62, 30, 0.8, -1), lb(60, 106, '近い\n大きい・細い', 11, C.red, 'middle', true), ...discPhase(160, 62, 20, 0, -1), lb(160, 106, '中間\n半分', 11, C.gray, 'middle', true), ...discPhase(262, 62, 11, -1, -1), lb(262, 106, '遠い\n小さい・丸い', 11, C.blue, 'middle', true), ...say('近い → 大きく細い／遠い → 小さく丸い', C.ink, FILL.yellow)),
  },
  {
    note: '❓なぜ地球に近いと大きく見えるのでしょう。近いものほど大きく見えるからです。金星が太陽と地球のあいだに来たときは、地球にとても近くなります。太陽の反対側に回ったときは、ずっと遠くなります。',
    add: fresh(ci(30, 44, 14, undefined, C.main, FILL.yellow), ci(190, 44, 8, undefined, C.red, FILL.red), ci(270, 44, 12, undefined, C.blue, FILL.blue), ar(198, 44, 256, 44, C.green), lb(226, 30, '近い', 12, C.green, 'middle', true), ci(30, 104, 8, undefined, C.red, FILL.red), ci(150, 104, 14, undefined, C.main, FILL.yellow), ci(270, 104, 12, undefined, C.blue, FILL.blue), ar(40, 88, 256, 88, C.blue), lb(150, 74, '遠い（太陽の向こう側）', 12, C.blue, 'middle', true), lb(30, 120, '金星', 10, C.red, 'middle', true), lb(190, 58, '金星', 10, C.red, 'middle', true), ...say('近い → 大きく見える／遠い → 小さく見える', C.ink, FILL.yellow, 12)),
  },
  {
    note: '❓では、地球に近いとき、なぜ細く欠けるのでしょう。金星の光っている面は、太陽のほうを向いています。金星が太陽と地球のあいだにあると、光っている面は地球と反対を向き、地球からは暗い面が大きく見えるからです。',
    add: fresh(ci(40, 64, 20, '太陽', C.main, FILL.yellow, 10), ar(64, 64, 140, 64, C.main), ci(170, 64, 22, undefined, C.gray, FILL.gray), sc(170, 64, 22, 90, 270, C.main, FILL.yellow), lb(170, 104, '光る面は太陽側', 11, C.red, 'middle', true), ci(285, 64, 16, '地球', C.blue, FILL.blue, 9), ar(206, 64, 264, 64, C.gray, true), lb(240, 46, '暗い面が見える', 11, C.gray, 'middle', true), ...say('近いとき、地球からは暗い面が大きく見える → 細い', C.red, FILL.red, 12)),
  },
  {
    note: '❓遠いとき、なぜ丸く見えるのでしょう。金星が太陽の反対側に回ると、光っている面が太陽のほうにも地球のほうにも向くので、全体が光って見えるからです。ただし、遠いので小さくなります。',
    add: fresh(ci(60, 64, 12, undefined, C.gray, FILL.gray), sc(60, 64, 12, -90, 90, C.main, FILL.yellow), ci(160, 64, 18, '太陽', C.main, FILL.yellow, 9), ar(76, 64, 138, 64, C.gray), ci(285, 64, 16, '地球', C.blue, FILL.blue, 9), ar(180, 64, 262, 64, C.main, true), lb(60, 90, '全体が光って見える', 11, C.red, 'middle', true), ...say('遠いとき、光る面が地球を向く → 丸い（小さい）', C.blue, FILL.blue, 12)),
  },
  {
    note: '火星のような、地球より外側を回る惑星（外惑星）はどうでしょう。地球の外側にあるので、太陽の反対側にも来られます。だから、火星は真夜中に見えることがあります。金星とのちがいです。',
    add: fresh(ci(110, 78, 66, undefined, C.gray, '#FFFFFF'), ci(110, 78, 38, undefined, C.blue, '#FFFFFF'), ci(110, 78, 10, '太陽', C.main, FILL.yellow, 8), ci(148, 78, 6, undefined, C.blue, FILL.blue), ci(176, 78, 6, undefined, C.red, FILL.red), lb(176, 62, '火星', 10, C.red, 'middle', true), lb(148, 94, '地球', 10, C.blue, 'middle', true), ar(156, 78, 168, 78, C.purple), ar(186, 78, 300, 78, C.purple), lb(250, 62, '真夜中の方向', 11, C.purple, 'middle', true), ...say('外惑星は、真夜中に見えることがある', C.purple, FILL.purple)),
  },
  {
    note: '呼び名を整理します。夕方の西の空に見えるのがよいの明星、明け方の東の空に見えるのが明けの明星です。どちらも同じ金星で、地球と金星の位置関係によって、太陽の後ろにつくか前に出るかが変わります。',
    add: fresh(bx(10, 20, 146, 60, '夕方・西の空\nよいの明星', C.red, FILL.red, 13), bx(164, 20, 146, 60, '明け方・東の空\n明けの明星', C.blue, FILL.blue, 13), lb(160, 108, 'どちらも同じ金星', 13, C.ink, 'middle', true), ...say('金星は真夜中には見えない', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめです。金星は内惑星なので、真夜中には見えません。近いほど大きく見えて細く欠け、遠いほど小さく丸く見えます。',
    add: fresh(bx(20, 14, 280, 28, '内惑星 → 真夜中には見えない', C.red, FILL.red, 13), bx(20, 48, 280, 28, '夕方・西 ＝ よいの明星', C.main, FILL.warm, 13), bx(20, 82, 280, 28, '明け方・東 ＝ 明けの明星', C.blue, FILL.blue, 13), bx(20, 116, 280, 28, '近い＝大きく細い／遠い＝小さく丸い', C.green, FILL.green, 12)),
  },
]);

// ══ 太陽と恒星のすがた ══
const sunDisc = (cx: number, cy: number, r: number): E => ci(cx, cy, r, undefined, C.main, FILL.yellow);
const spot = (x: number, y: number, w: number, h = 5): E => pg([[x - w, y], [x, y - h], [x + w, y], [x, y + h]], C.ink, '#6E645C');
const taiyou: DiagramFigure = show([
  {
    note: '太陽は、自分で光を出している天体で、恒星（こうせい）といいます。❓月や惑星とは何がちがうのでしょう。月や惑星は自分では光らず、太陽の光を反射して光って見えます。',
    add: [sunDisc(70, 60, 32), ...[[14, 20, 34, 38], [14, 100, 34, 82]].map(([x1, y1, x2, y2]) => ar(x1, y1, x2, y2, C.main)), ci(240, 60, 22, undefined, C.gray, FILL.gray), sc(240, 60, 22, 90, 270, C.main, FILL.yellow), lb(70, 120, '太陽\n自ら光る（恒星）', 11, C.main, 'middle', true), lb(240, 100, '月・惑星\n反射して光る', 11, C.gray, 'middle', true), ...say('太陽は自ら光る恒星', C.main, FILL.warm)],
  },
  {
    note: '太陽の表面の温度は約6000℃です。表面には、黒い点のような模様が見えることがあります。これが黒点で、温度は約4000℃です。',
    add: fresh(sunDisc(100, 72, 52), spot(84, 58, 6), spot(120, 88, 5), bx(180, 26, 130, 40, '太陽の表面\n約6000℃', C.main, FILL.warm, 13), bx(180, 82, 130, 40, '黒点\n約4000℃', C.ink, FILL.gray, 13), ...say('黒点は、まわりより温度が低い', C.ink, FILL.gray)),
  },
  {
    note: '❓黒点はなぜ黒く見えるのでしょう。まわりより温度が低いからです。温度が低いほど光は弱く暗いので、明るい部分の中にあると黒く見えます。黒点も、本当は光っています。',
    add: fresh(bx(50, 40, 70, 90, '6000℃\n明るい', C.main, FILL.yellow, 13), bx(190, 62, 70, 68, '4000℃\n暗い', C.ink, FILL.gray, 13), lb(85, 26, 'まわり', 12, C.main, 'middle', true), lb(225, 48, '黒点', 12, C.ink, 'middle', true), ...say('温度が低い → 暗い → 黒く見える', C.ink, FILL.gray)),
  },
  {
    note: '黒点を毎日観察すると、少しずつ位置が変わります。東から西へ動いていきます。❓これは何を意味するのでしょう。',
    add: fresh(sunDisc(60, 64, 40), spot(38, 64, 4), sunDisc(160, 64, 40), spot(160, 64, 4), sunDisc(260, 64, 40), spot(282, 64, 4), ar(104, 64, 116, 64, C.red), ar(204, 64, 216, 64, C.red), lb(60, 116, '1日目', 11, C.gray, 'middle', true), lb(160, 116, '数日後', 11, C.gray, 'middle', true), lb(260, 116, 'さらに後', 11, C.gray, 'middle', true), lb(14, 20, '東', 11, C.gray, 'middle', true), lb(306, 20, '西', 11, C.gray, 'middle', true), ...say('黒点は、東から西へ動いていく', C.red, FILL.red)),
  },
  {
    note: '❓黒点が動くと、なぜ太陽が自転していると分かるのでしょう。黒点は太陽の表面にある模様です。模様が同じ向きに移っていくのは、表面ごと太陽が回っているからです。',
    add: fresh(sunDisc(110, 72, 52), spot(80, 72, 5), ar(80, 72, 146, 72, C.red), lb(110, 20, '表面ごと回っている', 11, C.red, 'middle', true), bx(190, 40, 120, 60, '模様が動く\n＝ 太陽が自転', C.red, FILL.red, 13), ...say('黒点が動く ＝ 太陽が自転している証拠', C.red, FILL.red)),
  },
  {
    note: '黒点が同じ位置にもどるまでは約25日です。つまり太陽は、約25日で1回転しています。地球が1日で1回転するのにくらべると、とてもゆっくりです。',
    add: fresh(...flow(['今の位置', '約25日後', '同じ位置'], 30, { h: 50, size: 12, gap: 24 }).flat(), bx(40, 100, 240, 32, '太陽の自転は約25日で1回転', C.red, FILL.red, 13), ...say('地球は1日、太陽は約25日で1回転', C.ink, FILL.yellow)),
  },
  {
    note: '黒点の形にも注目します。太陽の中央では丸く見えますが、ふちに近づくほど、細長くつぶれて見えます。❓これは何を意味するのでしょう。',
    add: fresh(sunDisc(110, 72, 52), spot(110, 72, 5, 5), spot(146, 72, 3.5, 5), spot(160, 72, 1.5, 5), bx(190, 40, 120, 60, '中央：丸い\nふち：つぶれる', C.blue, FILL.blue, 13), ...say('ふちに近いほど、細長くつぶれて見える', C.blue, FILL.blue)),
  },
  {
    note: '❓なぜふちでつぶれて見えるのでしょう。球の表面を、ななめから見るからです。中央は真正面から見るので広く、ふちは斜めから見るのでせまく見えます。平らな円ばんなら、どこでも同じ形のはずです。',
    add: fresh(...((): E[] => { const R = 44, cx = 160, cy = 56; const a = 0; const A: [number, number] = [cx, cy + R]; const ang = (70 * Math.PI) / 180; const B: [number, number] = [cx - R * Math.sin(ang), cy + R * Math.cos(ang)]; const tb: [number, number] = [Math.cos(ang) * 8, Math.sin(ang) * 8]; return [ci(cx, cy, R, undefined, C.main, FILL.yellow), ln(A[0] - 8, A[1], A[0] + 8, A[1], C.red, false, 3), ln(B[0] - tb[0], B[1] - tb[1], B[0] + tb[0], B[1] + tb[1], C.blue, false, 3), ln(A[0] - 8, A[1], A[0] - 8, 132, C.red, true), ln(A[0] + 8, A[1], A[0] + 8, 132, C.red, true), ln(B[0] - tb[0], B[1] - tb[1], B[0] - tb[0], 132, C.blue, true), ln(B[0] + tb[0], B[1] + tb[1], B[0] + tb[0], 132, C.blue, true), ln(80, 132, 250, 132, C.gray), lb(A[0] + 24, 124, '広い', 11, C.red, 'start', true), lb(B[0] - 24, 124, 'せまい', 11, C.blue, 'end', true), ar(270, 148, 270, 122, C.gray), lb(290, 136, '見る向き', 10, C.gray, 'middle')]; })(), ...say('球の表面をななめから見るので、ふちはつぶれる', C.blue, FILL.blue, 12)),
  },
  {
    note: '2つの観察を区別します。黒点が動く → 太陽が自転している。黒点がふちでつぶれる → 太陽が球形である。どちらも黒点から分かりますが、分かることがちがいます。',
    add: fresh(bx(10, 24, 140, 40, '黒点が動く', C.red, FILL.red, 14), ar(150, 44, 170, 44, C.gray), bx(172, 24, 138, 40, '自転している', C.red, FILL.red, 14), bx(10, 84, 140, 40, 'ふちでつぶれる', C.blue, FILL.blue, 14), ar(150, 104, 170, 104, C.gray), bx(172, 84, 138, 40, '球形である', C.blue, FILL.blue, 14), ...say('動く＝自転、つぶれる＝球形', C.ink, FILL.yellow)),
  },
  {
    note: '夜空に見える星の多くは、太陽と同じ恒星です。❓なぜ星は小さな点にしか見えないのでしょう。太陽よりずっと遠くにあるからです。太陽は、いちばん近い恒星なので大きく見えます。',
    add: fresh(sunDisc(60, 70, 34), lb(60, 126, '太陽\n（いちばん近い）', 11, C.main, 'middle', true), ...[[150, 30], [190, 60], [230, 24], [260, 80], [210, 100], [280, 40]].map(([x, y]) => ci(x, y, 2, undefined, C.ink, C.ink)), lb(220, 126, 'ほかの恒星は遠くて点に見える', 11, C.ink, 'middle', true), ...say('太陽も恒星のひとつ。星は遠いので点に見える', C.main, FILL.warm, 12)),
  },
  {
    note: '恒星までの距離は、光年で表します。1光年は、光が1年間に進む距離です。❓光はどれくらい速いのでしょう。1秒間に約30万km、地球を7周半するほどの速さです。',
    add: fresh(ci(70, 70, 34, undefined, C.red, '#FFFFFF'), ci(70, 70, 22, '地球', C.blue, FILL.blue, 11), bx(150, 24, 160, 40, '光は1秒で\n地球を7周半', C.red, FILL.red, 13), bx(150, 78, 160, 40, '1秒で約30万km', C.blue, FILL.blue, 13), ...say('光年は、時間ではなく距離の単位', C.red, FILL.red)),
  },
  {
    note: '❓なぜ光年という単位を使うのでしょう。1年間に光が進む距離は、約9兆5000億kmです。星までの距離はこれよりもずっと大きく、kmで書くと数字が長くなりすぎるからです。',
    add: fresh(bx(20, 20, 280, 34, '1光年 ＝ 約9兆5000億km', C.red, FILL.red, 14), bx(20, 66, 280, 34, '8光年の星 ＝ 光が8年かかって届く', C.blue, FILL.blue, 13), lb(160, 122, 'kmで書くと数字が長すぎる', 12, C.ink, 'middle', true), ...say('大きな距離は、光年でかんたんに表せる', C.ink, FILL.yellow)),
  },
  {
    note: 'まとめです。太陽は自ら光る恒星で、表面は約6000℃、黒点は約4000℃です。黒点の動きから自転、つぶれ方から球形が分かります。恒星までの距離は光年で表します。',
    add: fresh(bx(20, 14, 280, 28, '太陽：自ら光る恒星（表面約6000℃）', C.main, FILL.warm, 12), bx(20, 48, 280, 28, '黒点：約4000℃で低いから黒く見える', C.ink, FILL.gray, 12), bx(20, 82, 280, 28, '動く＝自転、つぶれる＝球形', C.red, FILL.red, 13), bx(20, 116, 280, 28, '光年は距離の単位（光が1年で進む距離）', C.blue, FILL.blue, 12)),
  },
]);

// ══ 太陽系と銀河系 ══
const PL: [string, number, boolean][] = [['水星', 3, true], ['金星', 5, true], ['地球', 5, true], ['火星', 4, true], ['木星', 14, false], ['土星', 12, false], ['天王星', 8, false], ['海王星', 8, false]];
const planetsRow = (names = true, only?: boolean): E[] => PL.flatMap(([n, r, terr], i) => {
  const x = 26 + i * 38;
  if (only !== undefined && terr !== only) return [ci(x, 60, r, undefined, C.gray, FILL.gray)];
  return [ci(x, 60, r, undefined, terr ? C.main : C.blue, terr ? FILL.warm : FILL.blue), ...(names ? [lb(x, 90, n, 9, C.ink, 'middle', true)] : [])];
});
const taiyoukei: DiagramFigure = show([
  {
    note: '太陽のまわりを回る惑星は8つあります。太陽に近い順に、水星・金星・地球・火星・木星・土星・天王星・海王星です。❓この8つは、大きく2つのなかまに分けられます。',
    add: [...planetsRow(), lb(160, 24, '太陽に近い ← → 遠い', 11, C.gray, 'middle', true), ...say('8つの惑星は、2つのなかまに分けられる', C.ink, FILL.yellow)],
  },
  {
    note: '水星・金星・地球・火星は地球型惑星です。岩石でできていて、小さく、密度が大きいのが特徴です。',
    add: fresh(...planetsRow(true, true), bx(20, 108, 130, 30, '地球型：水金地火', C.main, FILL.warm, 12), bx(160, 108, 150, 30, '岩石・小さい・密度大', C.main, FILL.warm, 12), ...say('地球型：岩石でできた小さな惑星', C.main, FILL.warm)),
  },
  {
    note: '木星・土星・天王星・海王星は木星型惑星です。主に気体でできていて、大きく、密度が小さいのが特徴です。',
    add: fresh(...planetsRow(true, false), bx(20, 108, 130, 30, '木星型：木土天海', C.blue, FILL.blue, 12), bx(160, 108, 150, 30, '気体・大きい・密度小', C.blue, FILL.blue, 12), ...say('木星型：主に気体でできた大きな惑星', C.blue, FILL.blue)),
  },
  {
    note: '密度とは、同じ体積あたりの重さです。❓なぜ地球型は密度が大きいのでしょう。岩石はぎっしりつまっていて重いからです。木星型は軽い気体が主なので、大きくても密度は小さくなります。',
    add: fresh(bx(20, 24, 110, 60, '岩石\nぎっしり', C.main, FILL.warm, 14), bx(190, 24, 110, 60, '気体\nスカスカ', C.blue, FILL.blue, 14), lb(75, 108, '密度 大', 13, C.main, 'middle', true), lb(245, 108, '密度 小', 13, C.blue, 'middle', true), lb(160, 54, '同じ体積で\nくらべると', 11, C.gray, 'middle'), ...say('密度 ＝ 重さ ÷ 体積（同じ体積あたりの重さ）', C.ink, FILL.yellow, 12)),
  },
  {
    note: '❓では、なぜ地球型と木星型に分かれたのでしょう。太陽の近くは熱かったので、軽い気体が飛ばされて岩石だけが残りました。遠くは冷たかったので、軽い気体も残り、大きく育ちました。',
    add: fresh(ci(40, 70, 26, '太陽', C.main, FILL.yellow, 11), bx(90, 36, 90, 68, '近い：熱い\n気体が飛ぶ\n岩石が残る', C.main, FILL.warm, 11), bx(200, 36, 110, 68, '遠い：冷たい\n気体が残る\n大きく育つ', C.blue, FILL.blue, 11), ...say('温度のちがいが、惑星のちがいを生んだ', C.ink, FILL.yellow)),
  },
  {
    note: '土星は、水に浮くほど密度が小さいことで有名です。水の密度は1g/cm³、土星の平均は約0.7g/cm³です。❓なぜ浮くのでしょう。同じ体積で比べると、水より軽いからです。',
    add: fresh(bx(90, 70, 140, 64, '水（1g/cm³）', C.blue, FILL.blue, 12), ci(160, 60, 22, '土星\n0.7', C.gray, FILL.gray, 11), ...say('水より密度が小さい → 水に浮く', C.blue, FILL.blue, 12)),
  },
  {
    note: '惑星は、太陽のまわりを同じ向きに公転しています。❓なぜ同じ向きなのでしょう。太陽系は、回転するガスとちりの円ばんから生まれたので、そのまま同じ向きに回っているのです。',
    add: fresh(ci(110, 78, 50, undefined, C.gray, '#FFFFFF'), ci(110, 78, 36, undefined, C.gray, '#FFFFFF'), ci(110, 78, 22, undefined, C.gray, '#FFFFFF'), ci(110, 78, 8, undefined, C.main, FILL.yellow), ...[50, 36, 22].map((r) => ar(110 + 8, 78 - r, 110 - 8, 78 - r, C.red)), lb(240, 60, 'みんな同じ向き\n（北から見て\n反時計まわり）', 12, C.red, 'middle', true), ...say('惑星は同じ向きに公転している', C.red, FILL.red)),
  },
  {
    note: '惑星のまわりを回る天体を衛星といいます。月は地球の衛星です。❓呼び名は何で決まるのでしょう。何を中心に回っているかで決まります。太陽のまわりなら惑星、惑星のまわりなら衛星です。',
    add: fresh(ci(40, 70, 24, '太陽', C.main, FILL.yellow, 11), ar(68, 70, 130, 70, C.gray), ci(150, 70, 14, '地球', C.blue, FILL.blue, 9), ci(150, 70, 30, undefined, C.gray, '#FFFFFF'), ci(150, 70, 14, '地球', C.blue, FILL.blue, 9), ci(180, 70, 5, undefined, C.gray, FILL.gray), lb(190, 112, '月（衛星）', 10, C.gray, 'middle', true), lb(250, 54, '惑星のまわり\n＝ 衛星', 12, C.ink, 'middle', true), lb(250, 96, '太陽のまわり\n＝ 惑星', 12, C.ink, 'middle', true), ...say('入れ子の関係：太陽 → 惑星 → 衛星', C.ink, FILL.yellow)),
  },
  {
    note: '太陽のように自分で光る天体は恒星、惑星は太陽の光を反射して光ります。だから、夜空で光る星のうち、惑星は位置を変えていきますが、恒星は位置が変わらず、点のまま見えます。',
    add: fresh(bx(20, 24, 130, 50, '恒星\n自ら光る（太陽）', C.main, FILL.warm, 12), bx(170, 24, 140, 50, '惑星・衛星\n太陽の光を反射', C.gray, FILL.gray, 12), ...say('光り方のちがい：自ら光る＝恒星、反射＝惑星', C.ink, FILL.yellow, 12)),
  },
  {
    note: '太陽系は、銀河系（天の川銀河）の中にあります。銀河系は、直径が約10万光年もある、たくさんの恒星の集まりです。太陽系は、そのほんの一部です。',
    add: fresh(ci(100, 76, 66, undefined, C.purple, FILL.purple), ci(136, 92, 3, undefined, C.main, FILL.yellow), lb(100, 40, '銀河系', 13, C.purple, 'middle', true), bx(190, 26, 120, 40, '銀河系\n直径 約10万光年', C.purple, FILL.purple, 12), bx(190, 84, 120, 40, '太陽系は\nその中の一部', C.main, FILL.warm, 12), ...say('太陽系は銀河系の中にある', C.purple, FILL.purple)),
  },
  {
    note: 'まとめです。地球型は小さく密度が大きく、木星型は大きく密度が小さい。土星は水より密度が小さい。惑星は同じ向きに公転し、衛星は惑星のまわりを回ります。',
    add: fresh(bx(20, 14, 280, 28, '地球型：水金地火・岩石・小さい・密度大', C.main, FILL.warm, 12), bx(20, 48, 280, 28, '木星型：木土天海・気体・大きい・密度小', C.blue, FILL.blue, 12), bx(20, 82, 280, 28, '土星は水より密度が小さい（浮く）', C.gray, FILL.gray, 12), bx(20, 116, 280, 28, '衛星＝惑星のまわりを回る（月は地球の）', C.green, FILL.green, 12)),
  },
]);

export const DIAGRAMS_KOKO_RIKA_OLD_G: Record<string, DiagramFigure> = {
  '露点と飽和水蒸気量': routen,
  '雲のでき方と上昇気流': kumo,
  '前線の通過と天気の変化': zensen,
  '気圧配置と日本の四季': kiatsu,
  '大気の動きと海陸風': kaigyo,
  '天体の日周運動と地球の自転': nisshu,
  '星の年周運動と地球の公転': nenshu,
  '季節の変化と南中高度': kisetsu,
  '月の満ち欠けと位置関係（中学）': tsuki,
  '金星の見え方': kinsei,
  '太陽と恒星のすがた': taiyou,
  '太陽系と銀河系': taiyoukei,
};
