// 中学受験・社会（以前からある公式）の動く図解スライド。キーは項目の label（買い切りの識別キーと同じ）。
// 「なぜ？」をくり返して根っこまでたどる。画面の上半分に図、下の帯（band）にそのスライドの式やひとこと。
import type { DiagramFigure } from './figures';
import { C, FILL, bx, lb, ar, ln, ci, pg, show, flow, band, fresh } from './diagram-kit';

const cap = (text: string, color: string = C.ink, y = 190) => band(150, lb(160, y, text, 12, color, 'middle', true));
const NONE = 'rgba(0,0,0,0)';

// ── 国連の専門機関 ──
const un: DiagramFigure = show([
  {
    note: '国連（こくれん）＝国際連合は、世界の国々が集まって、平和や人々のくらしを守る組織です。その中には、分野ごとの「専門機関（せんもんきかん）」があります。❓なぜ、分野ごとに分かれているのでしょう。',
    add: [bx(95, 10, 130, 36, '国際連合（国連）', C.blue, FILL.blue, 13), ar(160, 46, 55, 88, C.blue), ar(160, 46, 160, 88, C.blue), ar(160, 46, 265, 88, C.blue), bx(10, 90, 90, 40, '？', C.gray, FILL.gray, 16), bx(115, 90, 90, 40, '？', C.gray, FILL.gray, 16), bx(220, 90, 90, 40, '？', C.gray, FILL.gray, 16)],
  },
  {
    note: '❓なぜ分ける？→世界の問題は、病気・教育・子どもの命など、ばらばらだからです。❓では、それで何が困る？→どの問題にも、くわしい知識をもつ専門の人が必要で、ひとつの機関では手が回りません。',
    add: [bx(10, 90, 90, 40, '病気が\n広がる', C.red, FILL.red, 12), bx(115, 90, 90, 40, '学校に\n行けない', C.red, FILL.red, 12), bx(220, 90, 90, 40, '子どもが\nこまる', C.red, FILL.red, 12), ...cap('問題ごとに、専門の機関がある', C.blue)],
  },
  {
    note: '❓まず病気。なぜ世界で協力するの？→病気は国境（こっきょう）をこえて広がるので、1つの国だけでは防げないからです。❓では、そのための機関は？→WHO（世界保健機関）。Hは「健康（けんこう）」を表す文字だと覚えます。',
    add: [...fresh(bx(15, 15, 105, 60, 'A国', C.gray, FILL.gray, 14), bx(200, 15, 105, 60, 'B国', C.gray, FILL.gray, 14), ln(160, 8, 160, 95, C.gray, true), ar(105, 45, 215, 45, C.red), lb(160, 36, '病気', 11, C.red, 'middle', true)), ...band(105, bx(45, 112, 230, 34, 'WHO（世界保健機関）＝健康', C.green, FILL.green, 13), lb(160, 172, '感染症（かんせんしょう）の対策・予防接種・薬の基準づくり', 11, C.ink, 'middle'), lb(160, 200, '国境をこえるので、世界で協力する', 12, C.green, 'middle', true))],
  },
  {
    note: '❓つぎは子ども。なぜ専門の機関が必要？→子どもは自分の力だけでは命や成長を守れないからです。❓では、何をする？→UNICEF（ユニセフ）は、食料・予防接種・安全な水などで世界の子どもを支えます。',
    add: [...fresh(bx(100, 10, 120, 32, 'UNICEF（ユニセフ）', C.purple, FILL.purple, 12), ar(130, 42, 55, 80, C.purple), ar(160, 42, 160, 80, C.purple), ar(190, 42, 265, 80, C.purple), bx(10, 82, 90, 40, '食料', C.main, FILL.warm, 13), bx(115, 82, 90, 40, '予防接種', C.main, FILL.warm, 12), bx(220, 82, 90, 40, '安全な水', C.main, FILL.warm, 13)), ...cap('UNICEF＝世界の子どもの命と成長をささえる', C.purple)],
  },
  {
    note: '❓では、教育や文化は？なぜ国連が取り組む？→「戦争は人の心の中から生まれるから、人の心の中に平和のとりでを築（きず）く」という考えからです。❓何をする？→UNESCO（ユネスコ）は教育・科学・文化を担当し、世界遺産（せかいいさん）の登録もします。',
    add: [...fresh(bx(90, 10, 140, 32, 'UNESCO（ユネスコ）', C.blue, FILL.blue, 12), ar(130, 42, 55, 78, C.blue), ar(160, 42, 160, 78, C.blue), ar(190, 42, 265, 78, C.blue), bx(10, 80, 90, 36, '教育', C.main, FILL.warm, 13), bx(115, 80, 90, 36, '科学', C.main, FILL.warm, 13), bx(220, 80, 90, 36, '文化', C.main, FILL.warm, 13), ar(265, 116, 265, 128, C.blue), bx(210, 128, 100, 18, '世界遺産の登録', C.red, FILL.red, 10)), ...cap('教育・文化で、争いの起きにくい世界をめざす', C.blue)],
  },
  {
    note: '❓名前が似ていて、まちがえやすいのはどれ？→UNICEF（子ども）とUNESCO（教育・科学・文化）です。❓見分け方は？→「ユニセフ＝子ども」、「ユネスコ＝世界遺産・教育・文化」と、名前と仕事を1つずつ結びます。',
    add: [...fresh(bx(15, 20, 130, 40, 'UNICEF', C.purple, FILL.purple, 14), bx(175, 20, 130, 40, 'UNESCO', C.blue, FILL.blue, 14), ar(80, 60, 80, 96, C.purple), ar(240, 60, 240, 96, C.blue), bx(15, 98, 130, 40, '世界の子ども', C.purple, FILL.purple, 13), bx(175, 98, 130, 40, '教育・科学・文化\n世界遺産', C.blue, FILL.blue, 12)), ...cap('似た名前でも、仕事はちがう', C.red)],
  },
  {
    note: 'ここまでをまとめます。❓何を覚える？→略称（りゃくしょう）と担当分野の組み合わせです。UNESCO＝教育・文化・世界遺産、WHO＝健康、UNICEF＝子ども。この組み合わせがよく問われます。',
    add: [...fresh(bx(10, 14, 90, 36, 'UNESCO', C.blue, FILL.blue, 13), ar(100, 32, 130, 32, C.blue), bx(132, 14, 178, 36, '教育・文化・世界遺産', C.blue, FILL.blue, 12), bx(10, 60, 90, 36, 'WHO', C.green, FILL.green, 13), ar(100, 78, 130, 78, C.green), bx(132, 60, 178, 36, '健康（保健）', C.green, FILL.green, 12), bx(10, 106, 90, 36, 'UNICEF', C.purple, FILL.purple, 13), ar(100, 124, 130, 124, C.purple), bx(132, 106, 178, 36, '子ども', C.purple, FILL.purple, 12)), ...cap('略称と分野をセットで覚える', C.main)],
  },
  {
    note: '例題：世界遺産の登録を行っている国連の機関は？❓世界遺産は文化や自然を守るものなので、教育・科学・文化のUNESCO（ユネスコ）だとわかります。UNICEFやWHOと取りちがえないようにします。',
    add: [...fresh(bx(20, 20, 280, 40, '世界遺産の登録をしているのは？', C.gray, FILL.gray, 13), ar(160, 60, 160, 84, C.blue), bx(70, 86, 180, 40, 'UNESCO（ユネスコ）', C.green, FILL.green, 15)), ...cap('文化を守る＝ユネスコ', C.green)],
  },
]);

// ── PKOと国際協力 ──
const pko: DiagramFigure = show([
  {
    note: '世界には、争いで苦しむ人や、貧しくてこまる人がいます。❓だれが、どうやって助けるのでしょう。担い手（にないて）は、国連・民間の団体・政府の3つです。',
    add: [bx(10, 20, 95, 50, '国連\n（こくれん）', C.blue, FILL.blue, 13), bx(112, 20, 95, 50, '民間の\n団体', C.green, FILL.green, 13), bx(214, 20, 95, 50, '政府', C.purple, FILL.purple, 13), ...cap('担い手がちがうと、名前もちがう', C.main)],
  },
  {
    note: '❓まず争いの場所。なぜ停戦（ていせん）のあとも助けがいる？→戦いをやめても、また争いが起きるかもしれないからです。❓そこで何をする？→国連が間に立って見守る活動が、PKO（平和維持活動）です。',
    add: [...fresh(bx(10, 20, 90, 60, 'A軍', C.red, FILL.red, 14), bx(220, 20, 90, 60, 'B軍', C.red, FILL.red, 14), bx(120, 30, 80, 40, 'PKO\n（国連）', C.blue, FILL.blue, 12), ar(120, 50, 102, 50, C.blue), ar(200, 50, 218, 50, C.blue)), ...cap('争いが再び起きないように、間に立つ', C.blue)],
  },
  {
    note: '❓なぜ「間に立つ」だけで、戦って負かさないの？→どちらかの味方になると、争いがかえって広がるからです。❓だから何が大事？→中立（ちゅうりつ）の立場を守ることです。停戦の監視や選挙の見守りなどを行います。',
    add: [...fresh(bx(20, 14, 130, 34, '味方になる', C.red, FILL.red, 13), lb(85, 66, '争いが広がる', 12, C.red, 'middle', true), ar(85, 48, 85, 56, C.red), bx(170, 14, 130, 34, '中立で見守る', C.green, FILL.green, 13), lb(235, 66, '争いがおさまる', 12, C.green, 'middle', true), ar(235, 48, 235, 56, C.green)), ...band(90, bx(30, 100, 260, 34, '停戦の監視・兵の引きはなし・選挙の見守り', C.blue, FILL.blue, 12), lb(160, 172, '日本の自衛隊（じえいたい）も1992年から参加', 12, C.ink, 'middle', true))],
  },
  {
    note: '❓では、民間の力で国境をこえて助ける人たちは？→NGO（非政府組織）といいます。❓「非政府」って？→政府ではない、という意味です。民間の人たちが自分の意思で集まり、医療や教育を届けます。',
    add: [...fresh(bx(20, 20, 130, 44, 'NGO', C.green, FILL.green, 16), lb(85, 84, '＝民間の団体', 13, C.green, 'middle', true), ci(220, 32, 12, '人', C.green, FILL.green, 10), ci(250, 32, 12, '人', C.green, FILL.green, 10), ci(280, 32, 12, '人', C.green, FILL.green, 10), ar(235, 46, 235, 76, C.green), ar(265, 46, 265, 76, C.green), bx(200, 78, 110, 34, '国境をこえて活動', C.green, FILL.green, 11)), ...cap('政府ではない＝民間', C.green)],
  },
  {
    note: '❓では、国が発展途上国（はってんとじょうこく）を助けるのはなぜ？→道路や発電所づくりのように、とても大きな費用と技術が必要で、国でないとできないことが多いからです。❓それを何という？→政府開発援助（ODA）です。',
    add: [...fresh(bx(15, 30, 100, 50, '日本政府\n（先進国）', C.purple, FILL.purple, 12), bx(205, 30, 100, 50, '発展途上国', C.main, FILL.warm, 12), ar(115, 45, 203, 45, C.purple), lb(160, 36, '資金', 11, C.purple, 'middle', true), ar(115, 65, 203, 65, C.purple), lb(160, 76, '技術', 11, C.purple, 'middle', true)), ...cap('ODA＝政府の途上国援助', C.purple)],
  },
  {
    note: '❓3つはどう区別する？→「だれが行うか」で分けます。国連がPKO、民間がNGO、政府がODAです。❓なぜ担い手で覚えるの？→活動の中身は似ていても、担い手はかならず1つに決まるからです。',
    add: [...fresh(bx(10, 14, 90, 30, '国連', C.blue, FILL.blue, 13), bx(112, 14, 90, 30, '民間', C.green, FILL.green, 13), bx(214, 14, 96, 30, '政府', C.purple, FILL.purple, 13), ar(55, 44, 55, 70, C.blue), ar(157, 44, 157, 70, C.green), ar(262, 44, 262, 70, C.purple), bx(10, 72, 90, 50, 'PKO\n平和維持活動', C.blue, FILL.blue, 11), bx(112, 72, 90, 50, 'NGO\n非政府組織', C.green, FILL.green, 11), bx(214, 72, 96, 50, 'ODA\n政府開発援助', C.purple, FILL.purple, 11)), ...cap('担い手で区別する', C.main)],
  },
  {
    note: '❓名前だけで見分けるコツは？→「非政府」とあればNGO（政府ではない）、「政府開発援助」とあればODA（政府が行う）、「平和維持」ならPKOです。ことばの中に、担い手のヒントがかくれています。',
    add: [...fresh(bx(15, 14, 150, 32, '非政府 ＝ 政府ではない', C.green, FILL.green, 12), ar(165, 30, 195, 30, C.green), bx(197, 14, 108, 32, 'NGO', C.green, FILL.green, 14), bx(15, 60, 150, 32, '政府 開発 援助', C.purple, FILL.purple, 12), ar(165, 76, 195, 76, C.purple), bx(197, 60, 108, 32, 'ODA', C.purple, FILL.purple, 14), bx(15, 106, 150, 32, '平和 維持 活動', C.blue, FILL.blue, 12), ar(165, 122, 195, 122, C.blue), bx(197, 106, 108, 32, 'PKO', C.blue, FILL.blue, 14)), ...cap('ことばの中にヒントがある', C.main)],
  },
  {
    note: '例題：先進国の政府が発展途上国を助ける援助は？❓「政府」が行い、「途上国」を助けるので、ODA（政府開発援助）です。NGOは民間、PKOは国連の活動なので、ちがいます。',
    add: [...fresh(bx(20, 20, 280, 40, '先進国の政府が途上国を助ける援助は？', C.gray, FILL.gray, 13), ar(160, 60, 160, 84, C.purple), bx(60, 86, 200, 40, 'ODA（政府開発援助）', C.green, FILL.green, 15)), ...cap('政府が行う援助＝ODA', C.green)],
  },
]);

// ── 地球環境問題とSDGs ──
const sdgsGrid = (n: number, hi: number[] = []) => Array.from({ length: n }, (_, i) => {
  const r = Math.floor(i / 6), c = i % 6;
  return bx(30 + c * 44, 20 + r * 34, 38, 28, String(i + 1), hi.includes(i + 1) ? C.red : C.blue, hi.includes(i + 1) ? FILL.red : FILL.blue, 11);
});
const sdgs: DiagramFigure = show([
  {
    note: '地球温暖化（おんだんか）とは、地球の平均の気温が少しずつ上がることです。❓なぜ気温が上がるのでしょう。まず、地球をおおう空気のようすを見てみます。',
    add: [ci(160, 90, 42, '地球', C.blue, FILL.blue, 14), ...cap('地球の気温が上がっている', C.red)],
  },
  {
    note: '❓なぜ上がる？→二酸化炭素（にさんかたんそ）などの温室効果ガスが、地球の熱をにがしにくくする毛布のようにはたらくからです。❓では、その毛布が厚くなると？→熱がこもって、気温が上がります。',
    add: [...fresh(ci(160, 100, 34, '地球', C.blue, FILL.blue, 12), ln(90, 40, 230, 40, C.red, false, 5), lb(160, 30, 'ガスの毛布', 11, C.red, 'middle', true), ar(150, 70, 150, 46, C.main), ar(172, 70, 172, 46, C.main)), ...cap('毛布が厚い＝熱がにげにくい', C.red)],
  },
  {
    note: '❓なぜ二酸化炭素が増えたの？→石油・石炭などを燃やして、電気や車や工場の力に使ってきたからです。❓燃やすと、なぜ増える？→燃やすと二酸化炭素が出て、空気中にたまっていくからです。',
    add: [...fresh(bx(10, 30, 90, 40, '石油・石炭', C.gray, FILL.gray, 12), ar(100, 50, 118, 50, C.red), bx(120, 30, 80, 40, '燃やす', C.red, FILL.red, 13), ar(200, 50, 218, 50, C.red), bx(220, 30, 90, 40, '二酸化炭素', C.red, FILL.red, 12)), ...band(90, bx(40, 98, 70, 26, '工場', C.main, FILL.warm, 11), bx(125, 98, 70, 26, '車', C.main, FILL.warm, 11), bx(210, 98, 70, 26, '発電', C.main, FILL.warm, 11), lb(160, 165, '燃やすほど、空気中の二酸化炭素が増える', 12, C.red, 'middle', true))],
  },
  {
    note: '❓なぜ環境問題は「国境をこえた課題」なの？→空気は世界中でつながっているので、1つの国が減らしても足りないからです。❓では、どうすればいい？→世界の国が、いっしょに取り組む必要があります。',
    add: [...fresh(bx(15, 60, 90, 60, 'A国', C.gray, FILL.gray, 14), bx(115, 60, 90, 60, 'B国', C.gray, FILL.gray, 14), bx(215, 60, 90, 60, 'C国', C.gray, FILL.gray, 14), bx(10, 14, 300, 30, 'つながっている空', C.blue, FILL.blue, 12)), ...cap('空気はつながっているから、みんなで取り組む', C.blue)],
  },
  {
    note: '温暖化のほかにも、オゾン層の破壊（はかい）、酸性雨、砂漠化、熱帯林の減少など、国境をこえた問題があります。❓なぜ国連が考えるの？→どれも1つの国だけでは解決できないからです。',
    add: [...fresh(bx(10, 20, 145, 44, '地球温暖化', C.red, FILL.red, 13), bx(165, 20, 145, 44, 'オゾン層の破壊', C.red, FILL.red, 13), bx(10, 80, 145, 44, '酸性雨', C.red, FILL.red, 13), bx(165, 80, 145, 44, '砂漠化・熱帯林の減少', C.red, FILL.red, 12)), ...cap('どれも国境をこえた問題', C.red)],
  },
  {
    note: '❓そこで国連は何を決めた？→2015年に「SDGs（持続可能な開発目標）」を決めました。❓いつまでに？→2030年までの15年間で達成をめざします。2015＋15＝2030です。',
    add: [...fresh(bx(15, 30, 80, 40, '2015年\n決定', C.blue, FILL.blue, 12), ar(95, 50, 215, 50, C.main), lb(155, 40, '15年間', 12, C.main, 'middle', true), bx(217, 30, 88, 40, '2030年\n達成めざす', C.green, FILL.green, 12)), ...cap('2015 ＋ 15 ＝ 2030', C.main)],
  },
  {
    note: '❓目標はいくつ？→17個です。貧困（ひんこん）をなくす、気候変動（きこうへんどう）への対策など、世界が同じ方向を向くための目標です。❓なぜ17個も必要？→問題は貧困・環境・教育などたくさんあるからです。',
    add: [...fresh(...sdgsGrid(17, [1, 13])), ...cap('17の目標\n（1＝貧困をなくす／13＝気候変動対策）', C.blue)],
  },
  {
    note: '❓「持続可能（じぞくかのう）」ってどういう意味？→今の人が使いすぎて、未来の人が困らないようにすることです。❓なぜ大事？→地球の資源や環境には限りがあるからです。',
    add: [...fresh(bx(15, 30, 120, 44, '今の人', C.blue, FILL.blue, 14), bx(185, 30, 120, 44, '未来の人', C.green, FILL.green, 14), ar(135, 52, 183, 52, C.main), lb(160, 42, 'わたす', 11, C.main, 'middle', true)), ...cap('未来の人も困らない社会をつくる', C.green)],
  },
  {
    note: '数字をまとめます。SDGsは「17の目標」、「2015年に決定」、「2030年が目標の年」。地球温暖化の主な原因は、二酸化炭素などの温室効果ガスでした。例題：2030年までの17の国際目標は？→SDGsです。',
    add: [...fresh(bx(10, 16, 145, 34, '目標の数＝17', C.blue, FILL.blue, 13), bx(165, 16, 145, 34, '決定＝2015年', C.blue, FILL.blue, 13), bx(10, 64, 145, 34, '目標の年＝2030年', C.green, FILL.green, 13), bx(165, 64, 145, 34, '原因＝温室効果ガス', C.red, FILL.red, 12)), ...cap('17・2015・2030を覚える', C.main)],
  },
]);

// ── 等高線の読み取り（高さと傾き） ──
// 山を横から見た図（左）と、真上から見た図（右）
const mtSide = (x0: number, y0: number) => [pg([[x0, y0 + 75], [x0 + 65, y0], [x0 + 130, y0 + 75]], C.main, FILL.warm)];
const contourCircles = (cx: number, cy: number, rs: number[], thick: number[] = []) => rs.map((r, i) => ({ t: 'circle' as const, cx, cy, r, color: thick.includes(i) ? C.red : C.main, fill: NONE }));
const toukousen: DiagramFigure = show([
  {
    note: '地図は紙の上の平らな絵なのに、山の高さや傾きを表したい。❓どうやって高さを表すのでしょう。ヒントは「山を同じ高さで水平に切る」ことです。',
    add: [...mtSide(20, 30), ...cap('平らな地図に、高さをどう表す？', C.main)],
  },
  {
    note: '❓なぜ線を引くの？→山をカステラのように同じ高さごとに水平に切ると、切り口の輪ができるからです。❓その輪を真上から見ると？→右の図のように、山の中心をかこむ輪になります。これが等高線（とうこうせん）です。',
    add: [ln(47, 90, 93, 90, C.blue, true), ln(38, 75, 102, 75, C.blue, true), ln(30, 60, 110, 60, C.blue, true), ln(22, 45, 118, 45, C.blue, true), ...contourCircles(240, 68, [50, 38, 26, 14]), lb(240, 128, '真上から見る', 11, C.blue, 'middle', true), ...cap('等高線＝同じ高さの地点をつないだ線', C.blue)],
  },
  {
    note: '❓線は何mごとに引くの？→地図の縮尺（しゅくしゃく）で決まっています。2万5千分の1の地形図は10mごと、5万分の1は20mごとに細い線（主曲線）を引きます。❓5本目が太いのはなぜ？→数えまちがいを防ぐためで、これを計曲線（けいきょくせん）といいます。',
    add: [...fresh(bx(10, 10, 145, 28, '2万5千分の1', C.blue, FILL.blue, 12), bx(165, 10, 145, 28, '5万分の1', C.green, FILL.green, 12), lb(82, 60, '主曲線＝10mごと', 12, C.blue, 'middle', true), lb(238, 60, '主曲線＝20mごと', 12, C.green, 'middle', true), ln(30, 90, 130, 90, C.main, false, 1.5), ln(30, 105, 130, 105, C.main, false, 1.5), ln(30, 120, 130, 120, C.red, false, 4), ln(190, 90, 290, 90, C.main, false, 1.5), ln(190, 105, 290, 105, C.main, false, 1.5), ln(190, 120, 290, 120, C.red, false, 4), lb(24, 122, '太い', 9, C.red, 'end')), ...band(135, lb(160, 165, '太い線＝計曲線（5本に1本・高さが書いてある）', 12, C.red, 'middle', true))],
  },
  {
    note: '❓では、高さはどう読む？→まず太い線の数字を読み、そこから細い線を1本ずつ数えます。例題：2万5千分の1で、100mの計曲線から3本のぼると、10m×3＝30mふえて100＋30＝130mです。',
    add: [...fresh(ln(40, 30, 200, 30, C.main, false, 1.5), lb(215, 30, '130m', 12, C.red, 'start', true), ln(40, 55, 200, 55, C.main, false, 1.5), lb(215, 55, '120m', 12, C.gray, 'start'), ln(40, 80, 200, 80, C.main, false, 1.5), lb(215, 80, '110m', 12, C.gray, 'start'), ln(40, 105, 200, 105, C.red, false, 4), lb(215, 105, '100m（計曲線）', 12, C.red, 'start', true), ar(25, 105, 25, 34, C.blue), lb(70, 125, '3本のぼる', 11, C.blue, 'middle', true)), ...cap('100 ＋ 10×3 ＝ 130m', C.green)],
  },
  {
    note: '❓線の間かくは何を表す？→傾き（かたむき）です。❓なぜ？→線と線の高さの差は、どこでも同じ10mだからです。同じ高さを上がるのに、急な坂は短い距離、ゆるい坂は長い距離ですみます。',
    add: [...fresh(ln(30, 120, 110, 40, C.main, false, 2), ln(170, 120, 310, 80, C.main, false, 2), ln(20, 120, 315, 120, C.gray, false, 1), ln(50, 100, 50, 120, C.blue, true), ln(240, 100, 240, 120, C.blue, true), ar(30, 130, 50, 130, C.red), ar(170, 130, 240, 130, C.green), lb(70, 100, '同じ高さ', 10, C.blue, 'start'), lb(246, 112, '同じ高さ', 10, C.blue, 'start'), lb(70, 145, '短い', 11, C.red, 'middle', true), lb(205, 145, '長い', 11, C.green, 'middle', true)), ...band(155, lb(160, 190, '同じ高さを上がるのに、急なら短く、ゆるいなら長い', 12, C.blue, 'middle', true))],
  },
  {
    note: '❓では地図では？→同じ10mごとの線を地面におろすと、急な坂は線の間かくがせまく、ゆるやかな坂は広くなります。だから、間かくがせまいほど急、広いほどゆるやかと読みます。',
    add: [...fresh(ln(15, 125, 95, 45, C.main, false, 2), ln(190, 125, 310, 95, C.main, false, 2), ln(10, 125, 315, 125, C.gray, false, 1), ...[25, 35, 45, 55, 65, 75].map((x) => ln(x, 125 - (x - 15), x, 125, C.blue, true)), ...[230, 270, 310].map((x) => ln(x, 125 - (x - 190) / 4, x, 125, C.blue, true)), lb(50, 142, '間かくがせまい', 11, C.red, 'middle', true), lb(250, 142, '間かくが広い', 11, C.green, 'middle', true)), ...band(155, lb(160, 190, 'せまい＝急　　広い＝ゆるやか', 13, C.main, 'middle', true))],
  },
  {
    note: '❓山の形はどう読む？→等高線が高いほうへ食いこんでいる所は谷、低いほうへ張り出している所は尾根（おね＝山のせすじ）です。❓なぜ谷？→谷は低くくぼんでいるので、同じ高さの線が、高いほうへ食いこむからです。',
    add: [...fresh(lb(160, 12, '高い', 11, C.red, 'middle', true), lb(160, 138, '低い', 11, C.blue, 'middle', true), ln(15, 70, 95, 70, C.main, false, 2), ln(95, 70, 115, 35, C.main, false, 2), ln(115, 35, 135, 70, C.main, false, 2), ln(135, 70, 195, 70, C.main, false, 2), ln(195, 70, 220, 105, C.main, false, 2), ln(220, 105, 245, 70, C.main, false, 2), ln(245, 70, 305, 70, C.main, false, 2), lb(115, 25, '谷', 13, C.blue, 'middle', true), lb(220, 118, '尾根', 13, C.green, 'middle', true)), ...cap('高いほうへ食いこむ＝谷／低いほうへ張り出す＝尾根', C.main)],
  },
  {
    note: '❓谷には何がある？→水は高いほうから低いほうへ流れるので、谷には川が流れます。だから「川があれば必ず谷」です。❓尾根は？→水が両側へ分かれていく山のせすじです。',
    add: [...fresh(lb(160, 12, '高い', 11, C.red, 'middle', true), ln(15, 70, 95, 70, C.main, false, 2), ln(95, 70, 115, 35, C.main, false, 2), ln(115, 35, 135, 70, C.main, false, 2), ln(135, 70, 195, 70, C.main, false, 2), ar(115, 45, 115, 125, C.blue), lb(135, 110, '川', 12, C.blue, 'start', true), lb(115, 25, '谷', 13, C.blue, 'middle', true)), ...cap('水は低いほうへ流れるので、谷には川がある', C.blue)],
  },
  {
    note: '最後に読み取りの手順です。❓まず何を見る？→縮尺（何mごとの線か）。つぎに太い線の数字、線の間かく、線の形の順に見ると、高さ・傾き・谷か尾根かが決まります。',
    add: [...fresh(bx(10, 20, 68, 40, '縮尺\n何mごと', C.blue, FILL.blue, 11), ar(78, 40, 88, 40, C.main), bx(90, 20, 68, 40, '太い線の\n数字', C.blue, FILL.blue, 11), ar(158, 40, 168, 40, C.main), bx(170, 20, 68, 40, '線の\n間かく', C.blue, FILL.blue, 11), ar(238, 40, 248, 40, C.main), bx(250, 20, 60, 40, '線の\n形', C.blue, FILL.blue, 11), lb(44, 78, '10m/20m', 10, C.gray), lb(124, 78, '高さ', 10, C.gray), lb(204, 78, '傾き', 10, C.gray), lb(280, 78, '谷・尾根', 10, C.gray)), ...cap('縮尺 → 高さ → 傾き → 谷か尾根か', C.main)],
  },
]);

// ── 縮尺の計算（地図上の長さ→実際の距離） ──
const shukushaku: DiagramFigure = show([
  {
    note: '「2万5千分の1」とは何でしょう。❓なぜ分数のような書き方をするのか。それは、実際の長さを25000分の1にちぢめて地図にかいた、という意味だからです。',
    add: [bx(10, 30, 150, 64, '実際の長さ\n（大きい）', C.gray, FILL.gray, 14), ar(160, 62, 208, 62, C.blue), lb(184, 48, '÷25000', 11, C.blue, 'middle', true), bx(210, 46, 80, 32, '地図（小さい）', C.blue, FILL.blue, 11), ...cap('実際の長さ ÷ 25000 ＝ 地図の長さ', C.blue)],
  },
  {
    note: '❓では、地図の長さから実際の長さにもどすには？→ちぢめたものをもとにもどすので、逆に25000をかけます。❓なぜかけ算？→「25000分の1」の逆は「25000倍」だからです。',
    add: [...fresh(bx(15, 30, 90, 44, '地図の長さ\n1cm', C.blue, FILL.blue, 12), ar(105, 52, 195, 52, C.red), lb(150, 40, '25000倍', 12, C.red, 'middle', true), bx(197, 30, 110, 44, '実際の長さ\n25000cm', C.gray, FILL.gray, 12)), ...cap('地図 → 実際は「かける」', C.red)],
  },
  {
    note: '例で確かめます。2万5千分の1の地図で4cm。❓実際は？→4×25000＝100000cm。地図の1cmが実際の25000cmなので、4cmならその4つ分です。',
    add: [...fresh(bx(20, 24, 40, 24, undefined, C.blue, FILL.blue), bx(60, 24, 40, 24, undefined, C.blue, FILL.blue), bx(100, 24, 40, 24, undefined, C.blue, FILL.blue), bx(140, 24, 40, 24, undefined, C.blue, FILL.blue), lb(100, 64, '地図の上で 4cm', 12, C.blue, 'middle', true), ar(100, 74, 100, 96, C.red), lb(140, 86, '×25000', 12, C.red, 'start', true), bx(60, 100, 200, 34, '100000cm', C.gray, FILL.gray, 15)), ...cap('4 × 25000 ＝ 100000cm', C.red)],
  },
  {
    note: '❓でも100000cmは長すぎて分かりにくい。どうする？→答えはmやkmで聞かれることが多いので、単位を直します。❓なぜ100や1000でわる？→1m＝100cm、1km＝1000m＝100000cmだからです。',
    add: [...fresh(bx(10, 30, 80, 40, '100000cm', C.gray, FILL.gray, 12), ar(90, 50, 118, 50, C.blue), lb(104, 40, '÷100', 10, C.blue, 'middle', true), bx(120, 30, 80, 40, '1000m', C.gray, FILL.gray, 13), ar(200, 50, 228, 50, C.blue), lb(214, 40, '÷1000', 10, C.blue, 'middle', true), bx(230, 30, 80, 40, '1km', C.green, FILL.green, 14)), ...band(100, lb(160, 125, '1m ＝ 100cm', 12, C.ink, 'middle', true), lb(160, 150, '1km ＝ 1000m ＝ 100000cm', 12, C.ink, 'middle', true), lb(160, 190, '100000cm ＝ 1000m ＝ 1km', 12, C.green, 'middle', true))],
  },
  {
    note: '例題：5万分の1の地図で3cmの道のりは、実際には何km？❓まず地図→実際なのでかけ算。3×50000＝150000cm。❓つぎに単位は？→÷100でm、さらに÷1000でkm。150000cm＝1500m＝1.5kmです。',
    add: [...fresh(bx(10, 20, 90, 34, '3cm', C.blue, FILL.blue, 13), ar(100, 37, 118, 37, C.red), bx(120, 20, 190, 34, '3×50000＝150000cm', C.red, FILL.red, 12), ar(215, 54, 215, 80, C.blue), bx(120, 82, 190, 30, '＝1500m', C.gray, FILL.gray, 13), ar(215, 112, 215, 128, C.blue)), ...band(130, bx(120, 130, 190, 20, '＝1.5km', C.green, FILL.green, 13), lb(160, 188, '150000cm ＝ 1500m ＝ 1.5km', 12, C.green, 'middle', true))],
  },
  {
    note: '❓逆に、実際の距離から地図上の長さを出すときは？→ちぢめるので、縮尺の分母でわります。例：実際2kmを2万5千分の1にすると、まず2km＝200000cm、200000÷25000＝8cmです。',
    add: [...fresh(bx(10, 30, 100, 40, '実際 2km\n＝200000cm', C.gray, FILL.gray, 11), ar(110, 50, 190, 50, C.blue), lb(150, 38, '÷25000', 12, C.blue, 'middle', true), bx(192, 30, 118, 40, '地図の上\n8cm', C.blue, FILL.blue, 13)), ...cap('実際 → 地図は「わる」', C.blue)],
  },
  {
    note: '❓なぜ、かけるとわるを取りちがえやすい？→どちらの向きに変えるのかを考えないからです。地図はちぢめたものなので、実際に直すと大きくなる（かける）、地図にすると小さくなる（わる）と考えれば、まちがえません。',
    add: [...fresh(bx(15, 20, 130, 40, '地図 → 実際', C.red, FILL.red, 13), ar(80, 60, 80, 84, C.red), bx(15, 86, 130, 40, '大きくなる\n＝かける', C.red, FILL.red, 12), bx(175, 20, 130, 40, '実際 → 地図', C.blue, FILL.blue, 13), ar(240, 60, 240, 84, C.blue), bx(175, 86, 130, 40, '小さくなる\n＝わる', C.blue, FILL.blue, 12)), ...cap('大きくなる？小さくなる？と考える', C.main)],
  },
  {
    note: '❓計算のとき、いちばん気をつけることは？→単位をcmにそろえてから計算することです。cmのまま出した数を、そのままmやkmと読んでしまう失敗がよくあります。最後に÷100や÷100000を忘れないようにします。',
    add: [...fresh(bx(10, 16, 300, 30, '① 地図の長さ(cm) × 縮尺の分母 ＝ 実際(cm)', C.blue, FILL.blue, 12), bx(10, 56, 300, 30, '② ÷100 で m　÷100000 で km', C.green, FILL.green, 12), bx(10, 96, 300, 30, '③ 単位を答えに書く', C.purple, FILL.purple, 12)), ...cap('cmで計算 → 最後に単位を直す', C.red)],
  },
]);

// ── 地図記号の見分け方 ──
const sym = {
  torii: (x: number, y: number) => [ln(x - 13, y + 16, x - 13, y - 6, C.red, false, 3), ln(x + 13, y + 16, x + 13, y - 6, C.red, false, 3), ln(x - 20, y - 6, x + 20, y - 6, C.red, false, 4), ln(x - 15, y + 3, x + 15, y + 3, C.red, false, 3)],
  temple: (x: number, y: number) => [lb(x, y, '卍', 30, C.ink, 'middle', true)],
  post: (x: number, y: number) => [lb(x, y, '〒', 28, C.red, 'middle', true)],
  hata: (x: number, y: number) => [ln(x - 14, y - 8, x - 8, y + 8, C.green, false, 2.5), ln(x - 2, y - 8, x - 8, y + 8, C.green, false, 2.5), ln(x + 2, y - 8, x + 8, y + 8, C.green, false, 2.5), ln(x + 14, y - 8, x + 8, y + 8, C.green, false, 2.5)],
  tea: (x: number, y: number) => [ci(x, y - 9, 5, undefined, C.green, FILL.green), ci(x - 10, y + 7, 5, undefined, C.green, FILL.green), ci(x + 10, y + 7, 5, undefined, C.green, FILL.green)],
  fruit: (x: number, y: number) => [ci(x, y + 3, 11, undefined, C.red, FILL.red), ln(x, y - 8, x, y - 16, C.green, false, 2.5)],
  school: (x: number, y: number) => [lb(x, y, '文', 28, C.ink, 'middle', true)],
  hs: (x: number, y: number) => [ci(x, y, 19, '文', C.ink, FILL.yellow, 22)],
  koban: (x: number, y: number) => [lb(x, y, '×', 32, C.ink, 'middle', true)],
  police: (x: number, y: number) => [ci(x, y, 19, '×', C.ink, FILL.yellow, 24)],
  town: (x: number, y: number) => [ci(x, y, 16, undefined, C.ink, FILL.yellow)],
  city: (x: number, y: number) => [ci(x, y, 19, undefined, C.ink, FILL.yellow), ci(x, y, 11, undefined, C.ink, FILL.yellow)],
};
const cell = (x: number, y: number, name: string, color: string, fill: string, ...sy: any[]) => [bx(x, y, 96, 76, undefined, color, fill), ...sy.flat(), lb(x + 48, y + 64, name, 12, C.ink, 'middle', true)];
const chizu: DiagramFigure = show([
  {
    note: '地図には、学校・寺・畑など、たくさんの場所や物が出てきます。❓なぜ、記号を使うのでしょう。文字で書くと、せまい地図の中が文字だらけになって読めなくなるからです。',
    add: [bx(10, 10, 140, 120, undefined, C.gray, FILL.gray), lb(50, 40, '小学校', 15), lb(100, 60, '郵便局', 15), lb(45, 85, '神社', 15), lb(105, 108, '茶畑', 15), ar(152, 70, 168, 70, C.main), bx(170, 10, 140, 120, undefined, C.blue, FILL.blue), ...sym.school(205, 42), ...sym.post(255, 62), ...sym.torii(210, 88), ...sym.tea(268, 108), ...cap('小さな記号なら、すっきり読める', C.blue)],
  },
  {
    note: '❓では、記号はどうやって決めた？→多くは、その物の形をもとにして作られています。神社は鳥居（とりい）の形、寺院は卍（まんじ）、郵便局は昔の役所の頭文字「テ」を使った〒です。❓なぜ形から？→見ただけで思い出せるからです。',
    add: [...fresh(...cell(10, 10, '神社', C.red, FILL.red, sym.torii(58, 34)), ...cell(112, 10, '寺院', C.gray, FILL.gray, sym.temple(160, 40)), ...cell(214, 10, '郵便局', C.red, FILL.red, sym.post(262, 40))), ...cap('形のもとを思い出す：鳥居・卍・〒', C.main)],
  },
  {
    note: '農作物の記号も、形から作られています。❓畑は？→ふた葉が出た形。❓茶畑は？→茶の実を3つならべた形。❓果樹園（かじゅえん）は？→木の実の形。形の意味から思い出せば、覚えやすくなります。',
    add: [...fresh(...cell(10, 10, '畑', C.green, FILL.green, sym.hata(58, 38)), ...cell(112, 10, '茶畑', C.green, FILL.green, sym.tea(160, 38)), ...cell(214, 10, '果樹園', C.green, FILL.green, sym.fruit(262, 42))), ...cap('ふた葉・茶の実3つ・木の実', C.green)],
  },
  {
    note: '❓学校の記号は？→「文」の字で、小学校・中学校を表します。❓では、高校は？→文を○でかこむと高等学校になります。❓なぜ○でかこむ？→小さな記号に1つ足すだけで、区別できるからです。',
    add: [...fresh(...cell(30, 10, '小・中学校', C.blue, FILL.blue, sym.school(78, 38)), ar(126, 48, 182, 48, C.red), lb(154, 36, '○でかこむ', 10, C.red, 'middle', true), ...cell(190, 10, '高等学校', C.blue, FILL.blue, sym.hs(238, 38))), ...cap('文＝小・中学校　○でかこむ＝高等学校', C.blue)],
  },
  {
    note: '警察も同じ考え方です。❓交番は？→×だけ。❓警察署は？→×を○でかこみます。交番は町の小さな拠点、警察署はそれをまとめる大きな役所なので、大きいものには○がつきます。',
    add: [...fresh(...cell(30, 10, '交番', C.blue, FILL.blue, sym.koban(78, 40)), ar(126, 48, 182, 48, C.red), lb(154, 36, '○でかこむ', 10, C.red, 'middle', true), ...cell(190, 10, '警察署', C.blue, FILL.blue, sym.police(238, 38))), ...cap('×＝交番　×を○でかこむ＝警察署', C.blue)],
  },
  {
    note: '役所の記号も、○で区別します。❓町村役場は？→○が1つ。❓市役所は？→○が2つ（二重丸）。市は町や村より大きいので、丸も大きく・多くなっていると覚えます。',
    add: [...fresh(...cell(30, 10, '町村役場', C.purple, FILL.purple, sym.town(78, 38)), ar(126, 48, 182, 48, C.red), lb(154, 36, '丸をふやす', 10, C.red, 'middle', true), ...cell(190, 10, '市役所', C.purple, FILL.purple, sym.city(238, 38))), ...cap('○＝町村役場　◎＝市役所', C.purple)],
  },
  {
    note: '❓ここまでの共通点は？→似た記号は「○でかこむかどうか」で区別することです。○がつくと、規模の大きい方・格が上の方になります。この決まりを知っておけば、3組をまとめて覚えられます。',
    add: [...fresh(...sym.school(50, 30), ar(72, 30, 118, 30, C.red), ...sym.hs(140, 30), lb(230, 30, '小中学校 → 高等学校', 11, C.ink, 'middle', true), ...sym.koban(50, 78), ar(72, 78, 118, 78, C.red), ...sym.police(140, 78), lb(230, 78, '交番 → 警察署', 11, C.ink, 'middle', true), ...sym.town(50, 122), ar(72, 122, 118, 122, C.red), ...sym.city(140, 122), lb(230, 122, '町村役場 → 市役所', 11, C.ink, 'middle', true)), ...cap('○がつくと、大きい・格が上', C.red, 195)],
  },
  {
    note: '例題：鳥居の形をした地図記号は？❓鳥居があるのは神社です。卍は寺院なので、取りちがえないようにします。鳥居は神社の入り口に立っている門なので、形の意味から思い出せます。',
    add: [...fresh(...sym.torii(80, 60), bx(140, 40, 160, 40, '神社', C.green, FILL.green, 16), ar(112, 60, 138, 60, C.green), ...sym.temple(80, 118), lb(200, 118, '卍は寺院（まちがえない）', 12, C.red, 'middle', true)), ...cap('鳥居 ＝ 神社', C.green, 195)],
  },
]);

// ── 雨温図の読み取り（気候区分の見分け方） ──
type Cd = { rain: number[]; temp: number[] };
const CL: Record<string, Cd> = {
  pacific: { rain: [40, 60, 110, 130, 150, 200, 160, 150, 220, 190, 90, 50], temp: [5, 6, 9, 15, 19, 22, 26, 27, 23, 17, 12, 7] },
  nihonkai: { rain: [270, 170, 130, 110, 110, 130, 200, 140, 190, 180, 250, 290], temp: [3, 3, 6, 12, 17, 21, 25, 27, 22, 16, 11, 6] },
  seto: { rain: [40, 60, 100, 130, 140, 200, 150, 90, 150, 110, 60, 40], temp: [6, 6, 10, 15, 20, 24, 28, 29, 25, 19, 13, 8] },
  chuo: { rain: [40, 50, 80, 90, 100, 140, 140, 130, 160, 110, 60, 40], temp: [-3, -2, 2, 8, 14, 18, 22, 23, 18, 11, 5, -1] },
  nansei: { rain: [110, 120, 150, 160, 220, 200, 150, 200, 200, 150, 120, 110], temp: [17, 17, 19, 21, 24, 27, 29, 29, 28, 25, 22, 18] },
  hokkaido: { rain: [50, 40, 50, 60, 70, 70, 110, 130, 140, 110, 90, 70], temp: [-4, -4, 0, 6, 11, 16, 20, 22, 17, 11, 4, -2] },
};
const TMIN = -6, TMAX = 30;
const chart = (d: Cd, x0: number, y0: number, w: number, h: number, colors = true): any[] => {
  const cw = w / 12, out: any[] = [];
  d.rain.forEach((r, i) => { const bh = (r / 300) * h; out.push(bx(x0 + i * cw + cw * 0.15, y0 + h - bh, cw * 0.7, bh, undefined, C.blue, FILL.blue)); });
  const py = (t: number) => y0 + h - ((t - TMIN) / (TMAX - TMIN)) * h;
  for (let i = 0; i < 11; i++) out.push(ln(x0 + i * cw + cw / 2, py(d.temp[i]), x0 + (i + 1) * cw + cw / 2, py(d.temp[i + 1]), C.red, false, 2.5));
  out.push(ln(x0, y0 + h, x0 + w, y0 + h, C.gray, false, 1.5), ln(x0, y0, x0, y0 + h, C.gray, false, 1.5));
  void colors;
  return out;
};
const tempLine = (t: number, x0: number, y0: number, w: number, h: number, color: string) => ln(x0, y0 + h - ((t - TMIN) / (TMAX - TMIN)) * h, x0 + w, y0 + h - ((t - TMIN) / (TMAX - TMIN)) * h, color, true, 1.2);
const utemp: DiagramFigure = show([
  {
    note: '雨温図（うおんず）は、1つの町の気候を1枚にまとめたグラフです。❓どう読む？→青い棒グラフが降水量（雨や雪の量）、赤い折れ線が気温です。左が1月、右が12月まで、1年の変化がわかります。',
    add: [...chart(CL.pacific, 30, 14, 260, 100), lb(160, 128, '1月 → 12月', 10, C.gray), lb(300, 12, '棒＝降水量', 11, C.blue, 'end', true), lb(300, 26, '折れ線＝気温', 11, C.red, 'end', true), ...cap('青い棒＝降水量　赤い線＝気温', C.main)],
  },
  {
    note: '❓地名をいきなり当てようとすると、なぜまちがえる？→日本の気候は似たグラフが多いからです。❓では、どうする？→決まった順番で候補をしぼります。①冬の気温 ②雨のピークが夏か冬か ③雨が少ないか。この順に見ます。',
    add: [...fresh(bx(10, 24, 90, 60, '① 冬の気温\nを見る', C.red, FILL.red, 12), ar(100, 54, 112, 54, C.main), bx(114, 24, 90, 60, '② 雨が多い\nのは夏？冬？', C.blue, FILL.blue, 11), ar(204, 54, 216, 54, C.main), bx(218, 24, 92, 60, '③ 雨が\n少ない？', C.green, FILL.green, 12)), ...cap('順番にしぼるので、まちがえにくい', C.main)],
  },
  {
    note: '①冬の気温。❓冬でも暖かい所は？→冬の気温が高く（15℃以上）、南の海にある南西諸島（なんせいしょとう）です。❓とても寒い所は？→冬が0℃より低く、梅雨（つゆ）がない北海道です。なぜなら、南は日ざしが強く暖かい海に囲まれ、北は緯度が高いからです。',
    add: [...fresh(...chart(CL.nansei, 10, 14, 140, 90), tempLine(15, 10, 14, 140, 90, C.gray), ...chart(CL.hokkaido, 170, 14, 140, 90), tempLine(0, 170, 14, 140, 90, C.gray), lb(80, 118, '南西諸島', 12, C.red, 'middle', true), lb(240, 118, '北海道', 12, C.blue, 'middle', true), lb(150, 18, '15℃', 9, C.gray, 'end'), lb(310, 70, '0℃', 9, C.gray, 'end')), ...cap('冬が15℃以上＝南西諸島　冬が0℃より低い＝北海道', C.red)],
  },
  {
    note: '②雨のピークが夏なら？→太平洋側の気候です。❓なぜ夏に雨が多い？→夏は南東の季節風（きせつふう）が、暖かい太平洋から水分をたっぷり運んでくるからです。その空気が山にぶつかって雨を降らせます。',
    add: [...fresh(...chart(CL.pacific, 10, 14, 170, 100), bx(196, 20, 114, 36, '夏に雨が多い', C.blue, FILL.blue, 12), ar(253, 56, 253, 80, C.blue), bx(196, 82, 114, 44, '夏の南東季節風が\n海の水分を運ぶ', C.blue, FILL.blue, 11)), ...cap('夏に雨が多い＝太平洋側の気候', C.blue)],
  },
  {
    note: '②雨のピークが冬なら？→日本海側の気候です。❓なぜ冬に雨や雪が多い？→冬は北西の季節風が、日本海の上で水分をふくみ、山にぶつかって雪を降らせるからです。山をこえた向こうは、かわいた晴れになります。',
    add: [...fresh(bx(6, 88, 90, 44, '日本海', C.blue, FILL.blue, 13), pg([[104, 132], [170, 50], [236, 132]], C.main, FILL.warm), ar(30, 82, 120, 70, C.blue), lb(60, 62, '冬の北西季節風', 11, C.blue, 'middle', true), lb(172, 38, '雪', 14, C.blue, 'middle', true), lb(276, 100, '晴れて\nかわく', 11, C.gray, 'middle')), ...cap('冬に雨（雪）が多い＝日本海側の気候', C.blue)],
  },
  {
    note: '③一年中雨が少ない所は？→瀬戸内（せとうち）か中央高地です。❓瀬戸内はなぜ雨が少ない？→北の中国山地と南の四国山地にさえぎられ、夏の南東季節風も冬の北西季節風も、山でしめり気を失ってからふきこむからです。',
    add: [...fresh(pg([[10, 130], [60, 70], [110, 130]], C.main, FILL.warm), pg([[210, 130], [260, 70], [310, 130]], C.main, FILL.warm), bx(122, 96, 76, 30, '瀬戸内', C.green, FILL.green, 13), ar(10, 50, 52, 66, C.blue), ar(310, 50, 268, 66, C.blue), lb(60, 40, '冬の北西季節風', 10, C.blue, 'middle', true), lb(262, 40, '夏の南東季節風', 10, C.blue, 'middle', true), lb(60, 142, '中国山地（北）', 10, C.ink, 'middle', true), lb(260, 142, '四国山地（南）', 10, C.ink, 'middle', true)), ...cap('山でしめり気をなくす＝雨が少ない', C.green)],
  },
  {
    note: '❓雨が少ない2つ（瀬戸内・中央高地）は、どうやって区別する？→気温です。瀬戸内は一年中温暖で気温の差が小さく、中央高地は海から遠く高い所にあるので、冬がとても寒く、夏との差が大きくなります。',
    add: [...fresh(...chart(CL.seto, 10, 14, 140, 90), ...chart(CL.chuo, 170, 14, 140, 90), lb(80, 118, '瀬戸内', 12, C.green, 'middle', true), lb(240, 118, '中央高地', 12, C.purple, 'middle', true), lb(80, 132, '一年中温暖', 10, C.gray), lb(240, 132, '冬が寒く差が大きい', 10, C.gray)), ...cap('雨が少ない2つは気温の差で見分ける', C.purple)],
  },
  {
    note: 'まとめの順番です。❓迷ったら？→①冬の気温で南西諸島・北海道を除く ②雨のピークが夏なら太平洋側、冬なら日本海側 ③雨が少なければ瀬戸内か中央高地（気温の差で区別）。',
    add: [...fresh(bx(6, 10, 150, 30, '冬15℃以上→南西諸島', C.red, FILL.red, 10), bx(6, 46, 150, 30, '冬0℃より低い→北海道', C.blue, FILL.blue, 10), bx(6, 82, 150, 30, '夏に雨→太平洋側', C.blue, FILL.blue, 10), bx(164, 10, 150, 30, '冬に雨→日本海側', C.blue, FILL.blue, 10), bx(164, 46, 150, 66, '雨が少ない\n差が小さい→瀬戸内\n差が大きい→中央高地', C.green, FILL.green, 10)), ...cap('気温 → 雨のピーク → 雨の量', C.main)],
  },
  {
    note: '例題：冬の降水量が夏より多い雨温図は？❓冬に雨や雪が多いのは、北西の季節風が日本海の水分を運び、山にぶつかるからです。答えは日本海側の気候です。',
    add: [...fresh(...chart(CL.nihonkai, 20, 14, 140, 100), bx(180, 30, 130, 40, '冬に雨が多い', C.blue, FILL.blue, 13), ar(245, 70, 245, 92, C.green), bx(180, 94, 130, 40, '日本海側の気候', C.green, FILL.green, 13)), ...cap('冬に雨（雪）が多い＝日本海側', C.green)],
  },
]);

// ── 輸送手段の使い分け（船・航空機・鉄道・トラック） ──
const yuso: DiagramFigure = show([
  {
    note: '何をどこへ運ぶかで、いちばん向いている乗り物はちがいます。❓なぜ1つの乗り物ではだめなの？→速さ・運べる量・運賃・行ける場所が、乗り物ごとにちがうからです。',
    add: [bx(10, 20, 70, 50, '船', C.blue, FILL.blue, 15), bx(90, 20, 70, 50, '航空機', C.purple, FILL.purple, 13), bx(170, 20, 70, 50, '鉄道', C.green, FILL.green, 15), bx(250, 20, 60, 50, 'トラック', C.main, FILL.warm, 11), ...cap('4つの乗り物には、それぞれ得意な物がある', C.main)],
  },
  {
    note: '❓まず船。どんな物を運ぶ？→石油・鉄鉱石・石炭・自動車のように、重くてかさばる物です。❓なぜ船？→一度に大量に運べるので、1個あたりの運賃が安くなるからです。ただし時間はかかります。',
    add: [...fresh(pg([[40, 100], [280, 100], [250, 130], [70, 130]], C.blue, FILL.blue), bx(50, 60, 55, 38, '石油', C.gray, FILL.gray, 11), bx(110, 60, 55, 38, '鉄鉱石', C.gray, FILL.gray, 11), bx(170, 60, 55, 38, '石炭', C.gray, FILL.gray, 11), bx(230, 60, 55, 38, '自動車', C.gray, FILL.gray, 11)), ...cap('重い・かさばる・大量 → 安い（おそい）', C.blue)],
  },
  {
    note: '❓では航空機は？→集積回路（しゅうせきかいろ、IC）・医薬品・生花など、軽くて高価で急ぐ物です。❓なぜ運賃が高くてもいいの？→図のように、運賃が同じでも、品物が高価ならその割合が小さく、採算（さいさん）が合うからです。',
    add: [...fresh(bx(50, 18, 46, 76, undefined, C.purple, FILL.purple), bx(50, 96, 46, 14, undefined, C.red, FILL.red), bx(190, 82, 46, 12, undefined, C.gray, FILL.gray), bx(190, 96, 46, 14, undefined, C.red, FILL.red), lb(73, 124, '集積回路', 11, C.ink, 'middle', true), lb(213, 124, '石炭', 11, C.ink, 'middle', true), lb(150, 50, '上＝品物のねだん', 10, C.purple, 'middle'), lb(150, 100, '下＝運賃（同じ）', 10, C.red, 'middle')), ...cap('高価な品物なら、運賃は小さな割合', C.purple)],
  },
  {
    note: '❓では、船と航空機の使い分けをまとめると？→「重さ・かさ」と「ねだん」で決まります。重くてかさばり安い物は船、軽くて高価な物は航空機です。',
    add: [...fresh(ln(40, 125, 300, 125, C.gray, false, 1.5), ln(40, 125, 40, 8, C.gray, false, 1.5), lb(40, 6, '高い', 10, C.gray, 'start'), lb(170, 140, '重い・かさばる ←──→ 軽い', 10, C.gray, 'middle'), bx(50, 82, 100, 36, '重くて安い\n→ 船', C.blue, FILL.blue, 12), bx(190, 18, 110, 36, '軽くて高価\n→ 航空機', C.purple, FILL.purple, 12)), ...cap('たての線＝ねだん　よこの線＝重さ', C.main)],
  },
  {
    note: '❓トラックの強みは？→戸口から戸口まで運べることです。❓なぜ便利？→ほかの乗り物は駅や港までしか行けず、積みかえが必要ですが、トラックは積みかえなしで店や家まで直接とどけられるからです。',
    add: [...fresh(...flow(['工場', 'トラック', '店'], 20, { h: 30, color: C.main, fill: FILL.warm, size: 11 }).flat(), ...flow(['工場', 'トラック', '鉄道', 'トラック', '店'], 76, { h: 30, color: C.gray, fill: FILL.gray, size: 10, pad: 6, gap: 12 }).flat(), lb(160, 62, '積みかえなし', 10, C.green, 'middle', true), lb(160, 122, '積みかえが2回必要', 10, C.red, 'middle', true)), ...cap('トラック＝戸口から戸口まで', C.main)],
  },
  {
    note: '❓では鉄道は？→時間に正確で、大量に運べて、二酸化炭素が少ないのが強みです。❓弱みは？→線路のある所にしか行けないことです。だから、最後の運びはトラックが受け持ちます。',
    add: [...fresh(ln(15, 40, 305, 40, C.green, false, 4), ci(50, 40, 8, undefined, C.green, FILL.green), ci(160, 40, 8, undefined, C.green, FILL.green), ci(270, 40, 8, undefined, C.green, FILL.green), bx(200, 78, 100, 34, '線路のない所\n行けない', C.red, FILL.red, 10), bx(20, 78, 150, 34, '正確・大量・二酸化炭素が少ない', C.green, FILL.green, 10)), ...cap('鉄道＝線路のある所だけ', C.green)],
  },
  {
    note: '❓トラックの弱みは？→道路がこむこと、排出ガス（二酸化炭素）が多いこと、運転手が足りなくなっていることです。❓では、どうする？→荷物をトラックから鉄道や船に切りかえます。これをモーダルシフトといいます。',
    add: [...fresh(bx(10, 20, 100, 44, 'トラック', C.red, FILL.red, 14), ar(112, 42, 204, 42, C.green), lb(158, 30, '切りかえ', 11, C.green, 'middle', true), bx(206, 20, 104, 44, '鉄道・船', C.green, FILL.green, 14), bx(10, 84, 145, 40, '二酸化炭素を\nへらしたい', C.blue, FILL.blue, 11), bx(165, 84, 145, 40, '運転手不足に\n対応したい', C.blue, FILL.blue, 11)), ...cap('モーダルシフト＝環境対策と運転手不足の対策', C.green)],
  },
  {
    note: 'まとめます。船＝重い・大量・安い／航空機＝軽い・高価・急ぎ／トラック＝戸口から戸口まで／鉄道＝時間に正確・二酸化炭素が少ない。❓迷ったら？→運ぶ物の「重さ」と「ねだん」を先に考えます。',
    add: [...fresh(bx(6, 8, 78, 30, '船', C.blue, FILL.blue, 12), bx(88, 8, 224, 30, '重い・大量・安い（おそい）', C.blue, FILL.blue, 11), bx(6, 44, 78, 30, '航空機', C.purple, FILL.purple, 12), bx(88, 44, 224, 30, '軽い・高価・急ぎ', C.purple, FILL.purple, 11), bx(6, 80, 78, 30, 'トラック', C.main, FILL.warm, 12), bx(88, 80, 224, 30, '戸口から戸口まで', C.main, FILL.warm, 11), bx(6, 116, 78, 30, '鉄道', C.green, FILL.green, 12), bx(88, 116, 224, 30, '時間に正確・二酸化炭素が少ない', C.green, FILL.green, 11)), ...band(152, lb(160, 195, '運ぶ物の重さとねだんで選ぶ', 12, C.main, 'middle', true))],
  },
  {
    note: '例題：集積回路（IC）が航空機で運ばれることが多いのはなぜ？❓ICは小さくて軽いわりに高価なので、運賃が高くても採算が合うからです。しかも速く運べるので、急ぎの取引にも向いています。',
    add: [...fresh(bx(15, 24, 120, 40, '集積回路（IC）', C.gray, FILL.gray, 12), ar(135, 44, 185, 44, C.purple), bx(187, 24, 120, 40, '航空機', C.purple, FILL.purple, 14), bx(15, 84, 290, 36, '小さくて軽い ＋ 高価 ＋ 速く運びたい', C.green, FILL.green, 12)), ...cap('運賃が高くても採算が合う', C.green)],
  },
]);

// ── 飛鳥文化と天平文化 ──
const temple = (x: number, y: number) => [pg([[x - 40, y], [x, y - 22], [x + 40, y]], C.red, FILL.red), bx(x - 32, y, 64, 26, undefined, C.main, FILL.warm), pg([[x - 34, y + 26], [x + 34, y + 26], [x + 44, y + 40], [x - 44, y + 40]], C.gray, FILL.gray)];
const asuka: DiagramFigure = show([
  {
    note: '奈良（なら）にも、その前の飛鳥（あすか）の時代にも、それぞれ有名な文化があります。❓どうちがうのでしょう。飛鳥文化は日本で最初の仏教文化、天平（てんぴょう）文化は唐の影響を強く受けた国際的な文化です。',
    add: [bx(10, 30, 145, 54, '飛鳥文化\n日本初の仏教文化', C.blue, FILL.blue, 12), bx(165, 30, 145, 54, '天平文化\n唐の影響・国際的', C.purple, FILL.purple, 12), ar(155, 57, 165, 57, C.main), ...cap('時代の順：飛鳥 → 奈良', C.main)],
  },
  {
    note: '❓飛鳥文化はなぜ仏教の文化？→仏教が朝鮮半島や中国から日本に伝わり、聖徳太子（しょうとくたいし）が広めようとしたからです。❓何が残っている？→法隆寺（ほうりゅうじ）と釈迦三尊像（しゃかさんぞんぞう）です。',
    add: [...fresh(bx(6, 20, 70, 36, '中国・\n朝鮮半島', C.gray, FILL.gray, 11), ar(76, 38, 118, 38, C.blue), lb(97, 26, '仏教', 11, C.blue, 'middle', true), bx(120, 20, 76, 36, '聖徳太子', C.blue, FILL.blue, 12), ar(196, 38, 236, 38, C.blue), bx(238, 20, 76, 36, '法隆寺\n釈迦三尊像', C.blue, FILL.blue, 10)), ...cap('仏教が伝わり、聖徳太子が広めた', C.blue)],
  },
  {
    note: '法隆寺は、現存する世界最古の木造建築として有名です。❓なぜ「世界最古」といえるのに、今も残っているの？→1400年ちかく大切に守り、修理をくり返してきたからです。聖徳太子が建てたと伝えられます。',
    add: [...fresh(...temple(160, 60), lb(160, 116, '法隆寺', 13, C.ink, 'middle', true)), ...cap('法隆寺＝世界最古の木造建築（飛鳥文化）', C.blue)],
  },
  {
    note: '❓では、奈良時代の天平文化は？→都は平城京（へいじょうきょう）で、聖武天皇（しょうむてんのう）のころです。❓なぜ大仏をつくった？→病気やききんが続いたので、仏の力で国を安らかにしたいと願ったからです。東大寺と大仏がその代表です。',
    add: [...fresh(bx(15, 20, 90, 36, '聖武天皇', C.purple, FILL.purple, 13), ar(105, 38, 135, 38, C.purple), bx(137, 20, 80, 36, '東大寺', C.purple, FILL.purple, 13), ar(217, 38, 235, 38, C.purple), bx(237, 20, 73, 36, '大仏', C.purple, FILL.purple, 13)), ...band(80, lb(160, 100, '仏の力で国を安らかに', 13, C.purple, 'middle', true), lb(160, 130, '都は平城京（奈良）', 12, C.ink)), ...cap('天平文化＝聖武天皇・東大寺', C.purple)],
  },
  {
    note: '❓天平文化はなぜ「国際的」なの？→遣唐使（けんとうし）が唐の文化を持ち帰ったからです。さらに、シルクロードを通って西アジアやインドの品物まで伝わりました。❓その証拠は？→正倉院の宝物にのこっています。',
    add: [...fresh(bx(5, 30, 80, 44, '西アジア\nインド', C.gray, FILL.gray, 11), ar(85, 52, 118, 52, C.gray), lb(101, 40, 'シルクロード', 8, C.gray, 'middle'), bx(120, 30, 70, 44, '唐', C.red, FILL.red, 15), ar(190, 52, 228, 52, C.red), lb(209, 40, '遣唐使', 10, C.red, 'middle', true), bx(230, 30, 80, 44, '日本\n（天平文化）', C.purple, FILL.purple, 11)), ...cap('遣唐使とシルクロードで、国際色ゆたかに', C.red)],
  },
  {
    note: '正倉院（しょうそういん）は、聖武天皇の宝物をおさめた倉で、校倉造（あぜくらづくり）という造りです。❓なぜ宝物が長く残った？→丸太を組んだ壁が、しめり気に応じてすき間を変え、風通しがよいからだといわれます。唐招提寺（とうしょうだいじ）は鑑真（がんじん）が建てました。',
    add: [...fresh(pg([[100, 50], [160, 26], [220, 50]], C.gray, FILL.gray), bx(110, 50, 100, 46, '正倉院\n校倉造', C.main, FILL.warm, 12), ln(110, 62, 210, 62, C.main), ln(110, 74, 210, 74, C.main), ln(110, 86, 210, 86, C.main), lb(160, 116, '宝物をおさめた倉', 11, C.ink, 'middle')), ...cap('正倉院＝校倉造　唐招提寺＝鑑真', C.purple)],
  },
  {
    note: '❓書物はどうなった？→天平文化では国のことを記録するため、古事記（こじき）・日本書紀（にほんしょき）（歴史書）、風土記（ふどき）（地理）、万葉集（まんようしゅう）（和歌）がつくられました。❓なぜ書物？→国のおこりや各地の様子を、文字で残したかったからです。',
    add: [...fresh(bx(10, 16, 145, 34, '古事記・日本書紀', C.purple, FILL.purple, 11), lb(240, 33, '＝歴史書', 12, C.purple, 'middle', true), bx(10, 60, 145, 34, '風土記', C.purple, FILL.purple, 12), lb(240, 77, '＝地理', 12, C.purple, 'middle', true), bx(10, 104, 145, 34, '万葉集', C.purple, FILL.purple, 12), lb(240, 121, '＝和歌', 12, C.purple, 'middle', true)), ...cap('歴史書・地理・和歌', C.purple)],
  },
  {
    note: 'まとめ。法隆寺＝飛鳥文化、東大寺・正倉院＝天平文化。❓混同しやすいのは？→平安時代の国風文化です。天平文化は「唐の影響・国際的」、国風文化は「日本風」と、特色で区別します。',
    add: [...fresh(bx(6, 10, 100, 34, '飛鳥文化', C.blue, FILL.blue, 12), bx(112, 10, 202, 34, '法隆寺・釈迦三尊像', C.blue, FILL.blue, 11), bx(6, 52, 100, 34, '天平文化', C.purple, FILL.purple, 12), bx(112, 52, 202, 34, '東大寺・正倉院・唐招提寺', C.purple, FILL.purple, 11), bx(6, 94, 100, 34, '国風文化', C.gray, FILL.gray, 12), bx(112, 94, 202, 34, '日本風（あとの平安時代）', C.gray, FILL.gray, 11)), ...cap('天平＝唐の影響・国際的', C.main)],
  },
  {
    note: '例題：現存する世界最古の木造建築といわれる、飛鳥文化の寺院は？❓仏教を広めた聖徳太子とつながり、答えは法隆寺です。東大寺は奈良時代（天平文化）なので、取りちがえないようにします。',
    add: [...fresh(...temple(80, 40), ar(135, 55, 170, 55, C.green), bx(172, 36, 138, 40, '法隆寺', C.green, FILL.green, 15), lb(160, 128, '東大寺は天平文化（ちがう）', 11, C.red, 'middle', true)), ...cap('世界最古の木造建築＝法隆寺', C.green)],
  },
]);

// ── 鎌倉文化と鎌倉新仏教 ──
const kamakura: DiagramFigure = show([
  {
    note: '鎌倉時代は、貴族にかわって武士が力をつけた時代です。❓文化はどう変わったのでしょう。武士の気風（きふう）を映して、素朴で力強い文化になりました。',
    add: [bx(15, 30, 120, 50, '平安時代\n貴族の世の中', C.gray, FILL.gray, 12), ar(135, 55, 185, 55, C.main), bx(187, 30, 120, 50, '鎌倉時代\n武士の世の中', C.red, FILL.red, 12), ...cap('世の中が変わると、文化も変わる', C.main)],
  },
  {
    note: '❓なぜ「力強い」文化？→戦いで力をつけた武士が、時代の中心になったからです。たくましく、ありのままの姿をえがくことが好まれました。その代表が彫刻です。',
    add: [...fresh(bx(15, 24, 130, 44, '貴族\nやさしく美しい', C.gray, FILL.gray, 12), bx(175, 24, 130, 44, '武士\n素朴で力強い', C.red, FILL.red, 12)), ...cap('武士の気風が、文化にあらわれる', C.red)],
  },
  {
    note: '東大寺南大門（なんだいもん）の金剛力士像（こんごうりきしぞう）は、運慶（うんけい）・快慶（かいけい）らがつくりました。❓なぜ迫力がある？→筋肉や表情をたくましくほり出し、武士の力強さをあらわしたからです。ちなみに東大寺は奈良時代のもので、像だけが鎌倉時代です。',
    add: [...fresh(bx(20, 20, 120, 40, '東大寺南大門', C.main, FILL.warm, 12), ar(140, 40, 178, 40, C.red), bx(180, 20, 130, 40, '金剛力士像', C.red, FILL.red, 13), bx(20, 84, 290, 34, '運慶・快慶らがつくった（鎌倉時代）', C.green, FILL.green, 12)), ...cap('金剛力士像＝運慶・快慶', C.red)],
  },
  {
    note: '❓文学はどうなった？→平家物語（へいけものがたり）は琵琶法師（びわほうし）が語り伝えました。❓なぜ「語る」の？→文字が読めない人にも、耳で聞いてわかるようにするためです。ほかに新古今和歌集、方丈記（ほうじょうき）（鴨長明）、徒然草（つれづれぐさ）（吉田兼好）があります。',
    add: [...fresh(bx(10, 16, 145, 34, '平家物語', C.red, FILL.red, 13), lb(235, 33, '＝琵琶法師が語る', 11, C.red, 'middle', true), bx(10, 60, 145, 34, '方丈記', C.main, FILL.warm, 13), lb(235, 77, '＝鴨長明', 12, C.main, 'middle', true), bx(10, 104, 145, 34, '徒然草', C.main, FILL.warm, 13), lb(235, 121, '＝吉田兼好', 12, C.main, 'middle', true)), ...cap('耳で聞く平家物語・随筆の方丈記と徒然草', C.red)],
  },
  {
    note: '❓なぜ新しい仏教が広まったの？→それまでの仏教は、むずかしい学問や、お金のかかる祈りが中心で、武士や民衆には実行しにくかったからです。❓新仏教の特ちょうは？→修行の方法がわかりやすく、だれにでも実行できました。',
    add: [...fresh(bx(15, 20, 125, 44, 'それまでの仏教\nむずかしい・高い', C.gray, FILL.gray, 11), ar(140, 42, 180, 42, C.main), bx(182, 20, 125, 44, '新しい仏教\nやさしい・だれでも', C.green, FILL.green, 11)), ...cap('武士や民衆にも実行しやすかった', C.green)],
  },
  {
    note: '新仏教には3つの方法があります。❓何がちがう？→念仏（ねんぶつ）を唱える（となえる）、題目（だいもく）を唱える、座禅（ざぜん）を組む、の3つです。まず念仏。「南無阿弥陀仏（なむあみだぶつ）」と唱え、法然（浄土宗）・親鸞（浄土真宗）・一遍（時宗）が広めました。',
    add: [...fresh(bx(105, 8, 110, 30, '念仏（南無阿弥陀仏）', C.blue, FILL.blue, 10), ar(130, 38, 60, 68, C.blue), ar(160, 38, 160, 68, C.blue), ar(190, 38, 260, 68, C.blue), bx(10, 70, 100, 40, '法然\n浄土宗', C.blue, FILL.blue, 12), bx(115, 70, 90, 40, '親鸞\n浄土真宗', C.blue, FILL.blue, 12), bx(210, 70, 100, 40, '一遍\n時宗', C.blue, FILL.blue, 12)), ...cap('念仏＝法然・親鸞・一遍', C.blue)],
  },
  {
    note: '❓のこりの2つは？→題目を唱える方法は、「南無妙法蓮華経（なむみょうほうれんげきょう）」と唱える日蓮（にちれん）の日蓮宗です。座禅は、栄西（えいさい）の臨済宗（りんざいしゅう）と道元（どうげん）の曹洞宗（そうとうしゅう）で、心を落ち着ける修行が武士に好まれました。',
    add: [...fresh(bx(15, 14, 120, 30, '題目（南無妙法蓮華経）', C.purple, FILL.purple, 9), ar(75, 44, 75, 62, C.purple), bx(15, 64, 120, 44, '日蓮\n日蓮宗', C.purple, FILL.purple, 12), bx(175, 14, 130, 30, '座禅', C.main, FILL.warm, 12), ar(210, 44, 210, 62, C.main), ar(270, 44, 270, 62, C.main), bx(160, 64, 70, 44, '栄西\n臨済宗', C.main, FILL.warm, 11), bx(240, 64, 70, 44, '道元\n曹洞宗', C.main, FILL.warm, 11)), ...cap('題目＝日蓮　座禅＝栄西・道元（武士に人気）', C.purple)],
  },
  {
    note: '❓宗派と開いた人は、どう覚える？→「宗派と人」をセットにします。浄土宗＝法然、浄土真宗＝親鸞、時宗＝一遍、日蓮宗＝日蓮、臨済宗＝栄西、曹洞宗＝道元。「浄土真宗は親鸞、日蓮宗は日蓮」が、よく問われます。',
    add: [...fresh(bx(6, 8, 152, 26, '浄土宗＝法然', C.blue, FILL.blue, 11), bx(162, 8, 152, 26, '浄土真宗＝親鸞', C.blue, FILL.blue, 11), bx(6, 40, 152, 26, '時宗＝一遍', C.blue, FILL.blue, 11), bx(162, 40, 152, 26, '日蓮宗＝日蓮', C.purple, FILL.purple, 11), bx(6, 72, 152, 26, '臨済宗＝栄西', C.main, FILL.warm, 11), bx(162, 72, 152, 26, '曹洞宗＝道元', C.main, FILL.warm, 11)), ...cap('宗派と人を、セットで覚える', C.main)],
  },
  {
    note: '例題：東大寺南大門の金剛力士像をつくった人物を2人あげなさい。→運慶・快慶です。武士の力強さを映した鎌倉時代の彫刻の代表として、覚えておきます。',
    add: [...fresh(bx(20, 20, 280, 40, '金剛力士像をつくった2人は？', C.gray, FILL.gray, 13), ar(160, 60, 160, 84, C.red), bx(60, 86, 200, 40, '運慶・快慶', C.green, FILL.green, 16)), ...cap('鎌倉時代の力強い彫刻', C.green)],
  },
]);

// ── 室町文化（北山文化と東山文化） ──
const room = () => [bx(30, 12, 260, 112, undefined, C.main, FILL.warm), ...[86, 142, 198, 254].map((x) => ln(x, 12, x, 124, C.gray, false, 1)), ln(30, 68, 290, 68, C.gray, false, 1), bx(34, 16, 48, 30, '床の間', C.red, FILL.red, 10), ln(290, 20, 290, 116, C.blue, true, 4), lb(258, 132, '障子（右のかべ）', 10, C.blue, 'middle', true)];
const muromachi: DiagramFigure = show([
  {
    note: '室町時代の文化は、前半の北山文化と後半の東山文化に分けられます。❓どうちがうのでしょう。北山文化は3代将軍の足利義満（あしかがよしみつ）、東山文化は8代将軍の足利義政（よしまさ）のころです。',
    add: [bx(10, 30, 135, 54, '北山文化\n3代 足利義満', C.red, FILL.red, 12), bx(175, 30, 135, 54, '東山文化\n8代 足利義政', C.blue, FILL.blue, 12), ar(145, 57, 175, 57, C.main), ...cap('前半が北山、後半が東山', C.main)],
  },
  {
    note: '❓なぜ「山」の名前がついているの？→義満が京都の北山に、義政が東山に、それぞれ山荘（さんそう）を建てたからです。だから、文化名は将軍の住んだ場所の名前です。',
    add: [...fresh(bx(10, 20, 135, 44, '義満の山荘\n＝北山', C.red, FILL.red, 12), ar(145, 42, 175, 42, C.main), lb(160, 30, '金閣', 9, C.red, 'middle', true), bx(175, 20, 135, 44, '義政の山荘\n＝東山', C.blue, FILL.blue, 12)), ...band(80, lb(160, 110, '北山＝義満　東山＝義政', 14, C.ink, 'middle', true), lb(160, 138, '文化名と将軍をセットで覚える', 11, C.gray)), ...cap('将軍が建てた山荘の場所が名前になった', C.main, 200)],
  },
  {
    note: '北山文化の代表は金閣（きんかく）です。❓なぜ北山文化は、はなやかなの？→義満のころ、公家（くげ）の文化と武家（ぶけ）の文化が混じり合ったからです。金閣には両方の造りが取り入れられています。',
    add: [...fresh(bx(15, 20, 110, 40, '公家の文化', C.gray, FILL.gray, 12), bx(15, 74, 110, 40, '武家の文化', C.gray, FILL.gray, 12), ar(125, 40, 165, 60, C.red), ar(125, 94, 165, 74, C.red), bx(167, 44, 143, 46, '北山文化\n金閣', C.red, FILL.red, 13)), ...cap('公家と武家の文化が混じり合う', C.red)],
  },
  {
    note: '❓能（のう）はいつ大成した？→義満のころで、観阿弥（かんあみ）・世阿弥（ぜあみ）の親子によってです。❓なぜ大成できた？→義満が2人を保護したからです。能のあいだに演じる、こっけいな劇が狂言（きょうげん）です。',
    add: [...fresh(bx(10, 20, 130, 40, '観阿弥・世阿弥', C.red, FILL.red, 13), ar(140, 40, 178, 40, C.red), bx(180, 20, 130, 40, '能を大成', C.red, FILL.red, 13), bx(10, 84, 130, 34, '義満が保護', C.gray, FILL.gray, 12), ar(75, 84, 75, 62, C.gray)), ...cap('能＝観阿弥・世阿弥（北山文化）', C.red)],
  },
  {
    note: '東山文化は、8代将軍の足利義政のころです。代表は銀閣（ぎんかく）。❓なぜ北山とちがい、簡素なの？→戦乱で世の中が乱れ、はなやかさよりも、簡素（かんそ）で落ち着いた美しさが好まれたといわれます。',
    add: [...fresh(bx(15, 24, 130, 44, '北山\nはなやか', C.red, FILL.red, 13), bx(175, 24, 130, 44, '東山\n簡素・落ち着き', C.blue, FILL.blue, 12), ar(145, 46, 175, 46, C.main)), ...band(90, lb(160, 120, '銀閣（東山文化）', 14, C.blue, 'middle', true)), ...cap('簡素で落ち着いた美しさ', C.blue, 200)],
  },
  {
    note: '❓その簡素な美しさを表す建物は？→書院造（しょいんづくり）です。たたみをしきつめ、障子（しょうじ）・ふすま・床の間（とこのま）を備えています。❓なぜ今の和室に似ている？→書院造が、今の和室のもとになっているからです。',
    add: [...fresh(...room()), ...cap('書院造＝たたみ・障子・ふすま・床の間（今の和室のもと）', C.blue)],
  },
  {
    note: '❓ほかの東山文化は？→雪舟（せっしゅう）の水墨画（すいぼくが）と、枯山水（かれさんすい）の庭です。水墨画は墨だけでえがき、枯山水は水を使わず砂や石で山や川を表します。どちらも簡素な美しさです。',
    add: [...fresh(bx(15, 20, 130, 40, '雪舟', C.blue, FILL.blue, 14), ar(80, 60, 80, 78, C.blue), bx(15, 80, 130, 40, '水墨画（墨だけ）', C.blue, FILL.blue, 12), bx(175, 20, 130, 40, '枯山水の庭', C.blue, FILL.blue, 13), ar(240, 60, 240, 78, C.blue), bx(175, 80, 130, 40, '砂と石で表す', C.blue, FILL.blue, 12)), ...cap('墨だけ・砂と石だけの、簡素な美', C.blue)],
  },
  {
    note: '❓書院造と、まちがえやすい建物は？→平安時代の貴族の寝殿造（しんでんづくり）です。書院造は室町時代の武家の住まい、寝殿造は平安時代の貴族の屋敷で、ひろい1つの部屋を屏風などで区切りました。',
    add: [...fresh(bx(10, 20, 145, 44, '書院造\n室町・武家・東山文化', C.blue, FILL.blue, 10), bx(165, 20, 145, 44, '寝殿造\n平安・貴族・国風文化', C.gray, FILL.gray, 10), bx(10, 80, 145, 34, 'たたみ・障子・床の間', C.blue, FILL.blue, 10), bx(165, 80, 145, 34, 'ひろい部屋を屏風で区切る', C.gray, FILL.gray, 10)), ...cap('書院造（室町）と寝殿造（平安）を混同しない', C.red)],
  },
  {
    note: '❓民衆の文化はどうなった？→狂言、御伽草子（おとぎぞうし）、盆おどりが広まりました。❓なぜ民衆の文化が育った？→民衆が力をつけ、村で自分たちの楽しみをもつようになったからです。',
    add: [...fresh(bx(10, 30, 95, 44, '狂言', C.main, FILL.warm, 14), bx(112, 30, 95, 44, '御伽草子', C.main, FILL.warm, 13), bx(214, 30, 95, 44, '盆おどり', C.main, FILL.warm, 13), lb(160, 100, '民衆が力をつけた', 12, C.ink, 'middle', true)), ...cap('民衆の文化＝狂言・御伽草子・盆おどり', C.main)],
  },
  {
    note: '例題：今の和室のもとになった、たたみと床の間を備えた建築様式は？❓答えは書院造です。東山文化の銀閣にある東求堂（とうぐどう）が代表で、平安の寝殿造と混同しないようにします。',
    add: [...fresh(bx(20, 20, 280, 40, 'たたみ・床の間のある建築様式は？', C.gray, FILL.gray, 13), ar(160, 60, 160, 84, C.blue), bx(60, 86, 200, 40, '書院造（東山文化）', C.green, FILL.green, 15)), ...cap('銀閣の東求堂が代表', C.green)],
  },
]);

// ── 土地制度の移り変わり ──
const tochi: DiagramFigure = show([
  {
    note: '土地を「だれのものにするか」は、時代ごとに大きく変わりました。班田収授法（はんでんしゅうじゅほう）→墾田永年私財法（こんでんえいねんしざいほう）→太閤検地（たいこうけんち）→地租改正（ちそかいせい）→農地改革（のうちかいかく）の順です。❓なぜ変わってきたのでしょう。',
    add: [bx(6, 10, 100, 40, '班田収授法', C.blue, FILL.blue, 11), ar(106, 30, 114, 30, C.main), bx(114, 10, 100, 40, '墾田永年\n私財法', C.blue, FILL.blue, 11), ar(214, 30, 222, 30, C.main), bx(222, 10, 92, 40, '太閤検地', C.blue, FILL.blue, 11), bx(60, 70, 100, 40, '地租改正', C.green, FILL.green, 11), ar(160, 90, 168, 90, C.main), bx(168, 70, 100, 40, '農地改革', C.green, FILL.green, 11), ...cap('5つの制度を順に見ていく', C.main, 190)],
  },
  {
    note: '❓班田収授法とは？→律令国家（りつりょうこっか）では、土地は国のものでした。6歳以上の男女に口分田（くぶんでん）を貸し、死んだら国に返させます。❓なぜ返させる？→土地は国のもので、人に与えるのは貸すだけだからです。',
    add: [...fresh(bx(10, 40, 90, 50, '国', C.blue, FILL.blue, 16), bx(220, 40, 90, 50, '人々', C.gray, FILL.gray, 16), ar(100, 52, 218, 52, C.blue), lb(160, 42, '6歳以上に口分田', 10, C.blue, 'middle', true), ar(218, 78, 100, 78, C.red), lb(160, 92, '死んだら返す', 10, C.red, 'middle', true)), ...cap('土地は国のもの（貸すだけ）', C.blue)],
  },
  {
    note: '❓なぜ、この決まりはくずれた？→人口がふえたのに、口分田の数は同じで足りなくなったからです。❓すると国は？→新しい土地を開墾（かいこん）してもらう必要が出てきました。',
    add: [...fresh(lb(40, 30, '人口', 12, C.red, 'middle', true), ...Array.from({ length: 9 }, (_, k) => ci(80 + k * 26, 30, 9, undefined, C.gray, FILL.gray)), lb(40, 86, '口分田', 12, C.blue, 'middle', true), ...Array.from({ length: 5 }, (_, k) => bx(66 + k * 46, 72, 38, 28, undefined, C.blue, FILL.blue)), lb(160, 120, '人がふえても、田は同じ数', 11, C.gray, 'middle')), ...cap('人口はふえるが、口分田はふえない → 足りない', C.red)],
  },
  {
    note: '❓そこで国が出したのが、743年の墾田永年私財法です。開墾した土地を、永久に自分の物にしてよい、という法律です。❓なぜ人々は開墾した？→自分の土地になれば、収穫を自分の物にできるからです。',
    add: [...fresh(bx(10, 30, 100, 44, '開墾', C.main, FILL.warm, 14), ar(110, 52, 168, 52, C.blue), bx(170, 30, 140, 44, '永久に自分の物', C.blue, FILL.blue, 13), lb(160, 106, '743年', 14, C.red, 'middle', true)), ...cap('墾田永年私財法（743年）', C.blue)],
  },
  {
    note: '❓これで何が起きた？→力のある貴族や寺社が、多くの土地を開墾し、自分の土地（荘園）をふやしました。❓なぜ荘園が広がった？→自分の物にできるので、力のある者ほど大きく開墾できたからです。荘園の広がりが、国の土地を減らしていきます。',
    add: [...fresh(bx(20, 16, 280, 34, '国の土地（はじめ）', C.blue, FILL.blue, 12), ar(160, 50, 160, 66, C.red), bx(20, 68, 110, 34, '国の土地', C.blue, FILL.blue, 12), bx(130, 68, 170, 34, '荘園（貴族・寺社）', C.red, FILL.red, 12), lb(160, 118, '国の土地がどんどん減る', 11, C.gray, 'middle')), ...cap('荘園が広がる ＝ 国の土地が減る', C.red)],
  },
  {
    note: '荘園を終わらせたのが、豊臣秀吉の太閤検地です。全国の田畑を調べ、収穫量を石高（こくだか）で表し、耕作者（こうさくしゃ）を検地帳（けんちちょう）に登録しました。❓なぜ荘園が消える？→土地に重なっていた荘園領主の権利をやめ、耕す人だけを登録したからです。',
    add: [...fresh(bx(15, 20, 130, 34, '荘園領主', C.gray, FILL.gray, 12), ln(15, 20, 145, 54, C.red, false, 3), ln(15, 54, 145, 20, C.red, false, 3), bx(15, 72, 130, 40, '検地帳', C.green, FILL.green, 13), bx(175, 20, 130, 34, '耕作者', C.green, FILL.green, 12), ar(240, 54, 240, 72, C.green), bx(175, 74, 130, 40, '石高で表す', C.green, FILL.green, 12)), ...cap('耕作者を登録＝荘園が消えた', C.green)],
  },
  {
    note: '明治の地租改正（1873年）は、地価の3％を現金で納めさせる制度です。例：地価100円なら3円。❓なぜ現金？→米の出来のよしあしに関係なく、毎年同じ額を国が受け取れて、収入が安定するからです。土地の持ち主もはっきりしました。',
    add: [...fresh(bx(10, 30, 90, 40, '地価\n100円', C.gray, FILL.gray, 12), ar(100, 50, 138, 50, C.blue), lb(119, 38, '3％', 12, C.blue, 'middle', true), bx(140, 30, 90, 40, '3円を\n現金で納める', C.blue, FILL.blue, 10)), ...band(100, lb(160, 118, '1873年（明治）', 12, C.ink, 'middle', true), lb(160, 145, '米の出来に関係なく、国の収入が安定', 11, C.gray)), ...cap('地価の3％を現金で納める', C.blue, 200)],
  },
  {
    note: '戦後の農地改革は、政府が地主の土地を買い上げ、小作人（こさくにん）に安く売りました。❓なぜ行った？→小作人は地主に高い小作料を払って貧しく、民主化のために自作農（じさくのう）をふやす必要があったからです。',
    add: [...fresh(bx(10, 30, 80, 40, '地主', C.gray, FILL.gray, 14), ar(90, 50, 118, 50, C.purple), bx(120, 30, 80, 40, '政府', C.purple, FILL.purple, 14), ar(200, 50, 228, 50, C.purple), lb(214, 84, '安く売る', 10, C.purple, 'middle', true), bx(230, 30, 80, 40, '小作人', C.green, FILL.green, 14), lb(105, 84, '買い上げ', 10, C.purple, 'middle', true), ar(270, 70, 270, 92, C.green), bx(220, 94, 90, 34, '自作農がふえる', C.green, FILL.green, 10)), ...cap('農地改革（戦後）＝自作農をふやす', C.green)],
  },
  {
    note: '❓取りちがえやすいのは？→太閤検地と農地改革です。どちらも「耕す人に土地を結びつける」改革ですが、太閤検地は安土桃山時代に年貢を確実に取るため、農地改革は戦後の民主化のために行われました。目的と時代で区別します。',
    add: [...fresh(bx(10, 16, 145, 32, '太閤検地', C.blue, FILL.blue, 13), bx(165, 16, 145, 32, '農地改革', C.green, FILL.green, 13), bx(10, 56, 145, 32, '安土桃山時代', C.blue, FILL.blue, 12), bx(165, 56, 145, 32, '戦後', C.green, FILL.green, 12), bx(10, 96, 145, 32, '年貢を確実に取る', C.blue, FILL.blue, 11), bx(165, 96, 145, 32, '民主化のため', C.green, FILL.green, 11)), ...cap('目的と時代で区別する', C.red)],
  },
  {
    note: '例題：荘園が広がるきっかけになった743年の法律は？❓開墾した土地の永久の私有を認めた、墾田永年私財法です。班田収授法は「土地は国のもの」という決まりなので、ちがいます。',
    add: [...fresh(bx(20, 20, 280, 40, '荘園が広がるきっかけの743年の法律は？', C.gray, FILL.gray, 12), ar(160, 60, 160, 84, C.blue), bx(40, 86, 240, 40, '墾田永年私財法', C.green, FILL.green, 15)), ...cap('開墾した土地の永久私有を認めた', C.green)],
  },
]);

// ── 江戸時代の交通と三都 ──
const edo: DiagramFigure = show([
  {
    note: '江戸幕府は、江戸の日本橋（にほんばし）を起点とする五街道（ごかいどう）を整備しました。東海道・中山道（なかせんどう）・甲州街道・日光街道・奥州街道の5本です。（図は方角のイメージです）',
    add: [ln(170, 110, 200, 30, C.main, false, 3), ln(170, 110, 270, 44, C.main, false, 3), ln(170, 110, 60, 62, C.main, false, 3), ln(170, 110, 40, 100, C.main, false, 3), ln(170, 110, 70, 145, C.main, false, 3), ci(170, 110, 20, '日本橋', C.red, FILL.red, 9), lb(200, 20, '日光街道', 10, C.ink, 'middle', true), lb(276, 32, '奥州街道', 10, C.ink, 'middle', true), lb(50, 52, '甲州街道', 10, C.ink, 'middle', true), lb(30, 90, '中山道', 10, C.ink, 'middle', true), lb(60, 156, '東海道', 10, C.ink, 'middle', true), ...cap('五街道の起点はすべて江戸の日本橋', C.red)],
  },
  {
    note: '❓なぜ街道をととのえたの？→大名が参勤交代（さんきんこうたい）で江戸と国元を行き来し、幕府の命令も全国に早く伝える必要があったからです。❓なぜ起点が日本橋？→江戸は将軍のいる政治の中心だからです。',
    add: [...fresh(bx(10, 30, 90, 44, '国元\n（大名）', C.gray, FILL.gray, 12), ar(100, 44, 218, 44, C.blue), ar(218, 64, 100, 64, C.blue), bx(220, 30, 90, 44, '江戸\n（将軍）', C.red, FILL.red, 12), lb(160, 34, '参勤交代', 10, C.blue, 'middle', true)), ...cap('参勤交代と命令を伝えるために整備', C.blue)],
  },
  {
    note: '❓五街道の中で、もっとも交通量が多かったのは？→東海道です。江戸と京都を結び、途中に宿場（しゅくば）が置かれました。❓なぜ多い？→江戸と京都という2大都市を結ぶ、いちばん大事な道だからです。',
    add: [...fresh(bx(10, 30, 60, 36, '江戸', C.red, FILL.red, 13), ln(70, 48, 250, 48, C.main, false, 4), ci(105, 48, 6, undefined, C.main, FILL.warm), ci(140, 48, 6, undefined, C.main, FILL.warm), ci(175, 48, 6, undefined, C.main, FILL.warm), ci(210, 48, 6, undefined, C.main, FILL.warm), bx(250, 30, 60, 36, '京都', C.purple, FILL.purple, 13), lb(160, 78, '宿場', 10, C.gray, 'middle')), ...cap('東海道＝江戸と京都を結ぶ', C.main)],
  },
  {
    note: '❓幕府は街道で何を取りしまった？→関所（せきしょ）で「入り鉄砲に出女（でおんな）」を取りしまりました。❓なぜ？→江戸に武器を持ちこまれたり、江戸にいる大名の妻子が逃げ出したりすると、大名の反乱につながるからです。',
    add: [...fresh(bx(120, 30, 80, 60, '関所', C.red, FILL.red, 15), ar(20, 50, 116, 50, C.gray), lb(60, 40, '鉄砲', 11, C.gray, 'middle', true), lb(60, 72, '（江戸へ入る）', 9, C.gray), ar(300, 76, 204, 76, C.gray), lb(262, 66, '大名の妻子', 10, C.gray, 'middle', true), lb(262, 92, '（江戸から出る）', 9, C.gray)), ...cap('入り鉄砲に出女を取りしまり、反乱を防いだ', C.red)],
  },
  {
    note: '❓なぜ陸の道だけでなく、海の航路も発達した？→重い荷物は、馬や人より船のほうが安く大量に運べるからです。東まわり航路・西まわり航路が開かれ、大阪と江戸のあいだは菱垣廻船（ひがきかいせん）・樽廻船（たるかいせん）が結びました。',
    add: [...fresh(bx(10, 16, 90, 30, '東北・日本海側', C.gray, FILL.gray, 10), ar(100, 31, 190, 31, C.blue), lb(145, 20, '西まわり航路', 9, C.blue, 'middle', true), bx(192, 16, 80, 30, '大阪', C.green, FILL.green, 13), bx(10, 62, 90, 30, '東北・太平洋側', C.gray, FILL.gray, 10), ar(100, 77, 190, 77, C.blue), lb(145, 66, '東まわり航路', 9, C.blue, 'middle', true), bx(192, 62, 80, 30, '江戸', C.red, FILL.red, 13), ar(232, 46, 232, 60, C.purple), ar(240, 60, 240, 46, C.purple), lb(290, 54, '菱垣廻船\n樽廻船', 9, C.purple, 'middle', true)), ...cap('船のほうが安い＝航路が発達した', C.blue)],
  },
  {
    note: '江戸時代には、江戸・大阪・京都が「三都（さんと）」と呼ばれる大都市でした。❓それぞれの特色は？→江戸は将軍のおひざもと、大阪は天下の台所、京都は朝廷（ちょうてい）と手工業の都です。',
    add: [...fresh(bx(10, 26, 95, 60, '江戸', C.red, FILL.red, 15), bx(112, 26, 95, 60, '大阪', C.green, FILL.green, 15), bx(214, 26, 95, 60, '京都', C.purple, FILL.purple, 15)), ...band(96, lb(57, 112, '将軍の\nおひざもと', 11, C.red, 'middle', true), lb(160, 112, '天下の台所', 11, C.green, 'middle', true), lb(262, 112, '朝廷と\n手工業の都', 11, C.purple, 'middle', true)), ...cap('江戸・大阪・京都＝三都', C.main, 200)],
  },
  {
    note: '❓大阪はなぜ「天下の台所」と呼ばれた？→全国の年貢米や特産物が集まる、商業の中心地だったからです。❓なぜ集まった？→諸藩（しょはん）が、米や特産物をお金にかえるために、大阪に蔵屋敷（くらやしき）を置いたからです。',
    add: [...fresh(bx(10, 20, 90, 30, '年貢米', C.gray, FILL.gray, 12), bx(10, 60, 90, 30, '特産物', C.gray, FILL.gray, 12), ar(100, 35, 148, 60, C.green), ar(100, 75, 148, 65, C.green), bx(150, 40, 80, 46, '蔵屋敷', C.green, FILL.green, 13), ar(230, 63, 250, 63, C.green), bx(252, 40, 60, 46, '大阪', C.green, FILL.green, 13)), ...cap('全国から集まる＝天下の台所', C.green)],
  },
  {
    note: 'まとめです。五街道の起点は日本橋、東海道は江戸〜京都、関所は入り鉄砲に出女、海の輸送は東まわり・西まわり航路、三都は江戸・大阪・京都。❓迷ったら？→役割（将軍・商業・朝廷）と結びつけます。',
    add: [...fresh(bx(6, 8, 150, 30, '五街道の起点＝日本橋', C.red, FILL.red, 10), bx(164, 8, 150, 30, '東海道＝江戸〜京都', C.main, FILL.warm, 10), bx(6, 44, 150, 30, '関所＝入り鉄砲に出女', C.red, FILL.red, 10), bx(164, 44, 150, 30, '海＝東・西まわり航路', C.blue, FILL.blue, 10), bx(6, 80, 308, 30, '三都＝江戸（将軍）・大阪（台所）・京都（朝廷）', C.green, FILL.green, 10)), ...cap('役割と結びつけて覚える', C.main)],
  },
  {
    note: '例題：大阪が「天下の台所」と呼ばれたのはなぜ？❓答えは、全国の年貢米や特産物が集まる商業の中心地で、諸藩が蔵屋敷を置いていたからです。将軍のおひざもとは江戸なので、取りちがえないようにします。',
    add: [...fresh(bx(20, 20, 280, 40, '大阪が「天下の台所」なのはなぜ？', C.gray, FILL.gray, 13), ar(160, 60, 160, 82, C.green), bx(20, 84, 280, 52, '全国の年貢米・特産物が集まる\n商業の中心地（蔵屋敷）', C.green, FILL.green, 12)), ...cap('将軍のおひざもと＝江戸', C.red)],
  },
]);

export const DIAGRAMS_OLD_SHAKAIG: Record<string, DiagramFigure> = {
  '国連の専門機関': un,
  'PKOと国際協力': pko,
  '地球環境問題とSDGs': sdgs,
  '等高線の読み取り（高さと傾き）': toukousen,
  '縮尺の計算（地図上の長さ→実際の距離）': shukushaku,
  '地図記号の見分け方': chizu,
  '雨温図の読み取り（気候区分の見分け方）': utemp,
  '輸送手段の使い分け（船・航空機・鉄道・トラック）': yuso,
  '飛鳥文化と天平文化': asuka,
  '鎌倉文化と鎌倉新仏教': kamakura,
  '室町文化（北山文化と東山文化）': muromachi,
  '土地制度の移り変わり': tochi,
  '江戸時代の交通と三都': edo,
};
