// 英語（中学共通）formulas-eigo.ts の前半11項目の動く図解スライド。
// キーは項目の label（買い切りの識別キーと同じ）。文を単語の箱に分け、色でやくわりを見せる。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, show, fresh } from './diagram-kit';
import type { Slide } from './diagram-kit';

type K = 'n' | 'b' | 'g' | 'r' | 'p' | 'y';
const KC: Record<K, [string, string]> = {
  n: [C.main, FILL.warm],
  b: [C.blue, FILL.blue],
  g: [C.green, FILL.green],
  r: [C.red, FILL.red],
  p: [C.purple, FILL.purple],
  y: [C.gray, FILL.gray],
};
const units = (s: string) => [...s].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

type Item = [string, K];
type Placed = { els: DiagramElement[]; cx: number[]; x: number[]; w: number[]; y: number; h: number };

/** 単語の箱を一列に置く（中央そろえ）。 */
const w = (y: number, items: Item[], o?: { h?: number; size?: number; gap?: number }): Placed => {
  const h = o?.h ?? 30;
  const size = o?.size ?? 14;
  const gap = o?.gap ?? 6;
  const raw = items.map(([t]) => Math.max(34, units(t) * size + 16));
  const total = raw.reduce((a, b) => a + b, 0) + gap * (items.length - 1);
  const k = Math.min(1, 304 / total);
  const ws = raw.map((r) => r * k);
  const tot = total * k;
  let x = (320 - tot) / 2;
  const els: DiagramElement[] = [];
  const xs: number[] = [];
  const cxs: number[] = [];
  items.forEach(([t, key], i) => {
    els.push(bx(x, y, ws[i], h, t, KC[key][0], KC[key][1], size));
    xs.push(x);
    cxs.push(x + ws[i] / 2);
    x += ws[i] + gap * k;
  });
  return { els, cx: cxs, x: xs, w: ws, y, h };
};
const tag = (p: Placed, i: number, text: string, color: string = C.gray, size = 10) => lb(p.cx[i], p.y + p.h + 12, text, size, color, 'middle', true);
const cap = (text: string, key: K = 'n', y = 190, h = 38) => bx(14, y, 292, h, text, KC[key][0], KC[key][1], 13);
const sl = (note: string, top: DiagramElement[], capText: string, key: K = 'n'): Slide => ({ note, add: fresh(...top, cap(capText, key)) });
const head = (text: string, color: string = C.ink) => lb(160, 20, text, 13, color, 'middle', true);

// ── be動詞と一般動詞の使い分け ──
const be1 = w(70, [['I', 'n'], ['am', 'b'], ['a student.', 'n']]);
const be2 = w(130, [['I', 'n'], ['play', 'g'], ['soccer.', 'n']]);
const beVsGeneral: DiagramFigure = show([
  sl('英語の文には「〜です」の文と「〜する」の文があります。❓この2つは何がちがうのでしょう。まずは2つの文を見くらべます。', [head('2つの文'), ...be1.els, ...be2.els], '「〜です」と「〜する」', 'n'),
  sl('❓「〜です」の文は何をしている？→「わたし ＝ 生徒」のように、2つを「イコール」でむすんでいます。このイコールの役目をするのが be動詞（am・is・are）です。', [head('be動詞は「＝」の役目', C.blue), ...be1.els, ln(be1.cx[0], 108, be1.cx[2], 108, C.blue, false, 2), tag(be1, 1, '＝（イコール）', C.blue)], 'I am a student. ＝ わたしは生徒です', 'b'),
  sl('❓では「〜する」の文は？→こちらは「＝」ではなく、動作や気持ちを言っています。play（する）・go（行く）・like（好き）のような動詞を、一般動詞といいます。', [head('一般動詞は「動作・気持ち」', C.green), ...be2.els, tag(be2, 1, '動作', C.green)], 'I play soccer. ＝ わたしはサッカーをします', 'g'),
  sl('❓なぜ、この2つを同じ文に並べてはいけないの？→英語の文は、動詞が1つだけと決まっているからです。「He is play」は、is と play で動詞が2つになってしまい、まちがいです。', (() => { const p = w(80, [['He', 'n'], ['is', 'r'], ['play', 'r'], ['the piano.', 'n']]); return [head('×  動詞が2つ', C.red), ...p.els, ln(p.x[1], 124, p.x[2] + p.w[2], 124, C.red, false, 2.5), lb(160, 144, '動詞がならんでいる', 11, C.red)]; })(), '×He is play the piano.', 'r'),
  sl('❓どう直す？→動作を言いたいので、be動詞を消して、一般動詞だけにします。「He plays the piano.」で、動詞が1つになりました。', (() => { const p = w(80, [['He', 'n'], ['plays', 'g'], ['the piano.', 'n']]); return [head('○  動詞は1つ', C.green), ...p.els]; })(), '○He plays the piano.', 'g'),
  sl('❓be動詞は、何で形が決まる？→主語（だれが）で決まります。I なら am、you や複数（2人以上・2つ以上）なら are、he・she・it や1人（1つ）なら is です。', (() => { const rows: [string, string, K][] = [['I', 'am', 'n'], ['you・複数', 'are', 'g'], ['he・she・it・1人', 'is', 'b']]; return [head('be動詞は主語で決まる'), ...rows.flatMap(([a, b, k], i) => [bx(30, 44 + i * 42, 130, 32, a, KC[k][0], KC[k][1], 13), ar(162, 60 + i * 42, 190, 60 + i * 42, KC[k][0]), bx(192, 44 + i * 42, 90, 32, b, KC[k][0], KC[k][1], 16)])]; })(), 'I → am　you・複数 → are　he・she・it → is', 'b'),
  sl('❓一般動詞は主語で変わる？→ふだんは変わりません。でも、主語が he・she・it・1人（1つ）で、今のことなら、動詞のおしりに s がつきます。', (() => { const a = w(50, [['I', 'n'], ['play', 'g']], { h: 28 }); const b = w(94, [['You', 'n'], ['play', 'g']], { h: 28 }); const c = w(138, [['He', 'b'], ['plays', 'g']], { h: 28 }); return [...a.els, ...b.els, ...c.els, lb(240, 152, '← s がつく', 12, C.red, 'middle', true)]; })(), '主語が1人（1つ）のとき、動詞に s（または es）', 'g'),
  sl('❓なぜ s がつくの？→「わたし」と「あなた」以外の、1人（1つ）だけのことを言うときの目印だからです。だから、she・it・人の名前・1つの名詞のときにもつきます。', (() => { const p = w(70, [['Ken', 'b'], ['plays', 'g'], ['tennis.', 'n']]); const q = w(120, [['My cat', 'b'], ['likes', 'g'], ['fish.', 'n']]); return [...p.els, ...q.els, lb(160, 30, '1人（1つ）→ s の目印', 12, C.red, 'middle', true)]; })(), 'Ken plays / My cat likes ← どちらも s', 'b'),
  sl('❓つまり、どうやって選ぶ？→まず言いたいことを見ます。「AはBだ・Aは〜な状態だ」ならbe動詞。「Aは〜する」なら一般動詞です。', [head('えらび方'), bx(100, 34, 120, 32, '言いたいことは？', C.ink, FILL.gray, 13), ar(130, 68, 70, 100, C.blue), ar(190, 68, 250, 100, C.green), bx(10, 102, 140, 44, '「〜だ・〜な状態」\nbe動詞', C.blue, FILL.blue, 12), bx(170, 102, 140, 44, '「〜する」\n一般動詞', C.green, FILL.green, 12)], '動詞は1つだけ！', 'n'),
  sl('❓では例題。「彼は毎日サッカーをします」→「する」なので一般動詞。主語 He は1人なので plays。答えは He plays soccer every day. です。', (() => { const p = w(60, [['He', 'b'], ['plays', 'g'], ['soccer', 'n'], ['every day.', 'y']], { size: 13 }); return [...p.els, tag(p, 0, '1人', C.blue), tag(p, 1, '動作＋s', C.green)]; })(), 'He plays soccer every day.', 'g'),
]);

// ── 否定文の作り方 ──
const neg: DiagramFigure = show([
  sl('否定文は「〜ではない」「〜しない」と言う文です。❓どこに not を入れればいいのでしょう。文が be動詞か一般動詞かで、作り方がちがいます。', (() => { const p = w(70, [['I', 'n'], ['am', 'b'], ['a student.', 'n']]); const q = w(130, [['I', 'n'], ['like', 'g'], ['coffee.', 'n']]); return [head('どちらの文？'), ...p.els, ...q.els]; })(), 'be動詞の文 と 一般動詞の文', 'n'),
  sl('❓be動詞の文は？→be動詞のすぐ後ろに not を入れるだけです。「I am a student.」→「I am not a student.」。be動詞は「＝」なので、「＝ではない」となります。', (() => { const p = w(70, [['I', 'n'], ['am', 'b'], ['not', 'r'], ['a student.', 'n']]); return [head('be動詞 ＋ not', C.blue), ...p.els, tag(p, 2, 'ここに入れる', C.red)]; })(), 'I am not a student.', 'b'),
  sl('❓一般動詞の文も、like の後ろに not を入れるの？→いいえ。like の直後には入れられません。かわりに、do という助っ人を、動詞の前に呼びます。', (() => { const p = w(80, [['I', 'n'], ['do not', 'r'], ['like', 'g'], ['coffee.', 'n']]); return [head('助っ人 do ＋ not', C.green), ...p.els, tag(p, 1, '助っ人', C.red)]; })(), 'I do not like coffee.', 'g'),
  sl('❓助っ人 do は、いつも do？→主語が he・she・it・1人（1つ）のときだけ does になります。ほかの I・you・they（複数）は do です。', (() => { const a = w(60, [['I / you / they', 'n'], ['do not', 'g'], ['play', 'y']], { size: 13 }); const b = w(110, [['he / she / it', 'b'], ['does not', 'g'], ['play', 'y']], { size: 13 }); return [...a.els, ...b.els]; })(), '1人（1つ）→ does not　それ以外 → do not', 'g'),
  sl('❓なぜ does のあとは、play の形のままなの？→3人称単数の s は、does がもう引き受けているからです。play にまた s をつけると、s が二重になってしまいます。', (() => { const p = w(50, [['She', 'b'], ['does not', 'g'], ['plays', 'r'], ['tennis.', 'n']], { size: 13 }); const q = w(115, [['She', 'b'], ['does not', 'g'], ['play', 'g'], ['tennis.', 'n']], { size: 13 }); return [...p.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...q.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), '「s を持てるのは1か所だけ」', 'r'),
  sl('❓過去の文は？→be動詞は was not / were not。一般動詞は did not のあとに、動詞の原形（もとの形）を置きます。過去は did がひき受けるので、動詞は原形です。', (() => { const a = w(60, [['I', 'n'], ['was not', 'b'], ['busy.', 'n']]); const b = w(115, [['I', 'n'], ['did not', 'g'], ['play', 'g'], ['tennis.', 'n']]); return [head('過去の否定'), ...a.els, ...b.els]; })(), 'was / were not　　did not ＋ 原形', 'p'),
  sl('❓短くして言ってもいい？→会話では、短くつなげた形（短縮形）をよく使います。do not → don\'t、does not → doesn\'t、is not → isn\'t。意味は同じです。', (() => { const rows: [string, string][] = [['do not', "don't"], ['does not', "doesn't"], ['is not', "isn't"]]; return rows.flatMap(([a, b], i) => [bx(40, 30 + i * 46, 100, 34, a, C.gray, FILL.gray, 14), ar(144, 47 + i * 46, 176, 47 + i * 46, C.main), bx(180, 30 + i * 46, 100, 34, b, C.main, FILL.warm, 14)]); })(), '短くしても、意味は同じ', 'n'),
  sl('❓見分け方をまとめると？→まず、その文に be動詞があるかを見ます。ある → be動詞の後ろに not。ない（一般動詞）→ do / does / did ＋ not ＋ 原形です。', [bx(100, 20, 120, 30, 'be動詞がある？', C.ink, FILL.gray, 13), ar(130, 52, 70, 84, C.blue), ar(190, 52, 250, 84, C.green), lb(70, 62, 'ある', 11, C.blue), lb(250, 62, 'ない', 11, C.green), bx(10, 88, 140, 50, 'be動詞の後ろに\nnot', C.blue, FILL.blue, 12), bx(170, 88, 140, 50, 'do / does / did\n＋ not ＋ 原形', C.green, FILL.green, 12)], 'まず「be動詞があるか」を見る', 'n'),
  sl('❓例題。「私はコーヒーが好きではありません」→like は一般動詞で、主語は I。do not を like の前に置いて、I do not like coffee. です。', (() => { const p = w(60, [['I', 'n'], ['do not', 'r'], ['like', 'g'], ['coffee.', 'n']]); return [...p.els, tag(p, 1, '助っ人', C.red)]; })(), 'I do not like coffee.（I don\'t like coffee.）', 'g'),
  sl('❓ふくざつなまちがいは？→「I do not am」のように、do と be動詞を両方入れるのは、動詞が2つになるのでまちがい。be動詞の文には、do は持ちこみません。', (() => { const p = w(50, [['I', 'n'], ['do not', 'r'], ['am', 'r'], ['a student.', 'n']], { size: 13 }); const q = w(115, [['I', 'n'], ['am not', 'g'], ['a student.', 'n']], { size: 13 }); return [...p.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...q.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), 'be動詞の文に do は入れない', 'r'),
]);

// ── 疑問文の作り方と答え方 ──
const que: DiagramFigure = show([
  sl('疑問文は「〜ですか」「〜しますか」とたずねる文です。❓どうやってたずねる形にするのでしょう。答えは「文の前に出す」です。まず be動詞の文から。', (() => { const p = w(70, [['You', 'n'], ['are', 'b'], ['a student.', 'n']]); return [head('ふつうの文'), ...p.els]; })(), 'You are a student.（あなたは生徒です）', 'n'),
  sl('❓be動詞の文は？→be動詞を、文の先頭に出します。「You are 〜.」→「Are you 〜?」。最後は ? をつけます。', (() => { const p = w(70, [['Are', 'b'], ['you', 'n'], ['a student?', 'n']]); return [head('be動詞を先頭へ', C.blue), ...p.els, ar(p.cx[1] - 20, 62, p.cx[0] + 10, 62, C.blue)]; })(), 'Are you a student?', 'b'),
  sl('❓一般動詞の文も、動詞を先頭に出すの？→いいえ。かわりに、否定文と同じ助っ人 Do を、文の先頭に置きます。「You have a dog.」→「Do you have a dog?」', (() => { const p = w(80, [['Do', 'r'], ['you', 'n'], ['have', 'g'], ['a dog?', 'n']]); return [head('助っ人 Do を先頭へ', C.green), ...p.els, tag(p, 0, '助っ人', C.red)]; })(), 'Do you have a dog?', 'g'),
  sl('❓主語が he・she・it・1人（1つ）のときは？→Does を使います。そして、動詞は原形にもどします。s は Does が引き受けているからです。', (() => { const p = w(50, [['Does', 'r'], ['he', 'b'], ['speak', 'g'], ['English?', 'n']]); const q = w(115, [['Does', 'r'], ['she', 'b'], ['likes', 'r'], ['music?', 'n']]); return [...p.els, lb(14, 65, '○', 18, C.green, 'middle', true), ...q.els, lb(14, 130, '×', 18, C.red, 'middle', true)]; })(), 'Does のあとは原形（×Does she likes）', 'r'),
  sl('❓過去の文は？→be動詞は Was / Were を先頭に。一般動詞は Did を先頭に置いて、動詞は原形です。過去は Did が引き受けます。', (() => { const a = w(60, [['Were', 'b'], ['you', 'n'], ['busy?', 'n']]); const b = w(115, [['Did', 'r'], ['you', 'n'], ['go', 'g'], ['to school?', 'n']]); return [head('過去の疑問文'), ...a.els, ...b.els]; })(), 'Was / Were 〜?　　Did ＋ 主語 ＋ 原形 〜?', 'p'),
  sl('❓答え方は？→たずねられた文の助っ人・be動詞を使って、Yes か No で答えます。「Are you a student?」なら、Yes, I am. と No, I am not. です。', (() => { const q = w(30, [['Are you a student?', 'b']], { size: 13 }); const a = w(90, [['Yes, I am.', 'g']]); const b = w(135, [['No, I am not.', 'r']]); return [...q.els, ar(160, 62, 160, 88, C.gray), ...a.els, ...b.els]; })(), '聞かれたことばで返す', 'g'),
  sl('❓なぜ答えは I になるの？→たずねているのは「あなた（you）」のことです。でも、答えるのは自分なので、主語が I に変わり、be動詞も am にそろいます。', (() => { const a = w(50, [['Are', 'b'], ['you', 'r']], { size: 14 }); const b = w(120, [['Yes,', 'y'], ['I', 'r'], ['am.', 'b']], { size: 14 }); return [...a.els, ar(160, 84, 160, 116, C.red), lb(232, 102, 'you → I', 12, C.red, 'middle', true), ...b.els]; })(), '主語が入れかわると、be動詞もかわる', 'r'),
  sl('❓一般動詞の疑問文への答えは？→動詞（have）ではなく、聞かれた助っ人（do）で返します。「Do you have a dog?」→「Yes, I do. / No, I do not.」', (() => { const q = w(30, [['Do you have a dog?', 'b']], { size: 13 }); const a = w(90, [['Yes, I do.', 'g']]); const b = w(135, [['No, I do not.', 'r']]); return [...q.els, ar(160, 62, 160, 88, C.gray), ...a.els, ...b.els]; })(), '答えも do で返す（have では返さない）', 'g'),
  sl('❓主語が「あなたのお母さん」なら？→Does your mother like music? とたずね、答えは she で返します。your mother を she（女の人ひとり）に言いかえます。', (() => { const q = w(30, [['Does your mother like music?', 'b']], { size: 12 }); const a = w(100, [['Yes, she does.', 'g']]); return [...q.els, ar(160, 62, 160, 98, C.gray), ...a.els, lb(160, 152, 'your mother → she', 12, C.red, 'middle', true)]; })(), '人・ものは he / she / it にいいかえる', 'g'),
  sl('❓まとめると？→be動詞の文は be動詞を先頭へ。一般動詞の文は Do / Does / Did を先頭に置いて、動詞は原形。例題「あなたは犬を飼っていますか」は Do you have a dog? です。', [bx(10, 30, 140, 50, 'be動詞の文\nAre / Is 〜?', C.blue, FILL.blue, 13), bx(170, 30, 140, 50, '一般動詞の文\nDo / Does / Did 〜?', C.green, FILL.green, 13), lb(160, 110, '一般動詞のほうは、動詞は原形', 12, C.green, 'middle', true)], 'Do you have a dog?', 'n'),
]);

// ── 命令文 ──
const cmd: DiagramFigure = show([
  sl('命令文は、目の前の相手に「〜しなさい」と言う文です。❓ふつうの文と何がちがうのでしょう。まず、ふつうの文を見ます。', (() => { const p = w(70, [['You', 'b'], ['read', 'g'], ['this book.', 'n']]); return [head('ふつうの文'), ...p.els]; })(), 'You read this book.', 'n'),
  sl('❓命令文では、主語の You はどうなる？→目の前の相手に言うので、「あなたが」は言わなくても分かります。だから You を取って、動詞から始めます。', (() => { const p = w(70, [['You', 'y'], ['Read', 'g'], ['this book.', 'n']]); return [head('主語を取る'), ...p.els, ln(p.x[0], 88, p.x[0] + p.w[0], 88, C.red, false, 2.5), lb(p.cx[0], 116, 'いらない', 11, C.red, 'middle', true)]; })(), 'Read this book.', 'g'),
  sl('❓動詞の形は？→主語がないので、s も ed もつけない、もとの形（原形）を使います。ふつうの命令文は、原形で始まる文です。', (() => { const p = w(70, [['Open', 'g'], ['the door.', 'n']]); const q = w(120, [['Opens', 'r'], ['the door.', 'n']]); return [...p.els, lb(30, 86, '○', 18, C.green, 'middle', true), ...q.els, lb(30, 136, '×', 18, C.red, 'middle', true)]; })(), '原形で始める', 'g'),
  sl('❓強すぎない言い方は？→命令のままだときつく聞こえるので、please を添えてやわらげます。前に置くときはそのまま、後ろに置くときは , please. とコンマを入れます。', (() => { const p = w(60, [['Please', 'p'], ['open', 'g'], ['the window.', 'n']]); const q = w(115, [['Open', 'g'], ['the window,', 'n'], ['please.', 'p']]); return [...p.els, ...q.els]; })(), 'Please open 〜.　／　Open 〜, please.', 'p'),
  sl('❓「〜してはいけない」は？→動詞の前に Do not（Don\'t）を置きます。「Run here.」→「Do not run here.」。do のあとなので、動詞は原形のままです。', (() => { const p = w(70, [['Do not', 'r'], ['run', 'g'], ['here.', 'n']]); return [head('禁止', C.red), ...p.els]; })(), 'Do not run here.（Don\'t run here.）', 'r'),
  sl('❓「〜しましょう」は？→Let\'s を動詞の前に置きます。Let\'s は「let us」を縮めた形で、let は「〜させる」の意味です。答えは Yes, let\'s. か All right. です。', (() => { const p = w(70, [["Let's", 'b'], ['play', 'g'], ['soccer.', 'n']]); return [head('さそう', C.blue), ...p.els]; })(), "Let's play soccer.　Yes, let's.", 'b'),
  sl('❓なぜ Let\'s のあとは原形？→let は「〜させる」で、後ろの動詞は素の形（原形）が続く決まりだからです。だから Let\'s to go や Let\'s going はまちがいです。', (() => { const p = w(50, [["Let's", 'b'], ['go', 'g'], ['home.', 'n']]); const q = w(115, [["Let's", 'b'], ['to go', 'r'], ['home.', 'n']]); return [...p.els, lb(14, 65, '○', 18, C.green, 'middle', true), ...q.els, lb(14, 130, '×', 18, C.red, 'middle', true)]; })(), "Let's のあとは原形", 'b'),
  sl('❓「〜でありなさい」は？→「You are kind.」から You を取ると、are が残ります。でも命令文は原形なので、are のもとの形 Be になります。「Be kind.」です。', (() => { const p = w(50, [['You', 'y'], ['are', 'y'], ['kind.', 'n']]); const q = w(115, [['Be', 'g'], ['kind', 'n'], ['to old people.', 'n']], { size: 13 }); return [...p.els, ar(160, 84, 160, 112, C.main), ...q.els]; })(), 'are・is・am の原形は Be', 'g'),
  sl('❓まとめ。命令文は4つの型です。原形で始める／Do not ＋ 原形／Let\'s ＋ 原形／Be ＋ 形容詞。どれも、動詞は原形です。', [bx(10, 20, 148, 40, 'Read 〜.（しなさい）', C.green, FILL.green, 12), bx(162, 20, 148, 40, 'Do not run.（するな）', C.red, FILL.red, 12), bx(10, 72, 148, 40, "Let's go.（しよう）", C.blue, FILL.blue, 12), bx(162, 72, 148, 40, 'Be kind.（〜でありなさい）', C.purple, FILL.purple, 12)], '×Are kind　×You be kind', 'n'),
]);

// ── There is / There are ──
const there: DiagramFigure = show([
  sl('「机の上に本があります」のように、あるものが「ある・いる」と伝える言い方があります。❓どんな形でしょう。「There ＋ be動詞 ＋ 名詞 ＋ 場所」の順です。', (() => { const p = w(70, [['There', 'y'], ['is', 'b'], ['a book', 'n'], ['on the desk.', 'g']], { size: 13 }); return [...p.els, tag(p, 3, '場所', C.green), tag(p, 2, 'あるもの', C.main)]; })(), 'There is a book on the desk.', 'n'),
  sl('❓なぜ、この形を使うの？→相手がまだ知らないものを、「ここに〜があるよ」と初めて伝える文だからです。まず There で「あるよ」と言ってから、何があるかを言います。', [head('はじめて知らせるときの形'), ...w(70, [['There is', 'y'], ['a cat', 'n'], ['in the park.', 'g']], { size: 13 }).els, lb(160, 130, '「公園にネコがいるよ」', 12, C.gray)], '相手が知らないものを言う', 'n'),
  sl('❓be動詞は is と are、どちらを使う？→ There ではなく、後ろに来る名詞が1つか、2つ以上かで決めます。1つなら is、2つ以上なら are です。', (() => { const a = w(50, [['There', 'y'], ['is', 'b'], ['a cat', 'n']]); const b = w(115, [['There', 'y'], ['are', 'g'], ['two cats', 'n']]); return [...a.els, tag(a, 2, '1つ', C.blue), ...b.els, tag(b, 2, '2つ以上', C.green)]; })(), '後ろの名詞が1つ → is　2つ以上 → are', 'b'),
  sl('❓なぜ、There が主語ではないの？→There は「そこに」という意味のかざりのような語で、本当の主語は後ろの名詞だからです。あるのは「ネコ」なので、ネコの数に合わせます。', (() => { const p = w(70, [['There', 'y'], ['are', 'g'], ['some students', 'n'], ['in the room.', 'y']], { size: 12 }); return [...p.els, ar(p.cx[2], 116, p.cx[1], 108, C.green), lb(p.cx[2], 134, '本当の主語', 11, C.main, 'middle', true)]; })(), '主語は後ろの名詞', 'g'),
  sl('❓例題「机の上に本が3冊あります」→本は3冊で複数なので are。There are three books on the desk. です。', (() => { const p = w(70, [['There are', 'g'], ['three books', 'n'], ['on the desk.', 'y']], { size: 13 }); return [...p.els, tag(p, 1, '複数', C.green)]; })(), 'There are three books on the desk.', 'g'),
  sl('❓過去のことなら？→be動詞を過去の形にします。1つなら was、2つ以上なら were です。「昨日、公園に犬がいました」なら There was a dog in the park yesterday. です。', (() => { const a = w(50, [['There', 'y'], ['was', 'p'], ['a dog', 'n']]); const b = w(115, [['There', 'y'], ['were', 'p'], ['two dogs', 'n']]); return [head('過去'), ...a.els, ...b.els].slice(0); })(), 'was（1つ）　were（2つ以上）', 'p'),
  sl('❓否定文・疑問文は？→否定は be動詞の後ろに not。疑問文は be動詞を先頭に出して Is there 〜? / Are there 〜? とし、Yes, there is. / No, there are not. のように there で答えます。', (() => { const a = w(40, [['There', 'y'], ['is not', 'r'], ['a cat.', 'n']]); const b = w(90, [['Is', 'b'], ['there', 'y'], ['a cat?', 'n']]); const c = w(140, [['Yes,', 'y'], ['there', 'y'], ['is.', 'g']]); return [...a.els, ...b.els, ...c.els]; })(), '答えも there を使う', 'b'),
  sl('❓よくあるまちがいは？→「There are a cat」のように、名詞は1つなのに are を使うこと。名詞に合わせて is にします。名詞が cats なら are です。', (() => { const a = w(50, [['There', 'y'], ['are', 'r'], ['a cat', 'n']]); const b = w(115, [['There', 'y'], ['is', 'g'], ['a cat', 'n']]); return [...a.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...b.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), 'is / are は、後ろの名詞で決める', 'r'),
  sl('❓「私のかばんが机の上にあります」に There is を使ってよい？→いけません。my や the がついたものは、相手も知っている特定のものです。There is は、知らないものを言う形だったので合いません。', (() => { const a = w(50, [['There', 'y'], ['is', 'r'], ['my bag', 'r'], ['on the desk.', 'y']], { size: 12 }); const b = w(115, [['My bag', 'g'], ['is', 'b'], ['on the desk.', 'y']], { size: 13 }); return [...a.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...b.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), '特定のものは My bag is 〜. と言う', 'r'),
]);

// ── 一般動詞の過去形（規則・不規則） ──
const past: DiagramFigure = show([
  sl('過去の話は、動詞の形を変えて表します。❓どんなときに過去形を使うのでしょう。yesterday（昨日）・last week（先週）・three days ago（3日前）などの目印があるときです。', [head('過去の目印'), bx(20, 40, 130, 32, 'yesterday', C.purple, FILL.purple, 14), bx(170, 40, 130, 32, 'last week', C.purple, FILL.purple, 14), bx(20, 90, 130, 32, 'two days ago', C.purple, FILL.purple, 14), bx(170, 90, 130, 32, 'then', C.purple, FILL.purple, 14)], 'この語があれば、動詞は過去形', 'p'),
  sl('❓過去形の作り方の基本は？→動詞のおしりに ed をつけます。play → played。ed は「もう終わったこと」の目印です。', (() => { const p = w(70, [['play', 'g'], ['＋ ed', 'p'], ['played', 'n']], { size: 15 }); return [...p.els, ar(p.x[0] + p.w[0] + 1, 100, p.x[2] - 1, 100, C.main, true)].slice(0, 3 + 0).concat(p.els.slice(0)); })(), 'play → played', 'g'),
  sl('❓e で終わる語は？→もう e があるので、d だけをつけます。like → liked。like に ed をつけて likeed とすると、e が重なって読みにくいからです。', (() => { const a = w(60, [['like', 'g'], ['＋ d', 'p'], ['liked', 'n']], { size: 15 }); return [...a.els, lb(160, 120, 'likeed ではなく liked', 12, C.red, 'middle', true)]; })(), 'like → liked　use → used', 'g'),
  sl('❓study のように「子音＋y」で終わる語は？→y を i に変えて ed をつけます。study → studied。y のまま ed をつけると、読みにくく、決まりに合わないからです。', (() => { const a = w(60, [['stud', 'g'], ['y', 'r'], ['→ ied', 'p'], ['studied', 'n']], { size: 14 }); return [...a.els, tag(a, 1, 'y を i に', C.red)]; })(), 'study → studied　try → tried', 'g'),
  sl('❓stop のように「短い母音＋子音1つ」で終わる語は？→最後の子音を重ねて ed。stop → stopped。stoped と書くと読み方が変わってしまうので、重ねて読み方を守ります。', (() => { const a = w(60, [['stop', 'g'], ['＋ p ＋ ed', 'p'], ['stopped', 'n']], { size: 14 }); return [...a.els, lb(160, 120, 'p を重ねる', 12, C.red, 'middle', true)]; })(), 'stop → stopped　run → ran は不規則', 'g'),
  sl('❓ed のつけ方をまとめると、動詞のおわりを見て決めます。e で終わる → d だけ。子音＋y → y を i にして ed。短い母音＋子音1つ → 子音を重ねて ed。どれでもなければ、そのまま ed です。', [head('おわりの形を見る'), bx(10, 34, 148, 34, 'e で終わる', C.blue, FILL.blue, 13), bx(162, 34, 148, 34, '子音＋y で終わる', C.green, FILL.green, 13), bx(10, 82, 148, 34, '短い母音＋子音1つ', C.purple, FILL.purple, 13), bx(162, 82, 148, 34, 'それ以外', C.gray, FILL.gray, 13), lb(84, 132, 'd だけ', 12, C.blue, 'middle', true), lb(236, 132, 'y → i ＋ ed', 12, C.green, 'middle', true), lb(84, 152, '子音を重ねて ed', 12, C.purple, 'middle', true), lb(236, 152, 'そのまま ed', 12, C.gray, 'middle', true)], 'like → liked / study → studied / stop → stopped', 'n'),
  sl('❓ed をつけない動詞もあるの？→あります。go → went のように、形そのものが変わる動詞を不規則動詞といい、丸ごと覚えます。see → saw、take → took、buy → bought など。', (() => { const rows: [string, string][] = [['go', 'went'], ['see', 'saw'], ['take', 'took'], ['buy', 'bought']]; return rows.flatMap(([a, b], i) => { const bx0 = 12 + (i % 2) * 158; const y = 40 + Math.floor(i / 2) * 60; return [bx(bx0, y, 56, 36, a, C.gray, FILL.gray, 14), ar(bx0 + 58, y + 18, bx0 + 78, y + 18, C.main), bx(bx0 + 80, y, 66, 36, b, C.main, FILL.warm, 14)]; }); })(), 'ed をつけずに形が変わる', 'n'),
  sl('❓否定文・疑問文では過去形のまま？→いいえ。Did（did not）を使うと、did が「過去」を引き受けるので、動詞は原形にもどします。過去を二重に表さないためです。', (() => { const a = w(50, [['Did', 'r'], ['you', 'n'], ['go', 'g'], ['to school?', 'n']]); const b = w(115, [['Did', 'r'], ['you', 'n'], ['went', 'r'], ['to school?', 'n']]); return [...a.els, lb(14, 65, '○', 18, C.green, 'middle', true), ...b.els, lb(14, 130, '×', 18, C.red, 'middle', true)]; })(), 'did のあとは原形', 'r'),
  sl('❓例題「私は昨日公園へ行きました」→yesterday があるので過去形。go の過去形は went。I went to the park yesterday. です。', (() => { const p = w(70, [['I', 'n'], ['went', 'p'], ['to the park', 'n'], ['yesterday.', 'y']], { size: 13 }); return [...p.els, tag(p, 1, 'go の過去形', C.purple), tag(p, 3, '過去の目印', C.gray)]; })(), 'I went to the park yesterday.', 'p'),
]);

// ── 未来を表す形（will / be going to） ──
const fut: DiagramFigure = show([
  sl('これから起こることを言う形を、未来の文といいます。tomorrow（明日）・next week（来週）などの目印がよく使われます。❓どんな形があるのでしょう。2つあります。', [head('未来の目印'), bx(30, 40, 120, 32, 'tomorrow', C.blue, FILL.blue, 14), bx(170, 40, 120, 32, 'next week', C.blue, FILL.blue, 14), bx(20, 100, 130, 40, 'will ＋ 原形', C.green, FILL.green, 15), bx(170, 100, 130, 40, 'be going to ＋ 原形', C.purple, FILL.purple, 13)], '未来の形は2つ', 'n'),
  sl('❓1つめは will。will を動詞の前に置くだけです。「It rains.」→「It will rain tomorrow.」。動詞は原形のままです。', (() => { const p = w(70, [['It', 'n'], ['will', 'g'], ['rain', 'n'], ['tomorrow.', 'y']]); return [...p.els, tag(p, 1, '助動詞', C.green)]; })(), 'It will rain tomorrow.（明日は雨でしょう）', 'g'),
  sl('❓なぜ will のあとは原形？→will のような助動詞のあとは、動詞は何も足さない素の形（原形）になる決まりだからです。s がつく主語でも、He will go. となります。', (() => { const a = w(50, [['He', 'b'], ['will', 'g'], ['go', 'n']]); const b = w(115, [['He', 'b'], ['wills', 'r'], ['goes', 'r']]); return [...a.els, lb(14, 65, '○', 18, C.green, 'middle', true), ...b.els, lb(14, 130, '×', 18, C.red, 'middle', true)]; })(), '助動詞のあとは原形', 'g'),
  sl('❓2つめは be going to。「be動詞 ＋ going to ＋ 原形」です。be動詞は主語で am・is・are を選びます。「I am going to visit my aunt next week.」', (() => { const p = w(70, [['I', 'n'], ['am', 'b'], ['going to', 'p'], ['visit', 'g'], ['my aunt.', 'n']], { size: 12 }); return [...p.els, tag(p, 1, '主語で決める', C.blue), tag(p, 3, '原形', C.green)]; })(), 'I am going to visit my aunt next week.', 'p'),
  sl('❓では、will と be going to はどうちがう？→will は予想やその場で決めたこと。be going to は前から決めていた予定です。going to の「向かっている」という意味から、予定に向かって進んでいる感じになります。', [bx(10, 30, 148, 50, 'will\n予想・その場の決意', C.green, FILL.green, 12), bx(162, 30, 148, 50, 'be going to\n前から決めた予定', C.purple, FILL.purple, 12), lb(84, 104, '「雨がふるでしょう」', 11, C.green, 'middle'), lb(236, 104, '「来週おばを訪ねる予定」', 11, C.purple, 'middle')], '目的地に向かっている感じ', 'n'),
  sl('❓否定文は？→will の後ろに not（will not、短くして won\'t）。be going to は be動詞の後ろに not を入れます。', (() => { const a = w(50, [['I', 'n'], ['will not', 'r'], ['go.', 'g']]); const b = w(115, [['I', 'n'], ['am not', 'r'], ['going to', 'p'], ['go.', 'g']]); return [...a.els, ...b.els]; })(), 'will not（won\'t）　　be動詞 ＋ not ＋ going to', 'r'),
  sl('❓疑問文は？→will なら Will を先頭へ。be going to なら be動詞を先頭へ出します。Will you 〜? / Are you going to 〜? です。', (() => { const a = w(50, [['Will', 'b'], ['you', 'n'], ['come?', 'g']]); const b = w(115, [['Are', 'b'], ['you', 'n'], ['going to', 'p'], ['come?', 'g']]); return [...a.els, ...b.els]; })(), 'Will you 〜?　　Are you going to 〜?', 'b'),
  sl('❓「彼は来月15才になる」はどう言う？→will のあとは原形なので、is ではなく be を使います。He will be fifteen years old next month. am・is・are の原形が be だからです。', (() => { const p = w(70, [['He', 'n'], ['will', 'g'], ['be', 'b'], ['fifteen years old', 'n']], { size: 12 }); return [...p.els, tag(p, 2, 'is の原形', C.blue)]; })(), 'will is とは言わない', 'g'),
  sl('❓よくあるまちがいは？→「will going to」のように、2つの未来の形を混ぜること。どちらも、それだけで未来を表すので、1つ選びます。I am going to buy a bike. か I will buy a bike. です。', (() => { const a = w(50, [['I', 'n'], ['will', 'r'], ['going to', 'r'], ['buy', 'n']]); const b = w(115, [['I', 'n'], ['am going to', 'g'], ['buy', 'n']]); return [...a.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...b.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), 'どちらか1つ', 'r'),
]);

// ── 進行形（現在進行形・過去進行形） ──
const prog: DiagramFigure = show([
  sl('「いま、〜している最中」を言う形を、進行形といいます。❓どうやって作るのでしょう。be動詞と、動詞に ing をつけた形を組み合わせます。', (() => { const p = w(70, [['They', 'n'], ['are', 'b'], ['cooking', 'g'], ['lunch now.', 'n']], { size: 13 }); return [...p.els, tag(p, 1, 'be動詞', C.blue), tag(p, 2, '動詞＋ing', C.green)]; })(), 'be動詞 ＋ 動詞ing', 'n'),
  sl('❓ing には、どんな意味がある？→「途中」という意味です。cook は「作る」、cooking は「作っている最中」。動作が続いている感じを足す部品です。', (() => { const a = w(60, [['cook', 'g'], ['＋ ing', 'p'], ['cooking', 'n']], { size: 15 }); return [...a.els, lb(160, 120, '「作っている最中」', 12, C.purple, 'middle', true)]; })(), 'ing ＝「途中」', 'p'),
  sl('❓では、なぜ be動詞もいるの？→ing は「途中」を足すだけで、いつのことか、だれのことかは決められません。それを決めるのが be動詞です。主語に合わせて am・is・are を選びます。', [head('be動詞の仕事'), ...w(70, [['I', 'n'], ['am', 'b'], ['playing.', 'g']]).els, ...w(115, [['She', 'n'], ['is', 'b'], ['playing.', 'g']]).els], 'be動詞を書き忘れない（×I playing）', 'b'),
  sl('❓ing のつけ方は？→ふつうはそのまま ing（play → playing）。e で終わる語は e を取って ing（make → making）。run のように短く終わる語は n を重ねて ing（running）です。', (() => { const rows: [string, string][] = [['play', 'playing'], ['make', 'making'], ['run', 'running']]; return rows.flatMap(([a, b], i) => [bx(50, 24 + i * 50, 80, 36, a, C.gray, FILL.gray, 15), ar(134, 42 + i * 50, 166, 42 + i * 50, C.main), bx(170, 24 + i * 50, 100, 36, b, C.main, FILL.warm, 15)]); })(), 'e を取る／子音を重ねる', 'g'),
  sl('❓「〜していた」は？→be動詞を過去の形（was・were）にします。「I was listening to music then.」で、そのときの途中の動作を表します。', (() => { const p = w(70, [['I', 'n'], ['was', 'p'], ['listening', 'g'], ['to music then.', 'n']], { size: 13 }); return [...p.els, tag(p, 1, '過去', C.purple)]; })(), 'was / were ＋ 動詞ing', 'p'),
  sl('❓否定文・疑問文は？→be動詞のルールと同じです。否定は be動詞の後ろに not。疑問は be動詞を先頭に出します。', (() => { const a = w(50, [['I', 'n'], ['am not', 'r'], ['sleeping.', 'g']]); const b = w(115, [['Are', 'b'], ['you', 'n'], ['sleeping?', 'g']]); return [...a.els, ...b.els]; })(), 'ふつうの be動詞の文と同じ', 'b'),
  sl('❓know・like・have（持っている）・want は、なぜ進行形にしないの？→「途中」がない、ずっと同じ状態を表す動詞だからです。「知っている」に、途中や進み具合はありません。', (() => { const a = w(40, [['know', 'y'], ['like', 'y'], ['have', 'y'], ['want', 'y']], { size: 13 }); const b = w(100, [['I', 'n'], ['know', 'g'], ['his name.', 'n']]); return [...a.els, lb(160, 84, '状態を表す動詞', 11, C.gray), ...b.els]; })(), '×I am know his name.', 'r'),
  sl('❓まちがい探し。「I playing tennis now.」は be動詞がぬけています。am を入れて I am playing tennis now. にします。ing の前には必ず be動詞です。', (() => { const a = w(50, [['I', 'n'], ['playing', 'r'], ['tennis now.', 'n']]); const b = w(115, [['I', 'n'], ['am', 'b'], ['playing', 'g'], ['tennis now.', 'n']]); return [...a.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...b.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), 'be動詞 ＋ ing でセット', 'r'),
  sl('❓例題「彼らは今、昼食を作っています」→今の途中の動作で、主語は They なので are。They are cooking lunch now. です。', (() => { const p = w(70, [['They', 'n'], ['are', 'b'], ['cooking', 'g'], ['lunch', 'n'], ['now.', 'y']], { size: 13 }); return [...p.els, tag(p, 4, '今', C.gray)]; })(), 'They are cooking lunch now.', 'g'),
]);

// ── 現在完了（完了・経験・継続） ──
const perfect: DiagramFigure = show([
  sl('過去のことなのに、今とつながっている言い方があります。それが現在完了です。❓ふつうの過去形とは、何がちがうのでしょう。時間の線で見くらべます。', [head('時間の線'), ln(20, 100, 300, 100, C.gray, false, 2), lb(50, 122, '過去', 11, C.gray), lb(270, 122, '今', 11, C.gray), bx(38, 84, 24, 32, '', C.purple, FILL.purple), ar(64, 70, 100, 70, C.purple), lb(170, 66, '過去形：そのときだけ', 12, C.purple)], '過去形は、その時点だけを見る', 'p'),
  sl('❓では、現在完了は？→過去から今まで、線がつながっています。「今どうなっているか」まで含めて言う形です。', [head('時間の線'), ln(20, 100, 300, 100, C.gray, false, 2), lb(50, 122, '過去', 11, C.gray), lb(270, 122, '今', 11, C.gray), ar(46, 84, 262, 84, C.green), lb(160, 66, '現在完了：今までつながる', 12, C.green, 'middle', true)], '過去から今までがつながる', 'g'),
  sl('❓形は？→have（has）＋ 過去分詞です。❓なぜ have を使うの？→「今、〜を持っている」という意味から、「してしまった結果・した経験・続いていること」を今持っている、という感じを表せるからです。', (() => { const p = w(70, [['I', 'n'], ['have', 'g'], ['lived', 'p'], ['in Osaka.', 'n']]); return [...p.els, tag(p, 1, 'have', C.green), tag(p, 2, '過去分詞', C.purple)]; })(), 'have（has）＋ 過去分詞', 'g'),
  sl('❓意味は何種類？→3つです。完了（〜したところ）、経験（〜したことがある）、継続（ずっと〜している）。どの意味かは、いっしょに使う目印の語で分かります。', [bx(8, 24, 96, 90, '完了\njust\nalready\nyet', C.blue, FILL.blue, 12), bx(112, 24, 96, 90, '経験\never\nnever\n〜 times', C.green, FILL.green, 12), bx(216, 24, 96, 90, '継続\nfor\nsince', C.purple, FILL.purple, 12)], '目印の語で意味が分かる', 'n'),
  sl('❓完了の例は？→「彼女はもう宿題を終えました」→She has already finished her homework. 主語が she なので has。already は「もう」、just は「ちょうど」です。', (() => { const p = w(70, [['She', 'n'], ['has', 'g'], ['already', 'b'], ['finished', 'p'], ['her homework.', 'n']], { size: 12 }); return [...p.els, tag(p, 2, '完了の目印', C.blue)]; })(), 'She has already finished her homework.', 'b'),
  sl('❓経験の例は？→「今までに京都へ行ったことがありますか」→Have you ever been to Kyoto? ever は「今までに」。一度もないときは never を使います。', (() => { const p = w(70, [['Have', 'g'], ['you', 'n'], ['ever', 'b'], ['been', 'p'], ['to Kyoto?', 'n']], { size: 12 }); return [...p.els, tag(p, 2, '経験の目印', C.blue)]; })(), 'Have you ever been to Kyoto?', 'g'),
  sl('❓継続の例で、for と since はどうちがう？→for は「期間の長さ」、since は「始まった時点」です。3年間なら for three years。2020年からなら since 2020 です。', [ln(20, 100, 300, 100, C.gray, false, 2), lb(60, 122, '2020', 11, C.gray), lb(270, 122, '今', 11, C.gray), ar(66, 84, 262, 84, C.purple), lb(160, 66, 'for three years（長さ）', 12, C.purple, 'middle', true), lb(60, 148, '↑ since 2020（ここから）', 12, C.green, 'start', true)], 'for ＋ 期間　／　since ＋ 始まった時点', 'p'),
  sl('❓例題「私は3年間ずっと大阪に住んでいます」→続いていることなので継続。I have lived in Osaka for three years. です。', (() => { const p = w(70, [['I', 'n'], ['have', 'g'], ['lived', 'p'], ['in Osaka', 'n'], ['for three years.', 'b']], { size: 12 }); return [...p.els]; })(), 'I have lived in Osaka for three years.', 'g'),
  sl('❓なぜ yesterday や last week とはいっしょに使えないの？→これらは、過去の「その一点」だけを指す語だからです。現在完了は今とつながる形なので、かみ合いません。そのときは過去形にします。', (() => { const a = w(50, [['I', 'n'], ['have finished', 'r'], ['it', 'n'], ['yesterday.', 'r']], { size: 12 }); const b = w(115, [['I', 'n'], ['finished', 'p'], ['it', 'n'], ['yesterday.', 'y']], { size: 12 }); return [...a.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...b.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), '過去の一点を指す語 → 過去形', 'r'),
  sl('❓否定・疑問は？→否定は have の後ろに not（have not）。疑問は Have を先頭に出します。主語が he・she のときは has を使います。', (() => { const a = w(50, [['I', 'n'], ['have not', 'r'], ['seen', 'p'], ['it.', 'n']]); const b = w(115, [['Has', 'b'], ['he', 'n'], ['finished', 'p'], ['it?', 'n']]); return [...a.els, ...b.els]; })(), 'have not ＋ 過去分詞　／　Have ＋ 主語 ＋ 過去分詞?', 'b'),
]);

// ── can / will / must / should ──
const modal: DiagramFigure = show([
  sl('助動詞は、動詞の前に置いて「できる」「〜しなければ」などの気持ちを足す語です。❓動詞だけの文と、助動詞つきの文を見くらべましょう。', (() => { const a = w(50, [['He', 'n'], ['swims', 'g'], ['fast.', 'n']]); const b = w(115, [['He', 'n'], ['can', 'p'], ['swim', 'g'], ['fast.', 'n']]); return [...a.els, ...b.els, tag(b, 1, '助動詞', C.purple)]; })(), '助動詞 ＝ 気持ちを足す語', 'n'),
  sl('❓助動詞のあと、動詞はどうなる？→必ず原形（もとの形）になります。「swims」が「swim」に変わりました。❓なぜ s が消える？→気持ちを決めるのは助動詞の役目で、動詞は何も足さない素の形で十分だからです。', (() => { const a = w(50, [['She', 'b'], ['can', 'p'], ['play', 'g']]); const b = w(115, [['She', 'b'], ['can', 'p'], ['plays', 'r']]); return [...a.els, lb(14, 65, '○', 18, C.green, 'middle', true), ...b.els, lb(14, 130, '×', 18, C.red, 'middle', true)]; })(), '助動詞のあとは原形', 'g'),
  sl('❓どんな助動詞がある？→can（できる）、will（するつもり・でしょう）、must（しなければならない）、should（するべきだ）が基本です。', [bx(10, 30, 148, 50, 'can\nできる', C.blue, FILL.blue, 13), bx(162, 30, 148, 50, 'will\nするつもり・でしょう', C.green, FILL.green, 12), bx(10, 92, 148, 50, 'must\nしなければならない', C.red, FILL.red, 12), bx(162, 92, 148, 50, 'should\nするべきだ', C.purple, FILL.purple, 13)], '意味で助動詞をえらぶ', 'n'),
  sl('❓must と should は何がちがう？→must は「絶対にしなければ」という強い言い方。should は「するほうがいいよ」という助言で、少しやわらかい言い方です。', (() => { const a = w(50, [['You', 'n'], ['must', 'r'], ['study.', 'g']]); const b = w(115, [['You', 'n'], ['should', 'p'], ['study harder.', 'g']]); return [...a.els, tag(a, 1, '強い', C.red), ...b.els, tag(b, 1, 'やわらかい', C.purple)]; })(), 'must ＞ should の強さ', 'p'),
  sl('❓否定文は？→助動詞の後ろに not。cannot（can の否定）、will not、must not、should not になります。not のあとも動詞は原形です。', (() => { const a = w(50, [['I', 'n'], ['cannot', 'r'], ['swim.', 'g']]); const b = w(115, [['You', 'n'], ['should not', 'r'], ['run.', 'g']]); return [...a.els, ...b.els]; })(), '助動詞 ＋ not ＋ 原形', 'r'),
  sl('❓疑問文は？→助動詞を先頭に出します。Can you swim? のように、動詞は原形のままです。答えも、同じ助動詞で返します。Yes, I can. / No, I cannot.', (() => { const q = w(30, [['Can', 'b'], ['you', 'n'], ['swim?', 'g']]); const a = w(90, [['Yes, I can.', 'g']]); const b = w(135, [['No, I cannot.', 'r']]); return [...q.els, ar(160, 62, 160, 88, C.gray), ...a.els, ...b.els]; })(), '助動詞を先頭へ', 'b'),
  sl('❓例題「彼は速く泳ぐことができます」→できる ＝ can、後ろは原形。He can swim fast. です。', (() => { const p = w(70, [['He', 'n'], ['can', 'p'], ['swim', 'g'], ['fast.', 'y']]); return [...p.els, tag(p, 2, '原形', C.green)]; })(), 'He can swim fast.', 'p'),
  sl('❓「もっと熱心に勉強すべき」は？→should を使い、後ろは原形。You should study harder. hard の比べる形が harder で「もっと」を表します。', (() => { const p = w(70, [['You', 'n'], ['should', 'p'], ['study', 'g'], ['harder.', 'b']]); return [...p.els, tag(p, 3, 'もっと', C.blue)]; })(), 'You should study harder.', 'p'),
  sl('❓助動詞を2つ並べてもいい？→いけません。「will can」のようにすると、後ろの動詞が原形でなくなってしまうからです。can のかわりに be able to（できる）を使い、He will be able to swim. とします。', (() => { const a = w(50, [['He', 'n'], ['will', 'r'], ['can', 'r'], ['swim.', 'n']]); const b = w(115, [['He', 'n'], ['will', 'p'], ['be able to', 'g'], ['swim.', 'n']], { size: 13 }); return [...a.els, lb(14, 65, '×', 18, C.red, 'middle', true), ...b.els, lb(14, 130, '○', 18, C.green, 'middle', true)]; })(), '助動詞は1つだけ', 'r'),
  sl('❓最後に。must not と do not have to、どうちがうかは次の項目で。ここでは「must not ＝ してはいけない」（強い禁止）を覚えておきます。You must not open this door.', (() => { const p = w(70, [['You', 'n'], ['must not', 'r'], ['open', 'g'], ['this door.', 'n']]); return [...p.els, tag(p, 1, '禁止', C.red)]; })(), 'must not ＝ してはいけない', 'r'),
]);

// ── have to ／ 依頼・許可の言い方 ──
const haveTo: DiagramFigure = show([
  sl('「〜しなければならない」を言う方法は、must のほかにもう1つ、have to があります。❓どう使うのでしょう。to のあとに動詞の原形を置きます。', (() => { const p = w(70, [['I', 'n'], ['have to', 'r'], ['wash', 'g'], ['the dishes.', 'n']]); return [...p.els, tag(p, 1, 'しなければ', C.red), tag(p, 2, '原形', C.green)]; })(), 'I have to wash the dishes.', 'r'),
  sl('❓主語が he・she・it・1人（1つ）のときは？→has to になります。過去のことは had to です。to のあとは、どれでも原形のままです。', (() => { const a = w(50, [['She', 'b'], ['has to', 'r'], ['study.', 'g']]); const b = w(115, [['I', 'n'], ['had to', 'p'], ['study.', 'g']]); return [...a.els, ...b.els, tag(b, 1, '過去', C.purple)]; })(), 'have to / has to / had to ＋ 原形', 'r'),
  sl('❓なぜ has to studies はまちがい？→3人称単数の s は has がもう引き受けているからです。studies にすると s が二重になります。', (() => { const a = w(50, [['She', 'b'], ['has to', 'r'], ['study', 'g'], ['English.', 'n']]); const b = w(115, [['She', 'b'], ['has to', 'r'], ['studies', 'r'], ['English.', 'n']]); return [...a.els, lb(14, 65, '○', 18, C.green, 'middle', true), ...b.els, lb(14, 130, '×', 18, C.red, 'middle', true)]; })(), 'to のあとは原形', 'r'),
  sl('❓打ち消すとどうなる？→must not は「してはいけない」（禁止）、do not have to は「しなくてよい」（不要）で、意味が正反対になります。', [bx(10, 30, 148, 60, 'must not\nしてはいけない\n（禁止）', C.red, FILL.red, 13), bx(162, 30, 148, 60, 'do not have to\nしなくてよい\n（不要）', C.green, FILL.green, 12), lb(160, 120, '≠', 22, C.gray, 'middle', true)], '意味が正反対！', 'n'),
  sl('❓なぜ正反対になるの？→must not は「しない」ことが必要、つまりするのはだめ。do not have to は「する」ことが必要ではない、つまりしてもしなくてもよい。not のかかる先がちがうのです。', (() => { const a = w(50, [['must', 'y'], ['not', 'r'], ['come', 'g']]); const b = w(115, [['do not', 'r'], ['have to', 'y'], ['come', 'g']]); return [...a.els, tag(a, 2, 'しないことが必要', C.red), ...b.els, tag(b, 1, '必要ではない', C.green)]; })(), 'not がどこにかかるか', 'p'),
  sl('❓ものを頼む・許可を求める言い方は？→許可を求めるなら May I 〜?（〜してもいいですか）。「May I open the window?」答えは Sure. / Of course.（いいですよ）、断るなら I am sorry, but 〜. です。', (() => { const q = w(30, [['May', 'b'], ['I', 'n'], ['open', 'g'], ['the window?', 'n']]); const a = w(90, [['Sure.', 'g'], ['Of course.', 'g']]); const b = w(135, [['I am sorry, but 〜.', 'r']]); return [...q.els, ar(160, 62, 160, 88, C.gray), ...a.els, ...b.els]; })(), 'May I 〜?（許可）', 'b'),
  sl('❓人にお願いするときは？→Could you 〜?（〜してくれますか）を使います。Will you 〜? でもよいですが、Could のほうがていねいです。', (() => { const a = w(50, [['Will', 'b'], ['you', 'n'], ['help me?', 'g']]); const b = w(115, [['Could', 'p'], ['you', 'n'], ['help me?', 'g']]); return [...a.els, ...b.els, tag(b, 0, 'よりていねい', C.purple)]; })(), 'Could you 〜?（依頼）', 'p'),
  sl('❓なぜ Could のほうがていねい？→can・will の少しやわらげた形だからです。ずばりと言わず、少し遠まわしに言うと、おしつけがましく聞こえないのです。', (() => { const a = w(50, [['Can', 'y'], ['→', 'n'], ['Could', 'p']]); const b = w(115, [['Will', 'y'], ['→', 'n'], ['Would', 'p']]); return [...a.els, ...b.els, lb(160, 165, '遠まわしにして、ていねいに', 12, C.purple, 'middle', true)].slice(0); })(), 'ていねいさは「遠まわしさ」', 'p'),
  sl('❓例題「窓を開けてもいいですか」→許可を求めるので May I 〜?。May I open the window? 答えは Sure. か Of course. です。', (() => { const p = w(70, [['May', 'b'], ['I', 'n'], ['open', 'g'], ['the window?', 'n']]); return [...p.els]; })(), 'May I open the window?', 'b'),
]);

export const DIAGRAMS_OLD_EIGOA: Record<string, DiagramFigure> = {
  'be動詞と一般動詞の使い分け': beVsGeneral,
  '否定文の作り方': neg,
  '疑問文の作り方と答え方': que,
  '命令文': cmd,
  'There is / There are': there,
  '一般動詞の過去形（規則・不規則）': past,
  '未来を表す形（will / be going to）': fut,
  '進行形（現在進行形・過去進行形）': prog,
  '現在完了（完了・経験・継続）': perfect,
  'can / will / must / should': modal,
  'have to ／ 依頼・許可の言い方': haveTo,
};
