// 中学受験 社会（教科書単元 shakai_01〜13）に、図解のなかった単元へ「動く図解」を1つずつ。
// 「なぜ？」の連鎖で、7枚以上。キーは 'xf_<単元id>'、結び先は '<単元id>#<節の番号>'。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];

// 下の帯（y=160 から）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 160, 292, 16 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い → 答え、の1組
const qa = (q: string, a: string, c: Col = BLUE, aSize = 13): DiagramElement[] => [
  bx(12, 8, 296, 40, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
  ar(160, 50, 160, 66, PURPLE[0]),
  bx(12, 68, 296, 74, a, c[0], c[1], aSize),
];

// 箱を矢印でつないだ横一列
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap: 14 }).flat();

// 横にならべた箱（矢印なし）
const cols = (labels: string[], y: number, h: number, cs: Col[], size = 12, pad = 8, gap = 8): DiagramElement[] => {
  const w = (320 - pad * 2 - gap * (labels.length - 1)) / labels.length;
  return labels.map((t, i) => bx(pad + i * (w + gap), y, w, h, t, cs[i % cs.length][0], cs[i % cs.length][1], size));
};

// ── 日本の気候 ──
const kBase = (): DiagramElement[] => [
  bx(6, 96, 52, 34, '大陸\n冷たい', C.gray, FILL.gray, 10),
  bx(60, 112, 84, 18, '日本海', C.blue, FILL.blue, 10),
  pg([[148, 130], [184, 66], [220, 130]], C.main, FILL.warm),
  lb(184, 114, '山地', 11, C.main, 'middle', true),
  bx(222, 112, 92, 18, '太平洋側', C.green, FILL.green, 10),
];
const kikou = show([
  S('日本には、気候（きこう）のちがう6つの地域があります。ここでは、なぜ冬に日本海側（にほんかいがわ）だけ雪がたくさん降るのか、なぜ瀬戸内（せとうち）は雨が少ないのか、を順に考えます。',
    [...cols(['太平洋側\n夏に雨が多い', '日本海側\n冬に雪が多い', '中央高地\n夏すずしい'], 14, 50, [BLUE, GREEN, PURPLE], 11, 10, 8),
     ...cols(['瀬戸内\n晴れが多い', '南西諸島\n一年中あたたかい', '北海道\n梅雨（つゆ）がない'], 72, 50, [MAIN, RED, GRAY], 11, 10, 8)],
    '日本の気候は6つに分けられる', BLUE),
  S('なぜ、冬の日本海側（にほんかいがわ）は雪が多いの？→ 冬は、ユーラシア大陸（たいりく）から冷たい北西の季節風（きせつふう）がふいてくるからです。季節風は、季節によって向きがかわる風のことです。',
    [...kBase(), ar(14, 92, 166, 92, C.blue), lb(90, 80, '北西の季節風（冬）', 10, C.blue, 'middle', true)],
    '冬は大陸から冷たい北西の風がふく', BLUE),
  S('では、なぜその風が雪をつれてくるの？→ 大陸の風はかわいていますが、日本海の上を通るあいだに、あたたかい海から水蒸気（すいじょうき）をたっぷり吸いこみます。水蒸気は雲のもとです。',
    [...kBase(), ar(14, 92, 166, 92, C.blue), lb(90, 80, '北西の季節風（冬）', 10, C.blue, 'middle', true),
     ar(80, 112, 80, 98, C.blue, true), ar(110, 112, 110, 98, C.blue, true), ar(140, 112, 140, 98, C.blue, true), lb(52, 104, '水蒸気', 10, C.blue, 'middle')],
    '日本海の上で、風が水蒸気をふくむ', BLUE),
  S('では、なぜ雪になるの？→ 風が山地（さんち）にぶつかると、上へおし上げられます。高いところほど寒いので、水蒸気が冷えて雪になり、山の手前（日本海側）にどっさり降ります。',
    [...kBase(), ar(14, 92, 166, 92, C.blue), ar(166, 92, 190, 54, C.blue), bx(120, 22, 70, 22, '雲', C.gray, FILL.gray, 11),
     lb(140, 58, '雪 雪 雪', 12, C.red, 'middle', true), lb(132, 146, '日本海側', 10, C.red, 'middle', true)],
    '山でおし上げられて冷える → 日本海側に雪', RED),
  S('では、山をこえた太平洋側（たいへいようがわ）は？→ 水分を山で落としてしまったので、かわいた風になって下りてきます。だから冬の太平洋側は、晴れてかわいた日が多いのです。',
    [...kBase(), ar(14, 92, 166, 92, C.blue), ar(166, 92, 190, 54, C.blue), ar(190, 54, 280, 92, C.blue, true),
     lb(250, 60, 'かわいた風', 11, C.blue, 'middle', true), lb(268, 146, '太平洋側は冬も晴れ', 10, C.green, 'middle', true), lb(132, 146, '日本海側は雪', 10, C.red, 'middle', true)],
    '山をこえると、かわいた風 → 太平洋側は冬に晴れ', GREEN),
  S('では、夏はどうなるの？→ 夏は風の向きが逆になり、南東の季節風が太平洋からふきます。太平洋の水蒸気をたっぷりふくむので、太平洋側に雨が多くなります。',
    [...kBase(), ar(310, 92, 226, 92, C.blue), ar(226, 92, 198, 54, C.blue), lb(262, 80, '南東の季節風（夏）', 10, C.blue, 'middle', true),
     bx(150, 22, 70, 22, '雲', C.gray, FILL.gray, 11), lb(268, 146, '太平洋側は夏に雨', 10, C.green, 'middle', true)],
    '夏は南東の風 → 太平洋側が多雨', GREEN),
  S('では、なぜ瀬戸内（せとうち）は雨が少ないの？→ 北は中国山地（ちゅうごくさんち）、南は四国山地（しこくさんち）が、季節風をさえぎるからです。どちらの風も、雨雲が山で止まってしまい、瀬戸内にとどきません。',
    [pg([[10, 130], [60, 60], [110, 130]], C.main, FILL.warm), lb(60, 112, '中国山地', 10, C.main, 'middle', true),
     pg([[210, 130], [260, 60], [310, 130]], C.main, FILL.warm), lb(260, 112, '四国山地', 10, C.main, 'middle', true),
     bx(112, 112, 96, 18, '瀬戸内', C.blue, FILL.blue, 10), ar(14, 40, 56, 40, C.blue), ar(306, 40, 264, 40, C.blue),
     lb(160, 70, '雨雲は山で\n止まる', 11, C.blue, 'middle', true), lb(160, 146, '高松市の雨は年約1,100mm', 10, C.main, 'middle')],
    '山にはさまれて雨雲がとどかない → 少雨', MAIN),
  S('まとめ。冬の日本海側が雪ぶかいのも、夏の太平洋側が雨ぶかいのも、季節風が水蒸気を運んで山にぶつかるから。瀬戸内が少雨なのは、両がわの山地が風をさえぎるからです。',
    [bx(10, 10, 140, 54, '日本海側\n冬：北西風＋日本海\n→ 大雪', C.red, FILL.red, 11), bx(170, 10, 140, 54, '太平洋側\n夏：南東風＋太平洋\n→ 多雨', C.green, FILL.green, 11),
     bx(10, 80, 140, 54, '瀬戸内\n山地が風をさえぎる\n→ 少雨', C.main, FILL.warm, 11), bx(170, 80, 140, 54, '南西諸島・北海道\n亜熱帯／梅雨なし', C.purple, FILL.purple, 11)],
    '気候 ＝ 季節風 × 海 × 山', MAIN),
], '日本の気候は季節風と山で決まる');
export const _T = { kikou }; // TEMP
