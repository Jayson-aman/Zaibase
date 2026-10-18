// 中学受験 英語（小4〜小5）の単元に、動く図解スライドを足す。
// 「❓なぜ？→答え」の連鎖で7枚以上。英文・英単語は図に入れてよい（英語の単元のため）。
import type { DiagramElement, DiagramFigure } from './figures';
import { show, bx, lb, ar, ln, ci, pg, fresh, band, flow, C, FILL } from './diagram-kit';

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

// ───────── What's this?でものをたずねる ─────────
const u16: DiagramFigure = show([
  {
    note: `❓this と that は、どうちがうの？→ 話（はな）し手（て）からの距離（きょり）です。近（ちか）くにあるものは this、離（はな）れているものは that。日本語（にほんご）の「これ・あれ」と同（おな）じ区別（くべつ）です。`,
    add: fresh(T('近い → this / 遠い → that'), ci(40, 90, 16, '私', C.main, FILL.warm, 12), ci(100, 90, 12, '', C.red, FILL.red), lb(100, 120, 'this', 14, C.red, 'middle', true), ci(250, 90, 12, '', C.blue, FILL.blue), lb(250, 120, 'that', 14, C.blue, 'middle', true), ln(60, 90, 86, 90, C.red), ln(60, 90, 236, 90, C.blue, true), K('距離で選ぶ')),
  },
  {
    note: `近（ちか）くのものは What's this?（これは何（なん）ですか）とたずね、It's an apple.（りんごです）のように答（こた）えます。What's は What is を短（みじか）くした形（かたち）です。`,
    add: fresh(T('近いもの'), B(10, 34, 220, `What's this?`, C.blue, FILL.blue, 30, 14), B(90, 78, 220, `It's an apple.`, C.green, FILL.green, 30, 14), lb(160, 138, `What's ＝ What is`, 13, C.ink, 'middle', true), K('近くのものは this')),
  },
  {
    note: `遠（とお）くのものは What's that?（あれは何ですか）とたずね、It's a bird.（鳥です）のように答えます。`,
    add: fresh(T('遠いもの'), B(10, 34, 220, `What's that?`, C.blue, FILL.blue, 30, 14), B(90, 78, 220, `It's a bird.`, C.green, FILL.green, 30, 14), K('遠くのものは that')),
  },
  {
    note: `❓答（こた）えの a と an は、どうやって決（き）めるの？→ 次（つぎ）の語の最初の音（おと）が母音（ぼいん）（あ・い・う・え・お の音）かどうかで決まります。an apple・an orange、a pen・a car。`,
    add: fresh(T('a か an か'), B(10, 38, 60, 'an', C.red, FILL.red), B(76, 38, 90, 'apple', C.blue, FILL.blue), B(180, 38, 60, 'an', C.red, FILL.red), B(246, 38, 64, 'orange', C.blue, FILL.blue, 26, 11), B(10, 90, 60, 'a', C.gray, FILL.gray), B(76, 90, 90, 'pen', C.blue, FILL.blue), B(180, 90, 60, 'a', C.gray, FILL.gray), B(246, 90, 64, 'car', C.blue, FILL.blue), K('次の語の最初の音で決める')),
  },
  {
    note: `❓2つ以上（いじょう）のものは？→ 形（かたち）が全部（ぜんぶ）変（か）わります。What are these?（これらは何ですか）— They are apples.（りんごです）。質問（しつもん）も答えも、複数形（ふくすうけい）の形になります。`,
    add: fresh(T('2つ以上になると'), B(10, 34, 300, 'What are these?', C.blue, FILL.blue, 30, 14), ci(100, 96, 12, '', C.red, FILL.red), ci(130, 96, 12, '', C.red, FILL.red), ci(160, 96, 12, '', C.red, FILL.red), B(10, 124, 300, 'They are apples.', C.green, FILL.green, 30, 14), K('質問も答えも複数形')),
  },
  {
    note: `対応表（たいおうひょう）です。this（これ）⇔ these（これら）、that（あれ）⇔ those（あれら）、It's 〜.（それは〜です）⇔ They are 〜.（それらは〜です）。単数（たんすう）と複数（ふくすう）で、形がすべて変わります。`,
    add: fresh(T('単数 と 複数'), ...tab([['1つ', '2つ以上'], ['this', 'these'], ['that', 'those'], [`It's 〜.`, 'They are 〜.']], 34, [120, 140], { h: 32, color: C.green, fill: FILL.green, size: 13 }), K('形がセットで変わる')),
  },
  {
    note: `❓this/that/these/those を一度（いちど）に整理（せいり）するには？→「近い・遠い」と「1つ・2つ以上」の2つの区別（くべつ）を組（く）み合わせた表にします。近い1つ＝this、近い2つ以上＝these、遠い1つ＝that、遠い2つ以上＝those。`,
    add: fresh(T('距離 × 数'), B(60, 34, 110, '1つ', C.gray, FILL.gray, 26), B(176, 34, 110, '2つ以上', C.gray, FILL.gray, 26), B(10, 64, 46, '近い', C.gray, FILL.gray, 52), B(10, 120, 46, '遠い', C.gray, FILL.gray, 52), B(60, 64, 110, 'this', C.red, FILL.red, 52, 18), B(176, 64, 110, 'these', C.red, FILL.red, 52, 18), B(60, 120, 110, 'that', C.blue, FILL.blue, 52, 18), B(176, 120, 110, 'those', C.blue, FILL.blue, 52, 18), K('2つの区別が同時に関わる')),
  },
  {
    note: `まとめです。①近いなら this、遠いなら that。②2つ以上なら these / those で、答えも They are 〜. になる。③a か an は次の語の最初の音で決める。`,
    add: fresh(B(10, 20, 300, '① 近い this / 遠い that', C.blue, FILL.blue, 36), B(10, 68, 300, '② 複数は these・those と They are', C.green, FILL.green, 36), B(10, 116, 300, '③ a か an は最初の音で決める', C.red, FILL.red, 36), K('this と that')),
  },
], 'this と that');

// ───────── 教室でよく使う先生の指示表現 ─────────
const u17: DiagramFigure = show([
  {
    note: `❓先生（せんせい）の指示（しじ）には、なぜ主語（しゅご）がないの？→ 命令文（めいれいぶん）は、主語を言わず動詞（どうし）から始（はじ）める形（かたち）だからです。You stand up. ではなく、Stand up.（立って）と言います。`,
    add: fresh(T('命令文 ＝ 動詞から始める'), B(10, 36, 140, 'You stand up.', C.gray, FILL.gray, 36, 14), ar(155, 54, 180, 54, C.red), B(184, 36, 126, 'Stand up.', C.green, FILL.green, 36, 16), lb(160, 100, '主語（You）を言わない', 13, C.red, 'middle', true), K('動詞をそのまま先頭に')),
  },
  {
    note: `動作（どうさ）の指示です。Stand up.（立ちなさい）、Sit down.（座（すわ）りなさい）、Listen.（聞（き）きなさい）、Look at me.（私を見なさい）。`,
    add: fresh(T('動作の指示'), ...tab([['Stand up.', '立ちなさい'], ['Sit down.', '座りなさい'], ['Listen.', '聞きなさい'], ['Look at me.', '私を見なさい']], 34, [150, 140], { h: 32, head: false, color: C.blue, fill: FILL.blue, size: 13 }), K('動作をうながす')),
  },
  {
    note: `もう少（すこ）し。Repeat after me.（私のあとについて言いなさい）、Raise your hand.（手を挙（あ）げなさい）、Come here.（ここに来（き）なさい）。`,
    add: fresh(T('動作の指示 その2'), ...tab([['Repeat after me.', '私のあとについて言う'], ['Raise your hand.', '手を挙げなさい'], ['Come here.', 'ここに来なさい']], 40, [150, 150], { h: 34, head: false, color: C.blue, fill: FILL.blue, size: 12 }), K('命令文は動詞から')),
  },
  {
    note: `Listen. のあとに to を付（つ）けると、聞く相手（あいて）が言えます。Listen to me.（私の話を聞いて）。Listen. だけでも「聞いて」という指示になります。`,
    add: fresh(T('Listen と Listen to'), B(10, 38, 140, 'Listen.', C.blue, FILL.blue, 36, 16), lb(80, 92, '聞いて', 13, C.blue, 'middle', true), B(170, 38, 140, 'Listen to me.', C.green, FILL.green, 36, 14), lb(240, 92, '私の話を聞いて', 13, C.green, 'middle', true), K('to のあとに聞く相手')),
  },
  {
    note: `❓please を付けるとどうなる？→ 少（すこ）していねいな言い方になります。Stand up, please.（立ってください）。先生の指示にもよく please が付きます。`,
    add: fresh(T('please でていねいに'), B(10, 38, 140, 'Stand up.', C.blue, FILL.blue, 36, 15), B(170, 38, 140, 'Stand up, please.', C.green, FILL.green, 36, 13), lb(80, 92, '命令', 13, C.blue, 'middle', true), lb(240, 92, 'ていねい', 13, C.green, 'middle', true), K('please を付ける')),
  },
  {
    note: `教科書（きょうかしょ）やノートの指示です。Open your textbook.（教科書を開（ひら）いて）、Close your book.（本を閉（と）じて）、Take out your notebook.（ノートを出して）、Write your name.（名前を書（か）いて）、Turn to page 10.（10ページを開いて）。`,
    add: fresh(T('道具の指示'), ...tab([['Open your textbook.', '教科書を開く'], ['Close your book.', '本を閉じる'], ['Take out your notebook.', 'ノートを出す'], ['Write your name.', '名前を書く'], ['Turn to page 10.', '10ページを開く']], 32, [180, 120], { h: 28, head: false, color: C.green, fill: FILL.green, size: 11 }), K('page ＋ 数字')),
  },
  {
    note: `❓わからなかったらどうする？→ Pardon?（もう一度言ってください）、One more time, please.（もう一度お願いします）、I don't understand.（わかりません）と伝（つた）えます。わかったときは OK. / I see. / Sure. です。`,
    add: fresh(T('返事'), B(10, 34, 140, 'Pardon?', C.red, FILL.red, 28, 14), B(160, 34, 150, 'One more time, please.', C.red, FILL.red, 28, 10), B(10, 70, 300, `I don't understand.`, C.red, FILL.red, 28, 13), B(10, 114, 90, 'OK.', C.green, FILL.green, 28, 14), B(110, 114, 90, 'I see.', C.green, FILL.green, 28, 14), B(210, 114, 100, 'Sure.', C.green, FILL.green, 28, 14), K('わからない / わかった')),
  },
  {
    note: `まとめです。①命令文は動詞から始める。②please を付けるとていねい。③わからないときは Pardon? / One more time, please. と伝える。`,
    add: fresh(B(10, 20, 300, '① 命令文は 動詞から始める', C.blue, FILL.blue, 36), B(10, 68, 300, '② please でていねいに', C.green, FILL.green, 36), B(10, 116, 300, '③ Pardon? で聞き返す', C.red, FILL.red, 36), K('先生の指示')),
  },
], '先生の指示');

// ───────── 教室でよく使うお願い・返事の表現 ─────────
const u18: DiagramFigure = show([
  {
    note: `❓先生や友達（ともだち）に「〜してもいいですか」と許可（きょか）を求（もと）めるには？→ Can I 〜? の形（かたち）を使います。Can I go to the restroom?（トイレに行ってもいいですか）。`,
    add: fresh(T('許可を求める ＝ Can I 〜?'), B(10, 34, 300, 'Can I go to the restroom?', C.blue, FILL.blue, 32, 14), B(10, 82, 300, 'Can I drink water?', C.blue, FILL.blue, 32, 14), B(10, 130, 300, 'Can I open the window?', C.blue, FILL.blue, 32, 14), K('Can I ＋ 動詞')),
  },
  {
    note: `先生（せんせい）の返事（へんじ）です。Yes, you can.（はい、いいですよ）、Sure, go ahead.（もちろん、どうぞ）、Sorry, not now.（ごめんなさい、今はだめです）、Wait a minute, please.（少（すこ）し待（ま）ってください）。`,
    add: fresh(T('許可の返事'), B(10, 34, 300, 'Yes, you can.   Sure, go ahead.', C.green, FILL.green, 32, 13), B(10, 82, 300, 'Sorry, not now.', C.red, FILL.red, 32, 14), B(10, 130, 300, 'Wait a minute, please.', C.red, FILL.red, 32, 14), K('OK の返事と ことわる返事')),
  },
  {
    note: `❓物を借（か）りたいときは？→ Can I borrow 〜?（〜を借りてもいいですか）。Can I borrow your eraser? — Sure. Here you are.（いいよ。どうぞ）と、物を渡（わた）すときは Here you are. と言います。`,
    add: fresh(T('借りる'), B(10, 32, 250, 'Can I borrow your eraser?', C.blue, FILL.blue, 28, 13), B(60, 66, 250, 'Sure. Here you are.', C.green, FILL.green, 28, 13), B(10, 100, 250, 'Thank you.', C.blue, FILL.blue, 28, 13), B(60, 134, 250, `You're welcome.`, C.green, FILL.green, 28, 13), K('Thank you. ⇔ You are welcome.')),
  },
  {
    note: `❓borrow と use はどうちがう？→ borrow は「持ち帰ってもよいくらい借りる」、use は「その場で使う」ニュアンスのちがいがあります。教室ではどちらもよく使われます。Can I use your pencil?`,
    add: fresh(T('borrow と use'), B(10, 34, 140, 'borrow', C.blue, FILL.blue, 36, 16), lb(80, 88, '借りる', 13, C.blue, 'middle', true), B(170, 34, 140, 'use', C.red, FILL.red, 36, 16), lb(240, 88, 'その場で使う', 13, C.red, 'middle', true), B(10, 120, 300, 'Can I use your pencil?', C.green, FILL.green, 32, 14), K('どちらも教室でよく使う')),
  },
  {
    note: `Sorry, I don't have one.（ごめん、持っていません）と答えることもできます。ことわるときも、Sorry. から始めると感じがよくなります。`,
    add: fresh(T('ことわるとき'), B(10, 34, 250, 'Can I borrow your ruler?', C.blue, FILL.blue, 30, 13), B(60, 80, 250, `Sorry, I don't have one.`, C.red, FILL.red, 30, 13), K('Sorry. から始める')),
  },
  {
    note: `❓困（こま）ったときは？→ I don't know.（わかりません）、Help me, please.（助けてください）、Can you help me?（手伝ってもらえますか）。I need a pencil.（えんぴつが必要です）。`,
    add: fresh(T('困ったとき'), B(10, 32, 300, `I don't know.`, C.red, FILL.red, 28, 13), B(10, 66, 300, 'Help me, please.', C.red, FILL.red, 28, 13), B(10, 100, 300, 'Can you help me?', C.red, FILL.red, 28, 13), B(10, 134, 300, 'I need a pencil.', C.red, FILL.red, 28, 13), K('助けを求める')),
  },
  {
    note: `助（たす）けるときの返事（へんじ）は、Sure, I'll help you.（もちろん、手伝うよ）、No problem.（いいよ）。ありがとうと言われたら You're welcome.（どういたしまして）と答えます。`,
    add: fresh(T('助けるとき'), B(10, 34, 300, `Sure, I'll help you.`, C.green, FILL.green, 30, 14), B(10, 76, 300, 'No problem.', C.green, FILL.green, 30, 14), B(10, 118, 300, `You're welcome.`, C.green, FILL.green, 30, 14), K('Thank you. への返事')),
  },
  {
    note: `まとめです。①許可は Can I 〜?。②返事は Yes, you can. / Sorry, not now.。③借りるときは Can I borrow 〜?、渡すときは Here you are.。`,
    add: fresh(B(10, 20, 300, '① 許可 ＝ Can I 〜?', C.blue, FILL.blue, 36), B(10, 68, 300, '② Yes, you can. / Sorry, not now.', C.green, FILL.green, 36), B(10, 116, 300, '③ Here you are. / Thank you.', C.red, FILL.red, 36), K('お願いと返事')),
  },
], 'お願いと返事');

// ───────── 好きなものを伝える ─────────
const u19: DiagramFigure = show([
  {
    note: `好（す）きを伝（つた）える形（かたち）は I like 〜. です。like のあとに好きなものをそのまま続（つづ）けます。日本語の「〜が好き」の「が」にあたる語は、英語にはいりません。`,
    add: fresh(T('I like 〜.'), B(10, 38, 60, 'I', C.gray, FILL.gray, 34, 16), B(76, 38, 80, 'like', C.red, FILL.red, 34, 16), B(162, 38, 148, 'soccer.', C.blue, FILL.blue, 34, 16), lb(160, 100, '「が」にあたる語はいらない', 13, C.red, 'middle', true), K('like のあとに すぐ名詞')),
  },
  {
    note: `❓好きではないときは？→ don't（do not の短縮形（たんしゅくけい））を like の前（まえ）に置（お）きます。I don't like natto.（納豆（なっとう）が好きではありません）。`,
    add: fresh(T('否定文'), B(10, 38, 60, 'I', C.gray, FILL.gray, 34, 16), B(76, 38, 76, `don't`, C.red, FILL.red, 34, 16), B(158, 38, 70, 'like', C.gray, FILL.gray, 34, 16), B(234, 38, 76, 'natto.', C.blue, FILL.blue, 34, 14), lb(114, 88, '前に置く', 12, C.red, 'middle', true), K('don\'t を like の前に')),
  },
  {
    note: `❓I not like としてはだめ？→ だめです。like のような一般動詞（いっぱんどうし）を否定（ひてい）するときは、必（かなら）ず don't（または doesn't）を使います。not だけを置いてはいけません。`,
    add: fresh(T('not だけは×'), B(20, 40, 280, 'I not like natto.', C.red, FILL.red, 36, 16), lb(160, 96, '×', 18, C.red, 'middle', true), B(20, 116, 280, `I don't like natto.`, C.green, FILL.green, 36, 16), lb(160, 172, '○', 18, C.green, 'middle', true), K('一般動詞には don\'t')),
  },
  {
    note: `❓好きかどうかをたずねるには？→ Do を文の先頭（せんとう）に出して Do you like dogs? とします。答えは Yes, I do. / No, I don't. の決まった形です。`,
    add: fresh(T('Do you like 〜?'), B(10, 34, 300, 'Do you like dogs?', C.blue, FILL.blue, 32, 15), B(10, 82, 140, 'Yes, I do.', C.green, FILL.green, 32, 14), B(170, 82, 140, `No, I don't.`, C.red, FILL.red, 32, 14), K('Do で聞いて do で答える')),
  },
  {
    note: `❓「どんな〜が好き？」は？→ What＋名詞＋do you like? を使います。What sport do you like? — I like basketball.（バスケットボールが好きです）、What food do you like? — I like pizza.`,
    add: fresh(T('What ＋ 名詞 ＋ do you like?'), B(10, 32, 300, 'What sport do you like?', C.blue, FILL.blue, 28, 13), B(60, 64, 250, 'I like basketball.', C.green, FILL.green, 28, 13), B(10, 104, 300, 'What food do you like?', C.blue, FILL.blue, 28, 13), B(60, 136, 250, 'I like pizza.', C.green, FILL.green, 28, 13), K('具体的にたずねる')),
  },
  {
    note: `❓理由（りゆう）を言いたいときは？→ because（〜だから）を使います。I like soccer because it's fun.（サッカーは楽しいので好き）、I like dogs because they are cute.（犬はかわいいので好き）。`,
    add: fresh(T('好きな理由'), B(10, 34, 300, 'I like soccer', C.blue, FILL.blue, 28, 14), B(110, 68, 100, 'because', C.red, FILL.red, 26, 13), B(10, 100, 300, `it's fun.`, C.green, FILL.green, 28, 14), B(10, 138, 300, 'I like dogs because they are cute.', C.purple, FILL.purple, 28, 12), K('because で理由をつなぐ')),
  },
  {
    note: `相手（あいて）と好みが同（おな）じだったときは Me too!（私も！）と言います。A: Do you like sports? B: Yes, I do. I like swimming. A: Me too! 会話にリズムが生（う）まれます。`,
    add: fresh(T('会話'), B(10, 32, 200, 'Do you like sports?', C.blue, FILL.blue, 28, 13), B(100, 66, 210, 'Yes, I do. I like swimming.', C.green, FILL.green, 28, 12), B(10, 100, 200, 'Me too!', C.blue, FILL.blue, 28, 14), K('同じ好みなら Me too!')),
  },
  {
    note: `まとめです。①I like 〜.（が は入れない）。②否定は I don't like 〜.。③たずねるときは Do you like 〜?。④理由は because。`,
    add: fresh(B(10, 14, 300, '① I like 〜.', C.blue, FILL.blue, 30), B(10, 52, 300, `② I don't like 〜.`, C.red, FILL.red, 30), B(10, 90, 300, '③ Do you like 〜? — Yes, I do.', C.green, FILL.green, 30), B(10, 128, 300, '④ because で理由', C.purple, FILL.purple, 30), K('好きを伝える')),
  },
], '好きを伝える');

// ───────── できることを伝える ─────────
const u20: DiagramFigure = show([
  {
    note: `できることを伝（つた）えるには、can（〜できる）を使（つか）います。I can swim.（私は泳（およ）げます）、I can play the piano.（ピアノをひけます）。can のあとは動詞（どうし）をそのままの形（原形（げんけい））で続けます。`,
    add: fresh(T('I can ＋ 動詞'), B(10, 38, 60, 'I', C.gray, FILL.gray, 34, 16), B(76, 38, 80, 'can', C.red, FILL.red, 34, 16), B(162, 38, 148, 'swim.', C.blue, FILL.blue, 34, 16), B(10, 90, 300, 'I can play the piano.', C.blue, FILL.blue, 30, 14), K('can のあとは 原形')),
  },
  {
    note: `❓He can swim. で、なぜ swims にしないの？→ can は「〜できる」という意味（いみ）を動詞に足（た）す語（助動詞（じょどうし））で、主語（しゅご）に合（あ）わせて形を変える役目は can が引（ひ）き受（う）けているからです。だからあとの動詞は原形のままです。`,
    add: fresh(T('形の変化は can が担当'), B(10, 38, 70, 'He', C.gray, FILL.gray, 34, 16), B(86, 38, 80, 'can', C.red, FILL.red, 34, 16), B(172, 38, 100, 'swim', C.green, FILL.green, 34, 16), B(40, 100, 240, 'He can swims.   ×', C.red, FILL.red, 28, 13), B(40, 136, 240, 'He can swimming.   ×', C.red, FILL.red, 28, 13), K('s も ing も つけない', C.red)),
  },
  {
    note: `できないときは I can't 〜. と言います。can't は cannot の短縮形（たんしゅくけい）で、それ自体（じたい）に打（う）ち消（け）しの意味が入っています。I can't swim.（泳げません）、I can't ski.（スキーができません）。`,
    add: fresh(T('できないとき'), B(10, 38, 60, 'I', C.gray, FILL.gray, 34, 16), B(76, 38, 90, `can't`, C.red, FILL.red, 34, 16), B(172, 38, 100, 'swim.', C.blue, FILL.blue, 34, 16), lb(160, 100, `can't ＝ cannot`, 14, C.red, 'middle', true), B(40, 120, 240, `I can't ski.`, C.blue, FILL.blue, 30, 14), K('can\'t ＝ できない')),
  },
  {
    note: `❓たずねるときは？→ can を主語（しゅご）の前（まえ）に出して Can you swim? とします。be 動詞（どうし）の疑問文（ぎもんぶん）（Are you 〜?）と同じ作り方です。`,
    add: fresh(T('can を前に出す'), B(10, 36, 140, 'You can swim.', C.gray, FILL.gray, 34, 13), ar(155, 53, 180, 53, C.red), B(184, 36, 126, 'Can you swim?', C.blue, FILL.blue, 34, 13), lb(160, 100, 'Are you 〜? と同じ作り方', 13, C.ink, 'middle', true), K('can を主語の前に')),
  },
  {
    note: `❓答えはどう言う？→ 質問に使った can をくり返して、Yes, I can. / No, I can't. と答えます。`,
    add: fresh(T('can をくり返して答える'), B(10, 34, 300, 'Can you swim?', C.blue, FILL.blue, 32, 15), B(10, 82, 140, 'Yes, I can.', C.green, FILL.green, 32, 14), B(170, 82, 140, `No, I can't.`, C.red, FILL.red, 32, 14), K('質問の can をくり返す')),
  },
  {
    note: `広（ひろ）くたずねるときは What can you do?（あなたは何ができますか）。答えは I can play soccer well.（サッカーが上手（じょうず）にできます）。well（上手に）を付けると、できる程度（ていど）も伝えられます。`,
    add: fresh(T('何ができる？'), B(10, 34, 300, 'What can you do?', C.blue, FILL.blue, 32, 15), B(10, 82, 300, 'I can play soccer well.', C.green, FILL.green, 32, 14), lb(160, 138, 'well ＝ 上手に', 13, C.ink, 'middle', true), K('くわしく伝える')),
  },
  {
    note: `友達（ともだち）を紹介（しょうかい）するときも同（おな）じです。My friend can run very fast.（友達はとても速く走れます）、He can speak English well.（彼は英語を上手に話せます）。三人称（さんにんしょう）でも can の形は変わりません。`,
    add: fresh(T('友達を紹介する'), B(10, 36, 300, 'My friend can run very fast.', C.green, FILL.green, 34, 14), B(10, 84, 300, 'He can speak English well.', C.green, FILL.green, 34, 14), lb(160, 144, 'He でも can は同じ形', 13, C.red, 'middle', true), K('can は形が変わらない')),
  },
  {
    note: `まとめです。①can のあとは原形。②できないときは can't。③たずねるときは can を前に出す。④答えは can をくり返す。`,
    add: fresh(B(10, 14, 300, '① I can ＋ 動詞の原形', C.blue, FILL.blue, 30), B(10, 52, 300, `② できないときは can't`, C.red, FILL.red, 30), B(10, 90, 300, '③ Can you 〜? — Yes, I can.', C.green, FILL.green, 30), B(10, 128, 300, '④ s も ing もつけない', C.purple, FILL.purple, 30), K('できること')),
  },
], 'できることを伝える');

// ───────── 体調を伝える表現：I have a headache. ─────────
const v01: DiagramFigure = show([
  {
    note: `❓「頭が痛い」を英語（えいご）にするとき、日本語（にほんご）と何（なに）がちがうの？→ 日本語は「頭」が主語（しゅご）ですが、英語は I（私）が主語で、have（持（も）っている）を使って症状（しょうじょう）を「持っている」と言います。I have a headache. です。`,
    add: fresh(T('発想のちがい'), B(10, 34, 140, '日本語', C.gray, FILL.gray, 26, 13), B(170, 34, 140, '英語', C.gray, FILL.gray, 26, 13), B(10, 72, 140, '頭が 痛い', C.red, FILL.red, 40, 15), B(170, 72, 140, 'I have a headache.', C.green, FILL.green, 40, 12), lb(80, 130, '主語は「頭」', 12, C.red, 'middle', true), lb(240, 130, '主語は I、症状を持つ', 12, C.green, 'middle', true), K('症状は have で「持つ」')),
  },
  {
    note: `❓headache はどんな語（ご）？→ head（頭）＋ ache（エイク：痛（いた）み）がくっついて1語になっています。つづりを覚えるときは head ＋ ache と分けて考えると混同（こんどう）しません。`,
    add: fresh(T('体の部分 ＋ ache'), B(10, 36, 90, 'head', C.blue, FILL.blue), lb(110, 49, '＋', 16, C.ink, 'middle', true), B(120, 36, 70, 'ache', C.red, FILL.red), lb(200, 49, '＝', 16, C.ink, 'middle', true), B(212, 36, 98, 'headache', C.green, FILL.green), B(10, 84, 90, 'stomach', C.blue, FILL.blue), lb(110, 97, '＋', 16, C.ink, 'middle', true), B(120, 84, 70, 'ache', C.red, FILL.red), lb(200, 97, '＝', 16, C.ink, 'middle', true), B(212, 84, 98, 'stomachache', C.green, FILL.green, 26, 11), K('ache ＝ ジーンとする痛み')),
  },
  {
    note: `痛（いた）みの言い方（いいかた）です。headache（頭痛（ずつう））・stomachache（おなかが痛い）・toothache（歯が痛い）・backache（背中やこしが痛い）。どれも I have a 〜. の形で使います。`,
    add: fresh(T('痛みの語'), ...tab([['I have a headache.', '頭が痛い'], ['I have a stomachache.', 'おなかが痛い'], ['I have a toothache.', '歯が痛い'], ['I have a backache.', '背中・こしが痛い']], 34, [170, 130], { h: 32, head: false, color: C.red, fill: FILL.red, size: 11 }), K('どれも -ache')),
  },
  {
    note: `痛（いた）み以外（いがい）の症状（しょうじょう）です。I have a fever.（熱があります）、I have a cold.（かぜをひいています）、I have a cough.（せきが出ます）、I have a runny nose.（鼻水が出ます）。cough は gh を f の音（おと）で読（よ）みます。`,
    add: fresh(T('痛み以外の症状'), ...tab([['I have a fever.', '熱があります'], ['I have a cold.', 'かぜをひいています'], ['I have a cough.', 'せきが出ます（gh は f の音）'], ['I have a runny nose.', '鼻水が出ます']], 34, [150, 150], { h: 32, head: false, color: C.blue, fill: FILL.blue, size: 11 }), K('症状の名前を have で持つ')),
  },
  {
    note: `❓a は付（つ）けなくていいの？→ 付けます。have a fever も have a cold も a が必要です。「かぜ」を a なしで have cold とは言いません。`,
    add: fresh(T('a を忘れない'), B(20, 40, 280, 'I have cold.', C.red, FILL.red, 36, 16), lb(160, 96, '×  a がない', 14, C.red, 'middle', true), B(20, 116, 280, 'I have a cold.', C.green, FILL.green, 36, 16), lb(160, 172, '○', 16, C.green, 'middle', true), K('have a ＋ 症状')),
  },
  {
    note: `❓headache を header と書（か）いてもいい？→ いけません。-er を付けるのではなく、-ache（痛み）が正しい形です。head と ache を分けて考えれば、まちがえません。`,
    add: fresh(T('-ache であって -er ではない'), B(20, 40, 130, 'header', C.red, FILL.red, 40, 18), lb(85, 96, '×', 18, C.red, 'middle', true), B(170, 40, 130, 'headache', C.green, FILL.green, 40, 18), lb(235, 96, '○', 18, C.green, 'middle', true), lb(160, 140, 'head ＋ ache', 14, C.ink, 'middle', true), K('つづりは head ＋ ache')),
  },
  {
    note: `❓日本語（にほんご）につられて My head is hurt. と言ってはだめ？→ だめです。「頭が痛い」を head を主語にして is hurt とすると、「頭がけがをさせられた」という不自然（ふしぜん）な文になります。まずは I have a headache. の型で言います。`,
    add: fresh(T('まず この型で'), B(10, 38, 300, 'My head is hurt.', C.red, FILL.red, 36, 16), lb(160, 94, '×  不自然な文', 14, C.red, 'middle', true), B(10, 114, 300, 'I have a headache.', C.green, FILL.green, 36, 16), lb(160, 170, '○', 16, C.green, 'middle', true), K('I を主語にして have')),
  },
  {
    note: `症状（しょうじょう）の名前がはっきりしないときは feel（感（かん）じる）を使います。feel のあとに形容詞（けいようし）をそのまま置（お）きます。I feel sick.（気分が悪い）、I don't feel well.（体調がよくない）、I feel tired.（疲（つか）れた）、I feel dizzy.（めまいがする）。`,
    add: fresh(T('feel ＋ 形容詞'), ...tab([['I feel sick.', '気分が悪い'], [`I don't feel well.`, '体調がよくない'], ['I feel tired.', '疲れた'], ['I feel dizzy.', 'めまいがする']], 34, [150, 150], { h: 32, head: false, color: C.purple, fill: FILL.purple, size: 11 }), K('sickly は別の意味（病弱）')),
  },
  {
    note: `会話（かいわ）の流（なが）れです。What's wrong?（どうしたの？）→ I have a stomachache. → That's too bad. You should go home and rest.（それは大変。帰って休んだほうがいいよ）→ Take care.（お大事に）。症状を聞く→答える→助言する、の順です。`,
    add: fresh(T('会話の流れ'), B(10, 32, 190, `What's wrong?`, C.blue, FILL.blue, 26, 13), B(110, 62, 200, 'I have a stomachache.', C.red, FILL.red, 26, 12), B(10, 92, 300, `That's too bad. You should go home and rest.`, C.green, FILL.green, 26, 9), B(110, 124, 200, 'Take care.', C.purple, FILL.purple, 26, 13), K('聞く → 答える → 助言する')),
  },
], '体調を伝える');

// ───────── 誕生日と年齢をたずねる・答える表現（日付の読み方） ─────────
const v02: DiagramFigure = show([
  {
    note: `❓誕生日（たんじょうび）をたずねるには？→ When is your birthday?（誕生日はいつですか）。where（どこ）とまちがえないように。答えは My birthday is May 5th.（5月5日です）のように、月→日の順で言（い）います。`,
    add: fresh(T('誕生日をたずねる'), B(10, 34, 250, 'When is your birthday?', C.blue, FILL.blue, 32, 14), B(60, 82, 250, 'My birthday is May 5th.', C.green, FILL.green, 32, 14), lb(160, 144, 'when ＝ いつ　　where ＝ どこ', 13, C.ink, 'middle', true), K('月 → 日の順')),
  },
  {
    note: `❓日付（ひづけ）はなぜ 5th のような形（かたち）なの？→「5日」ではなく「5番目（ばんめ）の日」と順番（じゅんばん）で読（よ）むからです。この形を序数（じょすう）といいます。`,
    add: fresh(T('日付は 順番で読む'), ...[1, 2, 3, 4, 5].map((i) => ci(60 + (i - 1) * 50, 70, 15, String(i), i === 5 ? C.red : C.gray, i === 5 ? FILL.red : FILL.gray, 12)), lb(298, 70, '…', 18, C.gray, 'middle', true), lb(210, 112, '5番目の日 ＝ fifth', 14, C.red, 'middle', true), lb(160, 150, 'May 5th ＝ May fifth', 15, C.green, 'middle', true), K('日付 ＝ 何番目の日')),
  },
  {
    note: `序数（じょすう）の形（かたち）、まず1・2・3は特別（とくべつ）です。1st＝first（ファースト）、2nd＝second（セカンド）、3rd＝third（サード）。`,
    add: fresh(T('1・2・3 は特別'), ...tab([['1st', 'first'], ['2nd', 'second'], ['3rd', 'third']], 40, [120, 150], { h: 36, head: false, color: C.red, fill: FILL.red, size: 15 }), K('この3つは丸ごと覚える')),
  },
  {
    note: `❓4日からは？→ ふつう th を付けます。4th＝fourth、5th＝fifth、6th＝sixth のように、数の言葉に th が付く形です。`,
    add: fresh(T('4日〜 は th'), ...tab([['4th', 'fourth'], ['5th', 'fifth'], ['6th', 'sixth']], 40, [120, 150], { h: 36, head: false, color: C.blue, fill: FILL.blue, size: 15 }), K('数 ＋ th')),
  },
  {
    note: `❓でも、つづりが変（か）わる語はないの？→ あります。5th は fifth（ve ではなく f になる）、9th は ninth（e を一つ落（お）とす）、12th は twelfth（ve が f になる）。そのまま th を付けない語に注意（ちゅうい）します。`,
    add: fresh(T('つづりが変わる序数', C.red), B(10, 36, 70, 'five', C.blue, FILL.blue), ar(84, 49, 110, 49, C.red), B(114, 36, 90, 'fifth', C.green, FILL.green), lb(214, 49, '5th', 14, C.red, 'start', true), B(10, 80, 70, 'nine', C.blue, FILL.blue), ar(84, 93, 110, 93, C.red), B(114, 80, 90, 'ninth', C.green, FILL.green), lb(214, 93, '9th（e を落とす）', 11, C.red, 'start', true), B(10, 124, 70, 'twelve', C.blue, FILL.blue), ar(84, 137, 110, 137, C.red), B(114, 124, 90, 'twelfth', C.green, FILL.green), lb(214, 137, '12th', 14, C.red, 'start', true), K('five・nine・twelve は変わる')),
  },
  {
    note: `❓21日以降（いこう）は？→ 一の位（くらい）が1・2・3のときは、また first・second・third の形にもどります。21st＝twenty-first、22nd＝twenty-second、23rd＝twenty-third。`,
    add: fresh(T('一の位が 1・2・3'), ...tab([['21st', 'twenty-first'], ['22nd', 'twenty-second'], ['23rd', 'twenty-third']], 40, [100, 190], { h: 36, head: false, color: C.purple, fill: FILL.purple, size: 14 }), K('first・second・third にもどる')),
  },
  {
    note: `月と日の順番（じゅんばん）は「月→日」です。日本語の「5月5日」と同（おな）じ感覚（かんかく）で、May 5th。特定（とくてい）の日なので、My birthday is on May 5th. と on を付けることもできます。`,
    add: fresh(T('月 → 日'), B(20, 40, 110, 'May', C.blue, FILL.blue, 40, 18), B(140, 40, 90, '5th', C.red, FILL.red, 40, 18), lb(264, 60, '月 → 日', 13, C.ink, 'middle', true), B(10, 104, 300, 'My birthday is on May 5th.', C.green, FILL.green, 32, 14), K('特定の日には on')),
  },
  {
    note: `まとめです。①誕生日は When is your birthday?。②日付は「何番目の日」なので序数。③1st〜3rd は first・second・third、4th からは th。④fifth・ninth・twelfth はつづりが変わる。`,
    add: fresh(B(10, 14, 300, '① When is your birthday?', C.blue, FILL.blue, 30), B(10, 52, 300, '② 日付は序数（何番目の日）', C.green, FILL.green, 30), B(10, 90, 300, '③ first・second・third、4th から th', C.red, FILL.red, 30), B(10, 128, 300, '④ fifth・ninth・twelfth に注意', C.purple, FILL.purple, 30), K('日付の読み方')),
  },
], '日付の読み方');

// ───────── 得意・不得意を伝える：good at / poor at ─────────
const v03: DiagramFigure = show([
  {
    note: `得意（とくい）なことは be good at 〜 で言（い）います。at は「〜の点（てん）において」という意味（いみ）の前置詞（ぜんちし）で、good at は「〜の点で上手（じょうず）だ」というイメージです。I'm good at math.（算数が得意です）。`,
    add: fresh(T('be good at ＋ 名詞'), B(10, 38, 60, `I'm`, C.gray, FILL.gray, 34, 15), B(76, 38, 110, 'good at', C.red, FILL.red, 34, 15), B(192, 38, 118, 'math.', C.blue, FILL.blue, 34, 15), B(10, 90, 300, 'She is good at soccer.', C.blue, FILL.blue, 30, 14), B(10, 128, 300, 'He is good at English.', C.blue, FILL.blue, 30, 14), K('教科・スポーツはそのまま')),
  },
  {
    note: `❓「泳ぐのが得意」のように動作（どうさ）を言うときは？→ at は前置詞（ぜんちし）なので、あとに動詞（どうし）が来るときは ing 形（動名詞（どうめいし））にします。I'm good at swimming.`,
    add: fresh(T('at のあとの動詞は ing'), B(10, 36, 140, 'swim', C.blue, FILL.blue, 36, 16), ar(155, 54, 180, 54, C.red), B(184, 36, 126, 'swimming', C.green, FILL.green, 36, 15), B(10, 92, 300, `I'm good at swimming.`, C.green, FILL.green, 34, 15), K('前置詞のあとの動詞は ing')),
  },
  {
    note: `❓ing の付け方は？→ そのまま付けるのが基本ですが、swim は m を重（かさ）ねて swimming、dance は e をとって dancing です。cook は cooking。`,
    add: fresh(T('ing の付け方'), ...tab([['もとの形', 'ing 形'], ['cook', 'cooking'], ['swim', 'swimming（m を重ねる）'], ['dance', 'dancing（e をとる）']], 34, [110, 190], { h: 32, color: C.green, fill: FILL.green, size: 12 }), K('少し形が変わる語もある')),
  },
  {
    note: `❓I'm good at swim. とはなぜ言えないの？→ 前置詞（ぜんちし）のあとの動詞（どうし）は ing 形にするきまりだからです。to swim（to＋原形）の感覚（かんかく）とまぜてしまいやすいので、be good at のときは to ではなく ing、と覚（おぼ）えます。`,
    add: fresh(T('原形のままは ×'), B(20, 38, 280, `He is good at draw.`, C.red, FILL.red, 36, 16), lb(160, 94, '×', 18, C.red, 'middle', true), B(20, 114, 280, 'He is good at drawing.', C.green, FILL.green, 36, 16), lb(160, 170, '○', 18, C.green, 'middle', true), K('good at ＋ ing')),
  },
  {
    note: `苦手（にがて）なことの言い方です。be poor at 〜、be bad at 〜、I'm not good at 〜.。poor at は少（すこ）しやわらかく、bad at ははっきり「下手」という印象（いんしょう）です。not good at は遠回（とおまわ）しでやわらかい言い方です。`,
    add: fresh(T('苦手の言い方'), ...tab([[`I'm poor at swimming.`, 'ややソフト'], [`I'm not good at math.`, 'とてもやわらかい'], [`I'm bad at drawing.`, 'はっきり下手']], 40, [190, 110], { h: 34, head: false, color: C.red, fill: FILL.red, size: 11 }), K('強さがちがう')),
  },
  {
    note: `もう一つの言い方（いいかた）。「上手な〜する人」で表（あらわ）す形です。She is a good cook.（料理が上手）、He is a good singer.（歌が上手）、They are good dancers.（ダンスが上手）。cook・singer・dancer のような「〜する人」の語を a good のあとに置（お）きます。`,
    add: fresh(T('a good ＋ 〜する人'), B(10, 34, 300, 'She is a good cook.', C.green, FILL.green, 30, 14), B(10, 72, 300, 'He is a good singer.', C.green, FILL.green, 30, 14), B(10, 110, 300, 'They are good dancers.', C.green, FILL.green, 30, 14), K('好きな人を表す名詞を使う')),
  },
  {
    note: `くらべるときは better at（〜のほうが得意）を使います。I'm better at math than science.（理科より算数のほうが得意です）。一番（いちばん）得意なら best。Who is the best at running in your class?`,
    add: fresh(T('くらべる'), B(10, 34, 300, `I'm better at math than science.`, C.blue, FILL.blue, 32, 13), lb(160, 90, 'good → better → best', 14, C.red, 'middle', true), B(10, 112, 300, 'Who is the best at running?', C.purple, FILL.purple, 32, 13), K('better は くらべるとき')),
  },
  {
    note: `まとめです。①be good at のあとは名詞か ing 形。②苦手は poor at / bad at / not good at。③上手な人は a good 〜er。④くらべるときは better at。`,
    add: fresh(B(10, 14, 300, '① good at ＋ 名詞 / ing 形', C.blue, FILL.blue, 30), B(10, 52, 300, '② poor at / bad at / not good at', C.red, FILL.red, 30), B(10, 90, 300, '③ a good singer・a good cook', C.green, FILL.green, 30), B(10, 128, 300, '④ better at 〜 than …', C.purple, FILL.purple, 30), K('得意・不得意')),
  },
], '得意と不得意');

// ───────── 好きな理由を答える：becauseとbecause of ─────────
const v04: DiagramFigure = show([
  {
    note: `❓because と because of は、どうちがうの？→ どちらも「〜のせいで・〜という理由で」の意味（いみ）ですが、あとに続（つづ）く形（かたち）がちがいます。because のあとは文、because of のあとは名詞（めいし）です。`,
    add: fresh(T('because と because of'), B(10, 38, 140, 'because', C.blue, FILL.blue, 36, 16), lb(80, 94, 'あとに「文」', 13, C.blue, 'middle', true), B(170, 38, 140, 'because of', C.red, FILL.red, 36, 16), lb(240, 94, 'あとに「名詞」', 13, C.red, 'middle', true), K('of があるかないか')),
  },
  {
    note: `because のあとは〈主語（しゅご）＋動詞（どうし）〉の文です。I stayed home because it rained.（雨が降（ふ）ったので家にいました）。it が主語、rained が動詞です。`,
    add: fresh(T('because ＋ 文'), B(10, 36, 120, 'I stayed home', C.gray, FILL.gray, 34, 12), B(136, 36, 80, 'because', C.blue, FILL.blue, 34, 13), B(222, 36, 88, 'it rained.', C.green, FILL.green, 34, 13), lb(266, 84, '主語＋動詞', 12, C.green, 'middle', true), K('文が続く')),
  },
  {
    note: `because of のあとは名詞（めいし）だけです。I stayed home because of the rain.（雨のせいで家にいました）。the rain は名詞のまとまりで、主語と動詞はありません。`,
    add: fresh(T('because of ＋ 名詞'), B(10, 36, 120, 'I stayed home', C.gray, FILL.gray, 34, 12), B(136, 36, 80, 'because of', C.red, FILL.red, 34, 12), B(222, 36, 88, 'the rain.', C.green, FILL.green, 34, 13), lb(266, 84, '名詞だけ', 12, C.green, 'middle', true), K('名詞が続く')),
  },
  {
    note: `❓次の文のどこがまちがい？→ We couldn't play soccer because the rain. because のあとに名詞（the rain）だけを置（お）いています。because のあとは文が必要（ひつよう）です。`,
    add: fresh(T('まちがい直し'), B(10, 34, 300, `We couldn't play soccer because the rain.`, C.red, FILL.red, 36, 11), lb(160, 90, '×  because のあとが名詞だけ', 13, C.red, 'middle', true), K('because には文、of には名詞')),
  },
  {
    note: `❓どう直（なお）す？→ 2通（とお）りあります。名詞を使いたいなら because of the rain。because を使いたいなら because it rained（主語＋動詞）。`,
    add: fresh(T('2通りの直し方'), B(10, 34, 300, `We couldn't play soccer because of the rain.`, C.green, FILL.green, 34, 11), B(10, 80, 300, `We couldn't play soccer because it rained.`, C.green, FILL.green, 34, 11), lb(160, 136, '名詞なら of を付ける ／ 文なら because だけ', 12, C.ink, 'middle', true), K('どちらも正しい')),
  },
  {
    note: `会話（かいわ）では、理由（りゆう）だけを答えることもできます。Why do you like summer?（なぜ夏が好き？）— Because I can swim in the sea.（海で泳げるから）。1つの文にするときは I like 〜 because …. です。`,
    add: fresh(T('Why? → Because 〜.'), B(10, 34, 250, 'Why do you like summer?', C.blue, FILL.blue, 30, 13), B(60, 78, 250, 'Because I can swim in the sea.', C.green, FILL.green, 30, 12), B(10, 124, 300, 'I like summer because I can swim in the sea.', C.purple, FILL.purple, 30, 10), K('because の前にコンマは付けない')),
  },
  {
    note: `理由（りゆう）がいくつもあるときは、順番（じゅんばん）を示（しめ）す言葉（ことば）を使います。First, 〜.（第一に）Second, 〜.（第二に）Also, 〜.（また）。文章が整理（せいり）されて読みやすくなります。`,
    add: fresh(T('理由を並べる'), B(10, 34, 300, 'First, I like soccer because it is exciting.', C.blue, FILL.blue, 28, 11), B(10, 70, 300, 'Second, I can play it with my friends.', C.blue, FILL.blue, 28, 11), B(10, 106, 300, 'Also, it is good exercise.', C.blue, FILL.blue, 28, 11), K('First → Second → Also')),
  },
  {
    note: `まとめです。①because のあとは〈主語＋動詞〉の文。②because of のあとは名詞だけ。③理由を並べるときは First / Second / Also。`,
    add: fresh(B(10, 20, 300, '① because ＋ 文（主語＋動詞）', C.blue, FILL.blue, 36), B(10, 68, 300, '② because of ＋ 名詞', C.red, FILL.red, 36), B(10, 116, 300, '③ First / Second / Also', C.green, FILL.green, 36), K('理由の言い方')),
  },
], '理由の言い方');

// ───────── 一日の日課を語る ─────────
const v05: DiagramFigure = show([
  {
    note: `昼から夕方（ゆうがた）までの日課（にっか）です。go to school（学校へ行く）→ have lunch（昼食を食べる）→ come home（家に帰る）→ do my homework（宿題をする）。`,
    add: fresh(T('昼〜夕方'), ...flow(['go to\nschool', 'have\nlunch'], 36, { h: 50, size: 11 }).flat(), ...flow(['come\nhome', 'do my\nhomework'], 110, { h: 50, size: 11 }).flat(), K('動作のかたまりを覚える')),
  },
  {
    note: `❓go home と come home はどうちがう？→ ほぼ同じですが、come home は「（話し手のいる）家に帰ってくる」という視点（してん）です。`,
    add: fresh(T('come home と go home'), B(10, 38, 140, 'go home', C.blue, FILL.blue, 36, 16), lb(80, 92, '帰る', 13, C.blue, 'middle', true), B(170, 38, 140, 'come home', C.green, FILL.green, 36, 15), lb(240, 92, '（家に）帰ってくる', 12, C.green, 'middle', true), K('ほぼ同じ意味')),
  },
  {
    note: `夜の日課（にっか）です。have dinner（夕食を食べる）→ take a bath（お風呂（ふろ）に入る）→ go to bed（寝（ね）る）。take a shower はシャワーを浴（あ）びること。`,
    add: fresh(T('夜'), ...flow(['have\ndinner', 'take a\nbath', 'go to\nbed'], 50, { h: 56, size: 11, color: C.purple, fill: FILL.purple }).flat(), K('夕食 → 入浴 → 寝る')),
  },
  {
    note: `❓一日の流（なが）れをつなげて言うには？→ 順番（じゅんばん）を示（しめ）す言葉（ことば）を使います。First（まず）→ Then（それから）→ After that（そのあと）→ Finally（最後に）。`,
    add: fresh(T('順番を示す言葉'), B(10, 32, 300, 'First, I get up at seven.', C.blue, FILL.blue, 28, 12), B(10, 66, 300, 'Then, I wash my face and have breakfast.', C.blue, FILL.blue, 28, 11), B(10, 100, 300, 'After that, I go to school.', C.blue, FILL.blue, 28, 12), B(10, 134, 300, 'Finally, I go to bed at nine.', C.blue, FILL.blue, 28, 12), K('First → Then → After that → Finally')),
  },
  {
    note: `❓「毎晩9時に寝ます」は I sleep at nine でいい？→ 日課（にっか）の「寝（ね）る」は、寝床（ねどこ）に入る動作（どうさ）の go to bed を使います。sleep は「眠（ねむ）っている」状態（じょうたい）です。`,
    add: fresh(T('寝る の言い方'), B(10, 38, 300, 'I sleep at nine every night.', C.red, FILL.red, 34, 13), lb(160, 94, '△  眠っている状態になってしまう', 12, C.red, 'middle', true), B(10, 114, 300, 'I go to bed at nine every night.', C.green, FILL.green, 34, 13), lb(160, 170, '○  日課の動作', 13, C.green, 'middle', true), K('動作は go to bed')),
  },
  {
    note: `❓では sleep はいつ使う？→ 眠（ねむ）っている状態や時間の長さを言うときです。I sleep for eight hours.（8時間眠ります）。I go to bed at nine, but I can't sleep soon.（9時に寝床に入るが、すぐには眠れない）のように、2つを区別（くべつ）する文もあります。`,
    add: fresh(T('動作 と 状態'), B(10, 36, 140, 'go to bed', C.green, FILL.green, 36, 15), lb(80, 90, '寝床に入る（動作）', 12, C.green, 'middle', true), B(170, 36, 140, 'sleep', C.blue, FILL.blue, 36, 15), lb(240, 90, '眠っている（状態）', 12, C.blue, 'middle', true), B(10, 120, 300, 'I sleep for eight hours.', C.purple, FILL.purple, 30, 13), K('go to bed ⇔ sleep')),
  },
  {
    note: `まとめです。①昼〜夜の動作のかたまりを覚える。②順番は First / Then / After that / Finally。③「寝る」は go to bed、sleep は眠っている状態。`,
    add: fresh(B(10, 20, 300, '① go to school → … → go to bed', C.blue, FILL.blue, 36, 12), B(10, 68, 300, '② First → Then → After that → Finally', C.green, FILL.green, 36, 12), B(10, 116, 300, '③ 寝る ＝ go to bed、sleep ＝ 眠る', C.red, FILL.red, 36, 12), K('日課の言い方')),
  },
], '日課の言い方');

// ───────── 週末・休日の過ごし方を伝える表現 ─────────
const freq: [string, number, string][] = [['always', 100, 'いつも'], ['usually', 80, 'たいてい'], ['often', 60, 'よく'], ['sometimes', 40, 'ときどき'], ['rarely', 10, 'めったに〜ない'], ['never', 0, '決して〜ない']];
const freqBars = (k: number): DiagramElement[] => freq.slice(0, k).flatMap(([w, p, jp], i) => [
  bx(8, 34 + i * 26, 78, 22, w, C.blue, FILL.blue, 12),
  ...(p > 0 ? [bx(92, 34 + i * 26, Math.max(p * 1.3, 8), 22, '', C.green, FILL.green)] : []),
  lb(p > 0 ? 92 + Math.max(p * 1.3, 8) + 6 : 98, 45 + i * 26, `${p}%  ${jp}`, 11, C.ink, 'start', true),
]);
const v06: DiagramFigure = show([
  {
    note: `❓週末（しゅうまつ）にすることを、くわしく伝（つた）えるには？→ どれくらいの頻度（ひんど）かを表（あらわ）す語（ご）を使います。多（おお）い順（じゅん）に always（いつも）、usually（たいてい）、often（よく）、sometimes（ときどき）、rarely（めったに〜ない）、never（決して〜ない）。`,
    add: fresh(T('どれくらいの頻度？'), ...freqBars(1), K('always ＝ いつも（100%）')),
  },
  {
    note: `usually（たいてい）は 80% くらいです。I usually play soccer with my friends.（たいてい友達とサッカーをします）。`,
    add: fresh(T('どれくらいの頻度？'), ...freqBars(2), K('usually ＝ たいてい（80%）')),
  },
  {
    note: `often（よく）は 60%、sometimes（ときどき）は 40% くらいです。数（かず）が小さくなるほど、その行動をする回数が少なくなります。`,
    add: fresh(T('どれくらいの頻度？'), ...freqBars(4), K('often 60%、sometimes 40%')),
  },
  {
    note: `rarely / seldom（めったに〜ない）は 10% くらい、never（決して〜ない）は 0% です。左から右へ、全部（ぜんぶ）を比べると、頻度の順番がはっきり分（わ）かります。`,
    add: fresh(T('どれくらいの頻度？'), ...freqBars(6), K('多い → 少ない の順に覚える')),
  },
  {
    note: `❓この語（ご）は文のどこに置（お）くの？→ 一般動詞（いっぱんどうし）の前、be動詞（どうし）のあとです。I usually play video games on Saturdays.（play の前）。I'm always busy on Sundays.（am のあと）。`,
    add: fresh(T('置く場所'), B(10, 34, 60, 'I', C.gray, FILL.gray, 30, 14), B(76, 34, 90, 'usually', C.red, FILL.red, 30, 13), B(172, 34, 138, 'play games.', C.blue, FILL.blue, 30, 12), lb(160, 82, '一般動詞の前', 12, C.red, 'middle', true), B(10, 108, 60, `I'm`, C.gray, FILL.gray, 30, 14), B(76, 108, 90, 'always', C.red, FILL.red, 30, 13), B(172, 108, 138, 'busy.', C.blue, FILL.blue, 30, 12), lb(160, 156, 'be動詞のあと', 12, C.red, 'middle', true), K('動詞の前 / be動詞のあと')),
  },
  {
    note: `週末（しゅうまつ）の過ごし方は What do you do on weekends? とたずねます。習慣（しゅうかん）をたずねる一般動詞（いっぱんどうし）の疑問文（ぎもんぶん）で、「週末に」は on weekends。曜日と同（おな）じように on を使います。`,
    add: fresh(T('週末の過ごし方'), B(10, 34, 300, 'What do you do on weekends?', C.blue, FILL.blue, 32, 14), B(10, 82, 300, 'I often go shopping with my family.', C.green, FILL.green, 32, 12), lb(160, 138, 'in weekends / at weekends とは言わない', 12, C.red, 'middle', true), K('on weekends')),
  },
  {
    note: `❓終わった週末をたずねるには？→ 過去形（かこけい）で How was your weekend? と聞（き）きます。It was great. I went to the beach with my family.（最高でした。家族と海に行きました）。It was so-so.（まあまあでした）。`,
    add: fresh(T('終わった週末'), B(10, 34, 250, 'How was your weekend?', C.blue, FILL.blue, 30, 13), B(60, 76, 250, 'It was great.', C.green, FILL.green, 28, 13), B(10, 112, 300, 'I went to the beach with my family.', C.green, FILL.green, 28, 11), B(60, 148, 250, 'It was so-so.', C.purple, FILL.purple, 28, 13), K('過去形で聞く')),
  },
  {
    note: `❓読解（どっかい）では、何（なに）に気（き）をつける？→「ふだんの週末（現在形（げんざいけい））」と「先週末（過去形）」が切（き）りかわることがあります。習慣の話か、過去の1回だけの話か、動詞（どうし）の形で見分けます。`,
    add: fresh(T('習慣 か 過去 か'), B(10, 38, 140, 'play / go（現在形）', C.blue, FILL.blue, 40, 12), lb(80, 96, 'ふだんの習慣', 13, C.blue, 'middle', true), B(170, 38, 140, 'played / went（過去形）', C.red, FILL.red, 40, 11), lb(240, 96, '過去の1回', 13, C.red, 'middle', true), K('動詞の形で見分ける')),
  },
], '頻度を表す語');

// ───────── 天気予報を読み取る英文読解 ─────────
const v07: DiagramFigure = show([
  {
    note: `❓天気予報（てんきよほう）の英文では、なぜ will を使（つか）うの？→ 予報は「これから先どうなるか」の予測（よそく）だからです。未来（みらい）のことには will（〜だろう）を使います。It will be sunny tomorrow.（明日は晴れるでしょう）。`,
    add: fresh(T('予報は 未来 → will'), B(10, 36, 140, 'now', C.gray, FILL.gray, 26), B(170, 36, 140, 'tomorrow', C.gray, FILL.gray, 26), B(10, 72, 140, 'It is sunny.', C.blue, FILL.blue, 34, 14), B(170, 72, 140, 'It will be sunny.', C.green, FILL.green, 34, 12), lb(160, 130, 'will ＋ be ＋ 天気', 14, C.green, 'middle', true), K('これから先は will')),
  },
  {
    note: `動詞（どうし）を使う形もあります。It will rain this afternoon.（今日の午後は雨が降（ふ）るでしょう）。be を使うか動詞を使うかで形が少しちがうだけで、will は同（おな）じです。`,
    add: fresh(T('will のあと'), B(10, 38, 300, 'It will be rainy this afternoon.', C.green, FILL.green, 32, 13), B(10, 86, 300, 'It will rain this afternoon.', C.green, FILL.green, 32, 13), K('どちらも「雨でしょう」')),
  },
  {
    note: `否定（ひてい）とたずね方です。It won't be cold tomorrow.（明日は寒くならないでしょう）。won't は will not の短縮形（たんしゅくけい）。Will it be sunny this weekend? — Yes, it will. / No, it won't.`,
    add: fresh(T('否定とたずね方'), B(10, 34, 300, `It won't be cold tomorrow.`, C.red, FILL.red, 30, 13), lb(160, 82, `won't ＝ will not`, 13, C.red, 'middle', true), B(10, 100, 300, 'Will it be sunny this weekend?', C.blue, FILL.blue, 30, 13), B(10, 142, 140, 'Yes, it will.', C.green, FILL.green, 28, 13), B(170, 142, 140, `No, it won't.`, C.red, FILL.red, 28, 13), K('will を前に出してたずねる')),
  },
  {
    note: `天気予報のあとには、助言（じょげん）が続（つづ）きます。You should bring an umbrella.（傘（かさ）を持って行ったほうがいい）、Don't forget your umbrella.（傘を忘れないでね）、You'd better wear a warm coat.（あたたかいコートを着たほうがいい）。`,
    add: fresh(T('助言'), B(10, 34, 300, 'You should bring an umbrella.', C.blue, FILL.blue, 30, 13), B(10, 74, 300, `Don't forget your umbrella.`, C.blue, FILL.blue, 30, 13), B(10, 114, 300, `You'd better wear a warm coat.`, C.blue, FILL.blue, 30, 13), K('should / had better')),
  },
  {
    note: `❓天気によって行動が変（か）わる文は？→ if（もし〜なら）を使います。If it rains tomorrow, we will stay home.（もし明日雨が降ったら、家にいます）。If it is sunny, we will go on a picnic.（晴れたらピクニックに行きます）。`,
    add: fresh(T('if ＝ もし〜なら'), B(10, 34, 140, 'If it rains', C.red, FILL.red, 34, 14), lb(160, 51, ',', 16), B(170, 34, 140, 'we will stay home.', C.green, FILL.green, 34, 12), lb(80, 90, '条件', 12, C.red, 'middle', true), lb(240, 90, '結果', 12, C.green, 'middle', true), B(10, 112, 300, 'If it is sunny, we will go on a picnic.', C.blue, FILL.blue, 30, 11), K('もし〜なら、…する')),
  },
  {
    note: `❓if のあとの動詞（どうし）は、未来（みらい）のことでも will を使う？→ 使いません。if のあとの文は、未来のことでも現在形（げんざいけい）で書きます。if it rains が正しく、if it will rain は×です。中学受験でよくねらわれます。`,
    add: fresh(T('if のあとは 現在形'), B(10, 38, 300, 'If it will rain tomorrow, …', C.red, FILL.red, 36, 14), lb(160, 94, '×', 18, C.red, 'middle', true), B(10, 114, 300, 'If it rains tomorrow, …', C.green, FILL.green, 36, 14), lb(160, 170, '○', 18, C.green, 'middle', true), K('if のあとは will を使わない')),
  },
  {
    note: `❓読解（どっかい）問題（もんだい）のコツは？→ ①天気の種類、②気温、③そのあとの人物の行動、の3つを順番（じゅんばん）に結（むす）びつけて読み取（と）ります。気温は It will be 25 degrees.（25度でしょう）のように degrees（度）で表します。`,
    add: fresh(T('3つを結びつける'), ...flow(['① 天気', '② 気温', '③ 行動'], 44, { h: 46, size: 13 }).flat(), B(10, 112, 300, 'It will be 25 degrees.', C.purple, FILL.purple, 30, 13), K('天気 → 気温 → 行動')),
  },
  {
    note: `まとめです。①予報は未来なので will。②助言は should / had better。③if のあとは未来のことでも現在形。④天気・気温・行動を結びつけて読む。`,
    add: fresh(B(10, 14, 300, '① 予報は will', C.blue, FILL.blue, 30), B(10, 52, 300, '② should / had better で助言', C.green, FILL.green, 30), B(10, 90, 300, '③ if のあとは現在形', C.red, FILL.red, 30), B(10, 128, 300, '④ 天気 → 気温 → 行動', C.purple, FILL.purple, 30), K('天気予報の読み方')),
  },
], '天気予報の読み方');

// ───────── 手紙・メールの書き出しと結びの言い方 ─────────
const paper = (): DiagramElement[] => [bx(30, 14, 260, 180, undefined, C.gray, '#FFFFFF')];
const v08: DiagramFigure = show([
  {
    note: `英語（えいご）の手紙（てがみ）には決（き）まった型（かた）があります。まず書き出し（あいさつ）。Dear ＋ 相手の名前（なまえ）, で始（はじ）めます。Dear Emily,（エミリーへ）、Dear Grandma,（おばあちゃんへ）。Dear は「親愛なる」ですが、あいさつとして機械的（きかいてき）に使います。`,
    add: fresh(...paper(), lb(46, 34, 'Dear Emily,', 14, C.blue, 'start', true), K('書き出しは Dear 〜,')),
  },
  {
    note: `❓Dear のあとの記号（きごう）は？→ コンマ（,）です。ピリオド（.）ではありません。Dear Emily, のようにコンマを付（つ）けて次の行（ぎょう）から本文（ほんぶん）を書きます。`,
    add: [...paper(), lb(46, 34, 'Dear Emily,', 14, C.blue, 'start', true), lb(131, 52, '↑ コンマ（,）', 11, C.red, 'middle', true), ...cap('Dear の後ろは コンマ（ピリオドではない）', C.red)],
  },
  {
    note: `本文（ほんぶん）の最初（さいしょ）には決まった言い回しがよく使われます。Thank you for your letter.（お手紙をありがとう）、How are you?（お元気ですか）、I hope you are doing well.（元気にしていることを願（ねが）っています）。`,
    add: [...paper(), lb(46, 34, 'Dear Emily,', 14, C.blue, 'start', true), lb(46, 66, 'Thank you for your letter.', 12, C.green, 'start', true), lb(46, 86, 'How are you?', 12, C.green, 'start', true), ...cap('本文の最初の決まり文句', C.green)],
  },
  {
    note: `用件（ようけん）を切（き）り出す言い方もあります。I'm writing to tell you about my school trip.（学校の旅行についてお伝えするために書いています）。「あいさつ → 用件 → むすび」が手紙の流れです。`,
    add: [...paper(), lb(46, 34, 'Dear Emily,', 14, C.blue, 'start', true), lb(46, 66, 'Thank you for your letter.', 12, C.green, 'start', true), lb(46, 86, 'How are you?', 12, C.green, 'start', true), lb(46, 112, `I'm writing to tell you`, 12, C.purple, 'start', true), lb(46, 130, 'about my school trip.', 12, C.purple, 'start', true), ...cap('あいさつ → 用件 → むすび', C.purple)],
  },
  {
    note: `❓最後はどう終（お）わるの？→ 結（むす）びの言葉（ことば）（クロージング）を書き、コンマを付け、次の行に自分の名前を書きます。Your friend, と書いて、次の行に Kenta。`,
    add: [...paper(), lb(46, 34, 'Dear Emily,', 14, C.blue, 'start', true), lb(46, 66, 'Thank you for your letter.', 12, C.green, 'start', true), lb(46, 86, 'How are you?', 12, C.green, 'start', true), lb(46, 112, `I'm writing to tell you`, 12, C.purple, 'start', true), lb(46, 130, 'about my school trip.', 12, C.purple, 'start', true), lb(180, 160, 'Your friend,', 13, C.red, 'start', true), lb(180, 180, 'Kenta', 13, C.red, 'start', true), ...cap('むすび, ＋ 次の行に名前', C.red)],
  },
  {
    note: `結びの言葉（ことば）のいろいろです。Your friend,（あなたの友達より）はカジュアル、Best wishes,（幸運を祈（いの）って）・Best regards,（よろしくお願いします）は少していねい、See you soon,（また近いうちに）、Love,（愛をこめて）は家族や親しい人へ。`,
    add: fresh(T('結びの言葉'), ...tab([['Your friend,', '友達へ（カジュアル）'], ['Best wishes,', '少していねい'], ['See you soon,', 'また近いうちに'], ['Love,', '家族・親しい人へ']], 34, [130, 170], { h: 32, head: false, color: C.red, fill: FILL.red, size: 12 }), K('あとにコンマ ＋ 名前')),
  },
  {
    note: `❓メールは手紙とどうちがう？→ 流（なが）れは同（おな）じですが、書き出しがもっとくだけます。Hi Emily,（やあ、エミリー）、Hello everyone,（みなさん、こんにちは）。Dear より気軽（きがる）です。`,
    add: fresh(T('メールの書き出し'), B(10, 34, 140, 'Dear Emily,', C.blue, FILL.blue, 34, 14), lb(80, 84, '手紙', 13, C.blue, 'middle', true), B(170, 34, 140, 'Hi Emily,', C.green, FILL.green, 34, 14), lb(240, 84, 'メール（気軽）', 13, C.green, 'middle', true), B(10, 112, 300, 'Hello everyone,', C.purple, FILL.purple, 30, 14), K('あいさつと結びの型は同じ')),
  },
  {
    note: `❓読解問題（どっかいもんだい）では最初に何を見る？→ ①だれからだれへか（Dear のあとと、結びのあとの名前）、②いつ書かれたか、③用件は何か、の3点です。「だれが書いたか」は結びの名前で確（たし）かめます。`,
    add: fresh(T('最初に見る3つ'), B(10, 34, 300, '① だれから だれへ（Dear 〜 と 結びの名前）', C.blue, FILL.blue, 32, 11), B(10, 76, 300, '② いつ書かれたか', C.green, FILL.green, 32, 13), B(10, 118, 300, '③ 用件は何か', C.red, FILL.red, 32, 13), K('結びの名前も必ず見る')),
  },
], '手紙の書き方');

// ───────── 感情を表す形容詞 ─────────
const v09: DiagramFigure = show([
  {
    note: `❓interested と interesting は、形（かたち）がにているけれど意味（いみ）は同（おな）じ？→ ちがいます。-ed 形と -ing 形は使（つか）う相手（あいて）が正反対（せいはんたい）です。まず -ed 形から。`,
    add: fresh(T('似た形 2つ'), B(10, 38, 140, 'interested', C.blue, FILL.blue, 40, 16), B(170, 38, 140, 'interesting', C.red, FILL.red, 40, 16), lb(80, 100, '-ed 形', 14, C.blue, 'middle', true), lb(240, 100, '-ing 形', 14, C.red, 'middle', true), K('使う相手がちがう')),
  },
  {
    note: `-ed 形は「（人が）〜と感じる」です。主語（しゅご）は人や動物（どうぶつ）。I'm interested in soccer.（私はサッカーに興味（きょうみ）がある）、I was bored during the class.（授業のあいだ退屈（たいくつ）していた）。`,
    add: fresh(T('-ed ＝ 人が感じる'), ci(60, 70, 22, '人', C.blue, FILL.blue, 14), ar(86, 70, 130, 70, C.blue), lb(190, 70, '感じる', 14, C.blue, 'middle', true), B(10, 112, 300, `I'm interested in soccer.`, C.blue, FILL.blue, 30, 13), B(10, 150, 300, 'I was bored during the class.', C.blue, FILL.blue, 30, 12), K('主語は 人')),
  },
  {
    note: `-ing 形は「（ものごとが）〜という感情（かんじょう）を人に起こさせる」です。主語は物（もの）・こと。Soccer is interesting.（サッカーはおもしろい）、The class was boring.（その授業は退屈だった）。`,
    add: fresh(T('-ing ＝ ものが起こさせる'), ci(60, 70, 22, '物', C.red, FILL.red, 14), ar(86, 70, 130, 70, C.red), lb(190, 70, '感じさせる', 14, C.red, 'middle', true), B(10, 112, 300, 'Soccer is interesting.', C.red, FILL.red, 30, 13), B(10, 150, 300, 'The class was boring.', C.red, FILL.red, 30, 13), K('主語は 物・こと')),
  },
  {
    note: `❓どう見分ける？→ 主語を見ます。主語が人なら -ed 形、主語が物・こと（映画（えいが）・授業・試合）なら -ing 形です。迷（まよ）ったら主語に印（しるし）をつけます。`,
    add: fresh(T('主語で見分ける'), B(10, 36, 140, '主語が 人', C.blue, FILL.blue, 36, 15), B(170, 36, 140, '主語が 物・こと', C.red, FILL.red, 36, 15), ar(80, 76, 80, 100, C.blue), ar(240, 76, 240, 100, C.red), B(10, 104, 140, '-ed 形', C.blue, FILL.blue, 36, 16), B(170, 104, 140, '-ing 形', C.red, FILL.red, 36, 16), K('主語を見る')),
  },
  {
    note: `ペアの語です。excited / exciting、bored / boring、surprised / surprising、tired / tiring、interested / interesting。左が人の気持ち、右がものごとの性質です。`,
    add: fresh(T('ペアで覚える'), ...tab([['人（-ed）', '物・こと（-ing）'], ['excited', 'exciting'], ['bored', 'boring'], ['surprised', 'surprising'], ['tired', 'tiring']], 34, [130, 150], { h: 28, color: C.green, fill: FILL.green }), K('2つで1セット')),
  },
  {
    note: `❓I'm boring. と言うとどうなる？→「私は人を退屈（たいくつ）させる人間だ」という意味になり、失礼（しつれい）な文になります。「退屈している」は I'm bored. が正解です。`,
    add: fresh(T('boring と bored'), B(10, 38, 300, `I'm boring.`, C.red, FILL.red, 36, 16), lb(160, 94, '×  私は つまらない人間', 13, C.red, 'middle', true), B(10, 114, 300, `I'm bored.`, C.green, FILL.green, 36, 16), lb(160, 170, '○  私は 退屈している', 13, C.green, 'middle', true), K('主語は I（人）→ bored')),
  },
  {
    note: `❓「私はその話に興味（きょうみ）があります」は？→ I'm interested in the story. です。I'm interesting in the story. は×。逆に、その話が主語なら The story is interesting.（その話はおもしろい）と -ing 形です。`,
    add: fresh(T('興味がある'), B(10, 34, 300, `I'm interesting in the story.`, C.red, FILL.red, 32, 13), lb(160, 82, '×', 16, C.red, 'middle', true), B(10, 98, 300, `I'm interested in the story.`, C.green, FILL.green, 32, 13), B(10, 138, 300, 'The story is interesting.', C.green, FILL.green, 32, 13), K('人 → interested、話 → interesting')),
  },
  {
    note: `まとめです。①-ed 形は人の気持ち。②-ing 形は物・こと。③迷ったら主語が人か物かを見る。④I'm bored. と I'm boring. は正反対。`,
    add: fresh(B(10, 14, 300, '① -ed 形 ＝ 人が感じる', C.blue, FILL.blue, 30), B(10, 52, 300, '② -ing 形 ＝ 物・ことの性質', C.red, FILL.red, 30), B(10, 90, 300, '③ 主語を見て選ぶ', C.green, FILL.green, 30), B(10, 128, 300, `④ I'm bored. ≠ I'm boring.`, C.purple, FILL.purple, 30), K('感情の -ed と -ing')),
  },
], '-ed と -ing');

// ───────── さそいを受ける・断る表現 ─────────
const v10: DiagramFigure = show([
  {
    note: `❓さそいを断（ことわ）るとき、いきなり No. だけではだめ？→ そっけない印象（いんしょう）を与（あた）えてしまいます。英語（えいご）では「残念な気持ちを伝える → 断る → 理由を言う」の順番が自然（しぜん）でていねいです。`,
    add: fresh(T('断るときの順番'), ...flow(['① 気持ち', '② 断る', '③ 理由'], 44, { h: 46, size: 13 }).flat(), B(10, 110, 300, 'No.', C.red, FILL.red, 30, 16), lb(160, 160, '← これだけだとそっけない', 13, C.red, 'middle', true), K('気持ち → 断る → 理由')),
  },
  {
    note: `断る言い方（いいかた）です。Sorry, I can't.（ごめんなさい、できません）。I'd love to, but I can't.（ぜひそうしたいのですが、できません）。I'd love to は、さそいを受けたい気持ちを表（あらわ）す前置きです。`,
    add: fresh(T('断る言い方'), B(10, 34, 300, `Sorry, I can't.`, C.red, FILL.red, 32, 15), B(10, 80, 300, `I'd love to, but I can't.`, C.red, FILL.red, 32, 15), B(10, 126, 300, `I'm sorry, but I have other plans.`, C.red, FILL.red, 32, 12), K('まず気持ちを伝える')),
  },
  {
    note: `理由（りゆう）の言い方です。I have to study for a test.（テストのために勉強しなければなりません）、I'm busy today.（今日は忙（いそが）しいです）、I already have plans.（すでに予定があります）。have to は「〜しなければならない」です。`,
    add: fresh(T('理由をそえる'), B(10, 34, 300, 'I have to study for a test.', C.blue, FILL.blue, 30, 13), B(10, 72, 300, `I'm busy today.`, C.blue, FILL.blue, 30, 13), B(10, 110, 300, 'I already have plans.', C.blue, FILL.blue, 30, 13), K('理由で ていねいに')),
  },
  {
    note: `❓今回は断るけれど、また誘（さそ）ってほしいときは？→ Maybe next time.（また今度にしましょう）を付けます。今回は断るが、今後は受けたい、という気持ちが伝わります。`,
    add: fresh(T('また今度'), B(10, 38, 300, `I'd love to, but I can't.`, C.red, FILL.red, 30, 13), B(10, 82, 300, 'Maybe next time.', C.green, FILL.green, 34, 15), lb(160, 138, '今後は受けたい気持ち', 13, C.green, 'middle', true), K('Maybe next time.')),
  },
  {
    note: `会話（かいわ）の例（れい）です。A: Let's play basketball after school.（放課後バスケをしましょう）B: I'd love to, but I can't. I have to help my mom today.（ぜひしたいけど、今日は母を手伝わないといけなくて）A: OK, maybe next time.（わかった、また今度ね）。`,
    add: fresh(T('会話'), B(10, 32, 300, `Let's play basketball after school.`, C.blue, FILL.blue, 26, 12), B(10, 64, 300, `I'd love to, but I can't.`, C.red, FILL.red, 26, 13), B(10, 96, 300, 'I have to help my mom today.', C.red, FILL.red, 26, 12), B(10, 128, 300, 'OK, maybe next time.', C.green, FILL.green, 26, 13), K('さそい → 断る → 理由 → 返事')),
  },
  {
    note: `さそいを受けるときの返事（へんじ）です。Yes, let's.（はい、そうしましょう）は Let's 〜. の文に使う決まった受け方。ほかに Sure. / OK. / Sounds good.（いいですね）、I'd love to!（ぜひ！）。`,
    add: fresh(T('受けるとき'), B(10, 34, 300, `Yes, let's.`, C.green, FILL.green, 30, 14), B(10, 72, 300, 'Sure.   OK.   Sounds good.', C.green, FILL.green, 30, 14), B(10, 110, 300, `I'd love to!`, C.green, FILL.green, 30, 14), K('Let\'s ～. には Yes, let\'s.')),
  },
  {
    note: `さそいの文のいろいろです。Let's play soccer.（サッカーをしましょう）、Why don't we go to the park?（公園に行きませんか）、Shall we go shopping?（買い物に行きましょうか）、Would you like to join us?（私たちに加わりませんか）は丁寧（ていねい）です。`,
    add: fresh(T('さそいの文'), B(10, 32, 300, `Let's play soccer.`, C.blue, FILL.blue, 28, 13), B(10, 66, 300, `Why don't we go to the park?`, C.blue, FILL.blue, 28, 13), B(10, 100, 300, 'Shall we go shopping?', C.blue, FILL.blue, 28, 13), B(10, 134, 300, 'Would you like to join us?   （ていねい）', C.purple, FILL.purple, 28, 12), K('さそいの形')),
  },
  {
    note: `まとめです。①断るときは気持ち → 断る → 理由。②Maybe next time. で今後の気持ちを伝える。③受けるときは Yes, let's. / Sure. / I'd love to!。`,
    add: fresh(B(10, 20, 300, '① 気持ち → 断る → 理由', C.red, FILL.red, 36), B(10, 68, 300, '② Maybe next time.', C.green, FILL.green, 36), B(10, 116, 300, `③ Yes, let's. / Sure. / I'd love to!`, C.blue, FILL.blue, 36), K('さそいの返事')),
  },
], 'さそいの返事');
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
  'xf_new20_e4_eigo_16': u16,
  'xf_new20_e4_eigo_17': u17,
  'xf_new20_e4_eigo_18': u18,
  'xf_new20_e4_eigo_19': u19,
  'xf_new20_e4_eigo_20': u20,
  'xf_new20_e5_eigo_01': v01,
  'xf_new20_e5_eigo_02': v02,
  'xf_new20_e5_eigo_03': v03,
  'xf_new20_e5_eigo_04': v04,
  'xf_new20_e5_eigo_05': v05,
  'xf_new20_e5_eigo_06': v06,
  'xf_new20_e5_eigo_07': v07,
  'xf_new20_e5_eigo_08': v08,
  'xf_new20_e5_eigo_09': v09,
  'xf_new20_e5_eigo_10': v10,
};

export const XF_CEK_SECTIONS: Record<string, string> = {
  'new20_e4_eigo_01#1': 'xf_new20_e4_eigo_01',
  'new20_e4_eigo_02#1': 'xf_new20_e4_eigo_02',
  'new20_e4_eigo_03#3': 'xf_new20_e4_eigo_03',
  'new20_e4_eigo_04#3': 'xf_new20_e4_eigo_04',
  'new20_e4_eigo_05#1': 'xf_new20_e4_eigo_05',
  'new20_e4_eigo_06#1': 'xf_new20_e4_eigo_06',
  'new20_e4_eigo_07#1': 'xf_new20_e4_eigo_07',
  'new20_e4_eigo_08#3': 'xf_new20_e4_eigo_08',
  'new20_e4_eigo_09#1': 'xf_new20_e4_eigo_09',
  'new20_e4_eigo_10#3': 'xf_new20_e4_eigo_10',
  'new20_e4_eigo_11#3': 'xf_new20_e4_eigo_11',
  'new20_e4_eigo_12#1': 'xf_new20_e4_eigo_12',
  'new20_e4_eigo_13#0': 'xf_new20_e4_eigo_13',
  'new20_e4_eigo_14#3': 'xf_new20_e4_eigo_14',
  'new20_e4_eigo_15#1': 'xf_new20_e4_eigo_15',
  'new20_e4_eigo_16#3': 'xf_new20_e4_eigo_16',
  'new20_e4_eigo_17#0': 'xf_new20_e4_eigo_17',
  'new20_e4_eigo_18#1': 'xf_new20_e4_eigo_18',
  'new20_e4_eigo_19#1': 'xf_new20_e4_eigo_19',
  'new20_e4_eigo_20#3': 'xf_new20_e4_eigo_20',
  'new20_e5_eigo_01#0': 'xf_new20_e5_eigo_01',
  'new20_e5_eigo_02#1': 'xf_new20_e5_eigo_02',
  'new20_e5_eigo_03#0': 'xf_new20_e5_eigo_03',
  'new20_e5_eigo_04#1': 'xf_new20_e5_eigo_04',
  'new20_e5_eigo_05#1': 'xf_new20_e5_eigo_05',
  'new20_e5_eigo_06#1': 'xf_new20_e5_eigo_06',
  'new20_e5_eigo_07#1': 'xf_new20_e5_eigo_07',
  'new20_e5_eigo_08#0': 'xf_new20_e5_eigo_08',
  'new20_e5_eigo_09#1': 'xf_new20_e5_eigo_09',
  'new20_e5_eigo_10#1': 'xf_new20_e5_eigo_10',
};
