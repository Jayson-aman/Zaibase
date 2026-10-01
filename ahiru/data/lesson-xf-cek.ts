// 中学受験 英語（小4〜小5）の単元に、動く図解スライドを足す。
// 「❓なぜ？→答え」の連鎖で7枚以上。英文・英単語は図に入れてよい（英語の単元のため）。
import type { DiagramElement, DiagramFigure } from './figures';
import { show, bx, lb, ar, ln, ci, pg, fresh, band, C, FILL } from './diagram-kit';

type O = { w?: number; gap?: number; x0?: number; h?: number; color?: string; fill?: string; size?: number };
/** 横一列の箱（矢印なし）。 */
const row = (labels: string[], y: number, o: O = {}): DiagramElement[] => {
  const n = labels.length;
  const gap = o.gap ?? 6;
  const h = o.h ?? 26;
  const w = o.w ?? (304 - gap * (n - 1)) / n;
  const total = w * n + gap * (n - 1);
  const x0 = o.x0 ?? (320 - total) / 2;
  return labels.map((t, i) => bx(x0 + i * (w + gap), y, w, h, t, o.color, o.fill, o.size ?? 12));
};
/** 上の見出し */
const T = (t: string, color: string = C.ink) => lb(160, 14, t, 12, color, 'middle', true);
/** 新しい場面の下の一行（fresh の中で使う） */
const K = (t: string, color: string = C.ink) => lb(160, 216, t, 12, color, 'middle', true);
/** 前の場面に重ねるときの下の一行 */
const cap = (t: string, color: string = C.ink) => band(196, lb(160, 216, t, 12, color, 'middle', true));
const B = (x: number, y: number, w: number, t: string, color: string = C.blue, fill: string = FILL.blue, h = 26, size = 12) => bx(x, y, w, h, t, color, fill, size);
/** 表（行ごとに文字列の配列）。先頭行は見出し色。 */
const tab = (rows: string[][], y0: number, ws: number[], o: { h?: number; head?: boolean; color?: string; fill?: string; size?: number } = {}): DiagramElement[] => {
  const h = o.h ?? 24;
  const total = ws.reduce((a, b) => a + b, 0);
  const x0 = (320 - total) / 2;
  const out: DiagramElement[] = [];
  rows.forEach((r, ri) => {
    let x = x0;
    r.forEach((t, ci2) => {
      const head = o.head !== false && ri === 0;
      out.push(bx(x, y0 + ri * h, ws[ci2], h, t, head ? C.gray : (o.color ?? C.blue), head ? FILL.gray : (o.fill ?? FILL.blue), o.size ?? 11));
      x += ws[ci2];
    });
  });
  return out;
};
/** a + b = c */
const eq = (y: number, a: string, b: string, c: string, col: string = C.blue, fill: string = FILL.blue): DiagramElement[] => [
  B(10, y, 80, a, col, fill), lb(98, y + 13, '＋', 14, C.ink, 'middle', true), B(106, y, 56, b, C.red, FILL.red),
  lb(170, y + 13, '＝', 14, C.ink, 'middle', true), B(178, y, 132, c, C.green, FILL.green),
];

// ───────── 数字①：1〜20の数え方 ─────────
const u01: DiagramFigure = show([
  {
    note: `英語（えいご）の数（かず）は、1から10まではどれも別（べつ）の形（かたち）をしています。まずここを、形ごと丸（まる）ごと覚（おぼ）えます。`,
    add: fresh(T('1〜10'), ...row(['1 one', '2 two', '3 three', '4 four', '5 five'], 40, { h: 34 }), ...row(['6 six', '7 seven', '8 eight', '9 nine', '10 ten'], 90, { h: 34 }), K('1〜10は ぜんぶ ちがう形')),
  },
  {
    note: `❓11からは、どう作（つく）るの？→ 多（おお）くは「数（かず）＋teen（ティーン）」の形（かたち）です。teen が「10」の部分（ぶぶん）。four＋teen＝fourteen（14）、six＋teen＝sixteen（16）、seven＋teen＝seventeen（17）、nine＋teen＝nineteen（19）。`,
    add: fresh(T('数 ＋ teen'), ...eq(30, 'four', 'teen', 'fourteen  14'), ...eq(64, 'six', 'teen', 'sixteen  16'), ...eq(98, 'seven', 'teen', 'seventeen  17'), ...eq(132, 'nine', 'teen', 'nineteen  19'), K('teen は「10」の部分')),
  },
  {
    note: `❓では11と12も teen がつくの？→ つきません。eleven（11）と twelve（12）は特別（とくべつ）な形（かたち）です。ここだけはそのまま丸ごと覚えます。`,
    add: fresh(T('11と12は とくべつ', C.red), B(20, 50, 130, '11  eleven', C.red, FILL.red, 44, 14), B(170, 50, 130, '12  twelve', C.red, FILL.red, 44, 14), lb(160, 126, '× elevenTEEN   × twelveteen', 12, C.gray, 'middle', true), lb(160, 152, 'teen は つかない！', 14, C.red, 'middle', true), K('eleven と twelve は丸ごと', C.red)),
  },
  {
    note: `❓足（た）し算（ざん）のとおりに書（か）けばいいの？→ つづりが変（か）わる語があります。three→thirteen（thir になる）、five→fifteen（v が f に変わる）、eight→eighteen（eight の t と teen の t が重（かさ）なって1つ）。テストでよく出（で）ます。`,
    add: fresh(T('つづりが 変わる3つ', C.red),
      B(10, 36, 64, 'three', C.blue, FILL.blue), ar(78, 49, 104, 49, C.red), B(108, 36, 84, 'thirteen', C.green, FILL.green), lb(200, 49, 'thir になる', 11, C.red, 'start', true),
      B(10, 78, 64, 'five', C.blue, FILL.blue), ar(78, 91, 104, 91, C.red), B(108, 78, 84, 'fifteen', C.green, FILL.green), lb(200, 91, 'v が f に', 11, C.red, 'start', true),
      B(10, 120, 64, 'eight', C.blue, FILL.blue), ar(78, 133, 104, 133, C.red), B(108, 120, 84, 'eighteen', C.green, FILL.green), lb(200, 133, 't は 1つだけ', 11, C.red, 'start', true),
      K('three・five・eight に注意', C.red)),
  },
  {
    note: `❓13（thirteen）と30（thirty）は、音（おと）がにていて聞（き）き分（わ）けにくいよ。どうすれば？→ 強（つよ）く言（い）う場所（ばしょ）がちがいます。thirTEEN は後（うし）ろを強く＝13、THIRty は前（まえ）を強く＝30。14の fourteen と40の forty も同（おな）じです。`,
    add: fresh(T('どこを 強く言う？'), B(14, 34, 138, 'thirTEEN', C.blue, FILL.blue, 46, 16), B(168, 34, 138, 'THIRty', C.red, FILL.red, 46, 16), lb(83, 100, '後ろを強く', 12, C.blue, 'middle', true), lb(237, 100, '前を強く', 12, C.red, 'middle', true), lb(83, 124, '＝ 13', 16, C.blue, 'middle', true), lb(237, 124, '＝ 30', 16, C.red, 'middle', true), K('強く言う場所で聞き分ける')),
  },
  {
    note: `❓年（とし）をたずねるには？→ How old are you? と聞（き）きます。答（こた）えは I'm ten.（10さいです）。I'm ten years old. と言（い）ってもよく、years old は省（はぶ）いても大丈夫（だいじょうぶ）です。`,
    add: fresh(T('年れいをたずねる'), B(10, 36, 190, 'How old are you?', C.blue, FILL.blue, 30, 14), B(120, 84, 190, `I'm ten.`, C.green, FILL.green, 30, 14), B(120, 124, 190, `I'm ten years old.`, C.green, FILL.green, 30, 14), K('どちらでも答えられる')),
  },
  {
    note: `❓「りんごをいくつ」と聞（き）かれたら？→ How many apples do you have? と聞かれ、I have five apples. と答（こた）えます。5個（こ）で2つ以上（いじょう）なので、apple に s をつけて apples にします（複数形（ふくすうけい））。つけ忘（わす）れに注意（ちゅうい）。`,
    add: fresh(T('個数をたずねる'), B(10, 30, 300, 'How many apples do you have?', C.blue, FILL.blue, 28, 13), ci(60, 92, 14, '', C.red, FILL.red), ci(100, 92, 14, '', C.red, FILL.red), ci(140, 92, 14, '', C.red, FILL.red), ci(180, 92, 14, '', C.red, FILL.red), ci(220, 92, 14, '', C.red, FILL.red), B(30, 124, 260, 'I have five apples.', C.green, FILL.green, 30, 14), lb(236, 160, '↑ apple に s', 12, C.red, 'middle', true), K('2つ以上は s をつける', C.red)),
  },
  {
    note: `まとめです。①1〜10は丸ごと覚える。②13〜19は「数＋teen」（thirteen・fifteen・eighteen はつづりが変わる）。③11と12は特別。④13と30は強く言う場所で聞き分ける。`,
    add: fresh(B(10, 14, 300, '① 1〜10は丸ごと覚える', C.blue, FILL.blue, 30), B(10, 52, 300, '② 13〜19は 数＋teen（つづりに注意）', C.main, FILL.warm, 30), B(10, 90, 300, '③ 11 eleven・12 twelve は特別', C.red, FILL.red, 30), B(10, 128, 300, '④ 13 thirTEEN と 30 THIRty は強さで', C.green, FILL.green, 30), K('1〜20の数え方')),
  },
], '数字①：1〜20の数え方');

// ───────── 数字②：21〜100の数え方 ─────────
const u02: DiagramFigure = show([
  {
    note: `10ごとの数（かず）は、twenty（20）・thirty（30）・forty（40）・fifty（50）・sixty（60）・seventy（70）・eighty（80）・ninety（90）の8つ。100は one hundred です。まずこの8つを覚（おぼ）えます。`,
    add: fresh(T('10ごとの数'), ...row(['20 twenty', '30 thirty', '40 forty', '50 fifty'], 34, { h: 30, w: 72 }), ...row(['60 sixty', '70 seventy', '80 eighty', '90 ninety'], 72, { h: 30, w: 72 }), B(80, 116, 160, '100  one hundred', C.red, FILL.red, 30), K('この8つ ＋ hundred')),
  },
  {
    note: `❓40は four＋ty と書（か）けばいいの？→ いいえ。u を1つとって forty と書きます（fourty は×）。「フォーティ」と読（よ）むのに u がない、つづりの例外（れいがい）です。`,
    add: fresh(T('40 のつづり'), B(20, 36, 130, 'four + ty', C.gray, FILL.gray, 36, 14), B(170, 36, 130, 'fourty  ×', C.red, FILL.red, 36, 14), B(60, 100, 200, 'forty  ○', C.green, FILL.green, 40, 18), lb(160, 160, 'u を 1つ とる', 14, C.red, 'middle', true), K('forty には u がない', C.red)),
  },
  {
    note: `❓50と80も例外（れいがい）があるの？→ あります。fifty は five の v が f に変（か）わります。eighty は eight の t を重（かさ）ねず、eight＋y で eighty（eightty は×）です。`,
    add: fresh(T('50 と 80 のつづり'), B(10, 36, 60, 'five', C.blue, FILL.blue), ar(74, 49, 100, 49, C.red), B(104, 36, 70, 'fifty', C.green, FILL.green), lb(184, 49, 'v が f に', 12, C.red, 'start', true), B(10, 90, 60, 'eight', C.blue, FILL.blue), ar(74, 103, 100, 103, C.red), B(104, 90, 70, 'eighty', C.green, FILL.green), lb(184, 103, 't は 1つだけ', 12, C.red, 'start', true), lb(184, 127, '× eightty', 12, C.gray, 'start', true), K('fifty と eighty のつづり')),
  },
  {
    note: `❓21〜99はどう作（つく）るの？→「10のかたまり」＋ハイフン（-）＋「1の位（くらい）」でつなぐだけです。20＋1＝twenty-one、40＋8＝forty-eight、90＋9＝ninety-nine。`,
    add: fresh(T('10のかたまり − 1の位'), B(10, 36, 90, 'twenty', C.blue, FILL.blue), lb(110, 49, '−', 16, C.red, 'middle', true), B(120, 36, 60, 'one', C.main, FILL.warm), lb(190, 49, '＝', 14, C.ink, 'middle', true), B(204, 36, 106, 'twenty-one', C.green, FILL.green), B(10, 82, 90, 'forty', C.blue, FILL.blue), lb(110, 95, '−', 16, C.red, 'middle', true), B(120, 82, 60, 'eight', C.main, FILL.warm), lb(190, 95, '＝', 14, C.ink, 'middle', true), B(204, 82, 106, 'forty-eight', C.green, FILL.green), B(10, 128, 90, 'ninety', C.blue, FILL.blue), lb(110, 141, '−', 16, C.red, 'middle', true), B(120, 128, 60, 'nine', C.main, FILL.warm), lb(190, 141, '＝', 14, C.ink, 'middle', true), B(204, 128, 106, 'ninety-nine', C.green, FILL.green), K('20 30 40… のときは ハイフン不要')),
  },
  {
    note: `❓52は two fifty ではだめ？→ だめです。英語（えいご）は必（かなら）ず「大（おお）きい位（くらい）が先（さき）」。50の fifty を先に、2の two をあとに言（い）って fifty-two です。`,
    add: fresh(T('大きい位から先に'), B(14, 34, 140, '5 2', C.gray, FILL.gray, 34, 18), lb(160, 51, '→', 18, C.ink, 'middle', true), B(170, 34, 60, 'fifty', C.blue, FILL.blue, 34), lb(236, 51, '−', 16, C.red, 'middle', true), B(246, 34, 60, 'two', C.main, FILL.warm, 34), lb(160, 96, '× two fifty', 14, C.red, 'middle', true), lb(160, 124, '○ fifty-two', 16, C.green, 'middle', true), K('十の位 → 一の位 の順')),
  },
  {
    note: `❓ハイフンを忘（わす）れると？→ 書（か）く問題（もんだい）では twentyone や twenty one と書かず、twenty-one と書きます。話（はな）すときは問題ありませんが、書くときは正確（せいかく）に。`,
    add: fresh(T('書くときの ハイフン'), B(30, 36, 260, 'twentyone   ×  くっつけない', C.red, FILL.red, 34), B(30, 82, 260, 'twenty one   △  書くときは× ', C.main, FILL.warm, 34), B(30, 128, 260, 'twenty-one   ○', C.green, FILL.green, 34, 15), K('書くときは ハイフンを忘れずに')),
  },
  {
    note: `❓100はどう言（い）うの？→ one hundred（または a hundred）。101のように100に1以上の数が足（た）されるときは、one hundred and one のように and を入（い）れることもあります（アメリカ英語（えいご）では and を省（はぶ）くことも多いです）。`,
    add: fresh(T('100 のあたり'), B(20, 34, 280, '100   one hundred', C.red, FILL.red, 32, 15), B(20, 82, 280, '101   one hundred and one', C.blue, FILL.blue, 32, 14), lb(160, 138, 'and は アメリカ英語では省くことも多い', 11, C.gray, 'middle', true), K('hundred は 100')),
  },
  {
    note: `❓ねだんは？→ How much is it?（いくらですか）とたずね、It's one hundred yen.（100円）や It's fifty dollars.（50ドル）と答（こた）えます。数（かず）のあとに「円・ドル」の単位（たんい）を忘（わす）れずに。`,
    add: fresh(T('ねだんをたずねる'), B(10, 34, 210, 'How much is it?', C.blue, FILL.blue, 30, 14), B(100, 80, 210, `It's one hundred yen.`, C.green, FILL.green, 30, 13), B(100, 120, 210, `It's fifty dollars.`, C.green, FILL.green, 30, 13), K('数のあとに yen / dollars')),
  },
  {
    note: `まとめです。①10ごとの8つ＋hundred を覚（おぼ）える。②21〜99は「10のかたまり-1の位」。③forty・fifty・eighty のつづりに注意（ちゅうい）。④大（おお）きい位から先（さき）に言う。`,
    add: fresh(B(10, 14, 300, '① 10ごとの数 8つ ＋ hundred', C.blue, FILL.blue, 30), B(10, 52, 300, '② 21〜99 ＝ 10のかたまり − 1の位', C.main, FILL.warm, 30), B(10, 90, 300, '③ forty・fifty・eighty のつづり', C.red, FILL.red, 30), B(10, 128, 300, '④ 大きい位から先に言う', C.green, FILL.green, 30), K('21〜100の数え方')),
  },
], '数字②：21〜100の数え方');

// ───────── 色の名前と言い方 ─────────
const colCircle = (x: number, name: string, fill: string) => [ci(x, 56, 17, '', C.gray, fill), lb(x, 88, name, 11, C.ink, 'middle', true)];
const u03: DiagramFigure = show([
  {
    note: `色（いろ）の名前（なまえ）を確（たし）かめます。red（赤）・blue（青）・yellow（黄色）・green（緑）・orange（オレンジ色）・purple（紫（むらさき））など。今日（きょう）は、これらの語（ご）を文の中でどこに置（お）くかを調（しら）べます。`,
    add: fresh(T('色の名前'), ...colCircle(30, 'red', '#F87171'), ...colCircle(78, 'blue', '#60A5FA'), ...colCircle(126, 'yellow', '#FACC15'), ...colCircle(174, 'green', '#4ADE80'), ...colCircle(222, 'orange', '#FB923C'), ...colCircle(270, 'purple', '#A78BFA'), K('基本の色の単語')),
  },
  {
    note: `❓「赤いりんご」は英語（えいご）でどう言（い）うの？→ a red apple。色（いろ）の語（ご）は名詞（めいし）の前（まえ）に置（お）きます。日本語（にほんご）の「赤い→りんご」と同（おな）じ順番（じゅんばん）です。`,
    add: fresh(T('色（形容詞）は 名詞の前'), B(20, 40, 50, 'a', C.gray, FILL.gray, 34, 16), B(80, 40, 90, 'red', C.red, FILL.red, 34, 16), B(180, 40, 120, 'apple', C.green, FILL.green, 34, 16), lb(45, 92, '一つの', 12, C.gray, 'middle', true), lb(125, 92, '赤い', 12, C.red, 'middle', true), lb(240, 92, 'りんご', 12, C.green, 'middle', true), ci(250, 140, 16, '', C.red, '#F87171'), K('色 → 名詞 の順')),
  },
  {
    note: `❓a はどこに置（お）くの？→ 列（れつ）の先頭（せんとう）です。a は「どのりんごか」を決（き）める語（ご）なので、説明（せつめい）の語（ご）red よりさらに前（まえ）。red a apple のように途中（とちゅう）に入（い）れると、a が何（なに）を指（さ）すのか分（わ）からなくなります。`,
    add: fresh(T('a は 列の先頭'), B(30, 36, 70, 'red', C.red, FILL.red), B(106, 36, 40, 'a', C.gray, FILL.gray), B(152, 36, 90, 'apple', C.green, FILL.green), lb(272, 49, '× まちがい', 12, C.red, 'middle', true), B(30, 94, 40, 'a', C.gray, FILL.gray), B(76, 94, 70, 'red', C.red, FILL.red), B(152, 94, 90, 'apple', C.green, FILL.green), lb(272, 107, '○ 正しい', 12, C.green, 'middle', true), K('a red apple  /  a blue pen', C.green)),
  },
  {
    note: `❓色をたずねる文は、なぜ What color で始（はじ）まるの？→ 一番（いちばん）知（し）りたいこと（何色か）を先頭（せんとう）に置（お）くのが英語（えいご）のきまりだからです。What color is it? に、It's red. と色（いろ）そのものを答（こた）えます。`,
    add: fresh(T('知りたいことを 先頭に'), B(10, 34, 100, 'What color', C.red, FILL.red, 34, 14), B(116, 34, 90, 'is it?', C.blue, FILL.blue, 34, 14), B(100, 90, 150, `It's red.`, C.green, FILL.green, 34, 14), B(10, 138, 130, 'What color', C.red, FILL.red, 30, 13), B(146, 138, 164, 'do you like?', C.blue, FILL.blue, 30, 13), K('答えは「色」そのもの：I like blue.')),
  },
  {
    note: `❓orange は色（いろ）にも果物（くだもの）にも使（つか）うのはなぜ？→ 果物のオレンジの色（いろ）をそのまま色の名前にしたからです。つづりも発音（はつおん）も同（おな）じで、文脈（ぶんみゃく）で意味（いみ）が決（き）まります。`,
    add: fresh(T('orange は 2つの意味'), ci(90, 80, 36, '', C.main, '#FB923C'), ci(230, 80, 36, 'orange', C.main, '#FB923C', 13), lb(90, 134, 'くだもの', 13, C.ink, 'middle', true), lb(230, 134, 'オレンジ色', 13, C.ink, 'middle', true), lb(160, 80, '＝', 18, C.ink, 'middle', true), K('文の中で意味が決まる')),
  },
  {
    note: `❓発音（はつおん）で気（き）をつけることは？→ orange は最初（さいしょ）の「オ」を強（つよ）く長（なが）め、purple の le は軽（かる）く「プル」、green は e を長く「グリーン」と伸（の）ばします。gray はアメリカ英語（えいご）、イギリス英語では grey と書（か）きます。`,
    add: fresh(T('発音と つづり'), ...tab([['語', 'ポイント'], ['orange', '最初の「オ」を強く長く'], ['purple', 'le は軽く「プル」'], ['green', 'e を長く「グリーン」'], ['gray / grey', '米：gray　英：grey']], 36, [90, 190], { h: 28 }), K('色の名前の発音')),
  },
  {
    note: `❓まちがえないための確（たし）かめは？①色は名詞（めいし）の前（まえ）に置（お）いたか。②a は列（れつ）の先頭（せんとう）か。③What color is it? には It's 〇〇.、What color do you like? には I like 〇〇. と中身（なかみ）で答（こた）えたか。`,
    add: fresh(T('確かめのしかた'), B(10, 30, 300, '① 色は 名詞の前（a red apple）', C.blue, FILL.blue, 30), B(10, 68, 300, '② a は 列の先頭（× red a apple）', C.main, FILL.warm, 30), B(10, 106, 300, `③ What color is it? → It's red.`, C.green, FILL.green, 30), B(10, 144, 300, '④ 発音：orange / purple / green', C.purple, FILL.purple, 30), K('4つを確かめる')),
  },
  {
    note: `まとめです。形容詞（けいようし）の色は名詞の前、a は列の先頭。色をたずねる文は知（し）りたいこと（What color）を先頭（せんとう）に置（お）き、色そのものを答えます。`,
    add: fresh(B(10, 20, 300, '色（形容詞）は 名詞の前', C.red, FILL.red, 40, 14), B(10, 70, 300, 'a は 列の先頭  →  a red apple', C.blue, FILL.blue, 40, 14), B(10, 120, 300, 'What color 〜?  →  色を答える', C.green, FILL.green, 40, 14), K('色の言い方')),
  },
], '色の言い方');

// ───────── 形の名前と言い方 ─────────
const u04: DiagramFigure = show([
  {
    note: `形（かたち）の名前（なまえ）です。circle（円・丸）、triangle（三角形（さんかくけい））、square（正方形（せいほうけい））、rectangle（長方形（ちょうほうけい））、diamond（ひし形）など。この単元（たんげん）では、似（に）た語（ご）をなぜ分（わ）けるのかを調（しら）べます。`,
    add: fresh(T('形の名前'), ci(46, 62, 28, '', C.blue, FILL.blue), pg([[110, 90], [150, 90], [130, 36]], C.red, FILL.red), pg([[176, 36], [226, 36], [226, 90], [176, 90]], C.green, FILL.green), pg([[244, 48], [308, 48], [308, 82], [244, 82]], C.purple, FILL.purple), lb(46, 110, 'circle', 12, C.ink, 'middle', true), lb(130, 110, 'triangle', 12, C.ink, 'middle', true), lb(201, 110, 'square', 12, C.ink, 'middle', true), lb(276, 110, 'rectangle', 12, C.ink, 'middle', true), K('どれも 算数で習う形')),
  },
  {
    note: `❓square と rectangle はどうちがうの？→ 辺（へん）の長（なが）さが全部（ぜんぶ）同（おな）じなら square（正方形）、たてとよこの長さがちがえば rectangle（長方形）です。日本語（にほんご）では「四角」でまとめても、英語（えいご）では分（わ）けて言（い）います。`,
    add: fresh(T('辺の長さを見る'), pg([[40, 40], [110, 40], [110, 110], [40, 110]], C.green, FILL.green), pg([[190, 50], [290, 50], [290, 100], [190, 100]], C.purple, FILL.purple), lb(75, 128, 'square', 14, C.green, 'middle', true), lb(75, 148, '辺が ぜんぶ同じ', 11, C.ink, 'middle', true), lb(240, 128, 'rectangle', 14, C.purple, 'middle', true), lb(240, 148, 'たてとよこがちがう', 11, C.ink, 'middle', true), K('正方形 と 長方形 は別の語')),
  },
  {
    note: `❓語（ご）のつくりから覚（おぼ）えられる？→ triangle の tri は「3」（tricycle＝三輪車（さんりんしゃ）の tri と同じ）で「3つの角（かど）」。rectangle の rect は「まっすぐ」で、角がまっすぐな四角形、という意味（いみ）です。`,
    add: fresh(T('語のつくり'), B(10, 34, 70, 'tri', C.red, FILL.red, 30, 16), lb(88, 47, '＝ 3', 14, C.ink, 'start', true), pg([[220, 100], [290, 100], [255, 40]], C.red, FILL.red), lb(255, 118, '3つの角', 11, C.ink, 'middle', true), lb(60, 80, 'tricycle', 12, C.gray, 'middle', true), lb(60, 98, '＝ 三輪車', 11, C.gray, 'middle', true), B(10, 140, 70, 'rect', C.purple, FILL.purple, 30, 16), lb(88, 153, '＝ まっすぐ', 14, C.ink, 'start', true), K('tri＝3　rect＝まっすぐ')),
  },
  {
    note: `❓circle と round はなぜ分（わ）けるの？→ 品詞（ひんし）がちがうからです。circle は「円そのもの」を表（あらわ）す名詞（めいし）、round は「丸（まる）い」という様子（ようす）を表す形容詞（けいようし）です。`,
    add: fresh(T('名詞 と 形容詞'), ci(80, 70, 30, '', C.blue, FILL.blue), B(130, 38, 180, 'circle … 名詞（円）', C.blue, FILL.blue, 28), B(130, 78, 180, 'round … 形容詞（丸い）', C.red, FILL.red, 28), B(20, 130, 280, 'Draw a circle.  /  The plate is round.', C.green, FILL.green, 30, 12), K('円そのもの か 丸い様子 か')),
  },
  {
    note: `❓形をたずねるには？→ What shape is it?（それはどんな形ですか）と聞（き）きます。It's a star.（星の形です）のように、It's a ＋形の名前で答（こた）えます。`,
    add: fresh(T('形をたずねる'), B(10, 34, 210, 'What shape is it?', C.blue, FILL.blue, 30, 14), B(100, 82, 210, `It's a star.`, C.green, FILL.green, 30, 14), pg([[60, 150], [75, 112], [90, 150], [56, 126], [94, 126]], C.main, FILL.yellow), K('shape ＝ 形')),
  },
  {
    note: `❓形に説明（せつめい）をくわえるときは？→ 色（いろ）と同（おな）じで、形容詞（けいようし）を名詞の前（まえ）に置（お）きます。a red triangle（赤い三角形）、a big circle（大きな丸）。big（大きい）・small（小さい）もよく使います。`,
    add: fresh(T('説明は 名詞の前'), B(10, 34, 40, 'a', C.gray, FILL.gray, 28), B(56, 34, 70, 'red', C.red, FILL.red, 28), B(132, 34, 100, 'triangle', C.blue, FILL.blue, 28), pg([[250, 70], [300, 70], [275, 28]], C.red, FILL.red), B(10, 100, 40, 'a', C.gray, FILL.gray, 28), B(56, 100, 70, 'big', C.red, FILL.red, 28), B(132, 100, 100, 'circle', C.blue, FILL.blue, 28), ci(275, 120, 24, '', C.blue, FILL.blue), K('a big circle  /  a small circle')),
  },
  {
    note: `❓つづりで気（き）をつけることは？→ triangle は、最後（さいご）が angle（角）なので triangle と書（か）きます。triangel は×です。square は最初（さいしょ）の音（おと）を短（みじか）めに、なめらかにつなげて読（よ）みます。`,
    add: fresh(T('つづりの確かめ'), B(20, 40, 130, 'triangle', C.green, FILL.green, 40, 16), lb(85, 96, '○', 18, C.green, 'middle', true), B(170, 40, 130, 'triangel', C.red, FILL.red, 40, 16), lb(235, 96, '×', 18, C.red, 'middle', true), lb(160, 138, 'tri ＋ angle（角）', 13, C.ink, 'middle', true), K('triangle の さいごは gle')),
  },
  {
    note: `まとめです。square は辺（へん）が全部（ぜんぶ）同（おな）じ、rectangle はたてよこがちがう。circle は名詞（円）、round は形容詞（丸い）。形をたずねるときは What shape is it? です。`,
    add: fresh(B(10, 14, 300, 'square ＝ 辺が全部同じ', C.green, FILL.green, 30), B(10, 52, 300, 'rectangle ＝ たてよこがちがう', C.purple, FILL.purple, 30), B(10, 90, 300, 'circle ＝ 円（名詞） / round ＝ 丸い', C.blue, FILL.blue, 30), B(10, 128, 300, 'What shape is it? → It’s a 〇〇.', C.red, FILL.red, 30), K('形の言い方')),
  },
], '形の言い方');

// ───────── 動物の名前①：ペットや身近な動物 ─────────
const pet = (x: number, y: number, n: number) => Array.from({ length: n }, (_, i) => ci(x + i * 26, y, 10, '', C.main, FILL.warm));
const u05: DiagramFigure = show([
  {
    note: `❓2ひき以上（いじょう）のときは、どう言（い）うの？→ 名詞（めいし）のうしろに s をつけます（複数形（ふくすうけい））。dog→dogs（犬たち）、cat→cats（猫たち）。`,
    add: fresh(T('2つ以上は s をつける'), ...pet(30, 50, 1), lb(100, 50, '→', 16, C.ink, 'middle', true), ...pet(130, 50, 2), B(30, 84, 70, 'a dog', C.blue, FILL.blue), B(120, 84, 120, 'two dogs', C.green, FILL.green), lb(280, 98, 'dog＋s', 12, C.red, 'middle', true), K('1ぴきは dog、2ひき以上は dogs')),
  },
  {
    note: `ふつうに s をつける動物（どうぶつ）はたくさんあります。dog→dogs、cat→cats、bird→birds、rabbit→rabbits。ルールは同（おな）じなので、迷（まよ）わずに s をつけます。`,
    add: fresh(T('ふつうは s をつけるだけ'), ...tab([['1ぴき', '2ひき以上'], ['dog', 'dogs'], ['cat', 'cats'], ['bird', 'birds'], ['rabbit', 'rabbits']], 34, [110, 140], { h: 28, color: C.green, fill: FILL.green }), K('名詞のうしろに s')),
  },
  {
    note: `❓でも fish はどうなるの？→ fish は特別（とくべつ）な語（ご）で、1ぴきでも複数（ふくすう）でも形（かたち）が変（か）わらず fish のままです。sheep（羊（ひつじ））も同（おな）じです。`,
    add: fresh(T('形が変わらない 2語', C.red), B(10, 34, 140, 'fish', C.blue, FILL.blue, 32, 16), lb(160, 47, '→', 16), B(170, 34, 140, 'fish', C.green, FILL.green, 32, 16), B(10, 84, 140, 'sheep', C.blue, FILL.blue, 32, 16), lb(160, 97, '→', 16), B(170, 84, 140, 'sheep', C.green, FILL.green, 32, 16), lb(160, 140, '× fishes（ふつうは言わない）', 12, C.red, 'middle', true), K('fish と sheep はそのまま', C.red)),
  },
  {
    note: `❓「魚を3びき見（み）た」は？→ I saw three fish. です。fish に s をつけて three fishes とは言（い）いません。fish は「形の変わらない複数形」の代表（だいひょう）として覚（おぼ）えましょう。`,
    add: fresh(T('三びきの さかな'), B(30, 36, 260, 'I saw three fish.', C.green, FILL.green, 34, 15), lb(160, 96, '○', 18, C.green, 'middle', true), B(30, 116, 260, 'I saw three fishes.', C.red, FILL.red, 34, 15), lb(160, 172, '×', 18, C.red, 'middle', true), K('fish は s をつけない', C.red)),
  },
  {
    note: `❓数（かず）をたずねるときは？→ How many dogs do you have?（何びき犬を飼（か）っていますか）のように、名詞を複数形（ふくすうけい）にします。たずねるときから、もう「2ひき以上」の形です。`,
    add: fresh(T('数をたずねる'), B(10, 34, 300, 'How many dogs do you have?', C.blue, FILL.blue, 32, 14), ...pet(110, 110, 2), B(60, 134, 200, 'I have two dogs.', C.green, FILL.green, 32, 14), K('How many のあとは複数形')),
  },
  {
    note: `❓「犬が好き」と言（い）うときは、なぜ I like dogs.（複数形（ふくすうけい））なの？→ 好きなのは「犬というなかま全体（ぜんたい）」だからです。a dog は「1ぴきの特定（とくてい）の犬」を指（さ）すので、意味（いみ）がずれます。`,
    add: fresh(T('犬ぜんぶ が好き'), B(10, 34, 300, 'I like dogs.', C.green, FILL.green, 34, 16), ...pet(90, 100, 5), lb(160, 130, '犬というなかま全体', 12, C.green, 'middle', true), B(10, 150, 300, 'I like a dog.  → 1ぴきだけの話になる', C.red, FILL.red, 30, 12), K('全体を言うときは複数形')),
  },
  {
    note: `ペットの話（はなし）にもつかえます。Do you have any pets?（ペットを飼（か）っていますか）— Yes, I have a rabbit.（はい、うさぎを飼っています）。1ぴきのときは a を、数えるときは複数形です。`,
    add: fresh(T('ペットの会話'), B(10, 34, 230, 'Do you have any pets?', C.blue, FILL.blue, 30, 13), B(80, 80, 230, 'Yes, I have a rabbit.', C.green, FILL.green, 30, 13), B(10, 126, 230, `What's your dog's name?`, C.blue, FILL.blue, 30, 13), B(80, 168, 230, 'His name is Pochi.', C.green, FILL.green, 30, 13), K('ペットについての会話')),
  },
  {
    note: `まとめです。①ふつうは s をつけて複数形。②fish と sheep は形が変わらない。③全体が好きなときは I like dogs. のように複数形。`,
    add: fresh(B(10, 20, 300, '① ふつうは名詞に s（dog → dogs）', C.blue, FILL.blue, 36), B(10, 68, 300, '② fish・sheep は形が変わらない', C.red, FILL.red, 36), B(10, 116, 300, '③ 全体が好きなら I like dogs.', C.green, FILL.green, 36), K('ペットの言い方')),
  },
], '身近な動物の複数形');

// ───────── 動物の名前②：動物園の動物と鳴き声 ─────────
const cries: string[][] = [['動物', '日本語', '英語'], ['犬 dog', 'ワンワン', 'Woof! woof!'], ['猫 cat', 'ニャーニャー', 'Meow!'], ['牛 cow', 'モーモー', 'Moo!'], ['ぶた pig', 'ブーブー', 'Oink oink!'], ['にわとり rooster', 'コケコッコー', 'Cock-a-doodle-doo!']];
const crTab = (k: number) => tab(cries.slice(0, k + 1), 34, [96, 90, 124], { h: 28, color: C.green, fill: FILL.green });
const u06: DiagramFigure = show([
  {
    note: `日本語（にほんご）と英語（えいご）では、同（おな）じ動物の鳴（な）き声も、まったくちがう音（おと）で表（あらわ）します。表を作（つく）りながら見ていきましょう。まず犬（いぬ）から。`,
    add: fresh(T('日本語 と 英語の 鳴き声'), ...crTab(1), lb(160, 136, 'ワンワン  →  Woof! woof!（または Bow-wow!）', 12, C.ink, 'middle', true), K('犬の鳴き声')),
  },
  {
    note: `猫（ねこ）は、日本語（にほんご）で「ニャーニャー」、英語（えいご）では Meow!（ミャーオ）です。「ニャー」より、のばして「ミャーオ」に近（ちか）い音です。`,
    add: fresh(T('日本語 と 英語の 鳴き声'), ...crTab(2), K('猫の鳴き声')),
  },
  {
    note: `牛（うし）は、日本語で「モーモー」、英語では Moo!（ムー）。日本語の「モー」とにていますが、英語は「ム」に近い音で書（か）きます。`,
    add: fresh(T('日本語 と 英語の 鳴き声'), ...crTab(3), K('牛の鳴き声')),
  },
  {
    note: `ぶたは、日本語で「ブーブー」、英語では Oink oink!（オインク オインク）。ぜんぜんちがう音で書きます。`,
    add: fresh(T('日本語 と 英語の 鳴き声'), ...crTab(4), K('ぶたの鳴き声')),
  },
  {
    note: `にわとり（rooster）は、日本語で「コケコッコー」、英語では Cock-a-doodle-doo!（コッカドゥードゥルドゥー）。長（なが）い音ですが、ハイフンでつないで1つの語（ご）にします。`,
    add: fresh(T('日本語 と 英語の 鳴き声'), ...crTab(5), K('にわとりの鳴き声')),
  },
  {
    note: `❓どうして国（くに）によって鳴（な）き声の書（か）き方（かた）がちがうの？→ 動物の鳴き声は、聞（き）こえ方が言葉（ことば）によって変（か）わって聞こえるからです。英語の擬音語（ぎおんご）は、日本語とセットで覚（おぼ）えると印象（いんしょう）に残（のこ）ります。`,
    add: fresh(T('同じ音でも 聞こえ方がちがう'), ci(160, 44, 18, '犬', C.main, FILL.warm, 13), ar(146, 58, 86, 84, C.red), ar(174, 58, 234, 84, C.blue), lb(80, 98, '日本語の耳には', 12, C.red, 'middle', true), lb(240, 98, '英語の耳には', 12, C.blue, 'middle', true), B(20, 114, 120, 'ワンワン', C.red, FILL.red, 34, 14), B(180, 114, 120, 'Woof! woof!', C.blue, FILL.blue, 34, 14), K('聞こえ方が言語でちがう')),
  },
  {
    note: `好きな動物（どうぶつ）もたずねられます。What animal do you like?（どんな動物が好きですか）— I like lions.（ライオンが好きです）。全般（ぜんぱん）を言（い）うときは複数形（ふくすうけい）にします。`,
    add: fresh(T('好きな動物をたずねる'), B(10, 34, 250, 'What animal do you like?', C.blue, FILL.blue, 30, 13), B(60, 80, 250, 'I like lions.', C.green, FILL.green, 30, 13), B(10, 126, 300, 'Lions are strong.  Giraffes are tall.', C.purple, FILL.purple, 30, 12), K('動物全般は lions（複数形）')),
  },
  {
    note: `まとめです。①犬・猫・牛・ぶた・にわとりは、日本語と英語で鳴き声の書き方がちがう。②聞こえ方が言語によってちがうから。③動物全般の話は複数形で。`,
    add: fresh(B(10, 20, 300, '① 鳴き声は 言語でちがう', C.blue, FILL.blue, 36), B(10, 68, 300, '② Woof!・Meow!・Moo!・Oink!', C.green, FILL.green, 36), B(10, 116, 300, '③ 全般の話は複数形（lions）', C.red, FILL.red, 36), K('動物の鳴き声')),
  },
], '動物の鳴き声');

// ───────── くだもの・やさいの単語 ─────────
const u07: DiagramFigure = show([
  {
    note: `やさいの名前（なまえ）です。carrot（にんじん）・potato（じゃがいも）・tomato（トマト）・onion（たまねぎ）・cabbage（キャベツ）・cucumber（きゅうり）・corn（とうもろこし）。この中に、複数形（ふくすうけい）で注意（ちゅうい）が必要（ひつよう）な語があります。`,
    add: fresh(T('やさいの単語'), ...row(['carrot', 'potato', 'tomato', 'onion'], 34, { h: 30, w: 72 }), ...row(['cabbage', 'cucumber', 'corn'], 76, { h: 30, w: 90 }), K('やさい 7つ')),
  },
  {
    note: `❓2つ以上（いじょう）のときは？→ ふつうは s をつけますが、potato と tomato は es をつけて potatoes、tomatoes にします。`,
    add: fresh(T('es をつける2語', C.red), B(10, 38, 90, 'potato', C.blue, FILL.blue, 34, 14), ar(104, 55, 136, 55, C.red), B(140, 38, 120, 'potatoes', C.green, FILL.green, 34, 14), lb(285, 55, '＋ es', 14, C.red, 'middle', true), B(10, 92, 90, 'tomato', C.blue, FILL.blue, 34, 14), ar(104, 109, 136, 109, C.red), B(140, 92, 120, 'tomatoes', C.green, FILL.green, 34, 14), lb(285, 109, '＋ es', 14, C.red, 'middle', true), K('potato・tomato は es')),
  },
  {
    note: `❓o で終（お）わる語は、ぜんぶ es なの？→ いいえ。o で終わる語の「一部（いちぶ）」が es をつけます。potato と tomato は es、と覚（おぼ）えましょう。`,
    add: fresh(T('o で終わる語の 一部が es'), B(40, 40, 240, 'potato → potatoes', C.green, FILL.green, 34, 14), B(40, 90, 240, 'tomato → tomatoes', C.green, FILL.green, 34, 14), lb(160, 150, 'ぜんぶではなく「一部」', 13, C.red, 'middle', true), K('まず この2語')),
  },
  {
    note: `くだものも見（み）ておきます。apple（りんご）・banana（バナナ）・orange（オレンジ）・strawberry（いちご）・grape（ぶどう）・melon（メロン）・peach（もも）・watermelon（すいか）。strawberry は straw（ストロー）＋ berry（ベリー）と考（かんが）えると覚えやすいです。`,
    add: fresh(T('くだものの単語'), ...row(['apple', 'banana', 'orange', 'grape'], 34, { h: 30, w: 72, color: C.red, fill: FILL.red }), ...row(['melon', 'peach', 'watermelon'], 76, { h: 30, w: 90, color: C.red, fill: FILL.red }), B(40, 122, 240, 'strawberry ＝ straw ＋ berry', C.purple, FILL.purple, 30, 13), K('くだもの')),
  },
  {
    note: `❓apple と orange には、なぜ an をつけるの？→ 母音（ぼいん）（あ・い・う・え・お の音）で始（はじ）まる語だからです。an apple、an orange。子音（しいん）で始まる banana は a banana になります。`,
    add: fresh(T('a と an'), B(10, 36, 50, 'an', C.red, FILL.red), B(66, 36, 90, 'apple', C.blue, FILL.blue), B(168, 36, 50, 'an', C.red, FILL.red), B(224, 36, 86, 'orange', C.blue, FILL.blue), B(10, 90, 50, 'a', C.gray, FILL.gray), B(66, 90, 90, 'banana', C.blue, FILL.blue), lb(172, 103, '← 母音ではない', 11, C.gray, 'start', true), K('母音（あいうえおの音）のときは an')),
  },
  {
    note: `❓onion のつづりは？→ o-n-i-o-n。n の位置（いち）をまちがえて oinon と書（か）かないように。onion rings（オニオンリング）の形と結（むす）びつけると覚えやすいです。`,
    add: fresh(T('onion のつづり'), B(20, 40, 120, 'onion', C.green, FILL.green, 40, 18), lb(80, 98, '○', 18, C.green, 'middle', true), B(180, 40, 120, 'oinon', C.red, FILL.red, 40, 18), lb(240, 98, '×', 18, C.red, 'middle', true), lb(160, 140, 'o - n - i - o - n', 14, C.ink, 'middle', true), K('onion rings と いっしょに覚える')),
  },
  {
    note: `好（す）ききらいをたずねるときは、Do you like carrots?（にんじんは好きですか）— Yes, I do. または No, I don't. と答（こた）えます。一番好きなものは My favorite vegetable is corn. です。`,
    add: fresh(T('好ききらいの会話'), B(10, 34, 230, 'Do you like carrots?', C.blue, FILL.blue, 30, 13), B(70, 78, 240, `Yes, I do. I like carrots.`, C.green, FILL.green, 28, 12), B(70, 112, 240, `No, I don't. I don't like carrots.`, C.red, FILL.red, 28, 12), B(10, 152, 300, 'My favorite vegetable is corn.', C.purple, FILL.purple, 28, 12), K('Do you like 〜?')),
  },
  {
    note: `まとめです。①potato・tomato の複数形は es（potatoes・tomatoes）。②母音で始まる語は an（an apple）。③好きなものの全体は複数形で（I like apples.）。`,
    add: fresh(B(10, 20, 300, '① potatoes・tomatoes は es', C.red, FILL.red, 36), B(10, 68, 300, '② 母音で始まる語は an', C.blue, FILL.blue, 36), B(10, 116, 300, '③ 全体が好きなら複数形', C.green, FILL.green, 36), K('くだもの・やさい')),
  },
], 'くだものとやさい');

// ───────── 家族について話す：This is my ~. ─────────
const u08: DiagramFigure = show([
  {
    note: `❓This is my father. の This は何（なに）を指（さ）すの？→「近くにあるもの・今見せているもの」です。写真（しゃしん）や絵（え）を指（ゆび）さしながら言（い）えば、「いま指しているこの人が私の父です」と自然（しぜん）に伝（つた）わります。`,
    add: fresh(T('This は 今見せているもの'), B(20, 36, 90, '', C.gray, FILL.gray, 70, 11), ci(65, 58, 12, '', C.main, FILL.warm), ln(65, 70, 65, 96, C.main), lb(65, 118, '写真', 11, C.gray, 'middle', true), ar(115, 70, 160, 70, C.red), B(166, 52, 144, 'This is my father.', C.green, FILL.green, 36, 13), K('指さしながら This is my 〜.')),
  },
  {
    note: `家族（かぞく）を表（あらわ）す言葉（ことば）です。father（お父さん）・mother（お母さん）・brother（兄・弟）・sister（姉・妹）・grandfather（おじいさん）・grandmother（おばあさん）。`,
    add: fresh(T('家族の単語'), ...tab([['', '男の人', '女の人'], ['親', 'father', 'mother'], ['きょうだい', 'brother', 'sister'], ['祖父母', 'grandfather', 'grandmother']], 36, [80, 110, 110], { h: 30, color: C.green, fill: FILL.green }), K('家族の呼び方')),
  },
  {
    note: `❓his と her は、なぜ分（わ）けるの？→ 英語（えいご）では、その人が男（おとこ）の人か女（おんな）の人かで「〜の」の形（かたち）が変（か）わるからです。男の人なら his、女の人なら her。日本語（にほんご）の「名前は」には性別（せいべつ）の区別がありません。`,
    add: fresh(T('男の人 → his / 女の人 → her'), ci(80, 56, 20, 'Ken', C.blue, FILL.blue, 12), ci(240, 56, 20, 'Yuki', C.red, FILL.red, 12), B(30, 94, 100, 'his（彼の）', C.blue, FILL.blue, 30, 13), B(190, 94, 100, 'her（彼女の）', C.red, FILL.red, 30, 13), K('その人が男か女かで選ぶ')),
  },
  {
    note: `名前を伝（つた）えるときは、男の人なら His name is Ken.、女の人なら Her name is Yuki. と、かならずどちらかを選（えら）びます。`,
    add: fresh(T('名前の言い方'), B(10, 34, 300, 'This is my brother.', C.blue, FILL.blue, 30), B(10, 70, 300, 'His name is Ken.', C.blue, FILL.blue, 30), B(10, 112, 300, 'This is my mother.', C.red, FILL.red, 30), B(10, 148, 300, 'Her name is Yuki.', C.red, FILL.red, 30), K('his / her を選ぶ')),
  },
  {
    note: `❓「私の家族は4人です」はどう言（い）うの？→ There are four people in my family. です。family は「家族というまとまり」で人数（にんずう）ではないので、人数を言うときは people（人々）を数（かぞ）えます。`,
    add: fresh(T('人数は people を数える'), ci(80, 58, 14), ci(130, 58, 14), ci(180, 58, 14), ci(230, 58, 14), B(10, 94, 300, 'There are four people in my family.', C.green, FILL.green, 34, 13), lb(160, 150, 'I have one brother.（兄か弟が1人）', 13, C.ink, 'middle', true), K('family は まとまり、数えるのは people')),
  },
  {
    note: `様子（ようす）を説明（せつめい）するときは、My father is tall.（私の父は背（せ）が高い）、My sister is kind.（姉か妹は優（やさ）しい）のように言（い）います。`,
    add: fresh(T('様子を伝える'), B(10, 34, 300, 'My father is tall.', C.blue, FILL.blue, 30), B(10, 76, 300, 'My sister is kind.', C.blue, FILL.blue, 30), B(10, 118, 300, 'My grandmother is 70 years old.', C.blue, FILL.blue, 30, 12), K('My 〜 is …')),
  },
  {
    note: `会話（かいわ）にすると、A: Who is this?（これはだれ？）B: This is my father.（私の父です）A: What does he do?（お父さんの仕事は？）B: He is a teacher.（先生です）という流（なが）れになります。ペットも This is my dog. His name is Pochi. と紹介（しょうかい）できます。`,
    add: fresh(T('家族紹介の会話'), B(10, 32, 190, 'Who is this?', C.blue, FILL.blue, 26), B(120, 64, 190, 'This is my father.', C.green, FILL.green, 26), B(10, 96, 190, 'What does he do?', C.blue, FILL.blue, 26), B(120, 128, 190, 'He is a teacher.', C.green, FILL.green, 26), K('ペットも This is my dog.')),
  },
  {
    note: `まとめです。①今見せているものを指（さ）して This is my 〜.。②男の人は his、女の人は her。③人数は people を数える（There are 〇 people in my family.）。`,
    add: fresh(B(10, 20, 300, '① 指さして This is my 〜.', C.blue, FILL.blue, 36), B(10, 68, 300, '② 男 → his　女 → her', C.red, FILL.red, 36), B(10, 116, 300, '③ 人数は There are 〇 people', C.green, FILL.green, 36), K('家族の紹介')),
  },
], '家族の紹介');

// ───────── 職業の単語とWhat do you want to be? ─────────
const u09: DiagramFigure = show([
  {
    note: `❓職業（しょくぎょう）をたずねるには？→ What do you do?（お仕事（しごと）は何ですか）と聞（き）きます。答（こた）えは I'm a teacher.（私は先生です）。「先生」「医者」のような語（ご）は a をつけて答えます。`,
    add: fresh(T('職業をたずねる'), B(10, 34, 200, 'What do you do?', C.blue, FILL.blue, 30, 14), B(110, 80, 200, `I'm a teacher.`, C.green, FILL.green, 30, 14), lb(160, 132, '先生 teacher / 医者 doctor / 看護師 nurse', 12, C.ink, 'middle', true), K('What do you do?')),
  },
  {
    note: `❓a をつけ忘（わす）れると？→ I'm teacher. とは言（い）いません。職業を答えるときは、a か an を必（かなら）ずつけて I'm a teacher. と言います。`,
    add: fresh(T('a を忘れない'), B(20, 40, 280, `I'm teacher.`, C.red, FILL.red, 36, 16), lb(160, 98, '×  a がない', 14, C.red, 'middle', true), B(20, 116, 280, `I'm a teacher.`, C.green, FILL.green, 36, 16), lb(160, 174, '○', 16, C.green, 'middle', true), K('職業の前には a / an')),
  },
  {
    note: `家族（かぞく）の仕事（しごと）も同（おな）じ形（かたち）で言（い）えます。My father is a doctor.（私の父は医者です）、My mother is a nurse.（私の母は看護師（かんごし）です）。`,
    add: fresh(T('家族の職業'), B(10, 36, 300, 'My father is a doctor.', C.blue, FILL.blue, 34, 14), B(10, 84, 300, 'My mother is a nurse.', C.red, FILL.red, 34, 14), K('My 〜 is a …')),
  },
  {
    note: `❓将来（しょうらい）の夢（ゆめ）をたずねるには？→ What do you want to be?（あなたは将来何になりたいですか）。答えは I want to be a vet.（獣医（じゅうい）になりたい）。want to be は「〜になりたい」というひとまとまりの言い方です。`,
    add: fresh(T('将来の夢'), B(10, 34, 300, 'What do you want to be?', C.blue, FILL.blue, 32, 14), B(10, 84, 300, 'I want to be a vet.', C.green, FILL.green, 32, 14), B(10, 130, 300, 'I want to be a singer.', C.green, FILL.green, 32, 14), K('want to be 〜 ＝ 〜になりたい')),
  },
  {
    note: `❓want だけとは、何（なに）がちがうの？→ want は「ほしい」の意味（いみ）。want to be のあとには職業（名詞（めいし））が続（つづ）いて、「〜になりたい」の意味になります。「何がほしいですか」と訳（やく）さないように。`,
    add: fresh(T('want と want to be'), B(10, 34, 140, 'want', C.gray, FILL.gray, 36, 16), lb(80, 88, 'ほしい', 14, C.ink, 'middle', true), B(170, 34, 140, 'want to be', C.red, FILL.red, 36, 16), lb(240, 88, 'になりたい', 14, C.red, 'middle', true), B(40, 120, 240, 'want to be ＋ 職業（a vet）', C.green, FILL.green, 34, 14), K('be のあとには職業が来る')),
  },
  {
    note: `❓職業の語（ご）は、どうやって作（つく）るの？→ 動詞（どうし）に er をつけると「〜する人」になる語が多いです。teach→teacher、sing→singer。サッカー選手（せんしゅ）は soccer player のように「スポーツ名＋player」です。`,
    add: fresh(T('〜する人 ＝ er'), B(10, 36, 70, 'teach', C.blue, FILL.blue), lb(112, 49, '＋ er →', 12, C.red, 'middle', true), B(146, 36, 100, 'teacher', C.green, FILL.green), B(10, 80, 70, 'sing', C.blue, FILL.blue), lb(112, 93, '＋ er →', 12, C.red, 'middle', true), B(146, 80, 100, 'singer', C.green, FILL.green), B(10, 124, 160, 'soccer', C.blue, FILL.blue), lb(180, 137, '＋', 14, C.red, 'middle', true), B(194, 124, 100, 'player', C.green, FILL.green), K('soccer player・baseball player')),
  },
  {
    note: `理由（りゆう）もつけられます。A: Why?（どうして？）B: Because I like soccer.（サッカーが好（す）きだからです）。I want to be a doctor because I want to help people. のように、1つの文にもまとめられます。`,
    add: fresh(T('理由をつける'), B(10, 32, 120, 'Why?', C.blue, FILL.blue, 28), B(100, 66, 210, 'Because I like soccer.', C.green, FILL.green, 28, 13), B(10, 108, 300, 'I want to be a doctor', C.purple, FILL.purple, 28, 13), B(10, 140, 300, 'because I want to help people.', C.purple, FILL.purple, 28, 13), K('because 〜 で理由')),
  },
  {
    note: `まとめです。①職業をたずねる What do you do?　②職業には a / an。③夢は I want to be a 〜.。④理由は because。`,
    add: fresh(B(10, 14, 300, '① What do you do?', C.blue, FILL.blue, 30), B(10, 52, 300, `② I'm a teacher.（a を忘れない）`, C.red, FILL.red, 30), B(10, 90, 300, '③ I want to be a vet.', C.green, FILL.green, 30), B(10, 128, 300, '④ Because 〜. で理由', C.purple, FILL.purple, 30), K('職業と夢')),
  },
], '職業と将来の夢');

// ───────── 曜日の言い方と一週間の言い方 ─────────
const u10: DiagramFigure = show([
  {
    note: `一週間（いっしゅうかん）の7つの曜日（ようび）です。Monday（月）・Tuesday（火）・Wednesday（水）・Thursday（木）・Friday（金）・Saturday（土）・Sunday（日）。今日はこの形が、なぜそうなのかを見ていきます。`,
    add: fresh(T('曜日 7つ'), ...row(['Mon', 'Tue', 'Wed', 'Thu'], 34, { h: 28, w: 68 }), ...row(['Fri', 'Sat', 'Sun'], 70, { h: 28, w: 68 }), lb(160, 128, 'Monday  Tuesday  Wednesday  Thursday', 11, C.ink, 'middle', true), lb(160, 148, 'Friday  Saturday  Sunday', 11, C.ink, 'middle', true), K('月曜日から日曜日')),
  },
  {
    note: `❓曜日は文の途中（とちゅう）でも、なぜ大文字（おおもじ）で書（か）くの？→ Sunday（太陽（たいよう）の日）・Monday（月の日）のように、神（かみ）や天体（てんたい）の名前から作（つく）られた固有名詞（こゆうめいし）だからです。I like Monday. が正（ただ）しく、monday は×です。`,
    add: fresh(T('固有名詞は 大文字で始める'), B(10, 38, 140, 'Sunday', C.red, FILL.red, 30), lb(80, 82, '＝ 太陽の日', 12, C.red, 'middle', true), B(170, 38, 140, 'Monday', C.blue, FILL.blue, 30), lb(240, 82, '＝ 月の日', 12, C.blue, 'middle', true), B(40, 108, 240, 'I like Monday.   ○', C.green, FILL.green, 28, 13), B(40, 144, 240, 'I like monday.   ×', C.red, FILL.red, 28, 13), K('曜日は 大文字で始める')),
  },
  {
    note: `❓Wednesday は、なぜ d が読（よ）まれないのに書くの？→ 昔（むかし）の名前（ウォーデンの日）の形がそのまま残（のこ）っているからです。Wed-nes-day と3つに分（わ）けると書きやすくなります。`,
    add: fresh(T('Wednesday のつづり'), B(10, 40, 90, 'Wed', C.blue, FILL.blue, 40, 18), lb(104, 60, '-', 18, C.ink, 'middle', true), B(112, 40, 90, 'nes', C.blue, FILL.blue, 40, 18), lb(206, 60, '-', 18, C.ink, 'middle', true), B(214, 40, 96, 'day', C.blue, FILL.blue, 40, 18), lb(160, 118, '昔の名前の形が残っている', 13, C.ink, 'middle', true), K('3つに分けて覚える')),
  },
  {
    note: `❓曜日の前には、なぜ on を使（つか）うの？→ 曜日は「一日という面（めん）」だからです。時刻（じこく）は点（てん）なので at、月は幅（はば）があるので in、曜日と日付は面なので on、と整理（せいり）します。`,
    add: fresh(T('点・面・幅'), B(10, 34, 92, 'at（点）', C.blue, FILL.blue, 34, 13), B(114, 34, 92, 'on（面）', C.red, FILL.red, 34, 13), B(218, 34, 92, 'in（幅）', C.green, FILL.green, 34, 13), lb(56, 86, '時刻', 12, C.blue, 'middle', true), lb(160, 86, '曜日・日付', 12, C.red, 'middle', true), lb(264, 86, '月', 12, C.green, 'middle', true), B(40, 114, 240, 'on Monday   ○', C.green, FILL.green, 28, 13), B(40, 150, 240, 'in Monday / at Monday   ×', C.red, FILL.red, 28, 12), K('曜日は 一日（面）だから on')),
  },
  {
    note: `❓「毎週日曜日に」は？→ on Sundays のように、曜日を複数形（ふくすうけい）にします。日曜日が何度（なんど）もくり返（かえ）されるからです。I clean my room on Saturdays.（毎週土曜日に部屋をそうじします）`,
    add: fresh(T('毎週 ＝ 複数形'), B(10, 36, 140, 'on Sunday', C.blue, FILL.blue, 34, 14), lb(80, 88, '今度の日曜日', 12, C.blue, 'middle', true), B(170, 36, 140, 'on Sundays', C.red, FILL.red, 34, 14), lb(240, 88, '毎週日曜日', 12, C.red, 'middle', true), B(10, 120, 300, 'I clean my room on Saturdays.', C.green, FILL.green, 32, 13), K('くり返すなら 複数形')),
  },
  {
    note: `今日が何曜日かをたずねるには、What day is it today?（今日は何曜日ですか）— It's Monday.（月曜日です）と言（い）います。`,
    add: fresh(T('曜日をたずねる'), B(10, 36, 230, 'What day is it today?', C.blue, FILL.blue, 32, 14), B(90, 86, 220, `It's Monday.`, C.green, FILL.green, 32, 14), B(10, 130, 300, 'I have English on Monday.', C.purple, FILL.purple, 30, 13), K('What day is it today?')),
  },
  {
    note: `平日（へいじつ）は weekday（ウィークデー）、週末（しゅうまつ）は weekend（ウィークエンド）。I like weekends.（週末が好きです）のように使（つか）います。`,
    add: fresh(T('平日と週末'), B(10, 38, 190, 'weekday  平日', C.blue, FILL.blue, 34, 14), B(120, 86, 190, 'weekend  週末', C.red, FILL.red, 34, 14), B(10, 134, 300, 'I like weekends.', C.green, FILL.green, 30, 14), K('weekday と weekend')),
  },
  {
    note: `まとめです。①曜日は固有名詞なので大文字。②曜日は面なので on。③毎週なら複数形（on Sundays）。④Wednesday は Wed-nes-day と分けて覚える。`,
    add: fresh(B(10, 14, 300, '① 曜日は大文字（Monday）', C.red, FILL.red, 30), B(10, 52, 300, '② 曜日は面だから on', C.blue, FILL.blue, 30), B(10, 90, 300, '③ 毎週なら on Sundays', C.green, FILL.green, 30), B(10, 128, 300, '④ Wed-nes-day と分けて書く', C.purple, FILL.purple, 30), K('曜日のきまり')),
  },
], '曜日のきまり');

// ───────── 月の名前と誕生日の伝え方 ─────────
const u11: DiagramFigure = show([
  {
    note: `12か月（げつ）の名前（なまえ）です。January（1月）・February（2月）・March（3月）・April（4月）・May（5月）・June（6月）・July（7月）・August（8月）・September（9月）・October（10月）・November（11月）・December（12月）。`,
    add: fresh(T('12か月'), ...row(['January', 'February', 'March', 'April'], 30, { h: 28, w: 72, size: 11 }), ...row(['May', 'June', 'July', 'August'], 64, { h: 28, w: 72, size: 11 }), ...row(['September', 'October', 'November', 'December'], 98, { h: 28, w: 72, size: 10 }), K('1月から12月まで')),
  },
  {
    note: `❓月の前には、なぜ in を使（つか）うの？→ 月は約30日という「幅（はば）のある期間（きかん）」なので、「その中に」という意味（いみ）の in を使います。We have a school trip in June.（6月に修学旅行（しゅうがくりょこう）があります）`,
    add: fresh(T('月は 幅のある期間 → in'), B(20, 34, 280, '', C.green, FILL.green, 44), ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => ci(44 + i * 26, 56, 8, '', C.green, '#FFFFFF')), lb(160, 100, 'April（およそ30日の幅）', 12, C.green, 'middle', true), B(40, 120, 240, 'in April   ○', C.green, FILL.green, 28, 13), B(40, 156, 240, 'on April   ×', C.red, FILL.red, 28, 13), K('月・年は in')),
  },
  {
    note: `❓月の名前は、なぜ大文字（おおもじ）で書（か）くの？→ 曜日（ようび）と同（おな）じ固有名詞（こゆうめいし）なので、文の途中（とちゅう）でも最初（さいしょ）の文字（もじ）は大文字です。February は r が発音（はつおん）で抜（ぬ）けやすいですが、つづりでは Febr- と r があります。`,
    add: fresh(T('大文字 と February'), B(10, 34, 140, 'I like May.  ○', C.green, FILL.green, 28, 13), B(170, 34, 140, 'I like may.  ×', C.red, FILL.red, 28, 13), ...row(['F', 'e', 'b', 'r', 'u', 'a', 'r', 'y'], 90, { h: 40, w: 30, gap: 4, size: 18 }), lb(160, 150, '↑ Febr- の r をわすれない', 13, C.red, 'middle', true), K('2月は r が入る')),
  },
  {
    note: `❓日付（ひづけ）は、なぜ 5th のような序数（じょすう）で読（よ）むの？→ 日付は「その月の5番目（ばんめ）の日」という順番（じゅんばん）を表（あらわ）すからです。April 5 と書（か）いても、読むときは April fifth と順番で読みます。`,
    add: fresh(T('日付は「何番目の日」'), B(20, 34, 130, 'April 5', C.blue, FILL.blue, 36, 18), lb(160, 52, '→', 18), B(170, 34, 140, 'April fifth', C.green, FILL.green, 36, 16), ...[1, 2, 3, 4, 5].map((i) => ci(60 + i * 36, 112, 12, String(i), i === 5 ? C.red : C.gray, i === 5 ? FILL.red : FILL.gray, 11)), lb(160, 148, '5番目の日', 13, C.red, 'middle', true), K('日付 ＝ 順番（序数）')),
  },
  {
    note: `序数（じょすう）の形（かたち）です。1st＝first、2nd＝second、3rd＝third、4th＝fourth、5th＝fifth。1・2・3は特別（とくべつ）な形で、4からは th が付（つ）きます。`,
    add: fresh(T('序数'), ...tab([['数字', '1st', '2nd', '3rd', '4th', '5th'], ['読み', 'first', 'second', 'third', 'fourth', 'fifth']], 44, [50, 50, 54, 50, 54, 50], { h: 34, color: C.green, fill: FILL.green, size: 11 }), K('1・2・3 は特別な形')),
  },
  {
    note: `誕生日（たんじょうび）のたずね方は When is your birthday?。答（こた）えは「月→日」の順（じゅん）で、My birthday is October 10th.（10月10日です）。日は序数（じょすう）で読みます。`,
    add: fresh(T('誕生日の会話'), B(10, 34, 250, 'When is your birthday?', C.blue, FILL.blue, 32, 14), B(60, 82, 250, 'My birthday is October 10th.', C.green, FILL.green, 32, 13), B(10, 130, 300, 'Oh, that is next month!', C.purple, FILL.purple, 30, 13), K('月 → 日 の順')),
  },
  {
    note: `月と季節（きせつ）を結（むす）びつけます。spring（春）＝March・April・May、summer（夏）＝June・July・August、fall / autumn（秋）＝September・October・November、winter（冬）＝December・January・February。日本とは少（すこ）しずれる、英語圏（えいごけん）で一般的（いっぱんてき）な区切（くぎ）り方です。`,
    add: fresh(T('季節と月'), ...tab([['季節', '月'], ['spring 春', 'March April May'], ['summer 夏', 'June July August'], ['fall / autumn 秋', 'September October November'], ['winter 冬', 'December January February']], 34, [100, 200], { h: 28, color: C.blue, fill: FILL.blue, size: 11 }), K('英語圏の区切り方')),
  },
  {
    note: `まとめです。①月は幅のある期間なので in。②月の名前は大文字、February は Febr-。③日付は「何番目の日」なので序数（じょすう）で読む。`,
    add: fresh(B(10, 20, 300, '① 月は幅 → in April', C.green, FILL.green, 36), B(10, 68, 300, '② 月の名前は大文字・Febr-', C.red, FILL.red, 36), B(10, 116, 300, '③ 日付は序数（first, second…）', C.blue, FILL.blue, 36), K('月と誕生日')),
  },
], '月と誕生日');

// ───────── 天気の言い方 ─────────
const u12: DiagramFigure = show([
  {
    note: `❓天気（てんき）はどうたずねるの？→ How's the weather today?（今日の天気はどうですか）、または What's the weather like today?（今日の天気はどんな様子（ようす）ですか）と聞（き）きます。`,
    add: fresh(T('天気をたずねる'), B(10, 34, 300, `How's the weather today?`, C.blue, FILL.blue, 34, 14), B(10, 84, 300, `What's the weather like today?`, C.blue, FILL.blue, 34, 14), K('2つの聞き方')),
  },
  {
    note: `❓答（こた）えの主語（しゅご）は何（なに）？→ いつも it です。It's sunny today.（今日は晴れです）。この it は「それ」ではなく、天気のときだけ使（つか）う特別（とくべつ）な主語で、日本語には訳（やく）しません。`,
    add: fresh(T('天気の主語は it'), B(10, 36, 60, 'It', C.red, FILL.red, 34, 18), B(76, 36, 60, 'is', C.gray, FILL.gray, 34, 18), B(142, 36, 160, 'sunny today.', C.blue, FILL.blue, 34, 16), lb(40, 86, '訳さない', 12, C.red, 'middle', true), lb(160, 130, 'It is rainy.  It is cold.', 14, C.ink, 'middle', true), K('天気の主語は いつも it')),
  },
  {
    note: `天気（てんき）の語（ご）です。sunny（晴れ）・cloudy（くもり）・rainy（雨）・snowy（雪）・windy（風が強い）。hot（暑い）・cold（寒い）・warm（暖かい）・cool（涼しい）も使います。`,
    add: fresh(T('天気の言葉'), ...row(['sunny 晴れ', 'cloudy くもり', 'rainy 雨'], 34, { h: 30, w: 96, size: 11 }), ...row(['snowy 雪', 'windy 強い風'], 74, { h: 30, w: 96, size: 11 }), ...row(['hot 暑い', 'cold 寒い', 'warm 暖かい', 'cool 涼しい'], 116, { h: 30, w: 72, size: 10, color: C.red, fill: FILL.red }), K('天気と気温の語')),
  },
  {
    note: `❓sunny や rainy は、どうやってできているの？→ 名詞（めいし）に y をつけて「〜の（天気）」という形容詞（けいようし）にしたものが多いです。sun→sunny、cloud→cloudy、rain→rainy、snow→snowy、wind→windy。`,
    add: fresh(T('名詞 ＋ y ＝ 天気の形容詞'), ...tab([['名詞', '形容詞'], ['sun', 'sunny'], ['cloud', 'cloudy'], ['rain', 'rainy'], ['snow', 'snowy'], ['wind', 'windy']], 32, [100, 100], { h: 26, color: C.green, fill: FILL.green }), K('y をつけるだけ')),
  },
  {
    note: `❓rain と rainy は同（おな）じ？→ ちがいます。rain は名詞（雨）や動詞（雨が降（ふ）る）、rainy は形容詞（雨の）です。It rains. も It's rainy. も使えますが、形がちがうことに注意（ちゅうい）します。`,
    add: fresh(T('rain と rainy'), B(10, 34, 140, 'rain', C.blue, FILL.blue, 34, 16), lb(80, 84, '名詞・動詞', 12, C.blue, 'middle', true), B(170, 34, 140, 'rainy', C.red, FILL.red, 34, 16), lb(240, 84, '形容詞', 12, C.red, 'middle', true), B(10, 112, 140, 'It rains.', C.blue, FILL.blue, 30, 14), B(170, 112, 140, `It's rainy.`, C.red, FILL.red, 30, 14), K('形がちがう')),
  },
  {
    note: `天気と気持（きも）ちをセットで伝（つた）えられます。It's hot today. I want to swim.（暑いです。泳（およ）ぎたいです）、It's cold. I want to drink hot tea.（寒いです。温かいお茶が飲みたいです）。`,
    add: fresh(T('天気と気持ち'), B(10, 34, 300, `It's hot today.`, C.red, FILL.red, 28, 14), B(10, 68, 300, 'I want to swim.', C.red, FILL.red, 28, 14), B(10, 112, 300, `It's cold.`, C.blue, FILL.blue, 28, 14), B(10, 146, 300, 'I want to drink hot tea.', C.blue, FILL.blue, 28, 14), K('天気 → 気持ち')),
  },
  {
    note: `❓あしたの天気はどう言（い）うの？→ これからのことには will（〜だろう）を使（つか）って、It will be sunny tomorrow.（あしたは晴れるでしょう）。今の天気は It's 〜.、これからは It will be 〜. と形がちがいます。`,
    add: fresh(T('今 と これから'), B(10, 36, 140, 'now', C.gray, FILL.gray, 26), B(170, 36, 140, 'tomorrow', C.gray, FILL.gray, 26), B(10, 76, 140, `It's sunny.`, C.blue, FILL.blue, 36, 14), B(170, 76, 140, 'It will be sunny.', C.green, FILL.green, 36, 12), B(40, 132, 240, 'Take an umbrella. Wear a coat.', C.purple, FILL.purple, 30, 12), K('これからは will')),
  },
  {
    note: `まとめです。①How's the weather today? とたずねる。②答えの主語はいつも it。③sunny など多（おお）くは名詞＋y。④あしたの天気は will。`,
    add: fresh(B(10, 14, 300, `① How's the weather today?`, C.blue, FILL.blue, 30), B(10, 52, 300, `② 主語は it（It's sunny.）`, C.red, FILL.red, 30), B(10, 90, 300, '③ 名詞＋y（sun → sunny）', C.green, FILL.green, 30), B(10, 128, 300, '④ これからは will', C.purple, FILL.purple, 30), K('天気の言い方')),
  },
], '天気の言い方');

// ───────── あいさつの表現 ─────────
const u13: DiagramFigure = show([
  {
    note: `どの時間（じかん）でも使（つか）えるあいさつから。Hello.（こんにちは）、Hi.（やあ、Hello よりくだけた言い方）。`,
    add: fresh(T('いつでも使える'), B(20, 40, 130, 'Hello.', C.blue, FILL.blue, 44, 18), B(170, 40, 130, 'Hi.', C.green, FILL.green, 44, 18), lb(85, 108, 'こんにちは', 12, C.blue, 'middle', true), lb(235, 108, 'やあ（くだけた言い方）', 11, C.green, 'middle', true), K('どの時間でも使える')),
  },
  {
    note: `❓時間（じかん）によって、あいさつは変（か）わるの？→ 変わります。朝（あさ）から昼（ひる）くらいまでが Good morning.、昼から夕方（ゆうがた）までが Good afternoon.、夕方から夜（よる）が Good evening.（会ったとき）です。`,
    add: fresh(T('時間のあいさつ'), ln(20, 70, 300, 70, C.gray), B(14, 40, 92, 'Good morning.', C.main, FILL.warm, 28, 11), B(114, 40, 92, 'Good afternoon.', C.blue, FILL.blue, 28, 10), B(214, 40, 92, 'Good evening.', C.purple, FILL.purple, 28, 11), lb(60, 92, '朝〜昼ごろ', 12, C.main, 'middle', true), lb(160, 92, '昼〜夕方', 12, C.blue, 'middle', true), lb(260, 92, '夕方〜夜', 12, C.purple, 'middle', true), K('会ったときのあいさつ')),
  },
  {
    note: `❓では Good night. は？→「こんばんは」ではありません。寝（ね）る前や、夜に別（わか）れるときの「おやすみなさい」です。会ったときの Good evening. とは使い分（わ）けます。`,
    add: fresh(T('Good evening と Good night'), B(10, 40, 140, 'Good evening.', C.purple, FILL.purple, 40, 13), lb(80, 98, '会ったとき', 13, C.purple, 'middle', true), B(170, 40, 140, 'Good night.', C.red, FILL.red, 40, 14), lb(240, 98, 'ねる前・別れるとき', 12, C.red, 'middle', true), lb(160, 144, 'Good night. は 会ったときに言わない', 12, C.red, 'middle', true), K('Good night. ＝ おやすみ')),
  },
  {
    note: `❓あいさつのあとは？→ 調子（ちょうし）をたずねます。How are you?（元気ですか）— I'm fine, thank you. And you?（元気です、ありがとう。あなたは？）。And you? を付（つ）けると、相手（あいて）にも同（おな）じ質問（しつもん）を返（かえ）せます。`,
    add: fresh(T('調子をたずねる'), B(10, 34, 190, 'How are you?', C.blue, FILL.blue, 28, 14), B(110, 70, 200, `I'm fine, thank you. And you?`, C.green, FILL.green, 28, 12), B(10, 108, 190, `I'm good, thanks.`, C.green, FILL.green, 28, 13), K('And you? で返す')),
  },
  {
    note: `調子（ちょうし）の答（こた）えは fine だけではありません。I'm good.（元気です）・I'm great.（すごく元気です）・I'm tired.（疲（つか）れています）など、そのときの気持（きも）ちで選（えら）べます。`,
    add: fresh(T('答えのいろいろ'), ...row([`I'm fine.`, `I'm good.`, `I'm great.`, `I'm tired.`], 40, { h: 34, w: 72, size: 11 }), lb(160, 100, 'fine  good  great  tired', 12, C.ink, 'middle', true), K('気持ちで選ぶ')),
  },
  {
    note: `別（わか）れるときのあいさつです。Goodbye.（さようなら）・Bye.（じゃあね）・See you.（またね）・See you tomorrow.（また明日）・Take care.（気をつけてね）。`,
    add: fresh(T('別れのあいさつ'), ...tab([['Goodbye.', 'さようなら'], ['Bye.', 'じゃあね'], ['See you.', 'またね'], ['See you tomorrow.', 'また明日'], ['Take care.', '気をつけてね']], 34, [150, 140], { h: 28, head: false, color: C.red, fill: FILL.red, size: 12 }), K('別れるときの言葉')),
  },
  {
    note: `会話（かいわ）の流（なが）れです。時間のあいさつ → 調子をたずねる → 別れのあいさつ。A: Good morning! B: Good morning! How are you? A: I'm fine, thank you. And you? B: I'm good, thanks. A: See you later! B: Bye!`,
    add: fresh(T('あいさつの流れ'), B(20, 36, 120, '① Good morning!', C.main, FILL.warm, 36, 11), ar(144, 54, 170, 54, C.ink), B(174, 36, 130, '② How are you?', C.blue, FILL.blue, 36, 12), ar(240, 76, 240, 104, C.ink), B(174, 106, 130, '③ See you later!', C.red, FILL.red, 36, 12), K('あいさつ → 調子 → 別れ')),
  },
  {
    note: `まとめです。①Good morning / afternoon / evening は会ったとき。②Good night. は別れ・寝る前だけ。③How are you? には I'm fine, thank you. And you?。④別れは Goodbye. / See you.`,
    add: fresh(B(10, 14, 300, '① morning・afternoon・evening は会うとき', C.blue, FILL.blue, 30, 12), B(10, 52, 300, '② Good night. は 別れ・寝る前', C.red, FILL.red, 30), B(10, 90, 300, '③ How are you? → And you?', C.green, FILL.green, 30), B(10, 128, 300, '④ 別れは Goodbye. / See you.', C.purple, FILL.purple, 30), K('あいさつ')),
  },
], 'あいさつの使い分け');

// ───────── 自己紹介の言い方 ─────────
const u14: DiagramFigure = show([
  {
    note: `名前（なまえ）を伝（つた）える言い方は2つあります。I'm Yuki.（私はゆきです）と My name is Yuki.（私の名前はゆきです）。どちらも自己紹介（じこしょうかい）で使えますが、My name is 〜. のほうが少（すこ）していねいです。`,
    add: fresh(T('名前の伝え方 2つ'), B(10, 38, 300, `I'm Yuki.`, C.blue, FILL.blue, 36, 16), B(10, 90, 300, 'My name is Yuki.', C.green, FILL.green, 36, 16), lb(160, 144, 'My name is 〜. の方がややていねい', 12, C.ink, 'middle', true), K('どちらか一つを使う')),
  },
  {
    note: `❓2つを混ぜると？→ My name is I'm Yuki. のように言（い）うと、主語（しゅご）が2つになって文がこわれます。どちらか一つの形（かたち）にそろえます。`,
    add: fresh(T('混ぜない'), B(10, 38, 300, `My name is I'm Yuki.`, C.red, FILL.red, 40, 16), lb(160, 96, '×  主語が2つ', 14, C.red, 'middle', true), B(10, 120, 140, `I'm Yuki.`, C.green, FILL.green, 36, 14), B(170, 120, 140, 'My name is Yuki.', C.green, FILL.green, 36, 12), K('どちらか一つ')),
  },
  {
    note: `❓出身（しゅっしん）は？→ Where are you from?（どこの出身ですか）— I'm from Osaka.（大阪出身です）。from は「〜から来（き）た」という出発点（しゅっぱつてん）を表（あらわ）します。`,
    add: fresh(T('from は 出発点'), B(10, 34, 230, 'Where are you from?', C.blue, FILL.blue, 30, 14), B(80, 78, 230, `I'm from Osaka.`, C.green, FILL.green, 30, 14), ci(60, 150, 22, 'Osaka', C.green, FILL.green, 11), ar(86, 150, 150, 150, C.green), lb(210, 150, '「〜から来た」', 13, C.green, 'middle', true), K('from ＝ 出発点')),
  },
  {
    note: `❓では、今住（す）んでいる場所は？→ I live in Tokyo.（東京に住んでいます）。live in は「〜の中に住んでいる」今の場所。生まれ育（そだ）った場所と今の場所がちがうことがあるので、from と live in を分（わ）けます。`,
    add: fresh(T('from と live in'), ci(60, 70, 28, 'Kyoto', C.green, FILL.green, 12), ar(90, 70, 220, 70, C.gray), ci(250, 70, 28, 'Tokyo', C.blue, FILL.blue, 12), lb(60, 112, `I'm from Kyoto.`, 12, C.green, 'middle', true), lb(60, 130, '生まれ育った所', 11, C.gray, 'middle', true), lb(250, 112, 'I live in Tokyo.', 12, C.blue, 'middle', true), lb(250, 130, '今住んでいる所', 11, C.gray, 'middle', true), K('出身（from）と 今の住まい（live in）')),
  },
  {
    note: `聞（き）かれた形（かたち）で答（こた）えます。Where are you from? には I'm from Kyoto.、Do you live in Kyoto now? には Yes, I do. です。`,
    add: fresh(T('聞かれた形で答える'), B(10, 34, 230, 'Where are you from?', C.blue, FILL.blue, 28, 13), B(80, 68, 230, `I'm from Kyoto.`, C.green, FILL.green, 28, 13), B(10, 112, 250, 'Do you live in Kyoto now?', C.blue, FILL.blue, 28, 13), B(100, 146, 210, 'Yes, I do.', C.green, FILL.green, 28, 13), K('from には from、live には do')),
  },
  {
    note: `好（す）きなものも伝（つた）えます。I like soccer.（サッカーが好き）、I like dogs.（犬が好き）、My favorite color is blue.（一番好きな色は青）。`,
    add: fresh(T('好きなもの'), B(10, 34, 300, 'I like soccer.', C.blue, FILL.blue, 30, 14), B(10, 74, 300, 'I like dogs.', C.blue, FILL.blue, 30, 14), B(10, 114, 300, 'My favorite color is blue.', C.blue, FILL.blue, 30, 14), K('好きなものを一つ入れる')),
  },
  {
    note: `❓自己紹介（じこしょうかい）はどんな順番（じゅんばん）で組（く）み立てる？→ あいさつ → 名前 → 年れい → 出身 → 好きなもの → Nice to meet you. の順です。Nice to meet you.（はじめまして）は初めて会う相手（あいて）にだけ使い、2回目からは Nice to see you again. にします。`,
    add: fresh(T('自己紹介の型'), ...tab([['①', 'Hello.'], ['②', 'My name is Yuki.'], ['③', `I'm ten years old.`], ['④', `I'm from Osaka.`], ['⑤', 'I like soccer and dogs.'], ['⑥', 'Nice to meet you.']], 28, [36, 220], { h: 26, head: false, color: C.green, fill: FILL.green, size: 12 }), K('はじめて会う人に Nice to meet you.')),
  },
  {
    note: `まとめです。①名前は I'm 〜. か My name is 〜. のどちらか一つ。②from は出身、live in は今の住まい。③最後は Nice to meet you.`,
    add: fresh(B(10, 20, 300, `① I'm 〜. か My name is 〜.（混ぜない）`, C.blue, FILL.blue, 36, 12), B(10, 68, 300, '② from ＝ 出身 / live in ＝ 今の住まい', C.green, FILL.green, 36, 12), B(10, 116, 300, '③ 最後は Nice to meet you.', C.red, FILL.red, 36), K('自己紹介')),
  },
], '自己紹介');

// ───────── How are you?とその答え方いろいろ ─────────
const u15: DiagramFigure = show([
  {
    note: `How are you? への答（こた）えは fine だけではありません。I'm のあとに気持（きも）ちや様子（ようす）を表（あらわ）す語（ご）を1つ入（い）れるだけで答えができます。happy（うれしい）・tired（疲れた）・sleepy（眠い）・hungry（お腹がすいた）など。`,
    add: fresh(T(`I'm ＋ 気持ち`), ...row(['fine', 'good', 'great', 'happy', 'OK'], 34, { h: 28, w: 54, size: 11 }), ...row(['tired', 'sleepy', 'sad', 'hungry', 'sick'], 72, { h: 28, w: 54, size: 11, color: C.red, fill: FILL.red }), lb(160, 126, `I'm tired.  I'm hungry.`, 14, C.ink, 'middle', true), K('気持ちの語を1つ')),
  },
  {
    note: `❓理由（りゆう）も伝（つた）えたいときは？→ because（〜だから）を使います。I'm happy because it's my birthday today.（今日は誕生日（たんじょうび）なのでうれしい）。「気持ち」と「理由」を1つの文で言えます。`,
    add: fresh(T('気持ち ＋ because ＋ 理由'), B(10, 34, 300, `I'm happy`, C.blue, FILL.blue, 32, 15), lb(262, 50, '気持ち', 11, C.blue, 'middle', true), B(110, 72, 100, 'because', C.red, FILL.red, 28, 13), lb(262, 86, 'だから', 11, C.red, 'middle', true), B(10, 108, 300, `it's my birthday today.`, C.green, FILL.green, 32, 15), lb(262, 124, '理由', 11, C.green, 'middle', true), K('1つの文に 気持ちと理由')),
  },
  {
    note: `ほかの例（れい）です。I'm tired because I ran a lot.（たくさん走（はし）ったので疲れています）。ran は run（走る）の過去形（かこけい）です。`,
    add: fresh(T('例 その1'), B(10, 34, 300, `I'm tired`, C.blue, FILL.blue, 32, 15), B(110, 72, 100, 'because', C.red, FILL.red, 28, 13), B(10, 108, 300, 'I ran a lot.', C.green, FILL.green, 32, 15), lb(160, 160, 'run（走る）→ ran（走った）', 13, C.ink, 'middle', true), K('疲れている理由')),
  },
  {
    note: `もう一つ。I'm hungry because I didn't eat breakfast.（朝ごはんを食（た）べなかったのでお腹（なか）がすいています）。didn't は did not の短縮形（たんしゅくけい）で「〜しなかった」の意味（いみ）です。`,
    add: fresh(T('例 その2'), B(10, 34, 300, `I'm hungry`, C.blue, FILL.blue, 32, 15), B(110, 72, 100, 'because', C.red, FILL.red, 28, 13), B(10, 108, 300, `I didn't eat breakfast.`, C.green, FILL.green, 32, 15), lb(160, 160, `didn't ＝ did not（〜しなかった）`, 13, C.ink, 'middle', true), K('お腹がすいている理由')),
  },
  {
    note: `❓会話（かいわ）では？→ A: How are you today? B: I'm a little tired. A: Why?（どうして？）B: Because I practiced soccer this morning.（今朝（けさ）サッカーを練習（れんしゅう）したから）。理由だけを Because 〜. と答えることもできます。`,
    add: fresh(T('会話で理由を聞く'), B(10, 32, 200, 'How are you today?', C.blue, FILL.blue, 26, 13), B(110, 62, 200, `I'm a little tired.`, C.green, FILL.green, 26, 13), B(10, 92, 200, 'Why?', C.blue, FILL.blue, 26, 13), B(60, 122, 250, 'Because I practiced soccer this morning.', C.green, FILL.green, 26, 10), K('Why? → Because 〜.')),
  },
  {
    note: `相手（あいて）が元気（げんき）なさそうなときは、Are you OK?（大丈夫（だいじょうぶ）？）や What's wrong?（どうしたの？）と声（こえ）をかけます。答えは I have a headache.（頭が痛い）や I don't feel well.（気分がよくない）です。`,
    add: fresh(T('気づかう'), B(10, 34, 150, 'Are you OK?', C.blue, FILL.blue, 28, 13), B(170, 34, 140, `What's wrong?`, C.blue, FILL.blue, 28, 13), B(10, 84, 300, 'I have a headache.', C.red, FILL.red, 28, 13), B(10, 120, 300, `I don't feel well.`, C.red, FILL.red, 28, 13), K('具合が悪いとき')),
  },
  {
    note: `元気（げんき）づける言葉（ことば）です。Take care.（お大事（だいじ）に）、Get well soon.（早くよくなってね）。How are you? の答えは1つに決（き）まっていません。そのときの本当（ほんとう）の気持ちを伝（つた）えていいのです。`,
    add: fresh(T('はげます言葉'), B(10, 40, 300, 'Take care.', C.green, FILL.green, 36, 16), B(10, 90, 300, 'Get well soon.', C.green, FILL.green, 36, 16), lb(160, 146, 'fine だけを くり返さない', 13, C.red, 'middle', true), K('本当の気持ちを伝える')),
  },
  {
    note: `まとめです。①I'm のあとに気持ちの語。②理由は because で。③相手を気づかうときは Are you OK? / What's wrong?。`,
    add: fresh(B(10, 20, 300, `① I'm ＋ 気持ち（tired, happy…）`, C.blue, FILL.blue, 36), B(10, 68, 300, '② because ＋ 理由', C.red, FILL.red, 36), B(10, 116, 300, `③ Are you OK? / What's wrong?`, C.green, FILL.green, 36), K('気持ちの答え方')),
  },
], '気持ちの答え方');
export const XF_CEK_FIGURES: Record<string, DiagramFigure> = {
  'xf_new20_e4_eigo_01': u01,
  'xf_new20_e4_eigo_02': u02,
  'xf_new20_e4_eigo_03': u03,
  'xf_new20_e4_eigo_04': u04,
  'xf_new20_e4_eigo_05': u05,
  'xf_new20_e4_eigo_06': u06,
  'xf_new20_e4_eigo_07': u07,
  'xf_new20_e4_eigo_08': u08,
  'xf_new20_e4_eigo_09': u09,
  'xf_new20_e4_eigo_10': u10,
  'xf_new20_e4_eigo_11': u11,
  'xf_new20_e4_eigo_12': u12,
  'xf_new20_e4_eigo_13': u13,
  'xf_new20_e4_eigo_14': u14,
  'xf_new20_e4_eigo_15': u15,
};
