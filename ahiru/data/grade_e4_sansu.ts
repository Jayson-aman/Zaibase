import type { Question } from './questions-meta';

// 小学4年生・算数（標準カリキュラム／中学受験の応用ではない通常の学習範囲）。
// 単元：大きな数（億・兆）／わり算の筆算（2桁でわる）／角度／
// 垂直・平行と四角形（台形・平行四辺形・ひし形）／概数（四捨五入）／
// 折れ線グラフ／面積（長方形・正方形）／小数のかけ算・わり算／
// 分数（同分母のたし算・ひき算）／直方体・立方体（体積の基礎・展開図）
export const gradeE4SansuQuestions: Question[] = [
  // ===== 大きな数（億・兆） =====
  {
    id: 'grade_e4_sansu_01',
    subject: 'sansu',
    question:
      'ある年の世界の人口は約6250000000人でした。この数を「○億○万」の形で表しましょう。',
    answer: '62億5000万',
    hint: '4桁ごとに区切って考える（一の位グループ・万のグループ・億のグループ）。',
    explanation:
      '6250000000を右から4桁ずつ区切ると「62 | 5000 | 0000」となる。\nいちばん右の4桁「0000」がそのままの数、次の4桁「5000」が万の位のグループ、残った「62」が億の位のグループ。\nよって 62億 ＋ 5000万 ＋ 0 ＝ 62億5000万。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_02',
    subject: 'sansu',
    question: 'ある数を100倍すると80億になりました。もとの数はいくつですか。',
    answer: '8000万',
    hint: '100倍してできた数を100でわると、もとの数にもどる。',
    explanation:
      '80億を数字で書くと 8,000,000,000。\nこれは「もとの数を100倍した数」なので、もとの数は 8,000,000,000 ÷ 100 ＝ 80,000,000。\n80,000,000は8000万なので、もとの数は8000万。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_03',
    subject: 'sansu',
    question:
      'ある市の去年の予算は45億円、今年の予算は52億円でした。2年間の予算の合計はいくらですか。',
    answer: '97億円',
    hint: '「億」を単位のまま、45＋52を計算すればよい。',
    explanation:
      '億の位どうしをそのままたし算する。\n45億 ＋ 52億 ＝ (45＋52)億 ＝ 97億。\nよって2年間の予算の合計は97億円。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_04',
    subject: 'sansu',
    question: '次の3つの数を、大きい順に並べましょう。\n2兆9800億　　3兆500億　　3兆2000億',
    answer: '3兆2000億、3兆500億、2兆9800億',
    hint: 'まず兆の位の数字（2か3か）で大きさを比べ、同じ3兆どうしは億の位で比べる。',
    explanation:
      '3つの数を兆の位で見ると、2兆9800億だけ「2兆台」で、残り2つは「3兆台」なので、2兆9800億がいちばん小さい。\n残った3兆500億と3兆2000億を億の位で比べると、2000億＞500億なので、3兆2000億のほうが大きい。\nよって大きい順に並べると、3兆2000億、3兆500億、2兆9800億となる。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_05',
    subject: 'sansu',
    question: '1兆は1億の何倍ですか。',
    answer: '10000倍',
    hint: '1兆と1億をそれぞれ数字で書いて、位のけたを比べてみよう。',
    explanation:
      '1兆を数字で書くと 1,000,000,000,000。\n1億を数字で書くと 100,000,000。\n1兆 ÷ 1億 ＝ 1,000,000,000,000 ÷ 100,000,000 ＝ 10000。\nよって1兆は1億の10000倍。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    choices: ['100倍', '1000倍', '10000倍', '100000倍'],
  },

  // ===== わり算の筆算（2桁でわる） =====
  {
    id: 'grade_e4_sansu_06',
    subject: 'sansu',
    question: '84冊のノートを21人に同じ数ずつ配ります。1人分は何冊になりますか。',
    answer: '4冊',
    hint: '84 ÷ 21 を筆算で計算しよう。21×4＝84になる。',
    explanation:
      '1人分の数は、全体の冊数を人数でわれば求められる。\n84 ÷ 21 を計算する。21×4＝84なので、ちょうどわり切れる。\nよって1人分は4冊。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_07',
    subject: 'sansu',
    question: '156枚の色紙を13人で同じ数ずつ分けると、1人何枚になりますか。',
    answer: '12枚',
    hint: '156 ÷ 13 を筆算で計算しよう。13×10＝130をひくと26残る。',
    explanation:
      '156 ÷ 13 を筆算で計算する。\n13×10＝130なので、156から130をひくと26残る。\n26 ÷ 13 ＝ 2なので、商は10＋2＝12。\nよって1人12枚になる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_08',
    subject: 'sansu',
    question: '250個のあめを34人に同じ数ずつ配ります。1人何個もらえて、何個あまりますか。',
    answer: '1人7個で、12個あまる',
    hint: '34×7を計算して250に近いか確かめよう。',
    explanation:
      '34×7＝238で、250にいちばん近くこえない数になる。\n250－238＝12なので、12個あまる。\nよって1人7個もらえて、12個あまる（あまりの12は、わる数34より小さいので正しい）。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    pitfall: 'あまりは必ず「わる数」より小さくなる。あまりが34以上になったら計算をやり直そう。',
  },
  {
    id: 'grade_e4_sansu_09',
    subject: 'sansu',
    question: '672ページの本を、1日24ページずつ読みます。何日で読み終わりますか。',
    answer: '28日',
    hint: '672 ÷ 24 を筆算で計算しよう。',
    explanation:
      '672 ÷ 24 を筆算で計算する。\n24×20＝480、672－480＝192。\n192 ÷ 24 ＝ 8なので、商は20＋8＝28。\nよって28日で読み終わる（24×28＝672で確かめられる）。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_10',
    subject: 'sansu',
    question:
      '文化祭のクラス企画で、48人がそれぞれ450円ずつ出し合いました。集まったお金で1個32円のクッキーを買います。クッキーは何個買えて、お金はいくらあまりますか。',
    answer: '675個買えて、あまりは0円',
    hint: 'まず「48×450」で集まったお金を求め、そのあと32でわる。',
    explanation:
      'まず集まったお金を求める。48×450＝21600円。\n次に21600円で1個32円のクッキーが何個買えるか求める。21600 ÷ 32 を計算すると、32×675＝21600なので、ちょうどわり切れる。\nよって675個買えて、あまりは0円。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 角度 =====
  {
    id: 'grade_e4_sansu_11',
    subject: 'sansu',
    question: '三角形の3つの角のうち、2つの角がそれぞれ50°と70°でした。残りの角は何度ですか。',
    answer: '60°',
    hint: '三角形の3つの角の和はいつも180°になる。',
    explanation:
      '三角形の3つの内角の和は180°と決まっている。\n180－50－70＝60。\nよって残りの角は60°。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '2つの角が50°・70°の三角形。残り1つの角の大きさを求める。',
    choices: ['50°', '60°', '70°', '80°'],
  },
  {
    id: 'grade_e4_sansu_12',
    subject: 'sansu',
    question: '一直線上に2つの角があり、一方の角が130°でした。もう一方の角は何度ですか。',
    answer: '50°',
    hint: '一直線がつくる角度は180°。',
    explanation:
      '直線は180°の角とみなせるので、直線上にできる2つの角の和は180°になる。\n180－130＝50。\nよってもう一方の角は50°。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_13',
    subject: 'sansu',
    question:
      '四角形の4つの角のうち、3つの角がそれぞれ90°、80°、110°でした。残りの角は何度ですか。',
    answer: '80°',
    hint: '四角形の4つの角の和はいつも360°になる。',
    explanation:
      '四角形の4つの内角の和は360°と決まっている。\n360－90－80－110＝80。\nよって残りの角は80°。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '3つの角が90°・80°・110°の四角形。残り1つの角の大きさを求める。',
    choices: ['70°', '80°', '90°', '100°'],
  },
  {
    id: 'grade_e4_sansu_14',
    subject: 'sansu',
    question:
      '4時ちょうどのとき、時計の長針と短針がつくる小さいほうの角度は何度ですか。',
    answer: '120°',
    hint: '文字盤は1周360°で12等分されている。1目もりは何度になるか考えよう。',
    explanation:
      '時計の文字盤は360°を12等分しているので、1目もり分（隣り合う数字の間）は 360 ÷ 12 ＝ 30°。\n4時ちょうどは、長針が「12」、短針が「4」を指している。\n「12」から「4」までは4目もり分はなれているので、角度は 30×4＝120°。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    memoryTip: '時計の長針・短針は、1時間ごとに30°ずつずれる。',
  },
  {
    id: 'grade_e4_sansu_15',
    subject: 'sansu',
    question:
      '二等辺三角形の頂角（2つの等しい辺にはさまれた角）が40°のとき、底角（残り2つの等しい角）はそれぞれ何度ですか。',
    answer: '70°',
    hint: 'まず三角形の内角の和180°から頂角をひき、残りを2つの底角で等しく分ける。',
    explanation:
      '三角形の内角の和は180°なので、底角2つの和は 180－40＝140°。\n二等辺三角形は底角どうしが等しいので、140 ÷ 2 ＝ 70。\nよって底角はそれぞれ70°。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '頂角40°の二等辺三角形。等しい2つの底角の大きさを求める。',
  },

  // ===== 垂直・平行と四角形（台形・平行四辺形・ひし形） =====
  {
    id: 'grade_e4_sansu_16',
    subject: 'sansu',
    question: '平行四辺形で1つの角が65°のとき、となり合う角は何度ですか。',
    answer: '115°',
    hint: '平行四辺形は、となり合う角の和がいつも180°になる。',
    explanation:
      '平行四辺形では、となり合う2つの角の和は180°になる性質がある（向かい合う辺が平行だから）。\n180－65＝115。\nよってとなり合う角は115°。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '1つの角が65°の平行四辺形。となり合う角の大きさを求める。',
    pitfall:
      '平行四辺形の「向かい合う角」は等しく（65°）、「となり合う角」の和は180°になる。混同しないように注意。',
  },
  {
    id: 'grade_e4_sansu_17',
    subject: 'sansu',
    question: '1辺が6cmのひし形のまわりの長さは何cmですか。',
    answer: '24cm',
    hint: 'ひし形は4つの辺の長さがすべて等しい。',
    explanation:
      'ひし形は4つの辺の長さがすべて等しい四角形。\n1辺6cmが4本分なので、6×4＝24。\nよってまわりの長さは24cm。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '1辺6cmのひし形。4つの辺の長さがすべて等しいことを示す。',
  },
  {
    id: 'grade_e4_sansu_18',
    subject: 'sansu',
    question: '1組の辺だけが平行になっている四角形を何といいますか。',
    answer: '台形',
    hint: '2組とも平行なら平行四辺形。1組だけならこの図形。',
    explanation:
      '四角形のうち、向かい合う1組の辺だけが平行になっているものを台形という。\n2組とも平行なものは平行四辺形、平行四辺形の中でも4辺の長さが等しいものはひし形とよばれる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '1組の辺だけが平行な四角形（台形）。',
    choices: ['正方形', '台形', 'ひし形', '平行四辺形'],
  },
  {
    id: 'grade_e4_sansu_19',
    subject: 'sansu',
    question:
      '2本の直線が交わってできる角が90°のとき、この2本の直線はどんな関係にあるといいますか。',
    answer: '垂直',
    hint: '直角に交わる2本の直線の関係を表すことば。',
    explanation:
      '2本の直線が交わって90°（直角）ができるとき、その2本の直線は「垂直」であるという。\nいっぽう、どこまでのばしても交わらない2本の直線は「平行」であるという。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '90°に交わる2本の直線（垂直の関係）。',
  },
  {
    id: 'grade_e4_sansu_20',
    subject: 'sansu',
    question: '平行四辺形の1つの辺が9cm、それとなり合う辺が6cmのとき、まわりの長さは何cmですか。',
    answer: '30cm',
    hint: '平行四辺形は、向かい合う辺の長さが等しい。',
    explanation:
      '平行四辺形は向かい合う辺の長さが等しいので、9cmの辺が2本、6cmの辺が2本ある。\nまわりの長さ＝(9＋6)×2＝15×2＝30。\nよってまわりの長さは30cm。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '2辺が9cm・6cmの平行四辺形。まわりの長さを求める。',
  },

  // ===== 概数（四捨五入） =====
  {
    id: 'grade_e4_sansu_21',
    subject: 'sansu',
    question:
      'ある学校の児童数は3482人です。四捨五入して百の位までの概数で表しましょう。',
    answer: '3500人',
    hint: '百の位までの概数にするときは、1つ下の「十の位」の数字を見て四捨五入する。',
    explanation:
      '百の位までの概数にするには、その1つ下の十の位（3482の「8」）を見る。\n8は5以上なので切り上げて、百の位を1つ大きくする。\n3482 → 3500。\nよって3500人。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    pitfall: '「百の位までの概数」を作るときに見るのは百の位ではなく、1つ下の十の位の数字。',
  },
  {
    id: 'grade_e4_sansu_22',
    subject: 'sansu',
    question:
      'ある工場で1年間に作られた製品の数は7328個でした。四捨五入して千の位までの概数にしましょう。',
    answer: '7000個',
    hint: '千の位までの概数にするときは、1つ下の「百の位」の数字を見て四捨五入する。',
    explanation:
      '千の位までの概数にするには、その1つ下の百の位（7328の「3」）を見る。\n3は5未満なので切り捨てる。\n7328 → 7000。\nよって7000個。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_23',
    subject: 'sansu',
    question:
      '四捨五入して百の位までの概数にすると2400になる整数の範囲を、「以上」「未満」を使って表しましょう。',
    answer: '2350以上2450未満',
    hint: '2400より小さい側でぎりぎり切り上がる数と、2400より大きい側でぎりぎり切り上がらない数を考える。',
    explanation:
      '四捨五入して2400になるのは、十の位が5以上で切り上がって2400になる数と、そのまま2400のままで切り捨てになる数の範囲。\n下の境目は2350（十の位が5なので切り上げて2400になる、ここより下は2300に切り捨てられる）。\n上の境目は2450手前まで（2450になると切り上げて2500になってしまう）。\nよって範囲は「2350以上2450未満」。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '数直線上に2350から2450までの範囲を示し、四捨五入して2400になる整数の範囲を表す。',
  },
  {
    id: 'grade_e4_sansu_24',
    subject: 'sansu',
    question:
      '1個298円のパンを4個買います。代金の合計を百の位までの概数で見積もりましょう。',
    answer: '約1200円',
    hint: '298円を百の位までの概数にしてから4倍する。',
    explanation:
      '298円を百の位までの概数にすると、十の位の9は5以上なので切り上げて300円になる。\n300×4＝1200。\nよって代金の合計はおよそ1200円と見積もれる。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_25',
    subject: 'sansu',
    question:
      '四捨五入して十の位までの概数にすると350になる整数のうち、いちばん小さい数といちばん大きい数をそれぞれ答えましょう。',
    answer: 'いちばん小さい数は345、いちばん大きい数は354',
    hint: '350になる範囲は「345以上355未満」であることを利用する。',
    explanation:
      '四捨五入して十の位までの概数が350になるのは、一の位が5以上で切り上がる数と、そのまま350になる数をあわせた範囲。\nその範囲は「345以上355未満」になる。\nこの範囲でいちばん小さい整数は345、いちばん大きい整数は354（355は範囲に入らない）。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '数直線上に345から355までの範囲を示し、四捨五入して350になる整数のはしの値を示す。',
  },

  // ===== 折れ線グラフ =====
  {
    id: 'grade_e4_sansu_26',
    subject: 'sansu',
    question:
      '下のグラフは、ある日の午前9時から午後3時までの気温の変化を表したものです（9時18℃、10時20℃、11時23℃、12時25℃、13時26℃、14時24℃、15時22℃）。気温がいちばん高かったのは何時ですか。',
    answer: '午後1時',
    hint: 'グラフの中でいちばん高い点を探そう。13時は午後1時にあたる。',
    explanation:
      '7つの時こくの気温を比べると、13時の26℃がいちばん高い。\n13時は正午（12時）から1時間後なので、午後1時にあたる。\nよって気温がいちばん高かったのは午後1時。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '午前9時から午後3時までの気温の変化を表す折れ線グラフ。13時（午後1時）が最高気温26℃。',
    choices: ['午前11時', '午後12時（正午）', '午後1時', '午後2時'],
  },
  {
    id: 'grade_e4_sansu_27',
    subject: 'sansu',
    question:
      '同じ日の気温のグラフ（9時18℃、10時20℃、11時23℃、12時25℃、13時26℃、14時24℃、15時22℃）で、気温の上がり方がいちばん大きかったのは、何時から何時までの間ですか。',
    answer: '午前10時から午前11時までの間',
    hint: '1時間ごとの気温の差を計算して、いちばん大きい差を見つけよう。',
    explanation:
      '1時間ごとの気温の変化を計算する。\n9時→10時：20－18＝2℃、10時→11時：23－20＝3℃、11時→12時：25－23＝2℃、12時→13時：26－25＝1℃、13時→14時：24－26＝－2℃、14時→15時：22－24＝－2℃。\nこの中でいちばん大きい上がり方は+3℃で、10時から11時の間。\nよって答えは午前10時から午前11時までの間。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '午前9時から午後3時までの気温の変化を表す折れ線グラフ。10時→11時の区間の傾きがいちばん急。',
  },
  {
    id: 'grade_e4_sansu_28',
    subject: 'sansu',
    question:
      '下のグラフは、育てているヒマワリの高さの変化を表したものです（1週目10cm、2週目18cm、3週目29cm、4週目45cm、5週目58cm）。4週目から5週目までの間に、ヒマワリは何cm伸びましたか。',
    answer: '13cm',
    hint: '5週目の高さから4週目の高さをひく。',
    explanation:
      '4週目は45cm、5週目は58cm。\n58－45＝13。\nよって4週目から5週目までの間に13cm伸びた。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: 'ヒマワリの高さの変化（1〜5週目：10cm・18cm・29cm・45cm・58cm）を表す折れ線グラフ。',
  },
  {
    id: 'grade_e4_sansu_29',
    subject: 'sansu',
    question:
      '同じヒマワリのグラフ（1週目10cm、2週目18cm、3週目29cm、4週目45cm、5週目58cm）で、1週目から5週目までの間に、ヒマワリの高さは何cm伸びましたか。',
    answer: '48cm',
    hint: '5週目の高さから1週目の高さをひく。',
    explanation:
      '1週目は10cm、5週目は58cm。\n58－10＝48。\nよって1週目から5週目までの間に48cm伸びた。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: 'ヒマワリの高さの変化（1〜5週目：10cm・18cm・29cm・45cm・58cm）を表す折れ線グラフ。',
  },
  {
    id: 'grade_e4_sansu_30',
    subject: 'sansu',
    question:
      '同じヒマワリのグラフ（1週目10cm、2週目18cm、3週目29cm、4週目45cm、5週目58cm）について、「3週目から4週目までの間に伸びた高さ」と「4週目から5週目までの間に伸びた高さ」では、どちらが大きいですか。',
    answer: '3週目から4週目までの間（16cmで、4週目から5週目の13cmより大きい）',
    hint: 'それぞれの区間で伸びた高さを計算して比べよう。',
    explanation:
      '3週目から4週目：45－29＝16cm。\n4週目から5週目：58－45＝13cm。\n16cm＞13cmなので、3週目から4週目までの間のほうが大きく伸びている。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: 'ヒマワリの高さの変化（1〜5週目：10cm・18cm・29cm・45cm・58cm）を表す折れ線グラフ。区間ごとの伸びを比べる。',
  },

  // ===== 面積（長方形・正方形） =====
  {
    id: 'grade_e4_sansu_31',
    subject: 'sansu',
    question: '縦8cm、横15cmの長方形の花だんがあります。面積は何c㎡ですか。',
    answer: '120c㎡',
    hint: '長方形の面積＝縦×横。',
    explanation:
      '長方形の面積は「縦×横」で求められる。\n8×15＝120。\nよって面積は120c㎡。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '縦8cm・横15cmの長方形。',
    choices: ['23c㎡', '46c㎡', '120c㎡', '150c㎡'],
  },
  {
    id: 'grade_e4_sansu_32',
    subject: 'sansu',
    question: '1辺12cmの正方形の折り紙があります。面積は何c㎡ですか。',
    answer: '144c㎡',
    hint: '正方形の面積＝1辺×1辺。',
    explanation:
      '正方形の面積は「1辺×1辺」で求められる。\n12×12＝144。\nよって面積は144c㎡。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '1辺12cmの正方形。',
  },
  {
    id: 'grade_e4_sansu_33',
    subject: 'sansu',
    question: '面積96c㎡の長方形の花だんで、縦の長さが8cmのとき、横の長さは何cmですか。',
    answer: '12cm',
    hint: '面積＝縦×横なので、面積÷縦＝横になる。',
    explanation:
      '長方形の面積＝縦×横なので、横＝面積÷縦で求められる。\n96 ÷ 8 ＝ 12。\nよって横の長さは12cm。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '面積96c㎡・縦8cmの長方形。横の長さを求める。',
  },
  {
    id: 'grade_e4_sansu_34',
    subject: 'sansu',
    question:
      'たて10m、横14mの長方形の土地から、たて4m、横6mの長方形を切り取りました。残りの土地の面積は何㎡ですか。',
    answer: '116㎡',
    hint: '大きい長方形の面積から、切り取った長方形の面積をひく。',
    explanation:
      'もとの土地の面積は 10×14＝140㎡。\n切り取った長方形の面積は 4×6＝24㎡。\n残りの面積は 140－24＝116。\nよって残りの土地の面積は116㎡。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: 'たて10m・横14mの長方形の土地から、たて4m・横6mの長方形を切り取ったL字形の図。',
  },
  {
    id: 'grade_e4_sansu_35',
    subject: 'sansu',
    question: '1辺が30mの正方形の畑があります。この畑の面積は何aですか。（1a＝100㎡）',
    answer: '9a',
    hint: 'まず㎡で面積を求め、そのあとaに直そう。',
    explanation:
      'まず面積を㎡で求める。30×30＝900㎡。\n1a＝100㎡なので、㎡をaに直すには100でわる。\n900 ÷ 100 ＝ 9。\nよって畑の面積は9a。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '1辺30mの正方形の畑。面積を㎡からaに単位変換する。',
  },

  // ===== 小数のかけ算・わり算 =====
  {
    id: 'grade_e4_sansu_36',
    subject: 'sansu',
    question: '1本2.3Lのジュースが4本あります。ジュースは全部で何Lありますか。',
    answer: '9.2L',
    hint: '2.3×4を、整数のかけ算と同じように筆算しよう。',
    explanation:
      '2.3を10倍して整数にすると23。23×4＝92。\n2.3は23を10でわった数なので、答えも92を10でわって9.2にする。\nよって2.3×4＝9.2Lとなる。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    choices: ['6.9L', '8.2L', '9.2L', '9.4L'],
  },
  {
    id: 'grade_e4_sansu_37',
    subject: 'sansu',
    question: '8.4mのリボンを4人で同じ長さずつ分けます。1人分は何mになりますか。',
    answer: '2.1m',
    hint: '8.4÷4を、整数のわり算と同じように筆算しよう。',
    explanation:
      '8.4 ÷ 4 を筆算で計算する。\n8 ÷ 4 ＝ 2、0.4 ÷ 4 ＝ 0.1なので、あわせて2.1。\nよって1人分は2.1m。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_38',
    subject: 'sansu',
    question: '1個1.75kgの荷物が6個あります。全部で何kgですか。',
    answer: '10.5kg',
    hint: '1.75を100倍して175にしてから計算し、あとで100でわろう。',
    explanation:
      '1.75を100倍すると175になる。175×6＝1050。\n1050を100でわると10.5になる。\nよって1.75×6＝10.5kg。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_39',
    subject: 'sansu',
    question: '12.6Lの水を7個の水そうに同じ量ずつ分けます。1つの水そうは何Lになりますか。',
    answer: '1.8L',
    hint: '12.6÷7を、整数のわり算と同じように筆算しよう。',
    explanation:
      '12.6 ÷ 7 を筆算で計算する。\n12 ÷ 7 ＝ 1あまり5、5.6 ÷ 7 ＝ 0.8なので、あわせて1.8。\nよって1つの水そうは1.8L。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
  },
  {
    id: 'grade_e4_sansu_40',
    subject: 'sansu',
    question: '1箱2.4kgのみかんが9箱あります。全部で何kgですか。',
    answer: '21.6kg',
    hint: '2.4を10倍して24にしてから計算し、あとで10でわろう。',
    explanation:
      '2.4を10倍すると24になる。24×9＝216。\n216を10でわると21.6になる。\nよって2.4×9＝21.6kg。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    pitfall: '小数のかけ算では、最後に小数点をうつ位置を忘れないこと。整数で計算してから、けた数にあわせて小数点をもどす。',
  },
  {
    id: 'grade_e4_sansu_41',
    subject: 'sansu',
    question:
      '1本1.2Lのペットボトルのお茶が8本あります。これを3人で同じ量ずつ分けると、1人分は何Lになりますか。',
    answer: '3.2L',
    hint: 'まず全部のお茶の量を求め、そのあと3でわろう。',
    explanation:
      'まず全体の量を求める。1.2×8＝9.6L。\n次に9.6Lを3人で分ける。9.6 ÷ 3 ＝ 3.2。\nよって1人分は3.2L。',
    difficulty: 'advanced',
    examType: 'chugaku',
    grade: 'e4',
  },

  // ===== 分数（同分母のたし算・ひき算） =====
  {
    id: 'grade_e4_sansu_42',
    subject: 'sansu',
    question:
      'ジュースを2/7L飲んで、そのあとさらに3/7L飲みました。合わせて何Lのみましたか。',
    answer: '5/7L',
    hint: '分母が同じ分数どうしのたし算は、分子だけをたす。',
    explanation:
      '分母が同じ分数のたし算は、分母はそのままにして分子だけをたす。\n2/7 ＋ 3/7 ＝ (2＋3)/7 ＝ 5/7。\nよって合わせて5/7Lのんだ。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '2/7Lと3/7Lの量を表す棒グラフ。合わせて5/7Lになることを示す。',
    choices: ['1/7L', '5/7L', '5/14L', '6/7L'],
  },
  {
    id: 'grade_e4_sansu_43',
    subject: 'sansu',
    question: '5/8mのテープがありました。そこから2/8m使いました。残りは何mですか。',
    answer: '3/8m',
    hint: '分母が同じ分数どうしのひき算は、分子だけをひく。',
    explanation:
      '分母が同じ分数のひき算は、分母はそのままにして分子だけをひく。\n5/8 － 2/8 ＝ (5－2)/8 ＝ 3/8。\nよって残りは3/8m。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '5/8mのテープから2/8mを使い、残り3/8mになる様子を表す棒グラフ。',
  },
  {
    id: 'grade_e4_sansu_44',
    subject: 'sansu',
    question:
      '水そうに1と2/5Lの水と、1と1/5Lの水を合わせて入れました。全部で何Lになりますか。',
    answer: '2と3/5L',
    hint: '整数の部分どうし、分数の部分どうしを、それぞれ分けてたそう。',
    explanation:
      '整数の部分どうしをたす。1＋1＝2。\n分数の部分どうしをたす。2/5＋1/5＝3/5。\n両方をあわせると、2と3/5。\nよって全部で2と3/5L。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '数直線上に1と2/5、1と1/5、和である2と3/5の位置を示す。',
  },
  {
    id: 'grade_e4_sansu_45',
    subject: 'sansu',
    question: '3mのリボンから1と2/5mを切り取りました。残りは何mですか。',
    answer: '1と3/5m',
    hint: '整数の3を「2と5/5」に直してから、分数のひき算をしよう。',
    explanation:
      '3から1と2/5をそのままひくと、分数の部分がひけない。\nそこで3を「2と5/5」に直す。\n整数の部分：2－1＝1。分数の部分：5/5－2/5＝3/5。\nあわせて1と3/5。\nよって残りは1と3/5m。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '数直線上に3m、切り取った1と2/5m、残りの1と3/5mの位置を示す。',
    pitfall: '整数から分数をひくときは、整数を「1少ない整数＋分子と同じ分母の仮分数」に直してから計算する。',
  },

  // ===== 直方体・立方体（体積の基礎、展開図） =====
  {
    id: 'grade_e4_sansu_46',
    subject: 'sansu',
    question: '1辺4cmの立方体の積み木があります。体積は何c㎥ですか。',
    answer: '64c㎥',
    hint: '立方体の体積＝1辺×1辺×1辺。',
    explanation:
      '立方体の体積は「1辺×1辺×1辺」で求められる。\n4×4×4＝64。\nよって体積は64c㎥。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '1辺4cmの立方体。',
    choices: ['12c㎥', '16c㎥', '48c㎥', '64c㎥'],
  },
  {
    id: 'grade_e4_sansu_47',
    subject: 'sansu',
    question: 'たて3cm、横5cm、高さ6cmの直方体の体積は何c㎥ですか。',
    answer: '90c㎥',
    hint: '直方体の体積＝たて×横×高さ。',
    explanation:
      '直方体の体積は「たて×横×高さ」で求められる。\n3×5×6＝90。\nよって体積は90c㎥。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: 'たて3cm・横5cm・高さ6cmの直方体。',
  },
  {
    id: 'grade_e4_sansu_48',
    subject: 'sansu',
    question: '体積120c㎥の直方体で、たて4cm、横5cmのとき、高さは何cmですか。',
    answer: '6cm',
    hint: 'まずたて×横で底面積を求め、体積をその底面積でわろう。',
    explanation:
      'たて×横の面（底面）の面積を求める。4×5＝20c㎡。\n体積＝底面積×高さなので、高さ＝体積÷底面積になる。\n120 ÷ 20 ＝ 6。\nよって高さは6cm。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '体積120c㎥、たて4cm、横5cmの直方体。高さを求める。',
  },
  {
    id: 'grade_e4_sansu_49',
    subject: 'sansu',
    question: '立方体には、面がいくつ、辺がいくつ、頂点がいくつありますか。',
    answer: '面6つ、辺12本、頂点8つ',
    hint: 'サイコロの形を思いうかべて、面・辺・頂点をそれぞれ数えよう。',
    explanation:
      '立方体（サイコロの形）は、正方形の面が6つ（上下・前後・左右）、辺が12本、頂点（かどの点）が8つある。\nよって面6つ、辺12本、頂点8つ。',
    difficulty: 'basic',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '立方体の面・辺・頂点の数を確認する図。',
  },
  {
    id: 'grade_e4_sansu_50',
    subject: 'sansu',
    question:
      '下の展開図はある立方体の展開図です。十字形に並んだ6つの面には、上から順に「あ・い・う・え」、そのまん中の段の左右に「お・か」がついています。この展開図を組み立てたとき、「あ」の面と向かい合う面はどれですか。',
    answer: 'う',
    hint: '縦に並んだ4つの面は、1つとばしの面どうしが向かい合う。',
    explanation:
      '十字形の展開図で縦に並んだ4面「あ・い・う・え」は、組み立てると側面を1周する帯になる。\nこのとき、1つとばしになっている面どうしが向かい合うので、「あ」と「う」、「い」と「え」がそれぞれ向かい合う。\n左右に張り出した「お」と「か」も、組み立てると向かい合う1組になる。\nよって「あ」の面と向かい合うのは「う」。',
    difficulty: 'standard',
    examType: 'chugaku',
    grade: 'e4',
    figureDescription: '十字形の立方体の展開図（あ・い・う・え・お・か）。組み立てたときに向かい合う面を考える。',
  },
];
