// 月例実力テスト 2027年1月号（高校受験・英語）担当A（k01〜k25）の動く図解。キーは問題ID。
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
  {"tiles": [[["The school festival", "blue", "主語"], ["will be held", "gray", "受け身"]], [["＿＿", "red", "時の前置詞"], ["October 20", "gray", "日付"]]], "cue": "October 20 ＝ 日付つき", "cuelab": "月だけではなく「日」まで言っている", "rule": ["at ＋ 時刻（at six）", "on ＋ 曜日・日付（on October 20）", "in ＋ 月・年・季節（in October）"], "fill": [[["The school festival", "blue", "主語"], ["will be held", "gray", "受け身"]], [["on", "red", "答え"], ["October 20", "gray", "日付"]]], "band": "④ on", "bads": ["① at（時刻のとき）", "② in（月だけのとき）", "③ of（時の前置詞ではない）"], "good": "④ on  ○", "mb": "in October 20", "mg": "on October 20", "mode": "空所に入る前置詞を選ぼう", "notes": ["【状況】「文化祭は10月20日に開かれます」という文の、空所に入る前置詞を選びます。", "【手がかり】October 20 は月に日がついた「特定の1日」です。月だけの in October とは形がちがいます。", "【理由】時を表す前置詞は、時の種類で使い分けます。時刻には at、曜日や日付には on、月・年・季節には in を使います。in が広い時間のわく（月や年）を指すのに対して、on は「その日」というひとつの日を指します。October だけなら in October ですが、20日までつくと特定の1日になるので on です。", "【当てはめ】空所のあとの October 20 を見ます。月（October）に日（20）がついているので、特定の1日を指しています。 at は時刻（at six）、in は月・年・季節（in October）、on は曜日・日付（on Sunday・on October 20）です。 日付なので on を入れます。on October 20 で「10月20日に」となります。", "【答え】④ on（The school festival will be held on October 20.）", "【確かめ】「文化祭は10月20日に開かれる」と自然です。① at は時刻に使う語、② in は月だけのときの語、③ of は時を表す前置詞としてこの形では使いません。", "【よくあるまちがい】October がついているから in だと思ってしまうことです。月だけなら in October、日までついたら on October 20 と覚えます。"]},
  "時の前置詞 at・on・in",
);

const f02 = make(
  {"tiles": [[["You like soccer,", "blue", "肯定文"], ["＿＿＿＿?", "red", "付加疑問"]]], "cue": "肯定文 → 否定の付加疑問", "cuelab": "前が肯定なら、うしろは否定", "rule": ["肯定文 → 否定（don't・aren't …）", "一般動詞の文 → do・does で受ける", "主語は代名詞に直す（You → you）"], "fill": [[["You like soccer,", "blue", "肯定・一般動詞"], ["don't you?", "red", "答え"]]], "band": "③ don't you", "bads": ["① do you（肯定が重なる）", "② are you（be動詞は不可）", "④ aren't you（be動詞は不可）"], "good": "③ don't you  ○", "mb": "…, do you?", "mg": "…, don't you?", "mode": "付加疑問の形を選ぼう", "notes": ["【状況】「あなたはサッカーが好きですよね」と、相手に確かめる付加疑問文の、空所に入る形を選びます。", "【手がかり】前の文 You like soccer は肯定文です。付加疑問は、前が肯定なら否定の形をつけます。", "【理由】付加疑問文は、文のおわりに短い疑問をつけて「〜ですね」と確かめる言い方です。前が肯定文なら否定の形、前が否定文なら肯定の形をつけます。つけるときは、前の文の動詞に合わせて be動詞・do・does・can などを選び、主語は代名詞に直します。", "【当てはめ】前の文 You like soccer は肯定文です。だから、うしろには否定の形をつけます。 like は一般動詞です。一般動詞の文は、do（主語が3人称単数なら does）で受けます。否定にして don't にします。 主語 You は you のままです。don't you? となります。", "【答え】③ don't you（You like soccer, don't you?）", "【確かめ】「あなたはサッカーが好きですよね」と自然です。① do you は肯定どうしで形がそろいません。② are you と ④ aren't you は be動詞で、like の文には使えません。", "【よくあるまちがい】like があるのに、be動詞（aren't you）を選んでしまうことです。付加疑問は、前の文の動詞が be動詞なら be動詞、一般動詞なら do で受けます。"]},
  "付加疑問文",
);

const f03 = make(
  {"tiles": [[["How often", "blue", "どのくらいの頻度"], ["do you go to the library?", "gray", "図書館へ行く"]]], "cue": "How often ＝ 頻度をたずねる", "cuelab": "答えは回数・ふだんの頻度", "rule": ["How often 〜? ＝ どのくらいの頻度で〜?", "答え：回数・頻度（once a week・every day）", "How long ＝ 期間、How ＝ 方法"], "fill": [[["How often …?", "blue", "頻度は？"], ["Twice a week.", "red", "答え"]]], "band": "① Twice a week.", "bads": ["② For two hours.（期間 ＝ How long）", "③ By bike.（方法 ＝ How）", "④ At the station.（場所 ＝ Where）"], "good": "① Twice a week.  ○", "mb": "For two hours.", "mg": "Twice a week.", "mode": "答えの文を選ぼう", "notes": ["【状況】「あなたはどのくらいの頻度で図書館へ行きますか」という質問に対する、最も自然な答えを選びます。", "【手がかり】How often は「どのくらいよく」です。回数や頻度で答える文を探します。", "【理由】How のあとにつく語で、たずねる内容が変わります。How often は「どのくらいの頻度で」、つまり回数・ふだんの頻度をたずねます。答えは once a week（週に1回）・every day（毎日）・sometimes（ときどき）のように、頻度で答えます。期間をたずねるのは How long、方法をたずねるのは How です。", "【当てはめ】質問の How often を見ます。「どのくらいよく」なので、頻度（回数）をたずねています。 答えは頻度で答える文です。選択肢のなかで頻度を表すのは Twice a week.（週に2回）です。 For two hours.（2時間）は期間、By bike.（自転車で）は方法、At the station.（駅で）は場所の答えです。", "【答え】① Twice a week.（A: How often do you go to the library? B: Twice a week.）", "【確かめ】「どのくらいの頻度で行きますか」「週に2回です」と会話がつながります。② は How long の答え、③ は How do you go〜? の答え、④ は Where の答えです。", "【よくあるまちがい】How のあとの語を読まずに、図書館・go から「行き方」を答えてしまうことです。How のあとの語（often・long・much・many）が、答えの種類を決めます。"]},
  "How often の答え方",
);

const f04 = make(
  {"tiles": [[["Can I ＿＿＿", "blue", "借りてもいい？"], ["your pen", "gray", "相手の物"]], [["for a minute?", "gray", "ちょっとの間"], ["Here you are.", "green", "相手がわたす"]]], "cue": "Here you are. ＝ 相手がわたす", "cuelab": "私は借りる側", "rule": ["borrow ＝（ただで）借りる", "lend ＝ 貸す", "rent ＝ お金をはらって借りる"], "fill": [[["Can I borrow", "blue", "借りてもいい？"], ["your pen", "gray", "相手の物"]], [["for a minute?", "gray", "ちょっとの間"], ["Here you are.", "green", "どうぞ"]]], "band": "② borrow", "bads": ["① lend（貸す）", "③ rent（有料で借りる）", "④ give（あげる）"], "good": "② borrow  ○", "mb": "Can I lend ～?", "mg": "Can I borrow ～?", "mode": "空所に入る動詞を選ぼう", "notes": ["【状況】「ちょっとあなたのペンを借りてもいいですか」という文の、空所に入る動詞を選びます。", "【手がかり】B が Here you are.（どうぞ）と言って物をわたします。A は借りる側です。", "【理由】日本語の「借りる・貸す」は、英語では動きの向きで語が分かれます。borrow は「（相手の物を、ただで）借りる」、lend は「（自分の物を）貸す」です。rent は「お金をはらって借りる」です。持ち主ではなく、借りる側が主語なら borrow を使います。", "【当てはめ】ペンは B（相手）の物です。A はそれを借りたいので、「借りる」側です。 借りる側が使う語は borrow です。貸す側が使う語は lend、有料で借りるのは rent です。 Can I borrow your pen? で「あなたのペンを借りてもいいですか」となります。", "【答え】② borrow（A: Can I borrow your pen for a minute? B: Sure. Here you are.）", "【確かめ】B が Here you are.（はい、どうぞ）と答えて、ペンをわたす場面と合います。① lend だと「私があなたに貸してもいいですか」の意味になり、場面と合いません。③ rent は料金をはらう借り方で、ペン1本には合いません。④ give は「あげる」で、1分だけ借りる意味になりません。", "【よくあるまちがい】lend と borrow を日本語の「かりる・かす」の感覚で混ぜてしまうことです。「私が借りる」なら borrow、「私が貸す」なら lend と、主語を中心に考えます。"]},
  "borrow・lend・rent",
);

const f05 = make(
  {"tiles": [[["He finished", "blue", "主語＋動詞"], ["＿＿＿＿", "red", "動詞の形"], ["the book last night.", "gray", "本"]]], "cue": "finished ＋ 動詞", "cuelab": "finish は ing形だけ", "rule": ["finish ＋ 〜ing ＝ 〜し終える", "to 不定詞は finish のあとに置けない", "enjoy・practice も ing形"], "fill": [[["He finished", "blue", "主語＋動詞"], ["reading", "red", "答え"], ["the book last night.", "gray", "本"]]], "band": "③ reading", "bads": ["① to read（finish のあとに不可）", "② read（原形は続かない）", "④ reads（動詞が2つ並ぶ）"], "good": "③ reading  ○", "mb": "finished to read", "mg": "finished reading", "mode": "動詞の形を選ぼう", "notes": ["【状況】「彼は昨夜その本を読み終えました」という文の、空所に入る動詞の形を選びます。", "【手がかり】finished のあとに動詞を続けます。finish は動名詞（ing形）だけを目的語にとります。", "【理由】動詞のなかには、あとに動詞を続けるとき、to 不定詞ではなく ing形（動名詞）しか使えないものがあります。finish（〜し終える）はその仲間で、finish ＋ 〜ing の形で使います。「すでにしている動作を終える」という意味なので、これから先を表す to 不定詞とは合いません。", "【当てはめ】finished のあとに動詞が続いています。finish は「〜し終える」で、動名詞（ing形）だけを目的語にします。 read の ing形は reading です。つづりは e を取らず、そのまま ing をつけます。 finished reading the book で「その本を読み終えた」となります。", "【答え】③ reading（He finished reading the book last night.）", "【確かめ】「昨夜その本を読み終えた」と自然です。① to read は finish のあとに使えません。② read と ④ reads は、動詞が2つ並んでしまい、文として成り立ちません。", "【よくあるまちがい】want to 〜 のように、動詞のあとは何でも to 不定詞だと思ってしまうことです。finish・enjoy・practice・mind は ing形だけです。"]},
  "finish ＋ 動名詞",
);

const f06 = make(
  {"tiles": [[["＿＿＿", "red", "感嘆の語"], ["fast", "blue", "副詞"], ["he runs!", "gray", "主語＋動詞"]]], "cue": "fast ＝ 副詞（名詞なし）", "cuelab": "How ＋ 副詞", "rule": ["How ＋ 形容詞・副詞 ＋ 主語 ＋ 動詞!", "What ＋ (a) 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞!", "fast に名詞は続かない → How"], "fill": [[["How", "red", "答え"], ["fast", "blue", "副詞"], ["he runs!", "gray", "主語＋動詞"]]], "band": "④ How", "bads": ["① What（名詞がないので不可）", "② What a（名詞がないので不可）", "③ Very（感嘆文にならない）"], "good": "④ How fast he runs!  ○", "mb": "What fast he runs!", "mg": "How fast he runs!", "mode": "空所に入る語を選ぼう", "notes": ["【状況】「彼はなんて速く走るのでしょう」という感嘆文の、空所に入る語を選びます。", "【手がかり】fast は副詞で、名詞が続いていません。名詞がない感嘆文は How を使います。", "【理由】感嘆文（おどろきや感動を表す文）は、2つの形があります。形容詞・副詞を強調するときは How ＋ 形容詞（副詞）＋ 主語 ＋ 動詞、名詞をふくむかたまりを強調するときは What (a) ＋ 形容詞 ＋ 名詞 ＋ 主語 ＋ 動詞 です。fast は副詞で、名詞がないので How を使います。", "【当てはめ】文の中身を見ます。fast（速く）は副詞で、名詞（a fast runner など）はありません。 名詞がないときの感嘆文は、How ＋ 副詞 ＋ 主語 ＋ 動詞 の形です。 How fast he runs! で「彼はなんて速く走るのだろう」となります。", "【答え】④ How（How fast he runs!）", "【確かめ】「なんて速く走るのだろう」と自然です。① What と ② What a は、あとに名詞が必要です（What a fast runner he is! なら正しい）。③ Very は感嘆文を作れません。", "【よくあるまちがい】感嘆文はいつも What だと覚えて、What を選んでしまうことです。あとに名詞があるなら What (a)、形容詞・副詞だけなら How と見分けます。"]},
  "感嘆文 How",
);

const f07 = make(
  {"tiles": [[["My sister", "blue", "主語"], ["＿＿", "red", "be動詞"]], [["going to study abroad", "gray", "be going to"], ["next year.", "gray", "未来の時"]]], "cue": "going to の前 ＝ be動詞", "cuelab": "主語は My sister（3人称単数）", "rule": ["be going to ＋ 原形 ＝ 〜するつもり", "be動詞は主語で決まる（am・is・are）", "My sister ＝ she ＝ 3人称単数 → is"], "fill": [[["My sister", "blue", "主語"], ["is", "red", "答え"]], [["going to study abroad", "gray", "be going to"], ["next year.", "gray", "未来の時"]]], "band": "② is", "bads": ["① am（主語が I のとき）", "③ are（you・複数のとき）", "④ be（この位置では使わない）"], "good": "② is  ○", "mb": "She are going to", "mg": "She is going to", "mode": "空所に入る be動詞を選ぼう", "notes": ["【状況】「私の姉は来年、留学するつもりです」という文の、空所に入る be動詞を選びます。", "【手がかり】going to のまえには be動詞が必要です。主語 My sister は3人称単数です。", "【理由】be going to ＋ 動詞の原形 は、「〜するつもりだ」と、前から決めている予定を表します。このとき going to の前の be動詞は、主語によって形が変わります。I なら am、you と複数なら are、he・she・it などの3人称単数なら is です。", "【当てはめ】going to のまえに、be動詞が必要です。主語は My sister です。 My sister は she と同じ3人称単数です。I（am）でも you・複数（are）でもありません。 3人称単数なので is です。is going to study で「勉強するつもりだ」となります。", "【答え】② is（My sister is going to study abroad next year.）", "【確かめ】「姉は来年、留学するつもりだ」と自然です。① am は主語が I のとき、③ are は you や複数のとき、④ be は原形で、この位置では使いません。", "【よくあるまちがい】going to の部分だけを覚えて、be動詞を落としたり、主語に合わない形にしたりすることです。主語が変われば am・is・are も変わります。"]},
  "be going to の be動詞",
);

const f08 = make(
  {"tiles": [[["Osaka is", "blue", "主語＋動詞"], ["one of the", "gray", "〜のひとつ"]], [["＿＿＿＿", "red", "最上級"], ["cities in Japan.", "gray", "複数名詞"]]], "cue": "one of the ＋ ＿＿ ＋ cities", "cuelab": "あとに最上級と複数名詞", "rule": ["one of the ＋ 最上級 ＋ 複数名詞", "「〜のうちのひとつ」という意味", "large の最上級 ＝ largest"], "fill": [[["Osaka is", "blue", "主語＋動詞"], ["one of the", "gray", "〜のひとつ"]], [["largest", "red", "答え"], ["cities in Japan.", "gray", "複数名詞"]]], "band": "① largest", "bads": ["② the largest（the が重なる）", "③ large（原級）", "④ most large（most は使わない）"], "good": "① largest  ○", "mb": "one of the large", "mg": "one of the largest", "mode": "空所に入る形を選ぼう", "notes": ["【状況】「大阪は日本で最も大きな都市のひとつです」という文の、空所に入る語を選びます。", "【手がかり】one of the のあとには、最上級と複数名詞（cities）が続きます。", "【理由】「最も〜なもののうちのひとつ」は、one of the ＋ 最上級 ＋ 複数名詞 で表します。「いくつかあるなかのひとつ」という意味なので、名詞は複数形にします。the はすでに one of のあとについているので、最上級の前にもう一度つけません。large のように e で終わる語の最上級は、st だけをつけて largest です。", "【当てはめ】one of the のあとに、最上級と複数名詞（cities）が続きます。 large の最上級は、e で終わる語なので st だけをつけた largest です（most は使いません）。 one of the largest cities で「最も大きな都市のひとつ」となります。the は one of the の中にあるので、もう一度つけません。", "【答え】① largest（Osaka is one of the largest cities in Japan.）", "【確かめ】「日本で最も大きな都市のひとつ」と自然です。② the largest は the が2回重なります。③ large は原級で、最上級の意味になりません。④ most large は、large のような短い語に most はつけません。", "【よくあるまちがい】the largest city と同じように、最上級の前にもう1つ the をつけてしまうことです。one of the の the がすでにあるので、最上級だけを入れます。"]},
  "one of the ＋ 最上級",
);

const f09 = make(
  {"tiles": [[["I have two sisters.", "gray", "2人"], ["One is a teacher,", "blue", "ひとり目"]], [["and ＿＿＿＿＿ is a student.", "red", "残りのひとり"]]], "cue": "two sisters ＝ 2人だけ", "cuelab": "ひとりは One、残りは？", "rule": ["2人のうち、ひとりは one", "残りのひとりは the other（決まっている）", "another は残りが決まっていないとき"], "fill": [[["I have two sisters.", "gray", "2人"], ["One is a teacher,", "blue", "ひとり目"]], [["and the other is a student.", "red", "答え"]]], "band": "③ the other", "bads": ["① other（単独では使えない）", "② another（残りが決まっていない）", "④ others（複数形で合わない）"], "good": "③ the other  ○", "mb": "and another is", "mg": "and the other is", "mode": "空所に入る語を選ぼう", "notes": ["【状況】「私には姉妹が2人います。ひとりは先生で、もうひとりは学生です」という文の、空所に入る語（句）を選びます。", "【手がかり】姉妹は2人だけです。ひとりが One なら、残りの1人は決まっています。", "【理由】2つ（2人）あるうちの、ひとつ（ひとり）を one と言ったら、残りのひとつ（ひとり）は the other と言います。残りは1つに決まっているので、the をつけます。another は「（決まっていない）べつの1つ」を表すので、残りが決まっている場面には使いません。", "【当てはめ】I have two sisters. から、姉妹は2人だけだとわかります。 ひとりめは One です。残りは1人しかいないので、決まった1人です。 決まった残りの1人は the other です。the other is a student で「もうひとりは学生です」となります。", "【答え】③ the other（I have two sisters. One is a teacher, and the other is a student.）", "【確かめ】「ひとりは先生で、もうひとりは学生」と自然です。① other は単独では主語になれません。② another は「べつのどれか1つ」で、2人しかいない場面に合いません。④ others は複数形で、1人の説明に合いません。", "【よくあるまちがい】another を「もうひとつ」と覚えて、2つのうちの残りにも使ってしまうことです。2つしかないとき、残りは the other です。"]},
  "one … the other",
);

const f10 = make(
  {"tiles": [[["Wine is made", "blue", "受け身"], ["＿＿＿＿", "red", "前置詞"], ["grapes.", "gray", "原料"]]], "cue": "ぶどう → ワイン ＝ 姿が変わる", "cuelab": "原料が変化している", "rule": ["made of ＝ 材料（見てわかる）", "made from ＝ 原料（形・性質が変わる）", "made by ＝ 作った人（by ＋ 人）"], "fill": [[["Wine is made", "blue", "受け身"], ["from", "red", "答え"], ["grapes.", "gray", "原料"]]], "band": "④ from", "bads": ["① of（材料が見てわかるとき）", "② by（作った人がくるとき）", "③ in（場所・時のとき）"], "good": "④ from  ○", "mb": "made of grapes", "mg": "made from grapes", "mode": "空所に入る前置詞を選ぼう", "notes": ["【状況】「ワインはぶどうから作られます」という文の、空所に入る前置詞を選びます。", "【手がかり】ぶどうは発酵してワインになります。もとの姿が残らない変化です。", "【理由】「〜で作られている」は、材料のようすで前置詞が変わります。作ったあとも、材料が見てわかる（形や性質が変わらない）ときは made of、原料の形や性質が変わってしまうときは made from を使います。ぶどうはしぼって発酵させると、もとの姿が残らないので made from です。", "【当てはめ】ワインとぶどうを見くらべます。ぶどうを発酵させると、ワインは見た目も性質もまったく別のものになります。 原料が変化するときは made from です（材料が見てわかるなら made of）。 Wine is made from grapes. で「ワインはぶどうから作られる」となります。", "【答え】④ from（Wine is made from grapes.）", "【確かめ】「ワインはぶどうから作られる」と自然です。① of は This desk is made of wood.（机は木でできている）のように、材料が見てわかるときの語です。② by は作った人（by Ken）の前に使います。③ in は場所や時で、材料を表しません。", "【よくあるまちがい】made of と made from を同じものだと思ってしまうことです。「見て材料がわかる → of、変化して見えない → from」と見わけます。"]},
  "made of・made from",
);

const f11 = make(
  {"tiles": [[["A: I like Japanese food.", "blue", "Aの言葉"]], [["B: ＿＿＿＿＿＿＿＿", "red", "私もです"]]], "cue": "like ＝ 一般動詞の肯定文", "cuelab": "「私もです」と言いたい", "rule": ["肯定文への「〜もです」＝ So ＋ 動詞 ＋ 主語", "動詞は前の文に合わせる（like → do）", "否定文には Neither ＋ 動詞 ＋ 主語"], "fill": [[["A: I like Japanese food.", "blue", "Aの言葉"]], [["B: So do I.", "red", "答え"]]], "band": "② So do I.", "bads": ["① So am I.（be動詞は like に合わない）", "③ Neither do I.（否定文に使う）", "④ I do so.（決まった形でない）"], "good": "② So do I.  ○", "mb": "So am I.", "mg": "So do I.", "mode": "「私もです」の文を選ぼう", "notes": ["【状況】A の「私は和食が大好きです」に、「私もです」と答える文を選びます。", "【手がかり】A の文は like を使った肯定文です。「私もです」は、So ＋ 動詞 ＋ 主語 の形で答えます。", "【理由】肯定の文に「〜もそうです」と答えるときは、So ＋ 動詞 ＋ 主語 の形を使います。この動詞は、前の文の動詞に合わせます。like のような一般動詞なら do（主語が3人称単数なら does）、be動詞なら am・is・are、can などの助動詞ならその助動詞です。", "【当てはめ】A の文は I like Japanese food. で、肯定文です。B は同じ気持ちなので、So で答える形を使います。 like は一般動詞です。so のあとの動詞は、一般動詞なら do で受けます。 So ＋ do ＋ 主語（I）で、So do I.「私もです」となります。", "【答え】② So do I.（A: I like Japanese food very much. B: So do I. My favorite is sushi.）", "【確かめ】「私は和食が好き」「私もです。いちばん好きなのは寿司です」と会話がつながります。① So am I. は be動詞の文に対する答えです。③ Neither do I. は否定文に対して「私もしません」と答える形です。④ I do so. は「私もです」の決まった形ではありません。", "【よくあるまちがい】動詞の種類をそろえず、いつも So am I. と答えてしまうことです。前の文の動詞（be動詞・一般動詞・助動詞）に合わせて、am・do・can などを選びます。"]},
  "So do I.",
);

const f12 = make(
  {"tiles": [[["My sister", "blue", "主語"], ["is interested", "blue", "興味がある"], ["＿＿", "red", "前置詞"]], [["Korean music.", "gray", "興味の対象"]]], "cue": "be interested ＋ ＿＿", "cuelab": "決まった組み合わせ", "rule": ["be interested in ＝ 〜に興味がある", "be good at ＝ 〜が得意", "be afraid of ＝ 〜をこわがる"], "fill": [[["My sister", "blue", "主語"], ["is interested", "blue", "興味がある"], ["in", "red", "答え"]], [["Korean music.", "gray", "興味の対象"]]], "band": "① in", "bads": ["② at（be good at の語）", "③ on（この熟語では使わない）", "④ with（この熟語では使わない）"], "good": "① in  ○", "mb": "interested at", "mg": "interested in", "mode": "空所に入る前置詞を選ぼう", "notes": ["【状況】「私の姉は韓国の音楽に興味があります」という文の、空所に入る前置詞を選びます。", "【手がかり】be interested のあとには、決まった前置詞がつきます。熟語として覚えます。", "【理由】be interested in 〜 は「〜に興味がある」という決まった熟語です。形容詞のあとにつく前置詞は、形容詞ごとに決まっていて、理屈ではなく組み合わせで覚えます。be good at（〜が得意）、be afraid of（〜をこわがる）、be famous for（〜で有名）なども同じ仲間です。", "【当てはめ】be interested のあとの前置詞を考えます。「〜に興味がある」は be interested in 〜 です。 at は be good at（得意）、on は depend on（〜しだい）などの熟語で使う語で、interested とは組みません。 is interested in Korean music で「韓国の音楽に興味がある」となります。", "【答え】① in（My sister is interested in Korean music.）", "【確かめ】「姉は韓国の音楽に興味がある」と自然です。② at は be good at の語、③ on と ④ with は be interested のあとにつかない組み合わせです。", "【よくあるまちがい】日本語の「〜に」から、to や at を選んでしまうことです。日本語の助詞から前置詞を決めず、熟語ごとセットで覚えます。"]},
  "be interested in",
);

const f13 = make(
  {"tiles": [[["I'm", "blue", "主語＋be動詞"], ["＿＿＿＿＿＿＿", "red", "熟語"], ["my glasses.", "gray", "目的語"]], [["Have you seen them?", "green", "手がかり"]]], "cue": "Have you seen them? ＝ 見かけた？", "cuelab": "メガネを探している", "rule": ["look for ＝ 〜を探す", "look at ＝ 〜を見る／look after ＝ 世話をする", "look like ＝ 〜に似ている"], "fill": [[["I'm", "blue", "主語＋be動詞"], ["looking for", "red", "答え"], ["my glasses.", "gray", "目的語"]], [["Have you seen them?", "green", "手がかり"]]], "band": "② looking for", "bads": ["① looking at（見つめる）", "③ looking after（世話をする）", "④ looking like（似ている）"], "good": "② looking for  ○", "mb": "looking at glasses", "mg": "looking for glasses", "mode": "空所に入る熟語を選ぼう", "notes": ["【状況】「私はメガネを（　）います。見かけませんでしたか」という文の、空所に入る熟語を選びます。", "【手がかり】「見かけませんでしたか」とたずねているので、メガネを探している場面です。", "【理由】look は、あとにつく前置詞で意味が変わります。look for 〜 は「〜を探す」、look at 〜 は「〜を（目を向けて）見る」、look after 〜 は「〜の世話をする」、look like 〜 は「〜に似ている」です。次の文で「見かけませんでしたか」とたずねているので、メガネを探している場面です。", "【当てはめ】次の文 Have you seen them?（それらを見かけませんでしたか）から、メガネが見つからずに困っているとわかります。 「見つからないものを探す」は look for 〜 です。 I'm looking for my glasses. で「私はメガネを探しています」となります。", "【答え】② looking for（I'm looking for my glasses. Have you seen them?）", "【確かめ】「メガネを探しています。見かけませんでしたか」と会話がつながります。① looking at は見つめている意味で、見かけたかをたずねる文とつながりません。③ looking after は「世話をする」、④ looking like は「似ている」で、どちらも意味が通りません。", "【よくあるまちがい】look を「見る」とだけ覚えて、looking at を選んでしまうことです。look は for・at・after・like など、あとの語で意味が変わる動詞です。"]},
  "look for・look at・look after",
);

const f14 = make(
  {"tiles": [[["He studies", "blue", "主語＋動詞"], ["＿＿＿＿", "red", "副詞"], ["every day,", "gray", "毎日"]], [["so he often gets good grades.", "green", "結果"]]], "cue": "so ＝ だから好成績", "cuelab": "一生けん命に勉強する", "rule": ["hard ＝ 熱心に（副詞）", "hardly ＝ ほとんど〜ない（意味が反対）", "difficult は形容詞（動詞を説明できない）"], "fill": [[["He studies", "blue", "主語＋動詞"], ["hard", "red", "答え"], ["every day,", "gray", "毎日"]], [["so he often gets good grades.", "green", "結果"]]], "band": "③ hard", "bads": ["① hardly（ほとんど〜ない）", "② difficult（形容詞）", "④ hardness（名詞）"], "good": "③ hard  ○", "mb": "studies hardly", "mg": "studies hard", "mode": "空所に入る語を選ぼう", "notes": ["【状況】「彼は毎日一生けん命に勉強するので、よい成績をよくとります」という文の、空所に入る語を選びます。", "【手がかり】「だから、よい成績をとる」とあるので、よく勉強していることがわかります。", "【理由】動詞（studies）を説明する語は、副詞です。hard は形容詞（かたい・難しい）としても、副詞（熱心に・一生けんめいに）としても使える語です。形が似ている hardly は「ほとんど〜ない」という否定に近い意味の副詞で、意味がまったく逆になります。", "【当てはめ】あとの so he often gets good grades（だから、よい成績をよくとる）から、よく勉強していることがわかります。 動詞 studies を説明するのは副詞です。「熱心に」の意味の副詞は hard です。 studies hard で「一生けん命に勉強する」となります。", "【答え】③ hard（He studies hard every day, so he often gets good grades.）", "【確かめ】「毎日一生けん命に勉強するので、よい成績をとる」と原因と結果がつながります。① hardly だと「ほとんど勉強しない」になり、あとの文とつながりません。② difficult は形容詞で、動詞を説明できません。④ hardness は名詞です。", "【よくあるまちがい】hard の副詞は hardly だと思ってしまうことです。hard の副詞は hard のままです。hardly は「ほとんど〜ない」という別の意味の語です。"]},
  "hard と hardly",
);

const f15 = make(
  {"tiles": [[["The box is light", "blue", "主語＋形容詞"], ["＿＿＿＿＿", "red", "程度"]], [["for me to carry.", "gray", "私が運ぶのに"]]], "cue": "light ＝ 形容詞のあとに置く", "cuelab": "「〜するのに十分」", "rule": ["形容詞 ＋ enough to 〜 ＝ 〜するのに十分…", "enough は形容詞のうしろ（light enough）", "too は形容詞の前・反対の意味"], "fill": [[["The box is light", "blue", "主語＋形容詞"], ["enough", "red", "答え"]], [["for me to carry.", "gray", "私が運ぶのに"]]], "band": "③ enough", "bads": ["① too（形容詞の前・意味が反対）", "② so（so ＋ 形容詞 ＋ that の形）", "④ such（such ＋ 名詞の形）"], "good": "③ enough  ○", "mb": "light too", "mg": "light enough", "mode": "空所に入る語を選ぼう", "notes": ["【状況】「その箱は私が運べるくらい軽いです」という文の、空所に入る語を選びます。", "【手がかり】「私が運べるくらい軽い」という、程度を表す語が入ります。enough は形容詞のうしろに置きます。", "【理由】「〜するのに十分…だ」は、形容詞 ＋ enough ＋ (for 人) ＋ to 〜 の形で表します。enough は、形容詞や副詞のうしろに置くのが決まりです。too（〜すぎる）は形容詞の前に置き、「…すぎて〜できない」という反対の意味になります。", "【当てはめ】light for me to carry を見ます。「私が運ぶのに、軽い」の程度を表す語が入ります。 「〜するのに十分…」は、形容詞のあとに enough を置きます（light enough）。 light enough for me to carry で「私が運べるくらい軽い」となります。for me は to carry の意味上の主語です。", "【答え】③ enough（The box is light enough for me to carry.）", "【確かめ】「その箱は私が運べるくらい軽い」と自然です。① too は形容詞の前に置く語で、意味も「軽すぎて運べない」と反対になります。② so と ④ such は、so ＋ 形容詞 ＋ that 〜 や such ＋ 名詞 の形で使い、この文とは形が合いません。", "【よくあるまちがい】enough を形容詞の前に置いてしまうことです。enough は形容詞のうしろに置きます（enough water のように名詞の前に置くときだけ前です）。"]},
  "形容詞 ＋ enough to",
);

const f16 = make(
  {"tiles": [[["Of all the members", "gray", "全員のなかで"], ["Mika is the", "blue", "the がある"]], [["busy → ＿＿＿＿", "red", "形を変える"]]], "cue": "the ＋ of all 〜 ＝ 最上級", "cuelab": "「いちばん〜」", "rule": ["「〜のなかでいちばん」＝ the ＋ 最上級", "y で終わる語は y を i に変えて est", "busy → busiest（busyest ではない）"], "fill": [[["Of all the members", "gray", "全員のなかで"], ["Mika is the", "blue", "the がある"]], [["busiest", "red", "答え"]]], "band": "busiest", "bads": ["× busyest（y を i にしていない）", "× most busy（busy は est をつける）", "× busier（比較級）"], "good": "busiest  ○", "mb": "busyest", "mg": "busiest", "mode": "形を変える語を見よう", "notes": ["【状況】（　）内の busy を、「クラブの全員のなかでミカがいちばん忙しい」という文に合う形に直して書きます。", "【手がかり】Of all the members（全員のなかで）と the が、最上級の合図です。", "【理由】「〜のなかでいちばん…」は、the ＋ 最上級 で表します。Of all the members（全員のなかで）と、空所の前の the が、最上級の合図です。最上級は、短い語には est をつけて作ります。busy のように「子音字 ＋ y」で終わる語は、y を i に変えてから est をつけます。", "【当てはめ】Of all the members（全員のなかで）と the から、最上級だとわかります。 busy は y で終わる語です。y を i に変えます（busy → busi）。 est をつけて busiest です。the busiest で「いちばん忙しい」となります。", "【答え】busiest", "【確かめ】busy → busier → busiest と、y が i に変わっています。busyest（y のまま）は誤りで、most busy も誤りです。「ミカはクラブの全員のなかでいちばん忙しい」と自然な文になります。", "【よくあるまちがい】busy に そのまま est をつけて busyest と書いてしまうことです。y を i に変えてから est をつけます（happy → happiest、easy → easiest も同じです）。"], "bandchk": "まちがいやすい形と見くらべる"},
  "最上級のつくり方（y → iest）",
);

const f17 = make(
  {"tiles": [[["I have known", "blue", "①"], ["Aya", "gray", "②"]], [["since", "red", "③"], ["ten years.", "gray", "④"]]], "cue": "ten years ＝ 期間の長さ", "cuelab": "since は「いつから」の言い方", "rule": ["for ＋ 期間の長さ（for ten years）", "since ＋ 始まった時点（since 2017）", "ten years は期間 → since は誤り"], "fill": [[["I have known", "blue", "①"], ["Aya", "gray", "②"]], [["for", "green", "③ を直す"], ["ten years.", "gray", "④"]]], "band": "③ since → for", "bads": ["① have known（現在完了で正しい）", "② Aya（目的語で正しい）", "④ ten years（期間で正しい）"], "good": "③ since → for  ○", "mb": "since ten years", "mg": "for ten years", "mode": "誤りのある部分を探そう", "notes": ["【状況】「私はアヤを10年間知っています」という意味の英文で、誤っている部分を①〜④から1つ選びます。", "【手がかり】ten years は「10年間」という期間の長さです。始まった時点ではありません。", "【理由】現在完了（継続）で「どのくらいの間」を言うとき、期間の長さには for、始まった時点には since を使います。for の後ろは ten years・two hours のような期間の長さ、since の後ろは 2020・last year・I was ten のような「いつから」を表す語句です。ten years は期間の長さなので、for が正しい形です。", "【当てはめ】ten years は「10年間」で、期間の長さです。いつから始まったか（時点）ではありません。 期間の長さには for をつけます。since は since 2017・since last year のように「始まった時点」につきます。 ③ since を for に直して、I have known Aya for ten years. が正しい文になります。", "【答え】③ since（I have known Aya for ten years.）", "【確かめ】「私はアヤを10年間知っている」と自然な文になります。① have known（現在完了）、② Aya（目的語）、④ ten years（期間の長さ）は、どれも正しい部分です。", "【よくあるまちがい】「〜から」を since、「〜間」を for と日本語で考えたつもりでも、あとに来る語句の種類を見ないことです。since のあとは時点、for のあとは期間の長さです。"]},
  "for と since",
);

const f18 = make(
  {"tiles": [[["She is a good", "blue", "形容詞＋名詞"], ["tennis player.", "blue", "名詞"]], [["＝ She plays tennis ＿＿＿＿.", "red", "副詞に変える"]]], "cue": "a good 〜 player ＝ 上手な選手", "cuelab": "「上手にプレーする」と同じ", "rule": ["good は形容詞（名詞を説明する）", "動詞を説明するのは副詞 → well", "good の副詞は well"], "fill": [[["She is a good", "blue", "形容詞＋名詞"], ["tennis player.", "blue", "名詞"]], [["＝ She plays tennis well.", "red", "答え"]]], "band": "④ well", "bads": ["① good（形容詞）", "② best（意味がちがう）", "③ better（意味がちがう）"], "good": "④ well  ○", "mb": "plays tennis good", "mg": "plays tennis well", "mode": "空所に入る語を選ぼう", "notes": ["【状況】「彼女は上手なテニス選手です」と同じ内容になるように、「彼女は上手にテニスをします」の空所に入る語を選びます。", "【手がかり】a good player の good は名詞を説明しています。言いかえでは動詞 plays を説明する語が必要です。", "【理由】名詞を説明するのは形容詞、動詞を説明するのは副詞です。a good tennis player の good は、名詞 player を説明する形容詞です。これを「上手にテニスをする」と言いかえると、動詞 plays を説明することになるので、副詞が必要です。good の副詞は well です。", "【当てはめ】もとの文では、good が名詞 player を説明しています。good は形容詞です。 言いかえた文では、動詞 plays を説明する語が必要です。動詞を説明するのは副詞です。 good の副詞は well です。plays tennis well で「上手にテニスをする」となります。", "【答え】④ well（She plays tennis well.）", "【確かめ】「上手な選手だ」＝「上手にプレーする」と、同じ内容になります。① good は形容詞で、動詞を説明できません。② best と ③ better は plays tennis best（いちばん上手に）・better（より上手に）という、ちがう意味の文になります。", "【よくあるまちがい】good と well を、どちらも「上手」だからと同じに考えてしまうことです。good ＝ 形容詞（名詞を説明）、well ＝ 副詞（動詞を説明）と、働きで使い分けます。"]},
  "good（形容詞）と well（副詞）",
);

const f19 = make(
  {"tiles": [[["Thank you", "blue", "お礼"], ["for", "gray", "前置詞"], ["＿＿＿＿", "red", "動詞の形"]], [["me with my homework.", "gray", "私の宿題を"]]], "cue": "for のあと ＝ 前置詞のうしろ", "cuelab": "動詞は ing形", "rule": ["前置詞のあとの動詞は ing形", "Thank you for 〜ing ＝ 〜してくれてありがとう", "to 不定詞・原形は前置詞のあとに置けない"], "fill": [[["Thank you", "blue", "お礼"], ["for", "gray", "前置詞"], ["helping", "red", "答え"]], [["me with my homework.", "gray", "私の宿題を"]]], "band": "④ helping", "bads": ["① help（原形は置けない）", "② to help（to 不定詞は置けない）", "③ helped（過去形は置けない）"], "good": "④ helping  ○", "mb": "for help me", "mg": "for helping me", "mode": "動詞の形を選ぼう", "notes": ["【状況】「宿題を手伝ってくれてありがとう」という文の、空所に入る動詞の形を選びます。", "【手がかり】for は前置詞です。前置詞のうしろに動詞を置くときは、ing形にします。", "【理由】前置詞（for・in・of・about・after など）のうしろには、名詞か、動名詞（動詞の ing形）が置けます。動詞の原形や to 不定詞、過去形は置けません。Thank you for 〜ing は、「〜してくれてありがとう」という決まった言い方で、前置詞 for のあとなので helping になります。", "【当てはめ】空所の前の for を見ます。for は前置詞です。 前置詞のあとに動詞を置くときは、ing形（動名詞）にします。 help の ing形は helping です。Thank you for helping me で「手伝ってくれてありがとう」となります。", "【答え】④ helping（Thank you for helping me with my homework.）", "【確かめ】「宿題を手伝ってくれてありがとう」と自然です。① help・② to help・③ helped は、どれも前置詞 for のあとに置けない形です。", "【よくあるまちがい】Thank you と to 不定詞を結びつけて、to help を選んでしまうことです。前置詞のあとは to 不定詞ではなく、動名詞です。"]},
  "前置詞 ＋ 動名詞",
);

const f20 = make(
  {"tiles": [[["than", "gray", ""], ["two years", "gray", ""], ["me", "gray", ""]], [["older", "gray", ""], ["is", "gray", ""], ["He", "gray", ""]]], "cue": "差は比較級の前", "cuelab": "「2歳」＝ two years を older の前に", "rule": ["He is older than me ＝ 彼は私より年上", "差（2歳）は比較級の直前に置く", "two years older ＝ 2歳年上（years は複数形）"], "fill": [[["He", "blue", "主語"], ["is", "gray", "be動詞"], ["two years", "red", "差"]], [["older", "green", "比較級"], ["than", "gray", "〜より"], ["me.", "gray", "比べる相手"]]], "band": "He is two years older than me.", "bads": ["× He is older two years than me.", "× He is two year older than me.", "× He is two years old than me."], "good": "He is two years older than me.", "mb": "older two years", "mg": "two years older", "mode": "並べかえる語（句）を見よう", "notes": ["【状況】6つの語（句）を並べかえて、「彼は私より2歳年上です」という英文を作ります。", "【手がかり】「2歳」のように差を表す語句は、比較級の直前に置きます。", "【理由】「AはBより〜だ」は、A is 比較級 than B で表します。「どれだけ（2歳）」と差を言いたいときは、その差を表す語句を、比較級のすぐ前に置きます。two years older で「2歳年上」、a lot taller なら「ずっと背が高い」のように、差の言葉は比較級の直前です。", "【当てはめ】文の土台を作ります。「彼は年上だ」は He is older です。 差の「2歳」は two years です。比較級 older の直前に置いて、He is two years older とします。two years は複数なので years です。 「私より」は than me です。最後に置いて、He is two years older than me. となります。", "【答え】He is two years older than me.", "【確かめ】6つの語（句）をすべて使っています。「彼は（He）です（is）／2歳（two years）年上（older）／私より（than me）」と、日本文の順に対応しています。", "【よくあるまちがい】差の語句を older のあとに置いて、older two years としてしまうことです。差は比較級の前、比べる相手は than のあとです。two year と単数にするのも誤りです。"], "bandchk": "まちがえやすい語順・形と見くらべる"},
  "差を表す比較（two years older）",
);

const f21 = make(
  {"tiles": [[["know", "gray", ""], ["which", "gray", ""], ["to", "gray", ""], ["I", "gray", ""]], [["train", "gray", ""], ["take", "gray", ""], ["don't", "gray", ""]]], "cue": "which ＋ 名詞 ＋ to 〜", "cuelab": "「どの〜を…すべきか」", "rule": ["疑問詞 ＋ to ＋ 原形 ＝ 〜すべきか", "which ＋ 名詞 ＋ to 〜 ＝ どの〜を…すべきか", "know のあとに続けて「わからない」内容を言う"], "fill": [[["I", "blue", "主語"], ["don't know", "gray", "わからない"]], [["which train", "red", "どの電車を"], ["to take.", "green", "to ＋ 原形"]]], "band": "I don't know which train to take.", "bads": ["× I don't know to take which train.", "× I don't know which to take train.", "× I know don't which train to take."], "good": "I don't know which train to take.", "mb": "to take which train", "mg": "which train to take", "mode": "並べかえる語を見よう", "notes": ["【状況】7つの語を並べかえて、「私はどちらの電車に乗ればよいかわかりません」という英文を作ります。", "【手がかり】which train to take で、「どの電車に乗るべきか」というひとまとまりになります。", "【理由】疑問詞のあとに to ＋ 動詞の原形 を続けると、「〜すべきか」という意味のかたまりになります。what to do（何をすべきか）、how to get（行き方）、which train to take（どの電車に乗るべきか）のように、あとに名詞がつくときは 疑問詞 ＋ 名詞 ＋ to 〜 の順です。このかたまりが know の目的語になります。", "【当てはめ】文の土台を作ります。「私は知らない」は I don't know です。 「どの電車に乗るべきか」は which train to take です。which のあとに名詞 train をつけ、to take を続けます。 know のあとにこのかたまりを置いて、I don't know which train to take. となります。", "【答え】I don't know which train to take.", "【確かめ】7つの語をすべて使っています。「私は知らない（I don't know）／どの電車に乗るべきか（which train to take）」と、日本文の順に対応しています。", "【よくあるまちがい】which と train を離して、which to take train のように並べてしまうことです。which は名詞とくっつけて which train とし、そのあとに to take を続けます。"], "bandchk": "まちがえやすい語順と見くらべる"},
  "疑問詞 ＋ 名詞 ＋ to 不定詞",
);

const f22 = make(
  {"tiles": [[["something", "gray", ""], ["cold", "gray", ""], ["I", "gray", ""]], [["Can", "gray", ""], ["have", "gray", ""], ["to drink", "gray", ""]]], "cue": "something ＋ 形容詞 ＋ to 〜", "cuelab": "「何か冷たい飲み物」", "rule": ["something の説明は うしろ に置く", "形容詞は something の直後（something cold）", "to 〜 はそのあと（something cold to drink）"], "fill": [[["Can I", "blue", "ていねいな依頼"], ["have", "gray", "もらう"]], [["something", "red", "何か"], ["cold", "green", "形容詞"], ["to drink?", "gray", "to ＋ 原形"]]], "band": "Can I have something cold to drink?", "bads": ["× Can I have cold something to drink?", "× Can I have something to drink cold?", "× Can have I something cold to drink?"], "good": "Can I have something cold to drink?", "mb": "cold something", "mg": "something cold", "mode": "並べかえる語（句）を見よう", "notes": ["【状況】6つの語（句）を並べかえて、「何か冷たい飲み物をいただけますか」という英文を作ります。", "【手がかり】形容詞 cold は something のうしろに置き、そのあとに to drink を続けます。", "【理由】something・anything・nothing のような語は、形容詞で説明するとき、前ではなく後ろに置きます。そのあとに to 不定詞を続けるときは、something ＋ 形容詞 ＋ to 〜 の順です。something cold to drink で「何か冷たい飲み物」となります。Can I 〜? は「〜してもいいですか」とていねいに頼む言い方です。", "【当てはめ】依頼の形を作ります。Can I have 〜? で「〜をいただけますか」です。 「何か冷たいもの」は something cold です。形容詞 cold は something のうしろに置きます。 「飲むための」は to drink で、いちばん最後に置きます。Can I have something cold to drink? となります。", "【答え】Can I have something cold to drink?", "【確かめ】6つの語（句）をすべて使っています。「いただけますか（Can I have）／何か冷たい（something cold）／飲むための（to drink）」と、日本文の順に対応しています。", "【よくあるまちがい】cold something のように、形容詞を前に置いてしまうことです。something・anything・nothing は、形容詞が「うしろ」から説明します。"], "bandchk": "まちがえやすい語順と見くらべる"},
  "something ＋ 形容詞 ＋ to 〜",
);

const f23 = make(
  {"tiles": [[["help", "blue", "手伝う"], ["my mother", "gray", "人"]], [["cook dinner", "gray", "原形＋目的語"], ["every Sunday", "gray", "毎週日曜日"]]], "cue": "help ＋ 人 ＋ 動詞の原形", "cuelab": "「人が〜するのを手伝う」", "rule": ["help ＋ 人 ＋ 原形 ＝ 人が〜するのを手伝う", "「毎週日曜日」＝ every Sunday（on は不要）", "習慣なので現在形（I help）"], "fill": [[["I help", "blue", "主語＋動詞"], ["my mother", "gray", "人"]], [["cook dinner", "green", "原形＋目的語"], ["every Sunday.", "gray", "時"]]], "band": "I help my mother cook dinner every Sunday.", "bads": ["× cooks dinner（原形にする）", "× help to my mother（to は不要）", "× on every Sunday（on は不要）"], "good": "I help my mother cook dinner every Sunday.", "mb": "help my mother cooks", "mg": "help my mother cook", "mode": "英文の形を考えよう", "notes": ["【状況】日本語の「私は毎週日曜日に、母が夕食を作るのを手伝います」を、help を使って英語にします。", "【手がかり】「母が作るのを手伝う」は、help ＋ 人 ＋ 動詞の原形 の形で書きます。", "【理由】「（人）が〜するのを手伝う」は、help ＋ 人 ＋ 動詞の原形 で表します。「人」のあとの動詞には、to をつけない原形を置くのがふつうです。「毎週日曜日」は every Sunday で、every がつくと on は不要です。毎週の習慣なので、動詞は現在形（help）にします。", "【当てはめ】文の土台を作ります。「私は手伝います」は I help です。習慣なので現在形です。 「母が夕食を作るのを」は、人（my mother）のあとに動詞の原形（cook dinner）を続けます。I help my mother cook dinner となります。 「毎週日曜日」は every Sunday で、文のおわりに置きます。I help my mother cook dinner every Sunday. となります。", "【答え】I help my mother cook dinner every Sunday.", "【確かめ】日本文と順に対応しています。「私は手伝う（I help）／母が（my mother）／夕食を作るのを（cook dinner）／毎週日曜日（every Sunday）」です。help my mother to cook も正しい英文ですが、この問題では to のない原形で書きます。every Sunday の前に on をつけていないことも確かめます。", "【よくあるまちがい】help のあとの動詞を cooks や to cook のように変えてしまうことです。「人」のあとは原形です。また、every Sunday に on をつけて on every Sunday とするのも誤りです。"], "bandchk": "まちがえやすい形と見くらべる"},
  "help ＋ 人 ＋ 原形",
);

const f24 = make(
  {"tiles": [[["あなたは", "blue", "you"], ["どちらが", "blue", "Which"]], [["より好き", "red", "like better"], ["犬とねこ", "gray", "dogs or cats"]]], "cue": "AとBではどちら ＝ Which … better", "cuelab": "決まった形", "rule": ["Which do you like better, A or B?", "「どちらがより好き」＝ like … better", "A か B は or でつなぐ（最後は ?）"], "fill": [[["Which", "blue", "どちら"], ["do you like", "gray", "あなたは好き"]], [["better,", "red", "より"], ["dogs or cats?", "gray", "A か B"]]], "band": "Which do you like better, dogs or cats?", "bads": ["× Which do you like good, dogs or cats?", "× Which you do like better, dogs or cats?", "× Which do you like better, dogs and cats?"], "good": "Which do you like better, dogs or cats?", "mb": "like good", "mg": "like better", "mode": "英文の形を考えよう", "notes": ["【状況】日本語の「あなたは犬とねこでは、どちらのほうが好きですか」を、better を使って英語にします。", "【手がかり】2つから選ぶ質問は、Which ... better, A or B? という決まった形で書きます。", "【理由】2つのうちから選んでもらうときは、疑問詞 Which を使います。「どちらのほうが好き」は、Which do you like better, A or B? という決まった形で、better は like を強めて「より（もっと）」を表します。A と B は or でつなぎ、文のおわりに ? をつけます。", "【当てはめ】「どちらが」は Which です。疑問文の語順にして、Which do you like と続けます。 「〜のほうが」は better を like のうしろに置きます。Which do you like better とします。 A と B を or でつなぎます。Which do you like better, dogs or cats? となります。", "【答え】Which do you like better, dogs or cats?", "【確かめ】日本文と順に対応しています。「どちらが（Which）／あなたは好きですか（do you like）／より（better）／犬とねこ（dogs or cats）」です。cats or dogs と順を入れかえても意味は同じです。", "【よくあるまちがい】better を good に変えてしまう、または or を and にしてしまうことです。better は like を強める語、選ぶ2つは or でつなぎます。疑問文なので、do you の語順にします。"], "bandchk": "まちがえやすい形と見くらべる"},
  "Which ... better, A or B?",
);

const f25 = make(
  {"tiles": [[["I wanted to go to the concert.", "blue", "行きたかった"]], [["＿＿＿＿＿＿,", "red", "つなぎ言葉"], ["I had to stay home.", "gray", "行けなかった"]]], "cue": "行きたかった ↔ 行けなかった", "cuelab": "前とあとが反対の内容", "rule": ["However, ＝ しかし（反対の内容をつなぐ）", "Also ＝ また（同じ向きの内容を足す）", "For example ＝ たとえば（例を示す）"], "fill": [[["I wanted to go to the concert.", "blue", "行きたかった"]], [["However,", "red", "答え"], ["I had to stay home.", "gray", "行けなかった"]]], "band": "① However", "bads": ["② Because（理由で、文頭に置けない）", "③ Also（同じ向きを足す）", "④ For example（例を出す）"], "good": "① However,  ○", "mb": "Also, I had to stay", "mg": "However, I had to", "mode": "つなぎ言葉を選ぼう", "notes": ["【状況】短い英文の前後のつながりを読んで、空所に入るつなぎ言葉を選びます。", "【手がかり】前は「行きたかった」、あとは「家にいなければならなかった」で、反対の内容です。", "【理由】文と文のつながりは、つなぎ言葉（接続副詞）が示します。However は「しかし」で、前の内容と反対のことを言うときに使います。Also は「また」で、同じ向きの内容を足します。For example は「たとえば」で、前の内容の例を出します。Because は「なぜなら」ですが、あとに主語と動詞を続けて、文の途中で理由を述べる接続詞です。", "【当てはめ】空所の前は I wanted to go to the concert（行きたかった）、あとは I had to stay home（家にいなければならなかった）です。 行きたかったのに、行けなかったので、前とあとは反対の内容です。 反対の内容をつなぐ語は However（しかし）です。文の最初に置いて、あとにコンマをつけます。", "【答え】① However（I wanted to go to the concert with my friends last Saturday. However, I had to stay home and take care of my little brother.）", "【確かめ】「友だちとコンサートに行きたかった。しかし、家にいて弟の世話をしなければならなかった。そこで、ネットで音楽を聞いた」と話が通ります。② Because は理由を述べる語で、文の最初にコンマをつけて置く形になりません。③ Also は同じ向きの足し算、④ For example は例を出す語で、どちらも話が通りません。", "【よくあるまちがい】つなぎ言葉を、前後の内容を読まずに「文頭に置けそうな語」で選んでしまうことです。前後が同じ向きか反対か、理由か例かを考えて選びます。"]},
  "接続副詞 However",
);

export const figuresMoshi202701EigoKoko1: Record<string, Figure> = {
  moshi_2027_01_eigo_k01: f01,
  moshi_2027_01_eigo_k02: f02,
  moshi_2027_01_eigo_k03: f03,
  moshi_2027_01_eigo_k04: f04,
  moshi_2027_01_eigo_k05: f05,
  moshi_2027_01_eigo_k06: f06,
  moshi_2027_01_eigo_k07: f07,
  moshi_2027_01_eigo_k08: f08,
  moshi_2027_01_eigo_k09: f09,
  moshi_2027_01_eigo_k10: f10,
  moshi_2027_01_eigo_k11: f11,
  moshi_2027_01_eigo_k12: f12,
  moshi_2027_01_eigo_k13: f13,
  moshi_2027_01_eigo_k14: f14,
  moshi_2027_01_eigo_k15: f15,
  moshi_2027_01_eigo_k16: f16,
  moshi_2027_01_eigo_k17: f17,
  moshi_2027_01_eigo_k18: f18,
  moshi_2027_01_eigo_k19: f19,
  moshi_2027_01_eigo_k20: f20,
  moshi_2027_01_eigo_k21: f21,
  moshi_2027_01_eigo_k22: f22,
  moshi_2027_01_eigo_k23: f23,
  moshi_2027_01_eigo_k24: f24,
  moshi_2027_01_eigo_k25: f25,
};
