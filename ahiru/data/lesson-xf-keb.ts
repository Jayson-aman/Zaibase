// 高校受験 英語（教科書単元 30 件）の「動く図解スライド」。
// 「なぜ？」の連鎖で、7枚以上。単元の節（section）ごとに 1 枚の図解をひもづける。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, show, fresh, flow } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];
const GRAY: Col = [C.gray, FILL.gray];
const YELLOW: Col = [C.main, FILL.yellow];

// 下の帯（画面の下はしにそろえる）に、そのスライドのひとことを出す。\n で改行できる。
const cap = (t: string, c: Col = BLUE, size = 12): DiagramElement => {
  const n = t.split('\n').length;
  const h = 16 + 15 * n;
  return bx(14, 232 - h, 292, h, t, c[0], c[1], size);
};

// 1枚のスライド＝まっさらな図＋下の帯
const S = (note: string, top: DiagramElement[], capText: string, c: Col = BLUE, size = 12) => ({
  note,
  add: fresh(...top, cap(capText, c, size)),
});

// 「なぜ？」の問い（上の帯）
const why = (q: string, y = 6): DiagramElement[] => [bx(12, y, 296, 30, '❓ ' + q, PURPLE[0], PURPLE[1], 12)];

// 横に並べた表（見出し＋行）。セルの先頭に ! を付けるとそのセルを強調する。
const tbl = (
  header: string[],
  rows: string[][],
  o: { y0?: number; rh?: number; gap?: number; cols?: Col[]; size?: number; x0?: number; w?: number } = {},
): DiagramElement[] => {
  const n = header.length;
  const x0 = o.x0 ?? 10;
  const W = o.w ?? 300;
  const g = 6;
  const cw = (W - g * (n - 1)) / n;
  const y0 = o.y0 ?? 52;
  const rh = o.rh ?? 24;
  const gap = o.gap ?? 5;
  const cols = o.cols ?? [BLUE, RED, GREEN, MAIN];
  const out: DiagramElement[] = [];
  header.forEach((h, i) => out.push(lb(x0 + i * (cw + g) + cw / 2, y0 - 9, h, 11, cols[i][0], 'middle', true)));
  rows.forEach((r, j) =>
    r.forEach((c, i) => {
      const hi = c.startsWith('!');
      const t = hi ? c.slice(1) : c;
      out.push(bx(x0 + i * (cw + g), y0 + j * (rh + gap), cw, rh, t, hi ? C.red : cols[i][0], hi ? FILL.yellow : cols[i][1], o.size ?? 12));
    }),
  );
  return out;
};

// 横一列の箱（矢印つき）
const row = (labels: string[], y: number, c: Col = MAIN, size = 12, h = 44): DiagramElement[] =>
  flow(labels, y, { h, color: c[0], fill: c[1], size, gap: 14 }).flat();


// 語をつくる式：もとの語 ＋ 語尾 → できた語。先頭に ! を付けたセルは強調。
const wb = (
  rows: [string, string, string][],
  o: { y0?: number; rh?: number; gap?: number; size?: number; color?: Col } = {},
): DiagramElement[] => {
  const y0 = o.y0 ?? 50;
  const rh = o.rh ?? 24;
  const gap = o.gap ?? 5;
  const c = o.color ?? GREEN;
  const out: DiagramElement[] = [];
  rows.forEach((r, j) => {
    const y = y0 + j * (rh + gap);
    const cell = (t: string, x: number, w: number, col: Col) => {
      const hi = t.startsWith('!');
      return bx(x, y, w, rh, hi ? t.slice(1) : t, hi ? C.red : col[0], hi ? FILL.yellow : col[1], o.size ?? 12);
    };
    out.push(cell(r[0], 10, 96, BLUE));
    out.push(lb(114, y + rh / 2, '＋', 14, C.ink, 'middle', true));
    out.push(cell(r[1], 124, 64, RED));
    out.push(ar(192, y + rh / 2, 206, y + rh / 2, C.main));
    out.push(cell(r[2], 210, 100, c));
  });
  return out;
};
// 表の下に置く一言の y 座標（行数 n, 先頭 y0, 行の高さ rh, すきま gap）
const under = (n: number, y0 = 52, rh = 24, gap = 5): number => y0 + n * (rh + gap) - gap + 13;


// 文を語のかたまりに分けて横に並べる（語順の箱）。! を付けたかたまりは強調、? は空欄。
const sl = (parts: string[], y: number, o: { h?: number; size?: number; cols?: Col[]; x0?: number; w?: number } = {}): DiagramElement[] => {
  const x0 = o.x0 ?? 10;
  const W = o.w ?? 300;
  const gap = 4;
  const wt = parts.map((t) => [...t.replace(/^[!?]/, '')].reduce((u, ch) => u + (ch.charCodeAt(0) < 256 ? 0.55 : 1), 0) + 1.6);
  const tot = wt.reduce((a, b) => a + b, 0);
  const avail = W - gap * (parts.length - 1);
  let x = x0;
  const palette: Col[] = o.cols ?? [BLUE, GREEN, MAIN, PURPLE, GRAY];
  return parts.map((t, i) => {
    const w = (wt[i] / tot) * avail;
    const hi = t.startsWith('!');
    const empty = t.startsWith('?');
    const txt = hi || empty ? t.slice(1) : t;
    const col = palette[i % palette.length];
    const el = bx(x, y, w, o.h ?? 34, txt, hi ? C.red : empty ? C.gray : col[0], hi ? FILL.yellow : empty ? '#FFFFFF' : col[1], o.size ?? 12);
    x += w + gap;
    return el;
  });
};

// 順に確かめる縦の流れ（三単現のつづり用）
const stackFlow = (): DiagramElement[] => {
  const items: [string, string, Col][] = [
    ['① have？', 'has', PURPLE],
    ['② -s -x -ch -sh -o？', '-es　(watches / goes)', RED],
    ['③ 子音字＋y？', 'y → i + es　(studies)', RED],
    ['④ それ以外', '-s　(plays / runs)', GREEN],
  ];
  const out: DiagramElement[] = [];
  items.forEach((it, i) => {
    const y = 10 + i * 40;
    out.push(bx(10, y, 140, 30, it[0], it[2][0], it[2][1], 12));
    out.push(ar(152, y + 15, 166, y + 15, C.main));
    out.push(bx(168, y, 142, 30, it[1], it[2][0], FILL.yellow, 12));
  });
  return out;
};
const F: Record<string, DiagramFigure> = {};
const SEC: Record<string, string> = {};

// ── 不規則動詞②：A－B－A 型 ──
F['xf_koko_eigo_s018'] = show([
  S('現在完了の文で He has came here. と書くと誤りです。❓なぜ誤りなの？ has のうしろに came（過去形）を置いているからです。',
    [...why('He has came here. は、なぜまちがい？'), ...row(['He', 'has', 'came'], 56, MAIN, 16, 44), lb(160, 116, '×', 26, C.red, 'middle', true), lb(160, 144, 'came は「過去形」', 13, C.red, 'middle', true)],
    'has のうしろに、過去形は置けない', RED),
  S('❓では、has のうしろには何を置くの？ 現在完了は have／has ＋ 過去分詞（かこぶんし）と決まっています。受け身の be ＋ 過去分詞でも、過去形は使いません。',
    [...why('has のうしろには何が来る？'), bx(14, 52, 92, 40, 'have / has', C.main, FILL.warm, 14), lb(114, 72, '＋', 20, C.ink, 'middle', true), bx(124, 52, 182, 40, '過去分詞', C.green, FILL.green, 16), lb(160, 118, '受け身も be ＋ 過去分詞', 13, C.blue, 'middle', true), lb(160, 142, '過去形（came）は入らない', 13, C.red, 'middle', true)],
    '現在完了・受け身は「過去分詞」を使う', GREEN),
  S('❓では、come の過去分詞は何？ 実は come － came － come で、過去分詞は原形（げんけい）に戻ります。これが A－B－A 型です。1つ目と3つ目が同じ形になります。',
    [...why('come の過去分詞は？'), ...tbl(['原形', '過去形', '過去分詞'], [['come', 'came', '!come']], { y0: 70, rh: 34 }), ar(60, 108, 60, 124, C.green), ar(252, 108, 252, 124, C.green), ln(60, 124, 252, 124, C.green), lb(160, 142, '原形と同じ形に戻る', 13, C.green, 'middle', true)],
    'A－B－A 型 ＝ 1つ目と3つ目が同じ', GREEN),
  S('A－B－A 型は少数で、come（来る）、become（〜になる）、run（走る）の3語です。使用頻度が高いので、まちがえると目立ちます。',
    [...why('A－B－A 型にはどんな動詞がある？'), ...tbl(['原形', '過去形', '過去分詞'], [['come', 'came', '!come'], ['become', 'became', '!become'], ['run', 'ran', '!run']], { y0: 60, rh: 28, gap: 8 })],
    'come / become / run の3語', BLUE),
  S('❓どうやって見分けて使い分けるの？ 文の中の合図を見ます。yesterday（きのう）のような過去の語があれば過去形 came。has のうしろなら過去分詞 come です。',
    [...why('came と come、どちらを書く？'), bx(10, 48, 144, 40, 'He ___ here\nyesterday.', C.red, FILL.red, 12), ar(82, 90, 82, 108, C.red), bx(10, 110, 144, 32, 'came', C.red, FILL.yellow, 16), bx(166, 48, 144, 40, 'He has ___ here\nthree times.', C.green, FILL.green, 12), ar(238, 90, 238, 108, C.green), bx(166, 110, 144, 32, 'come', C.green, FILL.yellow, 16)],
    '合図は yesterday か、has か', MAIN),
  S('例をもう少し見ましょう。She has become a doctor.（彼女は医者になった）、I have run ten kilometers.（私は10キロ走った）。どちらも has／have のあとは原形と同じ形です。',
    [...why('become と run でも同じ？'), bx(10, 48, 300, 40, 'She has become a doctor.', C.green, FILL.green, 15), bx(10, 96, 300, 40, 'I have run ten kilometers.', C.green, FILL.green, 15)],
    'have／has のあとは become・run のまま', GREEN),
  S('❓run と begin はどちらも i と a の動きに見えるのに、なぜ別の型なの？ run － ran － run は過去分詞が原形に戻りますが、begin － began － begun は戻りません。ここが境目です。',
    [...why('run と begin、どこがちがう？'), ...tbl(['原形', '過去形', '過去分詞'], [['run', 'ran', '!run'], ['begin', 'began', '!begun']], { y0: 66, rh: 30, gap: 10 }), lb(160, 158, 'run は A－B－A　begin は A－B－C', 12, C.ink, 'middle', true)],
    '過去分詞が原形に戻るかどうかで型が決まる', PURPLE),
  S('まとめです。現在完了・受け身には過去分詞。come・become・run は過去分詞が原形と同じです。原形－過去形－過去分詞の3つを声に出して並べる練習が、そのまま得点になります。',
    [...row(['have/has\n＋過去分詞', 'come\nbecome\nrun', '原形と\n同じ形'], 40, MAIN, 12, 64), lb(160, 130, 'He has come here.　○', 14, C.green, 'middle', true), lb(160, 154, 'He has came here.　×', 14, C.red, 'middle', true)],
    'A－B－A 型は「過去分詞が原形に戻る」', MAIN),
], 'A－B－A 型の不規則動詞');
SEC['koko_eigo_s018#0'] = 'xf_koko_eigo_s018';

// ── 不規則動詞③：A－B－B 型 ──
F['xf_koko_eigo_s019'] = show([
  S('A－B－B 型は、過去形と過去分詞が同じ形になる型です。不規則動詞で最大のグループなので、語尾の変わり方で小分けにして覚えます。',
    [...why('A－B－B 型って、どんな型？'), ...tbl(['原形', '過去形', '過去分詞'], [['build', '!built', '!built']], { y0: 70, rh: 34 }), lb(160, 126, '2つ目と3つ目が同じ形', 13, C.green, 'middle', true)],
    'A－B－B 型 ＝ 過去形と過去分詞が同じ', GREEN),
  S('❓なぜ send は sended ではなく sent なの？ -nd で終わる動詞は、最後の d が t に変わるからです。end → ended という規則動詞に引っぱられないように注意します。',
    [...why('send の過去形は sended ではないの？'), ...tbl(['原形', '過去形', '過去分詞'], [['send', 'sent', 'sent'], ['spend', 'spent', 'spent'], ['lend', 'lent', 'lent']], { y0: 62, rh: 26, gap: 8 }), lb(160, 173, '語尾の d が t に変わる', 13, C.red, 'middle', true)],
    '-nd → -nt（send / spend / lend）', RED),
  S('build－built、bend－bent も同じ仲間です。5語まとめて「d が t になる型」と覚えましょう。',
    [...why('ほかに d → t の動詞は？'), ...tbl(['原形', '過去形', '過去分詞'], [['build（建てる）', 'built', 'built'], ['bend（曲げる）', 'bent', 'bent'], ['send（送る）', 'sent', 'sent'], ['spend（使う）', 'spent', 'spent'], ['lend（貸す）', 'lent', 'lent']], { y0: 56, rh: 22, gap: 4, size: 11 })],
    'd が t に変わる5語', BLUE),
  S('❓feel － felt のように、母音が短くなって t が付くのはなぜ？ 長い母音のあとに子音が2つ続くと発音しにくいので、母音が短くなると考えると覚えやすいです。feel [fiːl] → felt [felt]。',
    [...why('feel は、なぜ felt になる？'), ...tbl(['原形', '過去形', '過去分詞'], [['feel（感じる）', 'felt', 'felt'], ['keep（保つ）', 'kept', 'kept'], ['sleep（眠る）', 'slept', 'slept'], ['sweep（掃く）', 'swept', 'swept']], { y0: 62, rh: 24, gap: 6, size: 11 })],
    '母音が短くなって t が付く', GREEN),
  S('mean（意味する）も同じ型ですが、発音が大きく変わります。mean [miːn] → meant [ment]。leave → left、lose → lost [lɔːst] も、つづりだけでなく音も一緒に覚えます。',
    [...why('mean・leave・lose はどう変わる？'), ...tbl(['原形', '過去形', '過去分詞'], [['mean [miːn]', 'meant [ment]', 'meant'], ['leave', 'left', 'left'], ['lose [luːz]', 'lost [lɔːst]', 'lost']], { y0: 62, rh: 28, gap: 8, size: 11 })],
    '発音問題に出る！ 音も覚える', RED),
  S('母音が変わるだけのグループもあります。meet－met、sit－sat、stand－stood、find－found、win－won、hold－held。win の過去形 won は [wʌn] で、one と同じ音です。',
    [...why('母音だけが変わる動詞は？'), ...tbl(['原形', '過去形', '過去分詞'], [['meet', 'met', 'met'], ['sit', 'sat', 'sat'], ['stand', 'stood', 'stood'], ['find', 'found', 'found'], ['win', 'won', 'won']], { y0: 56, rh: 22, gap: 4 })],
    '母音だけ変わる型', BLUE),
  S('❓findの過去形 found と、設立する意味の found はどうちがう？ 設立する found は規則動詞で、found － founded － founded と変わります。The company was founded in 1950. の founded は後者です。',
    [...why('found には2種類ある？'), ...tbl(['原形', '過去形', '過去分詞'], [['find（見つける）', 'found', 'found'], ['found（設立する）', 'founded', 'founded']], { y0: 62, rh: 34, gap: 10, size: 11 }), lb(160, 157, 'founded は別の動詞の形', 13, C.red, 'middle', true)],
    '形が似ていても別の動詞', PURPLE),
  S('まとめです。A－B－B 型は3つに小分けにして覚えます。① d が t になる ② 母音が短くなって t が付く ③ 母音が変わる。I sent her an email.（sended は誤り）',
    [...row(['d → t\nbuild/send', '短い母音＋t\nfeel/keep', '母音だけ\nmeet/win'], 40, MAIN, 12, 64), lb(160, 130, 'I sent her an email.　○', 14, C.green, 'middle', true), lb(160, 154, 'I sended her an email.　×', 14, C.red, 'middle', true)],
    '語尾の変わり方で小分けにして覚える', MAIN),
], 'A－B－B 型（-t／-d に変わる仲間）');
SEC['koko_eigo_s019#0'] = 'xf_koko_eigo_s019';

// ── 不規則動詞④：i－a－u 型 ──
F['xf_koko_eigo_s020'] = show([
  S('sing － sang － sung。母音（ぼいん）が i → a → u と階段のように動きます。この動きに気づけば、1つ思い出すだけで残りも引き出せます。',
    [...why('i－a－u 型って、どんな動き？'), ...tbl(['原形', '過去形', '過去分詞'], [['sing', 'sang', 'sung']], { y0: 70, rh: 34 }), lb(60, 126, 'i', 18, C.blue, 'middle', true), lb(160, 126, 'a', 18, C.red, 'middle', true), lb(252, 126, 'u', 18, C.green, 'middle', true), ar(74, 120, 144, 120, C.main), ar(174, 120, 238, 120, C.main)],
    '母音が i → a → u と動く', MAIN),
  S('中学範囲では6語です。sing（歌う）、ring（鳴る）、drink（飲む）、swim（泳ぐ）、begin（始まる）、sink（沈む）。「i－a－u の6語」とまとめて覚えるのが最短です。',
    [...why('i－a－u 型の動詞は？'), ...tbl(['原形', '過去形', '過去分詞'], [['sing', 'sang', 'sung'], ['ring', 'rang', 'rung'], ['drink', 'drank', 'drunk'], ['swim', 'swam', 'swum'], ['begin', 'began', 'begun'], ['sink', 'sank', 'sunk']], { y0: 54, rh: 19, gap: 3, size: 11 })],
    'i－a－u の6語', BLUE),
  S('❓なぜ三段目の u を覚える必要があるの？ 現在完了や受け身では、過去分詞を使うからです。I have swum in this river. The song was sung by many people.',
    [...why('なぜ三段目の u が大事？'), bx(10, 48, 300, 40, 'I have swum in this river before.', C.green, FILL.green, 13), bx(10, 96, 300, 40, 'The song was sung by many people.', C.green, FILL.green, 13)],
    '現在完了・受け身では u の形を使う', GREEN),
  S('❓swam と swum はどう使い分けるの？ 過去のことを言う文では swam、have のうしろなら swum です。I swam in the sea last summer.',
    [...why('swam と swum の使い分けは？'), bx(10, 48, 144, 56, 'I ___ in the sea\nlast summer.', C.red, FILL.red, 12), bx(166, 48, 144, 56, 'I have ___ in this\nriver before.', C.green, FILL.green, 12), bx(10, 112, 144, 34, 'swam（過去形）', C.red, FILL.yellow, 14), bx(166, 112, 144, 34, 'swum（過去分詞）', C.green, FILL.yellow, 14)],
    '過去形は a、過去分詞は u', MAIN),
  S('❓run も i－a－u 型の仲間？ 違います。run － ran － run は、過去形は a ですが、過去分詞は原形に戻ります（A－B－A 型）。I have run ten kilometers.（○）　I have ran（×）',
    [...why('run も仲間に入る？'), ...tbl(['原形', '過去形', '過去分詞'], [['sing', 'sang', 'sung'], ['run', 'ran', '!run']], { y0: 66, rh: 30, gap: 10 }), lb(160, 154, 'run の三段目は u にならない', 13, C.red, 'middle', true)],
    'run は A－B－A 型（別扱い）', RED),
  S('語尾が同じでも型は同じとは限りません。sing は i－a－u ですが、bring は brought。drink・sink は i－a－u ですが、think は thought。win は won です。',
    [...why('語尾が同じなら同じ型？'), ...tbl(['原形', '過去形', '過去分詞'], [['bring', 'brought', 'brought'], ['think', 'thought', 'thought'], ['win', 'won', 'won']], { y0: 62, rh: 26, gap: 8 }), lb(160, 173, 'brang という形は存在しない', 13, C.red, 'middle', true)],
    '似た語尾でも、型がちがう動詞', PURPLE),
  S('まとめです。i－a－u 型は sing・ring・drink・swim・begin・sink の6語。現在完了・受け身では三段目の u を使います。run・bring・think・win は別の型です。',
    [...row(['sing\nsang\nsung', '現在完了・\n受け身は\nu の形', 'run・bring\nthink・win\nは別の型'], 40, MAIN, 12, 70), lb(160, 138, 'I have swum.　○　　I have swam.　×', 13, C.ink, 'middle', true)],
    '三段目の u を声に出して覚える', MAIN),
], 'i－a－u 型の不規則動詞');
SEC['koko_eigo_s020#0'] = 'xf_koko_eigo_s020';

// ── 不規則動詞⑤：-en が付く仲間 ──
F['xf_koko_eigo_s021'] = show([
  S('❓なぜ過去分詞を覚える必要があるの？ 現在完了（have ＋ 過去分詞）と受け身（be ＋ 過去分詞）で、必ず使うからです。take・write・speak・break は特に出ます。',
    [...why('なぜ過去分詞を覚えるの？'), ...row(['現在完了\nhave＋過去分詞', '受け身\nbe＋過去分詞'], 52, GREEN, 12, 50), lb(160, 128, '-en が付く動詞は、超頻出（ちょうひんしゅつ）', 13, C.red, 'middle', true)],
    '過去分詞は、現在完了と受け身の必需品', GREEN),
  S('まず「母音が変わって -en が付く」型です。eat－ate－eaten、give－gave－given、take－took－taken、forget－forgot－forgotten、hide－hid－hidden。',
    [...why('-en が付く基本の動詞は？'), ...tbl(['原形', '過去形', '過去分詞'], [['eat', 'ate', 'eaten'], ['give', 'gave', 'given'], ['take', 'took', 'taken'], ['forget', 'forgot', 'forgotten'], ['hide', 'hid', 'hidden']], { y0: 56, rh: 22, gap: 4 })],
    '母音が変わって -en（-n）が付く', BLUE),
  S('次は「過去形が o の形で、過去分詞に -en が付く」型です。write－wrote－written、speak－spoke－spoken、break－broke－broken、choose－chose－chosen。',
    [...why('過去形が o の形になる動詞は？'), ...tbl(['原形', '過去形', '過去分詞'], [['write', 'wrote', 'written'], ['speak', 'spoke', 'spoken'], ['break', 'broke', 'broken'], ['choose', 'chose', 'chosen']], { y0: 56, rh: 26, gap: 6 })],
    'o の形 ＋ -en', GREEN),
  S('同じ型がまだあります。steal－stole－stolen、drive－drove－driven、ride－rode－ridden、rise－rose－risen、freeze－froze－frozen。',
    [...why('o の形の仲間はほかに？'), ...tbl(['原形', '過去形', '過去分詞'], [['steal', 'stole', 'stolen'], ['drive', 'drove', 'driven'], ['ride', 'rode', 'ridden'], ['rise', 'rose', 'risen'], ['freeze', 'froze', 'frozen']], { y0: 56, rh: 22, gap: 4 })],
    '仲間をまとめて覚える', BLUE),
  S('❓written は、なぜ t を重ねるの？ 短い母音を保つためです。run → running のように子音字を重ねるのと同じ理屈です。ridden・hidden・forgotten も重ねます。writen・riden は誤りです。',
    [...why('written はなぜ t が2つ？'), ...row(['write', 'wrote', 'writ + t + en'], 52, MAIN, 12, 40), bx(60, 108, 200, 40, 'written　○　　writen　×', C.red, FILL.yellow, 14)],
    '書いて確かめる：written / ridden', RED),
  S('ew → own の型もあります。know－knew－known、grow－grew－grown、throw－threw－thrown、fly－flew－flown、blow－blew－blown、draw－drew－drawn。',
    [...why('ew → own と変わる動詞は？'), ...tbl(['原形', '過去形', '過去分詞'], [['know', 'knew', 'known'], ['grow', 'grew', 'grown'], ['throw', 'threw', 'thrown'], ['fly', 'flew', 'flown'], ['blow', 'blew', 'blown'], ['draw', 'drew', 'drawn']], { y0: 54, rh: 19, gap: 3, size: 11 })],
    '過去形 ew → 過去分詞 own', GREEN),
  S('まとめです。-en が付く型は「母音が変わる」「o の形」「ew → own」の3つ。そのほか fall－fell－fallen、wear－wore－worn、tear－tore－torn、show－showed－shown。',
    [...tbl(['原形', '過去形', '過去分詞'], [['fall', 'fell', 'fallen'], ['wear', 'wore', 'worn'], ['tear', 'tore', 'torn'], ['show', 'showed', 'shown']], { y0: 26, rh: 24, gap: 6, size: 11 })],
    '3つの型＋そのほか。過去分詞を書いて確かめる', MAIN),
], '-en が付く不規則動詞');
SEC['koko_eigo_s021#0'] = 'xf_koko_eigo_s021';
// ── 派生語①：名詞をつくる接尾辞（形容詞から） ──
F['xf_koko_eigo_s023'] = show([
  S('英語の語彙は、丸暗記より「部品の組み合わせ」で覚えるほうが効率的です。kind に -ness を付けると kindness（親切）。語尾を見ただけで、名詞だとわかります。',
    [...why('語尾を見ると、なぜ品詞がわかるの？'), ...wb([['kind', 'ness', '!kindness']], { y0: 70, rh: 34 }), lb(160, 134, '語尾 -ness は「名詞」の目印', 13, C.green, 'middle', true), lb(160, 156, '形容詞 kind（親切な）→ 名詞 kindness（親切）', 12, C.ink, 'middle')],
    '部品の組み合わせで考える', GREEN),
  S('形容詞から名詞を作る語尾は、-ness がもっとも規則的です。そのまま付けるだけで名詞になります。kind→kindness、dark→darkness、sad→sadness、weak→weakness、ill→illness。',
    [...why('-ness はどう付ける？'), ...wb([['kind', 'ness', 'kindness'], ['dark', 'ness', 'darkness'], ['sad', 'ness', 'sadness'], ['weak', 'ness', 'weakness'], ['ill', 'ness', 'illness']], { y0: 50, rh: 22, gap: 4 })],
    'そのまま付けるのが基本', GREEN),
  S('❓happy に -ness を付けると happyness？ 「子音字＋y」で終わる語は、y を i に変えてから付けます。happy→happiness、busy→business、lonely→loneliness。',
    [...why('happy → happyness ではないの？'), ...wb([['happy', 'ness', '!happiness'], ['busy', 'ness', '!business'], ['lonely', 'ness', '!loneliness']], { y0: 56, rh: 28, gap: 8 }), lb(160, under(3, 56, 28, 8) + 6, 'y を i に変えてから -ness', 13, C.red, 'middle', true)],
    '「子音字＋y」は y → i', RED),
  S('もう1つの語尾が -ity（-ty）です。able→ability、real→reality、active→activity、safe→safety。able→ability のように、つづりが少し変わる語もあります。',
    [...why('-ity は、どんな名詞をつくる？'), ...tbl(['形容詞', '名詞'], [['able', 'ability'], ['real', 'reality'], ['active', 'activity'], ['safe', 'safety']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN] })],
    'able は e が落ちて i になる', GREEN),
  S('数は少ないが出る語尾が -th です。long→length、strong→strength、wide→width、deep→depth。母音まで変わる語があるので、つづりを1語ずつ確かめます。',
    [...why('-th の名詞には、どんな語がある？'), ...tbl(['形容詞', '名詞'], [['long（長い）', '!length'], ['strong（強い）', '!strength'], ['wide（広い）', '!width'], ['deep（深い）', '!depth']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN] })],
    'long → length のように母音も変わる', GREEN),
  S('❓high の名詞は highth？ いいえ、height（高さ）です。発音も [haɪt] と特別です。長さ・強さ・幅・深さ・高さの5語は一組で出やすいので、height を例外として覚えます。',
    [...why('high の名詞形は？'), ...tbl(['形容詞', '名詞'], [['long', 'length'], ['strong', 'strength'], ['wide', 'width'], ['deep', 'depth'], ['high', '!height']], { y0: 56, rh: 22, gap: 4, cols: [BLUE, GREEN] })],
    '高さだけは -th にならない', RED),
  S('ほかにも規則から外れる名詞があります。poor→poverty、young→youth、wise→wisdom、free→freedom。これらは個別に覚えます。',
    [...why('規則に当てはまらない名詞は？'), ...tbl(['形容詞', '名詞'], [['poor（貧しい）', 'poverty'], ['young（若い）', 'youth'], ['wise（かしこい）', 'wisdom'], ['free（自由な）', 'freedom']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, PURPLE] })],
    '不規則な名詞形は1語ずつ', PURPLE),
  S('まとめです。形容詞から名詞は ①-ness ②-ity／-ty ③-th の3つ。work・study・help のように動詞と名詞が同じ形の語もあるので、名詞形を答えるときは無理に語尾を付けないようにします。',
    [...row(['-ness\nkindness', '-ity / -ty\nability', '-th\nlength'], 40, MAIN, 12, 64), lb(160, 130, '例外：high → height', 13, C.red, 'middle', true), lb(160, 154, '同じ形の語：work / study / help / change', 12, C.ink, 'middle')],
    '語尾を見れば「名詞だ」とわかる', MAIN),
], '形容詞から名詞をつくる');
SEC['koko_eigo_s023#1'] = 'xf_koko_eigo_s023';

// ── 派生語②：人・職業を表す接尾辞 ──
F['xf_koko_eigo_s024'] = show([
  S('teach に -er を付けると teacher。❓では、ピアノを弾く人は pianoer？ 実際は pianist です。人を表す語尾は4つあり、どれが付くかは語ごとに決まっています。',
    [...why('「〜する人」は、すべて -er でいい？'), ...row(['-er', '-or', '-ist', '-ian'], 56, MAIN, 16, 44), lb(160, 126, 'どれが付くかは、語ごとに決まっている', 13, C.red, 'middle', true)],
    '人を表す語尾は4種類', PURPLE),
  S('-er は動詞に付いて、もっとも数が多い語尾です。teach→teacher、sing→singer、play→player、drive→driver。つづりに注意する語もあります。run→runner（n を重ねる）、write→writer（e を取る）。',
    [...why('-er は、どんな語に付く？'), ...wb([['teach', 'er', 'teacher'], ['sing', 'er', 'singer'], ['play', 'er', 'player'], ['run', 'er', '!runner'], ['write', 'er', '!writer']], { y0: 50, rh: 22, gap: 4 })],
    '動詞 ＋ -er（run は n を重ね、write は e を取る）', GREEN),
  S('-or も動詞に付く語尾で、ラテン語系の語に多く見られます。act→actor、visit→visitor、invent→inventor、direct→director。doctor、professor、author も -or の語です。',
    [...why('-or は、どんな語に付く？'), ...wb([['act', 'or', 'actor'], ['visit', 'or', 'visitor'], ['invent', 'or', 'inventor'], ['direct', 'or', 'director']], { y0: 56, rh: 26, gap: 6 })],
    '動詞 ＋ -or', GREEN),
  S('❓-er と -or は、どうやって見分けるの？ 規則で決まっているわけではなく、語ごとに決まっています。代表例で覚えましょう。',
    [...why('-er と -or の見分け方は？'), bx(10, 48, 144, 52, '-er\nteacher / singer\nplayer / driver', C.green, FILL.green, 12), bx(166, 48, 144, 52, '-or\nactor / visitor\ninventor / director', C.blue, FILL.blue, 12), lb(160, 126, 'doctor / professor / author も -or', 13, C.blue, 'middle', true)],
    '迷ったら、語ごとに覚える', MAIN),
  S('-ist は名詞に付く語尾で、学問・芸術に多く使われます。art→artist、piano→pianist、novel→novelist、tour→tourist。science→scientist のように、もとの語の語尾が変わるものに注意します。',
    [...why('-ist は、どんな語に付く？'), ...wb([['art', 'ist', 'artist'], ['piano', 'ist', 'pianist'], ['novel', 'ist', 'novelist'], ['tour', 'ist', 'tourist']], { y0: 56, rh: 26, gap: 6, color: BLUE })],
    '名詞 ＋ -ist（学問・芸術）', BLUE),
  S('-ian も名詞に付く語尾です。music→musician、magic→magician、library→librarian、history→historian。-ic や -y で終わる名詞が多いです。',
    [...why('-ian は、どんな語に付く？'), ...tbl(['名詞', '人'], [['music（音楽）', 'musician'], ['magic（手品）', 'magician'], ['library（図書館）', 'librarian'], ['history（歴史）', 'historian']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN] })],
    '名詞 ＋ -ian', BLUE),
  S('❓迷ったときの大きな区分は？ 動詞なら -er／-or、名詞なら -ist／-ian です。sing（動詞）→ singer、piano（名詞）→ pianist という対比で覚えましょう。',
    [...why('迷ったら何を手がかりにする？'), bx(10, 48, 144, 36, 'もとの語が動詞', C.green, FILL.green, 13), bx(166, 48, 144, 36, 'もとの語が名詞', C.blue, FILL.blue, 13), ar(82, 86, 82, 104, C.green), ar(238, 86, 238, 104, C.blue), bx(10, 106, 144, 36, '-er / -or', C.green, FILL.yellow, 14), bx(166, 106, 144, 36, '-ist / -ian', C.blue, FILL.yellow, 14), lb(82, 158, 'sing → singer', 12, C.green, 'middle', true), lb(238, 158, 'piano → pianist', 12, C.blue, 'middle', true)],
    '動詞なら -er/-or、名詞なら -ist/-ian', MAIN),
  S('まとめです。science→scientist（-ce を落として -tist）のように、ただ付けるだけでは済まない語があります。1語ずつ書いて確かめましょう。sciencist は誤りです。',
    [...why('science から「科学者」をつくると？'), ...row(['science', '-ce を落とす', 'scientist'], 56, MAIN, 12, 44), lb(160, 126, 'sciencist　×　　scientist　○', 14, C.red, 'middle', true)],
    '語尾が変わる語は書いて確かめる', RED),
], '人を表す語尾の使い分け');
SEC['koko_eigo_s024#0'] = 'xf_koko_eigo_s024';

// ── 派生語③：形容詞・副詞をつくる接尾辞（副詞 -ly） ──
F['xf_koko_eigo_s025'] = show([
  S('形容詞に -ly を付けると副詞になります。careful（注意深い）→ carefully（注意深く）。副詞は、動詞を説明する言葉です。',
    [...why('副詞は、どうやってつくる？'), ...wb([['careful', 'ly', '!carefully']], { y0: 70, rh: 34 }), lb(160, 134, '形容詞 ＋ -ly ＝ 副詞', 14, C.green, 'middle', true), lb(160, 158, 'She walks carefully.（彼女は注意深く歩く）', 12, C.ink, 'middle')],
    '形容詞 ＋ -ly ＝ 副詞', GREEN),
  S('基本は、そのまま -ly を付けるだけです。slow→slowly、quick→quickly、quiet→quietly、kind→kindly、sudden→suddenly。full→fully のように、l を重ねない語もあります。',
    [...why('そのまま付けられる形容詞は？'), ...wb([['slow', 'ly', 'slowly'], ['quick', 'ly', 'quickly'], ['quiet', 'ly', 'quietly'], ['sudden', 'ly', 'suddenly'], ['full', 'ly', 'fully']], { y0: 50, rh: 22, gap: 4 })],
    '形容詞 ＋ -ly が基本', GREEN),
  S('❓easy に -ly を付けると easyly？ 「子音字＋y」で終わる形容詞は、y を i に変えてから -ly を付けます。easy→easily、happy→happily、angry→angrily、busy→busily。',
    [...why('easy の副詞は easyly ではないの？'), ...wb([['easy', 'ly', '!easily'], ['happy', 'ly', '!happily'], ['angry', 'ly', '!angrily'], ['busy', 'ly', '!busily']], { y0: 54, rh: 26, gap: 6 })],
    '「子音字＋y」は y → i', RED),
  S('❓gentle に -ly を付けると gentlely？ -le で終わる形容詞は、le を ly に変えます。gentle→gently、simple→simply、terrible→terribly、possible→possibly。true→truly（e を落とす）も覚えましょう。',
    [...why('-le で終わる語は、どうなる？'), ...tbl(['形容詞', '副詞'], [['gentle', '!gently'], ['simple', '!simply'], ['terrible', '!terribly'], ['true', '!truly']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN] })],
    '-le → -ly　true → truly', RED),
  S('❓-ly で終わるなら、すべて副詞？ いいえ。friendly・lovely・lonely・likely・weekly・daily は形容詞です。friend（名詞）に -ly が付いた形で、副詞ではありません。',
    [...why('-ly が付いていれば、必ず副詞？'), ...tbl(['語', '品詞'], [['friendly（親しみやすい）', '形容詞'], ['lovely（すてきな）', '形容詞'], ['lonely（さびしい）', '形容詞'], ['likely（ありそうな）', '形容詞']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, RED] })],
    '語尾だけで品詞を決めない', RED),
  S('形容詞と副詞が同じ形の語もあります。fast（速い／速く）、hard（熱心な／熱心に）、early（早い／早く）、late（遅い／遅く）、high、near、long。He runs fast.（○）　He runs fastly.（×）',
    [...why('-ly を付けない副詞は？'), ...tbl(['語', '形容詞', '副詞'], [['fast', '速い', '速く'], ['hard', '熱心な', '熱心に'], ['early', '早い', '早く'], ['late', '遅い', '遅く']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN, PURPLE] })],
    'fastly という語はない', PURPLE),
  S('❓hard に -ly を付けた hardly は「熱心に」？ いいえ、別の意味「ほとんど〜ない」になります。late→lately は「最近」、near→nearly は「ほとんど」。機械的に -ly を付けないように。',
    [...why('-ly を付けると意味が変わる語は？'), ...tbl(['もとの語', '-ly を付けた語'], [['hard（熱心に）', '!hardly（ほとんど〜ない）'], ['late（遅く）', '!lately（最近）'], ['near（近くに）', '!nearly（ほとんど）']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, RED], size: 11 })],
    '意味が変わる -ly に注意', RED),
  S('まとめです。副詞は 形容詞 ＋ -ly。y は i に、-le は le → ly にします。ただし friendly は形容詞で、fast・hard・early は形が同じです。',
    [...row(['形容詞\n＋ -ly', 'y → i\n-le → -ly', '例外に\n注意'], 40, MAIN, 12, 64), lb(160, 130, 'easy → easily　gentle → gently', 13, C.green, 'middle', true), lb(160, 154, 'friendly は形容詞　fast は副詞にもなる', 12, C.red, 'middle', true)],
    '機械的に付けず、品詞を確かめる', MAIN),
], '副詞をつくる -ly');
SEC['koko_eigo_s025#1'] = 'xf_koko_eigo_s025';

// ── 派生語④：否定の接頭辞 ──
F['xf_koko_eigo_s026'] = show([
  S('possible の反対は、unpossible ではなく impossible です。❓なぜ un- ではだめなのでしょう。実は否定の接頭辞は、うしろに続く音によって使い分けられています。',
    [...why('possible の反対は、なぜ impossible？'), ...wb([['possible', 'un-', 'unpossible　×']], { y0: 56, rh: 36, size: 11, color: RED }), ...wb([['possible', 'im-', 'impossible　○']], { y0: 108, rh: 36, size: 11 })],
    '否定の接頭辞は、うしろの音で決まる', PURPLE),
  S('un- はもっとも広く使える否定の接頭辞です。happy→unhappy、kind→unkind、lucky→unlucky、usual→unusual、fair→unfair。動詞に付くと「元に戻す」（lock→unlock）の意味にもなります。',
    [...why('un- は、どんな語に付く？'), ...tbl(['もとの語', '反対の語'], [['happy', 'unhappy'], ['kind', 'unkind'], ['usual', 'unusual'], ['fair', 'unfair']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, RED] })],
    'un- ＝ もっとも広く使える', BLUE),
  S('in- はラテン語系の語に付きます。correct→incorrect、complete→incomplete、visible→invisible、direct→indirect。',
    [...why('in- は、どんな語に付く？'), ...tbl(['もとの語', '反対の語'], [['correct', 'incorrect'], ['complete', 'incomplete'], ['visible', 'invisible'], ['direct', 'indirect']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, RED] })],
    'in- ＝ ラテン語系の語', BLUE),
  S('❓なぜ possible には im- が付くの？ p はくちびるを閉じる音です。in-possible と言おうとすると、n が自然に m の音になります。そこで im- になりました。impossible、impolite、impatient、imperfect。',
    [...why('p の前で、なぜ im- になる？'), ...tbl(['もとの語', '反対の語'], [['possible', '!impossible'], ['polite', '!impolite'], ['patient', '!impatient'], ['perfect', '!imperfect']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, RED] })],
    'p・m の前は im-', RED),
  S('❓r や l の前ではどうなるの？ 後ろの音に引きずられて、n がその音に変わります。r の前は ir-（regular→irregular）、l の前は il-（legal→illegal）。',
    [...why('r や l の前は？'), ...tbl(['もとの語', '反対の語'], [['regular', '!irregular'], ['responsible', '!irresponsible'], ['legal', '!illegal'], ['logical', '!illogical']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, RED], size: 11 })],
    'r の前は ir-、l の前は il-', RED),
  S('dis- は動詞にも付く否定の接頭辞です。agree→disagree、appear→disappear、like→dislike、honest→dishonest。cover→discover は「覆いを取る＝発見する」。',
    [...why('dis- は、どんな語に付く？'), ...tbl(['もとの語', '反対の語'], [['agree', 'disagree'], ['appear', 'disappear'], ['like', 'dislike'], ['honest', 'dishonest']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, RED] })],
    'dis- ＝ 動詞にも付く', BLUE),
  S('❓in- が付いていれば、必ず否定？ いいえ。invite（招く）、increase（増える）、include（含む）の in- は「中へ」の意味で、否定ではありません。語の意味から判断します。',
    [...why('in- は、いつも否定なの？'), ...tbl(['語', 'in- の意味'], [['invite（招く）', '中へ'], ['increase（増える）', '中へ'], ['include（含む）', '中へ']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, PURPLE] })],
    '否定ではない in- もある', PURPLE),
  S('まとめです。否定は p・m の前で im-、r の前で ir-、l の前で il-、広く使えるのが un-、動詞にも付くのが dis-。丸暗記ではなく、音の規則で覚えます。',
    [...row(['p・m の前\nim-', 'r の前\nir-', 'l の前\nil-'], 40, RED, 12, 56), lb(160, 118, 'それ以外：un- / in- / dis-', 13, C.blue, 'middle', true), lb(160, 142, 'impossible　irregular　illegal', 13, C.ink, 'middle')],
    '後ろの音で接頭辞が決まる', MAIN),
], '否定の接頭辞を音で使い分ける');
SEC['koko_eigo_s026#1'] = 'xf_koko_eigo_s026';

// ── 派生語⑤：意味を変える接頭辞 ──
F['xf_koko_eigo_s027'] = show([
  S('export と import は、うしろの port（運ぶ）が同じで、前の ex-（外へ）と im-（中へ）だけがちがいます。接頭辞（せっとうじ）の意味を知っていれば、初めて見る語でも見当がつきます。',
    [...why('接頭辞を知ると、何が良いの？'), ...wb([['ex-（外へ）', 'port', '!export'], ['im-（中へ）', 'port', '!import']], { y0: 60, rh: 36, gap: 14, size: 11 }), lb(160, 166, '外へ運ぶ ＝ 輸出　中へ運ぶ ＝ 輸入', 13, C.green, 'middle', true)],
    '接頭辞＋語根 に分けて考える', GREEN),
  S('re- は「再び・元へ」の意味です。rebuild（建て直す）、rewrite（書き直す）、return（戻る）、repeat（くり返す）、replace（取りかえる）。',
    [...why('re- は、どんな意味？'), ...tbl(['接頭辞付きの語', '意味'], [['rebuild', '建て直す'], ['rewrite', '書き直す'], ['repeat', 'くり返す'], ['replace', '取りかえる']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN] })],
    're- ＝ 再び・元へ', GREEN),
  S('pre- は「前もって」、mis- は「誤って」。prepare（準備する）、predict（予測する）、mistake（まちがい）、misunderstand（誤解する）。',
    [...why('pre- と mis- の意味は？'), ...tbl(['接頭辞付きの語', '意味'], [['prepare', '前もって用意する'], ['predict', '前もって言う＝予測する'], ['mistake', '誤り'], ['misunderstand', '誤って理解する＝誤解する']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN], size: 10 })],
    'pre- ＝ 前もって　mis- ＝ 誤って', GREEN),
  S('over- は「越えて・〜しすぎる」、under- は「下・不足」です。oversleep（寝すぎる＝寝坊する）、overwork（働きすぎる）、underground（地下）、underline（下線を引く）。',
    [...why('over- と under- の意味は？'), ...tbl(['over-（越えて・しすぎる）', 'under-（下・不足）'], [['oversleep', 'underground'], ['overwork', 'underline'], ['overseas', 'underwear']], { y0: 56, rh: 30, gap: 8, cols: [RED, BLUE] })],
    'over- ↑　under- ↓', MAIN),
  S('inter- は「〜の間」、tele- は「遠く」です。international（国と国の間の＝国際的な）、internet、interview、telephone（遠くの音）、television、telescope（遠くを見る道具）。',
    [...why('inter- と tele- の意味は？'), ...tbl(['inter-（間）', 'tele-（遠く）'], [['international', 'telephone'], ['internet', 'television'], ['interview', 'telescope']], { y0: 56, rh: 30, gap: 8, cols: [PURPLE, BLUE] })],
    'inter- ＝ 間　tele- ＝ 遠く', PURPLE),
  S('❓ex- と im- は、ほかの語でも「外へ」「中へ」の意味？ そのとおりです。exit（出口）と entrance（入口）、express（外へ押し出す→表現する）と impress（中へ押し込む→印象を与える）。',
    [...why('ex-（外へ）と im-（中へ）は、ほかの語でも？'), ...tbl(['ex-（外へ）', 'im-・in-（中へ）'], [['export　輸出', 'import　輸入'], ['exit　出口', 'entrance　入口'], ['express　表現する', 'impress　印象を与える']], { y0: 56, rh: 30, gap: 8, cols: [RED, BLUE], size: 11 })],
    '外へ ⇔ 中へ', MAIN),
  S('uni-（1）・bi-（2）・tri-（3）は、数を表す接頭辞です。uniform（1つにそろえた＝制服）、bicycle（2つの輪＝自転車）、triangle（3つの角＝三角形）。',
    [...why('数を表す接頭辞は？'), ...tbl(['接頭辞', '例'], [['uni-（1）', 'uniform / unique'], ['bi-（2）', 'bicycle'], ['tri-（3）', 'triangle / tricycle']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN] })],
    '1・2・3 を表す接頭辞', BLUE),
  S('まとめです。語を「接頭辞＋語根」に分ける癖をつけると、知らない語でも意味の向き（外か中か、前か後か、多いか少ないか）が読めます。',
    [...row(['re-\n再び', 'pre-\n前もって', 'mis-\n誤って', 'over-\nしすぎる'], 36, MAIN, 11, 52), ...row(['inter-\n間', 'tele-\n遠く', 'ex-\n外へ', 'im-\n中へ'], 104, BLUE, 11, 52)],
    '意味の見当をつける道具', MAIN),
], '意味を変える接頭辞');
SEC['koko_eigo_s027#0'] = 'xf_koko_eigo_s027';
// ── 反意語②：向きのある動詞の対 ──
F['xf_koko_eigo_s029'] = show([
  S('「借りる」と「貸す」は、同じ出来事を反対側から見た言い方です。日本語では主語がなくても通じますが、英語では borrow と lend を選んだ時点で「だれからだれへ」が決まります。',
    [...why('borrow と lend は、なぜ別の語なの？'), bx(14, 52, 100, 46, '友だち', C.blue, FILL.blue, 15), bx(206, 52, 100, 46, '自分', C.green, FILL.green, 15), ar(116, 66, 204, 66, C.main), ar(204, 86, 116, 86, C.main), lb(160, 56, '本', 12, C.main, 'middle', true), lb(160, 112, '同じ出来事を、立場で言い分ける', 13, C.red, 'middle', true)],
    '主語が「だれ」かを先に決める', PURPLE),
  S('自分が受け取る側なら borrow（借りる）、自分が渡す側なら lend（貸す）です。I borrowed a book from him.（彼から本を借りた）／ He lent me a book.（彼は私に本を貸した）',
    [...why('どちらの語を選ぶ？'), bx(10, 48, 144, 36, 'borrow（借りる）', C.green, FILL.green, 13), bx(166, 48, 144, 36, 'lend（貸す）', C.red, FILL.red, 13), lb(82, 100, '自分が受け取る側', 12, C.green, 'middle', true), lb(238, 100, '自分が渡す側', 12, C.red, 'middle', true), bx(10, 116, 144, 40, 'I borrowed a book\nfrom him.', C.green, FILL.green, 11), bx(166, 116, 144, 40, 'He lent me a book.', C.red, FILL.red, 11)],
    '受け取る側 → borrow　渡す側 → lend', MAIN),
  S('buy と sell も同じです。I bought this bike from my uncle.（おじから買った）／ My uncle sold this bike to me.（おじが私に売った）。teach と learn も、教える側と学ぶ側の対になっています。',
    [...why('buy / sell、teach / learn も向きの対？'), ...tbl(['受け取る側', '渡す側'], [['borrow（借りる）', 'lend（貸す）'], ['buy（買う）', 'sell（売る）'], ['learn（学ぶ）', 'teach（教える）'], ['take（取る）', 'give（与える）']], { y0: 56, rh: 26, gap: 6, cols: [GREEN, RED] })],
    '向きのある動詞は、対で覚える', MAIN),
  S('❓日本語から訳すとき、どうまちがえやすい？ 「私は彼にペンを貸した」を I borrowed him my pen. としてしまうことです。私が渡す側なので lend を使い、過去形は lent です。',
    [...why('「彼にペンを貸した」を英語にすると？'), ...sl(['I', '!lent', 'him', 'my pen.'], 56, { h: 40, size: 14 }), lb(160, 118, 'I borrowed him my pen.　×', 13, C.red, 'middle', true), lb(160, 142, '私が渡す側 → lend（過去形は lent）', 13, C.green, 'middle', true)],
    '主語が「渡す側」なら lend', RED),
  S('動作にも反対の語の対があります。come／go、open／close、push／pull、start／finish、win／lose、put on（着る）／take off（脱ぐ）、turn on（つける）／turn off（消す）。',
    [...why('動作の反対語は？'), ...tbl(['', ''], [['come（来る）', 'go（行く）'], ['push（押す）', 'pull（引く）'], ['win（勝つ）', 'lose（負ける）'], ['put on（着る）', 'take off（脱ぐ）']], { y0: 50, rh: 26, gap: 6, cols: [BLUE, RED] })],
    '動作の対', BLUE),
  S('名詞にも決まった対があります。question／answer、war／peace、success／failure、cause（原因）／effect（結果）。接頭辞で作る反意語もあります。possible／impossible、agree／disagree。',
    [...why('名詞の反対語は？'), ...tbl(['', ''], [['question（質問）', 'answer（答え）'], ['war（戦争）', 'peace（平和）'], ['success（成功）', 'failure（失敗）'], ['cause（原因）', 'effect（結果）']], { y0: 50, rh: 26, gap: 6, cols: [BLUE, RED] })],
    '名詞の対', BLUE),
  S('❓close は、なぜ「近い」と「閉まっている」で形がちがうの？ 動詞 close [kloʊz]（閉める）、形容詞 close [kloʊs]（近い）は、つづりが同じで発音も意味もちがいます。「閉まっている」は closed と d が必要です。',
    [...why('close と closed は何がちがう？'), ...sl(['The shop', 'is', '!closed', 'today.'], 52, { h: 34 }), lb(160, 104, '「閉まっている」→ 過去分詞 closed', 12, C.green, 'middle', true), ...sl(['The shop', 'is', '!close', '.'], 124, { h: 34, cols: [RED] }), lb(160, 174, '「その店は近い」の意味になる', 12, C.red, 'middle', true)],
    '「閉まっている」は closed', RED),
  S('まとめです。向きのある動詞（borrow／lend、buy／sell、teach／learn）は、英作文の前に主語を決めてから選びます。反意語は、対にして覚えましょう。',
    [...row(['向きの対\nborrow/lend', '動作の対\nopen/close', '名詞の対\nwar/peace'], 40, MAIN, 12, 64), lb(160, 130, 'The shop is closed.（閉まっている）', 13, C.green, 'middle', true), lb(160, 154, 'The shop is close.（近い）', 13, C.red, 'middle', true)],
    'まず「だれが主語か」を決める', MAIN),
], '向きのある動詞と反意語');
SEC['koko_eigo_s029#0'] = 'xf_koko_eigo_s029';

// ── 同意語・言いかえ①：助動詞・自動詞・他動詞 ──
F['xf_koko_eigo_s030'] = show([
  S('文法事項の書きかえも、同意表現の一種として出ます。can ＝ be able to、must ＝ have to、will ＝ be going to（be going to は「すでに決めていること」を表す点が少しちがいます）。',
    [...why('助動詞は、何に書きかえられる？'), ...tbl(['', ''], [['can', 'be able to'], ['must', 'have to'], ['will', 'be going to']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 14 })],
    '助動詞 ＝ 熟語で書きかえ', BLUE),
  S('❓must not と don\'t have to は、同じ意味？ いいえ。must not は「〜してはいけない」（禁止）、don\'t have to は「〜する必要はない」（不要）で、意味がちがいます。',
    [...why('must not と don\'t have to は同じ？'), bx(10, 48, 144, 34, 'must not', C.red, FILL.red, 15), bx(166, 48, 144, 34, 'don\'t have to', C.green, FILL.green, 15), lb(82, 96, '禁止（してはいけない）', 12, C.red, 'middle', true), lb(238, 96, '不要（しなくてよい）', 12, C.green, 'middle', true), bx(10, 112, 144, 44, 'You must not\nswim here.', C.red, FILL.red, 12), bx(166, 112, 144, 44, 'You don\'t have to\nswim.', C.green, FILL.green, 12)],
    '禁止と不要はちがう', RED),
  S('数量や時を表す表現にも言いかえがあります。a lot of ＝ lots of ＝ many（数えられる）／much（数えられない）。right away ＝ at once ＝ immediately（すぐに）、at last ＝ finally（ついに）。',
    [...why('数量・時の言いかえは？'), ...tbl(['', ''], [['a lot of', 'lots of / many / much'], ['right away', 'at once / immediately'], ['these days', 'nowadays'], ['at last', 'finally']], { y0: 50, rh: 26, gap: 6, cols: [BLUE, GREEN], size: 11 })],
    '意味が同じ表現をセットで', BLUE),
  S('❓reach の後ろに to は要るの？ 要りません。reach は他動詞（たどうし）で、目的語を直接とるからです。I reached the station.（○）　I reached to the station.（×）',
    [...why('「駅に着く」の reach に to は要る？'), ...sl(['I', '!reached', 'the station.'], 54, { h: 38, size: 14 }), lb(160, 110, '他動詞は、すぐ後ろに目的語を置く', 13, C.green, 'middle', true), lb(160, 136, 'I reached to the station.　×', 13, C.red, 'middle', true)],
    'reach ＋ 目的語（前置詞なし）', GREEN),
  S('❓では、arrive は？ arrive は自動詞（じどうし）で、目的語を直接とれません。前置詞が必要です。I arrived at the station.（○）　I arrived the station.（×）。get も get to と to が要ります。',
    [...why('arrive や get には前置詞が要る？'), ...sl(['I', '!arrived', '!at', 'the station.'], 54, { h: 38, size: 13 }), lb(160, 110, '自動詞は、前置詞を入れて目的語につなぐ', 13, C.blue, 'middle', true), ...sl(['I', 'got', '!to', 'the station.'], 130, { h: 34, size: 13 })],
    'arrive at ／ get to', BLUE),
  S('❓discuss に about は要るの？ 要りません。discuss は他動詞で、about を付けると誤りです。We discussed the problem.（○）　We discussed about the problem.（×）。一方、talk は自動詞なので talk about が必要です。',
    [...why('discuss に about は要る？'), ...sl(['We', '!discussed', 'the problem.'], 54, { h: 36, size: 13 }), ...sl(['We', '!talked', '!about', 'the problem.'], 108, { h: 36, size: 13, cols: [BLUE] }), lb(160, 160, '同じ「〜について話す」でも、形がちがう', 12, C.red, 'middle', true)],
    'discuss ＝ 他動詞　talk ＝ 自動詞', RED),
  S('marry も他動詞です。He married her.（彼は彼女と結婚した）。日本語の「〜と」に引かれて with を入れると誤りです（He married with her. は×）。enter、attend も前置詞をとりません。',
    [...why('「〜と結婚する」に with は要る？'), ...sl(['He', '!married', 'her.'], 54, { h: 38, size: 14 }), lb(160, 110, 'with を入れない', 13, C.red, 'middle', true), ...tbl(['前置詞なしの他動詞', ''], [['enter（〜に入る）', 'attend（〜に出席する）']], { y0: 148, rh: 26, gap: 6, cols: [BLUE, BLUE], size: 11 })],
    '日本語の「〜と」「〜に」に引かれない', RED),
  S('まとめです。他動詞（reach・discuss・marry・enter・attend）は前置詞なし。自動詞（arrive・get・talk）は前置詞が必要。書きかえは、意味と形の両方を確かめます。',
    [...row(['他動詞\n前置詞なし', '自動詞\n前置詞あり'], 40, MAIN, 12, 54), lb(160, 118, 'reach the station　arrive at the station', 13, C.green, 'middle', true), lb(160, 142, 'discuss the problem　talk about the problem', 13, C.green, 'middle', true)],
    '意味が同じでも形はちがう', MAIN),
], '自動詞と他動詞・助動詞の言いかえ');
SEC['koko_eigo_s030#1'] = 'xf_koko_eigo_s030';

// ── 使い分け①：say／tell／speak／talk ──
F['xf_koko_eigo_s032'] = show([
  S('「彼は忙しいと言った」を英語にすると、say と tell のどちらでしょう。❓なぜ日本語の訳では決まらないの？ 決めるのは「すぐ後ろに人が来るかどうか」という形だからです。',
    [...why('「言う」は、どうやって選ぶ？'), ...row(['say', 'tell', 'speak', 'talk'], 52, MAIN, 15, 44), lb(160, 122, 'どれも「言う・話す」と訳せる', 13, C.ink, 'middle'), lb(160, 146, '選ぶ手がかりは、うしろの形', 13, C.red, 'middle', true)],
    '意味ではなく「形」で選ぶ', PURPLE),
  S('say は「内容を言う」語です。すぐ後ろに人を置けません。人を示すときは to を使います。He said to me that he was busy.（○）　He said me that ...（×）',
    [...why('say の後ろに人は置ける？'), ...sl(['He', '!said', 'to me', 'that he was busy.'], 54, { h: 38, size: 12 }), lb(160, 112, '人は to で示す', 13, C.green, 'middle', true), lb(160, 138, 'He said me that he was busy.　×', 13, C.red, 'middle', true)],
    'say ＋（to 人）＋ 内容', GREEN),
  S('tell は「人に伝える」語です。すぐ後ろに必ず人が来ます。He told me that he was busy.（○）　He told that he was busy.（×：人が抜けている）',
    [...why('tell の後ろには何が来る？'), ...sl(['He', '!told', '!me', 'that he was busy.'], 54, { h: 38, size: 12 }), lb(160, 112, 'tell ＋ 人 ＋ 内容', 14, C.blue, 'middle', true), lb(160, 138, 'He told that he was busy.　×', 13, C.red, 'middle', true)],
    'tell の直後には必ず人', BLUE),
  S('❓He said me that ... が誤りなのはなぜ？ 「私に言った」を日本語の語順のまま置き、tell の形（tell 人）と say の形が頭の中で混ざったからです。直す方法は2つ。He told me that ...、または He said to me that ...。',
    [...why('He said me ... は、どう直す？'), ...sl(['He', 'said', 'me', 'that ...'], 50, { h: 30, size: 12, cols: [RED] }), ar(160, 84, 160, 98, C.main), ...sl(['He', '!told', 'me', 'that ...'], 100, { h: 30, size: 12, cols: [GREEN] }), ...sl(['He', 'said', '!to', 'me', 'that ...'], 142, { h: 30, size: 12, cols: [GREEN] })],
    'tell 人 か、say to 人', RED),
  S('speak は「言語」や「一方向の発話」に使います。She speaks English very well.（言語）、May I speak to Mr. Brown?（電話で）。後ろに言語が来たら speak です。',
    [...why('speak は、どんなときに使う？'), ...sl(['She', '!speaks', 'English', 'very well.'], 54, { h: 36, size: 12 }), ...sl(['May I', '!speak', 'to', 'Mr. Brown?'], 104, { h: 36, size: 12, cols: [GREEN] }), lb(160, 160, '言語、または一方向に話す', 13, C.green, 'middle', true)],
    'speak ＋ 言語　speak to 人', GREEN),
  S('talk は「会話をする」語です。about や with が続きます。I talked with my friend about the movie.（友だちと映画について話した）。',
    [...why('talk は、どんな形で使う？'), ...sl(['I', '!talked', '!with', 'my friend', '!about', 'the movie.'], 54, { h: 40, size: 11 }), lb(160, 118, 'talk with 人 / talk about 事', 14, C.purple, 'middle', true)],
    '会話 ＝ talk（with 人・about 事）', PURPLE),
  S('見分け方のまとめです。直後に人が来る → tell。直後に内容が来る → say。言語が来る → speak。about や with が続く → talk。「言った」という日本語ではなく、英文の形で決めます。',
    [...tbl(['うしろに来るもの', '使う語'], [['直後に人', 'tell'], ['直後に内容', 'say'], ['言語', 'speak'], ['about / with', 'talk']], { y0: 30, rh: 28, gap: 6, cols: [BLUE, GREEN], size: 14 })],
    '形を見て、語を決める', MAIN),
], 'say / tell / speak / talk の使い分け');
SEC['koko_eigo_s032#0'] = 'xf_koko_eigo_s032';
// ── 一般動詞①：動作や状態を表す動詞 ──
F['xf_koko_eigo_s037'] = show([
  S('「私はサッカーが好きです」と言いたいのに、be動詞だけでは「私＝好き」という妙な文になります。❓では、動きや気持ちはどう表すの？ それを受け持つのが一般動詞です。',
    [...why('「好き」は、be動詞では言えないの？'), ...sl(['I', 'am', 'soccer.'], 54, { h: 36, size: 14, cols: [BLUE, GRAY, GREEN] }), lb(160, 110, '「私＝サッカー」になってしまう', 13, C.red, 'middle', true), ...sl(['I', '!like', 'soccer.'], 130, { h: 36, size: 14 })],
    '動きや気持ちは一般動詞で言う', PURPLE),
  S('be動詞（am／are／is）は、主語とうしろの語を「＝」で結ぶ動詞です。それ自体に動作の意味はありません。I am busy.（私は忙しい）／ He is my brother.（彼は私の兄です）',
    [...why('be動詞は、何をする動詞？'), ...sl(['I', '!am', 'busy.'], 52, { h: 36, size: 14 }), ...sl(['He', '!is', 'my brother.'], 100, { h: 36, size: 14 }), lb(160, 160, '主語 ＝ うしろの語', 14, C.blue, 'middle', true)],
    'be動詞 ＝「＝」で結ぶ', BLUE),
  S('一般動詞は、be動詞（am／are／is／was／were）以外のすべての動詞です。動作を表す play・run・go・eat と、状態を表す like・know・have・want があります。',
    [...why('一般動詞には、どんなものがある？'), bx(10, 48, 144, 30, '動作', C.green, FILL.green, 14), bx(166, 48, 144, 30, '状態・気持ち', C.blue, FILL.blue, 14), bx(10, 84, 144, 66, 'play　run　go\ncome　study\neat　watch　read', C.green, FILL.green, 13), bx(166, 84, 144, 66, 'like　know\nhave　want\nlive　need　love', C.blue, FILL.blue, 13)],
    '一般動詞 ＝ be動詞以外すべて', GREEN),
  S('❓「好きです」の「です」は、be動詞ではないの？ 日本語では「です・ます」で終わるので be動詞を入れたくなります。しかし英語では like という一般動詞1語で表すので、be動詞は要りません。',
    [...why('I am like dogs. は、なぜ誤り？'), ...sl(['I', '!am', '!like', 'dogs.'], 54, { h: 36, size: 14, cols: [BLUE, RED, RED, GREEN] }), lb(160, 108, '動詞が2つ並んでいる　×', 13, C.red, 'middle', true), ...sl(['I', '!like', 'dogs.'], 128, { h: 36, size: 14 }), lb(160, 180, '○ 動詞は1つ', 13, C.green, 'middle', true)],
    '× I am like dogs.　○ I like dogs.', RED),
  S('同じ理由で、He is have a car. も誤りです。have が述語になるので is は要りません。主語が三人称単数（he）なので、has にします。He has a car.（彼は車を持っている）',
    [...why('He is have a car. は、どう直す？'), ...sl(['He', '!is', '!have', 'a car.'], 54, { h: 36, size: 14, cols: [BLUE, RED, RED, GREEN] }), ar(160, 94, 160, 112, C.main), ...sl(['He', '!has', 'a car.'], 116, { h: 36, size: 14 }), lb(160, 172, 'have は he のとき has になる', 12, C.green, 'middle', true)],
    '動詞は1つ。he のときは has', GREEN),
  S('❓主語によって動詞の形は変わるの？ 一般動詞は、主語が三人称単数（I と you 以外の1人・1つ）で現在の話のときだけ、-s／-es が付きます。それ以外は原形のままです。',
    [...why('動詞の形が変わるのは、いつ？'), ...tbl(['主語', '動詞'], [['I / You', 'play'], ['We / They', 'play'], ['!He / She / It', '!plays']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 14 })],
    '三人称・単数・現在 のときだけ -s', RED),
  S('まとめです。動作や気持ちは一般動詞で表し、be動詞は入れません。1つの文に動詞は原則1つ。三人称単数・現在のときだけ -s を付けます。',
    [...row(['動作・状態\n＝ 一般動詞', 'be動詞は\n入れない', '三単現のとき\n-s'], 40, MAIN, 12, 64), lb(160, 130, 'I like dogs.　He has a car.', 14, C.green, 'middle', true)],
    '動詞は1つ、形は主語で変わる', MAIN),
], '一般動詞と be動詞');
SEC['koko_eigo_s037#0'] = 'xf_koko_eigo_s037';

// ── 一般動詞②：三人称単数現在の -s ──
F['xf_koko_eigo_s038'] = show([
  S('He play soccer. と書いて減点された経験はありませんか。三人称単数の主語で現在の話なら、動詞に -s を付けます。ただし、付け方には4つの規則があります。',
    [...why('三単現の -s は、ただ s を足すだけ？'), ...sl(['He', '!play', 'soccer.'], 54, { h: 36, size: 14, cols: [BLUE, RED, GREEN] }), lb(160, 108, '×', 22, C.red, 'middle', true), ...sl(['He', '!plays', 'soccer.'], 128, { h: 36, size: 14 })],
    '三人称単数・現在 → -s', RED),
  S('① 大多数の動詞は、そのまま -s を付けます。play→plays、run→runs、like→likes、come→comes、read→reads、speak→speaks。',
    [...why('いちばん基本の付け方は？'), ...tbl(['原形', '三単現'], [['play', 'plays'], ['run', 'runs'], ['like', 'likes'], ['come', 'comes']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN] })],
    '① そのまま -s', GREEN),
  S('② -s、-x、-ch、-sh、-o で終わる語は -es を付けます。❓なぜ e を足すの？ s だけを足すと発音しにくいので、e を補うからです。watch→watches、wash→washes、pass→passes、fix→fixes、go→goes、do→does。',
    [...why('なぜ -es になる語があるの？'), ...tbl(['語尾', '例'], [['-ch / -sh', 'watch → watches'], ['-s / -x', 'pass → passes'], ['-o', 'go → goes']], { y0: 56, rh: 30, gap: 8, cols: [RED, GREEN], size: 12 })],
    '② -s -x -ch -sh -o → -es', RED),
  S('③ 「子音字（しいんじ）＋y」で終わる語は、y を i に変えて -es を付けます。study→studies、cry→cries、carry→carries、try→tries、fly→flies。study の y の前は d（子音字）です。',
    [...why('study は、なぜ studies？'), ...row(['stud', 'y → i', '＋ es'], 52, MAIN, 14, 40), ...tbl(['原形', '三単現'], [['cry', 'cries'], ['carry', 'carries'], ['try', 'tries']], { y0: 118, rh: 22, gap: 4, cols: [BLUE, GREEN], size: 11 })],
    '③ 子音字＋y → y を i に', RED),
  S('❓では、y で終わる語はすべて ies？ いいえ。④ 「母音字＋y」の語は、そのまま -s を付けます。play→plays、stay→stays、enjoy→enjoys、buy→buys。play の y の前は a（母音字）です。',
    [...why('play は、plaies にならないの？'), ...tbl(['y の前', '付け方', '例'], [['子音字（d）', 'y → i + es', 'study → studies'], ['母音字（a）', 'そのまま + s', 'play → plays']], { y0: 56, rh: 34, gap: 10, cols: [RED, MAIN, GREEN], size: 11 }), lb(160, 150, 'y の1つ前の文字を、必ず確かめる', 13, C.red, 'middle', true)],
    '④ 母音字＋y → そのまま s', RED),
  S('have だけは特別な形で、have→has になります。haves とは書きません。それ以外の動詞は、さきの4つの規則で付け方が決まります。',
    [...why('have の三単現は？'), ...tbl(['原形', '三単現'], [['have', '!has']], { y0: 70, rh: 36, cols: [BLUE, GREEN], size: 16 }), lb(160, 130, 'haves　×', 16, C.red, 'middle', true)],
    'have → has（特別な形）', PURPLE),
  S('まとめです。語尾を順に確かめます。① have か？ → has　② -s -x -ch -sh -o か？ → -es　③ 子音字＋y か？ → ies　④ それ以外 → -s',
    [...stackFlow()],
    '語尾を順に確かめる', MAIN),
], '三単現の -s の付け方');
SEC['koko_eigo_s038#0'] = 'xf_koko_eigo_s038';

// ── be動詞と一般動詞を混ぜない ──
F['xf_koko_eigo_s039'] = show([
  S('英作文でいちばん多い減点は、I am play tennis. のように、be動詞と一般動詞を同時に置いてしまう誤りです。❓なぜ起きるのでしょう。日本語の「〜します」「〜です」の感覚をそのまま持ちこむからです。',
    [...why('なぜ I am play tennis. と書いてしまう？'), bx(14, 48, 292, 40, '私は テニスを します / 私は 忙しい です', C.gray, FILL.gray, 13), ...sl(['I', '!am', '!play', 'tennis.'], 104, { h: 36, size: 14, cols: [BLUE, RED, RED, GREEN] }), lb(160, 160, '「ます」を be動詞で訳してしまう　×', 12, C.red, 'middle', true)],
    '日本語の語尾を英語にしない', PURPLE),
  S('英語の文は「主語＋述語動詞」が骨組みです。述語動詞は1つ。動作を言うなら一般動詞だけ、名詞や形容詞を述語にするなら be動詞だけを置きます。',
    [...why('文の骨組みはどうなっている？'), ...sl(['主語', '述語動詞（1つ）', 'ほかの語'], 54, { h: 36, size: 13, cols: [BLUE, RED, GREEN] }), bx(10, 106, 144, 46, '動作を言う\n→ 一般動詞だけ', C.green, FILL.green, 12), bx(166, 106, 144, 46, '名詞・形容詞\n→ be動詞だけ', C.blue, FILL.blue, 12)],
    '述語動詞は1つ', BLUE),
  S('直し方を見ましょう。× I am play tennis. → ○ I play tennis.　× He is have two dogs. → ○ He has two dogs.　× My mother is cook dinner. → ○ My mother cooks dinner.',
    [...why('動詞が2つあるときは、どう直す？'), ...tbl(['誤り', '正しい文'], [['I am play tennis.', '!I play tennis.'], ['He is have two dogs.', '!He has two dogs.'], ['My mother is cook ...', '!My mother cooks ...']], { y0: 56, rh: 32, gap: 10, cols: [RED, GREEN], size: 11 })],
    'be動詞を取り、動詞の形を整える', GREEN),
  S('❓では、be動詞はいつも要らないの？ いいえ。うしろが名詞や形容詞のときは、be動詞がないと文になりません。× She kind to everyone. → ○ She is kind to everyone.',
    [...why('be動詞が必要なのは、どんなとき？'), ...sl(['She', 'kind', 'to everyone.'], 54, { h: 36, size: 13, cols: [BLUE, RED, GREEN] }), lb(160, 106, '述語になる動詞がない　×', 13, C.red, 'middle', true), ...sl(['She', '!is', 'kind', 'to everyone.'], 126, { h: 36, size: 13 })],
    '名詞・形容詞のときは be動詞が必要', BLUE),
  S('❓どうすれば、ミスに気づけるの？ 書いたあとに「動詞はいくつあるか」を数えます。動作なら一般動詞が1つ、名詞や形容詞なら be動詞が1つ。0個なら足し、2個なら片方を消します。',
    [...why('書いたあと、何を確かめる？'), ...row(['動詞を\n数える', '0個\n→ 足す', '2個\n→ 消す'], 52, MAIN, 12, 54), lb(160, 130, '1個ならOK', 14, C.green, 'middle', true)],
    '動詞の数 ＝ 1 を確かめる', MAIN),
  S('ただし I am playing tennis now. は正しい文です。❓なぜ be動詞と動詞が並んでいるの？ ing形は「〜している」を表す形で、be動詞と組み合わせて1つの述語をつくるからです。原形が並んでいたら誤りです。',
    [...why('am playing は、なぜ正しいの？'), ...sl(['I', '!am', '!playing', 'tennis now.'], 54, { h: 36, size: 13, cols: [BLUE, GREEN, GREEN, MAIN] }), lb(160, 108, 'be動詞 ＋ ing形 ＝ 1つの述語', 13, C.green, 'middle', true), lb(160, 134, 'I am play（原形）　×　　I am playing（ing形）　○', 12, C.ink, 'middle')],
    '原形が並んだら誤り、ing形は正しい', GREEN),
  S('まとめです。動詞は1つ。動作なら一般動詞、名詞・形容詞なら be動詞。書いたあとに動詞を数える習慣をつければ、am play のような誤りは消えます。',
    [...row(['動作\n→ play', '名詞・形容詞\n→ is kind', '数えて\n確認'], 40, MAIN, 12, 64), lb(160, 130, 'I play tennis.　She is kind.', 14, C.green, 'middle', true)],
    '動詞は1つ', MAIN),
], 'be動詞と一般動詞を混ぜない');
SEC['koko_eigo_s039#0'] = 'xf_koko_eigo_s039';

// ── 過去の文：一般動詞の過去形 ──
F['xf_koko_eigo_s040'] = show([
  S('❓I go to the library yesterday. は、なぜ誤り？ yesterday（昨日）という過去の合図があるのに、動詞が現在形のままだからです。英語では文末まで見てから時制を決めます。',
    [...why('yesterday があるのに go のままでいい？'), ...sl(['I', '!go', 'to the library', '!yesterday.'], 54, { h: 36, size: 12, cols: [BLUE, RED, GREEN, YELLOW] }), lb(160, 108, '過去の合図があれば、動詞は過去形', 13, C.red, 'middle', true), ...sl(['I', '!went', 'to the library', 'yesterday.'], 128, { h: 36, size: 12 })],
    '時を表す語を見て、時制を決める', RED),
  S('一般動詞の過去形は、規則変化と不規則変化に分かれます。規則変化の基本は -ed を付けること。play→played、watch→watched、want→wanted。',
    [...why('規則動詞の過去形は、どう作る？'), ...tbl(['原形', '過去形'], [['play', 'played'], ['watch', 'watched'], ['want', 'wanted']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 14 })],
    '① そのまま -ed', GREEN),
  S('e で終わる語は -d だけを付けます。like→liked、live→lived、use→used。e をもう一度書いて likeed とはしません。',
    [...why('e で終わる語は、どうなる？'), ...tbl(['原形', '過去形'], [['like', 'liked'], ['live', 'lived'], ['use', 'used']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 14 })],
    '② e で終わる語は -d', GREEN),
  S('「子音字＋y」は y を i に変えて -ed を付けます。study→studied、cry→cried、carry→carried。これは三単現（studies）と同じ考え方です。',
    [...why('study の過去形は studyed？'), ...tbl(['原形', '過去形'], [['study', '!studied'], ['cry', '!cried'], ['carry', '!carried']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 14 })],
    '③ 子音字＋y → y を i に', RED),
  S('❓stop の過去形は、なぜ stopped？ 短い母音のあとに子音字が1つで終わる語は、子音字を重ねてから -ed を付けます。stop→stopped、plan→planned。重ねないと、母音の読み方が変わってしまうからです。',
    [...why('stop は、なぜ p を重ねる？'), ...tbl(['原形', '過去形'], [['stop', '!stopped'], ['plan', '!planned']], { y0: 56, rh: 34, gap: 10, cols: [BLUE, GREEN], size: 14 }), lb(160, 156, '短い母音 ＋ 子音字1つ → 子音字を重ねる', 12, C.red, 'middle', true)],
    '④ 子音字を重ねる', RED),
  S('不規則動詞は形そのものが変わるので、丸暗記します。go→went、come→came、see→saw、have→had、do→did、get→got、take→took、make→made、write→wrote。',
    [...why('不規則動詞には、どんなものがある？'), ...tbl(['原形', '過去形', '原形', '過去形'], [['go', 'went', 'take', 'took'], ['come', 'came', 'make', 'made'], ['see', 'saw', 'write', 'wrote'], ['have', 'had', 'get', 'got']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN, BLUE, GREEN], size: 12 })],
    '不規則動詞は暗記', MAIN),
  S('read や put、cut は、過去形でも形が変わりません。read の過去形はつづりが同じで、発音だけ /red/ に変わります。つづりだけでは時制が決まらないので、yesterday などの合図で確かめます。',
    [...why('形が変わらない動詞は？'), ...tbl(['原形', '過去形'], [['read（リード）', 'read（レッド）'], ['put', 'put'], ['cut', 'cut']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 13 })],
    '合図の語で時制を確かめる', PURPLE),
  S('まとめです。過去の合図があれば過去形に。主語が何でも過去形は1つの形です（三単現の -s は付けません）。❓ He was played soccer. はなぜ誤り？ played だけで過去を表せるので was は不要です。',
    [...sl(['I', 'He', 'They'], 36, { h: 30, size: 13 }), ar(160, 70, 160, 86, C.main), bx(110, 88, 100, 32, 'played', C.green, FILL.green, 15), lb(160, 140, 'He was played soccer.　×', 13, C.red, 'middle', true), lb(160, 162, 'He played soccer last Sunday.　○', 13, C.green, 'middle', true)],
    '主語が何でも、過去形は同じ形', MAIN),
], '一般動詞の過去形');
SEC['koko_eigo_s040#1'] = 'xf_koko_eigo_s040';

export const XF_KEB_FIGURES: Record<string, DiagramFigure> = F;
export const XF_KEB_SECTIONS: Record<string, string> = SEC;
