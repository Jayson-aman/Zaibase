// 高校受験 英語（長文読解・会話文・定型表現・空所補充・リスニング 30 単元）の「動く図解スライド」。
// 「なぜ？」の連鎖で、7枚以上。単元の節（section）ごとに 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, fresh, cover, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 文の部品の色：S 主語（青）／V 動詞（赤）／O 目的語など（緑）／M 説明（灰）／X 主語になれない・まちがい（黄）／P 紫／N 茶
const K: Record<string, Col> = { S: BLUE, V: RED, O: GREEN, M: GRAY, X: YELLOW, P: PURPLE, N: MAIN };

const units = (t: string) => [...t].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);

// 語（かたまり）を小さな箱にして横に並べる。はみ出したら次の行へ。
const chips = (items: [string, string][], x0: number, y0: number, o?: { size?: number; h?: number; gap?: number; maxX?: number }): DiagramElement[] => {
  const size = o?.size ?? 11;
  const h = o?.h ?? 22;
  const gap = o?.gap ?? 4;
  const maxX = o?.maxX ?? 312;
  let x = x0;
  let y = y0;
  const out: DiagramElement[] = [];
  for (const [t, k] of items) {
    const w = Math.max(18, Math.ceil(units(t) * size * 0.92 + 9));
    if (x + w > maxX && x > x0) {
      x = x0;
      y += h + gap;
    }
    const c = K[k] ?? GRAY;
    out.push(bx(x, y, w, h, t, c[0], c[1], size));
    x += w + gap;
  }
  return out;
};

const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  return bx(14, 162, 292, 14 + 15 * n, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const FS = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});
// 前のスライドの図を残したまま、下の帯だけ書きかえる
const AS = (note: string, add: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: [cover(0, 160, 320, 80), ...add, cap(capText, c, size)],
});

// 「なぜ？」の問い → 答え、の1組
const qa = (q: string, a: string, c: Col = BLUE, aSize = 13): DiagramElement[] => [
  bx(12, 8, 296, 40, '❓ ' + q, PURPLE[0], PURPLE[1], 12),
  ar(160, 50, 160, 66, PURPLE[0]),
  bx(12, 68, 296, 76, a, c[0], c[1], aSize),
];

// 上の見出し
const hd = (t: string, size = 13, color: string = C.ink): DiagramElement => lb(160, 16, t, size, color, 'middle', true);

// 色の凡例
const leg = (y: number): DiagramElement[] =>
  chips([['S 主語', 'S'], ['V 動詞', 'V'], ['O など', 'O'], ['説明', 'M']], 60, y, { size: 10, h: 18 });

// 横一列の箱（矢印つき）
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44, gap = 14): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap }).flat();

// 2列×n行の箱
const grid = (cells: [string, Col][], y0: number, h = 34, size = 11, cols = 2): DiagramElement[] => {
  const w = (304 - 8 * (cols - 1)) / cols;
  return cells.map(([t, c], i) => bx(8 + (i % cols) * (w + 8), y0 + Math.floor(i / cols) * (h + 6), w, h, t, c[0], c[1], size));
};

const XF: Record<string, DiagramFigure> = {};

// ── s340 主語と動詞①：文の骨組み ──
XF['xf_koko_eigo_s340'] = show([
  FS('どんな英文にも骨組みがあります。それは「S（主語：だれが）＋V（動詞：どうする）」の一組です。Mr. Green teaches science at our school. では、S は Mr. Green、V は teaches。science at our school は肉付けです。',
    [hd('どんな英文にも「骨」がある'), ...chips([['Mr. Green', 'S'], ['teaches', 'V'], ['science at our school.', 'M']], 8, 40, { size: 12, h: 30 }), lb(160, 92, '「だれが」「どうする」の一組が骨', 12, C.gray), ...leg(112)],
    '文の骨組み ＝ S（だれが）＋ V（どうする）', BLUE),
  FS('では、なぜ先に S と V を探すのでしょうか。それは、ほかの語（場所・時・説明）がすべて S か V にくっついた肉付けだからです。骨が見つかれば「だれが何をした」が言えて、あとから肉を足せば意味が完成します。',
    qa('先に S と V を探すのはなぜ？', 'ほかの語（場所・時・説明）は\nぜんぶ S か V にくっつく肉付け。\n骨がわかれば「だれが何をした」が言える。\n肉は、あとから足せばよい。', BLUE, 13),
    '骨 → 肉の順に読むと、迷わない', PURPLE),
  FS('主語の見つけ方は「前置詞のついていない最初の名詞」です。In his class, students must ask at least one question every week. では In his class は前置詞 In で始まるかたまりなので主語ではなく、S は students、V は must ask です。',
    [hd('In で始まるかたまりは主語ではない'), ...chips([['In his class,', 'X'], ['students', 'S'], ['must ask', 'V'], ['at least one question every week.', 'M']], 8, 36, { size: 11, h: 24 }), lb(60, 98, '✕ 前置詞のかたまり', 11, C.main), ...leg(116)],
    'S ＝ 前置詞がつかない最初の名詞', BLUE),
  FS('では、なぜ前置詞の後ろの名詞は主語になれないのでしょうか。in the back row（後ろの列で）は「どこで」を表す一つの説明のかたまりで、row はその一部にすぎないからです。a quiet girl in the back row raised her hand の主語は a quiet girl です。',
    [hd('前置詞のあとの名詞は、説明の一部'), ...chips([['a quiet girl', 'S'], ['in the back row', 'X'], ['raised', 'V'], ['her hand.', 'O']], 8, 36, { size: 11, h: 26 }), ar(150, 98, 150, 70, C.main), lb(150, 112, 'row は「どこで」の説明の一部', 12, C.main, 'middle', true)],
    '主語は a quiet girl（row ではない）', YELLOW),
  FS('動詞になれない形もあります。to speak（to 不定詞）、speaking（-ing 形）、spoken（過去分詞）は、単独では文の動詞（V）にならないのです。he began to draw pictures では V は began で、to draw は V ではありません。',
    [hd('V になれない形', 13), ...chips([['to speak', 'X'], ['speaking', 'X'], ['spoken', 'X']], 24, 34, { size: 12, h: 26 }), lb(160, 76, 'どれも単独では V にならない', 12, C.main, 'middle', true), ...chips([['he', 'S'], ['began', 'V'], ['to draw pictures', 'M']], 40, 100, { size: 12, h: 26 }), lb(160, 140, 'V は began ／ to draw は V ではない', 12, C.gray)],
    'to 不定詞・-ing・過去分詞だけでは V にならない', YELLOW),
  FS('なぜ began は V で、to draw は V になれないのでしょうか。V は主語や時によって形が変わる語（teaches・came・used など）だからです。to draw は、時が変わっても形が変わらないので、動詞の役目はしません。',
    qa('began は V で to draw は V ではない？', 'V は時によって形が変わる語。\nteaches → taught、come → came\nのように変わる。\nto draw は主語や時が変わっても同じ形。', RED, 13),
    'V ＝ 時によって形が変わる語', RED),
  FS('主語が長いときは、説明の部分を（ ）でくくって飛ばします。The girl (who asked the first question) now wants to study physics at university. では ( ) の中が The girl の説明で、S は The girl、V は wants です。',
    [hd('長い主語は ( ) でくくって飛ばす'), ...chips([['The girl', 'S'], ['( who asked the first question )', 'M'], ['now', 'M'], ['wants', 'V'], ['to study physics at university.', 'O']], 8, 36, { size: 11, h: 26 }), ar(160, 124, 160, 100, C.blue), lb(160, 138, '飛ばしたあとで、戻って読む', 12, C.gray)],
    '間をくくる ── 残りが S と V', BLUE),
  FS('一つの文の中に動詞のように見える語が二つ以上あるときは、四つのどれかです。①and / but でつながった二つの文、②that 節の中、③間接疑問（why の後ろ）、④関係代名詞の中。文全体の V は一つだけです。',
    [hd('動詞が二つ以上見えたら'), ...grid([['① and / but で\n二つの文', BLUE], ['② that 節の\n中の動詞', GREEN], ['③ 間接疑問\n（why ～）', PURPLE], ['④ 関係代名詞\n（who ～）', MAIN]], 34, 44, 11), lb(160, 138, '文全体の V は一つだけ決める', 12, C.red, 'middle', true)],
    '残りの動詞は、かならず何かの中に入っている', GREEN),
  FS('まとめです。①骨組みは S＋V。②前置詞の後ろの名詞は主語になれない。③to 不定詞・-ing・過去分詞は単独で V にならない。④長い主語は ( ) でくくる。⑤動詞が複数見えたら文全体の V を一つだけ決める。',
    [hd('まとめ'), ...grid([['骨組みは\nS ＋ V', BLUE], ['前置詞のあとは\n主語になれない', YELLOW], ['長い主語は\n( ) でくくる', GREEN], ['全体の V は\n一つだけ', RED]], 34, 44, 11)],
    'S と V が合えば、細かい部分がずれても部分点が残る', MAIN),
], '主語（S）と動詞（V）をまず探す');

// ── s341 主語と動詞②：長い主語 ──
XF['xf_koko_eigo_s341'] = show([
  FS('主語の後ろに説明がぶら下がると、主語だけが長くなります。The man who ran it for forty years was ninety years old. では、S は The man、V は was。who ran it for forty years は「それを40年間営んでいた」という The man の説明です。',
    [hd('主語に説明がぶら下がる'), ...chips([['The man', 'S'], ['who ran it for forty years', 'M'], ['was', 'V'], ['ninety years old.', 'O']], 8, 40, { size: 11, h: 26 }), ...leg(116)],
    '説明が長くても、本体は The man', BLUE),
  FS('では、なぜ説明を ( ) でくくるのでしょうか。説明の中にも動詞（ran）があって、本物の V と見まちがえるからです。くくって飛ばせば、残りが S と V の一組になります。',
    qa('説明を ( ) でくくるのはなぜ？', '説明の中にも動詞（ran）があり、\n本物の V と見まちがえるから。\nくくって飛ばせば、\n残りが S と V の一組になる。', BLUE, 13),
    '( ) の中にも動詞がある ── でも文全体の V ではない', PURPLE),
  FS('( ) が閉じた直後に、本物の V が現れます。The old bookshop (near the station) closed last month. では、前置詞句 near the station も主語を長くしますが、( ) のあとに closed が現れます。',
    [hd('( ) が閉じた直後に、本物の V'), ...chips([['The old bookshop', 'S'], ['( near the station )', 'M'], ['closed', 'V'], ['last month.', 'M']], 8, 40, { size: 11, h: 26 }), ar(164, 100, 238, 74, C.red), lb(160, 118, '( ) のすぐ後ろが V', 13, C.red, 'middle', true)],
    '( ) の直後 ＝ 文全体の V', RED),
  FS('動詞の形は、( ) の中ではなく「本体の名詞」で決まります。The books that he sold were not new. の本体は The books（複数）なので were です。( ) の中の he sold につられて was と書くと誤りになります。',
    [hd('V の形は本体の名詞で決まる'), ...chips([['The books', 'S'], ['( that he sold )', 'M'], ['were', 'V'], ['not new.', 'O']], 24, 36, { size: 12, h: 28 }), ar(80, 100, 80, 70, C.blue), lb(80, 116, '本体は複数', 12, C.blue, 'middle', true), bx(168, 92, 140, 36, '✕ was\n（he sold につられた）', C.red, FILL.red, 11)],
    '数は ( ) の外の本体で決める', BLUE),
  FS('名詞のすぐ後ろに、いきなり〈S＋V〉が続くことがあります。The thing I remember best is his memory. では The thing の後ろに I remember が続いています。これは関係代名詞 that（または which）が省略された形です。',
    [hd('名詞 ＋ S ＋ V は省略のしるし'), ...chips([['The thing', 'S'], ['( I remember best )', 'M'], ['is', 'V'], ['his memory.', 'O']], 8, 40, { size: 12, h: 28 }), lb(160, 116, 'ここに that が省略されている', 12, C.main, 'middle', true), ar(130, 104, 112, 72, C.main, true)],
    '名詞のあとに S ＋ V ── 省略を疑う', MAIN),
  FS('では、なぜ省略に気づけるのでしょうか。名詞の直後にそのまま〈S＋V〉が並ぶのは、ふつうの文ではありえないからです。そこに説明がくっついているというサインになります。',
    qa('省略に気づけるのはなぜ？', '名詞のすぐあとに\n〈S ＋ V〉が並ぶ形は、ふつうの文には\nありえない。\nそこに説明がついているというサイン。', MAIN, 13),
    '例 ： the thing (I remember) ／ the book (he sold)', MAIN),
  FS('英語は説明が名詞の後ろ、日本語は前に来ます。The man who ran it for forty years は「40年間その店をやっていた男性」。語順が逆になるので、後ろの説明を前に回して読みます。長い主語は「その人」と一語にまとめて先へ進むと速く読めます。',
    [hd('英語は後ろから、日本語は前から'), bx(8, 36, 144, 34, 'The man ← 先に出る', C.blue, FILL.blue, 12), bx(160, 36, 152, 34, 'who ran it for forty years', C.gray, FILL.gray, 11), ar(236, 74, 236, 96, C.red), bx(8, 98, 304, 34, '「40年間その店をやっていた」→「男性」', C.red, FILL.red, 12)],
    '説明を前に回して読む ── 長ければ「その人」と短くする', RED),
  FS('まとめです。長い文に出会ったら ①説明を ( ) でくくる ②残った S と V だけを声に出す ③( ) の中身を戻す、の順で読みます。of / in の後ろの名詞は主語になれません（the smell of paper in it の主語は the smell）。',
    [hd('読む順番'), ...row(['① ( ) で\nくくる', '② S と V\nだけ読む', '③ 中身を\n戻す'], 40, GREEN, 12, 52), lb(160, 120, 'the smell of paper in it made me calm', 12, C.ink, 'middle', true), lb(160, 140, '主語は the smell（paper ではない）', 12, C.gray)],
    '「本体 ＋ 説明」と割り切ると、速度が上がる', MAIN),
], '長い主語は ( ) でくくる');

// ── s343 主語と動詞④：複文 ──
XF['xf_koko_eigo_s343'] = show([
  FS('長い文が読めないのは、文が二つ以上つながっているからです。When my brother was in the third year of junior high school, he broke his leg in a soccer game. は、左の「いつ」の部分（従属節）と、右の「何があったか」（主節）に分かれます。',
    [hd('文は二つの部分でできている'), bx(8, 34, 150, 52, 'When my brother was\nin the third year of\njunior high school,', C.gray, FILL.gray, 11), bx(166, 34, 146, 52, 'he broke his leg\nin a soccer game.', C.red, FILL.red, 11), lb(83, 100, '従属節（付け足し）', 12, C.gray, 'middle', true), lb(239, 100, '主節（中心）', 12, C.red, 'middle', true)],
    '左 ＝ いつ（付け足し）／右 ＝ 足を折った（中心）', BLUE),
  FS('では、どちらが中心なのでしょうか。when / because / if / although / while / after / before / since で始まるかたまりが従属節で、付け足しです。それ以外の〈S＋V〉が主節で、文の中心です。',
    qa('どちらが中心の文？', 'when / because / if / although / while\nafter / before / since で始まる\nかたまり ＝ 従属節（付け足し）。\nそれ以外の S ＋ V ＝ 主節（中心）。', RED, 13),
    '接続詞で始まるかたまりは、付け足し', PURPLE),
  FS('Because he could not walk for two months, he had to stay at home after school. では、Because で始まる部分が理由（従属節）、he had to stay at home after school が主節です。内容一致で言いたいことを問われたら主節を見ます。',
    [hd('理由は付け足し、中心は主節'), bx(8, 36, 150, 50, 'Because he could not\nwalk for two months,', C.gray, FILL.gray, 11), bx(166, 36, 146, 50, 'he had to stay at home\nafter school.', C.red, FILL.red, 11), lb(83, 100, '理由', 12, C.gray, 'middle', true), lb(239, 100, '中心：家にいなければ\nならなかった', 12, C.red, 'middle', true)],
    '筆者の言いたいことは主節にある', RED),
  FS('Although he was usually a cheerful person, he became very quiet during that time. では、「ふだんは明るい」と「とても静かになった」が食いちがっています。この落差が、この段落で筆者が伝えたいことです。',
    [hd('although ＝ 食いちがいの合図'), bx(8, 36, 144, 38, 'Although he was usually\na cheerful person,', C.gray, FILL.gray, 11), bx(168, 36, 144, 38, 'he became very quiet\nduring that time.', C.red, FILL.red, 11), ar(152, 55, 168, 55, C.main), lb(160, 100, 'ふだんは明るい ↔ とても静か', 13, C.main, 'middle', true), lb(160, 122, 'この落差が言いたいこと', 12, C.gray)],
    '明るい ↔ 静か：食いちがいに注目', MAIN),
  FS('では、なぜ although があると、後ろに予想外の内容が来るのでしょうか。although は「〜だけれども」という意味で、前半から予想されることと反対の内容を後ろにつなぐための語だからです。',
    qa('although の後ろは、なぜ予想外？', 'although ＝「〜だけれども」。\n前半から予想されることと\n反対の内容を、後ろにつなぐ語だから。\n（though / even though も同じ）', MAIN, 13),
    '前と後ろが食いちがうなら、後ろが主役', PURPLE),
  FS('従属節が文頭に来るときは、カンマで区切られ、カンマの後ろが主節です。文の途中に来た場合（He had to stay at home because he could not walk.）も意味は同じです。because が文頭に来ても意味は「〜なので」のままです。',
    [hd('位置が変わっても意味は同じ'), bx(8, 34, 304, 32, 'Because 〜 , 主節．', C.gray, FILL.gray, 13), bx(8, 76, 304, 32, '主節 because 〜．', C.gray, FILL.gray, 13), lb(160, 126, 'どちらも意味は同じ：「〜なので、…」', 12, C.ink, 'middle', true)],
    'カンマの後ろ ＝ 主節（文頭に従属節があるとき）', BLUE),
  FS('that 節は「〜ということ」という名詞のかたまりです。The boy said that the students in my brother\'s class had made them. には〈S＋V〉が二組あります。said の主語は The boy、had made の主語は the students です。',
    [hd('that 節は「〜ということ」'), bx(8, 34, 304, 108, '', C.blue, FILL.blue, 11), lb(160, 48, 'The boy said', 13, C.blue, 'middle', true), bx(20, 60, 280, 72, '', C.green, FILL.green, 11), lb(160, 74, 'that the students in my brother\'s class', 11, C.green, 'middle', true), lb(160, 94, 'had made them.', 12, C.green, 'middle', true), lb(160, 118, '↑ 過去完了：言った時点より前に作っていた', 11, C.gray)],
    'said の中身が that 以下 ── 入れ子になっている', GREEN),
  FS('三重の入れ子でも、外側から順にほどけば読めます。He said that he wanted to do something for other people, because so many people had done something for him. は ①He said ②that he wanted ③because 〜 の三段です。',
    [hd('外側から順にほどく'), bx(8, 28, 304, 118, '', C.blue, FILL.blue, 11), lb(160, 42, '① He said', 12, C.blue, 'middle', true), bx(18, 52, 284, 88, '', C.green, FILL.green, 11), lb(160, 66, '② that he wanted to do something for other people,', 10, C.green, 'middle', true), bx(28, 78, 264, 54, '', C.main, FILL.yellow, 11), lb(160, 92, '③ because so many people had done', 11, C.main, 'middle', true), lb(160, 110, 'something for him.', 11, C.main, 'middle', true)],
    '主節 → that 節 → because 節：三段でも外側から', GREEN),
], '主節と従属節を見分けて、ほどく');

// ── s345 代名詞①：it / they ──
XF['xf_koko_eigo_s345'] = show([
  FS('A plastic bag floating in the sea looks like a jellyfish, and a turtle eats it by mistake. この it は何を指すのでしょうか。候補は a plastic bag と a jellyfish の二つです。決め方には手順があります。',
    [hd('この it は何？'), bx(8, 30, 304, 54, 'A plastic bag floating in the sea\nlooks like a jellyfish, and a turtle\neats it by mistake.', C.blue, FILL.blue, 12), lb(160, 104, 'it ＝ どちら？', 14, C.red, 'middle', true), ci(72, 130, 22, '袋', C.main, FILL.warm, 12), ci(248, 130, 22, 'クラゲ', C.main, FILL.warm, 11)],
    '候補は二つ：レジ袋か、クラゲか', BLUE),
  FS('まず数を合わせます。it は単数の名詞、they / them は複数の名詞を指します。ここで候補が半分に減ります。a turtle eats it の it は単数なので、a plastic bag と a jellyfish のどちらかです。',
    [hd('手順① 数を合わせる'), bx(24, 36, 120, 50, 'it\n→ 単数の名詞', C.blue, FILL.blue, 13), bx(176, 36, 120, 50, 'they / them\n→ 複数の名詞', C.green, FILL.green, 13), lb(160, 112, '数が合わない候補は、先に消す', 13, C.red, 'middle', true)],
    'it ＝ 単数 ／ they・them ＝ 複数', BLUE),
  FS('次に意味が通るほうを選びます。「カメがクラゲを食べる」も一見成り立ちます。でも段落は One reason is plastic.（理由の一つはプラスチック）で始まり、話題はプラスチックです。だから it は a plastic bag です。',
    [hd('手順② 意味が通るほうを選ぶ'), bx(8, 34, 304, 36, 'One reason is plastic.', C.purple, FILL.purple, 14), ar(160, 72, 160, 94, C.purple), bx(60, 96, 200, 38, 'it ＝ a plastic bag', C.red, FILL.red, 15)],
    '段落の話題はプラスチック → it ＝ レジ袋', RED),
  FS('では、なぜ入れ直して確かめるのでしょうか。文法で可能でも、意味が通らなければ誤りだからです。a turtle eats a plastic bag by mistake（カメがレジ袋をまちがえて食べる）。by mistake（まちがえて）も、クラゲと見まちがえた流れに合います。',
    qa('入れ直して確かめるのはなぜ？', '文法で可能でも、意味が通らなければ誤り。\na turtle eats a plastic bag by mistake\n＝「カメがレジ袋をまちがえて食べる」\n→ 意味が通る。by mistake も流れに合う。', GREEN, 12),
    '手順③ ＝ 入れ直して、意味が通るか確かめる', PURPLE),
  FS('同じ文に they と it があっても、数が違うので取りちがえません。They must walk to the sea, and they find it by the light of the moon. の They は Baby turtles（複数）、it は the sea（単数）です。',
    [hd('同じ文の they と it は別のもの'), bx(8, 26, 304, 44, 'They must walk to the sea, and\nthey find it by the light of the moon.', C.gray, FILL.gray, 12), bx(20, 92, 132, 34, 'They ＝ Baby turtles', C.green, FILL.green, 12), bx(168, 92, 132, 34, 'it ＝ the sea', C.blue, FILL.blue, 12), ar(86, 90, 86, 70, C.green), ar(234, 90, 234, 70, C.blue)],
    '数が違えば、別のものを指す', BLUE),
  FS('落とし穴があります。Many of them die before they reach the sea. の them は、直前の bright lights ではなく Baby turtles です。入れ直すと「明かりの多くが死ぬ」では意味が通らないので、まちがいに気づけます。',
    [hd('直前の名詞とは限らない'), bx(8, 30, 304, 32, 'Many of them die before they reach the sea.', C.gray, FILL.gray, 12), bx(14, 80, 136, 52, '✕ bright lights\n「明かりの多くが死ぬ」', C.red, FILL.red, 11), bx(170, 80, 136, 52, '◯ Baby turtles\n「子ガメの多くが死ぬ」', C.green, FILL.green, 11)],
    '入れ直しの検算で、まちがいに気づける', RED),
  FS('「下線部 it の内容を日本語で答えなさい」では、名詞のかたまりで答えます。修飾語も落とさず、「海に浮かんでいるレジ袋」のように書きます。字数制限があるときは、中心の名詞（袋）を残して修飾語から削ります。',
    [hd('記述の答え方'), bx(8, 30, 304, 30, 'a turtle eats it by mistake の it', C.gray, FILL.gray, 12), ar(160, 62, 160, 82, C.red), bx(8, 84, 304, 52, '海に浮かんでいるレジ袋\n（修飾語も落とさない／10字なら「海に浮かぶレジ袋」）', C.red, FILL.red, 12)],
    '名詞のかたまり ＋ 修飾語。中心の名詞は削らない', RED),
  FS('まとめです。代名詞は ①数を合わせる ②意味が通るほうを選ぶ ③入れ直して確かめる、の三手順で決めます。直感で選ばず、この順に進めると選択肢問題の落とし穴を避けられます。',
    [hd('三手順'), ...row(['① 数を\n合わせる', '② 意味が\n通る方', '③ 入れ直す'], 40, GREEN, 12, 56), lb(160, 126, '迷ったら「数 → 意味 → 入れ直し」', 13, C.ink, 'middle', true)],
    'it ＝ 単数 ／ they・them ＝ 複数', MAIN),
], 'it / they は「数 → 意味 → 入れ直し」で決める');

// ── s346 代名詞②：this / that が文全体を指す ──
XF['xf_koko_eigo_s346'] = show([
  FS('This was a simple idea, but it worked. の This にあたる名詞は直前にありません。指しているのは、前の段落の内容全体です。名詞を探しても見つからないときは、文全体の内容を指していると考えます。',
    [hd('名詞が見つからない this'), bx(8, 32, 304, 34, 'This was a simple idea, but it worked.', C.blue, FILL.blue, 14), bx(8, 84, 140, 44, 'This ＝ 名詞？\n直前にない', C.gray, FILL.gray, 12), bx(172, 84, 140, 44, 'This ＝ 前の内容\nの全体', C.red, FILL.red, 12), ar(152, 106, 168, 106, C.main)],
    '名詞が見つからなければ、内容全体を指す', BLUE),
  FS('では、this が指している内容は何でしょうか。クラスは2週間、残した食べ物の重さを量って記録し、その数字を教室の壁に貼り出しました。この一連のことを This と呼んでいます。',
    [hd('This の中身'), ...row(['2週間\n重さを量る', '数字を\n壁に貼る', 'みんなが\n見られる'], 36, GREEN, 11, 48), ar(160, 90, 160, 112, C.red), bx(60, 114, 200, 36, 'This ＝ この全体', C.red, FILL.red, 14)],
    'This ＝ 重さを記録して貼り出したこと', RED),
  FS('その結果、残した食べ物の重さは 3.2kg → 1.8kg → 0.6kg と減りました。だれも「もっと食べなさい」とは言っていません。数字を貼り出して「見える」ようにしただけです。',
    [hd('貼り出したら、残りが減った'), bx(40, 140 - 77, 50, 77, '', C.red, FILL.red), bx(135, 140 - 43, 50, 43, '', C.main, FILL.yellow), bx(230, 140 - 14, 50, 14, '', C.green, FILL.green), lb(65, 56, '3.2kg', 12, C.red, 'middle', true), lb(160, 90, '1.8kg', 12, C.main, 'middle', true), lb(255, 118, '0.6kg', 12, C.green, 'middle', true), lb(65, 150, '1日目', 11, C.gray), lb(160, 150, '5日目', 11, C.gray), lb(255, 150, '最後の日', 11, C.gray)],
    '見えるようにしただけで、残りが減った', GREEN),
  FS('do that にも注意します。The teachers told us not to do that, but nothing changed. の that は、直前の「給食を皿に残すこと」を指します。do that ＝「そうすること」で、動作をまるごと受けています。',
    [hd('do that ＝ 動作をまるごと受ける'), bx(8, 26, 304, 40, 'Some students left their lunch\non their plates every day.', C.gray, FILL.gray, 12), bx(8, 76, 304, 32, 'The teachers told us not to do that,', C.gray, FILL.gray, 12), ar(290, 112, 290, 68, C.red), lb(160, 130, 'that ＝ 給食を皿に残すこと', 13, C.red, 'middle', true)],
    'do that ＝ 前に出た動作そのもの', RED),
  FS('That is true not only about food but also about electricity, water, and time. の That は、直前の文 When we cannot see a problem, we cannot solve it.（問題が見えないと解決できない）を指します。少し離れた内容を受けるときは that が使われやすくなります。',
    [hd('that は少し離れた内容も受ける'), bx(8, 30, 304, 34, 'When we cannot see a problem, we cannot solve it.', C.green, FILL.green, 12), ar(160, 94, 160, 68, C.red), bx(8, 96, 304, 34, 'That is true not only about food ...', C.gray, FILL.gray, 12), lb(160, 144, 'That ＝ 問題が見えないと解決できないこと', 12, C.red, 'middle', true)],
    'that ＝ 直前の文の内容全体', GREEN),
  FS('では、this が内容を指すのか、名詞を修飾しているのかは、どう見分けるのでしょうか。後ろに名詞が続けば（this experience）名詞を修飾しています。単独で主語になっているときは（This was ～）内容を指している可能性が高いのです。',
    qa('this が内容か、名詞の修飾か？', 'this ＋ 名詞（this experience）\n→ その名詞を説明。本文から特定する。\nThis が単独で主語（This was ～）\n→ 内容を指している可能性が高い。', BLUE, 12),
    '後ろに名詞があるか、単独かを見る', PURPLE),
  FS('記述問題は「〜こと」で終えます。例：下線部 This の内容は「2週間にわたって給食の残りの重さを量って記録し、その数字を教室の壁にはり出して全員が見られるようにしたこと」。30字以内なら中心だけ残します。',
    [hd('答え方：「〜こと」で終える'), bx(8, 30, 304, 52, '残した食べ物の重さを記録して\n教室にはり出したこと（24字）', C.red, FILL.red, 12), lb(160, 106, '手順：①指示語の文を読む ②直前を読む', 12, C.ink), lb(160, 124, '③中心を一文にまとめる ④入れ直して確かめる', 12, C.ink)],
    '指示語（これ・それ）を答えに残さない', RED),
  FS('まとめです。this / that の後ろに名詞がなければ、内容を指しているかもしれません。直前の1〜3文から動作の中心を取り出し、「〜こと」でまとめます。3.2 → 1.8 → 0.6kg の数値は、変化を聞かれたときだけ使います。',
    [hd('まとめ'), ...grid([['名詞が見つからない\n→ 内容全体', BLUE], ['do that\n→ 動作ごと', RED], ['that\n→ 離れた内容も', GREEN], ['答えは\n「〜こと」', MAIN]], 34, 44, 11)],
    '指示語の記述は「短くまとめる力」', MAIN),
], 'this / that は、文の内容全体も指す');

// ── s348 代名詞④：下線部の指示内容を説明する ──
XF['xf_koko_eigo_s348'] = show([
  FS('設問は「下線部 Many students were worried about this. の this の内容を日本語で説明しなさい」。本文をまるごと写しても、短くしすぎても点になりません。答案には決まった作り方があります。4ステップで進めます。',
    [hd('設問：this の内容は？'), bx(8, 30, 304, 40, 'Many students were worried\nabout this.', C.blue, FILL.blue, 13), ar(160, 74, 160, 96, C.red), bx(60, 98, 200, 36, 'this ＝ ？', C.red, FILL.red, 16)],
    '本文をそのまま写さず、決まった手順で作る', BLUE),
  FS('ステップ1は、指示語を含む文の意味を確認することです。「多くの生徒がこのことを心配した」。心配の対象になるのですから、前にマイナスの内容があるはずだと予想します。',
    [hd('ステップ1 ── 文の意味を確認'), bx(8, 34, 304, 36, '「多くの生徒が このこと を心配した」', C.gray, FILL.gray, 13), ar(160, 74, 160, 96, C.red), bx(20, 98, 280, 40, '心配になること ＝ マイナスの内容が\n前に書かれているはず', C.red, FILL.red, 12)],
    '心配の対象 → マイナスの内容を予想する', BLUE),
  FS('では、なぜ直前を読むのでしょうか。指示語は原則として直前を指し、遠くまで探しに行く必要はないからです。直前の文は Last spring, the town office said that the school might close in a few years.（去年の春、町役場が、その学校が数年のうちに閉校するかもしれないと言った）です。',
    [hd('ステップ2 ── 直前を読む'), bx(8, 28, 304, 58, 'Last spring, the town office said\nthat the school might close\nin a few years.', C.green, FILL.green, 12), ar(160, 116, 160, 90, C.green), lb(160, 130, '指示語は、原則として直前を指す', 13, C.green, 'middle', true)],
    '町役場が「閉校するかも」と言った', GREEN),
  FS('ステップ3は、日本語に組み直すことです。主語を補い（だれが→町役場が）、動作は「言った／閉校するかもしれない」、文末は「〜こと」で終えます。答案は「町役場が、アキの学校が数年のうちに閉校するかもしれないと言ったこと。」です。',
    [hd('ステップ3 ── 日本語に組み直す'), ...grid([['だれが\n→ 町役場が', BLUE], ['動作\n→ 閉校するかもと言った', RED], ['いつ\n→ 数年のうちに', GREEN], ['文末\n→ 「〜こと」', MAIN]], 30, 44, 11)],
    '答案：町役場が、…閉校するかもしれないと言ったこと。', RED, 11),
  FS('ステップ4は、入れ直して確認することです。「多くの生徒が〈町役場が…と言ったこと〉を心配した」と読んで意味が通れば完成です。日本語として変なら、まだ答案になっていません。',
    [hd('ステップ4 ── 入れ直して確認'), bx(8, 32, 304, 36, 'Many students were worried about this.', C.gray, FILL.gray, 13), ar(160, 72, 160, 92, C.red), bx(8, 94, 304, 52, '多くの生徒が〈町役場が、学校が数年のうちに\n閉校するかもしれないと言ったこと〉を心配した', C.red, FILL.red, 12)],
    '入れ直して意味が通れば、完成', RED),
  FS('ほかの指示語も見ていきます。she asked for one thing: to let students from other towns come and study ... のコロン（:）は「つまり」の合図で、後ろが one thing の中身です。「よその町の生徒を夏に1週間、自分の学校に来て学ばせること」。',
    [hd('コロン（:）の後ろが中身'), bx(8, 30, 304, 44, 'she asked for one thing :\nto let students from other towns come and study', C.gray, FILL.gray, 12), ar(160, 78, 160, 98, C.red), bx(20, 100, 280, 40, 'one thing ＝ よその町の生徒を夏に1週間\n自分の学校に来て学ばせること', C.red, FILL.red, 12)],
    'コロン・ダッシュの後ろは、直前の語の説明', MAIN),
  FS('them はいつも人とは限りません。showed them to the town office の them は、直前の 500 names on paper（紙に集めた500人の署名）を指す「もの」です。Three of them said ... の them は twenty students from three cities（3つの市から来た20人の生徒）を指します。',
    [hd('them は、もの のことも'), bx(8, 30, 304, 32, 'showed them to the town office', C.gray, FILL.gray, 13), bx(8, 74, 304, 32, 'Three of them said that ...', C.gray, FILL.gray, 13), bx(12, 118, 136, 38, 'them ＝ 500 names\n（署名・もの）', C.green, FILL.green, 11), bx(172, 118, 136, 38, 'them ＝ 20 students\n（3つの市の生徒）', C.blue, FILL.blue, 11)],
    '同じ it・them でも、一つずつ入れ直して確かめる', GREEN),
  FS('まとめです。①指示語の文を読む ②直前を読む ③日本語に組み直す（主語を補い「〜こと」で終える）④入れ直して意味を確かめる。字数制限があるときは、中心の内容（閉校するかもしれないこと）を優先します。',
    [hd('4ステップ'), ...grid([['① 文の意味を\n確認する', BLUE], ['② 直前を\n読む', GREEN], ['③ 日本語に\n組み直す', RED], ['④ 入れ直して\n確かめる', MAIN]], 32, 48, 12)],
    '「だれが・いつ」まで書くと確実', MAIN),
], '下線部の指示内容は 4 ステップで答える');

// ── s349 つなぎ語①：however / but ──
XF['xf_koko_eigo_s349'] = show([
  FS('論説文は「多くの人は A だと言う。しかし B である」の形で始まることが非常に多いです。Many people say that reading on a screen is the same as reading on paper. が一般論、However, some studies show a difference. が筆者の立場です。',
    [hd('一般論 → However → 筆者の考え'), bx(8, 30, 304, 40, 'Many people say that reading on a screen\nis the same as reading on paper.', C.gray, FILL.gray, 11), ar(160, 74, 160, 90, C.red), bx(8, 92, 304, 40, 'However, some studies show\na difference.', C.red, FILL.red, 13)],
    '「みんなの意見」→ ひっくり返す → 筆者の本音', BLUE),
  FS('では、なぜ However の後ろが大事なのでしょうか。筆者はまず多くの人の意見を出し、それをひっくり返して本当に言いたいことを言うからです。だから「筆者の考えはどれか」と問われたら、However の後ろを見ます。',
    qa('however の後ろが大事なのはなぜ？', '筆者はまず「みんなの意見」を出して、\nそれをひっくり返して本当に言いたいことを書く。\nだから設問で「筆者の考え」を問われたら、\nHowever の後ろを見る。', RED, 12),
    '線を引くのは、逆接の語の「後ろ」', PURPLE),
  FS('一般論を示す表現は、Many people say / Some people think / It is often said that / We usually believe など。これらが出たら「このあとひっくり返るぞ」と身構えます。',
    [hd('一般論の合図 → 身構える'), ...grid([['Many people say', GRAY], ['Some people think', GRAY], ['It is often said that', GRAY], ['We usually believe', GRAY]], 30, 30, 12)],
    'この合図の後ろで、話が折り返す', MAIN),
  FS('実験の話です。紙の本のグループとタブレットのグループが同じ話を読みました。名前や場所などの小さな事実の問題では、得点はほぼ同じでした。しかし出来事を正しい順に並べる問題では、紙のグループのほうがずっとよくできました。',
    [hd('実験の結果'), bx(8, 30, 148, 56, '小さな事実\n（名前・場所）\n→ ほぼ同じ', C.gray, FILL.gray, 12), bx(164, 30, 148, 56, '出来事の順序\n→ 紙のグループが\nずっと上', C.red, FILL.red, 12), ar(156, 58, 164, 58, C.main), lb(160, 106, 'But の後ろが、この実験の結論', 13, C.red, 'middle', true)],
    'But there was a clear difference ...', RED),
  FS('では、なぜ紙のほうが順序を覚えやすいのでしょうか。研究者は、読み手が「その場面がページのどこにあったか」を覚えていて、それが順序を思い出す助けになると考えています。',
    qa('紙のほうが順序を覚えやすいのは？', '読み手は「その場面がページの\nどこにあったか」を覚えている。\nそれが出来事の順序を思い出す助けになる、\nと研究者は考えている。', GREEN, 12),
    'ページ上の場所の記憶が、順序の記憶を助ける', PURPLE),
  FS('第4段落は「譲歩 → 主張」の型です。This does not mean that tablets are bad.（タブレットにも良い点がある）は相手の言い分を一度認める譲歩。Still, ... paper may be the better choice for now.（それでも、今のところ紙のほうがよい）が筆者の主張です。',
    [hd('譲歩 → 主張'), bx(8, 30, 304, 40, 'This does not mean that tablets are bad.\nA tablet can hold a thousand books ...', C.gray, FILL.gray, 11), lb(160, 82, '譲歩（いちど認める）', 12, C.gray, 'middle', true), ar(160, 90, 160, 102, C.red), bx(8, 104, 304, 40, 'Still, if you want to remember the order,\npaper may be the better choice for now.', C.red, FILL.red, 11)],
    'Still の後ろで、筆者の主張に戻る', RED),
  FS('なぜ may や for now の重みに注意するのでしょうか。may be the better choice for now は「今のところ〜かもしれない」で、断定していないからです。選択肢が「紙のほうが必ず優れている」なら、本文の「かもしれない」を「必ず」に変えた言いすぎで、誤りです。',
    qa('may / for now に注意するのは？', 'may ＝「〜かもしれない」、for now ＝「今のところ」\n断定していない文だから。\n「必ず優れている」という選択肢は\n言いすぎ ── 誤り。', YELLOW, 12),
    '助動詞・副詞の強さまで照合する', PURPLE),
  FS('however は接続詞ではなく副詞なので、× I read it on paper, however I forgot the order. のようにカンマだけで二つの文をつなぐことはできません。ピリオドかセミコロンで切り、However, ... と始めます。文法問題でも問われます。',
    [hd('however は接続詞ではない'), bx(8, 30, 304, 32, '✕  I read it on paper, however I forgot ...', C.red, FILL.red, 12), bx(8, 74, 304, 32, '◯  I read it on paper. However, I forgot ...', C.green, FILL.green, 12), lb(160, 126, 'but は接続詞 ／ however は副詞', 13, C.ink, 'middle', true)],
    'ピリオドで切ってから、However, と始める', GREEN),
], 'however / but ── ここから大事');

// ── s351 つなぎ語③：因果 ──
XF['xf_koko_eigo_s351'] = show([
  FS('ホタルが減ったのは水が汚れたから、と一言で片づけたくなります。でも英文は「That is only part of the story.（それは話の一部にすぎない）」と訂正します。ホタルには3つのものが必要です。きれいな水、えさのカワニナ、暗い夜。',
    [hd('ホタルに必要な3つ'), ...grid([['きれいな水', BLUE], ['えさの\n小さなカワニナ', GREEN], ['暗い夜', PURPLE]], 32, 56, 12, 3), lb(160, 112, 'Fireflies need three things.', 13, C.ink, 'middle', true), lb(160, 134, '原因は水だけではない', 13, C.red, 'middle', true)],
    '3つのどれが欠けても、ホタルは減る', BLUE),
  FS('原因の一本目の矢印です。Because rivers were covered with concrete, the snails lost their homes. As a result, the fireflies lost their food. 川がコンクリートで覆われた → カワニナが住みかを失った → ホタルがえさを失った。',
    [hd('① えさの鎖'), ...row(['川が\nコンクリートに', 'カワニナが\n住みかを失う', 'ホタルが\nえさを失う'], 36, RED, 11, 60), lb(160, 118, 'Because …　　　　　As a result, …', 12, C.gray)],
    'because の後ろが原因、As a result の後ろが結果', RED),
  FS('二本目の矢印です。bright streetlights make the nights bright, so the fireflies cannot find each other. 街灯が明るい → 夜が明るい → ホタルが互いを見つけられない。so の後ろが結果です。',
    [hd('えさの鎖 と 光の鎖'), ...row(['川が\nコンクリートに', 'カワニナが\n住みかを失う', 'ホタルが\nえさを失う'], 28, RED, 10, 44), lb(160, 82, 'because … → As a result, …', 11, C.red), ...row(['街灯が\n明るい', '夜が\n明るい', '互いを見つけ\nられない'], 98, PURPLE, 10, 44), lb(160, 152, 'so …（結果）', 11, C.purple)],
    '街灯 → 夜が明るい → 合図が届かない', PURPLE),
  FS('では、なぜ光が大事なのでしょうか。Fireflies use their light to send messages, and a light that no one can see is useless. ホタルは光でメッセージを送り合うので、夜が明るいと誰にも見えず、役に立たなくなるからです。',
    qa('街灯が明るいとなぜ困るの？', 'ホタルは光で仲間に合図を送る。\n夜が明るいと、その光が\n誰にも見えなくなってしまう。\n見えない光は役に立たない。', PURPLE, 13),
    '光は、ホタルどうしの連絡手段', PURPLE),
  FS('because と so は向きが逆です。He was late because the train stopped. は「電車が止まったので遅れた」。The train stopped, so he was late. は「電車が止まった、だから遅れた」。意味は同じで、語の位置が入れかわります。',
    [hd('because と so は向きが逆'), bx(8, 32, 304, 36, 'He was late because the train stopped.', C.gray, FILL.gray, 13), lb(160, 80, '結果　　　because　原因', 12, C.red, 'middle', true), bx(8, 94, 304, 36, 'The train stopped, so he was late.', C.gray, FILL.gray, 13), lb(160, 142, '原因　　　　so　　結果', 12, C.blue, 'middle', true)],
    'because ＋ 原因 ／ so ＋ 結果', RED),
  FS('岐阜の町では3つの問題に同時に取り組みました。①川のコンクリートを一部取り除く ②石を戻す ③6月と7月に街灯を一部消す。5年後、ホタルの数は約4倍になりました。',
    [hd('岐阜の町のとりくみ'), ...row(['コンクリート\nを取り除く', '石を\n戻す', '6・7月に\n街灯を消す'], 34, GREEN, 11, 54), ar(160, 92, 160, 112, C.green), bx(60, 114, 200, 36, '5年後 ＝ 約4倍', C.red, FILL.red, 15)],
    '3つの問題に、同時に取り組んだ', GREEN),
  FS('では、なぜ一つ直すだけではだめなのでしょうか。原因が複数あるので、一つだけ直しても他の原因が残るからです。Therefore, fixing only one of them is often not enough.（したがって、一つだけ直すのでは足りないことが多い）。',
    qa('一つ直すだけではだめなのはなぜ？', '原因が複数あるから。\n一つだけ直しても、\nほかの原因が残ってしまう。\nTherefore（したがって）…', RED, 13),
    '「原因はAだけ」という選択肢は誤りになりやすい', PURPLE),
  FS('because of は前置詞なので後ろは名詞（because of the rain）、because は接続詞なので後ろは〈S＋V〉（because it rained）。書きかえ問題の定番です。about 4 times は「約4倍」なので、「ちょうど4倍」とは断定できません。',
    [hd('because of と because'), bx(8, 32, 148, 50, 'because of\n＋ 名詞\nthe rain', C.blue, FILL.blue, 12), bx(164, 32, 148, 50, 'because\n＋ S ＋ V\nit rained', C.green, FILL.green, 12), lb(160, 108, 'about 4 times ＝ 約4倍（ちょうどではない）', 12, C.main, 'middle', true)],
    'because of ＋名詞 ／ because ＋S＋V', MAIN),
], '因果の矢印は、向きと本数がいのち');

// ── s352 つなぎ語④：手順 ──
XF['xf_koko_eigo_s352'] = show([
  FS('古い新聞紙が新しい新聞紙になるまでには4つの工程があります。段落の先頭の First / Second / Third / Finally が順序の目印で、段落の数と工程の数が合います。',
    [hd('新聞紙のリサイクル：4つの工程'), ...row(['First\n集めて\n運ぶ', 'Second\n温水と\n混ぜる', 'Third\nインクを\n取る', 'Finally\n広げて\n乾かす'], 34, MAIN, 11, 74, 12), lb(160, 130, '順序の目印 ＝ 段落の先頭', 13, C.ink, 'middle', true)],
    '目印の語を拾えば、工程の順がわかる', BLUE),
  FS('第1の工程。First, the used paper is collected and taken to a factory. 使い終わった紙を集めて工場へ運び、ビニール袋や金属のクリップなど、紙でないものを取りのぞきます。',
    [hd('First ── 集めて、紙でないものを除く'), bx(14, 34, 92, 44, '使用ずみの紙\nを集める', C.main, FILL.warm, 12), ar(110, 56, 128, 56, C.main), bx(130, 34, 80, 44, '工場へ運ぶ', C.main, FILL.warm, 12), ar(214, 56, 230, 56, C.main), bx(232, 34, 76, 44, '除く', C.red, FILL.red, 13), lb(160, 104, '除くもの：plastic bags（ビニール袋）', 12, C.red, 'middle', true), lb(160, 124, 'metal clips（金属のクリップ）', 12, C.red, 'middle', true)],
    '第1段落 ＝ First', MAIN),
  FS('第2の工程。紙を大きな機械に温水といっしょに入れ、やわらかい灰色の液体になるまで混ぜます。この液体をパルプといいます。The machine mixes them の them は、the paper and warm water（紙と温水）の二つをまとめて受けています。',
    [hd('Second ── 温水と混ぜてパルプに'), bx(20, 34, 90, 54, '紙', C.gray, FILL.gray, 16), bx(120, 34, 80, 54, '＋ 温水', C.blue, FILL.blue, 14), ar(206, 60, 232, 60, C.main), bx(234, 34, 78, 54, 'パルプ\n灰色の液体', C.gray, FILL.gray, 11), lb(160, 110, 'them ＝ the paper and warm water', 13, C.red, 'middle', true)],
    'them は直前の名詞1つとは限らない（2つまとめて）', BLUE),
  FS('第3の工程。インクを取りのぞきます。パルプに空気を送りこむと、インクが泡にくっついて上へ浮かびます。表面の灰色の泡を取りのぞくと、パルプはずっと白くなります。',
    [hd('Third ── インクを泡にくっつけて取る'), bx(30, 44, 160, 90, '', C.blue, FILL.blue), ci(70, 110, 8, '', C.gray, FILL.gray), ci(110, 100, 8, '', C.gray, FILL.gray), ci(150, 114, 8, '', C.gray, FILL.gray), ar(70, 100, 70, 66, C.gray), ar(110, 90, 110, 66, C.gray), ar(150, 104, 150, 66, C.gray), lb(110, 56, '灰色の泡（インク）', 11, C.gray, 'middle', true), bx(214, 50, 92, 60, '空気を\n送りこむ ↑', C.green, FILL.green, 12)],
    'インクは泡にくっついて、上に浮かぶ', GREEN),
  FS('第4の工程 Finally。パルプを平らに広げ、ローラーで押しつけ、乾かします。新しい紙は巻き取られ、印刷会社に送られます。並べかえ問題では、各選択肢のキーワードを工程の目印と結びつけます。',
    [hd('並べかえ問題の解き方'), ...grid([['ア インクを取る → Third', GRAY], ['イ 工場へ運ぶ → First', GRAY], ['ウ 乾かす → Finally', GRAY], ['エ 温水と混ぜる → Second', GRAY]], 30, 28, 11), lb(160, 128, '答え：イ → エ → ア → ウ', 15, C.red, 'middle', true)],
    '目印の語と結びつけて並べる', RED),
  FS('では、なぜ受け身の文が続くのでしょうか。is collected / is taken / is put / is sent のように、だれがやるかは重要ではなく、何がされるかが中心だからです。受け身が続いたら「これは手順の説明だ」と判断してよいのです。',
    qa('受け身の文が続くのはなぜ？', 'だれがやるかは重要ではなく、\n何がされるか（紙の動き）が中心だから。\nis collected / is taken / is put ...\n受け身が続く ＝ 手順の説明。', BLUE, 12),
    '手順の英文は、動詞だけ拾えば内容がつかめる', PURPLE),
  FS('最終段落には数値と限界が書かれています。One tree makes about 8,000 sheets of paper. Japan recycles about 80 percent of its used paper, and this is one of the highest rates in the world. しかし、紙は永久に再生できるわけではありません。',
    [hd('最終段落：数値と限界'), ...grid([['木1本から\n約8,000枚', GRAY], ['日本は約80%を\n再生している', GREEN]], 28, 44, 12), lb(160, 120, 'one of the highest ＝ 世界でも高い部類', 13, C.main, 'middle', true), lb(160, 142, '「世界一」とは言っていない', 12, C.gray)],
    'one of the highest ≠ 世界一', YELLOW),
  FS('なぜ紙は永久にリサイクルできないのでしょうか。再生するたびに繊維が短くなるので、新しい木を加えなければならないからです。Each time, the fibers become shorter, so new wood must be added. cannot ~ forever は「永久に〜できるわけではない」という部分否定です。',
    qa('紙がずっとリサイクルできないのは？', 'そのたびに繊維が短くなるので、\n新しい木を加えなければならないから。\ncannot ～ forever ＝\n「永久に～できるわけではない」', RED, 12),
    '説明文の最終段落は、要旨そのもの', PURPLE),
], '順序の目印で工程を追う');

// ── s354 段落の主題文① ──
XF['xf_koko_eigo_s354'] = show([
  FS('英語の段落は「主題文 → 支持文（例・理由・数値）」の順で書かれ、主題文は原則として1文目です。ミツバチの文章の4つの段落の1文目をならべると、その文章の骨組みが見えます。',
    [hd('4つの段落の1文目'), ...grid([['① ミツバチは\nはちみつ以上の働き', BLUE], ['② 多くの国で\n数が減っている', RED], ['③ 人々は小さな\n方法で助けられる', GREEN], ['④ 農家も\n助けられる', MAIN]], 28, 50, 11)],
    '1文目だけで、構成がわかる', BLUE),
  AS('つなげると「ミツバチは重要 → 減っている → 私たちにできること → 農家にできること」。これがこの文章の要旨です。',
    [],
    '要旨 ＝ 重要 → 減少 → 市民 → 農家', MAIN),
  FS('では、なぜ英語は最初に言いたいことを書くのでしょうか。英語では結論を最初に宣言してから説明に入る書き方が習慣だからです。だから1文目だけをたどると全体像が見え、時間のない試験でも内容がつかめます。',
    qa('1文目に言いたいことがあるのは？', '英語は、最初に言いたいことを宣言して\nから説明を始める書き方が習慣だから。\n1文目だけたどれば全体像が見え、\n時間のない試験で役に立つ。', BLUE, 12),
    '時間がないときは「各段落の1文目＋最終段落」', PURPLE),
  FS('主題文は抽象的、支持文は具体的です。第1段落の主題文 Honeybees do much more than make honey. を、支持文の「食べ物の約3分の1は虫が花粉を運ぶことに頼っている」と「りんご・いちご・玉ねぎ・アーモンド」が裏づけています。',
    [hd('抽象 → 具体の階段'), bx(8, 30, 304, 34, '主題文：Honeybees do much more than make honey.', C.blue, FILL.blue, 12), ar(160, 66, 160, 82, C.blue), ...grid([['食べ物の約3分の1は\n虫の花粉運びに頼る', GRAY], ['りんご・いちご・\n玉ねぎ・アーモンド', GRAY]], 84, 42, 11)],
    '主題文は抽象的、支持文は数値・例など具体的', BLUE),
  FS('第2段落の支持文には数値と原因が並びます。アメリカの農家は1年で約40%のミツバチを失い、原因は一つではなく、病気・農薬・野の花の減少が同時にミツバチを傷つけています。',
    [hd('第2段落の支持文'), bx(8, 30, 304, 32, '主題文：The number of honeybees is falling.', C.red, FILL.red, 12), ar(160, 64, 160, 80, C.red), ...grid([['約40%を\n1年で失った', GRAY], ['病気', GRAY], ['農場の化学物質', GRAY], ['野の花が減った', GRAY]], 82, 30, 11, 2)],
    '数値と原因の列挙は、主題文を裏づける材料', RED),
  FS('では、なぜ要旨に数値や具体例を入れないのでしょうか。それらは主題文を裏づける材料（支持文）だからです。要旨は主題文だけを段落の順に並べて作ります。30字程度なら「ミツバチは食料生産に欠かせないが減っており、市民も農家もできることがある」。',
    qa('要旨に数値や例を入れないのは？', '数値や例は主題文を裏づける材料（支持文）。\n要旨は主題文だけを、\n段落の順に並べて作る。', GREEN, 13),
    '要旨 ＝ 主題文だけを順につなぐ', PURPLE),
  FS('題名を選ぶ問題では「狭すぎる」「広すぎる」「本文にない」が誤りです。ア Apples and Strawberries は第1段落の例だけで狭すぎる。イ How to Keep Bees at Home と エ The History of Honey は本文にない。ウ Honeybees and What We Can Do は全体をおおうので正解です。',
    [hd('題名の選択肢'), ...grid([['ア Apples and\nStrawberries → 狭すぎる', YELLOW], ['イ How to Keep Bees\nat Home → 本文にない', RED], ['ウ Honeybees and What\nWe Can Do → 正解 ◯', GREEN], ['エ The History of\nHoney → 本文にない', RED]], 30, 50, 10)],
    '要旨は「全体をおおっているか」で選ぶ', GREEN),
  FS('1文目が疑問文や短い導入文のときは、2文目が主題文になることもあります。1文目が抽象的でなければ次の文を見ます。more bees mean more fruit は「ミツバチが増えれば果実も増える」という more ～ more ～ の比例の言い方です。',
    [hd('例外に注意'), bx(8, 30, 304, 38, '1文目が疑問文・短い導入文\n→ 2文目が主題文のことも', C.main, FILL.yellow, 12), bx(8, 82, 304, 38, 'more bees mean more fruit\n＝ ミツバチが増えれば果実も増える', C.green, FILL.green, 12)],
    '1文目が抽象的でなければ、次の文を見る', MAIN),
], '各段落の 1 文目 ＝ 主題文');

// ── s355 段落の主題文②：結論が最後 ──
XF['xf_koko_eigo_s355'] = show([
  FS('心臓に電気を送る小さな機械を作った医師の話です。第1〜3段落は、1958年・43歳・3時間・2日間・26台・2001年・86歳と、年号や数値ばかりです。最後の第4段落だけが一般論になっています。',
    [hd('4つの段落の性格'), ...grid([['第1段落\n1958年・43歳・3時間\n→ 事実', GRAY], ['第2段落\n反対されても続けた\n→ 出来事', GRAY], ['第3段落\n26台・2001年・86歳\n→ 事実', GRAY], ['第4段落\nBig inventions ...\n→ 主張', RED]], 28, 56, 11)],
    '事実を積み上げて、最後に一般化する型', BLUE),
  FS('では、なぜ結論が最後に置かれるのでしょうか。実例を先に並べ、そこから言えることを最後にまとめる書き方があるからです。物語のように始まる説明文は、ほぼ確実に最後で一般化します。',
    qa('結論が最後に来るのはなぜ？', '実例を先に積み上げて、\nそこから言えることを最後に\nまとめる書き方があるから。\n最終段落を読まずに解答しない。', BLUE, 13),
    '物語風に始まる説明文は、最後で一般化する', PURPLE),
  FS('事実の段落と主張の段落は、見た目で区別できます。事実の段落は過去形で、年号や場所、固有名詞が入ります。主張の段落は、一般的な主語（Big inventions / They）と現在形で書かれ、時と場所を示す語がありません。',
    [hd('見分け方'), bx(8, 30, 148, 82, '事実の段落\n・過去形\n・年号 1958 / 2001\n・数値 43歳 / 26台', C.gray, FILL.gray, 12), bx(164, 30, 148, 82, '主張の段落\n・現在形\n・一般的な主語\n・時と場所なし', C.red, FILL.red, 12), lb(160, 130, '時制が現在形に変わったら、結論', 13, C.red, 'middle', true)],
    '過去形＋年号 → 事実 ／ 現在形＋一般論 → 主張', RED),
  FS('機械の性能の変化を整理します。1台目は3時間だけ動きました。2台目は2日間動きました。患者は生涯で26台の機械を受け取りました。失敗するたびに何かを学び、新しい機械を作り続けたのです。',
    [hd('機械の性能の変化'), ...row(['1台目\n3時間', '2台目\n2日間', '生涯で\n26台'], 36, GREEN, 13, 56), lb(160, 118, 'each time they learned something from', 12, C.ink, 'middle', true), lb(160, 136, 'the one that had failed', 12, C.ink, 'middle', true)],
    '失敗するたびに学んだ ── 26台まで続いた', GREEN),
  FS('第2段落の Many people said that the idea would never be useful. は「多くの人が言った」という他人の意見で、筆者の主張ではありません。「多くの人が言った」は一般論の提示にすぎないのです。',
    [hd('だれの意見か'), bx(8, 30, 304, 40, 'Many people said that the idea\nwould never be useful.', C.gray, FILL.gray, 12), ar(160, 74, 160, 96, C.red), bx(40, 98, 240, 38, '他人の意見 ≠ 筆者の主張', C.red, FILL.red, 15)],
    '「～と言う人が多い」は、筆者の主張ではない', YELLOW),
  FS('では、なぜ設問によって見る場所が変わるのでしょうか。事実の段落は内容一致や数値を問う設問の材料になり、主張の段落は要旨や題名を問う設問の答えになるからです。どちらを聞かれているかで、読む段落を切りかえます。',
    qa('設問によって見る段落が変わるのは？', '事実の段落 → 内容一致・数値の設問\n主張の段落 → 要旨・題名の設問\nと、設問の種類で材料が違うから。', GREEN, 13),
    '聞かれている種類で、見る場所を変える', PURPLE),
  FS('最後の文 Big inventions are not born finished. は「大きな発明は完成した形で生まれるわけではない」。born finished（完成した状態で生まれる）を否定しています。「生まれない」と読んではいけません。',
    [hd('Big inventions are not born finished.'), bx(8, 30, 304, 32, 'not ＋ born finished', C.red, FILL.red, 14), ar(160, 66, 160, 88, C.red), bx(8, 90, 304, 44, '「完成した形で生まれる」わけではない\n（失敗を重ねて育っていく）', C.green, FILL.green, 13)],
    'not の否定範囲は、born finished', RED),
  FS('まとめです。事実の段落を読み飛ばしてよいわけではありません。事実の段落は内容一致・数値、最終段落は要旨・題名。26台・2001年・86歳の数値と、「早く使う人も仕事の一部だ」という主張のつながりを確かめます。',
    [hd('まとめ'), ...grid([['事実の段落\n過去形・年号・数値', GRAY], ['主張の段落\n現在形・一般論', RED]], 30, 50, 12), bx(8, 94, 304, 40, '患者が医師とエンジニアの両方より長生き\n→「早く使う人も仕事の一部」', C.green, FILL.green, 11)],
    '最終段落を読まずに解答しない', MAIN),
], '結論が最後に来る文章');

// ── s357 段落の主題文④：見出し ──
XF['xf_koko_eigo_s357'] = show([
  FS('水の文章に見出しを付けます。見出しは、その段落を一言で呼ぶ名前です。10字前後の名詞句にします。4つの段落に、それぞれ見出しが付きます。',
    [hd('4つの段落に見出しを付ける'), ...grid([['① 地球上で使える\n水の少なさ', BLUE], ['② 日本の家庭での\n水の使いみち', GREEN], ['③ 水を得るのが困難な\n地域の現実', RED], ['④ 家庭の節水だけでは\n足りない理由', MAIN]], 28, 52, 11)],
    '見出し ＝ 段落を一言で呼ぶ名前', BLUE),
  FS('見出しの作り方は3つです。①その段落で何度も出てくる語を探す（water / use / percent）②主題文（1文目）を10字前後に縮める ③数値は入れない。',
    [hd('見出しの作り方'), ...row(['① くり返し出る\n語を探す', '② 1文目を\n縮める', '③ 数値は\n入れない'], 36, GREEN, 12, 56), lb(160, 118, '「約200リットル」ではなく', 12, C.gray), lb(160, 138, '「家庭での使いみち」', 14, C.red, 'middle', true)],
    '見出しは短く、数値や具体例は入れない', GREEN),
  FS('では、なぜ見出しに数値を入れないのでしょうか。見出しは段落の話題を呼ぶ名前であり、数値は話題を裏づける支持文の材料だからです。2つ書きたくなったら、上位の話題を選びます（200リットルと風呂40%なら、風呂は内訳なので上位の「使いみち」）。',
    qa('見出しに数値を入れないのは？', '見出しは「段落の話題」を呼ぶ名前。\n数値は、その話題を裏づける材料（支持文）。\n2つ書きたくなったら、上位の話題を選ぶ。', PURPLE, 13),
    '見出しが2つ浮かんだら、読みまちがいを疑う', PURPLE),
  FS('第2段落の割合です。日本人は家庭で1日に約200リットルの水を使います。その約40%は風呂で、200×0.4＝80リットル。約20%はトイレで、200×0.2＝40リットルです。飲み水は全体の小さな一部です。',
    [hd('家庭で使う水：約200リットル/日'), bx(8, 34, 122, 36, '風呂 約40%', C.blue, FILL.blue, 12), bx(130, 34, 61, 36, 'トイレ\n約20%', C.green, FILL.green, 11), bx(191, 34, 121, 36, 'ほか（飲み水は一部）', C.gray, FILL.gray, 11), lb(69, 88, '80リットル', 12, C.blue, 'middle', true), lb(160, 88, '40リットル', 12, C.green, 'middle', true), lb(251, 88, '残り', 12, C.gray), lb(160, 122, '200×0.4＝80　200×0.2＝40', 13, C.ink, 'middle', true)],
    '40% ＝ 80リットル ／ 20% ＝ 40リットル', BLUE),
  FS('では、なぜ割合の「もとになる量」を確かめるのでしょうか。about 70 percent と Less than one percent は、別の全体に対する割合だからです。70%は地球の表面のうち水が占める割合、1%未満は地球上の水全体のうち、川・湖・地下水として使える水の割合です。',
    [hd('割合ごとにもとの量がちがう'), bx(8, 30, 304, 32, '地球の表面の約70%が水', C.blue, FILL.blue, 13), ar(160, 64, 160, 80, C.blue), bx(8, 82, 304, 32, 'その水（全体）のうち、使える水は1%未満', C.green, FILL.green, 12), lb(160, 130, '1%は「70%の1%」ではなく「水全体の1%未満」', 12, C.red, 'middle', true)],
    'of の後ろの「もとの量」を、必ず確かめる', RED),
  FS('第4段落の主題文は、Saving water at home is a good first step, but it is not enough.（家庭の節水はよい第一歩だが、それでは十分でない）。but の後ろが要点で、見出しもそちらに合わせます。国全体で使う水の大半は農場と工場に向かうからです。',
    [hd('but の後ろが要点'), bx(8, 30, 304, 38, 'Saving water at home is a good first step,\nbut it is not enough.', C.gray, FILL.gray, 12), ar(160, 72, 160, 90, C.red), bx(8, 92, 304, 44, '国の水の大半 ＝ 農場と工場\n→ 家庭の節水だけでは足りない', C.red, FILL.red, 13)],
    '見出し：家庭の節水だけでは足りない理由', RED),
  FS('遠くで作られた食べ物を買うとき、その国の水も使っていることになります（When we buy food that was grown far away, we are also using the water of that country.）。これは「仮想水（バーチャルウォーター）」という考え方で、社会科でも学びます。',
    [hd('食べ物を買うと、その国の水も使う'), ...row(['遠くで\n作られた食料', '買う', 'その国の水を\n使ったことに'], 36, MAIN, 12, 52), lb(160, 120, '仮想水（バーチャルウォーター）', 14, C.blue, 'middle', true), lb(160, 140, '社会科でも出てくる考え方', 12, C.gray)],
    '日本の食料の輸入は、水の輸入でもある', MAIN),
  FS('まとめです。見出しをつなげると要旨になります。「使える水は少ない → 家庭ではこう使っている → 手に入れるのが難しい地域もある → 家庭の節水だけでは不十分」。「日本人は1日に200リットルの水を飲む」と読むのは誤りで、at home（家庭で）使う総量です。',
    [hd('見出し → 要旨'), ...row(['使える\n水は少ない', '家庭での\n使いみち', '得るのが\n難しい地域', '節水だけ\nでは不十分'], 36, GREEN, 10, 56, 12), lb(160, 118, '× 1日に200リットルを「飲む」', 12, C.red, 'middle', true), lb(160, 138, '○ 家庭で「使う」総量（at home）', 12, C.green, 'middle', true)],
    '見出しをつなぐと、要旨になる', MAIN),
], '段落に見出しを付ける');

// ── s358 物語文①：場面設定 ──
XF['xf_koko_eigo_s358'] = show([
  FS('物語の冒頭で確認するのは4つ。だれが、いつ、どこで、どんな状況か。映画が最初の映像で見せる手がかりを、小説は言葉で書いています。ここを丁寧に読むと、あとの心情問題が解きやすくなります。',
    [hd('冒頭の4項目'), ...grid([['いつ', BLUE], ['どこで', GREEN], ['だれが', RED], ['どんな状況か', MAIN]], 30, 44, 15), lb(160, 138, 'ノートの余白に書き出せるかが勝負', 12, C.gray)],
    '冒頭で確認する 4 つ', BLUE),
  FS('「いつ」と「どこで」です。It was the last Saturday of August, and the sun was still strong at five in the afternoon. （8月最後の土曜日、午後5時、日差しがまだ強い）。ケンタは川の近くの古い店の前に立っています。',
    [hd('いつ・どこで'), bx(8, 30, 148, 56, 'いつ\n8月最後の土曜日\n午後5時・日差し強い', C.blue, FILL.blue, 11), bx(164, 30, 148, 56, 'どこで\n川の近くの\n古い店の前', C.green, FILL.green, 11), lb(160, 108, 'the old shop near the river', 13, C.ink, 'middle', true), lb(160, 128, '夏の夕方。まだ明るい。', 12, C.gray)],
    '夏の夕方、川の近くの古い店の前', BLUE),
  FS('「だれが」と「どんな状況か」です。ケンタは15歳。3か月前にこの町へ来たばかりで、知り合いは多くありません。祖父は6月に亡くなりました。母に頼まれ、祖父が作った木箱を店主の伊藤さんに届けにきたのです。',
    [hd('だれが・どんな状況か'), ...grid([['ケンタ（15歳）\n3か月前に町へ来た', RED], ['祖父\n6月に亡くなった', GRAY], ['母\n木箱を頼んだ', MAIN], ['伊藤さん\n店主の老人', GREEN]], 28, 46, 11), lb(160, 138, '祖父が作った木箱を、伊藤さんに届ける', 12, C.ink, 'middle', true)],
    '祖父の木箱を店主に届ける場面', RED),
  FS('では、なぜ過去完了（had ＋過去分詞）で時間軸を戻るのでしょうか。had come / had died / had asked / had made は、すべてケンタが店の前に立っている時点より前の出来事だからです。物語の現在は stood / waited / came out などの過去形で書かれます。',
    [hd('時間の流れ（左 → 右、上 → 下）'), ...grid([['1985年\n祖父が箱を作り始めた', GRAY], ['3か月前\nケンタが町へ来た', GRAY], ['6月\n祖父が亡くなった', GRAY], ['8月最後の土曜\n物語の現在', RED]], 28, 40, 11), lb(160, 124, 'had ＋ 過去分詞 ＝ 現在より前の出来事', 13, C.main, 'middle', true), lb(160, 144, 'stood / waited / came out ＝ 物語の現在', 12, C.red, 'middle', true)],
    '過去完了が出たら、時間軸を一つ戻る', MAIN),
  FS('そして老人が出てきます。Then an old man came out from the back room, looked at the box, and said nothing for a while. His hands were shaking a little. 気持ちは直接書かれていません。動作や様子で表しています。',
    [hd('描写から気持ちを読む'), ...grid([['said nothing\nfor a while\n→ しばらく何も言わない', GRAY], ['His hands were\nshaking a little\n→ 手が少しふるえる', GRAY]], 30, 56, 11), lb(160, 120, 'at last ＝ ようやく口を開いた', 13, C.red, 'middle', true), lb(160, 140, '沈黙は、強い感情の表れ', 12, C.gray)],
    '気持ちは、動作や様子に書かれている', RED),
  FS('では、なぜ作者は気持ちを直接書かないのでしょうか。動作や様子で表すことで、読者が場面から気持ちを想像できるからです。入試の心情問題はここから作られるので、選択肢は必ず本文の描写と一対一で対応させます。',
    qa('気持ちを直接書かないのはなぜ？', '動作や様子で表すと、読者が場面から\n気持ちを想像できるから。\n心情問題は、この描写から作られる。\n選択肢は、描写と1対1で照らし合わせる。', RED, 12),
    '「そう感じそうだから」で選ばない', PURPLE),
  FS('心情の選択肢を判定します。ア「箱を早く受け取りたいといらだっている」→ 10分待たせたのはケンタの側で、根拠がない。ウ「箱の出来ばえに満足していない」→ 不満を示す描写がない。イ「友人が約束を果たしたことに深く心を動かされている」→ 手の震え・沈黙・せりふと一致します。',
    [hd('老人の気持ちは？'), bx(8, 26, 304, 36, 'ア いらだっている → 根拠なし ✕', C.red, FILL.red, 12), bx(8, 68, 304, 36, 'ウ 出来ばえに不満 → 描写なし ✕', C.red, FILL.red, 12), bx(8, 110, 304, 40, 'イ 友人が約束を果たし、深く心を動かされている ◯', C.green, FILL.green, 11)],
    '描写（ふるえ・沈黙・せりふ）と合うのは イ', GREEN),
  FS('せりふの意味です。"He finished it," ... "He started this box in 1985, and he told me that he would give it to me when it was done." 彼は1985年にこの箱を作り始め、完成したらくれると言っていた。would は過去から見た未来で「くれると言っていた」という約束を表します。',
    [hd('最後のせりふ'), bx(8, 30, 304, 52, '"He started this box in 1985, and he told me\nthat he would give it to me when it was done."', C.blue, FILL.blue, 11), ar(160, 86, 160, 104, C.blue), bx(8, 106, 304, 36, '1985年に作り始め、完成したら渡すと約束していた', C.green, FILL.green, 12)],
    '祖父は、完成した箱を届ける約束を守った', GREEN),
], '物語文は冒頭の 4 項目から');

// ── s359 物語文②：気持ちの変化 ──
XF['xf_koko_eigo_s359'] = show([
  FS('心情変化の問題は、「前の気持ち → きっかけ → 後の気持ち」の三つの点で整理します。ミカのスピーチコンテストの話でこの三点を結んでみましょう。',
    [hd('心情変化は三点で整理'), ...row(['前の気持ち', 'きっかけ', '後の気持ち'], 40, MAIN, 13, 52), lb(160, 114, 'この三点を線で結べば、', 13, C.ink, 'middle', true), lb(160, 134, '選択肢は機械的に決まる', 13, C.red, 'middle', true)],
    '前 → きっかけ → 後', BLUE),
  FS('前の気持ちです。Mika did not want to join the speech contest. 人前に立つのがきらいで、舞台に立つと手が冷たくなり言葉が消えました。コンテストの2週間前には、先生に別の生徒と代わってほしいと頼みました。',
    [hd('前の気持ち：逃げたい'), ...grid([['did not want to join\n（出たくない）', RED], ['hated standing in front\nof people（人前がきらい）', RED], ['her hands became cold\n（手が冷たくなる）', GRAY], ['asked to let another\nstudent go instead', GRAY]], 28, 50, 10)],
    '前：逃げたい気持ち', RED),
  FS('きっかけです。先生はミカを音楽室へ連れていきました。そこでは1年生がピアノで同じ8小節を何度も弾いていました。先生は「去年、彼女は人前で弾けなかった」と言いました。ミカは何も言わずに教室へ戻りました。',
    [hd('きっかけ：音楽室の1年生'), bx(14, 30, 140, 56, '1年生が同じ8小節を\n何度も練習している', C.main, FILL.warm, 12), bx(166, 30, 140, 56, '"Last year she could\nnot play in front\nof anyone."', C.blue, FILL.blue, 10), lb(160, 108, '自分と同じ状態から、前に進もうとする人', 13, C.red, 'middle', true), lb(160, 130, '(ミカは何も言わずに戻った ＝ 考えている)', 11, C.gray)],
    'きっかけ ＝ 同じ悩みの人が進む姿', MAIN),
  FS('では、なぜ先生は説得せず音楽室へ連れていったのでしょうか。「がんばれ」とも「出なさい」とも言わず、見せただけです。物語では、言葉で説明しない場面が山場になります。ミカ自身に気づかせるためです。答案例は「ミカと同じように人前で演奏できなかった1年生が、くり返し練習して学校祭で弾こうとしている姿を見せ、ミカ自身に考えさせるため」。',
    qa('先生が説得せず見せたのはなぜ？', '言葉で説明するより、ミカ自身に\n気づかせるほうが伝わるから。\n同じ悩みの1年生が練習する姿を見せ、\n自分で考えさせるため。', GREEN, 12),
    '「なぜ～したのか」は、本文の出来事を答えにする', PURPLE),
  FS('後の気持ちです。当日もまだこわく、手はまた冷たくなりました。でも話しはじめると、あの8小節の音を思い出し、最後まで止まりませんでした。入賞はできませんでしたが、舞台に立ったことをうれしく思いました。',
    [hd('後の気持ち：こわいまま、やりきる'), ...grid([['still felt afraid\n（まだこわい）', GRAY], ['hands were cold again\n（手はまた冷たい）', GRAY], ['did not stop\nuntil the end', GREEN], ['glad that she had\ngone up on the stage', GREEN]], 28, 50, 10)],
    '後：こわさは残ったが、逃げずにやりとげた', GREEN),
  FS('では、なぜ要点は「こわさが消えたこと」ではないのでしょうか。本文は Mika still felt afraid. Her hands were cold again. とこわさが残ったことをはっきり書いているからです。要点は「こわいまま行動できたこと」で、この差が選択肢の正誤を分けます。',
    [hd('消えたのではなく、乗りこえた'), bx(8, 34, 148, 52, '✕ こわさが消えた', C.red, FILL.red, 14), bx(164, 34, 148, 52, '◯ こわいまま\n行動できた', C.green, FILL.green, 14), lb(160, 112, 'ささえたのは先生の言葉ではなく', 12, C.gray), lb(160, 130, 'くり返し聞いた8小節の音', 13, C.red, 'middle', true)],
    '要点 ＝ こわいまま、行動できた', GREEN),
  FS('最後の文 She did not win a prize.（入賞しなかった）に注意します。「努力が実って優勝した」型の選択肢は誤りです。物語文では、結果より心の変化が問われます。',
    [hd('結果より、心の変化'), bx(8, 34, 304, 36, 'She did not win a prize.', C.gray, FILL.gray, 14), ar(160, 74, 160, 94, C.red), bx(8, 96, 304, 40, '「優勝した」型の選択肢 ✕\n問われるのは、心の変化', C.red, FILL.red, 13)],
    '物語文は結果より、気持ちの変化', RED),
  FS('まとめです。①前（逃げたい）②きっかけ（音楽室の1年生）③後（こわいまま、やりとげた）。the same eight bars の bars は「棒」ではなく、音楽の「小節」。文脈から意味を決めます。',
    [hd('三点まとめ'), ...row(['前\n逃げたい', 'きっかけ\n音楽室の1年生', '後\nこわいまま\nやりとげた'], 34, MAIN, 11, 64), lb(160, 118, 'eight bars の bars ＝ 音楽の「小節」', 13, C.ink, 'middle', true), lb(160, 138, '「棒」ではない', 12, C.gray)],
    '三点を結べば、心情の問題は決まる', MAIN),
], '気持ちの変化は三つの点で追う');

// ── s361 物語文④：会話文 ──
XF['xf_koko_eigo_s361'] = show([
  FS('会話が続く場面では said が省かれ、行が変わるたびに話し手が交代します。これが英語の約束です。Sara found her brother in the kitchen at eleven at night. He was making rice balls. この場面で見てみましょう。',
    [hd('行が変わると話し手が変わる'), bx(8, 30, 230, 26, '"What are you doing?" she asked.', C.blue, FILL.blue, 12), bx(82, 62, 230, 26, '"Nothing," Takumi said. "Go to bed."', C.red, FILL.red, 12), bx(8, 94, 230, 26, '"You never cook."', C.blue, FILL.blue, 12), bx(82, 126, 230, 26, '"I said go to bed."', C.red, FILL.red, 12)],
    '青 ＝ サラ ／ 赤 ＝ タクミ。行ごとに交代', BLUE),
  FS('では、なぜ said が省略できるのでしょうか。行が変わるたびに交代する約束を、読み手が知っている前提で書かれているからです。3行目の "You never cook." も said はありませんが、行が変わったのでサラのせりふです。',
    qa('said が省略できるのはなぜ？', '行が変わるたびに話し手が交代する、\nという約束を読み手が知っている前提だから。\n地の文が入ったら、直前に動作をした人物か\nその相手のせりふと考える。', BLUE, 12),
    '交互の原則で、話者を追える', PURPLE),
  FS('口語では語がどんどん省かれます。"Nothing." は I am doing nothing.（何もしていない）、"Four thirty." は I will wake you up at four thirty.（4時半に起こす）、"Bring the salt." は命令文で主語 you が省略されています。前の文から補って読みます。',
    [hd('省略を補う'), ...grid([['"Nothing."\n→ I am doing nothing.', GRAY], ['"Four thirty."\n→ I will wake you up at 4:30.', GRAY], ['"Bring the salt."\n→ (You) bring the salt.', GRAY], ['前の文から\n補って読む', RED]], 28, 50, 11)],
    '短い返事は、前の文から言葉を補う', MAIN),
  FS('せりふの外にある事情を整理します。母は毎朝5時に家を出なければならず、1週間朝食をとっていません。タクミは夜11時におにぎりを作っています。サラには試験があります。だからタクミは何も言わずにいたのです。',
    [hd('せりふの外の事情'), ...grid([['母は朝5時に出発\n1週間朝食なし', GRAY], ['タクミが夜11時に\nおにぎりを作る', RED], ['サラには試験が\nある', BLUE], ['だからタクミは\n黙っていた', GREEN]], 28, 52, 11)],
    '会話の裏の事情は、せりふの外に書かれている', GREEN),
  FS('では、なぜタクミはサラに言わなかったのでしょうか。Because you would want to help, and you have your exam.（言えば君は手伝いたがるだろうし、君には試験がある）と答えています。would は「〜したがるだろう」という推量で、サラに負担をかけまいとしていたのです。',
    qa('タクミが言わなかったのはなぜ？', 'サラは手伝いたがるだろうし、\n試験もあるから。\nwould ＝「～したがるだろう」の推量。\nサラに負担をかけまいとした。', RED, 12),
    'would ＝ 推量（言えば手伝いたがるだろう）', PURPLE),
  FS('Why didn\'t you tell me? は「なぜ言ってくれなかったの」と責める気持ちを含む否定疑問文です。ふつうの Why did you tell me? とは意味が正反対になるので、not を見落とさないようにします。',
    [hd('否定疑問文は、責める気持ち'), bx(8, 32, 304, 32, "Why didn't you tell me?\n＝ なぜ言ってくれなかったの？", C.red, FILL.red, 13), bx(8, 78, 304, 32, "Why did you tell me?\n＝ なぜ言ったの？（意味が逆）", C.gray, FILL.gray, 12), lb(160, 130, 'not を見落とさない', 13, C.red, 'middle', true)],
    "didn't の n't が、感情をこめている", RED),
  FS('最後のやりとりです。サラ「4時半に起こして」→ タクミ「だめだ」→ サラ「じゃあ自分で目覚ましをかける」→ タクミ「4時半。塩を持ってきて」。He almost smiled.（ほとんど笑いかけた）はタクミが折れた瞬間で、Bring the salt. は「明日は一緒に作ろう」という遠回しな受け入れです。',
    [hd('最後のやりとり'), bx(8, 28, 230, 26, 'Wake me up at four thirty.', C.blue, FILL.blue, 12), bx(82, 58, 230, 26, 'No.', C.red, FILL.red, 12), bx(8, 88, 230, 26, 'Then I will set my own alarm.', C.blue, FILL.blue, 12), bx(82, 118, 230, 26, 'Four thirty. Bring the salt.', C.red, FILL.red, 12)],
    'He almost smiled. ── 折れた瞬間', GREEN),
  FS('まとめです。①行が変わると話し手が変わる ②省略は前の文から補う ③短く切り返すほど感情が強い ④直前直後の動作（He almost smiled.）が、二人の関係の変化の根拠になる。brother だけでは兄か弟かわかりません。',
    [hd('まとめ'), ...grid([['行が変わると\n話し手が交代', BLUE], ['省略は前の文\nから補う', GREEN], ['短い返事ほど\n感情が強い', RED], ['動作が関係の\n変化の根拠', MAIN]], 28, 50, 11)],
    'brother は「兄」か「弟」かわからない', MAIN),
], '会話文は、行ごとに話し手が変わる');

// ── s362 物語文⑤：主題 ──
XF['xf_koko_eigo_s362'] = show([
  FS('「この話は何を伝えたいか」を問われたら、あらすじではなく、主人公の変化が示す考え方を答えます。花売りのおばあさんとヒロシの話で、冒頭と結末のヒロシを並べてみましょう。',
    [hd('冒頭のヒロシ と 結末のヒロシ'), bx(8, 30, 148, 70, '冒頭\nHe never bought anything.\n花を買うのは\n金のむだと思っていた', C.gray, FILL.gray, 11), bx(164, 30, 148, 70, '結末\n今も花が役に立つとは\n思わない。でも、役に立つ\n必要のないものもあると知る', C.blue, FILL.blue, 10), ar(156, 65, 164, 65, C.main), lb(160, 122, '二つを並べて、変化を探す', 13, C.red, 'middle', true)],
    '冒頭の考えと結末の考えを並べて比べる', BLUE),
  FS('では、何が変わって何が変わらなかったのでしょうか。変わらないのは「花は実用的でない」という判断です。本文は still does not think that flowers are useful とはっきり書いています。変わったのは「実用性だけが価値ではない」という考え方です。',
    [hd('変わったもの・変わらなかったもの'), bx(8, 30, 148, 56, '変わらない\n花は役に立たない\nという判断', C.gray, FILL.gray, 12), bx(164, 30, 148, 56, '変わった\n役に立つかどうかが\n価値のすべてではない', C.green, FILL.green, 12), lb(160, 110, '×「花は役に立つと気づいた」', 13, C.red, 'middle', true), lb(160, 132, '本文は still not useful と書いている', 12, C.gray)],
    '主題は「変化した部分」に宿る', GREEN),
  FS('主題を一文で言うと「ものの価値は、役に立つかどうかだけでは決まらない」です。選択肢の主題は抽象的な言い方になり、具体的すぎる選択肢は要約にすぎません。',
    [hd('主題を一文で'), bx(8, 34, 304, 56, 'ものの価値は、役に立つかどうか\nだけでは決まらない', C.red, FILL.red, 16), lb(160, 116, '主題 ＝ 変化が示す価値観', 14, C.ink, 'middle', true), lb(160, 138, '出来事の要約ではない', 12, C.gray)],
    '主題は、抽象的な一文で言える', RED),
  FS('では、あらすじではだめなのはなぜでしょうか。「おばあさんが入院した」「ヒロシが植物を買った」は出来事の要約で、問われている「その出来事を通して見える考え方」ではないからです。主題を問う設問にあらすじを書いても点になりません。',
    qa('あらすじを書いても点にならないのは？', '問われているのは出来事そのものではなく、\n出来事を通して見える考え方だから。\n「入院した」「植物を買った」は要約。\n主人公の変化が示す価値観を一言で言う。', YELLOW, 12),
    '主人公の何が変わったのかを一言で', PURPLE),
  FS('この物語では、ヒロシの気持ちがほとんど書かれていません。書かれているのは行動だけです。ベンチが空 → 新聞売りに聞く → 小さな植物を買う → 毎朝水をやる → 初めて花を買う。行動の変化そのものが答えの根拠になります。',
    [hd('行動の変化'), ...row(['ベンチが\n空', '入院と\n聞く', '植物を買う\n毎朝水やり', '初めて\n花を買う'], 34, MAIN, 11, 56, 12), lb(160, 114, '気持ちは書かれず、行動だけが書かれている', 12, C.ink, 'middle', true), lb(160, 134, '「金のむだ」と言っていた人が、手間をかけるように', 11, C.gray)],
    '行動の変化が、答えの根拠になる', MAIN),
  FS('では、なぜ He did not know why.（なぜだかわからなかった）と書かれているのでしょうか。理屈では説明できない気持ちが動いたことを示すためです。ここが物語の中心です。答案は「ベンチが空だった・入院した・その日の夕方に買った」という本文の事実を根拠に書きます。',
    qa('He did not know why. と書くのは？', '植物を買った理由を本人も説明できない。\n理屈では説明できない気持ちが\n動いたことを示すため。\n本文の事実（空のベンチ・入院）を根拠に書く。', PURPLE, 12),
    '「～と考えられる」の問いは、本文の事実を根拠に', PURPLE),
  FS('おばあさんは gave him one more flower than he had paid for.（払った分より1本多く花を渡した）。言葉は "Thank you." だけでした。花1本が言葉の代わりになっています。than 以下の過去完了は、渡した時点より前に支払ったことを示します。',
    [hd('言葉の代わりの一本'), bx(8, 30, 140, 44, '払った本数', C.gray, FILL.gray, 14), bx(172, 30, 140, 44, '渡された本数\n＋ 1本', C.red, FILL.red, 13), ar(148, 52, 172, 52, C.main), lb(160, 98, '"Thank you." だけ。花1本が言葉の代わり', 12, C.ink, 'middle', true), lb(160, 120, 'than he had paid for ＝ 払っていた（本数）より', 12, C.gray)],
    'one more flower than he had paid for', GREEN),
  FS('まとめです。①冒頭と結末の考えを並べる ②変わらなかったもの・変わったものを分ける ③主題を抽象的な一文で言う ④気持ちが書かれていないときは行動の変化を根拠にする。',
    [hd('まとめ'), ...grid([['冒頭と結末を\n並べる', BLUE], ['変わったものを\n探す', GREEN], ['主題は\n抽象的な一文', RED], ['行動の変化が\n根拠', MAIN]], 28, 50, 12)],
    'あらすじではなく、変化が示す考え方', MAIN),
], '主題は、主人公の変化から');

// ── s363 説明文①：定義 → 例 → まとめ ──
XF['xf_koko_eigo_s363'] = show([
  FS('知らない語が題名や1文目に出てきても、説明文は必ず定義を置いてくれます。The word means making new things by copying nature. 「biomimicry とは、自然をまねて新しいものを作ることだ」。means の後ろが定義です。',
    [hd('biomimicry の定義'), bx(8, 30, 304, 40, 'The word means making new things\nby copying nature.', C.blue, FILL.blue, 13), ar(160, 74, 160, 94, C.red), bx(8, 96, 304, 40, '自然をまねて新しいものを作ること', C.red, FILL.red, 15)],
    'means の後ろが定義', BLUE),
  FS('では、知らない語に出会ったらどう探すのでしょうか。定義の合図（means / is / is called / in other words）を探します。さらに次の文が、定義を具体的な手順に言いかえています。①観察する ②役に立つ設計を見つける ③同じ考えを機械や建物に使う。',
    [hd('定義の合図'), ...grid([['〜 means 〜', BLUE], ['〜 is 〜', BLUE], ['This is called 〜', BLUE], ['in other words', BLUE]], 28, 26, 12), ...row(['① 観察する', '② 設計を\n見つける', '③ 同じ考えを\n機械や建物に'], 100, GREEN, 11, 40)],
    '定義の合図 → 手順に言いかえる', BLUE),
  FS('例1は新幹線とカワセミです。トンネルを出るときの大きな音が問題でした。カワセミはほとんど水しぶきを立てずに水に入ります。くちばしが長く細いからです。先頭を似た形にすると、音が小さくなり、電気の使用量も減りました。',
    [hd('例1：新幹線とカワセミ'), ...row(['トンネルを出る\nときの大きな音', 'カワセミの\nくちばしは\n長く細い', '似た形の\n先頭部に'], 30, MAIN, 11, 60), ar(160, 94, 160, 112, C.green), bx(30, 114, 260, 36, '音が小さく ＋ 電気の使用量も減った', C.green, FILL.green, 13)],
    '自然の観察 → 応用 → 性能アップ', MAIN),
  FS('例2はヤモリとテープです。ヤモリの足には、とても小さな毛が何百万本もあって、壁を歩けます。科学者は同じ構造のテープを作りました。のりなしでくっつき、何度でも使えます。',
    [hd('例2：ヤモリとテープ'), ...row(['ヤモリの足の\n何百万本の毛', '同じ構造の\nテープを作る', 'のりなしで付き\n何度も使える'], 34, GREEN, 11, 60), lb(160, 118, 'these hairs let the animal walk on a wall', 12, C.ink, 'middle', true), lb(160, 138, 'let ＋ 目的語 ＋ 動詞の原形（to walk ではない）', 11, C.gray)],
    '例1と同じ流れ：観察 → 応用 → 性能アップ', GREEN),
  FS('では、二つの例の共通点は何でしょうか。どちらも「自然の観察 → 人工物への応用 → 性能の向上」という同じ流れです。例が二つ以上あるときは、共通点こそが筆者の言いたいことで、最終段落につながります。',
    qa('例が二つあるとき、何を探す？', '二つの例に共通する流れを探す。\n「自然の観察 → 人工物への応用 →\n性能の向上」\nこの共通点が筆者の言いたいこと。', GREEN, 13),
    '共通点 ＝ 筆者の主張', PURPLE),
  FS('最終段落です。Nature has been testing designs for millions of years. 「自然は何百万年も設計を試し続けてきた」。has been ＋ -ing は「過去から今まで続いている」を表し、for millions of years という期間とセットで使われます。',
    [hd('現在完了進行形'), bx(8, 30, 304, 32, 'has been testing ... for millions of years', C.blue, FILL.blue, 13), ln(30, 100, 290, 100, C.gray, false, 2), ar(30, 100, 290, 100, C.blue), lb(30, 120, '過去', 12, C.gray, 'start'), lb(290, 120, '今', 12, C.gray, 'end'), lb(160, 90, 'ずっと続いている', 12, C.blue, 'middle', true)],
    'has been ＋ -ing ＝ 今まで続いている', BLUE),
  FS('では、なぜ筆者は「自然が実験をしてきた」と書くのでしょうか。生き物が何百万年かけて変化し、役に立つ設計だけが残ってきたからです。we are using the results of a very long experiment（とても長い実験の結果を使っている）は比喩で、実際に実験をしているわけではありません。',
    qa('自然が「実験した」と書くのは？', '生き物が何百万年も変化して、\n役に立つ設計だけが残ってきたから。\nそれを「長い実験」にたとえた比喩。\n自然が本当に実験をしたわけではない。', PURPLE, 12),
    '比喩は説明文の結びでよく使われる', PURPLE),
  FS('まとめです。説明文は「定義 → 具体例（2つ以上）→ まとめ」の型。設問も三種類に決まっています。①用語の定義 ②例の内容 ③筆者の主張。段落の役割を判定してから、探す場所を決めます。',
    [hd('説明文の型'), ...row(['定義', '具体例\n（2つ以上）', 'まとめ'], 34, MAIN, 13, 48), ...grid([['用語の定義\n→ 第1段落', BLUE], ['例の内容\n→ 中の段落', GREEN], ['筆者の主張\n→ 最終段落', RED]], 100, 40, 11, 3)],
    '段落の役割がわかれば、探す場所が決まる', MAIN),
], '説明文は「定義 → 例 → まとめ」');

// ── s365 説明文③：原因と結果の連鎖 ──
XF['xf_koko_eigo_s365'] = show([
  FS('北アメリカの西海岸には、ケルプという海藻の大きな海中の森があります。ケルプは1日に30センチ育ち、たくさんの魚がそこにすんでいます。この森が、ラッコがいなくなったことで消えました。間にウニをはさむと、一本の線になります。',
    [hd('ケルプの森とラッコ'), bx(8, 30, 148, 50, 'ケルプの森\n1日に30cm育つ\nたくさんの魚がすむ', C.green, FILL.green, 11), bx(164, 30, 148, 50, 'ラッコがいなくなった', C.main, FILL.warm, 12), lb(160, 104, 'ラッコと森は、すぐには結びつかない', 13, C.ink, 'middle', true), lb(160, 126, '→ 間にウニを入れて、矢印でつなぐ', 13, C.red, 'middle', true)],
    '途中を一つ抜くと、意味が通らない', BLUE),
  FS('減少の連鎖の前半です。19世紀、毛皮が高価だったので、ハンターがラッコをほとんど殺しました。ラッコはウニを食べるので、いなくなったあと、ウニの数が急に増えました。',
    [hd('減少の連鎖①'), bx(8, 30, 140, 44, 'ラッコが乱獲された\n（毛皮が高価）', C.main, FILL.warm, 11), ar(148, 52, 172, 52, C.red), bx(172, 30, 140, 44, 'ウニが急増\n（食べる者がいない）', C.red, FILL.red, 11), lb(160, 98, 'because sea otters eat sea urchins', 12, C.ink, 'middle', true)],
    'ラッコがいない → ウニが増える', RED),
  AS('連鎖の中ほどです。ウニはケルプを食べます。ラッコがいなくなってウニを食べる者がいなくなると、ウニはケルプの根まで食べ、森は死にました。',
    [ar(240, 76, 240, 98, C.red), bx(172, 100, 140, 44, 'ケルプの根を\n食べつくす', C.red, FILL.red, 11), ar(172, 122, 148, 122, C.red), bx(8, 100, 140, 44, '海の森が\n死んだ', C.red, FILL.red, 12)],
    'With no otters to eat them, ... the forests died', RED),
  FS('連鎖の最後です。森に住んでいた魚が住みかを失い、漁船の水揚げも減りました。ラッコの乱獲から漁獲の減少まで、一本の鎖でつながっています。',
    [hd('減少の連鎖：全体'), ...row(['ラッコ\n乱獲', 'ウニ\n急増', '森が\n死ぬ'], 26, RED, 11, 40, 14), ar(160, 70, 160, 88, C.red), ...row(['魚が住みかを\n失う', '漁獲が\n減る'], 90, MAIN, 11, 44, 18)],
    'ラッコ → ウニ → ケルプ → 魚 → 漁獲', RED),
  FS('では、なぜ「ラッコが減った → 海藻が消えた」だけでは説明にならないのでしょうか。ラッコは海藻を食べず、ウニを食べるからです。間のウニを入れて、はじめて原因と結果がつながります。',
    qa('ウニを飛ばすと説明にならないのは？', 'ラッコが食べるのは海藻ではなくウニ。\nラッコ →（食べる）→ ウニ →（食べる）→ ケルプ\n間のウニを抜くと、つながりが消える。', BLUE, 12),
    '連鎖は、一段も抜かさない', PURPLE),
  FS('回復の連鎖も同じ鎖を逆向きにたどります。20世紀にラッコが保護され、数がゆっくり増えました。ラッコが戻った場所では、ケルプの森も10年以内に戻りました。ウニが減ったという途中の段は本文にはありませんが、論理上そうなります。',
    [hd('回復の連鎖'), ...row(['ラッコを\n保護', 'ラッコが\n増える', '（ウニが\n減る）', '森が10年\nで戻る'], 36, GREEN, 11, 56, 12), lb(160, 118, '（ ）は本文に書かれていない、論理上の段', 12, C.gray)],
    '減少の鎖を、逆向きにたどる', GREEN),
  FS('With no otters to eat them の them はウニを指します。「ウニを食べるラッコがいないので」。to eat them が otters を説明する不定詞です。理由を問われたら、連鎖の一つ前を答えます。Why did the number of sea urchins increase? ― Because the sea otters that ate them were killed by hunters.',
    [hd('them ＝ ウニ'), bx(8, 30, 304, 32, 'With no otters to eat them, ...', C.gray, FILL.gray, 13), lb(160, 80, 'them ＝ sea urchins', 14, C.red, 'middle', true), bx(8, 98, 304, 44, '「なぜウニが増えた？」の答えは直前の段\n→ ウニを食べるラッコが殺されたから', C.green, FILL.green, 12)],
    '「なぜ」と聞かれたら、連鎖の一つ前', RED),
  FS('最終段落です。One animal can hold a whole system together. 一つの動物が生態系全体を支えうる。アーチの頂点の石（要石）が他の石を支えているのにたとえ、そのような動物を keystone species と呼びます。after ～ は時間の「あと」ではなく「～にちなんで」。',
    [hd('keystone species ＝ 要石'), ...[0, 1, 2, 3, 4].map((i) => bx(40 + i * 48, 70 + Math.abs(2 - i) * 14, 44, 24, '', C.gray, FILL.gray)), bx(136, 40, 48, 24, '要石', C.red, FILL.red, 12), lb(160, 138, '一つ抜くと、全体がくずれる', 13, C.red, 'middle', true)],
    '一つの動物が、生態系全体を支える', MAIN),
], '原因と結果の連鎖を矢印でつなぐ');

// ── s374 内容一致②：言いかえ ──
XF['xf_koko_eigo_s374'] = show([
  FS('正解の選択肢は、本文と同じ語では書かれていません。作問者は本文を別の言い方に置きかえて正解を作ります。パン屋のケンの話で、本文と言いかえを並べてみましょう。',
    [hd('本文 → 言いかえ'), bx(8, 28, 148, 38, 'did not lower his prices', C.gray, FILL.gray, 11), bx(164, 28, 148, 38, 'kept his prices the same', C.green, FILL.green, 11), bx(8, 74, 148, 38, 'sells bread at half the price', C.gray, FILL.gray, 11), bx(164, 74, 148, 38, 'is much cheaper', C.green, FILL.green, 11), ar(156, 47, 164, 47, C.main), ar(156, 93, 164, 93, C.main), lb(160, 134, '意味は同じ、言い方がちがう', 13, C.red, 'middle', true)],
    '同じ意味を、ちがう語で言う', BLUE),
  FS('では、なぜ「同じ語があるか」ではなく「同じ意味か」で判定するのでしょうか。正解は言いかえで作られ、誤りの選択肢は本文の語をそのまま使いながら関係を変えてあることが多いからです。',
    qa('語の一致で選んではいけないのは？', '正解は本文を言いかえて作られる。\n誤りの選択肢は、本文の語をそのまま\n使って、関係だけ変えてあることが多い。\n語の一致は、手がかりにならない。', RED, 12),
    '「同じ語」ではなく「同じ意味」で判定', PURPLE),
  FS('時刻から時間の長さへの言いかえも頻出です。He opens the shop at seven in the morning, but he starts his work at three. 7－3＝4なので、「開店の4時間前に仕事を始める」と言いかえられます。',
    [hd('時刻 → 時間の長さ'), ln(30, 70, 290, 70, C.gray, false, 2), ci(60, 70, 10, '3', C.main, FILL.warm, 11), ci(250, 70, 10, '7', C.red, FILL.red, 11), lb(60, 48, '仕事を始める', 12, C.main), lb(250, 48, '店を開ける', 12, C.red), ar(70, 92, 240, 92, C.green), lb(160, 112, '7 － 3 ＝ 4時間', 15, C.green, 'middle', true), lb(160, 136, '開店の4時間前に仕事を始める', 12, C.ink)],
    '時刻 → 時間の長さに言いかえる', GREEN),
  FS('具体から抽象への言いかえもあります。flour / wheat（小麦粉・小麦）→ materials / ingredients（材料）。bread（パン）→ products（商品）。選択肢が抽象語で書かれていても、本文の具体語がそれにあたるなら一致です。',
    [hd('具体 → 抽象'), bx(8, 30, 140, 34, 'flour / wheat', C.gray, FILL.gray, 13), bx(172, 30, 140, 34, 'materials / ingredients', C.green, FILL.green, 11), bx(8, 76, 140, 34, 'bread', C.gray, FILL.gray, 13), bx(172, 76, 140, 34, 'products', C.green, FILL.green, 13), ar(148, 47, 172, 47, C.main), ar(148, 93, 172, 93, C.main), lb(160, 134, '抽象語でも、具体語に当たれば一致', 12, C.red, 'middle', true)],
    '小麦粉 → 材料 ／ パン → 商品', MAIN),
  FS('誤りの選択肢の作られ方は四つの型です。①関係を逆にする（値段を下げた）②程度を強める（some → all）③本文にない因果を作る ④主体を入れかえる（子どもがパンを買う）。本文の語がそのまま使われていても誤りです。',
    [hd('誤りの4つの型'), ...grid([['① 関係を逆に\nlowered his prices', RED], ['② 程度を強める\nSome → All', RED], ['③ ない因果を作る\n子ども向け→スーパーの客が減る', RED], ['④ 主体を入れかえ\n子どもが買う（実は作る）', RED]], 28, 52, 10)],
    '本文の語を使っていても、誤りになる', RED),
  FS('では、なぜ本文の語がそのまま並ぶ選択肢ほど疑うのでしょうか。作問者が誤りを作るとき、読み手が「見覚えのある語」で選んでしまう心理を利用するからです。言いかえられている選択肢ほど、正解の可能性が高くなります。',
    qa('本文の語が並ぶ選択肢を疑うのは？', '作問者は、読み手が「見覚えのある語」で\n選んでしまうことを利用して誤りを作る。\n逆に、言いかえられている選択肢は\n正解である可能性が高い。', YELLOW, 12),
    '選択肢ごとに「本文のどの一文の言いかえか」を特定する', PURPLE),
  FS('正解の例を見ます。「ケンは値段では勝てないと考え、値下げではなく別の方法で客とのつながりを作ろうとした」は、第2〜4段落全体の言いかえです。本文の語はほとんど使われていませんが、内容は一致しています。',
    [hd('正解の選択肢'), bx(8, 30, 304, 60, 'ケンは値段では勝てないと考え、値下げではなく\n別の方法で客とのつながりを作ろうとした', C.green, FILL.green, 12), ar(160, 94, 160, 112, C.green), bx(8, 114, 304, 30, '第2〜4段落全体の言いかえ', C.main, FILL.warm, 13)],
    '本文の語を使わなくても、内容が合えば正解', GREEN),
  FS('a shop is not only a place to buy things は「店は物を買う場所であるだけではない」という部分否定です。「店は物を買う場所ではない」ではありません。not only ～ の否定範囲に注意します。',
    [hd('not only の否定範囲'), bx(8, 30, 304, 34, 'a shop is not only a place to buy things', C.gray, FILL.gray, 12), bx(8, 76, 148, 44, '◯ 物を買う場所\nであるだけではない', C.green, FILL.green, 11), bx(164, 76, 148, 44, '✕ 物を買う場所\nではない', C.red, FILL.red, 11)],
    '部分否定 ＝ 「それだけではない」', MAIN),
], '言いかえを見抜く');

// ── s377 会話文②：電話 ──
XF['xf_koko_eigo_s377'] = show([
  FS('電話の会話は使う表現がごく限られていて、毎年の入試でそのまま得点になります。流れは「名乗る → 取りつぐ → 不在のときの対応」の三場面で決まっています。',
    [hd('電話の三場面'), ...row(['① 名乗る\n呼び出す', '② 取りつぐ\n本人が出る', '③ 不在のとき'], 36, BLUE, 12, 60), lb(160, 118, '順番はいつも同じ', 13, C.ink, 'middle', true), lb(160, 138, '型ごと覚えるのが速い', 12, C.gray)],
    '電話は「用件 → 応答 → 確認」の順に進む', BLUE),
  FS('場面①。電話で自分を名乗るときは I am Ken. ではなく This is Ken. か Ken speaking. です。Hello. This is Ken Sato. May I speak to Lisa, please? 呼び出すのは May I speak to ～? / Can I speak to ～?',
    [hd('① 名乗る・呼び出す'), bx(8, 30, 304, 52, 'Hello. This is Ken Sato.\nMay I speak to Lisa, please?', C.blue, FILL.blue, 14), bx(60, 94, 200, 28, '✕ I am Ken.  ◯ This is Ken.', C.red, FILL.red, 12)],
    '電話では This is ～ で名乗る', BLUE),
  FS('では、なぜ I am ではなく This is なのでしょうか。電話は相手の顔が見えないので、決まり文句の This is ～ で名乗るのが約束になっているからです。人を紹介するときも This is my friend, Ken. と同じ形を使います。',
    qa('I am Ken. ではなく This is Ken. ？', '電話は相手の顔が見えないので、\n決まり文句 This is ～ で名乗るのが約束。\n人を紹介するときも This is my friend, Ken.\nと同じ形を使う。', PURPLE, 12),
    '電話・紹介は This is ～', PURPLE),
  FS('場面②。本人が出た場合は Speaking. か This is Lisa.。別の人が出た場合は Just a moment, please. / Hold on, please. / I\'ll get her.（呼んできます）と取りつぎます。',
    [hd('② 取りつぐ・本人が出る'), ...grid([['本人が出た\nSpeaking.\nThis is Lisa.', GREEN], ['別の人が出た\nHold on, please.\nI\'ll get her.', BLUE]], 30, 74, 12), lb(160, 126, 'May I speak to Lisa?  → 空所の直後で判断', 12, C.gray)],
    '本人なら Speaking.／別人なら取りつぐ', GREEN),
  FS('場面③。I\'m sorry, but she isn\'t here right now.（あいにくおりません）。Can I take a message?（伝言を承りましょうか）に、かけた側は Yes, please. Could you tell her to call me back? か No, thank you. I\'ll call again later. で答えます。',
    [hd('③ 不在のとき'), bx(8, 28, 304, 28, "I'm sorry, but she isn't here right now.", C.gray, FILL.gray, 12), bx(8, 62, 304, 28, 'Can I take a message?', C.blue, FILL.blue, 12), bx(8, 96, 148, 50, 'Yes, please.\nCould you tell her\nto call me back?', C.green, FILL.green, 10), bx(164, 96, 148, 50, "No, thank you.\nI'll call again\nlater.", C.green, FILL.green, 10)],
    '伝言を受けるか、かけ直すか', GREEN),
  FS('では、take a message と leave a message はどう使い分けるのでしょうか。take は「預かる」ので受ける側、leave は「残す」ので、かける側です。Can I take a message?（受ける側）と Can I leave a message?（かける側）は立場が逆になります。',
    qa('take と leave の使い分けは？', 'take a message ＝ 伝言を預かる（受ける側）\nleave a message ＝ 伝言を残す（かける側）\n立場が逆になる。', BLUE, 13),
    'take ＝ 受ける側 ／ leave ＝ かける側', PURPLE),
  FS('設問のねらいは三つです。①空所の応答（直後を見る。別人なら Hold on.、本人なら Speaking.）②かけた側の目的（I\'m calling about ～ の about のあと）③伝言の内容（数字に注意。ten thirty, not ten なら答えは10:30）。',
    [hd('ねらわれる三つ'), ...grid([['空所の応答\n→ 空所の直後を見る', BLUE], ['かけた目的\n→ about のあと', GREEN], ['伝言の内容\n→ 数字、言い直し', RED], ['10:30\nten thirty, not ten', MAIN]], 28, 50, 11)],
    'ten thirty, not ten → 答えは 10:30', RED),
  FS('wrong number（間違い電話）の会話も出ます。I think you have the wrong number. と言われたら、かけた側は I\'m sorry. と謝ります。ここで Thank you. を選ぶと誤りです。',
    [hd('間違い電話'), bx(8, 30, 304, 32, 'I think you have the wrong number.', C.gray, FILL.gray, 13), ar(160, 66, 160, 86, C.red), bx(40, 88, 240, 34, "I'm sorry.  ◯", C.green, FILL.green, 15), lb(160, 140, '✕ Thank you. は選ばない', 12, C.red, 'middle', true)],
    '謝る ── I\'m sorry.', MAIN),
], '電話の会話は、三場面で組み立てる');

export const XF_KEH_FIGURES: Record<string, DiagramFigure> = XF;

export const XF_KEH_SECTIONS: Record<string, string> = {
  'koko_eigo_s340#1': 'xf_koko_eigo_s340',
  'koko_eigo_s341#1': 'xf_koko_eigo_s341',
  'koko_eigo_s343#1': 'xf_koko_eigo_s343',
  'koko_eigo_s345#1': 'xf_koko_eigo_s345',
  'koko_eigo_s346#1': 'xf_koko_eigo_s346',
  'koko_eigo_s348#1': 'xf_koko_eigo_s348',
  'koko_eigo_s349#1': 'xf_koko_eigo_s349',
  'koko_eigo_s351#1': 'xf_koko_eigo_s351',
  'koko_eigo_s352#1': 'xf_koko_eigo_s352',
  'koko_eigo_s354#1': 'xf_koko_eigo_s354',
  'koko_eigo_s355#1': 'xf_koko_eigo_s355',
  'koko_eigo_s357#1': 'xf_koko_eigo_s357',
  'koko_eigo_s358#1': 'xf_koko_eigo_s358',
  'koko_eigo_s359#1': 'xf_koko_eigo_s359',
  'koko_eigo_s361#1': 'xf_koko_eigo_s361',
  'koko_eigo_s362#1': 'xf_koko_eigo_s362',
  'koko_eigo_s363#1': 'xf_koko_eigo_s363',
  'koko_eigo_s365#1': 'xf_koko_eigo_s365',
  'koko_eigo_s374#2': 'xf_koko_eigo_s374',
  'koko_eigo_s377#0': 'xf_koko_eigo_s377',
};
