// 中学受験 英語（小4〜小6）単元の動く図解スライド（図のなかった単元に1つずつ）。
// 「なぜ？」の連鎖で7枚以上。上に図、下の帯（band）にそのスライドのひとこと。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, show, band, fresh } from './diagram-kit';

const K = {
  b: [C.blue, FILL.blue],
  g: [C.green, FILL.green],
  r: [C.red, FILL.red],
  m: [C.main, FILL.warm],
  p: [C.purple, FILL.purple],
  y: [C.main, FILL.yellow],
  n: [C.gray, FILL.gray],
} as const;
type KK = keyof typeof K;
type Wd = [string, KK, string?];

const U = (s: string) => [...s].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0);
const widest = (t: string) => Math.max(...t.split('\n').map(U));

/** 下の帯にひとこと（1行） */
const cap = (t: string, color: string = C.ink, size = 12) => band(150, lb(160, 190, t, size, color, 'middle', true));
/** 下の帯に、小さな見出し＋枠つきのひとこと */
const cap2 = (t1: string, t2: string, k: KK = 'm', size = 13) =>
  band(150, lb(160, 166, t1, 11, C.gray, 'middle'), bx(16, 178, 288, 46, t2, K[k][0], K[k][1], size));

/** 語の箱を横にならべる（必要なら縮める）。tag は箱の下の小さな札（S・V・C など）。 */
function lay(ws: Wd[], x0: number, x1: number, size: number, gap = 4) {
  const raw = ws.map((w) => widest(w[0]) * size * 0.95 + 14);
  const sum = raw.reduce((a, b) => a + b, 0);
  const k = Math.min(1, (x1 - x0 - gap * (ws.length - 1)) / sum);
  const total = sum * k + gap * (ws.length - 1);
  let x = x0 + (x1 - x0 - total) / 2;
  return raw.map((r) => {
    const w = r * k;
    const o = { x, w };
    x += w + gap;
    return o;
  });
}
function row(ws: Wd[], y: number, o?: { h?: number; size?: number; x0?: number; x1?: number; gap?: number }): DiagramElement[] {
  const h = o?.h ?? 30;
  const size = o?.size ?? 13;
  const pos = lay(ws, o?.x0 ?? 8, o?.x1 ?? 312, size, o?.gap ?? 4);
  const out: DiagramElement[] = [];
  ws.forEach((w, i) => {
    out.push(bx(pos[i].x, y, pos[i].w, h, w[0], K[w[1]][0], K[w[1]][1], size));
    if (w[2]) out.push(lb(pos[i].x + pos[i].w / 2, y + h + 11, w[2], 10, K[w[1]][0], 'middle', true));
  });
  return out;
}
/** row と同じ配置で、i 番目の箱の中心 x を返す */
const cx = (ws: Wd[], i: number, o?: { size?: number; x0?: number; x1?: number; gap?: number }) => {
  const p = lay(ws, o?.x0 ?? 8, o?.x1 ?? 312, o?.size ?? 13, o?.gap ?? 4)[i];
  return p.x + p.w / 2;
};
/** 英文（または見出し）を中央に1行 */
const en = (t: string, y: number, size = 14, color: string = C.ink) => lb(160, y, t, size, color, 'middle', true);
/** 日本語の訳など、小さな灰色の1行 */
const jp = (t: string, y: number, size = 11, color: string = C.gray) => lb(160, y, t, size, color, 'middle');
/** ○の箱・×の箱 */
const okb = (x: number, y: number, w: number, t: string, size = 12) => bx(x, y, w, 26, t, C.green, FILL.green, size);
const ngb = (x: number, y: number, w: number, t: string, size = 12) => bx(x, y, w, 26, t, C.red, FILL.red, size);
/** 表（cells[行][列]）。先頭行を見出し色にする。 */
function grid(cells: string[][], x: number, y: number, cw: number[], rh: number, o?: { size?: number; head?: KK; body?: KK; firstCol?: KK }): DiagramElement[] {
  const out: DiagramElement[] = [];
  const size = o?.size ?? 12;
  cells.forEach((r, ri) => {
    let xx = x;
    r.forEach((t, ci2) => {
      const k: KK = ri === 0 ? (o?.head ?? 'b') : ci2 === 0 && o?.firstCol ? o.firstCol : (o?.body ?? 'n');
      out.push(bx(xx, y + ri * rh, cw[ci2], rh - 2, t, K[k][0], K[k][1], size));
      xx += cw[ci2];
    });
  });
  return out;
}
/** 箱の上にかけるかっこ（上のはしを結んで、ラベルをつける） */
const brk = (x1: number, x2: number, y: number, t: string, color: string = C.green): DiagramElement[] => [
  ln(x1, y + 10, x1, y, color),
  ln(x1, y, x2, y, color),
  ln(x2, y, x2, y + 10, color),
  lb((x1 + x2) / 2, y - 8, t, 12, color, 'middle', true),
];
/** 箱の下にかけるかっこ */
const brkb = (x1: number, x2: number, y: number, t: string, color: string = C.green): DiagramElement[] => [
  ln(x1, y - 10, x1, y, color),
  ln(x1, y, x2, y, color),
  ln(x2, y, x2, y - 10, color),
  lb((x1 + x2) / 2, y + 12, t, 12, color, 'middle', true),
];
/** 好きな x の位置に中央ぞろえのラベル */
const at = (x: number, y: number, t: string, size = 11, color: string = C.gray, bold = false) => lb(x, y, t, size, color, 'middle', bold);

// ───────── eigo_s068 SVC をつくる動詞 ─────────
const w68: Wd[] = [['This soup', 'b', 'S'], ['smells', 'm', 'V'], ['good', 'g', 'C']];
const s068: DiagramFigure = show([
  {
    note: '問題です。「このスープはおいしそうなにおいがする」を英語にします。「おいしそうに」だから deliciously と書きたくなりますが、それでよいのでしょうか。',
    add: [jp('「このスープは おいしそうな においがする」', 26, 12, C.ink), ...row([['This soup', 'b'], ['smells', 'm'], ['deliciously', 'r']], 62), ...cap('deliciously で よいのかな？', C.red)],
  },
  {
    note: '❓なぜ deliciously ではだめなのでしょう。→ smell（においがする）は、「スープ＝おいしい」という関係をつくる動詞だからです。うしろには、主語がどんなものかを説明する形容詞（けいようし）を置きます。ここでは good か delicious です。',
    add: [...fresh(...brk(cx(w68, 0), cx(w68, 2), 40, 'This soup ＝ good'), ...row(w68, 54)), ...cap('主語（しゅご）＝うしろの語。形容詞を置く', C.green)],
  },
  {
    note: '❓では、副詞（ふくし）はどこで使うのでしょう。→ 副詞は「動詞のようす」を説明する語です。He plays tennis well. の well は、plays（する）のしかたを説明しています。このスープの文は、においのしかたではなく、スープがどんなものかを言いたいので、副詞はふさわしくありません。',
    add: fresh(en('This soup smells good.', 28), ...row([['This soup', 'b'], ['smells', 'm'], ['good', 'g']], 38, { size: 12 }), jp('good は スープの ようす', 88, 11, C.green), en('He plays tennis well.', 108), ...row([['He', 'b'], ['plays', 'm'], ['tennis', 'b'], ['well', 'p']], 118, { size: 12 }), ...cap('well は「する」のしかたを説明する副詞', C.purple)),
  },
  {
    note: '感覚（かんかく）を表す動詞は五つあります。look（見える）、sound（聞こえる）、taste（味がする）、smell（においがする）、feel（感じる）。どれもうしろに形容詞を置きます。',
    add: fresh(...grid([['動詞', '意味', '例'], ['look', '見える', 'You look tired.'], ['sound', '聞こえる', 'That sounds interesting.'], ['taste', '味がする', 'This soup tastes salty.'], ['smell', 'においがする', 'These flowers smell sweet.'], ['feel', '感じる', 'I feel sleepy.']], 8, 6, [56, 66, 182], 23, { size: 11 }), ...cap('どれも あとに 形容詞がくる', C.blue)),
  },
  {
    note: '❓うしろに名詞を置きたいときは？ → like（〜のように）を入れます。He looks young. は形容詞なので like は要りません。He looks like a doctor. は名詞なので like が要ります。',
    add: fresh(en('形容詞のとき', 18, 12, C.blue), ...row([['He', 'b'], ['looks', 'm'], ['young', 'g']], 28), en('名詞のとき', 82, 12, C.purple), ...row([['He', 'b'], ['looks', 'm'], ['like', 'r'], ['a doctor', 'p']], 92), ...cap('名詞の前には like が いる', C.purple)),
  },
  {
    note: '❓なぜ名詞には like が要るのでしょう。→ 形容詞（young）は「どんな様子か」をそのまま言えます。でも名詞の a doctor を直接つなぐと「彼＝医者そのもの」になってしまいます。見えるだけで医者かどうかはわからないので、「〜のように」という like でつなぐのです。',
    add: fresh(en('He looks young.（若く見える）', 28, 13), jp('young は 様子（ようす）そのもの', 46), en('He looks a doctor. ✗', 84, 13, C.red), jp('医者「そのもの」になってしまう', 102, 11, C.red), en('He looks like a doctor. ○', 126, 13, C.green), ...cap('見えるだけ → 「〜のように」で like', C.green)),
  },
  {
    note: '「〜になる」を表す動詞もあります。become は名詞も形容詞も置けます（He became a pilot. / She became famous.）。get は形容詞をふつう置き（It got cold.）、turn は色が変わるときに使います（The leaves turn red.）。',
    add: fresh(...grid([['動詞', '例', '意味'], ['become', 'He became a pilot.', 'パイロットになった'], ['become', 'She became famous.', '有名になった'], ['get', 'It got cold.', '寒くなった'], ['turn', 'The leaves turn red.', '葉が赤くなる']], 8, 14, [56, 150, 94], 26, { size: 11, head: 'p' }), ...cap('「〜になる」は become・get・turn', C.purple)),
  },
  {
    note: 'まとめです。感覚の動詞のうしろは、①形容詞を置く（smells good）、②名詞なら like を入れる（looks like a doctor）。good（形容詞）と well（副詞）も混ぜません。This soup smells good. が正しく、smells well は誤りです。',
    add: fresh(...row([['This soup smells good.', 'g']], 22, { h: 30 }), ...row([['He looks like a doctor.', 'g']], 62, { h: 30 }), ...row([['This soup smells well.', 'r']], 102, { h: 30 }), ...cap('形容詞は good ／ 名詞は like ＋ 名詞', C.green)),
  },
], 'SVC をつくる動詞：形容詞か like＋名詞');

// ───────── eigo_s070 目的格 ─────────
const w70: Wd[] = [['I', 'b', 'S'], ['like', 'm', 'V'], ['her', 'g', 'O']];
const s070: DiagramFigure = show([
  {
    note: '問題です。「私は彼女が好きです」を I like she. と書くのは正しいでしょうか。日本語の「彼女が」につられやすいところです。',
    add: [jp('「私は 彼女が 好きです」', 26, 12, C.ink), ...row([['I', 'b'], ['like', 'm'], ['she', 'r']], 62), ...cap('I like she. ……これで いいかな？', C.red)],
  },
  {
    note: '❓なぜ she ではだめなのでしょう。→ 英語では、同じ人でも文の中での位置で形が変わります。主語（しゅご）のときは she、動詞のうしろ（目的語（もくてきご））に来ると her に変わります。正しくは I like her. です。',
    add: fresh(...row([['She', 'b', '主語 → she']], 30, { x0: 20, x1: 120, h: 30 }), ...row([['her', 'g', '動詞のうしろ → her']], 30, { x0: 200, x1: 300, h: 30 }), ar(124, 45, 196, 45, C.green), jp('形が かわる', 38, 11, C.green), en('I like her.', 112, 16, C.green), ...cap('動詞のうしろでは she → her', C.green)),
  },
  {
    note: '主格（しゅかく）と目的格（もくてきかく）の対応表です。I→me、you→you、he→him、she→her、it→it、we→us、they→them。上の段が主語の形、下の段が動詞や前置詞（ぜんちし）のうしろの形です。',
    add: fresh(...grid([['主語', 'I', 'you', 'he', 'she', 'it', 'we', 'they'], ['うしろ', 'me', 'you', 'him', 'her', 'it', 'us', 'them']], 6, 26, [44, 38, 38, 38, 38, 38, 38, 42], 44, { size: 12, head: 'b', body: 'g' }), jp('you と it は 形が かわらない', 130, 11, C.gray), ...cap('主語なら上、うしろなら下の形', C.blue)),
  },
  {
    note: '❓目的格はどこで使うのでしょう。→ 二か所です。①動詞のうしろ（I like him.）、②前置詞のうしろ（Come with me. / This present is for her.）。前置詞とは with・for・to・at・of のような語です。',
    add: fresh(en('① 動詞のうしろ', 14, 12, C.blue), ...row([['I', 'b'], ['like', 'm'], ['him', 'g']], 22, { size: 12, h: 26 }), en('② 前置詞のうしろ', 70, 12, C.purple), ...row([['Come', 'm'], ['with', 'p'], ['me', 'g']], 78, { size: 12, h: 26 }), ...row([['This present is', 'b'], ['for', 'p'], ['her', 'g']], 112, { size: 12, h: 26 }), ...cap('動詞か 前置詞の あとは 目的格', C.green)),
  },
  {
    note: '❓では「〜の」を表す形とはどうちがうのでしょう。→ I の「〜の」は my、「〜を・〜に」は me です。I like her. の her は目的格、This is her bag. の her は「彼女の」という所有格です。形は同じなので、うしろに名詞があるかで見分けます。',
    add: fresh(...grid([['私', 'I', 'my', 'me'], ['', '〜は', '〜の', '〜を・に']], 40, 14, [56, 60, 60, 80], 30, { size: 12, head: 'b', body: 'n' }), ...row([['I like', 'b'], ['her', 'g']], 88, { size: 12, x1: 150 }), at(80, 130, 'うしろに名詞なし → 目的格', 10, C.green), ...row([['This is', 'b'], ['her', 'm'], ['bag', 'n']], 88, { size: 12, x0: 160 }), at(240, 130, 'うしろに名詞あり → 〜の', 10, C.main), ...cap('her は うしろの名詞で 見分ける', C.main)),
  },
  {
    note: 'よくある誤りを三つ直しましょう。Please help I. は me に、a picture of we は us に、Give it to she. は her にします。どれも動詞や前置詞のうしろなので目的格です。',
    add: fresh(...[['Please help I.', 'Please help me.'], ['a picture of we', 'a picture of us'], ['Give it to she.', 'Give it to her.']].flatMap(([a, b], i) => [ngb(8, 14 + i * 44, 138, a), ar(150, 27 + i * 44, 168, 27 + i * 44, C.gray), okb(172, 14 + i * 44, 140, b)]), ...cap('前置詞（of・to）のうしろも 目的格', C.green)),
  },
  {
    note: 'まとめです。代名詞は「置かれた場所」で形が決まります。主語なら主格（I・he・she）、動詞か前置詞のうしろなら目的格（me・him・her）、名詞の前の「〜の」は別の形（my・his・her）です。',
    add: fresh(...row([['主語', 'b'], ['うしろ', 'g'], ['〜の', 'm']], 24, { h: 36, size: 14, x0: 10, x1: 310, gap: 12 }), at(55, 80, 'I・he・she', 12, C.blue, true), at(160, 80, 'me・him・her', 12, C.green, true), at(265, 80, 'my・his・her', 12, C.main, true), ...cap('場所で形が決まる', C.ink)),
  },
], '代名詞の形は置かれた場所で決まる');

// ───────── eigo_s071 自動詞と他動詞 ─────────
const s071: DiagramFigure = show([
  {
    note: '問題です。「音楽を聞く」と「京都を訪ねる」は、日本語ではどちらも「を」を使います。英語でも同じように書けるでしょうか。',
    add: [jp('「音楽を 聞く」', 28, 13, C.ink), jp('「京都を 訪ねる」', 58, 13, C.ink), jp('どちらも「を」', 92, 12, C.gray), ...cap('英語でも 同じ書き方かな？', C.ink)],
  },
  {
    note: '英語では書き方がちがいます。音楽を聞くは listen to music、京都を訪ねるは visit Kyoto です。listen のうしろには to が要り、visit のうしろには何も入れません。',
    add: fresh(...row([['listen', 'm'], ['to', 'p'], ['music', 'b']], 40, { size: 14 }), ...row([['visit', 'm'], ['Kyoto', 'b']], 92, { size: 14 }), ...cap('listen の あとには to が いる', C.purple)),
  },
  {
    note: '❓なぜ listen には to が要るのでしょう。→ listen は自動詞（じどうし）で、「何かを直接とる」ことができません。何かを続けるには前置詞という「橋」をかけます。visit は他動詞（たどうし）で、目的語（もくてきご）をそのまま直接とれます。',
    add: fresh(bx(10, 30, 70, 30, 'listen', C.main, FILL.warm, 14), bx(130, 30, 40, 30, 'to', C.purple, FILL.purple, 14), bx(220, 30, 80, 30, 'music', C.blue, FILL.blue, 14), ar(80, 45, 130, 45, C.purple), ar(170, 45, 220, 45, C.purple), jp('橋（前置詞）が いる', 78, 11, C.purple), bx(10, 100, 70, 30, 'visit', C.main, FILL.warm, 14), bx(220, 100, 80, 30, 'Kyoto', C.blue, FILL.blue, 14), ar(80, 115, 220, 115, C.green), jp('橋なしで 直接つながる', 144, 11, C.green)),
  },
  {
    note: '前置詞が要る動詞を覚えましょう。listen to（〜を聞く）、look at（〜を見る）、arrive at（〜に着く）、wait for（〜を待つ）、go to（〜へ行く）。日本語では「を」や「に」でも、英語では前置詞が必要です。',
    add: fresh(...grid([['動詞', '意味', '例'], ['listen to', '〜を聞く', 'listen to music'], ['look at', '〜を見る', 'look at the bird'], ['arrive at', '〜に着く', 'arrive at the airport'], ['wait for', '〜を待つ', 'wait for him'], ['go to', '〜へ行く', 'go to school']], 8, 6, [76, 70, 154], 23, { size: 11, head: 'p' }), ...cap('橋の前置詞が 要る 動詞', C.purple)),
  },
  {
    note: '❓逆に、前置詞を入れたくなるのに入れない動詞は？ → enter（〜に入る）、reach（〜に着く）、visit（〜を訪れる）、discuss（〜について話し合う）、marry（〜と結婚する）。enter into、reach to、discuss about、married with は誤りです。',
    add: fresh(...grid([['動詞', '意味', '入れない'], ['enter', '〜に入る', '× into'], ['reach', '〜に着く', '× to'], ['visit', '〜を訪れる', '× to'], ['discuss', '〜について話す', '× about'], ['marry', '〜と結婚する', '× with']], 8, 6, [76, 124, 100], 23, { size: 11, head: 'g' }), ...cap('橋を かけない 動詞', C.green)),
  },
  {
    note: '❓日本語の「を」「に」で見分けられないのはなぜでしょう。→ 目的語を直接置けるかは、英語の動詞ごとに決まっているからです。「〜に着く」は arrive at（橋あり）にも reach（橋なし）にもなり、「〜に入る」は enter（橋なし）です。日本語の助詞は手がかりになりません。',
    add: fresh(jp('日本語', 20, 12, C.ink), ...row([['〜に着く', 'n']], 28, { x0: 110, x1: 210 }), ar(130, 62, 80, 94, C.gray), ar(190, 62, 240, 94, C.gray), ...row([['arrive at', 'p']], 98, { x0: 20, x1: 140, size: 13 }), ...row([['reach', 'g']], 98, { x0: 180, x1: 300, size: 13 }), ...cap('同じ日本語でも 英語は ちがう', C.red)),
  },
  {
    note: '似た意味の組もセットで覚えます。listen to（意識して聞く）と hear（自然に聞こえる）、look at（意識して見る）と see（自然に見える）。前の二つは前置詞が要り、あとの二つは要りません。',
    add: fresh(...grid([['意識して', '自然に'], ['listen to', 'hear'], ['look at', 'see']], 30, 6, [130, 130], 30, { size: 14, head: 'b', body: 'm' }), at(95, 100, '前置詞が いる', 11, C.purple), at(225, 100, '前置詞は いらない', 11, C.green), en('I listened to the radio.', 118, 12), en('I heard a strange sound.', 136, 12), ...cap('二つ組で おぼえる', C.ink)),
  },
  {
    note: 'run は自動詞にも他動詞にもなります。He runs fast.（走る）は自動詞、He runs a restaurant.（経営する）は他動詞です。うしろに目的語が直接あるかを見て判断します。',
    add: fresh(en('run（走る）＝ 自動詞', 20, 12, C.blue), ...row([['He', 'b'], ['runs', 'm'], ['fast', 'p']], 28, { size: 13 }), en('run（経営する）＝ 他動詞', 84, 12, C.green), ...row([['He', 'b'], ['runs', 'm'], ['a restaurant', 'g']], 92, { size: 13 }), ...cap('うしろに 目的語が 直接あるか', C.ink)),
  },
  {
    note: 'まとめです。①前置詞が要る動詞（listen to・look at・arrive at・wait for・go to）、②前置詞が要らない動詞（enter・reach・visit・discuss・marry）を分けて覚える。日本語の「を・に」では決められません。',
    add: fresh(...row([['listen to\nlook at\narrive at', 'p']], 26, { h: 62, x0: 10, x1: 150, size: 13 }), ...row([['enter  reach\nvisit  discuss\nmarry', 'g']], 26, { h: 62, x0: 170, x1: 310, size: 13 }), at(80, 108, '橋が いる', 12, C.purple), at(240, 108, '橋は いらない', 12, C.green), ...cap('日本語の「を」では きまらない', C.red)),
  },
], '自動詞と他動詞：橋（前置詞）が要るか');

// ───────── eigo_s072 SVC と SVO の見分け方 ─────────
const s072: DiagramFigure = show([
  {
    note: '問題です。He got angry.（彼は怒った）と He got a letter.（彼は手紙を受け取った）。どちらも got を使っていますが、文型（ぶんけい）がちがいます。どこで見分けるのでしょう。',
    add: [...row([['He', 'b'], ['got', 'm'], ['angry', 'g']], 28), jp('彼は怒った', 70, 11), ...row([['He', 'b'], ['got', 'm'], ['a letter', 'g']], 86), jp('彼は手紙を受け取った', 128, 11), ...cap('同じ got なのに 文型が ちがう？', C.ink)],
  },
  {
    note: '❓見分けのかぎは何でしょう。→ 主語とうしろの語のあいだに「＝」を書いてみることです。He ＝ angry は成り立つ（彼は怒っている）ので SVC。He ＝ a letter は成り立たない（彼は手紙ではない）ので SVO です。',
    add: fresh(...row([['He', 'b', 'S'], ['got', 'm', 'V'], ['angry', 'g', 'C']], 30), ...brk(cx([['He', 'b'], ['got', 'm'], ['angry', 'g']], 0), cx([['He', 'b'], ['got', 'm'], ['angry', 'g']], 2), 20, 'He ＝ angry ○'), ...row([['He', 'b', 'S'], ['got', 'm', 'V'], ['a letter', 'r', 'O']], 98), at(160, 92, 'He ＝ a letter ✗（ちがう）', 12, C.red, true), ...cap('＝が成り立てば SVC、ちがえば SVO', C.green)),
  },
  {
    note: '手順は三つです。①動詞のうしろの語を見つける。②主語とのあいだに「＝」を書いてみる。③意味が通れば SVC、通らなければ SVO。訳し方で迷う前に、この手順を使います。',
    add: fresh(...[['① うしろの語を 見つける', 'b'], ['② 主語との間に ＝ を書く', 'm'], ['③ 通れば SVC ／ ちがえば SVO', 'g']].flatMap(([t, k], i) => [...(i > 0 ? [ar(160, 14 + i * 44 - 5, 160, 14 + i * 44 + 3, C.gray)] : []), bx(30, 14 + i * 44, 260, 32, t, K[k as KK][0], K[k as KK][1], 13)]), ...cap('訳さずに「＝」で たしかめる', C.green)),
  },
  {
    note: '例で確かめます。He is a doctor. は He ＝ a doctor が成り立つので SVC。He knows a doctor. は、彼は医者そのものではないので成り立たず、SVO です。',
    add: fresh(...row([['He', 'b'], ['is', 'm'], ['a doctor', 'g']], 20), at(160, 66, 'He ＝ a doctor ○ → SVC', 12, C.green, true), ...row([['He', 'b'], ['knows', 'm'], ['a doctor', 'r']], 86), at(160, 132, 'He ＝ a doctor ✗ → SVO', 12, C.red, true), ...cap('同じ a doctor でも 文型が かわる', C.ink)),
  },
  {
    note: '❓うしろが名詞か形容詞かで決まるのでしょうか。→ 決まりません。名詞でも「＝」が成り立てば C です。She became a nurse.（彼女＝看護師）は SVC、She met a nurse.（彼女は看護師に会った）は、彼女＝看護師ではないので SVO です。',
    add: fresh(...row([['She', 'b'], ['became', 'm'], ['a nurse', 'g']], 20), at(160, 66, 'She ＝ a nurse ○ → SVC', 12, C.green, true), ...row([['She', 'b'], ['met', 'm'], ['a nurse', 'r']], 86), at(160, 132, 'She ＝ a nurse ✗ → SVO', 12, C.red, true), ...cap('名詞か形容詞かでは きまらない', C.red)),
  },
  {
    note: '同じ動詞が両方の文型になる例です。get は angry なら SVC、a letter なら SVO。feel は sick なら SVC、a cold wind なら SVO。turn は red なら SVC、the key なら SVO です。',
    add: fresh(...grid([['動詞', 'SVC（＝）', 'SVO（≠）'], ['get', 'got angry', 'got a letter'], ['feel', 'feel sick', 'feel a cold wind'], ['turn', 'turn red', 'turned the key']], 8, 14, [56, 112, 132], 30, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('動詞だけでは 文型は きまらない', C.ink)),
  },
  {
    note: '❓look はどうでしょう。He looks young. は SVC。でも He looked at the picture.（絵を見た）は、at があるので picture は目的語ではなく、文型としては SV です。run も He runs fast.（走る）は SV、He runs a shop.（店を経営する）は SVO になります。',
    add: fresh(...row([['He', 'b'], ['looks', 'm'], ['young', 'g']], 14, { size: 12, h: 26 }), at(160, 52, 'He ＝ young ○ → SVC', 11, C.green, true), ...row([['He', 'b'], ['looked', 'm'], ['at', 'p'], ['the picture', 'n']], 66, { size: 12, h: 26 }), at(160, 104, 'at があるので SV', 11, C.purple, true), ...row([['He', 'b'], ['runs', 'm'], ['a shop', 'g']], 118, { size: 12, h: 26 }), at(265, 133, '→ SVO', 11, C.green, true), ...cap('前置詞（at）が 入ると SV', C.purple)),
  },
  {
    note: 'まとめです。動詞の意味を一つだけ覚えていると、文型をまちがえます。毎回、主語とうしろの語が「＝」になるかを確かめましょう。＝なら SVC、≠なら SVO です。',
    add: fresh(...row([['S ＝ うしろ', 'g', 'SVC'], ['S ≠ うしろ', 'b', 'SVO']], 30, { h: 44, size: 15, x0: 20, x1: 300, gap: 20 }), ...cap('いつも「＝」を 書いてから 決める', C.green)),
  },
], 'SVC と SVO は「＝」で見分ける');

// ───────── eigo_s076 SVOO の否定文・疑問文 ─────────
const s076: DiagramFigure = show([
  {
    note: '問題です。「彼はあなたにプレゼントをくれますか」を Does he gives you a present? と書くのは正しいでしょうか。',
    add: [...row([['Does', 'p'], ['he', 'b'], ['gives', 'r'], ['you', 'n'], ['a present?', 'n']], 40, { size: 12 }), ...cap('gives で いいのかな？', C.red)],
  },
  {
    note: '❓なぜ gives ではだめなのでしょう。→ 三人称単数の -s は、動詞が一人で「主語に合わせる」仕事です。does が出てきたら、その仕事は does が引き受けます。だから動詞は原形（げんけい）の give にもどります。He gives me a present. → Does he give you a present?',
    add: fresh(...row([['He', 'b'], ['gives', 'm'], ['me', 'n'], ['a present.', 'n']], 20, { size: 12 }), ar(160, 56, 160, 76, C.gray), ...row([['Does', 'p'], ['he', 'b'], ['give', 'g'], ['you', 'n'], ['a present?', 'n']], 82, { size: 12 }), at(75, 124, 'does が -s を引き受ける', 11, C.purple, true), at(245, 124, '動詞は 原形', 11, C.green, true), ...cap('does のあとの 動詞は 原形', C.green)),
  },
  {
    note: '否定文も同じ決まりです。He gives me a present. は doesn\'t を入れて、He doesn\'t give me a present. They tell us the truth. は、They don\'t tell us the truth. doesn\'t・don\'t のうしろは原形なので gives は give にもどります。',
    add: fresh(...row([['He', 'b'], ['gives', 'm'], ['me', 'n'], ['a present.', 'n']], 8, { size: 12, h: 24 }), ...row([['He', 'b'], ["doesn't", 'p'], ['give', 'g'], ['me', 'n'], ['a present.', 'n']], 38, { size: 12, h: 24 }), ...row([['They', 'b'], ['tell', 'm'], ['us', 'n'], ['the truth.', 'n']], 82, { size: 12, h: 24 }), ...row([['They', 'b'], ["don't", 'p'], ['tell', 'g'], ['us', 'n'], ['the truth.', 'n']], 112, { size: 12, h: 24 }), ...cap("doesn't・don't のあとも 原形", C.green)),
  },
  {
    note: '❓疑問文にすると、「人」と「もの」の順番も変わるのでしょうか。→ 変わりません。〈動詞＋人＋もの〉の順は、疑問文でも同じです。Does your mother make you lunch? は正しく、make lunch you と並べかえるのは誤りです。',
    add: fresh(...row([['Does', 'p'], ['your mother', 'b'], ['make', 'm'], ['you', 'g', '人'], ['lunch?', 'n', 'もの']], 30, { size: 12 }), ngb(40, 100, 240, '✗ Does your mother make lunch you?', 12), ...cap('動詞のあとは「人 → もの」のまま', C.green)),
  },
  {
    note: '「何を」をたずねるときは、もの（a present）をたずねる語 what を文の頭に出します。He gives you a present. → What does he give you? 答えは He gives me a present. です。does のうしろは原形 give のままです。',
    add: fresh(...row([['He', 'b'], ['gives', 'm'], ['you', 'n'], ['a present', 'y']], 20, { size: 12 }), ar(160, 58, 160, 78, C.gray), ...row([['What', 'y'], ['does', 'p'], ['he', 'b'], ['give', 'g'], ['you?', 'n']], 84, { size: 12 }), ...cap('もの（a present）を たずねる → What', C.main)),
  },
  {
    note: '❓「だれに」をたずねるときは、なぜ to が文の終わりに残るのでしょう。→ もとの形が He gives it to me. だからです。「me（だれ）」の部分だけが who になり、前置詞（ぜんちし）の to はその場に残ります。Who does he give it to? となります。',
    add: fresh(...row([['He', 'b'], ['gives', 'm'], ['it', 'n'], ['to', 'p'], ['me', 'y']], 18, { size: 12 }), ar(250, 54, 250, 76, C.gray), ...row([['Who', 'y'], ['does', 'p'], ['he', 'b'], ['give', 'g'], ['it', 'n'], ['to?', 'p']], 82, { size: 12 }), at(160, 126, 'to は もとの場所に のこる', 11, C.purple, true), ...cap('「だれに」→ Who ... to?', C.purple)),
  },
  {
    note: '「だれが」をたずねるときは、who が主語になるので does は使いません。動詞に -s を付けます。Who gives you a present?（だれがあなたにプレゼントをくれますか）。これは、主語が三人称単数になるので gives が正しい形です。',
    add: fresh(...row([['Who', 'y'], ['gives', 'g'], ['you', 'n'], ['a present?', 'n']], 40, { size: 13 }), at(160, 96, 'who が 主語 → does は いらない', 12, C.main, true), at(160, 114, '動詞に -s が つく', 12, C.green, true), ...cap('「だれが」は Who ＋ 動詞（-s）', C.main)),
  },
  {
    note: 'まとめです。SVOO でも、否定文・疑問文は一般動詞の文と同じです。do／does のうしろは原形、人とものの順は変わらない、「だれに」は to が残る、「だれが」は does を使わない。',
    add: fresh(...grid([['たずねる内容', '文'], ['何を', 'What does he give you?'], ['だれに', 'Who does he give it to?'], ['だれが', 'Who gives you a present?']], 8, 14, [90, 210], 30, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('does のあとは 原形、だれがは does なし', C.green)),
  },
], 'SVOO の否定文・疑問文とたずね方');

// ───────── eigo_s078 SVOC① call・name ─────────
const w78: Wd[] = [['We', 'b', 'S'], ['call', 'm', 'V'], ['him', 'g', 'O'], ['Ken', 'p', 'C']];
const s078: DiagramFigure = show([
  {
    note: '問題です。「私たちは彼をケンと呼びます」を英語にします。call を使った文は、うしろに二つの語が並びます。',
    add: [jp('「私たちは 彼を ケンと 呼びます」', 28, 12, C.ink), ...row([['We', 'b'], ['call', 'm'], ['him', 'n'], ['Ken', 'n']], 64), ...cap('うしろに 二つ ならぶ', C.ink)],
  },
  {
    note: '❓この二つの語は、どんな関係なのでしょう。→ him ＝ Ken、つまり「彼＝ケン」というイコールの関係です。このように「O を C と呼ぶ」の形を第5文型（SVOC）といいます。O は目的語（もくてきご）、C は補語（ほご）です。',
    add: fresh(...row(w78, 52), ...brk(cx(w78, 2), cx(w78, 3), 38, 'him ＝ Ken'), ...cap('O ＝ C（彼 ＝ ケン）', C.green)),
  },
  {
    note: 'name も同じ形です。name＋O＋C は「O を C と名づける」。They named the baby Sakura.（彼らは赤ちゃんをさくらと名づけました）。the baby ＝ Sakura のイコールです。',
    add: fresh(...row([['They', 'b', 'S'], ['named', 'm', 'V'], ['the baby', 'g', 'O'], ['Sakura', 'p', 'C']], 52, { size: 12 }), ...brk(cx([['They', 'b'], ['named', 'm'], ['the baby', 'g'], ['Sakura', 'p']], 2, { size: 12 }), cx([['They', 'b'], ['named', 'm'], ['the baby', 'g'], ['Sakura', 'p']], 3, { size: 12 }), 38, 'the baby ＝ Sakura'), ...cap('name ＋ O ＋ C ＝「O を C と名づける」', C.main)),
  },
  {
    note: 'C には名前や呼び名が入ります。人の名前や呼び名なので、大文字で書き始めることが多いです。We named our dog Shiro. も、our dog ＝ Shiro です。',
    add: fresh(...row([['We', 'b'], ['named', 'm'], ['our dog', 'g'], ['Shiro', 'p']], 14, { size: 13 }), at(255, 58, '名前 → 大文字', 11, C.purple, true), ...row([['My friends', 'b'], ['call', 'm'], ['me', 'g'], ['Yu', 'p']], 82, { size: 13 }), at(255, 126, '呼び名 → 大文字', 11, C.purple, true), ...cap('C には 名前や 呼び名', C.purple)),
  },
  {
    note: '「〜と呼ばれている」と言うときは、be動詞＋called の受け身（うけみ）の形になります。He is called Ken.（彼はケンと呼ばれています）。This tower is called Tsutenkaku.（この塔は通天閣と呼ばれています）。',
    add: fresh(...row([['We call him Ken.', 'g']], 20, { h: 30, x0: 40, x1: 280 }), ar(160, 54, 160, 72, C.gray), ...row([['He', 'b'], ['is called', 'm'], ['Ken.', 'p']], 78), ...row([['This tower', 'b'], ['is called', 'm'], ['Tsutenkaku.', 'p']], 116, { size: 12, h: 26 }), ...cap('「〜と呼ばれる」は is called', C.main)),
  },
  {
    note: '入試によく出る文です。「これは英語で何と言いますか」は What do you call this in English? です。this（これ）の呼び名をたずねているので、O ＝ this、C ＝ what（何）。',
    add: fresh(...row([['What', 'y', 'C'], ['do you', 'n'], ['call', 'm', 'V'], ['this', 'g', 'O'], ['in English?', 'n']], 40, { size: 12 }), at(160, 98, 'this ＝ 何（呼び名）', 12, C.green, true), ...cap('「何と言う？」は What do you call ...?', C.main)),
  },
  {
    note: '❓なぜ How ではなく What を使うのでしょう。→ たずねているのは「呼び名（名前そのもの）」だからです。How は「どのように・どんな方法で」をたずねる語です。日本語の「どう言う？」につられて、How do you call this? と書かないようにしましょう。',
    add: fresh(...row([['How', 'r'], ['do you call this in English?', 'r']], 20, { size: 12 }), at(160, 62, '✗ 方法をたずねる文になってしまう', 11, C.red, true), ...row([['What', 'g'], ['do you call this in English?', 'g']], 82, { size: 12 }), at(160, 124, '○ 呼び名（名前）をたずねる', 11, C.green, true), ...cap('名前そのもの → What', C.green)),
  },
  {
    note: '答え方は二つあります。We call it a sunflower.（ひまわりと言います）か、It is called a sunflower.（ひまわりと呼ばれています）。どちらでもかまいません。まとめ：call／name ＋ O ＋ C、O ＝ C、英語で何と言う？ は What。',
    add: fresh(...row([['What do you call this flower in English?', 'y']], 14, { size: 11, h: 28, x0: 6, x1: 314 }), ...row([['We call it a sunflower.', 'g']], 64, { size: 12, h: 28 }), ...row([['It is called a sunflower.', 'g']], 104, { size: 12, h: 28 }), at(160, 56, 'どちらでも こたえられる', 10, C.gray), ...cap('call ＋ O ＋ C ／ 何と言う？は What', C.main)),
  },
], 'SVOC①：call・name 型（O＝C）');

// ───────── eigo_s079 SVOC② make・keep・find ─────────
const w79: Wd[] = [['The news', 'b', 'S'], ['made', 'm', 'V'], ['me', 'g', 'O'], ['happy', 'p', 'C']];
const s079: DiagramFigure = show([
  {
    note: '問題です。The news made me happy. を日本語にすると、直訳は「その知らせが私を幸せにした」です。ふつうの日本語なら「知らせを聞いてうれしかった」と言いますね。',
    add: [...row(w79, 40), jp('直訳：その知らせが 私を 幸せにした', 100, 11, C.ink), ...cap('ものが 人の気持ちを うごかす', C.ink)],
  },
  {
    note: '❓なぜ「もの」が主語になるのでしょう。→ 英語は「何が原因で、どうなったか」をはっきり書く言語だからです。原因（知らせ）が主語になり、結果（私が幸せ）が O と C に入ります。me ＝ happy のイコールが成り立ちます。',
    add: fresh(...row(w79, 56), ...brk(cx(w79, 2), cx(w79, 3), 42, 'me ＝ happy'), at(60, 24, '原因', 11, C.blue, true), ar(60, 28, 60, 54, C.blue), at(250, 120, '結果', 11, C.purple, true), ...cap('原因が主語、結果が O ＝ C', C.green)),
  },
  {
    note: 'make＋O＋C は「O を C にする」。Music makes me sleepy.（音楽は私をねむくさせる）では me ＝ sleepy。His words made her sad.（彼のことばは彼女を悲しませた）では her ＝ sad です。',
    add: fresh(...row([['Music', 'b'], ['makes', 'm'], ['me', 'g'], ['sleepy', 'p']], 26, { size: 13 }), at(160, 72, 'me ＝ sleepy', 11, C.green, true), ...row([['His words', 'b'], ['made', 'm'], ['her', 'g'], ['sad', 'p']], 90, { size: 13 }), at(160, 136, 'her ＝ sad', 11, C.green, true), ...cap('make ＋ O ＋ C ＝「O を C にする」', C.main)),
  },
  {
    note: 'keep と find も同じ形です。keep＋O＋C は「O を C のままにしておく」（Keep the door closed.＝ドアを閉めておきなさい）。find＋O＋C は「O が C だと分かる」（I found the book interesting.＝その本はおもしろいと分かった）。',
    add: fresh(...row([['Keep', 'm'], ['the door', 'g'], ['closed.', 'p']], 24, { size: 13 }), at(160, 68, 'the door ＝ closed（ドアは閉まっている）', 11, C.green, true), ...row([['I', 'b'], ['found', 'm'], ['the book', 'g'], ['interesting.', 'p']], 90, { size: 12 }), at(160, 134, 'the book ＝ interesting', 11, C.green, true), ...cap('keep ＝ そのままに ／ find ＝ 分かる', C.main)),
  },
  {
    note: '❓C に副詞（ふくし）を置いてよいのでしょうか。→ いけません。She keeps her room cleanly. は誤りで、She keeps her room clean. が正しい形です。C は「部屋がどんな状態か」を言う語で、clean（形容詞）が合っています。cleanly は動作のしかたを表す副詞です。',
    add: fresh(...row([['She', 'b'], ['keeps', 'm'], ['her room', 'g'], ['cleanly.', 'r']], 22, { size: 13 }), at(160, 66, '✗ 副詞は C になれない', 12, C.red, true), ...row([['She', 'b'], ['keeps', 'm'], ['her room', 'g'], ['clean.', 'p']], 88, { size: 13 }), at(160, 132, '○ her room ＝ clean', 12, C.green, true), ...cap('C には 形容詞（名詞も可）', C.green)),
  },
  {
    note: '❓make には、もう一つの使い方がありました。My mother made me a cake.（母は私にケーキを作ってくれた）は第4文型（SVOO）です。me（人）＝ a cake（もの）にはならないからです。人にものを作ってあげる意味では、a cake for me と言いかえもできます。',
    add: fresh(...row([['My mother', 'b'], ['made', 'm'], ['me', 'g'], ['a cake', 'y']], 30, { size: 13 }), at(160, 78, 'me ＝ a cake ✗（人 ≠ もの）→ SVOO', 11, C.red, true), at(160, 98, '= My mother made a cake for me.', 11, C.gray), ...cap('「作ってあげる」は SVOO', C.main)),
  },
  {
    note: 'The song made me happy. は、me ＝ happy が成り立つので SVOC です。C が名詞でも同じで、They made him the captain.（彼らは彼をキャプテンにした）は him ＝ the captain なので SVOC。名詞のときは見分けにくいので、必ず「＝」を書いて確かめます。',
    add: fresh(...grid([['文', '＝は？', '文型'], ['made me a cake', 'me ≠ a cake', 'SVOO'], ['made me happy', 'me ＝ happy', 'SVOC'], ['made him the captain', 'him ＝ the captain', 'SVOC']], 6, 14, [132, 114, 56], 32, { size: 11, head: 'b', body: 'n', firstCol: 'm' }), ...cap('二つの語が ＝ なら SVOC', C.green)),
  },
  {
    note: 'まとめです。make・keep・find のうしろに二つの語が並んだら、まず「＝」になるか確かめます。なれば O ＝ C の第5文型。ならなければ第4文型。C には形容詞を置き、副詞は置きません。',
    add: fresh(...row([['O ＝ C', 'g', 'SVOC'], ['O ≠ O', 'b', 'SVOO']], 28, { h: 44, size: 16, x0: 30, x1: 290, gap: 24 }), ...cap('二つの語は ＝ か どうか', C.green)),
  },
], 'SVOC②：make・keep・find 型');

// ───────── eigo_s080 SVOO と SVOC の見分け ─────────
const s080: DiagramFigure = show([
  {
    note: '問題です。My father gave me a watch on my birthday. の文型は何でしょう。SVOO と SVOC は、動詞のうしろに語が二つ並ぶ見た目がそっくりです。三つの手順で、迷わず決められます。',
    add: [...row([['My father', 'b'], ['gave', 'm'], ['me', 'n'], ['a watch', 'n'], ['on my birthday.', 'n']], 40, { size: 11 }), ...cap('第何文型？', C.ink)],
  },
  {
    note: '手順①　修飾語（しゅうしょくご）を消します。前置詞から始まるかたまり（on my birthday）、時の語句（every day）、様子の副詞（fast・always）を（　）でくくって消します。',
    add: fresh(...row([['My father', 'b'], ['gave', 'm'], ['me', 'n'], ['a watch', 'n'], ['(on my birthday)', 'r']], 40, { size: 11 }), at(272, 86, '消す', 12, C.red, true), ...cap('① 前置詞のかたまり・時の語を 消す', C.red)),
  },
  {
    note: '手順②　のこった要素の数を数えます。My father ／ gave ／ me ／ a watch。主語と動詞のあとに、語のかたまりが二つ残りました。二つなら、第4文型か第5文型です。',
    add: fresh(...row([['My father', 'b', 'S'], ['gave', 'm', 'V'], ['me', 'g', '①'], ['a watch', 'g', '②']], 40, { size: 13 }), ...cap('② のこりを数える（二つ）', C.blue)),
  },
  {
    note: '❓なぜ、修飾語を消してから数えるのでしょう。→ 修飾語まで数えると要素が一つふえて、SVO を SVOO とまちがえるからです。on my birthday は「いつ」を説明するだけの飾りで、文の骨組みではありません。',
    add: fresh(...row([['He', 'b'], ['plays', 'm'], ['tennis', 'g'], ['on Sunday.', 'r']], 28, { size: 13 }), at(160, 72, '消さずに数えると 2つ → SVOO？', 11, C.red, true), at(160, 94, '✗ まちがい', 11, C.red, true), at(160, 116, '消して数えると 1つ（tennis）→ SVO', 11, C.green, true), ...cap('先に消す → 骨組みだけ数える', C.green)),
  },
  {
    note: '手順③　イコールで判断します。二つのとき、前＝後ろなら SVOC、ちがえば SVOO。me ＝ a watch？ → 私は腕時計ではないので ✗。だから My father gave me a watch. は SVOO（第4文型）です。',
    add: fresh(...row([['My father', 'b'], ['gave', 'm'], ['me', 'g'], ['a watch', 'g']], 40, { size: 13 }), at(160, 98, 'me ＝ a watch ?  ✗', 13, C.red, true), at(160, 122, '→ SVOO（第4文型）', 13, C.blue, true), ...cap('③ ＝ にならなければ SVOO', C.blue)),
  },
  {
    note: 'もう一つの例です。We call him Ken. も、後ろに語が二つ（him・Ken）。him ＝ Ken が成り立つので SVOC（第5文型）です。同じ手順で、どんな文も決められます。',
    add: fresh(...row([['We', 'b'], ['call', 'm'], ['him', 'g'], ['Ken', 'g']], 40, { size: 13 }), ...brk(cx([['We', 'b'], ['call', 'm'], ['him', 'g'], ['Ken', 'g']], 2), cx([['We', 'b'], ['call', 'm'], ['him', 'g'], ['Ken', 'g']], 3), 26, 'him ＝ Ken ○'), at(160, 106, '→ SVOC（第5文型）', 13, C.green, true), ...cap('二つが ＝ なら SVOC', C.green)),
  },
  {
    note: '動詞から見当をつけることもできます。give・send・show・teach・buy・make・cook が出たら SVOO の可能性が高く、call・name・keep・find・leave が出たら SVOC の可能性が高いです。make はどちらにもなるので、必ずイコールを確かめます。',
    add: fresh(...row([['give send show\nteach buy cook', 'b']], 14, { h: 52, x0: 8, x1: 156, size: 12 }), ...row([['call name keep\nfind leave', 'g']], 14, { h: 52, x0: 164, x1: 312, size: 12 }), at(82, 82, 'SVOO（人に ものを）', 12, C.blue, true), at(238, 82, 'SVOC（O ＝ C）', 12, C.green, true), ...row([['make は どちらにも なる → ＝ で たしかめる', 'm']], 98, { h: 30, size: 12, x0: 20, x1: 300 }), ...cap('make だけは ＝ で 決める', C.main)),
  },
  {
    note: '五つの文型を整理します。第1文型 SV、第2文型 SVC（S＝C）、第3文型 SVO（S≠O）、第4文型 SVOO（O1≠O2）、第5文型 SVOC（O＝C）。まず修飾語を消す作業を省かないことが大切です。',
    add: fresh(...grid([['文型', '形', '＝？'], ['第1', 'SV', '—'], ['第2', 'SVC', 'S ＝ C'], ['第3', 'SVO', 'S ≠ O'], ['第4', 'SVOO', 'O ≠ O'], ['第5', 'SVOC', 'O ＝ C']], 40, 4, [60, 90, 90], 22, { size: 11, head: 'b', body: 'n', firstCol: 'm' }), ...cap('① 消す ② 数える ③ ＝ で決める', C.green)),
  },
], '文型の見分け：消す→数える→イコール');

// ───────── eigo_s082 数えられない名詞の四つのグループ ─────────
const s082: DiagramFigure = show([
  {
    note: '問題です。water（水）を「1つ、2つ」と数えることはできるでしょうか。music（音楽）はどうでしょう。目に見えないものも数えられません。',
    add: [...row([['water', 'b'], ['music', 'p']], 30, { size: 16, h: 40, x0: 40, x1: 280, gap: 30 }), at(80, 90, '1つ、2つ…？', 12, C.gray), at(240, 90, '1つ、2つ…？', 12, C.gray), ...cap('数えられない名詞が ある', C.ink)],
  },
  {
    note: '❓なぜ水は数えられないのでしょう。→ 水は決まった形がなく、コップ半分にしても、ひとしずくにしても、同じ「水」と呼べるからです。これを一つ、二つと数える「単位」がありません。数えられない名詞を不可算名詞（ふかさんめいし）といいます。',
    add: fresh(bx(20, 24, 90, 60, 'water', C.blue, FILL.blue, 16), ar(116, 54, 150, 54, C.gray), bx(156, 34, 50, 40, 'water', C.blue, FILL.blue, 13), bx(214, 42, 30, 24, 'water', C.blue, FILL.blue, 9), at(160, 110, '分けても 同じ「water」', 12, C.blue, true), ...cap('分けても 同じ名前 → 数えない', C.blue)),
  },
  {
    note: '数えられない名詞は、四つの型に分けて覚えます。①物質名詞（ぶっしつめいし）＝水や米のような材料、②抽象名詞（ちゅうしょうめいし）＝目に見えないことがら、③固有名詞（こゆうめいし）＝世界に一つの名前、④まとめて呼ぶ名詞。',
    add: fresh(...[['① 物質（材料）', 'water・milk・rice', 'b'], ['② 抽象（見えない）', 'music・love・time', 'p'], ['③ 固有（世界に一つ）', 'Japan・Tokyo・Ken', 'g'], ['④ まとめて呼ぶ', 'furniture・baggage', 'm']].flatMap(([a, b, k], i) => [bx(8 + (i % 2) * 154, 12 + Math.floor(i / 2) * 66, 150, 58, `${a}\n${b}`, K[k as KK][0], K[k as KK][1], 12)]), ...cap('4つの型で 覚える', C.ink)),
  },
  {
    note: '①物質名詞：water・milk・juice・bread・rice・meat・sugar・salt・paper・money・air・snow・rain など。形が決まっていないので数えません。②抽象名詞：music・love・peace・time・work・health・luck・fun・help・advice・news など。',
    add: fresh(en('① 物質', 16, 12, C.blue), ...row([['water', 'b'], ['milk', 'b'], ['bread', 'b'], ['rice', 'b'], ['money', 'b']], 24, { size: 12, h: 26 }), en('② 抽象', 76, 12, C.purple), ...row([['music', 'p'], ['love', 'p'], ['peace', 'p'], ['time', 'p'], ['health', 'p']], 84, { size: 12, h: 26 }), ...cap('どれも a や -s は つけない', C.red)),
  },
  {
    note: '④まとめて呼ぶ名詞は、とくに入試でねらわれます。furniture（家具類）は、つくえ・いす・たななどをひとまとめにした言い方です。「1つ2つ」と数えられそうですが、furniture 自体は数えません。furnitures とは書きません。',
    add: fresh(...row([['desk', 'n'], ['chair', 'n'], ['shelf', 'n']], 14, { size: 13, x0: 40, x1: 280 }), ar(160, 48, 160, 68, C.gray), bx(100, 72, 120, 34, 'furniture', C.main, FILL.warm, 16), ngb(100, 116, 120, '✗ furnitures', 13), ...cap('いろいろな物を まとめた名前', C.main)),
  },
  {
    note: '❓数えられないなら、量はどう言うのでしょう。→ 量を表すことばを借ります。much・a lot of（たくさんの）、some（いくらかの）、a little（少しの）、no（まったくない）。I have a lot of homework today. のように使います。',
    add: fresh(...grid([['量を言うことば', '例'], ['a lot of / much', 'a lot of homework'], ['some', 'some water'], ['a little', 'a little milk'], ['no', 'no rain']], 8, 10, [110, 190], 28, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('数のかわりに 量を言う', C.blue)),
  },
  {
    note: '数えられるものには How many、数えられないものには How much です。How much water do you drink every day?（毎日どのくらい水を飲みますか）。また、動詞は単数あつかいです。Music is my favorite subject. のように is を使います。',
    add: fresh(...row([['How much', 'b'], ['water', 'g'], ['do you drink?', 'n']], 14, { size: 13 }), at(160, 62, '量を たずねる', 11, C.blue, true), ...row([['Music', 'p'], ['is', 'm'], ['my favorite subject.', 'n']], 86, { size: 13 }), at(160, 134, '動詞は 単数あつかい（is）', 11, C.purple, true), ...cap('How much ／ is を つかう', C.ink)),
  },
  {
    note: 'まとめです。a を付けたくなったら、その語が四つの型のどれかでないかを確かめます。よくわからないときは some を置くと安全です。I want some bread.（パンがほしい）は、a bread よりも自然です。',
    add: fresh(...row([['a bread', 'r'], ['some bread', 'g']], 30, { size: 15, h: 40, x0: 30, x1: 290, gap: 24 }), at(cx([['a bread', 'r'], ['some bread', 'g']], 0, { size: 15, x0: 30, x1: 290, gap: 24 }), 90, '✗', 18, C.red, true), at(cx([['a bread', 'r'], ['some bread', 'g']], 1, { size: 15, x0: 30, x1: 290, gap: 24 }), 90, '○', 18, C.green, true), ...cap('迷ったら some を おく', C.green)),
  },
], '数えられない名詞：4つの型');

// ───────── eigo_s083 日本語の感覚とずれる不可算名詞 ─────────
const s083: DiagramFigure = show([
  {
    note: '問題です。「宿題がたくさんある」を I have many homeworks. と書いてよいでしょうか。日本語では「宿題が3つ」と数えられますが、英語ではどうでしょう。',
    add: [...row([['I', 'b'], ['have', 'm'], ['many', 'r'], ['homeworks.', 'r']], 40, { size: 14 }), ...cap('homework は 数えるのかな？', C.red)],
  },
  {
    note: '必ず覚える11語です。homework（宿題）、information（情報）、advice（助言）、furniture（家具）、baggage・luggage（荷物）、news（知らせ）、work（仕事）、money（お金）、weather（天気）、traffic（交通）、fun（楽しみ）。すべて数えられない名詞です。',
    add: fresh(...[['homework', 'information', 'advice'], ['furniture', 'baggage', 'news'], ['work', 'money', 'weather'], ['traffic', 'fun', 'luggage']].flatMap((r, i) => row(r.map((t) => [t, 'b'] as Wd), 10 + i * 34, { size: 12, h: 26, x0: 8, x1: 312, gap: 8 })), ...cap('日本語では 数えそうな 11語', C.red)),
  },
  {
    note: '❓どうして数えられないのでしょう。→ 英語では、これらを「一つひとつの品物」ではなく「そういう種類のもの全体」としてとらえるからです。furniture はつくえ・いす・たなをまとめた呼び名で、それ自体は1つ2つと数えません。',
    add: fresh(...row([['desk', 'n'], ['chair', 'n'], ['shelf', 'n']], 16, { size: 13, x0: 40, x1: 280 }), ar(160, 50, 160, 68, C.gray), bx(90, 72, 140, 36, 'furniture（家具類）', C.main, FILL.warm, 13), at(160, 128, '「〜類」「〜というもの」→ 数えない', 11, C.main, true), ...cap('日本語で「〜類」と 言えたら 不可算', C.main)),
  },
  {
    note: '数えたいときは「単位」を借ります。a piece of advice（助言1つ）、two pieces of information（情報2つ）。furniture は、a desk や two chairs のように具体的な語に言いかえるか、a piece of furniture（家具1点）と言います。',
    add: fresh(...grid([['数えられない', '数えるとき'], ['advice', 'a piece of advice'], ['information', 'two pieces of information'], ['furniture', 'a piece of furniture\nまたは a desk / two chairs']], 8, 10, [100, 200], 34, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('a piece of を借りて 数える', C.blue)),
  },
  {
    note: 'money（お金）は数えられません。I don\'t have much money. のように much を使い、many moneys とは言えません。数えられるのは coin（硬貨）や bill（紙幣）で、two coins は正しい言い方です。',
    add: fresh(...row([['many moneys', 'r']], 12, { size: 13, x0: 20, x1: 150 }), at(85, 54, '✗', 16, C.red, true), ...row([['much money', 'g']], 12, { size: 13, x0: 170, x1: 300 }), at(235, 54, '○', 16, C.green, true), ...row([['a coin', 'g'], ['two coins', 'g'], ['a bill', 'g']], 84, { size: 13 }), at(160, 128, 'お金の「つぶ」は 数えられる', 11, C.green, true), ...cap('money は much。硬貨・紙幣は 数える', C.green)),
  },
  {
    note: 'news は -s で終わっていますが、複数形ではありません。単数あつかいです。The news was very sad.（その知らせはとても悲しかった）。同じように、mathematics（数学）も -s で終わるのに単数あつかいの語です。',
    add: fresh(...row([['The news', 'p'], ['was', 'm'], ['very sad.', 'n']], 24, { size: 13 }), at(160, 68, 'news は -s でも 1つ分（単数）', 12, C.purple, true), ...row([['The news', 'p'], ['were', 'r']], 92, { size: 13, x0: 80, x1: 240 }), at(160, 134, '✗ were は つかえない', 11, C.red, true), ...cap('news は -s が ついても 単数', C.purple)),
  },
  {
    note: 'work も要注意です。「仕事・労働」の意味では数えられません。I have a lot of work to do.（するべき仕事がたくさんある）。「職・勤め口」と言うときは、数えられる語 job を使います。I found a good job.（よい仕事を見つけた）。',
    add: fresh(...row([['work（仕事）', 'p', '数えない'], ['job（勤め口）', 'g', '数える']], 24, { size: 14, h: 40, x0: 30, x1: 290, gap: 20 }), en('a lot of work', 100, 13, C.purple), en('a good job', 122, 13, C.green), ...cap('仕事は work、職は job', C.ink)),
  },
  {
    note: 'まとめです。these・many・数字が前にあるのに不可算名詞が来ていたら、そこがまちがいです。many homeworks、two informations、three advices はどれも誤り。much や a lot of、a piece of に直します。',
    add: fresh(...[['many homeworks', 'a lot of homework'], ['two informations', 'two pieces of information'], ['three advices', 'three pieces of advice']].flatMap(([a, b], i) => [ngb(6, 14 + i * 44, 130, a, 12), ar(140, 27 + i * 44, 156, 27 + i * 44, C.gray), okb(160, 14 + i * 44, 154, b, 11)]), ...cap('不可算に 数字・many は つけない', C.green)),
  },
], '日本語の感覚とずれる不可算名詞');

// ───────── eigo_s084 可算にも不可算にもなる名詞 ─────────
const s084: DiagramFigure = show([
  {
    note: '問題です。a glass は「コップ」、glass は「ガラス」。a paper は「新聞」、paper は「紙」。同じ語なのに、a があるかないかで意味が変わります。',
    add: [...row([['a glass', 'b'], ['glass', 'p']], 24, { size: 16, h: 40, x0: 30, x1: 290, gap: 24 }), at(80, 80, 'コップ', 13, C.blue, true), at(240, 80, 'ガラス', 13, C.purple, true), ...cap('a が あると 意味が かわる', C.ink)],
  },
  {
    note: '❓どうして a で意味が変わるのでしょう。→ 材料やぼんやりした全体を言うときは数えない（不可算）。形のある「1つの品物」を言うときは数える（可算）。つまり a は飾りではなく、意味を運んでいます。',
    add: fresh(...row([['材料・ぼんやり全体', 'p', '数えない（a なし）'], ['形のある1つの品物', 'b', '数える（a ・-s）']], 20, { size: 12, h: 50, x0: 10, x1: 310, gap: 16 }), at(160, 112, 'glass：ガラス ／ a glass：コップ', 12, C.main, true), ...cap('材料 → 不可算 ／ 1品 → 可算', C.main)),
  },
  {
    note: 'glass は、窓はガラスでできている（The window is made of glass.）と、コップ1ぱいの牛乳（a glass of milk）で使い分けます。paper も、紙が少しいる（some paper）と、毎朝新聞を読む（I read a paper）で意味が変わります。',
    add: fresh(...grid([['語', '数えない', '数える'], ['glass', 'ガラス', 'コップ'], ['paper', '紙', '新聞・答案']], 8, 6, [70, 112, 118], 28, { size: 13, head: 'b', body: 'n', firstCol: 'm' }), en('The window is made of glass.', 104, 12), en('I read a paper every morning.', 126, 12), ...cap('glasses は「めがね」', C.main)),
  },
  {
    note: 'chicken も同じです。I ate chicken for dinner.（夕食に鶏肉を食べた）は数えない使い方。There are three chickens in the yard.（庭ににわとりが3羽いる）は数える使い方です。',
    add: fresh(...row([['chicken', 'p', '鶏肉（数えない）'], ['a chicken / chickens', 'b', 'にわとり（数える）']], 24, { size: 13, h: 40, x0: 8, x1: 312, gap: 16 }), en('I ate chicken.', 100, 13, C.purple), en('There are three chickens.', 122, 13, C.blue), ...cap('食べる肉 ／ いきもの', C.ink)),
  },
  {
    note: '❓I ate a chicken. と書くとどうなるでしょう。→ 「にわとりを1羽まるごと食べた」という意味になってしまいます。鶏肉を食べたのなら、I ate chicken. か I ate some chicken. です。a の有無で意味が変わることを、文法として理解しておきましょう。',
    add: fresh(...row([['I ate a chicken.', 'r']], 20, { size: 14, h: 34, x0: 40, x1: 280 }), at(160, 70, '→ にわとり1羽まるごと！', 12, C.red, true), ...row([['I ate chicken.', 'g']], 88, { size: 14, h: 34, x0: 40, x1: 280 }), at(160, 138, '→ 鶏肉を 食べた', 12, C.green, true), ...cap('a が あるか ないかで 大ちがい', C.red)),
  },
  {
    note: 'room（余地・空間／部屋）と time（時間／回数）も同じ型です。There is no room for my bag.（かばんを置く場所がない）／ There are six rooms.（部屋が6つ）。I don\'t have time.（時間がない）／ three times（3回）。',
    add: fresh(...grid([['語', '数えない', '数える'], ['room', '余地・空間', '部屋 (rooms)'], ['time', '時間', '回数 (times)']], 8, 6, [70, 112, 118], 28, { size: 13, head: 'b', body: 'n', firstCol: 'm' }), en('There is no room for my bag.', 104, 12), en('I have been to Kyoto three times.', 126, 12), ...cap('空間・時間 ／ 部屋・回数', C.main)),
  },
  {
    note: 'そのほかの例です。light は、光（不可算）と電灯（可算）。work は、仕事（不可算）と作品（可算）。fish は、魚の身（不可算）と魚（可算で複数形も fish）。hair は、髪全体（不可算）と髪の毛1本（可算）。iron は、鉄（不可算）とアイロン（可算）。',
    add: fresh(...grid([['語', '数えない', '数える'], ['light', '光', '電灯'], ['work', '仕事', '作品'], ['fish', '魚の身', '魚（fish）'], ['hair', '髪（全体）', '髪の毛1本'], ['iron', '鉄', 'アイロン']], 8, 4, [70, 112, 118], 23, { size: 11, head: 'b', body: 'n', firstCol: 'm' }), ...cap('たくさん あるけれど 型は 同じ', C.main)),
  },
  {
    note: 'まとめです。材料やぼんやりした全体をさすときは不可算、切り取られた形のある1品をさすときは可算。a や -s が付くかどうかで意味が変わるので、冠詞は飾りではありません。',
    add: fresh(...row([['全体・材料', 'p', 'a なし'], ['1つの品物', 'b', 'a・-s あり']], 28, { size: 15, h: 44, x0: 20, x1: 300, gap: 24 }), ...cap('a は 意味を はこぶことば', C.main)),
  },
], '可算にも不可算にもなる名詞');

// ───────── eigo_s086 複数形① -s ─────────
const s086: DiagramFigure = show([
  {
    note: '問題です。「本を3冊持っています」を I have three book. と書くのは正しいでしょうか。',
    add: [...row([['I', 'b'], ['have', 'm'], ['three', 'y'], ['book.', 'r']], 40, { size: 14 }), ...cap('three の あとの book は？', C.red)],
  },
  {
    note: '❓なぜ book に -s が要るのでしょう。→ 英語は「数」を、数字と名詞の形の二か所で知らせるからです。three と言った時点で2つ以上なので、名詞も複数形（ふくすうけい）にします。日本語にはこの二重の合図がないので、書き忘れやすいのです。',
    add: fresh(...row([['three', 'y', '合図①'], ['books', 'g', '合図②（-s）']], 28, { size: 16, h: 40, x0: 30, x1: 290, gap: 20 }), at(160, 112, '数字も 名詞の形も 「2つ以上」を 知らせる', 11, C.main, true), ...cap('数字がある → 名詞も 複数形', C.green)),
  },
  {
    note: '作り方の基本は、語尾に -s を付けるだけです。book→books、pen→pens、dog→dogs、apple→apples、friend→friends、student→students、table→tables。',
    add: fresh(...[['book', 'books'], ['pen', 'pens'], ['dog', 'dogs'], ['apple', 'apples'], ['friend', 'friends'], ['table', 'tables']].flatMap(([a, b], i) => { const x = 8 + (i % 2) * 158; const y = 10 + Math.floor(i / 2) * 44; return [bx(x, y, 62, 30, a, C.blue, FILL.blue, 13), ar(x + 64, y + 15, x + 82, y + 15, C.gray), bx(x + 84, y, 66, 30, b, C.green, FILL.green, 13)]; }), ...cap('語尾に -s を つける', C.green)),
  },
  {
    note: '複数形にする合図は五つ。①数字（two books）、②many、③some／a lot of、④these／those、⑤ several・both・all。There are a lot of books in this room. のように、合図があれば -s を付けます。',
    add: fresh(...[['two', 'many', 'some'], ['a lot of', 'these', 'those']].flatMap((r, i) => row(r.map((t) => [t, 'y'] as Wd), 12 + i * 36, { size: 13, h: 28, x0: 20, x1: 300, gap: 12 })), ar(160, 80, 160, 94, C.gray), bx(100, 98, 120, 30, '＋ 名詞s', C.green, FILL.green, 14), ...cap('合図があれば 名詞は -s', C.green)),
  },
  {
    note: '❓単数のままにする場合は？ → one のうしろ（one book）、a／an のうしろ（a book）、each／every のうしろ（every student）。every は「一人ひとり」を見ているので単数です。× one books、× every students は誤りです。',
    add: fresh(...grid([['語', '正しい', 'まちがい'], ['one', 'one book', '× one books'], ['a / an', 'a book', '× a books'], ['every', 'every student', '× every students']], 8, 10, [60, 120, 120], 32, { size: 12, head: 'g', body: 'n', firstCol: 'm' }), ...cap('one・a・every は 単数のまま', C.green)),
  },
  {
    note: '❓名詞を複数形にしたら、ほかの部分は変わらないのでしょうか。→ 変わります。be動詞も変わります。This book is new. → These books are new. That was a good movie. → Those were good movies. this は these、that は those になります。',
    add: fresh(...row([['This', 'b'], ['book', 'b'], ['is', 'm'], ['new.', 'n']], 14, { size: 12, h: 26 }), ar(160, 46, 160, 62, C.gray), ...row([['These', 'g'], ['books', 'g'], ['are', 'g'], ['new.', 'n']], 66, { size: 12, h: 26 }), ...row([['That was a good movie.', 'b']], 108, { size: 11, h: 24 }), ...cap('this→these ／ is→are ／ was→were', C.green)),
  },
  {
    note: '一般動詞の -s も消えます。My friend likes soccer. → My friends like soccer.「主語に -s が付いたら、動詞の -s は取れる」と覚えます。また、There is a book → There are two books。He is a student → They are students（a は消える）。',
    add: fresh(...row([['My friend', 'b'], ['likes', 'm'], ['soccer.', 'n']], 14, { size: 12, h: 26 }), ar(160, 46, 160, 62, C.gray), ...row([['My friends', 'g'], ['like', 'g'], ['soccer.', 'n']], 66, { size: 12, h: 26 }), ...row([['He is a student.', 'b'], ['→', 'n'], ['They are students.', 'g']], 108, { size: 11, h: 26 }), ...cap('主語に -s が つくと 動詞の -s は とれる', C.green)),
  },
  {
    note: 'まとめです。単数の文を複数の文に書きかえるときは、①主語の名詞 ②be動詞または一般動詞 ③this／that ④a／an の四か所を順に点検します。',
    add: fresh(...grid([['点検', 'before', 'after'], ['①名詞', 'friend', 'friends'], ['②動詞', 'is / likes', 'are / like'], ['③ this', 'this / that', 'these / those'], ['④ a / an', 'a student', 'students']], 8, 6, [64, 118, 118], 26, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('4か所を 順に 点検する', C.green)),
  },
], '複数形①：数字があれば名詞も -s');

// ───────── eigo_s087 複数形② -es ─────────
const s087: DiagramFigure = show([
  {
    note: '問題です。box の複数形は boxs でしょうか。potato は potatos でしょうか。それに piano は pianoes でしょうか。-s を付けるだけでは、うまくいかない語があります。',
    add: [...row([['box', 'b'], ['potato', 'b'], ['piano', 'b']], 30, { size: 15, h: 40 }), at(160, 94, 'boxs？  potatos？  pianoes？', 13, C.red, true), ...cap('-s だけで いいのかな？', C.red)],
  },
  {
    note: '❓なぜ box には -es が付くのでしょう。→ -s だけを付けると、音がつながって発音できないからです。bus に s を付けても「バス」のままです。そこで e をはさんで -es とすると、「バスィズ」と音が一つふえて言えるようになります。',
    add: fresh(...row([['bus', 'b'], ['＋ s', 'r'], ['＝ バス？', 'r']], 20, { size: 14, h: 34 }), at(160, 68, '音が つながって 区別できない', 11, C.red, true), ...row([['bus', 'b'], ['＋ es', 'g'], ['＝ バスィズ', 'g']], 88, { size: 14, h: 34 }), at(160, 136, '音が 一つ ふえる', 11, C.green, true), ...cap('言いやすくするために e を はさむ', C.green)),
  },
  {
    note: 's・x・ch・sh で終わる語には -es を付けます。bus→buses、class→classes、box→boxes、fox→foxes、watch→watches、church→churches、sandwich→sandwiches、dish→dishes、brush→brushes。',
    add: fresh(...grid([['語尾', '例'], ['s', 'bus → buses ／ class → classes'], ['x', 'box → boxes ／ fox → foxes'], ['ch', 'watch → watches ／ church → churches'], ['sh', 'dish → dishes ／ brush → brushes']], 8, 8, [44, 256], 30, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('s・x・ch・sh → -es', C.blue)),
  },
  {
    note: '❓o で終わる語は？ → 二つに分かれます。-es を付ける語：potato→potatoes、tomato→tomatoes、hero→heroes、echo→echoes。-s だけの語：piano→pianos、photo→photos、radio→radios、kilo→kilos、zoo→zoos。',
    add: fresh(...row([['potatoes\ntomatoes\nheroes\nechoes', 'g']], 14, { h: 82, x0: 10, x1: 150, size: 13 }), ...row([['pianos\nphotos\nradios\nkilos\nzoos', 'b']], 14, { h: 82, x0: 170, x1: 310, size: 12 }), at(80, 110, '-es（食べ物・古い語）', 11, C.green, true), at(240, 110, '-s だけ', 11, C.blue, true), ...cap('o で終わる語は 二つに わかれる', C.main)),
  },
  {
    note: '❓どうやって覚えればよいでしょう。→ 「じゃがいもとトマトは英雄だ」と一文にして、potatoes・tomatoes・heroes を三語まとめて覚えます。それ以外の o は -s と考えておけば、中学入試ではほぼ困りません。',
    add: fresh(bx(20, 24, 280, 40, 'じゃがいも と トマトは 英雄だ', C.main, FILL.yellow, 15), ar(60, 68, 60, 90, C.gray), ar(160, 68, 160, 90, C.gray), ar(260, 68, 260, 90, C.gray), ...row([['potatoes', 'g'], ['tomatoes', 'g'], ['heroes', 'g']], 94, { size: 13, h: 32 }), at(160, 144, 'それ以外の o は -s', 11, C.blue, true), ...cap('三語を 一文で まとめて 覚える', C.main)),
  },
  {
    note: '❓zoo はなぜ -s だけなのでしょう。→ zoo は o の前の文字も o（母音（ぼいん）が2つ並ぶ形）だからです。母音＋o で終わる語は、そのまま -s を付けます。zoo→zoos、radio→radios。',
    add: fresh(...row([['zoo', 'b'], ['→', 'n'], ['zoos', 'g']], 28, { size: 16, h: 40, x0: 40, x1: 280 }), at(160, 92, '前の字も 母音（o）→ そのまま -s', 12, C.blue, true), ...row([['radio', 'b'], ['→', 'n'], ['radios', 'g']], 104, { size: 14, h: 32, x0: 60, x1: 260 }), ...cap('母音＋o は -s だけ', C.blue)),
  },
  {
    note: '逆向きのまちがいに気をつけましょう。pianoes・photoes は誤りで、pianos・photos が正しい。potatos・tomatos も誤りで、potatoes・tomatoes が正しい。同じ o 終わりなのに逆向きの誤りが起きるので、口に出して確かめます。',
    add: fresh(...[['pianoes', 'pianos'], ['photoes', 'photos'], ['potatos', 'potatoes'], ['tomatos', 'tomatoes']].flatMap(([a, b], i) => [ngb(30, 8 + i * 34, 100, a, 13), ar(134, 21 + i * 34, 170, 21 + i * 34, C.gray), okb(174, 8 + i * 34, 110, b, 13)]), ...cap('o 終わりは 逆向きの まちがいが 多い', C.red)),
  },
  {
    note: 'まとめです。s・x・ch・sh には -es（音が一つふえる）。o は potatoes・tomatoes・heroes だけ -es、ほかは -s。f・fe で終わる語は別の決まりなので、次のセッションで学びます。',
    add: fresh(...row([['s x ch sh', 'g', '＋ es'], ['o', 'm', '3語だけ es'], ['f / fe', 'n', 'つぎの 単元']], 28, { size: 14, h: 40, x0: 8, x1: 312, gap: 14 }), ...cap('音が ふえたら -es', C.green)),
  },
], '複数形②：-es をつける語');

// ───────── eigo_s088 複数形③ y・f/fe ─────────
const s088: DiagramFigure = show([
  {
    note: '問題です。city は cities になり、day は days になります。同じ y で終わるのに、変わり方がちがうのはなぜでしょう。',
    add: [...row([['city', 'b'], ['→', 'n'], ['cities', 'g']], 22, { size: 15, h: 34, x0: 40, x1: 280 }), ...row([['day', 'b'], ['→', 'n'], ['days', 'g']], 72, { size: 15, h: 34, x0: 40, x1: 280 }), ...cap('同じ y なのに ちがう', C.red)],
  },
  {
    note: '❓分かれ目はどこでしょう。→ y の一つ前の文字です。city は t が前（子音字（しいんじ））、day は a が前（母音字（ぼいんじ））。母音字は a・i・u・e・o の五文字です。',
    add: fresh(...[['c','i','t','y'], ['d','a','y']].flatMap((r, ri) => r.map((ch, i) => bx(60 + i * 40 + (ri === 1 ? 20 : 0), 20 + ri * 60, 36, 36, ch, i === r.length - 2 ? (ri === 0 ? C.red : C.green) : C.gray, i === r.length - 2 ? (ri === 0 ? FILL.red : FILL.green) : FILL.gray, 16))), at(250, 38, '一つ前が t（子音字）', 11, C.red, true), at(250, 98, '一つ前が a（母音字）', 11, C.green, true), ...cap('y の「一つ前」を 見る', C.main)),
  },
  {
    note: '子音字＋y は、y を i に変えて -es を付けます。city→cities、country→countries、baby→babies、story→stories、family→families、library→libraries、party→parties、hobby→hobbies。',
    add: fresh(...row([['city', 'b'], ['c i t y', 'n'], ['cities', 'g']], 14, { size: 14, h: 30 }), ...row([['y を i に', 'r'], ['＋ es', 'g']], 62, { size: 14, h: 30, x0: 60, x1: 260 }), ...grid([['baby', 'babies'], ['story', 'stories'], ['family', 'families']], 40, 102, [120, 120], 14, { size: 10 }), ...cap('子音字＋y → y を i にして -es', C.red)),
  },
  {
    note: '母音字＋y は、そのまま -s です。boy→boys、day→days、key→keys、toy→toys、monkey→monkeys、way→ways、holiday→holidays。boies や dayes と書かないようにします。',
    add: fresh(...row([['boy', 'b'], ['→', 'n'], ['boys', 'g']], 16, { size: 14, h: 30 }), ...row([['day', 'b'], ['→', 'n'], ['days', 'g']], 56, { size: 14, h: 30 }), ...row([['key', 'b'], ['→', 'n'], ['keys', 'g']], 96, { size: 14, h: 30 }), at(285, 34, '× boies', 11, C.red), ...cap('母音字＋y は そのまま -s', C.green)),
  },
  {
    note: '手順は三つです。①語尾が y か確かめる。②y のすぐ左の一文字を見る。③a・i・u・e・o なら -s、それ以外なら y を i に変えて -es。boy を boies としてしまう誤りは、②をとばすことから起こります。',
    add: fresh(...[['① 語尾は y？', 'b'], ['② y のすぐ左を 見る', 'm'], ['③ a i u e o → -s ／ ほか → ies', 'g']].flatMap(([t, k], i) => [...(i > 0 ? [ar(160, 12 + i * 44 - 5, 160, 12 + i * 44 + 3, C.gray)] : []), bx(24, 12 + i * 44, 272, 32, t, K[k as KK][0], K[k as KK][1], 12)]), ...cap('一つ前を 見る 習慣', C.green)),
  },
  {
    note: '❓f・fe で終わる語は？ → 多くは f・fe を v に変えて -es を付けます。leaf→leaves、knife→knives、life→lives、wife→wives、wolf→wolves、shelf→shelves、thief→thieves、half→halves。読み方も「フ」から「ヴズ」に変わります。',
    add: fresh(...grid([['f / fe', 'v にかえる'], ['leaf', 'leaves'], ['knife', 'knives'], ['life', 'lives'], ['wife', 'wives'], ['wolf', 'wolves']], 40, 4, [110, 130], 23, { size: 12, head: 'p', body: 'n', firstCol: 'm' }), ...cap('f・fe は v に かえる', C.purple)),
  },
  {
    note: '例外もあります。roof→roofs（屋根）、chief→chiefs（長）、safe→safes（金庫）、belief→beliefs（信念）、cliff→cliffs（がけ）は、そのまま -s です。中学入試で問われるのはほぼ leaf・knife・life・wife の四語です。',
    add: fresh(...row([['leaf  knife\nlife  wife', 'p']], 14, { h: 52, x0: 10, x1: 150, size: 13 }), ...row([['roof  chief\nsafe  belief', 'n']], 14, { h: 52, x0: 170, x1: 310, size: 13 }), at(80, 80, 'v にかえる', 12, C.purple, true), at(240, 80, '-s だけ（例外）', 12, C.gray, true), en('「葉っぱ・ナイフ・命・妻はヴになる」', 112, 11, C.main), ...cap('四語 ＋ roof を 覚える', C.purple)),
  },
  {
    note: 'life の複数形 lives（命）は「ライヴズ」と読みます。live（住む）の三人称単数 lives（リヴズ）とつづりが同じです。Many lives were saved. は名詞、He lives in Osaka. は動詞です。どちらかは文のなかで判断します。',
    add: fresh(...row([['Many lives were saved.', 'g']], 14, { size: 12, h: 28 }), at(160, 56, '名詞（命）ライヴズ', 12, C.green, true), ...row([['He lives in Osaka.', 'b']], 84, { size: 12, h: 28 }), at(160, 126, '動詞（住む）リヴズ', 12, C.blue, true), ...cap('つづりは 同じ、読みは ちがう', C.ink)),
  },
  {
    note: 'まとめです。①y は一つ前を見る（子音字＋y→ies、母音字＋y→ys）。②f・fe は v に変えて -es（leaf・knife・life・wife）。③例外は roof→roofs。',
    add: fresh(...row([['子音字＋y', 'r', 'ies'], ['母音字＋y', 'g', 'ys'], ['f・fe', 'p', 'ves']], 28, { size: 13, h: 40, x0: 8, x1: 312, gap: 14 }), ...cap('y は 一つ前、f は v', C.main)),
  },
], '複数形③：y と f・fe');

// ───────── eigo_s091 入れ物で数える ─────────
const s091: DiagramFigure = show([
  {
    note: '問題です。「水を2杯ください」を Two waters, please. と言いたくなりますが、教科書では two glasses of water と習います。どこがちがうのでしょう。',
    add: [...row([['Two waters', 'r'], ['two glasses of water', 'g']], 30, { size: 13, h: 40, x0: 8, x1: 312, gap: 14 }), ...cap('水そのものは 数えないのでは？', C.red)],
  },
  {
    note: '❓なぜ two waters と言えないのでしょう。→ water は数えられない名詞だからです。でも「水を2杯飲んだ」と言いたい場面はあります。そこで英語は、水そのものではなく、水を入れた「入れ物」のほうを数えます。',
    add: fresh(bx(30, 30, 76, 40, 'water', C.blue, FILL.blue, 15), at(68, 86, '数えない', 11, C.red, true), ar(114, 50, 150, 50, C.gray), bx(156, 20, 60, 60, 'glass\n（入れ物）', C.main, FILL.warm, 12), at(186, 98, '数える', 11, C.green, true), ...cap('入れ物を 数える', C.main)),
  },
  {
    note: '基本の形は〈単位のことば＋of＋数えられない名詞〉です。a glass of water（コップ1ぱいの水）、a cup of coffee（カップ1ぱいのコーヒー）、a bottle of milk（びん1本の牛乳）。',
    add: fresh(...row([['a glass', 'm', '単位'], ['of', 'p'], ['water', 'b', '数えない名詞']], 30, { size: 16, h: 40, x0: 20, x1: 300 }), en('a cup of coffee', 108, 13), en('a bottle of milk', 128, 13), ...cap('単位 ＋ of ＋ 名詞', C.main)),
  },
  {
    note: '❓glass と cup はどう使い分けるのでしょう。→ glass はガラスのコップなので冷たい飲み物（水・牛乳・ジュース）、cup は取っ手のついた温かい飲み物用なので、コーヒーや紅茶に使います。a cup of water とは、ふつう言いません。',
    add: fresh(...row([['glass', 'b', '冷たい'], ['cup', 'r', '温かい']], 14, { size: 16, h: 36, x0: 20, x1: 300, gap: 30 }), at(80, 72, 'water・milk・juice', 12, C.blue, true), at(240, 72, 'coffee・tea', 12, C.red, true), en('a glass of milk', 100, 13), en('a cup of tea', 124, 13), ...cap('冷たい＝glass ／ 温かい＝cup', C.main)),
  },
  {
    note: 'そのほかの入れ物です。a bottle of water（びん・ペットボトル1本の水）、a can of coffee（かん1本のコーヒー）、a bowl of rice（茶わん1ぱいのごはん）、a bowl of soup（スープ1ぱい）、a spoonful of sugar（スプーン1ぱいの砂糖）。',
    add: fresh(...grid([['単位', '例'], ['bottle', 'a bottle of water'], ['can', 'a can of coffee'], ['bowl', 'a bowl of rice / soup'], ['spoonful', 'a spoonful of sugar']], 8, 8, [80, 220], 28, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('入れ物しだいで 単位を かえる', C.blue)),
  },
  {
    note: '❓2はい、3ばいとふやすときは、どちらを複数形にするのでしょう。→ 単位のことばのほうです。単位（glass）は数えられる名詞だからです。a glass of water → two glasses of water。a cup of tea → three cups of tea。',
    add: fresh(...row([['a glass', 'n'], ['of', 'n'], ['water', 'n']], 12, { size: 14, h: 30 }), ar(160, 46, 160, 62, C.gray), ...row([['two glasses', 'g'], ['of', 'n'], ['water', 'n']], 66, { size: 14, h: 30 }), at(cx([['two glasses', 'g'], ['of', 'n'], ['water', 'n']], 0, { size: 14 }), 110, '← 複数形にする', 11, C.green, true), at(cx([['two glasses', 'g'], ['of', 'n'], ['water', 'n']], 2, { size: 14 }), 110, '← そのまま', 11, C.gray, true), ...cap('複数にするのは 入れ物（glass）', C.green)),
  },
  {
    note: '❓では two glasses of waters でもよいのでしょうか。→ いけません。water は数えられない名詞のまま、-s は付きません。× two glasses of waters は誤りです。three cups of tea、five bottles of milk のように、うしろは変えません。',
    add: fresh(...row([['two glasses of waters', 'r']], 20, { size: 14, h: 32, x0: 40, x1: 280 }), at(160, 66, '✗ water に -s は つけない', 12, C.red, true), ...row([['five bottles of milk', 'g']], 90, { size: 14, h: 32, x0: 40, x1: 280 }), at(160, 136, '○ 入れ物だけ 複数形', 12, C.green, true), ...cap('of の あとは そのまま', C.green)),
  },
  {
    note: 'たずね方は二つあります。数をたずねる How many glasses of water do you drink every day?（1日にコップ何ばい）。量をたずねる How much water do you drink every day?（どのくらい）。How many のうしろには、数えられる語 glasses が来ます。',
    add: fresh(...row([['How many', 'b'], ['glasses', 'g'], ['of water', 'n'], ['do you drink?', 'n']], 14, { size: 11, h: 28 }), at(160, 56, '数えられる語（glasses）が くる', 11, C.blue, true), ...row([['How much', 'p'], ['water', 'g'], ['do you drink?', 'n']], 82, { size: 12, h: 28 }), at(160, 124, '数えられない名詞（water）が くる', 11, C.purple, true), ...cap('How many ＋ 入れ物s ／ How much ＋ 名詞', C.ink)),
  },
  {
    note: 'まとめです。数えられない名詞は〈入れ物＋of＋名詞〉で数える。冷たいものは glass、温かいものは cup。ふやすときは入れ物を複数形にして、名詞はそのままにします。店で a coffee と短く言うのは会話の言い方で、答案では a cup of coffee と書きます。',
    add: fresh(...row([['two glasses of water', 'g']], 14, { size: 14, h: 30, x0: 20, x1: 300 }), ...row([['three cups of tea', 'g']], 54, { size: 14, h: 30, x0: 20, x1: 300 }), ...row([['a coffee → a cup of coffee', 'm']], 94, { size: 12, h: 30, x0: 20, x1: 300 }), ...cap('入れ物を 複数形、名詞は そのまま', C.green)),
  },
], '入れ物で数える：a glass of / a cup of');

// ───────── eigo_s092 形で数える ─────────
const s092: DiagramFigure = show([
  {
    note: '問題です。「アドバイスを1つ」を an advice と言えるでしょうか。advice は数えられないので、そのままでは数えられません。',
    add: [...row([['an advice', 'r']], 30, { size: 18, h: 44, x0: 60, x1: 260 }), at(160, 92, 'advice は 数えられない名詞', 12, C.gray), ...cap('どうやって 数えるのかな？', C.red)],
  },
  {
    note: '❓なぜ a piece of advice と言うのでしょう。→ advice は「助言というもの全体」を表すので、そのままでは数えられません。そこから「一つ分」を取り出す働きをするのが a piece of です。piece は「かけら・1片」という意味の数えられる名詞です。',
    add: fresh(bx(20, 20, 120, 60, 'advice\n（全体）', C.purple, FILL.purple, 14), ar(146, 50, 180, 50, C.gray), bx(186, 34, 80, 32, 'a piece', C.main, FILL.warm, 13), at(226, 88, '← 一つ分を 切りとる', 11, C.main, true), ...cap('全体から「一つ分」を 切りとる', C.main)),
  },
  {
    note: '万能の a piece of です。a piece of paper（紙1枚）、a piece of cake（ケーキ1切れ）、a piece of chalk（チョーク1本）、a piece of furniture（家具1点）、a piece of advice（助言1つ）、a piece of information（情報1つ）、a piece of news（ニュース1つ）、a piece of music（1曲）。',
    add: fresh(...[['paper', 'cake', 'chalk', 'furniture'], ['advice', 'information', 'news', 'music']].flatMap((r, i) => row(r.map((t) => [t, i === 0 ? 'b' : 'p'] as Wd), 48 + i * 40, { size: 12, h: 28, x0: 8, x1: 312, gap: 6 })), bx(110, 8, 100, 28, 'a piece of', C.main, FILL.warm, 13), ar(160, 38, 160, 46, C.main), ...cap('単位が 思いつかなければ a piece of', C.main)),
  },
  {
    note: '複数にするときも、piece のほうを複数形にします。two pieces of paper（紙2枚）。I need two pieces of paper. また、two informations や an advice は誤りで、two pieces of information、a piece of advice と言います。',
    add: fresh(...row([['two pieces', 'g'], ['of', 'n'], ['paper', 'n']], 20, { size: 15, h: 34 }), at(cx([['two pieces', 'g'], ['of', 'n'], ['paper', 'n']], 0, { size: 15 }), 66, '← 複数形', 11, C.green, true), ngb(60, 96, 200, '✗ two informations', 13), okb(60, 126, 200, '○ two pieces of information', 12), ...cap('複数にするのは piece', C.green)),
  },
  {
    note: 'もっと正確に言うために、物ごとに決まった単位もあります。紙は a sheet of paper（薄い1枚）、パンは a slice of bread（うすく切った1枚）と a loaf of bread（切る前の1斤）、チーズは a slice of cheese、板チョコは a bar of chocolate。',
    add: fresh(...grid([['もの', '単位'], ['紙', 'a sheet of paper'], ['パン（切った）', 'a slice of bread'], ['パン（1斤）', 'a loaf of bread'], ['チーズ', 'a slice of cheese'], ['板チョコ', 'a bar of chocolate']], 8, 4, [100, 200], 23, { size: 12, head: 'b', body: 'n', firstCol: 'm' }), ...cap('ものごとの 決まった 単位', C.blue)),
  },
  {
    note: '❓なぜ「紙1枚」を a paper と言ってはいけないのでしょう。→ a paper は「新聞」「答案・論文」という別の意味になるからです。I read a paper.（新聞を読む）。紙が1枚ほしいときは a sheet of paper か a piece of paper とします。',
    add: fresh(...row([['a paper', 'r']], 14, { size: 15, h: 32, x0: 20, x1: 150 }), at(85, 62, '新聞・答案', 12, C.red, true), ...row([['a sheet of paper', 'g']], 14, { size: 13, h: 32, x0: 160, x1: 310 }), at(235, 62, '紙 1枚', 12, C.green, true), en('I read a paper.', 100, 13), en('Please give me a sheet of paper.', 122, 12), ...cap('紙1枚は sheet か piece', C.green)),
  },
  {
    note: '例文で確かめます。Please give me a sheet of paper.（紙を1枚ください）。I ate two slices of bread for breakfast.（朝食にパンを2枚食べた）。She bought a loaf of bread at the bakery.（パン屋でパンを1斤買った）。数えるときは単位を複数形にします。',
    add: fresh(...row([['two slices of bread', 'g']], 14, { size: 14, h: 32, x0: 30, x1: 290 }), at(160, 58, 'slice を 複数形に', 11, C.green, true), ...row([['a loaf of bread', 'g']], 80, { size: 14, h: 32, x0: 30, x1: 290 }), at(160, 124, '切る前の 1斤', 11, C.green, true), ...cap('例文でも 単位を 数える', C.ink)),
  },
  {
    note: 'まとめです。数えられない名詞は〈単位＋of＋名詞〉で数える。迷ったら a piece of。紙は sheet、パンは slice か loaf、板チョコは bar。advice・information・news・furniture は an advice のように言わず、a piece of advice と言います。',
    add: fresh(...row([['a piece of', 'm', '万能'], ['a sheet of', 'b', '紙'], ['a slice of', 'g', '切った']], 28, { size: 13, h: 40, x0: 8, x1: 312, gap: 12 }), ...cap('まず a piece of を 確実に', C.main)),
  },
], '形で数える：a piece of / a sheet of / a slice of');

// ───────── eigo_s093 二つで一組 a pair of ─────────
const s093: DiagramFigure = show([
  {
    note: '問題です。くつは 左右 2 つで 1足です。英語では shoe と言うでしょうか。それとも shoes と複数形で言うでしょうか。',
    add: [...row([['shoe ?', 'n'], ['shoes ?', 'b']], 30, { size: 18, h: 44, x0: 30, x1: 290, gap: 30 }), ...cap('くつは どっちの形で 使う？', C.ink)],
  },
  {
    note: '❓なぜ shoes といつも複数形なのでしょう。→ 英語は「二つの部分でできている」という見方を、そのまま形に表すからです。くつは左右2つ、めがねはレンズが2枚、はさみは刃が2枚、ズボンは足を通す部分が2本あります。',
    add: fresh(...row([['左', 'b'], ['右', 'b']], 18, { size: 16, h: 36, x0: 100, x1: 220, gap: 10 }), at(160, 74, '2つで 1足', 12, C.main, true), ar(160, 82, 160, 98, C.gray), bx(110, 102, 100, 32, 'shoes', C.green, FILL.green, 16), ...cap('二つで一組 → いつも 複数形', C.green)),
  },
  {
    note: 'いつも複数形で使う語です。shoes（くつ）、socks（くつ下）、gloves（手ぶくろ）、glasses（めがね）、scissors（はさみ）、pants・trousers（ズボン）、jeans（ジーンズ）、shorts（半ズボン）、chopsticks（はし）。',
    add: fresh(...[['shoes', 'socks', 'gloves'], ['glasses', 'scissors', 'pants'], ['jeans', 'shorts', 'chopsticks']].flatMap((r, i) => row(r.map((t) => [t, 'b'] as Wd), 12 + i * 40, { size: 13, h: 30, x0: 8, x1: 312, gap: 10 })), ...cap('どれも 最初から 複数形', C.blue)),
  },
  {
    note: '数えたいときは a pair of を使います。a pair of shoes（くつ1足）、a pair of socks（くつ下1足）、a pair of glasses（めがね1つ）、a pair of scissors（はさみ1ちょう）。「1つ」と言うときも、うしろは複数形のままです。',
    add: fresh(...row([['a pair of', 'm'], ['shoes', 'g']], 20, { size: 16, h: 36, x0: 30, x1: 290 }), en('a pair of socks', 82, 13), en('a pair of glasses', 104, 13), en('a pair of scissors', 126, 13), ...cap('「1つ」と言いたいとき → a pair of', C.main)),
  },
  {
    note: '❓2足以上のときは、どちらを複数形にするのでしょう。→ pair のほうです。two pairs of shoes（くつ2足）。shoes は最初から複数形なのでそのままにします。× two pair of shoes、× two pairs of shoe はどちらも誤りです。',
    add: fresh(...row([['two pairs', 'g'], ['of', 'n'], ['shoes', 'n']], 20, { size: 16, h: 36 }), at(cx([['two pairs', 'g'], ['of', 'n'], ['shoes', 'n']], 0, { size: 16 }), 70, '← pair を複数形', 11, C.green, true), ngb(40, 96, 240, '✗ two pair of shoes', 13), ngb(40, 126, 240, '✗ two pairs of shoe', 13), ...cap('複数形にするのは pair', C.green)),
  },
  {
    note: 'これらの語が主語になると、動詞は複数あつかいです。My glasses are new.（私のめがねは新しい）。These scissors are very sharp. Where are my socks? ただし主語の中心が pair のときは、a pair なら単数です。A pair of shoes is on the floor. Two pairs of gloves are in the box.',
    add: fresh(...row([['My glasses', 'b'], ['are', 'g'], ['new.', 'n']], 14, { size: 13, h: 30 }), ...row([['A pair of shoes', 'b'], ['is', 'p'], ['on the floor.', 'n']], 64, { size: 12, h: 30 }), ...row([['Two pairs of gloves', 'b'], ['are', 'g'], ['in the box.', 'n']], 114, { size: 12, h: 28 }), ...cap('主語の中心が 単数 → is、複数 → are', C.ink)),
  },
  {
    note: 'this と that にも注意します。this scissors や that glasses は誤りで、these scissors・those glasses、または this pair of scissors・that pair of glasses と言います。「1つ」は pair が持っているので、this pair of ... なら単数に this を使えます。',
    add: fresh(...row([['this scissors', 'r'], ['that glasses', 'r']], 14, { size: 13, h: 30, x0: 10, x1: 310, gap: 12 }), at(160, 56, '✗', 14, C.red, true), ...row([['these scissors', 'g'], ['those glasses', 'g']], 70, { size: 13, h: 30, x0: 10, x1: 310, gap: 12 }), ...row([['this pair of scissors', 'g'], ['that pair of glasses', 'g']], 112, { size: 11, h: 28, x0: 6, x1: 314, gap: 10 }), ...cap('this・that は これらの語に つけにくい', C.green)),
  },
  {
    note: 'まとめです。左右そろって一組の物は、いつも複数形（shoes・glasses・scissors）。数えるときは a pair of、2組以上は pair を複数形にします。wear glasses（めがねをかけている）のような決まった言い方も覚えておきます。',
    add: fresh(...row([['shoes', 'b'], ['a pair of shoes', 'm'], ['two pairs of shoes', 'g']], 28, { size: 12, h: 44, x0: 6, x1: 314, gap: 10 }), en('He wears glasses.', 100, 13), ...cap('二つで一組 → pair', C.main)),
  },
], '二つで一組：a pair of');

export const XF_CEC_FIGURES: Record<string, DiagramFigure> = {
  'xf_eigo_s068': s068,
  'xf_eigo_s070': s070,
  'xf_eigo_s071': s071,
  'xf_eigo_s072': s072,
  'xf_eigo_s076': s076,
  'xf_eigo_s078': s078,
  'xf_eigo_s079': s079,
  'xf_eigo_s080': s080,
  'xf_eigo_s082': s082,
  'xf_eigo_s083': s083,
  'xf_eigo_s084': s084,
  'xf_eigo_s086': s086,
  'xf_eigo_s087': s087,
  'xf_eigo_s088': s088,
  'xf_eigo_s091': s091,
  'xf_eigo_s092': s092,
  'xf_eigo_s093': s093,
};

export const XF_CEC_SECTIONS: Record<string, string> = {
  'eigo_s068#0': 'xf_eigo_s068',
  'eigo_s070#0': 'xf_eigo_s070',
  'eigo_s071#0': 'xf_eigo_s071',
  'eigo_s072#0': 'xf_eigo_s072',
  'eigo_s076#0': 'xf_eigo_s076',
  'eigo_s078#0': 'xf_eigo_s078',
  'eigo_s079#0': 'xf_eigo_s079',
  'eigo_s080#0': 'xf_eigo_s080',
  'eigo_s082#0': 'xf_eigo_s082',
  'eigo_s083#0': 'xf_eigo_s083',
  'eigo_s084#0': 'xf_eigo_s084',
  'eigo_s086#0': 'xf_eigo_s086',
  'eigo_s087#0': 'xf_eigo_s087',
  'eigo_s088#0': 'xf_eigo_s088',
  'eigo_s091#0': 'xf_eigo_s091',
  'eigo_s092#0': 'xf_eigo_s092',
  'eigo_s093#0': 'xf_eigo_s093',
};
