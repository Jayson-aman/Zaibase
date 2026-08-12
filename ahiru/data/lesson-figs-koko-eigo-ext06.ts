import type { Figure } from './figures';

// 高校受験 英語「名詞・冠詞・代名詞・形容詞・副詞」拡張ユニット
// （koko_eigo_s181〜koko_eigo_s220）の教科書用図解。
// キーは lessons-koko-eigo-ext06.ts の figureId と対応（40課中18課）。
// 英語は図解が馴染みにくい教科なので、「分類の内訳（pieChart）」「二軸の対応表（coordinate）」
// 「度合い・容量（barChart）」「並び順（numberLine）」など、
// 図にすることで本当に理解が進む箇所にだけ付けてある。
export const lessonFigsKokoEigoExt06: Record<string, Figure> = {
  // s181：代表的な名詞20語を、可算・不可算のタイプ別に分類した内訳
  lf_kokoeigoext06_181: {
    kind: 'pieChart',
    slices: [
      { label: '可算・普通名詞 8語', value: 8 },
      { label: '可算・集合名詞 3語', value: 3 },
      { label: '不可算・物質名詞 4語', value: 4 },
      { label: '不可算・抽象名詞 4語', value: 4 },
      { label: '不可算・固有名詞 1語', value: 1 },
    ],
    caption:
      '代表的な名詞20語の分類。可算・普通名詞8＝book, apple, student, dog, car, chair, egg, question／可算・集合名詞3＝family, team, class／不可算・物質名詞4＝water, bread, paper, money／不可算・抽象名詞4＝information, advice, homework, news／固有名詞1＝Japan。20語中11語が可算、9語が不可算',
  },

  // s183：不可算名詞15語を三つのタイプ（物質・抽象・固有）に分けた内訳
  lf_kokoeigoext06_183: {
    kind: 'pieChart',
    slices: [
      { label: '物質名詞 6語', value: 6 },
      { label: '抽象名詞 6語', value: 6 },
      { label: '固有名詞 3語', value: 3 },
    ],
    caption:
      '不可算名詞15語のタイプ別内訳。物質名詞6＝water, milk, bread, paper, rice, money／抽象名詞6＝information, advice, homework, news, work, peace／固有名詞3＝Japan, Tom, Monday。どれも「輪郭がなく1つ2つと切り分けられない」という点で共通する',
  },

  // s186：容器を表す単位語の容量めやす（どの語を選ぶかは器の大きさで決まる）
  lf_kokoeigoext06_186: {
    kind: 'barChart',
    xLabel: '容器を表す単位語',
    yLabel: '容量のめやす（mL）',
    yMax: 600,
    bars: [
      { label: 'a cup of（コーヒー）', value: 150 },
      { label: 'a glass of（水）', value: 200 },
      { label: 'a can of（ジュース）', value: 350 },
      { label: 'a bottle of（水）', value: 500 },
    ],
    caption:
      '容器で数える単位語と容量のめやす。カップ約150mL、コップ約200mL、缶約350mL、ペットボトル約500mL。温かい飲み物は cup、冷たい飲み物は glass を使う。複数にするときは cups / glasses のように単位語のほうに -s を付け、of の後ろの不可算名詞は裸のまま変えない',
  },

  // s188：数量形容詞を「可算か不可算か」×「量の多少」の二軸に配置
  lf_kokoeigoext06_188: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 4],
    points: [
      { x: 1, y: 3, label: 'many（可算・多い）' },
      { x: 3, y: 3, label: 'much（不可算・多い）' },
      { x: 2, y: 3.6, label: 'a lot of（両方に使える）' },
      { x: 1, y: 2, label: 'a few（可算・少しある）' },
      { x: 3, y: 2, label: 'a little（不可算・少しある）' },
      { x: 1, y: 1, label: 'few（可算・ほとんどない）' },
      { x: 3, y: 1, label: 'little（不可算・ほとんどない）' },
    ],
    caption:
      '数量形容詞の二軸マップ。横軸は左が可算名詞用（x＝1）、右が不可算名詞用（x＝3）。縦軸は上ほど量が多い（y＝3：たくさん／y＝2：少しはある／y＝1：ほとんどない）。左右で many⇔much、a few⇔a little、few⇔little が対応し、a の有無で肯定的（少しある）か否定的（ほとんどない）かが決まる。a lot of は両方に使えるので中央上に置いた',
  },

  // s190：a と an は「つづり」ではなく「発音」で決まることを二軸で示す
  lf_kokoeigoext06_190: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 4],
    points: [
      { x: 1, y: 3, label: 'an apple / an umbrella（母音字・母音）' },
      { x: 3, y: 3, label: 'an hour / an honest man（子音字・母音）' },
      { x: 1, y: 1, label: 'a university / a uniform（母音字・子音）' },
      { x: 3, y: 1, label: 'a book / a car（子音字・子音）' },
    ],
    caption:
      'a と an を決める二軸。横軸はつづり（x＝1：a,e,i,o,u で始まる／x＝3：それ以外の文字で始まる）、縦軸は発音（y＝3：母音の音で始まる／y＝1：子音の音で始まる）。an になるのは上の段（発音が母音）だけで、つづりは関係しない。university は「ユ」と読むので a、hour は h を読まないので an になる',
  },

  // s192：冠詞の選び方を「特定できるか」×「可算の単数か」の二軸で整理
  lf_kokoeigoext06_192: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 4],
    points: [
      { x: 1, y: 3, label: 'a / an（不特定・可算単数）' },
      { x: 3, y: 3, label: 'the（特定・可算単数）' },
      { x: 1, y: 1, label: '無冠詞（不特定・複数／不可算）' },
      { x: 3, y: 1, label: 'the（特定・複数／不可算）' },
    ],
    caption:
      '冠詞を選ぶ二軸。横軸は聞き手が特定できるか（x＝1：できない／x＝3：できる）、縦軸は名詞の形（y＝3：可算の単数／y＝1：可算の複数または不可算）。右側は形にかかわらずすべて the になるので、まず「特定できるか」を先に判断する。左下（不特定の複数・不可算）だけが無冠詞になり、必要なら some を付ける',
  },

  // s197：無冠詞なら「本来の目的」、the が付けば「建物・モノ」を指す対比
  lf_kokoeigoext06_197: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 4],
    points: [
      { x: 1, y: 3, label: 'go to school（勉強しに通う）' },
      { x: 3, y: 3, label: 'go to the school（その建物へ行く）' },
      { x: 1, y: 1, label: 'go to bed（寝る）' },
      { x: 3, y: 1, label: 'sit on the bed（家具としてのベッド）' },
    ],
    caption:
      '無冠詞と the の対比。横軸が左（x＝1）なら本来の目的のために使っている場合で無冠詞、右（x＝3）なら建物や家具そのものを指す場合で the が付く。縦軸は上段が school、下段が bed の例。in hospital（入院している）と go to the hospital（病院という建物へ行く）、go to church（礼拝に行く）と go to the church（その教会へ行く）も同じ対比になる',
  },

  // s199：人称代名詞の格変化を「人称・数」×「格」の二軸表として示す
  lf_kokoeigoext06_199: {
    kind: 'coordinate',
    xRange: [0, 7],
    yRange: [0, 4],
    points: [
      { x: 1, y: 3, label: 'I' },
      { x: 2, y: 3, label: 'you' },
      { x: 3, y: 3, label: 'he' },
      { x: 4, y: 3, label: 'she' },
      { x: 5, y: 3, label: 'we' },
      { x: 6, y: 3, label: 'they' },
      { x: 1, y: 2, label: 'my' },
      { x: 2, y: 2, label: 'your' },
      { x: 3, y: 2, label: 'his' },
      { x: 4, y: 2, label: 'her' },
      { x: 5, y: 2, label: 'our' },
      { x: 6, y: 2, label: 'their' },
      { x: 1, y: 1, label: 'me' },
      { x: 2, y: 1, label: 'you' },
      { x: 3, y: 1, label: 'him' },
      { x: 4, y: 1, label: 'her' },
      { x: 5, y: 1, label: 'us' },
      { x: 6, y: 1, label: 'them' },
    ],
    caption:
      '人称代名詞の格変化表。横軸が人称と数（x＝1：I／2：you／3：he／4：she／5：we／6：they）、縦軸が格（y＝3：主格＝主語になる形／y＝2：所有格＝「〜の」／y＝1：目的格＝動詞・前置詞の後ろ）。you は主格と目的格が同じ形、her は所有格と目的格が同じ形になる点に注意する',
  },

  // s200：所有格と所有代名詞の対応（上下でペアになる）
  lf_kokoeigoext06_200: {
    kind: 'coordinate',
    xRange: [0, 7],
    yRange: [0, 3],
    points: [
      { x: 1, y: 2, label: 'my' },
      { x: 2, y: 2, label: 'your' },
      { x: 3, y: 2, label: 'his' },
      { x: 4, y: 2, label: 'her' },
      { x: 5, y: 2, label: 'our' },
      { x: 6, y: 2, label: 'their' },
      { x: 1, y: 1, label: 'mine' },
      { x: 2, y: 1, label: 'yours' },
      { x: 3, y: 1, label: 'his' },
      { x: 4, y: 1, label: 'hers' },
      { x: 5, y: 1, label: 'ours' },
      { x: 6, y: 1, label: 'theirs' },
    ],
    caption:
      '所有格（y＝2）と所有代名詞（y＝1）の対応。横軸は人称（x＝1：I／2：you／3：he／4：she／5：we／6：they）。上段は必ず後ろに名詞が続き（my bike）、下段は一語で「〜のもの」を表す（This bike is mine.）。his だけは上下が同じ形で、it には所有代名詞がない（its は所有格のみ）',
  },

  // s202：and で人を並べるときの順序
  lf_kokoeigoext06_202: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'you（2人称）' },
      { x: 2, label: 'he / she（3人称）' },
      { x: 3, label: 'I（1人称）' },
    ],
    segments: [{ from: 1, to: 3 }],
    caption:
      'and で人を並べるときの順序は「2人称 → 3人称 → 1人称」。自分（I）を最後に置くのが英語の習慣である。例）You, Tom and I are in the same class.／Tom and I went to the museum. ただし悪いことを述べるときだけ I and Tom broke the window. のように自分を先に置く',
  },

  // s203：再帰代名詞を「人称」×「単数・複数」の二軸で示す
  lf_kokoeigoext06_203: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 4],
    points: [
      { x: 1, y: 1, label: 'myself（1人称・単数）' },
      { x: 2, y: 1, label: 'yourself（2人称・単数）' },
      { x: 3, y: 1, label: 'himself / herself / itself' },
      { x: 1, y: 3, label: 'ourselves（1人称・複数）' },
      { x: 2, y: 3, label: 'yourselves（2人称・複数）' },
      { x: 3, y: 3, label: 'themselves（3人称・複数）' },
    ],
    caption:
      '再帰代名詞の一覧。横軸が人称（x＝1：1人称／2：2人称／3：3人称）、縦軸が数（y＝1：単数で語尾 -self／y＝3：複数で語尾 -selves）。1・2人称は所有格に付け（my+self, our+selves）、3人称は目的格に付ける（him+self, them+selves）。したがって hisself・theirselves という形は存在しない',
  },

  // s205：指示代名詞を「距離」×「数」の二軸で示す
  lf_kokoeigoext06_205: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 4],
    points: [
      { x: 1, y: 1, label: 'this（近い・単数）' },
      { x: 1, y: 3, label: 'these（近い・複数）' },
      { x: 3, y: 1, label: 'that（遠い・単数）' },
      { x: 3, y: 3, label: 'those（遠い・複数）' },
    ],
    caption:
      '指示代名詞の二軸。横軸が距離（x＝1：話し手に近い／x＝3：遠い）、縦軸が数（y＝1：単数／y＝3：複数）。時間にも同じ感覚が働き、this week（今に近い時）に対し in those days（当時＝遠い時）となる。比較の文で名詞のくり返しを避けるときは、単数なら that、複数なら those を使う',
  },

  // s207：it / them / one / ones を「同一のものか」×「単数・複数」で整理
  lf_kokoeigoext06_207: {
    kind: 'coordinate',
    xRange: [0, 4],
    yRange: [0, 4],
    points: [
      { x: 1, y: 1, label: 'it（そのもの・単数）' },
      { x: 1, y: 3, label: 'them（それら・複数）' },
      { x: 3, y: 1, label: 'one（同種の別のもの・単数）' },
      { x: 3, y: 3, label: 'ones（同種の別のもの・複数）' },
    ],
    caption:
      'it と one の使い分け。横軸は指す対象（x＝1：前に出たものそのもの／x＝3：同じ種類の別のもの）、縦軸は数（y＝1：単数／y＝3：複数）。傘をなくして買うなら別の傘なので buy one、なくした傘を見つけたなら found it になる。one は可算名詞専用で、不可算名詞は some で受ける',
  },

  // s209：one / another / the other の並び（3つある場合）
  lf_kokoeigoext06_209: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'one（1つ目）' },
      { x: 2, label: 'another（残りのうちの1つ）' },
      { x: 3, label: 'the other（最後の1つ）' },
    ],
    segments: [{ from: 1, to: 3 }],
    caption:
      '3つあるときの並び：one → another → the other。まだ残りがあるうちは another（＝an+other）、これで最後という特定できる1つには the other を使う。2つしかないときは one 〜, the other … となり、4つ以上で「1つと残り全部」を言うときは one 〜, the others … となる',
  },

  // s213：形容詞を並べる順序（主観から客観へ）
  lf_kokoeigoext06_213: {
    kind: 'numberLine',
    min: 0,
    max: 8,
    step: 1,
    points: [
      { x: 1, label: '①評価（beautiful）' },
      { x: 2, label: '②大きさ（small）' },
      { x: 3, label: '③新旧（old）' },
      { x: 4, label: '④形（round）' },
      { x: 5, label: '⑤色（red）' },
      { x: 6, label: '⑥出身（Japanese）' },
      { x: 7, label: '⑦材料（wooden）' },
    ],
    segments: [{ from: 1, to: 7 }],
    caption:
      '形容詞を並べる順序は「主観 → 客観」。名詞に近いほど、その物と切りはなせない性質が来る。例）a beautiful small old Japanese doll（①②③⑥＋名詞）／a big round wooden table（②④⑦＋名詞）。限定語（a/the/my）は必ずこの列よりさらに前、数量を表す語（three, many）は評価より前に置く',
  },

  // s215：-thing 型の代名詞を修飾するときの語順
  lf_kokoeigoext06_215: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: 'something（-thing 型の代名詞）' },
      { x: 2, label: 'cold（形容詞は後ろ）' },
      { x: 3, label: 'to drink（to 不定詞はさらに後ろ）' },
    ],
    segments: [{ from: 1, to: 3 }],
    caption:
      '-thing / -one / -body で終わる代名詞は、形容詞を後ろに置く。something cold to drink（何か冷たい飲み物）のように「代名詞 → 形容詞 → to 不定詞」の順で、後ろへ後ろへ情報を足していく。else が入るときは anything else to say のように形容詞よりさらに後ろに置く',
  },

  // s217：頻度を表す副詞の度合い（always 100 〜 never 0）
  lf_kokoeigoext06_217: {
    kind: 'barChart',
    xLabel: '頻度を表す副詞',
    yLabel: 'おおよその頻度（％）',
    yMax: 100,
    bars: [
      { label: 'always（いつも）', value: 100 },
      { label: 'usually（たいてい）', value: 90 },
      { label: 'often（よく）', value: 70 },
      { label: 'sometimes（ときどき）', value: 50 },
      { label: 'seldom / rarely（めったに〜ない）', value: 10 },
      { label: 'never（決して〜ない）', value: 0 },
    ],
    caption:
      '頻度を表す副詞の度合いのめやす。always（100％）から never（0％）まで段階的に並ぶ。置き場所はどれも共通で「一般動詞の前、be動詞・助動詞の後ろ」＝not と同じ位置。seldom・rarely は 10％程度で、それ自体が否定の意味を持つため don\'t と重ねてはいけない',
  },

  // s219：副詞（句）を並べる順序（様態 → 場所 → 時）
  lf_kokoeigoext06_219: {
    kind: 'numberLine',
    min: 0,
    max: 4,
    step: 1,
    points: [
      { x: 1, label: '様態 well（どのように）' },
      { x: 2, label: '場所 in the park（どこで）' },
      { x: 3, label: '時 yesterday（いつ）' },
    ],
    segments: [{ from: 1, to: 3 }],
    caption:
      '副詞（句）が重なるときの順序は「様態 → 場所 → 時」。例）He played soccer well in the park yesterday.（彼は昨日、公園で上手にサッカーをした）。日本語は「時 → 場所 → 様態」の順が多く、英語とちょうど逆になる。場所や時が二つ重なるときは、小さい単位から大きい単位へ並べる（in Osaka in Japan／at seven on Monday）',
  },
};
