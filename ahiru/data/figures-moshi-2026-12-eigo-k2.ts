// 月例実力テスト 2026年12月号（高校受験・英語）担当Bの動く図解。キーは問題ID（k26〜k50）。
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

const k26 = make({"scene":["靴屋での会話","店員：What size do you wear?","客は どう答える？"],"goal":"サイズを聞かれている","clue":["What size do you wear?"],"clueJa":"どのサイズをはきますか","rules":["What size 〜? ＝ サイズをたずねる","答えは サイズの数字","年齢は How old 〜? で聞く"],"kind":"choice","opts":["① 毎日はいている","② 25歳です","③ 25センチです","④ ねだんが高い"],"why":["いつか、の答え","年齢の答え","サイズの答え","値段の話"],"ans":2,"band":"答え：③ 25センチ","check":["店員「サイズは？」","客「25センチをお願いします」","質問と答えがつながる"],"bad":"② 年齢を答える","good":"③ サイズを答える","mb":"数字だけで選ぶ","mg":"何を聞かれたか","cap":"What size ... ? はサイズをたずねる"}, "What size ... ? はサイズをたずねる");
const k27 = make({"scene":["アヤが 電話をかける","May I speak to Mr. Sato?","B の返事は？ → あとで Yes, please."],"goal":"B の返事を選ぶ","clue":["A: Yes, please.","Could you ask him to call me back?"],"clueJa":"はい、お願いします。折り返し電話を…","rules":["Yes, please. ＝ 申し出への返事","だから B は申し出をした","不在なら 伝言を申し出る"],"kind":"choice","opts":["① はい、どうぞ","② 外出中。伝言は？","③ はじめまして","④ どうぞ入って"],"why":["電話に合わない","申し出になる","あいさつが違う","電話で不自然"],"ans":1,"band":"答え：② 伝言を申し出る","check":["「外出中です。伝言は？」","「はい、お願いします」","折り返しをたのむ → 自然"],"bad":"① Yes, you can.","good":"② 伝言の申し出","mb":"つながらない","mg":"Yes, please. に合う","cap":"あとの Yes, please. が手がかり"}, "あとの Yes, please. が手がかり");
const k28 = make({"scene":["A：郵便局への行き方は？","B：2ブロック直進して左","You can't miss it.","A は 最後に何と言う？"],"goal":"A の最後の一言","clue":["You can't miss it."],"clueJa":"見逃すことはありません（すぐ分かる）","rules":["道を教えてもらった ＝ お礼","「すぐ見つけられそう」と受ける","教える言葉は B の役目"],"kind":"choice","opts":["① お礼＋見つけられる","② 気の毒です","③ 長い道のりだった","④ ここで左へ"],"why":["お礼で自然","返事がずれる","今の場面に不適","教える側の言葉"],"ans":0,"band":"答え：① お礼を言う","check":["B：道を教える","A：ありがとう、見つけられそう","会話が自然に終わる"],"bad":"④ 教える側の言葉","good":"① お礼を言う","mb":"言う人を取りちがえ","mg":"教わった側の言葉","cap":"道を教えてもらったらお礼を言う"}, "道を教えてもらったらお礼を言う");
const k29 = make({"scene":["部屋が 暑い","A：窓を開けてもいい？","Would you mind if I 〜?","A のお礼：Thanks."],"goal":"B の返事を選ぶ","clue":["Thanks. That feels much better."],"clueJa":"ありがとう。ずっと快適だ","rules":["Would you mind 〜? ＝ 気にしますか？","OK なら No, not at all.","Yes は「気になる」＝ だめ"],"kind":"choice","opts":["① かまいません","② とても気になる","③ どういたしまして","④ できません"],"why":["許可になる","断りになる","お礼の返事","断りになる"],"ans":0,"band":"答え：① No, not at all.","check":["「窓を開けても？」","「かまいませんよ」","「ありがとう」→ つながる"],"bad":"② Yes ＝ 気になる","good":"① No ＝ かまわない","mb":"Yes で許可と思う","mg":"許可するときは No","cap":"Would you mind ...? には No で許可"}, "Would you mind ...? には No で許可");
const k30 = make({"scene":["ミカは つかれて見える","A：What's wrong?","B：（　）","A：Then 早く寝たら"],"goal":"つかれた理由を選ぶ","clue":["Then you should go to bed early."],"clueJa":"それなら早く寝たほうがいい","rules":["Then ＝ 直前の話を受ける","早く寝る助言 ＝ 寝不足が理由","理由になる答えを選ぶ"],"kind":"choice","opts":["① 会えてうれしい","② 早く寝るのが好き","③ 昨夜おそくまで宿題","④ ベッドが大きい"],"why":["理由でない","つかれと矛盾","寝不足の理由","理由でない"],"ans":2,"band":"答え：③ 昨夜おそくまで起きた","check":["「どうしたの？」","「昨夜おそくまで宿題」","「それなら早く寝たら」"],"bad":"② 早く寝るのが好き","good":"③ 夜ふかしした","mb":"理由にならない","mg":"助言につながる","cap":"Then が手がかり。つかれの理由を選ぶ"}, "Then が手がかり。つかれの理由を選ぶ");
const k31 = make({"scene":["ユイのクラス：学園祭で喫茶店","売るもの：pancakes と juice","台所の手伝い：Ken にたのむ","トム：ポスター3枚を金曜日に"],"goal":"本文と合う文を選ぶ","clue":["We will sell pancakes and juice."],"clueJa":"パンケーキとジュースを売ります","rules":["台所は Ken（トムは料理が苦手）","ポスターは three（3枚）","持ってくる日は Friday（金曜日）"],"kind":"choice","opts":["① トムが台所を手伝う","② パンケーキとジュース","③ ポスター5枚","④ 土曜日に持ってくる"],"why":["Ken が手伝う","本文と一致","3枚のまちがい","金曜日が正しい"],"ans":1,"band":"答え：② 売るのはパンケーキとジュース","check":["本文：We will sell pancakes and juice.","② と完全に一致","ほかは 人・数・曜日がちがう"],"bad":"③ five posters","good":"② pancakes and juice","mb":"数を確かめない","mg":"本文と照らす","cap":"内容一致は1つずつ本文と照らす"}, "内容一致は1つずつ本文と照らす");
const k32 = make({"scene":["持っているお金：3,000円","スカーフ：2,400円","カード：500円（バッグは買わない）","買うのは スカーフとカード"],"goal":"残りのお金を求める","clue":["Yes! I'll buy both of them."],"clueJa":"両方買います（スカーフとカード）","rules":["合計 ＝ 2,400 ＋ 500 ＝ 2,900","残り ＝ 3,000 − 2,900","残り ＝ 100円"],"kind":"choice","opts":["① 100円","② 600円","③ 500円","④ 0円"],"why":["3,000−2,900","カードを忘れた","カードだけの値段","ぴったりではない"],"ans":0,"band":"答え：① 100円","check":["100 ＋ 2,900 ＝ 3,000","もとのお金と一致","買った物：スカーフとカード"],"bad":"② 600円（引き忘れ）","good":"① 100円","mb":"スカーフだけ引く","mg":"2つとも引く","cap":"both of them ＝ スカーフとカード"}, "both of them ＝ スカーフとカード");
const k33 = make({"scene":["Summer English Camp","期間：8月5〜7日（3日間）","料金：12,000円（昼食・夕食は無料）","申しこみ：7月10日までにメール"],"goal":"お知らせと合う文を選ぶ","clue":["Send an e-mail to the camp office","by July 10."],"clueJa":"7月10日までに事務局へメール","rules":["料金：昼食・夕食は free（無料）","期間：3 days（1週間ではない）","先生は a teacher from Canada"],"kind":"choice","opts":["① 7/10までにメール","② 食事代は別に必要","③ 1週間のキャンプ","④ アメリカの先生"],"why":["本文と一致","食事は無料","3日間が正しい","カナダの先生"],"ans":0,"band":"答え：① 7月10日までにメール","check":["How to join と一致","②③④ は 料金・日数・国名がちがう","細かい点まで確認した"],"bad":"③ one week","good":"① メールで申しこみ","mb":"日数を見落とす","mg":"項目ごとに照合","cap":"お知らせは項目ごとに照合する"}, "お知らせは項目ごとに照合する");
const k34 = make({"scene":["サラ → ユキ へのメール","題名：Change of our plan","土曜日は行けない（弟が高熱）","来週の日曜日はどう？"],"goal":"メールの目的を選ぶ","clue":["Can we go there next Sunday instead?"],"clueJa":"代わりに来週の日曜日に行けますか","rules":["題名 ＝ 予定の変更","行けない理由 ＝ 弟が高熱","お願い ＝ 日にちを変えたい"],"kind":"choice","opts":["① 家に来てほしい","② 自分が病気で寝る","③ 予定の日を変えたい","④ 新しい博物館へ誘う"],"why":["書いていない","病気は弟","題名・提案と一致","書いていない"],"ans":2,"band":"答え：③ 予定の日を変える","check":["題名：Change of our plan","提案：next Sunday instead","両方と合う"],"bad":"② サラが病気","good":"③ 日にちを変える","mb":"病気の人を取りちがえ","mg":"題名と提案で決める","cap":"メールの目的は題名と提案で分かる"}, "メールの目的は題名と提案で分かる");
const k35 = make({"scene":["駅 → 博物館：25分かかる","A：9:10発 → 9:35着","B：9:40発 → 10:05着","C：10:10発 → 10:35着"],"goal":"10:30までに着く最後のバス","clue":["Kenta wants to arrive","at City Museum by 10:30."],"clueJa":"10時30分までに着きたい（着く時刻で見る）","rules":["A：9:35着 → 間に合う","B：10:05着 → 間に合う","C：10:35着 → 5分おそい"],"kind":"choice","opts":["① 9:10発","② 9:40発","③ 10:10発","④ 10:40発"],"why":["間に合うが早い","いちばん遅い◎","10:35着で遅れる","11:05着で遅れる"],"ans":1,"band":"答え：② 9:40発","check":["9:40 ＋ 25分 ＝ 10:05着","C：10:10 ＋ 25分 ＝ 10:35着","10:30 に間に合うのは B まで"],"bad":"③ 10:10発","good":"② 9:40発","mb":"出発時刻で選ぶ","mg":"着く時刻で選ぶ","cap":"到着時刻で判断する"}, "到着時刻で判断する");
const k36 = make({"scene":["30人のクラスのアンケート","サッカー9・バスケ7","テニス6・野球5","水泳3"],"goal":"表と合う文を選ぶ","clue":["Swimming: 3 students"],"clueJa":"水泳：3人（いちばん少ない）","rules":["① 野球5人 ＜ テニス6人","② バスケ7人 ＜ 6＋5＝11人","④ 30人の半分は15人（サッカー9人）"],"kind":"choice","opts":["① 野球＞テニス","② バスケ＞テニス＋野球","③ 水泳が最少で3人","④ 半分がサッカー"],"why":["野球は5人で少ない","7人＜11人","表と一致","9人は半分でない"],"ans":2,"band":"答え：③ 水泳が最少で3人","check":["水泳は3人で最も少ない","least popular と一致","3人が好き、も一致"],"bad":"① 前半だけ見て選ぶ","good":"③ 両方を確かめる","mb":"前半だけ正しい","mg":"前後とも確かめる","cap":"数を計算して1つずつ確かめる"}, "数を計算して1つずつ確かめる");
const k37 = make({"scene":["春：学校の菜園で野菜づくり","はじめは仕事がいやだった","水やりは 学校の前に","夏：トマトを文化祭で売った"],"goal":"本文と合う文を選ぶ","clue":["All of them were sold in one hour."],"clueJa":"全部（トマト）が1時間で売れた","rules":["① At first ＝ はじめはきらい","③ before school ＝ 学校の前","④ 来年も育てると決めた"],"kind":"choice","opts":["① はじめから好き","② トマトが全部売れた","③ 放課後に水やり","④ 来年はやめる"],"why":["はじめはきらい","本文と一致","学校の前が正しい","来年もやる"],"ans":1,"band":"答え：② トマトは全部売れた","check":["All of them were sold.","② と一致","ほかは 時や意志が反対"],"bad":"③ after school","good":"② sold all of them","mb":"before と after","mg":"時の言葉を照合","cap":"時や数量の言葉を本文と照らす"}, "時や数量の言葉を本文と照らす");
const k38 = make({"scene":["女の人：トマトがとても甘い！","ハルカは とてもうれしかった","だから 来年もやると決めた","理由は何？"],"goal":"決めた理由を選ぶ","clue":["Haruka was so happy that she decided","to grow vegetables again next year."],"clueJa":"とてもうれしかったので、来年もやると決めた","rules":["so happy that 〜 ＝ うれしいので〜","うれしい原因 ＝ 女の人の言葉","理由は直前に書かれている"],"kind":"choice","opts":["① 先生に言われた","② 甘いと言われてうれしい","③ 仕事が楽だった","④ もっと売りたい"],"why":["書いていない","本文と一致","hard だった","書いていない"],"ans":1,"band":"答え：② うれしかったから","check":["甘いと言われて うれしい","だから 来年もやる","本文の流れと一致"],"bad":"③ 仕事が楽だった","good":"② うれしかった","mb":"本文とあべこべ","mg":"so happy that の理由","cap":"so 〜 that ... の「〜」が理由"}, "so 〜 that ... の「〜」が理由");
const k39 = make({"scene":["雨の午後、自転車で塾へ","チェーンがはずれて進めない","(A) ← ここに入る文","老人が通りかかって立ち止まる"],"goal":"(A) に入る文を選ぶ","clue":["He was worried ...","An old man ... stopped."],"clueJa":"心配だった → 老人が立ち止まった","rules":["前：進めない・心配","後ろ：老人が通りかかる","(A) はまだ困っている文"],"kind":"choice","opts":["① 木の下で途方にくれた","② 簡単に直して進んだ","③ 時間があってうれしい","④ 新しい自転車を買った"],"why":["前後につながる","進めないと反対","心配と反対","老人の話と無関係"],"ans":0,"band":"答え：① 木の下で途方にくれた","check":["心配だった","木の下でどうしよう","老人が通りかかる"],"bad":"② すぐ直した","good":"① まだ困っている","mb":"前だけ見て選ぶ","mg":"前後をつなげる","cap":"空所は前後の両方を読む"}, "空所は前後の両方を読む");
const k40 = make({"scene":["老人はチェーンを直した","手はよごれたが ほほえんだ","老人の言葉に理由がある","So の前後を分ける"],"goal":"助けた理由を選ぶ","clue":["I was helped by many people","when I was young. So I want to help ..."],"clueJa":"若いころ助けられた。だから今、助けたい","rules":["So の前 ＝ 理由","若いころ たくさんの人に助けられた","So の後ろ ＝ 今 助けたい"],"kind":"choice","opts":["① 同じ塾へ行く","② 若いころ助けられた","③ ケンの父を知る","④ 自転車屋の主人"],"why":["書いていない","本文と一致","書いていない","書いていない"],"ans":1,"band":"答え：② 若いころ助けられた","check":["老人自身の言葉と一致","So の前が理由","ほかは 本文にない"],"bad":"④ 自転車屋の主人","good":"② 本人の言葉","mb":"想像で選ぶ","mg":"本文の言葉で選ぶ","cap":"理由は本人の言葉と So の前"}, "理由は本人の言葉と So の前");
const k41 = make({"scene":["オーストラリアの友だち エマ","最初：英語のメールは1時間","エマ：もっと書いて！","今：20分で書ける"],"goal":"全体の題名を選ぶ","clue":["Your English is getting better."],"clueJa":"あなたの英語はよくなっています","rules":["中心 ＝ エマとのメール","結果 ＝ 英語の力がのびた","題名は全体にあてはまる"],"kind":"choice","opts":["① 旅行（最後だけ）","② 友だちが英語を助ける","③ 辞書の使い方","④ 世界のクリスマス"],"why":["一部分の話","全体を表す","一部分の話","例の1つだけ"],"ans":1,"band":"答え：② 新しい友だちが助ける","check":["友だち ＝ エマ","英語 ＝ 上達の話","最初から最後まで当てはまる"],"bad":"① 旅行の話","good":"② 全体の中心","mb":"最後の話だけ見る","mg":"全体で決める","cap":"題名は全体の中心で決める"}, "題名は全体の中心で決める");
const k42 = make({"scene":["はじめ：メール1通に an hour","1時間 ＝ 60分","今：twenty minutes ＝ 20分","何分の1になった？"],"goal":"20分は60分の何分の1？","clue":["one e-mail took me an hour.","in twenty minutes."],"clueJa":"1時間かかった → 今は20分","rules":["1時間 ＝ 60分（単位をそろえる）","20 ÷ 60 ＝ 1/3","答えは 3分の1"],"kind":"choice","opts":["① 2分の1","② 3分の1","③ 4分の1","④ 5分の1"],"why":["30分になる","20分になる","15分になる","12分になる"],"ans":1,"band":"答え：② 3分の1","check":["20 × 3 ＝ 60","60分 ＝ 1時間","もとの時間と一致"],"bad":"1 と 20 を比べる","good":"60分 と 20分","mb":"単位をそろえない","mg":"分にそろえる","cap":"単位をそろえて何分の1かを求める"}, "単位をそろえて何分の1かを求める");
const k43 = make({"scene":["B：母にケーキを作りたい","A：So 材料を買った","D：40分焼いて いちごをのせた","C：母が喜んだ"],"goal":"自然な順に並べる","clue":["(A) So she bought some flour ..."],"clueJa":"So ＝ だから（前に理由が必要）","rules":["始まり ＝ B（作りたい）","So の A は B の次","時間順：買う → 焼く → 喜ぶ"],"kind":"choice","opts":["① B → A → D → C","② A → B → D → C","③ B → D → A → C","④ B → A → C → D"],"why":["自然な順","So が最初になる","焼く前に買う","喜ぶのが早い"],"ans":0,"band":"答え：① B → A → D → C","check":["作りたい → だから買った","焼いて いちごをのせた","母が喜んでお礼を言った"],"bad":"② So から始める","good":"① B から始める","mb":"So が最初","mg":"始まりの文から","cap":"So は前の文を受ける。最初に置けない"}, "So は前の文を受ける。最初に置けない");
const k44 = make({"scene":["「どんな種類のスポーツが好き？」","並べる語は 7つ","文頭は What","疑問文にする"],"goal":"7語を正しい順に並べる","clue":["What kind of sport"],"clueJa":"どんな種類のスポーツ（ひとまとまり）","rules":["What kind of sport ＝ まとまり","do you like ＝ 疑問文の語順","文末に ? をつける"],"kind":"build","units":[[["What kind of sport","blue","どんな種類のスポーツ"],["do","red","疑問"],["you","green","あなたは"],["like?","purple","好きか"]]],"full":["What kind of sport do you like?","どんな種類のスポーツが好きですか"],"band":"答え：What kind of sport do you like?","check":["7つの語を全部使った","疑問文の語順になっている","意味も通る"],"bad":"you do like","good":"do you like","mb":"語順がちがう","mg":"do が you の前","cap":"疑問詞のまとまり ＋ 疑問文の語順"}, "疑問詞のまとまり ＋ 疑問文の語順");
const k45 = make({"scene":["「どのくらい英語を勉強している？」","並べる語は 6つ","文頭は How","現在完了の疑問文"],"goal":"6語を正しい順に並べる","clue":["How long"],"clueJa":"どのくらい（期間）","rules":["How long ＝ 期間をたずねる","has ＋ she ＋ studied（現在完了）","English は最後"],"kind":"build","units":[[["How long","blue","どのくらい"],["has","red","疑問"],["she","green","彼女は"]],[["studied","purple","過去分詞"],["English?","gray","英語を"]]],"full":["How long has she studied English?","彼女はどのくらい英語を勉強していますか"],"band":"答え：How long has she studied English?","check":["6つの語を全部使った","has が she の前にある","意味も通る"],"bad":"she has studied","good":"has she studied","mb":"has が後ろにある","mg":"has を前に出す","cap":"How long ＋ has ＋ 主語 ＋ 過去分詞"}, "How long ＋ has ＋ 主語 ＋ 過去分詞");
const k46 = make({"scene":["「兄に 宿題を手伝うようたのんだ」","並べる語は 9つ","ask ＋ 人 ＋ to ＋ 原形","help ＋ 人 ＋ with 〜"],"goal":"9語を正しい順に並べる","clue":["ask ＋ 人 ＋ to ＋ 動詞"],"clueJa":"人に〜してくれるようにたのむ","rules":["I asked ＝ 私はたのんだ","my brother ＝ たのむ相手（人）","to help me with my homework"],"kind":"build","units":[[["I asked","blue","私はたのんだ"],["my brother","green","兄に"]],[["to help me","red","手伝うように"],["with my homework.","purple","宿題を"]]],"full":["I asked my brother to help me with my homework.","兄に宿題を手伝うようたのんだ"],"band":"答え：I asked my brother to help me with my homework.","check":["9つの語を全部使った","ask の次に人、そのあとに to","意味も通る"],"bad":"asked to my brother","good":"asked my brother to","mb":"人の前に to","mg":"人 → to の順","cap":"ask ＋ 人 ＋ to ＋ 動詞の原形"}, "ask ＋ 人 ＋ to ＋ 動詞の原形");
const k47 = make({"scene":["「窓を開けてもいいですか」","許可を求める文","使う語：May","動詞は 原形で"],"goal":"May を使って英語にする","clue":["May I ＋ 動詞の原形?"],"clueJa":"〜してもいいですか","rules":["May I 〜? ＝ 許可を求める","あとの動詞は 原形（open）","窓 ＝ the window"],"kind":"build","units":[[["May I","blue","〜してもいい？"],["open","red","原形"],["the window?","green","窓を"]]],"full":["May I open the window?","窓を開けてもいいですか"],"band":"答え：May I open the window?","check":["May ＋ I ＋ 原形","「窓を開けてもいい？」と読める","文末は ?"],"bad":"May I opening","good":"May I open","mb":"ing 形にする","mg":"原形にする","cap":"May I ＋ 動詞の原形"}, "May I ＋ 動詞の原形");
const k48 = make({"scene":["「この映画を3回見たことがある」","経験 ＝ 現在完了","使う動詞：see","回数：three times"],"goal":"see を使って英語にする","clue":["見たことがある ＝ 経験"],"clueJa":"現在完了（have ＋ 過去分詞）を使う","rules":["I have ＋ 過去分詞","see − saw − seen","回数は three times（文の最後）"],"kind":"build","units":[[["I have","blue","私は（経験）"],["seen","red","過去分詞"]],[["this movie","green","この映画を"],["three times.","purple","3回"]]],"full":["I have seen this movie three times.","この映画を3回見たことがある"],"band":"答え：I have seen this movie three times.","check":["have ＋ seen の形","this movie ＋ three times","意味も通る"],"bad":"I have saw","good":"I have seen","mb":"過去形を使う","mg":"過去分詞を使う","cap":"経験は have ＋ 過去分詞で表す"}, "経験は have ＋ 過去分詞で表す");
const k49 = make({"scene":["A：かさが見つからない","B：教室に置いてきたと思う","並べる語は 7つ","I think ＋ 文"],"goal":"7語を正しい順に並べる","clue":["I think ＋ 主語 ＋ 動詞"],"clueJa":"〜だと思う（あとに文が続く）","rules":["I think ＝ 私は思う","you left it ＝ あなたは置いた","in the classroom ＝ 教室に"],"kind":"build","units":[[["I think","blue","私は思う"],["you left it","green","あなたが置いた"]],[["in the classroom.","purple","教室に"]]],"full":["I think you left it in the classroom.","教室に置いてきたと思うよ"],"band":"答え：I think you left it in the classroom.","check":["「かさがない」→「教室に置いたと思う」","7つの語を全部使った","主語 ＋ 動詞の順"],"bad":"left you it","good":"you left it","mb":"動詞が先","mg":"主語 → 動詞","cap":"I think のあとも 主語 ＋ 動詞"}, "I think のあとも 主語 ＋ 動詞");
const k50 = make({"scene":["中3の旅行先を投票で決めた","京都：Eighty ＝ 80票","広島：Sixty ＝ 60票","長崎：Forty ＝ 40票"],"goal":"数と合う文を選ぶ","clue":["Eighty ... Sixty ... Forty ..."],"clueJa":"80票・60票・40票","rules":["合計 ＝ 80 ＋ 60 ＋ 40 ＝ 180","京都80 ＜ 60＋40＝100","決まったのは京都"],"kind":"choice","opts":["① 長崎＞広島","② 京都＞他の2つの合計","③ 合計は180人","④ 広島に決まった"],"why":["40票＜60票","80票＜100票","計算と一致","京都に決まった"],"ans":2,"band":"答え：③ 合計180人","check":["80 ＋ 60 ＋ 40 ＝ 180","one hundred and eighty と一致","ほかは 数・結果がちがう"],"bad":"② 京都が多いから","good":"③ 足して確かめる","mb":"合計と比べない","mg":"計算で確かめる","cap":"数を数字にして計算で確かめる"}, "数を数字にして計算で確かめる");

export const figuresMoshi202612EigoKoko2: Record<string, Figure> = {
  moshi_2026_12_eigo_k26: k26,
  moshi_2026_12_eigo_k27: k27,
  moshi_2026_12_eigo_k28: k28,
  moshi_2026_12_eigo_k29: k29,
  moshi_2026_12_eigo_k30: k30,
  moshi_2026_12_eigo_k31: k31,
  moshi_2026_12_eigo_k32: k32,
  moshi_2026_12_eigo_k33: k33,
  moshi_2026_12_eigo_k34: k34,
  moshi_2026_12_eigo_k35: k35,
  moshi_2026_12_eigo_k36: k36,
  moshi_2026_12_eigo_k37: k37,
  moshi_2026_12_eigo_k38: k38,
  moshi_2026_12_eigo_k39: k39,
  moshi_2026_12_eigo_k40: k40,
  moshi_2026_12_eigo_k41: k41,
  moshi_2026_12_eigo_k42: k42,
  moshi_2026_12_eigo_k43: k43,
  moshi_2026_12_eigo_k44: k44,
  moshi_2026_12_eigo_k45: k45,
  moshi_2026_12_eigo_k46: k46,
  moshi_2026_12_eigo_k47: k47,
  moshi_2026_12_eigo_k48: k48,
  moshi_2026_12_eigo_k49: k49,
  moshi_2026_12_eigo_k50: k50,
};
