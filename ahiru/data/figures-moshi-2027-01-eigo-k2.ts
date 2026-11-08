// 月例実力テスト 2027年1月号（高校受験・英語）担当Bの動く図解。キーは問題ID（k26〜k50）。
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
const t = (x: number, y: number, text: string, col: Col | 'ink' = 'ink', size = 12, anchor: 'start' | 'middle' | 'end' = 'middle', bold = false, w = 300): DiagramElement =>
  lb(x, y, text, fit(text, w, size, 0), col === 'ink' ? C.ink : C[col], anchor, bold);

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
    if (l) out.push(t(x + ws[i] / 2, y + h + 14, l, c, 10, 'middle', false, ws[i] + 6));
    x += ws[i] + gap;
  });
  return out;
};
const rowsOf = (rows: Tile[][]): DiagramElement[] => (rows.length === 1 ? tl(40, rows[0]) : rows.flatMap((r, i) => tl(22 + i * 66, r)));
/** 下の帯：大きな一言 */
const bt = (main: string, col: Col = 'green', size = 14): DiagramElement[] => [b(14, 164, 292, 34, main, col, size)];
const sl = (note: string, ...els: (DiagramElement | DiagramElement[])[]) => ({ note, add: fresh(...els.flat()) });

type Spec = {
  scene: string[]; goal: string; clue: string[]; clueJa: string; rules: string[];
  kind: 'choice' | 'build'; opts?: string[]; why?: string[]; ans?: number; units?: Tile[][]; full?: string[];
  band: string; check: string[]; bad: string; good: string; mb: string; mg: string; cap: string;
};
const SC: Col[] = ['blue', 'green', 'purple', 'gray'];
const RC: Col[] = ['blue', 'green', 'red'];
const make = (s: Spec, caption: string) => {
  const choiceRows = (verdict: boolean): DiagramElement[] =>
    (s.opts ?? []).flatMap((o, i) => {
      const y = 10 + i * 38;
      if (!verdict) return [b(14, y, 292, 30, o, 'gray', 12)];
      const ok = i === s.ans;
      const col: Col = ok ? 'green' : 'red';
      return [b(14, y, 166, 30, (ok ? '○ ' : '× ') + o, col, 11), t(188, y + 19, (s.why ?? [])[i], col, 11, 'start', ok, 126)];
    });
  const slide4 = s.kind === 'choice' ? choiceRows(false) : rowsOf(s.units ?? []);
  const slide5 = s.kind === 'choice' ? choiceRows(true) : [b(14, 30, 292, 40, (s.full ?? [])[0], 'green', 14), t(160, 98, (s.full ?? [])[1], 'gray', 12)];
  return show([
    sl(`場面をつかむ：${s.scene.join('／')}。問われているのは「${s.goal}」。`, s.scene.map((x, i) => b(14, 12 + i * 34, 292, 28, x, SC[i % 4], 12)), bt(s.goal, 'gray')),
    sl(`手がかり：${s.clue.join(' ')}（${s.clueJa}）。`, s.clue.map((x, i) => b(14, 18 + i * 40, 292, 34, x, 'blue', 14)), t(160, 24 + s.clue.length * 40 + 14, s.clueJa, 'gray', 12), bt('ここが手がかり', 'blue')),
    sl(`理由：${s.rules.join('、')}。`, s.rules.map((r, i) => b(14, 18 + i * 38, 292, 30, r, RC[i], 13)), bt('ルールをたしかめる', 'gray')),
    sl(s.kind === 'choice' ? '選択肢を1つずつ当てはめて見くらべる。' : '語をまとまりごとに組み立てていく。', slide4, bt(s.kind === 'choice' ? '1つずつ当てはめる' : '語を組み立てる', 'purple')),
    sl(`答え：${s.band.replace(/^答え：/, '')}。`, slide5, bt(s.band, 'green')),
    sl(`確かめ：${s.check.join('、')}。`, s.check.map((x, i) => t(160, 36 + i * 38, x, i === 2 ? 'green' : 'ink', i === 2 ? 13 : 12, 'middle', i === 2)), bt('読み直して確かめる', 'green')),
    sl(`よくあるまちがい：「${s.bad}」ではなく「${s.good}」。${s.mb}ではなく、${s.mg}。`, b(14, 30, 134, 36, s.bad, 'red', 13), a(150, 48, 170, 48, 'main'), b(172, 30, 134, 36, s.good, 'green', 13), t(81, 88, s.mb, 'red', 11, 'middle', false, 134), t(239, 88, s.mg, 'green', 11, 'middle', false, 134), bt('よくあるまちがい', 'red')),
  ], caption);
};

const k26 = make({"scene": ["1月、新年のあいさつの会話", "A: How was your winter vacation?", "B の返事は？（Aは Sounds nice.）"], "goal": "冬休みの感想を聞かれている", "clue": ["How was your winter vacation?"], "clueJa": "冬休みはどうでしたか", "rules": ["How was ～? ＝ 感想をたずねる", "Yes / No では答えない", "あとの Sounds nice. につながる"], "kind": "choice", "opts": ["① 楽しかった", "② Yes, it is.", "③ 元気です", "④ 電車で行く"], "why": ["感想と出来事", "Yes/No は変", "How are you?", "手段の答え"], "ans": 0, "band": "答え：① 感想と出来事", "check": ["「冬休みはどう？」", "「楽しかった。スキーに行った」", "「いいね」と自然につながる"], "bad": "③ 元気です", "good": "① 楽しかった", "mb": "別の質問の答え", "mg": "感想で答える", "cap": "How was ～? は感想で答える"}, "How was ～? は感想で答える");
const k27 = make({"scene": ["入試の1週間前の会話", "A: I'm very nervous.", "B: （　） You have studied hard…"], "goal": "緊張している友人へのひとこと", "clue": ["I'm very nervous.", "You have studied hard."], "clueJa": "緊張している／毎日がんばってきたね", "rules": ["緊張している人には はげます", "あとの文も 前向きな内容", "入試は来週（まだ結果は出ない）"], "kind": "choice", "opts": ["① 家にいなよ", "② どういたしまして", "③ 受かってよかった", "④ 心配ないよ"], "why": ["場面に合わない", "お礼への返事", "結果の前だ", "はげましだ"], "ans": 3, "band": "答え：④ はげます言葉", "check": ["「緊張している」", "「心配ないよ。きっとできる」", "「ありがとう」→ 自然"], "bad": "③ 受かってよかった", "good": "④ 心配ないよ", "mb": "時間が合わない", "mg": "入試の前の言葉", "cap": "前後の文から気持ちの流れを読む"}, "前後の文から気持ちの流れを読む");
const k28 = make({"scene": ["レストランでの注文", "A: Would you like something to drink?", "B の返事は？"], "goal": "飲み物をすすめられた", "clue": ["Would you like something to drink?"], "clueJa": "何か飲み物はいかがですか", "rules": ["Would you like ～? ＝ すすめる", "答えは ほしい物 ＋ please", "Do you like ～? とはちがう"], "kind": "choice", "opts": ["① Yes, I do.", "② おいしかった", "③ ジュースを頼む", "④ どういたしまして"], "why": ["形が合わない", "食後の感想", "飲み物を頼む", "お礼への返事"], "ans": 2, "band": "答え：③ 物の名前 ＋ please", "check": ["「飲み物はいかが？」", "「オレンジジュースをお願い」", "注文が成り立つ"], "bad": "① Yes, I do.", "good": "③ ～, please.", "mb": "好きかの答え", "mg": "ほしい物を言う", "cap": "Would you like ～? には ～, please. で答える"}, "Would you like ～? には ～, please. で答える");
const k29 = make({"scene": ["電車の中で席をたずねる", "A: Is this seat taken?", "Bは あいていると伝えたい"], "goal": "No か Yes か、形も選ぶ", "clue": ["Is this seat taken?"], "clueJa": "この席はふさがっていますか", "rules": ["taken ＝ ふさがっている", "あいている → No, it isn't.", "Is ～? には is / isn't で答える"], "kind": "choice", "opts": ["① Yes, it is.", "② No, it isn't.", "③ No, I don't.", "④ Yes, I do."], "why": ["ふさがっている", "あいている", "do は合わない", "do は合わない"], "ans": 1, "band": "答え：② No, it isn't.", "check": ["「席は ふさがっている？」", "「いいえ。どうぞ座って」", "No ＋ isn't ＋ 内容が合う"], "bad": "① Yes, it is.", "good": "② No, it isn't.", "mb": "意味が逆になる", "mg": "あいていれば No", "cap": "taken は ふさがっている。あいていれば No"}, "taken は ふさがっている。あいていれば No");
const k30 = make({"scene": ["お正月の話をする2人", "Taro: 神社へ行く・1時間待つ", "Taro: お守りを買う／Lisa: ぞうにを作る"], "goal": "本文と合う文を選ぶ", "clue": ["an hour / a lucky charm", "my first time to make it"], "clueJa": "1時間／お守り／初めて作った", "rules": ["数は本文と同じか", "場所・人は同じか", "回数（first time）も確認"], "kind": "choice", "opts": ["① 2時間待った", "② リサも神社へ", "③ お守りを買った", "④ 何度も作った"], "why": ["1時間のはず", "家にいた", "本文と一致", "初めてだった"], "ans": 2, "band": "答え：③ お守りを買った", "check": ["I bought a lucky charm", "for my exam と一致", "ほかは 数・場所・回数がちがう"], "bad": "① two hours", "good": "③ lucky charm", "mb": "数を見まちがう", "mg": "本文の語で照合", "cap": "数・場所・回数を本文と照らす"}, "数・場所・回数を本文と照らす");
const k31 = make({"scene": ["冬の光のまつりのお知らせ", "12/20〜1/10（12/31・1/1は休み）", "大人¥600・中学生¥300・12才未満は無料"], "goal": "お知らせと合う文を選ぶ", "clue": ["Junior high school students ¥300"], "clueJa": "中学生は300円", "rules": ["日付の行：12/31は休み", "注意書き：ひどい雨だけ休み", "駐車場なし → 電車かバス"], "kind": "choice", "opts": ["① 12/31も開く", "② 車で来る", "③ 雨の日は毎回休み", "④ 中学生は¥300"], "why": ["休みと書いてある", "車は不可", "ひどい雨だけ", "料金の行と一致"], "ans": 3, "band": "答え：④ 中学生は¥300", "check": ["Tickets の行を読む", "Junior high ... ¥300", "④ と同じ内容"], "bad": "③ every rainy day", "good": "hard ＝ ひどい雨", "mb": "言いすぎの文", "mg": "条件を正確に", "cap": "お知らせは 該当する行と照らす"}, "お知らせは 該当する行と照らす");
const k32 = make({"scene": ["6人：大人2・学生3・5才1", "入場料：2000＋1800＋0＝3800", "くつ代：300×5＋200＝1700"], "goal": "割引後の合計は？", "clue": ["10% off the total price", "(admission and skate rental)"], "clueJa": "入場料とくつ代の合計から10%引き", "rules": ["3800＋1700＝5500円", "6人以上 → 10%引き（550円）", "5500−550＝4950円"], "kind": "choice", "opts": ["① ¥4,770", "② ¥4,950", "③ ¥5,300", "④ ¥5,500"], "why": ["妹のくつ代なし", "正しい金額", "割引なしで妹分なし", "割引を忘れた"], "ans": 1, "band": "答え：② ¥4,950", "check": ["割引前 5500円", "10%は 550円", "5500−550＝4950円"], "bad": "③ 妹のくつ代なし", "good": "② ¥4,950", "mb": "200円を忘れる", "mg": "全員分を足す", "cap": "人を分けて計算し、最後に10%引く"}, "人を分けて計算し、最後に10%引く");
const k33 = make({"scene": ["ベンから先生へのメール", "水曜日のスピーチ練習に行けない", "理由：ひどいかぜ"], "goal": "メールを書いた目的", "clue": ["I can't come on Wednesday.", "Could we practice on Thursday?"], "clueJa": "水曜は行けない／木曜にできますか", "rules": ["かぜ ＝ 行けない理由", "Could we ～? ＝ お願い（目的）", "instead ＝ かわりに"], "kind": "choice", "opts": ["① 原稿をほめて", "② 薬の場所を聞く", "③ 水曜に出ると伝える", "④ 木曜に変更を願う"], "why": ["書かれていない", "書かれていない", "本文と反対", "お願いと一致"], "ans": 3, "band": "答え：④ 木曜への変更のお願い", "check": ["水曜は行けない", "かわりに木曜に練習したい", "お願いが目的"], "bad": "② 理由に引かれる", "good": "④ お願いが目的", "mb": "かぜは理由だけ", "mg": "Could we ～? を探す", "cap": "メールの目的はお願いの文に出る"}, "メールの目的はお願いの文に出る");
const k34 = make({"scene": ["高校生のボランティアの話", "土曜日に老人ホームで話した", "問い：最初に緊張した理由"], "goal": "最初に緊張した理由", "clue": ["At first, I was nervous", "because I didn't know what to say."], "clueJa": "最初は緊張した／何を言うかわからなかったので", "rules": ["because ＝ 理由が続く", "what to say ＝ 何を言うか", "At first ＝ 最初は"], "kind": "choice", "opts": ["① 話す内容が不明", "② 場所を知らない", "③ しかられた", "④ 土曜に学校"], "why": ["本文と一致", "書かれていない", "書かれていない", "書かれていない"], "ans": 0, "band": "答え：① 何を話すかわからない", "check": ["nervous ＝ 緊張して", "because 以下が理由", "① と同じ内容"], "bad": "後半の文と混ぜる", "good": "At first の文", "mb": "時期をまちがう", "mg": "最初の理由を探す", "cap": "because の後ろが理由"}, "because の後ろが理由");
const k35 = make({"scene": ["本文の要点", "去年の冬（Last winter）に参加", "毎週土曜日に老人ホームへ"], "goal": "本文と合う文を選ぶ", "clue": ["I told her about my club,", "and she listened carefully."], "clueJa": "部活の話をすると、伊藤さんは熱心に聞いた", "rules": ["Last winter ＝ 去年の冬", "Every Saturday ＝ 毎週土曜", "keep joining ＝ これからも続ける"], "kind": "choice", "opts": ["① 去年の夏", "② 毎週日曜", "③ 部活の話を聞く", "④ 高校でやめる"], "why": ["本文は冬", "本文は土曜", "本文と一致", "続けたい"], "ans": 2, "band": "答え：③ 熱心に聞いてくれた", "check": ["listened carefully を確認", "club の話と一致", "他は 季節・曜日・希望が逆"], "bad": "① summer", "good": "③ listened", "mb": "1語のワナ", "mg": "1語ずつ照合", "cap": "1語の入れかえに注意して照らす"}, "1語の入れかえに注意して照らす");
const k36 = make({"scene": ["食品ロスの話", "食べられる食べ物が捨てられる", "これを解決する方法が後に出る"], "goal": "this problem が指すもの", "clue": ["a lot of food is thrown away", "To solve this problem,"], "clueJa": "多くの食べ物が捨てられている／この問題を解決するため", "rules": ["this ＝ 直前の内容を指す", "solve の対象 ＝ 困ったこと", "例は全体の一部"], "kind": "choice", "opts": ["① 野菜が高い", "② パンが売れる", "③ アプリが難しい", "④ 食べ物が捨てられる"], "why": ["書かれていない", "意味が逆", "解決の方法", "問題と一致"], "ans": 3, "band": "答え：④ 食べ物が捨てられること", "check": ["問題 ＝ 食品ロス", "安売り・アプリ ＝ 解決策", "④ が問題の中身"], "bad": "② 一部の例だけ", "good": "④ 全体のこと", "mb": "例を選ぶ", "mg": "まとめを選ぶ", "cap": "this problem は 直前までの内容全体"}, "this problem は 直前までの内容全体");
const k37 = make({"scene": ["食品ロスの本文", "形の変わった野菜は売られにくい", "安く売る店が出てきた"], "goal": "本文と合う文を選ぶ", "clue": ["often not sold", "began to sell such food at lower prices"], "clueJa": "売られないことが多い／安く売る店が出た", "rules": ["often ＝ よく（いつもではない）", "last year ＝ 去年", "Yuna は役に立つと言う"], "kind": "choice", "opts": ["① いつも売られる", "② 2年前から", "③ 安く売る店", "④ 使いにくい"], "why": ["often と反対", "去年からだ", "本文と一致", "役に立つと言う"], "ans": 2, "band": "答え：③ 安く売る店がある", "check": ["began to sell ... lower prices", "such food ＝ 捨てられる食品", "③ と同じ内容"], "bad": "① always", "good": "③ lower prices", "mb": "頻度の語を見落とす", "mg": "1語ずつ照合", "cap": "often と always は意味がちがう"}, "often と always は意味がちがう");
const k38 = make({"scene": ["スマホは学校に必要？の意見文", "前の段落：便利な点", "あとの段落：問題点"], "goal": "前後をつなぐ語を選ぶ", "clue": ["useful ... (A) ... some problems"], "clueJa": "便利 → （　） → 問題がある", "rules": ["前は よい点", "あとは 悪い点（反対）", "反対の内容 → but"], "kind": "choice", "opts": ["① So", "② Because", "③ But", "④ Or"], "why": ["だから ＝ 順接", "理由にならない", "反対をつなぐ", "選ぶ関係"], "ans": 2, "band": "答え：③ But（しかし）", "check": ["便利。But 問題がある", "反対の内容が続く", "自然につながる"], "bad": "① So", "good": "③ But", "mb": "順接にしてしまう", "mg": "反対なら but", "cap": "反対の内容をつなぐのは but"}, "反対の内容をつなぐのは but");
const k39 = make({"scene": ["意見文の構成", "最初：I think ... there should be rules", "最後：ルールを守れば役に立つ"], "goal": "筆者の考えを選ぶ", "clue": ["I think students can bring them,", "but there should be rules."], "clueJa": "持ってきてよい、ただしルールが必要", "rules": ["主張は I think の文", "最後のまとめでも確かめる", "問題点だけで決めない"], "kind": "choice", "opts": ["① 全部禁止", "② ルール付きで可", "③ 自由に使う", "④ 家でも不可"], "why": ["主張と反対", "主張と一致", "ルールが必要", "2時間まで可"], "ans": 1, "band": "答え：② ルール付きで認める", "check": ["最初：持ってきてよい", "最後：ルールを守れば役立つ", "② と同じ内容"], "bad": "① 問題点だけ読む", "good": "② 主張を読む", "mb": "一部だけで判断", "mg": "最初と最後を見る", "cap": "筆者の考えは I think の文と最後"}, "筆者の考えは I think の文と最後");
const k40 = make({"scene": ["意見文の第2段落：便利な点", "辞書アプリ・時刻・災害の連絡", "第3段落：問題点（ここを読む）"], "goal": "問題点は何か", "clue": ["Some students play games during class.", "Others use social media too long at night."], "clueJa": "授業中のゲーム／夜の使いすぎ", "rules": ["problems のあとが問題点", "Some ～. Others ～. ＝ 2つの例", "便利な点とはまぜない"], "kind": "choice", "opts": ["① 電話代と写真", "② 地震の不通", "③ 連絡できない", "④ ゲームと夜ふかし"], "why": ["書かれていない", "便利な点を逆にした", "便利な点を逆にした", "第3段落と一致"], "ans": 3, "band": "答え：④ ゲームと夜の使いすぎ", "check": ["play games during class", "too long at night", "④ の2つと一致"], "bad": "③ よい点を選ぶ", "good": "④ 問題点の段落", "mb": "段落をまぜる", "mg": "段落を分ける", "cap": "問題点は problems のあとの2つの例"}, "問題点は problems のあとの2つの例");
const k41 = make({"scene": ["知りたい内容を、文の中に入れる", "Do you know ～?（骨組み）", "「何時に始まるか」を中に入れる"], "goal": "間接疑問の語順", "clue": ["Do you know ～?"], "clueJa": "～を知っていますか", "rules": ["what time ＝ 何時に", "あとは 主語 ＋ 動詞", "does は使わない（starts）"], "kind": "build", "units": [[["Do you know", "blue", "骨組み"], ["what time", "green", "何時に"]], [["the movie", "purple", "主語"], ["starts?", "gray", "動詞(s)"]]], "full": ["Do you know what time the movie starts?", "その映画は何時に始まるか知っていますか"], "band": "答え：Do you know what time ...", "check": ["8つの語をすべて使った", "what time の後ろ ＝ 主語 ＋ 動詞", "starts に s がある"], "bad": "does the movie start", "good": "the movie starts", "mb": "疑問文の語順", "mg": "ふつうの語順", "cap": "know のあとは 主語 ＋ 動詞 の順"}, "know のあとは 主語 ＋ 動詞 の順");
const k42 = make({"scene": ["弟と私の身長をくらべる", "同じくらい ＝ as ～ as", "くらべる中身は tall"], "goal": "as ～ as の語順", "clue": ["as 〜 as"], "clueJa": "…と同じくらい～", "rules": ["まん中に 形容詞（tall）", "あとの as ＝ 「…と」", "くらべる相手は最後に置く"], "kind": "build", "units": [[["My brother is", "blue", "弟は…です"], ["as tall as", "green", "同じ背の高さ"]], [["me.", "purple", "私と"]]], "full": ["My brother is as tall as me.", "弟は私と同じくらい背が高い"], "band": "答え：My brother is as tall as me.", "check": ["7つの語をすべて使った", "tall が 2つの as の間", "最後に me（私と）"], "bad": "as as tall", "good": "as tall as", "mb": "形容詞が外にある", "mg": "as の間に入れる", "cap": "as ～ as のあいだに 形容詞を入れる"}, "as ～ as のあいだに 形容詞を入れる");
const k43 = make({"scene": ["住んでいる期間をたずねる", "How long ＝ どのくらいの間", "現在完了で「ずっと住んでいる」"], "goal": "現在完了の疑問文の語順", "clue": ["How long have you lived ～?"], "clueJa": "どのくらいの間 住んでいますか", "rules": ["How long ＝ 期間をたずねる", "have ＋ you ＋ lived の順", "in this city ＝ この市に"], "kind": "build", "units": [[["How long", "blue", "どのくらい"], ["have you lived", "green", "住んでいる？"]], [["in this city?", "purple", "この市に"]]], "full": ["How long have you lived in this city?", "この市にどのくらい住んでいますか"], "band": "答え：How long have you lived ...", "check": ["8つの語をすべて使った", "have が you の前", "答えは for / since で言える"], "bad": "How long you have", "good": "How long have you", "mb": "have が後ろ", "mg": "have を前に出す", "cap": "現在完了の疑問文は have ＋ 主語 ＋ 過去分詞"}, "現在完了の疑問文は have ＋ 主語 ＋ 過去分詞");
const k44 = make({"scene": ["寺が建てられた時期を言う", "「建てられた」＝ 受け身", "「約800年前」＝ about 800 years ago"], "goal": "受け身 ＋ 時の表し方", "clue": ["was built", "about 800 years ago"], "clueJa": "建てられた／約800年前", "rules": ["受け身 ＝ was ＋ 過去分詞", "about ＝ 数字の前", "ago ＝ years のうしろ"], "kind": "build", "units": [[["This temple", "blue", "この寺は"], ["was built", "green", "建てられた"]], [["about 800", "purple", "約800"], ["years ago.", "gray", "年前"]]], "full": ["This temple was built about 800 years ago.", "この寺は約800年前に建てられた"], "band": "答え：This temple was built ...", "check": ["8つの語をすべて使った", "was built ＝ 受け身", "about 800 years ago の順"], "bad": "800 years about ago", "good": "about 800 years ago", "mb": "about の位置", "mg": "数字の前に about", "cap": "受け身は was ＋ 過去分詞。年前は years ago"}, "受け身は was ＋ 過去分詞。年前は years ago");
const k45 = make({"scene": ["好きな季節を言う文", "骨組み：Winter is the season", "I like best が season を説明する"], "goal": "名詞のうしろに 主語＋動詞", "clue": ["the season I like best"], "clueJa": "私がいちばん好きな季節", "rules": ["season（説明される名詞）が先", "I like best（主語＋動詞）があと", "best ＝ いちばん（like の程度）"], "kind": "build", "units": [[["Winter is", "blue", "冬は…です"], ["the season", "green", "季節"]], [["I like best.", "purple", "私が一番好きな"]]], "full": ["Winter is the season I like best.", "冬は私がいちばん好きな季節です"], "band": "答え：Winter is the season I like best.", "check": ["7つの語をすべて使った", "season のあとに I like best", "「私が好きな季節」と読める"], "bad": "I like best season", "good": "season I like best", "mb": "順序が逆", "mg": "名詞が先", "cap": "the season I like best は 名詞が先"}, "the season I like best は 名詞が先");
const k46 = make({"scene": ["私は あなたに 来てほしい", "してほしい人は you", "してほしいことは come to my house"], "goal": "「人に～してほしい」の形", "clue": ["want ＋ 人 ＋ to ＋ 原形"], "clueJa": "人に～してほしい", "rules": ["I want you to ～", "to のあとは動詞の原形", "I want to ～ は「私が～したい」"], "kind": "build", "units": [[["I want", "blue", "私はほしい"], ["you", "green", "あなたに"]], [["to come", "purple", "来ること"], ["to my house.", "gray", "私の家へ"]]], "full": ["I want you to come to my house.", "私はあなたに家に来てほしい"], "band": "答え：I want you to come to my house.", "check": ["want ＋ 人 ＋ to ＋ 原形", "come は原形", "「あなたに来てほしい」と読める"], "bad": "I want to you come", "good": "want you to come", "mb": "to の位置", "mg": "人のあとに to", "cap": "want ＋ 人 ＋ to ＋ 原形"}, "want ＋ 人 ＋ to ＋ 原形");
const k47 = make({"scene": ["本を読むのに3日かかった", "かかったのは「時間」", "人は「私」、時間は「3日」"], "goal": "「～するのに…かかる」の形", "clue": ["It takes ＋ 人 ＋ 時間 ＋ to ～"], "clueJa": "人が～するのに時間がかかる", "rules": ["主語は It（人ではない）", "過去だから takes → took", "to のあとは動詞の原形"], "kind": "build", "units": [[["It took", "blue", "かかった"], ["me", "green", "私が"]], [["three days", "purple", "3日"], ["to read this book.", "gray", "本を読むのに"]]], "full": ["It took me three days to read this book.", "この本を読むのに3日かかった"], "band": "答え：It took me three days to ...", "check": ["It took ＋ 人 ＋ 時間", "to read ＝ 読むのに", "過去形 took を使った"], "bad": "I took three days", "good": "It took me three days", "mb": "人が主語", "mg": "主語は It", "cap": "It takes ＋ 人 ＋ 時間 ＋ to ＋ 原形"}, "It takes ＋ 人 ＋ 時間 ＋ to ＋ 原形");
const k48 = make({"scene": ["春休みにしたいこと＋理由", "1文目：したいこと（I want to ～）", "2文目：理由（because ～）"], "goal": "2文・15語以上で書く", "clue": ["I want to ～.", "～ because ～."], "clueJa": "したいこと／理由", "rules": ["I want to ＋ 動詞の原形", "because ＋ 主語 ＋ 動詞", "2文で15語以上"], "kind": "build", "units": [[["I want to visit Okinawa", "blue", "したいこと"], ["in spring vacation.", "green", "いつ"]], [["I want to swim in the sea", "purple", "したいこと②"], ["because I love it.", "gray", "理由"]]], "full": ["I want to visit Okinawa during spring vacation.", "I want to swim in the sea because I love the beach."], "band": "答え：したいこと ＋ 理由の2文", "check": ["want のあとに to がある", "because のあとに 主語 ＋ 動詞", "20語（15語以上）"], "bad": "I want go", "good": "I want to go", "mb": "to を落とす", "mg": "to ＋ 原形", "cap": "したいこと＋理由の2文を、習った形で書く"}, "したいこと＋理由の2文を、習った形で書く");
const k49 = make({"scene": ["4つの文を話の順に並べる", "(B) 誕生日が近い（場面）", "(D) 母が喜んだ（結果）"], "goal": "自然な順序を選ぶ", "clue": ["(C) He did not know what to give her.", "(A) So he decided to make a cake."], "clueJa": "何をあげるか分からない／だからケーキを作る", "rules": ["最初は 場面の説明（B）", "So の前に 原因（C）", "最後は 結果（D）"], "kind": "choice", "opts": ["① C→B→A→D", "② B→A→C→D", "③ B→C→A→D", "④ C→A→B→D"], "why": ["He が先で不明", "So の前が原因なし", "自然な流れ", "He が先で不明"], "ans": 2, "band": "答え：③ B → C → A → D", "check": ["誕生日が近い", "何をあげるか分からない", "だからケーキ → 母が喜ぶ"], "bad": "② A を C の前に", "good": "③ C のあとに A", "mb": "So を見落とす", "mg": "原因 → So", "cap": "So の前に原因、最後に結果"}, "So の前に原因、最後に結果");
const k50 = make({"scene": ["宿題が終わるまでテレビを見ない", "主な文：テレビを見ない（意思）", "until のまとまり：宿題を終える"], "goal": "until を使った文", "clue": ["until I finish my homework"], "clueJa": "宿題が終わるまで", "rules": ["until ＝ ～するまで", "あとは 主語 ＋ 動詞", "未来のことでも 現在形"], "kind": "build", "units": [[["I will not", "blue", "私は～しない"], ["watch TV", "green", "テレビを見る"]], [["until", "purple", "～するまで"], ["I finish my homework.", "gray", "宿題を終える"]]], "full": ["I will not watch TV until I finish my homework.", "宿題を終えるまでテレビを見ない"], "band": "答え：... until I finish my homework.", "check": ["I will not watch TV", "until のあとは現在形", "finish に s や will はない"], "bad": "until I will finish", "good": "until I finish", "mb": "will を入れる", "mg": "現在形にする", "cap": "until のあとは未来でも現在形"}, "until のあとは未来でも現在形");

export const figuresMoshi202701EigoKoko2: Record<string, Figure> = {
  moshi_2027_01_eigo_k26: k26,
  moshi_2027_01_eigo_k27: k27,
  moshi_2027_01_eigo_k28: k28,
  moshi_2027_01_eigo_k29: k29,
  moshi_2027_01_eigo_k30: k30,
  moshi_2027_01_eigo_k31: k31,
  moshi_2027_01_eigo_k32: k32,
  moshi_2027_01_eigo_k33: k33,
  moshi_2027_01_eigo_k34: k34,
  moshi_2027_01_eigo_k35: k35,
  moshi_2027_01_eigo_k36: k36,
  moshi_2027_01_eigo_k37: k37,
  moshi_2027_01_eigo_k38: k38,
  moshi_2027_01_eigo_k39: k39,
  moshi_2027_01_eigo_k40: k40,
  moshi_2027_01_eigo_k41: k41,
  moshi_2027_01_eigo_k42: k42,
  moshi_2027_01_eigo_k43: k43,
  moshi_2027_01_eigo_k44: k44,
  moshi_2027_01_eigo_k45: k45,
  moshi_2027_01_eigo_k46: k46,
  moshi_2027_01_eigo_k47: k47,
  moshi_2027_01_eigo_k48: k48,
  moshi_2027_01_eigo_k49: k49,
  moshi_2027_01_eigo_k50: k50,
};
