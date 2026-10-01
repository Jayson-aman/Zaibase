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
// ── be動詞の疑問文と答え方（Yes / No） ──
F['xf_koko_eigo_s042'] = show([
  S('❓ Is Tom your brother? に Yes, Tom is. と答えてよいでしょうか。日本語では名前をくり返しても自然ですが、英語では代名詞（だいめいし）に置きかえるのが約束です。正しくは Yes, he is.',
    [...why('Yes, Tom is. は、なぜ不自然？'), bx(14, 46, 292, 30, 'Is Tom your brother?', C.gray, FILL.gray, 14), ...sl(['Yes,', 'Tom', 'is.'], 92, { h: 32, size: 14, cols: [GRAY, RED, GRAY] }), lb(160, 138, '×　名前をくり返さない', 13, C.red, 'middle', true), ...sl(['Yes,', '!he', 'is.'], 154, { h: 32, size: 14 })],
    '答えの主語は、代名詞に置きかえる', RED),
  S('置きかえの対応を覚えましょう。Tom・your father → he、Mary → she、this／that → it、these／those・your parents → they。指すものによって代名詞が決まります。',
    [...why('どの語を、どの代名詞にする？'), ...tbl(['聞かれた主語', '答えの主語'], [['Tom / your father', 'he'], ['Mary', 'she'], ['this / that', 'it'], ['these / those / your parents', 'they']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN], size: 12 })],
    '主語の置きかえ', GREEN),
  S('❓ this や that で聞かれたら？ Is that your bike? → Yes, it is. です。Yes, that is. とは答えません。these や those なら they を使います。Are these your books? → Yes, they are.',
    [...why('this / that で聞かれたら、どう答える？'), bx(10, 46, 300, 26, 'Is that your bike?', C.gray, FILL.gray, 13), ...sl(['Yes,', '!it', 'is.'], 80, { h: 30, size: 13 }), bx(10, 128, 300, 26, 'Are these your books?', C.gray, FILL.gray, 13), ...sl(['Yes,', '!they', 'are.'], 160, { h: 30, size: 13 })],
    'this / that → it　these / those → they', BLUE),
  S('you で聞かれたら、自分のことなので I で答えます。Are you a student? → Yes, I am.　you が複数人（Are you and Ken ...?）なら we で答えます。Yes, we are.',
    [...why('you で聞かれたら？'), ...tbl(['聞かれ方', '答え方'], [['Are you a student?', 'Yes, I am.'], ['Are you and Ken in the club?', 'Yes, we are.']], { y0: 56, rh: 40, gap: 12, cols: [BLUE, GREEN], size: 11 })],
    'you → I か we', GREEN),
  S('❓ Yes の答えは、なぜ短縮しないの？ 文の最後に来る語は強く発音されるので、短縮した形では言えないからです。○ Yes, I am.　× Yes, I\'m.　○ Yes, he is.　× Yes, he\'s.',
    [...why('Yes, I\'m. は、なぜ使えない？'), ...tbl(['Yes の答え', ''], [['Yes, I am.　○', 'Yes, I\'m.　×'], ['Yes, he is.　○', 'Yes, he\'s.　×']], { y0: 56, rh: 40, gap: 12, cols: [GREEN, RED], size: 12 })],
    'Yes では短縮しない', RED),
  S('No の答えでは、短縮形を使ってかまいません。No, I\'m not.　No, he isn\'t.　No, they aren\'t. ただし Yes の答えでは短縮しないので、対にして覚えます。',
    [...why('No のときは、短縮してもいい？'), ...tbl(['', ''], [['No, I\'m not.', 'No, I am not.'], ['No, he isn\'t.', 'No, he is not.'], ['No, they aren\'t.', 'No, they are not.']], { y0: 52, rh: 30, gap: 8, cols: [GREEN, GREEN], size: 12 })],
    'No は短縮形が使える', GREEN),
  S('疑問文そのものは、be動詞を主語の前に出して作ります。You are a soccer fan. → Are you a soccer fan?　疑問文を作るときは、be動詞を出したあとに元の位置にも残さないよう注意します（× Are you are ...?）。',
    [...why('疑問文は、どう作る？'), ...sl(['You', 'are', 'a soccer fan.'], 52, { h: 32, size: 13 }), ar(160, 88, 160, 104, C.main), ...sl(['!Are', 'you', 'a soccer fan?'], 108, { h: 32, size: 13, cols: [GREEN] }), lb(160, 166, '移動であって複製ではない', 12, C.red, 'middle', true)],
    'be動詞を前に出す', MAIN),
  S('まとめです。答えるときは ① 主語を代名詞に ② Yes では短縮しない ③ No では短縮してよい ④ you には I か we。Is Tom your brother? → Yes, he is.',
    [...row(['主語を\n代名詞に', 'Yes は\n短縮しない', 'No は\n短縮OK'], 40, MAIN, 12, 64), lb(160, 130, 'Is Tom your brother?', 13, C.ink, 'middle'), lb(160, 154, 'Yes, he is.　No, he isn\'t.', 14, C.green, 'middle', true)],
    '代名詞で受けて、be動詞をそろえる', MAIN),
], 'be動詞の疑問文の答え方');
SEC['koko_eigo_s042#1'] = 'xf_koko_eigo_s042';

// ── 一般動詞の疑問文 ──
F['xf_koko_eigo_s044'] = show([
  S('Are you play tennis? と書いてしまう人は少なくありません。❓なぜ誤りなの？ 一般動詞（play）の文には前に出せる be動詞がなく、be動詞と動詞が並ぶ形になるからです。',
    [...why('Are you play tennis? は、なぜ誤り？'), ...sl(['!Are', 'you', '!play', 'tennis?'], 54, { h: 36, size: 14, cols: [RED, BLUE, RED, GREEN] }), lb(160, 108, 'be動詞と一般動詞が並んでいる　×', 13, C.red, 'middle', true)],
    '一般動詞の文に be動詞は出ない', RED),
  S('❓では、どうすればいいの？ まず「この文の述語は be動詞か、一般動詞か」を確かめます。be動詞なら前に出す。一般動詞なら、助動詞の do を借りて文頭に置きます。',
    [...why('疑問文を作る入り口は？'), bx(86, 46, 148, 30, '述語は何？', C.purple, FILL.purple, 14), ar(130, 78, 82, 96, C.main), ar(190, 78, 238, 96, C.main), bx(10, 98, 144, 44, 'be動詞\n→ 前に出す', C.blue, FILL.blue, 13), bx(166, 98, 144, 44, '一般動詞\n→ do を借りる', C.green, FILL.green, 13)],
    '二択：be動詞を出す／do を借りる', PURPLE),
  S('do は主語と時によって3つに使い分けます。Do ＋ I／you／we／they／複数（現在）、Does ＋ he／she／it／人名／単数（現在）、Did ＋ すべての主語（過去）。',
    [...why('Do / Does / Did は、どう選ぶ？'), ...tbl(['使う語', '主語・時'], [['Do（現在）', 'I・you・we・they・複数'], ['Does（現在）', 'he・she・it・人名・単数'], ['Did（過去）', 'すべての主語']], { y0: 56, rh: 34, gap: 10, cols: [GREEN, BLUE], size: 12 })],
    '現在は Do か Does、過去は Did', BLUE),
  S('実際に作ってみましょう。You play tennis. → Do you play tennis?　He plays tennis. → Does he play tennis?　She went to Kyoto. → Did she go to Kyoto?',
    [...why('それぞれ、どう変わる？'), ...tbl(['ふつうの文', '疑問文'], [['You play tennis.', '!Do you play tennis?'], ['He plays tennis.', '!Does he play tennis?'], ['She went to Kyoto.', '!Did she go to Kyoto?']], { y0: 56, rh: 34, gap: 10, cols: [BLUE, GREEN], size: 11 })],
    'do を文頭に、動詞は原形', GREEN),
  S('❓ Does he plays soccer? は、なぜ誤り？ Does の中に三人称単数の s がすでに含まれているので、動詞に s を付けると二重になるからです。動詞は原形の play にします。',
    [...why('Does のうしろの動詞は、なぜ原形？'), ...sl(['Does', 'he', '!plays', 'soccer?'], 54, { h: 36, size: 14, cols: [BLUE, BLUE, RED, GREEN] }), lb(160, 108, '三単現の s が二重になる　×', 13, C.red, 'middle', true), ...sl(['Does', 'he', '!play', 'soccer?'], 128, { h: 36, size: 14 })],
    'Does → 動詞は原形', RED),
  S('Did も同じです。Did に過去の意味がすでに含まれているので、動詞は原形にします。× Did you went there? → ○ Did you go there? 否定文とまったく同じ考え方です。',
    [...why('Did のうしろの動詞は？'), ...sl(['Did', 'you', '!went', 'there?'], 54, { h: 36, size: 14, cols: [BLUE, BLUE, RED, GREEN] }), lb(160, 108, '過去の印が二重になる　×', 13, C.red, 'middle', true), ...sl(['Did', 'you', '!go', 'there?'], 128, { h: 36, size: 14 })],
    'Did → 動詞は原形', RED),
  S('まとめです。一般動詞の疑問文は「Do／Does／Did ＋ 主語 ＋ 動詞の原形 〜?」。be動詞と混ぜない（× Are you play ...?）。Do you play tennis?',
    [...row(['Do/Does/Did', '主語', '動詞の原形'], 40, MAIN, 12, 54), lb(160, 118, 'Do you play tennis?', 15, C.green, 'middle', true), lb(160, 142, 'Are you play tennis?　×', 13, C.red, 'middle', true)],
    'do を借り、動詞は原形', MAIN),
], '一般動詞の疑問文');
SEC['koko_eigo_s044#0'] = 'xf_koko_eigo_s044';

// ── 主語をたずねる疑問文 ──
F['xf_koko_eigo_s046'] = show([
  S('これまでの疑問文は、たずねたい部分が目的語や場所だったので、語順の入れかえが必要でした。You saw Ken. → Who did you see?（あなたはだれを見ましたか）うしろの did you see が疑問文の語順です。',
    [...why('「だれを」をたずねるときは？'), ...sl(['You', 'saw', 'Ken.'], 52, { h: 32, size: 13 }), ar(160, 88, 160, 104, C.main), ...sl(['Who', 'did', 'you', 'see?'], 108, { h: 32, size: 13, cols: [PURPLE, GREEN, BLUE, MAIN] })],
    '目的語をたずねる → 語順を入れかえる', BLUE),
  S('今回は主語をたずねます。Ken broke the window. → Who broke the window?（だれが窓を割りましたか）主語の Ken の位置に who を置くだけです。',
    [...why('「だれが」をたずねるときは？'), ...sl(['Ken', 'broke', 'the window.'], 52, { h: 32, size: 13 }), ar(160, 88, 160, 104, C.main), ...sl(['!Who', 'broke', 'the window?'], 108, { h: 32, size: 13, cols: [PURPLE] })],
    '主語の位置に who を置く', PURPLE),
  S('❓なぜ did が要らないの？ who が主語の位置にあるので、語順を入れかえる必要がないからです。たずねたい部分が主語そのものなら、ふつうの文と同じ順序のままです。',
    [...why('なぜ did を使わないの？'), ...sl(['Who', 'broke', 'the window?'], 54, { h: 36, size: 13, cols: [PURPLE, GREEN, MAIN] }), lb(160, 108, '主語 ＋ 動詞 ＋ 〜 のまま', 13, C.green, 'middle', true), lb(160, 134, 'Who did break the window?　×', 13, C.red, 'middle', true)],
    '主語をたずねる → do / does / did は使わない', GREEN),
  S('例を見ましょう。Who wants some tea?（お茶がほしい人はいますか）、Who lives in that house?（だれがあの家に住んでいますか）、What happened yesterday?（昨日何が起きましたか）。',
    [...why('ほかにどんな文がある？'), ...tbl(['', ''], [['Who wants some tea?', '!主語 ＝ who'], ['Who lives in that house?', '!主語 ＝ who'], ['What happened yesterday?', '!主語 ＝ what']], { y0: 52, rh: 32, gap: 10, cols: [BLUE, GREEN], size: 11 })],
    '疑問文なのに do / does / did が出てこない', BLUE),
  S('❓現在の文では、動詞はどうなるの？ who や what は「だれか1人・何か1つ」として扱うので、動詞に -s が付きます。Who plays the piano in your family?（× Who play）',
    [...why('who が主語のとき、動詞の形は？'), ...sl(['Who', '!plays', 'the piano?'], 54, { h: 36, size: 14, cols: [PURPLE, GREEN, MAIN] }), lb(160, 108, 'who は三人称単数あつかい → -s', 13, C.green, 'middle', true), lb(160, 134, 'Who play the piano?　×', 13, C.red, 'middle', true)],
    'who ＋ 動詞の -s', GREEN),
  S('過去の文は、ふつうの過去形です。Who broke the window?　Who came to the party?　Who ate my cake?',
    [...why('過去の文では？'), ...tbl(['', ''], [['Who broke the window?', '→ broke'], ['Who came to the party?', '→ came'], ['Who ate my cake?', '→ ate']], { y0: 52, rh: 32, gap: 10, cols: [PURPLE, GREEN], size: 12 })],
    '過去 ＝ ふつうの過去形', GREEN),
  S('答え方です。「主語 ＋ do／does／did」で短く答えられます。Who plays the piano? — My sister does.　Who broke the window? — Ken did.　ただし be動詞で聞かれたら be動詞で受けます。Who is absent today? — Tom is.',
    [...why('答えるときは、どう言う？'), ...tbl(['聞かれ方', '答え方'], [['Who plays the piano?', 'My sister does.'], ['Who broke the window?', 'Ken did.'], ['Who is absent today?', 'Tom is.']], { y0: 56, rh: 34, gap: 10, cols: [BLUE, GREEN], size: 11 })],
    '聞かれた動詞の種類に合わせて受ける', MAIN),
  S('まとめです。主語をたずねるときは「疑問詞 ＋ 動詞 〜?」。do／does／did は使いません。現在なら動詞に -s。× My mother is. ではなく ○ My mother does. と答えます。',
    [...row(['Who / What', '＋ 動詞', '＋ 〜?'], 40, MAIN, 13, 50), lb(160, 114, 'Who wrote this book?　○', 14, C.green, 'middle', true), lb(160, 138, 'Who did write this book?　×', 14, C.red, 'middle', true)],
    '語順は変えない', MAIN),
], '主語をたずねる疑問文');
SEC['koko_eigo_s046#0'] = 'xf_koko_eigo_s046';

// ── 第2文型 SVC②：become / look / feel など ──
F['xf_koko_eigo_s050'] = show([
  S('「彼は疲れているように見える」は He looks tired. です。❓ look は「見る」ではないの？ ここでは「S ＝ C」の関係を作る動詞で、be動詞と同じはたらきをします。You look tired. は you ＝ tired（疲れた）という関係です。',
    [...why('look は、なぜ「見る」ではないの？'), ...sl(['You', 'look', 'tired.'], 54, { h: 36, size: 14, cols: [BLUE, GREEN, MAIN] }), ar(60, 96, 60, 108, C.blue), lb(160, 118, 'you ＝ tired', 15, C.green, 'middle', true), lb(160, 144, 'be動詞（You are tired.）と同じはたらき', 12, C.ink, 'middle')],
    'look ＝ S と C をイコールで結ぶ', GREEN),
  S('S ＝ C を作る動詞は be動詞だけではありません。まず「変化」を表すものです。become（なる）、get（なる）、turn（変わる）、grow（なる）。He became a doctor.／It got dark.／The leaves turned red.',
    [...why('「〜になる」を表す動詞は？'), ...tbl(['動詞', '例'], [['become', 'She became famous.'], ['get', 'It got dark.'], ['turn', 'The leaves turned red.'], ['grow', 'He grew tall.']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN], size: 11 })],
    '変化 ＝ 〜になる', BLUE),
  S('「状態が続く」を表す動詞もあります。keep（〜のままでいる）、stay、remain。Please keep quiet.　The store stays open until nine.',
    [...why('「〜のままである」を表す動詞は？'), ...tbl(['動詞', '例'], [['keep', 'Please keep quiet.'], ['stay', 'The store stays open.'], ['remain', 'It remained unsolved.']], { y0: 56, rh: 32, gap: 10, cols: [BLUE, GREEN], size: 11 })],
    '継続 ＝ 〜のままである', BLUE),
  S('「感覚」を表す動詞です。look（見える）、sound（聞こえる）、feel（感じる）、taste（味がする）、smell（においがする）。This soup tastes good.（このスープはおいしい味がする）',
    [...why('「〜に見える・聞こえる」を表す動詞は？'), ...tbl(['動詞', '例'], [['look', 'You look tired.'], ['sound', 'That sounds interesting.'], ['feel', 'I feel sick.'], ['taste', 'This soup tastes good.'], ['smell', 'These flowers smell sweet.']], { y0: 56, rh: 22, gap: 4, cols: [BLUE, GREEN], size: 11 })],
    '感覚 ＝ 〜に見える・聞こえる', BLUE),
  S('❓うしろには、何を置くの？ これらの動詞のうしろに来るのは形容詞（けいようし）です。「うれしそうに見える」と訳すからといって、副詞（happily）は置きません。You look happy.',
    [...why('You look happily. は、なぜ誤り？'), ...sl(['You', 'look', '!happily', 'today.'], 54, { h: 36, size: 14, cols: [BLUE, GREEN, RED, MAIN] }), lb(160, 108, 'happily は「動作の様子」を表す副詞', 12, C.red, 'middle', true), ...sl(['You', 'look', '!happy', 'today.'], 128, { h: 36, size: 14 })],
    'うしろは形容詞（happy）', RED),
  S('イコールで確かめましょう。You look happy. なら you ＝ happy、This soup tastes good. なら this soup ＝ good です。S ＝ C が成り立てば、うしろは形容詞（または名詞）です。',
    [...why('見分けるには？'), ...tbl(['文', 'イコールの関係'], [['You look happy.', 'you ＝ happy'], ['This soup tastes good.', 'this soup ＝ good'], ['He became a doctor.', 'he ＝ a doctor']], { y0: 56, rh: 34, gap: 10, cols: [BLUE, GREEN], size: 12 })],
    'S ＝ C を確かめる', MAIN),
  S('まとめです。become・get・look・feel・sound・taste・smell・keep・stay などは be動詞の代わりをする動詞。うしろには形容詞を置きます。become のうしろには名詞も置けます（become a doctor）。',
    [...row(['変化\nbecome get', '継続\nkeep stay', '感覚\nlook feel'], 40, MAIN, 12, 64), lb(160, 130, 'S ＝ C ：うしろは形容詞', 14, C.green, 'middle', true)],
    'be動詞の代わりをする動詞', MAIN),
], 'be動詞の代わりをする動詞');
SEC['koko_eigo_s050#0'] = 'xf_koko_eigo_s050';
// ── 同じ動詞でも文型が変わる：look at と look tired ──
F['xf_koko_eigo_s051'] = show([
  S('同じ look なのに、look at the picture では「見る」、look tired では「見える」。英語では動詞そのものより、うしろに何を置いたかで意味が決まります。',
    [...why('同じ look なのに、意味が変わるのは？'), ...sl(['look', '!at', 'the picture'], 52, { h: 34, size: 13 }), lb(160, 102, '→ 〜を見る', 13, C.green, 'middle', true), ...sl(['look', '!tired'], 122, { h: 34, size: 13, cols: [GREEN, BLUE] }), lb(160, 172, '→ 〜に見える', 13, C.blue, 'middle', true)],
    'うしろの形で意味が決まる', PURPLE),
  S('look の仲間を整理します。look at ＋ 名詞（〜を見る）、look ＋ 形容詞（〜に見える）、look for ＋ 名詞（〜をさがす）、look like ＋ 名詞（〜に似ている）。',
    [...why('look には、どんな形がある？'), ...tbl(['形', '意味'], [['look at ＋ 名詞', '〜を見る'], ['look ＋ 形容詞', '〜に見える'], ['look for ＋ 名詞', '〜をさがす'], ['look like ＋ 名詞', '〜に似ている']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN], size: 12 })],
    'look ＋ うしろの形', BLUE),
  S('❓ I looked the picture. は、なぜ誤り？ look は自動詞（じどうし）で、そのままでは目的語を置けません。見る対象を続けるには at が要ります。I looked at the picture. 他動詞の see なら I saw the picture. と書けます。',
    [...why('「絵を見た」に at は要る？'), ...sl(['I', 'looked', 'the picture.'], 54, { h: 34, size: 13, cols: [BLUE, RED, MAIN] }), lb(160, 104, '×', 20, C.red, 'middle', true), ...sl(['I', 'looked', '!at', 'the picture.'], 124, { h: 34, size: 13 })],
    'look は at を借りて対象につなぐ', RED),
  S('❓では、He looked at tired. は？ これも誤りです。うしろが形容詞 tired のときは at を入れません。He ＝ tired という関係（第2文型）になるからです。at が要るのは、見る対象の名詞が来るときだけです。',
    [...why('「疲れて見えた」に at は要る？'), ...sl(['He', 'looked', '!at', 'tired.'], 54, { h: 34, size: 13, cols: [BLUE, GREEN, RED, MAIN] }), lb(160, 104, '×', 20, C.red, 'middle', true), ...sl(['He', 'looked', '!tired.'], 124, { h: 34, size: 13 })],
    'at が要るのは、うしろが名詞のとき', RED),
  S('get も同じです。get to ＋ 場所（〜に着く）は第1文型、get ＋ 形容詞（〜になる）は第2文型、get ＋ 名詞（〜を手に入れる）は第3文型です。',
    [...why('get は、うしろでどう変わる？'), ...tbl(['形', '意味と文型'], [['get to ＋ 場所', '着く（第1文型）'], ['get ＋ 形容詞', 'なる（第2文型）'], ['get ＋ 名詞', '手に入れる（第3文型）']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 12 })],
    'get ＋ うしろの形', BLUE),
  S('grow も 3つの形があります。The plants grew fast.（育った・第1文型）／ He grew tall.（背が高くなった・第2文型）／ They grow rice here.（米を作る・第3文型）。',
    [...why('grow は？'), ...tbl(['文', '意味と文型'], [['The plants grew fast.', '育った（第1文型）'], ['He grew tall.', '〜になった（第2文型）'], ['They grow rice.', '作る（第3文型）']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 11 })],
    'grow ＋ うしろの形', BLUE),
  S('❓文型は、どうやって判断するの？ 訳から決めるのではなく、形から決めます。「前置詞＋名詞」なら第1文型、「形容詞」なら第2文型、「名詞だけ」なら第3文型です。',
    [...why('文型は、何を見て決める？'), ...tbl(['うしろの形', '文型'], [['前置詞 ＋ 名詞', '第1文型'], ['形容詞', '第2文型'], ['名詞だけ', '第3文型']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 13 })],
    '形から意味を決める', MAIN),
  S('まとめです。同じ動詞でも、うしろの形で意味と文型が変わります。look at the picture と look tired を対で覚え、at が要るかどうかは、うしろが名詞か形容詞かで判断します。',
    [...row(['look at\n＋ 名詞', 'look\n＋ 形容詞', 'look for\n/ like'], 40, MAIN, 12, 64), lb(160, 130, 'I looked at the picture.　He looked tired.', 12, C.green, 'middle', true)],
    '名詞なら at、形容詞なら at なし', MAIN),
], 'look at と look tired');
SEC['koko_eigo_s051#0'] = 'xf_koko_eigo_s051';

// ── 目的語になれる形：名詞・動名詞・不定詞 ──
F['xf_koko_eigo_s053'] = show([
  S('「私は泳ぐのが好きです」は I like swim. ではなく I like swimming. です。❓なぜ原形ではだめなのでしょう。目的語（もくてきご）の位置に置けるのは、名詞のはたらきをする形だけだからです。',
    [...why('I like swim. は、なぜ誤り？'), ...sl(['I', 'like', '!swim.'], 54, { h: 34, size: 14, cols: [BLUE, GREEN, RED] }), lb(160, 104, '動詞をそのままは置けない　×', 13, C.red, 'middle', true), ...sl(['I', 'like', '!swimming.'], 124, { h: 34, size: 14 })],
    '目的語 ＝ 名詞のはたらきをする形', RED),
  S('動名詞（どうめいし）と不定詞（ふていし）は、どちらも「〜すること」という名詞のはたらきをします。動名詞は動詞の ing 形、不定詞は to ＋ 動詞の原形です。',
    [...why('「〜すること」は、どう表す？'), bx(10, 48, 144, 40, '動名詞\n動詞 ＋ ing', C.green, FILL.green, 13), bx(166, 48, 144, 40, '不定詞\nto ＋ 原形', C.blue, FILL.blue, 13), bx(10, 100, 144, 30, 'enjoy swimming', C.green, FILL.yellow, 13), bx(166, 100, 144, 30, 'want to swim', C.blue, FILL.yellow, 13), lb(160, 152, 'どちらも「〜すること」', 13, C.ink, 'middle', true)],
    '動名詞と不定詞は、名詞のはたらき', BLUE),
  S('❓どちらをとるかは、どう決まるの？ 動詞ごとに決まっています。まず動名詞だけをとる動詞。enjoy（楽しむ）、finish（終える）、stop（やめる）、practice（練習する）、give up、mind。',
    [...why('ing だけをとる動詞は？'), ...tbl(['動詞', '例'], [['enjoy', 'enjoyed swimming'], ['finish', 'finished reading'], ['stop', 'stopped talking'], ['practice', 'practice playing']], { y0: 56, rh: 22, gap: 4, cols: [GREEN, MAIN], size: 12 }), lb(160, 172, '× enjoyed to swim', 13, C.red, 'middle', true)],
    '動名詞だけ：enjoy finish stop practice', GREEN),
  S('次に、不定詞だけをとる動詞。want（〜したい）、hope（望む）、decide（決める）、wish（願う）、promise（約束する）、expect（期待する）。I want to be a teacher.',
    [...why('to だけをとる動詞は？'), ...tbl(['動詞', '例'], [['want', 'want to be'], ['hope', 'hope to see'], ['decide', 'decided to join'], ['wish', 'wish to go']], { y0: 56, rh: 22, gap: 4, cols: [BLUE, MAIN], size: 12 }), lb(160, 172, '× want being', 13, C.red, 'middle', true)],
    '不定詞だけ：want hope decide wish', BLUE),
  S('どちらもとれる動詞もあります。like、love、begin、start、continue。I like playing tennis. ＝ I like to play tennis.（どちらも同じ意味）',
    [...why('どちらでもいい動詞は？'), ...sl(['I', 'like', '!playing', 'tennis.'], 54, { h: 34, size: 13, cols: [BLUE, GREEN, GREEN, MAIN] }), lb(160, 98, '＝', 18, C.ink, 'middle', true), ...sl(['I', 'like', '!to play', 'tennis.'], 112, { h: 34, size: 13, cols: [BLUE, GREEN, BLUE, MAIN] }), lb(160, 166, 'like love begin start continue', 12, C.ink, 'middle', true)],
    'どちらも使える動詞', PURPLE),
  S('❓覚え方は？ 「エンジョイは ing、ウォントは to」と口に出して覚えると、試験中に思い出しやすくなります。enjoy to ～ も want ing も、どちらも誤りです。',
    [...why('試験中に思い出す方法は？'), bx(10, 52, 144, 44, 'enjoy → ing\n（エンジョイは ing）', C.green, FILL.green, 12), bx(166, 52, 144, 44, 'want → to\n（ウォントは to）', C.blue, FILL.blue, 12), lb(160, 126, 'enjoy to ～　×　　want ing　×', 14, C.red, 'middle', true)],
    '口に出して覚える', MAIN),
  S('❓stop は、ing と to で意味が変わります。stop ＋ ing は「〜するのをやめる」（He stopped talking.）、stop ＋ to 不定詞は「〜するために立ち止まる」（He stopped to talk.）。このときの to は目的語ではなく、「〜するために」を表します。',
    [...why('stop ing と stop to は同じ？'), ...tbl(['形', '意味'], [['stop ＋ ing', '〜するのをやめる'], ['stop ＋ to ＋ 原形', '〜するために立ち止まる']], { y0: 56, rh: 34, gap: 8, cols: [RED, BLUE], size: 12 }), lb(160, 148, 'He stopped talking.（話すのをやめた）', 12, C.red, 'middle', true), lb(160, 168, 'He stopped to talk.（話すために立ち止まった）', 12, C.blue, 'middle', true)],
    '意味が変わる動詞', RED),
  S('まとめです。目的語になれるのは 名詞・代名詞の目的格・動名詞・不定詞。動詞をそのまま置くことはできません。ing をとるか to をとるかは、動詞ごとに決まっています。',
    [...row(['enjoy\nfinish\nstop', 'want\nhope\ndecide', 'like\nbegin\nstart'], 36, MAIN, 12, 72), lb(54, 124, 'ing', 14, C.green, 'middle', true), lb(160, 124, 'to', 14, C.blue, 'middle', true), lb(266, 124, 'どちらも', 13, C.purple, 'middle', true)],
    '動詞ごとに ing か to が決まる', MAIN),
], '目的語になれる形');
SEC['koko_eigo_s053#1'] = 'xf_koko_eigo_s053';

// ── SVC と SVO の見分け ──
F['xf_koko_eigo_s055'] = show([
  S('He became a doctor. と He knows a doctor. は、見た目がまったく同じ形です。しかし前者は「彼＝医者」、後者は「彼と医者は別人」。この違いが文型の違いになります。',
    [...why('同じ形なのに、文型がちがうのは？'), ...sl(['He', 'became', 'a doctor.'], 52, { h: 34, size: 13 }), lb(160, 98, '彼 ＝ 医者', 14, C.green, 'middle', true), ...sl(['He', 'knows', 'a doctor.'], 120, { h: 34, size: 13 }), lb(160, 166, '彼 ≠ 医者（別人）', 14, C.red, 'middle', true)],
    '形は同じ。ちがいは「イコールかどうか」', PURPLE),
  S('❓どうやって区別するの？ 基準はたった1つ。主語とうしろの語をイコールで結べるかどうかです。S ＝ C なら SVC（第2文型）、S ≠ O なら SVO（第3文型）です。',
    [...why('区別の基準は？'), bx(10, 48, 144, 54, 'S ＝ うしろの語\n→ SVC（第2文型）', C.green, FILL.green, 13), bx(166, 48, 144, 54, 'S ≠ うしろの語\n→ SVO（第3文型）', C.red, FILL.red, 13), lb(160, 128, 'イコールで結べるか？', 15, C.purple, 'middle', true)],
    '基準は「イコール」ひとつだけ', PURPLE),
  S('SVC の例です。He became a doctor.（彼＝医者）、She is my sister.（彼女＝姉）、The soup tastes good.（スープ＝よい味）。すべてイコールで結べます。',
    [...why('SVC の例は？'), ...tbl(['文', '関係'], [['He became a doctor.', '彼 ＝ 医者'], ['She is my sister.', '彼女 ＝ 姉'], ['The soup tastes good.', 'スープ ＝ よい味']], { y0: 56, rh: 32, gap: 10, cols: [BLUE, GREEN], size: 12 })],
    'SVC ＝ イコールで結べる', GREEN),
  S('SVO の例です。He knows a doctor.（彼≠医者）、She has a sister.（彼女≠姉）、I made a cake.（私≠ケーキ）。イコールで結ぶと意味が通りません。',
    [...why('SVO の例は？'), ...tbl(['文', '関係'], [['He knows a doctor.', '彼 ≠ 医者'], ['She has a sister.', '彼女 ≠ 姉'], ['I made a cake.', '私 ≠ ケーキ']], { y0: 56, rh: 32, gap: 10, cols: [BLUE, RED], size: 12 })],
    'SVO ＝ イコールで結べない', RED),
  S('❓うしろが形容詞だったら？ 考えるまでもなく SVC です。形容詞は目的語になれないからです。He looks tired.／It got dark.／Keep quiet.',
    [...why('うしろが形容詞のときは？'), ...tbl(['文', 'うしろの語'], [['He looks tired.', 'tired（形容詞）'], ['It got dark.', 'dark（形容詞）'], ['Keep quiet.', 'quiet（形容詞）']], { y0: 56, rh: 28, gap: 6, cols: [BLUE, GREEN], size: 12 }), lb(160, 168, '形容詞は O にならない → 即 SVC', 13, C.green, 'middle', true)],
    '形容詞が来たら SVC', GREEN),
  S('動詞でも見当がつきます。SVC を作りやすい動詞：be・become・get・turn・grow・look・feel・sound・taste・smell・keep・stay。SVO を作りやすい動詞：have・know・like・want・make・take・play・open・buy・see。',
    [...why('動詞から見当をつけるには？'), bx(10, 48, 144, 82, 'SVC をつくりやすい\nbe become get\nturn grow look\nfeel sound taste\nsmell keep stay', C.green, FILL.green, 11), bx(166, 48, 144, 82, 'SVO をつくりやすい\nhave know like\nwant make take\nplay open buy see', C.red, FILL.red, 11)],
    '見当をつけてから、イコールで確かめる', MAIN),
  S('❓ My uncle became a pilot. の文型は？ My uncle ＝ a pilot が成り立つので、a pilot は補語（C）です。第2文型です。名詞が続いていても、反射的に目的語と決めないようにします。',
    [...why('My uncle became a pilot. の文型は？'), ...sl(['My uncle', 'became', 'a pilot.'], 54, { h: 34, size: 13 }), lb(160, 104, 'My uncle ＝ a pilot', 14, C.green, 'middle', true), bx(70, 124, 180, 32, '第2文型（SVC）', C.green, FILL.yellow, 14)],
    '名詞でも、イコールなら C', GREEN),
  S('まとめです。主語とうしろの語がイコールなら SVC、イコールでなければ SVO。同じ動詞でも文型は変わります（He got angry.＝SVC、He got a letter.＝SVO）。',
    [...row(['S ＝ うしろ\nSVC', 'S ≠ うしろ\nSVO'], 40, MAIN, 12, 54), lb(160, 118, 'He got angry.　（SVC）', 14, C.green, 'middle', true), lb(160, 142, 'He got a letter.　（SVO）', 14, C.red, 'middle', true)],
    'イコールで確かめる', MAIN),
], 'SVC と SVO の見分け');
SEC['koko_eigo_s055#0'] = 'xf_koko_eigo_s055';

// ── 書きかえの例外：書きかえられない動詞 ──
F['xf_koko_eigo_s059'] = show([
  S('第4文型（SVOO）の書きかえでは、原則 to、作ってやる系は for を使います。He gave me a book. → He gave a book to me.　ところが、書きかえそのものができない動詞があります。',
    [...why('すべての SVOO は書きかえられる？'), ...sl(['He', 'gave', 'me', 'a book.'], 52, { h: 32, size: 13 }), ar(160, 88, 160, 104, C.main), ...sl(['He', 'gave', 'a book', '!to', 'me.'], 108, { h: 32, size: 13 }), lb(160, 160, '書きかえられない動詞もある', 13, C.red, 'middle', true)],
    '書きかえ不可の動詞を見抜く', PURPLE),
  S('書きかえられないのは cost（費用がかかる）、take（時間がかかる）、save（手間を省く）です。意味からは判断できず、動詞ごとに決まっています。',
    [...why('書きかえられない動詞は？'), ...tbl(['動詞', '意味'], [['cost', '〜に…の費用がかかる'], ['take', '〜に…の時間がかかる'], ['save', '〜の手間を省く']], { y0: 56, rh: 32, gap: 10, cols: [RED, MAIN], size: 13 })],
    'cost / take / save', RED),
  S('cost の例です。The bike cost me 30,000 yen.（その自転車は3万円した）。The bike cost 30,000 yen to me. とは書きかえられません。',
    [...why('cost は、どう書きかえる？'), ...sl(['The bike', 'cost', 'me', '30,000 yen.'], 54, { h: 34, size: 12 }), lb(160, 106, '書きかえ不可', 14, C.red, 'middle', true), lb(160, 132, '× The bike cost 30,000 yen to me.', 13, C.red, 'middle')],
    'cost ＝ 書きかえられない', RED),
  S('take の例です。It took me two hours to finish the work.（その仕事に2時間かかった）。It took two hours to me ... とは書きません。save も同じで、This machine saves us a lot of time. は for で書きかえません。',
    [...why('take と save も？'), ...sl(['It', 'took', 'me', 'two hours', 'to finish ...'], 54, { h: 34, size: 11 }), lb(160, 106, '× It took two hours to me ...', 13, C.red, 'middle'), ...sl(['This machine', 'saves', 'us', 'a lot of time.'], 130, { h: 34, size: 11 })],
    'take / save も書きかえ不可', RED),
  S('❓なぜ書きかえられないの？ give は「物が人へ移動する」ので to で言いかえられます。cost や take では、人は「物を受け取る相手」ではなく、費用や時間を負担する人です。移動の意味がないので、to や for で言いかえられません。',
    [...why('なぜ cost / take は書きかえられない？'), bx(10, 48, 144, 36, 'give', C.green, FILL.green, 14), bx(166, 48, 144, 36, 'cost / take', C.red, FILL.red, 14), bx(10, 94, 144, 44, '物 → 人へ移動する\nso to で言いかえ OK', C.green, FILL.green, 11), bx(166, 94, 144, 44, '人は費用・時間を\n負担する人', C.red, FILL.red, 11)],
    '移動の意味がない動詞は書きかえ不可', MAIN),
  S('It takes の形は決まった形として覚えます。It takes ＋ 人 ＋ 時間 ＋ to ＋ 動詞の原形。It takes me twenty minutes to get to school.（学校まで20分かかる）。人を省くこともできます。',
    [...why('It takes は、どんな形？'), ...sl(['It takes', 'me', '20 minutes', 'to get to school.'], 54, { h: 36, size: 11 }), lb(160, 112, '人を省いてもよい', 13, C.blue, 'middle', true), ...sl(['It takes', '20 minutes', 'to get to school.'], 128, { h: 36, size: 11, cols: [BLUE, GREEN, MAIN] })],
    'It takes 人 時間 to 〜 は決まった形', BLUE),
  S('❓テストで「書きかえなさい」と言われたら？ すべての文が書きかえられるとは限りません。cost・take・save が出てきたら「書きかえ不可」と判断します。ask だけは of を使います（ask a question of him）。',
    [...why('書きかえ問題では何に気をつける？'), ...tbl(['', ''], [['原則', 'to（give / show）'], ['作ってやる系', 'for（buy / make）'], ['ask だけ', 'of を使う'], ['cost / take / save', '書きかえ不可']], { y0: 52, rh: 26, gap: 6, cols: [BLUE, GREEN], size: 12 })],
    '書きかえ不可と見抜く力も必要', MAIN),
], '書きかえられない動詞');
SEC['koko_eigo_s059#1'] = 'xf_koko_eigo_s059';
// ── SVOO の注意点：代名詞と語順 ──
F['xf_koko_eigo_s060'] = show([
  S('第4文型（SVOO）は「人 → 物」の順が原則です。He gave me a book.（彼は私に本をくれた）人が代名詞（me）で、物が名詞（a book）のとき、この形がいちばん自然です。',
    [...why('第4文型の基本の語順は？'), ...sl(['He', 'gave', 'me', 'a book.'], 56, { h: 36, size: 14 }), lb(160, 112, '人（me）→ 物（a book）', 14, C.green, 'middle', true), lb(160, 138, 'この形は最も自然。書きかえなくてよい', 12, C.ink, 'middle')],
    '人 → 物 が原則', GREEN),
  S('❓物が代名詞（it・them）のときは？ Give me it. は英語として不自然です。Give it to me.（それを私にください）のように、前置詞を使った形にします。',
    [...why('「それを私にください」は？'), ...sl(['Give', 'me', 'it.'], 54, { h: 34, size: 14, cols: [GREEN, BLUE, RED] }), lb(160, 104, '△ 不自然', 13, C.red, 'middle', true), ...sl(['Give', '!it', 'to', 'me.'], 124, { h: 34, size: 14 })],
    '物が代名詞 → SVO ＋ to / for', GREEN),
  S('❓なぜ Give me it. は不自然なの？ it や them は、すでに話題に出ているものです。そうした軽い語を、文の最後という重い位置に置くと落ち着きません。前置詞を使えば、it が動詞のすぐ後ろに来ます。',
    [...why('なぜ it を文末に置かないの？'), bx(10, 48, 140, 44, '話題に出ている語\n（it / them）', C.gray, FILL.gray, 12), ar(152, 70, 168, 70, C.main), bx(170, 48, 140, 44, '軽い語は\n動詞のすぐ後ろへ', C.green, FILL.green, 12), ...sl(['Give', 'it', 'to', 'me.'], 118, { h: 34, size: 14 })],
    'it は文末に置かない', BLUE),
  S('両方が代名詞のときも同じです。Show it to him.（それを彼に見せる）が自然で、Show him it. は誤りです。',
    [...why('物も人も代名詞のときは？'), ...sl(['Show', 'him', 'it.'], 54, { h: 34, size: 14, cols: [GREEN, BLUE, RED] }), lb(160, 104, '×', 20, C.red, 'middle', true), ...sl(['Show', '!it', 'to', 'him.'], 124, { h: 34, size: 14 })],
    '両方が代名詞 → it to him', GREEN),
  S('目的語の位置には、必ず目的格（もくてきかく）の代名詞を置きます。主格（I・he・she・we・they）は置けません。He gave I a book.（×）→ He gave me a book.（○）',
    [...why('目的語の位置に置く代名詞は？'), ...tbl(['主格（置けない）', '目的格（置ける）'], [['I', 'me'], ['he', 'him'], ['she', 'her'], ['we', 'us'], ['they', 'them']], { y0: 56, rh: 22, gap: 4, cols: [RED, GREEN], size: 13 })],
    '目的語 ＝ 目的格', RED),
  S('疑問文・否定文は、第4文型のままで作れます。Did he give you the ticket?（彼はあなたにチケットをくれましたか）What did he give you?（何をくれたのですか）Who gave you this?（だれがくれたのですか）',
    [...why('疑問文・否定文もそのまま作れる？'), ...tbl(['', ''], [['Did he give you\nthe ticket?', '作り方は同じ（Did）'], ['What did he give you?', '物をたずねる'], ['Who gave you this?', '主語をたずねる']], { y0: 52, rh: 36, gap: 8, cols: [BLUE, GREEN], size: 11 })],
    'do / does / did で作る', BLUE),
  S('❓英作文で迷ったら？ SVO ＋ to / for の形で書くほうが安全です。物が代名詞でも名詞でも使えるので、失点の危険が小さくなります。',
    [...why('英作文で迷ったら、どちらを選ぶ？'), ...sl(['She', 'showed', 'a book', '!to', 'me.'], 56, { h: 36, size: 13 }), lb(160, 114, 'この形は、物が名詞でも代名詞でも使える', 13, C.green, 'middle', true)],
    '迷ったら SVO ＋ to / for', MAIN),
  S('まとめです。物が代名詞なら Give it to me.。人が代名詞・物が名詞なら Give me a book.。目的語は目的格。say は第4文型を作りません（He told me the news.）。',
    [...row(['物が代名詞\nGive it to me.', '人が代名詞\nGive me a book.'], 40, MAIN, 12, 54), lb(160, 118, 'He told me the news.　○', 13, C.green, 'middle', true), lb(160, 142, 'He said me the news.　×', 13, C.red, 'middle', true)],
    '代名詞のときは、語順に注意', MAIN),
], '代名詞のときの語順');
SEC['koko_eigo_s060#0'] = 'xf_koko_eigo_s060';

// ── call / name / make ＋ O ＋ 名詞 ──
F['xf_koko_eigo_s062'] = show([
  S('C が名詞になる第5文型は、「O に名前や呼び名、立場を与える」意味を表します。We call him Ken.（私たちは彼をケンと呼ぶ）、We named the dog Pochi.（犬をポチと名づけた）。',
    [...why('「〜を…と呼ぶ・名づける」は、どう言う？'), ...sl(['We', 'call', 'him', 'Ken.'], 54, { h: 34, size: 14, cols: [BLUE, GREEN, MAIN, PURPLE] }), lb(160, 104, 'O（him）＝ C（Ken）', 13, C.green, 'middle', true), ...sl(['We', 'named', 'the dog', 'Pochi.'], 128, { h: 34, size: 13, cols: [BLUE, GREEN, MAIN, PURPLE] })],
    'call / name ＋ O ＋ C', GREEN),
  S('make は「〜にする」、elect・choose は「〜に選ぶ」です。The victory made him a hero.（その勝利が彼を英雄にした）／ We elected him captain.（彼をキャプテンに選んだ）。役職の名詞には a／the を付けないことが多いです。',
    [...why('make と elect の第5文型は？'), ...tbl(['動詞', '例'], [['make（〜にする）', 'made him a hero'], ['elect（〜に選ぶ）', 'elected him captain'], ['choose（〜に選ぶ）', 'chose her class leader']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 12 })],
    'O を C にする / 選ぶ', BLUE),
  S('❓語順はどうなる？ 必ず「説明される側（O）」が先、「新しい呼び名（C）」があとです。We named the dog Pochi. が正しく、We named Pochi the dog. は「ポチを犬と名づけた」という意味になってしまいます。',
    [...why('O と C の順番は？'), ...sl(['We', 'named', '!the dog', '!Pochi.'], 54, { h: 34, size: 13, cols: [BLUE, GREEN, MAIN, PURPLE] }), lb(160, 102, 'O（犬）→ C（ポチ）', 13, C.green, 'middle', true), ...sl(['We', 'named', 'Pochi', 'the dog.'], 126, { h: 34, size: 13, cols: [GRAY] }), lb(160, 174, '意味が逆になる　×', 13, C.red, 'middle', true)],
    '語順は O → C', GREEN),
  S('❓前置詞は入れるの？ 入れません。日本語の「〜と」「〜に」にあたる語は、英語では現れません。× They named the baby as Mary.　× We call to him Ken.　○ They named the baby Mary.',
    [...why('「メアリーと名づけた」に as は要る？'), ...sl(['They', 'named', 'the baby', '!as', 'Mary.'], 54, { h: 34, size: 12, cols: [BLUE, GREEN, MAIN, RED, PURPLE] }), lb(160, 104, '×', 20, C.red, 'middle', true), ...sl(['They', 'named', 'the baby', 'Mary.'], 124, { h: 34, size: 13, cols: [BLUE, GREEN, MAIN, PURPLE] })],
    '前置詞（to / as）は入れない', RED),
  S('受け身にすると、C だけがうしろに残ります。We call him Ken. → He is called Ken.　They named the baby Mary. → The baby was named Mary.',
    [...why('受け身にすると？'), ...sl(['We', 'call', 'him', 'Ken.'], 52, { h: 32, size: 13, cols: [BLUE, GREEN, MAIN, PURPLE] }), ar(160, 88, 160, 104, C.main), ...sl(['He', 'is called', 'Ken.'], 108, { h: 32, size: 13, cols: [MAIN, GREEN, PURPLE] })],
    '受け身 → C だけが残る', BLUE),
  S('疑問文では、たずねる部分が C なので what を文頭に出します。What do you call this in Japanese?（これを日本語で何と呼びますか）／ What did they name their baby?　答えも同じ形で返します。We call it a sunflower.',
    [...why('呼び名をたずねるときは？'), ...sl(['What', 'do you', 'call', 'this', 'in English?'], 54, { h: 34, size: 12, cols: [PURPLE, BLUE, GREEN, MAIN, GRAY] }), ...sl(['We', 'call', 'it', 'a sunflower.'], 114, { h: 34, size: 12, cols: [BLUE, GREEN, MAIN, PURPLE] })],
    'What do you call ～ ? に We call it ～. で答える', MAIN),
  S('❓as を入れる形はないの？ regard A as B や think of A as B は別の構文です。似た意味の表現でも、call や name には as を使いません。動詞ごとに形が決まっています。',
    [...why('as を使う動詞と、使わない動詞は？'), ...tbl(['as を使わない', 'as を使う'], [['call him Ken', 'regard him as a hero'], ['name the dog Pochi', 'think of him as a friend']], { y0: 56, rh: 36, gap: 12, cols: [GREEN, BLUE], size: 11 })],
    '動詞ごとに形が決まっている', PURPLE),
  S('まとめです。call・name・make・elect ＋ O ＋ C（名詞）。語順は O → C、前置詞は入れない。We named the dog Pochi. They named the baby Mary.',
    [...row(['call\nname', 'O\n（説明される側）', 'C\n（呼び名）'], 40, MAIN, 12, 64), lb(160, 130, 'We called him Ken.', 14, C.green, 'middle', true)],
    '語順 ＝ O → C、前置詞なし', MAIN),
], 'call / name / make ＋ O ＋ 名詞');
SEC['koko_eigo_s062#1'] = 'xf_koko_eigo_s062';

// ── SVOO と SVOC の見分け ──
F['xf_koko_eigo_s064'] = show([
  S('She made him a cake. と They made him the captain. は、単語の並び方がまったく同じです。それでも前者は「彼にケーキを作ってやった」、後者は「彼をキャプテンにした」。決め手は him と後ろの名詞の関係です。',
    [...why('同じ並びなのに、なぜ文型がちがう？'), ...sl(['She', 'made', 'him', 'a cake.'], 52, { h: 32, size: 13 }), lb(160, 98, '彼にケーキを作ってやった', 12, C.green, 'middle', true), ...sl(['They', 'made', 'him', 'the captain.'], 118, { h: 32, size: 13 }), lb(160, 164, '彼をキャプテンにした', 12, C.blue, 'middle', true)],
    '並びは同じ。決め手は「関係」', PURPLE),
  S('見分け方は、2つの名詞のあいだに is を入れてみることです。「He is a cake.」とは言えませんが、「He is the captain.」とは言えます。言えるかどうかで決めます。',
    [...why('見分け方は？'), bx(10, 48, 300, 34, 'O1（him）と O2 のあいだに is を入れて言えるか？', C.purple, FILL.purple, 12), bx(10, 94, 144, 56, '言えない\n→ SVOO（第4文型）', C.green, FILL.green, 13), bx(166, 94, 144, 56, '言える\n→ SVOC（第5文型）', C.blue, FILL.blue, 13)],
    '「O1 is O2」と言えるか', PURPLE),
  S('SVOO の例です。She made him a cake. →「He is a cake.」とは言えない（彼＝ケーキではない）。My father bought me a bike. →「I am a bike.」とは言えない。どちらも第4文型です。',
    [...why('SVOO の例は？'), ...tbl(['文', 'is を入れると'], [['She made him a cake.', 'He is a cake. ×'], ['My father bought\nme a bike.', 'I am a bike. ×']], { y0: 56, rh: 40, gap: 12, cols: [BLUE, RED], size: 12 })],
    'イコールにならない → 第4文型', GREEN),
  S('SVOC の例です。They made him the captain. →「He is the captain.」と言える。We call him Ken. →「He is Ken.」と言える。どちらも第5文型です。',
    [...why('SVOC の例は？'), ...tbl(['文', 'is を入れると'], [['They made him\nthe captain.', 'He is the captain. ○'], ['We call him Ken.', 'He is Ken. ○']], { y0: 56, rh: 40, gap: 12, cols: [BLUE, GREEN], size: 12 })],
    'イコールになる → 第5文型', BLUE),
  S('書きかえでも確認できます。SVOO は前置詞で書きかえられます（She made a cake for him. ○）。SVOC は書きかえられません（× They made the captain for him.）。意味が通らなければ SVOC です。',
    [...why('書きかえられるかでも確かめられる？'), ...sl(['She', 'made', 'a cake', '!for', 'him.'], 52, { h: 32, size: 12 }), lb(160, 98, '書きかえられる → 第4文型', 12, C.green, 'middle', true), ...sl(['They', 'made', 'the captain', '!for', 'him.'], 118, { h: 32, size: 11, cols: [GRAY] }), lb(160, 164, '意味が通らない → 第5文型', 12, C.red, 'middle', true)],
    '書きかえできれば SVOO', MAIN),
  S('❓形容詞が来たら？ 考えるまでもなく SVOC です。The news made me sad.（その知らせは私を悲しませた）の sad は形容詞で、目的語にはなれません。',
    [...why('うしろが形容詞のときは？'), ...sl(['The news', 'made', 'me', '!sad.'], 54, { h: 34, size: 13 }), lb(160, 104, 'me ＝ sad の関係', 14, C.green, 'middle', true), lb(160, 130, '形容詞は目的語になれない → 即 SVOC', 13, C.blue, 'middle', true)],
    '形容詞 → SVOC', GREEN),
  S('make は両方の文型を作ります。My mother made me a cake.（SVOO）／ The news made me sad.（SVOC）／ Hard work made him a great player.（SVOC）。動詞ではなく、うしろの語の関係で判断します。',
    [...why('make はどちらの文型？'), ...tbl(['文', '文型'], [['made me a cake', 'SVOO'], ['made me sad', 'SVOC'], ['made him a great player', 'SVOC']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 12 })],
    '同じ動詞でも、関係で決まる', MAIN),
  S('まとめです。O1 ＝ O2 になるなら SVOC、ならなければ SVOO。SVOO は「人＋物」、SVOC は「O＋その説明」。迷ったら「is を入れて言えるか」を試します。',
    [...row(['O1 is O2\n言える', 'O1 is O2\n言えない'], 40, MAIN, 12, 54), lb(80, 112, 'SVOC', 15, C.blue, 'middle', true), lb(240, 112, 'SVOO', 15, C.green, 'middle', true), lb(160, 148, 'She made him a cake.（SVOO）', 12, C.green, 'middle', true), lb(160, 168, 'They made him the captain.（SVOC）', 12, C.blue, 'middle', true)],
    'まず「is を入れて言えるか」を試す', MAIN),
], 'SVOO と SVOC の見分け');
SEC['koko_eigo_s064#0'] = 'xf_koko_eigo_s064';

// ── SVOC の発展：なぜ make には to が要らず want には要るのか ──
F['xf_koko_eigo_s065'] = show([
  S('「母は私に部屋を掃除させた」は My mother made me clean my room. で、to が入りません。ところが「母は私に掃除してほしい」なら wants me to clean で、to が入ります。❓なぜちがうのでしょう。',
    [...why('make には to が要らず、want には要るのは？'), ...sl(['She', 'made', 'me', '!clean', 'my room.'], 54, { h: 34, size: 13 }), lb(160, 104, 'to なし', 12, C.green, 'middle', true), ...sl(['She', 'wants', 'me', '!to clean', 'my room.'], 124, { h: 34, size: 13 }), lb(160, 174, 'to あり', 12, C.blue, 'middle', true)],
    '動詞によって、to の有無が決まる', PURPLE),
  S('どちらも「私が掃除する」という関係です。O（me）と動詞のあいだに、主語・述語の関係があります。make が強制して「私が掃除する」、want が「私が掃除する」ことを望んでいます。',
    [...why('O と動詞の関係は？'), ...sl(['made', 'me', 'clean'], 54, { h: 34, size: 14, cols: [GREEN, BLUE, MAIN] }), lb(160, 104, 'me が clean する', 14, C.green, 'middle', true), ...sl(['wants', 'me', 'to clean'], 128, { h: 34, size: 14, cols: [GREEN, BLUE, MAIN] }), lb(160, 178, 'me が clean する', 14, C.green, 'middle', true)],
    '「O が〜する」という関係は同じ', BLUE),
  S('❓では、to が要らないのは、どんなときか？ make・let・have（使役動詞）と、see・watch・hear・feel（知覚動詞）です。O の動作を、目の前の出来事としてじかに置くので、to で結ぶ必要がありません。help はどちらも可です。',
    [...why('原形をとるのは、どの動詞？'), bx(10, 48, 144, 70, '使役\nmake  let  have', C.green, FILL.green, 14), bx(166, 48, 144, 70, '知覚\nsee  watch\nhear  feel', C.blue, FILL.blue, 14), lb(160, 138, 'help ＋ O ＋ 原形 / to どちらも可', 13, C.purple, 'middle', true)],
    '原形グループ：使役・知覚', GREEN),
  S('❓to が要るのは？ want・tell・ask・would like など、これからの動作へ向かう動詞です。「O に〜してほしい」「〜するように言う」「〜するよう頼む」は、まだ起きていない動作に向かうので、to でつなぎます。',
    [...why('to をとるのは、どんな動詞？'), ...tbl(['動詞', '例'], [['want', 'want you to come'], ['tell', 'told me to study'], ['ask', 'asked him to open'], ['would like', 'would like you to come']], { y0: 56, rh: 26, gap: 6, cols: [BLUE, GREEN], size: 12 })],
    'to グループ：これから向かう動作', BLUE),
  S('❓受け身にすると、なぜ to が現れるの？ 受け身では「させられて→掃除する」という向きが表に出るので、to で結ぶ必要が生まれるからです。She made me clean the room. → I was made to clean the room.',
    [...why('受け身にすると to が出てくるのは？'), ...sl(['She', 'made', 'me', 'clean', 'the room.'], 52, { h: 32, size: 12 }), ar(160, 88, 160, 104, C.main), ...sl(['I', 'was made', '!to', 'clean', 'the room.'], 108, { h: 32, size: 12 })],
    '受け身では make のあとにも to', RED),
  S('❓want のうしろに that 節は置けるの？ 置けません。× I want that you come.　○ I want you to come. 日本語の「〜してほしいと思う」を that で表そうとしないようにします。',
    [...why('I want that you come. は？'), ...sl(['I', 'want', '!that', 'you come.'], 54, { h: 34, size: 13, cols: [BLUE, GREEN, RED, MAIN] }), lb(160, 104, '×', 20, C.red, 'middle', true), ...sl(['I', 'want', '!you', '!to come.'], 124, { h: 34, size: 13 })],
    'want ＋ O ＋ to 〜', RED),
  S('否定は not を to の前に置きます。My mother told me not to go out.（外出しないように言った）。× made me to clean や × wants me help のような to の有無の誤りも、グループを言えれば防げます。',
    [...why('否定にするときは？'), ...sl(['My mother', 'told', 'me', '!not', 'to go out.'], 54, { h: 34, size: 12 }), lb(160, 104, 'not は to の前', 13, C.green, 'middle', true), ...sl(['made me', '!to', 'clean'], 130, { h: 34, size: 13, cols: [GRAY] }), lb(160, 180, '×　使役動詞には to を付けない', 12, C.red, 'middle', true)],
    '否定は not ＋ to ＋ 原形', GREEN),
  S('まとめです。原形をとるグループは make・let・have（使役）と see・watch・hear・feel（知覚）。help は両方可。それ以外の want・tell・ask は to。受け身では to が現れます。',
    [...row(['make let have\nsee hear feel', 'want tell ask\nwould like'], 40, MAIN, 12, 54), lb(80, 112, '原形', 15, C.green, 'middle', true), lb(240, 112, 'to ＋ 原形', 15, C.blue, 'middle', true), lb(160, 150, 'I was made to clean the room.（受け身は to）', 12, C.red, 'middle', true)],
    'グループで覚え、受け身では to', MAIN),
], '原形不定詞と to 不定詞');
SEC['koko_eigo_s065#2'] = 'xf_koko_eigo_s065';

// ── There is / are の否定文・疑問文 ──
F['xf_koko_eigo_s067'] = show([
  S('「机の上に本がありません」は、be動詞の否定文と同じ作り方です。be動詞のうしろに not を入れます。There is a book on the desk. → There is not a book on the desk.（There isn\'t ～）',
    [...why('There is の否定文は？'), ...sl(['There', 'is', 'a book', 'on the desk.'], 52, { h: 32, size: 12 }), ar(160, 88, 160, 104, C.main), ...sl(['There', 'is', '!not', 'a book', 'on the desk.'], 108, { h: 32, size: 11 })],
    'be動詞のうしろに not', RED),
  S('❓ some はどうなるの？ 肯定文の some は、否定文・疑問文では any に変えます。There are some students in the room. → There are not any students in the room.（There aren\'t any ～）',
    [...why('否定文では some が変わる？'), ...tbl(['肯定文', '否定文'], [['some students', '!not any students']], { y0: 62, rh: 36, cols: [BLUE, RED], size: 13 }), lb(160, 124, 'some → any', 16, C.red, 'middle', true), lb(160, 150, 'There aren\'t any students in the room.', 12, C.ink, 'middle')],
    '否定・疑問では some → any', RED),
  S('「1つもない」は no でも言えます。There aren\'t any chairs in this room. ＝ There are no chairs in this room. ただし、no を使うときは not を使いません。',
    [...why('「1つもない」の別の言い方は？'), ...sl(['There', 'aren\'t', 'any chairs'], 54, { h: 34, size: 13, cols: [BLUE, RED, GREEN] }), lb(160, 102, '＝', 18, C.ink, 'middle', true), ...sl(['There', 'are', '!no chairs'], 120, { h: 34, size: 13, cols: [BLUE, GREEN, GREEN] }), lb(160, 172, 'no と not は一緒に使わない', 12, C.red, 'middle', true)],
    'not … any ＝ no', GREEN),
  S('疑問文は、be動詞を There の前に出します。There is a park near here. → Is there a park near here?（この近くに公園はありますか）。過去なら Was there a shop here before? です。',
    [...why('疑問文は？'), ...sl(['There', 'is', 'a park', 'near here.'], 52, { h: 32, size: 12 }), ar(160, 88, 160, 104, C.main), ...sl(['!Is', 'there', 'a park', 'near here?'], 108, { h: 32, size: 12, cols: [GREEN] })],
    'be動詞を There の前に出す', GREEN),
  S('疑問文では any を使うのがふつうです。Are there any children in the room?　Are there any questions?（質問はありますか）は授業でもよく使われます。',
    [...why('疑問文でも any？'), ...sl(['Are', 'there', '!any', 'children', 'in the room?'], 54, { h: 34, size: 12 }), ...sl(['Are', 'there', '!any', 'questions?'], 112, { h: 34, size: 13 })],
    '疑問文でも any', BLUE),
  S('❓答え方は？ 答えにも there を使います。Is there a park near here? — Yes, there is. / No, there isn\'t. Are there any students? — Yes, there are. / No, there aren\'t. Yes, it is. は誤りです。',
    [...why('Yes, it is. と答えてよい？'), ...tbl(['聞かれ方', '答え方'], [['Is there a park?', 'Yes, there is.'], ['Is there a park?', 'No, there isn\'t.'], ['Are there any students?', 'Yes, there are.']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 12 }), lb(160, 180, 'Yes, it is.　×', 13, C.red, 'middle', true)],
    '答えでも there を使う', RED),
  S('まとめです。否定は be動詞のうしろに not。疑問は be動詞を前に出す。some は any に。答えは Yes, there is. / No, there isn\'t.',
    [...row(['否定\nthere is not', '疑問\nIs there ～?', '答え\nYes, there is.'], 40, MAIN, 12, 64), lb(160, 130, 'some → any', 14, C.red, 'middle', true)],
    'be動詞の文と同じ作り方', MAIN),
], 'There is / are の否定文・疑問文');
SEC['koko_eigo_s067#0'] = 'xf_koko_eigo_s067';
// ── There is / are が使えないとき ──
F['xf_koko_eigo_s068'] = show([
  S('There is / are は、相手がまだ知らないものを話題に出すときの言い方です。「机の上に本があります」と新しく紹介するイメージです。',
    [...why('There is / are は、何をする言い方？'), bx(10, 50, 140, 40, 'まだ相手が\n知らないもの', C.gray, FILL.gray, 13), ar(152, 70, 168, 70, C.main), bx(170, 50, 140, 40, '新しく紹介する', C.green, FILL.green, 14), ...sl(['There', 'is', 'a book', 'on the desk.'], 116, { h: 34, size: 13 })],
    'There is ～ ＝ 新しく紹介する', GREEN),
  S('❓「私のかばんは机の上にあります」を There is my bag on the desk. と言えるでしょうか。言えません。my bag はすでに特定されている（話し手も聞き手も知っている）ものなので、新しく紹介する There 構文には合いません。',
    [...why('There is my bag ... は、なぜ不自然？'), ...sl(['There', 'is', '!my bag', 'on the desk.'], 54, { h: 34, size: 12, cols: [BLUE, GREEN, RED, MAIN] }), lb(160, 104, '×', 20, C.red, 'middle', true), lb(160, 132, 'my bag ＝ すでに特定されたもの', 13, C.red, 'middle', true)],
    '特定のものは、新しく紹介できない', RED),
  S('使えないもの（特定のもの）と、使えるもの（不特定のもの）を整理します。my・your・the・this・人名がつく名詞は特定。a・some・many・three・no がつく名詞は不特定です。',
    [...why('どんな名詞なら使える？'), bx(10, 48, 144, 24, '使えない（特定）', C.red, FILL.red, 13), bx(166, 48, 144, 24, '使える（不特定）', C.green, FILL.green, 13), bx(10, 78, 144, 76, 'my bag\nyour book\nthe pen\nKen\'s bike\nTokyo Tower', C.red, FILL.red, 12), bx(166, 78, 144, 76, 'a book\nsome water\nmany people\nthree cats\nno students', C.green, FILL.green, 12)],
    '特定 ＝ 使えない　不特定 ＝ 使える', MAIN),
  S('❓では、特定のものの場所は、どう言うの？ 「主語 ＋ be動詞 ＋ 場所」の形にします。My bag is on the desk.（私のかばんは机の上にあります）／ The book is on the table.',
    [...why('特定のものの場所は？'), ...sl(['My bag', '!is', 'on the desk.'], 54, { h: 36, size: 14 }), ...sl(['The book', '!is', 'on the table.'], 108, { h: 36, size: 14 }), lb(160, 166, '主語 ＋ be動詞 ＋ 場所', 14, C.green, 'middle', true)],
    '特定のもの → 主語 ＋ be ＋ 場所', GREEN),
  S('どちらも日本語では「〜にあります」と訳されます。だから、何を伝えたいのかを考えて選びます。There is ～ は「〜というものが存在する」と紹介する。「主語 ＋ be動詞 ＋ 場所」は「その物がどこにあるか」を説明する。',
    [...why('同じ「あります」を、どう使い分ける？'), bx(10, 48, 144, 56, 'There is ～\n存在を紹介する', C.green, FILL.green, 13), bx(166, 48, 144, 56, '主語 ＋ be ＋ 場所\n場所を説明する', C.blue, FILL.blue, 13), lb(160, 128, 'どちらも日本語では「あります」', 13, C.ink, 'middle', true)],
    '伝えたいことで、形を選ぶ', PURPLE),
  S('対話で見てみましょう。A: Is there a post office near here?（不特定 → There）　B: Yes. It\'s next to the bank.（すでに話題に出たもの → it）。一度話題に出たあとは、it／they を主語にします。',
    [...why('一度話題に出たあとは？'), bx(10, 48, 300, 34, 'A: Is there a post office near here?', C.blue, FILL.blue, 13), bx(10, 94, 300, 34, 'B: Yes. It\'s next to the bank.', C.green, FILL.green, 13), lb(160, 150, 'post office → it', 14, C.green, 'middle', true)],
    '話題に出たら、it / they', BLUE),
  S('❓時制が変わったら？ 過去は There was / were、未来は There will be、助動詞は There must be のように be の形を変えます。will のうしろは原形なので、There will is ではなく There will be です。',
    [...why('過去・未来・助動詞では？'), ...tbl(['時', '形'], [['過去', 'There was / were ～'], ['未来', 'There will be ～'], ['助動詞', 'There must be ～']], { y0: 56, rh: 30, gap: 8, cols: [BLUE, GREEN], size: 13 }), lb(160, 168, 'There will is a concert.　×', 13, C.red, 'middle', true)],
    '助動詞のうしろは be（原形）', RED),
  S('まとめです。my・your・the・this・人名がつく特定のものには There is / are を使いません（My bag is on the desk.）。a・some・many・no などの不特定のものに使います。',
    [...row(['特定のもの\nmy / the / this', '不特定のもの\na / some / many'], 40, MAIN, 12, 54), lb(80, 112, 'My bag is ...', 13, C.blue, 'middle', true), lb(240, 112, 'There is a bag ...', 13, C.green, 'middle', true)],
    '形で覚える：my the this があれば There は使えない', MAIN),
], 'There is / are が使えないとき');
SEC['koko_eigo_s068#0'] = 'xf_koko_eigo_s068';

export const XF_KEB_FIGURES: Record<string, DiagramFigure> = F;
export const XF_KEB_SECTIONS: Record<string, string> = SEC;
