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
const pair = (y: number, bad: string, good: string, w = 120): E[] => [
  bx(14, y, w, 24, bad, C.red, FILL.red, 12),
  ar(14 + w + 4, y + 12, 306 - w - 4, y + 12, C.gray),
  bx(306 - w, y, w, 24, good, C.green, FILL.green, 12),
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
};
