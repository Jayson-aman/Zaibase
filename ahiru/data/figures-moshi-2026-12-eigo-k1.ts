// 月例実力テスト 2026年12月号（高校受験・英語）担当A（k01〜k25）の動く図解。キーは問題ID。
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

const f01 = make(
  { tiles: [[["The baby", "blue", "主語"], ["＿＿＿＿", "red", "動詞の形"], ["in the garden", "gray", "場所"]]], cue: "Look! ＝ いま目の前", cuelab: "いま進行中の動作", rule: ["現在進行形 ＝ be動詞 ＋ ing形", "主語 The baby（1人）→ is", "sleep → sleeping"], fill: [[["The baby", "blue", "主語"], ["is sleeping", "red", "答え"], ["in the garden", "gray", "場所"]]], band: "② is sleeping", bads: ["① sleeps（ふだんの習慣の形）", "③ slept（過去形）", "④ sleep（be動詞も s もない）"], good: "② is sleeping  ○", mb: "The baby sleeps", mg: "is sleeping", mode: "空所に入る形を選ぼう", notes: ["【状況】「見て！赤ちゃんが庭で眠っています」という文の、空所に入る動詞の形を選びます。", "【手がかり】Look!（見て！）は、いま目の前で起きていることを指します。習慣ではなく「いまの一瞬」の話です。", "【理由】「いま、この瞬間に行われている動作」は、現在進行形（be動詞 ＋ 動詞のing形）で表します。現在形（sleeps）は「ふだんの習慣・いつもの事実」を表す形で、いまの一瞬の動作には使いません。Look!（見て！）は、目の前でいま起きていることを指す合図です。", "【当てはめ】Look! から、「いま目の前で起きていること」だとわかります。 主語 The baby は1人（3人称単数）なので、be動詞は is です。 sleep のing形は sleeping です。be動詞 ＋ ing形で is sleeping となります。", "【答え】② is sleeping（Look! The baby is sleeping in the garden.）", "【確かめ】「見て！赤ちゃんが庭で眠っています」と自然な意味になります。① sleeps は習慣の形で、Look! と合いません。③ slept は過去形です。④ sleep は原形で、主語が3人称単数なのに s も be動詞もなく、文として成り立ちません。", "【よくあるまちがい】動作を表す動詞だから現在形でよい、と考えてしまうことです。「いまやっている最中」なら be動詞 ＋ ing、「いつも・ふだん」なら現在形と使い分けます。"] },
  "現在進行形：いま進行中の動作",
);
const f02 = make(
  { tiles: [[["We", "blue", "主語"], ["＿＿＿＿", "red", "動詞の形"], ["to the zoo", "gray", "場所"], ["last Sunday", "green", "過去の合図"]]], cue: "last Sunday ＝ 過去", cuelab: "過去のことは過去形で言う", rule: ["過去のことは動詞を過去形にする", "go は不規則：go − went − gone", "ed をつけない（goed は×）"], fill: [[["We", "blue", "主語"], ["went", "red", "答え"], ["to the zoo", "gray", "場所"], ["last Sunday", "green", "過去の合図"]]], band: "③ went", bads: ["① go（現在形）", "② goes（3人称単数の現在形）", "④ gone（過去分詞）"], good: "③ went  ○", mb: "We goed", mg: "We went", mode: "空所に入る形を選ぼう", notes: ["【状況】「私たちはこの前の日曜日、バスで動物園に行きました」という文の、空所に入る動詞の形を選びます。", "【手がかり】last Sunday（この前の日曜日）は過去を表す言葉。動詞を過去形にする合図です。", "【理由】last Sunday（この前の日曜日）は過去を表す言葉です。過去の出来事を言うときは、動詞を過去形にします。go は ed をつけて作る規則動詞ではなく、go − went − gone と形が変わる不規則動詞なので、過去形は went です。", "【当てはめ】last Sunday（この前の日曜日）から、過去の話だとわかります。 go の変化を思い出します。go（原形）− went（過去形）− gone（過去分詞）です。 過去形は2番目の went です。主語 We のあとに置きます。", "【答え】③ went（We went to the zoo by bus last Sunday.）", "【確かめ】「この前の日曜日にバスで動物園へ行った」と自然です。① go は現在形で last Sunday と合いません。② goes は3人称単数の現在形です。④ gone は過去分詞で、have などといっしょに使う形です（単独では過去形になりません）。", "【よくあるまちがい】goed と書いてしまう、または gone を過去形と混ぜてしまうことです。go − went − gone は、3つをセットで覚えます。"] },
  "不規則動詞の過去形：go − went",
);
const f03 = make(
  { tiles: [[["I read many books", "blue", "文の前半"], ["＿＿＿＿", "red", "つなぎの語"], ["the summer vacation", "green", "名詞だけ"]]], cue: "the summer vacation ＝ 名詞", cuelab: "主語＋動詞は続いていない", rule: ["あとが名詞 → 前置詞 during", "あとが 主語＋動詞 → 接続詞 while", "例：while I was on vacation"], fill: [[["I read many books", "blue", "文の前半"], ["during", "red", "答え"], ["the summer vacation", "green", "名詞"]]], band: "① during", bads: ["② while（あとに文が必要）", "③ because（理由・あとに文が必要）", "④ but（逆接・あとに文が必要）"], good: "① during  ○", mb: "while ＋ 名詞（×）", mg: "during ＋ 名詞", mode: "空所に入る語を選ぼう", notes: ["【状況】「私は夏休みのあいだに、たくさんの本を読みました」という文の、空所に入る語を選びます。", "【手がかり】空所のあとは the summer vacation だけで、主語も動詞もありません。名詞のかたまりです。", "【理由】「〜のあいだ」を表す語には、前置詞 during と接続詞 while があります。前置詞はあとに名詞が続き、接続詞はあとに「主語 ＋ 動詞」が続きます。形がちがうので、空所のあとに何が来ているかで使い分けます。", "【当てはめ】空所のあとを見ます。the summer vacation は名詞のかたまりで、主語と動詞はありません。 名詞が続くので、前置詞が必要です。「〜のあいだ」の前置詞は during です。 during the summer vacation で「夏休みのあいだ」となります。", "【答え】① during（I read many books during the summer vacation.）", "【確かめ】「夏休みのあいだにたくさん本を読んだ」と自然です。② while は主語 ＋ 動詞が続くときの語です（while I was on vacation なら正しい）。③ because は理由を表し、あとに文が必要です。④ but は逆接で、これもあとに文が必要です。", "【よくあるまちがい】while と during を同じ意味だからと入れかえてしまうことです。あとが名詞なら during、「主語 ＋ 動詞」なら while と、形で見分けます。"] },
  "during と while の使い分け",
);
const f04 = make(
  { tiles: [[["A: Shall we", "blue", "さそう"], ["play tennis", "gray", "何を"], ["after school?", "gray", "いつ"]]], cue: "Shall we 〜? ＝ さそい", cuelab: "「いっしょに〜しましょうか」", rule: ["Shall we 〜? ＝ さそいの文", "さそいを受ける → Yes, let's.", "事実の答え（we do など）は合わない"], fill: [[["A: Shall we play tennis?", "blue", "さそい"]], [["B: Yes, let's.", "red", "返事"]]], band: "① Yes, let's.", bads: ["② Yes, we do.（事実の答え）", "③ No, we aren't.（事実の答え）", "④ Yes, you shall.（会話にならない）"], good: "① Yes, let's.  ○", mb: "Yes, we do.", mg: "Yes, let's.", mode: "返事として自然なものを選ぼう", notes: ["【状況】「放課後にテニスをしませんか」というさそいに対する、返事として最も適切なものを選びます。", "【手がかり】Shall we 〜? は「〜しましょうか」と相手をさそう文です。事実をたずねる文ではありません。", "【理由】Shall we 〜?（いっしょに〜しましょうか）は、相手をさそう表現です。「はい・いいえ」で事実を答える文ではないので、Yes, we do. のように do で受けることはできません。さそいに応じるときは Yes, let's.、ことわるときは No, let's not. や I'm sorry, I can't. のように答えます。", "【当てはめ】Shall we 〜? は「〜しましょうか」と、相手をさそう文だと見ぬきます。 さそいを受ける返事は、Let's 〜. の形です。「うん、そうしよう」は Yes, let's. です。 選択肢の中で、さそいへの返事として成り立つのは ① だけです。", "【答え】① Yes, let's.", "【確かめ】「テニスをしませんか」「うん、しよう」と会話がつながります。② Yes, we do. は「私たちはしている」の意味で、さそいに合いません。③ No, we aren't. も事実を答える形で合いません。④ Yes, you shall. は会話として成り立ちません。", "【よくあるまちがい】Shall we 〜? を Do we 〜?（私たちは〜しますか）と同じだと考えて、do で答えてしまうことです。Shall we 〜? はさそいなので、Let's で答えます。"] },
  "Shall we 〜? への返事",
);
const f05 = make(
  { tiles: [[["There", "gray", "形だけの語"], ["＿＿＿＿", "red", "be動詞"], ["two cats", "blue", "複数"], ["under the table", "gray", "場所"]]], cue: "two cats ＝ 複数", cuelab: "be動詞はこの数で決まる", rule: ["There is ＋ 単数の名詞", "There are ＋ 複数の名詞", "数を決めるのは There ではなく名詞"], fill: [[["There", "gray", "形だけの語"], ["are", "red", "答え"], ["two cats", "blue", "複数"], ["under the table", "gray", "場所"]]], band: "② are", bads: ["① is（単数用）", "③ has（「持っている」の意味）", "④ have（「持っている」の意味）"], good: "② are  ○", mb: "There is two cats", mg: "There are two cats", mode: "空所に入る語を選ぼう", notes: ["【状況】「テーブルの下にネコが2ひきいます」という文の、空所に入る語を選びます。", "【手がかり】空所のあとの名詞は two cats（2ひき）で複数です。be動詞はこの名詞の数に合わせます。", "【理由】There is / are 〜.（〜がいる・ある）の be動詞は、あとに来る名詞に合わせます。単数なら is、複数なら are を使います。主語に見える There は形だけの語で、数を決めるのは、あとの two cats です。", "【当てはめ】空所のあとの名詞を見ます。two cats（2ひきのネコ）で、複数です。 複数なので、be動詞は are を使います。 There are two cats under the table. となります。", "【答え】② are（There are two cats under the table.）", "【確かめ】「テーブルの下にネコが2ひきいる」と自然です。① is は単数の名詞に使う形です。③ has と ④ have は「持っている」の意味で、「いる・ある」を表す There 〜 の文では使いません。", "【よくあるまちがい】There is をひとかたまりで覚えてしまい、あとが複数でも is を入れることです。あとの名詞が何ひき（何個）かを必ず見ます。"] },
  "There is / are 〜. の使い分け",
);
const f06 = make(
  { tiles: [[["If it", "blue", "条件の節"], ["＿＿＿＿", "red", "動詞の形"], ["tomorrow,", "green", "未来の語"], ["we will stay home.", "gray", "主文"]]], cue: "If 〜 tomorrow ＝ 条件", cuelab: "未来の話だが、条件の節の中", rule: ["if・when の節の中は現在形", "will は主文（we will 〜）に使う", "it は3人称単数 → rain に s"], fill: [[["If it", "blue", "条件の節"], ["rains", "red", "答え"], ["tomorrow,", "green", "未来の語"], ["we will stay home.", "gray", "主文"]]], band: "① rains", bads: ["② will rain（条件の節に will は×）", "③ rained（過去形）", "④ is raining（いま降っている最中）"], good: "① rains  ○", mb: "If it will rain", mg: "If it rains", mode: "空所に入る形を選ぼう", notes: ["【状況】「もしあした雨がふったら、私たちは家にいます」という文の、空所に入る動詞の形を選びます。", "【手がかり】If it ______ tomorrow は「もしあした〜なら」という条件の節です。未来の話でも、節の中の書き方に決まりがあります。", "【理由】if（もし〜ならば）や when（〜のとき）が作る「条件・時」の節の中では、未来のことでも動詞は現在形で書きます。未来を表す will は、主文のほう（we will stay home）が受け持ちます。英語では、条件の節は「もし〜という状況なら」とその場の状況を述べる形で書くので、will を入れません。", "【当てはめ】If がつくる節（If it ______ tomorrow）は、「もし〜なら」という条件の節です。 条件の節では、tomorrow があっても will を使わず、現在形にします。 it は3人称単数なので、rain に s をつけて rains にします。主文は we will stay home のままです。", "【答え】① rains（If it rains tomorrow, we will stay home.）", "【確かめ】「もしあした雨ならば、私たちは家にいる」と自然です。② will rain は条件の節に will を入れてしまった形です。③ rained は過去形で、tomorrow と合いません。④ is raining は「いま降っている最中」の形で、未来の条件になりません。", "【よくあるまちがい】tomorrow があるから will を使う、と考えてしまうことです。if や when の節の中は、未来でも現在形です。will は主文に使います。"] },
  "if の節は未来でも現在形",
);
const f07 = make(
  { tiles: [[["My father", "blue", "主語"], ["enjoys", "gray", "動詞"], ["＿＿＿＿", "red", "動作の形"], ["pictures of birds", "green", "何を"]]], cue: "enjoy ＋ ＿＿", cuelab: "enjoy が続けられる形は決まっている", rule: ["enjoy ＋ ing形（動名詞）", "to 〜 は enjoy のあとでは使えない", "take → taking（e をとって ing）"], fill: [[["My father", "blue", "主語"], ["enjoys", "gray", "動詞"], ["taking", "red", "答え"], ["pictures of birds", "green", "何を"]]], band: "② taking", bads: ["① to take（enjoy のあとは to × ）", "③ take（原形は続けられない）", "④ took（過去形は続けられない）"], good: "② taking  ○", mb: "enjoys to take", mg: "enjoys taking", mode: "空所に入る形を選ぼう", notes: ["【状況】「私の父は鳥の写真をとることを楽しんでいます」という文の、空所に入る動詞の形を選びます。", "【手がかり】enjoy のあとに動詞を続ける形には決まりがあります。ここが選択のかぎです。", "【理由】enjoy は「〜することを楽しむ」の意味で、あとに動詞を続けるときは、動詞を ing形（動名詞）にします。to不定詞（to 〜）は続けられません。同じ仲間の動詞に finish（〜し終える）、stop（〜をやめる）、mind（〜を気にする）があります。", "【当てはめ】enjoy のあとに動作を表す語を置く形を考えます。enjoy は ing形を目的語にとる動詞です。 take の ing形は、e をとって taking です。 enjoys taking pictures of birds（鳥の写真をとることを楽しむ）となります。", "【答え】② taking（My father enjoys taking pictures of birds.）", "【確かめ】「鳥の写真をとることを楽しんでいる」と自然です。① to take は、enjoy のあとには使えません。③ take（原形）と ④ took（過去形）は、enjoy のあとに続けられない形です。", "【よくあるまちがい】want のように、to不定詞（to 〜）を続けてしまうことです。enjoy・finish・stop・mind のあとは ing形と覚えます。"] },
  "enjoy のあとは ing形",
);
const f08 = make(
  { tiles: [[["I'm looking", "blue", "主語＋動詞"], ["forward to", "gray", "熟語"], ["＿＿＿＿", "red", "動詞の形"], ["you again", "green", "何を"]]], cue: "forward to ＝ 前置詞の to", cuelab: "to不定詞の to ではない", rule: ["look forward to 〜 ＝ 〜を楽しみに待つ", "この to は前置詞", "前置詞のあとの動詞は ing形"], fill: [[["I'm looking", "blue", "主語＋動詞"], ["forward to", "gray", "熟語"], ["seeing", "red", "答え"], ["you again", "green", "何を"]]], band: "③ seeing", bads: ["① see（前置詞のあとに原形は×）", "② saw（過去形は×）", "④ to see（to が重なる）"], good: "③ seeing  ○", mb: "forward to see", mg: "forward to seeing", mode: "空所に入る形を選ぼう", notes: ["【状況】「私はあなたにまた会うのを楽しみにしています」という文の、空所に入る形を選びます。", "【手がかり】look forward to 〜 の最後の to は、前置詞です。to不定詞の to とは別ものです。", "【理由】look forward to 〜 は「〜を楽しみに待つ」という熟語です。この最後の to は、to不定詞の to ではなく前置詞の to です。前置詞のあとに動詞を置くときは、動詞を ing形（動名詞）にします。", "【当てはめ】look forward to 〜 は「〜を楽しみに待つ」という熟語です。 この to は前置詞です。前置詞のあとに動詞を置くなら、ing形にします。 see の ing形は seeing です。looking forward to seeing you again となります。", "【答え】③ seeing（I'm looking forward to seeing you again.）", "【確かめ】「またあなたに会うのを楽しみにしている」と自然です。① see（原形）と ② saw（過去形）は、前置詞のあとには置けません。④ to see は、to が重なってしまい、熟語の形にならなくなります。", "【よくあるまちがい】to のあとだから原形、と考えてしまうことです（to不定詞だと思いこむ）。look forward to の to は前置詞なので、ing形にします。"] },
  "look forward to のあとは ing形",
);
const f09 = make(
  { tiles: [[["How", "blue", "たずねる"], ["＿＿＿＿", "red", "何の程度"], ["does it take", "gray", "かかる"], ["ten minutes", "green", "返事"]]], cue: "About ten minutes ＝ 時間", cuelab: "返事から、たずねる中身がわかる", rule: ["How long ＝ 時間・長さ", "How far ＝ 距離（どのくらい遠い）", "How many ＝ 数／How old ＝ 年齢"], fill: [[["How", "blue", ""], ["long", "red", "答え"], ["does it take", "gray", "かかる"], ["ten minutes", "green", "返事"]]], band: "③ long", bads: ["① many（数をたずねる）", "② old（年齢や古さをたずねる）", "④ far（距離をたずねる）"], good: "③ long  ○", mb: "How far（距離）", mg: "How long（時間）", mode: "空所に入る語を選ぼう", notes: ["【状況】「駅まで歩いてどのくらい時間がかかりますか」というたずねの文の、空所に入る語を選びます。", "【手がかり】返事は About ten minutes.（約10分）。時間の長さを答えているので、時間をたずねる文です。", "【理由】How のあとに形容詞や副詞を置くと、程度をたずねる文になります。how long は「どのくらいの長さ（時間）」、how many は「いくつ（数）」、how old は「何歳（古さ）」、how far は「どのくらい遠い（距離）」です。返事が About ten minutes（約10分）なので、たずねているのは時間の長さです。", "【当てはめ】返事を見ます。About ten minutes. は時間の長さを答えています。 時間の長さをたずねる語は How long です。 How long does it take to get to the station on foot? となります。", "【答え】③ long（How long does it take to get to the station on foot?）", "【確かめ】「駅まで歩いてどのくらいかかりますか」「約10分です」と会話がつながります。① many は数、② old は年齢や古さ、④ far は距離をたずねる語で、「約10分」という返事に合いません。", "【よくあるまちがい】How far と How long を混ぜてしまうことです。道のりの長さ（距離）は How far、かかる時間は How long と、答えの内容で選びます。"] },
  "How long（かかる時間）",
);
const f10 = make(
  { tiles: [[["Can I use", "gray", "〜を使う"], ["＿＿＿＿", "red", "あなたの○○"], ["?", "gray", ""]]], cue: "あとに名詞が無い", cuelab: "「あなたのペン」を1語で言う", rule: ["所有格 ＋ 名詞 ＝ 所有代名詞（1語）", "your pen ＝ yours", "your はあとに名詞が必要"], fill: [[["Can I use", "gray", "〜を使う"], ["yours", "red", "答え"], ["?", "gray", ""]], [["＝ your pen", "purple", "言いかえ"]]], band: "③ yours", bads: ["① you（「あなたを」）", "② your（あとに名詞が必要）", "④ yourself（「あなた自身」）"], good: "③ yours  ○", mb: "use your（名詞なし）", mg: "use yours", mode: "空所に入る語を選ぼう", notes: ["【状況】「ペンを忘れました。あなたのを使ってもいいですか」という文の、空所に入る語を選びます。", "【手がかり】空所のあとに名詞がありません。「あなたのペン」を1語にした形が入ります。", "【理由】所有代名詞（mine・yours・his・hers・ours・theirs）は、「〜のもの」を表し、「所有格 ＋ 名詞」を1語にまとめた形です。your pen は yours の1語で言えます。your のような所有格は、あとに名詞が必要です。名詞が省かれているときは、所有代名詞を使います。", "【当てはめ】空所は use（〜を使う）のあとの目的語です。使いたいのは「あなたのペン」です。 your pen（所有格 ＋ 名詞）は、1語で yours と言いかえられます。 Can I use yours? ＝ Can I use your pen? となります。", "【答え】③ yours（Can I use yours?）", "【確かめ】「あなたのを使ってもいい？」と自然です。① you は「あなたを」で、ものを表せません。② your はあとに名詞が必要で、空所のあとに名詞がありません。④ yourself は「あなた自身」で、意味が合いません。", "【よくあるまちがい】your を入れて、名詞を書き忘れることです。名詞を省くときは、yours のように「〜のもの」の形にします。"] },
  "所有代名詞 yours",
);
const f11 = make(
  { tiles: [[["There is", "gray", ""], ["＿＿＿＿", "red", "少ない"], ["water", "blue", "数えられない"], ["in the bottle.", "gray", ""]]], cue: "water ＝ 数えられない名詞", cuelab: "1つ・2つと数えない", rule: ["数えられない名詞 → little", "数えられる名詞（複数）→ few", "a がつくと「少しある」の意味"], fill: [[["There is", "gray", ""], ["little", "red", "答え"], ["water", "blue", "数えられない"], ["in the bottle.", "gray", ""]]], band: "② little", bads: ["① few（数えられる名詞用）", "③ many（数えられる名詞用）", "④ a few（数えられる名詞用）"], good: "② little  ○", mb: "few water", mg: "little water", mode: "空所に入る語を選ぼう", notes: ["【状況】「ボトルの中に水がほとんどありません。もっと買う必要があります」という文の、空所に入る語を選びます。", "【手がかり】water（水）は、1つ・2つと数えられない名詞です。そのため、使える語が決まります。", "【理由】water（水）のような、1つ・2つと数えられない名詞には、「ほとんどない」は little を使います。数えられる名詞には few を使います。また、little・few のように a がつかないときは「ほとんどない（足りない）」、a little・a few のように a がつくときは「少しある」という意味です。", "【当てはめ】water は数えられない名詞です（1つ・2つと数えません）。 数えられない名詞に「ほとんどない」を言う語は little（a がつかない）です。 We need to buy more（もっと買う必要がある）とつながり、足りないという意味と合います。", "【答え】② little（There is little water in the bottle.）", "【確かめ】「ボトルに水がほとんどない。もっと買う必要がある」と自然です。① few ③ many ④ a few は、どれも数えられる名詞（複数形）といっしょに使う語で、water には使えません。", "【よくあるまちがい】few と little を逆に使ってしまうことです。数えられる名詞なら few、数えられない名詞なら little と、名詞の種類で見分けます。"] },
  "little と few の使い分け",
);
const f12 = make(
  { tiles: [[["The news", "blue", "主語"], ["made", "gray", "動詞"], ["my mother", "green", "人"], ["＿＿＿＿", "red", "どんな状態？"]]], cue: "made ＋ 人 ＋ ＿＿", cuelab: "人を「どんな状態」にしたか", rule: ["make ＋ 人 ＋ 形容詞", "＝ 人を〜の状態にする", "副詞（happily）は状態を表せない"], fill: [[["The news", "blue", "主語"], ["made", "gray", "動詞"], ["my mother", "green", "人"], ["happy", "red", "答え"]]], band: "② happy", bads: ["① happily（副詞は×）", "③ to be happy（この形は使えない）", "④ being happy（この形は使えない）"], good: "② happy  ○", mb: "made … happily", mg: "made … happy", mode: "空所に入る形を選ぼう", notes: ["【状況】「そのニュースは私の母を喜ばせました」という文の、空所に入る語（句）を選びます。", "【手がかり】made のあとに my mother（人）があり、そのあとには人の状態を表す語が続きます。", "【理由】make ＋ 人 ＋ 形容詞 は「人を〜の状態にする」という形です。目的語（人）のあとには、その人の状態を表す形容詞を置きます。happily のような副詞は動詞を説明する語で、人の状態を表すことはできません。", "【当てはめ】made のあとに my mother（人）があります。そのあとに「どんな状態にしたか」を言う語が必要です。 人の状態を表す語は形容詞です。「うれしい」は happy です。 The news made my mother happy.（そのニュースは母をうれしい気持ちにした）となります。", "【答え】② happy（The news made my mother happy.）", "【確かめ】「そのニュースは母をうれしくさせた」と自然です。① happily は副詞で、人の状態を表せません。③ to be happy と ④ being happy は、make のあとの形としては使えません。", "【よくあるまちがい】日本語の「喜ばせた」につられて、動詞や副詞の形を探してしまうことです。make ＋ 人 ＋ 形容詞 は「人を〜（の状態）にする」と覚えます。"] },
  "make ＋ 人 ＋ 形容詞",
);
const f13 = make(
  { tiles: [[["Mr. Sato", "blue", "主語"], ["＿＿＿＿", "red", "教えた"], ["us", "green", "人"], ["English", "green", "教科"], ["last year", "gray", "過去"]]], cue: "us English ＝ 人 ＋ 教科", cuelab: "「人に教科を教える」", rule: ["「教える」→ teach ＋ 人 ＋ 物", "last year があるので過去形", "teach − taught − taught"], fill: [[["Mr. Sato", "blue", "主語"], ["taught", "red", "答え"], ["us", "green", "人"], ["English", "green", "教科"], ["last year", "gray", "過去"]]], band: "③ taught", bads: ["① said（言葉を言う）", "② spoke（言語を話す・人を取らない）", "④ told（人に内容を伝える）"], good: "③ taught  ○", mb: "teached", mg: "taught", mode: "空所に入る動詞を選ぼう", notes: ["【状況】「佐藤先生は昨年、私たちに英語を教えてくれました」という文の、空所に入る動詞を選びます。", "【手がかり】us English（私たちに英語を）と「人 ＋ 物」が続いています。「教える」という意味の動詞が入ります。", "【理由】「人に（教科や物を）教える」は teach ＋ 人 ＋ 物 の形で表します。say は言葉を言う、speak は言語を話す、tell は人に内容を伝える、という意味で、「人に教科を教える」とは言えません。last year（昨年）があるので過去形にし、teach − taught − taught と変わるので taught になります。", "【当てはめ】us English は「人 ＋ 物」が続く形です。「人に英語を教える」意味の動詞を探します。 「教える」は teach です。 last year（昨年）があるので過去形にします。teach − taught − taught の変化です。", "【答え】③ taught（Mr. Sato taught us English last year.）", "【確かめ】「佐藤先生は昨年、私たちに英語を教えてくれた」と自然です。① said は say ＋ 言葉、② spoke は speak ＋ 言語（人を目的語にしない）の形です。④ told は tell ＋ 人 ＋ 話の内容の形で、English という科目を教える意味にはなりません。", "【よくあるまちがい】teach の過去形を teached と書いてしまうことです。teach − taught − taught は不規則に変わります。"] },
  "teach の過去形 taught",
);
const f14 = make(
  { tiles: [[["My mother", "blue", "主語"], ["told", "gray", "言った"], ["me", "green", "人"], ["＿＿＿＿", "red", "〜するように"], ["my homework…", "gray", ""]]], cue: "told ＋ me ＋ ＿＿", cuelab: "人に「〜するように」言う", rule: ["tell ＋ 人 ＋ to ＋ 原形", "＝ 人に〜するように言う", "let・make は to なし（別の型）"], fill: [[["My mother", "blue", "主語"], ["told", "gray", "言った"], ["me", "green", "人"], ["to do", "red", "答え"], ["my homework…", "gray", ""]]], band: "② to do", bads: ["① do（let・make の型）", "③ doing（この形は使えない）", "④ did（この形は使えない）"], good: "② to do  ○", mb: "told me do", mg: "told me to do", mode: "空所に入る形を選ぼう", notes: ["【状況】「母は私に、夕食前に宿題をするようにと言いました」という文の、空所に入る形を選びます。", "【手がかり】told のあとに me（人）があり、そのあとに「何をするように言ったか」が続きます。", "【理由】tell ＋ 人 ＋ to ＋ 動詞の原形 は「人に〜するように言う」という形です。同じ形をとる動詞に ask（頼む）や want（してほしい）があります。目的語（人）のあとに to 不定詞を置くのが決まりで、let や make のように「人 ＋ 原形」とする動詞とは区別します。", "【当てはめ】told のあとに me（人）があります。「人に〜するように言う」の形です。 tell ＋ 人 ＋ to ＋ 原形 の型を当てはめます。 to do my homework before dinner（夕食前に宿題をするように）となります。", "【答え】② to do（My mother told me to do my homework before dinner.）", "【確かめ】「母は私に、夕食前に宿題をするように言った」と自然です。① do（原形）は let や make の型です。③ doing と ④ did は、told me のあとの形として使えません。", "【よくあるまちがい】let や make の型（人 ＋ 原形）と混ぜてしまい、to をつけ忘れることです。tell・ask・want ＋ 人 ＋ to 原形 と覚えます。"] },
  "tell ＋ 人 ＋ to 原形",
);
const f15 = make(
  { tiles: [[["She is", "blue", "主語"], ["＿＿＿＿", "red", "程度の語"], ["young", "gray", "形容詞"], ["to go to the party", "green", "to＋原形"], ["alone.", "gray", ""]]], cue: "「幼すぎて行けない」", cuelab: "to go と続く形", rule: ["too ＋ 形容詞 ＋ to ＋ 原形", "＝ 〜すぎて…できない", "so 〜 that ... は別の型"], fill: [[["She is", "blue", "主語"], ["too", "red", "答え"], ["young", "gray", "形容詞"], ["to go to the party", "green", "to＋原形"], ["alone.", "gray", ""]]], band: "③ too", bads: ["① so（so 〜 that の型）", "② very（「できない」にならない）", "④ enough（位置も意味も合わない）"], good: "③ too  ○", mb: "so young to go", mg: "too young to go", mode: "空所に入る語を選ぼう", notes: ["【状況】「彼女は幼すぎて、ひとりでパーティーに行けません」という文の、空所に入る語を選びます。", "【手がかり】「幼すぎて行けない」と言うとき、「形容詞 ＋ to ＋ 原形」と続く型を使います。", "【理由】too ＋ 形容詞 ＋ to ＋ 動詞の原形 は「〜すぎて…できない」という形です。too は「ちょうどよい程度を超えている」という意味で、not などの否定の語がなくても、「できない」という意味を含みます。", "【当てはめ】日本語は「幼すぎて行けない」です。「〜すぎて…できない」の型を探します。 その型は too ＋ 形容詞 ＋ to ＋ 原形 です。 She is too young to go to the party alone. となります。", "【答え】③ too（She is too young to go to the party alone.）", "【確かめ】「彼女は幼すぎて、ひとりでパーティーに行けない」と自然です。① so は so 〜 that の形（so young that she can't go）で、to go とは続きません。② very は程度を強めるだけで、「できない」の意味になりません。④ enough は形容詞のあとに置く語（young enough to）で、位置も意味も合いません。", "【よくあるまちがい】so と too を混ぜてしまうことです。so ＋ 形容詞 ＋ that 〜 と、too ＋ 形容詞 ＋ to 〜 は、続ける形がちがいます。"] },
  "too 〜 to ...（〜すぎて…できない）",
);
const f16 = make(
  { tiles: [[["＿＿＿＿", "red", "つなぎの語"], ["beautiful", "gray", "形容詞"], ["flower", "blue", "名詞"], ["this is!", "gray", ""]]], cue: "beautiful flower ＝ 形容詞＋名詞", cuelab: "名詞があるかどうかが分かれ目", rule: ["名詞あり → What a/an ＋ 形容詞 ＋ 名詞", "形容詞だけ → How ＋ 形容詞", "flower は単数 → a が必要"], fill: [[["What a", "red", "答え"], ["beautiful", "gray", "形容詞"], ["flower", "blue", "名詞"], ["this is!", "gray", ""]]], band: "④ What a", bads: ["① How（形容詞だけの型）", "② What（単数なので a が足りない）", "③ How a（こういう形はない）"], good: "④ What a  ○", mb: "How beautiful flower", mg: "What a beautiful flower", mode: "空所に入る語（句）を選ぼう", notes: ["【状況】「これは何て美しい花でしょう！」という感嘆文の、空所に入る語（句）を選びます。", "【手がかり】空所のあとに beautiful flower（形容詞 ＋ 名詞）が続いています。名詞があるかどうかで型が変わります。", "【理由】感嘆文には2つの型があります。What ＋ (a / an) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞！と、How ＋ 形容詞（副詞）＋ 主語 ＋ 動詞！です。空所のあとに「形容詞 ＋ 名詞」（beautiful flower）が続いているので、What の型を使います。flower は数えられる単数の名詞なので、a が必要です。", "【当てはめ】空所のあとを見ます。beautiful flower は「形容詞 ＋ 名詞」のかたまりです。 名詞があるときは What の型を使います。How は形容詞だけのときに使う型です。 flower は数えられる単数の名詞なので、a が必要です。What a beautiful flower this is! となります。", "【答え】④ What a（What a beautiful flower this is!）", "【確かめ】「何て美しい花でしょう」と自然です。① How は、How beautiful this flower is! のように形容詞だけが続くときの型です。② What だけでは、単数の flower に必要な a が足りません。③ How a という形はありません。", "【よくあるまちがい】What と How を混ぜてしまうことです。名詞があれば What（a）、形容詞・副詞だけなら How と覚えます。"] },
  "感嘆文：What a 〜 ！",
);
const f17 = make(
  { tiles: [[["Hurry up,", "blue", "命令文"], ["＿＿＿＿", "red", "つなぎの語"], ["you will miss the bus.", "green", "おくれる"]]], cue: "Hurry up, ＝ 命令文", cuelab: "あとは「急がないとどうなるか」", rule: ["命令文, and 〜 ＝ そうすれば（よい結果）", "命令文, or 〜 ＝ さもないと（悪い結果）", "バスに乗りおくれる ＝ 悪い結果"], fill: [[["Hurry up,", "blue", "命令文"], ["or", "red", "答え"], ["you will miss the bus.", "green", "悪い結果"]]], band: "② or", bads: ["① and（「急げばおくれる」になる）", "③ but（逆接で合わない）", "④ so（命令文のあとには続かない）"], good: "② or  ○", mb: "Hurry up, and …", mg: "Hurry up, or …", mode: "空所に入る語を選ぼう", notes: ["【状況】「急ぎなさい。さもないとバスに乗りおくれますよ」という文の、空所に入る語を選びます。", "【手がかり】Hurry up,（急ぎなさい）は命令文です。あとの文は、急がなかったときの悪い結果になっています。", "【理由】命令文のあとに and を続けると「…しなさい、そうすれば〜」、or を続けると「…しなさい、さもないと〜」という意味になります。前半の「急ぎなさい」の命令文のあとに、急がなかったときの悪い結果（バスに乗りおくれる）が続いているので、or を使います。", "【当てはめ】前半の Hurry up（急ぎなさい）は、命令文です。 後半の you will miss the bus（バスに乗りおくれる）は、急がなかったときの悪い結果です。 悪い結果を続けるときは、or（さもないと）を使います。", "【答え】② or（Hurry up, or you will miss the bus.）", "【確かめ】「急ぎなさい。さもないとバスに乗りおくれますよ」と自然です。① and だと「急げばバスに乗りおくれる」となり、意味が逆です。③ but は逆接で合いません。④ so は理由と結果をつなぐ語で、命令文のあとには続きません。", "【よくあるまちがい】and と or を逆にしてしまうことです。「そうすれば（よい結果）」なら and、「さもないと（悪い結果）」なら or と、あとの内容で決めます。"] },
  "命令文, or 〜（さもないと）",
);
const f18 = make(
  { tiles: [[["I", "blue", "主語"], ["＿＿＿＿", "red", "動詞の形"], ["a bath", "gray", ""], ["when the phone rang.", "green", "過去の出来事"]]], cue: "when the phone rang", cuelab: "過去の一瞬の出来事", rule: ["「そのとき〜していた」＝ 過去進行形", "was / were ＋ 動詞の ing形", "I → was　take → taking"], fill: [[["I", "blue", "主語"], ["was taking", "red", "答え"], ["a bath", "gray", ""], ["when the phone rang.", "green", "過去の出来事"]]], band: "② was taking", bads: ["① take（過去の文にならない）", "③ am taking（現在進行形）", "④ have taken（現在完了）"], good: "② was taking  ○", mb: "I take a bath", mg: "I was taking", mode: "空所に入る形を選ぼう", notes: ["【状況】「電話が鳴ったとき、私はおふろに入っていました」という文の、空所に入る動詞の形を選びます。", "【手がかり】when the phone rang（電話が鳴ったとき）は過去の一瞬の出来事です。そのとき進行中だった動作を述べます。", "【理由】過去のある時点で「〜している最中だった」ことは、過去進行形（was / were ＋ ing形）で表します。when the phone rang（電話が鳴ったとき）は、過去の一瞬の出来事です。その瞬間にしていた「進行中の動作」を、過去進行形で言います。", "【当てはめ】rang（鳴った）は過去の一瞬の出来事です。その時の状況を説明する文です。 「そのとき〜している最中だった」は、過去進行形 was / were ＋ ing形で表します。 主語 I なので was、take の ing形は e をとって taking です。was taking となります。", "【答え】② was taking（I was taking a bath when the phone rang.）", "【確かめ】「電話が鳴ったとき、おふろに入っている最中だった」と自然です。① take は原形で、過去の文として成り立ちません。③ am taking は現在進行形、④ have taken は現在完了で、どちらも rang（過去）と時間が合いません。", "【よくあるまちがい】when があるから過去形でよい、と考えてしまうことです。「そのとき〜している最中」と言いたいときは、過去進行形を使います。"] },
  "過去進行形：そのとき〜していた",
);
const f19 = make(
  { tiles: [[["I thought", "blue", "主文（過去）"], ["that", "gray", ""], ["he", "gray", "主語"], ["＿＿＿＿", "red", "動詞の形"], ["sick.", "gray", ""]]], cue: "thought ＝ 過去形", cuelab: "that 以下も時制をそろえる", rule: ["主文が過去形 → that 以下も過去形", "これを「時制の一致」という", "is → was／will → would"], fill: [[["I thought", "blue", "主文（過去）"], ["that", "gray", ""], ["he", "gray", "主語"], ["was", "red", "答え"], ["sick.", "gray", ""]]], band: "② was", bads: ["① is（現在形・時制がそろわない）", "③ will be（未来の形）", "④ has been（現在完了）"], good: "② was  ○", mb: "thought … is sick", mg: "thought … was sick", mode: "空所に入る形を選ぼう", notes: ["【状況】「私は彼が病気だと思いました」という文の、空所に入る動詞の形を選びます。", "【手がかり】主文の動詞 thought は過去形です。that 以下の動詞の時制は、これにそろえます。", "【理由】主文の動詞が過去形（thought）のとき、that 以下の動詞も過去の形にそろえます。これを時制の一致といいます。「思った」のは過去で、そのとき「病気だった（病気だと思った）」ので、that 以下も過去形にします。", "【当てはめ】主文の動詞 thought は、過去形です。 that 以下は「思った」ときの状態を表すので、動詞を過去の形にそろえます（時制の一致）。 is の過去形は was です。I thought that he was sick. となります。", "【答え】② was（I thought that he was sick.）", "【確かめ】「私は彼が病気だと思った」と、時制がそろった文になります。① is は現在形で、thought（過去）とそろいません。③ will be は未来の形（would be なら時制の一致で正しい形）です。④ has been は現在完了で、過去の文に合いません。", "【よくあるまちがい】意味から、いまも病気だと考えて is を選んでしまうことです。主文が過去なら that 以下も過去形にそろえる、という決まりを優先します。"] },
  "時制の一致",
);
const f20 = make(
  { tiles: [[["My mother", "blue", "主語"], ["let", "gray", "させる"], ["me", "green", "人"], ["＿＿＿＿", "red", "動作の形"], ["to the party.", "gray", ""]]], cue: "let ＋ me ＋ ＿＿", cuelab: "人に「〜させる」", rule: ["let ＋ 人 ＋ 原形（to なし）", "＝ 人に〜させる（許す）", "tell・ask・want は to ＋ 原形"], fill: [[["My mother", "blue", "主語"], ["let", "gray", "させる"], ["me", "green", "人"], ["go", "red", "答え"], ["to the party.", "gray", ""]]], band: "① go", bads: ["② to go（let のあとに to は×）", "③ going（原形ではない）", "④ went（原形ではない）"], good: "① go  ○", mb: "let me to go", mg: "let me go", mode: "空所に入る形を選ぼう", notes: ["【状況】「母は私がそのパーティーに行くのを許してくれました」という文の、空所に入る形を選びます。", "【手がかり】let me ... は「私に〜させる（許す）」の形です。人のあとに続く動詞の形が選ぶポイントです。", "【理由】let ＋ 人 ＋ 動詞の原形 は「人に〜させる（〜するのを許す）」という形です。make・let・have のような「させる」動詞の目的語（人）のあとでは、to をつけない原形を使います。tell・ask・want のあとの to ＋ 原形 とは別の型です。", "【当てはめ】let me ... は「私に〜させてくれる」という形です。 let ＋ 人 ＋ 原形 の型です。to はつけません。 go が原形です。My mother let me go to the party. となります。", "【答え】① go（My mother let me go to the party.）", "【確かめ】「母は私がパーティーに行くのを許してくれた」と自然です。② to go は、let のあとには使えない形です。③ going と ④ went（過去形）は、原形ではありません。", "【よくあるまちがい】tell の型と混ぜて、to go を選んでしまうことです。let・make は「人 ＋ 原形」、tell・ask・want は「人 ＋ to 原形」と区別します。"] },
  "let ＋ 人 ＋ 原形",
);
const f21 = make(
  { tiles: [[["A: Don't you like natto?", "blue", "問い（否定の形）"]], [["B: ＿＿＿＿ I don't eat it.", "red", "答え"]]], cue: "I don't eat it ＝ 否定の内容", cuelab: "「食べない」＝好きではない", rule: ["答えの内容が肯定 → Yes, I do.", "答えの内容が否定 → No, I don't.", "問いが否定文でも同じ決まり"], fill: [[["A: Don't you like natto?", "blue", "問い"]], [["B: No, I don't.", "red", "答え"]]], band: "② No, I don't.", bads: ["① Yes, I do.（「好き」の意味になる）", "③ Yes, I don't.（Yes と否定が食いちがう）", "④ No, I do.（No と肯定が食いちがう）"], good: "② No, I don't.  ○", mb: "Yes, I don't.", mg: "No, I don't.", mode: "答えとして正しいものを選ぼう", notes: ["【状況】「納豆は好きではないのですか」という問いに、「いいえ、好きではありません。食べません」と答える文を選びます。", "【手がかり】あとに I don't eat it（食べない）とあります。答えの内容は否定です。", "【理由】英語の Yes と No は、日本語の「はい・いいえ」とちがい、答えの内容で決まります。答えの内容が肯定（好き）なら Yes、否定（好きではない）なら No です。質問が否定の形（Don't you 〜?）でも、同じ決まりです。", "【当てはめ】答えの内容を見ます。I don't eat it（食べない）は、好きではないという否定の内容です。 否定の内容なので、No で始め、あとも否定の形（don't）にします。 No, I don't.（いいえ、好きではありません）となります。", "【答え】② No, I don't.", "【確かめ】「いいえ、好きではありません。食べません」と、前後がつながります。① Yes, I do. は「好き」という意味で、あとの I don't eat it と食いちがいます。③ Yes, I don't. は Yes と否定の形が食いちがい、文として成り立ちません。④ No, I do. も同じです。", "【よくあるまちがい】日本語の「はい（そのとおりです）」につられて、Yes, I don't. と書いてしまうことです。Yes と No は、答えの内容が肯定か否定かで決めます。"] },
  "否定疑問文への答え方",
);
const f22 = make(
  { tiles: [[["＿＿＿＿", "red", "つなぎの語"], ["it was cold,", "blue", "寒かった"], ["he went out", "green", "出かけた"], ["without a coat.", "green", "コートなし"]]], cue: "寒い → コートなし", cuelab: "予想とは反対の関係", rule: ["予想と反対の内容 → Though / Although", "because ＝ 理由、if ＝ 条件", "Though と but は重ねない"], fill: [[["Though", "red", "答え"], ["it was cold,", "blue", "寒かった"], ["he went out", "green", "出かけた"], ["without a coat.", "green", "コートなし"]]], band: "② Though", bads: ["① Because（理由になって合わない）", "③ If（条件になって合わない）", "④ So（文の最初に置けない）"], good: "② Though  ○", mb: "Though …, but …", mg: "Though …, …", mode: "空所に入る語を選ぼう", notes: ["【状況】「寒かったけれども、彼はコートを着ないで出かけました」という文の、空所に入る語を選びます。", "【手がかり】「寒い」なら、ふつうはコートを着ます。それなのに着ないという、予想と反対のつながりです。", "【理由】Though / Although は「〜だけれども」という意味の、逆接の接続詞です。前半の「寒い」と後半の「コートを着ない」は、ふつうの予想とは反対の関係なので、逆接でつなぎます。接続詞は、主語 ＋ 動詞の文と文をつなぐ語です。", "【当てはめ】前半と後半の関係を見ます。寒い → ふつうはコートを着るはずなのに、着ない。予想と反対です。 予想と反対の内容をつなぐのは、逆接の接続詞 Though（Although）です。 Though it was cold, he went out without a coat. となります。", "【答え】② Though（Though it was cold, he went out without a coat.）", "【確かめ】「寒かったけれども、コートを着ないで出かけた」と自然です。① Because は理由を表し、「寒かったので着なかった」となって意味が合いません。③ If は条件を表します。④ So は「だから」の意味で、文の最初には置けません。", "【よくあるまちがい】Though と but を重ねて使ってしまうことです（Though 〜, but ...）。どちらか1つだけを使います。"] },
  "Though（逆接の接続詞）",
);
const f23 = make(
  { tiles: [[["tired", "gray", ""], ["that", "gray", ""], ["was", "gray", ""], ["She", "gray", ""]], [["so", "gray", ""], ["went to bed early", "gray", ""], ["she", "gray", ""]]], cue: "so 〜 that ... ＝ とても〜なので…", cuelab: "原因の程度 → 結果", rule: ["so ＋ 形容詞 ＋ that ＋ 主語 ＋ 動詞", "「とても疲れていた」→ 原因の程度", "「早く寝た」→ that 以下の結果"], fill: [[["She", "blue", "主語"], ["was", "gray", ""], ["so", "red", "程度"], ["tired", "gray", "形容詞"]], [["that", "purple", "結果へ"], ["she", "blue", ""], ["went to bed early", "green", "結果"]]], band: "She was so tired that she went to bed early.", bads: ["× She was tired so that …（so の位置）", "× She was so tired she went …（that なし）", "× So she was tired that …（語順がちがう）"], good: "She was so tired that she went to bed early.", mb: "tired so（so の位置）", mg: "so tired（形容詞の前）", mode: "語（句）を並べかえよう", notes: ["【状況】7つの語（句）を並べかえて、「彼女はとても疲れていたので、早く寝ました」という英文を作ります。", "【手がかり】「とても疲れていたので、早く寝た」は、原因の程度とその結果をつなぐ形です。", "【理由】「とても〜なので…だ」は、so ＋ 形容詞 ＋ that ＋ 主語 ＋ 動詞 で表します。so ＋ 形容詞 が原因の程度を表し、that 以下がその結果を表します。that は、原因と結果をつなぐ役目をします。", "【当てはめ】文の土台を作ります。She was tired（彼女は疲れていた）です。 「とても」を so にして、形容詞 tired の前に置きます。She was so tired となります。 結果を that でつなぎます。that she went to bed early（早く寝た）を最後に置きます。", "【答え】She was so tired that she went to bed early.", "【確かめ】7つの語（句）をすべて使っています。「彼女は（She）とても（so）疲れていた（was … tired）ので（that）、早く寝た（she went to bed early）」と、日本文の順に対応しています。", "【よくあるまちがい】so を tired のあとに置いたり、that を忘れたりすることです。so は形容詞の前、that は結果の文の前に置きます。"] },
  "so 〜 that ...（とても〜なので…）",
);
const f24 = make(
  { tiles: [[["me", "gray", ""], ["you", "gray", ""], ["how", "gray", ""], ["Could", "gray", ""]], [["tell", "gray", ""], ["to get to", "gray", ""], ["the station", "gray", ""]]], cue: "Could you 〜? ＝ 丁寧な依頼", cuelab: "文の最初に置く", rule: ["Could you ＋ 原形 〜?（丁寧な依頼）", "tell ＋ 人（me）＋ 物（教える内容）", "「〜のしかた」＝ how to ＋ 原形"], fill: [[["Could", "blue", "依頼"], ["you", "blue", ""], ["tell", "gray", "教える"], ["me", "green", "人"]], [["how", "purple", ""], ["to get to", "purple", "行き方"], ["the station", "purple", "駅"]]], band: "Could you tell me how to get to the station?", bads: ["× Could you me tell …（tell の位置）", "× Could you tell how to me …（人の位置）", "× Do you tell me how …（依頼の形がちがう）"], good: "Could you tell me how to get to the station?", mb: "tell how to me", mg: "tell me how to", mode: "語（句）を並べかえよう", notes: ["【状況】7つの語（句）を並べかえて、「私に駅への行き方を教えてくれませんか」という英文を作ります。", "【手がかり】「教えてくれませんか」と丁寧に頼む文です。この形は文の最初に置きます。", "【理由】丁寧に頼むときは Could you 〜?（〜してくださいませんか）で始めます。「人に物を教える」は tell ＋ 人 ＋ 物 の順で、教える内容の「〜のしかた」は how to ＋ 動詞の原形 でまとめます。how to get to 〜 で「〜への行き方」です。", "【当てはめ】依頼の形を作ります。Could you 〜?（〜してくださいませんか）で始めます。 tell me（私に教える）を続けます。「人」が先、「教える内容」があとです。 教える内容は how to get to the station（駅への行き方）です。最後にクエスチョンマークをつけます。", "【答え】Could you tell me how to get to the station?", "【確かめ】7つの語（句）をすべて使っています。「教えてくれませんか（Could you tell）／私に（me）／駅への行き方を（how to get to the station）」と、意味のかたまりが対応しています。", "【よくあるまちがい】how to を、how do I のような疑問文の語順に直してしまうことです。how to ＋ 原形 は、ひとかたまりで「〜のしかた」と覚えます。"] },
  "Could you tell me how to 〜?",
);
const f25 = make(
  { tiles: [[["gave", "gray", ""], ["My father", "gray", ""], ["a nice watch", "gray", ""]], [["me", "gray", ""], ["for my birthday", "gray", ""]]], cue: "give ＋ 人 ＋ 物", cuelab: "「だれに」が先、「何を」があと", rule: ["give ＋ 人 ＋ 物 ＝ 人に物をあげる", "「だれに」を先に置く", "物を先なら give ＋ 物 ＋ to ＋ 人"], fill: [[["My father", "blue", "主語"], ["gave", "gray", "動詞"], ["me", "green", "人"]], [["a nice watch", "purple", "物"], ["for my birthday", "gray", "いつ"]]], band: "My father gave me a nice watch for my birthday.", bads: ["× gave a nice watch me …（人と物が逆）", "× My father me gave …（動詞の位置）", "× gave My father …（主語が先）"], good: "My father gave me a nice watch for my birthday.", mb: "gave a nice watch me", mg: "gave me a nice watch", mode: "語（句）を並べかえよう", notes: ["【状況】5つの語（句）を並べかえて、「父は私の誕生日にすてきな腕時計をくれました」という英文を作ります。", "【手がかり】「私に腕時計をくれた」は、人（私）が先、物（腕時計）があとの順になります。", "【理由】「人に物をあげる」は、give ＋ 人 ＋ 物 の順で表します。「だれに」を先、「何を」をあとに並べるのが決まりです。物を先に出すときは gave a nice watch to me のように to が必要ですが、この問題では to の語がないので、「人 → 物」の順にします。", "【当てはめ】主語と動詞を置きます。My father gave（父は〜をくれた）です。 「私に」（人）を先に置きます。gave me となります。 「すてきな腕時計を」（物）を続け、最後に for my birthday（私の誕生日に）を置きます。", "【答え】My father gave me a nice watch for my birthday.", "【確かめ】5つの語（句）をすべて使っています。「父は（My father）くれた（gave）／私に（me）／すてきな腕時計を（a nice watch）／誕生日に（for my birthday）」と、日本文と順に対応しています。", "【よくあるまちがい】gave a nice watch me のように、物を先に置いてしまうことです。「人 → 物」の順で、物を先に置くなら to me が必要です。"] },
  "give ＋ 人 ＋ 物",
);

export const figuresMoshi202612EigoKoko1: Record<string, Figure> = {
  moshi_2026_12_eigo_k01: f01,
  moshi_2026_12_eigo_k02: f02,
  moshi_2026_12_eigo_k03: f03,
  moshi_2026_12_eigo_k04: f04,
  moshi_2026_12_eigo_k05: f05,
  moshi_2026_12_eigo_k06: f06,
  moshi_2026_12_eigo_k07: f07,
  moshi_2026_12_eigo_k08: f08,
  moshi_2026_12_eigo_k09: f09,
  moshi_2026_12_eigo_k10: f10,
  moshi_2026_12_eigo_k11: f11,
  moshi_2026_12_eigo_k12: f12,
  moshi_2026_12_eigo_k13: f13,
  moshi_2026_12_eigo_k14: f14,
  moshi_2026_12_eigo_k15: f15,
  moshi_2026_12_eigo_k16: f16,
  moshi_2026_12_eigo_k17: f17,
  moshi_2026_12_eigo_k18: f18,
  moshi_2026_12_eigo_k19: f19,
  moshi_2026_12_eigo_k20: f20,
  moshi_2026_12_eigo_k21: f21,
  moshi_2026_12_eigo_k22: f22,
  moshi_2026_12_eigo_k23: f23,
  moshi_2026_12_eigo_k24: f24,
  moshi_2026_12_eigo_k25: f25,
};
