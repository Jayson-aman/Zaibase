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
    [...why('possible の反対は、なぜ impossible？'), ...wb([['possible', 'un-', 'unpossible　×'], ['possible', 'im-', '!impossible　○']], { y0: 60, rh: 36, gap: 14, size: 11 })],
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
    [...why('接頭辞を知ると、何が良いの？'), ...wb([['ex-（外へ）', 'port', '!export'], ['im-（中へ）', 'port', '!import']], { y0: 60, rh: 36, gap: 14, size: 11 }), lb(160, 150, '外へ運ぶ ＝ 輸出　中へ運ぶ ＝ 輸入', 13, C.green, 'middle', true)],
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

export const XF_KEB_FIGURES: Record<string, DiagramFigure> = F;
export const XF_KEB_SECTIONS: Record<string, string> = SEC;
