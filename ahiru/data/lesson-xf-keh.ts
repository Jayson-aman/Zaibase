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
    [hd('do that ＝ 動作をまるごと受ける'), bx(8, 30, 304, 32, 'Some students left their lunch on their plates every day.', C.gray, FILL.gray, 11), bx(8, 76, 304, 32, 'The teachers told us not to do that,', C.gray, FILL.gray, 12), ar(160, 110, 160, 74, C.red), lb(160, 130, 'that ＝ 給食を皿に残すこと', 13, C.red, 'middle', true)],
    'do that ＝ 前に出た動作そのもの', RED),
  FS('That is true not only about food but also about electricity, water, and time. の That は、直前の文 When we cannot see a problem, we cannot solve it.（問題が見えないと解決できない）を指します。少し離れた内容を受けるときは that が使われやすくなります。',
    [hd('that は少し離れた内容も受ける'), bx(8, 30, 304, 34, 'When we cannot see a problem, we cannot solve it.', C.green, FILL.green, 12), ar(160, 94, 160, 68, C.red), bx(8, 96, 304, 34, 'That is true not only about food ...', C.gray, FILL.gray, 12), lb(160, 144, 'That ＝ 問題が見えないと解決できないこと', 12, C.red, 'middle', true)],
    'that ＝ 直前の文の内容全体', GREEN),
  FS('では、this が内容を指すのか、名詞を修飾しているのかは、どう見分けるのでしょうか。後ろに名詞が続けば（this experience）名詞を修飾しています。単独で主語になっているときは（This was ～）内容を指している可能性が高いのです。',
    qa('this が内容か、名詞の修飾か？', 'this ＋ 名詞（this experience）\n→ その名詞を説明。本文から特定する。\nThis が単独で主語（This was ～）\n→ 内容を指している可能性が高い。', BLUE, 12),
    '後ろに名詞があるか、単独かを見る', PURPLE),
  FS('記述問題は「〜こと」で終えます。例：下線部 This の内容は「2週間にわたって給食の残りの重さを量って記録し、その数字を教室の壁にはり出して全員が見られるようにしたこと」。30字以内なら中心だけ残します。',
    [hd('答え方：「〜こと」で終える'), bx(8, 30, 304, 52, '残した食べ物の重さを記録して教室にはり出したこと（26字）', C.red, FILL.red, 12), lb(160, 106, '手順：①指示語の文を読む ②直前を読む', 12, C.ink), lb(160, 124, '③中心を一文にまとめる ④入れ直して確かめる', 12, C.ink)],
    '指示語（これ・それ）を答えに残さない', RED),
  FS('まとめです。this / that の後ろに名詞がなければ、内容を指しているかもしれません。直前の1〜3文から動作の中心を取り出し、「〜こと」でまとめます。3.2 → 1.8 → 0.6kg の数値は、変化を聞かれたときだけ使います。',
    [hd('まとめ'), ...grid([['名詞が見つからない\n→ 内容全体', BLUE], ['do that\n→ 動作ごと', RED], ['that\n→ 離れた内容も', GREEN], ['答えは\n「〜こと」', MAIN]], 34, 44, 11)],
    '指示語の記述は「短くまとめる力」', MAIN),
], 'this / that は、文の内容全体も指す');

export const XF_KEH_FIGURES: Record<string, DiagramFigure> = XF;

export const XF_KEH_SECTIONS: Record<string, string> = {
  'koko_eigo_s340#1': 'xf_koko_eigo_s340',
  'koko_eigo_s341#1': 'xf_koko_eigo_s341',
  'koko_eigo_s343#1': 'xf_koko_eigo_s343',
  'koko_eigo_s345#1': 'xf_koko_eigo_s345',
  'koko_eigo_s346#1': 'xf_koko_eigo_s346',
};
