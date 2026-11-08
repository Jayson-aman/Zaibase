// 月例実力テスト 2026年3月号（高校受験・英語）第2弾の動く図解。キーは問題ID（k11〜k50）。
// 流れは「状況 → 手がかり → 理由 → 当てはめ → 答え → 確かめ → よくあるまちがい」の7枚。
// 座標は 320×240。各スライドは画面をまっさらにして（fresh）図（上）＋下の帯を描き直す。
import type { DiagramElement, Figure } from './figures';
import { C, FILL, bx, lb, ar, show, fresh } from './diagram-kit';

type Col = 'main' | 'blue' | 'green' | 'red' | 'purple' | 'gray';
const FL: Record<Col, string> = { main: FILL.warm, blue: FILL.blue, green: FILL.green, red: FILL.red, purple: FILL.purple, gray: FILL.gray };

/** 文字の横幅の見積もり（日本語は1文字＝size、英数字は約0.58×size） */
const est = (s: string, size: number): number => [...s].reduce((n, ch) => n + (ch.charCodeAt(0) > 255 ? size : size * 0.58), 0);
/** 箱・行に収まるよう、文字を小さくする */
const fit = (text: string, w: number, size: number, pad = 10): number => {
  let s = size;
  while (est(text, s) > w - pad && s > 9) s -= 1;
  return s;
};

const b = (x: number, y: number, w: number, h: number, text: string, col: Col = 'main', size = 12): DiagramElement =>
  bx(x, y, w, h, text, C[col], FL[col], fit(text, w, size));
const a = (x1: number, y1: number, x2: number, y2: number, col: Col = 'main'): DiagramElement => ar(x1, y1, x2, y2, C[col]);
const t = (x: number, y: number, text: string, col: Col | 'ink' = 'ink', size = 12, anchor: 'start' | 'middle' | 'end' = 'middle', bold = false): DiagramElement =>
  lb(x, y, text, fit(text, 300, size, 0), col === 'ink' ? C.ink : C[col], anchor, bold);

type Tile = [string, Col, string];
/** 単語のタイルを1行に並べる（横に収まるよう文字を小さくする）。タイルの下に短い名前をそえる。 */
const tl = (y: number, tiles: Tile[], size = 13, h = 28): DiagramElement[] => {
  const gap = 5;
  let s = size;
  const widths = (): number[] => tiles.map(([w, , l]) => Math.max(40, est(w, s) + 14, est(l, 10) + 6));
  let ws = widths();
  while (ws.reduce((p, q) => p + q, 0) + gap * (tiles.length - 1) > 304 && s > 9) {
    s -= 1;
    ws = widths();
  }
  const total = ws.reduce((p, q) => p + q, 0) + gap * (tiles.length - 1);
  let x = (320 - total) / 2;
  const out: DiagramElement[] = [];
  tiles.forEach(([w, c, l], i) => {
    out.push(b(x, y, ws[i], h, w, c, s));
    if (l) out.push(t(x + ws[i] / 2, y + h + 14, l, c, 10));
    x += ws[i] + gap;
  });
  return out;
};
/** タイルの行（最大2行） */
const rowsOf = (rows: Tile[][]): DiagramElement[] => (rows.length === 1 ? tl(40, rows[0]) : rows.flatMap((r, i) => tl(22 + i * 66, r)));
/** 下の帯：大きな一言 */
const bt = (main: string, col: Col = 'green', size = 14): DiagramElement[] => [b(14, 164, 292, 34, main, col, size)];
/** 確かめ：まちがいの選択肢（赤）と、正しい文（緑） */
const chk = (bad: string[], good: string): DiagramElement[] => [
  ...bad.map((s, i) => t(160, 24 + i * 30, s, 'red', 11)),
  t(160, 24 + bad.length * 30 + 16, good, 'green', 13, 'middle', true),
];
const sl = (note: string, ...els: (DiagramElement | DiagramElement[])[]) => ({ note, add: fresh(...els.flat()) });

type F = {
  tiles: Tile[][]; cue: string; cuelab: string; rule: string[]; fill: Tile[][]; band: string;
  bads: string[]; good: string; mb: string; mg: string; mode: string; notes: string[];
};
const make = (f: F, caption: string) =>
  show([
    sl(f.notes[0], rowsOf(f.tiles), bt(f.mode, 'gray')),
    sl(f.notes[1], b(30, 24, 260, 40, f.cue, 'blue', 15), t(160, 96, f.cuelab, 'gray', 12), bt('ここが手がかり', 'blue')),
    sl(f.notes[2], f.rule.map((r, i) => b(14, 18 + i * 38, 292, 30, r, (['blue', 'green', 'red'] as Col[])[i], 13)), bt('ルールをたしかめる', 'gray')),
    sl(f.notes[3], rowsOf(f.fill), bt('ルールを当てはめる', 'purple')),
    sl(f.notes[4], rowsOf(f.fill), bt(f.band, 'green')),
    sl(f.notes[5], chk(f.bads, f.good), bt('ほかの3つは当てはまらない', 'green')),
    sl(f.notes[6], b(14, 30, 134, 36, f.mb, 'red', 13), a(150, 48, 170, 48, 'main'), b(172, 30, 134, 36, f.mg, 'green', 13), bt('気をつけるのはここ', 'red')),
  ], caption);

const k11 = make(
  { tiles: [[["This window", "blue", "主語"],["＿＿＿＿", "red", "受け身"],["by Tom", "green", "した人"]]], cue: "yesterday ＝ 過去の話", cuelab: "be動詞も過去形にする", rule: ["受け身 ＝ be動詞 ＋ 過去分詞", "過去の話 → was / were", "break − broke − broken"], fill: [[["This window", "blue", "主語"],["was broken", "red", "答え"],["by Tom", "green", "した人"]]], band: "② was broken", bads: ["① broke（「割られた」にならない）", "③ is broken（現在形）", "④ has broke（形がまちがい）"], good: "② was broken  ○", mb: "was broke", mg: "was broken", mode: "空所に入る形を選ぼう", notes: ["【状況】「この窓はきのうトムに割られました」という文の、空所に入る動詞の形を選びます。", "【手がかり】by Tom（トムによって）とあるので、割った人はトム、窓は「割られた」側です。", "【理由】窓は自分で割ることはできず、「割られた」側です。主語が動作を「される」側のときは、受け身「be動詞 ＋ 過去分詞」を使います。さらに yesterday（きのう）は過去を表すので、be動詞も過去形にします。", "【当てはめ】yesterday があるので過去の話です。主語 This window は1つなので was を使います。break − broke − broken と変わります。過去分詞は broken なので、was broken です。", "【答え】② was broken（This window was broken by Tom yesterday.）", "【確かめ】「この窓はきのうトムに割られました」と自然な意味になります。① broke は過去形だけで「割られた」になりません。③ is broken は現在形で yesterday と合いません。④ has broke は過去分詞が broke になっていて、形がまちがっています。", "【よくあるまちがい】過去分詞を broke（過去形）と書いてしまうことです。受け身では broken を使います。また yesterday を見落として is を選ぶ人もいます。"] },
  "yesterday ＝ 過去の話",
);

const k12 = make(
  { tiles: [[["I have", "blue", "主語＋have"],["＿＿＿＿", "red", "過去分詞"],["to Kyoto", "green", "京都へ"],["twice", "purple", "2回"]]], cue: "twice ＝ 2回", cuelab: "いままでの経験を言う文", rule: ["経験 ＝ have ＋ 過去分詞", "have been to ＝ 行ったことがある", "be − was・were − been"], fill: [[["I have", "blue", "主語＋have"],["been", "red", "答え"],["to Kyoto", "green", "京都へ"],["twice", "purple", "2回"]]], band: "② been", bads: ["① be（原形は have のあとに置けない）", "③ went（過去形）", "④ going（ing 形）"], good: "② been  ○", mb: "have went", mg: "have been", mode: "空所に入る形を選ぼう", notes: ["【状況】「私は京都に2回行ったことがあります」という文の、空所に入る語を選びます。", "【手がかり】twice（2回）があるので、いままでの経験を言う文です。", "【理由】「いままでに〜したことがある」という経験は、現在完了（have ＋ 過去分詞）で表します。twice（2回）のような回数のことばが手がかりです。「行ったことがある」は have been to 〜 という決まった形で、be動詞の過去分詞 been を使います。", "【当てはめ】主語は I なので have ＋ 過去分詞です。空所の前に have があります。be − was・were − been と変わります。have been to 〜 で「〜に行ったことがある」になります。", "【答え】② been（I have been to Kyoto twice.）", "【確かめ】「私は京都に2回行ったことがあります」と自然です。① be は原形で、have のあとには置けません。③ went は過去形で、have のあとに続きません。④ going は ing 形で、have とは組み合わせません。", "【よくあるまちがい】went（過去形）を選んでしまうことです。have のあとには過去分詞が来ます。have been to ＝ 行ったことがある、とセットで覚えましょう。"] },
  "twice ＝ 2回",
);

const k13 = make(
  { tiles: [[["I want", "blue", "したい"],["＿＿＿＿", "red", "不定詞"],["a doctor", "green", "医者"]]], cue: "want のあとに動詞を置く", cuelab: "そのままでは置けない → to をはさむ", rule: ["want to ＋ 動詞の原形 ＝ 〜したい", "to のあとはいつも原形", "be 動詞なら be"], fill: [[["I want", "blue", "したい"],["to be", "red", "答え"],["a doctor", "green", "医者"]]], band: "② to be", bads: ["① be（to がない）", "③ being（ing 形は置けない）", "④ am（動詞が2つになる）"], good: "② to be  ○", mb: "I want be", mg: "I want to be", mode: "空所に入る形を選ぼう", notes: ["【状況】「私は将来、医者になりたいです」という文の、空所に入る形を選びます。", "【手がかり】want のあとに動詞を置くときは、そのまま置かずに to をはさみます。", "【理由】want は「ほしい」という意味ですが、「〜したい」と言うときは want to ＋ 動詞の原形の形にします。この「to ＋ 動詞の原形」を不定詞といい、ここでは「〜すること」という名詞のはたらきをして、want の目的語になっています。", "【当てはめ】to のあとの動詞は、主語や時に関係なく原形（もとの形）です。be 動詞なら be です。I want to be a doctor. となり、「医者になりたい」の意味が出ます。", "【答え】② to be（I want to be a doctor in the future.）", "【確かめ】「将来、医者になりたい」と自然です。① be は to がなく、want のあとに動詞が直接続いてしまいます。③ being は ing 形で、want のあとに置けません。④ am は主語がすでにあるので動詞が2つ並んでしまいます。", "【よくあるまちがい】want be のように to を忘れることです。want ＋ to ＋ 動詞の原形、と1つのかたまりで覚えましょう。"] },
  "want のあとに動詞を置く",
);

const k14 = make(
  { tiles: [[["My bag", "blue", "主語"],["is", "gray", "be動詞"],["＿＿＿＿", "red", "比較級"],["than yours", "green", "〜より"]]], cue: "than ＝ 〜よりも", cuelab: "2つをくらべる文", rule: ["短い語 ＋ er ＝ 比較級", "y で終わる語 → y を i に", "長い語は more ＋ 原級"], fill: [[["My bag", "blue", "主語"],["is", "gray", "be動詞"],["heavier", "red", "答え"],["than yours", "green", "〜より"]]], band: "② heavier", bads: ["① heavy（原級）", "③ heaviest（最上級）", "④ more heavy（短い語に more は不要）"], good: "② heavier  ○", mb: "heavyer", mg: "heavier", mode: "空所に入る形を選ぼう", notes: ["【状況】「私のかばんはあなたのより重いです」という文の、空所に入る形を選びます。", "【手がかり】than yours（あなたのよりも）があるので、2つをくらべる文です。", "【理由】2つのものをくらべて「〜より…だ」と言うときは、形容詞に er をつけた比較級を使い、あとに than を置きます。heavy のように y で終わる語は、y を i に変えて er をつけます。", "【当てはめ】heavy は短い語なので、前に more を置かず、語の終わりに er をつけます。y で終わる語は y を i に変えて er をつけます。heavy → heavier です。", "【答え】② heavier（My bag is heavier than yours.）", "【確かめ】「私のかばんはあなたのより重い」と自然です。① heavy は原級で、than とは組み合わせません。③ heaviest は最上級で、the が必要です。④ more heavy は、短い語には more を使わないので不自然です。", "【よくあるまちがい】heavyer とつづってしまうことです。y で終わる語は y を i に変えます（happy → happier、easy → easier も同じ）。"] },
  "than ＝ 〜よりも",
);

const k15 = make(
  { tiles: [[["You", "blue", "主語"],["＿＿＿＿", "red", "助動詞"],["run", "green", "原形"],["in the library", "gray", "図書館で"]]], cue: "Please be quiet.", cuelab: "静かにしてください → 走るのはだめ", rule: ["must ＝ しなければならない", "must not ＝ してはいけない", "助動詞のあとは動詞の原形"], fill: [[["You", "blue", "主語"],["must not", "red", "答え"],["run", "green", "原形"],["in the library", "gray", "図書館で"]]], band: "② must not", bads: ["① must（走らなければならない）", "③ have to（走らなければならない）", "④ may（走ってもよい）"], good: "② must not  ○", mb: "have to 〜 ＝ 禁止", mg: "must not ＝ 禁止", mode: "空所に入る形を選ぼう", notes: ["【状況】「図書館で走ってはいけません。静かにしてください」という文の、空所に入る語（句）を選びます。", "【手がかり】Please be quiet.（静かにしてください）とあるので、走ることはよくないことです。", "【理由】助動詞 must は「〜しなければならない」、must not は「〜してはいけない」（禁止）という意味です。あとの文が「静かにしてください」なので、走ることを禁じる must not が合います。助動詞のあとの動詞は、いつも原形です。", "【当てはめ】must ＝ しなければならない、must not ＝ してはいけない、have to ＝ しなければならない、may ＝ してもよい。「走ってはいけない」にあたるのは must not です。run は原形のままで続きます。", "【答え】② must not（You must not run in the library.）", "【確かめ】「図書館で走ってはいけない。静かに」と筋が通ります。① must と③ have to は「走らなければならない」になり、あとの文と合いません。④ may は「走ってもよい」で、これも合いません。", "【よくあるまちがい】don't have to（する必要はない）と must not（してはいけない）を同じ意味だと思うことです。禁止は must not です。"] },
  "Please be quiet.",
);

const k16 = make(
  { tiles: [[["I stayed home", "blue", "結果"],["＿＿＿＿", "red", "つなぐ語"],["it was raining", "green", "理由"]]], cue: "なぜ家にいた？ → 雨だから", cuelab: "理由をつなぐ言葉が入る", rule: ["because ＝ なので（理由）", "but ＝ しかし（反対）", "or ＝ または（選ぶ）"], fill: [[["I stayed home", "blue", "結果"],["because", "red", "答え"],["it was raining", "green", "理由"]]], band: "① because", bads: ["② but（しかし）", "③ or（または）", "④ to（文をつなげない）"], good: "① because  ○", mb: "理由と結果を逆に", mg: "because ＋ 理由", mode: "空所に入る形を選ぼう", notes: ["【状況】「雨が降っていたので、私は家にいました」という文の、空所に入る接続詞（文をつなぐ言葉）を選びます。", "【手がかり】「家にいた」（結果）と「雨が降っていた」（理由）の2つがつながっています。", "【理由】because は「〜なので」と理由を表す接続詞で、あとに「主語＋動詞」を続けます。「家にいた」ことの理由が「雨が降っていた」ことなので、2つの文を because でつなげば、原因と結果の関係がはっきりします。", "【当てはめ】because ＝ なので、but ＝ しかし、or ＝ または、to は文をつなぎません。I stayed home because it was raining. と読むと、理由がはっきりします。", "【答え】① because（I stayed home because it was raining.）", "【確かめ】「雨が降っていたので、家にいた」と自然です。② but は「しかし」で、前後が反対の関係のときに使います。③ or は「または」で、選ぶ文に使います。④ to は2つの文をつなぐ接続詞ではありません。", "【よくあるまちがい】理由か結果かを取りちがえることです。because のあとには「理由」が来ます。so（だから）のあとには「結果」が来るので、位置をまちがえないようにします。"] },
  "なぜ家にいた？ → 雨だから",
);

const k17 = make(
  { tiles: [[["Would you like", "blue", "すすめる"],["some more tea?", "green", "お茶をもう少し"]]], cue: "A：お茶はいかがですか？", cuelab: "B はどう答える？", rule: ["すすめる：Would you like 〜?", "ほしい：Yes, please.", "いらない：No, thank you."], fill: [[["Would you like", "blue", "すすめる"],["Yes, please.", "red", "答え"]]], band: "① Yes, please.", bads: ["② You're welcome.（お礼への返事）", "③ I'm sorry.（あやまる）", "④ Nice to meet you.（初対面）"], good: "① Yes, please.  ○", mb: "Yes, I do.", mg: "Yes, please.", mode: "空所に入る形を選ぼう", notes: ["【状況】「お茶をもう少しいかがですか」とたずねられたときの、自然な答えを選びます。", "【手がかり】Would you like 〜? は「〜はいかがですか」とすすめる言い方です。", "【理由】Would you like 〜? は、ものをすすめるていねいな言い方です。「ほしい」ときは Yes, please.（はい、お願いします）、「いらない」ときは No, thank you.（いいえ、けっこうです）と答えます。会話の問題では、質問のねらい（すすめている）に合う答えを選びます。", "【当てはめ】すすめられたら、ほしいかほしくないかを答えます。Yes, please. はすすめを受ける返事です。You're welcome. はお礼への返事、I'm sorry. はあやまる言葉、Nice to meet you. は初対面のあいさつです。", "【答え】① Yes, please.", "【確かめ】「お茶をもう少しいかがですか」「はい、お願いします」は自然な会話です。② は「どういたしまして」でお礼を言われたときの返事、③ はあやまるとき、④ は初めて会ったときの言葉なので、この場面には合いません。", "【よくあるまちがい】Yes, I do. のように Do you ...? への答え方を使ってしまうことです。Would you like 〜? には Yes, please. か No, thank you. で答えます。"] },
  "A：お茶はいかがですか？",
);

const k18 = make(
  { tiles: [[["The boy", "blue", "説明される人"],["＿＿＿＿", "red", "分詞"]],[["soccer in the park", "green", "説明のつづき"],["is", "gray", "動詞"]]], cue: "文の動詞は is だけ", cuelab: "空所は「少年」を説明する部分", rule: ["〜している ＝ ing 形（現在分詞）", "名詞のうしろに置いて説明する", "動詞を2つ並べない"], fill: [[["The boy", "blue", "説明される人"],["playing", "red", "答え"]],[["soccer in the park", "green", "説明のつづき"],["is", "gray", "動詞"]]], band: "② playing", bads: ["① plays（動詞が2つになる）", "③ played（意味が合わない）", "④ to play（意味が合わない）"], good: "② playing  ○", mb: "boy plays ... is", mg: "boy playing ... is", mode: "空所に入る形を選ぼう", notes: ["【状況】「公園でサッカーをしている少年は私の弟です」という文の、空所に入る形を選びます。", "【手がかり】is が文の動詞です。動詞を2つ並べることはできないので、空所は動詞ではありません。", "【理由】この文の動詞は is で、すでに1つあります。空所は The boy を説明する部分なので、動詞ではなく分詞を使います。「〜している」という意味で名詞を説明するときは、現在分詞（ing 形）を名詞のうしろに置きます。", "【当てはめ】「サッカーをしている」と少年を説明したいので、ing 形（現在分詞）を使います。The boy playing soccer in the park と、playing ... park のかたまりが少年のうしろから説明しています。", "【答え】② playing（The boy playing soccer in the park is my brother.）", "【確かめ】「公園でサッカーをしている少年は私の弟です」と自然です。① plays と③ played は動詞が2つになってしまいます。④ to play は「サッカーをするための少年」のようになり意味が合いません。", "【よくあるまちがい】plays を入れて、動詞が2つ並んでしまうことです。「〜している（名詞）」は、名詞のうしろに ing 形を置きます。"] },
  "文の動詞は is だけ",
);

const k19 = make(
  { tiles: [[["This", "blue", "主語1"],["temple", "blue", "主語2"],["was", "red", "be動詞"]],[["built", "red", "過去分詞"],["about 300 years ago", "green", "時"]]], cue: "「建てられた」＝ 受け身", cuelab: "temple は「建てられる」側", rule: ["受け身 ＝ be動詞 ＋ 過去分詞", "過去の話 → was", "build − built − built"], fill: [[["This temple", "blue", "主語"],["was built", "red", "受け身"]],[["about 300 years ago", "green", "時"]]], band: "This temple was built ...", bads: ["× This was temple built（語順がちがう）", "× This temple built was（was が先）", "× Temple This was built（主語の順）"], good: "This temple was built about 300 years ago.", mb: "temple built", mg: "temple was built", mode: "語順を考えよう", notes: ["【状況】5つの語（句）を並べかえて、「この寺は約300年前に建てられました」という英文を作ります。", "【手がかり】「この寺は」は This temple です。文の最初は大文字の This で始まります。", "【理由】「建てられた」は、寺が「建てられる」側なので受け身（be動詞 ＋ 過去分詞）です。「約300年前」は過去を表すので be動詞は過去形 was にします。文は「主語 ＋ be動詞 ＋ 過去分詞 ＋ 時を表す語句」の順に並びます。", "【当てはめ】「建てられました」は was built（was ＋ build の過去分詞 built）です。about 300 years ago（約300年前）は、文の終わりに置きます。", "【答え】This temple was built about 300 years ago.", "【確かめ】5つの語（句）をすべて使っています。「この寺は約300年前に建てられました」と読めます。was と built が続けて並び、受け身の形になっています。", "【よくあるまちがい】was と built の順を逆にしたり、be動詞を忘れて This temple built ... と書いてしまうことです。受け身は be動詞が先、過去分詞があとです。"] },
  "「建てられた」＝ 受け身",
);

const k20 = make(
  { tiles: [[["I", "blue", "私は"],["can", "red", "できる"],["swim", "green", "泳ぐ"],["well", "purple", "上手に"]]], cue: "できる ＝ can", cuelab: "動詞の前に置く", rule: ["can ＋ 動詞の原形", "主語が何でも swim のまま", "「上手に」は副詞 well"], fill: [[["I", "blue", "私は"],["can", "red", "できる"],["swim", "green", "泳ぐ"],["well", "purple", "上手に"]]], band: "I can swim well.", bads: ["× I can swims well.（原形にする）", "× I can swim good.（good は形容詞）", "× I swim can well.（語順がちがう）"], good: "I can swim well.  ○", mb: "can swims", mg: "can swim", mode: "英語にしよう", notes: ["【状況】「私は上手に泳ぐことができます」を、can を使った英文にします。", "【手がかり】主語は I、できることを表すので can を置きます。", "【理由】「〜することができる」は、助動詞 can を動詞の前に置いて表します。助動詞のあとの動詞は、主語が何であっても原形です。「上手に」は動詞を説明するので、副詞 well を文の終わりに置きます。", "【当てはめ】「泳ぐ」は swim。can のあとなので原形のままです（swims や swam にしない）。「上手に」は副詞の well を、文の終わりに置きます。good は形容詞なのでここでは使いません。", "【答え】I can swim well.", "【確かめ】I（私は）＋ can（できる）＋ swim（泳ぐ）＋ well（上手に）で、日本文と1つずつ対応しています。can のあとの swim は原形になっています。", "【ほかの言い方】I can swim very well. などのほかの言い方でも、意味が通って文法が正しければ正解です。ここでは can を使う指定なので I can swim well. を模範解答にしています。【よくあるまちがい】I can swim good. のように good を使ってしまうことです。動詞を説明するのは副詞の well です。"] },
  "できる ＝ can",
);

const k21 = make(
  { tiles: [[["＿＿＿", "red", "be動詞"],["this room", "blue", "主語"],["cleaned", "green", "過去分詞"],["every day?", "gray", "毎日"]]], cue: "B：Yes, it is.", cuelab: "答えの be動詞は is", rule: ["受け身 ＝ be動詞 ＋ 過去分詞", "疑問文 ＝ be動詞を前に出す", "答えも be動詞で返す"], fill: [[["Is", "red", "答え"],["this room", "blue", "主語"],["cleaned", "green", "過去分詞"],["every day?", "gray", "毎日"]]], band: "② Is", bads: ["① Does（一般動詞用）", "③ Was（過去形）", "④ Are（複数の主語用）"], good: "② Is this room cleaned ...?  ○", mb: "Does ... cleaned", mg: "Is ... cleaned", mode: "空所に入る形を選ぼう", notes: ["【状況】受け身の疑問文の、空所に入るはじめの語を選びます。", "【手がかり】this room cleaned every day は「この部屋は毎日掃除される」の受け身です。", "【理由】受け身の疑問文は、be動詞を主語の前に出して「Be動詞 ＋ 主語 ＋ 過去分詞 〜?」の形にします。答えの文 Yes, it is. が be動詞 is を使っているので、質問も is でたずねたことが分かります。cleaned は過去分詞で、「掃除される」という受け身の動詞です。", "【当てはめ】Yes, it is. の is は、質問の be動詞と同じです。主語 this room は1つで、every day は現在の習慣です。be動詞を前に出して、Is this room cleaned every day? となります。", "【答え】② Is（Is this room cleaned every day?）", "【確かめ】「この部屋は毎日掃除されますか」「はい、されます」と会話がつながります。① Does は一般動詞の疑問文用で、cleaned（過去分詞）とは合いません。③ Was は過去形で、every day や答えの is と合いません。④ Are は複数の主語用です。", "【よくあるまちがい】Does this room cleaned ...? のように、do を使ってしまうことです。受け身の疑問文では、be動詞を前に出します。"] },
  "B：Yes, it is.",
);

const k22 = make(
  { tiles: [[["How many times", "purple", "何回"],["have you", "blue", "疑問の語順"]],[["＿＿＿＿", "red", "過去分詞"],["Okinawa?", "green", "沖縄"]]], cue: "How many times ＝ 何回", cuelab: "いままでの経験をたずねる", rule: ["経験 ＝ have ＋ 過去分詞", "疑問文 ＝ have を前に出す", "visit の過去分詞は visited"], fill: [[["How many times", "purple", "何回"],["have you", "blue", "疑問の語順"]],[["visited", "red", "答え"],["Okinawa?", "green", "沖縄"]]], band: "② visited", bads: ["① visit（原形）", "③ visiting（ing 形）", "④ to visit（不定詞）"], good: "② visited  ○", mb: "have you visit", mg: "have you visited", mode: "空所に入る形を選ぼう", notes: ["【状況】「あなたは沖縄を何回訪れたことがありますか」という文の、空所に入る動詞の形を選びます。", "【手がかり】How many times have you ＿＿ Okinawa? と、have you の語順になっています。", "【理由】How many times 〜? は、回数をたずねる言い方です。「いままでに何回〜したことがあるか」は経験の現在完了（have ＋ 過去分詞）で聞きます。疑問文では、have を主語の前に出して、動詞は過去分詞のままです。", "【当てはめ】have ＋ 主語 ＋ 過去分詞 の形なので、空所は過去分詞です。visit は規則動詞なので、過去分詞は visited（ed をつける）です。", "【答え】② visited（How many times have you visited Okinawa?）", "【確かめ】「沖縄を何回訪れたことがありますか」と自然です。① visit は原形で have のあとには置けません。③ visiting は ing 形で、完了形には使えません。④ to visit は不定詞で、have のあとには続きません。", "【よくあるまちがい】疑問文だからといって、have you のあとを原形にしてしまうことです。疑問文でも、動詞は過去分詞のままです。"] },
  "How many times ＝ 何回",
);

const k23 = make(
  { tiles: [[["I haven't finished", "blue", "終えていない"],["my homework", "green", "宿題を"],["＿＿＿＿", "red", "まだ"]]], cue: "haven't ＝ 否定文", cuelab: "文の終わりの空所", rule: ["yet ＝ 否定文・疑問文の終わり", "already ＝ 肯定文（have のあと）", "just ＝ 肯定文（have のあと）"], fill: [[["I haven't finished", "blue", "終えていない"],["my homework", "green", "宿題を"],["yet", "red", "答え"]]], band: "② yet", bads: ["① already（否定文の終わりには置かない）", "③ ago（過去形の文で使う）", "④ just（have のあとに置く）"], good: "② yet  ○", mb: "haven't ... already", mg: "haven't ... yet", mode: "空所に入る形を選ぼう", notes: ["【状況】「私はまだ宿題を終えていません」という文の、空所に入る語を選びます。", "【手がかり】haven't finished の否定文で、文の終わりに空所があります。", "【理由】現在完了の完了用法では、yet・already・just をよく使います。yet は否定文では「まだ（〜ない）」、疑問文では「もう（〜か）」という意味で、文の終わりに置きます。already は「もう」で肯定文、just は「ちょうど」で肯定文に使います。", "【当てはめ】already ＝ 肯定文（have のあと）、just ＝ 肯定文（have のあと）、yet ＝ 否定文・疑問文の終わり。否定文で文の終わりに置くのは yet です。「まだ〜ない」の意味になります。", "【答え】② yet（I haven't finished my homework yet.）", "【確かめ】「まだ宿題を終えていない」と自然です。① already は否定文の終わりには使いません。③ ago は「〜前に」で過去形の文に使います。④ just は have のあとに置く語で、否定文の終わりには置きません。", "【よくあるまちがい】already と yet を混ぜることです。「まだ〜ない」は yet、「もう〜した」は already と日本語で覚えるだけでなく、置く場所もセットで覚えます。"] },
  "haven't ＝ 否定文",
);

const k24 = make(
  { tiles: [[["I have", "blue", "持っている"],["a bag", "green", "先行詞"],["＿＿＿", "red", "つなぐ語"],["has many pockets", "purple", "説明"]]], cue: "a bag ＝ 物", cuelab: "人ではないので who は使えない", rule: ["人 → who", "物 → which", "あとが動詞 ＝ 主格"], fill: [[["I have", "blue", "持っている"],["a bag", "green", "先行詞"],["which", "red", "答え"],["has many pockets", "purple", "説明"]]], band: "② which", bads: ["① who（人用）", "③ whose（あとに名詞が続く）", "④ whom（人の目的格）"], good: "② which  ○", mb: "a bag who", mg: "a bag which", mode: "空所に入る形を選ぼう", notes: ["【状況】名詞 a bag を説明する、つなぎの言葉（関係代名詞）を選びます。", "【手がかり】I have a bag.（私はかばんを持っています）／ The bag has many pockets.（そのかばんはポケットがたくさんあります）。", "【理由】関係代名詞は、2つの文を1つにつなぐ言葉で、説明される名詞（先行詞）が人なら who、物なら which を使います。空所のあとに動詞（has）が直接続いているので、関係代名詞は主語のはたらきをする主格です。", "【当てはめ】2つ目の文の主語 The bag を、物なので which に変えます。I have a bag which has many pockets. となり、which のあとに動詞 has が続きます。", "【答え】② which（I have a bag which has many pockets.）", "【確かめ】「私はポケットがたくさんあるかばんを持っています」と自然です。① who は人のときの語で、かばんには使いません。③ whose は「〜の」の意味で、あとに名詞が続きます。④ whom は人の目的格で、あとに「主語＋動詞」が続きます。", "【よくあるまちがい】「かばんには持ち主（人）がいるから who」と考えることです。who は説明される名詞が人のときに使い、物は which（that でもよい）を使います。"] },
  "a bag ＝ 物",
);

const k25 = make(
  { tiles: [[["The cake", "green", "先行詞"],["＿＿＿", "red", "つなぐ語"],["my mother made", "blue", "主語＋動詞"],["...", "gray", ""]]], cue: "The cake ＝ 物", cuelab: "人用の who は使えない", rule: ["物 → which", "あとが「主語＋動詞」＝ 目的格", "目的格は省略できる"], fill: [[["The cake", "green", "先行詞"],["which", "red", "答え"],["my mother made", "blue", "主語＋動詞"],["...", "gray", ""]]], band: "③ which", bads: ["① who（人用）", "② whose（うしろに名詞が続く）", "④ what（先行詞が不要）"], good: "③ which  ○", mb: "The cake who", mg: "The cake which", mode: "空所に入る形を選ぼう", notes: ["【状況】名詞 The cake を説明する、つなぎの言葉（関係代名詞）を選びます。", "【手がかり】The cake was delicious.（そのケーキはおいしかった）／ My mother made it.（母はそれを作った）。", "【理由】説明される名詞 The cake は物なので、人用の who ではなく which を使います。空所のあとに「主語（my mother）＋ 動詞（made）」が続いているので、which は made の目的語のはたらき（目的格）をしています。目的格の関係代名詞は、省略することもできます。", "【当てはめ】it は made の目的語で、ケーキのことです。物なので which に変え、cake のうしろへ出します。The cake which my mother made was delicious. となります。which のあとは「主語＋動詞」の順です。", "【答え】③ which（The cake which my mother made was delicious.）", "【確かめ】「母が作ったケーキはおいしかった」と自然です。① who は人用、② whose は「〜の」の意味でうしろに名詞が続きます。④ what は先行詞を含む語で、すでに cake がある文には使いません。", "【よくあるまちがい】who を「作った人（母）がいるから」という理由で選ぶことです。関係代名詞は、説明される名詞（cake）に合わせて決めます。"] },
  "The cake ＝ 物",
);

const k26 = make(
  { tiles: [[["I have", "blue", "持っている"],["a lot of homework", "green", "説明される名詞"],["＿＿＿＿", "red", "説明"],["today", "gray", "今日"]]], cue: "何の宿題？ → やるべき宿題", cuelab: "名詞をうしろから説明したい", rule: ["to ＋ 動詞の原形 ＝ 〜するための", "名詞のうしろに置く", "動詞を2つ並べない"], fill: [[["I have", "blue", "持っている"],["a lot of homework", "green", "説明される名詞"],["to do", "red", "答え"],["today", "gray", "今日"]]], band: "② to do", bads: ["① do（動詞が2つになる）", "③ doing（意味が合わない）", "④ did（動詞が2つになる）"], good: "② to do  ○", mb: "homework do", mg: "homework to do", mode: "空所に入る形を選ぼう", notes: ["【状況】「私は今日、やるべき宿題がたくさんあります」という文の、空所に入る形を選びます。", "【手がかり】この文の動詞は have です。空所に動詞をもう1つ置くことはできません。", "【理由】「〜するための」「〜すべき」と名詞を説明するときは、名詞のうしろに「to ＋ 動詞の原形」（不定詞）を置きます。これを不定詞の形容詞的用法といいます。homework をうしろから「やるべき」と説明しているので、to do が入ります。", "【当てはめ】「やるべき宿題」と名詞を説明したいので、to ＋ 動詞の原形を名詞のうしろに置きます。a lot of homework to do today で、to do が homework を説明しています。", "【答え】② to do（I have a lot of homework to do today.）", "【確かめ】「今日やるべき宿題がたくさんある」と自然です。① do と④ did は動詞が2つ並んでしまいます。③ doing は「している宿題」となり意味が合いません。", "【よくあるまちがい】「宿題をする」から do を直接置いてしまうことです。名詞を説明する動詞は、to をつけた不定詞にします。"] },
  "何の宿題？ → やるべき宿題",
);

const k27 = make(
  { tiles: [[["He went", "blue", "行った"],["to the shop", "gray", "店へ"],["＿＿＿＿", "red", "目的"],["a present", "green", "プレゼント"]]], cue: "なんのために行った？", cuelab: "目的を言い足す", rule: ["to ＋ 動詞の原形 ＝ 〜するために", "for のあとには名詞を置く", "動詞を2つ並べない"], fill: [[["He went", "blue", "行った"],["to the shop", "gray", "店へ"],["to buy", "red", "答え"],["a present", "green", "プレゼント"]]], band: "② to buy", bads: ["① buy（動詞が2つになる）", "③ bought（動詞が2つになる）", "④ for buy（for のあとに原形は置けない）"], good: "② to buy  ○", mb: "for buy", mg: "to buy", mode: "空所に入る形を選ぼう", notes: ["【状況】「彼は母へのプレゼントを買うために、店へ行きました」という文の、空所に入る形を選びます。", "【手がかり】「買うために」は、行った目的を表しています。", "【理由】「〜するために」と動作の目的を言うときは、「to ＋ 動詞の原形」（不定詞）を使います。これを不定詞の副詞的用法（目的）といいます。went（行った）という動作に、「なんのために」を付け足す形です。", "【当てはめ】目的は to ＋ 動詞の原形です。buy を原形にして to をつけます。He went to the shop to buy a present for his mother. となります。", "【答え】② to buy（He went to the shop to buy a present for his mother.）", "【確かめ】「母へのプレゼントを買うために店へ行った」と自然です。① buy と③ bought は動詞が2つ並んでしまいます。④ for buy は for のあとに原形を置くことはできず、形がまちがっています。", "【よくあるまちがい】「〜のために」だから for を使ってしまうことです。for のあとは名詞を置きます。動作の目的は to ＋ 原形です。"] },
  "なんのために行った？",
);

const k28 = make(
  { tiles: [[["It", "blue", "形だけの主語"],["is", "gray", "be動詞"],["important", "green", "大切"]],[["for us", "purple", "だれにとって"],["to help each other", "red", "〜すること"]]], cue: "It is 形容詞 for 人 to 原形", cuelab: "「人が〜することは…だ」の型", rule: ["It は形だけの主語", "for 人 は形容詞のあと", "to 原形 が本当の主語"], fill: [[["It is important", "blue", "土台"]],[["for us", "purple", "だれにとって"],["to help each other", "red", "〜すること"]]], band: "It is important for us to ...", bads: ["× It is important to help for us ...", "× For us it is important to ...（It で始める）", "× It is for us important to ..."], good: "It is important for us to help each other.", mb: "to help for us", mg: "for us to help", mode: "語順を考えよう", notes: ["【状況】7つの語（句）を並べかえて、「私たちがおたがいに助け合うことは大切です」という英文を作ります。", "【手がかり】It is important（それは大切です）が土台です。It が to 以下を指す形だけの主語です。", "【理由】「（人）が〜することは…です」は、It is ＋ 形容詞 ＋ for 人 ＋ to ＋ 動詞の原形 で表します。本当の主語は「助け合うこと」（to help each other）ですが、長いので文の終わりに回し、先頭に形だけの主語 It を置きます。", "【当てはめ】「私たちにとって」は for us です。形容詞 important のすぐあとに置きます。「おたがいに助け合うこと」は to help each other です。", "【答え】It is important for us to help each other.", "【確かめ】7つの語（句）をすべて使っています。It is important（大切です）／ for us（私たちにとって）／ to help each other（おたがいに助け合うこと）と、意味のかたまりが日本文の順に並んでいます。", "【よくあるまちがい】for us を to help のあとに置いてしまうことです。for 人 は、形容詞のすぐあと、to の前に入れます。"] },
  "It is 形容詞 for 人 to 原形",
);

const k29 = make(
  { tiles: [[["Please tell me", "blue", "教えて"],["where", "purple", "疑問詞"],["＿＿＿＿＿＿", "red", "語順は？"]]], cue: "Where is the station?", cuelab: "もとの疑問文", rule: ["疑問詞のあとは「主語＋動詞」", "is the station → the station is", "疑問文の語順にしない"], fill: [[["Please tell me", "blue", "教えて"],["where", "purple", "疑問詞"],["the station is", "red", "答え"]]], band: "① the station is", bads: ["② is the station（疑問文の語順）", "③ does the station（does は使わない）", "④ the station does（does は使わない）"], good: "① the station is  ○", mb: "where is the station", mg: "where the station is", mode: "空所に入る形を選ぼう", notes: ["【状況】「駅がどこにあるのか教えてください」という文の、空所に入る語順を選びます。", "【手がかり】Where is the station?（駅はどこですか）が、もとの疑問文です。", "【理由】where などの疑問詞を含む疑問文が、別の文の一部になったものを間接疑問といいます。間接疑問では、疑問詞のあとが「主語 ＋ 動詞」の普通の文の語順になります。疑問文の語順（Where is the station?）のままにすると、まちがいです。", "【当てはめ】where のあとを「主語 ＋ 動詞」の順にします。is the station → the station is です。Please tell me where the station is. となります。", "【答え】① the station is（Please tell me where the station is.）", "【確かめ】「駅がどこにあるのか教えてください」と自然です。② is the station は疑問文の語順です。③ や ④ の does は、be動詞の文には使いません。", "【よくあるまちがい】tell me の文の中でも、Where is the station? の語順のまま書いてしまうことです。間接疑問は「疑問詞 ＋ 主語 ＋ 動詞」です。"] },
  "Where is the station?",
);

const k30 = make(
  { tiles: [[["Mt. Fuji", "blue", "富士山"],["the highest", "green", "最上級"],["mountain", "gray", "山"]],[["＿＿", "red", "範囲"],["Japan", "purple", "日本"]]], cue: "いちばん高い ＝ 最上級", cuelab: "どの範囲でいちばん？", rule: ["場所・集団 → in", "数を表す語 → of（of the three）", "than は比較級のあと"], fill: [[["Mt. Fuji", "blue", "富士山"],["the highest", "green", "最上級"],["mountain", "gray", "山"]],[["in", "red", "答え"],["Japan", "purple", "日本"]]], band: "② in", bads: ["① of（場所には使わない）", "③ than（比較級のあと）", "④ as（as 〜 as の形で使う）"], good: "② in  ○", mb: "of Japan", mg: "in Japan", mode: "空所に入る形を選ぼう", notes: ["【状況】「富士山は日本でいちばん高い山です」という文の、空所に入る語を選びます。", "【手がかり】the highest（いちばん高い）があるので、最上級の文です。", "【理由】最上級のあとには、「〜の中で」とくらべる範囲を表す語句を置きます。範囲が場所や集団（Japan・my class・the world）なら in、複数を表す語（the three・all the students）なら of を使います。Japan は場所なので in です。", "【当てはめ】Japan は国という1つの場所です。「日本の中で」にあたります。場所・集団の範囲には in を使います。of は the three や all のような数を表す語のあとです。", "【答え】② in（Mt. Fuji is the highest mountain in Japan.）", "【確かめ】「富士山は日本でいちばん高い山です」と自然です。① of は Japan のような場所には使いません。③ than は比較級のあとの語、④ as は as 〜 as の形で使います。", "【よくあるまちがい】「〜の中で」を of と覚えてしまうことです。範囲が場所・集団のときは in、数を表す語のときは of です。"] },
  "いちばん高い ＝ 最上級",
);

const k31 = make(
  { tiles: [[["Tom", "blue", "三人称・単数"],["＿＿＿＿", "red", "しなければ"],["study hard", "green", "一生けん命"],["because ...", "gray", "理由"]]], cue: "あしたテストがある", cuelab: "勉強は「しなければならない」", rule: ["have to ＝ しなければならない", "主語が he・she・Tom → has to", "don't have to ＝ 必要はない"], fill: [[["Tom", "blue", "三人称・単数"],["has to", "red", "答え"],["study hard", "green", "一生けん命"],["because ...", "gray", "理由"]]], band: "② has to", bads: ["① must not（してはいけない）", "③ doesn't have to（必要はない）", "④ may not（意味が合わない）"], good: "② has to  ○", mb: "Tom have to", mg: "Tom has to", mode: "空所に入る形を選ぼう", notes: ["【状況】「トムはあしたテストがあるので、一生けん命に勉強しなければなりません」という文の、空所に入る語（句）を選びます。", "【手がかり】「テストがあるので勉強しなければならない」と、必要・義務を表したい文です。", "【理由】「〜しなければならない」は must か have to で表します。主語が三人称・単数（he・she・Tom など）で現在の文のときは、have to が has to になります。選択肢に must はなく、have to の形の has to が合います。", "【当てはめ】must not ＝ してはいけない、has to ＝ しなければならない、doesn't have to ＝ する必要はない、may not ＝ 〜してはいけない／〜しないかもしれない。Tom は三人称・単数なので、have は has にします。has to ＋ 原形の形です。", "【答え】② has to（Tom has to study hard because he has a test tomorrow.）", "【確かめ】「テストがあるので、勉強しなければならない」と筋が通ります。① と ③ と ④ は「してはいけない」「する必要はない」の意味で、理由の文と食いちがいます。", "【よくあるまちがい】主語が Tom なのに have to のままにしてしまうことです。he・she・Tom のときは has to です。また、doesn't have to（必要がない）と must not（してはいけない）の区別もまちがいやすい点です。"] },
  "あしたテストがある",
);

const k32 = make(
  { tiles: [[["I don't know", "blue", "知らない"],["＿＿＿＿", "red", "かどうか"]],[["he will come", "green", "来る"],["or not", "purple", "かどうか"]]], cue: "or not ＝ かどうか", cuelab: "はっきりしないことを知らない", rule: ["〜かどうか ＝ whether（if も可）", "that ＝ 〜ということ", "know のあとにも使う"], fill: [[["I don't know", "blue", "知らない"],["whether", "red", "答え"]],[["he will come", "green", "来る"],["or not", "purple", "かどうか"]]], band: "② whether", bads: ["① that（〜ということ）", "③ and（そして）", "④ so（だから）"], good: "② whether  ○", mb: "that ... or not", mg: "whether ... or not", mode: "空所に入る形を選ぼう", notes: ["【状況】「私は彼がパーティーに来るかどうか知りません」という文の、空所に入る接続詞を選びます。", "【手がかり】「来るかどうか知らない」と、はっきりしない内容を知らない、という文です。", "【理由】「〜かどうか」は、if または whether で表します。or not がついていることも手がかりです。that は「〜ということ」の意味で、「かどうか」は表せません。whether に導かれる部分は know の目的語になる名詞のかたまりです。", "【当てはめ】「かどうか」を表すのは whether です。or not もこの形といっしょに使われます。I don't know whether he will come to the party or not. となります。", "【答え】② whether（I don't know whether he will come to the party or not.）", "【確かめ】「彼がパーティーに来るかどうか知らない」と自然です。① that は「〜ということ」で、or not とは合いません。③ and は「そして」、④ so は「だから」で、「かどうか」の意味は出ません。", "【よくあるまちがい】that を「かどうか」の意味だと思ってしまうことです。that は「〜ということ」です。know や ask のあとの whether は「〜かどうか」の意味で、if も同じ意味で使えますが、「もし〜なら」の if と区別しにくいので、まず whether で覚えます。"] },
  "or not ＝ かどうか",
);

const k33 = make(
  { tiles: [[["Could you", "blue", "お願い"],["open the window", "green", "窓を開ける"],["please?", "gray", "どうぞ"]]], cue: "A：窓を開けてくれませんか？", cuelab: "これは「お願い」", rule: ["依頼：Could you 〜?", "引き受ける：Sure. / Of course.", "ことわる：Sorry, but ..."], fill: [[["Could you", "blue", "お願い"],["Sure.", "red", "答え"]]], band: "① Sure.", bads: ["② Yes, I could.（能力の返事）", "③ No, I'm not.（be動詞への答え）", "④ You're welcome.（お礼への返事）"], good: "① Sure.  ○", mb: "Yes, I could.", mg: "Sure.", mode: "空所に入る形を選ぼう", notes: ["【状況】窓を開けてくれませんか、と頼まれたときの、自然な返事を選びます。", "【手がかり】Could you 〜, please? は「〜してくださいませんか」というお願いです。", "【理由】Could you 〜? は、ていねいに頼む言い方です。引き受けるときは Sure.（いいですよ）、Of course.（もちろん）、All right.（いいですよ）などと答え、ことわるときは I'm sorry, but ... と理由を言います。「できますか」と能力をたずねているのではないので、Yes, I could. とは答えません。", "【当てはめ】お願いを引き受けるなら Sure. や Of course. が自然です。Yes, I could. は能力を答える言い方で不自然です。No, I'm not. は be動詞の問いへの答え、You're welcome. はお礼への返事です。", "【答え】① Sure.", "【確かめ】「窓を開けてくれませんか」「いいですよ」と自然な会話です。② は頼まれたことの返事としては不自然、③ は be動詞の質問への答え方、④ はお礼を言われたときの返事なので、合いません。", "【よくあるまちがい】Could you 〜? を「あなたは〜できましたか」という意味にとってしまうことです。依頼の表現として覚えます。"] },
  "A：窓を開けてくれませんか？",
);

const k34 = make(
  { tiles: [[["2:00", "blue", "会う時刻"],["2:30", "red", "映画の開始"]]], cue: "時刻は2つ出てくる", cuelab: "何の時刻かを結びつける", rule: ["会う：in front of the station at two", "映画：starts at two thirty", "ケン：Not yet.（予定なし）"], fill: [[["2:00 駅の前", "blue", "会う"],["2:30 映画", "red", "開始"]]], band: "② 駅の前に2時", bads: ["① 2時30分に会う（映画の開始時刻）", "③ ケンに予定あり（Not yet. と矛盾）", "④ 映画は2時に始まる（2時30分）"], good: "② 駅の前に2時に会う  ○", mb: "2:30 に会う", mg: "2:00 に会う", mode: "本文・会話から探そう", notes: ["【状況】会話の内容と合う英文を、4つの中から1つ選びます。", "【手がかり】It starts at two thirty in the afternoon. とあるので、映画は2時30分に始まります。", "【理由】聞き取りでは、似た情報（時刻・場所）が複数出てくるので、「何の時刻か」を結びつけることが大切です。この会話には、映画の開始時刻（two thirty）と、会う時刻（two）の2つが出てきます。", "【当てはめ】Let's meet in front of the station at two. とあるので、駅の前に2時に集まります。Do you have any plans for Saturday? に Not yet. と答えているので、ケンにはまだ予定がありません。", "【答え】② They will meet in front of the station at two.", "【確かめ】② は「駅の前に2時に会う」で会話と一致します。① は2時30分は映画の開始時刻です。③ は Not yet. と矛盾します。④ 映画は2時30分に始まります。", "【よくあるまちがい】先に聞こえた時刻（two thirty）を、会う時刻だと思いこんでしまうことです。時刻は「何の時刻か」とセットでメモします。"] },
  "時刻は2つ出てくる",
);

const k35 = make(
  { tiles: [[["A woman asked", "blue", "たのみ"],["So Emi wrote", "red", "したこと"]]], cue: "woman が出てくる文を探す", cuelab: "そのあとに行動が書かれている", rule: ["Can you teach me ...?（たのみ）", "So Emi wrote the recipe on a card", "and gave it to her"], fill: [[["recipe", "purple", "作り方"],["on a card", "red", "カードに"],["gave it", "green", "渡した"]]], band: "② カードを書いて渡した", bads: ["① 家で夕食を作った（書かれていない）", "③ メールで送った（書かれていない）", "④ 日曜に学校で教えた（書かれていない）"], good: "② wrote ... and gave it  ○", mb: "teach me → 教えた", mg: "So のあと → 渡した", mode: "本文・会話から探そう", notes: ["【状況】女性にたのまれたあと、エミが何をしたかを本文から探して、合う英文を選びます。", "【手がかり】A woman asked her, \"Can you teach me how to make this cake?\" が、女性のたのみです。", "【理由】内容を読み取る問題では、設問の人物・できごと（woman・asked）が出てくる文を探し、そのすぐあとを読みます。たのまれたこととそれに対する行動は、たいてい続けて書かれているからです。so（だから）は、前の内容の結果をつなぐ目印にもなります。", "【当てはめ】So Emi wrote the recipe on a card and gave it to her. とあります。「作り方を書いたカードを渡した」という意味です。「カードに書いて渡した」に当てはまるのは ② です。", "【答え】② She wrote the recipe on a card and gave it to the woman.", "【確かめ】本文の wrote the recipe on a card and gave it to her と、② の wrote the recipe on a card and gave it to the woman がそっくり対応します。① 夕食は作っていません。③ メールとは書かれていません。④ 学校で教えた、日曜日という内容はありません。", "【よくあるまちがい】teach me（教えて）という言葉から、「教えた」（④）を選んでしまうことです。実際にエミがしたことは、本文の So のあとに書かれています。"] },
  "woman が出てくる文を探す",
);

const k36 = make(
  { tiles: [[["The girl", "blue", "説明される人"],["wearing", "red", "〜している"],["a red cap", "green", "赤い帽子"]],[["is", "gray", "動詞"],["my cousin", "purple", "いとこ"]]], cue: "少女を説明するかたまり", cuelab: "wearing a red cap ＝ 帽子をかぶっている", rule: ["〜している ＝ ing 形", "語句がつくと名詞のうしろ", "動詞は is"], fill: [[["The girl wearing a red cap", "blue", "主語のかたまり"]],[["is", "gray", "動詞"],["my cousin", "purple", "いとこ"]]], band: "The girl wearing ... is ...", bads: ["× Wearing a red cap the girl is ...", "× The girl is wearing a red cap my cousin", "× The girl a red cap wearing is ..."], good: "The girl wearing a red cap is my cousin.", mb: "Wearing ... the girl", mg: "The girl wearing ...", mode: "語順を考えよう", notes: ["【状況】5つの語（句）を並べかえて、「赤い帽子をかぶっている少女は私のいとこです」という英文を作ります。", "【手がかり】「赤い帽子をかぶっている少女は」は、The girl ＋ wearing a red cap の順に並べます。", "【理由】「〜している（名詞）」と名詞を説明するときは、現在分詞（ing 形）を名詞のうしろに置きます。wearing a red cap のように、分詞に語句がついて長くなるときは、必ず名詞のうしろに置きます。この文の動詞は is で、主語は The girl wearing a red cap のかたまり全体です。", "【当てはめ】文の動詞は is です。主語のかたまりのすぐあとに置きます。「私のいとこ」は my cousin で、文の終わりに置きます。", "【答え】The girl wearing a red cap is my cousin.", "【確かめ】5つの語（句）をすべて使っています。The girl wearing a red cap（赤い帽子をかぶっている少女）が主語、is が動詞、my cousin が補語（いとこ）です。", "【よくあるまちがい】wearing a red cap を The girl の前に置いてしまうことです。分詞に語句がつくときは、名詞のうしろに置きます。"] },
  "少女を説明するかたまり",
);

const k37 = make(
  { tiles: [[["My mother", "blue", "もとの主語"],["made", "red", "動詞"],["this cake", "green", "目的語"]]], cue: "目的語 this cake を主語にする", cuelab: "時は過去のまま", rule: ["目的語 → 主語", "動詞 → was ＋ made", "もとの主語 → by 〜"], fill: [[["This cake", "green", "新しい主語"],["was made", "red", "受け身"],["by my mother", "blue", "by 〜"]]], band: "② This cake was made by my mother.", bads: ["① is made（現在形になっている）", "③ was made my mother（by がない）", "④ My mother was made（意味がちがう）"], good: "② was made by my mother  ○", mb: "is made（時が変わる）", mg: "was made（時は同じ）", mode: "空所に入る形を選ぼう", notes: ["【状況】能動態（〜が…した）の文を、受け身（〜は…された）の文に書きかえます。", "【手がかり】もとの文の目的語は this cake です。これが受け身の文の主語になります。", "【理由】受け身にするときは、①もとの文の目的語を主語にする、②動詞を「be動詞 ＋ 過去分詞」にする、③もとの主語を「by 〜」にしてうしろに置く、の3つを行います。もとの文は過去（made）なので、be動詞も過去形にします。", "【当てはめ】もとの文は過去の文なので、be動詞は was。make の過去分詞は made（make − made − made）で、was made になります。もとの主語 My mother を by my mother にして、文の終わりに置きます。", "【答え】② This cake was made by my mother.", "【確かめ】「このケーキは母によって作られました」と、もとの文と同じ意味になります。① is made は現在形で、もとの文の時とちがいます。③ by がありません。④ 主語が My mother のままで、意味が「母が作られた」になってしまいます。", "【よくあるまちがい】時（過去）を無視して is made にしてしまうことです。受け身にしても、時は変わりません。また by を忘れる人もいます。"] },
  "目的語 this cake を主語にする",
);

const k38 = make(
  { tiles: [[["I have", "blue", "現在完了"],["never", "red", "一度もない"],["seen", "green", "過去分詞"],["a koala", "purple", "コアラ"]]], cue: "見たことがない ＝ 経験の否定", cuelab: "have ＋ never ＋ 過去分詞", rule: ["経験 ＝ have ＋ 過去分詞", "never は have のあと", "see − saw − seen"], fill: [[["I have", "blue", "現在完了"],["never", "red", "一度もない"],["seen", "green", "過去分詞"],["a koala", "purple", "コアラ"]]], band: "I have never seen a koala.", bads: ["× I have never saw a koala.（saw は過去形）", "× I never have seen a koala.（語順）", "× I have seen never a koala.（語順）"], good: "I have never seen a koala.  ○", mb: "never saw", mg: "never seen", mode: "英語にしよう", notes: ["【状況】「私はコアラを見たことがありません」を、see を使った英文にします。", "【手がかり】「見たことがない」はいままでの経験なので、現在完了にします。I have ＋ 過去分詞です。", "【理由】「いままでに〜したことがない」は、経験を表す現在完了（have ＋ 過去分詞）に never（一度も〜ない）を加えて表します。never は have のあと、過去分詞の前に置きます。see の過去分詞は seen です。", "【当てはめ】「一度もない」は never で、have と過去分詞のあいだに置きます。have never です。see − saw − seen。過去分詞 seen のあとに a koala を置きます。", "【答え】I have never seen a koala.", "【確かめ】I（私は）＋ have never seen（見たことがない）＋ a koala（コアラを）と、日本文と1つずつ対応しています。I haven't seen a koala. も同じ意味ですが、never を使うほうが「一度もない」が強く出ます。", "【よくあるまちがい】saw（過去形）を使って I have never saw ... と書くことです。have のあとは過去分詞 seen です。また、コアラは数えられる名詞なので a が必要です。I haven't seen a koala. などのほかの言い方でも、文法が正しければ正解です。"] },
  "見たことがない ＝ 経験の否定",
);

const k39 = make(
  { tiles: [[["I know", "blue", "知っている"],["a boy", "green", "先行詞"]],[["who", "red", "主格"],["can speak", "purple", "動詞"],["three languages", "gray", "3つの言語"]]], cue: "a boy を説明する部分", cuelab: "who ＋ 動詞 の形", rule: ["人 ＋ who ＋ 動詞", "who が主語のはたらき", "だから主語は置かない"], fill: [[["I know a boy", "blue", "土台"]],[["who", "red", "主格"],["can speak", "purple", "動詞"],["three languages", "gray", "3つの言語"]]], band: "I know a boy who can speak ...", bads: ["× I know who a boy can speak ...", "× I know a boy who I can speak ...（主語は不要）", "× A boy who I know can speak ..."], good: "I know a boy who can speak three languages.", mb: "who I can speak", mg: "who can speak", mode: "語順を考えよう", notes: ["【状況】7つの語（句）を並べかえて、「私は3つの言語を話せる少年を知っています」という英文を作ります。", "【手がかり】I know a boy（私は少年を知っています）が土台です。", "【理由】「〜する（人）」と人を説明するときは、主格の関係代名詞 who を使います。2つの文「私は少年を知っている」「その少年は3つの言語を話せる」を、2つ目の文の主語 The boy を who に変えてつなぎます。who は主語のはたらきをしているので、あとに動詞が続きます。", "【当てはめ】「3つの言語を話せる」は who ＋ can speak ＋ three languages です。who のあとは動詞のかたまり（can speak）です。土台のうしろに説明の部分をつなぎます。I know a boy who can speak three languages.", "【答え】I know a boy who can speak three languages.", "【確かめ】7つの語（句）をすべて使っています。who のあとに can speak と動詞が続いているので、主格の関係代名詞の形として正しいです。「3つの言語を話せる少年」と読めます。", "【よくあるまちがい】who のあとに主語（I など）を置いてしまうことです。主格の who のあとは、主語がなく動詞が続きます。"] },
  "a boy を説明する部分",
);

const k40 = make(
  { tiles: [[["困った", "gray", "聞いてくれない"],["助言", "purple", "妹"],["行動", "blue", "リョウ"],["変化", "green", "笑った"]]], cue: "流れをつかむ", cuelab: "困りごと → 助言 → 行動 → 変化", rule: ["妹が助言：Show the pictures ...", "リョウがやってみた：tried it", "こどもが笑いだした：began to smile"], fill: [[["助言", "purple", "妹"],["行動", "blue", "リョウ"],["結果", "green", "笑った"]]], band: "② 行動 → 笑顔", bads: ["① 妹が一緒に読む（助言しただけ）", "③ 2年前に始めた（last spring）", "④ 来月やめる（keep reading）"], good: "② 絵を見せて、声を大きく  ○", mb: "妹が読み聞かせ", mg: "リョウが読み聞かせ", mode: "本文・会話から探そう", notes: ["【状況】本文の内容と合う英文を、4つの中から1つ選びます。", "【手がかり】① 妹は kindergarten（幼稚園）で働いていて、アドバイスをくれただけです。③ 「last spring」から始めたので、2年前ではありません。", "【理由】内容一致の問題では、選択肢の細かい情報（だれが・いつ・どのくらい前か）を本文と1つずつ照らします。この文章では、リョウが困ったこと → 妹のアドバイス → リョウの行動 → こどもたちの変化、という流れで書かれています。その流れの中にある「原因と結果」がそのまま選択肢になっています。", "【当てはめ】妹が She said, \"Show the pictures and use a loud, clear voice.\" と助言し、Ryo tried it, and the children began to smile. とあります。やめるとは書かれていません。I want to keep reading ... と、続けたい気持ちが書かれています。", "【答え】② Ryo showed the pictures and used a loud, clear voice, so the children began to smile.", "【確かめ】② は、本文の「Show the pictures and use a loud, clear voice」→「the children began to smile」の流れとそのまま一致します。① は一緒に読むと書かれていない、③ は last spring と食いちがい、④ は keep reading と反対です。", "【よくあるまちがい】sister という言葉が出てくる選択肢①を、本文の内容の一部だけ見て選んでしまうことです。本文では妹は助言をしただけで、読み聞かせをしたのはリョウです。"] },
  "流れをつかむ",
);

const k41 = make(
  { tiles: [[["Last month", "gray", "先月"],["went", "blue", "過去形"],["saw", "blue", "過去形"],["gave", "blue", "過去形"]]], cue: "文章全体が過去形", cuelab: "時の流れをそろえる", rule: ["過去のできごと ＝ 過去形", "After lunch ＝ はっきりした過去", "現在完了は使えない"], fill: [[["After lunch", "gray", "昼食のあと"],["we", "blue", "私たちは"],["visited", "red", "答え"]]], band: "③ visited", bads: ["① are visiting（現在進行形）", "② will visit（未来）", "④ have visited（現在完了）"], good: "③ visited  ○", mb: "have visited", mg: "visited", mode: "本文・会話から探そう", notes: ["【状況】本文中の（　）に入る動詞の形を、文章の時の流れから選びます。", "【手がかり】最初に Last month, our class went to Nara とあり、ほかの文も visited・saw・gave・laughed と過去形です。", "【理由】空所の入る文は、きのうや先月のように「終わった過去のできごと」を順に書いている流れの中にあります。過去のできごとを順に述べるときは、動詞を過去形にします。現在完了は「いまとのつながり」を言う形で、After lunch（昼食のあと）のように過去のはっきりした時を表す語句とは使えません。", "【当てはめ】After lunch（昼食のあと）は、その日のはっきりした過去の時です。過去のできごとなので、過去形 visited を使います。", "【答え】③ visited", "【確かめ】After lunch, we visited a traditional craft shop は、前後の過去形の文と時がそろい、自然に読めます。① are visiting は現在進行形、② will visit は未来、④ have visited は現在完了で、どれも過去のはっきりした時（After lunch）と合いません。", "【よくあるまちがい】「旅行に行った経験」だからと現在完了 have visited を選んでしまうことです。いつのことかがはっきり示されているときは、過去形を使います。"] },
  "文章全体が過去形",
);

const k42 = make(
  { tiles: [[["a week", "blue", "1週間"],["liked", "green", "気に入った"],["did not know", "purple", "知らなかった"]]], cue: "本文の細部を拾う", cuelab: "1語のちがいに注意", rule: ["stayed for a week（1週間）", "She liked the idea（気に入った）", "did not know about it（知らなかった）"], fill: [[["vegetable skins", "green", "野菜の皮"],["in the ground", "red", "土に入れる"],["food for plants", "purple", "栄養"]]], band: "② 野菜の皮を土に入れる", bads: ["① a month（本文は a week）", "③ did not like（本文は liked）", "④ already knew（本文は did not know）"], good: "② 野菜の皮を土に入れる  ○", mb: "a month", mg: "a week", mode: "本文・会話から探そう", notes: ["【状況】本文の内容と合う英文を、4つの中から1つ選びます。", "【手がかり】① I stayed with him for a week（1週間）で、1か月ではありません。③ She liked the idea（気に入った）で、反対です。", "【理由】内容一致では、選択肢の期間・人物・気持ちを、本文の対応する部分と1つずつ照らします。まちがいの選択肢は、本文の一部の語（a week → a month、liked → did not like）を変えて作られることが多いからです。", "【当てはめ】I did not know about it before.（それをいままで知らなかった）とあるので、すでに知っていたという内容と反対です。He said, \"I put them in the ground. They become a kind of food for the plants ...\" とあり、祖父が野菜の皮を土に入れて植物の栄養にしていることが分かります。", "【答え】② The writer's grandfather puts vegetable skins in the ground to help his plants.", "【確かめ】② は、祖父の発言（野菜の皮を土に入れる）と、その理由（植物の食べ物になる）に一致します。① a month、③ did not like、④ already knew は、どれも本文の1語（a week・liked・did not know）と食いちがいます。", "【よくあるまちがい】選択肢が本文の言葉をたくさん使っていると、正しそうに見えてしまうことです。期間・気持ち・「知っていたか」のような細部を必ず確かめます。"] },
  "本文の細部を拾う",
);

const k43 = make(
  { tiles: [[["nervous", "gray", "緊張"],["But", "purple", "切りかえ"],["remembered", "red", "思い出した"],["spoke slowly", "green", "ゆっくり話した"]]], cue: "spoke slowly の文を探す", cuelab: "原因は同じ文の中にある", rule: ["But he remembered ...", "his friends' words", "and spoke slowly"], fill: [[["friends' words", "red", "答え"],["→", "gray", ""],["spoke slowly", "green", "ゆっくり話した"]]], band: "② His friends' words.", bads: ["① Ms. Brown（すすめた人）", "③ His dream（話題の名前）", "④ His first prize（賞は取っていない）"], good: "② His friends' words.  ○", mb: "先生の言葉", mg: "友だちの言葉", mode: "本文・会話から探そう", notes: ["【状況】ケンジが落ち着いてゆっくり話せた理由を、本文から探して選びます。", "【手がかり】spoke slowly（ゆっくり話した）が書かれているのは、On the day of the contest のあとの But の文です。", "【理由】理由を答える問題では、「ゆっくり話した」という行動（spoke slowly）が書かれた文を探し、そのすぐ前に書かれている原因を読みます。この文章では、コンテストの日の描写で「緊張していた」が But で切り替わり、原因（思い出したこと）と結果（ゆっくり話した）がつながっています。", "【当てはめ】But he remembered his friends' words, \"Believe in yourself,\" and spoke slowly. とあり、友だちの言葉を思い出したことが分かります。「友だちの言葉」は His friends' words なので ② です。", "【答え】② His friends' words.", "【確かめ】本文の remembered his friends' words が、選択肢 ② の His friends' words と一致します。① Ms. Brown はコンテストをすすめた人で、思い出した言葉の主ではありません。③ My Dream は話題です。④ 一等にはなっていません。", "【よくあるまちがい】先生が最初にすすめた人なので、先生の言葉（①）だと思いこむことです。「何を思い出したか」は、そこの文だけを読んで決めます。"] },
  "spoke slowly の文を探す",
);

const k44 = make(
  { tiles: [[["午前", "blue", "morning"],["サッカー", "green", "試合"],["午後3時", "red", "afternoon"]],[["アヤの家", "purple", "ケーキ作り"],["いちご", "gray", "持っていく"]]], cue: "午前と午後を分ける", cuelab: "時間ごとに予定をメモ", rule: ["午前：soccer game", "午後3時：Aya の家へ", "持ち物：strawberries"], fill: [[["午前", "blue", "morning"],["サッカー", "green", "試合"],["午後3時", "red", "afternoon"]],[["アヤの家", "purple", "ケーキ作り"],["いちご", "gray", "持っていく"]]], band: "② 午前サッカー → 午後3時にアヤの家へ", bads: ["① 一日中サッカー（午後はあいている）", "③ 午前に自分の家で作る（午後・アヤたちと）", "④ アヤの母と買い物（誕生日の人）"], good: "② 午前サッカー → 3時に アヤの家  ○", mb: "一日中サッカー", mg: "午前だけサッカー", mode: "本文・会話から探そう", notes: ["【状況】会話から、マイクの日曜日の予定をまとめた英文を選びます。", "【手がかり】I have a soccer game in the morning（午前はサッカーの試合がある）。午後はあいています。", "【理由】聞き取りでは、時間ごとの予定（午前・午後）と、頼まれたこと（持ち物）を分けてメモします。この会話では、午前はサッカーの試合、午後3時にアヤの家へ行き、ケーキ作りを手伝い、いちごを持っていく、という順で情報が出てきます。", "【当てはめ】Aya が at my house（私の家で）と言い、How about three o'clock? と言い、Mike は OK. と答えています。3時にアヤの家へ行き、ケーキ作りを手伝います。Please bring some strawberries と頼まれ、I'll buy them on my way. と答えています。いちごを買って持っていきます。", "【答え】② He will play soccer in the morning, and go to Aya's house at three with strawberries.", "【確かめ】② は、午前のサッカー・3時にアヤの家へ・いちごを持っていく、という3つの情報がすべて会話と一致します。① は午後あいているので合いません。③ ケーキを作るのは午後、アヤたちと一緒です。④ アヤの母は誕生日を祝われる人で、買い物には行きません。", "【よくあるまちがい】soccer game が最初に聞こえたので、「一日中サッカー」と思いこむことです。会話の中の in the morning と in the afternoon のちがいを聞き分けます。"] },
  "午前と午後を分ける",
);

const k45 = make(
  { tiles: [[["I often go", "blue", "よく行く"],["to the library", "green", "先行詞"]],[["which", "red", "関係代名詞"],["is near the station", "purple", "駅の近く"]]], cue: "図書館を説明したい", cuelab: "which ＋ is near the station", rule: ["物 ＋ which ＋ 動詞", "often は動詞の前", "指定は which（that でも文法は正しい）"], fill: [[["I often go to the library", "blue", "土台"]],[["which", "red", "関係代名詞"],["is near the station", "purple", "駅の近く"]]], band: "... the library which is near the station.", bads: ["× I go often to the library ...（often の位置）", "× ... the library which near the station（is がない）", "× ... the library who is near ...（人用）"], good: "the library which is near the station", mb: "which near ...", mg: "which is near ...", mode: "英語にしよう", notes: ["【状況】「私は駅の近くにある図書館によく行きます」を、which を使った英文にします。", "【手がかり】「私は図書館によく行きます」は I often go to the library です。often は go の前に置きます。", "【理由】「〜にある（物）」と物を説明するときは、主格の関係代名詞 which を使って、名詞のうしろに説明を続けます。which は主語のはたらきをしているので、あとに動詞（is）が続きます。「よく」は頻度を表す副詞 often で、一般動詞の前に置きます。", "【当てはめ】「駅の近くにある」は which is near the station です。which のあとは動詞 is です。土台のうしろに説明をつなぎます。I often go to the library which is near the station.", "【答え】I often go to the library which is near the station.", "【確かめ】I often go to the library（図書館によく行く）＋ which is near the station（駅の近くにある）と、日本文が1つずつ対応しています。この問題は which を使う指定なので which で書きます（文法としては that でも正しい文です）。", "【よくあるまちがい】「近くにある図書館」を near the station library のように名詞を並べてしまうことです。説明が長いときは、which を使って名詞のうしろに置きます。"] },
  "図書館を説明したい",
);

const k46 = make(
  { tiles: [[["Tom is", "blue", "トムは"],["taller than", "red", "より高い"],["Ken", "green", "ケン"]]], cue: "トムが上、ケンが下", cuelab: "ケンを主語にして言いかえる", rule: ["not as ＋ 原級 ＋ as 〜", "〜ほど…ではない", "as 〜 as のあいだは原級"], fill: [[["Ken is", "green", "ケンは"],["not as tall as", "red", "ほど高くない"],["Tom", "blue", "トム"]]], band: "① not as tall as", bads: ["② not taller as（比較級が入っている）", "③ as taller as（比較級が入っている）", "④ not so taller than（形がまちがい）"], good: "① not as tall as  ○", mb: "not as taller as", mg: "not as tall as", mode: "空所に入る形を選ぼう", notes: ["【状況】比較級の文を、not as 〜 as の文に書きかえます。", "【手がかり】Tom is taller than Ken. は、「トムはケンより背が高い」です。トムが上、ケンが下です。", "【理由】「AはBほど〜ではない」は、not as ＋ 原級 ＋ as B で表します。as 〜 as のあいだには、形容詞や副詞の原級（そのままの形）を入れます。「トムはケンより背が高い」ならば、「ケンはトムほど背が高くない」と言いかえられます。", "【当てはめ】ケンを主語にすると、「ケンはトムほど背が高くない」となります。not as tall as Tom です。tall は原級のまま入れ、taller にはしません。", "【答え】① not as tall as（Ken is not as tall as Tom.）", "【確かめ】「トムはケンより背が高い」＝「ケンはトムほど背が高くない」と、同じ意味になります。② と④ は taller が入ってしまい、as 〜 as の形に合いません。③ は as taller as で、原級でなく比較級を入れていてまちがいです。", "【よくあるまちがい】as 〜 as のあいだに比較級 taller を入れてしまうことです。as 〜 as のあいだは必ず原級です。"] },
  "トムが上、ケンが下",
);

const k47 = make(
  { tiles: [[["I don't know", "blue", "知らない"],["what", "purple", "疑問詞"]],[["he", "green", "主語"],["wants", "red", "動詞"],["for his birthday", "gray", "誕生日に"]]], cue: "What does he want?", cuelab: "もとの疑問文", rule: ["疑問詞のあとは「主語＋動詞」", "does は消える", "動詞に s がつく（wants）"], fill: [[["I don't know", "blue", "知らない"],["what", "purple", "疑問詞"]],[["he wants", "green", "主語＋動詞"],["for his birthday", "gray", "誕生日に"]]], band: "I don't know what he wants ...", bads: ["× I don't know what does he want ...", "× I don't know what he want ...（s がない）", "× I what don't know he wants ..."], good: "I don't know what he wants for his birthday.", mb: "what does he want", mg: "what he wants", mode: "語順を考えよう", notes: ["【状況】7つの語（句）を並べかえて、「私は彼が誕生日に何をほしがっているのか知りません」という英文を作ります。", "【手がかり】「私は知りません」は I don't know です。", "【理由】「何を〜か」を知らない、という文では、疑問詞 what を含む部分が know の目的語になる間接疑問です。間接疑問では、疑問詞のあとが「主語 ＋ 動詞」の普通の語順になります。もとの疑問文 What does he want for his birthday? の does は使わず、動詞が wants に変わる点に注意します。", "【当てはめ】「彼が何をほしがっているか」は what ＋ he ＋ wants の順です。does は使わず、wants と三人称・単数の s をつけます。for his birthday（誕生日に）を文の終わりに置きます。", "【答え】I don't know what he wants for his birthday.", "【確かめ】7つの語（句）をすべて使っています。what のあとが he wants と普通の語順で、does がありません。「彼が誕生日に何をほしがっているのか知りません」と読めます。", "【よくあるまちがい】what does he want ... と、疑問文の語順のままにしてしまうことです。間接疑問では does を使わず、動詞に s がつきます。"] },
  "What does he want?",
);

const k48 = make(
  { tiles: [[["The teacher", "blue", "主語"],["told", "red", "言った"],["us", "green", "人に"]],[["to be quiet", "purple", "静かにするように"]]], cue: "tell ＋ 人 ＋ to ＋ 原形", cuelab: "「人」は動詞のすぐあと", rule: ["told の直後に「人」", "そのあとに to ＋ 原形", "be quiet は to のあとで be"], fill: [[["The teacher", "blue", "主語"],["told", "red", "言った"],["us", "green", "人に"]],[["to be quiet", "purple", "静かにするように"]]], band: "The teacher told us to be quiet.", bads: ["× The teacher told to be quiet us.", "× The teacher us told to be quiet.", "× The teacher told us be quiet to."], good: "The teacher told us to be quiet.", mb: "told to be quiet us", mg: "told us to be quiet", mode: "語順を考えよう", notes: ["【状況】5つの語（句）を並べかえて、「先生は私たちに静かにするように言いました」という英文を作ります。", "【手がかり】主語は The teacher、動詞は過去形の told です。", "【理由】「（人）に〜するように言う」は、tell ＋ 人 ＋ to ＋ 動詞の原形 で表します。「人」の部分は代名詞なら目的格（us）、そのあとの to ＋ 原形が「してほしいこと」を表します。「静かにする」は be quiet で、to のあとなので be（原形）にします。", "【当てはめ】「私たちに」は us で、動詞 told のすぐあとに置きます。to ＋ 動詞の原形 の to be quiet を、最後に置きます。", "【答え】The teacher told us to be quiet.", "【確かめ】5つの語（句）をすべて使っています。told us（私たちに言った）＋ to be quiet（静かにするように）の順で、「先生は私たちに静かにするように言った」と読めます。", "【よくあるまちがい】told to be quiet us のように「人」を to のうしろに置いてしまうことです。tell の「人」は、動詞の直後に置きます。"] },
  "tell ＋ 人 ＋ to ＋ 原形",
);

const k49 = make(
  { tiles: [[["sometimes", "blue", "ときどき"],["many shops", "green", "たくさん"],["smaller", "purple", "減った"]]], cue: "強い言葉に注意", cuelab: "never・only・larger は本文と食いちがう", rule: ["sometimes ≠ never", "many shops ≠ only one", "smaller ≠ larger"], fill: [[["have asked", "red", "たのんだ"],["shoppers", "blue", "買い物客"],["own bags", "green", "自分のふくろ"]]], band: "② 買い物客にたのんだ", bads: ["① never hurt（本文は dangerous）", "③ only one shop（本文は many shops）", "④ larger（本文は smaller）"], good: "② asked shoppers to bring bags  ○", mb: "only one shop", mg: "many shops", mode: "本文・会話から探そう", notes: ["【状況】本文の内容と合う英文を、4つの中から1つ選びます。", "【手がかり】Sea animals sometimes eat them by mistake, and this is dangerous for them. とあるので、動物はきずつく可能性があります。never hurt は反対です。", "【理由】選択肢は、本文の内容を少し変えてまちがいにしてあります。数（only one と many）や、変化の向き（smaller と larger）、あることが「起きる／起きない」（dangerous と never hurt）を、本文と1つずつ照らして確かめます。", "【当てはめ】They have asked shoppers to bring their own bags とあります。「ふくろをもってくるように、買い物客にたのんだ」という内容で、② と合います。③ many shops have joined とあり、only one ではありません。④ has become smaller than before とあり、larger ではなく smaller です。", "【答え】② The students asked shoppers to bring their own bags.", "【確かめ】② は、本文の have asked shoppers to bring their own bags と一致します。① never、③ only one、④ larger は、どれも本文の語（sometimes・many・smaller）と食いちがっています。", "【よくあるまちがい】never・only・larger のような強い言葉のついた選択肢に引きずられることです。こうした言葉は、本文の弱い表現（sometimes・many・smaller）とちがうことが多いので、必ず本文にもどって確かめます。"] },
  "強い言葉に注意",
);

const k50 = make(
  { tiles: [[["A", "blue", "質問"],["( ? )", "red", "空所"],["B", "green", "Yes, it was ..."]]], cue: "あとの返事が手がかり", cuelab: "Yes, it was really interesting.", rule: ["Yes で答えられる質問", "返事が it was → Was 〜?", "話題は a book"], fill: [[["A", "blue", "質問"],["Was the book interesting?", "red", "答え"]]], band: "① Was the book interesting?", bads: ["② Did you read it ...?（Yes, I did. になる）", "③ Will you buy ...?（Yes, I will. になる）", "④ How long ...?（Yes では答えられない）"], good: "① Was the book interesting?  ○", mb: "話題だけで選ぶ", mg: "返事とつなぐ", mode: "本文・会話から探そう", notes: ["【状況】会話の空所に入る、Aの質問を選びます。", "【手がかり】Yes, it was really interesting. は、「はい、とてもおもしろかった」という意味で、本について答えています。", "【理由】会話の空所補充では、空所の「あとの返事」が最大の手がかりです。Bは「Yes, it was really interesting.」と答えています。Yes で答えられる質問で、しかも was を使った「おもしろかったですか」という質問でなければ、会話がつながりません。", "【当てはめ】Yes で答え、it was と返しているので、質問は Was ... ? の形で、ものの感想をたずねているはずです。Was the book interesting? は、前の本の話題にも続き、Yes, it was. の答えにもなります。", "【答え】① Was the book interesting?", "【確かめ】A「その本はおもしろかった？」B「うん、とてもおもしろかった」と自然につながります。② は Yes, I did. のような答えになります。③ は Yes, I will. など未来の答えです。④ は時間をたずねる質問で、Yes では答えられません。", "【よくあるまちがい】前の話題（book）だけを見て、本に関する質問ならどれでもよいと思うことです。返事の Yes, it was ... にぴったり合う形かどうかも確かめます。"] },
  "あとの返事が手がかり",
);

export const figuresMoshi202703EigoKoko2: Record<string, Figure> = {
  moshi_2027_03_eigo_k11: k11,
  moshi_2027_03_eigo_k12: k12,
  moshi_2027_03_eigo_k13: k13,
  moshi_2027_03_eigo_k14: k14,
  moshi_2027_03_eigo_k15: k15,
  moshi_2027_03_eigo_k16: k16,
  moshi_2027_03_eigo_k17: k17,
  moshi_2027_03_eigo_k18: k18,
  moshi_2027_03_eigo_k19: k19,
  moshi_2027_03_eigo_k20: k20,
  moshi_2027_03_eigo_k21: k21,
  moshi_2027_03_eigo_k22: k22,
  moshi_2027_03_eigo_k23: k23,
  moshi_2027_03_eigo_k24: k24,
  moshi_2027_03_eigo_k25: k25,
  moshi_2027_03_eigo_k26: k26,
  moshi_2027_03_eigo_k27: k27,
  moshi_2027_03_eigo_k28: k28,
  moshi_2027_03_eigo_k29: k29,
  moshi_2027_03_eigo_k30: k30,
  moshi_2027_03_eigo_k31: k31,
  moshi_2027_03_eigo_k32: k32,
  moshi_2027_03_eigo_k33: k33,
  moshi_2027_03_eigo_k34: k34,
  moshi_2027_03_eigo_k35: k35,
  moshi_2027_03_eigo_k36: k36,
  moshi_2027_03_eigo_k37: k37,
  moshi_2027_03_eigo_k38: k38,
  moshi_2027_03_eigo_k39: k39,
  moshi_2027_03_eigo_k40: k40,
  moshi_2027_03_eigo_k41: k41,
  moshi_2027_03_eigo_k42: k42,
  moshi_2027_03_eigo_k43: k43,
  moshi_2027_03_eigo_k44: k44,
  moshi_2027_03_eigo_k45: k45,
  moshi_2027_03_eigo_k46: k46,
  moshi_2027_03_eigo_k47: k47,
  moshi_2027_03_eigo_k48: k48,
  moshi_2027_03_eigo_k49: k49,
  moshi_2027_03_eigo_k50: k50,
};
