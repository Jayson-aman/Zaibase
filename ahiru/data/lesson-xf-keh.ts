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
  bx(12, 8, 296, 40, 'なぜ？ ' + q, PURPLE[0], PURPLE[1], 12),
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
    '要旨 ＝ 重要 → 減少 → 市民にできること → 農家にできること', MAIN),
  FS('では、なぜ英語は最初に言いたいことを書くのでしょうか。英語では結論を最初に宣言してから説明に入る書き方が習慣だからです。だから1文目だけをたどると全体像が見え、時間のない試験でも内容がつかめます。',
    qa('なぜ1文目に言いたいことがある？', '英語は、最初に言いたいことを宣言して\nから説明を始める書き方が習慣だから。\n1文目だけたどれば全体像が見え、\n時間のない試験で役に立つ。', BLUE, 12),
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
    [hd('題名の選択肢'), ...grid([['ア Apples and Strawberries\n→ 狭すぎる', YELLOW], ['イ How to Keep Bees at Home\n→ 本文にない', RED], ['ウ Honeybees and What We Can Do\n→ 全体をおおう ◯', GREEN], ['エ The History of Honey\n→ 本文にない', RED]], 30, 50, 10)],
    '要旨は「全体をおおっているか」で選ぶ', GREEN),
  FS('1文目が疑問文や短い導入文のときは、2文目が主題文になることもあります。1文目が抽象的でなければ次の文を見ます。more bees mean more fruit は「ミツバチが増えれば果実も増える」という more ～ more ～ の比例の言い方です。',
    [hd('例外に注意'), bx(8, 30, 304, 38, '1文目が疑問文・短い導入文\n→ 2文目が主題文のことも', C.main, FILL.yellow, 12), bx(8, 82, 304, 38, 'more bees mean more fruit\n＝ ミツバチが増えれば果実も増える', C.green, FILL.green, 12)],
    '1文目が抽象的でなければ、次の文を見る', MAIN),
], '各段落の 1 文目 ＝ 主題文');

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
};
