// 新傾向の単元（ntke）の動く図解スライド。高校受験 英語：スピーキングテスト・オンライン場面・複数の投稿の読み比べ。
// 「なぜ？→答え→では、なぜ？→答え…→確かめ」の連鎖で、式を出して終わりにしない。
// 前のスライドの部品は消えない前提で、1段ずつ下へ積み上げていく（文字が重ならない）。
import type { DiagramElement, DiagramFigure } from './figures';
import { C, FILL, bx, show } from './diagram-kit';

type Col = [string, string];
const BLUE: Col = [C.blue, FILL.blue];
const GREEN: Col = [C.green, FILL.green];
const RED: Col = [C.red, FILL.red];
const MAIN: Col = [C.main, FILL.warm];
const PURPLE: Col = [C.purple, FILL.purple];

type Cell = [string, Col];
type Row = Cell[];

/** 1スライドぶん（説明文＋その枚で足す段）の並びから、積み上げ式の図を作る。 */
function ladder(slides: { note: string; rows: Row[] }[], caption: string): DiagramFigure {
  let idx = 0;
  const H = 21;
  const GAP = 2;
  return show(
    slides.map((s) => {
      const add: DiagramElement[] = [];
      for (const row of s.rows) {
        const y = 4 + idx * (H + GAP);
        const n = row.length;
        const w = (300 - 4 * (n - 1)) / n;
        row.forEach(([t, c], i) => add.push(bx(10 + i * (w + 4), y, w, H, t, c[0], c[1], 11)));
        idx++;
      }
      return { note: s.note, add };
    }),
    caption,
  );
}

// ════════════════════════════════════════════════════
// 01 スピーキングテスト①：音読と応答
// ════════════════════════════════════════════════════
const f01 = ladder(
  [
    {
      note: '音読では、1語ずつ同じ強さで読むのではなく、意味のかたまりごとに小さく区切ります。Do you have any plans の次で少し間をあけ、for this weekend? へ続けます。',
      rows: [[['Do you have any plans / for this weekend?', BLUE]]],
    },
    {
      note: 'なぜ、区切って読むのでしょう。聞き手は文字ではなく、音だけを聞いています。区切りがないと、どこまでが1つの意味かがわからなくなります。かたまりごとに間をあけると、聞き手は1つずつ意味を受け取れます。',
      rows: [[['なぜ？ 聞き手は音だけで聞く。間が目印になる', PURPLE]]],
    },
    {
      note: '次に、強く読む語を決めます。意味を運ぶ語、つまり want、go、library、school は強く、はっきり読みます。to や the は、弱く短く読みます。',
      rows: [[['I WANT to GO to the LIBRARY after SCHOOL.', RED]]],
    },
    {
      note: 'では、なぜ大事な語だけを強く読むのでしょう。英語は、強い音がリズムをつくる言葉です。意味のある語を強くすれば、強い語を拾うだけで、聞き手に内容が伝わります。全部を同じ強さにすると、どこが大事かわかりません。',
      rows: [[['なぜ？ 強い語を拾えば、内容が伝わる', PURPLE]]],
    },
    {
      note: '文末の読み方も決まっています。Yes か No で答えられる疑問文は、文末を上げます。what など疑問詞で始まる疑問文は、文末を下げます。答えが2つに決まっているかどうかで、見分けられます。',
      rows: [[['Do you ...? ↗', GREEN], ['What ...? ↘', BLUE]]],
    },
    {
      note: '図の応答では、聞かれた疑問詞に合う情報を、図から1つ選んで答えます。図は Sunday Market、場所は Green Park、時間は10時から15時です。What time does the market close? には、午後3時なので It closes at three. と答えます。',
      rows: [
        [['図：Sunday Market／Green Park／10:00-15:00', MAIN]],
        [['Q: What time ...? → A: It closes at three.', RED]],
      ],
    },
    {
      note: '最後に、確かめです。録音を聞き直して、区切りと強弱を確かめます。応答は、主語と動詞があるか、疑問詞と答えの種類が合っているかを確かめます。',
      rows: [
        [['確かめ 録音して、区切りと強弱を聞く', GREEN]],
        [['確かめ 疑問詞と答えの種類が合うか', GREEN]],
      ],
    },
  ],
  'スピーキングテスト①：音読と応答',
);

// ════════════════════════════════════════════════════
// 02 スピーキングテスト②：ストーリー
// ════════════════════════════════════════════════════
const f02 = ladder(
  [
    {
      note: '4コマの絵は、起きた順に並んでいます。1コマにつき1〜2文で、順番どおりに話します。ここでは、ミカが財布を見つけて、交番へ届ける話を例にします。',
      rows: [[['1 歩く', BLUE], ['2 財布発見', GREEN], ['3 交番へ', MAIN], ['4 お礼', RED]]],
    },
    {
      note: 'なぜ、過去形で話すのでしょう。ストーリーは、すでに終わった出来事を伝えるものです。英語は動詞の形で、いつの話かを示します。現在形のままだと、聞き手は、いつの話か迷います。',
      rows: [[['なぜ？ 終わった話。動詞の形が「いつ」を示す', PURPLE]]],
    },
    {
      note: '順番は、つなぎの語で示します。First、Then、After that、Finally の順に並べます。話の最初は、One day, で始めると、過去の話だと伝わります。',
      rows: [[['One day, → First, → Then, → Finally,', BLUE]]],
    },
    {
      note: 'なぜ、順序の語を入れるのでしょう。聞き手は、音だけで話の流れを追います。First や Then があれば、今が話のどのあたりかがわかります。同じ形の文が続いても、聞き取りやすくなります。',
      rows: [[['なぜ？ 順序の語は、話の道しるべ', PURPLE]]],
    },
    {
      note: '動詞は過去形にします。ふつうの動詞は -ed をつけますが、find や take のように形が変わるものもあります。find は found、take は took、go は went、give は gave、say は said です。finded や taked という言い方はありません。',
      rows: [
        [['find → found', RED], ['take → took', RED], ['go → went', RED]],
        [['give → gave', RED], ['say → said', RED], ['run → ran', RED]],
      ],
    },
    {
      note: '話の例です。One day, Mika was walking to school. First, she found a wallet. Then, she took it to the police box. Finally, the owner said, Thank you. 動詞は、すべて過去の形になっています。',
      rows: [
        [['One day, Mika was walking to school.', BLUE]],
        [['First, she found a wallet.', GREEN]],
      ],
    },
    {
      note: '最後に、確かめです。4コマ全部に文があるか、動詞がすべて過去形か、順序の語が正しい順か、最後に結果か気持ちがあるかを確かめます。',
      rows: [
        [['確かめ 4コマ全部に文・動詞は過去形', GREEN]],
      ],
    },
  ],
  'スピーキングテスト②：ストーリーを話す',
);

// ════════════════════════════════════════════════════
// 03 スピーキングテスト③：意見と理由
// ════════════════════════════════════════════════════
const f03 = ladder(
  [
    {
      note: '意見を話す型は、4つの部品でできています。①意見、②理由1、③理由2、④結びの順に並べます。',
      rows: [[['意見 → 理由1 → 理由2 → 結び', MAIN]]],
    },
    {
      note: 'なぜ、理由が必要なのでしょう。意見だけでは、聞き手は、なぜそう思うのかがわかりません。理由があれば、聞き手は意見を受け止められます。自分の考えを伝える力は、理由を言う力で決まります。',
      rows: [[['なぜ？ 理由は、意見をささえる柱', PURPLE]]],
    },
    {
      note: '例です。質問は、生徒は授業でタブレットを使うべきか。I think students should use tablets in class. First, they can look up new words quickly. Second, they can keep many notes in one place. So I think tablets are useful for study.',
      rows: [
        [['I think students should use tablets in class.', BLUE]],
        [['First, they can look up new words quickly.', GREEN]],
        [['Second, they can keep many notes in one place.', GREEN]],
        [['So I think tablets are useful for study.（33語）', RED]],
      ],
    },
    {
      note: 'なぜ、短い文で話すのでしょう。話すときは、言い直しがむずかしいからです。長い文を作ろうとして止まるより、簡単な語の短い文を並べるほうが、まちがえずに伝わります。',
      rows: [[['なぜ？ 短い文なら、まちがえず最後まで言える', PURPLE]]],
    },
    {
      note: '言葉につまったときは、短いつなぎ表現を1回だけ使います。Well,（ええと）や Let me think.（考えさせてください）です。そのあと、すぐに意見を言います。知らない語は、知っている語で言いかえます。',
      rows: [[['Well, ... を1回だけ → すぐ I think ...', BLUE]]],
    },
    {
      note: '意見と理由は、同じ向きにそろえます。猫のほうがよいと言うなら、理由は、静かで勉強できるなど、よい点にします。うるさいを理由にすると、意見とつながりません。',
      rows: [
        [['○ 猫がよい→静か', GREEN], ['× 猫がよい→うるさい', RED]],
      ],
    },
    {
      note: '最後に、確かめです。意見が最初にあるか、理由が2つあるか、向きが同じか、結びがあるか、語数が30〜40語ほどかを確かめます。',
      rows: [[['確かめ 意見・理由2つ・結び・向き・語数', GREEN]]],
    },
  ],
  'スピーキングテスト③：意見と理由',
);

// ════════════════════════════════════════════════════
// 04 オンラインの場面の会話表現
// ════════════════════════════════════════════════════
const f04 = ladder(
  [
    {
      note: 'オンラインの会話では、トラブルを伝える表現を使います。聞こえないときは I can\'t hear you.、マイクが切れているときは You\'re on mute. です。mute は消音という意味です。',
      rows: [[['I can\'t hear you.', BLUE], ['You\'re on mute.', BLUE]]],
    },
    {
      note: '依頼は Could you ...? を使います。画面を共有してもらうなら Could you share your screen?、もう一度なら Could you say that again? です。誘うときは Would you like to ...? を使います。',
      rows: [
        [['Could you share your screen?', GREEN]],
        [['Would you like to join us?（誘う）', MAIN]],
      ],
    },
    {
      note: 'なぜ、Could のほうがていねいなのでしょう。Could は can の過去形ですが、ここでは過去を表しません。過去形には、今の事実から少しきょりをおくはたらきがあります。きょりをおくと、おしつけない、ひかえめな言い方になります。',
      rows: [[['なぜ？ 過去形は事実から少しきょりをおく', PURPLE]]],
    },
    {
      note: 'ていねいさの順番です。Can you は友だち向き、Will you、Could you、Would you の順にていねいになります。相手に合わせて選びます。',
      rows: [[['Can you < Will you < Could you < Would you', MAIN]]],
    },
    {
      note: '答え方です。Could you ...? は依頼なので、引き受けるなら Sure. か Of course.、断るなら Sorry, I can\'t. と答えます。Yes, I could. とは答えません。',
      rows: [
        [['○ Sure. / Of course.', GREEN], ['○ Sorry, I can\'t.', GREEN]],
        [['× Yes, I could.', RED]],
      ],
    },
    {
      note: 'では、なぜ Yes, I could. は誤りなのでしょう。Could you ...? は、できたかどうかの能力をたずねているのではなく、頼んでいます。それなのに Yes, I could. と答えると、私はできましたよ、という意味になり、会話がかみ合いません。',
      rows: [[['なぜ？ 頼まれたのに「できました」では合わない', PURPLE]]],
    },
    {
      note: '最後に、確かめです。空所の前の文が、依頼か誘いかを決めます。答えの種類を決めて選び、A と B の役で声に出して読んで、意味が通るかを確かめます。',
      rows: [[['確かめ A と B で声に出して読む', GREEN]]],
    },
  ],
  'オンラインの場面の会話表現',
);

// ════════════════════════════════════════════════════
// 05 複数の投稿を読み比べる
// ════════════════════════════════════════════════════
const f05 = ladder(
  [
    {
      note: '3人の投稿を読み比べます。Aki は、AIアプリにヒントをもらってから、自分で答えを書きます。Ben は、先に自分で解き、あとでアプリで確かめます。Chie は、答えを写さないことに賛成しています。',
      rows: [
        [['Aki：ヒントをもらう → 自分で書く', BLUE]],
        [['Ben：先に自分で解く → あとで確かめる', GREEN]],
        [['Chie：答えを写さない（先生に賛成）', MAIN]],
      ],
    },
    {
      note: 'なぜ、人物ごとに整理するのでしょう。複数の投稿は、情報が人ごとに散らばっています。頭の中だけで覚えると、だれが言ったかが混ざります。人物と立場を対にして書き出せば、設問を読んだあと、表を見るだけで答えが選べます。',
      rows: [[['なぜ？ 名前と立場をセットにすると混ざらない', PURPLE]]],
    },
    {
      note: '設問は Who uses the app to check answers? です。who の質問なので、主語と動詞を探します。check answers（答えを確かめる）と書いてあるのは Ben なので、答えは Ben です。',
      rows: [
        [['Q: Who uses the app to check answers?', PURPLE]],
        [['答え：Ben（check answers と言っている）', RED]],
      ],
    },
    {
      note: 'なぜ、順序の語が大切なのでしょう。Aki も Ben も、アプリを使っています。use the app だけを見ると、同じに見えます。ちがいは、いつ使うかです。first や after that などの順序の語が、先にすることとあとですることを区別させます。',
      rows: [[['なぜ？ first / after that が先後を分ける', PURPLE]]],
    },
    {
      note: '選択肢は、人物名、動詞、評価の語を、本文と1つずつ照らします。Aki and Ben both use the app. は正しいです。Ben never uses the app. は、Ben が使っているので誤りです。never のような語は、必ず確かめます。',
      rows: [
        [['○ Aki and Ben both use the app.', GREEN]],
        [['× Ben never uses the app.', RED]],
      ],
    },
    {
      note: '最後に、確かめです。根拠の一文に指をおきます。その文を書いた人物が合っているか、not や never が本文にもあるか、他の選択肢が誤りの理由を言えるかを確かめます。',
      rows: [[['確かめ 根拠の一文・人物名・not / never', GREEN]]],
    },
  ],
  '複数の投稿を読み比べる',
);

export const XF_NTKE_FIGURES: Record<string, DiagramFigure> = {
  xf_nt_ntke_01: f01,
  xf_nt_ntke_02: f02,
  xf_nt_ntke_03: f03,
  xf_nt_ntke_04: f04,
  xf_nt_ntke_05: f05,
};

export const XF_NTKE_SECTIONS: Record<string, string> = {
  'nt_ntke_01#0': 'xf_nt_ntke_01',
  'nt_ntke_02#0': 'xf_nt_ntke_02',
  'nt_ntke_03#0': 'xf_nt_ntke_03',
  'nt_ntke_04#0': 'xf_nt_ntke_04',
  'nt_ntke_05#0': 'xf_nt_ntke_05',
};
