// 中学受験 英語（小4〜小5）の単元に、動く図解スライドを1つずつ（TAG=ceb）。
// 「なぜ？」の連鎖で7枚以上。上半分に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramFigure, DiagramElement } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, band, fresh } from './diagram-kit';
import type { Slide } from './diagram-kit';

type E = DiagramElement;
type Mark = Record<number, [string, string]>;

const cap = (t: string, color: string = C.ink, size = 12): E[] => band(150, lb(160, 190, t, size, color, 'middle', true));
const cap2 = (t1: string, t2: string, color: string, fill: string): E[] =>
  band(150, lb(160, 165, t1, 11, C.gray, 'middle'), bx(20, 178, 280, 46, t2, color, fill, 13));
/** 図を足して、下の帯を書きかえる。 */
const S = (note: string, top: E[], c: E[]): Slide => ({ note, add: [...top, ...c] });
/** 画面全体を白紙にして、新しい図に切りかえる。 */
const F = (note: string, top: E[], c: E[]): Slide => ({ note, add: [...fresh(...top), ...c] });
const head = (t: string, color: string = C.ink, y = 14): E => lb(160, y, t, 12, color, 'middle', true);

/** 英単語を1文字ずつの箱にして中央そろえで並べる。mark で文字ごとに色を変える。 */
const tiles = (word: string, cx: number, y: number, o?: { w?: number; h?: number; size?: number; gap?: number; mark?: Mark; base?: [string, string] }): E[] => {
  const w = o?.w ?? 22;
  const h = o?.h ?? 26;
  const gap = o?.gap ?? 2;
  const n = word.length;
  const total = n * w + (n - 1) * gap;
  const x0 = cx - total / 2;
  const base = o?.base ?? [C.gray, FILL.gray];
  return [...word].map((ch, i) => {
    const m = o?.mark?.[i] ?? base;
    return bx(x0 + i * (w + gap), y, w, h, ch, m[0], m[1], o?.size ?? 15);
  });
};
const BL: [string, string] = [C.blue, FILL.blue];
const RD: [string, string] = [C.red, FILL.red];
const GR: [string, string] = [C.green, FILL.green];
const PU: [string, string] = [C.purple, FILL.purple];
const YE: [string, string] = [C.main, FILL.yellow];
/** 範囲 [a,b] の文字に同じ色をつける。 */
const rng = (a: number, b: number, m: [string, string], into: Mark = {}): Mark => {
  for (let i = a; i <= b; i++) into[i] = m;
  return into;
};
/** 横に等間隔の箱を並べる。 */
const rowb = (texts: string[], y: number, h: number, color: string, fill: string, size = 12, x0 = 10, x1 = 310, gap = 6): E[] => {
  const n = texts.length;
  const w = (x1 - x0 - gap * (n - 1)) / n;
  return texts.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, color, fill, size));
};
/** 左右に「語」と「ひとこと」を並べた表の1行。 */
const trow = (y: number, left: string, right: string, color: string, fill: string, lw = 96, h = 24, size = 12): E[] => [
  bx(14, y, lw, h, left, color, fill, size),
  bx(14 + lw + 6, y, 292 - lw - 6, h, right, C.gray, '#FFFFFF', size - 1),
];
/** 語の下に音（ひとこと）を矢印でつなぐ。 */
const sound = (cx: number, y: number, t: string, color: string, fill: string, w = 70): E[] => [
  ar(cx, y, cx, y + 16, color),
  bx(cx - w / 2, y + 18, w, 24, t, color, fill, 12),
];
/** ×と○を並べる（左が×、右が○）。 */
const ng = (x: number, y: number, w: number, t: string): E[] => [bx(x, y, w, 30, t, C.red, FILL.red, 13), lb(x + w / 2, y - 7, '×', 12, C.red, 'middle', true)];
const ok = (x: number, y: number, w: number, t: string): E[] => [bx(x, y, w, 30, t, C.green, FILL.green, 13), lb(x + w / 2, y - 7, '○', 12, C.green, 'middle', true)];
/** ×の語 → ○の語 を横に並べた1行。 */
const pair = (y: number, bad: string, good: string, w0 = 120): E[] => {
  const w = Math.min(w0, 134);
  return [
    bx(14, y, w, 24, bad, C.red, FILL.red, 12),
    ar(14 + w + 4, y + 12, 306 - w - 4, y + 12, C.gray),
    bx(306 - w, y, w, 24, good, C.green, FILL.green, 12),
  ];
};
/** ×の文 → ○の文 を縦に並べた2段（長い文用）。 */
const vpair = (y: number, bad: string, good: string): E[] => [
  bx(14, y, 292, 26, bad, C.red, FILL.red, 13),
  ar(160, y + 28, 160, y + 40, C.gray),
  bx(14, y + 42, 292, 26, good, C.green, FILL.green, 13),
];
/** tiles の上に 1,2,3… の番号をふる。 */
const nums = (n: number, cx: number, y: number, w = 22, gap = 2): E[] => {
  const x0 = cx - (n * w + (n - 1) * gap) / 2;
  return Array.from({ length: n }, (_, i) => lb(x0 + i * (w + gap) + w / 2, y, String(i + 1), 9, C.gray, 'middle'));
};
/** 音節の区切り：左に語、右へ音節の箱をならべる。 */
const sylrow = (y: number, word: string, parts: string[], color: string, fill: string, bw = 56, x0 = 84): E[] => [
  lb(x0 - 8, y + 14, word, 12, C.ink, 'end', true),
  ...parts.map((p, i) => bx(x0 + i * (bw + 4), y, bw, 28, p, color, fill, 12)),
  ci(300, y + 14, 12, String(parts.length), C.main, FILL.yellow, 12),
];
/** 左の箱 → 右の箱（青 → 緑）。 */
const arow = (y: number, left: string, right: string, lw = 150, size = 12): E[] => [
  bx(14, y, lw, 26, left, C.blue, FILL.blue, size),
  ar(14 + lw + 2, y + 13, 14 + lw + 24, y + 13, C.gray),
  bx(14 + lw + 26, y, 292 - lw - 26, 26, right, C.green, FILL.green, size),
];
/** 文の部品（S・V・M など）を横に並べる。parts は [文字, 種類, 幅] */
const svm = (y: number, parts: [string, 'S' | 'V' | 'M' | 'X', number][], x0 = 10, h = 28): E[] => {
  let x = x0;
  const out: E[] = [];
  for (const [t, k, w] of parts) {
    const col: [string, string] = k === 'S' ? [C.blue, FILL.blue] : k === 'V' ? [C.red, FILL.red] : k === 'M' ? [C.gray, FILL.gray] : [C.green, FILL.green];
    out.push(bx(x, y, w, h, t, col[0], col[1], 12));
    x += w + 4;
  }
  return out;
};

// ───────── eigo_s019 二重子音字①：sh と ch ─────────
const s019: DiagramFigure = show([
  S('「she」の sh は、s と h を別々に読むのでしょうか。いいえ、sh は2文字で1つの音「シュ」です。このように2文字で1つの音を表すつづりを二重子音字（にじゅうしいんじ）といいます。fish は文字が4つ、音は3つです。',
    [...tiles('fish', 160, 22, { mark: rng(2, 3, BL) }), ln(162, 52, 206, 52, C.blue), ar(124, 50, 124, 76, C.gray), ar(148, 50, 148, 76, C.gray), ar(184, 52, 184, 76, C.blue),
      ci(124, 90, 12, 'f', C.gray, FILL.gray), ci(148, 90, 12, 'i', C.gray, FILL.gray), ci(184, 90, 16, 'sh', C.blue, FILL.blue), lb(160, 126, '文字は4つ、音は3つ', 12, C.ink, 'middle', true)],
    cap('sh ＝ 2文字で1つの「シュ」', C.blue)),
  F('ch も同じです。lunch は文字が5つで、l・u・n・ch の4つの音です。ch は「チ」と読みます。',
    [...tiles('lunch', 160, 22, { mark: rng(3, 4, RD) }), ln(186, 52, 222, 52, C.red), ar(112, 50, 112, 76, C.gray), ar(136, 50, 136, 76, C.gray), ar(160, 50, 160, 76, C.gray), ar(204, 52, 204, 76, C.red),
      ci(112, 90, 12, 'l', C.gray, FILL.gray), ci(136, 90, 12, 'u', C.gray, FILL.gray), ci(160, 90, 12, 'n', C.gray, FILL.gray), ci(204, 90, 16, 'ch', C.red, FILL.red), lb(160, 126, '文字は5つ、音は4つ', 12, C.ink, 'middle', true)],
    cap('ch ＝ 2文字で1つの「チ」', C.red)),
  F('❓では、watch はなぜ ch ではなく tch と3文字も使うのでしょう。→ 手がかりは、直前の母音（ぼいん）です。watch の a は短い母音、teach の ea は長い母音です。',
    [head('watch と teach をくらべる'), ...tiles('watch', 80, 34, { w: 20, mark: { 1: RD, 2: YE, 3: YE, 4: YE } }), ...tiles('teach', 240, 34, { w: 20, mark: { 1: GR, 2: GR, 3: YE, 4: YE } }),
      lb(80, 80, 'a ＝ 短い母音', 11, C.red, 'middle', true), lb(240, 80, 'ea ＝ 長い母音', 11, C.green, 'middle', true),
      bx(40, 96, 80, 26, 'tch で書く', C.main, FILL.yellow, 12), bx(200, 96, 80, 26, 'ch で書く', C.main, FILL.yellow, 12)],
    cap('どちらも「チ」の音')),
  F('❓どんなときに tch を使うのでしょう。→ 3つがそろったときです。①語の終わり ②「チ」の音 ③直前が短い母音1字。watch・catch・match・witch が仲間です。',
    [...rowb(['① 語の終わり', '② 「チ」の音', '③ 短い母音\n1字のあと'], 14, 42, C.blue, FILL.blue, 12), ar(160, 60, 160, 80, C.main), bx(110, 82, 100, 28, 'tch', C.main, FILL.yellow, 16), lb(160, 128, 'watch  catch  match  witch', 12, C.ink, 'middle', true)],
    cap('3つそろったら tch', C.main)),
  F('❓長い母音や子音（しいん）のあとはどうでしょう。→ ch のままです。teach・beach は ea が長い母音、lunch・bench・March は n や r が子音です。',
    [head('ch のままの場合'), ...trow(28, '長い母音のあと', 'teach   beach', C.green, FILL.green, 110), ...trow(58, '子音のあと', 'lunch   bench   March', C.green, FILL.green, 110), ...trow(96, '短い母音1字のあと', 'watch   catch  → tch', C.red, FILL.red, 110)],
    cap('短い母音1字のあとだけ tch', C.red)),
  F('同じきまりが、「ク」の音を表す ck にもあります。back・clock・duck は短い母音のあとなので ck。book・week は長い母音、milk は子音のあとなので k だけです。',
    [head('「ク」の音 ck も同じきまり'), ...trow(28, '短い母音のあと', 'back   clock   duck → ck', C.red, FILL.red, 110), ...trow(58, '長い母音のあと', 'book   week → k だけ', C.green, FILL.green, 110), ...trow(88, '子音のあと', 'milk   think → k だけ', C.green, FILL.green, 110)],
    cap('tch と ck は同じ考え方', C.main)),
  F('❓ch はいつも「チ」でしょうか。→ いいえ。ギリシャ語からきた語では「ク」と読みます（school・Christmas・stomach）。フランス語からきた machine や chef では「シュ」です。',
    [ci(160, 40, 22, 'ch', C.main, FILL.yellow, 16), ar(140, 58, 70, 86, C.blue), ar(160, 62, 160, 86, C.green), ar(180, 58, 250, 86, C.red),
      bx(14, 88, 92, 26, 'チ  chair lunch', C.blue, FILL.blue, 11), bx(114, 88, 92, 26, 'ク  school', C.green, FILL.green, 11), bx(214, 88, 92, 26, 'シュ  machine', C.red, FILL.red, 11), lb(160, 128, 'ch は「チ・ク・シュ」の3通り', 12, C.ink, 'middle', true)],
    cap('school は「スクール」', C.green)),
  F('まとめです。sh は「シュ」、ch は「チ」。語の終わりの「チ」は、短い母音1字のあとなら tch です。watch を wach と書かないように、「短い音のあとの語末のチは tch」と唱えましょう。',
    [bx(20, 14, 280, 30, 'sh ＝ シュ（she, fish）', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, 'ch ＝ チ（chair, lunch）', C.red, FILL.red, 13), bx(20, 90, 280, 30, '短い母音1字のあとの語末は tch（watch）', C.main, FILL.yellow, 12)],
    cap('wach ✕  →  watch ○', C.green)),
], '二重子音字：sh・ch・tch');

// ───────── eigo_s020 二重子音字②：ph・ck・ng ─────────
const s020: DiagramFigure = show([
  S('phone の ph には f が1文字もないのに、「フォン」と読みます。ph は2文字で f と同じ音「フ」を表すつづりです。',
    [...tiles('phone', 160, 22, { mark: rng(0, 1, BL) }), ln(101, 52, 147, 52, C.blue), ar(124, 54, 124, 76, C.blue), bx(76, 78, 96, 28, 'f と同じ音', C.blue, FILL.blue, 12)],
    cap('ph ＝ f の音', C.blue)),
  F('❓なぜ f と書かないのでしょう。→ もともとギリシャ語の文字を写した名残（なごり）だからです。理由は覚えなくてよく、「ph は f の音」「ギリシャ語系の語に多い」ことだけ覚えます。',
    [head('ph ＝ f の音（ギリシャ語系の語に多い）', C.blue), ...trow(28, 'phone', '電話（でんわ）', C.blue, FILL.blue), ...trow(56, 'photo', '写真（しゃしん）', C.blue, FILL.blue), ...trow(84, 'elephant', 'ゾウ', C.blue, FILL.blue), ...trow(112, 'dolphin', 'イルカ', C.blue, FILL.blue)],
    cap('ph は2文字で f の音', C.blue)),
  F('次は ck です。black の ck は2文字で「ク」の音1つ。b・l・a・ck の4つの音です。',
    [...tiles('black', 160, 22, { mark: rng(3, 4, RD) }), ln(186, 52, 222, 52, C.red), ar(112, 50, 112, 76, C.gray), ar(136, 50, 136, 76, C.gray), ar(160, 50, 160, 76, C.gray), ar(204, 52, 204, 76, C.red),
      ci(112, 90, 12, 'b', C.gray, FILL.gray), ci(136, 90, 12, 'l', C.gray, FILL.gray), ci(160, 90, 12, 'a', C.gray, FILL.gray), ci(204, 90, 16, 'ck', C.red, FILL.red), lb(160, 126, '文字は5つ、音は4つ', 12, C.ink, 'middle', true)],
    cap('ck ＝ 2文字で1つの「ク」', C.red)),
  F('❓いつ ck を使い、いつ k だけでしょう。→ 短い母音1字のすぐあとの、語の終わりだけ ck です。back・clock・duck は ck。book・week は長い母音のあと、milk・bank は子音（しいん）のあとなので k だけです。tch と同じきまりです。',
    [head('ck と k の使い分け'), ...trow(28, '短い母音のあと', 'back   clock   duck → ck', C.red, FILL.red, 110), ...trow(58, '長い母音のあと', 'book   week   look → k', C.green, FILL.green, 110), ...trow(88, '子音のあと', 'milk   bank   think → k', C.green, FILL.green, 110)],
    cap('black を blak と書かない', C.red)),
  F('ng は「ン」と「グ」の2つではなく、鼻に息をぬく1つの音です。sing は s・i・ng の3つの音です。',
    [...tiles('sing', 160, 22, { mark: rng(2, 3, PU) }), ln(162, 52, 206, 52, C.purple), ar(124, 50, 124, 76, C.gray), ar(148, 50, 148, 76, C.gray), ar(184, 52, 184, 76, C.purple),
      ci(124, 90, 12, 's', C.gray, FILL.gray), ci(148, 90, 12, 'i', C.gray, FILL.gray), ci(184, 90, 16, 'ng', C.purple, FILL.purple), lb(160, 126, 'ng は鼻にぬける1つの音', 12, C.ink, 'middle', true)],
    cap('ng ＝ 「ン」＋「グ」ではない', C.purple)),
  F('❓-ing の形はどうでしょう。→ 同じです。play に ing を付けた playing の ng も1つの鼻の音で、「イ・ン・グ」と3つに切りません。running・going も同じです。',
    [...tiles('play', 90, 20, { w: 20 }), lb(150, 33, '＋', 16, C.ink, 'middle', true), ...tiles('ing', 210, 20, { w: 20, mark: { 1: PU, 2: PU } }), ar(160, 52, 160, 70, C.main),
      bx(20, 72, 86, 26, 'playing', C.purple, FILL.purple, 12), bx(117, 72, 86, 26, 'running', C.purple, FILL.purple, 12), bx(214, 72, 86, 26, 'going', C.purple, FILL.purple, 12), lb(160, 118, '「イ・ン・グ」と3つに切らない', 12, C.red, 'middle', true)],
    cap('-ing の ng も1つの音', C.purple)),
  F('nk も仲間です。think・thank・pink の n の部分は、ng と同じ鼻の音になります。',
    [...tiles('think', 80, 24, { w: 20, mark: { 3: PU, 4: BL } }), ...tiles('thank', 240, 24, { w: 20, mark: { 3: PU, 4: BL } }), ...tiles('pink', 160, 76, { w: 20, mark: { 2: PU, 3: BL } }),
      lb(160, 124, 'n ＝ 鼻の音（紫）  ＋  k', 12, C.purple, 'middle', true)],
    cap('nk ＝ 鼻の音 ＋ k', C.purple)),
  F('語の中の ng には、g の音がもう1つ聞こえる語（finger・England・angry）と、聞こえない語（singer・ringing）があります。入試には出ませんが、音読のときに知っていると自然に読めます。',
    [bx(14, 20, 140, 60, 'finger\nEngland\nangry', C.purple, FILL.purple, 12), bx(166, 20, 140, 60, 'singer\nringing', C.blue, FILL.blue, 12), lb(84, 98, 'ng のあとに g の音も出る', 11, C.purple, 'middle', true), lb(236, 98, 'g の音は出ない', 11, C.blue, 'middle', true)],
    cap('音読のときの豆知識', C.gray)),
  F('まとめです。ph は f の音、ck は「ク」（短い母音のあとの語末）、ng は鼻にぬける1つの音。photo を「プホト」と読んだり、black を blak と書いたりしないようにしましょう。',
    [bx(20, 14, 280, 30, 'ph ＝ f の音（photo, phone）', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, 'ck ＝ 「ク」（短い母音のあとの語末）', C.red, FILL.red, 13), bx(20, 90, 280, 30, 'ng ＝ 鼻にぬける1つの音（sing）', C.purple, FILL.purple, 13)],
    cap('二重子音字は「2文字で1音」', C.main)),
], '二重子音字：ph・ck・ng');

// ───────── eigo_s022 二重子音字④：wh と qu ─────────
const s022: DiagramFigure = show([
  S('疑問詞（ぎもんし）には wh で始まる語がたくさんあります。what・when・where・who・why、そして how で、まとめて「5W1H」といいます。how だけは wh で始まりません。',
    [head('5W1H'), ...rowb(['what\n何', 'when\nいつ', 'where\nどこ'], 28, 40, C.blue, FILL.blue, 12), ...rowb(['who\nだれ', 'why\nなぜ', 'how\nどのように'], 76, 40, C.blue, FILL.blue, 12)],
    cap('疑問詞は文の最初に置く', C.blue)),
  F('❓wh はどう読むのでしょう。→ h は読まず、w だけの音になるのがふつうです。what・when・where・which・why・white・whale が仲間です。',
    [...tiles('what', 160, 22, { mark: { 0: BL, 1: RD } }), lb(160, 66, 'h は読まない → w の音だけ', 12, C.red, 'middle', true), ...trow(80, 'wh ＝ w', 'what  when  where  which  why', C.blue, FILL.blue, 70, 24, 11), ...trow(110, 'ほかにも', 'white（白い）  whale（クジラ）', C.blue, FILL.blue, 70, 24, 11)],
    cap('wh の基本は w の音', C.blue)),
  F('❓では、who はどう読むのでしょう。→ who だけは逆で、w を読まずに h の音になります。who（フー）・whose・whom・whole の4語です。whole（全体の）と hole（あな）は同じ発音です。',
    [...tiles('who', 160, 22, { mark: { 0: RD, 1: GR, 2: GR } }), lb(160, 66, 'w を読まない → 「フー」', 12, C.red, 'middle', true), bx(30, 82, 260, 30, 'who  whose  whom  whole', C.red, FILL.red, 14), lb(160, 128, 'この4語だけが例外', 12, C.ink, 'middle', true)],
    cap('who は「フー」', C.red)),
  F('同じ発音で意味がちがう組もあります。where（どこ）と wear（着る）、which（どちら）と witch（魔女）、whole と hole です。つづりで見分けます。',
    [head('同じ発音の別の語'), ...trow(28, 'where', 'wear（着る）', C.purple, FILL.purple), ...trow(58, 'which', 'witch（魔女）', C.purple, FILL.purple), ...trow(88, 'whole', 'hole（あな）', C.purple, FILL.purple)],
    cap('文の意味でえらぶ', C.purple)),
  F('次は qu です。q は必ず u とセットで qu と書き、「クゥ」という音になります。question・quiet・quick・queen・quiz・quarter・square が仲間です。',
    [...tiles('queen', 160, 22, { mark: { 0: BL, 1: BL } }), ln(101, 52, 147, 52, C.blue), ar(124, 54, 124, 74, C.blue), bx(84, 76, 80, 26, 'qu ＝ クゥ', C.blue, FILL.blue, 12), lb(160, 126, 'q だけで終わる語はない', 12, C.ink, 'middle', true)],
    cap('q のあとには必ず u', C.blue)),
  F('❓quiet と quite はどうちがうのでしょう。→ i と t の順番が入れかわっているだけで、意味がちがいます。quiet は「静かな」、quite は「かなり」です。',
    [head('つづりがよく似た2語'), ...tiles('quiet', 80, 34, { w: 20, mark: { 3: RD, 4: RD } }), ...tiles('quite', 240, 34, { w: 20, mark: { 3: RD, 4: RD } }), lb(80, 78, '静かな', 12, C.ink, 'middle', true), lb(240, 78, 'かなり・まったく', 12, C.ink, 'middle', true),
      bx(14, 92, 140, 28, 'Be quiet.', C.blue, FILL.blue, 12), bx(166, 92, 140, 28, 'It is quite cold.', C.blue, FILL.blue, 12)],
    cap('i と t の順番に注意', C.red)),
  F('疑問詞は文の最初に置きます。What is this?（これは何ですか）、Where do you live?（どこに住んでいますか）、Who is that boy?（あの男の子はだれですか）。つづり・意味・使い方をセットで覚えましょう。',
    [bx(14, 14, 292, 28, 'What is this?', C.blue, FILL.blue, 13), bx(14, 52, 292, 28, 'Where do you live?', C.blue, FILL.blue, 13), bx(14, 90, 292, 28, 'Who is that boy?', C.blue, FILL.blue, 13)],
    cap('疑問詞を文のはじめに', C.blue)),
  F('まとめです。wh はふつう w の音、who・whose・whom・whole だけは h の音。q は必ず u とセットの qu で、「クゥ」。quiet と quite の書き分けにも気をつけます。',
    [bx(20, 14, 280, 30, 'wh ＝ w の音（what, when）', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, 'who・whose・whom・whole ＝ h の音', C.red, FILL.red, 13), bx(20, 90, 280, 30, 'qu ＝ クゥ（question, quick）', C.purple, FILL.purple, 13)],
    cap('例外は4語だけ', C.main)),
], '二重子音字：wh と qu');

// ───────── eigo_s023 読まない文字①：kn・wr・語末の -mb ─────────
const s023: DiagramFigure = show([
  S('know の k は、書くのに読みません。「ノウ」と読みます。このように書くのに読まない文字をサイレントレター（黙字（もくじ））といいます。',
    [...tiles('know', 160, 22, { mark: { 0: RD } }), bx(60, 62, 84, 24, 'k：読まない', C.red, FILL.red, 11), bx(156, 62, 100, 24, '「ノウ」と読む', C.blue, FILL.blue, 12), lb(160, 118, '書き取りでは k を落としやすい', 12, C.ink, 'middle', true)],
    cap('know ＝ k は読まない', C.red)),
  F('同じ形の仲間をまとめて覚えます。語の最初の kn は k を読まず、wr は w を読まず、語の終わりの -mb は b を読みません。',
    [head('3つのパターン'), ...trow(26, 'kn（k は読まない）', 'knife  knee  knock  knot', C.red, FILL.red, 110), ...trow(56, 'wr（w は読まない）', 'write  wrong  wrist  wrap', C.red, FILL.red, 110), ...trow(86, '-mb（b は読まない）', 'climb  lamb  thumb  comb', C.red, FILL.red, 110)],
    cap('読まない文字をふくめて書く', C.red)),
  F('❓なぜ読まないのに書くのでしょう。→ 昔の英語では、これらの文字も実際に発音されていたからです。発音だけが時代とともに変わり、つづりは昔のまま残りました。',
    [bx(20, 18, 130, 44, '昔の英語\nk も発音した', C.gray, FILL.gray, 12), ar(152, 40, 168, 40, C.main), bx(170, 18, 130, 44, 'いまの英語\n音だけ変わった', C.blue, FILL.blue, 12), bx(20, 78, 280, 30, 'つづりは昔のまま残った', C.main, FILL.yellow, 13)],
    cap('だから音から書けない', C.main)),
  F('❓では、どうやって覚えればよいでしょう。→ 理由を考えても今の音とはつながらないので、同じ形の仲間でまとめて覚えるのがいちばん速いです。write は「ライト」と読みます。',
    [...tiles('write', 160, 22, { mark: { 0: RD } }), bx(112, 62, 96, 26, '「ライト」', C.blue, FILL.blue, 13), lb(160, 110, 'kn ・ wr ・ -mb の形を見たら', 12, C.ink, 'middle', true), lb(160, 128, '最初（語末）の文字を読まない', 12, C.red, 'middle', true)],
    cap('仲間でまとめて覚える', C.main)),
  F('サイレントレターのせいで、発音が同じ別の語ができます。know と no、write と right、knight と night、knew と new、hour と our、whole と hole。聞き取りでは意味から決めます。',
    [head('発音が同じ組'), ...trow(26, 'know', 'no（いいえ）', C.purple, FILL.purple, 90, 22, 11), ...trow(50, 'write', 'right（右・正しい）', C.purple, FILL.purple, 90, 22, 11), ...trow(74, 'knight', 'night（夜）', C.purple, FILL.purple, 90, 22, 11), ...trow(98, 'knew', 'new（新しい）', C.purple, FILL.purple, 90, 22, 11), ...trow(122, 'hour', 'our（私たちの）', C.purple, FILL.purple, 90, 22, 11)],
    cap('音は同じ、つづりはちがう', C.purple)),
  F('❓write と right はどう見分けるのでしょう。→ 意味と文の形で決めます。「書く」という動作なら動詞の write、「右」「正しい」なら right です。',
    [bx(14, 18, 140, 40, 'Write your name.', C.blue, FILL.blue, 12), bx(166, 18, 140, 40, 'Turn right.', C.blue, FILL.blue, 12), lb(84, 76, '書きなさい → write', 12, C.ink, 'middle', true), lb(236, 76, '右に曲がれ → right', 12, C.ink, 'middle', true), ar(84, 84, 84, 104, C.blue), ar(236, 84, 236, 104, C.blue), bx(34, 106, 100, 24, '動詞 write', C.blue, FILL.blue, 12), bx(186, 106, 100, 24, '右 right', C.blue, FILL.blue, 12)],
    cap('音が同じなら意味で決める')),
  F('climb に ed を付けても b は残ります。climbed と書きます。climed のように b を落とすと、まちがいです。',
    [...tiles('climbed', 160, 22, { mark: { 4: RD } }), lb(160, 66, 'b は読まないが、書くときは必要', 12, C.red, 'middle', true), ...ng(40, 96, 110, 'climed'), ...ok(170, 96, 110, 'climbed')],
    cap('読まない b も書く', C.red)),
  F('まとめです。kn・wr・語末の -mb は、書くのに読まない文字です。昔の発音の名残なので、仲間でまとめて覚えます。know を no、write を rite と書かないように、語頭の k と w を意識しましょう。',
    [bx(20, 14, 280, 30, 'kn：know knife knee', C.red, FILL.red, 13), bx(20, 52, 280, 30, 'wr：write wrong wrist', C.red, FILL.red, 13), bx(20, 90, 280, 30, '-mb：climb lamb thumb', C.red, FILL.red, 13)],
    cap('読まない文字も書く', C.main)),
], '読まない文字：kn・wr・-mb');

// ───────── eigo_s024 読まない文字②：gh・l・t など ─────────
const s024: DiagramFigure = show([
  S('night の gh は読みません。igh でひとまとまりになって、「アイ」と読みます。light・high・bright も同じです。',
    [...tiles('night', 160, 22, { mark: { 1: BL, 2: RD, 3: RD } }), lb(160, 66, 'igh ＝ 「アイ」（gh は読まない）', 12, C.blue, 'middle', true), bx(30, 82, 260, 30, 'night  light  high  bright', C.blue, FILL.blue, 14)],
    cap('igh ＝ アイ', C.blue)),
  F('❓ought や augh の gh はどうでしょう。→ これも読みません。bought・thought・caught・taught・daughter は「オー」と読みます。動詞の過去形（かこけい）に多いのが特ちょうです。',
    [head('ought・augh ＝「オー」', C.purple), ...trow(26, 'buy', 'bought', C.purple, FILL.purple, 70, 22, 11), ...trow(50, 'think', 'thought', C.purple, FILL.purple, 70, 22, 11), ...trow(74, 'catch', 'caught', C.purple, FILL.purple, 70, 22, 11), ...trow(98, 'teach', 'taught', C.purple, FILL.purple, 70, 22, 11), lb(160, 132, 'むすめ ＝ daughter も「オー」', 11, C.ink, 'middle', true)],
    cap('過去形に gh が多い', C.purple)),
  F('❓gh はいつも読まないのでしょうか。→ いいえ。laugh・enough・cough・tough では gh が f の音になります。laugh は「ラフ」、enough は「イナフ」です。',
    [...tiles('laugh', 160, 22, { mark: { 3: RD, 4: RD } }), lb(160, 66, 'gh ＝ f の音', 12, C.red, 'middle', true), bx(30, 82, 260, 30, 'laugh  enough  cough  tough', C.red, FILL.red, 14)],
    cap('gh は f の音になる語もある', C.red)),
  F('though と through は、つづりが似ているのに読み方がまったくちがいます。though は「ゾウ」、through は「スルー」。入試で問われやすい組です。',
    [head('似ているが別の語'), ...tiles('though', 80, 34, { w: 20, mark: rng(0, 1, RD) }), ...tiles('through', 240, 34, { w: 18, mark: rng(0, 1, RD) }), bx(30, 80, 100, 28, '「ゾウ」', C.blue, FILL.blue, 13), bx(190, 80, 100, 28, '「スルー」', C.blue, FILL.blue, 13)],
    cap('つづりで区別する', C.red)),
  F('❓gh のほかにも、読まない文字はあるでしょうか。→ あります。walk・talk・half・calm の l、should・would・could の l は読みません。',
    [...tiles('walk', 60, 22, { w: 20, mark: { 2: RD } }), ...tiles('half', 160, 22, { w: 20, mark: { 2: RD } }), ...tiles('calm', 260, 22, { w: 20, mark: { 2: RD } }),
      ...tiles('should', 95, 70, { w: 20, mark: { 3: RD } }), ...tiles('would', 225, 70, { w: 20, mark: { 2: RD } }), lb(160, 118, 'l は読まない（赤）', 12, C.red, 'middle', true)],
    cap('alk・alf・alm の l', C.red)),
  F('t・s・d・h が消える語もあります。listen（リスン）の t、often の t、island（アイランド）の s、Wednesday（ウェンズデイ）の d、hour・honest の h です。',
    [...tiles('listen', 70, 20, { w: 18, mark: { 3: RD } }), ...tiles('island', 190, 20, { w: 18, mark: { 1: RD } }), ...tiles('Wednesday', 160, 62, { w: 18, mark: { 2: RD } }), ...tiles('hour', 80, 104, { w: 18, mark: { 0: RD } }), ...tiles('honest', 220, 104, { w: 18, mark: { 0: RD } })],
    cap('赤い文字は読まない', C.red)),
  F('❓読まない文字はどう書けばよいでしょう。→ 書く用の読み方を作ります。Wednesday は「ウェド・ネス・デイ」と区切って唱えながら書くと、d を落としません。',
    [...tiles('Wednesday', 160, 20, { w: 18, mark: { 2: RD } }), lb(160, 62, 'W-e-d-n-e-s-d-a-y', 12, C.gray, 'middle'), ...rowb(['ウェド', 'ネス', 'デイ'], 76, 30, C.blue, FILL.blue, 13), lb(160, 128, '書くための読み方で区切る', 12, C.ink, 'middle', true)],
    cap('Wensday ✕ → Wednesday ○', C.green)),
  F('まとめです。gh には「読まない（igh は アイ、ough・augh は オー）」と「f の音（laugh）」があります。l・t・s・d・h が消える語もあります。読まない文字も、書くときは必ず入れます。',
    [bx(20, 14, 280, 30, 'igh ＝ アイ   ough・augh ＝ オー', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, 'laugh・enough は gh が f の音', C.red, FILL.red, 13), bx(20, 90, 280, 30, 'walk・listen・island・Wednesday', C.purple, FILL.purple, 13)],
    cap('読まなくても書く', C.main)),
], '読まない文字：gh・l・t など');

// ───────── eigo_s025 つづりの例外①：c と g の2つの読み方 ─────────
const s025: DiagramFigure = show([
  S('cat の c は「ク」、city の c は「ス」。同じ c なのに、読み方が2通りあります。でたらめではなく、次に来る文字で決まります。',
    [...tiles('cat', 80, 22, { mark: { 0: BL } }), ...tiles('city', 240, 22, { mark: { 0: RD } }), bx(40, 70, 80, 28, 'c ＝ 「ク」', C.blue, FILL.blue, 13), bx(200, 70, 80, 28, 'c ＝ 「ス」', C.red, FILL.red, 13)],
    cap('次の文字を見て読む', C.main)),
  F('❓何を見れば決まるのでしょう。→ c のあとが e・i・y なら「ス」、a・o・u や子音（しいん）なら「ク」です。「e・i・y の前ならス」と唱えます。',
    [bx(14, 14, 130, 36, 'c ＋ a・o・u・子音', C.blue, FILL.blue, 12), bx(176, 14, 130, 36, 'c ＋ e・i・y', C.red, FILL.red, 12), ar(79, 52, 79, 76, C.blue), ar(241, 52, 241, 76, C.red), bx(34, 78, 90, 28, '「ク」', C.blue, FILL.blue, 14), bx(196, 78, 90, 28, '「ス」', C.red, FILL.red, 14)],
    cap('e・i・y の前なら「ス」', C.red)),
  F('例を見ましょう。「ク」は cat・come・cup・class。「ス」は cent・city・cycle・ice・nice・pencil・dance です。ここでの class は、c のあとが子音 l なので「ク」です。',
    [...trow(22, '「ク」の c', 'cat  come  cup  class', C.blue, FILL.blue, 80), ...trow(54, '「ス」の c', 'cent  city  cycle  ice', C.red, FILL.red, 80), ...trow(86, '「ス」の c', 'nice  pencil  dance', C.red, FILL.red, 80)],
    cap('city を「キティ」と読まない', C.red)),
  F('❓1つの語に c が2つあるときは？ circle は、1つ目の c が i の前なので「ス」、2つ目の c が l（子音）の前なので「ク」。「サークル」と読みます。',
    [...tiles('circle', 160, 22, { mark: { 0: RD, 1: RD, 3: BL, 4: BL } }), lb(160, 66, '1つ目の c：i の前 → 「ス」', 12, C.red, 'middle', true), lb(160, 86, '2つ目の c：l の前 → 「ク」', 12, C.blue, 'middle', true), lb(160, 116, 'サークル', 14, C.ink, 'middle', true)],
    cap('1文字ずつ後ろを見る', C.main)),
  F('g にも同じようなきまりがあります。g のあとが a・o・u や子音なら「グ」（game・go・guitar・glass）、e・i・y なら「ジ」が多いです（gym・giant・orange・age・large）。',
    [bx(14, 14, 130, 36, 'g ＋ a・o・u・子音', C.blue, FILL.blue, 12), bx(176, 14, 130, 36, 'g ＋ e・i・y', C.red, FILL.red, 12), ar(79, 52, 79, 76, C.blue), ar(241, 52, 241, 76, C.red), bx(14, 78, 130, 28, '「グ」game go', C.blue, FILL.blue, 12), bx(176, 78, 130, 28, '「ジ」gym giant', C.red, FILL.red, 12)],
    cap('g は「ジ」が多い', C.red)),
  F('❓g はいつも きまりどおりでしょうか。→ いいえ。get・give・girl・gift・begin・forget・together・tiger は、e・i の前なのに「グ」です。日常でよく使う語なので、先に覚えます。',
    [head('e・i の前なのに「グ」', C.red), ...tiles('girl', 66, 30, { w: 20, mark: { 0: RD } }), ...tiles('get', 160, 30, { w: 20, mark: { 0: RD } }), ...tiles('give', 254, 30, { w: 20, mark: { 0: RD } }), lb(160, 82, 'gift  begin  forget  together  tiger', 12, C.ink, 'middle', true), lb(160, 108, '例外のほうを先に覚える', 12, C.red, 'middle', true)],
    cap('girl は「ガール」', C.red)),
  F('語の終わりで「ジ」の音になるときは、e を付けて -ge と書きます（age・page・large・change）。短い母音のあとなら dge です（bridge・edge・judge）。ck や tch と同じ考え方です。',
    [head('語の終わりの「ジ」'), ...trow(26, '-ge', 'age  page  large  change', C.red, FILL.red, 70), ...trow(56, '-dge', 'bridge  edge  judge', C.red, FILL.red, 70), lb(160, 104, '短い母音1字のあとは dge', 12, C.main, 'middle', true)],
    cap('g だけで語を終えない', C.red)),
  F('まとめです。c は「e・i・y の前なら ス、それ以外は ク」で確実に決まります。g は「e・i・y の前なら ジが多い」ですが、get・give・girl などの例外があります。',
    [bx(20, 14, 280, 34, 'c：e・i・y の前 → ス、ほかは ク', C.blue, FILL.blue, 13), bx(20, 56, 280, 34, 'g：e・i・y の前 → ジが多い', C.red, FILL.red, 13), bx(20, 98, 280, 28, '例外：get give girl gift', C.purple, FILL.purple, 13)],
    cap('c のほうが確実', C.main)),
], 'つづりの例外：c と g');

// ───────── eigo_s027 音節（シラブル）の数え方 ─────────
const s027: DiagramFigure = show([
  S('strike は、日本語の「ストライク」では「ス・ト・ラ・イ・ク」と5つ（5拍（はく））に数えますが、英語では1つのかたまりです。この数え方のちがいが、英語が速く聞こえる正体の一つです。',
    [...['ス', 'ト', 'ラ', 'イ', 'ク'].map((t, i) => bx(38 + i * 50, 18, 44, 30, t, C.gray, FILL.gray, 14)), lb(160, 62, '日本語：5拍', 12, C.gray, 'middle', true), ar(160, 70, 160, 84, C.main), bx(100, 88, 120, 32, 'strike', C.red, FILL.red, 17), lb(160, 134, '英語：1音節（1拍）', 12, C.red, 'middle', true)],
    cap('カタカナの数え方とはちがう', C.main)),
  F('❓英語のかたまり（音節（おんせつ））は、どう数えるのでしょう。→ 母音（ぼいん）の「音」の数と同じです。cat は1音節、apple は ap・ple の2音節、banana は ba・na・na の3音節です。',
    [head('音節の数 ＝ 母音の音の数'), ...sylrow(30, 'cat', ['cat'], C.blue, FILL.blue), ...sylrow(66, 'apple', ['ap', 'ple'], C.blue, FILL.blue), ...sylrow(102, 'banana', ['ba', 'na', 'na'], C.blue, FILL.blue)],
    cap('右の丸が音節の数', C.blue)),
  F('❓cake は母音字が a と e の2つありますが、何音節でしょう。→ 1音節です。e は読まないので、母音の音は「エイ」ひとつだけ。rain も a と i の2文字で「エイ」1つの音です。数えるのは母音の「字」ではなく「音」です。',
    [...tiles('cake', 80, 24, { mark: { 1: BL, 3: RD } }), ...tiles('rain', 240, 24, { mark: { 1: BL, 2: BL } }), lb(80, 70, 'e は読まない', 11, C.red, 'middle'), lb(240, 70, 'ai ＝ エイ 1つ', 11, C.blue, 'middle'), bx(40, 86, 80, 28, '1音節', C.main, FILL.yellow, 14), bx(200, 86, 80, 28, '1音節', C.main, FILL.yellow, 14)],
    cap('母音字の数 ≠ 母音の音の数', C.red)),
  F('体でも確かめられます。あごの下に手のこうをあてて、ゆっくり発音します。母音を出すときにあごが下がるので、下がった回数が音節の数です。strike はあごが下がるのが1回、つまり1音節です。',
    [ci(90, 54, 36, undefined, C.gray, FILL.warm), ci(78, 46, 3, undefined, C.gray, C.gray), ci(102, 46, 3, undefined, C.gray, C.gray), ln(78, 70, 102, 70, C.gray), lb(90, 102, 'あご', 11, C.ink, 'middle', true), bx(50, 112, 80, 24, '手のこう', C.main, FILL.yellow, 11), ar(90, 112, 90, 106, C.main), bx(180, 30, 120, 34, 'strike', C.red, FILL.red, 16), lb(240, 84, 'あごが下がるのは', 11, C.ink, 'middle'), lb(240, 104, '1回 → 1音節', 13, C.red, 'middle', true)],
    cap('あごが下がった回数を数える', C.main)),
  F('音節の数が分かると、長い語も読めます。beautiful は beau・ti・ful の3音節、computer は com・pu・ter の3音節、interesting は in・ter・est・ing の4音節です。',
    [...sylrow(14, 'beautiful', ['beau', 'ti', 'ful'], C.blue, FILL.blue, 52), ...sylrow(52, 'computer', ['com', 'pu', 'ter'], C.blue, FILL.blue, 52), ...sylrow(90, 'interesting', ['in', 'ter', 'est', 'ing'], C.blue, FILL.blue, 44)],
    cap('区切りながら読むと読める', C.blue)),
  F('❓どこで区切るのでしょう。おおよそのきまりは3つあります。①子音（しいん）が2つ続くときは、そのあいだで切る（win・dow, sum・mer, pen・cil）。②子音が1つのときは、その前で切ることが多い（mu・sic, o・pen）。',
    [head('区切りのきまり①②'), ...trow(28, '① 子音が2つ', 'win・dow   sum・mer   pen・cil', C.green, FILL.green, 100, 28), ...trow(66, '② 子音が1つ', 'mu・sic   o・pen', C.green, FILL.green, 100, 28)],
    cap('子音が2つなら、まん中で切る', C.green)),
  F('③ 接頭語（せっとうご）・接尾語（せつびご）は切れ目になります（un・hap・py, teach・er, care・ful）。また -ed が音節を1つ増やすのは、t・d で終わる語だけです。want・ed は2音節、played は1音節です。',
    [...sylrow(16, 'unhappy', ['un', 'hap', 'py'], C.purple, FILL.purple, 52), ...sylrow(54, 'wanted', ['want', 'ed'], C.purple, FILL.purple, 60), ...sylrow(92, 'played', ['played'], C.purple, FILL.purple, 100)],
    cap('-ed は t・d のあとだけ増える', C.purple)),
  F('まとめです。音節の数は母音の「音」の数。日本語はかな1字が1拍ですが、英語は音節が1拍です。カタカナ語を思い出したら、「英語では何音節か」を数え直しましょう。',
    [bx(20, 14, 280, 30, '音節 ＝ 母音の「音」のかたまり', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, 'cake は母音字2つでも1音節', C.red, FILL.red, 13), bx(20, 90, 280, 30, 'strike：日本語5拍 ／ 英語1拍', C.main, FILL.yellow, 13)],
    cap('あごが下がる回数を数える', C.main)),
], '音節（シラブル）の数え方');

// ───────── eigo_s033 ローマ字②：長音・促音・はねる音 ─────────
const s033: DiagramFigure = show([
  S('ローマ字でまちがえやすいのは、小さい「っ」と「ん」です。「きって」は kitte と書きます。小さい「っ」（促音（そくおん））は、次の子音（しいん）を重ねて書きます。',
    [bx(110, 14, 100, 28, 'きって', C.gray, FILL.gray, 14), ar(160, 44, 160, 62, C.main), ...tiles('kitte', 160, 66, { mark: { 2: RD, 3: RD } }), lb(160, 118, 'っ ＝ 次の t を重ねる', 12, C.red, 'middle', true)],
    cap('小さい「っ」＝ 子音を重ねる', C.red)),
  F('❓「がっこう」はどう書くのでしょう。→ 「っ」の次が k なので k を重ねて gakko。のばす音の「う」は書きません。さっぽろは Sapporo、にっぽんは Nippon です。',
    [head('促音の例'), ...trow(28, 'がっこう', 'gakko   （kk）', C.red, FILL.red, 90), ...trow(58, 'さっぽろ', 'Sapporo   （pp）', C.red, FILL.red, 90), ...trow(88, 'にっぽん', 'Nippon   （pp）', C.red, FILL.red, 90)],
    cap('次の文字を2つ書く', C.red)),
  F('❓「まっちゃ」は maccha でしょうか。→ いいえ。ち は chi と書くので、そのまま重ねると cchi となって読みにくくなります。そこで t を重ねて matcha と書きます。',
    [head('ち・ちゃ行の前だけ t を重ねる'), ...ng(40, 52, 110, 'maccha'), ...ok(170, 52, 110, 'matcha'), lb(160, 112, 'こっち ＝ kotchi', 12, C.ink, 'middle', true)],
    cap('ch の前は t を重ねる', C.main)),
  F('「ん」は n で書きます。にほん＝Nihon、かんじ＝kanji、しんぶん＝shinbun です。',
    [head('撥音（はつおん）「ん」＝ n', C.blue), ...trow(28, 'にほん', 'Nihon', C.blue, FILL.blue, 90), ...trow(58, 'かんじ', 'kanji', C.blue, FILL.blue, 90), ...trow(88, 'しんぶん', 'shinbun', C.blue, FILL.blue, 90)],
    cap('「ん」は n', C.blue)),
  F('❓「しんいち」は Shinichi でよいでしょうか。→ いけません。shi・ni・chi と読まれて「しにち」になってしまいます。「ん」のあとに母音（ぼいん）や y が続くときは、アポストロフィ（\'）で区切って Shin\'ichi と書きます。',
    [bx(14, 24, 130, 30, 'Shinichi', C.red, FILL.red, 14), lb(79, 70, 'し・に・ち と読まれる', 11, C.red, 'middle', true), bx(176, 24, 130, 30, "Shin'ichi", C.green, FILL.green, 14), lb(241, 70, 'しん・いち と読める', 11, C.green, 'middle', true), lb(160, 112, "ほんや ＝ hon'ya    まんいん ＝ man'in", 12, C.ink, 'middle', true)],
    cap("n のあとの母音は ' で区切る", C.green)),
  F('のばす音は、パスポートなどでは書きません。「さとう」は Sato、「おおの」も「おの」も Ono、「ゆうき」は Yuki、「しょうこ」は Shoko です。',
    [head('長音（ちょうおん）は書かない'), ...trow(26, 'さとう', 'Sato   （Satou ではない）', C.purple, FILL.purple, 100, 22), ...trow(52, 'おおの・おの', 'Ono   （どちらも同じ）', C.purple, FILL.purple, 100, 22), ...trow(78, 'ゆうき', 'Yuki', C.purple, FILL.purple, 100, 22), ...trow(104, 'しょうこ', 'Shoko', C.purple, FILL.purple, 100, 22)],
    cap('パスポートでは書かない', C.purple)),
  F('小さい「ゃ・ゅ・ょ」（拗音（ようおん））は、i の段の音に ya・yu・yo をつなげます。しゃ・しゅ・しょ は sha・shu・sho（sya ではない）、ちゃ・ちゅ・ちょ は cha・chu・cho（tya ではない）、じゃ・じゅ・じょ は ja・ju・jo です。',
    [head('ヘボン式'), ...trow(24, 'きゃ きゅ きょ', 'kya   kyu   kyo', C.green, FILL.green, 100, 24), ...trow(52, 'しゃ しゅ しょ', 'sha   shu   sho', C.green, FILL.green, 100, 24), ...trow(80, 'ちゃ ちゅ ちょ', 'cha   chu   cho', C.green, FILL.green, 100, 24), ...trow(108, 'じゃ じゅ じょ', 'ja   ju   jo', C.green, FILL.green, 100, 24)],
    cap('sya・tya・zya とは書かない', C.green)),
  F('東京は とうきょう と書きますが、のばす音の「う」を書かないので Tokyo になります。Toukyou は入力用の書き方で、英語の文の中では使いません。',
    [bx(110, 12, 100, 28, 'とうきょう', C.gray, FILL.gray, 14), ar(160, 42, 160, 58, C.main), ...tiles('Tokyo', 160, 62, { mark: { 0: BL } }), ...ng(40, 106, 110, 'Toukyou'), ...ok(170, 106, 110, 'Tokyo')],
    cap('のばす音の「う」は書かない', C.main)),
  F('まとめです。「っ」は次の子音を重ねる（ち・ちゃ行の前は t）。「ん」は n（母音や y の前は \' で区切る）。のばす音は書かない。この3つを先に固めましょう。',
    [bx(20, 14, 280, 30, 'っ ＝ 次の子音を重ねる（gakko, matcha）', C.red, FILL.red, 12), bx(20, 52, 280, 30, "ん ＝ n（Shin'ichi）", C.blue, FILL.blue, 13), bx(20, 90, 280, 30, 'のばす音は書かない（Sato, Tokyo）', C.purple, FILL.purple, 13)],
    cap('この3つを先に固める', C.main)),
], 'ローマ字：促音・撥音・長音・拗音');

// ───────── eigo_s034 ローマ字③：ローマ字読みで英語を読まない ─────────
const s034: DiagramFigure = show([
  S('ローマ字と英語は、同じアルファベットを使いますが、まったく別のきまりで動いています。ローマ字は日本語を書くための道具で、英語のつづりのきまりとは別ものです。',
    [bx(14, 20, 124, 56, 'ローマ字\n日本語を書く道具', C.green, FILL.green, 12), lb(160, 48, '≠', 22, C.red, 'middle', true), bx(182, 20, 124, 56, '英語\n英語のきまり', C.blue, FILL.blue, 12), lb(160, 110, '同じ文字でも ちがうルール', 12, C.ink, 'middle', true)],
    cap('頭を切りかえる', C.main)),
  F('ローマ字では、a・i・u・e・o が ア・イ・ウ・エ・オ の1つの音だけを表します。つづりを見れば読み方が必ず決まり、例外がありません。',
    [head('ローマ字のきまり', C.green), ...rowb(['a\nア', 'i\nイ', 'u\nウ', 'e\nエ', 'o\nオ'], 28, 50, C.green, FILL.green, 13), lb(160, 104, '1つの文字 ＝ 1つの音', 13, C.ink, 'middle', true), lb(160, 128, 'ke ＝ け   ike ＝ いけ', 12, C.gray, 'middle')],
    cap('例外のないルール', C.green)),
  F('❓like をローマ字のきまりで読むとどうなるでしょう。→ 語末の e も「エ」と読んで「リケ」になってしまいます。でも英語では、語末の e は読まず、「ライク」です。',
    [...tiles('like', 160, 18, { mark: { 3: RD } }), lb(160, 62, '語末の e は読まない', 12, C.red, 'middle', true), ...ng(40, 90, 110, 'リケ'), ...ok(170, 90, 110, 'ライク')],
    cap('ローマ字読みは ×', C.red)),
  F('name も同じです。ローマ字読みでは「ナメ」ですが、英語では語末の e を読まず、そのかわり a がアルファベットの名前（エイ）で読まれて「ネイム」になります。これをマジック e といいます。',
    [...tiles('name', 160, 18, { mark: { 1: BL, 3: RD } }), lb(160, 62, 'a ＝ エイ    e ＝ 読まない', 12, C.ink, 'middle', true), ...ng(40, 90, 110, 'ナメ'), ...ok(170, 90, 110, 'ネイム')],
    cap('マジック e が働く', C.blue)),
  F('ほかの語も確かめましょう。make は「マケ」ではなく「メイク」、time は「ティメ」ではなく「タイム」、house は「ホウセ」ではなく「ハウス」です。',
    [head('英語は英語のきまりで読む'), ...pair(26, 'make ＝ マケ', 'メイク', 126), ...pair(62, 'time ＝ ティメ', 'タイム', 126), ...pair(98, 'house ＝ ホウセ', 'ハウス', 126)],
    cap('見たらまずマジック e を思い出す', C.main)),
  F('ai にもちがいがあります。ローマ字の ai は a と i を読んで「アイ」（愛）ですが、英語の ai は「エイ」です（rain, train）。英語で「アイ」の音を表すのは、bike の i_e、night の igh、my の y などです。',
    [bx(14, 14, 140, 44, 'ローマ字 ai\n＝ アイ（愛）', C.green, FILL.green, 12), bx(166, 14, 140, 44, '英語 ai\n＝ エイ（rain train）', C.blue, FILL.blue, 12), lb(160, 82, '英語の「アイ」の音は…', 12, C.ink, 'middle', true), bx(30, 94, 260, 28, 'bike（i_e）  night（igh）  my（y）', C.blue, FILL.blue, 12)],
    cap('同じ ai でも 読みがちがう', C.red)),
  F('u と ei も同じです。英語の u は、cup では「ア」に近く、use では「ユー」。ei は、ローマ字の sensei では「エイ」ですが、英語では receive の「イー」や eight の「エイ」です。',
    [head('英語は1つの文字に読みがいくつもある'), ...trow(26, 'u', 'ローマ字 ウ ／ 英語 ア・ユー', C.purple, FILL.purple, 50, 28), ...trow(62, 'ei', 'ローマ字 エイ ／ 英語 イー・エイ', C.purple, FILL.purple, 50, 28)],
    cap('文字の音は言語ごとにちがう', C.purple)),
  F('日本語がそのまま英語になった語もあります。sushi・tempura・judo・origami・tsunami・manga などは、つづりはローマ字に近いままですが、発音は英語風になります。',
    [head('日本語から英語になった語'), ...rowb(['sushi', 'tempura', 'judo'], 28, 30, C.green, FILL.green, 13), ...rowb(['origami', 'tsunami', 'manga'], 68, 30, C.green, FILL.green, 13), lb(160, 126, 'つづりはローマ字に近い・音は英語風', 12, C.ink, 'middle', true)],
    cap('音は英語風になる', C.green)),
  F('まとめです。ローマ字は日本語を書く道具で、英語のつづりのきまりとは別ものです。英語の語を見たら、まず「短い母音・長い母音・マジック e」を思い出し、ローマ字のきまりは頭からはなしましょう。',
    [bx(20, 14, 280, 30, 'ローマ字 ＝ 日本語を書く道具', C.green, FILL.green, 13), bx(20, 52, 280, 30, '英語 ＝ マジック e や読まない文字がある', C.blue, FILL.blue, 12), bx(20, 90, 280, 30, 'like ＝ ライク（リケ ✕）', C.red, FILL.red, 13)],
    cap('ローマ字のくせを切りはなす', C.main)),
], 'ローマ字読みで英語を読まない');

// ───────── eigo_s035 ローマ字④：名前・地名の書き方 ─────────
const s035: DiagramFigure = show([
  S('英語の文で自分の名前を書くとき、姓（せい）も名（めい）も、最初の1文字を大文字にします。姓と名のあいだは1文字分あけます。',
    [...pair(22, 'kota sato', 'Kota Sato', 126), ...tiles('Kota', 90, 78, { mark: { 0: RD } }), ...tiles('Sato', 230, 78, { mark: { 0: RD } }), lb(160, 126, '最初の1文字が大文字（赤）', 12, C.red, 'middle', true)],
    cap('姓も名も大文字で始める', C.red)),
  F('❓どちらを先に書くのでしょう。→ 昔は「名－姓」(Kota Sato) がふつうでしたが、いまは「姓－名」(Sato Kota) が公用文の原則です。どちらでも通じるので、学校の指示があればそれに従います。答案の中では順番をそろえます。',
    [bx(14, 18, 140, 40, 'Kota Sato\n名 － 姓', C.blue, FILL.blue, 13), bx(166, 18, 140, 40, 'Sato Kota\n姓 － 名', C.green, FILL.green, 13), lb(84, 76, 'かつての書き方', 11, C.gray, 'middle'), lb(236, 76, 'いまの原則（公用文）', 11, C.gray, 'middle'), bx(40, 92, 240, 30, '答案の中では順番をそろえる', C.main, FILL.yellow, 13)],
    cap('指示があれば、その順に', C.main)),
  F('❓姓と名を取りちがえられないようにするには？ → 姓をすべて大文字で書く方法があります。SATO Kota と書けば、SATO が姓だとはっきりします。',
    [...tiles('SATO', 100, 30, { mark: rng(0, 3, RD) }), lb(190, 44, 'Kota', 16, C.blue, 'middle', true), lb(100, 80, '姓（全部大文字）', 12, C.red, 'middle', true), lb(205, 80, '名', 12, C.blue, 'middle', true), bx(60, 96, 200, 28, 'SATO Kota', C.main, FILL.yellow, 14)],
    cap('姓がひと目で分かる', C.red)),
  F('名前のつづりはヘボン式で書き、のばす音は書きません。こうた＝Kota、ゆうき＝Yuki、しょう＝Sho、じゅんこ＝Junko です。',
    [head('名前の書き方'), ...trow(26, 'こうた', 'Kota', C.blue, FILL.blue, 90, 22), ...trow(52, 'ゆうき', 'Yuki', C.blue, FILL.blue, 90, 22), ...trow(78, 'しょう', 'Sho', C.blue, FILL.blue, 90, 22), ...trow(104, 'じゅんこ', 'Junko', C.blue, FILL.blue, 90, 22)],
    cap('のばす音は書かない', C.blue)),
  F('地名も最初の1文字を大文字にします。東京＝Tokyo、大阪＝Osaka、京都＝Kyoto、北海道＝Hokkaido、九州＝Kyushu、名古屋＝Nagoya、神戸＝Kobe、広島＝Hiroshima です。',
    [head('地名は大文字で始める'), ...rowb(['東京\nTokyo', '大阪\nOsaka', '京都\nKyoto', '北海道\nHokkaido'], 26, 44, C.green, FILL.green, 11), ...rowb(['九州\nKyushu', '名古屋\nNagoya', '神戸\nKobe', '広島\nHiroshima'], 80, 44, C.green, FILL.green, 11)],
    cap('のばす音は書かない', C.green)),
  F('❓「〜山」「〜駅」はどう書くのでしょう。→ 英語の語を付けます。山は Mt.（Mount の略）、駅は Station、川は River、公園は Park です。Mt. のあとは1文字分あけます。',
    [head('地形・建物には英語の語を付ける'), ...trow(26, '富士山', 'Mt. Fuji', C.purple, FILL.purple, 90, 24), ...trow(56, '東京駅', 'Tokyo Station', C.purple, FILL.purple, 90, 24), ...trow(86, '信濃川', 'the Shinano River', C.purple, FILL.purple, 90, 24), ...trow(116, '上野公園', 'Ueno Park', C.purple, FILL.purple, 90, 24)],
    cap('Mt. のあとは1文字あける', C.purple)),
  F('よくあるまちがいを確かめましょう。Toukyou（のばす音を書く）、fuji（小文字）、Mt.Fuji（ピリオドのあとをあけない）、Fujisan Mountain（「山」が二重になる）は、すべて×です。',
    [...pair(16, 'Toukyou', 'Tokyo'), ...pair(48, 'fuji', 'Fuji'), ...pair(80, 'Mt.Fuji', 'Mt. Fuji'), ...pair(112, 'Fujisan Mountain', 'Mt. Fuji')],
    cap('左はぜんぶ ×', C.red)),
  F('まとめです。日本の地名や名前は、英語の中でも訳さず、音を写して書きます（東京を Eastern Capital のように訳さない）。最初の1文字は大文字、のばす音は書かない、山・駅・川には Mt.・Station・River を付けます。',
    [bx(20, 14, 280, 30, '最初の1文字は大文字', C.red, FILL.red, 13), bx(20, 52, 280, 30, 'ヘボン式・のばす音は書かない', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, 'Mt. ・ Station ・ River を付ける', C.purple, FILL.purple, 13)],
    cap('固有名詞は訳さず音を写す', C.main)),
], '名前・地名のローマ字の書き方');

// ───────── eigo_s036 まちがえやすいつづり①：曜日と月の名前 ─────────
const s036: DiagramFigure = show([
  S('曜日（ようび）は7つ。Sunday・Monday・Tuesday・Wednesday・Thursday・Friday・Saturday です。文のとちゅうでも、必ず大文字で書き始めます。',
    [head('曜日と月は大文字で始める'), ...rowb(['Sunday', 'Monday', 'Tuesday', 'Wednesday'], 26, 34, C.blue, FILL.blue, 11, 8, 312, 4), ...rowb(['Thursday', 'Friday', 'Saturday'], 70, 34, C.blue, FILL.blue, 11, 8, 240, 4)],
    cap('on sunday ✕ → on Sunday ○', C.green)),
  F('❓つづりで落としやすいのはどこでしょう。→ Wednesday の d、Thursday の r、Tuesday は u→e の順、Saturday は u（Saterday ではない）です。',
    [...tiles('Wednesday', 108, 8, { w: 20, gap: 1, h: 26, size: 14, mark: { 2: RD } }), lb(216, 21, 'd を落とさない', 12, C.red, 'start', true), ...tiles('Thursday', 108, 40, { w: 20, gap: 1, h: 26, size: 14, mark: { 3: RD } }), lb(216, 53, 'r を落とさない', 12, C.red, 'start', true),
      ...tiles('Tuesday', 108, 72, { w: 20, gap: 1, h: 26, size: 14, mark: { 1: RD, 2: RD } }), lb(216, 85, 'u → e の順', 12, C.red, 'start', true), ...tiles('Saturday', 108, 104, { w: 20, gap: 1, h: 26, size: 14, mark: { 3: RD } }), lb(216, 117, 'u を書く', 12, C.red, 'start', true)],
    cap('赤い文字が落としやすい', C.red)),
  F('❓なぜ聞こえない文字があるのでしょう。→ 英語のつづりは、昔の発音のまま残っているからです。Wednesday はもともと「ウォーデンの日」という意味で、発音が変わっても文字は変わりませんでした。',
    [bx(14, 20, 130, 44, '昔\nウォーデンの日', C.gray, FILL.gray, 12), ar(146, 42, 172, 42, C.main), bx(176, 20, 130, 44, 'いま\nWednesday', C.blue, FILL.blue, 13), lb(160, 90, '発音は変わった ／ 文字は昔のまま', 12, C.red, 'middle', true), lb(160, 116, '→ 音のとおりに書くと文字が落ちる', 12, C.ink, 'middle')],
    cap('音だけが変わった', C.main)),
  F('❓では、どう覚えればよいでしょう。→ 書く用の読み方で区切ります。Wednesday は「ウェド・ネス・デイ」、Tuesday は Tues＋day、Thursday は Thurs＋day、Saturday は Sat＋ur＋day です。',
    [head('書く用の読み方'), ...trow(26, 'Wednesday', 'ウェド・ネス・デイ', C.green, FILL.green, 100, 24), ...trow(56, 'Tuesday', 'Tues ＋ day', C.green, FILL.green, 100, 24), ...trow(86, 'Thursday', 'Thurs ＋ day', C.green, FILL.green, 100, 24), ...trow(116, 'Saturday', 'Sat ＋ ur ＋ day', C.green, FILL.green, 100, 24)],
    cap('区切って唱えながら書く', C.green)),
  F('月でも同じです。February は最初の r を落として Febuary と書くまちがいが非常に多く、August は最後が t（Augast ではない）、October は Octorber のように r を入れすぎないよう注意します。',
    [...tiles('February', 100, 14, { w: 20, gap: 1, h: 26, size: 14, mark: { 3: RD } }), lb(200, 27, 'r が2つ', 12, C.red, 'start', true), ...tiles('August', 100, 60, { w: 20, gap: 1, h: 26, size: 14, mark: { 5: RD } }), lb(200, 73, '最後は t', 12, C.red, 'start', true), ...tiles('October', 100, 106, { w: 20, gap: 1, h: 26, size: 14, mark: { 3: RD } }), lb(200, 119, 'ct のあとは o', 12, C.red, 'start', true)],
    cap('Febuary ✕ Augast ✕ Octorber ✕', C.red)),
  F('❓なぜ文のとちゅうでも大文字なのでしょう。→ 曜日と月は固有名詞（こゆうめいし）で、人名・地名・曜日・月の名前は大文字で始めるきまりだからです。',
    [head('固有名詞は大文字で始める'), ...rowb(['人名\nKen', '地名\nTokyo', '曜日\nMonday', '月\nJune'], 26, 44, C.blue, FILL.blue, 12), ...pair(90, 'on sunday', 'on Sunday', 126)],
    cap('小文字だと不正解', C.red)),
  F('前置詞（ぜんちし）は決まった組み合わせです。曜日の前には on（on Monday）、月の前には in（in June）、日付まで言うときは on（on June 10）。June 10 は序数で読んで「ジューン・テンス」です。',
    [head('on と in'), ...trow(26, 'on ＋ 曜日', 'on Sunday   on Monday', C.purple, FILL.purple, 100, 26), ...trow(58, 'in ＋ 月', 'in June   in April', C.purple, FILL.purple, 100, 26), ...trow(90, 'on ＋ 日付', 'on June 10（June tenth）', C.purple, FILL.purple, 100, 26)],
    cap('on ＋ 曜日、in ＋ 月', C.purple)),
  F('確かめのしかたです。①大文字で始まっているか ②落としやすい文字（Wednesday の d、Thursday の r、Saturday の u、February の r、August の t）を書いたか ③区切って読めるか ④on・in を正しく使ったか。',
    [bx(20, 10, 280, 26, '① 大文字で始まっているか', C.blue, FILL.blue, 12), bx(20, 42, 280, 26, '② 落としやすい文字を書いたか', C.red, FILL.red, 12), bx(20, 74, 280, 26, '③ 区切って読めるか', C.green, FILL.green, 12), bx(20, 106, 280, 26, '④ on（曜日）・in（月）', C.purple, FILL.purple, 12)],
    cap('書いたあとに4つ確かめる', C.main)),
], '曜日と月のつづり');

// ───────── eigo_s037 まちがえやすいつづり②：弱く読む部分がある語 ─────────
const s037: DiagramFigure = show([
  S('favorite（お気に入りの）を、聞こえたとおりに書くと favrite になりやすい語です。まん中の o は発音では弱く、ほとんど聞こえません。でも、書くときには必要です。',
    [...tiles('favorite', 160, 22, { w: 22, gap: 2, mark: { 3: RD } }), lb(160, 66, 'o が消えて聞こえる', 12, C.red, 'middle', true), ...ng(40, 90, 110, 'favrite'), ...ok(170, 90, 110, 'favorite')],
    cap('聞こえない o も書く', C.red)),
  F('❓なぜ消えるのでしょう。→ 英語では、強く読まない音節の母音（ぼいん）は弱くあいまいになり、ほとんど聞こえなくなるからです。favorite は fa・vo・rite の3音節ですが、耳には2音節に近く聞こえます。',
    [lb(160, 16, '書くとき', 11, C.gray, 'middle'), ...rowb(['fa', 'vo', 'rite'], 24, 30, C.blue, FILL.blue, 13, 50, 270, 6), lb(160, 76, '聞こえ方', 11, C.gray, 'middle'), ...rowb(['フェイ', 'ヴリット'], 84, 30, C.red, FILL.red, 13, 70, 250, 6), lb(160, 134, '3つに書き、2つに聞こえる', 12, C.ink, 'middle', true)],
    cap('弱い母音は聞こえにくい', C.red)),
  F('同じように母音が消えやすい語を並べます。chocolate は2つ目の o、vegetable は e、different は まん中の e、every は まん中の e を落としやすい語です。',
    [...tiles('chocolate', 108, 8, { w: 20, gap: 1, h: 26, size: 14, mark: { 4: RD } }), lb(216, 21, '2つ目の o', 12, C.red, 'start', true), ...tiles('vegetable', 108, 40, { w: 20, gap: 1, h: 26, size: 14, mark: { 3: RD } }), lb(216, 53, 'e', 12, C.red, 'start', true), ...tiles('different', 108, 72, { w: 20, gap: 1, h: 26, size: 14, mark: { 4: RD } }), lb(216, 85, 'まん中の e', 12, C.red, 'start', true), ...tiles('every', 108, 104, { w: 20, gap: 1, h: 26, size: 14, mark: { 2: RD } }), lb(216, 117, 'まん中の e', 12, C.red, 'start', true)],
    cap('消えて聞こえる母音を書く', C.red)),
  F('❓どうすれば落とさないでしょうか。→ 書くとき専用の読み方を作ります。favorite は「ファ・ヴォ・リ・テ」、chocolate は「チョ・コ・ラ・テ」、vegetable は「ヴェ・ゲ・タ・ブレ」と、1字ずつ声に出しながら書きます。',
    [head('書く用の読み方'), ...trow(26, 'favorite', 'ファ・ヴォ・リ・テ', C.green, FILL.green, 100, 26), ...trow(60, 'chocolate', 'チョ・コ・ラ・テ', C.green, FILL.green, 100, 26), ...trow(94, 'vegetable', 'ヴェ・ゲ・タ・ブレ', C.green, FILL.green, 100, 26)],
    cap('唱えながら書く', C.green)),
  F('❓vegetable の e は、落としても読めるのでは？ → 落とせません。g のあとの e は、g を「ジ」と読ませる役目をもっているからです。e を落とすと、読み方までかわってしまいます。',
    [...tiles('vegetable', 160, 18, { w: 20, gap: 1, h: 26, size: 14, mark: { 2: RD, 3: GR } }), ln(160, 50, 190, 50, C.red), ar(175, 52, 175, 72, C.red), bx(110, 74, 130, 28, 'ge ＝ 「ジェ」', C.red, FILL.red, 13), lb(160, 122, 'e・i・y の前の g は「ジ」', 12, C.ink, 'middle', true)],
    cap('e は読み方を決める目じるし', C.red)),
  F('長めの語も、区切って唱えると書けます。beautiful は「ベ・アウ・ティ・フル」、because は「ビ・カウ・セ」、restaurant は「レス・タウ・ラント」です。becouse のような書きまちがいが多い語です。',
    [head('長めの語'), ...trow(26, 'beautiful', 'ベ・アウ・ティ・フル', C.purple, FILL.purple, 100, 26), ...trow(60, 'because', 'ビ・カウ・セ', C.purple, FILL.purple, 100, 26), ...trow(94, 'restaurant', 'レス・タウ・ラント', C.purple, FILL.purple, 100, 26)],
    cap('becouse ✕ → because ○', C.green)),
  F('音とつづりがずれる語は、文字を書き落とさないよう特に注意します。answer の w、listen の t、science の c（「ス」と読む）、world の or（「アー」と読む）です。',
    [...tiles('answer', 108, 8, { w: 20, gap: 1, h: 26, size: 14, mark: { 3: RD } }), lb(216, 21, 'w は読まない', 12, C.red, 'start', true), ...tiles('listen', 108, 40, { w: 20, gap: 1, h: 26, size: 14, mark: { 3: RD } }), lb(216, 53, 't は読まない', 12, C.red, 'start', true), ...tiles('science', 108, 72, { w: 20, gap: 1, h: 26, size: 14, mark: { 1: RD } }), lb(216, 85, 'c ＝ 「ス」', 12, C.red, 'start', true), ...tiles('world', 108, 104, { w: 20, gap: 1, h: 26, size: 14, mark: { 1: RD, 2: RD } }), lb(216, 117, 'or ＝ 「アー」', 12, C.red, 'start', true)],
    cap('赤い文字に注意', C.red)),
  F('覚えるときは、声に出しながら手で書きます。目で見るだけでは定着しません。同じ語を3回書いて、4回目は見ないで書く、という順序が効率的です。',
    [...rowb(['1回目\n見て書く', '2回目\n見て書く', '3回目\n見て書く', '4回目\n見ないで'], 26, 56, C.green, FILL.green, 11, 10, 310, 8), lb(160, 110, '声に出しながら 手で書く', 12, C.ink, 'middle', true)],
    cap('3回書いて、4回目は見ない', C.green)),
  F('まとめです。強く読まない音節の母音は弱くなり、聞こえたとおりに書くと文字が足りなくなります。書くとき専用の読み方で、1字ずつ唱えながら書きましょう。',
    [bx(20, 14, 280, 30, '弱い母音は聞こえにくい', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, 'favorite・chocolate・vegetable', C.red, FILL.red, 13), bx(20, 90, 280, 30, '書く用の読み方で唱える', C.green, FILL.green, 13)],
    cap('唱えながら書けば落とさない', C.main)),
], '弱く読む部分のある語のつづり');

// ───────── eigo_s038 まちがえやすいつづり③：文字を重ねる語 ─────────
const s038: DiagramFigure = show([
  S('tomorrow は「トゥモロウ」と読み、r の音は1つにしか聞こえません。でも、つづりは t-o-m-o-r-r-o-w の8文字で、o が3つ、r が2つあります。',
    [...nums(8, 160, 18, 22, 2), ...tiles('tomorrow', 160, 24, { mark: { 1: BL, 3: BL, 6: BL, 4: RD, 5: RD } }), lb(160, 76, 'o が3つ（青）・r が2つ（赤）', 12, C.ink, 'middle', true), ...ng(40, 96, 110, 'tomorow'), ...ok(170, 96, 110, 'tomorrow')],
    cap('8文字あるか数えて確かめる', C.main)),
  F('❓どうして落としてしまうのでしょう。→ 同じ文字が2つ続いても、音は1つにしか聞こえないからです。書いたあとに文字数を数えましょう。beginning は9文字で、n が3つあります。',
    [...nums(9, 160, 18, 20, 2), ...tiles('beginning', 160, 24, { w: 20, mark: { 4: RD, 5: RD, 7: RD } }), lb(160, 76, '9文字・n が3つ', 12, C.red, 'middle', true), lb(160, 104, '数えるくせをつけると点検が速い', 12, C.ink, 'middle')],
    cap('文字数を数えて確かめる', C.red)),
  F('重ねる語を仲間でまとめます。r は tomorrow・sorry・carry・hurry、n は dinner・tennis、m は summer、p は happy・apple、t は letter・better・little、そのほかに soccer・hobby・address があります。',
    [...trow(10, 'r', 'tomorrow  sorry  carry  hurry', C.red, FILL.red, 60, 22, 12), ...trow(36, 'n', 'dinner  tennis  running', C.red, FILL.red, 60, 22, 12), ...trow(62, 'm ・ p', 'summer  happy  apple', C.red, FILL.red, 60, 22, 12), ...trow(88, 't', 'letter  better  little', C.red, FILL.red, 60, 22, 12), ...trow(114, 'ほか', 'soccer  hobby  address', C.red, FILL.red, 60, 22, 12)],
    cap('二重にする文字は赤', C.red)),
  F('❓run に ing を付けると、なぜ running になるのでしょう。→ 最後の子音を重ねるきまりがあるからです。重ねるのは、3つの条件がそろったときだけです。',
    [...tiles('run', 62, 30, { mark: { 2: RD } }), ar(104, 43, 150, 43, C.main), lb(127, 34, '＋ing', 11, C.main, 'middle'), ...tiles('running', 235, 30, { w: 20, mark: { 2: RD, 3: RD } }), lb(160, 90, '最後の n を重ねてから ing', 12, C.ink, 'middle', true)],
    cap('子音を重ねてから ing', C.red)),
  F('3つの条件です。①1音節の語（または最後の音節を強く読む語）②母音字が1つだけ ③子音字1つで終わる。run→running、swim→swimming、sit→sitting、stop→stopping、big→bigger、begin→beginning が当てはまります。',
    [...rowb(['① 1音節\n(最後の音節を強く)', '② 母音字が\n1つだけ', '③ 子音字1つ\nで終わる'], 14, 46, C.blue, FILL.blue, 11, 10, 310, 6), ar(160, 62, 160, 73, C.main), bx(30, 76, 260, 20, 'run → running     swim → swimming', C.main, FILL.yellow, 11), bx(30, 99, 260, 20, 'sit → sitting     stop → stopping', C.main, FILL.yellow, 11), bx(30, 122, 260, 20, 'big → bigger     begin → beginning', C.main, FILL.yellow, 11)],
    cap('3つそろったら重ねる', C.main)),
  F('❓重ねない語はどんな語でしょう。→ 母音字が2つある語（read→reading）、子音字が2つ続く語（help→helping）、語末が e の語（make→making）、最後の音節を強く読まない語（visit→visiting）です。',
    [head('重ねない場合'), ...trow(24, '母音字が2つ', 'read → reading', C.green, FILL.green, 110, 24), ...trow(52, '子音字が2つ続く', 'help → helping', C.green, FILL.green, 110, 24), ...trow(80, '語末が e', 'make → making', C.green, FILL.green, 110, 24), ...trow(108, '強く読まない', 'visit → visiting', C.green, FILL.green, 110, 24)],
    cap('条件がひとつでも欠けたら重ねない', C.green)),
  F('重ねるかどうかで、意味がかわる語もあります。hop（ぴょんと跳ぶ）は hopping、hope（望む）は hoping。1文字ちがいでまったく別の語になります。plan は planning、play は playing です。',
    [bx(14, 14, 140, 44, 'hop → hopping\n跳ぶ', C.red, FILL.red, 12), bx(166, 14, 140, 44, 'hope → hoping\n望む', C.blue, FILL.blue, 12), lb(160, 82, '短い母音は 文字を重ねて守る', 12, C.ink, 'middle', true), bx(14, 98, 140, 28, 'plan → planning', C.red, FILL.red, 12), bx(166, 98, 140, 28, 'play → playing', C.blue, FILL.blue, 12)],
    cap('重ねる ／ 重ねない', C.main)),
  F('まとめです。tomorrow・dinner・summer のように重ねる語は、文字数を数えて確かめます。ing や ed を付けるときは、3つの条件がそろったときだけ最後の子音を重ねます。',
    [bx(20, 14, 280, 30, '重ねる語は 文字数を数える', C.red, FILL.red, 13), bx(20, 52, 280, 30, '1音節・母音字1つ・子音字1つ', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, 'run → running（重ねる）', C.green, FILL.green, 13)],
    cap('swiming ✕ → swimming ○', C.green)),
], '文字を重ねる語のつづり');

// ───────── eigo_s039 まちがえやすいつづり④：数と序数 ─────────
const s039: DiagramFigure = show([
  S('four には u があるのに、40 の forty には u がありません。fourty と書くのは誤りで、数の語のなかで最もまちがえやすい語です。',
    [...tiles('four', 100, 6, { w: 20, h: 24, mark: { 2: BL } }), lb(204, 18, '4（u あり）', 12, C.ink, 'start'), ...tiles('fourteen', 100, 36, { w: 20, h: 24, mark: { 2: BL } }), lb(204, 48, '14（u あり）', 12, C.ink, 'start'), ...tiles('forty', 100, 66, { w: 20, h: 24, mark: { 0: RD, 1: RD, 2: RD, 3: RD, 4: RD } }), lb(204, 78, '40（u なし）', 12, C.red, 'start', true), ...ng(40, 114, 110, 'fourty'), ...ok(170, 114, 110, 'forty')],
    cap('forty に u はない', C.red)),
  F('❓ほかの数はどう変わるのでしょう。→ five は fifteen・fifty で、ve が f になります。three は thirteen に形が変わり、eight は eighteen・eighty で t は1つのままです。nine は nineteen・ninety で e が残ります。',
    [head('13〜19 と 20〜90'), ...trow(26, 'five', 'fifteen   fifty  （ve → f）', C.blue, FILL.blue, 70, 24, 12), ...trow(56, 'three', 'thirteen   （形が変わる）', C.blue, FILL.blue, 70, 24, 12), ...trow(86, 'eight', 'eighteen   eighty  （t は1つ）', C.blue, FILL.blue, 70, 24, 12), ...trow(116, 'nine', 'nineteen   ninety  （e が残る）', C.blue, FILL.blue, 70, 24, 12)],
    cap('変わる数と残る数', C.blue)),
  F('序数（じょすう）は「1番目・2番目」を表す数です。first・second・third の3つだけ特別な形で、あとは th を付けるのが基本です（fourth・sixth・seventh・tenth・thirteenth）。',
    [head('序数のつくり'), ...rowb(['first\n1番目', 'second\n2番目', 'third\n3番目'], 26, 44, C.red, FILL.red, 12), lb(160, 88, 'あとは th を付けるのが基本', 12, C.ink, 'middle', true), bx(14, 100, 292, 28, 'fourth  sixth  seventh  tenth  thirteenth', C.blue, FILL.blue, 12)],
    cap('特別な形は3つだけ', C.red)),
  F('❓形が変わる序数はどれでしょう。→ five→fifth、twelve→twelfth（ve が f に）、eight→eighth（t は1つのまま）、nine→ninth（e が消える）、twenty→twentieth（y を ie にして th）です。',
    [head('形が変わる序数'), ...trow(24, 'five', 'fifth', C.purple, FILL.purple, 90, 22, 12), ...trow(48, 'twelve', 'twelfth', C.purple, FILL.purple, 90, 22, 12), ...trow(72, 'eight', 'eighth  （eightth ではない）', C.purple, FILL.purple, 90, 22, 12), ...trow(96, 'nine', 'ninth  （nineth ではない）', C.purple, FILL.purple, 90, 22, 12), ...trow(120, 'twenty', 'twentieth  （y → ie）', C.purple, FILL.purple, 90, 22, 12)],
    cap('変わるものだけ覚える', C.purple)),
  F('❓nine の e は、残るのでしょうか、消えるのでしょうか。→ ninth では消え、nineteen と ninety では残ります。nineth は誤りです。同じ nine でも形によってあつかいがちがうので、まとめて書いて確かめます。',
    [...tiles('nineteen', 100, 6, { w: 20, h: 24, mark: { 3: GR } }), lb(204, 18, 'e が残る', 12, C.green, 'start', true), ...tiles('ninety', 100, 36, { w: 20, h: 24, mark: { 3: GR } }), lb(204, 48, 'e が残る', 12, C.green, 'start', true), ...tiles('ninth', 100, 66, { w: 20, h: 24, mark: { 3: RD, 4: RD } }), lb(204, 78, 'e が消える', 12, C.red, 'start', true), ...ng(40, 114, 110, 'nineth'), ...ok(170, 114, 110, 'ninth')],
    cap('ninth だけ e が消える', C.red)),
  F('21以上はハイフンでつなぎます（twenty-one, thirty-five）。序数は、後ろの数だけを序数にします（twenty-first, thirty-first）。短く書くときは、数字に語尾の2文字を付けて 1st・2nd・3rd・4th・5th とします。',
    [head('21以上と短い書き方'), ...trow(26, '21', 'twenty-one', C.green, FILL.green, 80, 24, 12), ...trow(56, '21番目', 'twenty-first   （後ろだけ序数）', C.green, FILL.green, 80, 24, 12), ...trow(86, '短く', '1st   2nd   3rd   4th   5th', C.green, FILL.green, 80, 24, 12)],
    cap('ハイフンでつなぐ', C.green)),
  F('使い方です。日付は序数で読みます（May 5 は May fifth、June 20 は June twentieth）。階は the third floor（3階）、順位は He came in second.（2位だった）です。',
    [head('序数の使い方'), ...trow(26, '5月5日', 'May fifth', C.main, FILL.yellow, 80, 24, 12), ...trow(56, '6月20日', 'June twentieth', C.main, FILL.yellow, 80, 24, 12), ...trow(86, '3階', 'the third floor', C.main, FILL.yellow, 80, 24, 12), ...trow(116, '2位', 'came in second', C.main, FILL.yellow, 80, 24, 12)],
    cap('日付・階・順位で使う', C.main)),
  F('まとめです。forty に u はなく、fifteen・fifty は f になります。序数は first・second・third 以外は th が基本で、ninth は e が消え、eighth の t は1つです。最後は声に出して「フォーティーに u なし」と唱えましょう。',
    [bx(20, 14, 280, 30, 'forty に u なし ／ five → fifteen', C.red, FILL.red, 13), bx(20, 52, 280, 30, 'nine → ninth（nineth ✕）', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, 'eight → eighth（t は1つ）', C.green, FILL.green, 13)],
    cap('変わる語をまとめて覚える', C.main)),
], '数と序数のつづり');

// ───────── eigo_s040 総仕上げ：書き取り（ディクテーション）の手順 ─────────
const s040: DiagramFigure = show([
  S('書き取り（ディクテーション）は、3回に分けて進めます。1回目は書かずに意味をつかみ、2回目は語を書き、3回目に点検します。手順を決めておくと、聞きもらしても立て直せます。',
    [bx(8, 20, 92, 60, '1回目\n聞いて\n意味をつかむ', C.blue, FILL.blue, 11), ar(100, 50, 114, 50, C.main), bx(114, 20, 92, 60, '2回目\n語を書く', C.green, FILL.green, 10), ar(206, 50, 220, 50, C.main), bx(220, 20, 92, 60, '3回目\n点検する', C.red, FILL.red, 11)],
    cap('聞く → 書く → 点検', C.main)),
  F('❓2回目で聞き取れない所があったら？ → 空白にして下線を引き、先へ進みます。全部を書こうとして止まると、そのあとを聞きのがすからです。',
    [bx(14, 20, 292, 36, 'He ______ soccer every day.', C.gray, FILL.gray, 14), ar(110, 60, 110, 80, C.main), bx(40, 82, 150, 28, 'あとで 3回目に補う', C.main, FILL.yellow, 12), lb(160, 128, '止まらずに先へ進む', 12, C.ink, 'middle', true)],
    cap('空白にして先へ進む', C.main)),
  F('❓聞こえなかった弱い語は、どう補うのでしょう。→ 文法で決まっているので、知識で補えます。He play soccer. と聞こえても、主語が He で現在の文なら plays に決まります。',
    [...ng(14, 22, 130, 'He play soccer.'), ...ok(176, 22, 130, 'He plays soccer.'), lb(160, 76, '主語 He ＋ 現在の文', 12, C.ink, 'middle', true), ar(160, 84, 160, 100, C.main), bx(110, 102, 100, 26, '動詞に s', C.main, FILL.yellow, 13)],
    cap('弱い -s は文法で補う', C.main)),
  F('two cat と聞こえたら、two（2つ）があるので cats に決まります。a・the・to・of・and のような弱く短い語も、文の意味と文法から補えます。',
    [...ng(14, 22, 130, 'two cat'), ...ok(176, 22, 130, 'two cats'), lb(160, 76, '数を表す語があれば、名詞は複数', 12, C.ink, 'middle', true), ...rowb(['a / an', 'the', 'to', 'of', 'and'], 94, 28, C.blue, FILL.blue, 12, 20, 300, 6)],
    cap('聞こえない語こそ知識で補う', C.main)),
  F('音がつながって聞こえる所は、知っている語に分けます。an apple は「アナポー」、a lot of は「アロラヴ」、want to は「ワナ」に近く聞こえます。',
    [head('音のつながりをほどく'), ...trow(26, 'an apple', 'アナポー → an ＋ apple', C.purple, FILL.purple, 90, 26), ...trow(60, 'a lot of', 'アロラヴ → a ＋ lot ＋ of', C.purple, FILL.purple, 90, 26), ...trow(94, 'want to', 'ワナ → want ＋ to', C.purple, FILL.purple, 90, 26)],
    cap('かたまりを語に分ける', C.purple)),
  F('3回目の点検は6つです。①文の最初は大文字か ②人名・地名・曜日・月・I は大文字か ③ピリオド（.）か ? があるか ④三単現（さんたんげん）の s ⑤複数の s ⑥過去形。',
    [...rowb(['① 文頭は\n大文字', '② 人名・地名\n曜日・月・I'], 10, 40, C.blue, FILL.blue, 11, 10, 310, 8), ...rowb(['③ 文末の\n. か ?', '④ 三単現の s'], 56, 40, C.green, FILL.green, 11, 10, 310, 8), ...rowb(['⑤ 複数の s', '⑥ 過去形'], 102, 40, C.red, FILL.red, 11, 10, 310, 8)],
    cap('6つの点検を毎回する', C.main)),
  F('知らない語が出ても、空白にしません。「キャット」と聞こえたら短い a で cat、「ネイム」と聞こえたらマジック e で name と、フォニックスで音から組み立てます。部分点がもらえることもあります。',
    [bx(14, 24, 110, 30, '「キャット」', C.gray, FILL.gray, 13), ar(128, 39, 186, 39, C.main), bx(190, 24, 116, 30, 'cat（短い a）', C.green, FILL.green, 13), bx(14, 72, 110, 30, '「ネイム」', C.gray, FILL.gray, 13), ar(128, 87, 186, 87, C.main), bx(190, 72, 116, 30, 'name（マジック e）', C.green, FILL.green, 12)],
    cap('音から組み立てて書く', C.green)),
  F('最後に小さな声で読み返します。意味が通らなければ、どこかがまちがっています。every day は2語に分けて書きます（everyday は「毎日の」という別の語）。',
    [bx(10, 22, 300, 34, 'He plays soccer every day.', C.green, FILL.green, 14), lb(160, 76, '読み返して、意味が通るか確かめる', 12, C.ink, 'middle', true), lb(160, 104, 'every day は 2語に分けて書く', 12, C.red, 'middle', true)],
    cap('読み返して意味を確かめる', C.main)),
  F('まとめです。書き取りで落とすのは、聞こえない難しい語ではなく、a・the・to・of・-s のような弱く短い部分です。それは文法の知識で補えます。3回に分けて聞き、6つの点検を必ず行いましょう。',
    [bx(20, 14, 280, 30, '3回に分ける：聞く → 書く → 点検', C.blue, FILL.blue, 12), bx(20, 52, 280, 30, '弱い語は文法で補う', C.red, FILL.red, 13), bx(20, 90, 280, 30, '6つの点検と 読み返し', C.green, FILL.green, 13)],
    cap('耳より手順で差がつく', C.main)),
], '書き取り（ディクテーション）の手順');

// ───────── eigo_s041 be動詞①：主語と「＝」で結ぶことば ─────────
const s041: DiagramFigure = show([
  S('「私は学生です」は、英語では I am a student. です。am・is・are を be動詞（どうし）といい、主語（しゅご）とあとの語を「＝」でつなぐはたらきをします。',
    [bx(20, 44, 70, 36, 'I', C.blue, FILL.blue, 16), bx(230, 44, 70, 36, 'a student', C.blue, FILL.blue, 12), lb(160, 66, '＝', 26, C.red, 'middle', true), bx(130, 14, 60, 22, 'am', C.red, FILL.red, 14), lb(160, 110, '主語 ＝ あとの語', 12, C.ink, 'middle', true)],
    cap('be動詞は「＝」の記号', C.red)),
  F('ほかの文も同じです。She is kind. は She ＝ kind、They are my friends. は They ＝ my friends。be動詞は主語に合わせて am・is・are に形が変わります。',
    [head('主語 ＝ あとの語'), bx(14, 28, 70, 28, 'I', C.blue, FILL.blue, 13), bx(94, 28, 50, 28, 'am', C.red, FILL.red, 13), bx(154, 28, 152, 28, 'a student', C.blue, FILL.blue, 13), bx(14, 64, 70, 28, 'She', C.blue, FILL.blue, 13), bx(94, 64, 50, 28, 'is', C.red, FILL.red, 13), bx(154, 64, 152, 28, 'kind', C.blue, FILL.blue, 13), bx(14, 100, 70, 28, 'They', C.blue, FILL.blue, 13), bx(94, 100, 50, 28, 'are', C.red, FILL.red, 13), bx(154, 100, 152, 28, 'my friends', C.blue, FILL.blue, 13)],
    cap('am・is・are は ＝ のはたらき', C.red)),
  F('❓日本語の「は」が be動詞でしょうか。→ いいえ。「は」は主語を示すしるしです。be動詞にあたるのは、文の終わりの「です」の部分です。',
    [lb(30, 16, '日本語', 11, C.gray, 'start'), bx(14, 24, 56, 28, '私', C.blue, FILL.blue, 13), bx(74, 24, 40, 28, 'は', C.gray, FILL.gray, 13), bx(118, 24, 80, 28, '学生', C.blue, FILL.blue, 13), bx(202, 24, 60, 28, 'です', C.red, FILL.red, 13), lb(94, 66, '主語のしるし', 10, C.gray, 'middle'),
      lb(30, 84, '英語', 11, C.gray, 'start'), bx(14, 92, 56, 28, 'I', C.blue, FILL.blue, 13), bx(74, 92, 50, 28, 'am', C.red, FILL.red, 13), bx(128, 92, 100, 28, 'a student', C.blue, FILL.blue, 13), ar(232, 52, 100, 92, C.red, true)],
    cap('「です」＝ be動詞', C.red)),
  F('❓動詞のない文は作れないのでしょうか。→ 作れません。日本語では「私は学生。」でも通じますが、英語では必ず動詞が要ります。I a student. ではなく I am a student. と書きます。',
    [...ng(14, 34, 130, 'I a student.'), ...ok(176, 34, 130, 'I am a student.'), lb(160, 96, '英語の文には必ず動詞が要る', 13, C.ink, 'middle', true)],
    cap('動詞のない文は ×', C.red)),
  F('形容詞（けいようし）が来る文ほど、be動詞を落としやすいので注意です。She kind. ではなく She is kind.、We happy. ではなく We are happy.、I hungry. ではなく I am hungry. です。',
    [head('形容詞だけでは文にならない'), ...pair(26, 'She kind.', 'She is kind.'), ...pair(62, 'We happy.', 'We are happy.'), ...pair(98, 'I hungry.', 'I am hungry.')],
    cap('kind・happy・hungry は形容詞', C.red)),
  F('あとに来る語が数えられる名詞の単数なら、a（母音の音で始まる語には an）を付けます。I am a doctor.（私は医者です）、He is an English teacher.（彼は英語の先生です）。',
    [head('a と an'), ...trow(28, 'I am ＋ a', 'a doctor  （医者）', C.blue, FILL.blue, 80, 28, 13), ...trow(66, 'He is ＋ an', 'an English teacher  （母音の音で始まる）', C.blue, FILL.blue, 80, 28, 12), lb(160, 118, '数えられる名詞が1つのとき', 12, C.ink, 'middle', true)],
    cap('名詞が来たら a / an を確かめる', C.blue)),
  F('ただし、人の名前のように1つしかないものには a を付けません。I am Ken.（○）、I am a Ken.（✕）です。',
    [...ok(14, 40, 130, 'I am Ken.'), ...ng(176, 40, 130, 'I am a Ken.'), lb(160, 100, '名前や国名には a を付けない', 13, C.ink, 'middle', true)],
    cap('1つしかないものに a は不要', C.main)),
  F('まとめです。be動詞は主語とあとの語を「＝」で結びます。英語の文には必ず動詞が要るので、am・is・are を落とさないこと。名詞が1つなら a / an も忘れずに。',
    [bx(20, 14, 280, 30, 'be動詞 ＝ 「＝」の記号', C.red, FILL.red, 13), bx(20, 52, 280, 30, '文には必ず動詞が要る', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, '名詞が1つなら a / an', C.green, FILL.green, 13)],
    cap('I a student. ✕ → I am a student. ○', C.green)),
], 'be動詞は「＝」の記号');

// ───────── eigo_s043 be動詞③：主語になる代名詞 ─────────
const s043: DiagramFigure = show([
  S('同じ名詞をくり返さないために、二度目からは代名詞（だいめいし）に置きかえます。主語になる代名詞は、I・you・he・she・it・we・they の7つです。',
    [head('主語になる代名詞'), ...rowb(['I', 'you', 'he', 'she'], 28, 36, C.blue, FILL.blue, 15), ...rowb(['it', 'we', 'they'], 74, 36, C.blue, FILL.blue, 15, 10, 240, 6)],
    cap('7つを押さえる', C.blue)),
  F('一人・一つのときです。he は男性一人、she は女性一人、it は人以外の一つ。Ken → he、Mika → she、this bag → it になります。',
    [head('一人・一つ'), ...arow(26, 'Ken（男性一人）', 'he', 150, 12), ...arow(62, 'Mika（女性一人）', 'she', 150, 12), ...arow(98, 'this bag（人以外の一つ）', 'it', 170, 12)],
    cap('he・she は人、it はそれ以外', C.blue)),
  F('二つ以上のときです。we は自分をふくむ二人以上、you は相手をふくむ二人以上、they は自分も相手もふくまない二つ以上です。they は人にもものにも使えます。',
    [head('二つ以上'), ...trow(26, 'we', '自分をふくむ 二人以上', C.green, FILL.green, 70, 28, 12), ...trow(62, 'you', '相手をふくむ 二人以上', C.green, FILL.green, 70, 28, 12), ...trow(98, 'they', '自分も相手もふくまない 二つ以上', C.green, FILL.green, 70, 28, 12)],
    cap('they は人にもものにも', C.green)),
  F('❓Ken and I は何に置きかえるでしょう。→ 自分（I）が入っているので we です。they ではありません。My family and I も we になります。',
    [bx(14, 26, 130, 30, 'Ken and I', C.blue, FILL.blue, 14), ar(148, 41, 188, 41, C.main), bx(192, 26, 114, 30, 'we', C.green, FILL.green, 15), lb(160, 76, '自分（I）が入っている → we', 13, C.ink, 'middle', true), ...ng(14, 104, 130, 'They'), lb(190, 118, '「and I」を見たら we', 12, C.red, 'start', true)],
    cap('「〇〇と私」は we', C.green)),
  F('自分は入らず、相手が入っているときは you です（You and Tom → you）。自分も相手も入っていなければ they です（Ken and Mika → they、My father and mother → they）。',
    [head('自分が入るか、相手が入るか'), ...arow(26, 'You and Tom', 'you', 170, 13), ...arow(62, 'Ken and Mika', 'they', 170, 13), ...arow(98, 'My father and mother', 'they', 170, 12)],
    cap('入っているのはだれ？', C.main)),
  F('❓代名詞が決まると、be動詞も決まるのでしょうか。→ はい。I は am、he・she・it は is、you・we・they は are です。主語を代名詞に置きかえてから be動詞を選ぶと、まちがいが減ります。',
    [head('代名詞 → be動詞'), ...trow(26, 'I', 'am', C.red, FILL.red, 110, 28, 14), ...trow(62, 'he / she / it', 'is', C.red, FILL.red, 110, 28, 14), ...trow(98, 'you / we / they', 'are', C.red, FILL.red, 110, 28, 14)],
    cap('代名詞が決まれば be動詞も決まる', C.red)),
  F('犬やねこなど、人以外の動物は it で受けるのが基本です。That dog is very big. は It is very big. になります。飼っている動物を he や she と呼ぶこともありますが、入試で「代名詞にかえよ」と問われたら it です。',
    [bx(14, 26, 292, 30, 'That dog is very big.', C.blue, FILL.blue, 14), ar(160, 60, 160, 80, C.main), bx(14, 84, 292, 30, 'It is very big.', C.green, FILL.green, 14), lb(160, 132, 'be動詞も it なので is', 12, C.ink, 'middle', true)],
    cap('動物は it で受ける', C.main)),
  F('まとめです。一人は he・she、一つは it、二つ以上は we・you・they。「〇〇と私」は we、「〇〇とあなた」は you、自分も相手も入らなければ they。代名詞が決まれば be動詞も決まります。',
    [bx(20, 14, 280, 30, 'he・she（人）／ it（人以外）', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, '「〇〇と私」→ we', C.green, FILL.green, 13), bx(20, 90, 280, 30, 'be動詞も決まる（am / is / are）', C.red, FILL.red, 13)],
    cap('Ken and I → We ○', C.green)),
], '主語になる代名詞の選び方');

// ───────── eigo_s044 be動詞④：短縮形 ─────────
const s044: DiagramFigure = show([
  S("会話では、I am を I'm のようにつづめます。これを短縮形（たんしゅくけい）といいます。アポストロフィ（'）は、文字を省いた（はぶいた）しるしです。",
    [bx(30, 40, 100, 34, 'I am', C.gray, FILL.gray, 16), ar(134, 57, 174, 57, C.main), bx(180, 40, 110, 34, "I'm", C.green, FILL.green, 16), lb(160, 100, "a を省いたところに ' を置く", 12, C.red, 'middle', true)],
    cap("' ＝ 文字を省いたしるし", C.red)),
  F("〈主語＋be動詞〉は、you're・he's・she's・it's・we're・they're・that's のようにつづまります。",
    [head('主語＋be動詞'), ...rowb(["you are\n→ you're", "he is\n→ he's", "she is\n→ she's", "it is\n→ it's"], 26, 44, C.blue, FILL.blue, 11), ...rowb(["we are\n→ we're", "they are\n→ they're", "that is\n→ that's"], 78, 44, C.blue, FILL.blue, 11, 10, 240, 6)],
    cap('主語と be動詞をつづめる', C.blue)),
  F("〈be動詞＋not〉は、is not → isn't、are not → aren't です。省いた文字（o）のあった場所にアポストロフィを置くので、位置をまちがえません。",
    [head('be動詞＋not'), bx(30, 30, 100, 30, 'is not', C.gray, FILL.gray, 14), ar(134, 45, 174, 45, C.main), bx(180, 30, 110, 30, "isn't", C.green, FILL.green, 14), bx(30, 72, 100, 30, 'are not', C.gray, FILL.gray, 14), ar(134, 87, 174, 87, C.main), bx(180, 72, 110, 30, "aren't", C.green, FILL.green, 14), lb(160, 126, 'o を省いた場所に \'', 12, C.red, 'middle', true)],
    cap("n と t のあいだに '", C.red)),
  F("❓am not も amn't にできるでしょうか。→ できません。am だけは not と結びついた短縮形がありません。短くしたいときは、主語と be動詞のほうをつづめて I'm not とします。",
    [...ng(14, 30, 130, "I amn't busy."), ...ok(176, 30, 130, "I'm not busy."), bx(60, 82, 200, 28, 'I am not busy.  もOK', C.green, FILL.green, 12), lb(160, 130, "amn't という形はない", 12, C.red, 'middle', true)],
    cap("am not → I'm not", C.main)),
  F("it's と its はまったく別の語です。it's は it is の短縮形で「それは〜です」、its は my・your と同じ仲間で「その」という意味です。",
    [bx(14, 30, 140, 40, "It's a cat.\n（It is）", C.blue, FILL.blue, 13), bx(166, 30, 140, 40, "Its name is Tama.\n（その名前）", C.green, FILL.green, 12), lb(84, 92, 'それは ねこです', 12, C.ink, 'middle'), lb(236, 92, 'その 名前は タマです', 12, C.ink, 'middle'), lb(160, 126, "' があるかないかで意味が変わる", 12, C.red, 'middle', true)],
    cap("it's ＝ it is ／ its ＝ その", C.main)),
  F("❓It's tail と書いたらどうなるでしょう。→ 「それは しっぽ は〜」となって、意味が通りません。「その」の意味なら、アポストロフィのない its です。",
    [...ng(14, 30, 130, "It's tail is long."), ...ok(176, 30, 130, 'Its tail is long.'), lb(160, 96, 'its は my・your と同じ仲間', 13, C.ink, 'middle', true)],
    cap("「その」には ' を付けない", C.red)),
  F("❓答えの文でも短縮できるでしょうか。→ できません。be動詞が文の最後に来るときは短縮形にしません。Yes, I am. が正しく、Yes, I'm. は×です。",
    [head('文の終わりでは短縮しない'), ...pair(28, "Yes, I'm.", 'Yes, I am.'), ...pair(64, "Yes, he's.", 'Yes, he is.'), ...pair(100, "Yes, they're.", 'Yes, they are.')],
    cap('Yes の答えは短縮しない', C.red)),
  F("No の答えでは、not が最後に来るので短縮してかまいません。No, I'm not. や No, he isn't. は正しい形です。Yes, I'm not. のような形はありません。",
    [...ok(14, 34, 130, "No, I'm not."), ...ok(176, 34, 130, "No, he isn't."), ...ng(60, 92, 200, "Yes, I'm not.")],
    cap('否定で答えるなら No', C.main)),
  F("まとめです。アポストロフィは省いた文字の場所に置きます。am not に短縮形はなく I'm not。it's は it is、its は「その」。Yes の答えでは短縮しません。",
    [bx(20, 14, 280, 30, "I'm・you're・isn't・aren't", C.blue, FILL.blue, 13), bx(20, 52, 280, 30, "amn't ✕   I'm not ○", C.red, FILL.red, 13), bx(20, 90, 280, 30, "it's ＝ it is ／ its ＝ その", C.green, FILL.green, 13)],
    cap('Yes, I am. ○', C.green)),
], 'be動詞の短縮形');

// ───────── eigo_s045 be動詞⑤：「〜にいる・〜にある」 ─────────
const s045: DiagramFigure = show([
  S('be動詞には、「〜です（＝）」のほかに、「〜にいる・〜にある」という意味もあります。うしろに場所を表す語が来ると、この「存在（そんざい）」の意味になります。',
    [bx(14, 26, 140, 54, 'He is a doctor.\n〜です（＝）', C.blue, FILL.blue, 12), bx(166, 26, 140, 54, 'My father is in\nthe kitchen.\n〜にいる', C.green, FILL.green, 11), lb(160, 110, 'うしろが場所なら「いる・ある」', 12, C.ink, 'middle', true)],
    cap('be動詞の2つの意味', C.main)),
  F('場所を表す語です。in（〜の中に）・on（〜の上に）・under（〜の下に）・near（〜の近くに）・by（〜のそばに）・at（〜に）。どの意味でも am / is / are の使い分けは変わりません。',
    [bx(20, 70, 64, 44, undefined, C.gray, FILL.gray), ci(52, 98, 9, undefined, C.blue, FILL.blue), lb(52, 132, 'in', 13, C.blue, 'middle', true),
      bx(110, 84, 100, 8, undefined, C.main, FILL.yellow), ln(120, 92, 120, 124, C.main), ln(200, 92, 200, 124, C.main), ci(160, 72, 9, undefined, C.red, FILL.red), lb(160, 52, 'on', 13, C.red, 'middle', true), ci(160, 112, 9, undefined, C.green, FILL.green), lb(160, 138, 'under', 13, C.green, 'middle', true), ci(256, 112, 9, undefined, C.purple, FILL.purple), lb(256, 138, 'near', 13, C.purple, 'middle', true)],
    cap('in・on・under・near', C.main)),
  F('❓「かさがある」は have でしょうか。→ いいえ。have は「持っている」で、持ち主の話です。場所を言うときは be動詞を使います。My umbrella is at the door. です。',
    [head('「ある」は be動詞'), bx(14, 30, 292, 28, 'My umbrella has at the door.', C.red, FILL.red, 13), lb(160, 72, '✕  have は「持っている」', 12, C.red, 'middle', true), bx(14, 90, 292, 28, 'My umbrella is at the door.', C.green, FILL.green, 13), lb(160, 132, '○  主語がもの、うしろが場所 → be動詞', 12, C.green, 'middle', true)],
    cap('場所を言う文に have は使わない', C.red)),
  F('「〜がある・〜がいる」と、聞き手がまだ知らないものを新しく話題に出すときは、There is / There are で始めます。There is a cat under the table.（テーブルの下にねこが一匹います）。',
    [bx(14, 14, 292, 28, 'There is a cat under the table.', C.blue, FILL.blue, 13), bx(14, 56, 292, 30, 'There is ＋ 単数のもの ＋ 場所', C.green, FILL.green, 13), bx(14, 94, 292, 30, 'There are ＋ 複数のもの ＋ 場所', C.green, FILL.green, 13)],
    cap('新しく話題に出すとき', C.blue)),
  F('❓is と are は、どう決めるのでしょう。→ There のうしろの名詞に合わせます。There は数を決めません。There are three parks in my town. は、three parks が複数なので are です。',
    [bx(14, 34, 70, 30, 'There', C.gray, FILL.gray, 14), bx(112, 34, 60, 30, 'are', C.red, FILL.red, 14), bx(206, 34, 100, 30, 'three parks', C.blue, FILL.blue, 13), ar(203, 49, 175, 49, C.red), lb(160, 98, 'うしろの名詞が複数 → are', 13, C.red, 'middle', true), lb(160, 122, 'There は数を決めない', 12, C.gray, 'middle')],
    cap('There のうしろの名詞を数える', C.red)),
  F('❓My book は There is で言えるでしょうか。→ 言えません。the・my・this が付いた「すでに決まったもの」は、There is のあとに置きません。ふつうの文にして、My book is on the desk. と言います。',
    [...ng(14, 34, 292, 'There is my book on the desk.'), ...ok(14, 86, 292, 'My book is on the desk.'), lb(160, 130, '聞き手が知っているものは ふつうの文で', 12, C.ink, 'middle', true)],
    cap('決まったものは There is にしない', C.red)),
  F('まとめです。be動詞は「＝」と「いる・ある」の2つの意味。場所を言う文に have は使いません。新しく話題に出すときは There is / are で、うしろの名詞の数に合わせます。',
    [bx(20, 14, 280, 30, 'be動詞 ＝ 〜です ／ 〜にいる・ある', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, '場所を言うときは have ではない', C.red, FILL.red, 13), bx(20, 90, 280, 30, 'There is ＋単数 ／ There are ＋複数', C.green, FILL.green, 12)],
    cap('主語がもの、うしろが場所 → be動詞', C.main)),
], 'be動詞：「いる・ある」と There is / are');

// ───────── eigo_s048 be動詞の疑問文への答え方 ─────────
const s048: DiagramFigure = show([
  S('Are you hungry?（おなかがすいていますか）に答えるときは、Yes か No のあとに〈主語＋be動詞〉を続けます。Yes, I am. / No, I am not. です。',
    [bx(60, 14, 200, 30, 'Are you hungry?', C.blue, FILL.blue, 14), ar(110, 48, 70, 70, C.green), ar(210, 48, 250, 70, C.red), bx(14, 72, 130, 30, 'Yes, I am.', C.green, FILL.green, 14), bx(176, 72, 130, 30, 'No, I am not.', C.red, FILL.red, 14), lb(160, 126, 'Yes, 主語＋be動詞 ／ No, 主語＋be動詞＋not', 11, C.gray, 'middle')],
    cap('問いの動詞をくり返す', C.main)),
  F('❓問いの you は、そのまま答えに使えるでしょうか。→ 使えません。たずねられているのは自分のことなので、I にかえます。Yes, you are. では「はい、あなたはそうです」となってしまいます。',
    [bx(60, 14, 200, 30, 'Are you a student?', C.blue, FILL.blue, 14), ...pair(60, 'Yes, you are.', 'Yes, I am.'), lb(160, 112, 'you で聞かれたら I で答える', 13, C.ink, 'middle', true)],
    cap('相手の立場に立ちかえる', C.main)),
  F('二人以上を聞かれたら we で答えます。Are you and Tom in the same class? － Yes, we are. です。',
    [bx(14, 14, 292, 30, 'Are you and Tom in the same class?', C.blue, FILL.blue, 12), ar(160, 48, 160, 70, C.main), bx(80, 72, 160, 30, 'Yes, we are.', C.green, FILL.green, 14), lb(160, 126, 'you and Tom ＝ 二人以上 → we', 12, C.ink, 'middle', true)],
    cap('二人以上なら we', C.green)),
  F('主語は代名詞に置きかえます。Is Ken your brother? － Yes, he is.（Yes, Ken is. ではない）。this と that は it、these と those は they で受けます。',
    [head('問いの主語 → 答えの代名詞'), ...arow(26, 'Ken', 'he', 170, 13), ...arow(62, 'this / that', 'it', 170, 13), ...arow(98, 'these / those', 'they', 170, 13)],
    cap('Yes, Ken is. は ×', C.red)),
  F('❓Yes の答えは短縮してよいでしょうか。→ いけません。be動詞が文の最後に来るときは短縮形にできません。Yes, I\'m. ではなく Yes, I am.、Yes, he\'s. ではなく Yes, he is. です。',
    [head('Yes の答えは短縮しない'), ...pair(28, "Yes, I'm.", 'Yes, I am.'), ...pair(64, "Yes, he's.", 'Yes, he is.'), ...pair(100, "Yes, they're.", 'Yes, they are.')],
    cap('文の最後の be動詞は短縮しない', C.red)),
  F("No の答えでは、not が最後に来るので、be動詞を短縮できます。No, I am not. / No, I'm not.、No, he is not. / No, he isn't. / No, he's not. のどれでも正しい答えです。",
    [head('No の答えは短縮してよい'), bx(14, 26, 292, 26, "No, I am not.   No, I'm not.", C.green, FILL.green, 13), bx(14, 60, 292, 26, "No, he is not.   No, he isn't.", C.green, FILL.green, 13), bx(14, 94, 292, 26, "No, he's not.", C.green, FILL.green, 13)],
    cap('not が最後に来る', C.green)),
  F('Yes, this is. のように this をそのまま使うのはまちがいです。答えの中では、何を指すか分かっているので、it や they を使います。',
    [bx(14, 12, 292, 28, 'Is this your pen?', C.blue, FILL.blue, 13), ...pair(56, 'Yes, this is.', 'Yes, it is.'), lb(160, 110, 'this・that → it', 13, C.ink, 'middle', true)],
    cap('答えでは代名詞を使う', C.main)),
  F('まとめです。答えは〈Yes, 主語＋be動詞.〉〈No, 主語＋be動詞＋not.〉。主語は代名詞にし、you で聞かれたら I か we。Yes の答えは短縮せず、No の答えは短縮してよい。',
    [bx(20, 14, 280, 30, 'Yes, 主語＋be動詞.  （短縮しない）', C.green, FILL.green, 13), bx(20, 52, 280, 30, 'No, 主語＋be動詞＋not.  （短縮OK）', C.red, FILL.red, 12), bx(20, 90, 280, 30, 'you → I か we ／ 名詞 → 代名詞', C.blue, FILL.blue, 13)],
    cap('Yes, I am. ○', C.green)),
], 'be動詞の疑問文への答え方');

// ───────── eigo_s050 一般動詞①：be動詞ではない動詞 ─────────
const s050: DiagramFigure = show([
  S('英語の動詞は、be動詞（am・is・are）と、それ以外の一般動詞（いっぱんどうし）の2つに分かれます。一般動詞は「〜する」という動作や、気持ち・状態を表します。',
    [bx(14, 20, 140, 60, 'be動詞\nam  is  are', C.red, FILL.red, 14), bx(166, 20, 140, 60, '一般動詞\nplay  like  have\ngo  study …', C.blue, FILL.blue, 12), lb(160, 110, 'この2つのグループ', 13, C.ink, 'middle', true)],
    cap('be動詞 ／ 一般動詞', C.main)),
  F('動作を表す一般動詞は play・run・go・come・study・read・write・eat・speak。気持ちや状態を表すものは like・want・know・have・live・need です。',
    [head('一般動詞のなかま'), ...trow(26, '動作', 'play  run  go  study', C.blue, FILL.blue, 100, 28, 12), ...trow(64, '気持ち・状態', 'like  want  know  have', C.green, FILL.green, 100, 28, 12)],
    cap('am・is・are 以外はぜんぶ', C.blue)),
  F('❓I like English.（私は英語が好きです）は、「です」で終わるので be動詞でしょうか。→ いいえ。動詞は like です。日本語の「です」ではなく、使われている語で判断します。',
    [bx(14, 14, 292, 28, '私は 英語が 好きです', C.gray, FILL.gray, 13), ar(160, 46, 160, 62, C.main), bx(14, 66, 70, 30, 'I', C.blue, FILL.blue, 14), bx(94, 66, 80, 30, 'like', C.red, FILL.red, 14), bx(184, 66, 122, 30, 'English.', C.blue, FILL.blue, 14), lb(160, 126, '動詞は like（一般動詞）', 13, C.red, 'middle', true)],
    cap('be動詞は入らない', C.red)),
  F('❓I am play tennis. はなぜ誤りなのでしょう。→ 動詞が2つ並んでいるからです。英語の文に動詞は1つだけ。play を使うなら am は要りません。',
    [bx(14, 14, 70, 30, 'I', C.blue, FILL.blue, 14), bx(94, 14, 60, 30, 'am', C.red, FILL.red, 14), bx(164, 14, 60, 30, 'play', C.red, FILL.red, 14), bx(234, 14, 72, 30, 'tennis.', C.blue, FILL.blue, 13), lb(124, 62, '動詞が2つ！', 13, C.red, 'middle', true), ar(160, 74, 160, 88, C.main), bx(80, 92, 160, 30, 'I play tennis.', C.green, FILL.green, 14)],
    cap('動詞は1つだけ', C.red)),
  F('ほかにも He is likes music.、We are study English. はどれも動詞が2つです。be動詞は「＝」を表すので、そこへ play や like をもう1つ足すことはできません。',
    [head('動詞を2つ並べない'), ...pair(28, 'He is likes music.', 'He likes music.', 140), ...pair(64, 'We are study English.', 'We study English.', 140), ...pair(100, 'I am like dogs.', 'I like dogs.', 140)],
    cap('二重の動詞は ×', C.red)),
  F('語順にも注意です。日本語は「私は テニスを します」と動詞が最後ですが、英語は I play tennis の順で、「何を」が動詞のうしろに来ます。',
    [bx(14, 14, 90, 28, '私は', C.gray, FILL.gray, 13), bx(114, 14, 90, 28, 'テニスを', C.gray, FILL.gray, 13), bx(214, 14, 90, 28, 'します', C.gray, FILL.gray, 13), bx(14, 98, 90, 28, 'I', C.blue, FILL.blue, 13), bx(114, 98, 90, 28, 'play', C.red, FILL.red, 13), bx(214, 98, 90, 28, 'tennis', C.green, FILL.green, 13),
      ar(59, 44, 59, 96, C.blue), ar(260, 44, 164, 96, C.red), ar(159, 44, 259, 96, C.green)],
    cap('動詞は主語のすぐあと', C.main)),
  F('日本語の順のまま並べると、I tennis like. のようになってしまいます。書くときは「だれが → どうする → 何を」と口に出して組み立てます。',
    [...pair(18, 'I tennis like.', 'I like tennis.'), ...rowb(['だれが\nI', 'どうする\nlike', '何を\ntennis'], 70, 50, C.blue, FILL.blue, 12, 20, 300, 20)],
    cap('だれが → どうする → 何を', C.main)),
  F('まとめです。一般動詞は be動詞以外の動詞。一つの文に動詞は一つだけで、be動詞と並べません。語順は「だれが → どうする → 何を」。日本語の「です」につられないようにしましょう。',
    [bx(20, 14, 280, 30, '一般動詞 ＝ am・is・are 以外', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, '一文に動詞は一つ', C.red, FILL.red, 13), bx(20, 90, 280, 30, '語順：主語 → 動詞 → 何を', C.green, FILL.green, 13)],
    cap('I like tennis. ○', C.green)),
], '一般動詞とは何か');

// ───────── eigo_s052 三人称単数現在の -s ①：付ける・付けないの見分け ─────────
const s052: DiagramFigure = show([
  S('He play soccer. は日本語の感覚ではおかしくありませんが、英語では He plays soccer. と動詞に -s が付きます。主語が「自分でも相手でもない1人」のときだけ付くきまりです。',
    [...pair(30, 'He play soccer.', 'He plays soccer.', 136), lb(160, 86, '動詞のおわりに s', 13, C.red, 'middle', true), lb(160, 112, '主語が「自分でも相手でもない1人」のとき', 12, C.ink, 'middle')],
    cap('三単現の -s', C.red)),
  F('❓「三人称」とは何でしょう。→ 一人称は I・we（自分をふくむ）、二人称は you（相手）、三人称はそれ以外のすべて（he, she, it, Ken, my mother, the dog …）です。',
    [head('人称の分け方'), ...trow(26, '一人称', 'I ・ we （自分）', C.blue, FILL.blue, 90, 28, 12), ...trow(62, '二人称', 'you （相手）', C.green, FILL.green, 90, 28, 12), ...trow(98, '三人称', 'he  she  it  Ken  the dog', C.red, FILL.red, 90, 28, 11)],
    cap('それ以外はぜんぶ三人称', C.red)),
  F('単数は一人・一つ、複数は二つ以上です。-s が付くのは、①三人称 ②単数 ③現在の文、この3つがそろったときだけです。',
    [...rowb(['① 三人称', '② 単数', '③ 現在の文'], 14, 40, C.blue, FILL.blue, 13, 10, 310, 8), ar(160, 58, 160, 78, C.main), bx(70, 82, 180, 32, '動詞に -s を付ける', C.red, FILL.red, 14), lb(160, 130, '1つでも欠けたら付けない', 12, C.ink, 'middle', true)],
    cap('3つそろったときだけ', C.red)),
  F('例です。He plays tennis.、She likes music.、My father works at a bank.、This bus goes to the station. 主語はどれも三人称で単数です。',
    [bx(14, 14, 292, 26, 'He plays tennis.', C.green, FILL.green, 13), bx(14, 46, 292, 26, 'She likes music.', C.green, FILL.green, 13), bx(14, 78, 292, 26, 'My father works at a bank.', C.green, FILL.green, 13), bx(14, 110, 292, 26, 'This bus goes to the station.', C.green, FILL.green, 13)],
    cap('主語は三人称・単数', C.green)),
  F('❓I や you は単数なのに、なぜ -s が付かないのでしょう。→ ①の「三人称」ではないからです。I play / You play のまま使います。',
    [...ok(14, 36, 130, 'I play'), ...ok(176, 36, 130, 'You play'), ...ng(90, 92, 140, 'I plays'), lb(160, 138, 'I と you は三人称ではない', 12, C.ink, 'middle', true)],
    cap('I・you には付けない', C.main)),
  F('主語が複数のときも付けません。My friends like soccer.（My friends likes ✕）、They live in Tokyo. です。',
    [...pair(30, 'My friends likes soccer.', 'My friends like soccer.', 142), lb(160, 86, '主語が複数 → -s なし', 13, C.ink, 'middle', true), bx(70, 100, 180, 28, 'They live in Tokyo.', C.green, FILL.green, 13)],
    cap('複数には付けない', C.main)),
  F('❓reads の s と books の s は同じものでしょうか。→ ちがいます。動詞の s は「主語が三人称単数」の合図、名詞の s は「二つ以上」の合図です。動詞の -s を決めるのは、いつでも主語です。',
    [bx(14, 20, 50, 28, 'He', C.blue, FILL.blue, 14), bx(70, 20, 80, 28, 'reads', C.red, FILL.red, 14), bx(156, 20, 90, 28, 'books', C.green, FILL.green, 14), lb(98, 74, '主語 He が三人称単数', 11, C.red, 'middle'), lb(216, 74, '本が二冊以上', 11, C.green, 'middle'), bx(60, 96, 200, 28, 'He has three dogs.', C.main, FILL.yellow, 13), lb(160, 138, '動詞 has を決めるのは主語 He', 11, C.gray, 'middle')],
    cap('動詞の -s は主語で決まる', C.red)),
  F('まとめです。三人称・単数・現在の3つがそろったときだけ、動詞に -s を付けます。I と you、複数の主語には付けません。-s を決めるのは、いつでも主語です。',
    [bx(20, 14, 280, 30, '三人称 ＋ 単数 ＋ 現在 → -s', C.red, FILL.red, 13), bx(20, 52, 280, 30, 'I・you・複数 → -s なし', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, '決めるのは主語', C.green, FILL.green, 13)],
    cap('He plays soccer. ○', C.green)),
], '三人称単数現在の -s');

// ───────── eigo_s054 三人称単数現在の -s ③：y で終わる動詞と have ─────────
const s054: DiagramFigure = show([
  S('study は studies になるのに、play は plays です。同じ y で終わるのに、変わり方がちがいます。分かれ目は、y の直前の文字です。',
    [...tiles('study', 80, 22, { mark: { 3: BL, 4: RD } }), ar(80, 54, 80, 70, C.main), ...tiles('studies', 80, 74, { w: 18, mark: { 3: BL, 4: RD, 5: RD } }), ...tiles('play', 240, 22, { mark: { 2: BL, 3: GR } }), ar(240, 54, 240, 70, C.main), ...tiles('plays', 240, 74, { mark: { 2: BL, 3: GR, 4: GR } }), lb(160, 130, 'y の直前を見る', 13, C.ink, 'middle', true)],
    cap('study → studies ／ play → plays', C.main)),
  F('❓直前が子音（しいん）のとき、どうなるのでしょう。→ y を i にかえて -es を付けます。study の y の前は d（子音）なので studies。carry → carries、try → tries、cry → cries、fly → flies です。',
    [...tiles('study', 108, 12, { mark: { 3: BL, 4: RD } }), lb(200, 25, 'd は子音', 12, C.blue, 'start', true), ar(108, 42, 108, 58, C.main), ...tiles('studies', 108, 62, { w: 20, mark: { 4: RD, 5: RD, 6: RD } }), lb(200, 75, 'y → ies', 12, C.red, 'start', true), lb(160, 118, 'carry → carries   try → tries', 12, C.ink, 'middle', true), lb(160, 136, 'cry → cries   fly → flies', 12, C.ink, 'middle', true)],
    cap('子音＋y → ies', C.red)),
  F('直前が母音（ぼいん）のときは、そのまま -s です。play の y の前は a（母音）なので plays。stay → stays、enjoy → enjoys、buy → buys、say → says です。',
    [...tiles('play', 108, 12, { mark: { 2: GR, 3: BL } }), lb(200, 25, 'a は母音', 12, C.green, 'start', true), ar(108, 42, 108, 58, C.main), ...tiles('plays', 108, 62, { w: 20, mark: { 4: GR } }), lb(200, 75, 'そのまま s', 12, C.green, 'start', true), lb(160, 118, 'stay → stays   enjoy → enjoys', 12, C.ink, 'middle', true), lb(160, 136, 'buy → buys   say → says', 12, C.ink, 'middle', true)],
    cap('母音＋y → そのまま s', C.green)),
  F('母音は a・i・u・e・o の5つだけで、それ以外はすべて子音です。手順は「語尾が y か → 直前の1文字は母音か子音か」の2段階で確かめます。',
    [head('母音は5つだけ'), ...rowb(['a', 'i', 'u', 'e', 'o'], 22, 34, C.green, FILL.green, 16), bx(14, 72, 130, 40, '① 語尾は y か？', C.blue, FILL.blue, 13), ar(148, 92, 168, 92, C.main), bx(172, 72, 134, 40, '② 直前は\n母音か子音か？', C.blue, FILL.blue, 12)],
    cap('子音なら ies、母音なら s', C.main)),
  F('have だけは特別で、has になります。haves という語はありません。I have a dog. → He has a dog. です。',
    [...ng(14, 30, 130, 'haves'), ...ok(176, 30, 130, 'has'), bx(30, 84, 260, 28, 'I have a dog.  →  He has a dog.', C.blue, FILL.blue, 13)],
    cap('have は完全な例外', C.red)),
  F('go は goes、do は does のように、o で終わる動詞は -es を付けます。入試でとくに出るのは has・goes・does の3つです。',
    [head('とくに出る3つ'), ...trow(26, 'go', 'goes  （o で終わる → es）', C.purple, FILL.purple, 80, 28, 13), ...trow(62, 'do', 'does  （o で終わる → es）', C.purple, FILL.purple, 80, 28, 13), ...trow(98, 'have', 'has  （完全な例外）', C.purple, FILL.purple, 80, 28, 13)],
    cap('has・goes・does', C.purple)),
  F('名詞の複数形も同じ規則です。city → cities、country → countries、baby → babies（子音＋y）。boy → boys、day → days、key → keys（母音＋y）。動詞と名詞で同じ規則が働きます。',
    [bx(14, 14, 140, 28, '子音＋y → ies', C.red, FILL.red, 13), bx(166, 14, 140, 28, '母音＋y → s', C.green, FILL.green, 13), bx(14, 50, 140, 70, 'city → cities\ncountry → countries\nbaby → babies', C.red, FILL.red, 12), bx(166, 50, 140, 70, 'boy → boys\nday → days\nkey → keys', C.green, FILL.green, 12)],
    cap('名詞でも同じ規則', C.main)),
  F('まとめです。y で終わる動詞は、直前が子音なら y を i にして -es、母音ならそのまま -s。have だけは has。まず「y の直前の1文字」を見る習慣をつけましょう。',
    [bx(20, 14, 280, 30, '子音＋y → studies', C.red, FILL.red, 13), bx(20, 52, 280, 30, '母音＋y → plays', C.green, FILL.green, 13), bx(20, 90, 280, 30, 'have → has', C.blue, FILL.blue, 13)],
    cap('studys ✕ → studies ○', C.green)),
], 'y で終わる動詞と have の三単現');

// ───────── eigo_s055 三人称単数現在の -s ④：主語を正しく見つける ─────────
const s055: DiagramFigure = show([
  S('The boy with two dogs run fast. はどこがまちがいでしょう。走るのは boy 1人なので runs です。dogs につられて複数だと思ってしまうのが、まちがいの原因です。',
    [...svm(22, [['The boy', 'S', 62], ['with two dogs', 'M', 106], ['run', 'V', 40], ['fast.', 'M', 52]], 18), ar(60, 54, 150, 82, C.blue), lb(160, 96, '動詞の形を決めるのは boy（1人）', 12, C.ink, 'middle', true), bx(70, 108, 180, 28, 'runs に直す', C.green, FILL.green, 13)],
    cap('主語の中心の名詞を見る', C.main)),
  F('❓どれが主語の中心でしょう。→ with・in・from・of などの前置詞（ぜんちし）で始まるかたまりは、前の名詞を説明するだけで、主語の中心ではありません。線を引いて消すと主語が見えてきます。',
    [head('前置詞のかたまりは消す'), ...svm(26, [['The girl', 'S', 62], ['with two dogs', 'M', 92], ['lives', 'V', 46], ['near my house.', 'M', 86]], 10), lb(160, 80, '↑ 消してしまう', 11, C.gray, 'middle'), bx(70, 94, 180, 30, 'The girl lives', C.green, FILL.green, 14)],
    cap('with two dogs は説明だけ', C.main)),
  F('同じように見ていきましょう。The students in my class study very hard. の主語の中心は The students（複数）なので study。A boy from Canada speaks Japanese well. は A boy（1人）なので speaks です。',
    [...svm(16, [['The students', 'S', 80], ['in my class', 'M', 76], ['study', 'V', 48], ['very hard.', 'M', 68]], 10), lb(160, 60, '複数 → study', 12, C.green, 'middle', true), ...svm(84, [['A boy', 'S', 52], ['from Canada', 'M', 84], ['speaks', 'V', 56], ['Japanese well.', 'M', 92]], 10), lb(160, 128, '1人 → speaks', 12, C.green, 'middle', true)],
    cap('my class にひかれない', C.red)),
  F('❓Everyone は「みんな」だから複数でしょうか。→ いいえ。everyone・everybody と every＋単数名詞は、意味は「みんな」でも単数あつかいです。Everyone likes this song. Every student has a computer.',
    [head('単数あつかいの主語', C.green), bx(14, 28, 292, 28, 'Everyone likes this song.', C.green, FILL.green, 13), bx(14, 64, 292, 28, 'Every student has a computer.', C.green, FILL.green, 13), lb(160, 116, '意味は「みんな」でも -s を付ける', 12, C.red, 'middle', true)],
    cap('every は単数あつかい', C.green)),
  F('and でつなぐと複数です。My family and I go to the beach every summer. 複数なので go です。These books are interesting. も複数です。',
    [head('and でつなぐと複数'), bx(14, 28, 292, 28, 'My family and I go to the beach.', C.blue, FILL.blue, 12), bx(14, 64, 292, 28, 'These books are interesting.', C.blue, FILL.blue, 13), lb(160, 116, '複数の主語 → -s なし', 12, C.ink, 'middle', true)],
    cap('and は 複数のしるし', C.blue)),
  F('三単現の -s は「現在の文の一般動詞」だけの話です。過去の文（He played）や be動詞の文（He is）には関係しません。',
    [bx(14, 24, 292, 28, '現在の文の一般動詞  → -s を考える', C.green, FILL.green, 13), bx(14, 60, 292, 28, '過去の文（He played）  → 関係なし', C.gray, FILL.gray, 13), bx(14, 96, 292, 28, 'be動詞の文（He is）  → 関係なし', C.gray, FILL.gray, 13)],
    cap('現在の一般動詞だけ', C.main)),
  F('書いたあとの確認は3つです。①主語はどれか ②単数か複数か ③現在の文か。この確認だけで、失点が大きく減ります。',
    [bx(20, 14, 280, 30, '① 主語はどれか', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, '② 単数か複数か', C.green, FILL.green, 13), bx(20, 90, 280, 30, '③ 現在の文か', C.red, FILL.red, 13)],
    cap('口の中で3つ確かめる', C.main)),
  F('まとめです。動詞の形を決めるのは、主語の中心の名詞です。前置詞のかたまりは消して考え、everyone や every＋名詞は単数あつかいにします。',
    [bx(20, 14, 280, 30, '前置詞のかたまりは消す', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, 'everyone・every ＋名詞 は単数', C.green, FILL.green, 13), bx(20, 90, 280, 30, 'and でつなぐと複数', C.red, FILL.red, 13)],
    cap('主語の中心を見つける', C.main)),
], '三単現の -s：主語を正しく見つける');

// ───────── eigo_s057 一般動詞の否定文②：does not（doesn't）と原形 ─────────
const s057: DiagramFigure = show([
  S("He doesn't plays soccer. は最頻出（さいひんしゅつ）のまちがいです。doesn't を使ったら、動詞は原形（げんけい）の play にもどします。",
    [...vpair(14, "He doesn't plays soccer.", "He doesn't play soccer."), lb(160, 104, "doesn't のあとは原形", 14, C.red, 'middle', true), lb(160, 128, '原形 ＝ -s も -es も付かない形', 12, C.ink, 'middle')],
    cap("doesn't plays ✕ → doesn't play ○", C.red)),
  F("❓なぜ plays ではだめなのでしょう。→ 「三人称単数」という情報を、does がすでに引き受けているからです。動詞にも -s を付けると二重になります。-s は文の中に1つだけです。",
    [bx(14, 30, 60, 34, 'He', C.blue, FILL.blue, 14), bx(84, 30, 110, 34, "doesn't", C.red, FILL.red, 14), bx(204, 30, 102, 34, 'play', C.green, FILL.green, 14), lb(139, 84, '三単現の仕事は', 11, C.red, 'middle'), lb(139, 100, 'ここが引き受ける', 11, C.red, 'middle'), lb(255, 90, '原形のまま', 12, C.green, 'middle', true)],
    cap('-s は文の中に1か所だけ', C.red)),
  F("使い分けは主語で決まります。I・you・we・they と複数の名詞なら don't、he・she・it と単数の名詞なら doesn't です。",
    [head('don\'t か doesn\'t か'), ...trow(26, "don't", 'I / you / we / they ・複数の名詞', C.blue, FILL.blue, 70, 30, 12), ...trow(66, "doesn't", 'he / she / it ・単数の名詞', C.red, FILL.red, 70, 30, 12)],
    cap('主語を見て選ぶ', C.main)),
  F("肯定文で has だった動詞も、否定文では原形の have にもどります。He has a bike. → He doesn't have a bike. です。He doesn't has a bike. は誤りです。",
    [bx(14, 18, 292, 28, 'He has a bike.', C.blue, FILL.blue, 13), ar(160, 50, 160, 66, C.main), bx(14, 70, 292, 28, "He doesn't have a bike.", C.green, FILL.green, 13), ...ng(60, 118, 200, "He doesn't has a bike.")],
    cap('has → have にもどす', C.red)),
  F("ほかの動詞も同じです。goes → go、does → do、studies → study、watches → watch、teaches → teach と、-s / -es を取って原形にします。",
    [head('原形にもどす'), ...rowb(['goes\n→ go', 'does\n→ do', 'studies\n→ study'], 24, 46, C.green, FILL.green, 12, 10, 310, 8), ...rowb(['watches\n→ watch', 'teaches\n→ teach'], 78, 46, C.green, FILL.green, 12, 10, 210, 8)],
    cap('-s / -es を取る', C.green)),
  F("書いたあとの確認は2つです。①主語は三人称単数か → doesn't ②そのうしろの動詞は原形か。②は、肯定文の形（plays, has）が指に残りやすいので、意識して見直します。",
    [bx(20, 24, 280, 36, "① 主語は三人称単数か  → doesn't", C.blue, FILL.blue, 13), bx(20, 74, 280, 36, '② うしろの動詞は原形か', C.red, FILL.red, 13), lb(160, 130, '肯定文の形が指に残りやすい', 12, C.ink, 'middle')],
    cap('この2つを毎回確かめる', C.main)),
  F("つづりにも注意です。does not を短縮すると doesn't です。does'nt や dose'nt と書くまちがいが多いので、アポストロフィの位置（n と t のあいだ）を確かめます。",
    [...tiles("doesn't", 160, 16, { w: 22, mark: { 5: RD } }), lb(160, 56, "' は n と t のあいだ", 12, C.red, 'middle', true), ...ng(14, 84, 130, "does'nt"), ...ok(176, 84, 130, "doesn't"), lb(160, 134, "dose'nt も ×", 11, C.gray, 'middle')],
    cap("n't の形で覚える", C.red)),
  F("まとめです。主語が三人称単数なら doesn't。そのうしろの動詞は必ず原形で、has も have にもどします。三単現の -s は文の中で1か所だけです。",
    [bx(20, 14, 280, 30, "三人称単数 → doesn't", C.blue, FILL.blue, 13), bx(20, 52, 280, 30, '動詞は原形（-s を取る）', C.red, FILL.red, 13), bx(20, 90, 280, 30, 'has → have', C.green, FILL.green, 13)],
    cap("He doesn't play soccer. ○", C.green)),
], "does not（doesn't）と原形");

// ───────── eigo_s059 一般動詞の疑問文②：Does 〜? と答え方 ─────────
const s059: DiagramFigure = show([
  S('Does he plays tennis? と書いてしまう人が絶えません。Does がすでに三単現を表しているので、動詞は原形にもどします。',
    [...vpair(14, 'Does he plays tennis?', 'Does he play tennis?'), lb(160, 110, 'Does のあとは原形', 14, C.red, 'middle', true)],
    cap('Does he plays ✕ → Does he play ○', C.red)),
  F('形は〈Does＋主語＋動詞の原形〜?〉です。主語が he・she・it や一人・一つの名詞のとき、Do ではなく Does で文を始めます。',
    [head('Does ＋ 主語 ＋ 原形'), ...pair(26, 'He plays soccer.', 'Does he play soccer?', 128), ...pair(62, 'She likes English.', 'Does she like English?', 128), ...pair(98, 'They live here.', 'Do they live here?', 142)],
    cap('Does が文のはじめに出る', C.blue)),
  F('動詞はいつも原形です。Does she studies math? ではなく Does she study math?、Does he has a car? ではなく Does he have a car? です。',
    [head('原形にもどす'), ...pair(26, 'Does he plays soccer?', 'Does he play soccer?', 142), ...pair(62, 'Does she studies math?', 'Does she study math?', 142), ...pair(98, 'Does he has a car?', 'Does he have a car?', 142)],
    cap('-s も has も ×', C.red)),
  F('❓なぜ原形なのでしょう。→ 否定文と同じ理由です。「三人称単数」という情報を、Does がすでに持っているからです。Do / Does / Did のうしろの動詞は、いつでも原形です。',
    [bx(14, 30, 70, 34, 'Does', C.red, FILL.red, 14), bx(94, 30, 60, 34, 'he', C.blue, FILL.blue, 14), bx(164, 30, 80, 34, 'play', C.green, FILL.green, 14), bx(254, 30, 52, 34, '?', C.gray, FILL.gray, 14), lb(49, 82, '三単現を持つ', 11, C.red, 'middle'), lb(204, 82, '原形', 12, C.green, 'middle', true), lb(160, 120, 'Do・Does・Did のうしろは原形', 13, C.ink, 'middle', true)],
    cap('否定文も疑問文も同じ規則', C.main)),
  F('答え方は、Does で聞かれたら does で答えます。Yes, he does. / No, he doesn\'t. です。',
    [bx(40, 14, 240, 30, 'Does he play the piano?', C.blue, FILL.blue, 14), ar(110, 48, 70, 70, C.green), ar(210, 48, 250, 70, C.red), bx(14, 72, 130, 30, 'Yes, he does.', C.green, FILL.green, 14), bx(176, 72, 130, 30, "No, he doesn't.", C.red, FILL.red, 14)],
    cap('Does → does で答える', C.main)),
  F('答えの主語は代名詞にします。Does Ken live near here? － Yes, he does.（Yes, Ken does. ではない）。Does that dog have a name? － Yes, it does. です。',
    [head('問いの主語 → 答えの代名詞'), ...arow(26, 'Ken', 'he', 170, 13), ...arow(62, 'that dog', 'it', 170, 13), ...arow(98, 'your sister', 'she', 170, 13)],
    cap('Yes, Ken does. は ×', C.red)),
  F('❓Does 〜? に Yes, she is. と答えてよいでしょうか。→ いけません。問いの最初の語と、答えに使う語をそろえます。Does なら does、Is なら is です。',
    [bx(30, 14, 260, 30, 'Does she like cats?', C.blue, FILL.blue, 14), ...pair(62, 'Yes, she is.', 'Yes, she does.', 126), lb(160, 118, '問いの最初の語と答えの語をそろえる', 12, C.ink, 'middle', true)],
    cap('Does → does、Is → is', C.main)),
  F('まとめです。Does のうしろの動詞は原形、has は have に。答えも Yes, he does. のように does でそろえ、主語は代名詞にします。ここは入試でもっとも多い失点の一つです。',
    [bx(20, 14, 280, 30, 'Does ＋ 主語 ＋ 動詞の原形', C.blue, FILL.blue, 13), bx(20, 52, 280, 30, '答えも does でそろえる', C.green, FILL.green, 13), bx(20, 90, 280, 30, 'has → have ／ 主語は代名詞', C.red, FILL.red, 13)],
    cap('Does he play tennis? ○', C.green)),
], 'Does の疑問文と答え方');

// ───────── eigo_s061 混同を防ぐ①：一文に動詞は一つ ─────────
const s061: DiagramFigure = show([
  S('I am like dogs. も He is play baseball. も、まちがいの正体は同じです。動詞を2つ並べていることです。',
    [bx(14, 16, 50, 28, 'I', C.blue, FILL.blue, 13), bx(70, 16, 50, 28, 'am', C.red, FILL.red, 13), bx(126, 16, 60, 28, 'like', C.red, FILL.red, 13), bx(192, 16, 70, 28, 'dogs.', C.blue, FILL.blue, 13), lb(100, 62, '動詞が2つ', 13, C.red, 'middle', true), ar(160, 74, 160, 90, C.main), bx(70, 94, 180, 28, 'I like dogs.', C.green, FILL.green, 14)],
    cap('動詞は一つだけ', C.red)),
  F('❓なぜ動詞を2つ書いてしまうのでしょう。原因は3つあります。①日本語の「です・ます」に引かれる ②主語のあとには am / is / are と手が覚えている ③「〜しています」を進行形と思ってしまう。',
    [bx(14, 12, 292, 34, '① 「です・ます」に引かれる', C.blue, FILL.blue, 13), bx(14, 52, 292, 34, '② 主語のあとに be動詞を書く手ぐせ', C.green, FILL.green, 13), bx(14, 92, 292, 34, '③ 「〜しています」を進行形と思う', C.red, FILL.red, 13)],
    cap('原因は3つ', C.main)),
  F('日本語では「〜です」「〜にいます」と訳すのに、英語では一般動詞を使う語があります。live（住んでいる）、belong to（所属している）、have（持っている）、know（知っている）。be動詞を足さないようにします。',
    [head('be動詞を足さない'), ...pair(26, 'I am live in Osaka.', 'I live in Osaka.', 140), ...pair(62, 'I am know him.', 'I know him.', 140), ...pair(98, 'I am have two sisters.', 'I have two sisters.', 140)],
    cap('live・know・have は一般動詞', C.red)),
  F('❓では、be動詞を使うのはどんなときでしょう。→ うしろに形容詞（様子を表す語）や名詞（名前）、場所が続くときです。I am happy.、He is a doctor.、She is at home.',
    [head('be動詞を使う文', C.green), bx(14, 28, 292, 28, 'I am happy.   （様子）', C.green, FILL.green, 13), bx(14, 64, 292, 28, 'He is a doctor.   （名前）', C.green, FILL.green, 13), bx(14, 100, 292, 28, 'She is at home.   （場所）', C.green, FILL.green, 13)],
    cap('様子・名前・場所 → be動詞', C.green)),
  F('切り分けのしかたです。うしろに来るのが「動作を表す語」なら一般動詞だけ、「名前・様子を表す語」なら be動詞です。',
    [bx(14, 20, 130, 40, 'うしろが\n動作を表す語', C.blue, FILL.blue, 12), ar(148, 40, 168, 40, C.main), bx(172, 20, 134, 40, '一般動詞だけ', C.blue, FILL.blue, 13), bx(14, 78, 130, 40, 'うしろが\n名前・様子', C.red, FILL.red, 12), ar(148, 98, 168, 98, C.main), bx(172, 78, 134, 40, 'be動詞', C.red, FILL.red, 13)],
    cap('うしろの語で切り分ける', C.main)),
  F('❓「毎日サッカーをしています」は進行形でしょうか。→ 習慣（毎日のこと）なので、現在形の I play soccer every day. です。今この瞬間の動作なら I am playing soccer now. と ing の形にします。',
    [bx(14, 20, 292, 30, 'I play soccer every day.   （習慣）', C.green, FILL.green, 13), bx(14, 66, 292, 30, 'I am playing soccer now.   （いま）', C.blue, FILL.blue, 13), lb(160, 122, '習慣は現在形、いまの動作は ing の形', 12, C.ink, 'middle', true)],
    cap('原形を並べない', C.main)),
  F('書き終わったら、動詞に丸を付けてみます。丸が2つ付いたら、どちらかが余分です。He is plays baseball. は is と plays の2つに丸が付くので、まちがいと分かります。',
    [bx(14, 24, 50, 28, 'He', C.blue, FILL.blue, 13), ci(98, 38, 20, 'is', C.red, FILL.red, 13), ci(160, 38, 26, 'plays', C.red, FILL.red, 13), bx(210, 24, 96, 28, 'baseball.', C.blue, FILL.blue, 13), lb(130, 82, '丸が2つ！', 14, C.red, 'middle', true), ar(130, 92, 130, 106, C.main), bx(70, 108, 180, 28, 'He plays baseball.', C.green, FILL.green, 13)],
    cap('動詞に丸をつけて数える', C.main)),
  F('まとめです。一つの文に動詞は一つだけ。日本語の「です・ます」につられて be動詞を足さないこと。書き終わったら、動詞に丸を付けて数えましょう。',
    [bx(20, 14, 280, 30, '動詞は一文に一つ', C.red, FILL.red, 13), bx(20, 52, 280, 30, 'live・know・have に am は不要', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, '書いたら動詞に丸をつける', C.green, FILL.green, 13)],
    cap('I live in Osaka. ○', C.green)),
], '一文に動詞は一つ');

// ───────── eigo_s062 混同を防ぐ②：否定文は isn't か doesn't か ─────────
const s062: DiagramFigure = show([
  S("否定文を作るとき、not だけでよいのか、do を借りるのか。決め手は、もとの文の動詞が be動詞かどうか、その一点です。",
    [bx(70, 8, 180, 30, 'もとの文の動詞は？', C.blue, FILL.blue, 13), ar(130, 42, 78, 68, C.red), ar(190, 42, 242, 68, C.green), bx(14, 70, 140, 34, 'am / is / are', C.red, FILL.red, 13), bx(166, 70, 140, 34, 'それ以外（一般動詞）', C.green, FILL.green, 12), ar(84, 108, 84, 122, C.main), ar(236, 108, 236, 122, C.main), lb(84, 134, 'not を後ろに', 12, C.red, 'middle', true), lb(236, 134, "don't / doesn't を前に", 11, C.green, 'middle', true)],
    cap('動詞の種類で決める', C.main)),
  F("be動詞の文は、うしろに not を置くだけです。He is a teacher. → He isn't a teacher.、They are busy. → They aren't busy.、I am tired. → I'm not tired. です。",
    [head('be動詞 → not をうしろに', C.red), ...pair(26, 'He is a teacher.', "He isn't a teacher.", 142), ...pair(62, 'They are busy.', "They aren't busy.", 142), ...pair(98, 'I am tired.', "I'm not tired.", 142)],
    cap('be動詞だけで否定できる', C.red)),
  F("一般動詞の文は、動詞の前に don't / doesn't を置きます。He speaks Japanese. → He doesn't speak Japanese.、They play tennis. → They don't play tennis. です。",
    [head("一般動詞 → don't / doesn't を前に", C.green), ...pair(26, 'He speaks Japanese.', "He doesn't speak Japanese.", 142), ...pair(62, 'They play tennis.', "They don't play tennis.", 142), ...pair(98, 'I know him.', "I don't know him.", 142)],
    cap('動詞は原形にもどす', C.green)),
  F("❓二方向のまちがいを見つけましょう。He doesn't a teacher. は動詞がゼロ（is が消えた）、He isn't speak Japanese. は動詞が二つ（is と speak）。どちらも動詞を数えれば気づけます。",
    [...ng(14, 26, 292, "He doesn't a teacher."), lb(160, 68, '動詞が 0 こ（is が消えた）', 13, C.red, 'middle', true), ...ng(14, 92, 292, "He isn't speak Japanese."), lb(160, 134, '動詞が 2 こ（is と speak）', 13, C.red, 'middle', true)],
    cap('動詞を数える', C.red)),
  F("❓なぜ be動詞は not だけで、一般動詞は do を借りるのでしょう。→ be動詞は、それ自体が「〜である」という意味を持ち、うしろに not を置くだけで否定できます。ところが一般動詞は、そのままでは not を付けられないので、「do」という手伝いの語を借ります。",
    [bx(14, 14, 60, 30, 'He', C.blue, FILL.blue, 13), bx(80, 14, 50, 30, 'is', C.red, FILL.red, 13), bx(136, 14, 60, 30, 'not', C.gray, FILL.gray, 13), lb(250, 29, 'そのまま付く', 12, C.red, 'middle', true), bx(14, 70, 60, 30, 'He', C.blue, FILL.blue, 13), bx(80, 70, 90, 30, "doesn't", C.green, FILL.green, 13), bx(176, 70, 80, 30, 'speak', C.green, FILL.green, 13), lb(160, 124, 'do が 手伝いの語になる', 12, C.green, 'middle', true)],
    cap('一般動詞は do を借りる', C.green)),
  F("手順は3段階です。①もとの文の動詞をさがす ②am / is / are ならうしろに not ③それ以外なら、主語を見て don't か doesn't を選び、動詞を原形にする。",
    [bx(20, 10, 280, 32, '① もとの文の動詞をさがす', C.blue, FILL.blue, 13), ar(160, 44, 160, 52, C.main), bx(20, 54, 280, 32, '② be動詞 → not をうしろに', C.red, FILL.red, 13), ar(160, 88, 160, 96, C.main), bx(20, 98, 280, 32, "③ 一般動詞 → don't / doesn't ＋ 原形", C.green, FILL.green, 12)],
    cap('3段階で決める', C.main)),
  F("have は一般動詞なので、I don't have a dog. です（I am not have ✕）。また、There is の文の否定は、be動詞の規則にしたがって There isn't ... となります。",
    [...pair(20, 'I am not have a dog.', "I don't have a dog.", 140), bx(14, 66, 292, 28, "There is a cat.  →  There isn't a cat.", C.blue, FILL.blue, 12), lb(160, 120, 'There is は be動詞 → not をうしろに', 12, C.ink, 'middle', true)],
    cap('have は一般動詞', C.main)),
  F("まとめです。be動詞の文は not だけ、一般動詞の文は do を借ります。決め手は、もとの文の動詞が be動詞かどうか。作ったら、動詞が一つあるか数えましょう。",
    [bx(20, 14, 280, 30, 'be動詞 → not だけ', C.red, FILL.red, 13), bx(20, 52, 280, 30, "一般動詞 → do を借りる", C.green, FILL.green, 13), bx(20, 90, 280, 30, '作ったら動詞を数える', C.blue, FILL.blue, 13)],
    cap('動詞が一つあれば ○', C.green)),
], "否定文は isn't か doesn't か");

// ───────── eigo_s063 混同を防ぐ③：疑問文は Are you か Do you か ─────────
const s063: DiagramFigure = show([
  S('疑問文の作り方は、be動詞の文と一般動詞の文でまったくちがいます。be動詞は主語の前に出し、一般動詞は Do / Does を先頭に置きます。',
    [bx(14, 16, 142, 34, 'You are a student.', C.red, FILL.red, 12), ar(85, 54, 85, 70, C.main), bx(14, 74, 142, 34, 'Are you a student?', C.red, FILL.red, 12), bx(164, 16, 142, 34, 'You play tennis.', C.green, FILL.green, 12), ar(235, 54, 235, 70, C.main), bx(164, 74, 142, 34, 'Do you play tennis?', C.green, FILL.green, 12), lb(85, 128, 'be動詞を前に出す', 11, C.red, 'middle', true), lb(235, 128, 'Do を先頭に置く', 11, C.green, 'middle', true)],
    cap('2つの作り方', C.main)),
  F('be動詞の文です。You are a student. → Are you a student?、He is kind. → Is he kind?、They are at home. → Are they at home? be動詞を主語の前に出します。',
    [head('be動詞を前に出す', C.red), ...pair(26, 'You are a student.', 'Are you a student?', 138), ...pair(62, 'He is kind.', 'Is he kind?', 138), ...pair(98, 'They are at home.', 'Are they at home?', 138)],
    cap('be動詞は前に出すだけ', C.red)),
  F('一般動詞の文です。You play tennis. → Do you play tennis?、He plays tennis. → Does he play tennis? Do / Does を先頭に置き、動詞は原形にします。',
    [head('Do / Does を先頭に置く', C.green), ...pair(26, 'You play tennis.', 'Do you play tennis?', 138), ...pair(62, 'He plays tennis.', 'Does he play tennis?', 138), ...pair(98, 'They live here.', 'Do they live here?', 138)],
    cap('動詞は原形', C.green)),
  F('❓Are you have a pen? はなぜ誤りなのでしょう。→ are と have の動詞が2つ並んでいるからです。have は「持っている」の一般動詞なので、Do you have a pen? が正しい形です。',
    [...ng(14, 22, 292, 'Do you are a student?'), lb(160, 64, 'do と are が並んでいる', 12, C.red, 'middle'), ...ng(14, 92, 292, 'Are you have a pen?'), lb(160, 134, 'are と have が並んでいる', 12, C.red, 'middle')],
    cap('動詞が二つ並んでいる', C.red)),
  F('❓Do は動詞の数に数えないのでしょうか。→ 数えません。Do / Does は動作の意味を持たない「疑問文の合図の語」です。正しい疑問文は「合図の語＋動詞1つ」か「be動詞＋主語」のどちらかです。',
    [bx(14, 20, 70, 32, 'Do', C.gray, FILL.gray, 14), bx(90, 20, 70, 32, 'you', C.blue, FILL.blue, 14), bx(166, 20, 70, 32, 'play', C.red, FILL.red, 14), lb(49, 68, '合図の語', 12, C.gray, 'middle', true), lb(201, 68, '動詞は1つ', 12, C.red, 'middle', true), bx(14, 90, 70, 32, 'Are', C.red, FILL.red, 14), bx(90, 90, 70, 32, 'you', C.blue, FILL.blue, 14), lb(220, 106, 'be動詞が動詞', 12, C.red, 'middle', true)],
    cap('合図の語は動詞に数えない', C.main)),
  F('答えの語はそろえます。Are / Is で聞かれたら be動詞で、Do / Does で聞かれたら do / does で答えます。Are you hungry? － Yes, I am. Do you like music? － Yes, I do.',
    [head('問いの最初の語 ＝ 答えの語'), ...trow(26, 'Are you hungry?', 'Yes, I am.', C.red, FILL.red, 140, 28, 12), ...trow(62, 'Is he your brother?', 'Yes, he is.', C.red, FILL.red, 140, 28, 12), ...trow(98, 'Do you like music?', 'Yes, I do.', C.green, FILL.green, 140, 28, 12)],
    cap('問いの最初の語を見る', C.main)),
  F('混ぜてはいけません。Do you like music? に Yes, I am. は×、Are you a student? に Yes, I do. も×です。「持っていますか」は Do you have 〜?、「いますか」は Are you at home? です。',
    [bx(14, 10, 146, 26, 'Do you like music?', C.blue, FILL.blue, 12), bx(170, 10, 136, 26, 'Yes, I am.   ×', C.red, FILL.red, 12), bx(14, 42, 146, 26, 'Are you a student?', C.blue, FILL.blue, 12), bx(170, 42, 136, 26, 'Yes, I do.   ×', C.red, FILL.red, 12), ...trow(78, '持っていますか', 'Do you have a pen?', C.green, FILL.green, 100, 24, 12), ...trow(108, 'いますか', 'Are you at home?', C.green, FILL.green, 100, 24, 12)],
    cap('訳ではなく、動詞で決める', C.red)),
  F('まとめです。be動詞の文は be動詞を前に出し、一般動詞の文は Do / Does を借ります。Do / Does は動詞に数えません。答えの語は問いの最初の語とそろえます。',
    [bx(20, 14, 280, 30, 'be動詞 → 前に出す（Are you ～?）', C.red, FILL.red, 13), bx(20, 52, 280, 30, '一般動詞 → Do / Does（Do you ～?）', C.green, FILL.green, 12), bx(20, 90, 280, 30, '答えは問いの最初の語でそろえる', C.blue, FILL.blue, 13)],
    cap('Do you have a pen? ○', C.green)),
], '疑問文は Are you か Do you か');

// ───────── eigo_s066 第1文型 SV ─────────
const s066: DiagramFigure = show([
  S('第1文型は、主語（S）と動詞（V）だけで意味が完成する文です。Birds fly.（鳥が飛ぶ）、He runs.（彼は走る）。「何を」も「どんなだ」も要りません。',
    [...svm(26, [['Birds', 'S', 100], ['fly.', 'V', 100]], 40, 34), lb(160, 86, 'S（主語）＋ V（動詞）', 13, C.ink, 'middle', true), ...svm(106, [['He', 'S', 100], ['runs.', 'V', 100]], 40, 30)],
    cap('S ＋ V だけで文になる', C.main)),
  F('❓うしろに語句が続いたら、もう第1文型ではないのでしょうか。→ 場所や時を表す語句は修飾語（M）なので、文型は SV のままです。I go to school. は S＝I、V＝go、to school は M です。',
    [...svm(30, [['I', 'S', 50], ['go', 'V', 60], ['to school.', 'M', 140]], 20, 34), lb(160, 86, 'to school は飾り（M）', 13, C.gray, 'middle', true), lb(160, 112, '骨組みは I go の2つだけ', 13, C.ink, 'middle', true)],
    cap('M は文型に数えない', C.main)),
  F('同じです。He lives in Kyoto.（in Kyoto は M）、We walked in the park yesterday.（in the park と yesterday が M）、She swims very fast.（very fast は M）。',
    [...svm(14, [['He', 'S', 40], ['lives', 'V', 60], ['in Kyoto.', 'M', 100]], 20, 28), ...svm(52, [['We', 'S', 40], ['walked', 'V', 60], ['in the park', 'M', 86], ['yesterday.', 'M', 70]], 10, 28), ...svm(90, [['She', 'S', 40], ['swims', 'V', 60], ['very fast.', 'M', 100]], 20, 28), lb(160, 138, '青＝S  赤＝V  灰色＝M', 11, C.gray, 'middle')],
    cap('場所・時・様子は M', C.main)),
  F('第1文型の代表的な動詞は、go・come・run・walk・swim・live・sit・stand・sleep・arrive・happen です。これらは動詞だけで意味が完成します。',
    [head('SV の動詞'), ...rowb(['go', 'come', 'run', 'walk'], 24, 30, C.red, FILL.red, 13), ...rowb(['swim', 'live', 'sit', 'stand'], 60, 30, C.red, FILL.red, 13), ...rowb(['sleep', 'arrive', 'happen'], 96, 30, C.red, FILL.red, 13, 10, 240, 6)],
    cap('動作だけで意味が通る', C.red)),
  F('見分けるコツは「動詞のうしろに、前置詞なしの名詞があるか」です。なければ第1文型。前置詞（to, in, at など）から始まるかたまりは、目的語になれません。',
    [bx(70, 8, 180, 30, '動詞のうしろに', C.blue, FILL.blue, 13), bx(70, 40, 180, 30, '前置詞なしの名詞は？', C.blue, FILL.blue, 13), ar(110, 72, 70, 92, C.green), ar(210, 72, 250, 92, C.red), bx(14, 94, 130, 40, 'ない\n→ 第1文型', C.green, FILL.green, 12), bx(176, 94, 130, 40, 'ある\n→ ほかの文型', C.red, FILL.red, 12)],
    cap('前置詞のかたまりは目的語ではない', C.main)),
  F('❓「公園を走る」の「を」は目的語でしょうか。→ いいえ。英語では in the park という修飾語です。He runs the park. ではなく He runs in the park. です。日本語の「を」だけで目的語を判断してはいけません。',
    [...pair(24, 'He runs the park.', 'He runs in the park.', 138), lb(160, 80, '「公園を」でも in the park は M', 12, C.ink, 'middle', true), ...svm(98, [['He', 'S', 40], ['runs', 'V', 60], ['in the park.', 'M', 110]], 20, 28)],
    cap('日本語の「を」にひかれない', C.red)),
  F('逆に、前置詞が要らない動詞もあります。enter・reach・discuss は前置詞なしで目的語をとります（I entered the room.）。arrive・go・listen は前置詞が必要です（arrive at the station）。',
    [bx(14, 18, 142, 30, '前置詞なし', C.blue, FILL.blue, 13), bx(164, 18, 142, 30, '前置詞が必要', C.red, FILL.red, 13), bx(14, 54, 142, 62, 'enter\nreach\ndiscuss', C.blue, FILL.blue, 13), bx(164, 54, 142, 62, 'go to\narrive at\nlisten to', C.red, FILL.red, 13), lb(160, 132, '訳ではなく、英語の形で覚える', 12, C.ink, 'middle', true)],
    cap('go to・arrive at・listen to', C.red)),
  F('まとめです。第1文型は S＋V。うしろに続く語句が前置詞のかたまりなら修飾語で、文型は SV のままです。日本語の「〜を」ではなく、英語の形（前置詞があるか）で判断します。',
    [bx(20, 14, 280, 30, '第1文型 ＝ S ＋ V', C.red, FILL.red, 13), bx(20, 52, 280, 30, '前置詞のかたまりは M', C.blue, FILL.blue, 13), bx(20, 90, 280, 30, '「を」ではなく英語の形で判断', C.green, FILL.green, 13)],
    cap('I go to school. ＝ SV', C.green)),
], '第1文型 SV');

export const XF_CEB_FIGURES: Record<string, DiagramFigure> = {
  xf_eigo_s019: s019,
  xf_eigo_s020: s020,
  xf_eigo_s022: s022,
  xf_eigo_s023: s023,
  xf_eigo_s024: s024,
  xf_eigo_s025: s025,
  xf_eigo_s027: s027,
  xf_eigo_s033: s033,
  xf_eigo_s034: s034,
  xf_eigo_s035: s035,
  xf_eigo_s036: s036,
  xf_eigo_s037: s037,
  xf_eigo_s038: s038,
  xf_eigo_s039: s039,
  xf_eigo_s040: s040,
  xf_eigo_s041: s041,
  xf_eigo_s043: s043,
  xf_eigo_s044: s044,
  xf_eigo_s045: s045,
  xf_eigo_s048: s048,
  xf_eigo_s050: s050,
  xf_eigo_s052: s052,
  xf_eigo_s054: s054,
  xf_eigo_s055: s055,
  xf_eigo_s057: s057,
  xf_eigo_s059: s059,
  xf_eigo_s061: s061,
  xf_eigo_s062: s062,
  xf_eigo_s063: s063,
  xf_eigo_s066: s066,
};
export const XF_CEB_SECTIONS: Record<string, string> = {
  'eigo_s019#1': 'xf_eigo_s019',
  'eigo_s020#1': 'xf_eigo_s020',
  'eigo_s022#0': 'xf_eigo_s022',
  'eigo_s023#0': 'xf_eigo_s023',
  'eigo_s024#0': 'xf_eigo_s024',
  'eigo_s025#0': 'xf_eigo_s025',
  'eigo_s027#0': 'xf_eigo_s027',
  'eigo_s033#0': 'xf_eigo_s033',
  'eigo_s034#0': 'xf_eigo_s034',
  'eigo_s035#0': 'xf_eigo_s035',
  'eigo_s036#2': 'xf_eigo_s036',
  'eigo_s037#0': 'xf_eigo_s037',
  'eigo_s038#1': 'xf_eigo_s038',
  'eigo_s039#0': 'xf_eigo_s039',
  'eigo_s040#2': 'xf_eigo_s040',
  'eigo_s041#0': 'xf_eigo_s041',
  'eigo_s043#0': 'xf_eigo_s043',
  'eigo_s044#1': 'xf_eigo_s044',
  'eigo_s045#1': 'xf_eigo_s045',
  'eigo_s048#0': 'xf_eigo_s048',
  'eigo_s050#0': 'xf_eigo_s050',
  'eigo_s052#0': 'xf_eigo_s052',
  'eigo_s054#0': 'xf_eigo_s054',
  'eigo_s055#0': 'xf_eigo_s055',
  'eigo_s057#0': 'xf_eigo_s057',
  'eigo_s059#0': 'xf_eigo_s059',
  'eigo_s061#0': 'xf_eigo_s061',
  'eigo_s062#2': 'xf_eigo_s062',
  'eigo_s063#2': 'xf_eigo_s063',
  'eigo_s066#0': 'xf_eigo_s066',
};
