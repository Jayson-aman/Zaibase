// 新傾向の単元（ntce）の動く図解スライド（中学受験の英語・各 7〜8 枚）。
// 「なぜ？→答え→では、なぜ？→答え…」の連鎖で、文を出して終わりにしない。
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

const f01 = ladder(
  [
    {
      note: "13 と 30 は、聞き取りでいちばん聞きまちがえやすい組です。書くと thirteen と thirty で、どちらも「サーティ…」と聞こえます。ちがいは、強く読む場所です。thirteen は後ろの teen を強く、thirty は前の thir を強く読みます。",
      rows: [
        [["13 thirteen 後ろが強い", BLUE], ["30 thirty 前が強い", RED]],
      ],
    },
    {
      note: "なぜ、強く読む場所がちがうのでしょう。英語は、いちばん大切な部分を強く、長く言う言葉だからです。teen は「10」の意味をもつ部分なので、13 では teen を強く言って、聞き手に知らせます。30 では ty は「10のかたまり」を表すだけの部分で、弱く短く言います。",
      rows: [
        [["なぜ？ 大切な部分を強く長く言う", PURPLE]],
      ],
    },
    {
      note: "同じ組は、ほかにもあります。14 と 40、15 と 50、19 と 90 です。つづりも気をつけましょう。fourteen には u がありますが、forty には u がありません。ninety は e が残ります。",
      rows: [
        [["14 fourteen ／ 40 forty", MAIN], ["15 fifteen ／ 50 fifty", MAIN]],
      ],
    },
    {
      note: "時刻の聞き取りでも同じです。It is six fifteen. なら 6時15分、It is six fifty. なら 6時50分です。teen が強く長く聞こえたら 15、前の fif が強く聞こえたら 50 です。分のところの数字が、答えの分かれ目になります。",
      rows: [
        [["6:15 six fifteen", BLUE], ["6:50 six fifty", RED]],
      ],
    },
    {
      note: "なぜ、言い直しに気をつけるのでしょう。放送では、話している人がまちがえて、あとから言い直すことがあるからです。Oh, sorry. や I mean … のあとに言った数が、本当の答えです。先に聞こえた数は、答えにはなりません。",
      rows: [
        [["なぜ？ 言い直しのあとが答え", PURPLE]],
      ],
    },
    {
      note: "例です。The concert starts at six thirty. Oh, sorry. It starts at seven thirty. 前の six thirty は言いまちがいなので、答えは 7時30分です。Oh, sorry. が聞こえた時点で、前の数字に線を引いて、あとの数字を書きます。",
      rows: [
        [["six thirty", MAIN], ["Oh, sorry.", RED], ["seven thirty", GREEN]],
      ],
    },
    {
      note: "まとめです。①teen は後ろ、ty は前を強く聞く。②時刻や値段は、聞こえた数字をそのままメモする。③Oh, sorry. などの合図をさがす。④メモを声に出して読み、強く読む場所が聞こえた音と合うか確かめます。",
      rows: [
        [["強さと合図を聞く：声に出して確認", MAIN]],
      ],
    },
  ],
  "聞き取りの型：-teen と -ty、言い直し",
);

const f02 = ladder(
  [
    {
      note: "ごみを少なくする行動は、英語で3つのRと言います。reduce は「へらす」、reuse は「くり返し使う」、recycle は「別の物に作り直す」です。どれも、ふだんの生活で自分にできる行動です。",
      rows: [
        [["reduce へらす", GREEN], ["reuse くり返す", BLUE], ["recycle 作り直す", MAIN]],
      ],
    },
    {
      note: "なぜ、reduce が最初に来るのでしょう。ごみを出さなければ、集める・運ぶ・作り直す手間が、そもそも要らないからです。reuse はごみにする前にもう一度使うこと、recycle は使い終わった物をとかして別の物にすることです。",
      rows: [
        [["なぜ？ ごみを出さないのがいちばん", PURPLE]],
      ],
    },
    {
      note: "英文にすると、こうなります。I bring my own bag. は、ふくろをもらわないので reduce です。We use old T-shirts as cloths. は、古い服をくり返し使うので reuse です。We recycle cans and bottles. は、作り直すので recycle です。",
      rows: [
        [["I bring my own bag.（reduce）", GREEN]],
        [["We use old T-shirts as cloths.（reuse）", BLUE]],
        [["We recycle cans and bottles.（recycle）", MAIN]],
      ],
    },
    {
      note: "2015年に国連で、2030年までの世界共通の目標が決まりました。それがSDGsで、目標は17あります。身近な行動に近いのは、12番「つくる責任 つかう責任」と14番「海の豊かさを守ろう」です。",
      rows: [
        [["SDGs 2015年・17目標", MAIN], ["12 責任／14 海の豊かさ", GREEN]],
      ],
    },
    {
      note: "なぜ、日本ではレジ袋が有料になったのでしょう。2020年7月に全国で有料になりました。目的は、あたり前のようにもらっているレジ袋が本当に必要かを考え直す、きっかけにするためです。つまり reduce の第一歩です。",
      rows: [
        [["2020年7月 レジ袋が有料に ＝ reduce", PURPLE]],
      ],
    },
    {
      note: "自分の行動を英語で言うときは、2文で言うと伝わります。1文目は「何をしているか」、2文目は「それがなぜよいか」です。I bring my own bag. It helps the sea. のように、短い文を2つ並べれば十分です。",
      rows: [
        [["① I bring my own bag.", GREEN], ["② It helps the sea.", BLUE]],
      ],
    },
    {
      note: "まとめです。①3つのRの意味を区別する。②ごみは出さないことがいちばん大切。③SDGsは2015年に決まった、2030年までの17の目標。④自分の行動を、行動と、なぜよいかの2文で言います。",
      rows: [
        [["3つのRを、行動＋よさの2文で言う", MAIN]],
      ],
    },
  ],
  "環境とSDGsの英文",
);

const f03 = ladder(
  [
    {
      note: "学校で使う道具の英語を、まず目で確認しましょう。tablet はタブレット、online はインターネットにつながっていること、password は本人だけが知る合言葉、screen は画面、camera はカメラ、video call は顔を見ながらの通話です。",
      rows: [
        [["tablet タブレット", BLUE], ["online つながる", BLUE], ["password 合言葉", BLUE]],
        [["screen 画面", BLUE], ["camera カメラ", BLUE], ["video call 通話", BLUE]],
      ],
    },
    {
      note: "なぜ、タブレットには use を使うのでしょう。道具は「使う」ものだからです。see は「目に入る」、look at は「目を向けて見る」で、タブレットを動かす意味にはなりません。写真は take（とる）、メールは send（送る）、ファイルは open（開く）と、動かし方に合う動詞が決まっています。",
      rows: [
        [["なぜ？ 道具は use（使う）", PURPLE]],
      ],
    },
    {
      note: "動詞と名詞の組み合わせをまとめます。use a tablet、take a picture、send an e-mail、open a file、click the button です。名詞だけでなく、いっしょに使う動詞まで覚えると、英文がすぐ作れます。",
      rows: [
        [["use a tablet", MAIN], ["take a picture", MAIN]],
      ],
    },
    {
      note: "日本では2019年12月に、GIGAスクール構想が発表されました。小学生と中学生に、1人1台の端末を用意する考えです。英語では Each student has a tablet. と言えます。each は「ひとりひとり」の意味で、そのあとの名詞は単数です。",
      rows: [
        [["2019年12月 GIGAスクール構想：1人1台", MAIN]],
        [["Each student has a tablet.", BLUE]],
      ],
    },
    {
      note: "なぜ、パスワードは人に教えてはいけないのでしょう。パスワードは、家のかぎと同じだからです。教えてしまうと、ほかの人があなたの名前でログインして、ファイルを見たり、書きかえたりできてしまいます。",
      rows: [
        [["なぜ？ パスワードは家のかぎと同じ", PURPLE]],
      ],
    },
    {
      note: "ルールの英文は、命令文が中心です。Don't tell your password. は「パスワードを教えてはいけません」、Please turn off the tablet. は「タブレットの電源を切ってください」、Ask a teacher first. は「まず先生に聞きましょう」です。Don't は「〜するな」、Please は「〜してください」の合図です。",
      rows: [
        [["Don't tell your password.", RED], ["Ask a teacher first.", RED]],
      ],
    },
    {
      note: "まとめです。①tablet、online、passwordなどの言葉を覚える。②道具はuse、写真はtake、メールはsendと動詞を合わせる。③eachのあとは単数。④Don'tで始まる文は、してはいけないことを表します。",
      rows: [
        [["動詞と名詞をセットで：use／take／send", MAIN]],
      ],
    },
  ],
  "学校のICTの英文",
);

const f04 = ladder(
  [
    {
      note: "日本の行事を紹介するときは、3つの文で言うと、聞き手にわかりやすく伝わります。1つ目は「何か」、2つ目は「何をするか」、3つ目は「どう思うか」です。たなばたなら、こうなります。",
      rows: [
        [["① Tanabata is a festival.", MAIN]],
        [["② People write wishes.", MAIN]],
        [["③ It is fun.", MAIN]],
      ],
    },
    {
      note: "なぜ、3つの文が必要なのでしょう。外国の人は、たなばたを知らないかもしれないからです。1文目で「行事だ」と教え、2文目で様子を想像してもらい、3文目で気持ちを伝えると、初めて聞く人にも伝わります。",
      rows: [
        [["なぜ？ 知らない人にも伝わる順番", PURPLE]],
      ],
    },
    {
      note: "時を言うときの in と on に注意します。月だけなら in July、日付まで言うなら on July 7 です。Tanabata is on July 7. または Tanabata is in July. のどちらも正しく、言いたい中身で選びます。",
      rows: [
        [["in July（月）", BLUE], ["on July 7（日付）", RED]],
      ],
    },
    {
      note: "なぜ、「This is called ～.」と言うのでしょう。onigiri のような日本語の名前は、相手が知らないからです。called は「と呼ばれている」の意味で、「この食べ物は onigiri という名前です」と、名前を教える言い方になります。",
      rows: [
        [["This is called onigiri.（名前を教える）", PURPLE]],
      ],
    },
    {
      note: "名前のあとに、やさしい英語で言いかえを足すと、もっとよく伝わります。Onigiri is a rice ball. 、Miso soup is a soup with miso. のようにです。知らない単語は、知っている単語で説明します。",
      rows: [
        [["Onigiri is a rice ball.", GREEN]],
      ],
    },
    {
      note: "2013年12月に、「和食」がユネスコの無形文化遺産に登録されました。英語では、Washoku became a UNESCO Intangible Cultural Heritage in 2013. と言えます。became は「なった」の意味で、become の過去形です。",
      rows: [
        [["2013 Washoku became UNESCO heritage.", BLUE]],
      ],
    },
    {
      note: "日本の学校の給食も、紹介できる話題です。In many Japanese schools, students serve school lunch. と言えます。serve は「配る」の意味です。食べる前に言う「いただきます」は、Thank you for the food. と言うと意味が伝わります。",
      rows: [
        [["Thank you for the food.（いただきます）", GREEN]],
      ],
    },
    {
      note: "まとめです。①何か、何をする、どう思うの3文で話す。②月はin、日付はon。③名前はThis is called と教える。④出来事には年をそえて話します。",
      rows: [
        [["何か・何をする・どう思う＋年をそえる", MAIN]],
      ],
    },
  ],
  "日本の文化を英語で紹介する",
);

const f05 = ladder(
  [
    {
      note: "スピーキングテストでは、先生の質問に短く答えるだけでなく、ひとこと足すと話が伝わります。Do you like sports? と聞かれたら、Yes, I do. で終わらず、I play soccer on Sundays. と足します。",
      rows: [
        [["先生：Do you like sports?", MAIN]],
        [["Yes, I do. I play soccer on Sundays.", BLUE]],
      ],
    },
    {
      note: "なぜ、ひとこと足すのでしょう。Yes, I do. だけでは、好きだということしか伝わらないからです。話す力を見る場面では、自分で考えた文が出せるかが大切です。足す文は、短く、やさしい文でかまいません。",
      rows: [
        [["なぜ？ ひとこと足すと伝わる", PURPLE]],
      ],
    },
    {
      note: "答えの最初の文は、聞かれた文の動詞に合わせます。Do you ～? には Yes, I do. 、Can you ～? には Yes, I can. 、Are you ～? には Yes, I am. です。質問の動詞を、そのまま答えにも使います。",
      rows: [
        [["Do→Yes, I do.", MAIN], ["Can→Yes, I can.", MAIN], ["Are→Yes, I am.", MAIN]],
      ],
    },
    {
      note: "なぜ、質問の動詞に合わせるのでしょう。英語の質問は、文のはじめの語（Do・Can・Are）が、何をたずねているかを示しているからです。同じ語で答えると、質問にちゃんと答えたことが、すぐ相手に伝わります。",
      rows: [
        [["なぜ？ 最初の語が中身を決める", PURPLE]],
      ],
    },
    {
      note: "What で聞かれたら、Yes・No ではなく文で答えます。What is your favorite food? なら I like curry. です。さらに Why? と聞かれたら、Because it is spicy. のように Because ではじめて理由を言います。理由は1つで十分です。",
      rows: [
        [["What is your favorite food? → I like curry.", BLUE]],
        [["Why? → Because it is spicy.", GREEN]],
      ],
    },
    {
      note: "聞き取れなかったときは、だまらずに聞き返します。Pardon? は「もう一度お願いします」、Could you say that again, please? は、もっとていねいな言い方です。言葉が出ないときは、I don't know the word. と伝えてもかまいません。",
      rows: [
        [["Pardon? Could you say that again, please?", RED]],
      ],
    },
    {
      note: "まとめです。①答えとひとことの2文で話す。②質問のはじめの語に合わせて答える。③Whatには文で、WhyにはBecauseで答える。④聞こえなければPardon?と聞き返します。",
      rows: [
        [["答え＋ひとこと／聞こえなければ聞き返す", MAIN]],
      ],
    },
  ],
  "スピーキングの型：答え＋ひとこと",
);

export const XF_NTCE_FIGURES: Record<string, DiagramFigure> = {
  xf_nt_ntce_01: f01,
  xf_nt_ntce_02: f02,
  xf_nt_ntce_03: f03,
  xf_nt_ntce_04: f04,
  xf_nt_ntce_05: f05,
};

export const XF_NTCE_SECTIONS: Record<string, string> = {
  'nt_ntce_01#0': 'xf_nt_ntce_01',
  'nt_ntce_02#0': 'xf_nt_ntce_02',
  'nt_ntce_03#0': 'xf_nt_ntce_03',
  'nt_ntce_04#0': 'xf_nt_ntce_04',
  'nt_ntce_05#0': 'xf_nt_ntce_05',
};
