// 本試験対策 2027年2月号（高校受験・英語）担当Bの動く図解。キーは問題ID（k26〜k50）。
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

const k26 = make({"scene": ["駅の忘れ物の窓口での会話", "A: かさを電車に忘れた", "B の質問は？（A は色を答える）"], "goal": "A の答えにつながる質問", "clue": ["It's a blue one with a white flower."], "clueJa": "青くて白い花がついたものです", "rules": ["答えは 色・もよう（見た目）", "見た目をたずねる質問を探す", "What ～ look like? ＝ どんな見た目"], "kind": "choice", "opts": ["① 見た目は？", "② どこで買った？", "③ いくらだった？", "④ だれがくれた？"], "why": ["見た目の答え", "買った場所", "値段の答え", "人の答え"], "ans": 0, "band": "答え：① What does it look like?", "check": ["「かさを忘れました」", "「どんな見た目ですか？」", "「青くて白い花です」→ 自然"], "bad": "like ＝ 好き", "good": "look like ＝ ～に見える", "mb": "意味をとりちがえる", "mg": "決まった形で覚える", "cap": "What ～ look like? は見た目をたずねる"}, "What ～ look like? は見た目をたずねる");
const k27 = make({"scene": ["授業におくれた人との会話", "A: ごめんなさい、おくれました", "B の返事は？（まだ始まったばかり）"], "goal": "あやまられたときの返事", "clue": ["I'm sorry I'm late.", "We have just started."], "clueJa": "おくれてごめんなさい／始まったばかり", "rules": ["I'm sorry ＝ あやまる言葉", "返事は「気にしないで」", "You're welcome は お礼の返事"], "kind": "choice", "opts": ["① 気にしないで", "② お礼の返事", "③ 断る言葉", "④ はじめまして"], "why": ["あやまりの返事", "お礼への返事", "場面に合わない", "初対面の言葉"], "ans": 0, "band": "答え：① That's all right.", "check": ["「おくれてごめん」", "「だいじょうぶ。始まったばかり」", "「ありがとう」→ 自然"], "bad": "You're welcome.", "good": "That's all right.", "mb": "お礼の返事を選ぶ", "mg": "あやまりへの返事", "cap": "あやまられたら That's all right."}, "あやまられたら That's all right.");
const k28 = make({"scene": ["図書館のカウンターでの会話", "A: 何日 借りられますか", "B の返事は？"], "goal": "期間をたずねる質問への返事", "clue": ["How long can I keep these books?"], "clueJa": "どのくらいの間 借りられますか", "rules": ["How long ＝ 期間をたずねる", "答えは for ～（～間）", "How often は回数・How many は数"], "kind": "choice", "opts": ["① 2週間", "② 2冊", "③ 5分前", "④ 月に2回"], "why": ["期間の答え", "数の答え", "過去の時", "回数の答え"], "ans": 0, "band": "答え：① For two weeks.", "check": ["「どのくらい借りられる？」", "「2週間です」", "期間どうしで つながる"], "bad": "Twice a month.", "good": "For two weeks.", "mb": "回数の答えを選ぶ", "mg": "期間の答えを選ぶ", "cap": "How long には 期間（for ～）で答える"}, "How long には 期間（for ～）で答える");
const k29 = make({"scene": ["入試が終わったあとの会話", "A: そのあと何をするの？", "B の返事のあと「長い間会ってない」"], "goal": "予定の答えを選ぶ", "clue": ["What are you going to do after that?", "I haven't seen them for a long time."], "clueJa": "そのあと何をする？／長い間会っていない", "rules": ["be going to ＝ 未来の予定", "them ＝ 返事の中の人たち", "時（未来）をそろえる"], "kind": "choice", "opts": ["① 祖父母に会う予定", "② 去年の夏に訪れた", "③ 今は勉強中", "④ 試験でつかれた"], "why": ["未来 ＋ them に合う", "過去の話だ", "予定ではない", "過去の感想"], "ans": 0, "band": "答え：① I'm going to visit ...", "check": ["「そのあと何をするの？」", "「祖父母に会いに行く」", "「長い間会ってない」→ 自然"], "bad": "I visited ～", "good": "I'm going to visit ～", "mb": "時がずれる", "mg": "未来には未来で", "cap": "質問の時と答えの時をそろえる"}, "質問の時と答えの時をそろえる");
const k30 = make({"scene": ["ケンとサラの電話", "土曜日に科学博物館へ行く", "集合は駅で9時30分／昼食はカフェ"], "goal": "会話と合う文を選ぶ", "clue": ["I have two tickets for the science museum.", "at the station at nine thirty"], "clueJa": "チケットが2枚／駅で9時30分", "rules": ["数（2枚）は合うか", "場所と時刻は同じか", "休みの曜日は月曜日"], "kind": "choice", "opts": ["① 博物館で9時", "② 昼食を持参", "③ チケット2枚", "④ 土曜は休み"], "why": ["駅で9時30分", "持たなくてよい", "会話と一致", "休みは月曜"], "ans": 2, "band": "答え：③ チケットが2枚", "check": ["ケンの発言と照合", "two tickets が一致", "ほかは 場所・時刻・曜日がちがう"], "bad": "① 博物館で9時", "good": "③ two tickets", "mb": "場所と時刻をまちがう", "mg": "本文の語で照合", "cap": "場所・時刻・曜日を会話と照らす"}, "場所・時刻・曜日を会話と照らす");
const k31 = make({"scene": ["図書館の冬の本のセール", "2月11日〜13日／10:00〜16:00", "1冊¥50・10冊¥400・カードで¥50引き"], "goal": "お知らせと合う文", "clue": ["Please bring your own bag."], "clueJa": "自分のふくろを持ってきてください", "rules": ["日付：11〜13日だけ", "10冊で¥400（¥500ではない）", "クレジットカードは不可"], "kind": "choice", "opts": ["① 14日にも買える", "② 10冊で¥500", "③ ふくろを持参", "④ カードで払える"], "why": ["11〜13日だけ", "¥400のはず", "注意書きと一致", "使えない"], "ans": 2, "band": "答え：③ ふくろを持ってくる", "check": ["* の注意書きを読む", "bring your own bag と一致", "ほかは 日付・値段・支払い"], "bad": "② 10冊で¥500", "good": "③ 注意書きと一致", "mb": "値段の行を見落とす", "mg": "書かれた行で確認", "cap": "お知らせは 該当する行と照らす"}, "お知らせは 該当する行と照らす");
const k32 = make({"scene": ["トム：図書館カードあり・12冊", "10冊は¥400／残り2冊は¥50ずつ", "カードで合計から¥50引き"], "goal": "支払う金額", "clue": ["Ten books for ¥400", "¥50 off the total price"], "clueJa": "10冊で¥400／合計から¥50引き", "rules": ["10冊：¥400", "残り2冊：50×2＝¥100", "400＋100−50＝¥450"], "kind": "choice", "opts": ["① ¥400", "② ¥450", "③ ¥500", "④ ¥550"], "why": ["10冊分だけ", "正しい金額", "割引を忘れた", "特価を忘れた"], "ans": 1, "band": "答え：② ¥450", "check": ["特別価格＋残り＝¥500", "カード割引で ¥50 引く", "12×50−100−50＝¥450"], "bad": "③ ¥500", "good": "② ¥450", "mb": "割引を忘れる", "mg": "最後に割引を引く", "cap": "特別価格 → 残り → 割引 の順に計算"}, "特別価格 → 残り → 割引 の順に計算");
const k33 = make({"scene": ["エマからユイへのメール", "件名：節分／宿題のお礼", "2月3日に神社へ行きたい"], "goal": "メールの目的", "clue": ["Will you go to a shrine with me", "on February 3?"], "clueJa": "2月3日にいっしょに神社へ行ってくれる？", "rules": ["最初のお礼 ＝ 本題ではない", "Will you ～? ＝ お願い", "お願いが 目的"], "kind": "choice", "opts": ["① お礼を言う", "② いっしょに行く願い", "③ 豆料理を教える", "④ 豆を買ってもらう"], "why": ["書き出しだけ", "お願いと一致", "書かれていない", "書かれていない"], "ans": 1, "band": "答え：② いっしょに行くお願い", "check": ["お礼は書き出しの話", "Will you ～? がお願い", "② と同じ内容"], "bad": "① お礼を選ぶ", "good": "② お願いが目的", "mb": "書き出しだけ読む", "mg": "最後まで読む", "cap": "目的はお願いの文に出る"}, "目的はお願いの文に出る");
const k34 = make({"scene": ["ミオの作文：制服の交換会", "制服を体育館に持っていった", "問い：持っていった理由"], "goal": "持っていった理由", "clue": ["I have grown taller in the last three years,", "so it was too small for me."], "clueJa": "背がのびたので小さすぎた", "rules": ["so の前 ＝ 原因", "背がのびた → 制服が小さい", "先生の話は あとの出来事"], "kind": "choice", "opts": ["① 新しいのがほしい", "② 小さくなった", "③ 先生にたのまれた", "④ 学校がきらい"], "why": ["書かれていない", "本文と一致", "書かれていない", "書かれていない"], "ans": 1, "band": "答え：② 小さくなったから", "check": ["so の前に理由がある", "too small が一致", "ほかは 書かれていない"], "bad": "③ 先生の話", "good": "② so の前の文", "mb": "出来事の順を混ぜる", "mg": "理由の文を探す", "cap": "理由は so の前にある"}, "理由は so の前にある");
const k35 = make({"scene": ["ミオの作文の第3段落", "前：制服は高い・親がしんぱい", "後：いらない物が役に立つと気づいた"], "goal": "(A) に入る文", "clue": ["many parents are worried about the cost", "(A) I realized that ..."], "clueJa": "親は費用をしんぱい／(A)／気づいた", "rules": ["前は 初めて知る話", "後ろは I realized（気づいた）", "間は「考えたことがなかった」"], "kind": "choice", "opts": ["① 考えたことがない", "② 高くてうれしい", "③ 捨てることにした", "④ 行事にあきた"], "why": ["前後につながる", "前後と合わない", "前後と合わない", "前後と合わない"], "ans": 0, "band": "答え：① 考えたことがなかった", "check": ["前：親は費用をしんぱい", "(A)：考えたことがなかった", "後：だから気づいた → 自然"], "bad": "④ 関係のない気持ち", "good": "① 前後をつなぐ", "mb": "前後を読まない", "mg": "前も後ろも読む", "cap": "空所は 前後の両方でたしかめる"}, "空所は 前後の両方でたしかめる");
const k36 = make({"scene": ["ミオの作文の内容", "体育館・無料・1年生が お礼", "来年はポスターを作る"], "goal": "本文と合う文を選ぶ", "clue": ["a first-year student came to me", "and said, \"Thank you.\""], "clueJa": "1年生が来て「ありがとう」と言った", "rules": ["場所は体育館（gym）", "料金は無料（for free）", "来年はポスター（posters）"], "kind": "choice", "opts": ["① 図書館で開く", "② 少しお金がいる", "③ 1年生がお礼", "④ 来年はビデオ"], "why": ["体育館のはず", "無料のはず", "本文と一致", "ポスターのはず"], "ans": 2, "band": "答え：③ 1年生がお礼を言った", "check": ["本文：Thank you. と言った", "③ と同じ内容", "ほかは 場所・お金・予定がちがう"], "bad": "② お金がいる", "good": "③ \"Thank you.\"", "mb": "free を見落とす", "mg": "本文の語で照合", "cap": "場所・お金・予定を本文と照らす"}, "場所・お金・予定を本文と照らす");
const k37 = make({"scene": ["ミオの作文の4つの段落", "①交換会 ②後輩が受け取る", "③先生の話と気づき ④来年の計画"], "goal": "全体に合うタイトル", "clue": ["something I did not need", "could be very useful for someone else"], "clueJa": "いらない物が、だれかの役に立つ", "rules": ["各段落の話題を一言で", "共通する中心を探す", "一部分の話は 選ばない"], "kind": "choice", "opts": ["① だれかのための制服", "② お気に入りの店", "③ ポスターの作り方", "④ 先生の仕事"], "why": ["全体に合う", "本文にない", "一部分だけ", "本文にない"], "ans": 0, "band": "答え：① だれかのための制服", "check": ["第1〜4段落をまとめる", "全部に 制服を渡す話", "① が全体に合う"], "bad": "③ ポスター", "good": "① 全体の中心", "mb": "一部分で選ぶ", "mg": "全体で選ぶ", "cap": "タイトルは 全体の中心で決める"}, "タイトルは 全体の中心で決める");
const k38 = make({"scene": ["アヤカの作文：手話を学ぶ", "ハナと話したいが、手話を知らない", "問い：どうやって始めたか"], "goal": "学び始めた方法", "clue": ["So I borrowed a book about sign language", "from the library"], "clueJa": "それで図書館から手話の本を借りた", "rules": ["How ＝ 方法をたずねる", "「始めた」の文を探す", "あとの出来事とは別"], "kind": "choice", "opts": ["① ハナに教わる", "② 図書館の本", "③ テレビ番組", "④ 手話クラブ"], "why": ["あとの場面", "本文と一致", "書かれていない", "書かれていない"], "ans": 1, "band": "答え：② 図書館の本を借りた", "check": ["began の文を読む", "borrowed a book と一致", "ほかは 書かれていない"], "bad": "① ハナに教わる", "good": "② 本を借りた", "mb": "あとの場面と混ぜる", "mg": "始めた方法を探す", "cap": "方法は「始めた」の文に出る"}, "方法は「始めた」の文に出る");
const k39 = make({"scene": ["アヤカの作文の内容", "話したくて学び始め、3週間後にあいさつ", "まちがえたが、ハナは笑って教えた"], "goal": "本文と合う文を選ぶ", "clue": ["Then she taught me the sign", "for \"friend.\""], "clueJa": "それから「友だち」の手話を教えてくれた", "rules": ["理由は 話したいから", "あいさつで まちがえた", "ハナは笑って教えた"], "kind": "choice", "opts": ["① 先生に言われた", "② まちがいなし", "③ ハナは笑わない", "④ friend を教えた"], "why": ["自分の気持ち", "まちがえた", "笑った", "本文と一致"], "ans": 3, "band": "答え：④ friend の手話を教えた", "check": ["taught me the sign を確認", "④ と同じ内容", "ほかは 本文と反対"], "bad": "③ 笑わなかった", "good": "④ 本文と同じ", "mb": "not を見落とす", "mg": "1語ずつ照合", "cap": "本文の語を使った反対の文に注意"}, "本文の語を使った反対の文に注意");
const k40 = make({"scene": ["アヤカの作文の最後の段落", "前：大切なことを学んだ", "後：もっと手話を覚えたい"], "goal": "(A) に入る文", "clue": ["I have learned something important.", "(A) I want to learn more signs"], "clueJa": "大切なことを学んだ／(A)／もっと覚えたい", "rules": ["体験：まちがえても受け入れられた", "学んだこと ＝ 相手を分かろうとする心", "あとの文（もっと学ぶ）にもつながる"], "kind": "choice", "opts": ["① 手話は易しい", "② 本が先生より上", "③ まちがえるな", "④ 分かろうとする心"], "why": ["書かれていない", "教訓ではない", "体験と反対", "結論に合う"], "ans": 3, "band": "答え：④ 分かろうとする心", "check": ["体験を思い出す", "分かろうとする心が伝わる", "後ろの文ともつながる"], "bad": "③ まちがえるな", "good": "④ 体験から言える", "mb": "語にひかれる", "mg": "結論と合うか見る", "cap": "空所は 体験から言える結論を入れる"}, "空所は 体験から言える結論を入れる");
const k41 = make({"scene": ["アヤカの作文の第2段落", "Good morning の手話をまちがえた", "ハナが笑って the right way を見せた"], "goal": "the right way が表すもの", "clue": ["I made a mistake.", "Hana showed me the right way."], "clueJa": "まちがえた／ハナが正しい方法を見せた", "rules": ["way ＝ 道 または やり方", "前の文：まちがえた", "正しい手話を見せてくれた"], "kind": "choice", "opts": ["① 正しい手話", "② 図書館への道", "③ ハナの家への道", "④ いちばんよい本"], "why": ["前の文と合う", "場面にない", "場面にない", "ハナは見せない"], "ans": 0, "band": "答え：① 正しい手話", "check": ["まちがえた手話を直した", "way ＝ やり方", "① が前後に合う"], "bad": "② 図書館への道", "good": "① 正しい手話", "mb": "way を道と決める", "mg": "前後で意味を決める", "cap": "way は前後の文で意味を決める"}, "way は前後の文で意味を決める");
const k42 = make({"scene": ["3日間の天気予報（ミドリ市）", "土：朝は雪／日：晴れ／月：夕方から雨", "最低気温：土−2℃・日0℃・月4℃"], "goal": "予報と合う文", "clue": ["Sunday: Sunny all day.", "High: 8°C / Low: 0°C"], "clueJa": "日曜は一日中晴れ／最高8℃・最低0℃", "rules": ["時間帯の語に印をつける", "雪は朝だけ・雨は夕方から", "月曜は土曜より暖かい"], "kind": "choice", "opts": ["① 土曜は一日中雪", "② 日曜の最低は0℃", "③ 月曜の朝は雨", "④ 月曜は土曜より寒い"], "why": ["朝だけ雪", "予報と一致", "夕方から雨", "月曜のほうが暖かい"], "ans": 1, "band": "答え：② 日曜の最低は0℃", "check": ["日曜の行を読む", "Low: 0°C が一致", "ほかは 時間帯・くらべ方がちがう"], "bad": "① all day", "good": "② Low: 0°C", "mb": "時間帯を見落とす", "mg": "語に印をつける", "cap": "予報は 時間帯と気温を照らす"}, "予報は 時間帯と気温を照らす");
const k43 = make({"scene": ["みそ汁を作るリナの話", "(B) 作りたい（場面）", "(D) 入れて味見 → (C) しょっぱい"], "goal": "自然な順序を選ぶ", "clue": ["(C) It was too salty,", "(A) She tasted it again"], "clueJa": "しょっぱい／もう一度味見した", "rules": ["最初は 場面（B）", "味見（D）→ しょっぱい（C）", "again の文（A）が最後"], "kind": "choice", "opts": ["① B→D→C→A", "② B→C→D→A", "③ D→B→C→A", "④ B→D→A→C"], "why": ["自然な流れ", "味見の前に It", "She が先で不明", "again が早すぎる"], "ans": 0, "band": "答え：① B → D → C → A", "check": ["作りたい → 味見", "しょっぱい → 水を足す", "もう一度味見 → にっこり"], "bad": "② C を D の前に", "good": "① D のあとに C", "mb": "味見の前に しょっぱい", "mg": "味見 → 感想の順", "cap": "again と It が順番の手がかり"}, "again と It が順番の手がかり");
const k44 = make({"scene": ["私にとって早起きは大切", "骨組み：It is important", "「人にとって」は for me"], "goal": "It is ... for ～ to ～ の語順", "clue": ["It is important for 人 to ～"], "clueJa": "人にとって～することは大切だ", "rules": ["It ＝ 形だけの主語", "「人にとって」＝ for me", "to のあとは 動詞の原形"], "kind": "build", "units": [[["It is important", "blue", "骨組み"], ["for me", "green", "人にとって"]], [["to get up", "purple", "～すること"], ["early.", "gray", "早く"]]], "full": ["It is important for me to get up early.", "私にとって早起きすることは大切だ"], "band": "答え：It is important for me to ...", "check": ["9つの語をすべて使った", "for me が to の前", "to のあとは get up（原形）"], "bad": "important to for me", "good": "important for me to", "mb": "for と to が逆", "mg": "人 → to ＋ 原形", "cap": "It is ... for 人 to ～ の順に並べる"}, "It is ... for 人 to ～ の順に並べる");
const k45 = make({"scene": ["スープの作り方をたのむ", "骨組み：Please show me", "「作り方」は how to ～"], "goal": "show ＋ 人 ＋ how to ～ の語順", "clue": ["show ＋ 人 ＋ how to ～"], "clueJa": "人に～のしかたを見せる", "rules": ["「人」が先（me）", "how to ＋ 動詞の原形", "make の目的語 ＝ this soup"], "kind": "build", "units": [[["Please show me", "blue", "人に見せて"], ["how to make", "green", "作り方"]], [["this soup.", "purple", "このスープの"]]], "full": ["Please show me how to make this soup.", "このスープの作り方を教えてください"], "band": "答え：Please show me how to ...", "check": ["8つの語をすべて使った", "show のあとは me が先", "how to ＋ make（原形）"], "bad": "show how to make me", "good": "show me how to make", "mb": "人が後ろにある", "mg": "人 → how to ～", "cap": "show ＋ 人 ＋ how to ～ の順にする"}, "show ＋ 人 ＋ how to ～ の順にする");
const k46 = make({"scene": ["映画がおもしろくて2回見た", "原因：とてもおもしろかった", "結果：私は2回見た"], "goal": "so ～ that … の語順", "clue": ["so ＋ 形容詞 ＋ that ＋ 文"], "clueJa": "とても～なので…", "rules": ["so ＋ 形容詞（interesting）", "that のあとは 主語 ＋ 動詞", "twice は最後に置く"], "kind": "build", "units": [[["The movie was", "blue", "主語＋動詞"], ["so interesting", "green", "とても～"]], [["that I saw it", "purple", "結果の文"], ["twice.", "gray", "2回"]]], "full": ["The movie was so interesting that I saw it twice.", "とてもおもしろかったので2回見た"], "band": "答え：... so interesting that ...", "check": ["10個の語をすべて使った", "so と that がセット", "that のあとは I saw it"], "bad": "interesting that", "good": "so interesting that", "mb": "so を落とす", "mg": "so と that をセットに", "cap": "so ～ that … は 必ずセットで使う"}, "so ～ that … は 必ずセットで使う");
const k47 = make({"scene": ["明日は早く来なくてよい", "骨組み：You don't have to", "動詞は原形で続ける"], "goal": "have to の否定の形", "clue": ["don't have to ＋ 原形"], "clueJa": "～しなくてもよい", "rules": ["don't have to ＝ しなくてよい", "must not ＝ してはいけない", "to のあとは 動詞の原形"], "kind": "build", "units": [[["You", "blue", "あなたは"], ["don't have to", "green", "しなくてもよい"]], [["come early", "purple", "早く来る"], ["tomorrow.", "gray", "明日"]]], "full": ["You don't have to come early tomorrow.", "あなたは明日、早く来なくてもよい"], "band": "答え：You don't have to come ...", "check": ["don't have to を使った", "come は原形", "意味は「しなくてもよい」"], "bad": "must not come", "good": "don't have to come", "mb": "禁止になる", "mg": "不必要の意味にする", "cap": "しなくてもよい ＝ don't have to"}, "しなくてもよい ＝ don't have to");
const k48 = make({"scene": ["先週の土曜日からかぜをひいている", "「ずっと」＝ 現在完了", "「～から」＝ since"], "goal": "現在完了（継続）の文", "clue": ["have ＋ 過去分詞 ＋ since ～"], "clueJa": "～からずっと…している", "rules": ["継続は have ＋ 過去分詞", "have a cold → have had", "since のあとは 始まった時"], "kind": "build", "units": [[["I have had", "blue", "現在完了"], ["a cold", "green", "かぜ"]], [["since", "purple", "～から"], ["last Saturday.", "gray", "先週の土曜"]]], "full": ["I have had a cold since last Saturday.", "先週の土曜日からずっとかぜをひいている"], "band": "答え：I have had a cold since ...", "check": ["have ＋ had の形", "since ＋ 始まった時", "「ずっと」の意味になる"], "bad": "have a cold", "good": "have had a cold", "mb": "現在形のまま", "mg": "現在完了にする", "cap": "since には 現在完了を使う"}, "since には 現在完了を使う");
const k49 = make({"scene": ["中学校でいちばん楽しかった行事", "結論 → 具体例 → 理由・気持ち", "3文以上・25語以上"], "goal": "3文・25語以上で書く", "clue": ["I enjoyed ～ the most.", "I was happy because ～."], "clueJa": "いちばん楽しかった／理由はうれしかったから", "rules": ["1文目：結論（I enjoyed ～）", "2文目：したこと（過去形）", "3文目：理由（because ～）"], "kind": "build", "units": [[["I enjoyed ～ the most.", "blue", "結論"], ["We made ～.", "green", "具体例"]], [["I was happy because ～.", "purple", "気持ちと理由"]]], "full": ["I enjoyed the school festival the most.", "Our class made a haunted house. ／ I was happy because ～."], "band": "答え：結論 ＋ 具体例 ＋ 理由", "check": ["行事と理由がある", "3文・30語（25語以上）", "過去形でそろっている"], "bad": "I enjoy / I enjoyed", "good": "全部 過去形", "mb": "時制が混ざる", "mg": "過去形でそろえる", "cap": "結論 → 具体例 → 理由で3文を書く"}, "結論 → 具体例 → 理由で3文を書く");
const k50 = make({"scene": ["店でセーターを交換したい", "客：小さすぎたので交換したい", "店員の (A) のあと：Yes, I have it here."], "goal": "(A) に入る質問", "clue": ["(A) ___", "Yes, I have it here."], "clueJa": "(A)／はい、ここに持っています", "rules": ["返事が Yes ＝ Yes / No の質問", "it ＝ 交換に必要な物（レシート）", "Why・Which・How は Yes で答えない"], "kind": "choice", "opts": ["① レシートはある？", "② なぜ買った？", "③ どの色が好き？", "④ いくら払った？"], "why": ["Yes で答えられる", "理由を聞く質問", "選ぶ質問", "値段の質問"], "ans": 0, "band": "答え：① Do you have the receipt?", "check": ["交換したい → レシートは？", "はい、持っています", "Yes の返事とつながる"], "bad": "④ How much ～?", "good": "① Do you ～?", "mb": "疑問詞の質問を選ぶ", "mg": "Yes / No の質問を選ぶ", "cap": "Yes の返事 ＝ 疑問詞なしの質問"}, "Yes の返事 ＝ 疑問詞なしの質問");

export const figuresHonshiken202702EigoKoko2: Record<string, Figure> = {
  honshiken_2027_02_eigo_k26: k26,
  honshiken_2027_02_eigo_k27: k27,
  honshiken_2027_02_eigo_k28: k28,
  honshiken_2027_02_eigo_k29: k29,
  honshiken_2027_02_eigo_k30: k30,
  honshiken_2027_02_eigo_k31: k31,
  honshiken_2027_02_eigo_k32: k32,
  honshiken_2027_02_eigo_k33: k33,
  honshiken_2027_02_eigo_k34: k34,
  honshiken_2027_02_eigo_k35: k35,
  honshiken_2027_02_eigo_k36: k36,
  honshiken_2027_02_eigo_k37: k37,
  honshiken_2027_02_eigo_k38: k38,
  honshiken_2027_02_eigo_k39: k39,
  honshiken_2027_02_eigo_k40: k40,
  honshiken_2027_02_eigo_k41: k41,
  honshiken_2027_02_eigo_k42: k42,
  honshiken_2027_02_eigo_k43: k43,
  honshiken_2027_02_eigo_k44: k44,
  honshiken_2027_02_eigo_k45: k45,
  honshiken_2027_02_eigo_k46: k46,
  honshiken_2027_02_eigo_k47: k47,
  honshiken_2027_02_eigo_k48: k48,
  honshiken_2027_02_eigo_k49: k49,
  honshiken_2027_02_eigo_k50: k50,
};
