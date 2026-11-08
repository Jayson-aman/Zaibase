// 本試験対策 2027年2月号（高校受験・英語）担当A（k01〜k25）の動く図解。キーは問題ID。
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
  bads: string[]; good: string; mb: string; mg: string; mode: string; notes: string[]; bandchk?: string;
};
const make = (f: F, caption: string) =>
  show([
    sl(f.notes[0], rowsOf(f.tiles), bt(f.mode, 'gray')),
    sl(f.notes[1], b(30, 24, 260, 40, f.cue, 'blue', 15), t(160, 96, f.cuelab, 'gray', 12), bt('ここが手がかり', 'blue')),
    sl(f.notes[2], f.rule.map((r, i) => b(14, 18 + i * 38, 292, 30, r, (['blue', 'green', 'red'] as Col[])[i], 13)), bt('ルールをたしかめる', 'gray')),
    sl(f.notes[3], rowsOf(f.fill), bt('ルールを当てはめる', 'purple')),
    sl(f.notes[4], rowsOf(f.fill), bt(f.band, 'green')),
    sl(f.notes[5], chk(f.bads, f.good), bt(f.bandchk ?? 'ほかの3つは当てはまらない', 'green')),
    sl(f.notes[6], b(14, 30, 134, 36, f.mb, 'red', 13), a(150, 48, 170, 48, 'main'), b(172, 30, 134, 36, f.mg, 'green', 13), bt('気をつけるのはここ', 'red')),
  ], caption);



const f01 = make(
  {"tiles": [[["February is", "blue", "主語＋動詞"], ["the ＿＿＿＿", "red", "序数"]], [["month", "gray", "名詞"], ["of the year.", "gray", "1年の"]]], "cue": "the ＋ 序数 ＋ month", "cuelab": "「〜番目の月」と言いたい", "rule": ["the ＋ 序数 ＋ 名詞 ＝ 〜番目の…", "1番目 first・2番目 second・3番目 third", "数（two）・回数（twice）は順番を表せない"], "fill": [[["February is", "blue", "主語＋動詞"], ["the second", "red", "答え"]], [["month", "gray", "名詞"], ["of the year.", "gray", "1年の"]]], "band": "② second", "bads": ["① two（数であって順番ではない）", "③ twice（「2回」の意味）", "④ twelfth（12番目）"], "good": "the second month  ○", "mb": "two month", "mg": "the second month", "mode": "順番を表す語を探そう", "notes": ["【状況】「2月は1年の（　）番目の月です」という文の、空所に入る語を選びます。", "【手がかり】空所の前に the、あとに month があります。「〜番目の月」と言うときの形です。", "【理由】順番を言うときは、one・two・three のような数（基数）ではなく、first・second・third のような順番の語（序数）を使い、前に the をつけます。first・second・third は特別な形で、4番目からは four → fourth のように th をつけて作ります。2月は1月の次、つまり2番目の月なので、second を使います。", "【当てはめ】空所の前に the、あとに month があります。the ＋ 序数 ＋ month で「〜番目の月」という形です。2月は、1月（first）の次の月です。2番目なので、序数は second です。the second month of the year で「1年の2番目の月」となります。", "【答え】② second（February is the second month of the year.）", "【確かめ】1月は the first month、2月は the second month、3月は the third month と数えていくと、2月は second です。① two は数であって順番を表せません。③ twice は「2回」、④ twelfth は「12番目」で12月のことです。", "【よくあるまちがい】「2月」の「2」に引きずられて、two month と書いてしまうことです。順番を言うときは、two ではなく second です。"]},
  "序数（first・second・third）",
);

const f02 = make(
  {"tiles": [[["Both Ken and Mike", "blue", "主語（2人）"], ["＿＿＿", "red", "be動詞"]], [["members of", "gray", ""], ["the tennis club now.", "gray", "今"]]], "cue": "Both A and B ＝ 2人ぶん", "cuelab": "複数の主語として扱う", "rule": ["both A and B ＝ AもBも両方", "主語が複数 → be動詞は are", "now があるので現在形（was は不可）"], "fill": [[["Both Ken and Mike", "blue", "主語（2人）"], ["are", "red", "答え"]], [["members of", "gray", ""], ["the tennis club now.", "gray", "今"]]], "band": "③ are", "bads": ["① is（単数の主語に使う）", "② am（I にだけ使う）", "④ was（過去の形）"], "good": "Both Ken and Mike are  ○", "mb": "Mike is", "mg": "Ken and Mike are", "mode": "主語は何人か数えよう", "notes": ["【状況】「ケンもマイクも、今はテニス部の部員です」という文の、空所に入る be動詞を選びます。", "【手がかり】Both Ken and Mike は、ケンとマイクの2人ぶんです。これは複数の主語です。", "【理由】be動詞は、主語が何人（何個）か、いつの話かで決まります。both A and B は「AもBも両方」という意味で、2人（2つ）をまとめて言うので、複数の主語として扱います。複数の主語で現在の話なら、be動詞は are です。直前の Mike だけを見て is にしないことが大切です。", "【当てはめ】主語は Both Ken and Mike です。ケンとマイクの2人ぶんです。both A and B は複数の主語です。複数の主語の be動詞は、現在なら are です。文の最後に now（今）があるので、現在の形にします。Both Ken and Mike are members … となります。", "【答え】③ are（Both Ken and Mike are members of the tennis club now.）", "【確かめ】「ケンもマイクも、今はテニス部の部員です」と自然です。① is は単数の主語（he・she・it）に使う形、② am は I にしか使いません、④ was は過去の形で、now と合いません。", "【よくあるまちがい】すぐ前の Mike だけを見て、is を選んでしまうことです。both A and B は2人ぶんの複数なので are です。"]},
  "both A and B ＋ are",
);

const f03 = make(
  {"tiles": [[["A: ＿＿＿＿＿ bag", "red", "疑問詞"], ["is this?", "gray", "これは？"]], [["B: It's mine.", "blue", "私のもの"]]], "cue": "mine ＝ 私のもの", "cuelab": "持ち主を答えている", "rule": ["Whose ＋ 名詞 ＝ だれの〜（持ち主）", "Who ＝ だれ（人そのもの）", "Which ＝ どちら（選ばせる）"], "fill": [[["A: Whose bag", "red", "答え"], ["is this?", "gray", "これは？"]], [["B: It's mine.", "blue", "私のもの"]]], "band": "② Whose", "bads": ["① Who（Who bag とは言えない）", "③ Which（答えが mine にならない）", "④ What（種類をたずねる）"], "good": "Whose bag is this?  ○", "mb": "Who bag", "mg": "Whose bag", "mode": "答えの形から考えよう", "notes": ["【状況】「これはだれのかばんですか。」「私のものです。」という会話の、空所に入る疑問詞を選びます。", "【手がかり】B の答えは mine（私のもの）です。持ち主を答えているので、持ち主をたずねる質問になります。", "【理由】疑問詞は、たずねたい内容で使い分けます。「だれの〜」と持ち主をたずねるときは、Whose ＋ 名詞 の形を使います。答えのほうは、mine（私のもの）・Ken's（ケンのもの）のように、持ち主で答えます。B が It's mine. と持ち主を答えているので、A は持ち主をたずねる Whose です。", "【当てはめ】B の答え It's mine. を見ます。mine は「私のもの」で、持ち主を答えています。持ち主をたずねる疑問詞は Whose です。Whose ＋ 名詞（bag）で「だれのかばん」となります。Whose bag is this? ― It's mine. と会話がつながります。", "【答え】② Whose（Whose bag is this? ― It's mine.）", "【確かめ】「これはだれのかばんですか。」「私のものです。」と自然です。① Who は人そのものをたずねる語で、Who bag とは言えません。③ Which bag は「どのかばん」と選ばせる質問で、答えは mine になりません。④ What bag は種類をたずねる質問です。", "【よくあるまちがい】Who（だれ）と Whose（だれの）を取りちがえることです。あとに名詞（bag）が続いて「だれの〜」になるときは Whose です。"]},
  "疑問詞 Whose",
);

const f04 = make(
  {"tiles": [[["Please help", "blue", "勧める言い方"], ["＿＿＿＿＿＿", "red", "再帰代名詞"]], [["to the cookies", "gray", "クッキーを"], ["on the table.", "gray", "テーブルの上の"]]], "cue": "help ＋ ＿＿self ＋ to 〜", "cuelab": "「〜を自由にとって食べる」", "rule": ["help oneself to 〜 ＝ 自由にとって食べる", "oneself は主語と同じ人を指す形", "「あなた」なら yourself（I なら myself）"], "fill": [[["Please help", "blue", "勧める言い方"], ["yourself", "red", "答え"]], [["to the cookies", "gray", "クッキーを"], ["on the table.", "gray", "テーブルの上の"]]], "band": "③ yourself", "bads": ["① you（意味が通らない）", "② your（名詞の前の語）", "④ yours（あなたのもの）"], "good": "help yourself to  ○", "mb": "help you to", "mg": "help yourself to", "mode": "決まった言い方を探そう", "notes": ["【状況】「テーブルの上のクッキーをどうぞ召し上がってください」という文の、空所に入る語を選びます。", "【手がかり】help のあとに to the cookies が続いています。「自由にとって食べる」という決まった形のしるしです。", "【理由】help oneself to 〜 は「〜を自由にとって食べる（飲む）」という決まった言い方です。oneself の部分は、主語と同じ人を指す形（再帰代名詞）になります。命令文の主語は「あなた」なので、yourself を使います。I なら myself、he なら himself、they なら themselves と変わります。", "【当てはめ】help ～self to ＋ 食べ物 で、「自分で自由にとって食べる」という決まった形です。命令文 Please help … の動作をするのは「あなた」です。動作を受けるのも同じあなた自身なので、再帰代名詞 yourself にします。Please help yourself to the cookies on the table. で「クッキーをどうぞ召し上がれ」となります。", "【答え】③ yourself（Please help yourself to the cookies on the table.）", "【確かめ】「どうぞ召し上がってください」と自然です。① you だと「あなたをクッキーに助ける」となって意味が通りません。② your は名詞の前につく語、④ yours は「あなたのもの」で、ここには入りません。", "【よくあるまちがい】help を「手伝う」と考えて、help you を選んでしまうことです。to the cookies が続くときは、help yourself to 〜（自分でとって食べる）です。"]},
  "help oneself to 〜",
);

const f05 = make(
  {"tiles": [[["She cut", "blue", "主語＋動詞"], ["the paper", "gray", "紙を"]], [["＿＿＿＿", "red", "前置詞"], ["scissors.", "blue", "道具"]]], "cue": "scissors ＝ 道具", "cuelab": "手に持って使うもの", "rule": ["with ＋ 道具 ＝ 〜を使って", "by ＋ 手段（by bus・by e-mail）", "in・on は場所や時の語"], "fill": [[["She cut", "blue", "主語＋動詞"], ["the paper", "gray", "紙を"]], [["with", "red", "答え"], ["scissors.", "blue", "道具"]]], "band": "② with", "bads": ["① by（手段を表す語）", "③ in（場所や時の語）", "④ on（場所や時の語）"], "good": "with scissors  ○", "mb": "by scissors", "mg": "with scissors", "mode": "何を表す名詞か見よう", "notes": ["【状況】「彼女ははさみで紙を切りました」という文の、空所に入る前置詞を選びます。", "【手がかり】scissors（はさみ）は、手に持って使う道具です。道具を表す前置詞を選びます。", "【理由】「〜で（道具を使って）」は with で表します。with a pen（ペンで）・with a knife（ナイフで）のように、手に持って使うものにつけます。いっぽう by は、by bus（バスで）・by e-mail（メールで）のような交通や連絡の手段に使い、あとの名詞に a や the をつけません。はさみは道具なので with です。", "【当てはめ】空所のあとは scissors（はさみ）です。紙を切るために使う道具です。道具を使うときは with を使います。by は手段（by bus・by e-mail）で、a や the をつけない形です。She cut the paper with scissors. で「はさみで紙を切った」となります。", "【答え】② with（She cut the paper with scissors.）", "【確かめ】「はさみで紙を切った」と自然です。① by は手段を表す語で、by scissors とは言いません。③ in・④ on は場所や時を表す語で、道具には使いません。", "【よくあるまちがい】「〜で」を見て、すぐに by を選んでしまうことです。道具は with、交通・連絡の手段は by と使い分けます。"]},
  "道具の with",
);

const f06 = make(
  {"tiles": [[["What do you", "blue", "疑問文"], ["＿＿＿＿", "red", "動詞"]], [["this flower", "gray", "A（呼ばれるもの）"], ["in English?", "gray", "英語で"]]], "cue": "call A B ＝ A を B と呼ぶ", "cuelab": "B をたずねるので What", "rule": ["call A B ＝ A を B と呼ぶ", "B をたずねる → What do you call A?", "say・tell・speak は形が合わない"], "fill": [[["What do you", "blue", "疑問文"], ["call", "red", "答え"]], [["this flower", "gray", "A（呼ばれるもの）"], ["in English?", "gray", "英語で"]]], "band": "③ call", "bads": ["① say（形がつながらない）", "② speak（言語を話す語）", "④ tell（形がつながらない）"], "good": "What do you call 〜?  ○", "mb": "What do you say", "mg": "What do you call", "mode": "呼び名をたずねる形を見よう", "notes": ["【状況】「この花は英語で何と呼びますか」という文の、空所に入る動詞を選びます。", "【手がかり】「呼び名をたずねる」文です。call A B の B を What にして、文のはじめに出した形です。", "【理由】「A を B と呼ぶ」は call A B の形で表します。We call this dog Pochi.（私たちはこの犬をポチと呼ぶ）のように、A のあとに名前や呼び名 B が続きます。B をたずねる文では、B の位置に What を使い、What do you call A? の形になります。「Aは英語で何と言いますか」と聞きたいときの、決まった言い方です。", "【当てはめ】「呼ぶ」にあたる動詞を探します。call A B は「A を B と呼ぶ」です。B（呼び名）をたずねたいので、B の代わりに What を文のはじめに出します。What do you call A? の語順になります。A は this flower、「英語で」は in English です。What do you call this flower in English? となります。", "【答え】③ call（What do you call this flower in English?）", "【確かめ】「この花は英語で何と呼びますか」と自然です。① say と ④ tell は「言う」「伝える」で、あとに this flower を直接つなげて What do you … this flower とはできません。② speak は言語を話す語で、意味が合いません。", "【よくあるまちがい】「何と言いますか」という日本語から、say を選んでしまうことです。call A B の形で「A を B と呼ぶ」と覚えます。"]},
  "call A B",
);

const f07 = make(
  {"tiles": [[["Don't forget", "blue", "忘れないで"], ["＿＿＿＿＿＿", "red", "動詞の形"]], [["the door", "gray", "ドアに"], ["when you leave.", "gray", "出るとき"]]], "cue": "when you leave ＝ これから", "cuelab": "まだしていないこと", "rule": ["forget to 〜 ＝ 〜し忘れる（これから）", "forget 〜ing ＝ 〜したことを忘れる（過去）", "「出るとき」はこれからのこと → to 不定詞"], "fill": [[["Don't forget", "blue", "忘れないで"], ["to lock", "red", "答え"]], [["the door", "gray", "ドアに"], ["when you leave.", "gray", "出るとき"]]], "band": "② to lock", "bads": ["① lock（原形は続かない）", "③ locking（過去の意味になる）", "④ locked（形が合わない）"], "good": "forget to lock  ○", "mb": "forget locking", "mg": "forget to lock", "mode": "いつのことか見よう", "notes": ["【状況】「家を出るときは、ドアにかぎをかけるのを忘れないでね」という文の、空所に入る動詞の形を選びます。", "【手がかり】when you leave（出るとき）は、これから先のことです。これからのことには to 不定詞を使います。", "【理由】forget は、あとに続く形で意味が変わります。forget to 〜 は「〜するのを忘れる」で、これからすることを忘れるときに使います。forget 〜ing は「〜したことを忘れる」で、すでにしたことを忘れるときに使います。ここは「出るとき」という、これから先にすることなので、to 不定詞（to lock）を使います。", "【当てはめ】Don't forget は「忘れないで」です。何を忘れないのかが、空所の動詞です。かぎをかけるのは「家を出るとき」、つまりこれからすることです。これからすることには forget to 〜 を使います。to ＋ 動詞の原形で to lock とします。Don't forget to lock the door. となります。", "【答え】② to lock（Don't forget to lock the door when you leave the house.）", "【確かめ】「家を出るときは、ドアにかぎをかけるのを忘れないでね」と自然です。① lock は原形で、forget のあとにそのまま置けません。③ locking は「かぎをかけたことを忘れる」という過去の意味になって、when you leave と合いません。④ locked は形が合いません。", "【よくあるまちがい】forget のあとは何でも ing形だと思ってしまうことです。これからすることは forget to 〜、したことは forget 〜ing です。"]},
  "forget to 〜 と forget 〜ing",
);

const f08 = make(
  {"tiles": [[["The movie was", "blue", "主語＋動詞"], ["so interesting", "blue", "so ＋ 形容詞"]], [["＿＿＿＿", "red", "つなぎの語"], ["I saw it twice.", "gray", "結果の文"]]], "cue": "so ＋ 形容詞 ＋ ＿＿＿ ＋ 文", "cuelab": "「とても〜なので…」の形", "rule": ["so ＋ 形容詞 ＋ that ＋ 文 ＝ とても〜なので…", "that のあとは、結果を表す文", "because とは使う形がちがう"], "fill": [[["The movie was", "blue", "主語＋動詞"], ["so interesting", "blue", "so ＋ 形容詞"]], [["that", "red", "答え"], ["I saw it twice.", "gray", "結果の文"]]], "band": "① that", "bads": ["② which（文の形が合わない）", "③ what（文の形が合わない）", "④ when（「〜のとき」の意味）"], "good": "so interesting that  ○", "mb": "so … because", "mg": "so … that", "mode": "so のあとに注目しよう", "notes": ["【状況】「その映画はとてもおもしろかったので、私は2回見ました」という文の、空所に入る語を選びます。", "【手がかり】空所の前に so interesting があります。so ＋ 形容詞のあとには、結果を表す文が続きます。", "【理由】so 〜 that ... は「とても〜なので…」と、程度と結果を表す形です。so のあとに形容詞（interesting）を置き、that のあとに結果の文（I saw it twice）を続けます。「そんなにおもしろかった、その結果2回見た」と、前から後ろへ結果がつながるのが特徴です。that のあとには、主語と動詞をそなえた文がそのまま続きます。", "【当てはめ】空所の前に so interesting があります。so ＋ 形容詞のあとには、結果を表す that の文が続きます。あとの I saw it twice（私はそれを2回見た）は、「おもしろかった」ことの結果です。so interesting that I saw it twice で「とてもおもしろかったので2回見た」となります。", "【答え】① that（The movie was so interesting that I saw it twice.）", "【確かめ】「その映画はとてもおもしろかったので、私は2回見ました」と自然です。② which と ③ what は、あとに続く文の形が合いません。④ when は「〜のとき」で、so と組んで結果を表すことはできません。", "【よくあるまちがい】「〜なので」という日本語から、because を使いたくなることです。so 〜 that ... の形では、理由を表す because は使いません。so のあとは that です。"]},
  "so 〜 that ...",
);

const f09 = make(
  {"tiles": [[["The post office is", "blue", "主語＋動詞"], ["＿＿＿＿＿", "red", "前置詞"]], [["the bank", "gray", "A"], ["and", "gray", ""], ["the bookstore.", "gray", "B"]]], "cue": "the bank and the bookstore", "cuelab": "ものが2つ並んでいる", "rule": ["between A and B ＝ 2つのあいだ", "among ＝ 3つ以上のなか", "during ＝ 時間の長さ（場所には使わない）"], "fill": [[["The post office is", "blue", "主語＋動詞"], ["between", "red", "答え"]], [["the bank", "gray", "A"], ["and", "gray", ""], ["the bookstore.", "gray", "B"]]], "band": "② between", "bads": ["① into（動きの向き）", "③ during（時間の長さ）", "④ among（3つ以上のなか）"], "good": "between A and B  ○", "mb": "among A and B", "mg": "between A and B", "mode": "いくつ並んでいるか見よう", "notes": ["【状況】「郵便局は銀行と書店のあいだにあります」という文の、空所に入る前置詞を選びます。", "【手がかり】あとに the bank and the bookstore と、ものが2つ並んでいます。2つのあいだを表す語を選びます。", "【理由】between は「（2つのもの）のあいだに」という意味で、between A and B の形で使います。among は「（3つ以上のもの）のなかに」という意味で、ばらばらの2つを並べるときには使いません。ここは the bank と the bookstore の2つなので between です。during は「〜のあいだ（期間）」、into は「〜の中へ」で、位置を表せません。", "【当てはめ】空所のあとは the bank and the bookstore で、ものが2つ並んでいます。2つのものの「あいだ」は between A and B です。3つ以上のなかなら among です。The post office is between the bank and the bookstore. で、2つの店のあいだに郵便局がある、という意味になります。", "【答え】② between（The post office is between the bank and the bookstore.）", "【確かめ】「郵便局は銀行と書店のあいだにある」と、位置が正しく伝わります。① into は動きの向き、③ during は時間の長さを表す語で、場所には使いません。④ among は3つ以上のなかを表すので、2つの店には合いません。", "【よくあるまちがい】「あいだ」という日本語から、during を選んでしまうことです。during は時間の「あいだ」、between は2つのものの位置の「あいだ」です。"]},
  "between と among",
);

const f10 = make(
  {"tiles": [[["How", "blue", "疑問詞"], ["＿＿＿＿", "red", "量か数か"]], [["money", "blue", "数えない名詞"], ["do you have?", "gray", "持っていますか"]]], "cue": "money ＝ 数えない名詞", "cuelab": "「1お金、2お金」とは言わない", "rule": ["How much ＋ 数えない名詞 ＝ どのくらいの量", "How many ＋ 複数形 ＝ いくつ", "How long・How often は長さ・頻度"], "fill": [[["How", "blue", "疑問詞"], ["much", "red", "答え"]], [["money", "blue", "数えない名詞"], ["do you have?", "gray", "持っていますか"]]], "band": "② much", "bads": ["① many（数えられる名詞に使う）", "③ long（長さや期間）", "④ often（頻度）"], "good": "How much money  ○", "mb": "How many money", "mg": "How much money", "mode": "名詞の種類を見よう", "notes": ["【状況】「ポケットにいくらお金を持っていますか」という文の、空所に入る語を選びます。", "【手がかり】あとの名詞 money は、数えられない名詞です。量をたずねる形にします。", "【理由】How ＋ 形容詞 で、たずねる内容が決まります。数えられる名詞の数をたずねるときは How many ＋ 複数形、数えられない名詞の量をたずねるときは How much ＋ 名詞です。money（お金）は「1お金、2お金」と数えない名詞なので、量をたずねる How much を使います。値段をたずねる How much is it? も、同じ How much です。", "【当てはめ】空所のあとの名詞は money（お金）です。お金は、a money・two moneys とは言わない、数えられない名詞です。数えられない名詞の量は How much ＋ 名詞 でたずねます。How many は数えられる名詞に使います。How much money do you have in your pocket? で「いくらお金を持っていますか」となります。", "【答え】② much（How much money do you have in your pocket?）", "【確かめ】「ポケットにいくらお金を持っていますか」と自然です。① many は数えられる名詞に使う語です。③ long は長さや期間、④ often は頻度をたずねる語で、お金の量には使いません。", "【よくあるまちがい】日本語では「何円」と数えるので、How many を選んでしまうことです。money 自体は数えない名詞なので、How much です。"]},
  "How much と How many",
);

const f11 = make(
  {"tiles": [[["＿＿＿＿＿＿ English", "red", "主語の中心"], ["every day", "gray", "毎日"]], [["is important", "blue", "大切だ"], ["for us.", "gray", "私たちにとって"]]], "cue": "is の前が主語", "cuelab": "「英語を毎日勉強すること」", "rule": ["動名詞（〜ing）＝ 〜すること", "動名詞の主語は単数扱い → is", "原形で始めると命令文になる"], "fill": [[["Studying English", "red", "答え"], ["every day", "gray", "毎日"]], [["is important", "blue", "大切だ"], ["for us.", "gray", "私たちにとって"]]], "band": "② Studying", "bads": ["① Study（命令文になる）", "③ Studied（過去形）", "④ Studies（動詞の形）"], "good": "Studying English is …  ○", "mb": "Study English is", "mg": "Studying English is", "mode": "主語はどこまでか見よう", "notes": ["【状況】「英語を毎日勉強することは、私たちにとって大切です」という文の、空所に入る形を選びます。", "【手がかり】is important の前までが主語です。「〜すること」という意味のまとまりを作ります。", "【理由】動詞の ing形（動名詞）は「〜すること」という意味で、文の主語になれます。Studying English every day で「英語を毎日勉強すること」という、ひとまとまりの主語になります。このまとまりは単数として扱うので、あとの be動詞は is です。動詞の原形（Study）を文の最初に置くと、命令文になってしまいます。", "【当てはめ】文全体の骨組みを見ます。…… is important for us. なので、is の前までが主語です。主語は「英語を毎日勉強すること」です。「〜すること」を表す形は、動詞の ing形（動名詞）です。Studying English every day が主語になり、Studying English every day is important for us. となります。", "【答え】② Studying（Studying English every day is important for us.）", "【確かめ】「英語を毎日勉強することは大切だ」と自然です。① Study は原形で、文頭に置くと命令文になり、そのあとに is が続けられません。③ Studied は過去形、④ Studies は3人称単数の動詞の形で、主語にはなれません。", "【よくあるまちがい】動詞の原形のまま文を始めてしまうことです。「〜すること」を主語にするときは、ing形（または to 不定詞）にします。"]},
  "動名詞の主語",
);

const f12 = make(
  {"tiles": [[["I", "blue", "主語"], ["＿＿＿＿", "red", "動詞（過去）"]], [["a mistake", "blue", "まちがい"], ["in the last question.", "gray", "最後の問題で"]]], "cue": "a mistake ＝ まちがい", "cuelab": "結びつく動詞は決まっている", "rule": ["make a mistake ＝ まちがいをする", "do homework・take a picture・have lunch", "過去形は made（maked ではない）"], "fill": [[["I", "blue", "主語"], ["made", "red", "答え"]], [["a mistake", "blue", "まちがい"], ["in the last question.", "gray", "最後の問題で"]]], "band": "③ made", "bads": ["① did（宿題や仕事に使う）", "② had（食事などに使う）", "④ took（写真・乗り物に使う）"], "good": "made a mistake  ○", "mb": "did a mistake", "mg": "made a mistake", "mode": "組み合わせを思い出そう", "notes": ["【状況】「私はテストの最後の問題でまちがいをしました」という文の、空所に入る動詞を選びます。", "【手がかり】a mistake と結びつく動詞を考えます。「まちがいをする」は決まった組み合わせです。", "【理由】英語では、名詞ごとに結びつく動詞が決まっています。「まちがいをする」は make a mistake です。ほかにも、do homework（宿題をする）・take a picture（写真をとる）・have lunch（昼食をとる）のように、日本語の「する」がいろいろな動詞になります。この組み合わせは、そのまま覚えるしかありません。mistake と結びつく動詞は make です。", "【当てはめ】空所のあとは a mistake（まちがい）です。「まちがいをする」という組み合わせを考えます。make a mistake が「まちがいをする」です。do・have・take は mistake とは結びつきません。過去の文なので、make の過去形 made を使います。I made a mistake in the last question of the test. となります。", "【答え】③ made（I made a mistake in the last question of the test.）", "【確かめ】「最後の問題でまちがいをした」と自然です。① did は do homework のように宿題や仕事に、② had は have lunch のように食事に、④ took は take a picture のように写真や乗り物に使う動詞で、mistake とは組みません。", "【よくあるまちがい】日本語の「まちがいを『する』」から、do を選んでしまうことです。mistake には make。make の過去形は made（maked ではない）です。"]},
  "make a mistake",
);

const f13 = make(
  {"tiles": [[["My bag is", "blue", "主語＋動詞"], ["the same", "blue", "同じ"]], [["＿＿", "red", "つなぐ語"], ["yours.", "gray", "あなたのもの"]]], "cue": "the same ＋ ＿＿ ＋ 相手", "cuelab": "「〜と同じ」の形", "rule": ["the same as 〜 ＝ 〜と同じ", "as のあとに比べる相手（yours）", "the same with・the same to は使わない"], "fill": [[["My bag is", "blue", "主語＋動詞"], ["the same", "blue", "同じ"]], [["as", "red", "答え"], ["yours.", "gray", "あなたのもの"]]], "band": "① as", "bads": ["② like（the same のあとに続かない）", "③ to（この形では使わない）", "④ with（この形では使わない）"], "good": "the same as yours  ○", "mb": "the same with", "mg": "the same as", "mode": "the same のあとを見よう", "notes": ["【状況】「私のかばんはあなたのと同じです」という文の、空所に入る語を選びます。", "【手がかり】空所の前に the same（同じ）があります。そのあとに続く決まった語を選びます。", "【理由】「〜と同じ…」は the same ... as 〜 で表します。as が「〜と」にあたり、あとに比べる相手（yours）が続きます。the same のあとに like・to・with を置く形は、ふつうの言い方ではありません。the same as yours で「あなたのものと同じ」と覚えます。", "【当てはめ】空所の前は the same（同じ）です。同じ相手をあとに言いたいところです。the same のあとは as をつけて、the same as 〜（〜と同じ）の形にします。My bag is the same as yours. で「私のかばんはあなたのと同じです」となります。", "【答え】① as（My bag is the same as yours.）", "【確かめ】「私のかばんはあなたのと同じです」と自然です。② like は「〜のような」で、the same のあとには続きません。③ to と ④ with は、the same と結びつく形ではありません。", "【よくあるまちがい】「〜と同じ」の「と」から、with を選んでしまうことです。the same のあとは with ではなく as です。"]},
  "the same as 〜",
);

const f14 = make(
  {"tiles": [[["built", "gray", ""], ["castle", "gray", ""], ["was", "gray", ""]], [["this", "gray", ""], ["When", "gray", ""]]], "cue": "疑問詞 ＋ was ＋ 主語 ＋ 過去分詞", "cuelab": "受け身の疑問文", "rule": ["疑問詞 When は文の最初", "be動詞 was は主語の前に出す", "build の過去分詞は built（最後）"], "fill": [[["When", "red", "いつ"], ["was", "blue", "be動詞"], ["this castle", "gray", "主語"]], [["built?", "green", "過去分詞"]]], "band": "When was this castle built?", "bads": ["× When this castle was built?（語順がふつうの文）", "× When was built this castle?（主語の位置）", "× When was this castle build?（過去分詞でない）"], "good": "When was this castle built?", "mb": "When this castle was", "mg": "When was this castle", "mode": "並べかえる語を見よう", "notes": ["【状況】5つの語を並べかえて、「このお城はいつ建てられましたか」という英文を作ります。", "【手がかり】文の最初の語は When です。そのあとは、受け身の疑問文の語順にします。", "【理由】受け身の疑問文は、be動詞を主語の前に出して、Was this castle built? のように作ります。「いつ」をたずねるときは、その前に When を置き、When ＋ was ＋ 主語 ＋ 過去分詞 の順にします。「建てられた」は be動詞 ＋ 過去分詞（built）、build の過去分詞は built です。疑問詞は文の最初に置くので、When が先頭です。", "【当てはめ】文の最初は、与えられた When です。「いつ」をたずねる疑問詞です。疑問文なので、be動詞を主語の前に出します。was ＋ this castle の順にします。最後に過去分詞 built を置いて、When was this castle built? となります。", "【答え】When was this castle built?", "【確かめ】5つの語をすべて使っています。「いつ（When）／〜されましたか（was … built）／このお城は（this castle）」と、日本語の意味に対応しています。語順は、疑問詞 ＋ was ＋ 主語 ＋ 過去分詞です。", "【よくあるまちがい】When this castle was built? のように、ふつうの文の語順（主語 ＋ was）のままにしてしまうことです。疑問文では was を主語の前に出します。"]},
  "受け身の疑問文",
);

const f15 = make(
  {"tiles": [[["for", "gray", ""], ["exercise", "gray", ""], ["important", "gray", ""], ["to", "gray", ""]], [["It", "gray", ""], ["is", "gray", ""], ["every day", "gray", ""], ["us", "gray", ""]]], "cue": "It is 形容詞 for 人 to 〜", "cuelab": "「人にとって〜することは…だ」", "rule": ["It is important ＝ 大切です（先に作る）", "for us ＝ だれにとって（to の前）", "to ＋ 原形 ＝ 何をするか（最後）"], "fill": [[["It is", "blue", "仮の主語"], ["important", "green", "形容詞"], ["for us", "red", "人"]], [["to exercise", "purple", "to ＋ 原形"], ["every day.", "gray", "毎日"]]], "band": "It is important for us to exercise every day.", "bads": ["× important to exercise for us（順が逆）", "× It is for us important to …（形容詞の位置）", "× For us is important it to …（It が先頭でない）"], "good": "It is important for us to exercise …", "mb": "to exercise for us", "mg": "for us to exercise", "mode": "並べかえる語（句）を見よう", "notes": ["【状況】8つの語（句）を並べかえて、「私たちにとって、毎日運動することは大切です」という英文を作ります。", "【手がかり】文の最初は It です。It is important まで作り、for 人 to 〜 を続ける形です。", "【理由】「（人）にとって〜することは…だ」は、It is ＋ 形容詞 ＋ for 人 ＋ to 〜. で表します。It は「それ」ではなく、あとの to 〜 を指す形だけの主語（仮の主語）です。for のあとに「だれにとって」、to のあとに動詞の原形で「何をするか」を置きます。長い主語を文のうしろに回して、読みやすくした形です。", "【当てはめ】文の最初は It です。It is important（大切です）まで先に作ります。「だれにとって」は for us です。形容詞 important のあとに続けます。「運動すること」は to ＋ 原形で to exercise、「毎日」は every day です。うしろに続けて、It is important for us to exercise every day. となります。", "【答え】It is important for us to exercise every day.", "【確かめ】8つの語（句）をすべて使っています。「It is important（大切です）／for us（私たちにとって）／to exercise every day（毎日運動すること）」と、日本語の意味に対応しています。", "【よくあるまちがい】for us と to exercise の順を逆にして、It is important to exercise for us. と並べることです。「だれにとって」の for 人 は、to 〜 の前に置きます。"]},
  "It is 〜 for 人 to ...",
);

const f16 = make(
  {"tiles": [[["That singer", "blue", "主語"], ["is known", "blue", "知られている"]], [["＿＿", "red", "前置詞"], ["everyone in my school.", "gray", "人"]]], "cue": "everyone ＝ 知っている人", "cuelab": "あとに「人」が来ている", "rule": ["known to ＋ 人 ＝ 人に知られている", "known for ＋ 理由 ＝ 〜で有名だ", "known as ＋ 資格 ＝ 〜として知られる"], "fill": [[["That singer", "blue", "主語"], ["is known", "blue", "知られている"]], [["to", "red", "答え"], ["everyone in my school.", "gray", "人"]]], "band": "③ to", "bads": ["① at（この形では使わない）", "② for（理由が続くときの語）", "④ in（この形では使わない）"], "good": "known to everyone  ○", "mb": "known for everyone", "mg": "known to everyone", "mode": "あとに何が来るか見よう", "notes": ["【状況】「あの歌手は、私の学校のみんなに知られています」という文の、空所に入る前置詞を選びます。", "【手がかり】あとに everyone（みんな）と、知っている「人」が来ています。人に知られている、と言う形です。", "【理由】be known は、あとにつく前置詞で意味が変わります。be known to ＋ 人 は「（人）に知られている」、be known for ＋ 理由 は「〜で有名だ」、be known as ＋ 資格 は「〜として知られている」です。ここは everyone（みんな）という「人」のあとなので、known to を使います。", "【当てはめ】空所のあとは everyone in my school（学校のみんな）です。「人」が来ています。「人に知られている」は be known to 人 です。for は理由（歌が上手だから、など）、as は資格（歌手として）が続きます。That singer is known to everyone in my school. で「あの歌手は学校のみんなに知られている」となります。", "【答え】③ to（That singer is known to everyone in my school.）", "【確かめ】「あの歌手は学校のみんなに知られている」と自然です。② for は理由が続く形（known for his songs）、① at と ④ in は be known のあとにこの形でつながりません。", "【よくあるまちがい】「〜に知られている」の意味なのに、for を選んでしまうことです。for は「〜で有名」と理由が続くときです。知っている人が続くときは to です。"]},
  "be known to / for / as",
);

const f17 = make(
  {"tiles": [[["what", "gray", ""], ["to", "gray", ""], ["I", "gray", ""], ["you", "gray", ""]], [["know", "gray", ""], ["bought", "gray", ""], ["want", "gray", ""], ["yesterday", "gray", ""]]], "cue": "what ＋ 主語 ＋ 動詞", "cuelab": "文のなかに入る疑問（間接疑問）", "rule": ["I want to know ＝ 私は知りたい", "what you bought ＝ あなたが何を買ったか", "did は使わず、動詞は過去形 bought"], "fill": [[["I want to know", "blue", "知りたい"], ["what", "red", "疑問詞"]], [["you bought", "green", "主語＋動詞"], ["yesterday.", "gray", "昨日"]]], "band": "I want to know what you bought yesterday.", "bads": ["× … what did you buy yesterday.（疑問文の語順）", "× … what bought you yesterday.（語順がちがう）", "× … you bought what yesterday.（what の位置）"], "good": "I want to know what you bought yesterday.", "mb": "what did you buy", "mg": "what you bought", "mode": "並べかえる語を見よう", "notes": ["【状況】8つの語を並べかえて、「私はあなたが昨日何を買ったのか知りたいです」という英文を作ります。", "【手がかり】know のあとに、疑問が入る形です。what のあとを、主語 ＋ 動詞の順にします。", "【理由】疑問の内容が、文のなかに入ったもの（間接疑問）は、疑問詞のあとを「主語 ＋ 動詞」の順にします。「あなたは何を買いましたか」は What did you buy? ですが、know のあとに入れると、what you bought（あなたが何を買ったか）となり、did は消えて動詞が過去形（bought）になります。文全体は I want to know ... の形です。", "【当てはめ】文の最初は I です。「知りたい」は want to know で、I want to know と作ります。「何を買ったか」は what you bought です。疑問詞 what のあとを、主語 ＋ 動詞（you bought）の順にします。did は使いません。「昨日」は yesterday で文の最後に置き、I want to know what you bought yesterday. となります。", "【答え】I want to know what you bought yesterday.", "【確かめ】8つの語をすべて使っています。「I want to know（私は知りたい）／what you bought（あなたが何を買ったか）／yesterday（昨日）」と、日本語の意味に対応しています。what のあとは、主語 you ＋ 動詞 bought です。", "【よくあるまちがい】what did you buy のように、疑問文の語順のまま入れてしまうことです。文のなかに入れるときは、what you bought と、ふつうの文の語順にします。"]},
  "間接疑問 what ＋ 主語 ＋ 動詞",
);

const f18 = make(
  {"tiles": [[["the", "gray", ""], ["is", "gray", ""], ["read", "gray", ""], ["I", "gray", ""]], [["book", "gray", ""], ["that", "gray", ""], ["This", "gray", ""], ["yesterday", "gray", ""]]], "cue": "名詞 ＋ that ＋ 主語 ＋ 動詞", "cuelab": "the book を that 以下が説明する", "rule": ["This is the book ＝ これは本です", "that は説明される名詞のすぐあと", "that I read yesterday ＝ 私が昨日読んだ"], "fill": [[["This is", "blue", "これは〜です"], ["the book", "green", "説明される名詞"]], [["that", "red", "関係代名詞"], ["I read yesterday.", "purple", "主語＋動詞"]]], "band": "This is the book that I read yesterday.", "bads": ["× … the book I that read yesterday.（that の位置）", "× that the book I read（that が前）", "× … the that book I read yesterday.（名詞が割れた）"], "good": "This is the book that I read yesterday.", "mb": "book I that read", "mg": "book that I read", "mode": "並べかえる語を見よう", "notes": ["【状況】8つの語を並べかえて、「これは私が昨日読んだ本です」という英文を作ります。", "【手がかり】「私が昨日読んだ」は book を説明します。説明される名詞のすぐあとに that を置きます。", "【理由】名詞（もの）をあとから説明するとき、関係代名詞 that を使います。the book that I read yesterday は、「私が昨日読んだ本」という名詞のまとまりです。that は book の説明の始まりの目印で、あとに「主語 ＋ 動詞」（I read yesterday）が続きます。説明される名詞（the book）のすぐあとに that を置くことが大切です。", "【当てはめ】文の骨組みは This is the book（これは本です）です。ここまでを先に作ります。「私が昨日読んだ」は、book を説明することばです。the book のすぐあとに that を置いて、that I read yesterday と続けます。つなげて、This is the book that I read yesterday. となります。（read は過去形も read と書きます。）", "【答え】This is the book that I read yesterday.", "【確かめ】8つの語をすべて使っています。「This is the book（これは本です）／that I read yesterday（私が昨日読んだ）」と、日本語の意味に対応しています。説明される the book のすぐあとに that が来ています。", "【よくあるまちがい】that を book から離して、This is the book I that read yesterday. のように並べることです。that は説明される名詞のすぐあとに置きます。"]},
  "関係代名詞 that（目的格）",
);

const f19 = make(
  {"tiles": [[["The boy", "blue", "説明される名詞"], ["＿＿＿＿ (lie)", "red", "ing形にする"]], [["on the sofa", "gray", "ソファに"], ["is my brother.", "gray", "私の弟です"]]], "cue": "名詞のあと ＋ 〜している", "cuelab": "現在分詞（ing形）で説明する", "rule": ["名詞 ＋ 〜ing ＝ 〜している名詞", "ie で終わる動詞は ie を y に変える", "lie → lying（lieing ではない）"], "fill": [[["The boy", "blue", "説明される名詞"], ["lying", "red", "答え"]], [["on the sofa", "gray", "ソファに"], ["is my brother.", "gray", "私の弟です"]]], "band": "lying", "bads": ["× lieing（ie を y に変えていない）", "× lied（過去形で「〜している」でない）", "× lay（過去形で「〜している」でない）"], "good": "lying  ○", "mb": "lieing", "mg": "lying", "mode": "形を変える語を見よう", "notes": ["【状況】（　）内の lie を、「ソファに横になっている少年は私の弟です」という文に合う形に直して書きます。", "【手がかり】the boy のあとから「ソファに横になっている」と説明する文です。ing形に直します。", "【理由】名詞のあとに「〜している」と説明を足すときは、動詞の ing形（現在分詞）を使います。The boy lying on the sofa（ソファに横になっている少年）で、lying on the sofa が the boy を説明します。ing形の作り方には注意が必要で、ie で終わる動詞は ie を y に変えてから ing をつけます。lie → lying、die → dying、tie → tying です。", "【当てはめ】空所の前は the boy、あとは on the sofa is my brother です。is の前までが主語で、the boy のあとに説明が入ります。「横になっている」は、〜している を表す ing形（現在分詞）です。lie に ing をつける形を考えます。lie は ie で終わります。ie を y に変えて lie → lying とします。The boy lying on the sofa is my brother. となります。", "【答え】lying（The boy lying on the sofa is my brother.）", "【確かめ】「ソファに横になっている少年は私の弟です」と自然です。lieing とつなげるのは誤りで、ie は y に変えて lying とします。lied や lay では「〜している」という意味になりません。", "【よくあるまちがい】そのまま ing をつけて lieing と書いてしまうことです。ie で終わる動詞は、ie を y に変えて ing をつけます（lie → lying）。"]},
  "ing形のつくり方（lie → lying）",
);

const f20 = make(
  {"tiles": [[["My brother is", "blue", "①"], ["good", "gray", "②"]], [["at", "gray", "③"], ["play", "red", "④"], ["the piano.", "gray", ""]]], "cue": "at のあとに動詞 ＝ ing形", "cuelab": "at は前置詞", "rule": ["be good at ＝ 〜が上手だ", "前置詞のあとの動詞は ing形", "play（原形）は置けない → playing"], "fill": [[["My brother is", "blue", "①"], ["good", "gray", "②"]], [["at", "gray", "③"], ["playing", "green", "④ を直す"], ["the piano.", "gray", ""]]], "band": "④ play → playing", "bads": ["① is（主語に合っている）", "② good（正しい）", "③ at（正しい）"], "good": "④ play → playing  ○", "mb": "good at play", "mg": "good at playing", "mode": "誤りのある部分を探そう", "notes": ["【状況】「私の兄はピアノをひくのが上手です」という意味の英文で、誤っている部分を①〜④から1つ選びます。", "【手がかり】at は前置詞です。前置詞のあとに動詞が来ると、形に決まりがあります。", "【理由】前置詞（at・of・for・in・about など）のあとに動詞を置くときは、動詞の ing形（動名詞）にします。be good at 〜ing は「〜するのが上手だ」という決まった言い方で、at が前置詞なので、あとの動詞は playing にします。動詞の原形（play）や to 不定詞は、前置詞のあとには置けません。", "【当てはめ】「〜が上手だ」は be good at 〜 です。この at が前置詞であることを確かめます。前置詞のあとの動詞は、ing形（動名詞）にします。④ の play は原形なので誤りです。④ play を playing に直して、My brother is good at playing the piano. となります。", "【答え】④ play（play → playing に直す。My brother is good at playing the piano.）", "【確かめ】直した文「私の兄はピアノをひくのが上手です」は自然です。① is は主語 My brother に合う be動詞、② good と ③ at は be good at の正しい形で、誤りはありません。", "【よくあるまちがい】be good at のあとに、そのまま動詞の原形（play）を置いてしまうことです。前置詞 at のあとの動詞は ing形です。"]},
  "前置詞のあとは ing形",
);

const f21 = make(
  {"tiles": [[["How about", "blue", "〜はどう？"], ["＿＿＿＿", "red", "ing形"]], [["soccer", "gray", "サッカー"], ["after school?", "gray", "放課後に"]]], "cue": "How about ＋ 〜ing?", "cuelab": "「〜するのはどう？」", "rule": ["How about 〜? ＝ 〜はどうですか", "about は前置詞 → あとは ing形", "スポーツは play（do ではない）"], "fill": [[["How about", "blue", "〜はどう？"], ["playing", "red", "ing形"]], [["soccer", "gray", "サッカー"], ["after school?", "gray", "放課後に"]]], "band": "How about playing soccer after school?", "bads": ["× How about to play …（to 不定詞は不可）", "× How about play …（原形は不可）", "× How about do soccer …（スポーツは play）"], "good": "How about playing soccer …?", "mb": "How about to play", "mg": "How about playing", "mode": "英文の形を考えよう", "notes": ["【状況】日本語の「放課後にサッカーをするのはどうですか」を、How about を使って英語にします。", "【手がかり】書き出しは How about です。about は前置詞なので、あとの動詞は ing形になります。", "【理由】How about 〜? は「〜はどうですか」と、相手にすすめたり、さそったりする言い方です。about は前置詞なので、あとに動詞を置くときは ing形（動名詞）にします。「サッカーをする」は playing soccer、「放課後に」は after school です。「する」だから do ではなく、スポーツには play を使います。", "【当てはめ】書き出しは How about です。「〜はどうですか」とさそう決まった形です。about は前置詞なので、「サッカーをすること」は動詞を ing形にして playing soccer とします。「放課後に」は after school です。つなげて、How about playing soccer after school? となります。", "【答え】How about playing soccer after school?", "【確かめ】「放課後にサッカーをするのはどうですか」と、さそう文になっています。How about のあとが ing形（playing）になっているか、スポーツの動詞が play か、文の最後が ? か、の3点を確かめます。How about to play は誤りです。", "【よくあるまちがい】How about to play のように、to 不定詞にしてしまうことです。about は前置詞なので、あとは ing形（How about playing 〜?）です。"]},
  "How about 〜ing?",
);

const f22 = make(
  {"tiles": [[["I hope", "blue", "〜と思う"], ["＿＿＿＿＿", "red", "to ＋ 原形"]], [["abroad", "gray", "外国で"], ["in the future.", "gray", "将来"]]], "cue": "hope ＋ to ＋ 原形", "cuelab": "「〜したいと思う」", "rule": ["hope to ＋ 原形 ＝ 〜したいと思う", "hope のあとに ing形は続かない", "abroad は副詞 → in・to は要らない"], "fill": [[["I hope", "blue", "〜と思う"], ["to work", "red", "to ＋ 原形"]], [["abroad", "green", "外国で"], ["in the future.", "gray", "将来"]]], "band": "I hope to work abroad in the future.", "bads": ["× I hope working …（ing形は不可）", "× … work in abroad …（abroad に in は不要）", "× I hope work …（to が必要）"], "good": "I hope to work abroad …", "mb": "hope working", "mg": "hope to work", "mode": "英文の形を考えよう", "notes": ["【状況】日本語の「私は将来、外国で働きたいと思っています」を、hope を使って英語にします。", "【手がかり】書き出しは I hope です。hope のあとには、to ＋ 動詞の原形が続きます。", "【理由】hope to 〜 は「〜したいと思う（〜できたらいいと願う）」という意味で、あとに to 不定詞を続けます。hope のあとに ing形（hoping）は続けられません。「外国で」は、abroad（外国で）という副詞を使うと、前置詞 in をつけずに書けます。「将来」は in the future です。", "【当てはめ】書き出しは I hope です。hope のあとは to ＋ 動詞の原形なので、I hope to work と続けます。「外国で」は abroad です。abroad は「外国で・外国へ」という副詞なので、前に in や to をつけません。「将来」は in the future です。つなげて、I hope to work abroad in the future. となります。", "【答え】I hope to work abroad in the future.", "【確かめ】「私は将来、外国で働きたいと思っています」と、日本語の意味と合っています。hope のあとが to ＋ 原形（to work）か、abroad の前に in や to をつけていないか、の2点を確かめます。I hope working や in abroad は誤りです。", "【よくあるまちがい】in abroad や to abroad のように、abroad の前に前置詞をつけてしまうことです。abroad は副詞なので、前置詞は要りません。hope のあとを ing形にするのも誤りです。"]},
  "hope to 〜 と abroad",
);

const f23 = make(
  {"tiles": [[["It was very kind", "blue", "形容詞 kind"], ["＿＿", "red", "前置詞"]], [["you", "gray", "人"], ["to carry my bag.", "gray", "かばんを運ぶ"]]], "cue": "kind ＝ 人の性格", "cuelab": "「あなたは親切だ」と言いかえられる", "rule": ["性格を表す形容詞（kind・nice）→ of", "することの性質（easy・important）→ for", "言いかえ：You are kind. が成り立てば of"], "fill": [[["It was very kind", "blue", "形容詞 kind"], ["of", "red", "答え"]], [["you", "gray", "人"], ["to carry my bag.", "gray", "かばんを運ぶ"]]], "band": "② of", "bads": ["① for（することの性質の語に使う）", "③ to（この形では使わない）", "④ with（この形では使わない）"], "good": "kind of you  ○", "mb": "kind for you", "mg": "kind of you", "mode": "形容詞の種類を見よう", "notes": ["【状況】「私のかばんを運んでくれて、あなたはとても親切でした」という文の、空所に入る前置詞を選びます。", "【手がかり】kind は人の性格を表す形容詞です。人の前に置く語は、形容詞の種類で決まります。", "【理由】It is ＋ 形容詞 ＋ ＿ 人 ＋ to 〜 の形では、人の前に置く語が、形容詞の種類で変わります。important・easy・hard のように「することがどうか」を表す形容詞には for を使い、kind・nice・careless のように「その人の性格や行いがどうか」を表す形容詞には of を使います。kind は人の性格をほめる語なので、of you となります。", "【当てはめ】形は It was very kind ＿ you to carry my bag. です。人（you）の前に置く前置詞を選びます。kind は「あなたは親切だ」と、人の性格を表します。このような形容詞（kind・nice・clever・careless）には of を使います。It was very kind of you to carry my bag. で「かばんを運んでくれて、あなたは親切でした」となります。", "【答え】② of（It was very kind of you to carry my bag.）", "【確かめ】「かばんを運んでくれて、あなたはとても親切でした」と自然です。「あなたは親切だ（You are kind.）」と言いかえられるので、of が正しいと確かめられます。① for は important・easy のような、することの難しさや大切さを表す形容詞に使います。③ to と ④ with は、この形では使いません。", "【よくあるまちがい】It is … for 人 to 〜 の形をそのまま使って、kind for you と書くことです。人の性格を表す形容詞のときは、for ではなく of です。"]},
  "It is 〜 of 人 to ...",
);

const f24 = make(
  {"tiles": [[["c[ou]ntry", "gray", "①"], ["y[ou]ng", "gray", "②"]], [["tr[ou]ble", "gray", "③"], ["gr[ou]p", "gray", "④"]]], "cue": "つづりではなく「音」で比べる", "cuelab": "声に出して読んでみる", "rule": ["① カントリー ＝ 「ア」の音", "② ヤング・③ トラブル ＝ 「ア」の音", "④ グループ ＝ 「ウー」の音"], "fill": [[["c[ou]ntry", "blue", "ア"], ["y[ou]ng", "blue", "ア"]], [["tr[ou]ble", "blue", "ア"], ["gr[ou]p", "red", "ウー"]]], "band": "④ gr[ou]p", "bads": ["① country（ア）", "② young（ア）", "③ trouble（ア）"], "good": "④ group だけ「ウー」  ○", "mb": "ou は全部同じ", "mg": "音で比べる", "mode": "声に出して読もう", "bandchk": "3つは「ア」の音", "notes": ["【状況】[　] の部分の発音が、他の3つと異なるものを選びます。", "【手がかり】4つとも ou のつづりですが、読み方はそろっていません。音で比べます。", "【理由】ou は、単語によって読み方が変わります。country・young・trouble・double・couple・touch の ou は、「ア」に近い短い音（/ʌ/）で読みます。いっぽう group・soup・route の ou は、「ウー」と長く読む音（/uː/）です。つづりが同じでも、音で分けて覚えることが大切です。", "【当てはめ】①「カントリー」、②「ヤング」、③「トラブル」と、声に出して読みます。この3つの ou は、どれも「ア」に近い短い音です。④ group は「グループ」と読み、ou が「ウー」と長くのびる音です。3つが「ア」の音、1つだけ「ウー」の音なので、仲間はずれは ④ です。", "【答え】④ gr[ou]p（gr[ou]p だけが「ウー」の音。ほかの3つは「ア」に近い音）", "【確かめ】country（カントリー）・young（ヤング）・trouble（トラブル）は、どれも ou を「ア」の音で読みます。group（グループ）だけが「ウー」の音で、仲間はずれです。", "【よくあるまちがい】つづりが同じ ou だから、全部同じ読み方だと思ってしまうことです。発音の問題は、つづりではなく、声に出した音で比べます。"]},
  "ou の読み方（ア と ウー）",
);

const f25 = make(
  {"tiles": [[["ba-NA-na", "gray", "①"], ["to-MA-to", "gray", "②"]], [["gui-TAR", "gray", "③"], ["vol-un-TEER", "gray", "④"]]], "cue": "強く読む部分（大文字）を探す", "cuelab": "何番目を強く読むか", "rule": ["① ba-NA-na ＝ 2番目を強く", "② to-MA-to・③ gui-TAR ＝ 2番目を強く", "④ vol-un-TEER ＝ 3番目を強く"], "fill": [[["ba-NA-na", "blue", "2番目"], ["to-MA-to", "blue", "2番目"]], [["gui-TAR", "blue", "2番目"], ["vol-un-TEER", "red", "3番目"]]], "band": "④ vol-un-teer", "bads": ["① banana（2番目を強く）", "② tomato（2番目を強く）", "③ guitar（2番目を強く）"], "good": "④ volunteer だけ 3番目  ○", "mb": "ボランティア（最初）", "mg": "vol-un-TEER", "mode": "強く読む部分を探そう", "bandchk": "3つは2番目を強く読む", "notes": ["【状況】いちばん強く読む部分（アクセント）の位置が、他の3つと異なる単語を選びます。", "【手がかり】1つずつ声に出して、いちばん強く読む部分を探します。3つは同じ位置です。", "【理由】英語の単語には、いちばん強く読む部分（アクセント）があります。banana は「バナ」の2番目、tomato は「トメイト」の2番目、guitar は「ギター」の2番目を強く読みます。これに対して volunteer は「ヴォランティア」と、3番目の teer を強く読みます。-eer で終わる単語（volunteer・engineer）は、最後の eer を強く読む、と覚えると役に立ちます。", "【当てはめ】① ba-na-na は、ba（バ）・na（ナ）・na（ナ）のうち、2番目の na を強く読みます。② to-ma-to は2番目の ma を、③ gui-tar は2番目の tar を、それぞれ強く読みます。④ vol-un-teer は3番目の teer を強く読みます。3つが2番目、1つだけ3番目なので、④ が仲間はずれです。", "【答え】④ vol-un-teer（3番目を強く読む。ほかの3つは2番目を強く読む）", "【確かめ】banana・tomato・guitar は、どれも2番目を強く読みます。volunteer だけが3番目を強く読むので、仲間はずれです。", "【よくあるまちがい】日本語のカタカナの読み方（ボランティア）のまま、最初を強く読んでしまうことです。英語のアクセントは、日本語の読み方とはちがう位置のことがあります。"]},
  "アクセントの位置",
);

export const figuresHonshiken202702EigoKoko1: Record<string, Figure> = {
  honshiken_2027_02_eigo_k01: f01,
  honshiken_2027_02_eigo_k02: f02,
  honshiken_2027_02_eigo_k03: f03,
  honshiken_2027_02_eigo_k04: f04,
  honshiken_2027_02_eigo_k05: f05,
  honshiken_2027_02_eigo_k06: f06,
  honshiken_2027_02_eigo_k07: f07,
  honshiken_2027_02_eigo_k08: f08,
  honshiken_2027_02_eigo_k09: f09,
  honshiken_2027_02_eigo_k10: f10,
  honshiken_2027_02_eigo_k11: f11,
  honshiken_2027_02_eigo_k12: f12,
  honshiken_2027_02_eigo_k13: f13,
  honshiken_2027_02_eigo_k14: f14,
  honshiken_2027_02_eigo_k15: f15,
  honshiken_2027_02_eigo_k16: f16,
  honshiken_2027_02_eigo_k17: f17,
  honshiken_2027_02_eigo_k18: f18,
  honshiken_2027_02_eigo_k19: f19,
  honshiken_2027_02_eigo_k20: f20,
  honshiken_2027_02_eigo_k21: f21,
  honshiken_2027_02_eigo_k22: f22,
  honshiken_2027_02_eigo_k23: f23,
  honshiken_2027_02_eigo_k24: f24,
  honshiken_2027_02_eigo_k25: f25,
};
