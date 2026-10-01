// 中学受験 英語（小5〜小6）単元の動く図解スライド（図のなかった単元に1つずつ）。
// 「❓なぜ？→答え」の連鎖で、7枚以上。上に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramFigure, DiagramElement } from './figures';
import { show, bx, lb, ar, ln, ci, C, FILL, band, fresh } from './diagram-kit';

type Tone = 'b' | 'g' | 'r' | 'm' | 'p' | 'y' | 'n';
const TN: Record<Tone, [string, string]> = {
  b: [C.blue, FILL.blue], g: [C.green, FILL.green], r: [C.red, FILL.red], m: [C.main, FILL.warm],
  p: [C.purple, FILL.purple], y: [C.main, FILL.yellow], n: [C.gray, FILL.gray],
};
const TC: Record<Tone, string> = { b: C.blue, g: C.green, r: C.red, m: C.main, p: C.purple, y: C.main, n: C.gray };
type It = [string, Tone?];
type RO = { h?: number; size?: number; gap?: number; w?: number };
const tw = (t: string, s: number) =>
  Math.max(...t.split('\n').map((l) => [...l].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0))) * s + 12;
function lay(items: It[], o?: RO) {
  let size = o?.size ?? 12;
  const gap = o?.gap ?? 6;
  const maxW = o?.w ?? 312;
  const calc = () => items.map((i) => tw(i[0], size));
  let ws = calc();
  let tot = ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  while (tot > maxW && size > 9) { size -= 0.5; ws = calc(); tot = ws.reduce((a, b) => a + b, 0) + gap * (items.length - 1); }
  let x = (320 - tot) / 2;
  const pos = ws.map((w) => { const p = { x, w }; x += w + gap; return p; });
  return { size, pos };
}
/** 横に並べた箱（全体を中央ぞろえ）。 */
const row = (y: number, items: It[], o?: RO): DiagramElement[] => {
  const { size, pos } = lay(items, o);
  return items.map((it, i) => { const [c, f] = TN[it[1] ?? 'm']; return bx(pos[i].x, y, pos[i].w, o?.h ?? 28, it[0], c, f, size); });
};
/** row の各箱の中心x。 */
const cx = (items: It[], o?: RO): number[] => lay(items, o).pos.map((p) => p.x + p.w / 2);
const title = (t: string, color: string = C.ink) => lb(160, 14, t, 12, color, 'middle', true);
const gl = (x: number, y: number, t: string, color: string = C.gray, size = 11) => lb(x, y, t, size, color, 'middle');
const cap = (t: string, color: string = C.ink) => band(150, lb(160, 192, t, 12, color, 'middle', true));
/** 単一の英文（1行の箱）＋日本語の意味。 */
const ex = (y: number, en: string, ja: string, tone: Tone = 'b', o?: RO): DiagramElement[] => [...row(y, [[en, tone]], { h: 26, ...o }), gl(160, y + 38, ja)];
type Sl = { note: string; add: DiagramElement[] };
/** 続きのスライド（前の図の上に足す）。 */
const A = (note: string, els: DiagramElement[], c: string, color?: string): Sl => ({ note, add: [...els, ...cap(c, color)] });
/** まっさらにして描きなおすスライド。 */
const F = (note: string, t: string, els: DiagramElement[], c: string, color?: string): Sl => ({ note, add: [...fresh(title(t)), ...els, ...cap(c, color)] });

const FIGS: Record<string, DiagramFigure> = {};

// ───────── eigo_s284 like と as ─────────
FIGS['xf_eigo_s284'] = show([
  F('He works like a teacher. と He works as a teacher. は、たった一語（いちご）しかちがいません。でも、意味（いみ）は大きくちがいます。like と as のちがいを、「なぜ？」でたどりましょう。',
    '一語だけちがう二つの文', [...row(34, [['He works like a teacher.', 'b']], { h: 30 }), ...row(84, [['He works as a teacher.', 'g']], { h: 30 }), gl(160, 134, '意味はどうちがうのでしょう')], 'like と as、どうちがう？'),
  F('❓like は、どんな意味でしょう。→「〜のように」です。似（に）ているだけで、本当はちがいます。He swims like a fish. は「魚のように泳ぐ」ですが、彼は魚ではありません。',
    'like ＝ 〜のように（似ているだけ）', [...ex(30, 'He swims like a fish.', '彼は魚のように泳ぐ'), ci(90, 106, 22, '彼', C.blue, FILL.blue, 14), lb(160, 106, '≠', 22, C.red, 'middle', true), ci(230, 106, 22, '魚', C.gray, FILL.gray, 14), gl(160, 138, '似ているだけ。本当は魚ではない', C.red)], 'like ＝ 本物ではないが、そっくり', C.blue),
  F('❓では as は？→「〜として」です。本当にその役目（やくめ）についているときに使います。He works as a teacher. の彼は、本当に先生です。',
    'as ＝ 〜として（本当にそうである）', [...ex(30, 'He works as a teacher.', '彼は先生として働いている', 'g'), ci(90, 106, 22, '彼', C.blue, FILL.blue, 14), lb(160, 106, '＝', 22, C.green, 'middle', true), ci(230, 106, 22, '先生', C.green, FILL.green, 12), gl(160, 138, '本当に先生である', C.green)], 'as ＝ 本物である', C.green),
  F('❓なぜ、一語で事実がかわるのでしょう。→ like は「くらべる」ことばだからです。くらべるのは、ちがうものどうしです。as は「その立場（たちば）で」という意味なので、本人がその立場にいます。',
    'なぜ意味がかわるの？', [bx(14, 34, 138, 56, 'like\nくらべる\n（ちがうものどうし）', C.blue, FILL.blue, 12), bx(168, 34, 138, 56, 'as\nその立場で\n（本人がそう）', C.green, FILL.green, 12), gl(160, 118, 'ちがうものをくらべるか、本人の立場か', C.ink)], 'くらべる＝like ／ 立場＝as', C.main),
  F('くらべてみましょう。He worked like a doctor. は「医者のように働いた」で、医者ではありません。He worked as a doctor. は「医者として働いた」で、医者です。一語で職業（しょくぎょう）がかわります。',
    '一語で職業がかわる', [...row(30, [['He worked like a doctor.', 'b']], { h: 26 }), gl(160, 72, '医者のように働いた → 医者ではない', C.blue), ...row(92, [['He worked as a doctor.', 'g']], { h: 26 }), gl(160, 134, '医者として働いた → 医者である', C.green)], '一語ちがうと、その人の仕事がちがう', C.ink),
  F('❓as は、ほかにどんなときに使うのでしょう。→ ものの使い道にも使えます。I used the box as a chair. は「箱をいすとして使った」。She is famous as a pianist. は「ピアニストとして有名」です。',
    'as のほかの使い方', [...ex(28, 'I used the box as a chair.', '箱をいすとして使った', 'g'), ...ex(88, 'She is famous as a pianist.', 'ピアニストとして有名だ', 'g')], 'as ＋ 役目・使い道', C.green),
  F('❓まよったら、どう見分けるのでしょう。→ 「本当にそうか？」と自分に聞きます。本当にそうなら as、似ているだけなら like です。It looks like rain.（雨が降りそう）の like も、「雨に似た空」という意味です。',
    '見分けるコツ', [bx(100, 28, 120, 30, '本当にそう？', C.main, FILL.warm, 13), ar(130, 60, 80, 90, C.green), ar(190, 60, 240, 90, C.blue), lb(68, 72, 'はい', 11, C.green, 'middle', true), lb(252, 72, 'いいえ', 11, C.blue, 'middle', true), bx(40, 94, 90, 30, 'as', C.green, FILL.green, 14), bx(190, 94, 100, 30, 'like', C.blue, FILL.blue, 14), gl(160, 138, 'It looks like rain.（雨のように見える）')], '本物なら as、似ているだけなら like', C.main),
  F('まとめです。like は「本物ではないがそっくり」、as は「本物である」。だから He works like a teacher. は先生ではなく、He works as a teacher. は先生です。',
    'まとめ', [...row(30, [['like', 'b'], ['＝ 〜のように（似ている）', 'b']], { h: 28 }), ...row(70, [['as', 'g'], ['＝ 〜として（本物）', 'g']], { h: 28 }), ...row(110, [['He works as a teacher.', 'g']], { h: 26 })], '実際にそうかどうかで選ぶ', C.green),
], 'like と as：実際にそうかで使い分ける');

// ───────── eigo_s285 and but or so ─────────
FIGS['xf_eigo_s285'] = show([
  F('文や語をつなぐ接続詞（せつぞくし）のうち、対等（たいとう）なものをつなぐ四つを学びます。and・but・or・so です。それぞれ、どんな関係（かんけい）をつくるのか、「なぜ？」で見ていきます。',
    '対等につなぐ四つの語', [...row(40, [['and', 'b'], ['but', 'r'], ['or', 'g'], ['so', 'p']], { h: 34, size: 15 }), gl(160, 98, 'A ○ B のかたちで、AとBをつなぐ'), gl(160, 120, '四つとも、前後が同じ重さ（対等）')], 'and・but・or・so', C.main),
  F('and は「そして・と」です。❓なぜ and を使うのでしょう。→ 同じ向きのことを、足していくからです。Tom and Ken are good friends. は、二人を足しています。',
    'and ＝ そして・と（足す）', [...ex(30, 'Tom and Ken are good friends.', 'トムとケンは仲のよい友達', 'b'), ci(110, 106, 20, 'Tom', C.blue, FILL.blue, 10), lb(160, 106, '＋', 20, C.blue, 'middle', true), ci(210, 106, 20, 'Ken', C.blue, FILL.blue, 10), gl(160, 138, '同じ向きのものを足す')], 'and は足し算', C.blue),
  F('but は「しかし」です。❓なぜ but なのでしょう。→ 前と後ろが、反対（はんたい）の向きだからです。He is young but very strong. 若い（ふつうは力が弱そう）のに、力が強い、という反対です。',
    'but ＝ しかし（反対の向き）', [...ex(30, 'He is young but very strong.', '彼は若いが、とても力が強い', 'r'), ar(110, 100, 160, 100, C.blue), lb(110, 118, '若い', 11, C.blue, 'middle'), ar(210, 100, 160, 100, C.red), lb(210, 118, '強い', 11, C.red, 'middle')], 'but は反対向きの二つをつなぐ', C.red),
  F('or は「または」です。❓なぜ or なのでしょう。→ どちらか一つを選ぶからです。You can go by bus or by train. は、バスか電車かの選択（せんたく）です。',
    'or ＝ または（選ぶ）', [...ex(30, 'You can go by bus or by train.', 'バスか電車で行けます', 'g'), bx(60, 96, 80, 30, 'バス', C.green, FILL.green, 13), lb(160, 111, 'or', 14, C.green, 'middle', true), bx(180, 96, 80, 30, '電車', C.green, FILL.green, 13)], 'or はどちらかを選ぶ', C.green),
  F('否定文（ひていぶん）の or は、少しかわります。I don\'t like cats or dogs. は「ねこも犬も好きではない」。❓なぜ and ではないのでしょう。→ 「ない」が全体にかかり、どちらも「ない」になるからです。',
    '否定文の or', [...ex(30, "I don't like cats or dogs.", 'ねこも犬も好きではない', 'g'), bx(60, 96, 80, 30, 'ねこ ×', C.red, FILL.red, 13), bx(180, 96, 80, 30, '犬 ×', C.red, FILL.red, 13), lb(160, 111, 'or', 14, C.green, 'middle', true)], '「ない」の文では、どちらも×', C.red),
  F('so は「だから」です。❓because とはどうちがうのでしょう。→ 同じことを、反対側から言っているだけです。It was raining, so we stayed home. は「雨 → だから家」。We stayed home because it was raining. は「家 ← なぜなら雨」。',
    'so と because は反対向き', [bx(14, 34, 92, 36, '雨がふった', C.blue, FILL.blue, 12), bx(214, 34, 92, 36, '家にいた', C.red, FILL.red, 12), ar(108, 52, 212, 52, C.purple), lb(160, 42, 'so（だから）', 12, C.purple, 'middle', true), ar(212, 78, 108, 78, C.main), lb(160, 94, 'because（なぜなら）', 12, C.main, 'middle', true), gl(160, 122, '理由 → so → 結果 ／ 結果 ← because ← 理由')], 'so は結果、because は理由', C.purple),
  F('❓では、because と so を両方書いてもよいでしょうか。→ だめです。日本語の「〜ので、だから」につられて Because ... , so ... と書きがちですが、どちらか一方だけです。',
    'because と so は一つだけ', [...row(30, [['Because it rained, so we stayed home.', 'r']], { h: 28, size: 11 }), lb(160, 76, '× 二つ書いてしまう', 12, C.red, 'middle', true), ...row(92, [['Because it rained, we stayed home.', 'g']], { h: 26, size: 11 }), ...row(124, [['It rained, so we stayed home.', 'g']], { h: 24, size: 11 })], 'どちらか一つだけ使う', C.green),
  F('三つ以上ならべるときは、A, B, and C のかたちです。I bought apples, oranges, and bananas. 最後（さいご）にだけ and を置きます。まとめ：and は足す、but は反対、or は選ぶ、so は結果です。',
    '三つ以上は A, B, and C', [...row(30, [['I bought apples, oranges, and bananas.', 'b']], { h: 28, size: 11 }), ...row(72, [['and 足す', 'b'], ['but 反対', 'r']], { h: 28 }), ...row(106, [['or 選ぶ', 'g'], ['so 結果', 'p']], { h: 28 })], 'and 足す／but 反対／or 選ぶ／so 結果', C.main),
], 'and・but・or・so：四つの関係');

// ───────── eigo_s287 and の主語 ─────────
FIGS['xf_eigo_s287'] = show([
  F('Tom and Ken is my friends. と書きたくなりますが、正しくは Tom and Ken are my friends. です。and でつないだ主語（しゅご）の動詞（どうし）の形を、「なぜ？」で確かめます。',
    'and でつないだ主語', [...row(32, [['Tom and Ken', 'b'], ['are', 'g'], ['my friends.', 'n']], { h: 30, size: 13 }), lb(160, 90, '× is   ○ are', 14, C.green, 'middle', true), gl(160, 120, 'be動詞はどちらになるでしょう')], 'Tom and Ken ＿＿ my friends.', C.ink),
  F('❓なぜ is ではなく are なのでしょう。→ Tom は一人、Ken も一人。and でつなぐと、二人（ふくすう＝複数）になるからです。複数のときの be動詞は are です。',
    '一人＋一人＝二人（複数）', [ci(100, 60, 20, 'Tom', C.blue, FILL.blue, 10), lb(160, 60, '＋', 20, C.blue, 'middle', true), ci(220, 60, 20, 'Ken', C.blue, FILL.blue, 10), ar(160, 86, 160, 106, C.green), bx(100, 108, 120, 28, '二人 → are', C.green, FILL.green, 13)], 'and でつなぐと複数', C.green),
  F('❓一人ずつは単数（たんすう）なのに、なぜ複数なのでしょう。→ 動詞は、主語全体の人数に合わせるからです。直前（ちょくぜん）の Ken だけを見てはいけません。My father and mother are teachers. も同じです。',
    '主語全体の人数を見る', [...row(34, [['My father and mother', 'b'], ['are', 'g'], ['teachers.', 'n']], { h: 28, size: 12 }), ln(20, 70, 200, 70, C.blue, false, 3), lb(110, 90, '主語全体 ＝ 二人', 12, C.blue, 'middle', true), gl(160, 120, 'be動詞はこの全体の人数に合わせる')], '直前の語ではなく、主語全体を見る', C.blue),
  F('英語では、自分（I）を最後に置きます。「トムと私は公園へ行った」は Tom and I went to the park. I and Tom とは言いません。❓なぜでしょう。→ 相手をたてて、自分をあとにするのが英語のマナーだからです。',
    '自分（I）は最後', [...row(34, [['Tom and I', 'g'], ['went to the park.', 'n']], { h: 28 }), ...row(84, [['I and Tom', 'r'], ['went to the park.', 'n']], { h: 28 }), lb(160, 128, '× 自分を先に言わない', 11, C.red, 'middle', true)], '相手が先、自分は最後', C.green),
  F('目的語（もくてきご）のときは I ではなく me になります。He invited you and me. 主語なら I、目的語や前置詞のあとなら me です。',
    'I か me か', [...ex(30, 'Tom and I went to the park.', 'トムと私は公園へ行った', 'g'), ...ex(88, 'He invited you and me.', '彼はあなたと私を招待した', 'b')], '主語は I、目的語は me', C.main),
  F('もう一つ、選択疑問文（せんたくぎもんぶん）を見ます。「夏と冬のどちらが好き？」は and ではなく or を使います。Which do you like better, summer or winter? and だと「両方」になってしまうからです。',
    '選ぶときは or', [...ex(28, 'Which do you like better, summer or winter?', 'どちらが好きですか', 'g', { size: 11 }), bx(40, 96, 90, 30, '夏 summer', C.green, FILL.green, 12), lb(160, 111, 'or', 14, C.green, 'middle', true), bx(190, 96, 90, 30, '冬 winter', C.green, FILL.green, 12)], 'どちらか選ぶなら or', C.green),
  F('❓どう答えればよいでしょうか。→ Yes や No では答えられません。どちらかを選んで答えます。I like summer better. 選択肢（せんたくし）の中から一つ、と考えれば自然です。',
    '答え方', [...ex(28, 'Which do you like better, summer or winter?', '', 'g', { size: 11 }), lb(160, 76, '× Yes, I do.', 14, C.red, 'middle', true), ...row(96, [['I like summer better.', 'g']], { h: 28 }), gl(160, 140, 'どちらかを選んで答える')], 'Yes / No ではなく、一つ選ぶ', C.green),
  F('最後に not A but B。He is not a teacher but a doctor. は「先生ではなく医者」。言いたいのは but のあと、つまり B です。まとめ：A and B は複数、自分は最後、選ぶなら or です。',
    'not A but B ／ まとめ', [...ex(28, 'He is not a teacher but a doctor.', '先生ではなく医者', 'b', { size: 11 }), bx(40, 88, 100, 28, 'not 先生 ×', C.red, FILL.red, 12), bx(180, 88, 100, 28, 'but 医者 ○', C.green, FILL.green, 12), gl(160, 134, 'but のあとが本当に言いたいこと')], 'A and B は複数／自分は最後／選ぶなら or', C.main),
], 'and の主語は複数、自分は最後');

// ───────── eigo_s289 if と unless ─────────
FIGS['xf_eigo_s289'] = show([
  F('「もし明日雨がふったら、家にいます」は If it rains tomorrow, I will stay home. と言います。条件（じょうけん）を表す if と、「〜しなければ」の unless を、「なぜ？」で調べましょう。',
    '条件を表す if', [bx(10, 34, 140, 40, 'If it rains tomorrow,', C.blue, FILL.blue, 12), bx(160, 34, 150, 40, 'I will stay home.', C.green, FILL.green, 12), gl(80, 88, 'もし〜なら（条件）', C.blue), gl(235, 88, 'そのときの結果', C.green)], 'If ＋ 条件, 結果.', C.main),
  F('❓条件の部分の動詞を見てください。明日のことなのに rains です。will rain ではありません。❓なぜ現在形（げんざいけい）なのでしょう。',
    '条件のなかは現在形', [...row(30, [['If it rains tomorrow,', 'g']], { h: 28 }), lb(160, 74, '○ 現在形', 12, C.green, 'middle', true), ...row(92, [['If it will rain tomorrow,', 'r']], { h: 28 }), lb(160, 136, '× will は使わない', 12, C.red, 'middle', true)], 'if の中は、未来のことも現在形', C.green),
  F('❓なぜ現在形なのか。→ if の中は「もしそうなったら」と、場面を決めるだけの部分だからです。これからのことを言い切る will は、結果を言う主（おも）な文にまかせます。そう決まっているのです。',
    'will は結果の側', [bx(10, 34, 140, 50, 'If it rains\n現在形\n（場面をおく）', C.blue, FILL.blue, 12), bx(170, 34, 140, 50, 'I will stay home.\nwill ○\n（これからのこと）', C.green, FILL.green, 12), ar(150, 59, 168, 59, C.main)], '条件は現在形、結果に will', C.main),
  F('語順（ごじゅん）は入れかえられます。I will stay home if it rains tomorrow. 条件を後ろに置くときは、コンマを打ちません。前に置くときだけ、コンマで区切ります。',
    '語順を入れかえる', [...row(30, [['If it rains tomorrow,', 'b'], ['I will stay home.', 'g']], { h: 28, size: 11 }), gl(160, 70, 'コンマあり（条件が前）'), ...row(92, [['I will stay home', 'g'], ['if it rains tomorrow.', 'b']], { h: 28, size: 11 }), gl(160, 132, 'コンマなし（条件が後ろ）')], '条件が前ならコンマ、後ろならなし', C.ink),
  F('次は unless です。Unless you hurry, you will be late. は「急がなければ、遅れます」。If you don\'t hurry, you will be late. と同じ意味（いみ）です。unless ＝ if ... not と覚えます。',
    'unless ＝ if ... not', [...row(30, [['Unless you hurry,', 'p']], { h: 28 }), lb(160, 76, '＝', 18, C.ink, 'middle', true), ...row(92, [["If you don't hurry,", 'b']], { h: 28 }), gl(160, 138, 'どちらも「急がなければ」')], 'unless ＝ もし〜しなければ', C.purple),
  F('❓では、Unless you don\'t hurry と書いてもよいでしょうか。→ だめです。unless の中には、もう「〜しない」が入っています。don\'t を足すと「ない」が二つになり、意味が逆（ぎゃく）になります。',
    'unless の中は否定にしない', [...row(30, [["Unless you don't hurry,", 'r']], { h: 28 }), lb(160, 74, '× 「ない」が二つ', 12, C.red, 'middle', true), gl(160, 94, '→ 「急ぐなら」の意味になってしまう'), ...row(112, [['Unless you hurry,', 'g']], { h: 26 })], 'unless のなかに not を入れない', C.red),
  F('同じことを三通りで書けます。Hurry up, or you will be late. ＝ If you don\'t hurry up, ... ＝ Unless you hurry up, ... 書きかえ問題でよく出ます。',
    '三通りの書き方', [...row(26, [['Hurry up, or you will be late.', 'm']], { h: 26, size: 11 }), ...row(62, [["If you don't hurry up, you will be late.", 'b']], { h: 26, size: 11 }), ...row(98, [['Unless you hurry up, you will be late.', 'p']], { h: 26, size: 11 }), lb(160, 138, '三つとも同じ意味', 12, C.ink, 'middle', true)], '命令文, or ＝ if ... not ＝ unless', C.main),
  F('まとめです。①if の中は、未来のことも現在形。②結果の文には will。③unless は if ... not と同じで、中を否定にしない。この三つを守れば、条件の文は大丈夫（だいじょうぶ）です。',
    'まとめ', [bx(14, 24, 292, 28, '① if の中は現在形', C.blue, FILL.blue, 12), bx(14, 60, 292, 28, '② 結果の文に will', C.green, FILL.green, 12), bx(14, 96, 292, 28, '③ unless の中は否定にしない', C.purple, FILL.purple, 12)], 'if ＋ 現在形, will ... ／ unless ＋ 肯定', C.main),
], '条件の if と unless');

// ───────── eigo_s290 because と though ─────────
FIGS['xf_eigo_s290'] = show([
  F('「若いけれども、とても強い」を英語にするとき、Though ... , but ... と書くと誤り（あやまり）になります。譲歩（じょうほ）を表す though と、接続詞を重ねない決まりを、「なぜ？」でたどります。',
    'though を使った文', [bx(10, 34, 140, 40, 'Though he is young,', C.blue, FILL.blue, 12), bx(160, 34, 150, 40, 'he is very strong.', C.red, FILL.red, 12), gl(160, 98, '「若いけれども、とても強い」')], 'Though 〜, ... ＝ 〜だけれども', C.main),
  F('❓though は、どんな意味でしょう。→「〜だけれども」。予想（よそう）とは反対のことが起きるときに使います。若いなら弱そうなのに、実は強い。この「予想とちがう」が譲歩です。',
    '予想とちがうことを言う', [bx(14, 34, 130, 40, '若い\n→ ふつうは弱そう', C.blue, FILL.blue, 12), bx(176, 34, 130, 40, '予想に反して\nとても強い！', C.red, FILL.red, 12), ar(146, 54, 174, 54, C.red), gl(160, 100, 'though ＝ 予想とちがう方へ話が進む')], 'though ＝ 〜だけれども', C.red),
  F('although も同じ意味です。Although it was raining, we went out.（雨がふっていたけれども、出かけた）。although の方が、少しかたい言い方です。',
    'although も同じ意味', [...ex(30, 'Although it was raining, we went out.', '雨だったけれども出かけた', 'b', { size: 11 }), ...row(92, [['though', 'b'], ['＝', 'n'], ['although', 'b']], { h: 28 }), gl(160, 136, 'although はややかたい')], 'though ＝ although', C.blue),
  F('❓日本語では「若いけれども、しかし強い」と言えます。英語も though と but を両方書いてよいでしょうか。→ だめです。Though he is young, but he is very strong. は誤りです。',
    'though と but を重ねない', [...row(30, [['Though he is young, but he is very strong.', 'r']], { h: 28, size: 11 }), lb(160, 76, '× 二つ重ねてしまう', 13, C.red, 'middle', true), gl(160, 100, '日本語の「けれども、しかし」につられやすい')], 'つなぎの語は一つだけ', C.red),
  F('❓なぜ重ねてはいけないのでしょう。→ 接続詞（せつぞくし）は、二つの文をつなぐ「橋」だからです。橋は一本あれば渡れます。二本かけると、同じ場所に橋が二つになってしまいます。',
    '橋は一本で足りる', [bx(10, 60, 100, 30, 'he is young', C.blue, FILL.blue, 11), bx(210, 60, 100, 30, 'he is strong', C.blue, FILL.blue, 11), ln(110, 70, 210, 70, C.green, false, 4), lb(160, 56, 'though（橋）', 12, C.green, 'middle', true), ln(110, 84, 210, 84, C.red, true, 4), lb(160, 104, 'but（いらない二本目）', 12, C.red, 'middle', true)], '橋（接続詞）は一本だけ', C.main),
  F('直し方は二通りです。Though he is young, he is very strong. か、He is young, but he is very strong. どちらか一方だけを使います。',
    '直し方は二通り', [...row(30, [['Though he is young, he is very strong.', 'g']], { h: 28, size: 11 }), gl(160, 72, 'though だけ'), ...row(92, [['He is young, but he is very strong.', 'g']], { h: 28, size: 11 }), gl(160, 134, 'but だけ')], 'though か but か、どちらか一つ', C.green),
  F('because と so も同じです。Because it rained, so ... は誤り。❓なぜでしょう。→ because も so も、文と文をつなぐ橋だからです。どちらか一方だけにします。',
    'because と so も同じ', [...row(30, [['Because it rained, so we stayed home.', 'r']], { h: 28, size: 11 }), lb(160, 72, '×', 14, C.red, 'middle', true), ...row(88, [['Because it rained, we stayed home.', 'g']], { h: 26, size: 11 }), ...row(120, [['It rained, so we stayed home.', 'g']], { h: 26, size: 11 })], 'because と so も一つだけ', C.green),
  F('❓名詞がくるときは？→ in spite of を使います。In spite of the rain, we went out.（雨にもかかわらず出かけた）。though のあとは「主語＋動詞」、in spite of のあとは名詞、と形で選びます。',
    'though と in spite of', [bx(10, 30, 140, 40, 'Though it rained,\n（文）', C.blue, FILL.blue, 12), bx(170, 30, 140, 40, 'In spite of the rain,\n（名詞）', C.purple, FILL.purple, 12), gl(160, 94, '後ろの形で選ぶ'), ...ex(112, 'In spite of the rain, we went out.', '', 'p', { size: 11 })], 'though ＋ 文 ／ in spite of ＋ 名詞', C.purple),
  F('まとめです。Though he was tired, he kept working. は、He was tired, but he kept working. に書きかえられます。though か but、because か so。つなぎの語は文に一つだけ。',
    'まとめ', [...row(28, [['Though he was tired, he kept working.', 'b']], { h: 28, size: 11 }), lb(160, 72, '＝', 16, C.ink, 'middle', true), ...row(88, [['He was tired, but he kept working.', 'b']], { h: 28, size: 11 }), gl(160, 134, '「疲れていたけれども、働き続けた」')], 'つなぎの語は一つだけ', C.main),
], 'though と接続詞を重ねない');

// ───────── eigo_s291 時制の一致 ─────────
FIGS['xf_eigo_s291'] = show([
  F('「彼は忙しいと言った」を英語にすると、He said that he was busy. となります。日本語では「忙しい」と現在形のままでも言えますが、英語は変わります。時制（じせい）の一致を、「なぜ？」で見ていきます。',
    '現在の文と過去の文', [...row(30, [['He says that he is busy.', 'b']], { h: 28 }), gl(160, 68, '今、言っている（現在）'), ...row(88, [['He said that he was busy.', 'g']], { h: 28 }), gl(160, 126, '言った（過去）→ was になる')], 'says ... is → said ... was', C.main),
  F('❓なぜ is が was に変わるのでしょう。→ 「言った」のが過去だからです。そのとき忙しかったのも、同じ過去の話です。話の時間が過去に移ったので、動詞もいっしょに過去へ移します。',
    '話の時間が過去へ', [ln(20, 100, 300, 100, C.gray, false, 2), lb(60, 118, '過去', 11, C.gray, 'middle'), lb(262, 118, '今', 11, C.gray, 'middle'), ci(110, 100, 6, undefined, C.green, FILL.green), bx(40, 44, 140, 38, 'said ＝ 言った\nwas ＝ 忙しかった', C.green, FILL.green, 12), ln(110, 84, 110, 94, C.green), ci(262, 100, 6, undefined, C.blue, FILL.blue)], 'said と was は同じ過去のとき', C.green),
  F('❓どう変わるのでしょう。→ 表にまとめます。is → was、like → liked、will → would、can → could、may → might。主役の動詞が過去のとき、that の中も一つ過去にずらします。',
    '変え方の表', [...row(26, [['is', 'b'], ['→', 'n'], ['was', 'g']], { h: 24 }), ...row(56, [['like', 'b'], ['→', 'n'], ['liked', 'g']], { h: 24 }), ...row(86, [['will', 'b'], ['→', 'n'], ['would', 'g']], { h: 24 }), ...row(116, [['can', 'b'], ['→', 'n'], ['could', 'g'], ['  may → might', 'n']], { h: 24, size: 12 })], 'that の中も、一つ過去へ', C.main),
  F('例を見ましょう。She said that she would come.（彼女は来ると言った）。I thought that he could swim.（彼は泳げると思っていた）。will が would に、can が could に変わっています。',
    'will → would, can → could', [...ex(28, 'She said that she would come.', '彼女は来ると言った', 'g'), ...ex(88, 'I thought that he could swim.', '彼は泳げると思っていた', 'g')], 'would・could も過去の形', C.green),
  F('❓日本語ではなぜ変えないのでしょう。→ 日本語には、この決まりがないからです。「忙しいと言った」と、後ろは今の形のままでも通じます。英語だけの決まりなので、意識して身につけます。',
    '日本語と英語のちがい', [bx(14, 34, 138, 56, '日本語\n「忙しいと言った」\n後ろはそのまま', C.gray, FILL.gray, 12), bx(168, 34, 138, 56, '英語\nsaid ... was\n後ろも過去にそろえる', C.green, FILL.green, 12), gl(160, 120, '日本語の感覚のまま書くと、まちがえる')], '英語だけの決まり', C.green),
  F('ただし、変わらない事実は現在形のままです。He said that the earth goes around the sun.（地球は太陽のまわりを回る）。❓なぜでしょう。→ 今もずっと本当のことだからです。',
    '変えない場合', [...ex(30, 'He said that the earth goes around the sun.', '地球は太陽のまわりを回る', 'b', { size: 11 }), ci(100, 112, 16, '太陽', C.main, FILL.yellow, 9), ci(210, 112, 14, '地球', C.blue, FILL.blue, 9), gl(160, 140, 'いつでも本当 → 現在形のまま')], '変わらない事実は現在形', C.blue),
  F('見直しのコツです。said や thought が見えたら、that の中の動詞を必ず見直します。said なのに that の中が is のままになる誤りが、とても多いからです。',
    '見直しの習慣', [...row(30, [['He said that he is busy.', 'r']], { h: 28 }), lb(160, 74, '× said なのに is のまま', 12, C.red, 'middle', true), ...row(92, [['He said that he was busy.', 'g']], { h: 28 }), lb(160, 136, '○ was に直す', 12, C.green, 'middle', true)], 'said を見たら、that の中を見直す', C.red),
  F('まとめです。①that は「〜ということ」をまとめる語。②主役の動詞が過去なら、that の中も過去。③変わらない事実だけは現在形のまま。',
    'まとめ', [bx(14, 24, 292, 28, '① that ＝ 〜ということ', C.blue, FILL.blue, 12), bx(14, 60, 292, 28, '② said のあとは過去にそろえる', C.green, FILL.green, 12), bx(14, 96, 292, 28, '③ 変わらない事実は現在形', C.purple, FILL.purple, 12)], '時制の一致', C.main),
], '時制の一致');

// ───────── eigo_s292 both / not only ─────────
FIGS['xf_eigo_s292'] = show([
  F('二つの語をペアで使う相関接続詞（そうかんせつぞくし）を学びます。まず both A and B「AもBも両方」と、not only A but also B「AだけでなくBも」です。ペアの形と動詞（どうし）の形を、「なぜ？」で調べます。',
    'ペアで使う接続詞', [...ex(30, 'Both Tom and Ken are my friends.', 'トムもケンも友達だ', 'b'), ci(110, 104, 20, 'Tom', C.blue, FILL.blue, 10), ci(210, 104, 20, 'Ken', C.blue, FILL.blue, 10), lb(160, 104, '両方', 12, C.blue, 'middle', true)], 'both A and B ＝ AもBも両方', C.blue),
  F('❓both は、だれとペアなのでしょう。→ 必ず and です。both A and B。both A or B とは言いません。either は or、neither は nor と組むように、ペアの相手は決まっています。',
    'both のペアは and', [...row(30, [['both A and B', 'g']], { h: 30, size: 14 }), ...row(76, [['both A or B', 'r']], { h: 28 }), lb(160, 122, '× or とは組まない', 12, C.red, 'middle', true)], 'both ＋ and がセット', C.green),
  F('❓Both Tom and Ken のあと、なぜ are なのでしょう。→ 両方で二人だからです。複数（ふくすう）のときの be動詞は are です。is にはしません。',
    '主語になると複数', [...row(30, [['Both Tom and Ken', 'b'], ['are', 'g'], ['tall.', 'n']], { h: 28 }), ci(110, 104, 18, '1', C.blue, FILL.blue, 12), lb(160, 104, '＋', 18, C.blue, 'middle', true), ci(210, 104, 18, '1', C.blue, FILL.blue, 12), gl(160, 138, '二人 → are')], 'both A and B は複数あつかい', C.green),
  F('A と B は、同じ形にそろえます。I like both swimming and skiing.（水泳もスキーも好き）は ing形と ing形。He is both kind and clever.（親切で賢い）は形容詞（けいようし）と形容詞です。',
    '形をそろえる', [...ex(28, 'I like both swimming and skiing.', '水泳もスキーも好き', 'b', { size: 11 }), ...ex(88, 'He is both kind and clever.', '親切でもあり賢くもある', 'b')], 'A と B は同じ形', C.blue),
  F('次は not only A but also B「AだけでなくBも」です。He speaks not only English but also French. は、英語に加えてフランス語も。言いたいのは but also のあと、B の方です。',
    'not only A but also B', [...ex(28, 'He speaks not only English but also French.', '英語だけでなくフランス語も', 'p', { size: 11 }), bx(30, 88, 100, 30, '英語', C.gray, FILL.gray, 13), bx(170, 88, 120, 30, '＋ フランス語', C.purple, FILL.purple, 13), ar(132, 103, 168, 103, C.purple), gl(160, 138, 'B に重点がある')], 'AだけでなくBも（Bが本題）', C.purple),
  F('❓also は、なくてもよいのでしょうか。→ はい、省略（しょうりゃく）できます。He speaks not only English but French. でも通じます。ただし not only と but はペアなので、そちらは消せません。',
    'also は省ける', [...row(30, [['not only A but also B', 'p']], { h: 28 }), ...row(76, [['not only A but B', 'p']], { h: 28 }), lb(160, 122, 'also だけ省ける（not only と but は残す）', 11, C.purple, 'middle', true)], 'also は省略してもよい', C.purple),
  F('主語になったときは、動詞は B に合わせます。Not only he but also I am a member. 動詞に近いのは I なので、is ではなく am です。❓なぜ近い方なのか。→ 話の中心が B にあるからです。',
    '動詞は B に合わせる', [...row(30, [['Not only he but also I', 'p'], ['am', 'g'], ['a member.', 'n']], { h: 28, size: 12 }), ar(200, 76, 200, 60, C.green), lb(200, 92, 'I に合わせて am', 12, C.green, 'middle', true), gl(160, 124, '× is  ○ am')], '動詞は but also の後ろ（B）に合わせる', C.green),
  F('書きかえもできます。not only A but also B ＝ B as well as A。He speaks not only English but also French. ＝ He speaks French as well as English. A と B の順が入れかわります。',
    'B as well as A に書きかえ', [...row(26, [['He speaks not only English but also French.', 'p']], { h: 26, size: 10.5 }), lb(160, 70, '＝', 16, C.ink, 'middle', true), ...row(84, [['He speaks French as well as English.', 'g']], { h: 26, size: 11 }), bx(60, 118, 80, 24, 'English', C.gray, FILL.gray, 11), bx(180, 118, 80, 24, 'French', C.purple, FILL.purple, 11), lb(160, 130, '⇄', 14, C.ink, 'middle', true)], '順が入れかわる', C.main),
  F('まとめです。both A and B は「両方」で複数あつかい。not only A but also B は「AだけでなくBも」で、動詞は B に合わせる。書きかえると A と B の順が入れかわる。',
    'まとめ', [bx(14, 24, 292, 30, 'both A and B ＝ 両方（are）', C.blue, FILL.blue, 12), bx(14, 62, 292, 30, 'not only A but also B ＝ Bが本題', C.purple, FILL.purple, 12), bx(14, 100, 292, 30, '＝ B as well as A（順が逆）', C.green, FILL.green, 12)], '相関接続詞①', C.main),
], 'both A and B ／ not only A but also B');

// ───────── eigo_s293 either / neither ─────────
FIGS['xf_eigo_s293'] = show([
  F('either A or B は「AかBのどちらか」、neither A nor B は「AもBも〜ない」です。形が似ているので、意味と、否定（ひてい）の考え方を「なぜ？」で整理します。',
    'either と neither', [...row(34, [['either A or B', 'g']], { h: 32, size: 14 }), gl(160, 84, 'AかBの、どちらか一方'), ...row(100, [['neither A nor B', 'r']], { h: 32, size: 14 }), gl(160, 150 - 8, 'AもBも、どちらも〜ない')], 'どちらか ／ どちらも〜ない', C.main),
  F('either A or B。You can have either tea or coffee.（紅茶かコーヒーのどちらか）。ペアの相手は or です。二つのうち、一つを選びます。',
    'either A or B', [...ex(28, 'You can have either tea or coffee.', '紅茶かコーヒーのどちらか', 'g', { size: 11 }), bx(50, 94, 90, 32, '紅茶 ○', C.green, FILL.green, 13), bx(180, 94, 90, 32, 'コーヒー', C.gray, FILL.gray, 13), lb(160, 110, 'or', 13, C.green, 'middle', true), gl(160, 140, 'どちらか一つを選ぶ')], 'either ＋ or がセット', C.green),
  F('neither A nor B。Neither Tom nor Ken came to the party.（トムもケンも来なかった）。ペアの相手は nor です。二人とも「ない」ので、どちらも×です。',
    'neither A nor B', [...ex(28, 'Neither Tom nor Ken came to the party.', 'トムもケンも来なかった', 'r', { size: 11 }), bx(50, 94, 90, 32, 'Tom ×', C.red, FILL.red, 13), bx(180, 94, 90, 32, 'Ken ×', C.red, FILL.red, 13), lb(160, 110, 'nor', 13, C.red, 'middle', true), gl(160, 140, 'どちらも来ていない')], 'neither ＋ nor がセット', C.red),
  F('❓なぜ neither の文に not を入れないのでしょう。→ neither の中に、もう「どちらも〜ない」が入っているからです。not を足すと「ない」が二つになり、意味がこわれます。',
    'neither に not はいらない', [...row(30, [["Neither Tom nor Ken didn't come.", 'r']], { h: 28, size: 11 }), lb(160, 74, '× 「ない」が二つ', 12, C.red, 'middle', true), ...row(92, [['Neither Tom nor Ken came.', 'g']], { h: 28 }), lb(160, 136, '○ 動詞は ふつうの形', 12, C.green, 'middle', true)], 'neither の中に「ない」がある', C.red),
  F('書きかえてみましょう。Neither Tom nor Ken came. ＝ Tom did not come, and Ken did not come. 「ない」を二回言う文を、neither が一回にまとめてくれています。',
    'neither は二つの「ない」をまとめる', [...row(26, [['Neither Tom nor Ken came.', 'r']], { h: 26 }), lb(160, 68, '＝', 16, C.ink, 'middle', true), ...row(82, [['Tom did not come, and Ken did not come.', 'b']], { h: 26, size: 11 }), gl(160, 128, '「ない」が二回 → neither で一回')], 'neither ＝ 「ない」を一回で言う', C.red),
  F('主語になったとき、動詞は近い方（B）に合わせます。Either you or he is wrong.（is は he に合わせる）。Neither he nor I am tired.（am は I に合わせる）。',
    '動詞は B に合わせる', [...row(28, [['Either you or he', 'g'], ['is', 'b'], ['wrong.', 'n']], { h: 26 }), ...row(84, [['Neither he nor I', 'r'], ['am', 'b'], ['tired.', 'n']], { h: 26 }), gl(160, 128, '動詞のすぐ前の語（B）を見る')], '動詞は近い方に合わせる', C.blue),
  F('日本語の「〜も」にも注意です。I like music, too.（私も好き）。でも否定文は I don\'t like music, either.（私も好きではない）。❓なぜ too ではだめなのでしょう。→ 否定文では either を使う決まりだからです。',
    '肯定は too、否定は either', [...row(30, [['I like music, too.', 'g']], { h: 26 }), gl(160, 70, '肯定文 → too'), ...row(88, [["I don't like music, either.", 'r']], { h: 26 }), gl(160, 128, '否定文 → either（too は使えない）')], '肯定なら too、否定なら either', C.main),
  F('会話の受け答えです。I like tennis. →「私も」は Me too. I don\'t like tennis. →「私も」は Me neither. 否定にそろえるときは neither を使います。',
    'Me too ／ Me neither', [...row(28, [['I like tennis.', 'b'], ['Me too.', 'g']], { h: 26 }), gl(160, 66, '肯定にそろえる'), ...row(86, [["I don't like tennis.", 'b'], ['Me neither.', 'r']], { h: 26 }), gl(160, 124, '否定にそろえる')], 'Me too ／ Me neither', C.main),
  F('まとめです。either は or、neither は nor とペアになります。neither には not を入れません。「〜も」は、肯定なら too、否定なら either です。',
    'まとめ', [bx(14, 24, 292, 28, 'either A or B ＝ どちらか', C.green, FILL.green, 12), bx(14, 60, 292, 28, 'neither A nor B ＝ どちらも〜ない', C.red, FILL.red, 12), bx(14, 96, 292, 28, '「〜も」＝ 肯定 too ／ 否定 either', C.blue, FILL.blue, 12)], '相関接続詞②', C.main),
], 'either A or B ／ neither A nor B');

// ───────── eigo_s294 主語と動詞の一致 ─────────
FIGS['xf_eigo_s294'] = show([
  F('Both Ken and Tom are 〜 と Either Ken or Tom is 〜 。二人ならんでいるのに、動詞（どうし）が are と is に分かれます。決まりを三つのグループに分けて整理します。',
    '動詞はどう決める？', [...row(30, [['Both Ken and Tom', 'b'], ['are', 'g']], { h: 28 }), ...row(76, [['Either Ken or Tom', 'p'], ['is', 'g']], { h: 28 }), gl(160, 124, 'なぜ are と is に分かれるのでしょう')], '三つのグループで考える', C.main),
  F('①複数あつかいのグループ。both A and B です。Both Tom and Ken are my friends.（トムもケンも友達）。❓なぜ複数なのでしょう。→ 二人をまとめて「両方」と言っているからです。',
    '① both A and B ＝ 複数', [...row(30, [['Both Tom and Ken', 'b'], ['are', 'g'], ['my friends.', 'n']], { h: 28, size: 12 }), ci(120, 104, 16, '1', C.blue, FILL.blue, 12), lb(160, 104, '＋', 16, C.blue, 'middle', true), ci(200, 104, 16, '1', C.blue, FILL.blue, 12), gl(160, 136, '二人まとめて → are / were / 原形')], 'both は常に複数', C.blue),
  F('②近い方に合わせるグループ。either A or B、neither A nor B、not only A but also B です。動詞のすぐ前の語（B）を見て、動詞を決めます。',
    '② 動詞に近い B に合わせる', [...row(26, [['either A or B', 'g']], { h: 26 }), ...row(60, [['neither A nor B', 'r']], { h: 26 }), ...row(94, [['not only A but also B', 'p']], { h: 26 }), gl(160, 134, '動詞のとなりの B を見る')], 'B に合わせる', C.green),
  F('例です。Either you or he is wrong. は he に合わせて is。Neither he nor I am late. は I に合わせて am。Not only she but also they are students. は they に合わせて are。',
    '近い語に合わせた例', [...row(24, [['Either you or he', 'g'], ['is', 'b']], { h: 24, size: 12 }), ...row(56, [['Neither he nor I', 'r'], ['am', 'b']], { h: 24, size: 12 }), ...row(88, [['Not only she but also they', 'p'], ['are', 'b']], { h: 24, size: 12 }), gl(160, 130, '青い動詞は、すぐ前の語に合っている')], 'B の人称・数で決める', C.blue),
  F('③前の語に合わせるグループ。A as well as B です。She as well as her friends is a student.（友達だけでなく彼女も学生だ）。❓なぜ前なのでしょう。→ as well as は「つけ足し」で、主役は前の A だからです。',
    '③ A as well as B ＝ 前の A に合わせる', [...row(30, [['She', 'g'], ['as well as her friends', 'n'], ['is', 'g']], { h: 28, size: 12 }), ar(60, 74, 60, 60, C.green), lb(160, 92, '主役は前の She（つけ足しは後ろ）', 12, C.green, 'middle', true), gl(160, 124, 'She に合わせて is')], 'as well as だけは前の語', C.green),
  F('三つを一つの表にします。both は複数、either・neither・not only は後ろの B、as well as は前の A。❓なぜ as well as だけ反対なのか。→ つけ足しの語が B になるからです。',
    '一覧表', [bx(10, 24, 150, 28, 'both A and B', C.blue, FILL.blue, 12), bx(170, 24, 140, 28, '複数', C.blue, FILL.blue, 12), bx(10, 58, 150, 28, 'either / neither / not only', C.green, FILL.green, 11), bx(170, 58, 140, 28, '後ろの B', C.green, FILL.green, 12), bx(10, 92, 150, 28, 'A as well as B', C.red, FILL.red, 12), bx(170, 92, 140, 28, '前の A', C.red, FILL.red, 12)], 'as well as だけ反対', C.red),
  F('手順です。①どの接続詞かを見る。②複数か、後ろか、前かを決める。③その語が単数か複数か、I かどうかを確かめて動詞を選ぶ。主語が長いときは、動詞の直前の語だけで決めないよう気をつけます。',
    '決める手順', [...[ '① どの接続詞？', '② 複数・後ろ・前のどれ？', '③ その語に動詞を合わせる'].map((t, i) => bx(30, 24 + i * 40, 260, 30, t, [C.blue, C.green, C.purple][i], [FILL.blue, FILL.green, FILL.purple][i], 12))], '手順どおりに決める', C.main),
  F('まとめです。both は複数、近い方に合わせるのは either・neither・not only、前に合わせるのは as well as だけ。迷ったら、動詞のすぐ前の語を見る。ただし as well as は例外です。',
    'まとめ', [...row(26, [['both → are', 'b']], { h: 26 }), ...row(60, [['either / neither / not only → B', 'g']], { h: 26 }), ...row(94, [['as well as → A（例外）', 'r']], { h: 26 })], '迷ったら動詞のとなり（as well as を除く）', C.main),
], '主語と動詞の一致');

// ───────── eigo_s295 前置詞か接続詞か ─────────
FIGS['xf_eigo_s295'] = show([
  F('after school と after I came home。どちらも after ですが、前は前置詞（ぜんちし）、後ろは接続詞（せつぞくし）です。見分けるカギは、そのあとの形にあります。',
    '同じ after でも…', [...row(30, [['after', 'm'], ['school', 'b']], { h: 28 }), gl(160, 68, '名詞が来る → 前置詞'), ...row(86, [['after', 'm'], ['I came home', 'g']], { h: 28 }), gl(160, 124, '主語＋動詞が来る → 接続詞')], '後ろの形で決まる', C.main),
  F('見分け方はこれだけです。前置詞のあとは名詞（めいし）、接続詞のあとは「主語＋動詞」のある文。空所補充（くうしょほじゅう）では、まず空所の後ろを見ます。',
    '見分け方', [bx(14, 30, 138, 56, '前置詞\n＋ 名詞\nthe rain', C.blue, FILL.blue, 12), bx(168, 30, 138, 56, '接続詞\n＋ 主語と動詞\nit rained', C.green, FILL.green, 12), gl(160, 112, 'まず、空所の後ろを見る')], '後ろに主語＋動詞があるか？', C.main),
  F('❓なぜ後ろの形で決まるのでしょう。→ 前置詞は名詞とセットで「かたまり」を作る語。接続詞は文と文をつなぐ橋なので、後ろにも文が必要だからです。',
    'なぜ後ろの形で決まる？', [bx(14, 30, 138, 40, '前置詞\n名詞とセット', C.blue, FILL.blue, 12), bx(168, 30, 138, 40, '接続詞\n文と文をつなぐ橋', C.green, FILL.green, 12), bx(30, 92, 100, 26, 'during ＋ 名詞', C.blue, FILL.blue, 11), bx(190, 92, 100, 26, 'while ＋ 文', C.green, FILL.green, 11)], '名詞なら前置詞、文なら接続詞', C.main),
  F('ペアで覚えましょう。during ＋ 名詞 ／ while ＋ 文。because of ＋ 名詞 ／ because ＋ 文。in spite of ＋ 名詞 ／ though ＋ 文。意味は同じで、形がちがうだけです。',
    'ペアで覚える', [bx(10, 24, 140, 28, 'during ＋ 名詞', C.blue, FILL.blue, 12), bx(170, 24, 140, 28, 'while ＋ 文', C.green, FILL.green, 12), bx(10, 60, 140, 28, 'because of ＋ 名詞', C.blue, FILL.blue, 12), bx(170, 60, 140, 28, 'because ＋ 文', C.green, FILL.green, 12), bx(10, 96, 140, 28, 'in spite of ＋ 名詞', C.blue, FILL.blue, 11), bx(170, 96, 140, 28, 'though ＋ 文', C.green, FILL.green, 12)], '意味は同じ、後ろの形がちがう', C.main),
  F('練習です。(　　) the vacation → 後ろが名詞なので during。(　　) I was sleeping → 後ろが文なので while。During the vacation / While I was sleeping と答えます。',
    '空所補充の練習①', [...row(28, [['(　　) the vacation', 'b'], ['→ during', 'g']], { h: 26 }), ...row(72, [['(　　) I was sleeping', 'b'], ['→ while', 'g']], { h: 26 }), gl(160, 120, '名詞なら during、文なら while')], 'during ／ while', C.blue),
  F('もう一組。(　　) the rain, we stayed home. 後ろが名詞なので because of。(　　) it rained, we stayed home. 後ろが文なので because。because of と because を取りちがえると、減点されます。',
    '空所補充の練習②', [...row(28, [['(　　) the rain', 'b'], ['→ because of', 'g']], { h: 26 }), ...row(72, [['(　　) it rained', 'b'], ['→ because', 'g']], { h: 26 }), gl(160, 120, '名詞なら because of、文なら because')], 'because of ／ because', C.green),
  F('どちらにもなる語もあります。before・after・since・until・as です。before dinner（名詞）は前置詞、before I had dinner（文）は接続詞。since 2020 は前置詞、since I was a child は接続詞です。',
    'どちらにもなる語', [...row(26, [['before dinner', 'b'], ['before I had dinner', 'g']], { h: 26, size: 11 }), gl(160, 62, '名詞 → 前置詞 ／ 文 → 接続詞'), ...row(84, [['since 2020', 'b'], ['since I was a child', 'g']], { h: 26, size: 11 }), gl(160, 120, '語は同じ。後ろの形で判断する')], 'before・after・since・until・as', C.main),
  F('まとめです。①訳して選ぶのではなく、後ろに主語と動詞があるかで選ぶ。②during・because of・in spite of は名詞の前。③while・because・though は文の前。これがいちばん速くて確実です。',
    'まとめ', [bx(14, 24, 292, 28, '① 後ろに主語＋動詞があるか？', C.main, FILL.warm, 12), bx(14, 60, 292, 28, '② 名詞なら during / because of / in spite of', C.blue, FILL.blue, 11), bx(14, 96, 292, 28, '③ 文なら while / because / though', C.green, FILL.green, 12)], '後ろの形で選ぶ', C.main),
], '前置詞か接続詞か');

// ───────── eigo_s298 目的語になる不定詞 ─────────
FIGS['xf_eigo_s298'] = show([
  F('「医者になりたい」「医者になろうと決めた」「医者になろうとした」。英語ではどれも「動詞＋to＋原形」で言えます。ちがうのは前の動詞だけ。want の形に、hope・decide・try などを入れかえてみましょう。',
    '「動詞＋to＋原形」の型', [...row(30, [['I', 'n'], ['want', 'b'], ['to be', 'g'], ['a doctor.', 'n']], { h: 28 }), gl(160, 68, '→ want のところを入れかえる'), ...row(86, [['I', 'n'], ['hope / decide / try', 'm'], ['to be', 'g'], ['a doctor.', 'n']], { h: 28, size: 11 })], 'want の場所に別の動詞を入れる', C.main),
  F('目的語（もくてきご）に to＋原形をとる、代表的な動詞です。hope（望む）・decide（決める）・try（試す）・begin（始める）・learn（できるようになる）・promise（約束する）・plan（計画する）。',
    '代表的な動詞', [...row(24, [['hope  望む', 'b'], ['decide  決める', 'b']], { h: 26, size: 12 }), ...row(56, [['try  しようとする', 'g'], ['begin  始める', 'g']], { h: 26, size: 12 }), ...row(88, [['learn  できるようになる', 'p'], ['promise  約束する', 'p']], { h: 26, size: 11 }), ...row(120, [['plan  計画する', 'm']], { h: 26 })], '動詞 ＋ to ＋ 原形', C.main),
  F('❓なぜ、これらの動詞のあとは to なのでしょう。→ to は「〜へ向かう」というイメージの語だからです。望む・決める・試す・約束する・計画する…どれも、まだ実現していない「これからのこと」に向かう動詞です。',
    'to は「これから」へ向かう', [ln(20, 90, 300, 90, C.gray, false, 2), ci(70, 90, 7, undefined, C.gray, FILL.gray), lb(70, 112, '今', 11, C.gray, 'middle'), ci(250, 90, 7, undefined, C.green, FILL.green), lb(250, 112, 'これから', 11, C.green, 'middle'), ar(78, 78, 240, 78, C.green), lb(160, 60, 'hope / decide / promise / plan ＋ to', 12, C.green, 'middle', true), gl(160, 140, 'まだ起きていないことを、目的語にする')], 'to ＝ 未来へ向かう', C.green),
  F('例を見ましょう。I hope to see you again.（またあなたに会いたい）。We decided to go camping.（キャンプに行くことに決めた）。どちらも「動詞＋to＋原形」です。',
    '例文①', [...ex(26, 'I hope to see you again.', 'またあなたに会えるといいな', 'b'), ...ex(86, 'We decided to go camping.', 'キャンプに行くことに決めた', 'b')], 'hope to ／ decide to', C.blue),
  F('try to と try ~ing はちがいます。I tried to call him. は「電話しようとした」で、できなかったことも多い。I tried calling him. は「ためしに電話してみた」で、実際にかけています。',
    'try to と try ~ing', [...row(26, [['I tried to call him.', 'g']], { h: 26 }), gl(160, 64, 'しようと努力した（かけたとは限らない）'), ...row(86, [['I tried calling him.', 'b']], { h: 26 }), gl(160, 124, 'ためしてみた（実際にかけた）')], 'try to ＝ しようとする', C.green),
  F('❓begin や start は、to 以外もとれるのでしょうか。→ はい。It began to rain. ＝ It began raining. どちらでも同じ意味です。でも hope・decide・promise・plan は to だけです。',
    'begin は両方OK', [...row(26, [['It began to rain.', 'g'], ['＝', 'n'], ['It began raining.', 'g']], { h: 26, size: 11 }), gl(160, 64, 'begin / start は どちらでもよい'), ...row(86, [['hope / decide / promise / plan', 'm']], { h: 26 }), gl(160, 124, 'to だけ（~ing は使えない）')], 'begin・start は例外的に両方', C.main),
  F('hope には、もう一つ注意があります。I hope to become a teacher. は自分のこと。相手のことを望むときは hope (that) you will get well soon. と that 節を使います。I hope you to come. は誤りです。',
    'hope のあとの形', [...row(26, [['I hope to become a teacher.', 'g']], { h: 26 }), gl(160, 64, '自分がすること → hope to'), ...row(84, [['I hope (that) you will get well soon.', 'b']], { h: 26, size: 11 }), gl(160, 122, '相手のこと → hope (that) 文'), lb(160, 140, '× I hope you to come.', 11, C.red, 'middle', true)], '相手のことは hope that', C.red),
  F('まとめです。hope・decide・try・begin・learn・promise・plan は「動詞＋to＋原形」。まだ実現していない、これからのことを表します。begin と start だけは ~ing もとれます。',
    'まとめ', [bx(14, 24, 292, 30, '動詞 ＋ to ＋ 原形（これからのこと）', C.green, FILL.green, 12), bx(14, 62, 292, 30, 'begin・start は ~ing でもよい', C.blue, FILL.blue, 12), bx(14, 100, 292, 30, 'hope ＋ 人 ＋ to ～ は言えない', C.red, FILL.red, 12)], '目的語の不定詞', C.main),
], '目的語になる不定詞');

// ───────── eigo_s301 名詞を後ろから ─────────
FIGS['xf_eigo_s301'] = show([
  F('「やるべき宿題」「読む本」。日本語では説明が名詞の前に来ます。英語はこれが逆で、a lot of homework to do のように、名詞のすぐ後ろに置きます。「なぜ？」でたどりましょう。',
    '日本語と英語は逆', [bx(14, 30, 138, 40, '日本語\nするべき → 宿題', C.gray, FILL.gray, 12), bx(168, 30, 138, 40, '英語\nhomework → to do', C.green, FILL.green, 12), ar(152, 50, 166, 50, C.main), gl(160, 96, '説明の位置が、日本語と逆になる')], '説明は名詞の後ろ', C.main),
  F('並べてみましょう。a lot of homework to do で「するべき宿題がたくさん」。名詞（めいし）のあとに、to＋原形が付いて、その名詞を説明しています。',
    '名詞 → to ＋ 原形', [...row(30, [['I have', 'n'], ['a lot of homework', 'b'], ['to do.', 'g']], { h: 28 }), ar(220, 70, 130, 70, C.green), gl(160, 90, '後ろから 宿題 を説明する'), gl(160, 120, '「するべき宿題がたくさんある」')], 'a lot of homework ← to do', C.green),
  F('❓なぜ後ろに置くのでしょう。→ 英語には「一語の説明は前、二語以上の説明は後ろ」という原則（げんそく）があるからです。to do は二語なので、名詞の後ろに回ります。',
    '一語は前、二語以上は後ろ', [...row(30, [['a', 'n'], ['red', 'g'], ['pen', 'b']], { h: 26 }), gl(160, 66, '一語（red）→ 名詞の前'), ...row(84, [['a', 'n'], ['pen', 'b'], ['to write with', 'g']], { h: 26 }), gl(160, 120, '二語以上 → 名詞の後ろ')], '長い説明は後ろへ', C.main),
  F('ふつうの名詞にも使えます。many books to read（読むべき本）、no time to watch TV（テレビを見る時間がない）、a chance to practice English（英語を練習する機会）、a way to solve this problem（この問題を解く方法）。',
    'いろいろな名詞', [...row(24, [['many books to read', 'b']], { h: 24 }), ...row(54, [['no time to watch TV', 'b']], { h: 24 }), ...row(84, [['a chance to practice English', 'b']], { h: 24 }), ...row(114, [['a way to solve this problem', 'b']], { h: 24 })], '名詞 ＋ to ＋ 原形', C.blue),
  F('❓位置をまちがえるとどうなるでしょう。→ 意味がかわります。I have a lot of homework to do. は「するべき宿題がある」。I want to do a lot of homework. は「宿題をたくさんしたい」。to がどこにあるかで、使い方も意味もかわります。',
    '位置で意味がかわる', [...row(26, [['I have a lot of homework to do.', 'g']], { h: 26, size: 11 }), gl(160, 64, '宿題が すでにある（宿題を説明）'), ...row(84, [['I want to do a lot of homework.', 'b']], { h: 26, size: 11 }), gl(160, 122, '宿題を したい（want の目的語）')], 'to の位置で意味がかわる', C.red),
  F('よく使う組み合わせです。time to go（行く時間）、something to say（言うこと）、a place to stay（泊まる場所）、money to buy it（それを買うお金）。「〜する○○」は、○○ ＋ to ＋ 原形の順です。',
    'よく使う組み合わせ', [...row(26, [['time to go', 'g'], ['something to say', 'g']], { h: 26, size: 11 }), ...row(62, [['a place to stay', 'g'], ['money to buy it', 'g']], { h: 26, size: 11 }), gl(160, 112, '「〜する○○」→ ○○ ＋ to ＋ 原形')], '○○ ＋ to ＋ 原形', C.green),
  F('順番を表す語が付くときも同じです。He was the first person to arrive.（彼は最初に着いた人だ）。the first・the last・the only のあとにも、to＋原形が付きます。訳は「最初に〜した○○」。',
    'the first ＋ 名詞 ＋ to ～', [...ex(26, 'He was the first person to arrive.', '彼は最初に到着した人だった', 'p'), ...row(86, [['the first', 'p'], ['the last', 'p'], ['the only', 'p']], { h: 26 }), gl(160, 126, '＋ 名詞 ＋ to ～ （最初に〜した）')], 'first・last・only ＋ 名詞 ＋ to ～', C.purple),
  F('まとめです。①「〜する○○」は ○○ ＋ to ＋ 原形。②二語以上の説明は名詞の後ろ。③to を前に出すと別の意味になる。日本語とは逆の順なので、声に出して練習しましょう。',
    'まとめ', [bx(14, 24, 292, 28, '① ○○ ＋ to ＋ 原形', C.green, FILL.green, 12), bx(14, 60, 292, 28, '② 二語以上の説明は後ろ', C.blue, FILL.blue, 12), bx(14, 96, 292, 28, '③ to の位置で意味がかわる', C.red, FILL.red, 12)], '形容詞的用法', C.main),
], '名詞を後ろから説明する不定詞');

// ───────── eigo_s303 前置詞が残る形 ─────────
FIGS['xf_eigo_s303'] = show([
  F('「いっしょに遊ぶ友だち」を a friend to play だけで終えると、英語としては足りません。a friend to play with と、最後に前置詞（ぜんちし）が残ります。なぜでしょう。',
    '文末に残る前置詞', [...row(30, [['a friend to play', 'r']], { h: 28 }), lb(160, 72, '× 足りない', 12, C.red, 'middle', true), ...row(90, [['a friend to play with', 'g']], { h: 28 }), lb(160, 132, '○ with が必要', 12, C.green, 'middle', true)], 'a friend to play with', C.green),
  F('❓なぜ with がいるのでしょう。→ 「友だちと遊ぶ」は play with a friend だからです。play のあとには with が必要。その with を、消さずに残しているのです。',
    'もとの文に戻してみる', [...row(30, [['play', 'g'], ['with', 'r'], ['a friend', 'b']], { h: 28 }), gl(160, 66, '「友だちと遊ぶ」← with が必要！'), lb(160, 100, '× play a friend（友だちを遊ぶ？）', 12, C.red, 'middle', true), gl(160, 130, 'play のあとに with がないと意味が通らない')], 'play には with が必要', C.red),
  F('組み立てます。「a friend」が前に出て、「play with」が後ろに残ります。a friend ← to play with。with は消えずに、文末に取り残されるのです。',
    '前に出して、前置詞が残る', [bx(10, 34, 86, 30, 'a friend', C.blue, FILL.blue, 13), bx(110, 34, 50, 30, 'to', C.gray, FILL.gray, 13), bx(172, 34, 60, 30, 'play', C.green, FILL.green, 13), bx(244, 34, 60, 30, 'with', C.red, FILL.red, 13), ar(54, 68, 244, 68, C.blue, true), gl(160, 94, 'もとは「play with a friend」の a friend が前へ'), gl(160, 120, 'with だけが後ろに残る')], '名詞だけ前へ、前置詞は残る', C.main),
  F('ほかの例です。a house to live in（住む家）← live in a house。a pen to write with（書くためのペン）← write with a pen。a chair to sit on（すわるいす）← sit on a chair。',
    'ほかの例', [...row(22, [['a house to live in', 'g']], { h: 24 }), gl(160, 54, '← live in a house'), ...row(64, [['a pen to write with', 'g']], { h: 24 }), gl(160, 96, '← write with a pen'), ...row(106, [['a chair to sit on', 'g']], { h: 24 }), gl(160, 138, '← sit on a chair')], '前置詞を落とさない', C.green),
  F('前置詞がいらないときもあります。some books to read は、read some books（本を読む）で前置詞がいりません。a lot of work to do も、do a lot of work です。❓見分け方は？→ もとの文に前置詞があるかどうかです。',
    '前置詞がいらない場合', [...row(30, [['some books to read', 'b']], { h: 26 }), gl(160, 68, '← read some books（前置詞なし）'), ...row(88, [['a lot of work to do', 'b']], { h: 26 }), gl(160, 126, '← do a lot of work（前置詞なし）')], '読む・する・食べるは前置詞なし', C.blue),
  F('write に with と on の二つがあります。something to write with は「書く道具」（ペン）。something to write on は「書く面」（紙・ノート）。道具には with、面には on を使います。',
    'write with と write on', [bx(14, 30, 138, 40, 'something\nto write with', C.blue, FILL.blue, 12), bx(168, 30, 138, 40, 'something\nto write on', C.green, FILL.green, 12), gl(83, 92, '道具（ペン）'), gl(237, 92, '面（紙・ノート）'), gl(160, 124, 'with ＝ 道具 ／ on ＝ 面')], '道具は with、面は on', C.main),
  F('場所のときも同じです。a place to live in、a room to study in のように、in を付けます。そして、前置詞は必ず最後です。to の前に出して a friend with to play とは書きません。',
    '前置詞は必ず最後', [...row(30, [['a room to study in', 'g']], { h: 26 }), ...row(76, [['a friend with to play', 'r']], { h: 26 }), lb(160, 118, '× 前置詞を to の前に出さない', 12, C.red, 'middle', true)], '前置詞は文末に残す', C.red),
  F('まとめです。①名詞をもとの文に戻す。②前置詞が必要なら、最後に残す。③読む・する・食べるは前置詞なし、遊ぶ・住む・すわるは前置詞あり。落とすと減点されます。',
    'まとめ', [bx(14, 24, 292, 28, '① もとの文に戻してみる', C.blue, FILL.blue, 12), bx(14, 60, 292, 28, '② 前置詞が必要なら文末に残す', C.green, FILL.green, 12), bx(14, 96, 292, 28, '③ 落とすと減点される', C.red, FILL.red, 12)], '前置詞を落とさない', C.main),
], '前置詞が残る不定詞');

// ───────── eigo_s305 感情の原因 ─────────
FIGS['xf_eigo_s305'] = show([
  F('I am glad. だけでは「うれしい」で終わってしまいます。「なぜうれしいの？」まで言うには、あとに to see you を足して I am glad to see you. とします。',
    '感情に理由をつける', [...row(30, [['I am glad.', 'b']], { h: 28 }), gl(160, 66, 'うれしい（理由はわからない）'), ...row(86, [['I am glad', 'b'], ['to see you.', 'g']], { h: 28 }), gl(160, 124, 'あなたに会えて うれしい')], '感情 ＋ to ＋ 原形', C.main),
  F('❓この to see you は、何をしているのでしょう。→ うれしい気持ちの「原因（げんいん）」を教えています。「あなたに会えた」から「うれしい」。矢印は原因から気持ちへ向かいます。',
    '原因 → 気持ち', [bx(14, 44, 130, 36, 'to see you\n（あなたに会えた）', C.green, FILL.green, 12), bx(176, 44, 130, 36, 'I am glad\n（うれしい）', C.blue, FILL.blue, 12), ar(146, 62, 174, 62, C.main), gl(160, 110, '原因 → 気持ち')], '気持ちの原因を表す', C.green),
  F('感情を表す形容詞（けいようし）を覚えましょう。glad（うれしい）・happy（幸せな）・sad（悲しい）・sorry（残念に思う）・surprised（驚いた）・excited（わくわくした）・disappointed（がっかりした）。',
    '感情の形容詞', [...row(24, [['glad うれしい', 'g'], ['happy 幸せ', 'g']], { h: 26 }), ...row(56, [['sad 悲しい', 'b'], ['sorry 残念', 'b']], { h: 26 }), ...row(88, [['surprised 驚いた', 'p'], ['excited わくわく', 'p']], { h: 26, size: 11 }), ...row(120, [['disappointed がっかり', 'r']], { h: 26, size: 11 })], '感情の形容詞 ＋ to ～', C.main),
  F('例です。We were happy to hear the news.（その知らせを聞いてうれしかった）。She was sad to leave her friends.（友だちと別れて悲しかった）。I was surprised to see him there.（そこで彼を見て驚いた）。',
    '例文', [...row(24, [['We were happy to hear the news.', 'g']], { h: 24, size: 11 }), ...row(62, [['She was sad to leave her friends.', 'b']], { h: 24, size: 11 }), ...row(100, [['I was surprised to see him there.', 'p']], { h: 24, size: 11 }), gl(160, 142, 'どれも「〜して」と訳す')], '感情 ＋ to ～ ＝ 〜して', C.green),
  F('❓なぜ「〜するために」と訳してはいけないのでしょう。→ 「あなたに会うためにうれしい」では、意味が通らないからです。感情のあとの to は目的ではなく、原因だから「〜して」です。',
    '「〜して」と訳す', [...row(30, [['I am glad to see you.', 'g']], { h: 26 }), lb(160, 76, '× あなたに会うために、うれしい', 12, C.red, 'middle', true), lb(160, 104, '○ あなたに会えて、うれしい', 12, C.green, 'middle', true)], '原因は「〜して」', C.green),
  F('決まり文句にもなっています。Nice to meet you.（はじめまして＝お会いできてうれしい）。I\'m happy to be here.（ここに来られてうれしい）。どちらも、感情の原因を表す to です。',
    'あいさつにも使う', [...ex(26, 'Nice to meet you.', 'お会いできてうれしい', 'g'), ...ex(86, "I'm happy to be here.", 'ここに来られてうれしい', 'g')], 'あいさつも この用法', C.main),
  F('目的の to との区別です。I was happy to help him.（手伝えてうれしい）は原因。I called him to help him.（手伝うために電話した）は目的。直前が形容詞ならば原因、動詞ならば目的、と見分けます。',
    '目的と原因の見分け', [...row(26, [['I was happy', 'b'], ['to help him.', 'g']], { h: 26 }), gl(160, 64, '直前が形容詞 → 原因「〜して」'), ...row(84, [['I called him', 'b'], ['to help him.', 'm']], { h: 26 }), gl(160, 122, '直前が動詞 → 目的「〜するために」')], '直前の語で見分ける', C.main),
  F('まとめです。①感情の形容詞のあとの to ＋ 原形は、気持ちの原因。②「〜して」と訳す。③Nice to meet you. もこの形。sorry は「残念」と「すまない」の二つの意味があるので、場面で判断します。',
    'まとめ', [bx(14, 24, 292, 28, '① 感情の形容詞 ＋ to ＋ 原形', C.green, FILL.green, 12), bx(14, 60, 292, 28, '② 原因 → 「〜して」', C.blue, FILL.blue, 12), bx(14, 96, 292, 28, '③ Nice to meet you. もこの形', C.purple, FILL.purple, 12)], '副詞的用法（感情の原因）', C.main),
], '感情の原因を表す不定詞');

// ───────── eigo_s306 結果 ─────────
FIGS['xf_eigo_s306'] = show([
  F('He grew up to be a doctor. を「医者になるために育った」と訳すと、変です。正しくは「成長して、医者になった」。同じ to＋原形でも、前から順に訳す用法があります。',
    '結果を表す不定詞', [...ex(30, 'He grew up to be a famous doctor.', '彼は成長して有名な医者になった', 'g', { size: 11 }), gl(160, 100, '「医者になるために育った」→ 変！', C.red), gl(160, 124, '「育って、その結果、医者になった」→ OK', C.green)], '前から順に訳す', C.green),
  F('❓なぜ「〜するために」ではだめなのでしょう。→ 育つことは、医者になるためにやることではないからです。育った（できごと）→ その結果、医者になった。時間の順に並んでいます。',
    '時間の順に読む', [ln(20, 100, 300, 100, C.gray, false, 2), bx(14, 56, 80, 30, '子ども', C.gray, FILL.gray, 12), bx(120, 56, 80, 30, '成長した', C.blue, FILL.blue, 12), bx(226, 56, 80, 30, '医者になった', C.green, FILL.green, 11), ar(96, 71, 118, 71, C.main), ar(202, 71, 224, 71, C.main), gl(160, 126, 'grew up → (to) be a doctor 結果')], '起きた順に訳す', C.main),
  F('目的の不定詞とくらべます。He studied hard to be a doctor.（医者になるために一生けんめい勉強した）。勉強は、医者になる目的でするものです。だから「〜するために」と訳せます。',
    '目的の不定詞とくらべる', [...row(26, [['He studied hard to be a doctor.', 'b']], { h: 26, size: 11 }), gl(160, 64, '勉強する → 医者になる（目的）'), ...row(84, [['He grew up to be a doctor.', 'g']], { h: 26 }), gl(160, 122, '成長した → 医者になった（結果）')], '「〜するために」で通じれば目的', C.main),
  F('覚える決まった言い方です。grow up to be 〜（成長して〜になる）、live to be 〜（〜歳まで生きる）、only to 〜（〜しただけだった）、never to 〜（二度と〜しなかった）。',
    '決まった言い方', [...row(18, [['grow up to be 〜', 'g']], { h: 22 }), gl(160, 50, '成長して〜になる'), ...row(62, [['live to be 〜', 'g']], { h: 22 }), gl(160, 94, '〜歳まで生きる'), ...row(106, [['only to 〜 ／ never to 〜', 'g']], { h: 22 }), gl(160, 138, '〜しただけ／二度と〜しなかった')], '丸ごと覚える', C.green),
  F('live to be ninety の例です。My grandfather lived to be ninety.（祖父は九十歳まで生きた）。長く生きて、その結果九十歳になった。生きるのは九十歳になるためではありません。',
    'live to be ～', [...ex(26, 'My grandfather lived to be ninety.', '祖父は九十歳まで生きた', 'g'), ln(30, 106, 290, 106, C.gray, false, 2), ci(40, 106, 5, undefined, C.gray, FILL.gray), lb(40, 124, '生まれた', 10, C.gray, 'middle'), ci(280, 106, 5, undefined, C.green, FILL.green), lb(280, 124, '90歳', 10, C.green, 'middle'), ar(48, 96, 270, 96, C.green)], '生きた結果 90歳になった', C.green),
  F('only to の例です。She went to the station only to find the train had left.（駅へ行ったが、電車はもう出たあとだった）。行った、しかし結局（けっきょく）がっかりする結果になった、という意味です。',
    'only to ～', [...ex(24, 'She went to the station only to find', '駅へ行ったが…', 'g', { size: 11 }), ...row(84, [['the train had left.', 'r']], { h: 26 }), gl(160, 122, '→ 電車はもう出たあとだった')], 'only to ＝ 結局〜しただけ', C.red),
  F('見分け方です。「〜するために」と訳して意味が通れば目的。通らず、「そして〜した」の方が自然なら結果です。grow up や live のように、目的を持って行うわけではない動詞のあとでは、結果になりやすいです。',
    '目的か、結果か', [bx(90, 24, 140, 30, '「〜するために」で通る？', C.main, FILL.warm, 11), ar(120, 56, 80, 82, C.green), ar(200, 56, 240, 82, C.blue), lb(62, 64, 'はい', 11, C.green, 'middle', true), lb(262, 64, 'いいえ', 11, C.blue, 'middle', true), bx(20, 86, 120, 28, '目的', C.green, FILL.green, 13), bx(180, 86, 120, 28, '結果（前から訳す）', C.blue, FILL.blue, 11)], '通れば目的、通らなければ結果', C.main),
  F('まとめです。①結果の不定詞は、前から順に「〜して、…になった」と訳す。②grow up to be 〜 と live to be 〜 は丸ごと暗記。③目的か結果かは、「〜するために」が通じるかで決める。',
    'まとめ', [bx(14, 24, 292, 28, '① 前から順に「〜して…になった」', C.green, FILL.green, 12), bx(14, 60, 292, 28, '② grow up to be ／ live to be', C.blue, FILL.blue, 12), bx(14, 96, 292, 28, '③ 「〜するために」が通じれば目的', C.purple, FILL.purple, 11)], '副詞的用法（結果）', C.main),
], '結果を表す不定詞');

// ───────── eigo_s309 疑問詞＋不定詞 ─────────
FIGS['xf_eigo_s309'] = show([
  F('how to だけ覚えても、「何を買えばいいか」「いつ出発すればいいか」は言えません。how のところを what・when・where・which に入れかえるだけで、いろいろ言えます。疑問詞（ぎもんし）ごとの意味を見ましょう。',
    'how のところを入れかえる', [...row(30, [['I know', 'n'], ['how', 'b'], ['to do it.', 'g']], { h: 28 }), gl(160, 68, '→ how を入れかえる'), ...row(86, [['I know', 'n'], ['what / when / where / which', 'm'], ['to do.', 'g']], { h: 28, size: 11 })], '疑問詞 ＋ to ＋ 原形', C.main),
  F('四つの意味です。what to do（何をすべきか）、when to start（いつ始めるべきか）、where to go（どこへ行くべきか）、which to choose（どちらを選ぶべきか）。',
    '四つの疑問詞', [...row(24, [['what to do', 'b'], ['何をすべきか', 'n']], { h: 26 }), ...row(56, [['when to start', 'g'], ['いつ始めるべきか', 'n']], { h: 26 }), ...row(88, [['where to go', 'p'], ['どこへ行くべきか', 'n']], { h: 26 }), ...row(120, [['which to choose', 'r'], ['どちらを選ぶべきか', 'n']], { h: 26, size: 11 })], '疑問詞ごとに意味がかわる', C.main),
  F('❓どれも「〜すべきか」という意味になるのはなぜでしょう。→ to ＋ 原形には「これからする」という感じがあるので、「〜すればよいか」と迷う意味になるからです。should を入れて考えるとわかります。',
    'should を入れて考える', [...row(30, [['what to do', 'b'], ['＝', 'n'], ['what I should do', 'g']], { h: 28 }), ...row(76, [['where to go', 'p'], ['＝', 'n'], ['where I should go', 'g']], { h: 28 }), gl(160, 124, 'should は「〜すべき」という意味')], '「〜すべきか」の意味', C.green),
  F('文の中で使います。I don\'t know what to do.（何をすればよいかわからない）。Please tell me when to start.（いつ始めればよいか教えて）。We didn\'t know where to go.（どこへ行けばよいかわからなかった）。',
    '例文', [...row(24, [["I don't know what to do.", 'b']], { h: 24 }), ...row(62, [['Please tell me when to start.', 'g']], { h: 24 }), ...row(100, [["We didn't know where to go.", 'p']], { h: 24 }), gl(160, 142, '全体が「〜すべきか」の名詞のかたまり')], '知らない・教える内容になる', C.blue),
  F('which は名詞を続けられます。I can\'t decide which book to buy.（どの本を買えばよいか決められない）。what も what time to leave（何時に出発すべきか）のように使えます。',
    'which ＋ 名詞', [...ex(26, "I can't decide which book to buy.", 'どの本を買えばよいか決められない', 'r', { size: 11 }), ...ex(84, 'Tell me which way to go.', 'どちらの道を行けばよいか教えて', 'r'), gl(160, 138, 'what time to leave も同じ形')], 'which ＋ 名詞 ＋ to ＋ 原形', C.red),
  F('どんな動詞で使うのでしょう。know（知っている）・tell（教える）・ask（たずねる）・decide（決める）・learn（習う）・show（教える）・forget（忘れる）。例：I forgot where to put my key.（かぎをどこに置くか忘れた）。',
    'よく使う動詞', [...row(24, [['know', 'b'], ['tell', 'b'], ['ask', 'b'], ['decide', 'b']], { h: 26 }), ...row(60, [['learn', 'g'], ['show', 'g'], ['forget', 'g']], { h: 26 }), ...row(100, [['I forgot where to put my key.', 'm']], { h: 26, size: 11 })], '知る・教える・決める などと使う', C.main),
  F('❓why は使えないのでしょうか。→ はい。why to という形はありません。理由をたずねる why は、to＋原形と組めないのです。「なぜ行くべきか」は why I should go のように、主語＋動詞で言います。',
    'why だけは使えない', [...row(26, [["I don't know why to go.", 'r']], { h: 26 }), lb(160, 64, '× why は to と組めない', 12, C.red, 'middle', true), ...row(84, [["I don't know why I should go.", 'g']], { h: 26, size: 11 }), lb(160, 122, '○ 主語＋動詞で言う', 12, C.green, 'middle', true)], 'how・what・when・where・which だけ', C.red),
  F('まとめです。①how・what・when・where・which は、to＋原形と組める。②意味は「〜すべきか」。③why だけは組めない。I don\'t know what to do. は「どうしたらいいかわからない」の決まり文句です。',
    'まとめ', [bx(14, 24, 292, 28, '① 五つの疑問詞は to ＋ 原形と組める', C.green, FILL.green, 11), bx(14, 60, 292, 28, '② 意味は「〜すべきか」', C.blue, FILL.blue, 12), bx(14, 96, 292, 28, '③ why だけは組めない', C.red, FILL.red, 12)], '疑問詞 ＋ 不定詞', C.main),
], '疑問詞＋不定詞');

// ───────── eigo_s310 間接疑問 ─────────
FIGS['xf_eigo_s310'] = show([
  F('I don\'t know what to do. と I don\'t know what I should do. は、ほぼ同じ意味です。入試では書きかえが出ます。そのとき疑問文の語順にしてしまう人が多いので、間接疑問（かんせつぎもん）の語順を固めます。',
    '二つの言い方', [...row(30, [["I don't know what to do.", 'b']], { h: 28 }), lb(160, 72, '＝', 16, C.ink, 'middle', true), ...row(88, [["I don't know what I should do.", 'g']], { h: 28, size: 11 }), gl(160, 134, 'what のあとの語順に注意')], 'what のあとの形を決める', C.main),
  F('疑問文が、ほかの文の中に入ると、語順がかわります。Where does he live? は I don\'t know where he lives. になります。❓なぜでしょう。→ 文の中に入った疑問文は、もう「質問」ではなく名詞のかたまりだからです。',
    '文の中に入る疑問文', [...row(26, [['Where does he live?', 'b']], { h: 26 }), ar(160, 56, 160, 76, C.main), ...row(80, [["I don't know where he lives.", 'g']], { h: 26, size: 11 }), gl(160, 126, 'where he lives ＝ 名詞のかたまり')], '質問ではなく、名詞のかたまり', C.green),
  F('三つの変化があります。①疑問詞のあとは「主語＋動詞」の順にもどす。②do・does・did は消して、動詞の形を直す（lives・came）。③文全体が質問でなければ、？を付けない。',
    '三つの変化', [bx(14, 24, 292, 28, '① 疑問詞 ＋ 主語 ＋ 動詞', C.blue, FILL.blue, 12), bx(14, 60, 292, 28, '② do / does / did は消す', C.green, FILL.green, 12), bx(14, 96, 292, 28, '③ 文末は ？ ではなく .', C.purple, FILL.purple, 12)], '間接疑問の三つの変化', C.main),
  F('もう一つ。When did she come? は I don\'t know when she came. did が消えて、come が came に変わります。did の「過去」の意味を、動詞の形が引きついだのです。',
    'did が消えて came に', [...row(24, [['When did she come?', 'b']], { h: 26 }), ar(160, 54, 160, 74, C.main), ...row(78, [["I don't know when she came.", 'g']], { h: 26, size: 11 }), gl(160, 122, 'did が消えて come が came に'), gl(160, 138, '過去の意味は動詞の形が引きつぐ')], 'did は消える', C.green),
  F('よくある誤りです。I don\'t know what does he want. は×。does を使わず、I don\'t know what he wants. とします。この語順のまちがいは、入試でいちばん多い減点です。',
    'よくある誤り', [...row(26, [["I don't know what does he want.", 'r']], { h: 26, size: 11 }), lb(160, 64, '× does を使ってしまう', 12, C.red, 'middle', true), ...row(84, [["I don't know what he wants.", 'g']], { h: 26 }), lb(160, 122, '○ 主語＋動詞の順', 12, C.green, 'middle', true)], '間接疑問に does は使わない', C.red),
  F('❓不定詞との関係は？→ what to do ＝ what I should do。how to use it ＝ how I should use it。不定詞の形は短く言えますが、主語を示せないのが弱点です。',
    '不定詞との関係', [...row(26, [['what to do', 'b'], ['＝', 'n'], ['what I should do', 'g']], { h: 26 }), ...row(66, [['how to use it', 'b'], ['＝', 'n'], ['how I should use it', 'g']], { h: 26, size: 11 }), gl(160, 112, '不定詞は短いが、主語を示せない')], '不定詞 ≒ 疑問詞 ＋ 主語 ＋ should', C.main),
  F('❓いつも不定詞でいいのでしょうか。→ いいえ。動作をする人が主語と同じときだけです。「彼が何をすべきか」を I don\'t know what to do. と書くと「わたしが」になってしまいます。別の人なら間接疑問を使います。',
    '主語がちがうとき', [...row(26, [["I don't know what to do.", 'b']], { h: 26 }), gl(160, 64, '何をするのは → わたし'), ...row(84, [["I don't know what he should do.", 'g']], { h: 26, size: 11 }), gl(160, 122, '何をするのは → 彼（だから間接疑問）')], '人がちがえば間接疑問', C.green),
  F('過去のことも、不定詞では言えません。I don\'t know where he went.（彼がどこへ行ったか知らない）。不定詞には時制がないので、過去は間接疑問で言います。まとめ：疑問詞のあとは主語＋動詞、does は消す、人がちがうなら間接疑問。',
    'まとめ', [...row(24, [["I don't know where he went.", 'g']], { h: 26 }), gl(160, 60, '過去は間接疑問で言う'), bx(14, 76, 292, 24, '疑問詞 ＋ 主語 ＋ 動詞', C.blue, FILL.blue, 12), bx(14, 106, 292, 24, 'do / does / did は消す', C.green, FILL.green, 12)], '間接疑問の語順', C.main),
], '間接疑問の語順');

// ───────── eigo_s312 for 人 と of 人 ─────────
FIGS['xf_eigo_s312'] = show([
  F('It is easy to swim. は「泳ぐことは簡単だ」ですが、だれにとって簡単なのかを言っていません。そこで「わたしには簡単だ」と付け足すには、to の前に for me を入れます。for と of の使い分けまで、「なぜ？」でたどります。',
    'だれにとって？', [...row(30, [['It is easy', 'b'], ['to swim.', 'g']], { h: 28 }), gl(160, 68, '泳ぐのはだれ？ → わからない'), ...row(86, [['It is easy', 'b'], ['for me', 'r'], ['to swim.', 'g']], { h: 28 }), gl(160, 124, '→ わたしにとって簡単')], 'to の前に for 人', C.main),
  F('❓for me は、何を表しているのでしょう。→ 泳ぐ人は me、つまり不定詞の動作をする人です。だから「わたしにとって」より「わたしが泳ぐのは簡単だ」と読むと、すっきりします。',
    'for 人 ＝ 動作をする人', [bx(60, 30, 80, 30, 'for me', C.red, FILL.red, 13), ar(100, 62, 100, 90, C.red), bx(60, 94, 80, 30, 'to swim', C.green, FILL.green, 13), gl(230, 78, '泳ぐのは me'), gl(160, 142, '「わたしが泳ぐのは簡単だ」')], 'for 人 ＝ 意味の上の主語', C.red),
  F('位置は「形容詞のあと・to の前」と決まっています。It is easy for me to swim.（○）。It is for me easy to swim.（×）。形容詞と to をつなぐ場所に、人を入れるイメージです。',
    '置く場所', [...row(30, [['It is easy', 'b'], ['for me', 'r'], ['to swim.', 'g']], { h: 28 }), lb(160, 70, '○', 14, C.green, 'middle', true), ...row(88, [['It is', 'b'], ['for me', 'r'], ['easy to swim.', 'g']], { h: 28 }), lb(160, 128, '× 形容詞の前に入れない', 12, C.red, 'middle', true)], '形容詞のあと、to の前', C.green),
  F('代名詞（だいめいし）は目的格にします。I → for me、he → for him、she → for her、we → for us、they → for them。for のあとは前置詞のあとなので、for I とは書きません。',
    '代名詞の形', [...row(24, [['I → for me', 'r'], ['he → for him', 'r']], { h: 26 }), ...row(60, [['she → for her', 'r'], ['we → for us', 'r']], { h: 26 }), ...row(96, [['they → for them', 'r']], { h: 26 }), gl(160, 138, '前置詞のあとは目的格')], 'for のあとは目的格', C.red),
  F('例です。It is difficult for children to read this book.（子どもがこの本を読むのは難しい）。It is necessary for us to study every day.（わたしたちが毎日勉強することは必要だ）。',
    '例文', [...row(26, [['It is difficult for children to read this book.', 'b']], { h: 26, size: 10.5 }), gl(160, 64, '子どもが読むのは難しい'), ...row(84, [['It is necessary for us to study every day.', 'b']], { h: 26, size: 11 }), gl(160, 122, 'わたしたちが勉強するのは必要だ')], 'It is ... for 人 to ～', C.blue),
  F('❓ところが、親切さを言うときは for ではなく of を使います。It is kind of you to help me.（手伝ってくださるとはご親切に）。なぜでしょう。→ kind は「人の性質」で、for はその人が「その動作をする」関係を作るのに合わないからです。',
    '性質のときは of', [...row(28, [['It is kind', 'b'], ['of you', 'p'], ['to help me.', 'g']], { h: 28 }), gl(160, 68, 'kind ＝ あなたの性質'), lb(160, 100, '× It is kind for you to help me.', 12, C.red, 'middle', true), gl(160, 128, '性質を表す形容詞 → of')], '人の性質 → of', C.purple),
  F('見分け方です。「人 is 形容詞」と言えるかを試します。You are kind. は言えるので of。I am easy. は意味が通らないので for。It is kind of you ＝ You are kind to help me と書きかえもできます。',
    'of か for かの見分け', [...row(26, [['You are kind.', 'g'], ['→ of', 'p']], { h: 26 }), gl(160, 62, '意味が通る'), ...row(80, [['I am easy.', 'r'], ['→ for', 'r']], { h: 26 }), gl(160, 116, '意味が通らない'), gl(160, 136, 'kind of you to ～ ＝ You are kind to ～')], '人＋be＋形容詞 が言えれば of', C.main),
  F('まとめです。of を使うのは kind・nice・careless・clever・wise・foolish・polite。for を使うのは easy・difficult・important・necessary・possible・dangerous・interesting。性質か、状況か、で分けます。',
    'まとめ', [bx(14, 24, 292, 40, 'of ： kind・nice・careless\nclever・wise・foolish・polite', C.purple, FILL.purple, 11), bx(14, 72, 292, 52, 'for ： easy・difficult・important\nnecessary・possible・dangerous・interesting', C.red, FILL.red, 11)], '人の性質なら of、それ以外は for', C.main),
], 'for 人 と of 人');

// ───────── eigo_s315 書きかえパターン ─────────
FIGS['xf_eigo_s315'] = show([
  F('入試では「ほぼ同じ内容の文に書きかえなさい」という問題がよく出ます。不定詞では、使う材料が四つ決まっています。四つの型を並べて、どちらからでも変換できるようにします。',
    '四つの書きかえ', [bx(10, 24, 148, 28, '① To ～ is ... ⇔ It is ... to ～', C.blue, FILL.blue, 9.5), bx(162, 24, 148, 28, '② too ... to ～', C.green, FILL.green, 11), bx(10, 62, 148, 28, '③ ... enough to ～', C.purple, FILL.purple, 11), bx(162, 62, 148, 28, '④ 疑問詞 ＋ to', C.red, FILL.red, 11), gl(160, 112, '書きかえ問題はこの四つ')], '不定詞の書きかえ四つ', C.main),
  F('①形式主語（けいしきしゅご）です。To learn English is important. ＝ It is important to learn English. ❓なぜ It を使うのでしょう。→ 主語の to learn English が長いので、まず It を置いて、本当の中身を後ろへ回すのです。',
    '① To ～ is ... ＝ It is ... to ～', [...row(26, [['To learn English is important.', 'b']], { h: 26, size: 11 }), lb(160, 66, '＝', 16, C.ink, 'middle', true), ...row(80, [['It is important', 'g'], ['to learn English.', 'b']], { h: 26, size: 11 }), gl(160, 124, 'It は仮の主語、本当の主語は to 以下')], '形式主語 It', C.blue),
  F('②too ... to ～。He is too tired to work. ＝ He is so tired that he can\'t work. 「疲れすぎていて働けない」。❓なぜ can\'t なのでしょう。→ too は「〜しすぎて…できない」という否定の意味を持つからです。',
    '② too ... to ～', [...row(26, [['He is too tired to work.', 'g']], { h: 26 }), lb(160, 66, '＝', 16, C.ink, 'middle', true), ...row(80, [["He is so tired that he can't work.", 'g']], { h: 26, size: 11 }), gl(160, 124, 'too ... to ～ には「できない」が入っている')], 'too ... to ～ ＝ so ... that ... can\'t', C.green),
  F('③enough to ～。She is old enough to go alone. ＝ She is so old that she can go alone. 「ひとりで行けるほど大きい」。こちらは can です。too は can\'t、enough は can と、反対になります。',
    '③ enough to ～', [...row(26, [['She is old enough to go alone.', 'p']], { h: 26, size: 11 }), lb(160, 66, '＝', 16, C.ink, 'middle', true), ...row(80, [['She is so old that she can go alone.', 'p']], { h: 26, size: 11 }), gl(160, 124, 'too ⇒ can\'t ／ enough ⇒ can')], 'enough to ～ ＝ so ... that ... can', C.purple),
  F('④疑問詞＋to。I don\'t know how to use it. ＝ I don\'t know how I should use it. 不定詞の部分を、「主語＋should＋原形」に開きます。',
    '④ 疑問詞 ＋ to ＝ 疑問詞 ＋ 主語 ＋ should', [...row(26, [["I don't know how to use it.", 'r']], { h: 26 }), lb(160, 66, '＝', 16, C.ink, 'middle', true), ...row(80, [["I don't know how I should use it.", 'r']], { h: 26, size: 11 }), gl(160, 124, 'to 以下を 主語＋should に開く')], '疑問詞 ＋ to ＝ 疑問詞 ＋ 主語 ＋ should', C.red),
  F('チェック①：時制をそろえます。The soup was too hot to eat. ＝ The soup was so hot that I couldn\'t eat it. もとの文が過去なら、書きかえた文の助動詞も過去（couldn\'t）にします。',
    '時制をそろえる', [...row(26, [['The soup was too hot to eat.', 'g']], { h: 26 }), lb(160, 66, '＝', 16, C.ink, 'middle', true), ...row(80, [["The soup was so hot that I couldn't eat it.", 'g']], { h: 26, size: 10.5 }), gl(160, 124, 'was（過去）→ couldn\'t（過去）'), gl(160, 140, '× can\'t のままにしない')], 'もとの文が過去なら couldn\'t', C.red),
  F('チェック②：目的語の it を補います。This tea is too hot to drink. ＝ This tea is so hot that I can\'t drink it. to drink には目的語がいりませんが、that の文では drink it と書かなければなりません。',
    '目的語の it を補う', [...row(26, [['This tea is too hot to drink.', 'b']], { h: 26 }), lb(160, 66, '＝', 16, C.ink, 'middle', true), ...row(80, [["This tea is so hot that I can't drink it.", 'b']], { h: 26, size: 10.5 }), ar(250, 116, 250, 106, C.red), gl(160, 130, 'it を書き忘れない（赤い矢印の語）', C.red)], 'drink のあとに it', C.blue),
  F('チェック③：for 人 は主語になります。The book is too difficult for me to read. ＝ The book is so difficult that I can\'t read it. for me が I になります。まとめ：時制・it・for 人 の三つを必ず確かめます。',
    'for 人 ＋ to ～ の書きかえ', [...row(24, [['The book is too difficult for me to read.', 'g']], { h: 26, size: 10.5 }), lb(160, 64, '＝', 16, C.ink, 'middle', true), ...row(76, [["The book is so difficult that I can't read it.", 'g']], { h: 26, size: 10 }), bx(30, 112, 80, 24, '時制', C.red, FILL.red, 12), bx(120, 112, 80, 24, 'it', C.red, FILL.red, 12), bx(210, 112, 80, 24, 'for 人', C.red, FILL.red, 12)], '時制・it・for 人 を確かめる', C.red),
], '不定詞の書きかえパターン');

export const XF_CEG_FIGURES: Record<string, DiagramFigure> = FIGS;

/** 図解をつける節（'<単元id>#<節番号>'）。 */
const SEC0 = new Set<string>(Object.keys(FIGS).map((k) => k.replace(/^xf_/, '')));
const SEC_OVERRIDE: Record<string, number> = {};
export const XF_CEG_SECTIONS: Record<string, string> = Object.fromEntries(
  [...SEC0].map((id) => [`${id}#${SEC_OVERRIDE[id] ?? 0}`, `xf_${id}`]),
);
